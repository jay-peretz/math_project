/*global angular */

angular.module('mathSkills').service('data_bb_1', ['dataUtils', function (dataUtils) {
    var desc = {
			title: 'BB.1 Evaluating Algebraic Expressions',
    		path: 'bb.1-evaluating-algebraic-expressions',
            children: []
        },
	        template = {
			// first template, integers operation
			main: {
                title: 'Evaluating Algebraic Expressions',
                children: [{
                    title: 'Main Answer',
                    children: [{
						problem: '\\rowgrp'
									+'{\\str{If&nbsp; $variableOneValue$variableTwoValue<span class=large>,</span>&nbsp; evaluate the following expression:}}'
									+'{\\html{&nbsp;}}'
									+'{\\str{$expression}}',
						answer: '\\rowgrp'+
										'{\\grp'
											+'{\\input{$answer}}'
										+'}',
						controls: {
								"checkAnswer": true,
								"help": '\\rowgrp'
											+'$firstLines'
											+'{\\html{&nbsp;}}'
											+'$firstTable'
											+'{\\html{&nbsp;}}'
											+'{css'
												+'{\\str{Answer:  $textAnswer}}'
												+'{help-answer-text}'
											+'}'
											+'{\\html{&nbsp;}}'
						}
					}]
				}]
			}
			,
			flexy: {
                title: 'Evaluating Algebraic Expressions',
                children: [{
                    title: 'Main Answer',
                    children: [{
						problem: '$stateProblem',
						answer: '$solution',
						controls: {
								"checkAnswer": true,
								"help": '\\rowgrp'
											+'$firstLines'
											+'{\\html{&nbsp;}}'
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
					variableOneValue: 'x = -3',
                    variableTwoValue: '',
					expression: 'x<sup> 2</sup> + x',
					substitution: '(-3 )<sup> 2</sup> + (-3 )',
					firstLines: dataUtils.pre(
										'{\\str{Whenever you substitute a number value for a variable, put that number inside a parenthesis.}}'
										+'{\\str{&nbsp;}}'
										+'{\\str{Therefore:  $$expression&nbsp; is the same as&nbsp; $$substitution}}'
										+'{\\str{&nbsp;}}'
										+'{\\str{Follow order of operations to evaluate the problem.}}'
									),
					firstTable: dataUtils.pre(
									'{\\html{'
										+'<table>'
											+'<tr>'
												+'<td>'
													+'1st: Solve the exponent.'
												+'</td>'
												+'<td>'
													+'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
												+'</td>'
												+'<td>'
													+'(<span class=bigger>-</span>3 )<sup> 2</sup> <span>+</span> (<span class=bigger>-</span>3 )'
												+'</td>'
											+'</tr>'
											+'<tr>'
												+'<td>'
													+'2nd: Combine the value.'
												+'</td>'
												+'<td>'
													+'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
												+'</td>'
												+'<td>'
													+'9 <span>+</span> (<span class=bigger>-</span>3 )'
												+'</td>'
											+'</tr>'
											+'<tr>'
												+'<td>'
													+'&nbsp;&nbsp;&nbsp;'
												+'</td>'
												+'<td>'
													+'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
												+'</td>'
												+'<td>'
													+'6'
												+'</td>'
											+'</tr>'
										+'</table>'
									+'}}'
								),
					textAnswer: ' &nbsp; 6',
					answer: '6',
					template: 'main',
				}
				,
				{	// problem 2
					variableOneValue: 'y = -5',
                    variableTwoValue: '',
					expression: 'y<sup> 2</sup> + y',
					substitution: '(-5 )<sup> 2</sup> + (-5 )',
					firstLines: dataUtils.pre(
										'{\\str{Whenever you substitute a number value for a variable, put that number inside a parenthesis.}}'
										+'{\\str{&nbsp;}}'
										+'{\\str{Therefore:  $$expression&nbsp; is the same as&nbsp; $$substitution}}'
										+'{\\str{&nbsp;}}'
										+'{\\str{Follow order of operations to evaluate the problem.}}'
									),
					firstTable: dataUtils.pre(
									'{\\html{'
										+'<table>'
											+'<tr>'
												+'<td>'
													+'1st: Solve the exponent.'
												+'</td>'
												+'<td>'
													+'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
												+'</td>'
												+'<td>'
													+'(<span class=bigger>-</span>5 )<sup> 2</sup> <span>+</span> (<span class=bigger>-</span>5 )'
												+'</td>'
											+'</tr>'
											+'<tr>'
												+'<td>'
													+'2nd: Combine the value.'
												+'</td>'
												+'<td>'
													+'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
												+'</td>'
												+'<td>'
													+'25 <span>+</span> (<span class=bigger>-</span>5 )'
												+'</td>'
											+'</tr>'
											+'<tr>'
												+'<td>'
													+'&nbsp;&nbsp;&nbsp;'
												+'</td>'
												+'<td>'
													+'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
												+'</td>'
												+'<td>'
													+'20'
												+'</td>'
											+'</tr>'
										+'</table>'
									+'}}'
								),
					textAnswer: ' &nbsp; 20',
					answer: '20',
					template: 'main',
				}
				,
				{	// problem 3
					variableOneValue: 'm = -4',
                    variableTwoValue: '',
					expression: '-m<sup> 2</sup>',
					substitution: '-(-4 )<sup> 2</sup>',
					firstLines: dataUtils.pre(
										'{\\str{Whenever you substitute a number value for a variable, put that number inside a parenthesis.}}'
										+'{\\str{&nbsp;}}'
										+'{\\str{Therefore:  $$expression&nbsp; is the same as&nbsp; $$substitution}}'
										+'{\\str{&nbsp;}}'
										+'{\\str{Follow order of operations to evaluate the problem.}}'
									),
					firstTable: dataUtils.pre(
									'{\\html{'
										+'<table>'
											+'<tr>'
												+'<td>'
													+'1st: Solve the exponent.'
												+'</td>'
												+'<td>'
													+'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
												+'</td>'
												+'<td>'
													+'<span class=bigger>-</span>(<span class=bigger>-</span>4 )<sup> 2</sup>'
												+'</td>'
											+'</tr>'
											+'<tr>'
												+'<td>'
													+'2nd: Distribute the sign.'
												+'</td>'
												+'<td>'
													+'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
												+'</td>'
												+'<td>'
													+'<span class=bigger>-</span>( 16 )'
												+'</td>'
											+'</tr>'
											+'<tr>'
												+'<td>'
													+'&nbsp;&nbsp;&nbsp;'
												+'</td>'
												+'<td>'
													+'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
												+'</td>'
												+'<td>'
													+'<span class=bigger>-</span>16'
												+'</td>'
											+'</tr>'
										+'</table>'
									+'}}'
								),
					textAnswer: ' &nbsp; -16',
					answer: '-16',
					template: 'main',
				}
				,
				{	// problem 4
					variableOneValue: 'n = -6',
                    variableTwoValue: '',
					expression: '-n<sup> 2</sup>',
					substitution: '-(-6 )<sup> 2</sup>',
					firstLines: dataUtils.pre(
										'{\\str{Whenever you substitute a number value for a variable, put that number inside a parenthesis.}}'
										+'{\\str{&nbsp;}}'
										+'{\\str{Therefore:  $$expression&nbsp; is the same as&nbsp; $$substitution}}'
										+'{\\str{&nbsp;}}'
										+'{\\str{Follow order of operations to evaluate the problem.}}'
									),
					firstTable: dataUtils.pre(
									'{\\html{'
										+'<table>'
											+'<tr>'
												+'<td>'
													+'1st: Solve the exponent.'
												+'</td>'
												+'<td>'
													+'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
												+'</td>'
												+'<td>'
													+'<span class=bigger>-</span>(<span class=bigger>-</span>6 )<sup> 2</sup>'
												+'</td>'
											+'</tr>'
											+'<tr>'
												+'<td>'
													+'2nd: Distribute the sign.'
												+'</td>'
												+'<td>'
													+'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
												+'</td>'
												+'<td>'
													+'<span class=bigger>-</span>( 36 )'
												+'</td>'
											+'</tr>'
											+'<tr>'
												+'<td>'
													+'&nbsp;&nbsp;&nbsp;'
												+'</td>'
												+'<td>'
													+'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
												+'</td>'
												+'<td>'
													+'<span class=bigger>-</span>36'
												+'</td>'
											+'</tr>'
										+'</table>'
									+'}}'
								),
					textAnswer: ' &nbsp; -36',
					answer: '-36',
					template: 'main',
				}
				,
				{	// problem 5
					variableOneValue: 'x = -4',
					variableTwoValue: '&nbsp;&nbsp;and&nbsp; y <span class=bigger>=</span>-1',
					expression: 'y<sup> 3</sup> - x',
					substitution: '(-1 )<sup> 3</sup> - (-4 )',
					firstLines: dataUtils.pre(
										'{\\str{Whenever you substitute a number value for a variable, put that number inside a parenthesis.}}'
										+'{\\str{&nbsp;}}'
										+'{\\str{Therefore:  $$expression&nbsp; is the same as&nbsp; $$substitution}}'
										+'{\\str{&nbsp;}}'
										+'{\\str{Follow order of operations to evaluate the problem.}}'
									),
					firstTable: dataUtils.pre(
									'{\\html{'
										+'<table>'
											+'<tr>'
												+'<td>'
													+'1st: Solve the exponent.'
												+'</td>'
												+'<td>'
													+'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
												+'</td>'
												+'<td>'
													+'<span class=bigger>-</span>( 1 )<sup> 3</sup>'
												+'</td>'
											+'</tr>'
											+'<tr>'
												+'<td>'
													+'2nd: Combine the values.'
												+'</td>'
												+'<td>'
													+'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
												+'</td>'
												+'<td>'
													+'<span class=bigger>-</span>1 <span class=bigger>-</span> (<span class=bigger>-</span>4 )'
												+'</td>'
											+'</tr>'
											+'<tr>'
												+'<td>'
													+'&nbsp;&nbsp;&nbsp;'
												+'</td>'
												+'<td>'
													+'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
												+'</td>'
												+'<td>'
													+'&nbsp;3'
												+'</td>'
											+'</tr>'
										+'</table>'
									+'}}'
								),
					textAnswer: ' &nbsp; 3',
					answer: '3',
					template: 'main',
				}
				,
				{	// problem 6
					variableOneValue: 'a = -7',
					variableTwoValue: '&nbsp;&nbsp;and&nbsp; b <span class=bigger>=</span>-2',
					expression: 'b<sup> 3</sup> - a',
					substitution: '(-2 )<sup> 3</sup> - (-7 )',
					firstLines: dataUtils.pre(
										'{\\str{Whenever you substitute a number value for a variable, put that number inside a parenthesis.}}'
										+'{\\str{&nbsp;}}'
										+'{\\str{Therefore:  $$expression&nbsp; is the same as&nbsp; $$substitution}}'
										+'{\\str{&nbsp;}}'
										+'{\\str{Follow order of operations to evaluate the problem.}}'
									),
					firstTable: dataUtils.pre(
									'{\\html{'
										+'<table>'
											+'<tr>'
												+'<td>'
													+'1st: Solve the exponent.'
												+'</td>'
												+'<td>'
													+'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
												+'</td>'
												+'<td>'
													+'<span class=bigger>-</span>( 2 )<sup> 3</sup>'
												+'</td>'
											+'</tr>'
											+'<tr>'
												+'<td>'
													+'2nd: Combine the values.'
												+'</td>'
												+'<td>'
													+'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
												+'</td>'
												+'<td>'
													+'<span class=bigger>-</span>8 <span class=bigger>-</span> (<span class=bigger>-</span>7 )'
												+'</td>'
											+'</tr>'
											+'<tr>'
												+'<td>'
													+'&nbsp;&nbsp;&nbsp;'
												+'</td>'
												+'<td>'
													+'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
												+'</td>'
												+'<td>'
													+'<span class=bigger>-</span>1'
												+'</td>'
											+'</tr>'
										+'</table>'
									+'}}'
								),
					textAnswer: ' &nbsp; -1',
					answer: '-1',
					template: 'main',
				}
				,
				{	// problem 7
					variableOneValue: 'a = 2.3',
					variableTwoValue: '&nbsp;&nbsp;and&nbsp; b <span class=bigger>=</span>-3.4',
					expression: '-a - 2b',
					substitution: '-( 2.3 ) - 2(-3.4 )',
					firstLines: dataUtils.pre(
										'{\\str{Whenever you substitute a number value for a variable, put that number inside a parenthesis.}}'
										+'{\\str{&nbsp;}}'
										+'{\\str{Therefore:  $$expression&nbsp; is the same as&nbsp; $$substitution}}'
										+'{\\str{&nbsp;}}'
										+'{\\str{Follow order of operations to evaluate the problem.}}'
									),
					firstTable: dataUtils.pre(
									'{\\html{'
										+'<table>'
											+'<tr>'
												+'<td>'
													+'1st: Multiply.'
												+'</td>'
												+'<td>'
													+'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
												+'</td>'
												+'<td>'
													+'<span class=bigger>-</span>( 2.3 ) <span class=bigger>-</span> 2(<span class=bigger>-</span>3.4 )'
												+'</td>'
											+'</tr>'
											+'<tr>'
												+'<td>'
													+'2nd: Combine the values.'
												+'</td>'
												+'<td>'
													+'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
												+'</td>'
												+'<td>'
													+'<span class=bigger>-</span>2.3 + 6.8'
												+'</td>'
											+'</tr>'
											+'<tr>'
												+'<td>'
													+'&nbsp;&nbsp;&nbsp;'
												+'</td>'
												+'<td>'
													+'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
												+'</td>'
												+'<td>'
													+'&nbsp;4.5'
												+'</td>'
											+'</tr>'
										+'</table>'
									+'}}'
								),
					textAnswer: ' &nbsp; 4.5',
					answer: '4.5',
					template: 'main',
				}
				,
				{	// problem 8
					variableOneValue: 'x = 5.75',
					variableTwoValue: '&nbsp;&nbsp;and&nbsp; y <span class=bigger>=</span>-3.6',
					expression: '-x - 2y',
					substitution: '-( 5.75 ) - 2(-3.6 )',
					firstLines: dataUtils.pre(
										'{\\str{Whenever you substitute a number value for a variable, put that number inside a parenthesis.}}'
										+'{\\str{&nbsp;}}'
										+'{\\str{Therefore:  $$expression&nbsp; is the same as&nbsp; $$substitution}}'
										+'{\\str{&nbsp;}}'
										+'{\\str{Follow order of operations to evaluate the problem.}}'
									),
					firstTable: dataUtils.pre(
									'{\\html{'
										+'<table>'
											+'<tr>'
												+'<td>'
													+'1st: Multiply.'
												+'</td>'
												+'<td>'
													+'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
												+'</td>'
												+'<td>'
													+'<span class=bigger>-</span>( 5.75 ) <span class=bigger>-</span> 2(<span class=bigger>-</span>3.6 )'
												+'</td>'
											+'</tr>'
											+'<tr>'
												+'<td>'
													+'2nd: Combine the values.'
												+'</td>'
												+'<td>'
													+'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
												+'</td>'
												+'<td>'
													+'<span class=bigger>-</span>5.75 + 7.2'
												+'</td>'
											+'</tr>'
											+'<tr>'
												+'<td>'
													+'&nbsp;&nbsp;&nbsp;'
												+'</td>'
												+'<td>'
													+'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
												+'</td>'
												+'<td>'
													+'&nbsp;1.45'
												+'</td>'
											+'</tr>'
										+'</table>'
									+'}}'
								),
					textAnswer: ' &nbsp; 1.45',
					answer: '1.45',
					template: 'main',
				}
				,
				{	// problem 9
					stateProblem: dataUtils.pre(
										'\\rowgrp'
											+'{\\grp'
												+'{\\str{If&nbsp;&nbsp; x = }}'
												+'{\\css'
													+'{\\mixed{\\str{-}}{\\frac{\\str{3}}{\\str{4}}}}'
													+'{fracNoMargin}'
												+'}'
												+'{\\str{&nbsp; and &nbsp; y = }}'
												+'{\\css'
													+'{\\frac{\\str{3}}{\\str{2}}}'
													+'{fracNoMargin}'
												+'}'
												+'{\\str{<span class=fontsize125>,</span>}}'
											+'}'
											+'{\\css'
												+'{\\str{&nbsp;}}'
												+'{lineheight40}'
											+'}'
											+'{\\str{evaluate the following expression<span class=fontsize110>:</span>}}'
											+'{\\html{&nbsp;}}'
											+'{\\str{$expression}}'
									),
					solution: dataUtils.pre(
								'\\rowgrp'
									+'{\\str{$$answerInstructions}}'
									+'{\\frac{\\input{$$numAnswer}}{\\input{$$denAnswer}}}'
						),
					answerInstructions: '',
					numAnswer: '27',
					denAnswer: '16',
					expression: '-x<sup>2</sup> + y<sup>2</sup>',
					firstLines: dataUtils.pre(
										'{\\str{Whenever you substitute a number value for a variable, put that number inside a parenthesis.}}'
										+'{\\str{&nbsp;}}'
										+'{\\str{Therefore:  $$expression&nbsp; is the same as:}}'
										+'{\\str{&nbsp;}}'
										+'{\\grp'
											+'{\\exp'
												+'{\\grp'
													+'{\\str{-}}'
													+'{\\str{(}}'
													+'{\\css'
														+'{\\mixed{\\str{-}}{\\frac{\\str{3}}{\\str{4}}}}'
														+'{fracNoMargin}'
													+'}'
													+'{\\str{)}}'
												+'}'
												+'{\\str{2}}'
											+'}'
											+'{\\str{&nbsp; + &nbsp;}}'
											+'{\\exp'
												+'{\\grp'
													+'{\\str{(}}'
													+'{\\css'
														+'{\\frac{\\str{3}}{\\str{2}}}'
														+'{fracNoMargin}'
													+'}'
													+'{\\str{)}}'
												+'}'
												+'{\\str{2}}'
											+'}'
										+'}'
										+'{\\str{&nbsp;}}'
										+'{\\str{Follow order of operations to evaluate the problem.}}'
									),
					firstTable: dataUtils.pre(
											'{\\grp'
												+'{\\str{1st: Solve the exponents.}}'
												+'{\\grp'
													+'{\\exp'
														+'{\\grp'
															+'{\\str{-}}'
															+'{\\str{(}}'
															+'{\\css'
																+'{\\mixed{\\str{-}}{\\frac{\\str{3}}{\\str{4}}}}'
																+'{fracNoMargin}'
															+'}'
															+'{\\str{)}}'
														+'}'
														+'{\\str{2}}'
													+'}'
													+'{\\str{&nbsp; + &nbsp;}}'
													+'{\\exp'
														+'{\\grp'
															+'{\\str{(}}'
															+'{\\css'
																+'{\\frac{\\str{3}}{\\str{2}}}'
																+'{fracNoMargin}'
															+'}'
															+'{\\str{)}}'
														+'}'
														+'{\\str{2}}'
													+'}'
												+'}'
											+'}'
											+'{\\str{&nbsp;}}'
											+'{\\grp'
												+'{\\str{2nd: Combine the values.&nbsp;&nbsp;}}'
												+'{\\str{-}}'
												+'{\\str{(}}'
												+'{\\css'
													+'{\\mixed{\\str{}}{\\frac{\\str{9}}{\\str{16}}}}'
													+'{fracNoMargin}'
												+'}'
												+'{\\str{)}}'
												+'{\\str{&nbsp; + &nbsp;}}'
												+'{\\str{(}}'
												+'{\\css'
													+'{\\frac{\\str{9}}{\\str{4}}}'
													+'{fracNoMargin}'
												+'}'
												+'{\\str{)}}'
											+'}'
											+'{\\str{&nbsp;}}'
											+'{\\grp'
												+'{\\str{<span class=marginLeft198px>&nbsp;&nbsp;&nbsp;}}'
												+'{\\frac{\\str{$$numAnswer}}{\\str{$$denAnswer}}}'
											+'}'
										),
					helpAnswer: dataUtils.pre(
								'\\frac{\\str{$$numAnswer}}{\\str{$$denAnswer}}'
						),
					template: 'flexy',
				}
				,
				{	// problem 10
					stateProblem: dataUtils.pre(
										'\\rowgrp'
											+'{\\grp'
												+'{\\str{If&nbsp;&nbsp; a = }}'
												+'{\\css'
													+'{\\mixed{\\str{-}}{\\frac{\\str{3}}{\\str{10}}}}'
													+'{fracNoMargin}'
												+'}'
												+'{\\str{&nbsp; and &nbsp; b = }}'
												+'{\\css'
													+'{\\frac{\\str{2}}{\\str{5}}}'
													+'{fracNoMargin}'
												+'}'
												+'{\\str{<span class=fontsize125>,</span>}}'
											+'}'
											+'{\\css'
												+'{\\str{&nbsp;}}'
												+'{lineheight40}'
											+'}'
											+'{\\str{evaluate the following expression<span class=fontsize110>:</span>}}'
											+'{\\html{&nbsp;}}'
											+'{\\str{$expression}}'
									),
					solution: dataUtils.pre(
								'\\rowgrp'
									+'{\\str{$$answerInstructions}}'
									+'{\\frac{\\input{$$numAnswer}}{\\input{$$denAnswer}}}'
						),
					answerInstructions: '',
					numAnswer: '7',
					denAnswer: '100',
					expression: '-a<sup>2</sup> + b<sup>2</sup>',
					firstLines: dataUtils.pre(
										'{\\str{Whenever you substitute a number value for a variable, put that number inside a parenthesis.}}'
										+'{\\str{&nbsp;}}'
										+'{\\str{Therefore:  $$expression&nbsp; is the same as:}}'
										+'{\\str{&nbsp;}}'
										+'{\\grp'
											+'{\\exp'
												+'{\\grp'
													+'{\\str{-}}'
													+'{\\str{(}}'
													+'{\\css'
														+'{\\mixed{\\str{-}}{\\frac{\\str{3}}{\\str{10}}}}'
														+'{fracNoMargin}'
													+'}'
													+'{\\str{)}}'
												+'}'
												+'{\\str{2}}'
											+'}'
											+'{\\str{&nbsp; + &nbsp;}}'
											+'{\\exp'
												+'{\\grp'
													+'{\\str{(}}'
													+'{\\css'
														+'{\\frac{\\str{2}}{\\str{5}}}'
														+'{fracNoMargin}'
													+'}'
													+'{\\str{)}}'
												+'}'
												+'{\\str{2}}'
											+'}'
										+'}'
										+'{\\str{&nbsp;}}'
										+'{\\str{Follow order of operations to evaluate the problem.}}'
									),
					firstTable: dataUtils.pre(
											'{\\grp'
												+'{\\str{1st: Solve the exponents.}}'
												+'{\\grp'
													+'{\\exp'
														+'{\\grp'
															+'{\\str{-}}'
															+'{\\str{(}}'
															+'{\\css'
																+'{\\mixed{\\str{-}}{\\frac{\\str{3}}{\\str{10}}}}'
																+'{fracNoMargin}'
															+'}'
															+'{\\str{)}}'
														+'}'
														+'{\\str{2}}'
													+'}'
													+'{\\str{&nbsp; + &nbsp;}}'
													+'{\\exp'
														+'{\\grp'
															+'{\\str{(}}'
															+'{\\css'
																+'{\\frac{\\str{2}}{\\str{5}}}'
																+'{fracNoMargin}'
															+'}'
															+'{\\str{)}}'
														+'}'
														+'{\\str{2}}'
													+'}'
												+'}'
											+'}'
											+'{\\str{&nbsp;}}'
											+'{\\grp'
												+'{\\str{2nd: Combine the values.&nbsp;&nbsp;}}'
												+'{\\str{-}}'
												+'{\\str{(}}'
												+'{\\css'
													+'{\\mixed{\\str{}}{\\frac{\\str{9}}{\\str{100}}}}'
													+'{fracNoMargin}'
												+'}'
												+'{\\str{)}}'
												+'{\\str{&nbsp; + &nbsp;}}'
												+'{\\str{(}}'
												+'{\\css'
													+'{\\frac{\\str{4}}{\\str{25}}}'
													+'{fracNoMargin}'
												+'}'
												+'{\\str{)}}'
											+'}'
											+'{\\str{&nbsp;}}'
											+'{\\grp'
												+'{\\str{<span class=marginLeft198px>&nbsp;&nbsp;&nbsp;}}'
												+'{\\frac{\\str{$$numAnswer}}{\\str{$$denAnswer}}}'
											+'}'
										),
					helpAnswer: dataUtils.pre(
								'\\frac{\\str{$$numAnswer}}{\\str{$$denAnswer}}'
						),
					template: 'flexy',
				}
				,
				{	// problem 11
					variableOneValue: 'm = -2',
					variableTwoValue: '&nbsp;&nbsp;and&nbsp; n <span class=bigger>=</span>-8',
					expression: '-3m<sup> 2</sup> - n<sup> 2</sup>',
					substitution: '-3(-2 )<sup> 2</sup> - (-8 )<sup> 2</sup>',
					firstLines: dataUtils.pre(
										'{\\str{Whenever you substitute a number value for a variable, put that number inside a parenthesis.}}'
										+'{\\str{&nbsp;}}'
										+'{\\str{Therefore:  $$expression&nbsp; is the same as&nbsp; $$substitution}}'
										+'{\\str{&nbsp;}}'
										+'{\\str{Follow order of operations to evaluate the problem.}}'
									),
					firstTable: dataUtils.pre(
									'{\\html{'
										+'<table>'
											+'<tr>'
												+'<td>'
													+'1st: Solve the exponent.'
												+'</td>'
												+'<td>'
													+'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
												+'</td>'
												+'<td>'
													+'<span class=bigger>-</span>3(<span class=bigger>-</span>2 )<sup> 2</sup> <span class=bigger>-</span> (<span class=bigger>-</span>8 )<sup> 2</sup>'
												+'</td>'
											+'</tr>'
											+'<tr>'
												+'<td>'
													+'2nd: Multiply.'
												+'</td>'
												+'<td>'
													+'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
												+'</td>'
												+'<td>'
													+' <span class=bigger>-</span>3( 4 ) <span class=bigger>-</span> (64)'
												+'</td>'
											+'</tr>'
											+'<tr>'
												+'<td>'
													+'3rd: Combine.'
												+'</td>'
												+'<td>'
													+'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
												+'</td>'
												+'<td>'
													+'<span class=bigger>-</span>12  <span class=bigger>-</span> (64)'
												+'</td>'
											+'</tr>'
											+'<tr>'
												+'<td>'
													+'&nbsp;&nbsp;&nbsp;'
												+'</td>'
												+'<td>'
													+'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
												+'</td>'
												+'<td>'
													+'<span class=bigger>-</span>76'
												+'</td>'
											+'</tr>'
										+'</table>'
									+'}}'
								),
					textAnswer: ' &nbsp; -76',
					answer: '-76',
					template: 'main',
				}
				,
				{	// problem 12
					variableOneValue: 'x = -3',
					variableTwoValue: '&nbsp;&nbsp;and&nbsp; y <span class=bigger>=</span>-5',
					expression: '-4x<sup> 2</sup> - y<sup> 2</sup>',
					substitution: '-4(-3 )<sup> 2</sup> - (-5 )<sup> 2</sup>',
					firstLines: dataUtils.pre(
										'{\\str{Whenever you substitute a number value for a variable, put that number inside a parenthesis.}}'
										+'{\\str{&nbsp;}}'
										+'{\\str{Therefore:  $$expression&nbsp; is the same as&nbsp; $$substitution}}'
										+'{\\str{&nbsp;}}'
										+'{\\str{Follow order of operations to evaluate the problem.}}'
									),
					firstTable: dataUtils.pre(
									'{\\html{'
										+'<table>'
											+'<tr>'
												+'<td>'
													+'1st: Solve the exponent.'
												+'</td>'
												+'<td>'
													+'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
												+'</td>'
												+'<td>'
													+'<span class=bigger>-</span>4(<span class=bigger>-</span>3 )<sup> 2</sup> <span class=bigger>-</span> (<span class=bigger>-</span>5 )<sup> 2</sup>'
												+'</td>'
											+'</tr>'
											+'<tr>'
												+'<td>'
													+'2nd: Multiply.'
												+'</td>'
												+'<td>'
													+'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
												+'</td>'
												+'<td>'
													+' <span class=bigger>-</span>4( 9 ) <span class=bigger>-</span> (25)'
												+'</td>'
											+'</tr>'
											+'<tr>'
												+'<td>'
													+'3rd: Combine.'
												+'</td>'
												+'<td>'
													+'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
												+'</td>'
												+'<td>'
													+'<span class=bigger>-</span>36  <span class=bigger>-</span> (25)'
												+'</td>'
											+'</tr>'
											+'<tr>'
												+'<td>'
													+'&nbsp;&nbsp;&nbsp;'
												+'</td>'
												+'<td>'
													+'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
												+'</td>'
												+'<td>'
													+'<span class=bigger>-</span>61'
												+'</td>'
											+'</tr>'
										+'</table>'
									+'}}'
								),
					textAnswer: ' &nbsp; -61',
					answer: '-76',
					template: 'main',
				}
				,
				{	// problem 13
					variableOneValue: 'x <span class=bigger>=</span>-2',
					variableTwoValue: '&nbsp;&nbsp;and&nbsp; y <span class=bigger>=</span>-3',
					expression: 'x<sup> 3</sup> - y<sup> 3</sup>',
					substitution: '(-2 )<sup> 3</sup> - (-3 )<sup> 3</sup>',
					firstLines: dataUtils.pre(
										'{\\str{Whenever you substitute a number value for a variable, put that number inside a parenthesis.}}'
										+'{\\str{&nbsp;}}'
										+'{\\str{Therefore:  $$expression&nbsp; is the same as&nbsp; $$substitution}}'
										+'{\\str{&nbsp;}}'
										+'{\\str{Follow order of operations to evaluate the problem.}}'
									),
					firstTable: dataUtils.pre(
									'{\\html{'
										+'<table>'
											+'<tr>'
												+'<td>'
													+'1st: Solve the exponent.'
												+'</td>'
												+'<td>'
													+'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
												+'</td>'
												+'<td>'
													+'(<span class=bigger>-</span>2 )<sup> 3</sup> <span class=bigger>-</span> (<span class=bigger>-</span>3 )<sup> 3</sup>'
												+'</td>'
											+'</tr>'
											+'<tr>'
												+'<td>'
													+'2nd: Combine.'
												+'</td>'
												+'<td>'
													+'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
												+'</td>'
												+'<td>'
													+'<span class=bigger>-</span>8  <span class=bigger>-</span> (<span class=bigger>-</span>27 )'
												+'</td>'
											+'</tr>'
											+'<tr>'
												+'<td>'
													+'&nbsp;&nbsp;&nbsp;'
												+'</td>'
												+'<td>'
													+'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
												+'</td>'
												+'<td>'
													+'19'
												+'</td>'
											+'</tr>'
										+'</table>'
									+'}}'
								),
					textAnswer: ' &nbsp; 19',
					answer: '19',
					template: 'main',
				}
				,
				{	// problem 14
					variableOneValue: 'a <span class=bigger>=</span>-7',
					variableTwoValue: '&nbsp;&nbsp;and&nbsp; b <span class=bigger>=</span>-5',
					expression: 'a<sup> 3</sup> - b<sup> 3</sup>',
					substitution: '(-7 )<sup> 3</sup> - (-5 )<sup> 3</sup>',
					firstLines: dataUtils.pre(
										'{\\str{Whenever you substitute a number value for a variable, put that number inside a parenthesis.}}'
										+'{\\str{&nbsp;}}'
										+'{\\str{Therefore:  $$expression&nbsp; is the same as&nbsp; $$substitution}}'
										+'{\\str{&nbsp;}}'
										+'{\\str{Follow order of operations to evaluate the problem.}}'
									),
					firstTable: dataUtils.pre(
									'{\\html{'
										+'<table>'
											+'<tr>'
												+'<td>'
													+'1st: Solve the exponent.'
												+'</td>'
												+'<td>'
													+'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
												+'</td>'
												+'<td>'
													+'(<span class=bigger>-</span>7 )<sup> 3</sup> <span class=bigger>-</span> (<span class=bigger>-</span>5 )<sup> 3</sup>'
												+'</td>'
											+'</tr>'
											+'<tr>'
												+'<td>'
													+'2nd: Combine.'
												+'</td>'
												+'<td>'
													+'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
												+'</td>'
												+'<td>'
													+'<span class=bigger>-</span>343  <span class=bigger>-</span> (<span class=bigger>-</span>125 )'
												+'</td>'
											+'</tr>'
											+'<tr>'
												+'<td>'
													+'&nbsp;&nbsp;&nbsp;'
												+'</td>'
												+'<td>'
													+'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
												+'</td>'
												+'<td>'
													+'<span class=bigger>-</span>218'
												+'</td>'
											+'</tr>'
										+'</table>'
									+'}}'
								),
					textAnswer: ' &nbsp; -218',
					answer: '-218',
					template: 'main',
				}
				,
				{	// problem 15
					variableOneValue: 'a <span class=bigger>=</span> 6',
					variableTwoValue: '&nbsp;&nbsp;and&nbsp; b <span class=bigger>=</span>-4',
					expression: '2a<sup> 2</sup> / b',
					substitution: '2( 6 )<sup> 2</sup> / (-4 )',
					firstLines: dataUtils.pre(
										'{\\str{Whenever you substitute a number value for a variable, put that number inside a parenthesis.}}'
										+'{\\str{&nbsp;}}'
										+'{\\str{Therefore:  $$expression&nbsp; is the same as&nbsp; $$substitution}}'
										+'{\\str{&nbsp;}}'
										+'{\\str{Follow order of operations to evaluate the problem.}}'
									),
					firstTable: dataUtils.pre(
									'{\\html{'
										+'<table>'
											+'<tr>'
												+'<td>'
													+'1st: Solve the exponent.'
												+'</td>'
												+'<td>'
													+'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
												+'</td>'
												+'<td>'
													+'2( 6 )<sup> 2</sup> <span class=bigger>&divide;</span> (<span class=bigger>-</span>4 )'
												+'</td>'
											+'</tr>'
											+'<tr>'
												+'<td>'
													+'2nd: Multiply.'
												+'</td>'
												+'<td>'
													+'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
												+'</td>'
												+'<td>'
													+'2( 36 ) <span class=bigger>&divide;</span> (<span class=bigger>-</span>4 )'
												+'</td>'
											+'</tr>'
											+'<tr>'
												+'<td>'
													+'3rd: Divide.'
												+'</td>'
												+'<td>'
													+'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
												+'</td>'
												+'<td>'
													+'72 <span class=bigger>&divide;</span> (<span class=bigger>-</span>4 )'
												+'</td>'
											+'</tr>'
											+'<tr>'
												+'<td>'
													+'&nbsp;&nbsp;&nbsp;'
												+'</td>'
												+'<td>'
													+'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
												+'</td>'
												+'<td>'
													+'<span class=bigger>-</span>18'
												+'</td>'
											+'</tr>'
										+'</table>'
									+'}}'
								),
					textAnswer: ' &nbsp; -18',
					answer: '-18',
					template: 'main',
				}
				,
				{	// problem 16
					variableOneValue: 'x <span class=bigger>= -</span>5',
					variableTwoValue: '&nbsp;&nbsp;and&nbsp; y <span class=bigger>=</span>10',
					expression: '4y<sup> 2</sup> / x',
					substitution: '4( 10 )<sup> 2</sup> / (-5 )',
					firstLines: dataUtils.pre(
										'{\\str{Whenever you substitute a number value for a variable, put that number inside a parenthesis.}}'
										+'{\\str{&nbsp;}}'
										+'{\\str{Therefore:  $$expression&nbsp; is the same as&nbsp; $$substitution}}'
										+'{\\str{&nbsp;}}'
										+'{\\str{Follow order of operations to evaluate the problem.}}'
									),
					firstTable: dataUtils.pre(
									'{\\html{'
										+'<table>'
											+'<tr>'
												+'<td>'
													+'1st: Solve the exponent.'
												+'</td>'
												+'<td>'
													+'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
												+'</td>'
												+'<td>'
													+'4( 10 )<sup> 2</sup> <span class=bigger>&divide;</span> (<span class=bigger>-</span>5 )'
												+'</td>'
											+'</tr>'
											+'<tr>'
												+'<td>'
													+'2nd: Multiply.'
												+'</td>'
												+'<td>'
													+'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
												+'</td>'
												+'<td>'
													+'4( 100 ) <span class=bigger>&divide;</span> (<span class=bigger>-</span>5 )'
												+'</td>'
											+'</tr>'
											+'<tr>'
												+'<td>'
													+'3rd: Divide.'
												+'</td>'
												+'<td>'
													+'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
												+'</td>'
												+'<td>'
													+'400 <span class=bigger>&divide;</span> (<span class=bigger>-</span>5 )'
												+'</td>'
											+'</tr>'
											+'<tr>'
												+'<td>'
													+'&nbsp;&nbsp;&nbsp;'
												+'</td>'
												+'<td>'
													+'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
												+'</td>'
												+'<td>'
													+'<span class=bigger>-</span>80'
												+'</td>'
											+'</tr>'
										+'</table>'
									+'}}'
								),
					textAnswer: ' &nbsp; -80',
					answer: '-80',
					template: 'main',
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
				{ problems: [19,20], total: 1}
		];
    
    	return dataUtils.build(desc, template, data, shuffle);*/
		
		return dataUtils.build(desc, template, data);
}]);