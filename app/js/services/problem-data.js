'use strict';
/*global angular, jQuery */

var privateProblemData = {},
    e = {};
    
angular.module('mathSkills.services')
    .run([
        '$rootScope',
        '$routeParams',
        '$timeout',
        function ($rootScope, $routeParams, $timeout) {
            
            // Store answer events.
            $rootScope.$on('answer', function (e, data) {  //console.log('problem answer', data);
               
                privateProblemData.previousCorrect = data.result === 'correct' ? true : false;
                if (data.noRecompile !== true){
                    $timeout(function () {
                        $rootScope.$broadcast('recompile');
                    }, 1000);
                }
            });
            
        }
    ])
    /**
     * Provides access to stored Problem data.
     */
    .service('problemData', [
        '$rootScope', 
        'panelGroupData',
        '$q',
        '$timeout',
        function ($rootScope, panelGroupData, $q, $timeout) {
            var problemData = {
                
                setObject: function (data) {
                    privateProblemData = data;
                    e = {};
                    //console.log("set data-data", privateData);
                },

                addData: function (data, key) {
                    privateProblemData[key] = data;
                },

                setData: function (data, key) {
                    privateProblemData[key] = data;
                    $rootScope.$broadcast('recompile');
                },

                getData: function (key) {
                    return privateProblemData[key];
                },

                checkData: function (key, opt) { //console.log('key', key);
                    return key in privateProblemData ? privateProblemData[key] : false;
                },

                compile: function (expectedString){
                    for (var symbol in privateProblemData) {
                        if (privateProblemData.hasOwnProperty(symbol)) {
                            expectedString = expectedString.replace(new RegExp('\\$\\$' + symbol, 'g'), privateProblemData[symbol]);
                        }
                    }
                    // console.log("compile string", expectedString);
                    return expectedString; 
                },

                flip: function () { 
                    if(privateProblemData.flip){
                        if (privateProblemData.flip[0].indexOf(privateProblemData.index) !== -1){
                            for (var ii = 1; ii < privateProblemData.flip.length; ii++ ){
                                var work = privateProblemData[privateProblemData.flip[ii][0]];
                                privateProblemData[privateProblemData.flip[ii][0]] = privateProblemData[privateProblemData.flip[ii][1]];
                                privateProblemData[privateProblemData.flip[ii][1]] = work;
                            }
                            $rootScope.$broadcast('recompile');
                        }
                    }
                },

                /**
                 * Validates the answer index for a multiple answer problem.  If
                 * there is no current valid answer index, the passed in index
                 * becomes the valid index.
                 *
                 * @param {Number} ii The index value to validate.
                 * @return {Boolean} Whether the passed in index is correct.
                 */
                index: function (ii) {
                    if (privateProblemData.index === undefined) {
                        privateProblemData.index = ii;
                        this.flip();
                    }
                    return privateProblemData.index;
                },
                getIndex: function () {
                    var deferred = $q.defer();

                    $timeout(function () {
                        if (privateProblemData.index === undefined) {
                            deferred.resolve(0);
                        } else {
                            deferred.resolve(privateProblemData.index);
                        }
                    }, 0);

                    return deferred.promise;
                },
                resetIndex: function () {
                    return delete privateProblemData.index;
                },

                /***************************************************************
                * live data/event utils.                                           
                ***************************************************************/

                init: function ($element, $scope, values){

                    if ($scope.data.key){  

                        // put "values" on $scope
                        $scope.values = values;
                        // store/copy $scope.values from $scope to $scope.data object 
                        this.valToScope($scope);

                        /*******  setup event listners  ****************************************/

                        $scope.$on('updateVal', function (e, data) {  //console.log('EVENT on- updateVal', data);
                            $scope.values.forEach(function (elem, index, arr) {
                                $scope[elem] = $scope.data[elem];
                            });
                        });

                        $scope.$on('answer', function (e, data) {  //console.log('EVENT on- answer', data);
                                $scope.data.event = 'answer';
                                problemData.handleEvent($scope);
                        });

                        $scope.$on('helped', function (e, data) {  //console.log('EVENT on- answer', data);
                                $scope.data.event = 'helped';
                                problemData.handleEvent($scope);
                        });

                        jQuery($element).on('keyup', 'input', function (event) {  //console.log('EVENT on- keyup', event);
                        $scope.data.event = 'keyup';
                            $scope.$apply(problemData.handleEvent($scope));
                        });

                        jQuery($element).on('change', function() {  //console.log('EVENT on- change', data);
                        $scope.data.event = 'change';
                            $scope.$apply(problemData.handleEvent($scope));
                        });

                        //console.log('$scope.data- ', $scope.data);
                    }
                },

                handleEvent: function ($scope){ //console.log('ENTER handleEvent   ', $scope.data);
                    if ($scope.data.key) {
                        // copy user answer to $$vars- does not get used yet!
                        this.addData($scope.answer, $scope.data.key);
                        // store/copy $scope.values from $scope to $scope.data object 
                        this.valToScope($scope);
                        //check if user answer is correct
                        $scope.data.result = this.checkAnswer($scope) ? true : false;     
                    }
                    // copy ms-code args to $scope.data object
                    if ($scope.data.arr) {
                        $scope.data = $scope.data.arr ? this.process($scope.data, $scope.data.arr) : $scope.data;
                        delete $scope.data.arr;
                    }
                    // dynamically call custom event handler
                    if ($scope.data.func) {
                        this.mainfunc($scope.data.func, $scope.data, $scope); 
                    }
                    //console.log('EXIT handleEvent   ', $scope.data);
                },

                // dynamically call function
                mainfunc: function (func, data, $scope){ 
                    if (func !== false) {this[func].apply(this, Array.prototype.slice.call(arguments, 1))} //console.log('calling ', func);
                },

                // process two objects call- methods preProcess() and joinObj()
                process: function (dataObj, addObj) { 
                    return this.joinObj(dataObj, this.preProcess(addObj));
                },

                // pre process a "ms-code" string object rep. "[name1:val1,name2:val2]" to "{"name1":"val1","name2":val2"}" then {name1:val1,name2:val2}
                preProcess: function (obj){
                    obj = obj
                        .replace(new RegExp('\\[', 'g'),'{"')
                        .replace(new RegExp(':', 'g'),'":"')
                        .replace(new RegExp(',', 'g'),'","')
                        .replace(new RegExp(']', 'g'),'"}'); 
                    obj = JSON.parse(obj);
                    return obj;
                },

                // add "addObj" properties to "dataObj"
                joinObj: function (dataObj, addObj) {
                    for (var prop in addObj) {
                        if (addObj.hasOwnProperty(prop)) {
                            dataObj[prop] = addObj[prop];
                        }
                    }
                    return dataObj;
                },

                //check user answer return true or false
                checkAnswer: function ($scope) {
                    if ($scope.data.expt && $scope.data.expt[0] === '[') {
                        var possibleAnswers = JSON.parse($scope.data.expt);
                        this.getIndex().then(function (index) {
                            $scope.data.expt = possibleAnswers[index];
                        }); console.warn('multiple answer code may not work yet');
                    }
                    return $scope.data.expt === $scope[$scope.values[0]];
                },

                // store/copy $scope.values from $scope to $scope.data object 
                valToScope: function ($scope) {
                    $scope.values.forEach(function (elem, index, arr) {
                        $scope.data[elem] = $scope[elem];
                    });
                    this.setEventData($scope.data, $scope.data.key); 
                },

                //...... "//" to " "
                stripEscape: function (arr) {
                    return arr.replace(new RegExp('\\\\', 'g'),''); 
                },

                // update view
                apply: function () {
                    $rootScope.$broadcast('updateVal');
                },
                
                // set global object "e" object[key] 
                setEventData: function (data, key) {
                    e[key] = data;
                },

                // get global object "e" object[key] 
                getEventData: function (key) {
                    return e[key];
                },

                /***************************************************************
                * custom event handler functions
                ***************************************************************/
                //func: function (data, $scope){ console.log("data", data); //console.log("$scope", $scope);}

                func: function (data, $scope){ //console.log("functions data ", data); // console.log("functions $scope on enter- ", $scope);
                    var index = e.selRDen.optionsarray.indexOf(e.selRDen.answer);
                    if (data.result && data.expt === '1'){
                        e.selRDen.optionsarray = JSON.parse(this.stripEscape(this.getData('xlblarr')));
                        e.selRDen.answercorrect = this.getData('xlbld');
                        e.selRDen.answer = e.selRDen.answer !== "" ? e.selRDen.optionsarray[index] : e.selRDen.answer ;
                        e.selRDen.expt = this.getData('xlbld');
                        this.apply();
                    }else{
                        e.selRDen.optionsarray = JSON.parse(this.stripEscape(this.getData('lblarr')));
                        e.selRDen.answercorrect = this.getData('lbld');
                        e.selRDen.answer = e.selRDen.answer !== "" ? e.selRDen.optionsarray[index] : e.selRDen.answer ;
                        e.selRDen.expt = this.getData('lbld');
                        this.apply();
                    }
                    if (data.event === 'answer') {
                        this.addData(this.getData('xlbld'), 'lbld');
                    }
                }


            };
            return problemData;
        }
    ]);
