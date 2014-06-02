/*global angular */

// angular.module('mathSkills').value('data_y_2', {
//     title: 'Y.2 The Distribution Property',
//     path: 'Y.2-the-distribution-property',
//     children: [{
//         title: 'The Distribution Property',
//         children: [] }]
// });


/*global angular */

angular.module('mathSkills').service('data_y_2', ['dataUtils', function (dataUtils) {
    var desc = {
			title: 'Y.2 Distributing a Term into a Parenthesis',
    		path: 'Y.2-distributing-a-term',
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
									+'{css{\\html{Answer:  $textAnswer}}{help-answer-text}}'
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
											+'{css{\\grp{\\html{Answer: }}$textAnswer}{help-answer-text}}'
							}
						}]
					}]
				},
				
        },
        data = [
			
			// problem 1
			{prob: dataUtils.pre('{\\grp{\\html{3}}{\\html{(}}{html{2a}}{\\sign{-}}{\\html{4}}{\\html{)}}}'),
			// {prob: dataUtils.pre('{\\grp{\\html{3 (2a - 4)}}}'),
			answer: '6a-12', 
			textAnswer: ' &nbsp; 6a - 12', 
			template: 'first',
			firstHelp: dataUtils.pre('{\\rowgrp{\\html{When distributing a term into a parenthesis, the term on the outside of the parenthesis is multiplied by <span class=underline>each</span> term inside the parenthesis.}}'
				+'{\\html{&nbsp;}}'
				+'{\\grp{\\html{(1) the first distribution:}}{html{3}}{\\sign{\xB7}}{html{2a}}{\\sign{=}}{html{6a}}}'
				+'{\\html{&nbsp;}}'
				+'{\\grp{\\html{(2) the second distribution:}}{html{3}}{\\sign{\xB7}}{html{- 4}}{\\sign{=}}{html{-12}}}'
				+'{\\html{&nbsp;}}'
				+'{\\html{We now have 6a and -12 or 6a + (-12)}}'
				+'}') },
			
			// problem 2
			{prob: dataUtils.pre('{\\grp{\\sign{-}}{\\html{5}}{\\html{(}}{html{3m}}{\\sign{+}}{\\html{2n}}{\\html{)}}}'),
			answer: '-15m-10n', 
			textAnswer: ' &nbsp; -15m - 10n', 
			template: 'first',
			firstHelp: dataUtils.pre('{\\rowgrp{\\html{When distributing a term into a parenthesis, the term on the outside of the parenthesis is multiplied by <span class=underline>each</span> term inside the parenthesis.}}'
				+'{\\html{&nbsp;}}'
				+'{\\grp{\\html{(1) the first distribution:}}{html{- 5}}{\\sign{\xB7}}{html{3m}}{\\sign{=}}{html{- 15m}}}'
				+'{\\html{&nbsp;}}'
				+'{\\grp{\\html{(2) the second distribution:}}{html{- 5}}{\\sign{\xB7}}{html{2n}}{\\sign{=}}{html{- 10n}}}'
				+'{\\html{&nbsp;}}'
				+'{\\html{We now have -15m and -10n or -15m + (-10n)}}'
				+'}') },
			
			// problem 3
			{prob: dataUtils.pre('{\\grp{\\sign{-}}{\\html{2a}}{\\html{(}}{\\sign{-}}{html{3a}}{\\sign{-}}{\\html{4}}{\\html{)}}}'),
			answer: '6a2+8a', 
			textAnswer: ' &nbsp; 6a<sup>2</sup> + 8a', 
			template: 'first',
			firstHelp: dataUtils.pre('{\\rowgrp{\\html{When distributing a term into a parenthesis, the term on the outside of the parenthesis is multiplied by <span class=underline>each</span> term inside the parenthesis.}}'
				+'{\\html{&nbsp;}}'
				+'{\\grp{\\html{(1) the first distribution:}}{html{- 2a}}{\\sign{\xB7}}{html{- 3a}}{\\sign{=}}{html{6a<sup>2</sup>}}}'
				+'{\\html{&nbsp;}}'
				+'{\\grp{\\html{(2) the second distribution:}}{html{- 2a}}{\\sign{\xB7}}{html{- 4}}{\\sign{=}}{html{8a}}}'
				+'{\\html{&nbsp;}}'
				+'{\\html{We now have 6a<sup>2</sup> and 8a or 6a<sup>2</sup> + 8a}}'
				+'}') },
			
			// problem 4
			{prob: dataUtils.pre('{\\grp{\\html{6x}}{\\html{(}}{\\sign{-}}{html{2x}}{\\sign{+}}{\\html{3y}}{\\html{)}}}'),
			answer: '-12x2+18xy', 
			textAnswer: ' &nbsp; -12x<sup>2</sup> + 18xy', 
			template: 'first',
			firstHelp: dataUtils.pre('{\\rowgrp{\\html{When distributing a term into a parenthesis, the term on the outside of the parenthesis is multiplied by <span class=underline>each</span> term inside the parenthesis.}}'
				+'{\\html{&nbsp;}}'
				+'{\\grp{\\html{(1) the first distribution:}}{html{6x}}{\\sign{\xB7}}{html{- 2x}}{\\sign{=}}{html{-12x<sup>2</sup>}}}'
				+'{\\html{&nbsp;}}'
				+'{\\grp{\\html{(2) the second distribution:}}{html{6x}}{\\sign{\xB7}}{html{3y}}{\\sign{=}}{html{18xy}}}'
				+'{\\html{&nbsp;}}'
				+'{\\html{We now have -12x<sup>2</sup> and 18xy or -12x<sup>2</sup> + 18xy}}'
				+'}') },
			
			// problem 5
			{prob: dataUtils.pre('{\\grp{\\sign{-}}{\\html{4x}}{\\html{(}}{html{2x}}{\\sign{-}}{\\html{2y}}{\\sign{+}}{\\html{4}}{\\html{)}}}'),
			answer: '-8x2+8xy-16x', 
			textAnswer: ' &nbsp; -8x<sup>2</sup> + 8xy - 16x', 
			template: 'first',
			firstHelp: dataUtils.pre('{\\rowgrp{\\html{When distributing a term into a parenthesis, the term on the outside of the parenthesis is multiplied by <span class=underline>each</span> term inside the parenthesis.}}'
				+'{\\html{&nbsp;}}'
				+'{\\grp{\\html{(1) the first distribution:}}{html{- 4x}}{\\sign{\xB7}}{html{2x}}{\\sign{=}}{html{-8x<sup>2</sup>}}}'
				+'{\\html{&nbsp;}}'
				+'{\\grp{\\html{(2) the second distribution:}}{html{- 4x}}{\\sign{\xB7}}{html{- 2y}}{\\sign{=}}{html{8xy}}}'
				+'{\\html{&nbsp;}}'
				+'{\\grp{\\html{(3) the third distribution:}}{html{- 4x}}{\\sign{\xB7}}{html{4}}{\\sign{=}}{html{- 16x}}}'
				+'{\\html{&nbsp;}}'
				+'{\\html{We now have -8x<sup>2</sup> and 8xy and -16x or -8x<sup>2</sup> + 8xy - 16x}}'
				+'}') },
			
			// problem 6
			{prob: dataUtils.pre('{\\grp{\\sign{-}}{\\html{m}}{\\html{(}}{\\sign{-}}{html{3m}}{\\sign{+}}{\\html{2n<sup>3</sup>}}{\\sign{-}}{\\html{1}}{\\html{)}}}'),
			answer: '-3m2-2mn3+m', 
			textAnswer: ' &nbsp; 3m<sup>2</sup> - 2mn<sup>3</sup> + m', 
			template: 'first',
			firstHelp: dataUtils.pre('{\\rowgrp{\\html{When distributing a term into a parenthesis, the term on the outside of the parenthesis is multiplied by <span class=underline>each</span> term inside the parenthesis.}}'
				+'{\\html{&nbsp;}}'
				+'{\\grp{\\html{(1) the first distribution:}}{html{- m}}{\\sign{\xB7}}{html{- 3m}}{\\sign{=}}{html{3m<sup>2</sup>}}}'
				+'{\\html{&nbsp;}}'
				+'{\\grp{\\html{(2) the second distribution:}}{html{- m}}{\\sign{\xB7}}{html{2n<sup>3</sup>}}{\\sign{=}}{html{- 2mn<sup>3</sup>}}}'
				+'{\\html{&nbsp;}}'
				+'{\\grp{\\html{(3) the third distribution:}}{html{- m}}{\\sign{\xB7}}{html{- 1}}{\\sign{=}}{html{m}}}'
				+'{\\html{&nbsp;}}'
				+'{\\html{We now have 3m<sup>2</sup> and -2mn<sup>3</sup> and m or 3m<sup>2</sup> + (-2mn<sup>3</sup>) + m}}'
				+'}') },
			
			// problem 7
			{prob: dataUtils.pre('{\\grp{\\sign{-}}{\\html{1}}{\\html{(}}{\\sign{-}}{html{6x<sup>2</sup>}}{\\sign{-}}{\\html{2x}}{\\sign{+}}{\\html{7}}{\\html{)}}}'),
			answer: '6x2+2x-7', 
			textAnswer: ' &nbsp; 6x<sup>2</sup> + 2x - 7', 
			template: 'first',
			firstHelp: dataUtils.pre('{\\rowgrp{\\html{When distributing a term into a parenthesis, the term on the outside of the parenthesis is multiplied by <span class=underline>each</span> term inside the parenthesis.}}'
				+'{\\html{&nbsp;}}'
				+'{\\grp{\\html{(1) the first distribution:}}{html{- 1}}{\\sign{\xB7}}{html{- 6x<sup>2</sup>}}{\\sign{=}}{html{6x<sup>2</sup>}}}'
				+'{\\html{&nbsp;}}'
				+'{\\grp{\\html{(2) the second distribution:}}{html{- 1}}{\\sign{\xB7}}{html{- 2x}}{\\sign{=}}{html{2x}}}'
				+'{\\html{&nbsp;}}'
				+'{\\grp{\\html{(3) the third distribution:}}{html{- 1}}{\\sign{\xB7}}{html{7}}{\\sign{=}}{html{- 7}}}'
				+'{\\html{&nbsp;}}'
				+'{\\html{We now have 6x<sup>2</sup> and 2x and -7 or 6x<sup>2</sup> + 2x - 7}}'
				+'}') },

			
			
			// problem 8
			{prob: dataUtils.pre('{\\grp{\\frac{\\str{2}}{\\str{3}}}{\\html{(}}{html{12a<sup>2</sup>}}{\\sign{+}}{\\html{6a}}{\\sign{-}}{\\html{18}}{\\html{)}}}'),
			answer: '8a2+4a-12', 
			textAnswer: ' &nbsp; 8a<sup>2</sup> + 4a - 12', 
			template: 'first',
			firstHelp: dataUtils.pre('{\\rowgrp{\\html{When distributing a term into a parenthesis, the term on the outside of the parenthesis is multiplied by <span class=underline>each</span> term inside the parenthesis.}}'
				+'{\\html{&nbsp;}}'
				+'{\\grp{\\html{(1) the first distribution:}}{\\frac{\\str{2}}{\\str{3}}}{\\sign{\xB7}}{html{12a<sup>2</sup>}}{\\sign{=}}{html{8a<sup>2</sup>}}}'
				+'{\\html{&nbsp;}}'
				+'{\\grp{\\html{(2) the second distribution:}}{\\frac{\\str{2}}{\\str{3}}}{\\sign{\xB7}}{html{6a}}{\\sign{=}}{html{4a}}}'
				+'{\\html{&nbsp;}}'
				+'{\\grp{\\html{(3) the third distribution:}}{\\frac{\\str{2}}{\\str{3}}}{\\sign{\xB7}}{html{-18}}{\\sign{=}}{html{- 12}}}'
				+'{\\html{&nbsp;}}'
				+'{\\html{We now have 8a<sup>2</sup> and 4a and -12 or 8a<sup>2</sup> + 4a + (- 12)}}'
				+'}') },
			
			
			// problem 9
			{prob: dataUtils.pre('{\\grp{\\frac{\\str{1m}}{\\str{4}}}{\\html{(}}{html{4m}}{\\sign{-}}{\\html{12mn}}{\\sign{+}}{\\html{20}}{\\html{)}}}'),
			answer: 'm2-3m2n+5m', 
			textAnswer: ' &nbsp; m<sup>2</sup> - 3m<sup>2</sup>n + 5m', 
			template: 'first',
			firstHelp: dataUtils.pre('{\\rowgrp{\\html{When distributing a term into a parenthesis, the term on the outside of the parenthesis is multiplied by <span class=underline>each</span> term inside the parenthesis.}}'
				+'{\\html{&nbsp;}}'
				+'{\\grp{\\html{(1) the first distribution:}}{\\frac{\\str{1m}}{\\str{4}}}{\\sign{\xB7}}{html{4m}}{\\sign{=}}{html{m<sup>2</sup>}}}'
				+'{\\html{&nbsp;}}'
				+'{\\grp{\\html{(2) the second distribution:}}{\\frac{\\str{1m}}{\\str{4}}}{\\sign{\xB7}}{html{-12mn}}{\\sign{=}}{html{- 3m<sup>2</sup>n}}}'
				+'{\\html{&nbsp;}}'
				+'{\\grp{\\html{(3) the third distribution:}}{\\frac{\\str{1m}}{\\str{4}}}{\\sign{\xB7}}{html{20}}{\\sign{=}}{html{5m}}}'
				+'{\\html{&nbsp;}}'
				+'{\\html{We now have m<sup>2</sup> and -3m<sup>2</sup>n and 5m or m<sup>2</sup> + (- 3m<sup>2</sup>n) + 5m}}'
				+'}') },
			
			// problem 10
			{prob: dataUtils.pre('{\\grp{\\sign{-}}{\\frac{\\str{5ab}}{\\str{6}}}{\\html{(}}{\\frac{\\str{2a}}{\\str{3}}}{\\sign{-}}{\\frac{\\str{3b}}{\\str{4}}}{\\sign{+}}{\\frac{\\str{1}}{\\str{6}}}{\\html{)}}}'),
			answer: dataUtils.pre('\\grp'
				+'{\\sign{=}}'
				+'{\\frac{\\input{-5a2b}}{\\input{9}}}'
				+'{\\sign{+}}'
				+'{\\frac{\\input{5ab2}}{\\input{8}}}'
				+'{\\sign{-}}'
				+'{\\frac{\\input{5ab}}{\\input{36}}}'
				+'}'),	
			textAnswer: dataUtils.pre('{\\html{&nbsp;}}{\\grp'
				+'{\\sign{-}}{\\frac{\\html{5a<sup>2</sup>b}}{\\str{9}}}'
				+'{\\sign{+}}'
				+'{\\frac{\\html{5ab<sup>2</sup>}}{\\str{8}}}'
				+'{\\sign{-}}'
				+'{\\frac{\\str{5ab}}{\\str{36}}}'
				+'}'), 

			template: 'second',
			firstHelp: dataUtils.pre('{\\rowgrp{\\html{When distributing a term into a parenthesis, the term on the outside of the parenthesis is multiplied by <span class=underline>each</span> term inside the parenthesis.}}'
				+'{\\html{&nbsp;}}'
				+'{\\grp{\\html{(1) the first distribution:}}{\\sign{-}}{\\frac{\\str{5ab}}{\\str{6}}}{\\sign{\xB7}}{\\frac{\\str{2a}}{\\str{3}}}{\\sign{=}}{\\sign{-}}{\\frac{\\html{5a<sup>2</sup>b}}{\\str{9}}}}'
				+'{\\html{&nbsp;}}'
				+'{\\grp{\\html{(2) the second distribution:}}{\\sign{-}}{\\frac{\\str{5ab}}{\\str{6}}}{\\sign{\xB7}}{\\frac{\\str{-3b}}{\\str{4}}}{\\sign{=}}{\\frac{\\html{5ab<sup>2</sup>}}{\\str{8}}}}'
				+'{\\html{&nbsp;}}'
				+'{\\grp{\\html{(3) the third distribution:}}{\\sign{-}}{\\frac{\\str{5ab}}{\\str{6}}}{\\sign{\xB7}}{\\frac{\\str{1}}{\\str{6}}}{\\sign{=}}{\\sign{-}}{\\frac{\\html{5ab}}{\\str{36}}}}'
				+'{\\html{&nbsp;}}'
				+'{\\html{We now have -5a<sup>2</sup>b/9 and 5ab<sup>2</sup>/8 and -5ab/36 or -5a<sup>2</sup>b/9 + 5ab<sup>2</sup>/8 + (- 5ab/36)}}'
				+'}') },
			
        ];

	return dataUtils.build(desc, template, data);
}]);






