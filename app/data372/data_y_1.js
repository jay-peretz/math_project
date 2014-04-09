/*global angular */

angular.module('mathSkills').service('data_y_1', ['dataUtils', function (dataUtils) {
var desc = {
    title: 'Y.1 Multiplication of Monomials',
    path: 'Y.1-multiplication-of-monomials',
    children: []
},
template = {

			// third template, two number operation, no parenthetical expression
			third: {
                title: 'Evaluate Signed Expressions',
                children: [{
                    title: 'Main Answer',
                    children: [{
						problem: '\\rowgrp'
						+'{\\html{Evaluate:}}'
						+'{\\html{&nbsp;}}'
						+'{\\grp{\\sign{$firstSign}}{html{$firstAbsNumber}}{html{$firstText}}{\\sign{&bull;}{biggestnew}}{html{$secondAbsNumber}}{html{$secondText}}{html{$secondExp}}}',
						answer: '\\input{$answer}',
						controls: {
							"checkAnswer": true,
							"help": '\\rowgrp'
							+'{\\html{$firstHelp}}'
							+'{\\html{&nbsp;}}'
							+'{\\html{$secondHelp}}'
							+'{\\html{&nbsp;}}'
							+'{\\html{$thirdHelp}}'
							+'{\\html{&nbsp;}}'
							+'{css{\\html{answer:  $textAnswer}}{help-answer-text}}'
						}
					}]
				}]
			},
			// fourth template, two number operation, no sign inside 2nd term parenthetical expression
			fourth: {
                title: 'Evaluate Signed Expressions',
                children: [{
                    title: 'Main Answer',
                    children: [{
						problem: '\\rowgrp'
						+'{\\html{Evaluate:}}'
						+'{\\html{&nbsp;}}'
						+'{\\grp{html{$firstLeftparan}}{\\sign{$firstSign}}{html{$firstAbsNumber}}{html{$firstText}}{html{$firstExp}}{html{$secondText}}{html{$firstRightparan}}{html{$secondLeftparan}}{html{$secondAbsNumber}}{html{$thirdText}}{html{$secondExp}}{html{$fourthText}}{html{$secondRightparan}}}',
						answer: '\\input{$answer}',
						controls: {
							"checkAnswer": true,
							"help": '\\rowgrp'
							+'{\\html{$firstHelp}}'
							+'{\\html{&nbsp;}}'
							+'{\\html{$secondHelp}}'
							+'{\\html{&nbsp;}}'
							+'{\\html{$thirdHelp}}'
							+'{\\html{&nbsp;}}'
							+'{css{\\html{answer:  $textAnswer}}{help-answer-text}}'
						}
					}]
				}]
			},
			// fifth template, two number operation, has a sign inside 2nd term parenthetical expression
			fifth: {
                title: 'Evaluate Signed Expressions',
                children: [{
                    title: 'Main Answer',
                    children: [{
						problem: '\\rowgrp'
						+'{\\html{Evaluate:}}'
						+'{\\html{&nbsp;}}'
						+'{\\grp{\\sign{$firstSign}}{html{$firstAbsNumber}}{html{$firstText}}{\\sign{$secondSign}}{\\html{(}}{\\sign{$thirdSign}}{html{$secondAbsNumber}}{html{$secondText}}{\\html{)}}}',
						answer: '\\input{$answer}',
						controls: {
							"checkAnswer": true,
							"help": '\\rowgrp'
							+'{\\html{$firstHelp}}'
							+'{\\html{&nbsp;}}'
							+'{\\html{$secondHelp}}'
							+'{\\html{&nbsp;}}'
							+'{css{\\html{answer:  $textAnswer}}{help-answer-text}}'
						}
					}]
				}]
			}	
        },
        data = [
			// problem 1
			{ firstSign: '', secondSign: '', firstAbsNumber: '3', secondAbsNumber: '4', firstText: '', secondText: 'x',firstExp:'', secondExp: '', firstHelp: 'When multiplying terms, multiply :', secondHelp: '(1) the coefficients together: $$firstAbsNumber * $$secondAbsNumber = 12 <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;and<br>(2) the same variable together(follow the exponent rule - multiplication of same bases --& and add exponents) :', thirdHelp: 'The variable <span class=underline>x</span> has no other <span class=underline>x</span> to multiply by, so it remains a part of the multiplication (12 * x).', answer: '12x', textAnswer: ' &nbsp; 12x', template: 'third' },
			// problem 2
			{ firstSign: '', secondSign: '', firstAbsNumber: '5', secondAbsNumber: '3', firstText: 'm', secondText: 'm',firstExp:'', secondExp: '', firstHelp: 'When multiplying terms, multiply :', secondHelp: '(1) the coefficients together: $$firstAbsNumber * $$secondAbsNumber = 15 <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;and<br>(2) the same variable together(follow the exponent rule - multiplication of same bases --& and add exponents) :', thirdHelp: '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; m * m = m<sup>2</sup>', answer: '15m<sup>2</sup>', textAnswer: ' &nbsp; 15m<sup>2</sup>', template: 'third' },
			// problem 3
			{ firstSign: '-', secondSign: '', firstAbsNumber: '2', secondAbsNumber: '7', firstText: 'y', secondText: 'y',firstExp:'', secondExp: '<sup>2</sup>', firstHelp: 'When multiplying terms, multiply :', secondHelp: '(1) the coefficients together: $$firstSign $$firstAbsNumber * $$secondAbsNumber = -14 <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;and<br>(2) the same variable together(follow the exponent rule - multiplication of same bases --& and add exponents) :', thirdHelp: '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; y * y<sup>2</sup> = y<sup>3</sup>', answer: '-14y<sup>3</sup>', textAnswer: ' &nbsp; -14y<sup>3</sup>', template: 'third' },
			// problem 4
			{ firstSign: '-', secondSign: '-', firstAbsNumber: '3', secondAbsNumber: '4', firstText: 'x', secondText: 'y', thirdText: 'x', fourthText: 'y', firstExp:'<sup>4</sup>', secondExp: '<sup>2</sup>', firstLeftparan: '(', secondLeftparan: '(',firstRightparan: ')',secondRightparan: ')',firstHelp: 'When multiplying terms, multiply :', secondHelp: '(1) the coefficients together: $$firstSign $$firstAbsNumber * $$secondSign$$secondAbsNumber = 12 <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;and<br>(2) the same variable together(follow the exponent rule - multiplication of same bases --& and add exponents) :', thirdHelp: '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; x<sup>4</sup> * x<sup>2</sup> = x<sup>6</sup> <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; y * y = y<sup>2</sup>', answer: '12x<sup>6</sup>y<sup>2</sup>', textAnswer: ' &nbsp; 12x<sup>6</sup>y<sup>2</sup>', template: 'fourth' },
			// problem 5
			{ firstSign: '-', secondSign: '', firstAbsNumber: '6', secondAbsNumber: '3', firstText: '', secondText: '', thirdText: 'm', fourthText: 'n', firstExp:'', secondExp: '<sup>2</sup>', firstLeftparan: '(', secondLeftparan: '(',firstRightparan: ')',secondRightparan: ')',firstHelp: 'When multiplying terms, multiply :', secondHelp: '(1) the coefficients together: $$firstSign $$firstAbsNumber * $$secondSign$$secondAbsNumber = -18 <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;and<br>(2) the same variable together(follow the exponent rule - multiplication of same bases --& and add exponents) :', thirdHelp: 'The variable <span class=underline>m</span> has no other <span class=underline>m</span> to multiply by. The variable <span class=underline>n</span> has no other <span class=underline>n</span> to multiply by. The m<sup>2</sup> and the n remain a part of the multiplication (-18 * m<sup>2</sup> * n). ', answer: '-18m<sup>2</sup>n', textAnswer: ' &nbsp; -18m<sup>2</sup> n', template: 'fourth' },
			// problem 6
			{ firstSign: '-', secondSign: '', firstAbsNumber: '2', secondAbsNumber: '5', firstText: 'x', secondText: '', thirdText: 'x', fourthText: 'y', firstExp:'<sup>3</sup>', secondExp: '', firstLeftparan: '', secondLeftparan: '(',firstRightparan: '',secondRightparan: ')',firstHelp: 'When multiplying terms, multiply :', secondHelp: '(1) the coefficients together: $$firstSign $$firstAbsNumber * $$secondSign$$secondAbsNumber = -10 <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;and<br>(2) the same variable together(follow the exponent rule - multiplication of same bases --& and add exponents) :<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; x<sup>3</sup> * x = x<sup>4</sup> ', thirdHelp: 'The variable <span class=underline>y</span> has no other <span class=underline>y</span> to multiply by. The y remain a part of the multiplication (-10 * x<sup>4</sup> * y). ', answer: '-10x<sup>4</sup>y', textAnswer: ' &nbsp; -10x<sup>4</sup>y', template: 'fourth' },
			// problem 7
			{ firstSign: '-', secondSign: '', firstAbsNumber: '2', secondAbsNumber: '15', firstText: '/ 5', secondText: '', thirdText: 'a', fourthText: '', firstExp:'', secondExp: '<sup>2</sup>', firstLeftparan: '(', secondLeftparan: '(',firstRightparan: ')',secondRightparan: ')',firstHelp: 'When multiplying terms, multiply :', secondHelp: '(1) the coefficients together: $$firstSign $$firstAbsNumber/5 * $$secondAbsNumber = -6<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;and<br>(2) the same variable together(follow the exponent rule - multiplication of same bases --& and add exponents) :', thirdHelp: 'The variable <span class=underline>a</span> has no other <span class=underline>a</span> to multiply by. The a<sup>2</sup> remains a part of the multiplication (-6 * a<sup>2</sup>). ', answer: '-6a<sup>2</sup>', textAnswer: ' &nbsp; -6a<sup>2</sup>', template: 'fourth' },
			// problem 8
			{ firstSign: '-', secondSign: '-', firstAbsNumber: '3', secondAbsNumber: '-1', firstText: 'm', secondText: 'n /4', thirdText: 'm', fourthText: '/6', firstExp:'<sup>3</sup>', secondExp: '<sup>2</sup>', firstLeftparan: '(', secondLeftparan: '(',firstRightparan: ')',secondRightparan: ')',firstHelp: 'When multiplying terms, multiply :', secondHelp: '(1) the coefficients together: $$firstSign $$firstAbsNumber/4 * $$secondAbsNumber /6 = 1/8<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;and<br>(2) the same variable together(follow the exponent rule - multiplication of same bases --& and add exponents) :<br><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; m<sup>3</sup> * m<sup>2</sup> = m<sup>5</sup>', thirdHelp: 'The variable <span class=underline>n</span> has no other <span class=underline>n</span> to multiply by. The n remains a part of the multiplication (1/8 * m<sup>5</sup> * n). ', answer: '1m<sup>5</sup>n/8', textAnswer: ' &nbsp; 1m<sup>5</sup>n/8', template: 'fourth' },
			// problem 19
			{ firstSign: '', secondSign: '-', thirdSign: '', firstAbsNumber: '5', secondAbsNumber: '8.25', firstTextSign: 'positive', secondTextSign: 'negative', firstHelp: 'The $$firstAbsNumber is $$firstTextSign and the $$secondAbsNumber is $$secondTextSign.  The values have <span class=underline>different</span> signs.  Therefore, <span class=underline>take the difference</span> between the two absolute values and <span class=underline>keep the sign of the larger value</span>.', secondHelp: 'The difference between 5 and 8.25 |8.25 - 5| is 3.25.  The $$secondTextSign value is the larger sign, so the answer is $$secondTextSign.', answer: '-3.25', textAnswer: ' &nbsp; -3.25', template: 'fifth' },
			// problem 20
			{ firstSign: '-', secondSign: '+', thirdSign: '', firstAbsNumber: '4.3', secondAbsNumber: '7.2', firstTextSign: 'negative', secondTextSign: 'positive', firstHelp: 'The $$firstAbsNumber is $$firstTextSign and the $$secondAbsNumber is $$secondTextSign.  The values have <span class=underline>different</span> signs.  Therefore, <span class=underline>take the difference</span> between the two absolute values and <span class=underline>keep the sign of the larger value</span>.', secondHelp: 'The difference between 4.3 and 7.2 |7.2 - 4.3| is 2.9.  The $$firstTextSign value is the larger sign, so the answer is $$firstTextSign.', answer: '2.9', textAnswer: ' &nbsp; 2.9', template: 'fifth' },
        ];

	return dataUtils.build(desc, template, data);
}]);
