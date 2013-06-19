

/*global angular */

angular.module('mathSkills').service('data16_3',['dataUtils', function (dataUtils) {
    var ret = {
			title: '16.3 Solving Proportions',
			path: '16.3-solving-proportions',
            children: []
        },
        template = {
			xUpperLeft: {
                title: 'Solving Proportions',
				children: [{
					title: 'Main Answer',
					children: [{
						problem: '\\col{\\row{\\str{Solve for X:}}}{\\row{\\str{\xA0}}}{\\row{\\frac{\\str{X}}{\\str{$problemDen1}}}{\\sign{\xA0 = \xA0}}{\\frac{\\str{$problemNum2}}{\\str{$problemDen2}}}}',
						answer: '\\css{\\input{$answer}}{margin-left-small}',
						controls: {
							"checkAnswer": true,
							"help": '\\rowgrp'
							+'{\\row{\\str{\xA0}}}'
							+'{\\row{\\str{X}}{\\sign{&sdot;}}{\\str{$problemDen2}}'
							+'{\\sign{\xA0 = \xA0}}'
							+'{\\str{$problemDen1}}{\\sign{&sdot;}}{\\str{$problemNum2}}}'
							+'{\\row{\\html{&nbsp;}}}'
							+'{\\row{\\str{X}}'
							+'{\\sign{\xA0 = \xA0}}'
							+'{\\str{($problemDen1}}{\\sign{&sdot;}}{\\str{$problemNum2)}}{\\sign{&divide;}}{\\str{$problemDen2}}}'
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
			xLowerLeft: {
                title: 'Solving Proportions',
				children: [{
					title: 'Main Answer',
					children: [{
						problem: '\\col{\\row{\\str{Solve for X:}}}{\\row{\\str{\xA0}}}{\\row{\\frac{\\str{$problemNum1}}{\\str{X}}}{\\sign{\xA0 = \xA0}}{\\frac{\\str{$problemNum2}}{\\str{$problemDen2}}}}',
						answer: '\\css{\\input{$answer}}{margin-left-small}',
						controls: {
							"checkAnswer": true,
							"help": '\\rowgrp'
							+'{\\row{\\str{\xA0}}}'
							+'{\\row{\\str{$problemNum1}}{\\sign{&sdot;}}{\\str{$problemDen2}}'
							+'{\\sign{\xA0 = \xA0}}'
							+'{\\str{X}}{\\sign{&sdot;}}{\\str{$problemNum2}}}'
							+'{\\row{\\html{&nbsp;}}}'
							+'{\\row{\\str{($problemNum1}}{\\sign{&sdot;}}{\\str{$problemDen2)}}{\\sign{&divide;}}{\\str{$problemNum2}}'
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
			xUpperRight: {
                title: 'Solving Proportions',
				children: [{
					title: 'Main Answer',
					children: [{
						problem: '\\col{\\row{\\str{Solve for X:}}}{\\row{\\str{\xA0}}}{\\row{\\frac{\\str{$problemNum1}}{\\str{$problemDen1}}}{\\sign{\xA0 = \xA0}}{\\frac{\\str{X}}{\\str{$problemDen2}}}}',
						answer: '\\css{\\input{$answer}}{margin-left-small}',
						controls: {
							"checkAnswer": true,
							"help": '\\rowgrp'
							+'{\\row{\\str{\xA0}}}'
							+'{\\row{\\str{$problemNum1}}{\\sign{&sdot;}}{\\str{$problemDen2}}'
							+'{\\sign{\xA0 = \xA0}}'
							+'{\\str{$problemDen1}}{\\sign{&sdot;}}{\\str{X}}}'
							+'{\\row{\\html{&nbsp;}}}'
							+'{\\row{\\str{($problemNum1}}{\\sign{&sdot;}}{\\str{$problemDen2)}}{\\sign{&divide;}}{\\str{$problemDen1}}'
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
			xLowerRight: {
                title: 'Solving Proportions',
				children: [{
					title: 'Main Answer',
					children: [{
						problem: '\\col{\\row{\\str{Solve for X:}}}{\\row{\\str{\xA0}}}{\\row{\\frac{\\str{$problemNum1}}{\\str{$problemDen1}}}{\\sign{\xA0 = \xA0}}{\\frac{\\str{$problemNum2}}{\\str{X}}}}',
						answer: '\\css{\\input{$answer}}{margin-left-small}',
						controls: {
							"checkAnswer": true,
							"help": '\\rowgrp'
							+'{\\row{\\str{\xA0}}}'
							+'{\\row{\\str{$problemNum1}}{\\sign{&sdot;}}{\\str{X}}'
							+'{\\sign{\xA0 = \xA0}}'
							+'{\\str{$problemDen1}}{\\sign{&sdot;}}{\\str{$problemNum2}}}'
							+'{\\row{\\html{&nbsp;}}}'
							+'{\\row{\\str{X}}'
							+'{\\sign{\xA0 = \xA0}}'
							+'{\\str{($problemDen1}}{\\sign{&sdot;}}{\\str{$problemNum2)}}{\\sign{&divide;}}{\\str{$problemNum1}}}'
							+'{\\row{\\html{&nbsp;}}}'
							+'{\\row{\\str{$answer}}'
							+'{\\sign{\xA0 = \xA0}}'
							+'{\\str{X}}}'
							+'{\\row{\\html{&nbsp;}}}'
							+'{\\css{\\row{\\str{Answer: \xA0 }}{\\str{ $answer }}}{help-answer-text}}'
							+'{\\row{\\html{&nbsp;}}}'
						}						}]
                }]
            },
			xUpperLeftFraction: {
                title: 'Solving Proportions',
                children: [{
                    title: 'Main Answer',
                    children: [{
						problem: '\\col{\\row{\\str{Solve for X:}}}{\\row{\\str{\xA0}}}{\\row{\\frac{\\grp{\\str{X}}{\\str{$label1}}}{\\grp{\\str{$problemDen1}}{\\str{$label2}}}}{\\sign{\xA0 = \xA0}}{\\frac{\\grp{\\str{$problemNum2}}{\\str{$label3}}}{\\grp{\\str{$problemDen2}}{\\str{$label4}}}}}',
						answer: '\\css{\\input{$answer}}{margin-left-small}',
						controls: {
							"checkAnswer": true,
							"help": '\\rowgrp'
							+'{\\row{\\str{\xA0}}}'
							+'{\\row{\\str{X}}{\\sign{&sdot;}}{\\str{$problemDen2}}'
							+'{\\sign{\xA0 = \xA0}}'
							+'{\\str{$problemDen1}}{\\sign{&sdot;}}{\\str{$problemNum2}}}'
							+'{\\row{\\html{&nbsp;}}}'
							+'{\\row{\\str{X}}'
							+'{\\sign{\xA0 = \xA0}}'
							+'{\\str{($problemDen1}}{\\sign{&sdot;}}{\\str{$problemNum2)}}{\\sign{&divide;}}{\\str{$problemDen2}}}'
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
			xLowerLeftFraction: {
                title: 'Solving Proportions',
                children: [{
                    title: 'Main Answer',
                    children: [{
						problem: '\\col{\\row{\\str{Solve for X:}}}{\\row{\\str{\xA0}}}{\\row{\\frac{\\grp{\\str{$problemNum1}}{\\str{$label1}}}{\\grp{\\str{X}}{\\str{$label2}}}}{\\sign{\xA0 = \xA0}}{\\frac{\\grp{\\str{$problemNum2}}{\\str{$label3}}}{\\grp{\\str{$problemDen2}}{\\str{$label4}}}}}',
						answer: '\\css{\\input{$answer}}{margin-left-small}',
						controls: {
							"checkAnswer": true,
							"help": '\\rowgrp'
							+'{\\row{\\str{\xA0}}}'
							+'{\\row{\\str{$problemNum1}}{\\sign{&sdot;}}{\\str{$problemDen2}}'
							+'{\\sign{\xA0 = \xA0}}'
							+'{\\str{X}}{\\sign{&sdot;}}{\\str{$problemNum2}}}'
							+'{\\row{\\html{&nbsp;}}}'
							+'{\\row{\\str{($problemNum1}}{\\sign{&sdot;}}{\\str{$problemDen2)}}{\\sign{&divide;}}{\\str{$problemNum2}}'
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
			xUpperRightFraction: {
                title: 'Solving Proportions',
                children: [{
                    title: 'Main Answer',
                    children: [{
						problem: '\\col{\\row{\\str{Solve for X:}}}{\\row{\\str{\xA0}}}{\\row{\\frac{\\grp{\\str{$problemNum1}}{\\str{$label1}}}{\\grp{\\str{$problemDen1}}{\\str{$label2}}}}{\\sign{\xA0 = \xA0}}{\\frac{\\grp{\\str{X}}{\\str{$label3}}}{\\grp{\\str{$problemDen2}}{\\str{$label4}}}}}',
						answer: '\\css{\\input{$answer}}{margin-left-small}',
						controls: {
							"checkAnswer": true,
							"help": '\\rowgrp'
							+'{\\row{\\str{\xA0}}}'
							+'{\\row{\\str{$problemNum1}}{\\sign{&sdot;}}{\\str{$problemDen2}}'
							+'{\\sign{\xA0 = \xA0}}'
							+'{\\str{$problemDen1}}{\\sign{&sdot;}}{\\str{X}}}'
							+'{\\row{\\html{&nbsp;}}}'
							+'{\\row{\\str{($problemNum1}}{\\sign{&sdot;}}{\\str{$problemDen2)}}{\\sign{&divide;}}{\\str{$problemDen1}}'
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
			xLowerRightFraction: {
                title: 'Solving Proportions',
                children: [{
                    title: 'Main Answer',
                    children: [{
						problem: '\\col{\\row{\\str{Solve for X:}}}{\\row{\\str{\xA0}}}{\\row{\\frac{\\grp{\\str{$problemNum1}}{\\str{$label1}}}{\\grp{\\str{$problemDen1}}{\\str{$label2}}}}{\\sign{\xA0 = \xA0}}{\\frac{\\grp{\\str{$problemNum2}}{\\str{$label3}}}{\\grp{\\str{X}}{\\str{$label4}}}}}',
						answer: '\\css{\\input{$answer}}{margin-left-small}',
						controls: {
							"checkAnswer": true,
							"help": '\\rowgrp'
							+'{\\row{\\str{\xA0}}}'
							+'{\\row{\\str{$problemNum1}}{\\sign{&sdot;}}{\\str{X}}'
							+'{\\sign{\xA0 = \xA0}}'
							+'{\\str{$problemDen1}}{\\sign{&sdot;}}{\\str{$problemNum2}}}'
							+'{\\row{\\html{&nbsp;}}}'
							+'{\\row{\\str{X}}'
							+'{\\sign{\xA0 = \xA0}}'
							+'{\\str{($problemDen1}}{\\sign{&sdot;}}{\\str{$problemNum2)}}{\\sign{&divide;}}{\\str{$problemNum1}}}'
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
			xUpperLeftFractionFraction: {
                title: 'Solving Proportions',
                children: [{
                    title: 'Main Answer',
                    children: [{
						problem: '\\col{\\row{\\str{Solve for X:}}}{\\row{\\str{\xA0}}}{\\row{\\frac{\\grp{\\html{&nbsp;}}{\\wholepart{X}}{\\str{$label1}}{\\html{&nbsp;}}}{\\grp{\\html{&nbsp;}}{\\frac{\\str{$problemNum2}}{\\str{$problemDen2}}}{\\str{$label2}}{\\html{&nbsp;}}}}{\\sign{\xA0 = \xA0}}{\\frac{\\grp{\\html{&nbsp;}}{\\frac{\\str{$problemNum3}}{\\str{$problemDen3}}}{\\str{$label3}}{\\html{&nbsp;}}}{\\grp{\\html{&nbsp;}}{\\frac{\\str{$problemNum4}}{\\str{$problemDen4}}}{\\str{$label4}}{\\html{&nbsp;}}}}}',
						answer: '\\css{\\mixed{\\whole{$answerWhole}}{\\frac{\\input{$answerNum}}{\\input{$answerDen}}}}{margin-left-small}',
						controls: {
							"checkAnswer": true,
							"help": '\\rowgrp{\\row{\\str{\xA0}}}{\\row{\\frac{\\str{$problemNum1}}{\\str{$problemDen1}}}{\\sign{&sdot;}}{\\frac{\\str{$problemNum4}}{\\str{$problemDen4}}}{\\sign{\xA0 = \xA0}}{\\frac{\\str{$problemNum2}}{\\str{$problemDen2}}}{\\sign{&sdot;}}{\\frac{\\str{$problemNum3}}{\\str{$problemDen3}}}}{\\row{\\html{&nbsp;}}}{\\row{\\frac{\\str{$productNumLeft}}{\\str{$productDenLeft}}}{\\sign{\xA0 = \xA0}}{\\frac{\\str{$productNumRight}}{\\str{$productDenRight}}}}{\\row{\\html{&nbsp;}}}{\\row{\\str{$helpNum1}}{\\sign{&sdot;}}{\\str{$helpDen2}}{\\sign{\xA0 = \xA0}}{\\str{$helpDen1}}{\\sign{&sdot;}}{\\str{$helpNum2}}}{\\row{\\html{&nbsp;}}}{\\row{\\str{$productLeft}}{\\sign{\xA0 = \xA0}}{\\str{$productRight}}}{\\row{\\html{&nbsp;}}}{\\css{\\row{\\str{Answer: \xA0 }}{\\str{ $answerFirst }}}{help-answer-text}}{\\row{\\html{&nbsp;}}}'
						}
					}]
                }]
            }
        },
        data = [
			{ problemNum1: 'X', problemDen1: '9', problemNum2: '10', problemDen2: '2', answer: '45', template: 'xUpperLeft' },
			{ problemNum1: '3', problemDen1: 'X', problemNum2: '2', problemDen2: '14', answer: '21', template: 'xLowerLeft' },
			/*{ problemNum1: '3', problemDen1: '4', problemNum2: 'X', problemDen2: '8', answer: '6', template: 'xUpperRight' },*/
			{ problemNum1: '4', problemDen1: '13', problemNum2: '2', problemDen2: 'X', answer: '6.5', template: 'xLowerRight' },
			{ problemNum1: '8', problemDen1: '3', problemNum2: '16', problemDen2: 'X', answer: '6', label1: 'dyslexics', label2: 'math teachers', label3: 'dyslexics', label4: 'math teachers', template: 'xLowerRightFraction' },
			{ problemNum1: '1', problemDen1: '', problemNum2: '2', problemDen2: '3', problemNum3: '5', problemDen3: '12', problemNum4: '5', problemDen4: '9', label1: 'apple', label2: 'orange',  label3: 'apple', label4: 'orange', productNumLeft: '5', productDenLeft: '18', equalOrNot: '=',  productNumRight: '10', productDenRight: '36', helpNum1: '5', helpDen1: '18', helpNum2: '10', helpDen2: '36', productLeft: '180', productRight: '180', answerWhole: '', answerNum: '', answerDen: '', template: 'xUpperLeftFractionFraction' },
        ];
    return dataUtils.build(ret, template, data);
}]);

