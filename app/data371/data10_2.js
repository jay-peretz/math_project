/*global angular */

angular.module('mathSkills').service('data10_2', ['dataUtils', function (dataUtils) {
    var desc = {
			title: '10.2 Subtracting Unlike Fractions',
			path: '10.2-subtracting-unlike-fractions',
            children: []
        },
	        template = {
            twoFractions: {
                title: 'Subtracting Unlike Fractions',
                children: [{
                    title: 'twoFractions Answer',
                    children: [{
						problem: '\\html{&nbsp;}',
						answer: '\\rowgrp'
							+'{\\grp{\\html{<span style="font-size:550%;">&nbsp;</span>}}{\\frac{\\fracstr{$firstNum}}{\\fracstr{$firstDen}}}}'
							+'{\\html{&nbsp;}}'
							+'{\\css{\\grp{\\sign{&minus;}}{\\frac{\\fracstr{$secondNum}}{\\fracstr{$secondDen}}}}{border-bottom-with-padding}}'
							+'{\\html{&nbsp;}}'
							+'{\\grp{\\html{<span style="font-size:300%;">&nbsp;</span>}}{\\frac{\\input{$differenceNum}}{\\input{$answerDen}}}}',
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
						+'{\\str{Determine the lowest common denominator (LCD) of the fractions:}}'
						+'{\\html{&nbsp;}}'
						+'{\\row{\\frac{\\fracstr{$firstNum}}{\\fracstr{$firstDen}}}'
						+'{\\str{\xA0 and \xA0}}'
						+'{\\frac{\\fracstr{$secondNum}}{\\fracstr{$secondDen}}}}',
						answer: '\\input{$answerDen}',
						controls: {
							"checkAnswer": true,
							"help": '\\rowgrp'
							+'{\\str{The LCD of $firstDen and $secondDen is $answerDen.}}'
							+'{\\html{&nbsp;}}'
							+'{\\css{\\str{\xA0 Answer: \xA0 $answerDen}}{help-answer-text}}'
						},
                    }, {
						problem: '\\str{Use the LCD to convert the fractions: }',
						answer: '\\rowgrp'						
							+'{\\grp{\\frac{\\fracstr{$firstNum}}{\\fracstr{$firstDen}}}'
							+'{\\sign{=}}'
							+'{\\frac{\\input{$firstAnswerNum}}{\\fracstr{$answerDen}}}}'
							+'{\\html{&nbsp;}}'
							+'{\\grp{\\frac{\\fracstr{$secondNum}}{\\fracstr{$secondDen}}}'
							+'{\\sign{=}}'
							+'{\\frac{\\input{$secondAnswerNum}}{\\fracstr{$answerDen}}}}',
						controls: {
							"checkAnswer": true,
							"help": true
							/*"help": '\\rowgrp'
							+'{\\grp{\\frac{\\fracstr{$firstNum}}{\\fracstr{$firstDen}}}'
							+'{\\sign{=}}'
							+'{\\frac{\\fracstr{$firstAnswerNum}}{\\fracstr{$answerDen}}}}'
							+'{\\html{&nbsp;}}'
							+'{\\grp{\\frac{\\fracstr{$secondNum}}{\\fracstr{$secondDen}}}'
							+'{\\sign{=}}'
							+'{\\frac{\\fracstr{$secondAnswerNum}}{\\fracstr{$answerDen}}}}'
							+'{\\html{&nbsp;}}'
							+'{\\css{\\rowgrp{\\str{Answer:}}'
							+'{\\html{&nbsp;}}'
							+'{\\frac{\\fracstr{$firstAnswerNum}}{\\fracstr{$answerDen}}}'
							+'{\\html{&nbsp;}}'
							+'{\\frac{\\fracstr{$secondAnswerNum}}{\\fracstr{$answerDen}}}}'
							+'{help-answer-text}}'*/
						}
                    }, {
						problem: '\\str{Subtract the fractions: }',
						answer: '\\rowgrp'
							+'{\\grp{\\html{<span style="font-size:550%;">&nbsp;</span>}}{\\frac{\\fracstr{$firstAnswerNum}}{\\fracstr{$answerDen}}}}'
							+'{\\html{&nbsp;}}'
							+'{\\css{\\grp{\\sign{&minus;}}{\\frac{\\fracstr{$secondAnswerNum}}{\\fracstr{$answerDen}}}}{border-bottom-with-padding}}'
							+'{\\html{&nbsp;}}'
							+'{\\grp{\\html{<span style="font-size:300%;">&nbsp;</span>}}{\\frac{\\input{$differenceNum}}{\\input{$answerDen}}}}',
						controls: {
							"checkAnswer": true,
							"help": true
							/*"help": '\\rowgrp'
							+'{\\row{\\html{\xA0}}{\\sign{\xA0}}{\\frac{\\fracstr{$firstAnswerNum}}{\\fracstr{$answerDen}}}}'
							+'{\\html{&nbsp;}}'
							+'{\\css{row{\\sign{&minus;}}{\\frac{\\fracstr{$secondAnswerNum}}{\\fracstr{$answerDen}}}}{border-bottom-with-padding}}'
							+'{\\html{&nbsp;}}'
							+'{\\css'
							+'{\\row{\\html{\xA0}}{\\sign{\xA0}}{\\frac{\\fracstr{$differenceNum}}{\\fracstr{$answerDen}}}}{help-answer-text-tight}'*/
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
						answer: '\\rowgrp'
							+'{\\grp{\\html{<span style="font-size:550%;">&nbsp;</span>}}{\\frac{\\fracstr{$firstNum}}{\\fracstr{$firstDen}}}}'
							+'{\\html{&nbsp;}}'
							+'{\\grp{\\sign{&minus;}}{\\frac{\\fracstr{$secondNum}}{\\fracstr{$secondDen}}}}'
							+'{\\html{&nbsp;}}'
							+'{\\css{\\grp{\\sign{&minus;}}{\\frac{\\fracstr{$thirdNum}}{\\fracstr{$thirdDen}}}}{border-bottom-with-padding}}'
							+'{\\html{&nbsp;}}'
							+'{\\grp{\\html{<span style="font-size:300%;">&nbsp;</span>}}{\\frac{\\input{$differenceNum}}{\\input{$answerDen}}}}',
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
						+'{\\str{Determine the lowest common denominator (LCD) of the fractions:}}'
						+'{\\html{&nbsp;}}'
						+'{\\row{\\frac{\\fracstr{$firstNum}}{\\fracstr{$firstDen}}}'
						+'{\\str{\xA0 , \xA0}}'
						+'{\\frac{\\fracstr{$secondNum}}{\\fracstr{$secondDen}}}'
						+'{\\str{\xA0 and \xA0}}'
						+'{\\frac{\\fracstr{$thirdNum}}{\\fracstr{$thirdDen}}}}',
						answer: '\\input{$answerDen}',
						controls: {
							"checkAnswer": true,
							"help": '\\rowgrp'
							+'{\\str{The LCD of $firstDen, $secondDen, and $thirdDen is $answerDen.}}'
							+'{\\html{&nbsp;}}'
							+'{\\css{\\str{\xA0 Answer: \xA0 $answerDen}}{help-answer-text}}'
						},
                    }, {
						problem: '\\str{Use the LCD to convert the fractions: }',
						answer: '\\rowgrp'						
							+'{\\grp{\\frac{\\fracstr{$firstNum}}{\\fracstr{$firstDen}}}'
							+'{\\sign{=}}'
							+'{\\frac{\\input{$firstAnswerNum}}{\\fracstr{$answerDen}}}}'
							+'{\\html{&nbsp;}}'
							+'{\\grp{\\frac{\\fracstr{$secondNum}}{\\fracstr{$secondDen}}}'
							+'{\\sign{=}}'
							+'{\\frac{\\input{$secondAnswerNum}}{\\fracstr{$answerDen}}}}'
							+'{\\html{&nbsp;}}'
							+'{\\grp{\\frac{\\fracstr{$thirdNum}}{\\fracstr{$thirdDen}}}'
							+'{\\sign{=}}'
							+'{\\frac{\\input{$thirdAnswerNum}}{\\fracstr{$answerDen}}}}',
						controls: {
							"checkAnswer": true,
							"help": true
							/*"help": '\\rowgrp'
							+'{\\grp{\\frac{\\fracstr{$firstNum}}{\\fracstr{$firstDen}}}'
							+'{\\sign{=}}'
							+'{\\frac{\\fracstr{$firstAnswerNum}}{\\fracstr{$answerDen}}}}'
							+'{\\html{&nbsp;}}'
							+'{\\grp{\\frac{\\fracstr{$secondNum}}{\\fracstr{$secondDen}}}'
							+'{\\sign{=}}'
							+'{\\frac{\\fracstr{$secondAnswerNum}}{\\fracstr{$answerDen}}}}'
							+'{\\html{&nbsp;}}'
							+'{\\grp{\\frac{\\fracstr{$thirdNum}}{\\fracstr{$thirdDen}}}'
							+'{\\sign{=}}'
							+'{\\frac{\\fracstr{$thirdAnswerNum}}{\\fracstr{$answerDen}}}}'
							+'{\\html{&nbsp;}}'
							+'{\\css{\\rowgrp{\\str{Answer:}}'
							+'{\\html{&nbsp;}}'
							+'{\\frac{\\fracstr{$firstAnswerNum}}{\\fracstr{$answerDen}}}'
							+'{\\html{&nbsp;}}'
							+'{\\frac{\\fracstr{$secondAnswerNum}}{\\fracstr{$answerDen}}}'
							+'{\\html{&nbsp;}}'
							+'{\\frac{\\fracstr{$thirdAnswerNum}}{\\fracstr{$answerDen}}}}'
							+'{help-answer-text}}'*/
						}
                    }, {
						problem: '\\str{Subtract the fractions: }',
						answer: '\\rowgrp'
							+'{\\grp{\\html{<span style="font-size:550%;">&nbsp;</span>}}{\\frac{\\fracstr{$firstAnswerNum}}{\\fracstr{$answerDen}}}}'
							+'{\\html{&nbsp;}}'
							+'{\\grp{\\sign{&minus;}}{\\frac{\\fracstr{$secondAnswerNum}}{\\fracstr{$answerDen}}}}'
							+'{\\html{&nbsp;}}'
							+'{\\css{\\grp{\\sign{&minus;}}{\\frac{\\fracstr{$thirdAnswerNum}}{\\fracstr{$answerDen}}}}{border-bottom-with-padding}}'
							+'{\\html{&nbsp;}}'
							+'{\\grp{\\html{<span style="font-size:300%;">&nbsp;</span>}}{\\frac{\\input{$differenceNum}}{\\input{$answerDen}}}}',
						controls: {
							"checkAnswer": true,
							"help": true
							/*"help": '\\rowgrp'
							+'{\\row{\\html{\xA0}}{\\sign{\xA0}}{\\frac{\\fracstr{$firstAnswerNum}}{\\fracstr{$answerDen}}}}'
							+'{\\html{&nbsp;}}'
							+'{\\row{\\html{\xA0}}{\\sign{\xA0}}{\\frac{\\fracstr{$secondAnswerNum}}{\\fracstr{$answerDen}}}}'
							+'{\\html{&nbsp;}}'
							+'{\\css{row{\\sign{+}}{\\frac{\\fracstr{$thirdAnswerNum}}{\\fracstr{$answerDen}}}}{border-bottom-with-padding}}'
							+'{\\html{&nbsp;}}'
							+'{\\css'
							+'{\\row{\\html{\xA0}}{\\sign{\xA0}}{\\frac{\\fracstr{$sumNum}}{\\fracstr{$answerDen}}}}{help-answer-text-tight}'*/
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
			{ firstNum: '7', firstDen: '8', secondNum: '1', secondDen: '3', firstAnswerNum: '21', secondAnswerNum: '16', differenceNum: '5', answerDen: '24', template: 'twoFractions' },
			{ firstNum: '11', firstDen: '12', secondNum: '1', secondDen: '\xA03\xA0', thirdNum: '1', thirdDen: '\xA06\xA0', firstAnswerNum: '11', secondAnswerNum: '4', thirdAnswerNum: '2', differenceNum: '5', answerDen: '12', template: 'threeFractions' },
			{ firstNum: '13', firstDen: '10', secondNum: '1', secondDen: '\xA04\xA0', thirdNum: '3', thirdDen: '\xA05\xA0', firstAnswerNum: '26', secondAnswerNum: '5', thirdAnswerNum: '12', differenceNum: '9', answerDen: '20', template: 'threeFractions' },
			{ firstNum: '7', firstDen: '3', secondNum: '5', secondDen: '4', thirdNum: '1', thirdDen: '6', firstAnswerNum: '28', secondAnswerNum: '15', thirdAnswerNum: '2', differenceNum: '11', answerDen: '12', template: 'threeFractions' }
			
        ];

    return dataUtils.build(desc, template, data);
}]);

