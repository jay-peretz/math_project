/*global angular */

angular.module('mathSkills').service('data_i_3', ['dataUtils', function (dataUtils) {
    var desc = {
            title: 'I.3 Percents to Fractions | Fractions to Percents',
            path: 'I.3-percent-fraction',
            children: []
        },
        template = {
            main: {
                title: 'Change a Fraction to a Percent (directly)',
                children: [{
                    title: 'Main Answer',
                    children: [{
						problem: '\\rowgrp'
						+'{\\grp{\\str{Change the fraction to a percent (directly):}}}'
						+'{\\grp{\\html{&nbsp;}}}'
						+'{\\grp{\\mixed{\\html{$fractionWhole}}{\\frac{\\fracstr{$fractionNum}}{\\fracstr{$fractionDen}}}}}',
						answer: '\\grp{\\input{$answerPercent}}{\\str{%}}',	
						controls: {
							"checkAnswer": true,
							"help": '\\rowgrp'
							+'{\\grp{\\frac{\\str{$fractionNum}}{\\str{$fractionDen}}}'
							+'{\\css{\\html{&bull;}}{bigger}}{\\str{\xA0 100}}'
							+'{\\sign{\xA0 = \xA0}}'
							+'{\\html{$answerPercent}}{\\str{%}}}'
							+'{\\grp{\\html{&nbsp;}}}'
							+'{\\grp{\\css{\\html{\xA0 Answer: \xA0 $answerPercent %}}{help-answer-text}}}'
						}
					}]
                }]
            },
			second: {
                title: 'Change a Fraction to a Percent (directly)',
                children: [{
                    title: 'Main Answer',
                    children: [{
						problem: '\\rowgrp'
						+'{\\grp{\\str{Change the fraction to a percent (directly):}}}'
						+'{\\grp{\\html{&nbsp;}}}'
						+'{\\grp{\\mixed{\\html{$fractionWhole}}{\\frac{\\fracstr{$fractionNum}}{\\fracstr{$fractionDen}}}}}',
						answer: '\\grp'
									+'{\\mixed{\\input{$answerWhole}}{\\frac{\\input{$answerNum}}{\\input{$answerDen}}}}'
									+'{\\str{%}}',	
						controls: {
							"checkAnswer": true,
							"help": '\\rowgrp'
							+'{\\grp{\\frac{\\str{$fractionNum}}{\\str{$fractionDen}}}'
							+'{\\css{\\html{&bull;}}{bigger}}{\\str{\xA0 100}}'
							+'{\\sign{\xA0 = \xA0}}'
							+'{\\mixed{\\html{$answerWhole}}{\\frac{\\fracstr{$answerNum}}{\\fracstr{$answerDen}}}}'
							+'{\\str{%}}}'
							+'{\\grp{\\html{&nbsp;}}}'
							+'{\\css'
								+'{\\grp'
									+'{\\html{\xA0 Answer:}}'
									+'{\\mixed{\\html{$answerWhole}}{\\frac{\\fracstr{$answerNum}}{\\fracstr{$answerDen}}}}'
									+'{\\str{%}}'
								+'}'
								+'{help-answer-text}'
							+'}'
						}
					}]
                }]
            },
			third: {
                title: 'Decimal & Fraction Form of Percents',
                children: [{
                    title: 'Main Answer',
                    children: [{
						problem: '\\rowgrp'
									+'{\\str{Change the fraction to a mixed number percentage:}}'
									+'{\\html{&nbsp;}}'
									+'{\\mixed{\\html{$fractionWhole}}{\\frac{\\fracstr{$fractionNum}}{\\fracstr{$fractionDen}}}}',
						answer: '\\grp'
									+'{\\mixed{\\input{$answerFractionWhole}}{\\frac{\\input{$answerFractionNum}}{\\input{$answerFractionDen}}}}'
									+'{\\str{%}}',		
						controls: {
							"checkAnswer": true,
							"help": '\\rowgrp'
							+'{\\grp{\\mixed{\\html{$fractionWhole}}{\\frac{\\fracstr{$fractionNum}}{\\fracstr{$fractionDen}}}}'
							+'{\\html{ \xA0 &bull; \xA0 }}'
							+'{\\frac{\\fracstr{100}}{\\fracstr{1}}}'
							+'{\\sign{ \xA0 = \xA0 }}'
							+'{\\mixed{\\html{$answerFractionWhole}}{\\frac{\\fracstr{$answerFractionNum}}{\\fracstr{$answerFractionDen}}}}{\\str{%}}}'
							+'{\\grp{css{\\str{Answer: \xA0 \xA0}}{help-answer-text}}'
							+'{css{\\mixed{\\html{$answerFractionWhole}}{\\frac{\\fracstr{$answerFractionNum}}{\\fracstr{$answerFractionDen}}}}{help-answer-text-tight}}{css{\\str{%}}{help-answer-text-tight}}}'
						}
						
					}, {
						problem: '\\rowgrp'
						+'{\\grp{\\str{Change the fraction to a mixed number percentage:}}}'
						+'{\\grp{\\html{&nbsp;}}}'
						+'{\\grp{\\mixed{\\html{$fractionWhole}}{\\frac{\\fracstr{$fractionNum}}{\\fracstr{$fractionDen}}}}}',
						answer: '\\css{\\rowgrp'
						+'{\\grp{\\html{&nbsp;}}'
						+'{\\mixed{\\str{$answerFractionWhole}}{\\frac{\\str{$answerFractionNum}}{\\str{$answerFractionDen}}}}'
						+'{\\str{%}}}'
						+'{\\html{&nbsp;}}'
						+'{\\html{&nbsp;}}'
						+'{css{\\str{Change the mixed number percentage to a decimal percentage (round the decimal to the tenths place):}}{alert alert-info}}'
						+'{\\html{&nbsp;}}'
						+'{\\grp{\\input{$percentDecimal}}{\\str{%}}}}{well}',
						
						controls: {
							"checkAnswer": true,
							"help": '\\rowgrp'
							+'{\\grp{\\mixed{\\html{$fractionWhole}}{\\frac{\\fracstr{$fractionNum}}{\\fracstr{$fractionDen}}}}'
							+'{\\html{ \xA0 &bull; \xA0 }}'
							+'{\\frac{\\fracstr{100}}{\\fracstr{1}}}'
							+'{\\sign{ \xA0 = \xA0 }}'
							+'{\\mixed{\\html{$answerFractionWhole}}{\\frac{\\fracstr{$answerFractionNum}}{\\fracstr{$answerFractionDen}}}}{\\str{%}}}'
							+'{\\grp{\\mixed{\\html{$answerFractionWhole}}{\\frac{\\fracstr{$answerFractionNum}}{\\fracstr{$answerFractionDen}}}}{\\str{%}}'
							+'{\\sign{ \xA0 = \xA0 }}'
							+'{\\str{$percentDecimal}}{\\str{% (rounded to the nearest tenth)}}}'
							+'{\\html{&nbsp}}'
							+'{\\grp{css{\\str{Answer: \xA0 \xA0}}{help-answer-text}}'
							+'{css{\\str{$percentDecimal}}{help-answer-text-tight}}{css{\\str{%}}{help-answer-text-tight}}}'
						}
					}]
                }]
            },
			fourth: {
                title: 'Change a Percent to a Fraction (Directly)',
                children: [{
                    title: 'Main Answer',
                    children: [{
						problem: '\\rowgrp'
						+'{\\grp{\\str{Change the percent into a fraction (reduced to lowest terms):}}}'
						+'{\\grp{\\html{&nbsp;}}}'
						+'{\\grp{\\str{$decimalPercent}}{\\str{%}}}',
						answer: '\\grp{\\frac{\\input{$answerNum}}{\\input{$answerDen}}}',	
						controls: {
							"checkAnswer": true,
							"help": '\\rowgrp'
							+'{\\grp{\\str{$decimalPercent}}{\\str{%}}}'
							+'{\\html{&nbsp;}}'
							+'{\\str{can be converted into a fraction by dividing by 100.}}'
							+'{\\grp{\\str{$helpNum}}{\\sign{&divide;}}{\\str{$helpDen}}'
							+'{\\str{is the same as: }}}'	
							+'{\\html{&nbsp;}}'
							+'{\\frac{\\str{$helpNum}}{\\str{$helpDen}}}'
							+'{\\html{&nbsp;}}'
							+'{\\str{Always reduce the fraction if possible:}}'
							+'{\\html{&nbsp;}}'
							+'{\\grp{css{\\str{Answer: \xA0 \xA0}}{help-answer-text}}'
							+'{\\css{\\frac{\\str{$answerNum}}{\\str{$answerDen}}}{help-answer-text-tight}}'

						}
					}]
                }]
            },
			fifth: {
                title: 'Change a Percent to a Fraction (Directly)',
                children: [{
                    title: 'Main Answer',
                    children: [{
						problem: '\\rowgrp'
						+'{\\grp{\\str{Change the percent into a fraction (reduced to lowest terms):}}}'
						+'{\\grp{\\html{&nbsp;}}}'
						+'{\\grp{\\str{$decimalPercent}}{\\str{%}}}',
						answer: '\\grp'
									+'{\\mixed{\\input{$finalAnsWhole}}{\\frac{\\input{$finalAnsNum}}{\\input{$finalAnsDen}}}}',	
						controls: {
							"checkAnswer": true,
							"help": '\\rowgrp'
										+'{\\grp{\\str{$decimalPercent}}{\\str{%}}}'
										+'{\\html{&nbsp;}}'
										+'{\\str{can be converted into a fraction by dividing by 100.}}'
										+'{\\grp{\\str{$helpNum}}{\\sign{&divide;}}{\\str{$helpDen}}'
										+'{\\str{is the same as: }}}'	
										+'{\\html{&nbsp;}}'
										+'{\\frac{\\str{$helpNum}}{\\str{$helpDen}}}'
										+'{\\html{&nbsp;}}'
										+'{\\str{Always reduce the fraction if possible:}}'
										+'{\\html{&nbsp;}}'
										+'{\\css'
											+'{\\grp'
												+'{\\str{Answer: \xA0 \xA0}}'
												+'{\\mixed{\\html{$finalAnsWhole}}{\\frac{\\fracstr{$finalAnsNum}}{\\fracstr{$finalAnsDen}}}}'
											+'}'
											+'{help-answer-text}'
										+'}'
						}
					}]
                }]
            },
			sixth: {
                title: 'Change a Percent to a Fraction (Directly)',
                children: [{
                    title: 'Main Answer',
                    children: [{
						problem: '\\rowgrp'
									+'{\\str{Change the percent into a fraction (reduced to lowest terms)}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp'
										+'{\\mixed{\\html{$problemWhole}}{\\frac{\\fracstr{$problemNum}}{\\fracstr{$problemDen}}}}'
										+'{\\str{%}}'
									+'}',
						answer: '\\grp{\\frac{\\input{$answerNum}}{\\input{$answerDen}}}',			
						controls: {
							"checkAnswer": true,
							"help": '\\rowgrp'
										+'{\\grp'
											+'{\\mixed{\\html{$problemWhole}}{\\frac{\\fracstr{$problemNum}}{\\fracstr{$problemDen}}}}'
											+'{\\str{%}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\str{can be converted into a fraction by dividing by 100.}}'
										+'{\\str{Solve:}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\mixed{\\html{$problemWhole}}{\\frac{\\fracstr{$problemNum}}{\\fracstr{$problemDen}}}}'
											+'{\\sign{&divide;}}'
											+'{\\frac{\\str{100}}{\\str{1}}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\str{Always reduce the fraction if possible.}}'
										+'{\\html{&nbsp;}}'
										+'{\\css'
											+'{\\grp'
												+'{\\str{Answer: \xA0}}'
												+'{\\frac{\\fracstr{$answerNum}}{\\fracstr{$answerDen}}}'
											+'}'
											+'{help-answer-text}'
										+'}'
						}
						
					}]
                }]
            }
	},
        data = [
            // problem 1
            { fractionWhole: '', fractionNum: '2', fractionDen: '5', answerPercent: '40', template: 'main' },
			// problem 2
			{ fractionWhole: '', fractionNum: '7', fractionDen: '20', answerPercent: '35', template: 'main' },
			// problem 3
			{ fractionWhole: '7', fractionNum: '1', fractionDen: '2', answerPercent: '750', template: 'main' },
			// problem 4
			{ fractionWhole: '', fractionNum: '22', fractionDen: '25', answerPercent: '88', template: 'main' },
			// problem 5
			{ fractionWhole: '', fractionNum: '1', fractionDen: '6', answerWhole: '16', answerNum: '2', answerDen: '3', template: 'second' },
			// problem 6
			{ fractionWhole: '&nbsp;', fractionNum: '5', fractionDen: '8', answerFractionWhole: '62', answerFractionNum: '1', answerFractionDen: '2', percentDecimal: '62.5', template: 'third' },
			// problem 7
			{ fractionWhole: '', fractionNum: '9', fractionDen: '7', answerFractionWhole: '128', answerFractionNum: '4', answerFractionDen: '7', percentDecimal: '128.6', template: 'third' },
			// problem 8
			{decimalPercent: '82', answerNum: '41', answerDen: '50', helpNum: '82', helpDen: '100', template: 'fourth'  },
			// problem 9
			{ decimalPercent: '16', answerNum: '4', answerDen: '25', helpNum: '16', helpDen: '100', template: 'fourth' },
			// problem 10	
			{ decimalPercent: '110', answerNum: '11', answerDen: '10', helpNum: '110', helpDen: '100', finalAnsWhole: '1', finalAnsNum: '1', finalAnsDen: '10', template: 'fifth'  },
			
			// problem 11
            { problemWhole: '12', problemNum: '9', problemDen: '10', answerNum: '129', answerDen: '1000', template: 'sixth'  },
			// problem 12
            { problemWhole: '66', problemNum: '2', problemDen: '3', answerNum: '2', answerDen: '3', template: 'sixth' },	
			// problem 13
            { problemWhole: '31', problemNum: '1', problemDen: '4', answerNum: '5', answerDen: '16', template: 'sixth' },
			// problem 14
            { problemWhole: '', problemNum: '3', problemDen: '10', answerNum: '3', answerDen: '1000', template: 'sixth' }
			         
        ];

    return dataUtils.build(desc, template, data);
}]);
