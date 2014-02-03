/*global angular */

angular.module('mathSkills').service('data_k_2', ['dataUtils', function (dataUtils) {
    var desc = {
			title: 'K.2 Adding Integers and Decimals',
    		path: 'K.2-adding-integers-and-decimals',
            children: []
        },
	        template = {
			// first template, single number, no sign inside parenthesis expression
            first: {
                title: 'Evaluate Signed Expressions',
                children: [{
                    title: 'Main Answer',
                    children: [{
						problem: '\\rowgrp'
						+'{\\html{Evaluate:}}'
						+'{\\html{&nbsp;}}'
						+'{\\grp{\\sign{$outerSign}}{\\html{(}}{html{$absNumber}}{\\html{)}}}',
						answer: '\\input{$answer}',
						controls: {
							"checkAnswer": true,
							"help": '\\rowgrp'
							+'{\\html{$firstHelp}}'
							+'{\\html{&nbsp;}}'
							+'{\\html{"<span class=bigger>$outerSign</span>"&nbsp; $secondHelp}}'
							+'{\\html{&nbsp;}}'
							+'{css{\\html{answer:  $textAnswer}}{help-answer-text}}'
						}
					}]
				}]
			},
			// second template, single number, has a sign inside parenthesis expression
			second: {
                title: 'Evaluate Signed Expressions',
                children: [{
                    title: 'Main Answer',
                    children: [{
						problem: '\\rowgrp'
						+'{\\html{Evaluate:}}'
						+'{\\html{&nbsp;}}'
						+'{\\grp{\\sign{$outerSign}}{\\html{(}}{\\sign{$innerSign}}{html{$absNumber}}{\\html{)}}}',
						answer: '\\input{$answer}',
						controls: {
							"checkAnswer": true,
							"help": '\\rowgrp'
							+'{\\html{$firstHelp}}'
							+'{\\html{&nbsp;}}'
							+'{\\html{"<span class=bigger>$outerSign</span>"&nbsp; $secondHelp}}'
							+'{\\html{&nbsp;}}'
							+'{css{\\html{answer:  $textAnswer}}{help-answer-text}}'
						}
					}]
				}]
			},
			// third template, two number operation, no parenthetical expression
			third: {
                title: 'Evaluate Signed Expressions',
                children: [{
                    title: 'Main Answer',
                    children: [{
						problem: '\\rowgrp'
						+'{\\html{Evaluate:}}'
						+'{\\html{&nbsp;}}'
						+'{\\grp{\\sign{$firstSign}}{html{$firstAbsNumber}}{\\sign{$secondSign}}{html{$secondAbsNumber}}}',
						answer: '\\input{$answer}',
						controls: {
							"checkAnswer": true,
							"help": '\\rowgrp'
							+'{\\html{$firstHelp}}'
							+'{\\html{&nbsp;}}'
							+'{\\html{"$secondHelp}}'
							+'{\\html{&nbsp;}}'
							+'{css{\\html{answer:  $textAnswer}}{help-answer-text}}'
						}
					}]
				}]
			},
			// fourth template, two number operation, no sign inside 2nd term parenthetical expression
			fourth: {
                title: 'Evaluate Signed Expressions',
                children: [{
                    title: 'Main Answer',
                    children: [{
						problem: '\\rowgrp'
						+'{\\html{Evaluate:}}'
						+'{\\html{&nbsp;}}'
						+'{\\grp{\\sign{$firstSign}}{html{$firstAbsNumber}}{\\sign{$secondSign}}{\\html{(}}{html{$secondAbsNumber}}{\\html{)}}}',
						answer: '\\input{$answer}',
						controls: {
							"checkAnswer": true,
							"help": '\\rowgrp'
							+'{\\html{$firstHelp}}'
							+'{\\html{&nbsp;}}'
							+'{\\html{$secondHelp}}'
							+'{\\html{&nbsp;}}'
							+'{css{\\html{answer:  $textAnswer}}{help-answer-text}}'
						}
					}]
				}]
			},
			// fifth template, two number operation, has a sign inside 2nd term parenthetical expression
			fifth: {
                title: 'Evaluate Signed Expressions',
                children: [{
                    title: 'Main Answer',
                    children: [{
						problem: '\\rowgrp'
						+'{\\html{Evaluate:}}'
						+'{\\html{&nbsp;}}'
						+'{\\grp{\\sign{$firstSign}}{html{$firstAbsNumber}}{\\sign{$secondSign}}{\\html{(}}{\\sign{$thirdSign}}{html{$secondAbsNumber}}{\\html{)}}}',
						answer: '\\input{$answer}',
						controls: {
							"checkAnswer": true,
							"help": '\\rowgrp'
							+'{\\html{$firstHelp}}'
							+'{\\html{&nbsp;}}'
							+'{\\html{$secondHelp}}'
							+'{\\html{&nbsp;}}'
							+'{css{\\html{answer:  $textAnswer}}{help-answer-text}}'
						}
					}]
				}]
			}	
        },
        data = [
			// problem 11
			{ firstSign: '-', secondSign: '+', firstAbsNumber: '5', secondAbsNumber: '3', firstTextSign: 'negative', secondTextSign: 'positive', firstHelp: 'The $$firstAbsNumber is $$firstTextSign and the $$secondAbsNumber is $$secondTextSign.  The values have <span class=underline>different</span> signs.  Therefore, <span class=underline>take the difference</span> between the two absolute values and <span class=underline>keep the sign of the larger value</span>.', secondHelp: 'The difference between 5 and 3 (5 - 3) is 2.  The $$firstTextSign value is the larger sign, so the answer is $$firstTextSign.', answer: '-2', textAnswer: ' &nbsp; -2', template: 'third' },
			// problem 12
			{ firstSign: '', secondSign: '+', thirdSign: '-', firstAbsNumber: '4', secondAbsNumber: '11', firstTextSign: 'positive', secondTextSign: 'negative', firstHelp: 'The $$firstAbsNumber is $$firstTextSign and the $$secondAbsNumber is $$secondTextSign.  The values have <span class=underline>different</span> signs.  Therefore, <span class=underline>take the difference</span> between the two absolute values and <span class=underline>keep the sign of the larger value</span>.', secondHelp: 'The difference between 4 and 11 (11 - 4) is 7.  The $$secondTextSign value is the larger sign, so the answer is $$secondTextSign.', answer: '-7', textAnswer: ' &nbsp; -7', template: 'fifth' },
			// to be problem 13
			{ firstSign: '-', secondSign: '-', firstAbsNumber: '8', secondAbsNumber: '7', firstTextSign: 'negative', secondTextSign: 'negative', firstHelp: 'The $$firstAbsNumber is $$firstTextSign and the $$secondAbsNumber is $$secondTextSign.  The values have <span class=underline>the same</span> sign.  Therefore, <span class=underline>add</span> the two absolute values and <span class=underline>keep the same sign</span>.', secondHelp: 'The adding of 8 and 7 (8 + 7) is 15.  Keep the negative sign.', answer: '-15', textAnswer: ' &nbsp; -15', template: 'fourth' },
			// problem 14
			{ firstSign: '', secondSign: '-', firstAbsNumber: '12', secondAbsNumber: '17', firstTextSign: 'positive', secondTextSign: 'negative', firstHelp: 'The $$firstAbsNumber is $$firstTextSign and the $$secondAbsNumber is $$secondTextSign.  The values have <span class=underline>different</span> signs.  Therefore, <span class=underline>take the difference</span> between the two absolute values and <span class=underline>keep the sign of the larger value</span>.', secondHelp: 'The difference between 12 and 17 (12 - 17) is 5.  The $$secondTextSign value is the larger sign, so the answer is $$secondTextSign.', answer: '-5', textAnswer: ' &nbsp; -5', template: 'third' },
			// to be problem 15
			{ firstSign: '-', secondSign: '-', firstAbsNumber: '6', secondAbsNumber: '4', firstTextSign: 'negative', secondTextSign: 'negative', firstHelp: 'The $$firstAbsNumber is $$firstTextSign and the $$secondAbsNumber is $$secondTextSign.  The values have <span class=underline>the same</span> sign.  Therefore, <span class=underline>take the sum</span> of the two absolute values and <span class=underline>keep the same sign</span>.', secondHelp: 'The adding of 6 and 4 (6 + 4) is 10.  Keep the negative sign.', answer: '-10', textAnswer: ' &nbsp; -10', template: 'fourth' },
			// to be problem 16
			{ firstSign: '', secondSign: '+', firstAbsNumber: '27', secondAbsNumber: '4', firstTextSign: 'positive', secondTextSign: 'positive', firstHelp: 'The $$firstAbsNumber is $$firstTextSign and the $$secondAbsNumber is $$secondTextSign.  The values have <span class=underline>the same</span> sign.  Therefore, <span class=underline>take the sum</span> of the two absolute values and <span class=underline>keep the same sign</span>.', secondHelp: 'The adding of 27 and 4 (27 + 4) is 31.  Keep the positive sign.', answer: '31', textAnswer: ' &nbsp; 31', template: 'fourth' },
			// problem 17
			{ firstSign: '-', secondSign: '+', firstAbsNumber: '6.2', secondAbsNumber: '4.8', firstTextSign: 'negative', secondTextSign: 'positive', firstHelp: 'The $$firstAbsNumber is $$firstTextSign and the $$secondAbsNumber is $$secondTextSign.  The values have <span class=underline>different</span> signs.  Therefore, <span class=underline>take the difference</span> between the two absolute values and <span class=underline>keep the sign of the larger value</span>.', secondHelp: 'The difference between 6.2 and 4.8 (6.2 - 4.8) is 1.4.  The $$firstTextSign value is the larger sign, so the answer is $$firstTextSign.', answer: '-1.4', textAnswer: ' &nbsp; -1.4', template: 'third' },
			// to be problem 18
			{ firstSign: '-', secondSign: '-', firstAbsNumber: '2.15', secondAbsNumber: '3.6', firstTextSign: 'negative', secondTextSign: 'negative', firstHelp: 'The $$firstAbsNumber is $$firstTextSign and the $$secondAbsNumber is $$secondTextSign.  The values have <span class=underline>the same</span> sign.  Therefore, <span class=underline>take the sum</span> of the two absolute values and <span class=underline>keep the same sign</span>.', secondHelp: 'The adding of 6 and 4 (2.15 + 3.6) is 5.75.  Keep the negative sign.', answer: '-5.75', textAnswer: ' &nbsp; -5.75', template: 'fourth' },
			// problem 19
			{ firstSign: '', secondSign: '-', thirdSign: '', firstAbsNumber: '5', secondAbsNumber: '8.25', firstTextSign: 'positive', secondTextSign: 'negative', firstHelp: 'The $$firstAbsNumber is $$firstTextSign and the $$secondAbsNumber is $$secondTextSign.  The values have <span class=underline>different</span> signs.  Therefore, <span class=underline>take the difference</span> between the two absolute values and <span class=underline>keep the sign of the larger value</span>.', secondHelp: 'The difference between 5 and 8.25 (5 - 8.25) is 3.25.  The $$secondTextSign value is the larger sign, so the answer is $$secondTextSign.', answer: '-3.25', textAnswer: ' &nbsp; -3.25', template: 'fifth' },
			// problem 20
			{ firstSign: '-', secondSign: '+', thirdSign: '', firstAbsNumber: '4.3', secondAbsNumber: '7.2', firstTextSign: 'negative', secondTextSign: 'positive', firstHelp: 'The $$firstAbsNumber is $$firstTextSign and the $$secondAbsNumber is $$secondTextSign.  The values have <span class=underline>different</span> signs.  Therefore, <span class=underline>take the difference</span> between the two absolute values and <span class=underline>keep the sign of the larger value</span>.', secondHelp: 'The difference between 4.3 and 7.2 (4.3 - 7.2) is 2.9.  The $$firstTextSign value is the larger sign, so the answer is $$firstTextSign.', answer: '2.9', textAnswer: ' &nbsp; 2.9', template: 'fifth' },
        ];

	return dataUtils.build(desc, template, data);
}]);
