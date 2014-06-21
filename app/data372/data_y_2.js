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
			twoDistributions: {
                title: 'Evaluate Signed Expressions',
                children: [{
                    title: 'Main Answer',
                    children: [{
						problem: '\\rowgrp'
								+'$prob',
						answer: '\\btngrp'+
									'{\\rowgrp'+
										'{\\grp{\\btn{A}{$buttonValueA}{marg}}{$buttonLabelA}}'+
										'{\\grp{\\btn{B}{$buttonValueB}{marg}}{$buttonLabelB}}'+
										'{\\grp{\\btn{C}{$buttonValueC}{marg}}{$buttonLabelC}}'+
										'{\\grp{\\btn{D}{$buttonValueD}{marg}}{$buttonLabelD}}'+
									'}',
						controls: {
								"checkAnswer": true,
								"help": '\\rowgrp'
											+'{\\html{When distributing a term into a parenthesis, the term on the outside of the parenthesis is multiplied by <span class=underline>each</span> term inside the parenthesis.}}'
											+'{\\html{&nbsp;}}'
											+'{\\grp'
												+'{\\html{(1) the first distribution:}}'
												+'$firstDistribution'
											+'}'
											+'{\\html{&nbsp;}}'
											+'{\\grp'
												+'{\\html{(2) the second distribution:}}'
												+'$secondDistribution'
											+'}'
											+'{\\html{&nbsp;}}'
											+'$resultDistribution'
											+'{\\html{&nbsp;}}'
											+'{css{\\html{Answer:  $textAnswer}}{help-answer-text}}'
											+'{\\html{&nbsp;}}'
						}
					}]
				}]
			},
			threeDistributions: {
                title: 'Evaluate Signed Expressions',
                children: [{
                    title: 'Main Answer',
                    children: [{
						problem: '\\rowgrp'
								+'$prob',
						answer: '\\btngrp'+
									'{\\rowgrp'+
										'{\\grp{\\btn{A}{$buttonValueA}{marg}}{$buttonLabelA}}'+
										'{\\grp{\\btn{B}{$buttonValueB}{marg}}{$buttonLabelB}}'+
										'{\\grp{\\btn{C}{$buttonValueC}{marg}}{$buttonLabelC}}'+
										'{\\grp{\\btn{D}{$buttonValueD}{marg}}{$buttonLabelD}}'+
									'}',
						controls: {
								"checkAnswer": true,
								"help": '\\rowgrp'
											+'{\\html{When distributing a term into a parenthesis, the term on the outside of the parenthesis is multiplied by <span class=underline>each</span> term inside the parenthesis.}}'
											+'{\\html{&nbsp;}}'
											+'{\\grp'
												+'{\\html{(1) the first distribution:}}'
												+'$firstDistribution'
											+'}'
											+'{\\html{&nbsp;}}'
											+'{\\grp'
												+'{\\html{(2) the second distribution:}}'
												+'$secondDistribution'
											+'}'
											+'{\\html{&nbsp;}}'
											+'{\\grp'
												+'{\\html{(3) the third distribution:}}'
												+'$thirdDistribution'
											+'}'
											+'{\\html{&nbsp;}}'
											+'$resultDistribution'
											+'{\\html{&nbsp;}}'
											+'{css{\\html{Answer:  $textAnswer}}{help-answer-text}}'
											+'{\\html{&nbsp;}}'
						}
					}]
				}]
			},
			threeDistFractions: {
                title: 'Evaluate Signed Expressions',
                children: [{
                    title: 'Main Answer',
                    children: [{
						problem: '\\rowgrp'
								+'$prob',
						answer: '\\btngrp'+
									'{\\css' +
										'{\\rowgrp'+
											'{\\grp{\\btn{A}{$buttonValueA}{marg}}{$buttonLabelA}}'+
											'{\\grp{\\btn{B}{$buttonValueB}{marg}}{$buttonLabelB}}'+
											'{\\grp{\\btn{C}{$buttonValueC}{marg}}{$buttonLabelC}}'+
											'{\\grp{\\btn{D}{$buttonValueD}{marg}}{$buttonLabelD}}'+
										'}'+
										'{tdButtonHeight}'+
									'}',
						controls: {
								"checkAnswer": true,
								"help": '\\rowgrp'
											+'{\\html{When distributing a term into a parenthesis, the term on the outside of the parenthesis is multiplied by <span class=underline>each</span> term inside the parenthesis.}}'
											+'{\\html{&nbsp;}}'
											+'{\\grp'
												+'{\\html{(1) the first distribution:}}'
												+'$firstDistribution'
											+'}'
											+'{\\html{&nbsp;}}'
											+'{\\grp'
												+'{\\html{(2) the second distribution:}}'
												+'$secondDistribution'
											+'}'
											+'{\\html{&nbsp;}}'
											+'{\\grp'
												+'{\\html{(3) the third distribution:}}'
												+'$thirdDistribution'
											+'}'
											+'{\\html{&nbsp;}}'
											+'$resultDistribution'
											+'{\\html{&nbsp;}}'
											+'{\\css'
												+'{\\grp'
													+'{\\str{Answer:}}' 
													+'{$textAnswer}'
												+'}'
												+'{help-answer-text}'
											+'}'
											+'{\\html{&nbsp;}}'
						}
					}]
				}]
			}
        },
        data = [
			
			// problem 1
			{//prob: dataUtils.pre('{\\grp{\\html{3}}{\\html{(}}{html{2a}}{\\sign{-}}{\\html{4}}{\\html{)}}}'),
			prob: dataUtils.pre('{\\str{3 (2a - 4)}'),
			buttonValueA: 'T',
			buttonLabelA: dataUtils.pre('\\str{6a - 12}'),
			buttonValueB: 'F',
			buttonLabelB: dataUtils.pre('\\str{6a - 4}'),
			buttonValueC: 'F',
			buttonLabelC: dataUtils.pre('\\str{-6a}'),
			buttonValueD: 'F',
			buttonLabelD: dataUtils.pre('\\str{2a}'),
			textAnswer: ' &nbsp; 6a - 12', 
			template: 'twoDistributions',
			firstDistribution: dataUtils.pre('{\\str{3 * 2a = 6a}}'),
			secondDistribution: dataUtils.pre('{\\str{3 * -4 = -12}}'),
			resultDistribution: dataUtils.pre('{\\str{&nbsp; We now have 6a and -12 or 6a + (-12)}}') 
			}
			,
			// problem 2
			{
				prob: dataUtils.pre('{\\str{-5 (3m + 2n)}'),
				buttonValueA: 'F',
				buttonLabelA: dataUtils.pre('\\str{-25mn}'),
				buttonValueB: 'F',
				buttonLabelB: dataUtils.pre('\\str{-15m + 2n}'),
				buttonValueC: 'T',
				buttonLabelC: dataUtils.pre('\\str{-15m - 10n}'),
				buttonValueD: 'F',
				buttonLabelD: dataUtils.pre('\\str{-5mn}'),
				textAnswer: ' &nbsp; -15m - 10n', 
				template: 'twoDistributions',
				firstDistribution: dataUtils.pre('{\\str{-5 * 3m  =  -15m}}'),
				secondDistribution: dataUtils.pre('{\\str{-5 * 2n  =  -10n}}'),
				resultDistribution: dataUtils.pre('{\\str{&nbsp; We now have -15m and -10n or -15m + (-10n)}}') 
			}
			,
			// problem 3
			{
				prob: dataUtils.pre('{\\str{-2a (-3a - 4)}'),
				buttonValueA: 'F',
				buttonLabelA: dataUtils.pre('\\str{-14a<sup>3</sup>}'),
				buttonValueB: 'F',
				buttonLabelB: dataUtils.pre('\\str{14a<sup>3</sup>}'),
				buttonValueC: 'F',
				buttonLabelC: dataUtils.pre('\\str{6a<sup>2</sup> - 4}'),
				buttonValueD: 'T',
				buttonLabelD: dataUtils.pre('\\str{6a<sup>2</sup> + 8a}'),
				textAnswer: ' &nbsp; 6a<sup>2</sup> + 8a', 
				template: 'twoDistributions',
				firstDistribution: dataUtils.pre('{\\str{-2a * -3a   =  6a<sup>2</sup>}}'),
				secondDistribution: dataUtils.pre('{\\str{-2a * -4   =  8a }}'),
				resultDistribution: dataUtils.pre('{\\str{&nbsp; We now have 6a<sup>2</sup> and 8a or 6a<sup>2</sup> + 8a}}') 
			}
			,
			// problem 4
			{
				prob: dataUtils.pre('{\\str{6x (-2x + 3y)}'),
				buttonValueA: 'F',
				buttonLabelA: dataUtils.pre('\\str{-12x<sup>2</sup> + 3y}'),
				buttonValueB: 'F',
				buttonLabelB: dataUtils.pre('\\str{6xy}'),
				buttonValueC: 'T',
				buttonLabelC: dataUtils.pre('\\str{-12x<sup>2</sup> + 18xy}'),
				buttonValueD: 'F',
				buttonLabelD: dataUtils.pre('\\str{6x<sup>2</sup>y}'),
				textAnswer: ' &nbsp; -12x<sup>2</sup> + 18xy', 
				template: 'twoDistributions',
				firstDistribution: dataUtils.pre('{\\str{6x * -2x  =  -12x<sup>2</sup>}}'),
				secondDistribution: dataUtils.pre('{\\str{6x * 3y  =   18xy}}'),
				resultDistribution: dataUtils.pre('{\\str{&nbsp; We now have -12x<sup>2</sup> and 18xy or -12x<sup>2</sup> + 18xy}}') 
			}
			,
			// problem 5
			{
				prob: dataUtils.pre('{\\str{-4x (2x - 2y + 4)}'),
				buttonValueA: 'F',
				buttonLabelA: dataUtils.pre('\\str{-16x<sup>2</sup>y + 4}'),
				buttonValueB: 'T',
				buttonLabelB: dataUtils.pre('\\str{-8x<sup>2</sup> + 8xy - 16x}'),
				buttonValueC: 'F',
				buttonLabelC: dataUtils.pre('\\str{-16x}'),
				buttonValueD: 'F',
				buttonLabelD: dataUtils.pre('\\str{-8x<sup>2</sup> - 2y + 4}'),
				textAnswer: ' &nbsp; -8x<sup>2</sup> + 8xy - 16x', 
				template: 'threeDistributions',
				firstDistribution: dataUtils.pre('{\\str{-4x * 2x  =  -8x<sup>2</sup>}}'),
				secondDistribution: dataUtils.pre('{\\str{-4x * -2y  =  8xy}}'),
				thirdDistribution: dataUtils.pre('{\\str{-4x * 4  =  -16x}}'),
				resultDistribution: dataUtils.pre('{\\str{&nbsp; We now have -8x<sup>2</sup> and 8xy and -16x or  -8x<sup>2</sup> + 8xy + (-16x)}}') 
			}
			,
			// problem 6
			{
				prob: dataUtils.pre('{\\str{-m (-3m + 2n<sup>3</sup> - 1))}'),
				buttonValueA: 'T',
				buttonLabelA: dataUtils.pre('\\str{3m<sup>2</sup> - 2mn<sup>3</sup> + m}'),
				buttonValueB: 'F',
				buttonLabelB: dataUtils.pre('\\str{-4m - 2mn<sup>3</sup> - m }'),
				buttonValueC: 'F',
				buttonLabelC: dataUtils.pre('\\str{3m<sup>2</sup> - 2n<sup>3</sup> + 1}'),
				buttonValueD: 'F',
				buttonLabelD: dataUtils.pre('\\str{-m<sup>2</sup> + m}'),
				textAnswer: ' &nbsp; 3m<sup>2</sup> - 2mn<sup>3</sup> + m', 
				template: 'threeDistributions',
				firstDistribution: dataUtils.pre('{\\str{-m * -3m  =  3m<sup>2</sup>}}'),
				secondDistribution: dataUtils.pre('{\\str{-m * 2n<sup>3</sup>  =  -2mn<sup>3</sup> }}'),
				thirdDistribution: dataUtils.pre('{\\str{-m * -1  =  m}}'),
				resultDistribution: dataUtils.pre('{\\str{&nbsp; We now have 3m<sup>2</sup> and -2mn<sup>3</sup> and m or  3m<sup>2</sup>  +  (-2mn<sup>3</sup>)  +  m}}') 
			}
			,
			// problem 7
			{
				prob: dataUtils.pre('{\\str{(-1)(-6x<sup>2</sup> - 2x + 7)}'),
				buttonValueA: 'F',
				buttonLabelA: dataUtils.pre('\\str{8x<sup>3</sup> - 7}'),
				buttonValueB: 'F',
				buttonLabelB: dataUtils.pre('\\str{6x<sup>2</sup> - 2x + 7}'),
				buttonValueC: 'T',
				buttonLabelC: dataUtils.pre('\\str{6x<sup>2</sup> + 2x - 7}'),
				buttonValueD: 'F',
				buttonLabelD: dataUtils.pre('\\str{-8x<sup>3</sup> + 7}'),
				textAnswer: ' &nbsp; 6x<sup>2</sup> + 2x - 7', 
				template: 'threeDistributions',
				firstDistribution: dataUtils.pre('{\\str{-1 * -6x<sup>2</sup>  =  6x<sup>2</sup>}}'),
				secondDistribution: dataUtils.pre('{\\str{-1 * -2x  =  2x}}'),
				thirdDistribution: dataUtils.pre('{\\str{-1 * 7  =  -7 }}'),
				resultDistribution: dataUtils.pre('{\\str{&nbsp; We now have 6x<sup>2</sup> and 2x and -7 or 6x<sup>2</sup> + 2x + (-7)}}') 
			}
			,
			// problem 8
			{
				prob: dataUtils.pre(
									'{\\grp'
										+'{\\frac{\\fracstr{2}}{\\fracstr{3}}}'
										+'{\\str{(12a<sup>2</sup> + 6a - 18)}'
									+'}'
									),
				buttonValueA: 'F',
				buttonLabelA: dataUtils.pre('\\str{0}'),
				buttonValueB: 'T',
				buttonLabelB: dataUtils.pre('\\str{8a<sup>2</sup> + 4a - 12}'),
				buttonValueC: 'F',
				buttonLabelC: dataUtils.pre('\\str{12a<sup>2</sup> - 12}'),
				buttonValueD: 'F',
				buttonLabelD: dataUtils.pre('\\str{8a<sup>2</sup> + 6a - 18}'),
				textAnswer: ' &nbsp; 8a<sup>2</sup> + 4a - 12', 
				template: 'threeDistributions',
				firstDistribution: dataUtils.pre(
									'{\\grp'
										+'{\\css'
											+'{\\frac{\\fracstr{2}}{\\fracstr{3}}}'
											+'{fracNoMargin}'
										+'}'
										+'{\\str{* 12a<sup>2</sup>  =  8a<sup>2</sup>}}'
									+'}'
									),
				secondDistribution: dataUtils.pre(
									'{\\grp'
										+'{\\css'
											+'{\\frac{\\fracstr{2}}{\\fracstr{3}}}'
											+'{fracNoMargin}'
										+'}'
										+'{\\str{* 6a  =  4a}}'
									+'}'
									),
				thirdDistribution: dataUtils.pre(
									'{\\grp'
										+'{\\css'
											+'{\\frac{\\fracstr{2}}{\\fracstr{3}}}'
											+'{fracNoMargin}'
										+'}'
										+'{\\str{* -18  =  -12}}'
									+'}'
									),
				resultDistribution: dataUtils.pre('{\\str{&nbsp; We now have 8a<sup>2</sup> and 4a and -12  or  8a<sup>2</sup> + 4a + (-12)}}') 
			}
			,
			// problem 9
			{
				prob: dataUtils.pre(
									'{\\grp'
										+'{\\frac{\\fracstr{1m}}{\\fracstr{4}}}'
										+'{\\str{(4m - 12mn + 20)}'
									+'}'
									),
				buttonValueA: 'F',
				buttonLabelA: dataUtils.pre('\\str{1 - 12n + 5m}'),
				buttonValueB: 'F',
				buttonLabelB: dataUtils.pre('\\str{-12n + 5m}'),
				buttonValueC: 'F',
				buttonLabelC: dataUtils.pre('\\str{-4m<sup>3</sup> + 5m}'),
				buttonValueD: 'T',
				buttonLabelD: dataUtils.pre('\\str{m<sup>2</sup> - 3m<sup>2</sup>n + 5m}'),
				textAnswer: ' &nbsp; m<sup>2</sup> - 3m<sup>2</sup>n + 5m', 
				template: 'threeDistributions',
				firstDistribution: dataUtils.pre(
									'{\\grp'
										+'{\\css'
											+'{\\frac{\\fracstr{1m}}{\\fracstr{4}}}'
											+'{fracNoMargin}'
										+'}'
										+'{\\str{* 4m  =  m<sup>2</sup>}}'
									+'}'
									),
				secondDistribution: dataUtils.pre(
									'{\\grp'
										+'{\\css'
											+'{\\frac{\\fracstr{1m}}{\\fracstr{4}}}'
											+'{fracNoMargin}'
										+'}'
										+'{\\str{* -12mn  =  -3m<sup>2</sup>n}}'
									+'}'
									),
				thirdDistribution: dataUtils.pre(
									'{\\grp'
										+'{\\css'
											+'{\\frac{\\fracstr{1m}}{\\fracstr{4}}}'
											+'{fracNoMargin}'
										+'}'
										+'{\\str{* 20  =  5m}}'
									+'}'
									),
				resultDistribution: dataUtils.pre('{\\str{&nbsp; We now have m<sup>2</sup> and -3m<sup>2</sup>n and 5m or  m<sup>2</sup> + (-3m<sup>2</sup>n) + 5m}}') 
			}
			,
			// problem 10
			{
				prob: dataUtils.pre(
									'{\\\css'
										+'{\\grp'
											+'{\\frac{\\fracstr{-5ab}}{\\fracstr{6}}}'
											+'{\\css'
												+'{\\str{(}}'
												+'{hugeAndThin}'
											+'}'
											+'{\\frac{\\fracstr{-2a}}{\\fracstr{3}}}'
											+'{\\str{-}}'
											+'{\\frac{\\fracstr{3b}}{\\fracstr{4}}}'
											+'{\\str{+}}'
											+'{\\frac{\\fracstr{1}}{\\fracstr{6}}}'
											+'{\\css'
												+'{\\str{)}}'
												+'{hugeAndThin}'
											+'}'
										+'}'
										+'{fracNoMargin}'
									+'}'
									),
				buttonValueA: 'F',
				buttonLabelA: dataUtils.pre(
								'\\css'
									+'{\\grp'
										+'{\\frac{\\fracstr{-5b}}{\\fracstr{9}}}'
										+'{\\str{+}}'
										+'{\\frac{\\fracstr{5a}}{\\fracstr{8}}}'
										+'{\\str{+}}'
										+'{\\frac{\\fracstr{1}}{\\fracstr{6}}}'
									+'}'
									+'{fracNoMargin}'
											),
				buttonValueB: 'F',
				buttonLabelB: dataUtils.pre(
								'\\css'
									+'{\\grp'
										+'{\\frac{\\fracstr{a<sup>2</sup>b}}{\\fracstr{3}}}'
										+'{\\str{-}}'
										+'{\\frac{\\fracstr{4ab<sup>2</sup>}}{\\fracstr{5}}}'
										+'{\\str{-}}'
										+'{\\frac{\\fracstr{1ab}}{\\fracstr{3}}}'
									+'}'
									+'{fracNoMargin}'
											),
				buttonValueC: 'F',
				buttonLabelC: dataUtils.pre(
								'\\css'
									+'{\\grp'
										+'{\\str{-b}}'
										+'{\\str{+}}'
										+'{\\frac{\\fracstr{5a}}{\\fracstr{8}}}'
										+'{\\str{-}}'
										+'{\\frac{\\fracstr{5}}{\\fracstr{36}}}'
									+'}'
									+'{fracNoMargin}'
											),
				buttonValueD: 'T',
				buttonLabelD: dataUtils.pre(
								'\\css'
									+'{\\grp'
										+'{\\frac{\\fracstr{-5a<sup>2</sup>b}}{\\fracstr{9}}}'
										+'{\\str{+}}'
										+'{\\frac{\\fracstr{5ab<sup>2</sup>}}{\\fracstr{8}}}'
										+'{\\str{-}}'
										+'{\\frac{\\fracstr{5ab}}{\\fracstr{36}}}'
									+'}'
									+'{fracNoMargin}'
											),
				textAnswer: dataUtils.pre(
								'\\css'
									+'{\\grp'
										+'{\\str{&nbsp;}}'
										+'{\\frac{\\fracstr{-5a<sup>2</sup>b}}{\\fracstr{9}}}'
										+'{\\str{+}}'
										+'{\\frac{\\fracstr{5ab<sup>2</sup>}}{\\fracstr{8}}}'
										+'{\\str{-}}'
										+'{\\frac{\\fracstr{5ab}}{\\fracstr{36}}}'
									+'}'
									+'{fracNoMargin}'
							), 
				template: 'threeDistFractions',
				firstDistribution: dataUtils.pre(
									'{\\css'
										+'{\\grp'
											+'{\\frac{\\fracstr{-5ab}}{\\fracstr{6}}}'
											+'{\\str{*}}'
											+'{\\frac{\\fracstr{2a}}{\\fracstr{3}}}'
											+'{\\str{=}}'
											+'{\\frac{\\fracstr{-5a<sup>2</sup>b}}{\\fracstr{9}}}'
										+'}'
										+'{fracNoMargin}'
									+'}'
									),
				secondDistribution: dataUtils.pre(
									'{\\css'
										+'{\\grp'
											+'{\\frac{\\fracstr{-5ab}}{\\fracstr{6}}}'
											+'{\\str{*}}'
											+'{\\frac{\\fracstr{-3b}}{\\fracstr{4}}}'
											+'{\\str{=}}'
											+'{\\frac{\\fracstr{5ab<sup>2</sup>}}{\\fracstr{8}}}'
										+'}'
										+'{fracNoMargin}'
									+'}'
									),
				thirdDistribution: dataUtils.pre(
									'{\\css'
										+'{\\grp'
											+'{\\frac{\\fracstr{-5ab}}{\\fracstr{6}}}'
											+'{\\str{*}}'
											+'{\\frac{\\fracstr{1}}{\\fracstr{6}}}'
											+'{\\str{=}}'
											+'{\\frac{\\fracstr{-5ab}}{\\fracstr{36}}}'
										+'}'
										+'{fracNoMargin}'
									+'}'
									),
				resultDistribution: dataUtils.pre(
									'{\\str{&nbsp; We now have:}}'
									+'{\\html{&nbsp;}}'
									+'{\\css'
										+'{\\grp'		  
											+'{\\frac{\\fracstr{-5a<sup>2</sup>b}}{\\fracstr{9}}}'
											+'{\\str{and}}'
											+'{\\frac{\\fracstr{5ab<sup>2</sup>}}{\\fracstr{8}}}'
											+'{\\str{and}}'
											+'{\\frac{\\fracstr{-5ab}}{\\fracstr{36}}}'		
										+'}'
										+'{fracNoMargin}'
									+'}'
									+'{\\html{&nbsp;}}'
									+'{\\css'
										+'{\\grp'	
											+'{\\str{or}}'
											+'{\\frac{\\fracstr{-5a<sup>2</sup>b}}{\\fracstr{9}}}'
											+'{\\str{+}}'
											+'{\\frac{\\fracstr{5ab<sup>2</sup>}}{\\fracstr{8}}}'
											+'{\\str{+}}'
											+'{\\frac{\\fracstr{-5ab}}{\\fracstr{36}}}'
										+'}'
										+'{fracNoMargin}'
									+'}'
								) 
			}
        ];

	return dataUtils.build(desc, template, data);
}]);






