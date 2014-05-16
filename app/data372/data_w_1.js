/*global angular */

angular.module('mathSkills').service('data_w_1', ['dataUtils', function (dataUtils) {
    var desc = {
			title: 'W.1 Simplifying Expressions',
    		path: 'W.1-simplifying-expressions',
            children: []
        },
        template = {
			first: {
                title: 'Simplifying Expressions',
                children: [{
                    title: 'Main Answer',
                    children: [{
						problem: '$prob',
						answer: '\\rowgrp'
									+'{\\grp{\\html{\xA0 \xA0 \xA0coffiecient : }}{$val1}}'
									+'{\\grp{\\html{\xA0 \xA0 \xA0variable(s) : }}{$val2}}'
									+'{\\grp{\\html{\xA0 \xA0 \xA0 \xA0\xA0 \xA0degree : }}{$val3}}',
                       controls: {
									"checkAnswer": true,
									"help": '$help'
							}
						}]
					}]
				},
				second: {
	                title: 'Evaluate Signed Expressions',
	                children: [{
	                    title: 'Main Answer',
	                    children: [{
							problem: '\\rowgrp'
									  +'$prob',
							answer: '\\rowgrp'
                                	+'{$answer}',
	                       controls: {
										"checkAnswer": true,
										"help": '\\rowgrp'
												+'$help'
												
								}
							}]
						}]
					},	
        },
        data = [
			
			// problem 1
			{prob: dataUtils.pre('\\rowgrp{\\grp{\\html{Identify the coefficient, the variable(s), and the degree of the following term: }}}{\\html{&nbsp;}}{\\grp{\\html{2x<sup>3</sup>}}}{\\html{&nbsp;}}{\\grp{\\html{If there is no variable, write \"none\".}}}'),
			val1: dataUtils.pre('\\input{2}'), 
			val2: dataUtils.pre('\\input{x}'),
			val3: dataUtils.pre('\\input{3}'),
			template: 'first',
			help: dataUtils.pre('\\rowgrp{\\html{For the term of 2x<sup>3</sup> :}}{\\html{&nbsp;}}{\\html{The coefficient: 2}}{\\html{&nbsp;}}{\\html{The variable(s): x}}{\\html{&nbsp;}}{\\html{The degree: 3}}') },
			
			// problem 2
			{prob: dataUtils.pre('\\rowgrp{\\grp{\\html{Identify the coefficient, the variable(s), and the degree of the following term: }}}{\\html{&nbsp;}}{\\grp{\\html{-4m<sup>5</sup>}}}{\\html{&nbsp;}}{\\grp{\\html{If there is no variable, write \"none\".}}}'),
			val1: dataUtils.pre('\\input{-4}'), 
			val2: dataUtils.pre('\\input{m}'),
			val3: dataUtils.pre('\\input{5}'),
			template: 'first',
			help: dataUtils.pre('\\rowgrp{\\html{For the term of &minus;4m<sup>5</sup> :}}{\\html{&nbsp;}}{\\html{The coefficient: &minus;4}}{\\html{&nbsp;}}{\\html{The variable(s): m}}{\\html{&nbsp;}}{\\html{The degree: 5}}') },
													
			// problem 3
			{prob: dataUtils.pre('\\rowgrp{\\grp{\\html{Identify the coefficient, the variable(s), and the degree of the following term: }}}{\\html{&nbsp;}}{\\grp{\\html{6.25x<sup>2</sup>}}}{\\html{&nbsp;}}{\\grp{\\html{If there is no variable, write \"none\".}}}'),
			val1: dataUtils.pre('\\input{6.25}'), 
			val2: dataUtils.pre('\\input{x}'),
			val3: dataUtils.pre('\\input{2}'),	
			template: 'first',
			help: dataUtils.pre('\\rowgrp{\\html{For the term of 6.25x<sup>2</sup> :}}{\\html{&nbsp;}}{\\html{The coefficient: 6.25}}{\\html{&nbsp;}}{\\html{The variable(s): x}}{\\html{&nbsp;}}{\\html{The degree: 2}}') },
				
			// problem 4
			{prob: dataUtils.pre('\\rowgrp{\\grp{\\html{Identify the coefficient, the variable(s), and the degree of the following term: }}}{\\html{&nbsp;}}{\\grp{\\frac{\\fracstr{3y}}{\\fracstr{4}}}}{\\html{&nbsp;}}{\\grp{\\html{If there is no variable, write \"none\".}}}'),
			val1: dataUtils.pre('\\frac{\\input{3}}{\\input{4}}'), 
			val2: dataUtils.pre('\\input{y}'),
			val3: dataUtils.pre('\\input{1}'),
			template: 'first',
			help: dataUtils.pre('\\rowgrp{\\grp{\\html{For the term of}}{\\frac{\\fracstr{3y}}{\\fracstr{4}}}{\\html{:}}}{\\html{&nbsp;}}{\\grp{\\html{The variable of y has an \"invisible\" exponent of 1; therefore:}}}{\\html{&nbsp;}}{\\grp{\\html{The coefficient:}}{\\frac{\\fracstr{3}}{\\fracstr{4}}}}{\\html{&nbsp;}}{\\html{The variable(s): y}}{\\html{&nbsp;}}{\\html{The degree: 1}}'),
			},
		
			// problem 5
			{prob: dataUtils.pre('\\rowgrp{\\grp{\\html{Identify the coefficient, the variable(s), and the degree of the following term: }}}{\\html{&nbsp;}}{\\grp{\\frac{\\fracstr{-3a}}{\\fracstr{5}}}}{\\html{&nbsp;}}{\\grp{\\html{If there is no variable, write \"none\".}}}'),
			val1: dataUtils.pre('\\frac{\\input{-3}}{\\input{5}}'), 
			val2: dataUtils.pre('\\input{a}'),
			val3: dataUtils.pre('\\input{1}'),
			template: 'first',
			help: dataUtils.pre('\\rowgrp{\\grp{\\html{For the term of}}{\\frac{\\fracstr{-3a}}{\\fracstr{5}}}{\\html{:}}}{\\html{&nbsp;}}{\\grp{\\html{The variable of a has an \"invisible\" exponent of 1; therefore:}}}{\\html{&nbsp;}}{\\grp{\\html{The coefficient:}}{\\frac{\\fracstr{-3}}{\\fracstr{5}}}}{\\html{&nbsp;}}{\\html{The variable(s): a}}{\\html{&nbsp;}}{\\html{The degree: 1}}')},

			// problem 6
			{prob: dataUtils.pre('\\rowgrp{\\grp{\\html{Identify the coefficient, the variable(s), and the degree of the following term: }}}{\\html{&nbsp;}}{\\grp{\\html{8}}}{\\html{&nbsp;}}{\\grp{\\html{If there is no variable, write \"none\".}}}'),
			val1: dataUtils.pre('\\input{8}'), 
			val2: dataUtils.pre('\\input{none}'),
			val3: dataUtils.pre('\\input{0}'),	
			template: 'first',
			help: dataUtils.pre('\\rowgrp{\\html{For the term of 8 :}}{\\html{&nbsp;}}{\\html{8 can also be written as 8x<sup>0</sup> because x<sup>0</sup> equals 1.}}{\\html{8 <font size = 4>&bull;</font> x<sup>0</sup> is the same as 8 <font size = 4>&bull;</font> 1, which equals 8; therefore:}}{\\html{&nbsp;}}{\\html{The coefficient: 8}}{\\html{&nbsp;}}{\\html{The variable(s): none}}{\\html{&nbsp;}}{\\html{The degree: 0}}') },
			
			// problem 7
			{prob: dataUtils.pre('\\rowgrp{\\grp{\\html{Identify the coefficient, the variable(s), and the degree of the following term: }}}{\\html{&nbsp;}}{\\grp{\\frac{\\fracstr{x}}{\\fracstr{7}}}}{\\html{&nbsp;}}{\\grp{\\html{If there is no variable, write \"none\".}}}'),
			val1: dataUtils.pre('\\frac{\\input{1}}{\\input{7}}'), 
			val2: dataUtils.pre('\\input{x}'),
			val3: dataUtils.pre('\\input{1}'),
			template: 'first',
			help: dataUtils.pre('\\rowgrp{\\grp{\\html{For the term of }}{\\frac{\\fracstr{x}}{\\fracstr{7}}}{\\html{:}}}{\\html{&nbsp;}}{\\html{Because there is an \"invisible\" 1 in front of the x, the term <sup>x</sup>&#8260;<sub>7</sub> can also be written as <sup>1</sup>&#8260;<sub>7</sub> <font size = 4>&bull;</font> x.  The variable of x also has an \"invisible\" exponent of 1. Therefore:}}{\\html{&nbsp;}}{\\grp{\\html{The coefficient:}}{\\frac{\\fracstr{1}}{\\fracstr{7}}}}{\\html{&nbsp;}}{\\html{The variable:  x}}{\\html{&nbsp;}}{\\html{The degree:  3}}')
			},
			
			// problem 8
			{prob: dataUtils.pre('\\rowgrp{\\grp{\\html{Identify the coefficient, the variable(s), and the degree of the following term: }}}{\\html{&nbsp;}}{\\grp{\\html{-6ab<sup>2</sup>}}}{\\html{&nbsp;}}{\\grp{\\html{If there is no variable, write \"none\".}}}'),
			val1: dataUtils.pre('\\input{-6}'), 
			val2: dataUtils.pre('\\input{ab}'),
			val3: dataUtils.pre('\\input{3}'),	
			template: 'first',
			help: dataUtils.pre('\\rowgrp{\\html{For the term of &minus;6ab<sup>2</sup> :}}{\\html{&nbsp;}}{\\html{Because there are two variables, the exponents above a and b are <span class=underline>added together</span> to get the degree. The exponent above the a is 1, and the exponent above b is 2; therefore: }}{\\html{&nbsp;}}{\\html{The coefficient: &minus;6}}{\\html{&nbsp;}}{\\html{The variable(s): ab}}{\\html{&nbsp;}}{\\html{The degree: 3}}') },
			
			// problem 9
			{prob: dataUtils.pre('{\\rowgrp{\\grp{\\html{Are the following terms \"like\" terms or \"unlike\" terms? }}}{\\html{&nbsp;}}{\\grp{\\html{6x and -3x}}}'),
			answer: dataUtils.pre('\\rowgrp{$$button1}{$$button2}'),
            button1: dataUtils.pre('\\grp{\\btn{A}{T}{marg}}{\\str{Like}}'),
            button2: dataUtils.pre('\\grp{\\btn{B}{F}{marg}}{\\str{Unlike}}'),
			template: 'second', answerBtn: 'noAnswer',
			help: dataUtils.pre('{\\rowgrp{\\html{Like terms must have <span class=underline>identical</span> variable(s) and the exact same exponent raised above any specific variable(s). It does not matter what the coefficients are.}}{\\html{&nbsp;}}{\\html{6x and &minus;3x are \"like\" terms because they both have an \"x\" as their only variable(s) and a degree of one (there is an identical exponent of 1 above each x). }}') },
				
			// problem 10
			{prob: dataUtils.pre('{\\rowgrp{\\grp{\\html{Are the following terms \"like\" terms or \"unlike\" terms? }}}{\\html{&nbsp;}}{\\grp{\\html{12ab<sup>2</sup> and 1.6ab<sup>2</sup>}}}'),
			answer: dataUtils.pre('\\rowgrp{$$button1}{$$button2}'),
            button1: dataUtils.pre('\\grp{\\btn{A}{T}{marg}}{\\str{Like}}'),
            button2: dataUtils.pre('\\grp{\\btn{B}{F}{marg}}{\\str{Unlike}}'),
			template: 'second', answerBtn: 'noAnswer',
			help: dataUtils.pre('{\\rowgrp{\\html{Like terms must have <span class=underline>identical</span> variable(s) and the exact same exponent raised above any specific variable(s). It does not matter what the coefficients are.}}{\\html{&nbsp;}}{\\html{12ab<sup>2</sup> and 1.6ab<sup>2</sup> are \"like\" terms because they both have an \"ab\" as their only variable(s) and a degree of 3 (there is an exponent of 1 above each a and an exponent of 2 above each b). }}') },
					
			// problem 11
			{prob: dataUtils.pre('{\\rowgrp{\\grp{\\html{Are the following terms \"like\" terms or \"unlike\" terms? }}}{\\html{&nbsp;}}{\\grp{\\frac{\\fracstr{2m}}{\\fracstr{3}}}{\\html{and 4mn}}}'),
			answer: dataUtils.pre('\\rowgrp{$$button1}{$$button2}'),
            button1: dataUtils.pre('\\grp{\\btn{A}{F}{marg}}{\\str{Like}}'),
            button2: dataUtils.pre('\\grp{\\btn{B}{T}{marg}}{\\str{Unlike}}'),
			template: 'second', answerBtn: 'noAnswer',
			help: dataUtils.pre('{\\rowgrp{\\html{Like terms must have <span class=underline>identical</span> variable(s) and the exact same exponent raised above any specific variable(s). It does not matter what the coefficients are.}}{\\html{&nbsp;}}{\\html{<sup>2m</sup>&#8260;<sub>3</sub> and 4mn are \"unlike\" terms because they do <span class=underline>not</span> have identical variable(s). The first term has only an m; the second term has an m <span class=underline>and</span> an n. }}') },
					
			// problem 12
			{prob: dataUtils.pre('{\\rowgrp{\\grp{\\html{Are the following terms \"like\" terms or \"unlike\" terms? }}}{\\html{&nbsp;}}{\\grp{\\html{14x<sup>2</sup>y<sup>3</sup> and -7x<sup>3</sup>y<sup>3</sup>}}}'),
			answer: dataUtils.pre('\\rowgrp{$$button1}{$$button2}'),
            button1: dataUtils.pre('\\grp{\\btn{A}{F}{marg}}{\\str{Like}}'),
            button2: dataUtils.pre('\\grp{\\btn{B}{T}{marg}}{\\str{Unlike}}'),
			template: 'second', answerBtn: 'noAnswer',
			help: dataUtils.pre('{\\rowgrp{\\html{Like terms must have <span class=underline>identical</span> variable(s) and the exact same exponent raised above any specific variable(s). It does not matter what the coefficients are.}}{\\html{&nbsp;}}{\\html{14x<sup>2</sup>y<sup>3</sup> and &minus;7x<sup>3</sup>y<sup>3</sup>are \"unlike\" terms because they do not have the exact same exponents raised above each specific variable(s). The first term has an exponent of 2 above the x; the second term has an exponent of 3 above the x.}}') },				
			];

	return dataUtils.build(desc, template, data);
}]);