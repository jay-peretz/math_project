/*global angular */

angular.module('mathSkills').service('data26_2', ['dataUtils', function (dataUtils) {
    var desc = {
			title: '26.2 Conversion between the Fahrenheit and Celsius Temperature Scales',
    		path: '26.2-conversion-between-fahrenheit-and-celsius',
            children: []
        },
	        template = {
			
			flexy: {
                title: '26.2 Conversion between the Fahrenheit and Celsius Temperature Scales',
                children: [{
                    title: 'Main Answer',
                    children: [{
						problem: '\\pan{4}{8}'
									+'{$modalChart}',
						answer: '\\grp'
									+'{$solution}',
						controls: {
								"checkAnswer": true,
								"help": '\\rowgrp' 	 
											+'$firstTable'
											+'{\\html{&nbsp;}}'
											+'{\\html{&nbsp;}}'
											+'{css'
												+'{\\grp'
													+'{\\str{Answer: &nbsp;}}'
													+'{$helpAnswer}'
												+'}'
												+'{help-answer-text}'
											+'}'
											+'{\\html{&nbsp;}}',
						}
					}]
				}]
			}
        },
        data = [
				{	// problem 1
					ansNumber: '212',
					solution: dataUtils.pre(
									'\\grp'
										+'{\\html{100&deg; C =}}'
										+'{\\input{$$ansNumber}}'
										+'{\\str{&deg; F}}'
								),
					firstTable: dataUtils.pre(
										'{\\html{&nbsp;}}'
										+'{\\str{We are converting to a Fahrenheit temperature, so use the \"F =\" formula.}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{Formula:}}'
												+'{width120}'
											+'}'
											+'{\\grp'
												+'{\\str{F = 1.8 ( C ) + 32}}'
											+'}'
										+'}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{Substitute:}}'
												+'{width120}'
											+'}'
											+'{\\grp'
												+'{\\str{F = 1.8 ( 100 ) + 32}}'
											+'}'
											/*+'{\\grp'
												+'{\\str{78 = }}'
												+'{\\css'
													+'{\\frac'
														+'{\\str{1}}'
														+'{\\str{2}}'
													+'}'
													+'{fracNoMargin}'
												+'}'
												+'{\\str{* b * 12}}'
											+'}'*/
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\str{Solve by following the order of operations.}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{Multiply:}}'
												+'{width120}'
											+'}'
											+'{\\grp'
												+'{\\str{F = 1.8 ( 100 ) + 32}}'
											+'}'
										+'}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{Result & add:}}'
												+'{width120}'
											+'}'
											+'{\\grp'
												+'{\\str{F = 180 + 32}}'
											+'}'
										+'}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{Result:}}'
												+'{width120}'
											+'}'
											+'{\\grp'
												+'{\\str{F = 212}}'
											+'}'
										+'}'
								),
					helpAnswer: dataUtils.pre(
											  '\\grp'
												+'{\\html{100&deg; C =}}'
												+'{\\str{$$ansNumber}}'
												+'{\\str{&deg; F}}'
						),
					modalChart: dataUtils.pre('\\html'
								+'{<table class=equivalence-table>'
									+'<th colspan="4">Equivalence Table</th>'
									+'<tr>'
										+'<td>F</td>'
										+'<td>&nbsp;=&nbsp;</td>'
										+'<td>1.8</td>'
										+'<td>( C ) + 32</td>'
									+'</tr>'
									+'<tr>'
										+'<td>C</td>'
										+'<td>&nbsp;=&nbsp;</td>'
										+'<td>'
											+'<table class=inside-equivalence-table>'
												+'<tr>'
													+'<td>5</td>'
												+'</tr>'
												+'<tr>'
													+'<td></td>'
												+'</tr>'
												+'<tr>'
													+'<td>9</td>'
												+'</tr>'
											+'</table>'
										+'</td>'
										+'<td class=td-inside-equivalence-table>'
											+'(F - 32)'
										+'</td>'
									+'</tr>'
								+'</table>}'
							),
					template: 'flexy',
				}
        ];
		/*shuffle = [
				{ problems: [1,2], total: 1},
				{ problems: [3,4], total: 1},
				{ problems: [5,6], total: 1},
				{ problems: [7,8], total: 1},
				{ problems: [9,10], total: 1},
				{ problems: [11,12], total: 1},
				{ problems: [13,14], total: 1}
		];
    
    	return dataUtils.build(desc, template, data, shuffle);*/
		
		return dataUtils.build(desc, template, data);
}]);


