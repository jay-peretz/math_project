 /*global angular */

angular.module('mathSkills').service('data3_1', function () {
    var ret = {
		title: '3.1 Multiply Whole Numbers',
		path: '3.1-multiply-whole-numbers',
		children: []
        },
        template = {
			main: {
                title: 'Multiply Whole Numbers',
                children: [{
                    title: 'Main Answer',
                    children: [{
						problem: '\\rowgrp{\\row{\\str{Find the product of the whole numbers:}}}{\\row{\\str{\xA0}}}{\\row{\\multiplywholes{$mathorenglish1}{partial}{$number1}{$number2}}}',
						answer: '\\input{$answer}',
						controls: {
							"checkAnswer": true,
							"help": '\\rowgrp{\\row{\\multiplywholes{math}{complete}{$number1}{$number2}}{\\css{\\row{\\str{Answer: \xA0}}{\\commasnumber{$answer}}}{help-answer-text}}}'
						}
                    }]
                }]
            }
        },
        data = [
            { number1: '839', number2: '3', mathorenglish1: 'math', answer: '2517', template: 'main' },
            { number1: '596', number2: '6', mathorenglish1: 'english', answer: '3576', template: 'main' },
            { number1: '832', number2: '86', mathorenglish1: 'math', answer: '746', template: 'main' },
            { number1: '518', number2: '68', mathorenglish1: 'math', answer: '450', template: 'main' },
            { number1: '6453', number2: '4', mathorenglish1: 'english', answer: '25812', template: 'main' },
            { number1: '4049', number2: '7', mathorenglish1: 'math', answer: '28343', template: 'main' },
            { number1: '97', number2: '74', mathorenglish1: 'english', answer: '7178', template: 'main' },
            { number1: '34', number2: '29', mathorenglish1: 'english', answer: '986', template: 'main' },
            { number1: '645', number2: '90', mathorenglish1: 'math', answer: '58050', template: 'main' },
            { number1: '300', number2: '356', mathorenglish1: 'math', answer: '106800', template: 'main' },
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

