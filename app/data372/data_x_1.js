/*global angular */

angular.module('mathSkills').service('data_x_1', ['dataUtils', function (dataUtils) {
    var desc = {
			title: 'X.1 Subtraction of Monomials and Polynomials',
    		path: 'X.1-subtraction-of-monomials-and-polynomials',
            children: []
        },
		 template = {
			first: {
                title: 'Subtraction of Monomials and Polynomials',
                children: [{
                    title: 'Main Answer',
                    children: [{
						problem: '\\rowgrp'
									+'{\\str{Simplify:}}'
									+'{\\str{&nbsp;}}'
									+'{$prob}',
						answer: '\\css'+
									'{\\rowgrp'+
										'{\\ins{Choose the right answer:}}'+
										'{\\grp{\\btn{A}{$buttonValueA}{marg}}{\\html{$buttonLabelA}}}'+
										'{\\grp{\\btn{B}{$buttonValueB}{marg}}{\\html{$buttonLabelB}}}'+
										'{\\grp{\\btn{C}{$buttonValueC}{marg}}{\\html{$buttonLabelC}}}'+
										'{\\grp{\\btn{D}{$buttonValueD}{marg}}{\\html{$buttonLabelD}}}'+
									'}'+
									'{tdButtonHeight50px}',
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
       
		second: {
                title: 'Subtraction of Monomials and Polynomials',
                children: [{
                    title: 'Main Answer',
                    children: [{
						problem: '\\rowgrp'
									+'{\\str{Simplify:}}'
									+'{\\str{&nbsp;}}'
									+'{$prob}',
						answer: '\\css'+
									'{\\rowgrp'+
										'{\\ins{Choose the right answer:}}'+
										'{\\grp{\\btn{A}{$buttonValueA}{marg}}{$buttonLabelA}}'+
										'{\\grp{\\btn{B}{$buttonValueB}{marg}}{$buttonLabelB}}'+
										'{\\grp{\\btn{C}{$buttonValueC}{marg}}{$buttonLabelC}}'+
										'{\\grp{\\btn{D}{$buttonValueD}{marg}}{$buttonLabelD}}'+
									'}'+
									'{tdButtonHeight80px}',
                       controls: {
                    	   "checkAnswer": true,
                    	   "help": '\\rowgrp'
										+'{$help}'
										+'{\\html{&nbsp;}}'
										
										+'{css{\\grp{\\str{Answer: }}$textAnswer}{help-answer-text}}'
										+'{\\html{&nbsp;}}'
							}
						}]
					}]
				},
        },
        data = [
			
			// problem 1
			{prob: dataUtils.pre('\\str{13z - 20z}'),
			help: dataUtils.pre('\\rowgrp'
					+'{\\html{We can only combine \"like terms.\"}}{\\html{&nbsp;}}'
					+'{\\str{\"13z\" and \"-20z\" are like terms because they are both z<sup>1</sup>\ terms.}}'
					+'{\\html{&nbsp;}}{\\str{Combine the coefficients: 13 - 20 = -7}}'),
			template: 'first', textAnswer: '<span class=bigger>-</span>7z', 
			buttonValueA: 'F', buttonLabelA: '<span class=bigger>-</span>33z', 
            buttonValueB: 'T', buttonLabelB: '<span class=bigger>-</span>7z', 
            buttonValueC: 'F', buttonLabelC: '<span class=bigger>&nbsp;</span>33z', 
            buttonValueD: 'F', buttonLabelD: '<span class=bigger>&nbsp;</span>7z'},
			
			// problem 2
			{prob: dataUtils.pre('\\str{-5x - 7x}'),
			help: dataUtils.pre('\\rowgrp'
					+'{\\html{We can only combine \"like terms.\"}}{\\html{&nbsp;}}'
					+'{\\str{\"-5x\" and \"-7x\" are like terms because they are both x<sup>1</sup> terms.}}'
					+'{\\html{&nbsp;}}{\\str{Combine the coefficients: -5 - 7 = -12}}'),
			template: 'first', textAnswer: '<span class=bigger>-</span>12x', 
			buttonValueA: 'T', buttonLabelA: '<span class=bigger>-</span>12x', 
            buttonValueB: 'F', buttonLabelB: '<span class=bigger>&nbsp;</span>12x', 
            buttonValueC: 'F', buttonLabelC: '<span class=bigger>&nbsp;</span>2x', 
            buttonValueD: 'F', buttonLabelD: '<span class=bigger>-</span>2x'},
			
			// problem 3
			{prob: dataUtils.pre('\\str{-3ab - (-6ab)}'),
			help: dataUtils.pre('\\rowgrp'
					+'{\\html{We can only combine \"like terms.\"}}{\\html{&nbsp;}}'
					+'{\\html{First, we must get rid of the double negative.}}'
					+'{\\str{- (-6ab)&nbsp; becomes + 6ab}}'
					+'{\\html{&nbsp;}}{\\str{-3ab - (-6ab)&nbsp; becomes  -3ab + 6ab}}'
					+'{\\html{&nbsp;}}{\\str{\"-3ab\" and \"6ab\" are like terms because they are both \"ab\" terms.}}'
					+'{\\html{&nbsp;}}{\\str{Combine the coefficients: -3 + 6 = 3}}'
					),
			template: 'first', textAnswer: '3ab',
			buttonValueA: 'F', buttonLabelA: '<span class=bigger>-</span>9ab', 
            buttonValueB: 'F', buttonLabelB: '<span class=bigger>&nbsp;</span>9a<sup>2</sup>b<sup>2</sup>', 
            buttonValueC: 'T', buttonLabelC: '<span class=bigger>&nbsp;</span>3ab', 
            buttonValueD: 'F', buttonLabelD: '<span class=bigger>-</span>3ab'},
			
			// problem 4
			{prob: dataUtils.pre('\\grp'
									+'{\\frac'
										+'{\\fracstr{3m}}{\\fracstr{4}}}'
									+'{\\str{ - }}'
									+'{\\frac'
										+'{\\fracstr{7m}}{\\fracstr{8}}}'),
			help: dataUtils.pre('\\rowgrp'
					+'{\\html{We can only combine \"like terms.\"}}{\\html{&nbsp;}}'
					+'{\\grp{\\frac{\\str{3m}}{\\str{4}}}{\\html{and}}{\\frac{\\str{7m}}{\\str{8}}}{\\html{are like terms because they are both \"m\" terms.}}}'
					+'{\\html{&nbsp;}}{\\html{Combine the coefficients:}}'
					+'{\\html{&nbsp;}}'
					+'{\\grp'
						+'{\\frac{\\str{3}}{\\str{4}}}'
						+'{\\str{ - }}'
						+'{\\frac{\\str{7}}{\\str{8}}}'
						+'{\\str{=}}'
						+'{\\str{ -}}'
						+'{\\css'
							+'{\\frac{\\str{1}}{\\str{8}}}'
							+'{fracNoMargin}'
						+'}'
					+'}'),
			template: 'second', 
			textAnswer: dataUtils.pre('{\\html{&nbsp;}}'
									  +'{\\sign{-}}'
									  +'{\\css'
											+'{\\frac{\\html{m}}{\\str{8}}}'
											+'{fracNoMargin}'
										+'}'
										),
				buttonValueA: 'T',
				buttonLabelA: dataUtils.pre('\\frac{\\fracstr{-m}}{\\fracstr{8}}'),
				buttonValueB: 'F',
				buttonLabelB: dataUtils.pre('\\frac{\\fracstr{-13m}}{\\fracstr{8}}'),
				buttonValueC: 'F',
				buttonLabelC: dataUtils.pre('\\frac{\\fracstr{13m}}{\\fracstr{8}}'),
				buttonValueD: 'F',
				buttonLabelD: dataUtils.pre('\\frac{\\fracstr{8}}{\\fracstr{m}}'),
			},
			// problem 5 
			{prob: dataUtils.pre('\\str{-8r - (-3r) - 2r}'),
			help: dataUtils.pre('\\rowgrp'
					+'{\\html{We can only combine \"like terms.\"}}'
					+'{\\html{&nbsp;}}'
					+'{\\html{First, we must get rid of the double negative.}}'
					+'{\\html{&nbsp;}}'
					+'{\\str{- (-3r) becomes + 3r}}'
					+'{\\html{&nbsp;}}'
					+'{\\str{-8r - (-3r) - 2r  becomes  -8r + 3r - 2r}}'
					+'{\\html{&nbsp;}}'
					+'{\\str{\"-8r\" and \"3r\" and \"- 2r\" are like terms because they are all \"r<sup>1</sup>\" terms.}}'
					+'{\\html{&nbsp;}}'
					+'{\\str{Combine the coefficients: -8 + 3 - 2  =  -7}}'
					),
			template: 'first', textAnswer: '<span class=bigger>-</span>7r', buttonValueA: 'F', buttonLabelA: '<span class=bigger></span>13r', 
            buttonValueB: 'T', buttonLabelB: '<span class=bigger>-</span>7r', 
            buttonValueC: 'F', buttonLabelC: '<span class=bigger>&nbsp;</span>3r', 
            buttonValueD: 'F', buttonLabelD: '<span class=bigger>&nbsp;</span>9r'},
			
			// problem 6
			{prob: dataUtils.pre('\\str{-2xy + (-7xy) - (3xy)}'),
			help: dataUtils.pre('\\rowgrp'
					+'{\\html{We can only combine \"like terms.\"}}'
					+'{\\html{&nbsp;}}'
					+'{\\str{\"-2xy\" and \"-7xy\" and \"-3xy\" are like terms }}'
					+'{\\html{because they are all \"xy\" terms.}}'
					+'{\\html{&nbsp;}}'
					+'{\\str{Combine the coefficients:-2 -7 - 3  =  -12}}'
					),
			template: 'first', textAnswer: '<span class=bigger>-</span>12xy', buttonValueA: 'F', buttonLabelA: '<span class=bigger>&nbsp;</span>2xy', 
            buttonValueB: 'F', buttonLabelB: '<span class=bigger>&nbsp;</span>6xy', 
            buttonValueC: 'F', buttonLabelC: '<span class=bigger>&nbsp;</span>6x<sup>3</sup>y<sup>3</sup>', 
            buttonValueD: 'T', buttonLabelD: '<span class=bigger>-</span>12xy'},
			
			// problem 7 
			{prob: dataUtils.pre('\\grp'
									+'{\\frac'
										+'{\\fracstr{2x}}{\\fracstr{5}}}'
									+'{\\sign{+}}'
									+'{\\frac'
										+'{\\fracstr{x}}{\\fracstr{4}}}'
										+'{\\sign{-}}'
										+'{\\html{(}}'
									+'{\\frac'
										+'{\\fracstr{-3x}}{\\fracstr{10}}}'
										+'{\\html{)}}'),
			help: dataUtils.pre('\\rowgrp'
									+'{\\html{We can only combine \"like terms.\"}}'
									+'{\\html{&nbsp;}}'
									+'{\\html{First, we must get rid of the double negative.}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp'
										+'{\\sign{-}}'
										+'{\\html{(}}'
										+'{\\sign{-}}'
										+'{\\css'
											+'{\\frac{\\str{3x}}{\\str{10}}}'
											+'{fracNoMargin}'
										+'}'
										+'{\\html{&nbsp;)}}'
										+'{\\html{becomes}}'
										+'{\\frac{\\str{3x}}{\\str{10}}}'
									+'}'
									 +'{\\html{&nbsp;}}'
									+'{\\grp'
										+'{\\frac{\\str{2x}}{\\str{5}}}'
										+'{\\sign{+}}'
										+'{\\frac{\\str{x}}{\\str{4}}}'
										+'{\\sign{-}}'
										+'{\\html{(}}'
									    +'{\\sign{-}}'
										+'{\\css'
											+'{\\frac{\\str{3x}}{\\str{10}}}'
											+'{fracNoMargin}'
										+'}'
										+'{\\html{&nbsp;)}}'
										+'{\\html{becomes}}'
										+'{\\frac{\\str{2x}}{\\str{5}}}'
										+'{\\sign{+}}'
										+'{\\frac{\\str{x}}{\\str{4}}}'
										+'{\\sign{+}}'
										+'{\\frac{\\str{3x}}{\\str{10}}}'
									+'}'
									+'{\\html{&nbsp;}}'
									+'{\\html{Because they are all \"x\" terms,}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp'
									 	+'{\\frac{\\str{2x}}{\\str{5}}}{\\html{ and }}{\\frac{\\str{x}}{\\str{4}}}{\\html{ and }}{\\frac{\\str{3x}}{\\str{10}}}{\\html{ are like terms.}}'
									+'}'
									+'{\\html{&nbsp;}}'
									+'{\\html{Combine the coefficients: }}'
									+'{\\html{&nbsp;}}'
									+'{\\grp'
										+'{\\frac{\\str{2}}{\\str{5}}}{\\sign{+}}{\\frac{\\str{1}}{\\str{4}}}{\\sign{+}}{\\frac{\\str{3}}{\\str{10}}}{\\sign{=}}{\\frac{\\str{19}}{\\str{20}}}'
										+'}'
					),
			template: 'second', 
			textAnswer: dataUtils.pre('{\\html{&nbsp;}}{\\grp'
				+'{\\frac{\\html{19x}}{\\str{20}}}'
				+'}'),
				buttonValueA: 'F',
				buttonLabelA: dataUtils.pre('\\frac{\\fracstr{2x}}{\\fracstr{19}}'),
				buttonValueB: 'F',
				buttonLabelB: dataUtils.pre('\\frac{\\fracstr{7x}}{\\fracstr{20}}'),
				buttonValueC: 'F',
				buttonLabelC: dataUtils.pre('\\frac{\\fracstr{3x}}{\\fracstr{20}}'),
				buttonValueD: 'T',
				buttonLabelD: dataUtils.pre('\\frac{\\fracstr{19x}}{\\fracstr{20}}'),
			},
			
			// problem 8 – (4m2 – 2m + 3)
			{prob: dataUtils.pre('\\str{-(4m<sup>2</sup> - 2m + 3)'),
			help: dataUtils.pre('\\rowgrp'
					+'{\\html{First, we must distribute the negative sign into the parenthesis. The minus sign in front of the parenthesis means to take the <u>opposite sign</u> of <u>every</u> term inside the parenthesis.}}'
					+'{\\html{&nbsp;}}'
					+'{\\str{-(4m <sup>2</sup> -  2m + 3) &nbsp; becomes&nbsp; -4m <sup>2</sup> + 2m - 3}}'
					+'{\\html{&nbsp;}}'
					+'{\\html{There are no like terms, so this is the answer.}}'
					),
			template: 'first', textAnswer: '<span class=bigger>-</span>4m<sup>2</sup> + 2m <span class=bigger>-</span> 3', 
			buttonValueA: 'T', buttonLabelA: '<span class=bigger>-</span>4m<sup>2</sup> + 2m <span class=bigger>-</span> 3', 
            buttonValueB: 'F', buttonLabelB: '<span class=bigger>-</span>2m<sup>2</sup> <span class=bigger>-</span> 3', 
            buttonValueC: 'F', buttonLabelC: '<span class=bigger>-</span>4m<sup>2</sup> <span class=bigger>-</span> 2m + 3', 
            buttonValueD: 'F', buttonLabelD: '<span class=bigger>&nbsp;</span>2m<sup>2</sup> <span class=bigger>-</span> 3'},
			
			// problem 9 
			{prob: dataUtils.pre('\\str{-(-5x<sup>3</sup> + 3x<sup>2</sup> -y - 5)'),
			help: dataUtils.pre('\\rowgrp'
					+'{\\html{First, we must distribute the negative sign into the parenthesis. The minus sign in front of the parenthesis means to take the <u>opposite sign</u> of <u>every</u> term inside the parenthesis.}}'
					+'{\\html{&nbsp;}}'
					+'{\\str{-(-5x<sup>3</sup> + 3x<sup>2</sup> - y - 5) &nbsp; becomes&nbsp;  5x<sup>3</sup> - 3x<sup>2</sup> + y + 5}}{\\html{&nbsp;}}'
					+'{\\html{There are no like terms, so this is the answer.}}'
					),
			template: 'first', textAnswer: '&nbsp; 5x<sup>3</sup> <span class=bigger>-</span> 3x<sup>2</sup> + y + 5', 
			buttonValueA: 'F', buttonLabelA: '<span class=bigger>&nbsp;</span>5x<sup>3</sup> <span class=bigger>-</span> 3x<sup>2</sup> <span class=bigger>-</span> y <span class=bigger>-</span> 5', 
            buttonValueB: 'F', buttonLabelB: '<span class=bigger>&nbsp;</span>2x<sup>5</sup> + y + 5', 
            buttonValueC: 'T', buttonLabelC: '<span class=bigger>&nbsp;</span>5x<sup>3</sup> <span class=bigger>-</span> 3x<sup>2</sup> + y + 5', 
            buttonValueD: 'F', buttonLabelD: '<span class=bigger>-</span>5x<sup>3</sup> + 3x<sup>2</sup> + y + 5'},
			
			// problem 10 
			{prob: dataUtils.pre('\\str{14n - (3n - 7)'),
			help: dataUtils.pre('\\rowgrp'
					+'{\\html{First, we must distribute the negative sign into the parenthesis. The minus sign in front of the parenthesis means to take the <u>opposite sign</u> of <u>every</u> term inside the parenthesis.}}'
					+'{\\html{&nbsp;}}'
					+'{\\str{-(3n - 7 ) becomes  -3n + 7 }}'
					+'{\\html{&nbsp;}}'
					+'{\\str{14n - (3n - 7 ) becomes  14n - 3n + 7 }}'
					+'{\\html{&nbsp;}}'
					+'{\\str{\“14n\” and \“-3n\” are like terms because they are both \“n\” terms. Together they equal 11n.}}'
					),
			template: 'first', textAnswer: '11n + 7', 
			buttonValueA: 'F', buttonLabelA: '<span class=bigger>&nbsp;</span>11n <span class=bigger>-</span> 7', 
            buttonValueB: 'T', buttonLabelB: '<span class=bigger>&nbsp;</span>11n&nbsp; + &nbsp;7', 
            buttonValueC: 'F', buttonLabelC: '<span class=bigger>&nbsp;</span>18n', 
            buttonValueD: 'F', buttonLabelD: '<span class=bigger>&nbsp;</span>42n<sup>2</sup> <span class=bigger>-</span> 98n'},
			
			//problem 11 
			{prob: dataUtils.pre('\\str{(4x<sup>2</sup> - 4x) - (6x<sup>2</sup> + 2x)'),
			help: dataUtils.pre('\\rowgrp'
					+'{\\html{First, we must distribute the negative sign into the parenthesis. The minus sign in front of the parenthesis means to take the <u>opposite sign</u> of <u>every</u> term inside the parenthesis.}}'
					+'{\\html{&nbsp;}}'
					+'{\\str{-(6x<sup>2</sup> + 2x)&nbsp; becomes&nbsp; -6x<sup>2</sup> - 2x }}'
					+'{\\html{&nbsp;}}'
					+'{\\str{(4x<sup>2</sup> - 4x) - (6x<sup>2</sup> + 2x)&nbsp; becomes&nbsp; (4x<sup>2</sup> - 4x) - 6x<sup>2</sup> - 2x}}'
					+'{\\html{&nbsp;}}'
					+'{\\str{\“4x<sup>2</sup>\” and \“-6x<sup>2</sup>\” are like terms because they are both \“x<sup>2</sup>\” terms. Together they equal -2x<sup>2</sup>.}}'
					+'{\\html{&nbsp;}}'
					+'{\\str{\“-4x\” and \“-2x\” are like terms because they are both \“x<sup>1</sup>\” terms. Together they equal -6x.}}'
					),
			template: 'first', textAnswer: '<span class=bigger>-</span>2x<sup>2</sup>  <span class=bigger>-</span> 6x', 
			buttonValueA: 'F', buttonLabelA: '<span class=bigger>-</span>2x <sup>2</sup> <span class=bigger>-</span> 2x', 
            buttonValueB: 'F', buttonLabelB: '<span class=bigger>-</span>10x <sup>2</sup> <span class=bigger>-</span> 6x',  
            buttonValueC: 'F', buttonLabelC: '<span class=bigger>-</span>4x <sup>2</sup>', 
            buttonValueD: 'T', buttonLabelD: '<span class=bigger>-</span>2x <sup>2</sup> <span class=bigger>-</span> 6x'},
			
			//problem 12 
			{prob: dataUtils.pre('\\str{(-2mn + n) - (-5mn - 3n)'),
			help: dataUtils.pre('\\rowgrp'
					+'{\\html{First, we must distribute the negative sign into the parenthesis. The minus sign in front of the parenthesis means to take the <u>opposite sign</u> of <u>every</u> term inside the parenthesis.}}'
					+'{\\html{&nbsp;}}'
					+'{\\html{&nbsp;}}'
					+'{\\str{-(-5mn - 3n)&nbsp; becomes&nbsp; 5mn + 3n }}'
					+'{\\html{&nbsp;}}'
					+'{\\html{&nbsp;}}'
					+'{\\str{(-2mn + n) - (-5mn - 3n)}}'
					+'{\\html{&nbsp;}}'
					+'{\\str{becomes}}'
					+'{\\html{&nbsp;}}'
					+'{\\str{(-2mn + n) + 5mn + 3n}}'
					+'{\\html{&nbsp;}}'
					+'{\\html{&nbsp;}}'
					+'{\\str{\“-2mn\” and \“5mn\” are like terms because they are both \“mn\” terms. Together they equal 3mn.}}'
					+'{\\html{&nbsp;}}'
					+'{\\str{\“n\” and \“3n\” are like terms because they are both \“n<sup>1</sup>\” terms. Together they equal 4n.}}'
					),
			template: 'first', textAnswer: '3mn + 4n<br><br>', 
			buttonValueA: 'F', buttonLabelA: '<span class=bigger>-</span>7mn <span class=bigger>-</span> 2n', 
            buttonValueB: 'T', buttonLabelB: '<span class=bigger>&nbsp;</span>3mn &nbsp;+&nbsp; 4n',  
            buttonValueC: 'F', buttonLabelC: '<span class=bigger>-</span>7m<sup>2</sup> n<sup>2</sup> <span class=bigger>-</span> 2n<sup>2</sup>', 
            buttonValueD: 'F', buttonLabelD: '<span class=bigger>&nbsp;</span>3mn <span class=bigger>-</span> 2n'},
			
			//problem 13 
			{prob: dataUtils.pre('\\str{(-7xy + 7y) - (3xy - 3x + 3y)'),
			help: dataUtils.pre('\\rowgrp'
					+'{\\html{First, we must distribute the negative sign into the parenthesis. The minus sign in front of the parenthesis means to take the <u>opposite sign</u> of <u>every</u> term inside the parenthesis.}}'
					+'{\\html{&nbsp;}}'
					+'{\\html{&nbsp;}}'
					+'{\\str{-(3xy - 3x + 3y) &nbsp;becomes&nbsp;  -3xy + 3x - 3y}}'
					+'{\\html{&nbsp;}}'
					+'{\\html{&nbsp;}}'
					+'{\\str{(-7xy + 7y) - (3xy - 3x + 3y)}}'
					+'{\\html{&nbsp;}}'
					+'{\\str{becomes}}'
					+'{\\html{&nbsp;}}'
					+'{\\str{(-7xy + 7y) - 3xy + 3x - 3y }}'
					+'{\\html{&nbsp;}}'
					+'{\\html{&nbsp;}}'
					+'{\\str{\“-7xy\” and \“-3xy\” are like terms because they are both \“xy\” terms. Together they equal -10xy.}}'
					+'{\\html{&nbsp;}}'
					+'{\\str{\“3x\” is the only \“x<sup>1</sup>\” term; it will stay the same.}}'
					+'{\\html{&nbsp;}}'
					+'{\\str{\“7y\” and \“-3y\” are like terms because they are both \“y<sup>1</sup>\” terms. Together they equal 4y.}}'
					),
			template: 'first', textAnswer: '<span class=bigger>-</span>10xy + 3x + 4y<br><br>', 
			buttonValueA: 'T', buttonLabelA: '<span class=bigger>-</span>10xy &nbsp;+&nbsp; 3x &nbsp;+&nbsp; 4y', 
            buttonValueB: 'F', buttonLabelB: '<span class=bigger>-</span>10xy <span class=bigger>-</span> 3x &nbsp;+&nbsp; 10y',
            buttonValueC: 'F', buttonLabelC: '<span class=bigger>&nbsp;</span>7xy &nbsp;+&nbsp; 10y', 
            buttonValueD: 'F', buttonLabelD: '<span class=bigger>-</span>10x <sup>2</sup>y <sup>2</sup> <span class=bigger>-</span> 3x &nbsp;+&nbsp; 4y'},
			
				//problem 14 (4m2/5 – 1/3) – (2m2/3 + 3/4)
				{prob: dataUtils.pre('\\pan{5}{7}'
										 +'{\\grp'
											+'{\\str{(}}'
											+'{\\frac{\\html{4m<sup>2}}{\\fracstr{5}}}'
											+'{\\sign{-}}'
											+'{\\frac{\\fracstr{1}}{\\fracstr{3}}}'
											+'{\\str{)}}'
											+'{\\sign{-}}'
											+'{\\str{(}}'
											+'{\\frac{\\html{2m<sup>2}}{\\fracstr{3}}}'
											+'{\\sign{+}}'
											+'{\\frac{\\fracstr{3}}{\\fracstr{4}}}'
											+'{\\str{)}}'
										+'}'
								),
			help: dataUtils.pre('\\rowgrp'
					+'{\\html{First, we must distribute the negative sign into the parenthesis. The minus sign in front of the parenthesis means to take the <u>opposite sign</u> of <u>every</u> term inside the parenthesis.}}'
					 +'{\\html{&nbsp;}}'
					 +'{\\html{&nbsp;}}'
			         +'{\\grp'
						 +'{\\sign{-}}'
						 +'{\\str{(}}'
						 +'{\\frac{\\html{2m<sup>2}}{\\fracstr{3}}}'
						 +'{\\sign{+}}'
						 +'{\\frac{\\fracstr{3}}{\\fracstr{4}}}'
						 +'{\\str{)}}'
						 +'{\\html{ &nbsp;becomes&nbsp; }}'
						 +'{\\sign{-}}'
						 +'{\\css'
						 	+'{\\frac{\\html{2m<sup>2}}{\\fracstr{3}}}'
							+'{fracNoMargin}'
						 +'}'
						 +'{\\sign{-}}'
						 +'{\\frac{\\fracstr{3}}{\\fracstr{4}}}}'
					 +'{\\html{&nbsp;}}'
					 +'{\\html{&nbsp;}}'
					 +'{\\grp'
					 	+'{\\str{(}}{\\frac{\\html{4m<sup>2}}{\\fracstr{5}}}{\\sign{-}}{\\frac{\\fracstr{1}}{\\fracstr{3}}}{\\str{)}}{\\sign{-}}{\\str{(}}{\\frac{\\html{2m<sup>2}}{\\fracstr{3}}}{\\sign{+}}{\\frac{\\fracstr{3}}{\\fracstr{4}}}{\\str{)}}'
					 +'}'
					 +'{\\html{&nbsp;}}'
					 +'{\\html{ &nbsp;becomes&nbsp; }}'
					  +'{\\html{&nbsp;}}'
					 +'{\\grp'
					 	+'{\\str{(}}{\\frac{\\html{4m<sup>2}}{\\fracstr{5}}}{\\sign{-}}{\\frac{\\fracstr{1}}{\\fracstr{3}}}{\\str{)}}{\\sign{-}}{\\frac{\\html{2m<sup>2}}{\\fracstr{3}}}{\\sign{-}}{\\frac{\\fracstr{3}}{\\fracstr{4}}}'
					 +'}'
					  +'{\\html{&nbsp;}}'
					  +'{\\html{&nbsp;}}'
					 +'{\\grp'
						+'{\\frac{\\str{4m<sup>2}}{\\str{5}}}'
						+'{\\html{&nbsp;and&nbsp;&nbsp;}}'
						+'{\\str{-}}'
						+'{\\css'
							+'{\\frac{\\str{2m<sup>2}}{\\str{3}}}'
							+'{fracNoMargin}'
						+'}'
					+'}'
					+'{\\html{&nbsp;}}'
					+'{\\str{are like terms because they are both m<sup>2</sup> terms.}}'
					+'{\\html{&nbsp;}}'
					+'{\\grp'
						+'{\\str{Together they equal}}{\\frac{\\str{2m<sup>2}}{\\fracstr{15}}}'
					+'}'					 
					+'{\\html{&nbsp;}}'
					+'{\\html{&nbsp;}}'
					+'{\\grp'
						+'{\\mixed{str{-}}{\\frac{\\str{1}}{\\str{3}}}}'
						+'{\\html{&nbsp;and&nbsp;}}'
						+'{\\mixed{str{-}}{\\frac{\\str{3}}{\\str{4}}}}'
					+'}'
					+'{\\html{&nbsp;}}'
					+'{\\html{are like terms because they both have no variable.}}'
					+'{\\html{&nbsp;}}'
					+'{\\grp'
					 	+'{\\html{Together they equal&nbsp; }}{\\mixed{str{-}}{\\frac{\\str{13}}{\\str{12}}}}'
					+'}'	
					+'{\\html{&nbsp;}}'					
					),
			template: 'second', 
			textAnswer: dataUtils.pre('{\\html{&nbsp;}}{\\grp'
				+'{\\frac{\\html{2m<sup>2</sup>}}{\\str{15}}}{\\sign{-}}{\\frac{\\html{13}}{\\str{12}}}'
				+'}'),
				buttonValueA: 'F',
				buttonLabelA: dataUtils.pre('\\grp'
									+'{\\frac'
										+'{\\fracstr{22m <sup>2}}{\\fracstr{15}}}'
									+'{\\sign{-}}'
									+'{\\frac'
										+'{\\fracstr{13}}{\\fracstr{12}}}'),
				buttonValueB: 'F',
				buttonLabelB: dataUtils.pre('\\grp'
									+'{\\frac'
										+'{\\fracstr{22m <sup>2}}{\\fracstr{15}}}'
									+'{\\html{&nbsp;+&nbsp;}}'
									+'{\\frac'
										+'{\\fracstr{5}}{\\fracstr{12}}}'),
				buttonValueC: 'T',
				buttonLabelC: dataUtils.pre('\\grp'
									+'{\\frac'
										+'{\\fracstr{2m <sup>2}}{\\fracstr{15}}}'
									+'{\\sign{-}}'
									+'{\\frac'
										+'{\\fracstr{13}}{\\fracstr{12}}}'),
				buttonValueD: 'F',
				buttonLabelD: dataUtils.pre('\\grp'
									+'{\\frac'
										+'{\\fracstr{2m <sup>2}}{\\fracstr{15}}}'
									+'{\\html{&nbsp;+&nbsp;}}'
									+'{\\frac'
										+'{\\fracstr{5}}{\\fracstr{12}}}'),
			},
			//problem 15 (a/2 – 2b/3) – (3a/5 – b/7)
				{prob: dataUtils.pre('\\pan{5}{7}'
										 +'{\\grp'
											+'{\\str{(}}'
											+'{\\frac{\\fracstr{a}}{\\fracstr{2}}}'
											+'{\\sign{-}}'
											+'{\\frac{\\fracstr{2b}}{\\fracstr{3}}}'
											+'{\\str{)}}'
											+'{\\sign{-}}'
											+'{\\str{(}}'
											+'{\\frac{\\fracstr{3a}}{\\fracstr{5}}}'
											+'{\\sign{-}}'
											+'{\\frac{\\fracstr{b}}{\\fracstr{7}}}'
											+'{\\str{)}}'
										+'}'
									),
			help: dataUtils.pre('\\rowgrp'
					+'{\\html{First, we must distribute the negative sign into the parenthesis. The minus sign in front of the parenthesis means to take the <u>opposite sign</u> of <u>every</u> term inside the parenthesis.}}'
					 +'{\\html{&nbsp;}}'
			         +'{\\grp'
					 	+'{\\sign{-}}'
						+'{\\str{(}}'
					    +'{\\frac{\\fracstr{3a }}{\\fracstr{5}}}'
						+'{\\sign{-}}'
						+'{\\frac{\\fracstr{b}}{\\fracstr{7}}}'
						+'{\\str{)}}'
						+'{\\html{ &nbsp;becomes&nbsp; }}'
						+'{\\sign{-}}'
						+'{\\css'
							+'{\\frac{\\fracstr{3a}}{\\fracstr{5}}}'
							+'{fracNoMargin}'
						+'}'
						+'{\\sign{+}}'
						+'{\\frac{\\fracstr{b}}{\\fracstr{7}}}'
					 +'}'
					 +'{\\html{&nbsp;}}'
					 +'{\\html{&nbsp;}}'
					 +'{\\grp'
					 	+'{\\str{(}}'
						+'{\\frac{\\fracstr{a}}{\\fracstr{2}}}'
						+'{\\sign{-}}'
						+'{\\frac{\\fracstr{2b}}{\\fracstr{3}}}'
						+'{\\str{)}}'
						+'{\\sign{-}}'
						+'{\\str{(}}'
						+'{\\frac{\\fracstr{3a }}{\\fracstr{5}}}'
						+'{\\sign{-}}'
						+'{\\frac{\\fracstr{b}}{\\fracstr{7}}}'
						+'{\\str{)}}'
					+'}'
					+'{\\html{&nbsp;}}'
					+'{\\html{becomes}}'
					+'{\\html{&nbsp;}}'
					+'{\\grp'
						+'{\\str{(}}'
						+'{\\frac{\\fracstr{a }}{\\fracstr{2}}}'
						+'{\\sign{-}}'
						+'{\\frac{\\fracstr{2b}}{\\fracstr{3}}}'
						+'{\\str{)}}'
						+'{\\sign{-}}'
						+'{\\frac{\\fracstr{3a }}{\\fracstr{5}}}'
						+'{\\sign{+}}'
						+'{\\frac{\\fracstr{b}}{\\fracstr{7}}}'
					 +'}'
					 +'{\\html{&nbsp;}}'
					 +'{\\html{&nbsp;}}'
					 +'{\\grp'
					 	+'{\\frac{\\str{a }}{\\str{2}}}'
						+'{\\html{ &nbsp;and&nbsp; }}'
						+'{\\sign{-}}'
						+'{\\css'
							+'{\\frac{\\str{3a}}{\\str{5}}}'
							+'{fracNoMargin}'
						+'}'
					+'}'
					 +'{\\html{&nbsp;}}'
					+'{\\str{are like terms because they are both \"a<sup>1</sup>\" terms.}}'
					 +'{\\html{&nbsp;}}'
					+'{\\grp'
						+'{\\str{Together they equal: &nbsp;}}'
						+'{\\sign{-}}'
						+'{\\css'
							+'{\\frac{\\fracstr{a }}{\\fracstr{10}}}'
							+'{fracNoMargin}'
						+'}'
					+'}'					 
					+'{\\html{&nbsp;}}'
					+'{\\html{&nbsp;}}'
					+'{\\grp'
						+'{\\sign{-}}'
						+'{\\css'
							+'{\\frac{\\str{2b }}{\\str{3}}}'
							+'{fracNoMargin}'
						+'}'
						+'{\\html{ &nbsp;and&nbsp; }}'
						+'{\\frac{\\str{b}}{\\str{7}}}'
					+'}'
					+'{\\html{&nbsp;}}'
					+'{\\html{are like terms because they are both \"b<sup>1</sup>\" terms.}}'
					+'{\\html{&nbsp;}}'
					+'{\\grp'
						+'{\\html{Together they equal &nbsp;}}'
						+'{\\sign{-}}'
						+'{\\css'
							+'{\\frac{\\fracstr{11b }}{\\fracstr{21}}}'
							+'{fracNoMargin}'
						+'}'
					+'}'
					+'{\\html{&nbsp;}}'
					),
			template: 'second', 
			textAnswer: dataUtils.pre('{\\grp'
											+'{\\sign{-}}'
											+'{\\css'
												+'{\\frac{\\html{a}}{\\str{10}}}'
												+'{fracNoMargin}'
											+'}'
											+'{\\sign{-}}'
											+'{\\css'
												+'{\\frac{\\html{11b}}{\\str{21}}}'
												+'{fracNoMargin}'
											+'}'
										+'}'
						),
				buttonValueA: 'F',
				buttonLabelA: dataUtils.pre('\\grp'
									+'{\\mixed'
										+'{\\str{-}}'
										+'{\\frac'
											+'{\\fracstr{2a}}{\\fracstr{10}}}'
									+'}'
									+'{\\sign{-}}'
									+'{\\frac'
										+'{\\fracstr{b}}{\\fracstr{21}}}'),
				buttonValueB: 'F',
				buttonLabelB: dataUtils.pre('\\grp'
									+'{\\mixed'
										+'{\\str{-}}'
										+'{\\frac'
											+'{\\fracstr{11a}}{\\fracstr{10}}}'
									+'}'
									+'{\\sign{-}}'
									+'{\\frac'
										+'{\\fracstr{17b}}{\\fracstr{21}}}'),
				buttonValueC: 'T',
				buttonLabelC: dataUtils.pre('\\grp'
									+'{\\mixed'
										+'{\\str{-}}'
										+'{\\frac'
											+'{\\fracstr{a}}{\\fracstr{10}}}'
									+'}'
									+'{\\sign{-}}'
									+'{\\frac'
										+'{\\fracstr{11b}}{\\fracstr{21}}}'),
				buttonValueD: 'F',
				buttonLabelD: dataUtils.pre('\\grp'
									+'{\\html{&nbsp;&nbsp;}}'
									+'{\\frac'
									+'{\\fracstr{a}}{\\fracstr{10}}}'
									+'{\\html{&nbsp;+&nbsp;}}'
									+'{\\frac'
										+'{\\fracstr{11b}}{\\fracstr{21}}}'),
			},
			];

	return dataUtils.build(desc, template, data);
}]);