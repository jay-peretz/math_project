/*global angular */

angular.module('mathSkills').service('data_q_1', ['dataUtils', function (dataUtils) {
    var desc = {
            title: 'Q.1 Simplifying Exponential Expressions: Power raised to a Power',
            path: 'q.1-raising-a-power-to-a-power',
            children: []
        },
        template = {
			firstSimplify: {
                title: 'Simplifying Exponential Expressions: Power raised to a Power',
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
                title: 'Simplifying Exponential Expressions: Power raised to a Power',
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
            }
		},
		data = [
			// prob 1
			{
				problemStatement: dataUtils.pre(
								'\\rowgrp'
									+'{\\grp'
										+'{\\str{Simplify: &nbsp;}}'
										+'{\\exp'
											+'{\\grp'
												+'{\\str{(}}'
												+'{\\exp{\\str{&nbsp;$$base}}{\\str{$$exp1}}}'
												+'{\\str{)}}'
											+'}'
											+'{\\str{$$expSecond1}}'
										+'}'
									+'}'
							),
				answerInstructions: '',
				base: '3',
				exp1: '2',
				expSecond1: '3',
				expAns: '6',
				solutionAnswer: dataUtils.pre(
								'\\rowgrp'
									+'{\\str{$$answerInstructions}}'
									+'{\\exp'
										+'{\\input{$$base}}'
										+'{\\input{$$expAns}}'
									+'}'
							),
				line1: dataUtils.pre(
								'\\rowgrp'
									+'{\\str{To simplify this quickly, we use the exponent rule \"Power raised to a Power\" here. When we have a power raised to another power, we <u>multiply the exponents</u>.}}'	
									+'{\\str{&nbsp;}}'
									+'{\\grp'
										+'{\\exp'
											+'{\\grp'
												+'{\\str{(}}'
												+'{\\exp{\\str{&nbsp;$$base}}{\\str{$$exp1}}}'
												+'{\\str{)}}'
											+'}'
											+'{\\str{$$expSecond1}}'
										+'}'
										+'{\\str{&nbsp; means &nbsp;}}'
										+'{\\str{$$base<sup> $$exp1 * $$expSecond1</sup>}}'
										+'{\\str{&nbsp; or &nbsp;}}'
										+'{\\str{$$base<sup>$$expAns</sup>}}'
									+'}'
							),
				helpAnswer: dataUtils.pre(
								'\\grp'
									+'{\\str{<br>Simplified Answer: &nbsp; $$base<sup> $$expAns</sup>}}'	
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
										+'{\\exp'
											+'{\\grp'
												+'{\\str{(}}'
												+'{\\exp{\\str{&nbsp;$$base}}{\\str{$$exp1}}}'
												+'{\\str{)}}'
											+'}'
											+'{\\str{$$expSecond1}}'
										+'}'
									+'}'
							),
				answerInstructions: '',
				base: '6',
				exp1: '4',
				expSecond1: '2',
				expAns: '8',
				solutionAnswer: dataUtils.pre(
								'\\rowgrp'
									+'{\\str{$$answerInstructions}}'
									+'{\\exp'
										+'{\\input{$$base}}'
										+'{\\input{$$expAns}}'
									+'}'
							),
				line1: dataUtils.pre(
								'\\rowgrp'
									+'{\\str{To simplify this quickly, we use the exponent rule \"Power raised to a Power\" here. When we have a power raised to another power, we <u>multiply the exponents</u>.}}'	
									+'{\\str{&nbsp;}}'
									+'{\\grp'
										+'{\\exp'
											+'{\\grp'
												+'{\\str{(}}'
												+'{\\exp{\\str{&nbsp;$$base}}{\\str{$$exp1}}}'
												+'{\\str{)}}'
											+'}'
											+'{\\str{$$expSecond1}}'
										+'}'
										+'{\\str{&nbsp; means &nbsp;}}'
										+'{\\str{$$base<sup> $$exp1 * $$expSecond1</sup>}}'
										+'{\\str{&nbsp; or &nbsp;}}'
										+'{\\str{$$base<sup>$$expAns</sup>}}'
									+'}'
							),
				helpAnswer: dataUtils.pre(
								'\\grp'
									+'{\\str{<br>Simplified Answer: &nbsp; $$base<sup> $$expAns</sup>}}'	
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
										+'{\\exp'
											+'{\\grp'
												+'{\\str{(}}'
												+'{\\exp{\\str{&nbsp;$$base}}{\\str{$$exp1}}}'
												+'{\\str{)}}'
											+'}'
											+'{\\str{$$expSecond1}}'
										+'}'
									+'}'
							),
				answerInstructions: 'Use parentheses as a part of your answer if necessary.<br><br>',
				base: '(-2 )',
				exp1: '3',
				expSecond1: '4',
				ansBase: '(-2)',
				expAns: '12',
				solutionAnswer: dataUtils.pre(
								'\\rowgrp'
									+'{\\str{$$answerInstructions}}'
									+'{\\exp'
										+'{\\input{$$ansBase}}'
										+'{\\input{$$expAns}}'
									+'}'
							),
				line1: dataUtils.pre(
								'\\rowgrp'
									+'{\\str{To simplify this quickly, we use the exponent rule \"Power raised to a Power\" here. When we have a power raised to another power, we <u>multiply the exponents</u>.}}'	
									+'{\\str{&nbsp;}}'
									+'{\\grp'
										+'{\\exp'
											+'{\\grp'
												+'{\\str{(}}'
												+'{\\exp{\\str{&nbsp;$$base}}{\\str{$$exp1}}}'
												+'{\\str{)}}'
											+'}'
											+'{\\str{$$expSecond1}}'
										+'}'
										+'{\\str{&nbsp; means &nbsp;}}'
										+'{\\str{$$base<sup> $$exp1 * $$expSecond1</sup>}}'
										+'{\\str{&nbsp; or &nbsp;}}'
										+'{\\str{$$base<sup> $$expAns</sup>}}'
									+'}'
							),
				helpAnswer: dataUtils.pre(
								'\\grp'
									+'{\\str{<br>Simplified Answer: &nbsp; $$base<sup> $$expAns</sup>}}'	
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
										+'{\\exp'
											+'{\\grp'
												+'{\\str{(}}'
												+'{\\exp{\\str{&nbsp;$$base}}{\\str{$$exp1}}}'
												+'{\\str{)}}'
											+'}'
											+'{\\str{$$expSecond1}}'
										+'}'
									+'}'
							),
				answerInstructions: 'Use parentheses as a part of your answer if necessary.<br><br>',
				base: '(-10 )',
				exp1: '5',
				expSecond1: '3',
				ansBase: '(-10)',
				expAns: '15',
				solutionAnswer: dataUtils.pre(
								'\\rowgrp'
									+'{\\str{$$answerInstructions}}'
									+'{\\exp'
										+'{\\input{$$ansBase}}'
										+'{\\input{$$expAns}}'
									+'}'
							),
				line1: dataUtils.pre(
								'\\rowgrp'
									+'{\\str{To simplify this quickly, we use the exponent rule \"Power raised to a Power\" here. When we have a power raised to another power, we <u>multiply the exponents</u>.}}'	
									+'{\\str{&nbsp;}}'
									+'{\\grp'
										+'{\\exp'
											+'{\\grp'
												+'{\\str{(}}'
												+'{\\exp{\\str{&nbsp;$$base}}{\\str{$$exp1}}}'
												+'{\\str{)}}'
											+'}'
											+'{\\str{$$expSecond1}}'
										+'}'
										+'{\\str{&nbsp; means &nbsp;}}'
										+'{\\str{$$base<sup> $$exp1 * $$expSecond1</sup>}}'
										+'{\\str{&nbsp; or &nbsp;}}'
										+'{\\str{$$base<sup> $$expAns</sup>}}'
									+'}'
							),
				helpAnswer: dataUtils.pre(
								'\\grp'
									+'{\\str{<br>Simplified Answer: &nbsp; $$base<sup> $$expAns</sup>}}'	
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
										+'{\\exp'
											+'{\\grp'
												+'{\\str{(}}'
												+'{\\exp{\\str{&nbsp;$$base}}{\\str{$$exp1}}}'
												+'{\\str{)}}'
											+'}'
											+'{\\str{$$expSecond1}}'
										+'}'
										+'{\\str{&nbsp; * &nbsp;}}'
										+'{\\exp{\\str{&nbsp;$$base}}{\\str{$$exp2}}}'
									+'}'
							),
				wellProblemStatement: dataUtils.pre(
									'\\css'
										+'{\\rowgrp'
											+'{\\html{&nbsp;}}'
											+'{\\grp'
												+'{\\exp'
													+'{\\grp'
														+'{\\str{(}}'
														+'{\\exp{\\str{&nbsp;$$base}}{\\str{$$exp1}}}'
														+'{\\str{)}}'
													+'}'
													+'{\\str{$$expSecond1}}'
												+'}'
												+'{\\str{&nbsp; * &nbsp;}}'
												+'{\\exp{\\str{&nbsp;$$base}}{\\str{$$exp2}}}'
												+'{\\str{&nbsp; = &nbsp;}}'
												+'{\\exp'
													+'{\\str{$$base}}'
													+'{\\str{$$expAns}}'
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
												+'{\\css'
													+'{\\input{$$evalAns}}'
													+'{width120}'
												+'}'
											+'}'
										+'}{well}'
							),
				answerInstructions: 'Use parentheses as a part of your answer if necessary.<br><br>',
				base: '4',
				exp1: '2',
				expSecond1: '5',
				exp2: '3',
				ansBase: '4',
				expFirstProduct: '10',
				expAns: '13',
				evalAns: '67108864',
				solutionAnswer: dataUtils.pre(
								'\\rowgrp'
									+'{\\str{$$answerInstructions}}'
									+'{\\exp'
										+'{\\input{$$ansBase}}'
										+'{\\input{$$expAns}}'
									+'}'
							),
				line1: dataUtils.pre(
								'\\rowgrp'
									+'{\\str{To simplify this quickly, we use the exponent rule \"Power raised to a Power\" here. When we have a power raised to another power, we <u>multiply the exponents</u>.}}'	
									+'{\\str{&nbsp;}}'
									+'{\\str{&nbsp;}}'
									+'{\\grp'
										+'{\\exp'
											+'{\\grp'
												+'{\\str{(}}'
												+'{\\exp{\\str{&nbsp;$$base}}{\\str{$$exp1}}}'
												+'{\\str{)}}'
											+'}'
											+'{\\str{$$expSecond1}}'
										+'}'
										+'{\\str{&nbsp; means &nbsp;}}'
										+'{\\str{$$base<sup> $$exp1 * $$expSecond1</sup>}}'
										+'{\\str{&nbsp; or &nbsp;}}'
										+'{\\str{$$base<sup> $$expFirstProduct</sup>}}'
									+'}'
									+'{\\str{&nbsp;}}'
									+'{\\str{&nbsp;}}'
									+'{\\grp'
										+'{\\str{So:}}'
										+'{\\exp'
											+'{\\grp'
												+'{\\str{(}}'
												+'{\\exp{\\str{&nbsp;$$base}}{\\str{$$exp1}}}'
												+'{\\str{)}}'
											+'}'
											+'{\\str{$$expSecond1}}'
										+'}'
										+'{\\str{&nbsp; * &nbsp;}}'
										+'{\\exp{\\str{&nbsp;$$base}}{\\str{$$exp2}}}'
										+'{\\str{&nbsp; becomes &nbsp;}}'
										+'{\\str{$$base<sup> $$expFirstProduct</sup>}}'
										+'{\\str{&nbsp; * &nbsp;}}'
										+'{\\str{$$base<sup> $$exp2</sup>}}'
									+'}'
									+'{\\str{&nbsp;}}'
									+'{\\str{&nbsp;}}'
									+'{\\str{<u>Second</u>, we now use the exponent rule \"Multiplication of Same Bases.\" We <u>add the exponents<u>:}}'
									+'{\\str{&nbsp;}}'
									+'{\\grp'
										+'{\\str{$$base<sup> $$expFirstProduct</sup>}}'
										+'{\\str{&nbsp; * &nbsp;}}'
										+'{\\str{$$base<sup> $$exp2</sup>}}'
										+'{\\str{&nbsp; means &nbsp;}}'
										+'{\\str{$$base<sup> $$expFirstProduct + $$exp2</sup>}}'
										+'{\\str{&nbsp; or &nbsp;}}'
										+'{\\str{$$base<sup> $$expAns</sup>}}'
									+'}'
									
								),
				helpAnswer: dataUtils.pre(
								'\\grp'
									+'{\\str{Simplified Answer: &nbsp; $$base<sup> $$expAns</sup>}}'	
							),
				template: 'evaluateAfterSimplify' 
			 }
			 ,
			 // prob 6
			 {
				problemStatement: dataUtils.pre(
								'\\rowgrp'
									+'{\\grp'
										+'{\\str{Simplify: &nbsp;}}'
										+'{\\exp'
											+'{\\grp'
												+'{\\str{(}}'
												+'{\\exp{\\str{&nbsp;$$base}}{\\str{$$exp1}}}'
												+'{\\str{)}}'
											+'}'
											+'{\\str{$$expSecond1}}'
										+'}'
										+'{\\str{&nbsp; * &nbsp;}}'
										+'{\\exp{\\str{&nbsp;$$base}}{\\str{$$exp2}}}'
									+'}'
							),
				wellProblemStatement: dataUtils.pre(
									'\\css'
										+'{\\rowgrp'
											+'{\\html{&nbsp;}}'
											+'{\\grp'
												+'{\\exp'
													+'{\\grp'
														+'{\\str{(}}'
														+'{\\exp{\\str{&nbsp;$$base}}{\\str{$$exp1}}}'
														+'{\\str{)}}'
													+'}'
													+'{\\str{$$expSecond1}}'
												+'}'
												+'{\\str{&nbsp; * &nbsp;}}'
												+'{\\exp{\\str{&nbsp;$$base}}{\\str{$$exp2}}}'
												+'{\\str{&nbsp; = &nbsp;}}'
												+'{\\exp'
													+'{\\str{$$base}}'
													+'{\\str{$$expAns}}'
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
												+'{\\css'
													+'{\\input{$$evalAns}}'
													+'{}'
												+'}'
											+'}'
										+'}{well}'
							),
				answerInstructions: 'Use parentheses as a part of your answer if necessary.<br><br>',
				base: '2',
				exp1: '3',
				expSecond1: '3',
				exp2: '2',
				ansBase: '2',
				expFirstProduct: '9',
				expAns: '11',
				evalAns: '2048',
				solutionAnswer: dataUtils.pre(
								'\\rowgrp'
									+'{\\str{$$answerInstructions}}'
									+'{\\exp'
										+'{\\input{$$ansBase}}'
										+'{\\input{$$expAns}}'
									+'}'
							),
				line1: dataUtils.pre(
								'\\rowgrp'
									+'{\\str{To simplify this quickly, we use the exponent rule \"Power raised to a Power\" here. When we have a power raised to another power, we <u>multiply the exponents</u>.}}'	
									+'{\\str{&nbsp;}}'
									+'{\\str{&nbsp;}}'
									+'{\\grp'
										+'{\\exp'
											+'{\\grp'
												+'{\\str{(}}'
												+'{\\exp{\\str{&nbsp;$$base}}{\\str{$$exp1}}}'
												+'{\\str{)}}'
											+'}'
											+'{\\str{$$expSecond1}}'
										+'}'
										+'{\\str{&nbsp; means &nbsp;}}'
										+'{\\str{$$base<sup> $$exp1 * $$expSecond1</sup>}}'
										+'{\\str{&nbsp; or &nbsp;}}'
										+'{\\str{$$base<sup> $$expFirstProduct</sup>}}'
									+'}'
									+'{\\str{&nbsp;}}'
									+'{\\str{&nbsp;}}'
									+'{\\grp'
										+'{\\str{So:}}'
										+'{\\exp'
											+'{\\grp'
												+'{\\str{(}}'
												+'{\\exp{\\str{&nbsp;$$base}}{\\str{$$exp1}}}'
												+'{\\str{)}}'
											+'}'
											+'{\\str{$$expSecond1}}'
										+'}'
										+'{\\str{&nbsp; * &nbsp;}}'
										+'{\\exp{\\str{&nbsp;$$base}}{\\str{$$exp2}}}'
										+'{\\str{&nbsp; becomes &nbsp;}}'
										+'{\\str{$$base<sup> $$expFirstProduct</sup>}}'
										+'{\\str{&nbsp; * &nbsp;}}'
										+'{\\str{$$base<sup> $$exp2</sup>}}'
									+'}'
									+'{\\str{&nbsp;}}'
									+'{\\str{&nbsp;}}'
									+'{\\str{<u>Second</u>, we now use the exponent rule \"Multiplication of Same Bases.\" We <u>add the exponents<u>:}}'
									+'{\\str{&nbsp;}}'
									+'{\\grp'
										+'{\\str{$$base<sup> $$expFirstProduct</sup>}}'
										+'{\\str{&nbsp; * &nbsp;}}'
										+'{\\str{$$base<sup> $$exp2</sup>}}'
										+'{\\str{&nbsp; means &nbsp;}}'
										+'{\\str{$$base<sup> $$expFirstProduct + $$exp2</sup>}}'
										+'{\\str{&nbsp; or &nbsp;}}'
										+'{\\str{$$base<sup> $$expAns</sup>}}'
									+'}'
									
								),
				helpAnswer: dataUtils.pre(
								'\\grp'
									+'{\\str{Simplified Answer: &nbsp; $$base<sup> $$expAns</sup>}}'	
							),
				template: 'evaluateAfterSimplify' 
			 }
			   ,
			// prob 7
			{
				problemStatement: dataUtils.pre(
								'\\rowgrp'
									+'{\\grp'
										+'{\\str{Simplify: &nbsp;}}'
										+'{\\exp'
											+'{\\grp'
												+'{\\str{(}}'
												+'{\\exp{\\str{&nbsp;$$base}}{\\str{$$exp1}}}'
												+'{\\str{)}}'
											+'}'
											+'{\\str{$$expSecond1}}'
										+'}'
										+'{\\str{&nbsp; * &nbsp;}}'
										+'{\\exp{\\str{&nbsp;$$base}}{\\str{$$exp2}}}'
									+'}'
							),
				answerInstructions: 'Use parentheses as a part of your answer if necessary.<br><br>',
				base: '5',
				exp1: '7',
				expSecond1: '2',
				expEval: '14',
				expAssumed: '1',
				exp2: '',
				ansBase: '5',
				expAns: '15',
				solutionAnswer: dataUtils.pre(
								'\\rowgrp'
									+'{\\str{$$answerInstructions}}'
									+'{\\exp'
										+'{\\input{$$ansBase}}'
										+'{\\input{$$expAns}}'
									+'}'
							),
				line1: dataUtils.pre(
								'\\rowgrp'
									+'{\\str{<u>First</u>, we use the exponent rule \"Power raised to a Power\" here. When we have a power raised to another power, we <u>multiply the exponents</u>.}}'	
									+'{\\str{&nbsp;}}'
									+'{\\str{&nbsp;}}'
									+'{\\grp'
										+'{\\exp'
											+'{\\grp'
												+'{\\str{(}}'
												+'{\\exp{\\str{&nbsp;$$base}}{\\str{$$exp1}}}'
												+'{\\str{)}}'
											+'}'
											+'{\\str{$$expSecond1}}'
										+'}'
										+'{\\str{&nbsp; means &nbsp;}}'
										+'{\\str{$$base<sup> $$exp1 * $$expSecond1</sup>}}'
										+'{\\str{&nbsp; or &nbsp;}}'
										+'{\\str{$$base<sup> $$expEval</sup>}}'
									+'}'
									+'{\\str{&nbsp;}}'
									+'{\\str{&nbsp;}}'
									+'{\\grp'
										+'{\\str{So: &nbsp;}}'
										+'{\\exp'
											+'{\\grp'
												+'{\\str{(}}'
												+'{\\exp{\\str{&nbsp;$$base}}{\\str{$$exp1}}}'
												+'{\\str{)}}'
											+'}'
											+'{\\str{$$expSecond1}}'
										+'}'
										+'{\\str{&nbsp; * &nbsp;}}'
										+'{\\exp{\\str{&nbsp;$$base}}{\\str{$$exp2}}}'
										+'{\\str{&nbsp; = &nbsp;}}'
										+'{\\str{$$base<sup> $$expEval</sup>}}'
										+'{\\str{&nbsp; * &nbsp;}}'
										+'{\\str{$$base<sup> $$expAssumed</sup>}}'
									+'}'
									+'{\\str{&nbsp;}}'
									+'{\\str{&nbsp;}}'
									+'{\\str{<u>Second</u>, we now use the exponent rule \"Multiplication of Same Bases.\" We <u>add the exponents<u>:}}'
									+'{\\str{&nbsp;}}'
									+'{\\grp'
										+'{\\str{$$base<sup> $$expEval</sup>}}'
										+'{\\str{&nbsp; * &nbsp;}}'
										+'{\\str{$$base<sup> $$expAssumed</sup>}}'
										+'{\\str{&nbsp; means &nbsp;}}'
										+'{\\str{$$base<sup> $$expEval + $$expAssumed</sup>}}'
										+'{\\str{&nbsp; or &nbsp;}}'
										+'{\\str{$$base<sup> $$expAns</sup>}}'
									+'}'
									+'{\\str{&nbsp;}}'
							),
				helpAnswer: dataUtils.pre(
								'\\grp'
									+'{\\str{Simplified Answer: &nbsp; $$base<sup> $$expAns</sup>}}'	
							),
				template: 'firstSimplify' 
			 }
			 ,
			// prob 8
			{
				problemStatement: dataUtils.pre(
								'\\rowgrp'
									+'{\\grp'
										+'{\\str{Simplify: &nbsp;}}'
										+'{\\exp'
											+'{\\grp'
												+'{\\str{(}}'
												+'{\\exp{\\str{&nbsp;$$base}}{\\str{$$exp1}}}'
												+'{\\str{)}}'
											+'}'
											+'{\\str{$$expSecond1}}'
										+'}'
										+'{\\str{&nbsp; * &nbsp;}}'
										+'{\\exp{\\str{&nbsp;$$base}}{\\str{$$exp2}}}'
									+'}'
							),
				answerInstructions: 'Use parentheses as a part of your answer if necessary.<br><br>',
				base: '8',
				exp1: '2',
				expSecond1: '4',
				expEval: '8',
				expAssumed: '1',
				exp2: '',
				ansBase: '8',
				expAns: '9',
				solutionAnswer: dataUtils.pre(
								'\\rowgrp'
									+'{\\str{$$answerInstructions}}'
									+'{\\exp'
										+'{\\input{$$ansBase}}'
										+'{\\input{$$expAns}}'
									+'}'
							),
				line1: dataUtils.pre(
								'\\rowgrp'
									+'{\\str{<u>First</u>, we use the exponent rule \"Power raised to a Power\" here. When we have a power raised to another power, we <u>multiply the exponents</u>.}}'	
									+'{\\str{&nbsp;}}'
									+'{\\str{&nbsp;}}'
									+'{\\grp'
										+'{\\exp'
											+'{\\grp'
												+'{\\str{(}}'
												+'{\\exp{\\str{&nbsp;$$base}}{\\str{$$exp1}}}'
												+'{\\str{)}}'
											+'}'
											+'{\\str{$$expSecond1}}'
										+'}'
										+'{\\str{&nbsp; means &nbsp;}}'
										+'{\\str{$$base<sup> $$exp1 * $$expSecond1</sup>}}'
										+'{\\str{&nbsp; or &nbsp;}}'
										+'{\\str{$$base<sup> $$expEval</sup>}}'
									+'}'
									+'{\\str{&nbsp;}}'
									+'{\\str{&nbsp;}}'
									+'{\\grp'
										+'{\\str{So: &nbsp;}}'
										+'{\\exp'
											+'{\\grp'
												+'{\\str{(}}'
												+'{\\exp{\\str{&nbsp;$$base}}{\\str{$$exp1}}}'
												+'{\\str{)}}'
											+'}'
											+'{\\str{$$expSecond1}}'
										+'}'
										+'{\\str{&nbsp; * &nbsp;}}'
										+'{\\exp{\\str{&nbsp;$$base}}{\\str{$$exp2}}}'
										+'{\\str{&nbsp; = &nbsp;}}'
										+'{\\str{$$base<sup> $$expEval</sup>}}'
										+'{\\str{&nbsp; * &nbsp;}}'
										+'{\\str{$$base<sup> $$expAssumed</sup>}}'
									+'}'
									+'{\\str{&nbsp;}}'
									+'{\\str{&nbsp;}}'
									+'{\\str{<u>Second</u>, we now use the exponent rule \"Multiplication of Same Bases.\" We <u>add the exponents<u>:}}'
									+'{\\str{&nbsp;}}'
									+'{\\grp'
										+'{\\str{$$base<sup> $$expEval</sup>}}'
										+'{\\str{&nbsp; * &nbsp;}}'
										+'{\\str{$$base<sup> $$expAssumed</sup>}}'
										+'{\\str{&nbsp; means &nbsp;}}'
										+'{\\str{$$base<sup> $$expEval + $$expAssumed</sup>}}'
										+'{\\str{&nbsp; or &nbsp;}}'
										+'{\\str{$$base<sup> $$expAns</sup>}}'
									+'}'
									+'{\\str{&nbsp;}}'
							),
				helpAnswer: dataUtils.pre(
								'\\grp'
									+'{\\str{Simplified Answer: &nbsp; $$base<sup> $$expAns</sup>}}'	
							),
				template: 'firstSimplify' 
			 }
			  ,
			// prob 9
			{
				problemStatement: dataUtils.pre(
								'\\rowgrp'
									+'{\\grp'
										+'{\\str{Simplify: &nbsp;}}'
										+'{\\exp'
											+'{\\grp'
												+'{\\str{(}}'
												+'{\\exp{\\str{&nbsp;$$base}}{\\str{$$exp1}}}'
												+'{\\str{)}}'
											+'}'
											+'{\\str{$$expSecond1}}'
										+'}'
										+'{\\str{&nbsp; * &nbsp;}}'
										+'{\\exp{\\str{&nbsp;$$base}}{\\str{$$exp2}}}'
									+'}'
							),
				answerInstructions: 'Use parentheses as a part of your answer if necessary.<br><br>',
				base: '3',
				exp1: '-1',
				expSecond1: '2',
				expEval: '-2',
				expAssumed: '1',
				exp2: '5',
				ansBase: '3',
				expAns: '3',
				solutionAnswer: dataUtils.pre(
								'\\rowgrp'
									+'{\\str{$$answerInstructions}}'
									+'{\\exp'
										+'{\\input{$$ansBase}}'
										+'{\\input{$$expAns}}'
									+'}'
							),
				line1: dataUtils.pre(
								'\\rowgrp'
									+'{\\str{<u>First</u>, we use the exponent rule \"Power raised to a Power\" here. When we have a power raised to another power, we <u>multiply the exponents</u>.}}'	
									+'{\\str{&nbsp;}}'
									+'{\\str{&nbsp;}}'
									+'{\\grp'
										+'{\\exp'
											+'{\\grp'
												+'{\\str{(}}'
												+'{\\exp{\\str{&nbsp;$$base}}{\\str{$$exp1}}}'
												+'{\\str{)}}'
											+'}'
											+'{\\str{$$expSecond1}}'
										+'}'
										+'{\\str{&nbsp; means &nbsp;}}'
										+'{\\str{$$base<sup> $$exp1 * $$expSecond1</sup>}}'
										+'{\\str{&nbsp; or &nbsp;}}'
										+'{\\str{$$base<sup> $$expEval</sup>}}'
									+'}'
									+'{\\str{&nbsp;}}'
									+'{\\str{&nbsp;}}'
									+'{\\grp'
										+'{\\str{So: &nbsp;}}'
										+'{\\exp'
											+'{\\grp'
												+'{\\str{(}}'
												+'{\\exp{\\str{&nbsp;$$base}}{\\str{$$exp1}}}'
												+'{\\str{)}}'
											+'}'
											+'{\\str{$$expSecond1}}'
										+'}'
										+'{\\str{&nbsp; * &nbsp;}}'
										+'{\\exp{\\str{&nbsp;$$base}}{\\str{$$exp2}}}'
										+'{\\str{&nbsp; = &nbsp;}}'
										+'{\\str{$$base<sup> $$expEval</sup>}}'
										+'{\\str{&nbsp; * &nbsp;}}'
										+'{\\str{$$base<sup> $$exp2</sup>}}'
									+'}'
									+'{\\str{&nbsp;}}'
									+'{\\str{&nbsp;}}'
									+'{\\str{<u>Second</u>, we now use the exponent rule \"Multiplication of Same Bases.\" We <u>add the exponents<u>:}}'
									+'{\\str{&nbsp;}}'
									+'{\\grp'
										+'{\\str{$$base<sup> $$expEval</sup>}}'
										+'{\\str{&nbsp; * &nbsp;}}'
										+'{\\str{$$base<sup> $$exp2</sup>}}'
										+'{\\str{&nbsp; means &nbsp;}}'
										+'{\\str{$$base<sup> $$expEval + $$exp2</sup>}}'
										+'{\\str{&nbsp; or &nbsp;}}'
										+'{\\str{$$base<sup> $$expAns</sup>}}'
									+'}'
									+'{\\str{&nbsp;}}'
							),
				helpAnswer: dataUtils.pre(
								'\\grp'
									+'{\\str{Simplified Answer: &nbsp; $$base<sup> $$expAns</sup>}}'	
							),
				template: 'firstSimplify' 
			 }
			  ,
			// prob 10
			{
				problemStatement: dataUtils.pre(
								'\\rowgrp'
									+'{\\grp'
										+'{\\str{Simplify: &nbsp;}}'
										+'{\\exp'
											+'{\\grp'
												+'{\\str{(}}'
												+'{\\exp{\\str{&nbsp;$$base}}{\\str{$$exp1}}}'
												+'{\\str{)}}'
											+'}'
											+'{\\str{$$expSecond1}}'
										+'}'
										+'{\\str{&nbsp; * &nbsp;}}'
										+'{\\exp{\\str{&nbsp;$$base}}{\\str{$$exp2}}}'
									+'}'
							),
				answerInstructions: 'Use parentheses as a part of your answer if necessary.<br><br>',
				base: '7',
				exp1: '-2',
				expSecond1: '3',
				expEval: '-6',
				expAssumed: '1',
				exp2: '10',
				ansBase: '7',
				expAns: '4',
				solutionAnswer: dataUtils.pre(
								'\\rowgrp'
									+'{\\str{$$answerInstructions}}'
									+'{\\exp'
										+'{\\input{$$ansBase}}'
										+'{\\input{$$expAns}}'
									+'}'
							),
				line1: dataUtils.pre(
								'\\rowgrp'
									+'{\\str{<u>First</u>, we use the exponent rule \"Power raised to a Power\" here. When we have a power raised to another power, we <u>multiply the exponents</u>.}}'	
									+'{\\str{&nbsp;}}'
									+'{\\str{&nbsp;}}'
									+'{\\grp'
										+'{\\exp'
											+'{\\grp'
												+'{\\str{(}}'
												+'{\\exp{\\str{&nbsp;$$base}}{\\str{$$exp1}}}'
												+'{\\str{)}}'
											+'}'
											+'{\\str{$$expSecond1}}'
										+'}'
										+'{\\str{&nbsp; means &nbsp;}}'
										+'{\\str{$$base<sup> $$exp1 * $$expSecond1</sup>}}'
										+'{\\str{&nbsp; or &nbsp;}}'
										+'{\\str{$$base<sup> $$expEval</sup>}}'
									+'}'
									+'{\\str{&nbsp;}}'
									+'{\\str{&nbsp;}}'
									+'{\\grp'
										+'{\\str{So: &nbsp;}}'
										+'{\\exp'
											+'{\\grp'
												+'{\\str{(}}'
												+'{\\exp{\\str{&nbsp;$$base}}{\\str{$$exp1}}}'
												+'{\\str{)}}'
											+'}'
											+'{\\str{$$expSecond1}}'
										+'}'
										+'{\\str{&nbsp; * &nbsp;}}'
										+'{\\exp{\\str{&nbsp;$$base}}{\\str{$$exp2}}}'
										+'{\\str{&nbsp; = &nbsp;}}'
										+'{\\str{$$base<sup> $$expEval</sup>}}'
										+'{\\str{&nbsp; * &nbsp;}}'
										+'{\\str{$$base<sup> $$exp2</sup>}}'
									+'}'
									+'{\\str{&nbsp;}}'
									+'{\\str{&nbsp;}}'
									+'{\\str{<u>Second</u>, we now use the exponent rule \"Multiplication of Same Bases.\" We <u>add the exponents<u>:}}'
									+'{\\str{&nbsp;}}'
									+'{\\grp'
										+'{\\str{$$base<sup> $$expEval</sup>}}'
										+'{\\str{&nbsp; * &nbsp;}}'
										+'{\\str{$$base<sup> $$exp2</sup>}}'
										+'{\\str{&nbsp; means &nbsp;}}'
										+'{\\str{$$base<sup> $$expEval + $$exp2</sup>}}'
										+'{\\str{&nbsp; or &nbsp;}}'
										+'{\\str{$$base<sup> $$expAns</sup>}}'
									+'}'
									+'{\\str{&nbsp;}}'
							),
				helpAnswer: dataUtils.pre(
								'\\grp'
									+'{\\str{Simplified Answer: &nbsp; $$base<sup> $$expAns</sup>}}'	
							),
				template: 'firstSimplify' 
			 }
			 ,
			 // prob 11
			 {
				problemStatement: dataUtils.pre(
								'\\rowgrp'
									+'{\\grp'
										+'{\\str{Simplify: &nbsp;}}'
										+'{\\exp'
											+'{\\grp'
												+'{\\str{(}}'
												+'{\\exp{\\str{&nbsp;$$base}}{\\str{$$exp1}}}'
												+'{\\str{)}}'
											+'}'
											+'{\\str{$$expSecond1}}'
										+'}'
									+'}'
							),
				wellProblemStatement: dataUtils.pre(
									'\\css'
										+'{\\rowgrp'
											+'{\\html{&nbsp;}}'
											+'{\\grp'
												+'{\\exp'
													+'{\\grp'
														+'{\\str{(}}'
														+'{\\exp{\\str{&nbsp;$$base}}{\\str{$$exp1}}}'
														+'{\\str{)}}'
													+'}'
													+'{\\str{$$expSecond1}}'
												+'}'
												+'{\\str{&nbsp; = &nbsp;}}'
												+'{\\frac'
													+'{\\str{1}}'
													+'{\\str{$$base<sup> $$expAns</sup>}}'
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
												+'{\\frac'
													+'{\\input{1}}'
													+'{\\input{$$evalAns}}'
												+'}'
											+'}'
										+'}{well}'
							),
				answerInstructions: 'Use parentheses as a part of your answer if necessary.<br><br>',
				base: '2',
				exp1: '4',
				expSecond1: '-2',
				ansBase: '2',
				expFirstProduct: '-8',
				expAns: '8',
				evalAns: '256',
				solutionAnswer: dataUtils.pre(
								'\\rowgrp'
									+'{\\str{$$answerInstructions}}'
									+'{\\frac'
											+'{\\input{1}}'
											+'{\\exp'
												+'{\\input{$$base}}'
												+'{\\input{$$expAns}}'
											+'}'
									+'}'
							),
				line1: dataUtils.pre(
								'\\rowgrp'
									+'{\\str{<u>First</u>, we use the exponent rule \"Power raised to a Power\" here. When we have a power raised to another power, we <u>multiply the exponents</u>.}}'	
									+'{\\str{&nbsp;}}'
									+'{\\str{&nbsp;}}'
									+'{\\grp'
										+'{\\exp'
											+'{\\grp'
												+'{\\str{(}}'
												+'{\\exp{\\str{&nbsp;$$base}}{\\str{$$exp1}}}'
												+'{\\str{)}}'
											+'}'
											+'{\\str{$$expSecond1}}'
										+'}'
										+'{\\str{&nbsp; means &nbsp;}}'
										+'{\\str{$$base<sup> $$exp1 * ($$expSecond1 )</sup>}}'
										+'{\\str{&nbsp; or &nbsp;}}'
										+'{\\str{$$base<sup> $$expFirstProduct</sup>}}'
									+'}'
									+'{\\str{&nbsp;}}'
									+'{\\str{&nbsp;}}'
									+'{\\grp'
										+'{\\str{So:}}'
										+'{\\exp'
											+'{\\grp'
												+'{\\str{(}}'
												+'{\\exp{\\str{&nbsp;$$base}}{\\str{$$exp1}}}'
												+'{\\str{)}}'
											+'}'
											+'{\\str{$$expSecond1}}'
										+'}'
										+'{\\str{&nbsp; becomes &nbsp;}}'
										+'{\\str{$$base<sup> $$expFirstProduct</sup>}}'
									+'}'
									+'{\\str{&nbsp;}}'
									+'{\\str{&nbsp;}}'
									+'{\\str{<u>Second</u>, we still need to \"get rid of the negative exponent\" by taking the <u>reciprocal of the base</u> and changing the sign of the exponent.}}'
									+'{\\str{&nbsp;}}'
									+'{\\grp'
										+'{\\str{$$base<sup> $$expFirstProduct</sup>}}'
										+'{\\str{&nbsp; = &nbsp;}}'
										+'{\\frac'
											+'{\\str{1}}'
											+'{\\str{$$base<sup> $$expAns</sup>}}'
										+'}'
									+'}'
									
								),
				helpAnswer: dataUtils.pre(
								'\\grp'
									+'{\\str{Simplified Answer: &nbsp;}}'
									+'{\\frac'
										+'{\\str{1}}'
										+'{\\str{$$base<sup> $$expAns</sup>}}'
									+'}'
							),
				template: 'evaluateAfterSimplify' 
			 }
			 ,
			 // prob 12
			 {
				problemStatement: dataUtils.pre(
								'\\rowgrp'
									+'{\\grp'
										+'{\\str{Simplify: &nbsp;}}'
										+'{\\exp'
											+'{\\grp'
												+'{\\str{(}}'
												+'{\\exp{\\str{&nbsp;$$base}}{\\str{$$exp1}}}'
												+'{\\str{)}}'
											+'}'
											+'{\\str{$$expSecond1}}'
										+'}'
									+'}'
							),
				wellProblemStatement: dataUtils.pre(
									'\\css'
										+'{\\rowgrp'
											+'{\\html{&nbsp;}}'
											+'{\\grp'
												+'{\\exp'
													+'{\\grp'
														+'{\\str{(}}'
														+'{\\exp{\\str{&nbsp;$$base}}{\\str{$$exp1}}}'
														+'{\\str{)}}'
													+'}'
													+'{\\str{$$expSecond1}}'
												+'}'
												+'{\\str{&nbsp; = &nbsp;}}'
												+'{\\frac'
													+'{\\str{1}}'
													+'{\\str{$$base<sup> $$expAns</sup>}}'
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
												+'{\\frac'
													+'{\\input{1}}'
													+'{\\input{$$evalAns}}'
												+'}'
											+'}'
										+'}{well}'
							),
				answerInstructions: 'Use parentheses as a part of your answer if necessary.<br><br>',
				base: '5',
				exp1: '3',
				expSecond1: '-2',
				ansBase: '5',
				expFirstProduct: '-6',
				expAns: '6',
				evalAns: '15625',
				solutionAnswer: dataUtils.pre(
								'\\rowgrp'
									+'{\\str{$$answerInstructions}}'
									+'{\\frac'
											+'{\\input{1}}'
											+'{\\exp'
												+'{\\input{$$base}}'
												+'{\\input{$$expAns}}'
											+'}'
									+'}'
							),
				line1: dataUtils.pre(
								'\\rowgrp'
									+'{\\str{<u>First</u>, we use the exponent rule \"Power raised to a Power\" here. When we have a power raised to another power, we <u>multiply the exponents</u>.}}'	
									+'{\\str{&nbsp;}}'
									+'{\\str{&nbsp;}}'
									+'{\\grp'
										+'{\\exp'
											+'{\\grp'
												+'{\\str{(}}'
												+'{\\exp{\\str{&nbsp;$$base}}{\\str{$$exp1}}}'
												+'{\\str{)}}'
											+'}'
											+'{\\str{$$expSecond1}}'
										+'}'
										+'{\\str{&nbsp; means &nbsp;}}'
										+'{\\str{$$base<sup> $$exp1 * ($$expSecond1 )</sup>}}'
										+'{\\str{&nbsp; or &nbsp;}}'
										+'{\\str{$$base<sup> $$expFirstProduct</sup>}}'
									+'}'
									+'{\\str{&nbsp;}}'
									+'{\\str{&nbsp;}}'
									+'{\\grp'
										+'{\\str{So:}}'
										+'{\\exp'
											+'{\\grp'
												+'{\\str{(}}'
												+'{\\exp{\\str{&nbsp;$$base}}{\\str{$$exp1}}}'
												+'{\\str{)}}'
											+'}'
											+'{\\str{$$expSecond1}}'
										+'}'
										+'{\\str{&nbsp; becomes &nbsp;}}'
										+'{\\str{$$base<sup> $$expFirstProduct</sup>}}'
									+'}'
									+'{\\str{&nbsp;}}'
									+'{\\str{&nbsp;}}'
									+'{\\str{<u>Second</u>, we still need to \"get rid of the negative exponent\" by taking the <u>reciprocal of the base</u> and changing the sign of the exponent.}}'
									+'{\\str{&nbsp;}}'
									+'{\\grp'
										+'{\\str{$$base<sup> $$expFirstProduct</sup>}}'
										+'{\\str{&nbsp; = &nbsp;}}'
										+'{\\frac'
											+'{\\str{1}}'
											+'{\\str{$$base<sup> $$expAns</sup>}}'
										+'}'
									+'}'
									
								),
				helpAnswer: dataUtils.pre(
								'\\grp'
									+'{\\str{Simplified Answer: &nbsp;}}'
									+'{\\frac'
										+'{\\str{1}}'
										+'{\\str{$$base<sup> $$expAns</sup>}}'
									+'}'
							),
				template: 'evaluateAfterSimplify' 
			 }
			 ,
			 // prob 13
			 {
				problemStatement: dataUtils.pre(
							'\\pan{12}{11}'
									+'{\\rowgrp'
										+'{\\grp'
											+'{\\str{Simplify: &nbsp;}}'
											+'{\\exp'
												+'{\\grp'
													+'{\\str{(}}'
													+'{\\exp{\\str{&nbsp;$$base}}{\\str{$$exp1}}}'
													+'{\\str{)}}'
												+'}'
												+'{\\str{$$expSecond1}}'
											+'}'
											+'{\\str{*}}'
											+'{\\exp{\\str{&nbsp;$$base}}{\\str{$$secondExp1}}}'
										+'}'
									+'}'
							),
				wellProblemStatement: dataUtils.pre(
									'\\css'
										+'{\\rowgrp'
											+'{\\html{&nbsp;}}'
											+'{\\grp'
												+'{\\exp'
													+'{\\grp'
														+'{\\str{(}}'
														+'{\\exp{\\str{&nbsp;$$base}}{\\str{$$exp1}}}'
														+'{\\str{)}}'
													+'}'
													+'{\\str{$$expSecond1}}'
												+'}'
												+'{\\str{*}}'
												+'{\\exp{\\str{&nbsp;$$base}}{\\str{$$secondExp1}}}'
												+'{\\str{&nbsp; = &nbsp;}}'
												+'{\\str{1}}'
											+'}'
											+'{\\html{&nbsp;}}'
											+'{\\css'
												+'{\\grp'
													+'{\\str{Evaluate the simplified expression<span class=large>:</span>}}'
												+'}'
												+'{alert alert-info}'
											+'}'
											+'{\\grp'
												+'{\\input{$$evalAns}}'
											+'}'
										+'}{well}'
							),
				answerInstructions: 'Use parentheses as a part of your answer if necessary.<br><br>',
				base: '2',
				exp1: '-2 ',
				expSecond1: '3',
				secondExp1: '6 ',
				ansBase: '2',
				expFirstProduct: '-6',
				expSum: '0',
				expAns: '',
				evalAns: '1',
				solutionAnswer: dataUtils.pre(
								'\\rowgrp'
									+'{\\str{$$answerInstructions}}'
									+'{\\grp'
										+'{\\input{$$evalAns}}'
									+'}'
							),
				line1: dataUtils.pre(
								'\\rowgrp'
									+'{\\str{<u>First</u>, we use the exponent rule \"Power raised to a Power\" here. When we have a power raised to another power, we <u>multiply the exponents</u>.}}'	
									+'{\\str{&nbsp;}}'
									+'{\\str{&nbsp;}}'
									+'{\\grp'
										+'{\\exp'
											+'{\\grp'
												+'{\\str{(}}'
												+'{\\exp{\\str{&nbsp;$$base}}{\\str{$$exp1}}}'
												+'{\\str{)}}'
											+'}'
											+'{\\str{$$expSecond1}}'
										+'}'
										+'{\\str{&nbsp; means &nbsp;}}'
										+'{\\str{$$base<sup> $$exp1 * ($$expSecond1 )</sup>}}'
										+'{\\str{&nbsp; or &nbsp;}}'
										+'{\\str{$$base<sup> $$expFirstProduct</sup>}}'
									+'}'
									+'{\\str{&nbsp;}}'
									+'{\\str{&nbsp;}}'
									+'{\\grp'
										+'{\\str{So:}}'
										+'{\\exp'
											+'{\\grp'
												+'{\\str{(}}'
												+'{\\exp{\\str{&nbsp;$$base}}{\\str{$$exp1}}}'
												+'{\\str{)}}'
											+'}'
											+'{\\str{$$expSecond1}}'
										+'}'
										+'{\\str{*}}'
										+'{\\exp{\\str{&nbsp;$$base}}{\\str{$$secondExp1}}}'
										+'{\\str{&nbsp; becomes &nbsp;&nbsp;}}'
										+'{\\str{$$base<sup> $$expFirstProduct</sup>}}'
										+'{\\str{*}}'
										+'{\\str{$$base <sup> $$secondExp1</sup>}}'
									+'}'
									+'{\\str{&nbsp;}}'
									+'{\\str{&nbsp;}}'
									+'{\\str{<u>Second</u>, we can now use the exponent rule \"Multiplication of Same Bases.\" We <u>add the exponents</u>.}}'
									+'{\\str{&nbsp;}}'
									+'{\\grp'
										+'{\\str{$$base<sup> $$expFirstProduct</sup>}}'
										+'{\\str{*}}'
										+'{\\str{$$base<sup> $$secondExp1</sup>}}'
										+'{\\str{&nbsp; = &nbsp;}}'
										+'{\\str{$$base<sup> $$expFirstProduct + $$secondExp1</sup>}}'
										+'{\\str{&nbsp; = &nbsp;}}'
										+'{\\str{$$base<sup> $$expSum</sup>}}'
									+'}'
									+'{\\str{&nbsp;}}'
									+'{\\str{<u>Third</u>, we need to remember that any non-zero base raised to the <u>power of zero</u> is equal to 1 whole.}}'
									
								),
				helpAnswer: dataUtils.pre(
								'\\grp'
									+'{\\str{Simplified Answer: &nbsp;}}'
									+'{\\str{$$evalAns}}'
							),
				template: 'evaluateAfterSimplify' 
			 }
			 ,
			 // prob 14
			 {
				problemStatement: dataUtils.pre(
								'\\pan{12}{11}'
									+'{\\rowgrp'
										+'{\\grp'
											+'{\\str{Simplify: &nbsp;}}'
											+'{\\exp'
												+'{\\grp'
													+'{\\str{(}}'
													+'{\\exp{\\str{&nbsp;$$base}}{\\str{$$exp1}}}'
													+'{\\str{)}}'
												+'}'
												+'{\\str{$$expSecond1}}'
											+'}'
											+'{\\str{*}}'
											+'{\\exp{\\str{&nbsp;$$base}}{\\str{$$secondExp1}}}'
										+'}'
									+'}'
							),
				wellProblemStatement: dataUtils.pre(
									'\\css'
										+'{\\rowgrp'
											+'{\\html{&nbsp;}}'
											+'{\\grp'
												+'{\\exp'
													+'{\\grp'
														+'{\\str{(}}'
														+'{\\exp{\\str{&nbsp;$$base}}{\\str{$$exp1}}}'
														+'{\\str{)}}'
													+'}'
													+'{\\str{$$expSecond1}}'
												+'}'
												+'{\\str{*}}'
												+'{\\exp{\\str{&nbsp;$$base}}{\\str{$$secondExp1}}}'
												+'{\\str{&nbsp; = &nbsp;}}'
												+'{\\str{1}}'
											+'}'
											+'{\\html{&nbsp;}}'
											+'{\\css'
												+'{\\grp'
													+'{\\str{Evaluate the simplified expression<span class=large>:</span>}}'
												+'}'
												+'{alert alert-info}'
											+'}'
											+'{\\grp'
												+'{\\input{$$evalAns}}'
											+'}'
										+'}{well}'
							),
				answerInstructions: 'Use parentheses as a part of your answer if necessary.<br><br>',
				base: '6',
				exp1: '-3 ',
				expSecond1: '4',
				secondExp1: '12 ',
				ansBase: '6',
				expFirstProduct: '-12',
				expSum: '0',
				expAns: '',
				evalAns: '1',
				solutionAnswer: dataUtils.pre(
								'\\rowgrp'
									+'{\\str{$$answerInstructions}}'
									+'{\\grp'
										+'{\\input{$$evalAns}}'
									+'}'
							),
				line1: dataUtils.pre(
								'\\rowgrp'
									+'{\\str{<u>First</u>, we use the exponent rule \"Power raised to a Power\" here. When we have a power raised to another power, we <u>multiply the exponents</u>.}}'	
									+'{\\str{&nbsp;}}'
									+'{\\str{&nbsp;}}'
									+'{\\grp'
										+'{\\exp'
											+'{\\grp'
												+'{\\str{(}}'
												+'{\\exp{\\str{&nbsp;$$base}}{\\str{$$exp1}}}'
												+'{\\str{)}}'
											+'}'
											+'{\\str{$$expSecond1}}'
										+'}'
										+'{\\str{&nbsp; means &nbsp;}}'
										+'{\\str{$$base<sup> $$exp1 * ($$expSecond1 )</sup>}}'
										+'{\\str{&nbsp; or &nbsp;}}'
										+'{\\str{$$base<sup> $$expFirstProduct</sup>}}'
									+'}'
									+'{\\str{&nbsp;}}'
									+'{\\str{&nbsp;}}'
									+'{\\grp'
										+'{\\str{So:}}'
										+'{\\exp'
											+'{\\grp'
												+'{\\str{(}}'
												+'{\\exp{\\str{&nbsp;$$base}}{\\str{$$exp1}}}'
												+'{\\str{)}}'
											+'}'
											+'{\\str{$$expSecond1}}'
										+'}'
										+'{\\str{*}}'
										+'{\\exp{\\str{&nbsp;$$base}}{\\str{$$secondExp1}}}'
										+'{\\str{&nbsp; becomes &nbsp;&nbsp;}}'
										+'{\\str{$$base<sup> $$expFirstProduct</sup>}}'
										+'{\\str{*}}'
										+'{\\str{$$base <sup> $$secondExp1</sup>}}'
									+'}'
									+'{\\str{&nbsp;}}'
									+'{\\str{&nbsp;}}'
									+'{\\str{<u>Second</u>, we can now use the exponent rule \"Multiplication of Same Bases.\" We <u>add the exponents</u>.}}'
									+'{\\str{&nbsp;}}'
									+'{\\grp'
										+'{\\str{$$base<sup> $$expFirstProduct</sup>}}'
										+'{\\str{*}}'
										+'{\\str{$$base<sup> $$secondExp1</sup>}}'
										+'{\\str{&nbsp; = &nbsp;}}'
										+'{\\str{$$base<sup> $$expFirstProduct + $$secondExp1</sup>}}'
										+'{\\str{&nbsp; = &nbsp;}}'
										+'{\\str{$$base<sup> $$expSum</sup>}}'
									+'}'
									+'{\\str{&nbsp;}}'
									+'{\\str{<u>Third</u>, we need to remember that any non-zero base raised to the <u>power of zero</u> is equal to 1 whole.}}'
									
								),
				helpAnswer: dataUtils.pre(
								'\\grp'
									+'{\\str{Simplified Answer: &nbsp;}}'
									+'{\\str{$$evalAns}}'
							),
				template: 'evaluateAfterSimplify' 
			 }
			 ,
			 // prob 15
			 {
				problemStatement: dataUtils.pre(
								'\\pan{12}{11}'
									+'{\\rowgrp'
										+'{\\grp'
											+'{\\str{Simplify: &nbsp;}}'
											+'{\\exp'
												+'{\\grp'
													+'{\\str{(}}'
													+'{\\exp{\\str{&nbsp;$$base}}{\\str{$$exp1}}}'
													+'{\\str{)}}'
												+'}'
												+'{\\str{$$expSecond1}}'
											+'}'
											+'{\\str{*}}'
											+'{\\exp{\\str{&nbsp;$$base}}{\\str{$$secondExp1}}}'
										+'}'
									+'}'
							),
				answerInstructions: 'All simplified answers must have only positive exponents.<br><br>',
				base: '7',
				exp1: '-1 ',
				expSecond1: '4',
				secondExp1: '-3 ',
				ansBase: '7',
				expFirstProduct: '-4',
				expSum: '-7 ',
				expAns: '7',
				evalAns: '1',
				solutionAnswer: dataUtils.pre(
								'\\rowgrp'
									+'{\\str{$$answerInstructions}}'
									+'{\\frac'
										+'{\\input{$$evalAns}}'
										+'{\\exp{\\input{$$ansBase}}{\\input{$$expAns}}}'
									+'}'
							),
				line1: dataUtils.pre(
								'\\rowgrp'
									+'{\\str{<u>First</u>, we use the exponent rule \"Power raised to a Power\" here. When we have a power raised to another power, we <u>multiply the exponents</u>.}}'	
									+'{\\str{&nbsp;}}'
									+'{\\str{&nbsp;}}'
									+'{\\grp'
										+'{\\exp'
											+'{\\grp'
												+'{\\str{(}}'
												+'{\\exp{\\str{&nbsp;$$base}}{\\str{$$exp1}}}'
												+'{\\str{)}}'
											+'}'
											+'{\\str{$$expSecond1}}'
										+'}'
										+'{\\str{&nbsp; means &nbsp;}}'
										+'{\\str{$$base<sup> $$exp1 * ($$expSecond1 )</sup>}}'
										+'{\\str{&nbsp; or &nbsp;}}'
										+'{\\str{$$base<sup> $$expFirstProduct</sup>}}'
									+'}'
									+'{\\str{&nbsp;}}'
									+'{\\str{&nbsp;}}'
									+'{\\grp'
										+'{\\str{So:}}'
										+'{\\exp'
											+'{\\grp'
												+'{\\str{(}}'
												+'{\\exp{\\str{&nbsp;$$base}}{\\str{$$exp1}}}'
												+'{\\str{)}}'
											+'}'
											+'{\\str{$$expSecond1}}'
										+'}'
										+'{\\str{*}}'
										+'{\\exp{\\str{&nbsp;$$base}}{\\str{$$secondExp1}}}'
										+'{\\str{&nbsp; becomes &nbsp;&nbsp;}}'
										+'{\\str{$$base<sup> $$expFirstProduct</sup>}}'
										+'{\\str{*}}'
										+'{\\str{$$base <sup> $$secondExp1</sup>}}'
									+'}'
									+'{\\str{&nbsp;}}'
									+'{\\str{&nbsp;}}'
									+'{\\str{<u>Second</u>, we can now use the exponent rule \"Multiplication of Same Bases.\" We <u>add the exponents</u>.}}'
									+'{\\str{&nbsp;}}'
									+'{\\grp'
										+'{\\str{$$base<sup> $$expFirstProduct</sup>}}'
										+'{\\str{*}}'
										+'{\\str{$$base<sup> $$secondExp1</sup>}}'
										+'{\\str{&nbsp; = &nbsp;}}'
										+'{\\str{$$base<sup> $$expFirstProduct + ( $$secondExp1)</sup>}}'
										+'{\\str{&nbsp; = &nbsp;}}'
										+'{\\str{$$base<sup> $$expSum</sup>}}'
									+'}'
									+'{\\str{&nbsp;}}'
									+'{\\str{<u>Third</u>, we still need to \"get rid of the negative exponent\" by taking the <u>reciprocal of the base</u> and changing the sign of the exponent.}}'
									+'{\\str{&nbsp;}}'
									+'{\\grp'
										+'{\\str{$$base<sup> $$expSum</sup>}}'
										+'{\\str{&nbsp; = &nbsp;}}'
										+'{\\frac'
											+'{\\str{$$evalAns}}'
											+'{\\str{$$ansBase<sup> $$expAns</sup>}}'
										+'}'
									+'}'
								),
				helpAnswer: dataUtils.pre(
								'\\grp'
									+'{\\str{Simplified Answer: &nbsp;}}'
									+'{\\frac'
										+'{\\str{$$evalAns}}'
										+'{\\str{$$ansBase<sup> $$expAns</sup>}}'
									+'}'
							),
				template: 'firstSimplify' 
			 }
			 ,
			 // prob 16
			 {
				problemStatement: dataUtils.pre(
								'\\pan{12}{11}'
									+'{\\rowgrp'
										+'{\\grp'
											+'{\\str{Simplify: &nbsp;}}'
											+'{\\exp'
												+'{\\grp'
													+'{\\str{(}}'
													+'{\\exp{\\str{&nbsp;$$base}}{\\str{$$exp1}}}'
													+'{\\str{)}}'
												+'}'
												+'{\\str{$$expSecond1}}'
											+'}'
											+'{\\str{*}}'
											+'{\\exp{\\str{&nbsp;$$base}}{\\str{$$secondExp1}}}'
										+'}'
									+'}'
							),
				answerInstructions: 'All simplified answers must have only positive exponents.<br><br>',
				base: '9',
				exp1: '3',
				expSecond1: '-1 ',
				secondExp1: '-2 ',
				ansBase: '9',
				expFirstProduct: '-3',
				expSum: '-5 ',
				expAns: '5',
				evalAns: '1',
				solutionAnswer: dataUtils.pre(
								'\\rowgrp'
									+'{\\str{$$answerInstructions}}'
									+'{\\frac'
										+'{\\input{$$evalAns}}'
										+'{\\exp{\\input{$$ansBase}}{\\input{$$expAns}}}'
									+'}'
							),
				line1: dataUtils.pre(
								'\\rowgrp'
									+'{\\str{<u>First</u>, we use the exponent rule \"Power raised to a Power\" here. When we have a power raised to another power, we <u>multiply the exponents</u>.}}'	
									+'{\\str{&nbsp;}}'
									+'{\\str{&nbsp;}}'
									+'{\\grp'
										+'{\\exp'
											+'{\\grp'
												+'{\\str{(}}'
												+'{\\exp{\\str{&nbsp;$$base}}{\\str{$$exp1}}}'
												+'{\\str{)}}'
											+'}'
											+'{\\str{$$expSecond1}}'
										+'}'
										+'{\\str{&nbsp; means &nbsp;}}'
										+'{\\str{$$base<sup> $$exp1 * ($$expSecond1 )</sup>}}'
										+'{\\str{&nbsp; or &nbsp;}}'
										+'{\\str{$$base<sup> $$expFirstProduct</sup>}}'
									+'}'
									+'{\\str{&nbsp;}}'
									+'{\\str{&nbsp;}}'
									+'{\\grp'
										+'{\\str{So:}}'
										+'{\\exp'
											+'{\\grp'
												+'{\\str{(}}'
												+'{\\exp{\\str{&nbsp;$$base}}{\\str{$$exp1}}}'
												+'{\\str{)}}'
											+'}'
											+'{\\str{$$expSecond1}}'
										+'}'
										+'{\\str{*}}'
										+'{\\exp{\\str{&nbsp;$$base}}{\\str{$$secondExp1}}}'
										+'{\\str{&nbsp; becomes &nbsp;&nbsp;}}'
										+'{\\str{$$base<sup> $$expFirstProduct</sup>}}'
										+'{\\str{*}}'
										+'{\\str{$$base <sup> $$secondExp1</sup>}}'
									+'}'
									+'{\\str{&nbsp;}}'
									+'{\\str{&nbsp;}}'
									+'{\\str{<u>Second</u>, we can now use the exponent rule \"Multiplication of Same Bases.\" We <u>add the exponents</u>.}}'
									+'{\\str{&nbsp;}}'
									+'{\\grp'
										+'{\\str{$$base<sup> $$expFirstProduct</sup>}}'
										+'{\\str{*}}'
										+'{\\str{$$base<sup> $$secondExp1</sup>}}'
										+'{\\str{&nbsp; = &nbsp;}}'
										+'{\\str{$$base<sup> $$expFirstProduct + ( $$secondExp1)</sup>}}'
										+'{\\str{&nbsp; = &nbsp;}}'
										+'{\\str{$$base<sup> $$expSum</sup>}}'
									+'}'
									+'{\\str{&nbsp;}}'
									+'{\\str{<u>Third</u>, we still need to \"get rid of the negative exponent\" by taking the <u>reciprocal of the base</u> and changing the sign of the exponent.}}'
									+'{\\str{&nbsp;}}'
									+'{\\grp'
										+'{\\str{$$base<sup> $$expSum</sup>}}'
										+'{\\str{&nbsp; = &nbsp;}}'
										+'{\\frac'
											+'{\\str{$$evalAns}}'
											+'{\\str{$$ansBase<sup> $$expAns</sup>}}'
										+'}'
									+'}'
								),
				helpAnswer: dataUtils.pre(
								'\\grp'
									+'{\\str{Simplified Answer: &nbsp;}}'
									+'{\\frac'
										+'{\\str{$$evalAns}}'
										+'{\\str{$$ansBase<sup> $$expAns</sup>}}'
									+'}'
							),
				template: 'firstSimplify' 
			 }
			 ,
			 // prob 17
			 {
				problemStatement: dataUtils.pre(
								'\\pan{12}{11}'
									+'{\\rowgrp'
										+'{\\grp'
											+'{\\str{Simplify: &nbsp;}}'
											+'{\\exp{\\str{&nbsp;$$base}}{\\str{$$secondExp1}}}'
											+'{\\str{*}}'
											+'{\\exp'
												+'{\\grp'
													+'{\\str{(}}'
													+'{\\exp{\\str{&nbsp;$$base}}{\\str{$$exp1}}}'
													+'{\\str{)}}'
												+'}'
												+'{\\str{$$expSecond1}}'
											+'}'
										+'}'
									+'}'
							),
				answerInstructions: 'Use parentheses as a part of your answer if necessary.'
									+'<br>'
									+'All simplified answers must have only positive exponents.'
									+'<br><br>',
				base: '(-3 )',
				exp1: '-1 ',
				expSecond1: '3',
				secondExp1: '2',
				ansBase: '(-3)',
				expFirstProduct: '-3',
				expSum: '-1 ',
				expAns: '1',
				evalAns: '1',
				solutionAnswer: dataUtils.pre(
								'\\rowgrp'
									+'{\\str{$$answerInstructions}}'
									+'{\\frac'
										+'{\\input{$$evalAns}}'
										+'{\\input{$$ansBase}}'
									+'}'
							),
				line1: dataUtils.pre(
								'\\rowgrp'
									+'{\\str{<u>First</u>, we use the exponent rule \"Power raised to a Power\" here. When we have a power raised to another power, we <u>multiply the exponents</u>.}}'	
									+'{\\str{&nbsp;}}'
									+'{\\str{&nbsp;}}'
									+'{\\grp'
										+'{\\exp'
											+'{\\grp'
												+'{\\str{(}}'
												+'{\\exp{\\str{&nbsp;$$base}}{\\str{$$exp1}}}'
												+'{\\str{)}}'
											+'}'
											+'{\\str{$$expSecond1}}'
										+'}'
										+'{\\str{&nbsp; means &nbsp;}}'
										+'{\\str{$$base<sup> $$exp1 * ($$expSecond1 )</sup>}}'
										+'{\\str{&nbsp; or &nbsp;}}'
										+'{\\str{$$base<sup> $$expFirstProduct</sup>}}'
									+'}'
									+'{\\str{&nbsp;}}'
									+'{\\str{&nbsp;}}'
									+'{\\grp'
										+'{\\str{So:}}'
										+'{\\exp{\\str{&nbsp;$$base}}{\\str{$$secondExp1}}}'
										+'{\\str{*}}'
										+'{\\exp'
											+'{\\grp'
												+'{\\str{(}}'
												+'{\\exp{\\str{&nbsp;$$base}}{\\str{$$exp1}}}'
												+'{\\str{)}}'
											+'}'
											+'{\\str{$$expSecond1}}'
										+'}'
										+'{\\str{&nbsp; becomes &nbsp;&nbsp;}}'
										+'{\\str{$$base <sup> $$secondExp1</sup>}}'
										+'{\\str{*}}'
										+'{\\str{$$base<sup> $$expFirstProduct</sup>}}'
									+'}'
									+'{\\str{&nbsp;}}'
									+'{\\str{&nbsp;}}'
									+'{\\str{<u>Second</u>, we can now use the exponent rule \"Multiplication of Same Bases.\" We <u>add the exponents</u>.}}'
									+'{\\str{&nbsp;}}'
									+'{\\grp'
										+'{\\str{$$base<sup> $$secondExp1</sup>}}'
										+'{\\str{*}}'
										+'{\\str{$$base<sup> $$expFirstProduct</sup>}}'
										+'{\\str{&nbsp; = &nbsp;}}'
										+'{\\str{$$base<sup> $$secondExp1 + ($$expFirstProduct )</sup>}}'
										+'{\\str{&nbsp; = &nbsp;}}'
										+'{\\str{$$base<sup> $$expSum</sup>}}'
									+'}'
									+'{\\str{&nbsp;}}'
									+'{\\str{<u>Third</u>, we still need to \"get rid of the negative exponent\" by taking the <u>reciprocal of the base</u> and changing the sign of the exponent.}}'
									+'{\\str{&nbsp;}}'
									+'{\\grp'
										+'{\\str{$$base<sup> $$expSum</sup>}}'
										+'{\\str{&nbsp; = &nbsp;}}'
										+'{\\frac'
											+'{\\str{$$evalAns}}'
											+'{\\str{$$base<sup> $$expAns</sup>}}'
										+'}'
										+'{\\str{&nbsp; or &nbsp;}}'
										+'{\\frac'
											+'{\\str{$$evalAns}}'
											+'{\\str{$$base}}'
										+'}'
									+'}'
								),
				helpAnswer: dataUtils.pre(
								'\\grp'
									+'{\\str{Simplified Answer: &nbsp;}}'
									+'{\\frac'
											+'{\\str{$$evalAns}}'
											+'{\\str{$$base}}'
										+'}'
							),
				template: 'firstSimplify' 
			 }
			 ,
			 // prob 18
			 {
				problemStatement: dataUtils.pre(
								'\\pan{12}{11}'
									+'{\\rowgrp'
										+'{\\grp'
											+'{\\str{Simplify: &nbsp;}}'
											+'{\\exp{\\str{&nbsp;$$base}}{\\str{$$secondExp1}}}'
											+'{\\str{*}}'
											+'{\\exp'
												+'{\\grp'
													+'{\\str{(}}'
													+'{\\exp{\\str{&nbsp;$$base}}{\\str{$$exp1}}}'
													+'{\\str{)}}'
												+'}'
												+'{\\str{$$expSecond1}}'
											+'}'
										+'}'
									+'}'
							),
				answerInstructions: 'Use parentheses as a part of your answer if necessary.'
									+'<br>'
									+'All simplified answers must have only positive exponents.'
									+'<br><br>',
				base: '(-5 )',
				exp1: '-2 ',
				expSecond1: '2',
				secondExp1: '3',
				ansBase: '(-5)',
				expFirstProduct: '-4',
				expSum: '-1 ',
				expAns: '1',
				evalAns: '1',
				solutionAnswer: dataUtils.pre(
								'\\rowgrp'
									+'{\\str{$$answerInstructions}}'
									+'{\\frac'
										+'{\\input{$$evalAns}}'
										+'{\\input{$$ansBase}}'
									+'}'
							),
				line1: dataUtils.pre(
								'\\rowgrp'
									+'{\\str{<u>First</u>, we use the exponent rule \"Power raised to a Power\" here. When we have a power raised to another power, we <u>multiply the exponents</u>.}}'	
									+'{\\str{&nbsp;}}'
									+'{\\str{&nbsp;}}'
									+'{\\grp'
										+'{\\exp'
											+'{\\grp'
												+'{\\str{(}}'
												+'{\\exp{\\str{&nbsp;$$base}}{\\str{$$exp1}}}'
												+'{\\str{)}}'
											+'}'
											+'{\\str{$$expSecond1}}'
										+'}'
										+'{\\str{&nbsp; means &nbsp;}}'
										+'{\\str{$$base<sup> $$exp1 * $$expSecond1</sup>}}'
										+'{\\str{&nbsp; or &nbsp;}}'
										+'{\\str{$$base<sup> $$expFirstProduct</sup>}}'
									+'}'
									+'{\\str{&nbsp;}}'
									+'{\\str{&nbsp;}}'
									+'{\\grp'
										+'{\\str{So:}}'
										+'{\\exp{\\str{&nbsp;$$base}}{\\str{$$secondExp1}}}'
										+'{\\str{*}}'
										+'{\\exp'
											+'{\\grp'
												+'{\\str{(}}'
												+'{\\exp{\\str{&nbsp;$$base}}{\\str{$$exp1}}}'
												+'{\\str{)}}'
											+'}'
											+'{\\str{$$expSecond1}}'
										+'}'
										+'{\\str{&nbsp; becomes &nbsp;&nbsp;}}'
										+'{\\str{$$base <sup> $$secondExp1</sup>}}'
										+'{\\str{*}}'
										+'{\\str{$$base<sup> $$expFirstProduct</sup>}}'
									+'}'
									+'{\\str{&nbsp;}}'
									+'{\\str{&nbsp;}}'
									+'{\\str{<u>Second</u>, we can now use the exponent rule \"Multiplication of Same Bases.\" We <u>add the exponents</u>.}}'
									+'{\\str{&nbsp;}}'
									+'{\\grp'
										+'{\\str{$$base<sup> $$secondExp1</sup>}}'
										+'{\\str{*}}'
										+'{\\str{$$base<sup> $$expFirstProduct</sup>}}'
										+'{\\str{&nbsp; = &nbsp;}}'
										+'{\\str{$$base<sup> $$secondExp1 + ($$expFirstProduct )</sup>}}'
										+'{\\str{&nbsp; = &nbsp;}}'
										+'{\\str{$$base<sup> $$expSum</sup>}}'
									+'}'
									+'{\\str{&nbsp;}}'
									+'{\\str{<u>Third</u>, we still need to \"get rid of the negative exponent\" by taking the <u>reciprocal of the base</u> and changing the sign of the exponent.}}'
									+'{\\str{&nbsp;}}'
									+'{\\grp'
										+'{\\str{$$base<sup> $$expSum</sup>}}'
										+'{\\str{&nbsp; = &nbsp;}}'
										+'{\\frac'
											+'{\\str{$$evalAns}}'
											+'{\\str{$$base<sup> $$expAns</sup>}}'
										+'}'
										+'{\\str{&nbsp; or &nbsp;}}'
										+'{\\frac'
											+'{\\str{$$evalAns}}'
											+'{\\str{$$base}}'
										+'}'
									+'}'
								),
				helpAnswer: dataUtils.pre(
								'\\grp'
									+'{\\str{Simplified Answer: &nbsp;}}'
									+'{\\frac'
											+'{\\str{$$evalAns}}'
											+'{\\str{$$base}}'
										+'}'
							),
				template: 'firstSimplify' 
			 }
			 ,
			 // prob 19
			 {
				problemStatement: dataUtils.pre(
								'\\pan{12}{11}'
									+'{\\rowgrp'
										+'{\\grp'
											+'{\\str{Simplify: &nbsp;}}'
											+'{\\frac'
												+'{\\exp'
													+'{\\grp'
														+'{\\str{(}}'
														+'{\\exp{\\str{&nbsp;$$base}}{\\str{$$exp1}}}'
														+'{\\str{)}}'
													+'}'
													+'{\\str{$$expSecond1}}'
												+'}'
												+'{\\exp{\\str{&nbsp;$$base}}{\\str{$$secondExp1}}}'
											+'}'
										+'}'
							),
				wellProblemStatement: dataUtils.pre(
									'\\css'
										+'{\\rowgrp'
											+'{\\html{&nbsp;}}'
											+'{\\grp'
												+'{\\frac'
													+'{\\exp'
														+'{\\grp'
															+'{\\str{(}}'
															+'{\\exp{\\str{&nbsp;$$base}}{\\str{$$exp1}}}'
															+'{\\str{)}}'
														+'}'
														+'{\\str{$$expSecond1}}'
													+'}'
													+'{\\exp{\\str{&nbsp;$$base}}{\\str{$$secondExp1}}}'
												+'}'
												+'{\\str{&nbsp; = &nbsp;}}'
												+'{\\str{$$base<sup> $$expDiff</sup>}}'
											+'}'
											+'{\\html{&nbsp;}}'
											+'{\\css'
												+'{\\grp'
													+'{\\str{Evaluate the simplified expression<span class=large>:</span>}}'
												+'}'
												+'{alert alert-info}'
											+'}'
											+'{\\grp'
												+'{\\input{$$evalAns}}'
											+'}'
										+'}{well}'
							),
				answerInstructions: 'All simplified answers must have only positive exponents.'
									+'<br><br>',
				base: '2',
				exp1: '2',
				expSecond1: '3',
				secondExp1: '4',
				ansBase: '2',
				expFirstProduct: '6',
				expDiff: '2',
				expAns: '2',
				evalAns: '4',
				solutionAnswer: dataUtils.pre(
								'\\rowgrp'
									+'{\\str{$$answerInstructions}}'
									+'{\\exp'
										+'{\\input{$$ansBase}}'
										+'{\\input{$$expAns}}'
									+'}'
							),
				line1: dataUtils.pre(
								'\\rowgrp'
									+'{\\str{<u>First</u>, we use the exponent rule \"Power raised to a Power\" here. When we have a power raised to another power, we <u>multiply the exponents</u>.}}'	
									+'{\\str{&nbsp;}}'
									+'{\\str{&nbsp;}}'
									+'{\\grp'
										+'{\\exp'
											+'{\\grp'
												+'{\\str{(}}'
												+'{\\exp{\\str{&nbsp;$$base}}{\\str{$$exp1}}}'
												+'{\\str{)}}'
											+'}'
											+'{\\str{$$expSecond1}}'
										+'}'
										+'{\\str{&nbsp; means &nbsp;}}'
										+'{\\str{$$base<sup> $$exp1 * $$expSecond1</sup>}}'
										+'{\\str{&nbsp; or &nbsp;}}'
										+'{\\str{$$base<sup> $$expFirstProduct</sup>}}'
									+'}'
									+'{\\str{&nbsp;}}'
									+'{\\str{&nbsp;}}'
									+'{\\grp'
										+'{\\str{So:}}'
										+'{\\frac'
											+'{\\exp'
												+'{\\grp'
													+'{\\str{(}}'
													+'{\\exp{\\str{&nbsp;$$base}}{\\str{$$exp1}}}'
													+'{\\str{)}}'
												+'}'
												+'{\\str{$$expSecond1}}'
											+'}'
											+'{\\exp{\\str{&nbsp;$$base}}{\\str{$$secondExp1}}}'
										+'}'
										+'{\\str{&nbsp; becomes &nbsp;&nbsp;}}'
										+'{\\frac'
											+'{\\str{$$base<sup> $$expFirstProduct</sup>}}'
											+'{\\str{$$base<sup> $$secondExp1</sup>}}'
										+'}'
									+'}'
									+'{\\str{&nbsp;}}'
									+'{\\str{&nbsp;}}'
									+'{\\str{<u>Second</u>, we use the exponent rule \"Division of Same Bases\" here. When we divide same bases, we <u>subtract the exponents</u>.}}'
									+'{\\str{&nbsp;}}'
									+'{\\grp'
										+'{\\frac'
											+'{\\str{$$base<sup> $$expFirstProduct</sup>}}'
											+'{\\str{$$base<sup> $$secondExp1</sup>}}'
										+'}'
										+'{\\str{&nbsp; = &nbsp;}}'
										+'{\\str{$$base<sup> $$expFirstProduct - $$secondExp1</sup>}}'
										+'{\\str{&nbsp; = &nbsp;}}'
										+'{\\str{$$base<sup> $$expDiff</sup>}}'
									+'}'
								),
				helpAnswer: dataUtils.pre(
								'\\grp'
									+'{\\str{Simplified Answer: &nbsp;}}'
									+'{\\str{$$base<sup> $$expDiff</sup>}}'
							),
				template: 'evaluateAfterSimplify' 
			 }
			 ,
			 // prob 20
			 {
				problemStatement: dataUtils.pre(
								'\\pan{12}{11}'
									+'{\\rowgrp'
										+'{\\grp'
											+'{\\str{Simplify: &nbsp;}}'
											+'{\\frac'
												+'{\\exp'
													+'{\\grp'
														+'{\\str{(}}'
														+'{\\exp{\\str{&nbsp;$$base}}{\\str{$$exp1}}}'
														+'{\\str{)}}'
													+'}'
													+'{\\str{$$expSecond1}}'
												+'}'
												+'{\\exp{\\str{&nbsp;$$base}}{\\str{$$secondExp1}}}'
											+'}'
										+'}'
							),
				wellProblemStatement: dataUtils.pre(
									'\\css'
										+'{\\rowgrp'
											+'{\\html{&nbsp;}}'
											+'{\\grp'
												+'{\\frac'
													+'{\\exp'
														+'{\\grp'
															+'{\\str{(}}'
															+'{\\exp{\\str{&nbsp;$$base}}{\\str{$$exp1}}}'
															+'{\\str{)}}'
														+'}'
														+'{\\str{$$expSecond1}}'
													+'}'
													+'{\\exp{\\str{&nbsp;$$base}}{\\str{$$secondExp1}}}'
												+'}'
												+'{\\str{&nbsp; = &nbsp;}}'
												+'{\\str{$$base<sup> $$expDiff</sup>}}'
											+'}'
											+'{\\html{&nbsp;}}'
											+'{\\css'
												+'{\\grp'
													+'{\\str{Evaluate the simplified expression<span class=large>:</span>}}'
												+'}'
												+'{alert alert-info}'
											+'}'
											+'{\\grp'
												+'{\\input{$$evalAns}}'
											+'}'
										+'}{well}'
							),
				answerInstructions: 'All simplified answers must have only positive exponents.'
									+'<br><br>',
				base: '6',
				exp1: '3',
				expSecond1: '4',
				secondExp1: '5',
				ansBase: '6',
				expFirstProduct: '12',
				expDiff: '7',
				expAns: '7',
				evalAns: '279936',
				solutionAnswer: dataUtils.pre(
								'\\rowgrp'
									+'{\\str{$$answerInstructions}}'
									+'{\\exp'
										+'{\\input{$$ansBase}}'
										+'{\\input{$$expAns}}'
									+'}'
							),
				line1: dataUtils.pre(
								'\\rowgrp'
									+'{\\str{<u>First</u>, we use the exponent rule \"Power raised to a Power\" here. When we have a power raised to another power, we <u>multiply the exponents</u>.}}'	
									+'{\\str{&nbsp;}}'
									+'{\\str{&nbsp;}}'
									+'{\\grp'
										+'{\\exp'
											+'{\\grp'
												+'{\\str{(}}'
												+'{\\exp{\\str{&nbsp;$$base}}{\\str{$$exp1}}}'
												+'{\\str{)}}'
											+'}'
											+'{\\str{$$expSecond1}}'
										+'}'
										+'{\\str{&nbsp; means &nbsp;}}'
										+'{\\str{$$base<sup> $$exp1 * $$expSecond1</sup>}}'
										+'{\\str{&nbsp; or &nbsp;}}'
										+'{\\str{$$base<sup> $$expFirstProduct</sup>}}'
									+'}'
									+'{\\str{&nbsp;}}'
									+'{\\str{&nbsp;}}'
									+'{\\grp'
										+'{\\str{So:}}'
										+'{\\frac'
											+'{\\exp'
												+'{\\grp'
													+'{\\str{(}}'
													+'{\\exp{\\str{&nbsp;$$base}}{\\str{$$exp1}}}'
													+'{\\str{)}}'
												+'}'
												+'{\\str{$$expSecond1}}'
											+'}'
											+'{\\exp{\\str{&nbsp;$$base}}{\\str{$$secondExp1}}}'
										+'}'
										+'{\\str{&nbsp; becomes &nbsp;&nbsp;}}'
										+'{\\frac'
											+'{\\str{$$base<sup> $$expFirstProduct</sup>}}'
											+'{\\str{$$base<sup> $$secondExp1</sup>}}'
										+'}'
									+'}'
									+'{\\str{&nbsp;}}'
									+'{\\str{&nbsp;}}'
									+'{\\str{<u>Second</u>, we use the exponent rule \"Division of Same Bases\" here. When we divide same bases, we <u>subtract the exponents</u>.}}'
									+'{\\str{&nbsp;}}'
									+'{\\grp'
										+'{\\frac'
											+'{\\str{$$base<sup> $$expFirstProduct</sup>}}'
											+'{\\str{$$base<sup> $$secondExp1</sup>}}'
										+'}'
										+'{\\str{&nbsp; = &nbsp;}}'
										+'{\\str{$$base<sup> $$expFirstProduct - $$secondExp1</sup>}}'
										+'{\\str{&nbsp; = &nbsp;}}'
										+'{\\str{$$base<sup> $$expDiff</sup>}}'
									+'}'
								),
				helpAnswer: dataUtils.pre(
								'\\grp'
									+'{\\str{Simplified Answer: &nbsp;}}'
									+'{\\str{$$base<sup> $$expDiff</sup>}}'
							),
				template: 'evaluateAfterSimplify' 
			 }
			 ,
			 // prob 21
			 {
				problemStatement: dataUtils.pre(
								'\\pan{12}{11}'
									+'{\\rowgrp'
										+'{\\grp'
											+'{\\str{Simplify: &nbsp;}}'
											+'{\\frac'
												+'{\\exp'
													+'{\\grp'
														+'{\\str{(}}'
														+'{\\exp{\\str{&nbsp;$$base}}{\\str{$$exp1}}}'
														+'{\\str{)}}'
													+'}'
													+'{\\str{$$expSecond1}}'
												+'}'
												+'{\\exp{\\str{&nbsp;$$base}}{\\str{$$secondExp1}}}'
											+'}'
										+'}'
							),
				wellProblemStatement: dataUtils.pre(
									'\\css'
										+'{\\rowgrp'
											+'{\\html{&nbsp;}}'
											+'{\\grp'
												+'{\\frac'
													+'{\\exp'
														+'{\\grp'
															+'{\\str{(}}'
															+'{\\exp{\\str{&nbsp;$$base}}{\\str{$$exp1}}}'
															+'{\\str{)}}'
														+'}'
														+'{\\str{$$expSecond1}}'
													+'}'
													+'{\\exp{\\str{&nbsp;$$base}}{\\str{$$secondExp1}}}'
												+'}'
												+'{\\str{&nbsp; = &nbsp;}}'
												+'{\\str{$$base<sup> $$expDiff</sup>}}'
											+'}'
											+'{\\html{&nbsp;}}'
											+'{\\css'
												+'{\\grp'
													+'{\\str{Evaluate the simplified expression<span class=large>:</span>}}'
												+'}'
												+'{alert alert-info}'
											+'}'
											+'{\\grp'
												+'{\\input{$$evalAns}}'
											+'}'
										+'}{well}'
							),
				answerInstructions: 'Use parentheses as a part of your answer if necessary.'
									+'<br>'
									+'All simplified answers must have only positive exponents.'
									+'<br><br>',
				base: '(-5 )',
				exp1: '2',
				expSecond1: '5',
				secondExp1: '3',
				ansBase: '(-5)',
				expFirstProduct: '10',
				expDiff: '7',
				expAns: '7',
				evalAns: '-78125',
				solutionAnswer: dataUtils.pre(
								'\\rowgrp'
									+'{\\str{$$answerInstructions}}'
									+'{\\exp'
										+'{\\input{$$ansBase}}'
										+'{\\input{$$expAns}}'
									+'}'
							),
				line1: dataUtils.pre(
								'\\rowgrp'
									+'{\\str{<u>First</u>, we use the exponent rule \"Power raised to a Power\" here. When we have a power raised to another power, we <u>multiply the exponents</u>.}}'	
									+'{\\str{&nbsp;}}'
									+'{\\str{&nbsp;}}'
									+'{\\grp'
										+'{\\exp'
											+'{\\grp'
												+'{\\str{(}}'
												+'{\\exp{\\str{&nbsp;$$base}}{\\str{$$exp1}}}'
												+'{\\str{)}}'
											+'}'
											+'{\\str{$$expSecond1}}'
										+'}'
										+'{\\str{&nbsp; means &nbsp;}}'
										+'{\\str{$$base<sup> $$exp1 * $$expSecond1</sup>}}'
										+'{\\str{&nbsp; or &nbsp;}}'
										+'{\\str{$$base<sup> $$expFirstProduct</sup>}}'
									+'}'
									+'{\\str{&nbsp;}}'
									+'{\\str{&nbsp;}}'
									+'{\\grp'
										+'{\\str{So:}}'
										+'{\\frac'
											+'{\\exp'
												+'{\\grp'
													+'{\\str{(}}'
													+'{\\exp{\\str{&nbsp;$$base}}{\\str{$$exp1}}}'
													+'{\\str{)}}'
												+'}'
												+'{\\str{$$expSecond1}}'
											+'}'
											+'{\\exp{\\str{&nbsp;$$base}}{\\str{$$secondExp1}}}'
										+'}'
										+'{\\str{&nbsp; becomes &nbsp;&nbsp;}}'
										+'{\\frac'
											+'{\\str{$$base<sup> $$expFirstProduct</sup>}}'
											+'{\\str{$$base<sup> $$secondExp1</sup>}}'
										+'}'
									+'}'
									+'{\\str{&nbsp;}}'
									+'{\\str{&nbsp;}}'
									+'{\\str{<u>Second</u>, we use the exponent rule \"Division of Same Bases\" here. When we divide same bases, we <u>subtract the exponents</u>.}}'
									+'{\\str{&nbsp;}}'
									+'{\\grp'
										+'{\\frac'
											+'{\\str{$$base<sup> $$expFirstProduct</sup>}}'
											+'{\\str{$$base<sup> $$secondExp1</sup>}}'
										+'}'
										+'{\\str{&nbsp; = &nbsp;}}'
										+'{\\str{$$base<sup> $$expFirstProduct - $$secondExp1</sup>}}'
										+'{\\str{&nbsp; = &nbsp;}}'
										+'{\\str{$$base<sup> $$expDiff</sup>}}'
									+'}'
								),
				helpAnswer: dataUtils.pre(

								'\\grp'
									+'{\\str{Simplified Answer: &nbsp;}}'
									+'{\\str{$$base<sup> $$expDiff</sup>}}'
							),
				template: 'evaluateAfterSimplify' 
			 }
			 ,
			 // prob 22
			 {
				problemStatement: dataUtils.pre(
								'\\pan{12}{11}'
									+'{\\rowgrp'
										+'{\\grp'
											+'{\\str{Simplify: &nbsp;}}'
											+'{\\frac'
												+'{\\exp'
													+'{\\grp'
														+'{\\str{(}}'
														+'{\\exp{\\str{&nbsp;$$base}}{\\str{$$exp1}}}'
														+'{\\str{)}}'
													+'}'
													+'{\\str{$$expSecond1}}'
												+'}'
												+'{\\exp{\\str{&nbsp;$$base}}{\\str{$$secondExp1}}}'
											+'}'
										+'}'
							),
				wellProblemStatement: dataUtils.pre(
									'\\css'
										+'{\\rowgrp'
											+'{\\html{&nbsp;}}'
											+'{\\grp'
												+'{\\frac'
													+'{\\exp'
														+'{\\grp'
															+'{\\str{(}}'
															+'{\\exp{\\str{&nbsp;$$base}}{\\str{$$exp1}}}'
															+'{\\str{)}}'
														+'}'
														+'{\\str{$$expSecond1}}'
													+'}'
													+'{\\exp{\\str{&nbsp;$$base}}{\\str{$$secondExp1}}}'
												+'}'
												+'{\\str{&nbsp; = &nbsp;}}'
												+'{\\str{$$base<sup> $$expDiff</sup>}}'
											+'}'
											+'{\\html{&nbsp;}}'
											+'{\\css'
												+'{\\grp'
													+'{\\str{Evaluate the simplified expression<span class=large>:</span>}}'
												+'}'
												+'{alert alert-info}'
											+'}'
											+'{\\grp'
												+'{\\input{$$evalAns}}'
											+'}'
										+'}{well}'
							),
				answerInstructions: 'Use parentheses as a part of your answer if necessary.'
									+'<br>'
									+'All simplified answers must have only positive exponents.'
									+'<br><br>',
				base: '(-3 )',
				exp1: '3',
				expSecond1: '5',
				secondExp1: '7',
				ansBase: '(-3)',
				expFirstProduct: '15',
				expDiff: '8',
				expAns: '8',
				evalAns: '6561',
				solutionAnswer: dataUtils.pre(
								'\\rowgrp'
									+'{\\str{$$answerInstructions}}'
									+'{\\exp'
										+'{\\input{$$ansBase}}'
										+'{\\input{$$expAns}}'
									+'}'
							),
				line1: dataUtils.pre(
								'\\rowgrp'
									+'{\\str{<u>First</u>, we use the exponent rule \"Power raised to a Power\" here. When we have a power raised to another power, we <u>multiply the exponents</u>.}}'	
									+'{\\str{&nbsp;}}'
									+'{\\str{&nbsp;}}'
									+'{\\grp'
										+'{\\exp'
											+'{\\grp'
												+'{\\str{(}}'
												+'{\\exp{\\str{&nbsp;$$base}}{\\str{$$exp1}}}'
												+'{\\str{)}}'
											+'}'
											+'{\\str{$$expSecond1}}'
										+'}'
										+'{\\str{&nbsp; means &nbsp;}}'
										+'{\\str{$$base<sup> $$exp1 * $$expSecond1</sup>}}'
										+'{\\str{&nbsp; or &nbsp;}}'
										+'{\\str{$$base<sup> $$expFirstProduct</sup>}}'
									+'}'
									+'{\\str{&nbsp;}}'
									+'{\\str{&nbsp;}}'
									+'{\\grp'
										+'{\\str{So:}}'
										+'{\\frac'
											+'{\\exp'
												+'{\\grp'
													+'{\\str{(}}'
													+'{\\exp{\\str{&nbsp;$$base}}{\\str{$$exp1}}}'
													+'{\\str{)}}'
												+'}'
												+'{\\str{$$expSecond1}}'
											+'}'
											+'{\\exp{\\str{&nbsp;$$base}}{\\str{$$secondExp1}}}'
										+'}'
										+'{\\str{&nbsp; becomes &nbsp;&nbsp;}}'
										+'{\\frac'
											+'{\\str{$$base<sup> $$expFirstProduct</sup>}}'
											+'{\\str{$$base<sup> $$secondExp1</sup>}}'
										+'}'
									+'}'
									+'{\\str{&nbsp;}}'
									+'{\\str{&nbsp;}}'
									+'{\\str{<u>Second</u>, we use the exponent rule \"Division of Same Bases\" here. When we divide same bases, we <u>subtract the exponents</u>.}}'
									+'{\\str{&nbsp;}}'
									+'{\\grp'
										+'{\\frac'
											+'{\\str{$$base<sup> $$expFirstProduct</sup>}}'
											+'{\\str{$$base<sup> $$secondExp1</sup>}}'
										+'}'
										+'{\\str{&nbsp; = &nbsp;}}'
										+'{\\str{$$base<sup> $$expFirstProduct - $$secondExp1</sup>}}'
										+'{\\str{&nbsp; = &nbsp;}}'
										+'{\\str{$$base<sup> $$expDiff</sup>}}'
									+'}'
								),
				helpAnswer: dataUtils.pre(

								'\\grp'
									+'{\\str{Simplified Answer: &nbsp;}}'
									+'{\\str{$$base<sup> $$expDiff</sup>}}'
							),
				template: 'evaluateAfterSimplify' 
			 }
			 ,
			 // prob 23
			 {
				problemStatement: dataUtils.pre(
								'\\pan{12}{11}'
									+'{\\rowgrp'
										+'{\\grp'
											+'{\\str{Simplify: &nbsp;}}'
											+'{\\frac'
												+'{\\exp{\\str{&nbsp;$$base}}{\\str{$$secondExp1}}}'
												+'{\\exp'
													+'{\\grp'
														+'{\\str{(}}'
														+'{\\exp{\\str{&nbsp;$$base}}{\\str{$$exp1}}}'
														+'{\\str{)}}'
													+'}'
													+'{\\str{$$expSecond1}}'
												+'}'
											+'}'
										+'}'
							),
				answerInstructions: 'All simplified answers must have only positive exponents.'
									+'<br><br>',
				base: '11',
				exp1: '2',
				expSecond1: '-2 ',
				secondExp1: '3',
				ansBase: '11',
				expFirstProduct: '-4 ',
				expDiff: '7',
				expAns: '7',
				solutionAnswer: dataUtils.pre(
								'\\rowgrp'
									+'{\\str{$$answerInstructions}}'
									+'{\\exp'
										+'{\\input{$$ansBase}}'
										+'{\\input{$$expAns}}'
									+'}'
							),
				line1: dataUtils.pre(
								'\\rowgrp'
									+'{\\str{<u>First</u>, we use the exponent rule \"Power raised to a Power\" here. When we have a power raised to another power, we <u>multiply the exponents</u>.}}'	
									+'{\\str{&nbsp;}}'
									+'{\\str{&nbsp;}}'
									+'{\\grp'
										+'{\\exp'
											+'{\\grp'
												+'{\\str{(}}'
												+'{\\exp{\\str{&nbsp;$$base}}{\\str{$$exp1}}}'
												+'{\\str{)}}'
											+'}'
											+'{\\str{$$expSecond1}}'
										+'}'
										+'{\\str{&nbsp; means &nbsp;}}'
										+'{\\str{$$base<sup> $$exp1 * $$expSecond1</sup>}}'
										+'{\\str{&nbsp; or &nbsp;}}'
										+'{\\str{$$base<sup> $$expFirstProduct</sup>}}'
									+'}'
									+'{\\str{&nbsp;}}'
									+'{\\str{&nbsp;}}'
									+'{\\grp'
										+'{\\str{So:}}'
										+'{\\frac'
											+'{\\exp{\\str{&nbsp;$$base}}{\\str{$$secondExp1}}}'
											+'{\\exp'
												+'{\\grp'
													+'{\\str{(}}'
													+'{\\exp{\\str{&nbsp;$$base}}{\\str{$$exp1}}}'
													+'{\\str{)}}'
												+'}'
												+'{\\str{$$expSecond1}}'
											+'}'
										+'}'
										+'{\\str{&nbsp; becomes &nbsp;&nbsp;}}'
										+'{\\frac'
											+'{\\str{$$base<sup> $$secondExp1</sup>}}'
											+'{\\str{$$base<sup> $$expFirstProduct</sup>}}'
										+'}'
									+'}'
									+'{\\str{&nbsp;}}'
									+'{\\str{&nbsp;}}'
									+'{\\str{<u>Second</u>, we use the exponent rule \"Division of Same Bases\" here. When we divide same bases, we <u>subtract the exponents</u>.}}'
									+'{\\str{&nbsp;}}'
									+'{\\grp'
										+'{\\frac'
											+'{\\str{$$base<sup> $$secondExp1</sup>}}'
											+'{\\str{$$base<sup> $$expFirstProduct</sup>}}'
										+'}'
										+'{\\str{&nbsp; = &nbsp;}}'
										+'{\\str{$$base<sup> $$secondExp1 - ($$expFirstProduct )</sup>}}'
										+'{\\str{&nbsp; = &nbsp;}}'
										+'{\\str{$$base<sup> $$expDiff</sup>}}'
									+'}'
								),
				helpAnswer: dataUtils.pre(

								'\\grp'
									+'{\\str{Simplified Answer: &nbsp;}}'
									+'{\\str{$$base<sup> $$expDiff</sup>}}'
							),
				template: 'firstSimplify' 
			 }
			 ,
			 // prob 24
			 {
				problemStatement: dataUtils.pre(
								'\\pan{12}{11}'
									+'{\\rowgrp'
										+'{\\grp'
											+'{\\str{Simplify: &nbsp;}}'
											+'{\\frac'
												+'{\\exp{\\str{&nbsp;$$base}}{\\str{$$secondExp1}}}'
												+'{\\exp'
													+'{\\grp'
														+'{\\str{(}}'
														+'{\\exp{\\str{&nbsp;$$base}}{\\str{$$exp1}}}'
														+'{\\str{)}}'
													+'}'
													+'{\\str{$$expSecond1}}'
												+'}'
											+'}'
										+'}'
							),
				answerInstructions: 'All simplified answers must have only positive exponents.'
									+'<br><br>',
				base: '13',
				exp1: '-1 ',
				expSecond1: '5',
				secondExp1: '4',
				ansBase: '13',
				expFirstProduct: '-5 ',
				expDiff: '9',
				expAns: '9',
				solutionAnswer: dataUtils.pre(
								'\\rowgrp'
									+'{\\str{$$answerInstructions}}'
									+'{\\exp'
										+'{\\input{$$ansBase}}'
										+'{\\input{$$expAns}}'
									+'}'
							),
				line1: dataUtils.pre(
								'\\rowgrp'
									+'{\\str{<u>First</u>, we use the exponent rule \"Power raised to a Power\" here. When we have a power raised to another power, we <u>multiply the exponents</u>.}}'	
									+'{\\str{&nbsp;}}'
									+'{\\str{&nbsp;}}'
									+'{\\grp'
										+'{\\exp'
											+'{\\grp'
												+'{\\str{(}}'
												+'{\\exp{\\str{&nbsp;$$base}}{\\str{$$exp1}}}'
												+'{\\str{)}}'
											+'}'
											+'{\\str{$$expSecond1}}'
										+'}'
										+'{\\str{&nbsp; means &nbsp;}}'
										+'{\\str{$$base<sup> $$exp1 * $$expSecond1</sup>}}'
										+'{\\str{&nbsp; or &nbsp;}}'
										+'{\\str{$$base<sup> $$expFirstProduct</sup>}}'
									+'}'
									+'{\\str{&nbsp;}}'
									+'{\\str{&nbsp;}}'
									+'{\\grp'
										+'{\\str{So:}}'
										+'{\\frac'
											+'{\\exp{\\str{&nbsp;$$base}}{\\str{$$secondExp1}}}'
											+'{\\exp'
												+'{\\grp'
													+'{\\str{(}}'
													+'{\\exp{\\str{&nbsp;$$base}}{\\str{$$exp1}}}'
													+'{\\str{)}}'
												+'}'
												+'{\\str{$$expSecond1}}'
											+'}'
										+'}'
										+'{\\str{&nbsp; becomes &nbsp;&nbsp;}}'
										+'{\\frac'
											+'{\\str{$$base<sup> $$secondExp1</sup>}}'
											+'{\\str{$$base<sup> $$expFirstProduct</sup>}}'
										+'}'
									+'}'
									+'{\\str{&nbsp;}}'
									+'{\\str{&nbsp;}}'
									+'{\\str{<u>Second</u>, we use the exponent rule \"Division of Same Bases\" here. When we divide same bases, we <u>subtract the exponents</u>.}}'
									+'{\\str{&nbsp;}}'
									+'{\\grp'
										+'{\\frac'
											+'{\\str{$$base<sup> $$secondExp1</sup>}}'
											+'{\\str{$$base<sup> $$expFirstProduct</sup>}}'
										+'}'
										+'{\\str{&nbsp; = &nbsp;}}'
										+'{\\str{$$base<sup> $$secondExp1 - ($$expFirstProduct )</sup>}}'
										+'{\\str{&nbsp; = &nbsp;}}'
										+'{\\str{$$base<sup> $$expDiff</sup>}}'
									+'}'
								),
				helpAnswer: dataUtils.pre(

								'\\grp'
									+'{\\str{Simplified Answer: &nbsp;}}'
									+'{\\str{$$base<sup> $$expDiff</sup>}}'
							),
				template: 'firstSimplify' 
			 }
			  ,
			 // prob 25
			 {
				problemStatement: dataUtils.pre(
								'\\pan{12}{11}'
									+'{\\rowgrp'
										+'{\\grp'
											+'{\\str{Simplify: &nbsp;}}'
											+'{\\frac'
												+'{\\exp{\\str{&nbsp;$$base}}{\\str{$$secondExp1}}}'
												+'{\\exp'
													+'{\\grp'
														+'{\\str{(}}'
														+'{\\exp{\\str{&nbsp;$$base}}{\\str{$$exp1}}}'
														+'{\\str{)}}'
													+'}'
													+'{\\str{$$expSecond1}}'
												+'}'
											+'}'
										+'}'
							),
				answerInstructions: 'All simplified answers must have only positive exponents.'
									+'<br><br>',
				base: '4',
				exp1: '2',
				expSecond1: '3',
				secondExp1: '6',
				ansBase: '4',
				expFirstProduct: '6 ',
				expDiff: '0',
				expAns: '0',
				solutionAnswer: dataUtils.pre(
								'\\rowgrp'
									+'{\\str{$$answerInstructions}}'
									+'{\\grp'
										+'{\\input{1}}'
									+'}'
							),
				line1: dataUtils.pre(
								'\\rowgrp'
									+'{\\str{<u>First</u>, we use the exponent rule \"Power raised to a Power\" here. When we have a power raised to another power, we <u>multiply the exponents</u>.}}'	
									+'{\\str{&nbsp;}}'
									+'{\\str{&nbsp;}}'
									+'{\\grp'
										+'{\\exp'
											+'{\\grp'
												+'{\\str{(}}'
												+'{\\exp{\\str{&nbsp;$$base}}{\\str{$$exp1}}}'
												+'{\\str{)}}'
											+'}'
											+'{\\str{$$expSecond1}}'
										+'}'
										+'{\\str{&nbsp; means &nbsp;}}'
										+'{\\str{$$base<sup> $$exp1 * $$expSecond1</sup>}}'
										+'{\\str{&nbsp; or &nbsp;}}'
										+'{\\str{$$base<sup> $$expFirstProduct</sup>}}'
									+'}'
									+'{\\str{&nbsp;}}'
									+'{\\str{&nbsp;}}'
									+'{\\grp'
										+'{\\str{So:}}'
										+'{\\frac'
											+'{\\exp{\\str{&nbsp;$$base}}{\\str{$$secondExp1}}}'
											+'{\\exp'
												+'{\\grp'
													+'{\\str{(}}'
													+'{\\exp{\\str{&nbsp;$$base}}{\\str{$$exp1}}}'
													+'{\\str{)}}'
												+'}'
												+'{\\str{$$expSecond1}}'
											+'}'
										+'}'
										+'{\\str{&nbsp; becomes &nbsp;&nbsp;}}'
										+'{\\frac'
											+'{\\str{$$base<sup> $$secondExp1</sup>}}'
											+'{\\str{$$base<sup> $$expFirstProduct</sup>}}'
										+'}'
									+'}'
									+'{\\str{&nbsp;}}'
									+'{\\str{&nbsp;}}'
									+'{\\str{<u>Second</u>, we use the exponent rule \"Division of Same Bases\" here. When we divide same bases, we <u>subtract the exponents</u>.}}'
									+'{\\str{&nbsp;}}'
									+'{\\grp'
										+'{\\frac'
											+'{\\str{$$base<sup> $$secondExp1</sup>}}'
											+'{\\str{$$base<sup> $$expFirstProduct</sup>}}'
										+'}'
										+'{\\str{&nbsp; = &nbsp;}}'
										+'{\\str{$$base<sup> $$secondExp1 - ($$expFirstProduct )</sup>}}'
										+'{\\str{&nbsp; = &nbsp;}}'
										+'{\\str{$$base<sup> $$expDiff</sup>}}'
										+'{\\str{&nbsp; or &nbsp;}}'
										+'{\\str{1}}'
									+'}'
								),
				helpAnswer: dataUtils.pre(

								'\\grp'
									+'{\\str{Simplified Answer: &nbsp;}}'
									+'{\\str{1}}'
							),
				template: 'firstSimplify' 
			 }
			 ,
			 // prob 26
			 {
				problemStatement: dataUtils.pre(
								'\\pan{12}{11}'
									+'{\\rowgrp'
										+'{\\grp'
											+'{\\str{Simplify: &nbsp;}}'
											+'{\\frac'
												+'{\\exp{\\str{&nbsp;$$base}}{\\str{$$secondExp1}}}'
												+'{\\exp'
													+'{\\grp'
														+'{\\str{(}}'
														+'{\\exp{\\str{&nbsp;$$base}}{\\str{$$exp1}}}'
														+'{\\str{)}}'
													+'}'
													+'{\\str{$$expSecond1}}'
												+'}'
											+'}'
										+'}'
							),
				answerInstructions: 'All simplified answers must have only positive exponents.'
									+'<br><br>',
				base: '5',
				exp1: '-1 ',
				expSecond1: '3',
				secondExp1: '-3 ',
				ansBase: '5',
				expFirstProduct: '-3 ',
				expDiff: '0',
				expAns: '0',
				solutionAnswer: dataUtils.pre(
								'\\rowgrp'
									+'{\\str{$$answerInstructions}}'
									+'{\\grp'
										+'{\\input{1}}'
									+'}'
							),
				line1: dataUtils.pre(
								'\\rowgrp'
									+'{\\str{<u>First</u>, we use the exponent rule \"Power raised to a Power\" here. When we have a power raised to another power, we <u>multiply the exponents</u>.}}'	
									+'{\\str{&nbsp;}}'
									+'{\\str{&nbsp;}}'
									+'{\\grp'
										+'{\\exp'
											+'{\\grp'
												+'{\\str{(}}'
												+'{\\exp{\\str{&nbsp;$$base}}{\\str{$$exp1}}}'
												+'{\\str{)}}'
											+'}'
											+'{\\str{$$expSecond1}}'
										+'}'
										+'{\\str{&nbsp; means &nbsp;}}'
										+'{\\str{$$base<sup> $$exp1 * $$expSecond1</sup>}}'
										+'{\\str{&nbsp; or &nbsp;}}'
										+'{\\str{$$base<sup> $$expFirstProduct</sup>}}'
									+'}'
									+'{\\str{&nbsp;}}'
									+'{\\str{&nbsp;}}'
									+'{\\grp'
										+'{\\str{So:}}'
										+'{\\frac'
											+'{\\exp{\\str{&nbsp;$$base}}{\\str{$$secondExp1}}}'
											+'{\\exp'
												+'{\\grp'
													+'{\\str{(}}'
													+'{\\exp{\\str{&nbsp;$$base}}{\\str{$$exp1}}}'
													+'{\\str{)}}'
												+'}'
												+'{\\str{$$expSecond1}}'
											+'}'
										+'}'
										+'{\\str{&nbsp; becomes &nbsp;&nbsp;}}'
										+'{\\frac'
											+'{\\str{$$base<sup> $$secondExp1</sup>}}'
											+'{\\str{$$base<sup> $$expFirstProduct</sup>}}'
										+'}'
									+'}'
									+'{\\str{&nbsp;}}'
									+'{\\str{&nbsp;}}'
									+'{\\str{<u>Second</u>, we use the exponent rule \"Division of Same Bases\" here. When we divide same bases, we <u>subtract the exponents</u>.}}'
									+'{\\str{&nbsp;}}'
									+'{\\grp'
										+'{\\frac'
											+'{\\str{$$base<sup> $$secondExp1</sup>}}'
											+'{\\str{$$base<sup> $$expFirstProduct</sup>}}'
										+'}'
										+'{\\str{&nbsp; = &nbsp;}}'
										+'{\\str{$$base<sup> $$secondExp1 - ($$expFirstProduct )</sup>}}'
										+'{\\str{&nbsp; = &nbsp;}}'
										+'{\\str{$$base<sup> $$expDiff</sup>}}'
										+'{\\str{&nbsp; or &nbsp;}}'
										+'{\\str{1}}'
									+'}'
								),
				helpAnswer: dataUtils.pre(

								'\\grp'
									+'{\\str{Simplified Answer: &nbsp;}}'
									+'{\\str{1}}'
							),
				template: 'firstSimplify' 
			 } 
			 ,
			 // prob 27
			 {
				problemStatement: dataUtils.pre(
								'\\pan{12}{11}'
									+'{\\rowgrp'
										+'{\\grp'
											+'{\\str{Simplify: &nbsp;}}'
											+'{\\frac'
												+'{\\exp{\\str{&nbsp;$$base2}}{\\str{$$secondExp1}}}'
												+'{\\exp'
													+'{\\grp'
														+'{\\str{(}}'
														+'{\\exp{\\str{&nbsp;$$base1}}{\\str{$$exp1}}}'
														+'{\\str{)}}'
													+'}'
													+'{\\str{$$expSecond1}}'
												+'}'
											+'}'
										+'}'
							),
				wellProblemStatement: dataUtils.pre(
									'\\css'
										+'{\\rowgrp'
											+'{\\html{&nbsp;}}'
											+'{\\grp'
												+'{\\frac'
													+'{\\exp{\\str{&nbsp;$$base2}}{\\str{$$secondExp1}}}'
													+'{\\exp'
														+'{\\grp'
															+'{\\str{(}}'
															+'{\\exp{\\str{&nbsp;$$base1}}{\\str{$$exp1}}}'
															+'{\\str{)}}'
														+'}'
														+'{\\str{$$expSecond1}}'
													+'}'
												+'}'
												+'{\\str{&nbsp; = &nbsp;}}'
												+'{\\frac'
													+'{\\str{$$base2<sup> $$secondExp1</sup>}}'
													+'{\\str{$$base1<sup> $$expFirstProduct</sup>}}'
												+'}'
											+'}'
											+'{\\html{&nbsp;}}'
											+'{\\css'
												+'{\\grp'
													+'{\\str{Evaluate the simplified expression<span class=large>:</span>}}'
												+'}'
												+'{alert alert-info}'
											+'}'
											+'{\\frac'
												+'{\\input{$$numAns}}'
												+'{\\input{$$denAns}}'
											+'}'
										+'}{well}'
							),
				answerInstructions: 'All simplified answers must have only positive exponents.'
									+'<br><br>',
				base1: '2',
				exp1: '2',
				expSecond1: '2',
				base2: '7',
				secondExp1: '3',
				ansBase: '2',
				expFirstProduct: '4',
				numAns: '343',
				denAns: '16',
				expAns: '4',
				solutionAnswer: dataUtils.pre(
								'\\rowgrp'
									+'{\\str{$$answerInstructions}}'
									+'{\\frac'
										+'{\\exp{\\input{$$base2}}{\\input{$$secondExp1}}}'
										+'{\\exp{\\input{$$base1}}{\\input{$$expFirstProduct}}}'
									+'}'
							),
				line1: dataUtils.pre(
								'\\rowgrp'
									+'{\\str{<u>First</u>, we use the exponent rule \"Power raised to a Power\" here. When we have a power raised to another power, we <u>multiply the exponents</u>.}}'	
									+'{\\str{&nbsp;}}'
									+'{\\str{&nbsp;}}'
									+'{\\grp'
										+'{\\exp'
											+'{\\grp'
												+'{\\str{(}}'
												+'{\\exp{\\str{&nbsp;$$base1}}{\\str{$$exp1}}}'
												+'{\\str{)}}'
											+'}'
											+'{\\str{$$expSecond1}}'
										+'}'
										+'{\\str{&nbsp; means &nbsp;}}'
										+'{\\str{$$base1<sup> $$exp1 * $$expSecond1</sup>}}'
										+'{\\str{&nbsp; or &nbsp;}}'
										+'{\\str{$$base1<sup> $$expFirstProduct</sup>}}'
									+'}'
									+'{\\str{&nbsp;}}'
									+'{\\str{&nbsp;}}'
									+'{\\grp'
										+'{\\str{So:}}'
										+'{\\frac'
											+'{\\exp{\\str{&nbsp;$$base2}}{\\str{$$secondExp1}}}'
											+'{\\exp'
												+'{\\grp'
													+'{\\str{(}}'
													+'{\\exp{\\str{&nbsp;$$base1}}{\\str{$$exp1}}}'
													+'{\\str{)}}'
												+'}'
												+'{\\str{$$expSecond1}}'
											+'}'
										+'}'
										+'{\\str{&nbsp; becomes &nbsp;&nbsp;}}'
										+'{\\frac'
											+'{\\str{$$base2<sup> $$secondExp1</sup>}}'
											+'{\\str{$$base1<sup> $$expFirstProduct</sup>}}'
										+'}'
									+'}'
									+'{\\str{&nbsp;}}'
									+'{\\str{&nbsp;}}'
									+'{\\str{We still have division, but <u>there are no same bases</u>. There are no other rules of exponents to use to simplify this expression any more. We are done.}}'
								),
				helpAnswer: dataUtils.pre(

								'\\grp'
									+'{\\str{Simplified Answer: &nbsp;}}'
									+'{\\frac'
										+'{\\str{$$base2<sup> $$secondExp1</sup>}}'
										+'{\\str{$$base1<sup> $$expFirstProduct</sup>}}'
									+'}'
							),
				template: 'evaluateAfterSimplify' 
			 }
			  ,
			 // prob 28
			 {
				problemStatement: dataUtils.pre(
								'\\pan{12}{11}'
									+'{\\rowgrp'
										+'{\\grp'
											+'{\\str{Simplify: &nbsp;}}'
											+'{\\frac'
												+'{\\exp{\\str{&nbsp;$$base2}}{\\str{$$secondExp1}}}'
												+'{\\exp'
													+'{\\grp'
														+'{\\str{(}}'
														+'{\\exp{\\str{&nbsp;$$base1}}{\\str{$$exp1}}}'
														+'{\\str{)}}'
													+'}'
													+'{\\str{$$expSecond1}}'
												+'}'
											+'}'
										+'}'
							),
				wellProblemStatement: dataUtils.pre(
									'\\css'
										+'{\\rowgrp'
											+'{\\html{&nbsp;}}'
											+'{\\grp'
												+'{\\frac'
													+'{\\exp{\\str{&nbsp;$$base2}}{\\str{$$secondExp1}}}'
													+'{\\exp'
														+'{\\grp'
															+'{\\str{(}}'
															+'{\\exp{\\str{&nbsp;$$base1}}{\\str{$$exp1}}}'
															+'{\\str{)}}'
														+'}'
														+'{\\str{$$expSecond1}}'
													+'}'
												+'}'
												+'{\\str{&nbsp; = &nbsp;}}'
												+'{\\frac'
													+'{\\str{$$base2<sup> $$secondExp1</sup>}}'
													+'{\\str{$$base1<sup> $$expFirstProduct</sup>}}'
												+'}'
											+'}'
											+'{\\html{&nbsp;}}'
											+'{\\css'
												+'{\\grp'
													+'{\\str{Evaluate the simplified expression<span class=large>:</span>}}'
												+'}'
												+'{alert alert-info}'
											+'}'
											+'{\\frac'
												+'{\\input{$$numAns}}'
												+'{\\input{$$denAns}}'
											+'}'
										+'}{well}'
							),
				answerInstructions: 'All simplified answers must have only positive exponents.'
									+'<br><br>',
				base1: '3',
				exp1: '-2 ',
				expSecond1: '-1 ',
				base2: '4',
				secondExp1: '2',
				expFirstProduct: '2',
				numAns: '16',
				denAns: '9',
				solutionAnswer: dataUtils.pre(
								'\\rowgrp'
									+'{\\str{$$answerInstructions}}'
									+'{\\frac'
										+'{\\exp{\\input{$$base2}}{\\input{$$secondExp1}}}'
										+'{\\exp{\\input{$$base1}}{\\input{$$expFirstProduct}}}'
									+'}'
							),
				line1: dataUtils.pre(
								'\\rowgrp'
									+'{\\str{<u>First</u>, we use the exponent rule \"Power raised to a Power\" here. When we have a power raised to another power, we <u>multiply the exponents</u>.}}'	
									+'{\\str{&nbsp;}}'
									+'{\\str{&nbsp;}}'
									+'{\\grp'
										+'{\\exp'
											+'{\\grp'
												+'{\\str{(}}'
												+'{\\exp{\\str{&nbsp;$$base1}}{\\str{$$exp1}}}'
												+'{\\str{)}}'
											+'}'
											+'{\\str{$$expSecond1}}'
										+'}'
										+'{\\str{&nbsp; means &nbsp;}}'
										+'{\\str{$$base1<sup> $$exp1 * ($$expSecond1 )</sup>}}'
										+'{\\str{&nbsp; or &nbsp;}}'
										+'{\\str{$$base1<sup> $$expFirstProduct</sup>}}'
									+'}'
									+'{\\str{&nbsp;}}'
									+'{\\str{&nbsp;}}'
									+'{\\grp'
										+'{\\str{So:}}'
										+'{\\frac'
											+'{\\exp{\\str{&nbsp;$$base2}}{\\str{$$secondExp1}}}'
											+'{\\exp'
												+'{\\grp'
													+'{\\str{(}}'
													+'{\\exp{\\str{&nbsp;$$base1}}{\\str{$$exp1}}}'
													+'{\\str{)}}'
												+'}'
												+'{\\str{$$expSecond1}}'
											+'}'
										+'}'
										+'{\\str{&nbsp; becomes &nbsp;&nbsp;}}'
										+'{\\frac'
											+'{\\str{$$base2<sup> $$secondExp1</sup>}}'
											+'{\\str{$$base1<sup> $$expFirstProduct</sup>}}'
										+'}'
									+'}'
									+'{\\str{&nbsp;}}'
									+'{\\str{&nbsp;}}'
									+'{\\str{We still have division, but <u>there are no same bases</u>. There are no other rules of exponents to use to simplify this expression any more. We are done.}}'
								),
				helpAnswer: dataUtils.pre(

								'\\grp'
									+'{\\str{Simplified Answer: &nbsp;}}'
									+'{\\frac'
										+'{\\str{$$base2<sup> $$secondExp1</sup>}}'
										+'{\\str{$$base1<sup> $$expFirstProduct</sup>}}'
									+'}'
							),
				template: 'evaluateAfterSimplify' 
			 }
			 ,
			 // prob 29
			 {
				problemStatement: dataUtils.pre(
								'\\pan{12}{11}'
									+'{\\rowgrp'
										+'{\\grp'
											+'{\\str{Simplify: &nbsp;}}'
											+'{\\exp'
												+'{\\grp'
													+'{\\str{(}}'
													+'{\\exp{\\str{&nbsp;$$base1}}{\\str{$$exp1}}}'
													+'{\\str{)}}'
												+'}'
												+'{\\str{$$expSecond1}}'
											+'}'
											+'{\\str{/}}'
											+'{\\exp{\\str{&nbsp;$$base2}}{\\str{$$secondExp1}}}'
										+'}'
							),
				answerInstructions: 'All simplified answers must have only positive exponents.'
									+'<br><br>',
				base1: '5',
				exp1: '-2 ',
				expSecond1: '3',
				base2: '5',
				secondExp1: '-2 ',
				expFirstProduct: '-6 ',
				expFirstDiff: '-4 ',
				numAns: '1',
				denAns: '5',
				denExp: '4',
				solutionAnswer: dataUtils.pre(
								'\\rowgrp'
									+'{\\str{$$answerInstructions}}'
									+'{\\frac'
										+'{\\input{1}}'
										+'{\\exp{\\input{$$base1}}{\\input{$$denExp}}}'
									+'}'
							),
				line1: dataUtils.pre(
								'\\rowgrp'
									+'{\\str{<u>First</u>, we use the exponent rule \"Power raised to a Power\" here. When we have a power raised to another power, we <u>multiply the exponents</u>.}}'	
									+'{\\str{&nbsp;}}'
									+'{\\str{&nbsp;}}'
									+'{\\grp'
										+'{\\exp'
											+'{\\grp'
												+'{\\str{(}}'
												+'{\\exp{\\str{&nbsp;$$base1}}{\\str{$$exp1}}}'
												+'{\\str{)}}'
											+'}'
											+'{\\str{$$expSecond1}}'
										+'}'
										+'{\\str{&nbsp; means &nbsp;}}'
										+'{\\str{$$base1<sup> $$exp1 * ($$expSecond1 )</sup>}}'
										+'{\\str{&nbsp; or &nbsp;}}'
										+'{\\str{$$base1<sup> $$expFirstProduct</sup>}}'
									+'}'
									+'{\\str{&nbsp;}}'
									+'{\\str{&nbsp;}}'
									+'{\\grp'
										+'{\\str{So:}}'
										+'{\\exp'
												+'{\\grp'
													+'{\\str{(}}'
													+'{\\exp{\\str{&nbsp;$$base1}}{\\str{$$exp1}}}'
													+'{\\str{)}}'
												+'}'
												+'{\\str{$$expSecond1}}'
											+'}'
											+'{\\str{/}}'
											+'{\\exp{\\str{&nbsp;$$base2}}{\\str{$$secondExp1}}}'
										+'{\\str{&nbsp; becomes &nbsp;&nbsp;}}'
										+'{\\str{$$base1<sup> $$expFirstProduct</sup>}}'
										+'{\\str{/}}'
										+'{\\str{$$base1<sup> $$secondExp1</sup>}}'
									+'}'
									+'{\\str{&nbsp;}}'
									+'{\\str{&nbsp;}}'
									+'{\\str{<u>Second</u>, we use the exponent rule \"Division of Same Bases\" here. When we divide same bases, we <u>subtract the exponents</u>.}}'
									+'{\\str{&nbsp;}}'
									+'{\\grp'
										+'{\\str{$$base1<sup> $$expFirstProduct</sup>}}'
										+'{\\str{/}}'
										+'{\\str{$$base1<sup> $$secondExp1</sup>}}'
										+'{\\str{&nbsp; means &nbsp;}}'
										+'{\\str{$$base1<sup> $$expFirstProduct - ($$secondExp1 )</sup>}}'
										+'{\\str{&nbsp; or &nbsp;}}'
										+'{\\str{$$base1<sup> $$expFirstDiff</sup>}}'
									+'}'
									+'{\\str{&nbsp;}}'
									+'{\\str{<u>Third</u>, we still need to \"get rid of the negative exponent\" by taking the <u>reciprocal of the base</u> and changing the sign of the exponent.}}'
									+'{\\str{&nbsp;}}'
									+'{\\grp'
										+'{\\str{$$base1<sup> $$expFirstDiff</sup>}}'
										+'{\\str{&nbsp; = &nbsp;}}'
										+'{\\frac'
											+'{\\str{$$numAns}}'
											+'{\\str{$$denAns<sup> $$denExp</sup>}}'
										+'}'
									+'}'
								),
				helpAnswer: dataUtils.pre(

								'\\grp'
									+'{\\str{Simplified Answer: &nbsp;}}'
									+'{\\frac'
										+'{\\str{$$numAns}}'
										+'{\\str{$$denAns<sup> $$denExp</sup>}}'
									+'}'
							),
				template: 'firstSimplify' 
			 }
			 ,
			 // prob 30
			 {
				problemStatement: dataUtils.pre(
								'\\pan{12}{11}'
									+'{\\rowgrp'
										+'{\\grp'
											+'{\\str{Simplify: &nbsp;}}'
											+'{\\exp'
												+'{\\grp'
													+'{\\str{(}}'
													+'{\\exp{\\str{&nbsp;$$base1}}{\\str{$$exp1}}}'
													+'{\\str{)}}'
												+'}'
												+'{\\str{$$expSecond1}}'
											+'}'
											+'{\\str{/}}'
											+'{\\exp{\\str{&nbsp;$$base2}}{\\str{$$secondExp1}}}'
										+'}'
							),
				answerInstructions: 'All simplified answers must have only positive exponents.'
									+'<br><br>',
				base1: '2',
				exp1: '-3 ',
				expSecond1: '3',
				base2: '2',
				secondExp1: '-2 ',
				expFirstProduct: '-9 ',
				expFirstDiff: '-7 ',
				numAns: '1',
				denAns: '2',
				denExp: '7',
				solutionAnswer: dataUtils.pre(
								'\\rowgrp'
									+'{\\str{$$answerInstructions}}'
									+'{\\frac'
										+'{\\input{1}}'
										+'{\\exp{\\input{$$base1}}{\\input{$$denExp}}}'
									+'}'
							),
				line1: dataUtils.pre(
								'\\rowgrp'
									+'{\\str{<u>First</u>, we use the exponent rule \"Power raised to a Power\" here. When we have a power raised to another power, we <u>multiply the exponents</u>.}}'	
									+'{\\str{&nbsp;}}'
									+'{\\str{&nbsp;}}'
									+'{\\grp'
										+'{\\exp'
											+'{\\grp'
												+'{\\str{(}}'
												+'{\\exp{\\str{&nbsp;$$base1}}{\\str{$$exp1}}}'
												+'{\\str{)}}'
											+'}'
											+'{\\str{$$expSecond1}}'
										+'}'
										+'{\\str{&nbsp; means &nbsp;}}'
										+'{\\str{$$base1<sup> $$exp1 * $$expSecond1</sup>}}'
										+'{\\str{&nbsp; or &nbsp;}}'
										+'{\\str{$$base1<sup> $$expFirstProduct</sup>}}'
									+'}'
									+'{\\str{&nbsp;}}'
									+'{\\str{&nbsp;}}'
									+'{\\grp'
										+'{\\str{So:}}'
										+'{\\exp'
												+'{\\grp'
													+'{\\str{(}}'
													+'{\\exp{\\str{&nbsp;$$base1}}{\\str{$$exp1}}}'
													+'{\\str{)}}'
												+'}'
												+'{\\str{$$expSecond1}}'
											+'}'
											+'{\\str{/}}'
											+'{\\exp{\\str{&nbsp;$$base2}}{\\str{$$secondExp1}}}'
										+'{\\str{&nbsp; becomes &nbsp;&nbsp;}}'
										+'{\\str{$$base1<sup> $$expFirstProduct</sup>}}'
										+'{\\str{/}}'
										+'{\\str{$$base1<sup> $$secondExp1</sup>}}'
									+'}'
									+'{\\str{&nbsp;}}'
									+'{\\str{&nbsp;}}'
									+'{\\str{<u>Second</u>, we use the exponent rule \"Division of Same Bases\" here. When we divide same bases, we <u>subtract the exponents</u>.}}'
									+'{\\str{&nbsp;}}'
									+'{\\grp'
										+'{\\str{$$base1<sup> $$expFirstProduct</sup>}}'
										+'{\\str{/}}'
										+'{\\str{$$base1<sup> $$secondExp1</sup>}}'
										+'{\\str{&nbsp; means &nbsp;}}'
										+'{\\str{$$base1<sup> $$expFirstProduct - ($$secondExp1 )</sup>}}'
										+'{\\str{&nbsp; or &nbsp;}}'
										+'{\\str{$$base1<sup> $$expFirstDiff</sup>}}'
									+'}'
									+'{\\str{&nbsp;}}'
									+'{\\str{<u>Third</u>, we still need to \"get rid of the negative exponent\" by taking the <u>reciprocal of the base</u> and changing the sign of the exponent.}}'
									+'{\\str{&nbsp;}}'
									+'{\\grp'
										+'{\\str{$$base1<sup> $$expFirstDiff</sup>}}'
										+'{\\str{&nbsp; = &nbsp;}}'
										+'{\\frac'
											+'{\\str{$$numAns}}'
											+'{\\str{$$denAns<sup> $$denExp</sup>}}'
										+'}'
									+'}'
								),
				helpAnswer: dataUtils.pre(

								'\\grp'
									+'{\\str{Simplified Answer: &nbsp;}}'
									+'{\\frac'
										+'{\\str{$$numAns}}'
										+'{\\str{$$denAns<sup> $$denExp</sup>}}'
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
										+'{\\grp'
											+'{\\str{Simplify: &nbsp;}}'
											+'{\\frac'
												+'{\\exp{\\str{&nbsp;$$base}}{\\str{$$secondExp1}}}'
												+'{\\exp'
													+'{\\grp'
														+'{\\str{(}}'
														+'{\\exp{\\str{&nbsp;$$base}}{\\str{$$exp1}}}'
														+'{\\str{)}}'
													+'}'
													+'{\\str{$$expSecond1}}'
												+'}'
											+'}'
										+'}'
							),
				answerInstructions: 'All simplified answers must have only positive exponents.'
									+'<br><br>',
				base: '(-7 )',
				exp1: '-5 ',
				expSecond1: '-1 ',
				secondExp1: '2',
				ansBase: '(-7)',
				expFirstProduct: '5',
				expDiff: '-3',
				expAns: '3',
				solutionAnswer: dataUtils.pre(
								'\\rowgrp'
									+'{\\str{$$answerInstructions}}'
									+'{\\frac'
										+'{\\input{1}}'
										+'{\\exp{\\input{$$ansBase}}{\\input{$$expAns}}}'
									+'}'
							),
				line1: dataUtils.pre(
								'\\rowgrp'
									+'{\\str{<u>First</u>, we use the exponent rule \"Power raised to a Power\" here. When we have a power raised to another power, we <u>multiply the exponents</u>.}}'	
									+'{\\str{&nbsp;}}'
									+'{\\str{&nbsp;}}'
									+'{\\grp'
										+'{\\exp'
											+'{\\grp'
												+'{\\str{(}}'
												+'{\\exp{\\str{&nbsp;$$base}}{\\str{$$exp1}}}'
												+'{\\str{)}}'
											+'}'
											+'{\\str{$$expSecond1}}'
										+'}'
										+'{\\str{&nbsp; means &nbsp;}}'
										+'{\\str{$$base<sup> $$exp1 * $$expSecond1</sup>}}'
										+'{\\str{&nbsp; or &nbsp;}}'
										+'{\\str{$$base<sup> $$expFirstProduct</sup>}}'
									+'}'
									+'{\\str{&nbsp;}}'
									+'{\\str{&nbsp;}}'
									+'{\\grp'
										+'{\\str{So:}}'
										+'{\\frac'
											+'{\\exp{\\str{&nbsp;$$base}}{\\str{$$secondExp1}}}'
											+'{\\exp'
												+'{\\grp'
													+'{\\str{(}}'
													+'{\\exp{\\str{&nbsp;$$base}}{\\str{$$exp1}}}'
													+'{\\str{)}}'
												+'}'
												+'{\\str{$$expSecond1}}'
											+'}'
										+'}'
										+'{\\str{&nbsp; becomes &nbsp;&nbsp;}}'
										+'{\\frac'
											+'{\\str{$$base<sup> $$secondExp1</sup>}}'
											+'{\\str{$$base<sup> $$expFirstProduct</sup>}}'
										+'}'
									+'}'
									+'{\\str{&nbsp;}}'
									+'{\\str{&nbsp;}}'
									+'{\\str{<u>Second</u>, we use the exponent rule \"Division of Same Bases\" here. When we divide same bases, we <u>subtract the exponents</u>.}}'
									+'{\\str{&nbsp;}}'
									+'{\\grp'
										+'{\\frac'
											+'{\\str{$$base<sup> $$secondExp1</sup>}}'
											+'{\\str{$$base<sup> $$expFirstProduct</sup>}}'
										+'}'
										+'{\\str{&nbsp; = &nbsp;}}'
										+'{\\str{$$base<sup> $$secondExp1 - $$expFirstProduct</sup>}}'
										+'{\\str{&nbsp; = &nbsp;}}'
										+'{\\str{$$base<sup> $$expDiff</sup>}}'
									+'}'
									+'{\\str{&nbsp;}}'
									+'{\\str{<u>Third</u>, we still need to \"get rid of the negative exponent\" by taking the <u>reciprocal of the base</u> and changing the sign of the exponent.}}'
									+'{\\str{&nbsp;}}'
									+'{\\grp'
										+'{\\str{$$base<sup> $$expDiff</sup>}}'
										+'{\\str{&nbsp; = &nbsp;}}'
										+'{\\frac'
											+'{\\str{1}}'
											+'{\\str{$$base<sup> $$expAns</sup>}}'
										+'}'
									+'}'
								),
				helpAnswer: dataUtils.pre(
								'\\grp'
									+'{\\str{Simplified Answer: &nbsp;}}'
									+'{\\frac'
										+'{\\str{1}}'
										+'{\\str{$$base<sup> $$expAns</sup>}}'
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
										+'{\\grp'
											+'{\\str{Simplify: &nbsp;}}'
											+'{\\frac'
												+'{\\exp{\\str{&nbsp;$$base}}{\\str{$$secondExp1}}}'
												+'{\\exp'
													+'{\\grp'
														+'{\\str{(}}'
														+'{\\exp{\\str{&nbsp;$$base}}{\\str{$$exp1}}}'
														+'{\\str{)}}'
													+'}'
													+'{\\str{$$expSecond1}}'
												+'}'
											+'}'
										+'}'
							),
				answerInstructions: 'All simplified answers must have only positive exponents.'
									+'<br><br>',
				base: '(-11 )',
				exp1: '-2 ',
				expSecond1: '-1 ',
				secondExp1: '-1 ',
				ansBase: '(-11)',
				expFirstProduct: '2',
				expDiff: '-3 ',
				expAns: '3',
				solutionAnswer: dataUtils.pre(
								'\\rowgrp'
									+'{\\str{$$answerInstructions}}'
									+'{\\frac'
										+'{\\input{1}}'
										+'{\\exp{\\input{$$ansBase}}{\\input{$$expAns}}}'
									+'}'
							),
				line1: dataUtils.pre(
								'\\rowgrp'
									+'{\\str{<u>First</u>, we use the exponent rule \"Power raised to a Power\" here. When we have a power raised to another power, we <u>multiply the exponents</u>.}}'	
									+'{\\str{&nbsp;}}'
									+'{\\str{&nbsp;}}'
									+'{\\grp'
										+'{\\exp'
											+'{\\grp'
												+'{\\str{(}}'
												+'{\\exp{\\str{&nbsp;$$base}}{\\str{$$exp1}}}'
												+'{\\str{)}}'
											+'}'
											+'{\\str{$$expSecond1}}'
										+'}'
										+'{\\str{&nbsp; means &nbsp;}}'
										+'{\\str{$$base<sup> $$exp1 * $$expSecond1</sup>}}'
										+'{\\str{&nbsp; or &nbsp;}}'
										+'{\\str{$$base<sup> $$expFirstProduct</sup>}}'
									+'}'
									+'{\\str{&nbsp;}}'
									+'{\\str{&nbsp;}}'
									+'{\\grp'
										+'{\\str{So:}}'
										+'{\\frac'
											+'{\\exp{\\str{&nbsp;$$base}}{\\str{$$secondExp1}}}'
											+'{\\exp'
												+'{\\grp'
													+'{\\str{(}}'
													+'{\\exp{\\str{&nbsp;$$base}}{\\str{$$exp1}}}'
													+'{\\str{)}}'
												+'}'
												+'{\\str{$$expSecond1}}'
											+'}'
										+'}'
										+'{\\str{&nbsp; becomes &nbsp;&nbsp;}}'
										+'{\\frac'
											+'{\\str{$$base<sup> $$secondExp1</sup>}}'
											+'{\\str{$$base<sup> $$expFirstProduct</sup>}}'
										+'}'
									+'}'
									+'{\\str{&nbsp;}}'
									+'{\\str{&nbsp;}}'
									+'{\\str{<u>Second</u>, we use the exponent rule \"Division of Same Bases\" here. When we divide same bases, we <u>subtract the exponents</u>.}}'
									+'{\\str{&nbsp;}}'
									+'{\\grp'
										+'{\\frac'
											+'{\\str{$$base<sup> $$secondExp1</sup>}}'
											+'{\\str{$$base<sup> $$expFirstProduct</sup>}}'
										+'}'
										+'{\\str{&nbsp; = &nbsp;}}'
										+'{\\str{$$base<sup> $$secondExp1 - $$expFirstProduct</sup>}}'
										+'{\\str{&nbsp; = &nbsp;}}'
										+'{\\str{$$base<sup> $$expDiff</sup>}}'
									+'}'
									+'{\\str{&nbsp;}}'
									+'{\\str{<u>Third</u>, we still need to \"get rid of the negative exponent\" by taking the <u>reciprocal of the base</u> and changing the sign of the exponent.}}'
									+'{\\str{&nbsp;}}'
									+'{\\grp'
										+'{\\str{$$base<sup> $$expDiff</sup>}}'
										+'{\\str{&nbsp; = &nbsp;}}'
										+'{\\frac'
											+'{\\str{1}}'
											+'{\\str{$$base<sup> $$expAns</sup>}}'
										+'}'
									+'}'
								),
				helpAnswer: dataUtils.pre(
								'\\grp'
									+'{\\str{Simplified Answer: &nbsp;}}'
									+'{\\frac'
										+'{\\str{1}}'
										+'{\\str{$$base<sup> $$expAns</sup>}}'
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
										+'{\\grp'
											+'{\\str{Simplify: &nbsp;}}'
											+'{\\frac'
												+'{\\exp'
													+'{\\grp'
														+'{\\str{(}}'
														+'{\\exp{\\str{&nbsp;$$base}}{\\str{$$exp1}}}'
														+'{\\str{)}}'
													+'}'
													+'{\\str{$$expSecond1}}'
												+'}'
												+'{\\exp'
													+'{\\grp'
														+'{\\str{(}}'
														+'{\\exp{\\str{&nbsp;$$base}}{\\str{$$exp2}}}'
														+'{\\str{)}}'
													+'}'
													+'{\\str{$$expSecond2}}'
												+'}'
											+'}'
										+'}'
							),
				wellProblemStatement: dataUtils.pre(
									'\\css'
										+'{\\rowgrp'
											+'{\\html{&nbsp;}}'
											+'{\\grp'
												+'{\\frac'
													+'{\\exp'
														+'{\\grp'
															+'{\\str{(}}'
															+'{\\exp{\\str{&nbsp;$$base}}{\\str{$$exp1}}}'
															+'{\\str{)}}'
														+'}'
														+'{\\str{$$expSecond1}}'
													+'}'
													+'{\\exp'
														+'{\\grp'
															+'{\\str{(}}'
															+'{\\exp{\\str{&nbsp;$$base}}{\\str{$$exp2}}}'
															+'{\\str{)}}'
														+'}'
														+'{\\str{$$expSecond2}}'
													+'}'
												+'}'
												+'{\\str{&nbsp; = &nbsp;}}'
												+'{\\str{$$base<sup> $$ansExp</sup>}}'
											+'}'
											+'{\\html{&nbsp;}}'
											+'{\\css'
												+'{\\grp'
													+'{\\str{Evaluate the simplified expression<span class=large>:</span>}}'
												+'}'
												+'{alert alert-info}'
											+'}'
											+'{\\grp'
												+'{\\input{$$finalAns}}'
											+'}'
										+'}{well}'
							),
				answerInstructions: 'All simplified answers must have only positive exponents.'
									+'<br><br>',
				base: '2',
				exp1: '4',
				expSecond1: '3',
				exp2: '2',
				expSecond2: '5',
				expFirstProduct: '12',
				expSecondProduct: '10',
				ansBase: '2',
				ansExp: '2',
				finalAns: '4',
				solutionAnswer: dataUtils.pre(
								'\\rowgrp'
									+'{\\str{$$answerInstructions}}'
									+'{\\exp{\\input{$$ansBase}}{\\input{$$ansExp}}}'
							),
				line1: dataUtils.pre(
								'\\rowgrp'
									+'{\\str{<u>First</u>, we use the exponent rule \"Power raised to a Power\" here. When we have a power raised to another power, we <u>multiply the exponents</u>.}}'
									+'{\\str{&nbsp;}}'
									+'{\\str{Here we use the \"power to a power\" in both the numerator and the denominator.}}'
									+'{\\str{&nbsp;}}'
									+'{\\str{&nbsp;}}'
									+'{\\grp'
										+'{\\str{In the numerator: &nbsp;&nbsp;}}'
										+'{\\exp'
											+'{\\grp'
												+'{\\str{(}}'
												+'{\\exp{\\str{&nbsp;$$base}}{\\str{$$exp1}}}'
												+'{\\str{)}}'
											+'}'
											+'{\\str{$$expSecond1}}'
										+'}'
										+'{\\str{&nbsp; means &nbsp;}}'
										+'{\\str{$$base<sup> $$exp1 * $$expSecond1</sup>}}'
										+'{\\str{&nbsp; or &nbsp;}}'
										+'{\\str{$$base<sup> $$expFirstProduct</sup>}}'
									+'}'
									+'{\\str{&nbsp;}}'
									+'{\\str{&nbsp;}}'
									+'{\\grp'
										+'{\\str{In the denominator: &nbsp;&nbsp;}}'
										+'{\\exp'
											+'{\\grp'
												+'{\\str{(}}'
												+'{\\exp{\\str{&nbsp;$$base}}{\\str{$$exp2}}}'
												+'{\\str{)}}'
											+'}'
											+'{\\str{$$expSecond2}}'
										+'}'
										+'{\\str{&nbsp; means &nbsp;}}'
										+'{\\str{$$base<sup> $$exp2 * $$expSecond2</sup>}}'
										+'{\\str{&nbsp; or &nbsp;}}'
										+'{\\str{$$base<sup> $$expSecondProduct</sup>}}'
									+'}'
									+'{\\str{&nbsp;}}'
									+'{\\str{&nbsp;}}'
									+'{\\grp'
										+'{\\str{So:}}'
										+'{\\frac'
												+'{\\exp'
													+'{\\grp'
														+'{\\str{(}}'
														+'{\\exp{\\str{&nbsp;$$base}}{\\str{$$exp1}}}'
														+'{\\str{)}}'
													+'}'
													+'{\\str{$$expSecond1}}'
												+'}'
												+'{\\exp'
													+'{\\grp'
														+'{\\str{(}}'
														+'{\\exp{\\str{&nbsp;$$base}}{\\str{$$exp2}}}'
														+'{\\str{)}}'
													+'}'
													+'{\\str{$$expSecond2}}'
												+'}'
											+'}'
										+'{\\str{&nbsp; becomes &nbsp;&nbsp;}}'
										+'{\\frac'
											+'{\\str{$$base<sup> $$expFirstProduct</sup>}}'
											+'{\\str{$$base<sup> $$expSecondProduct</sup>}}'
										+'}'
									+'}'
									+'{\\str{&nbsp;}}'
									+'{\\str{&nbsp;}}'
									+'{\\str{<u>Second</u>, we use the exponent rule \"Division of Same Bases\" here. When we divide same bases, we <u>subtract the exponents</u>.}}'
									+'{\\str{&nbsp;}}'
									+'{\\grp'
										+'{\\frac'
											+'{\\str{$$base<sup> $$expFirstProduct</sup>}}'
											+'{\\str{$$base<sup> $$expSecondProduct</sup>}}'
										+'}'
										+'{\\str{&nbsp; means &nbsp;}}'
										+'{\\str{$$base<sup> $$expFirstProduct - $$expSecondProduct</sup>}}'
										+'{\\str{&nbsp; or &nbsp;}}'
										+'{\\str{$$base<sup> $$ansExp</sup>}}'
									+'}'
								),
				helpAnswer: dataUtils.pre(

								'\\grp'
									+'{\\str{Simplified Answer: &nbsp;}}'
									+'{\\str{$$base<sup> $$ansExp</sup>}}'
							),
				template: 'evaluateAfterSimplify' 
			 }
			 ,
			 // prob 34
			 {
				problemStatement: dataUtils.pre(
								'\\pan{12}{11}'
									+'{\\rowgrp'
										+'{\\grp'
											+'{\\str{Simplify: &nbsp;}}'
											+'{\\frac'
												+'{\\exp'
													+'{\\grp'
														+'{\\str{(}}'
														+'{\\exp{\\str{&nbsp;$$base}}{\\str{$$exp1}}}'
														+'{\\str{)}}'
													+'}'
													+'{\\str{$$expSecond1}}'
												+'}'
												+'{\\exp'
													+'{\\grp'
														+'{\\str{(}}'
														+'{\\exp{\\str{&nbsp;$$base}}{\\str{$$exp2}}}'
														+'{\\str{)}}'
													+'}'
													+'{\\str{$$expSecond2}}'
												+'}'
											+'}'
										+'}'
							),
				wellProblemStatement: dataUtils.pre(
									'\\css'
										+'{\\rowgrp'
											+'{\\html{&nbsp;}}'
											+'{\\grp'
												+'{\\frac'
													+'{\\exp'
														+'{\\grp'
															+'{\\str{(}}'
															+'{\\exp{\\str{&nbsp;$$base}}{\\str{$$exp1}}}'
															+'{\\str{)}}'
														+'}'
														+'{\\str{$$expSecond1}}'
													+'}'
													+'{\\exp'
														+'{\\grp'
															+'{\\str{(}}'
															+'{\\exp{\\str{&nbsp;$$base}}{\\str{$$exp2}}}'
															+'{\\str{)}}'
														+'}'
														+'{\\str{$$expSecond2}}'
													+'}'
												+'}'
												+'{\\str{&nbsp; = &nbsp;}}'
												+'{\\str{$$base<sup> $$ansExp</sup>}}'
											+'}'
											+'{\\html{&nbsp;}}'
											+'{\\css'
												+'{\\grp'
													+'{\\str{Evaluate the simplified expression<span class=large>:</span>}}'
												+'}'
												+'{alert alert-info}'
											+'}'
											+'{\\grp'
												+'{\\input{$$finalAns}}'
											+'}'
										+'}{well}'
							),
				answerInstructions: 'All simplified answers must have only positive exponents.'
									+'<br><br>',
				base: '3',
				exp1: '2',
				expSecond1: '5',
				exp2: '3',
				expSecond2: '2',
				expFirstProduct: '10',
				expSecondProduct: '6',
				ansBase: '3',
				ansExp: '4',
				finalAns: '81',
				solutionAnswer: dataUtils.pre(
								'\\rowgrp'
									+'{\\str{$$answerInstructions}}'
									+'{\\exp{\\input{$$ansBase}}{\\input{$$ansExp}}}'
							),
				line1: dataUtils.pre(
								'\\rowgrp'
									+'{\\str{<u>First</u>, we use the exponent rule \"Power raised to a Power\" here. When we have a power raised to another power, we <u>multiply the exponents</u>.}}'
									+'{\\str{&nbsp;}}'
									+'{\\str{Here we use the \"power to a power\" in both the numerator and the denominator.}}'
									+'{\\str{&nbsp;}}'
									+'{\\str{&nbsp;}}'
									+'{\\grp'
										+'{\\str{In the numerator: &nbsp;&nbsp;}}'
										+'{\\exp'
											+'{\\grp'
												+'{\\str{(}}'
												+'{\\exp{\\str{&nbsp;$$base}}{\\str{$$exp1}}}'
												+'{\\str{)}}'
											+'}'
											+'{\\str{$$expSecond1}}'
										+'}'
										+'{\\str{&nbsp; means &nbsp;}}'
										+'{\\str{$$base<sup> $$exp1 * $$expSecond1</sup>}}'
										+'{\\str{&nbsp; or &nbsp;}}'
										+'{\\str{$$base<sup> $$expFirstProduct</sup>}}'
									+'}'
									+'{\\str{&nbsp;}}'
									+'{\\str{&nbsp;}}'
									+'{\\grp'
										+'{\\str{In the denominator: &nbsp;&nbsp;}}'
										+'{\\exp'
											+'{\\grp'
												+'{\\str{(}}'
												+'{\\exp{\\str{&nbsp;$$base}}{\\str{$$exp2}}}'
												+'{\\str{)}}'
											+'}'
											+'{\\str{$$expSecond2}}'
										+'}'
										+'{\\str{&nbsp; means &nbsp;}}'
										+'{\\str{$$base<sup> $$exp2 * $$expSecond2</sup>}}'
										+'{\\str{&nbsp; or &nbsp;}}'
										+'{\\str{$$base<sup> $$expSecondProduct</sup>}}'
									+'}'
									+'{\\str{&nbsp;}}'
									+'{\\str{&nbsp;}}'
									+'{\\grp'
										+'{\\str{So:}}'
										+'{\\frac'
												+'{\\exp'
													+'{\\grp'
														+'{\\str{(}}'
														+'{\\exp{\\str{&nbsp;$$base}}{\\str{$$exp1}}}'
														+'{\\str{)}}'
													+'}'
													+'{\\str{$$expSecond1}}'
												+'}'
												+'{\\exp'
													+'{\\grp'
														+'{\\str{(}}'
														+'{\\exp{\\str{&nbsp;$$base}}{\\str{$$exp2}}}'
														+'{\\str{)}}'
													+'}'
													+'{\\str{$$expSecond2}}'
												+'}'
											+'}'
										+'{\\str{&nbsp; becomes &nbsp;&nbsp;}}'
										+'{\\frac'
											+'{\\str{$$base<sup> $$expFirstProduct</sup>}}'
											+'{\\str{$$base<sup> $$expSecondProduct</sup>}}'
										+'}'
									+'}'
									+'{\\str{&nbsp;}}'
									+'{\\str{&nbsp;}}'
									+'{\\str{<u>Second</u>, we use the exponent rule \"Division of Same Bases\" here. When we divide same bases, we <u>subtract the exponents</u>.}}'
									+'{\\str{&nbsp;}}'
									+'{\\grp'
										+'{\\frac'
											+'{\\str{$$base<sup> $$expFirstProduct</sup>}}'
											+'{\\str{$$base<sup> $$expSecondProduct</sup>}}'
										+'}'
										+'{\\str{&nbsp; means &nbsp;}}'
										+'{\\str{$$base<sup> $$expFirstProduct - $$expSecondProduct</sup>}}'
										+'{\\str{&nbsp; or &nbsp;}}'
										+'{\\str{$$base<sup> $$ansExp</sup>}}'
									+'}'
								),
				helpAnswer: dataUtils.pre(

								'\\grp'
									+'{\\str{Simplified Answer: &nbsp;}}'
									+'{\\str{$$base<sup> $$ansExp</sup>}}'
							),
				template: 'evaluateAfterSimplify' 
			 }
			 ,
			 // prob 35
			 {
				problemStatement: dataUtils.pre(
								'\\pan{12}{11}'
									+'{\\rowgrp'
										+'{\\grp'
											+'{\\str{Simplify: &nbsp;}}'
											+'{\\frac'
												+'{\\exp'
													+'{\\grp'
														+'{\\str{(}}'
														+'{\\exp{\\str{&nbsp;$$base}}{\\str{$$exp1}}}'
														+'{\\str{)}}'
													+'}'
													+'{\\str{$$expSecond1}}'
												+'}'
												+'{\\exp'
													+'{\\grp'
														+'{\\str{(}}'
														+'{\\exp{\\str{&nbsp;$$base}}{\\str{$$exp2}}}'
														+'{\\str{)}}'
													+'}'
													+'{\\str{$$expSecond2}}'
												+'}'
											+'}'
										+'}'
							),
				answerInstructions: 'All simplified answers must have only positive exponents.'
									+'<br><br>',
				base: '3',
				exp1: ' 2',
				expSecond1: '-1 ',
				exp2: '-3 ',
				expSecond2: '-2 ',
				expFirstProduct: '-2 ',
				expSecondProduct: '6',
				ansBase: '3',
				expDiff: '-8 ',
				ansExp: '8',
				solutionAnswer: dataUtils.pre(
								'\\rowgrp'
									+'{\\str{$$answerInstructions}}'
									+'{\\frac'
										+'{\\input{1}}'
										+'{\\exp{\\input{$$base}}{\\input{$$ansExp}}}'
									+'}'
							),
				line1: dataUtils.pre(
								'\\rowgrp'
									+'{\\str{<u>First</u>, we use the exponent rule \"Power raised to a Power\" here. When we have a power raised to another power, we <u>multiply the exponents</u>.}}'
									+'{\\str{&nbsp;}}'
									+'{\\str{Here we use the \"power to a power\" in both the numerator and the denominator.}}'
									+'{\\str{&nbsp;}}'
									+'{\\str{&nbsp;}}'
									+'{\\grp'
										+'{\\str{In the numerator: &nbsp;&nbsp;}}'
										+'{\\exp'
											+'{\\grp'
												+'{\\str{(}}'
												+'{\\exp{\\str{&nbsp;$$base}}{\\str{$$exp1}}}'
												+'{\\str{)}}'
											+'}'
											+'{\\str{$$expSecond1}}'
										+'}'
										+'{\\str{&nbsp; means &nbsp;}}'
										+'{\\str{$$base<sup> $$exp1 * ($$expSecond1 )</sup>}}'
										+'{\\str{&nbsp; or &nbsp;}}'
										+'{\\str{$$base<sup> $$expFirstProduct</sup>}}'
									+'}'
									+'{\\str{&nbsp;}}'
									+'{\\str{&nbsp;}}'
									+'{\\grp'
										+'{\\str{In the denominator: &nbsp;&nbsp;}}'
										+'{\\exp'
											+'{\\grp'
												+'{\\str{(}}'
												+'{\\exp{\\str{&nbsp;$$base}}{\\str{$$exp2}}}'
												+'{\\str{)}}'
											+'}'
											+'{\\str{$$expSecond2}}'
										+'}'
										+'{\\str{&nbsp; means &nbsp;}}'
										+'{\\str{$$base<sup> $$exp2 * ($$expSecond2 )</sup>}}'
										+'{\\str{&nbsp; or &nbsp;}}'
										+'{\\str{$$base<sup> $$expSecondProduct</sup>}}'
									+'}'
									+'{\\str{&nbsp;}}'
									+'{\\str{&nbsp;}}'
									+'{\\grp'
										+'{\\str{So:}}'
										+'{\\frac'
												+'{\\exp'
													+'{\\grp'
														+'{\\str{(}}'
														+'{\\exp{\\str{&nbsp;$$base}}{\\str{$$exp1}}}'
														+'{\\str{)}}'
													+'}'
													+'{\\str{$$expSecond1}}'
												+'}'
												+'{\\exp'
													+'{\\grp'
														+'{\\str{(}}'
														+'{\\exp{\\str{&nbsp;$$base}}{\\str{$$exp2}}}'
														+'{\\str{)}}'
													+'}'
													+'{\\str{$$expSecond2}}'
												+'}'
											+'}'
										+'{\\str{&nbsp; becomes &nbsp;&nbsp;}}'
										+'{\\frac'
											+'{\\str{$$base<sup> $$expFirstProduct</sup>}}'
											+'{\\str{$$base<sup> $$expSecondProduct</sup>}}'
										+'}'
									+'}'
									+'{\\str{&nbsp;}}'
									+'{\\str{&nbsp;}}'
									+'{\\str{<u>Second</u>, we use the exponent rule \"Division of Same Bases\" here. When we divide same bases, we <u>subtract the exponents</u>.}}'
									+'{\\str{&nbsp;}}'
									+'{\\grp'
										+'{\\frac'
											+'{\\str{$$base<sup> $$expFirstProduct</sup>}}'
											+'{\\str{$$base<sup> $$expSecondProduct</sup>}}'
										+'}'
										+'{\\str{&nbsp; means &nbsp;}}'
										+'{\\str{$$base<sup> $$expFirstProduct - $$expSecondProduct</sup>}}'
										+'{\\str{&nbsp; or &nbsp;}}'
										+'{\\str{$$base<sup> $$expDiff</sup>}}'
									+'}'
									+'{\\str{&nbsp;}}'
									+'{\\str{<u>third</u>, we still need to \"get rid of the negative exponent\" by taking the <u>reciprocal of the base</u> and changing the sign of the exponent.}}'
									+'{\\str{&nbsp;}}'
									+'{\\grp'
										+'{\\str{$$base<sup> $$expDiff</sup>}}'
										+'{\\str{&nbsp; = &nbsp;}}'
										+'{\\frac'
											+'{\\str{1}}'
											+'{\\str{$$base<sup> $$ansExp</sup>}}'
										+'}'
									+'}'
								),
				helpAnswer: dataUtils.pre(

								'\\grp'
									+'{\\str{Simplified Answer: &nbsp;}}'
									+'{\\frac'
										+'{\\str{1}}'
										+'{\\str{$$base<sup> $$ansExp</sup>}}'
									+'}'
							),
				template: 'firstSimplify' 
			 }
			 ,
			 // prob 36
			 {
				problemStatement: dataUtils.pre(
								'\\pan{12}{11}'
									+'{\\rowgrp'
										+'{\\grp'
											+'{\\str{Simplify: &nbsp;}}'
											+'{\\frac'
												+'{\\exp'
													+'{\\grp'
														+'{\\str{(}}'
														+'{\\exp{\\str{&nbsp;$$base}}{\\str{$$exp1}}}'
														+'{\\str{)}}'
													+'}'
													+'{\\str{$$expSecond1}}'
												+'}'
												+'{\\exp'
													+'{\\grp'
														+'{\\str{(}}'
														+'{\\exp{\\str{&nbsp;$$base}}{\\str{$$exp2}}}'
														+'{\\str{)}}'
													+'}'
													+'{\\str{$$expSecond2}}'
												+'}'
											+'}'
										+'}'
							),
				answerInstructions: 'All simplified answers must have only positive exponents.'
									+'<br><br>',
				base: '5',
				exp1: ' 3',
				expSecond1: '-1 ',
				exp2: '-2 ',
				expSecond2: '-2 ',
				expFirstProduct: '-3 ',
				expSecondProduct: '4',
				ansBase: '5',
				expDiff: '-7 ',
				ansExp: '7',
				solutionAnswer: dataUtils.pre(
								'\\rowgrp'
									+'{\\str{$$answerInstructions}}'
									+'{\\frac'
										+'{\\input{1}}'
										+'{\\exp{\\input{$$base}}{\\input{$$ansExp}}}'
									+'}'
							),
				line1: dataUtils.pre(
								'\\rowgrp'
									+'{\\str{<u>First</u>, we use the exponent rule \"Power raised to a Power\" here. When we have a power raised to another power, we <u>multiply the exponents</u>.}}'
									+'{\\str{&nbsp;}}'
									+'{\\str{Here we use the \"power to a power\" in both the numerator and the denominator.}}'
									+'{\\str{&nbsp;}}'
									+'{\\str{&nbsp;}}'
									+'{\\grp'
										+'{\\str{In the numerator: &nbsp;&nbsp;}}'
										+'{\\exp'
											+'{\\grp'
												+'{\\str{(}}'
												+'{\\exp{\\str{&nbsp;$$base}}{\\str{$$exp1}}}'
												+'{\\str{)}}'
											+'}'
											+'{\\str{$$expSecond1}}'
										+'}'
										+'{\\str{&nbsp; means &nbsp;}}'
										+'{\\str{$$base<sup> $$exp1 * ($$expSecond1 )</sup>}}'
										+'{\\str{&nbsp; or &nbsp;}}'
										+'{\\str{$$base<sup> $$expFirstProduct</sup>}}'
									+'}'
									+'{\\str{&nbsp;}}'
									+'{\\str{&nbsp;}}'
									+'{\\grp'
										+'{\\str{In the denominator: &nbsp;&nbsp;}}'
										+'{\\exp'
											+'{\\grp'
												+'{\\str{(}}'
												+'{\\exp{\\str{&nbsp;$$base}}{\\str{$$exp2}}}'
												+'{\\str{)}}'
											+'}'
											+'{\\str{$$expSecond2}}'
										+'}'
										+'{\\str{&nbsp; means &nbsp;}}'
										+'{\\str{$$base<sup> $$exp2 * ($$expSecond2 )</sup>}}'
										+'{\\str{&nbsp; or &nbsp;}}'
										+'{\\str{$$base<sup> $$expSecondProduct</sup>}}'
									+'}'
									+'{\\str{&nbsp;}}'
									+'{\\str{&nbsp;}}'
									+'{\\grp'
										+'{\\str{So:}}'
										+'{\\frac'
												+'{\\exp'
													+'{\\grp'
														+'{\\str{(}}'
														+'{\\exp{\\str{&nbsp;$$base}}{\\str{$$exp1}}}'
														+'{\\str{)}}'
													+'}'
													+'{\\str{$$expSecond1}}'
												+'}'
												+'{\\exp'
													+'{\\grp'
														+'{\\str{(}}'
														+'{\\exp{\\str{&nbsp;$$base}}{\\str{$$exp2}}}'
														+'{\\str{)}}'
													+'}'
													+'{\\str{$$expSecond2}}'
												+'}'
											+'}'
										+'{\\str{&nbsp; becomes &nbsp;&nbsp;}}'
										+'{\\frac'
											+'{\\str{$$base<sup> $$expFirstProduct</sup>}}'
											+'{\\str{$$base<sup> $$expSecondProduct</sup>}}'
										+'}'
									+'}'
									+'{\\str{&nbsp;}}'
									+'{\\str{&nbsp;}}'
									+'{\\str{<u>Second</u>, we use the exponent rule \"Division of Same Bases\" here. When we divide same bases, we <u>subtract the exponents</u>.}}'
									+'{\\str{&nbsp;}}'
									+'{\\grp'
										+'{\\frac'
											+'{\\str{$$base<sup> $$expFirstProduct</sup>}}'
											+'{\\str{$$base<sup> $$expSecondProduct</sup>}}'
										+'}'
										+'{\\str{&nbsp; means &nbsp;}}'
										+'{\\str{$$base<sup> $$expFirstProduct - $$expSecondProduct</sup>}}'
										+'{\\str{&nbsp; or &nbsp;}}'
										+'{\\str{$$base<sup> $$expDiff</sup>}}'
									+'}'
									+'{\\str{&nbsp;}}'
									+'{\\str{<u>third</u>, we still need to \"get rid of the negative exponent\" by taking the <u>reciprocal of the base</u> and changing the sign of the exponent.}}'
									+'{\\str{&nbsp;}}'
									+'{\\grp'
										+'{\\str{$$base<sup> $$expDiff</sup>}}'
										+'{\\str{&nbsp; = &nbsp;}}'
										+'{\\frac'
											+'{\\str{1}}'
											+'{\\str{$$base<sup> $$ansExp</sup>}}'
										+'}'
									+'}'
								),
				helpAnswer: dataUtils.pre(

								'\\grp'
									+'{\\str{Simplified Answer: &nbsp;}}'
									+'{\\frac'
										+'{\\str{1}}'
										+'{\\str{$$base<sup> $$ansExp</sup>}}'
									+'}'
							),
				template: 'firstSimplify' 
			 }
		];
		
		shuffle = [
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
				{ problems: [29,30], total: 1},
				{ problems: [31,32], total: 1},
				{ problems: [33,34], total: 1},
				{ problems: [35,36], total: 1}
				
		];
		//return dataUtils.build(desc, template, data);
    
    	return dataUtils.build(desc, template, data, shuffle);
}]);