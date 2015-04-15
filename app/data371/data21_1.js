/*global angular */

angular.module('mathSkills').service('data21_1', ['dataUtils', function (dataUtils) {
    var desc = {
            title: '21.1 Sales Tax',
            path: '21.1-sales-tax',
            children: []
        },
        template = {
            main: {
                
                title: 'Sales Tax',
                children: [{
                    title: 'Main Answer',
                    children: [{
                        problem: '\\html{$problem}',
                        answer: '\\grp'+
                                    '{\\str{$pre_symbol}}'+
                                    '{$answerIn}'+
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
                                                //'{\\set{$answerIn}{$$key}}'+
												'{$answerIn}'+
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
                                                        '{\\html{$solution}}'+
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
                            "help": false,
							"stepwiseNextProblem": true
                        }
                    }]
                }]
            }
        },
        data = [
            {  //1a problem 1
                problem: 'A TV sells for $420. If the sales tax is 6%, how much sales tax is paid?',
                answerIn: dataUtils.pre('\\inputcash{$$answer}'),
                answer: '25.20', template: 'main', pre_symbol: '$', post_symbol: '', 
                key: 'rn', fkey: 'ln', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: '6', rn: 'x', 
                ld: '100', rd: '420', 
                solution: '6 &#149; 420 <span class=bigger>&#247;</span> 100',
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"], ["key", "fkey"]],
            },
            {  //1b problem 2
                problem: 'You buy a TV, and pay $25.20 in sales tax. If the sales tax rate is 6%, what was the cost of the TV without the sales tax included?',
                answerIn: dataUtils.pre('\\inputcash{$$answer}'),
                answer: '420.00', template: 'main', pre_symbol: '$', post_symbol: '', 
                key: 'rd', fkey: 'ld', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: '6', rn: '25.20', 
                ld: '100', rd: 'x', 
                solution: '100 &#149; 25.20 <span class=bigger>&#247;</span> 6',
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"], ["key", "fkey"]],
            },
            {  //1c problem 3
                problem: 'You buy a TV for $420, and then pay another $25.20 in sales tax. What was the sales tax rate?',
                answerIn: dataUtils.pre('\\input{$$answer}'),
                answer: '6', template: 'main', pre_symbol: '', post_symbol: '%', 
                key: 'rd', fkey: 'ld', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: 'x', rn: '25.20', 
                ld: '100', rd: '420', 
                solution: '100 &#149; 25.20 <span class=bigger>&#247;</span> 6',
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"], ["key", "fkey"]],
            },
            
            {  //2a problem 4
                problem: 'A pair of shoes sells for $80. If the sales tax is 6.75%, how much sales tax is paid?',
                answerIn: dataUtils.pre('\\inputcash{$$answer}'),
                answer: '5.40', template: 'main', pre_symbol: '$', post_symbol: '', 
                key: 'rn', fkey: 'ln', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: '6.75', rn: 'x', 
                ld: '100', rd: '80', 
                solution: '6.75 &#149; 80 <span class=bigger>&#247;</span> 100',
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"], ["key", "fkey"]],
            },
            {  //2b problem 5
                problem: 'You buy a pairs of shoes, and pay $5.40 in sales tax. If the sales tax rate is 6.75%, what was the cost of the shoes without the sales tax included?',
                answerIn: dataUtils.pre('\\inputcash{$$answer}'),
                answer: '80.00', template: 'main', pre_symbol: '$', post_symbol: '', 
                key: 'rd', fkey: 'ld', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: '6.75', rn: '5.40', 
                ld: '100', rd: 'x', 
                solution: '100 &#149; 5.40 <span class=bigger>&#247;</span> 6.75',
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"], ["key", "fkey"]],
            },
            {  //2c problem 6
                problem: 'You buy a pair of shoes for $80, and then pay another $5.40 in sales tax. What was the sales tax rate?',
                answerIn: dataUtils.pre('\\input{$$answer}'),
                answer: '6.75', template: 'main', pre_symbol: '', post_symbol: '%', 
                key: 'rd', fkey: 'ld', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: 'x', rn: '5.40', 
                ld: '100', rd: '80', 
                solution: '100 &#149; 5.40 <span class=bigger>&#247;</span> 80',
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"], ["key", "fkey"]],
            },
            
            {  //3a problem 7
                problem: 'A baseball mitt sells for $25. If the sales tax is 7%, how much sales tax is paid?',
                answerIn: dataUtils.pre('\\inputcash{$$answer}'),
                answer: '1.75', template: 'main', pre_symbol: '$', post_symbol: '', 
                key: 'rn', fkey: 'ln', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: '7', rn: 'x', 
                ld: '100', rd: '25', 
                solution: '7 &#149; 25 <span class=bigger>&#247;</span> 100',
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"], ["key", "fkey"]],
            },
            {  //3b problem 8
                problem: 'You buy a baseball mitt, and pay $1.75 in sales tax. If the sales tax rate is 7%, what was the cost of the shoes without the sales tax included?',
                answerIn: dataUtils.pre('\\inputcash{$$answer}'),
                answer: '25.00', template: 'main', pre_symbol: '$', post_symbol: '', 
                key: 'rd', fkey: 'ld', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: '7', rn: '1.75', 
                ld: '100', rd: 'x', 
                solution: '100 &#149; 1.75 <span class=bigger>&#247;</span> 7',
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"], ["key", "fkey"]],
            },
            {  //3c problem 9
                problem: 'You buy a baseball mitt for $25, and then pay another $1.75 in sales tax. What was the sales tax rate?',
                answerIn: dataUtils.pre('\\input{$$answer}'),
                answer: '7', template: 'main', pre_symbol: '', post_symbol: '%', 
                key: 'rd', fkey: 'ld', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: 'x', rn: '1.75', 
                ld: '100', rd: '25', 
                solution: '100 &#149; 1.75 <span class=bigger>&#247;</span> 25',
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"], ["key", "fkey"]],
            },
            
            {  //4a problem 10
                problem: 'Ana buys three books for $30. If the sales tax is 5.5%, how much sales tax does she pay?',
                answerIn: dataUtils.pre('\\inputcash{$$answer}'),
                answer: '1.65', template: 'main', pre_symbol: '$', post_symbol: '', 
                key: 'rn', fkey: 'ln', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: '5.5', rn: 'x', 
                ld: '100', rd: '30', 
                solution: '5.5 &#149; 30 <span class=bigger>&#247;</span> 100',
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"], ["key", "fkey"]],
            },
            {  //4b problem 11
                problem: 'Ana buys three books, and pays $1.65 in sales tax. If the sales tax rate is 5.5%, what was the cost of the books without the sales tax included?',
                answerIn: dataUtils.pre('\\inputcash{$$answer}'),
                answer: '30.00', template: 'main', pre_symbol: '$', post_symbol: '', 
                key: 'rd', fkey: 'ld', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: '5.5', rn: '1.65', 
                ld: '100', rd: 'x', 
                solution: '100 &#149; 1.65 <span class=bigger>&#247;</span> 5.5',
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"], ["key", "fkey"]],
            },
            {  //4c problem 12
                problem: 'Ana buys three books for $30, and then pays another $1.65 in sales tax. What was the sales tax rate?',
                answerIn: dataUtils.pre('\\input{$$answer}'),
                answer: '5.5', template: 'main', pre_symbol: '', post_symbol: '%', 
                key: 'rd', fkey: 'ld', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: 'x', rn: '1.65', 
                ld: '100', rd: '30', 
                solution: '100 &#149; 1.65 <span class=bigger>&#247;</span> 30',
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"], ["key", "fkey"]],
            },
            
            {  //5a problem 13
                problem: 'Alex bought a coat for $120. If the sales tax rate is 6.25%, how much sales tax does he pay?',
                answerIn: dataUtils.pre('\\inputcash{$$answer}'),
                answer: '7.50', template: 'main', pre_symbol: '$', post_symbol: '', 
                key: 'rn', fkey: 'ln', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: '6.25', rn: 'x', 
                ld: '100', rd: '120', 
                solution: '6.25 &#149; 120 <span class=bigger>&#247;</span> 100',
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"], ["key", "fkey"]],
            },
            {  //5b problem 14
                problem: 'Alex buys a coat, and pays $7.50 in sales tax. If the sales tax rate is 6.25%, what was the cost of the coat without the sales tax included?',
                answerIn: dataUtils.pre('\\inputcash{$$answer}'),
                answer: '120.00', template: 'main', pre_symbol: '$', post_symbol: '', 
                key: 'rd', fkey: 'ld', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: '6.25', rn: '7.50', 
                ld: '100', rd: 'x', 
                solution: '100 &#149; 7.50 <span class=bigger>&#247;</span> 6.25',
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"], ["key", "fkey"]],
            },
            {  //5c problem 15
                problem: 'Alex bought a coat for $120, and then pays another $7.50 in sales tax. What was the sales tax rate?',
                answerIn: dataUtils.pre('\\input{$$answer}'),
                answer: '6.25', template: 'main', pre_symbol: '', post_symbol: '%', 
                key: 'rd', fkey: 'ld', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: 'x', rn: '7.50', 
                ld: '100', rd: '120', 
                solution: '100 &#149; 7.50 <span class=bigger>&#247;</span> 120',
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"], ["key", "fkey"]],
            },
            
            {  //6a problem 16
                problem: 'Michelle bought a pair of gloves for $18. If the sales tax rate is 8%, how much sales tax does she pay?',
                answerIn: dataUtils.pre('\\inputcash{$$answer}'),
                answer: '1.44', template: 'main', pre_symbol: '$', post_symbol: '', 
                key: 'rn', fkey: 'ln', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: '8', rn: 'x', 
                ld: '100', rd: '18', 
                solution: '8 &#149; 18 <span class=bigger>&#247;</span> 100',
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"], ["key", "fkey"]],
            },
            {  //6b problem 17
                problem: 'Michelle bought a pair of gloves, and pays $1.44 in sales tax. If the sales tax rate is 8%, what was the cost of the gloves without the sales tax included?',
                answerIn: dataUtils.pre('\\inputcash{$$answer}'),
                answer: '18.00', template: 'main', pre_symbol: '$', post_symbol: '', 
                key: 'rd', fkey: 'ld', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: '8', rn: '1.44', 
                ld: '100', rd: 'x', 
                solution: '100 &#149; 1.44 <span class=bigger>&#247;</span> 8',
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"], ["key", "fkey"]],
            },
            {  //6c problem 18
                problem: 'Michelle bought a pair of gloves for $18, and then paid another $1.44 in sales tax. What was the sales tax rate?',
                answerIn: dataUtils.pre('\\input{$$answer}'),
                answer: '8', template: 'main', pre_symbol: '', post_symbol: '%', 
                key: 'rd', fkey: 'ld', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: 'x', rn: '1.44', 
                ld: '100', rd: '18', 
                solution: '100 &#149; 1.44 <span class=bigger>&#247;</span> 18',
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"], ["key", "fkey"]],
            },
            
            {  //7a problem 19
                problem: 'Miguel bought a car for $14,500. If the sales tax rate is 7.5%, how much sales tax does he pay?',
                answerIn: dataUtils.pre('\\inputcash{$$answer}'),
                answer: '1087.50', template: 'main', pre_symbol: '$', post_symbol: '', 
                key: 'rn', fkey: 'ln', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: '7.5', rn: 'x', 
                ld: '100', rd: '14500', 
                solution: '7.5 &#149; 14500 <span class=bigger>&#247;</span> 100',
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"], ["key", "fkey"]],
            },
            {  //7b problem 20
                problem: 'Miguel bought a car, and pays $1,087.50 in sales tax. If the sales tax rate is 7.5%, what was the cost of the car without the sales tax included?',
                answerIn: dataUtils.pre('\\inputcash{$$answer}'),
                answer: '14500.00', template: 'main', pre_symbol: '$', post_symbol: '', 
                key: 'rd', fkey: 'ld', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: '7.5', rn: '1087.50', 
                ld: '100', rd: 'x', 
                solution: '100 &#149; 1087.50 <span class=bigger>&#247;</span> 7.5',
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"], ["key", "fkey"]],
            },
            {  //7c problem 21
                problem: 'Miguel bought a car for $14,500, and then paid another $1,087.50 in sales tax. What was the sales tax rate?',
                answerIn: dataUtils.pre('\\input{$$answer}'),
                answer: '7.5', template: 'main', pre_symbol: '', post_symbol: '%', 
                key: 'rd', fkey: 'ld', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: 'x', rn: '1087.50', 
                ld: '100', rd: '14500', 
                solution: '100 &#149; 1087.50 <span class=bigger>&#247;</span> 14500',
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"], ["key", "fkey"]],
            },
            
            {  //8a problem 22
                problem: 'A pair of shoes sells for $60. If the sales tax is 6.5%, how much sales tax is paid?',
                answerIn: dataUtils.pre('\\inputcash{$$answer}'),
                answer: '3.90', template: 'main', pre_symbol: '$', post_symbol: '', 
                key: 'rn', fkey: 'ln', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: '6.5', rn: 'x', 
                ld: '100', rd: '60', 
                solution: '6.5 &#149; 60 <span class=bigger>&#247;</span> 100',
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"], ["key", "fkey"]],
            },
            {  //8b problem 23
                problem: 'You buy a pairs of shoes, and pay $3.90 in sales tax. If the sales tax rate is 6.5%, what was the cost of the shoes without the sales tax included?',
                answerIn: dataUtils.pre('\\inputcash{$$answer}'),
                answer: '60.00', template: 'main', pre_symbol: '$', post_symbol: '', 
                key: 'rd', fkey: 'ld', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: '6.5', rn: '3.90', 
                ld: '100', rd: 'x', 
                solution: '100 &#149; 3.90 <span class=bigger>&#247;</span> 6.5',
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"], ["key", "fkey"]],
            },
            {  //8c problem 24
                problem: 'You buy a pair of shoes for $60, and then pay another $3.90 in sales tax. What was the sales tax rate?',
                answerIn: dataUtils.pre('\\input{$$answer}'),
                answer: '6.5', template: 'main', pre_symbol: '', post_symbol: '%', 
                key: 'rd', fkey: 'ld', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: 'x', rn: '3.90', 
                ld: '100', rd: '60', 
                solution: '100 &#149; 3.90 <span class=bigger>&#247;</span> 60',
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"], ["key", "fkey"]],
            },
            
            {  //9a problem 25
                problem: 'A baseball mitt sells for $40. If the sales tax is 7.25%, how much sales tax is paid?',
                answerIn: dataUtils.pre('\\inputcash{$$answer}'),
                answer: '2.90', template: 'main', pre_symbol: '$', post_symbol: '', 
                key: 'rn', fkey: 'ln', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: '7.25', rn: 'x', 
                ld: '100', rd: '40', 
                solution: '7.25 &#149; 40 <span class=bigger>&#247;</span> 100',
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"], ["key", "fkey"]],
            },
            {  //9b problem 26
                problem: 'You buy a baseball mitt, and pay $2.90 in sales tax. If the sales tax rate is 7.25%, what was the cost of the mitt without the sales tax included?',
                answerIn: dataUtils.pre('\\inputcash{$$answer}'),
                answer: '40.00', template: 'main', pre_symbol: '$', post_symbol: '', 
                key: 'rd', fkey: 'ld', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: '7.25', rn: '2.90', 
                ld: '100', rd: 'x', 
                solution: '100 &#149; 2.90 <span class=bigger>&#247;</span> 7.25',
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"], ["key", "fkey"]],
            },
            {  //9c problem 27
                problem: 'You buy a baseball mitt for $40, and then pay another $2.90 in sales tax. What was the sales tax rate?',
                answerIn: dataUtils.pre('\\input{$$answer}'),
                answer: '7.25', template: 'main', pre_symbol: '', post_symbol: '%', 
                key: 'rd', fkey: 'ld', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: 'x', rn: '2.90', 
                ld: '100', rd: '40', 
                solution: '100 &#149; 2.90 <span class=bigger>&#247;</span> 40',
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"], ["key", "fkey"]],
            },
            
            {  //10a problem 28
                problem: 'Ana buys three books for $26. If the sales tax is 6%, how much sales tax does she pay?',
                answerIn: dataUtils.pre('\\inputcash{$$answer}'),
                answer: '1.56', template: 'main', pre_symbol: '$', post_symbol: '', 
                key: 'rn', fkey: 'ln', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: '6', rn: 'x', 
                ld: '100', rd: '26', 
                solution: '6 &#149; 26 <span class=bigger>&#247;</span> 100',
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"], ["key", "fkey"]],
            },
            {  //10b problem 29
                problem: 'Ana buys three books, and pays $1.56 in sales tax. If the sales tax rate is 6%, what was the cost of the books without the sales tax included?',
                answerIn: dataUtils.pre('\\inputcash{$$answer}'),
                answer: '26.00', template: 'main', pre_symbol: '$', post_symbol: '', 
                key: 'rd', fkey: 'ld', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: '6', rn: '1.56', 
                ld: '100', rd: 'x', 
                solution: '100 &#149; 1.56 <span class=bigger>&#247;</span> 6',
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"], ["key", "fkey"]],
            },
            {  //10c problem 30
                problem: 'Ana buys three books for $26, and then pays another $1.56 in sales tax. What was the sales tax rate?',
                answerIn: dataUtils.pre('\\input{$$answer}'),
                answer: '6', template: 'main', pre_symbol: '', post_symbol: '%', 
                key: 'rd', fkey: 'ld', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: 'x', rn: '1.56', 
                ld: '100', rd: '26', 
                solution: '100 &#149; 1.56 <span class=bigger>&#247;</span> 26',
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"], ["key", "fkey"]],
            },
            
            {  //11a problem 31
                problem: 'Alex bought a coat for $100. If the sales tax rate is 8.75%, how much sales tax does he pay?',
                answerIn: dataUtils.pre('\\inputcash{$$answer}'),
                answer: '8.75', template: 'main', pre_symbol: '$', post_symbol: '', 
                key: 'rn', fkey: 'ln', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: '8.75', rn: 'x', 
                ld: '100', rd: '100', 
                solution: '8.75 &#149; 100 <span class=bigger>&#247;</span> 100',
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"], ["key", "fkey"]],
            },
            {  //11b problem 32
                problem: 'Alex buys a coat, and pays $8.75 in sales tax. If the sales tax rate is 8.75%, what was the cost of the coat without the sales tax included?',
                answerIn: dataUtils.pre('\\inputcash{$$answer}'),
                answer: '100.00', template: 'main', pre_symbol: '$', post_symbol: '', 
                key: 'rd', fkey: 'ld', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: '8.75', rn: '8.75', 
                ld: '100', rd: 'x', 
                solution: '100 &#149; 8.75 <span class=bigger>&#247;</span> 8.75',
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"], ["key", "fkey"]],
            },
            {  //11c problem 33
                problem: 'Alex bought a coat for $100, and then pays another $8.75 in sales tax. What was the sales tax rate?',
                answerIn: dataUtils.pre('\\input{$$answer}'),
                answer: '8.75', template: 'main', pre_symbol: '', post_symbol: '%', 
                key: 'rd', fkey: 'ld', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: 'x', rn: '8.75', 
                ld: '100', rd: '100', 
                solution: '100 &#149; 8.75 <span class=bigger>&#247;</span> 100',
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"], ["key", "fkey"]],
            },
            
            {  //12a problem 34
                problem: 'Michelle bought a pair of gloves for $22. If the sales tax rate is 7%, how much sales tax does she pay?',
                answerIn: dataUtils.pre('\\inputcash{$$answer}'),
                answer: '1.54', template: 'main', pre_symbol: '$', post_symbol: '', 
                key: 'rn', fkey: 'ln', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: '7', rn: 'x', 
                ld: '100', rd: '22', 
                solution: '7 &#149; 22 <span class=bigger>&#247;</span> 100',
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"], ["key", "fkey"]],
            },
            {  //12b problem 35
                problem: 'Michelle bought a pair of gloves, and pays $1.54 in sales tax. If the sales tax rate is 7%, what was the cost of the gloves without the sales tax included?',
                answerIn: dataUtils.pre('\\inputcash{$$answer}'),
                answer: '22.00', template: 'main', pre_symbol: '$', post_symbol: '', 
                key: 'rd', fkey: 'ld', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: '7', rn: '1.54', 
                ld: '100', rd: 'x', 
                solution: '100 &#149; 1.54 <span class=bigger>&#247;</span> 7',
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"], ["key", "fkey"]],
            },
            {  //12c problem 36
                problem: 'Michelle bought a pair of gloves for $22, and then paid another $1.54 in sales tax. What was the sales tax rate?',
                answerIn: dataUtils.pre('\\input{$$answer}'),
                answer: '7', template: 'main', pre_symbol: '', post_symbol: '%', 
                key: 'rd', fkey: 'ld', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: 'x', rn: '1.54', 
                ld: '100', rd: '22', 
                solution: '100 &#149; 1.54 <span class=bigger>&#247;</span> 22',
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"], ["key", "fkey"]],
            },
            
            {  //13a problem 37
                problem: 'Miguel bought a car for $16,000. If the sales tax rate is 8.5%, how much sales tax does he pay?',
                answerIn: dataUtils.pre('\\inputcash{$$answer}'),
                answer: '1360.00', template: 'main', pre_symbol: '$', post_symbol: '', 
                key: 'rn', fkey: 'ln', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: '8.5', rn: 'x', 
                ld: '100', rd: '16000', 
                solution: '8.5 &#149; 16000 <span class=bigger>&#247;</span> 100',
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"], ["key", "fkey"]],
            },
            {  //13b problem 38
                problem: 'Miguel bought a car, and pays $1,360 in sales tax. If the sales tax rate is 8.5%, what was the cost of the car without the sales tax included?',
                answerIn: dataUtils.pre('\\inputcash{$$answer}'),
                answer: '16000.00', template: 'main', pre_symbol: '$', post_symbol: '', 
                key: 'rd', fkey: 'ld', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: '8.5', rn: '1360', 
                ld: '100', rd: 'x', 
                solution: '100 &#149; 1360 <span class=bigger>&#247;</span> 8.5',
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"], ["key", "fkey"]],
            },
            {  //13c problem 39
                problem: 'Miguel bought a car for $16,000, and then paid another $1,360 in sales tax. What was the sales tax rate?',
                answerIn: dataUtils.pre('\\input{$$answer}'),
                answer: '8.5', template: 'main', pre_symbol: '', post_symbol: '%', 
                key: 'rd', fkey: 'ld', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: 'x', rn: '1360', 
                ld: '100', rd: '16000', 
                solution: '100 &#149; 1360 <span class=bigger>&#247;</span> 16000',
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"], ["key", "fkey"]],
            }
        ],
		shuffle = [
					{ problems: [1,4,7], total: 2},
					{ problems: [11,14,17], total: 2},
					{ problems: [18,21,24], total: 2},
					{ problems: [2,3,5,6,8,9,10,12,13,15,16,19,20,22,23,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39], total: 4}
			];

	    
	    	return dataUtils.build(desc, template, data, shuffle);
			//return dataUtils.build(desc, template, data);
			
	}]);
