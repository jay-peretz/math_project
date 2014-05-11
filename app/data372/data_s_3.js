/*global angular */

angular.module('mathSkills').service('data_s_3', ['dataUtils', function (dataUtils) {
    var desc = {
			title: 'S.3 Area of Rectangles, Squares and Triangles',
    		path: 'S.3-area-of-rectangles-squares-and-triangles',
            children: []
        },
        template = {
            oneStepSolution: {
                title: 'Area of Rectangles, Squares and Triangles',
                children: [{
                    title: 'Main Answer',
                    children: [{
						problem: '\\image{$illustration}',
                        answer: '\\grp'
									+'{$finalAnswer}'
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
                title: 'Area of Rectangles, Squares and Triangles',
                children: [{
                    title: 'Main Answer',
                    children: [{
						problem: '\\image{$illustration}',
                        answer: '\\grp'
									+'{$finalAnswer}'
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
                title: 'Area of Rectangles, Squares and Triangles',
                children: [{
                    title: 'Main Answer',
                    children: [{
						problem: '\\image{$illustration}',
                        answer: '\\grp'
									+'{$finalAnswer}'
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
				illustration: '',
				unitsAnswer: 'ft<sup>2</sup>',
				unitsPower: 'ft&sup2',
				unitsSelect: '[\\"ft\\",\\"ft&sup2;\\",\\"ft&sup3\\"]',
				identifyShape: 'rectangle',
                formula: 'A = L &bull; W',
				substitution: 'A = (7) &bull; (11)',
				lineOneSolve: 'A = 77',
				finalAnswer: dataUtils.pre('\\input{77}'),
				helpAnswer: '77',
				template: 'oneStepSolution' 
			}
			,
			{ // problem 2
				illustration: '',
				unitsAnswer: 'ft<sup>2</sup>',
				unitsPower: 'ft',
				unitsSelect: '[\\"ft\\",\\"ft&sup2;\\",\\"ft&sup3\\"]',
				identifyShape: 'rectangle',
                formula: 'A = L &bull; W',
				substitution: 'A = (22) &bull; (20)',
				lineOneSolve: 'A = 440',
				finalAnswer: dataUtils.pre('\\input{440}'),
				helpAnswer: '440',
				template: 'oneStepSolution' 
			}
			,
			{ // problem 3
				illustration: '',
				unitsAnswer: 'in<sup>2</sup>',
				unitsPower: 'in',
				unitsSelect: '[\\"in\\",\\"in&sup2;\\",\\"in&sup3\\"]',
				identifyShape: 'rectangle',
                formula: 'A = L &bull; W',
				substitution: 'A = (5.4) &bull; (6.25)',
				lineOneSolve: 'A = 33.75',
				finalAnswer: dataUtils.pre('\\input{33.75}'),
				helpAnswer: '33.75',
				template: 'oneStepSolution' 
			}
			,
			{ // problem 4
				illustration: '',
				unitsAnswer: 'in<sup>2</sup>',
				unitsPower: 'in',
				unitsSelect: '[\\"in\\",\\"in&sup2;\\",\\"in&sup3\\"]',
				identifyShape: 'rectangle',
                formula: 'A = L &bull; W',
				substitution: 'A = (10.8) &bull; (12.5)',
				lineOneSolve: 'A = 135',
				finalAnswer: dataUtils.pre('\\input{135}'),
				helpAnswer: '135',
				template: 'oneStepSolution' 
			}
			,
			{ // problem 5
				illustration: '',
				unitsAnswer: 'm<sup>2</sup>',
				unitsPower: 'm',
				unitsSelect: '[\\"m\\",\\"m&sup2;\\",\\"m&sup3\\"]',
				identifyShape: 'square',
                formula: 'A = s&sup2; ',
				substitution: 'A = 14&sup2; ',
				lineOneSolve: 'A = 196',
				finalAnswer: dataUtils.pre('\\input{196}'),
				helpAnswer: '196',
				template: 'oneStepSolution' 
			}
			,
			{ // problem 6
				illustration: '',
				unitsAnswer: 'm<sup>2</sup>',
				unitsPower: 'm',
				unitsSelect: '[\\"m\\",\\"m&sup2;\\",\\"m&sup3\\"]',
				identifyShape: 'square',
                formula: 'A = s&sup2; ',
				substitution: 'A = 32&sup2; ',
				lineOneSolve: 'A = 1024',
				finalAnswer: dataUtils.pre('\\input{1024}'),
				helpAnswer: '1024',
				template: 'oneStepSolution' 
			}
			,
			{ // problem 7
				illustration: '',
				unitsAnswer: 'cm<sup>2</sup>',
				unitsPower: 'cm',
				unitsSelect: '[\\"cm\\",\\"cm&sup2;\\",\\"cm&sup3\\"]',
				identifyShape: 'rectangle',
                formula: 'A = L &bull; W',
				substitution: 'A = ( 8 <sup>3</sup>&#8260;<sub>5</sub> ) + ( 12 <sup>1</sup>&#8260;<sub>2</sub> )',
				lineOneSolve: 'A = 107 <sup>1</sup>&#8260;<sub>2</sub>',
				finalAnswer: dataUtils.pre('\\mixed{\\input{107}}{\\frac{\\input{1}}{\\input{2}}}'),
				helpAnswer: '107 <sup>1</sup>&#8260;<sub>2</sub>',
				template: 'oneStepSolution' 
			}
			,
			{ // problem 8
				illustration: 'S.1/Rectangle_L18_1-2yd_W5_1-3yd.jpg',
				unitsAnswer: 'yd',
				unitsPower: 'yd',
				unitsSelect: '[\\"yd\\",\\"yd&sup2;\\",\\"yd&sup3\\"]',
				identifyShape: 'rectangle',
                formula: 'P = 2(L) + 2(W)',
				substitution: 'P = 2 ( 18 <sup>1</sup>&#8260;<sub>2</sub> ) + 2 ( 5 <sup>1</sup>&#8260;<sub>3</sub> )',
				lineOneSolve: 'P = ( <sup>2</sup>&#8260;<sub>1</sub> &bull; <sup>37</sup>&#8260;<sub>2</sub> ) + ( <sup>2</sup>&#8260;<sub>1</sub> &bull; <sup>16</sup>&#8260;<sub>3</sub> )',
				lineTwoSolve: 'P = ( 37 ) + ( 10 <sup>2</sup>&#8260;<sub>3</sub>)',
				lineThreeSolve: 'P = 47 <sup>2</sup>&#8260;<sub>3</sub>',
				finalAnswer: dataUtils.pre('\\mixed{\\input{47}}{\\frac{\\input{2}}{\\input{3}}}'),
				helpAnswer: '47 <sup>2</sup>&#8260;<sub>3</sub>',
				template: 'threeStepSolution' 
			}
			,
			{ // problem 9
				illustration: 'S.1/Tri_12x15x9in.jpg',
				unitsAnswer: 'in',
				unitsPower: 'in',
				unitsSelect: '[\\"in\\",\\"in&sup2;\\",\\"in&sup3\\"]',
				identifyShape: 'triangle',
                formula: 'P = s<sub>1</sub> + s<sub>2</sub> + s<sub>3</sub>',
				substitution: 'P = 9 + 12 + 15',
				lineOneSolve: 'P = 36',
				finalAnswer: dataUtils.pre('\\input{36}'),
				helpAnswer: '36',
				template: 'oneStepSolution' 
			}
			,
			{ // problem 10
				illustration: 'S.1/Tri_24x22x17ft.jpg',
				unitsAnswer: 'ft',
				unitsPower: 'ft',
				unitsSelect: '[\\"ft\\",\\"ft&sup2;\\",\\"ft&sup3\\"]',
				identifyShape: 'triangle',
                formula: 'P = s<sub>1</sub> + s<sub>2</sub> + s<sub>3</sub>',
				substitution: 'P = 17 + 24 + 22',
				lineOneSolve: 'P = 63',
				finalAnswer: dataUtils.pre('\\input{63}'),
				helpAnswer: '63',
				template: 'oneStepSolution' 
			}
			,
			{ // problem 11
				illustration: 'S.1/Tri_8x8x20cm.jpg',
				unitsAnswer: 'cm',
				unitsPower: 'cm',
				unitsSelect: '[\\"cm\\",\\"cm&sup2;\\",\\"cm&sup3\\"]',
				identifyShape: 'triangle',
                formula: 'P = s<sub>1</sub> + s<sub>2</sub> + s<sub>3</sub>',
				substitution: 'P = 8 + 8 + 20',
				lineOneSolve: 'P = 36',
				finalAnswer: dataUtils.pre('\\input{36}'),
				helpAnswer: '36',
				template: 'oneStepSolution' 
			}
			,
			{ // problem 12
				illustration: 'S.1/Tri_4-8x3x3m.jpg',
				unitsAnswer: 'm',
				unitsPower: 'm',
				unitsSelect: '[\\"m\\",\\"m&sup2;\\",\\"m&sup3\\"]',
				identifyShape: 'triangle',
                formula: 'P = s<sub>1</sub> + s<sub>2</sub> + s<sub>3</sub>',
				substitution: 'P = 4.8 + 3 + 3',
				lineOneSolve: 'P = 10.8',
				finalAnswer: dataUtils.pre('\\input{10.8}'),
				helpAnswer: '10.8',
				template: 'oneStepSolution' 
			}
			,
			{ // problem 13
				illustration: 'S.1/Tri_18-34x20-49x23-5in.jpg',
				unitsAnswer: 'in',
				unitsPower: 'in',
				unitsSelect: '[\\"in\\",\\"in&sup2;\\",\\"in&sup3\\"]',
				identifyShape: 'triangle',
                formula: 'P = s<sub>1</sub> + s<sub>2</sub> + s<sub>3</sub>',
				substitution: 'P = 18.34 + 20.49 + 23.5',
				lineOneSolve: 'P = 62.33',
				finalAnswer: dataUtils.pre('\\input{62.33}'),
				helpAnswer: '62.33',
				template: 'oneStepSolution' 
			}
			,
			{ // problem 14
				illustration: 'S.1/Triangle_9.17inx10.245inx11.75in.jpg',
				unitsAnswer: 'in',
				unitsPower: 'in',
				unitsSelect: '[\\"in\\",\\"in&sup2;\\",\\"in&sup3\\"]',
				identifyShape: 'triangle',
                formula: 'P = s<sub>1</sub> + s<sub>2</sub> + s<sub>3</sub>',
				substitution: 'P = 9.17 + 10.245 + 11.75',
				lineOneSolve: 'P = 31.165',
				finalAnswer: '31.165',
				finalAnswer: dataUtils.pre('\\input{31.165}'),
				helpAnswer: '31.165',
				template: 'oneStepSolution' 
			}
			,
			{ // problem 15
				illustration: 'S.1/Tri_7_1-8x11_1-2x7_3-4in.jpg',
				unitsAnswer: 'in',
				unitsPower: 'in',
				unitsSelect: '[\\"in\\",\\"in&sup2;\\",\\"in&sup3\\"]',
				identifyShape: 'triangle',
                formula: 'P = s<sub>1</sub> + s<sub>2</sub> + s<sub>3</sub>',
				substitution: 'P = 7 <sup>1</sup>&#8260;<sub>8</sub> + 11 <sup>1</sup>&#8260;<sub>2</sub> + 7 <sup>3</sup>&#8260;<sub>4</sub>',
				lineOneSolve: 'P = 26 <sup>3</sup>&#8260;<sub>8</sub>',
				finalAnswer: dataUtils.pre('\\mixed{\\input{26}}{\\frac{\\input{3}}{\\input{8}}}'),
				helpAnswer: '26 <sup>3</sup>&#8260;<sub>8</sub>',
				template: 'oneStepSolution' 
			}
			,
			{ // problem 16
				illustration: 'S.1/Tri_9_3-5x7_1-5x12ft.jpg',
				unitsAnswer: 'ft',
				unitsPower: 'ft',
				unitsSelect: '[\\"ft\\",\\"ft&sup2;\\",\\"ft&sup3\\"]',
				identifyShape: 'triangle',
                formula: 'P = s<sub>1</sub> + s<sub>2</sub> + s<sub>3</sub>',
				substitution: 'P = 9 <sup>3</sup>&#8260;<sub>5</sub> + 7 <sup>1</sup>&#8260;<sub>5</sub> + 12',
				lineOneSolve: 'P = 28 <sup>4</sup>&#8260;<sub>5</sub>',
				finalAnswer: dataUtils.pre('\\mixed{\\input{28}}{\\frac{\\input{4}}{\\input{5}}}'),
				helpAnswer: '28 <sup>4</sup>&#8260;<sub>5</sub>',
				template: 'oneStepSolution' 
			}
        ];
	
	/*shuffle = [
				{ problems: [1,2,3,4,5,6,7,8,9,10], total: 8},
				{ problems: [11,12], total: 1},
				{ problems: [13,14,15,16], total: 1}
		];

    
    	return dataUtils.build(desc, template, data, shuffle);*/

    return dataUtils.build(desc, template, data);
	
}]);
