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
						problem: '\\str{Place the dividend and divisor in the proper places for the problem "$dividend divided by $divisor"}',
						answer: '\\css{\\divwholes{\\input{$divisor}}{\\input{$dividend}}}{divwhole}',
						controls: {
							"checkAnswer": true,
							"help": true
						}
                    }, {
						problem: '\\str{Click on the right-most digit of the number you would like to divide into.}',
						answer: '\\css{\\divwholes{\\str{$divisor}}{\\grp{\\btn{$firstDigit}{T}}{\\btn{$secondDigit}{F}}{\\btn{$thirdDigit}{F}}{\\btn{$fourthDigit}{F}}{\\html{.}}{\\btn{$fifthDigit}{F}}}}{divwhole}',
						controls: {
							"checkAnswer": true,
							"help": true
						}
                    }, {
						problem: '\\str{Divide $dividend by $divisor}',
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
		{ firstQuestion: 'Find the quotient of 6744.2 and 4.2<br>(round the answer to the $$roundTo place):', secondQuestion: 'Place the dividend and divisor in the proper places for the problem "6744.2 divided by 4.2"', dividend: '6744.2', divisor: '4.2', extendedDividend: '6744.200', digitsRightInExponential: "6", roundTo: 'tenths', answer: '1605.8', firstDigit: '6', secondDigit: '7', thirdDigit: '4', fourthDigit: '4', fifthDigit: '2', template: 'division' },
   ];

    return dataUtils.build(desc, template, data);
}]);
