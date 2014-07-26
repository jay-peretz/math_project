/*global angular */

angular.module('mathSkills').service('data_aa_1', ['dataUtils', function (dataUtils) {
    var desc = {
			title: 'AA.1 Find the GCF of Terms',
    		path: 'aa.1-find-the-gcf-of-terms',
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
									+'{\\str{Find the GCF for the following terms:}}'
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
											+'{\\html{Find the GCF of:}}'
											+'{\\html{&nbsp;}}'
											+'{\\html{'
												+'<table >'
													+'<tr><td class=width160ValignTop>(1) the coefficients:</td><td>$firstCoefficients</td></tr>'
													+'<tr><td class=width160ValignTop>&nbsp;</td><td>&nbsp;</td></tr>'
													+'<tr><td class=width160ValignTop>(2) the variables:</td><td>$firstVariables</td></tr>'
												+'</table>'
											+'}}'
											+'{\\html{&nbsp;}}'
											+'{css'
												+'{\\html{Answer:  $textAnswer}}'
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
					probNumbers: dataUtils.pre('\\str{18 and 12}'),
					buttonValueA: 'F',
					buttonLabelA: dataUtils.pre('\\str{12}'),
					buttonValueB: 'F',
					buttonLabelB: dataUtils.pre('\\str{36}'),
					buttonValueC: 'T',
					buttonLabelC: dataUtils.pre('\\str{6}'),
					buttonValueD: 'F',
					buttonLabelD: dataUtils.pre('\\str{3}'),
					textAnswer: ' &nbsp; 6', 
					template: 'main',
					firstCoefficients: '6 is the greatest factor that can divide evenly into 18 and 12.',
					firstVariables: 'There are no variables, so no variable can be found in common.',
				}
				,
				{	// problem 2
					probNumbers: dataUtils.pre('\\str{30 and 45}'),
					buttonValueA: 'F',
					buttonLabelA: dataUtils.pre('\\str{45}'),
					buttonValueB: 'T',
					buttonLabelB: dataUtils.pre('\\str{15}'),
					buttonValueC: 'F',
					buttonLabelC: dataUtils.pre('\\str{5}'),
					buttonValueD: 'F',
					buttonLabelD: dataUtils.pre('\\str{135}'),
					textAnswer: ' &nbsp; 15', 
					template: 'main',
					firstCoefficients: '15 is the greatest factor that can divide evenly into 30 and 45.',
					firstVariables: 'There are no variables, so no variable can be found in common.',
				}
				,
				{	// problem 3
					probNumbers: dataUtils.pre('\\str{14, 7, and 3}'),
					buttonValueA: 'T',
					buttonLabelA: dataUtils.pre('\\str{1}'),
					buttonValueB: 'F',
					buttonLabelB: dataUtils.pre('\\str{3}'),
					buttonValueC: 'F',
					buttonLabelC: dataUtils.pre('\\str{14}'),
					buttonValueD: 'F',
					buttonLabelD: dataUtils.pre('\\str{42}'),
					textAnswer: ' &nbsp; 1', 
					template: 'main',
					firstCoefficients: '1 is the greatest factor that can divide evenly into 14, 7, and 3.',
					firstVariables: 'There are no variables, so no variable can be found in common.',
				}
				,
				{	// problem 4
					probNumbers: dataUtils.pre('\\str{5, 9, and 12}'),
					buttonValueA: 'F',
					buttonLabelA: dataUtils.pre('\\str{5}'),
					buttonValueB: 'F',
					buttonLabelB: dataUtils.pre('\\str{60}'),
					buttonValueC: 'F',
					buttonLabelC: dataUtils.pre('\\str{12}'),
					buttonValueD: 'T',
					buttonLabelD: dataUtils.pre('\\str{1}'),
					textAnswer: ' &nbsp; 1', 
					template: 'main',
					firstCoefficients: '1 is the greatest factor that can divide evenly into 5, 9, and 12.',
					firstVariables: 'There are no variables, so no variable can be found in common.',
				}
				,
				{	// problem 5
					probNumbers: dataUtils.pre('\\str{8x<sup>2</sup> and 2y}'),
					buttonValueA: 'F',
					buttonLabelA: dataUtils.pre('\\str{16x<sup>2</sup>y}'),
					buttonValueB: 'F',
					buttonLabelB: dataUtils.pre('\\str{2x}'),
					buttonValueC: 'T',
					buttonLabelC: dataUtils.pre('\\str{2}'),
					buttonValueD: 'F',
					buttonLabelD: dataUtils.pre('\\str{2xy}'),
					textAnswer: ' &nbsp; 1', 
					template: 'main',
					firstCoefficients: '2 is the greatest factor that can divide evenly into 8 and 2.',
					firstVariables: 'The first term contains only the variable x and the second term contains only the variable y, so no variable can be found in common.',
				}
				,
				{	// problem 6
					probNumbers: dataUtils.pre('\\str{9m<sup>2</sup> and 3n}'),
					buttonValueA: 'F',
					buttonLabelA: dataUtils.pre('\\str{3m<sup>2</sup>n}'),
					buttonValueB: 'T',
					buttonLabelB: dataUtils.pre('\\str{3}'),
					buttonValueC: 'F',
					buttonLabelC: dataUtils.pre('\\str{9m<sup>2</sup>n}'),
					buttonValueD: 'F',
					buttonLabelD: dataUtils.pre('\\str{27mn}'),
					textAnswer: ' &nbsp; 3', 
					template: 'main',
					firstCoefficients: '3 is the greatest factor that can divide evenly into 9 and 3.',
					firstVariables: 'The first term contains only the variable m and the second term contains only the variable n, so no variable can be found in common.',
				}
				,
				{	// problem 7
					probNumbers: dataUtils.pre('\\str{5m<sup>2</sup> and -2m}'),
					buttonValueA: 'T',
					buttonLabelA: dataUtils.pre('\\str{m}'),
					buttonValueB: 'F',
					buttonLabelB: dataUtils.pre('\\str{1}'),
					buttonValueC: 'F',
					buttonLabelC: dataUtils.pre('\\str{10m<sup>2</sup>n}'),
					buttonValueD: 'F',
					buttonLabelD: dataUtils.pre('\\str{mn}'),
					textAnswer: ' &nbsp; 1m<sup>1</sup> or m', 
					template: 'main',
					firstCoefficients: '1 is the greatest factor that can divide evenly into 5 and 2.',
					firstVariables: 'Both terms have the variable m in common.'
									+'<br><br>'
									+'m<sup>2</sup> and m<sup>1</sup> both have a degree of one in common. Both terms have m<sup>1</sup> or m.',
				}
				,
				{	// problem 8
					probNumbers: dataUtils.pre('\\str{7x<sup>2</sup> and -3x}'),
					buttonValueA: 'F',
					buttonLabelA: dataUtils.pre('\\str{&nbsp;&nbsp; &nbsp; x<sup>3</sup>}'),
					buttonValueB: 'F',
					buttonLabelB: dataUtils.pre('\\str{-21x<sup>3</sup>}'),
					buttonValueC: 'F',
					buttonLabelC: dataUtils.pre('\\str{&nbsp; &nbsp; 1}'),
					buttonValueD: 'T',
					buttonLabelD: dataUtils.pre('\\str{&nbsp;&nbsp;&nbsp; x}'),
					textAnswer: ' &nbsp; 1x<sup>1</sup> or x', 
					template: 'main',
					firstCoefficients: '1 is the greatest factor that can divide evenly into 7 and 3.',
					firstVariables: 'Both terms have the variable x in common.'
									+'<br><br>'
									+'x<sup>2</sup> and x<sup>1</sup> both have a degree of one in common. Both terms have x<sup>1</sup> or x.',
				}
				,
				{	// problem 9
					probNumbers: dataUtils.pre('\\str{4n<sup>2</sup> and -10n}'),
					buttonValueA: 'F',
					buttonLabelA: dataUtils.pre('\\str{&nbsp;&nbsp; &nbsp; n}'),
					buttonValueB: 'T',
					buttonLabelB: dataUtils.pre('\\str{&nbsp; &nbsp; 2n}'),
					buttonValueC: 'F',
					buttonLabelC: dataUtils.pre('\\str{-20n}'),
					buttonValueD: 'F',
					buttonLabelD: dataUtils.pre('\\str{&nbsp; &nbsp; 40n<sup>3</sup>}'),
					textAnswer: ' &nbsp; 2n<sup>1</sup> or 2n', 
					template: 'main',
					firstCoefficients: '2 is the greatest factor that can divide evenly into 4 and 10.',
					firstVariables: 'Both terms have the variable n in common.'
									+'<br><br>'
									+'n<sup>2</sup> and n<sup>1</sup> both have a degree of one in common. Both terms have n<sup>1</sup> or n.',
				}
				,
				{	// problem 10
					probNumbers: dataUtils.pre('\\str{-6a<sup>4</sup> and 14a}'),
					buttonValueA: 'T',
					buttonLabelA: dataUtils.pre('\\str{&nbsp;&nbsp; &nbsp; 2a}'),
					buttonValueB: 'F',
					buttonLabelB: dataUtils.pre('\\str{&nbsp; &nbsp; 14a<sup>2</sup>}'),
					buttonValueC: 'F',
					buttonLabelC: dataUtils.pre('\\str{-6a}'),
					buttonValueD: 'F',
					buttonLabelD: dataUtils.pre('\\str{-2a}'),
					textAnswer: ' &nbsp; 2a<sup>1</sup> or 2a', 
					template: 'main',
					firstCoefficients: '2 is the greatest factor that can divide evenly into 6 and 14.',
					firstVariables: 'Both terms have the variable a in common.'
									+'<br><br>'
									+'a<sup>4</sup> and a<sup>1</sup> both have a degree of one in common. Both terms have a<sup>1</sup> or a.',
				}
				,
				{	// problem 11
					probNumbers: dataUtils.pre('\\str{x<sup>5</sup>y<sup>4</sup> &nbsp and&nbsp; -x<sup>3</sup>yz}'),
					buttonValueA: 'F',
					buttonLabelA: dataUtils.pre('\\str{x<sup>5</sup>y<sup>4</sup>z}'),
					buttonValueB: 'F',
					buttonLabelB: dataUtils.pre('\\str{x<sup>3</sup>y<sup>3</sup>z}'),
					buttonValueC: 'T',
					buttonLabelC: dataUtils.pre('\\str{x<sup>3</sup>y}'),
					buttonValueD: 'F',
					buttonLabelD: dataUtils.pre('\\str{x<sup>3</sup>}'),
					textAnswer: ' &nbsp; 1x<sup>3</sup>y<sup>1</sup> or x<sup>3</sup>y', 
					template: 'main',
					firstCoefficients: 'Each term has a coefficient of 1.<br> 1 is the greatest factor that can divide evenly into 1 and 1.',
					firstVariables: 'Both terms have the variables <em>x</em> and <em>y</em> in common. Both terms do <strong><u>not</u></strong> have the variable z.'
									+'<br><br>'
									+'x<sup>5</sup> and x<sup>3</sup> both have a degree of three in common. Both terms have x<sup>3</sup>'
									+'<br><br>'
									+'y<sup>4</sup> and y<sup>1</sup> both have a degree of one in common. Both terms have y<sup>1</sup>',
				}
				,
				{	// problem 12
					probNumbers: dataUtils.pre('\\str{-m<sup>6</sup>n<sup>4</sup> &nbsp and&nbsp; m<sup>2</sup>n<sup>2</sup>o<sup>4</sup>}'),
					buttonValueA: 'F',
					buttonLabelA: dataUtils.pre('\\str{-m<sup>2</sup>n<sup>2</sup>o<sup>4</sup>}'),
					buttonValueB: 'F',
					buttonLabelB: dataUtils.pre('\\str{&nbsp; &nbsp; m<sup>6</sup>n<sup>4</sup>}'),
					buttonValueC: 'T',
					buttonLabelC: dataUtils.pre('\\str{&nbsp; &nbsp; m<sup>2</sup>n<sup>2</sup>}'),
					buttonValueD: 'F',
					buttonLabelD: dataUtils.pre('\\str{&nbsp; &nbsp; m<sup>2</sup>n<sup>2</sup>o<sup>4</sup>}'),
					textAnswer: ' &nbsp; 1m<sup>2</sup>n<sup>2</sup> or m<sup>2</sup>n<sup>2</sup>', 
					template: 'main',
					firstCoefficients: 'Each term has a coefficient of 1.<br> 1 is the greatest factor that can divide evenly into 1 and 1.',
					firstVariables: 'Both terms have the variables <em>m</em> and <em>n</em> in common. Both terms do <strong><u>not</u></strong> have the variable o.'
									+'<br><br>'
									+'m<sup>6</sup> and m<sup>2</sup> both have a degree of two in common. Both terms have m<sup>2</sup>'
									+'<br><br>'
									+'n<sup>4</sup> and n<sup>2</sup> both have a degree of two in common. Both terms have n<sup>2</sup>',
				}
				,
				{	// problem 13
					probNumbers: dataUtils.pre('\\str{-16c<sup>5</sup>d &nbsp and&nbsp; -12c<sup>3</sup>d<sup>3</sup>}'),
					buttonValueA: 'F',
					buttonLabelA: dataUtils.pre('\\str{-c<sup>3</sup>d}'),
					buttonValueB: 'F',
					buttonLabelB: dataUtils.pre('\\str{-4c<sup>5</sup>d<sup>3</sup>}'),
					buttonValueC: 'F',
					buttonLabelC: dataUtils.pre('\\str{-4}'),
					buttonValueD: 'T',
					buttonLabelD: dataUtils.pre('\\str{-4c<sup>3</sup>d}'),
					textAnswer: ' &nbsp; -4c<sup>3</sup>d<sup>1</sup> or -4c<sup>3</sup>d', 
					template: 'main',
					firstCoefficients: '4 is the greatest factor that can divide evenly into 16 and 12.'
										+'<br><br>'
										+'The coefficients are <strong>also</strong> both negative values. Therefore, they both have a common factor of -4.',
					firstVariables: 'Both terms have the variables <em>c</em> and <em>d</em> in common.'
									+'<br><br>'
									+'c<sup>5</sup> and c<sup>3</sup> both have a degree of three in common. Both terms have c<sup>3</sup>'
									+'<br><br>'
									+'d<sup>1</sup> and d<sup>3</sup> both have a degree of one in common. Both terms have d<sup>1</sup>',
				}
				,
				{	// problem 14
					probNumbers: dataUtils.pre('\\str{-15x<sup>3</sup>y<sup>4</sup> &nbsp and&nbsp; -9x<sup>2</sup>y<sup>7</sup>}'),
					buttonValueA: 'T',
					buttonLabelA: dataUtils.pre('\\str{-3x<sup>2</sup>y<sup>4</sup>}'),
					buttonValueB: 'F',
					buttonLabelB: dataUtils.pre('\\str{-3}'),
					buttonValueC: 'F',
					buttonLabelC: dataUtils.pre('\\str{-x<sup>3</sup>y<sup>7</sup>}'),
					buttonValueD: 'F',
					buttonLabelD: dataUtils.pre('\\str{-3xy}'),
					textAnswer: ' &nbsp; -3x<sup>2</sup>y<sup>4</sup>', 
					template: 'main',
					firstCoefficients: '3 is the greatest factor that can divide evenly into 15 and 9.'
										+'<br><br>'
										+'The coefficients are <strong>also</strong> both negative values. Therefore, they both have a common factor of -3.',
					firstVariables: 'Both terms have the variables <em>x</em> and <em>y</em> in common.'
									+'<br><br>'
									+'x<sup>3</sup> and x<sup>2</sup> both have a degree of two in common. Both terms have x<sup>2</sup>'
									+'<br><br>'
									+'y<sup>4</sup> and y<sup>7</sup> both have a degree of four in common. Both terms have y<sup>4</sup>',
				}
				,
				{	// problem 15
					probNumbers: dataUtils.pre('\\str{-14x<sup>2</sup>y, &nbsp; 7x<sup>2</sup>y, &nbsp and&nbsp; -21y}'),
					buttonValueA: 'F',
					buttonLabelA: dataUtils.pre('\\str{&nbsp; &nbsp; 7x<sup>2</sup>y}'),
					buttonValueB: 'F',
					buttonLabelB: dataUtils.pre('\\str{-7}'),
					buttonValueC: 'T',
					buttonLabelC: dataUtils.pre('\\str{&nbsp; &nbsp; 7y}'),
					buttonValueD: 'F',
					buttonLabelD: dataUtils.pre('\\str{&nbsp; &nbsp; 21y}'),
					textAnswer: ' &nbsp; 7y<sup>1</sup> or 7y', 
					template: 'main',
					firstCoefficients: '7 is the greatest factor that can divide evenly into 14, 7, and 21.',
					firstVariables: 'All the terms have the variable of <em>y</em> in common.  All the terms do <strong><u>not</u></strong> have the variable <em>x</em>.'
									+'<br><br>'
									+'All three terms have y<sup>1</sup>',
				}
				,
				{	// problem 16
					probNumbers: dataUtils.pre('\\str{-18a<sup>4</sup>b<sup>2</sup>, &nbsp; 30a<sup>2</sup>b, &nbsp and&nbsp; -12a}'),
					buttonValueA: 'F',
					buttonLabelA: dataUtils.pre('\\str{&nbsp; &nbsp;&nbsp; 2ab}'),
					buttonValueB: 'F',
					buttonLabelB: dataUtils.pre('\\str{-12a}'),
					buttonValueC: 'T',
					buttonLabelC: dataUtils.pre('\\str{ &nbsp;&nbsp; &nbsp;6a}'),
					buttonValueD: 'F',
					buttonLabelD: dataUtils.pre('\\str{-2ab}'),
					textAnswer: ' &nbsp; 6a<sup>1</sup> or 6a', 
					template: 'main',
					firstCoefficients: '6 is the greatest factor that can divide evenly into 18, 30, and 12.',
					firstVariables: 'All the terms have the variable of <em>a</em> in common.  All the terms do <strong><u>not</u></strong> have the variable <em>b</em>.'
									+'<br><br>'
									+'a<sup>4</sup>, a<sup>2</sup>, and a<sup>1</sup> have a<sup>1</sup>',
				}
				,
				{	// problem 17
					probNumbers: dataUtils.pre('\\str{-36m<sup>2</sup>n<sup>3</sup>, &nbsp; -27m<sup>2</sup>n<sup>2</sup>, &nbsp and&nbsp; -18mn<sup>2</sup>}'),
					buttonValueA: 'F',
					buttonLabelA: dataUtils.pre('\\str{-3mn}'),
					buttonValueB: 'T',
					buttonLabelB: dataUtils.pre('\\str{-9mn<sup>2</sup>}'),
					buttonValueC: 'F',
					buttonLabelC: dataUtils.pre('\\str{&nbsp;&nbsp; &nbsp;3mn<sup>2</sup>}'),
					buttonValueD: 'F',
					buttonLabelD: dataUtils.pre('\\str{&nbsp;&nbsp; &nbsp;9mn}'),
					textAnswer: ' &nbsp; -9m<sup>1</sup>n<sup>2</sup> or -9mn<sup>2</sup>', 
					template: 'main',
					firstCoefficients: '9 is the greatest factor that can divide evenly into 36, 27, and 18.'
										+'<br><br>'
										+'The coefficients are <strong>all</strong> negative values. Therefore, they all have a common factor of -9.',
					firstVariables: 'All the terms have the variables <em>m</em> and <em>n</em> in common.'
									+'<br><br>'
									+'m<sup>2</sup>, m<sup>2</sup>, and m<sup>1</sup> all have a degree of one in common.  All the terms have m<sup>1</sup>'
									+'<br><br>'
									+'n<sup>3</sup>, n<sup>2</sup>, and n<sup>2</sup> all have a degree of two in common.  All the terms have n<sup>2</sup>',
				}
				,
				{	// problem 18
					probNumbers: dataUtils.pre('\\str{-14m<sup>5</sup>n<sup>2</sup>, &nbsp; -42m<sup>2</sup>n<sup>4</sup>, &nbsp and&nbsp; -28m<sup>3</sup>n<sup>2</sup>}'),
					buttonValueA: 'F',
					buttonLabelA: dataUtils.pre('\\str{-7mn}'),
					buttonValueB: 'F',
					buttonLabelB: dataUtils.pre('\\str{-7m<sup>2</sup>n<sup>2</sup>}'),
					buttonValueC: 'F',
					buttonLabelC: dataUtils.pre('\\str{&nbsp;&nbsp; &nbsp;14mn}'),
					buttonValueD: 'T',
					buttonLabelD: dataUtils.pre('\\str{-14m<sup>2</sup>n<sup>2</sup>}'),
					textAnswer: ' &nbsp; -14m<sup>2</sup>n<sup>2</sup>', 
					template: 'main',
					firstCoefficients: '14 is the greatest factor that can divide evenly into 14, 42, and 28.'
										+'<br><br>'
										+'The coefficients are <strong>all</strong> negative values. Therefore, they all have a common factor of -14.',
					firstVariables: 'All the terms have the variables <em>m</em> and <em>n</em> in common.'
									+'<br><br>'
									+'m<sup>5</sup>, m<sup>2</sup>, and m<sup>3</sup> all have a degree of two in common.  All the terms have m<sup>2</sup>'
									+'<br><br>'
									+'n<sup>2</sup>, n<sup>4</sup>, and n<sup>2</sup> all have a degree of two in common.  All the terms have n<sup>2</sup>',
				}
				,
				{	// problem 19
					probNumbers: dataUtils.pre('\\str{30a<sup>4</sup>b<sup>3</sup>c<sup>5</sup>, &nbsp; -15a<sup>3</sup>b<sup>5</sup>c<sup>4</sup>, &nbsp and&nbsp; -45a<sup>8</sup>b}'),
					buttonValueA: 'T',
					buttonLabelA: dataUtils.pre('\\str{&nbsp; &nbsp; 15a<sup>3</sup>b}'),
					buttonValueB: 'F',
					buttonLabelB: dataUtils.pre('\\str{-5a<sup>3</sup>bc}'),
					buttonValueC: 'F',
					buttonLabelC: dataUtils.pre('\\str{&nbsp;&nbsp; &nbsp;5abc}'),
					buttonValueD: 'F',
					buttonLabelD: dataUtils.pre('\\str{&nbsp;&nbsp; &nbsp;15ab}'),
					textAnswer: ' &nbsp; 15a<sup>3</sup>b<sup>1</sup> or 15a<sup>3</sup>b', 
					template: 'main',
					firstCoefficients: '15 is the greatest factor that can divide evenly into 30, 15, and 45.',
					firstVariables: 'All the terms have the variables <em>a</em> and <em>b</em> in common. All the terms do <strong><u>not</u></strong> have the variable <em>c</em>.'
									+'<br><br>'
									+'a<sup>4</sup>, a<sup>3</sup>, and a<sup>8</sup> all have a degree of three in common.  All the terms have a<sup>3</sup>'
									+'<br><br>'
									+'b<sup>3</sup>, b<sup>5</sup>, and b<sup>1</sup> all have a degree of one in common.  All the terms have b<sup>1</sup>',
				}
				,
				{	// problem 20
					probNumbers: dataUtils.pre('\\str{-24x<sup>2</sup>y<sup>3</sup>z<sup>4</sup>, &nbsp; -60x<sup>5</sup>z<sup>3</sup>, &nbsp and&nbsp; 48x<sup>3</sup>yz<sup>7</sup>}'),
					buttonValueA: 'F',
					buttonLabelA: dataUtils.pre('\\str{-24x<sup>2</sup>z<sup>3</sup>}'),
					buttonValueB: 'T',
					buttonLabelB: dataUtils.pre('\\str{&nbsp; &nbsp 12x<sup>2</sup>z<sup>3</sup>}'),
					buttonValueC: 'F',
					buttonLabelC: dataUtils.pre('\\str{&nbsp; &nbsp; 24x<sup>5</sup>y<sup>3</sup>z<sup>7</sup>}'),
					buttonValueD: 'F',
					buttonLabelD: dataUtils.pre('\\str{&nbsp; &nbsp; 12x<sup>2</sup>yz<sup>3</sup>}'),
					textAnswer: ' &nbsp; 12x<sup>2</sup>z<sup>3</sup>', 
					template: 'main',
					firstCoefficients: '12 is the greatest factor that can divide evenly into 24, 60, and 48.',
					firstVariables: 'All the terms have the variables <em>x</em> and <em>z</em> in common. All the terms do <strong><u>not</u></strong> have the variable <em>y</em>.'
									+'<br><br>'
									+'x<sup>2</sup>, x<sup>5</sup>, and x<sup>3</sup> all have a degree of two in common.  All the terms have x<sup>2</sup>'
									+'<br><br>'
									+'z<sup>4</sup>, z<sup>3</sup>, and z<sup>7</sup> all have a degree of three in common.  All the terms have z<sup>3</sup>',
				}
        ],
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
		//return dataUtils.build(desc, template, data);
    
    	return dataUtils.build(desc, template, data, shuffle);
}]);