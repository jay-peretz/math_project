/*global angular */

/*angular.module('mathSkills').value('data_h_2', {
    title: 'H.2 Subtraction of Unlike Fractions',
    path: 'H.2-subtraction-of-unlike-fraction',
    children: [{
        title: 'Subtraction of Unlike Fractions',
        children: [] }]
});*/

angular.module('mathSkills').service('data_h_2', ['dataUtils', function (dataUtils) {
    var desc = {
    		title: 'H.2 Subtraction of Unlike Fractions',
    	    path: 'H.2-subtraction-of-unlike-fraction',
            children: []
        },
	        template = {
            twoFractions: {
                title: 'Subtracting Unlike Fractions',
                children: [{
                    title: 'twoFractions Answer',
                    children: [{
						problem: '\\html{&nbsp;}',
						answer: '\\grp'
							+'{\\frac{\\fracstr{$firstNum}}{\\fracstr{$firstDen}}}'
							+'{\\sign{&minus;}}'
							+'{\\frac{\\fracstr{$secondNum}}{\\fracstr{$secondDen}}}'
							+'{\\sign{=}}'
							+'{\\frac{\\input{$differenceNum}}{\\input{$answerDen}}}',
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
									+'{\\grp{\\sign{&minus;}}{\\css{\\frac{\\fracstr{$secondNum}}{\\fracstr{$secondDen}}}{border-bottom-with-padding}}'
								+'}',
						answer: '\\rowgrp'
									+'{\\ins{Determine the lowest common denominator (LCD) of the fractions:}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp{\\input{$answerDen}}'
								+'}',
						controls: {
							"checkAnswer": true,
							"help": true
						},
                    }, {
						problem: '\\rowgrp'
									+'{\\grp{\\html{<span style="font-size:550%;">&nbsp;</span>}}{\\frac{\\fracstr{$firstNum}}{\\fracstr{$firstDen}}}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp{\\sign{&minus;}}{\\css{\\frac{\\fracstr{$secondNum}}{\\fracstr{$secondDen}}}{border-bottom-with-padding}}'
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
									+'{\\grp{\\sign{-}}{\\css{\\grp{\\frac{\\fracstr{$secondNum}}{\\fracstr{$secondDen}}}'
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
									+'{\\grp{\\sign{&minus;}}{\\css{\\frac{\\fracstr{$secondNum}}{\\fracstr{$secondDen}}}{border-bottom-with-padding}}'
								+'}',
							answer: '\\css'
									+'{\\rowgrp'
										+'{\\html{Determine the lowest common denominator (LCD) of the fractions:}}'
										+'{\\html{&nbsp;}}'
										+'{\\html{$answerDen}}'
										+'{\\html{&nbsp;}}'
										+'{\\html{Use the LCD to convert the fractions:}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp{\\html{<span style="font-size:550%;">&nbsp;</span>}}{\\frac{\\fracstr{$firstNum}}{\\fracstr{$firstDen}}}'
											+'{\\sign{=}}'
											+'{\\frac{\\fracstr{$firstAnswerNum}}{\\fracstr{$answerDen}}}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp{\\sign{-}}{\\css{\\grp{\\frac{\\fracstr{$secondNum}}{\\fracstr{$secondDen}}}'
										+'{\\sign{=}}'
										+'{\\frac{\\fracstr{$secondAnswerNum}}{\\fracstr{$answerDen}}}}{border-bottom-with-padding}}}'
									+'{\\html{&nbsp;}}'
										+'{\\ins{Subtract the fractions:}}'
										+'{\\grp{\\html{<span style="font-size:550%;">&nbsp;</span>}}{\\frac{\\fracstr{$firstAnswerNum}}{\\fracstr{$answerDen}}}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp{\\sign{-}}{\\grp{\\css{\\frac{\\fracstr{$secondAnswerNum}}{\\fracstr{$answerDen}}}{border-bottom-with-padding}}}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp{\\html{<span style="font-size:300%;">&nbsp;</span>}}{\\frac{\\input{$differenceNum}}{\\input{$answerDen}}}}'
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
                title: 'Subtracting Unlike Fractions',
                children: [{
                    title: 'Main Answer',
                    children: [{
						problem: '\\html{&nbsp;}',
						answer: '\\grp'
							+'{\\frac{\\fracstr{$firstNum}}{\\fracstr{$firstDen}}}'
							+'{\\html{&nbsp;}}'
							+'{\\sign{&minus;}}'
							+'{\\frac{\\fracstr{$secondNum}}{\\fracstr{$secondDen}}}'
							+'{\\html{&nbsp;}}'
							+'{\\sign{&minus;}}'
							+'{\\frac{\\fracstr{$thirdNum}}{\\fracstr{$thirdDen}}}'
							+'{\\html{&nbsp;}}'
							+'{\\sign{=}}'
							+'{\\html{&nbsp;}}'
							+'{\\frac{\\input{$differenceNum}}{\\input{$answerDen}}}',
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
									+'{\\grp{\\sign{&minus;}}{\\frac{\\fracstr{$secondNum}}{\\fracstr{$secondDen}}}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp{\\sign{&minus;}}{\\grp{\\css{\\frac{\\fracstr{$thirdNum}}{\\fracstr{$thirdDen}}}{border-bottom-with-padding}}}}',
						answer: '\\rowgrp'
									+'{\\ins{Determine the lowest common denominator (LCD) of the fractions:}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp{\\input{$answerDen}}'
								+'}',
						controls: {
							"checkAnswer": true,
							"help": true
						},
                    }, {
						problem: '\\rowgrp'
									+'{\\grp{\\html{<span style="font-size:550%;">&nbsp;</span>}}{\\frac{\\fracstr{$firstNum}}{\\fracstr{$firstDen}}}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp{\\sign{&minus;}}{\\frac{\\fracstr{$secondNum}}{\\fracstr{$secondDen}}}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp{\\sign{&minus;}}{\\grp{\\css{\\frac{\\fracstr{$thirdNum}}{\\fracstr{$thirdDen}}}{border-bottom-with-padding}}}}',
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
								+'{\\grp{\\sign{-}}{\\css{\\grp{\\frac{\\fracstr{$thirdNum}}{\\fracstr{$thirdDen}}}'
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
									+'{\\grp{\\sign{&minus;}}{\\frac{\\fracstr{$secondNum}}{\\fracstr{$secondDen}}}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp{\\sign{&minus;}}{\\grp{\\css{\\frac{\\fracstr{$thirdNum}}{\\fracstr{$thirdDen}}}{border-bottom-with-padding}}}}',
						answer: '\\css'
								+'{\\rowgrp'
									+'{\\html{Determine the lowest common denominator (LCD) of the fractions:}}'
									+'{\\html{&nbsp;}}'
									+'{\\html{$answerDen}}'
									+'{\\html{&nbsp;}}'
									+'{\\html{Use the LCD to convert the fractions:}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp{\\html{<span style="font-size:550%;">&nbsp;</span>}}{\\frac{\\fracstr{$firstNum}}{\\fracstr{$firstDen}}}'
									+'{\\sign{=}}'
									+'{\\frac{\\fracstr{$firstAnswerNum}}{\\fracstr{$answerDen}}}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp{\\html{<span style="font-size:550%;">&nbsp;</span>}}{\\frac{\\fracstr{$secondNum}}{\\fracstr{$secondDen}}}'
									+'{\\sign{=}}'
									+'{\\frac{\\fracstr{$secondAnswerNum}}{\\fracstr{$answerDen}}}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp{\\sign{-}}{\\css{\\grp{\\frac{\\fracstr{$thirdNum}}{\\fracstr{$thirdDen}}}'
									+'{\\sign{=}}'
									+'{\\frac{\\fracstr{$thirdAnswerNum}}{\\fracstr{$answerDen}}}}{border-bottom-with-padding}}}'
									+'{\\html{&nbsp;}}'
									+'{\\ins{Subtract the fractions:}}'
									+'{\\grp{\\html{<span style="font-size:550%;">&nbsp;</span>}}{\\frac{\\fracstr{$firstAnswerNum}}{\\fracstr{$answerDen}}}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp{\\sign{&minus;}}{\\frac{\\fracstr{$secondAnswerNum}}{\\fracstr{$answerDen}}}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp{\\sign{&minus;}}{\\css{\\frac{\\fracstr{$thirdAnswerNum}}{\\fracstr{$answerDen}}}{border-bottom-with-padding}}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp{\\html{<span style="font-size:300%;">&nbsp;</span>}}{\\frac{\\input{$differenceNum}}{\\input{$answerDen}}}}'
									+'{\\html{&nbsp;}}'
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
            { firstNum: '4', firstDen: '5', secondNum: '3', secondDen: '4', firstAnswerNum: '16', secondAnswerNum: '15', differenceNum: '1', answerDen: '20', template: 'twoFractions' },
            { firstNum: '3', firstDen: '2', secondNum: '3', secondDen: '5', firstAnswerNum: '15', secondAnswerNum: '6', differenceNum: '9', answerDen: '10', template: 'twoFractions' },
			{ firstNum: '5', firstDen: '6', secondNum: '1', secondDen: '8', firstAnswerNum: '20', secondAnswerNum: '3', differenceNum: '17', answerDen: '24', template: 'twoFractions' },
			{ firstNum: '5', firstDen: '8', secondNum: '1', secondDen: '2', firstAnswerNum: '5', secondAnswerNum: '4', differenceNum: '1', answerDen: '8', template: 'twoFractions' },
			{ firstNum: '4', firstDen: '3', secondNum: '8', secondDen: '7', firstAnswerNum: '28', secondAnswerNum: '24', differenceNum: '4', answerDen: '21', template: 'twoFractions' },
			{ firstNum: '7', firstDen: '16', secondNum: '1', secondDen: '4', firstAnswerNum: '7', secondAnswerNum: '4', differenceNum: '3', answerDen: '16', template: 'twoFractions' },
			{ firstNum: '7', firstDen: '8', secondNum: '1', secondDen: '3', firstAnswerNum: '21', secondAnswerNum: '8', differenceNum: '5', answerDen: '24', template: 'twoFractions' },
			{ firstNum: '11', firstDen: '12', secondNum: '1', secondDen: '\xA03\xA0', thirdNum: '1', thirdDen: '\xA06\xA0', firstAnswerNum: '11', secondAnswerNum: '4', thirdAnswerNum: '2', differenceNum: '5', answerDen: '12', template: 'threeFractions' },
			{ firstNum: '13', firstDen: '10', secondNum: '1', secondDen: '\xA04\xA0', thirdNum: '3', thirdDen: '\xA05\xA0', firstAnswerNum: '26', secondAnswerNum: '5', thirdAnswerNum: '12', differenceNum: '9', answerDen: '20', template: 'threeFractions' },
			{ firstNum: '7', firstDen: '3', secondNum: '5', secondDen: '4', thirdNum: '1', thirdDen: '6', firstAnswerNum: '28', secondAnswerNum: '15', thirdAnswerNum: '2', differenceNum: '11', answerDen: '12', template: 'threeFractions' }
			
        ];

    return dataUtils.build(desc, template, data);
}]);


