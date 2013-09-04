/*global angular */

angular.module('mathSkills').service('data15_2', ['dataUtils', function (dataUtils) {
    var desc = {
			title: '15.2 Dividing Decimals',
			path: '15.2-dividing-decimals',
            children: []
        },
	    template = {
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
						+'{css{\\html{Now move the decimal points of the dividend and divisor and re-write the problem$roundStatement}}{alert alert-info}}'
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
            },
			noDecimalShiftDivision: {
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
	// integer answers must have no commas in the "answer" variable
	// quotient the number prior to rounding, answer rounded solution (the same if no rounding)
	// roundStatement ';<br> if necessary, add zeros to the dividend to allow for rounding:'
	// extendedDividend is used to provide zeros after digits to the right of the decimal
	data = [
		// note that digitsRightInExponential is the total number of digits in the answer less 1
		// problem 1
		{ firstQuestion: 'Find the quotient of 152.8 and 0.4', roundStatement: '', dividend: '152.8', divisor: '0.4', extendedDividend: '152.8', decimalMovedDivisor: '4', decimalMovedDividend: '1528', digitsRightInExponential: "2", quotient: '382', answer: '382', buttonString: '\\grp{\\btn{1}{F}}{\\btn{5}{T}}{\\btn{2}{F}}{\\btn{8}{F}}', template: 'division' },
		// note that digitsRightInExponential is the total number of digits in the answer less 1
		// problem 2
		{ firstQuestion: '720 <span class=bigger>&divide;</span> 1.8 <span class=bigger>&equals;</span>', roundStatement: '', dividend: '720', divisor: '1.8', extendedDividend: '720.0', decimalMovedDivisor: '18', decimalMovedDividend: '7200', digitsRightInExponential: "2", quotient: '400',  answer: '400', buttonString: '\\grp{\\btn{7}{F}}{\\btn{2}{T}}{\\btn{0}{F}}{\\btn{0}{F}}', template: 'division' },
		// note that digitsRightInExponential is the total number of digits in the answer less 1
		// problem 3
		{ firstQuestion: 'Find the quotient of 946.12 and 3.1', roundStatement: '', dividend: '946.12', divisor: '3.1', extendedDividend: '946.12', decimalMovedDivisor: '31', decimalMovedDividend: '9461.2', digitsRightInExponential: "3", quotient: '305.2', answer: '305.2', buttonString: '\\grp{\\btn{9}{F}}{\\btn{4}{T}}{\\btn{6}{F}}{\\btn{1}{F}}{\\html{.}}{\\btn{2}{F}}', template: 'division' },
		// note that digitsRightInExponential is the total number of digits in the answer less 1
		// problem 4
		{ firstQuestion: 'Find the quotient of 7.5 and 40', roundStatement: '', dividend: '7.5', divisor: '40', extendedDividend: '7.5000', decimalMovedDivisor: '40',decimalMovedDividend: '7.5000', digitsRightInExponential: "3", quotient: '0.1875', answer: '0.1875', buttonString: '\\grp{\\btn{7}{F}}{\\html{.}}{\\btn{5}{T}}{\\btn{0}{F}}{\\btn{0}{F}}{\\btn{0}{F}}', template: 'division' },
		// note that digitsRightInExponential is the total number of digits in the answer less 1
		// problem 5
		{ firstQuestion: '456.52 <span class=bigger>&divide;</span> 0.8 <span class=bigger>&equals;</span>', roundStatement: '', dividend: '456.52', divisor: '0.8', extendedDividend: '456.520', decimalMovedDivisor: '8', decimalMovedDividend: '4565.20', digitsRightInExponential: "4", quotient: '570.65', answer: '570.65', buttonString: '\\grp{\\btn{4}{F}}{\\btn{5}{T}}{\\btn{6}{F}}{\\btn{5}{F}}{\\html{.}}{\\btn{2}{F}}', template: 'division' },
		// note that digitsRightInExponential is the total number of digits in the answer less 1
		// problem 6
		{ firstQuestion: '456.52 <span class=bigger>&divide;</span> 0.8 <span class=bigger>&equals;</span>', roundStatement: '', dividend: '456.52', divisor: '0.8', extendedDividend: '456.520', decimalMovedDivisor: '8', decimalMovedDividend: '4565.20', digitsRightInExponential: "4", quotient: '570.65', answer: '570.65', buttonString: '\\grp{\\btn{4}{F}}{\\btn{5}{T}}{\\btn{6}{F}}{\\btn{5}{F}}{\\html{.}}{\\btn{2}{F}}', template: 'division' },
		// note that digitsRightInExponential is the total number of digits in the answer less 1
		// problem 7
		{ firstQuestion: 'Find the quotient of 0.52 and 13', roundStatement: '', dividend: '0.52', divisor: '13', extendedDividend: '0.52', decimalMovedDivisor: '13', decimalMovedDividend: '0.52', digitsRightInExponential: "1", quotient: '0.04', answer: '0.04', buttonString: '\\grp{\\btn{0}{F}}{\\html{.}}{\\btn{5}{F}}{\\btn{2}{T}}', template: 'noDecimalShiftDivision' },
		// note that digitsRightInExponential is the total number of digits in the answer less 1
		// problem 8
		{ firstQuestion: 'Find the quotient of 1246 and 0.89', roundStatement: '', dividend: '1246', divisor: '0.89', extendedDividend: '1246', decimalMovedDivisor: '89',decimalMovedDividend: '124600', digitsRightInExponential: "3", quotient: '1400', answer: '1400', buttonString: '\\grp{\\btn{1}{F}}{\\btn{2}{F}}{\\btn{4}{T}}{\\btn{6}{F}}{\\btn{0}{F}}{\\btn{0}{F}}', template: 'division' },
		// note that digitsRightInExponential is the total number of digits in the answer less 1
		// problem 9
		{ firstQuestion: 'Find the quotient of 8.05 and 0.75;<br>round the answer to the tenths place.', roundStatement: ';<br>add zeros to the dividend to allow for rounding to the tenths place:', dividend: '8.05', divisor: '0.75', extendedDividend: '8.0500', decimalMovedDivisor: '75',decimalMovedDividend: '805.00', digitsRightInExponential: "3", quotient: '10.73', answer: '10.7', buttonString: '\\grp{\\btn{8}{F}}{\\btn{0}{T}}{\\btn{5}{F}}{\\html{.}}{\\btn{0}{F}}{\\btn{0}{F}}', template: 'division' },
		// note that digitsRightInExponential is the total number of digits in the answer less 1
		// problem 10
		{ firstQuestion: 'Find the quotient of 100 and 5.7;<br>round the answer to the hundredths place.', roundStatement: ';<br> if necessary, add zeros to the dividend to allow for rounding to the hundredths place:', dividend: '100', divisor: '5.7', extendedDividend: '100.000', decimalMovedDivisor: '57', decimalMovedDividend: '1000.000', digitsRightInExponential: "4", quotient: '17.543', answer: '17.54', buttonString: '\\grp{\\btn{1}{F}}{\\btn{0}{F}}{\\btn{0}{T}}{\\btn{0}{F}}{\\html{.}}{\\btn{0}{F}}{\\btn{0}{F}}{\\btn{0}{F}}', template: 'division' }
   ];

    return dataUtils.build(desc, template, data);
}]);
