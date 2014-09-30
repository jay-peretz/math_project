/*global angular */

angular.module('mathSkills').service('data_o_2_1', ['dataUtils', function (dataUtils) {
    var desc = {
            title: 'O.2.1 Simplifying Exponential Expressions: Multiplication with Same Bases',
            path: 'O.2.1-multiply-with-the-same-base',
            children: []
        },
        template = {
			multiplicationSameBase: {
                title: 'Simplifying Exponential Expressions: Multiplication with Same Bases',
				children: [{
					title: 'Main Answer',
					children: [{
						problem: '$problemStatement',
						answer: '\\rowgrp'
									+'{\\str{$answerInstructions}}'
									+'{\\exp{\\input{$baseans}}{\\input{$expans}}',		
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
			multiplicationDiffBase: {
                title: 'Simplifying Exponential Expressions: Multiplication with Same Bases',
				children: [{
					title: 'Main Answer',
					children: [{
						problem: '$problemStatement',
						answer: '\\rowgrp'
									+'{\\str{$problemInstructions}}'
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
			multiplyEvaluate: {
                title: 'Simplifying Exponential Expressions: Multiplication with Same Bases',
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
                            "help": true
						}
					}]
                }]
            },
			multiplyEvaluate2ndHelp: {
                title: 'Simplifying Exponential Expressions: Multiplication with Same Bases',
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
			multiplyFractionsEvaluate: {
                title: 'Simplifying Exponential Expressions: Multiplication with Same Bases',
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
									+'{\\exp{\\str{$$base1}}{\\str{$$exp1}}}'
									+'{\\str{*}}'
									+'{\\exp{\\str{$$base2}}{\\str{$$exp2}}}'
								+'}'
						),
		  	answerInstructions: '',
		 	 base1: '5',
		 	 exp1: '3',
		  	base2: '5',
		  	exp2: '2',
		  	baseans: '5',
		  	expans: '5',
		  	line1: 'In the expression of &nbsp;5<sup>3</sup> * 5<sup>2</sup>,&nbsp; 5<sup>3</sup> means 5 * 5 * 5 and 5<sup>2</sup> means 5 * 5.',
		  	line2:'In fact, 5<sup>3</sup> * 5<sup>2</sup> means (5 * 5 * 5) * (5 * 5)  = 5<sup>5</sup>',
		  	line3: 'To simplify this quickly, we use the exponent rule \\"Multiplication of Same Bases\\" here. When we multiply same bases, we <u>add the exponents</u>.<br><br>'
		  		+'5<sup>3</sup> * 5<sup>2</sup> &nbsp;means&nbsp; 5<sup>3 + 2</sup>  = 5<sup>5</sup>',
		  	helpAnswer: '<br>Simplified Answer: &nbsp;5<sup>5</sup>',
		  	template: 'multiplicationSameBase' 
		 }
		 ,
		 // prob 2
		{
		 	problemStatement: dataUtils.pre(
							'\\rowgrp'
								+'{\\grp'
									+'{\\str{Simplify: &nbsp;}}'
									+'{\\exp{\\str{$$base1}}{\\str{$$exp1}}}'
									+'{\\str{*}}'
									+'{\\exp{\\str{$$base2}}{\\str{$$exp2}}}'
								+'}'
						),
		  	answerInstructions: '',
		  	base1: '2',
		  	exp1: '3',
		  	base2: '2',
		  	exp2: '2',
		  	baseans: '2',
		  	expans: '5',
		  	line1: 'In the expression of &nbsp;2<sup>3</sup> * 2<sup>2</sup>,&nbsp; 2<sup>3</sup> means 2 * 2 * 2 and 2<sup>2</sup> means 2 * 2.',
		  	line2:'In fact, 2<sup>3</sup> * 2<sup>2</sup> means (2 * 2 * 2) * (2 * 2)  = 2<sup>5</sup>',
		  	line3: 'To simplify this quickly, we use the exponent rule \\"Multiplication of Same Bases\\" here. When we multiply same bases, we <u>add the exponents</u>.<br><br>'
		  		+'2<sup>3</sup> * 2<sup>2</sup> &nbsp;means&nbsp; 2<sup>3 + 2</sup>  = 2<sup>5</sup>',
		  	helpAnswer: '<br>Simplified Answer: &nbsp;2<sup>5</sup>',
		  	template: 'multiplicationSameBase' 
		 }
		 ,
		 // prob 3
		{
		 	problemStatement: dataUtils.pre(
							'\\rowgrp'
								+'{\\grp'
									+'{\\str{Simplify: &nbsp;}}'
									+'{\\str{$$base1}}'
									+'{\\str{*}}'
									+'{\\exp{\\str{$$base2}}{\\str{$$exp2}}}'
								+'}'
						),
		  	answerInstructions: '',
		  	base1: '3',
		  	base2: '3',
		  	exp2: '4',
		  	baseans: '3',
		  	expans: '5',
		  	line1: 'In the expression of &nbsp;3 * 3<sup>4</sup>,&nbsp; the base of 3 has an exponent of 1 (every base has an exponent of 1 unless otherwise stated).&nbsp; So 3 is the same as 3<sup>1</sup>.<br>3<sup>4</sup> means 3 * 3 * 3 * 3.',
		  	line2:'In fact, 3 * 3<sup>4</sup> means (3) * (3 * 3 * 3 * 3)  = 3<sup>5</sup>',
		  	line3: 'To simplify this quickly, we use the exponent rule \\"Multiplication of Same Bases\\" here. When we multiply same bases, we <u>add the exponents</u>.<br><br>'
		  		+'3 * 3<sup>4</sup> &nbsp;means&nbsp; 3<sup>1 + 4</sup>  = 3<sup>5</sup>',
		  	helpAnswer: '<br>Simplified Answer: &nbsp;3<sup>5</sup>',
		  	template: 'multiplicationSameBase' 
		 }
		  ,
		 // prob 4
		{
		 	problemStatement: dataUtils.pre(
							'\\rowgrp'
								+'{\\grp'
									+'{\\str{Simplify: &nbsp;}}'
									+'{\\str{$$base1}}'
									+'{\\str{*}}'
									+'{\\exp{\\str{$$base2}}{\\str{$$exp2}}}'
								+'}'
						),
		  	answerInstructions: '',
		  	base1: '7',
		  	base2: '7',
		  	exp2: '2',
		  	baseans: '7',
		  	expans: '3',
		  	line1: 'In the expression of &nbsp;7 * 7<sup>2</sup>,&nbsp; the base of 7 has an exponent of 1 (every base has an exponent of 1 unless otherwise stated).&nbsp; So 7 is the same as 7<sup>1</sup>.<br>7<sup>2</sup> means 7 * 7.',
		  	line2:'In fact, 7 * 7<sup>2</sup> means (7) * (7 * 7)  = 7<sup>3</sup>',
		  	line3: 'To simplify this quickly, we use the exponent rule \\"Multiplication of Same Bases\\" here. When we multiply same bases, we <u>add the exponents</u>.<br><br>'
		  		+'7 * 7<sup>2</sup> &nbsp;means&nbsp; 7<sup>1 + 2</sup>  = 7<sup>3</sup>',
		  	helpAnswer: '<br>Simplified Answer: &nbsp;7<sup>3</sup>',
		  	template: 'multiplicationSameBase' 
		 }
		 ,
		 // prob 5
		{
		 	problemStatement: dataUtils.pre(
							'\\rowgrp'
								+'{\\grp'
									+'{\\str{Simplify: &nbsp;}}'
									+'{\\exp{\\str{$$base1}}{\\str{$$exp1}}}'
									+'{\\str{*}}'
									+'{\\exp{\\str{$$base2}}{\\str{$$exp2}}}'
								+'}'
						),
		  	answerInstructions: 'Use parentheses as a part of your answer <u>if</u> necessary.<br><br>',
		  	base1: '(-3)',
		  	exp1: '3',
		  	base2: '(-3)',
		  	exp2: '2',
		  	baseans: '(-3)',
		  	expans: '5',
		  	line1: 'To simplify this quickly, we use the exponent rule \\"Multiplication of Same Bases\\" here. When we multiply same bases, we <u>add the exponents</u>.',
		  	line2:'In this problem, the \\"same base\\" is the -3, which must be put inside a parenthesis.',
		  	line3: '(-3)<sup>3</sup> * (-3)<sup>2</sup> &nbsp;means&nbsp; (-3)<sup>3 + 2</sup>  = (-3)<sup>5</sup>',
		  	helpAnswer: '<br>Simplified Answer: &nbsp;(-3)<sup>5</sup>',
		  	template: 'multiplicationSameBase' 
		 }
		 ,
		    // prob 6
		 {
		 	problemStatement: dataUtils.pre(
							'\\rowgrp'
								+'{\\grp'
									+'{\\str{Simplify: &nbsp;}}'
									+'{\\exp{\\str{$$base1}}{\\str{$$exp1}}}'
									+'{\\str{*}}'
									+'{\\exp{\\str{$$base2}}}'
								+'}'
						),
		  	answerInstructions: 'Use parentheses as a part of your answer <u>if</u> necessary.<br><br>',
		  	base1: '(-5)',
		  	exp1: '5',
		  	base2: '(-5)',
		  	baseans: '(-5)',
		  	expans: '6',
		  	line1: 'To simplify this quickly, we use the exponent rule \\"Multiplication of Same Bases\\" here. When we multiply same bases, we <u>add the exponents</u>.',
		  	line2:'In this problem, the \\"same base\\" is the -5, which must be put inside a parenthesis.',
		  	line3: '(-5)<sup>5</sup> * (-5)<sup>1</sup> &nbsp;means&nbsp; (-5)<sup>5 + 1</sup>  = (-5)<sup>6</sup>',
		  	helpAnswer: '<br>Simplified Answer: &nbsp;(-5)<sup>6</sup>',
		  	template: 'multiplicationSameBase' 
		  }
		   ,
		 // prob 7
		{
		 	problemStatement: dataUtils.pre(
							'\\rowgrp'
								+'{\\grp'
									+'{\\str{Simplify: &nbsp;}}'
									+'{\\exp{\\str{$$base1}}{\\str{$$exp1}}}'
									+'{\\str{*}}'
									+'{\\exp{\\str{$$base2}}}'
									+'{\\str{*}}'
									+'{\\exp{\\str{$$base3}}{\\str{$$exp3}}}'
								+'}'
						),
		  	answerInstructions: 'Use parentheses as a part of your answer <u>if</u> necessary.<br><br>',
		  	base1: '4',
		  	exp1: '3',
		  	base2: '4',
			base3: '4',
		  	exp3: '6',
		  	baseans: '4',
		  	expans: '10',
		  	line1: 'To simplify this quickly, we use the exponent rule \\"Multiplication of Same Bases\\" here. When we multiply same bases, we <u>add the exponents</u>.',
		  	line2:'4<sup>3</sup>* 4 * 4<sup>6</sup> &nbsp;means&nbsp; 4<sup>3 + 1 + 6</sup>  = 4<sup>10</sup>',
		  	line3: '',
		  	helpAnswer: 'Simplified Answer: &nbsp;4<sup>10</sup>',
		  	template: 'multiplicationSameBase' 
		 }
		    ,
		 // prob 8
		{
		 	problemStatement: dataUtils.pre(
							'\\rowgrp'
								+'{\\grp'
									+'{\\str{Simplify: &nbsp;}}'
									+'{\\exp{\\str{$$base1}}{\\str{$$exp1}}}'
									+'{\\str{*}}'
									+'{\\exp{\\str{$$base2}}{\\str{$$exp2}}}'
									+'{\\str{*}}'
									+'{\\exp{\\str{$$base3}}}'
								+'}'
						),
		  	answerInstructions: 'Use parentheses as a part of your answer <u>if</u> necessary.<br><br>',
		  	base1: '3',
		  	exp1: '2',
		  	base2: '3',
			exp2: '2',
			base3: '3',
		  	baseans: '3',
		  	expans: '5',
		  	line1: 'To simplify this quickly, we use the exponent rule \\"Multiplication of Same Bases\\" here. When we multiply same bases, we <u>add the exponents</u>.',
		  	line2:'3<sup>2</sup> * 3<sup>2</sup> * 3 &nbsp;means&nbsp; 3<sup>2 + 2 + 1</sup>  = 3<sup>5</sup>',
		  	line3: '',
		  	helpAnswer: 'Simplified Answer: &nbsp;3<sup>5</sup>',
		  	template: 'multiplicationSameBase' 
		 }
		     ,
		 // prob 9
		{
		 	problemStatement: dataUtils.pre(
							'\\rowgrp'
								+'{\\grp'
									+'{\\str{Simplify: &nbsp;}}'
									+'{\\exp{\\str{$$base1}}{\\str{$$exp1}}}'
									+'{\\str{*}}'
									+'{\\exp{\\str{$$base2}}{\\str{$$exp2}}}'
									+'{\\str{*}}'
									+'{\\exp{\\str{$$base3}}}'
								+'}'
						),
		  	answerInstructions: 'Use parentheses as a part of your answer <u>if</u> necessary.<br><br>',
		  	base1: '2',
		  	exp1: '3',
		  	base2: '2',
			exp2: '-2',
			base3: '2',
		  	baseans: '2',
		  	expans: '2',
		  	line1: 'To simplify this quickly, we use the exponent rule \\"Multiplication of Same Bases\\" here. When we multiply same bases, we <u>add the exponents</u>.',
		  	line2:'2<sup>3</sup> * 2<sup>(-2)</sup> * 2 &nbsp;means&nbsp; 2<sup>3 + (-2) + 1</sup>  = 2<sup>2</sup>',
		  	line3: '',
		  	helpAnswer: 'Simplified Answer: &nbsp;2<sup>2</sup>',
		  	template: 'multiplicationSameBase' 
		 }
		 ,
		 // prob 10
		 {
		 	problemStatement: dataUtils.pre(
							'\\rowgrp'
								+'{\\grp'
									+'{\\str{Simplify: &nbsp;}}'
									+'{\\exp{\\str{$$base1}}{\\str{$$exp1}}}'
									+'{\\str{*}}'
									+'{\\exp{\\str{$$base2}}{\\str{$$exp2}}}'
									+'{\\str{*}}'
									+'{\\exp{\\str{$$base3}}}'
								+'}'
						),
		  	answerInstructions: 'Use parentheses as a part of your answer <u>if</u> necessary.<br><br>',
		  	base1: '5',
		  	exp1: '4',
		  	base2: '5',
			exp2: '-1',
			base3: '5',
		  	baseans: '5',
		  	expans: '4',
		  	line1: 'To simplify this quickly, we use the exponent rule \\"Multiplication of Same Bases\\" here. When we multiply same bases, we <u>add the exponents</u>.',
		  	line2:'5<sup>4</sup> * 5<sup>-1</sup> * 5 &nbsp;means&nbsp; 5<sup>4 + (-1) + 1</sup>  = 5<sup>4</sup>',
		  	line3: '',
		  	helpAnswer: 'Simplified Answer: &nbsp;5<sup>4</sup>',
		  	template: 'multiplicationSameBase' 
		 }
		 ,
		 // prob 11
		 {
		 	problemStatement: dataUtils.pre(
							'\\rowgrp'
								+'{\\grp'
									+'{\\str{Simplify: &nbsp;}}'
									+'{\\exp{\\str{$$base1}}{\\str{$$exp1}}}'
									+'{\\str{*}}'
									+'{\\exp{\\str{$$base2}}{\\str{$$exp2}}}'
									+'{\\str{*}}'
									+'{\\exp{\\str{$$base3}}{\\str{$$exp3}}}'
								+'}'
						),
		  	answerInstructions: 'Use parentheses as a part of your answer <u>if</u> necessary.<br><br>',
		  	base1: '(-6)',
		  	exp1: '-2',
		  	base2: '(-6)',
			exp2: '-1',
			base3: '(-6)',
			exp3: '5',
		  	baseans: '(-6)',
		  	expans: '2',
		  	line1: 'To simplify this quickly, we use the exponent rule \\"Multiplication of Same Bases\\" here. When we multiply same bases, we <u>add the exponents</u>.',
		  	line2:'(-6)<sup>-2</sup> * (-6)<sup>-1</sup> * (-6)<sup>5</sup> &nbsp;means&nbsp; (-6)<sup>(-2) + (-1) + 5</sup>  = (-6)<sup>2</sup>',
		  	line3: '',
		  	helpAnswer: 'Simplified Answer: &nbsp;(-6)<sup>2</sup>',
		  	template: 'multiplicationSameBase' 
		 	}
			,
		 	// prob 12
		 	{
		 	problemStatement: dataUtils.pre(
							'\\rowgrp'
								+'{\\grp'
									+'{\\str{Simplify: &nbsp;}}'
									+'{\\exp{\\str{$$base1}}{\\str{$$exp1}}}'
									+'{\\str{*}}'
									+'{\\exp{\\str{$$base2}}{\\str{$$exp2}}}'
									+'{\\str{*}}'
									+'{\\exp{\\str{$$base3}}{\\str{$$exp3}}}'
								+'}'
						),
		  	answerInstructions: 'Use parentheses as a part of your answer <u>if</u> necessary.<br><br>',
		  	base1: '(-2)',
		  	exp1: '-1',
		  	base2: '(-2)',
			exp2: '-3',
			base3: '(-2)',
			exp3: '7',
		  	baseans: '(-2)',
		  	expans: '3',
		  	line1: 'To simplify this quickly, we use the exponent rule \\"Multiplication of Same Bases\\" here. When we multiply same bases, we <u>add the exponents</u>.',
		  	line2:'(-2)<sup>-1</sup> * (-2)<sup>-3</sup> * (-2)<sup>7</sup> &nbsp;means&nbsp; (-2)<sup>(-1) + (-3) + 7</sup>  = (-2)<sup>3</sup>',
		  	line3: '',
		  	helpAnswer: 'Simplified Answer: &nbsp;(-2)<sup>3</sup>',
		  	template: 'multiplicationSameBase' 
		 	}
			,
		 	// prob 13
		 	{
		 	problemStatement: dataUtils.pre(
							'\\rowgrp'
								+'{\\grp'
									+'{\\str{Simplify: &nbsp;}}'
									+'{\\exp{\\str{$$base1}}{\\str{$$exp1}}}'
									+'{\\str{*}}'
									+'{\\exp{\\str{$$base2}}}'
									+'{\\str{*}}'
									+'{\\exp{\\str{$$base3}}{\\str{$$exp3}}}'
									+'{\\str{*}}'
									+'{\\exp{\\str{$$base4}}{\\str{$$exp4}}}'
								+'}'
						),
		  	base1: '2',
		  	exp1: '4',
		  	base2: '2',
			base3: '3',
			exp3: '5',
			base4: '3',
			exp4: '2',
			solutionAnswer: dataUtils.pre(
								'\\grp'
									+'{\\exp{\\input{[$$firstAnsBase,$$secondAnsBase]}}{\\input{[$$firstAnsExp,$$secondAnsExp]}}}'
									+'{\\str{*}}'
									+'{\\exp{\\input{[$$secondAnsBase,$$firstAnsBase]}}{\\input{[$$secondAnsExp,$$firstAnsExp]}}}'
						),
		  	firstAnsBase: '2',
			firstAnsExp: '5',
			secondAnsBase: '3',
			secondAnsExp: '7',
		  	line1: 'To simplify this quickly, we use the exponent rule \\"Multiplication of Same Bases\\" here. When we multiply same bases, we <u>add the exponents</u>.',
		  	line2:'2<sup>4</sup> * 2 &nbsp;means&nbsp; 2<sup>4 + 1</sup> or 2<sup>5</sup>',
		  	line3: '3<sup>5</sup> * 3<sup>2</sup> &nbsp;means&nbsp; 3<sup>5 + 2</sup> or 3<sup>7</sup>',
		  	helpAnswer: '<br>Simplified Answer: &nbsp;2<sup>5</sup> * 3<sup>7</sup>',
		  	problemInstructions: 'Use parentheses as a part of your answer <u>if</u> necessary.',
            template: 'multiplicationDiffBase'
            }
			,
		 	// prob 14
		 	{
		 	problemStatement: dataUtils.pre(
							'\\rowgrp'
								+'{\\grp'
									+'{\\str{Simplify: &nbsp;}}'
									+'{\\exp{\\str{$$base1}}}'
									+'{\\str{*}}'
									+'{\\exp{\\str{$$base2}}{\\str{$$exp2}}}'
									+'{\\str{*}}'
									+'{\\exp{\\str{$$base3}}{\\str{$$exp3}}}'
									+'{\\str{*}}'
									+'{\\exp{\\str{$$base4}}{\\str{$$exp4}}}'
								+'}'
						),
		  	base1: '3',
		  	base2: '3',
			exp2: '3',
			base3: '7',
			exp3: '3',
			base4: '7',
			exp4: '2',
			solutionAnswer: dataUtils.pre(
								'\\grp'
									+'{\\exp{\\input{[$$firstAnsBase,$$secondAnsBase]}}{\\input{[$$firstAnsExp,$$secondAnsExp]}}}'
									+'{\\str{*}}'
									+'{\\exp{\\input{[$$secondAnsBase,$$firstAnsBase]}}{\\input{[$$secondAnsExp,$$firstAnsExp]}}}'
						),
		  	firstAnsBase: '3',
			firstAnsExp: '4',
			secondAnsBase: '7',
			secondAnsExp: '5',
		  	line1: 'To simplify this quickly, we use the exponent rule \\"Multiplication of Same Bases\\" here. When we multiply same bases, we <u>add the exponents</u>.',
		  	line2:'3 * 3<sup>3</sup> &nbsp;means&nbsp; 3<sup>1 + 3</sup> or 3<sup>4</sup>',
		  	line3: '7<sup>3</sup> * 7<sup>2</sup> &nbsp;means&nbsp; 7<sup>3 + 2</sup> or 7<sup>5</sup>',
		  	helpAnswer: '<br>Simplified Answer: &nbsp;3<sup>4</sup> * 7<sup>5</sup>',
		  	problemInstructions: 'Use parentheses as a part of your answer <u>if</u> necessary.',
            template: 'multiplicationDiffBase'
            }
			,
		 	// prob 15
		 	{
		 	problemStatement: dataUtils.pre(
							'\\rowgrp'
								+'{\\grp'
									+'{\\str{Simplify: &nbsp;}}'
									+'{\\exp{\\str{$$base1}}{\\str{$$exp1}}}'
									+'{\\str{*}}'
									+'{\\exp{\\str{$$base2}}{\\str{$$exp2}}}'
									+'{\\str{*}}'
									+'{\\exp{\\str{$$base3}}{\\str{$$exp3}}}'
									+'{\\str{*}}'
									+'{\\exp{\\str{$$base4}}{\\str{$$exp4}}}'
								+'}'
						),
		  	base1: '11',
			exp1: '3',
		  	base2: '11',
			exp2: '-2',
			base3: '5',
			exp3: '-4',
			base4: '5',
			exp4: '5',
			solutionAnswer: dataUtils.pre(
								'\\grp'
									+'{\\input{[$$firstAnsBase,$$secondAnsBase]}}'
									+'{\\str{*}}'
									+'{\\input{[$$secondAnsBase,$$firstAnsBase]}}'
						),
		  	firstAnsBase: '11',
			secondAnsBase: '5',
		  	line1: 'To simplify this quickly, we use the exponent rule \\"Multiplication of Same Bases\\" here. When we multiply same bases, we <u>add the exponents</u>.',
		  	line2:'11<sup>3</sup> * 11<sup>-2</sup> &nbsp;means&nbsp; 11<sup>3 + (-2)</sup> &nbsp;or&nbsp; 11<sup>1</sup> = 11',
		  	line3: '5<sup>-4</sup> * 5<sup>5</sup> &nbsp;means&nbsp; 5<sup>(-4) + 5</sup> &nbsp;or&nbsp; 5<sup>1</sup> = 5',
		  	helpAnswer: '<br>Simplified Answer: &nbsp;11 * 5',
		  	problemInstructions: 'Use parentheses as a part of your answer <u>if</u> necessary.',
            template: 'multiplicationDiffBase'
            }
			,
		 	// prob 16
		 	{
		 	problemStatement: dataUtils.pre(
							'\\rowgrp'
								+'{\\grp'
									+'{\\str{Simplify: &nbsp;}}'
									+'{\\exp{\\str{$$base1}}{\\str{$$exp1}}}'
									+'{\\str{*}}'
									+'{\\exp{\\str{$$base2}}{\\str{$$exp2}}}'
									+'{\\str{*}}'
									+'{\\exp{\\str{$$base3}}{\\str{$$exp3}}}'
									+'{\\str{*}}'
									+'{\\exp{\\str{$$base4}}{\\str{$$exp4}}}'
								+'}'
						),
		  	base1: '2',
			exp1: '6',
		  	base2: '2',
			exp2: '-3',
			base3: '13',
			exp3: '-2',
			base4: '13',
			exp4: '3',
			solutionAnswer: dataUtils.pre(
								'\\grp'
									+'{\\exp{\\input{$$firstAnsBase}}{\\input{$$firstAnsExp}}}'
									+'{\\str{*}}'
									+'{\\input{$$secondAnsBase}}'
						),
			
		  	firstAnsBase: '2',
			firstAnsExp: '3',
			secondAnsBase: '13',
		  	line1: 'To simplify this quickly, we use the exponent rule \\"Multiplication of Same Bases\\" here. When we multiply same bases, we <u>add the exponents</u>.',
		  	line2:'2<sup>6</sup> * 2<sup>-3</sup> &nbsp;means&nbsp; 2<sup>6 + (-3)</sup> &nbsp;or&nbsp; 2<sup>3</sup>',
		  	line3: '13<sup>-2</sup> * 13<sup>3</sup> &nbsp;means&nbsp; 13<sup>(-2) + 3</sup> &nbsp;or&nbsp; 13<sup>1</sup> = 13',
		  	helpAnswer: '<br>Simplified Answer: &nbsp;2<sup>3</sup> * 13',
		  	problemInstructions: 'Use parentheses as a part of your answer <u>if</u> necessary.',
            template: 'multiplicationDiffBase'
            }
			,
		 	// prob 17
		 	{
		 	problemStatement: dataUtils.pre(
							'\\rowgrp'
								+'{\\grp'
									+'{\\str{Simplify: &nbsp;}}'
									+'{\\exp{\\str{$$base1}}{\\str{$$exp1}}}'
									+'{\\str{*}}'
									+'{\\exp{\\str{$$base2}}{\\str{$$exp2}}}'
									+'{\\str{*}}'
									+'{\\exp{\\str{$$base3}}{\\str{$$exp3}}}'
								+'}'
						),
		  	base1: '8',
			exp1: '-2',
		  	base2: '3',
			exp2: '5',
			base3: '8',
			exp3: '4',
			solutionAnswer: dataUtils.pre(
								'\\grp'
									+'{\\exp{\\input{[$$firstAnsBase,$$secondAnsBase]}}{\\input{[$$firstAnsExp,$$secondAnsExp]}}}'
									+'{\\str{*}}'
									+'{\\exp{\\input{[$$secondAnsBase,$$firstAnsBase]}}{\\input{[$$secondAnsExp,$$firstAnsExp]}}}'
						),
		  	firstAnsBase: '3',
			firstAnsExp: '5',
			secondAnsBase: '8',
			secondAnsExp: '2',
		  	line1: 'To simplify this quickly, we use the exponent rule \\"Multiplication of Same Bases\\" here. When we multiply same bases, we <u>add the exponents</u>.',
		  	line2:'The only value with a base of 3 is 3<sup>5</sup>.&nbsp; This will stay the same.',
		  	line3: '8<sup>-2</sup> * 8<sup>4</sup> &nbsp;means&nbsp; 8<sup>(-2) + 4</sup> &nbsp;or&nbsp; 8<sup>2</sup>',
		  	helpAnswer: '<br>Simplified Answer: &nbsp;3<sup>5</sup> * 8<sup>2</sup>',
		  	problemInstructions: 'Use parentheses as a part of your answer <u>if</u> necessary.',
            template: 'multiplicationDiffBase'
            }
			,
		 	// prob 18
		 	{
		 	problemStatement: dataUtils.pre(
							'\\rowgrp'
								+'{\\grp'
									+'{\\str{Simplify: &nbsp;}}'
									+'{\\exp{\\str{$$base1}}{\\str{$$exp1}}}'
									+'{\\str{*}}'
									+'{\\exp{\\str{$$base2}}{\\str{$$exp2}}}'
									+'{\\str{*}}'
									+'{\\exp{\\str{$$base3}}{\\str{$$exp3}}}'
								+'}'
						),
		  	base1: '5',
			exp1: '3',
		  	base2: '4',
			exp2: '5',
			base3: '5',
			exp3: '-2',
			solutionAnswer: dataUtils.pre(
								'\\grp'
									+'{\\exp{\\input{$$firstAnsBase}}{\\input{$$firstAnsExp}}}'
									+'{\\str{*}}'
									+'{\\input{$$secondAnsBase}}'
						),
			
		  	firstAnsBase: '4',
			firstAnsExp: '5',
			secondAnsBase: '5',
		  	line1: 'To simplify this quickly, we use the exponent rule \\"Multiplication of Same Bases\\" here. When we multiply same bases, we <u>add the exponents</u>.',
		  	line2:'The only value with a base of 4 is 4<sup>5</sup>.&nbsp; This will stay the same.',
		  	line3: '5<sup>3</sup> * 5<sup>-2</sup> &nbsp;means&nbsp; 5<sup>3 + (-2)</sup> &nbsp;or&nbsp; 5<sup>1</sup> = 5',
		  	helpAnswer: '<br>Simplified Answer: &nbsp;4<sup>5</sup> * 5',
		  	problemInstructions: 'Use parentheses as a part of your answer <u>if</u> necessary.',
            template: 'multiplicationDiffBase'
            }
			,
		 	// prob 19
		 	{
		 	problemStatement: dataUtils.pre(
							'\\pan{12}{11}'
								+'{\\rowgrp'
									+'{\\grp'
										+'{\\str{Simplify: &nbsp;}}'
										+'{\\exp{\\str{$$base1}}{\\str{$$exp1}}}'
										+'{\\str{*}}'
										+'{\\exp{\\str{$$base2}}{\\str{$$exp2}}}'
										+'{\\str{*}}'
										+'{\\exp{\\str{$$base3}}{\\str{$$exp3}}}'
										+'{\\str{*}}'
										+'{\\exp{\\str{$$base4}}{\\str{$$exp4}}}'
										+'{\\str{*}}'
										+'{\\exp{\\str{$$base5}}{\\str{$$exp5}}}'
									+'}'
								+'}'
						),
		  	base1: '2',
			exp1: '-1',
		  	base2: '(-3)',
			exp2: '4',
			base3: '(-3)',
			exp3: '4',
			base4: '7',
			exp4: '3',
			base5: '2',
			exp5: '3',
			solutionAnswer: dataUtils.pre(
								'\\grp'
									+'{\\exp{\\input{$$firstAnsBase}}{\\input{$$firstAnsExp}}}'
									+'{\\str{*}}'
									+'{\\exp{\\input{$$secondAnsBase}}{\\input{$$secondAnsExp}}}'
									+'{\\str{*}}'
									+'{\\exp{\\input{$$thirdAnsBase}}{\\input{$$thirdAnsExp}}}'
						),
		  	firstAnsBase: '2',
			firstAnsExp: '2',
			secondAnsBase: '(-3)',
			secondAnsExp: '8',
			thirdAnsBase: '7',
			thirdAnsExp: '3',
		  	line1: 'To simplify this quickly, we use the exponent rule \\"Multiplication of Same Bases\\" here. When we multiply same bases, we <u>add the exponents</u>.',
		  	line2:'2<sup>-1</sup> * 2<sup>3</sup> &nbsp;means&nbsp; 2<sup>(-1) + 3</sup> &nbsp;or&nbsp; 2<sup>2</sup>',
		  	line3: '(-3)<sup>4</sup> * (-3)<sup>4</sup> &nbsp;means&nbsp; (-3)<sup>4 + 4</sup> &nbsp;or&nbsp; (-3)<sup>8</sup>'
					+'<br><br>'
					+'The only value with a base of 7 is 7<sup>3</sup>.&nbsp; This will stay the same.',
		  	helpAnswer: '<br>Simplified Answer: &nbsp;2<sup>2</sup> * (-3)<sup>8</sup> * 7<sup>3</sup>',
		  	problemInstructions: 'Write the bases in numerical order, from smallest to largest.'
								+'<br>'
								+'Use parentheses as a part of your answer <u>if</u> necessary.',
            template: 'multiplicationDiffBase'
            }
			,
		 	// prob 20
		 	{
		 	problemStatement: dataUtils.pre(
							'\\pan{12}{11}'
								+'{\\rowgrp'
									+'{\\grp'
										+'{\\str{Simplify: &nbsp;}}'
										+'{\\exp{\\str{$$base1}}{\\str{$$exp1}}}'
										+'{\\str{*}}'
										+'{\\exp{\\str{$$base2}}{\\str{$$exp2}}}'
										+'{\\str{*}}'
										+'{\\exp{\\str{$$base3}}{\\str{$$exp3}}}'
										+'{\\str{*}}'
										+'{\\exp{\\str{$$base4}}{\\str{$$exp4}}}'
										+'{\\str{*}}'
										+'{\\exp{\\str{$$base5}}{\\str{$$exp5}}}'
									+'}'
								+'}'
						),
		  	base1: '5',
			exp1: '4',
		  	base2: '(-9)',
			exp2: '-3',
			base3: '2',
			exp3: '3',
			base4: '5',
			exp4: '-3',
			base5: '(-9)',
			exp5: '7',
			solutionAnswer: dataUtils.pre(
								'\\grp'
									+'{\\exp{\\input{[$$firstAnsBase,$$thirdAnsBase]}}{\\input{[$$firstAnsExp,$$thirdAnsExp]}}}'
									+'{\\str{*}}'
									+'{\\input{$$secondAnsBase}}'
									+'{\\str{*}}'
									+'{\\exp{\\input{[$$thirdAnsBase,$$firstAnsBase]}}{\\input{[$$thirdAnsExp,$$firstAnsExp]}}}'
						),
			
		  	firstAnsBase: '2',
			firstAnsExp: '3',
			secondAnsBase: '5',
			thirdAnsBase: '"(-9)"',
			thirdAnsExp: '4',
		  	line1: 'To simplify this quickly, we use the exponent rule \\"Multiplication of Same Bases\\" here. When we multiply same bases, we <u>add the exponents</u>.',
		  	line2:'The only value with a base of 2 is 2<sup>3</sup>.&nbsp; This will stay the same.',
		  	line3: '5<sup>4</sup> * 5<sup>-3</sup> &nbsp;means&nbsp; 5<sup>4 + (-3)</sup> &nbsp;or&nbsp; 5<sup>1</sup> = 5'
					+'<br><br>'
					+'(-9)<sup>-3</sup> * (-9)<sup>7</sup> &nbsp;means&nbsp; (-9)<sup>-3 + 7</sup> &nbsp;or&nbsp; (-9)<sup>4</sup>',
		  	helpAnswer: '<br>Simplified Answer: &nbsp;2<sup>3</sup> * 5 * (-9)<sup>4</sup>',
		  	problemInstructions: 'Write the bases in numerical order, from smallest to largest.'
								+'<br>'
								+'Use parentheses as a part of your answer <u>if</u> necessary.',
            template: 'multiplicationDiffBase'
            }
			,
		 	// prob 21
		 	{
		 	problemStatement: dataUtils.pre(
							'\\rowgrp'
								+'{\\grp'
									+'{\\str{Simplify: &nbsp;}}'
									+'{\\exp{\\str{$$base1}}{\\str{$$exp1}}}'
									+'{\\str{*}}'
									+'{\\exp{\\str{$$base2}}{\\str{$$exp2}}}'
									+'{\\str{*}}'
									+'{\\exp{\\str{$$base3}}{\\str{$$exp3}}}'
								+'}'
						),
		  	base1: 'a',
			exp1: '5',
		  	base2: 'a',
			exp2: '-2',
			base3: 'a',
			exp3: '3',
			solutionAnswer: dataUtils.pre(
								'\\grp'
									+'{\\exp{\\input{$$firstAnsBase}}{\\input{$$firstAnsExp}}}'
						),
			
		  	firstAnsBase: 'a',
			firstAnsExp: '6',
		  	line1: 'To simplify this quickly, we use the exponent rule \\"Multiplication of Same Bases\\" here. When we multiply same bases, we <u>add the exponents</u>.',
		  	line2:'a<sup>5</sup> * a<sup>-2</sup> * a<sup>3</sup> &nbsp;means&nbsp; a<sup>5 + (-2) + 3</sup> &nbsp;or&nbsp; a<sup>6</sup>',
		  	line3: '',
		  	helpAnswer: '<br>Simplified Answer: &nbsp;a<sup>6</sup>',
		  	problemInstructions: 'Use parentheses as a part of your answer <u>if</u> necessary.',
            template: 'multiplicationDiffBase'
            }
			,
		 	// prob 22
		 	{
		 	problemStatement: dataUtils.pre(
							'\\rowgrp'
								+'{\\grp'
									+'{\\str{Simplify: &nbsp;}}'
									+'{\\exp{\\str{$$base1}}{\\str{$$exp1}}}'
									+'{\\str{*}}'
									+'{\\exp{\\str{$$base2}}{\\str{$$exp2}}}'
									+'{\\str{*}}'
									+'{\\exp{\\str{$$base3}}{\\str{$$exp3}}}'
								+'}'
						),
		  	base1: 'b',
			exp1: '4',
		  	base2: 'b',
			exp2: '-6',
			base3: 'b',
			exp3: '5',
			solutionAnswer: dataUtils.pre(
								'\\grp'
									+'{\\exp{\\input{$$firstAnsBase}}{\\input{$$firstAnsExp}}}'
						),
			
		  	firstAnsBase: 'b',
			firstAnsExp: '3',
		  	line1: 'To simplify this quickly, we use the exponent rule \\"Multiplication of Same Bases\\" here. When we multiply same bases, we <u>add the exponents</u>.',
		  	line2:'b<sup>4</sup> * b<sup>-6</sup> * b<sup>5</sup> &nbsp;means&nbsp; b<sup>4 + (-6) + 5</sup> &nbsp;or&nbsp; b<sup>3</sup>',
		  	line3: '',
		  	helpAnswer: '<br>Simplified Answer: &nbsp;b<sup>3</sup>',
		  	problemInstructions: 'Use parentheses as a part of your answer <u>if</u> necessary.',
            template: 'multiplicationDiffBase'
            }
			,
		 	// prob 23
		 	{
		 	problemStatement: dataUtils.pre(
							'\\pan{12}{11}'
								+'{\\rowgrp'
									+'{\\grp'
										+'{\\str{Simplify: &nbsp;}}'
										+'{\\exp{\\str{$$base1}}{\\str{$$exp1}}}'
										+'{\\str{*}}'
										+'{\\exp{\\str{$$base2}}{\\str{$$exp2}}}'
										+'{\\str{*}}'
										+'{\\exp{\\str{$$base3}}{\\str{$$exp3}}}'
										+'{\\str{*}}'
										+'{\\exp{\\str{$$base4}}{\\str{$$exp4}}}'
										+'{\\str{*}}'
										+'{\\exp{\\str{$$base5}}{\\str{$$exp5}}}'
									+'}'
								+'}'
						),
		  	base1: 'x',
			exp1: '3',
		  	base2: 'y',
			exp2: '4',
			base3: 'x',
			exp3: '-1',
			base4: 'y',
			exp4: '2',
			base5: 'z',
			exp5: '2',
			solutionAnswer: dataUtils.pre(
								'\\grp'
									+'{\\exp{\\input{$$firstAnsBase}}{\\input{$$firstAnsExp}}}'
									+'{\\str{*}}'
									+'{\\exp{\\input{$$secondAnsBase}}{\\input{$$secondAnsExp}}}'
									+'{\\str{*}}'
									+'{\\exp{\\input{$$thirdAnsBase}}{\\input{$$thirdAnsExp}}}'
						),
			
		  	firstAnsBase: 'x',
			firstAnsExp: '2',
			secondAnsBase: 'y',
			secondAnsExp: '6',
			thirdAnsBase: 'z',
			thirdAnsExp: '2',
		  	line1: 'To simplify this quickly, we use the exponent rule \\"Multiplication of Same Bases\\" here. When we multiply same bases, we <u>add the exponents</u>.',
		  	line2: 'x<sup>3</sup> * x<sup>-1</sup> &nbsp;means&nbsp; x<sup>3 + (-1)</sup> &nbsp;or&nbsp; x<sup>2</sup>'
					+'<br><br>'
					+'y<sup>4</sup> * y<sup>2</sup> &nbsp;means&nbsp; y<sup>4 + 2</sup> &nbsp;or&nbsp; y<sup>6</sup>',
			line3:'The only value with a base of z is z<sup>2</sup>.&nbsp; This will stay the same.',
		  	helpAnswer: '<br>Simplified Answer: &nbsp;x<sup>2</sup> * y<sup>6</sup> * z<sup>2</sup>',
		  	problemInstructions: 'Write the bases in alphabetical order.'
								+'<br>'
								+'Use parentheses as a part of your answer <u>if</u> necessary.',
            template: 'multiplicationDiffBase'
            }
			,
		 	// prob 24
		 	{
		 	problemStatement: dataUtils.pre(
							'\\pan{12}{11}'
								+'{\\rowgrp'
									+'{\\grp'
										+'{\\str{Simplify: &nbsp;}}'
										+'{\\exp{\\str{$$base1}}{\\str{$$exp1}}}'
										+'{\\str{*}}'
										+'{\\exp{\\str{$$base2}}{\\str{$$exp2}}}'
										+'{\\str{*}}'
										+'{\\exp{\\str{$$base3}}{\\str{$$exp3}}}'
										+'{\\str{*}}'
										+'{\\exp{\\str{$$base4}}{\\str{$$exp4}}}'
										+'{\\str{*}}'
										+'{\\exp{\\str{$$base5}}{\\str{$$exp5}}}'
									+'}'
								+'}'
						),
		  	base1: 'm',
			exp1: '2',
		  	base2: 'o',
			exp2: '-3',
			base3: 'n',
			exp3: '-3',
			base4: 'o',
			exp4: '4',
			base5: 'n',
			exp5: '7',
			solutionAnswer: dataUtils.pre(
								'\\grp'
									+'{\\exp{\\input{$$firstAnsBase}}{\\input{$$firstAnsExp}}}'
									+'{\\str{*}}'
									+'{\\exp{\\input{$$secondAnsBase}}{\\input{$$secondAnsExp}}}'
									+'{\\str{*}}'
									+'{\\input{$$thirdAnsBase}}'
						),
			
		  	firstAnsBase: 'm',
			firstAnsExp: '2',
			secondAnsBase: 'n',
			secondAnsExp: '4',
			thirdAnsBase: 'o',
		  	line1: 'To simplify this quickly, we use the exponent rule \\"Multiplication of Same Bases\\" here. When we multiply same bases, we <u>add the exponents</u>.',
			line2:'The only value with a base of m is m<sup>2</sup>.&nbsp; This will stay the same.',
		  	line3: 'n<sup>-3</sup> * n<sup>7</sup> &nbsp;means&nbsp; n<sup>(-3) + 7</sup> &nbsp;or&nbsp; n<sup>4</sup>'
					+'<br><br>'
					+'o<sup>-3</sup> * o<sup>4</sup> &nbsp;means&nbsp; o<sup>(-3) + 4</sup> &nbsp;or&nbsp; o<sup>1</sup> = o',
		  	helpAnswer: '<br>Simplified Answer: &nbsp;m<sup>2</sup> * n<sup>4</sup> * o',
		  	problemInstructions: 'Write the bases in alphabetical order.'
								+'<br>'
								+'Use parentheses as a part of your answer <u>if</u> necessary.',
            template: 'multiplicationDiffBase'
            }
			,
		 	// prob 25
		 	{
		 	problemStatement: dataUtils.pre(
							'\\pan{12}{11}'
								+'{\\rowgrp'
									+'{\\grp'
										+'{\\str{Simplify: &nbsp;}}'
										+'{\\str{$$base1}}'
										+'{\\str{*}}'
										+'{\\exp{\\str{$$base2}}{\\str{$$exp2}}}'
										+'{\\str{*}}'
										+'{\\exp{\\str{$$base3}}{\\str{$$exp3}}}'
									+'}'
								+'}'
						),
			noPanProbStatement: dataUtils.pre(
										'{\\grp'
											+'{\\str{$$base1}}'
											+'{\\str{*}}'
											+'{\\exp{\\str{$$base2}}{\\str{$$exp2}}}'
											+'{\\str{*}}'
											+'{\\exp{\\str{$$base3}}{\\str{$$exp3}}}'
											+'{\\str{=}}'
											+'{$stringAnswer}'
										+'}'
						),
		  	base1: '(-2)',
		  	base2: '(-2)',
			exp2: '-2',
			base3: '(-2)',
			exp3: '8',
			solutionAnswer: dataUtils.pre(
								'\\grp'
									+'{\\exp{\\input{$$firstAnsBase}}{\\input{$$firstAnsExp}}}'
						),
			stringAnswer: dataUtils.pre(
								'\\grp'
									+'{\\exp{\\str{$$firstAnsBase}}{\\str{$$firstAnsExp}}}'
						),
		  	firstAnsBase: '(-2)',
			firstAnsExp: '7',
			finalAnswer: '-128',
		  	line1: 'To simplify this quickly, we use the exponent rule \\"Multiplication of Same Bases\\" here. When we multiply same bases, we <u>add the exponents</u>.',
			line2:'(-2) * (-2)<sup>-2</sup> * (-2)<sup>8</sup> &nbsp;means&nbsp; (-2)<sup>1 + (-2) + 8</sup> &nbsp;or&nbsp; (-2)<sup>7</sup>',
		  	line3: '',
		  	helpAnswer: '<br>Simplified Answer: &nbsp;(-2)<sup>7</sup>',
		  	template: 'multiplyEvaluate' 
		 	}
			,
		 	// prob 26
		 	{
		 	problemStatement: dataUtils.pre(
							'\\pan{12}{11}'
								+'{\\rowgrp'
									+'{\\grp'
										+'{\\str{Simplify: &nbsp;}}'
										+'{\\exp{\\str{$$base1}}{\\str{$$exp1}}}'
										+'{\\str{*}}'
										+'{\\str{$$base2}}'
										+'{\\str{*}}'
										+'{\\exp{\\str{$$base3}}{\\str{$$exp3}}}'
									+'}'
								+'}'
						),
			noPanProbStatement: dataUtils.pre(
										'{\\grp'
											+'{\\str{The simplified expression is: &nbsp;}}'
											+'{$stringAnswer}'
										+'}'
						),
		  	base1: '(-4)',
			exp1: '-3',
		  	base2: '(-4)',
			base3: '(-4)',
			exp3: '7',
			solutionAnswer: dataUtils.pre(
								'\\grp'
									+'{\\exp{\\input{$$firstAnsBase}}{\\input{$$firstAnsExp}}}'
						),
			stringAnswer: dataUtils.pre(
								'\\grp'
									+'{\\exp{\\str{$$firstAnsBase}}{\\str{$$firstAnsExp}}}'
						),
		  	firstAnsBase: '(-4)',
			firstAnsExp: '5',
			finalAnswer: '-1024',
		  	line1: 'To simplify this quickly, we use the exponent rule \\"Multiplication of Same Bases\\" here. When we multiply same bases, we <u>add the exponents</u>.',
			line2:'(-4)<sup>-3</sup> * (-4) * (-4)<sup>7</sup> &nbsp;means&nbsp; (-4)<sup>-3 + 1 + 7</sup> &nbsp;or&nbsp; (-4)<sup>5</sup>',
		  	line3: '',
		  	helpAnswer: '<br>Simplified Answer: &nbsp;(-4)<sup>5</sup>',
		  	template: 'multiplyEvaluate' 
		 	}
			,
		 	// prob 27
		 	{
		 	problemStatement: dataUtils.pre(
							'\\pan{12}{11}'
								+'{\\rowgrp'
									+'{\\grp'
										+'{\\str{Simplify: &nbsp;}}'
										+'{\\exp{\\str{$$base1}}{\\str{$$exp1}}}'
										+'{\\str{*}}'
										+'{\\exp{\\str{$$base2}}{\\str{$$exp2}}}'
										+'{\\str{*}}'
										+'{\\exp{\\str{$$base3}}{\\str{$$exp3}}}'
										+'{\\str{*}}'
										+'{\\exp{\\str{$$base4}}{\\str{$$exp4}}}'
									+'}'
								+'}'
						),
			noPanProbStatement: dataUtils.pre(
										'{\\grp'
											+'{\\str{The simplified expression is: &nbsp;}}'
											+'{$stringAnswer}'
										+'}'
						),
		  	base1: '(-5)',
			exp1: '-2',
		  	base2: '(-5)',
			exp2: '4',
			base3: '4',
			exp3: '5',
			base4: '4',
			exp4: '-2',
			solutionAnswer: dataUtils.pre(
								'\\grp'
									+'{\\exp{\\input{$$firstAnsBase}}{\\input{$$firstAnsExp}}}'
									+'{\\str{*}}'
									+'{\\exp{\\input{$$secondAnsBase}}{\\input{$$secondAnsExp}}}'
						),
			stringAnswer: dataUtils.pre(
								'\\grp'
									+'{\\exp{\\str{$$firstAnsBase}}{\\str{$$firstAnsExp}}}'
									+'{\\str{*}}'
									+'{\\exp{\\str{$$secondAnsBase}}{\\str{$$secondAnsExp}}}'
						),
		  	firstAnsBase: '4',
			firstAnsExp: '3',
			secondAnsBase: '(-5)',
			secondAnsExp: '2',
			finalAnswer: '1600',
		  	line1: 'To simplify this quickly, we use the exponent rule \\"Multiplication of Same Bases\\" here. When we multiply same bases, we <u>add the exponents</u>.',
			line2:'4<sup>5</sup> * 4<sup>-2</sup> &nbsp;means&nbsp; 4<sup>5 + (-2)</sup> &nbsp;or&nbsp; 4<sup>3</sup>',
		  	line3: '(-5)<sup>-2</sup> * (-5)<sup>4</sup> &nbsp;means&nbsp; (-5)<sup>-2 + 4</sup> &nbsp;or&nbsp; (-5)<sup>2</sup>',
		  	helpAnswer: '<br>Simplified Answer: &nbsp;4<sup>3</sup> * (-5)<sup>2</sup>',
			secondHelpLine1: 'Solve by following order of operations.<br><br>'
								+'4<sup>3</sup> * (-5)<sup>2</sup><br>'
								+'64 * 25',
		  	secondHelpAnswer: '<br>Evaluated Answer:&nbsp; 1600',
		  	template: 'multiplyEvaluate2ndHelp' 
		 	}
			,
		 	// prob 28
		 	{
		 	problemStatement: dataUtils.pre(
							'\\pan{12}{11}'
								+'{\\rowgrp'
									+'{\\grp'
										+'{\\str{Simplify: &nbsp;}}'
										+'{\\exp{\\str{$$base1}}{\\str{$$exp1}}}'
										+'{\\str{*}}'
										+'{\\exp{\\str{$$base2}}{\\str{$$exp2}}}'
										+'{\\str{*}}'
										+'{\\exp{\\str{$$base3}}{\\str{$$exp3}}}'
										+'{\\str{*}}'
										+'{\\exp{\\str{$$base4}}{\\str{$$exp4}}}'
									+'}'
								+'}'
						),
			noPanProbStatement: dataUtils.pre(
										'{\\grp'
											+'{\\str{The simplified expression is: &nbsp;}}'
											+'{$stringAnswer}'
										+'}'
						),
		  	base1: '3',
			exp1: '5',
		  	base2: '(-2)',
			exp2: '-3',
			base3: '(-2)',
			exp3: '6',
			base4: '3',
			exp4: '-3',
			solutionAnswer: dataUtils.pre(
								'\\grp'
									+'{\\exp{\\input{$$firstAnsBase}}{\\input{$$firstAnsExp}}}'
									+'{\\str{*}}'
									+'{\\exp{\\input{$$secondAnsBase}}{\\input{$$secondAnsExp}}}'
						),
			stringAnswer: dataUtils.pre(
								'\\grp'
									+'{\\exp{\\str{$$firstAnsBase}}{\\str{$$firstAnsExp}}}'
									+'{\\str{*}}'
									+'{\\exp{\\str{$$secondAnsBase}}{\\str{$$secondAnsExp}}}'
						),
		  	firstAnsBase: '(-2)',
			firstAnsExp: '3',
			secondAnsBase: '3',
			secondAnsExp: '2',
			finalAnswer: '-72',
		  	line1: 'To simplify this quickly, we use the exponent rule \\"Multiplication of Same Bases\\" here. When we multiply same bases, we <u>add the exponents</u>.',
			line2:'(-2)<sup>-3</sup> * (-2)<sup>6</sup> &nbsp;means&nbsp; (-2)<sup>-3 + 6</sup> &nbsp;or&nbsp; (-2)<sup>3</sup>',
		  	line3: '3<sup>5</sup> * 3<sup>-3</sup> &nbsp;means&nbsp; 3<sup>5 + (-3)</sup> &nbsp;or&nbsp; 3<sup>2</sup>',
		  	helpAnswer: '<br>Simplified Answer: &nbsp;(-2)<sup>3</sup> * 3<sup>2</sup>',
			secondHelpLine1: 'Solve by following order of operations.<br><br>'
								+'(-2)<sup>3</sup> * 3<sup>2</sup><br>'
								+'-8 * 9',
		  	secondHelpAnswer: '<br>Evaluated Answer:&nbsp; -72',
		  	template: 'multiplyEvaluate2ndHelp' 
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
												+'{\\frac{\\fracstr{$$firstBaseNum}}{\\fracstr{$$firstBaseDen}}}'
												+'{\\str{)}}'
											+'}'
											+'{\\str{$$exp1}}'
										+'}'
										+'{\\str{*}}'
										+'{\\exp'
											+'{\\grp'
												+'{\\str{(}}'
												+'{\\frac{\\fracstr{$$secondBaseNum}}{\\fracstr{$$secondBaseDen}}}'
												+'{\\str{)}}'
											+'}'
											+'{\\str{$$exp2}}'
										+'}'
									+'}'
								+'}'
						),
			noPanProbStatement: dataUtils.pre(
										'{\\grp'
											+'{\\str{The simplified expression is: &nbsp;}}'
											+'{$stringAnswer}'
										+'}'
						),
		  	firstBaseNum: '3',
			firstBaseDen: '5',
			exp1: '4',
		  	secondBaseNum: '3',
			secondBaseDen: '5',
			exp2: '-2',
			expAddition: '4 + (-2)',
			expSum: '2',
			solutionAnswer: dataUtils.pre(
								'\\frac{\\exp{\\input{$$firstAnswerBase}}{\\input{$$firstAnswerExp}}}{\\exp{\\input{$$secondAnswerBase}}{\\input{$$secondAnswerExp}}}'
						),
			stringAnswer: dataUtils.pre(
								'\\frac{\\exp{\\str{$$firstAnswerBase}}{\\str{$$firstAnswerExp}}}{\\exp{\\str{$$secondAnswerBase}}{\\str{$$secondAnswerExp}}}'
						),
		  	firstAnswerBase: '3',
			firstAnswerExp: '2',
			secondAnswerBase: '5',
			secondAnswerExp: '2',
			finalAnswerNum: '9',
			finalAnswerDen: '25',
			finalAnswer: dataUtils.pre(
										'\\frac'
											+'{\\input{$$finalAnswerNum}}'
											+'{\\input{$$finalAnswerDen}}'
						),
		  	line1: 'To simplify this quickly, we use the exponent rule \\"Multiplication of Same Bases\\" here. When we multiply same bases, we <u>add the exponents</u>.',
			line2: dataUtils.pre(
								 '\\grp'
									+'{\\exp'
										+'{\\grp'
											+'{\\str{(}}'
											+'{\\frac{\\fracstr{$$firstBaseNum}}{\\fracstr{$$firstBaseDen}}}'
											+'{\\str{)}}'
										+'}'
										+'{\\str{$$exp1}}'
									+'}'
									+'{\\str{*}}'
									+'{\\exp'
										+'{\\grp'
											+'{\\str{(}}'
											+'{\\frac{\\fracstr{$$secondBaseNum}}{\\fracstr{$$secondBaseDen}}}'
											+'{\\str{)}}'
										+'}'
										+'{\\str{$$exp2}}'
									+'}'
									+'{\\str{&nbsp; means &nbsp;}}'
									+'{\\exp'
										+'{\\grp'
											+'{\\str{(}}'
											+'{\\frac{\\fracstr{$$firstBaseNum}}{\\fracstr{$$firstBaseDen}}}'
											+'{\\str{)}}'
										+'}'
										+'{\\str{$$expAddition}}'
									+'}'
									+'{\\str{&nbsp; or &nbsp;}}'
									+'{\\exp'
										+'{\\grp'
											+'{\\str{(}}'
											+'{\\frac{\\fracstr{$$firstBaseNum}}{\\fracstr{$$firstBaseDen}}}'
											+'{\\str{)}}'
										+'}'
										+'{\\str{$$expSum}}'
									+'}'
						),
		  	template: 'multiplyFractionsEvaluate' 
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
												+'{\\frac{\\fracstr{$$firstBaseNum}}{\\fracstr{$$firstBaseDen}}}'
												+'{\\str{)}}'
											+'}'
											+'{\\str{$$exp1}}'
										+'}'
										+'{\\str{*}}'
										+'{\\exp'
											+'{\\grp'
												+'{\\str{(}}'
												+'{\\frac{\\fracstr{$$secondBaseNum}}{\\fracstr{$$secondBaseDen}}}'
												+'{\\str{)}}'
											+'}'
											+'{\\str{$$exp2}}'
										+'}'
									+'}'
								+'}'
						),
			noPanProbStatement: dataUtils.pre(
										'{\\grp'
											+'{\\str{The simplified expression is: &nbsp;}}'
											+'{$stringAnswer}'
										+'}'
						),
		  	firstBaseNum: '2',
			firstBaseDen: '3',
			exp1: '6',
		  	secondBaseNum: '2',
			secondBaseDen: '3',
			exp2: '-3',
			expAddition: '6 + (-3)',
			expSum: '3',
			solutionAnswer: dataUtils.pre(
								'\\frac{\\exp{\\input{$$firstAnswerBase}}{\\input{$$firstAnswerExp}}}{\\exp{\\input{$$secondAnswerBase}}{\\input{$$secondAnswerExp}}}'
						),
			stringAnswer: dataUtils.pre(
								'\\frac{\\exp{\\str{$$firstAnswerBase}}{\\str{$$firstAnswerExp}}}{\\exp{\\str{$$secondAnswerBase}}{\\str{$$secondAnswerExp}}}'
						),
		  	firstAnswerBase: '2',
			firstAnswerExp: '3',
			secondAnswerBase: '3',
			secondAnswerExp: '3',
			finalAnswerNum: '8',
			finalAnswerDen: '27',
			finalAnswer: dataUtils.pre(
										'\\frac'
											+'{\\input{$$finalAnswerNum}}'
											+'{\\input{$$finalAnswerDen}}'
						),
		  	line1: 'To simplify this quickly, we use the exponent rule \\"Multiplication of Same Bases\\" here. When we multiply same bases, we <u>add the exponents</u>.',
			line2: dataUtils.pre(
								 '\\grp'
									+'{\\exp'
										+'{\\grp'
											+'{\\str{(}}'
											+'{\\frac{\\fracstr{$$firstBaseNum}}{\\fracstr{$$firstBaseDen}}}'
											+'{\\str{)}}'
										+'}'
										+'{\\str{$$exp1}}'
									+'}'
									+'{\\str{*}}'
									+'{\\exp'
										+'{\\grp'
											+'{\\str{(}}'
											+'{\\frac{\\fracstr{$$secondBaseNum}}{\\fracstr{$$secondBaseDen}}}'
											+'{\\str{)}}'
										+'}'
										+'{\\str{$$exp2}}'
									+'}'
									+'{\\str{&nbsp; means &nbsp;}}'
									+'{\\exp'
										+'{\\grp'
											+'{\\str{(}}'
											+'{\\frac{\\fracstr{$$firstBaseNum}}{\\fracstr{$$firstBaseDen}}}'
											+'{\\str{)}}'
										+'}'
										+'{\\str{$$expAddition}}'
									+'}'
									+'{\\str{&nbsp; or &nbsp;}}'
									+'{\\exp'
										+'{\\grp'
											+'{\\str{(}}'
											+'{\\frac{\\fracstr{$$firstBaseNum}}{\\fracstr{$$firstBaseDen}}}'
											+'{\\str{)}}'
										+'}'
										+'{\\str{$$expSum}}'
									+'}'
						),
		  	template: 'multiplyFractionsEvaluate' 
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
				{ problems: [29,30], total: 1}
				
		];
		//return dataUtils.build(desc, template, data);
    
    	return dataUtils.build(desc, template, data, shuffle);
}]);
