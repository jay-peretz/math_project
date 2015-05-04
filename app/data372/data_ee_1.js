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
			,
			flexyNextScrolls: {
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
											+'{\\html{&nbsp;}}',
								"fixHelpControls": true
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
										+'{\\css'
											+'{\\grp'
												+'{\\str{$$ansVariable = }}'
												+'{\\input{$$ansNumber}}'
											+'}'
											+'{marginLeft60px}'
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
										+'{\\css'
											+'{\\grp'
												+'{\\str{$$ansVariable = }}'
												+'{\\input{$$ansNumber}}'
											+'}'
											+'{marginLeft60px}'
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
										+'{\\str{ = }}'
										+'{\\css'
											+'{\\frac'
												+'{\\str{-28&nbsp;}}'
												+'{\\str{<strong>4</strong>}}'
											+'}'
											+'{fracNoMargin}'
										+'}'
						),
					helpFifthPiece: '&nbsp;&nbsp;x = -7',
					ansNumber: '-7',
					solution: dataUtils.pre(
									'\\rowgrp'
										+'{\\css'
											+'{\\grp'
												+'{\\str{$$ansVariable = }}'
												+'{\\input{$$ansNumber}}'
											+'}'
											+'{marginLeft60px}'
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
											+'{\\str{&nbsp;$$helpSecondPiece}}'
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
										+'{\\str{ = }}'
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
										+'{\\str{ = }}'
										+'{\\str{-15 (<strong>-3</strong> )}}'
						),
					helpFifthPiece: '&nbsp;&nbsp;x = 45',
					ansNumber: '45',
					solution: dataUtils.pre(
									'\\rowgrp'
										+'{\\css'
											+'{\\grp'
												+'{\\str{$$ansVariable = }}'
												+'{\\input{$$ansNumber}}'
											+'}'
											+'{marginLeft60px}'
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
										+'{\\str{ = }}'
										+'{\\css'
											+'{\\frac'
												+'{\\str{-150&nbsp;}}'
												+'{\\str{<strong>6</strong>}}'
											+'}'
											+'{fracNoMargin}'
										+'}'
						),
					helpEleventhPiece: '&nbsp;&nbsp;x = -25',
					ansNumber: '-25',
					solution: dataUtils.pre(
									'\\rowgrp'
										+'{\\css'
											+'{\\grp'
												+'{\\str{$$ansVariable = }}'
												+'{\\input{$$ansNumber}}'
											+'}'
											+'{marginLeft60px}'
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
					template: 'flexyNextScrolls',
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
										+'{\\str{ = }}'
										+'{\\css'
											+'{\\frac'
												+'{\\str{12}}'
												+'{\\str{<strong>2</strong>}}'
											+'}'
											+'{fracNoMargin}'
										+'}'
						),
					helpEleventhPiece: '&nbsp;&nbsp;x = 6',
					ansNumber: '6',
					solution: dataUtils.pre(
									'\\rowgrp'
										+'{\\css'
											+'{\\grp'
												+'{\\str{$$ansVariable = }}'
												+'{\\input{$$ansNumber}}'
											+'}'
											+'{marginLeft60px}'
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
					template: 'flexyNextScrolls',
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
										+'{\\str{ = }}'
										+'{\\css'
											+'{\\frac'
												+'{\\str{-6&nbsp;}}'
												+'{\\str{<strong>6</strong>}}'
											+'}'
											+'{fracNoMargin}'
										+'}'
						),
					helpEleventhPiece: '&nbsp;&nbsp;x = -1',
					ansNumber: '-1',
					solution: dataUtils.pre(
									'\\rowgrp'
										+'{\\css'
											+'{\\grp'
												+'{\\str{$$ansVariable = }}'
												+'{\\input{$$ansNumber}}'
											+'}'
											+'{marginLeft60px}'
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
					template: 'flexyNextScrolls',
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
										+'{\\str{ = }}'
										+'{\\css'
											+'{\\frac'
												+'{\\str{-32&nbsp;}}'
												+'{\\str{<strong>4</strong>}}'
											+'}'
											+'{fracNoMargin}'
										+'}'
						),
					helpEleventhPiece: '&nbsp;&nbsp;x = -8',
					ansNumber: '-8',
					solution: dataUtils.pre(
									'\\rowgrp'
										+'{\\css'
											+'{\\grp'
												+'{\\str{$$ansVariable = }}'
												+'{\\input{$$ansNumber}}'
											+'}'
											+'{marginLeft60px}'
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
					template: 'flexyNextScrolls',
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
										+'{\\css'
											+'{\\grp'
												+'{\\str{$$ansVariable = }}'
												+'{\\input{$$ansNumber}}'
											+'}'
											+'{marginLeft60px}'
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
					template: 'flexyNextScrolls',
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
										+'{\\css'
											+'{\\grp'
												+'{\\str{$$ansVariable = }}'
												+'{\\input{$$ansNumber}}'
											+'}'
											+'{marginLeft60px}'
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
					template: 'flexyNextScrolls',
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
										+'{\\css'
											+'{\\grp'
												+'{\\str{$$ansVariable = }}'
												+'{\\input{$$ansNumber}}'
											+'}'
											+'{marginLeft60px}'
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
					template: 'flexyNextScrolls',
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
					ansNumber: '12.75',
					solution: dataUtils.pre(
									'\\rowgrp'
										+'{\\css'
											+'{\\grp'
												+'{\\str{$$ansVariable = }}'
												+'{\\input{$$ansNumber}}'
											+'}'
											+'{marginLeft60px}'
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
					template: 'flexyNextScrolls',
				}
				,
				{	// problem 13
					probQuestion: 'Solve for the value of the variable:',
					probStatement: dataUtils.pre(
									'\\grp'
										+'{\\str{22.05 is what percent of 63?}}'
						),
					ansVariable: 'x',
					helpFirstPiece: 'We translate word-for-word, left to right.',
					helpSecondPiece: '(1) \"is\" becomes our equal sign.',
					helpThirdPiece: '(2) \"what percent\" can be expressed as the unknown<span class=hyphenByLineThrough>&nbsp&nbsp;</span>an \"x\" with a percent symbol.',
					helpFourthPiece: '\"what percent\" is the same as \"x%\", but we don\'t normally write the percent symbol, instead changing this to a decimal or fraction.',
					helpFifthPiece: 'Remember that the percent symbol means <u>\"divide by 100\"</u> or <u>\"multiply by 1<span class=fontsize110>&#8260;</span>100\"</u> or commonly expressed with a variable as <u>\"multiply by <span class=fontsize110>&#46;</span>01\"</u>.',
					helpSixthPiece: 'These all mean the same:',
					helpSeventhPiece: dataUtils.pre(
									'\\grp'
										+'{\\str{x%}}'
										+'{\\str{ = }}'
										+'{\\css'
											+'{\\frac'
												+'{\\str{x}}'
												+'{\\str{100}}'
											+'}'
											+'{fracNoMargin}'
										+'}'
							 			+'{\\str{ = }}'
										+'{\\css'
											+'{\\frac'
												+'{\\str{1}}'
												+'{\\str{100}}'
											+'}'
											+'{fracNoMargin}'
										+'}'
										+'{\\str{* x}}'
										+'{\\str{ = }}'
										+'{\\str{.01x}}'
						),
					helpEighthPiece: 'In this equation we will use \".01x\" for the translation of \"what percent.\"',
					helpNinethPiece: '(3) \"of\" means \"multiply\".',
					helpTenthPiece: '\"22.05 is what percent of 63?\" means:',
					helpEleventhPiece: '22.05 = ( .01x )( 63 ) which is the same as:',
					helpTwelfthPiece: '22.05 = .63x',
					helpThirteenthPiece: 'Solve the equation by isolating the variable.',
					ansNumber: '35',
					solution: dataUtils.pre(
									'\\rowgrp'
										+'{\\css'
											+'{\\grp'
												+'{\\str{$$ansVariable = }}'
												+'{\\input{$$ansNumber}}'
												+'{\\str{%}}'
											+'}'
											+'{marginLeft60px}'
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
										+'{$$helpSeventhPiece}'
										+'{\\html{&nbsp;}}'
										+'{\\str{$$helpEighthPiece}}'
										+'{\\html{&nbsp;}}'
										+'{\\str{$$helpNinethPiece}}'
										+'{\\html{&nbsp;}}'
										+'{\\str{$$helpTenthPiece}}'
										+'{\\html{&nbsp;}}'
										+'{\\str{$$helpEleventhPiece}}'
										+'{\\html{&nbsp;}}'
										+'{\\str{$$helpTwelfthPiece}}'
										+'{\\html{&nbsp;}}'
										+'{\\str{$$helpThirteenthPiece}}'
								),
					helpAnswer: dataUtils.pre(
									'\\grp'
										+'{\\str{<span class=fontsize110>$$ansVariable</span> &nbsp;<span class=fontsize110>=</span> $$ansNumber %}}'
						),
					template: 'flexyNextScrolls',
				}
				,
				{	// problem 14
					probQuestion: 'Solve for the value of the variable:',
					probStatement: dataUtils.pre(
									'\\grp'
										+'{\\str{42 is what percent of 24?}}'
						),
					ansVariable: 'x',
					helpFirstPiece: 'We translate word-for-word, left to right.',
					helpSecondPiece: '(1) \"is\" becomes our equal sign.',
					helpThirdPiece: '(2) \"what percent\" can be expressed as the unknown<span class=hyphenByLineThrough>&nbsp&nbsp;</span>an \"x\" with a percent symbol.',
					helpFourthPiece: '\"what percent\" is the same as \"x%\", but we don\'t normally write the percent symbol, instead changing this to a decimal or fraction.',
					helpFifthPiece: 'Remember that the percent symbol means <u>\"divide by 100\"</u> or <u>\"multiply by 1<span class=fontsize110>&#8260;</span>100\"</u> or commonly expressed with a variable as <u>\"multiply by <span class=fontsize110>&#46;</span>01\"</u>.',
					helpSixthPiece: 'These all mean the same:',
					helpSeventhPiece: dataUtils.pre(
									'\\grp'
										+'{\\str{x%}}'
										+'{\\str{ = }}'
										+'{\\css'
											+'{\\frac'
												+'{\\str{x}}'
												+'{\\str{100}}'
											+'}'
											+'{fracNoMargin}'
										+'}'
							 			+'{\\str{ = }}'
										+'{\\css'
											+'{\\frac'
												+'{\\str{1}}'
												+'{\\str{100}}'
											+'}'
											+'{fracNoMargin}'
										+'}'
										+'{\\str{* x}}'
										+'{\\str{ = }}'
										+'{\\str{.01x}}'
						),
					helpEighthPiece: 'In this equation we will use \".01x\" for the translation of \"what percent.\"',
					helpNinethPiece: '(3) \"of\" means \"multiply\".',
					helpTenthPiece: '\"42 is what percent of 24?\" means:',
					helpEleventhPiece: '42 = ( .01x )( 24 ) which is the same as:',
					helpTwelfthPiece: '42 = .24x',
					helpThirteenthPiece: 'Solve the equation by isolating the variable.',
					ansNumber: '175',
					solution: dataUtils.pre(
									'\\rowgrp'
										+'{\\css'
											+'{\\grp'
												+'{\\str{$$ansVariable = }}'
												+'{\\input{$$ansNumber}}'
												+'{\\str{%}}'
											+'}'
											+'{marginLeft60px}'
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
										+'{$$helpSeventhPiece}'
										+'{\\html{&nbsp;}}'
										+'{\\str{$$helpEighthPiece}}'
										+'{\\html{&nbsp;}}'
										+'{\\str{$$helpNinethPiece}}'
										+'{\\html{&nbsp;}}'
										+'{\\str{$$helpTenthPiece}}'
										+'{\\html{&nbsp;}}'
										+'{\\str{$$helpEleventhPiece}}'
										+'{\\html{&nbsp;}}'
										+'{\\str{$$helpTwelfthPiece}}'
										+'{\\html{&nbsp;}}'
										+'{\\str{$$helpThirteenthPiece}}'
								),
					helpAnswer: dataUtils.pre(
									'\\grp'
										+'{\\str{<span class=fontsize110>$$ansVariable</span> &nbsp;<span class=fontsize110>=</span> $$ansNumber %}}'
						),
					template: 'flexyNextScrolls',
				}
				,
				{	// problem 15
					probQuestion: 'The sum of three consecutive numbers is 51. What are the three consecutive numbers?',
					probStatement: dataUtils.pre(
												 '\\pan{3}{9}'
													+'{\\grp'
														+'{\\str{&nbsp;}}'
													+'}'
						),
					ansVariable: 'x',
					ansFirstNumber: '16',
					ansSecondNumber: '17',
					ansThirdNumber: '18',
					solution: dataUtils.pre(
									'\\rowgrp'
										+'{\\css'
											+'{\\grp'
												+'{\\input{$$ansFirstNumber}}'
												+'{\\str{ <span class=fontsize125>,</span> }}'
												+'{\\input{$$ansSecondNumber}}'
												+'{\\str{ <span class=fontsize125>,</span> }}'
												+'{\\input{$$ansThirdNumber}}'
											+'}'
											+'{marginLeft80px}'
										+'}'
						),
					firstTable: dataUtils.pre(
										'{\\html{&nbsp;}}'
										+'{\\str{Before we write an equation, we must first create an algebraic expression to represent each of the three unknown values.}}'
										+'{\\html{&nbsp;}}'
										+'{\\str{Let\'s write our first unknown value as \"x\".}}'
										+'{\\html{&nbsp;}}'
										+'{\\str{We don\'t know the actual values of the second and third numbers, but we do know their relationship to the first unknown of \"x\".}}'
										+'{\\html{&nbsp;}}'
										+'{\\str{We know that these three values are \"consecutive\" or the \"next\" value. In fact, consecutive means \"plus 1.\"}}'
										+'{\\html{&nbsp;}}'
										+'{\\str{If the 1<sup>st</sup> unknown is x, then the second unknown must be: &nbsp;x + 1.}}'
										+'{\\html{&nbsp;}}'
										+'{\\str{The third unknown would be:&nbsp; x + 1 + 1 or&nbsp; x + 2.}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{So: &nbsp;}}'
												+'{width50}'
											+'}'
											+'{\\css'
												+'{\\str{1<sup>st</sup> unknown:}}'
												+'{width100}'
											+'}'
											+'{\\str{x}}'
										+'}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{&nbsp;}}'
												+'{width50}'
											+'}'
											+'{\\css'
												+'{\\str{2<sup>nd</sup> unknown:}}'
												+'{width100}'
											+'}'
											+'{\\str{x + 1}}'
										+'}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{&nbsp;}}'
												+'{width50}'
											+'}'
											+'{\\css'
												+'{\\str{3<sup>rd</sup> unknown:}}'
												+'{width100}'
											+'}'
											+'{\\str{x + 2}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\str{Now we can write an equation. We know that the \"sum of the values equals 51\". Let\'s write that out left to right, adding the values together.}}'
										+'{\\html{&nbsp;}}'
										+'{\\str{x + ( x + 1 ) + ( x + 2 ) = 51}}'
										+'{\\html{&nbsp;}}'
										+'{\\str{Now, simplify and solve the equation:}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{Original equation:}}'
												+'{width180}'
											+'}'
											+'{\\str{x + ( x + 1 ) + ( x + 2 ) = 51}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{1<sup>st</sup>:&nbsp;}}'
												+'{width50}'
											+'}'
											+'{\\str{Simplify the left side of the equation. Combine the \"x\" terms and then the 1 and the 2.}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{&nbsp;}}'
												+'{width50}'
											+'}'
											+'{\\css'
												+'{\\str{Result:}}'
												+'{width120}'
											+'}'
											+'{\\str{3x + 3 = 51}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\html{We can now <u>isolate the variable</u> because it is on one side of the equation <strong>only</strong>.}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{2<sup>nd</sup>:&nbsp;}}'
												+'{width50}'
											+'}'
											+'{\\css'
												+'{\\str{Subtract 3.}}'
												+'{width120}'
											+'}'
											+'{\\str{3x + 3 - <strong>3</strong> = 51 - <strong>3</strong>}}'
											
										+'}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{&nbsp;}}'
												+'{width50}'
											+'}'
											+'{\\css'
												+'{\\str{Result:}}'
												+'{width120}'
											+'}'
											+'{\\str{3x = 48}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{3<sup>rd</sup>:&nbsp;}}'
												+'{width50}'
											+'}'
											+'{\\css'
												+'{\\str{Divide by 3.}}'
												+'{width120}'
											+'}'
											+'{\\css'
												+'{\\frac'
													+'{\\str{3x}}'
													+'{\\str{<strong>3</strong>}}'
												+'}'
												+'{fracNoMargin}'
											+'}'
											+'{\\str{ = }}'
											+'{\\css'
												+'{\\frac'
													+'{\\str{48}}'
													+'{\\str{<strong>3</strong>}}'
												+'}'
												+'{fracNoMargin}'
											+'}'
											
										+'}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{&nbsp;}}'
												+'{width50}'
											+'}'
											+'{\\css'
												+'{\\str{Result:}}'
												+'{width120}'
											+'}'
											+'{\\str{&nbsp;x = 16}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\html{So we have solved for the value of x, but we haven\'t answered the question that was asked yet.}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{1<sup>st</sup> unknown:&nbsp;}}'
												+'{width100}'
											+'}'
											+'{\\css'
												+'{\\str{x}}'
												+'{width70}'
											+'}'
											+'{\\str{Substitute for x:&nbsp; ( 16 )}}'
											
										+'}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{&nbsp;}}'
												+'{width180}'
											+'}'
											+'{\\str{So: 1<sup>st</sup> unknown = 16}}'
											
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{2<sup>nd</sup> unknown:}}'
												+'{width100}'
											+'}'
											+'{\\css'
												+'{\\str{x + 1}}'
												+'{width70}'
											+'}'
											+'{\\str{Substitute for x + 1:&nbsp; ( 16 ) + 1}}'
											
										+'}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{&nbsp;}}'
												+'{width180}'
											+'}'
											+'{\\str{So: 2<sup>nd</sup> unknown = 17}}'
											
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{3<sup>rd</sup> unknown:&nbsp;}}'
												+'{width100}'
											+'}'
											+'{\\css'
												+'{\\str{x + 2}}'
												+'{width70}'
											+'}'
											+'{\\str{Substitute for x + 2:&nbsp; ( 16 ) + 2}}'
											
										+'}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{&nbsp;}}'
												+'{width180}'
											+'}'
											+'{\\str{So: 3<sup>rd</sup> unknown = 18}}'
											
										+'}'
								),
					helpAnswer: dataUtils.pre(
									'\\grp'
											+'{\\str{$$ansFirstNumber}}'
											+'{\\str{ <span class=fontsize125>,</span> }}'
											+'{\\str{$$ansSecondNumber}}'
											+'{\\str{ <span class=fontsize125>,</span> }}'
											+'{\\str{$$ansThirdNumber}}'
						),
					template: 'flexyNextScrolls',
				}
				,
				{	// problem 16
					probQuestion: 'The sum of three consecutive numbers is 78. What are the three consecutive numbers?',
					probStatement: dataUtils.pre(
												 '\\pan{3}{9}'
													+'{\\grp'
														+'{\\str{&nbsp;}}'
													+'}'
						),
					ansVariable: 'x',
					ansFirstNumber: '25',
					ansSecondNumber: '26',
					ansThirdNumber: '27',
					solution: dataUtils.pre(
									'\\rowgrp'
										+'{\\css'
											+'{\\grp'
												+'{\\input{$$ansFirstNumber}}'
												+'{\\str{ <span class=fontsize125>,</span> }}'
												+'{\\input{$$ansSecondNumber}}'
												+'{\\str{ <span class=fontsize125>,</span> }}'
												+'{\\input{$$ansThirdNumber}}'
											+'}'
											+'{marginLeft80px}'
										+'}'
						),
					firstTable: dataUtils.pre(
										'{\\html{&nbsp;}}'
										+'{\\str{Before we write an equation, we must first create an algebraic expression to represent each of the three unknown values.}}'
										+'{\\html{&nbsp;}}'
										+'{\\str{Let\'s write our first unknown value as \"x\".}}'
										+'{\\html{&nbsp;}}'
										+'{\\str{We don\'t know the actual values of the second and third numbers, but we do know their relationship to the first unknown of \"x\".}}'
										+'{\\html{&nbsp;}}'
										+'{\\str{We know that these three values are \"consecutive\" or the \"next\" value. In fact, consecutive means \"plus 1.\"}}'
										+'{\\html{&nbsp;}}'
										+'{\\str{If the 1<sup>st</sup> unknown is x, then the second unknown must be: &nbsp;x + 1.}}'
										+'{\\html{&nbsp;}}'
										+'{\\str{The third unknown would be:&nbsp; x + 1 + 1 or&nbsp; x + 2.}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{So: &nbsp;}}'
												+'{width50}'
											+'}'
											+'{\\css'
												+'{\\str{1<sup>st</sup> unknown:}}'
												+'{width100}'
											+'}'
											+'{\\str{x}}'
										+'}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{&nbsp;}}'
												+'{width50}'
											+'}'
											+'{\\css'
												+'{\\str{2<sup>nd</sup> unknown:}}'
												+'{width100}'
											+'}'
											+'{\\str{x + 1}}'
										+'}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{&nbsp;}}'
												+'{width50}'
											+'}'
											+'{\\css'
												+'{\\str{3<sup>rd</sup> unknown:}}'
												+'{width100}'
											+'}'
											+'{\\str{x + 2}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\str{Now we can write an equation. We know that the \"sum of the values equals 78\". Let\'s write that out left to right, adding the values together.}}'
										+'{\\html{&nbsp;}}'
										+'{\\str{x + ( x + 1 ) + ( x + 2 ) = 78}}'
										+'{\\html{&nbsp;}}'
										+'{\\str{Now, simplify and solve the equation:}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{Original equation:}}'
												+'{width180}'
											+'}'
											+'{\\str{x + ( x + 1 ) + ( x + 2 ) = 78}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{1<sup>st</sup>:&nbsp;}}'
												+'{width50}'
											+'}'
											+'{\\str{Simplify the left side of the equation. Combine the \"x\" terms and then the 1 and the 2.}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{&nbsp;}}'
												+'{width50}'
											+'}'
											+'{\\css'
												+'{\\str{Result:}}'
												+'{width120}'
											+'}'
											+'{\\str{3x + 3 = 78}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\html{We can now <u>isolate the variable</u> because it is on one side of the equation <strong>only</strong>.}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{2<sup>nd</sup>:&nbsp;}}'
												+'{width50}'
											+'}'
											+'{\\css'
												+'{\\str{Subtract 3.}}'
												+'{width120}'
											+'}'
											+'{\\str{3x + 3 - <strong>3</strong> = 78 - <strong>3</strong>}}'
											
										+'}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{&nbsp;}}'
												+'{width50}'
											+'}'
											+'{\\css'
												+'{\\str{Result:}}'
												+'{width120}'
											+'}'
											+'{\\str{3x = 75}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{3<sup>rd</sup>:&nbsp;}}'
												+'{width50}'
											+'}'
											+'{\\css'
												+'{\\str{Divide by 3.}}'
												+'{width120}'
											+'}'
											+'{\\css'
												+'{\\frac'
													+'{\\str{3x}}'
													+'{\\str{<strong>3</strong>}}'
												+'}'
												+'{fracNoMargin}'
											+'}'
											+'{\\str{ = }}'
											+'{\\css'
												+'{\\frac'
													+'{\\str{75}}'
													+'{\\str{<strong>3</strong>}}'
												+'}'
												+'{fracNoMargin}'
											+'}'
											
										+'}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{&nbsp;}}'
												+'{width50}'
											+'}'
											+'{\\css'
												+'{\\str{Result:}}'
												+'{width120}'
											+'}'
											+'{\\str{&nbsp;x = 25}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\html{So we have solved for the value of x, but we haven\'t answered the question that was asked yet.}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{1<sup>st</sup> unknown:&nbsp;}}'
												+'{width100}'
											+'}'
											+'{\\css'
												+'{\\str{x}}'
												+'{width70}'
											+'}'
											+'{\\str{Substitute for x:&nbsp; ( 25 )}}'
											
										+'}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{&nbsp;}}'
												+'{width180}'
											+'}'
											+'{\\str{So: 1<sup>st</sup> unknown = 25}}'
											
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{2<sup>nd</sup> unknown:}}'
												+'{width100}'
											+'}'
											+'{\\css'
												+'{\\str{x + 1}}'
												+'{width70}'
											+'}'
											+'{\\str{Substitute for x + 1:&nbsp; ( 25 ) + 1}}'
											
										+'}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{&nbsp;}}'
												+'{width180}'
											+'}'
											+'{\\str{So: 2<sup>nd</sup> unknown = 26}}'
											
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{3<sup>rd</sup> unknown:&nbsp;}}'
												+'{width100}'
											+'}'
											+'{\\css'
												+'{\\str{x + 2}}'
												+'{width70}'
											+'}'
											+'{\\str{Substitute for x + 2:&nbsp; ( 25 ) + 2}}'
											
										+'}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{&nbsp;}}'
												+'{width180}'
											+'}'
											+'{\\str{So: 3<sup>rd</sup> unknown = 27}}'
											
										+'}'
								),
					helpAnswer: dataUtils.pre(
									'\\grp'
											+'{\\str{$$ansFirstNumber}}'
											+'{\\str{ <span class=fontsize125>,</span> }}'
											+'{\\str{$$ansSecondNumber}}'
											+'{\\str{ <span class=fontsize125>,</span> }}'
											+'{\\str{$$ansThirdNumber}}'
						),
					template: 'flexyNextScrolls',
				}
				,
				{	// problem 17
					probQuestion: 'Jack weighs 13 lbs. less than twice what his younger sister Jill weighs. If Jack weighs 111 lbs., how much does Jill weigh?',
					probStatement: dataUtils.pre(
												 '\\pan{4}{8}'
													+'{\\grp'
														+'{\\str{&nbsp;}}'
													+'}'
						),
					ansVariable: 'x',
					ansNumber: '62',
					solution: dataUtils.pre(
									'\\rowgrp'
										+'{\\css'
											+'{\\grp'
												+'{\\str{Jill weighs &nbsp;}}'
												+'{\\input{$$ansNumber}}'
												+'{\\str{lbs.}}'
											+'}'
											+'{marginLeft40px}'
										+'}'
								),
					firstTable: dataUtils.pre(
										'{\\html{&nbsp;}}'
										+'{\\str{Reread the first sentence again, carefully and slowly. This is what we are told.}}'
										+'{\\html{&nbsp;}}'
										+'{\\str{( Jack\'s weight ) = 2 ( Jill\'s weight ) - 13}}'
										+'{\\html{&nbsp;}}'
										+'{\\str{We know Jack\'s weight. It is given as 111 lbs.}}'
										+'{\\html{&nbsp;}}'
										+'{\\str{Jill\'s weight is the unknown. Jill\'s weight will be our \"x\".}}'
										+'{\\html{&nbsp;}}'
										+'{\\str{Set up the equation:}}'
										+'{\\html{&nbsp;}}'
										+'{\\str{111 = 2x - 13}}'
										+'{\\html{&nbsp;}}'
										+'{\\str{Solve the equation by isolating the variable.}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{2<sup>nd</sup>:}}'
												+'{width40}'
											+'}'
											+'{\\css'
												+'{\\str{Add 13.}}'
												+'{width100}'
											+'}'
											+'{\\str{111 + <strong>13</strong> = 2x - 13 + <strong>13</strong>}}'
										+'}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{&nbsp;}}'
												+'{width40}'
											+'}'
											+'{\\css'
												+'{\\str{Result:}}'
												+'{width100}'
											+'}'
											+'{\\str{124 = 2x}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{3<sup>rd</sup>:}}'
												+'{width40}'
											+'}'
											+'{\\css'
												+'{\\str{Divide by 2.}}'
												+'{width100}'
											+'}'
											+'{\\css'
												+'{\\frac'
													+'{\\str{124}}'
													+'{\\str{<strong>2</strong>}}'
												+'}'
												+'{fracNoMargin}'
											+'}'
											+'{\\str{ = }}'
											+'{\\css'
												+'{\\frac'
													+'{\\str{2x}}'
													+'{\\str{<strong>2</strong>}}'
												+'}'
												+'{fracNoMargin}'
											+'}'
										+'}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{&nbsp;}}'
												+'{width40}'
											+'}'
											+'{\\css'
												+'{\\str{Result:}}'
												+'{width100}'
											+'}'
											+'{\\str{&nbsp;x = 62}}'
										+'}'
								),
					helpAnswer: dataUtils.pre(
									'\\grp'
											+'{\\grp'
											+'{\\str{Jill weighs}}'
											+'{\\str{$$ansNumber}}'
											+'{\\str{lbs.}}'
										+'}'
						),
					template: 'flexyNextScrolls',
				}
				,
				{	// problem 18
					probQuestion: 'In one week Person B used 235 gallons of water. This was 35 gallons less than three times the amount used by Person A in that same week. How many gallons did Person A use in this week?',
					probStatement: dataUtils.pre(
												 '\\pan{4}{8}'
													+'{\\grp'
														+'{\\str{&nbsp;}}'
													+'}'
						),
					ansVariable: 'x',
					ansNumber: '90',
					solution: dataUtils.pre(
									'\\rowgrp'
										+'{\\css'
											+'{\\grp'
												+'{\\str{Person A used &nbsp;}}'
												+'{\\input{$$ansNumber}}'
												+'{\\str{gallons of water.}}'
											+'}'
											+'{marginLeft40px}'
										+'}'
								),
					firstTable: dataUtils.pre(
										'{\\html{&nbsp;}}'
										+'{\\str{Reread the first and second sentences again, carefully and slowly. This is what we are told.}}'
										+'{\\html{&nbsp;}}'
										+'{\\str{( Person B\'s water use ) = 3 ( Person A\'s water use ) - 35}}'
										+'{\\html{&nbsp;}}'
										+'{\\str{We know Person B\'s water use. It is given as 235 gallons.}}'
										+'{\\html{&nbsp;}}'
										+'{\\str{Person A\'s water use is the unknown. Person A\'s water use will be our \"x\".}}'
										+'{\\html{&nbsp;}}'
										+'{\\str{Set up the equation:}}'
										+'{\\html{&nbsp;}}'
										+'{\\str{235 = 3x - 35}}'
										+'{\\html{&nbsp;}}'
										+'{\\str{Solve the equation by isolating the variable.}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{2<sup>nd</sup>:}}'
												+'{width40}'
											+'}'
											+'{\\css'
												+'{\\str{Add 35.}}'
												+'{width100}'
											+'}'
											+'{\\str{235 + <strong>35</strong> = 3x - 35 + <strong>35</strong>}}'
										+'}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{&nbsp;}}'
												+'{width40}'
											+'}'
											+'{\\css'
												+'{\\str{Result:}}'
												+'{width100}'
											+'}'
											+'{\\str{270 = 3x}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{3<sup>rd</sup>:}}'
												+'{width40}'
											+'}'
											+'{\\css'
												+'{\\str{Divide by 3.}}'
												+'{width100}'
											+'}'
											+'{\\css'
												+'{\\frac'
													+'{\\str{270}}'
													+'{\\str{<strong>3</strong>}}'
												+'}'
												+'{fracNoMargin}'
											+'}'
											+'{\\str{ = }}'
											+'{\\css'
												+'{\\frac'
													+'{\\str{3x}}'
													+'{\\str{<strong>3</strong>}}'
												+'}'
												+'{fracNoMargin}'
											+'}'
										+'}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{&nbsp;}}'
												+'{width40}'
											+'}'
											+'{\\css'
												+'{\\str{Result:}}'
												+'{width100}'
											+'}'
											+'{\\str{&nbsp;x = 90}}'
										+'}'
								),
					helpAnswer: dataUtils.pre(
											  '\\grp'
												+'{\\str{Person A used}}'
												+'{\\str{$$ansNumber}}'
												+'{\\str{gallons of water.}}'
						),
					template: 'flexyNextScrolls',
				}
				,
				{	// problem 19
					probQuestion: 'The perimeter of a rectangle is 120 feet. Its length is 10 feet longer than 4 times its width. What is the width of this sandbox? ( P = 2L + 2W )',
					probStatement: dataUtils.pre(
												 '\\pan{3}{9}'
													+'{\\grp'
														+'{\\str{&nbsp;}}'
													+'}'
						),
					ansVariable: 'x',
					ansNumber: '10',
					solution: dataUtils.pre(
									'\\rowgrp'
										+'{\\css'
											+'{\\grp'
												+'{\\str{width = }}'
												+'{\\input{$$ansNumber}}'
												+'{\\str{ft.}}'
											+'}'
											+'{marginLeft80px}'
										+'}'
								),
					firstTable: dataUtils.pre(
										'{\\html{&nbsp;}}'
										+'{\\str{Reread the first and second sentences again, carefully and slowly. This is what we are told.}}'
										+'{\\html{&nbsp;}}'
										+'{\\str{The formula to solve for the perimeter of a rectangle is:}}'
										+'{\\html{&nbsp;}}'
										+'{\\str{P = 2L + 2W}}'
										+'{\\html{&nbsp;}}'
										+'{\\str{We know the perimeter. That is given as 120 feet.}}'
										+'{\\html{&nbsp;}}'
										+'{\\str{We are not told what the length and the width of the rectangle are. <u>Before we write an equation</u>, we must first create an algebraic expression to represent separately the <u>width</u> and <u>length</u>.}}'
										+'{\\html{&nbsp;}}'
										+'{\\str{We are told that the length (L) is \"10 ft. longer than 4 times its width (W).\" If we translate these words left to right we get:}}'
										+'{\\html{&nbsp;}}'
										+'{\\str{L = 4w + 10. So let\'s use \"4w + 10\" for the length.}}'
										+'{\\html{&nbsp;}}'
										+'{\\str{We can just let the width be \"w.\"}}'
										+'{\\html{&nbsp;}}'
										+'{\\str{Now we know that:}}'
										+'{\\html{&nbsp;}}'
										+'{\\str{P = 120}}'
										+'{\\str{L = 4w + 10}}'
										+'{\\str{W = w}}'
										+'{\\html{&nbsp;}}'
										+'{\\str{Substitute the above values into the formula below:}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{Original formula:}}'
												+'{width160}'
											+'}'
											+'{\\str{<span class=hiddenSpace>-</span>P = 2L + 2W}}'
										+'}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{Substitution:}}'
												+'{width160}'
											+'}'
											+'{\\str{120 = 2 ( 4w + 10 ) + 2 ( w )}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\str{We need to simplify the right side of the equation by distributing the 2 into the parenthesis.}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{Original equation:}}'
												+'{width160}'
											+'}'
											+'{\\str{&nbsp;&nbsp;120 = 2 ( 4w + 10 ) + 2 ( w )}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{1<sup>st</sup>:}}'
												+'{width40}'
											+'}'
											+'{\\css'
												+'{\\str{Distribute the 2.}}'
												+'{width120}'
											+'}'
											+'{\\str{Multiply the&nbsp; 2 * 4w &nbsp;and&nbsp; 2 * 10}}'
										+'}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{&nbsp;}}'
												+'{width40}'
											+'}'
											+'{\\css'
												+'{\\str{Result:}}'
												+'{width120}'
											+'}'
											+'{\\str{120 = 8w + 20 + 2w}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{2<sup>nd</sup>:}}'
												+'{width40}'
											+'}'
											+'{\\css'
												+'{\\str{Add 8w and 2w.}}'
												+'{width120}'
											+'}'
											+'{\\str{&nbsp;}}'
										+'}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{&nbsp;}}'
												+'{width40}'
											+'}'
											+'{\\css'
												+'{\\str{Result:}}'
												+'{width120}'
											+'}'
											+'{\\str{120 = 10w + 20}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\str{We can now <u>isolate the variable</u> because it is on one side of the equation <strong>only</strong>.}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{3<sup>rd</sup>:}}'
												+'{width40}'
											+'}'
											+'{\\css'
												+'{\\str{Subtract 20.}}'
												+'{width120}'
											+'}'
											+'{\\str{120 - <strong>20</strong> = 10w + 20 - <strong>20</strong>}}'
										+'}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{&nbsp;}}'
												+'{width40}'
											+'}'
											+'{\\css'
												+'{\\str{Result:}}'
												+'{width120}'
											+'}'
											+'{\\str{100 = 10w}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{4<sup>th</sup>:}}'
												+'{width40}'
											+'}'
											+'{\\css'
												+'{\\str{Divide by 10.}}'
												+'{width120}'
											+'}'
											+'{\\css'
												+'{\\frac'
													+'{\\str{100}}'
													+'{\\str{<strong>10</strong>}}'
												+'}'
												+'{fracNoMargin}'
											+'}'
											+'{\\str{ = }}'
											+'{\\css'
												+'{\\frac'
													+'{\\str{10w}}'
													+'{\\str{<strong>10</strong>}}'
												+'}'
												+'{fracNoMargin}'
											+'}'
										+'}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{&nbsp;}}'
												+'{width40}'
											+'}'
											+'{\\css'
												+'{\\str{Result:}}'
												+'{width120}'
											+'}'
											+'{\\str{&nbsp;10 = w}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\str{The question asked us to solve for the width. This is what we have done, so we are done.}}'
								),
					helpAnswer: dataUtils.pre(
											  '\\grp'
												+'{\\str{width = }}'
												+'{\\str{$$ansNumber}}'
												+'{\\str{ft.}}'
						),
					template: 'flexyNextScrolls',
				}
				,
				{	// problem 20
					probQuestion: 'The perimeter of a rectangle is 44 inches. Its length is 2 inches shorter than 3 times its width. What is the width of this sandbox? ( P = 2L + 2W )',
					probStatement: dataUtils.pre(
												 '\\pan{3}{9}'
													+'{\\grp'
														+'{\\str{&nbsp;}}'
													+'}'
						),
					ansVariable: 'x',
					ansNumber: '6',
					solution: dataUtils.pre(
									'\\rowgrp'
										+'{\\css'
											+'{\\grp'
												+'{\\str{width = }}'
												+'{\\input{$$ansNumber}}'
												+'{\\str{in.}}'
											+'}'
											+'{marginLeft80px}'
										+'}'
								),
					firstTable: dataUtils.pre(
										'{\\html{&nbsp;}}'
										+'{\\str{The formula to solve for the perimeter of a rectangle is:}}'
										+'{\\html{&nbsp;}}'
										+'{\\str{P = 2L + 2W}}'
										+'{\\html{&nbsp;}}'
										+'{\\str{We know the perimeter. That is given as 44 inches.}}'
										+'{\\html{&nbsp;}}'
										+'{\\str{We are not told what the length and the width of the rectangle are. <u>Before we write an equation</u>, we must first create an algebraic expression to represent separately the <u>width</u> and <u>length</u>.}}'
										+'{\\html{&nbsp;}}'
										+'{\\str{We are told that the length (L) is \"2 in. shorter than 3 times its width (W).\" If we translate these words left to right we get:}}'
										+'{\\html{&nbsp;}}'
										+'{\\str{L = 3w - 2. So let\'s use \"3w - 2\" for the length.}}'
										+'{\\html{&nbsp;}}'
										+'{\\str{We can just let the width be \"w.\"}}'
										+'{\\html{&nbsp;}}'
										+'{\\str{Now we know that:}}'
										+'{\\html{&nbsp;}}'
										+'{\\str{P = 44}}'
										+'{\\str{L = 3w - 2}}'
										+'{\\str{W = w}}'
										+'{\\html{&nbsp;}}'
										+'{\\str{Substitute the above values into the formula below:}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{Original formula:}}'
												+'{width160}'
											+'}'
											+'{\\str{<span class=hiddenSpace>x</span>P = 2L + 2W}}'
										+'}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{Substitution:}}'
												+'{width160}'
											+'}'
											+'{\\str{44 = 2 ( 3w - 2 ) + 2( w )}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\str{We need to simplify the right side of the equation by distributing the 2 into the parenthesis.}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{Original equation:}}'
												+'{width160}'
											+'}'
											+'{\\str{&nbsp;&nbsp;44 = 2 ( 3w - 2 ) + 2( w )}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{1<sup>st</sup>:}}'
												+'{width40}'
											+'}'
											+'{\\css'
												+'{\\str{Distribute the 2.}}'
												+'{width120}'
											+'}'
											+'{\\str{Multiply the&nbsp; 2 * 3w &nbsp;and&nbsp; 2 * (-2 )}}'
										+'}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{&nbsp;}}'
												+'{width40}'
											+'}'
											+'{\\css'
												+'{\\str{Result:}}'
												+'{width120}'
											+'}'
											+'{\\str{44 = 6w - 4 + 2w}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{2<sup>nd</sup>:}}'
												+'{width40}'
											+'}'
											+'{\\css'
												+'{\\str{Add 6w and 2w.}}'
												+'{width120}'
											+'}'
											+'{\\str{&nbsp;}}'
										+'}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{&nbsp;}}'
												+'{width40}'
											+'}'
											+'{\\css'
												+'{\\str{Result:}}'
												+'{width120}'
											+'}'
											+'{\\str{44 = 8w - 4}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\str{We can now <u>isolate the variable</u> because it is on one side of the equation <strong>only</strong>.}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{3<sup>rd</sup>:}}'
												+'{width40}'
											+'}'
											+'{\\css'
												+'{\\str{Add 4.}}'
												+'{width120}'
											+'}'
											+'{\\str{44 + <strong>4</strong> = 8w - 4 + <strong>4</strong>}}'
										+'}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{&nbsp;}}'
												+'{width40}'
											+'}'
											+'{\\css'
												+'{\\str{Result:}}'
												+'{width120}'
											+'}'
											+'{\\str{48 = 8w}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{4<sup>th</sup>:}}'
												+'{width40}'
											+'}'
											+'{\\css'
												+'{\\str{Divide by 8.}}'
												+'{width120}'
											+'}'
											+'{\\css'
												+'{\\frac'
													+'{\\str{48}}'
													+'{\\str{<strong>8</strong>}}'
												+'}'
												+'{fracNoMargin}'
											+'}'
											+'{\\str{ = }}'
											+'{\\css'
												+'{\\frac'
													+'{\\str{8w}}'
													+'{\\str{<strong>8</strong>}}'
												+'}'
												+'{fracNoMargin}'
											+'}'
										+'}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{&nbsp;}}'
												+'{width40}'
											+'}'
											+'{\\css'
												+'{\\str{Result:}}'
												+'{width120}'
											+'}'
											+'{\\str{&nbsp;6 = w}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\str{The question asked us to solve for the width. This is what we have done, so we are done.}}'
								),
					helpAnswer: dataUtils.pre(
											  '\\grp'
												+'{\\str{width = }}'
												+'{\\str{$$ansNumber}}'
												+'{\\str{in.}}'
						),
					template: 'flexyNextScrolls',
				}
				,
				{	// problem 21
					probQuestion: 'The circumference of a circle is 49 centimeters. Solve for the radius (use 3.14 for &pi; and round answer to the nearest tenths place).',
					probStatement: dataUtils.pre(
												 '\\pan{3}{9}'
													+'{\\grp'
														+'{\\str{&nbsp;}}'
													+'}'
						),
					ansVariable: 'x',
					ansNumber: '7.8',
					solution: dataUtils.pre(
									'\\rowgrp'
										+'{\\css'
											+'{\\grp'
												+'{\\str{radius = }}'
												+'{\\input{$$ansNumber}}'
												+'{\\str{cm.}}'
											+'}'
											+'{marginLeft80px}'
										+'}'
								),
					firstTable: dataUtils.pre(
										'{\\html{&nbsp;}}'
										+'{\\str{The formula to solve for the circumference is:}}'
										+'{\\html{&nbsp;}}'
										+'{\\str{C = &pi; * d &nbsp;or&nbsp; C = &pi; * 2 * r}}'
										+'{\\html{&nbsp;}}'
										+'{\\str{Since we are trying to solve for the radius, let\'s use the formula:}}'
										+'{\\html{&nbsp;}}'
										+'{\\str{C = &pi; * 2 * r}}'
										+'{\\html{&nbsp;}}'
										+'{\\str{We know the circumference. That is given as 49 centimeters. We are also told to use 3.14 for &pi;.}}'
										+'{\\html{&nbsp;}}'
										+'{\\str{Our unknown in the formula is the radius (r).}}'
										+'{\\html{&nbsp;}}'
										+'{\\str{Substitute the above values into the formula below:}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{Original formula:}}'
												+'{width160}'
											+'}'
											+'{\\str{<span class=hiddenSpace>x</span>C = &pi; * 2 * r}}'
										+'}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{Substitution:}}'
												+'{width160}'
											+'}'
											+'{\\str{49 = 3.14 * 2 * r}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\str{which is the same as: 49 = 6.28r}}'
										+'{\\html{&nbsp;}}'
										+'{\\str{Solve the equation by isolating the variable.}}'
										+'{\\html{&nbsp;}}'
										+'{\\str{We get 7.802547... }}'
										+'{\\html{&nbsp;}}'
										+'{\\str{Round answer to the tenths place.}}'
								),
					helpAnswer: dataUtils.pre(
											  '\\grp'
												+'{\\str{radius = }}'
												+'{\\str{$$ansNumber}}'
												+'{\\str{cm.}}'
						),
					template: 'flexyNextScrolls',
				}
				,
				{	// problem 22
					probQuestion: 'The circumference of a circle is 130 yards. Solve for the radius (use 3.14 for &pi; and round answer to the nearest tenths place).',
					probStatement: dataUtils.pre(
												 '\\pan{3}{9}'
													+'{\\grp'
														+'{\\str{&nbsp;}}'
													+'}'
						),
					ansVariable: 'x',
					ansNumber: '20.7',
					solution: dataUtils.pre(
									'\\rowgrp'
										+'{\\css'
											+'{\\grp'
												+'{\\str{radius = }}'
												+'{\\input{$$ansNumber}}'
												+'{\\str{yd.}}'
											+'}'
											+'{marginLeft80px}'
										+'}'
								),
					firstTable: dataUtils.pre(
										'{\\html{&nbsp;}}'
										+'{\\str{The formula to solve for the circumference is:}}'
										+'{\\html{&nbsp;}}'
										+'{\\str{C = &pi; * d &nbsp;or&nbsp; C = &pi; * 2 * r}}'
										+'{\\html{&nbsp;}}'
										+'{\\str{Since we are trying to solve for the radius, let\'s use the formula:}}'
										+'{\\html{&nbsp;}}'
										+'{\\str{C = &pi; * 2 * r}}'
										+'{\\html{&nbsp;}}'
										+'{\\str{We know the circumference. That is given as 130 yards. We are also told to use 3.14 for &pi;.}}'
										+'{\\html{&nbsp;}}'
										+'{\\str{Our unknown in the formula is the radius (r).}}'
										+'{\\html{&nbsp;}}'
										+'{\\str{Substitute the above values into the formula below:}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{Original formula:}}'
												+'{width160}'
											+'}'
											+'{\\str{<span class=hiddenSpace>x</span>C = &pi; * 2 * r}}'
										+'}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{Substitution:}}'
												+'{width160}'
											+'}'
											+'{\\str{130 = 3.14 * 2 * r}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\str{which is the same as: 130 = 6.28r}}'
										+'{\\html{&nbsp;}}'
										+'{\\str{Solve the equation by isolating the variable.}}'
										+'{\\html{&nbsp;}}'
										+'{\\str{We get 20.70063... }}'
										+'{\\html{&nbsp;}}'
										+'{\\str{Round answer to the tenths place.}}'
								),
					helpAnswer: dataUtils.pre(
											  '\\grp'
												+'{\\str{radius = }}'
												+'{\\str{$$ansNumber}}'
												+'{\\str{yd.}}'
						),
					template: 'flexyNextScrolls',
				}
				,
				{	// problem 23
					probQuestion: 'The area of a triangle is 40 square feet. If the base of the triangle is 8 feet, what is the height of the triangle?',
					probStatement: dataUtils.pre(
												 '\\pan{3}{9}'
													+'{\\grp'
														+'{\\str{&nbsp;}}'
													+'}'
						),
					ansNumber: '10',
					solution: dataUtils.pre(
									'\\rowgrp'
										+'{\\css'
											+'{\\grp'
												+'{\\str{height = }}'
												+'{\\input{$$ansNumber}}'
												+'{\\str{ft.}}'
											+'}'
											+'{marginLeft80px}'
										+'}'
								),
					firstTable: dataUtils.pre(
										'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\str{The formula to solve for the area is:&nbsp; A = }}'
											+'{\\css'
												+'{\\frac'
													+'{\\str{1}}'
													+'{\\str{2}}'
												+'}'
												+'{fracNoMargin}'
											+'}'
											+'{\\str{* b * h}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\str{The area (A) = 40.}}'
										+'{\\html{&nbsp;}}'
										+'{\\str{The base (b) = 8.}}'
										+'{\\html{&nbsp;}}'
										+'{\\str{Our unknown in the formula is the height (h).}}'
										+'{\\html{&nbsp;}}'
										+'{\\str{Substitute the above values into the formula below:}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{Original formula:}}'
												+'{width160}'
											+'}'
											+'{\\grp'
												+'{\\str{A = }}'
												+'{\\css'
													+'{\\frac'
														+'{\\str{1}}'
														+'{\\str{2}}'
													+'}'
													+'{fracNoMargin}'
												+'}'
												+'{\\str{* b * h}}'
											+'}'
										+'}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{Substitution:}}'
												+'{width160}'
											+'}'
											+'{\\grp'
												+'{\\str{40 = }}'
												+'{\\css'
													+'{\\frac'
														+'{\\str{1}}'
														+'{\\str{2}}'
													+'}'
													+'{fracNoMargin}'
												+'}'
												+'{\\str{* 8 * h}}'
											+'}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{which is the same as:}}'
												+'{width160}'
											+'}'
											+'{\\str{&nbsp;40 = 4h}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\str{Solve the equation by isolating the variable.}}'
								),
					helpAnswer: dataUtils.pre(
											  '\\grp'
												+'{\\str{base = }}'
												+'{\\str{$$ansNumber}}'
												+'{\\str{ft.}}'
						),
					template: 'flexyNextScrolls',
				}
				,
				{	// problem 24
					probQuestion: 'The area of a triangle is 78 square feet. If the height of the triangle is 12 feet, what is the base of the triangle?',
					probStatement: dataUtils.pre(
												 '\\pan{3}{9}'
													+'{\\grp'
														+'{\\str{&nbsp;}}'
													+'}'
						),
					ansNumber: '13',
					solution: dataUtils.pre(
									'\\rowgrp'
										+'{\\css'
											+'{\\grp'
												+'{\\str{height = }}'
												+'{\\input{$$ansNumber}}'
												+'{\\str{ft.}}'
											+'}'
											+'{marginLeft80px}'
										+'}'
								),
					firstTable: dataUtils.pre(
										'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\str{The formula to solve for the area is:&nbsp; A = }}'
											+'{\\css'
												+'{\\frac'
													+'{\\str{1}}'
													+'{\\str{2}}'
												+'}'
												+'{fracNoMargin}'
											+'}'
											+'{\\str{* b * h}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\str{The area (A) = 78.}}'
										+'{\\html{&nbsp;}}'
										+'{\\str{The height (h) = 12.}}'
										+'{\\html{&nbsp;}}'
										+'{\\str{Our unknown in the formula is the base (b).}}'
										+'{\\html{&nbsp;}}'
										+'{\\str{Substitute the above values into the formula below:}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{Original formula:}}'
												+'{width160}'
											+'}'
											+'{\\grp'
												+'{\\str{A = }}'
												+'{\\css'
													+'{\\frac'
														+'{\\str{1}}'
														+'{\\str{2}}'
													+'}'
													+'{fracNoMargin}'
												+'}'
												+'{\\str{* b * h}}'
											+'}'
										+'}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{Substitution:}}'
												+'{width160}'
											+'}'
											+'{\\grp'
												+'{\\str{78 = }}'
												+'{\\css'
													+'{\\frac'
														+'{\\str{1}}'
														+'{\\str{2}}'
													+'}'
													+'{fracNoMargin}'
												+'}'
												+'{\\str{* b * 12}}'
											+'}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{which is the same as:}}'
												+'{width160}'
											+'}'
											+'{\\str{&nbsp;78 = 6b}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\str{Solve the equation by isolating the variable.}}'
								),
					helpAnswer: dataUtils.pre(
											  '\\grp'
												+'{\\str{base = }}'
												+'{\\str{$$ansNumber}}'
												+'{\\str{ft.}}'
						),
					template: 'flexyNextScrolls',
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

