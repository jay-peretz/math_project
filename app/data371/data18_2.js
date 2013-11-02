/*global angular */

angular.module('mathSkills').service('data18_2', ['dataUtils', function (dataUtils) {
    var desc = {
			title: '18.2 Change a Decimal to a Percent',
			path: '18.2-change-a-decimal-to-a-percent',
            children: []
        },
        template = {
            main: {
                title: 'Change a Decimal to a Percent',
                children: [{
                    title: 'Main Answer',
                    children: [{
                         problem: '\\rowgrp{\\row{\\str{Change this decimal into a percent:}}}{\\row{\\str{\xA0}}}{\\row{\\str{$startNumber}}}',
						answer: '\\grp{\\input{$answer}}{\\str{%}}',
						controls: {
							"checkAnswer": true,
							"help": '\\rowgrp'
							+'{\\percentarrows{$startNumber}{100}{decimal}{percent}}'
							+'{\\html{&nbsp;}}'
							+'{\\css{\\grp{\\str{Answer:  $answer}}{\\str{%}}}{help-answer-text help-answer-margin-right}}'
						}
                    }]
                }]
            },
			twoStepNoReduce: {
                title: 'Change a Decimal to a Percent',
                children: [{
                    title: 'Main Answer',
                    children: [{
                         problem: '\\rowgrp{\\row{\\str{Change this decimal into a percent:}}}{\\row{\\str{\xA0}}}{\\row{\\str{$startNumber}}}',
						answer: '\\grp{\\input{$answer}}{\\str{%}}',
						controls: {
							"checkAnswer": true,
							"help": '\\rowgrp'
							+'{\\percentarrows{$startNumber}{100}{decimal}{percent}}'
							+'{\\html{&nbsp;}}'
							+'{\\css{\\grp{\\str{Answer:  $answer}}{\\str{%}}}{help-answer-text help-answer-margin-right}}'
						}
                    },
					{
                         problem: '\\rowgrp{\\row{\\str{Change this decimal into a percent:}}}{\\row{\\str{\xA0}}}{\\row{\\str{$startNumber}}}',
						answer: '\\css{\\rowgrp'
						+'{\\grp{\\html{$answer}}{\\str{%}}}'
						+'{\\html{&nbsp;}}'
						+'{\\css{\\str{Now change the decimal percent into a fraction or mixed number percent:}}{alert alert-info}}'
						+'{\\html{&nbsp;}}'
						+'{\\grp{\\mixed{\\input{$finalWhole}}{\\frac{\\input{$finalNum}}{\\input{$finalDen}}}}{\\str{%}}}'						
						+'}{well}',
						controls: {
							"checkAnswer": true,
							"help": '\\rowgrp'
							+'{\\css{\\str{Write the decimal place value as the denominator of the fraction:}}{label_like}}'
							+'{\\grp{\\html{$answer}}{\\str{%}}'
							+'{\\sign{\xA0 \xA0 = \xA0 \xA0}}'
							+'{\\mixed{\\str{$finalWhole}}{\\frac{\\fracstr{$finalNum}}{\\fracstr{$finalDen}}}}{\\str{%}}}'
							+'{\\html{&nbsp;}}'
							+'{css{\\grp{\\str{Answer: \xA0 \xA0}}{\\mixed{\\str{$finalWhole}}{\\frac{\\fracstr{$finalNum}}{\\fracstr{$finalDen}}}}{\\str{%}}}{help-answer-text}}'
						}
                    }]
                }]
            },
			twoStepReduce: {
                title: 'Change a Decimal to a Percent',
                children: [{
                    title: 'Main Answer',
                    children: [{
                         problem: '\\rowgrp{\\row{\\str{Change this decimal into a percent:}}}{\\row{\\str{\xA0}}}{\\row{\\str{$startNumber}}}',
						answer: '\\grp{\\input{$answer}}{\\str{%}}',
						controls: {
							"checkAnswer": true,
							"help": '\\rowgrp'
							+'{\\percentarrows{$startNumber}{100}{decimal}{percent}}'
							+'{\\html{&nbsp;}}'
							+'{\\css{\\grp{\\str{Answer:  $answer}}{\\str{%}}}{help-answer-text help-answer-margin-right}}'
						}
                    },
					{
                         problem: '\\rowgrp{\\row{\\str{Change this decimal into a percent:}}}{\\row{\\str{\xA0}}}{\\row{\\str{$startNumber}}}',
						answer: '\\css{\\rowgrp'
						+'{\\grp{\\html{$answer}}{\\str{%}}}'
						+'{\\html{&nbsp;}}'
						+'{\\css{\\str{Now change the decimal percent into a fraction or mixed number percent:}}{alert alert-info}}'
						+'{\\html{&nbsp;}}'
						+'{\\grp{\\mixed{\\input{$finalWhole}}{\\frac{\\input{$finalNum}}{\\input{$finalDen}}}}{\\str{%}}}'						
						+'}{well}',
						controls: {
							"checkAnswer": true,
							"help": '\\rowgrp'
							+'{\\css{\\str{Write the decimal place value as the denominator of the fraction:}}{label_like}}'
							+'{\\grp{\\html{$answer}}{\\str{%}}'
							+'{\\sign{\xA0 \xA0 = \xA0 \xA0}}'
							+'{\\mixed{\\str{$finalWhole}}{\\frac{\\fracstr{$helpNum}}{\\fracstr{$helpDen}}}}{\\str{%}}}'
							+'{\\html{&nbsp;}}'
							+'{css{\\grp{\\str{Answer: \xA0 \xA0}}{\\mixed{\\str{$finalWhole}}{\\frac{\\fracstr{$finalNum}}{\\fracstr{$finalDen}}}}{\\str{%}}}{help-answer-text}}'
						}
                    }]
                }]
            }
        },
        data = [
			// problem 1
            { startNumber: '8.41', answer: '841', template: 'main'  },
			// problem 2
			{ startNumber: '0.6', answer: '60', template: 'main'  },
			// problem 3
			{ startNumber: '0.66', answer: '66', template: 'main'  },
			// problem 4
			{ startNumber: '0.54', answer: '54', template: 'main'  },
			// problem 5
			{ startNumber: '7.4', answer: '740', template: 'main'  },
			// problem 6
			{ startNumber: '0.7758', answer: '77.58', finalWhole: '77', finalNum: '29', finalDen: '50', helpNum: '58', helpDen: '100', template: 'twoStepReduce'  },
			// problem 7
			{ startNumber: '0.463', answer: '46.3', finalWhole: '46', finalNum: '3', finalDen: '10', template: 'twoStepNoReduce'  },
			// problem 8
			{ startNumber: '0.8769', answer: '87.69', finalWhole: '87', finalNum: '69', finalDen: '100', template: 'twoStepNoReduce' },
			// problem 9
			{ startNumber: '1.432', answer: '143.2',  finalWhole: '143', finalNum: '1', finalDen: '5', helpNum: '2', helpDen: '10', template: 'twoStepReduce' },
			// problem 10
			{ startNumber: '0.518', answer: '51.8', finalWhole: '51', finalNum: '4', finalDen: '5', helpNum: '8', helpDen: '10', template: 'twoStepReduce' }
        ];


    return dataUtils.build(desc, template, data);
}]);