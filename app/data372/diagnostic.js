/*global angular */

angular.module('mathSkills').service('diagnostic', ['dataUtils', function (dataUtils) {
var desc = {
    title: 'Diagnostic',
    path: 'diagnostic',
    children: []
},
template = {

			// simple template, two number operation, coefficients reduce to whole
			simple: {
                title: 'Diagnostic',
                children: [{
                    title: 'Main Answer',
                    children: [{
						problem: '\\rowgrp{\\str{Identify the place value of the indicated digit: }}{\\placevalue{$numberProb}{$placeNumber}}',
						answer: '\\wb'
									+'{\\rowgrp'+
										'{\\grp{\\solobtn{A}{$buttonValueA}{marg}}{$buttonLabelA}}'+
										'{\\grp{\\solobtn{B}{$buttonValueB}{marg}}{$buttonLabelB}}'+
										'{\\grp{\\solobtn{C}{$buttonValueC}{marg}}{$buttonLabelC}}'+
										'{\\grp{\\solobtn{D}{$buttonValueD}{marg}}{$buttonLabelD}}'
									+'}{}{diagnostic}',
						controls: {
							"checkAnswer": true,
							"help": false,
							// stepwiseNextProblem turns off feedback pop-up
							"stepwiseNextProblem": true,
							"fixBottomRight": "hidden"
						},
						provideFeedback:"diagnostic"
					}]
				}]
			}
        },
        data = [
			{ // problem 1
			numberProb: '44816',
			placeNumber: '3',
			prob: dataUtils.pre('\\rowgrp{\\str{Identify the place value of the indicated digit: }}{\\placevalue{$$numberProb}{$$placeNumber}}'
								),
			buttonValueA: 'T',
			buttonLabelA: dataUtils.pre('\\str{&nbsp; thousands}'),
			buttonValueB: 'F',
			buttonLabelB: dataUtils.pre('\\str{&nbsp; hundreds}'),
			buttonValueC: 'F',
			buttonLabelC: dataUtils.pre('\\str{&nbsp; ten-thousands}'),
			buttonValueD: 'F',
			buttonLabelD: dataUtils.pre('\\str{&nbsp; tens}'
								),
			template: 'simple'
			}
			,
			{ // problem 2
			numberProb: '99999',
			placeNumber: '3',
			prob: dataUtils.pre('\\rowgrp{\\str{Identify the place value of the indicated digit: }}{\\placevalue{$$numberProb}{$$placeNumber}}'
								),
			buttonValueA: 'T',
			buttonLabelA: dataUtils.pre('\\str{&nbsp; thousands}'),
			buttonValueB: 'F',
			buttonLabelB: dataUtils.pre('\\str{&nbsp; hundreds}'),
			buttonValueC: 'F',
			buttonLabelC: dataUtils.pre('\\str{&nbsp; ten-thousands}'),
			buttonValueD: 'F',
			buttonLabelD: dataUtils.pre('\\str{&nbsp; tens}'
								),
			template: 'simple'
			}
			,
			{ // problem 3
			numberProb: '38059', 
			placeNumber: '2', 
			prob: dataUtils.pre('\\rowgrp{\\str{Identify the place value of the indicated digit: }}{\\placevalue{$$numberProb}{$$placeNumber}}'
								),
			buttonValueA: 'F',
			buttonLabelA: dataUtils.pre('\\str{&nbsp; thousands}'),
			buttonValueB: 'T',
			buttonLabelB: dataUtils.pre('\\str{&nbsp; hundreds}'),
			buttonValueC: 'F',
			buttonLabelC: dataUtils.pre('\\str{&nbsp; ten-thousands}'),
			buttonValueD: 'F',
			buttonLabelD: dataUtils.pre('\\str{&nbsp; tens}'
								),
			template: 'simple'
			}
        ];

	return dataUtils.build(desc, template, data);
}]);

