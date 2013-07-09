/*global angular */

angular.module('mathSkills').service('data9_4', ['dataUtils', function (dataUtils) {
    var desc = {
			title: '9.4 Build Equivalent Fractions',
			path: '9.4-build-equivalent-fractions',
            children: []
        },
	        template = {
            main: {
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
                    }]
                }]
            }
        },
        data = [
            { firstNum: '1', firstDen: '4', secondNum: '3', secondDen: '5', firstAnswerNum: '5', secondAnswerNum: '12', answerDen: '20', template: 'main' },
			{ firstNum: '3', firstDen: '8', secondNum: '5', secondDen: '6', firstAnswerNum: '9', secondAnswerNum: '20', answerDen: '24', template: 'main' },
			{ firstNum: '4', firstDen: '5', secondNum: '5', secondDen: '4', firstAnswerNum: '16', secondAnswerNum: '25', answerDen: '20', template: 'main' },
			{ firstNum: '2', firstDen: '3', secondNum: '5', secondDen: '6', firstAnswerNum: '4', secondAnswerNum: '5', answerDen: '6', template: 'main' },
			{ firstNum: '5', firstDen: '8', secondNum: '6', secondDen: '5', firstAnswerNum: '25', secondAnswerNum: '48', answerDen: '40', template: 'main' },
			{ firstNum: '1', firstDen: '10', secondNum: '3', secondDen: '\xA04\xA0', firstAnswerNum: '2', secondAnswerNum: '15', answerDen: '20', template: 'main' },
			{ firstNum: '10', firstDen: '3', secondNum: '\xA07\xA0', secondDen: '5', firstAnswerNum: '50', secondAnswerNum: '21', answerDen: '15', template: 'main' },
			{ firstNum: '9', firstDen: '5', secondNum: '7', secondDen: '2', firstAnswerNum: '18', secondAnswerNum: '35', answerDen: '10', template: 'main' },
			{ firstNum: '3', firstDen: '7', secondNum: '7', secondDen: '8', firstAnswerNum: '24', secondAnswerNum: '49', answerDen: '56', template: 'main' },
			{ firstNum: '15', firstDen: '6', secondNum: '3', secondDen: '10', firstAnswerNum: '75', secondAnswerNum: '9', answerDen: '30', template: 'main' },
        ];

    return dataUtils.build(desc, template, data);
}]);