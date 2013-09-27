/*global angular */

angular.module('mathSkills').service('data9_3', ['dataUtils', function (dataUtils) {
    var desc = {
			title: '9.3 Build an Equivalent Fraction',
			path: '9.3-build-an-equivalent-fraction',
            children: []
        },
	        template = {
            oneFraction: {
                title: 'Build an Equivalent Fraction',
                children: [{
                    title: 'Main Answer',
                    children: [{
						problem: '\\rowgrp'
						+'{\\str{Start with the fraction:}}'
						+'{\\html{&nbsp;}}'
						+'{\\frac{\\fracstr{$problemNum}}{\\fracstr{$problemDen}}}'
						+'{\\html{&nbsp;}}'
						+'{\\str{ and build an equivalent fraction that has a denominator of $newDen.}}',
						answer: '\\grp{\\frac{\\fracstr{$problemNum}}{\\fracstr{$problemDen}}}'
						+'{\\sign{= \xA0}}'
						+'{\\frac{\\input{$answer}}{\\fracstr{$newDen}}}',
						controls: {
							"checkAnswer": true,
							"help": '\\rowgrp'
							+'{\\grp{\\frac{\\fracstr{$problemNum}}{\\fracstr{$problemDen}}}{\\sign{\xA0 = \xA0}}{\\frac{\\str{?}}{\\fracstr{$newDen}}}}'
							+'{\\html{&nbsp;}}'
							+'{\\grp{\\str{What did we do to the denominator of $problemDen to get $newDen?  We had to multiply the $problemDen by $multiplier to get $newDen.}}}'
							+'{\\html{&nbsp;}}'
							+'{\\html{To build an equivalent fraction, we want to multiply the numerator and the denominator by the same number-- in this case, &quot;multiply by <sup>$multiplier</sup>&#8260;<sub>$multiplier</sub>&quot;:}}'
							+'{\\html{&nbsp;}}'
							+'{\\grp{\\frac{\\fracstr{$problemNum}}{\\fracstr{$problemDen}}}'
							+'{\\sign{&dot;}}'
							+'{\\frac{\\fracstr{$multiplier}}{\\fracstr{$multiplier}}}'
							+'{\\sign{\xA0 = \xA0}}'
							+'{\\frac{\\str{$answer}}{\\str{$newDen}}}}'
							+'{\\html{&nbsp;}}'
							+'{\\css{\\str{\xA0 Answer: \xA0 the missing numerator is $answer}}{help-answer-text}}'
						}
                    }]
                }]
			},  
			twoFractions: {
                title: 'Build Equivalent Fractions',
                children: [{
                    title: 'Main Answer',
                    children: [{
						problem: '\\rowgrp'
						+'{\\row{\\str{Start with the fractions:}}}'
						+'{\\html{&nbsp;}}'
						+'{\\row{\\frac{\\str{$firstNum}}{\\str{$firstDen}}}'
						+'{\\row{\\html{<span> &nbsp; and &nbsp; </span>}}}'
						+'{\\frac{\\str{$secondNum}}{\\str{$secondDen}}}}'
						+'{\\html{&nbsp;}}'
						+'{\\row{\\str{Build equivalent fractions that have the same denominator.}}}',
						answer: '\\grp'
						+'{\\frac{\\input{$firstAnswerNum}}{\\input{$answerDen}}}'
						+'{\\str{\xA0 and \xA0}}'
						+'{\\frac{\\input{$secondAnswerNum}}{\\input{$answerDen}}}',
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
						+'{\\str{Find the lowest common denominator (LCD) of the fractions:}}'
						+'{\\html{&nbsp;}}'
						+'{\\row{\\frac{\\fracstr{$firstNum}}{\\fracstr{$firstDen}}}'
						+'{\\str{\xA0 and \xA0}}'
						+'{\\frac{\\fracstr{$secondNum}}{\\fracstr{$secondDen}}}}',
						answer: '\\grp{\\input{$answerDen}}',
						controls: {
							"checkAnswer": true,
							"help": true
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
						}
                    }]
                }]
            }
		},
        data = [
            { problemNum: '3', problemDen: '5', newDen: '20', multiplier: '4', answer: '12', template: 'oneFraction' },
			{ problemNum: '7', problemDen: '6', newDen: '18', multiplier: '3', answer: '21', template: 'oneFraction' },
			{ problemNum: '3', problemDen: '4', newDen: '12', multiplier: '3', answer: '9', template: 'oneFraction' },
			{ problemNum: '2', problemDen: '5', newDen: '10', multiplier: '2', answer: '4', template: 'oneFraction' },
			{ problemNum: '3', problemDen: '8', newDen: '32', multiplier: '4', answer: '12', template: 'oneFraction' },
			{ firstNum: '1', firstDen: '4', secondNum: '3', secondDen: '5', firstAnswerNum: '5', secondAnswerNum: '12', answerDen: '20', template: 'twoFractions' },
			{ firstNum: '3', firstDen: '8', secondNum: '5', secondDen: '6', firstAnswerNum: '9', secondAnswerNum: '20', answerDen: '24', template: 'twoFractions' },
			{ firstNum: '4', firstDen: '5', secondNum: '5', secondDen: '4', firstAnswerNum: '16', secondAnswerNum: '25', answerDen: '20', template: 'twoFractions' },
			{ firstNum: '2', firstDen: '3', secondNum: '5', secondDen: '6', firstAnswerNum: '4', secondAnswerNum: '5', answerDen: '6', template: 'twoFractions' },
			{ firstNum: '5', firstDen: '8', secondNum: '6', secondDen: '5', firstAnswerNum: '25', secondAnswerNum: '48', answerDen: '40', template: 'twoFractions' },
			{ firstNum: '1', firstDen: '10', secondNum: '3', secondDen: '\xA04\xA0', firstAnswerNum: '2', secondAnswerNum: '15', answerDen: '20', template: 'twoFractions' },
			{ firstNum: '10', firstDen: '3', secondNum: '\xA07\xA0', secondDen: '5', firstAnswerNum: '50', secondAnswerNum: '21', answerDen: '15', template: 'twoFractions' },
			{ firstNum: '9', firstDen: '5', secondNum: '7', secondDen: '2', firstAnswerNum: '18', secondAnswerNum: '35', answerDen: '10', template: 'twoFractions' },
			{ firstNum: '3', firstDen: '7', secondNum: '7', secondDen: '8', firstAnswerNum: '24', secondAnswerNum: '49', answerDen: '56', template: 'twoFractions' },
			{ firstNum: '15', firstDen: '6', secondNum: '3', secondDen: '10', firstAnswerNum: '75', secondAnswerNum: '9', answerDen: '30', template: 'twoFractions' },	
        ];

    return dataUtils.build(desc, template, data);
}]);




