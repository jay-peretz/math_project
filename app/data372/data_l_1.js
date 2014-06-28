/*global angular */

angular.module('mathSkills').service('data_l_1', ['dataUtils', function (dataUtils) {
    var desc = {
			title: 'L.1 Multiplying Integers, Decimals, Fractions and Mixed Numbers',
    		path: 'L.1-multiplying-integers-decimals-fractions',
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
						answer:  '\\grp{\\sign{=}}{\\input{$answer}}',
						controls: {
								"checkAnswer": true,
								"help": '\\rowgrp'
									+'$firstHelp'
									+'{\\html{&nbsp;}}'
									+'{css{\\html{answer:  $textAnswer}}{help-answer-text}}'
						}
					}]
				}]
			},
			
			// second template, fractions operations
			second: {
                title: 'Evaluate Signed Expressions',
                children: [{
                    title: 'Main Answer',
                    children: [{
						problem: '\\rowgrp'
								  +'$prob',
						answer: '\\pan{5}{7}{'+
                                    '$answer'+
                                '}',
						controls: {
									"checkAnswer": true,
									"help": '\\rowgrp'
											+'$firstHelp'
											+'{\\html{&nbsp;}}'
											+'{css{\\grp{\\html{answer: }}$textAnswer}{help-answer-text}}'
							}
						}]
					}]
				},
				
        },
        data = [
			
			// problem 1
			{prob: dataUtils.pre('{\\grp{\\html{(}}{\\sign{&minus;}}{html{6}}{\\html{)}}{\\sign{\xB7}}{\\html{(}}{\\sign{&minus;}}{html{8}}{\\html{)}}}'),
			answer: '48', 
			textAnswer: ' &nbsp; 48', 
			template: 'first',
			firstHelp: dataUtils.pre('{\\grp{\\html{The 6 is negative and the 8 is negative. Because there are two negative signs (<span class=underline>an even number of negative signs</span>) in this multiplication problem, the answer is positive. }}}') },
			
			// problem 2
			{prob: dataUtils.pre('{\\grp{\\sign{&minus;}}{html{4}}{\\sign{\xB7}}{html{10}}}'),
			answer: '-40', 
			textAnswer: ' &nbsp; - 40', 
			template: 'first',
			firstHelp: dataUtils.pre('{\\grp{\\html{The 4 is negative and the 10 is positive. Because there is one negative sign (<span class=underline>an odd number of negative signs</span>) in this multiplication problem, the answer is negative. }}}') },
			
			// problem 3
			{prob: dataUtils.pre('{\\grp{html{5}}{\\sign{\xB7}}{\\html{(}}{\\sign{&minus;}}{html{6}}{\\html{)}}{\\sign{\xB7}}{\\html{(}}{\\sign{&minus;}}{html{4}}{\\html{)}}}'),
			answer: '120', 
			textAnswer: ' &nbsp; 120', 
			template: 'first',
			firstHelp: dataUtils.pre('{\\grp{\\html{The 5 is positive, the 6 and the 4 are negative. Because there are two negative signs (<span class=underline>an even number of negative signs</span>) in this multiplication problem, the answer is positive.}}}') },
			
			// problem 4
			{prob: dataUtils.pre('{\\grp{html{2.6}}{\\sign{\xB7}}{\\html{(}}{\\sign{&minus;}}{html{3.1}}{\\html{)}}}'),
			answer: '-8.06', 
			textAnswer: ' &nbsp; - 8.06', 
			template: 'first',
			firstHelp: dataUtils.pre('{\\grp{\\html{The 2.6 is positive and the 3.1 is negative. Because there is one negative sign (<span class=underline>an odd number of negative signs</span>) in this multiplication problem, the answer is negative.}}}') },
			
			// problem 5
			{prob: dataUtils.pre('{\\grp{\\html{(}}{\\sign{&minus;}}{html{7.5}}{\\html{)}}{\\sign{\xB7}}{\\html{(}}{\\sign{&minus;}}{html{0.4}}{\\html{)}}}'),
			answer: '3', 
			textAnswer: ' &nbsp; 3', 
			template: 'first',
			firstHelp: dataUtils.pre('{\\grp{\\html{The 7.5 is negative and the 0.4 is negative. Because there are two negative signs (<span class=underline>an even number of negative signs</span>) in this multiplication problem, the answer is positive.}}}') },
			
			// problem 6
			{prob: dataUtils.pre('{\\grp{\\sign{&minus;}}{\\frac{\\str{3}}{\\str{4}}}{\\sign{\xB7}}{\\html{(}}{\\frac{\\str{5}}{\\str{9}}}{\\html{)}}}'),
			answer: dataUtils.pre('\\grp{\\sign{=}}{\\frac{\\input{-5}}{\\input{12}}}'),	
			textAnswer: dataUtils.pre('{\\html{&nbsp;}}{\\grp{\\sign{&minus;}}{\\frac{\\str{5}}{\\str{12}}}}'), 
			template: 'second',
			firstHelp: dataUtils.pre('{\\grp{\\html{The <sup>3</sup>&#8260;<sub>4</sub> is negative and the <sup>5</sup>&#8260;<sub>9</sub> is positive. Because there is one negative sign (<span class=underline>an odd number of negative signs</span>) in this multiplication problem, the answer is negative.}}}') },
			
			// problem 7
			{prob: dataUtils.pre('{\\grp{\\frac{\\str{7}}{\\str{8}}}{\\sign{\xB7}}{\\html{(}}{\\sign{&minus;}}{\\frac{\\str{4}}{\\str{21}}}{\\html{)}}}'),
			answer: dataUtils.pre('\\grp{\\sign{=}}{\\frac{\\input{-1}}{\\input{6}}}'),	
			textAnswer: dataUtils.pre('{\\html{&nbsp;}}{\\grp{\\sign{&minus;}}{\\frac{\\str{1}}{\\str{6}}}}'), 
			template: 'second',
			firstHelp: dataUtils.pre('{\\grp{\\html{The <sup>7</sup>&#8260;<sub>8</sub> is positive and the <sup>4</sup>&#8260;<sub>21</sub> is negative. Because there is one negative sign (<span class=underline>an odd number of negative signs</span>) in this multiplication problem, the answer is negative.}}}') },
			
			// problem 8
			{prob: dataUtils.pre('{\\grp{\\html{(}}{\\sign{&minus;}}{\\frac{\\str{1}}{\\str{2}}}{\\html{)}}{\\sign{\xB7}}{\\html{(}}{\\frac{\\str{3}}{\\str{16}}}{\\html{)}}{\\sign{\xB7}}{\\html{(}}{\\sign{&minus;}}{\\frac{\\str{11}}{\\str{6}}}{\\html{)}}}'),
			answer: dataUtils.pre('\\grp{\\sign{=}}{\\frac{\\input{11}}{\\input{64}}}'),	
			textAnswer: dataUtils.pre('{\\html{&nbsp;}}{\\grp{\\frac{\\str{11}}{\\str{64}}}}'), 
			template: 'second',
			firstHelp: dataUtils.pre('{\\grp{\\html{The <sup>1</sup>&#8260;<sub>2</sub> and the <sup>11</sup>&#8260;<sub>16</sub> are negative, and the <sup>3</sup>&#8260;<sub>16</sub> is positive. Because there are two negative signs (<span class=underline>an even number of negative signs</span>) in this multiplication problem, the answer is positive.}}}') },
			
			// problem 9
			{prob: dataUtils.pre('{\\grp{\\html{(}}{\\sign{&minus;}}{\\mixed{\\str{2}}{\\frac{\\fracstr{4}}{\\fracstr{5}}}}{\\html{)}}{\\sign{\xB7}}{\\html{(}}{\\sign{&minus;}}{\\mixed{\\str{1}}{\\frac{\\fracstr{1}}{\\fracstr{4}}}}{\\html{)}}}'),
			answer:dataUtils.pre('\\grp{\\sign{=}}{\\mixed{\\input{3}}{\\frac{\\input{1}}{\\input{2}}}}'),		
			textAnswer: dataUtils.pre('{\\html{&nbsp;}}{\\grp{\\mixed{\\str{3}}{\\frac{\\str{1}}{\\str{2}}}}}'), 
			template: 'second',
			firstHelp: dataUtils.pre('{\\grp{\\html{The 2 <sup>4</sup>&#8260;<sub>5</sub> is negative and the 1 <sup>1</sup>&#8260;<sub>4</sub> is negative. Because there are two negative signs (<span class=underline>an even number of negative signs</span>) in this multiplication problem, the answer is positive.}}}')} ,
			
			// problem 10
			{prob: dataUtils.pre('{\\grp{\\html{(}}{\\mixed{\\str{1}}{\\frac{\\fracstr{1}}{\\fracstr{2}}}}{\\html{)}}{\\sign{\xB7}}{\\html{(}}{\\sign{&minus;}}{\\mixed{\\str{3}}{\\frac{\\fracstr{2}}{\\fracstr{3}}}}{\\html{)}}}'),
			answer:dataUtils.pre('\\grp{\\sign{=}}{\\mixed{\\input{-5}}{\\frac{\\input{1}}{\\input{2}}}}'),		
			textAnswer: dataUtils.pre('{\\html{&nbsp;}}{\\grp{\\sign{-}}{\\mixed{\\str{5}}{\\frac{\\str{1}}{\\str{2}}}}}'), 
			template: 'second',
			firstHelp: dataUtils.pre('{\\grp{\\html{The 1 <sup>1</sup>&#8260;<sub>2</sub> is positive and the 3 <sup>2</sup>&#8260;<sub>3</sub> is negative. Because there is one negative sign (<span class=underline>an odd number of negative signs</span>) in this multiplication problem, the answer is negative.}}}') },
			
        ];

	return dataUtils.build(desc, template, data);
}]);





