/*global angular */

angular.module('mathSkills').value('data_v_1', {
    title: 'V.1 Volume',
    path: 'V.1-volume',
    children: [{
        title: 'Volume',
        children: [] }]
});

/*global angular */

angular.module('mathSkills').service('data_v_1', ['dataUtils', function (dataUtils) {
    var desc = {
			title: 'V.1 Volume',
    		path: 'v.1-volume',
            children: []
        },
	        template = {
			// first template, integers operation
			main: {
                title: 'Volume',
                children: [{
                    title: 'Main Answer',
                    children: [{
						problem: '\\rowgrp'
									+'{\\str{$probQuestion}}'
									+'{\\html{&nbsp;}}'
									+'{\\image{$illustration}{$alt}}',
						answer: '\\rowgrp'+
										'{\\grp'
											+'{\\input{$answer}}'
											+'{\\exp{\\str{ft}}{\\input{$expAns}}'
										+'}',
						controls: {
								"checkAnswer": true,
								"help": '\\rowgrp'
											+'$firstLines'
											+'{\\html{&nbsp;}}'
											+'$firstTable'
											+'{\\html{&nbsp;}}'
											+'{css'
												+'{\\str{Answer:  $textAnswer}}'
												+'{help-answer-text}'
											+'}'
											+'{\\html{&nbsp;}}'
						}
					}]
				}]
			}
			,
			flexy: {
                title: 'Volume',
                children: [{
                    title: 'Main Answer',
                    children: [{
						problem: '$stateProblem',
						answer: '$solution',
						controls: {
								"checkAnswer": true,
								"help": '\\rowgrp'
											+'$firstLines'
											+'{\\html{&nbsp;}}'
											+'$firstTable'
											+'{\\html{&nbsp;}}'
											+'{css'
												+'{\\grp'
													+'{\\str{Answer: &nbsp;}}'
													+'{$helpAnswer}'
												+'}'
												+'{help-answer-text}'
											+'}'
											+'{\\html{&nbsp;}}'
						}
					}]
				}]
			}
        },
        data = [
				{	// problem 1
					probQuestion: 'Find the volume of the shape below.',
					illustration: '',
					alt: 'rectangular box 8 x 12 x 5',
					firstLines: dataUtils.pre(
										'{\\str{Identify the shape: Rectangular Box}}'								
									),
					firstTable: dataUtils.pre(
									'{\\html{'
										+'<table>'
											+'<tr>'
												+'<td>'
													+'Write the formula:'
												+'</td>'
												+'<td>'
													+'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
												+'</td>'
												+'<td>'
													+'V <span class=larger>=</span> L &bull; W &bull; H'
												+'</td>'
											+'</tr>'
											+'<tr>'
												+'<td>'
													+'Substitution:'
												+'</td>'
												+'<td>'
													+'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
												+'</td>'
												+'<td>'
													+'V <span class=larger>=</span> (8) &bull; (12) &bull; (5)'
												+'</td>'
											+'</tr>'
											+'<tr>'
												+'<td>'
													+'Solve:'
												+'</td>'
												+'<td>'
													+'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
												+'</td>'
												+'<td>'
													+'V <span class=larger>=</span> 480'
												+'</td>'
											+'</tr>'
										+'</table>'
									+'}}'
								),
					textAnswer: ' &nbsp; 480 ft<sup> 3</sup>',
					answer: '480',
					expAns: '3',
					template: 'main',
				}
				,
				{	// problem 5
					stateProblem: dataUtils.pre(
									'\\rowgrp'
										+'{\\str{$$probQuestion}}'
										+'{\\html{&nbsp;}}'
										+'{\\image{$$illustration}{$$alt}}'
									),
					solution: dataUtils.pre(
								'\\css'
									+'{\\rowgrp'
										+'{\\str{$$answerInstructions}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\mixed{\\input{$$ansWhole}}{\\frac{\\input{$$numAnswer}}{\\input{$$denAnswer}}}}'
											+'{\\exp{\\str{m}}{\\input{$$expAns}}}'
										+'}'
									+'}'
									+'{marginLeft80px}'
						),
					answerInstructions: '',
					probQuestion: 'Find the volume of the shape below.  Give the answer as a mixed number.',
					ansWhole: '42',
					numAnswer: '7',
					denAnswer: '8',
					expAns: '3',
					firstLines: dataUtils.pre(
										'{\\str{Identify the shape: Cube}}'
									),
					helpFraction: dataUtils.pre(
										'{\\html{'
											+'<table>'
												+'<tr>'
													+'<td>'
														+'Write the formula:'
													+'</td>'
													+'<td>'
														+'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
													+'</td>'
													+'<td>'
														+'V <span class=larger>=</span> s<sup> 3</sup>'
													+'</td>'
												+'</tr>'
									),
					firstTable: dataUtils.pre(
									'{\\html{'
										+'<table>'
											+'<tr>'
												+'<td>'
													+'Write the formula:'
												+'</td>'
												+'<td>'
													+'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
												+'</td>'
												+'<td>'
													+'V <span class=larger>=</span> s<sup> 3</sup>'
												+'</td>'
											+'</tr>'
											+'<tr>'
												+'<td>'
													+'Substitution:'
												+'</td>'
												+'<td>'
													+'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
												+'</td>'
												+'<td>'
													+'V <span class=larger>=</span><table><tr><td rowspan="3" class=hugeAndThin>(</td><td></td><td>4</td><td rowspan="3" class=hugeAndThin>&nbsp; )</td><td rowspan="3"><span class=exponentLarge><sup>3</sup></span></td></tr><tr><td>-</td><td><hr></td></tr><tr><td></td><td>3</td></tr></table>'
												+'</td>'
											+'</tr>'
											+'<tr>'
												+'<td>'
													+'Solve:'
												+'</td>'
												+'<td>'
													+'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
												+'</td>'
												+'<td>'
													+'V <span class=larger>=</span> 480'
												+'</td>'
											+'</tr>'
										+'</table>'
									+'}}'
								),
					helpAnswer: dataUtils.pre(
									'\\grp'
										+'{\\css'
											+'{\\mixed{\\str{$$ansWhole}}{\\frac{\\str{$$numAnswer}}{\\str{$$denAnswer}}}}'
											+'{fracNoMargin}'
										+'}'
										+'{\\exp{\\str{m}}{\\str{$$expAns}}}'
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
				{ problems: [13,14], total: 1},
				{ problems: [15,16], total: 1},
				{ problems: [17,18], total: 1},
				{ problems: [19,20], total: 1},
				{ problems: [21,22], total: 1},
				{ problems: [23,24], total: 1}
		];
    
    	return dataUtils.build(desc, template, data, shuffle);*/
		
		return dataUtils.build(desc, template, data);
}]);
