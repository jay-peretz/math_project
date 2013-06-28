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
						answer: '\\input{$answer}',
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
						 +'{\\str{is equal to what amount?}}}',
						answer: '\\input{$answer}',
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
            }
        },	
        data = [
            { problemPercent: '1', problemNumber: '113', problemEquivalent: '0.01', answer: '1.13', template: 'main'  },
            { problemPercent: '54', problemNumber: '31', problemEquivalent: '0.54', answer: '16.74', template: 'main'  },
            { problemPercent: '223', problemNumber: '157', problemEquivalent: '2.23', answer: '350.11', template: 'main'  },
            { problemPercent: '6.06', problemNumber: '44', problemEquivalent: '0.0606', answer: '2.67', template: 'main'  },
            { problemPercent: '86.4', problemNumber: '260', problemEquivalent: '0.864', answer: '224.64', template: 'main'  },
			{ problemWhole: '&nbsp;', problemNumerator: '1', problemDenominator: '10', problemNumber: '140', fractionAsDecimal: '0.1', fractionAsPercent: '0.001',  answer: '0.14', template: 'fraction'  },
			{ problemWhole: '&nbsp;', problemNumerator: '5', problemDenominator: '8', problemNumber: '120', fractionAsDecimal: '0.625', fractionAsPercent: '0.00625',  answer: '0.75', template: 'fraction'  },
			{ problemWhole: '3', problemNumerator: '1', problemDenominator: '10', problemNumber: '50', fractionAsDecimal: '3.1', fractionAsPercent: '0.031',  answer: '1.55', template: 'fraction'  },
			{ problemWhole: '8', problemNumerator: '3', problemDenominator: '4', problemNumber: '60', fractionAsDecimal: '8.75', fractionAsPercent: '0.0875',  answer: '5.25', template: 'fraction'  },
			{ problemWhole: '2', problemNumerator: '1', problemDenominator: '2', problemNumber: '60', fractionAsDecimal: '2.5', fractionAsPercent: '0.025',  answer: '1.5', template: 'fraction'  }
        ];


    return dataUtils.build(desc, template, data);
}]);

