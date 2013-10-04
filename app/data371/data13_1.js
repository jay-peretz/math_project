 /*global angular */

angular.module('mathSkills').service('data13_1', ['dataUtils', function (dataUtils) {
    var desc = {
			title: '13.1 Add Decimal Numbers',
			path: '13.1-add-decimal-numbers',
            children: []
        },
	    template = {
            twoDecimals: {
                title: 'Add Decimal Numbers',
                children: [{
                    title: 'Main Answer',
                    children: [{
						problem: '\\rowgrp'
						+'{\\row{\\str{Find the sum of the decimal numbers:}}}'
						+'{\\row{\\adddecimals{$questionLayout}{partial}{[$firstDecimal,$secondDecimal]}}}',
						answer: '\\input{$answer}',
						controls: {
							"checkAnswer": true,
							"help": '\\rowgrp'
							+'{\\html{&nbsp;}}'
							+'{\\adddecimals{math}{complete}{[$firstDecimal,$secondDecimal]}}'
							+'{\\css{\\grp{\\str{Answer: \xA0}}{\\str{$answer}}}{help-answer-text}}'
						}
                    }]
                }]
            },
            threeDecimals: {
                title: 'Add Decimal Numbers',
                children: [{
                    title: 'Main Answer',
                    children: [{
						problem: '\\rowgrp'
						+'{\\str{Find the sum of the decimal numbers:}}'
						+'{\\html{&nbsp;}}'
						+'{\\adddecimals{$questionLayout}{partial}{[$firstDecimal,$secondDecimal,$thirdDecimal]}}',
						answer: '\\input{$answer}',
						controls: {
							"checkAnswer": true,
							"help": '\\rowgrp'
							+'{\\html{&nbsp;}}'
							+'{\\adddecimals{math}{complete}{[$firstDecimal,$secondDecimal,$thirdDecimal]}}'
							+'{\\css{\\grp{\\str{Answer: \xA0}}{\\str{$answer}}}{help-answer-text}}'
						}
                    }]
                }]
            }
        },
        data = [
            { questionLayout: 'math', firstDecimal: '47.2', secondDecimal: '59.6', answer: '106.8', template: 'twoDecimals' },
			{ questionLayout: 'math', firstDecimal: '86.21', secondDecimal: '8.83', thirdDecimal: '235.755', answer: '330.795', template: 'threeDecimals' },
			{ questionLayout: 'english', firstDecimal: '73.98', secondDecimal: '396.43', thirdDecimal: '47.514', answer: '517.924', template: 'threeDecimals' },
			{ questionLayout: 'english', firstDecimal: '95.2', secondDecimal: '53.3', thirdDecimal: '75.12', answer: '223.62', template: 'threeDecimals' },
			// problem 5
			{ questionLayout: 'english', firstDecimal: '3.4', secondDecimal: '0.811', answer: '4.211', template: 'twoDecimals' },
			{ questionLayout: 'english', firstDecimal: '6.6', secondDecimal: '135', answer: '141.6', template: 'twoDecimals' },
			{ questionLayout: 'english', firstDecimal: '4.2', secondDecimal: '1.883', thirdDecimal: '72.79', answer: '78.873', template: 'threeDecimals' },
			{ questionLayout: 'english', firstDecimal: '4068.97', secondDecimal: '125.692', thirdDecimal: '59', answer: '4253.662', template: 'threeDecimals' },
			{ questionLayout: 'english', firstDecimal: '1.05', secondDecimal: '0.062', thirdDecimal: '0.3593', answer: '1.4713', template: 'threeDecimals' },
			{ questionLayout: 'english', firstDecimal: '5267.4', secondDecimal: '583', thirdDecimal: '29.1444', answer: '5879.5444', template: 'threeDecimals' },
        ];

    return dataUtils.build(desc, template, data);
}]);
 