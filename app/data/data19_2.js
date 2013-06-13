/*global angular */

angular.module('mathSkills').service('data19_2', function () {
    var ret = {
			title: '19.2 Decimal & Fraction Form of Percents',
			path: '19.2-decimal-fraction-form-percents',
            children: []
        },
        template = {
			main: {
                title: 'Decimal & Fraction Form of Percents',
                children: [{
                    title: 'Main Answer',
                    children: [{
						problem: '\\cut{\\rowgrp{\\grp{\\str{Change the fraction to decimal:}}}{\\grp{\\mixed{\\html{$fractionWhole}}{\\frac{\\fracstr{$fractionNum}}{\\fracstr{$fractionDen}}}}}}{fractionDecimalProblem}',
						answer: '\\cut{\\input{$answerDecimal}}{fractionDecimalAnswer}',	
						controls: {
							"checkAnswer": true,
							"help": '\\rowgrp'
							+'{\\row{\\css{\\str{Divide the numerator of the fraction by the denominator.}}{help-answer-text-tight}}}'
							+'{\\row{\\mixed{\\html{$fractionWhole}}{\\frac{\\fracstr{$fractionNum}}{\\fracstr{$fractionDen}}}}}'
							+'{\\row{\\str{the fraction \xA0}}{\\frac{\\str{$fractionNum}}{\\str{$fractionDen}}}'
							+'{\\str{\xA0 means \xA0 $fractionNum }}{\\css{\\str{\xF7}}{bigger}}{\\str{\xA0 $fractionDen}}}'
							+'{\\row{\\html{&nbsp;}}}'
							+'{\\row{\\css{\\str{\xA0 Answer: \xA0 $answerDecimal}}{help-answer-text}}}'
						}
						
					}, {
						problem: '\\rowgrp'
						+'{$$fractionDecimalProblem}'
						+'{\\row{str{\xA0 Answer:}}{$$fractionDecimalAnswer}}'
						+'{\\html{&nbsp;}}'
						+'{\\str{Change the decimal to a percentage:}}',
						answer: '\\grp{\\input{$answerPercent}}{\\str{%}}',
						controls: {
							"checkAnswer": true,
							"help": '\\rowgrp{\\row{\\percentarrows{$answerDecimal}{100}{decimal}{percent}}{\\row{\\html{&nbsp;}}}{\\row{\\css{\\str{Answer: $answerPercent %}}{help-answer-text help-text-margin-width}}}'
						}
					}]
                }]
            },
			second: {
                title: 'Decimal & Fraction Form of Percents',
                children: [{
                    title: 'Main Answer',
                    children: [{
						problem: '\\cut'
						+'{\\rowgrp'
						+'{\\grp{\\str{Change the fraction to decimal:}}}'
						+'{\\grp{\\mixed{\\html{$fractionWhole}}{\\frac{\\fracstr{$fractionNum}}{\\fracstr{$fractionDen}}}}}}'
						+'{fractionDecimalProblem}',
						answer: '\\cut{\\input{$answerDecimal}}{fractionDecimalAnswer}',	
						controls: {
							"checkAnswer": true,
							"help": '\\rowgrp'
							+'{\\row{\\css{\\str{Divide the numerator of the fraction by the denominator.}}{help-answer-text-tight}}}'
							+'{\\row{\\mixed{\\html{$fractionWhole}}{\\frac{\\fracstr{$fractionNum}}{\\fracstr{$fractionDen}}}}}'
							+'{\\row{\\str{the fraction \xA0}}{\\frac{\\str{$fractionNum}}{\\str{$fractionDen}}}'
							+'{\\str{\xA0 means \xA0 $fractionNum }}{\\css{\\str{\xF7}}{bigger}}{\\str{\xA0 $fractionDen}}}'
							+'{\\row{\\html{&nbsp;}}}'
							+'{\\row{\\css{\\str{\xA0 Answer: \xA0 $answerDecimal}}{help-answer-text}}}'
						}
						
					}, {
						problem: '\\cut{'
						+'\\rowgrp'
						+'{$$fractionDecimalProblem}'
						+'{\\row{str{\xA0 Answer:}}{$$fractionDecimalAnswer}}'
						+'{\\html{&nbsp;}}'
						+'{\\str{Change the decimal to a percentage:}}}' 
						+'{decimalPercentProblem}',
						answer: '\\cut{\\grp{\\input{$answerPercent}}{\\str{%}}}{decimalPercentAnswer}',
						controls: {
							"checkAnswer": true,
							"help": '\\rowgrp'
							+'{\\row{\\percentarrows{$answerDecimal}{100}{decimal}{percent}}'
							+'{\\row{\\html{&nbsp;}}}'
							+'{\\row{\\css{\\str{Answer: $answerPercent %}}{help-answer-text help-text-margin-width}}}'
						}
					}, {
						problem: '\\rowgrp'
						+'{$$decimalPercentProblem}'
						+'{\\row{str{\xA0 Answer:}}{$$decimalPercentAnswer}}'
						+'{\\html{&nbsp;}}'
						+'{\\str{Change the decimal percentage to a fractional or mixed number percentage:}}',
						answer: '\\grp{\\mixed{\\input{$fractionPercentWhole}}{\\frac{\\input{$fractionPercentNum}}{\\input{$fractionPercentDen}}}}{\\str{%}}',
						controls: {
							"checkAnswer": true,
							"help": '\\rowgrp'
							+'{\\row{\\str{Write the decimal place value as the denominator of the fraction.}}}'
							+'{\\row{\\str{$answerPercent}}{\\str{%}}{\\sign{\xA0 = \xA0}}'
							+'{\\mixed{\\str{$helpWhole}}{\\frac{\\fracstr{$helpNum}}{\\fracstr{$helpDen}}}}{\\str{%}}'
							+'{\\sign{ \xA0 = \xA0 }}'
							+'{\\mixed{\\str{$fractionPercentWhole}}{\\frac{\\fracstr{$fractionPercentNum}}{\\fracstr{$fractionPercentDen}}}}{\\str{%}}}'
							+'{\\row{css{\\str{Answer: \xA0 \xA0}}{help-answer-text}}'
							+'{css{\\mixed{\\str{$fractionPercentWhole}}{\\frac{\\fracstr{$fractionPercentNum}}{\\fracstr{$fractionPercentDen}}}}{help-answer-text-tight}}{css{\\str{%}}{help-answer-text-tight}}}'
						}
					}]
                }]
            }
        },
        data = [
            { fractionWhole: '&nbsp;', fractionNum: '9', fractionDen: '10', answerDecimal: '0.9', answerPercent: '90', template: 'main' },
			{ fractionWhole: '&nbsp;', fractionNum: '67', fractionDen: '100', answerDecimal: '0.67', answerPercent: '67', template: 'main' },
			{ fractionWhole: '&nbsp;', fractionNum: '5', fractionDen: '10', answerDecimal: '0.5', answerPercent: '50', template: 'main' },
			{ fractionWhole: '&nbsp;', fractionNum: '29', fractionDen: '50', answerDecimal: '0.58', answerPercent: '58', template: 'main' },
			{ fractionWhole: '&nbsp;', fractionNum: '38', fractionDen: '20', answerDecimal: '1.9', answerPercent: '190', template: 'main' },
			{ fractionWhole: '&nbsp;', fractionNum: '79', fractionDen: '160', answerDecimal: '0.49375', answerPercent: '49.375', fractionPercentWhole: '49', fractionPercentNum: '3', fractionPercentDen: '8', helpWhole: '49', helpNum: '375', helpDen: '1000', template: 'second' },
			{ fractionWhole: '&nbsp;', fractionNum: '11', fractionDen: '16', answerDecimal: '0.6875', answerPercent: '68.75', fractionPercentWhole: '68', fractionPercentNum: '3', fractionPercentDen: '4', helpWhole: '68', helpNum: '75', helpDen: '100', template: 'second' },
			{ fractionWhole: '&nbsp;', fractionNum: '771', fractionDen: '800', answerDecimal: '0.96375', answerPercent: '96.375', fractionPercentWhole: '96', fractionPercentNum: '3', fractionPercentDen: '8', helpWhole: '96', helpNum: '375', helpDen: '1000', template: 'second' },
			{ fractionWhole: '&nbsp;', fractionNum: '2', fractionDen: '125', answerDecimal: '0.016', answerPercent: '1.6', fractionPercentWhole: '1', fractionPercentNum: '3', fractionPercentDen: '5', helpWhole: '1', helpNum: '16', helpDen: '1000', template: 'second' },
			{ fractionWhole: '&nbsp;', fractionNum: '189', fractionDen: '200', answerDecimal: '0.945', answerPercent: '94.5', fractionPercentWhole: '94', fractionPercentNum: '1', fractionPercentDen: '2', helpWhole: '94', helpNum: '5', helpDen: '10', template: 'second' }
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