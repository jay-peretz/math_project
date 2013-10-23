/*global angular */
 
angular.module('mathSkills').service('data15_2', ['dataUtils', function (dataUtils) {
    var desc = {
			title: '15.2 Change Fractions to Decimals',
    		path: '15.2-change-fractions-to-decimals',
            children: []
        },
        template = {
			exact: {
                title: 'Change Fractions to Decimals',
                children: [{
                    title: 'Main Answer',
                    children: [{
						problem: '\\grp'
									+'{\\html{Change &nbsp;}}'
									+'{\\frac{\\fracstr{$fractionNum}}{\\fracstr{$fractionDen}}}'
									+'{\\html{&nbsp; to a decimal:}}',
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
						problem: '\\grp'
									+'{\\html{Change &nbsp;}}'
									+'{\\frac{\\fracstr{$fractionNum}}{\\fracstr{$fractionDen}}}'
									+'{\\html{&nbsp; to a decimal:}}',
						answer: '\\css{\\rowgrp'
									+'{\\ins{Place the dividend and divisor in the proper places for the problem "$fractionNum divided by $fractionDen:"}}'
									+'{\\html{&nbsp;}}'
									+'{\\css{\\divwholes{\\input{$fractionDen}}{\\input{$fractionNum}}}{divwhole}}}{well}',
						controls: {
							"checkAnswer": true,
							"help": true
						}
                    }, {
						problem: '\\grp'
									+'{\\html{Change &nbsp;}}'
									+'{\\frac{\\fracstr{$fractionNum}}{\\fracstr{$fractionDen}}}'
									+'{\\html{&nbsp; to a decimal:}}',
						answer: '\\css{\\rowgrp'
									+'{\\ins{Click on the right-most digit of the number you would like to divide into.}}'
									+'{\\html{&nbsp;}}'
									+'{\\css{\\divwholes{\\str{$fractionDen}}{$$buttonString}}{divwhole}}}{well}',
						controls: {
							"checkAnswer": true,
							"help": true
						}
                    }, {
						problem: '\\grp'
									+'{\\html{Change &nbsp;}}'
									+'{\\frac{\\fracstr{$fractionNum}}{\\fracstr{$fractionDen}}}'
									+'{\\html{&nbsp; to a decimal:}}',	
						answer: '\\css{\\longdivdecimal{$extendedDividend}{$fractionDen}{$digitsRightInExponential}}{well}',
						controls: {
							"checkAnswer": true,
							"help": true
						}
                    }]
                }]
            },
			rounded: {
                title: 'Change Fractions to Decimals',
                children: [{
                    title: 'Main Answer',
                    children: [{
						problem: '\\rowgrp'
									+'{\\grp{\\html{Change &nbsp;}}{\\frac{\\fracstr{$fractionNum}}{\\fracstr{$fractionDen}}}{\\html{&nbsp; to a decimal;}}}'
									+'{\\html{\&nbsp;}}'
									+'{\\html{Round to the hundredths place if necessary.}}',
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
						problem: '\\rowgrp'
									+'{\\grp{\\html{Change &nbsp;}}{\\frac{\\fracstr{$fractionNum}}{\\fracstr{$fractionDen}}}{\\html{&nbsp; to a decimal;}}}'
									+'{\\html{\&nbsp;}}'
									+'{\\html{Round to the hundredths place if necessary.}}',
						answer: '\\css{\\rowgrp'
									+'{\\ins{Place the dividend and divisor in the proper places for the problem "$fractionNum divided by $fractionDen:"}}'
									+'{\\html{&nbsp;}}'
									+'{\\css{\\divwholes{\\input{$fractionDen}}{\\input{$fractionNum}}}{divwhole}}}{well}',
						controls: {
							"checkAnswer": true,
							"help": true
						}
                    }, {
						problem: '\\rowgrp'
									+'{\\grp{\\html{Change &nbsp;}}{\\frac{\\fracstr{$fractionNum}}{\\fracstr{$fractionDen}}}{\\html{&nbsp; to a decimal;}}}'
									+'{\\html{\&nbsp;}}'
									+'{\\html{Round to the hundredths place if necessary.}}',
						answer: '\\css{\\rowgrp'
									+'{\\ins{Click on the right-most digit of the number you would like to divide into.}}'
									+'{\\html{&nbsp;}}'
									+'{\\css{\\divwholes{\\str{$fractionDen}}{$$buttonString}}{divwhole}}}{well}',
						controls: {
							"checkAnswer": true,
							"help": true
						}
                    }, {
						problem: '\\rowgrp'
									+'{\\grp{\\html{Change &nbsp;}}{\\frac{\\fracstr{$fractionNum}}{\\fracstr{$fractionDen}}}{\\html{&nbsp; to a decimal;}}}'
									+'{\\html{\&nbsp;}}'
									+'{\\html{Round to the hundredths place if necessary.}}',
						answer: '\\css'
									+'{\\longdivdecimal{$extendedDividend}{$fractionDen}{$digitsRightInExponential}}{well}',
						controls: {
							"checkAnswer": true,
							"help": true
						}
                    }]
                }]
            }, 
			exactMixed: {
                title: 'Change Fractions to Decimals',
                children: [{
                    title: 'Main Answer',
                    children: [{
						problem: '\\grp{\\html{Change }}{\\mixed{\\fracstr{$whole}}{\\frac{\\fracstr{$fractionNum}}{\\fracstr{$fractionDen}}}}{\\html{ to a decimal;}}',
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
						problem: '\\grp{\\html{Change }}{\\mixed{\\fracstr{$whole}}{\\frac{\\fracstr{$fractionNum}}{\\fracstr{$fractionDen}}}}{\\html{ to a decimal;}}',
						answer: '\\css{\\rowgrp'
											+'{\\ins{Write $whole <sup>$fractionNum</sup>&#8260;<sub>$fractionDen</sub> as an improper fraction:}}'
											+'{\\html{&nbsp;}}'
											+'{\\frac{\\input{$fractionNewNum}}{\\input{$fractionDen}}}'
									+'}{well}',
						controls: {
							"checkAnswer": true,
							"help": true
						}
                    }, {
						problem: '\\grp{\\html{Change }}{\\mixed{\\fracstr{$whole}}{\\frac{\\fracstr{$fractionNum}}{\\fracstr{$fractionDen}}}}{\\html{ to a decimal;}}',
						answer: '\\css{\\rowgrp'
									+'{\\ins{Place the dividend and divisor in the proper places for the problem "$fractionNewNum divided by $fractionDen:"}}'
									+'{\\html{&nbsp;}}'
									+'{\\css{\\divwholes{\\input{$fractionDen}}{\\input{$fractionNewNum}}}{divwhole}}}{well}',
						controls: {
							"checkAnswer": true,
							"help": true
						}
                    }, {
						problem: '\\grp{\\html{Change }}{\\mixed{\\fracstr{$whole}}{\\frac{\\fracstr{$fractionNum}}{\\fracstr{$fractionDen}}}}{\\html{ to a decimal;}}',
						answer: '\\css{\\rowgrp'
									+'{\\ins{Click on the right-most digit of the number you would like to divide into.}}'
									+'{\\html{&nbsp;}}'
									+'{\\css{\\divwholes{\\str{$fractionDen}}{$$buttonString}}{divwhole}}}{well}',
						controls: {
							"checkAnswer": true,
							"help": true
						}
                    }, {
						problem: '\\grp{\\html{Change }}{\\mixed{\\fracstr{$whole}}{\\frac{\\fracstr{$fractionNum}}{\\fracstr{$fractionDen}}}}{\\html{ to a decimal;}}',
						answer: '\\css'
									+'{\\longdivdecimal{$extendedDividend}{$fractionDen}{$digitsRightInExponential}}{well}',
						controls: {
							"checkAnswer": true,
							"help": true
						}
                    }]
                }]
            },
			roundedMixed: {
                title: 'Change Fractions to Decimals',
                children: [{
                    title: 'Main Answer',
                    children: [{
						problem: '\\rowgrp'
									+'{\\grp{\\html{Change }}{\\mixed{\\fracstr{$whole}}{\\frac{\\fracstr{$fractionNum}}{\\fracstr{$fractionDen}}}}{\\html{ to a decimal;}}}'
									+'{\\html{\&nbsp;}}'
									+'{\\html{Round to the hundredths place if necessary.}}',
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
						problem: '\\rowgrp'
									+'{\\grp{\\html{Change }}{\\mixed{\\fracstr{$whole}}{\\frac{\\fracstr{$fractionNum}}{\\fracstr{$fractionDen}}}}{\\html{ to a decimal;}}}'
									+'{\\html{\&nbsp;}}'
									+'{\\html{Round to the hundredths place if necessary.}}',
						answer: '\\css{\\rowgrp'
											+'{\\ins{Write $whole <sup>$fractionNum</sup>&#8260;<sub>$fractionDen</sub> as an improper fraction:}}'
											+'{\\html{&nbsp;}}'
											+'{\\frac{\\input{$fractionNewNum}}{\\input{$fractionDen}}}'
									+'}{well}',
						controls: {
							"checkAnswer": true,
							"help": true
						}
                    }, {
						problem: '\\rowgrp'
									+'{\\grp{\\html{Change }}{\\mixed{\\fracstr{$whole}}{\\frac{\\fracstr{$fractionNum}}{\\fracstr{$fractionDen}}}}{\\html{ to a decimal;}}}'
									+'{\\html{\&nbsp;}}'
									+'{\\html{Round to the hundredths place if necessary.}}',
						answer: '\\css{\\rowgrp'
									+'{\\ins{Place the dividend and divisor in the proper places for the problem "$fractionNewNum divided by $fractionDen:"}}'
									+'{\\html{&nbsp;}}'
									+'{\\css{\\divwholes{\\input{$fractionDen}}{\\input{$fractionNewNum}}}{divwhole}}}{well}',
						controls: {
							"checkAnswer": true,
							"help": true
						}
                    }, {
						problem: '\\rowgrp'
									+'{\\grp{\\html{Change }}{\\mixed{\\fracstr{$whole}}{\\frac{\\fracstr{$fractionNum}}{\\fracstr{$fractionDen}}}}{\\html{ to a decimal;}}}'
									+'{\\html{\&nbsp;}}'
									+'{\\html{Round to the hundredths place if necessary.}}',
						answer: '\\css{\\rowgrp'
									+'{\\ins{Click on the right-most digit of the number you would like to divide into.}}'
									+'{\\html{&nbsp;}}'
									+'{\\css{\\divwholes{\\str{$fractionDen}}{$$buttonString}}{divwhole}}}{well}',
						controls: {
							"checkAnswer": true,
							"help": true
						}
                    }, {
						problem: '\\rowgrp'
									+'{\\grp{\\html{Change }}{\\mixed{\\fracstr{$whole}}{\\frac{\\fracstr{$fractionNum}}{\\fracstr{$fractionDen}}}}{\\html{ to a decimal;}}}'
									+'{\\html{\&nbsp;}}'
									+'{\\html{Round to the hundredths place if necessary.}}',
						answer: '\\css'
									+'{\\longdivdecimal{$extendedDividend}{$fractionDen}{$digitsRightInExponential}}{well}',
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
        data = [
			// note that digitsRightInExponential is the total number of digits in the answer less 1
		// problem 1
            { fractionNum: '3', fractionDen: '10', extendedDividend: '3.0', digitsRightInExponential: "0", buttonString: '\\grp{\\btn{3}{F}}{\\html{.}}{\\btn{0}{T}}',  firstQuestion: 'Find the quotient of 30 and 10', answer: '0.3', template: 'exact' },
			// problem 2
            { fractionNum: '4', fractionDen: '8', extendedDividend: '4.0', digitsRightInExponential: "0", buttonString: '\\grp{\\btn{4}{F}}{\\html{.}}{\\btn{0}{T}}',  firstQuestion: 'Find the quotient of 40 and 8', answer: '0.5', template: 'exact' },
			// problem 3
            { whole: '1', fractionNum: '6', fractionDen: '8', fractionNewNum: '14', extendedDividend: '14.00', digitsRightInExponential: "2", buttonString: '\\grp{\\btn{1}{F}}{\\btn{4}{T}}{\\html{.}}{\\btn{0}{F}}{\\btn{0}{F}}',  firstQuestion: 'Find the quotient of 14 and 8', answer: '1.75', template: 'exactMixed' },
			// problem 4
            { fractionNum: '14', fractionDen: '22', unrounded: '0.636', extendedDividend: '14.000', digitsRightInExponential: "2", buttonString: '\\grp{\\btn{1}{F}}{\\btn{4}{F}}{\\html{.}}{\\btn{0}{T}}{\\btn{0}{F}}{\\btn{0}{F}}',  firstQuestion: 'Find the quotient of 140 and 22', answer: '0.64', template: 'rounded' },
			// problem 5
            { fractionNum: '14', fractionDen: '24', unrounded: '0.583', extendedDividend: '14.000', digitsRightInExponential: "2", buttonString: '\\grp{\\btn{1}{F}}{\\btn{4}{F}}{\\html{.}}{\\btn{0}{T}}{\\btn{0}{F}}{\\btn{0}{F}}',  firstQuestion: 'Find the quotient of 140 and 24', answer: '0.58', template: 'rounded' },
			// problem 6
            { whole: '3', fractionNum: '2', fractionDen: '9', fractionNewNum: '29', unrounded: '3.222', extendedDividend: '29.000', digitsRightInExponential: "3", buttonString: '\\grp{\\btn{2}{F}}{\\btn{9}{T}}{\\html{.}}{\\btn{0}{F}}{\\btn{0}{F}}{\\btn{0}{F}}',  firstQuestion: 'Find the quotient of 29 and 9', answer: '3.22', template: 'roundedMixed' },
			// problem 7
            { fractionNum: '17', fractionDen: '34', unrounded: '0.5', extendedDividend: '17.0', digitsRightInExponential: "0", buttonString: '\\grp{\\btn{1}{F}}{\\btn{7}{F}}{\\html{.}}{\\btn{0}{T}}',  firstQuestion: 'Find the quotient of 170 and 34', answer: '0.5', template: 'exact' },
			// problem 8
            { whole: '2', fractionNum: '1', fractionDen: '5', fractionNewNum: '11', extendedDividend: '11.0', digitsRightInExponential: "1", buttonString: '\\grp{\\btn{1}{F}}{\\btn{1}{T}}{\\html{.}}{\\btn{0}{F}}',  firstQuestion: 'Find the quotient of 11 and 5', answer: '2.2', template: 'exactMixed' },
			// problem 9
			{ fractionNum: '28', fractionDen: '52', unrounded: '0.538', extendedDividend: '28.000', digitsRightInExponential: "2", buttonString: '\\grp{\\btn{2}{F}}{\\btn{8}{F}}{\\html{.}}{\\btn{0}{T}}{\\btn{0}{F}}{\\btn{0}{F}}',  firstQuestion: 'Find the quotient of 28 and 52', answer: '0.54', template: 'rounded' },
			// problem 10
            { whole: '4', fractionNum: '3', fractionDen: '7', fractionNewNum: '31', unrounded: '4.428', extendedDividend: '31.000', digitsRightInExponential: "3", buttonString: '\\grp{\\btn{3}{F}}{\\btn{1}{T}}{\\html{.}}{\\btn{0}{F}}{\\btn{0}{F}}{\\btn{0}{F}}',  firstQuestion: 'Find the quotient of 31 and 7', answer: '4.43', template: 'roundedMixed' }
       ];

    return dataUtils.build(desc, template, data);
}]);
