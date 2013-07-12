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
                
                setData: function (data, key) {
                    privateProblemData[key] = data;
                    $rootScope.$broadcast('recompile');
                    //console.log("set data-key", privateProblemData[key]);
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
                    if(privateProblemData.flip){ console.log('ya flip');
                        if (privateProblemData.flip[0].indexOf(privateProblemData.index) !== -1){ console.log('ya flip index'); 
                            for (var ii = 1; ii < privateProblemData.flip.length; ii++ ){
                                var work = privateProblemData[privateProblemData.flip[ii][0]];
                                privateProblemData[privateProblemData.flip[ii][0]] = privateProblemData[privateProblemData.flip[ii][1]]; console.log(ii, '-0', privateProblemData[privateProblemData.flip[ii][0]]); 
                                privateProblemData[privateProblemData.flip[ii][1]] = work; console.log(ii, '-1', privateProblemData[privateProblemData.flip[ii][1]]); 
                            }
                            $rootScope.$broadcast('recompile'); console.log('ya recompiled');
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
                index: function (ii) { console.log('in index');
                    if (privateProblemData.index === undefined) {
                        privateProblemData.index = ii; console.log('in is!!!', privateProblemData.index);
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
                    // check if we have second arg.
if ($scope.myargs.length > 1){  
    // if there is data- put it in input value 
    if (problemData.checkData($scope.myargs[1]) !== false) {
        $scope.answer = problemData.getData($scope.myargs[1]);   
    }
                        
                        $scope.values = values;
                    
                        $scope.$on('answer', function (e, data) {  //console.log('problem answer', data); console.log('report answer', data.expected);
                            if ("func" in $scope.data) {
                                data.event = 'answer';
                                problemData.handleEvent($scope);
                            }
                        });
                        
                        $scope.$on('updateVal', function (e, data) {  //console.log('problem answer', data); console.log('report answer', data.expected);
                            $scope[values[0]] = '8'; //problemData.getData($scope.myargs[1]); 
                        });
                        
                        jQuery($element).on('keyup', 'input', function (event) {
                            $scope.$apply(problemData.handleEvent($scope));
                        });
                    }
                },

                handleEvent: function ($scope){ console.log('log out  ', $scope.data);
                        if ($scope.data.key) {
                           this.setData($scope.answer, $scope.data.key); 
                        } 
                        if ($scope.data.func) {
                            $scope.data.result = this.checkAnswer($scope) ? true : false; 
                            $scope.data = $scope.data.arr ? this.process($scope.data, $scope.data.arr) : $scope.data;
                            delete $scope.data.arr;
                            this.setEventData($scope.data, $scope.data.key); // store data obj by key in "e" obj.
                            this.mainfunc($scope.data.func, $scope.data, $scope); // call custom handler
                        }   console.log('ya', $scope.data);
                },

                mainfunc: function (func, data, $scope){ 
                    if (func !== false) {this[func].apply(this, Array.prototype.slice.call(arguments, 1))} //console.log('func.......  ran ', func);
                },
      
                process: function (dataObj, addObj) { 
                    return this.joinObj(dataObj, this.preProcess(addObj));
                },
                
                preProcess: function (obj){
                    obj = obj
                        .replace(new RegExp('\\[', 'g'),'{"')
                        .replace(new RegExp(':', 'g'),'":"')
                        .replace(new RegExp(',', 'g'),'","')
                        .replace(new RegExp(']', 'g'),'"}'); 
                    obj = JSON.parse(obj);
                    return obj;
                },

                joinObj: function (dataObj, addObj) {
                    for (var prop in addObj) {
                        if (addObj.hasOwnProperty(prop)) {
                            dataObj[prop] = addObj[prop];
                        }
                    } 
                    return dataObj;
                },

                checkAnswer: function ($scope) {
                    if ($scope.data.expected && $scope.data.expected[0] === '[') {
                        var possibleAnswers = JSON.parse($scope.data.expected);
                        this.getIndex().then(function (index) {
                            $scope.data.expected = possibleAnswers[index];
                        });
                    }
                    return $scope.data.expt === $scope[$scope.values[0]];
                },

                updateVal: function () {
                    $rootScope.$broadcast('updateVal');
                },
                
                setEventData: function (data, key) {
                    e[key] = data;
                },
                
                getEventData: function (key) {
                    return e[key];
                },

                /***************************************************************
                * custom event handler functions
                ***************************************************************/
                //func: function (data, $scope){ console.log("data", data); //console.log("$scope", $scope);}
                
                func: function (data, $scope){ //console.log("data ",data.func, data); console.log("$scope", $scope);
                    if (data.result){
                        //problemData.index("5");
                        this.updateVal(); //console.log('func....... is running ');
                    }
                    
                }
            };

            return problemData;
        }
    ]);
