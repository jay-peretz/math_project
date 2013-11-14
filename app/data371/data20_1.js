/*global angular */

angular.module('mathSkills').service('data20_1', ['dataUtils', function (dataUtils) {
    var desc = {
			title: '20.1 Solving the Basic Percent Problem',
			path: '20.1-solving-the-basic-percent-problem',
            children: []
        },
        template = {
            main: {
                title: 'Change a Percent to a Decimal',
                children: [{
                    title: 'Main Answer',
                    children: [{
                         problem: '\\str{What is $problemPercent% of $problemNumber?}',
						answer: '\\grp{\\input{$answer}}',
						controls: {
							"checkAnswer": true,
							"help": '\\rowgrp'
							+'{\\row{\\str{The percent expression is $problemPercent%}}{\\sign{&sdot;}}{\\str{$problemNumber}}}'
							+'{\\html{&nbsp;}}'
							+'{\\str{Change the percent value into its equivalent decimal by dividing by 100:}}'
							+'{\\html{&nbsp;}}'
							+'{\\row{\\str{$problemPercent}}{\\sign{&divide;}}{\\str{100}}{\\sign{ = }}{\\str{ $problemEquivalent}}}'
							+'{\\html{&nbsp;}}'
							+'{\\str{The problem now is:}}'
							+'{\\html{&nbsp;}}'
							+'{\\row{\\str{$problemEquivalent}}{\\sign{&sdot;}}{\\str{$problemNumber}}{\\sign{ = }}{\\str{$answer}}}'
							+'{\\html{&nbsp;}}'
							+'{\\css{\\str{Answer:  $answer}}{help-answer-text help-answer-margin-right}}'
							+'{\\html{&nbsp;}}'
						}
                    }]
                }]
            }, 
            main2: {
                title: 'Change a Percent to a Decimal',
                children: [{
                    title: 'Main Answer',
                    children: [{
                         problem: '\\str{$problemPercent% of $problemNumber is what amount?}',
						answer: '\\grp{\\input{$answer}}',
						controls: {
							"checkAnswer": true,
							"help": '\\rowgrp'
							+'{\\row{\\str{The percent expression is $problemPercent%}}{\\sign{&sdot;}}{\\str{$problemNumber}}}'
							+'{\\html{&nbsp;}}'
							+'{\\str{Change the percent value into its equivalent decimal by dividing by 100:}}'
							+'{\\html{&nbsp;}}'
							+'{\\row{\\str{$problemPercent}}{\\sign{&divide;}}{\\str{100}}{\\sign{ = }}{\\str{ $problemEquivalent}}}'
							+'{\\html{&nbsp;}}'
							+'{\\str{The problem now is:}}'
							+'{\\html{&nbsp;}}'
							+'{\\row{\\str{$problemEquivalent}}{\\sign{&sdot;}}{\\str{$problemNumber}}{\\sign{ = }}{\\str{$answer}}}'
							+'{\\html{&nbsp;}}'
							+'{\\css{\\str{Answer:  $answer}}{help-answer-text help-answer-margin-right}}'
							+'{\\html{&nbsp;}}'
						}
                    }]
                }]
            },
			fraction: {
                title: 'Change a Percent to a Decimal',
                children: [{
                    title: 'Main Answer',
                    children: [{
                         problem: '\\rowgrp'
						 +'{\\row{\\mixed{\\html{$problemWhole}}{\\frac{\\str{$problemNumerator}}{\\str{$problemDenominator}}}}'
						 +'{\\str{%}}'
						 +'{\\wholepart{\xA0 of $problemNumber}}}'
						 +'{\\row{\\html{&nbsp;}}'
						 +'{\\str{Solve by changing the fractional percentage into a decimal.}}}',
						answer: '\\grp{\\input{$answer}}',
						controls: {
							"checkAnswer": true,
							"help": '\\rowgrp'
							+'{\\str{The percent expression is: }}'
							+'{\\html{&nbsp;}}'
							+'{\\row'
							+'{\\mixed{\\html{$problemWhole}}{\\frac{\\str{$problemNumerator}}{\\str{$problemDenominator}}}}'
							+'{\\str{%}}{\\sign{&sdot;}}{\\str{$problemNumber}}{\\sign{ = }}}'  
							+'{\\html{&nbsp;}}'
							+'{\\str{First... change the percent value in fractional form into the decimal form:}}'
							+'{\\html{&nbsp;}}'
							+'{\\row{\\mixed{\\html{$problemWhole}}{\\frac{\\str{$problemNumerator}}{\\str{$problemDenominator}}}}{\\str{%}}'
							+'{\\sign{ = }}{\\str{$fractionAsDecimal}}{\\str{%}}}'
							+'{\\html{&nbsp;}}'
							+'{\\str{Then... change the percent value into its equivalent decimal by dividing by 100:}}'
							+'{\\html{&nbsp;}}'
							+'{\\row{\\str{$fractionAsDecimal}}{\\sign{&divide;}}{\\str{100}}{\\sign{ = }}{\\str{ $fractionAsPercent}}}'
							+'{\\html{&nbsp;}}'
							+'{\\str{The problem now is:}}'
							+'{\\html{&nbsp;}}'
							+'{\\row{\\str{$fractionAsPercent}}{\\sign{&sdot;}}{\\str{$problemNumber}}{\\sign{ = }}{\\str{$answer}}}'
							+'{\\html{&nbsp;}}'
							+'{\\css{\\str{Answer:  $answer}}{help-answer-text help-answer-margin-right}}'
							+'{\\html{&nbsp;}}'
						}
                    }]
                }]
            },
			fractionForm: {
                title: 'Change a Percent to a Decimal',
                children: [{
                    title: 'Main Answer',
                    children: [{
                         problem: '\\rowgrp'
						 +'{\\row{\\mixed{\\html{$problemWhole}}{\\frac{\\str{$problemNumerator}}{\\str{$problemDenominator}}}}'
						 +'{\\str{%}}'
						 +'{\\wholepart{\xA0 of $problemNumber}}}'
						 +'{\\row{\\html{&nbsp;}}'
						 +'{\\str{Solve by changing the fractional percentage into a fraction.}}}',
						answer: '\\mixed{input{$wholeAnswer}}{\\frac{\\input{$numAnswer}}{\\input{$denAnswer}}}',
						controls: {
							"checkAnswer": true,
							"help": '\\rowgrp'
							+'{\\str{The percent expression is: }}'
							+'{\\html{&nbsp;}}'
							+'{\\row'
							+'{\\mixed{\\html{$problemWhole}}{\\frac{\\str{$problemNumerator}}{\\str{$problemDenominator}}}}'
							+'{\\str{%}}{\\sign{&sdot;}}{\\str{$problemNumber}}{\\sign{\xA0 = }}}'  
							+'{\\html{&nbsp;}}'
							+'{\\str{First... change the percent in fractional form into a fraction:}}'
							+'{\\html{&nbsp;}}'
							+'{\\row{\\mixed{\\html{$problemWhole}}{\\frac{\\str{$problemNumerator}}{\\str{$problemDenominator}}}}'
							+'{\\css{\\html{ \xF7 }}{bigger}}'
							+'{\\frac{\\str{100}}{\\str{1}}}'
							+'{\\sign{\xA0 = \xA0}}'
							+'{\\mixed{html{$wholeNew}}{\\frac{\\str{$numNew}}{\\str{$denNew}}}}}'
							+'{\\html{&nbsp;}}'
							+'{\\str{The problem now is:}}'
							+'{\\html{&nbsp;}}'
							+'{\\row{\\mixed{html{$wholeNew}}{\\frac{\\str{$numNew}}{\\str{$denNew}}}}{\\sign{&sdot;}}{\\str{$problemNumber}}{\\sign{\xA0 = \xA0}}{\\mixed{html{$wholeAnswer}}{\\frac{\\str{$numAnswer}}{\\str{$denAnswer}}}}}'
							+'{\\html{&nbsp;}}'
							+'{\\css{\\grp'
								+'{\\str{Answer: }}'
								+'{\\mixed{html{$wholeAnswer}}{\\frac{\\str{$numAnswer}}{\\str{$denAnswer}}}}'
								+'}'
							+'{help-answer-text help-answer-margin-right}}'
							+'{\\html{&nbsp;}}'
						}
                    }]
                }]
            }
        },	
        data = [
			// problem 1
            { problemPercent: '1', problemNumber: '113', problemEquivalent: '0.01', answer: '1.13', template: 'main'  },
			// problem 2
            { problemPercent: '54', problemNumber: '31', problemEquivalent: '0.54', answer: '16.74', template: 'main2'  },
			// problem 3
            { problemPercent: '223', problemNumber: '157', problemEquivalent: '2.23', answer: '350.11', template: 'main'  },
			// problem 4
            { problemPercent: '30', problemNumber: '60', problemEquivalent: '0.3', answer: '18', template: 'main2'  },
			// problem 5
            { problemPercent: '12.8', problemNumber: '300', problemEquivalent: '0.128', answer: '38.4', template: 'main'  },
			// problem 6
			{ problemWhole: '&nbsp;', problemNumerator: '1', problemDenominator: '10', problemNumber: '140', fractionAsDecimal: '0.1', fractionAsPercent: '0.001',  answer: '0.14', template: 'fraction'  },
			// problem 7
			{ problemWhole: '2', problemNumerator: '1', problemDenominator: '2', problemNumber: '60', fractionAsDecimal: '2.5', fractionAsPercent: '0.025',  answer: '1.5', template: 'fraction'  },
			// problem 8
			{ problemWhole: '', problemNumerator: '5', problemDenominator: '8', problemNumber: '120', wholeNew: '', numNew: '1', denNew: '160',  wholeAnswer: '', numAnswer: '3', denAnswer: '4', template: 'fractionForm'  },
			// problem 9 
			{ problemWhole: '137', problemNumerator: '1', problemDenominator: '2', problemNumber: '72', wholeNew: '', numNew: '11', denNew: '8',  wholeAnswer: '99', numAnswer: '', denAnswer: '', template: 'fractionForm'  },
			// problem 10 
			{ problemWhole: '83', problemNumerator: '1', problemDenominator: '3', problemNumber: '180', wholeNew: '', numNew: '5', denNew: '6',  wholeAnswer: '150', numAnswer: '', denAnswer: '',  answer: '150', template: 'fractionForm'  },
        ];


    return dataUtils.build(desc, template, data);
}]);

