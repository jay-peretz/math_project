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
										+'{\\str{x + 7 = 4}}'
						),
					ansVariable: 'x',
					helpFirstPiece: 'add 7',
					helpSecondPiece: 'subtracting 7',
					helpThirdPiece: 'subtract 7',
					helpFourthPiece: dataUtils.pre(
									'\\grp'
										+'{\\str{x + 7 - <strong>7</strong> = 4 - <strong>7</strong>}}'
						),
					helpFifthPiece: 'x = -3',
					helpStringAnswer: '<span class=fontsize110>x</span> &nbsp;<span class=fontsize110>=</span> -3',
					answerInstructions: '',
					ansNumber: '-3',
					solution: dataUtils.pre(
									'\\grp'
										+'{\\str{<span class=bigger>$$ansVariable</span> = }}'
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
											+'{$$probStatement}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{1st: &nbsp;$$helpThirdPiece.}}'
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
					probStatement: dataUtils.pre(
									'\\grp'
										+'{\\str{x + 5 = 3}}'
						),
					ansVariable: 'x',
					helpFirstPiece: 'add 5',
					helpSecondPiece: 'subtracting 5',
					helpThirdPiece: 'subtract 5',
					helpFourthPiece: dataUtils.pre(
									'\\grp'
										+'{\\str{x + 5 - <strong>5</strong> = 3 - <strong>5</strong>}}'
						),
					helpFifthPiece: 'x = -2',
					helpStringAnswer: '<span class=fontsize110>x</span> &nbsp;<span class=fontsize110>=</span> -2',
					answerInstructions: '',
					ansNumber: '-2',
					solution: dataUtils.pre(
									'\\grp'
										+'{\\str{<span class=bigger>$$ansVariable</span> = }}'
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
											+'{$$probStatement}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{1st: &nbsp;$$helpThirdPiece.}}'
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
					probStatement: dataUtils.pre(
									'\\grp'
										+'{\\str{y - 7 = 2}}'
						),
					ansVariable: 'y',
					helpFirstPiece: 'subtract 7',
					helpSecondPiece: 'adding 7',
					helpThirdPiece: 'add 7',
					helpFourthPiece: dataUtils.pre(
									'\\grp'
										+'{\\str{y - 7 + <strong>7</strong> = 2 + <strong>7</strong>}}'
						),
					helpFifthPiece: 'y = 9',
					helpStringAnswer: '<span class=fontsize110>y</span> &nbsp;<span class=fontsize110>=</span>&nbsp; 9',
					answerInstructions: '',
					ansNumber: '9',
					solution: dataUtils.pre(
									'\\grp'
										+'{\\str{<span class=bigger>$$ansVariable</span> = }}'
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
											+'{$$probStatement}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{1st: &nbsp;$$helpThirdPiece.}}'
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
				{   // problem 4
					probQuestion: 'Solve for the value of the variable:',
					probStatement: dataUtils.pre(
									'\\grp'
										+'{\\str{y - 11 = 2}}'
						),
					ansVariable: 'y',
					helpFirstPiece: 'subtract 11',
					helpSecondPiece: 'adding 11',
					helpThirdPiece: 'add 11',
					helpFourthPiece: dataUtils.pre(
									'\\grp'
										+'{\\str{y - 11 + <strong>11</strong> = 2 + <strong>11</strong>}}'
						),
					helpFifthPiece: 'y = 13',
					helpStringAnswer: '<span class=fontsize110>y</span> &nbsp;<span class=fontsize110>=</span> 13',
					answerInstructions: '',
					ansNumber: '13',
					solution: dataUtils.pre(
									'\\grp'
										+'{\\str{<span class=bigger>$$ansVariable</span> = }}'
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
											+'{$$probStatement}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{1st: &nbsp;$$helpThirdPiece.}}'
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
				{   // problem 5
					probQuestion: 'Solve for the value of the variable:',
					probStatement: dataUtils.pre(
									'\\grp'
										+'{\\str{-3a = 15}}'
						),
					ansVariable: 'a',
					helpFirstPiece: 'multiply by -3',
					helpSecondPiece: 'dividing by -3',
					helpThirdPiece: 'divide by -3',
					helpFourthPiece: dataUtils.pre(
									'\\grp'
										+'{\\frac'
											+'{\\str{-3a&nbsp;}}'
											+'{\\str{<strong>-3</strong>&nbsp;}}'
										+'}'
										+'{\\str{ = }}'
										+'{\\frac'
											+'{\\str{&nbsp;15}}'
											+'{\\str{<strong>-3</strong>&nbsp;&nbsp;}}'
										+'}'
						),
					helpFifthPiece: 'a = -5',
					helpStringAnswer: '<span class=fontsize110>a</span> &nbsp;<span class=fontsize110>=</span> -5',
					answerInstructions: '',
					ansNumber: '-5',
					solution: dataUtils.pre(
									'\\grp'
										+'{\\str{<span class=bigger>$$ansVariable</span> = }}'
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
											+'{$$probStatement}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{1st: &nbsp;$$helpThirdPiece.}}'
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
											+'{\\str{&nbsp;&nbsp;&nbsp;&nbsp;$$helpFifthPiece}}'
										+'}'
								),
					helpAnswer: dataUtils.pre(
									'\\grp'
										+'{\\str{&nbsp; $$helpStringAnswer}}'
						),
					template: 'flexy',
				}
				,
				{   // problem 6
					probQuestion: 'Solve for the value of the variable:',
					probStatement: dataUtils.pre(
									'\\grp'
										+'{\\str{-4a = -24}}'
						),
					ansVariable: 'a',
					helpFirstPiece: 'multiply by -4',
					helpSecondPiece: 'dividing by -4',
					helpThirdPiece: 'divide by -4',
					helpFourthPiece: dataUtils.pre(
									'\\grp'
										+'{\\frac'
											+'{\\str{-4a&nbsp;}}'
											+'{\\str{<strong>-4</strong>&nbsp;}}'
										+'}'
										+'{\\str{ = }}'
										+'{\\frac'
											+'{\\str{-24&nbsp;}}'
											+'{\\str{<strong>-4</strong>&nbsp;}}'
										+'}'
						),
					helpFifthPiece: 'a = 6',
					helpStringAnswer: '<span class=fontsize110>a</span> &nbsp;<span class=fontsize110>=</span> &nbsp;6',
					answerInstructions: '',
					ansNumber: '6',
					solution: dataUtils.pre(
									'\\grp'
										+'{\\str{<span class=bigger>$$ansVariable</span> = }}'
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
											+'{$$probStatement}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{1st: &nbsp;$$helpThirdPiece.}}'
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
											+'{\\str{&nbsp;&nbsp;&nbsp;&nbsp;$$helpFifthPiece}}'
										+'}'
								),
					helpAnswer: dataUtils.pre(
									'\\grp'
										+'{\\str{&nbsp; $$helpStringAnswer}}'
						),
					template: 'flexy',
				}
				,
				{   // problem 7
					probQuestion: 'Solve for the value of the variable:',
					probStatement: dataUtils.pre(
									'\\grp'
										+'{\\frac'
											+'{\\str{x}}'
											+'{\\str{6}}'
										+'}'
										+'{\\str{ = -30}}'
						),
					ansVariable: 'x',
					helpFirstPiece: 'divide by 6',
					helpSecondPiece: 'multiplying by 6',
					helpThirdPiece: 'multiply by 6',
					helpFourthPiece: dataUtils.pre(
									'\\grp'
										+'{\\css'
											+'{\\frac'
												+'{\\str{x}}'
												+'{\\str{6}}'
											+'}'
											+'{fracReducedRightMargin}'
										+'}'
										+'{\\str{ * <strong>(6)</strong>}}'
										+'{\\str{ = }}'
										+'{\\str{-30 * <strong>(6)</strong>}}'
						),
					helpFifthPiece: 'x = -180',
					helpStringAnswer: '<span class=fontsize110>a</span> &nbsp;<span class=fontsize110>=</span> -180',
					answerInstructions: '',
					ansNumber: '-180',
					solution: dataUtils.pre(
									'\\grp'
										+'{\\str{<span class=bigger>$$ansVariable</span> = }}'
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
											+'{$$probStatement}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{1st: &nbsp;$$helpThirdPiece.}}'
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
											+'{\\str{&nbsp;&nbsp;&nbsp;&nbsp;$$helpFifthPiece}}'
										+'}'
								),
					helpAnswer: dataUtils.pre(
									'\\grp'
										+'{\\str{&nbsp; $$helpStringAnswer}}'
						),
					template: 'flexy',
				}
				,
				{   // problem 8
					probQuestion: 'Solve for the value of the variable:',
					probStatement: dataUtils.pre(
										'\\grp'
											+'{\\frac'
												+'{\\str{&nbsp;&nbsp;&nbsp;x&nbsp;&nbsp;}}'
												+'{\\str{-8&nbsp;&nbsp;}}'
											+'}'
											+'{\\str{ = -32}}'
									),
					ansVariable: 'x',
					helpFirstPiece: 'divide by -8',
					helpSecondPiece: 'multiplying by -8',
					helpThirdPiece: 'multiply by -8',
					helpFourthPiece: dataUtils.pre(
									'\\grp'
										+'{\\css'
											+'{\\frac'
												+'{\\str{&nbsp;&nbsp;&nbsp;x&nbsp;&nbsp;}}'
												+'{\\str{-8&nbsp;&nbsp;}}'
											+'}'
											+'{fracReducedRightMargin}'
										+'}'
										+'{\\str{ * <strong>(-8&nbsp;)</strong>}}'
										+'{\\str{ = }}'
										+'{\\str{-32 * <strong>(-8&nbsp;)</strong>}}'
						),
					helpFifthPiece: 'x = 256',
					helpStringAnswer: '<span class=fontsize110>x</span> &nbsp;<span class=fontsize110>=</span> &nbsp;256',
					answerInstructions: '',
					ansNumber: '256',
					solution: dataUtils.pre(
										'\\pan{3}{9}'
											+'{\\css'
												+'{\\grp'
													+'{\\str{<span class=bigger>$$ansVariable</span> = }}'
													+'{\\input{$$ansNumber}}'
												+'}'
												+'{marginLeft80px}'
											+'}'
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
												+'{width170}'
											+'}'
											+'{$$probStatement}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{1st: &nbsp;$$helpThirdPiece.}}'
												+'{width170}'
											+'}'
											+'{$$helpFourthPiece}'
										+'}'
										+'{\\str{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Result:}}'
												+'{width170}'
											+'}'
											+'{\\str{&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class=fontsize110>&nbsp;</span>$$helpFifthPiece}}'
										+'}'
								),
					helpAnswer: dataUtils.pre(
									'\\grp'
										+'{\\str{&nbsp; $$helpStringAnswer}}'
						),
					template: 'flexy',
				}
				,
				{   // problem 9
					probQuestion: 'Solve for the value of the variable:',
					probStatement: dataUtils.pre(
										'\\grp'
											+'{\\str{ 2x + 5 = 27}}'
									),
					ansVariable: 'x',
					helpFirstPiece: dataUtils.pre(
									'\\grp'
										+'{\\str{2x + 5 - <strong>5</strong> = 27 - <strong>5</strong>}}'
						),
					firstHelpResult: '2x = 22',
					helpSecondPiece: dataUtils.pre(
									'\\grp'
										+'{\\css'
											+'{\\frac'
												+'{\\str{&nbsp;2x&nbsp;}}'
												+'{\\str{<strong>2</strong>}}'
											+'}'
											+'{}'
										+'}'
										+'{\\str{ = }}'
										+'{\\css'
											+'{\\frac'
												+'{\\str{&nbsp;22&nbsp;}}'
												+'{\\str{<strong>2</strong>}}'
											+'}'
											+'{}'
										+'}'
						),
					secondHelpResult: 'x = 11',
					helpStringAnswer: '<span class=fontsize110>x</span> &nbsp;<span class=fontsize110>=</span> &nbsp;11',
					answerInstructions: '',
					ansNumber: '11',
					solution: dataUtils.pre(
										'\\pan{3}{9}'
											+'{\\css'
												+'{\\grp'
													+'{\\str{<span class=bigger>$$ansVariable</span> = }}'
													+'{\\input{$$ansNumber}}'
												+'}'
												+'{marginLeft80px}'
											+'}'
						),
					firstTable: dataUtils.pre(
										'{\\html{&nbsp;}}'
										+'{\\str{Goal: Isolate the variable.}}'
										+'{\\html{&nbsp;}}'
										+'{\\str{To isolate the variable we need to eliminate both the \"add 5\" and the \"multiply by 2.\"}}'
										+'{\\html{&nbsp;}}'
										+'{\\str{<strong>We need to get rid of the coefficient of the variable</strong> (the 2 in this case) <strong><u>last</u></strong>.}}'
										+'{\\html{&nbsp;}}'
										+'{\\str{We must always do the same to both sides of the equation.}}'
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
												+'{\\str{1st: &nbsp;Subtract 5.}}'
												+'{width170}'
											+'}'
											+'{$$helpFirstPiece}'
										+'}'
										+'{\\str{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Result:}}'
												+'{width170}'
											+'}'
											+'{\\str{&nbsp;$$firstHelpResult}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{1st: &nbsp;Divide by 2.}}'
												+'{width170}'
											+'}'
											+'{$$helpSecondPiece}'
										+'}'
										+'{\\str{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Result:}}'
												+'{width170}'
											+'}'
											+'{\\str{&nbsp;&nbsp;&nbsp;&nbsp;$$secondHelpResult}}'
										+'}'
								),
					helpAnswer: dataUtils.pre(
									'\\grp'
										+'{\\str{&nbsp; $$helpStringAnswer}}'
						),
					template: 'flexy',
				}
				,
				{   // problem 10
					probQuestion: 'Solve for the value of the variable:',
					probStatement: dataUtils.pre(
										'\\grp'
											+'{\\str{-4x + 3 = 15}}'
									),
					ansVariable: 'x',
					helpFirstPiece: dataUtils.pre(
									'\\grp'
										+'{\\str{-4x + 3 - <strong>3</strong> = 15 - <strong>3</strong>}}'
						),
					firstHelpResult: '-4x = 12',
					helpSecondPiece: dataUtils.pre(
									'\\grp'
										+'{\\css'
											+'{\\frac'
												+'{\\str{&nbsp;-4x&nbsp;}}'
												+'{\\str{<strong>-4</strong>}}'
											+'}'
											+'{}'
										+'}'
										+'{\\str{ = }}'
										+'{\\css'
											+'{\\frac'
												+'{\\str{&nbsp;&nbsp;12&nbsp;}}'
												+'{\\str{<strong>-4</strong>&nbsp;}}'
											+'}'
											+'{}'
										+'}'
						),
					secondHelpResult: 'x = -3',
					helpStringAnswer: '<span class=fontsize110>x</span> &nbsp;<span class=fontsize110>=</span> -3',
					answerInstructions: '',
					ansNumber: '-3',
					solution: dataUtils.pre(
										'\\pan{3}{9}'
											+'{\\css'
												+'{\\grp'
													+'{\\str{<span class=bigger>$$ansVariable</span> = }}'
													+'{\\input{$$ansNumber}}'
												+'}'
												+'{marginLeft80px}'
											+'}'
						),
					firstTable: dataUtils.pre(
										'{\\html{&nbsp;}}'
										+'{\\str{Goal: Isolate the variable.}}'
										+'{\\html{&nbsp;}}'
										+'{\\str{To isolate the variable we need to eliminate both the \"add 3\" and the \"multiply by -4.\"}}'
										+'{\\html{&nbsp;}}'
										+'{\\str{<strong>We need to get rid of the coefficient of the variable</strong> (the -4 in this case) <strong><u>last</u></strong>.}}'
										+'{\\html{&nbsp;}}'
										+'{\\str{We must always do the same to both sides of the equation.}}'
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
												+'{\\str{1st: &nbsp;Subtract 3.}}'
												+'{width170}'
											+'}'
											+'{$$helpFirstPiece}'
										+'}'
										+'{\\str{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Result:}}'
												+'{width170}'
											+'}'
											+'{\\str{&nbsp;$$firstHelpResult}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{1st: &nbsp;Divide by -4.}}'
												+'{width170}'
											+'}'
											+'{$$helpSecondPiece}'
										+'}'
										+'{\\str{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Result:}}'
												+'{width170}'
											+'}'
											+'{\\str{&nbsp;&nbsp;&nbsp;&nbsp;$$secondHelpResult}}'
										+'}'
								),
					helpAnswer: dataUtils.pre(
									'\\grp'
										+'{\\str{&nbsp; $$helpStringAnswer}}'
						),
					template: 'flexy',
				}
				,
				{   // problem 11
					probQuestion: 'Solve for the value of the variable:',
					probStatement: dataUtils.pre(
										'\\grp'
											+'{\\str{-m = -10}}'
									),
					ansVariable: 'm',
					helpFirstPiece: dataUtils.pre(
									'\\grp'
										+'{\\css'
											+'{\\frac'
												+'{\\str{&nbsp;-m&nbsp;}}'
												+'{\\str{<strong>-1</strong>}}'
											+'}'
											+'{}'
										+'}'
										+'{\\str{ = }}'
										+'{\\css'
											+'{\\frac'
												+'{\\str{&nbsp;-10&nbsp;}}'
												+'{\\str{<strong>-1</strong>&nbsp;}}'
											+'}'
											+'{}'
										+'}'
						),
					firstHelpResult: 'm = 10',
					/*helpSecondPiece: dataUtils.pre(
									'\\grp'
										+'{\\css'
											+'{\\frac'
												+'{\\str{&nbsp;-4x&nbsp;}}'
												+'{\\str{<strong>-4</strong>}}'
											+'}'
											+'{}'
										+'}'
										+'{\\str{ = }}'
										+'{\\css'
											+'{\\frac'
												+'{\\str{&nbsp;&nbsp;12&nbsp;}}'
												+'{\\str{<strong>-4</strong>&nbsp;}}'
											+'}'
											+'{}'
										+'}'
						),
					secondHelpResult: 'x = -3',*/
					helpStringAnswer: '<span class=fontsize110>m</span> &nbsp;<span class=fontsize110>=</span> &nbsp;10',
					answerInstructions: '',
					ansNumber: '10',
					solution: dataUtils.pre(
										'\\pan{3}{9}'
											+'{\\css'
												+'{\\grp'
													+'{\\str{<span class=bigger>$$ansVariable</span> = }}'
													+'{\\input{$$ansNumber}}'
												+'}'
												+'{marginLeft80px}'
											+'}'
						),
					firstTable: dataUtils.pre(
										'{\\html{&nbsp;}}'
										+'{\\str{Goal: Isolate the variable.}}'
										+'{\\html{&nbsp;}}'
										+'{\\str{The variable of the coefficient is currently -1. The term -m means -1 * m. To solve for the variable the coefficient must be positive 1.}}'
										+'{\\html{&nbsp;}}'
										+'{\\str{To isolate the variable we need to eliminate the \"multiply by -1\" by \"dividing by-1.\"}}'
										+'{\\html{&nbsp;}}'
										+'{\\str{We must always do the same to both sides of the equation.}}'
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
												+'{\\str{1st: &nbsp;Divide by -1.}}'
												+'{width170}'
											+'}'
											+'{$$helpFirstPiece}'
										+'}'
										+'{\\str{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Result:}}'
												+'{width170}'
											+'}'
											+'{\\str{&nbsp;&nbsp;&nbsp;&nbsp;$$firstHelpResult}}'
										+'}'
										/*+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{1st: &nbsp;Divide by -4.}}'
												+'{width170}'
											+'}'
											+'{$$helpSecondPiece}'
										+'}'
										+'{\\str{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Result:}}'
												+'{width170}'
											+'}'
											+'{\\str{&nbsp;&nbsp;&nbsp;&nbsp;$$secondHelpResult}}'
										+'}'*/
								),
					helpAnswer: dataUtils.pre(
									'\\grp'
										+'{\\str{&nbsp; $$helpStringAnswer}}'
						),
					template: 'flexy',
				}
				,
				{   // problem 12
					probQuestion: 'Solve for the value of the variable:',
					probStatement: dataUtils.pre(
										'\\grp'
											+'{\\str{-y = 18}}'
									),
					ansVariable: 'y',
					helpFirstPiece: dataUtils.pre(
									'\\grp'
										+'{\\css'
											+'{\\frac'
												+'{\\str{&nbsp;-y&nbsp;}}'
												+'{\\str{<strong>-1</strong>}}'
											+'}'
											+'{}'
										+'}'
										+'{\\str{ = }}'
										+'{\\css'
											+'{\\frac'
												+'{\\str{&nbsp;18&nbsp;}}'
												+'{\\str{<strong>-1</strong>&nbsp;}}'
											+'}'
											+'{}'
										+'}'
						),
					firstHelpResult: 'y = -18',
					/*helpSecondPiece: dataUtils.pre(
									'\\grp'
										+'{\\css'
											+'{\\frac'
												+'{\\str{&nbsp;-4x&nbsp;}}'
												+'{\\str{<strong>-4</strong>}}'
											+'}'
											+'{}'
										+'}'
										+'{\\str{ = }}'
										+'{\\css'
											+'{\\frac'
												+'{\\str{&nbsp;&nbsp;12&nbsp;}}'
												+'{\\str{<strong>-4</strong>&nbsp;}}'
											+'}'
											+'{}'
										+'}'
						),
					secondHelpResult: 'x = -3',*/
					helpStringAnswer: '<span class=fontsize110>y</span> &nbsp;<span class=fontsize110>=</span> -18',
					answerInstructions: '',
					ansNumber: '-18',
					solution: dataUtils.pre(
										'\\pan{3}{9}'
											+'{\\css'
												+'{\\grp'
													+'{\\str{<span class=bigger>$$ansVariable</span> = }}'
													+'{\\input{$$ansNumber}}'
												+'}'
												+'{marginLeft80px}'
											+'}'
						),
					firstTable: dataUtils.pre(
										'{\\html{&nbsp;}}'
										+'{\\str{Goal: Isolate the variable.}}'
										+'{\\html{&nbsp;}}'
										+'{\\str{The variable of the coefficient is currently -1. The term -y means -1 * y. To solve for the variable the coefficient must be positive 1.}}'
										+'{\\html{&nbsp;}}'
										+'{\\str{To isolate the variable we need to eliminate the \"multiply by -1\" by \"dividing by-1.\"}}'
										+'{\\html{&nbsp;}}'
										+'{\\str{We must always do the same to both sides of the equation.}}'
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
												+'{\\str{1st: &nbsp;Divide by -1.}}'
												+'{width170}'
											+'}'
											+'{$$helpFirstPiece}'
										+'}'
										+'{\\str{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Result:}}'
												+'{width170}'
											+'}'
											+'{\\str{&nbsp;&nbsp;&nbsp;&nbsp;$$firstHelpResult}}'
										+'}'
										/*+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{1st: &nbsp;Divide by -4.}}'
												+'{width170}'
											+'}'
											+'{$$helpSecondPiece}'
										+'}'
										+'{\\str{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Result:}}'
												+'{width170}'
											+'}'
											+'{\\str{&nbsp;&nbsp;&nbsp;&nbsp;$$secondHelpResult}}'
										+'}'*/
								),
					helpAnswer: dataUtils.pre(
									'\\grp'
										+'{\\str{&nbsp; $$helpStringAnswer}}'
						),
					template: 'flexy',
				}
				,
				{   // problem 13
					probQuestion: 'Solve for the value of the variable:',
					probStatement: dataUtils.pre(
										'\\grp'
											+'{\\str{-3b - 8 = -11}}'
									),
					ansVariable: 'b',
					helpFirstPiece: dataUtils.pre(
									'\\grp'
										+'{\\str{-3b - 8 + <strong>8</strong> = -11 + <strong>8</strong>}}'
										/*+'{\\css'
											+'{\\frac'
												+'{\\str{&nbsp;-b&nbsp;}}'
												+'{\\str{<strong>-1</strong>}}'
											+'}'
											+'{}'
										+'}'
										+'{\\str{ = }}'
										+'{\\css'
											+'{\\frac'
												+'{\\str{&nbsp;18&nbsp;}}'
												+'{\\str{<strong>-1</strong>&nbsp;}}'
											+'}'
											+'{}'
										+'}'*/
						),
					firstHelpResult: '-3b = -3',
					helpSecondPiece: dataUtils.pre(
									'\\grp'
										+'{\\css'
											+'{\\frac'
												+'{\\str{&nbsp;-3b&nbsp;}}'
												+'{\\str{<strong>-3</strong>}}'
											+'}'
											+'{}'
										+'}'
										+'{\\str{ = }}'
										+'{\\css'
											+'{\\frac'
												+'{\\str{&nbsp;-3&nbsp;}}'
												+'{\\str{<strong>-3</strong>}}'
											+'}'
											+'{}'
										+'}'
						),
					secondHelpResult: 'b = 1',
					helpStringAnswer: '<span class=fontsize110>b</span> &nbsp;<span class=fontsize110>=</span> &nbsp;1',
					answerInstructions: '',
					ansNumber: '1',
					solution: dataUtils.pre(
										'\\pan{3}{9}'
											+'{\\css'
												+'{\\grp'
													+'{\\str{<span class=bigger>$$ansVariable</span> = }}'
													+'{\\input{$$ansNumber}}'
												+'}'
												+'{marginLeft80px}'
											+'}'
						),
					firstTable: dataUtils.pre(
										'{\\html{&nbsp;}}'
										+'{\\str{Goal: Isolate the variable.}}'
										+'{\\html{&nbsp;}}'
										+'{\\str{To isolate the variable we need to eliminate both the \"subtract 8\" and the \"multiply by -3.\"}}'
										+'{\\html{&nbsp;}}'
										+'{\\str{<strong>We need to get rid of the coefficient of the variable</strong> (the -3 in this case) <strong><u>last</u></strong>.}}'
										+'{\\html{&nbsp;}}'
										+'{\\str{We must always do the same to both sides of the equation.}}'
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
												+'{\\str{1st: &nbsp;Add 8.}}'
												+'{width170}'
											+'}'
											+'{$$helpFirstPiece}'
										+'}'
										+'{\\str{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Result:}}'
												+'{width170}'
											+'}'
											+'{\\str{&nbsp;$$firstHelpResult}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{2nd: &nbsp;Divide by -3.}}'
												+'{width170}'
											+'}'
											+'{$$helpSecondPiece}'
										+'}'
										+'{\\str{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Result:}}'
												+'{width170}'
											+'}'
											+'{\\str{&nbsp;&nbsp;&nbsp;&nbsp;$$secondHelpResult}}'
										+'}'
								),
					helpAnswer: dataUtils.pre(
									'\\grp'
										+'{\\str{&nbsp; $$helpStringAnswer}}'
						),
					template: 'flexy',
				}
				,
				{   // problem 14
					probQuestion: 'Solve for the value of the variable:',
					probStatement: dataUtils.pre(
										'\\grp'
											+'{\\str{6x - 4 = -16}}'
									),
					ansVariable: 'x',
					helpFirstPiece: dataUtils.pre(
									'\\grp'
										+'{\\str{6x - 4 + <strong>4</strong> = -16 + <strong>4</strong>}}'
										/*+'{\\css'
											+'{\\frac'
												+'{\\str{&nbsp;-b&nbsp;}}'
												+'{\\str{<strong>-1</strong>}}'
											+'}'
											+'{}'
										+'}'
										+'{\\str{ = }}'
										+'{\\css'
											+'{\\frac'
												+'{\\str{&nbsp;18&nbsp;}}'
												+'{\\str{<strong>-1</strong>&nbsp;}}'
											+'}'
											+'{}'
										+'}'*/
						),
					firstHelpResult: '6x = -12',
					helpSecondPiece: dataUtils.pre(
									'\\grp'
										+'{\\css'
											+'{\\frac'
												+'{\\str{&nbsp;6x&nbsp;}}'
												+'{\\str{<strong>6</strong>}}'
											+'}'
											+'{}'
										+'}'
										+'{\\str{ = }}'
										+'{\\css'
											+'{\\frac'
												+'{\\str{-12&nbsp;}}'
												+'{\\str{<strong>6</strong>}}'
											+'}'
											+'{}'
										+'}'
						),
					secondHelpResult: 'x = -2',
					helpStringAnswer: '<span class=fontsize110>x</span> &nbsp;<span class=fontsize110>=</span> -2',
					answerInstructions: '',
					ansNumber: '-2',
					solution: dataUtils.pre(
										'\\pan{3}{9}'
											+'{\\css'
												+'{\\grp'
													+'{\\str{<span class=bigger>$$ansVariable</span> = }}'
													+'{\\input{$$ansNumber}}'
												+'}'
												+'{marginLeft80px}'
											+'}'
						),
					firstTable: dataUtils.pre(
										'{\\html{&nbsp;}}'
										+'{\\str{Goal: Isolate the variable.}}'
										+'{\\html{&nbsp;}}'
										+'{\\str{To isolate the variable we need to eliminate both the \"subtract 4\" and the \"multiply by 6.\"}}'
										+'{\\html{&nbsp;}}'
										+'{\\str{<strong>We need to get rid of the coefficient of the variable</strong> (the 6 in this case) <strong><u>last</u></strong>.}}'
										+'{\\html{&nbsp;}}'
										+'{\\str{We must always do the same to both sides of the equation.}}'
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
												+'{\\str{1st: &nbsp;Add 4.}}'
												+'{width170}'
											+'}'
											+'{$$helpFirstPiece}'
										+'}'
										+'{\\str{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Result:}}'
												+'{width170}'
											+'}'
											+'{\\str{&nbsp;$$firstHelpResult}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{2nd: &nbsp;Divide by 6.}}'
												+'{width170}'
											+'}'
											+'{$$helpSecondPiece}'
										+'}'
										+'{\\str{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Result:}}'
												+'{width170}'
											+'}'
											+'{\\str{&nbsp;&nbsp;&nbsp;&nbsp;$$secondHelpResult}}'
										+'}'
								),
					helpAnswer: dataUtils.pre(
									'\\grp'
										+'{\\str{&nbsp; $$helpStringAnswer}}'
						),
					template: 'flexy',
				}
				,
				{   // problem 15
					probQuestion: 'Solve for the value of the variable:',
					probStatement: dataUtils.pre(
										'\\grp'
											+'{\\css'
												+'{\\frac'
													+'{\\str{&nbsp;2x&nbsp;}}'
													+'{\\str{3}}'
												+'}'
												+'{}'
											+'}'
											+'{\\str{ = -6}}'
									),
					ansVariable: 'x',
					helpFirstPiece: dataUtils.pre(
									'\\grp'
										+'{\\css'
											+'{\\frac'
												+'{\\str{&nbsp;2x&nbsp;}}'
												+'{\\str{3}}'
											+'}'
											+'{}'
										+'}'
										+'{\\str{(}}'
										+'{\\css'
											+'{\\frac'
												+'{\\str{<strong>3</strong>}}'
												+'{\\str{<strong>2</strong>}}'
											+'}'
											+'{}'
										+'}'
										+'{\\str{)}}'
										+'{\\str{ = -6}}'
										+'{\\str{(}}'
										+'{\\css'
											+'{\\frac'
												+'{\\str{<strong>3</strong>}}'
												+'{\\str{<strong>2</strong>}}'
											+'}'
											+'{}'
										+'}'
										+'{\\str{)}}'
						),
					firstHelpResult: 'x = -9',
					/*helpSecondPiece: dataUtils.pre(
									'\\grp'
										+'{\\css'
											+'{\\frac'
												+'{\\str{&nbsp;6x&nbsp;}}'
												+'{\\str{<strong>6</strong>}}'
											+'}'
											+'{}'
										+'}'
										+'{\\str{ = }}'
										+'{\\css'
											+'{\\frac'
												+'{\\str{-12&nbsp;}}'
												+'{\\str{<strong>6</strong>}}'
											+'}'
											+'{}'
										+'}'
						),
					secondHelpResult: 'x = -9',*/
					helpStringAnswer: '<span class=fontsize110>x</span> &nbsp;<span class=fontsize110>=</span> -9',
					answerInstructions: '',
					ansNumber: '-9',
					solution: dataUtils.pre(
										'\\pan{2}{10}'
											+'{\\css'
												+'{\\grp'
													+'{\\str{<span class=bigger>$$ansVariable</span> = }}'
													+'{\\input{$$ansNumber}}'
												+'}'
												+'{marginLeft80px}'
											+'}'
						),
					firstTable: dataUtils.pre(
										'{\\html{&nbsp;}}'
										+'{\\str{Goal: Isolate the variable.}}'
										+'{\\html{&nbsp;}}'
										+'{\\str{To isolate the variable we need to eliminate the \"multiply by <sup>2</sup>&#8260;<sub>3</sub>.\" We get rid of \"multiply by <sup>2</sup>&#8260;<sub>3</sub>\" by \"dividing by <sup>2</sup>&#8260;<sub>3</sub>.\"}}'
										+'{\\html{&nbsp;}}'
										+'{\\str{Our arithmetic knowledge informs us that to divide by a fraction is the same as \"multiplying by its reciprocal.\" Thus, \"dividing by <sup>2</sup>&#8260;<sub>3</sub>\" is the same as \"multiplying by <sup>3</sup>&#8260;<sub>2</sub>.\"}}'
										+'{\\html{&nbsp;}}'
										+'{\\str{<u>In general</u>, whenever we get rid of \"multiplying by a fraction\" we simply \"multiply by the fraction\'s reciprocal.\"}}'
										+'{\\html{&nbsp;}}'
										+'{\\str{We must always do the same to both sides of the equation.}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{Original equation:}}'
												+'{width200}'
											+'}'
											+'{$$probStatement}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{1st: &nbsp;multiply by <sup>3</sup>&#8260;<sub>2</sub><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(the reciprocal of <sup>2</sup>&#8260;<sub>3</sub>).}}'
												+'{width200}'
											+'}'
											+'{$$helpFirstPiece}'
										+'}'
										+'{\\str{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Result:}}'
												+'{width200}'
											+'}'
											+'{\\str{&nbsp;&nbsp;&nbsp;&nbsp;$$firstHelpResult}}'
										+'}'
										/*+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{2nd: &nbsp;Divide by 6.}}'
												+'{width170}'
											+'}'
											+'{$$helpSecondPiece}'
										+'}'
										+'{\\str{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Result:}}'
												+'{width170}'
											+'}'
											+'{\\str{&nbsp;&nbsp;&nbsp;&nbsp;$$secondHelpResult}}'
										+'}'*/
								),
					helpAnswer: dataUtils.pre(
									'\\grp'
										+'{\\str{&nbsp; $$helpStringAnswer}}'
						),
					template: 'flexy',
				}
				,
				{   // problem 16
					probQuestion: 'Solve for the value of the variable:',
					probStatement: dataUtils.pre(
										'\\grp'
											+'{\\mixed'
												+'{\\str{-}}'
												+'{\\frac'
													+'{\\str{&nbsp;4m&nbsp;}}'
													+'{\\str{&nbsp;5}}'
												+'}'
											+'}'	
											+'{\\str{ = -8}}'
									),
					ansVariable: 'm',
					helpFirstPiece: dataUtils.pre(
									'\\grp'
										+'{\\css'
											+'{\\mixed'
												+'{\\str{-}}'
												+'{\\frac'
													+'{\\str{&nbsp;4m&nbsp;}}'
													+'{\\str{&nbsp;5}}'
												+'}'
											+'}'
											+'{}'
										+'}'
										+'{\\str{(}}'
										+'{\\css'
											+'{\\mixed'
												+'{\\str{-}}'
												+'{\\frac'
													+'{\\str{<strong>5</strong>}}'
													+'{\\str{<strong>4</strong>}}'
												+'}'
											+'}'	
											+'{fracNoMargin}'
										+'}'
										+'{\\str{)}}'
										+'{\\str{ = -8}}'
										+'{\\str{(}}'
										+'{\\css'
											+'{\\mixed'
												+'{\\str{-}}'
												+'{\\frac'
													+'{\\str{<strong>5</strong>}}'
													+'{\\str{<strong>4</strong>}}'
												+'}'
											+'}'	
											+'{fracNoMargin}'
										+'}'
										+'{\\str{)}}'
						),
					firstHelpResult: 'm = 10',
					/*helpSecondPiece: dataUtils.pre(
									'\\grp'
										+'{\\css'
											+'{\\frac'
												+'{\\str{&nbsp;6x&nbsp;}}'
												+'{\\str{<strong>6</strong>}}'
											+'}'
											+'{}'
										+'}'
										+'{\\str{ = }}'
										+'{\\css'
											+'{\\frac'
												+'{\\str{-12&nbsp;}}'
												+'{\\str{<strong>6</strong>}}'
											+'}'
											+'{}'
										+'}'
						),
					secondHelpResult: 'x = -9',*/
					helpStringAnswer: '<span class=fontsize110>m</span> &nbsp;<span class=fontsize110>=</span> &nbsp;10',
					answerInstructions: '',
					ansNumber: '10',
					solution: dataUtils.pre(
										'\\pan{2}{10}'
											+'{\\css'
												+'{\\grp'
													+'{\\str{<span class=bigger>$$ansVariable</span> = }}'
													+'{\\input{$$ansNumber}}'
												+'}'
												+'{marginLeft80px}'
											+'}'
						),
					firstTable: dataUtils.pre(
										'{\\html{&nbsp;}}'
										+'{\\str{Goal: Isolate the variable.}}'
										+'{\\html{&nbsp;}}'
										+'{\\str{To isolate the variable we need to eliminate the \"multiply by -<sup>4</sup>&#8260;<sub>5</sub>.\" We get rid of \"multiply by -<sup>4</sup>&#8260;<sub>5</sub>\" by \"dividing by -<sup>4</sup>&#8260;<sub>5</sub>.\"}}'
										+'{\\html{&nbsp;}}'
										+'{\\str{Our arithmetic knowledge informs us that to divide by a fraction is the same as \"multiplying by its reciprocal.\" Thus, \"dividing by -<sup>4</sup>&#8260;<sub>5</sub>\" is the same as \"multiplying by -<sup>5</sup>&#8260;<sub>4</sub>.\"}}'
										+'{\\html{&nbsp;}}'
										+'{\\str{<u>In general</u>, whenever we get rid of \"multiplying by a fraction\" we simply \"multiply by the fraction\'s reciprocal.\"}}'
										+'{\\html{&nbsp;}}'
										+'{\\str{We must always do the same to both sides of the equation.}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{Original equation:}}'
												+'{width220}'
											+'}'
											+'{$$probStatement}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{1st: &nbsp;multiply by -<sup>5</sup>&#8260;<sub>4</sub><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(the reciprocal of -<sup>4</sup>&#8260;<sub>5</sub>).}}'
												+'{width220}'
											+'}'
											+'{$$helpFirstPiece}'
										+'}'
										+'{\\str{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Result:}}'
												+'{width220}'
											+'}'
											+'{\\str{&nbsp;&nbsp;&nbsp;&nbsp;$$firstHelpResult}}'
										+'}'
										/*+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{2nd: &nbsp;Divide by 6.}}'
												+'{width170}'
											+'}'
											+'{$$helpSecondPiece}'
										+'}'
										+'{\\str{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Result:}}'
												+'{width170}'
											+'}'
											+'{\\str{&nbsp;&nbsp;&nbsp;&nbsp;$$secondHelpResult}}'
										+'}'*/
								),
					helpAnswer: dataUtils.pre(
									'\\grp'
										+'{\\str{&nbsp; $$helpStringAnswer}}'
						),
					template: 'flexy',
				}
				,
				{   // problem 17
					probQuestion: 'Solve for the value of the variable:',
					probStatement: dataUtils.pre(
										'\\grp'
											+'{\\css'
												+'{\\mixed'
													+'{\\str{}}'
													+'{\\frac'
														+'{\\str{x}}'
														+'{\\str{5}}'
													+'}'
												+'}'
												+'{fracNoMargin}'
											+'}'
											+'{\\str{- 3&nbsp; = -2}}'
									),
					ansVariable: 'x',
					helpFirstPiece: dataUtils.pre(
									'\\grp'
										+'{\\css'
											+'{\\mixed'
												+'{\\str{}}'
												+'{\\frac'
													+'{\\str{x}}'
													+'{\\str{5}}'
												+'}'
											+'}'
											+'{fracNoMargin}'
										+'}'
										+'{\\str{-3 + <strong>3</strong> = -2 + <strong>3</strong>}}'
						),
					firstHelpResult: dataUtils.pre(
									'\\grp'
										+'{\\css'
											+'{\\mixed'
												+'{\\str{}}'
												+'{\\frac'
													+'{\\str{x}}'
													+'{\\str{5}}'
												+'}'
											+'}'
											+'{fracNoMargin}'
										+'}'
										+'{\\str{ = 1}}'
						),
					helpSecondPiece: dataUtils.pre(
									'\\grp'
										+'{\\css'
											+'{\\frac'
												+'{\\str{x}}'
												+'{\\str{5}}'
											+'}'
											+'{fracNoMargin}'
										+'}'
										+'{\\str{ * <strong>(5)</strong> = 1 * <strong>(5)</strong>}}'
						),
					secondHelpResult: 'x = 5',
					helpStringAnswer: '<span class=fontsize110>x</span> &nbsp;<span class=fontsize110>=</span> &nbsp;5',
					answerInstructions: '',
					ansNumber: '5',
					solution: dataUtils.pre(
										'\\pan{2}{10}'
											+'{\\css'
												+'{\\grp'
													+'{\\str{<span class=bigger>$$ansVariable</span> = }}'
													+'{\\input{$$ansNumber}}'
												+'}'
												+'{marginLeft80px}'
											+'}'
						),
					firstTable: dataUtils.pre(
										'{\\html{&nbsp;}}'
										+'{\\str{Goal: Isolate the variable.}}'
										+'{\\html{&nbsp;}}'
										+'{\\str{To isolate the variable we need to eliminate both the \"subtract 3\" and the \"divide by 5\".}}'
										+'{\\html{&nbsp;}}'
										+'{\\str{<strong>We need to get rid of the coefficient of the variable</strong> (the <sup>1</sup>&#8260;<sub>5</sub> in this case) <strong><u>last</u></strong>.}}'
										+'{\\html{&nbsp;}}'
										+'{\\str{We must always do the same to both sides of the equation.}}'
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
												+'{\\str{1st: Add 3.}}'
												+'{width170}'
											+'}'
											+'{$$helpFirstPiece}'
										+'}'
										+'{\\str{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Result:}}'
												+'{width170}'
											+'}'
											+'{$$firstHelpResult}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{2nd: &nbsp;Multiply by 5.}}'
												+'{width170}'
											+'}'
											+'{$$helpSecondPiece}'
										+'}'
										+'{\\str{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Result:}}'
												+'{width170}'
											+'}'
											+'{\\str{&nbsp;&nbsp;$$secondHelpResult}}'
										+'}'
								),
					helpAnswer: dataUtils.pre(
									'\\grp'
										+'{\\str{&nbsp; $$helpStringAnswer}}'
						),
					template: 'flexy',
				}
				,
				{   // problem 18
					probQuestion: 'Solve for the value of the variable:',
					probStatement: dataUtils.pre(
										'\\grp'
											+'{\\css'
												+'{\\mixed'
													+'{\\str{}}'
													+'{\\frac'
														+'{\\str{a}}'
														+'{\\str{7}}'
													+'}'
												+'}'
												+'{fracNoMargin}'
											+'}'
											+'{\\str{- 6&nbsp; = 6}}'
									),
					ansVariable: 'a',
					helpFirstPiece: dataUtils.pre(
									'\\grp'
										+'{\\css'
											+'{\\mixed'
												+'{\\str{}}'
												+'{\\frac'
													+'{\\str{a}}'
													+'{\\str{7}}'
												+'}'
											+'}'
											+'{fracNoMargin}'
										+'}'
										+'{\\str{-6 + <strong>6</strong> = 6 + <strong>6</strong>}}'
						),
					firstHelpResult: dataUtils.pre(
									'\\grp'
										+'{\\css'
											+'{\\mixed'
												+'{\\str{}}'
												+'{\\frac'
													+'{\\str{a}}'
													+'{\\str{7}}'
												+'}'
											+'}'
											+'{fracNoMargin}'
										+'}'
										+'{\\str{ = 12}}'
						),
					helpSecondPiece: dataUtils.pre(
									'\\grp'
										+'{\\css'
											+'{\\frac'
												+'{\\str{a}}'
												+'{\\str{7}}'
											+'}'
											+'{fracNoMargin}'
										+'}'
										+'{\\str{ * <strong>(7)</strong> = 12 * <strong>(7)</strong>}}'
						),
					secondHelpResult: 'a = 84',
					helpStringAnswer: '<span class=fontsize110>a</span> &nbsp;<span class=fontsize110>=</span> &nbsp;84',
					answerInstructions: '',
					ansNumber: '84',
					solution: dataUtils.pre(
										'\\pan{2}{10}'
											+'{\\css'
												+'{\\grp'
													+'{\\str{<span class=bigger>$$ansVariable</span> = }}'
													+'{\\input{$$ansNumber}}'
												+'}'
												+'{marginLeft80px}'
											+'}'
						),
					firstTable: dataUtils.pre(
										'{\\html{&nbsp;}}'
										+'{\\str{Goal: Isolate the variable.}}'
										+'{\\html{&nbsp;}}'
										+'{\\str{To isolate the variable we need to eliminate both the \"subtract 6\" and the \"divide by 7\".}}'
										+'{\\html{&nbsp;}}'
										+'{\\str{<strong>We need to get rid of the coefficient of the variable</strong> (the <sup>1</sup>&#8260;<sub>7</sub> in this case) <strong><u>last</u></strong>.}}'
										+'{\\html{&nbsp;}}'
										+'{\\str{We must always do the same to both sides of the equation.}}'
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
												+'{\\str{1st: Add 6.}}'
												+'{width170}'
											+'}'
											+'{$$helpFirstPiece}'
										+'}'
										+'{\\str{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Result:}}'
												+'{width170}'
											+'}'
											+'{$$firstHelpResult}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{2nd: &nbsp;Multiply by 7.}}'
												+'{width170}'
											+'}'
											+'{$$helpSecondPiece}'
										+'}'
										+'{\\str{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Result:}}'
												+'{width170}'
											+'}'
											+'{\\str{&nbsp;&nbsp;$$secondHelpResult}}'
										+'}'
								),
					helpAnswer: dataUtils.pre(
									'\\grp'
										+'{\\str{&nbsp; $$helpStringAnswer}}'
						),
					template: 'flexy',
				}
				,
				{   // problem 19
					probQuestion: 'Solve for the value of the variable:',
					probStatement: dataUtils.pre(
										'\\grp'
											+'{\\css'
												+'{\\mixed'
													+'{\\str{}}'
													+'{\\frac'
														+'{\\str{5a}}'
														+'{\\str{6}}'
													+'}'
												+'}'
												+'{fracNoMargin}'
											+'}'
											+'{\\str{+ 4&nbsp; = 19}}'
									),
					ansVariable: 'a',
					helpFirstPiece: dataUtils.pre(
									'\\grp'
										+'{\\css'
											+'{\\mixed'
												+'{\\str{}}'
												+'{\\frac'
													+'{\\str{5a}}'
													+'{\\str{6}}'
												+'}'
											+'}'
											+'{fracNoMargin}'
										+'}'
										+'{\\str{+ 4 - <strong>4</strong> = 19 - <strong>4</strong>}}'
						),
					firstHelpResult: dataUtils.pre(
									'\\grp'
										+'{\\css'
											+'{\\mixed'
												+'{\\str{}}'
												+'{\\frac'
													+'{\\str{5a}}'
													+'{\\str{6}}'
												+'}'
											+'}'
											+'{fracNoMargin}'
										+'}'
										+'{\\str{ = 15}}'
						),
					helpSecondPiece: dataUtils.pre(
									'\\grp'
										+'{\\css'
											+'{\\frac'
												+'{\\str{5a}}'
												+'{\\str{6}}'
											+'}'
											+'{fracNoMargin}'
										+'}'
										+'{\\str{ * }}'
										+'{\\str{(}}'
										+'{\\css'
											+'{\\mixed'
												+'{\\str{}}'
												+'{\\frac'
													+'{\\str{<strong>6</strong>}}'
													+'{\\str{<strong>5</strong>}}'
												+'}'
											+'}'
											+'{fracNoMargin}'
										+'}'
										+'{\\str{)}}'
										+'{\\str{ = 15}}'
										+'{\\str{ * }}'
										+'{\\str{(}}'
										+'{\\css'
											+'{\\mixed'
												+'{\\str{}}'
												+'{\\frac'
													+'{\\str{<strong>6</strong>}}'
													+'{\\str{<strong>5</strong>}}'
												+'}'
											+'}'
											+'{fracNoMargin}'
										+'}'
										+'{\\str{)}}'
						),
					secondHelpResult: 'a = 18',
					helpStringAnswer: '<span class=fontsize110>a</span> &nbsp;<span class=fontsize110>=</span> &nbsp;18',
					answerInstructions: '',
					ansNumber: '18',
					solution: dataUtils.pre(
										'\\pan{2}{10}'
											+'{\\css'
												+'{\\grp'
													+'{\\str{<span class=bigger>$$ansVariable</span> = }}'
													+'{\\input{$$ansNumber}}'
												+'}'
												+'{marginLeft80px}'
											+'}'
						),
					firstTable: dataUtils.pre(
										'{\\html{&nbsp;}}'
										+'{\\str{Goal: Isolate the variable.}}'
										+'{\\html{&nbsp;}}'
										+'{\\str{To isolate the variable we need to eliminate both the \"add 4\" and the \"multiply by <sup>5</sup>&#8260;<sub>6</sub>\".}}'
										+'{\\html{&nbsp;}}'
										+'{\\str{<strong>We need to get rid of the coefficient of the variable</strong> (the <sup>5</sup>&#8260;<sub>6</sub> in this case) <strong><u>last</u></strong>.}}'
										+'{\\html{&nbsp;}}'
										+'{\\str{We must always do the same to both sides of the equation.}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{Original equation:}}'
												+'{width220}'
											+'}'
											+'{$$probStatement}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{1st: Add 6.}}'
												+'{width220}'
											+'}'
											+'{$$helpFirstPiece}'
										+'}'
										+'{\\str{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Result:}}'
												+'{width220}'
											+'}'
											+'{$$firstHelpResult}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{2nd: &nbsp;Multiply by <sup>6</sup>&#8260;<sub>5</sub><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(the reciprocal of <sup>5</sup>&#8260;<sub>6</sub>).}}'
												+'{width220}'
											+'}'
											+'{$$helpSecondPiece}'
										+'}'
										+'{\\str{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Result:}}'
												+'{width220}'
											+'}'
											+'{\\str{&nbsp;&nbsp;$$secondHelpResult}}'
										+'}'
								),
					helpAnswer: dataUtils.pre(
									'\\grp'
										+'{\\str{&nbsp; $$helpStringAnswer}}'
						),
					template: 'flexy',
				}
				,
				{   // problem 20
					probQuestion: 'Solve for the value of the variable:',
					probStatement: dataUtils.pre(
										'\\grp'
											+'{\\css'
												+'{\\mixed'
													+'{\\str{}}'
													+'{\\frac'
														+'{\\str{-2x&nbsp;}}'
														+'{\\str{9}}'
													+'}'
												+'}'
												+'{fracNoMargin}'
											+'}'
											+'{\\str{+ 7&nbsp; = 13}}'
									),
					ansVariable: 'x',
					helpFirstPiece: dataUtils.pre(
									'\\grp'
										+'{\\css'
											+'{\\mixed'
												+'{\\str{}}'
												+'{\\frac'
													+'{\\str{-2x&nbsp;}}'
													+'{\\str{9}}'
												+'}'
											+'}'
											+'{fracNoMargin}'
										+'}'
										+'{\\str{+ 7 - <strong>7</strong> = 13 - <strong>7</strong>}}'
						),
					firstHelpResult: dataUtils.pre(
									'\\grp'
										+'{\\css'
											+'{\\mixed'
												+'{\\str{}}'
												+'{\\frac'
													+'{\\str{-2x&nbsp;}}'
													+'{\\str{9}}'
												+'}'
											+'}'
											+'{fracNoMargin}'
										+'}'
										+'{\\str{ = 6}}'
						),
					helpSecondPiece: dataUtils.pre(
									'\\grp'
										+'{\\css'
											+'{\\frac'
												+'{\\str{-2x&nbsp;}}'
												+'{\\str{9}}'
											+'}'
											+'{fracNoMargin}'
										+'}'
										+'{\\str{ * }}'
										+'{\\str{(}}'
										+'{\\css'
											+'{\\mixed'
												+'{\\str{-}}'
												+'{\\frac'
													+'{\\str{<strong>9</strong>}}'
													+'{\\str{<strong>2</strong>}}'
												+'}'
											+'}'
											+'{fracNoMargin}'
										+'}'
										+'{\\str{)}}'
										+'{\\str{ = 6}}'
										+'{\\str{ * }}'
										+'{\\str{(}}'
										+'{\\css'
											+'{\\mixed'
												+'{\\str{-}}'
												+'{\\frac'
													+'{\\str{<strong>9</strong>}}'
													+'{\\str{<strong>2</strong>}}'
												+'}'
											+'}'
											+'{fracNoMargin}'
										+'}'
										+'{\\str{)}}'
						),
					secondHelpResult: 'x = -27',
					helpStringAnswer: '<span class=fontsize110>x</span> &nbsp;<span class=fontsize110>=</span> -27',
					answerInstructions: '',
					ansNumber: '-27',
					solution: dataUtils.pre(
										'\\pan{2}{10}'
											+'{\\css'
												+'{\\grp'
													+'{\\str{<span class=bigger>$$ansVariable</span> = }}'
													+'{\\input{$$ansNumber}}'
												+'}'
												+'{marginLeft80px}'
											+'}'
						),
					firstTable: dataUtils.pre(
										'{\\html{&nbsp;}}'
										+'{\\str{Goal: Isolate the variable.}}'
										+'{\\html{&nbsp;}}'
										+'{\\str{To isolate the variable we need to eliminate both the \"add 7\" and the \"multiply by -<sup>2</sup>&#8260;<sub>9</sub>\".}}'
										+'{\\html{&nbsp;}}'
										+'{\\str{<strong>We need to get rid of the coefficient of the variable</strong> (the -<sup>2</sup>&#8260;<sub>9</sub> in this case) <strong><u>last</u></strong>.}}'
										+'{\\html{&nbsp;}}'
										+'{\\str{We must always do the same to both sides of the equation.}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{Original equation:}}'
												+'{width210}'
											+'}'
											+'{$$probStatement}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{1st: Subtract 7.}}'
												+'{width210}'
											+'}'
											+'{$$helpFirstPiece}'
										+'}'
										+'{\\str{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Result:}}'
												+'{width210}'
											+'}'
											+'{$$firstHelpResult}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{2nd: &nbsp;Multiply by -<sup>9</sup>&#8260;<sub>2</sub><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(the reciprocal of -<sup>2</sup>&#8260;<sub>9</sub>).}}'
												+'{width210}'
											+'}'
											+'{$$helpSecondPiece}'
										+'}'
										+'{\\str{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Result:}}'
												+'{width210}'
											+'}'
											+'{\\str{&nbsp;&nbsp;$$secondHelpResult}}'
										+'}'
								),
					helpAnswer: dataUtils.pre(
									'\\grp'
										+'{\\str{&nbsp; $$helpStringAnswer}}'
						),
					template: 'flexy',
				}
				,
				{   // problem 21
					probQuestion: 'Solve for the value of the variable:',
					probStatement: dataUtils.pre(
										'\\grp'
											+'{\\str{7x&nbsp; -}}'
											+'{\\css'
												+'{\\mixed'
													+'{\\str{}}'
													+'{\\frac'
														+'{\\str{3}}'
														+'{\\str{5}}'
													+'}'
												+'}'
												+'{fracNoMargin}'
											+'}'
											+'{\\str{ = }}'
											+'{\\css'
												+'{\\mixed'
													+'{\\str{}}'
													+'{\\frac'
														+'{\\str{1}}'
														+'{\\str{3}}'
													+'}'
												+'}'
												+'{fracNoMargin}'
											+'}'
									),
					ansVariable: 'x',
					helpFirstPiece: dataUtils.pre(
									'\\grp'
										+'{\\str{7x&nbsp; -}}'
										+'{\\css'
											+'{\\mixed'
												+'{\\str{}}'
												+'{\\frac'
													+'{\\str{3}}'
													+'{\\str{5}}'
												+'}'
											+'}'
											+'{fracNoMargin}'
										+'}'
										+'{\\str{ + }}'
										+'{\\css'
											+'{\\mixed'
												+'{\\str{}}'
												+'{\\frac'
													+'{\\str{<strong>3</strong>}}'
													+'{\\str{<strong>5</strong>}}'
												+'}'
											+'}'
											+'{fracNoMargin}'
										+'}'
										+'{\\str{ = }}'
										+'{\\css'
											+'{\\mixed'
												+'{\\str{}}'
												+'{\\frac'
													+'{\\str{1}}'
													+'{\\str{3}}'
												+'}'
											+'}'
											+'{fracNoMargin}'
										+'}'
										+'{\\str{ + }}'
										+'{\\css'
											+'{\\mixed'
												+'{\\str{}}'
												+'{\\frac'
													+'{\\str{<strong>3</strong>}}'
													+'{\\str{<strong>5</strong>}}'
												+'}'
											+'}'
											+'{fracNoMargin}'
										+'}'
						),
					firstHelpResult: dataUtils.pre(
									'\\grp'
										+'{\\str{7x &nbsp;=}}'
										+'{\\css'
											+'{\\mixed'
												+'{\\str{}}'
												+'{\\frac'
													+'{\\str{14}}'
													+'{\\str{15}}'
												+'}'
											+'}'
											+'{fracNoMargin}'
										+'}'
						),
					helpSecondPiece: dataUtils.pre(
									'\\grp'
										+'{\\css'
											+'{\\frac'
												+'{\\str{7x}}'
												+'{\\str{7}}'
											+'}'
											+'{fracNoMargin}'
										+'}'
										+'{\\str{ = }}'
										+'{\\css'
											+'{\\mixed'
												+'{\\str{}}'
												+'{\\frac'
													+'{\\frac'
														+'{\\str{14}}'
														+'{\\str{15}}'
													+'}'
													+'{\\str{&nbsp;&nbsp;7&nbsp;&nbsp;}}'
												+'}'
											+'}'
											+'{fracNoMargin}'
										+'}'
						),
					secondHelpResult: dataUtils.pre(
									'\\grp'
										+'{\\css'
											+'{\\frac'
												+'{\\str{2}}'
												+'{\\str{15}}'
											+'}'
											+'{fracNoMargin}'
										+'}'
										
						),
					answerInstructions: '',
					solution: dataUtils.pre(
										'\\pan{2}{10}'
											+'{\\css'
												+'{\\grp'
													+'{\\str{<span class=fontsize110>x</span> = }}'
													+'{\\frac'
														+'{\\input{2}}'
														+'{\\input{15}}'
													+'}'
												+'}'
												+'{marginLeft80px}'
											+'}'
						),
					firstTable: dataUtils.pre(
										'{\\html{&nbsp;}}'
										+'{\\str{Goal: Isolate the variable.}}'
										+'{\\html{&nbsp;}}'
										+'{\\str{To isolate the variable we need to eliminate both the \"subtract <sup>3</sup>&#8260;<sub>5</sub>\" and the \"multiply by 7\".}}'
										+'{\\html{&nbsp;}}'
										+'{\\str{<strong>We need to get rid of the coefficient of the variable</strong> (the 7 in this case) <strong><u>last</u></strong>.}}'
										+'{\\html{&nbsp;}}'
										+'{\\str{We must always do the same to both sides of the equation.}}'
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
												+'{\\str{1st:&nbsp; Add <sup>3</sup>&#8260;<sub>5</sub>.}}'
												+'{width170}'
											+'}'
											+'{$$helpFirstPiece}'
										+'}'
										+'{\\str{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Result:}}'
												+'{width170}'
											+'}'
											+'{$$firstHelpResult}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{2nd: &nbsp;Divide by 7.}}'
												+'{width170}'
											+'}'
											+'{$$helpSecondPiece}'
										+'}'
										+'{\\str{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Result:}}'
												+'{width170}'
											+'}'
											+'{\\str{x =}}'
											+'{$$secondHelpResult}'
										+'}'
								),
					helpAnswer: dataUtils.pre(
									'\\grp'
										+'{\\str{x =}}'
										+'{\\css'
											+'{\\frac'
												+'{\\str{2}}'
												+'{\\str{15}}'
											+'}'
											+'{fracNoMargin}'
										+'}'
						),
					template: 'flexy',
				}
				,
				{   // problem 22
					probQuestion: 'Solve for the value of the variable:',
					probStatement: dataUtils.pre(
										'\\grp'
											+'{\\str{-2y&nbsp; -}}'
											+'{\\css'
												+'{\\mixed'
													+'{\\str{}}'
													+'{\\frac'
														+'{\\str{7}}'
														+'{\\str{10}}'
													+'}'
												+'}'
												+'{fracNoMargin}'
											+'}'
											+'{\\str{ = }}'
											+'{\\css'
												+'{\\mixed'
													+'{\\str{}}'
													+'{\\frac'
														+'{\\str{2}}'
														+'{\\str{5}}'
													+'}'
												+'}'
												+'{fracNoMargin}'
											+'}'
									),
					ansVariable: 'x',
					helpFirstPiece: dataUtils.pre(
									'\\grp'
										+'{\\str{-2y&nbsp; -}}'
											+'{\\css'
												+'{\\mixed'
													+'{\\str{}}'
													+'{\\frac'
														+'{\\str{7}}'
														+'{\\str{10}}'
													+'}'
												+'}'
												+'{fracNoMargin}'
											+'}'
										+'{\\str{ + }}'
										+'{\\css'
											+'{\\mixed'
												+'{\\str{}}'
												+'{\\frac'
													+'{\\str{<strong>7</strong>}}'
													+'{\\str{<strong>10</strong>}}'
												+'}'
											+'}'
											+'{fracNoMargin}'
										+'}'
										+'{\\str{ = }}'
										+'{\\css'
											+'{\\mixed'
												+'{\\str{}}'
												+'{\\frac'
													+'{\\str{2}}'
													+'{\\str{5}}'
												+'}'
											+'}'
											+'{fracNoMargin}'
										+'}'
										+'{\\str{ + }}'
										+'{\\css'
											+'{\\mixed'
												+'{\\str{}}'
												+'{\\frac'
													+'{\\str{<strong>7</strong>}}'
													+'{\\str{<strong>10</strong>}}'
												+'}'
											+'}'
											+'{fracNoMargin}'
										+'}'
						),
					firstHelpResult: dataUtils.pre(
									'\\grp'
										+'{\\str{-2y &nbsp;=}}'
										+'{\\css'
											+'{\\mixed'
												+'{\\str{}}'
												+'{\\frac'
													+'{\\str{11}}'
													+'{\\str{10}}'
												+'}'
											+'}'
											+'{fracNoMargin}'
										+'}'
						),
					helpSecondPiece: dataUtils.pre(
									'\\grp'
										+'{\\css'
											+'{\\frac'
												+'{\\str{-2y}}'
												+'{\\str{-2}}'
											+'}'
											+'{fracNoMargin}'
										+'}'
										+'{\\str{ = }}'
										+'{\\css'
											+'{\\mixed'
												+'{\\str{}}'
												+'{\\frac'
													+'{\\frac'
														+'{\\str{11}}'
														+'{\\str{10}}'
													+'}'
													+'{\\str{&nbsp;-2&nbsp;&nbsp;}}'
												+'}'
											+'}'
											+'{fracNoMargin}'
										+'}'
						),
					secondHelpResult: dataUtils.pre(
									'\\grp'
										+'{\\css'
											+'{\\mixed'
												+'{\\str{-}}'
												+'{\\frac'
													+'{\\str{11}}'
													+'{\\str{20}}'
												+'}'
											+'}'
											+'{fracNoMargin}'
										+'}'
						),
					answerInstructions: '',
					solution: dataUtils.pre(
										'\\pan{3}{9}'
											+'{\\css'
													+'{\\grp'
														+'{\\str{<span class=fontsize110>y</span> = }}'
														+'{\\css'
															+'{\\frac'
																+'{\\input{-11}}'
																+'{\\input{20}}'
															+'}'
															+'{fracNoMargin}'
														+'}'
													+'}'
												+'{marginLeft80px}'
											+'}'
						),
					firstTable: dataUtils.pre(
										'{\\html{&nbsp;}}'
										+'{\\str{Goal: Isolate the variable.}}'
										+'{\\html{&nbsp;}}'
										+'{\\str{To isolate the variable we need to eliminate both the \"subtract <sup>7</sup>&#8260;<sub>10</sub>\" and the \"multiply by -2\".}}'
										+'{\\html{&nbsp;}}'
										+'{\\str{<strong>We need to get rid of the coefficient of the variable</strong> (the -2 in this case) <strong><u>last</u></strong>.}}'
										+'{\\html{&nbsp;}}'
										+'{\\str{We must always do the same to both sides of the equation.}}'
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
												+'{\\str{1st:&nbsp; Add <sup>7</sup>&#8260;<sub>10</sub>.}}'
												+'{width170}'
											+'}'
											+'{$$helpFirstPiece}'
										+'}'
										+'{\\str{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Result:}}'
												+'{width170}'
											+'}'
											+'{$$firstHelpResult}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{2nd: &nbsp;Divide by -2.}}'
												+'{width170}'
											+'}'
											+'{$$helpSecondPiece}'
										+'}'
										+'{\\str{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Result:}}'
												+'{width170}'
											+'}'
											+'{\\str{y =}}'
											+'{$$secondHelpResult}'
										+'}'
								),
					helpAnswer: dataUtils.pre(
									'\\grp'
										+'{\\str{y =}}'
										+'{\\css'
											+'{\\mixed'
												+'{\\str{-}}'
												+'{\\frac'
													+'{\\str{11}}'
													+'{\\str{20}}'
												+'}'
											+'}'
											+'{fracNoMargin}'
										+'}'
						),
					template: 'flexy',
				}
				,
				{   // problem 23
					probQuestion: 'Solve for the value of the variable:',
					probStatement: dataUtils.pre(
										'\\grp'
											+'{\\css'
												+'{\\mixed'
													+'{\\str{-}}'
													+'{\\frac'
														+'{\\str{4m}}'
														+'{\\str{3}}'
													+'}'
												+'}'
												+'{fracNoMargin}'
											+'}'
											+'{\\str{-}}'
											+'{\\css'
												+'{\\mixed'
													+'{\\str{}}'
													+'{\\frac'
														+'{\\str{1}}'
														+'{\\str{2}}'
													+'}'
												+'}'
												+'{fracNoMargin}'
											+'}'
											+'{\\str{ = }}'
											+'{\\css'
												+'{\\mixed'
													+'{\\str{}}'
													+'{\\frac'
														+'{\\str{7}}'
														+'{\\str{8}}'
													+'}'
												+'}'
												+'{fracNoMargin}'
											+'}'
									),
					ansVariable: 'm',
					helpFirstPiece: dataUtils.pre(
									'\\grp'
										+'{\\css'
											+'{\\mixed'
												+'{\\str{-}}'
												+'{\\frac'
													+'{\\str{4m}}'
													+'{\\str{3}}'
												+'}'
											+'}'
											+'{fracNoMargin}'
										+'}'
										+'{\\str{-}}'
										+'{\\css'
											+'{\\mixed'
												+'{\\str{}}'
												+'{\\frac'
													+'{\\str{1}}'
													+'{\\str{2}}'
												+'}'
											+'}'
											+'{fracNoMargin}'
										+'}'
										+'{\\str{+}}'
										+'{\\css'
											+'{\\mixed'
												+'{\\str{}}'
												+'{\\frac'
													+'{\\str{<strong>1</strong>}}'
													+'{\\str{<strong>2</strong>}}'
												+'}'
											+'}'
											+'{fracNoMargin}'
										+'}'
										+'{\\str{ = }}'
										+'{\\css'
											+'{\\mixed'
												+'{\\str{}}'
												+'{\\frac'
													+'{\\str{7}}'
													+'{\\str{8}}'
												+'}'
											+'}'
											+'{fracNoMargin}'
										+'}'
										+'{\\str{+}}'
										+'{\\css'
											+'{\\mixed'
												+'{\\str{}}'
												+'{\\frac'
													+'{\\str{<strong>1</strong>}}'
													+'{\\str{<strong>2</strong>}}'
												+'}'
											+'}'
											+'{fracNoMargin}'
										+'}'
						),
					firstHelpResult: dataUtils.pre(
									'\\grp'
										+'{\\css'
											+'{\\mixed'
												+'{\\str{-}}'
												+'{\\frac'
													+'{\\str{4m}}'
													+'{\\str{3}}'
												+'}'
											+'}'
											+'{fracNoMargin}'
										+'}'
										+'{\\str{ = }}'
										+'{\\css'
											+'{\\mixed'
												+'{\\str{}}'
												+'{\\frac'
													+'{\\str{11}}'
													+'{\\str{8}}'
												+'}'
											+'}'
											+'{fracNoMargin}'
										+'}'
						),
					helpSecondPiece: dataUtils.pre(
									'\\grp'
										+'{\\css'
											+'{\\mixed'
												+'{\\str{-}}'
												+'{\\frac'
													+'{\\str{4m}}'
													+'{\\str{3}}'
												+'}'
											+'}'
											+'{fracNoMargin}'
										+'}'
										+'{\\str{(}}'
										+'{\\css'
											+'{\\mixed'
												+'{\\str{-}}'
												+'{\\frac'
													+'{\\str{<strong>3</strong>}}'
													+'{\\str{<strong>4</strong>}}'
												+'}'
											+'}'
											+'{fracNoMargin}'
										+'}'
										+'{\\str{)}}'
										+'{\\str{ = }}'
										+'{\\css'
											+'{\\mixed'
												+'{\\str{}}'
												+'{\\frac'
													+'{\\str{11}}'
													+'{\\str{8}}'
												+'}'
											+'}'
											+'{fracNoMargin}'
										+'}'
										+'{\\str{(}}'
										+'{\\css'
											+'{\\mixed'
												+'{\\str{-}}'
												+'{\\frac'
													+'{\\str{<strong>3</strong>}}'
													+'{\\str{<strong>4</strong>}}'
												+'}'
											+'}'
											+'{fracNoMargin}'
										+'}'
										+'{\\str{)}}'
						),
					secondHelpResult: dataUtils.pre(
									'\\grp'
										+'{\\css'
											+'{\\mixed'
												+'{\\str{-}}'
												+'{\\frac'
													+'{\\str{33}}'
													+'{\\str{32}}'
												+'}'
											+'}'
											+'{fracNoMargin}'
										+'}'
						),
					answerInstructions: '',
					solution: dataUtils.pre(
										'\\pan{2}{10}'
											+'{\\css'
													+'{\\grp'
														+'{\\str{<span class=fontsize110>m</span> = }}'
														+'{\\css'
															+'{\\frac'
																+'{\\input{-33}}'
																+'{\\input{32}}'
															+'}'
															+'{fracNoMargin}'
														+'}'
													+'}'
												+'{marginLeft80px}'
											+'}'
						),
					firstTable: dataUtils.pre(
										'{\\html{&nbsp;}}'
										+'{\\str{Goal: Isolate the variable.}}'
										+'{\\html{&nbsp;}}'
										+'{\\str{To isolate the variable we need to eliminate both the \"subtract <sup>1</sup>&#8260;<sub>2</sub>\" and the \"multiply by -<sup>4</sup>&#8260;<sub>3</sub>\".}}'
										+'{\\html{&nbsp;}}'
										+'{\\str{<strong>We need to get rid of the coefficient of the variable</strong> (the -<sup>4</sup>&#8260;<sub>3</sub> in this case) <strong><u>last</u></strong>.}}'
										+'{\\html{&nbsp;}}'
										+'{\\str{We must always do the same to both sides of the equation.}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{Original equation:}}'
												+'{width210}'
											+'}'
											+'{$$probStatement}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{1st:&nbsp; Add <sup>1</sup>&#8260;<sub>2</sub>.}}'
												+'{width210}'
											+'}'
											+'{$$helpFirstPiece}'
										+'}'
										+'{\\str{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Result:}}'
												+'{width210}'
											+'}'
											+'{$$firstHelpResult}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{2nd: &nbsp;Multiply by -<sup>3</sup>&#8260;<sub>4</sub><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(the reciprocal of -<sup>4</sup>&#8260;<sub>3</sub>).}}'
												+'{width210}'
											+'}'
											+'{$$helpSecondPiece}'
										+'}'
										+'{\\str{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Result:}}'
												+'{width210}'
											+'}'
											+'{\\str{&nbsp;&nbsp;&nbsp;&nbsp;m =}}'
											+'{$$secondHelpResult}'
										+'}'
								),
					helpAnswer: dataUtils.pre(
									'\\grp'
										+'{\\str{m =}}'
										+'{\\css'
											+'{\\mixed'
												+'{\\str{-}}'
												+'{\\frac'
													+'{\\str{33}}'
													+'{\\str{32}}'
												+'}'
											+'}'
											+'{fracNoMargin}'
										+'}'
						),
					template: 'flexy',
				}
				,
				{   // problem 24
					probQuestion: 'Solve for the value of the variable:',
					probStatement: dataUtils.pre(
										'\\grp'
											+'{\\css'
												+'{\\mixed'
													+'{\\str{}}'
													+'{\\frac'
														+'{\\str{2x}}'
														+'{\\str{3}}'
													+'}'
												+'}'
												+'{fracNoMargin}'
											+'}'
											+'{\\str{+}}'
											+'{\\css'
												+'{\\mixed'
													+'{\\str{}}'
													+'{\\frac'
														+'{\\str{3}}'
														+'{\\str{7}}'
													+'}'
												+'}'
												+'{fracNoMargin}'
											+'}'
											+'{\\str{ = }}'
											+'{\\css'
												+'{\\mixed'
													+'{\\str{}}'
													+'{\\frac'
														+'{\\str{3}}'
														+'{\\str{14}}'
													+'}'
												+'}'
												+'{fracNoMargin}'
											+'}'
									),
					ansVariable: 'x',
					helpFirstPiece: dataUtils.pre(
									'\\grp'
										+'{\\css'
											+'{\\mixed'
												+'{\\str{}}'
												+'{\\frac'
													+'{\\str{2x}}'
													+'{\\str{3}}'
												+'}'
											+'}'
											+'{fracNoMargin}'
										+'}'
										+'{\\str{+}}'
										+'{\\css'
											+'{\\mixed'
												+'{\\str{}}'
												+'{\\frac'
													+'{\\str{3}}'
													+'{\\str{7}}'
												+'}'
											+'}'
											+'{fracNoMargin}'
										+'}'
										+'{\\str{-}}'
										+'{\\css'
											+'{\\mixed'
												+'{\\str{}}'
												+'{\\frac'
													+'{\\str{<strong>3</strong>}}'
													+'{\\str{<strong>7</strong>}}'
												+'}'
											+'}'
											+'{fracNoMargin}'
										+'}'
										+'{\\str{ = }}'
										+'{\\css'
											+'{\\mixed'
												+'{\\str{}}'
												+'{\\frac'
													+'{\\str{3}}'
													+'{\\str{14}}'
												+'}'
											+'}'
											+'{fracNoMargin}'
										+'}'
										+'{\\str{-}}'
										+'{\\css'
											+'{\\mixed'
												+'{\\str{}}'
												+'{\\frac'
													+'{\\str{<strong>3</strong>}}'
													+'{\\str{<strong>7</strong>}}'
												+'}'
											+'}'
											+'{fracNoMargin}'
										+'}'
						),
					firstHelpResult: dataUtils.pre(
									'\\grp'
										+'{\\css'
											+'{\\mixed'
												+'{\\str{}}'
												+'{\\frac'
													+'{\\str{2x}}'
													+'{\\str{3}}'
												+'}'
											+'}'
											+'{fracNoMargin}'
										+'}'
										+'{\\str{ = }}'
										+'{\\css'
											+'{\\mixed'
												+'{\\str{-}}'
												+'{\\frac'
													+'{\\str{3}}'
													+'{\\str{14}}'
												+'}'
											+'}'
											+'{fracNoMargin}'
										+'}'
						),
					helpSecondPiece: dataUtils.pre(
									'\\grp'
										+'{\\css'
											+'{\\mixed'
												+'{\\str{}}'
												+'{\\frac'
													+'{\\str{2x}}'
													+'{\\str{3}}'
												+'}'
											+'}'
											+'{fracNoMargin}'
										+'}'
										+'{\\str{(}}'
										+'{\\css'
											+'{\\mixed'
												+'{\\str{}}'
												+'{\\frac'
													+'{\\str{<strong>3</strong>}}'
													+'{\\str{<strong>2</strong>}}'
												+'}'
											+'}'
											+'{fracNoMargin}'
										+'}'
										+'{\\str{)}}'
										+'{\\str{ = }}'
										+'{\\css'
											+'{\\mixed'
												+'{\\str{-}}'
												+'{\\frac'
													+'{\\str{3}}'
													+'{\\str{14}}'
												+'}'
											+'}'
											+'{fracNoMargin}'
										+'}'
										+'{\\str{(}}'
										+'{\\css'
											+'{\\mixed'
												+'{\\str{}}'
												+'{\\frac'
													+'{\\str{<strong>3</strong>}}'
													+'{\\str{<strong>2</strong>}}'
												+'}'
											+'}'
											+'{fracNoMargin}'
										+'}'
										+'{\\str{)}}'
						),
					secondHelpResult: dataUtils.pre(
									'\\grp'
										+'{\\css'
											+'{\\mixed'
												+'{\\str{-}}'
												+'{\\frac'
													+'{\\str{9}}'
													+'{\\str{28}}'
												+'}'
											+'}'
											+'{fracNoMargin}'
										+'}'
						),
					answerInstructions: '',
					solution: dataUtils.pre(
										'\\pan{2}{10}'
											+'{\\css'
													+'{\\grp'
														+'{\\str{<span class=fontsize110>x</span> = }}'
														+'{\\css'
															+'{\\frac'
																+'{\\input{-9}}'
																+'{\\input{28}}'
															+'}'
															+'{fracNoMargin}'
														+'}'
													+'}'
												+'{marginLeft80px}'
											+'}'
						),
					firstTable: dataUtils.pre(
										'{\\html{&nbsp;}}'
										+'{\\str{Goal: Isolate the variable.}}'
										+'{\\html{&nbsp;}}'
										+'{\\str{To isolate the variable we need to eliminate both the \"add <sup>3</sup>&#8260;<sub>7</sub>\" and the \"multiply by <sup>2</sup>&#8260;<sub>3</sub>\".}}'
										+'{\\html{&nbsp;}}'
										+'{\\str{<strong>We need to get rid of the coefficient of the variable</strong> (the <sup>2</sup>&#8260;<sub>3</sub> in this case) <strong><u>last</u></strong>.}}'
										+'{\\html{&nbsp;}}'
										+'{\\str{We must always do the same to both sides of the equation.}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{Original equation:}}'
												+'{width210}'
											+'}'
											+'{$$probStatement}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{1st:&nbsp; Subtract <sup>3</sup>&#8260;<sub>7</sub>.}}'
												+'{width210}'
											+'}'
											+'{$$helpFirstPiece}'
										+'}'
										+'{\\str{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Result:}}'
												+'{width210}'
											+'}'
											+'{$$firstHelpResult}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{2nd: &nbsp;Multiply by <sup>3</sup>&#8260;<sub>2</sub><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(the reciprocal of <sup>2</sup>&#8260;<sub>3</sub>).}}'
												+'{width210}'
											+'}'
											+'{$$helpSecondPiece}'
										+'}'
										+'{\\str{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Result:}}'
												+'{width210}'
											+'}'
											+'{\\str{&nbsp;&nbsp;&nbsp;&nbsp;x =}}'
											+'{$$secondHelpResult}'
										+'}'
								),
					helpAnswer: dataUtils.pre(
									'\\grp'
										+'{\\str{x =}}'
										+'{\\css'
											+'{\\mixed'
												+'{\\str{-}}'
												+'{\\frac'
													+'{\\str{9}}'
													+'{\\str{28}}'
												+'}'
											+'}'
											+'{fracNoMargin}'
										+'}'
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
