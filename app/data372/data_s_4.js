/*global angular */

angular.module('mathSkills').service('data_s_4', ['dataUtils', function (dataUtils) {
    var desc = {
			title: 'S.4 Area of Circles',
    		path: 'S.4-area-of-circles',
            children: []
        },
        template = {
			informationalAnswer: {
                title: 'Area of Circles',
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
										+'{$line4}'
										+'{\\html{&nbsp;}}'
										+'{\\css'
											+'{\\grp'
												+'{\\html{Answer: &nbsp;}}'
												+'{$helpAnswer}'
												+'{\\html{$unitsAnswer}}'
											+'}'
											+'{help-answer-text}'
										+'}'
                        }
                    }]
                }]
            },
            topDescrQuestion: {
                title: 'Area of Circles',
                children: [{
                    title: 'Main Answer',
                    children: [{
						problem: '\\rowgrp'
									+'{\\html{$questionDesc}}'
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
										+'{\\html{$topDescr}}'
										+'{\\html{&nbsp;}}'
										+'{\\html{<table><tr><td>Write the formula:&nbsp;&nbsp;</td><td>$formula</td></tr>'
										+'<tr><td>Substitution:&nbsp;&nbsp;</td><td>$substitution</td></tr>'
										+'<tr><td>Solve:&nbsp;&nbsp;</td><td> $lineOneSolve</td></tr>'
										+'<tr><td>&nbsp;</td><td> $lineTwoSolve</td></tr>'
										+'</table>}}'
										+'{\\html{$btmDescr}}'
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
            btmDescrQuestion: {
                title: 'Area of Circles',
                children: [{
                    title: 'Main Answer',
                    children: [{
						problem: '\\rowgrp'
									+'{\\html{$questionDesc}}'
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
										+'<tr><td>&nbsp;</td><td> $lineTwoSolve</td></tr>'
										+'</table>}}'
										+'{\\html{&nbsp;}}'
										+'{\\html{$btmDescr}}'
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
				questionDesc: dataUtils.pre('\\grp{\\html{If the diameter of a circle is 4 <sup>2</sup>&#8260;<sub>3</sub> feet, what is the radius?}}'),
				illustration: '',
				unitsAnswer: 'ft',
				unitsPower: 'ft',
				unitsSelect: '[\\"ft\\",\\"ft&sup2;\\",\\"ft&sup3\\"]',
				line1: dataUtils.pre('\\html{The diameter is the distance from one edge of the circle to its opposite edge (passing through the circle\'s center point).}'),
			    line2: dataUtils.pre('\\html{The radius is the distance from the center point of the circle to its edge.}'),
				line3: dataUtils.pre('\\html{The radius is <sup>1</sup>&#8260;<sub>2</sub> the length of the diameter.}'),
				line4: dataUtils.pre('\\grp{\\frac{\\str{1}}{\\str{2}}}{\\str{*}}{\\mixed{\\str{4}}{\\frac{\\str{2}}{\\str{3}}}}{\\str{=}}{\\frac{\\str{7}}{\\str{3}}}{\\str{or}}{\\mixed{\\str{2}}{\\frac{\\str{1}}{\\str{3}}}}'),
				finalAnswer: dataUtils.pre('\\grp{\\mixed{\\input{2}}{\\frac{\\input{1}}{\\input{3}}}}'),
				helpAnswer: dataUtils.pre('\\grp{\\mixed{\\str{2}}{\\frac{\\str{1}}{\\str{3}}}}'), 
				template: 'informationalAnswer' 
			}, 
			{ // problem 2
				questionDesc: dataUtils.pre('\\grp{\\html{If the diameter of a circle is 2 <sup>1</sup>&#8260;<sub>4</sub> feet, what is the radius?}}'),
				illustration: '',
				unitsAnswer: 'ft',
				unitsPower: 'ft',
				unitsSelect: '[\\"ft\\",\\"ft&sup2;\\",\\"ft&sup3\\"]',
				line1: dataUtils.pre('\\html{The radius is the distance from the center point of the circle to its edge.}'),
			    line2: dataUtils.pre('\\html{The diameter is the distance from one edge of the circle to its opposite edge (passing through the circle’s center point).}'),
				line3: dataUtils.pre('\\html{The diameter is 2 times the length of the radius.}'),
				line4: dataUtils.pre('\\grp{\\mixed{\\str{2}}{\\frac{\\str{1}}{\\str{4}}}}{\\str{*}}{\\html{2}}{\\str{=}}{\\mixed{\\str{4}}{\\frac{\\str{1}}{\\str{2}}}}'),
				finalAnswer: dataUtils.pre('\\grp{\\mixed{\\input{4}}{\\frac{\\input{1}}{\\input{2}}}}'),
				helpAnswer: dataUtils.pre('\\grp{\\mixed{\\str{4}}{\\frac{\\str{1}}{\\str{2}}}}'), 
				template: 'informationalAnswer' 
			}, 
			{ // problem 3
				questionDesc: 'Solve for the area. Use 3.14 for &pi;',
				illustration: 'S.2/Circle_d_20cm_v2.jpg',
				unitsAnswer: 'cm<sup>2</sup>',
				unitsPower: 'cm&sup2;',
				unitsSelect: '[\\"cm\\",\\"cm&sup2;\\",\\"cm&sup3\\"]',
				identifyShape: 'Circle',
				topDescr: 'The diameter is 20 cm. Therefore, the radius is 10 cm.',
                formula: 'A = &pi; <font size = 4>&bull;</font> r<sup>2</sup>',
				substitution: 'A = 3.14 <font size = 4>&bull;</font> 10<sup>2</sup>',
				lineOneSolve: 'A = 3.14 <font size = 4>&bull;</font> 100',
				lineTwoSolve: 'A = 314',
				btmDescr: '',
				finalAnswer: dataUtils.pre('\\input{314}'),
				helpAnswer: '314',
				template: 'topDescrQuestion'  
			}, 
			{ // problem 4
				questionDesc: 'Solve for the area. Use 3.14 for &pi;',
				illustration: 'S.2/Circle_d_32in_v2.jpg',
				unitsAnswer: 'in<sup>2</sup>',
				unitsPower: 'in&sup2;',
				unitsSelect: '[\\"in\\",\\"in&sup2;\\",\\"in&sup3\\"]',
				identifyShape: 'Circle',
				topDescr: 'The diameter is 32 in. Therefore, the radius is 16 in.',
                formula: 'A = &pi; <font size = 4>&bull;</font> r<sup>2</sup>',
				substitution: 'A = 3.14 <font size = 4>&bull;</font> 16<sup>2</sup>',
				lineOneSolve: 'A = 3.14 <font size = 4>&bull;</font> 256',
				lineTwoSolve: 'A = 803.84',
				btmDescr: '',
				finalAnswer: dataUtils.pre('\\input{803.84}'),
				helpAnswer: '803.84',
				template: 'topDescrQuestion' 
			},    
			{ // problem 5
				questionDesc: 'Solve for the area. Use 3.14 for &pi;. Round answer to the nearest whole.',
				illustration: 'S.2/Circle_r_18m_v2.jpg',
				unitsAnswer: 'm<sup>2</sup>',
				unitsPower: 'm&sup2;',
				unitsSelect: '[\\"m\\",\\"m&sup2;\\",\\"m&sup3\\"]',
				identifyShape: 'Circle',
				topDescr: '',
                formula: 'A = &pi; <font size = 4>&bull;</font> r<sup>2</sup>',
				substitution: 'A = 3.14 <font size = 4>&bull;</font> 18<sup>2</sup>',
				lineOneSolve: 'A = 3.14 <font size = 4>&bull;</font> 324',
				lineTwoSolve: 'A = 1017.36',
				btmDescr: 'Round answer to the nearest whole.',
				finalAnswer: dataUtils.pre('\\input{1017}'),
				helpAnswer: '1017',
				template: 'btmDescrQuestion'  
			},
			{ // problem 6
				questionDesc: 'Solve for the area. Use 3.14 for &pi;. Round answer to the nearest whole.',
				illustration: 'S.2/Circle_r_8yds_v2.jpg',
				unitsAnswer: 'yd<sup>2</sup>',
				unitsPower: 'yd&sup2;',
				unitsSelect: '[\\"yd\\",\\"yd&sup2;\\",\\"yd&sup3\\"]',
				identifyShape: 'Circle',
				topDescr: '',
                formula: 'A = &pi; <font size = 4>&bull;</font> r<sup>2</sup>',
				substitution: 'A = 3.14 <font size = 4>&bull;</font> 8<sup>2</sup>',
				lineOneSolve: 'A = 3.14 <font size = 4>&bull;</font> 64',
				lineTwoSolve: 'A = 200.96',
				btmDescr: 'Round answer to the nearest whole.',
				finalAnswer: dataUtils.pre('\\input{201}'),
				helpAnswer: '201',
				template: 'btmDescrQuestion' 
			},
			{ // problem 7
				questionDesc: 'Solve for the area. Use 3.14 for &pi;. Round answer to the nearest whole.',
				illustration: 'S.2/Circle_d_6-3ft_v2.jpg',
				unitsAnswer: 'ft<sup>2</sup>',
				unitsPower: 'ft&sup2;',
				unitsSelect: '[\\"ft\\",\\"ft&sup2;\\",\\"ft&sup3\\"]',
				identifyShape: 'Circle',
				topDescr: 'The diameter is 6.3 ft. Therefore, the radius is 3.15 ft.',
                formula: 'A = &pi; <font size = 4>&bull;</font> r<sup>2</sup>',
				substitution: 'A = 3.14 <font size = 4>&bull;</font> 3.15<sup>2</sup>',
				lineOneSolve: 'A = 3.14 <font size = 4>&bull;</font> 9.9225',
				lineTwoSolve: 'A = 31.15665',
				btmDescr: 'Round answer to the nearest whole.',
				finalAnswer: dataUtils.pre('\\input{31}'),
				helpAnswer: '31',
				template: 'topDescrQuestion' 
			},
			{ // problem 8
				questionDesc: 'Solve for the area. Use 3.14 for &pi;. Round answer to the nearest whole.',
				illustration: 'S.2/Circle_r_13-09ft_v2.jpg',
				unitsAnswer: 'ft<sup>2</sup>',
				unitsPower: 'ft&sup2;',
				unitsSelect: '[\\"ft\\",\\"ft&sup2;\\",\\"ft&sup3\\"]',
				identifyShape: 'Circle',
				topDescr: '',
                formula: 'A = &pi; <font size = 4>&bull;</font> r<sup>2</sup>',
				substitution: 'A = 3.14 <font size = 4>&bull;</font> 13.09<sup>2</sup>',
				lineOneSolve: 'A = 3.14 <font size = 4>&bull;</font> 171.3481',
				lineTwoSolve: 'A = 538.033034',
				btmDescr: 'Round answer to the nearest whole.',
				finalAnswer: dataUtils.pre('\\input{538}'),
				helpAnswer: '538',
				template: 'btmDescrQuestion' 
			},
			{ // problem 9
				questionDesc: 'Solve for the area. Use <sup>22</sup>&#8260;<sub>7</sub> for &pi;. Give the answer as a mixed number.',
				illustration: 'S.2/Circle_r_6_1-2in_v2.jpg',
				unitsAnswer: 'in<sup>2</sup>',
				unitsPower: 'in&sup2;',
				unitsSelect: '[\\"in\\",\\"in&sup2;\\",\\"in&sup3\\"]',
				identifyShape: 'Circle',
				topDescr: '',
                formula: 'A = &pi; <font size = 4>&bull;</font> r<sup>2</sup>',
				substitution: 'A = <sup>22</sup>&#8260;<sub>7</sub> <font size = 4>&bull;</font> (6 <sup>1</sup>&#8260;<sub>2</sub>)<sup>2</sup>',
				lineOneSolve: 'A = <sup>22</sup>&#8260;<sub>7</sub> <font size = 4>&bull;</font> 42 <sup>1</sup>&#8260;<sub>4</sub>',
				lineTwoSolve: 'A = 132 <sup>11</sup>&#8260;<sub>14</sub>',
				btmDescr: '',
				finalAnswer: dataUtils.pre('\\grp{\\mixed{\\input{132}}{\\frac{\\input{11}}{\\input{14}}}}'),
				helpAnswer: '132 <sup>11</sup>&#8260;<sub>14</sub>',
				//helpAnswer: dataUtils.pre('\\grp{\\mixed{\\str{132}}{\\frac{\\str{11}}{\\str{14}}}}'), 
				template: 'btmDescrQuestion' 
			},
			{ // problem 10
				questionDesc: 'Solve for the area. Use <sup>22</sup>&#8260;<sub>7</sub> for &pi;. Give the answer as a mixed number.',
				illustration: 'S.2/Circle_r_3_1-3miles_v2.jpg',
				unitsAnswer: 'mi<sup>2</sup>',
				unitsPower: 'mi&sup2;',
				unitsSelect: '[\\"mi\\",\\"mi&sup2;\\",\\"mi&sup3\\"]',
				identifyShape: 'Circle',
				topDescr: '',
                formula: 'A = &pi; <font size = 4>&bull;</font> r<sup>2</sup>',
				substitution: 'A = <sup>22</sup>&#8260;<sub>7</sub> <font size = 4>&bull;</font> (3 <sup>1</sup>&#8260;<sub>3</sub>)<sup>2</sup>',
				lineOneSolve: 'A = <sup>22</sup>&#8260;<sub>7</sub> <font size = 4>&bull;</font> 11 <sup>1</sup>&#8260;<sub>9</sub>',
				lineTwoSolve: 'A = 34 <sup>58</sup>&#8260;<sub>63</sub>',
				btmDescr: 'Give the answer as a mixed number.',
				finalAnswer: dataUtils.pre('\\grp{\\mixed{\\input{34}}{\\frac{\\input{58}}{\\input{63}}}}'),
				helpAnswer: '34 <sup>58</sup>&#8260;<sub>63</sub>',
				template: 'btmDescrQuestion' 
			},
			{ // problem 11
				questionDesc: 'Solve for the area. Use <sup>22</sup>&#8260;<sub>7</sub> for &pi;. Give the answer as a mixed number.',
				illustration: 'S.2/Circle_d_8_2-5cm_v2.jpg',
				unitsAnswer: 'cm<sup>2</sup>',
				unitsPower: 'cm&sup2;',
				unitsSelect: '[\\"cm\\",\\"cm&sup2;\\",\\"cm&sup3\\"]',
				identifyShape: 'Circle',
				topDescr: 'The diameter is 8 <sup>2</sup>&#8260;<sub>5</sub> cm. Therefore, the radius is 4 <sup>1</sup>&#8260;<sub>5</sub> cm.',
                formula: 'A = &pi; <font size = 4>&bull;</font> r<sup>2</sup>',
				substitution: 'A = <sup>22</sup>&#8260;<sub>7</sub> <font size = 4>&bull;</font> (4 <sup>1</sup>&#8260;<sub>5</sub>)<sup>2</sup>',
				lineOneSolve: 'A = <sup>22</sup>&#8260;<sub>7</sub> <font size = 4>&bull;</font> 17 <sup>16</sup>&#8260;<sub>25</sub>',
				lineTwoSolve: 'A = 55 <sup>11</sup>&#8260;<sub>25</sub>',
				btmDescr: '',
				finalAnswer: dataUtils.pre('\\grp{\\mixed{\\input{55}}{\\frac{\\input{11}}{\\input{25}}}}'),
				helpAnswer: '55 <sup>11</sup>&#8260;<sub>25</sub>',
				template: 'topDescrQuestion'  
			},
			{ // problem 12
				questionDesc: 'Solve for the area. Use <sup>22</sup>&#8260;<sub>7</sub> for &pi;. Give the answer as a mixed number.',
				illustration: 'S.2/Circle_d_4_1-2m_v2.jpg',
				unitsAnswer: 'm<sup>2</sup>',
				unitsPower: 'm&sup2;',
				unitsSelect: '[\\"m\\",\\"m&sup2;\\",\\"m&sup3\\"]',
				identifyShape: 'Circle',
				topDescr: 'The diameter is 4 <sup>1</sup>&#8260;<sub>2</sub> m. Therefore, the radius is 2 <sup>1</sup>&#8260;<sub>4</sub> m.',
                formula: 'A = &pi; <font size = 4>&bull;</font> r<sup>2</sup>',
				substitution: 'A = <sup>22</sup>&#8260;<sub>7</sub> <font size = 4>&bull;</font> (2 <sup>1</sup>&#8260;<sub>4</sub>)<sup>2</sup>',
				lineOneSolve: 'A = <sup>22</sup>&#8260;<sub>7</sub> <font size = 4>&bull;</font> 5 <sup>1</sup>&#8260;<sub>16</sub>',
				lineTwoSolve: 'A = 15 <sup>51</sup>&#8260;<sub>56</sub>',
				btmDescr: '',
				finalAnswer: dataUtils.pre('\\grp{\\mixed{\\input{15}}{\\frac{\\input{51}}{\\input{56}}}}'),
				helpAnswer: '15 <sup>51</sup>&#8260;<sub>56</sub>',
				template: 'topDescrQuestion'  
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

