/*global angular */

angular.module('mathSkills').service('data_k_3', ['dataUtils', function (dataUtils) {
    var desc = {
			title: 'K.3 Subtracting Integers and Decimals',
			path: 'K.3-subtracting-integers-and-decimals',
            children: []
        },
        template = {
			main: {
                title: 'Subtracting Integers and Decimals',
				children: [{
					title: 'Main Answer',
					children: [{
						problem: '\\html{'+
                                        'Solve:'+
                                        '<br><br>$problemStatement'+
                                    '}',
						answer: '\\grp{\\input{$answer}}',
						controls: {
							"checkAnswer": true,
						    "help": "\\html{$helpStatement}"
                        }
					}]
                }]
            },
			rewriteDblNegSolve: {
                title: 'Subtracting Integers and Decimals',
				children: [{
					title: 'Main Answer',
					children: [{
						problem: '\\html{'+
										'$problemStatement<br><br>'+
                                        'Choose the expression that is rewritten correctly without any double negatives:'+
                                    '}',
						answer: '\\btngrp'+
									'{\\rowgrp'+
										'{\\grp{\\btn{A}{$buttonValueA}{marg}}{\\html{\xA0$buttonLabelA}}}'+
										'{\\grp{\\btn{B}{$buttonValueB}{marg}}{\\html{\xA0$buttonLabelB}}}'+
										'{\\grp{\\btn{C}{$buttonValueC}{marg}}{\\html{\xA0$buttonLabelC}}}'+
										'{\\grp{\\btn{D}{$buttonValueD}{marg}}{\\html{\xA0$buttonLabelD}}}'+
									'}',
						controls: {
							"checkAnswer": true,
						    "help": '\\rowgrp'
										+'{\\html{$problemLeftAligned}}'
										+'{\\html{&nbsp;}}'
										+'{\\html{The minus sign in front of the parenthesis means to take the opposite sign of the negative $absNumber inside the parenthesis.}}'
										+'{\\html{$secondHelpText}}'
										+'{\\html{The expression without double negatives is:}}'
										+'{\\html{&nbsp;}}'
										+'{\\css{\\html{$labelCorrect}}{blue-text}}',
                        }
					}, {
						problem: '\\html{'+
                                        '$problemStatement'+
                                    '}',
						answer: '\\wb'
									+'{\\rowgrp'
										+'{\\html{$problemLeftAligned}}'
										+'{\\html{&nbsp;}}'
										+'{\\html{$labelCorrect}}'
										+'{\\html{&nbsp;}}'
										+'{\\ins{Now solve the expression:}}'
										+'{\\grp'
											+'{\\input{$answer}}'
										+'}'
									+'}'
								+'{well}',
						controls: {
							"checkAnswer": true,
							"help": true,
						}
					}]
                }]
            },
			rewriteSolve: {
                title: 'Subtracting Integers and Decimals',
				children: [{
					title: 'Main Answer',
					children: [{
						problem: '\\html{$problemStatement<br><br>'+
									'Choose the correct math translation for the expression:'+
									'}',
						answer: '\\btngrp'+
									'{\\rowgrp'+
										'{\\grp{\\btn{A}{$buttonValueA}{marg}}{\\html{\xA0$buttonLabelA}}}'+
										'{\\grp{\\btn{B}{$buttonValueB}{marg}}{\\html{\xA0$buttonLabelB}}}'+
										'{\\grp{\\btn{C}{$buttonValueC}{marg}}{\\html{\xA0$buttonLabelC}}}'+
										'{\\grp{\\btn{D}{$buttonValueD}{marg}}{\\html{\xA0$buttonLabelD}}}'+
									'}',
						controls: {
							"checkAnswer": true,
						    "help": "\\html{$helpStatement}"
                        }
					}, {
						problem: '\\html{$problemStatement}',
						answer: '\\wb'
									+'{\\rowgrp'
										+'{\\html{$labelCorrect}}'
										+'{\\html{&nbsp;}}'
										+'{\\ins{Now solve the expression:}}'
										+'{\\grp'
											+'{\\input{$answer}}'
										+'}'
									+'}'
								+'{well}',
						controls: {
							"checkAnswer": true,
							"help": true
						}
					}]
                }]
            },
			rewriteSolveDblNeg: {
                title: 'Subtracting Integers and Decimals',
				children: [{
					title: 'Main Answer',
					children: [{
						problem: '\\html{'+
                                        'Choose the correct math translation for the expression:'+
                                        '<br><br>$problemStatement'+
                                    '}',
						answer: '\\btngrp'+
									'{\\rowgrp'+
										'{\\grp{\\btn{A}{$buttonValueA}{marg}}{\\html{\xA0$buttonLabelA}}}'+
										'{\\grp{\\btn{B}{$buttonValueB}{marg}}{\\html{\xA0$buttonLabelB}}}'+
										'{\\grp{\\btn{C}{$buttonValueC}{marg}}{\\html{\xA0$buttonLabelC}}}'+
										'{\\grp{\\btn{D}{$buttonValueD}{marg}}{\\html{\xA0$buttonLabelD}}}'+
									'}',
						controls: {
							"checkAnswer": true,
						    "help": "\\html{$helpStatement}"
                        }
					}, {
						problem: '\\html{'+
                                        '$problemStatement'+
                                    '}',
						answer: '\\css'
									+'{\\btngrp'
										+'{\\rowgrp'
											+'{\\html{$labelCorrect}}'
											+'{\\html{&nbsp;}}'
											+'{\\ins{What is the expression without double negatives?}}'
											+'{\\grp{\\btn{A}{$buttonValueE}{marg}}{\\html{\xA0$buttonLabelE}}}'
											+'{\\grp{\\btn{B}{$buttonValueF}{marg}}{\\html{\xA0$buttonLabelF}}}'
											+'{\\grp{\\btn{C}{$buttonValueG}{marg}}{\\html{\xA0$buttonLabelG}}}'
											+'{\\grp{\\btn{D}{$buttonValueH}{marg}}{\\html{\xA0$buttonLabelH}}}'
										+'}'
									+'}'
								+'{well}',
						controls: {
							"checkAnswer": true,
							"help": '\\rowgrp'
										+'{\\html{$correctLeftAligned}}'
										+'{\\html{&nbsp;}}'
										+'{\\html{The minus sign in front of a parenthesis means to take the opposite sign of the negative $absNumber inside the parenthesis.}}'
										+'{\\html{&nbsp;}}'
										+'{\\html{The expression without double negatives is:}}'
										+'{\\html{&nbsp;}}'
										+'{\\css{\\html{$noDoubleNegs}}{blue-text}}',
						}
					}, {
						problem: '\\html{'+
                                        'Translate the following words into a math expression:'+
                                        '<br><br>$problemStatement'+
                                    '}',
						answer: '\\css'
									+'{\\rowgrp'
										+'{\\html{$correctLeftAligned}}'
										+'{\\html{&nbsp;}}'
										+'{\\html{$noDoubleNegs}}'
										+'{\\html{&nbsp;}}'
										+'{\\ins{Now solve the expression:}}'
										+'{\\grp'
											+'{\\input{$answer}}'
										+'}'
									+'}'
								+'{well}',
						controls: {
							"checkAnswer": true,
							"help": true
						}
					}]
                }]
            }
        },
        data = [
			//problem 1
			{ problemStatement: 'Solve:&nbsp; <span class=bigger>-</span>9 <span class=bigger>-</span> ( <span class=bigger>-</span>4 )', buttonValueA: 'F', buttonLabelA: '<span class=bigger>-</span>9 <span class=bigger>-</span> 4', buttonValueB: 'F', buttonLabelB: '<span class=bigger>&nbsp;</span>9 <span class=bigger>+</span> 4', buttonValueC: 'T', buttonLabelC: '<span class=bigger>-</span>9 <span class=bigger>+</span> 4', buttonValueD: 'F', buttonLabelD: '<span class=bigger>&nbsp;</span>9 <span class=bigger>-</span> 4',
			answer: '-5',
            labelCorrect: '<span class=bigger>-</span>9 <span class=bigger>+</span> 4',
			problemLeftAligned: '<span class=bigger>-</span>9 <span class=bigger>-</span> ( <span class=bigger>-</span>4 )',
			absNumber: '4',
			secondHelpText: '&nbsp;',
			template: 'rewriteDblNegSolve'},
			//problem 2
			{ problemStatement: 'Solve: &nbsp; 3 <span class=bigger>-</span> ( <span class=bigger>-</span>8 )', buttonValueA: 'F', buttonLabelA: '<span class=bigger>-</span>3 <span class=bigger>-</span> 8', buttonValueB: 'T', buttonLabelB: '<span class=bigger>&nbsp;</span>3 <span class=bigger>+</span> 8', buttonValueC: 'F', buttonLabelC: '<span class=bigger>-</span>3 <span class=bigger>-</span>8', buttonValueD: 'F', buttonLabelD: '<span class=bigger>&nbsp;</span>3 <span class=bigger>-</span>8',
			answer: '11',
            labelCorrect: '3 <span class=bigger>+</span> 8',
			problemLeftAligned: '3 <span class=bigger>-</span> ( <span class=bigger>-</span>8 )',
			absNumber: '8',
			secondHelpText: '&nbsp;',
			template: 'rewriteDblNegSolve'},
			//problem 3
			{ problemStatement: 'Solve: &nbsp; <span class=bigger>-</span>( <span class=bigger>-</span>40 ) <span class=bigger>-</span> 18', buttonValueA: 'T', buttonLabelA: '<span class=bigger>&nbsp;</span>40 <span class=bigger>-</span> 18', buttonValueB: 'F', buttonLabelB: '<span class=bigger>-</span>40 <span class=bigger>+</span> 18', buttonValueC: 'F', buttonLabelC: '<span class=bigger>-</span>40 <span class=bigger>-</span> 18', buttonValueD: 'F', buttonLabelD: '<span class=bigger>&nbsp;</span>40 <span class=bigger>+</span> 18',
			answer: '22',
            labelCorrect: '40 <span class=bigger>-</span> 18',
			problemLeftAligned: '<span class=bigger>-</span>( <span class=bigger>-</span>40 ) <span class=bigger>-</span> 18',
			absNumber: '40',
			secondHelpText: '&nbsp;',
			template: 'rewriteDblNegSolve'},
			//problem 4
			{ problemStatement: 'Solve: &nbsp; <span class=bigger>-</span>46 <span class=bigger>-</span> ( <span class=bigger>-</span>32 )', buttonValueA: 'F', buttonLabelA: '<span class=bigger>-</span>46 <span class=bigger>-</span> 32', buttonValueB: 'F', buttonLabelB: '<span class=bigger>&nbsp;</span>46 <span class=bigger>+</span> 32', buttonValueC: 'T', buttonLabelC: '<span class=bigger>-</span>46 <span class=bigger>+</span> 32', buttonValueD: 'F', buttonLabelD: '<span class=bigger>&nbsp;</span>46 <span class=bigger>-</span> 32',
			answer: '-14',
            labelCorrect: '<span class=bigger>-</span>46 <span class=bigger>+</span> 32',
			problemLeftAligned: '<span class=bigger>-</span>46 <span class=bigger>-</span> ( <span class=bigger>-</span>32 )',
			absNumber: '32',
			secondHelpText: '&nbsp;',
			template: 'rewriteDblNegSolve'},
			//problem 5
			{ problemStatement: 'Subtract 6 from 8',
			  helpStatement: 'In the phrase \\"subtract from\\", the value that comes <span style=\\"text-decoration:underline;\\">after</span> the word \\"from\\" is what we started with.  Here we started with:<br><br>8<br><br>We are then told to \\"subtract 6\\".  This is:<br><br><span class=bigger>-</span>6<br><br>The translated expression is:<br><br><span class=blue-text>8 <span class=bigger>-</span> 6</span>',
			  buttonValueA: 'F', buttonLabelA: '<span class=bigger>-</span>6 <span class=bigger>-</span> 8', buttonValueB: 'T', buttonLabelB: '<span class=bigger>&nbsp;</span>8 <span class=bigger>-</span> 6', buttonValueC: 'F', buttonLabelC: '<span class=bigger>-</span>8 <span class=bigger>-</span> 6', buttonValueD: 'F', buttonLabelD: '<span class=bigger>&nbsp;</span>6 <span class=bigger>-</span> 8',
			answer: '2',
            labelCorrect: '8 <span class=bigger>-</span> 6',
			template: 'rewriteSolve'},
			//problem 6
			{ problemStatement: 'Subtract <span class=bigger>-</span>12 from 30',
			  helpStatement: 'In the phrase \\"subtract from\\", the value that comes <span style=\\"text-decoration:underline;\\">after</span> the word \\"from\\" is what we started with.  Here we started with:<br><br>30<br><br>We are then told to \\"subtract <span class=bigger>-</span>12\\".  This is:<br><br><span class=bigger>-</span> ( <span class=bigger>-</span>12 )<br><br>The translated expression is:<br><br><span class=blue-text>30 <span class=bigger>-</span> ( <span class=bigger>-</span>12 )</span>',
			  buttonValueA: 'F', buttonLabelA: '<span class=bigger>-</span>12 <span class=bigger>-</span> 30', buttonValueB: 'T', buttonLabelB: '<span class=bigger>&nbsp;</span>30 <span class=bigger>-</span> ( <span class=bigger>-</span>12 )', buttonValueC: 'F', buttonLabelC: '<span class=bigger>&nbsp;</span>30 <span class=bigger>-</span> 12', buttonValueD: 'F', buttonLabelD: '<span class=bigger>-</span>12 <span class=bigger>+</span> 30', answer: '42',
            labelCorrect: '30 <span class=bigger>-</span> ( <span class=bigger>-</span>12 )',
			buttonValueE: 'F', buttonLabelE: '<span class=bigger>-</span>12 <span class=bigger>-</span> 30', buttonValueF: 'T', buttonLabelF: '<span class=bigger>&nbsp;</span>30 <span class=bigger>+</span> 12', buttonValueG: 'F', buttonLabelG: '<span class=bigger>&nbsp;</span>30 <span class=bigger>-</span> 12', buttonValueH: 'F', buttonLabelH: '<span class=bigger>-</span>12 <span class=bigger>+</span> 30',
			correctLeftAligned: '30 <span class=bigger>-</span> ( <span class=bigger>-</span>12 )',
			noDoubleNegs: '30 <span class=bigger>+</span> 12',
			absNumber: '12',
			template: 'rewriteSolveDblNeg'},
			//problem 7
			{ problemStatement: 'Find the sum of 6 and <span class=bigger>-</span>14',
			  helpStatement: 'The word \\"sum\\" tells us that the symbol connecting the number values is:<br><br><span class=bigger>+</span><br><br>Insert this between the two given values of 6 and <span class=bigger>-</span>14.<br><br>The translated expression is:<br><br><span class=blue-text>6 <span class=bigger>+</span> ( <span class=bigger>-</span>14 )</span><br><br>The second value ( <span class=bigger>-</span>14 ) is often put in a parenthesis when there are two symbols (in this case, the <span class=bigger>+</span> and the <span class=bigger>-</span>) that affect the same number value.  The expression:<br><br>6 <span class=bigger>+</span>( <span class=bigger>-</span>14 )<br><br>is the same as:<br><br>6 <span class=bigger>+</span> <span class=bigger>-</span>14<br><br>and:<br><br>6<span class=bigger>-</span>14',
			  buttonValueA: 'F', buttonLabelA: '<span class=bigger>-</span> 6 <span class=bigger>+</span> ( <span class=bigger>-</span>14 )', buttonValueB: 'T', buttonLabelB: '<span class=bigger>&nbsp;</span> 6 <span class=bigger>+</span> ( <span class=bigger>-</span>14 )', buttonValueC: 'F', buttonLabelC: '<span class=margin-narrow>&nbsp;</span>14 <span class=bigger>-</span> ( <span class=bigger>-</span>6 )', buttonValueD: 'F', buttonLabelD: '<span class=bigger>&nbsp;</span> 6 <span class=bigger>+</span> ( 14 )',
			answer: '-8',
            labelCorrect: '6 <span class=bigger>+</span> ( <span class=bigger>-</span>14 )',
			template: 'rewriteSolve'},
			//problem 8
			{ problemStatement: 'Find the difference of <span class=bigger>-</span>25 and 10',
			  helpStatement: 'The word \\"difference\\" tells us that the symbol connecting the number values is:<br><br><span class=bigger>-</span><br><br>Insert this between the two given values of <span class=bigger>-</span>25 and 10.<br><br>The translated expression is:<br><br><span class=blue-text><span class=bigger>-</span>25 <span class=bigger>-</span> 10</span>',
			  buttonValueA: 'F', buttonLabelA: '<span class=bigger>&nbsp;</span>25 <span class=bigger>-</span> 10', buttonValueB: 'F', buttonLabelB: '<span class=bigger>&nbsp;</span>10 <span class=bigger>-</span> 25', buttonValueC: 'T', buttonLabelC: '<span class=bigger>-</span>25 <span class=bigger>-</span> 10', buttonValueD: 'F', buttonLabelD: '<span class=bigger>-</span>25 <span class=bigger>-</span> (<span class=bigger>-</span>10)', answer: '-35',
            labelCorrect: '<span class=bigger>-</span>25 <span class=bigger>-</span> 10',
			template: 'rewriteSolve'},
			//problem 9
			{ problemStatement: 'Find the difference of 4 and 9',
			  helpStatement: 'The word \\"difference\\" tells us that the symbol connecting the number values is:<br><br><span class=bigger>-</span><br><br>Insert this between the two given values of 4 and 9.<br><br>The translated expression is:<br><br><span class=blue-text>4 <span class=bigger>-</span> 9</span>',
			  buttonValueA: 'F', buttonLabelA: '<span class=bigger>&nbsp;</span>4 <span class=bigger>-</span> ( <span class=bigger>-</span>9 )', buttonValueB: 'F', buttonLabelB: '<span class=bigger>&nbsp;</span>9 <span class=bigger>-</span> 4', buttonValueC: 'F', buttonLabelC: '<span class=bigger>&nbsp;</span>9 <span class=bigger>-</span> ( <span class=bigger>-</span>4 )', buttonValueD: 'T', buttonLabelD: '<span class=bigger>&nbsp;</span>4 <span class=bigger>-</span> 9', answer: '-5',
            labelCorrect: '4 <span class=bigger>-</span> 9',
			template: 'rewriteSolve'},
			//problem 10
			{ problemStatement: 'Find the difference of <span class=bigger>-</span>11 and <span class=bigger>-</span>5',
			  helpStatement: 'The word \\"difference\\" tells us that the symbol connecting the number values is:<br><br><span class=bigger>-</span><br><br>Insert this between the two given values of <span class=bigger>-</span>11 and <span class=bigger>-</span>5.<br><br>The translated expression is:<br><br><span class=blue-text><span class=bigger>-</span>11 <span class=bigger>-</span> ( <span class=bigger>-</span>5</span> )',
			  buttonValueA: 'F', buttonLabelA: '<span class=bigger>&nbsp;</span>11 <span class=bigger>-</span> ( <span class=bigger>-</span>5 )', buttonValueB: 'F', buttonLabelB: '<span class=bigger>-</span>11 <span class=bigger>-</span> 5', buttonValueC: 'T', buttonLabelC: '<span class=bigger>-</span>11 <span class=bigger>-</span> ( <span class=bigger>-</span>5 )', buttonValueD: 'F', buttonLabelD: '<span class=bigger>-</span>5 <span class=bigger>-</span> 11', answer: '-6',
            labelCorrect: '<span class=bigger>-</span>11 <span class=bigger>-</span> ( <span class=bigger>-</span>5 )',
			buttonValueE: 'T', buttonLabelE: '<span class=bigger>-</span>11 <span class=bigger>+</span> 5', buttonValueF: 'F', buttonLabelF: '<span class=bigger>&nbsp;</span>11 <span class=bigger>-</span> 5', buttonValueG: 'F', buttonLabelG: '<span class=bigger>-</span>5 <span class=bigger>+</span> 11', buttonValueH: 'F', buttonLabelH: '<span class=bigger>-</span>11 <span class=bigger>-</span> 5',
			correctLeftAligned: '<span class=bigger>-</span>11 <span class=bigger>-</span> ( <span class=bigger>-</span>5 )',
			noDoubleNegs: '<span class=bigger>-</span>11 <span class=bigger>+</span> 5',
			absNumber: '5',
			template: 'rewriteSolveDblNeg'},
			//problem 11
			{ problemStatement: 'Find the sum of -0.5 and -3.8',
			  helpStatement: 'The word \\"sum\\" tells us that the symbol connecting the number values is:<br><br><span class=bigger>+</span><br><br>Insert this between the two given values of <span class=bigger>-</span>0.5 and <span class=bigger>-</span>3.8.<br><br>The translated expression is:<br><br><span class=blue-text><span class=bigger>-</span>0.5 <span class=bigger>+</span> ( <span class=bigger>-</span>3.8 )</span><br><br>The second value ( <span class=bigger>-</span>3.8 ) is often put in a parenthesis when there are two symbols (in this case, the <span class=bigger>+</span> and the <span class=bigger>-</span>) that affect the same number value.  The expression:<br><br><span class=bigger>-</span>0.5 <span class=bigger>+</span>( <span class=bigger>-</span>3.8 )<br><br>is the same as:<br><br><span class=bigger>-</span>0.5 <span class=bigger>+</span> <span class=bigger>-</span>3.8<br><br>and:<br><br><span class=bigger>-</span>0.5 <span class=bigger>-</span>3.8',
			  buttonValueA: 'T', buttonLabelA: '<span class=bigger>-</span>0.5 <span class=bigger>+</span> ( <span class=bigger>-</span>3.8 )', buttonValueB: 'F', buttonLabelB: '<span class=bigger>&nbsp;</span>0.5 <span class=bigger>+</span> ( <span class=bigger>-</span>3.8 )', buttonValueC: 'F', buttonLabelC: '<span class=bigger>-</span>3.8 <span class=bigger>-</span> ( <span class=bigger>-</span>0.5 )', buttonValueD: 'F', buttonLabelD: '<span class=bigger>&nbsp;</span>3.8 <span class=bigger>+</span> ( 0.5 )', answer: '-4.3',
            labelCorrect: '<span class=bigger>-</span>0.5 <span class=bigger>+</span> ( <span class=bigger>-</span>3.8 )',
			template: 'rewriteSolve'},
			//problem 12
			{ problemStatement: 'Find the difference of 6.7 and <span class=bigger>-</span>12.1',
			  helpStatement: 'The word \\"difference\\" tells us that the symbol connecting the number values is:<br><br><span class=bigger>-</span><br><br>Insert this between the two given values of 6.7 and <span class=bigger>-</span>12.1.<br><br>The translated expression is:<br><br><span class=blue-text>6.7 <span class=bigger>-</span> ( <span class=bigger>-</span>12.1</span> )',
			  buttonValueA: 'F', buttonLabelA: '<span class=bigger>&nbsp;</span>6.7 <span class=bigger>-</span> 12.1', buttonValueB: 'F', buttonLabelB: '<span class=bigger>-</span>12.1 <span class=bigger>-</span> 6.7', buttonValueC: 'F', buttonLabelC: '<span class=bigger>-</span>6.7 <span class=bigger>-</span> ( <span class=bigger>-</span>12.1 )', buttonValueD: 'T', buttonLabelD: '<span class=bigger>&nbsp;</span>6.7 <span class=bigger>-</span> ( <span class=bigger>-</span>12.1 )', answer: '18.8',
            labelCorrect: '6.7 <span class=bigger>-</span> ( <span class=bigger>-</span>12.1 )',
			buttonValueE: 'F', buttonLabelE: '<span class=bigger>-</span>6.7 <span class=bigger>-</span> 12.1', buttonValueF: 'T', buttonLabelF: '<span class=bigger>&nbsp;</span>6.7 <span class=bigger>+</span> 12.1', buttonValueG: 'F', buttonLabelG: '<span class=bigger>-</span>6.7 <span class=bigger>+</span> 12.1', buttonValueH: 'F', buttonLabelH: '<span class=bigger>-</span>12.1 <span class=bigger>+</span> 6.7',
			correctLeftAligned: '6.7 <span class=bigger>-</span> ( <span class=bigger>-</span>12.1 )',
			noDoubleNegs: '6.7 <span class=bigger>+</span> 12.1',
			absNumber: '12.1',
			template: 'rewriteSolveDblNeg'},
			//problem 13
			{ problemStatement: 'Subtract 22.4 from 17.3',
			  helpStatement: 'In the phrase \\"subtract from\\", the value that comes <span style=\\"text-decoration:underline;\\">after</span> the word \\"from\\" is what we started with.  Here we started with:<br><br>17.3<br><br>We are then told to \\"subtract 22.4\\".  This is:<br><br><span class=bigger>-</span>22.4<br><br>The translated expression is:<br><br><span class=blue-text>17.3 <span class=bigger>-</span> 22.4</span>',
			  buttonValueA: 'F', buttonLabelA: '<span class=bigger>-</span>22.4 <span class=bigger>-</span> 17.3', buttonValueB: 'F', buttonLabelB: '<span class=bigger>&nbsp;</span>22.4 <span class=bigger>-</span> 17.3', buttonValueC: 'T', buttonLabelC: '<span class=bigger>&nbsp;</span>17.3 <span class=bigger>-</span> 22.4', buttonValueD: 'F', buttonLabelD: '<span class=bigger>&nbsp;</span>17.3 <span class=bigger>-</span> ( <span class=bigger>-</span>22.4 )', answer: '-5.1',
            labelCorrect: '17.3 <span class=bigger>-</span> 22.4',
			template: 'rewriteSolve'},
			//problem 14
			{ problemStatement: '<span class=bigger>-</span>4 <span class=bigger>+</span> 7 <span class=bigger>-</span> 9', answer: '-6',
			helpStatement: 'The 4 and the 9 are both negative. Together, they equal:<br><br><span class=bigger>-</span>13<br><br>The expression becomes:<br><br><span class=bigger>-</span>13 <span class=bigger>+</span> 7<br><br>The solution is:<br><br><span class=blue-text><span class=bigger>-</span>6</span>',
			template: 'main'},
			//problem 15
			{ problemStatement: '<span class=bigger>-</span>22 <span class=bigger>-</span> ( <span class=bigger>-</span>6 ) <span class=bigger>+</span> 17',
			  buttonValueA: 'F', buttonLabelA: '<span class=bigger>-</span>22 <span class=bigger>-</span> 6 <span class=bigger>+</span> 17', buttonValueB: 'F', buttonLabelB: '<span class=bigger>&nbsp;</span>22 <span class=bigger>+</span>6 <span class=bigger>+</span> 17', buttonValueC: 'T', buttonLabelC: '<span class=bigger>-</span>22 <span class=bigger>+</span> 6 <span class=bigger>+</span> 17', buttonValueD: 'F', buttonLabelD: '<span class=bigger>&nbsp;</span>22 <span class=bigger>+</span> 6 <span class=bigger>-</span> 17', answer: '1',
            labelCorrect: '<span class=bigger>-</span>22 <span class=bigger>+</span> 6 <span class=bigger>+</span> 17',
			problemLeftAligned: '<span class=bigger>-</span>22 <span class=bigger>-</span> ( <span class=bigger>-</span>6 ) <span class=bigger>+</span> 17',
			absNumber: '6',
			secondHelpText: '&nbsp;',
			template: 'rewriteDblNegSolve'},
			//problem 16
			{ problemStatement: '<span class=bigger>-</span>( <span class=bigger>-</span>38 ) <span class=bigger>-</span> 14 <span class=bigger>-</span> ( <span class=bigger>-</span>25 )',
			  buttonValueA: 'F', buttonLabelA: '<span class=bigger>&nbsp;</span>38 <span class=bigger>+</span> 14 <span class=bigger>-</span> 25', buttonValueB: 'F', buttonLabelB: '<span class=bigger>-</span>38 <span class=bigger>-</span> 14 <span class=bigger>-</span> 25', buttonValueC: 'F', buttonLabelC: '<span class=bigger>-</span>38 <span class=bigger>-</span> 14 <span class=bigger>+</span> 25', buttonValueD: 'T', buttonLabelD: '<span class=bigger>&nbsp;</span>38 <span class=bigger>-</span> 14 <span class=bigger>+</span> 25', answer: '49',
            labelCorrect: '<span class=bigger>&nbsp;</span>38 <span class=bigger>-</span> 14 <span class=bigger>+</span> 25',
			problemLeftAligned: '<span class=bigger>-</span>( <span class=bigger>-</span>38 ) <span class=bigger>-</span> 14 <span class=bigger>-</span> ( <span class=bigger>-</span>25 )',
			absNumber: '38',
			secondHelpText: '<br>Likewise, the minus sign in front of the second parenthesis means to take the opposite sign of the negative 25.<br><br>',
			template: 'rewriteDblNegSolve'},
			//problem 17
			{ problemStatement: '<span class=bigger>-</span>8 <span class=bigger>+</span> ( <span class=bigger>-</span>7 ) <span class=bigger>-</span> 9 <span class=bigger>-</span> ( 10 )', answer: '-34',
			helpStatement: 'The four values are all negative. Together, they equal:<br><br><span class=blue-text><span class=bigger>-</span>34</span>',
			template: 'main'},
			//problem 18
			{ problemStatement: 'Choose the expression that is rewritten correctly without any double negatives:<br><br><span class=bigger>-</span>( <span class=bigger>-</span>( <span class=bigger>-</span>5.2 ) ) <span class=bigger>-</span> ( <span class=bigger>-</span>3.1 ) <span class=bigger>+</span> ( <span class=bigger>-</span>4 )',
			  helpStatement: '<span class=bigger>-</span>( <span class=bigger>-</span>( <span class=bigger>-</span>5.2 ) ) <span class=bigger>-</span> ( <span class=bigger>-</span>3.1 ) <span class=bigger>+</span> ( <span class=bigger>-</span>4 )<br><br>The minus sign in front of a parenthesis means to take the opposite sign of the negative number inside the parenthesis, in this case the opposite sign of the negative 5.2 and the opposite sign of the negative 3.1.<br><br>The expression without double negatives is:<br><br><span class=bigger>-</span> 5.2 <span class=bigger>+</span> 3.1 <span class=bigger>-</span> 4',
			  buttonValueA: 'F', buttonLabelA: '<span class=bigger>&nbsp;</span>5.2 <span class=bigger>+</span> 3.1 <span class=bigger>-</span> 4', buttonValueB: 'F', buttonLabelB: '<span class=bigger>-</span>5.2 <span class=bigger>-</span> 3.1 <span class=bigger>-</span> 4', buttonValueC: 'T', buttonLabelC: '<span class=bigger>-</span>5.2 <span class=bigger>+</span> 3.1 <span class=bigger>-</span> 4', buttonValueD: 'F', buttonLabelD: '<span class=bigger>&nbsp;</span>5.2 <span class=bigger>+</span> 3.1 <span class=bigger>-</span> 4', answer: '-6.1',
            labelCorrect: '<span class=bigger>-</span>5.2 <span class=bigger>+</span> 3.1 <span class=bigger>-</span> 4',
			template: 'rewriteSolve'}
        ];

	return dataUtils.build(desc, template, data);
}]);
