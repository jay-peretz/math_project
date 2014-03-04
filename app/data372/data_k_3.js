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
                                        '<br><br><span class=blue-text>$problemStatement</span>'+
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
						problem: '\\rowgrp'
						+'{\\html{Solve:}}'
						+'{\\html{&nbsp;}}'
						+'{\\html{$problemStatement}}',
						answer: '\\wb'
									+'{\\rowgrp'
										+'{\\html{$labelCorrect}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\input{$answer}}'
										+'}'
									+'}'
								+'{well}{end}',
						controls: {
							"checkAnswer": true,
							"help": true
						}
					}, {
						problem: '\\rowgrp'
						+'{\\html{Solve:}}'
						+'{\\html{&nbsp;}}'
						+'{\\html{$problemStatement}}',
						answer: '$preAnswer',
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
			{ problemStatement: 'Subtract 6 from 8', buttonValueA: 'F', buttonLabelA: '<span class=bigger>-</span> 6 <span class=bigger>-</span> 8', buttonValueB: 'T', buttonLabelB: '<span class=bigger>&nbsp;</span> 8 <span class=bigger>-</span> 6', buttonValueC: 'F', buttonLabelC: '<span class=bigger>-</span> 8 <span class=bigger>-</span> 6', buttonValueD: 'F', buttonLabelD: '<span class=bigger>&nbsp;</span> 6 <span class=bigger>-</span> 8', answer: '2',
            labelCorrect: '<span class=bigger>&nbsp;</span> 8 <span class=bigger>-</span> 6',
			preAnswer: dataUtils.pre('\\css'
									 	+'{\\ordopssimple{' 
											+'\\grp{\\html{8}}{\\btn{-}{T}{bigger}}{\\html{6}},'
											+'\\input{2},'
										+'}{Evaluate the operator.}'
									+'}{well}'
								),
			template: 'main'},
			//problem 2
			{ problemStatement: 'Subtract <span class=bigger>-</span>12 from 30', buttonValueA: 'F', buttonLabelA: '<span class=bigger>-</span>12 <span class=bigger>-</span> 30', buttonValueB: 'T', buttonLabelB: '<span class=bigger>&nbsp;</span>30 <span class=bigger>-</span> ( <span class=bigger>-</span>12 )', buttonValueC: 'F', buttonLabelC: '<span class=bigger>&nbsp;</span>30 <span class=bigger>-</span> 12', buttonValueD: 'F', buttonLabelD: '<span class=bigger>-</span>12 + 30', answer: '42',
            labelCorrect: '<span class=bigger>&nbsp;</span>30 <span class=bigger>-</span> ( <span class=bigger>-</span>12 )',
			preAnswer: dataUtils.pre('\\css'
									 	+'{\\ordopssimple{' 
											+'\\grp{\\html{30}}{\\btn{-}{T}{bigger}}{\\html{(}}{\\sign{-}}{\\html{12}}{\\html{)}},' 
                        					+'\\input{+},' 
											+'\\grp{\\html{30}}{\\btn{+}{T}{bigger}}{\\html{12}},' 
                        					+'\\input{42},' 
                    					+'}{Enter an operator or a result.}'
									+'}{well}'
									),
			template: 'main'},
			//problem 3
			{ problemStatement: 'Find the difference of <span class=bigger>-</span>25 and 10', buttonValueA: 'F', buttonLabelA: '<span class=bigger>&nbsp;</span>25 <span class=bigger>-</span> 10', buttonValueB: 'F', buttonLabelB: '<span class=bigger>&nbsp;</span>10 <span class=bigger>-</span> 25', buttonValueC: 'T', buttonLabelC: '<span class=bigger>-</span>25 <span class=bigger>-</span> 10', buttonValueD: 'F', buttonLabelD: '<span class=bigger>-</span>25 <span class=bigger>-</span> (<span class=bigger>-</span>10)', answer: '-35',
            labelCorrect: '<span class=bigger>-</span>25 <span class=bigger>-</span> 10',
			preAnswer: dataUtils.pre('\\css'
									 	+'{\\ordopssimple{' 
											+'\\grp{\\html{<span class=bigger>-</span>25}}{\\btn{-}{T}{bigger}}{\\html{10}},' 
                        					+'\\input{-35},' 
                    					+'}{Enter an operator or a result.}'
									+'}{well}'
									),
			template: 'main'},
			//problem 4
			{ problemStatement: 'Find the difference of <span class=bigger>-</span>25 and 10', buttonValueA: 'F', buttonLabelA: '<span class=bigger>&nbsp;</span>25 <span class=bigger>-</span> 10', buttonValueB: 'F', buttonLabelB: '<span class=bigger>&nbsp;</span>10 <span class=bigger>-</span> 25', buttonValueC: 'T', buttonLabelC: '<span class=bigger>-</span>25 <span class=bigger>-</span> 10', buttonValueD: 'F', buttonLabelD: '<span class=bigger>-</span>25 <span class=bigger>-</span> (<span class=bigger>-</span>10)', answer: '-35',
            labelCorrect: '<span class=bigger>-</span>25 <span class=bigger>-</span> 10',
			preAnswer: dataUtils.pre('\\css'
									 	+'{\\ordopssimple{' 
											+'\\grp{\\html{<span class=bigger>-</span>25}}{\\btn{-}{T}{bigger}}{\\html{10}},' 
                        					+'\\input{-35},' 
                    					+'}{Enter an operator or a result.}'
									+'}{well}'
									),
			template: 'main'},
			//problem 5
			{ problemStatement: 'Find the difference of <span class=bigger>-</span>25 and 10', buttonValueA: 'F', buttonLabelA: '<span class=bigger>&nbsp;</span>25 <span class=bigger>-</span> 10', buttonValueB: 'F', buttonLabelB: '<span class=bigger>&nbsp;</span>10 <span class=bigger>-</span> 25', buttonValueC: 'T', buttonLabelC: '<span class=bigger>-</span>25 <span class=bigger>-</span> 10', buttonValueD: 'F', buttonLabelD: '<span class=bigger>-</span>25 <span class=bigger>-</span> (<span class=bigger>-</span>10)', answer: '-35',
            labelCorrect: '<span class=bigger>-</span>25 <span class=bigger>-</span> 10',
			preAnswer: dataUtils.pre('\\css'
									 	+'{\\ordopssimple{' 
											+'\\grp{\\html{<span class=bigger>-</span>25}}{\\btn{-}{T}{bigger}}{\\html{10}},' 
                        					+'\\input{-35},' 
                    					+'}{Enter an operator or a result.}'
									+'}{well}'
									),
			template: 'main'},
			//problem 6
			{ problemStatement: 'Find the difference of <span class=bigger>-</span>25 and 10', buttonValueA: 'F', buttonLabelA: '<span class=bigger>&nbsp;</span>25 <span class=bigger>-</span> 10', buttonValueB: 'F', buttonLabelB: '<span class=bigger>&nbsp;</span>10 <span class=bigger>-</span> 25', buttonValueC: 'T', buttonLabelC: '<span class=bigger>-</span>25 <span class=bigger>-</span> 10', buttonValueD: 'F', buttonLabelD: '<span class=bigger>-</span>25 <span class=bigger>-</span> (<span class=bigger>-</span>10)', answer: '-35',
            labelCorrect: '<span class=bigger>-</span>25 <span class=bigger>-</span> 10',
			preAnswer: dataUtils.pre('\\css'
									 	+'{\\ordopssimple{' 
											+'\\grp{\\html{<span class=bigger>-</span>25}}{\\btn{-}{T}{bigger}}{\\html{10}},' 
                        					+'\\input{-35},' 
                    					+'}{Enter an operator or a result.}'
									+'}{well}'
									),
			template: 'main'},
			//problem 7
			{ problemStatement: 'Find the difference of <span class=bigger>-</span>25 and 10', buttonValueA: 'F', buttonLabelA: '<span class=bigger>&nbsp;</span>25 <span class=bigger>-</span> 10', buttonValueB: 'F', buttonLabelB: '<span class=bigger>&nbsp;</span>10 <span class=bigger>-</span> 25', buttonValueC: 'T', buttonLabelC: '<span class=bigger>-</span>25 <span class=bigger>-</span> 10', buttonValueD: 'F', buttonLabelD: '<span class=bigger>-</span>25 <span class=bigger>-</span> (<span class=bigger>-</span>10)', answer: '-35',
            labelCorrect: '<span class=bigger>-</span>25 <span class=bigger>-</span> 10',
			preAnswer: dataUtils.pre('\\css'
									 	+'{\\ordopssimple{' 
											+'\\grp{\\html{<span class=bigger>-</span>25}}{\\btn{-}{T}{bigger}}{\\html{10}},' 
                        					+'\\input{-35},' 
                    					+'}{Enter an operator or a result.}'
									+'}{well}'
									),
			template: 'main'},
			//problem 8
			{ problemStatement: 'Find the difference of <span class=bigger>-</span>25 and 10', buttonValueA: 'F', buttonLabelA: '<span class=bigger>&nbsp;</span>25 <span class=bigger>-</span> 10', buttonValueB: 'F', buttonLabelB: '<span class=bigger>&nbsp;</span>10 <span class=bigger>-</span> 25', buttonValueC: 'T', buttonLabelC: '<span class=bigger>-</span>25 <span class=bigger>-</span> 10', buttonValueD: 'F', buttonLabelD: '<span class=bigger>-</span>25 <span class=bigger>-</span> (<span class=bigger>-</span>10)', answer: '-35',
            labelCorrect: '<span class=bigger>-</span>25 <span class=bigger>-</span> 10',
			preAnswer: dataUtils.pre('\\css'
									 	+'{\\ordopssimple{' 
											+'\\grp{\\html{<span class=bigger>-</span>25}}{\\btn{-}{T}{bigger}}{\\html{10}},' 
                        					+'\\input{-35},' 
                    					+'}{Enter an operator or a result.}'
									+'}{well}'
									),
			template: 'main'},
			//problem 9
			{ problemStatement: 'Find the difference of <span class=bigger>-</span>25 and 10', buttonValueA: 'F', buttonLabelA: '<span class=bigger>&nbsp;</span>25 <span class=bigger>-</span> 10', buttonValueB: 'F', buttonLabelB: '<span class=bigger>&nbsp;</span>10 <span class=bigger>-</span> 25', buttonValueC: 'T', buttonLabelC: '<span class=bigger>-</span>25 <span class=bigger>-</span> 10', buttonValueD: 'F', buttonLabelD: '<span class=bigger>-</span>25 <span class=bigger>-</span> (<span class=bigger>-</span>10)', answer: '-35',
            labelCorrect: '<span class=bigger>-</span>25 <span class=bigger>-</span> 10',
			preAnswer: dataUtils.pre('\\css'
									 	+'{\\ordopssimple{' 
											+'\\grp{\\html{<span class=bigger>-</span>25}}{\\btn{-}{T}{bigger}}{\\html{10}},' 
                        					+'\\input{-35},' 
                    					+'}{Enter an operator or a result.}'
									+'}{well}'
									),
			template: 'main'},
			//problem 10
			{ problemStatement: 'Find the difference of <span class=bigger>-</span>25 and 10', buttonValueA: 'F', buttonLabelA: '<span class=bigger>&nbsp;</span>25 <span class=bigger>-</span> 10', buttonValueB: 'F', buttonLabelB: '<span class=bigger>&nbsp;</span>10 <span class=bigger>-</span> 25', buttonValueC: 'T', buttonLabelC: '<span class=bigger>-</span>25 <span class=bigger>-</span> 10', buttonValueD: 'F', buttonLabelD: '<span class=bigger>-</span>25 <span class=bigger>-</span> (<span class=bigger>-</span>10)', answer: '-35',
            labelCorrect: '<span class=bigger>-</span>25 <span class=bigger>-</span> 10',
			preAnswer: dataUtils.pre('\\css'
									 	+'{\\ordopssimple{' 
											+'\\grp{\\html{<span class=bigger>-</span>25}}{\\btn{-}{T}{bigger}}{\\html{10}},' 
                        					+'\\input{-35},' 
                    					+'}{Enter an operator or a result.}'
									+'}{well}'
									),
			template: 'main'},
        ];

	return dataUtils.build(desc, template, data);
}]);
