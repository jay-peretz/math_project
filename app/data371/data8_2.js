/*global angular */

angular.module('mathSkills').service('data8_2', ['dataUtils', function (dataUtils) {
    var desc = {
			title: '8.2 Change Improper Fractions into Mixed Numbers',
			path: '8.2-change-improper-fractions-into-mixed-numbers',
            children: []
        },
	        template = {
				noSimplification: {
					title: 'Change Improper Fractions into Mixed Numbers',
					children: [{
						title: 'Main Answer',
						children: [{
							problem: '\\rowgrp'
							+'{\\str{Write the improper fraction as a mixed number:}}'
							+'{\\html{&nbsp;}}'
							+'{\\frac{\\fracstr{$problemNum}}{\\fracstr{$problemDen}}}',
							answer: '\\mixed{\\input{$answerWhole}}{\\frac{\\input{$answerNum}}{\\input{$answerDen}}}',
							controls: {
								"checkAnswer": true,
								"help": '\\rowgrp'
								+'{\\str{Divide the numerator by the denominator, then make the quotient the mixed number whole and the remainder the mixed number numerator. \xA0}}'
								+'{\\html{&nbsp;}}'
								+'{\\grp{\\frac{\\fracstr{$problemNum}}{\\fracstr{$problemDen}}}'
								+'{\\sign{\xA0 = \xA0}}'
								+'{\\mixed{\\fracstr{$answerWhole}}{\\frac{\\fracstr{$answerNum}}{\\fracstr{$answerDen}}}}}'
								+'{css{\\grp{\\str{Answer:  \xA0}}'
								+'{\\mixed{\\fracstr{$answerWhole}}{\\frac{\\fracstr{$answerNum}}{\\fracstr{$answerDen}}}}}{help-answer-text}}'
							}
						}]
					}]
			   },
			   withSimplification: {
					title: 'Change Improper Fractions into Mixed Numbers',
					children: [{
						title: 'Main Answer',
						children: [{
							problem: '\\rowgrp'
							+'{\\str{Write the improper fraction as a mixed number (simplify your answer if necessary):}}'
							+'{\\frac{\\fracstr{$problemNum}}{\\fracstr{$problemDen}}}',
							answer: '\\mixed{\\input{$answerWhole}}{\\frac{\\input{$answerNum}}{\\input{$answerDen}}}',
							controls: {
								"checkAnswer": true,
								"help": '\\rowgrp'
								+'{\\str{Divide the numerator by the denominator, then make the quotient the mixed number whole and the remainder the mixed number numerator. \xA0}}'
								+'{\\html{&nbsp;}}'
								+'{\\grp{\\frac{\\fracstr{$problemNum}}{\\fracstr{$problemDen}}}'
								+'{\\sign{\xA0 = \xA0}}'
								+'{\\mixed{\\fracstr{$answerWhole}}{\\frac{\\fracstr{$helpNum}}{\\fracstr{$problemDen}}}}'
								+'{\\sign{\xA0 = \xA0}}'
								+'{\\mixed{\\fracstr{$answerWhole}}{\\frac{\\fracstr{$answerNum}}{\\fracstr{$answerDen}}}}}'
								+'{css{\\grp{\\str{Answer:  \xA0}}'
								+'{\\mixed{\\fracstr{$answerWhole}}{\\frac{\\fracstr{$answerNum}}{\\fracstr{$answerDen}}}}}{help-answer-text}}'
							}
						}]
					}]
			   }
		},
        data = [
			{ problemNum: '8', problemDen: '3', answerWhole: '2', answerNum: '2', answerDen: '3', template: 'noSimplification' },
			{ problemNum: '3', problemDen: '2', answerWhole: '1', answerNum: '1', answerDen: '2', template: 'noSimplification' },
			{ problemNum: '13', problemDen: '6', answerWhole: '2', answerNum: '1', answerDen: '6', template: 'noSimplification' },
			{ problemNum: '15', problemDen: '4', answerWhole: '3', answerNum: '3', answerDen: '4', template: 'noSimplification' },
			{ problemNum: '35', problemDen: '20', answerWhole: '1', answerNum: '3', answerDen: '4', helpNum: '15', template: 'withSimplification' },
			{ problemNum: '35', problemDen: '15', answerWhole: '2', answerNum: '1', answerDen: '3', helpNum: '5', template: 'withSimplification' },
			{ problemNum: '110', problemDen: '30', answerWhole: '3', answerNum: '2', answerDen: '3', helpNum: '20', template: 'withSimplification' },
			{ problemNum: '11', problemDen: '8', answerWhole: '1', answerNum: '3', answerDen: '8', template: 'noSimplification' },
			{ problemNum: '10', problemDen: '4', answerWhole: '2', answerNum: '1', answerDen: '2', helpNum: '2', template: 'withSimplification' },
			{ problemNum: '77', problemDen: '49', answerWhole: '1', answerNum: '4', answerDen: '7', helpNum: '28', template: 'withSimplification' },
        ];

	return dataUtils.build(desc, template, data);
}]);

