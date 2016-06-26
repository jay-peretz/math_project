 /*global angular */
 
angular.module('mathSkills').service('data14_1', ['dataUtils', function (dataUtils) {
    var desc = {
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
							"help": '\\rowgrp{\\row{\\str{Add the number of digits to the right of the decimal points in your multiplication problem.  This tells you the number of digits that will be to the right of the decimal point in your answer.}}}{\\row{\\multiplydecimals{math}{complete}{$number1}{$number2}}{\\css{\\row{\\str{Answer: \xA0}}{\\commasnumber{$answer}}}{help-answer-text}}}'
						}
                    }]
                }]
            }
        },
        data = [
            { number1: '84', number2: '6.5', mathorenglish1: 'math', answer: '[\\"546.0\\",\\"546\\"]', template: 'main' },
            { number1: '0.4', number2: '8.7', mathorenglish1: 'math', answer: '3.48', template: 'main' },
            { number1: '8.7', number2: '23', mathorenglish1: 'english', answer: '200.1', template: 'main' },
            { number1: '2.6', number2: '0.14', mathorenglish1: 'math', answer: '0.364', template: 'main' },
            { number1: '66', number2: '4.4', mathorenglish1: 'english', answer: '290.4', template: 'main' },
            { number1: '3.4', number2: '3.6', mathorenglish1: 'math', answer: '12.24', template: 'main' },
            { number1: '5.27', number2: '1.3', mathorenglish1: 'math', answer: '6.851', template: 'main' },
            { number1: '8.68', number2: '39.8', mathorenglish1: 'english', answer: '345.464', template: 'main' },
            { number1: '5.4', number2: '3.18', mathorenglish1: 'english', answer: '17.172', template: 'main' },
            { number1: '1.39', number2: '3.82', mathorenglish1: 'math', answer: '5.3098', template: 'main' },
       ];

    return dataUtils.build(desc, template, data);
}]);