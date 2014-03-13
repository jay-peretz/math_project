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
						    "help": true
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
						answer: '\\rowgrp'+
                                    '{\\grp{\\btn{A}{$buttonValueA}{marg}}{\\html{\xA0$buttonLabelA}}}'+
                                    '{\\grp{\\btn{B}{$buttonValueB}{marg}}{\\html{\xA0$buttonLabelB}}}'+
                                    '{\\grp{\\btn{C}{$buttonValueC}{marg}}{\\html{\xA0$buttonLabelC}}}'+
                                    '{\\grp{\\btn{D}{$buttonValueD}{marg}}{\\html{\xA0$buttonLabelD}}}',
						controls: {
							"checkAnswer": true,
						    "help": '\\rowgrp'
										+'{\\html{$problemLeftAligned}}'
										+'{\\html{&nbsp;}}'
										+'{\\html{The minus sign in front of a parenthesis means to take the opposite sign of the negative $absNumber inside the parenthesis.}}'
										+'{\\html{&nbsp;}}'
										+'{\\html{The expression without double negatives is:}}'
										+'{\\html{&nbsp;}}'
										+'{\\css{\\html{$labelCorrect}}{blue-text}}',
                        }
					}, {
						problem: '\\html{'+
                                        'Translate the following words into a math expression:'+
                                        '<br><br>$problemStatement'+
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
						problem: '\\html{'+
                                        'Choose the correct math translation for the expression:'+
                                        '<br><br>$problemStatement'+
                                    '}',
						answer: '\\rowgrp'+
                                    '{\\grp{\\btn{A}{$buttonValueA}{marg}}{\\html{\xA0$buttonLabelA}}}'+
                                    '{\\grp{\\btn{B}{$buttonValueB}{marg}}{\\html{\xA0$buttonLabelB}}}'+
                                    '{\\grp{\\btn{C}{$buttonValueC}{marg}}{\\html{\xA0$buttonLabelC}}}'+
                                    '{\\grp{\\btn{D}{$buttonValueD}{marg}}{\\html{\xA0$buttonLabelD}}}',
						controls: {
							"checkAnswer": true,
						    "help": true
                        }
					}, {
						problem: '\\html{'+
                                        'Translate the following words into a math expression:'+
                                        '<br><br>$problemStatement'+
                                    '}',
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
						answer: '\\rowgrp'
                                    +'{\\grp{\\btn{A}{$buttonValueA}{marg}}{\\html{\xA0$buttonLabelA}}}'
                                    +'{\\grp{\\btn{B}{$buttonValueB}{marg}}{\\html{\xA0$buttonLabelB}}}'
                                    +'{\\grp{\\btn{C}{$buttonValueC}{marg}}{\\html{\xA0$buttonLabelC}}}'
                                    +'{\\grp{\\btn{D}{$buttonValueD}{marg}}{\\html{\xA0$buttonLabelD}}}',
						controls: {
							"checkAnswer": true,
						    "help": true
                        }
					}, {
						problem: '\\html{'+
                                        'Translate the following words into a math expression:'+
                                        '<br><br>$problemStatement'+
                                    '}',
						answer: '\\css'
									+'{\\rowgrp'
										+'{\\html{$labelCorrect}}'
										+'{\\html{&nbsp;}}'
										+'{\\ins{What is the expression without double negatives?}}'
										+'{\\grp{\\btn{A}{$buttonValueE}{marg}}{\\html{\xA0$buttonLabelE}}}'
										+'{\\grp{\\btn{B}{$buttonValueF}{marg}}{\\html{\xA0$buttonLabelF}}}'
										+'{\\grp{\\btn{C}{$buttonValueG}{marg}}{\\html{\xA0$buttonLabelG}}}'
										+'{\\grp{\\btn{D}{$buttonValueH}{marg}}{\\html{\xA0$buttonLabelH}}}'
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
			template: 'rewriteDblNegSolve'},
			//problem 2
			{ problemStatement: 'Solve: &nbsp; 3 <span class=bigger>-</span> ( <span class=bigger>-</span>8 )', buttonValueA: 'F', buttonLabelA: '<span class=bigger>-</span>3 <span class=bigger>-</span> 8', buttonValueB: 'T', buttonLabelB: '<span class=bigger>&nbsp;</span>3 <span class=bigger>+</span> 8', buttonValueC: 'F', buttonLabelC: '<span class=bigger>-</span>3 <span class=bigger>-</span>8', buttonValueD: 'F', buttonLabelD: '<span class=bigger>&nbsp;</span>3 <span class=bigger>-</span>8',
			answer: '11',
            labelCorrect: '3 <span class=bigger>+</span> 8',
			problemLeftAligned: '3 <span class=bigger>-</span> ( <span class=bigger>-</span>8 )',
			absNumber: '8',
			template: 'rewriteDblNegSolve'},
			//problem 3
			{ problemStatement: 'Solve: &nbsp; <span class=bigger>-</span>( <span class=bigger>-</span>40 ) <span class=bigger>-</span> 18', buttonValueA: 'T', buttonLabelA: '<span class=bigger>&nbsp;</span>40 <span class=bigger>-</span> 18', buttonValueB: 'F', buttonLabelB: '<span class=bigger>-</span>40 <span class=bigger>+</span> 18', buttonValueC: 'F', buttonLabelC: '<span class=bigger>-</span>40 <span class=bigger>-</span> 18', buttonValueD: 'F', buttonLabelD: '<span class=bigger>&nbsp;</span>40 <span class=bigger>+</span> 18',
			answer: '22',
            labelCorrect: '40 <span class=bigger>-</span> 18',
			problemLeftAligned: '<span class=bigger>-</span>( <span class=bigger>-</span>40 ) <span class=bigger>-</span> 18',
			absNumber: '40',
			template: 'rewriteDblNegSolve'},
			//problem 4
			{ problemStatement: 'Solve: &nbsp; <span class=bigger>-</span>46 <span class=bigger>-</span> ( <span class=bigger>-</span>32 )', buttonValueA: 'F', buttonLabelA: '<span class=bigger>-</span>46 <span class=bigger>-</span> 32', buttonValueB: 'F', buttonLabelB: '<span class=bigger>&nbsp;</span>46 <span class=bigger>+</span> 32', buttonValueC: 'T', buttonLabelC: '<span class=bigger>-</span>46 <span class=bigger>+</span> 32', buttonValueD: 'F', buttonLabelD: '<span class=bigger>&nbsp;</span>46 <span class=bigger>-</span> 32',
			answer: '-14',
            labelCorrect: '<span class=bigger>-</span>46 <span class=bigger>+</span> 32',
			problemLeftAligned: '<span class=bigger>-</span>46 <span class=bigger>-</span> ( <span class=bigger>-</span>32 )',
			absNumber: '32',
			template: 'rewriteDblNegSolve'},
			//problem 5
			{ problemStatement: 'Subtract 6 from 8', buttonValueA: 'F', buttonLabelA: '<span class=bigger>-</span>6 <span class=bigger>-</span> 8', buttonValueB: 'T', buttonLabelB: '<span class=bigger>&nbsp;</span>8 <span class=bigger>-</span> 6', buttonValueC: 'F', buttonLabelC: '<span class=bigger>-</span>8 <span class=bigger>-</span> 6', buttonValueD: 'F', buttonLabelD: '<span class=bigger>&nbsp;</span>6 <span class=bigger>-</span> 8',
			answer: '2',
            labelCorrect: '8 <span class=bigger>-</span> 6',
			template: 'rewriteSolve'},
			//problem 6
			{ problemStatement: 'Subtract <span class=bigger>-</span>12 from 30', buttonValueA: 'F', buttonLabelA: '<span class=bigger>-</span>12 <span class=bigger>-</span> 30', buttonValueB: 'T', buttonLabelB: '<span class=bigger>&nbsp;</span>30 <span class=bigger>-</span> ( <span class=bigger>-</span>12 )', buttonValueC: 'F', buttonLabelC: '<span class=bigger>&nbsp;</span>30 <span class=bigger>-</span> 12', buttonValueD: 'F', buttonLabelD: '<span class=bigger>-</span>12 <span class=bigger>+</span> 30', answer: '42',
            labelCorrect: '30 <span class=bigger>-</span> ( <span class=bigger>-</span>12 )',
			buttonValueE: 'F', buttonLabelE: '<span class=bigger>-</span>12 <span class=bigger>-</span> 30', buttonValueF: 'T', buttonLabelF: '<span class=bigger>&nbsp;</span>30 <span class=bigger>+</span> 12', buttonValueG: 'F', buttonLabelG: '<span class=bigger>&nbsp;</span>30 <span class=bigger>-</span> 12', buttonValueH: 'F', buttonLabelH: '<span class=bigger>-</span>12 <span class=bigger>+</span> 30',
			correctLeftAligned: '30 <span class=bigger>-</span> ( <span class=bigger>-</span>12 )',
			noDoubleNegs: '30 <span class=bigger>+</span> 12',
			absNumber: '12',
			template: 'rewriteSolveDblNeg'},
			//problem 7
			{ problemStatement: 'Find the sum of 6 and -14', buttonValueA: 'F', buttonLabelA: '<span class=bigger>-</span> 6 <span class=bigger>+</span> ( <span class=bigger>-</span>14 )', buttonValueB: 'T', buttonLabelB: '<span class=bigger>&nbsp;</span> 6 <span class=bigger>+</span> ( <span class=bigger>-</span>14 )', buttonValueC: 'F', buttonLabelC: '<span class=margin-narrow>&nbsp;</span>14 <span class=bigger>-</span> ( <span class=bigger>-</span>6 )', buttonValueD: 'F', buttonLabelD: '<span class=bigger>&nbsp;</span> 6 <span class=bigger>+</span> ( 14 )',
			answer: '-8',
            labelCorrect: '6 <span class=bigger>+</span> ( <span class=bigger>-</span>14 )',
			template: 'rewriteSolve'},
			//problem 8
			{ problemStatement: 'Find the difference of <span class=bigger>-</span>25 and 10', buttonValueA: 'F', buttonLabelA: '<span class=bigger>&nbsp;</span>25 <span class=bigger>-</span> 10', buttonValueB: 'F', buttonLabelB: '<span class=bigger>&nbsp;</span>10 <span class=bigger>-</span> 25', buttonValueC: 'T', buttonLabelC: '<span class=bigger>-</span>25 <span class=bigger>-</span> 10', buttonValueD: 'F', buttonLabelD: '<span class=bigger>-</span>25 <span class=bigger>-</span> (<span class=bigger>-</span>10)', answer: '-35',
            labelCorrect: '<span class=bigger>-</span>25 <span class=bigger>-</span> 10',
			template: 'rewriteSolve'},
			//problem 9
			{ problemStatement: 'Find the difference of 4 and 9', buttonValueA: 'F', buttonLabelA: '<span class=bigger>&nbsp;</span>4 <span class=bigger>-</span> ( <span class=bigger>-</span>9 )', buttonValueB: 'F', buttonLabelB: '<span class=bigger>&nbsp;</span>9 <span class=bigger>-</span> 4', buttonValueC: 'F', buttonLabelC: '<span class=bigger>&nbsp;</span>9 <span class=bigger>-</span> ( <span class=bigger>-</span>4 )', buttonValueD: 'T', buttonLabelD: '<span class=bigger>&nbsp;</span>4 <span class=bigger>-</span> 9', answer: '-5',
            labelCorrect: '4 <span class=bigger>-</span> 9',
			template: 'rewriteSolve'},
			//problem 10
			{ problemStatement: 'Find the difference of -11 and -5', buttonValueA: 'F', buttonLabelA: '<span class=bigger>&nbsp;</span>11 <span class=bigger>-</span> ( <span class=bigger>-</span>5 )', buttonValueB: 'F', buttonLabelB: '<span class=bigger>-</span>11 <span class=bigger>-</span> 5', buttonValueC: 'T', buttonLabelC: '<span class=bigger>-</span>11 <span class=bigger>-</span> ( <span class=bigger>-</span>5 )', buttonValueD: 'F', buttonLabelD: '<span class=bigger>-</span>5 <span class=bigger>-</span> 11', answer: '-6',
            labelCorrect: '<span class=bigger>-</span>11 <span class=bigger>-</span> ( <span class=bigger>-</span>5 )',
			buttonValueE: 'T', buttonLabelE: '<span class=bigger>-</span>11 <span class=bigger>+</span> 5', buttonValueF: 'F', buttonLabelF: '<span class=bigger>&nbsp;</span>11 <span class=bigger>-</span> 5', buttonValueG: 'F', buttonLabelG: '<span class=bigger>-</span>5 <span class=bigger>+</span> 11', buttonValueH: 'F', buttonLabelH: '<span class=bigger>-</span>11 <span class=bigger>-</span> 5',
			correctLeftAligned: '<span class=bigger>-</span>11 <span class=bigger>-</span> ( <span class=bigger>-</span>5 )',
			noDoubleNegs: '<span class=bigger>-</span>11 <span class=bigger>+</span> 5',
			absNumber: '5',
			template: 'rewriteSolveDblNeg'},
			//problem 11
			{ problemStatement: 'Find the sum of -0.5 and -3.8', buttonValueA: 'T', buttonLabelA: '<span class=bigger>-</span>0.5 <span class=bigger>+</span> ( <span class=bigger>-</span>3.8 )', buttonValueB: 'F', buttonLabelB: '<span class=bigger>&nbsp;</span>0.5 <span class=bigger>+</span> ( <span class=bigger>-</span>3.8 )', buttonValueC: 'F', buttonLabelC: '<span class=bigger>-</span>3.8 <span class=bigger>-</span> ( <span class=bigger>-</span>0.5 )', buttonValueD: 'F', buttonLabelD: '<span class=bigger>&nbsp;</span>3.8 <span class=bigger>+</span> ( 0.5 )', answer: '-4.3',
            labelCorrect: '<span class=bigger>-</span>0.5 <span class=bigger>+</span> ( <span class=bigger>-</span>3.8 )',
			template: 'rewriteSolve'},
			//problem 12
			{ problemStatement: 'Find the difference of 6.7 and -12.1', buttonValueA: 'F', buttonLabelA: '<span class=bigger>&nbsp;</span>6.7 <span class=bigger>-</span> 12.1', buttonValueB: 'F', buttonLabelB: '<span class=bigger>-</span>12.1 <span class=bigger>-</span> 6.7', buttonValueC: 'F', buttonLabelC: '<span class=bigger>-</span>6.7 <span class=bigger>-</span> ( <span class=bigger>-</span>12.1 )', buttonValueD: 'T', buttonLabelD: '<span class=bigger>&nbsp;</span>6.7 <span class=bigger>-</span> ( <span class=bigger>-</span>12.1 )', answer: '18.8',
            labelCorrect: '6.7 <span class=bigger>-</span> ( <span class=bigger>-</span>12.1 )',
			buttonValueE: 'F', buttonLabelE: '<span class=bigger>-</span>6.7 <span class=bigger>-</span> 12.1', buttonValueF: 'T', buttonLabelF: '<span class=bigger>&nbsp;</span>6.7 <span class=bigger>+</span> 12.1', buttonValueG: 'F', buttonLabelG: '<span class=bigger>-</span>6.7 <span class=bigger>+</span> 12.1', buttonValueH: 'F', buttonLabelH: '<span class=bigger>-</span>12.1 <span class=bigger>+</span> 6.7',
			correctLeftAligned: '6.7 <span class=bigger>-</span> ( <span class=bigger>-</span>12.1 )',
			noDoubleNegs: '6.7 <span class=bigger>+</span> 12.1',
			absNumber: '12.1',
			template: 'rewriteSolveDblNeg'},
			//problem 13
			{ problemStatement: 'Subtract 22.4 from 17.3', buttonValueA: 'F', buttonLabelA: '<span class=bigger>-</span>22.4 <span class=bigger>-</span> 17.3', buttonValueB: 'F', buttonLabelB: '<span class=bigger>&nbsp;</span>22.4 <span class=bigger>-</span> 17.3', buttonValueC: 'T', buttonLabelC: '<span class=bigger>&nbsp;</span>17.3 <span class=bigger>-</span> 22.4', buttonValueD: 'F', buttonLabelD: '<span class=bigger>&nbsp;</span>17.3 <span class=bigger>-</span> ( <span class=bigger>-</span>22.4 )', answer: '-5.1',
            labelCorrect: '17.3 <span class=bigger>-</span> 22.4',
			template: 'rewriteSolve'},
			//problem 14
			{ problemStatement: '<span class=bigger>-</span>4 <span class=bigger>+</span> 7 <span class=bigger>-</span> 9', answer: '-6',
			template: 'main'},
			//problem 15
			{ problemStatement: '<span class=bigger>-</span>22 <span class=bigger>-</span> ( <span class=bigger>-</span>6 ) <span class=bigger>+</span> 17', buttonValueA: 'F', buttonLabelA: '<span class=bigger>-</span>22 <span class=bigger>-</span> 6 <span class=bigger>+</span> 17', buttonValueB: 'F', buttonLabelB: '<span class=bigger>&nbsp;</span>22 <span class=bigger>+</span>6 <span class=bigger>+</span> 17', buttonValueC: 'T', buttonLabelC: '<span class=bigger>-</span>22 <span class=bigger>+</span> 6 <span class=bigger>+</span> 17', buttonValueD: 'F', buttonLabelD: '<span class=bigger>&nbsp;</span>22 <span class=bigger>+</span> 6 <span class=bigger>-</span> 17', answer: '1',
            labelCorrect: '<span class=bigger>-</span>22 <span class=bigger>+</span> 6 <span class=bigger>+</span> 17',
			template: 'rewriteSolve'},
			//problem 16
			{ problemStatement: '<span class=bigger>-</span>( <span class=bigger>-</span>38 ) <span class=bigger>-</span> 14 <span class=bigger>-</span> ( <span class=bigger>-</span>25 )', buttonValueA: 'F', buttonLabelA: '<span class=bigger>&nbsp;</span>38 <span class=bigger>+</span> 14 <span class=bigger>-</span> 25', buttonValueB: 'F', buttonLabelB: '<span class=bigger>-</span>38 <span class=bigger>-</span> 14 <span class=bigger>-</span> 25', buttonValueC: 'F', buttonLabelC: '<span class=bigger>-</span>38 <span class=bigger>-</span> 14 <span class=bigger>+</span> 25', buttonValueD: 'T', buttonLabelD: '<span class=bigger>&nbsp;</span>38 <span class=bigger>-</span> 14 <span class=bigger>+</span> 25', answer: '49',
            labelCorrect: '<span class=bigger>&nbsp;</span>38 <span class=bigger>-</span> 14 <span class=bigger>+</span> 25',
			template: 'rewriteSolve'},
			//problem 17
			{ problemStatement: '<span class=bigger>-</span>8 <span class=bigger>+</span> ( <span class=bigger>-</span>7 ) <span class=bigger>-</span> 9 <span class=bigger>-</span> ( 10 )', answer: '-34',
			template: 'main'},
			//problem 18
			{ problemStatement: '<span class=bigger>-</span>( <span class=bigger>-</span>( <span class=bigger>-</span>5.2 ) ) <span class=bigger>-</span> ( <span class=bigger>-</span>3.1 ) <span class=bigger>+</span> ( <span class=bigger>-</span>4 )', buttonValueA: 'F', buttonLabelA: '<span class=bigger>&nbsp;</span>5.2 <span class=bigger>+</span> 3.1 <span class=bigger>-</span> 4', buttonValueB: 'F', buttonLabelB: '<span class=bigger>-</span>5.2 <span class=bigger>-</span> 3.1 <span class=bigger>-</span> 4', buttonValueC: 'T', buttonLabelC: '<span class=bigger>-</span>5.2 <span class=bigger>+</span> 3.1 <span class=bigger>-</span> 4', buttonValueD: 'F', buttonLabelD: '<span class=bigger>&nbsp;</span>5.2 <span class=bigger>+</span> 3.1 <span class=bigger>-</span> 4', answer: '-6.1',
            labelCorrect: '<span class=bigger>-</span>5.2 <span class=bigger>+</span> 3.1 <span class=bigger>-</span> 4',
			template: 'rewriteSolve'}
        ];

	return dataUtils.build(desc, template, data);
}]);
