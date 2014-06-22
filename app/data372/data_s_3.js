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
						problem: '\\rowgrp'
									+'{\\html{Solve for the area of the shape below.$addProblemText}}'
									+'{\\html{&nbsp;}}'
									+'{\\image{$illustration}}',
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
						problem: '\\rowgrp'
									+'{\\html{Solve for the area of the shape below.$addProblemText}}'
									+'{\\html{&nbsp;}}'
									+'{\\image{$illustration}}',
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
										+'<tr><td>&nbsp;&nbsp;</td><td>$addProblemText</td></tr></table>}}'
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
				addProblemText: '',
				illustration: 'S.1/Rectangle_L7ft_W11ft.jpg',
				unitsAnswer: 'ft&sup2;',
				unitsPower: 'ft&sup2;',
				unitsSelect: '[\\"ft\\",\\"ft&sup2;\\",\\"ft&sup3;\\"]',
				identifyShape: 'Rectangle',
                formula: 'A = L &bull; W',
				substitution: 'A = (7) &bull; (11)',
				lineOneSolve: 'A = 77',
				finalAnswer: dataUtils.pre('\\input{77}'),
				helpAnswer: '77',
				template: 'oneStepSolution' 
			}
			,
			{ // problem 2
				addProblemText: '',
				illustration: 'S.1/Rectangle_L22ft_W20ft.jpg',
				unitsAnswer: 'ft&sup2;',
				unitsPower: 'ft&sup2;',
				unitsSelect: '[\\"ft\\",\\"ft&sup2;\\",\\"ft&sup3;\\"]',
				identifyShape: 'Rectangle',
                formula: 'A = L &bull; W',
				substitution: 'A = (22) &bull; (20)',
				lineOneSolve: 'A = 440',
				finalAnswer: dataUtils.pre('\\input{440}'),
				helpAnswer: '440',
				template: 'oneStepSolution' 
			}
			,
			{ // problem 3
				addProblemText: '',
				illustration: 'S.1/Rectangle_L5.4in_W6.25in.jpg',
				unitsAnswer: 'in&sup2;',
				unitsPower: 'in&sup2;',
				unitsSelect: '[\\"in\\",\\"in&sup2;\\",\\"in&sup3;\\"]',
				identifyShape: 'Rectangle',
                formula: 'A = L &bull; W',
				substitution: 'A = (5.4) &bull; (6.25)',
				lineOneSolve: 'A = 33.75',
				finalAnswer: dataUtils.pre('\\input{33.75}'),
				helpAnswer: '33.75',
				template: 'oneStepSolution' 
			}
			,
			{ // problem 4
				addProblemText: '',
				illustration: 'S.1/Rectangle_L10.8in_W12.5in.jpg',
				unitsAnswer: 'in&sup2;',
				unitsPower: 'in&sup2;',
				unitsSelect: '[\\"in\\",\\"in&sup2;\\",\\"in&sup3;\\"]',
				identifyShape: 'Rectangle',
                formula: 'A = L &bull; W',
				substitution: 'A = (10.8) &bull; (12.5)',
				lineOneSolve: 'A = 135',
				finalAnswer: dataUtils.pre('\\input{135}'),
				helpAnswer: '135',
				template: 'oneStepSolution' 
			}
			,
			{ // problem 5
				addProblemText: '',
				illustration: 'S.1/Rectangle_L14m_W14m.jpg',
				unitsAnswer: 'm&sup2;',
				unitsPower: 'm&sup2;',
				unitsSelect: '[\\"m\\",\\"m&sup2;\\",\\"m&sup3;\\"]',
				identifyShape: 'Square',
                formula: 'A = s&sup2; ',
				substitution: 'A = 14&sup2; ',
				lineOneSolve: 'A = 196',
				finalAnswer: dataUtils.pre('\\input{196}'),
				helpAnswer: '196',
				template: 'oneStepSolution' 
			}
			,
			{ // problem 6
				addProblemText: '',
				illustration: 'S.1/Rectangle_L32m_W32m.jpg',
				unitsAnswer: 'm&sup2;',
				unitsPower: 'm&sup2;',
				unitsSelect: '[\\"m\\",\\"m&sup2;\\",\\"m&sup3;\\"]',
				identifyShape: 'Square',
                formula: 'A = s&sup2; ',
				substitution: 'A = 32&sup2; ',
				lineOneSolve: 'A = 1024',
				finalAnswer: dataUtils.pre('\\input{1024}'),
				helpAnswer: '1024',
				template: 'oneStepSolution' 
			}
			,
			{ // problem 7
				addProblemText: '',
				illustration: 'S.1/Rectangle_L8_3-5cm_W12_1-2cm.jpg',
				unitsAnswer: 'cm&sup2;',
				unitsPower: 'cm&sup2;',
				unitsSelect: '[\\"cm\\",\\"cm&sup2;\\",\\"cm&sup3;\\"]',
				identifyShape: 'Rectangle',
                formula: 'A = L &bull; W',
				substitution: 'A = ( 8 <sup>3</sup>&#8260;<sub>5</sub> ) + ( 12 <sup>1</sup>&#8260;<sub>2</sub> )',
				lineOneSolve: 'A = 107 <sup>1</sup>&#8260;<sub>2</sub>',
				finalAnswer: dataUtils.pre('\\mixed{\\input{107}}{\\frac{\\input{1}}{\\input{2}}}'),
				helpAnswer: '107 <sup>1</sup>&#8260;<sub>2</sub>',
				template: 'oneStepSolution' 
			}
			,
			{ // problem 8
				addProblemText: '',
				illustration: 'S.1/Rectangle_L18_1-2yd_W5_1-3yd.jpg',
				unitsAnswer: 'yd&sup2;',
				unitsPower: 'yd&sup2;',
				unitsSelect: '[\\"yd\\",\\"yd&sup2;\\",\\"yd&sup3;\\"]',
				identifyShape: 'Rectangle',
                formula: 'A = L &bull; W',
				substitution: 'A = ( 18 <sup>1</sup>&#8260;<sub>2</sub> ) + ( 5 <sup>1</sup>&#8260;<sub>3</sub> )',
				lineOneSolve: 'A = 98 <sup>2</sup>&#8260;<sub>3</sub>',
				finalAnswer: dataUtils.pre('\\mixed{\\input{98}}{\\frac{\\input{2}}{\\input{3}}}'),
				helpAnswer: '98 <sup>2</sup>&#8260;<sub>3</sub>',
				template: 'oneStepSolution' 
			}
			,
			{ // problem 9
				addProblemText: '',
				illustration: 'S.1/Tri_12x15x9in.jpg',
				unitsAnswer: 'in&sup2;',
				unitsPower: 'in&sup2;',
				unitsSelect: '[\\"in\\",\\"in&sup2;\\",\\"in&sup3;\\"]',
				identifyShape: 'Triangle',
                formula: 'A = <sup>1</sup>&#8260;<sub>2</sub> &bull; b &bull; h',
				substitution: 'A = <sup>1</sup>&#8260;<sub>2</sub> &bull; 9 &bull; 12',
				lineOneSolve: 'P = 54',
				finalAnswer: dataUtils.pre('\\input{54}'),
				helpAnswer: '54',
				template: 'oneStepSolution' 
			}
			,
			{ // problem 10
				addProblemText: '',
				illustration: 'S.3/Tri_16x20x12ft.jpg',
				unitsAnswer: 'ft&sup2;',
				unitsPower: 'ft&sup2;',
				unitsSelect: '[\\"ft\\",\\"ft&sup2;\\",\\"ft&sup3;\\"]',
				identifyShape: 'Triangle',
                formula: 'A = <sup>1</sup>&#8260;<sub>2</sub> &bull; b &bull; h',
				substitution: 'A = <sup>1</sup>&#8260;<sub>2</sub> &bull; 12 &bull; 16',
				lineOneSolve: 'P = 96',
				finalAnswer: dataUtils.pre('\\input{96}'),
				helpAnswer: ' 96',
				template: 'oneStepSolution' 
			}
			,
			{ // problem 11
				addProblemText: '<br>Round the answer to the tenths place.',
				illustration: 'S.3/Tri_16-1x19-23x24-73cm.jpg',
				unitsAnswer: 'cm&sup2;',
				unitsPower: 'cm&sup2;',
				unitsSelect: '[\\"cm\\",\\"cm&sup2;\\",\\"cm&sup3;\\"]',
				identifyShape: 'Triangle',
                formula: 'A = <sup>1</sup>&#8260;<sub>2</sub> &bull; b &bull; h',
				substitution: 'A = <sup>1</sup>&#8260;<sub>2</sub> &bull; 16.1 &bull; 19.23',
				lineOneSolve: 'P = 154.8015',
				finalAnswer: dataUtils.pre('\\input{154.8}'),
				helpAnswer: ' 154.8',
				template: 'twoStepSolution' 
			}
			,
			{ // problem 12
				addProblemText: '',
				illustration: 'S.3/Tri_4-8x3x3m.jpg',
				unitsAnswer: 'm&sup2;',
				unitsPower: 'm&sup2;',
				unitsSelect: '[\\"m\\",\\"m&sup2;\\",\\"m&sup3;\\"]',
				identifyShape: 'Triangle',
				formula: 'A = <sup>1</sup>&#8260;<sub>2</sub> &bull; b &bull; h',
				substitution: 'A = <sup>1</sup>&#8260;<sub>2</sub> &bull; 4.8 &bull; 1.8',
				lineOneSolve: 'P = 4.32',
				finalAnswer: dataUtils.pre('\\input{4.32}'),
				helpAnswer: ' 4.32',
				template: 'oneStepSolution' 
			}
			,
			{ // problem 13
				addProblemText: '',
				illustration: 'S.3/Tri_2.5x2.5x3ft.jpg',
				unitsAnswer: 'ft&sup2;',
				unitsPower: 'ft&sup2;',
				unitsSelect: '[\\"ft\\",\\"ft&sup2;\\",\\"ft&sup3;\\"]',
				identifyShape: 'Triangle',
				formula: 'A = <sup>1</sup>&#8260;<sub>2</sub> &bull; b &bull; h',
				substitution: 'A = <sup>1</sup>&#8260;<sub>2</sub> &bull; 3 &bull; 2',
				lineOneSolve: 'P = 3',
				finalAnswer: dataUtils.pre('\\input{3}'),
				helpAnswer: ' 3',
				template: 'oneStepSolution' 
			}
			,
			{ // problem 14
				addProblemText: '',
				illustration: 'S.3/Tri_17.5x17.5x21in.jpg',
				unitsAnswer: 'in&sup2;',
				unitsPower: 'in&sup2;',
				unitsSelect: '[\\"in\\",\\"in&sup2;\\",\\"in&sup3;\\"]',
				identifyShape: 'Triangle',
                formula: 'A = <sup>1</sup>&#8260;<sub>2</sub> &bull; b &bull; h',
				substitution: 'A = <sup>1</sup>&#8260;<sub>2</sub> &bull; 21 &bull; 14',
				lineOneSolve: 'P = 147',
				finalAnswer: dataUtils.pre('\\input{147}'),
				helpAnswer: '147',
				template: 'oneStepSolution' 
			}
			,
			{ // problem 15
				addProblemText: '<br>Give the answer as a mixed number.',
				illustration: 'S.3/Tri_9_3-5x7_1-5x12ft.jpg',
				unitsAnswer: 'ft&sup2;',
				unitsPower: 'ft&sup2;',
				unitsSelect: '[\\"ft\\",\\"ft&sup2;\\",\\"ft&sup3;\\"]',
				identifyShape: 'Triangle',
				formula: 'A = <sup>1</sup>&#8260;<sub>2</sub> &bull; b &bull; h',
				substitution: 'A = <sup>1</sup>&#8260;<sub>2</sub> &bull; 9 <sup>3</sup>&#8260;<sub>5</sub> &bull; 7 <sup>1</sup>&#8260;<sub>5</sub>',
				lineOneSolve: 'P = 34 <sup>14</sup>&#8260;<sub>25</sub>',
				finalAnswer: dataUtils.pre('\\mixed{\\input{34}}{\\frac{\\input{14}}{\\input{25}}}'),
				helpAnswer: ' 34 <sup>14</sup>&#8260;<sub>25</sub>',
				template: 'oneStepSolution' 
			}
			,
			{ // problem 16
				addProblemText: '<br>Give the answer as a mixed number.',
				illustration: 'S.3/Tri_7_1-4x6x4_1-2m.jpg',
				unitsAnswer: 'm&sup2;',
				unitsPower: 'm&sup2;',
				unitsSelect: '[\\"m\\",\\"m&sup2;\\",\\"m&sup3;\\"]',
				identifyShape: 'Triangle',
				formula: 'A = <sup>1</sup>&#8260;<sub>2</sub> &bull; b &bull; h',
				substitution: 'A = <sup>1</sup>&#8260;<sub>2</sub> &bull; 4 <sup>1</sup>&#8260;<sub>2</sub> &bull; 6 ',
				lineOneSolve: 'P = 13 <sup>1</sup>&#8260;<sub>2</sub>',
				finalAnswer: dataUtils.pre('\\mixed{\\input{13}}{\\frac{\\input{1}}{\\input{2}}}'),
				helpAnswer: ' 13 <sup>1</sup>&#8260;<sub>2</sub>',
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
