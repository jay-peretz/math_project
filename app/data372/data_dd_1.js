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
					probQuestion: 'Solve for the value of the variable, or click &quot;no solution&quot; if the equation cannot be solved:',
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
										+'{\\str{4x - <strong>2x</strong> + 5 = 3 + 2x - <strong>2x</strong>}}'
						),
					helpFifthPiece: '2x + 5 = 3',
					helpSixthPiece: dataUtils.pre(
									'\\grp'
										+'{\\str{2x + 5 - <strong>5</strong> = 3 - <strong>5</strong>}}'
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
									'\\rowgrp'
										+'{\\grp'
											+'{\\str{$$ansVariable = }}'
											+'{\\input{$$ansNumber}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\btn{no solution}{$$ansSolvable}{large}}'
										+'}'
						),
					ansSolvable: 'F',
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
												+'{\\str{2nd:&nbsp; Subtract 5.}}'
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
					probQuestion: 'Solve for the value of the variable, or click &quot;no solution&quot; if the equation cannot be solved:',
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
										+'{\\str{8a - <strong>3a</strong> + 4 = 19 + 3a - <strong>3a</strong>}}'
						),
					helpFifthPiece: '5a + 4 = 19',
					helpSixthPiece: dataUtils.pre(
									'\\grp'
										+'{\\str{5a + 4 - <strong>4</strong> = 19 - <strong>4</strong>}}'
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
									'\\rowgrp'
										+'{\\grp'
											+'{\\str{$$ansVariable = }}'
											+'{\\input{$$ansNumber}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\btn{no solution}{$$ansSolvable}{large}}'
										+'}'
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
												+'{\\str{2nd:&nbsp; Subtract 4.}}'
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
				,
				{	// problem 3
					probQuestion: 'Solve for the value of the variable, or click &quot;no solution&quot; if the equation cannot be solved:',
					probStatement: dataUtils.pre(
									'\\grp'
										+'{\\str{-7x + 2 = -10 - 3x}}'
						),
					ansVariable: 'x',
					helpFirstPiece: '-7x',
					helpSecondPiece: '-3x',
					helpThirdPiece: 'add 7x',
					helpFourthPiece: dataUtils.pre(
									'\\grp'
										+'{\\str{-7x + <strong>7x</strong> + 2 = -10 - 3x + <strong>7x</strong>}}'
						),
					helpFifthPiece: '2 = -10 + 4x',
					helpSixthPiece: dataUtils.pre(
									'\\grp'
										+'{\\str{2 + <strong>10</strong> = -10 + <strong>10</strong> + 4x}}'
						),
					helpSeventhPiece: '12 = 4x',
					helpEighthPiece: dataUtils.pre(
									'\\grp'
										+'{\\css'
											+'{\\frac'
												+'{str{12}}'
												+'{str{<strong>4</strong>}}'
											+'}'
											+'{fracNoMargin}'
										+'}'
										+'{str{=}}'
										+'{\\css'
											+'{\\frac'
												+'{str{4x}}'
												+'{str{<strong>4</strong>}}'
											+'}'
											+'{fracNoMargin}'
										+'}'
						),
					helpStringAnswer: '<span class=fontsize110>3</span> &nbsp;<span class=fontsize110>=</span> <span class=fontsize110>x</span>',
					ansNumber: '3',
					solution: dataUtils.pre(
								'\\pan{3}{9}'
									+'{\\css'
										+'{\\rowgrp'
											+'{\\grp'
												+'{\\input{$$ansNumber}}'
												+'{\\str{ = $$ansVariable}}'
											+'}'
											+'{\\html{&nbsp;}}'
											+'{\\html{&nbsp;}}'
											+'{\\grp'
												+'{\\btn{no solution}{$$ansSolvable}{large}}'
											+'}'
										+'}'
										+'{marginLeft80px}'
									+'}'
						),
					firstTable: dataUtils.pre(
										'{\\html{&nbsp;}}'
										+'{\\str{If we have <u>variable terms on both sides of the equation</u>, we must eliminate one entire variable term.}}'
										+'{\\html{&nbsp;}}'
										+'{\\str{We must eliminate either the \"$$helpFirstPiece\" on the left side of the equation or the \"$$helpSecondPiece\" on the right side of the equation. Either choice is correct and eventually you will get the correct answer.}}'
										+'{\\html{&nbsp;}}'
										+'{\\str{Let\'s eliminate the \"$$helpFirstPiece\". To do this, we will \"$$helpThirdPiece\".}}'
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
												+'{\\str{1st: &nbsp;Add 7x.}}'
												+'{width140}'
											+'}'
											+'{$$helpFourthPiece}'
										+'}'
										+'{\\str{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Result:}}'
												+'{width140}'
											+'}'
											+'{\\str{&nbsp;$$helpFifthPiece}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\str{We can now <u>isolate the variable</u> because it is on one side of the equation <strong>only</strong>.}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{2nd:&nbsp; Add 10.}}'
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
												+'{\\str{3<sup>rd</sup>: &nbsp;&nbsp;Divide by 4.}}'
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
				{	// problem 4
					probQuestion: 'Solve for the value of the variable, or click &quot;no solution&quot; if the equation cannot be solved:',
					probStatement: dataUtils.pre(
									'\\grp'
										+'{\\str{-5m + 7 = -3 - 3m}}'
						),
					ansVariable: 'm',
					helpFirstPiece: '-5m',
					helpSecondPiece: '-3m',
					helpThirdPiece: 'add 5m',
					helpFourthPiece: dataUtils.pre(
									'\\grp'
										+'{\\str{-5m + <strong>5m</strong> + 7 = -3 - 3m + <strong>5m</strong>}}'
						),
					helpFifthPiece: '&nbsp;&nbsp;7 = -3 + 2m',
					helpSixthPiece: dataUtils.pre(
									'\\grp'
										+'{\\str{7 + <strong>3</strong> = -3 + <strong>3</strong> + 2m}}'
						),
					helpSeventhPiece: '10 = 2m',
					helpEighthPiece: dataUtils.pre(
									'\\grp'
										+'{\\css'
											+'{\\frac'
												+'{str{10}}'
												+'{str{<strong>2</strong>}}'
											+'}'
											+'{fracNoMargin}'
										+'}'
										+'{str{=}}'
										+'{\\css'
											+'{\\frac'
												+'{str{2m}}'
												+'{str{<strong>2</strong>}}'
											+'}'
											+'{fracNoMargin}'
										+'}'
						),
					helpStringAnswer: '<span class=fontsize110>5</span> &nbsp;<span class=fontsize110>=</span> <span class=fontsize110>m</span>',
					ansNumber: '5',
					solution: dataUtils.pre(
								'\\pan{3}{9}'
									+'{\\css'
										+'{\\rowgrp'
											+'{\\grp'
												+'{\\input{$$ansNumber}}'
												+'{\\str{ = $$ansVariable}}'
											+'}'
											+'{\\html{&nbsp;}}'
											+'{\\html{&nbsp;}}'
											+'{\\grp'
												+'{\\btn{no solution}{$$ansSolvable}{large}}'
											+'}'
										+'}'
										+'{marginLeft80px}'
									+'}'
						),
					firstTable: dataUtils.pre(
										'{\\html{&nbsp;}}'
										+'{\\str{If we have <u>variable terms on both sides of the equation</u>, we must eliminate one entire variable term.}}'
										+'{\\html{&nbsp;}}'
										+'{\\str{We must eliminate either the \"$$helpFirstPiece\" on the left side of the equation or the \"$$helpSecondPiece\" on the right side of the equation. Either choice is correct and eventually you will get the correct answer.}}'
										+'{\\html{&nbsp;}}'
										+'{\\str{Let\'s eliminate the \"$$helpFirstPiece\". To do this, we will \"$$helpThirdPiece\".}}'
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
												+'{\\str{1st: &nbsp;Add 5m.}}'
												+'{width140}'
											+'}'
											+'{$$helpFourthPiece}'
										+'}'
										+'{\\str{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Result:}}'
												+'{width140}'
											+'}'
											+'{\\str{&nbsp;$$helpFifthPiece}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\str{We can now <u>isolate the variable</u> because it is on one side of the equation <strong>only</strong>.}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{2nd:&nbsp; Add 3.}}'
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
