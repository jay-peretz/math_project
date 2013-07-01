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
					problem: '\\rowgrp{\\str{Check all correct answers.}}{\\str{\xA0}}{\\str{$instructions}}',
						answer: '\\rowgrp{\\row{\\chk{$buttonLabelA}{$buttonValueA}}}{\\row{\\chk{$buttonLabelB}{$buttonValueB}}}{\\row{\\chk{$buttonLabelC}{$buttonValueC}}}{\\row{\\chk{$buttonLabelD}{$buttonValueD}}',
				//	answer: '\\grp{\\chk{\\str{}}{$buttonValueA}}{\\grp{}{}}',
						
						controls: {
							"checkAnswer": true,
							"help": '$help'
						}
					}]
                }]
            },
		    t: {
		       }
        },
        data = [
		{instructions: 'Seven plus four, then multiply by three.',  buttonValueA: 'F', buttonLabelA: '\\\\str{7 + (4 * 3)}', buttonValueB: 'T', buttonLabelB: '\\\\str{(7 + 4) * 3}', buttonValueC: 'F', buttonLabelC: '\\\\str{7 + 4 * 3}', buttonValueD: 'T', buttonLabelD: '\\\\str{(7 + 4) (3)}',help: '\\\\rowgrp{\\\\row{\\\\str{The expression can be expressed as either:}}}{\\\\row{\\\\str{(7 + 4) * 3}}}{\\\\row{\\\\str{or}}}{\\\\row{\\\\str{(7 + 4) (3)}}}',  template: 'expressions' },
		{instructions: 'Start with seven, then add the product of four and three.',  buttonValueA: 'T', buttonLabelA: '\\\\str{7 + (4 * 3)}', buttonValueB: 'F', buttonLabelB: '\\\\str{(7 + 4) • 3}', buttonValueC: 'F', buttonLabelC: '\\\\str{7 + 4 * 3}', buttonValueD: 'F', buttonLabelD: '\\\\str{(7 + 4) (3)}', help: '\\\\rowgrp{\\\\row{\\\\str{The expression can be expressed as:}}}{\\\\row{\\\\str{7 + (4 * 3)}}}', template: 'expressions' },
		{instructions: 'Start with 20, then subtract the quotient of fourteen and two.',  buttonValueA: 'T', buttonLabelA: '\\\\str{20 - 14 / 2}', buttonValueB: 'F', buttonLabelB: '\\\\str{20 - 14 * 2}', buttonValueC: 'T', buttonLabelC: '\\\\grp{\\\\str{20 - }}{\\\\frac{\\\\str{14}}{\\\\str{2}}}', buttonValueD: 'F', buttonLabelD: '\\\\str{20 - (14 / 2)}', help: '\\\\rowgrp{\\\\row{\\\\str{The expression can be expressed as either:}}}{\\\\row{\\\\str{20 - 14 / 2}}}{\\\\row{\\\\str{or}}}{\\\\row{\\\\grp{\\\\str{20 - }}{\\\\frac{\\\\str{14}}{\\\\str{2}}}}}', template: 'expressions' },
		{instructions: 'Multiply eight by the sum of 4, 7, and 9.',  buttonValueA: 'T', buttonLabelA: '\\\\str{4 + 7 + 9 * 8}', buttonValueB: 'F', buttonLabelB: '\\\\str{(8 * 4 + 7 + 9}', buttonValueC: 'F', buttonLabelC: '\\\\str{8 (4 + 7 + 9)}', buttonValueD: 'T', buttonLabelD: '\\\\str{((4 + 7 + 9) * 8}', help: '\\\\rowgrp{\\\\row{\\\\str{The expression can be expressed as either:}}}{\\\\row{\\\\str{4 + 7 + 9 * 8}}}{\\\\row{\\\\str{or}}}{\\\\row{\\\\str{(4 + 7 + 9) * 8}}}', template: 'expressions' },
		{instructions: 'Take the sum of 40, 25, and 15.   Then divide this total by 3.',  buttonValueA: 'T', buttonLabelA: '\\\\str{(40 + 25 + 15) / 3}', buttonValueB: 'T', buttonLabelB: '\\\\frac{\\\\str{(40 + 25 + 15)}}{\\\\str{3}}', buttonValueC: 'F', buttonLabelC: '\\\\str{3 / (40 + 25 + 15)}', buttonValueD: 'F', buttonLabelD: '\\\\str{40 + 25 + 15 / 3}', help: '\\\\rowgrp{\\\\row{\\\\str{The expression can be expressed as either:}}}{\\\\row{\\\\str{(40 + 25 + 15) / 3}}}{\\\\row{\\\\str{or}}}{\\\\row{\\\\frac{\\\\str{(40 + 25 + 15)}}{\\\\str{3}}}}', template: 'expressions' },
		{instructions: 'Find the setups the give the answer of 20.',  buttonValueA: 'F', buttonLabelA: '\\\\str{3 + (2 * 4)}', buttonValueB: 'T', buttonLabelB: '\\\\str{(3 + 2) * 4}', buttonValueC: 'T', buttonLabelC: '\\\\str{3 + 2 * 4}', buttonValueD: 'T', buttonLabelD: '\\\\str{(3 + 2)(4)}', help: '\\\\rowgrp{\\\\row{\\\\str{The expression can be expressed as either:}}}{\\\\row{\\\\str{(3 + 2) * 4}}}{\\\\row{\\\\str{3 + 2 * 4}}}{\\\\row{\\\\str{or}}}{\\\\row{\\\\str{(3 + 2)(4)}}}', template: 'expressions' },
		{instructions: 'Find the setups the give the answer of 11.',  buttonValueA: 'T', buttonLabelA: '\\\\str{3 + (2 * 4)}', buttonValueB: 'F', buttonLabelC: '\\\\str{(3 + 2) * 4}', buttonValueC: 'F', buttonLabelB: '\\\\str{3 + 2 * 4}', buttonValueD: 'F', buttonLabelD: '\\\\str{(3 + 2)(4)}', help: '\\\\rowgrp{\\\\row{\\\\str{The expression can be expressed as:}}}{\\\\row{\\\\str{3 + (2 * 4)}}}', template: 'expressions' },
		{instructions: 'Find the setups the give the answer of 7.',  buttonValueA: 'F', buttonLabelA: '\\\\str{10 - 6 / 2}', buttonValueB: 'T', buttonLabelB: '\\\\grp{\\\\str{10}}{\\\\str{-}}{\\\\frac{\\\\str{6}}{\\\\str{2}}}', buttonValueC: 'T', buttonLabelC: '\\\\str{10 - (6 / 2)}', buttonValueD: 'F', buttonLabelD: '\\\\str{10 + 4 / 2}', help: '\\\\rowgrp{\\\\row{\\\\str{The expression can be expressed as ether:}}}{\\\\row{\\\\grp{\\\\str{10}}{\\\\str{-}}{\\\\frac{\\\\str{6}}{\\\\str{2}}}}}{\\\\row{\\\\str{or}}}{\\\\row{\\\\str{10 - (6 / 2)}}}', template: 'expressions' },
		{instructions: 'Find the setups the give the answer of 45.',  buttonValueA: 'T', buttonLabelA: '\\\\str{5 + 6 + 4 * 3}', buttonValueB: 'F', buttonLabelB: '\\\\str{3 * 5 + 6 + 4}', buttonValueC: 'T', buttonLabelC: '\\\\str{3 (5 + 6 +4)}', buttonValueD: 'T', buttonLabelD: '\\\\str{(5 + 6 + 4) * 3}', help: '\\\\rowgrp{\\\\row{\\\\str{The expression can be expressed as ether:}}}{\\\\row{\\\\str{5 + 6 + 4 * 3}}}{\\\\row{\\\\str{or}}}{\\\\row{\\\\str{3 (5 + 6 +4)}}}{\\\\row{\\\\str{or}}}{\\\\row{\\\\str{(5 + 6 + 4) * 3}}}', template: 'expressions' },
		{instructions: 'Find the setups the give the answer of 20.',  buttonValueA: 'F', buttonLabelA: '\\\\str{10 + 35 + 15 / 3}', buttonValueB: 'F', buttonLabelB: '\\\\str{3 / (10 + 35 + 15)}', buttonValueC: 'T', buttonLabelC: '\\\\str{(10 + 35 + 15) / 3}', buttonValueD: 'T', buttonLabelD: '\\\\grp{\\\\frac{\\\\str{(10 + 35 + 15)}}{\\\\str{3}}}', help: '\\\\rowgrp{\\\\row{\\\\str{The expression can be expressed as ether:}}}{\\\\row{\\\\str{(10 + 35 + 15) / 3}}}{\\\\row{\\\\str{or}}}{\\\\row{\\\\grp{\\\\frac{\\\\str{(10 + 35 + 15)}}{\\\\str{3}}}}}', template: 'expressions' }
		];
    return dataUtils.build(desc, template, data);
}]);
