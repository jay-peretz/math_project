/*global angular */

angular.module('mathSkills').service('data19_4', function () {
    var ret = {
			title: '19.4 Change a Percent to a Decimal, then to a Fraction',
			path: '19.4-change-a-percent-to-a-decimal-then-to-a-fraction',
            children: []
        },
        template = {
			main: {
                title: 'Change a Percent to a Fraction (Directly)',
                children: [{
                    title: 'Main Answer',
                    children: [{
						problem: '\\cut'
						+'{\\rowgrp'
						+'{\\grp{\\str{Change this percent into a decimal:}}}'
						+'{\\grp{\\html{&nbsp;}}}'
						+'{\\grp{\\str{$decimalPercent}}{\\str{%}}}}'
						+'{percentDecimalProblem}',
						answer: '\\cut'
						+'{\\grp{\\input{$decimal}}}'
						+'{percentDecimalAnswer}',		
						controls: {
							"checkAnswer": true,
							"help": '\\rowgrp'
							+'{\\row{\\str{$decimalPercent}}{\\str{%}}'
							+'{\\sign{\xA0 = \xA0}}'							
							+'{\\str{$decimal}}}'
							+'{\\row{\\html{&nbsp;}}}'
							+'{\\row{css{\\str{Answer: \xA0 \xA0}}{help-answer-text}}'
							+'{\\css{\\str{$decimal}}{help-answer-text-tight}}}'
						}
						
					}, {
						problem: '\\rowgrp'
						+'{$$percentDecimalProblem}'
						+'{\\html{&nbsp;}}'
						+'{\\grp{str{\xA0 Answer:}}{$$percentDecimalAnswer}}'
						+'{\\html{&nbsp;}}'
						+'{\\str{Change the decimal into a fraction:}}}',
						answer: '\\grp{\\frac{\\input{$answerNum}}{\\input{$answerDen}}}',
						controls: {
							"checkAnswer": true,
							"help": '\\rowgrp'
							+'{\\row{\\str{$decimal}}'
							+'{\\sign{ \xA0 = \xA0 }}'
							+'{\\frac{\\fracstr{$helpNum}}{\\fracstr{$helpDen}}}'
							+'{\\sign{ \xA0 = \xA0 }}'
							+'{\\frac{\\fracstr{$answerNum}}{\\fracstr{$answerDen}}}}'
							+'{\\row{css{\\str{Answer: \xA0 \xA0}}{help-answer-text}}'
							+'{css{\\frac{\\fracstr{$answerNum}}{\\fracstr{$answerDen}}}{help-answer-text-tight}}}'
						}
					}]
                }]
            },
			second: {
                title: 'Change a Percent to a Fraction (Directly)',
                children: [{
                    title: 'Main Answer',
                    children: [{
						problem: '\\rowgrp'
						+'{\\grp{\\str{Change the percent into a fraction (reduced to lowest terms)}}}'
						+'{\\grp{\\html{&nbsp;}}}'
						+'{\\grp{\\mixed{\\html{$problemWhole}}{\\frac{\\fracstr{$problemNum}}{\\fracstr{$problemDen}}}}{\\str{%}}}}',
						answer: '\\grp{\\frac{\\input{$answerNum}}{\\input{$answerDen}}}',			
						controls: {
							"checkAnswer": true,
							"help": '\\rowgrp'
							+'{\\row{\\mixed{\\html{$problemWhole}}{\\frac{\\fracstr{$problemNum}}{\\fracstr{$problemDen}}}}'
							+'{\\sign{ \xA0 = \xA0 }}'
							+'{\\frac{\\str{$helpNum}}{\\str{$helpDen}}}'
							+'{\\sign{\xA0 = \xA0}}'	
							+'{\\frac{\\fracstr{$answerNum}}{\\fracstr{$answerDen}}}}'
							+'{\\row{css{\\str{Answer: \xA0 \xA0}}{help-answer-text}}'
							+'{css{\\frac{\\fracstr{$answerNum}}{\\fracstr{$answerDen}}}{help-answer-text-tight}}{css{\\str{%}}{help-answer-text-tight}}}'
						}
						
					}]
                }]
            },
			third: {
                title: 'Change a Percent to a Fraction (Directly)',
                children: [{
                    title: 'Main Answer',
                    children: [{
						problem: '\\rowgrp'
						+'{\\grp{\\str{Change the percent into a fraction (reduced to lowest terms)}}}'
						+'{\\grp{\\html{&nbsp;}}}'
						+'{\\grp{\\mixed{\\html{$problemWhole}}{\\frac{\\fracstr{$problemNum}}{\\fracstr{$problemDen}}}}{\\str{%}}}}',
						answer: '\\grp{\\frac{\\input{$answerNum}}{\\input{$answerDen}}}',			
						controls: {
							"checkAnswer": true,
							"help": '\\rowgrp'
							+'{\\row{\\mixed{\\html{$problemWhole}}{\\frac{\\fracstr{$problemNum}}{\\fracstr{$problemDen}}}}'
							+'{\\sign{ \xA0 = \xA0 }}'	
							+'{\\frac{\\fracstr{$answerNum}}{\\fracstr{$answerDen}}}}'
							+'{\\row{css{\\str{Answer: \xA0 \xA0}}{help-answer-text}}'
							+'{css{\\frac{\\fracstr{$answerNum}}{\\fracstr{$answerDen}}}{help-answer-text-tight}}{css{\\str{%}}{help-answer-text-tight}}}'
						}
						
					}]
                }]
            },
			fourth: {
                title: 'Change a Percent to a Fraction (Directly)',
                children: [{
                    title: 'Main Answer',
                    children: [{
						problem: '\\cut'
						+'{\\rowgrp'
						+'{\\grp{\\str{Write the percent as a percent in mixed number form:}}}'
						+'{\\grp{\\html{&nbsp;}}}'
						+'{\\grp{\\str{$problemDecimal}}{\\str{%}}}}'
						+'{decimalMixedPercentProblem}',
						answer: '\\cut'
						+'{\\grp{\\mixed{\\input{$answerFractionWhole}}{\\frac{\\input{$answerFractionNum}}{\\input{$answerFractionDen}}}}'
						+'{\\str{%}}}'
						+'{fractionMixedPercentAnswer}',		
						controls: {
							"checkAnswer": true,
							"help": '\\rowgrp'
							+'{\\row{\\str{$problemDecimal}}{\\str{%}}'
							+'{\\sign{ \xA0 = \xA0 }}'
							+'{\\mixed{\\html{$fractionWhole}}{\\frac{\\fracstr{$fractionNum}}{\\fracstr{$fractionDen}}}}{\\str{%}}'
							+'{\\sign{ \xA0 = \xA0 }}'
							+'{\\mixed{\\html{$answerFractionWhole}}{\\frac{\\fracstr{$answerFractionNum}}{\\fracstr{$answerFractionDen}}}}{\\str{%}}}'
							+'{\\row{css{\\str{Answer: \xA0 \xA0}}{help-answer-text}}'
							+'{css{\\mixed{\\html{$answerFractionWhole}}{\\frac{\\fracstr{$answerFractionNum}}{\\fracstr{$answerFractionDen}}}}{help-answer-text-tight}}{css{\\str{%}}{help-answer-text-tight}}}'
						}
						
					}, {
						problem: '\\rowgrp'
						+'{$$decimalMixedPercentProblem}'
						+'{\\grp{str{\xA0 Answer:}}{$$fractionMixedPercentAnswer}}'
						+'{\\html{&nbsp;}}'
						+'{\\str{Change the percent into its equivalent fraction (reduced to lowest terms):}}}',
						answer: '\\grp{\\mixed{\\input{$answerSecondWhole}}{\\frac{\\input{$answerSecondNum}}{\\input{$answerSecondDen}}}}',
						controls: {
							"checkAnswer": true,
							"help": '\\rowgrp'
							+'{\\row{\\mixed{\\html{$answerFractionWhole}}{\\frac{\\fracstr{$answerFractionNum}}{\\fracstr{$answerFractionDen}}}}{\\str{%}}'
							+'{\\sign{ \xA0 = \xA0 }}'
							+'{\\mixed{\\html{$helpWhole}}{\\frac{\\fracstr{$helpNum}}{\\fracstr{$helpDen}}}}'
							+'{\\sign{ \xA0 = \xA0 }}'
							+'{\\mixed{\\html{$answerSecondWhole}}{\\frac{\\fracstr{$answerSecondNum}}{\\fracstr{$answerSecondDen}}}}}'
							+'{\\row{css{\\str{Answer: \xA0 \xA0}}{help-answer-text}}'
							+'{css{\\mixed{\\html{$answerSecondWhole}}{\\frac{\\fracstr{$answerSecondNum}}{\\fracstr{$answerSecondDen}}}}{help-answer-text-tight}}}'
						}
					}]
                }]
            },
			fifth: {
                title: 'Change a Percent to a Fraction (Directly)',
                children: [{
                    title: 'Main Answer',
                    children: [{
						problem: '\\cut'
						+'{\\rowgrp'
						+'{\\grp{\\str{Write the percent as a percent in mixed number form:}}}'
						+'{\\grp{\\html{&nbsp;}}}'
						+'{\\grp{\\str{$problemDecimal}}{\\str{%}}}}'
						+'{decimalMixedPercentProblem}',
						answer: '\\cut'
						+'{\\grp{\\mixed{\\input{$answerFractionWhole}}{\\frac{\\input{$answerFractionNum}}{\\input{$answerFractionDen}}}}'
						+'{\\str{%}}}'
						+'{fractionMixedPercentAnswer}',		
						controls: {
							"checkAnswer": true,
							"help": '\\rowgrp'
							+'{\\row{\\str{$problemDecimal}}{\\str{%}}'
							+'{\\sign{ \xA0 = \xA0 }}'
							+'{\\mixed{\\html{$answerFractionWhole}}{\\frac{\\fracstr{$answerFractionNum}}{\\fracstr{$answerFractionDen}}}}{\\str{%}}}'
							+'{\\row{css{\\str{Answer: \xA0 \xA0}}{help-answer-text}}'
							+'{css{\\mixed{\\html{$answerFractionWhole}}{\\frac{\\fracstr{$answerFractionNum}}{\\fracstr{$answerFractionDen}}}}{help-answer-text-tight}}{css{\\str{%}}{help-answer-text-tight}}}'
						}
						
					}, {
						problem: '\\rowgrp'
						+'{$$decimalMixedPercentProblem}'
						+'{\\grp{str{\xA0 Answer:}}{$$fractionMixedPercentAnswer}}'
						+'{\\html{&nbsp;}}'
						+'{\\str{Change the percent into its equivalent fraction (reduced to lowest terms):}}}',
						answer: '\\grp{\\mixed{\\input{$answerSecondWhole}}{\\frac{\\input{$answerSecondNum}}{\\input{$answerSecondDen}}}}',
						controls: {
							"checkAnswer": true,
							"help": '\\rowgrp'
							+'{\\row{\\mixed{\\html{$answerFractionWhole}}{\\frac{\\fracstr{$answerFractionNum}}{\\fracstr{$answerFractionDen}}}}{\\str{%}}'
							+'{\\sign{ \xA0 = \xA0 }}'
							+'{\\mixed{\\html{$answerSecondWhole}}{\\frac{\\fracstr{$answerSecondNum}}{\\fracstr{$answerSecondDen}}}}}'
							+'{\\row{css{\\str{Answer: \xA0 \xA0}}{help-answer-text}}'
							+'{css{\\mixed{\\html{$answerSecondWhole}}{\\frac{\\fracstr{$answerSecondNum}}{\\fracstr{$answerSecondDen}}}}{help-answer-text-tight}}}'
						}
					}]
                }]
            }
        },
        data = [
            { decimalPercent: '38', decimal: .38, answerNum: '19', answerDen: '50', helpNum: '38', helpDen: '100', template: 'main' },
            { decimalPercent: '38', decimal: .38, answerNum: '19', answerDen: '50', helpNum: '38', helpDen: '100', template: 'main' },
            { decimalPercent: '38', decimal: .38, answerNum: '19', answerDen: '50', helpNum: '38', helpDen: '100', template: 'main' },
            { decimalPercent: '38', decimal: .38, answerNum: '19', answerDen: '50', helpNum: '38', helpDen: '100', template: 'main' },
            { decimalPercent: '38', decimal: .38, answerNum: '19', answerDen: '50', helpNum: '38', helpDen: '100', template: 'main' },
			{ problemWhole: '&nbsp;', problemNum: '4', problemDen: '5', answerNum: '1', answerDen: '125', helpNum: '4', helpDen: '500', template: 'second' },
			{ fractionWhole: '&nbsp;', fractionNum: '6', fractionDen: '7', answerFractionWhole: '85', answerFractionNum: '5', answerFractionDen: '7', template: 'second' },
			{ fractionWhole: '&nbsp;', fractionNum: '3', fractionDen: '11', answerFractionWhole: '27', answerFractionNum: '3', answerFractionDen: '11', template: 'second' },
			{  problemDecimal: '8.8', fractionWhole: '8', fractionNum: '8', fractionDen: '10', answerFractionWhole: '8', answerFractionNum: '4', answerFractionDen: '5', helpWhole: '&nbsp;', helpNum: '44', helpDen: '500', answerSecondWhole: '&nbsp;', answerSecondNum: '11', answerSecondDen: '125', template: 'fourth' },
			{  problemDecimal: '2.3', answerFractionWhole: '2', answerFractionNum: '3', answerFractionDen: '10', answerSecondWhole: '&nbsp;', answerSecondNum: '23', answerSecondDen: '1000', template: 'fifth' }
        ],
        interpolate = function (obj, data) {
            var string = JSON.stringify(obj);
            for (var symbol in data) {
                if (data.hasOwnProperty(symbol)) {
                    string = string.replace(new RegExp('(\\$)?\\$' + symbol, 'g'), function ($0, $1) { return $1?$0 : data[symbol]; }); //console.log(string); 
                }
            }
            var ret = JSON.parse(string);
            ret.data = angular.copy(data);
            return ret;
        };

    ret.children = data.map(function (problem) {
        return interpolate(template[problem.template], problem);
    });
    
    return ret;
});
