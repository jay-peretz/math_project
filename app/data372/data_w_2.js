/*global angular */

angular.module('mathSkills').service('data_w_2', ['dataUtils', function (dataUtils) {
    var desc = {
			title: 'W.2 Addition of Monomials and Polynomials',
    		path: 'W.2-addition-of-monomials-and-polynomials',
            children: []
        },
        template = {
			first: {
                title: 'Addition of Monomials and Polynomials',
                children: [{
                    title: 'Main Answer',
                    children: [{
						problem: '$prob',
						answer: '', 
                       controls: {
                    	   "checkAnswer": true,
                    	   "help": '\\rowgrp'
								+'{$help}'
								+'{\\html{&nbsp;}}'
								+'{css{\\html{Answer:  $textAnswer}}{help-answer-text}}'
							}
						}]
					}]
				},
        },
        data = [
			
			// problem 1
			{prob: dataUtils.pre('\\html{3a + 7a}'),
			help: dataUtils.pre('\\rowgrp'
					+'{\\html{We can only combine \"like terms.\"}}{\\html{&nbsp;}}'
					+'{\\html{3a and 7a are like terms because they are both a<sup>1</sup>\ terms.}}'
					+'{\\html{&nbsp;}}{\\html{Combine the coefficients: 3 + 7 = 10}}'),
			template: 'first', textAnswer: '10a'},
			
			// problem 2
			{prob: dataUtils.pre('\\html{&minus;4m<sup>2</sup> + 2m<sup>2</sup>}'),
			help: dataUtils.pre('\\rowgrp'
					+'{\\html{We can only combine \"like terms.\"}}{\\html{&nbsp;}}'
					+'{\\html{&minus;4m<sup>2</sup> and 2m<sup>2</sup> are like terms because they are both m<sup>2</sup> terms.}}'
					+'{\\html{&nbsp;}}{\\html{Combine the coefficients: &minus;4 + 2 = &minus;2}}'),
			template: 'first', textAnswer: '&minus;2m<sup>2</sup>'},
			
			// problem 3
			{prob: dataUtils.pre('\\html{&minus;5x<sup>2</sup>y + 2x + x<sup>2</sup>y}'),
			help: dataUtils.pre('\\rowgrp'
					+'{\\html{We can only combine \"like terms.\"}}{\\html{&nbsp;}}'
					+'{\\html{&minus;5x<sup>2</sup>y and x<sup>2</sup>y are like terms because they are both x<sup>2</sup>y terms.}}'
					+'{\\html{&nbsp;}}{\\html{Combine the coefficients: &minus;5 + 1 = &minus;4}}'
					+'{\\html{&nbsp;}}{\\html{The term 2x stays the same. There is no other x<sup>1</sup> term. }}'),
			template: 'first', textAnswer: '&minus;4x<sup>2</sup>y + 2x'},
			
			// problem 4
			{prob: dataUtils.pre('\\html{7x + (2xy + 5x)}'),
			help: dataUtils.pre('\\rowgrp'
					+'{\\html{We can only combine \"like terms.\"}}{\\html{&nbsp;}}'
					+'{\\html{7x and 5x are like terms because they are both x<sup>1</sup> terms.}}'
					+'{\\html{&nbsp;}}{\\html{Combine the coefficients: 7 + 5 = 12}}'
					+'{\\html{&nbsp;}}{\\html{The term 2xy stays the same. There is no other xy term. }}'),
			template: 'first', textAnswer: '12x + 2xy'},
			
			// problem 5
			{prob: dataUtils.pre('\\html{(&minus;2m<sup>2</sup> + m) + (&minus;3m<sup>2</sup> + m)}'),
			help: dataUtils.pre('\\rowgrp'
					+'{\\html{We can only combine \"like terms.\"}}{\\html{&nbsp;}}'
					+'{\\html{&minus;2m<sup>2</sup> and &minus;3m<sup>2</sup> are like terms because they are both m<sup>2</sup> terms.}}'
					+'{\\html{Combine the coefficients: &minus;2 + (&minus;3) = &minus;5}}'
					+'{\\html{&nbsp;}}{\\html{m and m are like terms because they are both m<sup>1</sup> terms.}}'
					+'{\\html{Combine the coefficients: 1 + 1 = 2 }}'),
			template: 'first', textAnswer: '&minus;5m<sup>2</sup> + 2m'},
			
			// problem 6
			{prob: dataUtils.pre('\\html{(4ab<sup>2</sup> + 3ab) + (&minus;2ab<sup>2</sup> + 2ab)}'),
			help: dataUtils.pre('\\rowgrp'
					+'{\\html{We can only combine \"like terms.\"}}{\\html{&nbsp;}}'
					+'{\\html{4ab<sup>2</sup> and &minus;2ab<sup>2</sup> are like terms because they are both ab<sup>2</sup> terms.}}'
					+'{\\html{Combine the coefficients: 4 + (&minus;2) = 2}}'
					+'{\\html{&nbsp;}}{\\html{3ab and 2ab are like terms because they are both ab terms.}}'
					+'{\\html{Combine the coefficients: 3 + 2 = 5 }}'),
			template: 'first', textAnswer: '2ab<sup>2</sup> + 5ab'},
			
			// problem 7
			{prob: dataUtils.pre('\\html{(6m + 2n + 3) + (&minus;4m &minus; 2n &minus; 1)}'),
			help: dataUtils.pre('\\rowgrp'
					+'{\\html{We can only combine \"like terms.\"}}{\\html{&nbsp;}}'
					+'{\\html{6m and -4m are like terms because they are both m<sup>1</sup> terms.}}'
					+'{\\html{Combine the coefficients: 6 + (&minus;4) = 2}}'
					+'{\\html{&nbsp;}}{\\html{2n and &minus;2n are like terms because they are both n<sup>1</sup> terms.}}'
					+'{\\html{Combine the coefficients: 2 + (&minus;2) = 0 }}'
					+'{\\html{&nbsp;}}{\\html{3 and &minus;1 are like terms because they are both terms without variables.}}'
					+'{\\html{Combine the coefficients: 3 + (&minus;1) = 2 }}'),
			template: 'first', textAnswer: '2m + 2'},
			
			// problem 8
			{prob: dataUtils.pre('\\html{(&minus;3mn<sup>2</sup> + 3m &minus; 2) + (2mn<sup>2</sup> + 3m + 2)}'),
			help: dataUtils.pre('\\rowgrp'
					+'{\\html{We can only combine \"like terms.\"}}{\\html{&nbsp;}}'
					+'{\\html{&minus;3mn<sup>2</sup> and 2mn<sup>2</sup> are like terms because they are both mn<sup>2</sup> terms.}}'
					+'{\\html{Combine the coefficients: &minus;3 + 2 = &minus;1}}'
					+'{\\html{&nbsp;}}{\\html{3m and 3m are like terms because they are both m<sup>1</sup> terms.}}'
					+'{\\html{Combine the coefficients: 3 + 3 = 6 }}'
					+'{\\html{&nbsp;}}{\\html{&minus;2 and 2 are like terms because they are both terms without variables.}}'
					+'{\\html{Combine the coefficients: &minus;2 + 2 = 0 }}'),
			template: 'first', textAnswer: '&minus;mn<sup>2</sup> + 6m'},
			
			// problem 9
			{prob: dataUtils.pre('\\grp{\\frac{\\fracstr{\\html{10}}}{\\fracstr{3}}}'),
			help: dataUtils.pre('\\rowgrp'
					+'{\\html{We can only combine \"like terms.\"}}{\\html{&nbsp;}}'
					+'{\\html{<sup>x<sup>2</sup></sup>&#8260;<sub>5</sub> and <sup>2x<sup>2</sup></sup>&#8260;<sub>5</sub> are like terms because they are both x<sup>2</sup> terms.}}'
					+'{\\html{Combine the coefficients: <sup>1</sup>&#8260;<sub>5</sub> + <sup>2</sup>&#8260;<sub>5</sub> = <sup>3</sup>&#8260;<sub>5</sub>}}'
					+'{\\html{&nbsp;}}{\\html{<sup>&minus;2y</sup>&#8260;<sub>3</sub> and <sup>y</sup>&#8260;<sub>2</sub> are like terms because they are both y<sup>1</sup> terms.}}'
					+'{\\html{Combine the coefficients: <sup>&minus;2</sup>&#8260;<sub>3</sub> + (<sup>&minus;1</sup>&#8260;<sub>2</sub>)  = <sup>&minus;7</sup>&#8260;<sub>6</sub>  }}'),
			template: 'first', textAnswer: '<sup>3x<sup>2</sup></sup>&#8260;<sub>5</sub> &minus; <sup>7y</sup>&#8260;<sub>6</sub>'},
			
			// problem 10
			{prob: dataUtils.pre('\\grp{\\frac{\\fracstr{\\html{10}}}{\\fracstr{3}}}'),
			help: dataUtils.pre('\\rowgrp'
					+'{\\html{We can only combine \"like terms.\"}}{\\html{&nbsp;}}'
					+'{\\html{<sup>a<sup>2</sup></sup>&#8260;<sub>4</sub> and <sup>&minus;a<sup>2</sup></sup>&#8260;<sub>4</sub> are like terms because they are both a<sup>2</sup> terms.}}'
					+'{\\html{Combine the coefficients: <sup>1</sup>&#8260;<sub>4</sub> + (<sup>&minus;1</sup>&#8260;<sub>4</sub>) = 0}}'
					+'{\\html{&nbsp;}}{\\html{<sup>&minus;3a</sup>&#8260;<sub>4</sub> and <sup>2a</sup>&#8260;<sub>5</sub> are like terms because they are both a<sup>1</sup> terms.}}'
					+'{\\html{Combine the coefficients: <sup>&minus;3</sup>&#8260;<sub>4</sub> + <sup>2</sup>&#8260;<sub>5</sub>  = <sup>&minus;7</sup>&#8260;<sub>20</sub>  }}'),
			template: 'first', textAnswer: '<sup>&minus;7a</sup>&#8260;<sub>20</sub> '},
			];

	return dataUtils.build(desc, template, data);
}]);