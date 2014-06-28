
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
								  +'{\\str{Evaluate the expression.}}'
								  +'{\\str{&nbsp;}}'
								  +'$prob',
						answer:  '$answer',
						answer: '$answer',
						controls: {
									"checkAnswer": true,
									"help": '\\rowgrp'
											+'$firstHelp'
											+'{\\str{&nbsp;}}'
											+'{css{\\grp{\\str{Answer: }}$textAnswer}{help-answer-text}}'
							}
						}]
					}]
				},
        },
        data = [
			
			// problem 1
			{prob: dataUtils.pre('{\\grp{\\str{( -16 )}}{\\sign{&divide;}}{\\str{4}}}'),
			answer: dataUtils.pre('\\grp{\\input{-4}}'),
			textAnswer: dataUtils.pre('{\\str{&nbsp;}}{\\str{- 4}}'),
			template: 'first',
			firstHelp: dataUtils.pre('{\\grp{\\str{The 16 is negative and the 4 is positive. Because there is one negative sign (<u>an odd number of negative signs</u>) in this division problem, the answer is negative.}}}') },
			
			// problem 2
			{prob: dataUtils.pre('{\\grp{\\str{- 20}}{\\sign{&divide;}}{\\str{- 2}}'),
			answer: dataUtils.pre('\\grp{\\input{10}}'), 
			textAnswer: dataUtils.pre('{\\str{&nbsp;}}{\\str{10}}'), 
			template: 'first',
			firstHelp: dataUtils.pre('{\\grp{\\str{The 20 is negative and the 2 is negative. Because there are two negative signs (<u>an even number of negative signs</u>) in this division problem, the answer is positive.}}}') },
											
			// problem 3
			{prob: dataUtils.pre('{\\grp{\\str{(-10)}}{\\sign{&divide;}}{\\str{5}}{\\sign{&divide;}}{\\str{(-4)}}}'),
			answer: dataUtils.pre('\\grp{\\input{0.5}}'),  
			textAnswer: dataUtils.pre('{\\str{&nbsp;}}{\\str{0.5}}'),
			template: 'first',
			firstHelp: dataUtils.pre('{\\grp{\\str{The 10 is negative, the 5 is positive and the 4 is negative. Because there are two negative signs (<u>an even number of negative signs</u>) in this division problem, the answer is positive.}}}') },
			
			// problem 4
			{prob: dataUtils.pre('{\\grp{\\str{(-180)}}{\\sign{&divide;}}{\\str{(-0.3)}}}'),
			answer: dataUtils.pre('\\grp{\\input{600}}'), 
			textAnswer: dataUtils.pre('{\\str{&nbsp;}}{\\str{600}}'), 
			template: 'first',
			firstHelp: dataUtils.pre('{\\grp{\\str{The 180 is negative and the 0.3 is negative. Because there are two negative signs (<u>an even number of negative signs</u>) in this division problem, the answer is positive.}}}') },
			
			// problem 5
			{prob: dataUtils.pre('{\\grp{\\str{129.6}}{\\sign{&divide;}}{\\str{(-32)}}}'),
			answer: dataUtils.pre('\\grp{\\input{-4.05}}'),	 
			textAnswer: dataUtils.pre('{\\str{&nbsp;- 4.05}}'),
			template: 'first',
			firstHelp: dataUtils.pre('{\\grp{\\str{The 129.6 is positive and the 32 is negative. Because there is one negative sign (<u>an odd number of negative signs</u>) in this division problem, the answer is negative.}}}') },
			
			// problem 6
			{prob: dataUtils.pre('{\\grp{\\str{(}}{\\str{-}}{\\frac{\\str{3}}{\\str{7}}}{\\str{)}}{\\sign{&divide;}}{\\str{8}}}'),
			answer:dataUtils.pre('\\grp{\\frac{\\input{-3}}{\\input{56}}}'),	
			textAnswer: dataUtils.pre('{\\grp{\\str{&nbsp;-}}{\\frac{\\str{3}}{\\str{56}}}}'), 
			template: 'first',
			firstHelp: dataUtils.pre('{\\grp{\\str{The <sup>3</sup>&#8260;<sub>7</sub> is negative and the 8 is positive. Because there is one negative sign (<u>an odd number of negative signs</u>) in this division problem, the answer is negative.}}}') },

			// problem 7
			{prob: dataUtils.pre('{\\grp{\\str{(}}{\\str{-}}{\\frac{\\str{5}}{\\str{8}}}{\\str{)}}{\\sign{&divide;}}{\\str{(}}{\\str{-}}{\\frac{\\str{15}}{\\str{16}}}{\\str{)}}}'),
			answer:dataUtils.pre('\\grp{\\frac{\\input{2}}{\\input{3}}}'),	
			textAnswer: dataUtils.pre('{\\frac{\\str{2}}{\\str{3}}}'), 
			template: 'first',
			firstHelp: dataUtils.pre('{\\grp{\\str{The <sup>5</sup>&#8260;<sub>8</sub> is negative and the <sup>15</sup>&#8260;<sub>16</sub> is negative. Because there are two negative signs (<u>an even number of negative signs</u>) in this division problem, the answer is positive.}}}') },

			// problem 8
			{prob: dataUtils.pre('{\\pan{6}{6}{\\grp{\\str{(}}{\\str{-}}{\\frac{\\str{3}}{\\str{4}}}{\\str{)}}{\\sign{&divide;}}{\\str{(}}{\\str{-}}{\\frac{\\str{7}}{\\str{10}}}{\\str{)}}{\\sign{&divide;}}{\\str{(}}{\\str{-5}}{\\str{)}}}'),
			answer:dataUtils.pre('\\grp{\\frac{\\input{-3}}{\\input{14}}}'),	
			textAnswer: dataUtils.pre('{\\str{&nbsp;-}}{\\frac{\\str{3}}{\\str{14}}}'), 
			template: 'first',
			firstHelp: dataUtils.pre('{\\grp{\\str{The <sup>3</sup>&#8260;<sub>4</sub> is negative and the <sup>7</sup>&#8260;<sub>10</sub> is negative and the 5 is negative. Because there are three negative signs (<u>an odd number of negative signs</u>) in this division problem, the answer is negative.}}}')} ,

			// problem 9
			{prob: dataUtils.pre('{\\grp{\\mixed{\\str{2}}{\\frac{\\fracstr{4}}{\\fracstr{5}}}}{\\sign{&divide;}}{\\str{(}}{\\str{-}}{\\mixed{\\str{2}}{\\frac{\\fracstr{1}}{\\fracstr{3}}}}{\\str{)}}}'),
			answer:dataUtils.pre('\\grp{\\mixed{\\input{-1}}{\\frac{\\input{1}}{\\input{5}}}}'),		
			textAnswer: dataUtils.pre('{\\str{&nbsp;-}}{\\mixed{\\str{1}}{\\frac{\\str{1}}{\\str{5}}}}'), 
			template: 'first',
			firstHelp: dataUtils.pre('{\\grp{\\str{The 2<sup>4</sup>&#8260;<sub>5</sub> is positive and the 2<sup>1</sup>&#8260;<sub>3</sub> is negative. Because there is one negative sign (<u>an odd number of negative signs</u>) in this division problem, the answer is negative.}}}')} ,
				
			// problem 10
			{prob: dataUtils.pre('{\\grp{\\str{4}}{\\sign{&divide;}}{\\str{(}}{\\str{-}}{\\mixed{\\str{2}}{\\frac{\\fracstr{2}}{\\fracstr{3}}}}{\\str{)}}{\\sign{&divide;}}{\\mixed{\\str{2}}{\\frac{\\fracstr{1}}{\\fracstr{4}}}}}'),
			answer:dataUtils.pre('\\grp{\\frac{\\input{-2}}{\\input{3}}}'),	
			textAnswer: dataUtils.pre('{\\str{&nbsp;-}}{\\frac{\\str{2}}{\\str{3}}}'), 
			template: 'first',
			firstHelp: dataUtils.pre('{\\grp{\\str{The 4 is positive and the 2<sup>2</sup>&#8260;<sub>3</sub> is negative and the 2<sup>1</sup>&#8260;<sub>4</sub> is positive. Because there is one negative sign (<u>an odd number of negative signs</u>) in this division problem, the answer is negative.}}}') },
			];

	return dataUtils.build(desc, template, data);
}]);