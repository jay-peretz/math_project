/*global angular */

angular.module('mathSkills').service('data_r_1', ['dataUtils', function (dataUtils) {
    var desc = {
            title: 'R.1 The Powers of 10s and Scientific Notation',
            path: 'r.1-scientific-notation',
            children: []
        },
        template = {
			simpleEvaluation: {
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
			displayEvaluation: {
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
				template: 'simpleEvaluation' 
			 }
		  	,
			// prob 2
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
				exp1: '1',
				answer: '10',
				solutionAnswer: dataUtils.pre(
								'\\rowgrp'
									+'{\\str{$$answerInstructions}}'
									+'{\\grp'
										+'{\\input{$$answer}}'
									+'}'
							),
				line1: dataUtils.pre(
								'\\rowgrp'
									+'{\\str{Any base raised to the power of one equals itself.}}'
							),
				helpAnswer: dataUtils.pre(
								'\\grp'
									+'{\\str{<br>Answer: &nbsp; $$answer}}'	
							),
				template: 'simpleEvaluation' 
			 }
			 ,
			// prob 3
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
				exp1: '3',
				multiplier: '1000',
				answer: '1000',
				helpNumber: '1,000',
				solutionAnswer: dataUtils.pre(
								'\\rowgrp'
									+'{\\str{$$answerInstructions}}'
									+'{\\grp'
										+'{\\input{$$answer}}'
									+'}'
							),
				line1: dataUtils.pre(
								'\\rowgrp'
									+'{\\str{We know that 10<sup> 3</sup>  means 10 * 10 * 10.<br>Here is a quick method for solving a power of 10 expression.}}'
									+'{\\str{&nbsp;}}'
									+'{\\str{Any base raised to a positive exponent will become larger; the decimal point will be moved to the right here.}}'
									+'{\\str{&nbsp;}}'
									+'{\\str{<span class=bottomBlack>If we use 10<sup> 0</sup> (which equals 1 whole) as our reference point</span>, then the exponent above base 10 tells us to <span class=bottomBlack>move the decimal point 3 times to the right from the value of one whole</span>. }}'
									+'{\\str{&nbsp;}}'
									+'{\\str{$$base<sup> $$exp1</sup> means:}}'
									+'{\\html{&nbsp;}}'
									+'{\\multiplydecpowten{1}{$$multiplier}{hide}}'
							),
				helpAnswer: dataUtils.pre(
								'\\grp'
									+'{\\str{Answer: &nbsp; $$helpNumber}}'	
							),
				template: 'displayEvaluation' 
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
