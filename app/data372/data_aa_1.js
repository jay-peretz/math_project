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
					buttonValueA: 'T',
					buttonLabelA: dataUtils.pre('\\str{5}'),
					buttonValueB: 'F',
					buttonLabelB: dataUtils.pre('\\str{60}'),
					buttonValueC: 'F',
					buttonLabelC: dataUtils.pre('\\str{12}'),
					buttonValueD: 'F',
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
					buttonValueC: 'F',
					buttonLabelC: dataUtils.pre('\\str{2}'),
					buttonValueD: 'F',
					buttonLabelD: dataUtils.pre('\\str{2xy}'),
					textAnswer: ' &nbsp; 1', 
					template: 'main',
					firstCoefficients: '2 is the greatest factor that can divide evenly into 8 and 2.',
					firstVariables: 'There are no variables, so no variable can be found in common.',
				}
        ];

	return dataUtils.build(desc, template, data);
}]);