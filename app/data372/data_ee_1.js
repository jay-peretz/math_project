/*global angular */

angular.module('mathSkills').service('data_ee_1', ['dataUtils', function (dataUtils) {
    var desc = {
			title: 'EE.1 Solving Algebraic Equation Word Problems',
    		path: 'ee.1-solving-algebraic-equation-word-problems',
            children: []
        },
	        template = {
			
			flexy: {
                title: 'EE.1 Solving Algebraic Equation Word Problems',
                children: [{
                    title: 'Main Answer',
                    children: [{
						problem: '\\rowgrp'
										+'{\\html{$probQuestion}}'
										+'{\\html{&nbsp;}}'
										+'{$$probStatement}'
										,
						answer: '$solution',
						controls: {
								"checkAnswer": true,
								"help": '\\rowgrp' 	 
											+'$firstTable'
											+'{\\html{&nbsp;}}'
											+'{\\html{&nbsp;}}'
											+'{css'
												+'{\\grp'
													+'{\\str{Answer: &nbsp;}}'
													+'{$helpAnswer}'
												+'}'
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
					probQuestion: 'Solve for the value of the variable:',
					probStatement: dataUtils.pre(
									'\\grp'
										+'{\\str{The sum of 7 and a number is 25.}}'
						),
					ansVariable: 'x',
					helpFirstPiece: 'sum of 7 and a number is 25',
					helpSecondPiece: '7 + x = 25',
					helpThirdPiece: 'Subtract 7',
					helpFourthPiece: '7 - <strong>7</strong> + x = 25 - <strong>7</strong>',
					helpFifthPiece: 'x = 18',
					ansNumber: '18',
					solution: dataUtils.pre(
									'\\rowgrp'
										+'{\\grp'
											+'{\\str{$$ansVariable = }}'
											+'{\\input{$$ansNumber}}'
										+'}'
						),
					firstTable: dataUtils.pre(
										'{\\html{&nbsp;}}'
										+'{\\str{The \"$$helpFirstPiece"\ means:}}'
										+'{\\html{&nbsp;}}'
										+'{\\str{$$helpSecondPiece}}'
										+'{\\html{&nbsp;}}'
										+'{\\str{Solve the equation by isolating the variable.}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{Original equation:}}'
												+'{width140}'
											+'}'
											+'{\\str{$$helpSecondPiece}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{1<sup>st</sup>: &nbsp;$$helpThirdPiece.}}'
												+'{width140}'
											+'}'
											+'{\\str{$$helpFourthPiece}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{}}'
												+'{width140}'
											+'}'
											+'{\\str{$$helpFifthPiece}}'
										+'}'
								),
					helpAnswer: dataUtils.pre(
									'\\grp'
										+'{\\str{<span class=fontsize110>$$ansVariable</span> &nbsp;<span class=fontsize110>=</span> $$ansNumber}}'
						),
					template: 'flexy',
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
		];
    
    	return dataUtils.build(desc, template, data, shuffle);*/
		
		return dataUtils.build(desc, template, data);
}]);

