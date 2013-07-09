/*global angular */

angular.module('mathSkills').service('data13_2', ['dataUtils', function (dataUtils) {
    var desc = {
			title: '13.2 Subtract Decimal Numbers',
			path: '13.2-subtract-decimal-numbers',
            children: []
        },
	    template = {
            twoDecimals: {
                title: 'Subtract Decimal Numbers',
                children: [{
                    title: 'Main Answer',
                    children: [{
						problem: '\\rowgrp'
						+'{\\str{Find the difference of the decimal numbers:}}'
						+'{\\html{&nbsp;}}'
						+'{\\subtractdecimals{$questionLayout}{partial}{$firstDecimal}{$secondDecimal}}',
						answer: '\\input{$answer}',
						controls: {
							"checkAnswer": true,
							"help": '\\rowgrp'
							+'{\\html{&nbsp;}}'
							+'{\\subtractdecimals{math}{complete}{$firstDecimal}{$secondDecimal}}'
							+'{\\css{\\grp{\\str{Answer: \xA0}}{\\str{$answer}}}{help-answer-text}}'
						}
                    }]
                }]
            }
        },
        data = [
            { questionLayout: 'math', firstDecimal: '17.3', secondDecimal: '8.22', answer: '9.08', template: 'twoDecimals' },
			{ questionLayout: 'math', firstDecimal: '3', secondDecimal: '0.12', answer: '2.88', template: 'twoDecimals' },
			{ questionLayout: 'math', firstDecimal: '8.42', secondDecimal: '5.75', answer: '2.67', template: 'twoDecimals' },
			{ questionLayout: 'english', firstDecimal: '8.7', secondDecimal: '5.33', answer: '3.37', template: 'twoDecimals' },
			{ questionLayout: 'math', firstDecimal: '27.15', secondDecimal: '2.75', answer: '24.4', template: 'twoDecimals' },
			{ questionLayout: 'english', firstDecimal: '22.1', secondDecimal: '3.8', answer: '18.3', template: 'twoDecimals' },
			{ questionLayout: 'math', firstDecimal: '458.5', secondDecimal: '84.158', answer: '374.342', template: 'twoDecimals' },
			{ questionLayout: 'english', firstDecimal: '292.653', secondDecimal: '6.32', answer: '286.333', template: 'twoDecimals' },
			{ questionLayout: 'math', firstDecimal: '9.28', secondDecimal: '5.24', answer: '4.04', template: 'twoDecimals' },
			{ questionLayout: 'math', firstDecimal: '955.707', secondDecimal: '87.998', answer: '867.709', template: 'twoDecimals' },
        ];

    return dataUtils.build(desc, template, data);
}]);
 