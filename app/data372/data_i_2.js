/*global angular */

angular.module('mathSkills').service('data_i_2', ['dataUtils', function (dataUtils) {
    var desc = {
            title: 'I.2 Decimals to Percent | Percent to Decimals',
            path: 'I.2-decimals-percent',
            children: []
        },
        template = {
            ptd: {
        title: 'Change a Percent to a Decimal',
        children: [{
            title: 'Main Answer',
            children: [{
                problem: '\\rowgrp{\\row{\\str{Change this percent to a decimal:}}}{\\row{\\str{\xA0}}}{\\row{\\str{$p}}{\\str{%}}',
                answer: '\\row{\\input{$d}}',
                controls: {
                    "checkAnswer": true,
                    "help": '\\rowgrp{\\row{\\percentarrows{$p}{0.01}{percent}{decimal}}{\\css{\\str{Answer:  $d}}{help-answer-text help-answer-margin-right}}}'
                }
            }]
        }]
    },
	dtp: {
        title: 'Change a Decimal to a Percent',
        children: [{
            title: 'Main Answer',
            children: [{
                problem: '\\rowgrp{\\row{\\str{Change this decimal into a percent:}}}{\\row{\\str{\xA0}}}{\\row{\\str{$d}}}',
                answer: '\\row{\\input{$p}}{\\str{%}}',
                controls: {
                    "checkAnswer": true,
                    "help": '\\rowgrp{\\row{\\percentarrows{$d}{100}{decimal}{percent}}{\\css{\\str{Answer:  $p %}}{help-answer-text help-answer-margin-right}}}'
                }
            }]
        }]
    }
	},
        data = [
            {d:.6, p: 60, template: 'dtp'},
			{d: .346, p: 34.6 , template: 'dtp'},
			{d: 2.45, p: 245 , template: 'dtp'},
			{d: 1.3, p: 130 , template: 'dtp'},
			{d: .25, p: 25 , template: 'dtp'},
			{d: .5, p: 50 , template: 'ptd'},
			{d: 1.8, p: 180 , template: 'ptd'},
			{d: .3, p: 30 , template: 'ptd'},
			{d: .05, p: 5 , template: 'ptd'},
			{d: .005, p: .5 , template: 'ptd'}
			         
        ];

    return dataUtils.build(desc, template, data);
}]);
