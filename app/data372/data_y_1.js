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
						+'{\\grp{\\sign{$firstSign}}{html{$firstAbsNumber}}{html{$firstText}}{\\str{ *}}{html{$secondAbsNumber}}{html{$secondText}}{html{$secondExp}}}',
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
			thirdexp: {
                title: 'Evaluate Signed Expressions',
                children: [{
                    title: 'Main Answer',
                    children: [{
						problem: '\\rowgrp'
						+'{\\html{Evaluate:}}'
						+'{\\html{&nbsp;}}'
						+'{\\grp{\\sign{$firstSign}}{html{$firstAbsNumber}}{html{$firstText}}{\\str{ *}}{html{$secondAbsNumber}}{html{$secondText}}{html{$secondExp}}}',
						answer: '\\grp{\\input{$ans}}{\\exp{\\input{$tex}}{\\input{$exp}}}',
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
						+'{\\grp{html{$firstLeftparan}}{\\sign{$firstSign}}{\\frac{\\html{$firstNum}}{\\html{$firstDen}}}{html{$firstText}}{html{$firstExp}}{html{$secondText}}{html{$firstRightparan}}{html{$secondLeftparan}}{\\sign{$secondSign}}{\\frac{\\html{$secondNum}}{\\html{$secondDen}}}{html{$thirdText}}{html{$secondExp}}{html{$fourthText}}{html{$secondRightparan}}}',
						answer: '\\grp{\\input{$ans}}{\\exp{\\input{$firsttex}}{\\input{$firstexp}}}',
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
			fourthexp: {
                title: 'Evaluate Signed Expressions',
                children: [{
                    title: 'Main Answer',
                    children: [{
						problem: '\\rowgrp'
						+'{\\html{Evaluate:}}'
						+'{\\html{&nbsp;}}'
						+'{\\grp{html{$firstLeftparan}}{\\sign{$firstSign}}{html{$firstAbsNumber}}{html{$firstText}}{html{$firstExp}}{html{$secondText}}{html{$firstRightparan}}{html{$secondLeftparan}}{\\sign{$secondSign}}{html{$secondAbsNumber}}{html{$thirdText}}{html{$secondExp}}{html{$fourthText}}{html{$secondRightparan}}}',
						answer: '\\grp{\\input{$ans}}{\\exp{\\input{$firsttex}}{\\input{$firstexp}}}{\\exp{\\input{$secondtex}}{\\input{$secondexp}}}',
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
			fifthexp: {
                title: 'Evaluate Signed Expressions',
                children: [{
                    title: 'Main Answer',
                    children: [{
						problem: '\\rowgrp'
						+'{\\html{Evaluate:}}'
						+'{\\html{&nbsp;}}'
						+'{\\grp{html{$firstLeftparan}}{\\sign{$firstSign}}{html{$firstAbsNumber}}{html{$firstText}}{html{$firstExp}}{html{$secondText}}{html{$firstRightparan}}{html{$secondLeftparan}}{\\sign{$secondSign}}{html{$secondAbsNumber}}{html{$thirdText}}{html{$secondExp}}{html{$fourthText}}{html{$secondRightparan}}}',
						answer: '\\grp{\\input{$ans}}{\\exp{\\input{$firsttex}}{\\input{$firstexp}}}{\\input{$secondtex}}',
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
						+'{\\grp{html{$firstLeftparan}}{\\sign{$firstSign}}{html{$firstText}}{html{$firstRightparan}}{html{$secondLeftparan}}{html{$thirdText}}{html{$secondExp}}{html{$secondRightparan}}{html{$thirdLeftparan}}{\\sign{$thirdSign}}{html{$thirdAbsNumber}}{html{$fifthText}}{html{$thirdExp}}{html{$thirdRightparan}}}',
						answer: '\\grp{\\input{$ans}}{\\exp{\\input{$firsttex}}{\\input{$firstexp}}}{\\input{$secondtex}}',
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
			sixth: {
                title: 'Evaluate Signed Expressions',
                children: [{
                    title: 'Main Answer',
                    children: [{
						problem: '\\rowgrp'
						+'{\\html{Evaluate:}}'
						+'{\\html{&nbsp;}}'
						+'{\\grp{html{$firstAbsNumber}}{html{$firstText}}{\\str{*}}{\\sign{$secondSign}}{html{$secondAbsNumber}}{html{$thirdText}}{\\str{*}}{html{$thirdAbsNumber}}{html{$fifthText}}{html{$sixthText}}{html{$thirdExp}}}',
						answer: '\\grp{\\input{$ans}}{\\exp{\\input{$firsttex}}{\\input{$firstexp}}}{\\input{$secondtex}}{\\exp{\\input{$thirdtex}}{\\input{$thirdexp}}}',
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
			seventhexp: {
                title: 'Evaluate Signed Expressions',
                children: [{
                    title: 'Main Answer',
                    children: [{
						problem: '\\rowgrp'
						+'{\\html{Evaluate:}}'
						+'{\\html{&nbsp;}}'
						+'{\\grp{html{$firstLeftparan}}{\\sign{$firstSign}}{\\frac{\\html{$firstNum}}{\\html{$firstDen}}}{html{$secondText}}{html{$firstRightparan}}{html{$secondLeftparan}}{\\sign{$secondSign}}{html{$secondAbsNumber}}{html{$thirdText}}{html{$secondExp}}{html{$fourthText}}{html{$secondRightparan}}}',
						answer: '\\grp{\\input{$ans}}{\\exp{\\input{$firsttex}}{\\input{$firstexp}}}',
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
        },
        data = [
			// problem 1
			{ firstSign: '', secondSign: '', firstAbsNumber: '3', secondAbsNumber: '4', firstText: '', secondText: 'x',firstExp:'', secondExp: '', firstHelp: 'When multiplying terms, multiply :', secondHelp: '(1) the coefficients together: $$firstAbsNumber <font size = 4>&bull;</font> $$secondAbsNumber = 12 <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;and<br>(2) the same variable(s) together&nbsp;( follow the exponent rule - multiplication of same bases -- add exponents) :', thirdHelp: 'The variable <span class=underline>x</span> has no other <span class=underline>x</span> to multiply by, so it remains a part of the multiplication (12 <font size = 4>&bull;</font> x).', ans: '12x', textAnswer: ' &nbsp; 12x', template: 'third' },
			// problem 2
			{ firstSign: '', secondSign: '', firstAbsNumber: '5', secondAbsNumber: '3', firstText: 'm', secondText: 'm',firstExp:'', secondExp: '', firstHelp: 'When multiplying terms, multiply :', secondHelp: '(1) the coefficients together: $$firstAbsNumber <font size = 4>&bull;</font> $$secondAbsNumber = 15 <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;and<br>(2) the same variable(s) together&nbsp;( follow the exponent rule - multiplication of same bases -- add exponents) :', thirdHelp: '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; m <font size = 4>&bull;</font> m = m<sup>2</sup>', textAnswer: ' &nbsp; 15m<sup>2</sup>', ans: '15', tex:'m', exp: '2', template: 'thirdexp' },
			// problem 3
			{ firstSign: '-', secondSign: '', firstAbsNumber: '2', secondAbsNumber: '7', firstText: 'y', secondText: 'y',firstExp:'', secondExp: '<sup>2</sup>', firstHelp: 'When multiplying terms, multiply :', secondHelp: '(1) the coefficients together: $$firstSign $$firstAbsNumber <font size = 4>&bull;</font> $$secondAbsNumber = -14 <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;and<br>(2) the same variable(s) together&nbsp;( follow the exponent rule - multiplication of same bases --&nbsp; add exponents) :', thirdHelp: '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; y <font size = 4>&bull;</font> y<sup>2</sup> = y<sup>3</sup>', textAnswer: ' &nbsp; -14y<sup>3</sup>', ans: '-14', tex:'y', exp: '3', template: 'thirdexp' },
			// problem 4
			{ firstSign: '-', secondSign: '-', firstAbsNumber: '3', secondAbsNumber: '4', firstText: 'x', secondText: 'y', thirdText: 'x', fourthText: 'y', firstExp:'<sup>4</sup>', secondExp: '<sup>2</sup>', firstLeftparan: '(', secondLeftparan: '(',firstRightparan: ')',secondRightparan: ')',firstHelp: 'When multiplying terms, multiply :', secondHelp: '(1) the coefficients together: $$firstSign $$firstAbsNumber <font size = 4>&bull;</font> $$secondSign $$secondAbsNumber = 12 <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;and<br>(2) the same variable(s) together&nbsp;( follow the exponent rule - multiplication of same bases -- &nbsp; add exponents) :', thirdHelp: '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; x<sup>4</sup> <font size = 4>&bull;</font> x<sup>2</sup> = x<sup>6</sup> <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; y <font size = 4>&bull;</font> y = y<sup>2</sup>', textAnswer: ' &nbsp; 12x<sup>6</sup>y<sup>2</sup>', ans: '12', firsttex:'x', firstexp: '6', secondtex:'y', secondexp: '2', template: 'fourthexp' },
			// problem 5
			{ firstSign: '-', secondSign: '', firstAbsNumber: '6', secondAbsNumber: '3', firstText: '', secondText: '', thirdText: 'm', fourthText: 'n', firstExp:'', secondExp: '<sup>2</sup>', firstLeftparan: '(', secondLeftparan: '(',firstRightparan: ')',secondRightparan: ')',firstHelp: 'When multiplying terms, multiply :', secondHelp: '(1) the coefficients together: $$firstSign $$firstAbsNumber <font size = 4>&bull;</font> $$secondSign$$secondAbsNumber = -18 <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;and<br>(2) the same variable(s) together&nbsp;( follow the exponent rule - multiplication of same bases -- add exponents) :', thirdHelp: 'The variable <span class=underline>m</span> has no other <span class=underline>m</span> to multiply by. The variable <span class=underline>n</span> has no other <span class=underline>n</span> to multiply by. The m<sup>2</sup> and the n remain a part of the multiplication (-18 <font size = 4>&bull;</font> m<sup>2</sup> <font size = 4>&bull;</font> n). ', textAnswer: ' &nbsp; -18m<sup>2</sup> n', ans: '-18', firsttex:'m', firstexp: '2', secondtex:'n', template: 'fifthexp' },
			// problem 6
			{ firstSign: '-', secondSign: '', firstAbsNumber: '2', secondAbsNumber: '5', firstText: 'x', secondText: '', thirdText: 'x', fourthText: 'y', firstExp:'<sup>3</sup>', secondExp: '', firstLeftparan: '', secondLeftparan: '(',firstRightparan: '',secondRightparan: ')',firstHelp: 'When multiplying terms, multiply :', secondHelp: '(1) the coefficients together: $$firstSign $$firstAbsNumber <font size = 4>&bull;</font> $$secondSign$$secondAbsNumber = -10 <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;and<br>(2) the same variable(s) together&nbsp;( follow the exponent rule - multiplication of same bases -- add exponents) :<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; x<sup>3</sup> <font size = 4>&bull;</font> x = x<sup>4</sup> ', thirdHelp: 'The variable <span class=underline>y</span> has no other <span class=underline>y</span> to multiply by. The y remains a part of the multiplication (-10 <font size = 4>&bull;</font> x<sup>4</sup> <font size = 4>&bull;</font> y). ', textAnswer: ' &nbsp; -10x<sup>4</sup>y', ans: '-10', firsttex:'x', firstexp: '4', secondtex:'y', template: 'fifthexp'},
			// problem 7
			{ firstSign: '-', secondSign: '', firstNum: '2', secondAbsNumber: '15', firstDen: '5', secondText: '', thirdText: 'a', fourthText: '', firstExp:'', secondExp: '<sup>2</sup>', firstLeftparan: '(', secondLeftparan: '(',firstRightparan: ')',secondRightparan: ')',firstHelp: 'When multiplying terms, multiply :', secondHelp: '(1) the coefficients together: <font size=4>$$firstSign&nbsp; <sup>2</sup>&frasl;<sub>5</sub></font>&nbsp;<font size = 4>&bull;</font> $$secondAbsNumber = -6<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;and<br>(2) the same variable(s) together&nbsp;( follow the exponent rule - multiplication of same bases -- add exponents) :', thirdHelp: 'The variable <span class=underline>a</span> has no other <span class=underline>a</span> to multiply by. The a<sup>2</sup> remains a part of the multiplication (-6 <font size = 4>&bull;</font> a<sup>2</sup>). ', textAnswer: ' &nbsp; -6a<sup>2</sup>', ans: '-6', firsttex:'a', firstexp: '2', template: 'seventhexp' },
			// problem 8
			{ firstSign: '-', secondSign: '-', firstNum: '3', firstDen: '4', secondNum: '1', secondDen: '6', firstText: '<font size=5><sup><sub>m</sub></sup></font>', secondText: '<font size=5><sup><sub>n</sub></sup></font>', thirdText: '<font size=5><sup><sub>m</sub></sup></font>', fourthText: '', firstExp:'<font size=5><sup><sup>3</sup></sup></font>', secondExp: '<font size=5><sup><sup>2</sup></sup></font>', firstLeftparan: '(', secondLeftparan: '(',firstRightparan: ')',secondRightparan: ')',firstHelp: 'When multiplying terms, multiply :', secondHelp: '(1) the coefficients together: <font size=4>$$firstSign <sup>3</sup>&frasl;<sub>4</sub> &nbsp; <font size = 4>&bull;</font> &nbsp; $$secondSign <sup>1</sup>&frasl;<sub>6</sub>&nbsp; = &nbsp; <sup>1</sup>&frasl;<sub>8</sub></font><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;and<br>(2) the same variable(s) together&nbsp;( follow the exponent rule - multiplication of same bases -- add exponents) :<br><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; m<sup>3</sup> &nbsp;<font size = 4>&bull;</font>&nbsp; m<sup>2</sup> = m<sup>5</sup>', thirdHelp: 'The variable <span class=underline>n</span> has no other <span class=underline>n</span> to multiply by. The n remains a part of the multiplication (<font size=4><sup>1</sup>&frasl;<sub>8</sub></font> <font size = 4>&bull;</font> m<sup>5</sup> <font size = 4>&bull;</font>&nbsp;n). ', answer: '1m5n/8', textAnswer: ' &nbsp; <font size=4><sup>1</sup>&frasl;<sub>8</sub></font>&nbsp; m<sup>5</sup>n', template: 'fourth' },
			// problem 9
			{ firstSign: '-', secondSign: '', thirdSign: '-', firstAbsNumber: '', secondAbsNumber: '',thirdAbsNumber: '4', firstText: 'x', secondText: '', thirdText: 'x', fourthText: '', fifthText: 'y',sixthText: '', firstExp:'', secondExp: '<sup>2</sup>',thirdExp: '', firstLeftparan: '(', secondLeftparan: '(',firstRightparan: ')',secondRightparan: ')',thirdLeftparan: '(', thirdRightparan: ')', firstHelp: 'When multiplying terms, multiply :', secondHelp: '(1) the coefficients together: $$firstSign 1 <font size = 4>&bull;</font> 1 <font size = 4>&bull;</font> $$thirdSign $$thirdAbsNumber = 4 <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;and<br>(2) the same variable(s) together&nbsp;( follow the exponent rule - multiplication of same bases -- add exponents) :<br><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; x <font size = 4>&bull;</font> x <sup>2</sup> = x<sup>3</sup> ', thirdHelp: 'The variable <span class=underline>y</span> has no other <span class=underline>y</span> to multiply by. The y remains a part of the multiplication (4 <font size = 4>&bull;</font> x<sup>3</sup> <font size = 4>&bull;</font> y). ',textAnswer: ' &nbsp; 4x<sup>3</sup>y', ans: '4', firsttex:'x', firstexp: '3', secondtex:'y', template: 'fifth' },
			// problem 10
			{ firstSign: '', secondSign: '-', thirdSign: '', firstAbsNumber: '4', secondAbsNumber: '2',thirdAbsNumber: '7', firstText: 'y', secondText: '', thirdText: 'x', fourthText: '', fifthText: 'x',sixthText: 'z', firstExp:'', secondExp: '',thirdExp: '<sup>3</sup>', firstLeftparan: '', secondLeftparan: '',firstRightparan: '',secondRightparan: '',thirdLeftparan: '', thirdRightparan: '', firstHelp: 'When multiplying terms, multiply :', secondHelp: '(1) the coefficients together: 4 <font size = 4>&bull;</font> -2 <font size = 4>&bull;</font> 7 = -56<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;and<br>(2) the same variable(s) together&nbsp;( follow the exponent rule - multiplication of same bases -- add exponents) :<br><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; x <font size = 4>&bull;</font> x = x<sup>2</sup> ', thirdHelp: 'The variable <span class=underline>y</span> has no other <span class=underline>y</span> to multiply by. The variable <span class=underline>z</span> has no other <span class=underline>z</span> to multiply by. The y and the z remains a part of the multiplication (-56 <font size = 4>&bull;</font> x<sup>2</sup> <font size = 4>&bull;</font> y <font size = 4>&bull;</font> z<sup>3</sup>). ', textAnswer: ' &nbsp; -56x<sup>2</sup>yz<sup>3</sup>', ans: '-56', firsttex:'x', firstexp: '2', secondtex:'y', thirdtex:'z', thirdexp: '3', template: 'sixth' },
        ];

	return dataUtils.build(desc, template, data);
}]);
