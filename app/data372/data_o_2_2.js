/*global angular */

angular.module('mathSkills').service('data_o_2_2', ['dataUtils', function (dataUtils) {
    var desc = {
            title: 'O.2.2 Simplifying Exponential Expressions: Division with Same Bases',
            path: 'O.2.2-divide-with-the-same-base',
            children: []
        },
        template = {
			divisionSimplification: {
                title: 'Simplifying Exponential Expressions: Division with Same Bases',
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
			divisionDiffBase: {
                title: 'Simplifying Exponential Expressions: Division with Same Bases',
				children: [{
					title: 'Main Answer',
					children: [{
						problem: '$problemStatement',
						answer: '\\rowgrp'
									+'{\\str{Use parentheses as a part of your answer <u>if</u> necessary.}}'
									+'{\\html{&nbsp;}}'
									+'{$solutionAnswer}',		
						controls: {
                            "checkAnswer": true,
                            "help": '\\rowgrp'
										+'{\\html{&nbsp;}}'
										+'{\\str{$line1}}'
										+'{\\html{&nbsp;}}'
										+'{\\str{$line2}}'
										+'{\\html{&nbsp;}}'
										+'{\\str{$line3}}'
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
			divideEvaluate: {
                title: 'Simplifying Exponential Expressions: Division with Same Bases',
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
			divideEvaluate2ndHelp: {
                title: 'Simplifying Exponential Expressions: Division with Same Bases',
				children: [{
					title: 'Main Answer',
					children: [{
						problem: '$problemStatement',
						answer: '\\rowgrp'
									+'{\\str{Use parentheses as a part of your answer <u>if</u> necessary.}}'
									+'{\\html{&nbsp;}}'
									+'{$solutionAnswer}',		
						controls: {
                            "checkAnswer": true,
                            "help": '\\rowgrp'
										+'{\\html{&nbsp;}}'
										+'{\\str{$line1}}'
										+'{\\html{&nbsp;}}'
										+'{\\str{$line2}}'
										+'{\\html{&nbsp;}}'
										+'{\\str{$line3}}'
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
						answer: '\\css'
									+'{\\rowgrp'
										+'{\\html{&nbsp;}}'
										+'$noPanProbStatement'
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
									+'}{well}',	
						controls: {
                            "checkAnswer": true,
                            "help": '\\rowgrp'
										+'{\\html{&nbsp;}}'
										+'{\\str{$secondHelpLine1}}'
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
            }
			,
			divideFractionsEvaluate: {
                title: 'Simplifying Exponential Expressions: Division with Same Bases',
				children: [{
					title: 'Main Answer',
					children: [{
						problem: '$problemStatement',
						answer: '\\rowgrp'
									+'{\\str{Use parentheses as a part of your answer <u>if</u> necessary.}}'
									+'{\\html{&nbsp;}}'
									+'{$solutionAnswer}',		
						controls: {
                            "checkAnswer": true,
                            "help": '\\rowgrp'
										+'{\\html{&nbsp;}}'
										+'{\\str{$line1}}'
										+'{\\html{&nbsp;}}'
										+'{$line2}'
										+'{\\html{&nbsp;}}'
										+'{\\css'
											+'{\\grp'
												+'{\\str{Simplified Answer: &nbsp;}}'
												+'{$stringAnswer}'
											+'}'
											+'{help-answer-text}'
										+'}'
										+'{\\html{&nbsp;}}'
								}
						}
						,
						{
						problem: '$problemStatement',
						answer: '\\css'
									+'{\\rowgrp'
										+'{\\html{&nbsp;}}'
										+'$noPanProbStatement'
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
									+'}{well}',	
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
									+'{\\frac'
										+'{\\exp{\\str{&nbsp;$$base1}}{\\str{$$exp1}}}'
										+'{\\exp{\\str{&nbsp;$$base2}}{\\str{$$exp2}}}'
									+'}'
								+'}'
						),
		  	answerInstructions: '',
		 	base1: '4',
		 	exp1: '5',
		  	base2: '4',
		  	exp2: '2',
		  	baseans: '4',
		  	expans: '3',
			solutionAnswer: dataUtils.pre(
							'\\rowgrp'
								+'{\\str{$$answerInstructions}}'
								+'{\\exp{\\input{$$baseans}}{\\input{$$expans}}'
						),
			firstBaseExpand: '4 * 4 * 4 * 4 * 4',
			secondBaseExpand: '4 * 4 * 4',
		  	line1: dataUtils.pre(
							'\\rowgrp'
								+'{\\grp'
									+'{\\str{The expression of &nbsp;}}'
									+'{\\frac'
										+'{\\exp{\\str{&nbsp;$$base1}}{\\str{$$exp1}}}'
										+'{\\exp{\\str{&nbsp;$$base2}}{\\str{$$exp2}}}'
									+'}'
									+'{\\str{&nbsp; means:}}'
								+'}'
								+'{\\html{&nbsp;}}'
								+'{\\frac'
										+'{\\str{&nbsp;$$firstBaseExpand}}'
										+'{\\str{&nbsp;$$secondBaseExpand}}'
								+'}'
						),
		  	line2: "If we cancel two 4's in the numerator with two 4's in the denominator, "
			+"we can see that we are still left with three 4's in the numerator."
			+'This is expressed as 4<sup>3</sup>.<br><br>' 
			+'To simplify this quickly, we use the exponent rule \\"Division of Same Bases\\" '
			+'here. When we divide same bases, we <u>subtract the exponents</u>.<br><br>'
			+'Take the exponent in the numerator and subtract the exponent in the denominator.',
		  	line3: dataUtils.pre(
							'\\rowgrp'
								+'{\\grp'
									+'{\\frac'
										+'{\\exp{\\str{&nbsp;$$base1}}{\\str{$$exp1}}}'
										+'{\\exp{\\str{&nbsp;$$base2}}{\\str{$$exp2}}}'
									+'}'
									+'{\\str{&nbsp; means &nbsp; 4<sup>5 - 2</sup> &nbsp;or&nbsp; 4<sup>3</sup>}}'
								+'}'
						),
		  	helpAnswer: '<br>Simplified Answer: &nbsp;4<sup>3</sup>',
		  	template: 'divisionSimplification' 
		 }
		 ,
		 // prob 2
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
		 	base1: '7',
		 	exp1: '4',
		  	base2: '7',
		  	exp2: '2',
		  	baseans: '7',
		  	expans: '2',
			solutionAnswer: dataUtils.pre(
							'\\rowgrp'
								+'{\\str{$$answerInstructions}}'
								+'{\\exp{\\input{$$baseans}}{\\input{$$expans}}'
						),
			firstBaseExpand: '7 * 7 * 7 * 7',
			secondBaseExpand: '7 * 7',
		  	line1: dataUtils.pre(
							'\\rowgrp'
								+'{\\grp'
									+'{\\str{The expression of &nbsp;}}'
									+'{\\frac'
										+'{\\exp{\\str{&nbsp;$$base1}}{\\str{$$exp1}}}'
										+'{\\exp{\\str{&nbsp;$$base2}}{\\str{$$exp2}}}'
									+'}'
									+'{\\str{&nbsp; means:}}'
								+'}'
								+'{\\html{&nbsp;}}'
								+'{\\frac'
										+'{\\str{&nbsp;$$firstBaseExpand}}'
										+'{\\str{&nbsp;$$secondBaseExpand}}'
								+'}'
						),
		  	line2: "If we cancel two 7's in the numerator with two 7's in the denominator, "
			+"we can see that we are still left with two 7's in the numerator."
			+'This is expressed as 7<sup>2</sup>.<br><br>' 
			+'To simplify this quickly, we use the exponent rule \\"Division of Same Bases\\" '
			+'here. When we divide same bases, we <u>subtract the exponents</u>.<br><br>'
			+'Take the exponent in the numerator and subtract the exponent in the denominator.',
		  	line3: dataUtils.pre(
							'\\rowgrp'
								+'{\\grp'
									+'{\\frac'
										+'{\\exp{\\str{&nbsp;$$base1}}{\\str{$$exp1}}}'
										+'{\\exp{\\str{&nbsp;$$base2}}{\\str{$$exp2}}}'
									+'}'
									+'{\\str{&nbsp; means &nbsp; 7<sup>4 - 2</sup> &nbsp;or&nbsp; 7<sup>2</sup>}}'
								+'}'
						),
		  	helpAnswer: '<br>Simplified Answer: &nbsp;7<sup>2</sup>',
		  	template: 'divisionSimplification' 
		 }
		 ,
		 // prob 3
		 {
		 	problemStatement: dataUtils.pre(
							'\\rowgrp'
								+'{\\grp'
									+'{\\str{Simplify: &nbsp;}}'
									+'{\\frac'
										+'{\\exp{\\str{&nbsp;&nbsp;$$base1}}{\\str{$$exp1}}}'
										+'{\\str{&nbsp;$$base2&nbsp;}}'
									+'}'
								+'}'
						),
		  	answerInstructions: '',
		 	base1: '5',
		 	exp1: '4',
		  	base2: '5',
		  	baseans: '5',
		  	expans: '3',
			solutionAnswer: dataUtils.pre(
							'\\rowgrp'
								+'{\\str{$$answerInstructions}}'
								+'{\\exp{\\input{$$baseans}}{\\input{$$expans}}'
						),
			firstBaseExpand: '5 * 5 * 5 * 5',
			secondBaseExpand: '5',
		  	line1: dataUtils.pre(
							'\\rowgrp'
								+'{\\grp'
									+'{\\str{The expression of &nbsp;}}'
									+'{\\frac'
										+'{\\exp{\\str{&nbsp;&nbsp;$$base1}}{\\str{$$exp1}}}'
										+'{\\str{&nbsp;$$base2&nbsp;}}'
									+'}'
									+'{\\str{&nbsp; means:}}'
								+'}'
								+'{\\html{&nbsp;}}'
								+'{\\frac'
										+'{\\str{&nbsp;$$firstBaseExpand}}'
										+'{\\str{&nbsp;$$secondBaseExpand}}'
								+'}'
						),
		  	line2: "If we cancel one 5 in the numerator with one 5 in the denominator, "
			+"we can see that we are still left with three 5's in the numerator."
			+'This is expressed as 5<sup>3</sup>.<br><br>' 
			+'To simplify this quickly, we use the exponent rule \\"Division of Same Bases\\" '
			+'here. When we divide same bases, we <u>subtract the exponents</u>.<br><br>'
			+'Take the exponent in the numerator and subtract the exponent in the denominator.',
		  	line3: dataUtils.pre(
							'\\rowgrp'
								+'{\\grp'
									+'{\\frac'
										+'{\\exp{\\str{&nbsp;&nbsp;$$base1}}{\\str{$$exp1}}}'
										+'{\\str{&nbsp;$$base2&nbsp;}}'
									+'}'
									+'{\\str{&nbsp; means &nbsp; 5<sup>4 - 1</sup> &nbsp;or&nbsp; 5<sup>3</sup>}}'
								+'}'
						),
		  	helpAnswer: '<br>Simplified Answer: &nbsp;5<sup>3</sup>',
		  	template: 'divisionSimplification' 
		 }
		  ,
		 // prob 4
		 {
		 	problemStatement: dataUtils.pre(
							'\\rowgrp'
								+'{\\grp'
									+'{\\str{Simplify: &nbsp;}}'
									+'{\\frac'
										+'{\\exp{\\str{&nbsp;&nbsp;$$base1}}{\\str{$$exp1}}}'
										+'{\\str{&nbsp;$$base2&nbsp;}}'
									+'}'
								+'}'
						),
		  	answerInstructions: '',
		 	base1: '6',
		 	exp1: '3',
		  	base2: '6',
		  	baseans: '6',
		  	expans: '2',
			solutionAnswer: dataUtils.pre(
							'\\rowgrp'
								+'{\\str{$$answerInstructions}}'
								+'{\\exp{\\input{$$baseans}}{\\input{$$expans}}'
						),
			firstBaseExpand: '6 * 6 * 6',
			secondBaseExpand: '6',
		  	line1: dataUtils.pre(
							'\\rowgrp'
								+'{\\grp'
									+'{\\str{The expression of &nbsp;}}'
									+'{\\frac'
										+'{\\exp{\\str{&nbsp;&nbsp;$$base1}}{\\str{$$exp1}}}'
										+'{\\str{&nbsp;$$base2&nbsp;}}'
									+'}'
									+'{\\str{&nbsp; means:}}'
								+'}'
								+'{\\html{&nbsp;}}'
								+'{\\frac'
										+'{\\str{&nbsp;$$firstBaseExpand}}'
										+'{\\str{&nbsp;$$secondBaseExpand}}'
								+'}'
						),
		  	line2: "If we cancel one 6 in the numerator with one 6 in the denominator, "
			+"we can see that we are still left with two 6's in the numerator."
			+'This is expressed as 6<sup>2</sup>.<br><br>' 
			+'To simplify this quickly, we use the exponent rule \\"Division of Same Bases\\" '
			+'here. When we divide same bases, we <u>subtract the exponents</u>.<br><br>'
			+'Take the exponent in the numerator and subtract the exponent in the denominator.',
		  	line3: dataUtils.pre(
							'\\rowgrp'
								+'{\\grp'
									+'{\\frac'
										+'{\\exp{\\str{&nbsp;&nbsp;$$base1}}{\\str{$$exp1}}}'
										+'{\\str{&nbsp;$$base2&nbsp;}}'
									+'}'
									+'{\\str{&nbsp; means &nbsp; 6<sup>3 - 1</sup> &nbsp;or&nbsp; 6<sup>2</sup>}}'
								+'}'
						),
		  	helpAnswer: '<br>Simplified Answer: &nbsp;6<sup>2</sup>',
		  	template: 'divisionSimplification' 
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
		  	answerInstructions: 'Use parentheses as a part of your answer if necessary.<br><br>',
		 	base1: '(-2 )',
		 	exp1: '5',
		  	base2: '(-2 )',
		  	exp2: '2',
		  	baseans: '(-2)',
		  	expans: '3',
			solutionAnswer: dataUtils.pre(
							'\\rowgrp'
								+'{\\str{$$answerInstructions}}'
								+'{\\exp{\\input{$$baseans}}{\\input{$$expans}}'
						),
		  	line1: dataUtils.pre(
							'\\str{'
								+'To simplify this quickly, we use the exponent rule \"Division of Same Bases\" '
								+'here. When we divide same bases, we <u>subtract the exponents</u>.'
							+'}'
						),
		  	line2: 'Take the exponent in the numerator and subtract the exponent in the denominator.',
		  	line3: dataUtils.pre(
							'\\rowgrp'
								+'{\\grp'
									+'{\\frac'
										+'{\\exp{\\str{&nbsp;$$base1}}{\\str{$$exp1}}}'
										+'{\\exp{\\str{&nbsp;$$base2}}{\\str{$$exp2}}}'
									+'}'
									+'{\\str{&nbsp; means &nbsp; (-2 ) <sup>5 - 2</sup> &nbsp;or&nbsp; (-2 ) <sup>3</sup>}}'
								+'}'
						),
		  	helpAnswer: '<br>Simplified Answer: &nbsp;(-2 ) <sup>3</sup>',
		  	template: 'divisionSimplification' 
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
		  	answerInstructions: 'Use parentheses as a part of your answer if necessary.<br><br>',
		 	base1: '(-3 )',
		 	exp1: '3',
		  	base2: '(-3 )',
		  	exp2: '2',
		  	solutionAnswer: dataUtils.pre(
							'\\rowgrp'
								+'{\\str{$$answerInstructions}}'
								+'{\\grp'
									+'{\\input{["(-3)",-3]}}'
								+'}'
						),
		  	line1: dataUtils.pre(
							'\\str{'
								+'To simplify this quickly, we use the exponent rule \"Division of Same Bases\" '
								+'here. When we divide same bases, we <u>subtract the exponents</u>.'
							+'}'
						),
		  	line2: 'Take the exponent in the numerator and subtract the exponent in the denominator.',
		  	line3: dataUtils.pre(
							'\\rowgrp'
								+'{\\grp'
									+'{\\frac'
										+'{\\exp{\\str{&nbsp;$$base1}}{\\str{$$exp1}}}'
										+'{\\exp{\\str{&nbsp;$$base2}}{\\str{$$exp2}}}'
									+'}'
									+'{\\str{&nbsp; means &nbsp; (-3 ) <sup>3 - 2</sup> &nbsp;or&nbsp; (-3 ) <sup>1</sup> = (-3 )}}'
								+'}'
						),
		  	helpAnswer: '<br>Simplified Answer: &nbsp;(-3 )',
		  	template: 'divisionSimplification' 
		 }
		 ,
		 // prob 7
		 {
		 	problemStatement: dataUtils.pre(
							'\\rowgrp'
								+'{\\grp'
									+'{\\str{Simplify: &nbsp;}}'
									+'{\\exp{\\str{&nbsp;$$base1}}{\\str{$$exp1}}}'
									+'{\\str{ / }}'
									+'{\\str{&nbsp;$$base2}}'
								+'}'
						),
		  	answerInstructions: 'Use parentheses as a part of your answer if necessary.<br><br>',
		 	base1: '7',
		 	exp1: '8',
		  	base2: '7',
			baseans: '7',
			expans: '7',
		  	solutionAnswer: dataUtils.pre(
							'\\rowgrp'
								+'{\\str{$$answerInstructions}}'
								+'{\\grp'
									+'{\\exp{\\input{$$baseans}}{\\input{$$expans}}}'
								+'}'
						),
		  	line1: dataUtils.pre(
							'\\str{'
								+'To simplify this quickly, we use the exponent rule \"Division of Same Bases\" '
								+'here. When we divide same bases, we <u>subtract the exponents</u>.'
							+'}'
						),
		  	line2: 'Take the exponent in the numerator and subtract the exponent in the denominator.',
		  	line3: dataUtils.pre(
							'\\rowgrp'
								+'{\\grp'
									+'{\\exp{\\str{&nbsp;$$base1}}{\\str{$$exp1}}}'
									+'{\\str{ / }}'
									+'{\\str{&nbsp;$$base2}}'
									+'{\\str{&nbsp; means &nbsp; 7 <sup>8 - 1</sup> &nbsp;or&nbsp; 7 <sup>7</sup>}}'
								+'}'
						),
		  	helpAnswer: '<br>Simplified Answer: &nbsp;7 <sup>7</sup>',
		  	template: 'divisionSimplification' 
		 }
		 ,
		 // prob 8
		 {
		 	problemStatement: dataUtils.pre(
							'\\rowgrp'
								+'{\\grp'
									+'{\\str{Simplify: &nbsp;}}'
									+'{\\exp{\\str{&nbsp;$$base1}}{\\str{$$exp1}}}'
									+'{\\str{ / }}'
									+'{\\str{&nbsp;$$base2}}'
								+'}'
						),
		  	answerInstructions: 'Use parentheses as a part of your answer if necessary.<br><br>',
		 	base1: '2',
		 	exp1: '6',
		  	base2: '2',
			baseans: '2',
			expans: '5',
		  	solutionAnswer: dataUtils.pre(
							'\\rowgrp'
								+'{\\str{$$answerInstructions}}'
								+'{\\grp'
									+'{\\exp{\\input{$$baseans}}{\\input{$$expans}}}'
								+'}'
						),
		  	line1: dataUtils.pre(
							'\\str{'
								+'To simplify this quickly, we use the exponent rule \"Division of Same Bases\" '
								+'here. When we divide same bases, we <u>subtract the exponents</u>.'
							+'}'
						),
		  	line2: 'Take the exponent in the numerator and subtract the exponent in the denominator.',
		  	line3: dataUtils.pre(
							'\\rowgrp'
								+'{\\grp'
									+'{\\exp{\\str{&nbsp;$$base1}}{\\str{$$exp1}}}'
									+'{\\str{ / }}'
									+'{\\str{&nbsp;$$base2}}'
									+'{\\str{&nbsp; means &nbsp; 2 <sup>6 - 1</sup> &nbsp;or&nbsp; 2 <sup>5</sup>}}'
								+'}'
						),
		  	helpAnswer: '<br>Simplified Answer: &nbsp;2 <sup>5</sup>',
		  	template: 'divisionSimplification' 
		 }
		 ,
		 // prob 9
		 {
		 	problemStatement: dataUtils.pre(
							'\\rowgrp'
								+'{\\grp'
									+'{\\str{Simplify: &nbsp;}}'
									+'{\\exp{\\str{&nbsp;$$base1}}{\\str{$$exp1}}}'
									+'{\\str{ / }}'
									+'{\\exp{\\str{&nbsp;$$base2}}{\\str{$$exp2}}}'
								+'}'
						),
		  	answerInstructions: 'Use parentheses as a part of your answer if necessary.<br><br>',
		 	base1: '(-4 )',
		 	exp1: '4',
		  	base2: '(-4 )',
		  	exp2: '2',
			baseans: '(-4)',
		  	expans: '2',
		  	solutionAnswer: dataUtils.pre(
							'\\rowgrp'
								+'{\\str{$$answerInstructions}}'
								+'{\\grp'
									+'{\\exp{\\input{$$baseans}}{\\input{$$expans}}'
								+'}'
						),
		  	line1: dataUtils.pre(
							'\\str{'
								+'To simplify this quickly, we use the exponent rule \"Division of Same Bases\" '
								+'here. When we divide same bases, we <u>subtract the exponents</u>.'
							+'}'
						),
		  	line2: 'Take the exponent in the numerator and subtract the exponent in the denominator.',
		  	line3: dataUtils.pre(
							'\\rowgrp'
								+'{\\grp'
									+'{\\exp{\\str{&nbsp;$$base1}}{\\str{$$exp1}}}'
									+'{\\str{ / }}'
									+'{\\exp{\\str{&nbsp;$$base2}}{\\str{$$exp2}}}'
									+'{\\str{&nbsp; means &nbsp; (-4 ) <sup>4 - 2</sup> &nbsp;or&nbsp; (-4 ) <sup>2</sup>}}'
								+'}'
						),
		  	helpAnswer: '<br>Simplified Answer: &nbsp;(-4 ) <sup>2</sup>',
		  	template: 'divisionSimplification' 
		 }
		 ,
		 // prob 10
		 {
		 	problemStatement: dataUtils.pre(
							'\\rowgrp'
								+'{\\grp'
									+'{\\str{Simplify: &nbsp;}}'
									+'{\\exp{\\str{&nbsp;$$base1}}{\\str{$$exp1}}}'
									+'{\\str{ / }}'
									+'{\\exp{\\str{&nbsp;$$base2}}{\\str{$$exp2}}}'
								+'}'
						),
		  	answerInstructions: 'Use parentheses as a part of your answer if necessary.<br><br>',
		 	base1: '(-5 )',
		 	exp1: '6',
		  	base2: '(-5 )',
		  	exp2: '4',
			baseans: '(-5)',
		  	expans: '2',
		  	solutionAnswer: dataUtils.pre(
							'\\rowgrp'
								+'{\\str{$$answerInstructions}}'
								+'{\\grp'
									+'{\\exp{\\input{$$baseans}}{\\input{$$expans}}'
								+'}'
						),
		  	line1: dataUtils.pre(
							'\\str{'
								+'To simplify this quickly, we use the exponent rule \"Division of Same Bases\" '
								+'here. When we divide same bases, we <u>subtract the exponents</u>.'
							+'}'
						),
		  	line2: 'Take the exponent in the numerator and subtract the exponent in the denominator.',
		  	line3: dataUtils.pre(
							'\\rowgrp'
								+'{\\grp'
									+'{\\exp{\\str{&nbsp;$$base1}}{\\str{$$exp1}}}'
									+'{\\str{ / }}'
									+'{\\exp{\\str{&nbsp;$$base2}}{\\str{$$exp2}}}'
									+'{\\str{&nbsp; means &nbsp; (-5 ) <sup>6 - 4</sup> &nbsp;or&nbsp; (-5 ) <sup>2</sup>}}'
								+'}'
						),
		  	helpAnswer: '<br>Simplified Answer: &nbsp;(-5 ) <sup>2</sup>',
		  	template: 'divisionSimplification' 
		 }
		,
		 // prob 11
		 {
		 	problemStatement: dataUtils.pre(
							'\\rowgrp'
								+'{\\grp'
									+'{\\str{Simplify: &nbsp;}}'
									+'{\\exp{\\str{&nbsp;$$base1}}{\\str{$$exp1}}}'
									+'{\\str{ / }}'
									+'{\\exp{\\str{&nbsp;$$base2}}{\\str{$$exp2}}}'
								+'}'
						),
			wellProblemStatement: dataUtils.pre(
								'\\css'
									+'{\\rowgrp'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\exp{\\str{&nbsp;$$base1}}{\\str{$$exp1}}}'
											+'{\\str{ / }}'
											+'{\\exp{\\str{&nbsp;$$base2}}{\\str{$$exp2}}}'
											+'{\\str{ = }}'
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
		  	answerInstructions: 'Use parentheses as a part of your answer if necessary.<br><br>',
		 	base1: '3',
		 	exp1: '5',
		  	base2: '3',
		  	exp2: '-2',
			baseans: '3',
		  	expans: '7',
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
										+'To simplify this quickly, we use the exponent rule \"Division of Same Bases\" '
										+'here. When we divide same bases, we <u>subtract the exponents</u>.'
									+'}}'
									+'{\\str{&nbsp;}}'
									+'{\\str{'
										+'Take the exponent in the numerator and subtract the exponent in the denominator.'
									+'}}'
									+'{\\str{&nbsp;}}'
									+'{\\grp'
										+'{\\exp{\\str{&nbsp;$$base1}}{\\str{$$exp1}}}'
										+'{\\str{ / }}'
										+'{\\exp{\\str{&nbsp;$$base2}}{\\str{$$exp2}}}'
										+'{\\str{&nbsp; means &nbsp; 3 <sup>5 - (-2 )</sup>}}'
									+'}'
						),
		  	line2: 'The expression&nbsp; 3 <sup>5 - (-2 )</sup>&nbsp; includes a double negative.'
					+'<br>'
					+'3 <sup>5 - (-2 )</sup> &nbsp;is the same as:&nbsp; 3 <sup>5 + 2</sup> &nbsp;or&nbsp; 3 <sup>7</sup>',
		  	line3: '',
		  	helpAnswer: '<br>Simplified Answer: &nbsp;3 <sup>7</sup>',
			finalAnswer: '2187',
		  	template: 'divideEvaluate' 
		 }
		 ,
		 // prob 12
		 {
		 	problemStatement: dataUtils.pre(
							'\\rowgrp'
								+'{\\grp'
									+'{\\str{Simplify: &nbsp;}}'
									+'{\\exp{\\str{&nbsp;$$base1}}{\\str{$$exp1}}}'
									+'{\\str{ / }}'
									+'{\\exp{\\str{&nbsp;$$base2}}{\\str{$$exp2}}}'
								+'}'
						),
			wellProblemStatement: dataUtils.pre(
								'\\css'
									+'{\\rowgrp'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\exp{\\str{&nbsp;$$base1}}{\\str{$$exp1}}}'
											+'{\\str{ / }}'
											+'{\\exp{\\str{&nbsp;$$base2}}{\\str{$$exp2}}}'
											+'{\\str{ = }}'
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
		  	answerInstructions: 'Use parentheses as a part of your answer if necessary.<br><br>',
		 	base1: '2',
		 	exp1: '4',
		  	base2: '2',
		  	exp2: '-1',
			baseans: '2',
		  	expans: '5',
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
										+'To simplify this quickly, we use the exponent rule \"Division of Same Bases\" '
										+'here. When we divide same bases, we <u>subtract the exponents</u>.'
									+'}}'
									+'{\\str{&nbsp;}}'
									+'{\\str{'
										+'Take the exponent in the numerator and subtract the exponent in the denominator.'
									+'}}'
									+'{\\str{&nbsp;}}'
									+'{\\grp'
										+'{\\exp{\\str{&nbsp;$$base1}}{\\str{$$exp1}}}'
										+'{\\str{ / }}'
										+'{\\exp{\\str{&nbsp;$$base2}}{\\str{$$exp2}}}'
										+'{\\str{&nbsp; means &nbsp; 2 <sup>4 - (-1 )</sup>}}'
									+'}'
						),
		  	line2: 'The expression&nbsp; 2 <sup>4 - (-1 )</sup>&nbsp; includes a double negative.'
					+'<br>'
					+'2 <sup>4 - (-1 )</sup> &nbsp;is the same as:&nbsp; 2 <sup>4 + 1</sup> &nbsp;or&nbsp; 2 <sup>5</sup>',
		  	line3: '',
		  	helpAnswer: '<br>Simplified Answer: &nbsp;2 <sup>5</sup>',
			finalAnswer: '32',
		  	template: 'divideEvaluate' 
		 }
		  ,
		 // prob 13
		 {
		 	problemStatement: dataUtils.pre(
							'\\rowgrp'
								+'{\\grp'
									+'{\\str{Simplify: &nbsp;}}'
									+'{\\exp{\\str{&nbsp;$$base1}}{\\str{$$exp1}}}'
									+'{\\str{ / }}'
									+'{\\exp{\\str{&nbsp;$$base2}}{\\str{$$exp2}}}'
								+'}'
						),
			wellProblemStatement: dataUtils.pre(
								'\\css'
									+'{\\rowgrp'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\exp{\\str{&nbsp;$$base1}}{\\str{$$exp1}}}'
											+'{\\str{ / }}'
											+'{\\exp{\\str{&nbsp;$$base2}}{\\str{$$exp2}}}'
											+'{\\str{ = }}'
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
		  	answerInstructions: 'Use parentheses as a part of your answer if necessary.<br><br>',
		 	base1: '5',
		 	exp1: '-2',
		  	base2: '5',
		  	exp2: '-5',
			baseans: '5',
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
									+'{\\str{'
										+'To simplify this quickly, we use the exponent rule \"Division of Same Bases\" '
										+'here. When we divide same bases, we <u>subtract the exponents</u>.'
									+'}}'
									+'{\\str{&nbsp;}}'
									+'{\\str{'
										+'Take the exponent in the numerator and subtract the exponent in the denominator.'
									+'}}'
									+'{\\str{&nbsp;}}'
									+'{\\grp'
										+'{\\exp{\\str{&nbsp;$$base1}}{\\str{$$exp1}}}'
										+'{\\str{ / }}'
										+'{\\exp{\\str{&nbsp;$$base2}}{\\str{$$exp2}}}'
										+'{\\str{&nbsp; means &nbsp; 5 <sup>-2 - (-5 )</sup>}}'
									+'}'
						),
		  	line2: 'The expression&nbsp; 5 <sup>-2 - (-5 )</sup>&nbsp; includes a double negative.'
					+'<br>'
					+'5 <sup>-2 - (-5 )</sup> &nbsp;is the same as:&nbsp; 5 <sup>-2 + 5</sup> &nbsp;or&nbsp; 5 <sup>3</sup>',
		  	line3: '',
		  	helpAnswer: '<br>Simplified Answer: &nbsp;5 <sup>3</sup>',
			finalAnswer: '125',
		  	template: 'divideEvaluate' 
		 }
		  ,
		 // prob 14
		 {
		 	problemStatement: dataUtils.pre(
							'\\rowgrp'
								+'{\\grp'
									+'{\\str{Simplify: &nbsp;}}'
									+'{\\exp{\\str{&nbsp;$$base1}}{\\str{$$exp1}}}'
									+'{\\str{ / }}'
									+'{\\exp{\\str{&nbsp;$$base2}}{\\str{$$exp2}}}'
								+'}'
						),
			wellProblemStatement: dataUtils.pre(
								'\\css'
									+'{\\rowgrp'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\exp{\\str{&nbsp;$$base1}}{\\str{$$exp1}}}'
											+'{\\str{ / }}'
											+'{\\exp{\\str{&nbsp;$$base2}}{\\str{$$exp2}}}'
											+'{\\str{ = }}'
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
		  	answerInstructions: 'Use parentheses as a part of your answer if necessary.<br><br>',
		 	base1: '7',
		 	exp1: '-1',
		  	base2: '7',
		  	exp2: '-3',
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
									+'{\\str{'
										+'To simplify this quickly, we use the exponent rule \"Division of Same Bases\" '
										+'here. When we divide same bases, we <u>subtract the exponents</u>.'
									+'}}'
									+'{\\str{&nbsp;}}'
									+'{\\str{'
										+'Take the exponent in the numerator and subtract the exponent in the denominator.'
									+'}}'
									+'{\\str{&nbsp;}}'
									+'{\\grp'
										+'{\\exp{\\str{&nbsp;$$base1}}{\\str{$$exp1}}}'
										+'{\\str{ / }}'
										+'{\\exp{\\str{&nbsp;$$base2}}{\\str{$$exp2}}}'
										+'{\\str{&nbsp; means &nbsp; 7 <sup>-1 - (-3 )</sup>}}'
									+'}'
						),
		  	line2: 'The expression&nbsp; 7 <sup>-1 - (-3 )</sup>&nbsp; includes a double negative.'
					+'<br>'
					+'7 <sup>-1 - (-3 )</sup> &nbsp;is the same as:&nbsp; 7 <sup>-1 + 3</sup> &nbsp;or&nbsp; 7 <sup>2</sup>',
		  	line3: '',
		  	helpAnswer: '<br>Simplified Answer: &nbsp;7 <sup>2</sup>',
			finalAnswer: '49',
		  	template: 'divideEvaluate' 
		 }
		 ,
		 // prob 15
		 {
		 	problemStatement: dataUtils.pre(
							'\\rowgrp'
								+'{\\grp'
									+'{\\str{Simplify: &nbsp;}}'
									+'{\\exp{\\str{&nbsp;$$base1}}{\\str{$$exp1}}}'
									+'{\\str{ / }}'
									+'{\\exp{\\str{&nbsp;$$base2}}{\\str{$$exp2}}}'
								+'}'
						),
		  	answerInstructions: 'Use parentheses as a part of your answer if necessary.<br><br>',
		 	base1: 'x',
		 	exp1: '4',
		  	base2: 'x',
		  	exp2: '2',
			baseans: 'x',
		  	expans: '2',
		  	solutionAnswer: dataUtils.pre(
							'\\rowgrp'
								+'{\\str{$$answerInstructions}}'
								+'{\\grp'
									+'{\\exp{\\input{$$baseans}}{\\input{$$expans}}'
								+'}'
						),
		  	line1: dataUtils.pre(
							'\\str{'
								+'To simplify this quickly, we use the exponent rule \"Division of Same Bases\" '
								+'here. When we divide same bases, we <u>subtract the exponents</u>.'
							+'}'
						),
		  	line2: 'Take the exponent in the numerator and subtract the exponent in the denominator.',
		  	line3: dataUtils.pre(
							'\\rowgrp'
								+'{\\grp'
									+'{\\exp{\\str{&nbsp;$$base1}}{\\str{$$exp1}}}'
									+'{\\str{ / }}'
									+'{\\exp{\\str{&nbsp;$$base2}}{\\str{$$exp2}}}'
									+'{\\str{&nbsp; means &nbsp; x <sup>4 - 2</sup> &nbsp;or&nbsp; x <sup>2</sup>}}'
								+'}'
						),
		  	helpAnswer: '<br>Simplified Answer: &nbsp;x <sup>2</sup>',
		  	template: 'divisionSimplification' 
		 }
		 ,
		 // prob 16
		 {
		 	problemStatement: dataUtils.pre(
							'\\rowgrp'
								+'{\\grp'
									+'{\\str{Simplify: &nbsp;}}'
									+'{\\exp{\\str{&nbsp;$$base1}}{\\str{$$exp1}}}'
									+'{\\str{ / }}'
									+'{\\exp{\\str{&nbsp;$$base2}}{\\str{$$exp2}}}'
								+'}'
						),
		  	answerInstructions: 'Use parentheses as a part of your answer if necessary.<br><br>',
		 	base1: 'a',
		 	exp1: '5',
		  	base2: 'a',
		  	exp2: '3',
			baseans: 'a',
		  	expans: '2',
		  	solutionAnswer: dataUtils.pre(
							'\\rowgrp'
								+'{\\str{$$answerInstructions}}'
								+'{\\grp'
									+'{\\exp{\\input{$$baseans}}{\\input{$$expans}}'
								+'}'
						),
		  	line1: dataUtils.pre(
							'\\str{'
								+'To simplify this quickly, we use the exponent rule \"Division of Same Bases\" '
								+'here. When we divide same bases, we <u>subtract the exponents</u>.'
							+'}'
						),
		  	line2: 'Take the exponent in the numerator and subtract the exponent in the denominator.',
		  	line3: dataUtils.pre(
							'\\rowgrp'
								+'{\\grp'
									+'{\\exp{\\str{&nbsp;$$base1}}{\\str{$$exp1}}}'
									+'{\\str{ / }}'
									+'{\\exp{\\str{&nbsp;$$base2}}{\\str{$$exp2}}}'
									+'{\\str{&nbsp; means &nbsp; a <sup>5 - 3</sup> &nbsp;or&nbsp; a <sup>2</sup>}}'
								+'}'
						),
		  	helpAnswer: '<br>Simplified Answer: &nbsp;a <sup>2</sup>',
		  	template: 'divisionSimplification' 
		 }
		 ,
		 // prob 17
		 {
		 	problemStatement: dataUtils.pre(
							'\\rowgrp'
								+'{\\grp'
									+'{\\str{Simplify: &nbsp;}}'
									+'{\\exp{\\str{&nbsp;$$base1}}{\\str{$$exp1}}}'
									+'{\\str{ / }}'
									+'{\\exp{\\str{&nbsp;$$base2}}{\\str{$$exp2}}}'
								+'}'
						),
		  	answerInstructions: 'Use parentheses as a part of your answer if necessary.<br><br>',
		 	base1: 'm',
		 	exp1: '3',
		  	base2: 'm',
		  	exp2: '-5',
			baseans: 'm',
		  	expans: '8',
		  	solutionAnswer: dataUtils.pre(
							'\\rowgrp'
								+'{\\str{$$answerInstructions}}'
								+'{\\grp'
									+'{\\exp{\\input{$$baseans}}{\\input{$$expans}}'
								+'}'
						),
		  	line1: dataUtils.pre(
							'\\str{'
								+'To simplify this quickly, we use the exponent rule \"Division of Same Bases\" '
								+'here. When we divide same bases, we <u>subtract the exponents</u>.'
							+'}'
						),
		  	line2: 'Take the exponent in the numerator and subtract the exponent in the denominator.',
		  	line3: dataUtils.pre(
							'\\rowgrp'
								+'{\\grp'
									+'{\\exp{\\str{&nbsp;$$base1}}{\\str{$$exp1}}}'
									+'{\\str{ / }}'
									+'{\\exp{\\str{&nbsp;$$base2}}{\\str{$$exp2}}}'
									+'{\\str{&nbsp; means &nbsp; m <sup>3 - (-5 )</sup>}}'
								+'}'
								+'{\\html{&nbsp;}}'
								+'{\\grp'
									+'{\\str{'
										+'The expression &nbsp; m <sup>3 - (-5 )</sup>&nbsp; includes a double negative.'
										+'<br>'
										+'m <sup>3 - (-5 )</sup>&nbsp; is the same as&nbsp; m <sup>3 + 5</sup>&nbsp; or&nbsp; m <sup>8</sup>'
									+'}}'
								+'}'
						),
		  	helpAnswer: '<br>Simplified Answer: &nbsp;m <sup>8</sup>',
		  	template: 'divisionSimplification' 
		 }
		 ,
		 // prob 18
		 {
		 	problemStatement: dataUtils.pre(
							'\\rowgrp'
								+'{\\grp'
									+'{\\str{Simplify: &nbsp;}}'
									+'{\\str{&nbsp;$$base1}}'
									+'{\\str{ / }}'
									+'{\\exp{\\str{&nbsp;$$base2}}{\\str{$$exp2}}}'
								+'}'
						),
		  	answerInstructions: 'Use parentheses as a part of your answer if necessary.<br><br>',
		 	base1: 'y',
		  	base2: 'y',
		  	exp2: '-2',
			baseans: 'y',
		  	expans: '3',
		  	solutionAnswer: dataUtils.pre(
							'\\rowgrp'
								+'{\\str{$$answerInstructions}}'
								+'{\\grp'
									+'{\\exp{\\input{$$baseans}}{\\input{$$expans}}'
								+'}'
						),
		  	line1: dataUtils.pre(
							'\\str{'
								+'To simplify this quickly, we use the exponent rule \"Division of Same Bases\" '
								+'here. When we divide same bases, we <u>subtract the exponents</u>.'
							+'}'
						),
		  	line2: 'Take the exponent in the numerator and subtract the exponent in the denominator.',
		  	line3: dataUtils.pre(
							'\\rowgrp'
								+'{\\grp'
									+'{\\str{&nbsp;$$base1}}'
									+'{\\str{ / }}'
									+'{\\exp{\\str{&nbsp;$$base2}}{\\str{$$exp2}}}'
									+'{\\str{&nbsp; means &nbsp; y <sup>1 - (-2 )</sup>}}'
								+'}'
								+'{\\html{&nbsp;}}'
								+'{\\grp'
									+'{\\str{'
										+'The expression &nbsp; y <sup>1 - (-2 )</sup>&nbsp; includes a double negative.'
										+'<br>'
										+'y <sup>1 - (-2 )</sup>&nbsp; is the same as&nbsp; y <sup>1 + 2</sup>&nbsp; or&nbsp; y <sup>3</sup>'
									+'}}'
								+'}'
						),
		  	helpAnswer: '<br>Simplified Answer: &nbsp;y <sup>3</sup>',
		  	template: 'divisionSimplification' 
		 }
		  ,
		 // prob 19
		 {
		 	problemStatement: dataUtils.pre(
							'\\rowgrp'
								+'{\\grp'
									+'{\\str{Simplify: &nbsp;}}'
									+'{\\exp{\\str{&nbsp;$$base1}}{\\str{$$exp1}}}'
									+'{\\str{ / }}'
									+'{\\exp{\\str{&nbsp;$$base2}}{\\str{$$exp2}}}'
									+'{\\str{ / }}'
									+'{\\exp{\\str{&nbsp;$$base3}}{\\str{$$exp3}}}'
								+'}'
						),
			wellProblemStatement: dataUtils.pre(
								'\\css'
									+'{\\rowgrp'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\exp{\\str{&nbsp;$$base1}}{\\str{$$exp1}}}'
											+'{\\str{ / }}'
											+'{\\exp{\\str{&nbsp;$$base2}}{\\str{$$exp2}}}'
											+'{\\str{ / }}'
											+'{\\exp{\\str{&nbsp;$$base3}}{\\str{$$exp3}}}'
											+'{\\str{ = }}'
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
		  	answerInstructions: 'Use parentheses as a part of your answer if necessary.<br><br>',
		 	base1: '8',
		 	exp1: '7',
		  	base2: '8',
		  	exp2: '2',
			base3: '8',
		  	exp3: '3',
			baseans: '8',
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
									+'{\\str{'
										+'To simplify this quickly, we use the exponent rule \"Division of Same Bases\" '
										+'here. When we divide same bases, we <u>subtract the exponents</u>.'
									+'}}'
									+'{\\str{&nbsp;}}'
									+'{\\str{'
										+'Take the exponent in the first base and subtract the exponents above the bases of the divisors.'
									+'}}'
						),
		  	line2: '$$base1 <sup>$$exp1</sup> / $$base2 <sup>$$exp2</sup> / $$base3 <sup>$$exp3</sup> &nbsp; means &nbsp; 8 <sup>7 - 2 - 3</sup> &nbsp;or&nbsp; 8 <sup>2</sup>',
		  	line3: '',
		  	helpAnswer: 'Simplified Answer: &nbsp;8 <sup>2</sup>',
			finalAnswer: '64',
		  	template: 'divideEvaluate' 
		 }
		  ,
		 // prob 20
		 {
		 	problemStatement: dataUtils.pre(
							'\\rowgrp'
								+'{\\grp'
									+'{\\str{Simplify: &nbsp;}}'
									+'{\\exp{\\str{&nbsp;$$base1}}{\\str{$$exp1}}}'
									+'{\\str{ / }}'
									+'{\\exp{\\str{&nbsp;$$base2}}{\\str{$$exp2}}}'
									+'{\\str{ / }}'
									+'{\\str{&nbsp;$$base3}}'
								+'}'
						),
			wellProblemStatement: dataUtils.pre(
								'\\css'
									+'{\\rowgrp'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\exp{\\str{&nbsp;$$base1}}{\\str{$$exp1}}}'
											+'{\\str{ / }}'
											+'{\\exp{\\str{&nbsp;$$base2}}{\\str{$$exp2}}}'
											+'{\\str{ / }}'
											+'{\\str{&nbsp;$$base3}}'
											+'{\\str{ = }}'
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
		  	answerInstructions: 'Use parentheses as a part of your answer if necessary.<br><br>',
		 	base1: '11',
		 	exp1: '5',
		  	base2: '11',
		  	exp2: '2',
			base3: '11',
			baseans: '11',
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
									+'{\\str{'
										+'To simplify this quickly, we use the exponent rule \"Division of Same Bases\" '
										+'here. When we divide same bases, we <u>subtract the exponents</u>.'
									+'}}'
									+'{\\str{&nbsp;}}'
									+'{\\str{'
										+'Take the exponent in the first base and subtract the exponents above the bases of the divisors.'
									+'}}'
						),
		  	line2: '$$base1 <sup>$$exp1</sup> / $$base2 <sup>$$exp2</sup> / $$base3 &nbsp; means &nbsp; 11 <sup>5 - 2 - 1</sup> &nbsp;or&nbsp; 11 <sup>2</sup>',
		  	line3: '',
		  	helpAnswer: 'Simplified Answer: &nbsp;11 <sup>2</sup>',
			finalAnswer: '121',
		  	template: 'divideEvaluate' 
		 }
		  ,
		 // prob 21
		 {
		 	problemStatement: dataUtils.pre(
							'\\rowgrp'
								+'{\\str{Simplify: &nbsp;}}'
								+'{\\html{&nbsp;}}'
								+'{\\grp'
									+'{\\exp{\\str{$$base1}}{\\str{$$exp1}}}'
									+'{\\str{ / }}'
									+'{\\exp{\\str{$$base1}}{\\str{$$exp2}}}'
									+'{\\str{ / }}'
									+'{\\exp{\\str{$$base1}}{\\str{$$exp3}}}'
								+'}'
						),
			wellProblemStatement: dataUtils.pre(
								'\\css'
									+'{\\rowgrp'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\exp{\\str{&nbsp;$$base1}}{\\str{$$exp1}}}'
											+'{\\str{ / }}'
											+'{\\exp{\\str{&nbsp;$$base1}}{\\str{$$exp2}}}'
											+'{\\str{ / }}'
											+'{\\exp{\\str{&nbsp;$$base1}}{\\str{$$exp3}}}'
											+'{\\str{ = }}'
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
		  	answerInstructions: 'Use parentheses as a part of your answer if necessary.<br><br>',
		 	base1: '(-5 )',
		 	exp1: ' 3',
		  	exp2: '-5',
			exp3: ' 2',
			baseans: '(-5)',
		  	expans: '6',
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
										+'To simplify this quickly, we use the exponent rule \"Division of Same Bases\" '
										+'here. When we divide same bases, we <u>subtract the exponents</u>.'
									+'}}'
									+'{\\str{&nbsp;}}'
									+'{\\str{'
										+'Take the exponent in the first base and subtract the exponents above the bases of the divisors.'
									+'}}'
						),
		  	line2: '$$base1 <sup>$$exp1</sup> / $$base1 <sup>$$exp2</sup> / $$base1 <sup>$$exp3</sup> &nbsp; means &nbsp; (-5 ) <sup>3 - (-5 ) - 2</sup>',
		  	line3: dataUtils.pre(
								 '\\rowgrp'
									+'{\\str{'
										+'(-5 ) <sup>3 - (-5 ) - 2</sup> &nbsp; is the same as &nbsp; (-5 ) <sup>3 + 5 - 2</sup> &nbsp; or &nbsp; (-5 ) <sup>6</sup>'
									+'}}'
									+'{\\html{&nbsp;}}'
								),
		  	helpAnswer: 'Simplified Answer: &nbsp;(-5 ) <sup>6</sup>',
			finalAnswer: '15625',
		  	template: 'divideEvaluate' 
		 }
		 ,
		 // prob 22
		 {
		 	problemStatement: dataUtils.pre(
							'\\rowgrp'
								+'{\\str{Simplify: &nbsp;}}'
								+'{\\html{&nbsp;}}'
								+'{\\grp'
									+'{\\exp{\\str{$$base1}}{\\str{$$exp1}}}'
									+'{\\str{ / }}'
									+'{\\exp{\\str{$$base1}}{\\str{$$exp2}}}'
									+'{\\str{ / }}'
									+'{\\exp{\\str{$$base1}}{\\str{$$exp3}}}'
								+'}'
						),
			wellProblemStatement: dataUtils.pre(
								'\\css'
									+'{\\rowgrp'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\exp{\\str{&nbsp;$$base1}}{\\str{$$exp1}}}'
											+'{\\str{ / }}'
											+'{\\exp{\\str{&nbsp;$$base1}}{\\str{$$exp2}}}'
											+'{\\str{ / }}'
											+'{\\exp{\\str{&nbsp;$$base1}}{\\str{$$exp3}}}'
											+'{\\str{ = }}'
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
		  	answerInstructions: 'Use parentheses as a part of your answer if necessary.<br><br>',
		 	base1: '(-7 )',
		 	exp1: ' 4',
		  	exp2: '-2',
			exp3: ' 3',
			baseans: '(-7)',
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
									+'{\\str{'
										+'To simplify this quickly, we use the exponent rule \"Division of Same Bases\" '
										+'here. When we divide same bases, we <u>subtract the exponents</u>.'
									+'}}'
									+'{\\str{&nbsp;}}'
									+'{\\str{'
										+'Take the exponent in the first base and subtract the exponents above the bases of the divisors.'
									+'}}'
						),
		  	line2: '$$base1 <sup>$$exp1</sup> / $$base1 <sup>$$exp2</sup> / $$base1 <sup>$$exp3</sup> &nbsp; means &nbsp; $$base1 <sup>4 - (-2 ) - 3</sup>',
		  	line3: dataUtils.pre(
								 '\\rowgrp'
									+'{\\str{'
										+'$$base1 <sup>4 - (-2 ) - 3</sup> &nbsp; is the same as &nbsp; $$base1 <sup>4 + 2 - 3</sup> &nbsp; or &nbsp; $$base1 <sup>3</sup>'
									+'}}'
									+'{\\html{&nbsp;}}'
								),
		  	helpAnswer: 'Simplified Answer: &nbsp;$$base1 <sup>3</sup>',
			finalAnswer: '-343',
		  	template: 'divideEvaluate' 
		 }
		 ,
		 // prob 23
		 {
		 	problemStatement: dataUtils.pre(
							'\\rowgrp'
								+'{\\grp'
									+'{\\str{Simplify: &nbsp;}}'
									+'{\\frac'
										+'{\\exp{\\str{&nbsp;&nbsp;$$base1}}{\\str{$$exp1}}}'
										+'{\\exp{\\str{&nbsp;&nbsp;$$base1}}{\\str{$$exp2}}}'
									+'}'
								+'}'
						),
			wellProblemStatement: dataUtils.pre(
								'\\css'
									+'{\\rowgrp'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\frac'
												+'{\\exp{\\str{&nbsp;&nbsp;$$base1}}{\\str{$$exp1}}}'
												+'{\\exp{\\str{&nbsp;&nbsp;$$base1}}{\\str{$$exp2}}}'
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
		  	answerInstructions: 'Use parentheses as a part of your answer if necessary.<br><br>',
		 	base1: '2',
		 	exp1: ' 3',
		  	exp2: '-5',
			baseans: '2',
		  	expans: '8',
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
										+'To simplify this quickly, we use the exponent rule \"Division of Same Bases\" '
										+'here. When we divide same bases, we <u>subtract the exponents</u>.'
									+'}}'
									+'{\\str{&nbsp;}}'
									+'{\\str{'
										+'Take the exponent in the numerator and subtract the exponent in the denominator.'
									+'}}'
						),
		  	line2: '',
		  	line3: dataUtils.pre(
								 '\\rowgrp'
								 	+'{\\grp'
										+'{\\frac'
												+'{\\exp{\\str{&nbsp;&nbsp;$$base1}}{\\str{$$exp1}}}'
												+'{\\exp{\\str{&nbsp;&nbsp;$$base1}}{\\str{$$exp2}}}'
										+'}'
										+'{\\str{'
											+'&nbsp;means&nbsp; $$base1 <sup>$$exp1 - ($$exp2 )</sup> &nbsp; or &nbsp; $$base1 <sup>$$expans</sup>'
										+'}}'
									+'}'
									+'{\\html{&nbsp;}}'
								),
		  	helpAnswer: 'Simplified Answer: &nbsp;$$base1 <sup>$$expans</sup>',
			finalAnswer: '256',
		  	template: 'divideEvaluate' 
		 }
		 ,
		 // prob 24
		 {
		 	problemStatement: dataUtils.pre(
							'\\rowgrp'
								+'{\\grp'
									+'{\\str{Simplify: &nbsp;}}'
									+'{\\frac'
										+'{\\exp{\\str{&nbsp;&nbsp;$$base1}}{\\str{$$exp1}}}'
										+'{\\exp{\\str{&nbsp;&nbsp;$$base1}}{\\str{$$exp2}}}'
									+'}'
								+'}'
						),
			wellProblemStatement: dataUtils.pre(
								'\\css'
									+'{\\rowgrp'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\frac'
												+'{\\exp{\\str{&nbsp;&nbsp;$$base1}}{\\str{$$exp1}}}'
												+'{\\exp{\\str{&nbsp;&nbsp;$$base1}}{\\str{$$exp2}}}'
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
		  	answerInstructions: 'Use parentheses as a part of your answer if necessary.<br><br>',
		 	base1: '7',
		 	exp1: ' 3',
		  	exp2: '-2',
			baseans: '7',
		  	expans: '5',
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
										+'To simplify this quickly, we use the exponent rule \"Division of Same Bases\" '
										+'here. When we divide same bases, we <u>subtract the exponents</u>.'
									+'}}'
									+'{\\str{&nbsp;}}'
									+'{\\str{'
										+'Take the exponent in the numerator and subtract the exponent in the denominator.'
									+'}}'
						),
		  	line2: '',
		  	line3: dataUtils.pre(
								 '\\rowgrp'
								 	+'{\\grp'
										+'{\\frac'
												+'{\\exp{\\str{&nbsp;&nbsp;$$base1}}{\\str{$$exp1}}}'
												+'{\\exp{\\str{&nbsp;&nbsp;$$base1}}{\\str{$$exp2}}}'
										+'}'
										+'{\\str{'
											+'&nbsp;means&nbsp; $$base1 <sup>$$exp1 - $$exp2</sup> &nbsp; or &nbsp; $$base1 <sup>$$expans</sup>'
										+'}}'
									+'}'
									+'{\\html{&nbsp;}}'
								),
		  	helpAnswer: 'Simplified Answer: &nbsp;$$base1 <sup>$$expans</sup>',
			finalAnswer: '16807',
		  	template: 'divideEvaluate' 
		 }
		 ,
		 // prob 25
		{
		 	problemStatement: dataUtils.pre(
							'\\rowgrp'
								+'{\\grp'
									+'{\\str{Simplify: &nbsp;}}'
									+'{\\frac'
										+'{\\grp'
											+'{\\exp{\\str{&nbsp;&nbsp;$$base1}}{\\str{$$exp1}}}'
											+'{\\str{*}}'
											+'{\\exp{\\str{$$base2}}{\\str{$$exp2}}}'
										+'}'
										+'{\\grp'
											+'{\\exp{\\str{$$base1}}{\\str{$$exp3}}}'
											+'{\\str{*}}'
											+'{\\exp{\\str{$$base2}}{\\str{$$exp4}}}'
										+'}'
									+'}'
								+'}'
						),
		  	answerInstructions: '',
		 	base1: '2',
			base2: '5',
		 	exp1: '4',
		  	exp2: '2',
			exp3: '2',
		  	exp4: '',
			exp5: '1',
			firstExpAns: '2',
			secondExpAns: '',
			solutionAnswer: dataUtils.pre(
							'\\rowgrp'
								+'{\\str{$$answerInstructions}}'
								+'{\\grp'
									+'{\\exp{\\input{$$base1}}{\\input{$$firstExpAns}}}'
									+'{\\str{*}}'
									+'{\\input{$$base2}}'
								+'}'
						),
		  	line1: dataUtils.pre(
								 '\\str{'
										+'To simplify this quickly, we use the exponent rule \"Division of Same Bases\" '
										+'here. When we divide same bases, we <u>subtract the exponents</u>.'
									+'}'
						),
		  	line2: 'Here we have two different bases, bases of $$base1 and bases of $$base2. Simplify each \\"same base\\" separately.',
		  	line3: dataUtils.pre(
							'\\rowgrp'
								+'{\\grp'
									+'{\\frac'
										+'{\\exp{\\str{&nbsp;$$base1}}{\\str{$$exp1}}}'
										+'{\\exp{\\str{&nbsp;$$base1}}{\\str{$$exp3}}}'
									+'}'
									+'{\\str{&nbsp;means&nbsp; $$base1 <sup>$$exp1 - $$exp3</sup> &nbsp; or &nbsp; $$base1 <sup>$$firstExpAns</sup>}}'
								+'}'
								+'{\\str{&nbsp;}}'
								+'{\\grp'
									+'{\\frac'
										+'{\\exp{\\str{&nbsp;$$base2}}{\\str{$$exp2}}}'
										+'{\\exp{\\str{&nbsp;$$base2}}{\\str{$$exp4}}}'
									+'}'
									+'{\\str{&nbsp; means &nbsp; $$base2<sup>&nbsp;$$exp2 - $$exp5</sup> &nbsp;or&nbsp; $$base2<sup>$$secondExpAns</sup>}}'
								+'}'
						),
		  	helpAnswer: '<br>Simplified Answer: &nbsp;$$base1 <sup>$$firstExpAns</sup> * $$base2 <sup>$$secondExpAns</sup>',
		  	template: 'divisionSimplification' 
		 }
		  ,
		 // prob 26
		{
		 	problemStatement: dataUtils.pre(
							'\\rowgrp'
								+'{\\grp'
									+'{\\str{Simplify: &nbsp;}}'
									+'{\\frac'
										+'{\\grp'
											+'{\\exp{\\str{&nbsp;&nbsp;$$base1}}{\\str{$$exp1}}}'
											+'{\\str{*}}'
											+'{\\exp{\\str{$$base2}}{\\str{$$exp2}}}'
										+'}'
										+'{\\grp'
											+'{\\exp{\\str{$$base1}}{\\str{$$exp3}}}'
											+'{\\str{*}}'
											+'{\\exp{\\str{$$base2}}{\\str{$$exp4}}}'
										+'}'
									+'}'
								+'}'
						),
		  	answerInstructions: '',
		 	base1: '3',
			base2: '7',
		 	exp1: '5',
		  	exp2: '4',
			exp3: '2',
		  	exp4: '',
			exp5: '1',
			firstExpAns: '3',
			secondExpAns: '3',
			solutionAnswer: dataUtils.pre(
							'\\rowgrp'
								+'{\\str{$$answerInstructions}}'
								+'{\\grp'
									+'{\\exp{\\input{$$base1}}{\\input{$$firstExpAns}}}'
									+'{\\str{*}}'
									+'{\\exp{\\input{$$base2}}{\\input{$$secondExpAns}}}'
								+'}'
						),
		  	line1: dataUtils.pre(
								 '\\str{'
										+'To simplify this quickly, we use the exponent rule \"Division of Same Bases\" '
										+'here. When we divide same bases, we <u>subtract the exponents</u>.'
									+'}'
						),
		  	line2: 'Here we have two different bases, bases of $$base1 and bases of $$base2. Simplify each \\"same base\\" separately.',
		  	line3: dataUtils.pre(
							'\\rowgrp'
								+'{\\grp'
									+'{\\frac'
										+'{\\exp{\\str{&nbsp;$$base1}}{\\str{$$exp1}}}'
										+'{\\exp{\\str{&nbsp;$$base1}}{\\str{$$exp3}}}'
									+'}'
									+'{\\str{&nbsp;means&nbsp; $$base1 <sup>$$exp1 - $$exp3</sup> &nbsp; or &nbsp; $$base1 <sup>$$firstExpAns</sup>}}'
								+'}'
								+'{\\str{&nbsp;}}'
								+'{\\grp'
									+'{\\frac'
										+'{\\exp{\\str{&nbsp;$$base2}}{\\str{$$exp2}}}'
										+'{\\exp{\\str{&nbsp;$$base2}}{\\str{$$exp4}}}'
									+'}'
									+'{\\str{&nbsp; means &nbsp; $$base2<sup>&nbsp;$$exp2 - $$exp5</sup> &nbsp;or&nbsp; $$base2<sup>&nbsp;$$secondExpAns</sup>}}'
								+'}'
						),
		  	helpAnswer: '<br>Simplified Answer: &nbsp;$$base1 <sup>$$firstExpAns</sup> * $$base2 <sup>$$secondExpAns</sup>',
		  	template: 'divisionSimplification' 
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
