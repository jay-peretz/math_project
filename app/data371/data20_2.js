/*global angular */

angular.module('mathSkills').service('data20_2', ['dataUtils', function (dataUtils) {
    var desc = {
            title: '20.2 Solving Percent Problems Using Proportions',
            path: '20.2-solve-percent-problems-using-proportions',
            children: []
        },
        template = {
            main: {
                
                title: 'Solving Percent Problems Using Proportions',
                children: [{
                    title: 'Main Answer',
                    children: [{
                        problem: '\\html{$problem}',
                        answer: '\\grp{\\input{$answer}}{\\html{$symbol}}',
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
                        problem: '\\html{$problem}',
                        answer: '\\wb{\\rowgrp{'+
                            '\\choose{[\\html{},\\html{The standard percent proportion is set up as follows:}]}{$$previousCorrect}'+
						'}{'+
                            '\\html{&nbsp;}'+
                        '}{'+
                            '\\choose{[\\html{},\\grp{\\frac{\\str{$$dln}}{\\str{$$dld}}}{\\sign{=}}{\\frac{\\str{$$drn}}{\\str{$$drd}}}]}{$$previousCorrect}'+
						'}{'+
                            '\\html{&nbsp;}'+
                        '}{'+
                            '\\choose{[\\html{Yes!  The correct setup is:},\\html{We substitute the given values to get:}]}{$$previousCorrect}'+
						'}{'+
                            '\\html{&nbsp;}'+
                        '}{'+
                            '\\grp{\\frac{\\str{$$ln}}{\\str{$$ld}}}{\\sign{=}}{\\frac{\\str{$$rn}}{\\str{$$rd}}}'+
						'}{'+
                            '\\html{&nbsp;}'+
                        '}{'+
                            '\\ins{$helpText}'+
                        '}{'+
                            '\\css{\\grp{\\html{X}}{\\sign{=}}{\\input{$$answer}}{\\html{$symbol}}}{proportion-application}'+
                        '}}{well}{end}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }, {
                        problem: '\\html{$problem}',
                        answer: '\\wb{\\rowgrp{'+
                            '\\choose{[\\html{},\\grp{\\frac{\\str{$$ln}}{\\str{$$ld}}}{\\sign{=}}{\\frac{\\str{$$rn}}{\\str{$$rd}}}]}{$$previousCorrect}'+
                        '}{'+
							'\\html{&nbsp;}'+
						'}{'+
                            '\\choose{[\\ins{Congratulations!},\\ins{The correct answer is found by following the process to solve all proportion problems. We substitute the given values to get:}]}{$$previousCorrect}'+
                        '}{'+
                            '\\choose{[\\grp{\\frac{\\str{$$answer}}{\\str{$$ld}}}{\\sign{=}}{\\frac{\\str{$$rn}}{\\str{$$rd}}},\\css{\\grp{\\html{X}}{\\sign{=}}{\\html{$solution}}}{proportion-application}]}{$$previousCorrect}'+
                        '}{'+
							'\\html{&nbsp;}'+
						'}{'+
                            '\\choose{[\\html{},\\ins{The answer is}]}{$$previousCorrect}'+
                        '}{'+
                            '\\choose{[\\html{},\\css{\\grp{\\html{$$answer}}{\\html{$$symbol}}}{proportion-application}]}{$$previousCorrect}'+
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
            { // problem 1
                problem: '20 is what percent of 80?',
                answer: '25', template: 'main', symbol: '%',
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: 100, drd: 'Base (Whole Quantity)',
                ln: 'x', rn: 20, 
                ld: 100, rd: 80, 
                previousCorrect: true,
                solution: '100 &#149; 20 <span class=bigger>&#247;</span> 80',
                flip: [[1], ["ln", "rn"], ["ld", "rd"]],
                helpText: 'Now solve the problem.'
            },
            {   // problem 2
                problem: 'What number is 25% of 80?',
                answer: '20', template: 'main',  symbol: '',
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: 100, drd: 'Base (Whole Quantity)',
                ln: 25, rn: 'x', 
                ld: 100, rd: 80, 
                previousCorrect: true,
                solution: '80 &#149; 25 <span class=bigger>&#247;</span> 100',
                flip: [[1], ["ln", "rn"], ["ld", "rd"]],
                helpText: 'Now solve the problem.'
            },
            { 	// problem 3
                problem: '20 is 25% of what number?',
                answer: '80', template: 'main',  symbol: '',
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: 100, drd: 'Base (Whole Quantity)',
                ln: 25, rn: 20, 
                ld: 100, rd: 'x', 
                previousCorrect: true,
                solution: '20 &#149; 100 <span class=bigger>&#247;</span> 25',
                flip: [[1], ["ln", "rn"], ["ld", "rd"]],
                helpText: 'Now solve the problem.'
            },
            { 	// problem 4
                problem: 'What percent of 60 is 18?',
                answer: '30', template: 'main', symbol: '%',
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: 100, drd: 'Base (Whole Quantity)',
                ln: 'x', rn: 18, 
                ld: 100, rd: 60, 
                previousCorrect: true,
                solution: '100 &#149; 18 <span class=bigger>&#247;</span> 60',
                flip: [[1], ["ln", "rn"], ["ld", "rd"]],
                helpText: 'Now solve the problem.'
            },
            { 	// problem 5
                problem: '30% of 60 is what number?',
                answer: '18', template: 'main',  symbol: '',
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: 100, drd: 'Base (Whole Quantity)',
                ln: 30, rn: 'x', 
                ld: 100, rd: 60, 
                previousCorrect: true,
                solution: '60 &#149; 30 <span class=bigger>&#247;</span> 100',
                flip: [[1], ["ln", "rn"], ["ld", "rd"]],
                helpText: 'Now solve the problem.'
            },
            { 	// problem 6
                problem: '18 is 30% of what number?',
                answer: '60', template: 'main',  symbol: '',
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: 100, drd: 'Base (Whole Quantity)',
                ln: 30, rn: 18, 
                ld: 100, rd: 'x', 
                previousCorrect: true,
                solution: '100 &#149; 18 <span class=bigger>&#247;</span> 30',
                flip: [[1], ["ln", "rn"], ["ld", "rd"]],
                helpText: 'Now solve the problem.'
            },
            { 	// problem 7
                problem: '120 is what percent of 96?',
                answer: '125', template: 'main', symbol: '%',
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: 100, drd: 'Base (Whole Quantity)',
                ln: 'x', rn: 120, 
                ld: 100, rd: 96, 
                previousCorrect: true,
                solution: '100 &#149; 120 <span class=bigger>&#247;</span> 96',
                flip: [[1], ["ln", "rn"], ["ld", "rd"]],
                helpText: 'Now solve the problem.'
            },
            { 	// problem 8
                problem: 'What number is 125% of 96?',
                answer: '120', template: 'main',  symbol: '',
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: 100, drd: 'Base (Whole Quantity)',
                ln: 125, rn: 'x', 
                ld: 100, rd: 96, 
                previousCorrect: true,
                solution: '96 &#149; 125 <span class=bigger>&#247;</span> 100',
                flip: [[1], ["ln", "rn"], ["ld", "rd"]],
                helpText: 'Now solve the problem.'
            },
            { 	// problem 9
                problem: '125% of what number is 120?',
                answer: '96', template: 'main',  symbol: '',
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: 100, drd: 'Base (Whole Quantity)',
                ln: 125, rn: 120, 
                ld: 100, rd: 'x', 
                previousCorrect: true,
                solution: '100 &#149; 120 <span class=bigger>&#247;</span> 125',
                flip: [[1], ["ln", "rn"], ["ld", "rd"]],
                helpText: 'Now solve the problem.'
            },
            { 	// problem 10
                problem: '40 is what percent of 64?',
                answer: '62.5', template: 'main', symbol: '%',
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: 100, drd: 'Base (Whole Quantity)',
                ln: 'x', rn: 40, 
                ld: 100, rd: 64, 
                previousCorrect: true,
                solution: '100 &#149; 40 <span class=bigger>&#247;</span> 64',
                flip: [[1], ["ln", "rn"], ["ld", "rd"]],
                helpText: 'Now solve the problem.'
            },
            { 	// problem 11
                problem: 'What number is 62.5% of 64?',
                answer: '40', template: 'main',  symbol: '',
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: 100, drd: 'Base (Whole Quantity)',
                ln: 62.5, rn: 'x', 
                ld: 100, rd: 64, 
                previousCorrect: true,
                solution: '64 &#149; 62.5 <span class=bigger>&#247;</span> 100',
                flip: [[1], ["ln", "rn"], ["ld", "rd"]],
                helpText: 'Now solve the problem.'
            },
            	//problem 12
            { 
                problem: '40 is 62.5% of what number?',
                answer: '64', template: 'main',  symbol: '',
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: 100, drd: 'Base (Whole Quantity)',
                ln: 40, rn: 62.5, 
                ld: 'x', rd: 100, 
                previousCorrect: true,
                solution: '100 &#149; 40 <span class=bigger>&#247;</span> 62.5',
                flip: [[1], ["ln", "rn"], ["ld", "rd"]],
                helpText: 'Now solve the problem.'
            },
            { 	// problem 13
                problem: '14.4 is what percent of 8',
                answer: '180', template: 'main', symbol: '%',
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: 100, drd: 'Base (Whole Quantity)',
                ln: 'x', rn: 14.4, 
                ld: 100, rd: 8, 
                previousCorrect: true,
                solution: '100 &#149; 14.4 <span class=bigger>&#247;</span> 8',
                flip: [[1], ["ln", "rn"], ["ld", "rd"]],
                helpText: 'Now solve the problem.'
            },
            { 	// problem 14
                problem: 'What number is 180% of 8?',
                answer: '14.4', template: 'main',  symbol: '',
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: 100, drd: 'Base (Whole Quantity)',
                ln: 180, rn: 'x', 
                ld: 100, rd: 8, 
                previousCorrect: true,
                solution: '8 &#149; 180 <span class=bigger>&#247;</span> 100',
                flip: [[1], ["ln", "rn"], ["ld", "rd"]],
                helpText: 'Now solve the problem.'
            },
            { 	// problem 15
                problem: '14.4 is 180% of what number?',
                answer: '8', template: 'main',  symbol: '',
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: 100, drd: 'Base (Whole Quantity)',
                ln: 180, rn: 14.4, 
                ld: 100, rd: 'x', 
                previousCorrect: true,
                solution: '100 &#149; 14.4 <span class=bigger>&#247;</span> 180',
                flip: [[1], ["ln", "rn"], ["ld", "rd"]],
                helpText: 'Now solve the problem.'
            },
            //Problem 16
            { 
                problem: '7.5 is what percent of 14? <br><br>Round answer to the nearest whole percent.',
                answer: '54', template: 'main', symbol: '%',
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: 100, drd: 'Base (Whole Quantity)',
                ln: 'x', rn: 7.5, 
                ld: 100, rd: 14, 
                previousCorrect: true,
                solution: '100 &#149; 7.5 <span class=bigger>&#247;</span> 14',
                flip: [[1], ["ln", "rn"], ["ld", "rd"]],
                helpText: 'Now solve the problem.<br><br>Round answer to the nearest whole percent.'
            },
            { 	// problem 17
                problem: 'What number is 38% of 112.4? <br><br>Round answer to the nearest tenth.',
                answer: '42.7', template: 'main',  symbol: '',
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: 100, drd: 'Base (Whole Quantity)',
                ln: 38, rn: 'x', 
                ld: 100, rd: 112.4, 
                previousCorrect: true,
                solution: '112.4 &#149; 38 <span class=bigger>&#247;</span> 100',
                flip: [[1], ["ln", "rn"], ["ld", "rd"]],
                helpText: 'Now solve the problem.<br><br>Round answer to the nearest tenth.'
            },
            { 	// problem 18
                problem: '35.2 is 200% of what number?',
                answer: '17.6', template: 'main',  symbol: '',
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: 100, drd: 'Base (Whole Quantity)',
                ln: 200, rn: 35.2, 
                ld: 100, rd: 'x', 
                previousCorrect: true,
                solution: '100 &#149; 35.2 <span class=bigger>&#247;</span> 200',
                flip: [[1], ["ln", "rn"], ["ld", "rd"]],
                helpText: 'Now solve the problem.'
            }
        ],
		shuffle = [
					{ problems: [1,2,3,4,5,6,10,11,12,13], total: 5},
					{ problems: [7,8,9,13,14,15], total: 3},
					{ problems: [16,17,18], total: 2}
			];

	    
	    	return dataUtils.build(desc, template, data, shuffle);
			//return dataUtils.build(desc, template, data);
			
	}]);
