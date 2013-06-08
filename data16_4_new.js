/*global angular */

angular.module('mathSkills').service('data16_4', function () {
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
                        answer: '\\rowgrp{\\str{Identify the two items (labels) that are in relationship with each other?}}{\\frac{\\select{[\"$lbln\",\"$lbld\"]}{$lblarr}}{\\select{[\"$lbld\",\"$lbln\"]}{$lblarr}}}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }, {
                        problem: '\\html{$problem<br><br><span class=blue-text>$question</span>}',
                        answer: '\\row{\\choose{[\\str{Good.}, \\str{No, the given relationship is between $$lbln and $$lbld}]}{$$previousCorrect}}{\\str{Now what number of $$lbln and what number of $$lbld are provided in the given relationship?}}{\\frac{\\grp{\\input{$$ln}}{\\str{ $$lbln}}}{\\grp{\\input{$$ld}}{\\str{ $$lbld}}}}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }, {
                        problem: '\\html{$problem<br><br><span class=blue-text>$question</span>}',
                        answer: '\\rowgrp{\\choose{[\\str{We are told that there are $$ln $$lbln to every $$ld $$lbld. The given relationship is:}, \\str{Yes, now make this first relationship between $$lbln and $$lbld equal to a second relationship (use \"X\" for an unknown value).}]}{$$previousCorrect}}{\\grp{\\frac{\\grp{\\str{$$ln}}{\\str{ $$lbln}}}{\\grp{\\str{$$ld}}{\\str{ $$lbld}}}}{\\str{=}}{\\frac{\\grp{\\input{$$rn}}{\\select{$$lbln}{$$lblarr}}}{\\grp{\\input{x}}{\\select{$$lbld}{$$lblarr}}}}}}{\\choose[\\str{Now make this first relationship between $$lbln and $$lbld equal to a second relationship (use \"X\" for an unknown value).},\\str{}]}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }, {
                        problem: '\\html{$problem<br><br><span class=blue-text>$question</span>}',
                        answer: '\\rowgrp{\\choose{[\\str{The second relationship is an "unknown number" (shown here as "X") of $$lbld to every $$rn $$lbln. You now have a proportion:}, \\str{Great! You now have a proportion. Solve the proportion problem.}]}{$$previousCorrect}}{\\grp{\\frac{\\grp{\\str{$$ln}}{\\str{ $$lbln}}}{\\grp{\\str{$$ld}}{\\str{ $$lbld}}}}{\\str{=}}{\\frac{\\grp{\\str{$$rn}}{\\str{$$lbln}}}{\\grp{\\str{x}}{\\str{$$lbld}}}}}}}{\\str{Now solve the proportion problem.}}{\\css{\\row{\\html{X\xA0 = \xA0}}{\\input{$$rd}}}{proportion-application}}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }, {
                        problem: '\\html{$problem<br><br><span class=blue-text>$question</span>}',
                        answer: '\\rowgrp{\\choose{[\\str{The correct solution is:},\\str{Congratulations!}]}{$$previousCorrect}}{\\grp{\\frac{\\grp{\\str{$$ln}}{\\str{ $$lbln}}}{\\grp{\\str{$$ld}}{\\str{ $$lbld}}}}{\\str{=}}{\\frac{\\grp{\\str{$$rn}}{\\str{$$lbln}}}{\\grp{\\str{$answer}}{\\str{$$lbld}}}}}',
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
                ld: 3, rd: 12, lbld: 'elm trees',
                previousCorrect: true,
                lblarr: '[\\"oak trees\\",\\"elm trees\\",\\"parks\\"]',
            },{ 
                problem: 'In a park, there are five oak trees to every three elm trees.', question: 'If there are thirty elm trees in a park, how many oak trees are there?', 
                answer: 50, template: 'main',
                ln: 3, rn: 30, lbln: 'elm trees',
                ld: 5, rd: 50, lbld: 'oak trees',
                lblarr: '[\\"days\\",\\"oak trees\\",\\"elm trees\\",\\"trees\\"]',
            }
        ],
        interpolate = function (obj, data) {
            var string = JSON.stringify(obj);
            for (var symbol in data) {
                if (data.hasOwnProperty(symbol)) {
                    string = string.replace(new RegExp(' \\$' + symbol, 'g'), data[symbol]);
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





/*global angular 

angular.module('mathSkills').value('data16_4', {
    title: '16.4 Proportion Application Problems',
    path: '16.4-proportion-application-problems',
    children: [{
        title: 'Proportion Application Problems',
        children: [{
            title: 'Main Answer',
            children: [{
                problem: '\\html{In a park, there are five oak trees to every three elm trees.<br><br><span class=blue-text>If there are 20 Oak trees, how many elm trees are there?</span>}',
                answer: '\\input{12}',
                controls: {
                    "checkAnswer": true,
                    "help": false,
                    "workbook": true
                }
            }]
        }, {
            title: 'Workbook',
            children: [{
                problem: '\\html{In a park, there are five oak trees to every three elm trees.<br><br><span class=blue-text>If there are 20 Oak trees, how many elm trees are there?</span>}',
                answer: '\\ins{\\frac{\\select{[\"oak trees\",\"elm trees\"]}{[\"oak trees\",\"elm trees\",\"parks\"]}}{\\select{[\"elm trees\",\"oak trees\"]}{[\"oak trees\",\"elm trees\",\"parks\"]}}}{Identify the two items (lables) that are in relationship with each other?}',
                controls: {
                    "checkAnswer": true,
                    "help": true
                }
            }, {
                problem: '\\html{In a park, there are five oak trees to every three elm trees.<br><br><span class=blue-text>If there are 20 Oak trees, how many elm trees are there?</span>}',
                answer: '\\ins{\\flip{\\frac{\\grp{\\input{5}}{\\str{ oak trees}}}{\\grp{\\input{3}}{\\str{ elm trees}}}}{[1]}}{[\"No, the given relationship is between @oak trees# and @elm trees#. Now what number of @oak trees# and what number of @elm trees# are provided in the given relationship?\",\"Good. Now what number of @oak trees# and what number of @elm trees# are provided in the given relationship?\"]}',
                controls: {
                    "checkAnswer": true,
                    "help": true
                }
            }, {
                problem: '\\html{In a park, there are five oak trees to every three elm trees.<br><br><span class=blue-text>If there are 20 Oak trees, how many elm trees are there?</span>}',
                answer: '\\ins{\\grp{\\flip{\\frac{\\grp{\\str{5}}{\\str{ oak trees}}}{\\grp{\\str{3}}{\\str{ elm trees}}}}{[1]}}{\\str{=}}{\\flip{\\frac{\\grp{\\input{20}}{\\select{oak trees}{[\"oak trees\",\"elm trees\",\"parks\"]}}}{\\grp{\\input{x}}{\\select{elm trees}{[\"oak trees\",\"elm trees\",\"parks\"]}}}}{[1]}}}{[\"We are told that there are @5 oak trees# to every @3 elm trees#. The given relationship is:\",\"Yes, now make this first relationship between @oak trees# and @elm trees# equal to a second relationship (use \\"X\\" for an unknown value).\"]}{[\"Now make this first relationship between @oak trees# and @elm trees# equal to a second relationship (use \\"X\\" for an unknown value).\",\"false\"]}',
                controls: {
                    "checkAnswer": true,
                    "help": true
                }
            }, {
                problem: '\\html{In a park, there are five oak trees to every three elm trees.<br><br><span class=blue-text>If there are 20 Oak trees, how many elm trees are there?</span>}',
                answer: '\\rowgrp{\\ins{\\grp{\\flip{\\frac{\\grp{\\str{5}}{\\str{ oak trees}}}{\\grp{\\str{3}}{\\str{ elm trees}}}}{[1]}}{\\str{=}}{\\flip{\\frac{\\grp{\\str{20}}{\\str{oak trees}}}{\\grp{\\str{x}}{\\str{elm trees}}}}{[1]}}}{[\"The second relationship is an \\"unknown number\\" (shown here as \\"X\\") of elm trees to every 20 oak trees. You now have a proportion:\",\"Great! You now have a proportion. Solve the proportion problem.\"]}{[\"Now solve the proportion problem.\",\"false\"]}}{\\css{\\row{\\html{X\xA0 = \xA0}}{\\input{12}}}{proportion-application}}',
                controls: {
                    "checkAnswer": true,
                    "help": true
                }
            }, {
                problem: '\\html{In a park, there are five oak trees to every three elm trees.<br><br><span class=blue-text>If there are 20 Oak trees, how many elm trees are there?</span>}',
                answer: '\\ins{\\grp{\\flip{\\frac{\\grp{\\str{5}}{\\str{ oak trees}}}{\\grp{\\str{3}}{\\str{ elm trees}}}}{[1]}}{\\str{=}}{\\flip{\\frac{\\grp{\\str{20}}{\\str{oak trees}}}{\\grp{\\str{12}}{\\str{elm trees}}}}{[1]}}}{[\"The correct solution is:\",\"Congratulations!\"]}',
                controls: {
                    "checkAnswer": true,
                    "help": true
                }
            }]
        }]
    }, {
        title: 'Proportion Application Problems',
        children: [{
            title: 'Main Answer',
            children: [{
                problem: '\\html{In a park, there are five oak trees to every three elm trees.<br><br><span class=blue-text>If there are thirty elm trees in a park, how many oak trees are there?</span>}',
                answer: '\\input{50}',
                controls: {
                    "checkAnswer": true,
                    "help": false,
                    "workbook": true
                }
            }]
        }, {
            title: 'Workbook',
            children: [{
                problem: '\\html{In a park, there are five oak trees to every three elm trees.<br><br><span class=blue-text>If there are thirty elm trees in a park, how many oak trees are there?</span>}',
                answer: '\\ins{\\frac{\\select{[\"oak trees\",\"elm trees\"]}{[\"oak trees\",\"elm trees\",\"parks\"]}}{\\select{[\"elm trees\",\"oak trees\"]}{[\"oak trees\",\"elm trees\",\"parks\"]}}}{Identify the two items (lables) that are in relationship with each other?}',
                controls: {
                    "checkAnswer": true,
                    "help": true
                }
            }, {
                problem: '\\html{In a park, there are five oak trees to every three elm trees.<br><br><span class=blue-text>If there are thirty elm trees in a park, how many oak trees are there?</span>}',
                answer: '\\ins{\\flip{\\frac{\\grp{\\input{5}}{\\str{ oak trees}}}{\\grp{\\input{3}}{\\str{ elm trees}}}}{[1]}}{[\"No, the given relationship is between @oak trees# and @elm trees#. Now what number of @oak trees# and what number of @elm trees# are provided in the given relationship?\",\"Good. Now what number of @oak trees# and what number of @elm trees# are provided in the given relationship?\"]}',
                controls: {
                    "checkAnswer": true,
                    "help": true
                }
            }, {
                problem: '\\html{In a park, there are five oak trees to every three elm trees.<br><br><span class=blue-text>If there are thirty elm trees in a park, how many oak trees are there?</span>}',
                answer: '\\ins{\\grp{\\flip{\\frac{\\grp{\\str{5}}{\\str{ oak trees}}}{\\grp{\\str{3}}{\\str{ elm trees}}}}{[1]}}{\\str{=}}{\\flip{\\frac{\\grp{\\input{x}}{\\select{oak trees}{[\"oak trees\",\"elm trees\",\"parks\"]}}}{\\grp{\\input{30}}{\\select{elm trees}{[\"oak trees\",\"elm trees\",\"parks\"]}}}}{[1]}}}{[\"We are told that there are @5 oak trees# to every @3 elm trees#. The given relationship is:\",\"Yes, now make this first relationship between @oak trees# and @elm trees# equal to a second relationship (use \\"X\\" for an unknown value).\"]}{[\"Now make this first relationship between @oak trees# and @elm trees# equal to a second relationship (use \\"X\\" for an unknown value).\",\"false\"]}',
                controls: {
                    "checkAnswer": true,
                    "help": true
                }
            }, {
                problem: '\\html{In a park, there are five oak trees to every three elm trees.<br><br><span class=blue-text>If there are thirty elm trees in a park, how many oak trees are there?</span>}',
                answer: '\\ins{\\grp{\\flip{\\frac{\\grp{\\str{5}}{\\str{ oak trees}}}{\\grp{\\str{3}}{\\str{ elm trees}}}}{[1]}}{\\str{=}}{\\flip{\\frac{\\grp{\\input{50}}{\\str{oak trees}}}{\\grp{\\str{30}}{\\str{elm trees}}}}{[1]}}}{[\"The second relationship is an \\"unknown number\\" (shown here as \\"X\\") of oak trees to every 30 elm trees. You now have a proportion:\",\"Great! You now have a proportion. Solve the proportion problem.\"]}{[\"Now solve the proportion problem.\",\"false\"]}',
                controls: {
                    "checkAnswer": true,
                    "help": true
                }
            }]
        }]
    }]
});
*/