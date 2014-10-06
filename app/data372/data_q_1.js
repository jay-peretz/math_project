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
