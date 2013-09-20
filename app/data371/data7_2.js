/*global angular */

angular.module('mathSkills').service('data7_2', ['dataUtils', function (dataUtils) {
    var desc = {
			title: '7.2 Find the Reciprocal of a Fraction',
			path: '7.2-find-the-reciprocal-of-a-fraction',
            children: []
        },
	        template = {
				integerAnswer: {
					title: 'Find the Reciprocal of a Fraction',
					children: [{
						title: 'Main Answer',
						children: [{
							problem: '\\rowgrp'
							+'{\\grp{\\str{What is the reciprocal of \xA0}}'
							+'{\\mixed{\\html{$problemWhole}}{\\frac{\\fracstr{$problemNum}}{\\fracstr{$problemDen}}}}'
							+'{\\str{ ?}}}'
							+'{\\str{Simplify if necessary.}}',
							answer: '\\mixed{\\input{$answerWhole}}{\\frac{\\input{$answerNum}}{\\input{$answerDen}}}',
							controls: {
								"checkAnswer": true,
								"help": '\\rowgrp'
								+'{\\grp{\\str{The reciprocal of \xA0}}'
								+'{\\frac{\\fracstr{$helpNumber}}{\\fracstr{$problemDen}}}'
								+'{\\str{\xA0 is \xA0}}'
								+'{\\frac{\\fracstr{$problemDen}}{\\fracstr{$helpNumber}}}}'
								+'{\\html{&nbsp;}}'
								+'{css{\\grp{\\str{answer:  \xA0}}'
								+'{\\str{$answerWhole}}}{help-answer-text}}'
							}
						}]
					}]
			   },
			   fractionAnswer: {
					title: 'Find the Reciprocal of a Fraction',
					children: [{
						title: 'Main Answer',
						children: [{
							problem: '\\rowgrp'
							+'{\\grp{\\str{What is the reciprocal of \xA0}}'
							+'{\\frac{\\fracstr{$problemNum}}{\\fracstr{$problemDen}}}'
							+'{\\str{ ?}}}'
							+'{\\str{Simplify if necessary.}}',
							answer: '\\frac{\\input{$answerNum}}{\\input{$answerDen}}',
							controls: {
								"checkAnswer": true,
								"help": '\\rowgrp'
								+'{\\grp{\\str{The reciprocal of \xA0}}'
								+'{\\frac{\\fracstr{$problemNum}}{\\fracstr{$problemDen}}}'
								+'{\\str{\xA0 is \xA0}}'
								+'{\\frac{\\fracstr{$problemDen}}{\\fracstr{$problemNum}}}}'
								+'{\\html{&nbsp;}}'
								+'{css{\\grp{\\str{answer:  \xA0}}'
								+'{\\frac{\\fracstr{$answerNum}}{\\fracstr{$answerDen}}}}{help-answer-text}}'
							}
						}]
					}]
			   },
			   mixedSimplified: {
					title: 'Find the Reciprocal of a Fraction',
					children: [{
						title: 'Main Answer',
						children: [{
							problem: '\\rowgrp'
							+'{\\grp{\\str{What is the reciprocal of \xA0}}'
							+'{\\mixed{\\html{$problemWhole}}{\\frac{\\fracstr{$problemNum}}{\\fracstr{$problemDen}}}}'
							+'{\\str{ ?}}}'
							+'{\\str{Simplify if necessary.}}',
							answer: '\\frac{\\input{$answerNum}}{\\input{$answerDen}}',
							controls: {
								"checkAnswer": true,
								"help": '\\rowgrp'
								+'{\\grp{\\mixed{\\html{$problemWhole}}{\\frac{\\fracstr{$problemNum}}{\\fracstr{$problemDen}}}}'
								+'{\\str{\xA0 equals \xA0}}'
								+'{\\frac{\\fracstr{$helpNumber}}{\\fracstr{$problemDen}}}}'
								+'{\\grp{\\str{The reciprocal of \xA0}}'
								+'{\\frac{\\fracstr{$helpNumber}}{\\fracstr{$problemDen}}}'
								+'{\\str{\xA0 is \xA0}}'
								+'{\\frac{\\fracstr{$problemDen}}{\\fracstr{$helpNumber}}}}'
								+'{\\html{&nbsp;}}'
								+'{css{\\grp{\\str{answer:  \xA0}}'
								+'{\\mixed{\\html{$answerWhole}}{\\frac{\\fracstr{$answerNum}}{\\fracstr{$answerDen}}}}}{help-answer-text}}'
							}
						}]
					}]
				}
		},
        data = [
			{ problemWhole: '', problemNum: '1', problemDen: '4', answerWhole: '4', answerNum: '', answerDen: '', helpNumber: '1', template: 'integerAnswer' },
			{ problemNum: '2', problemDen: '3', answerNum: '3', answerDen: '2', template: 'fractionAnswer' },
            { problemWhole: '1', problemNum: '4', problemDen: '6', answerWhole: '', answerNum: '3', answerDen: '5', helpNumber: '10', template: 'mixedSimplified' },
			{ problemNum: '9', problemDen: '10', answerNum: '10', answerDen: '9', template: 'fractionAnswer' },
			{ problemNum: '13', problemDen: '30', answerNum: '30', answerDen: '13', template: 'fractionAnswer' },
			{ problemWhole: '1', problemNum: '5', problemDen: '6', answerWhole: '', answerNum: '6', answerDen: '11', helpNumber: '11', template: 'mixedSimplified' },
			{ problemWhole: '', problemNum: '1', problemDen: '2', answerWhole: '2', answerNum: '', answerDen: '', helpNumber: '1', template: 'integerAnswer' },
			{ problemNum: '3', problemDen: '10', answerNum: '10', answerDen: '3', template: 'fractionAnswer' },
			{ problemNum: '6', problemDen: '4', answerNum: '2', answerDen: '3', template: 'fractionAnswer' },
			{ problemWhole: '2', problemNum: '3', problemDen: '8', answerWhole: '', answerNum: '8', answerDen: '19', helpNumber: '19', template: 'mixedSimplified' },
        ];

	return dataUtils.build(desc, template, data);
}]);
