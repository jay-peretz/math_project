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
			secondSimplify: {
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
										+'{\\str{$line2}}'
										+'{\\html{&nbsp;}}'
										+'{$line3}'
										+'{\\css'
											+'{\\grp'
												+'{\\str{$helpAnswer}}'
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
												+'{\\str{$helpAnswer}}'
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
                            "help": '\\rowgrp'
										+'{\\html{&nbsp;}}'
										+'{$line2}'
										+'{\\html{&nbsp;}}'
										+'{\\css'
											+'{\\grp'
												+'{\\str{$secondHelpAnswer}}'
											+'}'
											+'{help-answer-text}'
										+'}'
										+'{\\html{&nbsp;}}'		
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
				base1: '6',
				exp1: '3',
				base2: '6',
				exp2: '3',
				baseans: '6',
				expans: '0',
				solutionAnswer: dataUtils.pre(
								'\\rowgrp'
									+'{\\str{$$answerInstructions}}'
									+'{\\grp'
										+'{\\exp{\\input{$$baseans}}{\\input{$$expans}}'
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
				helpAnswer: 'Simplified Answer: &nbsp;$$baseans<sup>$$expans</sup>',
				secondHelpAnswer: '<br>Evaluated Answer: &nbsp;$$finalAnswer',
				finalAnswer: '1',
				template: 'evaluateAfterSimplify' 
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
				base1: '5',
				exp1: '2',
				base2: '5',
				exp2: '2',
				baseans: '5',
				expans: '0',
				solutionAnswer: dataUtils.pre(
								'\\rowgrp'
									+'{\\str{$$answerInstructions}}'
									+'{\\grp'
										+'{\\exp{\\input{$$baseans}}{\\input{$$expans}}'
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
				helpAnswer: 'Simplified Answer: &nbsp;$$baseans<sup>$$expans</sup>',
				secondHelpAnswer: '<br>Evaluated Answer: &nbsp;$$finalAnswer',
				finalAnswer: '1',
				template: 'evaluateAfterSimplify' 
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
										+'{\\exp'
											+'{\\frac'
												+'{\\input{$$numBaseAns}}'
												+'{\\input{$$denBaseAns}}'
											+'}'
											+'{\\input{$$expAns}}'
										+'}'
									+'}'
							),
				line1: dataUtils.pre(
								'\\rowgrp'
									+'{\\str{A negative exponent is not a negative value.}}'
									+'{\\str{&nbsp;}}'
									+'{\\str{We can \"get rid of a negative exponent\" by taking the <u>reciprocal of the base</u> and changing the sign of the exponent.}}'
									+'{\\str{&nbsp;}}'
									+'{\\str{In this case the base of 2 is flipped from its location as a numerator (the whole number) to the denominator. The negative exponent changes to positive.}}'
									+'{\\str{&nbsp;}}'
									+'{\\grp'
										+'{\\exp{\\str{&nbsp;$$base1}}{\\str{$$exp1}}}'
										+'{\\str{=}}'
										+'{\\exp'
											+'{\\frac'
												+'{\\str{$$numBaseAns}}'
												+'{\\str{$$denBaseAns}}'
											+'}'
											+'{\\str{$$expAns}}'
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
											+'{\\str{$$denBaseAns}}'
										+'}'
										+'{\\str{$$expAns}}'
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
										+'{\\exp'
											+'{\\frac'
												+'{\\input{$$numBaseAns}}'
												+'{\\input{$$denBaseAns}}'
											+'}'
											+'{\\input{$$expAns}}'
										+'}'
									+'}'
							),
				line1: dataUtils.pre(
								'\\rowgrp'
									+'{\\str{A negative exponent is not a negative value.}}'
									+'{\\str{&nbsp;}}'
									+'{\\str{We can \"get rid of a negative exponent\" by taking the <u>reciprocal of the base</u> and changing the sign of the exponent.}}'
									+'{\\str{&nbsp;}}'
									+'{\\str{In this case the base of 2 is flipped from its location as a numerator (the whole number) to the denominator. The negative exponent changes to positive.}}'
									+'{\\str{&nbsp;}}'
									+'{\\grp'
										+'{\\exp{\\str{&nbsp;$$base1}}{\\str{$$exp1}}}'
										+'{\\str{=}}'
										+'{\\exp'
											+'{\\frac'
												+'{\\str{$$numBaseAns}}'
												+'{\\str{$$denBaseAns}}'
											+'}'
											+'{\\str{$$expAns}}'
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
											+'{\\str{$$denBaseAns}}'
										+'}'
										+'{\\str{$$expAns}}'
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
										+'{\\exp'
											+'{\\frac'
												+'{\\input{$$numBaseAns}}'
												+'{\\input{$$denBaseAns}}'
											+'}'
											+'{\\input{$$expAns}}'
										+'}'
									+'}'
							),
				line1: dataUtils.pre(
								'\\rowgrp'
									+'{\\str{A negative exponent is not a negative value.}}'
									+'{\\str{&nbsp;}}'
									+'{\\str{We can \"get rid of a negative exponent\" by taking the <u>reciprocal of the base</u> and changing the sign of the exponent.}}'
									+'{\\str{&nbsp;}}'
									+'{\\str{In this case the base of 2 is flipped from its location as a numerator (the whole number) to the denominator. The negative exponent changes to positive.}}'
									+'{\\str{&nbsp;}}'
									+'{\\grp'
										+'{\\exp{\\str{&nbsp;$$base1}}{\\str{$$exp1}}}'
										+'{\\str{=}}'
										+'{\\exp'
											+'{\\frac'
												+'{\\str{$$numBaseAns}}'
												+'{\\str{$$denBaseAns}}'
											+'}'
											+'{\\str{$$expAns}}'
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
											+'{\\str{$$denBaseAns}}'
										+'}'
										+'{\\str{$$expAns}}'
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
										+'{\\exp'
											+'{\\frac'
												+'{\\input{$$numBaseAns}}'
												+'{\\input{$$denBaseAns}}'
											+'}'
											+'{\\input{$$expAns}}'
										+'}'
									+'}'
							),
				line1: dataUtils.pre(
								'\\rowgrp'
									+'{\\str{A negative exponent is not a negative value.}}'
									+'{\\str{&nbsp;}}'
									+'{\\str{We can \"get rid of a negative exponent\" by taking the <u>reciprocal of the base</u> and changing the sign of the exponent.}}'
									+'{\\str{&nbsp;}}'
									+'{\\str{In this case the base of 2 is flipped from its location as a numerator (the whole number) to the denominator. The negative exponent changes to positive.}}'
									+'{\\str{&nbsp;}}'
									+'{\\grp'
										+'{\\exp{\\str{&nbsp;$$base1}}{\\str{$$exp1}}}'
										+'{\\str{=}}'
										+'{\\exp'
											+'{\\frac'
												+'{\\str{$$numBaseAns}}'
												+'{\\str{$$denBaseAns}}'
											+'}'
											+'{\\str{$$expAns}}'
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
											+'{\\str{$$denBaseAns}}'
										+'}'
										+'{\\str{$$expAns}}'
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
												+'{\\exp'
													+'{\\frac'
														+'{\\str{$$numBaseAns}}'
														+'{\\str{$$denBaseAns}}'
													+'}'
													+'{\\str{$expAns}}'
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
									+'{\\str{&nbsp;}}'
									+'{\\exp'
										+'{\\frac'
											+'{\\input{$$numBaseAns}}'
											+'{\\input{$$denBaseAns}}'
										+'}'
										+'{\\input{$$expAns}}'
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
										+'{\\exp'
											+'{\\frac'
												+'{\\str{$$numBaseAns}}'
												+'{\\str{$$denBaseAns}}'
											+'}'
											+'{\\str{$$expAns}}'
										+'}'
									+'}'
							),
				helpAnswer:  dataUtils.pre(
									'\\grp'
										+'{\\str{Simplified Answer: &nbsp;}}'
										+'{\\exp'
											+'{\\frac'
												+'{\\str{$$numBaseAns}}'
												+'{\\str{$$denBaseAns}}'
											+'}'
											+'{\\str{$$expAns}}'
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
												+'{\\exp'
													+'{\\frac'
														+'{\\str{$$numBaseAns}}'
														+'{\\str{$$denBaseAns}}'
													+'}'
													+'{\\str{$expAns}}'
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
									+'{\\str{&nbsp;}}'
									+'{\\exp'
										+'{\\frac'
											+'{\\input{$$numBaseAns}}'
											+'{\\input{$$denBaseAns}}'
										+'}'
										+'{\\input{$$expAns}}'
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
										+'{\\exp'
											+'{\\frac'
												+'{\\str{$$numBaseAns}}'
												+'{\\str{$$denBaseAns}}'
											+'}'
											+'{\\str{$$expAns}}'
										+'}'
									+'}'
							),
				helpAnswer:  dataUtils.pre(
									'\\grp'
										+'{\\str{Simplified Answer: &nbsp;}}'
										+'{\\exp'
											+'{\\frac'
												+'{\\str{$$numBaseAns}}'
												+'{\\str{$$denBaseAns}}'
											+'}'
											+'{\\str{$$expAns}}'
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
										+'{\\exp'
											+'{\\frac'
												+'{\\input{$$numBaseAns}}'
												+'{\\input{$$denBaseAns}}'
											+'}'
											+'{\\input{$$expAns}}'
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
										+'{\\exp'
											+'{\\frac'
												+'{\\str{$$numBaseAns}}'
												+'{\\str{$$denBaseAns}}'
											+'}'
											+'{\\str{$$expAns}}'
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
											+'{\\str{$$denBaseAns}}'
										+'}'
										+'{\\str{$$expAns}}'
									+'}'
							),
				template: 'firstSimplify' 
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
