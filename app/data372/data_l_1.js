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
						answer: '\\input{$answer}',
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
				
        },
        data = [
			
			// problem 1
			{prob: dataUtils.pre('{\\grp{\\html{(}}{\\sign{-}}{html{6}}{\\html{)}}{\\sign{\xB7}}{\\html{(}}{\\sign{-}}{html{8}}{\\html{)}}}'),
			answer: '48', 
			textAnswer: ' &nbsp; 48', 
			template: 'first',
			firstHelp: dataUtils.pre('{\\grp{\\html{The 6 is negative and the 8 is negative. <span class=underline>Multiplication of two integers with the same sign, always results in positive.</span> Just multiply the absolute values and make the answer positive.}}}') },
			
			// problem 2
			{prob: dataUtils.pre('{\\grp{\\sign{-}}{html{4}}{\\sign{\xB7}}{html{10}}}'),
			answer: '-40', 
			textAnswer: ' &nbsp; -40', 
			template: 'first',
			firstHelp: dataUtils.pre('{\\grp{\\html{The 4 is negative and the 10 is positive. <span class=underline>Multiplication of two integers with the different signs, always results in a negative.</span> Just multiply the absolute values and make the answer negative.}}}') },
			
			// problem 3
			{prob: dataUtils.pre('{\\grp{html{5}}{\\sign{\xB7}}{\\html{(}}{\\sign{-}}{html{6}}{\\html{)}}{\\sign{\xB7}}{\\html{(}}{\\sign{-}}{html{4}}{\\html{)}}}'),
			answer: '120', 
			textAnswer: ' &nbsp; 120', 
			template: 'first',
			firstHelp: dataUtils.pre('{\\grp{\\html{The 5 is positive, the 6 is negative and the 4 is negative. <span class=underline>Multiplication of two integers with the same sign, always results in positive.</span> Just multiply the absolute values and make the answer positive.}}}') },
			
			// problem 4
			{prob: dataUtils.pre('{\\grp{html{2.6}}{\\sign{\xB7}}{\\html{(}}{\\sign{-}}{html{3.1}}{\\html{)}}}'),
			answer: '-8.06', 
			textAnswer: ' &nbsp; -8.06', 
			template: 'first',
			firstHelp: dataUtils.pre('{\\grp{\\html{The 2.6 is positive and the 3.1 is negative. <span class=underline>Multiplication of two numbers with the different signs, always results in a negative.</span> Just multiply the absolute values and make the answer negative.}}}') },
			
			// problem 5
			{prob: dataUtils.pre('{\\grp{\\html{(}}{\\sign{-}}{html{7.5}}{\\html{)}}{\\sign{\xB7}}{\\html{(}}{\\sign{-}}{html{0.4}}{\\html{)}}}'),
			answer: '3', 
			textAnswer: ' &nbsp; 3', 
			template: 'first',
			firstHelp: dataUtils.pre('{\\grp{\\html{The 7.5 is negative and the 0.4 is negative. <span class=underline>Multiplication of two integers with the same sign, always results in positive.</span> Just multiply the absolute values and make the answer positive.}}}') },
			
        ];

	return dataUtils.build(desc, template, data);
}]);





