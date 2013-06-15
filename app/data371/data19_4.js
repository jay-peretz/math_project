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
						problem: '\\rowgrp'
						+'{\\grp{\\str{Change this percent into a decimal:}}}'
						+'{\\grp{\\html{&nbsp;}}}'
						+'{\\grp{\\str{$decimalPercent}}{\\str{%}}}',
						answer: '\\input{$decimal}',		
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
						+'{\\grp{\\str{Change this percent into a decimal:}}}'
						+'{\\grp{\\html{&nbsp;}}}'
						+'{\\grp{\\str{$decimalPercent}}{\\str{%}}}',
						answer: '\\css{\\rowgrp'
						+'{\\html{&nbsp;}}'
						+'{\\grp{str{\xA0 Answer: }}{\\str{$decimal}}}'
						+'{\\html{&nbsp;}}'
						+'{\\html{&nbsp;}}'
						+'{css{\\str{Change the decimal into a fraction:}}{alert alert-info}}'
						+'{\\html{&nbsp;}}'
						+'{\\grp{\\frac{\\input{$answerNum}}{\\input{$answerDen}}}}}{well}',
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
						+'{\\grp{\\str{Convert the percent in mixed number form into a percent in decimal form:}}}'
						+'{\\grp{\\html{&nbsp;}}}'
						+'{\\grp{\\mixed{\\html{$problemWhole}}{\\frac{\\fracstr{$problemNum}}{\\fracstr{$problemDen}}}}{\\str{%}}}',
						answer: '\\grp{\\input{$decimalPercent}}{\\str{%}}',			
						controls: {
							"checkAnswer": true,
							"help": '\\rowgrp'
							+'{\\row{\\mixed{\\html{$problemWhole}}{\\frac{\\fracstr{$problemNum}}{\\fracstr{$problemDen}}}}'
							+'{\\sign{ \xA0 = \xA0 }}'
							+'{\\str{$decimalPercent}}{\\str{%}}}'
							+'{\\html{&nbsp;}}'
							+'{\\row{css{\\str{Answer: \xA0 \xA0}}{help-answer-text}}'
							+'{css{\\str{$decimalPercent}}{help-answer-text-tight}}{css{\\str{%}}{help-answer-text-tight}}}'
						}
					}, {
						problem: '\\rowgrp'
						+'{\\grp{\\str{Convert the percent in mixed number form into a percent in decimal form:}}}'
						+'{\\grp{\\html{&nbsp;}}}'
						+'{\\grp{\\mixed{\\html{$problemWhole}}{\\frac{\\fracstr{$problemNum}}{\\fracstr{$problemDen}}}}{\\str{%}}}',
						answer: '\\css{\\rowgrp'
						+'{\\html{&nbsp;}}'
						+'{\\grp{str{\xA0 Answer: }}{\\str{$decimalPercent}}{\\str{%}}}'
						+'{\\html{&nbsp;}}'
						+'{\\html{&nbsp;}}'
						+'{css{\\str{Convert the percent in decimal form into a decimal:}}{alert alert-info}}'
						+'{\\html{&nbsp;}}'
						+'{\\grp{\\input{$decimal}}}}{well}',
						controls: {
							"checkAnswer": true,
							"help": '\\rowgrp'
							+'{\\row{\\str{$decimalPercent}}{\\str{%}}'
							+'{\\sign{ \xA0 = \xA0 }}'
							+'{\\str{$decimal}}}'
							+'{\\html{&nbsp;}}'
							+'{\\row{css{\\str{Answer: \xA0 \xA0}}{help-answer-text}}'
							+'{css{\\str{$decimal}}{help-answer-text-tight}}'
						}
					}, {
						problem: '\\rowgrp'
						+'{\\grp{\\str{Convert the percent in mixed number form into a percent in decimal form:}}}'
						+'{\\grp{\\html{&nbsp;}}}'
						+'{\\grp{\\mixed{\\html{$problemWhole}}{\\frac{\\fracstr{$problemNum}}{\\fracstr{$problemDen}}}}{\\str{%}}}',
						answer: '\\css{\\rowgrp'
						+'{\\html{&nbsp;}}'
						+'{\\grp{str{\xA0 Answer: }}{\\str{$decimalPercent}}{\\str{%}}}'
						+'{\\html{&nbsp;}}'
						+'{\\html{&nbsp;}}'
						+'{\\str{Convert the percent in decimal form into a decimal:}}'
						+'{\\html{&nbsp;}}'
						+'{\\html{&nbsp;}}'
						+'{\\grp{str{\xA0 Answer: }}{\\str{$decimal}}}'
						+'{\\html{&nbsp;}}'
						+'{\\html{&nbsp;}}'
						+'{css{\\str{Convert the decimal to a fraction:}}{alert alert-info}}'
						+'{\\html{&nbsp;}}'
						+'{\\grp{\\frac{\\input{$answerNum}}{\\input{$answerDen}}}}}{well}',
						controls: {
							"checkAnswer": true,
							"help": '\\rowgrp'
							+'{\\row{\\str{$decimal}}'
							+'{\\sign{ \xA0 = \xA0 }}'
							+'{\\grp{\\frac{\\fracstr{$helpNum}}{\\fracstr{$helpDen}}}}'
							+'{\\sign{ \xA0 = \xA0 }}'
							+'{\\grp{\\frac{\\str{$answerNum}}{\\str{$answerDen}}}}}'
							+'{\\html{&nbsp;}}'
							+'{\\row{css{\\str{Answer: \xA0 \xA0}}{help-answer-text}}'
							+'{css{\\frac{\\str{$answerNum}}{\\str{$answerDen}}}{help-answer-text-tight}}'
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
			{ problemWhole: '1', problemNum: '4', problemDen: '5', decimalPercent: '1.8', decimal: '0.018',  answerNum: '9', answerDen: '500', helpNum: '18', helpDen: '1000', template: 'second' },
			{ problemWhole: '2', problemNum: '1', problemDen: '4', decimalPercent: '2.25', decimal: '0.0225',  answerNum: '9', answerDen: '400', helpNum: '225', helpDen: '10000', template: 'second' },
			{ problemWhole: '&nbsp;', problemNum: '7', problemDen: '8', decimalPercent: '0.875', decimal: '0.00875',  answerNum: '7', answerDen: '800', helpNum: '875', helpDen: '100000', template: 'second' },
			{ problemWhole: '&nbsp;', problemNum: '2', problemDen: '5', decimalPercent: '0.4', decimal: '0.004',  answerNum: '1', answerDen: '250', helpNum: '4', helpDen: '1000', template: 'second' },
			{ problemWhole: '&nbsp;', problemNum: '3', problemDen: '4', decimalPercent: '0.75', decimal: '0.0075',  answerNum: '3', answerDen: '400', helpNum: '75', helpDen: '10000', template: 'second' }
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
