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
						problem: '\\rowgrp'
									+'{\\html{$probExpr1:}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp'
										+'{\\str{$firstSign}}'
										+'{\\css'
											+'{\\frac{\\fracstr{$firstNum}}{\\fracstr{$firstDen}}}'
											+'{fracNoMargin}'
										+'}'
										+'{\\html{$probExpr2}}'
										+'{\\str{$thirdSign}}'
										+'{\\css'
											+'{\\frac{\\fracstr{$secondNum}}{\\fracstr{$secondDen}}}'
											+'{fracNoMargin}'
										+'}'
									+'}',
						answer: '\\grp{\\frac{\\input{$differenceNum}}{\\input{$answerDen}}}',

						controls: {
							"checkAnswer": true,
							"help": false,
							"stepwiseNextProblem": "Check Answer",
							"workbook": true
						}
                    }]
                }, {
                    title: 'Workbook',
                    children: [{
						problem: '\\rowgrp'
									+'{\\html{$probExpr1:}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp'
										+'{\\str{$firstSign}}'
										+'{\\frac{\\fracstr{$firstNum}}{\\fracstr{$firstDen}}}'
										+'{\\html{$probExpr2}}'
										+'{\\str{$thirdSign}}'
										+'{\\css'
											+'{\\frac{\\fracstr{$secondNum}}{\\fracstr{$secondDen}}}'
											+'{fracNoMargin}'
										+'}'
									+'}',
						answer: '\\rowgrp'+
									'{\\ins{Choose the correct math translation for the problem expression:}}'+
									'{\\grp{\\btn{A}{$buttonValueA}{marg}}{$buttonLabelA}}'+
									'{\\html{&nbsp;}}'+
                                    '{\\grp{\\btn{B}{$buttonValueB}{marg}}{$buttonLabelB}}'+
                                    '{\\html{&nbsp;}}'+
                                    '{\\grp{\\btn{C}{$buttonValueC}{marg}}{$buttonLabelC}}'+
                                    '{\\html{&nbsp;}}'+
                                    '{\\grp{\\btn{D}{$buttonValueD}{marg}}{$buttonLabelD}}',
						controls: {
							"checkAnswer": true,
							"help": true
						},
                    }, {
                    	problem: '\\rowgrp'
									+'{\\html{$probExpr1:}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp'
										+'{\\str{$firstSign}}'
										+'{\\frac{\\fracstr{$firstNum}}{\\fracstr{$firstDen}}}'
										+'{\\html{$probExpr2}}'
										+'{\\str{$thirdSign}}'
										+'{\\css'
											+'{\\frac{\\fracstr{$secondNum}}{\\fracstr{$secondDen}}}'
											+'{fracNoMargin}'
										+'}'
									+'}',
						answer: '\\css'
								+'{\\rowgrp'
									+'{\\html{The correct translated expression is:}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\sign{$firstSign}}'
												+'{\\frac{\\fracstr{$firstNum}}{\\fracstr{$firstDen}}}'
												+'{\\sign{$secondSign}}'
												+'{\\str{(}}'
												+'{\\str{$thirdSign}}'
												+'{\\frac{\\fracstr{$secondNum}}{\\fracstr{$secondDen}}}'
												+'{\\str{)}}'
										+'}'
									+'{\\html{&nbsp;}}'
									+'{\\ins{Determine the lowest common denominator (LCD) of the fractions:}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp{\\input{$answerDen}}}'
								+'}{well}',
						controls: {
							"checkAnswer": true,
							"stepwiseNextProblem": "Check Answer",
							"help": true
						}
                    }, {
						problem: '\\rowgrp'
									+'{\\html{$probExpr1:}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp'
										+'{\\str{$firstSign}}'
										+'{\\frac{\\fracstr{$firstNum}}{\\fracstr{$firstDen}}}'
										+'{\\html{$probExpr2}}'
										+'{\\str{$thirdSign}}'
										+'{\\css'
											+'{\\frac{\\fracstr{$secondNum}}{\\fracstr{$secondDen}}}'
											+'{fracNoMargin}'
										+'}'
									+'}',
						answer: '\\css'
								+'{\\rowgrp'
									+'{\\html{The correct translated expression is:}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\sign{$firstSign}}'
												+'{\\frac{\\fracstr{$firstNum}}{\\fracstr{$firstDen}}}'
												+'{\\sign{$secondSign}}'
												+'{\\str{(}}'
												+'{\\str{$thirdSign}}'
												+'{\\frac{\\fracstr{$secondNum}}{\\fracstr{$secondDen}}}'
												+'{\\str{)}}'
										+'}'
									+'{\\html{&nbsp;}}'
									+'{\\html{The lowest common denominator (LCD) of the fractions is:}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp'
										+'{\\html{&nbsp;&nbsp;&nbsp;}}'
										+'{\\html{$answerDen}}'
									+'}'
									+'{\\html{&nbsp;}}'
									+'{\\ins{Use the LCD to convert the fractions:}}'
									+'{\\grp'
											+'{\\sign{$firstSign}}'
												+'{\\frac{\\fracstr{$firstNum}}{\\fracstr{$firstDen}}}'
												+'{\\sign{$secondSign}}'
												+'{\\str{(}}'
												+'{\\str{$thirdSign}}'
												+'{\\frac{\\fracstr{$secondNum}}{\\fracstr{$secondDen}}}'
												+'{\\str{)}}'
										+'}'   								
        							+'{\\html{&nbsp;}}'
									+'{\\grp'
        										+'{\\sign{$firstSign}}'
        										+'{\\frac{\\input{$firstAnswerNum}}{\\fracstr{$answerDen}}}'
        										+'{\\sign{$secondSign}}'
												+'{\\str{(}}'
												+'{\\str{$thirdSign}}'
        										+'{\\frac{\\input{$secondAnswerNum}}{\\fracstr{$answerDen}}}'
        										+'{\\str{)}}'
        										+'}'
        									+'}{well}',
						controls: {
							"checkAnswer": true,
							"stepwiseNextProblem": "Check Answer",
							"help": true
						}
                    }, {
						problem: '\\rowgrp'
									+'{\\html{$probExpr1:}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp'
										+'{\\str{$firstSign}}'
										+'{\\frac{\\fracstr{$firstNum}}{\\fracstr{$firstDen}}}'
										+'{\\html{$probExpr2}}'
										+'{\\str{$thirdSign}}'
										+'{\\css'
											+'{\\frac{\\fracstr{$secondNum}}{\\fracstr{$secondDen}}}'
											+'{fracNoMargin}'
										+'}'
									+'}',
							answer: '\\css'
									+'{\\rowgrp'
										+'{\\html{The correct translated expression is:}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\sign{$firstSign}}'
												+'{\\frac{\\fracstr{$firstNum}}{\\fracstr{$firstDen}}}'
												+'{\\sign{$secondSign}}'
												+'{\\str{(}}'
												+'{\\str{$thirdSign}}'
												+'{\\frac{\\fracstr{$secondNum}}{\\fracstr{$secondDen}}}'
												+'{\\str{)}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\html{The lowest common denominator (LCD) of the fractions is:}}'
										+'{\\html{&nbsp;}}'
									+'{\\grp'
										+'{\\html{&nbsp;&nbsp;&nbsp;}}'
										+'{\\html{$answerDen}}'
									+'}'
									+'{\\html{&nbsp;}}'
										+'{\\html{Use the LCD to convert the fractions:}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\sign{$firstSign}}'
											+'{\\frac{\\fracstr{$firstNum}}{\\fracstr{$firstDen}}}'
											+'{\\sign{$secondSign}}'
											+'{\\str{(}}'
											+'{\\str{$thirdSign}}'
											+'{\\frac{\\fracstr{$secondNum}}{\\fracstr{$secondDen}}}'
											+'{\\str{)}}'
										+'}'    
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\sign{$firstSign}}'
											+'{\\frac{\\fracstr{$firstAnswerNum}}{\\fracstr{$answerDen}}}'
											+'{\\sign{$secondSign}}'
											+'{\\str{(}}'
											+'{\\str{$thirdSign}}'
											+'{\\frac{\\fracstr{$secondAnswerNum}}{\\fracstr{$answerDen}}}'
											+'{\\str{)}}'
										+'}'
											
										+'{\\html{&nbsp;}}'
										+'{\\ins{$oper the numerators:}}'
										+'{\\grp{\\frac{\\grp{sign{$firstSign}}{\\fracstr{$firstAnswerNum}}{\\sign{$secondSign}}{\\html{(}}{\\sign{$thirdSign}}{\\fracstr{$secondAnswerNum}}{\\html{)}}}{\\fracstr{$answerDen}}}{\\sign{=}}{\\frac{\\input{$differenceNum}}{\\input{$answerDen}}}}'	
        									+'}{well}',
						controls: {
							"checkAnswer": true,
							"help": true,
							"stepwiseNextProblem": "Check Answer",
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
						problem: '\\rowgrp'
									+'{\\html{$probExpr1:}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp'
										+'{\\sign{$firstSign}}'
										+'{\\mixed{\\str{$w1}}{\\frac{\\fracstr{$n1}}{\\fracstr{$d1}}}}'
											+'{\\html{$probExpr2}}'
											+'{\\str{$thirdSign}}'
											+'{\\mixed{\\str{$w2}}{\\frac{\\fracstr{$n2}}{\\fracstr{$d2}}}}'
									+'}',
						answer: '\\grp{\\mixed{\\input{$wAns}}{\\frac{\\input{$wNumAns}}{\\input{$wDenAns}}}}',

						controls: {
							"checkAnswer": true,
							"help": false,
							"stepwiseNextProblem": "Check Answer",
							"workbook": true
						}
                    }]
                }, {
                    title: 'Workbook', 
                    children: [{
						problem: '\\rowgrp'
									+'{\\html{$probExpr1:}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp'
										+'{\\sign{$firstSign}}'
										+'{\\mixed{\\str{$w1}}{\\frac{\\fracstr{$n1}}{\\fracstr{$d1}}}}'
											+'{\\html{$probExpr2}}'
											+'{\\str{$thirdSign}}'
											+'{\\mixed{\\str{$w2}}{\\frac{\\fracstr{$n2}}{\\fracstr{$d2}}}}'
									+'}',
						answer: '\\rowgrp'+
									'{\\ins{Choose the correct math translation for the problem expression:}}'+
									'{\\grp{\\btn{A}{$buttonValueA}{marg}}{$buttonLabelA}}'+
									'{\\html{&nbsp;}}'+
                                    '{\\grp{\\btn{B}{$buttonValueB}{marg}}{$buttonLabelB}}'+
                                    '{\\html{&nbsp;}}'+
                                    '{\\grp{\\btn{C}{$buttonValueC}{marg}}{$buttonLabelC}}'+
                                    '{\\html{&nbsp;}}'+
                                    '{\\grp{\\btn{D}{$buttonValueD}{marg}}{$buttonLabelD}}',
						controls: {
							"checkAnswer": true,
							"help": true
						},
					}, { // step 2
                    	problem: '\\rowgrp'
									+'{\\html{$probExpr1:}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp'
										+'{\\sign{$firstSign}}'
										+'{\\mixed{\\str{$w1}}{\\frac{\\fracstr{$n1}}{\\fracstr{$d1}}}}'
											+'{\\html{$probExpr2}}'
											+'{\\str{$thirdSign}}'
											+'{\\mixed{\\str{$w2}}{\\frac{\\fracstr{$n2}}{\\fracstr{$d2}}}}'
									+'}',
						answer: '\\css'
								+'{\\rowgrp'
									+'{\\html{The correct translated expression is:}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
												+'{\\sign{$firstSign}}'
												+'{\\mixed{\\str{$w1}}{\\frac{\\fracstr{$n1}}{\\fracstr{$d1}}}}'
												+'{\\sign{$secondSign}}'
												+'{\\str{(}}'
												+'{\\str{$thirdSign}}'
												+'{\\mixed{\\str{$w2}}{\\frac{\\fracstr{$n2}}{\\fracstr{$d2}}}}'
												+'{\\str{)}}'
										+'}'
									+'{\\html{&nbsp;}}'
									+'{\\ins{Convert mixed numbers above into improper fractions:}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp'
												+'{\\sign{$firstSign}}'
												+'{\\frac{\\input{$imprN1}}{\\fracstr{$d1}}}'
												+'{\\sign{$secondSign}}'
												+'{\\str{(}}'
												+'{\\str{$thirdSign}}'
												+'{\\frac{\\input{$imprN2}}{\\fracstr{$d2}}}'
												+'{\\str{)}}'
										+'}'
								+'}{well}',
						controls: {
							"checkAnswer": true,
							"stepwiseNextProblem": "Check Answer",
							"help": true
						}
                    }, { // step 3
                    	problem: '\\rowgrp'
									+'{\\html{$probExpr1:}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp'
										+'{\\sign{$firstSign}}'
										+'{\\mixed{\\str{$w1}}{\\frac{\\fracstr{$n1}}{\\fracstr{$d1}}}}'
											+'{\\html{$probExpr2}}'
											+'{\\str{$thirdSign}}'
											+'{\\mixed{\\str{$w2}}{\\frac{\\fracstr{$n2}}{\\fracstr{$d2}}}}'
									+'}',
						answer: '\\css'
								+'{\\rowgrp'
									+'{\\html{The correct translated expression is:}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
												+'{\\sign{$firstSign}}'
												+'{\\mixed{\\str{$w1}}{\\frac{\\fracstr{$n1}}{\\fracstr{$d1}}}}'
												+'{\\sign{$secondSign}}'
												+'{\\str{(}}'
												+'{\\str{$thirdSign}}'
												+'{\\mixed{\\str{$w2}}{\\frac{\\fracstr{$n2}}{\\fracstr{$d2}}}}'
												+'{\\str{)}}'
										+'}'
									+'{\\html{&nbsp;}}'
									+'{\\html{Convert mixed numbers above into improper fractions:}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp'
											+'{\\sign{$firstSign}}'
												+'{\\frac{\\fracstr{$imprN1}}{\\fracstr{$d1}}}'
												+'{\\sign{$secondSign}}'
												+'{\\str{(}}'
												+'{\\str{$thirdSign}}'
												+'{\\frac{\\fracstr{$imprN2}}{\\fracstr{$d2}}}'
												+'{\\str{)}}'
									+'}'
									+'{\\html{&nbsp;}}'
									+'{\\ins{Determine the lowest common denominator (LCD) of the fractions:}}'
									+'{\\grp{\\input{$lcd}}}'
								+'}{well}',
						controls: {
							"checkAnswer": true,
							"stepwiseNextProblem": "Check Answer",
							"help": true
						}
                    }, { // step 4
						problem: '\\rowgrp'
									+'{\\html{$probExpr1:}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp'
										+'{\\sign{$firstSign}}'
										+'{\\mixed{\\str{$w1}}{\\frac{\\fracstr{$n1}}{\\fracstr{$d1}}}}'
											+'{\\html{$probExpr2}}'
											+'{\\str{$thirdSign}}'
											+'{\\mixed{\\str{$w2}}{\\frac{\\fracstr{$n2}}{\\fracstr{$d2}}}}'
									+'}',
						answer: '\\css'
								+'{\\rowgrp'
									+'{\\html{The correct translated expression is:}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
												+'{\\sign{$firstSign}}'
												+'{\\mixed{\\str{$w1}}{\\frac{\\fracstr{$n1}}{\\fracstr{$d1}}}}'
												+'{\\sign{$secondSign}}'
												+'{\\str{(}}'
												+'{\\str{$thirdSign}}'
												+'{\\mixed{\\str{$w2}}{\\frac{\\fracstr{$n2}}{\\fracstr{$d2}}}}'
												+'{\\str{)}}'
										+'}'
									+'{\\html{&nbsp;}}'
									+'{\\html{Convert mixed numbers above into improper fractions:}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp'
												+'{\\sign{$firstSign}}'
												+'{\\frac{\\fracstr{$imprN1}}{\\fracstr{$d1}}}'
												+'{\\sign{$secondSign}}'
												+'{\\str{(}}'
												+'{\\str{$thirdSign}}'
												+'{\\frac{\\fracstr{$imprN2}}{\\fracstr{$d2}}}'
												+'{\\str{)}}'
									+'}'
									+'{\\html{&nbsp;}}'
									+'{\\str{Determine the lowest common denominator (LCD) of the fractions:}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp'
										+'{\\html{&nbsp;&nbsp;&nbsp;&nbsp;}}'
										+'{\\html{$lcd}}'
									+'}'
									+'{\\html{&nbsp;}}'
									+'{\\ins{Use the LCD to convert the fractions:}}'
									+'{\\grp'
												+'{\\sign{$firstSign}}'
												+'{\\frac{\\fracstr{$imprN1}}{\\fracstr{$d1}}}'
												+'{\\sign{$secondSign}}'
												+'{\\str{(}}'
												+'{\\str{$thirdSign}}'
												+'{\\frac{\\fracstr{$imprN2}}{\\fracstr{$d2}}}'
												+'{\\str{)}}'
										+'}'   								
        							+'{\\html{&nbsp;}}'
									+'{\\grp'
        										+'{\\sign{$firstSign}}'
        										+'{\\frac{\\input{$answN1}}{\\fracstr{$lcd}}}'
        										+'{\\sign{$secondSign}}'
												+'{\\str{(}}'
												+'{\\str{$thirdSign}}'
        										+'{\\frac{\\input{$answN2}}{\\fracstr{$lcd}}}'
        										+'{\\str{)}}'
        										+'}'
        									+'}{well}',
						controls: {
							"checkAnswer": true,
							"help": true,
							"stepwiseNextProblem": "Check Answer",
							"fixBottomRight": true
						}
                    }, { // step 5
						problem: '\\rowgrp'
									+'{\\html{$probExpr1:}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp'
										+'{\\sign{$firstSign}}'
										+'{\\mixed{\\str{$w1}}{\\frac{\\fracstr{$n1}}{\\fracstr{$d1}}}}'
											+'{\\html{$probExpr2}}'
											+'{\\str{$thirdSign}}'
											+'{\\mixed{\\str{$w2}}{\\frac{\\fracstr{$n2}}{\\fracstr{$d2}}}}'
									+'}',
							answer: '\\css'
									+'{\\rowgrp'
										+'{\\html{The correct translated expression is:}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
												+'{\\sign{$firstSign}}'
												+'{\\mixed{\\str{$w1}}{\\frac{\\fracstr{$n1}}{\\fracstr{$d1}}}}'
												+'{\\sign{$secondSign}}'
												+'{\\str{(}}'
												+'{\\str{$thirdSign}}'
												+'{\\mixed{\\str{$w2}}{\\frac{\\fracstr{$n2}}{\\fracstr{$d2}}}}'
												+'{\\str{)}}'
										+'}'
									+'{\\html{&nbsp;}}'
									+'{\\html{Convert mixed numbers above into improper fractions:}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp'
												+'{\\sign{$firstSign}}'
												+'{\\frac{\\fracstr{$imprN1}}{\\fracstr{$d1}}}'
												+'{\\sign{$secondSign}}'
												+'{\\str{(}}'
												+'{\\str{$thirdSign}}'
												+'{\\frac{\\fracstr{$imprN2}}{\\fracstr{$d2}}}'
												+'{\\str{)}}'
									+'}'
									+'{\\html{&nbsp;}}'
									+'{\\str{Determine the lowest common denominator (LCD) of the fractions:}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp'
										+'{\\html{&nbsp;&nbsp;&nbsp;&nbsp;}}'
										+'{\\html{$lcd}}'
									+'}'
									+'{\\html{&nbsp;}}'
										+'{\\html{Use the LCD to convert the fractions:}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\sign{$firstSign}}'
											+'{\\frac{\\fracstr{$imprN1}}{\\fracstr{$d1}}}'
											+'{\\sign{$secondSign}}'
											+'{\\str{(}}'
											+'{\\str{$thirdSign}}'
											+'{\\frac{\\fracstr{$imprN2}}{\\fracstr{$d2}}}'
											+'{\\str{)}}'
										+'}'    
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\sign{$firstSign}}'
											+'{\\frac{\\fracstr{$answN1}}{\\fracstr{$lcd}}}'
											+'{\\sign{$secondSign}}'
											+'{\\str{(}}'
											+'{\\str{$thirdSign}}'
											+'{\\frac{\\fracstr{$answN2}}{\\fracstr{$lcd}}}'
											+'{\\str{)}}'
										+'}'
											
										+'{\\html{&nbsp;}}'
										+'{\\ins{$oper the numerators:}}'
										+'{\\grp{\\frac{\\grp{sign{$firstSign}}{\\fracstr{$answN1}}{\\sign{$secondSign}}{\\html{(}}{\\sign{$thirdSign}}{\\fracstr{$answN2}}{\\html{)}}}{\\fracstr{$lcd}}}{\\sign{=}}{\\frac{\\input{$answNum}}{\\input{$lcd}}}}'	
        									+'}{well}',
						controls: {
							"checkAnswer": true,
							"help": true,
							"stepwiseNextProblem": "Check Answer",
							"fixBottomRight": true
							}
						}, { // step 6
						problem: '\\rowgrp'
									+'{\\html{$probExpr1:}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp'
										+'{\\sign{$firstSign}}'
										+'{\\mixed{\\str{$w1}}{\\frac{\\fracstr{$n1}}{\\fracstr{$d1}}}}'
											+'{\\html{$probExpr2}}'
											+'{\\str{$thirdSign}}'
											+'{\\mixed{\\str{$w2}}{\\frac{\\fracstr{$n2}}{\\fracstr{$d2}}}}'
									+'}',
							answer: '\\css'
									+'{\\rowgrp'
										+'{\\html{The correct translated expression is:}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
												+'{\\sign{$firstSign}}'
												+'{\\mixed{\\str{$w1}}{\\frac{\\fracstr{$n1}}{\\fracstr{$d1}}}}'
												+'{\\sign{$secondSign}}'
												+'{\\str{(}}'
												+'{\\str{$thirdSign}}'
												+'{\\mixed{\\str{$w2}}{\\frac{\\fracstr{$n2}}{\\fracstr{$d2}}}}'
												+'{\\str{)}}'
										+'}'
									+'{\\html{&nbsp;}}'
									+'{\\html{Convert mixed numbers above into improper fractions:}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp'
												+'{\\sign{$firstSign}}'
												+'{\\frac{\\fracstr{$imprN1}}{\\fracstr{$d1}}}'
												+'{\\sign{$secondSign}}'
												+'{\\str{(}}'
												+'{\\str{$thirdSign}}'
												+'{\\frac{\\fracstr{$imprN2}}{\\fracstr{$d2}}}'
												+'{\\str{)}}'
									+'}'
									+'{\\html{&nbsp;}}'
									+'{\\str{Determine the lowest common denominator (LCD) of the fractions:}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp'
										+'{\\html{&nbsp;&nbsp;&nbsp;&nbsp;}}'
										+'{\\html{$lcd}}'
									+'}'
									+'{\\html{&nbsp;}}'
										+'{\\html{Use the LCD to convert the fractions:}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\sign{$firstSign}}'
											+'{\\frac{\\fracstr{$imprN1}}{\\fracstr{$d1}}}'
											+'{\\sign{$secondSign}}'
											+'{\\str{(}}'
											+'{\\str{$thirdSign}}'
											+'{\\frac{\\fracstr{$imprN2}}{\\fracstr{$d2}}}'
											+'{\\str{)}}'
										+'}'    
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\sign{$firstSign}}'
											+'{\\frac{\\fracstr{$answN1}}{\\fracstr{$lcd}}}'
											+'{\\sign{$secondSign}}'
											+'{\\str{(}}'
											+'{\\str{$thirdSign}}'
											+'{\\frac{\\fracstr{$answN2}}{\\fracstr{$lcd}}}'
											+'{\\str{)}}'
										+'}'
											
										+'{\\html{&nbsp;}}'
										+'{\\html{$oper the numerators:}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp{\\frac{\\grp{sign{$firstSign}}{\\fracstr{$answN1}}{\\sign{$secondSign}}{\\html{(}}{\\sign{$thirdSign}}{\\fracstr{$answN2}}{\\html{)}}}{\\fracstr{$lcd}}}{\\sign{=}}{\\frac{\\fracstr{$answNum}}{\\fracstr{$lcd}}}}'
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
							"stepwiseNextProblem": "Check Answer",
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
						problem: '\\rowgrp'
									+'{\\html{$probExpr1:}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp'
										+'{\\sign{$firstSign}}'
										+'{\\mixed{\\str{$w2}}{\\frac{\\fracstr{$n2}}{\\fracstr{$d2}}}}'
										+'{\\html{$probExpr2}}'
										+'{\\str{$thirdSign}}'
										+'{\\mixed{\\str{$w1}}{\\frac{\\fracstr{$n1}}{\\fracstr{$d1}}}}'
									+'}',
						answer: '\\grp{\\mixed{\\input{$wAns}}{\\frac{\\input{$wNumAns}}{\\input{$wDenAns}}}}',

						controls: {
							"checkAnswer": true,
							"help": false,
							"stepwiseNextProblem": "Check Answer",
							"workbook": true
						}
                    }]
                }, {
                    title: 'Workbook', 
                    children: [{
						problem: '\\rowgrp'
									+'{\\html{$probExpr1:}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp'
										+'{\\sign{$firstSign}}'
										+'{\\mixed{\\str{$w2}}{\\frac{\\fracstr{$n2}}{\\fracstr{$d2}}}}'
										+'{\\html{$probExpr2}}'
										+'{\\str{$thirdSign}}'
										+'{\\mixed{\\str{$w1}}{\\frac{\\fracstr{$n1}}{\\fracstr{$d1}}}}'
									+'}',
						answer: '\\rowgrp'+
									'{\\ins{Choose the correct math translation for the problem expression:}}'+
									'{\\grp{\\btn{A}{$buttonValueA}{marg}}{$buttonLabelA}}'+
									'{\\html{&nbsp;}}'+
                                    '{\\grp{\\btn{B}{$buttonValueB}{marg}}{$buttonLabelB}}'+
                                    '{\\html{&nbsp;}}'+
                                    '{\\grp{\\btn{C}{$buttonValueC}{marg}}{$buttonLabelC}}'+
                                    '{\\html{&nbsp;}}'+
                                    '{\\grp{\\btn{D}{$buttonValueD}{marg}}{$buttonLabelD}}',
						controls: {
							"checkAnswer": true,
							"help": true
						}
					}, { // step 2
                    	problem: '\\rowgrp'
									+'{\\html{$probExpr1:}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp'
										+'{\\sign{$firstSign}}'
										+'{\\mixed{\\str{$w2}}{\\frac{\\fracstr{$n2}}{\\fracstr{$d2}}}}'
										+'{\\html{$probExpr2}}'
										+'{\\str{$thirdSign}}'
										+'{\\mixed{\\str{$w1}}{\\frac{\\fracstr{$n1}}{\\fracstr{$d1}}}}'
									+'}',
						answer: '\\css'
								+'{\\rowgrp'
									+'{\\html{The correct translated expression is:}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
												+'{\\sign{$firstSign}}'
												+'{\\mixed{\\str{$w1}}{\\frac{\\fracstr{$n1}}{\\fracstr{$d1}}}}'
												+'{\\sign{$secondSign}}'
												+'{\\str{$thirdSign}}'
												+'{\\mixed{\\str{$w2}}{\\frac{\\fracstr{$n2}}{\\fracstr{$d2}}}}'
										+'}'
									+'{\\html{&nbsp;}}'
									+'{\\ins{Convert mixed numbers above into improper fractions:}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp'
												+'{\\sign{$firstSign}}'
												+'{\\frac{\\input{$imprN1}}{\\fracstr{$d1}}}'
												+'{\\sign{$secondSign}}'
												+'{\\str{$thirdSign}}'
												+'{\\frac{\\input{$imprN2}}{\\fracstr{$d2}}}'
										+'}'
								+'}{well}',
						controls: {
							"checkAnswer": true,
							"stepwiseNextProblem": "Check Answer",
							"help": true
						}
                    }, { // step 3
                    	problem: '\\rowgrp'
									+'{\\html{$probExpr1:}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp'
										+'{\\sign{$firstSign}}'
										+'{\\mixed{\\str{$w2}}{\\frac{\\fracstr{$n2}}{\\fracstr{$d2}}}}'
										+'{\\html{$probExpr2}}'
										+'{\\str{$thirdSign}}'
										+'{\\mixed{\\str{$w1}}{\\frac{\\fracstr{$n1}}{\\fracstr{$d1}}}}'
									+'}',
						answer: '\\css'
								+'{\\rowgrp'
									+'{\\html{The correct translated expression is:}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
												+'{\\sign{$firstSign}}'
												+'{\\mixed{\\str{$w1}}{\\frac{\\fracstr{$n1}}{\\fracstr{$d1}}}}'
												+'{\\sign{$secondSign}}'
												+'{\\str{$thirdSign}}'
												+'{\\mixed{\\str{$w2}}{\\frac{\\fracstr{$n2}}{\\fracstr{$d2}}}}'
										+'}'
									+'{\\html{&nbsp;}}'
									+'{\\html{Convert mixed numbers above into improper fractions:}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp'
											+'{\\sign{$firstSign}}'
												+'{\\frac{\\fracstr{$imprN1}}{\\fracstr{$d1}}}'
												+'{\\sign{$secondSign}}'
												+'{\\str{$thirdSign}}'
												+'{\\frac{\\fracstr{$imprN2}}{\\fracstr{$d2}}}'
									+'}'
									+'{\\html{&nbsp;}}'
									+'{\\ins{Determine the lowest common denominator (LCD) of the fractions:}}'
									+'{\\grp{\\input{$lcd}}}'
								+'}{well}',
						controls: {
							"checkAnswer": true,
							"stepwiseNextProblem": "Check Answer",
							"help": true
						}
                    }, { // step 4
						problem: '\\rowgrp'
									+'{\\html{$probExpr1:}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp'
										+'{\\sign{$firstSign}}'
										+'{\\mixed{\\str{$w2}}{\\frac{\\fracstr{$n2}}{\\fracstr{$d2}}}}'
										+'{\\html{$probExpr2}}'
										+'{\\str{$thirdSign}}'
										+'{\\mixed{\\str{$w1}}{\\frac{\\fracstr{$n1}}{\\fracstr{$d1}}}}'
									+'}',
						answer: '\\css'
								+'{\\rowgrp'
									+'{\\html{The correct translated expression is:}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
												+'{\\sign{$firstSign}}'
												+'{\\mixed{\\str{$w1}}{\\frac{\\fracstr{$n1}}{\\fracstr{$d1}}}}'
												+'{\\sign{$secondSign}}'
												+'{\\str{$thirdSign}}'
												+'{\\mixed{\\str{$w2}}{\\frac{\\fracstr{$n2}}{\\fracstr{$d2}}}}'
										+'}'
									+'{\\html{&nbsp;}}'
									+'{\\html{Convert mixed numbers above into improper fractions:}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp'
												+'{\\sign{$firstSign}}'
												+'{\\frac{\\fracstr{$imprN1}}{\\fracstr{$d1}}}'
												+'{\\sign{$secondSign}}'
												+'{\\str{$thirdSign}}'
												+'{\\frac{\\fracstr{$imprN2}}{\\fracstr{$d2}}}'
									+'}'
									+'{\\html{&nbsp;}}'
									+'{\\str{Determine the lowest common denominator (LCD) of the fractions:}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp'
										+'{\\html{&nbsp;&nbsp;&nbsp;&nbsp;}}'
										+'{\\html{$lcd}}'
									+'}'
									+'{\\html{&nbsp;}}'
									+'{\\ins{Use the LCD to convert the fractions:}}'
									+'{\\grp'
												+'{\\sign{$firstSign}}'
												+'{\\frac{\\fracstr{$imprN1}}{\\fracstr{$d1}}}'
												+'{\\sign{$secondSign}}'
												+'{\\str{$thirdSign}}'
												+'{\\frac{\\fracstr{$imprN2}}{\\fracstr{$d2}}}'
										+'}'   								
        							+'{\\html{&nbsp;}}'
									+'{\\grp'
        										+'{\\sign{$firstSign}}'
        										+'{\\frac{\\input{$answN1}}{\\fracstr{$lcd}}}'
        										+'{\\sign{$secondSign}}'
												+'{\\str{$thirdSign}}'
        										+'{\\frac{\\input{$answN2}}{\\fracstr{$lcd}}}'
        										+'}'
        									+'}{well}',
						controls: {
							"checkAnswer": true,
							"help": true,
							"stepwiseNextProblem": "Check Answer",
							"fixBottomRight": true
						}
                    }, { // step 5
						problem: '\\rowgrp'
									+'{\\html{$probExpr1:}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp'
										+'{\\sign{$firstSign}}'
										+'{\\mixed{\\str{$w2}}{\\frac{\\fracstr{$n2}}{\\fracstr{$d2}}}}'
										+'{\\html{$probExpr2}}'
										+'{\\str{$thirdSign}}'
										+'{\\mixed{\\str{$w1}}{\\frac{\\fracstr{$n1}}{\\fracstr{$d1}}}}'
									+'}',
							answer: '\\css'
									+'{\\rowgrp'
										+'{\\html{The correct translated expression is:}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
												+'{\\sign{$firstSign}}'
												+'{\\mixed{\\str{$w1}}{\\frac{\\fracstr{$n1}}{\\fracstr{$d1}}}}'
												+'{\\sign{$secondSign}}'
												+'{\\str{$thirdSign}}'
												+'{\\mixed{\\str{$w2}}{\\frac{\\fracstr{$n2}}{\\fracstr{$d2}}}}'
										+'}'
									+'{\\html{&nbsp;}}'
									+'{\\html{Convert mixed numbers above into improper fractions:}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp'
												+'{\\sign{$firstSign}}'
												+'{\\frac{\\fracstr{$imprN1}}{\\fracstr{$d1}}}'
												+'{\\sign{$secondSign}}'
												+'{\\str{$thirdSign}}'
												+'{\\frac{\\fracstr{$imprN2}}{\\fracstr{$d2}}}'
									+'}'
									+'{\\html{&nbsp;}}'
									+'{\\str{Determine the lowest common denominator (LCD) of the fractions:}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp'
										+'{\\html{&nbsp;&nbsp;&nbsp;&nbsp;}}'
										+'{\\html{$lcd}}'
									+'}'
									+'{\\html{&nbsp;}}'
										+'{\\html{Use the LCD to convert the fractions:}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\sign{$firstSign}}'
											+'{\\frac{\\fracstr{$imprN1}}{\\fracstr{$d1}}}'
											+'{\\sign{$secondSign}}'
											+'{\\str{$thirdSign}}'
											+'{\\frac{\\fracstr{$imprN2}}{\\fracstr{$d2}}}'
										+'}'    
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\sign{$firstSign}}'
											+'{\\frac{\\fracstr{$answN1}}{\\fracstr{$lcd}}}'
											+'{\\sign{$secondSign}}'
											+'{\\str{$thirdSign}}'
											+'{\\frac{\\fracstr{$answN2}}{\\fracstr{$lcd}}}'
										+'}'
											
										+'{\\html{&nbsp;}}'
										+'{\\ins{$operNumsText}}'
										+'{\\grp{\\frac{\\grp{sign{$firstSign}}{\\fracstr{$answN1}}{\\sign{$secondSign}}{\\html{(}}{\\sign{$thirdSign}}{\\fracstr{$answN2}}{\\html{)}}}{\\fracstr{$lcd}}}{\\sign{=}}{\\frac{\\input{$simpleAnswNum}}{\\input{$wDenAns}}}}'	
        									+'}{well}',
						controls: {
							"checkAnswer": true,
							"help": true,
							"stepwiseNextProblem": "Check Answer",
							"fixBottomRight": true
							}
						}, { // step 6
						problem: '\\rowgrp'
									+'{\\html{$probExpr1:}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp'
										+'{\\sign{$firstSign}}'
										+'{\\mixed{\\str{$w2}}{\\frac{\\fracstr{$n2}}{\\fracstr{$d2}}}}'
										+'{\\html{$probExpr2}}'
										+'{\\str{$thirdSign}}'
										+'{\\mixed{\\str{$w1}}{\\frac{\\fracstr{$n1}}{\\fracstr{$d1}}}}'
									+'}',
							answer: '\\css'
									+'{\\rowgrp'
										+'{\\html{The correct translated expression is:}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
												+'{\\sign{$firstSign}}'
												+'{\\mixed{\\str{$w1}}{\\frac{\\fracstr{$n1}}{\\fracstr{$d1}}}}'
												+'{\\sign{$secondSign}}'
												+'{\\str{$thirdSign}}'
												+'{\\mixed{\\str{$w2}}{\\frac{\\fracstr{$n2}}{\\fracstr{$d2}}}}'
										+'}'
									+'{\\html{&nbsp;}}'
									+'{\\html{Convert mixed numbers above into improper fractions:}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp'
												+'{\\sign{$firstSign}}'
												+'{\\frac{\\fracstr{$imprN1}}{\\fracstr{$d1}}}'
												+'{\\sign{$secondSign}}'
												+'{\\str{$thirdSign}}'
												+'{\\frac{\\fracstr{$imprN2}}{\\fracstr{$d2}}}'
									+'}'
									+'{\\html{&nbsp;}}'
									+'{\\str{Determine the lowest common denominator (LCD) of the fractions:}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp'
										+'{\\html{&nbsp;&nbsp;&nbsp;&nbsp;}}'
										+'{\\html{$lcd}}'
									+'}'
									+'{\\html{&nbsp;}}'
										+'{\\html{Use the LCD to convert the fractions:}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\sign{$firstSign}}'
											+'{\\frac{\\fracstr{$imprN1}}{\\fracstr{$d1}}}'
											+'{\\sign{$secondSign}}'
											+'{\\str{$thirdSign}}'
											+'{\\frac{\\fracstr{$imprN2}}{\\fracstr{$d2}}}'
										+'}'    
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\sign{$firstSign}}'
											+'{\\frac{\\fracstr{$answN1}}{\\fracstr{$lcd}}}'
											+'{\\sign{$secondSign}}'
											+'{\\str{$thirdSign}}'
											+'{\\frac{\\fracstr{$answN2}}{\\fracstr{$lcd}}}'
										+'}'
											
										+'{\\html{&nbsp;}}'
										+'{\\html{$operNumsText}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp{\\frac{\\grp{sign{$firstSign}}{\\fracstr{$answN1}}{\\sign{&nbsp;$secondSign}}{\\sign{$thirdSign}}{\\fracstr{$answN2}}}{\\fracstr{$lcd}}}{\\sign{=}}{\\frac{\\fracstr{$simpleAnswNum}}{\\fracstr{$wDenAns}}}}'
										+'{\\html{&nbsp;}}'
										+'{\\ins{Rewrite the answer as a  mixed number:}}'
										+'{\\grp'
											+'{\\frac{\\fracstr{$simpleAnswNum}}{\\fracstr{$wDenAns}}}'
											+'{\\sign{=}}'
											+'{\\mixed{\\input{$wAns}}{\\frac{\\input{$wNumAns}}{\\input{$wDenAns}}}}'
										+'}'

        									+'}{well}',
						controls: {
							"checkAnswer": true,
							"help": true,
							"stepwiseNextProblem": "Check Answer",
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
						problem: '\\rowgrp'
									+'{\\html{$probExpr1:}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp'
										+'{\\str{$thirdSign}}'
										+'{\\css'
											+'{\\frac{\\fracstr{$firstProbNum}}{\\fracstr{$firstProbDen}}}'
											+'{fracNoMargin}'
										+'}'
										+'{\\html{$probExpr2}}'
										+'{\\sign{$firstSign}}'
										+'{\\css'
											+'{\\frac{\\fracstr{$secondProbNum}}{\\fracstr{$secondProbDen}}}'
											+'{fracNoMargin}'
										+'}'
									+'}',
						answer: '\\grp{\\frac{\\input{$differenceNum}}{\\input{$answerDen}}}',
						controls: {
							"checkAnswer": true,
							"help": false,
							"stepwiseNextProblem": "Check Answer",
							"workbook": true
						}
                    }]
                }, {
                    title: 'Workbook',
                    children: [{ // step 1
						problem: '\\rowgrp'
									+'{\\html{$probExpr1:}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp'
										+'{\\str{$thirdSign}}'
										+'{\\css'
											+'{\\frac{\\fracstr{$firstProbNum}}{\\fracstr{$firstProbDen}}}'
											+'{fracNoMargin}'
										+'}'
										+'{\\html{$probExpr2}}'
										+'{\\sign{$firstSign}}'
										+'{\\css'
											+'{\\frac{\\fracstr{$secondProbNum}}{\\fracstr{$secondProbDen}}}'
											+'{fracNoMargin}'
										+'}'
									+'}',
						answer: '\\rowgrp'+
									'{\\ins{Choose the correct math translation for the problem expression:}}'+
									'{\\grp{\\btn{A}{$buttonValueA}{marg}}{$buttonLabelA}}'+
									'{\\html{&nbsp;}}'+
                                    '{\\grp{\\btn{B}{$buttonValueB}{marg}}{$buttonLabelB}}'+
                                    '{\\html{&nbsp;}}'+
                                    '{\\grp{\\btn{C}{$buttonValueC}{marg}}{$buttonLabelC}}'+
                                    '{\\html{&nbsp;}}'+
                                    '{\\grp{\\btn{D}{$buttonValueD}{marg}}{$buttonLabelD}}',
						controls: {
							"checkAnswer": true,
							"help": true
						},
                    }, { // step 2
                    	problem: '\\rowgrp'
									+'{\\html{$probExpr1:}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp'
										+'{\\str{$thirdSign}}'
										+'{\\css'
											+'{\\frac{\\fracstr{$firstProbNum}}{\\fracstr{$firstProbDen}}}'
											+'{fracNoMargin}'
										+'}'
										+'{\\html{$probExpr2}}'
										+'{\\sign{$firstSign}}'
										+'{\\css'
											+'{\\frac{\\fracstr{$secondProbNum}}{\\fracstr{$secondProbDen}}}'
											+'{fracNoMargin}'
										+'}'
									+'}',
						answer: '\\css'
								+'{\\rowgrp'
									+'{\\html{The correct translated expression is:}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\sign{$firstSign}}'
												+'{\\frac{\\fracstr{$firstNum}}{\\fracstr{$firstDen}}}'
												+'{\\sign{$secondSign}}'
												+'{\\str{(}}'
												+'{\\str{$thirdSign}}'
												+'{\\frac{\\fracstr{$secondNum}}{\\fracstr{$secondDen}}}'
												+'{\\str{)}}'
										+'}'
									+'{\\html{&nbsp;}}'
									+'{\\ins{Choose the expression that is rewritten correctly without any double negatives:}}'
									+'{\\grp{\\btn{A}{$buttonValueE}{marg}}{$buttonLabelE}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp{\\btn{B}{$buttonValueF}{marg}}{$buttonLabelF}}'
									+'{\\html{&nbsp;}}'
                                    +'{\\grp{\\btn{C}{$buttonValueG}{marg}}{$buttonLabelG}}'
                                    +'{\\html{&nbsp;}}'
                                    +'{\\grp{\\btn{D}{$buttonValueH}{marg}}{$buttonLabelH}}'
									
								+'}{well}',

						controls: {
							"checkAnswer": true,
							"help": true
						}
                    }, { // step 3
                    	problem: '\\rowgrp'
									+'{\\html{$probExpr1:}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp'
										+'{\\str{$thirdSign}}'
										+'{\\css'
											+'{\\frac{\\fracstr{$firstProbNum}}{\\fracstr{$firstProbDen}}}'
											+'{fracNoMargin}'
										+'}'
										+'{\\html{$probExpr2}}'
										+'{\\sign{$firstSign}}'
										+'{\\css'
											+'{\\frac{\\fracstr{$secondProbNum}}{\\fracstr{$secondProbDen}}}'
											+'{fracNoMargin}'
										+'}'
									+'}',
						answer: '\\css'
								+'{\\rowgrp'
									+'{\\html{The correct translated expression is:}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\sign{$firstSign}}'
												+'{\\frac{\\fracstr{$firstNum}}{\\fracstr{$firstDen}}}'
												+'{\\sign{$secondSign}}'
												+'{\\str{(}}'
												+'{\\str{$thirdSign}}'
												+'{\\frac{\\fracstr{$secondNum}}{\\fracstr{$secondDen}}}'
												+'{\\str{)}}'
										+'}'
									+'{\\html{&nbsp;}}'
									+'{\\html{The expression without double negatives is:}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
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
							"stepwiseNextProblem": "Check Answer",
							"help": true
						}
                    }, { // step 4
						problem: '\\rowgrp'
									+'{\\html{$probExpr1:}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp'
										+'{\\str{$thirdSign}}'
										+'{\\css'
											+'{\\frac{\\fracstr{$firstProbNum}}{\\fracstr{$firstProbDen}}}'
											+'{fracNoMargin}'
										+'}'
										+'{\\html{$probExpr2}}'
										+'{\\sign{$firstSign}}'
										+'{\\css'
											+'{\\frac{\\fracstr{$secondProbNum}}{\\fracstr{$secondProbDen}}}'
											+'{fracNoMargin}'
										+'}'
									+'}',
						answer: '\\css'
								+'{\\rowgrp'
									+'{\\html{The correct translated expression is:}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\sign{$firstSign}}'
												+'{\\frac{\\fracstr{$firstNum}}{\\fracstr{$firstDen}}}'
												+'{\\sign{$secondSign}}'
												+'{\\str{(}}'
												+'{\\str{$thirdSign}}'
												+'{\\frac{\\fracstr{$secondNum}}{\\fracstr{$secondDen}}}'
												+'{\\str{)}}'
										+'}'
									+'{\\html{&nbsp;}}'
									+'{\\html{The expression without double negatives is:}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\sign{$firstSign}}'
											+'{\\frac{\\fracstr{$firstNum}}{\\fracstr{$firstDen}}}'
											+'{\\sign{+}}'
											+'{\\frac{\\fracstr{$secondNum}}{\\fracstr{$secondDen}}}'
										+'}'
									+'{\\html{&nbsp;}}'
									+'{\\html{The lowest common denominator (LCD) of the fractions is:}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp'
										+'{\\html{&nbsp;&nbsp;&nbsp;}}'
										+'{\\html{$answerDen}}'
									+'}'
									+'{\\html{&nbsp;}}'
									+'{\\ins{Use the LCD to convert the fractions:}}'
									+'{\\grp'
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
							"stepwiseNextProblem": "Check Answer",
							"help": true
						}
                    }, { // step 5
						problem: '\\rowgrp'
									+'{\\html{$probExpr1:}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp'
										+'{\\str{$thirdSign}}'
										+'{\\css'
											+'{\\frac{\\fracstr{$firstProbNum}}{\\fracstr{$firstProbDen}}}'
											+'{fracNoMargin}'
										+'}'
										+'{\\html{$probExpr2}}'
										+'{\\sign{$firstSign}}'
										+'{\\css'
											+'{\\frac{\\fracstr{$secondProbNum}}{\\fracstr{$secondProbDen}}}'
											+'{fracNoMargin}'
										+'}'
									+'}',
							answer: '\\css'
									+'{\\rowgrp'
										+'{\\html{The correct translated expression is:}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\sign{$firstSign}}'
												+'{\\frac{\\fracstr{$firstNum}}{\\fracstr{$firstDen}}}'
												+'{\\sign{$secondSign}}'
												+'{\\str{(}}'
												+'{\\str{$thirdSign}}'
												+'{\\frac{\\fracstr{$secondNum}}{\\fracstr{$secondDen}}}'
												+'{\\str{)}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\html{The expression without double negatives is:}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\sign{$firstSign}}'
											+'{\\frac{\\fracstr{$firstNum}}{\\fracstr{$firstDen}}}'
											+'{\\sign{+}}'
											+'{\\frac{\\fracstr{$secondNum}}{\\fracstr{$secondDen}}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\html{The lowest common denominator (LCD) of the fractions is:}}'
										+'{\\html{&nbsp;}}'
									+'{\\grp'
										+'{\\html{&nbsp;&nbsp;&nbsp;}}'
										+'{\\html{$answerDen}}'
									+'}'
									+'{\\html{&nbsp;}}'
										+'{\\html{Use the LCD to convert the fractions:}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\sign{$firstSign}}'
											+'{\\frac{\\fracstr{$firstNum}}{\\fracstr{$firstDen}}}'
											+'{\\sign{+}}'
											+'{\\frac{\\fracstr{$secondNum}}{\\fracstr{$secondDen}}}'
										+'}'    
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\sign{$firstSign}}'
											+'{\\frac{\\fracstr{$firstAnswerNum}}{\\fracstr{$answerDen}}}'
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
							"stepwiseNextProblem": "Check Answer",
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
						problem: '\\rowgrp'
									+'{\\html{$probExpr1:}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp'
										+'{\\str{$thirdSign}}'
										+'{\\mixed{\\str{$probw1}}{\\frac{\\fracstr{$probn1}}{\\fracstr{$probd1}}}}'
										+'{\\html{$probExpr2}}'
										+'{\\sign{$firstSign}}'
										+'{\\mixed{\\str{$probw2}}{\\frac{\\fracstr{$probn2}}{\\fracstr{$probd2}}}}'
								    +'}',
						answer: '\\grp{\\mixed{\\input{$wAns}}{\\frac{\\input{$wNumAns}}{\\input{$wDenAns}}}}',

						controls: {
							"checkAnswer": true,
							"help": false,
							"stepwiseNextProblem": "Check Answer",
							"workbook": true
						}
                    }]
                }, {
                    title: 'Workbook', 
                    children: [{
						problem: '\\rowgrp'
									+'{\\html{$probExpr1:}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp'
										+'{\\str{$thirdSign}}'
										+'{\\mixed{\\str{$probw1}}{\\frac{\\fracstr{$probn1}}{\\fracstr{$probd1}}}}'
										+'{\\html{$probExpr2}}'
										+'{\\sign{$firstSign}}'
										+'{\\mixed{\\str{$probw2}}{\\frac{\\fracstr{$probn2}}{\\fracstr{$probd2}}}}'
								    +'}',
						answer: '\\rowgrp'+
									'{\\ins{Choose the correct math translation for the problem expression:}}'+
									'{\\grp{\\btn{A}{$buttonValueA}{marg}}{$buttonLabelA}}'+
									'{\\html{&nbsp;}}'+
                                    '{\\grp{\\btn{B}{$buttonValueB}{marg}}{$buttonLabelB}}'+
                                    '{\\html{&nbsp;}}'+
                                    '{\\grp{\\btn{C}{$buttonValueC}{marg}}{$buttonLabelC}}'+
                                    '{\\html{&nbsp;}}'+
                                    '{\\grp{\\btn{D}{$buttonValueD}{marg}}{$buttonLabelD}}',
						controls: {
							"checkAnswer": true,
							"help": true
						}
					}, { // step 2
                    	problem: '\\rowgrp'
									+'{\\html{$probExpr1:}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp'
										+'{\\str{$thirdSign}}'
										+'{\\mixed{\\str{$probw1}}{\\frac{\\fracstr{$probn1}}{\\fracstr{$probd1}}}}'
										+'{\\html{$probExpr2}}'
										+'{\\sign{$firstSign}}'
										+'{\\mixed{\\str{$probw2}}{\\frac{\\fracstr{$probn2}}{\\fracstr{$probd2}}}}'
								    +'}',
						answer: '\\css'
								+'{\\rowgrp'
									+'{\\html{The correct translated expression is:}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
												+'{\\sign{$firstSign}}'
												+'{\\mixed{\\str{$w1}}{\\frac{\\fracstr{$n1}}{\\fracstr{$d1}}}}'
												+'{\\sign{$secondSign}}'
												+'{\\str{(}}'
												+'{\\str{$thirdSign}}'
												+'{\\mixed{\\str{$w2}}{\\frac{\\fracstr{$n2}}{\\fracstr{$d2}}}}'
												+'{\\str{)}}'
										+'}'
									+'{\\html{&nbsp;}}'
									+'{\\ins{Choose the expression that is rewritten correctly without any double negatives:}}'
									+'{\\grp{\\btn{A}{$buttonValueE}{marg}}{$buttonLabelE}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp{\\btn{B}{$buttonValueF}{marg}}{$buttonLabelF}}'
									+'{\\html{&nbsp;}}'
                                    +'{\\grp{\\btn{C}{$buttonValueG}{marg}}{$buttonLabelG}}'
                                    +'{\\html{&nbsp;}}'
                                    +'{\\grp{\\btn{D}{$buttonValueH}{marg}}{$buttonLabelH}}'
								+'}{well}',
						controls: {
							"checkAnswer": true,
							"help": true
						}
					}, { // step 3
                    	problem: '\\rowgrp'
									+'{\\html{$probExpr1:}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp'
										+'{\\str{$thirdSign}}'
										+'{\\mixed{\\str{$probw1}}{\\frac{\\fracstr{$probn1}}{\\fracstr{$probd1}}}}'
										+'{\\html{$probExpr2}}'
										+'{\\sign{$firstSign}}'
										+'{\\mixed{\\str{$probw2}}{\\frac{\\fracstr{$probn2}}{\\fracstr{$probd2}}}}'
								    +'}',
						answer: '\\css'
								+'{\\rowgrp'
									+'{\\html{The correct translated expression is:}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
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
							"stepwiseNextProblem": "Check Answer",
							"help": true
						}
                    }, { // step 4
                    	problem: '\\rowgrp'
									+'{\\html{$probExpr1:}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp'
										+'{\\str{$thirdSign}}'
										+'{\\mixed{\\str{$probw1}}{\\frac{\\fracstr{$probn1}}{\\fracstr{$probd1}}}}'
										+'{\\html{$probExpr2}}'
										+'{\\sign{$firstSign}}'
										+'{\\mixed{\\str{$probw2}}{\\frac{\\fracstr{$probn2}}{\\fracstr{$probd2}}}}'
								    +'}',
						answer: '\\css'
								+'{\\rowgrp'
									+'{\\html{The correct translated expression is:}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
												+'{\\sign{$firstSign}}'
												+'{\\mixed{\\str{$w1}}{\\frac{\\fracstr{$n1}}{\\fracstr{$d1}}}}'
												+'{\\sign{+}}'
												+'{\\mixed{\\str{$w2}}{\\frac{\\fracstr{$n2}}{\\fracstr{$d2}}}}'
										+'}'
									+'{\\html{&nbsp;}}'
									+'{\\html{Convert mixed numbers above into improper fractions:}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp'
												+'{\\sign{$firstSign}}'
												+'{\\css'
													+'{\\frac{\\fracstr{$imprN1}}{\\fracstr{$d1}}}'
													+'{fracNoMargin}'
												+'}'
												+'{\\sign{+}}'
												+'{\\css'
													+'{\\frac{\\fracstr{$imprN2}}{\\fracstr{$d2}}}'
													+'{fracNoMargin}'
												+'}'
									+'}'
									+'{\\html{&nbsp;}}'
									+'{\\ins{Determine the lowest common denominator (LCD) of the fractions:}}'
									+'{\\grp{\\input{$lcd}}}'
								+'}{well}',
						controls: {
							"checkAnswer": true,
							"stepwiseNextProblem": "Check Answer",
							"help": true
						}
                    }, { // step 5
						problem: '\\rowgrp'
									+'{\\html{$probExpr1:}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp'
										+'{\\str{$thirdSign}}'
										+'{\\mixed{\\str{$probw1}}{\\frac{\\fracstr{$probn1}}{\\fracstr{$probd1}}}}'
										+'{\\html{$probExpr2}}'
										+'{\\sign{$firstSign}}'
										+'{\\mixed{\\str{$probw2}}{\\frac{\\fracstr{$probn2}}{\\fracstr{$probd2}}}}'
								    +'}',
						answer: '\\css'
								+'{\\rowgrp'
									+'{\\html{The correct translated expression is:}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
												+'{\\sign{$firstSign}}'
												+'{\\mixed{\\str{$w1}}{\\frac{\\fracstr{$n1}}{\\fracstr{$d1}}}}'
												+'{\\sign{+}}'
												+'{\\mixed{\\str{$w2}}{\\frac{\\fracstr{$n2}}{\\fracstr{$d2}}}}'
										+'}'
									+'{\\html{&nbsp;}}'
									+'{\\html{Convert mixed numbers above into improper fractions:}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp'
												+'{\\sign{$firstSign}}'
												+'{\\css'
													+'{\\frac{\\fracstr{$imprN1}}{\\fracstr{$d1}}}'
													+'{fracNoMargin}'
												+'}'
												+'{\\sign{+}}'
												+'{\\css'
													+'{\\frac{\\fracstr{$imprN2}}{\\fracstr{$d2}}}'
													+'{fracNoMargin}'
												+'}'
									+'}'
									+'{\\html{&nbsp;}}'
									+'{\\html{The lowest common denominator (LCD) of the fractions is:}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp'
										+'{\\html{&nbsp;&nbsp;&nbsp;&nbsp;}}'
										+'{\\html{$lcd}}'
									+'}'
									+'{\\html{&nbsp;}}'
									+'{\\ins{Use the LCD to convert the fractions:}}'
									+'{\\grp'
												+'{\\sign{$firstSign}}'
												+'{\\css'
													+'{\\frac{\\fracstr{$imprN1}}{\\fracstr{$d1}}}'
													+'{fracNoMargin}'
												+'}'
												+'{\\sign{+}}'
												+'{\\css'
													+'{\\frac{\\fracstr{$imprN2}}{\\fracstr{$d2}}}'
													+'{fracNoMargin}'
												+'}'
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
							"stepwiseNextProblem": "Check Answer",
							"fixBottomRight": true
						}
                    }, { // step 6
						problem: '\\rowgrp'
									+'{\\html{$probExpr1:}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp'
										+'{\\str{$thirdSign}}'
										+'{\\mixed{\\str{$probw1}}{\\frac{\\fracstr{$probn1}}{\\fracstr{$probd1}}}}'
										+'{\\html{$probExpr2}}'
										+'{\\sign{$firstSign}}'
										+'{\\mixed{\\str{$probw2}}{\\frac{\\fracstr{$probn2}}{\\fracstr{$probd2}}}}'
								    +'}',
							answer: '\\css'
									+'{\\rowgrp'
										+'{\\html{The correct translated expression is:}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
												+'{\\sign{$firstSign}}'
												+'{\\mixed{\\str{$w1}}{\\frac{\\fracstr{$n1}}{\\fracstr{$d1}}}}'
												+'{\\sign{+}}'
												+'{\\mixed{\\str{$w2}}{\\frac{\\fracstr{$n2}}{\\fracstr{$d2}}}}'
										+'}'
									+'{\\html{&nbsp;}}'
									+'{\\html{Convert mixed numbers above into improper fractions:}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp'
												+'{\\sign{$firstSign}}'
												+'{\\css'
													+'{\\frac{\\fracstr{$imprN1}}{\\fracstr{$d1}}}'
													+'{fracNoMargin}'
												+'}'
												+'{\\sign{+}}'
												+'{\\css'
													+'{\\frac{\\fracstr{$imprN2}}{\\fracstr{$d2}}}'
													+'{fracNoMargin}'
												+'}'
									+'}'
									+'{\\html{&nbsp;}}'
									+'{\\html{The lowest common denominator (LCD) of the fractions is:}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp'
										+'{\\html{&nbsp;&nbsp;&nbsp;&nbsp;}}'
										+'{\\html{$lcd}}'
									+'}'
									+'{\\html{&nbsp;}}'
										+'{\\html{Use the LCD to convert the fractions:}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
												+'{\\sign{$firstSign}}'
												+'{\\css'
													+'{\\frac{\\fracstr{$imprN1}}{\\fracstr{$d1}}}'
													+'{fracNoMargin}'
												+'}'
												+'{\\sign{+}}'
												+'{\\css'
													+'{\\frac{\\fracstr{$imprN2}}{\\fracstr{$d2}}}'
													+'{fracNoMargin}'
												+'}'
									+'}'    
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\sign{$firstSign}}'
											+'{\\frac{\\fracstr{$answN1}}{\\fracstr{$lcd}}}'
											+'{\\sign{+}}'
											+'{\\frac{\\fracstr{$answN2}}{\\fracstr{$lcd}}}'
										+'}'
											
										+'{\\html{&nbsp;}}'
										+'{\\ins{$operNumsText}}'
										+'{\\grp{\\frac{\\grp{sign{$firstSign}}{\\fracstr{$answN1}}{\\sign{+}}{\\fracstr{$answN2}}}{\\fracstr{$lcd}}}{\\sign{=}}{\\frac{\\input{$simpleAnswNum}}{\\input{$wDenAns}}}}'	
        									+'}{well}',
						controls: {
							"checkAnswer": true,
							"help": true,
							"stepwiseNextProblem": "Check Answer",
							"fixBottomRight": true
							}
						}, { // step 7
						problem: '\\rowgrp'
									+'{\\html{$probExpr1:}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp'
										+'{\\str{$thirdSign}}'
										+'{\\mixed{\\str{$probw1}}{\\frac{\\fracstr{$probn1}}{\\fracstr{$probd1}}}}'
										+'{\\html{$probExpr2}}'
										+'{\\sign{$firstSign}}'
										+'{\\mixed{\\str{$probw2}}{\\frac{\\fracstr{$probn2}}{\\fracstr{$probd2}}}}'
								    +'}',
							answer: '\\css'
									+'{\\rowgrp'
										+'{\\html{The correct translated expression is:}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
												+'{\\sign{$firstSign}}'
												+'{\\mixed{\\str{$w1}}{\\frac{\\fracstr{$n1}}{\\fracstr{$d1}}}}'
												+'{\\sign{+}}'
												+'{\\mixed{\\str{$w2}}{\\frac{\\fracstr{$n2}}{\\fracstr{$d2}}}}'
										+'}'
									+'{\\html{&nbsp;}}'
									+'{\\html{Convert mixed numbers above into improper fractions:}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp'
												+'{\\sign{$firstSign}}'
												+'{\\css'
													+'{\\frac{\\fracstr{$imprN1}}{\\fracstr{$d1}}}'
													+'{fracNoMargin}'
												+'}'
												+'{\\sign{+}}'
												+'{\\css'
													+'{\\frac{\\fracstr{$imprN2}}{\\fracstr{$d2}}}'
													+'{fracNoMargin}'
												+'}'
									+'}'
									+'{\\html{&nbsp;}}'
									+'{\\html{The lowest common denominator (LCD) of the fractions is:}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp'
										+'{\\html{&nbsp;&nbsp;&nbsp;&nbsp;}}'
										+'{\\html{$lcd}}'
									+'}'
									+'{\\html{&nbsp;}}'
										+'{\\html{Use the LCD to convert the fractions:}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
												+'{\\sign{$firstSign}}'
												+'{\\css'
													+'{\\frac{\\fracstr{$imprN1}}{\\fracstr{$d1}}}'
													+'{fracNoMargin}'
												+'}'
												+'{\\sign{+}}'
												+'{\\css'
													+'{\\frac{\\fracstr{$imprN2}}{\\fracstr{$d2}}}'
													+'{fracNoMargin}'
												+'}'
									+'}'    
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\sign{$firstSign}}'
											+'{\\frac{\\fracstr{$answN1}}{\\fracstr{$lcd}}}'
											+'{\\sign{+}}'
											+'{\\frac{\\fracstr{$answN2}}{\\fracstr{$lcd}}}'
										+'}'
											
										+'{\\html{&nbsp;}}'
										+'{\\html{$operNumsText}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp{\\frac{\\grp{sign{$firstSign}}{\\fracstr{$answN1}}{\\sign{+}}{\\fracstr{$answN2}}}{\\fracstr{$lcd}}}{\\sign{=}}{\\frac{\\fracstr{$simpleAnswNum}}{\\fracstr{$wDenAns}}}}'
										+'{\\html{&nbsp;}}'
										+'{\\ins{Rewrite the answer as a mixed number:}}'
										+'{\\grp'
											+'{\\frac{\\fracstr{$simpleAnswNum}}{\\fracstr{$wDenAns}}}'
											+'{\\sign{=}}'
											+'{\\mixed{\\input{$wAns}}{\\frac{\\input{$wNumAns}}{\\input{$wDenAns}}}}'
										+'}'

        									+'}{well}',
						controls: {
							"checkAnswer": true,
							"help": true,
							"stepwiseNextProblem": "Check Answer",
							"fixBottomRight": true
						}
                    }]
                }]
            }
      
        },
        data = [
            //problem 1
         { firstNum: '3', firstDen: '5', secondNum: '9', secondDen: '10', firstAnswerNum: '6', secondAnswerNum: '9', differenceNum: '-3', answerDen: '10', firstSign: '', secondSign: '+', thirdSign: '-', answerSign: '-', probExpr1: 'Find the sum of', probExpr2: '&nbsp; and', oper: 'Add', answerBtn: 'noAnswer', template: 'firstTempl', 
            buttonValueA: 'F', buttonLabelA: dataUtils.pre('\\grp{\\frac{\\fracstr{3}}{\\fracstr{5}}}{\\str{+}}{\\str{(}}{\\frac{\\fracstr{9}}{\\fracstr{10}}}{\\str{)}}'), 
            buttonValueB: 'T', buttonLabelB: dataUtils.pre('\\grp{\\frac{\\fracstr{3}}{\\fracstr{5}}}{\\str{+}}{\\str{(}}{\\str{-}}{\\frac{\\fracstr{9}}{\\fracstr{10}}}{\\str{)}}'), 
            buttonValueC: 'F', buttonLabelC: dataUtils.pre('\\grp{\\frac{\\fracstr{9}}{\\fracstr{10}}}{\\str{+}}{\\frac{\\fracstr{3}}{\\fracstr{5}}}'), 
            buttonValueD: 'F', buttonLabelD: dataUtils.pre('\\grp{\\frac{\\fracstr{3}}{\\fracstr{5}}}{\\str{-}}{\\str{(}}{\\str{-}}{\\frac{\\fracstr{9}}{\\fracstr{10}}}{\\str{)}}'),
        },
            //problem 2
            { firstNum: '3', firstDen: '8', secondNum: '2', secondDen: '5', firstAnswerNum: '15', secondAnswerNum: '16', differenceNum: '-31', answerDen: '40', firstSign: '-', secondSign: '-', thirdSign: '', answerSign: '-', leftParen: '', rightParen: '', probExpr1: 'Find the difference of&nbsp;&nbsp;', probExpr2: '&nbsp; and', oper: 'Subtract', answerBtn: 'noAnswer', template: 'firstTempl', 
            buttonValueA: 'F', buttonLabelA: dataUtils.pre('\\grp{\\str{-}}{\\frac{\\fracstr{3}}{\\fracstr{8}}}{\\str{-}}{\\str{(}}{\\str{-}}{\\frac{\\fracstr{2}}{\\fracstr{5}}}{\\str{)}}'), 
            buttonValueB: 'F', buttonLabelB: dataUtils.pre('\\grp{\\str{-}}{\\frac{\\fracstr{3}}{\\fracstr{8}}}{\\str{+}}{\\frac{\\fracstr{2}}{\\fracstr{5}}}'), 
            buttonValueC: 'F', buttonLabelC: dataUtils.pre('\\grp{\\frac{\\fracstr{2}}{\\fracstr{5}}}{\\str{-}}{\\str{(}}{\\str{-}}{\\frac{\\fracstr{3}}{\\fracstr{8}}}{\\str{)}}'), 
            buttonValueD: 'T', buttonLabelD: dataUtils.pre('\\grp{\\str{-}}{\\frac{\\fracstr{3}}{\\fracstr{8}}}{\\str{-}}{\\frac{\\fracstr{2}}{\\fracstr{5}}}'),
        },

            //problem 3
            { firstProbNum: '3', firstProbDen: '4', secondProbNum: '5', secondProbDen: '6', firstNum: '3', firstDen: '4', secondNum: '5', secondDen: '6', firstAnswerNum: '9', secondAnswerNum: '10', differenceNum: '1', answerDen: '12', firstSign: '-', secondSign: '-', thirdSign: '-', answerSign: '-', probExpr1: 'Find the difference of&nbsp;&nbsp;', probExpr2: '&nbsp;&nbsp;and&nbsp;&nbsp;', oper: 'Add', answerBtn: 'noAnswer', template: 'thirdTempl', 
            buttonValueA: 'T', buttonLabelA: dataUtils.pre('\\grp{\\str{-}}{\\frac{\\fracstr{3}}{\\fracstr{4}}}{\\str{-}}{\\str{(}}{\\str{-}}{\\frac{\\fracstr{5}}{\\fracstr{6}}}{\\str{)}}'),
            buttonValueB: 'F', buttonLabelB: dataUtils.pre('\\grp{\\str{-}}{\\frac{\\fracstr{3}}{\\fracstr{4}}}{\\str{-}}{\\str{(}}{\\frac{\\fracstr{5}}{\\fracstr{6}}}{\\str{)}}'), 
            buttonValueC: 'F', buttonLabelC: dataUtils.pre('\\grp{\\str{-}}{\\frac{\\fracstr{3}}{\\fracstr{4}}}{\\str{-}}{\\frac{\\fracstr{5}}{\\fracstr{6}}}'), 
            buttonValueD: 'F', buttonLabelD: dataUtils.pre('\\grp{\\str{-}}{\\str{(}}{\\str{-}}{\\frac{\\fracstr{3}}{\\fracstr{4}}}{\\str{)}}{\\str{-}}{\\frac{\\fracstr{5}}{\\fracstr{6}}}'), 

            buttonValueE: 'F', buttonLabelE: dataUtils.pre('\\grp{\\frac{\\fracstr{3}}{\\fracstr{4}}}{\\str{+}}{\\frac{\\fracstr{5}}{\\fracstr{6}}}'),
            buttonValueF: 'F', buttonLabelF: dataUtils.pre('\\grp{\\str{-}}{\\frac{\\fracstr{3}}{\\fracstr{4}}}{\\str{-}}{\\frac{\\fracstr{5}}{\\fracstr{6}}}'),
            buttonValueG: 'T', buttonLabelG: dataUtils.pre('\\grp{\\str{-}}{\\frac{\\fracstr{3}}{\\fracstr{4}}}{\\str{+}}{\\frac{\\fracstr{5}}{\\fracstr{6}}}'), 
            buttonValueH: 'F', buttonLabelH: dataUtils.pre('\\grp{\\frac{\\fracstr{5}}{\\fracstr{6}}}{\\str{-}}{\\str{(}}{\\str{-}}{\\frac{\\fracstr{3}}{\\fracstr{4}}}{\\str{)}}'),
        	},

			//problem 4
			{ firstProbNum: '1', firstProbDen: '3', secondProbNum: '2', secondProbDen: '7', firstNum: '2', firstDen: '7', secondNum: '1', secondDen: '3', firstAnswerNum: '6', secondAnswerNum: '7', differenceNum: '13', answerDen: '21', firstSign: '', secondSign: '-', thirdSign: '-', answerSign: '-', probExpr1: 'Subtract&nbsp;&nbsp;', probExpr2: '&nbsp;&nbsp;from', oper: 'Add', answerBtn: 'noAnswer', template: 'thirdTempl', 
            buttonValueA: 'F', buttonLabelA: dataUtils.pre('\\grp{\\str{-}}{\\frac{\\fracstr{1}}{\\fracstr{3}}}{\\str{-}}{\\frac{\\fracstr{2}}{\\fracstr{7}}}'),
            buttonValueB: 'T', buttonLabelB: dataUtils.pre('\\grp{\\frac{\\fracstr{2}}{\\fracstr{7}}}{\\str{-}}{\\str{(}}{\\str{-}}{\\frac{\\fracstr{1}}{\\fracstr{3}}}{\\str{)}}'), 
            buttonValueC: 'F', buttonLabelC: dataUtils.pre('\\grp{\\frac{\\fracstr{2}}{\\fracstr{7}}}{\\str{-}}{\\frac{\\fracstr{1}}{\\fracstr{3}}}'),
            buttonValueD: 'F', buttonLabelD: dataUtils.pre('\\grp{\\frac{\\fracstr{1}}{\\fracstr{3}}}{\\str{-}}{\\frac{\\fracstr{2}}{\\fracstr{7}}}'),

            buttonValueE: 'F', buttonLabelE: dataUtils.pre('\\grp{\\str{-}}{\\frac{\\fracstr{2}}{\\fracstr{7}}}{\\str{-}}{\\frac{\\fracstr{1}}{\\fracstr{3}}}'), 
            buttonValueF: 'F', buttonLabelF: dataUtils.pre('\\grp{\\frac{\\fracstr{2}}{\\fracstr{7}}}{\\str{-}}{\\frac{\\fracstr{1}}{\\fracstr{3}}}'), 
            buttonValueG: 'T', buttonLabelG: dataUtils.pre('\\grp{\\frac{\\fracstr{2}}{\\fracstr{7}}}{\\str{+}}{\\frac{\\fracstr{1}}{\\fracstr{3}}}'), 
            buttonValueH: 'F', buttonLabelH: dataUtils.pre('\\grp{\\frac{\\fracstr{2}}{\\fracstr{7}}}{\\str{+}}{\\str{(}}{\\str{-}}{\\frac{\\fracstr{1}}{\\fracstr{3}}}{\\str{)}}'), 
        	},

            //problem 5
            { probw1: '2', probn1: '5', probd1: '12', probw2: '1', probn2: '1', probd2: '4', w1: '1', n1: '1', d1: '4', w2: '2', n2: '5', d2: '12',imprN1: '5', imprN2: '29', answN1: '15', answN2: '29', lcd: '12', answNum: '14',simpleAnswNum: '7', wAns: '1', wNumAns: '1', wDenAns: '6',
				firstSign: '-', secondSign: '-', thirdSign: '-', answerSign: '-', probExpr1: 'Subtract&nbsp;&nbsp;', probExpr2: '&nbsp;from&nbsp;&nbsp;', operNumsText: 'Combine the numerators and simplify the fraction if necessary:', answerBtn: 'noAnswer', template: 'fourthTempl', 
			buttonValueA: 'F', buttonLabelA: dataUtils.pre('\\grp{\\str{-}}{\\mixed{\\str{2}}{\\frac{\\str{5}}{\\str{12}}}}{\\str{-}}{\\str{(}}{\\str{-}}{\\mixed{\\str{1}}{\\frac{\\str{1}}{\\str{4}}}}{\\str{)}}'),
            buttonValueB: 'F', buttonLabelB: dataUtils.pre('\\grp{\\str{-}}{\\mixed{\\str{2}}{\\frac{\\str{5}}{\\str{12}}}}{\\str{-}}{\\str{(}}{\\mixed{\\str{1}}{\\frac{\\str{1}}{\\str{4}}}}{\\str{)}}'),
            buttonValueC: 'F', buttonLabelC: dataUtils.pre('\\grp{\\str{-}}{\\mixed{\\str{1}}{\\frac{\\str{1}}{\\str{4}}}}{\\str{-}}{\\str{(}}{\\mixed{\\str{2}}{\\frac{\\str{5}}{\\str{12}}}}{\\str{)}}'),
            buttonValueD: 'T', buttonLabelD: dataUtils.pre('\\grp{\\str{-}}{\\mixed{\\str{1}}{\\frac{\\str{1}}{\\str{4}}}}{\\str{-}}{\\str{(}}{\\str{-}}{\\mixed{\\str{2}}{\\frac{\\str{5}}{\\str{12}}}}{\\str{)}}'),

            buttonValueE: 'F', buttonLabelE: dataUtils.pre('\\grp{\\mixed{\\str{1}}{\\frac{\\str{1}}{\\str{4}}}}{\\str{-}}{\\mixed{\\str{2}}{\\frac{\\str{5}}{\\str{12}}}}'),
            buttonValueF: 'F', buttonLabelF: dataUtils.pre('\\grp{\\str{-}}{\\mixed{\\str{1}}{\\frac{\\str{1}}{\\str{4}}}}{\\str{-}}{\\mixed{\\str{2}}{\\frac{\\str{5}}{\\str{12}}}}'),
            buttonValueG: 'T', buttonLabelG: dataUtils.pre('\\grp{\\str{-}}{\\mixed{\\str{1}}{\\frac{\\str{1}}{\\str{4}}}}{\\str{+}}{\\mixed{\\str{2}}{\\frac{\\str{5}}{\\str{12}}}}'),
            buttonValueH: 'F', buttonLabelH: dataUtils.pre('\\grp{\\mixed{\\str{1}}{\\frac{\\str{1}}{\\str{4}}}}{\\str{+}}{\\mixed{\\str{2}}{\\frac{\\str{5}}{\\str{12}}}}'),
             },
			
            //problem 6
			{ w1: '2', n1: '1', d1: '5', w2: '3', n2: '2', d2: '3', imprN1: '11', imprN2: '11', answN1: '33', answN2: '55', lcd: '15', answNum: '-22', wAns: '-1', wNumAns: '7', wDenAns: '15',
				firstSign: '', secondSign: '-', thirdSign: '', answerSign: '-', leftParen: '', rightParen: '', probExpr1: 'Find the difference of', probExpr2: '&nbsp; and', oper: 'Subtract', answerBtn: 'noAnswer', template: 'secondTempl', 
            buttonValueA: 'F', buttonLabelA: dataUtils.pre('\\grp{\\str{-}}{\\mixed{\\str{2}}{\\frac{\\str{1}}{\\str{5}}}}{\\str{+}}{\\mixed{\\str{3}}{\\frac{\\str{2}}{\\str{3}}}}'),
            buttonValueB: 'T', buttonLabelB: dataUtils.pre('\\grp{\\mixed{\\str{2}}{\\frac{\\str{1}}{\\str{5}}}}{\\str{-}}{\\mixed{\\str{3}}{\\frac{\\str{2}}{\\str{3}}}}'),
            buttonValueC: 'F', buttonLabelC: dataUtils.pre('\\grp{\\mixed{\\str{3}}{\\frac{\\str{2}}{\\str{3}}}}{\\str{-}}{\\mixed{\\str{2}}{\\frac{\\str{1}}{\\str{5}}}}'),
            buttonValueD: 'F', buttonLabelD: dataUtils.pre('\\grp{\\mixed{\\str{2}}{\\frac{\\str{1}}{\\str{5}}}}{\\str{-}}{\\str{(}}{\\str{-}}{\\mixed{\\str{3}}{\\frac{\\str{2}}{\\str{3}}}}{\\str{)}}'),
             },
            //problem 7
            { w1: '1', n1: '5', d1: '6', w2: '2', n2: '5', d2: '8', imprN1: '11', imprN2: '21', answN1: '44', answN2: '63', lcd: '24', answNum: '-107', wAns: '-4', wNumAns: '11', wDenAns: '24',
				firstSign: '-', secondSign: '+', thirdSign: '-', answerSign: '-', probExpr1: 'Find the sum of&nbsp;&nbsp;', probExpr2: '&nbsp; and', oper: 'Add', answerBtn: 'noAnswer', template: 'secondTempl', 
            buttonValueA: 'T', buttonLabelA: dataUtils.pre('\\grp{\\str{-}}{\\mixed{\\str{1}}{\\frac{\\str{5}}{\\str{6}}}}{\\str{+}}{\\str{(}}{\\str{-}}{\\mixed{\\str{2}}{\\frac{\\str{5}}{\\str{8}}}}{\\str{)}}'), 
            buttonValueB: 'F', buttonLabelB: dataUtils.pre('\\grp{\\str{-}}{\\mixed{\\str{1}}{\\frac{\\str{5}}{\\str{6}}}}{\\str{+}}{\\str{(}}{\\mixed{\\str{2}}{\\frac{\\str{5}}{\\str{8}}}}{\\str{)}}'),  
            buttonValueC: 'F', buttonLabelC: dataUtils.pre('\\grp{\\mixed{\\str{2}}{\\frac{\\str{5}}{\\str{8}}}}{\\str{-}}{\\str{(}}{\\str{-}}{\\mixed{\\str{1}}{\\frac{\\str{5}}{\\str{6}}}}{\\str{)}}'), 
            buttonValueD: 'F', buttonLabelD: dataUtils.pre('\\grp{\\str{-}}{\\mixed{\\str{2}}{\\frac{\\str{5}}{\\str{8}}}}{\\str{-}}{\\str{(}}{\\str{-}}{\\mixed{\\str{1}}{\\frac{\\str{5}}{\\str{6}}}}{\\str{)}}'), 
            },


            //problem 8
            { w1: '1', n1: '1', d1: '2', w2: '3', n2: '3', d2: '10', imprN1: '3', imprN2: '33', answN1: '15', answN2: '33', lcd: '10', answNum: '-18', simpleAnswNum: '-9', wAns: '-1', wNumAns: '4', wDenAns: '5',
				firstSign: '', secondSign: '-', thirdSign: '', answerSign: '-', leftParen: '', rightParen: '', probExpr1: 'Subtract', probExpr2: '&nbsp;&nbsp;from', operNumsText: 'Combine the numerators and simplify the fraction if necessary:', answerBtn: 'noAnswer', template: 'secondTemplRev', 
            buttonValueA: 'F', buttonLabelA: dataUtils.pre('\\grp{\\mixed{\\str{3}}{\\frac{\\str{3}}{\\str{10}}}}{\\str{-}}{\\mixed{\\str{1}}{\\frac{\\str{1}}{\\str{2}}}}'),
            buttonValueB: 'F', buttonLabelB: dataUtils.pre('\\grp{\\str{-}}{\\mixed{\\str{1}}{\\frac{\\str{1}}{\\str{2}}}}{\\str{-}}{\\mixed{\\str{3}}{\\frac{\\str{3}}{\\str{10}}}}'), 
            buttonValueC: 'T', buttonLabelC: dataUtils.pre('\\grp{\\mixed{\\str{1}}{\\frac{\\str{1}}{\\str{2}}}}{\\str{-}}{\\mixed{\\str{3}}{\\frac{\\str{3}}{\\str{10}}}}'),
            buttonValueD: 'F', buttonLabelD: dataUtils.pre('\\grp{\\mixed{\\str{3}}{\\frac{\\str{3}}{\\str{10}}}}{\\str{-}}{\\str{(}}{\\str{-}}{\\mixed{\\str{1}}{\\frac{\\str{1}}{\\str{2}}}}{\\str{)}}'),
            },

		
        ];

    return dataUtils.build(desc, template, data);
}]);



