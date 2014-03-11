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
                                        'Evaluate:'+
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
			{ problemStatement: 'Subtract 6 from 8', buttonValueA: 'F', buttonLabelA: '<span class=bigger>-</span> 6 <span class=bigger>-</span> 8', buttonValueB: 'T', buttonLabelB: '<span class=bigger>&nbsp;</span> 8 <span class=bigger>-</span> 6', buttonValueC: 'F', buttonLabelC: '<span class=bigger>-</span> 8 <span class=bigger>-</span> 6', buttonValueD: 'F', buttonLabelD: '<span class=bigger>&nbsp;</span> 6 <span class=bigger>-</span> 8',
			answer: '2',
            labelCorrect: '<span class=bigger>&nbsp;</span> 8 <span class=bigger>-</span> 6',
			template: 'rewriteSolve'},
			//problem 6
			{ problemStatement: 'Subtract <span class=bigger>-</span>12 from 30', buttonValueA: 'F', buttonLabelA: '<span class=bigger>-</span>12 <span class=bigger>-</span> 30', buttonValueB: 'T', buttonLabelB: '<span class=bigger>&nbsp;</span>30 <span class=bigger>-</span> ( <span class=bigger>-</span>12 )', buttonValueC: 'F', buttonLabelC: '<span class=bigger>&nbsp;</span>30 <span class=bigger>-</span> 12', buttonValueD: 'F', buttonLabelD: '<span class=bigger>-</span>12 + 30', answer: '42',
            labelCorrect: '<span class=bigger>&nbsp;</span>30 <span class=bigger>-</span> ( <span class=bigger>-</span>12 )',
			buttonValueE: 'F', buttonLabelE: '<span class=bigger>-</span>12 <span class=bigger>-</span> 30', buttonValueF: 'T', buttonLabelF: '<span class=bigger>&nbsp;</span>30 <span class=bigger>+</span> 12', buttonValueG: 'F', buttonLabelG: '<span class=bigger>&nbsp;</span>30 <span class=bigger>-</span> 12', buttonValueD: 'H', buttonLabelH: '<span class=bigger>-</span>12 + 30',
			correctLeftAligned: '30 <span class=bigger>-</span> ( <span class=bigger>-</span>12 )',
			noDoubleNegs: '30 <span class=bigger>+</span> 12',
			absNumber: '12',
			template: 'rewriteSolveDblNeg'},
			//problem 8
			{ problemStatement: 'Find the difference of <span class=bigger>-</span>25 and 10', buttonValueA: 'F', buttonLabelA: '<span class=bigger>&nbsp;</span>25 <span class=bigger>-</span> 10', buttonValueB: 'F', buttonLabelB: '<span class=bigger>&nbsp;</span>10 <span class=bigger>-</span> 25', buttonValueC: 'T', buttonLabelC: '<span class=bigger>-</span>25 <span class=bigger>-</span> 10', buttonValueD: 'F', buttonLabelD: '<span class=bigger>-</span>25 <span class=bigger>-</span> (<span class=bigger>-</span>10)', answer: '-35',
            labelCorrect: '<span class=bigger>-</span>25 <span class=bigger>-</span> 10',
			template: 'rewriteSolve'}
        ];

	return dataUtils.build(desc, template, data);
}]);
