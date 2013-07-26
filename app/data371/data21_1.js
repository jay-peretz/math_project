/*global angular */

angular.module('mathSkills').service('data21_1', function () {
    var ret = {
            title: '21.1 Sales Tax',
            path: '21.1-sales-tax',
            children: []
        },
        template = {
            amount: {
                
                title: 'Sales Tax',
                children: [{
                    title: 'Main Answer',
                    children: [{
                        problem: '\\html{$problem}',
                        answer: '\\grp{\\str{$}}{\\css{\\inputcash{$answer}}{width200px}}',
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
                            '{\\frac{\\input{[\"$$ln\",\"$$rn\"]}}{\\input{[\"$$ld\",\"$$rd\"]}}}'+
                            '{\\sign{=}}'+
                            '{\\frac{\\input{[\"$$rn\",\"$$ln\"]}}{\\input{[\"$$rd\",\"$$ld\"]}}}'+
                        '}}{well}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }, {
                        problem: '\\html{$problem}',
                        answer: '\\wb{\\rowgrp{'+
                            '\\choose{[\\ins{}{q},\\ins{The standard percent proportion is set up as follows:}]}{$$previousCorrect}'+
                        '}{'+
                            '\\css{\\choose{[\\ins{}{q},\\grp{\\frac{\\str{$$dln}}{\\str{$$dld}}}{\\sign{=}}{\\frac{\\str{$$drn}}{\\str{$$drd}}}]}{$$previousCorrect}}{bottom-marg}'+
                        '}{'+
                            '\\choose{[\\ins{Yes!},\\ins{We substitute the given values to get:}]}{$$previousCorrect}'+
                        '}{'+
                            '\\css{\\grp{\\frac{\\str{$$ln}}{\\str{$$ld}}}{\\sign{=}}{\\frac{\\str{$$rn}}{\\str{$$rd}}}}{bottom-marg}'+
                        '}{'+
                            '\\ins{Now solve the problem.}'+
                        '}{'+
                            '\\css{\\grp{\\str{X}}{\\sign{=}}{\\set{\\input{$$answer}}{$$key}}}{proportion-application}'+
                        '}}{well}{end}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }, {
                        problem: '\\html{$problem}',
                        answer: '\\wb{\\rowgrp{'+
                            '\\css{\\choose{[\\ins{}{q},\\grp{\\frac{\\str{$$ln}}{\\str{$$ld}}}{\\sign{=}}{\\frac{\\str{$$rn}}{\\str{$$rd}}}]}{$$previousCorrect}}{bottom-marg}'+
                        '}{'+
                            '\\choose{[\\ins{Congratulations!},\\ins{The correct answer is found by following the process to solve all proportion problems. We substitute the given values to get:}]}{$$previousCorrect}'+
                        '}{'+
                            '\\css{\\choose{[\\grp{\\frac{\\str{$$ln}}{\\str{$$ld}}}{\\sign{=}}{\\frac{\\str{$$rn}}{\\str{$$rd}}},\\css{\\grp{\\str{X}}{\\sign{=}}{\\html{$solution}}}{proportion-application}]}{$$previousCorrect}}{bottom-marg}'+
                        '}{'+
                            '\\choose{[\\ins{}{q},\\ins{The answer is}]}{$$previousCorrect}'+
                        '}{'+
                            '\\choose{[\\ins{}{q},\\css{\\grp{\\str{$$pre_symbol}}{\\str{$answer}}{\\str{$$post_symbol}}}{proportion-application}]}{$$previousCorrect}'+
                        '}}{well}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }]
                }]
            },
			rate: {
                
                title: 'Sales Tax',
                children: [{
                    title: 'Main Answer',
                    children: [{
                        problem: '\\html{$problem}',
                        answer: '\\grp{\\css{\\input{$answer}}{width200px}}{\\str{%}}',
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
                            '{\\frac{\\input{[\"$$ln\",\"$$rn\"]}}{\\input{[\"$$ld\",\"$$rd\"]}}}'+
                            '{\\sign{=}}'+
                            '{\\frac{\\input{[\"$$rn\",\"$$ln\"]}}{\\input{[\"$$rd\",\"$$ld\"]}}}'+
                        '}}{well}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }, {
                        problem: '\\html{$problem}',
                        answer: '\\wb{\\rowgrp{'+
                            '\\choose{[\\ins{}{q},\\ins{The standard percent proportion is set up as follows:}]}{$$previousCorrect}'+
                        '}{'+
                            '\\css{\\choose{[\\ins{}{q},\\grp{\\frac{\\str{$$dln}}{\\str{$$dld}}}{\\sign{=}}{\\frac{\\str{$$drn}}{\\str{$$drd}}}]}{$$previousCorrect}}{bottom-marg}'+
                        '}{'+
                            '\\choose{[\\ins{Yes!},\\ins{We substitute the given values to get:}]}{$$previousCorrect}'+
                        '}{'+
                            '\\css{\\grp{\\frac{\\str{$$ln}}{\\str{$$ld}}}{\\sign{=}}{\\frac{\\str{$$rn}}{\\str{$$rd}}}}{bottom-marg}'+
                        '}{'+
                            '\\ins{Now solve the problem.}'+
                        '}{'+
                            '\\css{\\grp{\\str{X}}{\\sign{=}}{\\set{\\input{$$answer}}{$$key}}}{proportion-application}'+
                        '}}{well}{end}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }, {
                        problem: '\\html{$problem}',
                        answer: '\\wb{\\rowgrp{'+
                            '\\css{\\choose{[\\ins{}{q},\\grp{\\frac{\\str{$$ln}}{\\str{$$ld}}}{\\sign{=}}{\\frac{\\str{$$rn}}{\\str{$$rd}}}]}{$$previousCorrect}}{bottom-marg}'+
                        '}{'+
                            '\\choose{[\\ins{Congratulations!},\\ins{The correct answer is found by following the process to solve all proportion problems. We substitute the given values to get:}]}{$$previousCorrect}'+
                        '}{'+
                            '\\css{\\choose{[\\grp{\\frac{\\str{$$ln}}{\\str{$$ld}}}{\\sign{=}}{\\frac{\\str{$$rn}}{\\str{$$rd}}},\\css{\\grp{\\str{X}}{\\sign{=}}{\\html{$solution}}}{proportion-application}]}{$$previousCorrect}}{bottom-marg}'+
                        '}{'+
                            '\\choose{[\\ins{}{q},\\ins{The answer is}]}{$$previousCorrect}'+
                        '}{'+
                            '\\choose{[\\ins{}{q},\\css{\\grp{\\str{$$pre_symbol}}{\\str{$answer}}{\\str{$$post_symbol}}}{proportion-application}]}{$$previousCorrect}'+
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
            {  //1a
                problem: 'A TV sells for $420. If the sales tax is 6%, how much sales tax is paid?',
                answer: '25.20', template: 'amount', pre_symbol: '$', post_symbol: '', 
                key: 'rn', keyf: 'ln', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: '6', rn: 'x', 
                ld: '100', rd: '420', 
                solution: '$$ln &#149; $$rd &#247; $$ld',
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"], ["key", "keyf"]],
            },
            {  //1b 
                problem: 'You buy a TV, and pay $25.20 in sales tax. If the sales tax rate is 6%, what was the cost of the TV without the sales tax included?',
                answer: '420.00', template: 'amount', pre_symbol: '$', post_symbol: '', 
                key: 'rd', keyf: 'ld', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: '6', rn: '25.20', 
                ld: '100', rd: 'x', 
                solution: '$$ld &#149; $$rn &#247; $$ln',
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"], ["key", "keyf"]],
            },
            {  //1c 
                problem: 'You buy a TV for $420, and then pay another $25.20 in sales tax. What was the sales tax rate?',
                answer: '6', template: 'rate', pre_symbol: '', post_symbol: '%', 
                key: 'rd', keyf: 'ld', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: 'x', rn: '25.20', 
                ld: '100', rd: '420', 
                solution: '$$ld &#149; $$rn &#247; $$rd',
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"], ["key", "keyf"]],
            },
            
            {  //2a
                problem: 'A pair of shoes sells for $80. If the sales tax is 6.75%, how much sales tax is paid?',
                answer: '5.40', template: 'amount', pre_symbol: '$', post_symbol: '', 
                key: 'rn', keyf: 'ln', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: '6.75', rn: 'x', 
                ld: '100', rd: '80', 
                solution: '$$ln &#149; $$rd &#247; $$ld',
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"], ["key", "keyf"]],
            },
            {  //2b 
                problem: 'You buy a pairs of shoes, and pay $5.40 in sales tax. If the sales tax rate is 6.75%, what was the cost of the shoes without the sales tax included?',
                answer: '80.00', template: 'amount', pre_symbol: '$', post_symbol: '', 
                key: 'rd', keyf: 'ld', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: '6.75', rn: '5.40', 
                ld: '100', rd: 'x', 
                solution: '$$ld &#149; $$rn &#247; $$ln',
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"], ["key", "keyf"]],
            },
            {  //2c 
                problem: 'You buy a pair of shoes for $80, and then pay another $5.40 in sales tax. What was the sales tax rate?',
                answer: '6.75', template: 'rate', pre_symbol: '', post_symbol: '%', 
                key: 'rd', keyf: 'ld', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: 'x', rn: '5.40', 
                ld: '100', rd: '80', 
                solution: '$$ld &#149; $$rn &#247; $$rd',
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"], ["key", "keyf"]],
            },
            
            {  //3a
                problem: 'A baseball mitt sells for $25. If the sales tax is 7%, how much sales tax is paid?',
                answer: '1.75', template: 'amount', pre_symbol: '$', post_symbol: '', 
                key: 'rn', keyf: 'ln', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: '7', rn: 'x', 
                ld: '100', rd: '25', 
                solution: '$$ln &#149; $$rd &#247; $$ld',
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"], ["key", "keyf"]],
            },
            {  //3b 
                problem: 'You buy a baseball mitt, and pay $1.75 in sales tax. If the sales tax rate is 7%, what was the cost of the shoes without the sales tax included?',
                answer: '25.00', template: 'amount', pre_symbol: '$', post_symbol: '', 
                key: 'rd', keyf: 'ld', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: '7', rn: '1.75', 
                ld: '100', rd: 'x', 
                solution: '$$ld &#149; $$rn &#247; $$ln',
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"], ["key", "keyf"]],
            },
            {  //3c 
                problem: 'You buy a baseball mitt for $25, and then pay another $1.75 in sales tax. What was the sales tax rate?',
                answer: '7', template: 'rate', pre_symbol: '', post_symbol: '%', 
                key: 'rd', keyf: 'ld', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: 'x', rn: '1.75', 
                ld: '100', rd: '25', 
                solution: '$$ld &#149; $$rn &#247; $$rd',
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"], ["key", "keyf"]],
            },
            
            {  //4a
                problem: 'Ana buys three books for $30. If the sales tax is 5.5%, how much sales tax does she pay?',
                answer: '1.65', template: 'amount', pre_symbol: '$', post_symbol: '', 
                key: 'rn', keyf: 'ln', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: '5.5', rn: 'x', 
                ld: '100', rd: '30', 
                solution: '$$ln &#149; $$rd &#247; $$ld',
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"], ["key", "keyf"]],
            },
            {  //4b 
                problem: 'Ana buys three books, and pays $1.65 in sales tax. If the sales tax rate is 5.5%, what was the cost of the books without the sales tax included?',
                answer: '30.00', template: 'amount', pre_symbol: '$', post_symbol: '', 
                key: 'rd', keyf: 'ld', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: '5.5', rn: '1.65', 
                ld: '100', rd: 'x', 
                solution: '$$ld &#149; $$rn &#247; $$ln',
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"], ["key", "keyf"]],
            },
            {  //4c 
                problem: 'Ana buys three books for $30, and then pays another $1.65 in sales tax. What was the sales tax rate?',
                answer: '5.5', template: 'rate', pre_symbol: '', post_symbol: '%', 
                key: 'rd', keyf: 'ld', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: 'x', rn: '1.65', 
                ld: '100', rd: '30', 
                solution: '$$ld &#149; $$rn &#247; $$rd',
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"], ["key", "keyf"]],
            },
            
            {  //5a
                problem: 'Alex bought a coat for $120. If the sales tax rate is 6.25%, how much sales tax does he pay?',
                answer: '7.50', template: 'amount', pre_symbol: '$', post_symbol: '', 
                key: 'rn', keyf: 'ln', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: '6.25', rn: 'x', 
                ld: '100', rd: '120', 
                solution: '$$ln &#149; $$rd &#247; $$ld',
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"], ["key", "keyf"]],
            },
            {  //5b 
                problem: 'Alex buys a coat, and pays $7.50 in sales tax. If the sales tax rate is 6.25%, what was the cost of the coat without the sales tax included?',
                answer: '120.00', template: 'amount', pre_symbol: '$', post_symbol: '', 
                key: 'rd', keyf: 'ld', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: '6.25', rn: '7.50', 
                ld: '100', rd: 'x', 
                solution: '$$ld &#149; $$rn &#247; $$ln',
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"], ["key", "keyf"]],
            },
            {  //5c 
                problem: 'Alex bought a coat for $120, and then pays another $7.50 in sales tax. What was the sales tax rate?',
                answer: '6.25', template: 'rate', pre_symbol: '', post_symbol: '%', 
                key: 'rd', keyf: 'ld', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: 'x', rn: '7.50', 
                ld: '100', rd: '120', 
                solution: '$$ld &#149; $$rn &#247; $$rd',
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"], ["key", "keyf"]],
            },
            
            {  //6a
                problem: 'Michelle bought a pair of gloves for $18. If the sales tax rate is 8%, how much sales tax does she pay?',
                answer: '1.44', template: 'amount', pre_symbol: '$', post_symbol: '', 
                key: 'rn', keyf: 'ln', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: '8', rn: 'x', 
                ld: '100', rd: '18', 
                solution: '$$ln &#149; $$rd &#247; $$ld',
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"], ["key", "keyf"]],
            },
            {  //6b 
                problem: 'Michelle bought a pair of gloves, and pays $1.44 in sales tax. If the sales tax rate is 8%, what was the cost of the coat without the sales tax included?',
                answer: '18.00', template: 'amount', pre_symbol: '$', post_symbol: '', 
                key: 'rd', keyf: 'ld', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: '8', rn: '1.44', 
                ld: '100', rd: 'x', 
                solution: '$$ld &#149; $$rn &#247; $$ln',
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"], ["key", "keyf"]],
            },
            {  //6c 
                problem: 'Michelle bought a pair of gloves for $18, and then paid another $1.44 in sales tax. What was the sales tax rate?',
                answer: '8', template: 'rate', pre_symbol: '', post_symbol: '%', 
                key: 'rd', keyf: 'ld', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: 'x', rn: '1.44', 
                ld: '100', rd: '18', 
                solution: '$$ld &#149; $$rn &#247; $$rd',
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"], ["key", "keyf"]],
            },
            
            {  //7a
                problem: 'Miguel bought a car for $14,500. If the sales tax rate is 7.5%, how much sales tax does he pay?',
                answer: '1087.50', template: 'amount', pre_symbol: '$', post_symbol: '', 
                key: 'rn', keyf: 'ln', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: '7.5', rn: 'x', 
                ld: '100', rd: '14500', 
                solution: '$$ln &#149; $$rd &#247; $$ld',
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"], ["key", "keyf"]],
            },
            {  //7b 
                problem: 'Miguel bought a car, and pays $1,087.50 in sales tax. If the sales tax rate is 7.5%, what was the cost of the car without the sales tax included?',
                answer: '14500.00', template: 'amount', pre_symbol: '$', post_symbol: '', 
                key: 'rd', keyf: 'ld', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: '7.5', rn: '1087.50', 
                ld: '100', rd: 'x', 
                solution: '$$ld &#149; $$rn &#247; $$ln',
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"], ["key", "keyf"]],
            },
            {  //7c 
                problem: 'Miguel bought a car for $14,500, and then paid another $1,087.50 in sales tax. What was the sales tax rate?',
                answer: '7.5', template: 'rate', pre_symbol: '', post_symbol: '%', 
                key: 'rd', keyf: 'ld', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: 'x', rn: '1087.50', 
                ld: '100', rd: '14500', 
                solution: '$$ld &#149; $$rn &#247; $$rd',
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"], ["key", "keyf"]],
            },
            
            {  //8a
                problem: 'A pair of shoes sells for $60. If the sales tax is 6.5%, how much sales tax is paid?',
                answer: '3.90', template: 'amount', pre_symbol: '$', post_symbol: '', 
                key: 'rn', keyf: 'ln', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: '6.5', rn: 'x', 
                ld: '100', rd: '60', 
                solution: '$$ln &#149; $$rd &#247; $$ld',
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"], ["key", "keyf"]],
            },
            {  //8b 
                problem: 'You buy a pairs of shoes, and pay $3.90 in sales tax. If the sales tax rate is 6.5%, what was the cost of the shoes without the sales tax included?',
                answer: '60.00', template: 'amount', pre_symbol: '$', post_symbol: '', 
                key: 'rd', keyf: 'ld', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: '6.5', rn: '3.90', 
                ld: '100', rd: 'x', 
                solution: '$$ld &#149; $$rn &#247; $$ln',
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"], ["key", "keyf"]],
            },
            {  //8c 
                problem: 'You buy a pair of shoes for $60, and then pay another $3.90 in sales tax. What was the sales tax rate?',
                answer: '6.5', template: 'rate', pre_symbol: '', post_symbol: '%', 
                key: 'rd', keyf: 'ld', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: 'x', rn: '3.90', 
                ld: '100', rd: '60', 
                solution: '$$ld &#149; $$rn &#247; $$rd',
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"], ["key", "keyf"]],
            },
            
            {  //9a
                problem: 'A baseball mitt sells for $40. If the sales tax is 7.25%, how much sales tax is paid?',
                answer: '2.90', template: 'amount', pre_symbol: '$', post_symbol: '', 
                key: 'rn', keyf: 'ln', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: '7.25', rn: 'x', 
                ld: '100', rd: '40', 
                solution: '$$ln &#149; $$rd &#247; $$ld',
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"], ["key", "keyf"]],
            },
            {  //9b 
                problem: 'You buy a baseball mitt, and pay $2.90 in sales tax. If the sales tax rate is 7.25%, what was the cost of the shoes without the sales tax included?',
                answer: '40.00', template: 'amount', pre_symbol: '$', post_symbol: '', 
                key: 'rd', keyf: 'ld', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: '7.25', rn: '2.90', 
                ld: '100', rd: 'x', 
                solution: '$$ld &#149; $$rn &#247; $$ln',
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"], ["key", "keyf"]],
            },
            {  //9c 
                problem: 'You buy a baseball mitt for $40, and then pay another $2.90 in sales tax. What was the sales tax rate?',
                answer: '7.25', template: 'rate', pre_symbol: '', post_symbol: '%', 
                key: 'rd', keyf: 'ld', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: 'x', rn: '2.90', 
                ld: '100', rd: '40', 
                solution: '$$ld &#149; $$rn &#247; $$rd',
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"], ["key", "keyf"]],
            },
            
            {  //10a
                problem: 'Ana buys three books for $26. If the sales tax is 6%, how much sales tax does she pay?',
                answer: '1.56', template: 'amount', pre_symbol: '$', post_symbol: '', 
                key: 'rn', keyf: 'ln', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: '6', rn: 'x', 
                ld: '100', rd: '26', 
                solution: '$$ln &#149; $$rd &#247; $$ld',
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"], ["key", "keyf"]],
            },
            {  //10b 
                problem: 'Ana buys three books, and pays $1.56 in sales tax. If the sales tax rate is 6%, what was the cost of the books without the sales tax included?',
                answer: '26.00', template: 'amount', pre_symbol: '$', post_symbol: '', 
                key: 'rd', keyf: 'ld', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: '6', rn: '1.56', 
                ld: '100', rd: 'x', 
                solution: '$$ld &#149; $$rn &#247; $$ln',
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"], ["key", "keyf"]],
            },
            {  //10c 
                problem: 'Ana buys three books for $26, and then pays another $1.56 in sales tax. What was the sales tax rate?',
                answer: '6', template: 'rate', pre_symbol: '', post_symbol: '%', 
                key: 'rd', keyf: 'ld', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: 'x', rn: '1.56', 
                ld: '100', rd: '26', 
                solution: '$$ld &#149; $$rn &#247; $$rd',
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"], ["key", "keyf"]],
            },
            
            {  //11a
                problem: 'Alex bought a coat for $100. If the sales tax rate is 8.75%, how much sales tax does he pay?',
                answer: '8.45', template: 'amount', pre_symbol: '$', post_symbol: '', 
                key: 'rn', keyf: 'ln', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: '8.75', rn: 'x', 
                ld: '100', rd: '100', 
                solution: '$$ln &#149; $$rd &#247; $$ld',
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"], ["key", "keyf"]],
            },
            {  //11b 
                problem: 'Alex buys a coat, and pays $8.75 in sales tax. If the sales tax rate is 8.75%, what was the cost of the coat without the sales tax included?',
                answer: '100.00', template: 'amount', pre_symbol: '$', post_symbol: '', 
                key: 'rd', keyf: 'ld', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: '8.75', rn: '8.45', 
                ld: '100', rd: 'x', 
                solution: '$$ld &#149; $$rn &#247; $$ln',
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"], ["key", "keyf"]],
            },
            {  //11c 
                problem: 'Alex bought a coat for $100, and then pays another $8.75 in sales tax. What was the sales tax rate?',
                answer: '8.75', template: 'rate', pre_symbol: '', post_symbol: '%', 
                key: 'rd', keyf: 'ld', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: 'x', rn: '8.45', 
                ld: '100', rd: '100', 
                solution: '$$ld &#149; $$rn &#247; $$rd',
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"], ["key", "keyf"]],
            },
            
            {  //12a
                problem: 'Michelle bought a pair of gloves for $22. If the sales tax rate is 7%, how much sales tax does she pay?',
                answer: '1.54', template: 'amount', pre_symbol: '$', post_symbol: '', 
                key: 'rn', keyf: 'ln', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: '7', rn: 'x', 
                ld: '100', rd: '22', 
                solution: '$$ln &#149; $$rd &#247; $$ld',
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"], ["key", "keyf"]],
            },
            {  //12b 
                problem: 'Michelle bought a pair of gloves, and pays $1.54 in sales tax. If the sales tax rate is 7%, what was the cost of the coat without the sales tax included?',
                answer: '22.00', template: 'amount', pre_symbol: '$', post_symbol: '', 
                key: 'rd', keyf: 'ld', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: '7', rn: '1.54', 
                ld: '100', rd: 'x', 
                solution: '$$ld &#149; $$rn &#247; $$ln',
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"], ["key", "keyf"]],
            },
            {  //12c 
                problem: 'Michelle bought a pair of gloves for $22, and then paid another $1.54 in sales tax. What was the sales tax rate?',
                answer: '7', template: 'rate', pre_symbol: '', post_symbol: '%', 
                key: 'rd', keyf: 'ld', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: 'x', rn: '1.54', 
                ld: '100', rd: '22', 
                solution: '$$ld &#149; $$rn &#247; $$rd',
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"], ["key", "keyf"]],
            },
            
            {  //13a
                problem: 'Miguel bought a car for $16,000. If the sales tax rate is 8.5%, how much sales tax does he pay?',
                answer: '1360.00', template: 'amount', pre_symbol: '$', post_symbol: '', 
                key: 'rn', keyf: 'ln', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: '8.5', rn: 'x', 
                ld: '100', rd: '16000', 
                solution: '$$ln &#149; $$rd &#247; $$ld',
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"], ["key", "keyf"]],
            },
            {  //13b 
                problem: 'Miguel bought a car, and pays $1,360 in sales tax. If the sales tax rate is 8.5%, what was the cost of the car without the sales tax included?',
                answer: '16000.00', template: 'amount', pre_symbol: '$', post_symbol: '', 
                key: 'rd', keyf: 'ld', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: '8.5', rn: '1360', 
                ld: '100', rd: 'x', 
                solution: '$$ld &#149; $$rn &#247; $$ln',
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"], ["key", "keyf"]],
            },
            {  //13c 
                problem: 'Miguel bought a car for $16,000, and then paid another $1,360 in sales tax. What was the sales tax rate?',
                answer: '8.5', template: 'rate', pre_symbol: '', post_symbol: '%', 
                key: 'rd', keyf: 'ld', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: 'x', rn: '1360', 
                ld: '100', rd: '16000', 
                solution: '$$ld &#149; $$rn &#247; $$rd',
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"], ["key", "keyf"]],
            }
        ],
        interpolate = function (obj, data) {
            var string = JSON.stringify(obj);
            for (var symbol in data) {
                if (data.hasOwnProperty(symbol)) {
                    string = string.replace(new RegExp('(\\$)?\\$' + symbol, 'g'), function ($0, $1) { return $1?$0 : data[symbol]; }); //console.log(string); 
                }
            }
            var ret = JSON.parse(string);
            ret.data = angular.copy(data);
            return ret;
        };

    ret.children = data.map(function (problem) {
        return interpolate(template[problem.template], problem);
    });
    
    return ret;
});
