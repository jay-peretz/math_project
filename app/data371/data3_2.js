/*global angular */

angular.module('mathSkills').service('data3_2', ['dataUtils', function (dataUtils) {
    var desc = {
			title: '3.2 Divide Whole Numbers',
			path: '3.2-divide-whole-numbers',
            children: []
        },
        template = {
			setupDivision: {
                title: 'Divide Whole Numbers',
                children: [{
                    title: 'Main Answer',
                    children: [{
						problem: '\\rowgrp'
						+'{\\html{$problemStatement}}'
						+'{\\html{&nbsp;}}'
						+'{\\html{$instructions}}',
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
						answer: '\\css{\\divwholes{\\select{$divisor}{["$divisor","$dividend"]}}{\\select{$dividend}{["$divisor","$dividend"]}}}{divwhole}',
						controls: {
							"checkAnswer": true,
							"help": true
						}
					}]
				}]
			},
			divisionFour: {
                title: 'Divide Whole Numbers',
                children: [{
                    title: 'Main Answer',
                    children: [{
						problem: '\\rowgrp'
						+'{\\html{$problemStatement}}'
						+'{\\html{&nbsp;}}'
						+'{\\html{$instructions}}',
						answer: '\\css{\\grp{\\input{$quotient}}{\\str{quotient}}{\\input{$remainder}}{\\str{remainder}}}{divwhole}',
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
						answer: '\\grp{\\css{\\str{$divisor}}{divisorstyle}}{\\css{\\grp{\\btn{$firstDigit}{$firstButton}}{\\btn{$secondDigit}{$secondButton}}{\\btn{$thirdDigit}{$thirdButton}}{\\btn{$fourthDigit}{$fourthButton}}}{dividendstyle}}',
						controls: {
							"checkAnswer": true,
							"help": true
						}
					}, {
						problem: '\\str{Divide $dividend by $divisor}',
						answer: '\\longdiv{$dividend}{$divisor}',
						controls: {
							"checkAnswer": true,
							"help": true
						}
					}]
				}]
			},
			divisionFourZeroRemainder: {
                title: 'Divide Whole Numbers',
                children: [{
                    title: 'Main Answer',
                    children: [{
						problem: '\\rowgrp'
						+'{\\html{$problemStatement}}'
						+'{\\html{&nbsp;}}'
						+'{\\html{$instructions}}',
						answer: '\\css{\\grp{\\input{$quotient}}{\\str{quotient}}}{divwhole}',
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
						answer: '\\grp{\\css{\\str{$divisor}}{divisorstyle}}{\\css{\\grp{\\btn{$firstDigit}{$firstButton}}{\\btn{$secondDigit}{$secondButton}}{\\btn{$thirdDigit}{$thirdButton}}{\\btn{$fourthDigit}{$fourthButton}}}{dividendstyle}}',
						controls: {
							"checkAnswer": true,
							"help": true
						}
					}, {
						problem: '\\str{Divide $dividend by $divisor}',
						answer: '\\longdiv{$dividend}{$divisor}',
						controls: {
							"checkAnswer": true,
							"help": true
						}
					}]
				}]
			},
			divisionFive: {
                title: 'Divide Whole Numbers',
                children: [{
                    title: 'Main Answer',
                    children: [{
						problem: '\\rowgrp'
						+'{\\html{$problemStatement}}'
						+'{\\html{&nbsp;}}'
						+'{\\html{$instructions}}',
						answer: '\\css{\\grp{\\input{$quotient}}{\\str{quotient}}{\\input{$remainder}}{\\str{remainder}}}{divwhole}',
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
						answer: '\\grp{\\css{\\str{$divisor}}{divisorstyle}}{\\css{\\grp{\\btn{$firstDigit}{$firstButton}}{\\btn{$secondDigit}{$secondButton}}{\\btn{$thirdDigit}{$thirdButton}}{\\btn{$fourthDigit}{$fourthButton}}{\\btn{$fifthDigit}{$fifthButton}}}{dividendstyle}}',
						controls: {
							"checkAnswer": true,
							"help": true
						}
					}, {
						problem: '\\str{Divide $dividend by $divisor}',
						answer: '\\longdiv{$dividend}{$divisor}',
						controls: {
							"checkAnswer": true,
							"help": true
						}
					}]
				}]
			},
			divisionFiveZeroRemainder: {
                title: 'Divide Whole Numbers',
                children: [{
                    title: 'Main Answer',
                    children: [{
						problem: '\\rowgrp'
						+'{\\html{$problemStatement}}'
						+'{\\html{&nbsp;}}'
						+'{\\html{$instructions}}',
						answer: '\\css{\\grp{\\input{$quotient}}{\\str{quotient}}}{divwhole}',
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
						answer: '\\grp{\\css{\\str{$divisor}}{divisorstyle}}{\\css{\\grp{\\btn{$firstDigit}{$firstButton}}{\\btn{$secondDigit}{$secondButton}}{\\btn{$thirdDigit}{$thirdButton}}{\\btn{$fourthDigit}{$fourthButton}}{\\btn{$fifthDigit}{$fifthButton}}}{dividendstyle}}',
						controls: {
							"checkAnswer": true,
							"help": true
						}
					}, {
						problem: '\\str{Divide $dividend by $divisor}',
						answer: '\\longdiv{$dividend}{$divisor}',
						controls: {
							"checkAnswer": true,
							"help": true
						}
					}]
				}]
			}
        },
        data = [
            { problemStatement: 'How many times does 5 go into 9308?', instructions: 'Set up the division problem by placing the dividend and the divisor in the proper places.', divisor: '5', dividend: '9308', template: 'setupDivision' },
			{ problemStatement: '3239 <span class=bigger>\xF7</span> 3', instructions: 'Set up the division problem by placing the dividend and the divisor in the proper places.', divisor: '3', dividend: '3239', template: 'setupDivision' },
			{ problemStatement: '<table class=fraction><tr><td>x</td></tr><tr><td><hr></td></tr><tr><td>y</td></tr></table>', instructions: 'Set up the division problem by placing the dividend and the divisor in the proper places.', divisor: 'y', dividend: 'x', template: 'setupDivision' },
			{ problemStatement: '<table class=fraction><tr><td>7916</td></tr><tr><td><hr></td></tr><tr><td>5</td></tr></table>', instructions: 'Set up the division problem by placing the dividend and the divisor in the proper places.', divisor: '5', dividend: '7916', template: 'setupDivision' },
			{ problemStatement: 'How many times does a go into b?', instructions: 'Set up the division problem by placing the dividend and the divisor in the proper places.', divisor: 'a', dividend: 'b', template: 'setupDivision' },
			{ problemStatement: 'Find the quotient of 6744 and 7.', instructions: 'Solve the problem.', divisor: '7', dividend: '6744', quotient: '963', remainder: '3', firstDigit: '6', secondDigit: '7', thirdDigit: '4', fourthDigit: '4', firstButton: 'F', secondButton: 'T', thirdButton: 'F', fourthButton: 'F', template: 'divisionFour' },
			{ problemStatement: 'Solve: 5406 <span class=bigger>&divide;</span> 6.', instructions: 'Solve the problem.', divisor: '6', dividend: '5406', quotient: '901', remainder: '0', firstDigit: '5', secondDigit: '4', thirdDigit: '0', fourthDigit: '6', firstButton: 'F', secondButton: 'T', thirdButton: 'F', fourthButton: 'F', template: 'divisionFourZeroRemainder' },
			{ problemStatement: 'Solve: 3027 <span class=bigger>&divide;</span> 3.', instructions: 'Solve the problem.', divisor: '3', dividend: '3027', quotient: '1009', remainder: '0', firstDigit: '3', secondDigit: '0', thirdDigit: '2', fourthDigit: '7', firstButton: 'T', secondButton: 'F', thirdButton: 'F', fourthButton: 'F', template: 'divisionFourZeroRemainder' },
			{ problemStatement: 'Find the quotient of 1828 and 6.', instructions: 'Solve the problem.', divisor: '6', dividend: '1828', quotient: '304', remainder: '4', firstDigit: '1', secondDigit: '8', thirdDigit: '2', fourthDigit: '8', firstButton: 'F', secondButton: 'T', thirdButton: 'F', fourthButton: 'F', template: 'divisionFour' },
			{ problemStatement: 'How many times does 3 go into 9381?', instructions: 'Solve the problem.', divisor: '3', dividend: '9381', quotient: '3127', remainder: '0', firstDigit: '9', secondDigit: '3', thirdDigit: '8', fourthDigit: '1', firstButton: 'T', secondButton: 'F', thirdButton: 'F', fourthButton: 'F', template: 'divisionFourZeroRemainder' },
			{ problemStatement: 'How many times does 23 go into 18300?', instructions: 'Solve the problem.', divisor: '23', dividend: '18300', quotient: '795', remainder: '15', firstDigit: '1', secondDigit: '8', thirdDigit: '3', fourthDigit: '0', fifthDigit: '0', firstButton: 'F', secondButton: 'F', thirdButton: 'T', fourthButton: 'F', fifthButton: 'F', template: 'divisionFive' },
			{ problemStatement: 'Solve: 8293 <span class=bigger>&divide;</span> 52.', instructions: 'Solve the problem.', divisor: '52', dividend: '8293', quotient: '159', remainder: '25', firstDigit: '8', secondDigit: '2', thirdDigit: '9', fourthDigit: '3', firstButton: 'F', secondButton: 'T', thirdButton: 'F', fourthButton: 'F', template: 'divisionFour' },
			{ problemStatement: 'Find the quotient of 2110 and 69.', instructions: 'Solve the problem.', divisor: '69', dividend: '2110', quotient: '30', remainder: '40', firstDigit: '2', secondDigit: '1', thirdDigit: '1', fourthDigit: '0', firstButton: 'F', secondButton: 'F', thirdButton: 'T', fourthButton: 'F', template: 'divisionFour' },
			{ problemStatement: 'How many times does 72 go into 63052?', instructions: 'Solve the problem.', divisor: '72', dividend: '63052', quotient: '875', remainder: '52', firstDigit: '6', secondDigit: '3', thirdDigit: '0', fourthDigit: '5', fifthDigit: '2', firstButton: 'F', secondButton: 'F', thirdButton: 'T', fourthButton: 'F', fifthButton: 'F', template: 'divisionFive' },
			{ problemStatement: 'Solve: 16290 <span class=bigger>&divide;</span> 905.', instructions: 'Solve the problem.', divisor: '905', dividend: '16290', quotient: '18', remainder: '0', firstDigit: '1', secondDigit: '6', thirdDigit: '2', fourthDigit: '9', fifthDigit: '0', firstButton: 'F', secondButton: 'F', thirdButton: 'F', fourthButton: 'T', fifthButton: 'F', template: 'divisionFiveZeroRemainder' }
        ];

	return dataUtils.build(desc, template, data);
}]);


