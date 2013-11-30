/*global angular */

angular.module('mathSkills').service('data22_3', ['dataUtils', function (dataUtils) {
    var desc = {
            title: '22.3 Increases & Decreases',
            path: '22.3-increases-and-decreases',
            children: []
        },
        template = {
            dollar: {
                
                title: 'Discounts',
                children: [{
                    title: 'Main Answer',
                    children: [{
                        problem: '\\html{$problem<br><br><span class="blue-text">$round</span>}',
                        answer: '\\grp{\\html{$pre_symbol}}{\\css{\\inputcash{$inAnswer}}{width200px}}',
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
										'{\\str{$pre_symbol}}'+
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
                            '\\choose{[\\html{},\\css{\\grp{\\html{$pre_symbol}}{\\html{$answer}}}{proportion-application}]}{$$previousCorrect}'+
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
                        answer: '\\grp{\\css{\\input{$answer}}{width200px}}{\\html{$post_symbol}}',
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
										'{\\str{$post_symbol}}'+
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
                            '\\choose{[\\html{},\\css{\\grp{\\html{$answer}}{\\html{$post_symbol}}}{proportion-application}]}{$$previousCorrect}'+
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
            {  //1a -1
                problem: 'Last year the bird population on a small island in the Pacific Ocean was 240. This year the population increased 5%. How many more birds are on the island this year than last year?',
                round: '',
				inAnswer: '12',
				answer: '12', template: 'percent', post_symbol: '', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: '5', rn: 'x', 
                ld: '100', rd: '240', 
                solution: dataUtils.pre('\\grp{\\html{5}}{\\html{&#149;}}{\\html{240}}{css{\\html{\xF7}}{bigger}}{\\html{100}}'),
                xtext:'',
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"]],
            },
            {  //1b -2
                problem: 'The bird population on a small island in the Pacific Ocean grew by 12 birds this year. This was a 5% increase in the bird population. What was the bird population last year?',
                round: '',
                inAnswer: '240',
                answer: '240', template: 'percent', post_symbol: '', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: '5', rn: '12', 
                ld: '100', rd: 'x', 
                solution: dataUtils.pre('\\grp{\\html{100}}{\\html{&#149;}}{\\html{12}}{css{\\html{\xF7}}{bigger}}{\\html{5}}'),
                xtext:'',
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"]],
            },
            {  //1c -3
                problem: 'Last year the bird population on a small island in the Pacific Ocean was 240. This year the population increased by 12 birds. What was the percent increase in the number of birds?',
                round: '',
                answer: '5', template: 'percent', post_symbol: '%', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: 'x', rn: '12', 
                ld: '100', rd: '240', 
                solution: dataUtils.pre('\\grp{\\html{100}}{\\html{&#149;}}{\\html{12}}{css{\\html{\xF7}}{bigger}}{\\html{240}}'),
                xtext: '',
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"]],
            },
            {  //1d -4
                problem: 'Last year the bird population on a small island in the Pacific Ocean was 240. This year the population is 252 birds. What was the percent increase in the number of birds living on the island?',
                round: '',
                xtext:'We get the Amount (Part Quantity) by subtracting last year\'s bird population from this year\'s population. <br><br>252 - 240 = 12<br><br>',
                answer: '5', template: 'percent', pre_symbol: '', post_symbol: '%', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: 'x', rn: '12', 
                ld: '100', rd: '240', 
                solution: dataUtils.pre('\\grp{\\html{100}}{\\html{&#149;}}{\\html{12}}{css{\\html{\xF7}}{bigger}}{\\html{240}}'),
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"]],
            },
            
            {  //2a -5
                problem: 'Last year City A had a rainfall of about 28 inches. This year’s rainfall increased 22%. How many more inches of rain did the city receive this year than last year?',
                round: '',
                inAnswer: '6.16',
                answer: '6.16', template: 'percent', post_symbol: '', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: '22', rn: 'x', 
                ld: '100', rd: '28', 
                solution: dataUtils.pre('\\grp{\\html{28}}{\\html{&#149;}}{\\html{22}}{css{\\html{\xF7}}{bigger}}{\\html{100}}'),
                xtext:'',
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"]],
            },
            {  //2b -6
                problem: 'City A received 6.16 inches of rain more this year than last year. This was a 22% increase over the amount of rain received last year. How much rain did City A receive last year?',
                round: '',
                inAnswer: '28',
                answer: '28', template: 'percent', post_symbol: '', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: '22', rn: '6.16', 
                ld: '100', rd: 'x', 
                solution: dataUtils.pre('\\grp{\\html{100}}{\\html{&#149;}}{\\html{6.16}}{css{\\html{\xF7}}{bigger}}{\\html{22}}'),
                xtext:'',
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"]],
            },
            {  //2c -7
                problem: 'Last year City A had a rainfall of about 28 inches. This year the rainfall increased by 6.16 inches. What was the percent increase in the amount of rainfall received this year?',
                round: '',
                answer: '22', template: 'percent', post_symbol: '%', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: 'x', rn: '6.16', 
                ld: '100', rd: '28', 
                solution: dataUtils.pre('\\grp{\\html{100}}{\\html{&#149;}}{\\html{6.16}}{css{\\html{\xF7}}{bigger}}{\\html{28}}'),
                xtext: '',
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"]],
            },
            {  //2d -8
                problem: 'City A received 28 inches of rain last year. This year it received 34.16 inches. What was the percent increase in the amount of rainfall received this year?',
                round: '',
                xtext:'We get the Amount (Part Quantity) by subtracting last year\'s rainfall from this year\'s. <br><br>34.16 - 28 = 6.16<br><br>',
                answer: '22', template: 'percent', post_symbol: '%', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: 'x', rn: '6.16', 
                ld: '100', rd: '28', 
                solution: dataUtils.pre('\\grp{\\html{100}}{\\html{&#149;}}{\\html{6.16}}{css{\\html{\xF7}}{bigger}}{\\html{28}}'),
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"]],
            },
            
            {  //3a -9
                problem: 'Margaret had a monthly salary of $2,300. If she received a 4.5% increase, how much more money did she earn per month now?',
                round: '',
                inAnswer: '103.50',
                answer: '103.50', template: 'dollar', pre_symbol: '$', post_symbol: '', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: '4.5', rn: 'x', 
                ld: '100', rd: '2300', 
                solution: dataUtils.pre('\\grp{\\html{4.5}}{\\html{&#149;}}{\\html{2300}}{css{\\html{\xF7}}{bigger}}{\\html{100}}'),
                xtext: '',
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"]],
            },
            {  //3b -10
                problem: 'Margaret received a raise in her salary of $103.50 per month. If this was a 4.5% increase, how much money did Margaret earn per month before her raise? ',
                round: '',
                inAnswer: '2300.00',
                answer: '2300', template: 'dollar', pre_symbol: '$', post_symbol: '', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: '4.5', rn: '103.50', 
                ld: '100', rd: 'x', 
                solution: dataUtils.pre('\\grp{\\html{100}}{\\html{&#149;}}{\\html{103.50}}{css{\\html{\xF7}}{bigger}}{\\html{4.5}}'),
                xtext: '',
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"]],
            },
            {  //3c -11
                problem: 'Margaret had a monthly salary of $2,300. If she received a salary increase of $103.50 per month, by what percent did her salary increase?',
                round: '',
                answer: '4.5', template: 'percent', post_symbol: '%', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: 'x', rn: '103.50', 
                ld: '100', rd: '2300', 
                solution: dataUtils.pre('\\grp{\\html{100}}{\\html{&#149;}}{\\html{103.50}}{css{\\html{\xF7}}{bigger}}{\\html{2300}}'),
                xtext: '',
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"]],
            },
            {  //3d -12
                problem: 'Margaret had a monthly salary of $2,300. After receiving an increase, she now earned $2,403.50 per month. What was the percent increase of her salary?',
                round: '',
                xtext:'We get the Amount (Part Quantity) by subtracting last year\'s monthly salary from this year\'s. <br><br>2403.50 - 2300 = 103.50<br><br>',
                answer: '4.5', template: 'percent', pre_symbol: '', post_symbol: '%', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: 'x', rn: '103.50', 
                ld: '100', rd: '2300', 
                solution: dataUtils.pre('\\grp{\\html{100}}{\\html{&#149;}}{\\html{103.50}}{css{\\html{\xF7}}{bigger}}{\\html{2300}}'),
                xtext: '',
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"]],
            },
            
            {  //4a -13
                problem: 'A professional baseball team had an average of 22,548 people attend each of its games last year. This year’s average attendance is 12% higher. On average, how many more people attend a game this year over last year?',
                round: 'Round to the nearest person.',
                inAnswer: '2706',
				answer: '2706', template: 'percent', post_symbol: '', 
                key: 'rn', keyf: 'ln', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: '12', rn: 'x', 
                ld: '100', rd: '22548', 
                solution: dataUtils.pre('\\grp{\\html{12}}{\\html{&#149;}}{\\html{22548}}{css{\\html{\xF7}}{bigger}}{\\html{100}}'),
                xtext: '',
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"]],
            },
            {  //4b -14
                problem: 'A baseball team had an increase in average attendance of 2,706 people per game this year.If this represented a 12% increase, what was the average attendance at games last year?',
                round: 'Round to the nearest person.',
                inAnswer: '22550',
                answer: '22550', template: 'percent', post_symbol: '', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: '12', rn: '2706', 
                ld: '100', rd: 'x', 
                solution: dataUtils.pre('\\grp{\\html{100}}{\\html{&#149;}}{\\html{2706}}{css{\\html{\xF7}}{bigger}}{\\html{12}}'),
				xtext: '',
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"]],
            },
            {  //4c -15
                problem: 'A professional baseball team had an average of 22,548 people attend each of its games lastyear. This year there is an increase in average attendance of 2,706 people per game. What is the percent increase in the team’s average attendance?',
                round: 'Round to the nearest whole percent.',
				inAnswer: '12',
                answer: '12', template: 'percent', post_symbol: '%', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: 'x', rn: '2706', 
                ld: '100', rd: '22548', 
                solution: dataUtils.pre('\\grp{\\html{100}}{\\html{&#149;}}{\\html{2706}}{css{\\html{\xF7}}{bigger}}{\\html{22548}}'),
                xtext: '',
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"]],
            },
            {  //4d -16
                problem: 'A professional baseball team had an average of 22,548 people attend each of its games last year. This year’s average attendance is 25,254. What is the percent increase in the team’s average attendance?',
                round: 'Round to the nearest whole percent.',
				inAnswer: '12',
                xtext:'We get the Amount (Part Quantity) by subtracting average attendance from this year\'s <br><br>25254 - 22548 = 2706<br><br>',
                answer: '12', template: 'percent', post_symbol: '%', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: 'x', rn: '2706', 
                ld: '100', rd: '22548', 
                solution: dataUtils.pre('\\grp{\\html{100}}{\\html{&#149;}}{\\html{2706}}{css{\\html{\xF7}}{bigger}}{\\html{22548}}'),
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"]],
            },
            
            {  //5a -17
                problem: 'At the local community college, 6,840 students were enrolled last semester. This semester there was a 6% increase in enrollment. How many more students are enrolled at the college this semester than last year?',
                round: 'Round to the nearest whole student.',
                inAnswer: '410',
                answer: '410', template: 'percent', post_symbol: '', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: '6', rn: 'x', 
                ld: '100', rd: '6840', 
                solution: dataUtils.pre('\\grp{\\html{6}}{\\html{&#149;}}{\\html{6840}}{css{\\html{\xF7}}{bigger}}{\\html{100}}'),
				xtext: '',
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"]],
            },
            {  //5b -18
                problem: 'A local community college had an increase in enrollment of 410 students this semester from last semester. If this was a 6% increase, how many students had been enrolled in the college last semester?',
				round: 'Round to the nearest whole student.',
                inAnswer: '6833',
                answer: '6833', template: 'percent', post_symbol: '', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: '6', rn: '410', 
                ld: '100', rd: 'x', 
                solution: dataUtils.pre('\\grp{\\html{100}}{\\html{&#149;}}{\\html{410}}{css{\\html{\xF7}}{bigger}}{\\html{6}}'),
				xtext: '',
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"]],
            },
            {  //5c -19
                problem: 'At the local community college, 6,840 students were enrolled last semester. This semester there was an increase of 410 students. What was the percent increase in enrolled students this semester?',
				round: 'Round to the nearest whole percent.',
                inAnswer: '6',
                answer: '6', template: 'percent', post_symbol: '%', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: 'x', rn: '410', 
                ld: '100', rd: '6840', 
                solution: dataUtils.pre('\\grp{\\html{100}}{\\html{&#149;}}{\\html{410}}{css{\\html{\xF7}}{bigger}}{\\html{6840}}'),
                xtext: '',
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"]],
            },
            {  //5d -20
                problem: 'At the local community college, 6,840 students were enrolled last semester. This semester there are 7,250 students. What was the percent increase in enrolled students this semester?',
				xtext:'We get the Amount (Part Quantity) by subtracting last smester from this semester <br><br> 7250 - 6840 = 410<br><br>',
				round: 'Round to the nearest whole percent.',
                inAnswer: '6',
                answer: '6', template: 'percent', post_symbol: '%',
				dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: 'x', rn: '410', 
                ld: '100', rd: '6840', 
                solution: dataUtils.pre('\\grp{\\html{100}}{\\html{&#149;}}{\\html{410}}{css{\\html{\xF7}}{bigger}}{\\html{6840}}'),
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"]],
            },
            
            {  //1a -21
                problem: 'Last year the bird population on a small island in the Pacific Ocean was 240. This year the population decreased 5%. How many fewer birds are on the island this year than last year?',
                round: 'Round the answer to the nearest cent.',
                inAnswer: '12',
                answer: '12', template: 'percent', post_symbol: '', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: '5', rn: 'x', 
                ld: '100', rd: '240', 
                solution: dataUtils.pre('\\grp{\\html{5}}{\\html{&#149;}}{\\html{240}}{css{\\html{\xF7}}{bigger}}{\\html{100}}'),
                xtext: '',
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"]],
            },
            {  //1b -22
                problem: 'The bird population on a small island in the Pacific Ocean decreased by 12 birds this year. This was a 5% decrease in the bird population. What was the bird population last year?',
                round: 'Round the answer to the nearest cent.',
                inAnswer: '240',
                answer: '240', template: 'percent', post_symbol: '', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: '5', rn: '12', 
                ld: '100', rd: 'x', 
                solution: dataUtils.pre('\\grp{\\html{100}}{\\html{&#149;}}{\\html{12}}{css{\\html{\xF7}}{bigger}}{\\html{5}}'),
                xtext: '',
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"]],
            },
            {  //1c -23
                problem: 'Last year the bird population on a small island in the Pacific Ocean was 240. This year the population decreased by 12 birds. What was the percent decrease in the number of birds? ',
                round: 'Round the answer to the nearest whole percent.',
                answer: '5', template: 'percent', post_symbol: '%', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: 'x', rn: '12', 
                ld: '100', rd: '240', 
                solution: dataUtils.pre('\\grp{\\html{100}}{\\html{&#149;}}{\\html{12}}{css{\\html{\xF7}}{bigger}}{\\html{240}}'),
                xtext: '',
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"]],
            },
            {  //1d -24
                problem: 'Last year the bird population on a small island in the Pacific Ocean was 240. This year the population is 228 birds. What was the percent decrease in the number of birds living on the island?',
                round: 'Round the answer to the nearest whole percent.',
                xtext:'We get the Amount (Part Quantity) by subtracting this year\'s population from the last year\'s population. <br><br>240 - 228 = 12<br><br>',
                answer: '5', template: 'percent', post_symbol: '%', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: 'x', rn: '12', 
                ld: '100', rd: '240', 
                solution: dataUtils.pre('\\grp{\\html{100}}{\\html{&#149;}}{\\html{12}}{css{\\html{\xF7}}{bigger}}{\\html{240}}'),
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"]],
            },
            
            {  //2a -25
                problem: 'Last year City A had a rainfall of about 40 inches. This year’s rainfall decreased 15%. How many fewer inches of rain did the city receive this year than last year?',
                round: 'Round the answer to the nearest cent.',
                inAnswer: '6',
                answer: '6', template: 'percent', post_symbol: '', 
                key: 'rn', keyf: 'ln', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: '15', rn: 'x', 
                ld: '100', rd: '40', 
                solution: dataUtils.pre('\\grp{\\html{15}}{\\html{&#149;}}{\\html{40}}{css{\\html{\xF7}}{bigger}}{\\html{100}}'),
                xtext: '',
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"]],
            },
            {  //2b -26
                problem: 'City A received 6 inches of rain less this year than last year. This was a 15% decrease from the amount of rain received last year. How much rain did City A receive last year?',
                round: 'Round the answer to the nearest cent.',
                inAnswer: '40',
                answer: '40', template: 'percent', post_symbol: '', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: '15', rn: '6', 
                ld: '100', rd: 'x', 
                solution: dataUtils.pre('\\grp{\\html{100}}{\\html{&#149;}}{\\html{6}}{css{\\html{\xF7}}{bigger}}{\\html{15}}'),
                xtext: '',
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"]],
            },
            {  //2c -27
                problem: 'Last year City A had a rainfall of about 40 inches. This year the rainfall decreased by 6 inches. What was the percent decrease in the amount of rainfall received this year?',
                round: 'Round the answer to the nearest whole percent.',
                answer: '15', template: 'percent', post_symbol: '%', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: 'x', rn: '6', 
                ld: '100', rd: '40', 
                solution: dataUtils.pre('\\grp{\\html{100}}{\\html{&#149;}}{\\html{6}}{css{\\html{\xF7}}{bigger}}{\\html{40}}'),
                xtext: '',
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"]],
            },
            {  //2d -28
                problem: 'City A received 40 inches of rain last year. This year it received 34 inches. What was the percent decrease in the amount of rainfall received this year?',
                round: 'Round the answer to the nearest whole percent.',
                xtext:'We get the Amount (Part Quantity) by subtracting this year\'s rain from last year\'s rain. <br><br>40 - 34 = 6<br><br>',
                answer: '15', template: 'percent', post_symbol: '%', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: 'x', rn: '6', 
                ld: '100', rd: '40', 
                solution: dataUtils.pre('\\grp{\\html{100}}{\\html{&#149;}}{\\html{6}}{css{\\html{\xF7}}{bigger}}{\\html{40}}'),
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"]],
            },
            
            {  //3a -29
                problem: 'Margaret had a monthly salary of $2,300. When the company had a bad year financially, she had to take a 2.5% decrease in her pay. How much less money did she earn per month now?',
                round: '',
                inAnswer: '57.50',
                answer: '57.50', template: 'dollar', pre_symbol: '$', post_symbol: '', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: '2.5', rn: 'x', 
                ld: '100', rd: '2300', 
                solution: dataUtils.pre('\\grp{\\html{2.5}}{\\html{&#149;}}{\\html{2300}}{css{\\html{\xF7}}{bigger}}{\\html{100}}'),
                xtext: '',
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"]],
            },
            {  //3b 30
                problem: 'Margaret had to take a decrease in her salary of $57.50 per month. If this was a 2.5% decrease, how much money did Margaret earn per month before her pay decrease?',
                round: '',
                inAnswer: '2300.00',
                answer: '2300', template: 'dollar', pre_symbol: '$', post_symbol: '', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: '2.5', rn: '57.50', 
                ld: '100', rd: 'x', 
                solution: dataUtils.pre('\\grp{\\html{100}}{\\html{&#149;}}{\\html{57.50}}{css{\\html{\xF7}}{bigger}}{\\html{2.5}}'),
                xtext: '',
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"]],
            },
            {  //3c -31
                problem: 'Margaret had a monthly salary of $2,300. If she received a salary decrease of $57.50 per month, by what percent did her salary decrease?',
                round: '',
                answer: '2.5', template: 'percent', pre_symbol: '', post_symbol: '%', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: 'x', rn: '57.50', 
                ld: '100', rd: '2300', 
                solution: dataUtils.pre('\\grp{\\html{100}}{\\html{&#149;}}{\\html{57.50}}{css{\\html{\xF7}}{bigger}}{\\html{2300}}'),
                xtext: '',
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"]],
            },
            {  //3d -32
                problem: 'Margaret had a monthly salary of $2,300. After receiving a decrease, she now earned $2,242.50 per month. What was the percent decrease of her salary?',
                round: '',
                xtext:'We get the Amount (Part Quantity) by subtracting the current salary from the original salary. <br><br>2300 - 2242.50 = 57.50<br><br>',
                answer: '2.5', template: 'percent', pre_symbol: '', post_symbol: '%', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: 'x', rn: '57.50', 
                ld: '100', rd: '2300', 
                solution: dataUtils.pre('\\grp{\\html{100}}{\\html{&#149;}}{\\html{57.50}}{css{\\html{\xF7}}{bigger}}{\\html{2300}}'),
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"]],
            },
            
            {  //7a -33
                problem: 'A store had total weekly sales of $75,000. Last week it had a decrease of 18%. What was the amount of the decrease in the store’s sales last week?',
                round: '',
                inAnswer: '13500.00',
                answer: '13,500', template: 'dollar', pre_symbol: '$', post_symbol: '', 
                key: 'rn', keyf: 'ln', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: '18', rn: 'x', 
                ld: '100', rd: '75000', 
                solution: dataUtils.pre('\\grp{\\html{18}}{\\html{&#149;}}{\\html{75000}}{css{\\html{\xF7}}{bigger}}{\\html{100}}'),
                xtext: '',
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"]],
            },
            {  //7b -34
                problem: 'A store’s sales for last week were $13,500 below the weekly average. If this amount represented an 18% decrease, what were the average total weekly sales?',
                round: '',
                inAnswer: '75000.00',
                answer: '75,000', template: 'dollar', pre_symbol: '$', post_symbol: '', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: '18', rn: '13500', 
                ld: '100', rd: 'x', 
                solution: dataUtils.pre('\\grp{\\html{100}}{\\html{&#149;}}{\\html{13500}}{css{\\html{\xF7}}{bigger}}{\\html{18}}'),
                xtext: '',
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"]],
            },
            {  //7c -35
                problem: 'A store had total weekly sales of $75,000. This week its sales were $13,500 below the weekly average. What was the percent decrease in sales this week compared to the normal sales?',
                round: '',
                answer: '18', template: 'percent', pre_symbol: '', post_symbol: '%', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: 'x', rn: '13500', 
                ld: '100', rd: '75000', 
                solution: dataUtils.pre('\\grp{\\html{100}}{\\html{&#149;}}{\\html{13500}}{css{\\html{\xF7}}{bigger}}{\\html{75000}}'),
                xtext: '',
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"]],
            },
            {  //7d -36
                problem: 'A store had total weekly sales of $75,000. This week its sales were $61,500. What was the percent decrease in sales this week compared to the normal weekly sales?',
                round: '',
                xtext:'We get the Amount (Part Quantity) by subtracting this week\'s sales from the total weekly sales. <br><br>75000 - 61500 = 13500<br><br>',
                answer: '18', template: 'percent', pre_symbol: '', post_symbol: '%', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: 'x', rn: '13500', 
                ld: '100', rd: '75000', 
                solution: dataUtils.pre('\\grp{\\html{100}}{\\html{&#149;}}{\\html{13500}}{css{\\html{\xF7}}{bigger}}{\\html{75000}}'),
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"]],
            },
            {  //8a -37
                problem: 'A marine fish sanctuary was the home for about 180,000 fish last year. It was estimated that the fish population decreased 30% this year. How many fewer fish are there in the marine sanctuary this year than last year?',
                round: '',
                inAnswer: '54000',
                answer: '54000', template: 'percent', pre_symbol: '', post_symbol: '', 
                key: 'rn', keyf: 'ln', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: '30', rn: 'x', 
                ld: '100', rd: '180000', 
                solution: dataUtils.pre('\\grp{\\html{30}}{\\html{&#149;}}{\\html{180000}}{css{\\html{\xF7}}{bigger}}{\\html{100}}'),
                xtext: '',
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"]],
            },
            {  //8b -38
                problem: 'The number of fish in a marine sanctuary decreased by about 54,000 this year. If this represented a 30% decrease, about how many fish lived in the sanctuary last year?',
                round: '',
                inAnswer: '180000',
                answer: '180000', template: 'percent', pre_symbol: '', post_symbol: '', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: '30', rn: '54000', 
                ld: '100', rd: 'x', 
                solution: dataUtils.pre('\\grp{\\html{100}}{\\html{&#149;}}{\\html{54000}}{css{\\html{\xF7}}{bigger}}{\\html{30}}'),
                xtext: '',
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"]],
            },
            {  //8c -39
                problem: 'A marine fish sanctuary was the home for about 180,000 fish last year. It was estimated that the fish population decreased by about 54,000 this year? What was the percent decrease in the number of fish in the sanctuary this year from last year?',
                round: '',
                answer: '30', template: 'percent', pre_symbol: '', post_symbol: '%', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: 'x', rn: '54000', 
                ld: '100', rd: '180000', 
                solution: dataUtils.pre('\\grp{\\html{100}}{\\html{&#149;}}{\\html{54000}}{css{\\html{\xF7}}{bigger}}{\\html{180000}}'),
                xtext: '',
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"]],
            },
            {  //8d -40
                problem: 'A marine fish sanctuary was the home for about 180,000 fish last year. It was estimated that the fish population in the sanctuary was now about 126,000. What was the percent decrease in the number of fish in the sanctuary this year from last year?',
                round: '',
                xtext:'We get the Amount (Part Quantity) by subtracting this year\'s fish population from last year\'s. <br><br>180000 - 126000 = 54000<br><br>',
                answer: '30', template: 'percent', pre_symbol: '', post_symbol: '%', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: 'x', rn: '54000', 
                ld: '100', rd: '180000', 
                solution: dataUtils.pre('\\grp{\\html{100}}{\\html{&#149;}}{\\html{54000}}{css{\\html{\xF7}}{bigger}}{\\html{180000}}'),
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
