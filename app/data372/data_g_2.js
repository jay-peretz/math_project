/*global angular */

angular.module('mathSkills').service('data_g_2', ['dataUtils', function (dataUtils) {
    var desc = {
			title: 'G.2 Addition of Unlike Fractions',
			path: 'G.2-addition-of-unlike-fraction',
            children: []
        },
        template = {
                    twoFractions: {
                        title: 'Adding Unlike Fractions',
                        children: [{
                            title: 'Main Answer',
                            children: [{
        						problem: '\\html{&nbsp;}',
        						answer: '\\grp'
        							+'{\\frac{\\fracstr{$firstNum}}{\\fracstr{$firstDen}}}'
        							+'{\\sign{+}}'
        							+'{\\frac{\\fracstr{$secondNum}}{\\fracstr{$secondDen}}}'
        							+'{\\sign{=}}'
        							+'{\\frac{\\input{$sumNum}}{\\input{$answerDen}}}',
        						controls: {
        							"checkAnswer": true,
        							"help": false,
        							"workbook": true
        						}
                            }]
                        }, {
                            title: 'Workbook',
                            children: [{
        						problem: '\\grp'
        									+'{\\frac{\\fracstr{$firstNum}}{\\fracstr{$firstDen}}}'
        									+'{\\sign{+}}{\\frac{\\fracstr{$secondNum}}{\\fracstr{$secondDen}}}',
        						answer: '\\rowgrp'
        									+'{\\ins{Determine the lowest common denominator (LCD) of the fractions:}}'
        									+'{\\html{&nbsp;}}'
        									+'{\\grp{\\input{$answerDen}}}',
        						controls: {
        							"checkAnswer": true,
        							"help": true
        						},
                            }, {
                            	problem: '\\grp'
									+'{\\frac{\\fracstr{$firstNum}}{\\fracstr{$firstDen}}}'
									+'{\\sign{+}}{\\frac{\\fracstr{$secondNum}}{\\fracstr{$secondDen}}}',
        						answer: '\\css'
        									+'{\\rowgrp'
        										+'{\\html{Determine the lowest common denominator (LCD) of the fractions:}}'
        										+'{\\html{&nbsp;}}'
        										+'{\\html{$answerDen}}'
        										+'{\\html{&nbsp;}}'
        										+'{\\ins{Use the LCD to convert the fractions:}}'
        										+'{\\frac{\\grp{\\input{$firstAnswerNum}}{\\sign{+}}{\\input{$secondAnswerNum}}}{\\fracstr{$answerDen}}}'
        									+'}{well}',
        						controls: {
        							"checkAnswer": true,
        							"help": true
        						}
                            }, {
                            	problem: '\\grp'
									+'{\\frac{\\fracstr{$firstNum}}{\\fracstr{$firstDen}}}'
									+'{\\sign{+}}{\\frac{\\fracstr{$secondNum}}{\\fracstr{$secondDen}}}',
        						answer: '\\css'
        									+'{\\rowgrp'
        										+'{\\html{Determine the lowest common denominator (LCD) of the fractions:}}'
        										+'{\\html{&nbsp;}}'
        										+'{\\html{$answerDen}}'
        										+'{\\html{&nbsp;}}'
        										+'{\\html{Use the LCD to convert the fractions:}}'
        										+'{\\html{&nbsp;}}'
        										+'{\\grp{\\frac{\\fracstr{$firstNum}}{\\fracstr{$firstDen}}}'
        										+'{\\sign{=}}'
        										+'{\\frac{\\fracstr{$firstAnswerNum}}{\\fracstr{$answerDen}}}}'
        										+'{\\html{&nbsp;}}'
        										+'{\\grp{\\frac{\\fracstr{$secondNum}}{\\fracstr{$secondDen}}}'
        										+'{\\sign{=}}'
        										+'{\\frac{\\fracstr{$secondAnswerNum}}{\\fracstr{$answerDen}}}}'
        										+'{\\html{&nbsp;}}'
        										+'{\\ins{Add the numerators:}}'
												+'{\\grp{\\frac{\\grp{\\fracstr{$firstAnswerNum}}{\\sign{+}}{\\fracstr{$secondAnswerNum}}}{\\fracstr{$answerDen}}}{\\sign{=}}{\\frac{\\input{$sumNum}}{\\input{$answerDen}}}}'	
        									+'}{well}',
        						controls: {
        							"checkAnswer": true,
        							"help": true
        						}
                            }]
                        }]
                    },
        			threeFractions: {
                        title: 'Adding Unlike Fractions',
                        children: [{
                            title: 'Main Answer',
                            children: [{
        						problem: '\\html{&nbsp;}',
        						answer: '\\grp'
        							+'{\\frac{\\fracstr{$firstNum}}{\\fracstr{$firstDen}}}'
        							+'{\\sign{+}}'
									+'{\\frac{\\fracstr{$secondNum}}{\\fracstr{$secondDen}}}'        								
									+'{\\sign{+}}'
									+'{\\frac{\\fracstr{$thirdNum}}{\\fracstr{$thirdDen}}}'
        							+'{\\html{&nbsp;}}'
        							+'{\\sign{=}}'
									+'{\\html{&nbsp;}}'
									+'{\\frac{\\input{$sumNum}}{\\input{$answerDen}}}',
        						controls: {
        							"checkAnswer": true,
        							"help": false,
        							"workbook": true
        						}
                            }]
                        }, {
                            title: 'Workbook',
                            children: [{
        						problem: '\\grp'
        							+'{\\frac{\\fracstr{$firstNum}}{\\fracstr{$firstDen}}}'
        							+'{\\sign{+}}'
									+'{\\frac{\\fracstr{$secondNum}}{\\fracstr{$secondDen}}}'        								
									+'{\\sign{+}}'
									+'{\\frac{\\fracstr{$thirdNum}}{\\fracstr{$thirdDen}}}'
        							+'{\\html{&nbsp;}}',
        			   			answer: '\\rowgrp'
        									+'{\\ins{Determine the lowest common denominator (LCD) of the fractions:}}'
        									+'{\\html{&nbsp;}}'
        									+'{\\grp{\\input{$answerDen}}}',
        						controls: {
        							"checkAnswer": true,
        							"help": true
        						},
                            }, {
        						problem: '\\grp'
        							+'{\\frac{\\fracstr{$firstNum}}{\\fracstr{$firstDen}}}'
        							+'{\\sign{+}}'
									+'{\\frac{\\fracstr{$secondNum}}{\\fracstr{$secondDen}}}'        								
									+'{\\sign{+}}'
									+'{\\frac{\\fracstr{$thirdNum}}{\\fracstr{$thirdDen}}}'
        							+'{\\html{&nbsp;}}',
           						answer: '\\css'
        									+'{\\rowgrp'
        										+'{\\html{Determine the lowest common denominator (LCD) of the fractions:}}'
        										+'{\\html{&nbsp;}}'
        										+'{\\html{$answerDen}}'
        										+'{\\html{&nbsp;}}'
        										+'{\\ins{Use the LCD to convert the fractions:}}'
        										+'{\\frac{\\grp{\\input{$firstAnswerNum}}{\\sign{+}}{\\input{$secondAnswerNum}}{\\sign{+}}{\\input{$thirdAnswerNum}}}{\\fracstr{$answerDen}}}'
        										+'{\\html{&nbsp;}}'
        									+'}{well}',
        						controls: {
        							"checkAnswer": true,
        							"help": true
        						}
                            }, {
        						problem: '\\grp'
        							+'{\\frac{\\fracstr{$firstNum}}{\\fracstr{$firstDen}}}'
        							+'{\\sign{+}}'
									+'{\\frac{\\fracstr{$secondNum}}{\\fracstr{$secondDen}}}'        								
									+'{\\sign{+}}'
									+'{\\frac{\\fracstr{$thirdNum}}{\\fracstr{$thirdDen}}}'
        							+'{\\html{&nbsp;}}',
        						answer: '\\css'
        								+'{\\rowgrp'
        									+'{\\html{Determine the lowest common denominator (LCD) of the fractions:}}'
        									+'{\\html{&nbsp;}}'
        									+'{\\html{$answerDen}}'
        									+'{\\html{&nbsp;}}'
        									+'{\\html{Use the LCD to convert the fractions:}}'
											+'{\\html{&nbsp;}}'
        									+'{\\grp{\\frac{\\fracstr{$firstNum}}{\\fracstr{$firstDen}}}'
        										+'{\\sign{=}}'
        										+'{\\frac{\\fracstr{$firstAnswerNum}}{\\fracstr{$answerDen}}}}'
        									+'{\\html{&nbsp;}}'
        									+'{\\grp{\\frac{\\fracstr{$secondNum}}{\\fracstr{$secondDen}}}'
        										+'{\\sign{=}}'
        										+'{\\frac{\\fracstr{$secondAnswerNum}}{\\fracstr{$answerDen}}}}'
        									+'{\\html{&nbsp;}}'
        									+'{\\grp{\\grp{\\frac{\\fracstr{$thirdNum}}{\\fracstr{$thirdDen}}}'
        										+'{\\sign{=}}'
        										+'{\\frac{\\fracstr{$thirdAnswerNum}}{\\fracstr{$answerDen}}}}}'
        									+'{\\html{&nbsp;}}'
        									+'{\\ins{Add the numerators:}}'
											+'{\\grp{\\frac{\\grp{\\fracstr{$firstAnswerNum}}{\\sign{+}}{\\fracstr{$secondAnswerNum}}{\\sign{+}}{\\fracstr{$thirdAnswerNum}}}{\\fracstr{$answerDen}}}{\\sign{=}}{\\frac{\\input{$sumNum}}{\\input{$answerDen}}}}'	
        								+'}{well}',
        						controls: {
        							"checkAnswer": true,
        							"help": true
        						}
                            }]
                        }]
                    }
                },
                data = [
					// problem 1
                    { firstNum: '1', firstDen: '4', secondNum: '3', secondDen: '5', firstAnswerNum: '5', secondAnswerNum: '12', sumNum: '17', answerDen: '20', template: 'twoFractions' },
                    // problem 2
                    { firstNum: '1', firstDen: '9', secondNum: '1', secondDen: '4', firstAnswerNum: '4', secondAnswerNum: '9', sumNum: '13', answerDen: '36', template: 'twoFractions' },
					// problem 3
        			{ firstNum: '2', firstDen: '5', secondNum: '1', secondDen: '2', firstAnswerNum: '4', secondAnswerNum: '5', sumNum: '9', answerDen: '10', template: 'twoFractions' },
					// problem 4
        			{ firstNum: '3', firstDen: '4', secondNum: '1', secondDen: '6', firstAnswerNum: '9', secondAnswerNum: '2', sumNum: '11', answerDen: '12', template: 'twoFractions' },
					// problem 5
        			{ firstNum: '4', firstDen: '7', secondNum: '1', secondDen: '3', firstAnswerNum: '12', secondAnswerNum: '7', sumNum: '19', answerDen: '21', template: 'twoFractions' },
					// problem 6
        			{ firstNum: '3', firstDen: '8', secondNum: '1', secondDen: '3', firstAnswerNum: '9', secondAnswerNum: '8', sumNum: '17', answerDen: '24', template: 'twoFractions' },
					// problem 7
        			{ firstNum: '1', firstDen: '8', secondNum: '5', secondDen: '6', firstAnswerNum: '3', secondAnswerNum: '20', sumNum: '23', answerDen: '24', template: 'twoFractions' },
					// problem 8
        			{ firstNum: '1', firstDen: '2', secondNum: '1', secondDen: '4', thirdNum: '1', thirdDen: '6', firstAnswerNum: '6', secondAnswerNum: '3', thirdAnswerNum: '2', sumNum: '11', answerDen: '12', template: 'threeFractions' },
					// problem 9
        			{ firstNum: '3', firstDen: '10', secondNum: '1', secondDen: '\xA04\xA0', thirdNum: '4', thirdDen: '\xA05\xA0', firstAnswerNum: '6', secondAnswerNum: '5', thirdAnswerNum: '16', sumNum: '27', answerDen: '20', template: 'threeFractions' },
					// problem 10
        			{ firstNum: '1', firstDen: '4', secondNum: '1', secondDen: '3', thirdNum: '1', thirdDen: '8', firstAnswerNum: '6', secondAnswerNum: '8', thirdAnswerNum: '3', sumNum: '17', answerDen: '24', template: 'threeFractions' }
        			
                ];

            return dataUtils.build(desc, template, data);
        }]);
