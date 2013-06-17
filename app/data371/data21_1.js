/*global angular */

angular.module('mathSkills').service('data21_1', function () {
    var ret = {
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
                            '\\choose{[\\html{},\\grp{\\frac{\\str{$$dln}}{\\str{$$dld}}}{\\sign{=}}{\\frac{\\str{$$drn}}{\\str{$$drd}}}]}{$$previousCorrect}'+
                        '}{'+
                            '\\choose{[\\ins{Yes!},\\ins{We substitute the given values to get:}]}{$$previousCorrect}'+
                        '}{'+
                            '\\grp{\\frac{\\str{$$ln}}{\\str{$$ld}}}{\\sign{=}}{\\frac{\\str{$$rn}}{\\str{$$rd}}}'+
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
                            '\\choose{[\\html{},\\grp{\\frac{\\str{$$ln}}{\\str{$$ld}}}{\\sign{=}}{\\frac{\\str{$$rn}}{\\str{$$rd}}}]}{$$previousCorrect}'+
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
            { 
                problem: 'A TV sells for $420. If the sales tax is 6%, how much sales tax is paid.',
                answer: '25.20', template: 'main', pre_symbol: '$', post_symbol: '', 
                key: 'rn', keyf: 'ln', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: 100, drd: 'Base (Whole Quantity)',
                ln: 6, rn: 'x', 
                ld: 100, rd: 420, 
                solution: '$$ln &#149; $$rd &#247; $$ld',
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"], ["key", "keyf"]],
            },
            { 
                problem: 'You buy a pair of shoes, and pay $5.40 in sales tax. If the sales tax rate is 6.75%, what was the cost ot the shoes without the sales tax included?',
                answer: '80', template: 'main', pre_symbol: '$', post_symbol: '', 
                key: 'rd', keyf: 'ld', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: 100, drd: 'Base (Whole Quantity)',
                ln: 6.75, rn: 5.40, 
                ld: 100, rd: 'x', 
                solution: '$$ld &#149; $$rn &#247; $$ln',
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
