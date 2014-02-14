'use strict';
/*global angular, jQuery */

angular.module('mathSkills')
    .config(['parserProvider', function (parserProvider) {
        parserProvider.register('canfrac', {
            directiveTemplate: '<ms-cancel-fracs expected={{expected}} label={{label}}></ms-cancel-fracs>'
        });
    }])
  .directive('msCancelFracs', [
        function () {
            return {
                controller: [
                    'directiveUtils',
                    'problemData',
                    'numberUtils',
                    'parser',
                    '$rootScope',
                    '$scope',
                    '$element',
                    '$compile',
                    '$timeout',
                    function (directiveUtils, problemData, numberUtils, parser, $rootScope, $scope, $element, $compile, $timeout) {

                        $scope.controllerId = Math.random().toString();
                        $scope.instructions = 'ins{Reduce the fractions by canceling.<br>Click on 2 values (1 numerator and 1 denominator) that have a common factor other than one.}';
                        $scope.buttons = '\\str{}';
                        $scope.showBtns = false;
                        $scope.x = '1';
                        
                        var build = function(){
                                $scope.n1 = '\\canele{n1}{' + $scope.x +'}';
                                $scope.n2 = '\\canele{n2}{' + $scope.x +'}';
                                $scope.n3 = '\\canele{n3}{' + $scope.x +'}';
                                $scope.d1 = '\\canele{d1}{' + $scope.x +'}';
                                $scope.d2 = '\\canele{d2}{' + $scope.x +'}';
                                $scope.d3 = '\\canele{d3}{' + $scope.x +'}';
                            },

                            update = function () {
                                $scope.x = $scope.x === '0' ? '1' : '0';
                                build();
                            },

                            cancellable = function (children) {
                                var num = [],
                                    den = [];
                                children.forEach(function (child) {
                                    if (child[0] === 'n') {
                                        num = num.concat(numberUtils.getFactors(problemData.getData(child).arr[0]));
                                    } else if (child[0] === 'd'){
                                        den = den.concat(numberUtils.getFactors(problemData.getData(child).arr[0]));
                                    }
                                });   
                                return numberUtils.getCommonFactors(numberUtils.uniqueArr(num), numberUtils.uniqueArr(den));  
                            },

                            isCancellable = function (children) {
                                return (cancellable(children).length > 0) ? true : false;
                            },

                            setAll = function (stage) {
                                ['n1', 'd1', 'n2', 'd2','n3', 'd3'].forEach(function (element) {
                                    problemData.getData(element).type = stage;
                                });
                            },

                            buildButtons = function () {
                                var yes = isCancellable($scope.children) ? 'T' : 'F';
                                var no = isCancellable($scope.children) ? 'F' : 'T';
                                $scope.buttons = '\\grp{\\btn{Yes}{' + yes + '}}{\\btn{No}{' + no + '}}';
                            },

                            answerCount = 0,
                            numAnswer = '',
                            denAnswer = '',
                            num = '',
                            den = '';

                        $scope.$watch('expected', function () {
                            if ($scope.expected) {
                                $scope.args = directiveUtils.preProcess(parser.extractTag($scope.expected).args);              //console.log('this is ', $scope.args);
                                $scope.answer = $scope.args.pop();  //console.log('answer', JSON.stringify($scope.answer), 'args', JSON.stringify($scope.args));
                                $scope.display = $scope.args.length < 3;
                                $scope.problemWidth = $scope.args.length < 3 ? "30": "40";
                                $scope.solveBuild = '\\grp{\\sign{=}}{\\frac{\\input{' +  $scope.answer[0] + '}}{\\input{' +  $scope.answer[1] + '}}}'; //console.log('solve', $scope.solve);
                                $scope.solve = '\\str{}';
                                $scope.showAnswer = true;

                                $scope.tag = 'canfrac';
                                $scope.children = ['ins', 'n1', 'd1', 'n2', 'd2'];
                                $scope.routePath = [0,1,4,2,5];

                                problemData.addData({arr: [$scope.args[0][0]], type:'btn', answer:[]}, 'n1');
                                problemData.addData({arr: [$scope.args[0][1]], type:'btn', answer:[]}, 'd1');
                                problemData.addData({arr: [$scope.args[1][0]], type:'btn', answer:[]}, 'n2');
                                problemData.addData({arr: [$scope.args[1][1]], type:'btn', answer:[]}, 'd2');
                                problemData.addData({arr: [], type:'btn', answer:[]}, 'n3');
                                problemData.addData({arr: [], type:'btn', answer:[]}, 'd3');
                                if($scope.args.length > 2){
                                    $scope.children = $scope.children.concat(['n3', 'd3']);
                                    $scope.routePath = $scope.routePath.concat([3,6]);
                                    problemData.addData({arr: [$scope.args[2][0]], type:'btn', answer:[]}, 'n3');
                                    problemData.addData({arr: [$scope.args[2][1]], type:'btn', answer:[]}, 'd3');
                                }
                                $scope.children.push('buttons');
                                $scope.routePath.push(8);
                                
                                if(isCancellable($scope.children)){
                                    problemData.addData('btn', 'stage');
                                    problemData.addData(false, 'nLock');
                                    problemData.addData(false, 'dLock');
                                    problemData.addData(cancellable($scope.children), 'comFac');
                                    
                                    $timeout(function () {
                                        $scope.$emit('answerBtn', false);
                                        $scope.$emit('triggerCheckFocus');
                                    }, 900);
                                } else {
                                    //$scope.instructions = 'ins{Do the fractions have any common factors?}';
                                    $scope.instructions = 'ins{Do any numerator and denominator have a common factor?}';
                                    setAll('str');
                                    problemData.addData('cancellable', 'stage');
                                    buildButtons();
                                    $timeout(function () {
                                        $scope.$emit('answerBtn', false);
                                        $scope.$emit('triggerCheckFocus');
                                    }, 900);
                                }
                                
                                update();
                            }
                        });

                        $scope.$on('clearClicks', function() {
                            //$scope.$broadcast('clear', num);
                            //$scope.$broadcast('clear', den);
                            num = '';
                            den = '';
                        });

                        $scope.$on('tx', function (e, dataIn) {
                            e.stopPropagation();

                            if(problemData.getData('stage') === 'btn'){
                                
                                if(dataIn.label[0] === 'n'){
                                    if (num !== '') {
                                        num = dataIn.label;
                                        $scope.$broadcast('clear', num);
                                    } else {
                                        num = dataIn.label;
                                    }
                                } else {
                                    if (den !== '') {
                                        den = dataIn.label;
                                        $scope.$broadcast('clear', den);
                                    } else {
                                        den = dataIn.label;
                                    }
                                }
    
                                if(num !== '' && den !== ''){
                                    
console.log('cancellable ', isCancellable($scope.children));

console.log('num ', problemData.getData(num).arr[0], ' factors ', numberUtils.getFactors(problemData.getData(num).arr[0]));
console.log('den ', problemData.getData(den).arr[0], ' factors ', numberUtils.getFactors(problemData.getData(den).arr[0]));
console.log('common ', numberUtils.getCommonFactors(numberUtils.getFactors(problemData.getData(num).arr[0]), numberUtils.getFactors(problemData.getData(den).arr[0])));

console.log('num answers ', numberUtils.getFactoredInput(problemData.getData(num).arr[0], problemData.getData(den).arr[0])[0]);
console.log('den answers ', numberUtils.getFactoredInput(problemData.getData(num).arr[0], problemData.getData(den).arr[0])[1]);

                                    if (numberUtils.getCommonFactors(numberUtils.getFactors(problemData.getData(num).arr[0]), numberUtils.getFactors(problemData.getData(den).arr[0])).length > 0) {

                                        problemData.getData(num).arr.splice(0, 0,problemData.getData(num).arr[0]);
                                        problemData.getData(den).arr.splice(0, 0,problemData.getData(den).arr[0]);
                                        problemData.getData(num).type = 'input';
                                        problemData.getData(den).type = 'input';
                                        problemData.getData(num).answer = numberUtils.getFactoredInput(problemData.getData(num).arr[0], problemData.getData(den).arr[0])[0];
                                        problemData.getData(den).answer = numberUtils.getFactoredInput(problemData.getData(num).arr[0], problemData.getData(den).arr[0])[1];
                                        
                                        problemData.addData('input', 'stage');
                                        $scope.$broadcast('correct', num, den);
                                        $timeout(function () {
                                            $scope.$emit('answerBtn', 'Check Answer', true);
                                            $scope.instructions = 'ins{Enter the result of cancelling the selected numerator and denominator.}';
                                            update();
                                            $scope.$apply();
                                            $scope.$emit('triggerCheckFocus');
                                        }, 200);

                                    } else {
                                        $scope.$broadcast('noComm', num, den);
                                        num = '';
                                        den = '';
                                    }
                                }
                            }
                        });

                        $scope.$on('answer', function (e, dataIn) { //console.log('\n', dataIn);
																				  
                            if(problemData.getData('stage') !== 'solve' || dataIn.result !== 'correct' || dataIn.expected !== $scope.solveBuild){
							
								if ($scope.controllerId !== dataIn.controllerId){
									e.stopPropagation();
	
									if(problemData.getData('stage') === 'input'){ //console.log('stage is input');
										
										var gotBoth = function () {
	
											if(numAnswer !== '' && denAnswer !== ''){ //console.log('got both answers');
												if (numAnswer.result === 'correct' 
														&& denAnswer.result === 'correct' 
														&& parser.extractTag(parser.extractTag(numAnswer.answer).args[0]).args[0].length > 0
														&& parser.extractTag(parser.extractTag(denAnswer.answer).args[parser.extractTag(dataIn.answer).args.length - 1]).args[0].length > 0
													) { //console.log('both correct');
													problemData.getData(num).arr.splice(0, 1);
													problemData.getData(den).arr.splice(0, 1);
													problemData.getData(num).arr.splice(0, 0, parser.extractTag(parser.extractTag(numAnswer.answer).args[0]).args[0]);
													problemData.getData(den).arr.splice(0, 0, parser.extractTag(parser.extractTag(denAnswer.answer).args[parser.extractTag(dataIn.answer).args.length - 1]).args[0]);
													setAll('str');
													problemData.addData('cancellable', 'stage');
													numAnswer = '';
													denAnswer = '';
													
													$timeout(function () {
														$scope.instructions = 'ins{Can you cancel again?<br>}';
														$scope.$emit('answerBtn', false);
														buildButtons();
														update();
														$timeout(function () {
															$scope.$emit('triggerCheckFocus');
														}, 0);
													}, 900);
												} else { //console.log('wrong answer');
													$timeout(function () {
														$scope.$emit('triggerCheckFocus');
													}, 900);
													numAnswer = '';
													denAnswer = '';
												}
												problemData.resetIndex();
											}
										};
	
										if(problemData.getData('stage') === 'input' && dataIn.label === num){ //console.log('we have num match');
											numAnswer = dataIn;
											gotBoth(); 
										}
										if(problemData.getData('stage') === 'input' && dataIn.label === den){ //console.log('we have den match');
											denAnswer = dataIn;
											gotBoth(); 
										}
										// console.log('ac',  answerCount);
										// console.log('num ', num);
										// console.log('den ', den,'\n');
									}
	
									if(problemData.getData('stage') === 'cancellable' && dataIn.label === 'buttons' && dataIn.expected !== "\\str{}"){ //console.log('running cancellable');
	
										if (dataIn.result === 'correct')
											if(isCancellable($scope.children)){ //console.log('running is cancellable');
												setAll('btn');
												problemData.addData('btn', 'stage');
												problemData.addData(false, 'nLock');
												problemData.addData(false, 'dLock');
												answerCount = 0;
												numAnswer = '';
												denAnswer = '';
												num = '';
												den = ''; 
												problemData.addData(cancellable($scope.children), 'comFac');
												$timeout(function () {
													$scope.instructions = 'ins{Click on 2 values (1 numerator and 1 denominator) that have a common factor other than one.<br>}';
													$scope.$emit('answerBtn', 'noAnswer');
													$scope.buttons = '\\str{}';
													update();
													$timeout(function () {
														$scope.$emit('triggerCheckFocus');
													}, 0);
												}, 900);
											} else { //console.log('running isNot cancellable');
												$scope.routePath.pop();
												$scope.routePath.push(7);
												setAll('str');
												problemData.addData('solve', 'stage');
												$scope.$emit('answerBtn', 'Check Answer');
												$timeout(function () {
													$scope.instructions = 'ins{Multiply the fractions together.<br>}';
													$scope.buttons = '\\str{}';
													$scope.solve = $scope.solveBuild;
													update();
													$timeout(function () {
														$scope.$emit('triggerCheckFocus');
													}, 0);
												}, 1000);
												
											}
										} else {
											$timeout(function () {
												$scope.$emit('triggerCheckFocus');
											}, 900);
										}
									
									}
	
									
								} else {									
									$scope.$emit('answer', {
										label: 'cancel',
										result: 'correct',
										controllerId: $scope.controllerId
									});									
								}
							}
                        );

                        directiveUtils.aggregateChildAnswers($scope);
                        directiveUtils.routeFocus($scope);
                        directiveUtils.routeHelp($scope);
                    }
                ],
                scope: {
                    expected: '@',
                    label: '@'
                },
                restrict: 'E',
                template:  
                
                '<table>'+
                    '<tbody>'+
                        '<tr>'+
                            '<td colspan="2"><ms-expression expected={{instructions}} label=ins></ms-expression></td>'+   // 0 
                        '</tr>'+
                        '<tr>'+
                            '<td style="width:{{problemWidth}}%;">'+
                                '<table class={{opclass}}>'+
                                    '<tr>'+
                                        '<td class=num><ms-expression expected={{n1}} label=n1></ms-expression></td>'+ // 1
                                        '<td></td>'+
                                        '<td class=num><ms-expression expected={{n2}} label=n2></ms-expression></td>'+ // 2
                                        '<td ng-hide="display"></td>'+
                                        '<td class=num ng-hide="display"><ms-expression expected={{n3}} label=n3></ms-expression></td>'+ // 3
                                    '</tr>'+
                                    '<tr>'+
                                        '<td><hr class=msCancelHr></td>'+
                                        '<td class=msCancelSign>x</td>'+     
                                        '<td><hr class=msCancelHr></td>'+
                                        '<td ng-hide="display" class=msCancelSign>x</td>'+     
                                        '<td ng-hide="display"><hr class=msCancelHr></td>'+
                                    '</tr>'+
                                    '<tr>'+
                                        '<td class=den><ms-expression expected={{d1}} label=d1></ms-expression></td>'+ // 4
                                        '<td></td>'+
                                        '<td class=den><ms-expression expected={{d2}} label=d2></ms-expression></td>'+ // 5
                                        '<td ng-hide="display"></td>'+
                                        '<td class=den ng-hide="display"><ms-expression expected={{d3}} label=d3></ms-expression></td>'+ // 6
                                    '</tr>'+
                                '</table>'+
                            '</td>'+
                            '<td>'+
                                '<ms-expression expected={{solve}} label=buttons></ms-expression>'+ // 
                            '</td>'+
                        '</tr>'+
                        '<tr>'+
                            '<td colspan="2" style="padding: 20px 0;"><ms-expression expected={{buttons}} label=buttons></ms-expression></td>'+ // 7
                        '</tr>'+  
                    '</tbody>'+    
                '</table>'        
        };
    }]);
    
    
    