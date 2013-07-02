 /*global angular */

angular.module('mathSkills').service('data1_4', ['dataUtils', function (dataUtils) {
    var desc = {
			title: '1.4 Add Whole Numbers',
			path: '1.4-add-whole-numbers',
            children: []
        },
        template = {
			main: {
                title: 'Add Whole Numbers',
                children: [{
                    title: 'Main Answer',
                    children: [{
                         problem: '\\rowgrp{\\row{\\str{Find the sum of the whole numbers:}}}{\\row{\\addwholes{$mathorenglish1}{partial}{$number1}}}',
						answer: '\\input{$answer}',
						controls: {
							"checkAnswer": true,
							"help": '\\rowgrp{\\row{\\addwholes{math}{complete}{$number1}}{\\css{\\row{\\str{Answer: \xA0}}{\\commasnumber{$answer}}}{help-answer-text}}'
                		}
                    }]
                }]
            }
        },
        data = [
            { number1: '[47, 59]', mathorenglish1: 'math', answer: '106', template: 'main' },
            { number1: '[301, 815]', mathorenglish1: 'english', answer: '1116', template: 'main' },
            { number1: '[968, 827]', mathorenglish1: 'math', answer: '1795', template: 'main' },
            { number1: '[68, 47]', mathorenglish1: 'math', answer: '115', template: 'main' },
            { number1: '[9026, 1911]', mathorenglish1: 'english', answer: '10937', template: 'main' },
            { number1: '[3148, 2584]', mathorenglish1: 'math', answer: '5732', template: 'main' },
            { number1: '[618,489,115]', mathorenglish1: 'math', answer: '1222', template: 'main' },
            { number1: '[1700,2233,4945]', mathorenglish1: 'english', answer: '8878', template: 'main' },
            { number1: '[301,815]', mathorenglish1: 'math', answer: '1116', template: 'main' },
            { number1: '[832,6223,2705,146]', mathorenglish1: 'english', answer: '9906', template: 'main' }
        ];

	return dataUtils.build(desc, template, data);
}]);

