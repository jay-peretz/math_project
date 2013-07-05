/*global angular */

angular.module('mathSkills').service('data12_2', ['dataUtils', function (dataUtils) {
    var desc = {
			title: '12.2 Change Decimals to Fractions and Mixed Numbers',
			path: '12.2-change-decimals-to-fractions-and-mixed-numbers',
            children: []
        },
	        template = {
				fractionDirect: {
					title: 'Change Decimals to Fractions and Mixed Numbers',
					children: [{
						title: 'Main Answer',
						children: [{
							problem: '\\rowgrp'
							+'{\\str{What is the fraction of this decimal (reduced to lowest terms)?}}'
							+'{\\html{&nbsp;}}'
							+'{\\str{$problemDecimal}}',
							answer: '\\frac{\\input{$answerNum}}{\\input{$answerDen}}',
							controls: {
								"checkAnswer": true,
								"help": '\\rowgrp'
								+'{\\str{Write the place value name as a fraction;}}'
								+'{\\str{reduce if necessary.}}'
								+'{\\html{&nbsp;}}'
								+'{\\row{\\str{$problemDecimal}}'
								+'{\\sign{\xA0 = \xA0}}'
								+'{\\frac{\\fracstr{$answerNum}}{\\fracstr{$answerDen}}}}'
								+'{\\html{&nbsp;}}'
								+'{css{\\row{\\str{Answer:  \xA0}}'
								+'{\\frac{\\fracstr{$answerNum}}{\\fracstr{$answerDen}}}}'
								+'{help-answer-text}}'							}
						}]
					}]
			   },
			fractionSimplified: {
					title: 'Change Decimals to Fractions and Mixed Numbers',
					children: [{
						title: 'Main Answer',
						children: [{
							problem: '\\rowgrp'
							+'{\\str{What is the fraction of this decimal (reduced to lowest terms)?}}'
							+'{\\html{&nbsp;}}'
							+'{\\str{$problemDecimal}}',
							answer: '\\frac{\\input{$answerNum}}{\\input{$answerDen}}',
							controls: {
								"checkAnswer": true,
								"help": '\\rowgrp'
								+'{\\str{Write the place value name as a fraction;}}'
								+'{\\str{reduce if necessary.}}'
								+'{\\html{&nbsp;}}'
								+'{\\row{\\str{$problemDecimal}}'
								+'{\\sign{\xA0 = \xA0}}'
								+'{\\frac{\\fracstr{$helpNum}}{\\fracstr{$helpDen}}}'
								+'{\\sign{\xA0 = \xA0}}'
								+'{\\frac{\\fracstr{$answerNum}}{\\fracstr{$answerDen}}}}'
								+'{\\html{&nbsp;}}'
								+'{css{\\row{\\str{Answer:  \xA0}}'
								+'{\\frac{\\fracstr{$answerNum}}{\\fracstr{$answerDen}}}}'
								+'{help-answer-text}}'		
							}
						}]
					}]
			   },
			   mixedDirect: {
					title: 'Change Decimals to Fractions and Mixed Numbers',
					children: [{
						title: 'Main Answer',
						children: [{
							problem: '\\rowgrp'
							+'{\\str{What is the fraction of this decimal (reduced to lowest terms)?}}'
							+'{\\html{&nbsp;}}'
							+'{\\str{$problemDecimal}}',
							answer: '\\mixed{\\input{$answerWhole}}{\\frac{\\input{$answerNum}}{\\input{$answerDen}}}',
							controls: {
								"checkAnswer": true,
								"help": '\\rowgrp'
								+'{\\str{Write the place value name as a fraction;}}'
								+'{\\str{reduce if necessary.}}'
								+'{\\html{&nbsp;}}'
								+'{\\row{\\str{$problemDecimal}}'
								+'{\\sign{\xA0 = \xA0}}'
								+'{\\mixed{\\str{$answerWhole}}{\\frac{\\fracstr{$answerNum}}{\\fracstr{$answerDen}}}}}'
								+'{\\html{&nbsp;}}'
								+'{css{\\row{\\str{Answer:  \xA0}}'
								+'{\\mixed{\\str{$answerWhole}}{\\frac{\\fracstr{$answerNum}}{\\fracstr{$answerDen}}}}}'
								+'{help-answer-text}}'							}
						}]
					}]
			   },
			mixedSimplified: {
					title: 'Change Decimals to Fractions and Mixed Numbers',
					children: [{
						title: 'Main Answer',
						children: [{
							problem: '\\rowgrp'
							+'{\\str{What is the fraction of this decimal (reduced to lowest terms)?}}'
							+'{\\html{&nbsp;}}'
							+'{\\str{$problemDecimal}}',
							answer: '\\mixed{\\input{$answerWhole}}{\\frac{\\input{$answerNum}}{\\input{$answerDen}}}',
							controls: {
								"checkAnswer": true,
								"help": '\\rowgrp'
								+'{\\str{Write the place value name as a fraction;}}'
								+'{\\str{reduce if necessary.}}'
								+'{\\html{&nbsp;}}'
								+'{\\row{\\str{$problemDecimal}}'
								+'{\\sign{\xA0 = \xA0}}'
								+'{\\mixed{\\str{$answerWhole}}{\\frac{\\fracstr{$helpNum}}{\\fracstr{$helpDen}}}}'
								+'{\\sign{\xA0 = \xA0}}'
								+'{\\mixed{\\str{$answerWhole}}{\\frac{\\fracstr{$answerNum}}{\\fracstr{$answerDen}}}}}'
								+'{\\html{&nbsp;}}'
								+'{css{\\row{\\str{Answer:  \xA0}}'
								+'{\\mixed{\\str{$answerWhole}}{\\frac{\\fracstr{$answerNum}}{\\fracstr{$answerDen}}}}}'
								+'{help-answer-text}}'		
							}
						}]
					}]
			   }
		},
        data = [
			{ problemDecimal: '0.3', answerNum: '3', answerDen: '10', template: 'fractionDirect' },
			{ problemDecimal: '0.6', answerNum: '3', answerDen: '5', helpNum: '6', helpDen: '10', template: 'fractionSimplified' },
			{ problemDecimal: '0.57', answerNum: '57', answerDen: '100', template: 'fractionDirect' },
			{ problemDecimal: '8.4', answerWhole: '8', answerNum: '2', answerDen: '5', helpNum: '4', helpDen: '10',template: 'mixedSimplified' },
			{ problemDecimal: '3.9', answerWhole: '3', answerNum: '9', answerDen: '10', template: 'mixedDirect' },
			{ problemDecimal: '2.69', answerWhole: '2', answerNum: '69', answerDen: '100', template: 'mixedDirect' },
			{ problemDecimal: '0.44', answerNum: '11', answerDen: '25', helpNum: '44', helpDen: '100', template: 'fractionSimplified' },
			{ problemDecimal: '0.43', answerNum: '43', answerDen: '100', template: 'fractionDirect' },
			{ problemDecimal: '3.125', answerWhole: '3', answerNum: '1', answerDen: '8', helpNum: '125', helpDen: '1000',template: 'mixedSimplified' },
			{ problemDecimal: '2.101', answerWhole: '2', answerNum: '101', answerDen: '1000',template: 'mixedDirect' },
        ];

	return dataUtils.build(desc, template, data);
}]);



