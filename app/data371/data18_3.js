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
                         problem: '\\rowgrp{\\row{\\str{Change this fraction percent to a decimal percent:}}}{\\row{\\str{\xA0}}}{\\row{\\mixed{\\html{$problemWhole}}{\\frac{\\str{$problemNum}}{\\str{$problemDen}}}}{\\str{%}}}{\\row{\\str{\xA0}}}{\\row{\\str{$instructRound}}}',
						answer: '\\grp{\\input{$decimalPercent}}{\\str{%}}',
						controls: {
							"checkAnswer": true,
							"help": '\\rowgrp'
							+'{\\row{\\str{The fractional percent of \xA0}}{\\mixed{\\html{$problemWhole}}{\\frac{\\str{$problemNum}}{\\str{$problemDen}}}}{\\str{%}}}'
							+'{\\row{\\str{equals the decimal percent of \xA0}}{\\str{$decimalPercent% $rounded}}}'
							+'{\\html{&nbsp;}}'
							+'{\\css{\\str{Answer:}}{help-answer-text}}'
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
						 +'{\\str{$instructRound}}',
						answer: '\\css{\\rowgrp'
						+'{\\grp{\\mixed{\\html{$problemWhole}}{\\frac{\\fracstr{$problemNum}}{\\fracstr{$problemDen}}}}{\\str{%}}{\\sign{=}}{\\str{$decimalPercent}}{\\str{%}}}'
						+'{\\html{&nbsp;}}'
						+'{\\css{\\str{Now change the $changePercent into a decimal:}}{alert alert-info}}'
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
			{ instructRound: '', problemWhole: '7', problemNum: '1', problemDen: '2', rounded: "", decimalPercent: '7.5', decimalAnswer: '0.075', changePercent: 'percent', template: 'fraction'  },
			{ instructRound: 'Round the decimal percent to the hundredths place.', problemWhole: '66', problemNum: '2', problemDen: '3', rounded: " (rounded to hundredth's place)", decimalPercent: '66.67', decimalAnswer: '0.6667', changePercent: 'rounded percent', template: 'fraction'  },
			{ instructRound: '', problemWhole: '62', problemNum: '1', problemDen: '2', rounded: '', decimalPercent: '62.5', decimalAnswer: '0.625', changePercent: 'percent', template: 'fraction'  },
			{ instructRound: 'Round the decimal percent to the hundredths place.', problemWhole: '', problemNum: '5', problemDen: '7', rounded: " (rounded to hundredth's place)", decimalPercent: '0.71', decimalAnswer: '0.0071',  changePercent: 'rounded percent', template: 'fraction'  },
			{ instructRound: '', problemWhole: '', problemNum: '4', problemDen: '5', rounded: '', decimalPercent: '0.8', decimalAnswer: '0.008', changePercent: 'percent', template: 'fraction'  },
        ];


    return dataUtils.build(desc, template, data);
}]);

