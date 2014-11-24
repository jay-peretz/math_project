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
						problem: '\\rowgrp'
								+'{\\html{Simplify:}}'
								+'{\\html{&nbsp;}}'
								+'{\\grp{$prob}}',
							
						answer: '\\rowgrp'+
						 		'{\\grp{\\btn{A}{$buttonValueA}{marg}}{$buttonLabelA}}'+
						 		'{\\grp{\\btn{B}{$buttonValueB}{marg}}{$buttonLabelB}}'+
						 		'{\\grp{\\btn{C}{$buttonValueC}{marg}}{$buttonLabelC}}'+
						 		'{\\grp{\\btn{D}{$buttonValueD}{marg}}{$buttonLabelD}}',		
                       controls: {
                    	   "checkAnswer": true,
                    	   "help": '\\rowgrp'
								+'{$help}'
								+'{\\html{&nbsp;}}'
								+'{css{\\grp{\\html{Answer: }}$textAnswer}{help-answer-text}}'
							}
						}]
					}]
				},
        },
        data = [
			
			// problem 1
			{prob: dataUtils.pre('\\html{3a + 7a}'),
			buttonValueA: 'F', buttonLabelA: dataUtils.pre('\\html{4a}'), 
			buttonValueB: 'T', buttonLabelB: dataUtils.pre('\\html{10a}'),  
			buttonValueC: 'F', buttonLabelC: dataUtils.pre('\\html{10a<sup>2</sup>}'),  
			buttonValueD: 'F', buttonLabelD: dataUtils.pre('\\html{21a}'), answerBtn: 'noAnswer',
			help: dataUtils.pre('\\rowgrp'
					+'{\\html{We can only combine \"like terms.\"}}{\\html{&nbsp;}}'
					+'{\\html{3a and 7a are like terms because they are both a<sup>1</sup>\ terms.}}'
					+'{\\html{&nbsp;}}{\\html{Combine the coefficients: 3 + 7 = 10}}'),
			template: 'first', textAnswer:  dataUtils.pre('{\\html{10a}}')},
			
			// problem 2
			{prob: dataUtils.pre('\\html{&minus;4m<sup>2</sup> + 2m<sup>2</sup>}'),
			buttonValueA: 'T', buttonLabelA: dataUtils.pre('\\html{&minus;2m<sup>2</sup>}'), 
			buttonValueB: 'F', buttonLabelB: dataUtils.pre('\\html{&minus;8m<sup>4</sup>}'), 
			buttonValueC: 'F', buttonLabelC: dataUtils.pre('\\html{2m<sup>2</sup>}'), 
			buttonValueD: 'F', buttonLabelD: dataUtils.pre('\\html{6m<sup>4</sup>}'),  answerBtn: 'noAnswer',	
			help: dataUtils.pre('\\rowgrp'
					+'{\\html{We can only combine \"like terms.\"}}{\\html{&nbsp;}}'
					+'{\\html{&minus;4m<sup>2</sup> and 2m<sup>2</sup> are like terms because they are both m<sup>2</sup> terms.}}'
					+'{\\html{&nbsp;}}{\\html{Combine the coefficients: &minus;4 + 2 = &minus;2}}'),
			template: 'first', textAnswer:  dataUtils.pre('{\\html{&minus;2m<sup>2</sup>}}')},
			
			// problem 3
			{prob: dataUtils.pre('\\html{&minus;5x<sup>2</sup>y + 2x + x<sup>2</sup>y}'),
			buttonValueA: 'F', buttonLabelA: dataUtils.pre('\\html{&minus;2x<sup>2</sup>y}'), 
			buttonValueB: 'F', buttonLabelB: dataUtils.pre('\\html{&minus;6x<sup>4</sup>y<sup>2</sup>}'), 
			buttonValueC: 'T', buttonLabelC: dataUtils.pre('\\html{&minus;4x<sup>2</sup>y + 2x}'),  
			buttonValueD: 'F', buttonLabelD: dataUtils.pre('\\html{6x<sup>2</sup>y + 2x}'),  answerBtn: 'noAnswer',			
			help: dataUtils.pre('\\rowgrp'
					+'{\\html{We can only combine \"like terms.\"}}{\\html{&nbsp;}}'
					+'{\\html{&minus;5x<sup>2</sup>y and x<sup>2</sup>y are like terms because they are both x<sup>2</sup>y terms.}}'
					+'{\\html{&nbsp;}}{\\html{Combine the coefficients: &minus;5 + 1 = &minus;4}}'
					+'{\\html{&nbsp;}}{\\html{The term 2x stays the same. There is no other x<sup>1</sup> term. }}'),
			template: 'first', textAnswer:  dataUtils.pre('{\\html{&minus;4x<sup>2</sup>y + 2x}}')},
			
			// problem 4
			{prob: dataUtils.pre('\\html{7x + (2xy + 5x)}'),
			buttonValueA: 'F', buttonLabelA: dataUtils.pre('\\html{7x<sup>2</sup>y + 5x}'), 
			buttonValueB: 'F', buttonLabelB: dataUtils.pre('\\html{14xy}'), 
			buttonValueC: 'F', buttonLabelC: dataUtils.pre('\\html{9xy + 5x}'),  
			buttonValueD: 'T', buttonLabelD: dataUtils.pre('\\html{2xy + 12x}'),  answerBtn: 'noAnswer',						
			help: dataUtils.pre('\\rowgrp'
					+'{\\html{We can only combine \"like terms.\"}}{\\html{&nbsp;}}'
					+'{\\html{7x and 5x are like terms because they are both x<sup>1</sup> terms.}}'
					+'{\\html{&nbsp;}}{\\html{Combine the coefficients: 7 + 5 = 12}}'
					+'{\\html{&nbsp;}}{\\html{The term 2xy stays the same. There is no other xy term. }}'),
			template: 'first', textAnswer:  dataUtils.pre('{\\html{12x + 2xy}}')},
			
			// problem 5
			{prob: dataUtils.pre('\\html{(&minus;2m<sup>2</sup> + m) + (&minus;3m<sup>2</sup> + m)}'),
			buttonValueA: 'F', buttonLabelA: dataUtils.pre('\\html{&minus;6m<sup>2</sup> + m}'), 
			buttonValueB: 'F', buttonLabelB: dataUtils.pre('\\html{&minus;3m<sup>4</sup>}'), 
			buttonValueC: 'T', buttonLabelC: dataUtils.pre('\\html{&minus;5m<sup>2</sup> + 2m}'),  
			buttonValueD: 'F', buttonLabelD: dataUtils.pre('\\html{&minus;2m<sup>2</sup> + 5m}'),  answerBtn: 'noAnswer',	
			help: dataUtils.pre('\\rowgrp'
					+'{\\html{We can only combine \"like terms.\"}}{\\html{&nbsp;}}'
					+'{\\html{&minus;2m<sup>2</sup> and &minus;3m<sup>2</sup> are like terms because they are both m<sup>2</sup> terms.}}'
					+'{\\html{Combine the coefficients: &minus;2 + (&minus;3) = &minus;5}}'
					+'{\\html{&nbsp;}}{\\html{m and m are like terms because they are both m<sup>1</sup> terms.}}'
					+'{\\html{Combine the coefficients: 1 + 1 = 2 }}'),
			template: 'first', textAnswer:  dataUtils.pre('{\\html{&minus;5m<sup>2</sup> + 2m}}')},
			
			// problem 6
			{prob: dataUtils.pre('\\html{(4ab<sup>2</sup> + 3ab) + (&minus;2ab<sup>2</sup> + 2ab)}'),
			buttonValueA: 'T', buttonLabelA: dataUtils.pre('\\html{2ab<sup>2</sup> + 5ab}'), 
			buttonValueB: 'F', buttonLabelB: dataUtils.pre('\\html{7ab<sup>2</sup>}'), 
			buttonValueC: 'F', buttonLabelC: dataUtils.pre('\\html{11ab<sup>2</sup>}'),  
			buttonValueD: 'F', buttonLabelD: dataUtils.pre('\\html{&minus;2ab<sup>2</sup> + ab}'),  answerBtn: 'noAnswer',	
			help: dataUtils.pre('\\rowgrp'
					+'{\\html{We can only combine \"like terms.\"}}{\\html{&nbsp;}}'
					+'{\\html{4ab<sup>2</sup> and &minus;2ab<sup>2</sup> are like terms because they are both ab<sup>2</sup> terms.}}'
					+'{\\html{Combine the coefficients: 4 + (&minus;2) = 2}}'
					+'{\\html{&nbsp;}}{\\html{3ab and 2ab are like terms because they are both ab terms.}}'
					+'{\\html{Combine the coefficients: 3 + 2 = 5 }}'),
			template: 'first', textAnswer:  dataUtils.pre('{\\html{2ab<sup>2</sup> + 5ab}}')},
			
			// problem 7
			{prob: dataUtils.pre('\\html{(6m + 2n + 3) + (&minus;4m &minus; 2n &minus; 1)}'),
			buttonValueA: 'F', buttonLabelA: dataUtils.pre('\\html{10m + 2}'), 
			buttonValueB: 'F', buttonLabelB: dataUtils.pre('\\html{2m + n &minus; 2}'), 
			buttonValueC: 'T', buttonLabelC: dataUtils.pre('\\html{2m + 2}'),  
			buttonValueD: 'F', buttonLabelD: dataUtils.pre('\\html{2m + n + 2}'),  answerBtn: 'noAnswer',
			help: dataUtils.pre('\\rowgrp'
					+'{\\html{We can only combine \"like terms.\"}}{\\html{&nbsp;}}'
					+'{\\html{6m and -4m are like terms because they are both m<sup>1</sup> terms.}}'
					+'{\\html{Combine the coefficients: 6 + (&minus;4) = 2}}'
					+'{\\html{&nbsp;}}{\\html{2n and &minus;2n are like terms because they are both n<sup>1</sup> terms.}}'
					+'{\\html{Combine the coefficients: 2 + (&minus;2) = 0 }}'
					+'{\\html{&nbsp;}}{\\html{3 and &minus;1 are like terms because they are both terms without variables.}}'
					+'{\\html{Combine the coefficients: 3 + (&minus;1) = 2 }}'),
			template: 'first', textAnswer:  dataUtils.pre('{\\html{2m + 2}}')},
			
			// problem 8
			{prob: dataUtils.pre('\\html{(&minus;3mn<sup>2</sup>+3m&minus;2) + (2mn<sup>2</sup>+3m+2)}'),
			buttonValueA: 'F', buttonLabelA: dataUtils.pre('\\html{&minus;5mn<sup>2</sup> + 6m}'), 
			buttonValueB: 'F', buttonLabelB: dataUtils.pre('\\html{&minus;mn<sup>2</sup> &minus; 4}'), 
			buttonValueC: 'F', buttonLabelC: dataUtils.pre('\\html{5mn<sup>2</sup> + 6m + 2}'),  
			buttonValueD: 'T', buttonLabelD: dataUtils.pre('\\html{&minus;mn<sup>2</sup> + 6m}'),  answerBtn: 'noAnswer',
			help: dataUtils.pre('\\rowgrp'
					+'{\\html{We can only combine \"like terms.\"}}{\\html{&nbsp;}}'
					+'{\\html{&minus;3mn<sup>2</sup> and 2mn<sup>2</sup> are like terms because they are both mn<sup>2</sup> terms.}}'
					+'{\\html{Combine the coefficients: &minus;3 + 2 = &minus;1}}'
					+'{\\html{&nbsp;}}{\\html{3m and 3m are like terms because they are both m<sup>1</sup> terms.}}'
					+'{\\html{Combine the coefficients: 3 + 3 = 6 }}'
					+'{\\html{&nbsp;}}{\\html{&minus;2 and 2 are like terms because they are both terms without variables.}}'
					+'{\\html{Combine the coefficients: &minus;2 + 2 = 0 }}'),
			template: 'first', textAnswer: dataUtils.pre('{\\html{&minus;mn<sup>2</sup> + 6m}}')},
			
			// problem 9
			{prob: dataUtils.pre('\\grp{\\html{(}}{\\frac{\\fracstr{x&sup2;}}{\\fracstr{5}}}{\\html{&minus;}}{\\frac{\\fracstr{2y}}{\\fracstr{3}}}{\\html{)}}{\\html{+}}{\\html{(}}{\\frac{\\fracstr{2x&sup2;}}{\\fracstr{5}}}{\\html{&minus;}}{\\frac{\\fracstr{y}}{\\fracstr{2}}}{\\html{)}}'),
			buttonValueA: 'T', buttonLabelA: dataUtils.pre('\\grp{\\frac{\\fracstr{3x&sup2;}}{\\fracstr{5}}}{\\html{&minus;}}{\\frac{\\fracstr{7y}}{\\fracstr{6}}}'), 
			buttonValueB: 'F', buttonLabelB: dataUtils.pre('\\grp{\\frac{\\fracstr{2x&sup2;}}{\\fracstr{25}}}{\\html{&minus;}}{\\frac{\\fracstr{1y}}{\\fracstr{3}}}'),
			buttonValueC: 'F', buttonLabelC: dataUtils.pre('\\grp{\\frac{\\fracstr{3x&sup3;}}{\\fracstr{25}}}{\\html{&minus;}}{\\frac{\\fracstr{7y}}{\\fracstr{6}}}'),  
			buttonValueD: 'F', buttonLabelD: dataUtils.pre('\\grp{\\frac{\\fracstr{3x&sup3;}}{\\fracstr{5}}}{\\html{ + }}{\\frac{\\fracstr{7y}}{\\fracstr{6}}}'),  answerBtn: 'noAnswer',
			help: dataUtils.pre('\\rowgrp'
					+'{\\html{We can only combine \"like terms.\"}}{\\html{&nbsp;}}'
					+'{\\html{<sup>x<sup>2</sup></sup>&#8260;<sub>5</sub> and <sup>2x<sup>2</sup></sup>&#8260;<sub>5</sub> are like terms because they are both x<sup>2</sup> terms.}}'
					+'{\\html{Combine the coefficients: <sup>1</sup>&#8260;<sub>5</sub> + <sup>2</sup>&#8260;<sub>5</sub> = <sup>3</sup>&#8260;<sub>5</sub>}}'
					+'{\\html{&nbsp;}}{\\html{<sup>&minus;2y</sup>&#8260;<sub>3</sub> and <sup>y</sup>&#8260;<sub>2</sub> are like terms because they are both y<sup>1</sup> terms.}}'
					+'{\\html{Combine the coefficients: <sup>&minus;2</sup>&#8260;<sub>3</sub> + (<sup>&minus;1</sup>&#8260;<sub>2</sub>)  = <sup>&minus;7</sup>&#8260;<sub>6</sub>  }}'),
			template: 'first', textAnswer: dataUtils.pre('{\\frac{\\fracstr{3x&sup2;}}{\\fracstr{5}}}{\\html{&minus;}}{\\frac{\\fracstr{7y}}{\\fracstr{6}}}')},
			
			// problem 10
			{prob: dataUtils.pre('\\grp{\\html{(}}{\\frac{\\fracstr{a&sup2;}}{\\fracstr{4}}}{\\html{&minus;}}{\\frac{\\fracstr{3a}}{\\fracstr{4}}}{\\html{)}}{\\html{+}}{\\html{(&minus;}}{\\frac{\\fracstr{a&sup2;}}{\\fracstr{4}}}{\\html{+}}{\\frac{\\fracstr{2a}}{\\fracstr{5}}}{\\html{)}}'),
			buttonValueA: 'F', buttonLabelA: dataUtils.pre('\\grp{\\frac{\\fracstr{a&sup3;}}{\\fracstr{16}}}{\\html{&minus;}}{\\frac{\\fracstr{6a}}{\\fracstr{20}}}'), 
			buttonValueB: 'F', buttonLabelB: dataUtils.pre('\\grp{\\frac{\\fracstr{a&sup2;}}{\\fracstr{4}}}{\\html{&minus;}}{\\frac{\\fracstr{a}}{\\fracstr{4}}}'),
			buttonValueC: 'T', buttonLabelC: dataUtils.pre('\\grp{\\html{&minus;}}{\\frac{\\fracstr{7a}}{\\fracstr{20}}}'),  
			buttonValueD: 'F', buttonLabelD: dataUtils.pre('\\grp{\\html{&minus;}}{\\frac{\\fracstr{3a&sup2;}}{\\fracstr{10}}}'),  answerBtn: 'noAnswer',
			help: dataUtils.pre('\\rowgrp'
					+'{\\html{We can only combine \"like terms.\"}}{\\html{&nbsp;}}'
					+'{\\html{<sup>a<sup>2</sup></sup>&#8260;<sub>4</sub> and <sup>&minus;a<sup>2</sup></sup>&#8260;<sub>4</sub> are like terms because they are both a<sup>2</sup> terms.}}'
					+'{\\html{Combine the coefficients: <sup>1</sup>&#8260;<sub>4</sub> + (<sup>&minus;1</sup>&#8260;<sub>4</sub>) = 0}}'
					+'{\\html{&nbsp;}}{\\html{<sup>&minus;3a</sup>&#8260;<sub>4</sub> and <sup>2a</sup>&#8260;<sub>5</sub> are like terms because they are both a<sup>1</sup> terms.}}'
					+'{\\html{Combine the coefficients: <sup>&minus;3</sup>&#8260;<sub>4</sub> + <sup>2</sup>&#8260;<sub>5</sub>  = <sup>&minus;7</sup>&#8260;<sub>20</sub>  }}'),
			template: 'first', textAnswer: dataUtils.pre('{\\html{&minus;}}{\\frac{\\fracstr{7a}}{\\fracstr{20}}}'),},
			];

	return dataUtils.build(desc, template, data);
}]);