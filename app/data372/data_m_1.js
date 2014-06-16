/*global angular */

// angular.module('mathSkills').value('data_m_1', {
    // title: 'M.1 Combining Fractions and Mixed Numbers',
    // path: 'M.1-combining-fractions-and-mixed-numbers',
    // children: [{
        // title: 'Combining Fractions and Mixed Numbers',
        // children: [] }]
// });

/*global angular */

angular.module('mathSkills').service('data_m_1', ['dataUtils', function (dataUtils) {
    var desc = {
    		title: 'M.1 Combining Fractions',
    	    path: 'M.1-combining-fractions',
            children: []
        },
	        template = {
	        	answerDirect: {
					title: 'Combining Fractions',
					children: [{
						title: 'Main Answer',
						children: [{
							problem: '',
								answer: '\\grp'
											+'{\\frac{\\str{$firstNum}}{\\str{$firstDen}}}'
											+'{\\sign{$operation}}'
											+'{\\frac{\\str{$secondNum}}{\\str{$secondDen}}}'
											+'{\\sign{=}}'
											+'{\\mixed{\\input{$answerSign}}{\\frac{\\input{$answerNum}}{\\input{$answerDen}}}}',
							controls: {
								"checkAnswer": true,
								"help": '\\rowgrp'
								+'{\\grp{\\frac{\\str{$firstNum}}{\\str{$firstDen}}}'
								+'{\\sign{$operation}}'
								+'{\\frac{\\str{$secondNum}}{\\str{$secondDen}}}'
								+'{\\sign{ = }}'
								+'{\\sign{$answerSign}}'
								+'{\\frac{\\str{$answerNum}}{\\str{$answerDen}}}}'
								+'{\\html{&nbsp;}}'
								+'{css{\\grp{\\str{Answer:  \xA0}}'
								+'{\\sign{$answerSign}}'
								+'{\\frac{\\fracstr{$answerNum}}{\\fracstr{$answerDen}}}}'
								+'{help-answer-text}}'
							}
						}]
					}]
			   },
						   
// Two franctions without parenths
            twoFractions: {
                title: 'Combining Fractions and Mixed Numbers',
                children: [{
                    title: 'twoFractions Answer',
                    children: [{
						problem: '\\html{&nbsp;}',
						answer: '\\grp'
							+'{\\sign{$firstSign}}'
							+'{\\frac{\\fracstr{$firstNum}}{\\fracstr{$firstDen}}}'
							+'{\\sign{$secondSign}}'
							+'{\\frac{\\fracstr{$secondNum}}{\\fracstr{$secondDen}}}'
							+'{\\sign{=}}'
							//+'{\\sign{$answerSign}}'
							+'{\\frac{\\input{$differenceNum}}{\\input{$answerDen}}}',
						controls: {
							"checkAnswer": true,
							"help": false,
							"workbook": true
						}
                    }]
                }, {
                    title: 'Workbook',
                    children: [{
						problem: '\\grp'
									+'{\\sign{$firstSign}}'
									+'{\\frac{\\fracstr{$firstNum}}{\\fracstr{$firstDen}}}'
									+'{\\sign{$secondSign}}'
									+'{\\frac{\\fracstr{$secondNum}}{\\fracstr{$secondDen}}}',
						answer: '\\rowgrp'
									+'{\\ins{Determine the lowest common denominator (LCD) of the fractions:}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp{\\input{$answerDen}}'
								+'}',
						controls: {
							"checkAnswer": true,
							"help": true
						},
                    }, {
						problem: '\\grp'
									+'{\\sign{$firstSign}}'
									+'{\\frac{\\fracstr{$firstNum}}{\\fracstr{$firstDen}}}'
									+'{\\sign{$secondSign}}'
									+'{\\frac{\\fracstr{$secondNum}}{\\fracstr{$secondDen}}}',
						answer: '\\css'
								+'{\\rowgrp'
									+'{\\html{Determine the lowest common denominator (LCD) of the fractions:}}'
									+'{\\html{&nbsp;}}'
									+'{\\html{$answerDen}}'
									+'{\\html{&nbsp;}}'
									+'{\\ins{Use the LCD to convert the fractions:}}'
									+'{\\grp{\\sign{$firstSign}}{\\frac{\\fracstr{$firstNum}}{\\fracstr{$firstDen}}}'
        										+'{\\sign{$secondSign}}'
        										+'{\\frac{\\fracstr{$secondNum}}{\\fracstr{$secondDen}}}}'       								
        							+'{\\html{&nbsp;}}'
									+'{\\grp'
        										//+'{\\sign{$firstSign}}'
        										+'{\\frac{\\input{$firstAnswerNum}}{\\fracstr{$answerDen}}}'
        										+'{\\sign{$secondSign}}'
        										+'{\\frac{\\input{$secondAnswerNum}}{\\fracstr{$answerDen}}}'
        										+'}'
        									+'}{well}',
						controls: {
							"checkAnswer": true,
							"help": true
						}
                    }, {
						problem: 'grp'
									+'{\\sign{$firstSign}}'
									+'{\\frac{\\fracstr{$firstNum}}{\\fracstr{$firstDen}}}'
									+'{\\sign{$secondSign}}'
									+'{\\frac{\\fracstr{$secondNum}}{\\fracstr{$secondDen}}}',
							answer: '\\css'
									+'{\\rowgrp'
										+'{\\html{Determine the lowest common denominator (LCD) of the fractions:}}'
										+'{\\html{&nbsp;}}'
										+'{\\html{$answerDen}}'
										+'{\\html{&nbsp;}}'
										+'{\\html{Use the LCD to convert the fractions:}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp{\\sign{$firstSign}}{\\frac{\\fracstr{$firstNum}}{\\fracstr{$firstDen}}}'
        										+'{\\sign{$secondSign}}'
        										+'{\\frac{\\fracstr{$secondNum}}{\\fracstr{$secondDen}}}}'    
										+'{\\html{&nbsp;}}'
										+'{\\grp{\\frac{\\fracstr{$firstAnswerNum}}{\\fracstr{$answerDen}}}'
											+'{\\sign{$secondSign}}'
											+'{\\frac{\\fracstr{$secondAnswerNum}}{\\fracstr{$answerDen}}}}'
										+'{\\html{&nbsp;}}'
										+'{\\ins{$oper the numerators:}}'
										+'{\\grp\\{\\frac{\\grp{\\fracstr{$firstAnswerNum}}{\\sign{$secondSign}}{\\fracstr{$secondAnswerNum}}}{\\fracstr{$answerDen}}}{\\sign{=}}{\\frac{\\input{$differenceNum}}{\\input{$answerDen}}}}'	
        									+'}{well}',
						controls: {
							"checkAnswer": true,
							"help": true,
							"fixBottomRight": true
						}
                    }]
                }]
            },
// Two fractions with parenthesis
            twoFractionsPar: {
                title: 'Combining Fractions and Mixed Numbers',
                children: [{
                    title: 'twoFractions Answer',
                    children: [{
						problem: '\\html{&nbsp;}',
						answer: '\\grp'
							+'{\\sign{$firstSign}}'
							+'{\\frac{\\fracstr{$firstNum}}{\\fracstr{$firstDen}}}'
							+'{\\sign{$secondSign}}'
							+'{\\html{$leftParen}}'
							+'{\\sign{$thirdSign}}'
							+'{\\frac{\\fracstr{$secondNum}}{\\fracstr{$secondDen}}}'
							+'{\\html{$rightParen}}'
							+'{\\sign{=}}'
							+'{\\sign{$answerSign}}'
							+'{\\frac{\\input{$differenceNum}}{\\input{$answerDen}}}',
						controls: {
							"checkAnswer": true,
							"help": false,
							"workbook": true
						}
                    }]
                }, {
                    title: 'Workbook',
                    children: [{
						problem: '\\grp'
									+'{\\sign{$firstSign}}'
									+'{\\frac{\\fracstr{$firstNum}}{\\fracstr{$firstDen}}}'
									+'{\\sign{$secondSign}}'
									+'{\\html{$leftParen}}'
									+'{\\sign{$thirdSign}}'
									+'{\\frac{\\fracstr{$secondNum}}{\\fracstr{$secondDen}}}'
									+'{\\html{$rightParen}}',
						answer: '\\rowgrp'
									+'{\\ins{Determine the lowest common denominator (LCD) of the fractions:}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp{\\input{$answerDen}}'
								+'}',
						controls: {
							"checkAnswer": true,
							"help": true
						},
                    }, {
						problem: '\\grp'
									+'{\\sign{$firstSign}}'
									+'{\\frac{\\fracstr{$firstNum}}{\\fracstr{$firstDen}}}'
									+'{\\sign{$secondSign}}'
									+'{\\html{$leftParen}}'
									+'{\\sign{$thirdSign}}'
									+'{\\frac{\\fracstr{$secondNum}}{\\fracstr{$secondDen}}}'
									+'{\\html{$rightParen}}',
						answer: '\\css'
								+'{\\rowgrp'
									+'{\\html{Determine the lowest common denominator (LCD) of the fractions:}}'
									+'{\\html{&nbsp;}}'
									+'{\\html{$answerDen}}'
									+'{\\html{&nbsp;}}'
									+'{\\ins{Use the LCD to convert the fractions:}}'
									+'{\\grp{\\sign{$firstSign}}{\\frac{\\fracstr{$firstNum}}{\\fracstr{$firstDen}}}'
        										+'{\\sign{$secondSign}}'
        										+'{\\html{$leftParen}}{\\sign{$thirdSign}}{\\frac{\\fracstr{$secondNum}}{\\fracstr{$secondDen}}}{\\html{$rightParen}}}'       								
        							+'{\\html{&nbsp;}}'
									+'{\\grp'
        										+'{\\sign{$firstSign}}'
        										+'{\\frac{\\input{$firstAnswerNum}}{\\fracstr{$answerDen}}}'
        										+'{\\sign{$secondSign}}'
        										+'{\\html{$leftParen}}'
        										+'{\\frac{\\input{$secondAnswerNum}}{\\fracstr{$answerDen}}}'
        										+'{\\html{$rightParen}}'
        										+'}'
        									+'}{well}',
						controls: {
							"checkAnswer": true,
							"help": true
						}
                    }, {
						problem: 'grp'
									+'{\\sign{$firstSign}}'
									+'{\\frac{\\fracstr{$firstNum}}{\\fracstr{$firstDen}}}'
									+'{\\sign{$secondSign}}'
									+'{\\html{$leftParen}}'
									+'{\\sign{$thirdSign}}'
									+'{\\frac{\\fracstr{$secondNum}}{\\fracstr{$secondDen}}}'
									+'{\\html{$rightParen}}',
							answer: '\\css'
									+'{\\rowgrp'
										+'{\\html{Determine the lowest common denominator (LCD) of the fractions:}}'
										+'{\\html{&nbsp;}}'
										+'{\\html{$answerDen}}'
										+'{\\html{&nbsp;}}'
										+'{\\html{Use the LCD to convert the fractions:}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp{\\sign{$firstSign}}{\\frac{\\fracstr{$firstNum}}{\\fracstr{$firstDen}}}'
        										+'{\\sign{$secondSign}}'
        										+'{\\html{$leftParen}}{\\sign{$thirdSign}}{\\frac{\\fracstr{$secondNum}}{\\fracstr{$secondDen}}}{\\html{$rightParen}}}'    
										+'{\\html{&nbsp;}}'
										+'{\\grp{\\sign{$firstSign}}{\\frac{\\fracstr{$firstAnswerNum}}{\\fracstr{$answerDen}}}'
											+'{\\sign{$secondSign}}'
											+'{\\sign{$leftParen}}'
											+'{\\frac{\\fracstr{$secondAnswerNum}}{\\fracstr{$answerDen}}}{\\sign{$rightParen}}}'
										+'{\\html{&nbsp;}}'
										+'{\\ins{$oper the numerators:}}'
										+'{\\grp\\{\\frac{\\grp{sign{$firstSign}}{\\fracstr{$firstAnswerNum}}{\\sign{$secondSign}}{\\sign{$leftParen}}{\\fracstr{$secondAnswerNum}}{\\sign{$rightParen}}}{\\fracstr{$answerDen}}}{\\sign{=}}{\\input{$answerSign}}{\\frac{\\input{$differenceNum}}{\\input{$answerDen}}}}'	
        									+'}{well}',
						controls: {
							"checkAnswer": true,
							"help": true,
							"fixBottomRight": true
						}
                    }]
                }]
            },
            // Two fractions with parenthesis positive
            twoFractionsParPos: {
                title: 'Combining Fractions and Mixed Numbers',
                children: [{
                    title: 'twoFractions Answer',
                    children: [{
						problem: '\\html{&nbsp;}',
						answer: '\\grp'
							+'{\\sign{$firstSign}}'
							+'{\\frac{\\fracstr{$firstNum}}{\\fracstr{$firstDen}}}'
							+'{\\sign{$secondSign}}'
							+'{\\html{$leftParen}}'
							+'{\\frac{\\fracstr{$secondNum}}{\\fracstr{$secondDen}}}'
							+'{\\html{$rightParen}}'
							+'{\\sign{=}}'
							+'{\\sign{$answerSign}}'
							+'{\\frac{\\input{$differenceNum}}{\\input{$answerDen}}}',
						controls: {
							"checkAnswer": true,
							"help": false,
							"workbook": true
						}
                    }]
                }, {
                    title: 'Workbook',
                    children: [{
						problem: '\\grp'
									+'{\\sign{$firstSign}}'
									+'{\\frac{\\fracstr{$firstNum}}{\\fracstr{$firstDen}}}'
									+'{\\sign{$secondSign}}'
									+'{\\html{$leftParen}}'
									+'{\\frac{\\fracstr{$secondNum}}{\\fracstr{$secondDen}}}'
									+'{\\html{$rightParen}}',
						answer: '\\rowgrp'
									+'{\\ins{Determine the lowest common denominator (LCD) of the fractions:}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp{\\input{$answerDen}}'
								+'}',
						controls: {
							"checkAnswer": true,
							"help": true
						},
                    }, {
						problem: '\\grp'
									+'{\\sign{$firstSign}}'
									+'{\\frac{\\fracstr{$firstNum}}{\\fracstr{$firstDen}}}'
									+'{\\sign{$secondSign}}'
									+'{\\html{$leftParen}}'
									+'{\\frac{\\fracstr{$secondNum}}{\\fracstr{$secondDen}}}'
									+'{\\html{$rightParen}}',
						answer: '\\css'
								+'{\\rowgrp'
									+'{\\html{Determine the lowest common denominator (LCD) of the fractions:}}'
									+'{\\html{&nbsp;}}'
									+'{\\html{$answerDen}}'
									+'{\\html{&nbsp;}}'
									+'{\\ins{Use the LCD to convert the fractions:}}'
									+'{\\grp{\\sign{$firstSign}}{\\frac{\\fracstr{$firstNum}}{\\fracstr{$firstDen}}}'
        										+'{\\sign{$secondSign}}'
        										+'{\\html{$leftParen}}{\\frac{\\fracstr{$secondNum}}{\\fracstr{$secondDen}}}{\\html{$rightParen}}}'       								
        							+'{\\html{&nbsp;}}'
									+'{\\grp'
        										+'{\\sign{$firstSign}}'
        										+'{\\frac{\\input{$firstAnswerNum}}{\\fracstr{$answerDen}}}'
        										+'{\\sign{$secondSign}}'
        										+'{\\html{$leftParen}}'
        										+'{\\frac{\\input{$secondAnswerNum}}{\\fracstr{$answerDen}}}'
        										+'{\\html{$rightParen}}'
        										+'}'
        									+'}{well}',
						controls: {
							"checkAnswer": true,
							"help": true
						}
                    }, {
						problem: 'grp'
									+'{\\sign{$firstSign}}'
									+'{\\frac{\\fracstr{$firstNum}}{\\fracstr{$firstDen}}}'
									+'{\\sign{$secondSign}}'
									+'{\\html{$leftParen}}'
									+'{\\frac{\\fracstr{$secondNum}}{\\fracstr{$secondDen}}}'
									+'{\\html{$rightParen}}',
							answer: '\\css'
									+'{\\rowgrp'
										+'{\\html{Determine the lowest common denominator (LCD) of the fractions:}}'
										+'{\\html{&nbsp;}}'
										+'{\\html{$answerDen}}'
										+'{\\html{&nbsp;}}'
										+'{\\html{Use the LCD to convert the fractions:}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp{\\sign{$firstSign}}{\\frac{\\fracstr{$firstNum}}{\\fracstr{$firstDen}}}'
        										+'{\\sign{$secondSign}}'
        										+'{\\html{$leftParen}}{\\frac{\\fracstr{$secondNum}}{\\fracstr{$secondDen}}}{\\html{$rightParen}}}'    
										+'{\\html{&nbsp;}}'
										+'{\\grp{\\sign{$firstSign}}{\\frac{\\fracstr{$firstAnswerNum}}{\\fracstr{$answerDen}}}'
											+'{\\sign{$secondSign}}'
											+'{\\sign{$leftParen}}'
											+'{\\frac{\\fracstr{$secondAnswerNum}}{\\fracstr{$answerDen}}}{\\sign{$rightParen}}}'
										+'{\\html{&nbsp;}}'
										+'{\\ins{$oper the numerators:}}'
										+'{\\grp\\{\\frac{\\grp{sign{$firstSign}}{\\fracstr{$firstAnswerNum}}{\\sign{$secondSign}}{\\sign{$leftParen}}{\\fracstr{$secondAnswerNum}}{\\sign{$rightParen}}}{\\fracstr{$answerDen}}}{\\sign{=}}{\\input{$answerSign}}{\\frac{\\input{$differenceNum}}{\\input{$answerDen}}}}'	
        									+'}{well}',
						controls: {
							"checkAnswer": true,
							"help": true,
							"fixBottomRight": true
						}
                    }]
                }]
            },
// Two fractions with double negative, initial first step
            twoFracDblNeg: {
                title: 'Combining Fractions and Mixed Numbers',
                children: [{
                    title: 'twoFractions Answer',
                    children: [{
						problem: '\\html{&nbsp;}',
						answer: '\\grp'
							+'{\\sign{$firstSign}}'
							+'{\\frac{\\fracstr{$firstNum}}{\\fracstr{$firstDen}}}'
							+'{\\sign{$secondSign}}'
							+'{\\html{$leftParen}}'
							+'{\\sign{$thirdSign}}'
							+'{\\frac{\\fracstr{$secondNum}}{\\fracstr{$secondDen}}}'
							+'{\\html{$rightParen}}'
							+'{\\sign{=}}'
							+'{\\sign{$answerSign}}'
							+'{\\frac{\\input{$differenceNum}}{\\input{$answerDen}}}',

						controls: {
							"checkAnswer": true,
							"help": false,
							"workbook": true
						}
                    }]
                }, {
                    title: 'Workbook',
                    children: [{
						problem: '\\grp'
									+'{\\sign{$firstSign}}'
									+'{\\frac{\\fracstr{$firstNum}}{\\fracstr{$firstDen}}}'
									+'{\\sign{$secondSign}}'
									+'{\\html{$leftParen}}'
									+'{\\sign{$thirdSign}}'
									+'{\\frac{\\fracstr{$secondNum}}{\\fracstr{$secondDen}}}'
									+'{\\html{$rightParen}}',
						answer: '\\rowgrp'+
									'{\\ins{Choose the expression that is rewritten correctly without any double negatives:}}'+
									'{\\grp{\\btn{A}{$buttonValueA}{marg}}{\\html{\xA0$buttonLabelA}}}'+
                                    '{\\grp{\\btn{B}{$buttonValueB}{marg}}{\\html{\xA0$buttonLabelB}}}'+
                                    '{\\grp{\\btn{C}{$buttonValueC}{marg}}{\\html{\xA0$buttonLabelC}}}'+
                                    '{\\grp{\\btn{D}{$buttonValueD}{marg}}{\\html{\xA0$buttonLabelD}}}',
						controls: {
							"checkAnswer": true,
							"help": '\\rowgrp'
										+'{\\html{&nbsp;}}'
										+'{\\html{The minus sign in front of a parenthesis means to take the opposite sign of the negative $negFrac inside the parenthesis.}}'
										+'{\\html{&nbsp;}}'
										+'{\\html{The expression without double negatives is:}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\sign{$firstSign}}'
											+'{\\frac{\\fracstr{$firstNum}}{\\fracstr{$firstDen}}}'
											+'{\\sign{+}}'
											+'{\\frac{\\fracstr{$secondNum}}{\\fracstr{$secondDen}}}'
											+'}'
						},
                    }, {
                    	problem: '\\grp'
									+'{\\sign{$firstSign}}'
									+'{\\frac{\\fracstr{$firstNum}}{\\fracstr{$firstDen}}}'
									+'{\\sign{$secondSign}}'
									+'{\\html{$leftParen}}'
									+'{\\sign{$thirdSign}}'
									+'{\\frac{\\fracstr{$secondNum}}{\\fracstr{$secondDen}}}'
									+'{\\html{$rightParen}}',
						answer: '\\css'
								+'{\\rowgrp'
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
									+'{\\html{&nbsp;}}'
									+'{\\grp{\\input{$answerDen}}}'
								+'}{well}',
						controls: {
							"checkAnswer": true,
							"help": true
						},
                    }, {
						problem: '\\grp'
									+'{\\sign{$firstSign}}'
									+'{\\frac{\\fracstr{$firstNum}}{\\fracstr{$firstDen}}}'
									+'{\\sign{$secondSign}}'
									+'{\\html{$leftParen}}'
									+'{\\sign{$thirdSign}}'
									+'{\\frac{\\fracstr{$secondNum}}{\\fracstr{$secondDen}}}'
									+'{\\html{$rightParen}}',
						answer: '\\css'
								+'{\\rowgrp'
									+'{\\html{Determine the lowest common denominator (LCD) of the fractions:}}'
									+'{\\html{&nbsp;}}'
									+'{\\html{$answerDen}}'
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
							"help": true
						},
                    }, {
						problem: '\\grp'
									+'{\\sign{$firstSign}}'
									+'{\\frac{\\fracstr{$firstNum}}{\\fracstr{$firstDen}}}'
									+'{\\sign{$secondSign}}'
									+'{\\html{$leftParen}}'
									+'{\\sign{$thirdSign}}'
									+'{\\frac{\\fracstr{$secondNum}}{\\fracstr{$secondDen}}}'
									+'{\\html{$rightParen}}',
							answer: '\\css'
									+'{\\rowgrp'
										+'{\\html{Determine the lowest common denominator (LCD) of the fractions:}}'
										+'{\\html{&nbsp;}}'
										+'{\\html{$answerDen}}'
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
										+'{\\grp{\\sign{$firstSign}}{\\frac{\\fracstr{$firstAnswerNum}}{\\fracstr{$answerDen}}}'
											+'{\\sign{+}}'
											+'{\\frac{\\fracstr{$secondAnswerNum}}{\\fracstr{$answerDen}}}}'
										+'{\\html{&nbsp;}}'
										+'{\\ins{$oper the numerators:}}'
										+'{\\grp\\{\\frac{\\grp{sign{$firstSign}}{\\fracstr{$firstAnswerNum}}{\\sign{+}}{\\fracstr{$secondAnswerNum}}}{\\fracstr{$answerDen}}}{\\sign{=}}{\\input{$answerSign}}{\\frac{\\input{$differenceNum}}{\\input{$answerDen}}}}'	
        									+'}{well}',
						controls: {
							"checkAnswer": true,
							"help": true,
							"fixBottomRight": true
						}
                    }]
                }]
            },
            // Three fractions with parenthesis
            threeFractionsPar: {
                title: 'Combining Fractions and Mixed Numbers',
                children: [{
                    title: 'twoFractions Answer',
                    children: [{
						problem: '\\html{&nbsp;}',
						answer: '\\grp'
							+'{\\sign{$firstSign}}'
							+'{\\frac{\\fracstr{$firstNum}}{\\fracstr{$firstDen}}}'
							+'{\\sign{$secondSign}}'
							+'{\\html{$leftParen}}'
							//+'{\\sign{$thirdSign}}'
							+'{\\frac{\\fracstr{$secondNum}}{\\fracstr{$secondDen}}}'
							+'{\\html{$rightParen}}'
							+'{\\sign{$forthSign}}'
							+'{\\html{$leftParen}}'
							+'{\\sign{$fifthSign}}'
							+'{\\frac{\\fracstr{$thirdNum}}{\\fracstr{$thirdDen}}}'
							+'{\\html{$rightParen}}'
							+'{\\sign{=}}'
							+'{\\sign{$answerSign}}'
							+'{\\frac{\\input{$differenceNum}}{\\input{$answerDen}}}',
						controls: {
							"checkAnswer": true,
							"help": false,
							"workbook": true
						}
                    }]
                }, {
                    title: 'Workbook',
                    children: [{
						problem: '\\grp'
									+'{\\sign{$firstSign}}'
									+'{\\frac{\\fracstr{$firstNum}}{\\fracstr{$firstDen}}}'
									+'{\\sign{$secondSign}}'
									+'{\\html{$leftParen}}'
									//+'{\\sign{$thirdSign}}'
									+'{\\frac{\\fracstr{$secondNum}}{\\fracstr{$secondDen}}}'
									+'{\\html{$rightParen}}'
									+'{\\sign{$forthSign}}'
									+'{\\html{$leftParen}}'
									+'{\\sign{$fifthSign}}'
									+'{\\frac{\\fracstr{$thirdNum}}{\\fracstr{$thirdDen}}}'
									+'{\\html{$rightParen}}',
						answer: '\\rowgrp'
									+'{\\ins{Determine the lowest common denominator (LCD) of the fractions:}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp{\\input{$answerDen}}'
								+'}',
						controls: {
							"checkAnswer": true,
							"help": true
						},
                    }, {
						problem: '\\grp'
									+'{\\sign{$firstSign}}'
									+'{\\frac{\\fracstr{$firstNum}}{\\fracstr{$firstDen}}}'
									+'{\\sign{$secondSign}}'
									+'{\\html{$leftParen}}'
									//+'{\\sign{$thirdSign}}'
									+'{\\frac{\\fracstr{$secondNum}}{\\fracstr{$secondDen}}}'
									+'{\\html{$rightParen}}'
									+'{\\sign{$forthSign}}'
									+'{\\html{$leftParen}}'
									+'{\\sign{$fifthSign}}'
									+'{\\frac{\\fracstr{$thirdNum}}{\\fracstr{$thirdDen}}}'
									+'{\\html{$rightParen}}',
						answer: '\\css'
								+'{\\rowgrp'
									+'{\\html{Determine the lowest common denominator (LCD) of the fractions:}}'
									+'{\\html{&nbsp;}}'
									+'{\\html{$answerDen}}'
									+'{\\html{&nbsp;}}'
									+'{\\ins{Use the LCD to convert the fractions:}}'
									+'{\\grp{\\sign{$firstSign}}{\\frac{\\fracstr{$firstNum}}{\\fracstr{$firstDen}}}'
        										+'{\\sign{$secondSign}}'
        										+'{\\html{$leftParen}}'
        										+'{\\frac{\\fracstr{$secondNum}}{\\fracstr{$secondDen}}}'
        										+'{\\html{$rightParen}}' 
        										+'{\\sign{$forthSign}}'
												+'{\\html{$leftParen}}'
												+'{\\sign{$fifthSign}}'
												+'{\\frac{\\fracstr{$thirdNum}}{\\fracstr{$thirdDen}}}'
												+'{\\html{$rightParen}}}'      								
        							+'{\\html{&nbsp;}}'
									+'{\\grp'
        										+'{\\sign{$firstSign}}'
        										+'{\\frac{\\input{$firstAnswerNum}}{\\fracstr{$answerDen}}}'
        										+'{\\sign{$secondSign}}'
        										+'{\\html{$leftParen}}'
        										+'{\\frac{\\input{$secondAnswerNum}}{\\fracstr{$answerDen}}}'
        										+'{\\html{$rightParen}}'
        										+'{\\sign{$forthSign}}'
        										+'{\\html{$leftParen}}'
        										+'{\\sign{$fifthSign}}'
        										+'{\\frac{\\input{$thirdAnswerNum}}{\\fracstr{$answerDen}}}'
        										+'{\\html{$rightParen}}'
        										+'}'
        									+'}{well}',
						controls: {
							"checkAnswer": true,
							"help": true
						}
                    }, {
						problem: '\\grp'
									+'{\\sign{$firstSign}}'
									+'{\\frac{\\fracstr{$firstNum}}{\\fracstr{$firstDen}}}'
									+'{\\sign{$secondSign}}'
									+'{\\html{$leftParen}}'
									//+'{\\sign{$thirdSign}}'
									+'{\\frac{\\fracstr{$secondNum}}{\\fracstr{$secondDen}}}'
									+'{\\html{$rightParen}}'
									+'{\\sign{$forthSign}}'
									+'{\\html{$leftParen}}'
									+'{\\sign{$fifthSign}}'
									+'{\\frac{\\fracstr{$thirdNum}}{\\fracstr{$thirdDen}}}'
									+'{\\html{$rightParen}}',
							answer: '\\css'
									+'{\\rowgrp'
										+'{\\html{Determine the lowest common denominator (LCD) of the fractions:}}'
										+'{\\html{&nbsp;}}'
										+'{\\html{$answerDen}}'
										+'{\\html{&nbsp;}}'
										+'{\\html{Use the LCD to convert the fractions:}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp{\\sign{$firstSign}}{\\frac{\\fracstr{$firstNum}}{\\fracstr{$firstDen}}}'
        										+'{\\sign{$secondSign}}'
        										+'{\\html{$leftParen}}'
        										+'{\\frac{\\fracstr{$secondNum}}{\\fracstr{$secondDen}}}'
        										+'{\\html{$rightParen}}' 
        										+'{\\sign{$forthSign}}'
												+'{\\html{$leftParen}}'
												+'{\\sign{$fifthSign}}'
												+'{\\frac{\\fracstr{$thirdNum}}{\\fracstr{$thirdDen}}}'
												+'{\\html{$rightParen}}}'    
										+'{\\html{&nbsp;}}'
										+'{\\grp{\\sign{$firstSign}}{\\frac{\\fracstr{$firstAnswerNum}}{\\fracstr{$answerDen}}}'
											+'{\\sign{$secondSign}}'
											+'{\\sign{$leftParen}}'
											+'{\\frac{\\fracstr{$secondAnswerNum}}{\\fracstr{$answerDen}}}{\\sign{$rightParen}}'
											+'{\\sign{$forthSign}}'
											+'{\\sign{$leftParen}}'
											+'{\\sign{$fifthSign}}'
											+'{\\frac{\\fracstr{$thirdAnswerNum}}{\\fracstr{$answerDen}}}{\\sign{$rightParen}}}'
										+'{\\html{&nbsp;}}'
										+'{\\ins{$oper the numerators:}}'
										+'{\\grp\\{\\frac{\\grp{sign{$firstSign}}{\\fracstr{$firstAnswerNum}}{\\sign{$secondSign}}{\\sign{$leftParen}}{\\fracstr{$secondAnswerNum}}{\\sign{$rightParen}}{\\sign{$forthSign}}{\\sign{$leftParen}}{\\sign{$fifthSign}}{\\fracstr{$thirdAnswerNum}}{\\sign{$rightParen}}}{\\fracstr{$answerDen}}}{\\sign{=}}{\\input{$answerSign}}{\\frac{\\input{$differenceNum}}{\\input{$answerDen}}}}'	
        									+'}{well}',
						controls: {
							"checkAnswer": true,
							"help": true,
							"fixBottomRight": true
						}
                    }]
                }]
            }, 
            // Three fractions with double negative
            threeFracDblNeg: {
                title: 'Combining Fractions and Mixed Numbers',
                children: [{
                    title: 'twoFractions Answer',
                    children: [{
						problem: '\\html{&nbsp;}',
						answer: '\\grp'
							+'{\\sign{$firstSign}}'
							+'{\\frac{\\fracstr{$firstNum}}{\\fracstr{$firstDen}}}'
							+'{\\sign{$secondSign}}'
							+'{\\html{$leftParen}}'
							+'{\\sign{$thirdSign}}'
							+'{\\frac{\\fracstr{$secondNum}}{\\fracstr{$secondDen}}}'
							+'{\\html{$rightParen}}'
							+'{\\sign{$forthSign}}'
							+'{\\html{$leftParen}}'
							+'{\\sign{$fifthSign}}'
							+'{\\frac{\\fracstr{$thirdNum}}{\\fracstr{$thirdDen}}}'
							+'{\\html{$rightParen}}'
							+'{\\sign{=}}'
							+'{\\sign{$answerSign}}'
							+'{\\frac{\\input{$differenceNum}}{\\input{$answerDen}}}',

						controls: {
							"checkAnswer": true,
							"help": false,
							"workbook": true
						}
                    }]
                }, {
                    title: 'Workbook',
                    children: [{
						problem: '\\grp'
									+'{\\sign{$firstSign}}'
									+'{\\frac{\\fracstr{$firstNum}}{\\fracstr{$firstDen}}}'
									+'{\\sign{$secondSign}}'
									+'{\\html{$leftParen}}'
									+'{\\sign{$thirdSign}}'
									+'{\\frac{\\fracstr{$secondNum}}{\\fracstr{$secondDen}}}'
									+'{\\html{$rightParen}}'
									+'{\\sign{$forthSign}}'
									+'{\\html{$leftParen}}'
									+'{\\sign{$fifthSign}}'
									+'{\\frac{\\fracstr{$thirdNum}}{\\fracstr{$thirdDen}}}'
									+'{\\html{$rightParen}}',
						answer: '\\rowgrp'+
									'{\\ins{Choose the expression that is rewritten correctly without any double negatives:}}'+
									'{\\grp{\\btn{A}{$buttonValueA}{marg}}{\\html{\xA0$buttonLabelA}}}'+
                                    '{\\grp{\\btn{B}{$buttonValueB}{marg}}{\\html{\xA0$buttonLabelB}}}'+
                                    '{\\grp{\\btn{C}{$buttonValueC}{marg}}{\\html{\xA0$buttonLabelC}}}'+
                                    '{\\grp{\\btn{D}{$buttonValueD}{marg}}{\\html{\xA0$buttonLabelD}}}',
						controls: {
							"checkAnswer": true,
							"help": '\\rowgrp'
										+'{\\html{&nbsp;}}'
										+'{\\html{The minus sign in front of a parenthesis means to take the opposite sign of the negative $negFrac inside the parenthesis.}}'
										+'{\\html{&nbsp;}}'
										+'{\\html{The expression without double negatives is:}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\sign{$sign1}}'
											+'{\\frac{\\fracstr{$firstNum}}{\\fracstr{$firstDen}}}'
											+'{\\sign{$sign2}}'
											+'{\\frac{\\fracstr{$secondNum}}{\\fracstr{$secondDen}}}'
											+'{\\sign{$sign3}}'
											+'{\\frac{\\fracstr{$thirdNum}}{\\fracstr{$thirdDen}}}'
											+'}'
						},
                    }, {
                    	problem: '\\grp'
									+'{\\sign{$firstSign}}'
									+'{\\frac{\\fracstr{$firstNum}}{\\fracstr{$firstDen}}}'
									+'{\\sign{$secondSign}}'
									+'{\\html{$leftParen}}'
									+'{\\sign{$thirdSign}}'
									+'{\\frac{\\fracstr{$secondNum}}{\\fracstr{$secondDen}}}'
									+'{\\html{$rightParen}}'
									+'{\\sign{$forthSign}}'
									+'{\\html{$leftParen}}'
									+'{\\sign{$fifthSign}}'
									+'{\\frac{\\fracstr{$thirdNum}}{\\fracstr{$thirdDen}}}'
									+'{\\html{$rightParen}}',
						answer: '\\css'
								+'{\\rowgrp'
									+'{\\html{The expression without double negatives is:}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\sign{$sign1}}'
											+'{\\frac{\\fracstr{$firstNum}}{\\fracstr{$firstDen}}}'
											+'{\\sign{$sign2}}'
											+'{\\frac{\\fracstr{$secondNum}}{\\fracstr{$secondDen}}}'
											+'{\\sign{$sign3}}'
											+'{\\frac{\\fracstr{$thirdNum}}{\\fracstr{$thirdDen}}}'
										+'}'
									+'{\\html{&nbsp;}}'
									+'{\\ins{Determine the lowest common denominator (LCD) of the fractions:}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp{\\input{$answerDen}}}'
								+'}{well}',
						controls: {
							"checkAnswer": true,
							"help": true
						},
                    }, {
						problem: '\\grp'
									+'{\\sign{$firstSign}}'
									+'{\\frac{\\fracstr{$firstNum}}{\\fracstr{$firstDen}}}'
									+'{\\sign{$secondSign}}'
									+'{\\html{$leftParen}}'
									+'{\\sign{$thirdSign}}'
									+'{\\frac{\\fracstr{$secondNum}}{\\fracstr{$secondDen}}}'
									+'{\\html{$rightParen}}'
									+'{\\sign{$forthSign}}'
									+'{\\html{$leftParen}}'
									+'{\\sign{$fifthSign}}'
									+'{\\frac{\\fracstr{$thirdNum}}{\\fracstr{$thirdDen}}}'
									+'{\\html{$rightParen}}',
						answer: '\\css'
								+'{\\rowgrp'
									+'{\\html{The expression without double negatives is:}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\sign{$sign1}}'
											+'{\\frac{\\fracstr{$firstNum}}{\\fracstr{$firstDen}}}'
											+'{\\sign{$sign2}}'
											+'{\\frac{\\fracstr{$secondNum}}{\\fracstr{$secondDen}}}'
											+'{\\sign{$sign3}}'
											+'{\\frac{\\fracstr{$thirdNum}}{\\fracstr{$thirdDen}}}'
										+'}'
										+'{\\html{&nbsp;}}'
									+'{\\html{Determine the lowest common denominator (LCD) of the fractions:}}'
									+'{\\html{&nbsp;}}'
									+'{\\html{$answerDen}}'
									+'{\\html{&nbsp;}}'
									+'{\\ins{Use the LCD to convert the fractions:}}'
									+'{\\grp'
											+'{\\sign{$sign1}}'
											+'{\\frac{\\fracstr{$firstNum}}{\\fracstr{$firstDen}}}'
											+'{\\sign{$sign2}}'
											+'{\\frac{\\fracstr{$secondNum}}{\\fracstr{$secondDen}}}'
											+'{\\sign{$sign3}}'
											+'{\\frac{\\fracstr{$thirdNum}}{\\fracstr{$thirdDen}}}'
										+'}'   								
        							+'{\\html{&nbsp;}}'
									+'{\\grp'
        										+'{\\sign{$sign1}}'
        										+'{\\frac{\\input{$firstAnswerNum}}{\\fracstr{$answerDen}}}'
        										+'{\\sign{$sign2}}'
        										+'{\\frac{\\input{$secondAnswerNum}}{\\fracstr{$answerDen}}}'
        										+'{\\sign{$sign3}}'
        										+'{\\frac{\\input{$thirdAnswerNum}}{\\fracstr{$answerDen}}}'
        										+'}'
        									+'}{well}',
						controls: {
							"checkAnswer": true,
							"help": true
						}
                    }, {
						problem: '\\grp'
									+'{\\sign{$firstSign}}'
									+'{\\frac{\\fracstr{$firstNum}}{\\fracstr{$firstDen}}}'
									+'{\\sign{$secondSign}}'
									+'{\\html{$leftParen}}'
									+'{\\sign{$thirdSign}}'
									+'{\\frac{\\fracstr{$secondNum}}{\\fracstr{$secondDen}}}'
									+'{\\html{$rightParen}}'
									+'{\\sign{$forthSign}}'
									+'{\\html{$leftParen}}'
									+'{\\sign{$fifthSign}}'
									+'{\\frac{\\fracstr{$thirdNum}}{\\fracstr{$thirdDen}}}'
									+'{\\html{$rightParen}}',
							answer: '\\css'
									+'{\\rowgrp'
									+'{\\html{The expression without double negatives is:}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\sign{$sign1}}'
											+'{\\frac{\\fracstr{$firstNum}}{\\fracstr{$firstDen}}}'
											+'{\\sign{$sign2}}'
											+'{\\frac{\\fracstr{$secondNum}}{\\fracstr{$secondDen}}}'
											+'{\\sign{$sign3}}'
											+'{\\frac{\\fracstr{$thirdNum}}{\\fracstr{$thirdDen}}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\html{Determine the lowest common denominator (LCD) of the fractions:}}'
										+'{\\html{&nbsp;}}'
										+'{\\html{$answerDen}}'
										+'{\\html{&nbsp;}}'
										+'{\\html{Use the LCD to convert the fractions:}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\sign{$sign1}}'
											+'{\\frac{\\fracstr{$firstNum}}{\\fracstr{$firstDen}}}'
											+'{\\sign{$sign2}}'
											+'{\\frac{\\fracstr{$secondNum}}{\\fracstr{$secondDen}}}'
											+'{\\sign{$sign3}}'
											+'{\\frac{\\fracstr{$thirdNum}}{\\fracstr{$thirdDen}}}'
										+'}'    
										+'{\\html{&nbsp;}}'
										+'{\\grp{\\sign{$sign1}}{\\frac{\\fracstr{$firstAnswerNum}}{\\fracstr{$answerDen}}}'
											+'{\\sign{$sign2}}'
											+'{\\frac{\\fracstr{$secondAnswerNum}}{\\fracstr{$answerDen}}}'
											+'{\\sign{$sign3}}'
											+'{\\frac{\\fracstr{$thirdAnswerNum}}{\\fracstr{$answerDen}}}}'
										+'{\\html{&nbsp;}}'
										+'{\\ins{$oper the numerators:}}'
										+'{\\grp\\{\\frac{\\grp{sign{$sign1}}{\\fracstr{$firstAnswerNum}}{\\sign{$sign2}}{\\fracstr{$secondAnswerNum}}{\\sign{$sign3}}{\\fracstr{$thirdAnswerNum}}}{\\fracstr{$answerDen}}}{\\sign{=}}{\\input{$answerSign}}{\\frac{\\input{$differenceNum}}{\\input{$answerDen}}}}'	
        									+'}{well}',
						controls: {
							"checkAnswer": true,
							"help": true,
							"fixBottomRight": true
						}
                    }]
                }]
            }, 
            // Three fractions with double negative
            threeFracDblNegPos: {
                title: 'Combining Fractions and Mixed Numbers',
                children: [{
                    title: 'twoFractions Answer',
                    children: [{
						problem: '\\html{&nbsp;}',
						answer: '\\grp'
							+'{\\sign{$firstSign}}'
							+'{\\frac{\\fracstr{$firstNum}}{\\fracstr{$firstDen}}}'
							+'{\\sign{$secondSign}}'
							+'{\\html{$leftParen}}'
							+'{\\sign{$thirdSign}}'
							+'{\\frac{\\fracstr{$secondNum}}{\\fracstr{$secondDen}}}'
							+'{\\html{$rightParen}}'
							+'{\\sign{$forthSign}}'
							+'{\\html{$leftParen}}'
							+'{\\frac{\\fracstr{$thirdNum}}{\\fracstr{$thirdDen}}}'
							+'{\\html{$rightParen}}'
							+'{\\sign{=}}'
							+'{\\sign{$answerSign}}'
							+'{\\frac{\\input{$differenceNum}}{\\input{$answerDen}}}',

						controls: {
							"checkAnswer": true,
							"help": false,
							"workbook": true
						}
                    }]
                }, {
                    title: 'Workbook',
                    children: [{
						problem: '\\grp'
									+'{\\sign{$firstSign}}'
									+'{\\frac{\\fracstr{$firstNum}}{\\fracstr{$firstDen}}}'
									+'{\\sign{$secondSign}}'
									+'{\\html{$leftParen}}'
									+'{\\sign{$thirdSign}}'
									+'{\\frac{\\fracstr{$secondNum}}{\\fracstr{$secondDen}}}'
									+'{\\html{$rightParen}}'
									+'{\\sign{$forthSign}}'
									+'{\\html{$leftParen}}'
									+'{\\frac{\\fracstr{$thirdNum}}{\\fracstr{$thirdDen}}}'
									+'{\\html{$rightParen}}',
						answer: '\\rowgrp'+
									'{\\ins{Choose the expression that is rewritten correctly without any double negatives:}}'+
									'{\\grp{\\btn{A}{$buttonValueA}{marg}}{\\html{\xA0$buttonLabelA}}}'+
                                    '{\\grp{\\btn{B}{$buttonValueB}{marg}}{\\html{\xA0$buttonLabelB}}}'+
                                    '{\\grp{\\btn{C}{$buttonValueC}{marg}}{\\html{\xA0$buttonLabelC}}}'+
                                    '{\\grp{\\btn{D}{$buttonValueD}{marg}}{\\html{\xA0$buttonLabelD}}}',
						controls: {
							"checkAnswer": true,
							"help": '\\rowgrp'
										+'{\\html{&nbsp;}}'
										+'{\\html{The minus sign in front of a parenthesis means to take the opposite sign of the negative $negFrac inside the parenthesis.}}'
										+'{\\html{&nbsp;}}'
										+'{\\html{The expression without double negatives is:}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\sign{$sign1}}'
											+'{\\frac{\\fracstr{$firstNum}}{\\fracstr{$firstDen}}}'
											+'{\\sign{$sign2}}'
											+'{\\frac{\\fracstr{$secondNum}}{\\fracstr{$secondDen}}}'
											+'{\\sign{$sign3}}'
											+'{\\frac{\\fracstr{$thirdNum}}{\\fracstr{$thirdDen}}}'
											+'}'
						},
                    }, {
                    	problem: '\\grp'
									+'{\\sign{$firstSign}}'
									+'{\\frac{\\fracstr{$firstNum}}{\\fracstr{$firstDen}}}'
									+'{\\sign{$secondSign}}'
									+'{\\html{$leftParen}}'
									+'{\\sign{$thirdSign}}'
									+'{\\frac{\\fracstr{$secondNum}}{\\fracstr{$secondDen}}}'
									+'{\\html{$rightParen}}'
									+'{\\sign{$forthSign}}'
									+'{\\html{$leftParen}}'
									+'{\\frac{\\fracstr{$thirdNum}}{\\fracstr{$thirdDen}}}'
									+'{\\html{$rightParen}}',
						answer: '\\css'
								+'{\\rowgrp'
									+'{\\html{The expression without double negatives is:}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\sign{$sign1}}'
											+'{\\frac{\\fracstr{$firstNum}}{\\fracstr{$firstDen}}}'
											+'{\\sign{$sign2}}'
											+'{\\frac{\\fracstr{$secondNum}}{\\fracstr{$secondDen}}}'
											+'{\\sign{$sign3}}'
											+'{\\frac{\\fracstr{$thirdNum}}{\\fracstr{$thirdDen}}}'
										+'}'
									+'{\\html{&nbsp;}}'
									+'{\\ins{Determine the lowest common denominator (LCD) of the fractions:}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp{\\input{$answerDen}}}'
								+'}{well}',
						controls: {
							"checkAnswer": true,
							"help": true
						},
                    }, {
						problem: '\\grp'
									+'{\\sign{$firstSign}}'
									+'{\\frac{\\fracstr{$firstNum}}{\\fracstr{$firstDen}}}'
									+'{\\sign{$secondSign}}'
									+'{\\html{$leftParen}}'
									+'{\\sign{$thirdSign}}'
									+'{\\frac{\\fracstr{$secondNum}}{\\fracstr{$secondDen}}}'
									+'{\\html{$rightParen}}'
									+'{\\sign{$forthSign}}'
									+'{\\html{$leftParen}}'
									+'{\\frac{\\fracstr{$thirdNum}}{\\fracstr{$thirdDen}}}'
									+'{\\html{$rightParen}}',
						answer: '\\css'
								+'{\\rowgrp'
									+'{\\html{The expression without double negatives is:}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\sign{$sign1}}'
											+'{\\frac{\\fracstr{$firstNum}}{\\fracstr{$firstDen}}}'
											+'{\\sign{$sign2}}'
											+'{\\frac{\\fracstr{$secondNum}}{\\fracstr{$secondDen}}}'
											+'{\\sign{$sign3}}'
											+'{\\frac{\\fracstr{$thirdNum}}{\\fracstr{$thirdDen}}}'
										+'}'
										+'{\\html{&nbsp;}}'
									+'{\\html{Determine the lowest common denominator (LCD) of the fractions:}}'
									+'{\\html{&nbsp;}}'
									+'{\\html{$answerDen}}'
									+'{\\html{&nbsp;}}'
									+'{\\ins{Use the LCD to convert the fractions:}}'
									+'{\\grp'
											+'{\\sign{$sign1}}'
											+'{\\frac{\\fracstr{$firstNum}}{\\fracstr{$firstDen}}}'
											+'{\\sign{$sign2}}'
											+'{\\frac{\\fracstr{$secondNum}}{\\fracstr{$secondDen}}}'
											+'{\\sign{$sign3}}'
											+'{\\frac{\\fracstr{$thirdNum}}{\\fracstr{$thirdDen}}}'
										+'}'   								
        							+'{\\html{&nbsp;}}'
									+'{\\grp'
        										+'{\\sign{$sign1}}'
        										+'{\\frac{\\input{$firstAnswerNum}}{\\fracstr{$answerDen}}}'
        										+'{\\sign{$sign2}}'
        										+'{\\frac{\\input{$secondAnswerNum}}{\\fracstr{$answerDen}}}'
        										+'{\\sign{$sign3}}'
        										+'{\\frac{\\input{$thirdAnswerNum}}{\\fracstr{$answerDen}}}'
        										+'}'
        									+'}{well}',
						controls: {
							"checkAnswer": true,
							"help": true
						}
                    }, {
						problem: '\\grp'
									+'{\\sign{$firstSign}}'
									+'{\\frac{\\fracstr{$firstNum}}{\\fracstr{$firstDen}}}'
									+'{\\sign{$secondSign}}'
									+'{\\html{$leftParen}}'
									+'{\\sign{$thirdSign}}'
									+'{\\frac{\\fracstr{$secondNum}}{\\fracstr{$secondDen}}}'
									+'{\\html{$rightParen}}'
									+'{\\sign{$forthSign}}'
									+'{\\html{$leftParen}}'
									+'{\\frac{\\fracstr{$thirdNum}}{\\fracstr{$thirdDen}}}'
									+'{\\html{$rightParen}}',
							answer: '\\css'
									+'{\\rowgrp'
									+'{\\html{The expression without double negatives is:}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\sign{$sign1}}'
											+'{\\frac{\\fracstr{$firstNum}}{\\fracstr{$firstDen}}}'
											+'{\\sign{$sign2}}'
											+'{\\frac{\\fracstr{$secondNum}}{\\fracstr{$secondDen}}}'
											+'{\\sign{$sign3}}'
											+'{\\frac{\\fracstr{$thirdNum}}{\\fracstr{$thirdDen}}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\html{Determine the lowest common denominator (LCD) of the fractions:}}'
										+'{\\html{&nbsp;}}'
										+'{\\html{$answerDen}}'
										+'{\\html{&nbsp;}}'
										+'{\\html{Use the LCD to convert the fractions:}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\sign{$sign1}}'
											+'{\\frac{\\fracstr{$firstNum}}{\\fracstr{$firstDen}}}'
											+'{\\sign{$sign2}}'
											+'{\\frac{\\fracstr{$secondNum}}{\\fracstr{$secondDen}}}'
											+'{\\sign{$sign3}}'
											+'{\\frac{\\fracstr{$thirdNum}}{\\fracstr{$thirdDen}}}'
										+'}'    
										+'{\\html{&nbsp;}}'
										+'{\\grp{\\sign{$sign1}}{\\frac{\\fracstr{$firstAnswerNum}}{\\fracstr{$answerDen}}}'
											+'{\\sign{$sign2}}'
											+'{\\frac{\\fracstr{$secondAnswerNum}}{\\fracstr{$answerDen}}}'
											+'{\\sign{$sign3}}'
											+'{\\frac{\\fracstr{$thirdAnswerNum}}{\\fracstr{$answerDen}}}}'
										+'{\\html{&nbsp;}}'
										+'{\\ins{$oper the numerators:}}'
										+'{\\grp\\{\\frac{\\grp{sign{$sign1}}{\\fracstr{$firstAnswerNum}}{\\sign{$sign2}}{\\fracstr{$secondAnswerNum}}{\\sign{$sign3}}{\\fracstr{$thirdAnswerNum}}}{\\fracstr{$answerDen}}}{\\sign{=}}{\\input{$answerSign}}{\\frac{\\input{$differenceNum}}{\\input{$answerDen}}}}'	
        									+'}{well}',
						controls: {
							"checkAnswer": true,
							"help": true,
							"fixBottomRight": true
						}
                    }]
                }]
            },             
        },
        data = [
            //problem 1
			{ firstNum: '7', firstDen: '15', secondNum: '11', secondDen: '15', operation: '&minus;', answerNum: '-4', answerDen: '15', answerSign: '', template: 'answerDirect' },            
            //problem 2
            { firstNum: '1', firstDen: '3', secondNum: '4', secondDen: '5', firstAnswerNum: '-5', secondAnswerNum: '12', differenceNum: '7', answerDen: '15', firstSign: '&minus;', secondSign: '+', thirdSign: '', answerSign: '', leftParen: '', rightParen: '', oper: 'Add', template: 'twoFractions' },
             //problem 3
            { firstNum: '1', firstDen: '4', secondNum: '5', secondDen: '6', firstAnswerNum: '3', secondAnswerNum: '-10', differenceNum: '-7', answerDen: '12', firstSign: '', secondSign: '+', thirdSign: '&minus;', answerSign: '', leftParen: '(', rightParen: ')', oper: 'Add', template: 'twoFractionsPar' },
			//problem 4
            { firstNum: '2', firstDen: '5', secondNum: '1', secondDen: '2', firstAnswerNum: '-4', secondAnswerNum: '5', differenceNum: '-9', answerDen: '10', firstSign: '&minus;', secondSign: '&minus;', thirdSign: '&minus;', leftParen: '', rightParen: '', oper: 'Subtract', template: 'twoFractions' },
             //problem 5
            { firstNum: '4', firstDen: '9', secondNum: '1', secondDen: '3', firstAnswerNum: '4', secondAnswerNum: '3', differenceNum: '7', answerDen: '9', firstSign: '', secondSign: '+', thirdSign: '', answerSign: '', leftParen: '(', rightParen: ')', oper: 'Add', template: 'twoFractionsParPos' },
            //problem 6
            { firstNum: '5', firstDen: '12', secondNum: '2', secondDen: '3', firstAnswerNum: '5', secondAnswerNum: '8', differenceNum: '-13', answerDen: '12', firstSign: '&minus;', secondSign: '&minus;', thirdSign: '', answerSign: '', leftParen: '(', rightParen: ')', oper: 'Subtract', template: 'twoFractionsParPos' },
            //problem 7
            { firstNum: '2', firstDen: '3', secondNum: '1', secondDen: '6', firstAnswerNum: '4', secondAnswerNum: '-1', differenceNum: '-5', answerDen: '6', firstSign: '&minus;', secondSign: '+', thirdSign: '&minus;', answerSign: '', leftParen: '(', rightParen: ')', oper: 'Add', template: 'twoFractionsPar' },
            //problem 8
            { firstNum: '1', firstDen: '4', secondNum: '5', secondDen: '6', firstAnswerNum: '3', secondAnswerNum: '10', differenceNum: '7', answerDen: '12', firstSign: '&minus;', secondSign: '&minus;', thirdSign: '&minus;', answerSign: '', leftParen: '(', rightParen: ')', negFrac: '<sup>5</sup>&#8260;<sub>6</sub>', oper: 'Add', template: 'twoFracDblNeg', 
            buttonValueA: 'F', buttonLabelA: '<span class=bigger>-</span>1/4 <span class=bigger>-</span> 5/6', 
            buttonValueB: 'F', buttonLabelB: '<span class=bigger>&nbsp;</span>1/4 <span class=bigger>+</span> 5/6', 
            buttonValueC: 'T', buttonLabelC: '<span class=bigger>-</span>1/4 <span class=bigger>+</span> 5/6', 
            buttonValueD: 'F', buttonLabelD: '<span class=bigger>&nbsp;</span>1/4 <span class=bigger>-</span> 5/6' },
             //problem 9
            { firstNum: '2', firstDen: '5', secondNum: '3', secondDen: '8', firstAnswerNum: '16', secondAnswerNum: '15', differenceNum: '31', answerDen: '40', firstSign: '', secondSign: '&minus;', thirdSign: '&minus;', answerSign: '', leftParen: '(', rightParen: ')', negFrac: '<sup>3</sup>&#8260;<sub>8</sub>', oper: 'Add', template: 'twoFracDblNeg', 
            buttonValueA: 'F', buttonLabelA: '<span class=bigger>-</span>2/5 <span class=bigger>-</span> 3/8', 
            buttonValueB: 'T', buttonLabelB: '<span class=bigger>&nbsp;</span>2/5 <span class=bigger>+</span> 3/8', 
            buttonValueC: 'F', buttonLabelC: '<span class=bigger>-</span>2/5 <span class=bigger>-</span> 3/8', 
            buttonValueD: 'F', buttonLabelD: '<span class=bigger>&nbsp;</span>2/5 <span class=bigger>-</span> 3/8' },
            //problem 10
            { firstNum: '11', firstDen: '10', secondNum: '3', secondDen: '4', thirdNum: '2', thirdDen: '5', firstAnswerNum: '22', secondAnswerNum: '15', thirdAnswerNum: '8', differenceNum: '-1', answerDen: '20', firstSign: '', secondSign: '&minus;', thirdSign: '', forthSign: '+', fifthSign: '&minus;', answerSign: '', leftParen: '(', rightParen: ')', oper: 'Add', template: 'threeFractionsPar' },
            //problem 11
            { firstNum: '6', firstDen: '7', secondNum: '3', secondDen: '14', thirdNum: '1', thirdDen: '4', firstAnswerNum: '24', secondAnswerNum: '6', thirdAnswerNum: '7', differenceNum: '25', answerDen: '28', firstSign: '', secondSign: '+', thirdSign: '&minus;', forthSign: '&minus;', fifthSign: '&minus;', answerSign: '', leftParen: '(', rightParen: ')', negFrac: '<sup>1</sup>&#8260;<sub>4</sub>', oper: 'Subtract and add', sign1: '', sign2: '&minus;', sign3: '+',  template: 'threeFracDblNeg', 
            buttonValueA: 'F', buttonLabelA: '<span class=bigger>-</span>6/7 <span class=bigger>-</span> 3/14 <span class=bigger>+</span> 1/4', 
            buttonValueB: 'F', buttonLabelB: '<span class=bigger>&nbsp;</span>6/7 <span class=bigger>+</span> 3/14 <span class=bigger>-</span> 1/4', 
            buttonValueC: 'T', buttonLabelC: '<span class=bigger>&nbsp;</span>6/7 <span class=bigger>-</span> 3/14 <span class=bigger>+</span> 1/4', 
            buttonValueD: 'F', buttonLabelD: '<span class=bigger>&nbsp;</span>6/7 <span class=bigger>+</span> 3/14 <span class=bigger>-</span> 1/4' },
            //problem 12
            { firstNum: '7', firstDen: '8', secondNum: '3', secondDen: '16', thirdNum: '2', thirdDen: '3', firstAnswerNum: '42', secondAnswerNum: '9', thirdAnswerNum: '32', differenceNum: '-1', answerDen: '48', firstSign: '&minus;', secondSign: '&minus;', thirdSign: '&minus;', forthSign: '+', fifthSign: '', answerSign: '', leftParen: '(', rightParen: ')', negFrac: '<sup>3</sup>&#8260;<sub>16</sub>', oper: 'Add and subtract', sign1: '&minus;', sign2: '+', sign3: '+', template: 'threeFracDblNegPos', 
            buttonValueA: 'F', buttonLabelA: '<span class=bigger>-</span>7/8 <span class=bigger>-</span> 3/16 <span class=bigger>+</span> 2/3', 
            buttonValueB: 'T', buttonLabelB: '<span class=bigger>-</span>7/8 <span class=bigger>+</span> 3/16 <span class=bigger>+</span> 2/3', 
            buttonValueC: 'F', buttonLabelC: '<span class=bigger>&nbsp;</span>7/8 <span class=bigger>+</span> 3/16 <span class=bigger>+</span> 2/3', 
            buttonValueD: 'F', buttonLabelD: '<span class=bigger>&nbsp;</span>7/8 <span class=bigger>+</span> 3/16 <span class=bigger>-</span> 2/3' },
		
        ];

    return dataUtils.build(desc, template, data);
}]);



