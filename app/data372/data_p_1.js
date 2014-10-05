/*global angular */

angular.module('mathSkills').service('data_p_1', ['dataUtils', function (dataUtils) {
    var desc = {
            title: 'P.1 Simplifying Exponential Expressions: the Zero and Negative Exponents',
            path: 'p.1-the-zero-and-negative-exponents',
            children: []
        },
        template = {
			firstSimplify: {
                title: 'Simplifying Exponential Expressions: the Zero and Negative Exponents',
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
			evaluateAfterSimplify: {
                title: 'Simplifying Exponential Expressions: the Zero and Negative Exponents',
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
            },
			evaluateNoSecondHelp: {
                title: 'Simplifying Exponential Expressions: the Zero and Negative Exponents',
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
											+'{$helpAnswer}'
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
            },
			evaluateMoveControls: {
                title: 'Simplifying Exponential Expressions: the Zero and Negative Exponents',
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
                            "help": true,
							"fixBottomRight":true
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
										+'{\\str{Simplify: &nbsp;}}'
										+'{\\exp{\\str{&nbsp;$$base1}}{\\str{$$exp1}}}'
									+'}'
							),
				answerInstructions: '',
				base1: '4',
				exp1: '0',
				baseans: '1',
				solutionAnswer: dataUtils.pre(
								'\\rowgrp'
									+'{\\str{$$answerInstructions}}'
									+'{\\grp'
										+'{\\input{$$baseans}}'
									+'}'
							),
				line1: dataUtils.pre(
								'\\grp'
									+'{\\str{Any non-zero base raised to the power of zero is equal to 1 whole.}}'		
							),
				helpAnswer: dataUtils.pre(
								'\\grp'
									+'{\\str{<br>Simplified Answer: &nbsp;1}}'		
							),
				template: 'firstSimplify' 
			 }
		  	,
		  	// prob 2
			{
				problemStatement: dataUtils.pre(
								'\\rowgrp'
									+'{\\grp'
										+'{\\str{Simplify: &nbsp;}}'
										+'{\\exp{\\str{&nbsp;$$base1}}{\\str{$$exp1}}}'
									+'}'
							),
				answerInstructions: '',
				base1: '7',
				exp1: '0',
				baseans: '1',
				solutionAnswer: dataUtils.pre(
								'\\rowgrp'
									+'{\\str{$$answerInstructions}}'
									+'{\\grp'
										+'{\\input{$$baseans}}'
									+'}'
							),
				line1: dataUtils.pre(
								'\\grp'
									+'{\\str{Any non-zero base raised to the power of zero is equal to 1 whole.}}'		
							),
				helpAnswer: dataUtils.pre(
								'\\grp'
									+'{\\str{<br>Simplified Answer: &nbsp;1}}'		
							),
				template: 'firstSimplify' 
			 }
			  ,
			  	// prob 3
				{
					problemStatement: dataUtils.pre(
									'\\rowgrp'
										+'{\\grp'
											+'{\\str{Simplify: &nbsp;}}'
											+'{\\exp{\\str{&nbsp;$$base1}}{\\str{$$exp1}}}'
										+'}'
								),
					answerInstructions: '',
					base1: '(-3 )',
					exp1: '0',
					baseans: '1',
					solutionAnswer: dataUtils.pre(
									'\\rowgrp'
										+'{\\str{$$answerInstructions}}'
										+'{\\grp'
											+'{\\input{$$baseans}}'
										+'}'
								),
					line1: dataUtils.pre(
								'\\grp'
									+'{\\str{Any non-zero base raised to the power of zero is equal to 1 whole.}}'		
							),
					helpAnswer: dataUtils.pre(
								'\\grp'
									+'{\\str{<br>Simplified Answer: &nbsp;1}}'		
							),
					template: 'firstSimplify' 
				 }
			  ,
			  	// prob 4
				{
					problemStatement: dataUtils.pre(
									'\\rowgrp'
										+'{\\grp'
											+'{\\str{Simplify: &nbsp;}}'
											+'{\\exp{\\str{&nbsp;$$base1}}{\\str{$$exp1}}}'
										+'}'
								),
					answerInstructions: '',
					base1: '(-5 )',
					exp1: '0',
					baseans: '1',
					solutionAnswer: dataUtils.pre(
									'\\rowgrp'
										+'{\\str{$$answerInstructions}}'
										+'{\\grp'
											+'{\\input{$$baseans}}'
										+'}'
								),
					line1: dataUtils.pre(
								'\\grp'
									+'{\\str{Any non-zero base raised to the power of zero is equal to 1 whole.}}'		
							),
					helpAnswer: dataUtils.pre(
								'\\grp'
									+'{\\str{<br>Simplified Answer: &nbsp;1}}'		
							),
					template: 'firstSimplify' 
				 }
			  ,
			// prob 5
			{
				problemStatement: dataUtils.pre(
								'\\rowgrp'
									+'{\\grp'
										+'{\\str{Simplify: &nbsp;}}'
										+'{\\frac'
											+'{\\exp{\\str{&nbsp;$$base1}}{\\str{$$exp1}}}'
											+'{\\exp{\\str{&nbsp;$$base2}}{\\str{$$exp2}}}'
										+'}'
									+'}'
							),
				answerInstructions: '',
				base1: '6',
				exp1: '3',
				base2: '6',
				exp2: '3',
				baseans: '1',
				expans: '0',
				solutionAnswer: dataUtils.pre(
								'\\rowgrp'
									+'{\\str{$$answerInstructions}}'
									+'{\\grp'
										+'{\\input{$$baseans}}'
									+'}'
							),
				line1: dataUtils.pre(
									 '\\rowgrp'
										+'{\\str{'
											+'This problem has \"Division of Same Bases\". '
											+'Therefore, we <u>subtract the exponents</u>.'
										+'}}'
										+'{\\str{&nbsp;}}'
										+'{\\grp'
											+'{\\frac'
												+'{\\exp{\\str{&nbsp;$$base1}}{\\str{$$exp1}}}'
												+'{\\exp{\\str{&nbsp;$$base1}}{\\str{$$exp2}}}'
											+'}'
											+'{\\str{'
												+'&nbsp; means &nbsp; $$base1 <sup>$$exp1 - $$exp2</sup> &nbsp; or &nbsp; $$base1 <sup>$$expans</sup>'
											+'}}'
										+'}'
										+'{\\str{&nbsp;}}'
										+'{\\str{Any non-zero base raised to the power of zero is equal to 1 whole.<span class=large>.</span>}}'
										+'{\\str{&nbsp;}}'
										+'{\\grp'
											+'{\\str{$$base1 <sup>$$expans</sup>}}'
											+'{\\str{=}}'
											+'{\\str{$$finalAnswer}}'
										+'}'
										
							),
				helpAnswer: dataUtils.pre(
								'\\grp'
									+'{\\str{<br>Simplified Answer: $$finalAnswer}}'
							),
				finalAnswer: '1',
				template: 'firstSimplify' 
			 }
			 ,
			 // prob 6
			{
				problemStatement: dataUtils.pre(
								'\\rowgrp'
									+'{\\grp'
										+'{\\str{Simplify: &nbsp;}}'
										+'{\\frac'
											+'{\\exp{\\str{&nbsp;$$base1}}{\\str{$$exp1}}}'
											+'{\\exp{\\str{&nbsp;$$base2}}{\\str{$$exp2}}}'
										+'}'
									+'}'
							),
				answerInstructions: '',
				base1: '5',
				exp1: '2',
				base2: '5',
				exp2: '2',
				baseans: '1',
				expans: '0',
				solutionAnswer: dataUtils.pre(
								'\\rowgrp'
									+'{\\str{$$answerInstructions}}'
									+'{\\grp'
										+'{\\input{$$baseans}}'
									+'}'
							),
				line1: dataUtils.pre(
									 '\\rowgrp'
										+'{\\str{'
											+'This problem has \"Division of Same Bases\". '
											+'Therefore, we <u>subtract the exponents</u>.'
										+'}}'
										+'{\\str{&nbsp;}}'
										+'{\\grp'
											+'{\\frac'
												+'{\\exp{\\str{&nbsp;$$base1}}{\\str{$$exp1}}}'
												+'{\\exp{\\str{&nbsp;$$base1}}{\\str{$$exp2}}}'
											+'}'
											+'{\\str{'
												+'&nbsp; means &nbsp; $$base1 <sup>$$exp1 - $$exp2</sup> &nbsp; or &nbsp; $$base1 <sup>$$expans</sup>'
											+'}}'
										+'}'
										+'{\\str{&nbsp;}}'
										+'{\\str{Any non-zero base raised to the power of zero is equal to 1 whole.<span class=large>.</span>}}'
										+'{\\str{&nbsp;}}'
										+'{\\grp'
											+'{\\str{$$base1 <sup>$$expans</sup>}}'
											+'{\\str{=}}'
											+'{\\str{$$finalAnswer}}'
										+'}'
										
							),
				helpAnswer: dataUtils.pre(
								'\\grp'
									+'{\\str{<br>Simplified Answer: $$finalAnswer}}'
							),
				finalAnswer: '1',
				template: 'firstSimplify' 
			 }
			 ,
		  	// prob 7
			{
				problemStatement: dataUtils.pre(
								'\\rowgrp'
									+'{\\str{Simplify:}}'
									+'{\\str{&nbsp;}}'
									+'{\\exp{\\str{&nbsp;$$base1}}{\\str{$$exp1}}}'
									+'{\\str{&nbsp;}}'
									+'{\\str{All simplified answers must have only positive exponents.}}'
							),
				answerInstructions: '',
				base1: '2',
				exp1: '-3',
				numBaseAns: '1',
				denBaseAns: '2',
				expAns: '3',
				solutionAnswer: dataUtils.pre(
								'\\rowgrp'
									+'{\\str{$$answerInstructions}}'
									+'{\\grp'
										+'{\\frac'
											+'{\\input{$$numBaseAns}}'
											+'{\\exp{\\input{$$denBaseAns}}{\\input{$$expAns}}}'
										+'}'
									+'}'
							),
				line1: dataUtils.pre(
								'\\rowgrp'
									+'{\\str{A negative exponent is not a negative value.}}'
									+'{\\str{&nbsp;}}'
									+'{\\str{We can \"get rid of a negative exponent\" by taking the <u>reciprocal of the base</u> and changing the sign of the exponent.}}'
									+'{\\str{&nbsp;}}'
									+'{\\str{In this case the base of $$base1 is flipped from its location as a numerator (the whole number) to the denominator. The negative exponent changes to positive.}}'
									+'{\\str{&nbsp;}}'
									+'{\\grp'
										+'{\\exp{\\str{&nbsp;$$base1}}{\\str{$$exp1}}}'
										+'{\\str{=}}'
										+'{\\frac'
											+'{\\str{$$numBaseAns}}'
											+'{\\exp{\\str{$$denBaseAns}}{\\str{$$expAns}}}'
										+'}'
									+'}'
									+'{\\str{&nbsp;}}'
							),
				helpAnswer: dataUtils.pre(
								'\\grp'
									+'{\\str{<br>Simplified Answer: &nbsp;}}'
									+'{\\exp'
										+'{\\frac'
											+'{\\str{$$numBaseAns}}'
											+'{\\exp{\\str{$$denBaseAns}}{\\str{$$expAns}}}'
										+'}'
									+'}'
							),
				template: 'firstSimplify' 
			 }
			 ,
		  	// prob 8
			{
				problemStatement: dataUtils.pre(
								'\\rowgrp'
									+'{\\str{Simplify:}}'
									+'{\\str{&nbsp;}}'
									+'{\\exp{\\str{&nbsp;$$base1}}{\\str{$$exp1}}}'
									+'{\\str{&nbsp;}}'
									+'{\\str{All simplified answers must have only positive exponents.}}'
							),
				answerInstructions: '',
				base1: '7',
				exp1: '-2',
				numBaseAns: '1',
				denBaseAns: '7',
				expAns: '2',
				solutionAnswer: dataUtils.pre(
								'\\rowgrp'
									+'{\\str{$$answerInstructions}}'
									+'{\\grp'
										+'{\\frac'
											+'{\\input{$$numBaseAns}}'
											+'{\\exp{\\input{$$denBaseAns}}{\\input{$$expAns}}}'
										+'}'
									+'}'
							),
				line1: dataUtils.pre(
								'\\rowgrp'
									+'{\\str{A negative exponent is not a negative value.}}'
									+'{\\str{&nbsp;}}'
									+'{\\str{We can \"get rid of a negative exponent\" by taking the <u>reciprocal of the base</u> and changing the sign of the exponent.}}'
									+'{\\str{&nbsp;}}'
									+'{\\str{In this case the base of $$base1 is flipped from its location as a numerator (the whole number) to the denominator. The negative exponent changes to positive.}}'
									+'{\\str{&nbsp;}}'
									+'{\\grp'
										+'{\\exp{\\str{&nbsp;$$base1}}{\\str{$$exp1}}}'
										+'{\\str{=}}'
										+'{\\frac'
											+'{\\str{$$numBaseAns}}'
											+'{\\exp{\\str{$$denBaseAns}}{\\str{$$expAns}}}'
										+'}'
									+'}'
									+'{\\str{&nbsp;}}'
							),
				helpAnswer: dataUtils.pre(
								'\\grp'
									+'{\\str{<br>Simplified Answer: &nbsp;}}'
									+'{\\exp'
										+'{\\frac'
											+'{\\str{$$numBaseAns}}'
											+'{\\exp{\\str{$$denBaseAns}}{\\str{$$expAns}}}'
										+'}'
									+'}'
							),
				template: 'firstSimplify' 
			 }
			  ,
		  	// prob 9
			{
				problemStatement: dataUtils.pre(
								'\\rowgrp'
									+'{\\str{Simplify:}}'
									+'{\\str{&nbsp;}}'
									+'{\\exp{\\str{&nbsp;$$base1}}{\\str{$$exp1}}}'
									+'{\\str{&nbsp;}}'
									+'{\\str{All simplified answers must have only positive exponents.}}'
							),
				answerInstructions: '',
				base1: '3',
				exp1: '-5',
				numBaseAns: '1',
				denBaseAns: '3',
				expAns: '5',
				solutionAnswer: dataUtils.pre(
								'\\rowgrp'
									+'{\\str{$$answerInstructions}}'
									+'{\\grp'
										+'{\\frac'
											+'{\\input{$$numBaseAns}}'
											+'{\\exp{\\input{$$denBaseAns}}{\\input{$$expAns}}}'
										+'}'
									+'}'
							),
				line1: dataUtils.pre(
								'\\rowgrp'
									+'{\\str{A negative exponent is not a negative value.}}'
									+'{\\str{&nbsp;}}'
									+'{\\str{We can \"get rid of a negative exponent\" by taking the <u>reciprocal of the base</u> and changing the sign of the exponent.}}'
									+'{\\str{&nbsp;}}'
									+'{\\str{In this case the base of $$base1 is flipped from its location as a numerator (the whole number) to the denominator. The negative exponent changes to positive.}}'
									+'{\\str{&nbsp;}}'
									+'{\\grp'
										+'{\\exp{\\str{&nbsp;$$base1}}{\\str{$$exp1}}}'
										+'{\\str{=}}'
										+'{\\frac'
											+'{\\str{$$numBaseAns}}'
											+'{\\exp{\\str{$$denBaseAns}}{\\str{$$expAns}}}'
										+'}'
									+'}'
									+'{\\str{&nbsp;}}'
							),
				helpAnswer: dataUtils.pre(
								'\\grp'
									+'{\\str{<br>Simplified Answer: &nbsp;}}'
									+'{\\exp'
										+'{\\frac'
											+'{\\str{$$numBaseAns}}'
											+'{\\exp{\\str{$$denBaseAns}}{\\str{$$expAns}}}'
										+'}'
									+'}'
							),
				template: 'firstSimplify' 
			 }
			  ,
		  	// prob 10
			{
				problemStatement: dataUtils.pre(
								'\\rowgrp'
									+'{\\str{Simplify:}}'
									+'{\\str{&nbsp;}}'
									+'{\\exp{\\str{&nbsp;$$base1}}{\\str{$$exp1}}}'
									+'{\\str{&nbsp;}}'
									+'{\\str{All simplified answers must have only positive exponents.}}'
							),
				answerInstructions: '',
				base1: '5',
				exp1: '-2',
				numBaseAns: '1',
				denBaseAns: '5',
				expAns: '2',
				solutionAnswer: dataUtils.pre(
								'\\rowgrp'
									+'{\\str{$$answerInstructions}}'
									+'{\\grp'
										+'{\\frac'
											+'{\\input{$$numBaseAns}}'
											+'{\\exp{\\input{$$denBaseAns}}{\\input{$$expAns}}}'
										+'}'
									+'}'
							),
				line1: dataUtils.pre(
								'\\rowgrp'
									+'{\\str{A negative exponent is not a negative value.}}'
									+'{\\str{&nbsp;}}'
									+'{\\str{We can \"get rid of a negative exponent\" by taking the <u>reciprocal of the base</u> and changing the sign of the exponent.}}'
									+'{\\str{&nbsp;}}'
									+'{\\str{In this case the base of $$base1 is flipped from its location as a numerator (the whole number) to the denominator. The negative exponent changes to positive.}}'
									+'{\\str{&nbsp;}}'
									+'{\\grp'
										+'{\\exp{\\str{&nbsp;$$base1}}{\\str{$$exp1}}}'
										+'{\\str{=}}'
										+'{\\frac'
											+'{\\str{$$numBaseAns}}'
											+'{\\exp{\\str{$$denBaseAns}}{\\str{$$expAns}}}'
										+'}'
									+'}'
									+'{\\str{&nbsp;}}'
							),
				helpAnswer: dataUtils.pre(
								'\\grp'
									+'{\\str{<br>Simplified Answer: &nbsp;}}'
									+'{\\exp'
										+'{\\frac'
											+'{\\str{$$numBaseAns}}'
											+'{\\exp{\\str{$$denBaseAns}}{\\str{$$expAns}}}'
										+'}'
									+'}'
							),
				template: 'firstSimplify' 
			 }
			  ,
		  	// prob 11
			{
				problemStatement: dataUtils.pre(
								'\\rowgrp'
									+'{\\str{Simplify:}}'
									+'{\\str{&nbsp;}}'
									+'{\\frac'
										+'{\\str{&nbsp;$$base1}}'
										+'{\\exp{\\str{&nbsp;$$base2}}{\\str{$$exp2}}}'
									+'}'
									+'{\\str{&nbsp;}}'
									+'{\\str{All simplified answers must have only positive exponents.}}'
							),
				wellProblemStatement: dataUtils.pre(
									'\\css'
										+'{\\rowgrp'
											+'{\\html{&nbsp;}}'
											+'{\\grp'
												+'{\\frac'
													+'{\\str{&nbsp;$$base1}}'
													+'{\\exp{\\str{&nbsp;$$base2}}{\\str{$$exp2}}}'
												+'}'
												+'{\\str{=}}'
												+'{\\exp{\\str{$$baseans}}{\\str{$$expans}}}'
											+'}'
											+'{\\html{&nbsp;}}'
											+'{\\css'
												+'{\\grp'
													+'{\\str{Evaluate the simplified expression<span class=large>:</span>}}'
												+'}'
												+'{alert alert-info}'
											+'}'
											+'{\\grp'
												+'{\\input{$finalAnswer}}'
											+'}'
										+'}{well}'
							),
				answerInstructions: '',
				base1: '1',
				exp1: '',
				base2: '7',
				exp2: '-2',
				baseans: '7',
				expans: '2',
				solutionAnswer: dataUtils.pre(
								'\\rowgrp'
									+'{\\str{$$answerInstructions}}'
									+'{\\grp'
										+'{\\exp{\\input{$$baseans}}{\\input{$$expans}}'
									+'}'
							),
				line1: dataUtils.pre(
									 '\\rowgrp'
									+'{\\str{A negative exponent is not a negative value.}}'
									+'{\\str{&nbsp;}}'
									+'{\\str{We can \"get rid of a negative exponent\" by taking the <u>reciprocal of the base</u> and changing the sign of the exponent.}}'
									+'{\\str{&nbsp;}}'
									+'{\\str{In this case the base of $$base2 is flipped from its location as a denominator to the numerator. The negative exponent changes to positive.}}'
									+'{\\str{&nbsp;}}'
									+'{\\grp'
										+'{\\frac'
											+'{\\str{&nbsp;$$base1}}'
											+'{\\exp{\\str{&nbsp;$$base2}}{\\str{$$exp2}}}'
										+'}'
										+'{\\str{=}}'
										+'{\\exp{\\str{&nbsp;$$baseans}}{\\str{$$expans}}}'
									+'}'
							),
				helpAnswer: 'Simplified Answer: &nbsp;$$baseans<sup>$$expans</sup>',
				finalAnswer: '49',
				template: 'evaluateNoSecondHelp' 
			 }
			 ,
		  	// prob 12
			{
				problemStatement: dataUtils.pre(
								'\\rowgrp'
									+'{\\str{Simplify:}}'
									+'{\\str{&nbsp;}}'
									+'{\\frac'
										+'{\\str{&nbsp;$$base1}}'
										+'{\\exp{\\str{&nbsp;$$base2}}{\\str{$$exp2}}}'
									+'}'
									+'{\\str{&nbsp;}}'
									+'{\\str{All simplified answers must have only positive exponents.}}'
							),
				wellProblemStatement: dataUtils.pre(
									'\\css'
										+'{\\rowgrp'
											+'{\\html{&nbsp;}}'
											+'{\\grp'
												+'{\\frac'
													+'{\\str{&nbsp;$$base1}}'
													+'{\\exp{\\str{&nbsp;$$base2}}{\\str{$$exp2}}}'
												+'}'
												+'{\\str{=}}'
												+'{\\exp{\\str{$$baseans}}{\\str{$$expans}}}'
											+'}'
											+'{\\html{&nbsp;}}'
											+'{\\css'
												+'{\\grp'
													+'{\\str{Evaluate the simplified expression<span class=large>:</span>}}'
												+'}'
												+'{alert alert-info}'
											+'}'
											+'{$finalAnswer}'
										+'}{well}'
							),
				answerInstructions: '',
				base1: '1',
				exp1: '',
				base2: '4',
				exp2: '-3',
				baseans: '4',
				expans: '3',
				solutionAnswer: dataUtils.pre(
								'\\rowgrp'
									+'{\\str{$$answerInstructions}}'
									+'{\\grp'
										+'{\\exp{\\input{$$baseans}}{\\input{$$expans}}'
									+'}'
							),
				line1: dataUtils.pre(
									 '\\rowgrp'
									+'{\\str{A negative exponent is not a negative value.}}'
									+'{\\str{&nbsp;}}'
									+'{\\str{We can \"get rid of a negative exponent\" by taking the <u>reciprocal of the base</u> and changing the sign of the exponent.}}'
									+'{\\str{&nbsp;}}'
									+'{\\str{In this case the base of $$base2 is flipped from its location as a denominator to the numerator. The negative exponent changes to positive.}}'
									+'{\\str{&nbsp;}}'
									+'{\\grp'
										+'{\\frac'
											+'{\\str{&nbsp;$$base1}}'
											+'{\\exp{\\str{&nbsp;$$base2}}{\\str{$$exp2}}}'
										+'}'
										+'{\\str{=}}'
										+'{\\exp{\\str{&nbsp;$$baseans}}{\\str{$$expans}}}'
									+'}'
							),
				helpAnswer: dataUtils.pre(
									'\\grp'
										+'{\\str{Simplified Answer: &nbsp;$$baseans<sup>$$expans</sup>}}'
							),
				finalAnswer: dataUtils.pre(
											'\\grp'
												+'{\\input{64}}'
							),
				template: 'evaluateNoSecondHelp' 
			 }
			,
			// prob 13
			{
				problemStatement: dataUtils.pre(
								'\\rowgrp'
									+'{\\str{Simplify:}}'
									+'{\\str{&nbsp;}}'
									+'{\\grp'
										+'{\\exp'
											+'{\\str{&nbsp;$$base1}}'
											+'{\\str{$$exp1}}'
										+'}'
										+'{\\str{&nbsp;*&nbsp;}}'
										+'{\\exp'
											+'{\\str{&nbsp;$$base2}}'
											+'{\\str{$$exp2}}'
										+'}'
									+'}'
									+'{\\str{&nbsp;}}'
									+'{\\str{All simplified answers must have only positive exponents.}}'
							),
				wellProblemStatement: dataUtils.pre(
									'\\css'
										+'{\\rowgrp'
											+'{\\html{&nbsp;}}'
											+'{\\grp'
												+'{\\exp'
													+'{\\str{&nbsp;$$base1}}'
													+'{\\str{$$exp1}}'
												+'}'
												+'{\\str{&nbsp;*&nbsp;}}'
												+'{\\exp'
													+'{\\str{&nbsp;$$base2}}'
													+'{\\str{$$exp2}}'
												+'}'
												+'{\\str{=}}'
												+'{\\frac'
													+'{\\str{$$numBaseAns}}'
													+'{\\exp{\\str{$$denBaseAns}}{\\str{$$expAns}}}'
												+'}'
											+'}'
											+'{\\html{&nbsp;}}'
											+'{\\css'
												+'{\\grp'
													+'{\\str{Evaluate the simplified expression<span class=large>:</span>}}'
												+'}'
												+'{alert alert-info}'
											+'}'
											+'{$finalAnswer}'
										+'}{well}'
							),
				answerInstructions: '',
				base1: '3',
				exp1: '4',
				base2: '3',
				exp2: '-6',
				expDiff: '-2',
				numBaseAns: '1',
				denBaseAns: '3',
				expAns: '2',
				numAns: '1',
				denAns: '9',
				solutionAnswer: dataUtils.pre(
								'\\rowgrp'
									+'{\\str{$$answerInstructions}}'
									+'{\\grp'
										+'{\\frac'
											+'{\\input{$$numBaseAns}}'
											+'{\\exp{\\input{$$denBaseAns}}{\\input{$$expAns}}}'
										+'}'
									+'}'
							),
				line1: dataUtils.pre(
									 '\\rowgrp'
									+'{\\str{First, we use the exponent rule \"Multiplication of Same Bases\" here. When we multiply same bases, we <u>add the exponents.</u>}}'
									+'{\\str{&nbsp;}}'
									+'{\\str{$$base1<sup> $$exp1</sup> &nbsp;*&nbsp; $$base2<sup> $$exp2</sup>  means  3<sup> $$exp1 + ($$exp2 )</sup>  &nbsp;or&nbsp;  $$base1<sup> $$expDiff</sup>  }}'
									+'{\\str{&nbsp;}}'
									+'{\\str{Second, we still need to \"get rid of the negative exponent\" by taking the <u>reciprocal of the base</u> and changing the sign of the exponent.}}'
									+'{\\str{&nbsp;}}'
									+'{\\grp'
										+'{\\exp{\\str{&nbsp;$$base1}}{\\str{$$expDiff}}}'
										+'{\\str{=}}'
										+'{\\frac'
											+'{\\str{$$numBaseAns}}'
											+'{\\exp{\\str{$$denBaseAns}}{\\str{$$expAns}}}'
										+'}'
									+'}'
							),
				helpAnswer:  dataUtils.pre(
									'\\grp'
										+'{\\str{Simplified Answer: &nbsp;}}'
										+'{\\frac'
											+'{\\str{$$numBaseAns}}'
											+'{\\exp{\\str{$$denBaseAns}}{\\str{$$expAns}}}'
										+'}'
							),		
				finalAnswer: dataUtils.pre(
											'\\grp'
												+'{\\frac{\\input{$$numAns}}{\\input{$$denAns}}}'
							),
				template: 'evaluateNoSecondHelp' 
			 }
			 ,
			// prob 14
			{
				problemStatement: dataUtils.pre(
								'\\rowgrp'
									+'{\\str{Simplify:}}'
									+'{\\str{&nbsp;}}'
									+'{\\grp'
										+'{\\exp'
											+'{\\str{&nbsp;$$base1}}'
											+'{\\str{$$exp1}}'
										+'}'
										+'{\\str{&nbsp;*&nbsp;}}'
										+'{\\exp'
											+'{\\str{&nbsp;$$base2}}'
											+'{\\str{$$exp2}}'
										+'}'
									+'}'
									+'{\\str{&nbsp;}}'
									+'{\\str{All simplified answers must have only positive exponents.}}'
							),
				wellProblemStatement: dataUtils.pre(
									'\\css'
										+'{\\rowgrp'
											+'{\\html{&nbsp;}}'
											+'{\\grp'
												+'{\\exp'
													+'{\\str{&nbsp;$$base1}}'
													+'{\\str{$$exp1}}'
												+'}'
												+'{\\str{&nbsp;*&nbsp;}}'
												+'{\\exp'
													+'{\\str{&nbsp;$$base2}}'
													+'{\\str{$$exp2}}'
												+'}'
												+'{\\str{=}}'
												+'{\\frac'
													+'{\\str{$$numBaseAns}}'
													+'{\\exp{\\str{$$denBaseAns}}{\\str{$$expAns}}}'
												+'}'
											+'}'
											+'{\\html{&nbsp;}}'
											+'{\\css'
												+'{\\grp'
													+'{\\str{Evaluate the simplified expression<span class=large>:</span>}}'
												+'}'
												+'{alert alert-info}'
											+'}'
											+'{$finalAnswer}'
										+'}{well}'
							),
				answerInstructions: '',
				base1: '2',
				exp1: '2',
				base2: '2',
				exp2: '-5',
				expDiff: '-3',
				numBaseAns: '1',
				denBaseAns: '2',
				expAns: '3',
				numAns: '1',
				denAns: '8',
				solutionAnswer: dataUtils.pre(
								'\\rowgrp'
									+'{\\str{$$answerInstructions}}'
									+'{\\grp'
										+'{\\frac'
											+'{\\input{$$numBaseAns}}'
											+'{\\exp{\\input{$$denBaseAns}}{\\input{$$expAns}}}'
										+'}'
									+'}'
							),
				line1: dataUtils.pre(
									 '\\rowgrp'
									+'{\\str{First, we use the exponent rule \"Multiplication of Same Bases\" here. When we multiply same bases, we <u>add the exponents.</u>}}'
									+'{\\str{&nbsp;}}'
									+'{\\str{$$base1<sup> $$exp1</sup> &nbsp;*&nbsp; $$base2<sup> $$exp2</sup>  means  $$base1<sup> $$exp1 + ($$exp2 )</sup>  &nbsp;or&nbsp;  $$base1<sup> $$expDiff</sup>  }}'
									+'{\\str{&nbsp;}}'
									+'{\\str{Second, we still need to \"get rid of the negative exponent\" by taking the <u>reciprocal of the base</u> and changing the sign of the exponent.}}'
									+'{\\str{&nbsp;}}'
									+'{\\grp'
										+'{\\exp{\\str{&nbsp;$$base1}}{\\str{$$expDiff}}}'
										+'{\\str{=}}'
										+'{\\frac'
											+'{\\str{$$numBaseAns}}'
											+'{\\exp{\\str{$$denBaseAns}}{\\str{$$expAns}}}'
										+'}'
									+'}'
							),
				helpAnswer:  dataUtils.pre(
									'\\grp'
										+'{\\str{Simplified Answer: &nbsp;}}'
										+'{\\frac'
											+'{\\str{$$numBaseAns}}'
											+'{\\exp{\\str{$$denBaseAns}}{\\str{$$expAns}}}'
										+'}'
							),		
				finalAnswer: dataUtils.pre(
											'\\grp'
												+'{\\frac{\\input{$$numAns}}{\\input{$$denAns}}}'
							),
				template: 'evaluateNoSecondHelp' 
			 }
			   ,
		  	// prob 15
			{
				problemStatement: dataUtils.pre(
								'\\rowgrp'
									+'{\\str{Simplify:}}'
									+'{\\str{&nbsp;}}'
									+'{\grp'
										+'{\\exp{\\str{&nbsp;$$baseAll}}{\\str{$$exp1}}}'
										+'{\\str{&nbsp;*&nbsp;}}'
										+'{\\exp{\\str{&nbsp;$$baseAll}}{\\str{$$exp2}}}'
									+'}'
									+'{\\str{&nbsp;}}'
									+'{\\str{All simplified answers must have only positive exponents.}}'
							),
				answerInstructions: '',
				baseAll: '(-7 )',
				exp1: '',
				expAssumed: '1',
				exp2: '-4',
				numBaseAns: '1',
				denBaseAns: '(-7)',
				expAns: '3',
				expDiff: '-3',
				solutionAnswer: dataUtils.pre(
								'\\rowgrp'
									+'{\\str{$$answerInstructions}}'
									+'{\\grp'
										+'{\\frac'
											+'{\\input{$$numBaseAns}}'
											+'{\\exp{\\input{$$denBaseAns}}{\\input{$$expAns}}}'
										+'}'
									+'}'
							),
				line1: dataUtils.pre(
								'\\rowgrp'
									+'{\\str{<u>First</u>, we use the exponent rule \"Multiplication of Same Bases\" here. When we multiply same bases, we <u>add the exponents</u>.}}'
									+'{\\str{&nbsp;}}'
									+'{\\str{$$baseAll<sup> $$exp1</sup> &nbsp;*&nbsp; $$baseAll<sup> $$exp2</sup>  &nbsp;means&nbsp;  $$baseAll<sup> $$expAssumed + ($$exp2 )</sup>  &nbsp;or&nbsp;  $$baseAll<sup> $$expDiff</sup>  }}'
									+'{\\str{&nbsp;}}'
									+'{\\str{Second, we still need to \"get rid of the negative exponent\" by taking the reciprocal of the base and changing the sign of the exponent.}}'
									+'{\\str{&nbsp;}}'
									+'{\\grp'
										+'{\\exp{\\str{&nbsp;$$baseAll}}{\\str{$$expDiff}}}'
										+'{\\str{=}}'
										+'{\\frac'
											+'{\\str{$$numBaseAns}}'
											+'{\\exp{\\str{$$denBaseAns}}{\\str{$$expAns}}}'
										+'}'
									+'}'
							),
				helpAnswer:  dataUtils.pre(
									'\\grp'
										+'{\\str{Simplified Answer: &nbsp;}}'
										+'{\\frac'
											+'{\\str{$$numBaseAns}}'
											+'{\\exp{\\str{$$denBaseAns}}{\\str{$$expAns}}}'
										+'}'
							),
				template: 'firstSimplify' 
			 }
			 ,
		  	// prob 16
			{
				problemStatement: dataUtils.pre(
								'\\rowgrp'
									+'{\\str{Simplify:}}'
									+'{\\str{&nbsp;}}'
									+'{\grp'
										+'{\\exp{\\str{&nbsp;$$baseAll}}{\\str{$$exp1}}}'
										+'{\\str{&nbsp;*&nbsp;}}'
										+'{\\exp{\\str{&nbsp;$$baseAll}}{\\str{$$exp2}}}'
									+'}'
									+'{\\str{&nbsp;}}'
									+'{\\str{All simplified answers must have only positive exponents.}}'
							),
				answerInstructions: '',
				baseAll: '(-11 )',
				exp1: '',
				expAssumed: '1',
				exp2: '-5',
				numBaseAns: '1',
				denBaseAns: '(-11)',
				expAns: '4',
				expDiff: '-4',
				solutionAnswer: dataUtils.pre(
								'\\rowgrp'
									+'{\\str{$$answerInstructions}}'
									+'{\\grp'
										+'{\\frac'
											+'{\\input{$$numBaseAns}}'
											+'{\\exp{\\input{$$denBaseAns}}{\\input{$$expAns}}}'
										+'}'
									+'}'
							),
				line1: dataUtils.pre(
								'\\rowgrp'
									+'{\\str{<u>First</u>, we use the exponent rule \"Multiplication of Same Bases\" here. When we multiply same bases, we <u>add the exponents</u>.}}'
									+'{\\str{&nbsp;}}'
									+'{\\str{$$baseAll<sup> $$exp1</sup> &nbsp;*&nbsp; $$baseAll<sup> $$exp2</sup>  &nbsp;means&nbsp;  $$baseAll<sup> $$expAssumed + ($$exp2 )</sup>  &nbsp;or&nbsp;  $$baseAll<sup> $$expDiff</sup>  }}'
									+'{\\str{&nbsp;}}'
									+'{\\str{Second, we still need to \"get rid of the negative exponent\" by taking the reciprocal of the base and changing the sign of the exponent.}}'
									+'{\\str{&nbsp;}}'
									+'{\\grp'
										+'{\\exp{\\str{&nbsp;$$baseAll}}{\\str{$$expDiff}}}'
										+'{\\str{=}}'
										+'{\\frac'
											+'{\\str{$$numBaseAns}}'
											+'{\\exp{\\str{$$denBaseAns}}{\\str{$$expAns}}}'
										+'}'
									+'}'
							),
				helpAnswer:  dataUtils.pre(
									'\\grp'
										+'{\\str{Simplified Answer: &nbsp;}}'
										+'{\\frac'
											+'{\\str{$$numBaseAns}}'
											+'{\\exp{\\str{$$denBaseAns}}{\\str{$$expAns}}}'
										+'}'
							),		
				template: 'firstSimplify' 
			 }
			  ,
		  	// prob 17
			{
				problemStatement: dataUtils.pre(
								'\\rowgrp'
									+'{\\str{Simplify:}}'
									+'{\\str{&nbsp;}}'
									+'{\grp'
										+'{\\exp{\\str{&nbsp;$$baseAll}}{\\str{$$exp1}}}'
										+'{\\str{&nbsp;*&nbsp;}}'
										+'{\\exp{\\str{&nbsp;$$baseAll}}{\\str{$$exp2}}}'
										+'{\\str{&nbsp;*&nbsp;}}'
										+'{\\exp{\\str{&nbsp;$$baseAll}}{\\str{$$exp3}}}'
									+'}'
									+'{\\str{&nbsp;}}'
									+'{\\str{All simplified answers must have only positive exponents.}}'
							),
				answerInstructions: '',
				baseAll: '5',
				exp1: '-1',
				expAssumed: '-1',
				exp2: '-3',
				exp3: '2',
				numBaseAns: '1',
				denBaseAns: '5',
				expAns: '2',
				expDiff: '-2',
				solutionAnswer: dataUtils.pre(
								'\\rowgrp'
									+'{\\str{$$answerInstructions}}'
									+'{\\grp'
										+'{\\frac'
											+'{\\input{$$numBaseAns}}'
											+'{\\exp{\\input{$$denBaseAns}}{\\input{$$expAns}}}'
										+'}'
									+'}'
							),
				line1: dataUtils.pre(
								'\\rowgrp'
									+'{\\str{<u>First</u>, we use the exponent rule \"Multiplication of Same Bases\" here. When we multiply same bases, we <u>add the exponents</u>.}}'
									+'{\\str{&nbsp;}}'
									+'{\\str{$$baseAll<sup> $$exp1</sup> &nbsp;*&nbsp; $$baseAll<sup> $$exp2</sup>  &nbsp;*&nbsp; $$baseAll<sup> $$exp3</sup> &nbsp;means&nbsp;  $$baseAll<sup> $$expAssumed + ($$exp2 ) + $$exp3</sup>  &nbsp;or&nbsp;  $$baseAll<sup> $$expDiff</sup>  }}'
									+'{\\str{&nbsp;}}'
									+'{\\str{Second, we still need to \"get rid of the negative exponent\" by taking the reciprocal of the base and changing the sign of the exponent.}}'
									+'{\\str{&nbsp;}}'
									+'{\\grp'
										+'{\\exp{\\str{&nbsp;$$baseAll}}{\\str{$$expDiff}}}'
										+'{\\str{=}}'
										+'{\\frac'
											+'{\\str{$$numBaseAns}}'
											+'{\\exp{\\str{$$denBaseAns}}{\\str{$$expAns}}}'
										+'}'
									+'}'
							),
				helpAnswer:  dataUtils.pre(
									'\\grp'
										+'{\\str{Simplified Answer: &nbsp;}}'
										+'{\\frac'
											+'{\\str{$$numBaseAns}}'
											+'{\\exp{\\str{$$denBaseAns}}{\\str{$$expAns}}}'
										+'}'
							),	
				template: 'firstSimplify' 
			 }
			  ,
		  	// prob 18
			{
				problemStatement: dataUtils.pre(
								'\\rowgrp'
									+'{\\str{Simplify:}}'
									+'{\\str{&nbsp;}}'
									+'{\grp'
										+'{\\exp{\\str{&nbsp;$$baseAll}}{\\str{$$exp1}}}'
										+'{\\str{&nbsp;*&nbsp;}}'
										+'{\\exp{\\str{&nbsp;$$baseAll}}{\\str{$$exp2}}}'
										+'{\\str{&nbsp;*&nbsp;}}'
										+'{\\exp{\\str{&nbsp;$$baseAll}}{\\str{$$exp3}}}'
									+'}'
									+'{\\str{&nbsp;}}'
									+'{\\str{All simplified answers must have only positive exponents.}}'
							),
				answerInstructions: '',
				baseAll: '8',
				exp1: '-2',
				expAssumed: '1',
				exp2: '-1',
				exp3: '',
				numBaseAns: '1',
				denBaseAns: '8',
				expAns: '2',
				expDiff: '-2',
				solutionAnswer: dataUtils.pre(
								'\\rowgrp'
									+'{\\str{$$answerInstructions}}'
									+'{\\grp'
										+'{\\frac'
											+'{\\input{$$numBaseAns}}'
											+'{\\exp{\\input{$$denBaseAns}}{\\input{$$expAns}}}'
										+'}'
									+'}'
							),
				line1: dataUtils.pre(
								'\\rowgrp'
									+'{\\str{<u>First</u>, we use the exponent rule \"Multiplication of Same Bases\" here. When we multiply same bases, we <u>add the exponents</u>.}}'
									+'{\\str{&nbsp;}}'
									+'{\\str{$$baseAll<sup> $$exp1</sup> &nbsp;*&nbsp; $$baseAll<sup> $$exp2</sup>  &nbsp;*&nbsp; $$baseAll<sup> $$exp3</sup> &nbsp;&nbsp;means&nbsp;&nbsp;  $$baseAll<sup> $$exp1 + ($$exp2 ) + $$expAssumed</sup>  &nbsp;&nbsp;or&nbsp;&nbsp;  $$baseAll<sup> $$expDiff</sup>  }}'
									+'{\\str{&nbsp;}}'
									+'{\\str{Second, we still need to \"get rid of the negative exponent\" by taking the reciprocal of the base and changing the sign of the exponent.}}'
									+'{\\str{&nbsp;}}'
									+'{\\grp'
										+'{\\exp{\\str{&nbsp;$$baseAll}}{\\str{$$expDiff}}}'
										+'{\\str{=}}'
										+'{\\frac'
											+'{\\str{$$numBaseAns}}'
											+'{\\exp{\\str{$$denBaseAns}}{\\str{$$expAns}}}'
										+'}'
									+'}'
							),
				helpAnswer:  dataUtils.pre(
									'\\grp'
										+'{\\str{Simplified Answer: &nbsp;}}'
										+'{\\frac'
											+'{\\str{$$numBaseAns}}'
											+'{\\exp{\\str{$$denBaseAns}}{\\str{$$expAns}}}'
										+'}'
							),	
				template: 'firstSimplify' 
			 }
			  ,
		  	// prob 19
			{
				problemStatement: dataUtils.pre(
									'\\rowgrp'
										+'{\\str{Simplify:}}'
										+'{\\str{&nbsp;}}'
										+'{\grp'
											+'{\\exp{\\str{&nbsp;$$base1}}{\\str{$$exp1}}}'
											+'{\\str{&nbsp;*&nbsp;}}'
											+'{\\exp{\\str{&nbsp;$$base2}}{\\str{$$exp2}}}'
											+'{\\str{&nbsp;*&nbsp;}}'
											+'{\\exp{\\str{&nbsp;$$base3}}{\\str{$$exp3}}}'
											+'{\\str{&nbsp;*&nbsp;}}'
											+'{\\exp{\\str{&nbsp;$$base4}}{\\str{$$exp4}}}'
										+'}'
										+'{\\str{&nbsp;}}'
										+'{\\str{All simplified answers must have only positive exponents.}}'
							),
				answerInstructions: '',
				base1: '3',
				exp1: '3',
				base2: '(-4 )',
				exp2: '5',
				base3: '(-4 )',
				exp3: '5',
				base4: '3',
				exp4: '-3',
				firstAns: '(-4)',
				firstExpAns: '10',
				firstExpEval: '0',
				secondExpEval: '10',
				solutionAnswer: dataUtils.pre(
									'\\css'
										+'{\\rowgrp'
											+'{\\str{$$answerInstructions}}'
											+'{\\grp'
													+'{\\exp{\\input{$$firstAns}}{\\input{$$firstExpAns}}}'
											+'}'
										+'}'
										+'{marginLeft80px}'
							),
				line1: dataUtils.pre(
								'\\rowgrp'
									+'{\\str{<u>First</u>, we use the exponent rule \"Multiplication of Same Bases\" here. When we multiply same bases, we <u>add the exponents</u>.}}'
									+'{\\str{&nbsp;}}'
									+'{\\str{$$base1<sup> $$exp1</sup> &nbsp;*&nbsp; $$base4<sup> $$exp4</sup> &nbsp;means&nbsp; $$base1<sup> $$exp1 + ($$exp4 )</sup> &nbsp;or&nbsp; $$base1<sup> $$firstExpEval</sup> = 1}}'
									+'{\\str{&nbsp;}}'
									+'{\\str{$$base2<sup> $$exp2</sup> &nbsp;*&nbsp; $$base3<sup> $$exp3</sup> &nbsp;means&nbsp; $$base2<sup> $$exp2 + $$exp3</sup> &nbsp;or&nbsp; $$base2<sup> $$secondExpEval</sup>}}'
									+'{\\str{&nbsp;}}'
									+'{\\str{The expression of:&nbsp;&nbsp; $$base1<sup> $$exp1</sup> &nbsp;*&nbsp; $$base2<sup> $$exp2</sup> &nbsp;*&nbsp; $$base3<sup> $$exp3</sup> &nbsp;*&nbsp; $$base4<sup> $$exp4</sup>}}'
									+'{\\str{&nbsp;}}'
									+'{\\str{has now become:&nbsp;&nbsp; 1 * $$base2<sup> $$secondExpEval</sup>}}'	
							),
				helpAnswer:  dataUtils.pre(
									'\\grp'
										+'{\\str{Simplified Answer: &nbsp;}}'
										+'{\\exp{\\str{$$firstAns}}{\\str{$$firstExpAns}}}'
							),	
				template: 'firstSimplify' 
			 }
			   ,
		  	// prob 20
			{
				problemStatement: dataUtils.pre(
									'\\rowgrp'
										+'{\\str{Simplify:}}'
										+'{\\str{&nbsp;}}'
										+'{\grp'
											+'{\\exp{\\str{&nbsp;$$base1}}{\\str{$$exp1}}}'
											+'{\\str{&nbsp;*&nbsp;}}'
											+'{\\exp{\\str{&nbsp;$$base2}}{\\str{$$exp2}}}'
											+'{\\str{&nbsp;*&nbsp;}}'
											+'{\\exp{\\str{&nbsp;$$base3}}{\\str{$$exp3}}}'
											+'{\\str{&nbsp;*&nbsp;}}'
											+'{\\exp{\\str{&nbsp;$$base4}}{\\str{$$exp4}}}'
										+'}'
										+'{\\str{&nbsp;}}'
										+'{\\str{All simplified answers must have only positive exponents.}}'
							),
				answerInstructions: '',
				base1: '5',
				exp1: '3',
				base2: '17',
				exp2: '-2',
				base3: '17',
				exp3: '2',
				base4: '5',
				exp4: '-1',
				firstAns: '5',
				firstExpAns: '2',
				firstExpEval: '2',
				secondExpEval: '0',
				solutionAnswer: dataUtils.pre(
									'\\css'
										+'{\\rowgrp'
											+'{\\str{$$answerInstructions}}'
											+'{\\grp'
													+'{\\exp{\\input{$$firstAns}}{\\input{$$firstExpAns}}}'
											+'}'
										+'}'
										+'{marginLeft80px}'
							),
				line1: dataUtils.pre(
								'\\rowgrp'
									+'{\\str{<u>First</u>, we use the exponent rule \"Multiplication of Same Bases\" here. When we multiply same bases, we <u>add the exponents</u>.}}'
									+'{\\str{&nbsp;}}'
									+'{\\str{$$base1<sup> $$exp1</sup> &nbsp;*&nbsp; $$base4<sup> $$exp4</sup> &nbsp;means&nbsp; $$base1<sup> $$exp1 + ($$exp4 )</sup> &nbsp;or&nbsp; $$base1<sup> $$firstExpEval</sup>}}'
									+'{\\str{&nbsp;}}'
									+'{\\str{$$base2<sup> $$exp2</sup> &nbsp;*&nbsp; $$base3<sup> $$exp3</sup> &nbsp;means&nbsp; $$base2<sup> $$exp2 + $$exp3</sup> &nbsp;or&nbsp; $$base2<sup> $$secondExpEval</sup> = 1}}'
									+'{\\str{&nbsp;}}'
									+'{\\str{The expression of:&nbsp;&nbsp; $$base1<sup> $$exp1</sup> &nbsp;*&nbsp; $$base2<sup> $$exp2</sup> &nbsp;*&nbsp; $$base3<sup> $$exp3</sup> &nbsp;*&nbsp; $$base4<sup> $$exp4</sup>}}'
									+'{\\str{&nbsp;}}'
									+'{\\str{has now become:&nbsp;&nbsp; $$base1<sup> $$firstExpEval</sup> * 1}}'	
							),
				helpAnswer:  dataUtils.pre(
									'\\grp'
										+'{\\str{Simplified Answer: &nbsp;}}'
										+'{\\exp{\\str{$$firstAns}}{\\str{$$firstExpAns}}}'
							),	
				template: 'firstSimplify' 
			 }
			 ,
			 // prob 21
			 {
				problemStatement: dataUtils.pre(
								'\\rowgrp'
									+'{\\grp'
										+'{\\str{Simplify: &nbsp;}}'
										+'{\\frac'
											+'{\\exp{\\str{&nbsp;$$base1}}{\\str{$$exp1}}}'
											+'{\\exp{\\str{&nbsp;$$base2}}{\\str{$$exp2}}}'
										+'}'
									+'}'
							),
				wellProblemStatement: dataUtils.pre(
									'\\css'
										+'{\\rowgrp'
											+'{\\html{&nbsp;}}'
											+'{\\grp'
												+'{\\frac'
													+'{\\exp{\\str{&nbsp;$$base1}}{\\str{$$exp1}}}'
													+'{\\exp{\\str{&nbsp;$$base2}}{\\str{$$exp2}}}'
												+'}'
												+'{\\str{=}}'
												+'{\\frac'
													+'{\\str{1}}'
													+'{\\exp{\\str{&nbsp;$$base1}}{\\str{$$expans}}}'
												+'}'
											+'}'
											+'{\\html{&nbsp;}}'
											+'{\\css'
												+'{\\grp'
													+'{\\str{Evaluate the simplified expression<span class=large>:</span>}}'
												+'}'
												+'{alert alert-info}'
											+'}'
											+'{\\grp'
												+'{$finalAnswer}'
											+'}'
										+'}{well}'
							),
				answerInstructions: '',
				base1: '2',
				exp1: '3',
				base2: '2',
				exp2: '7',
				expDiff: '-4',
				baseans: '2',
				expans: '4',
				solutionAnswer: dataUtils.pre(
								'\\rowgrp'
									+'{\\str{$$answerInstructions}}'
									+'{\\frac'
										+'{\\input{1}}'
										+'{\\exp{\\input{$$base1}}{\\input{$$expans}}}'
									+'}'
							),
				line1: dataUtils.pre(
									 '\\rowgrp'
										+'{\\str{'
											+'<u>First</u>, we use the exponent rule \"Division of Same Bases\" here.'
											+'When we divide same bases, we <u>subtract the exponents</u>.'
										+'}}'
										+'{\\str{&nbsp;}}'
										+'{\\str{'
											+'Take the exponent in the numerator and subtract the exponent in the denominator.'
										+'}}'
										+'{\\str{&nbsp;}}'
										+'{\\grp'
											+'{\\frac'
												+'{\\exp{\\str{&nbsp;$$base1}}{\\str{$$exp1}}}'
												+'{\\exp{\\str{&nbsp;$$base1}}{\\str{$$exp2}}}'
											+'}'
											+'{\\str{'
												+'&nbsp; means &nbsp; $$base1 <sup>$$exp1 - $$exp2</sup> &nbsp; or &nbsp; $$base1 <sup>$$expDiff</sup>'
											+'}}'
										+'}'
										+'{\\str{&nbsp;}}'
										+'{\\str{'
											+'<u>Second</u>, we still need to \"get rid of the negative exponent\" by taking the <u>reciprocal of the base</u> and changing the sign of the exponent.'
										+'}}'
										+'{\\str{&nbsp;}}'
										+'{\\grp'
											+'{\\str{$$base1 <sup> $$expDiff</sup>}}'
											+'{\\str{=}}'
											+'{\\frac'
												+'{\\str{1}}'
												+'{\\exp{\\str{&nbsp;$$base1}}{\\str{$$expans}}}'
											+'}'
										+'}'
							),
				line2: dataUtils.pre(
									 '\\rowgrp'
										+'{\\str{Evaluate the simplified expression:<span class=large>.</span>}}'
										+'{\\str{&nbsp;}}'
										+'{\\grp'
											+'{\\frac'
												+'{\\exp{\\str{&nbsp;$$base1}}{\\str{$$exp1}}}'
												+'{\\exp{\\str{&nbsp;$$base1}}{\\str{$$exp2}}}'
											+'}'
											+'{\\str{=}}'
											+'{\\str{$$base1 <sup>$$expans</sup>}}'
										+'}'
										+'{\\str{&nbsp;}}'
										+'{\\str{Any non-zero base raised to the power of zero is equal to 1 whole.}}'
							),
				helpAnswer: dataUtils.pre(
								'\\grp'
									+'{\\str{Simplified Answer: &nbsp;}}'
									+'{\\frac'
										+'{\\str{1}}'
										+'{\\exp{\\str{$$base1}}{\\str{$$expans}}}'
									+'}'
							),
				finalAnswer: dataUtils.pre(
								'\\rowgrp'
									+'{\\frac'
										+'{\\input{1}}'
										+'{\\input{16}}'
									+'}'
							),
				template: 'evaluateAfterSimplify' 
			 }
			,
			 // prob 22
			 {
				problemStatement: dataUtils.pre(
								'\\rowgrp'
									+'{\\grp'
										+'{\\str{Simplify: &nbsp;}}'
										+'{\\frac'
											+'{\\exp{\\str{&nbsp;$$base1}}{\\str{$$exp1}}}'
											+'{\\exp{\\str{&nbsp;$$base2}}{\\str{$$exp2}}}'
										+'}'
									+'}'
							),
				wellProblemStatement: dataUtils.pre(
									'\\css'
										+'{\\rowgrp'
											+'{\\html{&nbsp;}}'
											+'{\\grp'
												+'{\\frac'
													+'{\\exp{\\str{&nbsp;$$base1}}{\\str{$$exp1}}}'
													+'{\\exp{\\str{&nbsp;$$base2}}{\\str{$$exp2}}}'
												+'}'
												+'{\\str{=}}'
												+'{\\frac'
													+'{\\str{1}}'
													+'{\\exp{\\str{&nbsp;$$base1}}{\\str{$$expans}}}'
												+'}'
											+'}'
											+'{\\html{&nbsp;}}'
											+'{\\css'
												+'{\\grp'
													+'{\\str{Evaluate the simplified expression<span class=large>:</span>}}'
												+'}'
												+'{alert alert-info}'
											+'}'
											+'{\\grp'
												+'{$finalAnswer}'
											+'}'
										+'}{well}'
							),
				answerInstructions: '',
				base1: '7',
				exp1: '2',
				base2: '7',
				exp2: '5',
				expDiff: '-3',
				baseans: '7',
				expans: '3',
				solutionAnswer: dataUtils.pre(
								'\\rowgrp'
									+'{\\str{$$answerInstructions}}'
									+'{\\frac'
										+'{\\input{1}}'
										+'{\\exp{\\input{$$base1}}{\\input{$$expans}}}'
									+'}'
							),
				line1: dataUtils.pre(
									 '\\rowgrp'
										+'{\\str{'
											+'<u>First</u>, we use the exponent rule \"Division of Same Bases\" here.'
											+'When we divide same bases, we <u>subtract the exponents</u>.'
										+'}}'
										+'{\\str{&nbsp;}}'
										+'{\\str{'
											+'Take the exponent in the numerator and subtract the exponent in the denominator.'
										+'}}'
										+'{\\str{&nbsp;}}'
										+'{\\grp'
											+'{\\frac'
												+'{\\exp{\\str{&nbsp;$$base1}}{\\str{$$exp1}}}'
												+'{\\exp{\\str{&nbsp;$$base1}}{\\str{$$exp2}}}'
											+'}'
											+'{\\str{'
												+'&nbsp; means &nbsp; $$base1 <sup>$$exp1 - $$exp2</sup> &nbsp; or &nbsp; $$base1 <sup>$$expDiff</sup>'
											+'}}'
										+'}'
										+'{\\str{&nbsp;}}'
										+'{\\str{'
											+'<u>Second</u>, we still need to \"get rid of the negative exponent\" by taking the <u>reciprocal of the base</u> and changing the sign of the exponent.'
										+'}}'
										+'{\\str{&nbsp;}}'
										+'{\\grp'
											+'{\\str{$$base1 <sup> $$expDiff</sup>}}'
											+'{\\str{=}}'
											+'{\\frac'
												+'{\\str{1}}'
												+'{\\exp{\\str{&nbsp;$$base1}}{\\str{$$expans}}}'
											+'}'
										+'}'
							),
				line2: dataUtils.pre(
									 '\\rowgrp'
										+'{\\str{Evaluate the simplified expression:<span class=large>.</span>}}'
										+'{\\str{&nbsp;}}'
										+'{\\grp'
											+'{\\frac'
												+'{\\exp{\\str{&nbsp;$$base1}}{\\str{$$exp1}}}'
												+'{\\exp{\\str{&nbsp;$$base1}}{\\str{$$exp2}}}'
											+'}'
											+'{\\str{=}}'
											+'{\\str{$$base1 <sup>$$expans</sup>}}'
										+'}'
										+'{\\str{&nbsp;}}'
										+'{\\str{Any non-zero base raised to the power of zero is equal to 1 whole.}}'
							),
				helpAnswer: dataUtils.pre(
								'\\grp'
									+'{\\str{Simplified Answer: &nbsp;}}'
									+'{\\frac'
										+'{\\str{1}}'
										+'{\\exp{\\str{$$base1}}{\\str{$$expans}}}'
									+'}'
							),
				finalAnswer: dataUtils.pre(
								'\\rowgrp'
									+'{\\frac'
										+'{\\input{1}}'
										+'{\\input{343}}'
									+'}'
							),
				template: 'evaluateAfterSimplify' 
			 }
			 ,
			 // prob 23
			 {
				problemStatement: dataUtils.pre(
								'\\rowgrp'
									+'{\\grp'
										+'{\\str{Simplify: &nbsp;}}'
										+'{\\frac'
											+'{\\exp{\\str{&nbsp;$$base1}}{\\str{$$exp1}}}'
											+'{\\exp{\\str{&nbsp;$$base2}}{\\str{$$exp2}}}'
										+'}'
									+'}'
							),
				wellProblemStatement: dataUtils.pre(
									'\\css'
										+'{\\rowgrp'
											+'{\\html{&nbsp;}}'
											+'{\\grp'
												+'{\\frac'
													+'{\\exp{\\str{&nbsp;$$base1}}{\\str{$$exp1}}}'
													+'{\\exp{\\str{&nbsp;$$base2}}{\\str{$$exp2}}}'
												+'}'
												+'{\\str{=}}'
												+'{\\frac'
													+'{\\str{1}}'
													+'{\\exp{\\str{&nbsp;$$base1}}{\\str{$$expans}}}'
												+'}'
											+'}'
											+'{\\html{&nbsp;}}'
											+'{\\css'
												+'{\\grp'
													+'{\\str{Evaluate the simplified expression<span class=large>:</span>}}'
												+'}'
												+'{alert alert-info}'
											+'}'
											+'{\\grp'
												+'{$finalAnswer}'
											+'}'
										+'}{well}'
							),
				answerInstructions: '',
				base1: '(-5 )',
				exp1: '',
				expAssumed: '1',
				base2: '(-5 )',
				exp2: '3',
				expDiff: '-2',
				baseans: '(-5)',
				expans: '2',
				solutionAnswer: dataUtils.pre(
								'\\rowgrp'
									+'{\\str{$$answerInstructions}}'
									+'{\\frac'
										+'{\\input{1}}'
										+'{\\exp{\\input{$$baseans}}{\\input{$$expans}}}'
									+'}'
							),
				line1: dataUtils.pre(
									 '\\rowgrp'
										+'{\\str{'
											+'<u>First</u>, we use the exponent rule \"Division of Same Bases\" here.'
											+'When we divide same bases, we <u>subtract the exponents</u>.'
										+'}}'
										+'{\\str{&nbsp;}}'
										+'{\\str{'
											+'Take the exponent in the numerator and subtract the exponent in the denominator.'
										+'}}'
										+'{\\str{&nbsp;}}'
										+'{\\grp'
											+'{\\frac'
												+'{\\exp{\\str{&nbsp;$$base1}}{\\str{$$exp1}}}'
												+'{\\exp{\\str{&nbsp;$$base1}}{\\str{$$exp2}}}'
											+'}'
											+'{\\str{'
												+'&nbsp; means &nbsp; $$base1 <sup>$$expAssumed - $$exp2</sup> &nbsp; or &nbsp; $$base1 <sup>$$expDiff</sup>'
											+'}}'
										+'}'
										+'{\\str{&nbsp;}}'
										+'{\\str{'
											+'<u>Second</u>, we still need to \"get rid of the negative exponent\" by taking the <u>reciprocal of the base</u> and changing the sign of the exponent.'
										+'}}'
										+'{\\str{&nbsp;}}'
										+'{\\grp'
											+'{\\str{$$base1 <sup> $$expDiff</sup>}}'
											+'{\\str{=}}'
											+'{\\frac'
												+'{\\str{1}}'
												+'{\\exp{\\str{&nbsp;$$base1}}{\\str{$$expans}}}'
											+'}'
										+'}'
							),
				line2: dataUtils.pre(
									 '\\rowgrp'
										+'{\\str{Evaluate the simplified expression:<span class=large>.</span>}}'
										+'{\\str{&nbsp;}}'
										+'{\\grp'
											+'{\\frac'
												+'{\\exp{\\str{&nbsp;$$base1}}{\\str{$$exp1}}}'
												+'{\\exp{\\str{&nbsp;$$base1}}{\\str{$$exp2}}}'
											+'}'
											+'{\\str{=}}'
											+'{\\str{$$base1 <sup>$$expans</sup>}}'
										+'}'
										+'{\\str{&nbsp;}}'
										+'{\\str{Any non-zero base raised to the power of zero is equal to 1 whole.}}'
							),
				helpAnswer: dataUtils.pre(
								'\\grp'
									+'{\\str{Simplified Answer: &nbsp;}}'
									+'{\\frac'
										+'{\\str{1}}'
										+'{\\exp{\\str{$$baseans}}{\\str{$$expans}}}'
									+'}'
							),
				finalAnswer: dataUtils.pre(
								'\\rowgrp'
									+'{\\frac'
										+'{\\input{1}}'
										+'{\\input{25}}'
									+'}'
							),
				template: 'evaluateAfterSimplify' 
			 }
			 ,
			 // prob 24
			 {
				problemStatement: dataUtils.pre(
								'\\rowgrp'
									+'{\\grp'
										+'{\\str{Simplify: &nbsp;}}'
										+'{\\frac'
											+'{\\exp{\\str{&nbsp;$$base1}}{\\str{$$exp1}}}'
											+'{\\exp{\\str{&nbsp;$$base2}}{\\str{$$exp2}}}'
										+'}'
									+'}'
							),
				wellProblemStatement: dataUtils.pre(
									'\\css'
										+'{\\rowgrp'
											+'{\\html{&nbsp;}}'
											+'{\\grp'
												+'{\\frac'
													+'{\\exp{\\str{&nbsp;$$base1}}{\\str{$$exp1}}}'
													+'{\\exp{\\str{&nbsp;$$base2}}{\\str{$$exp2}}}'
												+'}'
												+'{\\str{=}}'
												+'{\\frac'
													+'{\\str{1}}'
													+'{\\exp{\\str{&nbsp;$$base1}}{\\str{$$expans}}}'
												+'}'
											+'}'
											+'{\\html{&nbsp;}}'
											+'{\\css'
												+'{\\grp'
													+'{\\str{Evaluate the simplified expression<span class=large>:</span>}}'
												+'}'
												+'{alert alert-info}'
											+'}'
											+'{\\grp'
												+'{$finalAnswer}'
											+'}'
										+'}{well}'
							),
				answerInstructions: '',
				base1: '(-4 )',
				exp1: '',
				expAssumed: '1',
				base2: '(-4 )',
				exp2: '5',
				expDiff: '-4',
				baseans: '(-4)',
				expans: '4',
				solutionAnswer: dataUtils.pre(
								'\\rowgrp'
									+'{\\str{$$answerInstructions}}'
									+'{\\frac'
										+'{\\input{1}}'
										+'{\\exp{\\input{$$baseans}}{\\input{$$expans}}}'
									+'}'
							),
				line1: dataUtils.pre(
									 '\\rowgrp'
										+'{\\str{'
											+'<u>First</u>, we use the exponent rule \"Division of Same Bases\" here.'
											+'When we divide same bases, we <u>subtract the exponents</u>.'
										+'}}'
										+'{\\str{&nbsp;}}'
										+'{\\str{'
											+'Take the exponent in the numerator and subtract the exponent in the denominator.'
										+'}}'
										+'{\\str{&nbsp;}}'
										+'{\\grp'
											+'{\\frac'
												+'{\\exp{\\str{&nbsp;$$base1}}{\\str{$$exp1}}}'
												+'{\\exp{\\str{&nbsp;$$base1}}{\\str{$$exp2}}}'
											+'}'
											+'{\\str{'
												+'&nbsp; means &nbsp; $$base1 <sup>$$expAssumed - $$exp2</sup> &nbsp; or &nbsp; $$base1 <sup>$$expDiff</sup>'
											+'}}'
										+'}'
										+'{\\str{&nbsp;}}'
										+'{\\str{'
											+'<u>Second</u>, we still need to \"get rid of the negative exponent\" by taking the <u>reciprocal of the base</u> and changing the sign of the exponent.'
										+'}}'
										+'{\\str{&nbsp;}}'
										+'{\\grp'
											+'{\\str{$$base1 <sup> $$expDiff</sup>}}'
											+'{\\str{=}}'
											+'{\\frac'
												+'{\\str{1}}'
												+'{\\exp{\\str{&nbsp;$$base1}}{\\str{$$expans}}}'
											+'}'
										+'}'
							),
				line2: dataUtils.pre(
									 '\\rowgrp'
										+'{\\str{Evaluate the simplified expression:<span class=large>.</span>}}'
										+'{\\str{&nbsp;}}'
										+'{\\grp'
											+'{\\frac'
												+'{\\exp{\\str{&nbsp;$$base1}}{\\str{$$exp1}}}'
												+'{\\exp{\\str{&nbsp;$$base1}}{\\str{$$exp2}}}'
											+'}'
											+'{\\str{=}}'
											+'{\\str{$$base1 <sup>$$expans</sup>}}'
										+'}'
										+'{\\str{&nbsp;}}'
										+'{\\str{Any non-zero base raised to the power of zero is equal to 1 whole.}}'
							),
				helpAnswer: dataUtils.pre(
								'\\grp'
									+'{\\str{Simplified Answer: &nbsp;}}'
									+'{\\frac'
										+'{\\str{1}}'
										+'{\\exp{\\str{$$baseans}}{\\str{$$expans}}}'
									+'}'
							),
				finalAnswer: dataUtils.pre(
								'\\rowgrp'
									+'{\\frac'
										+'{\\input{1}}'
										+'{\\input{256}}'
									+'}'
							),
				template: 'evaluateAfterSimplify' 
			 }
			 ,
			 // prob 25
			 {
				problemStatement: dataUtils.pre(
								'\\rowgrp'
									+'{\\grp'
										+'{\\str{Simplify: &nbsp;}}'
										+'{\\frac'
											+'{\\exp{\\str{&nbsp;$$base1}}{\\str{$$exp1}}}'
											+'{\\exp{\\str{&nbsp;$$base2}}{\\str{$$exp2}}}'
										+'}'
									+'}'
							),
				answerInstructions: '',
				base1: '3',
				exp1: '-4',
				expAssumed: '-4',
				base2: '3',
				exp2: '-2',
				expDiff: '-2',
				baseans: '3',
				expans: '2',
				solutionAnswer: dataUtils.pre(
								'\\rowgrp'
									+'{\\str{$$answerInstructions}}'
									+'{\\frac'
										+'{\\input{1}}'
										+'{\\exp{\\input{$$baseans}}{\\input{$$expans}}}'
									+'}'
							),
				line1: dataUtils.pre(
									 '\\rowgrp'
										+'{\\str{'
											+'<u>First</u>, we use the exponent rule \"Division of Same Bases\" here.'
											+'When we divide same bases, we <u>subtract the exponents</u>.'
										+'}}'
										+'{\\str{&nbsp;}}'
										+'{\\str{'
											+'Take the exponent in the numerator and subtract the exponent in the denominator.'
										+'}}'
										+'{\\str{&nbsp;}}'
										+'{\\grp'
											+'{\\frac'
												+'{\\exp{\\str{&nbsp;$$base1}}{\\str{$$exp1}}}'
												+'{\\exp{\\str{&nbsp;$$base1}}{\\str{$$exp2}}}'
											+'}'
											+'{\\str{'
												+'&nbsp; means &nbsp; $$base1 <sup>$$expAssumed - ($$exp2 )</sup> &nbsp; or &nbsp; $$base1 <sup>$$expDiff</sup>'
											+'}}'
										+'}'
										+'{\\str{&nbsp;}}'
										+'{\\str{'
											+'<u>Second</u>, we still need to \"get rid of the negative exponent\" by taking the <u>reciprocal of the base</u> and changing the sign of the exponent.'
										+'}}'
										+'{\\str{&nbsp;}}'
										+'{\\grp'
											+'{\\str{$$base1 <sup> $$expDiff</sup>}}'
											+'{\\str{=}}'
											+'{\\frac'
												+'{\\str{1}}'
												+'{\\exp{\\str{&nbsp;$$base1}}{\\str{$$expans}}}'
											+'}'
										+'}'
							),
				helpAnswer: dataUtils.pre(
								'\\grp'
									+'{\\str{Simplified Answer: &nbsp;}}'
									+'{\\frac'
										+'{\\str{1}}'
										+'{\\exp{\\str{$$baseans}}{\\str{$$expans}}}'
									+'}'
							),
				finalAnswer: dataUtils.pre(
								'\\rowgrp'
									+'{\\frac'
										+'{\\input{1}}'
										+'{\\input{256}}'
									+'}'
							),
				template: 'firstSimplify' 
			 }
			 ,
			 // prob 26
			{
				problemStatement: dataUtils.pre(
								'\\rowgrp'
									+'{\\grp'
										+'{\\str{Simplify: &nbsp;}}'
										+'{\\frac'
											+'{\\exp{\\str{&nbsp;$$base1}}{\\str{$$exp1}}}'
											+'{\\exp{\\str{&nbsp;$$base2}}{\\str{$$exp2}}}'
										+'}'
									+'}'
							),
				answerInstructions: '',
				base1: '6',
				exp1: '-3',
				expAssumed: '-3',
				base2: '6',
				exp2: '-2',
				expDiff: '-1',
				baseans: '6',
				expans: '1',
				solutionAnswer: dataUtils.pre(
								'\\rowgrp'
									+'{\\str{$$answerInstructions}}'
									+'{\\frac'
										+'{\\input{1}}'
										+'{\\input{$$baseans}}'
									+'}'
							),
				line1: dataUtils.pre(
									 '\\rowgrp'
										+'{\\str{'
											+'<u>First</u>, we use the exponent rule \"Division of Same Bases\" here.'
											+'When we divide same bases, we <u>subtract the exponents</u>.'
										+'}}'
										+'{\\str{&nbsp;}}'
										+'{\\str{'
											+'Take the exponent in the numerator and subtract the exponent in the denominator.'
										+'}}'
										+'{\\str{&nbsp;}}'
										+'{\\grp'
											+'{\\frac'
												+'{\\exp{\\str{&nbsp;$$base1}}{\\str{$$exp1}}}'
												+'{\\exp{\\str{&nbsp;$$base2}}{\\str{$$exp2}}}'
											+'}'
											+'{\\str{'
												+'&nbsp; means &nbsp; $$base1 <sup>$$expAssumed - ($$exp2 )</sup> &nbsp; or &nbsp; $$base1 <sup>$$expDiff</sup>'
											+'}}'
										+'}'
										+'{\\str{&nbsp;}}'
										+'{\\str{'
											+'<u>Second</u>, we still need to \"get rid of the negative exponent\" by taking the <u>reciprocal of the base</u> and changing the sign of the exponent.'
										+'}}'
										+'{\\str{&nbsp;}}'
										+'{\\grp'
											+'{\\str{$$base1 <sup> $$expDiff</sup>}}'
											+'{\\str{=}}'
											+'{\\frac'
												+'{\\str{1}}'
												+'{\\exp{\\str{&nbsp;$$baseans}}{\\str{$$expans}}}'
											+'}'
										+'{\\str{=}}'
										+'{\\frac'
												+'{\\str{1}}'
												+'{\\str{&nbsp;$$baseans}}'
											+'}'
										+'}'
							),
				helpAnswer: dataUtils.pre(
								'\\grp'
									+'{\\str{<br>Simplified Answer:&nbsp;}}'
									+'{\\frac'
										+'{\\str{1}}'
										+'{\\str{&nbsp;$$baseans}}'
									+'}'
							),
				template: 'firstSimplify' 
			 }
			    ,
		  	// prob 27
			{
				problemStatement: dataUtils.pre(
									'\\rowgrp'
										+'{\\str{Simplify:}}'
										+'{\\str{&nbsp;}}'
										+'{\grp'
											+'{\\exp{\\str{&nbsp;$$base1}}{\\str{$$exp1}}}'
											+'{\\str{&nbsp;*&nbsp;}}'
											+'{\\exp{\\str{&nbsp;$$base2}}{\\str{$$exp2}}}'
											+'{\\str{&nbsp;*&nbsp;}}'
											+'{\\exp{\\str{&nbsp;$$base3}}{\\str{$$exp3}}}'
											+'{\\str{&nbsp;*&nbsp;}}'
											+'{\\exp{\\str{&nbsp;$$base4}}{\\str{$$exp4}}}'
										+'}'
										+'{\\str{&nbsp;}}'
										+'{\\str{All simplified answers must have only positive exponents.}}'
							),
				answerInstructions: '',
				base1: '2',
				exp1: '3',
				base2: '2',
				exp2: '-5',
				base3: '11',
				exp3: '-3',
				base4: '11',
				exp4: '4',
				numAns: '11',
				denAns: '2',
				denExpAns: '2',
				firstExpEval: '-2',
				secondExpEval: '1',
				solutionAnswer: dataUtils.pre(
									'\\css'
										+'{\\rowgrp'
											+'{\\str{$$answerInstructions}}'
											+'{\\grp'
													+'{\\frac'
														+'{\\input{$$base3}}'
														+'{\\exp{\\input{$$denAns}}{\\input{$$denExpAns}}}'
													+'}'
											+'}'
										+'}'
										+'{marginLeft80px}'
							),
				line1: dataUtils.pre(
								'\\rowgrp'
									+'{\\str{<u>First</u>, we use the exponent rule \"Multiplication of Same Bases\" here. When we multiply same bases, we <u>add the exponents</u>.}}'
									+'{\\str{&nbsp;}}'
									+'{\\str{$$base1<sup> $$exp1</sup> &nbsp;*&nbsp; $$base2<sup> $$exp2</sup> &nbsp;*&nbsp; $$base3<sup> $$exp3</sup> &nbsp;*&nbsp; $$base4<sup> $$exp4</sup> &nbsp;&nbsp;becomes&nbsp;&nbsp; $$base1<sup> $$firstExpEval</sup> * $$base3}}'
									+'{\\str{&nbsp;}}'
									+'{\\str{<u>Second</u>, we still need to \"get rid of the negative exponent\" by taking the <u>reciprocal of the base</u> and changing the sign of the exponent.}}'
									+'{\\str{&nbsp;}}'
									+'{\\str{In this case we have <u>two different bases</u>, the base of $$base1 and the base of $$base3.}}'
									+'{\\str{&nbsp;}}'
									+'{\\str{The base of $$base1 has a negative exponent. Therefore, we take the reciprocal of the base of $$base1, and it is flipped from the numerator to the denominator. The sign of the exponent becomes positive.}}'
									+'{\\str{&nbsp;}}'
									+'{\\grp'
										+'{\\str{$$base1<sup> $$firstExpEval</sup>}}'	
										+'{\\str{=}}'
										+'{\\frac'
											+'{\\str{1}}'
											+'{\\exp{\\str{&nbsp;$$denAns}}{\\str{$$denExpAns}}}'
										+'}'
									+'}'
									+'{\\str{&nbsp;}}'
									+'{\\str{The base of $$base3 has a positive base so it will stay in the numerator where it is.}}'
									+'{\\str{&nbsp;}}'
									+'{\\str{11 = 11}}'
									+'{\\str{&nbsp;}}'
									+'{\\grp'
										+'{\\str{so:&nbsp;&nbsp;&nbsp;&nbsp;$$base1<sup>$$firstExpEval</sup>&nbsp;&nbsp;*&nbsp;&nbsp;$$base3}}'
										+'{\\str{&nbsp;&nbsp;=&nbsp;&nbsp;}}'
										+'{\\frac'
											+'{\\str{1}}'
											+'{\\exp{\\str{&nbsp;$$denAns}}{\\str{$$denExpAns}}}'
										+'}'
										+'{\\str{*}}'
										+'{\\frac'
											+'{\\str{$$base3}}'
											+'{\\exp{\\str{1}}{\\str{}}}'
										+'}'
										+'{\\str{&nbsp;&nbsp;=&nbsp;&nbsp;}}'
										+'{\\frac'
											+'{\\str{$$base3}}'
											+'{\\exp{\\str{&nbsp;$$denAns}}{\\str{$$denExpAns}}}'
										+'}'
									+'}'
							),
				helpAnswer:  dataUtils.pre(
									'\\grp'
										+'{\\str{Simplified Answer: &nbsp;}}'
										+'{\\frac'
											+'{\\str{$$base3}}'
											+'{\\exp{\\str{&nbsp;$$denAns}}{\\str{$$denExpAns}}}'
										+'}'
							),	
				template: 'firstSimplify' 
			 }
			     ,
		  	// prob 28
			{
				problemStatement: dataUtils.pre(
								'\\pan{12}{11}'
									+'{\\rowgrp'
										+'{\\str{Simplify:}}'
										+'{\\str{&nbsp;}}'
										+'{\grp'
											+'{\\exp{\\str{&nbsp;$$base1}}{\\str{$$exp1}}}'
											+'{\\str{&nbsp;*&nbsp;}}'
											+'{\\exp{\\str{&nbsp;$$base2}}{\\str{$$exp2}}}'
											+'{\\str{&nbsp;*&nbsp;}}'
											+'{\\exp{\\str{&nbsp;$$base3}}{\\str{$$exp3}}}'
											+'{\\str{&nbsp;*&nbsp;}}'
											+'{\\exp{\\str{&nbsp;$$base4}}{\\str{$$exp4}}}'
										+'}'
										+'{\\str{&nbsp;}}'
										+'{\\str{All simplified answers must have only positive exponents.}}'
									+'}'
							),
				answerInstructions: '',
				base1: '6',
				exp1: '-3',
				base2: '6',
				exp2: '-1',
				base3: '(-2 )',
				exp3: '-2',
				base4: '(-2 )',
				exp4: '4',
				numBaseAns: '(-2)',
				denBaseAns: '6',
				numExpAns: '2',
				denExpAns: '4',
				firstExpEval: '-4',
				secondExpEval: '2',
				solutionAnswer: dataUtils.pre(
									'\\css'
										+'{\\rowgrp'
											+'{\\str{$$answerInstructions}}'
											+'{\\grp'
													+'{\\frac'
														+'{\\exp{\\input{$$numBaseAns}}{\\input{$$numExpAns}}}'
														+'{\\exp{\\input{$$denBaseAns}}{\\input{$$denExpAns}}}'
													+'}'
											+'}'
										+'}'
										+'{marginLeft80px}'
							),
				line1: dataUtils.pre(
								'\\rowgrp'
									+'{\\str{<u>First</u>, we use the exponent rule \"Multiplication of Same Bases\" here. When we multiply same bases, we <u>add the exponents</u>.}}'
									+'{\\str{&nbsp;}}'
									+'{\\str{$$base1<sup> $$exp1</sup> &nbsp;*&nbsp; $$base2<sup> $$exp2</sup> &nbsp;*&nbsp; $$base3<sup> $$exp3</sup> &nbsp;*&nbsp; $$base4<sup> $$exp4</sup> &nbsp;&nbsp;becomes&nbsp;&nbsp; $$base1<sup> $$firstExpEval</sup> * $$base3<sup> $$secondExpEval</sup>}}'
									+'{\\str{&nbsp;}}'
									+'{\\str{<u>Second</u>, we still need to \"get rid of the negative exponent\" by taking the <u>reciprocal of the base</u> and changing the sign of the exponent.}}'
									+'{\\str{&nbsp;}}'
									+'{\\str{In this case we have <u>two different bases</u>, the base of $$base1 and the base of $$base3.}}'
									+'{\\str{&nbsp;}}'
									+'{\\str{The base of $$base1 has a negative exponent. Therefore, we take the reciprocal of the base of $$base1, and it is flipped from the numerator to the denominator. The sign of the exponent becomes positive.}}'
									+'{\\str{&nbsp;}}'
									+'{\\grp'
										+'{\\str{$$base1<sup> $$firstExpEval</sup>}}'	
										+'{\\str{=}}'
										+'{\\frac'
											+'{\\str{1}}'
											+'{\\exp{\\str{&nbsp;$$denBaseAns}}{\\str{$$denExpAns}}}'
										+'}'
									+'}'
									+'{\\str{&nbsp;}}'
									+'{\\str{The base of $$base3 has a positive base so it will stay in the numerator where it is.}}'
									+'{\\str{&nbsp;}}'
									+'{\\str{$$base3<sup> $$numExpAns</sup> = $$base3<sup> $$numExpAns</sup>}}'
									+'{\\str{&nbsp;}}'
									+'{\\grp'
										+'{\\str{so:&nbsp;&nbsp;&nbsp;&nbsp;$$base1<sup> $$firstExpEval</sup>&nbsp;&nbsp;*&nbsp;&nbsp;$$base3<sup> $$secondExpEval</sup>}}'
										+'{\\str{&nbsp;&nbsp;=&nbsp;&nbsp;}}'
										+'{\\frac'
											+'{\\exp{\\str{1}}{\\str{}}}'
											+'{\\exp{\\str{&nbsp;$$denBaseAns}}{\\str{$$denExpAns}}}'
										+'}'
										+'{\\str{*}}'
										+'{\\frac'
											+'{\\exp{\\str{$$numBaseAns}}{\\str{$$numExpAns}}}'
											+'{\\exp{\\str{1}}{\\str{}}}'
										+'}'
										+'{\\str{&nbsp;&nbsp;=&nbsp;&nbsp;}}'
										+'{\\frac'
											+'{\\exp{\\str{$$numBaseAns}}{\\str{$$numExpAns}}}'
											+'{\\exp{\\str{&nbsp;$$denBaseAns}}{\\str{$$denExpAns}}}'
										+'}'
									+'}'
							),
				helpAnswer:  dataUtils.pre(
									'\\grp'
										+'{\\str{Simplified Answer: &nbsp;}}'
										+'{\\frac'
											+'{\\exp{\\str{$$numBaseAns}}{\\str{$$numExpAns}}}'
											+'{\\exp{\\str{&nbsp;$$denBaseAns}}{\\str{$$denExpAns}}}'
										+'}'
							),	
				template: 'firstSimplify' 
			 }
			 ,
			 // prob 29
			{
				problemStatement: dataUtils.pre(
								'\\rowgrp'
									+'{\\grp'
										+'{\\str{Simplify: &nbsp;}}'
										+'{\\frac'
											+'{\\exp{\\str{&nbsp;$$base1}}{\\str{$$exp1}}}'
											+'{\\exp{\\str{&nbsp;$$base2}}{\\str{$$exp2}}}'
										+'}'
									+'}'
							),
				answerInstructions: '',
				base1: '3',
				exp1: '-6',
				base2: '2',
				exp2: '-4',
				numBaseAns: '2',
				numExpAns: '4',
				denBaseAns: '3',
				denExpAns: '6',
				solutionAnswer: dataUtils.pre(
									'\\css'
										+'{\\rowgrp'
											+'{\\str{$$answerInstructions}}'
											+'{\\grp'
													+'{\\frac'
														+'{\\exp{\\input{$$numBaseAns}}{\\input{$$numExpAns}}}'
														+'{\\exp{\\input{$$denBaseAns}}{\\input{$$denExpAns}}}'
													+'}'
											+'}'
										+'}'
										+'{marginLeft80px}'
							),
				line1: dataUtils.pre(
									 '\\rowgrp'
										+'{\\str{'
											+'To simplify this expression, we have only one rule of exponents to complete&#45; <u>getting rid of the negative exponents</u>.'
										+'}}'
										+'{\\str{&nbsp;}}'
										+'{\\str{'
											+'In this case we have two different bases, the base of $$base1 and the base of $$base2.'
										+'}}'
										+'{\\str{&nbsp;}}'
										+'{\\str{'
											+'When we visualize each of these bases individually we can say that:'
										+'}}'
										+'{\\str{&nbsp;}}'
										+'{\\grp'
											+'{\\frac'
												+'{\\exp{\\str{&nbsp;$$base1}}{\\str{$$exp1}}}'
												+'{\\exp{\\str{&nbsp;$$base2}}{\\str{$$exp2}}}'
											+'}'
											+'{\\str{'
												+'&nbsp; is the same as &nbsp; '
											+'}}'
											+'{\\frac'
												+'{\\exp{\\str{&nbsp;$$base1}}{\\str{$$exp1}}}'
												+'{\\exp{\\str{1}}{\\str{}}}'
											+'}'
											+'{\\str{&nbsp; * &nbsp;}}'
											+'{\\frac'
												+'{\\exp{\\str{1}}{\\str{}}}'
												+'{\\exp{\\str{&nbsp;$$base2}}{\\str{$$exp2}}}'
											+'}'
										+'}'
										+'{\\str{&nbsp;}}'
										+'{\\str{'
											+'We take the reciprocal of the base of $$base1, and the sign of the exponent becomes positive.'
										+'}}'
										+'{\\str{&nbsp;}}'
										+'{\\grp'
											+'{\\str{$$base1 <sup> $$exp1</sup>}}'
											+'{\\str{=}}'
											+'{\\frac'
												+'{\\exp{\\str{1}}{}}'
												+'{\\exp{\\str{&nbsp;$$base1}}{\\str{$$denExpAns}}}'
											+'}'
										+'}'
										+'{\\str{&nbsp;}}'
										+'{\\str{'
											+'We take the reciprocal of the base of $$base2, and the sign of the exponent becomes positive.'
										+'}}'
										+'{\\str{&nbsp;}}'
										+'{\\grp'
											+'{\\frac'
												+'{\\exp{\\str{1}}{\\str{}}}'
												+'{\\exp{\\str{&nbsp;$$base2}}{\\str{$$exp2}}}'
											+'}'
											+'{\\str{=}}'
											+'{\\frac'
												+'{\\exp{\\str{&nbsp;$$base2}}{\\str{$$numExpAns}}}'
												+'{\\exp{\\str{1}}{\\str{}}}'
											+'}'
										+'}'
										+'{\\str{&nbsp;}}'
										+'{\\str{So:}}'
										+'{\\str{&nbsp;}}'
										+'{\\grp'
											+'{\\frac'
												+'{\\exp{\\str{&nbsp;$$base1}}{\\str{$$exp1}}}'
												+'{\\exp{\\str{1}}{\\str{}}}'
											+'}'
											+'{\\str{&nbsp; * &nbsp;}}'
											+'{\\frac'
												+'{\\exp{\\str{1}}{\\str{}}}'
												+'{\\exp{\\str{&nbsp;$$base2}}{\\str{$$exp2}}}'
											+'}'
											+'{\\str{&nbsp; = &nbsp;}}'
											+'{\\frac'
												+'{\\exp{\\str{1}}{}}'
												+'{\\exp{\\str{&nbsp;$$base1}}{\\str{$$denExpAns}}}'
											+'}'
											+'{\\str{&nbsp; * &nbsp;}}'
											+'{\\frac'
												+'{\\exp{\\str{&nbsp;$$base2}}{\\str{$$numExpAns}}}'
												+'{\\exp{\\str{1}}{\\str{}}}'
											+'}'
											+'{\\str{&nbsp; = &nbsp;}}'
											+'{\\frac'
												+'{\\exp{\\str{$$numBaseAns}}{\\str{$$numExpAns}}}'
												+'{\\exp{\\str{$$denBaseAns}}{\\str{$$denExpAns}}}'
											+'}'
										+'}'
							),
				helpAnswer: dataUtils.pre(
								'\\grp'
									+'{\\str{<br>Simplified Answer:&nbsp;}}'
									+'{\\frac'
										+'{\\exp{\\str{$$numBaseAns}}{\\str{$$numExpAns}}}'
										+'{\\exp{\\str{$$denBaseAns}}{\\str{$$denExpAns}}}'
									+'}'
							),
				template: 'firstSimplify' 
			 }
			  ,
			 // prob 30
			{
				problemStatement: dataUtils.pre(
								'\\rowgrp'
									+'{\\grp'
										+'{\\str{Simplify: &nbsp;}}'
										+'{\\frac'
											+'{\\exp{\\str{&nbsp;$$base1}}{\\str{$$exp1}}}'
											+'{\\exp{\\str{&nbsp;$$base2}}{\\str{$$exp2}}}'
										+'}'
									+'}'
							),
				answerInstructions: '',
				base1: '11',
				exp1: '-3',
				base2: '5',
				exp2: '-2',
				numBaseAns: '5',
				numExpAns: '2',
				denBaseAns: '11',
				denExpAns: '3',
				solutionAnswer: dataUtils.pre(
									'\\css'
										+'{\\rowgrp'
											+'{\\str{$$answerInstructions}}'
											+'{\\grp'
													+'{\\frac'
														+'{\\exp{\\input{$$numBaseAns}}{\\input{$$numExpAns}}}'
														+'{\\exp{\\input{$$denBaseAns}}{\\input{$$denExpAns}}}'
													+'}'
											+'}'
										+'}'
										+'{marginLeft80px}'
							),
				line1: dataUtils.pre(
									 '\\rowgrp'
										+'{\\str{'
											+'To simplify this expression, we have only one rule of exponents to complete&#45; <u>getting rid of the negative exponents</u>.'
										+'}}'
										+'{\\str{&nbsp;}}'
										+'{\\str{'
											+'In this case we have two different bases, the base of $$base1 and the base of $$base2.'
										+'}}'
										+'{\\str{&nbsp;}}'
										+'{\\str{'
											+'When we visualize each of these bases individually we can say that:'
										+'}}'
										+'{\\str{&nbsp;}}'
										+'{\\grp'
											+'{\\frac'
												+'{\\exp{\\str{&nbsp;$$base1}}{\\str{$$exp1}}}'
												+'{\\exp{\\str{&nbsp;$$base2}}{\\str{$$exp2}}}'
											+'}'
											+'{\\str{'
												+'&nbsp; is the same as &nbsp; '
											+'}}'
											+'{\\frac'
												+'{\\exp{\\str{&nbsp;$$base1}}{\\str{$$exp1}}}'
												+'{\\exp{\\str{1}}{\\str{}}}'
											+'}'
											+'{\\str{&nbsp; * &nbsp;}}'
											+'{\\frac'
												+'{\\exp{\\str{1}}{\\str{}}}'
												+'{\\exp{\\str{&nbsp;$$base2}}{\\str{$$exp2}}}'
											+'}'
										+'}'
										+'{\\str{&nbsp;}}'
										+'{\\str{'
											+'We take the reciprocal of the base of $$base1, and the sign of the exponent becomes positive.'
										+'}}'
										+'{\\str{&nbsp;}}'
										+'{\\grp'
											+'{\\str{$$base1 <sup> $$exp1</sup>}}'
											+'{\\str{=}}'
											+'{\\frac'
												+'{\\exp{\\str{1}}{}}'
												+'{\\exp{\\str{&nbsp;$$base1}}{\\str{$$denExpAns}}}'
											+'}'
										+'}'
										+'{\\str{&nbsp;}}'
										+'{\\str{'
											+'We take the reciprocal of the base of $$base2, and the sign of the exponent becomes positive.'
										+'}}'
										+'{\\str{&nbsp;}}'
										+'{\\grp'
											+'{\\frac'
												+'{\\exp{\\str{1}}{\\str{}}}'
												+'{\\exp{\\str{&nbsp;$$base2}}{\\str{$$exp2}}}'
											+'}'
											+'{\\str{=}}'
											+'{\\frac'
												+'{\\exp{\\str{&nbsp;$$base2}}{\\str{$$numExpAns}}}'
												+'{\\exp{\\str{1}}{\\str{}}}'
											+'}'
										+'}'
										+'{\\str{&nbsp;}}'
										+'{\\str{So:}}'
										+'{\\str{&nbsp;}}'
										+'{\\grp'
											+'{\\frac'
												+'{\\exp{\\str{&nbsp;$$base1}}{\\str{$$exp1}}}'
												+'{\\exp{\\str{1}}{\\str{}}}'
											+'}'
											+'{\\str{&nbsp; * &nbsp;}}'
											+'{\\frac'
												+'{\\exp{\\str{1}}{\\str{}}}'
												+'{\\exp{\\str{&nbsp;$$base2}}{\\str{$$exp2}}}'
											+'}'
											+'{\\str{&nbsp; = &nbsp;}}'
											+'{\\frac'
												+'{\\exp{\\str{1}}{}}'
												+'{\\exp{\\str{&nbsp;$$base1}}{\\str{$$denExpAns}}}'
											+'}'
											+'{\\str{&nbsp; * &nbsp;}}'
											+'{\\frac'
												+'{\\exp{\\str{&nbsp;$$base2}}{\\str{$$numExpAns}}}'
												+'{\\exp{\\str{1}}{\\str{}}}'
											+'}'
											+'{\\str{&nbsp; = &nbsp;}}'
											+'{\\frac'
												+'{\\exp{\\str{$$numBaseAns}}{\\str{$$numExpAns}}}'
												+'{\\exp{\\str{$$denBaseAns}}{\\str{$$denExpAns}}}'
											+'}'
										+'}'
							),
				helpAnswer: dataUtils.pre(
								'\\grp'
									+'{\\str{<br>Simplified Answer:&nbsp;}}'
									+'{\\frac'
										+'{\\exp{\\str{$$numBaseAns}}{\\str{$$numExpAns}}}'
										+'{\\exp{\\str{$$denBaseAns}}{\\str{$$denExpAns}}}'
									+'}'
							),
				template: 'firstSimplify' 
			 }
			     ,
		  	// prob 31
			{
				problemStatement: dataUtils.pre(
								'\\pan{12}{11}'
									+'{\\rowgrp'
										+'{\\str{Simplify:}}'
										+'{\\str{&nbsp;}}'
										+'{\grp'
											+'{\\frac'
												+'{\\grp'
													+'{\\exp{\\str{&nbsp;&nbsp;$$base1}}{\\str{$$exp1}}}'
													+'{\\str{&nbsp;*&nbsp;}}'
													+'{\\exp{\\str{&nbsp;&nbsp;$$base2}}{\\str{$$exp2}}}'						
												+'}'
												+'{\\grp'
													+'{\\exp{\\str{$$base3}}{\\str{$$exp3}}}'
													+'{\\str{&nbsp;*&nbsp;}}'
													+'{\\exp{\\str{&nbsp;$$base4}}{\\str{$$exp4}}}'
												+'}'
											+'}'
										+'}'
										+'{\\str{&nbsp;}}'
										+'{\\str{All simplified answers must have only positive exponents.}}'
									+'}'
							),
				answerInstructions: '',
				base1: '3',
				exp1: '3',
				base2: '5',
				exp2: '-2',
				base3: '3',
				exp3: '5',
				base4: '5',
				exp4: '2',
				numBaseAns: '1',
				numExpAns: '',
				denBaseAns: '3',
				denExpAns: '2',
				secondBaseAns: '5',
				secondExpAns: '4',
				firstExpEval: '-2',
				secondExpEval: '-4',
				solutionAnswer: dataUtils.pre(
									'\\css'
										+'{\\rowgrp'
											+'{\\str{$$answerInstructions}}'
											+'{\\frac'
												+'{\\input{1}}'
												+'{\\grp'
													+'{\\exp{\\input{$$denBaseAns}}{\\input{$$denExpAns}}}'
													+'{\\str{&nbsp;*&nbsp;}}'
													+'{\\exp{\\input{$$secondBaseAns}}{\\input{$$secondExpAns}}}'
												+'}'
											+'}'
										+'}'
										+'{marginLeft80px}'
							),
				line1: dataUtils.pre(
								'\\rowgrp'
									+'{\\str{<u>First</u>, we use the exponent rule \"Division of Same Bases\" here. <br>When we multiply same bases, we <u>subtract the exponents</u>.}}'
									+'{\\str{&nbsp;}}'
									+'{\\str{Here we have two different bases, bases of $$base1 and bases of $$base2. <br>Simplify each \"same base\" separately.}}'
									+'{\\str{&nbsp;}}'
									+'{\\grp'
										+'{\\frac'
											+'{\\exp{\\str{&nbsp;$$base1}}{\\str{$$exp1}}}'
											+'{\\exp{\\str{&nbsp;$$base3}}{\\str{$$exp3}}}'
										+'}'
										+'{\\str{&nbsp;&nbsp;means&nbsp;&nbsp;}}'
										+'{\\str{$$base1<sup> $$exp1 - $$exp3</sup>}}'
										+'{\\str{&nbsp;&nbsp;or&nbsp;&nbsp;}}'
										+'{\\str{$$base1<sup> $$firstExpEval</sup>}}'
									+'}'
									+'{\\str{&nbsp;}}'
									+'{\\grp'
										+'{\\frac'
											+'{\\exp{\\str{&nbsp;$$base2}}{\\str{$$exp2}}}'
											+'{\\exp{\\str{&nbsp;$$base4}}{\\str{$$exp4}}}'
										+'}'
										+'{\\str{&nbsp;&nbsp;means&nbsp;&nbsp;}}'
										+'{\\str{$$base2<sup> $$exp2 - $$exp4</sup>}}'
										+'{\\str{&nbsp;&nbsp;or&nbsp;&nbsp;}}'
										+'{\\str{$$base2<sup> $$secondExpEval</sup>}}'
									+'}'
									+'{\\str{&nbsp;}}'
									+'{\\grp'
										+'{\\str{So:&nbsp;&nbsp;&nbsp;&nbsp; }}'
										+'{\\frac'
											+'{\\grp'
												+'{\\exp{\\str{&nbsp;&nbsp;$$base1}}{\\str{$$exp1}}}'
												+'{\\str{&nbsp;*&nbsp;}}'
												+'{\\exp{\\str{&nbsp;&nbsp;$$base2}}{\\str{$$exp2}}}'						
											+'}'
											+'{\\grp'
												+'{\\exp{\\str{$$base3}}{\\str{$$exp3}}}'
												+'{\\str{&nbsp;*&nbsp;}}'
												+'{\\exp{\\str{&nbsp;$$base4}}{\\str{$$exp4}}}'
											+'}'
										+'}'
										+'{\\str{&nbsp;=&nbsp;}}'
										+'{\\str{$$base1<sup> $$firstExpEval</sup>}}'
										+'{\\str{&nbsp;*&nbsp;}}'
										+'{\\str{$$base2<sup> $$secondExpEval</sup>}}'
									+'}'
									+'{\\str{&nbsp;}}'
									+'{\\str{<u>Second</u>, we still need to <u>get rid of the negative exponents</u>.}}'
									+'{\\str{&nbsp;}}'
									+'{\\str{In this case we have two different bases, the base of $$base1 and the base of $$base2.}}'
									+'{\\str{&nbsp;}}'
									+'{\\str{When we visualize each of these bases individually we can say that: }}'
									+'{\\str{&nbsp;}}'
									+'{\\grp'
										+'{\\str{$$base1<sup> $$firstExpEval</sup>}}'
										+'{\\str{&nbsp;*&nbsp;}}'
										+'{\\str{$$base2<sup> $$secondExpEval</sup>}}'
										+'{\\str{&nbsp;&nbsp; is the same as &nbsp;&nbsp;}}'
										+'{\\frac'
											+'{\\exp{\\str{&nbsp;$$denBaseAns}}{\\str{$$firstExpEval}}}'
											+'{\\exp{\\str{1}}{\\str{}}}'
										+'}'
										+'{\\str{&nbsp;*&nbsp;}}'
										+'{\\frac'
											+'{\\exp{\\str{&nbsp;$$secondBaseAns}}{\\str{$$secondExpEval}}}'
											+'{\\exp{\\str{1}}{\\str{}}}'
										+'}'
									+'}'
									+'{\\str{&nbsp;}}'
									+'{\\str{We take the reciprocal of the base of $$base1, and the sign of the exponent becomes positive.}}'
									+'{\\str{&nbsp;}}'
									+'{\\grp'
										+'{\\str{$$base1<sup> $$firstExpEval</sup>}}'
										+'{\\str{&nbsp;=&nbsp;}}'
										+'{\\frac'
											+'{\\exp{\\str{1}}{\\str{}}}'
											+'{\\exp{\\str{&nbsp;$$denBaseAns}}{\\str{$$denExpAns}}}'
										+'}'
									+'}'
									+'{\\str{&nbsp;}}'
									+'{\\str{We take the reciprocal of the base of $$base2, and the sign of the exponent becomes positive.}}'
									+'{\\str{&nbsp;}}'
									+'{\\grp'
										+'{\\str{$$base2<sup> $$secondExpEval</sup>}}'
										+'{\\str{&nbsp;=&nbsp;}}'
										+'{\\frac'
											+'{\\exp{\\str{1}}{\\str{}}}'
											+'{\\exp{\\str{&nbsp;$$secondBaseAns}}{\\str{$$secondExpAns}}}'
										+'}'
									+'}'
									+'{\\str{&nbsp;}}'
									+'{\\grp'
										+'{\\str{So:&nbsp;&nbsp;&nbsp;&nbsp; }}'
										+'{\\str{$$base1<sup> $$firstExpEval</sup>}}'
										+'{\\str{&nbsp;*&nbsp;}}'
										+'{\\str{$$base2<sup> $$secondExpEval</sup>}}'
										+'{\\str{&nbsp;&nbsp;=&nbsp;&nbsp;}}'
										+'{\\frac'
											+'{\\exp{\\str{1}}{\\str{}}}'
											+'{\\exp{\\str{&nbsp;$$denBaseAns}}{\\str{$$denExpAns}}}'
										+'}'
										+'{\\str{&nbsp;*&nbsp;}}'
										+'{\\frac'
											+'{\\exp{\\str{1}}{\\str{}}}'
											+'{\\exp{\\str{&nbsp;$$secondBaseAns}}{\\str{$$secondExpAns}}}'
										+'}'
										+'{\\str{&nbsp;&nbsp;=&nbsp;&nbsp;}}'
										+'{\\frac'
											+'{\\exp{\\str{1}}{\\str{}}}'
											+'{\\grp'
												+'{\\exp{\\str{&nbsp;$$denBaseAns}}{\\str{$$denExpAns}}}'
												+'{\\str{&nbsp;*&nbsp;}}'
												+'{\\exp{\\str{&nbsp;$$secondBaseAns}}{\\str{$$secondExpAns}}}'
											+'}'
										+'}'
									+'}'
							),
				helpAnswer:  dataUtils.pre(
									'\\grp'
										+'{\\str{Simplified Answer: &nbsp;}}'
										+'{\\frac'
											+'{\\exp{\\str{1}}{\\str{}}}'
											+'{\\grp'
												+'{\\exp{\\str{&nbsp;$$denBaseAns}}{\\str{$$denExpAns}}}'
												+'{\\str{&nbsp;*&nbsp;}}'
												+'{\\exp{\\str{&nbsp;$$secondBaseAns}}{\\str{$$secondExpAns}}}'
											+'}'
										+'}'
							),	
				template: 'firstSimplify' 
			 }
			      ,
		  	// prob 32
			{
				problemStatement: dataUtils.pre(
								'\\pan{12}{11}'
									+'{\\rowgrp'
										+'{\\str{Simplify:}}'
										+'{\\str{&nbsp;}}'
										+'{\\frac'
											+'{\grp'
												+'{\\exp{\\str{&nbsp;$$base1}}{\\str{$$exp1}}}'
												+'{\\str{&nbsp;*&nbsp;}}'
												+'{\\exp{\\str{&nbsp;&nbsp;$$base2}}{\\str{$$exp2}}}'
											+'}'
											+'{\grp'
												+'{\\exp{\\str{$$base3}}{\\str{$$exp3}}}'
												+'{\\str{&nbsp;*&nbsp;}}'
												+'{\\exp{\\str{&nbsp;$$base4}}{\\str{$$exp4}}}'
											+'}'
										+'}'
										+'{\\str{&nbsp;}}'
										+'{\\str{All simplified answers must have only positive exponents.}}'
									+'}'
							),
				answerInstructions: '',
				base1: '7',
				exp1: '-4',
				base2: '11',
				exp2: '-1',
				base3: '7',
				exp3: '2',
				base4: '11',
				exp4: '3',
				numBaseAns: '1',
				numExpAns: '',
				denBaseAns: '7',
				denExpAns: '6',
				secondBaseAns: '11',
				secondExpAns: '4',
				firstExpEval: '-6',
				secondExpEval: '-4',
				solutionAnswer: dataUtils.pre(
									'\\css'
										+'{\\rowgrp'
											+'{\\str{$$answerInstructions}}'
											+'{\\frac'
												+'{\\input{1}}'
												+'{\\grp'
													+'{\\exp{\\input{$$denBaseAns}}{\\input{$$denExpAns}}}'
													+'{\\str{&nbsp;*&nbsp;}}'
													+'{\\exp{\\input{$$secondBaseAns}}{\\input{$$secondExpAns}}}'
												+'}'
											+'}'
										+'}'
										+'{marginLeft80px}'
							),
				line1: dataUtils.pre(
								'\\rowgrp'
									+'{\\str{<u>First</u>, we use the exponent rule \"Division of Same Bases\" here. <br>When we multiply same bases, we <u>subtract the exponents</u>.}}'
									+'{\\str{&nbsp;}}'
									+'{\\str{Here we have two different bases, bases of $$base1 and bases of $$base2. <br>Simplify each \"same base\" separately.}}'
									+'{\\str{&nbsp;}}'
									+'{\\grp'
										+'{\\frac'
											+'{\\exp{\\str{&nbsp;$$base1}}{\\str{$$exp1}}}'
											+'{\\exp{\\str{&nbsp;$$base3}}{\\str{$$exp3}}}'
										+'}'
										+'{\\str{&nbsp;&nbsp;means&nbsp;&nbsp;}}'
										+'{\\str{$$base1<sup> $$exp1 - $$exp3</sup>}}'
										+'{\\str{&nbsp;&nbsp;or&nbsp;&nbsp;}}'
										+'{\\str{$$base1<sup> $$firstExpEval</sup>}}'
									+'}'
									+'{\\str{&nbsp;}}'
									+'{\\grp'
										+'{\\frac'
											+'{\\exp{\\str{&nbsp;$$base2}}{\\str{$$exp2}}}'
											+'{\\exp{\\str{&nbsp;$$base4}}{\\str{$$exp4}}}'
										+'}'
										+'{\\str{&nbsp;&nbsp;means&nbsp;&nbsp;}}'
										+'{\\str{$$base2<sup> $$exp2 - $$exp4</sup>}}'
										+'{\\str{&nbsp;&nbsp;or&nbsp;&nbsp;}}'
										+'{\\str{$$base2<sup> $$secondExpEval</sup>}}'
									+'}'
									+'{\\str{&nbsp;}}'
									+'{\\grp'
										+'{\\str{So:&nbsp;&nbsp;&nbsp;&nbsp; }}'
										+'{\\frac'
											+'{\grp'
												+'{\\exp{\\str{&nbsp;$$base1}}{\\str{$$exp1}}}'
												+'{\\str{&nbsp;*&nbsp;}}'
												+'{\\exp{\\str{&nbsp;&nbsp;$$base2}}{\\str{$$exp2}}}'
											+'}'
											+'{\grp'
												+'{\\exp{\\str{$$base3}}{\\str{$$exp3}}}'
												+'{\\str{&nbsp;*&nbsp;}}'
												+'{\\exp{\\str{&nbsp;$$base4}}{\\str{$$exp4}}}'
											+'}'
										+'}'
										+'{\\str{&nbsp;=&nbsp;}}'
										+'{\\str{$$base1<sup> $$firstExpEval</sup>}}'
										+'{\\str{&nbsp;*&nbsp;}}'
										+'{\\str{$$base2<sup> $$secondExpEval</sup>}}'
									+'}'
									+'{\\str{&nbsp;}}'
									+'{\\str{<u>Second</u>, we still need to <u>get rid of the negative exponents</u>.}}'
									+'{\\str{&nbsp;}}'
									+'{\\str{In this case we have two different bases, the base of $$base1 and the base of $$base2.}}'
									+'{\\str{&nbsp;}}'
									+'{\\str{When we visualize each of these bases individually we can say that: }}'
									+'{\\str{&nbsp;}}'
									+'{\\grp'
										+'{\\str{$$base1<sup> $$firstExpEval</sup>}}'
										+'{\\str{&nbsp;*&nbsp;}}'
										+'{\\str{$$base2<sup> $$secondExpEval</sup>}}'
										+'{\\str{&nbsp;&nbsp; is the same as &nbsp;&nbsp;}}'
										+'{\\frac'
											+'{\\exp{\\str{&nbsp;$$denBaseAns}}{\\str{$$firstExpEval}}}'
											+'{\\exp{\\str{1}}{\\str{}}}'
										+'}'
										+'{\\str{&nbsp;*&nbsp;}}'
										+'{\\frac'
											+'{\\exp{\\str{&nbsp;$$secondBaseAns}}{\\str{$$secondExpEval}}}'
											+'{\\exp{\\str{1}}{\\str{}}}'
										+'}'
									+'}'
									+'{\\str{&nbsp;}}'
									+'{\\str{We take the reciprocal of the base of $$base1, and the sign of the exponent becomes positive.}}'
									+'{\\str{&nbsp;}}'
									+'{\\grp'
										+'{\\str{$$base1<sup> $$firstExpEval</sup>}}'
										+'{\\str{&nbsp;=&nbsp;}}'
										+'{\\frac'
											+'{\\exp{\\str{1}}{\\str{}}}'
											+'{\\exp{\\str{&nbsp;$$denBaseAns}}{\\str{$$denExpAns}}}'
										+'}'
									+'}'
									+'{\\str{&nbsp;}}'
									+'{\\str{We take the reciprocal of the base of $$base2, and the sign of the exponent becomes positive.}}'
									+'{\\str{&nbsp;}}'
									+'{\\grp'
										+'{\\str{$$base2<sup> $$secondExpEval</sup>}}'
										+'{\\str{&nbsp;=&nbsp;}}'
										+'{\\frac'
											+'{\\exp{\\str{1}}{\\str{}}}'
											+'{\\exp{\\str{&nbsp;$$secondBaseAns}}{\\str{$$secondExpAns}}}'
										+'}'
									+'}'
									+'{\\str{&nbsp;}}'
									+'{\\grp'
										+'{\\str{So:&nbsp;&nbsp;&nbsp;&nbsp; }}'
										+'{\\str{$$base1<sup> $$firstExpEval</sup>}}'
										+'{\\str{&nbsp;*&nbsp;}}'
										+'{\\str{$$base2<sup> $$secondExpEval</sup>}}'
										+'{\\str{&nbsp;&nbsp;=&nbsp;&nbsp;}}'
										+'{\\frac'
											+'{\\exp{\\str{1}}{\\str{}}}'
											+'{\\exp{\\str{&nbsp;$$denBaseAns}}{\\str{$$denExpAns}}}'
										+'}'
										+'{\\str{&nbsp;*&nbsp;}}'
										+'{\\frac'
											+'{\\exp{\\str{1}}{\\str{}}}'
											+'{\\exp{\\str{&nbsp;$$secondBaseAns}}{\\str{$$secondExpAns}}}'
										+'}'
										+'{\\str{&nbsp;&nbsp;=&nbsp;&nbsp;}}'
										+'{\\frac'
											+'{\\exp{\\str{1}}{\\str{}}}'
											+'{\\grp'
												+'{\\exp{\\str{&nbsp;$$denBaseAns}}{\\str{$$denExpAns}}}'
												+'{\\str{&nbsp;*&nbsp;}}'
												+'{\\exp{\\str{&nbsp;$$secondBaseAns}}{\\str{$$secondExpAns}}}'
											+'}'
										+'}'
									+'}'
							),
				helpAnswer:  dataUtils.pre(
									'\\grp'
										+'{\\str{Simplified Answer: &nbsp;}}'
										+'{\\frac'
											+'{\\exp{\\str{1}}{\\str{}}}'
											+'{\\grp'
												+'{\\exp{\\str{&nbsp;$$denBaseAns}}{\\str{$$denExpAns}}}'
												+'{\\str{&nbsp;*&nbsp;}}'
												+'{\\exp{\\str{&nbsp;$$secondBaseAns}}{\\str{$$secondExpAns}}}'
											+'}'
										+'}'
							),	
				template: 'firstSimplify' 
			 }
			       ,
		  	// prob 33
			{
				problemStatement: dataUtils.pre(
								'\\pan{12}{11}'
									+'{\\rowgrp'
										+'{\\str{Simplify:}}'
										+'{\\str{&nbsp;}}'
										+'{\\frac'
											+'{\grp'
												+'{\\exp{\\str{&nbsp;$$base1}}{\\str{$$exp1}}}'
												+'{\\str{&nbsp;*&nbsp;}}'
												+'{\\exp{\\str{&nbsp;&nbsp;$$base2}}{\\str{$$exp2}}}'
											+'}'
											+'{\grp'
												+'{\\exp{\\str{$$base3}}{\\str{$$exp3}}}'
												+'{\\str{&nbsp;*&nbsp;}}'
												+'{\\exp{\\str{&nbsp;$$base4}}{\\str{$$exp4}}}'
											+'}'
										+'}'
										+'{\\str{&nbsp;}}'
										+'{\\str{All simplified answers must have only positive exponents.}}'
									+'}'
							),
				answerInstructions: '',
				base1: '2',
				exp1: '-2',
				base2: '17',
				exp2: '4',
				base3: '2',
				exp3: '3',
				base4: '17',
				exp4: '2',
				numBaseAns: '1',
				numExpAns: '',
				denBaseAns: '2',
				denExpAns: '5',
				secondBaseAns: '17',
				secondExpAns: '2',
				firstExpEval: '-5',
				secondExpEval: '-2',
				solutionAnswer: dataUtils.pre(
									'\\css'
										+'{\\rowgrp'
											+'{\\str{$$answerInstructions}}'
											+'{\\frac'
												+'{\\input{1}}'
												+'{\\grp'
													+'{\\exp{\\input{$$denBaseAns}}{\\input{$$denExpAns}}}'
													+'{\\str{&nbsp;*&nbsp;}}'
													+'{\\exp{\\input{$$secondBaseAns}}{\\input{$$secondExpAns}}}'
												+'}'
											+'}'
										+'}'
										+'{marginLeft80px}'
							),
				line1: dataUtils.pre(
								'\\rowgrp'
									+'{\\str{<u>First</u>, we use the exponent rule \"Division of Same Bases\" here. <br>When we multiply same bases, we <u>subtract the exponents</u>.}}'
									+'{\\str{&nbsp;}}'
									+'{\\str{Here we have two different bases, bases of $$base1 and bases of $$base2. <br>Simplify each \"same base\" separately.}}'
									+'{\\str{&nbsp;}}'
									+'{\\grp'
										+'{\\frac'
											+'{\\exp{\\str{&nbsp;$$base1}}{\\str{$$exp1}}}'
											+'{\\exp{\\str{&nbsp;$$base3}}{\\str{$$exp3}}}'
										+'}'
										+'{\\str{&nbsp;&nbsp;means&nbsp;&nbsp;}}'
										+'{\\str{$$base1<sup> $$exp1 - $$exp3</sup>}}'
										+'{\\str{&nbsp;&nbsp;or&nbsp;&nbsp;}}'
										+'{\\str{$$base1<sup> $$firstExpEval</sup>}}'
									+'}'
									+'{\\str{&nbsp;}}'
									+'{\\grp'
										+'{\\frac'
											+'{\\exp{\\str{&nbsp;$$base2}}{\\str{$$exp2}}}'
											+'{\\exp{\\str{&nbsp;$$base4}}{\\str{$$exp4}}}'
										+'}'
										+'{\\str{&nbsp;&nbsp;means&nbsp;&nbsp;}}'
										+'{\\str{$$base2<sup> $$exp2 - $$exp4</sup>}}'
										+'{\\str{&nbsp;&nbsp;or&nbsp;&nbsp;}}'
										+'{\\str{$$base2<sup> $$secondExpEval</sup>}}'
									+'}'
									+'{\\str{&nbsp;}}'
									+'{\\grp'
										+'{\\str{So:&nbsp;&nbsp;&nbsp;&nbsp; }}'
										+'{\\frac'
											+'{\grp'
												+'{\\exp{\\str{&nbsp;$$base1}}{\\str{$$exp1}}}'
												+'{\\str{&nbsp;*&nbsp;}}'
												+'{\\exp{\\str{&nbsp;&nbsp;$$base2}}{\\str{$$exp2}}}'
											+'}'
											+'{\grp'
												+'{\\exp{\\str{$$base3}}{\\str{$$exp3}}}'
												+'{\\str{&nbsp;*&nbsp;}}'
												+'{\\exp{\\str{&nbsp;$$base4}}{\\str{$$exp4}}}'
											+'}'
										+'}'
										+'{\\str{&nbsp;=&nbsp;}}'
										+'{\\str{$$base1<sup> $$firstExpEval</sup>}}'
										+'{\\str{&nbsp;*&nbsp;}}'
										+'{\\str{$$base2<sup> $$secondExpEval</sup>}}'
									+'}'
									+'{\\str{&nbsp;}}'
									+'{\\str{<u>Second</u>, we still need to <u>get rid of the negative exponents</u>.}}'
									+'{\\str{&nbsp;}}'
									+'{\\str{In this case we have two different bases, the base of $$base1 and the base of $$base2.}}'
									+'{\\str{&nbsp;}}'
									+'{\\str{When we visualize each of these bases individually we can say that: }}'
									+'{\\str{&nbsp;}}'
									+'{\\grp'
										+'{\\str{$$base1<sup> $$firstExpEval</sup>}}'
										+'{\\str{&nbsp;*&nbsp;}}'
										+'{\\str{$$base2<sup> $$secondExpEval</sup>}}'
										+'{\\str{&nbsp;&nbsp; is the same as &nbsp;&nbsp;}}'
										+'{\\frac'
											+'{\\exp{\\str{&nbsp;$$denBaseAns}}{\\str{$$firstExpEval}}}'
											+'{\\exp{\\str{1}}{\\str{}}}'
										+'}'
										+'{\\str{&nbsp;*&nbsp;}}'
										+'{\\frac'
											+'{\\exp{\\str{&nbsp;$$secondBaseAns}}{\\str{$$secondExpEval}}}'
											+'{\\exp{\\str{1}}{\\str{}}}'
										+'}'
									+'}'
									+'{\\str{&nbsp;}}'
									+'{\\str{We take the reciprocal of the base of $$base1, and the sign of the exponent becomes positive.}}'
									+'{\\str{&nbsp;}}'
									+'{\\grp'
										+'{\\str{$$base1<sup> $$firstExpEval</sup>}}'
										+'{\\str{&nbsp;=&nbsp;}}'
										+'{\\frac'
											+'{\\exp{\\str{1}}{\\str{}}}'
											+'{\\exp{\\str{&nbsp;$$denBaseAns}}{\\str{$$denExpAns}}}'
										+'}'
									+'}'
									+'{\\str{&nbsp;}}'
									+'{\\str{We take the reciprocal of the base of $$base2, and the sign of the exponent becomes positive.}}'
									+'{\\str{&nbsp;}}'
									+'{\\grp'
										+'{\\str{$$base2<sup> $$secondExpEval</sup>}}'
										+'{\\str{&nbsp;=&nbsp;}}'
										+'{\\frac'
											+'{\\exp{\\str{1}}{\\str{}}}'
											+'{\\exp{\\str{&nbsp;$$secondBaseAns}}{\\str{$$secondExpAns}}}'
										+'}'
									+'}'
									+'{\\str{&nbsp;}}'
									+'{\\grp'
										+'{\\str{So:&nbsp;&nbsp;&nbsp;&nbsp; }}'
										+'{\\str{$$base1<sup> $$firstExpEval</sup>}}'
										+'{\\str{&nbsp;*&nbsp;}}'
										+'{\\str{$$base2<sup> $$secondExpEval</sup>}}'
										+'{\\str{&nbsp;&nbsp;=&nbsp;&nbsp;}}'
										+'{\\frac'
											+'{\\exp{\\str{1}}{\\str{}}}'
											+'{\\exp{\\str{&nbsp;$$denBaseAns}}{\\str{$$denExpAns}}}'
										+'}'
										+'{\\str{&nbsp;*&nbsp;}}'
										+'{\\frac'
											+'{\\exp{\\str{1}}{\\str{}}}'
											+'{\\exp{\\str{&nbsp;$$secondBaseAns}}{\\str{$$secondExpAns}}}'
										+'}'
										+'{\\str{&nbsp;&nbsp;=&nbsp;&nbsp;}}'
										+'{\\frac'
											+'{\\exp{\\str{1}}{\\str{}}}'
											+'{\\grp'
												+'{\\exp{\\str{&nbsp;$$denBaseAns}}{\\str{$$denExpAns}}}'
												+'{\\str{&nbsp;*&nbsp;}}'
												+'{\\exp{\\str{&nbsp;$$secondBaseAns}}{\\str{$$secondExpAns}}}'
											+'}'
										+'}'
									+'}'
							),
				helpAnswer:  dataUtils.pre(
									'\\grp'
										+'{\\str{Simplified Answer: &nbsp;}}'
										+'{\\frac'
											+'{\\exp{\\str{1}}{\\str{}}}'
											+'{\\grp'
												+'{\\exp{\\str{&nbsp;$$denBaseAns}}{\\str{$$denExpAns}}}'
												+'{\\str{&nbsp;*&nbsp;}}'
												+'{\\exp{\\str{&nbsp;$$secondBaseAns}}{\\str{$$secondExpAns}}}'
											+'}'
										+'}'
							),	
				template: 'firstSimplify' 
			 }
			       ,
		  	// prob 34
			{
				problemStatement: dataUtils.pre(
								'\\pan{12}{11}'
									+'{\\rowgrp'
										+'{\\str{Simplify:}}'
										+'{\\str{&nbsp;}}'
										+'{\\frac'
											+'{\grp'
												+'{\\exp{\\str{&nbsp;$$base1}}{\\str{$$exp1}}}'
												+'{\\str{&nbsp;*&nbsp;}}'
												+'{\\exp{\\str{&nbsp;&nbsp;$$base2}}{\\str{$$exp2}}}'
											+'}'
											+'{\grp'
												+'{\\exp{\\str{$$base3}}{\\str{$$exp3}}}'
												+'{\\str{&nbsp;*&nbsp;}}'
												+'{\\exp{\\str{&nbsp;$$base4}}{\\str{$$exp4}}}'
											+'}'
										+'}'
										+'{\\str{&nbsp;}}'
										+'{\\str{All simplified answers must have only positive exponents.}}'
									+'}'
							),
				answerInstructions: '',
				base1: '5',
				exp1: '-3',
				base2: '9',
				exp2: '3',
				base3: '5',
				exp3: '',
				exp3Assumed: '1',
				base4: '9',
				exp4: '2',
				numBaseAns: '9',
				numExpAns: '',
				denBaseAns: '5',
				denExpAns: '4',
				secondBaseAns: '9',
				secondExpAns: '2',
				firstExpEval: '-4',
				secondExpEval: '1',
				solutionAnswer: dataUtils.pre(
									'\\css'
										+'{\\rowgrp'
											+'{\\str{$$answerInstructions}}'
											+'{\\grp'
												+'{\\frac'
													+'{\\input{$$base2}}'
													+'{\\exp{\\input{$$denBaseAns}}{\\input{$$denExpAns}}}'
												+'}'
											+'}'
										+'}'
										+'{marginLeft80px}'
							),
				line1: dataUtils.pre(
								'\\rowgrp'
									+'{\\str{<u>First</u>, we use the exponent rule \"Division of Same Bases\" here. <br>When we multiply same bases, we <u>subtract the exponents</u>.}}'
									+'{\\str{&nbsp;}}'
									+'{\\str{Here we have two different bases, bases of $$base1 and bases of $$base2. <br>Simplify each \"same base\" separately.}}'
									+'{\\str{&nbsp;}}'
									+'{\\grp'
										+'{\\frac'
											+'{\\exp{\\str{&nbsp;$$base1}}{\\str{$$exp1}}}'
											+'{\\exp{\\str{&nbsp;$$base3}}{\\str{$$exp3}}}'
										+'}'
										+'{\\str{&nbsp;&nbsp;means&nbsp;&nbsp;}}'
										+'{\\str{$$base1<sup> $$exp1 - $$exp3</sup>}}'
										+'{\\str{&nbsp;&nbsp;or&nbsp;&nbsp;}}'
										+'{\\str{$$base1<sup> $$firstExpEval</sup>}}'
									+'}'
									+'{\\str{&nbsp;}}'
									+'{\\grp'
										+'{\\frac'
											+'{\\exp{\\str{&nbsp;$$base2}}{\\str{$$exp2}}}'
											+'{\\exp{\\str{&nbsp;$$base4}}{\\str{$$exp4}}}'
										+'}'
										+'{\\str{&nbsp;&nbsp;means&nbsp;&nbsp;}}'
										+'{\\str{$$base2<sup> $$exp2 - $$exp4</sup>}}'
										+'{\\str{&nbsp;&nbsp;or&nbsp;&nbsp;}}'
										+'{\\str{$$base2<sup> $$secondExpEval</sup>}}'
										+'{\\str{&nbsp;&nbsp;=&nbsp;&nbsp;}}'
										+'{\\str{$$base2}}'
									+'}'
									+'{\\str{&nbsp;}}'
									+'{\\grp'
										+'{\\str{So:&nbsp;&nbsp;&nbsp;&nbsp; }}'
										+'{\\frac'
											+'{\grp'
												+'{\\exp{\\str{&nbsp;$$base1}}{\\str{$$exp1}}}'
												+'{\\str{&nbsp;*&nbsp;}}'
												+'{\\exp{\\str{&nbsp;&nbsp;$$base2}}{\\str{$$exp2}}}'
											+'}'
											+'{\grp'
												+'{\\exp{\\str{$$base3}}{\\str{$$exp3}}}'
												+'{\\str{&nbsp;*&nbsp;}}'
												+'{\\exp{\\str{&nbsp;$$base4}}{\\str{$$exp4}}}'
											+'}'
										+'}'
										+'{\\str{&nbsp;=&nbsp;}}'
										+'{\\str{$$base1<sup> $$firstExpEval</sup>}}'
										+'{\\str{&nbsp;*&nbsp;}}'
										+'{\\str{$$base2}}'
									+'}'
									+'{\\str{&nbsp;}}'
									+'{\\str{<u>Second</u>, we still need to <u>get rid of the negative exponents</u>.}}'
									+'{\\str{&nbsp;}}'
									+'{\\str{In this case we have two different bases, the base of $$base1 and the base of $$base2.}}'
									+'{\\str{&nbsp;}}'
									+'{\\str{When we visualize each of these bases individually we can say that: }}'
									+'{\\str{&nbsp;}}'
									+'{\\grp'
										+'{\\str{$$base1<sup> $$firstExpEval</sup>}}'
										+'{\\str{&nbsp;*&nbsp;}}'
										+'{\\str{$$base2}}'
										+'{\\str{&nbsp;&nbsp; is the same as &nbsp;&nbsp;}}'
										+'{\\frac'
											+'{\\exp{\\str{&nbsp;$$denBaseAns}}{\\str{$$firstExpEval}}}'
											+'{\\exp{\\str{1}}{\\str{}}}'
										+'}'
										+'{\\str{&nbsp;*&nbsp;}}'
										+'{\\frac'
											+'{\\exp{\\str{&nbsp;$$secondBaseAns}}{\\str{}}}'
											+'{\\exp{\\str{1}}{\\str{}}}'
										+'}'
									+'}'
									+'{\\str{&nbsp;}}'
									+'{\\str{We take the reciprocal of the base of $$base1, and the sign of the exponent becomes positive.}}'
									+'{\\str{&nbsp;}}'
									+'{\\grp'
										+'{\\str{$$base1<sup> $$firstExpEval</sup>}}'
										+'{\\str{&nbsp;=&nbsp;}}'
										+'{\\frac'
											+'{\\exp{\\str{1}}{\\str{}}}'
											+'{\\exp{\\str{&nbsp;$$denBaseAns}}{\\str{$$denExpAns}}}'
										+'}'
									+'}'
									+'{\\str{&nbsp;}}'
									+'{\\str{The base of $$base2 already has a positive exponent, so we leave it where it is&#45; in the numerator.}}'
									+'{\\str{&nbsp;}}'
									+'{\\grp'
										+'{\\frac'
											+'{\\exp{\\str{$$base2}}{\\str{}}}'
											+'{\\exp{\\str{1}}{\\str{}}}'
										+'}'
										+'{\\str{&nbsp;=&nbsp;}}'
										+'{\\frac'
											+'{\\exp{\\str{$$base2}}{\\str{}}}'
											+'{\\exp{\\str{1}}{\\str{}}}'
										+'}'
									+'}'
									+'{\\str{&nbsp;}}'
									+'{\\grp'
										+'{\\str{So:&nbsp;&nbsp;&nbsp;&nbsp; }}'
										+'{\\str{$$base1<sup> $$firstExpEval</sup>}}'
										+'{\\str{&nbsp;*&nbsp;}}'
										+'{\\str{$$base2}}'
										+'{\\str{&nbsp;&nbsp;=&nbsp;&nbsp;}}'
										+'{\\frac'
											+'{\\exp{\\str{1}}{\\str{}}}'
											+'{\\exp{\\str{&nbsp;$$denBaseAns}}{\\str{$$denExpAns}}}'
										+'}'
										+'{\\str{&nbsp;*&nbsp;}}'
										+'{\\frac'
											+'{\\exp{\\str{$$base2}}{\\str{}}}'
											+'{\\exp{\\str{1}}{\\str{}}}'
										+'}'
										+'{\\str{&nbsp;&nbsp;=&nbsp;&nbsp;}}'
										+'{\\frac'
											+'{\\exp{\\str{$$base2}}{\\str{}}}'
											+'{\\exp{\\str{&nbsp;$$denBaseAns}}{\\str{$$denExpAns}}}'
										+'}'
									+'}'
							),
				helpAnswer:  dataUtils.pre(
									'\\grp'
										+'{\\str{Simplified Answer: &nbsp;}}'
										+'{\\frac'
											+'{\\exp{\\str{$$base2}}{\\str{}}}'
											+'{\\exp{\\str{&nbsp;$$denBaseAns}}{\\str{$$denExpAns}}}'
										+'}'
							),	
				template: 'firstSimplify' 
			 }
			       ,
		  	// prob 35
			{
				problemStatement: dataUtils.pre(
								'\\pan{12}{11}'
									+'{\\rowgrp'
										+'{\\str{Simplify:}}'
										+'{\\str{&nbsp;}}'
										+'{\\frac'
											+'{\grp'
												+'{\\exp{\\str{&nbsp;$$base1}}{\\str{$$exp1}}}'
												+'{\\str{&nbsp;*&nbsp;}}'
												+'{\\exp{\\str{&nbsp;&nbsp;$$base2}}{\\str{$$exp2}}}'
											+'}'
											+'{\grp'
												+'{\\exp{\\str{$$base3}}{\\str{$$exp3}}}'
												+'{\\str{&nbsp;*&nbsp;}}'
												+'{\\exp{\\str{&nbsp;$$base4}}{\\str{$$exp4}}}'
											+'}'
										+'}'
										+'{\\str{&nbsp;}}'
										+'{\\str{All simplified answers must have only positive exponents.}}'
									+'}'
							),
				wellProblemStatement: dataUtils.pre(
									'\\css'
										+'{\\rowgrp'
											+'{\\html{&nbsp;}}'
											+'{\\grp'
												+'{\\frac'
													+'{\grp'
														+'{\\exp{\\str{&nbsp;$$base1}}{\\str{$$exp1}}}'
														+'{\\str{&nbsp;*&nbsp;}}'
														+'{\\exp{\\str{&nbsp;&nbsp;$$base2}}{\\str{$$exp2}}}'
													+'}'
													+'{\grp'
														+'{\\exp{\\str{$$base3}}{\\str{$$exp3}}}'
														+'{\\str{&nbsp;*&nbsp;}}'
														+'{\\exp{\\str{&nbsp;$$base4}}{\\str{$$exp4}}}'
													+'}'
												+'}'
												+'{\\str{&nbsp;=&nbsp;}}'
												+'{\\frac'
													+'{\\exp{\\str{1}}{\\str{}}}'
													+'{\\exp{\\str{&nbsp;$$denBaseAns}}{\\str{$$denExpAns}}}'
												+'}'
											+'}'
											+'{\\html{&nbsp;}}'
											+'{\\css'
												+'{\\grp'
													+'{\\str{Evaluate the simplified expression<span class=large>:</span>}}'
												+'}'
												+'{alert alert-info}'
											+'}'
											+'{\\grp'
												+'{$$finalAnswer}'
											+'}'
										+'}{well}'
							),
				answerInstructions: '',
				base1: '4',
				exp1: '2',
				base2: '7',
				exp2: '3',
				base3: '4',
				exp3: '2',
				base4: '7',
				exp4: '5',
				numBaseAns: '1',
				numExpAns: '',
				denBaseAns: '7',
				denExpAns: '2',
				secondBaseAns: '7',
				secondExpAns: '2',
				firstExpEval: '0',
				secondExpEval: '-2',
				solutionAnswer: dataUtils.pre(
									'\\css'
										+'{\\rowgrp'
											+'{\\str{$$answerInstructions}}'
											+'{\\grp'
												+'{\\frac'
													+'{\\input{1}}'
													+'{\\exp{\\input{$$denBaseAns}}{\\input{$$denExpAns}}}'
												+'}'
											+'}'
										+'}'
										+'{marginLeft80px}'
							),
				line1: dataUtils.pre(
								'\\rowgrp'
									+'{\\str{<u>First</u>, we use the exponent rule \"Division of Same Bases\" here. <br>When we multiply same bases, we <u>subtract the exponents</u>.}}'
									+'{\\str{&nbsp;}}'
									+'{\\str{Here we have two different bases, bases of $$base1 and bases of $$base2. <br>Simplify each \"same base\" separately.}}'
									+'{\\str{&nbsp;}}'
									+'{\\grp'
										+'{\\frac'
											+'{\\exp{\\str{&nbsp;$$base1}}{\\str{$$exp1}}}'
											+'{\\exp{\\str{&nbsp;$$base3}}{\\str{$$exp3}}}'
										+'}'
										+'{\\str{&nbsp;&nbsp;means&nbsp;&nbsp;}}'
										+'{\\str{$$base1<sup> $$exp1 - $$exp3</sup>}}'
										+'{\\str{&nbsp;&nbsp;or&nbsp;&nbsp;}}'
										+'{\\str{$$base1<sup> $$firstExpEval</sup>}}'
										+'{\\str{&nbsp;&nbsp;=&nbsp;&nbsp; 1}}'
									+'}'
									+'{\\str{&nbsp;}}'
									+'{\\grp'
										+'{\\frac'
											+'{\\exp{\\str{&nbsp;$$base2}}{\\str{$$exp2}}}'
											+'{\\exp{\\str{&nbsp;$$base4}}{\\str{$$exp4}}}'
										+'}'
										+'{\\str{&nbsp;&nbsp;means&nbsp;&nbsp;}}'
										+'{\\str{$$base2<sup> $$exp2 - $$exp4</sup>}}'
										+'{\\str{&nbsp;&nbsp;or&nbsp;&nbsp;}}'
										+'{\\str{$$base2<sup> $$secondExpEval</sup>}}'
									+'}'
									+'{\\str{&nbsp;}}'
									+'{\\grp'
										+'{\\str{So:&nbsp;&nbsp;&nbsp;&nbsp; }}'
										+'{\\frac'
											+'{\grp'
												+'{\\exp{\\str{&nbsp;$$base1}}{\\str{$$exp1}}}'
												+'{\\str{&nbsp;*&nbsp;}}'
												+'{\\exp{\\str{&nbsp;&nbsp;$$base2}}{\\str{$$exp2}}}'
											+'}'
											+'{\grp'
												+'{\\exp{\\str{$$base3}}{\\str{$$exp3}}}'
												+'{\\str{&nbsp;*&nbsp;}}'
												+'{\\exp{\\str{&nbsp;$$base4}}{\\str{$$exp4}}}'
											+'}'
										+'}'
										+'{\\str{&nbsp;=&nbsp;}}'
										+'{\\str{1}}'
										+'{\\str{&nbsp;*&nbsp;}}'
										+'{\\str{$$base2<sup> $$secondExpEval</sup>}}'
									+'}'
									+'{\\str{&nbsp;}}'
									+'{\\str{<u>Second</u>, we still need to <u>get rid of the negative exponents</u>.}}'
									+'{\\str{&nbsp;}}'
									+'{\\str{Only the base of $$base2 has a negative exponent.}}'
									+'{\\str{&nbsp;}}'
									+'{\\str{We take the reciprocal of the base of $$base2, and the sign of the exponent becomes positive.}}'
									+'{\\str{&nbsp;}}'
									+'{\\grp'
										+'{\\str{$$base2<sup> $$secondExpEval</sup>}}'
										+'{\\str{&nbsp;=&nbsp;}}'
										+'{\\frac'
											+'{\\exp{\\str{1}}{\\str{}}}'
											+'{\\exp{\\str{&nbsp;$$secondBaseAns}}{\\str{$$secondExpAns}}}'
										+'}'
									+'}'
									+'{\\str{&nbsp;}}'
									+'{\\grp'
										+'{\\str{So:&nbsp;&nbsp;&nbsp;&nbsp; }}'
										+'{\\str{1}}'
										+'{\\str{&nbsp;*&nbsp;}}'
										+'{\\str{$$base2<sup> $$secondExpEval</sup>}}'
										+'{\\str{&nbsp;&nbsp;=&nbsp;&nbsp;}}'
										+'{\\frac'
											+'{\\exp{\\str{1}}{\\str{}}}'
											+'{\\exp{\\str{&nbsp;$$denBaseAns}}{\\str{$$denExpAns}}}'
										+'}'
									+'}'
							),
				helpAnswer:  dataUtils.pre(
									'\\grp'
										+'{\\str{Simplified Answer: &nbsp;}}'
										+'{\\frac'
											+'{\\exp{\\str{1}}{\\str{}}}'
											+'{\\exp{\\str{&nbsp;$$denBaseAns}}{\\str{$$denExpAns}}}'
										+'}'
							),	
				finalAnswer:  dataUtils.pre(
									'\\grp'
										+'{\\frac'
											+'{\\input{1}}'
											+'{\\input{49}}'
										+'}'
							),	
				template: 'evaluateMoveControls' 
			 }
			       ,
		  	// prob 36
			{
				problemStatement: dataUtils.pre(
								'\\pan{12}{11}'
									+'{\\rowgrp'
										+'{\\str{Simplify:}}'
										+'{\\str{&nbsp;}}'
										+'{\\frac'
											+'{\grp'
												+'{\\exp{\\str{&nbsp;$$base1}}{\\str{$$exp1}}}'
												+'{\\str{&nbsp;*&nbsp;}}'
												+'{\\exp{\\str{&nbsp;&nbsp;$$base2}}{\\str{$$exp2}}}'
											+'}'
											+'{\grp'
												+'{\\exp{\\str{$$base3}}{\\str{$$exp3}}}'
												+'{\\str{&nbsp;*&nbsp;}}'
												+'{\\exp{\\str{&nbsp;$$base4}}{\\str{$$exp4}}}'
											+'}'
										+'}'
										+'{\\str{&nbsp;}}'
										+'{\\str{All simplified answers must have only positive exponents.}}'
									+'}'
							),
				wellProblemStatement: dataUtils.pre(
									'\\css'
										+'{\\rowgrp'
											+'{\\html{&nbsp;}}'
											+'{\\grp'								
												+'{\\frac'
													+'{\grp'
														+'{\\exp{\\str{&nbsp;$$base1}}{\\str{$$exp1}}}'
														+'{\\str{&nbsp;*&nbsp;}}'
														+'{\\exp{\\str{&nbsp;&nbsp;$$base2}}{\\str{$$exp2}}}'
													+'}'
													+'{\grp'
														+'{\\exp{\\str{$$base3}}{\\str{$$exp3}}}'
														+'{\\str{&nbsp;*&nbsp;}}'
														+'{\\exp{\\str{&nbsp;$$base4}}{\\str{$$exp4}}}'
													+'}'
												+'}'
												+'{\\str{&nbsp;=&nbsp;}}'
												+'{\\frac'
													+'{\\exp{\\str{1}}{\\str{}}}'
													+'{\\exp{\\str{&nbsp;$$denBaseAns}}{\\str{$$denExpAns}}}'
												+'}'
											+'}'
											+'{\\html{&nbsp;}}'
											+'{\\css'
												+'{\\grp'
													+'{\\str{Evaluate the simplified expression<span class=large>:</span>}}'
												+'}'
												+'{alert alert-info}'
											+'}'
											+'{\\grp'
												+'{$$finalAnswer}'
											+'}'
										+'}{well}'
							),
				answerInstructions: '',
				base1: '2',
				exp1: '6',
				base2: '3',
				exp2: '3',
				base3: '2',
				exp3: '9',
				base4: '3',
				exp4: '3',
				numBaseAns: '1',
				numExpAns: '',
				denBaseAns: '2',
				denExpAns: '3',
				firstExpEval: '-3',
				secondExpEval: '0',
				solutionAnswer: dataUtils.pre(
									'\\css'
										+'{\\rowgrp'
											+'{\\str{$$answerInstructions}}'
											+'{\\grp'
												+'{\\frac'
												+'{\\exp{\\input{1}}{\\input{}}}'
												+'{\\exp{\\input{$$denBaseAns}}{\\input{$$denExpAns}}}'
											+'}'
											+'}'
										+'}'
										+'{marginLeft80px}'
							),
				line1: dataUtils.pre(
								'\\rowgrp'
									+'{\\str{<u>First</u>, we use the exponent rule \"Division of Same Bases\" here. <br>When we multiply same bases, we <u>subtract the exponents</u>.}}'
									+'{\\str{&nbsp;}}'
									+'{\\str{Here we have two different bases, bases of $$base1 and bases of $$base2. <br>Simplify each \"same base\" separately.}}'
									+'{\\str{&nbsp;}}'
									+'{\\grp'
										+'{\\frac'
											+'{\\exp{\\str{&nbsp;$$base1}}{\\str{$$exp1}}}'
											+'{\\exp{\\str{&nbsp;$$base3}}{\\str{$$exp3}}}'
										+'}'
										+'{\\str{&nbsp;&nbsp;means&nbsp;&nbsp;}}'
										+'{\\str{$$base1<sup> $$exp1 - $$exp3</sup>}}'
										+'{\\str{&nbsp;&nbsp;or&nbsp;&nbsp;}}'
										+'{\\str{$$base1<sup> $$firstExpEval</sup>}}'
									+'}'
									+'{\\str{&nbsp;}}'
									+'{\\grp'
										+'{\\frac'
											+'{\\exp{\\str{&nbsp;$$base2}}{\\str{$$exp2}}}'
											+'{\\exp{\\str{&nbsp;$$base4}}{\\str{$$exp4}}}'
										+'}'
										+'{\\str{&nbsp;&nbsp;means&nbsp;&nbsp;}}'
										+'{\\str{$$base2<sup> $$exp2 - $$exp4</sup>}}'
										+'{\\str{&nbsp;&nbsp;or&nbsp;&nbsp;}}'
										+'{\\str{$$base2<sup> $$secondExpEval</sup>}}'
										+'{\\str{&nbsp;&nbsp;=&nbsp;&nbsp; 1}}'
									+'}'
									+'{\\str{&nbsp;}}'
									+'{\\grp'
										+'{\\str{So:&nbsp;&nbsp;&nbsp;&nbsp; }}'
										+'{\\frac'
											+'{\grp'
												+'{\\exp{\\str{&nbsp;$$base1}}{\\str{$$exp1}}}'
												+'{\\str{&nbsp;*&nbsp;}}'
												+'{\\exp{\\str{&nbsp;&nbsp;$$base2}}{\\str{$$exp2}}}'
											+'}'
											+'{\grp'
												+'{\\exp{\\str{$$base3}}{\\str{$$exp3}}}'
												+'{\\str{&nbsp;*&nbsp;}}'
												+'{\\exp{\\str{&nbsp;$$base4}}{\\str{$$exp4}}}'
											+'}'
										+'}'
										+'{\\str{&nbsp;=&nbsp;}}'
										+'{\\str{$$base1<sup> $$firstExpEval</sup>}}'
										+'{\\str{&nbsp;*&nbsp;}}'
										+'{\\str{1}}'
									+'}'
									+'{\\str{&nbsp;}}'
									+'{\\str{<u>Second</u>, we still need to <u>get rid of the negative exponents</u>.}}'
									+'{\\str{&nbsp;}}'
									+'{\\str{Only the base of $$base1 has a negative exponent.}}'
									+'{\\str{&nbsp;}}'
									+'{\\str{We take the reciprocal of the base of $$base1, and the sign of the exponent becomes positive.}}'
									+'{\\str{&nbsp;}}'
									+'{\\grp'
										+'{\\str{$$base1<sup> $$firstExpEval</sup>}}'
										+'{\\str{&nbsp;=&nbsp;}}'
										+'{\\frac'
											+'{\\exp{\\str{1}}{\\str{}}}'
											+'{\\exp{\\str{&nbsp;$$denBaseAns}}{\\str{$$denExpAns}}}'
										+'}'
									+'}'
									+'{\\str{&nbsp;}}'
									+'{\\grp'
										+'{\\str{So:&nbsp;&nbsp;&nbsp;&nbsp; }}'
										+'{\\str{$$base1<sup> $$firstExpEval</sup>}}'
										+'{\\str{&nbsp;&nbsp;*&nbsp;&nbsp;}}'
										+'{\\str{1}}'
										+'{\\str{&nbsp;&nbsp;=&nbsp;&nbsp;}}'
										+'{\\frac'
											+'{\\exp{\\str{1}}{\\str{}}}'
											+'{\\exp{\\str{&nbsp;$$denBaseAns}}{\\str{$$denExpAns}}}'
										+'}'
										+'{\\str{&nbsp;&nbsp;*&nbsp;&nbsp;}}'
										+'{\\str{1}}'
										+'{\\str{&nbsp;&nbsp;=&nbsp;&nbsp;}}'
										+'{\\frac'
											+'{\\exp{\\str{1}}{\\str{}}}'
											+'{\\exp{\\str{&nbsp;$$denBaseAns}}{\\str{$$denExpAns}}}'
										+'}'
									+'}'
							),
				helpAnswer:  dataUtils.pre(
									'\\grp'
										+'{\\str{Simplified Answer: &nbsp;}}'
										+'{\\frac'
											+'{\\exp{\\str{1}}{\\str{}}}'
											+'{\\exp{\\str{&nbsp;$$denBaseAns}}{\\str{$$denExpAns}}}'
										+'}'
							),	
				finalAnswer:  dataUtils.pre(
									'\\grp'
										+'{\\frac'
											+'{\\input{1}}'
											+'{\\input{8}}'
										+'}'
							),	
				template: 'evaluateMoveControls' 
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
