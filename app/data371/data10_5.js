
/*global angular */

angular.module('mathSkills').service('data10_5', ['dataUtils', function (dataUtils) {
    var desc = {
			title: '10.5 Compare and Order Fractions',
			path: '10.5-compare-and-order-fractions',
            children: []
        },
	        template = {
            first: {
                title: 'Compare and Order Fractions',
                children: [{
                    title: 'Main Answer',
                    children: [{
						problem: '',
						answer: '\\pan{2}{10}'
                                    +'{\\grp'
                                        +'{\\frac{\\fracstr{$firstNum}}{\\fracstr{$firstDen}}}'
                                        +'{\\btn{<}{$firstButton}{bigger}}'
                                        +'{\\btn{=}{$secondButton}{bigger}}'
                                        +'{\\btn{>}{$thirdButton}{bigger}}'
										+'{\\frac{\\fracstr{$secondNum}}{\\fracstr{$secondDen}}}'
									+'}'
                                +'}',
						controls: {
							"checkAnswer": false,
							"help": '\\rowgrp'
										+'{\\grp'
											+'{\\frac{\\fracstr{$firstNum}}{\\fracstr{$firstDen}}}'
											+'$questionMark'	
											+'{\\frac{\\fracstr{$secondNum}}{\\fracstr{$secondDen}}}'
										+'}'
										+'{html{&nbsp;}}'
										+'{\\grp'
											+'{\\frac{\\fracstr{$firstNum}}{\\fracstr{$firstDen}}}'
											+'$questionMark'	
											+'{\\frac{\\fracstr{$thirdNum}}{\\fracstr{$thirdDen}}}'
										+'}'
										+'{html{&nbsp;}}'
										+'{\\grp'
											+'{\\html{Therefore}}'
											+'{\\html{&nbsp;}}'
											+'{\\frac{\\fracstr{$firstNum}}{\\fracstr{$firstDen}}}'
											+'{\\sign{<}}'
											+'{\\frac{\\fracstr{$thirdNum}}{\\fracstr{$thirdDen}}}'
										+'}'
										}
                    }]
                }]
           }
        },
        data = [
            { firstNum: '1', firstDen: '4', secondNum: '2', secondDen: '6', thirdNum: '1', thirdDen: '3', firstButton: 'T', secondButton: 'F', thirdButton: 'F', template: 'first', answerBtn: 'noAnswer',
			questionMark: dataUtils.pre(
								'{\\rowgrp'
									+'{\\grp'
										+'{\\html{&nbsp;}}'
										+'{\\html{&nbsp;?}}'
										+'{\\html{&nbsp;}}'
									+'}'
									+'{\\grp'
										+'{\\html{<}}'
										+'{\\html{=}}'
										+'{\\html{>}}'
									+'}'
								+'}'
					)
			},
        ];

	return dataUtils.build(desc, template, data);
}]);



