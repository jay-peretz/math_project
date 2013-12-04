/*global angular */

angular.module('mathSkills').service('data22_4', ['dataUtils', function (dataUtils) {
    var desc = {
            title: '22.4 Markups and Markdowns',
            path: '22.4-markups-and-markdowns',
            children: []
        },
        template = {
            placeholder: {
                title: 'Discounts',
                children: [{
                    title: 'Main Answer',
                    children: [{
                        problem: '\\html{$problem<br><br><span class="blue-text">$firstQuestion &nbsp; $round</span>}',
                        answer: '\\grp{\\html{&#36;}}{\\css{\\inputcash{$fullFirstAnswer}}{width120px}}',
                        controls: {
                            "checkAnswer": true,
							"workbook": false,
                            "help": '\\rowgrp'+
										'{\\html{Find the amount of the $firstDescriptor.<br>$round}}'+
										'{\\html{&nbsp;}}'+
										'{\\grp{\\frac{\\html{$ln}}{\\html{$ld}}}{\\sign{=}}{\\frac{\\html{$rn}}{\\html{$rd}}}}'+
										'{\\html{&nbsp;}}'+
										'{\\grp'+
											'{\\str{X}}'+
											'{\\sign{=}}'+
											'{$solution}'+
										'}'+
										'{\\html{&nbsp;}}'+
										'{\\grp'+
											'{\\str{X}}'+
											'{\\sign{=}}'+
											'{\\html{&#36;}}'+
											'{\\html{$firstAnswer}}'+
										'}'
                        }
                    },
					{
                        problem: '\\html{$problem<br><br><span class="blue-text">$secondQuestion &nbsp; $round</span>}',
                        answer: '\\grp{\\html{&#36;}}{\\css{\\inputcash{$fullSecondAnswer}}{width120px}}',
                        controls: {
                            "checkAnswer": true,
							"workbook": false,
                            "help": '\\rowgrp'+
										'{\\html{Find the amount of the $firstDescriptor.<br>$round}}'+
										'{\\html{&nbsp;}}'+
										'{\\grp{\\frac{\\html{$ln}}{\\html{$ld}}}{\\sign{=}}{\\frac{\\html{$rn}}{\\html{$rd}}}}'+
										'{\\html{&nbsp;}}'+
										'{\\grp'+
											'{\\str{X}}'+
											'{\\sign{=}}'+
											'{$solution}'+
										'}'+
										'{\\html{&nbsp;}}'+
										'{\\grp'+
											'{\\str{X}}'+
											'{\\sign{=}}'+
											'{\\html{&#36;}}'+
											'{\\html{$firstAnswer}}'+
										'}'+
										'{\\html{&nbsp;}}'+
										'{\\html{$secondDescriptor}}'+
										'{\\html{&nbsp;}}'+
										'{$secondSolution}'+
										'{\\html{&nbsp;}}'+
										'{\\css{\\html{$textAnswer}}{help-answer-text}}'
                        }
                    }]
                }]
            },
            dollar: {
                
                title: 'Discounts',
                children: [{
                    title: 'Main Answer',
                    children: [{
                        problem: '\\html{$problem<br><br><span class="blue-text">$round</span>}',
                        answer: '\\grp{\\html{&#36;}}{\\css{\\inputcash{$inAnswer}}{width120px}}',
                        controls: {
                            "checkAnswer": true,
                            "help": false,
                            "workbook": true
                        }
                    }]
                }, {
                    title: 'Workbook',
                    children: [{
                        problem: '\\html{$problem<br><br><span class="blue-text">$round</span>}',
                        answer: '\\wb{\\rowgrp{'+
                            '\\ins{Set up a percent proportion to solve the problem (use "X" for an unknown value).}'+
                        '}{'+
                            '\\grp'+
                            '{\\frac{\\input{[\"$ln\",\"$rn\"]}}{\\input{[\"$ld\",\"$rd\"]}}}'+
                            '{\\sign{=}}'+
                            '{\\frac{\\input{[\"$rn\",\"$ln\"]}}{\\input{[\"$rd\",\"$ld\"]}}}'+
                        '}}{well}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }, {
                        problem: '\\html{$problem<br><br><span class="blue-text">$round</span>}',
                        answer: '\\wb{\\rowgrp{'+
                            '\\choose{[\\html{},\\ins{The standard percent proportion is set up as follows:}]}{$$previousCorrect}'+
                        '}{'+
                            '\\css{\\choose{[\\html{},\\grp{\\frac{\\html{$$dln}}{\\html{$$dld}}}{\\sign{=}}{\\frac{\\html{$$drn}}{\\html{$$drd}}}]}{$$previousCorrect}}{bottom-marg}'+
                        '}{'+
                            '\\choose{[\\ins{Yes!},\\ins{We substitute the given values to get:}]}{$$previousCorrect}'+
                        '}{'+
                            '\\css{\\grp{\\frac{\\html{$$ln}}{\\html{$$ld}}}{\\sign{=}}{\\frac{\\html{$$rn}}{\\html{$$rd}}}}{bottom-marg}'+
                        '}{'+
                            '\\ins{Now solve the problem.<br><span class="blue-text">$round</span>}'+
                        '}{'+
                            '\\css{'+
								'\\grp'+
										'{\\str{X}}'+
										'{\\sign{=}}'+
										'{\\html{&#36;}}'+
										'{\\inputcash{$inAnswer}}'+
								'}{proportion-application}'+
							'}'+
						'}{well}{end}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }, {
                        problem: '\\html{$problem<br><br><span class="blue-text">$round</span>}',
                        answer: '\\wb{\\rowgrp{'+
                            '\\css{\\choose{[\\html{},\\grp{\\frac{\\html{$$ln}}{\\html{$$ld}}}{\\sign{=}}{\\frac{\\html{$$rn}}{\\html{$$rd}}}]}{$$previousCorrect}}{bottom-marg}'+
                        '}{'+
                            '\\choose{[\\ins{Congratulations!},\\ins{The correct answer is found by following the process to solve all proportion problems. We substitute the given values to get:}]}{$$previousCorrect}'+
                        '}{'+
                            '\\choose{'+
								'[\\grp'+
								  '{\\frac{\\html{$$ln}}{\\html{$$ld}}}{\\sign{=}}{\\frac{\\html{$$rn}}{\\html{$$rd}}},'+
								'\\css{'+
										'\\grp'+
											'{\\html{X}}'+
											'{\\sign{=}}'+
											'{$solution}'+
									'}{proportion-application}'+
								']}{$$previousCorrect}'+
                        '}{'+
                            '\\choose{[\\html{},\\ins{The answer is}]}{$$previousCorrect}'+
                        '}{'+
                            '\\choose{[\\html{},\\css{\\grp{\\html{&#36;}}{\\html{$answer}}}{proportion-application}]}{$$previousCorrect}'+
                        '}}{well}',
                        controls: {
                            "checkAnswer": true,
                            "help": false,
							"stepwiseNextProblem": true
                        }
                    }]
                }]
            },
			percent: {
                
                title: 'Discounts',
                children: [{
                    title: 'Main Answer',
                    children: [{
                        problem: '\\html{$problem<br><br><span class="blue-text">$round</span>}',
                        answer: '\\grp{\\css{\\input{$answer}}{width120px}}{\\html{&#37;}}',
                        controls: {
                            "checkAnswer": true,
                            "help": false,
                            "workbook": true
                        }
                    }]
                }, {
                    title: 'Workbook',
                    children: [{
                        problem: '\\html{$problem<br><br><span class="blue-text">$round</span>}',
                        answer: '\\wb{\\rowgrp{'+
                            '\\ins{Set up a percent proportion to solve the problem (use "X" for an unknown value).}'+
                        '}{'+
                            '\\grp'+
                            '{\\frac{\\input{[\"$ln\",\"$rn\"]}}{\\input{[\"$ld\",\"$rd\"]}}}'+
                            '{\\sign{=}}'+
                            '{\\frac{\\input{[\"$rn\",\"$ln\"]}}{\\input{[\"$rd\",\"$ld\"]}}}'+
                        '}}{well}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }, {
                        problem: '\\html{$problem<br><br><span class="blue-text">$round</span>}',
                        answer: '\\wb{\\rowgrp{'+
                            '\\choose{[\\html{},\\ins{The standard percent proportion is set up as follows:}]}{$$previousCorrect}'+
                        '}{'+
                            '\\css{\\choose{[\\html{},\\grp{\\frac{\\html{$$dln}}{\\html{$$dld}}}{\\sign{=}}{\\frac{\\html{$$drn}}{\\html{$$drd}}}]}{$$previousCorrect}}{bottom-marg}'+
                        '}{'+
                            '\\choose{[\\ins{Yes!},\\ins{$xtext We substitute the given values to get:}]}{$$previousCorrect}'+
                        '}{'+
                            '\\css{\\grp{\\frac{\\html{$$ln}}{\\html{$$ld}}}{\\sign{=}}{\\frac{\\html{$$rn}}{\\html{$$rd}}}}{bottom-marg}'+
                        '}{'+
                            '\\ins{Now solve the problem.<br><span class="blue-text">$round</span>}'+
                        '}{'+
                            '\\css{'+
								'\\grp'+
										'{\\str{X}}'+
										'{\\sign{=}}'+
										'{\\input{$answer}}'+
										'{\\html{&#37;}}'+
								'}{proportion-application}'+
							'}'+
						'}{well}{end}',
                        controls: {
                            "checkAnswer": true,
                            "help": true,
                            "stepwiseNextProblem": false
                        }
                    }, {
                        problem: '\\html{$problem<br><br><span class="blue-text">$round</span>}',
                        answer: '\\wb{\\rowgrp{'+
                            '\\css{\\choose{[\\html{},\\grp{\\frac{\\html{$$ln}}{\\html{$$ld}}}{\\sign{=}}{\\frac{\\html{$$rn}}{\\html{$$rd}}}]}{$$previousCorrect}}{bottom-marg}'+
                        '}{'+
                            '\\choose{[\\ins{Congratulations!},\\ins{The correct answer is found by following the process to solve all proportion problems. We substitute the given values to get:}]}{$$previousCorrect}'+
                        '}{'+
                            '\\choose{'+
								'[\\grp'+
								  '{\\frac{\\html{$$ln}}{\\html{$$ld}}}{\\sign{=}}{\\frac{\\html{$$rn}}{\\html{$$rd}}},'+
								'\\css{'+
										'\\grp'+
											'{\\html{X}}'+
											'{\\sign{=}}'+
											'{$solution}'+
									'}{proportion-application}'+
								']}{$$previousCorrect}'+
                        '}{'+
                            '\\choose{[\\html{},\\ins{The answer is}]}{$$previousCorrect}'+
                        '}{'+
                            '\\choose{[\\html{},\\css{\\grp{\\html{$answer}}{\\html{&#37;}}}{proportion-application}]}{$$previousCorrect}'+
                        '}}{well}',
                        controls: {
                            "checkAnswer": true,
                            "help": false,
							"stepwiseNextProblem": true
                        }
                    }]
                }]
            },
            dollarDouble: {
                title: 'Discounts',
                children: [{
                    title: 'Main Answer',
                    children: [{
                        problem: '\\html{$problem<br><br><span class="blue-text">$round</span>}',
                        answer: '\\grp{\\html{&#36;}}{\\css{\\inputcash{$inAnswer}}{width120px}}',
                        controls: {
                            "checkAnswer": true,
                            "help": false,
                            "workbook": true
                        }
                    }]
                }, {
                    title: 'Workbook',
                    children: [{
                        problem: '\\html{$problem<br><br><span class="blue-text">$round</span>}',
                        answer: '\\wb{\\rowgrp'+
                            '{\\ins{Find the amount of the $firstDescriptor.}}'+
                            '{\\grp{\\frac{\\html{$ln}}{\\html{$ld}}}{\\sign{=}}{\\frac{\\html{$rn}}{\\html{$rd}}}}'+
                            '{\\html{&nbsp;}}'+
                            '{'+
                            '\\css{'+
								'\\grp'+
										'{\\str{X}}'+
										'{\\sign{=}}'+
										'{\\html{&#36;}}'+
										'{\\css{\\inputcash{$firstInAnswer}}{width120px}}'+
								'}{proportion-application}'+
							'}'+
                        '}{well}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }, {
                        problem: '\\html{$problem<br><br><span class="blue-text">$round</span>}',
                        answer: '\\wb{\\rowgrp'+
										'{\\choose{[\\html{That\'s right.},\\grp'+
														'{\\html{X}}'+
														'{\\sign{=}}'+
														'{$solution}]}'+
													'{$$previousCorrect}}'+
										'{\\html{&nbsp;}}'+
										'{\\choose{[\\html{},\\rowgrp{\\grp{\\html{X}}'+
															'{\\sign{=}}{\\html{&#36;}}{\\html{$firstAnswer}}}{\\html{&nbsp;}}]}{$$previousCorrect}}'+
										'{\\ins{$secondWBText}}'+
										'{\\grp{\\html{$rd}}{\\sign{$stepSign}}{\\html{$firstAnswer}}{\\sign{=}}{\\html{&#36;}}{\\css{\\inputcash{$secondInAnswer}}{width120px}}}'+
										'}{well}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    },{
                        problem: '\\html{$problem<br><br><span class="blue-text">$round</span>}',
                        answer: '\\wb{\\rowgrp'+
							'{\\choose{[\\html{Correct.},\\grp{\\html{$rd}}{\\sign{$stepSign}}{\\html{$firstAnswer}}{\\sign{=}}{\\html{$secondAnswer}}]}'+
													'{$$previousCorrect}}'+
							'{\\html{&nbsp;}}'+
                            '{\\ins{Find the amount of the $secondDescriptor.}}'+
                            '{\\grp{\\frac{\\html{$l2n}}{\\html{$l2d}}}{\\sign{=}}{\\frac{\\html{$r2n}}{\\html{$r2d}}}}'+
                            '{\\html{&nbsp;}}'+
                            '{'+
                            '\\css{'+
								'\\grp'+
										'{\\str{X}}'+
										'{\\sign{=}}'+
										'{\\html{&#36;}}'+
										'{\\css{\\inputcash{$thirdInAnswer}}{width120px}}'+
								'}{proportion-application}'+
							'}'+
                        '}{well}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }, {
                        problem: '\\html{$problem<br><br><span class="blue-text">$round</span>}',
                        answer: '\\wb{\\rowgrp'+
										'{\\choose{[\\html{Now for the last step:},\\rowgrp{\\grp'+
														'{\\html{X}}'+
														'{\\sign{=}}'+
														'{$secondSolution}}'+
														'{\\html{&nbsp;}}]}'+
													'{$$previousCorrect}}'+
										'{\\css{\\choose{[\\html{},\\grp{\\html{X}}'+
															'{\\sign{=}}{\\html{&#36;}}{\\html{$thirdAnswer}}]}{$$previousCorrect}}{bottom-marg}}'+
										'{\\ins{$thirdWBText}}'+
										'{\\css{\\grp{\\html{$r2d}}{\\sign{-}}{\\html{$thirdAnswer}}{\\sign{=}}{\\html{&#36;}}{\\css{\\inputcash{$inAnswer}}{width120px}}}{bottom-marg}}'+
										'}{well}{end}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    },
					{
                        problem: '\\html{$problem<br><br><span class="blue-text">$round</span>}',
                        answer: '\\wb{\\rowgrp{'+
									'\\choose{[\\html{},\\ins{The answer is}]}{$$previousCorrect}'+
                        			'}{'+
                            		'\\choose{[\\html{},\\grp{\\html{$r2d}}{\\sign{-}}{\\html{$thirdAnswer}}{\\sign{=}}{\\html{&#36; $answer}}]}{$$previousCorrect}'+
                        		'}}{well}',
                        controls: {
                            "checkAnswer": true,
                            "help": false,
							"stepwiseNextProblem": true
                        }
                    }]
                }]
            },
            questionTriple: {
                title: 'Discounts',
                children: [{
                    title: 'Main Answer',
                    children: [{
                        problem: '\\html{$problem<br><br><span class="blue-text">$round</span>}',
                        answer: '\\rowgrp'+
									'{\\grp{\\chkbtn{Profit}{$buttonValueA}}{\\chkbtn{ Loss }{$buttonValueB}}}'+
									'{\\html{&nbsp;}}'+
									'{\\grp{\\html{By how much? &#36;}}{\\css{\\inputcash{$aInAnswer}}{width120px}}}',
                        controls: {
                            "checkAnswer": true,
							"workbook": false,
                            "help": '\\rowgrp'+
                            '{\\html{Find the amount of the $firstDescriptor:}}'+
							'{\\html{&nbsp;}}'+
                            '{\\grp{\\frac{\\html{$ln}}{\\html{$ld}}}{\\sign{=}}{\\frac{\\html{$rn}}{\\html{$rd}}}}'+
                            '{\\html{&nbsp;}}'+
                            '{\\grp'+
								'{\\str{X}}'+
								'{\\sign{=}}'+
								'{\\html{&#36;}}'+
								'{\\html{$firstAnswer}}'+
							'}'+
							'{\\html{&nbsp;}}'+
							'{\\html{$secondWBText}}'+
							'{\\html{&nbsp;}}'+
							'{\\grp'+
								'{\\html{$rd}}'+
								'{\\sign{$stepSign}}'+
								'{\\html{$firstAnswer}}'+
								'{\\sign{=}}'+
								'{\\html{&#36;}}'+
								'{\\html{$secondAnswer}}'+
							'}'+
							'{\\html{&nbsp;}}'+
							'{\\html{Find the amount of the $secondDescriptor.}}'+
							'{\\html{&nbsp;}}'+
                            '{\\grp{\\frac{\\html{$l2n}}{\\html{$l2d}}}{\\sign{=}}{\\frac{\\html{$r2n}}{\\html{$r2d}}}}'+
                            '{\\html{&nbsp;}}'+
                            '{'+
                            '\\grp'+
								'{\\str{X}}'+
								'{\\sign{=}}'+
								'{\\html{&#36;}}'+
								'{\\html{$thirdAnswer}}'+
							'}'+
							'{\\html{&nbsp;}}'+
							'{\\html{$thirdWBText}}'+
							'{\\html{&nbsp;}}'+
							'{\\grp{\\html{$r2d}}{\\sign{-}}{\\html{$thirdAnswer}}{\\sign{=}}{\\html{&#36;}}{\\html{$fourthAnswer}}}'+
							'{\\html{&nbsp;}}'+
							'{\\html{$fourthWBText}}'+
							'{\\html{&nbsp;}}'+
							'{$fourthSolution}'+
							'{\\html{&nbsp;}}'+
							'{\\css{\\html{$fifthWBText}}{help-answer-text}}'
                        }
                    },
					{
                        problem: '\\html{$bProblem<br><br><span class="blue-text">$newQuestion</span>}',
                        answer: '\\grp{\\input{$bAnswer}}{\\html{&#37;}}',
                        controls: {
                            "checkAnswer": true,
							"workbook": false,
                            "help": '\\rowgrp'+
									'{\\grp'+
										'{\\frac{\\html{$rn}}{\\html{$ld}}}{\\sign{=}}{\\frac{\\html{$aAnswer}}{\\html{$rd}}}}'+
                            		'{\\html{&nbsp;}}'+
									'{\\grp'+
											'{\\html{X}}'+
											'{\\sign{=}}'+
											'{$thirdSolution}'+
											'{\\html{&nbsp;}}'+
									'}'+
									'{\\html{&nbsp;}}'+
									'{\\grp'+
										'{\\str{X}}'+
										'{\\sign{=}}'+
										'{\\html{$bAnswer}}'+
										'{\\html{&#37;}}'+
									'}'+
									'{\\html{&nbsp;}}'+
									'{\\css{\\html{The percent loss was $bAnswer %}}{help-answer-text}}'
                        }
                    }]
                }]
            }
        },
        data = [
            { //1
                template: 'placeholder',
                problem: 'The owner of Appliances For You purchased refrigerators for $420 from the manufacturer. In turn, the owner marked up her cost by 62%.',
				round: '',
				firstQuestion: 'What is the amount of the markup?',
				secondQuestion: 'How much did a customer have to pay for a refrigerator at this store?',
				fullFirstAnswer: '260.40', firstAnswer: '260.40',
				fullSecondAnswer: '680.40',
				firstDescriptor: 'markup',
				secondDescriptor: 'Add the markup to the price:',
				ln: '62', rn: 'X', 
                ld: '100', rd: '420', 
				solution: dataUtils.pre('\\grp{\\html{420}}{\\html{&#149;}}{\\html{62}}{css{\\html{\xF7}}{bigger}}{\\html{100}}'),
				secondSolution: dataUtils.pre('\\grp{\\html{420}}{css{\\html{+}}{bigger}}{\\html{260.40}}{css{\\html{=}}{bigger}}{\\html{$&nbsp;680.40}}'),
				textAnswer: 'The customer pays $680.40 for a refrigerator'
            },
            {  //2
                problem: 'The owner of Appliances For You bought a refrigerator from the manufacturer for $420. If she marked up the price $260.40, what was her percent markup?',
                round: '',
				inAnswer: '62',
				answer: '62', template: 'percent',  
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: 'X', rn: '260.40', 
                ld: '100', rd: '420', 
                solution: dataUtils.pre('\\grp{\\html{100}}'+
                '{\\html{&#149;}}'+
                '{\\html{260.40}}'+
                '{css{\\html{\xF7}}{bigger}}'+
                '{\\html{420}}'),
                xtext:'',
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"]],
            },
            {  //3
                problem: 'A storeowner purchased a refrigerator from a manufacturer and marked up the price 62% to sell to consumers who came to her store. If the amount of the markup was $260.40, what was the original cost of the refrigerator for the storeowner?',
                round: '',
                inAnswer: '420.00',
                answer: '420', template: 'dollar',  
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: '62', rn: '260.40', 
                ld: '100', rd: 'X', 
                solution: dataUtils.pre('\\grp{\\html{100}}{\\html{&#149;}}{\\html{260.40}}{css{\\html{\xF7}}{bigger}}{\\html{62}}'),
                xtext:'',
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"]],
            },
            { //4
                template: 'placeholder',
                problem: 'Broccoli was purchased by a local grocery store for $1.50 a pound. The store marked up the price 26%.',
				round: '',
				firstQuestion: 'What was the amount of the markup at the store?',
				secondQuestion: 'How much did a customer pay for a pound of broccoli?',
				fullFirstAnswer: '0.39', firstAnswer: '0.39',
				fullSecondAnswer: '1.89',
				firstDescriptor: 'markup',
				secondDescriptor: 'Add the markup to the price:',
				ln: '26', rn: 'X', 
                ld: '100', rd: '1.50', 
				solution: dataUtils.pre('\\grp{\\html{1.50}}{\\html{&#149;}}{\\html{26}}{css{\\html{\xF7}}{bigger}}{\\html{100}}'),
				secondSolution: dataUtils.pre('\\grp{\\html{1.50}}{css{\\html{+}}{bigger}}{\\html{0.39}}{css{\\html{=}}{bigger}}{\\html{$&nbsp;1.89}}'),
				textAnswer: 'The customer pays $1.89 for a pound of broccoli'
            },
            {  //5
                problem: 'A local grocery store bought broccoli from a local farmer for $1.50 per pound. If the store increased the price by $0.39 a pound, what was the percent markup?',
                round: '',
                xtext:'',
                answer: '26', template: 'percent',  
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: 'X', rn: '0.39', 
                ld: '100', rd: '1.50', 
                solution: dataUtils.pre('\\grp{\\html{100}}{\\html{&#149;}}{\\html{0.39}}{css{\\html{\xF7}}{bigger}}{\\html{1.50}}'),
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"]],
            },
            
            {  //6
                problem: 'A local grocery store bought broccoli from a local farmer and marked up the price 26%. If the amount of the markup was $0.39 per pound, what was the original cost of the broccoli for the store?',
                round: '',
                inAnswer: '1.50',
                answer: '1.50', template: 'dollar',  
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: '26', rn: '0.39', 
                ld: '100', rd: 'X', 
                solution: dataUtils.pre('\\grp{\\html{100}}{\\html{&#149;}}{\\html{0.39}}{css{\\html{\xF7}}{bigger}}{\\html{26}}'),
                xtext:'',
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"]],
            },
            { //7
                template: 'placeholder',
                problem: 'When a clothing store couldn’t sell its summer dresses for $32, it marked them down 35%.',
				round: '',
				firstQuestion: 'What is the amount of the markdown?',
				secondQuestion: 'How much did the store sell the dresses for after the markdown?',
				fullFirstAnswer: '11.20', firstAnswer: '11.20',
				fullSecondAnswer: '20.80',
				firstDescriptor: 'markdown',
				secondDescriptor: 'Subtract the markdown from the price:',
				ln: '35', rn: 'X', 
                ld: '100', rd: '32', 
				solution: dataUtils.pre('\\grp{\\html{32}}{\\html{&#149;}}{\\html{35}}{css{\\html{\xF7}}{bigger}}{\\html{100}}'),
				secondSolution: dataUtils.pre('\\grp{\\html{32}}{css{\\html{-}}{bigger}}{\\html{11.20}}{css{\\html{=}}{bigger}}{\\html{$&nbsp;20.80}}'),
				textAnswer: 'The store sold the dresses for $20.80'
            },
            {  //8
                problem: 'A clothing store couldn’t sell its summer dresses for $32, so it marked them down $11.20. What was the percent markdown?',
                round: '',
                xtext:'',
                answer: '35', template: 'percent', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: 'X', rn: '11.20', 
                ld: '100', rd: '32', 
                solution: dataUtils.pre('\\grp{\\html{100}}{\\html{&#149;}}{\\html{11.20}}{css{\\html{\xF7}}{bigger}}{\\html{32}}'),
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"]],
            },
            
            {  //9
                problem: 'A clothing store couldn’t sell its summer dresses so it marked them down 35%. If the amount of the markdown was $11.20, for what price had the store originally tried to sell the dresses?',
                round: '',
                inAnswer: '32.00',
                answer: '32', template: 'dollar',
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: '35', rn: '11.20', 
                ld: '100', rd: 'X', 
                solution: dataUtils.pre('\\grp{\\html{100}}{\\html{&#149;}}{\\html{11.20}}{css{\\html{\xF7}}{bigger}}{\\html{35}}'),
                xtext: '',
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"]],
            },
            { //10
                template: 'placeholder',
                problem: 'The owner of a hardware store bought a set of tools for $169.95.',
				round: 'Round the answer to the nearest cent.',
				firstQuestion: 'If he marked up the price by 30%, what was the amount of the markup for the tools?',
				secondQuestion: 'If he marked up the price by 30%, what was the selling price for the set of tools?',
				fullFirstAnswer: '50.99', firstAnswer: '50.99',
				fullSecondAnswer: '220.94',
				firstDescriptor: 'markup',
				secondDescriptor: 'Add the markup to the price:',
				ln: '30', rn: 'X', 
                ld: '100', rd: '169.95', 
				solution: dataUtils.pre('\\grp{\\html{169.95}}{\\html{&#149;}}{\\html{30}}{css{\\html{\xF7}}{bigger}}{\\html{100}}'),
				secondSolution: dataUtils.pre('\\grp{\\html{169.95}}{css{\\html{+}}{bigger}}{\\html{50.99}}{css{\\html{=}}{bigger}}{\\html{$&nbsp;220.94}}'),
				textAnswer: 'The selling price for the tools is $220.94'
            },
            {  //11
                problem: 'The price of a box of organic strawberries was selling for $4.29. If the price was reduced by$1.29 per box, what was the percent markdown? Round answer to the nearest tenth of a percent.',
                round: 'Round answer to the nearest tenth of a percent.',
                answer: '30.1', template: 'percent', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: 'X', rn: '1.29', 
                ld: '100', rd: '4.29', 
                solution: dataUtils.pre('\\grp{\\html{100}}{\\html{&#149;}}{\\html{1.29}}{css{\\html{\xF7}}{bigger}}{\\html{4.29}}'),
                xtext: '',
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"]],
            },
            {  //12
                problem: 'Mel bought tickets for a concert. He then marked up the price 45% and resold them, making a profit of $18.50 on each ticket. How much had Mel originally paid for each ticket? Round answer to the nearest cent.',
                round: 'Round answer to the nearest cent.',
                xtext:'',
                answer: '41.11', template: 'dollar', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: '45', rn: '18.50', 
                ld: '100', rd: 'X', 
                solution: dataUtils.pre('\\grp{\\html{100}}{\\html{&#149;}}{\\html{18.50}}{css{\\html{\xF7}}{bigger}}{\\html{45}}'),
                xtext: '',
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"]],
            },
            
            {  //13
                problem: 'A store originally priced a sofa at $840. When it didn’t sell the owner marked down the price 25%. When it still didn’t sell, he marked it down another 20% off the discounted price. For what price did the owner finally sell the sofa?',
                round: '',
				answer: '504', inAnswer: '504.00',
				firstInAnswer: '210.00', firstAnswer: '210',
                secondInAnswer: '630.00', secondAnswer: '630',
				thirdInAnswer: '126.00', thirdAnswer: '126',
				firstDescriptor: 'first discount',
				secondDescriptor: 'second discount',
				stepSign: '-',
		        template: 'dollarDouble', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: '25', rn: 'X', 
                ld: '100', rd: '840', 
				l2n: '20', r2n: 'X', 
                l2d: '100', r2d: '630', 
                solution: dataUtils.pre('\\grp{\\html{25}}{\\html{&#149;}}{\\html{840}}{css{\\html{\xF7}}{bigger}}{\\html{100}}'),
				secondSolution: dataUtils.pre('\\grp{\\html{630}}{\\html{&#149;}}{\\html{20}}{css{\\html{\xF7}}{bigger}}{\\html{100}}'),
                xtext: '',
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"]],
                secondWBText: 'After the first discount what is the price of the sofa?',
				thirdWBText: 'After the second discount the sofa sold for how much?'
            },
            {  //14
                problem: 'A contractor originally invested $260,000 in a house. She fixed it up and then tried to sell it at a 25% markup. When it didn’t sell, she marked down the selling price by 15%. What was the house being sold for now?',
                round: '',
				answer: '276,250', inAnswer: '276250.00',
				firstInAnswer: '65000.00', firstAnswer: '65,000',
                secondInAnswer: '325000.00', secondAnswer: '325,000',
				thirdInAnswer: '48750.00', thirdAnswer: '48,750',
				firstDescriptor: 'markup',
				secondDescriptor: 'markdown',
				stepSign: '+',
		        template: 'dollarDouble', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: '25', rn: 'X', 
                ld: '100', rd: '260,000', 
				l2n: '15', r2n: 'X', 
                l2d: '100', r2d: '325,000', 
                solution: dataUtils.pre('\\grp{\\html{260,000}}{\\html{&#149;}}{\\html{25}}{css{\\html{\xF7}}{bigger}}{\\html{100}}'),
				secondSolution: dataUtils.pre('\\grp{\\html{325,000}}{\\html{&#149;}}{\\html{15}}{css{\\html{\xF7}}{bigger}}{\\html{100}}'),
                xtext: '',
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"]],
                secondWBText: 'After the workup, what was the selling price of the house?',
				thirdWBText: 'After the markdown, what did the house sell for?'
            },
            {  //15
                problem: 'An artist spent $80 to create a sculpture. He tried to sell it at a 75% markup. When it didn’t sell, he marked it down 40%. What was the sculpture being sold for now?',
                round: '',
				inAnswer: '84.00', answer: '84',
				firstInAnswer: '60.00', firstAnswer: '60',
                secondInAnswer: '140.00', secondAnswer: '140',
				thirdInAnswer: '56.00', thirdAnswer: '56',
				firstDescriptor: 'markup',
				secondDescriptor: 'markdown',
				stepSign: '+',
		        template: 'dollarDouble', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: '75', rn: 'X', 
                ld: '100', rd: '80', 
				l2n: '40', r2n: 'X', 
                l2d: '100', r2d: '140', 
                solution: dataUtils.pre('\\grp{\\html{80}}{\\html{&#149;}}{\\html{75}}{css{\\html{\xF7}}{bigger}}{\\html{100}}'),
				secondSolution: dataUtils.pre('\\grp{\\html{140}}{\\html{&#149;}}{\\html{40}}{css{\\html{\xF7}}{bigger}}{\\html{100}}'),
                xtext: '',
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"]],
                secondWBText: 'After the markup, what was the selling price of the sculpture?',
				thirdWBText: 'After the markdown, what did the sculpture sell for?'
            },
            {  //16
                problem: 'A used car dealership purchased a car from a client for $3,500. After repairing and tuning up the car, the dealership marked up the price 70% to sell it. When it didn’t sell, the dealership marked down the selling price by 50%. When the dealership finally sold the car at the second sales price, did it make a profit or loss?',
				bProblem: 'A used car dealership purchased a car from a client for $3,500. When the dealership finally sold the car, it lost $525 on the sale.',
                round: '',
				newQuestion: 'What was the percent loss?',
				aInAnswer: '525.00', aAnswer: '525',
				bAnswer: '15',
				buttonValueA: 'F',
				buttonValueB: 'T',
				firstAnswer: '2450',
                secondAnswer: '5950',
				thirdAnswer: '2975',
				fourthAnswer: '2975',
				firstDescriptor: 'markup',
				secondDescriptor: 'markdown',
				stepSign: '+',
		        template: 'questionTriple', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: '70', rn: 'X', 
                ld: '100', rd: '3500', 
				l2n: '50', r2n: 'X', 
                l2d: '100', r2d: '5950', 
                solution: dataUtils.pre('\\grp{\\html{3500}}{\\html{&#149;}}{\\html{75}}{css{\\html{\xF7}}{bigger}}{\\html{100}}'),
				secondSolution: dataUtils.pre('\\grp{\\html{5950}}{\\html{&#149;}}{\\html{50}}{css{\\html{\xF7}}{bigger}}{\\html{100}}'),
				thirdSolution: dataUtils.pre('\\grp{\\html{100}}{\\html{&#149;}}{\\html{525}}{css{\\html{\xF7}}{bigger}}{\\html{3500}}'),
                xtext: '',
                secondWBText: 'After the markup, the selling price of the car was:',
				thirdWBText: 'After the markdown, the car sold for:',
				fourthWBText: 'The dealership spent $3500 for the car and it sold the car for only $2975, a loss of:',
				fourthSolution: dataUtils.pre('\\grp{\\html{3500}}{css{\\html{-}}{bigger}}{\\html{2975}}{css{\\html{=}}{bigger}}{\\html{525}}'),
				fifthWBText: 'The dealership lost $525 on the car'
            },
            
            {  //17
                problem: 'Sheila paid $50 for a painting at a garage sale. Knowing that the painting was worth much more than this, she tried to sell the painting at a 220% markup. It didn’t sell so she marked down her selling price 60%. When she finally sold the painting, did she make a profit or loss?',
				bProblem: 'Sheila paid $50 for a painting at a garage sale. When she finally sold the painting, she made $14 profit on the sale.',
                round: '',
				newQuestion: 'What was the percent profit?',
				aInAnswer: '14.00', aAnswer: '14',
				bAnswer: '28',
				buttonValueA: 'T',
				buttonValueB: 'F',
				firstAnswer: '110',
                secondAnswer: '160',
				thirdAnswer: '96',
				fourthAnswer: '64',
				firstDescriptor: 'markup',
				secondDescriptor: 'markdown',
				stepSign: '+',
		        template: 'questionTriple', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: '220', rn: 'X', 
                ld: '100', rd: '50', 
				l2n: '60', r2n: 'X', 
                l2d: '100', r2d: '160', 
                solution: dataUtils.pre('\\grp{\\html{50}}{\\html{&#149;}}{\\html{220}}{css{\\html{\xF7}}{bigger}}{\\html{100}}'),
				secondSolution: dataUtils.pre('\\grp{\\html{160}}{\\html{&#149;}}{\\html{60}}{css{\\html{\xF7}}{bigger}}{\\html{100}}'),
				thirdSolution: dataUtils.pre('\\grp{\\html{100}}{\\html{&#149;}}{\\html{14}}{css{\\html{\xF7}}{bigger}}{\\html{50}}'),
                xtext: '',
                secondWBText: 'After the markup, the selling price of the painting was:',
				thirdWBText: 'After the markdown, the painting sold for:',
				fourthWBText: 'Sheila paid $50 for a painting and she sold the painting for $64, a profit of:',
				fourthSolution: dataUtils.pre('\\grp{\\html{64}}{css{\\html{-}}{bigger}}{\\html{50}}{css{\\html{=}}{bigger}}{\\html{14}}'),
				fifthWBText: 'Sheila made $14 profit on the painting'
            }
        ],
		// shuffle specifics still to go
		shuffle = [
					{ problems: [1,5,9,13], total: 2},
					{ problems: [14,18,22,26], total: 2},
					{ problems: [19,27,31,35], total: 2},
					{ problems: [4,12,16,20,24], total: 2},
					{ problems: [2,3,6,7,10,11,15,17,21,23,25,29,30,33,34], total: 3},
					{ problems: [8,28,32,36], total: 1}
			];

	    
	    	//return dataUtils.build(desc, template, data, shuffle);
			return dataUtils.build(desc, template, data);
			
	}]);
