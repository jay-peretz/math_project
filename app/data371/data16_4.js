/*global angular */

angular.module('mathSkills').service('data16_4', ['dataUtils', function (dataUtils) {
    var ret = {
            title: '16.4 Proportion Application Problems',
            path: '16.4-proportion-application-problems',
            children: []
        },
        template = {
            main: {
                
                title: 'Proportion Application Problems',
                children: [{
                    title: 'Main Answer',
                    children: [{
                        problem: '\\html{$problem<br><br><span class=blue-text>$question</span>}',
                        answer: '\\grp{\\input{$answer}}{\\frac{\\input{$$nanswer}}{\\input{$$danswer}}}',
                        controls: {
                            "checkAnswer": true,
                            "help": false,
                            "workbook": true
                        }
                    }]
                }, {
                    title: 'Workbook',  //step 1
                    children: [{
                        problem: '\\html{$problem<br><br><span class=blue-text>$question</span>}',
                        answer: '\\wb{\\rowgrp{'+
                            '\\ins{Identify the two items (labels) that are in relationship with each other:}'+
                        '}{'+
                            '\\frac'+
                                '{\\select{[\"$lbln\",\"$lbld\"]}{$lblarr}}'+  // left num.
                                '{\\select{[\"$lbld\",\"$lbln\"]}{$lblarr}}'+  // left den.
                        '}}{well}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }, {  //step 2
                        problem: '\\html{$problem<br><br><span class=blue-text>$question</span>}',
                        answer: '\\wb{\\rowgrp{'+
                            '\\choose{[\\ins{Good! Now what number of $$lbln and what number of $$lbld are provided in the given relationship?},\\ins{No, the given relationship is between $$lbln and $$lbld. Now what number of $$lbln and what number of $$lbld are provided in the given relationship?}]}{$$previousCorrect}'+
                        '}{'+
                            '\\frac'+
                                '{\\grp'+  // left num.
                                    '{\\input{$$lnw}}'+
                                    '{\\frac{\\input{$$lnn}}{\\input{$$lnd}}}'+
                                    '{\\str{ $$lbln}}'+
                                '}{\\grp'+  // left den.
                                    '{\\input{$$ldw}}'+
                                    '{\\frac{\\input{$$ldn}}{\\input{$$ldd}}}'+
                                    '{\\str{ $$lbld}}'+
                                '}'+
                        '}}{well}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }, {  //step 3
                        problem: '\\html{$problem<br><br><span class=blue-text>$question</span>}',
                        answer: '\\wb{\\rowgrp{'+
                            '\\choose{[\\ins{Yes, now make this first relationship between $$lbln and $$lbld equal to a second relationship (use \\"X\\" for an unknown value).},\\ins{We are told that there are $ln $$lbln to every $ld $$lbld. The given relationship is:}]}{$$previousCorrect}'+
                        '}{'+
                            '\\css{\\grp'+
                                '{\\frac{\\grp'+
                                    '{\\html{$$lnw}}'+
                                    '{\\frac{\\str{$$lnn}}{\\str{$$lnd}}}'+
                                    '{\\str{ $$lbln}}'+
                                '}{\\grp'+
                                    '{\\html{$$ldw}}'+
                                    '{\\frac{\\str{$$ldn}}{\\str{$$ldd}}}'+
                                    '{\\str{ $$lbld}}'+
                                '}}'+
                                '{\\str{=}}'+
                                '{\\frac{\\grp'+
                                    '{\\input{$$rnw}}'+
                                    '{\\frac{\\input{$$rnn}}{\\input{$$rnd}}}'+
                                    '{\\select{$$lbln}{$lblarr}}'+
                                '}{\\grp'+
                                    '{\\input{$$rdw}}'+
                                    '{\\frac{\\input{$$rdn}}{\\input{$$rdd}}}'+
                                    '{\\select{$$lbld}{$lblarr}}'+
                                '}'+
                            '}}{bottom-marg}'+
                        '}{'+
                            '\\choose{[\\ins{}{q},\\ins{Now make this first relationship between $$lbln and $$lbld equal to a second relationship (use \\"X\\" for an unknown value).}]}{$$previousCorrect}'+
                        '}}{well}',
                    
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }, {  //step 4
                        problem: '\\html{$problem<br><br><span class=blue-text>$question</span>}',
                        answer: '\\wb{\\rowgrp{'+
                            '\\choose{[\\ins{Great! You now have a proportion. Solve the proportion problem.},\\ins{The second relationship is an \\"unknown number\\" (shown here as \\"X\\") of $$lbld to every $rn $$lbln. You now have a proportion:}]}{$$previousCorrect}'+
                        '}{'+
                            '\\css{\\grp'+
                                '{\\frac{\\grp'+
                                    '{\\html{$$lnw}}'+
                                    '{\\frac{\\html{$$lnn}}{\\html{$$lnd}}}'+
                                    '{\\html{ $$lbln}}'+
                                '}{\\grp'+
                                    '{\\html{$$ldw}}'+
                                    '{\\frac{\\html{$$ldn}}{\\html{$$ldd}}}'+
                                    '{\\html{ $$lbld}}'+
                                '}}'+
                                '{\\html{=}}'+
                                '{\\frac{\\grp'+
                                    '{\\html{$$rnw}}'+
                                    '{\\frac{\\html{$$rnn}}{\\html{$$rnd}}}'+
                                    '{\\html{$$lbln}}'+
                                '}{\\grp'+
                                    '{\\html{$$rdw}}'+
                                    '{\\frac{\\html{$$rdn}}{\\html{$$rdd}}}'+
                                    '{\\html{$$lbld}}'+
                                '}}'+
                            '}{bottom-marg}'+
                        '}{'+
                            '\\ins{Now solve the proportion problem.}'+
                        '}{'+
                            '\\css{\\grp'+
                                '{\\html{X\xA0 = \xA0}}'+
                                '{\\input{$$answer}}'+
                                '{\\frac{\\input{$$nanswer}}{\\input{$$danswer}}}'+
                            '}{proportion-application}'+
                        '}}{well}{end}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }, {  //step 5
                        problem: '\\html{$problem<br><br><span class=blue-text>$question</span>}',
                        answer: '\\wb{\\rowgrp{'+
                            '\\choose{[\\ins{Congratulations!},\\ins{The correct answer is:}]}{$$previousCorrect}'+
                        '}{'+
                            '\\css{\\grp'+
                                '{\\frac{\\grp'+
                                    '{\\html{$$lnw}}'+
                                    '{\\frac{\\html{$$lnn}}{\\html{$$lnd}}}'+
                                    '{\\html{ $$lbln}}'+
                                '}{\\grp'+
                                    '{\\html{$$ldw}}'+
                                    '{\\frac{\\html{$$ldn}}{\\html{$$ldd}}}'+
                                    '{\\html{ $$lbld}}'+
                                '}}'+
                                '{\\html{=}}'+
                                '{\\frac{\\grp'+
                                    '{\\html{$$rnw}}'+
                                    '{\\frac{\\html{$$rnn}}{\\html{$$rnd}}}'+
                                    '{\\html{$$lbln}}'+
                                '}{\\grp'+
                                    '{\\html{$$rdw}}'+
                                    '{\\frac{\\html{$$rdn}}{\\html{$$rdd}}}'+
                                    '{\\html{$$lbld}}'+
                                '}}'+
                            '}{bottom-marg}'+
                        '}{'+
                            '\\css{\\grp'+
                                '{\\html{X\xA0 = \xA0}}'+
                                '{\\html{$$answer}}'+
                                '{\\frac{\\html{$$nanswer}}{\\html{$$danswer}}}'+
                            '}{proportion-application}'+
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
            {   // 1
                problem: 'In a park, there are five oak trees to every three elm trees.',
                question: 'If there are 20 Oak trees, how many elm trees are there?', 
                answer: '12', nanswer: '',danswer: '', template: 'main',
                lnw: '5', lnn: '', lnd: '', rnw: '20', rnn: '', rnd: '', lbln: 'oak trees',
                ldw: '3', ldn: '', ldd: '', rdw: 'x', rdn: '', rdd: '', lbld: 'elm trees',
                ln: '$$lnw', ld: '$$ldw', rn: '$$rnw',
                lblarr: '[\\"oak trees\\",\\"elm trees\\",\\"parks\\"]',
                previousCorrect: true,
                flip: [[1], ["lnw", "ldw"], ["lnn", "ldn"], ["lnd", "ldd"], ["rnw", "rdw"], ["rnn", "rdn"], ["rnd", "rdd"], ["lbln", "lbld"]],
            },{ // 2 
                problem: 'In a park, there are five oak trees to every three elm trees.', 
                question: 'If there are thirty elm trees in a park, how many oak trees are there?', 
                answer: '50', nanswer: '',danswer: '', template: 'main',
                lnw: '3', lnn: '', lnd: '', rnw: '30', rnn: '', rnd: '', lbln: 'elm trees',
                ldw: '5', ldn: '', ldd: '', rdw: '50', rdn: '', rdd: '', lbld: 'oak trees',
                ln: '$$lnw', ld: '$$ldw', rn: '$$rnw',
                lblarr: '[\\"days\\",\\"oak trees\\",\\"elm trees\\",\\"trees\\"]',
                previousCorrect: true,
                flip: [[1], ["lnw", "ldw"], ["lnn", "ldn"], ["lnd", "ldd"], ["rnw", "rdw"], ["rnn", "rdn"], ["rnd", "rdd"], ["lbln", "lbld"]],
            },{ // 3
                problem: 'A company could plant 40 oak trees and 30 elm trees in five days.', 
                question: 'At the same rate of planting, how many days would it take to plant 64 oak trees?', 
                answer: '8', nanswer: '',danswer: '', template: 'main',
                lnw: '40', lnn: '', lnd: '', rnw: '64', rnn: '', rnd: '', lbln: 'oak trees',
                ldw: '5', ldn: '', ldd: '', rdw: 'x', rdn: '', rdd: '', lbld: 'days',
                ln: '$$lnw', ld: '$$ldw', rn: '$$rnw',
                lblarr: '[\\"days\\",\\"oak trees\\",\\"elm trees\\",\\"trees\\"]',
                previousCorrect: true,
                flip: [[1], ["lnw", "ldw"], ["lnn", "ldn"], ["lnd", "ldd"], ["rnw", "rdw"], ["rnn", "rdn"], ["rnd", "rdd"], ["lbln", "lbld"]],
            },{ // 4
                problem: 'A company could plant 40 oak trees and 30 elm trees in five days.', 
                question: 'At the same rate of planting, how many days would it take to plant 18 elm trees?', 
                answer: '3', nanswer: '',danswer: '', template: 'main',
                lnw: '30', lnn: '', lnd: '', rnw: '18', rnn: '', rnd: '', lbln: 'elm trees',
                ldw: '5', ldn: '', ldd: '', rdw: 'x', rdn: '', rdd: '', lbld: 'days',
                ln: '$$lnw', ld: '$$ldw', rn: '$$rnw',
                lblarr: '[\\"days\\",\\"oak trees\\",\\"elm trees\\",\\"trees\\"]',
                previousCorrect: true,
                flip: [[1], ["lnw", "ldw"], ["lnn", "ldn"], ["lnd", "ldd"], ["rnw", "rdw"], ["rnn", "rdn"], ["rnd", "rdd"], ["lbln", "lbld"]],
            },{  // 5
                problem: 'A company could plant 40 oak trees and 30 elm trees in five days.', 
                question: 'The company continued to plant oak and elm trees at this same rate. If 60 oak trees were finally planted, how many elm trees were planted?', 
                answer: '45', nanswer: '',danswer: '', template: 'main',
                lnw: '40', lnn: '', lnd: '', rnw: '60', rnn: '', rnd: '', lbln: 'oak trees',
                ldw: '30', ldn: '', ldd: '', rdw: 'x', rdn: '', rdd: '', lbld: 'elm trees',
                ln: '$$lnw', ld: '$$ldw', rn: '$$rnw',
                lblarr: '[\\"days\\",\\"oak trees\\",\\"elm trees\\",\\"trees\\"]',
                previousCorrect: true,
                flip: [[1], ["lnw", "ldw"], ["lnn", "ldn"], ["lnd", "ldd"], ["rnw", "rdw"], ["rnn", "rdn"], ["rnd", "rdd"], ["lbln", "lbld"]],
            },{  // 6
                problem: 'A company could plant 40 oak trees and 30 elm trees in five days.', 
                question: 'The company continued to plant oak and elm trees at this same rate. If 105 trees were finally planted, how many oak trees were planted?', 
                answer: '60', nanswer: '',danswer: '', template: 'main',
                lnw: '70', lnn: '', lnd: '', rnw: '105', rnn: '', rnd: '', lbln: 'trees',
                ldw: '40', ldn: '', ldd: '', rdw: 'x', rdn: '', rdd: '', lbld: 'oak trees',
                ln: '$$lnw', ld: '$$ldw', rn: '$$rnw',
                lblarr: '[\\"days\\",\\"oak trees\\",\\"elm trees\\",\\"trees\\"]',
                previousCorrect: true,
                flip: [[1], ["lnw", "ldw"], ["lnn", "ldn"], ["lnd", "ldd"], ["rnw", "rdw"], ["rnn", "rdn"], ["rnd", "rdd"], ["lbln", "lbld"]],
            },{  // 7
                problem: 'Out of 60 dinner customers, a restaurant receives 12 orders for steak, 15 orders for fish, and 8 orders for pasta.', 
                question: 'If the restaurant received 20 orders for fish one night, how many orders for steak did it receive?', 
                answer: '16', nanswer: '',danswer: '', template: 'main',
                lnw: '15', lnn: '', lnd: '', rnw: '20', rnn: '', rnd: '', lbln: 'fish',
                ldw: '12', ldn: '', ldd: '', rdw: 'x', rdn: '', rdd: '', lbld: 'steak',
                ln: '$$lnw', ld: '$$ldw', rn: '$$rnw',
                lblarr: '[\\"steak\\",\\"fish\\",\\"customers\\",\\"pasta\\"]',
                previousCorrect: true,
                flip: [[1], ["lnw", "ldw"], ["lnn", "ldn"], ["lnd", "ldd"], ["rnw", "rdw"], ["rnn", "rdn"], ["rnd", "rdd"], ["lbln", "lbld"]],
            },{  // 8
                problem: 'Out of 60 dinner customers, a restaurant receives 12 orders for steak, 15 orders for fish, and 8 orders for pasta.', 
                question: 'If the restaurant received 8 orders for steak one night, how many orders for fish did it receive?', 
                answer: '10', nanswer: '',danswer: '', template: 'main',
                lnw: '12', lnn: '', lnd: '', rnw: '8', rnn: '', rnd: '', lbln: 'steak',
                ldw: '15', ldn: '', ldd: '', rdw: 'x', rdn: '', rdd: '', lbld: 'fish',
                ln: '$$lnw', ld: '$$ldw', rn: '$$rnw',
                lblarr: '[\\"steak\\",\\"fish\\",\\"customers\\",\\"pasta\\"]',
                previousCorrect: true,
                flip: [[1], ["lnw", "ldw"], ["lnn", "ldn"], ["lnd", "ldd"], ["rnw", "rdw"], ["rnn", "rdn"], ["rnd", "rdd"], ["lbln", "lbld"]],
            },{  // 9
                problem: 'Out of 60 dinner customers, a restaurant receives 12 orders for steak, 15 orders for fish, and 8 orders for pasta.', 
                question: 'If the restaurant received 6 orders for pasta one night, how many orders for fish did it receive?', 
                answer: '9', nanswer: '',danswer: '', template: 'main',
                lnw: '8', lnn: '', lnd: '', rnw: '6', rnn: '', rnd: '', lbln: 'pasta',
                ldw: '12', ldn: '', ldd: '', rdw: 'x', rdn: '', rdd: '', lbld: 'steak',
                ln: '$$lnw', ld: '$$ldw', rn: '$$rnw',
                lblarr: '[\\"steak\\",\\"fish\\",\\"customers\\",\\"pasta\\"]',
                previousCorrect: true,
                flip: [[1], ["lnw", "ldw"], ["lnn", "ldn"], ["lnd", "ldd"], ["rnw", "rdw"], ["rnn", "rdn"], ["rnd", "rdd"], ["lbln", "lbld"]],
            },{  // 10
                problem: 'Out of 60 dinner customers, a restaurant receives 12 orders for steak, 15 orders for fish, and 8 orders for pasta.', 
                question: 'If there were 80 customers, how many orders of steak were there?', 
                answer: '16', nanswer: '',danswer: '', template: 'main',
                lnw: '60', lnn: '', lnd: '', rnw: '80', rnn: '', rnd: '', lbln: 'customers',
                ldw: '12', ldn: '', ldd: '', rdw: 'x', rdn: '', rdd: '', lbld: 'steak',
                ln: '$$lnw', ld: '$$ldw', rn: '$$rnw',
                lblarr: '[\\"steak\\",\\"fish\\",\\"customers\\",\\"pasta\\"]',
                previousCorrect: true,
                flip: [[1], ["lnw", "ldw"], ["lnn", "ldn"], ["lnd", "ldd"], ["rnw", "rdw"], ["rnn", "rdn"], ["rnd", "rdd"], ["lbln", "lbld"]],
            },{  // 11
                problem: 'Out of 60 dinner customers, a restaurant receives 12 orders for steak, 15 orders for fish, and 8 orders for pasta.', 
                question: 'If there were 80 customers, how many orders of fish were there?', 
                answer: '20', nanswer: '',danswer: '', template: 'main',
                lnw: '60', lnn: '', lnd: '', rnw: '80', rnn: '', rnd: '', lbln: 'customers',
                ldw: '15', ldn: '', ldd: '', rdw: 'x', rdn: '', rdd: '', lbld: 'fish',
                ln: '$$lnw', ld: '$$ldw', rn: '$$rnw',
                lblarr: '[\\"steak\\",\\"fish\\",\\"customers\\",\\"pasta\\"]',
                previousCorrect: true,
                flip: [[1], ["lnw", "ldw"], ["lnn", "ldn"], ["lnd", "ldd"], ["rnw", "rdw"], ["rnn", "rdn"], ["rnd", "rdd"], ["lbln", "lbld"]],
            },{  // 12
                problem: 'In 3 1/2 hours, Justin writes 5 pages.', 
                question: 'At the same rate of writing, how many hours would it take to type 7 1/2 pages?', 
                answer: '5', nanswer: '1',danswer: '4', template: 'main',
                lnw: '5', lnn: '', lnd: '', rnw: '7', rnn: '1', rnd: '2', lbln: 'pages',
                ldw: '3', ldn: '1', ldd: '2', rdw: 'x', rdn: '', rdd: '', lbld: 'hours',
                ln: '$$lnw', ld: '$$ldw $$ldn/$$ldd', rn: '$$rnw $$rnn/$$rnd',
                lblarr: '[\\"pages\\",\\"rate\\",\\"hours\\"]',
                previousCorrect: true,
                flip: [[1], ["lnw", "ldw"], ["lnn", "ldn"], ["lnd", "ldd"], ["rnw", "rdw"], ["rnn", "rdn"], ["rnd", "rdd"], ["lbln", "lbld"]],
            },{  // 13
                problem: 'In 3 1/2 hours, Justin writes 5 pages.', 
                question: 'At the same rate of writing, how many pages would Justin write in 7 hours?', 
                answer: '10', nanswer: '',danswer: '', template: 'main',
                lnw: '3', lnn: '1', lnd: '2', rnw: '7', rnn: '', rnd: '', lbln: 'hours',
                ldw: '5', ldn: '', ldd: '', rdw: 'x', rdn: '', rdd: '', lbld: 'pages',
                ln: '$$lnw $$lnn/$$lnd', ld: '$$ldw', rn: '$$rnw',
                lblarr: '[\\"pages\\",\\"rate\\",\\"hours\\"]',
                previousCorrect: true,
                flip: [[1], ["lnw", "ldw"], ["lnn", "ldn"], ["lnd", "ldd"], ["rnw", "rdw"], ["rnn", "rdn"], ["rnd", "rdd"], ["lbln", "lbld"]],
            },{  // 14
                problem: 'Five pens cost $3.60.', 
                question: 'How much would it cost for eight pens?', 
                answer: '5.76', nanswer: '',danswer: '', template: 'main',
                lnw: '5', lnn: '', lnd: '', rnw: '8', rnn: '', rnd: '', lbln: 'pens',
                ldw: '3.60', ldn: '', ldd: '', rdw: 'x', rdn: '', rdd: '', lbld: 'cost',
                ln: '$$lnw', ld: '$$ldw', rn: '$$rnw',
                lblarr: '[\\"pens\\",\\"rate\\",\\"cost\\"]',
                previousCorrect: true,
                flip: [[1], ["lnw", "ldw"], ["lnn", "ldn"], ["lnd", "ldd"], ["rnw", "rdw"], ["rnn", "rdn"], ["rnd", "rdd"], ["lbln", "lbld"]],
            },{  // 15
                problem: 'Five pens cost $3.60.', 
                question: 'If you bought 12 pens, how much would it cost?', 
                answer: '8.64', nanswer: '',danswer: '', template: 'main',
                lnw: '5', lnn: '', lnd: '', rnw: '12', rnn: '', rnd: '', lbln: 'pens',
                ldw: '3.60', ldn: '', ldd: '', rdw: 'x', rdn: '', rdd: '', lbld: 'cost',
                ln: '$$lnw', ld: '$$ldw', rn: '$$rnw',
                lblarr: '[\\"pens\\",\\"rate\\",\\"cost\\"]',
                previousCorrect: true,
                flip: [[1], ["lnw", "ldw"], ["lnn", "ldn"], ["lnd", "ldd"], ["rnw", "rdw"], ["rnn", "rdn"], ["rnd", "rdd"], ["lbln", "lbld"]],
            },{  // 16
                problem: 'Five pens cost $3.60.', 
                question: 'If you spent $7.92 for these pens, how many pens did you buy?', 
                answer: '11', nanswer: '',danswer: '', template: 'main',
                lnw: '3.60', lnn: '', lnd: '', rnw: '7.92', rnn: '', rnd: '', lbln: 'cost',
                ldw: '5', ldn: '', ldd: '', rdw: 'x', rdn: '', rdd: '', lbld: 'pens',
                ln: '$$lnw', ld: '$$ldw', rn: '$$rnw',
                lblarr: '[\\"pens\\",\\"rate\\",\\"cost\\"]',
                previousCorrect: true,
                flip: [[1], ["lnw", "ldw"], ["lnn", "ldn"], ["lnd", "ldd"], ["rnw", "rdw"], ["rnn", "rdn"], ["rnd", "rdd"], ["lbln", "lbld"]],
            },{  // 17
                problem: 'On her orchard a farmer has 15 peach trees for every 10 Plum tree\'s and 6 orange trees.', 
                question: 'If the farmer has 120 peach trees, how many plum trees does she have?', 
                answer: '80', nanswer: '',danswer: '', template: 'main',
                lnw: '15', lnn: '', lnd: '', rnw: '120', rnn: '', rnd: '', lbln: 'peach',
                ldw: '10', ldn: '', ldd: '', rdw: 'x', rdn: '', rdd: '', lbld: 'plum',
                ln: '$$lnw', ld: '$$ldw', rn: '$$rnw',
                lblarr: '[\\"plum\\",\\"apple\\",\\"peach\\",\\"orange\\"]',
                previousCorrect: true,
                flip: [[1], ["lnw", "ldw"], ["lnn", "ldn"], ["lnd", "ldd"], ["rnw", "rdw"], ["rnn", "rdn"], ["rnd", "rdd"], ["lbln", "lbld"]],
            },{  // 18
                problem: 'On her orchard a farmer has 15 peach trees for every 10 Plum tree\'s and 6 orange trees.', 
                question: 'If the farmer has 34 plum trees, how many peach trees does she have?', 
                answer: '51', nanswer: '',danswer: '', template: 'main',
                lnw: '10', lnn: '', lnd: '', rnw: '34', rnn: '', rnd: '', lbln: 'plum',
                ldw: '15', ldn: '', ldd: '', rdw: 'x', rdn: '', rdd: '', lbld: 'peach',
                ln: '$$lnw', ld: '$$ldw', rn: '$$rnw',
                lblarr: '[\\"plum\\",\\"apple\\",\\"peach\\",\\"orange\\"]',
                previousCorrect: true,
                flip: [[1], ["lnw", "ldw"], ["lnn", "ldn"], ["lnd", "ldd"], ["rnw", "rdw"], ["rnn", "rdn"], ["rnd", "rdd"], ["lbln", "lbld"]],
            },{  // 19
                problem: 'On her orchard a farmer has 15 peach trees for every 10 Plum tree\'s and 6 orange trees.', 
                question: 'If the farmer has 20 orange trees, how many peach trees does she have?', 
                answer: '50', nanswer: '',danswer: '', template: 'main',
                lnw: '6', lnn: '', lnd: '', rnw: '20', rnn: '', rnd: '', lbln: 'orange',
                ldw: '15', ldn: '', ldd: '', rdw: 'x', rdn: '', rdd: '', lbld: 'peach',
                ln: '$$lnw', ld: '$$ldw', rn: '$$rnw',
                lblarr: '[\\"plum\\",\\"apple\\",\\"peach\\",\\"orange\\"]',
                previousCorrect: true,
                flip: [[1], ["lnw", "ldw"], ["lnn", "ldn"], ["lnd", "ldd"], ["rnw", "rdw"], ["rnn", "rdn"], ["rnd", "rdd"], ["lbln", "lbld"]],
            },{  // 20
                problem: 'On her orchard a farmer has 15 peach trees for every 10 Plum tree\'s and 6 orange trees.', 
                question: 'If the farmer has 45 plum trees, how many orange trees does she have?', 
                answer: '27', nanswer: '',danswer: '', template: 'main',
                lnw: '10', lnn: '', lnd: '', rnw: '45', rnn: '', rnd: '', lbln: 'plum',
                ldw: '6', ldn: '', ldd: '', rdw: 'x', rdn: '', rdd: '', lbld: 'orange',
                ln: '$$lnw', ld: '$$ldw', rn: '$$rnw',
                lblarr: '[\\"plum\\",\\"apple\\",\\"peach\\",\\"orange\\"]',
                previousCorrect: true,
                flip: [[1], ["lnw", "ldw"], ["lnn", "ldn"], ["lnd", "ldd"], ["rnw", "rdw"], ["rnn", "rdn"], ["rnd", "rdd"], ["lbln", "lbld"]],
            },{  // 21
                problem: 'Every three hours a clothing store sells 10 pairs of pants to every 6 jackets and 18 shirts.', 
                question: 'If the store sold 25 pairs of pants, how many shirts did it sell in the same amount of time?', 
                answer: '45', nanswer: '',danswer: '', template: 'main',
                lnw: '10', lnn: '', lnd: '', rnw: '25', rnn: '', rnd: '', lbln: 'pants',
                ldw: '18', ldn: '', ldd: '', rdw: 'x', rdn: '', rdd: '', lbld: 'shirts',
                ln: '$$lnw', ld: '$$ldw', rn: '$$rnw',
                lblarr: '[\\"pants\\",\\"shirts\\",\\"jackets\\",\\"hours\\",\\"shorts\\"]',
                previousCorrect: true,
                flip: [[1], ["lnw", "ldw"], ["lnn", "ldn"], ["lnd", "ldd"], ["rnw", "rdw"], ["rnn", "rdn"], ["rnd", "rdd"], ["lbln", "lbld"]],
            },{  // 22
                problem: 'Every three hours a clothing store sells 10 pairs of pants to every 6 jackets and 18 shirts.', 
                question: 'If the store sold 9 jackets, how many pairs of pants did it sell?', 
                answer: '15', nanswer: '',danswer: '', template: 'main',
                lnw: '6', lnn: '', lnd: '', rnw: '9', rnn: '', rnd: '', lbln: 'jackets',
                ldw: '10', ldn: '', ldd: '', rdw: 'x', rdn: '', rdd: '', lbld: 'pants',
                ln: '$$lnw', ld: '$$ldw', rn: '$$rnw',
                lblarr: '[\\"pants\\",\\"shirts\\",\\"jackets\\",\\"hours\\",\\"shorts\\"]',
                previousCorrect: true,
                flip: [[1], ["lnw", "ldw"], ["lnn", "ldn"], ["lnd", "ldd"], ["rnw", "rdw"], ["rnn", "rdn"], ["rnd", "rdd"], ["lbln", "lbld"]],
            },{  // 23
                problem: 'Every three hours a clothing store sells 10 pairs of pants to every 6 jackets and 18 shirts.', 
                question: 'If the store sold 12 shirts, how many jackets did it sell?', 
                answer: '4', nanswer: '',danswer: '', template: 'main',
                lnw: '18', lnn: '', lnd: '', rnw: '12', rnn: '', rnd: '', lbln: 'shirts',
                ldw: '6', ldn: '', ldd: '', rdw: 'x', rdn: '', rdd: '', lbld: 'jackets',
                ln: '$$lnw', ld: '$$ldw', rn: '$$rnw',
                lblarr: '[\\"pants\\",\\"shirts\\",\\"jackets\\",\\"hours\\",\\"shorts\\"]',
                previousCorrect: true,
                flip: [[1], ["lnw", "ldw"], ["lnn", "ldn"], ["lnd", "ldd"], ["rnw", "rdw"], ["rnn", "rdn"], ["rnd", "rdd"], ["lbln", "lbld"]],
            },{  // 24
                problem: 'Every three hours a clothing store sells 10 pairs of pants to every 6 jackets and 18 shirts.', 
                question: 'How many shirts would the store sell 5 hours?', 
                answer: '30', nanswer: '',danswer: '', template: 'main',
                lnw: '3', lnn: '', lnd: '', rnw: '5', rnn: '', rnd: '', lbln: 'hours',
                ldw: '18', ldn: '', ldd: '', rdw: 'x', rdn: '', rdd: '', lbld: 'shirts',
                ln: '$$lnw', ld: '$$ldw', rn: '$$rnw',
                lblarr: '[\\"pants\\",\\"shirts\\",\\"jackets\\",\\"hours\\",\\"shorts\\"]',
                previousCorrect: true,
                flip: [[1], ["lnw", "ldw"], ["lnn", "ldn"], ["lnd", "ldd"], ["rnw", "rdw"], ["rnn", "rdn"], ["rnd", "rdd"], ["lbln", "lbld"]],
            },{  // 25
                problem: 'Every three hours a clothing store sells 10 pairs of pants to every 6 jackets and 18 shirts.', 
                question: 'How many jackets would the store sell in 4 1/2 hours?', 
                answer: '9', nanswer: '',danswer: '', template: 'main',
                lnw: '3', lnn: '', lnd: '', rnw: '4', rnn: '1', rnd: '2', lbln: 'hours',
                ldw: '6', ldn: '', ldd: '', rdw: 'x', rdn: '', rdd: '', lbld: 'jackets',
                ln: '$$lnw', ld: '$$ldw', rn: '$$rnw $$rnn/$$rnd',
                lblarr: '[\\"pants\\",\\"shirts\\",\\"jackets\\",\\"hours\\",\\"shorts\\"]',
                previousCorrect: true,
                flip: [[1], ["lnw", "ldw"], ["lnn", "ldn"], ["lnd", "ldd"], ["rnw", "rdw"], ["rnn", "rdn"], ["rnd", "rdd"], ["lbln", "lbld"]],
            },{  // 26
                problem: 'Every three hours a clothing store sells 10 pairs of pants to every 6 jackets and 18 shirts.', 
                question: 'How many pairs of pants would the store sell in 1 1/5 hours?', 
                answer: '4', nanswer: '',danswer: '', template: 'main',
                lnw: '3', lnn: '', lnd: '', rnw: '1', rnn: '1', rnd: '5', lbln: 'hours',
                ldw: '10', ldn: '', ldd: '', rdw: 'x', rdn: '', rdd: '', lbld: 'pants',
                ln: '$$lnw', ld: '$$ldw', rn: '$$rnw $$rnn/$$rnd',
                lblarr: '[\\"pants\\",\\"shirts\\",\\"jackets\\",\\"hours\\",\\"shorts\\"]',
                previousCorrect: true,
                flip: [[1], ["lnw", "ldw"], ["lnn", "ldn"], ["lnd", "ldd"], ["rnw", "rdw"], ["rnn", "rdn"], ["rnd", "rdd"], ["lbln", "lbld"]],
            },{  // 27
                problem: 'A recipe to make 6 candy bars uses 3/4 of an ounce of chocolate, 1/2 ounce of almonds, and 1/8 ounce of marshmallows.', 
                question: 'How many ounces of chocolate would you need to make 2 candy bars?', 
                answer: '', nanswer: '1',danswer: '4', template: 'main',
                lnw: '6', lnn: '', lnd: '', rnw: '2', rnn: '', rnd: '', lbln: 'candy bars',
                ldw: '', ldn: '3', ldd: '4', rdw: 'x', rdn: '', rdd: '', lbld: 'chocolate',
                ln: '$$lnw', ld: '$$ldn/$$ldd', rn: '$$rnw',
                lblarr: '[\\"candy bars\\",\\"almonds\\",\\"chocolate\\",\\"marshmallows\\",\\"recipe\\"]',
                previousCorrect: true,
                flip: [[1], ["lnw", "ldw"], ["lnn", "ldn"], ["lnd", "ldd"], ["rnw", "rdw"], ["rnn", "rdn"], ["rnd", "rdd"], ["lbln", "lbld"]],
            },{  // 28
                problem: 'A recipe to make 6 candy bars uses 3/4 of an ounce of chocolate, 1/2 ounce of almonds, and 1/8 ounce of marshmallows.', 
                question: 'How many ounces of almonds would you need to make 2 candy bars?', 
                answer: '', nanswer: '1',danswer: '6', template: 'main',
                lnw: '6', lnn: '', lnd: '', rnw: '2', rnn: '', rnd: '', lbln: 'candy bars',
                ldw: '', ldn: '1', ldd: '2', rdw: 'x', rdn: '', rdd: '', lbld: 'almonds',
                ln: '$$lnw', ld: '$$ldn/$$ldd', rn: '$$rnw',
                lblarr: '[\\"candy bars\\",\\"almonds\\",\\"chocolate\\",\\"marshmallows\\",\\"recipe\\"]',
                previousCorrect: true,
                flip: [[1], ["lnw", "ldw"], ["lnn", "ldn"], ["lnd", "ldd"], ["rnw", "rdw"], ["rnn", "rdn"], ["rnd", "rdd"], ["lbln", "lbld"]],
            },{  // 29
                problem: 'A recipe to make 6 candy bars uses 3/4 of an ounce of chocolate, 1/2 ounce of almonds, and 1/8 ounce of marshmallows.', 
                question: 'How many ounces of marshmallows would you need to make 24 candy bars?', 
                answer: '', nanswer: '1',danswer: '2', template: 'main',
                lnw: '6', lnn: '', lnd: '', rnw: '24', rnn: '', rnd: '', lbln: 'candy bars',
                ldw: '', ldn: '1', ldd: '8', rdw: 'x', rdn: '', rdd: '', lbld: 'marshmallows',
                ln: '$$lnw', ld: '$$ldn/$$ldd', rn: '$$rnw',
                lblarr: '[\\"candy bars\\",\\"almonds\\",\\"chocolate\\",\\"marshmallows\\",\\"recipe\\"]',
                previousCorrect: true,
                flip: [[1], ["lnw", "ldw"], ["lnn", "ldn"], ["lnd", "ldd"], ["rnw", "rdw"], ["rnn", "rdn"], ["rnd", "rdd"], ["lbln", "lbld"]],
            },{  // 30
                problem: 'A recipe to make 6 candy bars uses 3/4 of an ounce of chocolate, 1/2 ounce of almonds, and 1/8 ounce of marshmallows.', 
                question: 'If you used 3/16 ounces of chocolate in the recipe, how many ounces of almonds would you need to use?', 
                answer: '', nanswer: '1',danswer: '8', template: 'main',
                lnw: '', lnn: '3', lnd: '4', rnw: '', rnn: '3', rnd: '16', lbln: 'chocolate',
                ldw: '', ldn: '1', ldd: '2', rdw: 'x', rdn: '', rdd: '', lbld: 'almonds',
                ln: '$$lnn/$$lnd', ld: '$$ldn/$$ldd', rn: '$$rnn/$$rnd',
                lblarr: '[\\"candy bars\\",\\"almonds\\",\\"chocolate\\",\\"marshmallows\\",\\"recipe\\"]',
                previousCorrect: true,
                flip: [[1], ["lnw", "ldw"], ["lnn", "ldn"], ["lnd", "ldd"], ["rnw", "rdw"], ["rnn", "rdn"], ["rnd", "rdd"], ["lbln", "lbld"]],
            },{  // 31
                problem: 'A recipe to make 6 candy bars uses 3/4 of an ounce of chocolate, 1/2 ounce of almonds, and 1/8 ounce of marshmallows.', 
                question: 'If you used 6 ounces of marshmallows, how many ounces of almonds would you need to use?', 
                answer: '24', nanswer: '',danswer: '', template: 'main',
                lnw: '', lnn: '1', lnd: '8', rnw: '6', rnn: '', rnd: '', lbln: 'marshmallows',
                ldw: '', ldn: '1', ldd: '2', rdw: 'x', rdn: '', rdd: '', lbld: 'almonds',
                ln: '$$lnn/$$lnd', ld: '$$ldn/$$ldd', rn: '$$rnw',
                lblarr: '[\\"candy bars\\",\\"almonds\\",\\"chocolate\\",\\"marshmallows\\",\\"recipe\\"]',
                previousCorrect: true,
                flip: [[1], ["lnw", "ldw"], ["lnn", "ldn"], ["lnd", "ldd"], ["rnw", "rdw"], ["rnn", "rdn"], ["rnd", "rdd"], ["lbln", "lbld"]],
            },{  // 32
                problem: 'A recipe to make 6 candy bars uses 3/4 of an ounce of chocolate, 1/2 ounce of almonds, and 1/8 ounce of marshmallows.', 
                question: 'If you used 4 ounces of almonds, how many ounces of chocolate would you use?', 
                answer: '6', nanswer: '',danswer: '', template: 'main',
                lnw: '', lnn: '1', lnd: '2', rnw: '4', rnn: '', rnd: '', lbln: 'almonds',
                ldw: '', ldn: '3', ldd: '4', rdw: 'x', rdn: '', rdd: '', lbld: 'chocolate',
                ln: '$$lnn/$$lnd', ld: '$$ldn/$$ldd', rn: '$$rnw',
                lblarr: '[\\"candy bars\\",\\"almonds\\",\\"chocolate\\",\\"marshmallows\\",\\"recipe\\"]',
                previousCorrect: true,
                flip: [[1], ["lnw", "ldw"], ["lnn", "ldn"], ["lnd", "ldd"], ["rnw", "rdw"], ["rnn", "rdn"], ["rnd", "rdd"], ["lbln", "lbld"]],
            },{  // 33
                problem: 'A recipe to make 6 candy bars uses 3/4 of an ounce of chocolate, 1/2 ounce of almonds, and 1/8 ounce of marshmallows.', 
                question: 'If you make 8 candy bars, how many ounces of chocolate do you need?', 
                answer: '1', nanswer: '',danswer: '', template: 'main',
                lnw: '6', lnn: '', lnd: '', rnw: '8', rnn: '', rnd: '', lbln: 'candy bars',
                ldw: '', ldn: '3', ldd: '4', rdw: 'x', rdn: '', rdd: '', lbld: 'chocolate',
                ln: '$$lnw', ld: '$$ldn/$$ldd', rn: '$$rnw',
                lblarr: '[\\"candy bars\\",\\"almonds\\",\\"chocolate\\",\\"marshmallows\\",\\"recipe\\"]',
                previousCorrect: true,
                flip: [[1], ["lnw", "ldw"], ["lnn", "ldn"], ["lnd", "ldd"], ["rnw", "rdw"], ["rnn", "rdn"], ["rnd", "rdd"], ["lbln", "lbld"]],
            },{  // 34
                problem: 'A recipe to make 6 candy bars uses 3/4 of an ounce of chocolate, 1/2 ounce of almonds, and 1/8 ounce of marshmallows.', 
                question: 'If you make 20 candy bars, how many ounces of marshmallows do you need?', 
                answer: '', nanswer: '5',danswer: '12', template: 'main',
                lnw: '6', lnn: '', lnd: '', rnw: '20', rnn: '', rnd: '', lbln: 'candy bars',
                ldw: '', ldn: '1', ldd: '8', rdw: 'x', rdn: '', rdd: '', lbld: 'marshmallows',
                ln: '$$lnw', ld: '$$ldn/$$ldd', rn: '$$rnw',
                lblarr: '[\\"candy bars\\",\\"almonds\\",\\"chocolate\\",\\"marshmallows\\",\\"recipe\\"]',
                previousCorrect: true,
                flip: [[1], ["lnw", "ldw"], ["lnn", "ldn"], ["lnd", "ldd"], ["rnw", "rdw"], ["rnn", "rdn"], ["rnd", "rdd"], ["lbln", "lbld"]],
            }
            
        ];
    
    return dataUtils.build(ret, template, data);
}]);
