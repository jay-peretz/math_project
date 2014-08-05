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
			questionTwoLineButtons: {
                title: 'Diagnostic',
                children: [{
                    title: 'Main Answer',
                    children: [{
						problem: '\\rowgrp{$problemStatement}',
						answer: '\\wb'
									+'{\\css'
										+'{\\rowgrp'+
											'{\\grp{\\solobtn{A}{$buttonValueA}{$buttonLabelA}{marg}}{$buttonLabelA}}'+
											'{\\grp{\\solobtn{B}{$buttonValueB}{$buttonLabelB}{marg}}{$buttonLabelB}}'+
											'{\\grp{\\solobtn{C}{$buttonValueC}{$buttonLabelC}{marg}}{$buttonLabelC}}'+
											'{\\grp{\\solobtn{D}{$buttonValueD}{$buttonLabelD}{marg}}{$buttonLabelD}}'+
											'{\\grp{\\solobtn{E}{$buttonValueE}{$buttonLabelE}{marg}}{$buttonLabelE}}'
										+'}'
										+'{tdButtonHeight}'
									+'}'
								+'{}{diagnostic}',
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
			{ // problem 27
			problemStatement: dataUtils.pre('\\str{Solve:<br><br>22,400 / 80}'),
			buttonValueA: 'T',
			buttonLabelA: dataUtils.pre('\\str{&nbsp; 280}'),
			buttonValueB: 'F',
			buttonLabelB: dataUtils.pre('\\str{&nbsp; 279 R.80}'),
			buttonValueC: 'F',
			buttonLabelC: dataUtils.pre('\\str{&nbsp; 28}'),
			buttonValueD: 'F',
			buttonLabelD: dataUtils.pre('\\str{&nbsp; 208}'),
			buttonValueE: 'F',
			buttonLabelE: dataUtils.pre('\\str{&nbsp; None of the above}'),
			template: 'questionNoDisplay'
			}
			,
			{ // problem 28
			problemStatement: dataUtils.pre('\\rowgrp'
											+'{\\str{Solve:}}'
											+'{\\html{&nbsp;}}'
											+'{\\frac{\\fracstr{124}}{\\fracstr{4}}}'
											+'{\\html{&nbsp;}}'
											+'{\\str{Give the answer as a decimal.}}'
											),
			buttonValueA: 'F',
			buttonLabelA: dataUtils.pre('\\str{&nbsp; 3.125}'),
			buttonValueB: 'F',
			buttonLabelB: dataUtils.pre('\\str{&nbsp; 0.3125}'),
			buttonValueC: 'F',
			buttonLabelC: dataUtils.pre('\\str{&nbsp; 312.5}'),
			buttonValueD: 'F',
			buttonLabelD: dataUtils.pre('\\str{&nbsp; 31.5}'),
			buttonValueE: 'T',
			buttonLabelE: dataUtils.pre('\\str{&nbsp; None of the above}'),
			template: 'questionNoDisplay'
			}
			,
			{ // problem 29
			problemStatement: dataUtils.pre('\\rowgrp'
											+'{\\str{Solve:}}'
											+'{\\html{&nbsp;}}'
											+'{\\frac{\\fracstr{8}}{\\fracstr{250}}}'
											+'{\\html{&nbsp;}}'
											+'{\\str{Give the answer as a decimal.}}'
											),
			buttonValueA: 'F',
			buttonLabelA: dataUtils.pre('\\str{&nbsp; 0.320}'),
			buttonValueB: 'F',
			buttonLabelB: dataUtils.pre('\\str{&nbsp; 0.0032}'),
			buttonValueC: 'T',
			buttonLabelC: dataUtils.pre('\\str{&nbsp; 0.032}'),
			buttonValueD: 'F',
			buttonLabelD: dataUtils.pre('\\str{&nbsp; 3.2}'),
			buttonValueE: 'F',
			buttonLabelE: dataUtils.pre('\\str{&nbsp; None of the above}'),
			template: 'questionNoDisplay'
			}
			,
			{ // problem 30
			problemStatement: dataUtils.pre('\\html{Solve:<br><br><span class=divisorstyleSmall>6</span><span class=dividendstyleSmall>0.048 </span>}'),
			buttonValueA: 'F',
			buttonLabelA: dataUtils.pre('\\str{&nbsp; 0.8}'),
			buttonValueB: 'F',
			buttonLabelB: dataUtils.pre('\\str{&nbsp; 0.08}'),
			buttonValueC: 'T',
			buttonLabelC: dataUtils.pre('\\str{&nbsp; 0.008}'),
			buttonValueD: 'F',
			buttonLabelD: dataUtils.pre('\\str{&nbsp; 0.0008}'),
			buttonValueE: 'F',
			buttonLabelE: dataUtils.pre('\\str{&nbsp; None of the above}'),
			template: 'questionNoDisplay'
			}
			,
			{ // problem 31
			problemStatement: dataUtils.pre('\\str{Solve:<br><br>56 / 0.7}'),
			buttonValueA: 'F',
			buttonLabelA: dataUtils.pre('\\str{&nbsp; 800}'),
			buttonValueB: 'F',
			buttonLabelB: dataUtils.pre('\\str{&nbsp; 8000}'),
			buttonValueC: 'T',
			buttonLabelC: dataUtils.pre('\\str{&nbsp; 80}'),
			buttonValueD: 'F',
			buttonLabelD: dataUtils.pre('\\str{&nbsp; 8}'),
			buttonValueE: 'F',
			buttonLabelE: dataUtils.pre('\\str{&nbsp; None of the above}'),
			template: 'questionNoDisplay'
			}
			,
			{ // problem 32
			problemStatement: dataUtils.pre('\\str{Solve:<br><br>2114 / 3.5}'),
			buttonValueA: 'F',
			buttonLabelA: dataUtils.pre('\\str{&nbsp; 0.604}'),
			buttonValueB: 'F',
			buttonLabelB: dataUtils.pre('\\str{&nbsp; 6.04}'),
			buttonValueC: 'F',
			buttonLabelC: dataUtils.pre('\\str{&nbsp; 60.4}'),
			buttonValueD: 'T',
			buttonLabelD: dataUtils.pre('\\str{&nbsp; 604}'),
			buttonValueE: 'F',
			buttonLabelE: dataUtils.pre('\\str{&nbsp; None of the above}'),
			template: 'questionNoDisplay'
			}
			,
			{ // problem 33
			problemStatement: dataUtils.pre('\\str{You paid $2.89 for a package of 17 cookies. What was the price per cookie?}'),
			buttonValueA: 'F',
			buttonLabelA: dataUtils.pre('\\str{&nbsp; 0.017&cent;}'),
			buttonValueB: 'F',
			buttonLabelB: dataUtils.pre('\\str{&nbsp; 1.7&cent;}'),
			buttonValueC: 'F',
			buttonLabelC: dataUtils.pre('\\str{&nbsp; $1.70}'),
			buttonValueD: 'F',
			buttonLabelD: dataUtils.pre('\\str{&nbsp; $0.16}'),
			buttonValueE: 'T',
			buttonLabelE: dataUtils.pre('\\str{&nbsp; $0.17}'),
			template: 'questionNoDisplay'
			}
			,
			{ // problem 34
			problemStatement: dataUtils.pre('\\str{Round 3579 to the tens place.}'),
			buttonValueA: 'T',
			buttonLabelA: dataUtils.pre('\\str{&nbsp; 3,580}'),
			buttonValueB: 'F',
			buttonLabelB: dataUtils.pre('\\str{&nbsp; 3,750}'),
			buttonValueC: 'F',
			buttonLabelC: dataUtils.pre('\\str{&nbsp; 3,680}'),
			buttonValueD: 'F',
			buttonLabelD: dataUtils.pre('\\str{&nbsp; 3,670}'),
			buttonValueE: 'F',
			buttonLabelE: dataUtils.pre('\\str{&nbsp; 4,000}'),
			template: 'questionNoDisplay'
			}
			,
			{ // problem 35
			problemStatement: dataUtils.pre('\\str{Round 849 to the thousands place.}'),
			buttonValueA: 'F',
			buttonLabelA: dataUtils.pre('\\str{&nbsp; 1,100}'),
			buttonValueB: 'F',
			buttonLabelB: dataUtils.pre('\\str{&nbsp; 1,800}'),
			buttonValueC: 'F',
			buttonLabelC: dataUtils.pre('\\str{&nbsp; 1,049}'),
			buttonValueD: 'T',
			buttonLabelD: dataUtils.pre('\\str{&nbsp; 1,000}'),
			buttonValueE: 'F',
			buttonLabelE: dataUtils.pre('\\str{&nbsp; 900}'),
			template: 'questionNoDisplay'
			}
			,
			{ // problem 36
			problemStatement: dataUtils.pre('\\str{Round 75.84 to the tenths place.}'),
			buttonValueA: 'F',
			buttonLabelA: dataUtils.pre('\\str{&nbsp; 75.80}'),
			buttonValueB: 'F',
			buttonLabelB: dataUtils.pre('\\str{&nbsp; 75.0}'),
			buttonValueC: 'T',
			buttonLabelC: dataUtils.pre('\\str{&nbsp; 75.8}'),
			buttonValueD: 'F',
			buttonLabelD: dataUtils.pre('\\str{&nbsp; 76.8}'),
			buttonValueE: 'F',
			buttonLabelE: dataUtils.pre('\\str{&nbsp; None of the above}'),
			template: 'questionNoDisplay'
			}
			,
			{ // problem 37
			problemStatement: dataUtils.pre('\\str{Round 409.623 to the nearest whole value.}'),
			buttonValueA: 'F',
			buttonLabelA: dataUtils.pre('\\str{&nbsp; 410.000}'),
			buttonValueB: 'F',
			buttonLabelB: dataUtils.pre('\\str{&nbsp; 400}'),
			buttonValueC: 'F',
			buttonLabelC: dataUtils.pre('\\str{&nbsp; 7409}'),
			buttonValueD: 'T',
			buttonLabelD: dataUtils.pre('\\str{&nbsp; 410}'),
			buttonValueE: 'F',
			buttonLabelE: dataUtils.pre('\\str{&nbsp; None of the above}'),
			template: 'questionNoDisplay'
			}
			,
			{ // problem 38
			problemStatement: dataUtils.pre('\\rowgrp'
											+'{\\html{Round 6<span class=decimalNoPadding>.</span><span class=continuedDecimal>3</span> to the:}}'
											+'{\\html{&nbsp;}}'
											+'{\\str{(a) tenths place}}'
											+'{\\str{(b) hundredths place}}'
											),
			buttonValueA: 'T',
			buttonLabelA: dataUtils.pre('\\rowgrp{\\str{&nbsp; (a) 6.3}}{\\str{&nbsp; (b) 6.33}}'),
			buttonValueB: 'F',
			buttonLabelB: dataUtils.pre('\\rowgrp{\\str{&nbsp; (a) 6.30}}{\\str{&nbsp; (b) 6.330}}'),
			buttonValueC: 'F',
			buttonLabelC: dataUtils.pre('\\rowgrp{\\str{&nbsp; (a) 6.0}}{\\str{&nbsp; (b) 6.30}}'),
			buttonValueD: 'F',
			buttonLabelD: dataUtils.pre('\\rowgrp{\\str{&nbsp; (a) 6.33}}{\\str{&nbsp; (b) 6.333}}'),
			buttonValueE: 'F',
			buttonLabelE: dataUtils.pre('\\str{&nbsp; None of the above}'),
			template: 'questionTwoLineButtons'
			}
			,
			{ // problem 39
			problemStatement: dataUtils.pre('\\rowgrp'
											+'{\\html{Round 8<span class=decimalNoPadding>.</span><span class=continuedDecimal>45</span> to the:}}'
											+'{\\html{&nbsp;}}'
											+'{\\str{(a) hundredths place}}'
											+'{\\str{(b) thousandths place}}'
											),
			buttonValueA: 'F',
			buttonLabelA: dataUtils.pre('\\rowgrp{\\str{&nbsp; (a) 8.44}}{\\str{&nbsp; (b) 6.454}}'),
			buttonValueB: 'T',
			buttonLabelB: dataUtils.pre('\\rowgrp{\\str{&nbsp; (a) 8.45}}{\\str{&nbsp; (b) 8.455}}'),
			buttonValueC: 'F',
			buttonLabelC: dataUtils.pre('\\rowgrp{\\str{&nbsp; (a) 8.40}}{\\str{&nbsp; (b) 8.450}}'),
			buttonValueD: 'F',
			buttonLabelD: dataUtils.pre('\\rowgrp{\\str{&nbsp; (a) 8.450}}{\\str{&nbsp; (b) 8.4550}}'),
			buttonValueE: 'F',
			buttonLabelE: dataUtils.pre('\\str{&nbsp; None of the above}'),
			template: 'questionTwoLineButtons'
			}
			,
			{ // problem 40
			problemStatement: dataUtils.pre('\\rowgrp'
											+'{\\html{Cereal sells for $0.9265 per ounce. How much money is this per ounce, rounded to the: }}'
											+'{\\html{&nbsp;}}'
											+'{\\str{(a) nearest cent}}'
											+'{\\str{(b) nearest tenth of a cent}}'
											),
			buttonValueA: 'F',
			buttonLabelA: dataUtils.pre('\\rowgrp{\\str{&nbsp; (a) 0.92&cent;}}{\\str{&nbsp; (b) 0.926&cent;}}'),
			buttonValueB: 'F',
			buttonLabelB: dataUtils.pre('\\rowgrp{\\str{&nbsp; (a) $0.92}}{\\str{&nbsp; (b) $0.926}}'),
			buttonValueC: 'F',
			buttonLabelC: dataUtils.pre('\\rowgrp{\\str{&nbsp; (a) 0.93&cent;}}{\\str{&nbsp; (b) 0.927&cent;}}'),
			buttonValueD: 'T',
			buttonLabelD: dataUtils.pre('\\rowgrp{\\str{&nbsp; (a) $0.93}}{\\str{&nbsp; (b) $0.927}}'),
			buttonValueE: 'F',
			buttonLabelE: dataUtils.pre('\\str{&nbsp; None of the above}'),
			template: 'questionTwoLineButtons'
			}
        ];
		/*,shuffle = [
				{ problems: [1], total: 1},
				{ problems: [2], total: 1},
				{ problems: [3,4], total: 1},
				{ problems: [5,6], total: 1},
				{ problems: [7,8], total: 1},
				{ problems: [9,10], total: 1},
				{ problems: [11,12], total: 1}
		];
		
    	return dataUtils.build(desc, template, data, shuffle);*/
		
		return dataUtils.build(desc, template, data);
}]);




