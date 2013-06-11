 /*global angular */

angular.module('mathSkills').service('data1_5', function () {
    var ret = {
			title: '1.5 Subtract Whole Numbers',
			path: '1.5-subtract-whole-numbers',
            children: []
        },
        template = {
			main: {
                title: 'Subtract Whole Numbers',
                children: [{
                    title: 'Main Answer',
                    children: [{
						problem: '\\rowgrp{\\row{\\str{Find the difference of the whole numbers:}}}{\\row{\\str{\xA0}}}{\\row{\\subtractwholes{$mathorenglish1}{partial}{$number1}{$number2}}}',
						answer: '\\input{$answer}',
						controls: {
							"checkAnswer": true,
							"help": '\\rowgrp{\\row{\\str{Find the difference of the whole numbers:}}}{\\row{\\str{\xA0}}}{\\row{\\subtractwholes{math}{complete}{$number1}{$number2}}{\\css{\\row{\\str{Answer: \xA0}}{\\commasnumber{$answer}}}{help-answer-text}}}'
						}
                    }]
                }]
            }
        },
        data = [
            { number1: '110', number2: '99', mathorenglish1: 'math', answer: '11', template: 'main' },
            { number1: '989', number2: '711', mathorenglish1: 'math', answer: '278', template: 'main' },
            { number1: '832', number2: '86', mathorenglish1: 'english', answer: '746', template: 'main' },
            { number1: '518', number2: '68', mathorenglish1: 'math', answer: '450', template: 'main' },
            { number1: '3749', number2: '756', mathorenglish1: 'math', answer: '2993', template: 'main' },
            { number1: '8889', number2: '549', mathorenglish1: 'math', answer: '8340', template: 'main' },
            { number1: '9475', number2: '7493', mathorenglish1: 'english', answer: '1982', template: 'main' },
            { number1: '8206', number2: '6863', mathorenglish1: 'math', answer: '1343', template: 'main' },
            { number1: '89686', number2: '62438', mathorenglish1: 'english', answer: '27248', template: 'main' },
            { number1: '45300', number2: '20532', mathorenglish1: 'math', answer: '24768', template: 'main' },
        ],
        interpolate = function (obj, data) {
            var string = JSON.stringify(obj);
            for (var symbol in data) {
                if (data.hasOwnProperty(symbol)) {
                    string = string.replace(new RegExp('\\$' + symbol, 'g'), data[symbol]);
                }
            }
            return JSON.parse(string);
        };

    ret.children = data.map(function (problem) {
        return interpolate(template[problem.template], problem);
    });

    return ret;
});
