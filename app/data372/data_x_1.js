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
						problem: '$prob',
						answer: '\\rowgrp'+
									'{\\ins{Choose the right answer:}}'+
									'{\\grp{\\btn{A}{$buttonValueA}{marg}}{\\html{\xA0$buttonLabelA}}}'+
                                    '{\\grp{\\btn{B}{$buttonValueB}{marg}}{\\html{\xA0$buttonLabelB}}}'+
                                    '{\\grp{\\btn{C}{$buttonValueC}{marg}}{\\html{\xA0$buttonLabelC}}}'+
                                    '{\\grp{\\btn{D}{$buttonValueD}{marg}}{\\html{\xA0$buttonLabelD}}}',
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
						problem: '$prob',
						answer: '\\btngrp'+
									'{\\rowgrp'+
									'{\\ins{Choose the right answer:}}'+
										'{\\grp{\\btn{A}{$buttonValueA}{marg}}{$buttonLabelA}}'+
										'{\\html{&nbsp;}}'+
										'{\\grp{\\btn{B}{$buttonValueB}{marg}}{$buttonLabelB}}'+
										'{\\html{&nbsp;}}'+
										'{\\grp{\\btn{C}{$buttonValueC}{marg}}{$buttonLabelC}}'+
										'{\\html{&nbsp;}}'+
										'{\\grp{\\btn{D}{$buttonValueD}{marg}}{$buttonLabelD}}'+
									'}',
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
			{prob: dataUtils.pre('\\html{13z - 20z}'),
			help: dataUtils.pre('\\rowgrp'
					+'{\\html{We can only combine \"like terms.\"}}{\\html{&nbsp;}}'
					+'{\\html{\"13z\" and \"-20z\" are like terms because they are both z<sup>1</sup>\ terms.}}'
					+'{\\html{&nbsp;}}{\\html{Combine the coefficients: 13 - 20 = -7}}'),
			template: 'first', textAnswer: '-7z', buttonValueA: 'F', buttonLabelA: '<span class=bigger>-</span>33z', 
            buttonValueB: 'T', buttonLabelB: '<span class=bigger>-</span>7z', 
            buttonValueC: 'F', buttonLabelC: '<span class=bigger>&nbsp;</span>33z', 
            buttonValueD: 'F', buttonLabelD: '<span class=bigger>&nbsp;</span>7z'},
			
			// problem 2
			{prob: dataUtils.pre('\\html{&minus;5x &minus; 7x}'),
			help: dataUtils.pre('\\rowgrp'
					+'{\\html{We can only combine \"like terms.\"}}{\\html{&nbsp;}}'
					+'{\\html{\"5x\" and \"-7x\" are like terms because they are both x<sup>1</sup> terms.}}'
					+'{\\html{&nbsp;}}{\\html{Combine the coefficients: &minus;5 &minus; 7 = &minus;12}}'),
			template: 'first', textAnswer: '&minus;12x', buttonValueA: 'T', buttonLabelA: '<span class=bigger>-</span>12x', 
            buttonValueB: 'F', buttonLabelB: '<span class=bigger>&nbsp;</span>12x', 
            buttonValueC: 'F', buttonLabelC: '<span class=bigger>&nbsp;</span>2x', 
            buttonValueD: 'F', buttonLabelD: '<span class=bigger>-</span>2x'},
			
			// problem 3
			{prob: dataUtils.pre('\\html{&minus;3ab &minus; (&minus;6ab)}'),
			help: dataUtils.pre('\\rowgrp'
					+'{\\html{We can only combine \"like terms.\"}}{\\html{&nbsp;}}'
					+'{\\html{First, we must get rid of the double negative.}}'
					+'{\\html{&minus; (&minus; 6ab) becomes + 6ab}}'
					+'{\\html{&nbsp;}}{\\html{&minus; 3ab &minus; (&minus; 6ab)  becomes  &minus; 3ab + 6ab}}'
					+'{\\html{&nbsp;}}{\\html{&nbsp;}}{\\html{\"&minus; 3ab\" and \"6ab\" are like terms because they are both \"ab\" terms.}}'
					+'{\\html{&nbsp;}}{\\html{Combine the coefficients: &minus; 3 + 6 = 3}}'
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
									+'{\\html{ &minus; }}'
									+'{\\frac'
										+'{\\fracstr{7m}}{\\fracstr{8}}}'),
			help: dataUtils.pre('\\rowgrp'
					+'{\\html{We can only combine \"like terms.\"}}{\\html{&nbsp;}}'
					+'{\\grp{\\frac{\\str{3m}}{\\str{4}}}{\\html{and}}{\\frac{\\str{7m}}{\\str{8}}}{\\html{are like terms because they are}}}'
					+'{\\html{both \"m\" terms.}}'
					+'{\\html{&nbsp;}}{\\html{Combine the coefficients:}}'
					+'{\\grp{\\frac{\\str{3}}{\\str{4}}}{\\html{ &minus; }}{\\frac{\\str{7}}{\\str{8}}}{\\html{=}}{\\html{ &minus; }}{\\frac{\\str{1}}{\\str{8}}}}'),
			template: 'second', 
			textAnswer: dataUtils.pre('{\\html{&nbsp;}}{\\grp'
				+'{\\sign{-}}{\\frac{\\html{m}}{\\str{8}}}'
				+'}'),
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
			{prob: dataUtils.pre('\\html{&minus;8r &minus;(&minus;3r)&minus;2r}'),
			help: dataUtils.pre('\\rowgrp'
					+'{\\html{We can only combine \"like terms.\"}}{\\html{&nbsp;}}'
					+'{\\html{First, we must get rid of the double negative.}}'
					+'{\\html{&minus; (&minus; 3r) becomes + 3r}}'
					+'{\\html{&nbsp;}}{\\html{&minus; 8r &minus; (&minus; 3r) &minus; 2r  becomes  &minus; 8r + 3r &minus;2r}}'
					+'{\\html{&nbsp;}}{\\html{\"&minus; 8r\" and \"3r\" and \"&minus; 2r\" are like terms because they are all \" r\" terms.}}'
					+'{\\html{&nbsp;}}{\\html{Combine the coefficients: &minus; 8 + 3 &minus; 2  =  &minus;7}}'
					),
			template: 'first', textAnswer: '&minus;7r', buttonValueA: 'F', buttonLabelA: '<span class=bigger></span>13r', 
            buttonValueB: 'T', buttonLabelB: '<span class=bigger>-</span>7r', 
            buttonValueC: 'F', buttonLabelC: '<span class=bigger>&nbsp;</span>3r', 
            buttonValueD: 'F', buttonLabelD: '<span class=bigger>&nbsp;</span>9r'},
			
			// problem 6
			{prob: dataUtils.pre('\\html{&minus;2xy +(&minus;7xy)&minus; (3xy)}'),
			help: dataUtils.pre('\\rowgrp'
					+'{\\html{We can only combine \"like terms.\"}}'
					+'{\\html{&nbsp;}}{\\html{\"&minus; 2xy\" and \"&minus; 7xy\" and \"&minus; 3xy\" are like terms }}'
					+'{\\html{because they are all \"xy\" terms.}}'
					+'{\\html{&nbsp;}}{\\html{Combine the coefficients: &minus; 2 &minus; 7 &minus; 3  =  &minus;12}}'
					),
			template: 'first', textAnswer: '&minus;12xy', buttonValueA: 'F', buttonLabelA: '<span class=bigger>&nbsp;</span>2xy', 
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
					+'{\\html{We can only combine \"like terms.\"}}{\\html{&nbsp;}}'
					+'{\\html{First, we must get rid of the double negative.}}'
			         +'{\\grp{\\sign{-}}{\\html{(}}{\\html{&minus;}}{\\frac{\\str{3x}}{\\str{10}}}{\\html{)}}{\\html{becomes}}{\\frac{\\str{3x}}{\\str{10}}}}'
					 +'{\\html{&nbsp;}}'
					+'{\\grp{\\sign{-}}{\\frac{\\str{2x}}{\\str{5}}}{\\sign{+}}{\\frac{\\str{x}}{\\str{4}}}{\\sign{-}}{\\html{(}}{\\html{&minus;}}{\\frac{\\str{3x}}{\\str{10}}}{\\html{)}}{\\html{becomes}}{\\sign{-}}{\\frac{\\str{2x}}{\\str{5}}}{\\sign{+}}{\\frac{\\str{x}}{\\str{4}}}{\\sign{+}}{\\frac{\\str{3x}}{\\str{10}}}}'
					  +'{\\html{&nbsp;}}'
					 +'{\\grp{\\html{\"}}{\\sign{-}}{\\frac{\\str{2x}}{\\str{5}}}{\\html{"\ and}}{\\html{\"}}{\\frac{\\str{x}}{\\str{4}}}{\\html{"\    and}}{\\html{\"}}{\\frac{\\str{3x}}{\\str{10}}}{\\html{\" are like terms }}}'
					+'{\\html{because they are all x terms.}}'
					+'{\\html{&nbsp;}}{\\html{Combine the coefficients: }}'
					+'{\\grp{\\sign{-}}{\\frac{\\str{2}}{\\str{5}}}{\\sign{+}}{\\frac{\\str{1}}{\\str{4}}}{\\sign{+}}{\\frac{\\str{3}}{\\str{10}}}{\\html{=}}{\\frac{\\str{3}}{\\str{20}}}}'
					),
			template: 'second', 
			textAnswer: dataUtils.pre('{\\html{&nbsp;}}{\\grp'
				+'{\\frac{\\html{3x}}{\\str{20}}}'
				+'}'),
				buttonValueA: 'F',
				buttonLabelA: dataUtils.pre('\\frac{\\fracstr{2x}}{\\fracstr{19}}'),
				buttonValueB: 'F',
				buttonLabelB: dataUtils.pre('\\frac{\\fracstr{7x}}{\\fracstr{20}}'),
				buttonValueC: 'T',
				buttonLabelC: dataUtils.pre('\\frac{\\fracstr{3x}}{\\fracstr{20}}'),
				buttonValueD: 'F',
				buttonLabelD: dataUtils.pre('\\frac{\\fracstr{19x}}{\\fracstr{20}}'),
			},
			
			// problem 8 – (4m2 – 2m + 3)
			{prob: dataUtils.pre('\\html{&minus;(4m<sup>2</sup> &minus; 2m + 3)'),
			help: dataUtils.pre('\\rowgrp'
					+'{\\html{First, we must distribute the negative sign into the parenthesis. The minus sign in front of the parenthesis means to take the <u>opposite sign</u> of <u>every</u> term inside the parenthesis.}}'
					+'{\\html{&nbsp;}}{\\html{&minus; (4m <sup>2</sup> &minus;  2m + 3) becomes  &minus; 4m <sup>2</sup> + 2m - 3}}{\\html{&nbsp;}}'
					+'{\\html{There are no like terms, so this is the answer.}}'
					),
			template: 'first', textAnswer: '&minus;4m<sup>2</sup> + 2m &minus; 3', 
			buttonValueA: 'T', buttonLabelA: '<span class=bigger>-</span>4m<sup>2</sup> + 2m &minus; 3', 
            buttonValueB: 'F', buttonLabelB: '<span class=bigger>-</span>2m<sup>2</sup> &minus; 3', 
            buttonValueC: 'F', buttonLabelC: '<span class=bigger>-</span>4m<sup>2</sup> &minus; 2m + 3', 
            buttonValueD: 'F', buttonLabelD: '<span class=bigger>&nbsp;</span>2m<sup>2</sup> &minus; 3'},
			
			// problem 9 
			{prob: dataUtils.pre('\\html{&minus;(&minus; 5x<sup>3</sup> + 3x<sup>2</sup> &minus; y - 5)'),
			help: dataUtils.pre('\\rowgrp'
					+'{\\html{First, we must distribute the negative sign into the parenthesis. The minus sign in front of the parenthesis means to take the <u>opposite sign</u> of <u>every</u> term inside the parenthesis.}}'
					+'{\\html{&nbsp;}}{\\html{&minus; (&minus; 5x<sup>3</sup> + 3x<sup>2</sup> &minus; y &minus; 5) becomes  5x<sup>3</sup> &minus; 3x<sup>2</sup> + y + 5}}{\\html{&nbsp;}}'
					+'{\\html{There are no like terms, so this is the answer.}}'
					),
			template: 'first', textAnswer: '5x<sup>3</sup> &minus; 3x<sup>2</sup> + y + 5', 
			buttonValueA: 'F', buttonLabelA: '<span class=bigger>&nbsp;</span>5x<sup>3</sup> &minus; 3x<sup>2</sup> &minus; y &minus; 5', 
            buttonValueB: 'F', buttonLabelB: '<span class=bigger>&nbsp;</span>2x<sup>5</sup> + y + 5', 
            buttonValueC: 'T', buttonLabelC: '<span class=bigger>&nbsp;</span>5x<sup>3</sup> &minus; 3x<sup>2</sup> + y + 5', 
            buttonValueD: 'F', buttonLabelD: '<span class=bigger>-</span>5x<sup>3</sup> + 3x<sup>2</sup> + y + 5'},
			
			// problem 10 
			{prob: dataUtils.pre('\\html{14n &minus; (3n &minus; 7)'),
			help: dataUtils.pre('\\rowgrp'
					+'{\\html{First, we must distribute the negative sign into the parenthesis. The minus sign in front of the parenthesis means to take the <u>opposite sign</u> of <u>every</u> term inside the parenthesis.}}'
					+'{\\html{&nbsp;}}{\\html{&minus; (3n &minus; 7 ) becomes  &minus; 3n + 7 )}}'
					+'{\\html{&nbsp;}}{\\html{14n &minus; (3n &minus; 7 ) becomes  14n &minus; 3n + 7 )}}{\\html{&nbsp;}}'
					+'{\\html{\“14n\” and \“-3n\” are like terms because they are both \“n\” terms. Together they equal 11n.}}'
					),
			template: 'first', textAnswer: '11n + 7', 
			buttonValueA: 'F', buttonLabelA: '<span class=bigger>&nbsp;</span>11n &minus; 7', 
            buttonValueB: 'T', buttonLabelB: '<span class=bigger>&nbsp;</span>11n + 7', 
            buttonValueC: 'F', buttonLabelC: '<span class=bigger>&nbsp;</span>18n', 
            buttonValueD: 'F', buttonLabelD: '<span class=bigger>&nbsp;</span>42n<sup>2</sup> &minus; 98n'},
			
			//problem 11 
			{prob: dataUtils.pre('\\html{(4x <sup>2</sup> &minus; 4x) &minus; (6x <sup>2</sup> + 2x)'),
			help: dataUtils.pre('\\rowgrp'
					+'{\\html{First, we must distribute the negative sign into the parenthesis. The minus sign in front of the parenthesis means to take the <u>opposite sign</u> of <u>every</u> term inside the parenthesis.}}'
					+'{\\html{&nbsp;}}{\\html{&minus; (6x <sup>2</sup> + 2x ) becomes  &minus; 6x &minus; 2x }}'
					+'{\\html{&nbsp;}}{\\html{(4x <sup>2</sup> &minus; 4x) &minus; (6x <sup>2</sup> + 2x) becomes  (4x <sup>2</sup> &minus; 4x) &minus; 6x &minus; 2x}}{\\html{&nbsp;}}'
					+'{\\html{\“4x <sup>2</sup>\” and \“-6x <sup>2</sup>\” are like terms because they are both \“x\” terms. Together they equal -2x <sup>2</sup>.}}'
					+'{\\html{&nbsp;}}{\\html{\“-4x \” and \“-2x\” are like terms because they are both \“x\” terms. Together they equal -6x.}}'
					),
			template: 'first', textAnswer: '&minus; 2x <sup>2</sup>  &minus; 6x', 
			buttonValueA: 'F', buttonLabelA: '<span class=bigger>-</span>2x <sup>2</sup> &minus; 2x', 
            buttonValueB: 'F', buttonLabelB: '<span class=bigger>-</span>10x <sup>2</sup> &minus; 6x',  
            buttonValueC: 'F', buttonLabelC: '<span class=bigger>-</span>4x <sup>2</sup>', 
            buttonValueD: 'T', buttonLabelD: '<span class=bigger>-</span>2x <sup>2</sup> &minus; 6x'},
			
			//problem 12 
			{prob: dataUtils.pre('\\html{(&minus; 2mn + n) &minus; (&minus; 5mn &minus; 3n)'),
			help: dataUtils.pre('\\rowgrp'
					+'{\\html{First, we must distribute the negative sign into the parenthesis. The minus sign in front of the parenthesis means to take the <u>opposite sign</u> of <u>every</u> term inside the parenthesis.}}'
					+'{\\html{&nbsp;}}{\\html{&minus; (&minus; 5mn &minus; 3n) becomes  5mn + 3n }}'
					+'{\\html{&nbsp;}}{\\html{(&minus; 2mn + n) &minus; (&minus; 5mn &minus; 3n) becomes  (&minus; 2mn + n) +5mn + 3n }}{\\html{&nbsp;}}'
					+'{\\html{\“-2mn\” and \“5mn\” are like terms because they are both \“mn\” terms. Together they equal 3mn .}}'
					+'{\\html{&nbsp;}}{\\html{\“n \” and \“3n\” are like terms because they are both \“n\” terms. Together they equal 4n.}}'
					),
			template: 'first', textAnswer: '3mn + 4n', 
			buttonValueA: 'F', buttonLabelA: '<span class=bigger>-</span>7mn &minus; 2n', 
            buttonValueB: 'T', buttonLabelB: '<span class=bigger>&nbsp;</span>3mn + 4n',  
            buttonValueC: 'F', buttonLabelC: '<span class=bigger>-</span>7m <sup>2</sup> n<sup>2</sup> &minus; 2n<sup>2</sup>', 
            buttonValueD: 'F', buttonLabelD: '<span class=bigger>&nbsp;</span>3mn &minus; 2n'},
			
			//problem 13 (-7xy + 7y) – (3xy - 3x + 3y)
			{prob: dataUtils.pre('\\html{(&minus; 7xy + 7y) &minus; (3xy &minus; 3x + 3y)'),
			help: dataUtils.pre('\\rowgrp'
					+'{\\html{First, we must distribute the negative sign into the parenthesis. The minus sign in front of the parenthesis means to take the <u>opposite sign</u> of <u>every</u> term inside the parenthesis.}}'
					+'{\\html{&nbsp;}}{\\html{&minus; (3xy &minus; 3x + 3y) becomes  &minus; 3xy + 3x &minus; 3y }}'
					+'{\\html{&nbsp;}}{\\html{(&minus; 7xy + 7y) &minus; (3xy &minus; 3x + 3y) becomes  &minus; 7xy + 7y) &minus; 3xy + 3x &minus; 3y }}{\\html{&nbsp;}}'
					+'{\\html{\“-7xy\” and \“-3xy\” are like terms because they are both \“xy\” terms. Together they equal -10xy .}}'
					+'{\\html{&nbsp;}}{\\html{\“3x\” is the only \“x\” term; it will stay the same.}}'
					+'{\\html{&nbsp;}}{\\html{\“7y \” and \“-3y\” are like terms because they are both \“y\” terms. Together they equal 4y.}}'
					),
			template: 'first', textAnswer: '&minus; 10xy + 3x + 4y', 
			buttonValueA: 'T', buttonLabelA: '<span class=bigger>-</span>10xy + 3x + 4y', 
            buttonValueB: 'F', buttonLabelB: '<span class=bigger>-</span>10xy &minus; 3x + 10y',
            buttonValueC: 'F', buttonLabelC: '<span class=bigger>&nbsp;</span>7xy + 10y', 
            buttonValueD: 'F', buttonLabelD: '<span class=bigger>-</span>10x <sup>2</sup>y <sup>2</sup> &minus; 3x + 4y'},
			
				//problem 14 (4m2/5 – 1/3) – (2m2/3 + 3/4)
				{prob: dataUtils.pre('\\grp'
									+'{\\html{(}}{\\frac'
										+'{\\fracstr{4m <sup>2}}{\\fracstr{5}}}'
									+'{\\sign{-}}'
									+'{\\frac'
										+'{\\fracstr{1}}{\\fracstr{3}}}{\\html{)}}'
										+'{\\sign{-}}'
										+'{\\html{(}}'
									+'{\\frac'
										+'{\\fracstr{2m <sup>2}}{\\fracstr{3}}}'
										+'{\\sign{+}}'
									+'{\\frac'
										+'{\\fracstr{3}}{\\fracstr{4}}}'
										+'{\\html{)}}'),
			help: dataUtils.pre('\\rowgrp'
					+'{\\html{First, we must distribute the negative sign into the parenthesis. The minus sign in front of the parenthesis means to take the <u>opposite sign</u> of <u>every</u> term inside the parenthesis.}}'
					 +'{\\html{&nbsp;}}'
			         +'{\\grp{\\sign{-}}{\\html{(}}{\\frac{\\fracstr{2m <sup>2}}{\\fracstr{3}}}{\\sign{+}}{\\frac{\\fracstr{3}}{\\fracstr{4}}}{\\html{)}}{\\html{becomes}}{\\sign{-}}{\\frac{\\fracstr{2m <sup>2}}{\\fracstr{3}}}{\\sign{-}}{\\frac{\\fracstr{3}}{\\fracstr{4}}}}'
					 +'{\\html{&nbsp;}}'
					 +'{\\grp{\\html{(}}{\\frac{\\fracstr{4m <sup>2}}{\\fracstr{5}}}{\\sign{-}}{\\frac{\\fracstr{1}}{\\fracstr{3}}}{\\html{)}}{\\sign{-}}{\\html{(}}{\\frac{\\fracstr{2m <sup>2}}{\\fracstr{3}}}{\\sign{+}}{\\frac{\\fracstr{3}}{\\fracstr{4}}}{\\html{)}}{\\html{becomes}}}'
					 +'{\\grp{\\html{(}}{\\frac{\\fracstr{4m <sup>2}}{\\fracstr{5}}}{\\sign{-}}{\\frac{\\fracstr{1}}{\\fracstr{3}}}{\\html{)}}{\\sign{-}}{\\frac{\\fracstr{2m <sup>2}}{\\fracstr{3}}}{\\sign{-}}{\\frac{\\fracstr{3}}{\\fracstr{4}}}}'
					 +'{\\html{&nbsp;}}'
					  +'{\\html{&nbsp;}}'
					 +'{\\grp{\\html{\"}}{\\frac{\\str{4m <sup>2}}{\\str{5}}}{\\html{\and}}{\\html{\"}}{\\sign{-}}{\\frac{\\str{2m<sup>2}}{\\str{3}}}{\\html{\" are like terms }}}'
					+'{\\grp{\\html{because they are all m <sup>2</sup> terms.}}{\\html{Together they equal}}{\\frac{\\fracstr{2m <sup>2}}{\\fracstr{15}}}}'					 
					+'{\\html{&nbsp;}}'
					 +'{\\grp{\\html{\"}}{\\frac{\\str{1 }}{\\str{3}}}{\\html{\and}}{\\html{\"}}{\\sign{-}}{\\frac{\\str{3}}{\\str{4}}}{\\html{\" are like terms}}}'
					 +'{\\grp{\\html{because they are both have no variable. Together they equal}}{\\frac{\\fracstr{-13 }}{\\fracstr{12}}}}'	
					 					
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
									+'{\\sign{+}}'
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
									+'{\\sign{+}}'
									+'{\\frac'
										+'{\\fracstr{5}}{\\fracstr{12}}}'),
			},
			//problem 15 (a/2 – 2b/3) – (3a/5 – b/7)
				{prob: dataUtils.pre('\\grp'
									+'{\\html{(}}{\\frac'
										+'{\\fracstr{a}}{\\fracstr{2}}}'
									+'{\\sign{-}}'
									+'{\\frac'
										+'{\\fracstr{2b}}{\\fracstr{3}}}{\\html{)}}'
										+'{\\sign{-}}'
										+'{\\html{(}}'
									+'{\\frac'
										+'{\\fracstr{3a}}{\\fracstr{5}}}'
										+'{\\sign{-}}'
									+'{\\frac'
										+'{\\fracstr{b}}{\\fracstr{7}}}'
										+'{\\html{)}}'),
			help: dataUtils.pre('\\rowgrp'
					+'{\\html{First, we must distribute the negative sign into the parenthesis. The minus sign in front of the parenthesis means to take the <u>opposite sign</u> of <u>every</u> term inside the parenthesis.}}'
					 +'{\\html{&nbsp;}}'
			         +'{\\grp{\\sign{-}}{\\html{(}}{\\frac{\\fracstr{3a }}{\\fracstr{5}}}{\\sign{-}}{\\frac{\\fracstr{b}}{\\fracstr{7}}}{\\html{)}}{\\html{becomes}}{\\sign{-}}{\\frac{\\fracstr{3a}}{\\fracstr{5}}}{\\sign{+}}{\\frac{\\fracstr{b}}{\\fracstr{7}}}}'
					 +'{\\html{&nbsp;}}'
					 +'{\\grp{\\html{(}}{\\frac{\\fracstr{a}}{\\fracstr{2}}}{\\sign{-}}{\\frac{\\fracstr{2b}}{\\fracstr{3}}}{\\html{)}}{\\sign{-}}{\\html{(}}{\\frac{\\fracstr{3a }}{\\fracstr{5}}}{\\sign{-}}{\\frac{\\fracstr{b}}{\\fracstr{7}}}{\\html{)}}{\\html{becomes}}}'
					 +'{\\grp{\\html{(}}{\\frac{\\fracstr{a }}{\\fracstr{2}}}{\\sign{-}}{\\frac{\\fracstr{2b}}{\\fracstr{3}}}{\\html{)}}{\\sign{-}}{\\frac{\\fracstr{3a }}{\\fracstr{5}}}{\\sign{+}}{\\frac{\\fracstr{b}}{\\fracstr{7}}}}'
					 +'{\\html{&nbsp;}}'
					  +'{\\html{&nbsp;}}'
					 +'{\\grp{\\html{\"}}{\\frac{\\str{a }}{\\str{2}}}{\\html{\and}}{\\html{\"}}{\\sign{-}}{\\frac{\\str{3a}}{\\str{5}}}{\\html{\" are like terms }}}'
					+'{\\grp{\\html{because they are all \"a\" terms.}}{\\html{Together they equal}}{\\sign{-}}{\\frac{\\fracstr{a }}{\\fracstr{10}}}}'					 
					+'{\\html{&nbsp;}}'
					  +'{\\grp{\\html{\"}}{\\sign{-}}{\\frac{\\str{2b }}{\\str{3}}}{\\html{\and}}{\\html{\"}}{\\frac{\\str{b}}{\\str{7}}}{\\html{\" are like terms }}}'
					+'{\\grp{\\html{because they are all \"b\" terms.}}{\\html{Together they equal}}{\\sign{-}}{\\frac{\\fracstr{11b }}{\\fracstr{21}}}}'					 
					+'{\\html{&nbsp;}}'	
					 					
					),
			template: 'second', 
			textAnswer: dataUtils.pre('{\\html{&nbsp;}}{\\grp'
				+'{\\sign{-}}{\\frac{\\html{a}}{\\str{10}}}{\\sign{-}}{\\frac{\\html{11b}}{\\str{21}}}'
				+'}'),
				buttonValueA: 'F',
				buttonLabelA: dataUtils.pre('\\grp'
									+'{\\sign{-}}'
									+'{\\frac'
										+'{\\fracstr{2a}}{\\fracstr{10}}}'
									+'{\\sign{-}}'
									+'{\\frac'
										+'{\\fracstr{b}}{\\fracstr{21}}}'),
				buttonValueB: 'F',
				buttonLabelB: dataUtils.pre('\\grp'
									+'{\\sign{-}}'
									+'{\\frac'
										+'{\\fracstr{11a}}{\\fracstr{10}}}'
									+'{\\sign{-}}'
									+'{\\frac'
										+'{\\fracstr{17b}}{\\fracstr{21}}}'),
				buttonValueC: 'T',
				buttonLabelC: dataUtils.pre('\\grp'
									+'{\\sign{-}}'
									+'{\\frac'
										+'{\\fracstr{a}}{\\fracstr{10}}}'
									+'{\\sign{-}}'
									+'{\\frac'
										+'{\\fracstr{11b}}{\\fracstr{21}}}'),
				buttonValueD: 'F',
				buttonLabelD: dataUtils.pre('\\grp'
									+'{\\html{&nbsp;}}'
									+'{\\frac'
									+'{\\fracstr{a}}{\\fracstr{10}}}'
									+'{\\sign{+}}'
									+'{\\frac'
										+'{\\fracstr{11b}}{\\fracstr{21}}}'),
			},
			];

	return dataUtils.build(desc, template, data);
}]);