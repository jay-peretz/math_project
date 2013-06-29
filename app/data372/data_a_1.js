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
		{instructions: 'Seven plus four, then multiply by three',  buttonValueA: 'F', buttonLabelA: '7 + (4 • 3)', buttonValueB: 'T', buttonLabelB: '(7 + 4) • 3', buttonValueC: 'F', buttonLabelC: '7 + 4 • 3', buttonValueD: 'T', buttonLabelD: '(7 + 4) (3)',  template: 'expressions' },
		{instructions: 'Start with seven, then add the product of four and three.',  buttonValueA: 'T', buttonLabelA: '7 + (4 • 3)', buttonValueB: 'F', buttonLabelB: '(7 + 4) • 3', buttonValueC: 'F', buttonLabelC: '7 + 4 • 3', buttonValueD: 'F', buttonLabelD: '(7 + 4) (3)',  template: 'expressions' }
		];
    return dataUtils.build(desc, template, data);
}]);
