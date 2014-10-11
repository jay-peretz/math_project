/*global angular */

angular.module('mathSkills').service('data_r_1', ['dataUtils', function (dataUtils) {
    var desc = {
            title: 'R.1 The Powers of 10s and Scientific Notation',
            path: 'r.1-scientific-notation',
            children: []
        },
        template = {
			firstSimplify: {
                title: 'The Powers of 10s and Scientific Notation',
				children: [{
					title: 'Main Answer',
					children: [{
						problem: '$problemStatement',
						answer: '$solutionAnswer',		
						controls: {
                            "checkAnswer": true,
                            "help": '\\rowgrp'
										+'{\\html{&nbsp;}}'
										+'{$line1}'
										+'{\\html{&nbsp;}}'
										+'{\\css'
											+'{\\grp'
												+'{$helpAnswer}'
											+'}'
											+'{help-answer-text}'
										+'}'
										+'{\\html{&nbsp;}}'
						}
					}]
                }]
            },
			evaluateAfterSimplify: {
                title: 'The Powers of 10s and Scientific Notation',
				children: [{
					title: 'Main Answer',
					children: [{
								problem: '$problemStatement',
								answer: '$solutionAnswer',		
								controls: {
									"checkAnswer": true,
									"help": '\\rowgrp'
										+'{\\html{&nbsp;}}'
										+'{$line1}'
										+'{\\html{&nbsp;}}'
										+'{\\css'
											+'{\\grp'
												+'{$helpAnswer}'
											+'}'
											+'{help-answer-text}'
										+'}'
										+'{\\html{&nbsp;}}'
								}
						}
						,
						{
						problem: '$problemStatement',
						answer: '$wellProblemStatement',	
						controls: {
                            "checkAnswer": true,
                            "help": true
						}
					}]
                }]
            }
		},
		data = [
			// prob 1
			{
				problemStatement: dataUtils.pre(
								'\\rowgrp'
									+'{\\grp'
										+'{\\str{Evaluate: &nbsp;}}'
										+'{\\exp{\\str{&nbsp;$$base}}{\\str{$$exp1}}}'
									+'}'
							),
				answerInstructions: '',
				base: '10',
				exp1: '0',
				answer: '1',
				solutionAnswer: dataUtils.pre(
								'\\rowgrp'
									+'{\\str{$$answerInstructions}}'
									+'{\\grp'
										+'{\\input{$$answer}}'
									+'}'
							),
				line1: dataUtils.pre(
								'\\rowgrp'
									+'{\\str{Any base raised to the power of zero equals 1 whole.}}'
							),
				helpAnswer: dataUtils.pre(
								'\\grp'
									+'{\\str{<br>Answer: &nbsp; $$answer}}'	
							),
				template: 'firstSimplify' 
			 }
		  	
		];
		
		/*shuffle = [
				{ problems: [1,2], total: 1},
				{ problems: [3,4], total: 1},
				{ problems: [5,6], total: 1},
				{ problems: [7,8], total: 1},
				{ problems: [9,10], total: 1},
				{ problems: [11,12], total: 1},
				{ problems: [13,14], total: 1},
				{ problems: [15,16], total: 1},
				{ problems: [17,18], total: 1},
				{ problems: [19,20], total: 1},
				{ problems: [21,22], total: 1},
				{ problems: [23,24], total: 1}
		];*/
		return dataUtils.build(desc, template, data);
    
    	//return dataUtils.build(desc, template, data, shuffle);
}]);
