/*global angular */

angular.module('mathSkills').service('data_z_1', ['dataUtils', function (dataUtils) {
var desc = {
    title: 'Z.1 Division of Monomials',
    path: 'z.1-division-of-monomials',
    children: []
},
template = {

			// third template, two number operation, no parenthetical expression
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
										+'{\\html{<span class = bigger>$$firstSign</span> $$firstAbsNumber $$firstText}}'
										+'{\\html{<span class = bigger>$$secondSign</span>$$secondAbsNumber $$secondText}}'
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
			
        ];

	return dataUtils.build(desc, template, data);
}]);

