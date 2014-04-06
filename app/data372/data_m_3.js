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
	        	
						   
// Two franctions without parenths
            
// Two fractions with parenthesis
            
// Two fractions with double negative, initial first step
            firstTempl: {
                title: 'Combining Fractions and Mixed Numbers',
                children: [{
                    title: 'twoFractions Answer',
                    children: [{
						problem: '\\html{&nbsp;}',
						answer: '\\rowgrp'
										+'{\\row'
										//+'{\\html{$probExpr}}'
										+'{\\html{Find the $probExpr of }}'
											+'{\\sign{$firstSign}}'
											+'{\\frac{\\fracstr{$firstNum}}{\\fracstr{$firstDen}}}'
											+'{\\html{and}}'
											+'{\\sign{$thirdSign}}'
											+'{\\frac{\\fracstr{$secondNum}}{\\fracstr{$secondDen}}}'
											+'}'
										+'{\\html{&nbsp;}}'
										+'{\\row'
											+'{\\html{Answer: }}'
											//+'{\\sign{=}}'
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
										+'{\\html{Find the $probExpr of }}'
											+'{\\sign{$firstSign}}'
											+'{\\frac{\\fracstr{$firstNum}}{\\fracstr{$firstDen}}}'
											+'{\\html{and}}'
											+'{\\sign{$thirdSign}}'
											+'{\\frac{\\fracstr{$secondNum}}{\\fracstr{$secondDen}}}'
								+'}',
						answer: '\\rowgrp'+
									'{\\ins{Choose the correct math translation for the problem expression:}}'+
									'{\\grp{\\btn{A}{$buttonValueA}{marg}}{\\html{\xA0$buttonLabelA}}}'+
                                    '{\\grp{\\btn{B}{$buttonValueB}{marg}}{\\html{\xA0$buttonLabelB}}}'+
                                    '{\\grp{\\btn{C}{$buttonValueC}{marg}}{\\html{\xA0$buttonLabelC}}}'+
                                    '{\\grp{\\btn{D}{$buttonValueD}{marg}}{\\html{\xA0$buttonLabelD}}}',
						controls: {
							"checkAnswer": true,
							"help": true
							// "help": '\\rowgrp'
							// 			+'{\\html{&nbsp;}}'
							// 			+'{\\html{The minus sign in front of a parenthesis means to take the opposite sign of the negative $negFrac inside the parenthesis.}}'
							// 			+'{\\html{&nbsp;}}'
							// 			+'{\\html{The expression without double negatives is:}}'
							// 			+'{\\html{&nbsp;}}'
							// 			+'{\\row'
							// 				+'{\\sign{$firstSign}}'
							// 				+'{\\frac{\\fracstr{$firstNum}}{\\fracstr{$firstDen}}}'
							// 				+'{\\sign{+}}'
							// 				+'{\\frac{\\fracstr{$secondNum}}{\\fracstr{$secondDen}}}'
							// 				+'}'
						},
                    }, {
                    	problem: '\\row'
										+'{\\html{Find the $probExpr of }}'
											+'{\\sign{$firstSign}}'
											+'{\\frac{\\fracstr{$firstNum}}{\\fracstr{$firstDen}}}'
											+'{\\html{and}}'
											+'{\\sign{$thirdSign}}'
											+'{\\frac{\\fracstr{$secondNum}}{\\fracstr{$secondDen}}}'
								+'}',
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
						},
                    }, {
						problem: '\\row'
										+'{\\html{Find the $probExpr of }}'
											+'{\\sign{$firstSign}}'
											+'{\\frac{\\fracstr{$firstNum}}{\\fracstr{$firstDen}}}'
											+'{\\html{and}}'
											+'{\\sign{$thirdSign}}'
											+'{\\frac{\\fracstr{$secondNum}}{\\fracstr{$secondDen}}}'
								+'}',
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
						},
                    }, {
						problem: '\\row'
										+'{\\html{Find the $probExpr of }}'
											+'{\\sign{$firstSign}}'
											+'{\\frac{\\fracstr{$firstNum}}{\\fracstr{$firstDen}}}'
											+'{\\html{and}}'
											+'{\\sign{$thirdSign}}'
											+'{\\frac{\\fracstr{$secondNum}}{\\fracstr{$secondDen}}}'
								+'}',
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
										+'{\\grp\\{\\frac{\\grp{sign{$firstSign}}{\\fracstr{$firstAnswerNum}}{\\sign{$secondSign}}{\\html{$leftParen}}{\\sign{$thirdSign}}{\\fracstr{$secondAnswerNum}}{\\html{$rightParen}}}{\\fracstr{$answerDen}}}{\\sign{=}}{\\frac{\\input{$differenceNum}}{\\input{$answerDen}}}}'	
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
            
            // Three fractions with double negative
      
        },
        data = [
            //problem 1
         { firstNum: '3', firstDen: '5', secondNum: '9', secondDen: '10', firstAnswerNum: '6', secondAnswerNum: '9', differenceNum: '-3', answerDen: '10', firstSign: '', secondSign: '+', thirdSign: '-', answerSign: '&minus;', leftParen: '(', rightParen: ')', probExpr: 'sum', oper: 'Add', template: 'firstTempl', 
            buttonValueA: 'F', buttonLabelA: '<span class=bigger>&nbsp;</span>3/5 <span class=bigger>+</span>(9/10)', 
            buttonValueB: 'T', buttonLabelB: '<span class=bigger>&nbsp;</span>3/5 <span class=bigger>+</span>(- 9/10)', 
            buttonValueC: 'F', buttonLabelC: '<span class=bigger>&nbsp;</span>9/10 <span class=bigger>+</span>(3/5)', 
            buttonValueD: 'F', buttonLabelD: '<span class=bigger>&nbsp;</span>3/5 <span class=bigger>-</span>(- 9/10)' },
            //problem 2

             //problem 3

			//problem 4

             //problem 5

            //problem 6

            //problem 7

            //problem 8
            // { firstNum: '1', firstDen: '4', secondNum: '5', secondDen: '6', firstAnswerNum: '3', secondAnswerNum: '10', differenceNum: '7', answerDen: '12', firstSign: '&minus;', secondSign: '&minus;', thirdSign: '&minus;', answerSign: '', leftParen: '(', rightParen: ')', probExpr: 'sum', negFrac: '5/6', oper: 'Add', template: 'firstTempl', 
            // buttonValueA: 'F', buttonLabelA: '<span class=bigger>-</span>1/4 <span class=bigger>-</span> 5/6', 
            // buttonValueB: 'F', buttonLabelB: '<span class=bigger>&nbsp;</span>1/4 <span class=bigger>+</span> 5/6', 
            // buttonValueC: 'T', buttonLabelC: '<span class=bigger>-</span>1/4 <span class=bigger>+</span> 5/6', 
            // buttonValueD: 'F', buttonLabelD: '<span class=bigger>&nbsp;</span>1/4 <span class=bigger>-</span> 5/6' },
             //problem 9
            // { firstNum: '2', firstDen: '5', secondNum: '3', secondDen: '8', firstAnswerNum: '16', secondAnswerNum: '15', differenceNum: '31', answerDen: '40', firstSign: '', secondSign: '&minus;', thirdSign: '&minus;', answerSign: '', leftParen: '(', rightParen: ')', negFrac: '3/8', oper: 'Add', template: 'firstTempl', 
            // buttonValueA: 'F', buttonLabelA: '<span class=bigger>-</span>2/5 <span class=bigger>-</span> 3/8', 
            // buttonValueB: 'T', buttonLabelB: '<span class=bigger>&nbsp;</span>2/5 <span class=bigger>+</span> 3/8', 
            // buttonValueC: 'F', buttonLabelC: '<span class=bigger>-</span>2/5 <span class=bigger>-</span> 3/8', 
            // buttonValueD: 'F', buttonLabelD: '<span class=bigger>&nbsp;</span>2/5 <span class=bigger>-</span> 3/8' },


		
        ];

    return dataUtils.build(desc, template, data);
}]);



