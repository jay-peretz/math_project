
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
			{prob: dataUtils.pre('{\\grp{\\html{(}}{\\sign{-}}{html{16}}{\\html{)}}{\\sign{&divide;}}{html{4}}}'),
			answer: dataUtils.pre('\\grp{\\sign{=}}{\\input{-4}}'),
			textAnswer: dataUtils.pre('{\\html{&nbsp;}}{\\sign{-}}{html{4}}'),
			template: 'first',
			firstHelp: dataUtils.pre('{\\grp{\\html{The 16 is negative and the 4 is positive. Because there is one negative sign (<span class=underline>an odd number of negative signs</span>) in this division problem, the answer is negative.}}}') },
			
			// problem 2
			{prob: dataUtils.pre('{\\grp{\\sign{-}}{html{20}}{\\sign{&divide;}}{\\sign{-}}{html{2}}'),
			answer: dataUtils.pre('\\grp{\\sign{=}}{\\input{10}}'), 
			textAnswer: dataUtils.pre('{\\html{&nbsp;}}{html{10}}'), 
			template: 'first',
			firstHelp: dataUtils.pre('{\\grp{\\html{The 20 is negative and the 2 is negative. Because there are two negative signs (<span class=underline>an even number of negative signs</span>) in this division problem, the answer is positive.}}}') },
											
			// problem 3
			{prob: dataUtils.pre('{\\grp{\\html{(}}{\\sign{-}}{html{10}}{\\html{)}}{\\sign{&divide;}}{html{5}}{\\sign{&divide;}}{\\html{(}}{\\sign{-}}{html{4}}{\\html{)}}}'),
			answer: dataUtils.pre('\\grp{\\sign{=}}{\\input{0.5}}'),  
			textAnswer: dataUtils.pre('{\\html{&nbsp;}}{html{0.5}}'),
			template: 'first',
			firstHelp: dataUtils.pre('{\\grp{\\html{The 10 is negative, the 5 is positive and the 4 is negative. Because there are two negative signs (<span class=underline>an even number of negative signs</span>) in this division problem, the answer is positive.}}}') },
			
			// problem 4
			{prob: dataUtils.pre('{\\grp{\\html{(}}{\\sign{-}}{html{180}}{\\html{)}}{\\sign{&divide;}}{\\html{(}}{\\sign{-}}{html{0.3}}{\\html{)}}}'),
			answer: dataUtils.pre('\\grp{\\sign{=}}{\\input{600}}'), 
			textAnswer: dataUtils.pre('{\\html{&nbsp;}}{html{600}}'), 
			template: 'first',
			firstHelp: dataUtils.pre('{\\grp{\\html{The 180 is negative and the 0.3 is negative. Because there are two negative signs (<span class=underline>an even number of negative signs</span>) in this division problem, the answer is positive.}}}') },
			
			// problem 5
			{prob: dataUtils.pre('{\\grp{html{129.6}}{\\sign{&divide;}}{\\html{(}}{\\sign{-}}{html{32}}{\\html{)}}}'),
			answer: dataUtils.pre('\\grp{\\sign{=}}{\\input{-4.05}}'),	 
			textAnswer: dataUtils.pre('{\\html{&nbsp;}}{\\sign{-}}{html{4.05}}'),
			template: 'first',
			firstHelp: dataUtils.pre('{\\grp{\\html{The 129.6 is positive and the 32 is negative. Because there is one negative sign (<span class=underline>an odd number of negative signs</span>) in this division problem, the answer is negative.}}}') },
			
			// problem 6
			{prob: dataUtils.pre('{\\grp{\\html{(}}{\\sign{-}}{\\frac{\\str{3}}{\\str{7}}}{\\html{)}}{\\sign{&divide;}}{html{8}}}'),
			answer:dataUtils.pre('\\grp{\\sign{=}}{\\frac{\\input{-3}}{\\input{56}}}'),	
			textAnswer: dataUtils.pre('{\\html{&nbsp;}}{\\grp{\\sign{-}}{\\frac{\\str{3}}{\\str{56}}}}'), 
			template: 'first',
			firstHelp: dataUtils.pre('{\\grp{\\html{The 3/7 is negative and the 8 is positive. Because there is one negative sign (<span class=underline>an odd number of negative signs</span>) in this division problem, the answer is negative.}}}') },

			// problem 7
			{prob: dataUtils.pre('{\\grp{\\html{(}}{\\sign{-}}{\\frac{\\str{5}}{\\str{8}}}{\\html{)}}{\\sign{&divide;}}{\\html{(}}{\\sign{-}}{\\frac{\\str{15}}{\\str{16}}}{\\html{)}}}'),
			answer:dataUtils.pre('\\grp{\\sign{=}}{\\frac{\\input{2}}{\\input{3}}}'),	
			textAnswer: dataUtils.pre('{\\html{&nbsp;}}{\\grp{\\frac{\\str{2}}{\\str{3}}}}'), 
			template: 'first',
			firstHelp: dataUtils.pre('{\\grp{\\html{The 5/8 is negative and the 15/16 is negative. Because there are two negative signs (<span class=underline>an even number of negative signs</span>) in this division problem, the answer is positive.}}}') },

			// problem 8
			{prob: dataUtils.pre('{\\grp{\\html{(}}{\\sign{-}}{\\frac{\\str{3}}{\\str{4}}}{\\html{)}}{\\sign{&divide;}}{\\html{(}}{\\sign{-}}{\\frac{\\str{7}}{\\str{10}}}{\\html{)}}{\\sign{&divide;}}{\\sign{-}}{html{5}}}'),
			answer:dataUtils.pre('\\grp{\\sign{=}}{\\frac{\\input{-3}}{\\input{14}}}'),	
			textAnswer: dataUtils.pre('{\\html{&nbsp;}}{\\grp{\\sign{-}}{\\frac{\\str{3}}{\\str{14}}}}'), 
			template: 'first',
			firstHelp: dataUtils.pre('{\\grp{\\html{The 3/4 is negative and the 7/10 is negative and the 5 is negative. Because there are three negative signs (<span class=underline>an odd number of negative signs</span>) in this division problem, the answer is negative.}}}')} ,

			// problem 9
			{prob: dataUtils.pre('{\\grp{\\mixed{\\str{2}}{\\frac{\\fracstr{4}}{\\fracstr{5}}}}{\\sign{&divide;}}{\\html{(}}{\\sign{-}}{\\mixed{\\str{2}}{\\frac{\\fracstr{1}}{\\fracstr{3}}}}{\\html{)}}}'),
			answer:dataUtils.pre('\\grp{\\sign{=}}{\\mixed{\\input{-1}}{\\frac{\\input{1}}{\\input{5}}}}'),		
			textAnswer: dataUtils.pre('{\\html{&nbsp;}}{\\grp{\\sign{-}}{\\mixed{\\fracstr{1}}{\\frac{\\str{1}}{\\str{5}}}}}'), 
			template: 'first',
			firstHelp: dataUtils.pre('{\\grp{\\html{The 2 4/5 is positive and the 2 1/3 is negative. Because there is one negative sign (<span class=underline>an odd number of negative signs</span>) in this division problem, the answer is negative.}}}')} ,
			
			// problem 10
			{prob: dataUtils.pre('{\\grp{html{4}}{\\sign{&divide;}}{\\html{(}}{\\sign{-}}{\\mixed{\\str{2}}{\\frac{\\fracstr{2}}{\\fracstr{3}}}}{\\html{)}}{\\sign{&divide;}}{\\mixed{\\str{2}}{\\frac{\\fracstr{1}}{\\fracstr{4}}}}}'),
			answer:dataUtils.pre('\\grp{\\sign{=}}{\\frac{\\input{-2}}{\\input{3}}}'),	
			textAnswer: dataUtils.pre('{\\html{&nbsp;}}{\\grp{\\sign{-}}{\\frac{\\str{2}}{\\str{3}}}}'), 
			template: 'first',
			firstHelp: dataUtils.pre('{\\grp{\\html{The 4 is positive and the 2 2/3 is negative and the 2 1/4 is positive. Because there is one negative sign (<span class=underline>an odd number of negative signs</span>) in this division problem, the answer is negative.}}}') },
			];

	return dataUtils.build(desc, template, data);
}]);
