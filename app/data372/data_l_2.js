
/*global angular */

angular.module('mathSkills').service('data_l_2', ['dataUtils', function (dataUtils) {
    var desc = {
			title: 'L.2 Dividing Integers, Decimals, Fractions and Mixed Numbers',
    		path: 'L.2-dividing-integers-decimals-fractions',
            children: []
        },
	        template = {
			// third template, two number operation, no parenthetical expression
			third: {
                title: 'Evaluate Signed Expressions',
                children: [{
                    title: 'Main Answer',
                    children: [{
						problem: '\\rowgrp'
						//+'{\\html{Evaluate:}}'
						+'{\\html{&nbsp;}}'
						+'{\\grp{\\html{(}}{\\sign{$firstSign}}{html{$firstAbsNumber}}{\\html{)}}{\\sign{&divide;}}{\\html{(}}{\\sign{$secondSign}}{html{$secondAbsNumber}}{\\html{)}}}',
						answer: '\\input{$answer}',
						controls: {
							"checkAnswer": true,
							"help": '\\rowgrp'
							+'{\\html{$firstHelp}}'
							+'{\\html{&nbsp;}}'
							//+'{\\html{"$secondHelp}}'
							//+'{\\html{&nbsp;}}'
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
			
			// problem 11 Division of two integers with the same sign, always results in positive. Just divide the absolute values and make the answer positive.
			//{ outerSign: '-', innerSign: '+', absNumber: '7', textInnerSign: 'positive', firstHelp: 'The minus sign in front of a parenthesis means to take the opposite sign of the $$textInnerSign $$absNumber inside the parenthesis.', secondHelp: ' means take the opposite sign of the $$textInnerSign $$absNumber inside the parenthesis:', answer: '-7', textAnswer: ' &nbsp; -7', template: 'second' },
			{ firstSign: '-', secondSign: '-', firstAbsNumber: '16', secondAbsNumber: '4',  firstTextSign: 'negative', secondTextSign: 'negative', firstHelp: 'The $$firstAbsNumber is $$firstTextSign and the $$secondAbsNumber is $$secondTextSign. <span class=underline>Division of two integers with the same sign, always results in positive.</span> Just divide the absolute values and make the answer positive.', answer: '4', textAnswer: ' &nbsp; 4', template: 'third' },
				//The values have <span class=underline>different</span> signs.  Therefore, <span class=underline>take the difference</span> between the two absolute values and <span class=underline>keep the sign of the larger value</span>.', secondHelp: 'The difference between 5 and 3 (5 - 3) is 2.  The $$firstTextSign value is the larger sign, so the answer is $$firstTextSign.', answer: '4', textAnswer: ' &nbsp; 4', template: 'third' },
			// problem 12
			{ firstSign: '', secondSign: '+', thirdSign: '-', firstAbsNumber: '4', secondAbsNumber: '11', firstTextSign: 'positive', secondTextSign: 'negative', firstHelp: 'The $$firstAbsNumber is $$firstTextSign and the $$secondAbsNumber is $$secondTextSign.  The values have <span class=underline>different</span> signs.  Therefore, <span class=underline>take the difference</span> between the two absolute values and <span class=underline>keep the sign of the larger value</span>.', secondHelp: 'The difference between 4 and 11 (11 - 4) is 7.  The $$secondTextSign value is the larger sign, so the answer is $$secondTextSign.', answer: '-7', textAnswer: ' &nbsp; -7', template: 'fifth' },
			// to be problem 15
			{ firstSign: '-', secondSign: '-', firstAbsNumber: '6', secondAbsNumber: '4', firstTextSign: 'negative', secondTextSign: 'negative', firstHelp: 'The $$firstAbsNumber is $$firstTextSign and the $$secondAbsNumber becomes $$secondTextSign.  The values have <span class=underline>the same</span> sign.  Therefore, <span class=underline>take the sum</span> of the two absolute values and <span class=underline>keep the sign</span>.', secondHelp: 'The sum of 6 and 4 (6 + 4) is 10.  Both signs are $$secondTextSign, so the answer is $$secondTextSign.', answer: '-10', textAnswer: ' &nbsp; -10', template: 'fourth' },
        ];

	return dataUtils.build(desc, template, data);
}]);




