/*global angular */

angular.module('mathSkills').service('data20_3', function () {
    var ret = {
            title: '20.3 Percent Proportion Applications',
            path: '20.3-percent-proportion-applications',
            children: []
        },
        template = {
            main: {
                
                title: 'Percent Proportion Applications',
                children: [{
                    title: 'Main Answer',
                    children: [{
                        problem: '\\html{$problem<br><br>$question<br><br><span class=blue-text>$round</span>}',
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
                        problem: '\\html{$problem<br><br><span class=blue-text>$question</span>}',
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
                        problem: '\\html{$problem<br><br><span class=blue-text>$question</span>}',
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
                            '\\css{\\grp{\\html{X}}{\\sign{=}}{\\input{$$answer}}}{proportion-application}'+
                        '}}{well}{end}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }, {
                        problem: '\\html{$problem<br><br><span class=blue-text>$question</span>}',
                        answer: '\\wb{\\rowgrp{'+
                            '\\css{\\choose{[\\html{},\\grp{\\frac{\\str{$$ln}}{\\str{$$ld}}}{\\sign{=}}{\\frac{\\str{$$rn}}{\\str{$$rd}}}]}{$$previousCorrect}}{bottom-marg}'+
                        '}{'+
                            '\\choose{[\\ins{Congratulations!},\\ins{The correct answer is found by following the process to solve all proportion problems.}]}{$$previousCorrect}'+
                        '}{'+
                            '\\choose{[\\grp{\\frac{\\str{$$answer}}{\\str{$$ld}}}{\\sign{=}}{\\frac{\\str{$$rn}}{\\str{$$rd}}},\\css{\\grp{\\html{X}}{\\sign{=}}{\\html{$solution}}}{proportion-application}]}{$$previousCorrect}'+
                        '}{'+
                            '\\choose{[\\html{},\\ins{The answer is}]}{$$previousCorrect}'+
                        '}{'+
                            '\\choose{[\\html{},\\css{\\grp{\\html{$$answer}}{\\html{$$post_symbol}}}{proportion-application}]}{$$previousCorrect}'+
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
                problem: 'May received a grade of 70% on her first math exam.',
                question: 'If there were 50 questions on the exam, how many questions did she answer correctly?',
                round: '',
                answer: '35', template: 'main', post_symbol: '',
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: 100, drd: 'Base (Whole Quantity)',
                ln: 'x', rn: 70, 
                ld: 50, rd: 100, 
                solution: '$$ld &#149; $$rn &#247; $$rd',
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"]],
            },
            { 
                problem: '1.47 is what percent of 21?',
                answer: '7 %', template: 'main',  symbol: '%',
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: 100, drd: 'Base (Whole Quantity)',
                ln: 'x', rn: 1.47, 
                ld: 100, rd: 21, 
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"]],
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
