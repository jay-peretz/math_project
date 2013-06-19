

/*global angular */

angular.module('mathSkills').service('data16_2', function () {
    var ret = {
			title: '16.2 Validate Proportions',
			path: '16.2-validate-proportions',
            children: []
        },
        template = {
			main: {
                title: 'Validate Proportions',
				children: [{
					title: 'Main Answer',
					children: [{
						problem: '\\col{\\row{\\str{The two ratios are equivalent: true or false?}}}{\\row{\\str{\xA0}}}{\\row{\\frac{\\str{$problemNum1}}{\\str{$problemDen1}}}{\\sign{\xA0 = \xA0}}{\\frac{\\str{$problemNum2}}{\\str{$problemDen2}}}}',
						answer: '\\css{\\butgrp{\\row{\\but{True}{$buttonTrueValue}}{\\grp{\\html{&nbsp; &nbsp;}}}{\\but{False}{$buttonFalseValue}}}}{margin-left-small}',
						controls: {
							"checkAnswer": true,
							"help": '\\rowgrp{\\row{\\str{\xA0}}}{\\row{\\str{$problemNum1}}{\\sign{&sdot;}}{\\str{$problemDen2}}{\\sign{\xA0 $equalOrNot \xA0}}{\\str{$problemDen1}}{\\sign{&sdot;}}{\\str{$problemNum2}}}{\\row{\\html{&nbsp;}}}{\\row{\\str{$productLeft}}{\\sign{\xA0 $equalOrNot \xA0}}{\\str{$productRight}}}{\\row{\\html{&nbsp;}}}{\\css{\\row{\\str{Answer: \xA0 }}{\\str{ $answerFirst }}}{help-answer-text}}{\\row{\\html{&nbsp;}}}'
						}
					}]
                }]
            },
			second: {
                title: 'Writing a Ratio of Two Numbers',
                children: [{
                    title: 'Main Answer',
                    children: [{
						problem: '\\col{\\row{\\str{The two ratios are equivalent: true or false?}}}{\\row{\\str{\xA0}}}{\\row{\\frac{\\grp{\\str{$problemNum1}}{\\str{$label1}}}{\\grp{\\str{$problemDen1}}{\\str{$label2}}}}{\\sign{\xA0 = \xA0}}{\\frac{\\grp{\\str{$problemNum2}}{\\str{$label3}}}{\\grp{\\str{$problemDen2}}{\\str{$label4}}}}}',
						answer: '\\css{\\butgrp{\\row{\\but{True}{$buttonTrueValue}}{\\grp{\\html{&nbsp; &nbsp;}}}{\\but{False}{$buttonFalseValue}}}}{margin-left-small}',
						controls: {
							"checkAnswer": true,
							"help": '\\rowgrp{\\row{\\str{\xA0}}}{\\row{\\str{$helpNum1}}{\\sign{&sdot;}}{\\str{$helpDen2}}{\\sign{\xA0 $equalOrNot \xA0}}{\\str{$helpDen1}}{\\sign{&sdot;}}{\\str{$helpNum2}}}{\\row{\\html{&nbsp;}}}{\\row{\\str{$productLeft}}{\\sign{\xA0 $equalOrNot \xA0}}{\\str{$productRight}}}{\\row{\\html{&nbsp;}}}{\\css{\\row{\\str{Answer: \xA0 }}{\\str{ $answerFirst }}}{help-answer-text}}{\\row{\\html{&nbsp;}}}'
						}
					}]
                }]
            },
			third: {
                title: 'Writing a Ratio of Two Numbers',
                children: [{
                    title: 'Main Answer',
                    children: [{
						problem: '\\col{\\row{\\str{The two ratios are equivalent: true or false?}}}{\\row{\\str{\xA0}}}{\\row{\\frac{\\grp{\\html{&nbsp;}}{\\frac{\\str{$problemNum1}}{\\str{$problemDen1}}}{\\html{&nbsp;}}}{\\grp{\\html{&nbsp;}}{\\frac{\\str{$problemNum2}}{\\str{$problemDen2}}}{\\html{&nbsp;}}}}{\\sign{\xA0 = \xA0}}{\\frac{\\grp{\\html{&nbsp;}}{\\frac{\\str{$problemNum3}}{\\str{$problemDen3}}}{\\html{&nbsp;}}}{\\grp{\\html{&nbsp;}}{\\frac{\\str{$problemNum4}}{\\str{$problemDen4}}}{\\html{&nbsp;}}}}}',
						answer: '\\css{\\butgrp{\\row{\\but{True}{$buttonTrueValue}}{\\grp{\\html{&nbsp; &nbsp;}}}{\\but{False}{$buttonFalseValue}}}}{margin-left-small}',
						controls: {
							"checkAnswer": true,
							"help": '\\rowgrp{\\row{\\str{\xA0}}}{\\row{\\frac{\\str{$problemNum1}}{\\str{$problemDen1}}}{\\sign{&sdot;}}{\\frac{\\str{$problemNum4}}{\\str{$problemDen4}}}{\\sign{\xA0 $equalOrNot \xA0}}{\\frac{\\str{$problemNum2}}{\\str{$problemDen2}}}{\\sign{&sdot;}}{\\frac{\\str{$problemNum3}}{\\str{$problemDen3}}}}{\\row{\\html{&nbsp;}}}{\\row{\\frac{\\str{$productNumLeft}}{\\str{$productDenLeft}}}{\\sign{\xA0 $equalOrNot \xA0}}{\\frac{\\str{$productNumRight}}{\\str{$productDenRight}}}}{\\row{\\html{&nbsp;}}}{\\row{\\str{$helpNum1}}{\\sign{&sdot;}}{\\str{$helpDen2}}{\\sign{\xA0 $equalOrNot \xA0}}{\\str{$helpDen1}}{\\sign{&sdot;}}{\\str{$helpNum2}}}{\\row{\\html{&nbsp;}}}{\\row{\\str{$productLeft}}{\\sign{\xA0 $equalOrNot \xA0}}{\\str{$productRight}}}{\\row{\\html{&nbsp;}}}{\\css{\\row{\\str{Answer: \xA0 }}{\\str{ $answerFirst }}}{help-answer-text}}{\\row{\\html{&nbsp;}}}'
						}
					}]
                }]
            },
			fourth: {
                title: 'Writing a Ratio of Two Numbers',
                children: [{
                    title: 'Main Answer',
                    children: [{
						problem: '\\col{\\row{\\str{The two ratios are equivalent: true or false?}}}{\\row{\\str{\xA0}}}{\\row{\\frac{\\grp{\\html{&nbsp;}}{\\frac{\\str{$problemNum1}}{\\str{$problemDen1}}}{\\str{$label1}}{\\html{&nbsp;}}}{\\grp{\\html{&nbsp;}}{\\frac{\\str{$problemNum2}}{\\str{$problemDen2}}}{\\str{$label2}}{\\html{&nbsp;}}}}{\\sign{\xA0 = \xA0}}{\\frac{\\grp{\\html{&nbsp;}}{\\frac{\\str{$problemNum3}}{\\str{$problemDen3}}}{\\str{$label3}}{\\html{&nbsp;}}}{\\grp{\\html{&nbsp;}}{\\frac{\\str{$problemNum4}}{\\str{$problemDen4}}}{\\str{$label4}}{\\html{&nbsp;}}}}}',
						answer: '\\css{\\butgrp{\\row{\\but{True}{$buttonTrueValue}}{\\grp{\\html{&nbsp; &nbsp;}}}{\\but{False}{$buttonFalseValue}}}}{margin-left-small}',
						controls: {
							"checkAnswer": true,
							"help": '\\rowgrp{\\row{\\str{\xA0}}}{\\row{\\frac{\\str{$problemNum1}}{\\str{$problemDen1}}}{\\sign{&sdot;}}{\\frac{\\str{$problemNum4}}{\\str{$problemDen4}}}{\\sign{\xA0 $equalOrNot \xA0}}{\\frac{\\str{$problemNum2}}{\\str{$problemDen2}}}{\\sign{&sdot;}}{\\frac{\\str{$problemNum3}}{\\str{$problemDen3}}}}{\\row{\\html{&nbsp;}}}{\\row{\\frac{\\str{$productNumLeft}}{\\str{$productDenLeft}}}{\\sign{\xA0 $equalOrNot \xA0}}{\\frac{\\str{$productNumRight}}{\\str{$productDenRight}}}}{\\row{\\html{&nbsp;}}}{\\row{\\str{$helpNum1}}{\\sign{&sdot;}}{\\str{$helpDen2}}{\\sign{\xA0 $equalOrNot \xA0}}{\\str{$helpDen1}}{\\sign{&sdot;}}{\\str{$helpNum2}}}{\\row{\\html{&nbsp;}}}{\\row{\\str{$productLeft}}{\\sign{\xA0 $equalOrNot \xA0}}{\\str{$productRight}}}{\\row{\\html{&nbsp;}}}{\\css{\\row{\\str{Answer: \xA0 }}{\\str{ $answerFirst }}}{help-answer-text}}{\\row{\\html{&nbsp;}}}'
						}
					}]
                }]
            }
        },
        data = [
			{ problemNum1: '1', problemDen1: '5', problemNum2: '2', problemDen2: '10', buttonTrueValue: 'T', buttonFalseValue: 'F', productLeft: '10', equalOrNot: '=',  productRight: '10', answerFirst: 'True', template: 'main' },
			{ problemNum1: '5', problemDen1: '8', problemNum2: '6', problemDen2: '10', buttonTrueValue: 'F', buttonFalseValue: 'T', productLeft: '50', equalOrNot: '\u2260',  productRight: '48', answerFirst: 'False', template: 'main' },
			{ problemNum1: '1', problemDen1: '2', problemNum2: '3', problemDen2: '6', buttonTrueValue: 'T', buttonFalseValue: 'F', productLeft: '6', equalOrNot: '=',  productRight: '6', answerFirst: 'True', template: 'main' },
			{ problemNum1: '1', problemDen1: '5', problemNum2: '3', problemDen2: '15', label1: 'banana', label2: 'oranges', label3: 'bananas', label4: 'oranges', buttonTrueValue: 'T', buttonFalseValue: 'F', helpNum1: '1', helpDen1: '5', helpNum2: '3', helpDen2: '15', productLeft: '15', equalOrNot: '=',  productRight: '15', answerFirst: 'True', template: 'second' },
			{ problemNum1: '4', problemDen1: '5', problemNum2: '12', problemDen2: '20', label1: 'alumni', label2: 'faculty',  label3: 'alumni', label4: 'faculty', buttonTrueValue: 'F', buttonFalseValue: 'T', helpNum1: '4', helpDen1: '5', helpNum2: '12', helpDen2: '20', productLeft: '80', equalOrNot: '\u2260',  productRight: '60', answerFirst: 'False', template: 'second' },
			{ problemNum1: '25.9', problemDen1: '29.6', problemNum2: '17.78', problemDen2: '20.32', buttonTrueValue: 'T', buttonFalseValue: 'F', productLeft: '526.288', equalOrNot: '=',  productRight: '526.288', answerFirst: 'True', template: 'main' },
			{ problemNum1: '37.6', problemDen1: '42.3', problemNum2: '33.3', problemDen2: '36.63', label1: 'ounces', label2: 'tons', label3: 'ounces', label4: 'tons', buttonTrueValue: 'F', buttonFalseValue: 'T', helpNum1: '37.6', helpDen1: '42.3', helpNum2: '33.3', helpDen2: '36.63', productLeft: '1377.288', equalOrNot: '\u2260',  productRight: '1408.59', answerFirst: 'False', template: 'second' },
			{ problemNum1: '8.5', problemDen1: '25.5', problemNum2: '14.8', problemDen2: '22.2', label1: 'tsp', label2: 'cups', label3: 'tsp', label4: 'cups', buttonTrueValue: 'F', buttonFalseValue: 'T', helpNum1: '8.5', helpDen1: '25.5', helpNum2: '14.8', helpDen2: '22.2', productLeft: '188.7', equalOrNot: '\u2260',  productRight: '377.4', answerFirst: 'False', template: 'second' },
			{ problemNum1: '1', problemDen1: '12', problemNum2: '2', problemDen2: '9', problemNum3: '1', problemDen3: '2', problemNum4: '2', problemDen4: '3', buttonTrueValue: 'F', buttonFalseValue: 'T', productNumLeft: '2', productDenLeft: '36', equalOrNot: '\u2260',  productNumRight: '2', productDenRight: '18', helpNum1: '2', helpDen1: '36', helpNum2: '2', helpDen2: '18', productLeft: '36', productRight: '72', answerFirst: 'False', template: 'third' },
			{ problemNum1: '1', problemDen1: '2', problemNum2: '2', problemDen2: '3', problemNum3: '5', problemDen3: '12', problemNum4: '5', problemDen4: '9', label1: 'apple', label2: 'orange',  label3: 'apple', label4: 'orange',buttonTrueValue: 'T', buttonFalseValue: 'F', productNumLeft: '5', productDenLeft: '18', equalOrNot: '=',  productNumRight: '10', productDenRight: '36', helpNum1: '5', helpDen1: '18', helpNum2: '10', helpDen2: '36', productLeft: '180', productRight: '180', answerFirst: 'True', test1: 'test1', test2: 'test2', template: 'fourth' },
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

