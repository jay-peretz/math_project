/*global angular */

angular.module('mathSkills').service('data18_2', ['dataUtils', function (dataUtils) {
    var desc = {
			title: '18.2 Change a Decimal to a Percent',
			path: '18.2-change-a-decimal-to-a-percent',
            children: []
        },
        template = {
            main: {
                title: 'Change a Decimal to a Percent',
                children: [{
                    title: 'Main Answer',
                    children: [{
                         problem: '\\rowgrp{\\row{\\str{Change this decimal into a percent:}}}{\\row{\\str{\xA0}}}{\\row{\\str{$startNumber}}}',
						answer: '\\grp{\\input{$answer}}{\\str{%}}',
						controls: {
							"checkAnswer": true,
							"help": '\\rowgrp'
							+'{\\percentarrows{$startNumber}{100}{decimal}{percent}}'
							+'{\\html{&nbsp;}}'
							+'{\\css{\\grp{\\str{Answer:  $answer}}{\\str{%}}}{help-answer-text help-answer-margin-right}}'
						}
                    }]
                }]
            }
        },
        data = [
            { startNumber: '8.41', answer: '841', template: 'main'  },
			{ startNumber: '0.6', answer: '60', template: 'main'  },
			{ startNumber: '0.66', answer: '0.66', template: 'main'  },
			{ startNumber: '0.54', answer: '54', template: 'main'  },
			{ startNumber: '7.4', answer: '740', template: 'main'  },
			{ startNumber: '0.7758', answer: '77.58', template: 'main'  },
			{ startNumber: '0.463', answer: '46.3', template: 'main'  },
			{ startNumber: '0.8769', answer: '87.69', template: 'main'  },
			{ startNumber: '1.432', answer: '143.2', template: 'main'  },
			{ startNumber: '0.5', answer: '50', template: 'main'  }
        ];


    return dataUtils.build(desc, template, data);
}]);