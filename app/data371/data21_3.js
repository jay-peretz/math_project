/*global angular */

angular.module('mathSkills').service('data21_3', ['dataUtils', function (dataUtils) {
    var desc = {
            title: '21.3 Commission',
            path: '21.3-commission',
            children: []
        },
        template = {
            main: {
                
                title: 'Commission',
                children: [{
                    title: 'Main Answer',
                    children: [{
                        problem: '\\html{$problem}',
                        answer: '\\grp'+
                                    '{\\str{$pre_symbol}}'+
                                    '{\\css{$answerIn}{width200px}}'+
                                    '{\\str{$post_symbol}}',
                        controls: {
                            "checkAnswer": true,
                            "help": false,
                            "workbook": true
                        }
                    }]
                }, {
                    title: 'Workbook',
                    children: [{
                        problem: '\\html{$problem}',
                        answer: '\\wb{'+
                                    '\\rowgrp{'+
                                        '\\ins{Set up a percent proportion to solve the problem (use "X" for an unknown value).}'+
                                    '}{'+
                                        '\\grp'+
                                        '{\\frac{\\input{[\"$ln\",\"$rn\"]}}{\\input{[\"$ld\",\"$rd\"]}}}'+
                                        '{\\sign{=}}'+
                                        '{\\frac{\\input{[\"$rn\",\"$ln\"]}}{\\input{[\"$rd\",\"$ld\"]}}}'+
                                    '}'+
                                '}{well}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }, {
                        problem: '\\html{$problem}',
                        answer: '\\wb{'+
                                    '\\rowgrp{'+
                                        '\\choose{['+
                                            '\\ins{}{q},'+
                                            '\\ins{The standard percent proportion is set up as follows:}]}'+
                                        '{$$previousCorrect}'+
                                    '}{'+
                                        '\\css{'+
                                            '\\choose{['+
                                                '\\ins{}{q},'+
                                                '\\grp'+
                                                    '{\\frac{\\str{$$dln}}{\\str{$$dld}}}'+
                                                    '{\\sign{=}}'+
                                                    '{\\frac{\\str{$$drn}}{\\str{$$drd}}}'+
                                            ']}{$$previousCorrect}}'+
                                        '{bottom-marg}'+
                                    '}{'+
                                        '\\choose{['+
                                            '\\ins{Yes!},'+
                                            '\\ins{We substitute the given values to get:}]}'+
                                        '{$$previousCorrect}'+
                                    '}{'+
                                        '\\css{'+
                                            '\\grp'+
                                                '{\\frac{\\str{$$ln}}{\\str{$$ld}}}'+
                                                '{\\sign{=}}'+
                                                '{\\frac{\\str{$$rn}}{\\str{$$rd}}}'+
                                        '}{bottom-marg}'+
                                    '}{'+
                                        '\\ins{Now solve the problem.}'+
                                    '}{'+
                                        '\\css{'+
                                            '\\grp'+
                                                '{\\str{X}}'+
                                                '{\\sign{=}}'+
												'{\\str{$pre_symbol}}'+
                                                '{\\inputcash{$$answer}}'+
												'{\\str{$post_symbol}}'+
                                        '}{proportion-application}'+
                                    '}'+
                                '}{well}{end}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }, {
                        problem: '\\html{$problem}',
                        answer: '\\wb{'+
                                    '\\rowgrp{'+
                                        '\\css{'+
                                            '\\choose{['+
                                                '\\ins{}{q},'+
                                                '\\grp'+
                                                    '{\\frac{\\str{$$ln}}{\\str{$$ld}}}'+
                                                    '{\\sign{=}}'+
                                                    '{\\frac{\\str{$$rn}}{\\str{$$rd}}}'+
                                            ']}{$$previousCorrect}'+
                                        '}{bottom-marg}'+
                                    '}{'+
                                        '\\choose{['+
                                            '\\ins{Congratulations!},'+
                                            '\\ins{The correct answer is found by following the process to solve all proportion problems. We substitute the given values to get:}'+
                                        ']}{$$previousCorrect}'+
                                    '}{'+
                                        '\\css{'+
                                            '\\choose{['+
                                                '\\grp'+
                                                    '{\\frac{\\str{$$ln}}{\\str{$$ld}}}'+
                                                    '{\\sign{=}}'+
                                                    '{\\frac{\\str{$$rn}}{\\str{$$rd}}},'+
												'\\css{'+
                                                    '\\grp'+
                                                        '{\\str{X}}'+
                                                        '{\\sign{=}}'+
                                                        '{$solution}'+
                                                '}{proportion-application}'+
											']}{$$previousCorrect}'+
                                        '}{bottom-marg}'+
                                    '}{'+
                                        '\\choose{['+
                                            '\\ins{}{q},'+
                                            '\\ins{The answer is}]}'+
                                        '{$$previousCorrect}'+
                                    '}{'+
                                        '\\choose{['+
                                            '\\ins{}{q},'+
                                            '\\css{'+
                                                '\\grp'+
                                                    '{\\str{$$pre_symbol}}'+
                                                    '{\\str{$answer}}'+
                                                    '{\\str{$$post_symbol}}'+
                                            '}{proportion-application}]}'+
                                        '{$$previousCorrect}'+
                                    '}}{well}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }]
                }]
            }
        },
        data = [
            { //1a problem 1
                problem: 'Monique sells $4,500 worth of clothing in one week. If she earns a 2% commission on her total sales, how much commission did she earn?',
                answerIn: dataUtils.pre('\\inputcash{$$answer}'),
                answer: '90.00', template: 'main', pre_symbol: '$', post_symbol: '', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: '2', rn: 'x', 
                ld: '100', rd: '4500', 
				solution: dataUtils.pre('\\grp{\\str{2}}{\\html{&#149;}}{\\str{4500}}{css{\\html{\xF7}}{bigger}}{\\str{100}}'),
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"]],
            },
            { //1b problem 2
                problem: 'Monique earns a 2% connission on her total sales. If she earned $90 in commissions last week, what were her total sales?',
                answerIn: dataUtils.pre('\\inputcash{$$answer}'),
                answer: '4500.00', template: 'main', pre_symbol: '$', post_symbol: '',
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: '2', rn: '90', 
                ld: '100', rd: 'x',
				solution: dataUtils.pre('\\grp{\\str{100}}{\\html{&#149;}}{\\str{90}}{css{\\html{\xF7}}{bigger}}{\\str{2}}'),
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"]],
            },
            { //1c problem 3
                problem: 'Monique sold $4,500 worth of clothing last week and earned $90 in commission. What is her commission rate?',
                answerIn: dataUtils.pre('\\input{$$answer}'),
                answer: '2', template: 'main', pre_symbol: '', post_symbol: '%', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: 'x', rn: '90', 
                ld: '100', rd: '4500',
                solution: dataUtils.pre('\\grp{\\str{100}}{\\html{&#149;}}{\\str{90}}{css{\\html{\xF7}}{bigger}}{\\str{4500}}'),
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"]],
            },
            
            { //2a problem 4
                problem: 'At a sporting goods store, Yani sells $6,200 worth of merchandise one week. If she earns a 3% commission on her total sales, how much commission did she earn?',
                answerIn: dataUtils.pre('\\inputcash{$$answer}'),
                answer: '186.00', template: 'main', pre_symbol: '$', post_symbol: '',
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: '3', rn: 'x', 
                ld: '100', rd: '6200',
                solution: dataUtils.pre('\\grp{\\str{3}}{\\html{&#149;}}{\\str{6200}}{css{\\html{\xF7}}{bigger}}{\\str{100}}'),
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"]],
            },
            { //2b problem 5
                problem: 'Yani earns a 3% commission on her total sales. If she earned $186 in commission last week, what were her total sales?',
                answerIn: dataUtils.pre('\\inputcash{$$answer}'),
                answer: '6200.00', template: 'main', pre_symbol: '$', post_symbol: '',
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: '3', rn: '186', 
                ld: '100', rd: 'x',
                solution: dataUtils.pre('\\grp{\\str{100}}{\\html{&#149;}}{\\str{186}}{css{\\html{\xF7}}{bigger}}{\\str{3}}'),
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"]],
            },
            { //2c problem 6
                problem: 'Yani sold $6,200 at a sporting goods store last week and earned $186 in commission. What is her commission rate?',
                answerIn: dataUtils.pre('\\input{$$answer}'),
                answer: '3', template: 'main', pre_symbol: '', post_symbol: '%',
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: 'x', rn: '186', 
                ld: '100', rd: '6200',
                solution: dataUtils.pre('\\grp{\\str{100}}{\\html{&#149;}}{\\str{186}}{css{\\html{\xF7}}{bigger}}{\\str{6200}}'),
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"]],
            },
            
            { //3a problem 7
                problem: 'Brian sells $14,000 worth of jewelry one week. If he earns a 2.5% commission on his total sales, how much commission did he earn?',
                answerIn: dataUtils.pre('\\inputcash{$$answer}'),
                answer: '350.00', template: 'main', pre_symbol: '$', post_symbol: '',
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: '2.5', rn: 'x', 
                ld: '100', rd: '14000',
                solution: dataUtils.pre('\\grp{\\str{2.5}}{\\html{&#149;}}{\\str{14000}}{css{\\html{\xF7}}{bigger}}{\\str{100}}'),
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"]],
            },
            { //3b problem 8
                problem: 'Brian earns a 2.5% commission on his total sales. If he earned $350 in commission last week, what were his total sales?',
                answerIn: dataUtils.pre('\\inputcash{$$answer}'),
                answer: '14000.00', template: 'main', pre_symbol: '$', post_symbol: '',
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: '2.5', rn: '350', 
                ld: '100', rd: 'x',
                solution: dataUtils.pre('\\grp{\\str{100}}{\\html{&#149;}}{\\str{350}}{css{\\html{\xF7}}{bigger}}{\\str{2.5}}'),
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"]],
            },
            { //3c problem 9
                problem: 'At a jewelry store Brian sold $14,000 worth of merchandise last week and earned $350 in commission. What is his commission rate?',
                answerIn: dataUtils.pre('\\input{$$answer}'),
                answer: '2.5', template: 'main', pre_symbol: '', post_symbol: '%',
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: 'x', rn: '350', 
                ld: '100', rd: '14000',
                solution: dataUtils.pre('\\grp{\\str{100}}{\\html{&#149;}}{\\str{350}}{css{\\html{\xF7}}{bigger}}{\\str{14000}}'),
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"]],
            },
            
            { //4a problem 10
                problem: 'At a used car dealership Justin sold a car for $4,800. If he earns an 8% commission on his total sales, how much commission did he earn?',
                answerIn: dataUtils.pre('\\inputcash{$$answer}'),
                answer: '384.00', template: 'main', pre_symbol: '$', post_symbol: '',
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: '8', rn: 'x', 
                ld: '100', rd: '4800',
                solution: dataUtils.pre('\\grp{\\str{8}}{\\html{&#149;}}{\\str{4800}}{css{\\html{\xF7}}{bigger}}{\\str{100}}'),
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"]],
            },
            { //4b problem 11
                problem: 'At a used car dealership Justin earns an 8% commission on his total sales. If he earned $384 in commission on a car he sold, for how much did he sell the car?',
                answerIn: dataUtils.pre('\\inputcash{$$answer}'),
                answer: '4800.00', template: 'main', pre_symbol: '$', post_symbol: '',
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: '8', rn: '384', 
                ld: '100', rd: 'x',
                solution: dataUtils.pre('\\grp{\\str{100}}{\\html{&#149;}}{\\str{384}}{css{\\html{\xF7}}{bigger}}{\\str{8}}'),
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"]],
            },
            { //4c problem 12
                problem: 'At a used car dealership Justin sold a car for $4,800 and earned $384 in commission. What was his commission rate?',
                answerIn: dataUtils.pre('\\input{$$answer}'),
                answer: '8', template: 'main', pre_symbol: '', post_symbol: '%',
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: 'x', rn: '384', 
                ld: '100', rd: '4800',
                solution: dataUtils.pre('\\grp{\\str{100}}{\\html{&#149;}}{\\str{384}}{css{\\html{\xF7}}{bigger}}{\\str{4800}}'),
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"]],
            },
            
            { //5a problem 13
                problem: 'At a shoe store Vijay sold $8,850 worth of shoes. If he earns a 5% commission on his total sales, how much commission did he earn?',
                answerIn: dataUtils.pre('\\inputcash{$$answer}'),
                answer: '442.50', template: 'main', pre_symbol: '$', post_symbol: '',
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: '5', rn: 'x', 
                ld: '100', rd: '8850',
                solution: dataUtils.pre('\\grp{\\str{5}}{\\html{&#149;}}{\\str{8850}}{css{\\html{\xF7}}{bigger}}{\\str{100}}'),
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"]],
            },
            { //5b problem 14
                problem: 'At a shoe store Vijay earns a 5% commission on his total sales. If he earned $442.50 in commission last month, what were his total sales?',
                answerIn: dataUtils.pre('\\inputcash{$$answer}'),
                answer: '8850.00', template: 'main', pre_symbol: '$', post_symbol: '',
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: '5', rn: '442.50', 
                ld: '100', rd: 'x',
                solution: dataUtils.pre('\\grp{\\str{100}}{\\html{&#149;}}{\\str{442.50}}{css{\\html{\xF7}}{bigger}}{\\str{5}}'),
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"]],
            },
            { //5c problem 15
                problem: 'At a shoe store Vijay sold $8,850 worth of shoes and earned $442.50 in commission. What was his commission rate?',
                answerIn: dataUtils.pre('\\input{$$answer}'),
                answer: '5', template: 'main', pre_symbol: '', post_symbol: '%',
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: 'x', rn: '442.50', 
                ld: '100', rd: '8850',
                solution: dataUtils.pre('\\grp{\\str{100}}{\\html{&#149;}}{\\str{442.50}}{css{\\html{\xF7}}{bigger}}{\\str{8850}}'),
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"]],
            },
            
            { //6a problem 16
                problem: 'At a computer security firm, Rosemary sold $82,460 worth of software. If she earns a 20% commission on her total sales, how much commission did she earn?',
                answerIn: dataUtils.pre('\\inputcash{$$answer}'),
                answer: '16492.00', template: 'main', pre_symbol: '$', post_symbol: '',
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: '20', rn: 'x', 
                ld: '100', rd: '82460',
                solution: dataUtils.pre('\\grp{\\str{20}}{\\html{&#149;}}{\\str{82460}}{css{\\html{\xF7}}{bigger}}{\\str{100}}'),
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"]],
            },
            { //6b problem 17
                problem: 'Rosemary earns a 20% commission on her total sales of computer security software. If she earned $16,492 in commission last week, what were her total software sales?',
                answerIn: dataUtils.pre('\\inputcash{$$answer}'),
                answer: '82460.00', template: 'main', pre_symbol: '$', post_symbol: '',
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: '20', rn: '16492', 
                ld: '100', rd: 'x',
                solution: dataUtils.pre('\\grp{\\str{100}}{\\html{&#149;}}{\\str{16492}}{css{\\html{\xF7}}{bigger}}{\\str{20}}'),
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"]],
            },
            { //6c problem 18
                problem: 'At a computer security firm, Rosemary sold $82,460 worth of software last month, and earned $16,492 in commission. What is her commission rate?',
                answerIn: dataUtils.pre('\\input{$$answer}'),
                answer: '20', template: 'main', pre_symbol: '', post_symbol: '%',
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: 'x', rn: '16492', 
                ld: '100', rd: '82460',
                solution: dataUtils.pre('\\grp{\\str{100}}{\\html{&#149;}}{\\str{16492}}{css{\\html{\xF7}}{bigger}}{\\str{82460}}'),
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"]],
            },
            
            { //7a problem 19
                problem: 'Brian sells $11,300 worth of jewelry one week. If he earns a 4% commission on his total sales, how much commission did he earn?',
                answerIn: dataUtils.pre('\\inputcash{$$answer}'),
                answer: '452.00', template: 'main', pre_symbol: '$', post_symbol: '',
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: '4', rn: 'x', 
                ld: '100', rd: '11300',
                solution: dataUtils.pre('\\grp{\\str{4}}{\\html{&#149;}}{\\str{11300}}{css{\\html{\xF7}}{bigger}}{\\str{100}}'),
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"]],
            },
            { //7b problem 20
                problem: 'Brian earns a 4% commission on his total sales. If he earned $452 in commission last week, what were his total sales?',
                answerIn: dataUtils.pre('\\inputcash{$$answer}'),
                answer: '11300.00', template: 'main', pre_symbol: '$', post_symbol: '',
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: '4', rn: '452', 
                ld: '100', rd: 'x',
                solution: dataUtils.pre('\\grp{\\str{100}}{\\html{&#149;}}{\\str{452}}{css{\\html{\xF7}}{bigger}}{\\str{4}}'),
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"]],
            },
            { //7c problem 21
                problem: 'At a jewelry store Brian sold $11,300 worth of merchandise last week and earned $452 in commission. What is his commission rate?',
                answerIn: dataUtils.pre('\\input{$$answer}'),
                answer: '4', template: 'main', pre_symbol: '', post_symbol: '%',
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: 'x', rn: '452', 
                ld: '100', rd: '11300',
                solution: dataUtils.pre('\\grp{\\str{100}}{\\html{&#149;}}{\\str{452}}{css{\\html{\xF7}}{bigger}}{\\str{11300}}'),
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"]],
            },
            
            { //8a problem 22
                problem: 'At a used car dealership Paula sold a car for $7,500. If she earns a 6% commission on her total sales, how much commission did she earn?',
                answerIn: dataUtils.pre('\\inputcash{$$answer}'),
                answer: '450.00', template: 'main', pre_symbol: '$', post_symbol: '',
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: '6', rn: 'x', 
                ld: '100', rd: '7500',
                solution: dataUtils.pre('\\grp{\\str{6}}{\\html{&#149;}}{\\str{7500}}{css{\\html{\xF7}}{bigger}}{\\str{100}}'),
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"]],
            },
            { //8b problem 23
                problem: 'At a used car dealership Paula earns a 6% commission on her total sales. If she earned $450 in commission on a car she sold, for how much did she sell the car?',
                answerIn: dataUtils.pre('\\inputcash{$$answer}'),
                answer: '7500.00', template: 'main', pre_symbol: '$', post_symbol: '',
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: '6', rn: '450', 
                ld: '100', rd: 'x',
                solution: dataUtils.pre('\\grp{\\str{100}}{\\html{&#149;}}{\\str{450}}{css{\\html{\xF7}}{bigger}}{\\str{6}}'),
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"]],
            },
            { //8c problem 24
                problem: 'At a used car dealership Paula sold a car for $7,500 and earned $450 in commission. What was her commission rate?',
                answerIn: dataUtils.pre('\\input{$$answer}'),
                answer: '6', template: 'main', pre_symbol: '', post_symbol: '%',
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: 'x', rn: '450', 
                ld: '100', rd: '7500',
                solution: dataUtils.pre('\\grp{\\str{100}}{\\html{&#149;}}{\\str{450}}{css{\\html{\xF7}}{bigger}}{\\str{7500}}'),
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"]],
            }
            
        ],
		shuffle = [
					{ problems: [1,4,7,10], total: 2},
					{ problems: [2,5,8,11], total: 2},
					{ problems: [3,6,9,12], total: 2},
					{ problems: [13,14,15,16,17,18,19,20,21,22,23,24], total: 4}
			];

	    
	    	return dataUtils.build(desc, template, data, shuffle);
			//return dataUtils.build(desc, template, data);
			
	}]);