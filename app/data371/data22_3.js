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
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"]],
            },
            
            {  //4a -13
                problem: 'A tuxedo rental was regularly priced at $85. The dealer put it on sale at a 20% discount. What is the amount of the discount?',
                round: '',
                inAnswer: '17.00',
				answer: '17', template: 'dollar', pre_symbol: '$', post_symbol: '', 
                key: 'rn', keyf: 'ln', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: '20', rn: 'x', 
                ld: '100', rd: '85', 
                solution: dataUtils.pre('\\grp{\\html{20}}{\\html{&#149;}}{\\html{85}}{css{\\html{\xF7}}{bigger}}{\\html{100}}'),
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"]],
            },
            {  //4b -14
                problem: 'A tuxedo rental was discounted 20%. The amount of the discount was $17. What was the original price of the tuxedo rental before the discount?',
                round: '',
                inAnswer: '85.00',
                answer: '85', template: 'dollar', pre_symbol: '$', post_symbol: '', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: '20', rn: '17', 
                ld: '100', rd: 'x', 
                solution: dataUtils.pre('\\grp{\\html{100}}{\\html{&#149;}}{\\html{17}}{css{\\html{\xF7}}{bigger}}{\\html{20}}'),
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"]],
            },
            {  //4c -15
                problem: 'A tuxedo rental was regularly priced at $85 was discounted $17. What was the percent discount?',
                round: '',
                answer: '20', template: 'percent', pre_symbol: '', post_symbol: '%', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: 'x', rn: '17', 
                ld: '100', rd: '85', 
                solution: dataUtils.pre('\\grp{\\html{100}}{\\html{&#149;}}{\\html{17}}{css{\\html{\xF7}}{bigger}}{\\html{85}}'),
                xtext: '',
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"]],
            },
            {  //4d -16
                problem: 'A tuxedo rental that was regularly priced at $85 is now on sale for $68. What was the percent discount?',
                round: '',
                xtext:'We get the Amount (Part Quantity) by subtracting the sale price of the tuxedo from the regular price. <br><br>85 - 68 = 17<br><br>',
                answer: '20', template: 'percent', pre_symbol: '', post_symbol: '%', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: 'x', rn: '17', 
                ld: '100', rd: '85', 
                solution: dataUtils.pre('\\grp{\\html{100}}{\\html{&#149;}}{\\html{17}}{css{\\html{\xF7}}{bigger}}{\\html{85}}'),
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"]],
            },
            
            {  //5a -17
                problem: 'A department store was selling all its clothing at a 15% discount. Mika bought clothing that normally would have cost $69.75. What is the amount of the discount?',
                round: 'Round the answer to the nearest cent.',
                inAnswer: '10.46',
                answer: '10.46', template: 'dollar', pre_symbol: '$', post_symbol: '', 
                key: 'rn', keyf: 'ln', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: '15', rn: 'x', 
                ld: '100', rd: '69.75', 
                solution: dataUtils.pre('\\grp{\\html{15}}{\\html{&#149;}}{\\html{69.75}}{css{\\html{\xF7}}{bigger}}{\\html{100}}'),
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"]],
            },
            {  //5b -18
                problem: 'A department store was selling all its clothing at a 15% discount. Mika was discounted $10.46 on the clothing she purchased. What would the price of the clothing have been without the discount?',
                round: 'Round the answer to the nearest cent.',
                inAnswer: '69.73',
                answer: '69.73', template: 'dollar', pre_symbol: '$', post_symbol: '', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: '15', rn: '10.46', 
                ld: '100', rd: 'x', 
                solution: dataUtils.pre('\\grp{\\html{100}}{\\html{&#149;}}{\\html{10.46}}{css{\\html{\xF7}}{bigger}}{\\html{15}}'),
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"]],
            },
            {  //5c -19
                problem: 'Mika bought clothing that normally would have cost $69.75, but was discounted $10.46. What was the percent discount?',
                round: 'Round the answer to the nearest whole percent.',
                answer: '15', template: 'percent', pre_symbol: '', post_symbol: '%', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: 'x', rn: '10.46', 
                ld: '100', rd: '69.75', 
                solution: dataUtils.pre('\\grp{\\html{100}}{\\html{&#149;}}{\\html{10.46}}{css{\\html{\xF7}}{bigger}}{\\html{69.75}}'),
                xtext: '',
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"]],
            },
            {  //5d -20
                problem: 'Mika bought clothing that normally would have cost $69.75, but was now on sale for $59.29. What was the percent discount?',
                round: 'Round the answer to the nearest whole percent.',
                xtext:'We get the Amount (Part Quantity) by subtracting the sale price of the clothing from the regular price. <br><br>69.75 - 59.29 = 10.46<br><br>',
                answer: '15', template: 'percent', pre_symbol: '', post_symbol: '%', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: 'x', rn: '10.46', 
                ld: '100', rd: '69.75', 
                solution: dataUtils.pre('\\grp{\\html{100}}{\\html{&#149;}}{\\html{10.46}}{css{\\html{\xF7}}{bigger}}{\\html{69.75}}'),
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"]],
            },
            
            {  //6a -21
                problem: 'Concert tickets that cost $62.50 were put on sale at a 35% discount. What is the amount of the discount?',
                round: 'Round the answer to the nearest cent.',
                inAnswer: '21.88',
                answer: '21.88', template: 'dollar', pre_symbol: '$', post_symbol: '', 
                key: 'rn', keyf: 'ln', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: '35', rn: 'x', 
                ld: '100', rd: '62.50', 
                solution: dataUtils.pre('\\grp{\\html{35}}{\\html{&#149;}}{\\html{62.50}}{css{\\html{\xF7}}{bigger}}{\\html{100}}'),
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"]],
            },
            {  //6b -22
                problem: 'Concert tickets were discounted 35%. The amount of the discount was $21.88. What was the original price of the tickets before the discount?',
                round: 'Round the answer to the nearest cent.',
                inAnswer: '62.51',
                answer: '62.51', template: 'dollar', pre_symbol: '$', post_symbol: '', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: '35', rn: '21.88', 
                ld: '100', rd: 'x', 
                solution: dataUtils.pre('\\grp{\\html{100}}{\\html{&#149;}}{\\html{21.88}}{css{\\html{\xF7}}{bigger}}{\\html{35}}'),
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"]],
            },
            {  //6c -23
                problem: 'Concert tickets that were priced at $62.50 were discounted $21.88. What was the percent discount?',
                round: 'Round the answer to the nearest whole percent.',
                answer: '35', template: 'percent', pre_symbol: '', post_symbol: '%', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: 'x', rn: '21.88', 
                ld: '100', rd: '62.50', 
                solution: dataUtils.pre('\\grp{\\html{100}}{\\html{&#149;}}{\\html{21.88}}{css{\\html{\xF7}}{bigger}}{\\html{62.50}}'),
                xtext: '',
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"]],
            },
            {  //6d -24
                problem: 'Concert tickets that were selling for $62.50 were now costing only $40.62. What was the percent discount?',
                round: 'Round the answer to the nearest whole percent.',
                xtext:'We get the Amount (Part Quantity) by subtracting the sale price of the concert tickets from the regular price. <br><br>62.50 - 40.62 = 21.88<br><br>',
                answer: '35', template: 'percent', pre_symbol: '', post_symbol: '%', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: 'x', rn: '21.88', 
                ld: '100', rd: '62.50', 
                solution: dataUtils.pre('\\grp{\\html{100}}{\\html{&#149;}}{\\html{21.88}}{css{\\html{\xF7}}{bigger}}{\\html{62.50}}'),
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"]],
            },
            
            {  //7a -25
                problem: 'A sports store was selling all its merchandise at a 25% discount. Gunter bought equipment that normally would have cost $126.58. How much money did he save because of the discount?',
                round: 'Round the answer to the nearest cent.',
                inAnswer: '31.65',
                answer: '31.65', template: 'dollar', pre_symbol: '$', post_symbol: '', 
                key: 'rn', keyf: 'ln', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: '25', rn: 'x', 
                ld: '100', rd: '126.58', 
                solution: dataUtils.pre('\\grp{\\html{25}}{\\html{&#149;}}{\\html{126.58}}{css{\\html{\xF7}}{bigger}}{\\html{100}}'),
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"]],
            },
            {  //7b -26
                problem: 'A sports store was selling all its merchandise at a 25% discount. Gunter was discounted $31.65 on the clothing he purchased. What would the price of the equipment have been without the discount?',
                round: 'Round the answer to the nearest cent.',
                inAnswer: '126.60',
                answer: '126.60', template: 'dollar', pre_symbol: '$', post_symbol: '', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: '25', rn: '31.65', 
                ld: '100', rd: 'x', 
                solution: dataUtils.pre('\\grp{\\html{100}}{\\html{&#149;}}{\\html{31.65}}{css{\\html{\xF7}}{bigger}}{\\html{25}}'),
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"]],
            },
            {  //7c -27
                problem: 'Gunter bought equipment that normally would have cost $126.58, but was discounted $31.65. What was the percent discount?',
                round: 'Round the answer to the nearest whole percent.',
                answer: '25', template: 'percent', pre_symbol: '', post_symbol: '%', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: 'x', rn: '31.65', 
                ld: '100', rd: '126.58', 
                solution: dataUtils.pre('\\grp{\\html{100}}{\\html{&#149;}}{\\html{31.65}}{css{\\html{\xF7}}{bigger}}{\\html{126.58}}'),
                xtext: '',
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"]],
            },
            {  //7d -28
                problem: 'Gunter bought equipment that normally would have cost $126.58, but was now on sale for $94.93. What was the percent discount?',
                round: 'Round the answer to the nearest whole percent.',
                xtext:'We get the Amount (Part Quantity) by subtracting the sale price of the equipment from the regular price. <br><br>126.58 - 94.93 = 31.65<br><br>',
                answer: '25', template: 'percent', pre_symbol: '', post_symbol: '%', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: 'x', rn: '31.65', 
                ld: '100', rd: '126.58', 
                solution: dataUtils.pre('\\grp{\\html{100}}{\\html{&#149;}}{\\html{31.65}}{css{\\html{\xF7}}{bigger}}{\\html{126.58}}'),
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"]],
            },
            
            {  //8a -29
                problem: 'A student bus pass is regularly priced at $49. For one week only the county now offered to sell the bus passes at a 18% discount. What is the amount of the discount?',
                round: '',
                inAnswer: '8.82',
                answer: '8.82', template: 'dollar', pre_symbol: '$', post_symbol: '', 
                key: 'rn', keyf: 'ln', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: '18', rn: 'x', 
                ld: '100', rd: '49', 
                solution: dataUtils.pre('\\grp{\\html{18}}{\\html{&#149;}}{\\html{49}}{css{\\html{\xF7}}{bigger}}{\\html{100}}'),
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"]],
            },
            {  //8b 30
                problem: 'A student bus pass is discounted 18%. The amount of the discount is $8.82. What was the original price of the bus pass before the discount?',
                round: '',
                inAnswer: '49.00',
                answer: '49', template: 'dollar', pre_symbol: '$', post_symbol: '', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: '18', rn: '8.82', 
                ld: '100', rd: 'x', 
                solution: dataUtils.pre('\\grp{\\html{100}}{\\html{&#149;}}{\\html{8.82}}{css{\\html{\xF7}}{bigger}}{\\html{18}}'),
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"]],
            },
            {  //8c -31
                problem: 'A student bus pass is regularly priced at $49, but was now discounted $8.82. What was the percent discount?',
                round: '',
                answer: '18', template: 'percent', pre_symbol: '', post_symbol: '%', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: 'x', rn: '8.82', 
                ld: '100', rd: '49', 
                solution: dataUtils.pre('\\grp{\\html{100}}{\\html{&#149;}}{\\html{8.82}}{css{\\html{\xF7}}{bigger}}{\\html{49}}'),
                xtext: '',
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"]],
            },
            {  //8d -32
                problem: 'A student bus pass that is regularly priced at $49 is now on sale for $40.18. What is the percent discount?',
                round: '',
                xtext:'We get the Amount (Part Quantity) by subtracting the sale price of the student bus pass from the regular price. <br><br>49 - 40.18 = 8.82<br><br>',
                answer: '18', template: 'percent', pre_symbol: '', post_symbol: '%', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: 'x', rn: '8.82', 
                ld: '100', rd: '49', 
                solution: dataUtils.pre('\\grp{\\html{100}}{\\html{&#149;}}{\\html{8.82}}{css{\\html{\xF7}}{bigger}}{\\html{49}}'),
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"]],
            },
            
            {  //9a -33
                problem: 'Concert tickets that cost $55 were put on sale at a 28% discount. What is the amount of the discount?',
                round: '',
                inAnswer: '15.40',
                answer: '15.40', template: 'dollar', pre_symbol: '$', post_symbol: '', 
                key: 'rn', keyf: 'ln', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: '28', rn: 'x', 
                ld: '100', rd: '55', 
                solution: dataUtils.pre('\\grp{\\html{28}}{\\html{&#149;}}{\\html{55}}{css{\\html{\xF7}}{bigger}}{\\html{100}}'),
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"]],
            },
            {  //9b -34
                problem: 'Concert tickets were discounted 28%. The amount of the discount was $15.40. What was the original price of the tickets before the discount?',
                round: '',
                inAnswer: '55.00',
                answer: '55', template: 'dollar', pre_symbol: '$', post_symbol: '', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: '28', rn: '15.40', 
                ld: '100', rd: 'x', 
                solution: dataUtils.pre('\\grp{\\html{100}}{\\html{&#149;}}{\\html{15.40}}{css{\\html{\xF7}}{bigger}}{\\html{28}}'),
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"]],
            },
            {  //9c -35
                problem: 'Concert tickets that were priced at $55 were discounted $15.40. What was the percent discount?',
                round: '',
                answer: '28', template: 'percent', pre_symbol: '', post_symbol: '%', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: 'x', rn: '15.40', 
                ld: '100', rd: '55', 
                solution: dataUtils.pre('\\grp{\\html{100}}{\\html{&#149;}}{\\html{15.40}}{css{\\html{\xF7}}{bigger}}{\\html{55}}'),
                xtext: '',
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"]],
            },
            {  //9d -36
                problem: 'Concert tickets that were selling for $55 were now costing only $39.60. What was the percent discount?',
                round: '',
                xtext:'We get the Amount (Part Quantity) by subtracting the sale price of the concert tickets from the regular price. <br><br>55 - 39.60 = 15.40<br><br>',
                answer: '28', template: 'percent', pre_symbol: '', post_symbol: '%', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: 'x', rn: '15.40', 
                ld: '100', rd: '55', 
                solution: dataUtils.pre('\\grp{\\html{100}}{\\html{&#149;}}{\\html{15.40}}{css{\\html{\xF7}}{bigger}}{\\html{55}}'),
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
