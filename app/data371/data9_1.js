/*global angular */

angular.module('mathSkills').service('data9_1', ['dataUtils', function (dataUtils) {
    var desc = {
			title: '9.1 Add and Subtract Like Fractions',
			path: '9.1-add-and-subtract-like-fractions  ',
            children: []
        },
	        template = {
				answerDirect: {
					title: 'Add and Subtract Like Fractions',
					children: [{
						title: 'Main Answer',
						children: [{
							problem: '\\row'
							+'{\\frac{\\str{$firstNum}}{\\str{$firstDen}}}'
							+'{\\sign{$operation}}'
							+'{\\frac{\\str{$secondNum}}{\\str{$secondDen}}',
							answer: '\\grp{\\sign{=}}{\\frac{\\input{$answerNum}}{\\input{$answerDen}}}',
							controls: {
								"checkAnswer": true,
								"help": '\\rowgrp'
								+'{\\row{\\frac{\\str{$firstNum}}{\\str{$firstDen}}}'
								+'{\\sign{$operation}}'
								+'{\\frac{\\str{$secondNum}}{\\str{$secondDen}}}'
								+'{\\sign{ = }}'
								+'{\\frac{\\str{$answerNum}}{\\str{$answerDen}}}}'
								+'{\\html{&nbsp;}}'
								+'{css{\\row{\\str{Answer:  \xA0}}'
								+'{\\frac{\\fracstr{$answerNum}}{\\fracstr{$answerDen}}}}'
								+'{help-answer-text}}'
							}
						}]
					}]
			   },
			answerSimplified: {
					title: 'Add and Subtract Like Fractions',
					children: [{
						title: 'Main Answer',
						children: [{
							problem: '\\row'
							+'{\\frac{\\str{$firstNum}}{\\str{$firstDen}}}'
							+'{\\sign{$operation}}'
							+'{\\frac{\\str{$secondNum}}{\\str{$secondDen}}',
							answer: '\\grp{\\sign{=}}{\\frac{\\input{$answerNum}}{\\input{$answerDen}}}',
							controls: {
								"checkAnswer": true,
								"help": '\\rowgrp'
								+'{\\row{\\frac{\\str{$firstNum}}{\\str{$firstDen}}}'
								+'{\\sign{$operation}}'
								+'{\\frac{\\str{$secondNum}}{\\str{$secondDen}}}'
								+'{\\sign{ = }}'
								+'{\\frac{\\str{$helpNum}}{\\str{$firstDen}}}'
								+'{\\sign{=}}'
								+'{\\frac{\\str{$answerNum}}{\\str{$answerDen}}}}'
								+'{\\html{&nbsp;}}'
								+'{css{\\row{\\str{Answer:  \xA0}}'
								+'{\\frac{\\fracstr{$answerNum}}{\\fracstr{$answerDen}}}}'
								+'{help-answer-text}}'
							}
						}]
					}]
			   },
			   answerMixed: {
					title: 'Add and Subtract Like Fractions',
					children: [{
						title: 'Main Answer',
						children: [{
							problem: '\\row'
							+'{\\frac{\\str{$firstNum}}{\\str{$firstDen}}}'
							+'{\\sign{$operation}}'
							+'{\\frac{\\str{$secondNum}}{\\str{$secondDen}}',
							answer: '\\grp{\\sign{=}}{\\mixed{\\input{$answerWhole}}{\\frac{\\input{$answerNum}}{\\input{$answerDen}}}}',
							controls: {
								"checkAnswer": true,
								"help": '\\rowgrp'
								+'{\\row{\\frac{\\str{$firstNum}}{\\str{$firstDen}}}'
								+'{\\sign{$operation}}'
								+'{\\frac{\\str{$secondNum}}{\\str{$secondDen}}}'
								+'{\\sign{ = }}'
								+'{\\frac{\\str{$helpNum}}{\\str{$answerDen}}}'
								+'{\\sign{ = }}'
								+'{\\mixed{\\str{$answerWhole}}{\\frac{\\str{$answerNum}}{\\str{$answerDen}}}}}'
								+'{\\html{&nbsp;}}'
								+'{css{\\row{\\str{Answer:  \xA0}}'
								+'{\\mixed{\\fracstr{$answerWhole}}{\\frac{\\fracstr{$answerNum}}{\\fracstr{$answerDen}}}}}'
								+'{help-answer-text}}'
							}
						}]
					}]
			   },
			   answerMixedSimplified: {
					title: 'Add and Subtract Like Fractions',
					children: [{
						title: 'Main Answer',
						children: [{
							problem: '\\row'
							+'{\\frac{\\str{$firstNum}}{\\str{$firstDen}}}'
							+'{\\sign{$operation}}'
							+'{\\frac{\\str{$secondNum}}{\\str{$secondDen}}',
							answer: '\\grp{\\sign{=}}{\\mixed{\\input{$answerWhole}}{\\frac{\\input{$answerNum}}{\\input{$answerDen}}}}',
							controls: {
								"checkAnswer": true,
								"help": '\\rowgrp'
								+'{\\row{\\frac{\\str{$firstNum}}{\\str{$firstDen}}}'
								+'{\\sign{$operation}}'
								+'{\\frac{\\str{$secondNum}}{\\str{$secondDen}}}'
								+'{\\sign{ = }}'
								+'{\\frac{\\str{$helpNum}}{\\str{$firstDen}}}'
								+'{\\sign{ = }}'
								+'{\\mixed{\\str{$answerWhole}}{\\frac{\\str{$answerNum}}{\\str{$answerDen}}}}}'
								+'{\\html{&nbsp;}}'
								+'{css{\\row{\\str{Answer:  \xA0}}'
								+'{\\mixed{\\fracstr{$answerWhole}}{\\frac{\\fracstr{$answerNum}}{\\fracstr{$answerDen}}}}}'
								+'{help-answer-text}}'
							}
						}]
					}]
			   }
		},
        data = [
			{ firstNum: '2', firstDen: '4', secondNum: '1', secondDen: '4', operation: '&minus;', answerNum: '1', answerDen: '4', template: 'answerDirect' },
			{ firstNum: '6', firstDen: '8', secondNum: '2', secondDen: '8', operation: '&minus;', helpNum: '4', answerNum: '1', answerDen: '2', template: 'answerSimplified' },
			{ firstNum: '6', firstDen: '9', secondNum: '2', secondDen: '9', operation: '+', answerNum: '8', answerDen: '9', template: 'answerDirect' },
			{ firstNum: '15', firstDen: '25', secondNum: '9', secondDen: '25', operation: '+', answerNum: '24', answerDen: '25', template: 'answerDirect' },
			{ firstNum: '2', firstDen: '6', secondNum: '3', secondDen: '6', operation: '+', answerNum: '5', answerDen: '6', template: 'answerDirect' },
			{ firstNum: '12', firstDen: '13', secondNum: '4', secondDen: '13', operation: '&minus;', answerNum: '8', answerDen: '13', template: 'answerDirect' },
			{ firstNum: '28', firstDen: '42', secondNum: '7', secondDen: '42', operation: '&minus;', helpNum: '21', answerNum: '1', answerDen: '2', template: 'answerSimplified' },
			{ firstNum: '40', firstDen: '66', secondNum: '15', secondDen: '66', operation: '&minus;', answerNum: '25', answerDen: '66', template: 'answerDirect' },
			{  firstNum: '3', firstDen: '8', secondNum: '7', secondDen: '8', operation: '+', answerWhole: '1', answerNum: '1', answerDen: '4', helpNum: '10', template: 'answerMixedSimplified' },
			{  firstNum: '30', firstDen: '49', secondNum: '30', secondDen: '49', operation: '+', answerWhole: '1', answerNum: '11', answerDen: '49', helpNum: '60', template: 'answerMixed' },
        ];

	return dataUtils.build(desc, template, data);
}]);


