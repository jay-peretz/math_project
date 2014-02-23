/*global angular */

angular.module('mathSkills').service('data_g_1', ['dataUtils', function (dataUtils) {
    var desc = {
            title: 'G.1 Addition and Subtraction of Like Fractions',
            path: 'G.1-addition-and-subtraction-of-like-fraction',
            children: []
        },
        template = {
			addition: { 
					title: 'Add and Subtract Like Fractions',
					children: [{
						title: 'addition Answer',
						children: [{
							problem: '\\grp{\\frac{\\str{$n1}}{\\str{$d1}}}{\\sign{+}}{\\frac{\\str{$n2}}{\\str{$d2}}',
							answer: '$answer',
							controls: {
								"checkAnswer": true,
								"help": '$help'
							}
						}]
					}]
			},
			subtraction: { 
				title: 'Add and Subtract Like Fractions',
				children: [{
					title: 'Main Answer',
					children: [{
						problem: '\\grp{\\frac{\\str{$n1}}{\\str{$d1}}}{\\sign{-}}{\\frac{\\str{$n2}}{\\str{$d2}}',
						answer: '$answer',
						controls: {
							"checkAnswer": true,
							"help": '$help'
						}
					}]
				}]
			},
			additionThree: { 
					title: 'Add and Subtract Like Fractions',
					children: [{
						title: 'addition Answer',
						children: [{
							problem: '\\grp{\\frac{\\str{$n1}}{\\str{$d1}}}{\\sign{+}}{\\frac{\\str{$n2}}{\\str{$d2}}}{\\sign{+}}{\\frac{\\str{$n3}}{\\str{$d3}}}',
							answer: '$answer',
							controls: {
								"checkAnswer": true,
								"help": '$help'
							}
						}]
					}]
			},
			subtractionThree: { 
				title: 'Add and Subtract Like Fractions',
				children: [{
					title: 'Main Answer',
					children: [{
						problem: '\\grp{\\frac{\\str{$n1}}{\\str{$d1}}}{\\sign{-}}{\\frac{\\str{$n2}}{\\str{$d2}}}{\\sign{-}}{\\frac{\\str{$n3}}{\\str{$d3}}}',
						answer: '$answer',
						controls: {
							"checkAnswer": true,
							"help": '$help'
						}
					}]
				}]
			},
			mixedThree: { 
				title: 'Add and Subtract Like Fractions',
				children: [{
					title: 'Main Answer',
					children: [{
						problem: '$problem',
						answer: '$answer',
						controls: {
							"checkAnswer": true,
							"help": '$help'
						}
					}]
				}]
			}
		},
        data = [
			// problem 1			
            { n1: 1, d1: 7, n2: 3, d2: 7, na: 4, da: 7,
			  answer: dataUtils.pre('\\grp{\\sign{=}}{\\frac{\\input{$$na}}{\\input{$$da}}}'),
			  help:dataUtils.pre('\\grp{\\frac{\\str{$$n1}}{\\str{$$d1}}}{\\sign{+}}{\\frac{\\str{$$n2}}{\\str{$$d2}}}{\\sign{=}}{\\frac{\\str{$$na}}{\\str{$$da}}}'),
			  template: 'addition'
			},
			// problem 2	
            { n1: 7, d1: 11, n2: 2, d2: 11, na: 5, da: 11,
			  answer: dataUtils.pre('\\grp{\\sign{=}}{\\frac{\\input{$$na}}{\\input{$$da}}}'),
			  help:dataUtils.pre('\\grp{\\frac{\\str{$$n1}}{\\str{$$d1}}}{\\sign{-}}{\\frac{\\str{$$n2}}{\\str{$$d2}}}{\\sign{=}}{\\frac{\\str{$$na}}{\\str{$$da}}}'),
			  template: 'subtraction' 
			},
			// problem 3	
	        { n1: 7, d1: 8, n2: 3, d2: 8, n3: 1, d3: 8, na: 3, da: 8,
			  answer: dataUtils.pre('\\grp{\\sign{=}}{\\frac{\\input{$$na}}{\\input{$$da}}}'),
			  help:dataUtils.pre('\\grp{\\frac{\\str{$$n1}}{\\str{$$d1}}}{\\sign{-}}{\\frac{\\str{$$n2}}{\\str{$$d2}}}{\\sign{-}}{\\frac{\\str{$$n3}}{\\str{$$d3}}}{\\sign{=}}{\\frac{\\str{$$na}}{\\str{$$da}}}'),
			  template: 'subtractionThree' 
			},
			// problem 4	
		    { n1: 1, d1: 12, n2: 5, d2: 12, n3: 1, d3: 12, na: 7, da: 12,
			  answer: dataUtils.pre('\\grp{\\sign{=}}{\\frac{\\input{$$na}}{\\input{$$da}}}'),
			  help:dataUtils.pre('\\grp{\\frac{\\str{$$n1}}{\\str{$$d1}}}{\\sign{+}}{\\frac{\\str{$$n2}}{\\str{$$d2}}}{\\sign{+}}{\\frac{\\str{$$n3}}{\\str{$$d3}}}{\\sign{=}}{\\frac{\\str{$$na}}{\\str{$$da}}}'),
			  template: 'additionThree' 
			},
			// problem 5	
		    { n1: 3, d1: 5, n2: 2, d2: 5, nha: 5, dha: 5, wa: 1,
			  answer: dataUtils.pre('\\grp{\\sign{=}}{\\input{$$wa}}'),
			  help:dataUtils.pre('\\grp{\\frac{\\str{$$n1}}{\\str{$$d1}}}{\\sign{+}}{\\frac{\\str{$$n2}}{\\str{$$d2}}}{\\sign{=}}{\\frac{\\str{$$nha}}{\\str{$$dha}}}{\\sign{=}}{\\str{$$wa}}'),
			  template: 'addition' 
			},
			// problem 6
    		{ n1: 7, d1: 3, n2: 1, d2: 3, nha: 6, dha: 3, wa: 2,
			  answer: dataUtils.pre('\\grp{\\sign{=}}{\\input{$$wa}}'),
			  help:dataUtils.pre('\\grp{\\frac{\\str{$$n1}}{\\str{$$d1}}}{\\sign{-}}{\\frac{\\str{$$n2}}{\\str{$$d2}}}{\\sign{=}}{\\frac{\\str{$$nha}}{\\str{$$dha}}}{\\sign{=}}{\\str{$$wa}}'),
			  template: 'subtraction' 
			},
			// problem 7
			{ n1: 4, d1: 9, n2: 2, d2: 9, n3: 8, d3: 9, nha: 14, dha: 9, wa: 1, na: 5, da: 9,
			  answer: dataUtils.pre('\\grp{\\sign{=}}{\\mixed{\\input{$$wa}}{\\frac{\\input{$$na}}{\\input{$$da}}}}'),
			  help:dataUtils.pre('\\grp{\\frac{\\str{$$n1}}{\\str{$$d1}}}{\\sign{+}}{\\frac{\\str{$$n2}}{\\str{$$d2}}}{\\sign{+}}{\\frac{\\str{$$n3}}{\\str{$$d3}}}{\\sign{=}}{\\frac{\\str{$$nha}}{\\str{$$dha}}}{\\sign{=}}{\\mixed{\\str{$$wa}}{\\frac{\\str{$$na}}{\\str{$$da}}}}'),
			  template: 'additionThree' 
			},
			// problem 8
			{ n1: 13, d1: 4, n2: 3, d2: 4, n3: 1, d3: 4, nha: 9, dha: 4, wa: 2, na: 1, da: 4,
			  answer: dataUtils.pre('\\grp{\\sign{=}}{\\mixed{\\input{$$wa}}{\\frac{\\input{$$na}}{\\input{$$da}}}}'),
			  help:dataUtils.pre('\\grp{\\frac{\\str{$$n1}}{\\str{$$d1}}}{\\sign{-}}{\\frac{\\str{$$n2}}{\\str{$$d2}}}{\\sign{-}}{\\frac{\\str{$$n3}}{\\str{$$d3}}}{\\sign{=}}{\\frac{\\str{$$nha}}{\\str{$$dha}}}{\\sign{=}}{\\mixed{\\str{$$wa}}{\\frac{\\str{$$na}}{\\str{$$da}}}}'), 
			  template: 'subtractionThree' 
			},
			// problem 9
		    { n1: 3, d1: 10, n2: 2, d2: 10, n3: 3, d3: 10, nha: 4, dha: 10, na: 2, da: 5,
			  problem: dataUtils.pre('\\grp{\\frac{\\str{$$n1}}{\\str{$$d1}}}{\\sign{-}}{\\frac{\\str{$$n2}}{\\str{$$d2}}}{\\sign{+}}{\\frac{\\str{$$n3}}{\\str{$$d3}}}'),
			  answer: dataUtils.pre('\\grp{\\sign{=}}{\\frac{\\input{$$na}}{\\input{$$da}}}'),
			  help:dataUtils.pre('\\grp{\\frac{\\str{$$n1}}{\\str{$$d1}}}{\\sign{-}}{\\frac{\\str{$$n2}}{\\str{$$d2}}}{\\sign{+}}{\\frac{\\str{$$n3}}{\\str{$$d3}}}{\\sign{=}}{\\frac{\\str{$$nha}}{\\str{$$dha}}}{\\sign{=}}{\\frac{\\str{$$na}}{\\str{$$da}}}'),
			  template: 'mixedThree' 
			},
			// problem 10
			{ n1: 17, d1: 8, n2: 3, d2: 8, n3: 2, d3: 8, nha1: 18, dha1: 8, nha2: 9, dha2: 4, wa: 2, na: 1, da: 4,
			  problem: dataUtils.pre('\\grp{\\frac{\\str{$$n1}}{\\str{$$d1}}}{\\sign{+}}{\\frac{\\str{$$n2}}{\\str{$$d2}}}{\\sign{-}}{\\frac{\\str{$$n3}}{\\str{$$d3}}}'),
			  answer: dataUtils.pre('\\grp{\\sign{=}}{\\mixed{\\input{$$wa}}{\\frac{\\input{$$na}}{\\input{$$da}}}}'),
			  help:dataUtils.pre('\\grp{\\frac{\\str{$$n1}}{\\str{$$d1}}}{\\sign{+}}{\\frac{\\str{$$n2}}{\\str{$$d2}}}{\\sign{-}}{\\frac{\\str{$$n3}}{\\str{$$d3}}}{\\sign{=}}{\\frac{\\str{$$nha1}}{\\str{$$dha1}}}{\\sign{=}}{\\frac{\\str{$$nha2}}{\\str{$$dha2}}}{\\sign{=}}{\\mixed{\\str{$$wa}}{\\frac{\\str{$$na}}{\\str{$$da}}}}'),
			  template: 'mixedThree' 
			},
        ];
		//dataUtils.pre(''),

    return dataUtils.build(desc, template, data);
}]);
