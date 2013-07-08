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
							"help": '\\rowgrp'
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
							+'{help-answer-text}}'
						}
                    }, {
						problem: '\\str{Add the fractions: }',
						answer: '\\rowgrp'
							+'{\\grp{\\html{<span style="font-size:550%;">&nbsp;</span>}}{\\frac{\\fracstr{$firstAnswerNum}}{\\fracstr{$answerDen}}}}'
							+'{\\html{&nbsp;}}'
							+'{\\css{\\grp{\\sign{+}}{\\frac{\\fracstr{$secondAnswerNum}}{\\fracstr{$answerDen}}}}{border-bottom-with-padding}}'
							+'{\\html{&nbsp;}}'
							+'{\\grp{\\html{<span style="font-size:300%;">&nbsp;</span>}}{\\frac{\\input{$sumNum}}{\\input{$answerDen}}}}',
						controls: {
							"checkAnswer": true,
							"help": '\\rowgrp'
							+'{\\row{\\html{\xA0}}{\\sign{\xA0}}{\\frac{\\fracstr{$firstAnswerNum}}{\\fracstr{$answerDen}}}}'
							+'{\\html{&nbsp;}}'
							+'{\\css{row{\\sign{+}}{\\frac{\\fracstr{$secondAnswerNum}}{\\fracstr{$answerDen}}}}{border-bottom-with-padding}}'
							+'{\\html{&nbsp;}}'
							+'{\\css'
							+'{\\row{\\html{\xA0}}{\\sign{\xA0}}{\\frac{\\fracstr{$sumNum}}{\\fracstr{$answerDen}}}}{help-answer-text-tight}'
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
							"help": '\\rowgrp'
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
							+'{help-answer-text}}'
						}
                    }, {
						problem: '\\str{Add the fractions: }',
						answer: '\\rowgrp'
							+'{\\grp{\\html{<span style="font-size:550%;">&nbsp;</span>}}{\\frac{\\fracstr{$firstAnswerNum}}{\\fracstr{$answerDen}}}}'
							+'{\\html{&nbsp;}}'
							+'{\\grp{\\html{<span style="font-size:550%;">&nbsp;</span>}}{\\frac{\\fracstr{$secondAnswerNum}}{\\fracstr{$answerDen}}}}'
							+'{\\html{&nbsp;}}'
							+'{\\css{\\grp{\\sign{+}}{\\frac{\\fracstr{$thirdAnswerNum}}{\\fracstr{$answerDen}}}}{border-bottom-with-padding}}'
							+'{\\html{&nbsp;}}'
							+'{\\grp{\\html{<span style="font-size:300%;">&nbsp;</span>}}{\\frac{\\input{$sumNum}}{\\input{$answerDen}}}}',
						controls: {
							"checkAnswer": true,
							"help": '\\rowgrp'
							+'{\\row{\\html{\xA0}}{\\sign{\xA0}}{\\frac{\\fracstr{$firstAnswerNum}}{\\fracstr{$answerDen}}}}'
							+'{\\html{&nbsp;}}'
							+'{\\row{\\html{\xA0}}{\\sign{\xA0}}{\\frac{\\fracstr{$secondAnswerNum}}{\\fracstr{$answerDen}}}}'
							+'{\\html{&nbsp;}}'
							+'{\\css{row{\\sign{+}}{\\frac{\\fracstr{$thirdAnswerNum}}{\\fracstr{$answerDen}}}}{border-bottom-with-padding}}'
							+'{\\html{&nbsp;}}'
							+'{\\css'
							+'{\\row{\\html{\xA0}}{\\sign{\xA0}}{\\frac{\\fracstr{$sumNum}}{\\fracstr{$answerDen}}}}{help-answer-text-tight}'
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
			{ firstNum: '8', firstDen: '7', secondNum: '4', secondDen: '3', firstAnswerNum: '24', secondAnswerNum: '28', sumNum: '52', answerDen: '21', template: 'twoFractions' },
			{ firstNum: '3', firstDen: '8', secondNum: '1', secondDen: '3', firstAnswerNum: '9', secondAnswerNum: '8', sumNum: '17', answerDen: '24', template: 'twoFractions' },
			{ firstNum: '9', firstDen: '8', secondNum: '5', secondDen: '6', firstAnswerNum: '27', secondAnswerNum: '20', sumNum: '47', answerDen: '24', template: 'twoFractions' },
			{ firstNum: '1', firstDen: '2', secondNum: '1', secondDen: '4', thirdNum: '1', thirdDen: '6', firstAnswerNum: '6', secondAnswerNum: '3', thirdAnswerNum: '2', sumNum: '11', answerDen: '12', template: 'threeFractions' },
			{ firstNum: '3', firstDen: '10', secondNum: '1', secondDen: '\xA04\xA0', thirdNum: '4', thirdDen: '\xA05\xA0', firstAnswerNum: '6', secondAnswerNum: '5', thirdAnswerNum: '16', sumNum: '27', answerDen: '20', template: 'threeFractions' },
			{ firstNum: '5', firstDen: '4', secondNum: '7', secondDen: '3', thirdNum: '7', thirdDen: '6', firstAnswerNum: '15', secondAnswerNum: '28', thirdAnswerNum: '14', sumNum: '57', answerDen: '12', template: 'threeFractions' }
			
        ];

    return dataUtils.build(desc, template, data);
}]);
