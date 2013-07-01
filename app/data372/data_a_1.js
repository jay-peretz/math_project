angular.module('mathSkills').service('data_a_1', ['dataUtils', function (dataUtils) {
    var desc = {
            title: 'A.1 Setting Up Expressions',
            path: 'A.1-setting-up-expressions',
            children: []
        },
        template = {
            expressions: {
                title: 'Setting Up Expressions',
				children: [{
					title: 'Main Answer',
					children: [{
					problem: '\\rowgrp{\\str{Check all correct answers that apply.}}{\\str{\xA0}}{\\str{$instructions}}',
						answer: '\\rowgrp{\\row{\\chk{$buttonLabelA}{$buttonValueA}}}{\\row{\\chk{$buttonLabelB}{$buttonValueB}}}{\\row{\\chk{$buttonLabelC}{$buttonValueC}}}{\\row{\\chk{$buttonLabelD}{$buttonValueD}}',
				//	answer: '\\grp{\\chk{\\str{}}{$buttonValueA}}{\\grp{}{}}',
						
						controls: {
							"checkAnswer": true,
							"help": '\\str{Help}'
						}
					}]
                }]
            },
		    t: {
		       }
        },
        data = [
		{instructions: 'Seven plus four, then multiply by three.',  buttonValueA: 'F', buttonLabelA: '\\\\str{7 + (4 • 3)}', buttonValueB: 'T', buttonLabelB: '\\\\str{(7 + 4) • 3}', buttonValueC: 'F', buttonLabelC: '\\\\str{7 + 4 • 3}', buttonValueD: 'T', buttonLabelD: '\\\\str{(7 + 4) (3)}',  template: 'expressions' },
		{instructions: 'Start with seven, then add the product of four and three.',  buttonValueA: 'T', buttonLabelA: '\\\\str{7 + (4 • 3)}', buttonValueB: 'F', buttonLabelB: '\\\\str{(7 + 4) • 3}', buttonValueC: 'F', buttonLabelC: '\\\\str{7 + 4 • 3}', buttonValueD: 'F', buttonLabelD: '\\\\str{(7 + 4) (3)}',  template: 'expressions' },
		{instructions: 'Start with 20, then subtract the quotient of fourteen and two.',  buttonValueA: 'T', buttonLabelA: '\\\\grp{\\\\str{20 - }}{\\\\frac{\\\\str{14}}{\\\\str{2}}}', buttonValueB: 'F', buttonLabelB: '\\\\str{(7 + 4) • 3}', buttonValueC: 'F', buttonLabelC: '\\\\str{7 + 4 • 3}', buttonValueD: 'F', buttonLabelD: '\\\\str{(7 + 4) (3)}',  template: 'expressions' }
		];
    return dataUtils.build(desc, template, data);
}]);
