/*global angular */

angular.module('mathSkills').service('data_bb_1', ['dataUtils', function (dataUtils) {
    var desc = {
			title: 'BB.1 Evaluating Algebraic Expressions',
    		path: 'bb.1-evaluating-algebraic-expressions',
            children: []
        },
	        template = {
			// first template, integers operation
			main: {
                title: 'Evaluating Algebraic Expressions',
                children: [{
                    title: 'Main Answer',
                    children: [{
						problem: '\\rowgrp'
									+'{\\str{If&nbsp; $variableOneValue$variableTwoValue<span class=large>,</span>&nbsp; evaluate the following expression:}}'
									+'{\\html{&nbsp;}}'
									+'{\\str{$expression}}',
						answer: '\\rowgrp'+
										'{\\grp'
											+'{\\input{$answer}}'
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
        },
        data = [
				{	// problem 1
					variableOneValue: 'x = -3',
                    variableTwoValue: '',
					expression: 'x<sup> 2</sup> + x',
					substitution: '(-3 )<sup> 2</sup> + (-3 )',
					firstLines: dataUtils.pre(
										'{\\str{Whenever you substitute a number value for a variable, put that number inside a parenthesis.}}'
										+'{\\str{&nbsp;}}'
										+'{\\str{Therefore:  $$expression&nbsp; is the same as&nbsp; $$substitution}}'
										+'{\\str{&nbsp;}}'
										+'{\\str{Follow order of operations to evaluate the problem.}}'
									),
					firstTable: dataUtils.pre(
											'{\\grp'
												+'{\\str{1st: Solve the exponent.}}'
												+'{\\str{&nbsp;&nbsp;(-3 )<sup> 2</sup> + (-3 )}}'
											+'}'
											+'{\\str{&nbsp;}}'
											+'{\\grp'
												+'{\\str{2nd: Combine the value.}}'
												+'{\\str{&nbsp;&nbsp;&nbsp;9 + (-3 )</span>}}'
											+'}'
											+'{\\grp'
												+'{\\str{<span class=marginLeft198px>6</span>}}'
											+'}'
										),
					textAnswer: ' &nbsp; 6',
					answer: '6',
					template: 'main',
				}
				,
				{	// problem 2
					variableOneValue: 'y = -5',
                    variableTwoValue: '',
					expression: 'y<sup> 2</sup> + y',
					substitution: '(-5 )<sup> 2</sup> + (-5 )',
					firstLines: dataUtils.pre(
										'{\\str{Whenever you substitute a number value for a variable, put that number inside a parenthesis.}}'
										+'{\\str{&nbsp;}}'
										+'{\\str{Therefore:  $$expression&nbsp; is the same as&nbsp; $$substitution}}'
										+'{\\str{&nbsp;}}'
										+'{\\str{Follow order of operations to evaluate the problem.}}'
									),
					firstTable: dataUtils.pre(
											'{\\grp'
												+'{\\str{1st: Solve the exponent.}}'
												+'{\\str{&nbsp;&nbsp;(-5 )<sup> 2</sup> + (-5 )}}'
											+'}'
											+'{\\str{&nbsp;}}'
											+'{\\grp'
												+'{\\str{2nd: Combine the value.}}'
												+'{\\str{&nbsp;&nbsp;&nbsp;25 + (-5 )</span>}}'
											+'}'
											+'{\\grp'
												+'{\\str{<span class=marginLeft198px>20</span>}}'
											+'}'
										),
					textAnswer: ' &nbsp; 20',
					answer: '20',
					template: 'main',
				}
				,
				{	// problem 3
					variableOneValue: 'm = -4',
                    variableTwoValue: '',
					expression: '-m<sup> 2</sup>',
					substitution: '(-4 )<sup> 2</sup>',
					firstLines: dataUtils.pre(
										'{\\str{Whenever you substitute a number value for a variable, put that number inside a parenthesis.}}'
										+'{\\str{&nbsp;}}'
										+'{\\str{Therefore:  $$expression&nbsp; is the same as&nbsp; $$substitution}}'
										+'{\\str{&nbsp;}}'
										+'{\\str{Follow order of operations to evaluate the problem.}}'
									),
					firstTable: dataUtils.pre(
											'{\\grp'
												+'{\\str{1st: Solve the exponent.}}'
												+'{\\str{&nbsp;&nbsp;(-4 )<sup> 2</sup>}}'
											+'}'
											+'{\\str{&nbsp;}}'
											+'{\\grp'
												+'{\\str{2nd: Distribute the sign.}}'
												+'{\\str{&nbsp;&nbsp;&nbsp;-( 16 )</span>}}'
											+'}'
											+'{\\grp'
												+'{\\str{<span class=marginLeft198px>-16</span>}}'
											+'}'
										),
					textAnswer: ' &nbsp; -16',
					answer: '-16',
					template: 'main',
				}
				,
				{	// problem 4
					variableOneValue: 'n = -6',
                    variableTwoValue: '',
					expression: '-n<sup> 2</sup>',
					substitution: '(-6 )<sup> 2</sup>',
					firstLines: dataUtils.pre(
										'{\\str{Whenever you substitute a number value for a variable, put that number inside a parenthesis.}}'
										+'{\\str{&nbsp;}}'
										+'{\\str{Therefore:  $$expression&nbsp; is the same as&nbsp; $$substitution}}'
										+'{\\str{&nbsp;}}'
										+'{\\str{Follow order of operations to evaluate the problem.}}'
									),
					firstTable: dataUtils.pre(
											'{\\grp'
												+'{\\str{1st: Solve the exponent.}}'
												+'{\\str{&nbsp;&nbsp;(-6 )<sup> 2</sup>}}'
											+'}'
											+'{\\str{&nbsp;}}'
											+'{\\grp'
												+'{\\str{2nd: Distribute the sign.}}'
												+'{\\str{&nbsp;&nbsp;&nbsp;-( 36 )</span>}}'
											+'}'
											+'{\\grp'
												+'{\\str{<span class=marginLeft198px>-36</span>}}'
											+'}'
										),
					textAnswer: ' &nbsp; -36',
					answer: '-36',
					template: 'main',
				}
				,
				{	// problem 5
					variableOneValue: 'x = -4',
					variableTwoValue: '&nbsp;&nbsp;and&nbsp; y <span class=bigger>=</span>-1',
					expression: 'y<sup> 3</sup> - x',
					substitution: '(-1 )<sup> 3</sup> - (-4 )',
					firstLines: dataUtils.pre(
										'{\\str{Whenever you substitute a number value for a variable, put that number inside a parenthesis.}}'
										+'{\\str{&nbsp;}}'
										+'{\\str{Therefore:  $$expression&nbsp; is the same as&nbsp; $$substitution}}'
										+'{\\str{&nbsp;}}'
										+'{\\str{Follow order of operations to evaluate the problem.}}'
									),
					firstTable: dataUtils.pre(
											'{\\grp'
												+'{\\str{1st: Solve the exponent.}}'
												+'{\\str{&nbsp;&nbsp;(-1 )<sup> 3</sup>}}'
											+'}'
											+'{\\str{&nbsp;}}'
											+'{\\grp'
												+'{\\str{2nd: Combine the values.}}'
												+'{\\str{&nbsp;&nbsp;&nbsp;-1 - (-4 )}}'
											+'}'
											+'{\\grp'
												+'{\\str{<span class=marginLeft198px>&nbsp;&nbsp;&nbsp;3</span>}}'
											+'}'
										),
					textAnswer: ' &nbsp; 3',
					answer: '3',
					template: 'main',
				}
				,
				{	// problem 6
					variableOneValue: 'a = -7',
					variableTwoValue: '&nbsp;&nbsp;and&nbsp; b <span class=bigger>=</span>-2',
					expression: 'b<sup> 3</sup> - a',
					substitution: '(-2 )<sup> 3</sup> - (-7 )',
					firstLines: dataUtils.pre(
										'{\\str{Whenever you substitute a number value for a variable, put that number inside a parenthesis.}}'
										+'{\\str{&nbsp;}}'
										+'{\\str{Therefore:  $$expression&nbsp; is the same as&nbsp; $$substitution}}'
										+'{\\str{&nbsp;}}'
										+'{\\str{Follow order of operations to evaluate the problem.}}'
									),
					firstTable: dataUtils.pre(
											'{\\grp'
												+'{\\str{1st: Solve the exponent.}}'
												+'{\\str{&nbsp;&nbsp;(-2 )<sup> 3</sup>}}'
											+'}'
											+'{\\str{&nbsp;}}'
											+'{\\grp'
												+'{\\str{2nd: Combine the values.}}'
												+'{\\str{&nbsp;&nbsp;&nbsp;-8 - (-7 )}}'
											+'}'
											+'{\\grp'
												+'{\\str{<span class=marginLeft198px>&nbsp;&nbsp;&nbsp;-1</span>}}'
											+'}'
										),
					textAnswer: ' &nbsp; -1',
					answer: '-1',
					template: 'main',
				}
				,
				{	// problem 7
					variableOneValue: 'a = 2.3',
					variableTwoValue: '&nbsp;&nbsp;and&nbsp; b <span class=bigger>=</span>-3.4',
					expression: '-a - 2b',
					substitution: '-( 2.3 ) - 2(-3.4 )',
					firstLines: dataUtils.pre(
										'{\\str{Whenever you substitute a number value for a variable, put that number inside a parenthesis.}}'
										+'{\\str{&nbsp;}}'
										+'{\\str{Therefore:  $$expression&nbsp; is the same as&nbsp; $$substitution}}'
										+'{\\str{&nbsp;}}'
										+'{\\str{Follow order of operations to evaluate the problem.}}'
									),
					firstTable: dataUtils.pre(
											'{\\grp'
												+'{\\str{1st: Multiply.}}'
												+'{\\str{<span class=marginLeft80px>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$$substitution}}'
											+'}'
											+'{\\str{&nbsp;}}'
											+'{\\grp'
												+'{\\str{2nd: Combine the values.}}'
												+'{\\str{&nbsp;&nbsp;&nbsp;-2.3 + 6.8}}'
											+'}'
											+'{\\grp'
												+'{\\str{<span class=marginLeft198px>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4.5</span>}}'
											+'}'
										),
					textAnswer: ' &nbsp; 4.5',
					answer: '4.5',
					template: 'main',
				}
				,
				{	// problem 8
					variableOneValue: 'x = 5.75',
					variableTwoValue: '&nbsp;&nbsp;and&nbsp; y <span class=bigger>=</span>-3.6',
					expression: '-x - 2y',
					substitution: '-( 5.75 ) - 2(-3.6 )',
					firstLines: dataUtils.pre(
										'{\\str{Whenever you substitute a number value for a variable, put that number inside a parenthesis.}}'
										+'{\\str{&nbsp;}}'
										+'{\\str{Therefore:  $$expression&nbsp; is the same as&nbsp; $$substitution}}'
										+'{\\str{&nbsp;}}'
										+'{\\str{Follow order of operations to evaluate the problem.}}'
									),
					firstTable: dataUtils.pre(
											'{\\grp'
												+'{\\str{1st: Multiply.}}'
												+'{\\str{<span class=marginLeft80px>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$$substitution}}'
											+'}'
											+'{\\str{&nbsp;}}'
											+'{\\grp'
												+'{\\str{2nd: Combine the values.}}'
												+'{\\str{&nbsp;&nbsp;&nbsp;-5.75 + 7.2}}'
											+'}'
											+'{\\grp'
												+'{\\str{<span class=marginLeft198px>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1.45</span>}}'
											+'}'
										),
					textAnswer: ' &nbsp; 1.45',
					answer: '1.45',
					template: 'main',
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
				{ problems: [19,20], total: 1}
		];
    
    	return dataUtils.build(desc, template, data, shuffle);*/
		
		return dataUtils.build(desc, template, data);
}]);