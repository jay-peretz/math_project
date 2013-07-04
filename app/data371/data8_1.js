/*global angular */

angular.module('mathSkills').service('data8_1', ['dataUtils', function (dataUtils) {
    var desc = {
			title: '8.1 Change Mixed Numbers into Improper Fractions',
			path: '8.1-change-mixed-numbers-into-improper-fractions',
            children: []
        },
	        template = {
				main: {
					title: 'Change Mixed Numbers into Improper Fractions',
					children: [{
						title: 'Main Answer',
						children: [{
							problem: '\\rowgrp'
							+'{\\str{Write the mixed number as an improper fraction:}}'
							+'{\\html{&nbsp;}}'
							+'{\\mixed{\\str{$problemWhole}}{\\frac{\\fracstr{$problemNum}}{\\fracstr{$problemDen}}}}',
							answer: '\\frac{\\input{$answerNum}}{\\input{$answerDen}}',
							controls: {
								"checkAnswer": true,
								"help": '\\rowgrp'
								+'{\\str{Multiply the whole number times the denominator and add the result to the numerator. \xA0}}'
								+'{\\html{&nbsp;}}'
								+'{\\row{\\frac{\\grp{str{($problemWhole}}{\\sign{\xb7}}{\\str{ $problemDen) }}{\\sign{+}}{\\str{ $problemNum}}}{\\fracstr{$problemDen}}}'
								+'{\\sign{\xA0 = \xA0}}'
								+'{\\frac{\\fracstr{$answerNum}}{\\fracstr{$answerDen}}}}'
								+'{\\html{&nbsp;}}'
								+'{css{\\row{\\str{Answer:  \xA0}}'
								+'{\\frac{\\fracstr{$answerNum}}{\\fracstr{$answerDen}}}}{help-answer-text}}'
							}
						}]
					}]
			   }
		},
        data = [
			{ problemWhole: '1', problemNum: '5', problemDen: '8', answerNum: '13', answerDen: '8', template: 'main' },
			{ problemWhole: '1', problemNum: '1', problemDen: '2', answerNum: '3', answerDen: '2', template: 'main' },
			{ problemWhole: '1', problemNum: '2', problemDen: '5', answerNum: '7', answerDen: '5', template: 'main' },
			{ problemWhole: '3', problemNum: '3', problemDen: '4', answerNum: '15', answerDen: '4', template: 'main' },
			{ problemWhole: '2', problemNum: '4', problemDen: '7', answerNum: '18', answerDen: '7', template: 'main' },
			{ problemWhole: '1', problemNum: '2', problemDen: '9', answerNum: '11', answerDen: '9', template: 'main' },
			{ problemWhole: '2', problemNum: '5', problemDen: '6', answerNum: '17', answerDen: '6', template: 'main' },
			{ problemWhole: '2', problemNum: '1', problemDen: '3', answerNum: '7', answerDen: '3', template: 'main' },
			{ problemWhole: '2', problemNum: '1', problemDen: '12', answerNum: '25', answerDen: '12', template: 'main' },
			{ problemWhole: '1', problemNum: '5', problemDen: '13', answerNum: '18', answerDen: '13', template: 'main' }
        ];

	return dataUtils.build(desc, template, data);
}]);



