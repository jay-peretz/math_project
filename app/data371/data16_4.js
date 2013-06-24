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
                            '\\ins{Identify the two items (labels) that are in relationship with each other:}'+
                        '}{'+
                            '\\frac{\\select{[\"$lbln\",\"$lbld\"]}{$lblarr}}{\\select{[\"$lbld\",\"$lbln\"]}{$lblarr}}'+
                        '}}{well}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }, {
                        problem: '\\html{$problem<br><br><span class=blue-text>$question</span>}',
                        answer: '\\wb{\\rowgrp{'+
                            '\\choose{[\\ins{Good! Now what number of $$lbln and what number of $$lbld are provided in the given relationship?},\\ins{No, the given relationship is between $$lbln and $$lbld. Now what number of $$lbln and what number of $$lbld are provided in the given relationship?}]}{$$previousCorrect}'+
                        '}{'+
                            '\\frac{\\grp{\\input{$$ln}}{\\str{ $$lbln}}}{\\grp{\\input{$$ld}}{\\str{ $$lbld}}}'+
                        '}}{well}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }, {
                        problem: '\\html{$problem<br><br><span class=blue-text>$question</span>}',
                        answer: '\\wb{\\rowgrp{'+
                            '\\choose{[\\ins{Yes, now make this first relationship between $$lbln and $$lbld equal to a second relationship (use \\"X\\" for an unknown value).},\\ins{We are told that there are $$ln $$lbln to every $$ld $$lbld. The given relationship is:}]}{$$previousCorrect}'+
                        '}{'+
                            '\\css{\\grp{\\frac{\\grp{\\str{$$ln}}{\\str{ $$lbln}}}{\\grp{\\str{$$ld}}{\\str{ $$lbld}}}}{\\str{=}}{\\frac{\\grp{\\input{$$rn}}{\\select{$$lbln}{$$lblarr}}}{\\grp{\\input{x}}{\\select{$$lbld}{$$lblarr}}}}}{bottom-marg}'+
                        '}{'+
                            '\\choose{[\\ins{}{q},\\ins{Now make this first relationship between $$lbln and $$lbld equal to a second relationship (use \\"X\\" for an unknown value).}]}{$$previousCorrect}'+
                        '}}{well}',
                    
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }, {
                        problem: '\\html{$problem<br><br><span class=blue-text>$question</span>}',
                        answer: '\\wb{\\rowgrp{'+
                            '\\choose{[\\ins{Great! You now have a proportion. Solve the proportion problem.},\\ins{The second relationship is an \\"unknown number\\" (shown here as \\"X\\") of $$lbld to every $$rn $$lbln. You now have a proportion:}]}{$$previousCorrect}'+
                        '}{'+
                            '\\css{\\grp{\\frac{\\grp{\\str{$$ln}}{\\str{ $$lbln}}}{\\grp{\\str{$$ld}}{\\str{ $$lbld}}}}{\\str{=}}{\\frac{\\grp{\\str{$$rn}}{\\str{$$lbln}}}{\\grp{\\str{$$rd}}{\\str{$$lbld}}}}}{bottom-marg}'+
                        '}{'+
                            '\\ins{Now solve the proportion problem.}'+
                        '}{'+
                            '\\css{\\grp{\\html{X\xA0 = \xA0}}{\\input{$$answer}}}{proportion-application}'+
                        '}}{well}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }, {
                        problem: '\\html{$problem<br><br><span class=blue-text>$question</span>}',
                        answer: '\\wb{\\rowgrp{'+
                            '\\choose{[\\ins{Congratulations!},\\ins{The correct answer is:}]}{$$previousCorrect}'+
                        '}{'+
                            '\\css{\\grp{\\frac{\\grp{\\str{$$ln}}{\\str{ $$lbln}}}{\\grp{\\str{$$ld}}{\\str{ $$lbld}}}}{\\str{=}}{\\frac{\\grp{\\str{$$rn}}{\\str{$$lbln}}}{\\grp{\\str{$$rd}}{\\str{$$lbld}}}}}{bottom-marg}'+
                        '}{'+
                            '\\css{\\grp{\\html{X\xA0 = \xA0}}{\\str{$$answer}}}{proportion-application}'+
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
                problem: 'In a park, there are five oak trees to every three elm trees.',
                question: 'If there are 20 Oak trees, how many elm trees are there?', 
                answer: 12, template: 'main',
                ln: 5, rn: 20, lbln: 'oak trees',
                ld: 3, rd: 'x', lbld: 'elm trees',
                lblarr: '[\\"oak trees\\",\\"elm trees\\",\\"parks\\"]',
                previousCorrect: true,
                flip: [[1], ["ln", "ld"], ["rn", "rd"], ["lbln", "lbld"]],
            },{ 
                problem: 'In a park, there are five oak trees to every three elm trees.', 
                question: 'If there are thirty elm trees in a park, how many oak trees are there?', 
                answer: 50, template: 'main',
                ln: 3, rn: 30, lbln: 'elm trees',
                ld: 5, rd: 50, lbld: 'oak trees',
                lblarr: '[\\"days\\",\\"oak trees\\",\\"elm trees\\",\\"trees\\"]',
                previousCorrect: true,
                flip: [[1], ["ln", "ld"], ["rn", "rd"], ["lbln", "lbld"]],
            }
        ];
    
    return dataUtils.build(ret, template, data);
}]);
