/*global angular */

angular.module('mathSkills').service('data_cc_1', ['dataUtils', function (dataUtils) {
    var desc = {
			title: 'CC.1 Solving Algebraic Equations (Variable on one side of the Equation)',
    		path: 'CC.1-solving-algebraic-equations-one-side',
            children: []
        },
	        template = {
			
			flexy: {
                title: 'Solving Algebraic Equations (Variable on one side of the Equation)',
                children: [{
                    title: 'Main Answer',
                    children: [{
						problem: '\\rowgrp'
										+'{\\str{$probQuestion}}'
										+'{\\html{&nbsp;}}'
										+'{\\str{$probStatement}}'
										,
						answer: '$solution',
						controls: {
								"checkAnswer": true,
								"help": '\\rowgrp' 	 
											+'$firstTable'
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
					probStatement: 'x + 7 = 4',
					helpFirstPiece: 'add 7',
					helpSecondPiece: 'subtracting 7',
					helpThirdPiece: 'subtract 7',
					helpFourthPiece: 'x + 7 - 7 = 4 - 7',
					helpFifthPiece: 'x = -3',
					helpStringAnswer: '<span class=fontsize110>x</span> = -3',
					answerInstructions: '',
					ansNumber: '-3',
					solution: dataUtils.pre(
									'\\grp'
										+'{\\str{<span class=bigger>x</span> = }}'
										+'{\\input{$$ansNumber}}'
						),
					firstTable: dataUtils.pre(
										'{\\html{&nbsp;}}'
										+'{\\str{Goal: Isolate the variable.}}'
										+'{\\html{&nbsp;}}'
										+'{\\str{To isolate the variable we need to eliminate the \"$$helpFirstPiece.\" We eliminate \"$$helpFirstPiece\" by \"$$helpSecondPiece.\"}}'
										+'{\\html{&nbsp;}}'
										+'{\\str{We must always do the same to both sides of the equation.}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{Original equation:}}'
												+'{width140}'
											+'}'
											+'{\\str{$$probStatement}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{1st: $$helpThirdPiece.}}'
												+'{width140}'
											+'}'
											+'{\\str{$$helpFourthPiece}}'
										+'}'
										+'{\\str{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{Result:}}'
												+'{width140}'
											+'}'
											+'{\\str{$$helpFifthPiece}}'
										+'}'
								),
					helpAnswer: dataUtils.pre(
									'\\grp'
										+'{\\str{&nbsp; $$helpStringAnswer}}'
						),
					template: 'flexy',
				}
				,
				{   // problem 2
					probQuestion: 'Solve for the value of the variable:',
					probStatement: 'x + 5 = 3',
					helpFirstPiece: 'add 5',
					helpSecondPiece: 'subtracting 5',
					helpThirdPiece: 'subtract 5',
					helpFourthPiece: 'x + 5 - 5 = 3 - 5',
					helpFifthPiece: 'x = -2',
					helpStringAnswer: '<span class=fontsize110>x</span> = -2',
					answerInstructions: '',
					ansNumber: '-2',
					solution: dataUtils.pre(
									'\\grp'
										+'{\\str{<span class=bigger>x</span> = }}'
										+'{\\input{$$ansNumber}}'
						),
					firstTable: dataUtils.pre(
										'{\\html{&nbsp;}}'
										+'{\\str{Goal: Isolate the variable.}}'
										+'{\\html{&nbsp;}}'
										+'{\\str{To isolate the variable we need to eliminate the \"$$helpFirstPiece.\" We eliminate \"$$helpFirstPiece\" by \"$$helpSecondPiece.\"}}'
										+'{\\html{&nbsp;}}'
										+'{\\str{We must always do the same to both sides of the equation.}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{Original equation:}}'
												+'{width140}'
											+'}'
											+'{\\str{$$probStatement}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{1st: $$helpThirdPiece.}}'
												+'{width140}'
											+'}'
											+'{\\str{$$helpFourthPiece}}'
										+'}'
										+'{\\str{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{Result:}}'
												+'{width140}'
											+'}'
											+'{\\str{$$helpFifthPiece}}'
										+'}'
								),
					helpAnswer: dataUtils.pre(
									'\\grp'
										+'{\\str{&nbsp; $$helpStringAnswer}}'
						),
					template: 'flexy',
				}
				,
				{   // problem 3
					probQuestion: 'Solve for the value of the variable:',
					probStatement: 'y - 7 = 2',
					helpFirstPiece: 'subtract 7',
					helpSecondPiece: 'adding 7',
					helpThirdPiece: 'add 7',
					helpFourthPiece: 'y - 7 + 7 = 2 + 7',
					helpFifthPiece: 'y = 9',
					helpStringAnswer: '<span class=fontsize110>y</span> = 9',
					answerInstructions: '',
					ansNumber: '9',
					solution: dataUtils.pre(
									'\\grp'
										+'{\\str{<span class=bigger>x</span> = }}'
										+'{\\input{$$ansNumber}}'
						),
					firstTable: dataUtils.pre(
										'{\\html{&nbsp;}}'
										+'{\\str{Goal: Isolate the variable.}}'
										+'{\\html{&nbsp;}}'
										+'{\\str{To isolate the variable we need to eliminate the \"$$helpFirstPiece.\" We eliminate \"$$helpFirstPiece\" by \"$$helpSecondPiece.\"}}'
										+'{\\html{&nbsp;}}'
										+'{\\str{We must always do the same to both sides of the equation.}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{Original equation:}}'
												+'{width140}'
											+'}'
											+'{\\str{$$probStatement}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{1st: $$helpThirdPiece.}}'
												+'{width140}'
											+'}'
											+'{\\str{$$helpFourthPiece}}'
										+'}'
										+'{\\str{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{Result:}}'
												+'{width140}'
											+'}'
											+'{\\str{$$helpFifthPiece}}'
										+'}'
								),
					helpAnswer: dataUtils.pre(
									'\\grp'
										+'{\\str{&nbsp; $$helpStringAnswer}}'
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
				{ problems: [23,24], total: 1},
				{ problems: [25,26], total: 1},
				{ problems: [27,28], total: 1},
				{ problems: [29,30], total: 1}
		];
    
    	return dataUtils.build(desc, template, data, shuffle);*/
		
		return dataUtils.build(desc, template, data);
}]);
