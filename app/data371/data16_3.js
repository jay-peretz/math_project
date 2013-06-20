

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
						problem: '\\col{\\row{\\str{$problemText}}}{\\row{\\str{\xA0}}}{\\row{\\frac{\\str{X}}{\\str{$problemDen1}}}{\\sign{\xA0 = \xA0}}{\\frac{\\str{$problemNum2}}{\\str{$problemDen2}}}}',
						answer: '\\row{\\css{\\input{$answer}}{margin-left-small}}{\\html{&nbsp; $labelAnswer}}',
						controls: {
							"checkAnswer": true,
							"help": '\\rowgrp'
							+'{\\row{\\str{\xA0}}}'
							+'{\\row{\\str{X}}{\\sign{&sdot;}}{\\str{$problemDen2}}'
							+'{\\sign{\xA0 = \xA0}}'
							+'{\\str{$problemDen1}}{\\sign{&sdot;}}{\\str{$problemNum2}}}'
							+'{\\row{\\str{\xA0}}}'
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
			xLowerLeft: {
                title: 'Solving Proportions',
				children: [{
					title: 'Main Answer',
					children: [{
						problem: '\\col{\\row{\\str{$problemText}}}{\\row{\\str{\xA0}}}{\\row{\\frac{\\str{$problemNum1}}{\\str{X}}}{\\sign{\xA0 = \xA0}}{\\frac{\\str{$problemNum2}}{\\str{$problemDen2}}}}',
						answer: '\\row{\\css{\\input{$answer}}{margin-left-small}}{\\html{&nbsp; $labelAnswer}}',
						controls: {
							"checkAnswer": true,
							"help": '\\rowgrp'
							+'{\\row{\\str{\xA0}}}'
							+'{\\row{\\str{$problemNum1}}{\\sign{&sdot;}}{\\str{$problemDen2}}'
							+'{\\sign{\xA0 = \xA0}}'
							+'{\\str{X}}{\\sign{&sdot;}}{\\str{$problemNum2}}}'
							+'{\\row{\\str{\xA0}}}'
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
			xUpperRight: {
                title: 'Solving Proportions',
				children: [{
					title: 'Main Answer',
					children: [{
						problem: '\\col{\\row{\\str{$problemText}}}{\\row{\\str{\xA0}}}{\\row{\\frac{\\str{$problemNum1}}{\\str{$problemDen1}}}{\\sign{\xA0 = \xA0}}{\\frac{\\str{X}}{\\str{$problemDen2}}}}',
						answer: '\\row{\\css{\\input{$answer}}{margin-left-small}}{\\html{&nbsp; $labelAnswer}}',
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
			xLowerRight: {
                title: 'Solving Proportions',
				children: [{
					title: 'Main Answer',
					children: [{
						problem: '\\col{\\row{\\str{$problemText}}}{\\row{\\str{\xA0}}}{\\row{\\frac{\\str{$problemNum1}}{\\str{$problemDen1}}}{\\sign{\xA0 = \xA0}}{\\frac{\\str{$problemNum2}}{\\str{X}}}}',
						answer: '\\row{\\css{\\input{$answer}}{margin-left-small}}{\\html{&nbsp; $labelAnswer}}',
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
						}						}]
                }]
            },
			xUpperLeftFraction: {
                title: 'Solving Proportions',
                children: [{
                    title: 'Main Answer',
                    children: [{
						problem: '\\col{\\row{\\str{$problemText}}}{\\row{\\str{\xA0}}}{\\row{\\frac{\\grp{\\str{X}}{\\str{$label1}}}{\\grp{\\str{$problemDen1}}{\\str{$label2}}}}{\\sign{\xA0 = \xA0}}{\\frac{\\grp{\\str{$problemNum2}}{\\str{$label3}}}{\\grp{\\str{$problemDen2}}{\\str{$label4}}}}}',
						answer: '\\row{\\css{\\input{$answer}}{margin-left-small}}{\\html{&nbsp; $labelAnswer}}',
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
			xLowerLeftFraction: {
                title: 'Solving Proportions',
                children: [{
                    title: 'Main Answer',
                    children: [{
						problem: '\\col{\\row{\\str{$problemText}}}{\\row{\\str{\xA0}}}{\\row{\\frac{\\grp{\\str{$problemNum1}}{\\str{$label1}}}{\\grp{\\str{X}}{\\str{$label2}}}}{\\sign{\xA0 = \xA0}}{\\frac{\\grp{\\str{$problemNum2}}{\\str{$label3}}}{\\grp{\\str{$problemDen2}}{\\str{$label4}}}}}',
						answer: '\\row{\\css{\\input{$answer}}{margin-left-small}}{\\html{&nbsp; $labelAnswer}}',
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
			xUpperRightFraction: {
                title: 'Solving Proportions',
                children: [{
                    title: 'Main Answer',
                    children: [{
						problem: '\\col{\\row{\\str{$problemText}}}{\\row{\\str{\xA0}}}{\\row{\\frac{\\grp{\\str{$problemNum1}}{\\str{$label1}}}{\\grp{\\str{$problemDen1}}{\\str{$label2}}}}{\\sign{\xA0 = \xA0}}{\\frac{\\grp{\\str{X}}{\\str{$label3}}}{\\grp{\\str{$problemDen2}}{\\str{$label4}}}}}',
						answer: '\\row{\\css{\\input{$answer}}{margin-left-small}}{\\html{&nbsp; $labelAnswer}}',
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
			xLowerRightFraction: {
                title: 'Solving Proportions',
                children: [{
                    title: 'Main Answer',
                    children: [{
						problem: '\\col{\\row{\\str{$problemText}}}{\\row{\\str{\xA0}}}{\\row{\\frac{\\grp{\\str{$problemNum1}}{\\str{$label1}}}{\\grp{\\str{$problemDen1}}{\\str{$label2}}}}{\\sign{\xA0 = \xA0}}{\\frac{\\grp{\\str{$problemNum2}}{\\str{$label3}}}{\\grp{\\str{X}}{\\str{$label4}}}}}',
						answer: '\\row{\\css{\\input{$answer}}{margin-left-small}}{\\html{&nbsp; $labelAnswer}}',
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
            },
			xUpperLeftFractionFraction: {
                title: 'Solving Proportions',
                children: [{
                    title: 'Main Answer',
                    children: [{
						problem: '\\col{\\row{\\str{$problemText}}}{\\row{\\str{\xA0}}}{\\row{\\frac{\\grp{\\html{&nbsp;}}{\\wholepart{X}}{\\str{$label1}}{\\html{&nbsp;}}}{\\grp{\\html{&nbsp;}}{\\frac{\\str{$problemNum2}}{\\str{$problemDen2}}}{\\str{$label2}}{\\html{&nbsp;}}}}{\\sign{\xA0 = \xA0}}{\\frac{\\grp{\\html{&nbsp;}}{\\frac{\\str{$problemNum3}}{\\str{$problemDen3}}}{\\str{$label3}}{\\html{&nbsp;}}}{\\grp{\\html{&nbsp;}}{\\frac{\\str{$problemNum4}}{\\str{$problemDen4}}}{\\str{$label4}}{\\html{&nbsp;}}}}}',
						answer: '\\row{\\css{\\frac{\\input{$answerNum}}{\\input{$answerDen}}}{margin-left-small}}{\\html{&nbsp; $labelAnswer}}',
						controls: {
							"checkAnswer": true,
							"help": '\\rowgrp'
							+'{\\row{\\str{\xA0}}}'
							+'{\\row{\\wholepart{X}}'
							+'{\\sign{&sdot;}}'
							+'{\\frac{\\str{$problemNum4}}{\\str{$problemDen4}}}'
							+'{\\sign{\xA0 = \xA0}}'
							+'{\\frac{\\str{$problemNum2}}{\\str{$problemDen2}}}'
							+'{\\sign{&sdot;}}'
							+'{\\frac{\\str{$problemNum3}}{\\str{$problemDen3}}}}'
							+'{\\row{\\html{&nbsp;}}}'
							+'{\\row{\\wholepart{X}}'
							+'{\\sign{&sdot;}}'
							+'{\\frac{\\str{$problemNum4}}{\\str{$problemDen4}}}'
							+'{\\sign{\xA0 = \xA0}}'
							+'{\\frac{\\str{$productNumRight}}{\\str{$productDenRight}}}}'
							+'{\\row{\\html{&nbsp;}}}'
							+'{\\row{\\wholepart{X}}'
							+'{\\sign{\xA0 = \xA0}}'
							+'{\\frac{\\str{$productNumRight}}{\\str{$productDenRight}}}'
							+'{\\sign{&divide;}}'
							+'{\\frac{\\str{$problemNum4}}{\\str{$problemDen4}}}}'
							+'{\\row{\\html{&nbsp;}}}'
							+'{\\row{\\wholepart{X}}'
							+'{\\sign{\xA0 = \xA0}}'
							+'{\\mixed{\\str{$answerWhole}}{\\frac{\\str{$answerNum}}{\\str{$answerDen}}}}}'
							+'{\\row{\\html{&nbsp;}}}'
							+'{\\css{\\row{\\str{Answer: \xA0 }}'
							+'{\\mixed{\\str{$answerWhole}}{\\frac{\\str{$answerNum}}{\\str{$answerDen}}}}}'
							+'{help-answer-text}}'
							+'{\\row{\\html{&nbsp;}}}'
						}
					}]
                }]
            },
			xLowerLeftFractionFraction: {
                title: 'Solving Proportions',
                children: [{
                    title: 'Main Answer',
                    children: [{
						problem: '\\col{\\row{\\str{$problemText}}}{\\row{\\str{\xA0}}}{\\row{\\frac{\\grp{\\html{&nbsp;}}{\\frac{\\str{$problemNum1}}{\\str{$problemDen1}}}{\\str{$label1}}{\\html{&nbsp;}}}{\\grp{\\html{&nbsp;}}{\\wholepart{X}}{\\str{$label2}}{\\html{&nbsp;}}}}{\\sign{\xA0 = \xA0}}{\\frac{\\grp{\\html{&nbsp;}}{\\frac{\\str{$problemNum3}}{\\str{$problemDen3}}}{\\str{$label3}}{\\html{&nbsp;}}}{\\grp{\\html{&nbsp;}}{\\frac{\\str{$problemNum4}}{\\str{$problemDen4}}}{\\str{$label4}}{\\html{&nbsp;}}}}}',
						answer: '\\row{\\css{\\frac{\\input{$answerNum}}{\\input{$answerDen}}}{margin-left-small}}{\\html{&nbsp; $labelAnswer}}',
						controls: {
							"checkAnswer": true,
							"help": '\\rowgrp'
							+'{\\row{\\str{\xA0}}}'
							+'{\\row{\\frac{\\str{$problemNum1}}{\\str{$problemDen1}}}'
							+'{\\sign{&sdot;}}'
							+'{\\frac{\\str{$problemNum4}}{\\str{$problemDen4}}}'
							+'{\\sign{\xA0 = \xA0}}'
							+'{\\wholepart{X}}'
							+'{\\sign{&sdot;}}'
							+'{\\frac{\\str{$problemNum3}}{\\str{$problemDen3}}}}'
							+'{\\row{\\html{&nbsp;}}}'
							+'{\\row{\\frac{\\str{$productNumLeft}}{\\str{$productDenLeft}}}'
							+'{\\sign{\xA0 = \xA0}}'
							+'{\\wholepart{X}}'
							+'{\\sign{&sdot;}}'
							+'{\\frac{\\str{$problemNum3}}{\\str{$problemDen3}}}}'
							+'{\\row{\\html{&nbsp;}}}'
							+'{\\row{\\frac{\\str{$productNumLeft}}{\\str{$productDenLeft}}}'
							+'{\\sign{&divide;}}'
							+'{\\frac{\\str{$problemNum3}}{\\str{$problemDen3}}}'
							+'{\\sign{\xA0 = \xA0}}'
							+'{\\wholepart{X}}}'
							+'{\\row{\\html{&nbsp;}}}'
							+'{\\row{\\mixed{\\str{$answerWhole}}{\\frac{\\str{$answerNum}}{\\str{$answerDen}}}}'
							+'{\\sign{\xA0 = \xA0}}'
							+'{\\wholepart{X}}}'
							+'{\\row{\\html{&nbsp;}}}'
							+'{\\css{\\row{\\str{Answer: \xA0 }}'
							+'{\\mixed{\\str{$answerWhole}}{\\frac{\\str{$answerNum}}{\\str{$answerDen}}}}}'
							+'{help-answer-text}}'
							+'{\\row{\\html{&nbsp;}}}'
						}
					}]
                }]
            },
			xUpperRightFractionFraction: {
                title: 'Solving Proportions',
                children: [{
                    title: 'Main Answer',
                    children: [{
						problem: '\\col{\\row{\\str{$problemText}}}{\\row{\\str{\xA0}}}{\\row{\\frac{\\grp{\\html{&nbsp;}}{\\frac{\\str{$problemNum1}}{\\str{$problemDen1}}}{\\str{$label1}}{\\html{&nbsp;}}}{\\grp{\\html{&nbsp;}}{\\frac{\\str{$problemNum2}}{\\str{$problemDen2}}}{\\str{$label2}}{\\html{&nbsp;}}}}{\\sign{\xA0 = \xA0}}{\\frac{\\grp{\\html{&nbsp;}}{\\wholepart{X}}{\\str{$label3}}{\\html{&nbsp;}}}{\\grp{\\html{&nbsp;}}{\\frac{\\str{$problemNum4}}{\\str{$problemDen4}}}{\\str{$label4}}{\\html{&nbsp;}}}}}',
						answer: '\\row{\\css{\\frac{\\input{$answerNum}}{\\input{$answerDen}}}{margin-left-small}}{\\html{&nbsp; $labelAnswer}}',
						controls: {
							"checkAnswer": true,
							"help": '\\rowgrp'
							+'{\\row{\\str{\xA0}}}'
							+'{\\row{\\frac{\\str{$problemNum1}}{\\str{$problemDen1}}}'
							+'{\\sign{&sdot;}}'
							+'{\\frac{\\str{$problemNum4}}{\\str{$problemDen4}}}'
							+'{\\sign{\xA0 = \xA0}}'
							+'{\\frac{\\str{$problemNum2}}{\\str{$problemDen2}}}'
							+'{\\sign{&sdot;}}'
							+'{\\wholepart{X}}}'
							+'{\\row{\\html{&nbsp;}}}'
							+'{\\row{\\frac{\\str{$productNumLeft}}{\\str{$productDenLeft}}}'
							+'{\\sign{&divide;}}'
							+'{\\frac{\\str{$problemNum2}}{\\str{$problemDen2}}}'
							+'{\\sign{\xA0 = \xA0}}'
							+'{\\wholepart{X}}}'
							+'{\\row{\\html{&nbsp;}}}'
							+'{\\row{\\mixed{\\str{$answerWhole}}{\\frac{\\str{$answerNum}}{\\str{$answerDen}}}}'
							+'{\\sign{\xA0 = \xA0}}'
							+'{\\wholepart{X}}}'							
							+'{\\row{\\html{&nbsp;}}}'
							+'{\\css{\\row{\\str{Answer: \xA0 }}'
							+'{\\mixed{\\str{$answerWhole}}{\\frac{\\str{$answerNum}}{\\str{$answerDen}}}}}'
							+'{help-answer-text}}'
							+'{\\row{\\html{&nbsp;}}}'
						}
					}]
                }]
            },
			xLowerRightFractionFraction: {
                title: 'Solving Proportions',
                children: [{
                    title: 'Main Answer',
                    children: [{
						problem: '\\col{\\row{\\str{$problemText}}}{\\row{\\str{\xA0}}}{\\row{\\frac{\\grp{\\html{&nbsp;}}{\\frac{\\str{$problemNum1}}{\\str{$problemDen1}}}{\\str{$label1}}{\\html{&nbsp;}}}{\\grp{\\html{&nbsp;}}{\\frac{\\str{$problemNum2}}{\\str{$problemDen2}}}{\\str{$label2}}{\\html{&nbsp;}}}}{\\sign{\xA0 = \xA0}}{\\frac{\\grp{\\html{&nbsp;}}{\\frac{\\str{$problemNum3}}{\\str{$problemDen3}}}{\\str{$label3}}{\\html{&nbsp;}}}{\\grp{\\html{&nbsp;}}{\\wholepart{X}}{\\str{$label4}}{\\html{&nbsp;}}}}}',
						answer: '\\row{\\css{\\frac{\\input{$answerNum}}{\\input{$answerDen}}}{margin-left-small}}{\\html{&nbsp; $labelAnswer}}',
						controls: {
							"checkAnswer": true,
							"help": '\\rowgrp'
							+'{\\row{\\str{\xA0}}}'
							+'{\\row{\\frac{\\str{$problemNum1}}{\\str{$problemDen1}}}'
							+'{\\sign{&sdot;}}'
							+'{\\wholepart{X}}'
							+'{\\sign{\xA0 = \xA0}}'
							+'{\\frac{\\str{$problemNum2}}{\\str{$problemDen2}}}'
							+'{\\sign{&sdot;}}'
							+'{\\frac{\\str{$problemNum3}}{\\str{$problemDen3}}}}'
							+'{\\row{\\html{&nbsp;}}}'
							+'{\\row{\\frac{\\str{$problemNum1}}{\\str{$problemDen1}}}'
							+'{\\sign{&sdot;}}'
							+'{\\wholepart{X}}'
							+'{\\sign{\xA0 = \xA0}}'
							+'{\\frac{\\str{$productNumRight}}{\\str{$productDenRight}}}}'
							+'{\\row{\\html{&nbsp;}}}'
							+'{\\row{\\wholepart{X}}'
							+'{\\sign{\xA0 = \xA0}}'
							+'{\\frac{\\str{$productNumRight}}{\\str{$productDenRight}}}'
							+'{\\sign{&divide;}}'
							+'{\\frac{\\str{$problemNum1}}{\\str{$problemDen1}}}}'
							+'{\\row{\\html{&nbsp;}}}'
							+'{\\row{\\wholepart{X}}'
							+'{\\sign{\xA0 = \xA0}}'
							+'{\\mixed{\\str{$answerWhole}}{\\frac{\\str{$answerNum}}{\\str{$answerDen}}}}}'
							+'{\\row{\\html{&nbsp;}}}'
							+'{\\css{\\row{\\str{Answer: \xA0 }}'
							+'{\\mixed{\\str{$answerWhole}}{\\frac{\\str{$answerNum}}{\\str{$answerDen}}}}}'
							+'{help-answer-text}}'
							+'{\\row{\\html{&nbsp;}}}'
						}
					}]
                }]
            }
        },
        data = [
			{ problemText: 'Solve for X:', problemNum1: 'X', problemDen1: '9', problemNum2: '10', problemDen2: '2', helpProduct: '90', answer: '45', labelAnswer: '&nbsp;', template: 'xUpperLeft' },
			{ problemText: 'Solve for X:', problemNum1: '3', problemDen1: 'X', problemNum2: '2', problemDen2: '14',helpProduct: '42', answer: '21', labelAnswer: '&nbsp;', template: 'xLowerLeft' },
			{ problemText: 'Solve for X:', problemNum1: '4', problemDen1: '13', problemNum2: '2', problemDen2: 'X',helpProduct: '26', answer: '6.5', labelAnswer: '&nbsp;', template: 'xLowerRight' },
			{ problemText: 'Solve for X:', problemNum1: '8', problemDen1: '3', problemNum2: '16', problemDen2: '6',  helpProduct: '48', answer: '6', labelAnswer: 'children', label1: 'crayons', label2: 'children', label3: 'crayons', label4: 'children', template: 'xLowerRightFraction' },
			{ problemText: 'Solve for X:', problemNum1: '1', problemDen1: '2', problemNum2: '2', problemDen2: '3', problemNum3: '5', problemDen3: '12', problemNum4: '5', problemDen4: '9', label1: 'apple', label2: 'orange',  label3: 'apple', label4: 'orange', productNumLeft: '5', productDenLeft: '18', productNumRight: '10', productDenRight: '36', answerWhole: '\xA0', answerNum: '5', answerDen: '9', labelAnswer: 'orange', template: 'xLowerRightFractionFraction' },
			{ problemText: 'Solve for X:', problemNum1: 'x', problemDen1: '4', problemNum2: '20', problemDen2: '5',helpProduct: '80', answer: '16', labelAnswer: 'muskrats', label1: 'muskrats', label2: 'rivers', label3: 'muskrats', label4: 'rivers', template: 'xUpperLeftFraction' },
			{ problemText: 'Solve for X:', problemNum1: '6.4', problemDen1: 'x', problemNum2: '3.2', problemDen2: '4', helpProduct: '25.6', answer: '8', labelAnswer: 'acres', label1: 'bushels', label2: 'acres', label3: 'bushels', label4: 'acres', template: 'xLowerLeftFraction' },
			{ problemText: 'Solve for X (round to the nearest tenth):', problemNum1: 'x', problemDen1: '1.5', problemNum2: '4.6', problemDen2: '1.6', helpProduct: '6.9', answer: '4.3', labelAnswer: 'ounces', label1: 'ounces', label2: 'tons', label3: 'ounces', label4: 'tons', template: 'xUpperLeftFraction' },
			{ problemText: 'Solve for X:', problemNum1: '32', problemDen1: '4', problemNum2: 'x', problemDen2: '6',  helpProduct: '192', answer: '48', labelAnswer: 'acorns', label1: 'acorns', label2: 'squirrels', label3: 'acorns', label4: 'squirrels', template: 'xUpperRightFraction' },
			{ problemText: 'Solve for X:', problemNum1: '1', problemDen1: '2', problemNum2: '5', problemDen2: '6', problemNum3: '2', problemDen3: '9', problemNum4: '2', problemDen4: '3', label1: 'onion', label2: 'squash',  label3: 'onion', label4: 'squash', productNumLeft: '2', productDenLeft: '6', productNumRight: '10', productDenRight: '54', answerWhole: '\xA0', answerNum: '2', answerDen: '5', labelAnswer: 'onion', template: 'xUpperRightFractionFraction' },
        ];
    return dataUtils.build(ret, template, data);
}]);

