/*global angular */

angular.module('mathSkills').service('data16_2', ['dataUtils', function (dataUtils) {
    var desc = {
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
						answer: '\\css{\\grp{\\btn{True}{$buttonTrueValue}}{\\grp{\\html{&nbsp; &nbsp;}}}{\\btn{False}{$buttonFalseValue}}}{margin-left-small}',
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
						answer: '\\css{\\grp{\\btn{True}{$buttonTrueValue}}{\\grp{\\html{&nbsp; &nbsp;}}}{\\btn{False}{$buttonFalseValue}}}{margin-left-small}',
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
						problem: '\\col{\\row{\\str{The two ratios are equivalent: true or false?}}}'
						+'{\\row{\\str{\xA0}}}'
						+'{\\row{\\frac{\\grp{\\html{&nbsp;}}{\\frac{\\str{$problemNum1}}{\\str{$problemDen1}}}'
						+'{\\html{&nbsp;}}}'
						+'{\\grp{\\html{&nbsp;}}{\\frac{\\str{$problemNum2}}{\\str{$problemDen2}}}{\\html{&nbsp;}}}}'
						+'{\\sign{\xA0 = \xA0}}'
						+'{\\frac{\\grp{\\html{&nbsp;}}{\\frac{\\str{$problemNum3}}{\\str{$problemDen3}}}'
						+'{\\html{&nbsp;}}}'
						+'{\\grp{\\html{&nbsp;}}{\\frac{\\str{$problemNum4}}{\\str{$problemDen4}}}'
						+'{\\html{&nbsp;}}}}}',
						answer: '\\css{\\grp{\\btn{True}{$buttonTrueValue}}{\\grp{\\html{&nbsp; &nbsp;}}}{\\btn{False}{$buttonFalseValue}}}{margin-left-small}',
						controls: {
							"checkAnswer": true,
							"help": '\\rowgrp'
							+'{\\row{\\str{\xA0}}}'
							+'{\\row{\\frac{\\str{$problemNum1}}{\\str{$problemDen1}}}'
							+'{\\sign{&sdot;}}'
							+'{\\frac{\\str{$problemNum4}}{\\str{$problemDen4}}}'
							+'{\\sign{\xA0 $equalOrNot \xA0}}'
							+'{\\frac{\\str{$problemNum2}}{\\str{$problemDen2}}}'
							+'{\\sign{&sdot;}}{\\frac{\\str{$problemNum3}}{\\str{$problemDen3}}}}'
							+'{\\row{\\html{&nbsp;}}}'
							+'{\\row{\\frac{\\str{$productNumLeft}}{\\str{$productDenLeft}}}'
							+'{\\sign{\xA0 $equalOrNot \xA0}}'
							+'{\\frac{\\str{$productNumRight}}{\\str{$productDenRight}}}}'
							+'{\\row{\\html{&nbsp;}}}'
							+'{\\css{\\row{\\str{Answer: \xA0 }}{\\str{ $answerFirst }}}{help-answer-text}}'
							+'{\\row{\\html{&nbsp;}}}'
						}
					}]
                }]
            },
			fourth: {
                title: 'Writing a Ratio of Two Numbers',
                children: [{
                    title: 'Main Answer',
                    children: [{
						problem: '\\col{\\row{\\str{The two ratios are equivalent: true or false?}}}'
						+'{\\row{\\str{\xA0}}}'
						+'{\\row{\\frac{\\grp{\\html{&nbsp;}}{\\frac{\\str{$problemNum1}}{\\str{$problemDen1}}}{\\str{$label1}}'
						+'{\\html{&nbsp;}}}'
						+'{\\grp{\\html{&nbsp;}}{\\frac{\\str{$problemNum2}}{\\str{$problemDen2}}}{\\str{$label2}}'
						+'{\\html{&nbsp;}}}}'
						+'{\\sign{\xA0 = \xA0}}'
						+'{\\frac{\\grp{\\html{&nbsp;}}{\\frac{\\str{$problemNum3}}{\\str{$problemDen3}}}{\\str{$label3}}'
						+'{\\html{&nbsp;}}}'
						+'{\\grp{\\html{&nbsp;}}{\\frac{\\str{$problemNum4}}{\\str{$problemDen4}}}{\\str{$label4}}'
						+'{\\html{&nbsp;}}}}}',
						answer: '\\css{\\grp{\\btn{True}{$buttonTrueValue}}{\\grp{\\html{&nbsp; &nbsp;}}}{\\btn{False}{$buttonFalseValue}}}{margin-left-small}',
						controls: {
							"checkAnswer": true,
							"help": '\\rowgrp'
							+'{\\row{\\str{\xA0}}}'
							+'{\\row{\\frac{\\str{$problemNum1}}{\\str{$problemDen1}}}'
							+'{\\sign{&sdot;}}'
							+'{\\frac{\\str{$problemNum4}}{\\str{$problemDen4}}}'
							+'{\\sign{\xA0 $equalOrNot \xA0}}'
							+'{\\frac{\\str{$problemNum2}}{\\str{$problemDen2}}}'
							+'{\\sign{&sdot;}}'
							+'{\\frac{\\str{$problemNum3}}{\\str{$problemDen3}}}}'
							+'{\\row{\\html{&nbsp;}}}'
							+'{\\row{\\frac{\\str{$productNumLeft}}{\\str{$productDenLeft}}}'
							+'{\\sign{\xA0 $equalOrNot \xA0}}'
							+'{\\frac{\\str{$productNumRight}}{\\str{$productDenRight}}}}'
							+'{\\row{\\html{&nbsp;}}}'
							+'{\\css{\\row{\\str{Answer: \xA0 }}{\\str{ $answerFirst }}}{help-answer-text}}'
							+'{\\row{\\html{&nbsp;}}}'
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
			{ problemNum1: '2.8', problemDen1: '5.6', problemNum2: '1.2', problemDen2: '2.4', buttonTrueValue: 'T', buttonFalseValue: 'F', productLeft: '6.72', equalOrNot: '=',  productRight: '6.72', answerFirst: 'True', template: 'main' },
			{ problemNum1: '6.6', problemDen1: '2.3', problemNum2: '7.6', problemDen2: '3.3', label1: 'ounces', label2: 'tons', label3: 'ounces', label4: 'tons', buttonTrueValue: 'F', buttonFalseValue: 'T', helpNum1: '6.6', helpDen1: '2.3', helpNum2: '7.6', helpDen2: '3.3', productLeft: '21.78', equalOrNot: '\u2260',  productRight: '17.48', answerFirst: 'False', template: 'second' },
			{ problemNum1: '2.5', problemDen1: '5', problemNum2: '7.5', problemDen2: '15', label1: 'tsp', label2: 'cups', label3: 'tsp', label4: 'cups', buttonTrueValue: 'T', buttonFalseValue: 'F', helpNum1: '2.5', helpDen1: '5', helpNum2: '7.5', helpDen2: '15', productLeft: '37.5', equalOrNot: '=',  productRight: '37.5', answerFirst: 'True', template: 'second' },
			{ problemNum1: '1', problemDen1: '12', problemNum2: '2', problemDen2: '9', problemNum3: '1', problemDen3: '2', problemNum4: '2', problemDen4: '3', buttonTrueValue: 'F', buttonFalseValue: 'T', productNumLeft: '1', productDenLeft: '18', equalOrNot: '\u2260',  productNumRight: '2', productDenRight: '18', answerFirst: 'False', template: 'third' },
			{ problemNum1: '1', problemDen1: '2', problemNum2: '2', problemDen2: '3', problemNum3: '5', problemDen3: '12', problemNum4: '5', problemDen4: '9', label1: 'apple', label2: 'orange',  label3: 'apple', label4: 'orange',buttonTrueValue: 'T', buttonFalseValue: 'F', productNumLeft: '5', productDenLeft: '18', equalOrNot: '=',  productNumRight: '5', productDenRight: '18', answerFirst: 'True', test1: 'test1', test2: 'test2', template: 'fourth' },
        ];

	return dataUtils.build(desc, template, data);
}]);