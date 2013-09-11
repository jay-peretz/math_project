/*global angular */

angular.module('mathSkills').service('data6_3', ['dataUtils', function (dataUtils) {
    var desc = {
			title: '6.3 Equivalent Fractions',
			path: '6.3-equivalent-fractions  ',
            children: []
        },
	        template = {
            first: {
                title: 'Equivalent Fractions',
                children: [{
                    title: 'Main Answer',
                    children: [{
						problem: '\\rowgrp'
						+'{\\str{Are these fractions equivalent?}}'
						+'{\\html{&nbsp;}}'
						+'{\\row{\\frac{\\str{$leftNum}}{\\str{$leftDen}}}'
						+'{\\sign{=}}'
						+'{\\frac{\\str{$rightNum}}{\\str{$rightDen}}}',
               			//answer: '\\butgrp{\\row{\\but{Yes}{$firstButton}}{\\but{No}{$secondButton}}}',
						answer: '\\rowgrp'
						+'{\\html{&nbsp;}}'
						+'{\\grp{\\btn{Yes}{$firstButton}}{\\html{&nbsp;}}{\\btn{No}{$secondButton}}}',
						controls: {
							"checkAnswer": false,
							"help": '\\rowgrp'
							+'{\\grp{\\str{$leftNum}}{\\sign{&sdot;}}{\\str{$rightDen}}{\\sign{$equalOrNot}}{\\str{$leftDen}}{\\sign{&sdot;}}{\\str{$rightNum}}}'
							+'{\\html{&nbsp;}}'
							+'{\\grp{\\str{$productLeft}}{\\sign{$equalOrNot}}{\\str{$productRight}}}'
							+'{\\html{&nbsp;}}'
							+'{css{\\html{Answer: &nbsp; $yesOrNo}}{help-answer-text}}'
						}
                    }]
                }]
           },
			unknownLeftNum: {
                title: 'Comparing Whole Numbers',
				children: [{
					title: 'Main Answer',
					children: [{
						problem: '\\col'
						+'{\\row{\\str{$problemText}}}'
						+'{\\row{\\str{\xA0}}}'
						+'{\\row{\\frac{\\str{X}}{\\str{$problemDen1}}}'
						+'{\\sign{\xA0 = \xA0}}'
						+'{\\frac{\\str{$problemNum2}}{\\str{$problemDen2}}}}',
						answer: '\\css{\\input{$answer}}{margin-left-small}',
						controls: {
							"checkAnswer": true,
							"help": '\\rowgrp'
							+'{\\row{\\str{\xA0}}}'
							+'{\\row{\\str{X}}{\\sign{&sdot;}}{\\str{$problemDen2}}'
							+'{\\sign{\xA0 = \xA0}}'
							+'{\\str{$problemDen1}}{\\sign{&sdot;}}{\\str{$problemNum2}}}'
							+'{\\row{\\html{&nbsp;}}}'
							+'{\\row{\\str{X}}{\\sign{&sdot;}}{\\str{$problemDen2}}'
							+'{\\sign{\xA0 = \xA0}}'
							+'{\\str{$helpProduct}}}'
							+'{\\row{\\html{&nbsp;}}}'
							+'{\\row{\\str{X}}'
							+'{\\sign{\xA0 = \xA0}}'
							+'{\\str{$helpProduct}}{\\sign{&divide;}}{\\str{$problemDen2}}}'
							+'{\\row{\\html{&nbsp;}}}'
							+'{\\row{\\str{X}}'
							+'{\\sign{\xA0 = \xA0}}'
							+'{\\str{$answer}}}'
							+'{\\row{\\html{&nbsp;}}}'
							+'{\\css{\\row{\\str{Answer: \xA0 }}{\\str{ $answer }}}{help-answer-text}}'
							+'{\\row{\\html{&nbsp;}}}'
						}	
					}]
                }]
            },
			unknownLeftDen: {
                title: 'Comparing Whole Numbers',
				children: [{
					title: 'Main Answer',
					children: [{
						problem: '\\col'
						+'{\\row{\\str{$problemText}}}'
						+'{\\row{\\str{\xA0}}}'
						+'{\\row{\\frac{\\str{$problemNum1}}{\\str{X}}}'
						+'{\\sign{\xA0 = \xA0}}'
						+'{\\frac{\\str{$problemNum2}}{\\str{$problemDen2}}}}',
						answer: '\\css{\\input{$answer}}{margin-left-small}',
						controls: {
							"checkAnswer": true,
							"help": '\\rowgrp'
							+'{\\row{\\str{\xA0}}}'
							+'{\\row{\\str{$problemNum1}}{\\sign{&sdot;}}{\\str{$problemDen2}}'
							+'{\\sign{\xA0 = \xA0}}'
							+'{\\str{X}}{\\sign{&sdot;}}{\\str{$problemNum2}}}'
							+'{\\row{\\html{&nbsp;}}}'
							+'{\\row{\\str{$helpProduct}}'
							+'{\\sign{\xA0 = \xA0}}'
							+'{\\str{X}}{\\sign{&sdot;}}{\\str{$problemNum2}}}'
							+'{\\row{\\html{&nbsp;}}}'
							+'{\\row{\\str{$helpProduct}}{\\sign{&divide;}}{\\str{$problemNum2}}'
							+'{\\sign{\xA0 = \xA0}}'
							+'{\\str{X}}}'
							+'{\\row{\\html{&nbsp;}}}'
							+'{\\row{\\str{$answer}}'
							+'{\\sign{\xA0 = \xA0}}'
							+'{\\str{X}}}'
							+'{\\row{\\html{&nbsp;}}}'
							+'{\\css{\\row{\\str{Answer: \xA0 }}{\\str{ $answer }}}{help-answer-text}}'
							+'{\\row{\\html{&nbsp;}}}'
						}
					}]
                }]
            },
			unknownRightNum: {
                title: 'Comparing Whole Numbers',
				children: [{
					title: 'Main Answer',
					children: [{
						problem: '\\col'
						+'{\\row{\\str{$problemText}}}'
						+'{\\row{\\str{\xA0}}}'
						+'{\\row{\\frac{\\str{$problemNum1}}{\\str{$problemDen1}}}'
						+'{\\sign{\xA0 = \xA0}}'
						+'{\\frac{\\str{X}}{\\str{$problemDen2}}}}',
						answer: '\\css{\\input{$answer}}{margin-left-small}',
						controls: {
							"checkAnswer": true,
							"help": '\\rowgrp'
							+'{\\row{\\str{\xA0}}}'
							+'{\\row{\\str{$problemNum1}}{\\sign{&sdot;}}{\\str{$problemDen2}}'
							+'{\\sign{\xA0 = \xA0}}'
							+'{\\str{$problemDen1}}{\\sign{&sdot;}}{\\str{X}}}'
							+'{\\row{\\html{&nbsp;}}}'
							+'{\\row{\\str{$helpProduct}}'
							+'{\\sign{\xA0 = \xA0}}'
							+'{\\str{$problemDen1}}{\\sign{&sdot;}}{\\str{X}}}'
							+'{\\row{\\html{&nbsp;}}}'
							+'{\\row{\\str{$helpProduct}}{\\sign{&divide;}}{\\str{$problemDen1}}'
							+'{\\sign{\xA0 = \xA0}}'
							+'{\\str{X}}}'
							+'{\\row{\\html{&nbsp;}}}'
							+'{\\row{\\str{$answer}}'
							+'{\\sign{\xA0 = \xA0}}'
							+'{\\str{X}}}'
							+'{\\row{\\html{&nbsp;}}}'
							+'{\\css{\\row{\\str{Answer: \xA0 }}{\\str{ $answer }}}{help-answer-text}}'
							+'{\\row{\\html{&nbsp;}}}'
						}
					}]
                }]
            },
			unknownRightDen: {
                title: 'Comparing Whole Numbers',
				children: [{
					title: 'Main Answer',
					children: [{
						problem: '\\col'
						+'{\\row{\\str{$problemText}}}'
						+'{\\row{\\str{\xA0}}}'
						+'{\\row{\\frac{\\str{$problemNum1}}{\\str{$problemDen1}}}'
						+'{\\sign{\xA0 = \xA0}}'
						+'{\\frac{\\str{$problemNum2}}{\\str{X}}}}',
						answer: '\\css{\\input{$answer}}{margin-left-small}',
						controls: {
							"checkAnswer": true,
							"help": '\\rowgrp'
							+'{\\row{\\str{\xA0}}}'
							+'{\\row{\\str{$problemNum1}}{\\sign{&sdot;}}{\\str{X}}'
							+'{\\sign{\xA0 = \xA0}}'
							+'{\\str{$problemDen1}}{\\sign{&sdot;}}{\\str{$problemNum2}}}'
							+'{\\row{\\html{&nbsp;}}}'
							+'{\\row{\\str{$problemNum1}}{\\sign{&sdot;}}{\\str{X}}'
							+'{\\sign{\xA0 = \xA0}}'
							+'{\\str{$helpProduct}}}'
							+'{\\row{\\html{&nbsp;}}}'
							+'{\\row{\\str{X}}'
							+'{\\sign{\xA0 = \xA0}}'
							+'{\\str{$helpProduct}}{\\sign{&divide;}}{\\str{$problemNum1}}}'
							+'{\\row{\\html{&nbsp;}}}'
							+'{\\row{\\str{X}}'
							+'{\\sign{\xA0 = \xA0}}'
							+'{\\str{$answer}}}'
							+'{\\row{\\html{&nbsp;}}}'
							+'{\\css{\\row{\\str{Answer: \xA0 }}{\\str{ $answer }}}{help-answer-text}}'
							+'{\\row{\\html{&nbsp;}}}'
						}
					}]
                }]
            }
        },
        data = [
            { leftNum: '4', leftDen: '6', rightNum: '8', rightDen: '12', firstButton: 'T', secondButton: 'F', equalOrNot: '=', productLeft:'48',  productRight:'48', yesOrNo: 'Yes', template: 'first' },
            { leftNum: '14', leftDen: '16', rightNum: '20', rightDen: '35', firstButton: 'F', secondButton: 'T', equalOrNot: '\u2260', productLeft:'490', productRight:'320', yesOrNo: 'No', template: 'first' },
            { leftNum: '14', leftDen: '16', rightNum: '16', rightDen: '36', firstButton: 'F', secondButton: 'T', equalOrNot: '\u2260', productLeft:'504', productRight:'256', yesOrNo: 'No', template: 'first' },
            { leftNum: '6', leftDen: '9', rightNum: '10', rightDen: '15', firstButton: 'T', secondButton: 'F', equalOrNot: '=', productLeft:'90',  productRight:'90', yesOrNo: 'Yes', template: 'first' },
            { leftNum: '16', leftDen: '18', rightNum: '8', rightDen: '20', firstButton: 'F', secondButton: 'T', equalOrNot: '\u2260', productLeft:'320', productRight:'144', yesOrNo: 'No', template: 'first' },
			{ problemText: 'Solve for the missing number.', problemNum1: '3', problemDen1: '6', problemNum2: '15', answer: '30', helpProduct:'90', template: 'unknownRightDen' },
			{ problemText: 'Solve for the missing number.', problemNum1: '15', problemNum2: '6',  problemDen2: '8',answer: '20', helpProduct:'120', template: 'unknownLeftDen' },
			{ problemText: 'Solve for the missing number.', problemNum1: '27', problemDen1: '26', problemDen2: '104', answer: '108', helpProduct:'2808', template: 'unknownRightNum' },
			{ problemText: 'Solve for the missing number.', problemDen1: '4', problemNum2: '25', problemDen2: '10', answer: '10', helpProduct:'100', template: 'unknownLeftNum' },
			{ problemText: 'Solve for the missing number.', problemNum1: '19', problemDen1: '38 ', problemDen2: '4', answer: '2', helpProduct:'76', template: 'unknownRightNum' }	
        ];

	return dataUtils.build(desc, template, data);
}]);




