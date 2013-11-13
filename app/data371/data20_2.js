/*global angular */
angular.module('mathSkills').service('data20_2', ['dataUtils', function (dataUtils) {
    var desc = {
            title: '20.2 Solve Percent Problems (proportion method)',
            path: '20.2-solve-percent-problems',
            children: []
        },
        template = {
            main: {
                
                title: 'Solving Percent Proportions problems',
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
                            '\\ins{Now solve the problem.}'+
                        '}{'+
                            '\\css{\\grp{\\html{X}}{\\sign{=}}{\\input{$$answer}}}{proportion-application}'+
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
                            '\\html{&nbsp;}'+
						'}{'+
                            '\\choose{[\\html{Congratulations!},\\html{The correct answer is found by following the process to solve all proportion problems. We substitute the given values to get:}]}{$$previousCorrect}'+
						'}{'+
							'\\html{&nbsp;}'+
                        '}{'+
                            '\\choose{[\\grp{\\frac{\\str{$$answer}}{\\str{$$ld}}}{\\sign{=}}{\\frac{\\str{$$rn}}{\\str{$$rd}}},\\css{\\grp{\\html{X}}{\\sign{=}}{\\html{$$ld &#149; $$rn &#247; $$rd}}}{proportion-application}]}{$$previousCorrect}'+
                        '}{'+
                            '\\choose{[\\html{},\\ins{The answer is}]}{$$previousCorrect}'+
                        '}{'+
                            '\\choose{[\\html{},\\css{\\grp{\\html{$$answer}}{\\html{$$symbol}}}{proportion-application}]}{$$previousCorrect}'+
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
                problem: '1.47 is what percent of 21?',
                answer: '7', template: 'main', symbol: '%',
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: 100, drd: 'Base (Whole Quantity)',
                ln: 'x', rn: 1.47, 
                ld: 100, rd: 21, 
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
        ];
		
    return dataUtils.build(desc, template, data);
	
}]);
