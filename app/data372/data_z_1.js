/*global angular */

angular.module('mathSkills').service('data_z_1', ['dataUtils', function (dataUtils) {
var desc = {
    title: 'Z.1 Division of Monomials',
    path: 'z.1-division-of-monomials',
    children: []
},
template = {

			// simple template, two number operation, coefficients reduce to whole
			simple: {
                title: 'Division of Monomials',
                children: [{
                    title: 'Main Answer',
                    children: [{
						problem: '\\rowgrp'
									+'{\\str{Simplify:}}'
									+'{\\str{&nbsp;}}'
									+'{$prob}',
						answer: '\\css' +
									'{\\rowgrp'+
										'{\\ins{Choose the right answer:}}'+
										'{\\grp{\\btn{A}{$buttonValueA}{marg}}{$buttonLabelA}}'+
										'{\\grp{\\btn{B}{$buttonValueB}{marg}}{$buttonLabelB}}'+
										'{\\grp{\\btn{C}{$buttonValueC}{marg}}{$buttonLabelC}}'+
										'{\\grp{\\btn{D}{$buttonValueD}{marg}}{$buttonLabelD}}'+
									'}'+
									'{tdButtonHeight}',
						controls: {
							"checkAnswer": true,
							"help": '\\rowgrp'
							+'{\\str{When dividing terms we:}}'
							+'{\\str{&nbsp;}}'
							+'{\\str{(1) reduce the coefficients: &nbsp;&nbsp;&nbsp;&nbsp; $firstSign$firstAbsNumber /$secondSign$secondAbsNumber = $thirdSign$firstHelp}}'
							+'{\\str{&nbsp;}}'
							+'{\\str{(2) simplify variables by following the rule for division of same bases (subtract exponents):}}'
							+'{\\str{&nbsp;}}'
							+'{css'
								+'{\\str{$secondHelp}}'
								+'{margin-left-small}'
							+'}'
							+'{\\str{&nbsp;}}'
							+'{css{\\str{Answer: &nbsp;$helpAnswer}}{help-answer-text}}'
						}
					}]
				}]
			}
			,
			// simple template, two number operation, coefficients reduce to whole
			fractionCoefficient: {
                title: 'Division of Monomials',
                children: [{
                    title: 'Main Answer',
                    children: [{
						problem: '\\rowgrp'
									+'{\\str{Simplify:}}'
									+'{\\str{&nbsp;}}'
									+'{$prob}',
						answer: '\\css' +
									'{\\rowgrp'+
										'{\\ins{Choose the right answer:}}'+
										'{\\grp{\\btn{A}{$buttonValueA}{marg}}{$buttonLabelA}}'+
										'{\\grp{\\btn{B}{$buttonValueB}{marg}}{$buttonLabelB}}'+
										'{\\grp{\\btn{C}{$buttonValueC}{marg}}{$buttonLabelC}}'+
										'{\\grp{\\btn{D}{$buttonValueD}{marg}}{$buttonLabelD}}'+
									'}'+
									'{$spaceButtons}',
						controls: {
							"checkAnswer": true,
							"help": '\\rowgrp'
							+'{\\str{When dividing terms we:}}'
							+'{\\str{&nbsp;}}'
							+'{\\grp'
								+'{\\str{(1) reduce the coefficients: &nbsp;&nbsp;&nbsp;&nbsp; $firstSign$firstAbsNumber / $secondSign$secondAbsNumber = $thirdSign}}'
								+'{\\css'
									+'$firstHelp'
									+'{fracNoMargin}'
								+'}'	
							+'}'
							+'{\\str{&nbsp;}}'
							+'{\\str{(2) simplify variables by following the rule for division of same bases (subtract exponents):}}'
							+'{\\str{&nbsp;}}'
							+'{css'
								+'{\\str{$secondHelp}}'
								+'{margin-left-small}'
							+'}'
							+'{\\str{&nbsp;}}'
							+'{css'
								+'{\\grp'
									+'{\\str{Answer: }}'
									+'$helpAnswer'
								+'}'
								+'{help-answer-text}'
							+'}'
						}
					}]
				}]
			}
        },
        data = [
			{ // problem 1
			firstSign: '', 
			secondSign: '', 
			thirdSign: '',
			firstAbsNumber: '4', 
			secondAbsNumber: '2', 
			firstText: 'm<sup>2</sup>', 
			secondText: '',
			secondExp: '',
			prob: dataUtils.pre('\\grp'
									+'{\\frac'
										+'{\\str{$$firstSign $$firstAbsNumber $$firstText}}'
										+'{\\str{$$secondSign $$secondAbsNumber $$secondText}}'
									+'}'
								),
			buttonValueA: 'F',
			buttonLabelA: dataUtils.pre('\\str{&nbsp; 2m<sup>4</sup>}'),
			buttonValueB: 'T',
			buttonLabelB: dataUtils.pre('\\str{&nbsp; 2m<sup>2</sup>}'),
			buttonValueC: 'F',
			buttonLabelC: dataUtils.pre('\\str{&nbsp; 2}'),
			buttonValueD: 'F',
			buttonLabelD: dataUtils.pre('\\frac'
										+'{\\str{2}}'
										+'{\\str{&nbsp; m<sup>2</sup> &nbsp;}}'
								),
			firstHelp: '2', 
			secondHelp: '$expoHelpQuoted is not divided by any other $helpQuoted variable.<br>$helpQuoted stays the same',
			helpQuoted: '\\"m\\"',
			expoHelpQuoted: '\\"m<sup>2</sup>\\"',
			helpAnswer: '2m<sup>2</sup>', 
			textAnswer: '2m', 
			expoAnswer: '2',
			answerBtn: 'noAnswer',
			template: 'simple'
			}
			,
			{ // problem 2
			firstSign: '-', 
			secondSign: '',
			thirdSign: '-',
			firstAbsNumber: '6', 
			secondAbsNumber: '3', 
			firstText: 'ab', 
			secondText: '',
			prob: dataUtils.pre('\\grp'
									+'{\\frac'
										+'{\\str{$$firstSign$$firstAbsNumber $$firstText}}'
										+'{\\str{$$secondSign$$secondAbsNumber $$secondText}}'
									+'}'
								),
			buttonValueA: 'T',
			buttonLabelA: dataUtils.pre('\\str{&nbsp; -2ab}'),
			buttonValueB: 'F',
			buttonLabelB: dataUtils.pre('\\str{&nbsp; -2}'),
			buttonValueC: 'F',
			buttonLabelC: dataUtils.pre('\\frac'
										+'{\\str{&nbsp; ab &nbsp;}}'
										+'{\\str{2}}'
								),
			buttonValueD: 'F',
			buttonLabelD: dataUtils.pre('\\frac'
										+'{\\str{&nbsp; -ab &nbsp;}}'
										+'{\\str{2}}'
								),
			firstHelp: '2', 
			secondHelp: '$firstHelpQuoted is not divided by any other $firstHelpQuoted variable.<br>$firstHelpQuoted stays the same<br><br>$secondHelpQuoted is not divided by any other $secondHelpQuoted variable.<br>$secondHelpQuoted stays the same',
			firstHelpQuoted: '\\"a\\"',
			secondHelpQuoted: '\\"b\\"',
			helpAnswer: '-2ab', 
			textAnswer: '-3ab', 
			answerBtn: 'noAnswer',
			template: 'simple'
			}
			,
			{ // problem 3
			firstSign: '-', 
			secondSign: '-',
			thirdSign: '',
			firstAbsNumber: '10', 
			secondAbsNumber: '2', 
			firstText: 'm<sup>2</sup>n', 
			secondText: '',
			prob: dataUtils.pre('\\grp'
									+'{\\frac'
										+'{\\str{$$firstSign $$firstAbsNumber $$firstText}}'
										+'{\\str{$$secondSign$$secondAbsNumber $$secondText}}'
									+'}'
								),
			buttonValueA: 'F',
			buttonLabelA: dataUtils.pre('\\str{&nbsp; -5m<sup>2</sup>n}'),
			buttonValueB: 'F',
			buttonLabelB: dataUtils.pre('\\frac'
										+'{\\str{&nbsp; m<sup>2</sup>n &nbsp;}}'
										+'{\\str{5}}'
								),
			buttonValueC: 'F',
			buttonLabelC: dataUtils.pre('\\str{&nbsp; 5}'),
			buttonValueD: 'T',
			buttonLabelD: dataUtils.pre('\\str{&nbsp; 5m<sup>2</sup>n &nbsp;}'),
			firstHelp: '5', 
			secondHelp: '$firstHelpQuoted is not divided by any other \\"m\\" variable.<br>$firstHelpQuoted stays the same<br><br>$secondHelpQuoted is not divided by any other $secondHelpQuoted variable.<br>$secondHelpQuoted stays the same',
			firstHelpQuoted: '\\"m<sup>2</sup>\\"',
			secondHelpQuoted: '\\"n\\"',
			helpAnswer: '5m<sup>2</sup>n', 
			textAnswer: '5m', 
			expoAnswer: '2',
			secondAnswer: 'n',
			answerBtn: 'noAnswer',
			template: 'simple'
			}
			,
			{ // problem 4
			firstSign: '', 
			secondSign: '-', 
			thirdSign: '-',
			firstAbsNumber: '12', 
			secondAbsNumber: '4', 
			firstText: 'ab<sup>5</sup>', 
			secondText: 'a',
			prob: dataUtils.pre('\\grp'
									+'{\\frac'
										+'{\\str{$$firstSign $$firstAbsNumber $$firstText}}'
										+'{\\str{$$secondSign$$secondAbsNumber $$secondText}}'
									+'}'
								),
			buttonValueA: 'T',
			buttonLabelA: dataUtils.pre('\\str{&nbsp; -3b<sup>5</sup>}'),
			buttonValueB: 'F',
			buttonLabelB: dataUtils.pre('\\frac'
										+'{\\str{&nbsp; -b<sup>5</sup> &nbsp;}}'
										+'{\\str{3}}'
								),
			buttonValueC: 'F',
			buttonLabelC: dataUtils.pre('\\str{&nbsp; -2}'),
			buttonValueD: 'F',
			buttonLabelD: dataUtils.pre('\\frac'
										+'{\\str{&nbsp; -ab &nbsp;}}'
										+'{\\str{2}}'
								),
			firstHelp: '3', 
			secondHelp: '$firstHelpQuoted divided by $firstHelpQuoted = a<sup>1-1</sup> or a<sup>0</sup> (which equals 1)<br>the $firstHelpQuoted variables cancel each other out<br><br>$secondHelpQuoted is not divided by any other $thirdHelpQuoted variable.<br>$secondHelpQuoted stays the same',
			firstHelpQuoted: '\\"a\\"',
			secondHelpQuoted: '\\"b<sup>5</sup>\\"',
			thirdHelpQuoted: '\\"b\\"',
			helpAnswer: '-3b<sup>5</sup>', 
			textAnswer: '-3b', 
			expoAnswer: '5',
			secondAnswer: '',
			answerBtn: 'noAnswer',
			template: 'simple'
			}
			,
			{ // problem 5
			firstSign: '-', 
			secondSign: '-', 
			thirdSign: '',
			firstAbsNumber: '5', 
			secondAbsNumber: '25', 
			firstText: 'x<sup>4</sup>y<sup>2</sup>', 
			secondText: 'y',
			prob: dataUtils.pre('\\grp'
									+'{\\frac'
										+'{\\str{$$firstSign $$firstAbsNumber $$firstText}}'
										+'{\\str{$$secondSign$$secondAbsNumber $$secondText}}'
									+'}'
								),
			buttonValueA: 'F',
			buttonLabelA: dataUtils.pre('\\frac'
										+'{\\str{&nbsp; x<sup>4</sup> &nbsp;}}'
										+'{\\str{5y}}'
								),
			buttonValueB: 'F',
			buttonLabelB: dataUtils.pre('\\frac'
										+'{\\str{&nbsp; 5y &nbsp;}}'
										+'{\\str{x<sup>4</sup>}}'
								),
			buttonValueC: 'T',
			buttonLabelC: dataUtils.pre('\\frac'
										+'{\\str{&nbsp; x<sup>4</sup>y &nbsp;}}'
										+'{\\str{5}}'
								),
			buttonValueD: 'F',
			buttonLabelD: dataUtils.pre('\\frac'
										+'{\\str{&nbsp; 5x<sup>4</sup> &nbsp;}}'
										+'{\\str{y}}'
								),
			firstHelp: dataUtils.pre('{\\frac'
											+'{\\str{1}}'
											+'{\\str{5}}'
									+'}'
						),
			secondHelp: '$firstHelpQuoted is not divided by any other $thirdHelpQuoted variable.<br>$firstHelpQuoted stays the same<br><br>$fourthHelpQuoted is in the numerator and \\"y\\" is in the denominator.  The larger degree is in the numerator, so the \\"y\\" base will end up in the numerator.'
						+'<br><br>'
						+'Subtract the smaller degree from the larger:&nbsp; y<sup> 2-1</sup> =  y<sup>1</sup>.'
						+'<br>'
						+'y<sup>1</sup> will be in the numerator.',
			firstHelpQuoted: '\\"x<sup>4</sup>\\"',
			secondHelpQuoted: '\\"y<sup>2</sup> / y\\"',
			thirdHelpQuoted: '\\"x\\"',
			fourthHelpQuoted: '\\"y<sup>2</sup>\\"',
			textAnswer: 'x', 
			expoAnswer: '4',
			secondAnswer: 'y',
			thirdAnswer: '5',
			helpAnswer:	dataUtils.pre('{\\frac'
										+'{\\str{x<sup>4</sup>y}}'
										+'{\\str{$$thirdAnswer}}'
									+'}'
						),
			spaceButtons: 'tdButtonHeight80px',
			answerBtn: 'noAnswer',
			template: 'fractionCoefficient'
			}
			,
			{ // problem 6
			firstSign: '', 
			secondSign: '-', 
			thirdSign: '-',
			firstAbsNumber: '18', 
			secondAbsNumber: '3', 
			firstText: 'x<sup>2</sup>y<sup>2</sup>', 
			secondText: 'x<sup>3</sup>y<sup>2</sup>',
			prob: dataUtils.pre('\\grp'
									+'{\\frac'
										+'{\\str{$$firstSign $$firstAbsNumber $$firstText}}'
										+'{\\str{$$secondSign$$secondAbsNumber $$secondText}}'
									+'}'
								),
			buttonValueA: 'F',
			buttonLabelA: dataUtils.pre('\\str{&nbsp; 54x<sup>5</sup>y<sup>4</sup>}'),
			buttonValueB: 'F',
			buttonLabelB: dataUtils.pre('\\str{-6x}'),
			buttonValueC: 'T',
			buttonLabelC: dataUtils.pre('\\frac'
										+'{\\str{-6&nbsp;&nbsp;}}'
										+'{\\str{&nbsp;x}}'
								),
			buttonValueD: 'F',
			buttonLabelD: dataUtils.pre('\\frac'
										+'{\\str{-6y&nbsp;&nbsp;}}'
										+'{\\str{&nbsp;x<sup>5</sup>}}'
								),
			firstHelp: dataUtils.pre('{\\str{6}}'),
			secondHelp: '$firstHelpQuoted is in the numerator and $secondHelpQuoted is in the denominator.  The larger degree is in the denominator, so the $thirdHelpQuoted base will end up in the denominator.'
						+'<br><br>'
						+'Subtract the smaller degree from the larger:&nbsp; x<sup> 3-2</sup> =  x<sup>1</sup>.'
						+'<br>'
						+'x<sup>1</sup> will be in the denominator.'
						+'<br><br>'
						+'<br>$fifthHelpQuoted = y<sup> 2-2</sup> or y<sup>0</sup> (which equals 1).  The $sixthHelpQuoted variables cancel out each other.',
			firstHelpQuoted: '\\"x<sup>2</sup>\\"',
			secondHelpQuoted: '\\"x<sup>3</sup>\\"',
			thirdHelpQuoted: '\\"x\\"',
			fourthHelpQuoted: '\\"x<sup>3</sup> / x<sup>2</sup>\\"',
			fifthHelpQuoted: '\\"y<sup>2</sup> / y<sup>2</sup>\\"',
			sixthHelpQuoted: '\\"y<sup>2</sup>\\"',
			helpAnswer:	dataUtils.pre('{\\frac'
										+'{\\str{-$$thirdAnswer}}'
										+'{\\str{$$secondAnswer}}'
									+'}'
						),
			textAnswer: '-6', 
			expoAnswer: '',
			secondAnswer: 'x',
			thirdAnswer: '6',
			spaceButtons: 'tdButtonHeight',
			answerBtn: 'noAnswer',
			template: 'fractionCoefficient'
			}
			,
			{ // problem 7
			firstSign: '', 
			secondSign: '', 
			thirdSign: '',
			firstAbsNumber: '4', 
			secondAbsNumber: '7', 
			firstText: 'a<sup>3</sup>b', 
			secondText: 'ab<sup>2</sup>',
			prob: dataUtils.pre('\\grp'
									+'{\\frac'
										+'{\\str{$$firstSign $$firstAbsNumber $$firstText}}'
										+'{\\str{$$secondSign$$secondAbsNumber $$secondText}}'
									+'}'
								),
			buttonValueA: 'F',
			buttonLabelA: dataUtils.pre('\\frac'
										+'{\\str{&nbsp; 4a<sup>3</sup>b<sup>2</sup> &nbsp;}}'
										+'{\\str{7}}'
								),
			buttonValueB: 'F',
			buttonLabelB: dataUtils.pre('\\frac'
										+'{\\str{&nbsp; 7a<sup>4</sup> &nbsp;}}'
										+'{\\str{4b<sup>3</sup>}}'
								),
			buttonValueC: 'F',
			buttonLabelC: dataUtils.pre('\\frac'
										+'{\\str{&nbsp; 11a<sup>2</sup> &nbsp;}}'
										+'{\\str{b}}'
								),
			buttonValueD: 'T',
			buttonLabelD: dataUtils.pre('\\frac'
										+'{\\str{&nbsp; 4a<sup>2</sup> &nbsp;}}'
										+'{\\str{7b}}'
								),
			firstHelp: dataUtils.pre('{\\frac'
											+'{\\str{4}}'
											+'{\\str{7}}'
									+'}'
						),
			secondHelp: '$firstHelpQuoted is in the numerator and $secondHelpQuoted is in the denominator.  The larger degree is in the numerator, so the $secondHelpQuoted base will end up in the numerator.'
						+'<br><br>'
						+'Subtract the smaller degree from the larger:&nbsp; a<sup> 3-1</sup> = a<sup>2</sup>.'
						+'<br>'
						+'a<sup>2</sup> will be in the numerator.'
						+'<br><br>'
						+'$fourthHelpQuoted is in the numerator and $fifthHelpQuoted is in the denominator.  The larger degree is in the denominator so the $fourthHelpQuoted base will end up in the denominator.'
						+'<br><br>'
						+'Subtract the smaller degree from the larger:&nbsp; b<sup> 2-1</sup> = b<sup>1</sup>'
						+'<br>'
						+'b<sup>1</sup> will be in the denominator.',
			firstHelpQuoted: '\\"a<sup>3</sup>\\"',
			secondHelpQuoted: '\\"a\\"',
			thirdHelpQuoted: '\\"a<sup>3</sup> / a\\"',
			fourthHelpQuoted: '\\"b\\"',
			fifthHelpQuoted: '\\"b<sup>2</sup>\\"',
			sixthHelpQuoted: '\\"b<sup>2</sup> / b\\"',
			helpAnswer:	dataUtils.pre('{\\frac'
										+'{\\str{$$thirdAnswer}}'
										+'{\\str{$$secondAnswer}}'
									+'}'
						),
			textAnswer: '4a', 
			expoAnswer: '2',
			secondAnswer: '7b',
			thirdAnswer: '4a<sup>2</sup>',
			spaceButtons: 'tdButtonHeight80px',
			answerBtn: 'noAnswer',
			template: 'fractionCoefficient'
			}
			,
			{ // problem 8
			firstSign: '', 
			secondSign: '-', 
			thirdSign: '-',
			firstAbsNumber: '11', 
			secondAbsNumber: '33', 
			firstText: 'm<sup>2</sup>n<sup>2</sup>', 
			secondText: 'm<sup>2</sup>',
			prob: dataUtils.pre('\\grp'
									+'{\\frac'
										+'{\\str{$$firstSign $$firstAbsNumber $$firstText}}'
										+'{\\str{$$secondSign$$secondAbsNumber $$secondText}}'
									+'}'
								),
			buttonValueA: 'F',
			buttonLabelA: dataUtils.pre('\\str{&nbsp; -3n<sup>2</sup>}'),
			buttonValueB: 'T',
			buttonLabelB: dataUtils.pre('\\frac'
										+'{\\str{&nbsp; -n<sup>2</sup> &nbsp;}}'
										+'{\\str{3}}'
								),
			buttonValueC: 'F',
			buttonLabelC: dataUtils.pre('\\frac'
										+'{\\str{&nbsp; -1 &nbsp;}}'
										+'{\\str{3}}'
								),
			buttonValueD: 'F',
			buttonLabelD: dataUtils.pre('\\str{&nbsp; -3m<sup>4</sup>n<sup>2</sup>}'),
			firstHelp: dataUtils.pre('{\\frac'
											+'{\\str{1}}'
											+'{\\str{3}}'
									+'}'
						),
			secondHelp: '$firstHelpQuoted = m<sup> 2-2</sup> or m<sup>0</sup> (which equals 1).<br>The $secondHelpQuoted variables cancel out each other.<br><br>$thirdHelpQuoted is not divided by any other $fourthHelpQuoted variable.<br>$thirdHelpQuoted stays the same.',
			firstHelpQuoted: '\\"m<sup>2</sup> / m<sup>2</sup>\\"',
			secondHelpQuoted: '\\"m\\"',
			thirdHelpQuoted: '\\"n<sup>2</sup>\\"',
			fourthHelpQuoted: '\\"n\\"',
			helpAnswer:	dataUtils.pre('{\\frac'
										+'{\\str{$$thirdAnswer}}'
										+'{\\str{$$secondAnswer}}'
									+'}'
						),
			textAnswer: '[-n,-1n]', 
			expoAnswer: '2',
			secondAnswer: '3',
			thirdAnswer: '-n<sup>2</sup>',
			spaceButtons: 'tdButtonHeight',
			answerBtn: 'noAnswer',
			template: 'fractionCoefficient'
			}
			,
			{ // problem 9
			firstSign: '-', 
			secondSign: '-', 
			thirdSign: '',
			firstAbsNumber: '15', 
			secondAbsNumber: '6', 
			firstText: 'xyz', 
			secondText: 'xy<sup>2</sup>',
			prob: dataUtils.pre('\\grp'
									+'{\\frac'
										+'{\\str{$$firstSign $$firstAbsNumber $$firstText}}'
										+'{\\str{$$secondSign$$secondAbsNumber $$secondText}}'
									+'}'
								),
			buttonValueA: 'F',
			buttonLabelA: dataUtils.pre('\\frac'
										+'{\\str{&nbsp; x<sup>4</sup> &nbsp;}}'
										+'{\\str{5y}}'
								),
			buttonValueB: 'F',
			buttonLabelB: dataUtils.pre('\\frac'
										+'{\\str{&nbsp; -5z &nbsp;}}'
										+'{\\str{2y}}'
								),
			buttonValueC: 'F',
			buttonLabelC: dataUtils.pre('\\frac'
										+'{\\str{&nbsp; 5y &nbsp;}}'
										+'{\\str{2}}'
								),
			buttonValueD: 'T',
			buttonLabelD: dataUtils.pre('\\frac'
										+'{\\str{&nbsp; 5z &nbsp;}}'
										+'{\\str{2y}}'
								),
			firstHelp: dataUtils.pre('{\\frac'
											+'{\\str{5}}'
											+'{\\str{2}}'
									+'}'
						),
			secondHelp: '$firstHelpQuoted = x<sup> 1 - 1</sup> or x<sup>0</sup> (which equals 1).<br>The $secondHelpQuoted variables cancel out each other.<br><br>$thirdHelpQuoted is in the numerator and $fourthHelpQuoted is in the denominator.  The larger degree is in the denominator so the $thirdHelpQuoted base will end up in the denominator.'
						+'<br><br>'
						+'Subtract the smaller degree from the larger:&nbsp; y<sup> 2 - 1</sup> = y<sup>1</sup>.'
						+'<br>'
						+'y<sup>1</sup> will be in the denominator.'
						+'<br><br>'
						+'$sixthHelpQuoted is not divided by any other $sixthHelpQuoted variable.'
						+'<br>'
						+'$sixthHelpQuoted stays the same.',
			firstHelpQuoted: '\\"x / x\\"',
			secondHelpQuoted: '\\"x\\"',
			thirdHelpQuoted: '\\"y\\"',
			fourthHelpQuoted: '\\"y<sup>2</sup>\\"',
			fifthHelpQuoted: '\\"y<sup>2</sup> / y\\"',
			sixthHelpQuoted: '\\"z\\"',
			helpAnswer:	dataUtils.pre('{\\frac'
										+'{\\str{$$thirdAnswer}}'
										+'{\\str{$$secondAnswer}}'
									+'}'
						),
			textAnswer: '5z', 
			expoAnswer: '',
			secondAnswer: '2y',
			thirdAnswer: '5z',
			spaceButtons: 'tdButtonHeight80px',
			answerBtn: 'noAnswer',
			template: 'fractionCoefficient'
			}
			,
			{ // problem 10
			firstSign: '-', 
			secondSign: '', 
			thirdSign: '-',
			firstAbsNumber: '22', 
			secondAbsNumber: '4', 
			firstText: 'a<sup>2</sup>bc', 
			secondText: 'a<sup>2</sup>bc',
			prob: dataUtils.pre('\\grp'
									+'{\\frac'
										+'{\\str{$$firstSign $$firstAbsNumber $$firstText}}'
										+'{\\str{$$secondSign$$secondAbsNumber $$secondText}}'
									+'}'
								),
			buttonValueA: 'T',
			buttonLabelA: dataUtils.pre('\\frac'
										+'{\\str{&nbsp; -11 &nbsp;}}'
										+'{\\str{2}}'
								),
			buttonValueB: 'F',
			buttonLabelB: dataUtils.pre('\\frac'
										+'{\\str{&nbsp; -11bc &nbsp;}}'
										+'{\\str{2}}'
								),
			buttonValueC: 'F',
			buttonLabelC: dataUtils.pre('\\frac'
										+'{\\str{&nbsp; -11a<sup>2</sup> &nbsp;}}'
										+'{\\str{bc}}'
								),
			buttonValueD: 'F',
			buttonLabelD: dataUtils.pre('\\str{&nbsp; 88a<sup>2</sup>bc}'),
			firstHelp: dataUtils.pre('{\\frac'
											+'{\\str{11}}'
											+'{\\str{2}}'
									+'}'
						),
			secondHelp: '$firstHelpQuoted = a<sup> 2-2</sup> or a<sup>0</sup> (which equals 1).<br>The $secondHelpQuoted variables cancel out each other.<br><br>$thirdHelpQuoted = b<sup> 1-1</sup> or b<sup>0</sup> (which equals 1).<br>The $fourthHelpQuoted variables cancel out each other.<br><br>$fifthHelpQuoted = c<sup> 1-1</sup> or c<sup>0</sup> (which equals 1).<br>The $sixthHelpQuoted variables cancel out each other.',
			firstHelpQuoted: '\\"a<sup>2</sup> / a<sup>2</sup>\\"',
			secondHelpQuoted: '\\"a\\"',
			thirdHelpQuoted: '\\"b / b\\"',
			fourthHelpQuoted: '\\"b\\"',
			fifthHelpQuoted: '\\"c / c\\"',
			sixthHelpQuoted: '\\"c\\"',
			helpAnswer:	dataUtils.pre('{\\frac'
										+'{\\str{$$thirdAnswer}}'
										+'{\\str{$$secondAnswer}}'
									+'}'
						),
			textAnswer: '-11', 
			expoAnswer: '',
			secondAnswer: '2',
			thirdAnswer: '-11',
			spaceButtons: 'tdButtonHeight80px',
			answerBtn: 'noAnswer',
			template: 'fractionCoefficient'
			}
			
        ];

	return dataUtils.build(desc, template, data);
}]);

