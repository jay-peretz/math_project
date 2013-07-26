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
						answer: '\\grp{\\input{$decimalPercent}}',
						controls: {
							"checkAnswer": true,
							"help": '\\rowgrp{\\row{\\percentarrows{$startNumber}{0.01}{percent}{decimal}}{\\css{\\str{Answer:  $decimalPercent}}{help-answer-text help-answer-margin-right}}}'
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
						answer: '\\grp{\\input{$decimalPercent}}{\\str{%}}',
						controls: {
							"checkAnswer": true,
							"help": '\\rowgrp'
							+'{\\row{\\str{The fractional percent of \xA0}}{\\mixed{\\html{$problemWhole}}{\\frac{\\str{$problemNum}}{\\str{$problemDen}}}}{\\str{%}}}'
							+'{\\row{\\str{equals the decimal percent of \xA0}}{\\str{$answer%}}}'
							+'{\\html{&nbsp;}}'
							+'{\\css{\\str{Answer$rounded:}}{help-answer-text}}'
							+'{\\html{&nbsp;}}'
							+'{\\css{\\str{$decimalPercent%}}{help-answer-text}}'
							+'{\\html{&nbsp;}}'
						}
                    },
					{
                         problem: '\\rowgrp'
						 +'{\\str{Change this fraction percent to a decimal percent:}}'
						 +'{\\str{\xA0}}'
						 +'{\\grp{\\mixed{\\html{$problemWhole}}{\\frac{\\str{$problemNum}}{\\str{$problemDen}}}}{\\str{%}}}'
						 +'{\\str{\xA0}}'
						 +'{\\str{Round the decimal percent to the hundredths place.}}',
						answer: '\\css{\\rowgrp'
						+'{\\grp{\\mixed{\\html{$problemWhole}}{\\frac{\\fracstr{$problemNum}}{\\fracstr{$problemDen}}}}{\\str{%}}{\\sign{=}}{\\str{$decimalPercent}}{\\str{%}}}'
						+'{\\html{&nbsp;}}'
						+'{\\css{\\str{Now change the percent into a decimal:}}{alert alert-info}}'
						+'{\\html{&nbsp;}}'
						+'{\\grp{\\input{$decimalAnswer}}}'						
						+'}{well}',
						controls: {
							"checkAnswer": true,
							"help": '\\rowgrp'
							+'{\\percentarrows{$decimalPercent}{.01}{percent}{decimal}}'
							+'{\\html{&nbsp;}}'
							+'{\\css{\\str{Answer: \xA0 $decimalAnswer}}{help-answer-text}}'
						}
                    }]
                }]
            }
        },
        data = [
            { startNumber: '9', decimalPercent: '0.09', template: 'main'  },
			{ startNumber: '327', decimalPercent: '3.27', template: 'main'  },
			{ startNumber: '85', decimalPercent: '0.85', template: 'main'  },
			{ startNumber: '55.6', decimalPercent: '0.556', template: 'main'  },
			{ startNumber: '67.85', decimalPercent: '0.6785', template: 'main'  },
			{ problemWhole: '&nbsp;', problemNum: '5', problemDen: '7',  answer: '0.714...', rounded: " (rounded to hundredth's place)", decimalPercent: '0.71', decimalAnswer: '0.0071', template: 'fraction'  },
			{ problemWhole: '&nbsp;', problemNum: '4', problemDen: '5',  answer: '0.8', rounded: "", decimalPercent: '0.8', decimalAnswer: '0.008', template: 'fraction'  },
			{ problemWhole: '&nbsp;', problemNum: '2', problemDen: '3',  answer: '0.666...', rounded: " (rounded to hundredth's place)", decimalPercent: '0.67', decimalAnswer: '0.0067', template: 'fraction'  },
			{ problemWhole: '1', problemNum: '1', problemDen: '4',  answer: '1.25', rounded: "", decimalPercent: '1.25', decimalAnswer: '0.0125', template: 'fraction'  },
			{ problemWhole: '1', problemNum: '1', problemDen: '12',  answer: '1.083...', rounded: " (rounded to hundredth's place)", decimalPercent: '1.08', decimalAnswer: '0.0108', template: 'fraction'  },
        ];


    return dataUtils.build(desc, template, data);
}]);

