/*global angular */

angular.module('mathSkills').service('data_s_2', ['dataUtils', function (dataUtils) {
    var desc = {
			title: 'S.2 Circumference of Circles',
    		path: 'S.2-circumference-of-circles',
            children: []
        },
        template = {
            questionWithDescription: {
                title: 'Circumference of Circles',
                children: [{
                    title: 'Main Answer',
                    children: [{
						problem: '\\rowgrp'
									+'{$questionDesc}'
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
										+'{$desc}'
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
            withoutQuestionDesc: {
                title: 'Circumference of Circles',
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
										+'</table>}}'
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
			informationalAnswer: {
                title: 'Circumference of Circles',
                children: [{
                    title: 'Main Answer',
                    children: [{
						problem: '\\rowgrp'
									+'{$questionDesc}'
									+'{\\html{&nbsp;}}'
									+'{\\image{$illustration}{$imageAlt}{$imageWidth}{$imageHeight}}',
                        answer: '\\grp'
									+'{$finalAnswer}'
									+'{\\select{$unitsPower}{$unitsSelect}{widthFixed120}}',
                        controls: {
                            "checkAnswer": true,
                            "help": '\\rowgrp'
										+'{$line1}'
										+'{\\html{&nbsp;}}'
										+'{$line2}'
										+'{\\html{&nbsp;}}'
										+'{$line3}'
										+'{\\html{&nbsp;}}'
										+'{\\html{$line4}}'
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
			informationalNoImageAnswer: {
                title: 'Circumference of Circles',
                children: [{
                    title: 'Main Answer',
                    children: [{
						problem: '\\rowgrp'
									+'{$questionDesc}',
                        answer: '\\grp'
									+'{$finalAnswer}'
									+'{\\select{$unitsPower}{$unitsSelect}{widthFixed120}}',
                        controls: {
                            "checkAnswer": true,
                            "help": '\\rowgrp'
										+'{$line1}'
										+'{\\html{&nbsp;}}'
										+'{$line2}'
										+'{\\html{&nbsp;}}'
										+'{$line3}'
										+'{\\html{&nbsp;}}'
										+'{\\html{$line4}}'
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
				questionDesc: dataUtils.pre('\\html{If the diameter of a circle is 12 feet, what is the radius?}'),
				unitsAnswer: 'ft',
				unitsPower: 'ft',
				unitsSelect: '[\\"ft\\",\\"ft&sup2;\\",\\"ft&sup3;\\"]',
				line1: dataUtils.pre('\\html{The diameter is the distance from one edge of the circle to its opposite edge (passing through the circle\'s center point).}'),
			    line2: dataUtils.pre('\\html{The radius is the distance from the center point of the circle to its edge.}'),
				line3: dataUtils.pre('\\html{The radius is <sup>1</sup>&#8260;<sub>2</sub> the length of the diameter.}'),
				line4: '<sup>1</sup>&#8260;<sub>2</sub> <font size = 4>&bull;</font> 12 = 6',
				finalAnswer: dataUtils.pre('\\input{6}'),
				helpAnswer: '6',
				template: 'informationalNoImageAnswer' 
			}, 
			{ // problem 2
				questionDesc: dataUtils.pre('\\html{If the radius of a circle is 8.5 feet, what is the diameter?}'),
				unitsAnswer: 'ft',
				unitsPower: 'ft',
				unitsSelect: '[\\"ft\\",\\"ft&sup2;\\",\\"ft&sup3;\\"]',
				line1: dataUtils.pre('\\html{The radius is the distance from the center point of the circle to its edge.}'),
			    line2: dataUtils.pre('\\html{The diameter is the distance from one edge of the circle to its opposite edge (passing through the circle\'s center point).}'),
				line3: dataUtils.pre('\\html{The diameter is 2 times the length of the radius.}'),
				line4: '8.5 <font size = 4>&bull;</font> 2 = 17',
				finalAnswer: dataUtils.pre('\\input{17}'),
				helpAnswer: '17',
				template: 'informationalNoImageAnswer' 
			}, 
			{ // problem 3
				questionDesc: dataUtils.pre('\\html{What is the radius of this circle?}'),
				illustration: 'S.2/Circle_d_7_1-2m_v2.jpg',
				imageAlt: 'circle',
				imageWidth: '',
				imageHeight: '',
				unitsAnswer: 'meters',
				unitsPower: 'm',
				unitsSelect: '[\\"m\\",\\"m&sup2;\\",\\"m&sup3;\\"]',
				line1: dataUtils.pre('\\html{The diameter of the circle (the distance from one edge of the circle to its opposite edge, and passing through the circle\'s center point) is given.}'),
			    line2: dataUtils.pre('\\html{The diameter is 7<sup>1</sup>&#8260;<sub>2</sub> meters.}'),
				line3: dataUtils.pre('\\html{The radius is <sup>1</sup>&#8260;<sub>2</sub> the length of the diameter.}'),
				line4: '<sup>1</sup>&#8260;<sub>2</sub> <font size = 4>&bull;</font> 7<sup>1</sup>&#8260;<sub>2</sub> = 3<sup>3</sup>&#8260;<sub>4</sub>',
				finalAnswer: dataUtils.pre('\\mixed{\\input{3}}{\\frac{\\input{3}}{\\input{4}}}'),
				helpAnswer: '3<sup>3</sup>&#8260;<sub>4</sub>',
				template: 'informationalAnswer' 
			}, 
			{ // problem 4
				questionDesc: dataUtils.pre('\\html{What is the diameter of this circle?}'),
				illustration: 'S.2/Circle_r_5_3-4in_v2.jpg',
				imageAlt: 'circle',
				imageWidth: '247px',
				imageHeight: '250px',
				unitsAnswer: 'inches',
				unitsPower: 'in',
				unitsSelect: '[\\"in\\",\\"in&sup2;\\",\\"in&sup3;\\"]',
				line1: dataUtils.pre('\\html{The radius (the distance from the center point of the circle to its edge) is given.}'),
			    line2: dataUtils.pre('\\html{The radius is 5<sup>3</sup>&#8260;<sub>4</sub> inches.}'),
				line3: dataUtils.pre('\\html{The diameter is 2 times the length of the radius.}'),
				line4: '5<sup>3</sup>&#8260;<sub>4</sub> <font size = 4>&bull;</font> 2 = 11<sup>1</sup>&#8260;<sub>2</sub>',
				finalAnswer: dataUtils.pre('\\mixed{\\input{11}}{\\frac{\\input{1}}{\\input{2}}}'),
				helpAnswer: '11<sup>1</sup>&#8260;<sub>2</sub>',
				template: 'informationalAnswer' 
			},    
			{ // problem 5
				questionDesc: dataUtils.pre('\\str{Solve for the circumference. <br>Use 3.14 for &pi;.}'),
				illustration: 'S.2/Circle_d_20cm_v2.jpg',
				unitsAnswer: 'cm',
				unitsPower: 'cm',
				unitsSelect: '[\\"cm\\",\\"cm&sup2;\\",\\"cm&sup3;\\"]',
				identifyShape: 'Circle',
                formula: 'P = &pi; <font size = 4>&bull;</font> d',
				substitution: 'P = 3.14 <font size = 4>&bull;</font> 20',
				lineOneSolve: 'P = 62.8',
				finalAnswer: dataUtils.pre('\\input{62.8}'),
				helpAnswer: '62.8',
				template: 'questionWithDescription' 
			},
			{ // problem 6
				questionDesc: dataUtils.pre('\\str{Solve for the circumference. <br>Use 3.14 for &pi;.}'),
				illustration: 'S.2/Circle_d_32in_v2.jpg',
				unitsAnswer: 'in',
				unitsPower: 'in',
				unitsSelect: '[\\"in\\",\\"in&sup2;\\",\\"in&sup3;\\"]',
				identifyShape: 'Circle',
                formula: 'P = &pi; <font size = 4>&bull;</font> d',
                substitution: 'P = 3.14 <font size = 4>&bull;</font> 32',
				lineOneSolve: 'P = 100.48',
				finalAnswer: dataUtils.pre('\\input{100.48}'),
				helpAnswer: '100.48',
				template: 'questionWithDescription' 
			},
			{ // problem 7
				questionDesc: dataUtils.pre('\\str{Solve for the circumference. <br>Use 3.14 for &pi;.}'),
				illustration: 'S.2/Circle_r_18m_v2.jpg',
				unitsAnswer: 'm',
				unitsPower: 'm',
				unitsSelect: '[\\"m\\",\\"m&sup2;\\",\\"m&sup3;\\"]',
				identifyShape: 'Circle',
                formula: 'P = &pi; <font size = 4>&bull;</font> 2r',
                substitution: 'P = 3.14 <font size = 4>&bull;</font> 2(18)',
				lineOneSolve: 'P = 113.04',
				finalAnswer: dataUtils.pre('\\input{113.04}'),
				helpAnswer: '113.04',
				template: 'questionWithDescription' 
			},
			{ // problem 8
				questionDesc: dataUtils.pre('\\str{Solve for the circumference. <br>Use 3.14 for &pi;.}'),
				illustration: 'S.2/Circle_r_8yds_v2.jpg',
				unitsAnswer: 'yd',
				unitsPower: 'yd',
				unitsSelect: '[\\"yd\\",\\"yd&sup2;\\",\\"yd&sup3;\\"]',
				identifyShape: 'Circle',
                formula: 'P = &pi; <font size = 4>&bull;</font> 2r',
                substitution: 'P = 3.14 <font size = 4>&bull;</font> 2(8)',
				lineOneSolve: 'P = 50.24',
				finalAnswer: dataUtils.pre('\\input{50.24}'),
				helpAnswer: '50.24',
				template: 'questionWithDescription' 
			},
			{ // problem 9
				questionDesc: dataUtils.pre('\\str{Solve for the circumference. <br>Use 3.14 for &pi;. Round answer to the nearest whole.}'),
				illustration: 'S.2/Circle_d_6-3ft_v2.jpg',
				unitsAnswer: 'ft',
				unitsPower: 'ft',
				unitsSelect: '[\\"ft\\",\\"ft&sup2;\\",\\"ft&sup3;\\"]',
				identifyShape: 'Circle',
                formula: 'P = &pi; <font size = 4>&bull;</font> d',
                substitution: 'P = 3.14 <font size = 4>&bull;</font> 6.3',
				lineOneSolve: 'P = 19.782',
				desc: dataUtils.pre('\\html{Round answer to the nearest whole.}'),
				finalAnswer: dataUtils.pre('\\input{20}'),
				helpAnswer: '20',
				template: 'questionWithDescription' 
			},
			{ // problem 10
				questionDesc: dataUtils.pre('\\str{Solve for the circumference. <br>Use 3.14 for &pi;. Round answer to the tenths place.}'),
				illustration: 'S.2/Circle_r_13-09ft_v2.jpg',
				unitsAnswer: 'ft',
				unitsPower: 'ft',
				unitsSelect: '[\\"ft\\",\\"ft&sup2;\\",\\"ft&sup3;\\"]',
				identifyShape: 'Circle',
                formula: 'P = &pi; <font size = 4>&bull;</font> 2r',
                substitution: 'P = 3.14 <font size = 4>&bull;</font> 2(13.09)',
				lineOneSolve: 'P = 82.2052',
				desc: dataUtils.pre('\\html{Round answer to the tenths place.}'),
				finalAnswer: dataUtils.pre('\\input{82.2}'),
				helpAnswer: '82.2',
				template: 'questionWithDescription' 
			},
			{ // problem 11
				questionDesc: dataUtils.pre('\\html{Solve for the circumference. <br>Use <sup>22</sup>/<sub>7</sub> for &pi;. Give the answer as a mixed number.}'),
				illustration: 'S.2/Circle_r_6_1-2in_v2.jpg',
				unitsAnswer: 'in',
				unitsPower: 'in',
				unitsSelect: '[\\"in\\",\\"in&sup2;\\",\\"in&sup3;\\"]',
				identifyShape: 'Circle',
                formula: 'P = &pi; <font size = 4>&bull;</font> 2r',
				substitution: 'P = <sup>22</sup>&#8260;<sub>7</sub> <font size = 4>&bull; 2( 6 <sup>1</sup>&#8260;<sub>2</sub> )',
				lineOneSolve: 'P = 40 <sup>6</sup>&#8260;<sub>7</sub> ',
				desc: '',
				finalAnswer: dataUtils.pre('\\mixed{\\input{40}}{\\frac{\\input{6}}{\\input{7}}}'),
				helpAnswer: '40 <sup>6</sup>&#8260;<sub>7</sub>',
				template: 'questionWithDescription' 
			},
			{ // problem 12
				questionDesc: dataUtils.pre('\\html{Solve for the circumference. <br>Use <sup>22</sup>/<sub>7</sub> for &pi;. Give the answer as a mixed number.}'),
				illustration: 'S.2/Circle_r_3_1-3miles_v2.jpg',
				unitsAnswer: 'mi',
				unitsPower: 'mi',
				unitsSelect: '[\\"mi\\",\\"mi&sup2;\\",\\"mi&sup3;\\"]',
				identifyShape: 'Circle',
                formula: 'P = &pi; <font size = 4>&bull;</font> 2r',
				substitution: 'P = <sup>22</sup>&#8260;<sub>7</sub> <font size = 4>&bull; 2( 3 <sup>1</sup>&#8260;<sub>3</sub> )',
				lineOneSolve: 'P = 20 <sup>20</sup>&#8260;<sub>21</sub> ',
				desc: '',
				finalAnswer: dataUtils.pre('\\mixed{\\input{20}}{\\frac{\\input{20}}{\\input{21}}}'),
				helpAnswer: '20 <sup>20</sup>&#8260;<sub>21</sub>',
				template: 'questionWithDescription' 
			},
			{ // problem 13
				questionDesc: dataUtils.pre('\\html{Solve for the circumference. <br>Use <sup>22</sup>/<sub>7</sub> for &pi;. Give the answer as a mixed number.}'),
				illustration: 'S.2/Circle_d_8_2-5cm_v2.jpg',
				unitsAnswer: 'cm',
				unitsPower: 'cm',
				unitsSelect: '[\\"cm\\",\\"cm&sup2;\\",\\"cm&sup3;\\"]',
				identifyShape: 'Circle',
                formula: 'P = &pi; <font size = 4>&bull;</font> d',
				substitution: 'P = <sup>22</sup>&#8260;<sub>7</sub> <font size = 4>&bull; 8 <sup>2</sup>&#8260;<sub>5</sub>',
				lineOneSolve: 'P = 26 <sup>2</sup>&#8260;<sub>5</sub> ',
				desc: '',
				finalAnswer: dataUtils.pre('\\mixed{\\input{26}}{\\frac{\\input{2}}{\\input{5}}}'),
				helpAnswer: '26 <sup>2</sup>&#8260;<sub>5</sub>',
				template: 'questionWithDescription' 
			},
			{ // problem 14
				questionDesc: dataUtils.pre('\\html{Solve for the circumference. <br>Use <sup>22</sup>/<sub>7</sub> for &pi;. Give the answer as a mixed number.}'),
				illustration: 'S.2/Circle_d_4_1-2m_v2.jpg',
				unitsAnswer: 'm',
				unitsPower: 'm',
				unitsSelect: '[\\"m\\",\\"m&sup2;\\",\\"m&sup3;\\"]',
				identifyShape: 'Circle',
                formula: 'P = &pi; <font size = 4>&bull;</font> d',
				substitution: 'P = <sup>22</sup>&#8260;<sub>7</sub> <font size = 4>&bull; 4 <sup>1</sup>&#8260;<sub>2</sub>',
				lineOneSolve: 'P = 14 <sup>1</sup>&#8260;<sub>7</sub> ',
				desc: '',
				finalAnswer: dataUtils.pre('\\mixed{\\input{14}}{\\frac{\\input{1}}{\\input{7}}}'),
				helpAnswer: '14 <sup>1</sup>&#8260;<sub>7</sub>',
				template: 'questionWithDescription' 
			},
			{ // problem 15
				questionDesc: dataUtils.pre('\\html{Solve for the circumference. <br>Use <sup>22</sup>/<sub>7</sub> for &pi;. Give the answer as a mixed number.}'),
				illustration: 'S.2/Circle_r_8_2-5cm_v2.jpg',
				unitsAnswer: 'cm',
				unitsPower: 'cm',
				unitsSelect: '[\\"cm\\",\\"cm&sup2;\\",\\"cm&sup3;\\"]',
				identifyShape: 'Circle',
                formula: 'P = &pi; <font size = 4>&bull;</font> 2r',
				substitution: 'P = <sup>22</sup>&#8260;<sub>7</sub> <font size = 4>&bull; 2(8 <sup>2</sup>&#8260;<sub>5</sub> )',
				lineOneSolve: 'P = 52 <sup>4</sup>&#8260;<sub>5</sub> ',
				desc: '',
				finalAnswer: dataUtils.pre('\\mixed{\\input{52}}{\\frac{\\input{4}}{\\input{5}}}'),
				helpAnswer: '52 <sup>4</sup>&#8260;<sub>5</sub>',
				template: 'questionWithDescription' 
			},
        ];
	
	/*shuffle = [
				{ problems: [1,2,3,4,5,6,7,8,9,10], total: 8},
				{ problems: [11,12], total: 1},
				{ problems: [13,14,15,16], total: 1}
		];

    
    	return dataUtils.build(desc, template, data, shuffle);*/

    return dataUtils.build(desc, template, data);
	
}]);
