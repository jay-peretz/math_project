/*global angular */

angular.module('mathSkills').service('data18_3', ['dataUtils', function (dataUtils) {
    var desc = {
			title: '18.3 Change a Percent to a Decimal',
			path: '18.3-change-a-percent-to-a-decimal',
            children: []
        },
        template = {
            main: {
                title: 'Change a Percent to a Decimal',
                children: [{
                    title: 'Main Answer',
                    children: [{
                         problem: '\\rowgrp{\\row{\\str{Change this percent to a decimal:}}}{\\row{\\str{\xA0}}}{\\row{\\str{$startNumber}}{\\str{%}}',
						answer: '\\row{\\input{$finalAnswer}}',
						controls: {
							"checkAnswer": true,
							"help": '\\rowgrp{\\row{\\percentarrows{$startNumber}{0.01}{percent}{decimal}}{\\css{\\str{Answer:  $finalAnswer}}{help-answer-text help-answer-margin-right}}}'
						}
                    }]
                }]
            },
			fraction: {
                title: 'Change a Percent to a Decimal',
                children: [{
                    title: 'Main Answer',
                    children: [{
                         problem: '\\rowgrp{\\row{\\str{Change this fraction percent to a decimal percent:}}}{\\row{\\str{\xA0}}}{\\row{\\mixed{\\html{$problemWhole}}{\\frac{\\str{$problemNum}}{\\str{$problemDen}}}}{\\str{%}}}{\\row{\\str{\xA0}}}{\\row{\\str{Round the decimal percent to the hundredths place.}}}',
                answer: '\\row{\\input{$finalAnswer}}{\\str{%}}',
                controls: {
                    "checkAnswer": true,
                    "help": "\\rowgrp{\\row{\\str{The fractional percent of \xA0}}{\\mixed{\\html{$problemWhole}}{\\frac{\\str{$problemNum}}{\\str{$problemDen}}}}{\\str{%}}}{\\row{\\str{equals the decimal percent of \xA0}}{\\str{$answer%}}}{\\html{&nbsp;}}{\\css{\\str{Answer$rounded:  \xA0 $finalAnswer%}}{help-answer-text help-answer-margin-right}}"
                }
                    }]
                }]
            }
        },
        data = [
            { startNumber: '9', finalAnswer: '0.09', template: 'main'  },
			{ startNumber: '327', finalAnswer: '3.27', template: 'main'  },
			{ startNumber: '85', finalAnswer: '0.85', template: 'main'  },
			{ startNumber: '55.6', finalAnswer: '0.556', template: 'main'  },
			{ startNumber: '67.85', finalAnswer: '0.6785', template: 'main'  },
			{ problemWhole: '&nbsp;', problemNum: '5', problemDen: '7',  answer: '0.714...', rounded: " (rounded to hundredth's place)", finalAnswer: '0.71', template: 'fraction'  },
			{ problemWhole: '&nbsp;', problemNum: '4', problemDen: '5',  answer: '0.8', rounded: "", finalAnswer: '0.8', template: 'fraction'  },
			{ problemWhole: '&nbsp;', problemNum: '2', problemDen: '3',  answer: '0.666...', rounded: " (rounded to hundredth's place)", finalAnswer: '0.67', template: 'fraction'  },
			{ problemWhole: '1', problemNum: '1', problemDen: '4',  answer: '1.25', rounded: "", finalAnswer: '1.25', template: 'fraction'  },
			{ problemWhole: '1', problemNum: '1', problemDen: '12',  answer: '1.083...', rounded: " (rounded to hundredth's place)", finalAnswer: '1.08', template: 'fraction'  },
        ];


    return dataUtils.build(desc, template, data);
}]);

