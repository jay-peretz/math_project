/*global angular */

angular.module('mathSkills').service('data16_2', ['dataUtils', function (dataUtils) {
    var desc = {
			title: '16.2 Validate Proportions',
			path: '16.2-validate-proportions',
            children: []
        },
        template = {
			main: {
                title: 'Validate Proportions',
				children: [{
					title: 'Main Answer',
					children: [{
						problem: '\\rowgrp'
									+'{\\str{Is the statement below true or false?}}'
									+'{\\str{&nbsp;}}'
									+'{\\grp'
										+'{\\frac{\\str{$problemNum1}}{\\str{$problemDen1}}}'
										+'{\\str{&nbsp; = &nbsp;}}'
										+'{\\frac{\\str{$problemNum2}}{\\str{$problemDen2}}}'
									+'}',
						answer: '\\css'
									+'{\\grp'
										+'{\\btn{True}{$buttonTrueValue}}'
										+'{\\html{&nbsp; &nbsp;}}'
										+'{\\btn{False}{$buttonFalseValue}}'
									+'}'
									+'{margin-left-small}',
						controls: {
							"checkAnswer": true,
							"help": '\\rowgrp'
										+'{\\str{&nbsp;}}'
										+'{\\str{A proportion is true if the cross products equal each other.}}'
										+'{\\str{&nbsp;}}'
										+'{\\grp'
											+'{\\str{$problemNum1 &nbsp; * &nbsp; $problemDen2 &nbsp; $equalOrNot &nbsp; $problemDen1 &nbsp;   * &nbsp; $problemNum2}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\str{$productLeft &nbsp; $equalOrNot &nbsp; $productRight}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\css'
											+'{\\grp'
												+'{\\str{Answer: &nbsp; $answerFirst }}'
											+'}'
											+'{help-answer-text}'
										+'}'
										+'{\\html{&nbsp;}}'
						}
					}]
                }]
            },
			second: {
                title: 'Writing a Ratio of Two Numbers',
                children: [{
                    title: 'Main Answer',
                    children: [{
						problem: '\\rowgrp'
									+'{\\str{Is the statement below true or false?}}'
									+'{\\str{&nbsp;}}'
									+'{\\grp'
										+'{\\frac'
											+'{\\str{$problemNum1 $label1}}'
											+'{\\str{$problemDen1 $label2}}'
										+'}'
										+'{\\str{&nbsp; = &nbsp;}}'
										+'{\\frac'
											+'{\\str{$problemNum2 $label3}}'
											+'{\\str{$problemDen2 $label4}}'
										+'}'
									+'}',
						answer: '\\css'
									+'{\\grp'
										+'{\\btn{True}{$buttonTrueValue}}'
										+'{\\html{&nbsp; &nbsp;}}'
										+'{\\btn{False}{$buttonFalseValue}}'
									+'}'
									+'{margin-left-small}',
						controls: {
							"checkAnswer": true,
							"help": '\\rowgrp'
										+'{\\str{&nbsp;}}'
										+'{\\str{A proportion is true if the cross products equal each other.}}'
										+'{\\str{&nbsp;}}'
										+'{\\grp'
											+'{\\str{$helpNum1 &nbsp;*&nbsp; $helpDen2 &nbsp; $equalOrNot &nbsp; $helpDen1 &nbsp;*&nbsp; $helpNum2}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\str{<span class=hiddenSpace>$helpNum1 &nbsp;*&nbsp; </span>$productLeft &nbsp; $equalOrNot &nbsp; $productRight}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\css'
											+'{\\str{Answer: &nbsp;  $answerFirst }}'
											+'{help-answer-text}'
										+'}'
										+'{\\html{&nbsp;}}'
						}
					}]
                }]
            },
			third: {
                title: 'Writing a Ratio of Two Numbers',
                children: [{
                    title: 'Main Answer',
                    children: [{
						problem: '\\rowgrp'
									+'{\\str{Is the statement below true or false?}}'
									+'{\\str{&nbsp;}}'
									+'{\\grp'
										+'{\\frac'
											+'{\\css'
												+'{\\grp'
													+'{\\str{&nbsp; &nbsp;}}'
													+'{\\frac'
														+'{\\str{$problemNum1}}'
														+'{\\str{$problemDen1}}'
													+'}'
													+'{\\str{&nbsp; &nbsp;}}'
												+'}'
												+'{margin_bottom_tiny}'
											+'}'
											+'{\\grp'
												+'{\\str{&nbsp; &nbsp;}}'
												+'{\\frac'
													+'{\\str{$problemNum2}}'
													+'{\\str{$problemDen2}}'
												+'}'
												+'{\\str{&nbsp; &nbsp;}}'
											+'}'
										+'}'
										+'{\\str{&nbsp; = &nbsp;}}'
										+'{\\frac'
											+'{\\css'
												+'{\\grp'
													+'{\\str{&nbsp; &nbsp;}}'
													+'{\\frac'
														+'{\\str{$problemNum3}}'
														+'{\\str{$problemDen3}}'
													+'}'
													+'{\\str{&nbsp; &nbsp;}}'
												+'}'
												+'{margin_bottom_tiny}'
											+'}'
											+'{\\grp'
												+'{\\str{&nbsp; &nbsp;}}'
												+'{\\frac'
													+'{\\str{$problemNum4}}'
													+'{\\str{$problemDen4}}'
												+'}'
												+'{\\str{&nbsp; &nbsp;}}'
											+'}'
										+'}'
									+'}',
						answer: '\\css'
									+'{\\grp'
										+'{\\btn{True}{$buttonTrueValue}}'
										+'{\\html{&nbsp; &nbsp;}}'
										+'{\\btn{False}{$buttonFalseValue}}'
									+'}'
									+'{margin-left-small}',
						controls: {
							"checkAnswer": true,
							"help": '\\rowgrp'
										+'{\\str{&nbsp;}}'
										+'{\\str{A proportion is true if the cross products equal each other.}}'
										+'{\\str{&nbsp;}}'
										+'{\\grp'
											+'{\\frac'
												+'{\\str{$problemNum1}}'
												+'{\\str{$problemDen1}}'
											+'}'
											+'{\\str{*}}'
											+'{\\frac'
												+'{\\str{$problemNum4}}'
												+'{\\str{$problemDen4}}'
											+'}'
											+'{\\str{&nbsp; $equalOrNot &nbsp;}}'
											+'{\\frac'
												+'{\\str{$problemNum2}}'
												+'{\\str{$problemDen2}}'
											+'}'
											+'{\\str{*}}'
											+'{\\frac'
												+'{\\str{$problemNum3}}'
												+'{\\str{$problemDen3}}'
											+'}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\grp'
													+'{\\frac'
														+'{\\str{$problemNum1}}'
														+'{\\str{$problemDen1}}'
													+'}'
													+'{\\str{&nbsp;}}'
												+'}'
												+'{hiddenSpace}'
											+'}'
											+'{\\frac'
												+'{\\str{$productNumLeft}}'
												+'{\\str{$productDenLeft}}'
											+'}'
											+'{\\str{&nbsp; $equalOrNot &nbsp;}}'
											+'{\\frac'
												+'{\\str{$productNumRight}}'
												+'{\\str{$productDenRight}}'
											+'}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\css'
											+'{\\str{Answer: &nbsp; $answerFirst}}'
											+'{help-answer-text}'
										+'}'
										+'{\\html{&nbsp;}}'
						}
					}]
                }]
            },
			fourth: {
                title: 'Writing a Ratio of Two Numbers',
                children: [{
                    title: 'Main Answer',
                    children: [{
						problem: '\\rowgrp'
									+'{\\str{Is the statement below true or false?}}'
									+'{\\str{&nbsp;}}'
									+'{\\grp'
										+'{\\frac'
											+'{\\css'
												+'{\\grp'
													+'{\\html{&nbsp;}}'
													+'{\\frac'
														+'{\\str{$problemNum1}}'
														+'{\\str{$problemDen1}}'
													+'}'
													+'{\\str{&nbsp; $label1}}'
													+'{\\html{&nbsp;}}'
												+'}'
												+'{margin_bottom_tiny}'
											+'}'
											+'{\\grp'
												+'{\\html{&nbsp;&nbsp;&nbsp;}}'
												+'{\\frac'
													+'{\\css'
														+'{\\str{$problemNum2}}'
														+'{margin_bottom_neg}'
													+'}'
													+'{\\str{$problemDen2}}'
												+'}'
												+'{\\str{&nbsp; $label2}}'
												+'{\\html{&nbsp;}}'
											+'}'
										+'}'
										+'{\\str{&nbsp; = &nbsp;}}'
										+'{\\frac'
											+'{\\css'
												+'{\\grp'
													+'{\\html{&nbsp;}}'
													+'{\\frac'
														+'{\\str{$problemNum3}}'
														+'{\\str{$problemDen3}}'
													+'}'
													+'{\\str{&nbsp; $label3}}'
													+'{\\html{&nbsp;}}'
												+'}'
												+'{margin_bottom_tiny}'
											+'}'
											+'{\\grp'
												+'{\\html{&nbsp;&nbsp;&nbsp;}}'
												+'{\\frac'
													+'{\\css'
														+'{\\str{$problemNum4}}'
													+'{margin_bottom_neg}'
													+'}'
													+'{\\str{$problemDen4}}'
												+'}'
												+'{\\str{&nbsp; $label4}}'
												+'{\\html{&nbsp;}}'
											+'}'
										+'}'
									+'}',
						answer: '\\css'
									+'{\\grp'
										+'{\\btn{True}{$buttonTrueValue}}'
										+'{\\html{&nbsp; &nbsp;}}'
										+'{\\btn{False}{$buttonFalseValue}}'
									+'}'
									+'{margin-left-small}',
						controls: {
							"checkAnswer": true,
							"help": '\\rowgrp'
										+'{\\str{&nbsp;}}'
										+'{\\str{A proportion is true if the cross products equal each other.}}'
										+'{\\str{&nbsp;}}'
										+'{\\grp'
											+'{\\frac'
												+'{\\str{$problemNum1}}'
												+'{\\str{$problemDen1}}'
											+'}'
											+'{\\str{*}}'
											+'{\\frac'
												+'{\\str{$problemNum4}}'
												+'{\\str{$problemDen4}}'
											+'}'
											+'{\\str{&nbsp; $equalOrNot &nbsp;}}'
											+'{\\frac'
												+'{\\str{$problemNum2}}'
												+'{\\str{$problemDen2}}'
											+'}'
											+'{\\str{*}}'
											+'{\\frac'
												+'{\\str{$problemNum3}}'
												+'{\\str{$problemDen3}}'
											+'}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\grp'
													+'{\\frac'
														+'{\\str{$problemNum1}}'
														+'{\\str{$problemDen1}}'
													+'}'
													+'{\\str{&nbsp;}}'
												+'}'
												+'{hiddenSpace}'
											+'}'
											+'{\\frac'
												+'{\\str{$productNumLeft}}'
												+'{\\str{$productDenLeft}}'
											+'}'
											+'{\\str{&nbsp; $equalOrNot &nbsp;}}'
											+'{\\frac'
												+'{\\str{$productNumRight}}'
												+'{\\str{$productDenRight}}'
											+'}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\css'
											+'{\\str{Answer: &nbsp;  $answerFirst}}'
											+'{help-answer-text}'
										+'}'
										+'{\\html{&nbsp;}}'
						}
					}]
                }]
            }
        },
        data = [
				// problem 1
			{ problemNum1: '1', problemDen1: '5', problemNum2: '2', problemDen2: '10', buttonTrueValue: 'T', buttonFalseValue: 'F', productLeft: '10', equalOrNot: '=',  productRight: '10', answerFirst: 'True', template: 'main', answerBtn: 'noAnswer' },
			// problem 2
			{ problemNum1: '5', problemDen1: '8', problemNum2: '6', problemDen2: '10', buttonTrueValue: 'F', buttonFalseValue: 'T', productLeft: '50', equalOrNot: '\u2260',  productRight: '48', answerFirst: 'False', template: 'main', answerBtn: 'noAnswer' },
			// problem 3
			{ problemNum1: '1', problemDen1: '2', problemNum2: '3', problemDen2: '6', buttonTrueValue: 'T', buttonFalseValue: 'F', productLeft: '6', equalOrNot: '=',  productRight: '6', answerFirst: 'True', template: 'main', answerBtn: 'noAnswer' },
			// problem 4
			{ problemNum1: '1', problemDen1: '5', problemNum2: '3', problemDen2: '15', label1: 'banana', label2: 'oranges', label3: 'bananas', label4: 'oranges', buttonTrueValue: 'T', buttonFalseValue: 'F', helpNum1: '1', helpDen1: '5', helpNum2: '3', helpDen2: '15', productLeft: '15', equalOrNot: '=',  productRight: '15', answerFirst: 'True', template: 'second', answerBtn: 'noAnswer' },
			// problem 5
			{ problemNum1: '4', problemDen1: '5', problemNum2: '12', problemDen2: '20', label1: 'alumni', label2: 'faculty',  label3: 'alumni', label4: 'faculty', buttonTrueValue: 'F', buttonFalseValue: 'T', helpNum1: '4', helpDen1: '5', helpNum2: '12', helpDen2: '20', productLeft: '80', equalOrNot: '\u2260',  productRight: '60', answerFirst: 'False', template: 'second', answerBtn: 'noAnswer' },
			// problem 6
			{ problemNum1: '2.8', problemDen1: '5.6', problemNum2: '1.2', problemDen2: '2.4', buttonTrueValue: 'T', buttonFalseValue: 'F', productLeft: '6.72', equalOrNot: '=',  productRight: '6.72', answerFirst: 'True', template: 'main', answerBtn: 'noAnswer' },
			// problem 7
			{ problemNum1: '6.6', problemDen1: '2.3', problemNum2: '7.6', problemDen2: '3.3', label1: 'ounces', label2: 'tons', label3: 'ounces', label4: 'tons', buttonTrueValue: 'F', buttonFalseValue: 'T', helpNum1: '6.6', helpDen1: '2.3', helpNum2: '7.6', helpDen2: '3.3', productLeft: '21.78', equalOrNot: '\u2260',  productRight: '17.48', answerFirst: 'False', template: 'second', answerBtn: 'noAnswer' },
			// problem 8
			{ problemNum1: '2.5', problemDen1: '5', problemNum2: '7.5', problemDen2: '15', label1: 'tsp', label2: 'cups', label3: 'tsp', label4: 'cups', buttonTrueValue: 'T', buttonFalseValue: 'F', helpNum1: '2.5', helpDen1: '5', helpNum2: '7.5', helpDen2: '15', productLeft: '37.5', equalOrNot: '=',  productRight: '37.5', answerFirst: 'True', template: 'second', answerBtn: 'noAnswer' },
			// problem 9
			{ problemNum1: '1', problemDen1: '12', problemNum2: '2', problemDen2: '9', problemNum3: '1', problemDen3: '2', problemNum4: '2', problemDen4: '3', buttonTrueValue: 'F', buttonFalseValue: 'T', productNumLeft: '1', productDenLeft: '18', equalOrNot: '\u2260',  productNumRight: '2', productDenRight: '18', answerFirst: 'False', template: 'third', answerBtn: 'noAnswer' },
			// problem 10
			{ problemNum1: '1', problemDen1: '2', problemNum2: '2', problemDen2: '3', problemNum3: '5', problemDen3: '12', problemNum4: '5', problemDen4: '9', label1: 'apple', label2: 'orange',  label3: 'apple', label4: 'orange',buttonTrueValue: 'T', buttonFalseValue: 'F', productNumLeft: '5', productDenLeft: '18', equalOrNot: '=',  productNumRight: '5', productDenRight: '18', answerFirst: 'True', test1: 'test1', test2: 'test2', template: 'fourth', answerBtn: 'noAnswer' },
        ];

	return dataUtils.build(desc, template, data);
}]);