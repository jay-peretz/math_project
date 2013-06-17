

/*global angular */

angular.module('mathSkills').service('data16_1', function () {
    var ret = {
			title: '16.1 Writing a Ratio of Two Numbers',
			path: '16.1-writing-a-ratio-of-two-numbers',
            children: []
        },
        template = {
			main: {
                title: 'Writing a Ratio of Two Numbers',
				children: [{
					title: 'Main Answer',
					children: [{
						problem: '\\butgrp{\\col{\\row{\\str{Choose the reduced ratio with the same meaning as: }}}{\\row{\\str{\xA0}}}{\\row{\\frac{\\str{$problemNum}}{\\str{$problemDen}}}}{\\row{\\str{\xA0}}}{\\row{\\but{A}{F}}{\\str{\xA0 \xA0 $button1a to $button1b}}}{\\row{\\but{B}{F}}{\\str{\xA0 \xA0 $button2a to $button2b}}}{\\row{\\but{C}{F}}{\\str{\xA0 \xA0 $button3a to $button3b}}}{\\row{\\but{D}{T}}{\\str{\xA0 \xA0 $button4a to $button4b}}}}}',
						answer: 'A',
						controls: {
							"checkAnswer": true,
							"help": '\\str{D: $problemNum to $problemDen}'
						}
					}]
                }]
            },
			second: {
                title: 'Decimal & Fraction Form of Percents',
                children: [{
                    title: 'Main Answer',
                    children: [{
						problem: '\\rowgrp'
						+'{\\grp{\\str{Change the fraction to a mixed number percentage:}}}'
						+'{\\grp{\\html{&nbsp;}}}'
						+'{\\grp{\\mixed{\\html{$fractionWhole}}{\\frac{\\fracstr{$fractionNum}}{\\fracstr{$fractionDen}}}}}',
						answer: '\\grp{\\mixed{\\input{$answerFractionWhole}}{\\frac{\\input{$answerFractionNum}}{\\input{$answerFractionDen}}}}{\\str{%}}}}',		
						controls: {
							"checkAnswer": true,
							"help": '\\rowgrp'
							+'{\\row{\\mixed{\\html{$fractionWhole}}{\\frac{\\fracstr{$fractionNum}}{\\fracstr{$fractionDen}}}}'
							+'{\\sign{ \xA0 = \xA0 }}'
							+'{\\mixed{\\html{$answerFractionWhole}}{\\frac{\\fracstr{$answerFractionNum}}{\\fracstr{$answerFractionDen}}}}{\\str{%}}}'
							+'{\\row{css{\\str{Answer: \xA0 \xA0}}{help-answer-text}}'
							+'{css{\\mixed{\\html{$answerFractionWhole}}{\\frac{\\fracstr{$answerFractionNum}}{\\fracstr{$answerFractionDen}}}}{help-answer-text-tight}}{css{\\str{%}}{help-answer-text-tight}}}'
						}
						
					}]
                }]
            }
        },
        data = [
            { problemNum: '1', problemDen: '5', button1a: '2', button1b: '4', button2a: '2', button2b: '3', button3a: '4', button3b: '5', button4a: '1', button4b: '5', template: 'main' },
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

