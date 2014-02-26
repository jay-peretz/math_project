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
        							+'{mixed{\\input{$whole}}{\\frac{\\input{$answerNum}}{\\input{$answerDen}}}}',
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
        									+'{\\grp{\\input{$answer1Den}}}',
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
        										+'{\\html{$answer1Den}}'
        										+'{\\html{&nbsp;}}'
        										+'{\\ins{Use the LCD to convert the fractions:}}'
        										+'{\\grp{\\frac{\\fracstr{$firstNum}}{\\fracstr{$firstDen}}}'
        										+'{\\sign{+}}'
        										+'{\\frac{\\fracstr{$secondNum}}{\\fracstr{$secondDen}}}}'       								
        										+'{\\html{&nbsp;}}'        										
        										+'{\\grp'
        											+'{\\frac{\\input{$firstAnswerNum}}{\\fracstr{$answer1Den}}}'
        											+'{\\sign{+}}'
        											+'{\\frac{\\input{$secondAnswerNum}}{\\fracstr{$answer1Den}}}'
        										+'}'
        										+'{\\html{&nbsp;}}'       									
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
        										+'{\\html{$answer1Den}}'
        										+'{\\html{&nbsp;}}'
        										+'{\\html{Use the LCD to convert the fractions:}}'
        										+'{\\html{&nbsp;}}'
        										+'{\\grp{\\frac{\\fracstr{$firstNum}}{\\fracstr{$firstDen}}}'
        										+'{\\sign{+}}'
        										+'{\\frac{\\fracstr{$secondNum}}{\\fracstr{$secondDen}}}}'       								
        										+'{\\html{&nbsp;}}'        										
        										+'{\\grp{\\frac{\\fracstr{$firstAnswerNum}}{\\fracstr{$answer1Den}}}'
        										+'{\\sign{+}}'
        										+'{\\frac{\\fracstr{$secondAnswerNum}}{\\fracstr{$answer1Den}}}}'
        										+'{\\html{&nbsp;}}'
        										+'{\\ins{Add the numerators and simplify the fraction if necessary:}}'
												+'{\\grp{\\frac{\\grp{\\fracstr{$firstAnswerNum}}{\\sign{+}}{\\fracstr{$secondAnswerNum}}}{\\fracstr{$answer1Den}}}{\\sign{=}}{\\frac{\\input{$sumNum}}{\\input{$answer2Den}}}}'	
        									+'}{well}',
        						controls: {
        							"checkAnswer": true,
        							"help": true,
									"fixBottomRight": true
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
									+'{mixed{\\input{$whole}}{\\frac{\\input{$answerNum}}{\\input{$answerDen}}}}',
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
        									+'{\\grp{\\input{$answer1Den}}}',
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
        										+'{\\html{$answer1Den}}'
        										+'{\\html{&nbsp;}}'
        										+'{\\ins{Use the LCD to convert the fractions:}}'     										
        										+'{\\grp{\\frac{\\fracstr{$firstNum}}{\\fracstr{$firstDen}}}'
												+'{\\sign{+}}'
												+'{\\frac{\\fracstr{$secondNum}}{\\fracstr{$secondDen}}}'
												+'{\\sign{+}}'
												+'{\\frac{\\fracstr{$thirdNum}}{\\fracstr{$thirdDen}}}}'
												+'{\\html{&nbsp;}}'
												+'{\\grp{\\frac{\\input{$firstAnswerNum}}{\\fracstr{$answer1Den}}}'
												+'{\\sign{+}}'
												+'{\\frac{\\input{$secondAnswerNum}}{\\fracstr{$answer1Den}}}'
												+'{\\sign{+}}'
												+'{\\frac{\\input{$thirdAnswerNum}}{\\fracstr{$answer1Den}}}}'
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
        									+'{\\html{$answer1Den}}'
        									+'{\\html{&nbsp;}}'
        									+'{\\html{Use the LCD to convert the fractions:}}'
											+'{\\html{&nbsp;}}'
        									+'{\\grp{\\frac{\\fracstr{$firstNum}}{\\fracstr{$firstDen}}}'
											+'{\\sign{+}}'
											+'{\\frac{\\fracstr{$secondNum}}{\\fracstr{$secondDen}}}'
											+'{\\sign{+}}'
											+'{\\frac{\\fracstr{$thirdNum}}{\\fracstr{$thirdDen}}}}'
											+'{\\html{&nbsp;}}'
											+'{\\grp{\\frac{\\fracstr{$firstAnswerNum}}{\\fracstr{$answer1Den}}}'
											+'{\\sign{+}}'
											+'{\\frac{\\fracstr{$secondAnswerNum}}{\\fracstr{$answer1Den}}}'
											+'{\\sign{+}}'
											+'{\\frac{\\fracstr{$thirdAnswerNum}}{\\fracstr{$answer1Den}}}}'
        									+'{\\html{&nbsp;}}'
        									+'{\\ins{Add the numerators and simplify the fraction if necessary:}}'
											+'{\\grp{\\frac{\\grp{\\fracstr{$firstAnswerNum}}{\\sign{+}}{\\fracstr{$secondAnswerNum}}{\\sign{+}}{\\fracstr{$thirdAnswerNum}}}{\\fracstr{$answer1Den}}}{\\sign{=}}{\\frac{\\input{$sumNum}}{\\input{$answer2Den}}}}'	
        								+'}{well}',
        						controls: {
        							"checkAnswer": true,
        							"help": true,
									"fixBottomRight": true
        						}
                            }]
                        }]
                    }
                },
                data = [
					// problem 1
                    { firstNum: '2', firstDen: '7', secondNum: '3', secondDen: '5', firstAnswerNum: '10', secondAnswerNum: '21', sumNum: '31', answerDen: '35', whole:'', answerNum:'31', answer1Den: '35', answer2Den: '35', template: 'twoFractions' },
                    // problem 2
                    { firstNum: '2', firstDen: '3', secondNum: '1', secondDen: '4', firstAnswerNum: '8', secondAnswerNum: '3', sumNum: '11', answerDen: '12', whole:'', answerNum:'11', answer1Den: '12', answer2Den: '12', template: 'twoFractions' },
					// problem 3
        			{ firstNum: '1', firstDen: '2', secondNum: '3', secondDen: '10', firstAnswerNum: '5', secondAnswerNum: '3', sumNum: '4', answerDen: '5', whole:'', answerNum:'4', answer1Den: '10', answer2Den:'5', template: 'twoFractions' },
					// problem 4
        			{ firstNum: '5', firstDen: '6', secondNum: '3', secondDen: '8', firstAnswerNum: '20', secondAnswerNum: '9', sumNum: '29', answerDen: '24', whole:'1', answerNum:'5', answer1Den: '24', answer2Den: '24', template: 'twoFractions' },
					// problem 5
        			{ firstNum: '7', firstDen: '11', secondNum: '2', secondDen: '3', firstAnswerNum: '21', secondAnswerNum: '22', sumNum: '43', answerDen: '33', whole:'1', answerNum:'10', answer1Den: '33', answer2Den: '33', template: 'twoFractions' },
					// problem 6
        			{ firstNum: '7', firstDen: '3', secondNum: '10', secondDen: '6', firstAnswerNum: '14', secondAnswerNum: '10', sumNum: '4', answerDen: '', whole:'4', answerNum:'', answer1Den: '6', answer2Den:'', template: 'twoFractions' },
					// problem 7
        			{ firstNum: '2', firstDen: '9', secondNum: '1', secondDen: '6', thirdNum: '2', thirdDen: '3', firstAnswerNum: '4', secondAnswerNum: '3', thirdAnswerNum: '12', sumNum: '19', answerDen: '18', whole:'1', answerNum:'1', answer1Den: '18', answer2Den: '18', template: 'threeFractions' },
					// problem 8
        			{ firstNum: '5', firstDen: '8', secondNum: '1', secondDen: '2', thirdNum: '3', thirdDen: '10', firstAnswerNum: '25', secondAnswerNum: '20', thirdAnswerNum: '12', sumNum: '57', answerDen: '40', whole:'1', answerNum:'17', answer1Den: '40', answer2Den: '40', template: 'threeFractions' },
					// problem 9
        			{ firstNum: '1', firstDen: '4', secondNum: '5', secondDen: '12', thirdNum: '1', thirdDen: '10', firstAnswerNum: '15', secondAnswerNum: '25', thirdAnswerNum: '6', sumNum: '23', answerDen: '30', whole:'', answerNum:'23', answer1Den: '60', answer2Den: '30', template: 'threeFractions' },
					// problem 10
        			{ firstNum: '3', firstDen: '8', secondNum: '3', secondDen: '5', thirdNum: '1', thirdDen: '6', firstAnswerNum: '45', secondAnswerNum: '72', thirdAnswerNum: '20', sumNum: '137', answerDen: '120', whole:'1', answerNum:'17', answer1Den: '120', answer2Den: '120', template: 'threeFractions' }
                ];

            return dataUtils.build(desc, template, data);
        }]);
