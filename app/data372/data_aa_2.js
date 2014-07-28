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
					secondHelp: '2x&#47;2 - 6&#47;2 gives us the leftover terms of:  x - 3',
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
					secondHelp: '3m&#47;3 - 9&#47;3 gives us the leftover terms of:  m - 3',
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
					secondHelp: '5x<sup>2</sup>&#47;x - 8x&#47;x gives us the leftover terms of:  5x - 8',
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
					secondHelp: '7a<sup>2</sup>&#47;a - 9a&#47;a gives us the leftover terms of:  7a - 9',
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
					secondHelp: '-8m<sup>3</sup>&#47;4m - 12m&#47;4m gives us the leftover terms of:  -2m<sup>2</sup> &#43; 3',
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
					secondHelp: '-9x<sup>3</sup>&#47;3x &#43; 6x&#47;3x gives us the leftover terms of:  -3x<sup>2</sup> &#43; 2',
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
					secondHelp: 'a<sup>4</sup>b<sup>2</sup>&#47;a<sup>3</sup>b &#43; a<sup>3</sup>bc<sup>2</sup>&#47;a<sup>3</sup>b gives us the leftover terms of:  ab &#43; c<sup>2</sup>',
					gcfHelp: 'a<sup>3</sup>b',
					leftoverHelp: 'ab &#43; c<sup>2</sup>',
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
