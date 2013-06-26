/*global angular */

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
						problem: '\\row{\\str{$instructions}}',
						answer: '\\butgrp'
						+'{\\col{\\row{\\html{&nbsp;}}}'
						+'{\\row{\\but{A}{$buttonValueA}}'	
						+'{\\grp{\\html{\xA0 \xA0 $buttonLabelA}}}}'					
						+'{\\row{\\but{B}{$buttonValueB}}'
						+'{\\grp{\\html{\xA0 \xA0 $buttonLabelB}}}}'						
						+'{\\row{\\but{C}{$buttonValueC}}'	
						+'{\\grp{\\html{\xA0 \xA0 $buttonLabelC}}}}'				
						+'{\\row{\\but{D}{$buttonValueD}}'
						+'{\\grp{\\html{\xA0 \xA0 $buttonLabelD}}}}}',
						
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
			{ instructions: 'Seven plus four, then multiply by three',  buttonValueA: 'F', buttonLabelA: '7 + (4 + 3)', buttonValueB: 'T', buttonLabelB: '(7 + 4) * 3', buttonValueC: 'F', buttonLabelC: '7 + 4 * 3', buttonValueD: 'F', buttonLabelD: '(7 + 4) (3)',  template: 'expressions' },
			{}		
        ];
    return dataUtils.build(desc, template, data);
}]);