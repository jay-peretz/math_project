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
								'\\css'
									+'{\\rowgrp'
										+'{\\grp'
											+'{\\str{$$ansVariable = }}'
											+'{\\input{$$ansNumber}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\css'
											+'{\\str{or}}'
											+'{label_like fontsize125}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\btn{no solution}{F}{btn-primary}}'
									+'}'
									+'{marginLeft40px width140 textAlignCenter}'
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
								'\\css'
									+'{\\rowgrp'
										+'{\\grp'
											+'{\\str{$$ansVariable = }}'
											+'{\\input{$$ansNumber}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\css'
											+'{\\str{or}}'
											+'{label_like fontsize125}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\btn{no solution}{F}{btn-primary}}'
									+'}'
									+'{marginLeft40px width140 textAlignCenter}'
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
												+'{\\str{$$ansVariable = }}'
												+'{\\input{$$ansNumber}}'
											+'}'
											+'{\\html{&nbsp;}}'
											+'{\\css'
												+'{\\str{or}}'
												+'{label_like fontsize125}'
											+'}'
											+'{\\html{&nbsp;}}'
											+'{\\btn{no solution}{F}{btn-primary}}'
										+'}'
										+'{marginLeft132px width140 textAlignCenter}'
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
												+'{\\str{$$ansVariable = }}'
												+'{\\input{$$ansNumber}}'
											+'}'
											+'{\\html{&nbsp;}}'
											+'{\\css'
												+'{\\str{or}}'
												+'{label_like fontsize125}'
											+'}'
											+'{\\html{&nbsp;}}'
											+'{\\btn{no solution}{F}{btn-primary}}'
										+'}'
										+'{marginLeft132px width140 textAlignCenter}'
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
				,
				{	// problem 5
					probQuestion: 'Solve for the value of the variable, or click &quot;no solution&quot; if the equation cannot be solved:',
					probStatement: dataUtils.pre(
									'\\grp'
										+'{\\str{x + 9 = -5x - 6}}'
						),
					ansVariable: 'x',
					helpFirstPiece: 'x',
					helpSecondPiece: '-5x',
					helpThirdPiece: 'subtract x',
					helpFourthPiece: dataUtils.pre(
									'\\grp'
										+'{\\str{x - <strong>x</strong> + 9 = -5x - <strong>x</strong> - 6}}'
						),
					helpFifthPiece: '9 = -6x - 6',
					helpSixthPiece: dataUtils.pre(
									'\\grp'
										+'{\\str{9 + <strong>6</strong> = -6x - 6 + <strong>6</strong>}}'
						),
					helpSeventhPiece: '15 = -6x',
					helpEighthPiece: dataUtils.pre(
									'\\grp'
										+'{\\css'
											+'{\\frac'
												+'{str{15}}'
												+'{str{<strong>-6&nbsp;</strong>}}'
											+'}'
											+'{fracNoMargin}'
										+'}'
										+'{str{=}}'
										+'{\\css'
											+'{\\frac'
												+'{str{-6x}}'
												+'{str{<strong>-6&nbsp;</strong>}}'
											+'}'
											+'{fracNoMargin}'
										+'}'
						),
					helpStringAnswer: dataUtils.pre(
										'\\grp'
											+'{\\css'
												+'{\\mixed'
													+'{\\str{-}}'
													+'{\\frac'
														+'{str{5}}'
														+'{str{2}}'
													+'}'
												+'}'
												+'{fracNoMargin}'
											+'}'
											+'{\\str{ = &nbsp;<span class=fontsize110>x</span>}}'
						),
					ansNumber: '3',
					solution: dataUtils.pre(
								'\\pan{3}{9}'			
									+'{\\css'
										+'{\\rowgrp'
											+'{\\grp'
												+'{\\frac'
													+'{\\input{-5}}'
													+'{\\input{2}}'
												+'}'
												+'{\\str{ = $$ansVariable}}'
											+'}'
											+'{\\html{&nbsp;}}'
											+'{\\css'
												+'{\\str{or}}'
												+'{label_like fontsize125}'
											+'}'
											+'{\\html{&nbsp;}}'
											+'{\\btn{no solution}{F}{btn-primary}}'
										+'}'
										+'{marginLeft132px width140 textAlignCenter}'
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
												+'{\\str{1st: &nbsp;Subtract x.}}'
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
												+'{\\str{2nd:&nbsp; Add 6.}}'
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
												+'{\\str{3<sup>rd</sup>: &nbsp;&nbsp;Divide by -6.}}'
												+'{width140}'
											+'}'
											+'{$$helpEighthPiece}'
										+'}'
								),
					helpAnswer: dataUtils.pre(
									'\\grp'
										+'{$$helpStringAnswer}'
						),
					template: 'flexy',
				}
				,
				{	// problem 6
					probQuestion: 'Solve for the value of the variable, or click &quot;no solution&quot; if the equation cannot be solved:',
					probStatement: dataUtils.pre(
									'\\grp'
										+'{\\str{-y - 3 = -4y - 10}}'
						),
					ansVariable: 'y',
					helpFirstPiece: '-y',
					helpSecondPiece: '-4y',
					helpThirdPiece: 'add 4y',
					helpFourthPiece: dataUtils.pre(
									'\\grp'
										+'{\\str{-y + <strong>4y</strong> - 3 = -4y + <strong>4y</strong> - 10}}'
						),
					helpFifthPiece: '3y - 3 = -10',
					helpSixthPiece: dataUtils.pre(
									'\\grp'
										+'{\\str{3y - 3 + <strong>3</strong> = -10 + <strong>3</strong>}}'
						),
					helpSeventhPiece: '3y = -7',
					helpEighthPiece: dataUtils.pre(
									'\\grp'
										+'{\\css'
											+'{\\frac'
												+'{str{3y}}'
												+'{str{<strong>3</strong>}}'
											+'}'
											+'{fracNoMargin}'
										+'}'
										+'{str{=}}'
										+'{\\css'
											+'{\\frac'
												+'{str{-7&nbsp;}}'
												+'{str{<strong>3</strong>}}'
											+'}'
											+'{fracNoMargin}'
										+'}'
						),
					helpStringAnswer: dataUtils.pre(
										'\\grp'
											+'{\\str{ <span class=fontsize110>y</span> =}}'
											+'{\\css'
												+'{\\mixed'
													+'{\\str{-}}'
													+'{\\frac'
														+'{str{7}}'
														+'{str{3}}'
													+'}'
												+'}'
												+'{fracNoMargin}'
											+'}'
						),
					ansNumber: '3',
					solution: dataUtils.pre(
								'\\pan{3}{9}'			
									+'{\\css'
										+'{\\rowgrp'
											+'{\\grp'
												+'{\\str{$$ansVariable =}}'
												+'{\\frac'
													+'{\\input{-7}}'
													+'{\\input{3}}'
												+'}'
											+'}'
											+'{\\html{&nbsp;}}'
											+'{\\css'
												+'{\\str{or}}'
												+'{label_like fontsize125}'
											+'}'
											+'{\\html{&nbsp;}}'
											+'{\\btn{no solution}{F}{btn-primary}}'
										+'}'
										+'{marginLeft132px width140 textAlignCenter}'
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
												+'{\\str{1st: &nbsp;Add 4y.}}'
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
												+'{\\str{3<sup>rd</sup>: &nbsp;&nbsp;Divide by 3.}}'
												+'{width140}'
											+'}'
											+'{$$helpEighthPiece}'
										+'}'
								),
					helpAnswer: dataUtils.pre(
									'\\grp'
										+'{$$helpStringAnswer}'
						),
					template: 'flexy',
				}
				,
				{	// problem 7
					probQuestion: 'Solve for the value of the variable, or click &quot;no solution&quot; if the equation cannot be solved:',
					probStatement: dataUtils.pre(
									'\\grp'
										+'{\\str{2x - 5x + 4 = 3 + 2x - 4}}'
						),
					ansVariable: 'x',
					helpFirstPiece: '-3x + 4 = 2x - 1',
					helpSecondPiece: '2x',
					helpThirdPiece: dataUtils.pre(
									'\\grp'
										+'{\\str{-3x - <strong>2x</strong> + 4 = 2x - <strong>2x</strong> - 1}}'
						),
					helpFourthPiece: '-5x + 4 = -1',
					helpFifthPiece: dataUtils.pre(
									'\\grp'
										+'{\\str{-5x + 4 - <strong>4</strong> = -1 - <strong>4</strong>}}'
						),
					helpSixthPiece: '-5x = -5',
					helpSeventhPiece: dataUtils.pre(
									'\\grp'
										+'{\\css'
											+'{\\frac'
												+'{str{-5x&nbsp;}}'
												+'{str{<strong>-5</strong>&nbsp;}}'
											+'}'
											+'{fracNoMargin}'
										+'}'
										+'{str{=}}'
										+'{\\css'
											+'{\\frac'
												+'{str{-5}}'
												+'{str{<strong>-5</strong>&nbsp;}}'
											+'}'
											+'{fracNoMargin}'
										+'}'
						),
					ansNumber: '1',
					solution: dataUtils.pre(
								'\\pan{3}{9}'			
									+'{\\css'
										+'{\\rowgrp'
											+'{\\grp'
												+'{\\str{$$ansVariable =}}'
												+'{\\input{$$ansNumber}}'
											+'}'
											+'{\\html{&nbsp;}}'
											+'{\\css'
												+'{\\str{or}}'
												+'{label_like fontsize125}'
											+'}'
											+'{\\html{&nbsp;}}'
											+'{\\btn{no solution}{F}{btn-primary}}'
										+'}'
										+'{marginLeft132px width140 textAlignCenter}'
									+'}'
						),
					firstTable: dataUtils.pre(
										'{\\html{&nbsp;}}'
										+'{\\str{When solving an equation, <u>we first simplify each side of the equation</u>.}}'
										+'{\\html{&nbsp;}}'
										+'{\\str{On the left side of the equation we can <u>combine like terms</u><span class=hyphenByLineThrough>&nbsp&nbsp;</span>the 2x and -5x. On the right side of the equation we can <u>combine like terms</u><span class=hyphenByLineThrough>&nbsp&nbsp;</span>the 3 and the -4.}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{Original equation:}}'
												+'{width170}'
											+'}'
											+'{$$probStatement}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{1st. Simplified Result.}}'
												+'{width170}'
											+'}'
											+'{\\str{$$helpFirstPiece}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\str{Because we have <u>variable terms on both sides of the equation</u>, now we must eliminate one entire variable term. Let\'s eliminate \"$$helpSecondPiece\".}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{2nd: &nbsp;Subtract 2x.}}'
												+'{width170}'
											+'}'
											+'{$$helpThirdPiece}'
										+'}'
										+'{\\str{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class=fontsize125>&nbsp;</span>Result:}}'
												+'{width170}'
											+'}'
											+'{\\str{&nbsp;$$helpFourthPiece}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\str{We can now <u>isolate the variable</u> because it is on one side of the equation <strong>only</strong>.}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{3<sup>rd</sup>:&nbsp; Subtract 4.}}'
												+'{width170}'
											+'}'
											+'{$$helpFifthPiece}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class=fontsize125>&nbsp;</span>Result:}}'
												+'{width170}'
											+'}'
											+'{\\str{&nbsp;$$helpSixthPiece}}'
										+'}'
										+'{\\str{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{4<sup>th</sup>: &nbsp;&nbsp;Divide by -5.}}'
												+'{width170}'
											+'}'
											+'{$$helpSeventhPiece}'
										+'}'
								),
					helpAnswer: dataUtils.pre(
									'\\grp'
										+'{\\str{<span class=fontsize110>x</span> = $$ansNumber}}'
						),
					template: 'flexy',
				}
				,
				{	// problem 8
					probQuestion: 'Solve for the value of the variable, or click &quot;no solution&quot; if the equation cannot be solved:',
					probStatement: dataUtils.pre(
									'\\grp'
										+'{\\str{3n - 4n + 3 = -5 + 5n - 9}}'
						),
					ansVariable: 'n',
					helpFirstPiece: '-n + 3 = 5n - 14',
					helpSecondPiece: '-n',
					helpThirdPiece: dataUtils.pre(
									'\\grp'
										+'{\\str{-n + <strong>n</strong> + 3 = 5n + <strong>n</strong> - 14}}'
						),
					helpFourthPiece: '3 = 6n - 14',
					helpFifthPiece: dataUtils.pre(
									'\\grp'
										+'{\\str{3 + <strong>14</strong> = 6n - 14 + <strong>14</strong>}}'
						),
					helpSixthPiece: '17 = 6n',
					helpSeventhPiece: dataUtils.pre(
									'\\grp'
										+'{\\css'
											+'{\\frac'
												+'{str{17}}'
												+'{str{<strong>6</strong>&nbsp;}}'
											+'}'
											+'{fracNoMargin}'
										+'}'
										+'{str{ = }}'
										+'{\\css'
											+'{\\frac'
												+'{str{6n}}'
												+'{str{<strong>6</strong>&nbsp;}}'
											+'}'
											+'{fracNoMargin}'
										+'}'
						),
					ansNumber: '1',
					solution: dataUtils.pre(
								'\\pan{4}{8}'
									+'{\\css'
										+'{\\rowgrp'
											+'{\\grp'
												+'{\\str{$$ansVariable =}}'
												+'{\\frac'
													+'{input{17}}'
													+'{input{6}}'
												+'}'
											+'}'
											+'{\\html{&nbsp;}}'
											+'{\\grp'
												+'{\\btn{no solution}{F}{large}}'
											+'}'
										+'}'
										+'{marginLeft132px}'
									+'}'
						),
					
					solution: dataUtils.pre(
								'\\pan{4}{8}'			
									+'{\\css'
										+'{\\rowgrp'
											+'{\\grp'
												+'{\\str{$$ansVariable =}}'
												+'{\\frac'
													+'{input{17}}'
													+'{input{6}}'
												+'}'
											+'}'
											+'{\\html{&nbsp;}}'
											+'{\\css'
												+'{\\str{or}}'
												+'{label_like fontsize125}'
											+'}'
											+'{\\html{&nbsp;}}'
											+'{\\btn{no solution}{F}{btn-primary}}'
										+'}'
										+'{marginLeft40px width140 textAlignCenter}'
									+'}'
						),
					firstTable: dataUtils.pre(
										'{\\html{&nbsp;}}'
										+'{\\str{When solving an equation, <u>we first simplify each side of the equation</u>.}}'
										+'{\\html{&nbsp;}}'
										+'{\\str{On the left side of the equation we can <u>combine like terms</u><span class=hyphenByLineThrough>&nbsp&nbsp;</span>the 3n and -4n. On the right side of the equation we can <u>combine like terms</u><span class=hyphenByLineThrough>&nbsp&nbsp;</span>the -5 and the -9.}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{Original equation:}}'
												+'{width155}'
											+'}'
											+'{$$probStatement}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{1st. Simplified Result.}}'
												+'{width155}'
											+'}'
											+'{\\str{$$helpFirstPiece}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\str{Because we have <u>variable terms on both sides of the equation</u>, now we must eliminate one entire variable term. Let\'s eliminate \"$$helpSecondPiece\".}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{2nd: &nbsp;Add n.}}'
												+'{width155}'
											+'}'
											+'{$$helpThirdPiece}'
										+'}'
										+'{\\str{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class=fontsize125>&nbsp;</span>Result:}}'
												+'{width155}'
											+'}'
											+'{\\str{&nbsp;&nbsp;&nbsp;$$helpFourthPiece}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\str{We can now <u>isolate the variable</u> because it is on one side of the equation <strong>only</strong>.}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{3<sup>rd</sup>:&nbsp; Add 14.}}'
												+'{width155}'
											+'}'
											+'{$$helpFifthPiece}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class=fontsize125>&nbsp;</span>Result:}}'
												+'{width155}'
											+'}'
											+'{\\str{&nbsp;$$helpSixthPiece}}'
										+'}'
										+'{\\str{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{4<sup>th</sup>: &nbsp;&nbsp;Divide by 6.}}'
												+'{width155}'
											+'}'
											+'{$$helpSeventhPiece}'
										+'}'
								),
					helpAnswer: dataUtils.pre(
									'\\grp'
										+'{\\str{$$ansVariable = $$ansNumber}}'
						),
					template: 'flexy',
				}
				,
				{	// problem 9
					probQuestion: 'Solve for the value of the variable, or click &quot;no solution&quot; if the equation cannot be solved:',
					probStatement: dataUtils.pre(
									'\\grp'
										+'{\\str{-6 - 3y + 1 = 2y - 4y - 2}}'
						),
					ansVariable: 'y',
					helpFirstPiece: '-5 - 3y = -2y - 2',
					helpSecondPiece: '-2y',
					helpThirdPiece: dataUtils.pre(
									'\\grp'
										+'{\\str{-5 - 3y + <strong>2y</strong> = -2y + <strong>2y</strong> - 2}}'
						),
					helpFourthPiece: '-5 - y = -2',
					helpFifthPiece: dataUtils.pre(
									'\\grp'
										+'{\\str{-5 + <strong>5</strong> - y = -2 + <strong>5</strong>}}'
						),
					helpSixthPiece: '-y = 3',
					helpSeventhPiece: dataUtils.pre(
									'\\grp'
										+'{\\css'
											+'{\\frac'
												+'{str{-y&nbsp;}}'
												+'{str{<strong>-1</strong>&nbsp;}}'
											+'}'
											+'{fracNoMargin}'
										+'}'
										+'{str{=}}'
										+'{\\css'
											+'{\\frac'
												+'{str{3}}'
												+'{str{<strong>-1</strong>&nbsp;}}'
											+'}'
											+'{fracNoMargin}'
										+'}'
						),
					ansNumber: '-3',
					solution: dataUtils.pre(
								'\\pan{3}{9}'			
									+'{\\css'
										+'{\\rowgrp'
											+'{\\grp'
												+'{\\str{$$ansVariable =}}'
												+'{\\input{$$ansNumber}}'
											+'}'
											+'{\\html{&nbsp;}}'
											+'{\\css'
												+'{\\str{or}}'
												+'{label_like fontsize125}'
											+'}'
											+'{\\html{&nbsp;}}'
											+'{\\btn{no solution}{F}{btn-primary}}'
										+'}'
										+'{marginLeft132px width140 textAlignCenter}'
									+'}'
						),
					firstTable: dataUtils.pre(
										'{\\html{&nbsp;}}'
										+'{\\str{When solving an equation, <u>we first simplify each side of the equation</u>.}}'
										+'{\\html{&nbsp;}}'
										+'{\\str{On the left side of the equation we can <u>combine like terms</u><span class=hyphenByLineThrough>&nbsp&nbsp;</span>the -6 and 1. On the right side of the equation we can <u>combine like terms</u><span class=hyphenByLineThrough>&nbsp&nbsp;</span>the 2y and the -4y.}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{Original equation:}}'
												+'{width170}'
											+'}'
											+'{$$probStatement}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{1st. Simplified Result.}}'
												+'{width170}'
											+'}'
											+'{\\str{&nbsp;$$helpFirstPiece}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\str{Because we have <u>variable terms on both sides of the equation</u>, now we must eliminate one entire variable term. Let\'s eliminate \"$$helpSecondPiece\".}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{2nd: &nbsp;Add 2y.}}'
												+'{width170}'
											+'}'
											+'{$$helpThirdPiece}'
										+'}'
										+'{\\str{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class=fontsize125>&nbsp;</span>Result:}}'
												+'{width170}'
											+'}'
											+'{\\str{&nbsp;$$helpFourthPiece}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\str{We can now <u>isolate the variable</u> because it is on one side of the equation <strong>only</strong>.}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{3<sup>rd</sup>:&nbsp; Add 5.}}'
												+'{width170}'
											+'}'
											+'{$$helpFifthPiece}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Result:}}'
												+'{width170}'
											+'}'
											+'{\\str{&nbsp;$$helpSixthPiece}}'
										+'}'
										+'{\\str{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{4<sup>th</sup>: &nbsp;&nbsp;Divide by -1.}}'
												+'{width170}'
											+'}'
											+'{$$helpSeventhPiece}'
										+'}'
								),
					helpAnswer: dataUtils.pre(
									'\\grp'
										+'{\\str{<span class=fontsize110>$$ansVariable</span> = $$ansNumber}}'
						),
					template: 'flexy',
				}
				,
				{	// problem 10
					probQuestion: 'Solve for the value of the variable, or click &quot;no solution&quot; if the equation cannot be solved:',
					probStatement: dataUtils.pre(
									'\\grp'
										+'{\\str{-8 - 5a + 2 = 3a - 7a - 2}}'
						),
					ansVariable: 'a',
					helpFirstPiece: '-6 - 5a = -4a - 2',
					helpSecondPiece: '-4a',
					helpThirdPiece: dataUtils.pre(
									'\\grp'
										+'{\\str{-6 - 5a + <strong>4a</strong> = -4a + <strong>4a</strong> - 2}}'
						),
					helpFourthPiece: '-6 - a = -2',
					helpFifthPiece: dataUtils.pre(
									'\\grp'
										+'{\\str{-6 + <strong>6</strong> - a = -2 + <strong>6</strong>}}'
						),
					helpSixthPiece: '-a = 4',
					helpSeventhPiece: dataUtils.pre(
									'\\grp'
										+'{\\css'
											+'{\\frac'
												+'{str{-a&nbsp;}}'
												+'{str{<strong>-1</strong>&nbsp;}}'
											+'}'
											+'{fracNoMargin}'
										+'}'
										+'{str{=}}'
										+'{\\css'
											+'{\\frac'
												+'{str{4}}'
												+'{str{<strong>-1</strong>&nbsp;}}'
											+'}'
											+'{fracNoMargin}'
										+'}'
						),
					ansNumber: '-4',
					solution: dataUtils.pre(
								'\\pan{3}{9}'			
									+'{\\css'
										+'{\\rowgrp'
											+'{\\grp'
												+'{\\str{$$ansVariable =}}'
												+'{\\input{$$ansNumber}}'
											+'}'
											+'{\\html{&nbsp;}}'
											+'{\\css'
												+'{\\str{or}}'
												+'{label_like fontsize125}'
											+'}'
											+'{\\html{&nbsp;}}'
											+'{\\btn{no solution}{F}{btn-primary}}'
										+'}'
										+'{marginLeft132px width140 textAlignCenter}'
									+'}'
						),
					firstTable: dataUtils.pre(
										'{\\html{&nbsp;}}'
										+'{\\str{When solving an equation, <u>we first simplify each side of the equation</u>.}}'
										+'{\\html{&nbsp;}}'
										+'{\\str{On the left side of the equation we can <u>combine like terms</u><span class=hyphenByLineThrough>&nbsp&nbsp;</span>the -8 and 2. On the right side of the equation we can <u>combine like terms</u><span class=hyphenByLineThrough>&nbsp&nbsp;</span>the 3a and the -7a.}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{Original equation:}}'
												+'{width170}'
											+'}'
											+'{$$probStatement}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{1st. Simplified Result.}}'
												+'{width170}'
											+'}'
											+'{\\str{&nbsp;$$helpFirstPiece}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\str{Because we have <u>variable terms on both sides of the equation</u>, now we must eliminate one entire variable term. Let\'s eliminate \"$$helpSecondPiece\".}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{2nd: &nbsp;Add 4a.}}'
												+'{width170}'
											+'}'
											+'{$$helpThirdPiece}'
										+'}'
										+'{\\str{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class=fontsize125>&nbsp;</span>Result:}}'
												+'{width170}'
											+'}'
											+'{\\str{&nbsp;$$helpFourthPiece}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\str{We can now <u>isolate the variable</u> because it is on one side of the equation <strong>only</strong>.}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{3<sup>rd</sup>:&nbsp; Add 6.}}'
												+'{width170}'
											+'}'
											+'{$$helpFifthPiece}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Result:}}'
												+'{width170}'
											+'}'
											+'{\\str{&nbsp;$$helpSixthPiece}}'
										+'}'
										+'{\\str{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{4<sup>th</sup>: &nbsp;&nbsp;Divide by -1.}}'
												+'{width170}'
											+'}'
											+'{$$helpSeventhPiece}'
										+'}'
								),
					helpAnswer: dataUtils.pre(
									'\\grp'
										+'{\\str{<span class=fontsize110>$$ansVariable</span> = $$ansNumber}}'
						),
					template: 'flexy',
				}
				,
				{	// problem 11
					probQuestion: 'Solve for the value of the variable, or click &quot;no solution&quot; if the equation cannot be solved:',
					probStatement: dataUtils.pre(
									'\\grp'
										+'{\\str{3 ( y - 4 ) = 2y}}'
						),
					ansVariable: 'y',
					helpFirstPiece: '3y - 12 = 2y',
					helpSecondPiece: '2y',
					helpThirdPiece: dataUtils.pre(
									'\\grp'
										+'{\\str{3y - <strong>2y</strong> - 12 = 2y - <strong>2y</strong>}}'
						),
					helpFourthPiece: 'y - 12 = 0',
					helpFifthPiece: dataUtils.pre(
									'\\grp'
										+'{\\str{y - 12 + <strong>12</strong> = 0 + <strong>12</strong>}}'
						),
					helpSixthPiece: 'y = 12',
					ansNumber: '12',
					solution: dataUtils.pre(
								'\\pan{3}{9}'			
									+'{\\css'
										+'{\\rowgrp'
											+'{\\grp'
												+'{\\str{$$ansVariable =}}'
												+'{\\input{$$ansNumber}}'
											+'}'
											+'{\\html{&nbsp;}}'
											+'{\\css'
												+'{\\str{or}}'
												+'{label_like fontsize125}'
											+'}'
											+'{\\html{&nbsp;}}'
											+'{\\btn{no solution}{F}{btn-primary}}'
										+'}'
										+'{marginLeft132px width140 textAlignCenter}'
									+'}'
						),
					firstTable: dataUtils.pre(
										'{\\html{&nbsp;}}'
										+'{\\str{When solving an equation, <u>we first simplify each side of the equation</u>.}}'
										+'{\\html{&nbsp;}}'
										+'{\\str{On the left side of the equation we can <u>distribute the 3 into the parenthesis</u> (multiplying the 3 by both the y and the -4). There is no simplifying on the right side of the equation.}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{Original equation:}}'
												+'{width170}'
											+'}'
											+'{$$probStatement}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{1st. Simplified Result.}}'
												+'{width170}'
											+'}'
											+'{\\str{&nbsp;$$helpFirstPiece}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\str{Because we have <u>variable terms on both sides of the equation</u>, now we must eliminate one entire variable term. Let\'s eliminate \"$$helpSecondPiece\".}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{2nd: &nbsp;Subtract 2y.}}'
												+'{width170}'
											+'}'
											+'{$$helpThirdPiece}'
										+'}'
										+'{\\str{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class=fontsize125>&nbsp;</span>Result:}}'
												+'{width170}'
											+'}'
											+'{\\str{&nbsp;$$helpFourthPiece}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\str{We can now <u>isolate the variable</u> because it is on one side of the equation <strong>only</strong>.}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{3<sup>rd</sup>:&nbsp; Add 12.}}'
												+'{width170}'
											+'}'
											+'{$$helpFifthPiece}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Result:}}'
												+'{width170}'
											+'}'
											+'{\\str{&nbsp;$$helpSixthPiece}}'
										+'}'
								),
					helpAnswer: dataUtils.pre(
									'\\grp'
										+'{\\str{<span class=fontsize110>$$ansVariable</span> = $$ansNumber}}'
						),
					template: 'flexy',
				}
				,
				{	// problem 12
					probQuestion: 'Solve for the value of the variable, or click &quot;no solution&quot; if the equation cannot be solved:',
					probStatement: dataUtils.pre(
									'\\grp'
										+'{\\str{4 ( x - 6 ) = 3x}}'
						),
					ansVariable: 'x',
					helpFirstPiece: '4x - 24 = 3x',
					helpSecondPiece: '3x',
					helpThirdPiece: dataUtils.pre(
									'\\grp'
										+'{\\str{4x - <strong>3x</strong> - 24 = 3x - <strong>3x</strong>}}'
						),
					helpFourthPiece: 'x - 24 = 0',
					helpFifthPiece: dataUtils.pre(
									'\\grp'
										+'{\\str{x - 24 + <strong>24</strong> = 0 + <strong>24</strong>}}'
						),
					helpSixthPiece: 'x = 24',
					ansNumber: '24',
					solution: dataUtils.pre(
								'\\pan{3}{9}'			
									+'{\\css'
										+'{\\rowgrp'
											+'{\\grp'
												+'{\\str{$$ansVariable =}}'
												+'{\\input{$$ansNumber}}'
											+'}'
											+'{\\html{&nbsp;}}'
											+'{\\css'
												+'{\\str{or}}'
												+'{label_like fontsize125}'
											+'}'
											+'{\\html{&nbsp;}}'
											+'{\\btn{no solution}{F}{btn-primary}}'
										+'}'
										+'{marginLeft132px width140 textAlignCenter}'
									+'}'
						),
					firstTable: dataUtils.pre(
										'{\\html{&nbsp;}}'
										+'{\\str{When solving an equation, <u>we first simplify each side of the equation</u>.}}'
										+'{\\html{&nbsp;}}'
										+'{\\str{On the left side of the equation we can <u>distribute the 4 into the parenthesis</u> (multiplying the 4 by both the x and the -6). There is no simplifying on the right side of the equation.}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{Original equation:}}'
												+'{width170}'
											+'}'
											+'{$$probStatement}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{1st. Simplified Result.}}'
												+'{width170}'
											+'}'
											+'{\\str{&nbsp;$$helpFirstPiece}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\str{Because we have <u>variable terms on both sides of the equation</u>, now we must eliminate one entire variable term. Let\'s eliminate \"$$helpSecondPiece\".}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{2nd: &nbsp;Subtract 3x.}}'
												+'{width170}'
											+'}'
											+'{$$helpThirdPiece}'
										+'}'
										+'{\\str{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class=fontsize125>&nbsp;</span>Result:}}'
												+'{width170}'
											+'}'
											+'{\\str{&nbsp;$$helpFourthPiece}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\str{We can now <u>isolate the variable</u> because it is on one side of the equation <strong>only</strong>.}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{3<sup>rd</sup>:&nbsp; Add 24.}}'
												+'{width170}'
											+'}'
											+'{$$helpFifthPiece}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Result:}}'
												+'{width170}'
											+'}'
											+'{\\str{&nbsp;$$helpSixthPiece}}'
										+'}'
								),
					helpAnswer: dataUtils.pre(
									'\\grp'
										+'{\\str{<span class=fontsize110>$$ansVariable</span> = $$ansNumber}}'
						),
					template: 'flexy',
				}
				,
				{	// problem 13
					probQuestion: 'Solve for the value of the variable, or click &quot;no solution&quot; if the equation cannot be solved:',
					probStatement: dataUtils.pre(
									'\\grp'
										+'{\\str{-5 ( m + 2 ) = m - 6}}'
						),
					ansVariable: 'm',
					helpFirstPiece: '-5m - 10 = m - 6',
					helpSecondPiece: 'm',
					helpThirdPiece: dataUtils.pre(
									'\\grp'
										+'{\\str{-5m - <strong>m</strong> - 10 = m - <strong>m</strong> - 6}}'
						),
					helpFourthPiece: '-6m - 10 = -6',
					helpFifthPiece: dataUtils.pre(
									'\\grp'
										+'{\\str{-6m - 10 + <strong>10</strong> = -6 + <strong>10</strong>}}'
						),
					helpSixthPiece: '-6m = 4',
					helpSeventhPiece: dataUtils.pre(
									'\\grp'
										+'{\\css'
											+'{\\frac'
												+'{str{-6m&nbsp;}}'
												+'{str{<strong>-6</strong>&nbsp;}}'
											+'}'
											+'{fracNoMargin}'
										+'}'
										+'{str{=}}'
										+'{\\css'
											+'{\\frac'
												+'{str{4}}'
												+'{str{<strong>-6</strong>&nbsp;}}'
											+'}'
											+'{fracNoMargin}'
										+'}'
						),
					ansNumber: '24',
					solution: dataUtils.pre(
								'\\pan{3}{9}'			
									+'{\\css'
										+'{\\rowgrp'
											+'{\\grp'
												+'{\\str{$$ansVariable =}}'
												+'{\\frac'
													+'{input{-2}}'
													+'{input{3}}'
												+'}'
											+'}'
											+'{\\html{&nbsp;}}'
											+'{\\css'
												+'{\\str{or}}'
												+'{label_like fontsize125}'
											+'}'
											+'{\\html{&nbsp;}}'
											+'{\\btn{no solution}{F}{btn-primary}}'
										+'}'
										+'{marginLeft132px width140 textAlignCenter}'
									+'}'
						),
					firstTable: dataUtils.pre(
										'{\\html{&nbsp;}}'
										+'{\\str{When solving an equation, <u>we first simplify each side of the equation</u>.}}'
										+'{\\html{&nbsp;}}'
										+'{\\str{On the left side of the equation we can <u>distribute the <span class=specialMinus>&minus; </span>5 into the parenthesis</u> (multiplying the -5 by both the m and the 2). There is no simplifying on the right side of the equation.}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{Original equation:}}'
												+'{width170}'
											+'}'
											+'{$$probStatement}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{1st. Simplified Result.}}'
												+'{width170}'
											+'}'
											+'{\\str{&nbsp;$$helpFirstPiece}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\str{Because we have <u>variable terms on both sides of the equation</u>, now we must eliminate one entire variable term. Let\'s eliminate \"$$helpSecondPiece\".}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{2nd: &nbsp;Subtract m.}}'
												+'{width170}'
											+'}'
											+'{$$helpThirdPiece}'
										+'}'
										+'{\\str{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class=fontsize125>&nbsp;</span>Result:}}'
												+'{width170}'
											+'}'
											+'{\\str{&nbsp;$$helpFourthPiece}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\str{We can now <u>isolate the variable</u> because it is on one side of the equation <strong>only</strong>.}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{3<sup>rd</sup>:&nbsp; Add 10.}}'
												+'{width170}'
											+'}'
											+'{$$helpFifthPiece}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Result:}}'
												+'{width170}'
											+'}'
											+'{\\str{&nbsp;$$helpSixthPiece}}'
										+'}'
										
										+'{\\str{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{4<sup>th</sup>: &nbsp;&nbsp;Divide by -6.}}'
												+'{width170}'
											+'}'
											+'{$$helpSeventhPiece}'
										+'}'
								),
					helpAnswer: dataUtils.pre(
									'\\grp'
										+'{\\str{<span class=fontsize110>$$ansVariable</span> = $$ansNumber}}'
						),
					template: 'flexy',
				}
				,
				{	// problem 14
					probQuestion: 'Solve for the value of the variable, or click &quot;no solution&quot; if the equation cannot be solved:',
					probStatement: dataUtils.pre(
									'\\grp'
										+'{\\str{-7 ( x + 3 ) = x + 11}}'
						),
					ansVariable: 'x',
					helpFirstPiece: '-7x - 21 = x + 11',
					helpSecondPiece: 'x',
					helpThirdPiece: dataUtils.pre(
									'\\grp'
										+'{\\str{-7x - <strong>x</strong> - 21 = x - <strong>x</strong> + 11}}'
						),
					helpFourthPiece: '-8x - 21 = 11',
					helpFifthPiece: dataUtils.pre(
									'\\grp'
										+'{\\str{-8x - 21 + <strong>21</strong> = 11 + <strong>21</strong>}}'
						),
					helpSixthPiece: '-8x = 32',
					helpSeventhPiece: dataUtils.pre(
									'\\grp'
										+'{\\css'
											+'{\\frac'
												+'{str{-8x&nbsp;}}'
												+'{str{<strong>-8</strong>&nbsp;}}'
											+'}'
											+'{fracNoMargin}'
										+'}'
										+'{str{=}}'
										+'{\\css'
											+'{\\frac'
												+'{str{32}}'
												+'{str{<strong>-8</strong>&nbsp;}}'
											+'}'
											+'{fracNoMargin}'
										+'}'
						),
					ansNumber: '-4',
					solution: dataUtils.pre(
								'\\pan{3}{9}'			
									+'{\\css'
										+'{\\rowgrp'
											+'{\\grp'
												+'{\\str{$$ansVariable =}}'
												+'{\\input{$$ansNumber}}'
											+'}'
											+'{\\html{&nbsp;}}'
											+'{\\css'
												+'{\\str{or}}'
												+'{label_like fontsize125}'
											+'}'
											+'{\\html{&nbsp;}}'
											+'{\\btn{no solution}{F}{btn-primary}}'
										+'}'
										+'{marginLeft132px width140 textAlignCenter}'
									+'}'
						),
					firstTable: dataUtils.pre(
										'{\\html{&nbsp;}}'
										+'{\\str{When solving an equation, <u>we first simplify each side of the equation</u>.}}'
										+'{\\html{&nbsp;}}'
										+'{\\str{On the left side of the equation we can <u>distribute the <span class=specialMinus>&minus; </span>7 into the parenthesis</u> (multiplying the -7 by both the x and the 3). There is no simplifying on the right side of the equation.}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{Original equation:}}'
												+'{width170}'
											+'}'
											+'{$$probStatement}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{1st. Simplified Result.}}'
												+'{width170}'
											+'}'
											+'{\\str{&nbsp;$$helpFirstPiece}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\str{Because we have <u>variable terms on both sides of the equation</u>, now we must eliminate one entire variable term. Let\'s eliminate \"$$helpSecondPiece\".}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{2nd: &nbsp;Subtract x.}}'
												+'{width170}'
											+'}'
											+'{$$helpThirdPiece}'
										+'}'
										+'{\\str{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class=fontsize125>&nbsp;</span>Result:}}'
												+'{width170}'
											+'}'
											+'{\\str{&nbsp;$$helpFourthPiece}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\str{We can now <u>isolate the variable</u> because it is on one side of the equation <strong>only</strong>.}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{3<sup>rd</sup>:&nbsp; Add 21.}}'
												+'{width170}'
											+'}'
											+'{$$helpFifthPiece}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Result:}}'
												+'{width170}'
											+'}'
											+'{\\str{&nbsp;$$helpSixthPiece}}'
										+'}'
										
										+'{\\str{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{4<sup>th</sup>: &nbsp;&nbsp;Divide by -8.}}'
												+'{width170}'
											+'}'
											+'{$$helpSeventhPiece}'
										+'}'
								),
					helpAnswer: dataUtils.pre(
									'\\grp'
										+'{\\str{<span class=fontsize110>$$ansVariable</span> = $$ansNumber}}'
						),
					template: 'flexy',
				}
				,
				{	// problem 15
					probQuestion: 'Solve for the value of the variable, or click &quot;no solution&quot; if the equation cannot be solved:',
					probStatement: dataUtils.pre(
									'\\grp'
										+'{\\str{3x + 2 = 3x}}'
						),
					ansVariable: 'x',
					helpFirstPiece: '3x - <strong>3x</strong> + 2 = 3x - <strong>3x</strong>',
					helpSecondPiece: '2 = 0',
					solution: dataUtils.pre(
								'\\pan{3}{9}'			
									+'{\\css'
										+'{\\rowgrp'
											+'{\\grp'
												+'{\\str{$$ansVariable =}}'
												+'{\\html{<input type=text class=specialButton autofocus />}}'
											+'}'
											+'{\\html{&nbsp;}}'
											+'{\\css'
												+'{\\str{or}}'
												+'{label_like fontsize125}'
											+'}'
											+'{\\html{&nbsp;}}'
											+'{\\btn{no solution}{T}{btn-primary}}'
										+'}'
										+'{marginLeft132px width140 textAlignCenter}'
									+'}'
						),
					firstTable: dataUtils.pre(
										'{\\html{&nbsp;}}'
										+'{\\str{Because we have variable terms on both sides of the equation, now we must eliminate one entire variable term. Let\'s eliminate \"3x.\"}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{Original equation:}}'
												+'{width170}'
											+'}'
											+'{$$probStatement}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{1st. Subtract 3.}}'
												+'{width170}'
											+'}'
											+'{\\str{&nbsp;$$helpFirstPiece}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class=fontsize125>&nbsp;</span>Result:}}'
												+'{width170}'
											+'}'
											+'{\\str{&nbsp; $$helpSecondPiece}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\str{2 = 0 is a false statement. This is a bad equation. There is no solution.}}'
								),
					helpAnswer: dataUtils.pre(
									'\\grp'
										+'{\\str{no solution}}'
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
