/*global angular */

// angular.module('mathSkills').value('data_m_1', {
    // title: 'M.1 Combining Fractions and Mixed Numbers',
    // path: 'M.1-combining-fractions-and-mixed-numbers',
    // children: [{
        // title: 'Combining Fractions and Mixed Numbers',
        // children: [] }]
// });

/*global angular */

angular.module('mathSkills').service('data_m_3', ['dataUtils', function (dataUtils) {
    var desc = {
    		title: 'M.3 Translating Expressions and Combining Fractions and Mixed Numbers',
    	    path: 'M.3-translating-expressions',
            children: []
        },
	        template = {
            
// Two fractions
            firstTempl: {
                title: 'Combining Fractions and Mixed Numbers',
                children: [{
                    title: 'twoFractions Answer',
                    children: [{
						problem: '\\html{&nbsp;}',
						answer: '\\rowgrp'
										+'{\\row'
											+'{\\html{$probExpr1}}'
											+'{\\sign{$firstSign}}'
											+'{\\frac{\\fracstr{$firstNum}}{\\fracstr{$firstDen}}}'
											+'{\\html{$probExpr2}}'
											+'{\\sign{$thirdSign}}'
											+'{\\frac{\\fracstr{$secondNum}}{\\fracstr{$secondDen}}}'
											+'}'
										+'{\\html{&nbsp;}}'
										+'{\\row'
											+'{\\html{Answer: }}'
											+'{\\frac{\\input{$differenceNum}}{\\input{$answerDen}}}'
										+'}',

						controls: {
							"checkAnswer": true,
							"help": false,
							"workbook": true
						}
                    }]
                }, {
                    title: 'Workbook',
                    children: [{
						problem: '\\row'
										+'{\\html{$probExpr1}}'
											+'{\\sign{$firstSign}}'
											+'{\\frac{\\fracstr{$firstNum}}{\\fracstr{$firstDen}}}'
											+'{\\html{$probExpr2}}'
											+'{\\sign{$thirdSign}}'
											+'{\\frac{\\fracstr{$secondNum}}{\\fracstr{$secondDen}}}',
						answer: '\\rowgrp'+
									'{\\ins{Choose the correct math translation for the problem expression:}}'+
									'{\\grp{\\btn{A}{$buttonValueA}{marg}}{\\html{\xA0$buttonLabelA}}}'+
                                    '{\\grp{\\btn{B}{$buttonValueB}{marg}}{\\html{\xA0$buttonLabelB}}}'+
                                    '{\\grp{\\btn{C}{$buttonValueC}{marg}}{\\html{\xA0$buttonLabelC}}}'+
                                    '{\\grp{\\btn{D}{$buttonValueD}{marg}}{\\html{\xA0$buttonLabelD}}}',
						controls: {
							"checkAnswer": true,
							"help": true
						},
                    }, {
                    	problem: '\\row'
										+'{\\html{$probExpr1}}'
											+'{\\sign{$firstSign}}'
											+'{\\frac{\\fracstr{$firstNum}}{\\fracstr{$firstDen}}}'
											+'{\\html{$probExpr2}}'
											+'{\\sign{$thirdSign}}'
											+'{\\frac{\\fracstr{$secondNum}}{\\fracstr{$secondDen}}}',
						answer: '\\css'
								+'{\\rowgrp'
									+'{\\html{The correct translated expression is:}}'
										+'{\\html{&nbsp;}}'
										+'{\\row'
											+'{\\sign{$firstSign}}'
												+'{\\frac{\\fracstr{$firstNum}}{\\fracstr{$firstDen}}}'
												+'{\\sign{$secondSign}}'
												+'{\\html{$leftParen}}'
												+'{\\sign{$thirdSign}}'
												+'{\\frac{\\fracstr{$secondNum}}{\\fracstr{$secondDen}}}'
												+'{\\html{$rightParen}}'
										+'}'
									+'{\\html{&nbsp;}}'
									+'{\\ins{Determine the lowest common denominator (LCD) of the fractions:}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp{\\input{$answerDen}}}'
								+'}{well}',
						controls: {
							"checkAnswer": true,
							"help": true
						}
                    }, {
						problem: '\\row'
										+'{\\html{$probExpr1}}'
											+'{\\sign{$firstSign}}'
											+'{\\frac{\\fracstr{$firstNum}}{\\fracstr{$firstDen}}}'
											+'{\\html{$probExpr2}}'
											+'{\\sign{$thirdSign}}'
											+'{\\frac{\\fracstr{$secondNum}}{\\fracstr{$secondDen}}}',
						answer: '\\css'
								+'{\\rowgrp'
									+'{\\html{The correct translated expression is:}}'
										+'{\\html{&nbsp;}}'
										+'{\\row'
											+'{\\sign{$firstSign}}'
												+'{\\frac{\\fracstr{$firstNum}}{\\fracstr{$firstDen}}}'
												+'{\\sign{$secondSign}}'
												+'{\\html{$leftParen}}'
												+'{\\sign{$thirdSign}}'
												+'{\\frac{\\fracstr{$secondNum}}{\\fracstr{$secondDen}}}'
												+'{\\html{$rightParen}}'
										+'}'
									+'{\\html{&nbsp;}}'
									+'{\\html{The lowest common denominator (LCD) of the fractions is:}}'
									+'{\\html{&nbsp;}}'
									+'{\\html{$answerDen}}'
									+'{\\html{&nbsp;}}'
									+'{\\ins{Use the LCD to convert the fractions:}}'
									+'{\\row'
											+'{\\sign{$firstSign}}'
												+'{\\frac{\\fracstr{$firstNum}}{\\fracstr{$firstDen}}}'
												+'{\\sign{$secondSign}}'
												+'{\\html{$leftParen}}'
												+'{\\sign{$thirdSign}}'
												+'{\\frac{\\fracstr{$secondNum}}{\\fracstr{$secondDen}}}'
												+'{\\html{$rightParen}}'
										+'}'   								
        							+'{\\html{&nbsp;}}'
									+'{\\grp'
        										+'{\\sign{$firstSign}}'
        										+'{\\frac{\\input{$firstAnswerNum}}{\\fracstr{$answerDen}}}'
        										+'{\\sign{$secondSign}}'
												+'{\\html{$leftParen}}'
												+'{\\sign{$thirdSign}}'
        										+'{\\frac{\\input{$secondAnswerNum}}{\\fracstr{$answerDen}}}'
        										+'{\\html{$rightParen}}'
        										+'}'
        									+'}{well}',
						controls: {
							"checkAnswer": true,
							"help": true
						}
                    }, {
						problem: '\\row'
										+'{\\html{$probExpr1}}'
											+'{\\sign{$firstSign}}'
											+'{\\frac{\\fracstr{$firstNum}}{\\fracstr{$firstDen}}}'
											+'{\\html{$probExpr2}}'
											+'{\\sign{$thirdSign}}'
											+'{\\frac{\\fracstr{$secondNum}}{\\fracstr{$secondDen}}}',
							answer: '\\css'
									+'{\\rowgrp'
										+'{\\html{The correct translated expression is:}}'
										+'{\\html{&nbsp;}}'
										+'{\\row'
											+'{\\sign{$firstSign}}'
												+'{\\frac{\\fracstr{$firstNum}}{\\fracstr{$firstDen}}}'
												+'{\\sign{$secondSign}}'
												+'{\\html{$leftParen}}'
												+'{\\sign{$thirdSign}}'
												+'{\\frac{\\fracstr{$secondNum}}{\\fracstr{$secondDen}}}'
												+'{\\html{$rightParen}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\html{The lowest common denominator (LCD) of the fractions is:}}'
										+'{\\html{&nbsp;}}'
										+'{\\html{$answerDen}}'
										+'{\\html{&nbsp;}}'
										+'{\\html{Use the LCD to convert the fractions:}}'
										+'{\\html{&nbsp;}}'
										+'{\\row'
											+'{\\sign{$firstSign}}'
											+'{\\frac{\\fracstr{$firstNum}}{\\fracstr{$firstDen}}}'
											+'{\\sign{$secondSign}}'
											+'{\\html{$leftParen}}'
											+'{\\sign{$thirdSign}}'
											+'{\\frac{\\fracstr{$secondNum}}{\\fracstr{$secondDen}}}'
											+'{\\html{$rightParen}}'
										+'}'    
										+'{\\html{&nbsp;}}'
										+'{\\row{\\sign{$firstSign}}{\\frac{\\fracstr{$firstAnswerNum}}{\\fracstr{$answerDen}}}'
											+'{\\sign{$secondSign}}'
											+'{\\html{$leftParen}}'
											+'{\\sign{$thirdSign}}'
											+'{\\frac{\\fracstr{$secondAnswerNum}}{\\fracstr{$answerDen}}}'
											+'{\\html{$rightParen}}'
										+'}'
											
										+'{\\html{&nbsp;}}'
										+'{\\ins{$oper the numerators:}}'
										+'{\\grp{\\frac{\\grp{sign{$firstSign}}{\\fracstr{$firstAnswerNum}}{\\sign{$secondSign}}{\\html{$leftParen}}{\\sign{$thirdSign}}{\\fracstr{$secondAnswerNum}}{\\html{$rightParen}}}{\\fracstr{$answerDen}}}{\\sign{=}}{\\frac{\\input{$differenceNum}}{\\input{$answerDen}}}}'	
        									+'}{well}',
						controls: {
							"checkAnswer": true,
							"help": true,
							"fixBottomRight": true
						}
                    }]
                }]
            },
            // Mixed number fractions
            secondTempl: {
                title: 'Combining Fractions and Mixed Numbers',
                children: [{
                    title: 'twoFractions Answer',
                    children: [{
						problem: '\\html{&nbsp;}',
						answer: '\\rowgrp'
										+'{\\row'
											+'{\\html{$probExpr1}}'
											+'{\\sign{$firstSign}}'
											+'{\\mixed{\\str{$w1}}{\\frac{\\fracstr{$n1}}{\\fracstr{$d1}}}}'
											+'{\\html{$probExpr2}}'
											+'{\\sign{$thirdSign}}'
											+'{\\mixed{\\str{$w2}}{\\frac{\\fracstr{$n2}}{\\fracstr{$d2}}}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\row'
											+'{\\html{Answer:&nbsp;}}'
											+'{\\mixed{\\input{$wAns}}{\\frac{\\input{$wNumAns}}{\\input{$wDenAns}}}}'
										+'}',

						controls: {
							"checkAnswer": true,
							"help": false,
							"workbook": true
						}
                    }]
                }, {
                    title: 'Workbook', 
                    children: [{
						problem: '\\row' // step 1
										+'{\\html{$probExpr1}}'
											+'{\\sign{$firstSign}}'
											+'{\\mixed{\\str{$w1}}{\\frac{\\fracstr{$n1}}{\\fracstr{$d1}}}}'
											+'{\\html{$probExpr2}}'
											+'{\\sign{$thirdSign}}'
											+'{\\mixed{\\str{$w2}}{\\frac{\\fracstr{$n2}}{\\fracstr{$d2}}}}',
						answer: '\\rowgrp'+
									'{\\ins{Choose the correct math translation for the problem expression:}}'+
									'{\\grp{\\btn{A}{$buttonValueA}{marg}}{\\html{\xA0$buttonLabelA}}}'+
                                    '{\\grp{\\btn{B}{$buttonValueB}{marg}}{\\html{\xA0$buttonLabelB}}}'+
                                    '{\\grp{\\btn{C}{$buttonValueC}{marg}}{\\html{\xA0$buttonLabelC}}}'+
                                    '{\\grp{\\btn{D}{$buttonValueD}{marg}}{\\html{\xA0$buttonLabelD}}}',
						controls: {
							"checkAnswer": true,
							"help": true
						},
					}, { // step 2
                    	problem: '\\row' 
										+'{\\html{$probExpr1}}'
											+'{\\sign{$firstSign}}'
											+'{\\mixed{\\str{$w1}}{\\frac{\\fracstr{$n1}}{\\fracstr{$d1}}}}'
											+'{\\html{$probExpr2}}'
											+'{\\sign{$thirdSign}}'
											+'{\\mixed{\\str{$w2}}{\\frac{\\fracstr{$n2}}{\\fracstr{$d2}}}}',
						answer: '\\css'
								+'{\\rowgrp'
									+'{\\html{The correct translated expression is:}}'
										+'{\\html{&nbsp;}}'
										+'{\\row'
												+'{\\sign{$firstSign}}'
												+'{\\mixed{\\str{$w1}}{\\frac{\\fracstr{$n1}}{\\fracstr{$d1}}}}'
												+'{\\sign{$secondSign}}'
												+'{\\html{$leftParen}}'
												+'{\\sign{$thirdSign}}'
												+'{\\mixed{\\str{$w2}}{\\frac{\\fracstr{$n2}}{\\fracstr{$d2}}}}'
												+'{\\html{$rightParen}}'
										+'}'
									+'{\\html{&nbsp;}}'
									+'{\\ins{Convert mixed numbers above into improper fractions:}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp'
												+'{\\sign{$firstSign}}'
												+'{\\frac{\\input{$imprN1}}{\\fracstr{$d1}}}'
												+'{\\sign{$secondSign}}'
												+'{\\html{$leftParen}}'
												+'{\\sign{$thirdSign}}'
												+'{\\frac{\\input{$imprN2}}{\\fracstr{$d2}}}'
												+'{\\html{$rightParen}}'
										+'}'
								+'}{well}',
						controls: {
							"checkAnswer": true,
							"help": true
						}
                    }, { // step 3
                    	problem: '\\row' 
										+'{\\html{$probExpr1}}'
											+'{\\sign{$firstSign}}'
											+'{\\mixed{\\str{$w1}}{\\frac{\\fracstr{$n1}}{\\fracstr{$d1}}}}'
											+'{\\html{$probExpr2}}'
											+'{\\sign{$thirdSign}}'
											+'{\\mixed{\\str{$w2}}{\\frac{\\fracstr{$n2}}{\\fracstr{$d2}}}}',
						answer: '\\css'
								+'{\\rowgrp'
									+'{\\html{The correct translated expression is:}}'
										+'{\\html{&nbsp;}}'
										+'{\\row'
												+'{\\sign{$firstSign}}'
												+'{\\mixed{\\str{$w1}}{\\frac{\\fracstr{$n1}}{\\fracstr{$d1}}}}'
												+'{\\sign{$secondSign}}'
												+'{\\html{$leftParen}}'
												+'{\\sign{$thirdSign}}'
												+'{\\mixed{\\str{$w2}}{\\frac{\\fracstr{$n2}}{\\fracstr{$d2}}}}'
												+'{\\html{$rightParen}}'
										+'}'
									+'{\\html{&nbsp;}}'
									+'{\\html{Convert mixed numbers above into improper fractions:}}'
									+'{\\html{&nbsp;}}'
									+'{\\row'
											+'{\\sign{$firstSign}}'
												+'{\\frac{\\fracstr{$imprN1}}{\\fracstr{$d1}}}'
												+'{\\sign{$secondSign}}'
												+'{\\html{$leftParen}}'
												+'{\\sign{$thirdSign}}'
												+'{\\frac{\\fracstr{$imprN2}}{\\fracstr{$d2}}}'
												+'{\\html{$rightParen}}'
									+'}'
									+'{\\html{&nbsp;}}'
									+'{\\ins{Determine the lowest common denominator (LCD) of the fractions:}}'
									+'{\\grp{\\input{$lcd}}}'
								+'}{well}',
						controls: {
							"checkAnswer": true,
							"help": true
						}
                    }, { // step 4
						problem: '\\row' 
										+'{\\html{$probExpr1}}'
											+'{\\sign{$firstSign}}'
											+'{\\mixed{\\str{$w1}}{\\frac{\\fracstr{$n1}}{\\fracstr{$d1}}}}'
											+'{\\html{$probExpr2}}'
											+'{\\sign{$thirdSign}}'
											+'{\\mixed{\\str{$w2}}{\\frac{\\fracstr{$n2}}{\\fracstr{$d2}}}}',
						answer: '\\css'
								+'{\\rowgrp'
									+'{\\html{The correct translated expression is:}}'
										+'{\\html{&nbsp;}}'
										+'{\\row'
												+'{\\sign{$firstSign}}'
												+'{\\mixed{\\str{$w1}}{\\frac{\\fracstr{$n1}}{\\fracstr{$d1}}}}'
												+'{\\sign{$secondSign}}'
												+'{\\html{$leftParen}}'
												+'{\\sign{$thirdSign}}'
												+'{\\mixed{\\str{$w2}}{\\frac{\\fracstr{$n2}}{\\fracstr{$d2}}}}'
												+'{\\html{$rightParen}}'
										+'}'
									+'{\\html{&nbsp;}}'
									+'{\\html{Convert mixed numbers above into improper fractions:}}'
									+'{\\html{&nbsp;}}'
									+'{\\row'
												+'{\\sign{$firstSign}}'
												+'{\\frac{\\fracstr{$imprN1}}{\\fracstr{$d1}}}'
												+'{\\sign{$secondSign}}'
												+'{\\html{$leftParen}}'
												+'{\\sign{$thirdSign}}'
												+'{\\frac{\\fracstr{$imprN2}}{\\fracstr{$d2}}}'
												+'{\\html{$rightParen}}'
									+'}'
									+'{\\html{&nbsp;}}'
									+'{\\html{The lowest common denominator (LCD) of the fractions is:}}'
									+'{\\html{&nbsp;}}'
									+'{\\html{$lcd}}'
									+'{\\html{&nbsp;}}'
									+'{\\ins{Use the LCD to convert the fractions:}}'
									+'{\\row'
												+'{\\sign{$firstSign}}'
												+'{\\frac{\\fracstr{$imprN1}}{\\fracstr{$d1}}}'
												+'{\\sign{$secondSign}}'
												+'{\\html{$leftParen}}'
												+'{\\sign{$thirdSign}}'
												+'{\\frac{\\fracstr{$imprN2}}{\\fracstr{$d2}}}'
												+'{\\html{$rightParen}}'
										+'}'   								
        							+'{\\html{&nbsp;}}'
									+'{\\grp'
        										+'{\\sign{$firstSign}}'
        										+'{\\frac{\\input{$answN1}}{\\fracstr{$lcd}}}'
        										+'{\\sign{$secondSign}}'
												+'{\\html{$leftParen}}'
												+'{\\sign{$thirdSign}}'
        										+'{\\frac{\\input{$answN2}}{\\fracstr{$lcd}}}'
        										+'{\\html{$rightParen}}'
        										+'}'
        									+'}{well}',
						controls: {
							"checkAnswer": true,
							"help": true,
							"fixBottomRight": true
						}
                    }, { // step 5
						problem: '\\row' 
										+'{\\html{$probExpr1}}'
											+'{\\sign{$firstSign}}'
											+'{\\mixed{\\str{$w1}}{\\frac{\\fracstr{$n1}}{\\fracstr{$d1}}}}'
											+'{\\html{$probExpr2}}'
											+'{\\sign{$thirdSign}}'
											+'{\\mixed{\\str{$w2}}{\\frac{\\fracstr{$n2}}{\\fracstr{$d2}}}}',
							answer: '\\css'
									+'{\\rowgrp'
										+'{\\html{The correct translated expression is:}}'
										+'{\\html{&nbsp;}}'
										+'{\\row'
												+'{\\sign{$firstSign}}'
												+'{\\mixed{\\str{$w1}}{\\frac{\\fracstr{$n1}}{\\fracstr{$d1}}}}'
												+'{\\sign{$secondSign}}'
												+'{\\html{$leftParen}}'
												+'{\\sign{$thirdSign}}'
												+'{\\mixed{\\str{$w2}}{\\frac{\\fracstr{$n2}}{\\fracstr{$d2}}}}'
												+'{\\html{$rightParen}}'
										+'}'
									+'{\\html{&nbsp;}}'
									+'{\\html{Convert mixed numbers above into improper fractions:}}'
									+'{\\html{&nbsp;}}'
									+'{\\row'
												+'{\\sign{$firstSign}}'
												+'{\\frac{\\fracstr{$imprN1}}{\\fracstr{$d1}}}'
												+'{\\sign{$secondSign}}'
												+'{\\html{$leftParen}}'
												+'{\\sign{$thirdSign}}'
												+'{\\frac{\\fracstr{$imprN2}}{\\fracstr{$d2}}}'
												+'{\\html{$rightParen}}'
									+'}'
									+'{\\html{&nbsp;}}'
									+'{\\html{The lowest common denominator (LCD) of the fractions is:}}'
									+'{\\html{&nbsp;}}'
									+'{\\html{$lcd}}'
									+'{\\html{&nbsp;}}'
										+'{\\html{Use the LCD to convert the fractions:}}'
										+'{\\html{&nbsp;}}'
										+'{\\row'
											+'{\\sign{$firstSign}}'
											+'{\\frac{\\fracstr{$imprN1}}{\\fracstr{$d1}}}'
											+'{\\sign{$secondSign}}'
											+'{\\html{$leftParen}}'
											+'{\\sign{$thirdSign}}'
											+'{\\frac{\\fracstr{$imprN2}}{\\fracstr{$d2}}}'
											+'{\\html{$rightParen}}'
										+'}'    
										+'{\\html{&nbsp;}}'
										+'{\\row'
											+'{\\sign{$firstSign}}'
											+'{\\frac{\\fracstr{$answN1}}{\\fracstr{$lcd}}}'
											+'{\\sign{$secondSign}}'
											+'{\\html{$leftParen}}'
											+'{\\sign{$thirdSign}}'
											+'{\\frac{\\fracstr{$answN2}}{\\fracstr{$lcd}}}'
											+'{\\html{$rightParen}}'
										+'}'
											
										+'{\\html{&nbsp;}}'
										+'{\\ins{$oper the numerators:}}'
										+'{\\grp{\\frac{\\grp{sign{$firstSign}}{\\fracstr{$answN1}}{\\sign{$secondSign}}{\\html{$leftParen}}{\\sign{$thirdSign}}{\\fracstr{$answN2}}{\\html{$rightParen}}}{\\fracstr{$lcd}}}{\\sign{=}}{\\frac{\\input{$answNum}}{\\input{$lcd}}}}'	
        									+'}{well}',
						controls: {
							"checkAnswer": true,
							"help": true,
							"fixBottomRight": true
							}
						}, { // step 6
						problem: '\\row' 
										+'{\\html{$probExpr1}}'
											+'{\\sign{$firstSign}}'
											+'{\\mixed{\\str{$w1}}{\\frac{\\fracstr{$n1}}{\\fracstr{$d1}}}}'
											+'{\\html{$probExpr2}}'
											+'{\\sign{$thirdSign}}'
											+'{\\mixed{\\str{$w2}}{\\frac{\\fracstr{$n2}}{\\fracstr{$d2}}}}',
							answer: '\\css'
									+'{\\rowgrp'
										+'{\\html{The correct translated expression is:}}'
										+'{\\html{&nbsp;}}'
										+'{\\row'
												+'{\\sign{$firstSign}}'
												+'{\\mixed{\\str{$w1}}{\\frac{\\fracstr{$n1}}{\\fracstr{$d1}}}}'
												+'{\\sign{$secondSign}}'
												+'{\\html{$leftParen}}'
												+'{\\sign{$thirdSign}}'
												+'{\\mixed{\\str{$w2}}{\\frac{\\fracstr{$n2}}{\\fracstr{$d2}}}}'
												+'{\\html{$rightParen}}'
										+'}'
									+'{\\html{&nbsp;}}'
									+'{\\html{Convert mixed numbers above into improper fractions:}}'
									+'{\\html{&nbsp;}}'
									+'{\\row'
												+'{\\sign{$firstSign}}'
												+'{\\frac{\\fracstr{$imprN1}}{\\fracstr{$d1}}}'
												+'{\\sign{$secondSign}}'
												+'{\\html{$leftParen}}'
												+'{\\sign{$thirdSign}}'
												+'{\\frac{\\fracstr{$imprN2}}{\\fracstr{$d2}}}'
												+'{\\html{$rightParen}}'
									+'}'
									+'{\\html{&nbsp;}}'
									+'{\\html{The lowest common denominator (LCD) of the fractions is:}}'
									+'{\\html{&nbsp;}}'
									+'{\\html{$lcd}}'
									+'{\\html{&nbsp;}}'
										+'{\\html{Use the LCD to convert the fractions:}}'
										+'{\\html{&nbsp;}}'
										+'{\\row'
											+'{\\sign{$firstSign}}'
											+'{\\frac{\\fracstr{$imprN1}}{\\fracstr{$d1}}}'
											+'{\\sign{$secondSign}}'
											+'{\\html{$leftParen}}'
											+'{\\sign{$thirdSign}}'
											+'{\\frac{\\fracstr{$imprN2}}{\\fracstr{$d2}}}'
											+'{\\html{$rightParen}}'
										+'}'    
										+'{\\html{&nbsp;}}'
										+'{\\row'
											+'{\\sign{$firstSign}}'
											+'{\\frac{\\fracstr{$answN1}}{\\fracstr{$lcd}}}'
											+'{\\sign{$secondSign}}'
											+'{\\html{$leftParen}}'
											+'{\\sign{$thirdSign}}'
											+'{\\frac{\\fracstr{$answN2}}{\\fracstr{$lcd}}}'
											+'{\\html{$rightParen}}'
										+'}'
											
										+'{\\html{&nbsp;}}'
										+'{\\html{$oper the numerators:}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp{\\frac{\\grp{sign{$firstSign}}{\\fracstr{$answN1}}{\\sign{$secondSign}}{\\html{$leftParen}}{\\sign{$thirdSign}}{\\fracstr{$answN2}}{\\html{$rightParen}}}{\\fracstr{$lcd}}}{\\sign{=}}{\\frac{\\fracstr{$answNum}}{\\fracstr{$lcd}}}}'
										+'{\\html{&nbsp;}}'
										+'{\\ins{Rewrite the answer as a mixed number with a proper fraction:}}'
										+'{\\grp'
											+'{\\frac{\\fracstr{$answNum}}{\\fracstr{$lcd}}}'
											+'{\\sign{=}}'
											+'{\\mixed{\\input{$wAns}}{\\frac{\\input{$wNumAns}}{\\input{$wDenAns}}}}'
										+'}'

        									+'}{well}',
						controls: {
							"checkAnswer": true,
							"help": true,
							"fixBottomRight": true
						}
                    }]
                }]
            },
            // Mixed number fractions, reversed fractions in problem
            secondTemplRev: {
                title: 'Combining Fractions and Mixed Numbers',
                children: [{
                    title: 'twoFractions Answer',
                    children: [{
						problem: '\\html{&nbsp;}',
						answer: '\\rowgrp'
										+'{\\row'
											+'{\\html{$probExpr1}}'
											+'{\\sign{$firstSign}}'
											+'{\\mixed{\\str{$w2}}{\\frac{\\fracstr{$n2}}{\\fracstr{$d2}}}}'
											+'{\\html{$probExpr2}}'
											+'{\\sign{$thirdSign}}'
											+'{\\mixed{\\str{$w1}}{\\frac{\\fracstr{$n1}}{\\fracstr{$d1}}}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\row'
											+'{\\html{Answer:&nbsp;}}'
											+'{\\mixed{\\input{$wAns}}{\\frac{\\input{$wNumAns}}{\\input{$wDenAns}}}}'
										+'}',

						controls: {
							"checkAnswer": true,
							"help": false,
							"workbook": true
						}
                    }]
                }, {
                    title: 'Workbook', 
                    children: [{
						problem: '\\row' // step 1
										+'{\\html{$probExpr1}}'
											+'{\\sign{$firstSign}}'
											+'{\\mixed{\\str{$w2}}{\\frac{\\fracstr{$n2}}{\\fracstr{$d2}}}}'
											+'{\\html{$probExpr2}}'
											+'{\\sign{$thirdSign}}'
											+'{\\mixed{\\str{$w1}}{\\frac{\\fracstr{$n1}}{\\fracstr{$d1}}}}',
						answer: '\\rowgrp'+
									'{\\ins{Choose the correct math translation for the problem expression:}}'+
									'{\\grp{\\btn{A}{$buttonValueA}{marg}}{\\html{\xA0$buttonLabelA}}}'+
                                    '{\\grp{\\btn{B}{$buttonValueB}{marg}}{\\html{\xA0$buttonLabelB}}}'+
                                    '{\\grp{\\btn{C}{$buttonValueC}{marg}}{\\html{\xA0$buttonLabelC}}}'+
                                    '{\\grp{\\btn{D}{$buttonValueD}{marg}}{\\html{\xA0$buttonLabelD}}}',
						controls: {
							"checkAnswer": true,
							"help": true
						}
					}, { // step 2
                    	problem: '\\row' 
										+'{\\html{$probExpr1}}'
											+'{\\sign{$firstSign}}'
											+'{\\mixed{\\str{$w2}}{\\frac{\\fracstr{$n2}}{\\fracstr{$d2}}}}'
											+'{\\html{$probExpr2}}'
											+'{\\sign{$thirdSign}}'
											+'{\\mixed{\\str{$w1}}{\\frac{\\fracstr{$n1}}{\\fracstr{$d1}}}}',
						answer: '\\css'
								+'{\\rowgrp'
									+'{\\html{The correct translated expression is:}}'
										+'{\\html{&nbsp;}}'
										+'{\\row'
												+'{\\sign{$firstSign}}'
												+'{\\mixed{\\str{$w1}}{\\frac{\\fracstr{$n1}}{\\fracstr{$d1}}}}'
												+'{\\sign{$secondSign}}'
												+'{\\sign{$thirdSign}}'
												+'{\\mixed{\\str{$w2}}{\\frac{\\fracstr{$n2}}{\\fracstr{$d2}}}}'
										+'}'
									+'{\\html{&nbsp;}}'
									+'{\\ins{Convert mixed numbers above into improper fractions:}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp'
												+'{\\sign{$firstSign}}'
												+'{\\frac{\\input{$imprN1}}{\\fracstr{$d1}}}'
												+'{\\sign{$secondSign}}'
												+'{\\sign{$thirdSign}}'
												+'{\\frac{\\input{$imprN2}}{\\fracstr{$d2}}}'
										+'}'
								+'}{well}',
						controls: {
							"checkAnswer": true,
							"help": true
						}
                    }, { // step 3
                    	problem: '\\row' 
										+'{\\html{$probExpr1}}'
											+'{\\sign{$firstSign}}'
											+'{\\mixed{\\str{$w2}}{\\frac{\\fracstr{$n2}}{\\fracstr{$d2}}}}'
											+'{\\html{$probExpr2}}'
											+'{\\sign{$thirdSign}}'
											+'{\\mixed{\\str{$w1}}{\\frac{\\fracstr{$n1}}{\\fracstr{$d1}}}}',
						answer: '\\css'
								+'{\\rowgrp'
									+'{\\html{The correct translated expression is:}}'
										+'{\\html{&nbsp;}}'
										+'{\\row'
												+'{\\sign{$firstSign}}'
												+'{\\mixed{\\str{$w1}}{\\frac{\\fracstr{$n1}}{\\fracstr{$d1}}}}'
												+'{\\sign{$secondSign}}'
												+'{\\sign{$thirdSign}}'
												+'{\\mixed{\\str{$w2}}{\\frac{\\fracstr{$n2}}{\\fracstr{$d2}}}}'
										+'}'
									+'{\\html{&nbsp;}}'
									+'{\\html{Convert mixed numbers above into improper fractions:}}'
									+'{\\html{&nbsp;}}'
									+'{\\row'
											+'{\\sign{$firstSign}}'
												+'{\\frac{\\fracstr{$imprN1}}{\\fracstr{$d1}}}'
												+'{\\sign{$secondSign}}'
												+'{\\sign{$thirdSign}}'
												+'{\\frac{\\fracstr{$imprN2}}{\\fracstr{$d2}}}'
									+'}'
									+'{\\html{&nbsp;}}'
									+'{\\ins{Determine the lowest common denominator (LCD) of the fractions:}}'
									+'{\\grp{\\input{$lcd}}}'
								+'}{well}',
						controls: {
							"checkAnswer": true,
							"help": true
						}
                    }, { // step 4
						problem: '\\row' 
										+'{\\html{$probExpr1}}'
											+'{\\sign{$firstSign}}'
											+'{\\mixed{\\str{$w2}}{\\frac{\\fracstr{$n2}}{\\fracstr{$d2}}}}'
											+'{\\html{$probExpr2}}'
											+'{\\sign{$thirdSign}}'
											+'{\\mixed{\\str{$w1}}{\\frac{\\fracstr{$n1}}{\\fracstr{$d1}}}}',
						answer: '\\css'
								+'{\\rowgrp'
									+'{\\html{The correct translated expression is:}}'
										+'{\\html{&nbsp;}}'
										+'{\\row'
												+'{\\sign{$firstSign}}'
												+'{\\mixed{\\str{$w1}}{\\frac{\\fracstr{$n1}}{\\fracstr{$d1}}}}'
												+'{\\sign{$secondSign}}'
												+'{\\sign{$thirdSign}}'
												+'{\\mixed{\\str{$w2}}{\\frac{\\fracstr{$n2}}{\\fracstr{$d2}}}}'
										+'}'
									+'{\\html{&nbsp;}}'
									+'{\\html{Convert mixed numbers above into improper fractions:}}'
									+'{\\html{&nbsp;}}'
									+'{\\row'
												+'{\\sign{$firstSign}}'
												+'{\\frac{\\fracstr{$imprN1}}{\\fracstr{$d1}}}'
												+'{\\sign{$secondSign}}'
												+'{\\sign{$thirdSign}}'
												+'{\\frac{\\fracstr{$imprN2}}{\\fracstr{$d2}}}'
									+'}'
									+'{\\html{&nbsp;}}'
									+'{\\html{The lowest common denominator (LCD) of the fractions is:}}'
									+'{\\html{&nbsp;}}'
									+'{\\html{$lcd}}'
									+'{\\html{&nbsp;}}'
									+'{\\ins{Use the LCD to convert the fractions:}}'
									+'{\\row'
												+'{\\sign{$firstSign}}'
												+'{\\frac{\\fracstr{$imprN1}}{\\fracstr{$d1}}}'
												+'{\\sign{$secondSign}}'
												+'{\\sign{$thirdSign}}'
												+'{\\frac{\\fracstr{$imprN2}}{\\fracstr{$d2}}}'
										+'}'   								
        							+'{\\html{&nbsp;}}'
									+'{\\grp'
        										+'{\\sign{$firstSign}}'
        										+'{\\frac{\\input{$answN1}}{\\fracstr{$lcd}}}'
        										+'{\\sign{$secondSign}}'
												+'{\\sign{$thirdSign}}'
        										+'{\\frac{\\input{$answN2}}{\\fracstr{$lcd}}}'
        										+'}'
        									+'}{well}',
						controls: {
							"checkAnswer": true,
							"help": true,
							"fixBottomRight": true
						}
                    }, { // step 5
						problem: '\\row' 
										+'{\\html{$probExpr1}}'
											+'{\\sign{$firstSign}}'
											+'{\\mixed{\\str{$w2}}{\\frac{\\fracstr{$n2}}{\\fracstr{$d2}}}}'
											+'{\\html{$probExpr2}}'
											+'{\\sign{$thirdSign}}'
											+'{\\mixed{\\str{$w1}}{\\frac{\\fracstr{$n1}}{\\fracstr{$d1}}}}',
							answer: '\\css'
									+'{\\rowgrp'
										+'{\\html{The correct translated expression is:}}'
										+'{\\html{&nbsp;}}'
										+'{\\row'
												+'{\\sign{$firstSign}}'
												+'{\\mixed{\\str{$w1}}{\\frac{\\fracstr{$n1}}{\\fracstr{$d1}}}}'
												+'{\\sign{$secondSign}}'
												+'{\\sign{$thirdSign}}'
												+'{\\mixed{\\str{$w2}}{\\frac{\\fracstr{$n2}}{\\fracstr{$d2}}}}'
										+'}'
									+'{\\html{&nbsp;}}'
									+'{\\html{Convert mixed numbers above into improper fractions:}}'
									+'{\\html{&nbsp;}}'
									+'{\\row'
												+'{\\sign{$firstSign}}'
												+'{\\frac{\\fracstr{$imprN1}}{\\fracstr{$d1}}}'
												+'{\\sign{$secondSign}}'
												+'{\\sign{$thirdSign}}'
												+'{\\frac{\\fracstr{$imprN2}}{\\fracstr{$d2}}}'
									+'}'
									+'{\\html{&nbsp;}}'
									+'{\\html{The lowest common denominator (LCD) of the fractions is:}}'
									+'{\\html{&nbsp;}}'
									+'{\\html{$lcd}}'
									+'{\\html{&nbsp;}}'
										+'{\\html{Use the LCD to convert the fractions:}}'
										+'{\\html{&nbsp;}}'
										+'{\\row'
											+'{\\sign{$firstSign}}'
											+'{\\frac{\\fracstr{$imprN1}}{\\fracstr{$d1}}}'
											+'{\\sign{$secondSign}}'
											+'{\\sign{$thirdSign}}'
											+'{\\frac{\\fracstr{$imprN2}}{\\fracstr{$d2}}}'
										+'}'    
										+'{\\html{&nbsp;}}'
										+'{\\row'
											+'{\\sign{$firstSign}}'
											+'{\\frac{\\fracstr{$answN1}}{\\fracstr{$lcd}}}'
											+'{\\sign{$secondSign}}'
											+'{\\sign{$thirdSign}}'
											+'{\\frac{\\fracstr{$answN2}}{\\fracstr{$lcd}}}'
										+'}'
											
										+'{\\html{&nbsp;}}'
										+'{\\ins{$oper the numerators:}}'
										+'{\\grp{\\frac{\\grp{sign{$firstSign}}{\\fracstr{$answN1}}{\\sign{$secondSign}}{\\html{$leftParen}}{\\sign{$thirdSign}}{\\fracstr{$answN2}}{\\html{$rightParen}}}{\\fracstr{$lcd}}}{\\sign{=}}{\\frac{\\input{$answNum}}{\\input{$lcd}}}}'	
        									+'}{well}',
						controls: {
							"checkAnswer": true,
							"help": true,
							"fixBottomRight": true
							}
						}, { // step 6
						problem: '\\row' 
										+'{\\html{$probExpr1}}'
											+'{\\sign{$firstSign}}'
											+'{\\mixed{\\str{$w2}}{\\frac{\\fracstr{$n2}}{\\fracstr{$d2}}}}'
											+'{\\html{$probExpr2}}'
											+'{\\sign{$thirdSign}}'
											+'{\\mixed{\\str{$w1}}{\\frac{\\fracstr{$n1}}{\\fracstr{$d1}}}}',
							answer: '\\css'
									+'{\\rowgrp'
										+'{\\html{The correct translated expression is:}}'
										+'{\\html{&nbsp;}}'
										+'{\\row'
												+'{\\sign{$firstSign}}'
												+'{\\mixed{\\str{$w1}}{\\frac{\\fracstr{$n1}}{\\fracstr{$d1}}}}'
												+'{\\sign{$secondSign}}'
												+'{\\sign{$thirdSign}}'
												+'{\\mixed{\\str{$w2}}{\\frac{\\fracstr{$n2}}{\\fracstr{$d2}}}}'
										+'}'
									+'{\\html{&nbsp;}}'
									+'{\\html{Convert mixed numbers above into improper fractions:}}'
									+'{\\html{&nbsp;}}'
									+'{\\row'
												+'{\\sign{$firstSign}}'
												+'{\\frac{\\fracstr{$imprN1}}{\\fracstr{$d1}}}'
												+'{\\sign{$secondSign}}'
												+'{\\sign{$thirdSign}}'
												+'{\\frac{\\fracstr{$imprN2}}{\\fracstr{$d2}}}'
									+'}'
									+'{\\html{&nbsp;}}'
									+'{\\html{The lowest common denominator (LCD) of the fractions is:}}'
									+'{\\html{&nbsp;}}'
									+'{\\html{$lcd}}'
									+'{\\html{&nbsp;}}'
										+'{\\html{Use the LCD to convert the fractions:}}'
										+'{\\html{&nbsp;}}'
										+'{\\row'
											+'{\\sign{$firstSign}}'
											+'{\\frac{\\fracstr{$imprN1}}{\\fracstr{$d1}}}'
											+'{\\sign{$secondSign}}'
											+'{\\sign{$thirdSign}}'
											+'{\\frac{\\fracstr{$imprN2}}{\\fracstr{$d2}}}'
										+'}'    
										+'{\\html{&nbsp;}}'
										+'{\\row'
											+'{\\sign{$firstSign}}'
											+'{\\frac{\\fracstr{$answN1}}{\\fracstr{$lcd}}}'
											+'{\\sign{$secondSign}}'
											+'{\\sign{$thirdSign}}'
											+'{\\frac{\\fracstr{$answN2}}{\\fracstr{$lcd}}}'
										+'}'
											
										+'{\\html{&nbsp;}}'
										+'{\\html{$oper the numerators:}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp{\\frac{\\grp{sign{$firstSign}}{\\fracstr{$answN1}}{\\sign{$secondSign}}{\\sign{$thirdSign}}{\\fracstr{$answN2}}}{\\fracstr{$lcd}}}{\\sign{=}}{\\frac{\\fracstr{$answNum}}{\\fracstr{$lcd}}}}'
										+'{\\html{&nbsp;}}'
										+'{\\ins{Rewrite the mixed number answer with a proper and simplified fraction:}}'
										+'{\\grp'
											+'{\\frac{\\fracstr{$answNum}}{\\fracstr{$lcd}}}'
											+'{\\sign{=}}'
											+'{\\mixed{\\input{$wAns}}{\\frac{\\input{$wNumAns}}{\\input{$wDenAns}}}}'
										+'}'

        									+'}{well}',
						controls: {
							"checkAnswer": true,
							"help": true,
							"fixBottomRight": true
						}
                    }]
                }]
            },
            
            // Two fractions with double negative
            thirdTempl: {
                title: 'Combining Fractions and Mixed Numbers',
                children: [{
                    title: 'twoFractions Answer',
                    children: [{
						problem: '\\html{&nbsp;}',
						answer: '\\rowgrp'
										+'{\\row'
											+'{\\html{$probExpr1}}'
											+'{\\sign{$thirdSign}}'
											+'{\\frac{\\fracstr{$firstProbNum}}{\\fracstr{$firstProbDen}}}'
											+'{\\html{$probExpr2}}'
											+'{\\sign{$firstSign}}'
											+'{\\frac{\\fracstr{$secondProbNum}}{\\fracstr{$secondProbDen}}}'
											+'}'
										+'{\\html{&nbsp;}}'
										+'{\\row'
											+'{\\html{Answer: }}'
											+'{\\frac{\\input{$differenceNum}}{\\input{$answerDen}}}'
										+'}',

						controls: {
							"checkAnswer": true,
							"help": false,
							"workbook": true
						}
                    }]
                }, {
                    title: 'Workbook',
                    children: [{ // step 1
						problem: '\\row'
										+'{\\html{$probExpr1}}'
											+'{\\sign{$thirdSign}}'
											+'{\\frac{\\fracstr{$firstProbNum}}{\\fracstr{$firstProbDen}}}'
											+'{\\html{$probExpr2}}'
											+'{\\sign{$firstSign}}'
											+'{\\frac{\\fracstr{$secondProbNum}}{\\fracstr{$secondProbDen}}}',
						answer: '\\rowgrp'+
									'{\\ins{Choose the correct math translation for the problem expression:}}'+
									'{\\grp{\\btn{A}{$buttonValueA}{marg}}{\\html{\xA0$buttonLabelA}}}'+
                                    '{\\grp{\\btn{B}{$buttonValueB}{marg}}{\\html{\xA0$buttonLabelB}}}'+
                                    '{\\grp{\\btn{C}{$buttonValueC}{marg}}{\\html{\xA0$buttonLabelC}}}'+
                                    '{\\grp{\\btn{D}{$buttonValueD}{marg}}{\\html{\xA0$buttonLabelD}}}',
						controls: {
							"checkAnswer": true,
							"help": true
						},
                    }, { // step 2
                    	problem: '\\row'
										+'{\\html{$probExpr1}}'
											+'{\\sign{$thirdSign}}'
											+'{\\frac{\\fracstr{$firstProbNum}}{\\fracstr{$firstProbDen}}}'
											+'{\\html{$probExpr2}}'
											+'{\\sign{$firstSign}}'
											+'{\\frac{\\fracstr{$secondProbNum}}{\\fracstr{$secondProbDen}}}',
						answer: '\\css'
								+'{\\rowgrp'
									+'{\\html{The correct translated expression is:}}'
										+'{\\html{&nbsp;}}'
										+'{\\row'
											+'{\\sign{$firstSign}}'
												+'{\\frac{\\fracstr{$firstNum}}{\\fracstr{$firstDen}}}'
												+'{\\sign{$secondSign}}'
												+'{\\html{$leftParen}}'
												+'{\\sign{$thirdSign}}'
												+'{\\frac{\\fracstr{$secondNum}}{\\fracstr{$secondDen}}}'
												+'{\\html{$rightParen}}'
										+'}'
									+'{\\html{&nbsp;}}'
									+'{\\ins{Choose the expression that is rewritten correctly without any double negatives:}}'
									+'{\\grp{\\btn{A}{$buttonValueE}{marg}}{\\html{\xA0$buttonLabelE}}}'
									+'{\\grp{\\btn{B}{$buttonValueF}{marg}}{\\html{\xA0$buttonLabelF}}}'
                                    +'{\\grp{\\btn{C}{$buttonValueG}{marg}}{\\html{\xA0$buttonLabelG}}}'
                                    +'{\\grp{\\btn{D}{$buttonValueH}{marg}}{\\html{\xA0$buttonLabelH}}}'
									
								+'}{well}',

						controls: {
							"checkAnswer": true,
							"help": true
						}
                    }, { // step 3
                    	problem: '\\row'
										+'{\\html{$probExpr1}}'
											+'{\\sign{$thirdSign}}'
											+'{\\frac{\\fracstr{$firstProbNum}}{\\fracstr{$firstProbDen}}}'
											+'{\\html{$probExpr2}}'
											+'{\\sign{$firstSign}}'
											+'{\\frac{\\fracstr{$secondProbNum}}{\\fracstr{$secondProbDen}}}',
						answer: '\\css'
								+'{\\rowgrp'
									+'{\\html{The correct translated expression is:}}'
										+'{\\html{&nbsp;}}'
										+'{\\row'
											+'{\\sign{$firstSign}}'
												+'{\\frac{\\fracstr{$firstNum}}{\\fracstr{$firstDen}}}'
												+'{\\sign{$secondSign}}'
												+'{\\html{$leftParen}}'
												+'{\\sign{$thirdSign}}'
												+'{\\frac{\\fracstr{$secondNum}}{\\fracstr{$secondDen}}}'
												+'{\\html{$rightParen}}'
										+'}'
									+'{\\html{&nbsp;}}'
									+'{\\html{The expression without double negatives is:}}'
										+'{\\html{&nbsp;}}'
										+'{\\row'
											+'{\\sign{$firstSign}}'
											+'{\\frac{\\fracstr{$firstNum}}{\\fracstr{$firstDen}}}'
											+'{\\sign{+}}'
											+'{\\frac{\\fracstr{$secondNum}}{\\fracstr{$secondDen}}}'
										+'}'
									+'{\\html{&nbsp;}}'
									+'{\\ins{Determine the lowest common denominator (LCD) of the fractions:}}'
									+'{\\grp{\\input{$answerDen}}}'
								+'}{well}',
						controls: {
							"checkAnswer": true,
							"help": true
						}
                    }, { // step 4
						problem: '\\row' 
										+'{\\html{$probExpr1}}'
											+'{\\sign{$thirdSign}}'
											+'{\\frac{\\fracstr{$firstProbNum}}{\\fracstr{$firstProbDen}}}'
											+'{\\html{$probExpr2}}'
											+'{\\sign{$firstSign}}'
											+'{\\frac{\\fracstr{$secondProbNum}}{\\fracstr{$secondProbDen}}}',
						answer: '\\css'
								+'{\\rowgrp'
									+'{\\html{The correct translated expression is:}}'
										+'{\\html{&nbsp;}}'
										+'{\\row'
											+'{\\sign{$firstSign}}'
												+'{\\frac{\\fracstr{$firstNum}}{\\fracstr{$firstDen}}}'
												+'{\\sign{$secondSign}}'
												+'{\\html{$leftParen}}'
												+'{\\sign{$thirdSign}}'
												+'{\\frac{\\fracstr{$secondNum}}{\\fracstr{$secondDen}}}'
												+'{\\html{$rightParen}}'
										+'}'
									+'{\\html{&nbsp;}}'
									+'{\\html{The expression without double negatives is:}}'
										+'{\\html{&nbsp;}}'
										+'{\\row'
											+'{\\sign{$firstSign}}'
											+'{\\frac{\\fracstr{$firstNum}}{\\fracstr{$firstDen}}}'
											+'{\\sign{+}}'
											+'{\\frac{\\fracstr{$secondNum}}{\\fracstr{$secondDen}}}'
										+'}'
									+'{\\html{&nbsp;}}'
									+'{\\html{The lowest common denominator (LCD) of the fractions is:}}'
									+'{\\html{&nbsp;}}'
									+'{\\html{$answerDen}}'
									+'{\\html{&nbsp;}}'
									+'{\\ins{Use the LCD to convert the fractions:}}'
									+'{\\row'
											+'{\\sign{$firstSign}}'
												+'{\\frac{\\fracstr{$firstNum}}{\\fracstr{$firstDen}}}'
												+'{\\sign{+}}'
												+'{\\frac{\\fracstr{$secondNum}}{\\fracstr{$secondDen}}}'
										+'}'   								
        							+'{\\html{&nbsp;}}'
									+'{\\grp'
        										+'{\\sign{$firstSign}}'
        										+'{\\frac{\\input{$firstAnswerNum}}{\\fracstr{$answerDen}}}'
        										+'{\\sign{+}}'
        										+'{\\frac{\\input{$secondAnswerNum}}{\\fracstr{$answerDen}}}'
        										+'}'
        									+'}{well}',
						controls: {
							"checkAnswer": true,
							"help": true
						}
                    }, { // step 5
						problem: '\\row'
										+'{\\html{$probExpr1}}'
											+'{\\sign{$thirdSign}}'
											+'{\\frac{\\fracstr{$firstProbNum}}{\\fracstr{$firstProbDen}}}'
											+'{\\html{$probExpr2}}'
											+'{\\sign{$firstSign}}'
											+'{\\frac{\\fracstr{$secondProbNum}}{\\fracstr{$secondProbDen}}}',
							answer: '\\css'
									+'{\\rowgrp'
										+'{\\html{The correct translated expression is:}}'
										+'{\\html{&nbsp;}}'
										+'{\\row'
											+'{\\sign{$firstSign}}'
												+'{\\frac{\\fracstr{$firstNum}}{\\fracstr{$firstDen}}}'
												+'{\\sign{$secondSign}}'
												+'{\\html{$leftParen}}'
												+'{\\sign{$thirdSign}}'
												+'{\\frac{\\fracstr{$secondNum}}{\\fracstr{$secondDen}}}'
												+'{\\html{$rightParen}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\html{The expression without double negatives is:}}'
										+'{\\html{&nbsp;}}'
										+'{\\row'
											+'{\\sign{$firstSign}}'
											+'{\\frac{\\fracstr{$firstNum}}{\\fracstr{$firstDen}}}'
											+'{\\sign{+}}'
											+'{\\frac{\\fracstr{$secondNum}}{\\fracstr{$secondDen}}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\html{The lowest common denominator (LCD) of the fractions is:}}'
										+'{\\html{&nbsp;}}'
										+'{\\html{$answerDen}}'
										+'{\\html{&nbsp;}}'
										+'{\\html{Use the LCD to convert the fractions:}}'
										+'{\\html{&nbsp;}}'
										+'{\\row'
											+'{\\sign{$firstSign}}'
											+'{\\frac{\\fracstr{$firstNum}}{\\fracstr{$firstDen}}}'
											+'{\\sign{+}}'
											+'{\\frac{\\fracstr{$secondNum}}{\\fracstr{$secondDen}}}'
										+'}'    
										+'{\\html{&nbsp;}}'
										+'{\\row{\\sign{$firstSign}}{\\frac{\\fracstr{$firstAnswerNum}}{\\fracstr{$answerDen}}}'
											+'{\\sign{+}}'
											+'{\\frac{\\fracstr{$secondAnswerNum}}{\\fracstr{$answerDen}}}'
										+'}'
											
										+'{\\html{&nbsp;}}'
										+'{\\ins{$oper the numerators:}}'
										+'{\\grp{\\frac{\\grp{sign{$firstSign}}{\\fracstr{$firstAnswerNum}}{\\sign{+}}{\\fracstr{$secondAnswerNum}}}{\\fracstr{$answerDen}}}{\\sign{=}}{\\frac{\\input{$differenceNum}}{\\input{$answerDen}}}}'	
        									+'}{well}',
						controls: {
							"checkAnswer": true,
							"help": true,
							"fixBottomRight": true
						}
                    }]
                }]
            },
// Mixed number fractions with double negatives
            fourthTempl: {
                title: 'Combining Fractions and Mixed Numbers',
                children: [{
                    title: 'twoFractions Answer',
                    children: [{
						problem: '\\html{&nbsp;}',
						answer: '\\rowgrp'
										+'{\\row'
											+'{\\html{$probExpr1}}'
											+'{\\sign{$thirdSign}}'
											+'{\\mixed{\\str{$probw1}}{\\frac{\\fracstr{$probn1}}{\\fracstr{$probd1}}}}'
											+'{\\html{$probExpr2}}'
											+'{\\sign{$firstSign}}'
											+'{\\mixed{\\str{$probw2}}{\\frac{\\fracstr{$probn2}}{\\fracstr{$probd2}}}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\row'
											+'{\\html{Answer:&nbsp;}}'
											+'{\\mixed{\\input{$wAns}}{\\frac{\\input{$wNumAns}}{\\input{$wDenAns}}}}'
										+'}',

						controls: {
							"checkAnswer": true,
							"help": false,
							"workbook": true
						}
                    }]
                }, {
                    title: 'Workbook', 
                    children: [{
						problem: '\\row' // step 1
										+'{\\html{$probExpr1}}'
											+'{\\sign{$thirdSign}}'
											+'{\\mixed{\\str{$probw1}}{\\frac{\\fracstr{$probn1}}{\\fracstr{$probd1}}}}'
											+'{\\html{$probExpr2}}'
											+'{\\sign{$firstSign}}'
											+'{\\mixed{\\str{$probw2}}{\\frac{\\fracstr{$probn2}}{\\fracstr{$probd2}}}}',
						answer: '\\rowgrp'+
									'{\\ins{Choose the correct math translation for the problem expression:}}'+
									'{\\grp{\\btn{A}{$buttonValueA}{marg}}{\\html{\xA0$buttonLabelA}}}'+
                                    '{\\grp{\\btn{B}{$buttonValueB}{marg}}{\\html{\xA0$buttonLabelB}}}'+
                                    '{\\grp{\\btn{C}{$buttonValueC}{marg}}{\\html{\xA0$buttonLabelC}}}'+
                                    '{\\grp{\\btn{D}{$buttonValueD}{marg}}{\\html{\xA0$buttonLabelD}}}',
						controls: {
							"checkAnswer": true,
							"help": true
						}
					}, { // step 2
                    	problem: '\\row' 
										+'{\\html{$probExpr1}}'
											+'{\\sign{$thirdSign}}'
											+'{\\mixed{\\str{$probw1}}{\\frac{\\fracstr{$probn1}}{\\fracstr{$probd1}}}}'
											+'{\\html{$probExpr2}}'
											+'{\\sign{$firstSign}}'
											+'{\\mixed{\\str{$probw2}}{\\frac{\\fracstr{$probn2}}{\\fracstr{$probd2}}}}',
						answer: '\\css'
								+'{\\rowgrp'
									+'{\\html{The correct translated expression is:}}'
										+'{\\html{&nbsp;}}'
										+'{\\row'
												+'{\\sign{$firstSign}}'
												+'{\\mixed{\\str{$w1}}{\\frac{\\fracstr{$n1}}{\\fracstr{$d1}}}}'
												+'{\\sign{$secondSign}}'
												+'{\\html{$leftParen}}'
												+'{\\sign{$thirdSign}}'
												+'{\\mixed{\\str{$w2}}{\\frac{\\fracstr{$n2}}{\\fracstr{$d2}}}}'
												+'{\\html{$rightParen}}'
										+'}'
									+'{\\html{&nbsp;}}'
									+'{\\ins{Choose the expression that is rewritten correctly without any double negatives:}}'
									+'{\\grp{\\btn{A}{$buttonValueE}{marg}}{\\html{\xA0$buttonLabelE}}}'
									+'{\\grp{\\btn{B}{$buttonValueF}{marg}}{\\html{\xA0$buttonLabelF}}}'
                                    +'{\\grp{\\btn{C}{$buttonValueG}{marg}}{\\html{\xA0$buttonLabelG}}}'
                                    +'{\\grp{\\btn{D}{$buttonValueH}{marg}}{\\html{\xA0$buttonLabelH}}}'
								+'}{well}',
						controls: {
							"checkAnswer": true,
							"help": true
						}
					}, { // step 3
                    	problem: '\\row' 
										+'{\\html{$probExpr1}}'
											+'{\\sign{$thirdSign}}'
											+'{\\mixed{\\str{$probw1}}{\\frac{\\fracstr{$probn1}}{\\fracstr{$probd1}}}}'
											+'{\\html{$probExpr2}}'
											+'{\\sign{$firstSign}}'
											+'{\\mixed{\\str{$probw2}}{\\frac{\\fracstr{$probn2}}{\\fracstr{$probd2}}}}',
						answer: '\\css'
								+'{\\rowgrp'
									+'{\\html{The correct translated expression is:}}'
										+'{\\html{&nbsp;}}'
										+'{\\row'
												+'{\\sign{$firstSign}}'
												+'{\\mixed{\\str{$w1}}{\\frac{\\fracstr{$n1}}{\\fracstr{$d1}}}}'
												+'{\\sign{+}}'
												+'{\\mixed{\\str{$w2}}{\\frac{\\fracstr{$n2}}{\\fracstr{$d2}}}}'
										+'}'
									+'{\\html{&nbsp;}}'
									+'{\\ins{Convert mixed numbers above into improper fractions:}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp'
												+'{\\sign{$firstSign}}'
												+'{\\frac{\\input{$imprN1}}{\\fracstr{$d1}}}'
												+'{\\sign{+}}'
												+'{\\frac{\\input{$imprN2}}{\\fracstr{$d2}}}'
										+'}'
								+'}{well}',
						controls: {
							"checkAnswer": true,
							"help": true
						}
                    }, { // step 4
                    	problem: '\\row' 
										+'{\\html{$probExpr1}}'
											+'{\\sign{$thirdSign}}'
											+'{\\mixed{\\str{$probw1}}{\\frac{\\fracstr{$probn1}}{\\fracstr{$probd1}}}}'
											+'{\\html{$probExpr2}}'
											+'{\\sign{$firstSign}}'
											+'{\\mixed{\\str{$probw2}}{\\frac{\\fracstr{$probn2}}{\\fracstr{$probd2}}}}',
						answer: '\\css'
								+'{\\rowgrp'
									+'{\\html{The correct translated expression is:}}'
										+'{\\html{&nbsp;}}'
										+'{\\row'
												+'{\\sign{$firstSign}}'
												+'{\\mixed{\\str{$w1}}{\\frac{\\fracstr{$n1}}{\\fracstr{$d1}}}}'
												+'{\\sign{+}}'
												+'{\\mixed{\\str{$w2}}{\\frac{\\fracstr{$n2}}{\\fracstr{$d2}}}}'
										+'}'
									+'{\\html{&nbsp;}}'
									+'{\\html{Convert mixed numbers above into improper fractions:}}'
									+'{\\html{&nbsp;}}'
									+'{\\row'
											+'{\\sign{$firstSign}}'
												+'{\\frac{\\fracstr{$imprN1}}{\\fracstr{$d1}}}'
												+'{\\sign{+}}'
												+'{\\frac{\\fracstr{$imprN2}}{\\fracstr{$d2}}}'
									+'}'
									+'{\\html{&nbsp;}}'
									+'{\\ins{Determine the lowest common denominator (LCD) of the fractions:}}'
									+'{\\grp{\\input{$lcd}}}'
								+'}{well}',
						controls: {
							"checkAnswer": true,
							"help": true
						}
                    }, { // step 5
						problem: '\\row' 
										+'{\\html{$probExpr1}}'
											+'{\\sign{$thirdSign}}'
											+'{\\mixed{\\str{$probw1}}{\\frac{\\fracstr{$probn1}}{\\fracstr{$probd1}}}}'
											+'{\\html{$probExpr2}}'
											+'{\\sign{$firstSign}}'
											+'{\\mixed{\\str{$probw2}}{\\frac{\\fracstr{$probn2}}{\\fracstr{$probd2}}}}',
						answer: '\\css'
								+'{\\rowgrp'
									+'{\\html{The correct translated expression is:}}'
										+'{\\html{&nbsp;}}'
										+'{\\row'
												+'{\\sign{$firstSign}}'
												+'{\\mixed{\\str{$w1}}{\\frac{\\fracstr{$n1}}{\\fracstr{$d1}}}}'
												+'{\\sign{+}}'
												+'{\\mixed{\\str{$w2}}{\\frac{\\fracstr{$n2}}{\\fracstr{$d2}}}}'
										+'}'
									+'{\\html{&nbsp;}}'
									+'{\\html{Convert mixed numbers above into improper fractions:}}'
									+'{\\html{&nbsp;}}'
									+'{\\row'
												+'{\\sign{$firstSign}}'
												+'{\\frac{\\fracstr{$imprN1}}{\\fracstr{$d1}}}'
												+'{\\sign{+}}'
												+'{\\frac{\\fracstr{$imprN2}}{\\fracstr{$d2}}}'
									+'}'
									+'{\\html{&nbsp;}}'
									+'{\\html{The lowest common denominator (LCD) of the fractions is:}}'
									+'{\\html{&nbsp;}}'
									+'{\\html{$lcd}}'
									+'{\\html{&nbsp;}}'
									+'{\\ins{Use the LCD to convert the fractions:}}'
									+'{\\row'
												+'{\\sign{$firstSign}}'
												+'{\\frac{\\fracstr{$imprN1}}{\\fracstr{$d1}}}'
												+'{\\sign{+}}'
												+'{\\frac{\\fracstr{$imprN2}}{\\fracstr{$d2}}}'
										+'}'   								
        							+'{\\html{&nbsp;}}'
									+'{\\grp'
        										+'{\\sign{$firstSign}}'
        										+'{\\frac{\\input{$answN1}}{\\fracstr{$lcd}}}'
        										+'{\\sign{+}}'
        										+'{\\frac{\\input{$answN2}}{\\fracstr{$lcd}}}'
        										+'}'
        									+'}{well}',
						controls: {
							"checkAnswer": true,
							"help": true,
							"fixBottomRight": true
						}
                    }, { // step 6
						problem: '\\row' 
										+'{\\html{$probExpr1}}'
											+'{\\sign{$thirdSign}}'
											+'{\\mixed{\\str{$probw1}}{\\frac{\\fracstr{$probn1}}{\\fracstr{$probd1}}}}'
											+'{\\html{$probExpr2}}'
											+'{\\sign{$firstSign}}'
											+'{\\mixed{\\str{$probw2}}{\\frac{\\fracstr{$probn2}}{\\fracstr{$probd2}}}}',
							answer: '\\css'
									+'{\\rowgrp'
										+'{\\html{The correct translated expression is:}}'
										+'{\\html{&nbsp;}}'
										+'{\\row'
												+'{\\sign{$firstSign}}'
												+'{\\mixed{\\str{$w1}}{\\frac{\\fracstr{$n1}}{\\fracstr{$d1}}}}'
												+'{\\sign{+}}'
												+'{\\mixed{\\str{$w2}}{\\frac{\\fracstr{$n2}}{\\fracstr{$d2}}}}'
										+'}'
									+'{\\html{&nbsp;}}'
									+'{\\html{Convert mixed numbers above into improper fractions:}}'
									+'{\\html{&nbsp;}}'
									+'{\\row'
												+'{\\sign{$firstSign}}'
												+'{\\frac{\\fracstr{$imprN1}}{\\fracstr{$d1}}}'
												+'{\\sign{+}}'
												+'{\\frac{\\fracstr{$imprN2}}{\\fracstr{$d2}}}'
									+'}'
									+'{\\html{&nbsp;}}'
									+'{\\html{The lowest common denominator (LCD) of the fractions is:}}'
									+'{\\html{&nbsp;}}'
									+'{\\html{$lcd}}'
									+'{\\html{&nbsp;}}'
										+'{\\html{Use the LCD to convert the fractions:}}'
										+'{\\html{&nbsp;}}'
										+'{\\row'
											+'{\\sign{$firstSign}}'
											+'{\\frac{\\fracstr{$imprN1}}{\\fracstr{$d1}}}'
											+'{\\sign{+}}'
											+'{\\frac{\\fracstr{$imprN2}}{\\fracstr{$d2}}}'
										+'}'    
										+'{\\html{&nbsp;}}'
										+'{\\row'
											+'{\\sign{$firstSign}}'
											+'{\\frac{\\fracstr{$answN1}}{\\fracstr{$lcd}}}'
											+'{\\sign{+}}'
											+'{\\frac{\\fracstr{$answN2}}{\\fracstr{$lcd}}}'
										+'}'
											
										+'{\\html{&nbsp;}}'
										+'{\\ins{$oper the numerators:}}'
										+'{\\grp{\\frac{\\grp{sign{$firstSign}}{\\fracstr{$answN1}}{\\sign{+}}{\\fracstr{$answN2}}}{\\fracstr{$lcd}}}{\\sign{=}}{\\frac{\\input{$answNum}}{\\input{$lcd}}}}'	
        									+'}{well}',
						controls: {
							"checkAnswer": true,
							"help": true,
							"fixBottomRight": true
							}
						}, { // step 7
						problem: '\\row' 
										+'{\\html{$probExpr1}}'
											+'{\\sign{$thirdSign}}'
											+'{\\mixed{\\str{$probw1}}{\\frac{\\fracstr{$probn1}}{\\fracstr{$probd1}}}}'
											+'{\\html{$probExpr2}}'
											+'{\\sign{$firstSign}}'
											+'{\\mixed{\\str{$probw2}}{\\frac{\\fracstr{$probn2}}{\\fracstr{$probd2}}}}',
							answer: '\\css'
									+'{\\rowgrp'
										+'{\\html{The correct translated expression is:}}'
										+'{\\html{&nbsp;}}'
										+'{\\row'
												+'{\\sign{$firstSign}}'
												+'{\\mixed{\\str{$w1}}{\\frac{\\fracstr{$n1}}{\\fracstr{$d1}}}}'
												+'{\\sign{+}}'
												+'{\\mixed{\\str{$w2}}{\\frac{\\fracstr{$n2}}{\\fracstr{$d2}}}}'
										+'}'
									+'{\\html{&nbsp;}}'
									+'{\\html{Convert mixed numbers above into improper fractions:}}'
									+'{\\html{&nbsp;}}'
									+'{\\row'
												+'{\\sign{$firstSign}}'
												+'{\\frac{\\fracstr{$imprN1}}{\\fracstr{$d1}}}'
												+'{\\sign{+}}'
												+'{\\frac{\\fracstr{$imprN2}}{\\fracstr{$d2}}}'
									+'}'
									+'{\\html{&nbsp;}}'
									+'{\\html{The lowest common denominator (LCD) of the fractions is:}}'
									+'{\\html{&nbsp;}}'
									+'{\\html{$lcd}}'
									+'{\\html{&nbsp;}}'
										+'{\\html{Use the LCD to convert the fractions:}}'
										+'{\\html{&nbsp;}}'
										+'{\\row'
											+'{\\sign{$firstSign}}'
											+'{\\frac{\\fracstr{$imprN1}}{\\fracstr{$d1}}}'
											+'{\\sign{+}}'
											+'{\\frac{\\fracstr{$imprN2}}{\\fracstr{$d2}}}'
										+'}'    
										+'{\\html{&nbsp;}}'
										+'{\\row'
											+'{\\sign{$firstSign}}'
											+'{\\frac{\\fracstr{$answN1}}{\\fracstr{$lcd}}}'
											+'{\\sign{+}}'
											+'{\\frac{\\fracstr{$answN2}}{\\fracstr{$lcd}}}'
										+'}'
											
										+'{\\html{&nbsp;}}'
										+'{\\html{$oper the numerators:}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp{\\frac{\\grp{sign{$firstSign}}{\\fracstr{$answN1}}{\\sign{+}}{\\fracstr{$answN2}}}{\\fracstr{$lcd}}}{\\sign{=}}{\\frac{\\fracstr{$answNum}}{\\fracstr{$lcd}}}}'
										+'{\\html{&nbsp;}}'
										+'{\\ins{Simplify fraction and rewrite the answer as a mixed number with a proper fraction:}}'
										+'{\\grp'
											+'{\\frac{\\fracstr{$answNum}}{\\fracstr{$lcd}}}'
											+'{\\sign{=}}'
											+'{\\mixed{\\input{$wAns}}{\\frac{\\input{$wNumAns}}{\\input{$wDenAns}}}}'
										+'}'

        									+'}{well}',
						controls: {
							"checkAnswer": true,
							"help": true,
							"fixBottomRight": true
						}
                    }]
                }]
            }
      
        },
        data = [
            //problem 1
         { firstNum: '3', firstDen: '5', secondNum: '9', secondDen: '10', firstAnswerNum: '6', secondAnswerNum: '9', differenceNum: '-3', answerDen: '10', firstSign: '', secondSign: '+', thirdSign: '-', answerSign: '&minus;', leftParen: '(', rightParen: ')', probExpr1: 'Find the sum of', probExpr2: '&nbsp;&nbsp;and&nbsp;&nbsp;', oper: 'Add', template: 'firstTempl', 
            buttonValueA: 'F', buttonLabelA: '<span class=bigger>&nbsp;</span>3/5 <span class=bigger>+</span>(9/10)', 
            buttonValueB: 'T', buttonLabelB: '<span class=bigger>&nbsp;</span>3/5 <span class=bigger>+</span>(- 9/10)', 
            buttonValueC: 'F', buttonLabelC: '<span class=bigger>&nbsp;</span>9/10 <span class=bigger>+</span>(3/5)', 
            buttonValueD: 'F', buttonLabelD: '<span class=bigger>&nbsp;</span>3/5 <span class=bigger>-</span>(- 9/10)' },
            //problem 2
            { firstNum: '3', firstDen: '8', secondNum: '2', secondDen: '5', firstAnswerNum: '15', secondAnswerNum: '16', differenceNum: '-31', answerDen: '40', firstSign: '-', secondSign: '-', thirdSign: '', answerSign: '&minus;', leftParen: '', rightParen: '', probExpr1: 'Find the difference of&nbsp;&nbsp;', probExpr2: 'and', oper: 'Subtract', template: 'firstTempl', 
            buttonValueA: 'F', buttonLabelA: '<span class=bigger>-</span>3/8 <span class=bigger>-</span>(- 2/5)', 
            buttonValueB: 'F', buttonLabelB: '<span class=bigger>-</span>3/8 <span class=bigger>+</span>2/5', 
            buttonValueC: 'F', buttonLabelC: '<span class=bigger>&nbsp;</span>2/5 <span class=bigger>-</span>(- 3/8)', 
            buttonValueD: 'T', buttonLabelD: '<span class=bigger>-</span>3/8 <span class=bigger>-</span>2/5' },

            //problem 3
            { firstProbNum: '3', firstProbDen: '4', secondProbNum: '5', secondProbDen: '6', firstNum: '3', firstDen: '4', secondNum: '5', secondDen: '6', firstAnswerNum: '9', secondAnswerNum: '10', differenceNum: '1', answerDen: '12', firstSign: '-', secondSign: '-', thirdSign: '-', answerSign: '&minus;', leftParen: '(', rightParen: ')', probExpr1: 'Find the difference of&nbsp;&nbsp;', probExpr2: '&nbsp;and&nbsp;&nbsp;', oper: 'Add', template: 'thirdTempl', 
            buttonValueA: 'T', buttonLabelA: '<span class=bigger>-</span>3/4 <span class=bigger>-</span>(- 5/6)', 
            buttonValueB: 'F', buttonLabelB: '<span class=bigger>-</span>3/4 <span class=bigger>-</span>(5/6)', 
            buttonValueC: 'F', buttonLabelC: '<span class=bigger>-</span>3/4 <span class=bigger>-</span>5/6', 
            buttonValueD: 'F', buttonLabelD: '<span class=bigger>-</span>(- 3/4) <span class=bigger>-</span>5/6',

            buttonValueE: 'F', buttonLabelE: '<span class=bigger></span>3/4 <span class=bigger>+</span>5/6', 
            buttonValueF: 'F', buttonLabelF: '<span class=bigger>-</span>3/4 <span class=bigger>-</span>5/6', 
            buttonValueG: 'T', buttonLabelG: '<span class=bigger>-</span>3/4 <span class=bigger>+</span>5/6', 
            buttonValueH: 'F', buttonLabelH: '<span class=bigger>&nbsp;</span>5/6<span class=bigger>-</span>(- 3/4)'
        	},

			//problem 4
			{ firstProbNum: '1', firstProbDen: '3', secondProbNum: '2', secondProbDen: '7', firstNum: '2', firstDen: '7', secondNum: '1', secondDen: '3', firstAnswerNum: '6', secondAnswerNum: '7', differenceNum: '13', answerDen: '21', firstSign: '', secondSign: '-', thirdSign: '-', answerSign: '&minus;', leftParen: '(', rightParen: ')', probExpr1: 'Subtract&nbsp;&nbsp;', probExpr2: 'from', oper: 'Add', template: 'thirdTempl', 
            buttonValueA: 'F', buttonLabelA: '<span class=bigger>-</span>1/3 <span class=bigger>-</span>2/7', 
            buttonValueB: 'T', buttonLabelB: '<span class=bigger>&nbsp;</span>2/7 <span class=bigger>-</span>(- 1/3)', 
            buttonValueC: 'F', buttonLabelC: '<span class=bigger>&nbsp;</span>2/7 <span class=bigger>-</span>1/3', 
            buttonValueD: 'F', buttonLabelD: '<span class=bigger>&nbsp;</span>1/3 <span class=bigger>-</span>2/7',

            buttonValueE: 'F', buttonLabelE: '<span class=bigger>-</span>2/7 <span class=bigger>-</span>1/3', 
            buttonValueF: 'F', buttonLabelF: '<span class=bigger>&nbsp;</span>2/7 <span class=bigger>-</span>1/3', 
            buttonValueG: 'T', buttonLabelG: '<span class=bigger>&nbsp;</span>2/7 <span class=bigger>+</span>1/3', 
            buttonValueH: 'F', buttonLabelH: '<span class=bigger>&nbsp;</span>2/7 <span class=bigger>+</span>(- 1/3)'
        	},

            //problem 5
            { probw1: '2', probn1: '5', probd1: '12', probw2: '1', probn2: '1', probd2: '4', w1: '1', n1: '1', d1: '4', w2: '2', n2: '5', d2: '12',imprN1: '5', imprN2: '29', answN1: '15', answN2: '29', lcd: '12', answNum: '14', wAns: '1', wNumAns: '1', wDenAns: '6',
				firstSign: '-', secondSign: '-', thirdSign: '-', answerSign: '&minus;', leftParen: '(', rightParen: ')', probExpr1: 'Subtract&nbsp;&nbsp;', probExpr2: '&nbsp;from&nbsp;&nbsp;', oper: 'Add', template: 'fourthTempl', 
            buttonValueA: 'F', buttonLabelA: '<span class=bigger>-</span>2 &nbsp;5/12 <span class=bigger>-</span>(- 1 &nbsp;1/4)', 
            buttonValueB: 'F', buttonLabelB: '<span class=bigger>-</span>2 &nbsp;5/12 <span class=bigger>-</span>(1 &nbsp;1/4)', 
            buttonValueC: 'F', buttonLabelC: '<span class=bigger>-</span>1 &nbsp;1/4 <span class=bigger>-</span>(2 &nbsp;5/12)', 
            buttonValueD: 'T', buttonLabelD: '<span class=bigger>-</span>1 &nbsp;1/4 <span class=bigger>-</span>(- 2 &nbsp;5/12)',

            buttonValueE: 'F', buttonLabelE: '<span class=bigger>&nbsp;</span>1 &nbsp;1/4 <span class=bigger>-</span>2 &nbsp;5/12', 
            buttonValueF: 'F', buttonLabelF: '<span class=bigger>-</span>1 &nbsp;1/4 <span class=bigger>-</span>2 &nbsp;5/12', 
            buttonValueG: 'T', buttonLabelG: '<span class=bigger>-</span>1 &nbsp;1/4 <span class=bigger>+</span>2 &nbsp;5/12', 
            buttonValueH: 'F', buttonLabelH: '<span class=bigger>&nbsp;</span>1 &nbsp;1/4 <span class=bigger>+</span>2 &nbsp;5/12' },
			
            //problem 6
			{ w1: '2', n1: '1', d1: '5', w2: '3', n2: '2', d2: '3', imprN1: '11', imprN2: '11', answN1: '33', answN2: '55', lcd: '15', answNum: '-22', wAns: '-1', wNumAns: '7', wDenAns: '15',
				firstSign: '', secondSign: '-', thirdSign: '', answerSign: '&minus;', leftParen: '', rightParen: '', probExpr1: 'Find the difference of', probExpr2: 'and', oper: 'Subtract', template: 'secondTempl', 
            buttonValueA: 'F', buttonLabelA: '<span class=bigger>-</span>2 1/5 <span class=bigger>+</span>3 2/3', 
            buttonValueB: 'T', buttonLabelB: '<span class=bigger>&nbsp;</span>2 1/5 <span class=bigger>-</span>3 2/3', 
            buttonValueC: 'F', buttonLabelC: '<span class=bigger>&nbsp;</span>3 2/3 <span class=bigger>-</span>2 1/5', 
            buttonValueD: 'F', buttonLabelD: '<span class=bigger>&nbsp;</span>2 1/5 <span class=bigger>-</span>(- 3 2/3)' },
            //problem 7
            { w1: '1', n1: '5', d1: '6', w2: '2', n2: '5', d2: '8', imprN1: '11', imprN2: '21', answN1: '44', answN2: '63', lcd: '24', answNum: '-107', wAns: '-4', wNumAns: '11', wDenAns: '24',
				firstSign: '-', secondSign: '+', thirdSign: '-', answerSign: '&minus;', leftParen: '(', rightParen: ')', probExpr1: 'Find the sum of&nbsp;&nbsp;', probExpr2: '&nbsp;and&nbsp;&nbsp;', oper: 'Add', template: 'secondTempl', 
            buttonValueA: 'T', buttonLabelA: '<span class=bigger>-</span>1 5/6 <span class=bigger>+</span>(- 2 5/8)', 
            buttonValueB: 'F', buttonLabelB: '<span class=bigger>-</span>1 5/6 <span class=bigger>+</span>2 5/8', 
            buttonValueC: 'F', buttonLabelC: '<span class=bigger>&nbsp;</span>2 5/8 <span class=bigger>-</span>(- 1 5/6)', 
            buttonValueD: 'F', buttonLabelD: '<span class=bigger>-</span>2 5/8 <span class=bigger>-</span>(- 1 5/6)' },


            //problem 8
			{ w1: '1', n1: '1', d1: '2', w2: '3', n2: '3', d2: '10', imprN1: '3', imprN2: '33', answN1: '15', answN2: '33', lcd: '10', answNum: '-18', wAns: '-1', wNumAns: '4', wDenAns: '5',
				firstSign: '', secondSign: '-', thirdSign: '', answerSign: '&minus;', leftParen: '', rightParen: '', probExpr1: 'Subtract', probExpr2: 'from', oper: 'Subtract', template: 'secondTemplRev', 
            buttonValueA: 'F', buttonLabelA: '<span class=bigger>&nbsp;</span>3 3/10 <span class=bigger>-</span>1 1/2', 
            buttonValueB: 'F', buttonLabelB: '<span class=bigger>-</span>1 1/2 <span class=bigger>-</span>3 3/10', 
            buttonValueC: 'T', buttonLabelC: '<span class=bigger>&nbsp;</span>1 1/2 <span class=bigger>-</span>3 3/10', 
            buttonValueD: 'F', buttonLabelD: '<span class=bigger>&nbsp;</span>3 3/10 <span class=bigger>-</span>(- 3 2/3)' },

		
        ];

    return dataUtils.build(desc, template, data);
}]);



