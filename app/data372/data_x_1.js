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
										'{\\grp{\\btn{B}{$buttonValueB}{marg}}{$buttonLabelB}}'+
										'{\\grp{\\btn{C}{$buttonValueC}{marg}}{$buttonLabelC}}'+
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
			{prob: dataUtils.pre('\\html{&minus;5x - 7x}'),
			help: dataUtils.pre('\\rowgrp'
					+'{\\html{We can only combine \"like terms.\"}}{\\html{&nbsp;}}'
					+'{\\html{\"5x\" and \"-7x\" are like terms because they are both x<sup>1</sup> terms.}}'
					+'{\\html{&nbsp;}}{\\html{Combine the coefficients: &minus;5 - 7 = &minus;12}}'),
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
					+'{\\html{&nbsp;}}{\\html{&nbsp;}}{\\html{\"&minus; 3ab\" and \"6ab\" are like terms because they are both ab terms.}}'
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
					+'{\\html{both m terms.}}'
					+'{\\html{&nbsp;}}{\\html{Combine the coefficients:}}'
					+'{\\grp{\\frac{\\str{3m}}{\\str{4}}}{\\html{ &minus; }}{\\frac{\\str{7m}}{\\str{8}}}{\\html{=}}{\\html{ &minus; }}{\\frac{\\str{1m}}{\\str{8}}}}'),
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
					+'{\\html{&nbsp;}}{\\html{\"&minus; 8r\" and \"3r\" and \"&minus; 2r\" are like terms because they are both r terms.}}'
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
					+'{\\html{because they are both xy terms.}}'
					+'{\\html{&nbsp;}}{\\html{Combine the coefficients: &minus; 2 &minus; 7 &minus; 3  =  &minus;12}}'
					),
			template: 'first', textAnswer: '&minus;12xy', buttonValueA: 'F', buttonLabelA: '<span class=bigger>&nbsp;</span>2xy', 
            buttonValueB: 'F', buttonLabelB: '<span class=bigger>&nbsp;</span>6xy', 
            buttonValueC: 'F', buttonLabelC: '<span class=bigger>&nbsp;</span>6x<sup>3</sup>y<sup>3</sup>', 
            buttonValueD: 'T', buttonLabelD: '<span class=bigger>-</span>12xy'},
			
			// problem 7 First, we must get rid of the double negative.
//- (-3x/10) becomes + 3x/10

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