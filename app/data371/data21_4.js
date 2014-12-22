/*global angular */

angular.module('mathSkills').service('data21_4', ['dataUtils', function (dataUtils) {
    var desc = {
            title: '21.4 Discounts',
            path: '21.4-discounts',
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
                problem: 'A refrigerator normally sells for $950. The appliance dealer put it on sale at a 14% discount. What is the amount of the discount?',
                round: '',
				inAnswer: '133.00',
				answer: '133', template: 'dollar', pre_symbol: '$', post_symbol: '', 
                key: 'rn', keyf: 'ln', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: '14', rn: 'x', 
                ld: '100', rd: '950', 
                solution: dataUtils.pre('\\grp{\\html{14}}{\\html{&#149;}}{\\html{950}}{css{\\html{\xF7}}{bigger}}{\\html{100}}'),
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"], ["key", "keyf"]],
            },
            {  //1b -2
                problem: 'A refrigerator was discounted 14%. The amount of the discount was $133. What was the original sales price of the refrigerator before the discount?',
                round: '',
                inAnswer: '950.00',
                answer: '950', template: 'dollar', pre_symbol: '$', post_symbol: '', 
                key: 'rd', keyf: 'ld', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: '14', rn: '133', 
                ld: '100', rd: 'x', 
                solution: dataUtils.pre('\\grp{\\html{100}}{\\html{&#149;}}{\\html{133}}{css{\\html{\xF7}}{bigger}}{\\html{14}}'),
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"], ["key", "keyf"]],
            },
            {  //1c -3
                problem: 'A refrigerator that regularly sells for $950 was discounted $133. What was the percent discount?',
                round: '',
                answer: '14', template: 'percent', pre_symbol: '', post_symbol: '%', 
                key: 'rd', keyf: 'ld', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: 'x', rn: '133', 
                ld: '100', rd: '950', 
                solution: dataUtils.pre('\\grp{\\html{100}}{\\html{&#149;}}{\\html{133}}{css{\\html{\xF7}}{bigger}}{\\html{950}}'),
                xtext: '',
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"], ["key", "keyf"]],
            },
            {  //1d -4
                problem: 'A refrigerator that regularly sells for $950 was now on sale for $817. What was the percent discount?',
                round: '',
                xtext:'We get the Amount (Part Quantity) by subtracting the sale price of the refrigerator from the regular price. <br><br>950 - 817 = 133<br><br>',
                answer: '14', template: 'percent', pre_symbol: '', post_symbol: '%', 
                key: 'rd', keyf: 'ld', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: 'x', rn: '133', 
                ld: '100', rd: '950', 
                solution: dataUtils.pre('\\grp{\\html{100}}{\\html{&#149;}}{\\html{133}}{css{\\html{\xF7}}{bigger}}{\\html{950}}'),
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"], ["key", "keyf"]],
            },
            
            {  //2a -5
                problem: 'A textbook normally sells for $34.99. The book seller put it on sale at a 36% discount. What is the amount of the discount?',
                round: 'Round the answer to the nearest cent.',
                inAnswer: '12.60',
                answer: '12.60', template: 'dollar', pre_symbol: '$', post_symbol: '', 
                key: 'rn', keyf: 'ln', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: '36', rn: 'x', 
                ld: '100', rd: '34.99', 
                solution: dataUtils.pre('\\grp{\\html{36}}{\\html{&#149;}}{\\html{34.99}}{css{\\html{\xF7}}{bigger}}{\\html{100}}'),
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"], ["key", "keyf"]],
            },
            {  //2b -6
                problem: 'A textbook was discounted 36%. The amount of the discount was $12.60. What was the original sales price of the book before the discount?',
                round: 'Round the answer to the nearest cent.',
                inAnswer: '35.00',
                answer: '35', template: 'dollar', pre_symbol: '$', post_symbol: '', 
                key: 'rd', keyf: 'ld', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: '36', rn: '12.60', 
                ld: '100', rd: 'x', 
                solution: dataUtils.pre('\\grp{\\html{100}}{\\html{&#149;}}{\\html{12.60}}{css{\\html{\xF7}}{bigger}}{\\html{36}}'),
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"], ["key", "keyf"]],
            },
            {  //2c -7
                problem: 'A textbook that regularly sells for $34.99 was discounted $12.60. What was the percent discount?',
                round: 'Round the answer to the nearest whole percent.',
                answer: '36', template: 'percent', pre_symbol: '', post_symbol: '%', 
                key: 'rd', keyf: 'ld', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: 'x', rn: '12.60', 
                ld: '100', rd: '34.99', 
                solution: dataUtils.pre('\\grp{\\html{100}}{\\html{&#149;}}{\\html{12.60}}{css{\\html{\xF7}}{bigger}}{\\html{34.99}}'),
                xtext: '',
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"], ["key", "keyf"]],
            },
            {  //2d -8
                problem: 'A textbook that regularly sells for $34.99 is now on sale for $22.39. What was the percent discount?',
                round: 'Round the answer to the nearest whole percent.',
                xtext:'We get the Amount (Part Quantity) by subtracting the sale price of the textbook from the regular price. <br><br>34.99 - 22.39 = 12.60<br><br>',
                answer: '36', template: 'percent', pre_symbol: '', post_symbol: '%', 
                key: 'rd', keyf: 'ld', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: 'x', rn: '12.60', 
                ld: '100', rd: '34.99', 
                solution: dataUtils.pre('\\grp{\\html{100}}{\\html{&#149;}}{\\html{12.60}}{css{\\html{\xF7}}{bigger}}{\\html{34.99}}'),
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"], ["key", "keyf"]],
            },
            
            {  //3a -9
                problem: 'A used car was originally priced at $6,400. The dealer put it on sale at a 5.2% discount. What is the amount of the discount?',
                round: '',
                inAnswer: '332.80',
                answer: '332.80', template: 'dollar', pre_symbol: '$', post_symbol: '', 
                key: 'rn', keyf: 'ln', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: '5.2', rn: 'x', 
                ld: '100', rd: '6400', 
                solution: dataUtils.pre('\\grp{\\html{5.2}}{\\html{&#149;}}{\\html{6400}}{css{\\html{\xF7}}{bigger}}{\\html{100}}'),
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"], ["key", "keyf"]],
            },
            {  //3b -10
                problem: 'A used car was discounted 5.2%. The amount of the discount was $332.80. What was the original price of the car before the discount?',
                round: '',
                inAnswer: '6400.00',
                answer: '6400', template: 'dollar', pre_symbol: '$', post_symbol: '', 
                key: 'rd', keyf: 'ld', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: '5.2', rn: '332.80', 
                ld: '100', rd: 'x', 
                solution: dataUtils.pre('\\grp{\\html{100}}{\\html{&#149;}}{\\html{332.80}}{css{\\html{\xF7}}{bigger}}{\\html{5.2}}'),
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"], ["key", "keyf"]],
            },
            {  //3c -11
                problem: 'A used car that was originally priced at $6,400 was discounted $332.80. What was the percent discount?',
                round: '',
                answer: '5.2', template: 'percent', pre_symbol: '', post_symbol: '%', 
                key: 'rd', keyf: 'ld', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: 'x', rn: '332.80', 
                ld: '100', rd: '6400', 
                solution: dataUtils.pre('\\grp{\\html{100}}{\\html{&#149;}}{\\html{332.80}}{css{\\html{\xF7}}{bigger}}{\\html{6400}}'),
                xtext: '',
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"], ["key", "keyf"]],
            },
            {  //3d -12
                problem: 'A used car that was originally priced at $6,400 is now on sale for $6,067.20. What was the percent discount?',
                round: '',
                xtext:'We get the Amount (Part Quantity) by subtracting the sale price of the car from the regular price. <br><br>6400 - 6067.20 = 332.80<br><br>',
                answer: '5.2', template: 'percent', pre_symbol: '', post_symbol: '%', 
                key: 'rd', keyf: 'ld', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: 'x', rn: '332.80', 
                ld: '100', rd: '6400', 
                solution: dataUtils.pre('\\grp{\\html{100}}{\\html{&#149;}}{\\html{332.80}}{css{\\html{\xF7}}{bigger}}{\\html{6400}}'),
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"], ["key", "keyf"]],
            },
            
            {  //4a -13
                problem: 'A tuxedo rental was regularly priced at $85. The shop owner put it on sale at a 20% discount. What is the amount of the discount?',
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
                flip: [[1], ["ln", "rn"], ["ld", "rd"], ["key", "keyf"]],
            },
            {  //4b -14
                problem: 'A tuxedo rental was discounted 20%. The amount of the discount was $17. What was the original price of the tuxedo rental before the discount?',
                round: '',
                inAnswer: '85.00',
                answer: '85', template: 'dollar', pre_symbol: '$', post_symbol: '', 
                key: 'rd', keyf: 'ld', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: '20', rn: '17', 
                ld: '100', rd: 'x', 
                solution: dataUtils.pre('\\grp{\\html{100}}{\\html{&#149;}}{\\html{17}}{css{\\html{\xF7}}{bigger}}{\\html{20}}'),
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"], ["key", "keyf"]],
            },
            {  //4c -15
                problem: 'A tuxedo rental was regularly priced at $85 was discounted $17. What was the percent discount?',
                round: '',
                answer: '20', template: 'percent', pre_symbol: '', post_symbol: '%', 
                key: 'rd', keyf: 'ld', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: 'x', rn: '17', 
                ld: '100', rd: '85', 
                solution: dataUtils.pre('\\grp{\\html{100}}{\\html{&#149;}}{\\html{17}}{css{\\html{\xF7}}{bigger}}{\\html{85}}'),
                xtext: '',
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"], ["key", "keyf"]],
            },
            {  //4d -16
                problem: 'A tuxedo rental that was regularly priced at $85 is now on sale for $68. What was the percent discount?',
                round: '',
                xtext:'We get the Amount (Part Quantity) by subtracting the sale price of the tuxedo from the regular price. <br><br>85 - 68 = 17<br><br>',
                answer: '20', template: 'percent', pre_symbol: '', post_symbol: '%', 
                key: 'rd', keyf: 'ld', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: 'x', rn: '17', 
                ld: '100', rd: '85', 
                solution: dataUtils.pre('\\grp{\\html{100}}{\\html{&#149;}}{\\html{17}}{css{\\html{\xF7}}{bigger}}{\\html{85}}'),
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"], ["key", "keyf"]],
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
                flip: [[1], ["ln", "rn"], ["ld", "rd"], ["key", "keyf"]],
            },
            {  //5b -18
                problem: 'A department store was selling all its clothing at a 15% discount. Mika was discounted $10.46 on the clothing she purchased. What would the price of the clothing have been without the discount?',
                round: 'Round the answer to the nearest cent.',
                inAnswer: '69.73',
                answer: '69.73', template: 'dollar', pre_symbol: '$', post_symbol: '', 
                key: 'rd', keyf: 'ld', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: '15', rn: '10.46', 
                ld: '100', rd: 'x', 
                solution: dataUtils.pre('\\grp{\\html{100}}{\\html{&#149;}}{\\html{10.46}}{css{\\html{\xF7}}{bigger}}{\\html{15}}'),
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"], ["key", "keyf"]],
            },
            {  //5c -19
                problem: 'Mika bought clothing that normally would have cost $69.75, but was discounted $10.46. What was the percent discount?',
                round: 'Round the answer to the nearest whole percent.',
                answer: '15', template: 'percent', pre_symbol: '', post_symbol: '%', 
                key: 'rd', keyf: 'ld', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: 'x', rn: '10.46', 
                ld: '100', rd: '69.75', 
                solution: dataUtils.pre('\\grp{\\html{100}}{\\html{&#149;}}{\\html{10.46}}{css{\\html{\xF7}}{bigger}}{\\html{69.75}}'),
                xtext: '',
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"], ["key", "keyf"]],
            },
            {  //5d -20
                problem: 'Mika bought clothing that normally would have cost $69.75, but was now on sale for $59.29. What was the percent discount?',
                round: 'Round the answer to the nearest whole percent.',
                xtext:'We get the Amount (Part Quantity) by subtracting the sale price of the clothing from the regular price. <br><br>69.75 - 59.29 = 10.46<br><br>',
                answer: '15', template: 'percent', pre_symbol: '', post_symbol: '%', 
                key: 'rd', keyf: 'ld', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: 'x', rn: '10.46', 
                ld: '100', rd: '69.75', 
                solution: dataUtils.pre('\\grp{\\html{100}}{\\html{&#149;}}{\\html{10.46}}{css{\\html{\xF7}}{bigger}}{\\html{69.75}}'),
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"], ["key", "keyf"]],
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
                flip: [[1], ["ln", "rn"], ["ld", "rd"], ["key", "keyf"]],
            },
            {  //6b -22
                problem: 'Concert tickets were discounted 35%. The amount of the discount was $21.88. What was the original price of the tickets before the discount?',
                round: 'Round the answer to the nearest cent.',
                inAnswer: '62.51',
                answer: '62.51', template: 'dollar', pre_symbol: '$', post_symbol: '', 
                key: 'rd', keyf: 'ld', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: '35', rn: '21.88', 
                ld: '100', rd: 'x', 
                solution: dataUtils.pre('\\grp{\\html{100}}{\\html{&#149;}}{\\html{21.88}}{css{\\html{\xF7}}{bigger}}{\\html{35}}'),
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"], ["key", "keyf"]],
            },
            {  //6c -23
                problem: 'Concert tickets that were priced at $62.50 were discounted $21.88. What was the percent discount?',
                round: 'Round the answer to the nearest whole percent.',
                answer: '35', template: 'percent', pre_symbol: '', post_symbol: '%', 
                key: 'rd', keyf: 'ld', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: 'x', rn: '21.88', 
                ld: '100', rd: '62.50', 
                solution: dataUtils.pre('\\grp{\\html{100}}{\\html{&#149;}}{\\html{21.88}}{css{\\html{\xF7}}{bigger}}{\\html{62.50}}'),
                xtext: '',
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"], ["key", "keyf"]],
            },
            {  //6d -24
                problem: 'Concert tickets that were selling for $62.50 were now costing only $40.62. What was the percent discount?',
                round: 'Round the answer to the nearest whole percent.',
                xtext:'We get the Amount (Part Quantity) by subtracting the sale price of the concert tickets from the regular price. <br><br>62.50 - 40.62 = 21.88<br><br>',
                answer: '35', template: 'percent', pre_symbol: '', post_symbol: '%', 
                key: 'rd', keyf: 'ld', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: 'x', rn: '21.88', 
                ld: '100', rd: '62.50', 
                solution: dataUtils.pre('\\grp{\\html{100}}{\\html{&#149;}}{\\html{21.88}}{css{\\html{\xF7}}{bigger}}{\\html{62.50}}'),
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"], ["key", "keyf"]],
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
                flip: [[1], ["ln", "rn"], ["ld", "rd"], ["key", "keyf"]],
            },
            {  //7b -26
                problem: 'A sports store was selling all its merchandise at a 25% discount. Gunter was discounted $31.65 on the clothing he purchased. What would the price of the equipment have been without the discount?',
                round: 'Round the answer to the nearest cent.',
                inAnswer: '126.60',
                answer: '126.60', template: 'dollar', pre_symbol: '$', post_symbol: '', 
                key: 'rd', keyf: 'ld', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: '25', rn: '31.65', 
                ld: '100', rd: 'x', 
                solution: dataUtils.pre('\\grp{\\html{100}}{\\html{&#149;}}{\\html{31.65}}{css{\\html{\xF7}}{bigger}}{\\html{25}}'),
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"], ["key", "keyf"]],
            },
            {  //7c -27
                problem: 'Gunter bought equipment that normally would have cost $126.58, but was discounted $31.65. What was the percent discount?',
                round: 'Round the answer to the nearest whole percent.',
                answer: '25', template: 'percent', pre_symbol: '', post_symbol: '%', 
                key: 'rd', keyf: 'ld', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: 'x', rn: '31.65', 
                ld: '100', rd: '126.58', 
                solution: dataUtils.pre('\\grp{\\html{100}}{\\html{&#149;}}{\\html{31.65}}{css{\\html{\xF7}}{bigger}}{\\html{126.58}}'),
                xtext: '',
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"], ["key", "keyf"]],
            },
            {  //7d -28
                problem: 'Gunter bought equipment that normally would have cost $126.58, but was now on sale for $94.93. What was the percent discount?',
                round: 'Round the answer to the nearest whole percent.',
                xtext:'We get the Amount (Part Quantity) by subtracting the sale price of the equipment from the regular price. <br><br>126.58 - 94.93 = 31.65<br><br>',
                answer: '25', template: 'percent', pre_symbol: '', post_symbol: '%', 
                key: 'rd', keyf: 'ld', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: 'x', rn: '31.65', 
                ld: '100', rd: '126.58', 
                solution: dataUtils.pre('\\grp{\\html{100}}{\\html{&#149;}}{\\html{31.65}}{css{\\html{\xF7}}{bigger}}{\\html{126.58}}'),
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"], ["key", "keyf"]],
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
                flip: [[1], ["ln", "rn"], ["ld", "rd"], ["key", "keyf"]],
            },
            {  //8b 30
                problem: 'A student bus pass is discounted 18%. The amount of the discount is $8.82. What was the original price of the bus pass before the discount?',
                round: '',
                inAnswer: '49.00',
                answer: '49', template: 'dollar', pre_symbol: '$', post_symbol: '', 
                key: 'rd', keyf: 'ld', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: '18', rn: '8.82', 
                ld: '100', rd: 'x', 
                solution: dataUtils.pre('\\grp{\\html{100}}{\\html{&#149;}}{\\html{8.82}}{css{\\html{\xF7}}{bigger}}{\\html{18}}'),
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"], ["key", "keyf"]],
            },
            {  //8c -31
                problem: 'A student bus pass is regularly priced at $49, but was now discounted $8.82. What was the percent discount?',
                round: '',
                answer: '18', template: 'percent', pre_symbol: '', post_symbol: '%', 
                key: 'rd', keyf: 'ld', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: 'x', rn: '8.82', 
                ld: '100', rd: '49', 
                solution: dataUtils.pre('\\grp{\\html{100}}{\\html{&#149;}}{\\html{8.82}}{css{\\html{\xF7}}{bigger}}{\\html{49}}'),
                xtext: '',
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"], ["key", "keyf"]],
            },
            {  //8d -32
                problem: 'A student bus pass that is regularly priced at $49 is now on sale for $40.18. What is the percent discount?',
                round: '',
                xtext:'We get the Amount (Part Quantity) by subtracting the sale price of the student bus pass from the regular price. <br><br>49 - 40.18 = 8.82<br><br>',
                answer: '18', template: 'percent', pre_symbol: '', post_symbol: '%', 
                key: 'rd', keyf: 'ld', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: 'x', rn: '8.82', 
                ld: '100', rd: '49', 
                solution: dataUtils.pre('\\grp{\\html{100}}{\\html{&#149;}}{\\html{8.82}}{css{\\html{\xF7}}{bigger}}{\\html{49}}'),
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"], ["key", "keyf"]],
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
                flip: [[1], ["ln", "rn"], ["ld", "rd"], ["key", "keyf"]],
            },
            {  //9b -34
                problem: 'Concert tickets were discounted 28%. The amount of the discount was $15.40. What was the original price of the tickets before the discount?',
                round: '',
                inAnswer: '55.00',
                answer: '55', template: 'dollar', pre_symbol: '$', post_symbol: '', 
                key: 'rd', keyf: 'ld', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: '28', rn: '15.40', 
                ld: '100', rd: 'x', 
                solution: dataUtils.pre('\\grp{\\html{100}}{\\html{&#149;}}{\\html{15.40}}{css{\\html{\xF7}}{bigger}}{\\html{28}}'),
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"], ["key", "keyf"]],
            },
            {  //9c -35
                problem: 'Concert tickets that were priced at $55 were discounted $15.40. What was the percent discount?',
                round: '',
                answer: '28', template: 'percent', pre_symbol: '', post_symbol: '%', 
                key: 'rd', keyf: 'ld', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: 'x', rn: '15.40', 
                ld: '100', rd: '55', 
                solution: dataUtils.pre('\\grp{\\html{100}}{\\html{&#149;}}{\\html{15.40}}{css{\\html{\xF7}}{bigger}}{\\html{55}}'),
                xtext: '',
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"], ["key", "keyf"]],
            },
            {  //9d -36
                problem: 'Concert tickets that were selling for $55 were now costing only $39.60. What was the percent discount?',
                round: '',
                xtext:'We get the Amount (Part Quantity) by subtracting the sale price of the concert tickets from the regular price. <br><br>55 - 39.60 = 15.40<br><br>',
                answer: '28', template: 'percent', pre_symbol: '', post_symbol: '%', 
                key: 'rd', keyf: 'ld', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: 'x', rn: '15.40', 
                ld: '100', rd: '55', 
                solution: dataUtils.pre('\\grp{\\html{100}}{\\html{&#149;}}{\\html{15.40}}{css{\\html{\xF7}}{bigger}}{\\html{55}}'),
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"], ["key", "keyf"]],
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

	    
	    	return dataUtils.build(desc, template, data, shuffle);
			//return dataUtils.build(desc, template, data);
			
	}]);
