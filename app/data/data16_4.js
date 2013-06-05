/*global angular */

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
