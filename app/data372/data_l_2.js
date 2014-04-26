
/*global angular */

angular.module('mathSkills').service('data_l_2', ['dataUtils', function (dataUtils) {
    var desc = {
			title: 'L.2 Dividing Integers, Decimals, Fractions and Mixed Numbers',
    		path: 'L.2-dividing-integers-decimals-fractions',
            children: []
        },
        template = {
			// first template, integers operation
			first: {
                title: 'Evaluate Signed Expressions',
                children: [{
                    title: 'Main Answer',
                    children: [{
						problem: '\\rowgrp'
								  +'$prob',
						answer:  '$answer',
						answer: '$answer',
						controls: {
									"checkAnswer": true,
									"help": '\\rowgrp'
											+'$firstHelp'
											+'{\\html{&nbsp;}}'
											+'{css{\\grp{\\html{Answer: }}$textAnswer}{help-answer-text}}'
							}
						}]
					}]
				},
        },
        data = [
			
			// problem 1
			{prob: dataUtils.pre('{\\grp{\\html{( &minus;16 )}}{\\sign{&divide;}}{html{4}}}'),
			answer: dataUtils.pre('\\grp{\\sign{=}}{\\input{-4}}'),
			textAnswer: dataUtils.pre('{\\html{&nbsp;}}{html{&minus; 4}}'),
			template: 'first',
			firstHelp: dataUtils.pre('{\\grp{\\html{The 16 is negative and the 4 is positive. Because there is one negative sign (<span class=underline>an odd number of negative signs</span>) in this division problem, the answer is negative.}}}') },
			
			// problem 2
			{prob: dataUtils.pre('{\\grp{html{&minus; 20}}{\\sign{&divide;}}{html{&minus; 2}}'),
			answer: dataUtils.pre('\\grp{\\sign{=}}{\\input{10}}'), 
			textAnswer: dataUtils.pre('{\\html{&nbsp;}}{html{10}}'), 
			template: 'first',
			firstHelp: dataUtils.pre('{\\grp{\\html{The 20 is negative and the 2 is negative. Because there are two negative signs (<span class=underline>an even number of negative signs</span>) in this division problem, the answer is positive.}}}') },
											
			// problem 3
			{prob: dataUtils.pre('{\\grp{\\html{(&minus;10)}}{\\sign{&divide;}}{html{5}}{\\sign{&divide;}}{\\html{(&minus;4)}}}'),
			answer: dataUtils.pre('\\grp{\\sign{=}}{\\input{0.5}}'),  
			textAnswer: dataUtils.pre('{\\html{&nbsp;}}{html{0.5}}'),
			template: 'first',
			firstHelp: dataUtils.pre('{\\grp{\\html{The 10 is negative, the 5 is positive and the 4 is negative. Because there are two negative signs (<span class=underline>an even number of negative signs</span>) in this division problem, the answer is positive.}}}') },
			
			// problem 4
			{prob: dataUtils.pre('{\\grp{\\html{(&minus;180)}}{\\sign{&divide;}}{\\html{(&minus;0.3)}}}'),
			answer: dataUtils.pre('\\grp{\\sign{=}}{\\input{600}}'), 
			textAnswer: dataUtils.pre('{\\html{&nbsp;}}{html{600}}'), 
			template: 'first',
			firstHelp: dataUtils.pre('{\\grp{\\html{The 180 is negative and the 0.3 is negative. Because there are two negative signs (<span class=underline>an even number of negative signs</span>) in this division problem, the answer is positive.}}}') },
			
			// problem 5
			{prob: dataUtils.pre('{\\grp{html{129.6}}{\\sign{&divide;}}{\\html{(&minus;32)}}}'),
			answer: dataUtils.pre('\\grp{\\sign{=}}{\\input{-4.05}}'),	 
			textAnswer: dataUtils.pre('{\\html{&nbsp;&minus; 4.05}}'),
			template: 'first',
			firstHelp: dataUtils.pre('{\\grp{\\html{The 129.6 is positive and the 32 is negative. Because there is one negative sign (<span class=underline>an odd number of negative signs</span>) in this division problem, the answer is negative.}}}') },
			
			// problem 6
			{prob: dataUtils.pre('{\\grp{\\html{( &minus;}}{\\frac{\\str{3}}{\\str{7}}}{\\html{)}}{\\sign{&divide;}}{html{8}}}'),
			answer:dataUtils.pre('\\grp{\\sign{=}}{\\frac{\\input{-3}}{\\input{56}}}'),	
			textAnswer: dataUtils.pre('{\\grp{\\html{&nbsp;&minus;}}{\\frac{\\str{3}}{\\str{56}}}}'), 
			template: 'first',
			firstHelp: dataUtils.pre('{\\grp{\\html{The <sup>3</sup>&#8260;<sub>7</sub> is negative and the 8 is positive. Because there is one negative sign (<span class=underline>an odd number of negative signs</span>) in this division problem, the answer is negative.}}}') },

			// problem 7
			{prob: dataUtils.pre('{\\grp{\\html{( &minus;}}{\\frac{\\str{5}}{\\str{8}}}{\\html{)}}{\\sign{&divide;}}{\\html{( &minus;}}{\\frac{\\str{15}}{\\str{16}}}{\\html{)}}}'),
			answer:dataUtils.pre('\\grp{\\sign{=}}{\\frac{\\input{2}}{\\input{3}}}'),	
			textAnswer: dataUtils.pre('{\\frac{\\str{2}}{\\str{3}}}'), 
			template: 'first',
			firstHelp: dataUtils.pre('{\\grp{\\html{The <sup>5</sup>&#8260;<sub>8</sub> is negative and the <sup>15</sup>&#8260;<sub>16</sub> is negative. Because there are two negative signs (<span class=underline>an even number of negative signs</span>) in this division problem, the answer is positive.}}}') },

			// problem 8
			{prob: dataUtils.pre('{\\grp{\\html{(&minus;}}{\\frac{\\str{3}}{\\str{4}}}{\\html{)}}{\\sign{&divide;}}{\\html{(&minus;}}{\\frac{\\str{7}}{\\str{10}}}{\\html{)}}{\\html{&divide; (&minus; 5)}}}'),
			answer:dataUtils.pre('\\grp{\\sign{=}}{\\frac{\\input{-3}}{\\input{14}}}'),	
			textAnswer: dataUtils.pre('{\\html{&nbsp;&minus;}}{\\frac{\\str{3}}{\\str{14}}}'), 
			template: 'first',
			firstHelp: dataUtils.pre('{\\grp{\\html{The <sup>3</sup>&#8260;<sub>4</sub> is negative and the <sup>7</sup>&#8260;<sub>10</sub> is negative and the 5 is negative. Because there are three negative signs (<span class=underline>an odd number of negative signs</span>) in this division problem, the answer is negative.}}}')} ,

			// problem 9
			{prob: dataUtils.pre('{\\grp{\\mixed{\\str{2}}{\\frac{\\fracstr{4}}{\\fracstr{5}}}}{\\sign{&divide;}}{\\html{(&minus;}}{\\mixed{\\str{2}}{\\frac{\\fracstr{1}}{\\fracstr{3}}}}{\\html{)}}}'),
			answer:dataUtils.pre('\\grp{\\sign{=}}{\\mixed{\\input{-1}}{\\frac{\\input{1}}{\\input{5}}}}'),		
			textAnswer: dataUtils.pre('{\\html{&nbsp;&minus;}}{\\mixed{\\fracstr{1}}{\\frac{\\str{1}}{\\str{5}}}}'), 
			template: 'first',
			firstHelp: dataUtils.pre('{\\grp{\\html{The 2<sup>4</sup>&#8260;<sub>5</sub> is positive and the 2<sup>1</sup>&#8260;<sub>3</sub> is negative. Because there is one negative sign (<span class=underline>an odd number of negative signs</span>) in this division problem, the answer is negative.}}}')} ,
				
			// problem 10
			{prob: dataUtils.pre('{\\grp{html{4}}{\\sign{&divide;}}{\\html{(&minus;}}{\\mixed{\\str{2}}{\\frac{\\fracstr{2}}{\\fracstr{3}}}}{\\html{)}}{\\sign{&divide;}}{\\mixed{\\str{2}}{\\frac{\\fracstr{1}}{\\fracstr{4}}}}}'),
			answer:dataUtils.pre('\\grp{\\sign{=}}{\\frac{\\input{-2}}{\\input{3}}}'),	
			textAnswer: dataUtils.pre('{\\html{&nbsp;&minus;}}{\\frac{\\str{2}}{\\str{3}}}'), 
			template: 'first',
			firstHelp: dataUtils.pre('{\\grp{\\html{The 4 is positive and the 2<sup>2</sup>&#8260;<sub>3</sub> is negative and the 2<sup>1</sup>&#8260;<sub>4</sub> is positive. Because there is one negative sign (<span class=underline>an odd number of negative signs</span>) in this division problem, the answer is negative.}}}') },
			];

	return dataUtils.build(desc, template, data);
}]);