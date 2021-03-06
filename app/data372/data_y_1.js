/*global angular */

angular.module('mathSkills').service('data_y_1', ['dataUtils', function (dataUtils) {
var desc = {
    title: 'Y.1 Multiplication of Monomials',
    path: 'Y.1-multiplication-of-monomials',
    children: []
},
template = {
			main: {
                title: 'Evaluate Signed Expressions',
                children: [{
                    title: 'Main Answer',
                    children: [{
						problem: '\\rowgrp'
									+'{\\str{Simplify:}}'
									+'{\\str{&nbsp;}}'
									+'{$problem}',
						answer: '\\css'+
									'{\\rowgrp'+
										'{\\ins{Choose the right answer:}}'+
										'{\\grp{\\btn{A}{$buttonValueA}{marg}}{$buttonLabelA}}'+
										'{\\grp{\\btn{B}{$buttonValueB}{marg}}{$buttonLabelB}}'+
										'{\\grp{\\btn{C}{$buttonValueC}{marg}}{$buttonLabelC}}'+
										'{\\grp{\\btn{D}{$buttonValueD}{marg}}{$buttonLabelD}}'+
									'}'+
									'{tdButtonHeight50px}',
						controls: {
							"checkAnswer": true,
							"help": '\\rowgrp'
										+'{\\html{When multiplying terms, multiply:}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\str{(1) the coefficients together: &nbsp; }}'
											+'$firstHelp'
										+'}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{(1) the coefficients }}'
												+'{hiddenSpace}'
											+'}'
											+'{\\str{and}}'
										+'}'
										+'{\\html{(2) the same variable(s) together&nbsp;( follow the exponent rule - multiplication of same bases -- add exponents) :}}'
										+'{\\html{&nbsp;}}'
										+'$thirdHelp'
										+'{\\html{&nbsp;}}'
										+'{css{\\html{answer:  &nbsp; $answer}}{help-answer-text}}'
						}
					}]
				}]
			},
			fractional: {
                title: 'Evaluate Signed Expressions',
                children: [{
                    title: 'Main Answer',
                    children: [{
						problem: '\\rowgrp'
									+'{\\str{Simplify:}}'
									+'{\\str{&nbsp;}}'
									+'{$problem}',
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
										+'{\\html{When multiplying terms, multiply:}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\str{(1) the coefficients together: &nbsp; }}'
											+'{$firstHelp}'
										+'}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{(1) the coefficients }}'
												+'{hiddenSpace}'
											+'}'
											+'{\\str{and}}'
										+'}'
										+'{\\html{(2) the same variable(s) together&nbsp;( follow the exponent rule - multiplication of same bases -- add exponents) :}}'
										+'{\\html{&nbsp;}}'
										+'$thirdHelp'
										+'{\\html{&nbsp;}}'
										+'{\\css'
											+'{\\grp'
												+'{\\html{answer:  &nbsp;}}'						                                            	+'$answer'
											+'}'
											+'{help-answer-text}'
										+'}'
						}
					}]
				}]
			}
        },
        data = [
			// problem 1
			{ 	problem: dataUtils.pre('\\str{3 &nbsp; * &nbsp; 4x}'), 
				buttonValueA: 'F',
				buttonLabelA: dataUtils.pre('\\str{7x}'),
				buttonValueB: 'T',
				buttonLabelB: dataUtils.pre('\\str{12x}'),
				buttonValueC: 'F',
				buttonLabelC: dataUtils.pre('\\str{7}'),
				buttonValueD: 'F',
				buttonLabelD: dataUtils.pre('\\str{12}'),
				firstHelp: dataUtils.pre('{\\str{3 * 4 = 12}}'),
				thirdHelp: dataUtils.pre('{\\str{The variable \"x\" has no other \"x\" to multiply by, so it remains a part of the multiplication (12 * x).}}'),
				answer: '12x',
				answerBtn: 'noAnswer',
				template: 'main'
			}
			,
			// problem 2
			{ 	problem: dataUtils.pre('\\str{5m &nbsp; * &nbsp; 3m}'), 
				buttonValueA: 'T',
				buttonLabelA: dataUtils.pre('\\str{15m<sup>2</sup>}'),
				buttonValueB: 'F',
				buttonLabelB: dataUtils.pre('\\str{15m}'),
				buttonValueC: 'F',
				buttonLabelC: dataUtils.pre('\\str{8m}'),
				buttonValueD: 'F',
				buttonLabelD: dataUtils.pre('\\str{8m<sup>2</sup>}'),
				firstHelp: dataUtils.pre('{\\str{5 * 3 = 15}}'),
				thirdHelp: dataUtils.pre('{\\grp'
											+'{\\css'
												+'{\\str{(1) the coefficients together: &nbsp; }}'
												+'{hiddenSpace}'
											+'}'
											+'{\\str{m * m = m<sup>2</sup>}}'
										+'}'
									),
				answer: '15m<sup>2</sup>',
				answerBtn: 'noAnswer',
				template: 'main'
			}
			,
			// problem 3
			{ 	problem: dataUtils.pre('\\str{-2y &nbsp; * &nbsp; 7y<sup>2</sup>}'), 
				buttonValueA: 'F',
				buttonLabelA: dataUtils.pre('\\str{14y}'),
				buttonValueB: 'F',
				buttonLabelB: dataUtils.pre('\\str{14y<sup>3</sup>}'),
				buttonValueC: 'T',
				buttonLabelC: dataUtils.pre('\\str{-14y<sup>3</sup>}'),
				buttonValueD: 'F',
				buttonLabelD: dataUtils.pre('\\str{-14y<sup>2</sup>}'),
				firstHelp: dataUtils.pre('{\\str{-2 * 7  =  -14}}'),
				thirdHelp: dataUtils.pre('{\\grp'
											+'{\\css'
												+'{\\str{(1) the coefficients together: &nbsp; }}'
												+'{hiddenSpace}'
											+'}'
											+'{\\str{y * y<sup>2</sup> = y<sup>3</sup>}}'
										+'}'
									),
				answer: '-14y<sup>3</sup>',
				answerBtn: 'noAnswer',
				template: 'main'
			}
			,
			// problem 4
			{ 	problem: dataUtils.pre('\\str{(-3x<sup>4</sup>y)(-4x<sup>2</sup>y)}'), 
				buttonValueA: 'F',
				buttonLabelA: dataUtils.pre('\\str{-12x<sup>8</sup>y<sup>2</sup>}'),
				buttonValueB: 'T',
				buttonLabelB: dataUtils.pre('\\str{12x<sup>6</sup>y<sup>2</sup>}'),
				buttonValueC: 'F',
				buttonLabelC: dataUtils.pre('\\str{-7x<sup>8</sup>y}'),
				buttonValueD: 'F',
				buttonLabelD: dataUtils.pre('\\str{7x<sup>8</sup>y}'),
				firstHelp: dataUtils.pre('{\\str{-3 * -4  =  12}}'),
				thirdHelp: dataUtils.pre('{\\grp'
											+'{\\css'
												+'{\\str{(1) the coefficients together: &nbsp; }}'
												+'{hiddenSpace}'
											+'}'
											+'{\\str{x<sup>4</sup> * x<sup>2</sup> = x<sup>6</sup><br>y * y = y<sup>2</sup>}}'
										+'}'
									),
				answer: '12x<sup>6</sup>y<sup>2</sup>',
				answerBtn: 'noAnswer',
				template: 'main'
			}
			,
			// problem 5
			{ 	problem: dataUtils.pre('\\str{(-6)(3m<sup>2</sup>n)}'), 
				buttonValueA: 'T',
				buttonLabelA: dataUtils.pre('\\str{-18m<sup>2</sup>n}'),
				buttonValueB: 'F',
				buttonLabelB: dataUtils.pre('\\str{18m<sup>2</sup>n}'),
				buttonValueC: 'F',
				buttonLabelC: dataUtils.pre('\\str{18m}'),
				buttonValueD: 'F',
				buttonLabelD: dataUtils.pre('\\str{-18}'),
				firstHelp: dataUtils.pre('{\\str{-6 * 3  =  -18}}'),
				thirdHelp: dataUtils.pre('{\\str{The variable \"m\" has no other \"m\" to multiply by. The variable \"n\" has no other \"n\" to multiply by. The m<sup>2</sup> and the n remain a part of the multiplication (-18 * m<sup>2</sup> * n).}}'),
				answer: '-18m<sup>2</sup>n',
				answerBtn: 'noAnswer',
				template: 'main'
			}
			,
			// problem 6
			{ 	problem: dataUtils.pre('\\str{-2x<sup>3</sup>(5xy)}'), 
				buttonValueA: 'F',
				buttonLabelA: dataUtils.pre('\\str{10x<sup>3</sup>}'),
				buttonValueB: 'F',
				buttonLabelB: dataUtils.pre('\\str{10x<sup>4</sup>y}'),
				buttonValueC: 'F',
				buttonLabelC: dataUtils.pre('\\str{-10x<sup>3</sup>y}'),
				buttonValueD: 'T',
				buttonLabelD: dataUtils.pre('\\str{-10x<sup>4</sup>y}'),
				firstHelp: dataUtils.pre('{\\str{-2 * 5  =  -10}}'),
				thirdHelp: dataUtils.pre('{\\grp'
											+'{\\css'
												+'{\\str{(1) the coefficients together: &nbsp; }}'
												+'{hiddenSpace}'
											+'}'
											+'{\\str{x<sup>3</sup> * x = x<sup>4</sup>}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\str{The variable \"y\" has no other \"y\" to multiply by. The y remains part of the multiplication (-10 * x<sup>4</sup> * y).}}'
									),
				answer: '-10x<sup>4</sup>y',
				answerBtn: 'noAnswer',
				template: 'main' 
			}
			,
			// problem 7
			{ 	problem: dataUtils.pre('\\grp'
									   +'{\\str{(}}'
									   +'{\\frac{\\fracstr{-2}}{\\fracstr{5}}}'
									   +'{\\str{)}}'
									   +'{\\str{(&nbsp; 15a<sup>2</sup> &nbsp;)}}'
									   ), 
				buttonValueA: 'F',
				buttonLabelA: dataUtils.pre('\\str{-30a<sup>2</sup>}'),
				buttonValueB: 'F',
				buttonLabelB: dataUtils.pre('\\str{30a<sup>2</sup>}'),
				buttonValueC: 'T',
				buttonLabelC: dataUtils.pre('\\str{-6a<sup>2</sup>}'),
				buttonValueD: 'F',
				buttonLabelD: dataUtils.pre('\\str{-6}'),
				firstHelp: dataUtils.pre('{\\grp'
											   +'{\\frac{\\fracstr{-2}}{\\fracstr{5}}}'
											   +'{\\str{* 15 = -6}}'
										   +'}'
									   ),
				thirdHelp: dataUtils.pre('{\\str{The variable \"a\" has no other \"a\" to multiply by. The a<sup>2</sup> remains a part of the multiplication (-6 * a<sup>2</sup>).}}'),
				answer: '-6a<sup>2</sup>',
				answerBtn: 'noAnswer',
				template: 'main'
			}
			,
			// problem 8
			{ 	problem: dataUtils.pre('\\grp'
										   +'{\\str{(}}'
										   +'{\\frac{\\fracstr{-3m<sup>3</sup>n}}{\\fracstr{4}}}'
										   +'{\\str{)}}'
										   +'{\\str{(}}'
										   +'{\\frac{\\fracstr{-1m<sup>2</sup>}}{\\fracstr{6}}}'
										   +'{\\str{)}'
										+'}'
									  ), 
				buttonValueA: 'T',
				buttonLabelA: dataUtils.pre('\\frac{\\fracstr{m<sup>5</sup>n}}{\\fracstr{8}}'),
				buttonValueB: 'F',
				buttonLabelB: dataUtils.pre('\\frac{\\fracstr{-3mn}}{\\fracstr{10}}'),
				buttonValueC: 'F',
				buttonLabelC: dataUtils.pre('\\frac{\\fracstr{-m}}{\\fracstr{8n}}'),
				buttonValueD: 'F',
				buttonLabelD: dataUtils.pre('\\frac{\\fracstr{m<sup>6</sup>n}}{\\fracstr{8}}'),
				firstHelp: dataUtils.pre('\\grp'
										   +'{\\frac{\\fracstr{-3}}{\\fracstr{4}}}'
										   +'{\\str{*}}'
										   +'{\\frac{\\fracstr{-1}}{\\fracstr{6}}}'
										   +'{\\sign{=}}'
										   +'{\\frac{\\fracstr{1}}{\\fracstr{8}}}'
									   ),
				thirdHelp: dataUtils.pre('{\\grp'
											+'{\\css'
												+'{\\str{(1) the coefficients together: &nbsp; }}'
												+'{hiddenSpace}'
											+'}'
											+'{\\str{m<sup>3</sup> * m<sup>2</sup> = m<sup>5</sup>}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\str{The variable \"n\" has no other \"n\" to multiply by. The n remains part of the multiplication:}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{(1) the coefficients together: &nbsp; }}'
												+'{hiddenSpace}'
											+'}'
											+'{\\css'
												+'{\\frac{\\fracstr{1}}{\\fracstr{8}}}'	
												+'{fracNoMargin}'
											+'}'
											+'{\\str{* m<sup>5</sup> * n}}'
										+'}'
									),
				answer: dataUtils.pre(
									  '{\\frac{\\fracstr{m<sup>5</sup>n}}{\\fracstr{8}}}'
									  ),
				answerBtn: 'noAnswer',
				template: 'fractional'
			}
			,
			// problem 9
			{ 	problem: dataUtils.pre('\\str{(-x) (x<sup>2</sup>) (-4y)}'), 
				buttonValueA: 'F',
				buttonLabelA: dataUtils.pre('\\str{-6x<sup>2</sup>}'),
				buttonValueB: 'F',
				buttonLabelB: dataUtils.pre('\\str{12x<sup>3</sup>y}'),
				buttonValueC: 'F',
				buttonLabelC: dataUtils.pre('\\str{3xy}'),
				buttonValueD: 'T',
				buttonLabelD: dataUtils.pre('\\str{4x<sup>3</sup>y}'),
				firstHelp: dataUtils.pre('{\\str{-1 * 1 * -4  =  4}}'),
				thirdHelp: dataUtils.pre('{\\grp'
											+'{\\css'
												+'{\\str{(1) the coefficients together: &nbsp; }}'
												+'{hiddenSpace}'
											+'}'
											+'{\\str{x * x<sup>2</sup> = x<sup>3</sup>}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\str{The variable \"y\" has no other \"y\" to multiply by. The y remains part of the multiplication (4 * x<sup>3</sup> * y).}}'
									),
				answer: '4x<sup>3</sup>y',
				answerBtn: 'noAnswer',
				template: 'main'
			}
			,
			// problem 10
			{ 	problem: dataUtils.pre('\\str{4y * -2x * 7xz<sup>3</sup> }'), 
				buttonValueA: 'F',
				buttonLabelA: dataUtils.pre('\\str{9x<sup>2</sup>yz<sup>3</sup>}'),
				buttonValueB: 'T',
				buttonLabelB: dataUtils.pre('\\str{-56x<sup>2</sup>yz<sup>3</sup>}'),
				buttonValueC: 'F',
				buttonLabelC: dataUtils.pre('\\str{-56yz<sup>3</sup>}'),
				buttonValueD: 'F',
				buttonLabelD: dataUtils.pre('\\str{9x<sup>2</sup>}'),
				firstHelp: dataUtils.pre('{\\str{4 * -2 * 7  =  -56}}'),
				thirdHelp: dataUtils.pre('{\\grp'
											+'{\\css'
												+'{\\str{(1) the coefficients together: &nbsp; }}'
												+'{hiddenSpace}'
											+'}'
											+'{\\str{x * x = x<sup>2</sup>}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\str{The variable \"y\" has no other \"y\" to multiply by. The variable \"z\" has no other \"z\" to multiply by. The y and the z remain a part of the multiplication (-56 * x<sup>2</sup> * y * z<sup>3</sup>).}}'
									),
				answer: '-56x<sup>2</sup>yz<sup>3</sup>',
				answerBtn: 'noAnswer',
				template: 'main'
			}
        ];

	return dataUtils.build(desc, template, data);
}]);
