/*global angular */

angular.module('mathSkills').service('data_aa_2', ['dataUtils', function (dataUtils) {
    var desc = {
			title: 'AA.2 Factoring a Polynomial',
    		path: 'aa.2-factoring-a-polynomial',
            children: []
        },
	        template = {
			// first template, integers operation
			main: {
                title: 'Find the GCF of Terms',
                children: [{
                    title: 'Main Answer',
                    children: [{
						problem: '\\rowgrp'
									+'{\\str{Factor the polynomial:}}'
									+'{\\html{&nbsp;}}'
									+'{$probNumbers}',
						answer: '\\rowgrp'+
										'{\\grp{\\btn{A}{$buttonValueA}{margin-left-small}}{\\html{&nbsp;}}{$buttonLabelA}}'+
										'{\\grp{\\btn{B}{$buttonValueB}{margin-left-small}}{\\html{&nbsp;}}{$buttonLabelB}}'+
										'{\\grp{\\btn{C}{$buttonValueC}{margin-left-small}}{\\html{&nbsp;}}{$buttonLabelC}}'+
										'{\\grp{\\btn{D}{$buttonValueD}{margin-left-small}}{\\html{&nbsp;}}{$buttonLabelD}}',
						controls: {
								"checkAnswer": true,
								"help": '\\rowgrp'
											+'{\\str{(1) To factor a polynomial we must <strong>first</strong> identify the GCF of the terms.}}'
											+'{\\html{&nbsp;}}'
											+'{\\str{$firstHelp&nbsp; is the greatest factor that can divide evenly into the terms $firstNumHelp &nbsp;and&nbsp; $secondNumFirstHelp.&nbsp; The GCF is: $gcfHelp}}'
											+'{\\html{&nbsp;}}'
											+'{\\str{(2) To find what terms are left over <strong>after</strong> we factor out the GCF, we must divide each given term by the GCF. In this case we divide each term by the GCF of $gcfHelp.}}'
											+'{\\html{&nbsp;}}'
											+'{\\grp'
												+'{\\frac'
													+'{\\fracstr{$firstNumHelp}}'
													+'{\\fracstr{$gcfHelp}}'
												+'}'
												+'{\\str{$operation}}'
												+'{\\frac'
													+'{\\fracstr{$secondNumSecondHelp}}'
													+'{\\fracstr{$gcfHelp}}'
												+'}'
											+'}'
											+'{\\html{&nbsp;}}'
											+'{\\str{(3)  A factored polynomial will always be written in this format:}}'
											+'{\\html{&nbsp;}}'
											+'{\\str{&nbsp; &nbsp; &nbsp; &nbsp;GCF (leftovers of each term after the division)}}'
											+'{\\html{&nbsp;}}'
											+'{\\str{GCF: &nbsp; $gcfHelp}}'
											+'{\\str{Leftover terms: &nbsp; $leftoverHelp}}'
											+'{\\html{&nbsp;}}'
											+'{css'
												+'{\\str{Answer: &nbsp; $$gcfHelp($$leftoverHelp)}}'
												+'{help-answer-text}'
											+'}'
											+'{\\html{&nbsp;}}'
						}
					}]
				}]
			},
			threeElement: {
                title: 'Find the GCF of Terms',
                children: [{
                    title: 'Main Answer',
                    children: [{
						problem: '\\rowgrp'
									+'{\\str{Factor the polynomial:}}'
									+'{\\html{&nbsp;}}'
									+'{$probNumbers}',
						answer: '\\rowgrp'+
										'{\\grp{\\btn{A}{$buttonValueA}{margin-left-small}}{\\html{&nbsp;}}{$buttonLabelA}}'+
										'{\\grp{\\btn{B}{$buttonValueB}{margin-left-small}}{\\html{&nbsp;}}{$buttonLabelB}}'+
										'{\\grp{\\btn{C}{$buttonValueC}{margin-left-small}}{\\html{&nbsp;}}{$buttonLabelC}}'+
										'{\\grp{\\btn{D}{$buttonValueD}{margin-left-small}}{\\html{&nbsp;}}{$buttonLabelD}}',
						controls: {
								"checkAnswer": true,
								"help": '\\rowgrp'
											+'{\\str{(1) To factor a polynomial we must <strong>first</strong> identify the GCF of the terms.}}'
											+'{\\html{&nbsp;}}'
											+'{\\str{$gcfHelp&nbsp; is the greatest factor that can divide evenly into the terms &nbsp;$firstNumHelp<strong>,</strong>&nbsp; $secondNumFirstHelp<strong>,</strong>&nbsp; and $thirdNumFirstHelp.&nbsp; The GCF is:&nbsp; $gcfHelp}}'
											+'{\\html{&nbsp;}}'
											+'{\\str{(2) To find what terms are left over <strong>after</strong> we factor out the GCF, we must divide each given term by the GCF. In this case we divide each term by the GCF of $gcfHelp.}}'
											+'{\\html{&nbsp;}}'
											+'{\\grp'
												+'{\\frac'
													+'{\\fracstr{$firstNumHelp}}'
													+'{\\fracstr{$gcfHelp}}'
												+'}'
												+'{\\str{$operation}}'
												+'{\\frac'
													+'{\\fracstr{$secondNumSecondHelp}}'
													+'{\\fracstr{$gcfHelp}}'
												+'}'
												+'{\\str{$secondOperation}}'
												+'{\\frac'
													+'{\\fracstr{$thirdNumSecondHelp}}'
													+'{\\fracstr{$gcfHelp}}'
												+'}'
											+'}'
											+'{\\html{&nbsp;}}'
											+'{\\str{(3)  A factored polynomial will always be written in this format:}}'
											+'{\\html{&nbsp;}}'
											+'{\\str{&nbsp; &nbsp; &nbsp; &nbsp;GCF (leftovers of each term after the division)}}'
											+'{\\html{&nbsp;}}'
											+'{\\str{GCF: &nbsp; $gcfHelp}}'
											+'{\\str{Leftover terms: &nbsp; $leftoverHelp}}'
											+'{\\html{&nbsp;}}'
											+'{css'
												+'{\\str{Answer: &nbsp; $$gcfHelp($$leftoverHelp)}}'
												+'{help-answer-text}'
											+'}'
											+'{\\html{&nbsp;}}'
						}
					}]
				}]
			}
        },
        data = [
				{	// problem 1
					probNumbers: dataUtils.pre('\\str{2x - 6}'),
					buttonValueA: 'F',
					buttonLabelA: dataUtils.pre('\\str{&nbsp; &nbsp; 2x(3)}'),
					buttonValueB: 'T',
					buttonLabelB: dataUtils.pre('\\str{&nbsp; &nbsp; 2(x - 3)}'),
					buttonValueC: 'F',
					buttonLabelC: dataUtils.pre('\\str{&nbsp; &nbsp; 2(x - 6)}'),
					buttonValueD: 'F',
					buttonLabelD: dataUtils.pre('\\str{-2(x - 3)}'),
					firstHelp: '2',
					firstNumHelp: '2x',
					secondNumFirstHelp: '6',
                    secondNumSecondHelp: '$$secondNumFirstHelp',
					operation: '-',
					gcfHelp: '2',
					leftoverHelp: 'x - 3',
					template: 'main',
				}
				,
				{	// problem 2
					probNumbers: dataUtils.pre('\\str{3m - 9}'),
					buttonValueA: 'F',
					buttonLabelA: dataUtils.pre('\\str{-3(m - 3)}'),
					buttonValueB: 'T',
					buttonLabelB: dataUtils.pre('\\str{&nbsp; &nbsp; 3(m - 3)}'),
					buttonValueC: 'F',
					buttonLabelC: dataUtils.pre('\\str{&nbsp; &nbsp; 3(m - 9)}'),
					buttonValueD: 'F',
					buttonLabelD: dataUtils.pre('\\str{&nbsp; &nbsp; 3m(3)}'),
					firstHelp: '3',
					firstNumHelp: '3m',
					secondNumFirstHelp: '9',
                    secondNumSecondHelp: '$$secondNumFirstHelp',
					operation: '-',
					gcfHelp: '3',
					leftoverHelp: 'm - 3',
					template: 'main',
				}
				,
				{	// problem 3
					probNumbers: dataUtils.pre('\\str{5x<sup>2</sup> - 8x}'),
					buttonValueA: 'T',
					buttonLabelA: dataUtils.pre('\\str{&nbsp; &nbsp; x(5x - 8)}'),
					buttonValueB: 'F',
					buttonLabelB: dataUtils.pre('\\str{&nbsp; &nbsp; 5x(x - 8)}'),
					buttonValueC: 'F',
					buttonLabelC: dataUtils.pre('\\str{&nbsp; &nbsp; x<sup>2</sup>(5x - 8)}'),
					buttonValueD: 'F',
					buttonLabelD: dataUtils.pre('\\str{&nbsp; &nbsp; x(5x<sup>2</sup> - 8x)}'),
					firstHelp: '1x or x',
					firstNumHelp: '5x<sup>2</sup>',
					secondNumFirstHelp: '8x',
                    secondNumSecondHelp: '$$secondNumFirstHelp',
					operation: '-',
					gcfHelp: 'x',
					leftoverHelp: '5x - 8',
					template: 'main'
				}
				,
				{	// problem 4
					probNumbers: dataUtils.pre('\\str{7a<sup>2</sup> - 9a}'),
					buttonValueA: 'T',
					buttonLabelA: dataUtils.pre('\\str{&nbsp; &nbsp; a(7a - 9)}'),
					buttonValueB: 'F',
					buttonLabelB: dataUtils.pre('\\str{&nbsp; &nbsp;  a<sup>2</sup>(7a - 9)}'),
					buttonValueC: 'F',
					buttonLabelC: dataUtils.pre('\\str{&nbsp; &nbsp; 7a(a - 9)}'),
					buttonValueD: 'F',
					buttonLabelD: dataUtils.pre('\\str{&nbsp; &nbsp; a(7a<sup>2</sup> - 9a)}'),
					firstHelp: '1a or a',
					firstNumHelp: '7a<sup>2</sup>',
					secondNumFirstHelp: '9a',
                    secondNumSecondHelp: '$$secondNumFirstHelp',
					operation: '-',
					gcfHelp: 'a',
					leftoverHelp: '7a - 9',
					template: 'main'
				}
				,
				{	// problem 5
					probNumbers: dataUtils.pre('\\str{-8m<sup>3</sup> &#43; 12m}'),
					buttonValueA: 'T',
					buttonLabelA: dataUtils.pre('\\str{&nbsp; &nbsp; 4m(-2m<sup>2</sup> &#43; 3)}'),
					buttonValueB: 'F',
					buttonLabelB: dataUtils.pre('\\str{-4m(-2m<sup>2</sup> &#43; 3)}'),
					buttonValueC: 'F',
					buttonLabelC: dataUtils.pre('\\str{&nbsp; &nbsp; 4m<sup>3</sup>(-2m &#43; 3m)}'),
					buttonValueD: 'F',
					buttonLabelD: dataUtils.pre('\\str{&nbsp; &nbsp; 4m<sup>2</sup>(-2m &#43; 3)}'),
					firstHelp: '4m',
					firstNumHelp: '-8m<sup>3</sup>',
					secondNumFirstHelp: '12m',
                    secondNumSecondHelp: '$$secondNumFirstHelp',
					operation: '&#43;',
					gcfHelp: '4m',
					leftoverHelp: '-2m<sup>2</sup> &#43; 3',
					template: 'main'
				}
				,
				{	// problem 6
					probNumbers: dataUtils.pre('\\str{-9x<sup>3</sup> &#43; 6x}'),
					buttonValueA: 'F',
					buttonLabelA: dataUtils.pre('\\str{&nbsp; &nbsp; 3x<sup>3</sup>(-3x &#43; 2x)}'),
					buttonValueB: 'F',
					buttonLabelB: dataUtils.pre('\\str{&nbsp; &nbsp; 3x<sup>2</sup>(-3x &#43; 2)}'),
					buttonValueC: 'T',
					buttonLabelC: dataUtils.pre('\\str{&nbsp; &nbsp; 3x(-3x<sup>2</sup> &#43; 2)}'),
					buttonValueD: 'F',
					buttonLabelD: dataUtils.pre('\\str{-3x(-3x<sup>2</sup> &#43; 2)}'),
					firstHelp: '3x',
					firstNumHelp: '-9x<sup>3</sup>',
					secondNumFirstHelp: '6x',
                    secondNumSecondHelp: '$$secondNumFirstHelp',
					operation: '&#43;',
					gcfHelp: '3x',
					leftoverHelp: '-3x<sup>2</sup> &#43; 2',
					template: 'main'
				}
				,
				{	// problem 7
					probNumbers: dataUtils.pre('\\str{a<sup>4</sup>b<sup>2</sup> + a<sup>3</sup>bc<sup>2</sup>}'),
					buttonValueA: 'F',
					buttonLabelA: dataUtils.pre('\\str{&nbsp; &nbsp; a<sup>4</sup>b(ab &#43; bc<sup>2</sup>)}'),
					buttonValueB: 'T',
					buttonLabelB: dataUtils.pre('\\str{&nbsp; &nbsp; a<sup>3</sup>b(ab &#43; c<sup>2</sup>)}'),
					buttonValueC: 'F',
					buttonLabelC: dataUtils.pre('\\str{&nbsp; &nbsp; abc(a<sup>3</sup>b &#43; a<sup>2</sup>c)}'),
					buttonValueD: 'F',
					buttonLabelD: dataUtils.pre('\\str{&nbsp; &nbsp; a<sup>3</sup>b(b &#43; c<sup>2</sup>)}'),
					firstHelp: '1a<sup>3</sup>b or a<sup>3</sup>b',
					firstNumHelp: 'a<sup>4</sup>b<sup>2</sup>',
					secondNumFirstHelp: 'a<sup>3</sup>bc<sup>2</sup>',
                    secondNumSecondHelp: '$$secondNumFirstHelp',
					operation: '&#43;',
					gcfHelp: 'a<sup>3</sup>b',
					leftoverHelp: 'ab &#43; c<sup>2</sup>',
					template: 'main'
				}
				,
				{	// problem 8
					probNumbers: dataUtils.pre('\\str{x<sup>5</sup>y<sup>2</sup> &#43; x<sup>3</sup>yz<sup>2</sup>}'),
					buttonValueA: 'F',
					buttonLabelA: dataUtils.pre('\\str{&nbsp; &nbsp; x<sup>5</sup>y(xy &#43; yz<sup>2</sup>)}'),
					buttonValueB: 'T',
					buttonLabelB: dataUtils.pre('\\str{&nbsp; &nbsp; x<sup>3</sup>y(x<sup>2</sup>y &#43; z<sup>2</sup>)}'),
					buttonValueC: 'F',
					buttonLabelC: dataUtils.pre('\\str{&nbsp; &nbsp; xyz(x<sup>4</sup>y &#43; x<sup>2</sup>z)}'),
					buttonValueD: 'F',
					buttonLabelD: dataUtils.pre('\\str{&nbsp; &nbsp; x<sup>3</sup>y(x<sup>2</sup> &#43; z<sup>2</sup>)}'),
					firstHelp: '1x<sup>3</sup>y or x<sup>3</sup>y',
					firstNumHelp: 'x<sup>5</sup>y<sup>2</sup>',
					secondNumFirstHelp: 'x<sup>3</sup>yz<sup>2</sup>',
                    secondNumSecondHelp: '$$secondNumFirstHelp',
					operation: '&#43;',
					gcfHelp: 'x<sup>3</sup>y',
					leftoverHelp: 'x<sup>2</sup>y &#43; z<sup>2</sup>',
					template: 'main'
				}
				,
				{	// problem 9
					probNumbers: dataUtils.pre('\\str{12m<sup>3</sup>n - 6mn}'),
					buttonValueA: 'F',
					buttonLabelA: dataUtils.pre('\\str{&nbsp; &nbsp; 3mn(6m - 2mn)}'),
					buttonValueB: 'T',
					buttonLabelB: dataUtils.pre('\\str{&nbsp; &nbsp; 6mn(2m<sup>2</sup> - 1)}'),
					buttonValueC: 'F',
					buttonLabelC: dataUtils.pre('\\str{&nbsp; &nbsp; 3mn(4m<sup>2</sup> - 2)}'),
					buttonValueD: 'F',
					buttonLabelD: dataUtils.pre('\\str{&nbsp; &nbsp; 6mn(-2m<sup>2</sup> &#43; 1)}'),
					firstHelp: '6mn',
					firstNumHelp: '12m<sup>3</sup>n',
					secondNumFirstHelp: '6mn',
                    secondNumSecondHelp: '$$secondNumFirstHelp',
					operation: '-',
					gcfHelp: '6mn',
					leftoverHelp: '2m<sup>2</sup> - 1',
					template: 'main'
				}
				,
				{	// problem 10
					probNumbers: dataUtils.pre('\\str{20x<sup>3</sup>y - 10xy}'),
					buttonValueA: 'F',
					buttonLabelA: dataUtils.pre('\\str{&nbsp; &nbsp; 5xy(4x<sup>2</sup> - 2)}'),
					buttonValueB: 'F',
					buttonLabelB: dataUtils.pre('\\str{&nbsp; &nbsp; 10xy(-2x<sup>2</sup> &#43; 1)}'),
					buttonValueC: 'F',
					buttonLabelC: dataUtils.pre('\\str{&nbsp; &nbsp; 5xy(10x<sup>2</sup> - 2)}'),
					buttonValueD: 'T',
					buttonLabelD: dataUtils.pre('\\str{&nbsp; &nbsp; 10xy(2x<sup>2</sup> - 1)}'),
					firstHelp: '10xy',
					firstNumHelp: '20x<sup>3</sup>y',
					secondNumFirstHelp: '10xy',
                    secondNumSecondHelp: '$$secondNumFirstHelp',
					operation: '-',
					gcfHelp: '10xy',
					leftoverHelp: '2x<sup>2</sup> - 1',
					template: 'main'
				}
				,
				{	// problem 11
					probNumbers: dataUtils.pre('\\str{-6x<sup>2</sup>y<sup>3</sup> - 15x<sup>5</sup>y<sup>2</sup>}'),
					buttonValueA: 'F',
					buttonLabelA: dataUtils.pre('\\str{-3x<sup>2</sup>y<sup>2</sup>(2y - 5x<sup>3</sup>)}'),
					buttonValueB: 'F',
					buttonLabelB: dataUtils.pre('\\str{-30xy(5xy<sup>2</sup> &#43; 2x<sup>4</sup>y)}'),
					buttonValueC: 'F',
					buttonLabelC: dataUtils.pre('\\str{-6x<sup>2</sup>y<sup>2</sup>(y &#43; 3x)}'),
					buttonValueD: 'T',
					buttonLabelD: dataUtils.pre('\\str{-3x<sup>2</sup>y<sup>2</sup> (2y &#43; 5x<sup>3</sup>)}'),
					firstHelp: '-3x<sup>2</sup>y<sup>2</sup>',
					firstNumHelp: '-6x<sup>2</sup>y<sup>3</sup>',
					secondNumFirstHelp: '-15x<sup>5</sup>y<sup>2</sup>',
                    secondNumSecondHelp: '15x<sup>5</sup>y<sup>2</sup>',
					operation: '-',
					gcfHelp: '-3x<sup>2</sup>y<sup>2</sup>',
					leftoverHelp: '2y &#43; 5x<sup>3</sup>',
					template: 'main'
				}
				,
				{	// problem 12
					probNumbers: dataUtils.pre('\\str{-6m<sup>2</sup>n<sup>3</sup> - 10m<sup>5</sup>n<sup>2</sup>}'),
					buttonValueA: 'F',
					buttonLabelA: dataUtils.pre('\\str{-2m<sup>2</sup>n<sup>2</sup>(3n - 5m<sup>3</sup>)}'),
					buttonValueB: 'F',
					buttonLabelB: dataUtils.pre('\\str{-30mn(5mn<sup>2</sup> &#43; 3m<sup>4</sup>n)}'),
					buttonValueC: 'F',
					buttonLabelC: dataUtils.pre('\\str{-6m<sup>2</sup>n<sup>2</sup>(n &#43; 5m)}'),
					buttonValueD: 'T',
					buttonLabelD: dataUtils.pre('\\str{-2m<sup>2</sup>n<sup>2</sup>(3n &#43; 5m<sup>3</sup>)}'),
					firstHelp: '$$gcfHelp',
					firstNumHelp: '-6m<sup>2</sup>n<sup>3</sup>',
					secondNumFirstHelp: '-10m<sup>5</sup>n<sup>2</sup>',
                    secondNumSecondHelp: '10m<sup>5</sup>n<sup>2</sup>',
					operation: '-',
					gcfHelp: '-2m<sup>2</sup>n<sup>2</sup>',
					leftoverHelp: '3n &#43; 5m<sup>3</sup>',
					template: 'main'
				}
				,
				{	// problem 13
					probNumbers: dataUtils.pre('\\str{5mn<sup>2</sup> - 15mn - 10m}'),
					buttonValueA: 'F',
					buttonLabelA: dataUtils.pre('\\str{&nbsp; &nbsp; 5m(mn<sup>2</sup> - 3mn - 2m)}'),
					buttonValueB: 'F',
					buttonLabelB: dataUtils.pre('\\str{&nbsp; &nbsp; 5m(n<sup>2</sup> - 3mn - 2)}'),
					buttonValueC: 'T',
					buttonLabelC: dataUtils.pre('\\str{&nbsp; &nbsp; 5m(n<sup>2</sup> - 3n - 2)}'),
					buttonValueD: 'F',
					buttonLabelD: dataUtils.pre('\\str{-5m(mn<sup>2</sup> &#43; 3n &#43; 2m)}'),
					firstHelp: '$$gcfHelp',
                    firstNumHelp: '5mn<sup>2</sup>',
					secondNumFirstHelp: '-15m',
                    thirdNumFirstHelp: '-10m',
                    secondNumSecondHelp: '$$secondNumFirstHelp',
                    thirdNumSecondHelp: '$$thirdNumFirstHelp',
					operation: '-',
                    secondOperation: '-',
					gcfHelp: '5m',
					leftoverHelp: 'n<sup>2</sup> - 3n - 2',
					template: 'threeElement'
				}
				,
				{	// problem 14
					probNumbers: dataUtils.pre('\\str{20xy<sup>2</sup> - 15xy - 10x}'),
					buttonValueA: 'F',
					buttonLabelA: dataUtils.pre('\\str{&nbsp; &nbsp; 5x(4xy<sup>2</sup> - 3xy - 2x)}'),
					buttonValueB: 'T',
					buttonLabelB: dataUtils.pre('\\str{&nbsp; &nbsp; 5x(4y<sup>2</sup> - 3y - 2)}'),
					buttonValueC: 'F',
					buttonLabelC: dataUtils.pre('\\str{&nbsp; &nbsp; 5x(4y<sup>2</sup> - 3xy - 2)}'),
					buttonValueD: 'F',
					buttonLabelD: dataUtils.pre('\\str{-5x(4xy<sup>2</sup> &#43; 3xy &#43; 2x)}'),
					firstHelp: '$$gcfHelp',
					firstNumHelp: '20xy<sup>2</sup>',
					secondNumFirstHelp: '-15xy',
                    thirdNumFirstHelp: '-10x',
                    secondNumSecondHelp: '15xy',
                    thirdNumSecondHelp: '10x',
					operation: '-',
                    secondOperation: '-',
					gcfHelp: '5x',
					leftoverHelp: '4y<sup>2</sup> - 3y - 2',
					template: 'threeElement'
				}
				,
				{	// problem 15
					probNumbers: dataUtils.pre('\\str{-32a<sup>2</sup>b<sup>3</sup> - 24a<sup>2</sup>b - 8ab}'),
					buttonValueA: 'T',
					buttonLabelA: dataUtils.pre('\\str{-8ab(4ab<sup>2</sup> &#43; 3a &#43; 1)}'),
					buttonValueB: 'F',
					buttonLabelB: dataUtils.pre('\\str{-8ab(-4ab<sup>2</sup> - 3a - 1)}'),
					buttonValueC: 'F',
					buttonLabelC: dataUtils.pre('\\str{-8ab(4ab &#43; 48a &#43; 8)}'),
					buttonValueD: 'F',
					buttonLabelD: dataUtils.pre('\\str{&nbsp; &nbsp; 8ab(252ab &#43; 192a &#43; 64)}'),
					firstHelp: '$$gcfHelp',
					firstNumHelp: '-32a<sup>2</sup>b<sup>3</sup>',
					secondNumFirstHelp: '-24a<sup>2</sup>b',
                    thirdNumFirstHelp: '-8ab',
                    secondNumSecondHelp: '24a<sup>2</sup>b',
                    thirdNumSecondHelp: '8ab',
					operation: '-',
                    secondOperation: '-',
					gcfHelp: '-8ab',
					leftoverHelp: '4ab<sup>2</sup> &#43; 3a &#43; 1',
					template: 'threeElement'
				}
				,
				{	// problem 16
					probNumbers: dataUtils.pre('\\str{-14x<sup>2</sup>y<sup>3</sup> - 21x<sup>2</sup>y - 7xy }'),
					buttonValueA: 'F',
					buttonLabelA: dataUtils.pre('\\str{&nbsp; &nbsp; 7xy(-98xy - 147x - 49)}'),
					buttonValueB: 'F',
					buttonLabelB: dataUtils.pre('\\str{-7xy(-2xy<sup>2</sup> - 3x - 1)}'),
					buttonValueC: 'F',
					buttonLabelC: dataUtils.pre('\\str{-7xy(2xy &#43; 49x &#43; 1)}'),
					buttonValueD: 'T',
					buttonLabelD: dataUtils.pre('\\str{-7xy(2xy<sup>2</sup> &#43; 3x &#43; 1)}'),
					firstHelp: '$$gcfHelp',
					firstNumHelp: '-14x<sup>2</sup>y<sup>3</sup>',
					secondNumFirstHelp: '-21x<sup>2</sup>y',
                    thirdNumFirstHelp: '-7xy',
                    secondNumSecondHelp: '21x<sup>2</sup>y',
                    thirdNumSecondHelp: '7xy',
					operation: '-',
                    secondOperation: '-',
					gcfHelp: '-7xy',
					leftoverHelp: '2xy<sup>2</sup> &#43; 3x &#43; 1',
					template: 'threeElement'
				}
				,
				{	// problem 17
					probNumbers: dataUtils.pre('\\str{44a<sup>2</sup>c - 33a<sup>2</sup>b<sup>2</sup> &#43; 11 }'),
					buttonValueA: 'F',
					buttonLabelA: dataUtils.pre('\\str{&nbsp; &nbsp; 11(4ac - 3ab - 1)}'),
					buttonValueB: 'F',
					buttonLabelB: dataUtils.pre('\\str{&nbsp; &nbsp; 11(-4a<sup>2</sup>c - 3a<sup>2</sup>b<sup>2</sup> - 1)}'),
					buttonValueC: 'F',
					buttonLabelC: dataUtils.pre('\\str{&nbsp; &nbsp; 11ab(4ac - 3ab &#43; 1)}'),
					buttonValueD: 'T',
					buttonLabelD: dataUtils.pre('\\str{&nbsp; &nbsp; 11(4a<sup>2</sup>c - 3a<sup>2</sup>b<sup>2</sup> &#43; 1)}'),
					firstHelp: '$$gcfHelp',
					firstNumHelp: '44a<sup>2</sup>c',
					secondNumFirstHelp: '-33a<sup>2</sup>b<sup>2</sup>',
                    thirdNumFirstHelp: '11',
                    secondNumSecondHelp: '33a<sup>2</sup>b<sup>2</sup>',
                    thirdNumSecondHelp: '$$thirdNumFirstHelp',
					operation: '-',
                    secondOperation: '&#43;',
					gcfHelp: '11',
					leftoverHelp: '4a<sup>2</sup>c - 3a<sup>2</sup>b<sup>2</sup> &#43; 1',
					template: 'threeElement'
				}
				,
				{	// problem 18
					probNumbers: dataUtils.pre('\\str{34x<sup>2</sup>z - 51x<sup>2</sup>y<sup>2</sup> - 17}'),
					buttonValueA: 'F',
					buttonLabelA: dataUtils.pre('\\str{&nbsp; &nbsp; 17(2xz - 3xy - 1)}'),
					buttonValueB: 'T',
					buttonLabelB: dataUtils.pre('\\str{&nbsp; &nbsp; 17(2x<sup>2</sup>z - 3x<sup>2</sup>y<sup>2</sup> - 1)}'),
					buttonValueC: 'F',
					buttonLabelC: dataUtils.pre('\\str{&nbsp; &nbsp; 1(34x<sup>2</sup>z - 51x<sup>2</sup>y<sup>2</sup> - 17)}'),
					buttonValueD: 'F',
					buttonLabelD: dataUtils.pre('\\str{-1(-34x<sup>2</sup>z &#43; 51x<sup>2</sup>y<sup>2</sup> &#43; 17)}'),
					firstHelp: '$$gcfHelp',
					firstNumHelp: '34x<sup>2</sup>z',
					secondNumFirstHelp: '-51x<sup>2</sup>y<sup>2</sup>',
                    thirdNumFirstHelp: '-17',
                    secondNumSecondHelp: '51x<sup>2</sup>y<sup>2</sup>',
                    thirdNumSecondHelp: '17',
					operation: '-',
                    secondOperation: '-',
					gcfHelp: '17',
					leftoverHelp: '2x<sup>2</sup>z - 3x<sup>2</sup>y<sup>2</sup> - 1',
					template: 'threeElement'
				}
				,
				{	// problem 19
					probNumbers: dataUtils.pre('\\str{-18xyz<sup>3</sup> &#43; 12xz<sup>2</sup> - 9y<sup>2</sup>z<sup>4</sup> }'),
					buttonValueA: 'F',
					buttonLabelA: dataUtils.pre('\\str{&nbsp; &nbsp; 3z<sup>2</sup>(-6xy &#43; 4x - 3y<sup>2</sup>z<sup>2</sup>)}'),
					buttonValueB: 'T',
					buttonLabelB: dataUtils.pre('\\str{&nbsp; &nbsp; 3z<sup>2</sup>(-6xyz &#43; 4x - 3y<sup>2</sup>z<sup>2</sup>)}'),
					buttonValueC: 'F',
					buttonLabelC: dataUtils.pre('\\str{&nbsp; &nbsp; 3xyz(-6z<sup>2</sup> &#43; 4z - 3yz<sup>3</sup>)}'),
					buttonValueD: 'F',
					buttonLabelD: dataUtils.pre('\\str{-3(-6xyz<sup>3</sup> &#43; 4xz<sup>2</sup> &#43; 3y<sup>2</sup>z<sup>4</sup>)}'),
					firstHelp: '$$gcfHelp',
					firstNumHelp: '-18xyz<sup>3</sup>',
					secondNumFirstHelp: '12xz<sup>2</sup>',
                    thirdNumFirstHelp: '-9y<sup>2</sup>z<sup>4</sup>',
                    secondNumSecondHelp: '12xz<sup>2</sup>',
                    thirdNumSecondHelp: '9y<sup>2</sup>z<sup>4</sup>',
					operation: '&#43;',
                    secondOperation: '-',
					gcfHelp: '3z<sup>2</sup>',
					leftoverHelp: '-6xyz &#43; 4x - 3y<sup>2</sup>z<sup>2</sup>',
					template: 'threeElement'
				}
				,
				{	// problem 20
					probNumbers: dataUtils.pre('\\str{-16m<sup>2</sup>no<sup>3</sup> - 12m<sup>3</sup>n<sup>2</sup> &#43; 20m<sup>2</sup>n<sup>4</sup>o<sup>2</sup>}'),
					buttonValueA: 'F',
					buttonLabelA: dataUtils.pre('\\str{&nbsp; &nbsp; 4mn(-4mo<sup>3</sup> - 3m<sup>2</sup>n &#43; 5mn<sup>3</sup>o<sup>2</sup>)}'),
					buttonValueB: 'F',
					buttonLabelB: dataUtils.pre('\\str{-4m<sup>2</sup>n(-4o<sup>3</sup> - 3mn &#43; 5n<sup>3</sup>o<sup>2</sup>)}'),
					buttonValueC: 'T',
					buttonLabelC: dataUtils.pre('\\str{&nbsp; &nbsp; 4m<sup>2</sup>n(-4o<sup>3</sup> - 3mn &#43; 5n<sup>3</sup>o<sup>2</sup>)}'),
					buttonValueD: 'F',
					buttonLabelD: dataUtils.pre('\\str{&nbsp; &nbsp; 4o<sup>2</sup>(-4m<sup>2</sup>no - 3m<sup>3</sup>n<sup>2</sup> &#43; 5m<sup>2</sup>n<sup>4</sup>)}'),
					firstHelp: '$$gcfHelp', 
					firstNumHelp: '-16m<sup>2</sup>no<sup>3</sup>',
					secondNumFirstHelp: '-12m<sup>3</sup>n<sup>2</sup>',
                    thirdNumFirstHelp: '20m<sup>2</sup>n<sup>4</sup>o<sup>2</sup>',
                    secondNumSecondHelp: '12m<sup>3</sup>n<sup>2</sup>',
                    thirdNumSecondHelp: '$$thirdNumFirstHelp',
					operation: '-',
                    secondOperation: '&#43;',
					gcfHelp: '4m<sup>2</sup>n',
					leftoverHelp: '-4o<sup>3</sup> - 3mn &#43; 5n<sup>3</sup>o<sup>2</sup>',
					template: 'threeElement'
				}
        ];
		shuffle = [
				{ problems: [1,2], total: 1},
				{ problems: [3,4], total: 1},
				{ problems: [5,6], total: 1},
				{ problems: [7,8], total: 1},
				{ problems: [9,10], total: 1},
				{ problems: [11,12], total: 1},
				{ problems: [13,14], total: 1},
				{ problems: [15,16], total: 1},
				{ problems: [17,18], total: 1},
				{ problems: [19,20], total: 1}
		];
		return dataUtils.build(desc, template, data, shuffle);
		
		//return dataUtils.build(desc, template, data);
    
}]);
