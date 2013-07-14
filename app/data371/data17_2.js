/*global angular */

angular.module('mathSkills').service('data17_2', function () {
    var ret = {
            title: '17.2 Solving Unit Rates Using Proportions',
            path: '17.2-solving-unit-rates-using-proportions',
            children: []
        },
        template = {
            main: {
                
                title: 'Solving Unit Rates Using Proportions',
                children: [{
                    title: 'Main Answer',
                    children: [{
                        problem: '\\html{$question}',
                        answer: '\\input{$answer}{[key:flag,data:value]',
                        controls: {
                            "checkAnswer": true,
                            "help": false,
                            "workbook": true
                        }
                    }]
                }, {
                    title: 'Workbook',
                    children: [{
                        problem: '\\html{$question}',
                        answer: '\\wb{\\rowgrp{'+
                            '\\ins{Identify the two items (labels) that are in relationship with each other:}'+
                        '}{'+
                            '\\frac{\\select{$lbln}{$lblarr}}{\\select{$lbld}{$lblarr}}'+
                        '}}{well}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }, {
                        problem: '\\html{$question}',
                        answer: '\\wb{\\rowgrp{'+
                            '\\choose{[\\ins{Good! Now what number of $$lbln and what number of $$lbld are provided in the given relationship?},\\ins{No, the given relationship is between $lbln and $lbld. Now what number of $lbln and what number of $lbld are provided in the given relationship?}]}{$$previousCorrect}'+
                        '}{'+
                            '\\frac{\\grp{\\input{$ln}}{\\str{$lbln}}}{\\grp{\\input{$ld}}{\\str{$lbld}}}'+
                        '}}{well}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }, {
                        problem: '\\html{$question}',
                        answer: '\\wb{\\rowgrp{'+
                            '\\choose{[\\ins{Yes, now make this first relationship between $lbln and $lbld equal to a second relationship (use \\"X\\" for an unknown value).},\\ins{We are told that there are $ln $lbln to every $ld $lbld. The given relationship is:}]}{$$previousCorrect}'+
                        '}{'+
                            '\\equiv'+
                            '{\\grp{\\str{$ln}}{\\str{$lbln}}}'+
                            '{\\grp{\\str{$ld}}{\\str{$lbld}}}'+
                            '{\\str{=}}'+
                            '{\\grp{\\input{$rn}}{\\select{$lbln}{$lblarr}}}'+
                            '{\\grp{\\input{$rd}{rden}{func}}{\\select{$lbld}{$$lblarr}{selRDen}}}'+
                        '}{'+
                            '\\choose{[\\ins{}{q},\\ins{Now make this first relationship between $$lbln and $$lbld equal to a second relationship (use \\"X\\" for an unknown value).}]}{$$previousCorrect}'+
                        '}}{well}',
                    
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }, {
                        problem: '\\html{$question}',
                        answer: '\\wb{\\rowgrp{'+
                            '\\choose{['+
                                '\\ins{Great! You now have a proportion. Solve the proportion problem.},'+
                                '\\ins{The second relationship is an \\"unknown number\\" (shown here as \\"x\\") of $$lbln to every $$rd $$lbld. You now have a proportion:}]}{$$previousCorrect}'+
                        '}{'+
                            '\\equiv'+
                                '{\\grp{\\str{$ln}}{\\str{$lbln}}}'+
                                '{\\grp{\\str{$ld}}{\\str{$lbld}}}'+
                                '{\\str{=}}'+
                                '{\\grp{\\str{$rn}}{\\str{$lbln}}}'+
                                '{\\grp{\\str{$rd}}{\\str{$$lbld}}}'+
                        '}{'+
                            '\\ins{Now solve the proportion problem.}'+
                        '}{'+
                            '\\css{\\grp{\\str{X}}{\\str{=}}{\\input{$$answer}}}{proportion-application}'+
                        '}}{well}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }, {
                        problem: '\\html{$question}',
                        answer: '\\wb{\\rowgrp{'+
                            '\\choose{[\\ins{Congratulations!},\\ins{The correct solution is:}]}{$$previousCorrect}'+
                        '}{'+
                            '\\equiv'+
                                '{\\grp{\\str{$ln}}{\\str{$lbln}}}'+
                                '{\\grp{\\str{$ld}}{\\str{$lbld}}}'+
                                '{\\str{=}}'+
                                '{\\grp{\\str{$rn}}{\\str{$lbln}}}'+
                                '{\\grp{\\str{$rd}}{\\str{$$lbld}}}'+
                        '}{'+
                            '\\ins{Now fill in the boxes below with the complete unit rate answer.}'+
                        '}{'+
                            '\\css{\\grp'+
                                '{\\str{Answer:}}'+
                                '{\\input{$$answer}}'+
                                '{\\select{$lbln}{$lblarr}}'+
                                '{\\html{<span class="bigger">/</span>}}'+
                                '{\\select{$xlbld}{$xlblarr}}'+
                            '}{Unit-Rates}'+
                        '}}{well}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }]
                }]
            }
        },
        data = 
        [
            {
                question: 'In seven days Mandy earned $154 baby sitting. How much did she earn per day?', 
                answer: 22, template: 'main',
                ln: 154, rn: 'x', lbln: 'dollars',
                ld: 7, rd: 1, lbld: 'days', xlbld: 'day',
                lblarr: '[\\"dollars\\",\\"days\\",\\"earned\\"]',
                xlblarr: '[\\"dollar\\",\\"day\\",\\"earned\\"]',
                previousCorrect: true,
            },
            // { 
            //     problem: 'In a park, there are five oak trees to every three elm trees.', 
            //     question: 'If there are thirty elm trees in a park, how many oak trees are there?', 
            //     answer: 50, template: 'main',
            //     ln: 3, rn: 30, lbln: 'elm trees',
            //     ld: 5, rd: 50, lbld: 'oak trees',
            //     lblarr: '[\\"days\\",\\"oak trees\\",\\"elm trees\\",\\"trees\\"]',
            //     previousCorrect: true,
            //     flip: [[1], ["ln", "ld"], ["rn", "rd"], ["lbln", "lbld"]],
            // }
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
