/&bull;global angular &bull;/

angular.module('mathSkills').service('data_s_1', ['dataUtils', function (dataUtils) {
    var desc = {
			title: 'S.1 Perimeter of Rectangles',
    		path: 's.1-perimeter-of-rectangles',
            children: []
        },
        template = {
            oneStepSolution: {
                title: 'Perimeter of Rectangles',
                children: [{
                    title: 'Main Answer',
                    children: [{
						problem: '\\image{$illustration}',
                        answer: '\\grp'
									+'{\\input{$finalAnswer}}'
									+'{\\select{$unitsPower}{$unitsSelect}{widthFixed120}}',
                        controls: {
                            "checkAnswer": true,
                            "help": '\\rowgrp'
										+'{\\html{Identify the shape:  $identifyShape}}'
										+'{\\html{&nbsp;}}'
										+'{\\html{<table><tr><td>Write the formula:&nbsp;&nbsp;</td><td>$formula</td></tr>'
										+'<tr><td>Substitution:&nbsp;&nbsp;</td><td>$substitution</td></tr>'
										+'<tr><td>Solve:&nbsp;&nbsp;</td><td> $lineOneSolve</td></tr></table>}}'
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
            },
			twoStepSolution: {
                title: 'Perimeter of Rectangles',
                children: [{
                    title: 'Main Answer',
                    children: [{
						problem: '\\image{$illustration}',
                        answer: '\\grp'
									+'{\\input{$finalAnswer}}'
									+'{\\select{$unitsPower}{$unitsSelect}{widthFixed120}}',
                        controls: {
                            "checkAnswer": true,
                            "help": '\\rowgrp'
										+'{\\html{Identify the shape:  $identifyShape}}'
										+'{\\html{&nbsp;}}'
										+'{\\html{<table><tr><td>Write the formula:&nbsp;&nbsp;</td><td>$formula</td></tr>'
										+'<tr><td>Substitution:&nbsp;&nbsp;</td><td>$substitution</td></tr>'
										+'<tr><td>Solve:&nbsp;&nbsp;</td><td> $lineOneSolve</td></tr>'
										+'<tr><td>&nbsp;&nbsp;</td><td>$lineTwoSolve</td></tr></table>}}'
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
            },
			threeStepSolution: {
                title: 'Perimeter of Rectangles',
                children: [{
                    title: 'Main Answer',
                    children: [{
						problem: '\\image{$illustration}',
                        answer: '\\grp'
									+'{\\input{$finalAnswer}}'
									+'{\\select{$unitsPower}{$unitsSelect}{widthFixed120}}',
                        controls: {
                            "checkAnswer": true,
                            "help": '\\rowgrp'
										+'{\\html{Identify the shape:  $identifyShape}}'
										+'{\\html{&nbsp;}}'
										+'{\\html{<table><tr><td>Write the formula:&nbsp;&nbsp;</td><td>$formula</td></tr>'
										+'<tr><td>Substitution:&nbsp;&nbsp;</td><td>$substitution</td></tr>'
										+'<tr><td>Solve:&nbsp;&nbsp;</td><td> $lineOneSolve</td></tr>'
										+'<tr><td>&nbsp;&nbsp;</td><td>$lineTwoSolve</td></tr>'
										+'<tr><td>&nbsp;&nbsp;</td><td>$lineThreeSolve</td></tr></table>}}'
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
				unitsPower: 'ft',
				unitsSelect: '[\\"ft\\",\\"ft&sup2;\\",\\"ft&sup3\\"]',
				identifyShape: 'rectangle',
                formula: 'P = 2(L) + 2(W)',
				substitution: 'P = 2(7) + 2(11)',
				lineOneSolve: 'P = 14 + 22',
				lineTwoSolve: 'P = 36',
				finalAnswer: '36',
				helpAnswer: '36',
				template: 'twoStepSolution' 
			}
			,
			{ // problem 2
				illustration: '',
				unitsAnswer: 'ft',
				unitsPower: 'ft',
				unitsSelect: '[\\"ft\\",\\"ft&sup2;\\",\\"ft&sup3\\"]',
				identifyShape: 'rectangle',
                formula: 'P = 2(L) + 2(W)',
				substitution: 'P = 2(22) + 2(20)',
				lineOneSolve: 'P = 44 + 40',
				lineTwoSolve: 'P = 84',
				finalAnswer: '84',
				helpAnswer: '84',
				template: 'twoStepSolution' 
			}
			,
			{ // problem 3
				illustration: '',
				unitsAnswer: 'in',
				unitsPower: 'in',
				unitsSelect: '[\\"in\\",\\"in&sup2;\\",\\"in&sup3\\"]',
				identifyShape: 'rectangle',
                formula: 'P = 2(L) + 2(W)',
				substitution: 'P = 2(5.4) + 2(6.25)',
				lineOneSolve: 'P = 10.8 + 12.5',
				lineTwoSolve: 'P = 23.3',
				finalAnswer: '23.3',
				helpAnswer: '23.3',
				template: 'twoStepSolution' 
			}
			,
			{ // problem 4
				illustration: '',
				unitsAnswer: 'in',
				unitsPower: 'in',
				unitsSelect: '[\\"in\\",\\"in&sup2;\\",\\"in&sup3\\"]',
				identifyShape: 'rectangle',
                formula: 'P = 2(L) + 2(W)',
				substitution: 'P = 2(10.8) + 2(12.5)',
				lineOneSolve: 'P = 21.6 + 25',
				lineTwoSolve: 'P = 46.6',
				finalAnswer: '46.6',
				helpAnswer: '46.6',
				template: 'twoStepSolution' 
			}
			,
			{ // problem 5
				illustration: '',
				unitsAnswer: 'm',
				unitsPower: 'm',
				unitsSelect: '[\\"m\\",\\"m&sup2;\\",\\"m&sup3\\"]',
				identifyShape: 'square',
                formula: 'P = 4(S)',
				substitution: 'P = 4(14)',
				lineOneSolve: 'P = 56',
				finalAnswer: '56',
				helpAnswer: '56',
				template: 'oneStepSolution' 
			}
			,
			{ // problem 6
				illustration: '',
				unitsAnswer: 'm',
				unitsPower: 'm',
				unitsSelect: '[\\"m\\",\\"m&sup2;\\",\\"m&sup3\\"]',
				identifyShape: 'square',
                formula: 'P = 4(S)',
				substitution: 'P = 4(32)',
				lineOneSolve: 'P = 128',
				finalAnswer: '128',
				helpAnswer: '128',
				template: 'oneStepSolution' 
			}
			,
			{ // problem 7
				illustration: '',
				unitsAnswer: 'cm',
				unitsPower: 'cm',
				unitsSelect: '[\\"cm\\",\\"cm&sup2;\\",\\"cm&sup3\\"]',
				identifyShape: 'rectangle',
                formula: 'P = 2(L) + 2(W)',
				substitution: 'P = 2 ( 8 <sup>3</sup>&#8260;<sub>5</sub> ) + 2 ( 12 <sup>1</sup>&#8260;<sub>2</sub> )',
				lineOneSolve: 'P = ( <sup>2</sup>&#8260;<sub>1</sub> &bull; <sup>43</sup>&#8260;<sub>5</sub> ) + ( <sup>2</sup>&#8260;<sub>1</sub> &bull; <sup>25</sup>&#8260;<sub>2</sub> )',
				lineTwoSolve: 'P = ( 17 <sup>1</sup>&#8260;<sub>5</sub>  ) + ( 25 )',
				lineThreeSolve: 'P = 42 <sup>1</sup>&#8260;<sub>5</sub>',
				finalAnswer: '42 <sup>1</sup>&#8260;<sub>5</sub>',
				helpAnswer: '42 <sup>1</sup>&#8260;<sub>5</sub>',
				template: 'threeStepSolution' 
			}
			,
			{ // problem 8
				illustration: '',
				unitsAnswer: 'yd',
				unitsPower: 'yd',
				unitsSelect: '[\\"yd\\",\\"yd&sup2;\\",\\"yd&sup3\\"]',
				identifyShape: 'rectangle',
                formula: 'P = 2(L) + 2(W)',
				substitution: 'P = 2 ( 18 <sup>1</sup>&#8260;<sub>2</sub> ) + 2 ( 5 <sup>1</sup>&#8260;<sub>3</sub> )',
				lineOneSolve: 'P = ( <sup>2</sup>&#8260;<sub>1</sub> &bull; <sup>37</sup>&#8260;<sub>2</sub> ) + ( <sup>2</sup>&#8260;<sub>1</sub> &bull; <sup>16</sup>&#8260;<sub>3</sub> )',
				lineTwoSolve: 'P = ( 37 ) + ( 10 <sup>2</sup>&#8260;<sub>3</sub>)',
				lineThreeSolve: 'P = 47 <sup>2</sup>&#8260;<sub>3</sub>',
				finalAnswer: '47 <sup>2</sup>&#8260;<sub>3</sub>',
				helpAnswer: '47 <sup>2</sup>&#8260;<sub>3</sub>',
				template: 'threeStepSolution' 
			}
        ];

    return dataUtils.build(desc, template, data);
}]);
