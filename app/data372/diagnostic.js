/*global angular */

// 372 diagnostic problem set-- answer to last problem opens results summary

angular.module('mathSkills').service('diagnostic', ['dataUtils', function (dataUtils) {
var desc = {
    title: 'Diagnostic',
    path: 'diagnostic',
    children: []
},
template = {

			// placeValue template, two number operation, coefficients reduce to whole
			placeValue: {
                title: 'Diagnostic',
                children: [{
                    title: 'Main Answer',
                    children: [{
						problem: '\\rowgrp{\\str{Identify the place value of the indicated digit: }}{\\placevalue{$numberProb}{$placeNumber}}',
						answer: '\\wb'
									+'{\\rowgrp'+
										'{\\grp{\\solobtn{A}{$buttonValueA}{$buttonLabelA}{marg}}{$buttonLabelA}}'+
										'{\\grp{\\solobtn{B}{$buttonValueB}{$buttonLabelB}{marg}}{$buttonLabelB}}'+
										'{\\grp{\\solobtn{C}{$buttonValueC}{$buttonLabelC}{marg}}{$buttonLabelC}}'+
										'{\\grp{\\solobtn{D}{$buttonValueD}{$buttonLabelD}{marg}}{$buttonLabelD}}'
									+'}{}{diagnostic}',
						// use of wb with "diagnostic moves on, correct or not
						controls: {
							"checkAnswer": true,
							"help": false,
							// stepwiseNextProblem turns off feedback pop-up
							"stepwiseNextProblem": true,
							// "fixBottomRight": "hidden" hides controls
							"fixBottomRight": "hidden"
						}
					}]
				}]
			},
			lessThanGreater: {
                title: 'Comparing Whole Numbers',
                children: [{
                    title: 'Main Answer',
                    children: [{
						problem: '',
						answer: '\\wb'+
									'{\\grp'+
										'{\\str{$firstNumber \xA0}}'+
										'{\\solobtn{>}{$buttonValueFirst}{["$firstNumber","$secondNumber"]}}'+
										'{\\str{&nbsp;}}'+
										'{\\solobtn{<}{$buttonValueSecond}{["$firstNumber","$secondNumber"]}}'+
										'{\\str{\xA0 $secondNumber}}'+
									'}'+
								'{}{diagnostic}',
						controls: {
							"checkAnswer": false,
							"help": false,
							"stepwiseNextProblem": true,
							"fixBottomRight": "hidden"
						},
						provideFeedback:"diagnostic"
                    }]
                }]
           },
		   graphLessThanGreater: {
                title: 'Comparing Whole Numbers',
				children: [{
					title: 'Main Answer',
					children: [{
						problem: '',
						answer: '\\pan{2}{10}'+
									'{\\wb'+
										'{\\rowgrp'+
											'{\\grp'+
												'{\\str{X \xA0}}'+
												'{\\solobtn{>}{$firstButton}{["$firstLabel","$secondLabel"]}}'+
												'{\\str{&nbsp;}}'+
												'{\\solobtn{<}{$secondButton}{["$firstLabel","$secondLabel"]}}'+
												'{\\str{\xA0 Y}}'+
											'}'+
											'{\\html{&nbsp;}}'+
											'{\\grp'+
												'{\\comparewholesgraph{$firstNumber}{$secondNumber}{$startGraph}{$endGraph}}'+
											'}'+
										'}'+
										'{}{diagnostic}'+
									'}',
						controls: {
							"checkAnswer": false,
							"help": false,
							"stepwiseNextProblem": true,
							"fixBottomRight": "hidden"
						}
					}]
                }]
            }
        },
        data = [
			{ // problem 1
			numberProb: '44816',
			placeNumber: '3',
			buttonValueA: 'T',
			buttonLabelA: dataUtils.pre('\\str{&nbsp; thousands}'),
			buttonValueB: 'F',
			buttonLabelB: dataUtils.pre('\\str{&nbsp; hundreds}'),
			buttonValueC: 'F',
			buttonLabelC: dataUtils.pre('\\str{&nbsp; ten-thousands}'),
			buttonValueD: 'F',
			buttonLabelD: dataUtils.pre('\\str{&nbsp; tens}'
								),
			template: 'placeValue'
			}
			,
			{ // problem 2
			numberProb: '3888708', 
			placeNumber: '6',
			buttonValueA: 'F',
			buttonLabelA: dataUtils.pre('\\str{&nbsp; thousands}'),
			buttonValueB: 'F',
			buttonLabelB: dataUtils.pre('\\str{&nbsp; ten-thousands}'),
			buttonValueC: 'T',
			buttonLabelC: dataUtils.pre('\\str{&nbsp; millions}'),
			buttonValueD: 'F',
			buttonLabelD: dataUtils.pre('\\str{&nbsp; billions}'
								),
			template: 'placeValue'
			}
			,
			{ // problem 3
			numberProb: '38059', 
			placeNumber: '2',
			buttonValueA: 'F',
			buttonLabelA: dataUtils.pre('\\str{&nbsp; thousands}'),
			buttonValueB: 'T',
			buttonLabelB: dataUtils.pre('\\str{&nbsp; hundreds}'),
			buttonValueC: 'F',
			buttonLabelC: dataUtils.pre('\\str{&nbsp; ten-thousands}'),
			buttonValueD: 'F',
			buttonLabelD: dataUtils.pre('\\str{&nbsp; tens}'
								),
			template: 'placeValue'
			}
			,
			{ // problem 4
			  firstNumber: '47',
			  secondNumber: '57', 
			  buttonValueFirst: 'F', 
			  buttonValueSecond: 'T', 
			  statement: 'LESS THAN', 
			  template: 'lessThanGreater' 
			}
			,
			{  // problem 5
				firstButton: 'F',
				firstLabel: 'X',
				secondButton: 'T',
				secondLabel: 'Y',
				firstNumber: '83',
				secondNumber: '84',
				startGraph: '72', 
				endGraph: '88',
				statement: 'LESS THAN',
				template: 'graphLessThanGreater'
			}
			,
			{ // problem 6
			  firstNumber: '53',
			  secondNumber: '50', 
			  buttonValueFirst: 'T', 
			  buttonValueSecond: 'F', 
			  statement: 'LESS THAN', 
			  template: 'lessThanGreater' 
			}
			
        ];

	return dataUtils.build(desc, template, data);
}]);

