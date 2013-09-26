/*global angular */

angular.module('mathSkills').service('data10_1', ['dataUtils', function (dataUtils) {
    var desc = {
			title: '10.1 Adding Unlike Fractions',
			path: '10.1-adding-unlike-fractions',
            children: []
        },
	        template = {
            twoFractions: {
                title: 'Adding Unlike Fractions',
                children: [{
                    title: 'Main Answer',
                    children: [{
						problem: '\\html{&nbsp;}',
						answer: '\\rowgrp'
							+'{\\grp{\\html{<span style="font-size:550%;">&nbsp;</span>}}{\\frac{\\fracstr{$firstNum}}{\\fracstr{$firstDen}}}}'
							+'{\\html{&nbsp;}}'
							+'{\\css{\\grp{\\sign{+}}{\\frac{\\fracstr{$secondNum}}{\\fracstr{$secondDen}}}}{border-bottom-with-padding}}'
							+'{\\html{&nbsp;}}'
							+'{\\grp{\\html{<span style="font-size:300%;">&nbsp;</span>}}{\\frac{\\input{$sumNum}}{\\input{$answerDen}}}}',
						controls: {
							"checkAnswer": true,
							"help": false,
							"workbook": true
						}
                    }]
                }, {
                    title: 'Workbook',
                    children: [{
						problem: '\\rowgrp'
									+'{\\grp{\\html{<span style="font-size:550%;">&nbsp;</span>}}{\\frac{\\fracstr{$firstNum}}{\\fracstr{$firstDen}}}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp{\\sign{+}}{\\css{\\frac{\\fracstr{$secondNum}}{\\fracstr{$secondDen}}}{border-bottom-with-padding}}}',
						answer: '\\rowgrp'
									+'{\\ins{Determine the lowest common denominator (LCD) of the fractions:}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp{\\input{$answerDen}}}',
						controls: {
							"checkAnswer": true,
							"help": true
						},
                    }, {
						problem: '\\rowgrp'
									+'{\\grp{\\html{<span style="font-size:550%;">&nbsp;</span>}}{\\frac{\\fracstr{$firstNum}}{\\fracstr{$firstDen}}}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp{\\sign{+}}{\\css{\\frac{\\fracstr{$secondNum}}{\\fracstr{$secondDen}}}{border-bottom-with-padding}}}',
						answer: '\\css'
									+'{\\rowgrp'
										+'{\\html{Determine the lowest common denominator (LCD) of the fractions:}}'
										+'{\\html{&nbsp;}}'
										+'{\\html{$answerDen}}'
										+'{\\html{&nbsp;}}'
										+'{\\ins{Use the LCD to convert the fractions:}}'
										+'{\\grp{\\html{<span style="font-size:550%;">&nbsp;</span>}}{\\frac{\\fracstr{$firstNum}}{\\fracstr{$firstDen}}}'
										+'{\\sign{=}}'
										+'{\\frac{\\input{$firstAnswerNum}}{\\fracstr{$answerDen}}}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp{\\sign{+}}{\\css{\\grp{\\frac{\\fracstr{$secondNum}}{\\fracstr{$secondDen}}}'
										+'{\\sign{=}}'
										+'{\\frac{\\input{$secondAnswerNum}}{\\fracstr{$answerDen}}}}{border-bottom-with-padding}}}'
										+'{\\html{&nbsp;}}'
									+'}{well}',
						controls: {
							"checkAnswer": true,
							"help": true
						}
                    }, {
						problem: '\\rowgrp'
									+'{\\grp{\\html{<span style="font-size:550%;">&nbsp;</span>}}{\\frac{\\fracstr{$firstNum}}{\\fracstr{$firstDen}}}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp{\\sign{+}}{\\css{\\frac{\\fracstr{$secondNum}}{\\fracstr{$secondDen}}}{border-bottom-with-padding}}}',
						answer: '\\css'
									+'{\\rowgrp'
										+'{\\html{Determine the lowest common denominator (LCD) of the fractions:}}'
										+'{\\html{&nbsp;}}'
										+'{\\html{$answerDen}}'
										+'{\\html{&nbsp;}}'
										+'{\\html{Use the LCD to convert the fractions:}}'
										+'{\\grp{\\html{<span style="font-size:550%;">&nbsp;</span>}}{\\frac{\\fracstr{$firstNum}}{\\fracstr{$firstDen}}}'
										+'{\\sign{=}}'
										+'{\\frac{\\fracstr{$firstAnswerNum}}{\\fracstr{$answerDen}}}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp{\\sign{+}}{\\css{\\grp{\\frac{\\fracstr{$secondNum}}{\\fracstr{$secondDen}}}'
										+'{\\sign{=}}'
										+'{\\frac{\\fracstr{$secondAnswerNum}}{\\fracstr{$answerDen}}}}{border-bottom-with-padding}}}'
										+'{\\html{&nbsp;}}'
										+'{\\ins{Add the fractions:}}'
										+'{\\grp{\\html{<span style="font-size:550%;">&nbsp;</span>}}{\\frac{\\fracstr{$firstAnswerNum}}{\\fracstr{$answerDen}}}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp{\\sign{+}}{\\grp{\\css{\\frac{\\fracstr{$secondAnswerNum}}{\\fracstr{$answerDen}}}{border-bottom-with-padding}}}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp{\\html{<span style="font-size:300%;">&nbsp;</span>}}{\\frac{\\input{$sumNum}}{\\input{$answerDen}}}}'
										+'{\\html{&nbsp;}}'
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
						answer: '\\rowgrp'
							+'{\\grp{\\html{<span style="font-size:550%;">&nbsp;</span>}}{\\frac{\\fracstr{$firstNum}}{\\fracstr{$firstDen}}}}'
							+'{\\html{&nbsp;}}'
							+'{\\grp{\\html{<span style="font-size:550%;">&nbsp;</span>}}{\\frac{\\fracstr{$secondNum}}{\\fracstr{$secondDen}}}}'
							+'{\\html{&nbsp;}}'
							+'{\\css{\\grp{\\sign{+}}{\\frac{\\fracstr{$thirdNum}}{\\fracstr{$thirdDen}}}}{border-bottom-with-padding}}'
							+'{\\html{&nbsp;}}'
							+'{\\grp{\\html{<span style="font-size:300%;">&nbsp;</span>}}{\\frac{\\input{$sumNum}}{\\input{$answerDen}}}}',
						controls: {
							"checkAnswer": true,
							"help": false,
							"workbook": true
						}
                    }]
                }, {
                    title: 'Workbook',
                    children: [{
						problem: '\\rowgrp'
									+'{\\grp{\\html{<span style="font-size:550%;">&nbsp;</span>}}{\\frac{\\fracstr{$firstNum}}{\\fracstr{$firstDen}}}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp{\\html{<span style="font-size:550%;">&nbsp;</span>}}{\\frac{\\fracstr{$secondNum}}{\\fracstr{$secondDen}}}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp{\\sign{+}}{\\css{\\frac{\\fracstr{$thirdNum}}{\\fracstr{$thirdDen}}}{border-bottom-with-padding}}'
								+'}',
						answer: '\\rowgrp'
									+'{\\ins{Determine the lowest common denominator (LCD) of the fractions:}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp{\\input{$answerDen}}}',
						controls: {
							"checkAnswer": true,
							"help": true
						},
                    }, {
						problem: '\\rowgrp'
									+'{\\grp{\\html{<span style="font-size:550%;">&nbsp;</span>}}{\\frac{\\fracstr{$firstNum}}{\\fracstr{$firstDen}}}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp{\\html{<span style="font-size:550%;">&nbsp;</span>}}{\\frac{\\fracstr{$secondNum}}{\\fracstr{$secondDen}}}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp{\\sign{+}}{\\css{\\frac{\\fracstr{$thirdNum}}{\\fracstr{$thirdDen}}}{border-bottom-with-padding}}'
								+'}',
						answer: '\\css'
									+'{\\rowgrp'
										+'{\\html{Determine the lowest common denominator (LCD) of the fractions:}}'
										+'{\\html{&nbsp;}}'
										+'{\\html{$answerDen}}'
										+'{\\html{&nbsp;}}'
										+'{\\ins{Use the LCD to convert the fractions:}}'
										+'{\\grp{\\html{<span style="font-size:550%;">&nbsp;</span>}}{\\frac{\\fracstr{$firstNum}}{\\fracstr{$firstDen}}}'
											+'{\\sign{=}}'
											+'{\\frac{\\input{$firstAnswerNum}}{\\fracstr{$answerDen}}}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp{\\html{<span style="font-size:550%;">&nbsp;</span>}}{\\frac{\\fracstr{$secondNum}}{\\fracstr{$secondDen}}}'
											+'{\\sign{=}}'
											+'{\\frac{\\input{$secondAnswerNum}}{\\fracstr{$answerDen}}}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp{\\sign{+}}{\\css{\\grp{\\frac{\\fracstr{$thirdNum}}{\\fracstr{$thirdDen}}}'
											+'{\\sign{=}}'
											+'{\\frac{\\input{$thirdAnswerNum}}{\\fracstr{$answerDen}}}}{border-bottom-with-padding}}}'
										+'{\\html{&nbsp;}}'
									+'}{well}',
						controls: {
							"checkAnswer": true,
							"help": true
						}
                    }, {
						problem: '\\rowgrp'
									+'{\\grp{\\html{<span style="font-size:550%;">&nbsp;</span>}}{\\frac{\\fracstr{$firstNum}}{\\fracstr{$firstDen}}}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp{\\html{<span style="font-size:550%;">&nbsp;</span>}}{\\frac{\\fracstr{$secondNum}}{\\fracstr{$secondDen}}}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp{\\sign{+}}{\\css{\\frac{\\fracstr{$thirdNum}}{\\fracstr{$thirdDen}}}{border-bottom-with-padding}}'
								+'}',
						answer: '\\css'
								+'{\\rowgrp'
									+'{\\html{Determine the lowest common denominator (LCD) of the fractions:}}'
									+'{\\html{&nbsp;}}'
									+'{\\html{$answerDen}}'
									+'{\\html{&nbsp;}}'
									+'{\\html{Use the LCD to convert the fractions:}}'
									+'{\\grp{\\html{<span style="font-size:550%;">&nbsp;</span>}}{\\frac{\\fracstr{$firstNum}}{\\fracstr{$firstDen}}}'
										+'{\\sign{=}}'
										+'{\\frac{\\fracstr{$firstAnswerNum}}{\\fracstr{$answerDen}}}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp{\\html{<span style="font-size:550%;">&nbsp;</span>}}{\\frac{\\fracstr{$secondNum}}{\\fracstr{$secondDen}}}'
										+'{\\sign{=}}'
										+'{\\frac{\\fracstr{$secondAnswerNum}}{\\fracstr{$answerDen}}}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp{\\sign{+}}{\\css{\\grp{\\frac{\\fracstr{$thirdNum}}{\\fracstr{$thirdDen}}}'
										+'{\\sign{=}}'
										+'{\\frac{\\fracstr{$thirdAnswerNum}}{\\fracstr{$answerDen}}}}{border-bottom-with-padding}}}'
									+'{\\html{&nbsp;}}'
									+'{\\ins{Add the fractions:}}'
									+'{\\grp{\\html{<span style="font-size:550%;">&nbsp;</span>}}{\\frac{\\fracstr{$firstAnswerNum}}{\\fracstr{$answerDen}}}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp{\\html{<span style="font-size:550%;">&nbsp;</span>}}{\\frac{\\fracstr{$secondAnswerNum}}{\\fracstr{$answerDen}}}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp{\\sign{+}}{\\grp{\\css{\\frac{\\fracstr{$thirdAnswerNum}}{\\fracstr{$answerDen}}}{border-bottom-with-padding}}}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp{\\html{<span style="font-size:300%;">&nbsp;</span>}}{\\frac{\\input{$sumNum}}{\\input{$answerDen}}}}'
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
            { firstNum: '1', firstDen: '4', secondNum: '3', secondDen: '5', firstAnswerNum: '5', secondAnswerNum: '12', sumNum: '17', answerDen: '20', template: 'twoFractions' },
            { firstNum: '1', firstDen: '9', secondNum: '1', secondDen: '4', firstAnswerNum: '4', secondAnswerNum: '9', sumNum: '13', answerDen: '36', template: 'twoFractions' },
			{ firstNum: '2', firstDen: '5', secondNum: '1', secondDen: '2', firstAnswerNum: '4', secondAnswerNum: '5', sumNum: '9', answerDen: '10', template: 'twoFractions' },
			{ firstNum: '3', firstDen: '4', secondNum: '1', secondDen: '6', firstAnswerNum: '9', secondAnswerNum: '2', sumNum: '11', answerDen: '12', template: 'twoFractions' },
			{ firstNum: '4', firstDen: '7', secondNum: '1', secondDen: '3', firstAnswerNum: '12', secondAnswerNum: '7', sumNum: '19', answerDen: '21', template: 'twoFractions' },
			{ firstNum: '3', firstDen: '8', secondNum: '1', secondDen: '3', firstAnswerNum: '9', secondAnswerNum: '8', sumNum: '17', answerDen: '24', template: 'twoFractions' },
			{ firstNum: '1', firstDen: '8', secondNum: '5', secondDen: '6', firstAnswerNum: '3', secondAnswerNum: '20', sumNum: '23', answerDen: '24', template: 'twoFractions' },
			{ firstNum: '1', firstDen: '2', secondNum: '1', secondDen: '4', thirdNum: '1', thirdDen: '6', firstAnswerNum: '6', secondAnswerNum: '3', thirdAnswerNum: '2', sumNum: '11', answerDen: '12', template: 'threeFractions' },
			{ firstNum: '3', firstDen: '10', secondNum: '1', secondDen: '\xA04\xA0', thirdNum: '4', thirdDen: '\xA05\xA0', firstAnswerNum: '6', secondAnswerNum: '5', thirdAnswerNum: '16', sumNum: '27', answerDen: '20', template: 'threeFractions' },
			{ firstNum: '1', firstDen: '4', secondNum: '1', secondDen: '3', thirdNum: '1', thirdDen: '8', firstAnswerNum: '6', secondAnswerNum: '8', thirdAnswerNum: '3', sumNum: '17', answerDen: '24', template: 'threeFractions' }
			
        ];

    return dataUtils.build(desc, template, data);
}]);
