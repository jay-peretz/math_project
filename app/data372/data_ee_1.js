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
				,
				{	// problem 2
					probQuestion: 'Solve for the value of the variable:',
					probStatement: dataUtils.pre(
									'\\grp'
										+'{\\str{The difference of a number and 11 is -16.}}'
						),
					ansVariable: 'x',
					helpFirstPiece: 'difference of a number and 11 is -16',
					helpSecondPiece: 'x - 11 = -16',
					helpThirdPiece: 'Add 11',
					helpFourthPiece: 'x - 11 + <strong>11</strong> = -16 + <strong>11</strong>',
					helpFifthPiece: 'x = -5',
					ansNumber: '-5',
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
				,
				{	// problem 3
					probQuestion: 'Solve for the value of the variable:',
					probStatement: dataUtils.pre(
									'\\grp'
										+'{\\str{The product of four and a number is -28.}}'
						),
					ansVariable: 'x',
					helpFirstPiece: 'product of four and a number is -28',
					helpSecondPiece: '4x = -28',
					helpThirdPiece: 'Divide by 4',
					helpFourthPiece: dataUtils.pre(
									'\\grp'
										+'{\\css'
											+'{\\frac'
												+'{\\str{4x}}'
												+'{\\str{<strong>4</strong>}}'
											+'}'
											+'{fracNoMargin}'
										+'}'
										+'{\\str{=}}'
										+'{\\css'
											+'{\\frac'
												+'{\\str{-28&nbsp;}}'
												+'{\\str{<strong>4</strong>}}'
											+'}'
											+'{fracNoMargin}'
										+'}'
						),
					helpFifthPiece: 'x = -7',
					ansNumber: '-7',
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
											+'{$$helpFourthPiece}'
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
				,
				{	// problem 4
					probQuestion: 'Solve for the value of the variable:',
					probStatement: dataUtils.pre(
									'\\grp'
										+'{\\str{The quotient of a number and -3 is -15.}}'
						),
					ansVariable: 'x',
					helpFirstPiece: 'quotient of a number and -3 is -15',
					helpSecondPiece: dataUtils.pre(
									'\\grp'
										+'{\\css'
											+'{\\frac'
												+'{\\str{x}}'
												+'{\\str{-3&nbsp;}}'
											+'}'
											+'{fracNoMargin}'
										+'}'
										+'{\\str{=}}'
										+'{\\str{-15}}'
						),
					helpThirdPiece: 'Multiply by -3',
					helpFourthPiece: dataUtils.pre(
									'\\grp'
										+'{\\css'
											+'{\\frac'
												+'{\\str{x}}'
												+'{\\str{-3&nbsp;}}'
											+'}'
											+'{fracNoMargin}'
										+'}'
										+'{\\str{(<strong>-3</strong> )}}'
										+'{\\str{=}}'
										+'{\\str{-15 (<strong>-3</strong> )}}'
						),
					helpFifthPiece: 'x = 45',
					ansNumber: '45',
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
										+'{$$helpSecondPiece}'
										+'{\\html{&nbsp;}}'
										+'{\\str{Solve the equation by isolating the variable.}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{Original equation:}}'
												+'{width160}'
											+'}'
											+'{$$helpSecondPiece}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{1<sup>st</sup>: &nbsp;$$helpThirdPiece.}}'
												+'{width160}'
											+'}'
											+'{$$helpFourthPiece}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{}}'
												+'{width160}'
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
				,
				{	// problem 5
					probQuestion: 'Solve for the value of the variable:',
					probStatement: dataUtils.pre(
									'\\grp'
										+'{\\str{7 times a number increased by 139 is 11 less than that number.}}'
						),
					ansVariable: 'x',
					helpFirstPiece: '7 times a number increased by 139 is 11 less than that number',
					helpSecondPiece: '7x + 139 = x - 11',
					helpThirdPiece: 'Subtract x',
					helpFourthPiece: '7x - <strong>x</strong> + 139 = x - <strong>x</strong> - 11',
					helpFifthPiece: '6x + 139 = -11',
					helpSixthPiece: 'Subtract 139',
					helpSeventhPiece: '6x + 139 - <strong>139</strong> = -11 - <strong>139</strong>',
					helpEighthPiece: '6x = -150',
					helpNinethPiece: 'Divide by 6',
					helpTenthPiece: dataUtils.pre(
									'\\grp'
										+'{\\css'
											+'{\\frac'
												+'{\\str{6x}}'
												+'{\\str{<strong>6</strong>}}'
											+'}'
											+'{fracNoMargin}'
										+'}'
										+'{\\str{=}}'
										+'{\\css'
											+'{\\frac'
												+'{\\str{-150&nbsp;}}'
												+'{\\str{<strong>6</strong>}}'
											+'}'
											+'{fracNoMargin}'
										+'}'
						),
					helpEleventhPiece: 'x = -25',
					ansNumber: '-25',
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
										+'{\\str{Because we have <u>variable terms on both sides of the equation</u>, now we must eliminate one entire variable term. Let\'s eliminate \"x\".}}'
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
										+'{\\html{&nbsp;}}'
										+'{\\str{We can now <u>isolate the variable</u> because it is on one side of the equation <strong>only</strong>.}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{2<sup>nd</sup>: &nbsp;$$helpSixthPiece.}}'
												+'{width140}'
											+'}'
											+'{\\str{$$helpSeventhPiece}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{}}'
												+'{width140}'
											+'}'
											+'{\\str{$$helpEighthPiece}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{3<sup>rd</sup>: &nbsp;$$helpNinethPiece.}}'
												+'{width140}'
											+'}'
											+'{$$helpTenthPiece}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{}}'
												+'{width140}'
											+'}'
											+'{\\str{$$helpEleventhPiece}}'
										+'}'
								),
					helpAnswer: dataUtils.pre(
									'\\grp'
										+'{\\str{<span class=fontsize110>$$ansVariable</span> &nbsp;<span class=fontsize110>=</span> $$ansNumber}}'
						),
					template: 'flexy',
				}
				,
				{	// problem 6
					probQuestion: 'Solve for the value of the variable:',
					probStatement: dataUtils.pre(
									'\\grp'
										+'{\\str{A number multiplied by 3, then decreased by 4 is that number increased by 8.}}'
						),
					ansVariable: 'x',
					helpFirstPiece: 'a number multiplied by 3, then decreased by 4 is that number increased by 8',
					helpSecondPiece: '3x - 4 = x + 8',
					helpThirdPiece: 'Subtract x',
					helpFourthPiece: '3x - <strong>x</strong> - 4 = x - <strong>x</strong> + 8',
					helpFifthPiece: '2x - 4 = 8',
					helpSixthPiece: 'Add 4',
					helpSeventhPiece: '2x - 4 + <strong>4</strong> = 8 + <strong>4</strong>',
					helpEighthPiece: '2x = 12',
					helpNinethPiece: 'Divide by 2',
					helpTenthPiece: dataUtils.pre(
									'\\grp'
										+'{\\css'
											+'{\\frac'
												+'{\\str{2x}}'
												+'{\\str{<strong>2</strong>}}'
											+'}'
											+'{fracNoMargin}'
										+'}'
										+'{\\str{=}}'
										+'{\\css'
											+'{\\frac'
												+'{\\str{12}}'
												+'{\\str{<strong>2</strong>}}'
											+'}'
											+'{fracNoMargin}'
										+'}'
						),
					helpEleventhPiece: 'x = 6',
					ansNumber: '6',
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
										+'{\\str{Because we have <u>variable terms on both sides of the equation</u>, now we must eliminate one entire variable term. Let\'s eliminate \"x\".}}'
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
										+'{\\html{&nbsp;}}'
										+'{\\str{We can now <u>isolate the variable</u> because it is on one side of the equation <strong>only</strong>.}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{2<sup>nd</sup>: &nbsp;$$helpSixthPiece.}}'
												+'{width140}'
											+'}'
											+'{\\str{$$helpSeventhPiece}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{}}'
												+'{width140}'
											+'}'
											+'{\\str{$$helpEighthPiece}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{3<sup>rd</sup>: &nbsp;$$helpNinethPiece.}}'
												+'{width140}'
											+'}'
											+'{$$helpTenthPiece}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{}}'
												+'{width140}'
											+'}'
											+'{\\str{$$helpEleventhPiece}}'
										+'}'
								),
					helpAnswer: dataUtils.pre(
									'\\grp'
										+'{\\str{<span class=fontsize110>$$ansVariable</span> &nbsp;<span class=fontsize110>=</span> $$ansNumber}}'
						),
					template: 'flexy',
				}
				,
				{	// problem 7
					probQuestion: 'Solve for the value of the variable:',
					probStatement: dataUtils.pre(
									'\\grp'
										+'{\\str{When the sum of a number and 3 is multiplied by 6, the result is 12.}}'
						),
					ansVariable: 'x',
					helpFirstPiece: '... the sum of a number and 3 is multiplied by 6, the result is 12',
					helpSecondPiece: '6 ( x + 3 ) = 12',
					helpThirdPiece: 'Distribute the 6',
					helpFourthPiece: 'Multiply the 6 * x and 6 * 3',
					helpFifthPiece: '6x + 18 = 12',
					helpSixthPiece: 'Subtract 18',
					helpSeventhPiece: '6x + 18 - <strong>18</strong> = 12 - <strong>18</strong>',
					helpEighthPiece: '6x = -6',
					helpNinethPiece: 'Divide by 6',
					helpTenthPiece: dataUtils.pre(
									'\\grp'
										+'{\\css'
											+'{\\frac'
												+'{\\str{6x}}'
												+'{\\str{<strong>6</strong>}}'
											+'}'
											+'{fracNoMargin}'
										+'}'
										+'{\\str{=}}'
										+'{\\css'
											+'{\\frac'
												+'{\\str{-6&nbsp;}}'
												+'{\\str{<strong>6</strong>}}'
											+'}'
											+'{fracNoMargin}'
										+'}'
						),
					helpEleventhPiece: 'x = -1',
					ansNumber: '-1',
					solution: dataUtils.pre(
									'\\rowgrp'
										+'{\\grp'
											+'{\\str{$$ansVariable = }}'
											+'{\\input{$$ansNumber}}'
										+'}'
						),
					firstTable: dataUtils.pre(
										'{\\html{&nbsp;}}'
										+'{\\str{\"$$helpFirstPiece"\ means:}}'
										+'{\\html{&nbsp;}}'
										+'{\\str{$$helpSecondPiece}}'
										+'{\\html{&nbsp;}}'
										+'{\\str{We need to simplify the left side of the equation by distributing the 6 into the parenthesis.}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{Original equation:}}'
												+'{width160}'
											+'}'
											+'{\\str{$$helpSecondPiece}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{1<sup>st</sup>: &nbsp;$$helpThirdPiece.}}'
												+'{width160}'
											+'}'
											+'{\\str{$$helpFourthPiece}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{}}'
												+'{width160}'
											+'}'
											+'{\\str{$$helpFifthPiece}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\str{We can now <u>isolate the variable</u> because it is on one side of the equation <strong>only</strong>.}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{2<sup>nd</sup>: &nbsp;$$helpSixthPiece.}}'
												+'{width160}'
											+'}'
											+'{\\str{$$helpSeventhPiece}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{}}'
												+'{width160}'
											+'}'
											+'{\\str{$$helpEighthPiece}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{3<sup>rd</sup>: &nbsp;$$helpNinethPiece.}}'
												+'{width160}'
											+'}'
											+'{$$helpTenthPiece}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{}}'
												+'{width160}'
											+'}'
											+'{\\str{$$helpEleventhPiece}}'
										+'}'
								),
					helpAnswer: dataUtils.pre(
									'\\grp'
										+'{\\str{<span class=fontsize110>$$ansVariable</span> &nbsp;<span class=fontsize110>=</span> $$ansNumber}}'
						),
					template: 'flexy',
				}
				,
				{	// problem 8
					probQuestion: 'Solve for the value of the variable:',
					probStatement: dataUtils.pre(
									'\\grp'
										+'{\\str{When the difference of a number and 2 is multiplied by 4, the result is -40.}}'
						),
					ansVariable: 'x',
					helpFirstPiece: '... the difference of a number and 2 is multiplied by 4, the result is -40',
					helpSecondPiece: '4 ( x - 2 ) = -40',
					helpSecondandHalf: 'We need to simplify the left side of the equation by distributing the 4 into the parenthesis.',
					helpThirdPiece: 'Distribute the 4',
					helpFourthPiece: 'Multiply the 4 * x and 4 * 2',
					helpFifthPiece: '4x - 8 = -40',
					helpSixthPiece: 'Add 8',
					helpSeventhPiece: '4x - 8 + <strong>8</strong> = -40 + <strong>8</strong>',
					helpEighthPiece: '4x = -32',
					helpNinethPiece: 'Divide by 6',
					helpTenthPiece: dataUtils.pre(
									'\\grp'
										+'{\\css'
											+'{\\frac'
												+'{\\str{4x}}'
												+'{\\str{<strong>4</strong>}}'
											+'}'
											+'{fracNoMargin}'
										+'}'
										+'{\\str{=}}'
										+'{\\css'
											+'{\\frac'
												+'{\\str{-32&nbsp;}}'
												+'{\\str{<strong>4</strong>}}'
											+'}'
											+'{fracNoMargin}'
										+'}'
						),
					helpEleventhPiece: 'x = -8',
					ansNumber: '-8',
					solution: dataUtils.pre(
									'\\rowgrp'
										+'{\\grp'
											+'{\\str{$$ansVariable = }}'
											+'{\\input{$$ansNumber}}'
										+'}'
						),
					firstTable: dataUtils.pre(
										'{\\html{&nbsp;}}'
										+'{\\str{\"$$helpFirstPiece"\ means:}}'
										+'{\\html{&nbsp;}}'
										+'{\\str{$$helpSecondPiece}}'
										+'{\\html{&nbsp;}}'
										+'{\\str{$$helpSecondandHalf}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{Original equation:}}'
												+'{width160}'
											+'}'
											+'{\\str{$$helpSecondPiece}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{1<sup>st</sup>: &nbsp;$$helpThirdPiece.}}'
												+'{width160}'
											+'}'
											+'{\\str{$$helpFourthPiece}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{}}'
												+'{width160}'
											+'}'
											+'{\\str{$$helpFifthPiece}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\str{We can now <u>isolate the variable</u> because it is on one side of the equation <strong>only</strong>.}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{2<sup>nd</sup>: &nbsp;$$helpSixthPiece.}}'
												+'{width160}'
											+'}'
											+'{\\str{$$helpSeventhPiece}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{}}'
												+'{width160}'
											+'}'
											+'{\\str{$$helpEighthPiece}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{3<sup>rd</sup>: &nbsp;$$helpNinethPiece.}}'
												+'{width160}'
											+'}'
											+'{$$helpTenthPiece}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{}}'
												+'{width160}'
											+'}'
											+'{\\str{$$helpEleventhPiece}}'
										+'}'
								),
					helpAnswer: dataUtils.pre(
									'\\grp'
										+'{\\str{<span class=fontsize110>$$ansVariable</span> &nbsp;<span class=fontsize110>=</span> $$ansNumber}}'
						),
					template: 'flexy',
				}
				,
				{	// problem 9
					probQuestion: 'Solve for the value of the variable:',
					probStatement: dataUtils.pre(
									'\\grp'
										+'{\\str{What is 12% of 55?}}'
						),
					ansVariable: 'x',
					helpFirstPiece: 'We translate word-for-word, left to right.',
					helpSecondPiece: '(1) \"What\" is our unknown. We\'ll use \"x\" for \"what\".',
					helpThirdPiece: '(2) \"is\" becomes our equal sign.',
					helpFourthPiece: '(3) Convert the 12% into its decimal form of 0.12.',
					helpFifthPiece: '(4) \"of\" means \"multiply\".',
					helpSixthPiece: '\"What is 12% of 55?\" means:',
					helpSeventhPiece: 'x = ( 0.12 )( 55 )',
					helpEighthPiece: 'The \"x\" is already isolated, so we only need to simplify the right side of the equation.',
					ansNumber: '6.6',
					solution: dataUtils.pre(
									'\\rowgrp'
										+'{\\grp'
											+'{\\str{$$ansVariable = }}'
											+'{\\input{$$ansNumber}}'
										+'}'
						),
					firstTable: dataUtils.pre(
										'{\\html{&nbsp;}}'
										+'{\\html{$$helpFirstPiece}}'
										+'{\\html{&nbsp;}}'
										+'{\\str{$$helpSecondPiece}}'
										+'{\\html{&nbsp;}}'
										+'{\\str{$$helpThirdPiece}}'
										+'{\\html{&nbsp;}}'
										+'{\\str{$$helpFourthPiece}}'
										+'{\\html{&nbsp;}}'
										+'{\\str{$$helpFifthPiece}}'
										+'{\\html{&nbsp;}}'
										+'{\\str{$$helpSixthPiece}}'
										+'{\\html{&nbsp;}}'
										+'{\\str{$$helpSeventhPiece}}'
										+'{\\html{&nbsp;}}'
										+'{\\str{$$helpEighthPiece}}'
								),
					helpAnswer: dataUtils.pre(
									'\\grp'
										+'{\\str{<span class=fontsize110>$$ansVariable</span> &nbsp;<span class=fontsize110>=</span> $$ansNumber}}'
						),
					template: 'flexy',
				}
				,
				{	// problem 10
					probQuestion: 'Solve for the value of the variable:',
					probStatement: dataUtils.pre(
									'\\grp'
										+'{\\str{What is 30% of 93?}}'
						),
					ansVariable: 'x',
					helpFirstPiece: 'We translate word-for-word, left to right.',
					helpSecondPiece: '(1) \"What\" is our unknown. We\'ll use \"x\" for \"what\".',
					helpThirdPiece: '(2) \"is\" becomes our equal sign.',
					helpFourthPiece: '(3) Convert the 30% into its decimal form of 0.30.',
					helpFifthPiece: '(4) \"of\" means \"multiply\".',
					helpSixthPiece: '\"What is 30% of 93?\" means:',
					helpSeventhPiece: 'x = ( 0.30 )( 93 )',
					helpEighthPiece: 'The \"x\" is already isolated, so we only need to simplify the right side of the equation.',
					ansNumber: '27.9',
					solution: dataUtils.pre(
									'\\rowgrp'
										+'{\\grp'
											+'{\\str{$$ansVariable = }}'
											+'{\\input{$$ansNumber}}'
										+'}'
						),
					firstTable: dataUtils.pre(
										'{\\html{&nbsp;}}'
										+'{\\html{$$helpFirstPiece}}'
										+'{\\html{&nbsp;}}'
										+'{\\str{$$helpSecondPiece}}'
										+'{\\html{&nbsp;}}'
										+'{\\str{$$helpThirdPiece}}'
										+'{\\html{&nbsp;}}'
										+'{\\str{$$helpFourthPiece}}'
										+'{\\html{&nbsp;}}'
										+'{\\str{$$helpFifthPiece}}'
										+'{\\html{&nbsp;}}'
										+'{\\str{$$helpSixthPiece}}'
										+'{\\html{&nbsp;}}'
										+'{\\str{$$helpSeventhPiece}}'
										+'{\\html{&nbsp;}}'
										+'{\\str{$$helpEighthPiece}}'
								),
					helpAnswer: dataUtils.pre(
									'\\grp'
										+'{\\str{<span class=fontsize110>$$ansVariable</span> &nbsp;<span class=fontsize110>=</span> $$ansNumber}}'
						),
					template: 'flexy',
				}
				,
				{	// problem 11
					probQuestion: 'Solve for the value of the variable:',
					probStatement: dataUtils.pre(
									'\\grp'
										+'{\\str{29.88 is 36% of what?}}'
						),
					ansVariable: 'x',
					helpFirstPiece: 'We translate word-for-word, left to right.',
					helpSecondPiece: '(1) \"is\" becomes our equal sign.',
					helpThirdPiece: '(2) Convert the 36% into its decimal form of 0.36.',
					helpFourthPiece: '(3) \"of\" means \"multiply\".',
					helpFifthPiece: '(4) \"What\" is our unknown. We\'ll use \"x\" for \"what\".',
					helpSixthPiece: '\"29.88 is 36% of what?\" means:',
					helpSeventhPiece: '29.88 = ( 0.36 )( x ) which is the same as:',
					helpEighthPiece: '29.88 = .36x',
					helpNinethPiece: 'Solve the equation by isolating the variable.',
					ansNumber: '83',
					solution: dataUtils.pre(
									'\\rowgrp'
										+'{\\grp'
											+'{\\str{$$ansVariable = }}'
											+'{\\input{$$ansNumber}}'
										+'}'
						),
					firstTable: dataUtils.pre(
										'{\\html{&nbsp;}}'
										+'{\\html{$$helpFirstPiece}}'
										+'{\\html{&nbsp;}}'
										+'{\\str{$$helpSecondPiece}}'
										+'{\\html{&nbsp;}}'
										+'{\\str{$$helpThirdPiece}}'
										+'{\\html{&nbsp;}}'
										+'{\\str{$$helpFourthPiece}}'
										+'{\\html{&nbsp;}}'
										+'{\\str{$$helpFifthPiece}}'
										+'{\\html{&nbsp;}}'
										+'{\\str{$$helpSixthPiece}}'
										+'{\\html{&nbsp;}}'
										+'{\\str{$$helpSeventhPiece}}'
										+'{\\html{&nbsp;}}'
										+'{\\str{$$helpEighthPiece}}'
										+'{\\html{&nbsp;}}'
										+'{\\str{$$helpNinethPiece}}'
								),
					helpAnswer: dataUtils.pre(
									'\\grp'
										+'{\\str{<span class=fontsize110>$$ansVariable</span> &nbsp;<span class=fontsize110>=</span> $$ansNumber}}'
						),
					template: 'flexy',
				}
				,
				{	// problem 12
					probQuestion: 'Solve for the value of the variable:',
					probStatement: dataUtils.pre(
									'\\grp'
										+'{\\str{15.3 is 120% of what?}}'
						),
					ansVariable: 'x',
					helpFirstPiece: 'We translate word-for-word, left to right.',
					helpSecondPiece: '(1) \"is\" becomes our equal sign.',
					helpThirdPiece: '(2) Convert the 120% into its decimal form of 1.2.',
					helpFourthPiece: '(3) \"of\" means \"multiply\".',
					helpFifthPiece: '(4) \"What\" is our unknown. We\'ll use \"x\" for \"what\".',
					helpSixthPiece: '\"15.3 is 120% of what?\" means:',
					helpSeventhPiece: '15.3 = ( 1.2 )( x ) which is the same as:',
					helpEighthPiece: '15.3 = 1.2x',
					helpNinethPiece: 'Solve the equation by isolating the variable.',
					ansNumber: '127.5',
					solution: dataUtils.pre(
									'\\rowgrp'
										+'{\\grp'
											+'{\\str{$$ansVariable = }}'
											+'{\\input{$$ansNumber}}'
										+'}'
						),
					firstTable: dataUtils.pre(
										'{\\html{&nbsp;}}'
										+'{\\html{$$helpFirstPiece}}'
										+'{\\html{&nbsp;}}'
										+'{\\str{$$helpSecondPiece}}'
										+'{\\html{&nbsp;}}'
										+'{\\str{$$helpThirdPiece}}'
										+'{\\html{&nbsp;}}'
										+'{\\str{$$helpFourthPiece}}'
										+'{\\html{&nbsp;}}'
										+'{\\str{$$helpFifthPiece}}'
										+'{\\html{&nbsp;}}'
										+'{\\str{$$helpSixthPiece}}'
										+'{\\html{&nbsp;}}'
										+'{\\str{$$helpSeventhPiece}}'
										+'{\\html{&nbsp;}}'
										+'{\\str{$$helpEighthPiece}}'
										+'{\\html{&nbsp;}}'
										+'{\\str{$$helpNinethPiece}}'
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

