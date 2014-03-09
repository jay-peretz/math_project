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
                                        'Translate the following words into a math expression:'+
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
			doubleNegative: {
                title: 'Subtracting Integers and Decimals',
				children: [{
					title: 'Main Answer',
					children: [{
						problem: '\\html{'+
                                        'Translate the following words into a math expression:'+
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
			{ problemStatement: 'Subtract 6 from 8', buttonValueA: 'F', buttonLabelA: '<span class=bigger>-</span> 6 <span class=bigger>-</span> 8', buttonValueB: 'T', buttonLabelB: '<span class=bigger>&nbsp;</span> 8 <span class=bigger>-</span> 6', buttonValueC: 'F', buttonLabelC: '<span class=bigger>-</span> 8 <span class=bigger>-</span> 6', buttonValueD: 'F', buttonLabelD: '<span class=bigger>&nbsp;</span> 6 <span class=bigger>-</span> 8',
			answer: '2',
            labelCorrect: '<span class=bigger>&nbsp;</span> 8 <span class=bigger>-</span> 6',
			template: 'main'},
			//problem 2
			{ problemStatement: 'Subtract <span class=bigger>-</span>12 from 30', buttonValueA: 'F', buttonLabelA: '<span class=bigger>-</span>12 <span class=bigger>-</span> 30', buttonValueB: 'T', buttonLabelB: '<span class=bigger>&nbsp;</span>30 <span class=bigger>-</span> ( <span class=bigger>-</span>12 )', buttonValueC: 'F', buttonLabelC: '<span class=bigger>&nbsp;</span>30 <span class=bigger>-</span> 12', buttonValueD: 'F', buttonLabelD: '<span class=bigger>-</span>12 + 30', answer: '42',
            labelCorrect: '<span class=bigger>&nbsp;</span>30 <span class=bigger>-</span> ( <span class=bigger>-</span>12 )',
			buttonValueE: 'F', buttonLabelE: '<span class=bigger>-</span>12 <span class=bigger>-</span> 30', buttonValueF: 'T', buttonLabelF: '<span class=bigger>&nbsp;</span>30 <span class=bigger>+</span> 12', buttonValueG: 'F', buttonLabelG: '<span class=bigger>&nbsp;</span>30 <span class=bigger>-</span> 12', buttonValueD: 'H', buttonLabelH: '<span class=bigger>-</span>12 + 30',
			correctLeftAligned: '30 <span class=bigger>-</span> ( <span class=bigger>-</span>12 )',
			noDoubleNegs: '30 <span class=bigger>+</span> 12',
			absNumber: '12',
			template: 'doubleNegative'},
			//problem 3
			{ problemStatement: 'Find the difference of <span class=bigger>-</span>25 and 10', buttonValueA: 'F', buttonLabelA: '<span class=bigger>&nbsp;</span>25 <span class=bigger>-</span> 10', buttonValueB: 'F', buttonLabelB: '<span class=bigger>&nbsp;</span>10 <span class=bigger>-</span> 25', buttonValueC: 'T', buttonLabelC: '<span class=bigger>-</span>25 <span class=bigger>-</span> 10', buttonValueD: 'F', buttonLabelD: '<span class=bigger>-</span>25 <span class=bigger>-</span> (<span class=bigger>-</span>10)', answer: '-35',
            labelCorrect: '<span class=bigger>-</span>25 <span class=bigger>-</span> 10',
			template: 'main'}
        ];

	return dataUtils.build(desc, template, data);
}]);
