/*global angular */

angular.module('mathSkills').service('data19_3', function () {
    var ret = {
			title: '19.3 Change a Percent to a Fraction (Directly)',
			path: '19.3-change-a-percent-to-a-fraction-directly',
            children: []
        },
        template = {
			main: {
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
							+'{\\row{\\str{$decimalPercent}}{\\str{%}}'
							+'{\\sign{\xA0 = \xA0}}'							
							+'{\\frac{\\str{$helpNum}}{\\str{$helpDen}}}'
							+'{\\sign{\xA0 = \xA0}}'							
							+'{\\frac{\\str{$answerNum}}{\\str{$answerDen}}}}'
							+'{\\row{\\html{&nbsp;}}}'
							+'{\\row{css{\\str{Answer: \xA0 \xA0}}{help-answer-text}}'
							+'{\\css{\\frac{\\str{$answerNum}}{\\str{$answerDen}}}{help-answer-text-tight}}'

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
						problem: '\\rowgrp'
						+'{\\grp{\\str{Write the percent as a percent in mixed number form:}}}'
						+'{\\grp{\\html{&nbsp;}}}'
						+'{\\grp{\\str{$problemDecimal}}{\\str{%}}}',
						answer: '\\grp{\\mixed{\\input{$answerFractionWhole}}{\\frac{\\input{$answerFractionNum}}{\\input{$answerFractionDen}}}}'
						+'{\\str{%}}}',		
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
						+'{\\grp{\\str{Write the percent as a percent in mixed number form:}}}'
						+'{\\grp{\\html{&nbsp;}}}'
						+'{\\grp{\\str{$problemDecimal}}{\\str{%}}}',
						answer: '\\css{\\rowgrp'
						+'{\\html{&nbsp;}}'
						+'{\\grp{str{\xA0 Answer:}}{\\mixed{\\str{$answerFractionWhole}}{\\frac{\\str{$answerFractionNum}}{\\str{$answerFractionDen}}}}{\\str{%}}}'
						+'{\\html{&nbsp;}}'
						+'{css{\\str{Change the percent into its equivalent fraction (reduced to lowest terms):}}{alert alert-info}}'
						+'{\\html{&nbsp;}}'
						+'{\\grp{\\frac{\\input{$answerSecondNum}}{\\input{$answerSecondDen}}}}}{well}',						
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
						problem: '\\rowgrp'
						+'{\\grp{\\str{Write the percent as a percent in mixed number form:}}}'
						+'{\\grp{\\html{&nbsp;}}}'
						+'{\\grp{\\str{$problemDecimal}}{\\str{%}}}',
						answer: '\\grp{\\mixed{\\input{$answerFractionWhole}}{\\frac{\\input{$answerFractionNum}}{\\input{$answerFractionDen}}}}'
						+'{\\str{%}}}',		
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
						+'{\\grp{\\str{Write the percent as a percent in mixed number form:}}}'
						+'{\\grp{\\html{&nbsp;}}}'
						+'{\\grp{\\str{$problemDecimal}}{\\str{%}}}',
						answer: '\\css{\\rowgrp'
						+'{\\html{&nbsp;}}'
						+'{\\grp{str{\xA0 Answer:}}{\\mixed{\\html{$answerFractionWhole}}{\\frac{\\str{$answerFractionNum}}{\\str{$answerFractionDen}}}}'
						+'{\\str{%}}}'
						+'{\\html{&nbsp;}}'
						+'{\\html{&nbsp;}}'
						+'{css{\\str{Change the percent into its equivalent fraction (reduced to lowest terms):}}{alert alert-info}}'
						+'{\\html{&nbsp;}}'
						+'{\\grp{\\frac{\\input{$answerSecondNum}}{\\input{$answerSecondDen}}}}}{well}',							
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
            { decimalPercent: '38', answerNum: '19', answerDen: '50', helpNum: '38', helpDen: '100', template: 'main' },
            { decimalPercent: '44', answerNum: '11', answerDen: '25', helpNum: '44', helpDen: '100', template: 'main' },			
            { decimalPercent: '35', answerNum: '7', answerDen: '25', helpNum: '35', helpDen: '100', template: 'main' },
            { problemWhole: '1', problemNum: '1', problemDen: '4', answerNum: '1', answerDen: '80', helpNum: '5', helpDen: '400', template: 'second' },
			{ problemWhole: '1', problemNum: '5', problemDen: '6', answerNum: '11', answerDen: '600', template: 'third' },
			{ problemWhole: '&nbsp;', problemNum: '4', problemDen: '5', answerNum: '1', answerDen: '125', helpNum: '4', helpDen: '500', template: 'second' },
			{  problemDecimal: '5.2', fractionWhole: '5', fractionNum: '2', fractionDen: '10', answerFractionWhole: '5', answerFractionNum: '1', answerFractionDen: '5', helpWhole: '&nbsp;', helpNum: '26', helpDen: '500', answerSecondWhole: '&nbsp;', answerSecondNum: '13', answerSecondDen: '250', template: 'fourth' },
			{  problemDecimal: '2.3', answerFractionWhole: '2', answerFractionNum: '3', answerFractionDen: '10', answerSecondWhole: '&nbsp;', answerSecondNum: '23', answerSecondDen: '1000', template: 'fifth' },
			{  problemDecimal: '8.8', fractionWhole: '8', fractionNum: '8', fractionDen: '10', answerFractionWhole: '8', answerFractionNum: '4', answerFractionDen: '5', helpWhole: '&nbsp;', helpNum: '44', helpDen: '500', answerSecondWhole: '&nbsp;', answerSecondNum: '11', answerSecondDen: '125', template: 'fourth' },
			{  problemDecimal: '3.7', answerFractionWhole: '3', answerFractionNum: '7', answerFractionDen: '10', answerSecondWhole: '&nbsp;', answerSecondNum: '37', answerSecondDen: '1000', template: 'fifth' }
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
