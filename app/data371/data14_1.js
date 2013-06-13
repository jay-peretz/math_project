 /*global angular */

angular.module('mathSkills').service('data14_1', function () {
    var ret = {
		title: '14.1 Multiply Decimal Numbers',
		path: '14.1-multiply-decimal-numbers',
		children: []
        },
        template = {
			main: {
                title: 'Multiply Decimal Numbers',
                children: [{
                    title: 'Main Answer',
                    children: [{
						problem: '\\rowgrp{\\row{\\str{Find the product of the decimal numbers:}}}{\\row{\\str{\xA0}}}{\\row{\\multiplydecimals{$mathorenglish1}{partial}{$number1}{$number2}}}',
						answer: '\\input{$answer}',
						controls: {
							"checkAnswer": true,
							"help": '\\rowgrp{\\row{\\css{\\str{Add the number of decimal places in the multiplicand to the number of decimal places in the multiplier to obtain the number of decimal places in the answer:}}{label_like}}}{\\row{\\multiplydecimals{math}{complete}{$number1}{$number2}}{\\css{\\row{\\str{Answer: \xA0}}{\\commasnumber{$answer}}}{help-answer-text}}}'
						}
                    }]
                }]
            }
        },
        data = [
            { number1: '8.4', number2: '6.7', mathorenglish1: 'math', answer: '56.28', template: 'main' },
            { number1: '0.4', number2: '8.7', mathorenglish1: 'math', answer: '3.48', template: 'main' },
            { number1: '8.7', number2: '2.3', mathorenglish1: 'english', answer: '20.01', template: 'main' },
            { number1: '2.6', number2: '2.3', mathorenglish1: 'math', answer: '5.98', template: 'main' },
            { number1: '6.6', number2: '4.4', mathorenglish1: 'english', answer: '29.04', template: 'main' },
            { number1: '3.4', number2: '3.6', mathorenglish1: 'math', answer: '12.24', template: 'main' },
            { number1: '5.27', number2: '1.3', mathorenglish1: 'math', answer: '6.851', template: 'main' },
            { number1: '8.68', number2: '39.8', mathorenglish1: 'english', answer: '345.464', template: 'main' },
            { number1: '5.4', number2: '3.18', mathorenglish1: 'english', answer: '17.172', template: 'main' },
            { number1: '1.39', number2: '3.82', mathorenglish1: 'math', answer: '5.3098', template: 'main' },
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


