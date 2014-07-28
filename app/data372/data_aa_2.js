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
											+'{\\str{$firstHelp}}'
											+'{\\html{&nbsp;}}'
											+'{\\str{(2) To find what terms are left over <strong>after</strong> we factor out the GCF, we must divide each given term by the GCF. In this case we divide each term by the GCF of $gcfHelp.}}'
											+'{\\html{&nbsp;}}'
											+'{\\str{$secondHelp}}'
											+'{\\html{&nbsp;}}'
											+'{\\str{(3)  A factored polynomial will always be written in this format:  GCF (leftovers of each term after the division)}}'
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
					firstHelp: '2 is the greatest factor that can divide evenly into the terms 2x and -6. The GCF is: 2',
					secondHelp: '2x&#47;2 - 6&#47;2 gives us the leftover terms of:&nbsp;&nbsp;  x - 3',
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
					firstHelp: '3 is the greatest factor that can divide evenly into the terms 3m and -9. The GCF is: $$gcfHelp',
					secondHelp: '3m&#47;3 - 9&#47;3 gives us the leftover terms of:&nbsp;&nbsp;  m - 3',
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
					firstHelp: '1x or x is the greatest factor that can divide evenly into the terms 5x<sup>2</sup> and -8x. The GCF is: x',
					secondHelp: '5x<sup>2</sup>&#47;x - 8x&#47;x gives us the leftover terms of:&nbsp;&nbsp;  5x - 8',
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
					firstHelp: '1a or a is the greatest factor that can divide evenly into the terms 7a<sup>2</sup> and -9a. The GCF is: a',
					secondHelp: '7a<sup>2</sup>&#47;a - 9a&#47;a gives us the leftover terms of:&nbsp;&nbsp;  7a - 9',
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
					firstHelp: '4m is the greatest factor that can divide evenly into the terms -8m<sup>3</sup> and 12m. The GCF is: 4m',
					secondHelp: '-8m<sup>3</sup>&#47;4m - 12m&#47;4m gives us <br>the leftover terms of:&nbsp;  -2m<sup>2</sup> &#43; 3',
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
					firstHelp: '3x is the greatest factor that can divide evenly into the terms -9x<sup>3</sup> and 6x. The GCF is: 3x',
					secondHelp: '-9x<sup>3</sup>&#47;3x &#43; 6x&#47;3x gives us <br>the leftover terms of:&nbsp;  -3x<sup>2</sup> &#43; 2',
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
					firstHelp: '1a<sup>3</sup>b or a<sup>3</sup>b is the greatest factor that can divide evenly into the terms a<sup>4</sup>b<sup>2</sup> and a<sup>3</sup>bc<sup>2</sup>. The GCF is: a<sup>3</sup>b',
					secondHelp: 'a<sup>4</sup>b<sup>2</sup>&#47;a<sup>3</sup>b &#43; a<sup>3</sup>bc<sup>2</sup>&#47;a<sup>3</sup>b gives us <br>the leftover terms of:&nbsp;&nbsp;  ab &#43; c<sup>2</sup>',
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
					firstHelp: '1x<sup>3</sup>y or x<sup>3</sup>y is the greatest factor that can divide evenly into the terms x<sup>5</sup>y<sup>2</sup> and x<sup>3</sup>yz<sup>2</sup>. The GCF is: x<sup>3</sup>y',
					secondHelp: 'x<sup>5</sup>y<sup>2</sup>&#47;x<sup>3</sup>y &#43; x<sup>3</sup>yz<sup>2</sup>&#47;x<sup>3</sup>y gives us <br>the leftover terms of:&nbsp;&nbsp;  x<sup>2</sup>y &#43; z<sup>2</sup>',
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
					firstHelp: '6mn is the greatest factor that can divide evenly into the terms &nbsp;12m<sup>3</sup>n&nbsp; and -6mn. The GCF is: &nbsp;6mn',
					secondHelp: '12m<sup>3</sup>n&#47;6mn - 6mn&#47;6mn gives us <br>the leftover terms of:&nbsp;&nbsp;  2m<sup>2</sup>n - 1',
					gcfHelp: '6mn',
					leftoverHelp: '2m<sup>2</sup>n - 1',
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
					firstHelp: '10xy is the greatest factor that can divide evenly into the terms &nbsp;20x<sup>3</sup>y&nbsp; and -10xy. The GCF is: &nbsp;10xy',
					secondHelp: '20x<sup>3</sup>y&#47;10xy - 10xy&#47;10xy gives us <br>the leftover terms of:&nbsp;&nbsp;  2x<sup>2</sup> - 1',
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
					firstHelp: '-3x<sup>2</sup>y<sup>2</sup> is the greatest factor that can divide evenly into the terms &nbsp;-6x<sup>2</sup>y<sup>3</sup>&nbsp; and 15x<sup>5</sup>y<sup>2</sup>. The GCF is: &nbsp;-3x<sup>2</sup>y<sup>2</sup>',
					secondHelp: '2-6x<sup>2</sup>y<sup>3</sup>&#47;-3x<sup>2</sup>y<sup>2</sup> - 15x<sup>5</sup>y<sup>2</sup>&#47;-3x<sup>2</sup>y<sup>2</sup> gives us <br>the leftover terms of:&nbsp;&nbsp;  2y &#43; 5x<sup>3</sup>',
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
					firstHelp: '$$gcfHelp is the greatest factor that can divide evenly into the terms &nbsp;-6m<sup>2</sup>n<sup>3</sup>&nbsp; and 10m<sup>5</sup>n<sup>2</sup>. The GCF is: &nbsp;$$gcfHelp',
					secondHelp: '-6m<sup>2</sup>n<sup>3</sup>&#47;$$gcfHelp - 10m<sup>5</sup>n<sup>2</sup>&#47;$$gcfHelp gives us <br>the leftover terms of:&nbsp;&nbsp;  $$leftoverHelp',
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
					firstHelp: '$$gcfHelp is the greatest factor that can divide evenly into the terms &nbsp;5m<sup>2</sup><strong>,</strong>&nbsp; -15m<strong>,</strong> and -10m. The GCF is: &nbsp;$$gcfHelp',
					secondHelp: '5mn<sup>2</sup>&#47;$$gcfHelp - 15mn&#47;$$gcfHelp - 10m&#47;$$gcfHelp gives us <br>the leftover terms of:&nbsp;&nbsp;  $$leftoverHelp',
					gcfHelp: '5m',
					leftoverHelp: 'n<sup>2</sup> - 3n - 2',
					template: 'main'
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
					firstHelp: '$$gcfHelp is the greatest factor that can divide evenly into the terms &nbsp;20xy<sup>2</sup><strong>,</strong>&nbsp; -15xy<strong>,</strong> and -10x. The GCF is: &nbsp;$$gcfHelp',
					secondHelp: '20xy<sup>2</sup>&#47;$$gcfHelp - 15xy&#47;$$gcfHelp - 10x&#47;$$gcfHelp gives us <br>the leftover terms of:&nbsp;&nbsp;  $$leftoverHelp',
					gcfHelp: '5x',
					leftoverHelp: '4y<sup>2</sup> - 3y - 2',
					template: 'main'
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
					firstHelp: '$$gcfHelp is the greatest factor that can divide evenly into the terms -32a<sup>2</sup>b<sup>3</sup><strong>,</strong>&nbsp; 24a<sup>2</sup>b<strong>,</strong> and 8ab. The GCF is: &nbsp;$$gcfHelp',
					secondHelp: '-32a<sup>2</sup>b<sup>3</sup>&#47;$$gcfHelp &nbsp;&nbsp;-&nbsp;&nbsp; 24a<sup>2</sup>b&#47;$$gcfHelp &nbsp;&nbsp;-&nbsp;&nbsp; 8ab&#47;$$gcfHelp &nbsp;gives us <br>the leftover terms of:&nbsp;&nbsp;  $$leftoverHelp',
					gcfHelp: '-8ab',
					leftoverHelp: '4ab<sup>2</sup> &#43; 3a &#43; 1',
					template: 'main'
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
					firstHelp: '$$gcfHelp is the greatest factor that can divide evenly into the terms -14x<sup>2</sup>y<sup>3</sup><strong>,</strong>&nbsp; 21x<sup>2</sup>y<strong>,</strong> and 7xy. The GCF is: &nbsp;$$gcfHelp',
					secondHelp: '-14x<sup>2</sup>y<sup>3</sup>&#47;$$gcfHelp &nbsp;&nbsp;-&nbsp;&nbsp; 21x<sup>2</sup>y&#47;$$gcfHelp &nbsp;&nbsp;-&nbsp;&nbsp; 7xy&#47;$$gcfHelp &nbsp;gives us <br>the leftover terms of:&nbsp;&nbsp;  $$leftoverHelp',
					gcfHelp: '-7xy',
					leftoverHelp: '2xy<sup>2</sup> &#43; 3x &#43; 1',
					template: 'main'
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
					firstHelp: '$$gcfHelp is the greatest factor that can divide evenly into the terms 44a<sup>2</sup>c<strong>,</strong>&nbsp; 33a<sup>2</sup>b<sup>2</sup><strong>,</strong> and 11. The GCF is: &nbsp;$$gcfHelp',
					secondHelp: '44a<sup>2</sup>c&#47;$$gcfHelp &nbsp;&nbsp;-&nbsp;&nbsp; 33a<sup>2</sup>b<sup>2</sup>&#47;$$gcfHelp &nbsp;&nbsp;&#43;&nbsp;&nbsp; 11&#47;$$gcfHelp &nbsp;gives us <br>the leftover terms of:&nbsp;&nbsp;  $$leftoverHelp',
					gcfHelp: '11',
					leftoverHelp: '4a<sup>2</sup>c - 3a<sup>2</sup>b<sup>2</sup> &#43; 1',
					template: 'main'
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
					firstHelp: '$$gcfHelp is the greatest factor that can divide evenly into the terms 34x<sup>2</sup>z<strong>,</strong>&nbsp; 51x<sup>2</sup>y<sup>2</sup><strong>,</strong> and 17. The GCF is: &nbsp;$$gcfHelp',
					secondHelp: '34x<sup>2</sup>z&#47;$$gcfHelp &nbsp;&nbsp;-&nbsp;&nbsp; 51x<sup>2</sup>y<sup>2</sup>&#47;$$gcfHelp &nbsp;&nbsp;-&nbsp;&nbsp; 17&#47;$$gcfHelp &nbsp;gives us <br>the leftover terms of:&nbsp;&nbsp;  $$leftoverHelp',
					gcfHelp: '17',
					leftoverHelp: '2x<sup>2</sup>z - 3x<sup>2</sup>y<sup>2</sup> - 1',
					template: 'main'
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
					firstHelp: '$$gcfHelp is the greatest factor that can divide evenly into the terms -18xyz<sup>3</sup><strong>,</strong>&nbsp; 12xz<sup>2</sup><strong>,</strong> and 9y<sup>2</sup>z<sup>4</sup>. The GCF is: &nbsp;$$gcfHelp',
					secondHelp: '-18xyz<sup>3</sup>&#47;$$gcfHelp &nbsp;&nbsp;&#43;&nbsp;&nbsp; 12xz<sup>2</sup>&#47;$$gcfHelp &nbsp;&nbsp;-&nbsp;&nbsp; 9y<sup>2</sup>z<sup>4</sup>&#47;$$gcfHelp &nbsp;gives us <br>the leftover terms of:&nbsp;&nbsp;  $$leftoverHelp',
					gcfHelp: '3z<sup>2</sup>',
					leftoverHelp: '-6xyz &#43; 4x - 3y<sup>2</sup>z<sup>2</sup>',
					template: 'main'
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
					firstHelp: '$$gcfHelp is the greatest factor that can divide evenly into the terms -16m<sup>2</sup>no<sup>3</sup><strong>,</strong>&nbsp; 12m<sup>3</sup>n<sup>2</sup><strong>,</strong> and &nbsp;20m<sup>2</sup>n<sup>4</sup>o<sup>2</sup>. The GCF is: &nbsp;$$gcfHelp',
					secondHelp: '-16m<sup>2</sup>no<sup>3</sup>&#47;$$gcfHelp &nbsp;&nbsp;-&nbsp;&nbsp; 12m<sup>3</sup>n<sup>2</sup>&#47;$$gcfHelp &nbsp;&nbsp;&#43;&nbsp;&nbsp; 20m<sup>2</sup>n<sup>4</sup>o<sup>2</sup>&#47;$$gcfHelp &nbsp;gives us <br>the leftover terms of:&nbsp;&nbsp;  $$leftoverHelp',
					gcfHelp: '4m<sup>2</sup>n',
					leftoverHelp: '-4o<sup>3</sup> - 3mn &#43; 5n<sup>3</sup>o<sup>2</sup>',
					template: 'main'
				}
        ];/*,
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
		*/
		return dataUtils.build(desc, template, data);
    
}]);
