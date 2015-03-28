/*global angular */

angular.module('mathSkills').service('data_dd_1', ['dataUtils', function (dataUtils) {
    var desc = {
			title: 'DD.1 Solving Algebraic Equations (Variables on both sides of the Equation)',
    		path: 'dd.1-solving-algebraic-variables-on-both-sides',
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
										+'{\\str{4x + 5 = 3 + 2x}}'
						),
					ansVariable: 'x',
					helpFirstPiece: 'positive 4x',
					helpSecondPiece: 'positive 2x',
					helpThirdPiece: 'subtract 2x',
					helpFourthPiece: dataUtils.pre(
									'\\grp'
										+'{\\str{4x - 2x + 5 = 3 + 2x - 2x}}'
						),
					helpFifthPiece: '2x + 5 = 3',
					helpSixthPiece: dataUtils.pre(
									'\\grp'
										+'{\\str{2x + 5 - 5 = 3 - 5}}'
						),
					helpSeventhPiece: '2x = -2',
					helpEighthPiece: dataUtils.pre(
									'\\grp'
										+'{\\css'
											+'{\\frac'
												+'{str{2x}}'
												+'{str{<strong>2</strong>}}'
											+'}'
											+'{fracNoMargin}'
										+'}'
										+'{str{=}}'
										+'{\\css'
											+'{\\frac'
												+'{str{-2&nbsp;}}'
												+'{str{<strong>2</strong>}}'
											+'}'
											+'{fracNoMargin}'
										+'}'
						),
					helpStringAnswer: '<span class=fontsize110>x</span> &nbsp;<span class=fontsize110>=</span> -1',
					ansNumber: '-1',
					solution: dataUtils.pre(
									'\\grp'
										+'{\\str{$$ansVariable = }}'
										+'{\\input{$$ansNumber}}'
						),
					firstTable: dataUtils.pre(
										'{\\html{&nbsp;}}'
										+'{\\str{If we have <u>variable terms on both sides of the equation</u>, we must eliminate one entire variable term.}}'
										+'{\\html{&nbsp;}}'
										+'{\\str{We must eliminate either the \"$$helpFirstPiece\" on the left side of the equation or the \"$$helpSecondPiece\" on the right side of the equation. Either choice is correct and eventually you will get the correct answer.}}'
										+'{\\html{&nbsp;}}'
										+'{\\str{Let\'s eliminate the \"$$helpSecondPiece\". To do this, we will \"$$helpThirdPiece\".}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{Original equation:}}'
												+'{width140}'
											+'}'
											+'{$$probStatement}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{1st: &nbsp;Subtract 2x.}}'
												+'{width140}'
											+'}'
											+'{$$helpFourthPiece}'
										+'}'
										+'{\\str{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Result:}}'
												+'{width140}'
											+'}'
											+'{\\str{&nbsp;$$helpFifthPiece}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\str{We can now <u>isolate the variable</u> because it is on one side of the equation <strong>only</strong>.}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{2nd: Subtract 5.}}'
												+'{width140}'
											+'}'
											+'{$$helpSixthPiece}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Result:}}'
												+'{width140}'
											+'}'
											+'{\\str{&nbsp;$$helpSeventhPiece}}'
										+'}'
										+'{\\str{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{3<sup>rd</sup>: &nbsp;&nbsp;Divide by 2.}}'
												+'{width140}'
											+'}'
											+'{$$helpEighthPiece}'
										+'}'
								),
					helpAnswer: dataUtils.pre(
									'\\grp'
										+'{\\str{&nbsp; $$helpStringAnswer}}'
						),
					template: 'flexy',
				}
				,
				{	// problem 2
					probQuestion: 'Solve for the value of the variable:',
					probStatement: dataUtils.pre(
									'\\grp'
										+'{\\str{8a + 4 = 19 + 3a}}'
						),
					ansVariable: 'a',
					helpFirstPiece: 'positive 8a',
					helpSecondPiece: 'positive 3a',
					helpThirdPiece: 'subtract 3a',
					helpFourthPiece: dataUtils.pre(
									'\\grp'
										+'{\\str{8a - 3a + 4 = 19 + 3a - 3a}}'
						),
					helpFifthPiece: '5a + 4 = 19',
					helpSixthPiece: dataUtils.pre(
									'\\grp'
										+'{\\str{5a + 4 - 4 = 19 - 4}}'
						),
					helpSeventhPiece: '5a = 15',
					helpEighthPiece: dataUtils.pre(
									'\\grp'
										+'{\\css'
											+'{\\frac'
												+'{str{5a}}'
												+'{str{<strong>5</strong>}}'
											+'}'
											+'{fracNoMargin}'
										+'}'
										+'{str{=}}'
										+'{\\css'
											+'{\\frac'
												+'{str{15}}'
												+'{str{<strong>5</strong>}}'
											+'}'
											+'{fracNoMargin}'
										+'}'
						),
					helpStringAnswer: '<span class=fontsize110>a</span> &nbsp;<span class=fontsize110>=</span> 3',
					ansNumber: '3',
					solution: dataUtils.pre(
									'\\grp'
										+'{\\str{$$ansVariable = }}'
										+'{\\input{$$ansNumber}}'
						),
					firstTable: dataUtils.pre(
										'{\\html{&nbsp;}}'
										+'{\\str{If we have <u>variable terms on both sides of the equation</u>, we must eliminate one entire variable term.}}'
										+'{\\html{&nbsp;}}'
										+'{\\str{We must eliminate either the \"$$helpFirstPiece\" on the left side of the equation or the \"$$helpSecondPiece\" on the right side of the equation. Either choice is correct and eventually you will get the correct answer.}}'
										+'{\\html{&nbsp;}}'
										+'{\\str{Let\'s eliminate the \"$$helpSecondPiece\". To do this, we will \"$$helpThirdPiece\".}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{Original equation:}}'
												+'{width140}'
											+'}'
											+'{$$probStatement}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{1st: &nbsp;Subtract 3a.}}'
												+'{width140}'
											+'}'
											+'{$$helpFourthPiece}'
										+'}'
										+'{\\str{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Result:}}'
												+'{width140}'
											+'}'
											+'{\\str{&nbsp;$$helpFifthPiece}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\str{We can now <u>isolate the variable</u> because it is on one side of the equation <strong>only</strong>.}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{2nd: Subtract 4.}}'
												+'{width140}'
											+'}'
											+'{$$helpSixthPiece}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Result:}}'
												+'{width140}'
											+'}'
											+'{\\str{&nbsp;$$helpSeventhPiece}}'
										+'}'
										+'{\\str{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{3<sup>rd</sup>: &nbsp;&nbsp;Divide by 5.}}'
												+'{width140}'
											+'}'
											+'{$$helpEighthPiece}'
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
				{ problems: [23,24], total: 1}
		];
    
    	return dataUtils.build(desc, template, data, shuffle);*/
		
		return dataUtils.build(desc, template, data);
}]);
