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
			{ questionLayout: 'english', firstDecimal: '73.98', secondDecimal: '396.43', thirdDecimal: '47.514', answer: '517.924', template: 'threeDecimals' },
			{ questionLayout: 'english', firstDecimal: '95.2', secondDecimal: '53.3', thirdDecimal: '75.12', answer: '223.62', template: 'threeDecimals' },
			{ questionLayout: 'math', firstDecimal: '86.21', secondDecimal: '8.83', thirdDecimal: '235.755', answer: '330.795', template: 'threeDecimals' },
			{ questionLayout: 'english', firstDecimal: '3.471', secondDecimal: '92.43', thirdDecimal: '8.11', answer: '104.011', template: 'threeDecimals' },
			{ questionLayout: 'math', firstDecimal: '66.6', secondDecimal: '36.94', thirdDecimal: '7.44', answer: '110.98', template: 'threeDecimals' },
			{ questionLayout: 'math', firstDecimal: '4.2', secondDecimal: '1.883', thirdDecimal: '72.79', answer: '78.873', template: 'threeDecimals' },
			{ questionLayout: 'english', firstDecimal: '4068.97963', secondDecimal: '343390.77255', thirdDecimal: '537.75789', answer: '347997.51007', template: 'threeDecimals' },
			{ questionLayout: 'math', firstDecimal: '532.2879', secondDecimal: '51694.671', thirdDecimal: '685.8118', answer: '52912.7707', template: 'threeDecimals' },
			{ questionLayout: 'english', firstDecimal: '5267.4401', secondDecimal: '583.1444', thirdDecimal: '938.78761', answer: '6789.37211', template: 'threeDecimals' },
        ];

    return dataUtils.build(desc, template, data);
}]);
 