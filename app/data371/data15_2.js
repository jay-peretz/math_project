/*global angular */

angular.module('mathSkills').service('data15_2', ['dataUtils', function (dataUtils) {
    var desc = {
			title: '15.2 Dividing Decimals',
			path: '15.2-dividing-decimals',
            children: []
        },
	        template = {
            setup: {
                title: 'Dividing Decimals',
                children: [{
                    title: 'Main Answer',
                    children: [{
						problem: '\\html{$firstQuestion}',
						answer: '\\css{\\divwholes{\\input{$divisor}}{\\input{$dividend}}}{divwhole}',
						controls: {
							"checkAnswer": true,
							"help": false,
							"workbook": true
						}
                    }]
                }, {
                    title: 'Workbook',
                    children: [{
						problem: '\\str{Place the dividend and divisor in the proper places for the problem "$dividend divided by $divisor"}',
						answer: '\\css{\\divwholes{\\select{$divisor}{["$divisor","$dividend"]}}{\\select{$dividend}{["$divisor", "$dividend"]}}}{divwhole}',
						controls: {
							"checkAnswer": true,
							"help": true
						}
                    }]
                }]
            },
			division: {
                title: 'Dividing Decimals',
                children: [{
                    title: 'Main Answer',
                    children: [{
						problem: '\\html{$firstQuestion}',
						answer: '\\input{$answer}',
						controls: {
							"checkAnswer": true,
							"help": false,
							"workbook": true
						}
                    }]
                }, {
                    title: 'Workbook',
                    children: [{
						problem: '\\str{Place the dividend and divisor in the proper places for the problem "$dividend divided by $divisor:"}',
						answer: '\\css{\\divwholes{\\input{$divisor}}{\\input{$dividend}}}{divwhole}',
						controls: {
							"checkAnswer": true,
							"help": true
						}
                    }, {
						problem: '\\str{Place the dividend and divisor in the proper places for the problem "$dividend divided by $divisor:"}',
						answer: '\\css{\\rowgrp'
						+'{\\html{&nbsp;}}'
						+'{\\css{\\divwholes{\\str{$divisor}}{\\str{$dividend}}}{divwhole}}'
						+'{\\html{&nbsp;}}'
						+'{\\html{&nbsp;}}'
						+'{css{\\html{Now move the decimal points of the dividend and divisor and re-write the problem;<br> if necessary, add zeros to the dividend to allow for rounding to the $roundTo place:}}{alert alert-info}}'
						+'{\\html{&nbsp;}}'
						+'{\\css{\\divwholes{\\input{$decimalMovedDivisor}}{\\input{$decimalMovedDividend}}}{divwhole}}}{well}',
						controls: {
							"checkAnswer": true,
							"help": true
						}
                    }, {
						problem: '\\str{Click on the right-most digit of the number you would like to divide into.}',
						answer: '\\css{\\divwholes{\\str{$decimalMovedDivisor}}{$$buttonString}}{divwhole}',
						controls: {
							"checkAnswer": true,
							"help": true
						}
                    }, {
						problem: '\\html{$firstQuestion}',
						answer: '\\longdivdecimal{$extendedDividend}{$divisor}{$digitsRightInExponential}',
						controls: {
							"checkAnswer": true,
							"help": true
						}
                    }]
                }]
            }
        },
	
	// decimal answers must include a zero before the decimal place here- optional in entered answer
	// integer answers must have no commas in the "answer" variable- commas in the "helpAnswer" variable
	data = [
		{ firstQuestion: 'How many times does 4 go into 9204.8?<br><br>Set up the division problem by placing the dividend and the divisor in the proper places.', dividend: '9204.8', divisor: '4', answer: '2301.2', template: 'setup' },
		// note that digitsRightInExponential is the total number of digits in the answer less 1
		// problem 2
		{ firstQuestion: 'Find the quotient of 6744.2 and 4.2;<br>round the answer to the $$roundTo place.', dividend: '6744.2', divisor: '4.2', extendedDividend: '6744.200', decimalMovedDivisor: '42',decimalMovedDividend: '67442.00', digitsRightInExponential: "5", roundTo: 'tenths', quotient: '1605.76', answer: '1605.8', buttonString: '\\grp{\\btn{6}{F}}{\\btn{7}{T}}{\\btn{4}{F}}{\\btn{4}{F}}{\\btn{2}{F}}{\\html{.}}{\\btn{0}{F}}{\\btn{0}{F}}', template: 'division' },
		// note that digitsRightInExponential is the total number of digits in the answer less 1
		// problem 3
		{ firstQuestion: 'Find the quotient of 505.52 and 14.2.', dividend: '505.52', divisor: '14.2', extendedDividend: '505.52', decimalMovedDivisor: '142',decimalMovedDividend: '5055.2', digitsRightInExponential: "2", roundTo: 'tenths', quotient: '35.6',  answer: '35.6', buttonString: '\\grp{\\btn{5}{F}}{\\btn{0}{F}}{\\btn{5}{T}}{\\btn{5}{F}}{\\html{.}}{\\btn{2}{F}}', template: 'division' },
   ];

    return dataUtils.build(desc, template, data);
}]);
