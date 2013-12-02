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
                        problem: '\\html{$problem}',
                        answer:'\\input{0}',
                        controls:{
                            "checkAnswer": true,
                            "help": false,
                            "workbook": false,
                            "stepwiseNextProblem": true
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
                        answer: '\\grp{\\html{&#36;}}{\\css{\\inputcash{$inAnswer}}{width200px}}',
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
                        answer: '\\grp{\\css{\\input{$answer}}{width200px}}{\\html{&#37;}}',
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
                        answer: '\\grp{\\html{&#36;}}{\\css{\\inputcash{$inAnswer}}{width200px}}',
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
                            '{\\ins{Find the amount of the first discount.}}'+
                            '{\\grp{\\frac{\\html{$ln}}{\\html{$ld}}}{\\sign{=}}{\\frac{\\html{$rn}}{\\html{$rd}}}}'+
                            '{\\html{&nbsp;}}'+
                            '{'+
                            '\\css{'+
								'\\grp'+
										'{\\str{X}}'+
										'{\\sign{=}}'+
										'{\\html{&#36;}}'+
										'{\\inputcash{$inAnswer}}'+
								'}{proportion-application}'+
							'}'+
                        '}{well}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }, {
                        problem: '\\html{$problem<br><br><span class="blue-text">$round</span>}',
                        answer: '\\wb{\\rowgrp{'+
                            '\\choose{[\\html{That is correct.   },\\rowgrp{\\grp'+
											'{\\html{X}}'+
											'{\\sign{=}}'+
											'{$solution}}'+
                                            '{\\html{&nbsp;}}]}'+
                                            '{$$previousCorrect}'+
                        '}{'+
                            '\\css{\\choose{[\\html{},\\grp{\\html{X}}'+
											'{\\sign{=}}{\\html{&#36;}}{\\html{$answer}}]}{$$previousCorrect}}{bottom-marg}'+
                        '}{'+
                            '\\ins{$secondWBText}'+
                        '}{'+
                            '\\css{\\grp{\\html{$rd}}{\\sign{-}}{\\html{$answer}}{\\sign{=}}{\\inputcash{$secondInAnswer}}{bottom-marg}'+
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
						'}}{well}',
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
            }
        },
        data = [
            { //1
                problem: 'We dont know what we are doing yet', 
                template: 'placeholder'
            },
            {  //2
                problem: 'The owner of Appliances For You bought a refrigerator from the manufacturer for $420. If she marked up the price $260.40, what was her percent markup?',
                round: '',
				inAnswer: '62',
				answer: '62', template: 'percent',  
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: 'x', rn: '260.40', 
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
                ld: '100', rd: 'x', 
                solution: dataUtils.pre('\\grp{\\html{100}}{\\html{&#149;}}{\\html{260.40}}{css{\\html{\xF7}}{bigger}}{\\html{62}}'),
                xtext:'',
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"]],
            },
            {  //4
                problem: 'We dont know what we are doing yet', 
                template: 'placeholder'
            },
            {  //5
                problem: 'A local grocery store bought broccoli from a local farmer for $1.50 per pound. If the store increased the price by $0.39 a pound, what was the percent markup?',
                round: '',
                xtext:'',
                answer: '26', template: 'percent',  
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: 'x', rn: '0.39', 
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
                ld: '100', rd: 'x', 
                solution: dataUtils.pre('\\grp{\\html{100}}{\\html{&#149;}}{\\html{0.39}}{css{\\html{\xF7}}{bigger}}{\\html{26}}'),
                xtext:'',
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"]],
            },
            {  //7to be done
                problem: 'Last year City A had a rainfall of about 28 inches. This year the rainfall increased by 6.16 inches. What was the percent increase in the amount of rainfall received this year?',
                round: '',
                answer: '22', template: 'percent', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: 'x', rn: '6.16', 
                ld: '100', rd: '28', 
                solution: dataUtils.pre('\\grp{\\html{100}}{\\html{&#149;}}{\\html{6.16}}{css{\\html{\xF7}}{bigger}}{\\html{28}}'),
                xtext: '',
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"]],
            },
            {  //8
                problem: 'A clothing store couldn’t sell its summer dresses for $32, so it marked them down $11.20. What was the percent markdown?',
                round: '',
                xtext:'',
                answer: '35', template: 'percent', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: 'x', rn: '11.20', 
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
                ld: '100', rd: 'x', 
                solution: dataUtils.pre('\\grp{\\html{100}}{\\html{&#149;}}{\\html{11.20}}{css{\\html{\xF7}}{bigger}}{\\html{35}}'),
                xtext: '',
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"]],
            },
            {  //10to be done
                problem: 'Margaret received a raise in her salary of $103.50 per month. If this was a 4.5% increase, how much money did Margaret earn per month before her raise? ',
                round: '',
                inAnswer: '2300.00',
                answer: '2300', template: 'dollar',
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: '4.5', rn: '103.50', 
                ld: '100', rd: 'x', 
                solution: dataUtils.pre('\\grp{\\html{100}}{\\html{&#149;}}{\\html{103.50}}{css{\\html{\xF7}}{bigger}}{\\html{4.5}}'),
                xtext: '',
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"]],
            },
            {  //11
                problem: 'The price of a box of organic strawberries was selling for $4.29. If the price was reduced by$1.29 per box, what was the percent markdown? Round answer to the nearest tenth of a percent.',
                round: 'Round answer to the nearest tenth of a percent.',
                answer: '30.1', template: 'percent', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: 'x', rn: '1.29', 
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
                ld: '100', rd: 'x', 
                solution: dataUtils.pre('\\grp{\\html{100}}{\\html{&#149;}}{\\html{18.50}}{css{\\html{\xF7}}{bigger}}{\\html{45}}'),
                xtext: '',
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"]],
            },
            
            {  //13
                problem: 'A store originally priced a sofa at $840. When it didn’t sell the owner marked down the price 25%. When it still didn’t sell, he marked it down another 20% off the discounted price. For what price did the owner finally sell the sofa?',
                round: '',
                inAnswer: '210.00',
                secondInAnswer: '630.00',
                secondAnswer: '630',
		        	answer: '210', template: 'dollarDouble', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: '25', rn: 'x', 
                ld: '100', rd: '840', 
                solution: dataUtils.pre('\\grp{\\html{25}}{\\html{&#149;}}{\\html{840}}{css{\\html{\xF7}}{bigger}}{\\html{100}}'),
                xtext: '',
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"]],
                secondWBText: 'After the first discount what is the price of the sofa?'
            },
            {  //14
                problem: 'A baseball team had an increase in average attendance of 2,706 people per game this year.If this represented a 12% increase, what was the average attendance at games last year?',
                round: 'Round to the nearest person.',
                inAnswer: '22550',
                answer: '22550', template: 'percent',
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: '12', rn: '2706', 
                ld: '100', rd: 'x', 
                solution: dataUtils.pre('\\grp{\\html{100}}{\\html{&#149;}}{\\html{2706}}{css{\\html{\xF7}}{bigger}}{\\html{12}}'),
				xtext: '',
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"]],
            },
            {  //15
                problem: 'A professional baseball team had an average of 22,548 people attend each of its games lastyear. This year there is an increase in average attendance of 2,706 people per game. What is the percent increase in the team’s average attendance?',
                round: 'Round to the nearest whole percent.',
				inAnswer: '12',
                answer: '12', template: 'percent', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: 'x', rn: '2706', 
                ld: '100', rd: '22548', 
                solution: dataUtils.pre('\\grp{\\html{100}}{\\html{&#149;}}{\\html{2706}}{css{\\html{\xF7}}{bigger}}{\\html{22548}}'),
                xtext: '',
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"]],
            },
            {  //16
                problem: 'A professional baseball team had an average of 22,548 people attend each of its games last year. This year’s average attendance is 25,254. What is the percent increase in the team’s average attendance?',
                round: 'Round to the nearest whole percent.',
				inAnswer: '12',
                xtext:'We get the Amount (Part Quantity) by subtracting average attendance from this year\'s <br><br>25254 - 22548 = 2706<br><br>',
                answer: '12', template: 'percent',
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: 'x', rn: '2706', 
                ld: '100', rd: '22548', 
                solution: dataUtils.pre('\\grp{\\html{100}}{\\html{&#149;}}{\\html{2706}}{css{\\html{\xF7}}{bigger}}{\\html{22548}}'),
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"]],
            },
            
            {  //17
                problem: 'At the local community college, 6,840 students were enrolled last semester. This semester there was a 6% increase in enrollment. How many more students are enrolled at the college this semester than last year?',
                round: 'Round to the nearest whole student.',
                inAnswer: '410',
                answer: '410', template: 'percent', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: '6', rn: 'x', 
                ld: '100', rd: '6840', 
                solution: dataUtils.pre('\\grp{\\html{6}}{\\html{&#149;}}{\\html{6840}}{css{\\html{\xF7}}{bigger}}{\\html{100}}'),
				xtext: '',
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"]],
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
