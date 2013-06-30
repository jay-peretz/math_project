/*global angular */

angular.module('mathSkills').service('data21_4', function () {
    var ret = {
            title: '21.4 Discounts',
            path: '21.4-discounts',
            children: []
        },
        template = {
            main: {
                
                title: 'Discounts',
                children: [{
                    title: 'Main Answer',
                    children: [{
                        problem: '\\html{$problem}',
                        answer: '\\input{$answer}',
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
                            '\\choose{[\\html{},\\ins{The standard percent proportion is set up as follows:}]}{$$previousCorrect}'+
                        '}{'+
                            '\\css{\\choose{[\\html{},\\grp{\\frac{\\str{$$dln}}{\\str{$$dld}}}{\\sign{=}}{\\frac{\\str{$$drn}}{\\str{$$drd}}}]}{$$previousCorrect}}{bottom-marg}'+
                        '}{'+
                            '\\choose{[\\ins{Yes!},\\ins{We substitute the given values to get:}]}{$$previousCorrect}'+
                        '}{'+
                            '\\css{\\grp{\\frac{\\str{$$ln}}{\\str{$$ld}}}{\\sign{=}}{\\frac{\\str{$$rn}}{\\str{$$rd}}}}{bottom-marg}'+
                        '}{'+
                            '\\ins{Now solve the problem.}'+
                        '}{'+
                            '\\css{\\grp{\\html{X}}{\\sign{=}}{\\set{\\input{$$answer}}{$$key}}}{proportion-application}'+
                        '}}{well}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }, {
                        problem: '\\html{$problem}',
                        answer: '\\wb{\\rowgrp{'+
                            '\\css{\\choose{[\\html{},\\grp{\\frac{\\str{$$ln}}{\\str{$$ld}}}{\\sign{=}}{\\frac{\\str{$$rn}}{\\str{$$rd}}}]}{$$previousCorrect}}{bottom-marg}'+
                        '}{'+
                            '\\choose{[\\ins{Congratulations!},\\ins{The correct answer is found by following the process to solve all proportion problems. We substitute the given values to get:}]}{$$previousCorrect}'+
                        '}{'+
                            '\\choose{[\\grp{\\frac{\\str{$$ln}}{\\str{$$ld}}}{\\sign{=}}{\\frac{\\str{$$rn}}{\\str{$$rd}}},\\css{\\grp{\\html{X}}{\\sign{=}}{\\html{$solution}}}{proportion-application}]}{$$previousCorrect}'+
                        '}{'+
                            '\\choose{[\\html{},\\ins{The answer is}]}{$$previousCorrect}'+
                        '}{'+
                            '\\choose{[\\html{},\\css{\\grp{\\html{$$pre_symbol}}{\\html{$$answer}}{\\html{$$post_symbol}}}{proportion-application}]}{$$previousCorrect}'+
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
                problem: 'A refrigerator normally sells for $950. The appliance dealer put it on sale at a 14% discount. What is the amount of the discount?',
                answer: '133', template: 'main', pre_symbol: '$', post_symbol: '', 
                key: 'rn', keyf: 'ln', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: '14', rn: 'x', 
                ld: '100', rd: '950', 
                solution: '$$ln &#149; $$rd &#247; $$ld',
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"], ["key", "keyf"]],
            },
            {  //1b
                problem: 'A refrigerator was discounted 14%. The amount of the discount was $133. What was the original sales price of the refrigerator before the discount?',
                answer: '950', template: 'main', pre_symbol: '$', post_symbol: '', 
                key: 'rd', keyf: 'ld', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: '14', rn: '133', 
                ld: '100', rd: 'x', 
                solution: '$$ld &#149; $$rn &#247; $$ln',
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"], ["key", "keyf"]],
            },
            {  //1c 
                problem: 'A refrigerator that regularly sells for $950 was discounted $133. What was the percent discount?',
                answer: '14', template: 'main', pre_symbol: '', post_symbol: '%', 
                key: 'rd', keyf: 'ld', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: 'x', rn: '133', 
                ld: '100', rd: '950', 
                solution: '$$ld &#149; $$rn &#247; $$rd',
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"], ["key", "keyf"]],
            },
            {  //1d 
                problem: 'A refrigerator that regularly sells for $950 was now on sale for $817. What was the percent discount?',
                answer: '14', template: 'main', pre_symbol: '', post_symbol: '%', 
                key: 'rd', keyf: 'ld', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: 'x', rn: '133', 
                ld: '100', rd: '950', 
                solution: '$$ld &#149; $$rn &#247; $$rd',
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"], ["key", "keyf"]],
            },
            
            {  //2a
                problem: 'A textbook normally sells for $34.99. The appliance dealer put it on sale at a 36% discount. What is the amount of the discount?',
                answer: '12.60', template: 'main', pre_symbol: '$', post_symbol: '', 
                key: 'rn', keyf: 'ln', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: '36', rn: 'x', 
                ld: '100', rd: '34.99', 
                solution: '$$ln &#149; $$rd &#247; $$ld',
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"], ["key", "keyf"]],
            },
            {  //2b
                problem: 'A textbook was discounted 36%. The amount of the discount was $12.60. What was the original sales price of the refrigerator before the discount?',
                answer: '34.99', template: 'main', pre_symbol: '$', post_symbol: '', 
                key: 'rd', keyf: 'ld', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: '36', rn: '12.60', 
                ld: '100', rd: 'x', 
                solution: '$$ld &#149; $$rn &#247; $$ln',
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"], ["key", "keyf"]],
            },
            {  //2c 
                problem: 'A textbook that regularly sells for $34.99 was discounted $12.60. What was the percent discount?',
                answer: '36', template: 'main', pre_symbol: '', post_symbol: '%', 
                key: 'rd', keyf: 'ld', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: 'x', rn: '12.60', 
                ld: '100', rd: '34.99', 
                solution: '$$ld &#149; $$rn &#247; $$rd',
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"], ["key", "keyf"]],
            },
            {  //2d 
                problem: 'A textbook that regularly sells for $34.99 is now on sale for $22.39. What was the percent discount?',
                answer: '36', template: 'main', pre_symbol: '', post_symbol: '%', 
                key: 'rd', keyf: 'ld', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: 'x', rn: '12.60', 
                ld: '100', rd: '34.99', 
                solution: '$$ld &#149; $$rn &#247; $$rd',
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"], ["key", "keyf"]],
            },
            
            {  //3a
                problem: 'A used car was originally priced at $6,400. The dealer put it on sale at a 5.2% discount. What is the amount of the discount?',
                answer: '332.80', template: 'main', pre_symbol: '$', post_symbol: '', 
                key: 'rn', keyf: 'ln', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: '5.2', rn: 'x', 
                ld: '100', rd: '6400', 
                solution: '$$ln &#149; $$rd &#247; $$ld',
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"], ["key", "keyf"]],
            },
            {  //3b
                problem: 'A used car was discounted 5.2%. The amount of the discount was $332.80. What was the original price of the car before the discount?',
                answer: '6400', template: 'main', pre_symbol: '$', post_symbol: '', 
                key: 'rd', keyf: 'ld', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: '5.2', rn: '332.80', 
                ld: '100', rd: 'x', 
                solution: '$$ld &#149; $$rn &#247; $$ln',
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"], ["key", "keyf"]],
            },
            {  //3c 
                problem: 'A used car that was originally priced at $6,400 was discounted $332.80. What was the percent discount?',
                answer: '5.2', template: 'main', pre_symbol: '', post_symbol: '%', 
                key: 'rd', keyf: 'ld', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: 'x', rn: '332.80', 
                ld: '100', rd: '6400', 
                solution: '$$ld &#149; $$rn &#247; $$rd',
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"], ["key", "keyf"]],
            },
            {  //3d 
                problem: 'A used car that was originally priced at $6,400 is now on sale for $6,067.20. What was the percent discount?',
                answer: '5.2', template: 'main', pre_symbol: '', post_symbol: '%', 
                key: 'rd', keyf: 'ld', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: 'x', rn: '332.80', 
                ld: '100', rd: '6400', 
                solution: '$$ld &#149; $$rn &#247; $$rd',
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"], ["key", "keyf"]],
            },
            
            {  //4a
                problem: 'A tuxedo rental was regularly priced at $85. The dealer put it on sale at a 20% discount. What is the amount of the discount?',
                answer: '17', template: 'main', pre_symbol: '$', post_symbol: '', 
                key: 'rn', keyf: 'ln', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: '20', rn: 'x', 
                ld: '100', rd: '85', 
                solution: '$$ln &#149; $$rd &#247; $$ld',
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"], ["key", "keyf"]],
            },
            {  //4b
                problem: 'A tuxedo rental was discounted 20%. The amount of the discount was $17. What was the original price of the car before the discount?',
                answer: '85', template: 'main', pre_symbol: '$', post_symbol: '', 
                key: 'rd', keyf: 'ld', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: '20', rn: '17', 
                ld: '100', rd: 'x', 
                solution: '$$ld &#149; $$rn &#247; $$ln',
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"], ["key", "keyf"]],
            },
            {  //4c 
                problem: 'A tuxedo rental was regularly priced at $85 was discounted $17. What was the percent discount?',
                answer: '20', template: 'main', pre_symbol: '', post_symbol: '%', 
                key: 'rd', keyf: 'ld', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: 'x', rn: '17', 
                ld: '100', rd: '85', 
                solution: '$$ld &#149; $$rn &#247; $$rd',
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"], ["key", "keyf"]],
            },
            {  //4d 
                problem: 'A tuxedo rental that was regularly priced at $85 is now on sale for $68. What was the percent discount?',
                answer: '20', template: 'main', pre_symbol: '', post_symbol: '%', 
                key: 'rd', keyf: 'ld', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: 'x', rn: '17', 
                ld: '100', rd: '85', 
                solution: '$$ld &#149; $$rn &#247; $$rd',
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"], ["key", "keyf"]],
            },
            
            {  //5a
                problem: 'A department store was selling all its clothing at a 15% discount. Mika bought clothing that normally would have cost $69.75. What is the amount of the discount?',
                answer: '10.46', template: 'main', pre_symbol: '$', post_symbol: '', 
                key: 'rn', keyf: 'ln', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: '15', rn: 'x', 
                ld: '100', rd: '69.75', 
                solution: '$$ln &#149; $$rd &#247; $$ld',
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"], ["key", "keyf"]],
            },
            {  //5b
                problem: 'A department store was selling all its clothing at a 15% discount. Mika was discounted $10.46 on the clothing she purchased. What would the price of the clothing have been without the discount?',
                answer: '69.75', template: 'main', pre_symbol: '$', post_symbol: '', 
                key: 'rd', keyf: 'ld', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: '15', rn: '10.46', 
                ld: '100', rd: 'x', 
                solution: '$$ld &#149; $$rn &#247; $$ln',
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"], ["key", "keyf"]],
            },
            {  //5c 
                problem: 'Mika bought clothing that normally would have cost $69.75, but was discounted $10.46. What was the percent discount?',
                answer: '15', template: 'main', pre_symbol: '', post_symbol: '%', 
                key: 'rd', keyf: 'ld', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: 'x', rn: '10.46', 
                ld: '100', rd: '69.75', 
                solution: '$$ld &#149; $$rn &#247; $$rd',
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"], ["key", "keyf"]],
            },
            {  //5d 
                problem: 'Mika bought clothing that normally would have cost $69.75, but was now on sale for $59.29. What was the percent discount?',
                answer: '15', template: 'main', pre_symbol: '', post_symbol: '%', 
                key: 'rd', keyf: 'ld', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: 'x', rn: '10.46', 
                ld: '100', rd: '69.75', 
                solution: '$$ld &#149; $$rn &#247; $$rd',
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"], ["key", "keyf"]],
            },
            
            {  //6a
                problem: 'Concert tickets that cost $62.50 were put on sale at a 35% discount. What is the amount of the discount?',
                answer: '21.88', template: 'main', pre_symbol: '$', post_symbol: '', 
                key: 'rn', keyf: 'ln', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: '35', rn: 'x', 
                ld: '100', rd: '62.50', 
                solution: '$$ln &#149; $$rd &#247; $$ld',
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"], ["key", "keyf"]],
            },
            {  //6b
                problem: 'Concert tickets were discounted 35%. The amount of the discount was $21.88. What was the original price of the tickets before the discount?',
                answer: '62.50', template: 'main', pre_symbol: '$', post_symbol: '', 
                key: 'rd', keyf: 'ld', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: '35', rn: '21.88', 
                ld: '100', rd: 'x', 
                solution: '$$ld &#149; $$rn &#247; $$ln',
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"], ["key", "keyf"]],
            },
            {  //6c 
                problem: 'Concert tickets that were priced at $62.50 were discounted $21.88. What was the percent discount?',
                answer: '35', template: 'main', pre_symbol: '', post_symbol: '%', 
                key: 'rd', keyf: 'ld', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: 'x', rn: '21.88', 
                ld: '100', rd: '62.50', 
                solution: '$$ld &#149; $$rn &#247; $$rd',
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"], ["key", "keyf"]],
            },
            {  //6d 
                problem: 'Concert tickets that were selling for $62.50 were now costing only $40.62. What was the percent discount?',
                answer: '35', template: 'main', pre_symbol: '', post_symbol: '%', 
                key: 'rd', keyf: 'ld', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: 'x', rn: '21.88', 
                ld: '100', rd: '62.50', 
                solution: '$$ld &#149; $$rn &#247; $$rd',
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"], ["key", "keyf"]],
            },
            
            {  //7a
                problem: 'A sports store was selling all its merchandise at a 25% discount. Gunter bought equipment that normally would have cost $126.58. How much money did he save because of the discount?',
                answer: '31.65', template: 'main', pre_symbol: '$', post_symbol: '', 
                key: 'rn', keyf: 'ln', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: '25', rn: 'x', 
                ld: '100', rd: '126.58', 
                solution: '$$ln &#149; $$rd &#247; $$ld',
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"], ["key", "keyf"]],
            },
            {  //7b
                problem: 'A sports store was selling all its merchandise at a 25% discount. Gunter was discounted $31.65 on the clothing he purchased. What would the price of the equipment have been without the discount?',
                answer: '126.58', template: 'main', pre_symbol: '$', post_symbol: '', 
                key: 'rd', keyf: 'ld', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: '25', rn: '31.65', 
                ld: '100', rd: 'x', 
                solution: '$$ld &#149; $$rn &#247; $$ln',
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"], ["key", "keyf"]],
            },
            {  //7c 
                problem: 'Gunter bought equipment that normally would have cost $126.58, but was discounted $31.65. What was the percent discount?',
                answer: '25', template: 'main', pre_symbol: '', post_symbol: '%', 
                key: 'rd', keyf: 'ld', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: 'x', rn: '31.65', 
                ld: '100', rd: '126.58', 
                solution: '$$ld &#149; $$rn &#247; $$rd',
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"], ["key", "keyf"]],
            },
            {  //7d 
                problem: 'Gunter bought equipment that normally would have cost $126.58, but was now on sale for $94.93. What was the percent discount?',
                answer: '25', template: 'main', pre_symbol: '', post_symbol: '%', 
                key: 'rd', keyf: 'ld', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: 'x', rn: '31.65', 
                ld: '100', rd: '126.58', 
                solution: '$$ld &#149; $$rn &#247; $$rd',
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"], ["key", "keyf"]],
            },
            
            {  //8a
                problem: 'A student bus pass is regularly priced at $49. For one week only the county now offered to sell the bus passes at a 18% discount. What is the amount of the discount?',
                answer: '8.82', template: 'main', pre_symbol: '$', post_symbol: '', 
                key: 'rn', keyf: 'ln', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: '18', rn: 'x', 
                ld: '100', rd: '49', 
                solution: '$$ln &#149; $$rd &#247; $$ld',
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"], ["key", "keyf"]],
            },
            {  //8b
                problem: 'A student bus pass is discounted 18%. The amount of the discount is $8.82. What was the original price of the car before the discount?',
                answer: '49', template: 'main', pre_symbol: '$', post_symbol: '', 
                key: 'rd', keyf: 'ld', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: '18', rn: '8.82', 
                ld: '100', rd: 'x', 
                solution: '$$ld &#149; $$rn &#247; $$ln',
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"], ["key", "keyf"]],
            },
            {  //8c 
                problem: 'A student bus pass is regularly priced at $49, but was now discounted $8.82. What was the percent discount?',
                answer: '18', template: 'main', pre_symbol: '', post_symbol: '%', 
                key: 'rd', keyf: 'ld', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: 'x', rn: '8.82', 
                ld: '100', rd: '49', 
                solution: '$$ld &#149; $$rn &#247; $$rd',
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"], ["key", "keyf"]],
            },
            {  //8d 
                problem: 'A student bus pass that is regularly priced at $49 is now on sale for $40.18. What is the percent discount?',
                answer: '18', template: 'main', pre_symbol: '', post_symbol: '%', 
                key: 'rd', keyf: 'ld', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: 'x', rn: '8.82', 
                ld: '100', rd: '49', 
                solution: '$$ld &#149; $$rn &#247; $$rd',
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"], ["key", "keyf"]],
            },
            
            {  //9a
                problem: 'Concert tickets that cost $55 were put on sale at a 28% discount. What is the amount of the discount?',
                answer: '15.40', template: 'main', pre_symbol: '$', post_symbol: '', 
                key: 'rn', keyf: 'ln', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: '28', rn: 'x', 
                ld: '100', rd: '55', 
                solution: '$$ln &#149; $$rd &#247; $$ld',
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"], ["key", "keyf"]],
            },
            {  //9b
                problem: 'Concert tickets were discounted 28%. The amount of the discount was $15.40. What was the original price of the tickets before the discount?',
                answer: '55', template: 'main', pre_symbol: '$', post_symbol: '', 
                key: 'rd', keyf: 'ld', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: '28', rn: '15.40', 
                ld: '100', rd: 'x', 
                solution: '$$ld &#149; $$rn &#247; $$ln',
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"], ["key", "keyf"]],
            },
            {  //9c 
                problem: 'Concert tickets that were priced at $55 were discounted $15.40. What was the percent discount?',
                answer: '28', template: 'main', pre_symbol: '', post_symbol: '%', 
                key: 'rd', keyf: 'ld', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: 'x', rn: '15.40', 
                ld: '100', rd: '55', 
                solution: '$$ld &#149; $$rn &#247; $$rd',
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"], ["key", "keyf"]],
            },
            {  //9d 
                problem: 'Concert tickets that were selling for $55 were now costing only $39.60. What was the percent discount?',
                answer: '28', template: 'main', pre_symbol: '', post_symbol: '%', 
                key: 'rd', keyf: 'ld', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: 'x', rn: '15.40', 
                ld: '100', rd: '55', 
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
