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
						problem: '$prob',
						answer: '$ans',
						controls: {
							"checkAnswer": true,
							"help": '\\rowgrp'
							+'{\\str{When dividing terms we:}}'
							+'{\\html{&nbsp;}}'
							+'{\\html{(1) reduce the coefficients: &nbsp;&nbsp;&nbsp;&nbsp; <span class=bigger>$firstSign</span>$firstAbsNumber <span class=bigger>\xf7</span> <span class=bigger>$secondSign</span>$secondAbsNumber <span class=bigger>=</span> <span class=bigger>$thirdSign</span>$firstHelp}}'
							+'{\\html{&nbsp;}}'
							+'{\\str{(2) simplify variables by following the rule for division of same bases (subtract exponents):}}'
							+'{\\html{&nbsp;}}'
							+'{css'
								+'{\\html{$secondHelp}}'
								+'{margin-left-small}'
							+'}'
							+'{\\html{&nbsp;}}'
							+'{css{\\html{Answer:  $helpAnswer}}{help-answer-text}}'
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
						problem: '$prob',
						answer: '$ans',
						controls: {
							"checkAnswer": true,
							"help": '\\rowgrp'
							+'{\\str{When dividing terms we:}}'
							+'{\\html{&nbsp;}}'
							+'{\\grp'
								+'{\\html{(1) reduce the coefficients: &nbsp;&nbsp;&nbsp;&nbsp; <span class=bigger>$firstSign</span>$firstAbsNumber <span class=bigger>\xf7</span> <span class=bigger>$secondSign</span>$secondAbsNumber <span class=bigger>=</span> <span class=bigger-not-margin>$thirdSign</span>}}'
								+'{\\css'
									+'$firstHelp'
									+'{fracNoMargin}'
								+'}'	
							+'}'
							+'{\\html{&nbsp;}}'
							+'{\\str{(2) simplify variables by following the rule for division of same bases (subtract exponents):}}'
							+'{\\html{&nbsp;}}'
							+'{css'
								+'{\\html{$secondHelp}}'
								+'{margin-left-small}'
							+'}'
							+'{\\html{&nbsp;}}'
							+'{css'
								+'{\\grp'
									+'{\\html{Answer: }}'
									+'$helpAnswer'
								+'}'
								+'{help-answer-text}'
							+'}'
						}
					}]
				}]
			}/*,
			exampleToBeRemoved: {
                title: 'Buttons with horizontal fractions in labels',
                children: [{
                    title: 'Main Answer',
                    children: [{
						problem: '\\html{<h4>example of horizontal fractions in button labels</h4>}',
						answer: '\\btngrp'+
									'{\\rowgrp'+
										'{\\grp{\\btn{A}{$buttonValueA}{marg}}{$buttonLabelA}}'+
										'{\\grp{\\btn{B}{$buttonValueB}{marg}}{$buttonLabelB}}'+
										'{\\grp{\\btn{C}{$buttonValueC}{marg}}{$buttonLabelC}}'+
										'{\\grp{\\btn{D}{$buttonValueD}{marg}}{$buttonLabelD}}'+
									'}',
						controls: {
							"checkAnswer": true,
							"help": true
						}
					}]
				}]
			}*/
        },
        data = [
			{ // problem 1
			firstSign: '', 
			secondSign: '', 
			thirdSign: '',
			firstAbsNumber: '4', 
			secondAbsNumber: '2', 
			firstText: 'm&sup2;', 
			secondText: '',
			secondExp: '',
			prob: dataUtils.pre('\\grp'
									+'{\\frac'
										+'{\\html{<span class = bigger>$$firstSign</span> $$firstAbsNumber $$firstText}}'
										+'{\\html{<span class = bigger>$$secondSign</span>$$secondAbsNumber $$secondText}}'
									+'}'
								),
			ans: dataUtils.pre('\\grp'
									+'{exp{\\input{$$textAnswer}}{\\input{$$expoAnswer}}}'				   
								),
			firstHelp: '4', 
			secondHelp: '$expoHelpQuoted is not divided by any other $helpQuoted variable.<br>$helpQuoted stays the same',
			helpQuoted: '\\"m\\"',
			expoHelpQuoted: '\\"m&sup2;\\"',
			helpAnswer: '2m&sup2;', 
			textAnswer: '2m', 
			expoAnswer: '2',
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
										+'{\\fracstr{3m}}{\\fracstr{4}'
									+'}'
								),
			ans: dataUtils.pre('\\grp'
									+'{\\input{$$textAnswer}}'				   
								),
			firstHelp: '2', 
			secondHelp: '$firstHelpQuoted is not divided by any other $firstHelpQuoted variable.<br>$firstHelpQuoted stays the same<br><br>$secondHelpQuoted is not divided by any other $secondHelpQuoted variable.<br>$secondHelpQuoted stays the same',
			firstHelpQuoted: '\\"a\\"',
			secondHelpQuoted: '\\"b\\"',
			helpAnswer: '-2ab', 
			textAnswer: '-3ab', 
			template: 'simple'
			}
			,
			{ // problem 3
			firstSign: '-', 
			secondSign: '-',
			thirdSign: '',
			firstAbsNumber: '10', 
			secondAbsNumber: '2', 
			firstText: 'm&sup2n', 
			secondText: '',
			prob: dataUtils.pre('\\grp'
									+'{\\frac'
										+'{\\html{<span class = bigger>$$firstSign</span> $$firstAbsNumber $$firstText}}'
										+'{\\html{<span class = bigger>$$secondSign</span>$$secondAbsNumber $$secondText}}'
									+'}'
								),
			ans: dataUtils.pre('\\grp'
							   		+'{exp{\\input{$$textAnswer}}{\\input{$$expoAnswer}}}'				
									+'{\\input{$$secondAnswer}}'				   
								),
			firstHelp: '5', 
			secondHelp: '$firstHelpQuoted is not divided by any other $firstHelpQuoted variable.<br>$firstHelpQuoted stays the same<br><br>$secondHelpQuoted is not divided by any other $secondHelpQuoted variable.<br>$secondHelpQuoted stays the same',
			firstHelpQuoted: '\\"m\\"',
			secondHelpQuoted: '\\"n\\"',
			helpAnswer: '5m&sup2;n', 
			textAnswer: '5m', 
			expoAnswer: '2',
			secondAnswer: 'n',
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
										+'{\\html{<span class = bigger>$$firstSign</span> $$firstAbsNumber $$firstText}}'
										+'{\\html{<span class = bigger>$$secondSign</span>$$secondAbsNumber $$secondText}}'
									+'}'
								),
			ans: dataUtils.pre('\\grp'
							   		+'{exp{\\input{$$textAnswer}}{\\input{$$expoAnswer}}}'						   
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
										+'{\\html{<span class = bigger>$$firstSign</span> $$firstAbsNumber $$firstText}}'
										+'{\\html{<span class = bigger>$$secondSign</span>$$secondAbsNumber $$secondText}}'
									+'}'
								),
			ans: dataUtils.pre('\\frac'
							   		+'{\\grp'
										+'{exp{\\input{[$$textAnswer,1$$textAnswer]}}{\\input{$$expoAnswer}}}'
										+'{\\input{$$secondAnswer}}'
									+'}'
									+'{\\input{$$thirdAnswer}}'
								),
			firstHelp: dataUtils.pre('{\\frac'
											+'{\\html{1}}'
											+'{\\html{5}}'
									+'}'
						),
			secondHelp: '$firstHelpQuoted is not divided by any other $thirdHelpQuoted variable.<br>$firstHelpQuoted stays the same<br><br>$fourthHelpQuoted is in the numerator and $fourthHelpQuoted is in the denominator.  The larger degree is in the numerator, so the $fourthHelpQuoted base will end up in the numerator.<br>$secondHelpQuoted <span class=bigger>=</span> y<sup> 2<span class=bigger>-</span>1</sup> or y<sup>1</sup>.',
			firstHelpQuoted: '\\"x<sup>4</sup>\\"',
			secondHelpQuoted: '\\"y<sup>2</sup>\\" <span class=bigger>\xF7</span> \\"y\\"',
			thirdHelpQuoted: '\\"x\\"',
			fourthHelpQuoted: '\\"y\\"',
			textAnswer: 'x', 
			expoAnswer: '4',
			secondAnswer: 'y',
			thirdAnswer: '5',
			helpAnswer:	dataUtils.pre('{\\frac'
										+'{\\html{x<sup>4</sup>y}}'
										+'{\\html{$$thirdAnswer}}'
									+'}'
						),
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
										+'{\\html{<span class = bigger>$$firstSign</span> $$firstAbsNumber $$firstText}}'
										+'{\\html{<span class = bigger>$$secondSign</span>$$secondAbsNumber $$secondText}}'
									+'}'
								),
			ans: dataUtils.pre('\\frac'
									+'{\\input{$$textAnswer}}'
									+'{\\input{$$secondAnswer}}'
								),
			firstHelp: dataUtils.pre('{\\html{6}}'),
			secondHelp: '$firstHelpQuoted is in the numerator and $secondHelpQuoted is in the denominator.  The larger degree is in the denominator, so the $thirdHelpQuoted base will end up in the denominator.<br>$fourthHelpQuoted <span class=bigger>=</span> x<sup> 3<span class=bigger>-</span>2</sup> or x<sup>1</sup>.<br><br>$fifthHelpQuoted <span class=bigger>=</span> y<sup> 2<span class=bigger>-</span>2</sup> or y<sup>0</sup> (which equals 1).  The $sixthHelpQuoted variables cancel out each other.',
			firstHelpQuoted: '\\"x<sup>2</sup>\\"',
			secondHelpQuoted: '\\"x<sup>3</sup>\\"',
			thirdHelpQuoted: '\\"x\\"',
			fourthHelpQuoted: '\\"x<sup>3</sup>\\" <span class=bigger>\xF7</span> \\"x<sup>2</sup>\\"',
			fifthHelpQuoted: '\\"y<sup>2</sup>\\" <span class=bigger>\xF7</span> \\"y<sup>2</sup>\\"',
			sixthHelpQuoted: '\\"y<sup>2</sup>\\"',
			helpAnswer:	dataUtils.pre('{\\frac'
										+'{\\html{<span class=bigger>-</span>$$thirdAnswer}}'
										+'{\\html{$$secondAnswer}}'
									+'}'
						),
			textAnswer: '-6', 
			expoAnswer: '',
			secondAnswer: 'x',
			thirdAnswer: '6',
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
			secondText: 'a<sup>2</sup>b',
			prob: dataUtils.pre('\\grp'
									+'{\\frac'
										+'{\\html{<span class = bigger>$$firstSign</span> $$firstAbsNumber $$firstText}}'
										+'{\\html{<span class = bigger>$$secondSign</span>$$secondAbsNumber $$secondText}}'
									+'}'
								),
			ans: dataUtils.pre('\\frac'
									+'{\\exp{\\input{$$textAnswer}}{\\input{$$expoAnswer}}}'
									+'{\\input{$$secondAnswer}}'
								),
			firstHelp: dataUtils.pre('{\\frac'
											+'{\\html{4}}'
											+'{\\html{7}}'
									+'}'
						),
			secondHelp: '$firstHelpQuoted is in the numerator and $secondHelpQuoted is in the denominator.  The larger degree is in the numerator, so the $secondHelpQuoted base will end up in the numerator.<br>$thirdHelpQuoted <span class=bigger>=</span> a<sup> 3<span class=bigger>-</span>1</sup> or a<sup>2</sup>.<br><br>$fourthHelpQuoted is in the numerator and $fifthHelpQuoted is in the denominator.  The larger degree is in the denominator so the $fourthHelpQuoted base will end up in the denominator.  $sixthHelpQuoted<span class=bigger>=</span> b<sup> 2<span class=bigger>-</span>1</sup> or b<sup>1.',
			firstHelpQuoted: '\\"a<sup>3</sup>\\"',
			secondHelpQuoted: '\\"a\\"',
			thirdHelpQuoted: '\\"a<sup>3</sup> <span class=bigger>\xF7</span> a\\"',
			fourthHelpQuoted: '\\"b\\"',
			fifthHelpQuoted: '\\"b<sup>2</sup>\\"',
			sixthHelpQuoted: '\\"b<sup>2</sup> <span class=bigger>\xF7</span> b\\"',
			helpAnswer:	dataUtils.pre('{\\frac'
										+'{\\html{$$thirdAnswer}}'
										+'{\\html{$$secondAnswer}}'
									+'}'
						),
			textAnswer: '4a', 
			expoAnswer: '2',
			secondAnswer: '7b',
			thirdAnswer: '4a<sup>2</sup>',
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
										+'{\\html{<span class = bigger>$$firstSign</span> $$firstAbsNumber $$firstText}}'
										+'{\\html{<span class = bigger>$$secondSign</span>$$secondAbsNumber $$secondText}}'
									+'}'
								),
			ans: dataUtils.pre('\\frac'
									+'{\\exp{\\input{$$textAnswer}}{\\input{2}}}'
									+'{\\input{$$secondAnswer}}'
								),
			firstHelp: dataUtils.pre('{\\frac'
											+'{\\html{1}}'
											+'{\\html{3}}'
									+'}'
						),
			secondHelp: '$firstHelpQuoted <span class=bigger>=</span> m<sup> 2<span class=bigger>-</span>2</sup> or m<sup>0</sup> (which equals 1). The $secondHelpQuoted variables cancel out each other.<br><br>$thirdHelpQuoted is not divided by any other $fourthHelpQuoted variable.<br>$thirdHelpQuoted stays the same.',
			firstHelpQuoted: '\\"m<sup>2</sup> <span class=bigger>\xF7</span> m<sup>2</sup>\\"',
			secondHelpQuoted: '\\"m\\"',
			thirdHelpQuoted: '\\"n<sup>2</sup>\\"',
			fourthHelpQuoted: '\\"n\\"',
			helpAnswer:	dataUtils.pre('{\\frac'
										+'{\\html{$$thirdAnswer}}'
										+'{\\html{$$secondAnswer}}'
									+'}'
						),
			textAnswer: '[-n,-1n]', 
			expoAnswer: '2',
			secondAnswer: '3',
			thirdAnswer: '<span class=bigger>-</span>n<sup>2</sup>',
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
										+'{\\html{<span class = bigger>$$firstSign</span> $$firstAbsNumber $$firstText}}'
										+'{\\html{<span class = bigger>$$secondSign</span>$$secondAbsNumber $$secondText}}'
									+'}'
								),
			ans: dataUtils.pre('\\frac'
									+'{\\input{$$textAnswer}}'
									+'{\\input{$$secondAnswer}}'
								),
			firstHelp: dataUtils.pre('{\\frac'
											+'{\\html{5}}'
											+'{\\html{2}}'
									+'}'
						),
			secondHelp: '$firstHelpQuoted <span class=bigger>=</span> x<sup> 1 - 1</sup> or x<sup>0</sup> (which equals 1). The $secondHelpQuoted variables cancel out each other.<br><br>$thirdHelpQuoted is in the numerator and $fourthHelpQuoted is in the denominator.  The larger degree is in the denominator so the $thirdHelpQuoted base will end up in the denominator.<br>$fifthHelpQuoted <span class=bigger>=</span> y<sup> 2 - 1</sup> or y<sup>1</sup>.<br><br>$sixthHelpQuoted is not divided by any other $sixthHelpQuoted variable.  $sixthHelpQuoted stays the same.',
			firstHelpQuoted: '\\"x <span class=bigger>\xF7</span> x\\"',
			secondHelpQuoted: '\\"x\\"',
			thirdHelpQuoted: '\\"y\\"',
			fourthHelpQuoted: '\\"y<sup>2</sup>\\"',
			fifthHelpQuoted: '\\"y<sup>2</sup> <span class=bigger>\xF7</span> y\\"',
			sixthHelpQuoted: '\\"z\\"',
			helpAnswer:	dataUtils.pre('{\\frac'
										+'{\\html{$$thirdAnswer}}'
										+'{\\html{$$secondAnswer}}'
									+'}'
						),
			textAnswer: '5z', 
			expoAnswer: '',
			secondAnswer: '2y',
			thirdAnswer: '5z',
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
										+'{\\html{<span class = bigger>$$firstSign</span> $$firstAbsNumber $$firstText}}'
										+'{\\html{<span class = bigger>$$secondSign</span>$$secondAbsNumber $$secondText}}'
									+'}'
								),
			ans: dataUtils.pre('\\frac'
									+'{\\input{$$textAnswer}}'
									+'{\\input{$$secondAnswer}}'
								),
			firstHelp: dataUtils.pre('{\\frac'
											+'{\\html{11}}'
											+'{\\html{2}}'
									+'}'
						),
			secondHelp: '$firstHelpQuoted <span class=bigger>=</span> a<sup> 2<span class=bigger>-</span>2</sup> or a<sup>0</sup> (which equals 1).<br>The $secondHelpQuoted variables cancel out each other.<br><br>$thirdHelpQuoted <span class=bigger>=</span> b<sup> 1<span class=bigger>-</span>1</sup> or b<sup>0</sup> (which equals 1).<br>The $fourthHelpQuoted variables cancel out each other.<br><br>$fifthHelpQuoted <span class=bigger>=</span> c<sup> 1<span class=bigger>-</span>1</sup> or c<sup>0</sup> (which equals 1).<br>The $sixthHelpQuoted variables cancel out each other.',
			firstHelpQuoted: '\\"a<sup>2</sup> <span class=bigger>\xF7</span> a<sup>2</sup>\\"',
			secondHelpQuoted: '\\"a\\"',
			thirdHelpQuoted: '\\"b <span class=bigger>\xF7</span> b\\"',
			fourthHelpQuoted: '\\"b\\"',
			fifthHelpQuoted: '\\"c <span class=bigger>\xF7</span> c\\"',
			sixthHelpQuoted: '\\"c\\"',
			helpAnswer:	dataUtils.pre('{\\frac'
										+'{\\html{$$thirdAnswer}}'
										+'{\\html{$$secondAnswer}}'
									+'}'
						),
			textAnswer: '-11', 
			expoAnswer: '',
			secondAnswer: '2',
			thirdAnswer: '<span class=bigger>-</span>11',
			template: 'fractionCoefficient'
			}
			/*,
			{ //problem 5- example only, to be removed
				buttonValueA: 'F',
				buttonLabelA: dataUtils.pre('\\frac{\\fracstr{4}}{\\fracstr{5}}'),
				buttonValueB: 'F',
				buttonLabelB: dataUtils.pre('mixed{\\fracstr{1}}{\\frac{\\fracstr{4}}{\\fracstr{5}}}'),
				buttonValueC: 'T',
				buttonLabelC: dataUtils.pre('\\grp'
												+'{\\frac{\\fracstr{4}}{\\fracstr{5}}}'
												+'{\\sign{+}}'
												+'{\\frac{\\fracstr{3}}{\\fracstr{5}}}'),
				buttonValueD: 'F',
				buttonLabelD: dataUtils.pre('\\frac{\\fracstr{1}}{\\fracstr{2}}'),
				template: 'exampleToBeRemoved'
			}*/
			
        ];

	return dataUtils.build(desc, template, data);
}]);

