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
								+'{\\str{Simplify:}}'
								+'{\\str{&nbsp;}}'
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
								+'{\\str{&nbsp;}}'
								+'{css{\\grp{\\str{Answer: }}$textAnswer}{help-answer-text}}'
							}
						}]
					}]
				},
				fractions: {
                title: 'Addition of Monomials and Polynomials',
                children: [{
                    title: 'Main Answer',
                    children: [{
						problem: '\\rowgrp'
								+'{\\str{Simplify:}}'
								+'{\\str{&nbsp;}}'
								+'{\\grp{$prob}}',
							
						answer: '\\css'
									+'{\\rowgrp'
										+'{\\grp{\\btn{A}{$buttonValueA}{marg}}{$buttonLabelA}}'
										+'{\\grp{\\btn{B}{$buttonValueB}{marg}}{$buttonLabelB}}'
										+'{\\grp{\\btn{C}{$buttonValueC}{marg}}{$buttonLabelC}}'
										+'{\\grp{\\btn{D}{$buttonValueD}{marg}}{$buttonLabelD}}'
									+'}'
									+'{tdButtonHeight}',
                       controls: {
                    	   "checkAnswer": true,
                    	   "help": '\\rowgrp'
										+'{\\str{We can only combine \"like terms.\"}}'
										+'{\\str{&nbsp;}}'
										+'{\\grp'
											+'{$firstFraction}'
											+'{\\str{&nbsp; and &nbsp;}}'
											+'{$secondFraction}'
										+'}'
										+'{\\str{&nbsp;}}'
										+'{\\grp'	
											+'{\\str{are like terms because they are both }}'
											+'{$firstTerm}'
											+'{\\str{ terms.}}'
										+'}'
										+'{\\str{Combine the coefficients:}}'
										+'{\\str{&nbsp;}}'
										+'{$firstCoefficients}'
										+'{\\str{&nbsp;}}'
										+'{\\grp'
											+'{\\str{Similarly, &nbsp;}}'
											+'{$thirdFraction}'
											+'{\\str{&nbsp; and &nbsp;}}'
											+'{$fourthFraction}'
										+'}'
										+'{\\str{&nbsp;}}'
										+'{\\grp'	
											+'{\\str{are like terms because they are both }}'
											+'{$secondTerm}'
											+'{\\str{ terms.}}'
										+'}'
										+'{\\str{Combine the coefficients:}}'
										+'{\\str{&nbsp;}}'
										+'{$secondCoefficients}'
										+'{\\str{&nbsp;}}'
										+'{css{\\grp{\\str{Answer: }}$textAnswer}{help-answer-text}}'
							}
						}]
					}]
				}
        },
        data = [
			
			// problem 1
			{prob: dataUtils.pre('\\str{3a + 7a}'),
			buttonValueA: 'F', buttonLabelA: dataUtils.pre('\\str{4a}'), 
			buttonValueB: 'T', buttonLabelB: dataUtils.pre('\\str{10a}'),  
			buttonValueC: 'F', buttonLabelC: dataUtils.pre('\\str{10a<sup>2</sup>}'),  
			buttonValueD: 'F', buttonLabelD: dataUtils.pre('\\str{21a}'), answerBtn: 'noAnswer',
			help: dataUtils.pre('\\rowgrp'
					+'{\\str{We can only combine \"like terms.\"}}{\\str{&nbsp;}}'
					+'{\\str{3a and 7a are like terms because they are both a<sup>1</sup>\ terms.}}'
					+'{\\str{&nbsp;}}{\\str{Combine the coefficients: 3 + 7 = 10}}'),
			template: 'first', textAnswer:  dataUtils.pre('{\\str{10a}}')},
			
			// problem 2
			{prob: dataUtils.pre('\\str{-4m<sup>2</sup> + 2m<sup>2</sup>}'),
			buttonValueA: 'T', buttonLabelA: dataUtils.pre('\\str{-2m<sup>2</sup>}'), 
			buttonValueB: 'F', buttonLabelB: dataUtils.pre('\\str{-8m<sup>4</sup>}'), 
			buttonValueC: 'F', buttonLabelC: dataUtils.pre('\\str{<span class=hiddenSpace>-</span>2m<sup>2</sup>}'), 
			buttonValueD: 'F', buttonLabelD: dataUtils.pre('\\str{<span class=hiddenSpace>-</span>6m<sup>4</sup>}'),  answerBtn: 'noAnswer',	
			help: dataUtils.pre('\\rowgrp'
					+'{\\str{We can only combine \"like terms.\"}}{\\str{&nbsp;}}'
					+'{\\str{-4m<sup>2</sup> and 2m<sup>2</sup> are like terms because they are both m<sup>2</sup> terms.}}'
					+'{\\str{&nbsp;}}{\\str{Combine the coefficients: -4 + 2 = -2}}'),
			template: 'first', textAnswer:  dataUtils.pre('{\\str{-2m<sup>2</sup>}}')},
			
			// problem 3
			{prob: dataUtils.pre('\\str{-5x<sup>2</sup>y + 2x + x<sup>2</sup>y}'),
			buttonValueA: 'F', buttonLabelA: dataUtils.pre('\\str{-2x<sup>2</sup>y}'), 
			buttonValueB: 'F', buttonLabelB: dataUtils.pre('\\str{-6x<sup>4</sup>y<sup>2</sup>}'), 
			buttonValueC: 'T', buttonLabelC: dataUtils.pre('\\str{-4x<sup>2</sup>y + 2x}'),  
			buttonValueD: 'F', buttonLabelD: dataUtils.pre('\\str{<span class=hiddenSpace>-</span>6x<sup>2</sup>y + 2x}'),  answerBtn: 'noAnswer',			
			help: dataUtils.pre('\\rowgrp'
					+'{\\str{We can only combine \"like terms.\"}}{\\str{&nbsp;}}'
					+'{\\str{-5x<sup>2</sup>y and x<sup>2</sup>y are like terms because they are both x<sup>2</sup>y terms.}}'
					+'{\\str{&nbsp;}}{\\str{Combine the coefficients: -5 + 1 = -4}}'
					+'{\\str{&nbsp;}}{\\str{The term 2x stays the same. There is no other x<sup>1</sup> term. }}'),
			template: 'first', textAnswer:  dataUtils.pre('{\\str{-4x<sup>2</sup>y + 2x}}')},
			
			// problem 4
			{prob: dataUtils.pre('\\str{7x + (2xy + 5x)}'),
			buttonValueA: 'F', buttonLabelA: dataUtils.pre('\\str{7x<sup>2</sup>y + 5x}'), 
			buttonValueB: 'F', buttonLabelB: dataUtils.pre('\\str{14xy}'), 
			buttonValueC: 'F', buttonLabelC: dataUtils.pre('\\str{9xy + 5x}'),  
			buttonValueD: 'T', buttonLabelD: dataUtils.pre('\\str{2xy + 12x}'),  answerBtn: 'noAnswer',						
			help: dataUtils.pre('\\rowgrp'
					+'{\\str{We can only combine \"like terms.\"}}{\\str{&nbsp;}}'
					+'{\\str{7x and 5x are like terms because they are both x<sup>1</sup> terms.}}'
					+'{\\str{&nbsp;}}{\\str{Combine the coefficients: 7 + 5 = 12}}'
					+'{\\str{&nbsp;}}{\\str{The term 2xy stays the same. There is no other xy term. }}'),
			template: 'first', textAnswer:  dataUtils.pre('{\\str{12x + 2xy}}')},
			
			// problem 5
			{prob: dataUtils.pre('\\str{(-2m<sup>2</sup> + m) + (-3m<sup>2</sup> + m)}'),
			buttonValueA: 'F', buttonLabelA: dataUtils.pre('\\str{-6m<sup>2</sup> + m}'), 
			buttonValueB: 'F', buttonLabelB: dataUtils.pre('\\str{-3m<sup>4</sup>}'), 
			buttonValueC: 'T', buttonLabelC: dataUtils.pre('\\str{-5m<sup>2</sup> + 2m}'),  
			buttonValueD: 'F', buttonLabelD: dataUtils.pre('\\str{-2m<sup>2</sup> + 5m}'),  answerBtn: 'noAnswer',	
			help: dataUtils.pre('\\rowgrp'
					+'{\\str{We can only combine \"like terms.\"}}{\\str{&nbsp;}}'
					+'{\\str{-2m<sup>2</sup> and -3m<sup>2</sup> are like terms because they are both m<sup>2</sup> terms.}}'
					+'{\\str{Combine the coefficients: -2 + (-3) = -5}}'
					+'{\\str{&nbsp;}}{\\str{m and m are like terms because they are both m<sup>1</sup> terms.}}'
					+'{\\str{Combine the coefficients: 1 + 1 = 2 }}'),
			template: 'first', textAnswer:  dataUtils.pre('{\\str{-5m<sup>2</sup> + 2m}}')},
			
			// problem 6
			{prob: dataUtils.pre('\\str{(4ab<sup>2</sup> + 3ab) + (-2ab<sup>2</sup> + 2ab)}'),
			buttonValueA: 'T', buttonLabelA: dataUtils.pre('\\str{<span class=hiddenSpace>-</span>2ab<sup>2</sup> + 5ab}'), 
			buttonValueB: 'F', buttonLabelB: dataUtils.pre('\\str{<span class=hiddenSpace>-</span>7ab<sup>2</sup>}'), 
			buttonValueC: 'F', buttonLabelC: dataUtils.pre('\\str{<span class=hiddenSpace>-</span>11ab<sup>2</sup>}'),  
			buttonValueD: 'F', buttonLabelD: dataUtils.pre('\\str{-2ab<sup>2</sup> + ab}'),  answerBtn: 'noAnswer',	
			help: dataUtils.pre('\\rowgrp'
					+'{\\str{We can only combine \"like terms.\"}}{\\str{&nbsp;}}'
					+'{\\str{4ab<sup>2</sup> and -2ab<sup>2</sup> are like terms because they are both ab<sup>2</sup> terms.}}'
					+'{\\str{Combine the coefficients: 4 + (-2) = 2}}'
					+'{\\str{&nbsp;}}{\\str{3ab and 2ab are like terms because they are both ab terms.}}'
					+'{\\str{Combine the coefficients: 3 + 2 = 5 }}'),
			template: 'first', textAnswer:  dataUtils.pre('{\\str{2ab<sup>2</sup> + 5ab}}')},
			
			// problem 7
			{prob: dataUtils.pre('\\str{(6m + 2n + 3) + (-4m - 2n - 1)}'),
			buttonValueA: 'F', buttonLabelA: dataUtils.pre('\\str{10m + 2}'), 
			buttonValueB: 'F', buttonLabelB: dataUtils.pre('\\str{2m + n - 2}'), 
			buttonValueC: 'T', buttonLabelC: dataUtils.pre('\\str{2m + 2}'),  
			buttonValueD: 'F', buttonLabelD: dataUtils.pre('\\str{2m + n + 2}'),  answerBtn: 'noAnswer',
			help: dataUtils.pre('\\rowgrp'
					+'{\\str{We can only combine \"like terms.\"}}{\\str{&nbsp;}}'
					+'{\\str{6m and -4m are like terms because they are both m<sup>1</sup> terms.}}'
					+'{\\str{Combine the coefficients: 6 + (-4) = 2}}'
					+'{\\str{&nbsp;}}{\\str{2n and -2n are like terms because they are both n<sup>1</sup> terms.}}'
					+'{\\str{Combine the coefficients: 2 + (-2) = 0 }}'
					+'{\\str{&nbsp;}}{\\str{3 and -1 are like terms because they are both terms without variables.}}'
					+'{\\str{Combine the coefficients: 3 + (-1) = 2 }}'),
			template: 'first', textAnswer:  dataUtils.pre('{\\str{2m + 2}}')},
			
			// problem 8
			{prob: dataUtils.pre('\\str{(-3mn<sup>2</sup>+3m-2) + (2mn<sup>2</sup>+3m+2)}'),
			buttonValueA: 'F', buttonLabelA: dataUtils.pre('\\str{-5mn<sup>2</sup> + 6m}'), 
			buttonValueB: 'F', buttonLabelB: dataUtils.pre('\\str{-mn<sup>2</sup> - 4}'), 
			buttonValueC: 'F', buttonLabelC: dataUtils.pre('\\str{<span class=hiddenSpace>-</span>5mn<sup>2</sup> + 6m + 2}'),  
			buttonValueD: 'T', buttonLabelD: dataUtils.pre('\\str{-mn<sup>2</sup> + 6m}'),  answerBtn: 'noAnswer',
			help: dataUtils.pre('\\rowgrp'
					+'{\\str{We can only combine \"like terms.\"}}{\\str{&nbsp;}}'
					+'{\\str{-3mn<sup>2</sup> and 2mn<sup>2</sup> are like terms because they are both mn<sup>2</sup> terms.}}'
					+'{\\str{Combine the coefficients: -3 + 2 = -1}}'
					+'{\\str{&nbsp;}}{\\str{3m and 3m are like terms because they are both m<sup>1</sup> terms.}}'
					+'{\\str{Combine the coefficients: 3 + 3 = 6 }}'
					+'{\\str{&nbsp;}}{\\str{-2 and 2 are like terms because they are both terms without variables.}}'
					+'{\\str{Combine the coefficients: -2 + 2 = 0 }}'),
			template: 'first', textAnswer: dataUtils.pre('{\\str{-mn<sup>2</sup> + 6m}}')},
			
			// problem 9
			{prob: dataUtils.pre('\\grp{\\str{(}}{\\frac{\\fracstr{x&sup2;}}{\\fracstr{5}}}{\\str{-}}{\\frac{\\fracstr{2y}}{\\fracstr{3}}}{\\str{)}}{\\str{+}}{\\str{(}}{\\frac{\\fracstr{2x&sup2;}}{\\fracstr{5}}}{\\str{-}}{\\frac{\\fracstr{y}}{\\fracstr{2}}}{\\str{)}}'),
			buttonValueA: 'T', buttonLabelA: dataUtils.pre('\\grp{\\frac{\\fracstr{3x&sup2;}}{\\fracstr{5}}}{\\str{-}}{\\frac{\\fracstr{7y}}{\\fracstr{6}}}'), 
			buttonValueB: 'F', buttonLabelB: dataUtils.pre('\\grp{\\frac{\\fracstr{2x&sup2;}}{\\fracstr{25}}}{\\str{-}}{\\frac{\\fracstr{1y}}{\\fracstr{3}}}'),
			buttonValueC: 'F', buttonLabelC: dataUtils.pre('\\grp{\\frac{\\fracstr{3x&sup3;}}{\\fracstr{25}}}{\\str{-}}{\\frac{\\fracstr{7y}}{\\fracstr{6}}}'),  
			buttonValueD: 'F', buttonLabelD: dataUtils.pre('\\grp{\\frac{\\fracstr{3x&sup3;}}{\\fracstr{5}}}{\\str{ + }}{\\frac{\\fracstr{7y}}{\\fracstr{6}}}'),  answerBtn: 'noAnswer',
			firstFraction: dataUtils.pre('\\frac{\\str{&nbsp;x<sup>2</sup>&nbsp;}}{\\str{5}}'),
			secondFraction: dataUtils.pre('\\frac{\\str{2x<sup>2</sup>&nbsp;}}{\\str{5}}'),
			firstTerm: dataUtils.pre('\\str{x<sup>2</sup>}'),
			firstCoefficients: dataUtils.pre('\\grp'
											+'{\\frac{\\str{1}}{\\str{5}}}'
											+'{\\str{+}}'
											+'{\\frac{\\str{2}}{\\str{5}}}'
											+'{\\str{ = }}'
											+'{\\frac{\\str{3}}{\\str{5}}}'
								),
			thirdFraction: dataUtils.pre('\\frac{\\str{-2y&nbsp;&nbsp;}}{\\str{3}}'),
			fourthFraction: dataUtils.pre('\\frac{\\str{&nbsp;y&nbsp;}}{\\str{2}}'),
			secondTerm: dataUtils.pre('\\str{y<sup>1</sup>}'),
			secondCoefficients: dataUtils.pre('\\grp'
											+'{\\mixed{\\str{-}}{\\frac{\\str{2}}{\\str{3}}}}'
											+'{\\str{+}}'
											+'{\\str{(}}'
											+'{\\mixed{\\str{-}}{\\frac{\\str{1}}{\\str{2}}}}' 
											+'{\\str{)}}'
											+'{\\str{ = }}'
											+'{\\mixed{\\str{-}}{\\frac{\\str{7}}{\\str{6}}}}'
								),
			template: 'fractions', textAnswer: dataUtils.pre('{\\frac{\\fracstr{3x&sup2;}}{\\fracstr{5}}}{\\str{-}}{\\frac{\\fracstr{7y}}{\\fracstr{6}}}')},
			
			// problem 10
			{prob: dataUtils.pre('\\grp{\\str{(}}{\\frac{\\fracstr{a&sup2;}}{\\fracstr{4}}}{\\str{-}}{\\frac{\\fracstr{3a}}{\\fracstr{4}}}{\\str{)}}{\\str{+}}{\\str{(-}}{\\frac{\\fracstr{a&sup2;}}{\\fracstr{4}}}{\\str{+}}{\\frac{\\fracstr{2a}}{\\fracstr{5}}}{\\str{)}}'),
			buttonValueA: 'F', buttonLabelA: dataUtils.pre('\\grp{\\frac{\\fracstr{a&sup3;}}{\\fracstr{16}}}{\\str{-}}{\\frac{\\fracstr{6a}}{\\fracstr{20}}}'), 
			buttonValueB: 'F', buttonLabelB: dataUtils.pre('\\grp{\\frac{\\fracstr{a&sup2;}}{\\fracstr{4}}}{\\str{-}}{\\frac{\\fracstr{a}}{\\fracstr{4}}}'),
			buttonValueC: 'T', buttonLabelC: dataUtils.pre('\\grp{\\mixed{\\str{-}}{\\frac{\\fracstr{7a}}{\\fracstr{20}}}}'),  
			buttonValueD: 'F', buttonLabelD: dataUtils.pre('\\grp{\\mixed{\\str{-}}{\\frac{\\fracstr{&nbsp;3a&sup2;}}{\\fracstr{10}}}}'),  answerBtn: 'noAnswer',
			firstFraction: dataUtils.pre('\\frac{\\str{&nbsp;a<sup>2</sup>&nbsp;}}{\\str{4}}'),
			secondFraction: dataUtils.pre('\\frac{\\str{-a<sup>2</sup>&nbsp;}}{\\str{4}}'),
			firstTerm: dataUtils.pre('\\str{a<sup>2</sup>}'),
			firstCoefficients: dataUtils.pre('\\grp'
											+'{\\frac{\\str{1}}{\\str{4}}}'
											+'{\\str{+}}'
											+'{\\str{(}}'
											+'{\\mixed{\\str{-}}{\\frac{\\str{1}}{\\str{4}}}}'
											+'{\\str{)}}'
											+'{\\str{ = }}'
											+'{\\str{0}}'
								),
			thirdFraction: dataUtils.pre('\\frac{\\str{-3a&nbsp;}}{\\str{4}}'),
			fourthFraction: dataUtils.pre('\\frac{\\str{&nbsp;2a&nbsp;}}{\\str{5}}'),
			secondTerm: dataUtils.pre('\\str{a<sup>1</sup>}'),
			secondCoefficients: dataUtils.pre('\\grp'
											+'{\\mixed{\\str{-}}{\\frac{\\str{3}}{\\str{4}}}}'
											+'{\\str{+}}'
											+'{\\str{(}}'
											+'{\\frac{\\str{2}}{\\str{5}}}' 
											+'{\\str{)}}'
											+'{\\str{ = }}'
											+'{\\mixed{\\str{-}}{\\frac{\\str{7}}{\\str{20}}}}'
								),
			template: 'fractions', textAnswer: dataUtils.pre('{\\str{-}}{\\frac{\\fracstr{7a}}{\\fracstr{20}}}'),},
			];

	return dataUtils.build(desc, template, data);
}]);