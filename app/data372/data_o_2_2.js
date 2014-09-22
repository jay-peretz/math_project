/*global angular */

angular.module('mathSkills').service('data_o_2_2', ['dataUtils', function (dataUtils) {
    var desc = {
            title: 'O.2.2 Simplifying Exponential Expressions: Division with Same Bases',
            path: 'O.2.2-divide-with-the-same-base',
            children: []
        },
        template = {
			divisionSameBase: {
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
						answer: '\\rowgrp'
									+'{\\str{Use parentheses as a part of your answer <u>if</u> necessary.}}'
									+'{\\html{&nbsp;}}'
									+'{$solutionAnswer}',		
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
						answer: '\\css'
									+'{\\rowgrp'
										+'{\\html{&nbsp;}}'
										+'$problemStatement'
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
		  	template: 'divisionSameBase' 
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
		  	template: 'divisionSameBase' 
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
		  	template: 'divisionSameBase' 
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
		  	template: 'divisionSameBase' 
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
		  	template: 'divisionSameBase' 
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
		  	template: 'divisionSameBase' 
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
		  	template: 'divisionSameBase' 
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
		  	template: 'divisionSameBase' 
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
		  	template: 'divisionSameBase' 
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
		  	template: 'divisionSameBase' 
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
