/*global angular */

// 372 diagnostic problem set-- answer to last problem opens results summary

angular.module('mathSkills').service('diagnostic', ['dataUtils', function (dataUtils) {
var desc = {
    title: 'Diagnostic',
    path: 'diagnostic',
    children: []
},
template = {
			
			// problem statement and five buttons, no problem display
			questionNoDisplay: {
                title: 'Diagnostic',
                children: [{
                    title: 'Main Answer',
                    children: [{
						problem: '\\rowgrp{$problemStatement}',
						answer: '\\wb'
									+'{\\rowgrp'+
										'{\\grp{\\solobtn{A}{$buttonValueA}{$buttonLabelA}{marg}}{$buttonLabelA}}'+
										'{\\grp{\\solobtn{B}{$buttonValueB}{$buttonLabelB}{marg}}{$buttonLabelB}}'+
										'{\\grp{\\solobtn{C}{$buttonValueC}{$buttonLabelC}{marg}}{$buttonLabelC}}'+
										'{\\grp{\\solobtn{D}{$buttonValueD}{$buttonLabelD}{marg}}{$buttonLabelD}}'+
										'{\\grp{\\solobtn{E}{$buttonValueE}{$buttonLabelE}{marg}}{$buttonLabelE}}'
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
			// problem statement and two buttons "true" and "false", no problem display
			questionTrueFalse: {
                title: 'Diagnostic',
                children: [{
                    title: 'Main Answer',
                    children: [{
						problem: '\\rowgrp{$problemStatement}',
						answer: '\\wb'
									+'{\\rowgrp'+
										'{\\grp{\\solobtn{A}{$buttonValueA}{$buttonLabelA}{marg}}{$buttonLabelA}}'+
										'{\\grp{\\solobtn{B}{$buttonValueB}{$buttonLabelB}{marg}}{$buttonLabelB}}'
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
						},
						provideFeedback:"diagnostic"
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
						}
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
			problemStatement: dataUtils.pre('\\str{Find the sum of:<br><br>28 and 116}'),
			buttonValueA: 'F',
			buttonLabelA: dataUtils.pre('\\str{&nbsp; 3248}'),
			buttonValueB: 'F',
			buttonLabelB: dataUtils.pre('\\str{&nbsp; 88}'),
			buttonValueC: 'F',
			buttonLabelC: dataUtils.pre('\\str{&nbsp; 4}'),
			buttonValueD: 'T',
			buttonLabelD: dataUtils.pre('\\str{&nbsp; 144}'),
			buttonValueE: 'F',
			buttonLabelE: dataUtils.pre('\\str{&nbsp; None of the above}'),
			template: 'questionNoDisplay'
			}
			,
			{ // problem 2
			problemStatement: dataUtils.pre('\\str{Find the difference of:<br><br>92 and 37}'),
			buttonValueA: 'F',
			buttonLabelA: dataUtils.pre('\\str{&nbsp; 129}'),
			buttonValueB: 'T',
			buttonLabelB: dataUtils.pre('\\str{&nbsp; 55}'),
			buttonValueC: 'F',
			buttonLabelC: dataUtils.pre('\\str{&nbsp; 3404}'),
			buttonValueD: 'F',
			buttonLabelD: dataUtils.pre('\\str{&nbsp; 2}'),
			buttonValueE: 'F',
			buttonLabelE: dataUtils.pre('\\str{&nbsp; None of the above}'),
			template: 'questionNoDisplay'
			}
			,
			{ // problem 3
			problemStatement: dataUtils.pre('\\str{Find the product of:<br><br>37 and 24}'),		
			buttonValueA: 'T',
			buttonLabelA: dataUtils.pre('\\str{&nbsp; 888}'),
			buttonValueB: 'F',
			buttonLabelB: dataUtils.pre('\\str{&nbsp; 61}'),
			buttonValueC: 'F',
			buttonLabelC: dataUtils.pre('\\str{&nbsp; 13}'),
			buttonValueD: 'F',
			buttonLabelD: dataUtils.pre('\\str{&nbsp; 1}'),
			buttonValueE: 'F',
			buttonLabelE: dataUtils.pre('\\str{&nbsp; None of the above}'),
			template: 'questionNoDisplay'
			}
			,
			{ // problem 4
			problemStatement: dataUtils.pre('\\str{Find the quotient of:<br><br>50 and 10}'),
			buttonValueA: 'F',
			buttonLabelA: dataUtils.pre('\\str{&nbsp; 40}'),
			buttonValueB: 'F',
			buttonLabelB: dataUtils.pre('\\str{&nbsp; 60}'),
			buttonValueC: 'T',
			buttonLabelC: dataUtils.pre('\\str{&nbsp; 5}'),
			buttonValueD: 'F',
			buttonLabelD: dataUtils.pre('\\str{&nbsp; 500}'),
			buttonValueE: 'F',
			buttonLabelE: dataUtils.pre('\\str{&nbsp; None of the above}'),
			template: 'questionNoDisplay'
			}
			,
			{ // problem 5
			problemStatement: dataUtils.pre('\\str{Identify the place value of the 7 in the number:<br><br>171,640}'),
			buttonValueA: 'F',
			buttonLabelA: dataUtils.pre('\\str{&nbsp; hundreds}'),
			buttonValueB: 'F',
			buttonLabelB: dataUtils.pre('\\str{&nbsp; thousands}'),
			buttonValueC: 'T',
			buttonLabelC: dataUtils.pre('\\str{&nbsp; ten-thousands}'),
			buttonValueD: 'F',
			buttonLabelD: dataUtils.pre('\\str{&nbsp; hundred-thousands}'),
			buttonValueE: 'F',
			buttonLabelE: dataUtils.pre('\\str{&nbsp; millions}'),
			template: 'questionNoDisplay'
			}
			,
			{ // problem 6
			problemStatement: dataUtils.pre('\\str{Identify the place value of the 4 in the number:<br><br>172.46}'),
			buttonValueA: 'F',
			buttonLabelA: dataUtils.pre('\\str{&nbsp; ones}'),
			buttonValueB: 'F',
			buttonLabelB: dataUtils.pre('\\str{&nbsp; tens}'),
			buttonValueC: 'F',
			buttonLabelC: dataUtils.pre('\\str{&nbsp; thousandths}'),
			buttonValueD: 'F',
			buttonLabelD: dataUtils.pre('\\str{&nbsp; hundredths}'),
			buttonValueE: 'T',
			buttonLabelE: dataUtils.pre('\\str{&nbsp; tenths}'),
			template: 'questionNoDisplay'
			}
			,
			{ // problem 7
			problemStatement: dataUtils.pre('\\str{Identify the place value of the 5 in the number:<br><br>986.2157}'),
			buttonValueA: 'T',
			buttonLabelA: dataUtils.pre('\\str{&nbsp; thousandths}'),
			buttonValueB: 'F',
			buttonLabelB: dataUtils.pre('\\str{&nbsp; thousands}'),
			buttonValueC: 'F',
			buttonLabelC: dataUtils.pre('\\str{&nbsp; hundredths}'),
			buttonValueD: 'F',
			buttonLabelD: dataUtils.pre('\\str{&nbsp; hundreds}'),
			buttonValueE: 'F',
			buttonLabelE: dataUtils.pre('\\str{&nbsp; tens}'),
			template: 'questionNoDisplay'
			}
			,
			{ // problem 8
			problemStatement: dataUtils.pre('\\html{True or False:<br><br>18 &nbsp;<span class=bigger>></span>&nbsp; 0.19}'),
			buttonValueA: 'T',
			buttonLabelA: dataUtils.pre('\\str{&nbsp; True}'),
			buttonValueB: 'F',
			buttonLabelB: dataUtils.pre('\\str{&nbsp; False}'),
			template: 'questionTrueFalse'
			}
			,
			{ // problem 9
			problemStatement: dataUtils.pre('\\html{True or False:<br><br>169<span class=decimalNoPadding>.</span>45 &nbsp;<span class=bigger>></span>&nbsp; 169<span class=decimalNoPadding>.</span>428}'),
			buttonValueA: 'T',
			buttonLabelA: dataUtils.pre('\\str{&nbsp; True}'),
			buttonValueB: 'F',
			buttonLabelB: dataUtils.pre('\\str{&nbsp; False}'),
			template: 'questionTrueFalse'
			}
			,
			{ // problem 10
			problemStatement: dataUtils.pre('\\html{True or False:<br><br>0<span class=decimalNoPadding>.</span>07 &nbsp;<span class=bigger><</span>&nbsp; 0<span class=decimalNoPadding>.</span>7 &nbsp;<span class=bigger><</span>&nbsp; 1}'),
			buttonValueA: 'T',
			buttonLabelA: dataUtils.pre('\\str{&nbsp; True}'),
			buttonValueB: 'F',
			buttonLabelB: dataUtils.pre('\\str{&nbsp; False}'),
			template: 'questionTrueFalse'
			}
			,
			{ // problem 11
			problemStatement: dataUtils.pre('\\str{Arrange these four values in order from smallest to largest:<br><br>8.4,  8.32,  8,  and 8.321}'),
			buttonValueA: 'F',
			buttonLabelA: dataUtils.pre('\\str{&nbsp; 8,  8.321,  8.32, and 8.4}'),
			buttonValueB: 'F',
			buttonLabelB: dataUtils.pre('\\str{&nbsp; 8.32,  8.4,  8, and 8.321}'),
			buttonValueC: 'F',
			buttonLabelC: dataUtils.pre('\\str{&nbsp; 8.4,  8.321,  8.32, and 8}'),
			buttonValueD: 'F',
			buttonLabelD: dataUtils.pre('\\str{&nbsp; 8,  8.4,  8.321, and 8.32}'),
			buttonValueE: 'T',
			buttonLabelE: dataUtils.pre('\\str{&nbsp; 8,  8.32,  8.321, and 8.4}'),
			template: 'questionNoDisplay'
			}
			,
			{ // problem 12
			problemStatement: dataUtils.pre('\\str{Arrange these four values in order from smallest to largest:<br><br>0.125,  0.1,  0.097, and 0.132}'),
			buttonValueA: 'T',
			buttonLabelA: dataUtils.pre('\\str{&nbsp; 0.097,  0.1,  0.125, and 0.132}'),
			buttonValueB: 'F',
			buttonLabelB: dataUtils.pre('\\str{&nbsp; 0.1,  0.097,  0.132, and 0.125}'),
			buttonValueC: 'F',
			buttonLabelC: dataUtils.pre('\\str{&nbsp; 0.1,  0.097,  0.125, and 0.132}'),
			buttonValueD: 'F',
			buttonLabelD: dataUtils.pre('\\str{&nbsp; 0.1,  0.125,  0.132, and 0.097}'),
			buttonValueE: 'F',
			buttonLabelE: dataUtils.pre('\\str{&nbsp; 0.097,  0.125,  0.1, and 0.132}'),
			template: 'questionNoDisplay'
			}
			,
			{ // problem 13
			problemStatement: dataUtils.pre('\\str{Solve:<br><br>84 - 26.31}'),
			buttonValueA: 'F',
			buttonLabelA: dataUtils.pre('\\str{&nbsp; 58.31}'),
			buttonValueB: 'F',
			buttonLabelB: dataUtils.pre('\\str{&nbsp; 57.31}'),
			buttonValueC: 'T',
			buttonLabelC: dataUtils.pre('\\str{&nbsp; 57.69}'),
			buttonValueD: 'F',
			buttonLabelD: dataUtils.pre('\\str{&nbsp; 58.69}'),
			buttonValueE: 'F',
			buttonLabelE: dataUtils.pre('\\str{&nbsp; 67.69}'),
			template: 'questionNoDisplay'
			}
			,
			{ // problem 14
			problemStatement: dataUtils.pre('\\str{Solve:<br><br>918 - 47}'),
			buttonValueA: 'F',
			buttonLabelA: dataUtils.pre('\\str{&nbsp; 965}'),
			buttonValueB: 'T',
			buttonLabelB: dataUtils.pre('\\str{&nbsp; 871}'),
			buttonValueC: 'F',
			buttonLabelC: dataUtils.pre('\\str{&nbsp; 851}'),
			buttonValueD: 'F',
			buttonLabelD: dataUtils.pre('\\str{&nbsp; 817}'),
			buttonValueE: 'F',
			buttonLabelE: dataUtils.pre('\\str{&nbsp; 971}'),
			template: 'questionNoDisplay'
			}
			,
			{ // problem 15
			problemStatement: dataUtils.pre('\\str{Solve:<br><br>86  +  4019}'),
			buttonValueA: 'F',
			buttonLabelA: dataUtils.pre('\\str{&nbsp; 12,619}'),
			buttonValueB: 'T',
			buttonLabelB: dataUtils.pre('\\str{&nbsp; 4,105}'),
			buttonValueC: 'F',
			buttonLabelC: dataUtils.pre('\\str{&nbsp; 4,877}'),
			buttonValueD: 'F',
			buttonLabelD: dataUtils.pre('\\str{&nbsp; 4,005}'),
			buttonValueE: 'F',
			buttonLabelE: dataUtils.pre('\\str{&nbsp; 4,478}'),
			template: 'questionNoDisplay'
			}
			,
			{ // problem 16
			problemStatement: dataUtils.pre('\\str{Solve:<br><br>17.094  +  1.37}'),
			buttonValueA: 'F',
			buttonLabelA: dataUtils.pre('\\str{&nbsp; 2.0794}'),
			buttonValueB: 'F',
			buttonLabelB: dataUtils.pre('\\str{&nbsp; 0.17231}'),
			buttonValueC: 'F',
			buttonLabelC: dataUtils.pre('\\str{&nbsp; 29.464}'),
			buttonValueD: 'T',
			buttonLabelD: dataUtils.pre('\\str{&nbsp; 18.464}'),
			buttonValueE: 'F',
			buttonLabelE: dataUtils.pre('\\str{&nbsp; 15.724}'),
			template: 'questionNoDisplay'
			}
			,
			{ // problem 17
			problemStatement: dataUtils.pre('\\str{Solve:<br><br>1.8  +  4.271  +  11  +  0.56}'),
			buttonValueA: 'F',
			buttonLabelA: dataUtils.pre('\\str{&nbsp; 16.511}'),
			buttonValueB: 'T',
			buttonLabelB: dataUtils.pre('\\str{&nbsp; 17.631}'),
			buttonValueC: 'F',
			buttonLabelC: dataUtils.pre('\\str{&nbsp; 82.271}'),
			buttonValueD: 'F',
			buttonLabelD: dataUtils.pre('\\str{&nbsp; 43.56}'),
			buttonValueE: 'F',
			buttonLabelE: dataUtils.pre('\\str{&nbsp; 5.489}'),
			template: 'questionNoDisplay'
			}
			,
			{ // problem 18
			problemStatement: dataUtils.pre('\\str{Solve:<br><br>45 * 872}'),
			buttonValueA: 'F',
			buttonLabelA: dataUtils.pre('\\str{&nbsp; 918}'),
			buttonValueB: 'F',
			buttonLabelB: dataUtils.pre('\\str{&nbsp; 19}'),
			buttonValueC: 'T',
			buttonLabelC: dataUtils.pre('\\str{&nbsp; 39,240}'),
			buttonValueD: 'F',
			buttonLabelD: dataUtils.pre('\\str{&nbsp; 826}'),
			buttonValueE: 'F',
			buttonLabelE: dataUtils.pre('\\str{&nbsp; None of the above}'),
			template: 'questionNoDisplay'
			}
			,
			{ // problem 19
			problemStatement: dataUtils.pre('\\str{Solve:<br><br>(5.6) (2.5)}'),
			buttonValueA: 'F',
			buttonLabelA: dataUtils.pre('\\str{&nbsp; 1.40}'),
			buttonValueB: 'F',
			buttonLabelB: dataUtils.pre('\\str{&nbsp; 140.0}'),
			buttonValueC: 'F',
			buttonLabelC: dataUtils.pre('\\str{&nbsp; 1400.0}'),
			buttonValueD: 'T',
			buttonLabelD: dataUtils.pre('\\str{&nbsp; 14.0}'),
			buttonValueE: 'F',
			buttonLabelE: dataUtils.pre('\\str{&nbsp; 0.014}'),
			template: 'questionNoDisplay'
			}
			,
			{ // problem 20
			problemStatement: dataUtils.pre('\\str{Solve:<br><br>(0.68) (0.003)}'),
			buttonValueA: 'F',
			buttonLabelA: dataUtils.pre('\\str{&nbsp; 204.04}'),
			buttonValueB: 'F',
			buttonLabelB: dataUtils.pre('\\str{&nbsp; 20.4}'),
			buttonValueC: 'F',
			buttonLabelC: dataUtils.pre('\\str{&nbsp; 20.04}'),
			buttonValueD: 'F',
			buttonLabelD: dataUtils.pre('\\str{&nbsp; 0.204}'),
			buttonValueE: 'T',
			buttonLabelE: dataUtils.pre('\\str{&nbsp; 0.00204}'),
			template: 'questionNoDisplay'
			}
			,
			{ // problem 21
			problemStatement: dataUtils.pre('\\str{How many inches are in 3.5 feet<br>(12 inches = 1 foot)?}'),
			buttonValueA: 'F',
			buttonLabelA: dataUtils.pre('\\str{&nbsp; 420 inches}'),
			buttonValueB: 'F',
			buttonLabelB: dataUtils.pre('\\str{&nbsp; 0.42 inches}'),
			buttonValueC: 'F',
			buttonLabelC: dataUtils.pre('\\str{&nbsp; 4.2 inches}'),
			buttonValueD: 'T',
			buttonLabelD: dataUtils.pre('\\str{&nbsp; 42 inches}'),
			buttonValueE: 'F',
			buttonLabelE: dataUtils.pre('\\str{&nbsp; 4200 inches}'),
			template: 'questionNoDisplay'
			}
			,
			{ // problem 22
			problemStatement: dataUtils.pre('\\str{How many seconds are in 2 hours<br>(60 seconds = 1 minute and<br>60 minutes = 1 hour)?}'),
			buttonValueA: 'T',
			buttonLabelA: dataUtils.pre('\\str{&nbsp; 7,200 seconds}'),
			buttonValueB: 'F',
			buttonLabelB: dataUtils.pre('\\str{&nbsp; 240 seconds}'),
			buttonValueC: 'F',
			buttonLabelC: dataUtils.pre('\\str{&nbsp; 3,600 seconds}'),
			buttonValueD: 'F',
			buttonLabelD: dataUtils.pre('\\str{&nbsp; 720 seconds}'),
			buttonValueE: 'F',
			buttonLabelE: dataUtils.pre('\\str{&nbsp; 72,000 seconds}'),
			template: 'questionNoDisplay'
			}
			,
			{ // problem 23
			problemStatement: dataUtils.pre('\\str{Solve:<br><br>0.25 of 20}'),
			buttonValueA: 'F',
			buttonLabelA: dataUtils.pre('\\str{&nbsp; 4}'),
			buttonValueB: 'F',
			buttonLabelB: dataUtils.pre('\\str{&nbsp; 80}'),
			buttonValueC: 'T',
			buttonLabelC: dataUtils.pre('\\str{&nbsp; 5}'),
			buttonValueD: 'F',
			buttonLabelD: dataUtils.pre('\\str{&nbsp; 0.0125}'),
			buttonValueE: 'F',
			buttonLabelE: dataUtils.pre('\\str{&nbsp; None of the above}'),
			template: 'questionNoDisplay'
			}
			,
			{ // problem 24
			problemStatement: dataUtils.pre('\\str{Solve:<br><br>1911 / 7 }'),
			buttonValueA: 'F',
			buttonLabelA: dataUtils.pre('\\str{&nbsp; 1904}'),
			buttonValueB: 'T',
			buttonLabelB: dataUtils.pre('\\str{&nbsp; 273}'),
			buttonValueC: 'F',
			buttonLabelC: dataUtils.pre('\\str{&nbsp; 1918}'),
			buttonValueD: 'F',
			buttonLabelD: dataUtils.pre('\\str{&nbsp; 13,377}'),
			buttonValueE: 'F',
			buttonLabelE: dataUtils.pre('\\str{&nbsp; None of the above}'),
			template: 'questionNoDisplay'
			}
			,
			{ // problem 25
			problemStatement: dataUtils.pre('\\html{Solve:<br><br><span class=divisorstyleSmall>45</span><span class=dividendstyleSmall>9270</span>}'),
			buttonValueA: 'F',
			buttonLabelA: dataUtils.pre('\\str{&nbsp; 26}'),
			buttonValueB: 'F',
			buttonLabelB: dataUtils.pre('\\str{&nbsp; 260}'),
			buttonValueC: 'F',
			buttonLabelC: dataUtils.pre('\\str{&nbsp; 2.6}'),
			buttonValueD: 'F',
			buttonLabelD: dataUtils.pre('\\str{&nbsp; 2006}'),
			buttonValueE: 'T',
			buttonLabelE: dataUtils.pre('\\str{&nbsp; 206}'),
			template: 'questionNoDisplay'
			}
			,
			{ // problem 26
			problemStatement: dataUtils.pre('\\html{Solve:<br><br>2071 <span class=bigger>&divide;</span> 24<br><br>Give the result with a remainder, <strong>not</strong> as a decimal.}'),
			buttonValueA: 'F',
			buttonLabelA: dataUtils.pre('\\str{&nbsp; 86  R.29}'),
			buttonValueB: 'T',
			buttonLabelB: dataUtils.pre('\\str{&nbsp; 86  R.7}'),
			buttonValueC: 'F',
			buttonLabelC: dataUtils.pre('\\str{&nbsp; 85 R.31}'),
			buttonValueD: 'F',
			buttonLabelD: dataUtils.pre('\\str{&nbsp; 86 R.2}'),
			buttonValueE: 'F',
			buttonLabelE: dataUtils.pre('\\str{&nbsp; None of the above}'),
			template: 'questionNoDisplay'
			}
			,
			{ // problem 5
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
			/*,
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
			}*/
			
        ];

	return dataUtils.build(desc, template, data);
}]);

