/*global angular */

angular.module('mathSkills').service('data_s_1', ['dataUtils', function (dataUtils) {
    var desc = {
			title: 'S.1 Perimeter of Rectangles',
    		path: 's.1-perimeter-of-rectangles',
            children: []
        },
        template = {
            main: {
                title: 'Perimeter of Rectangles',
                children: [{
                    title: 'Main Answer',
                    children: [{
						problem: '\\image{$illustration}',
                        answer: '\\grp'
									+'{\\input{$finalAnswer}}'
									+'{\\exposelect{$unitsPower}{$unitsSelect}}',
                        controls: {
                            "checkAnswer": true,
                            "help": '\\rowgrp'
										+'{\\html{Identify the shape:  $identifyShape}}'
										+'{\\html{&nbsp;}}'
										+'{\\html{Write the formula: $formula}}'
										+'{\\html{Substitution: $substitution}}'
										+'{\\html{Solve: $lineOneSolve}}'
										+'{\\html{<span style="padding-left:47px;">$lineTwoSolve</span>}}'
										+'{\\html{&nbsp;}}'
										+'{\\css'
											+'{\\grp'
												+'{\\html{Answer: &nbsp;}}'
												+'{\\html{$helpAnswer}}'
												+'{\\html{$unitsAnswer}}'
											+'}'
											+'{help-answer-text}'
										+'}'
                        }
                    }]
                }]
            }
        },
        data = [
			{ // problem 1
				illustration: 'S.1/rectangle7x11.jpg',
				unitsAnswer: 'ft',
				unitsPower: ' ',
				unitsSelect: '[\\"ft\\",\\"ft&sup2;\\",\\"ft&sup3\\"]',
				identifyShape: 'rectangle',
                formula: 'P = 2(L) + 2(W)',
				substitution: 'P = 2(11) + 2(7)',
				lineOneSolve: 'P = 22 + 14',
				lineTwoSolve: 'P = 36',
				finalAnswer: '36',
				helpAnswer: '36',
				template: 'main' 
			}
        ];

    return dataUtils.build(desc, template, data);
}]);
