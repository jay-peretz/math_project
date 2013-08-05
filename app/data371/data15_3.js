/*global angular */
 
angular.module('mathSkills').service('data15_3', ['dataUtils', function (dataUtils) {
    var desc = {
			title: '15.3 Divide by Powers of Ten',
			path: '15.3-divide-by-powers-of-ten',
            children: []
        },
        template = {
			main: {
                title: 'Divide by Powers of Ten',
                children: [{
                    title: 'Main Answer',
                    children: [{
						problem: '\\rowgrp'
						+'{\\html{$firstPartQuestion}}'
						+'{\\html{\&nbsp;}}'
						+'{\\html{$secondPartQuestion}',
						answer: '\\input{$answer}',
						controls: {
							"checkAnswer": true,
							"help": '\\rowgrp'
							+'{\\html{\&nbsp;}}'
							+'{\\dividedecpowten{$dividend}{$divisor}{$digitsRightInExponential}}'
							+'{\\html{\&nbsp;}}'
							+'{\\css{\\str{Answer:  $helpAnswer}}{help-answer-text}}'
						}
                    }]
                }]
            }
        },
		// decimal answers must include a zero before the decimal place here- optional in entered answer
		// integer answers must have no commas in the "answer" variable- commas in the "helpAnswer" variable
        data = [
            { firstPartQuestion: 'Determine the quotient of:', secondPartQuestion: '4 divided by a thousand',dividend: '4', divisor: '1000', answer: '0.004', helpAnswer: '0.004', template: 'main' },
			{ firstPartQuestion: 'Solve:', secondPartQuestion: '95 <span class=bigger>&divide;</span> 10,000', dividend: '95', divisor: '10000', answer: '0.0095', helpAnswer: '0.0095', template: 'main' },
			{ firstPartQuestion: 'What is the quotient of:', secondPartQuestion: '49.52 and 100', dividend: '49.52', divisor: '100', answer: '0.4952', helpAnswer: '0.4952', template: 'main' },
			{ firstPartQuestion: 'Find the result of dividing:', secondPartQuestion: '56.23 by a thousand', dividend: '56.23', divisor: '1000', answer: '0.05623', helpAnswer: '0.05623', template: 'main' },
			{ firstPartQuestion: 'Determine the quotient of:', secondPartQuestion: '62 divided by one tenth',dividend: '62', divisor: '0.1', answer: '620', helpAnswer: '620', template: 'main' },
			{ firstPartQuestion: 'Solve:', secondPartQuestion: '5 <span class=bigger>&divide;</span> 0.00001', dividend: '5', divisor: '0.00001', answer: '500000', helpAnswer: '500,000', template: 'main' },
			{ firstPartQuestion: 'What is the quotient of:', secondPartQuestion: '781.68 and 0.001', dividend: '781.68', divisor: '0.001', answer: '781680', helpAnswer: '781,680', template: 'main' },
			{ firstPartQuestion: 'Find the result of dividing:', secondPartQuestion: '0.12 by one hundredth', dividend: '0.12', divisor: '0.01', answer: '12', helpAnswer: '12', template: 'main' },
			{ firstPartQuestion: 'Determine the quotient of:', secondPartQuestion: '6 divided by a hundred',dividend: '6', divisor: '100', answer: '0.06', helpAnswer: '0.06', template: 'main' },
			{ firstPartQuestion: 'Solve:', secondPartQuestion: '76.46 \xF7 1000', dividend: '76.46', divisor: '1000', answer: '0.07646', helpAnswer: '0.07646', template: 'main' }
       ];

    return dataUtils.build(desc, template, data);
}]);
