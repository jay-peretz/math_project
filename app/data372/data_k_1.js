/*global angular */

angular.module('mathSkills').service('data_k_1', ['dataUtils', function (dataUtils) {
    var desc = {
			title: 'K.1 Evaluate Signed Expressions',
    		path: 'K.1-evaluate-signed-expressions',
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
			// problem 1
            { outerSign: '-', innerSign: '', absNumber: '3', textInnerSign: 'positive', firstHelp: 'The minus sign in front of a parenthesis means to take the opposite sign of whatever the value is inside the parenthesis.', secondHelp: ' means take the opposite sign of the $$textInnerSign $$absNumber inside the parenthesis:', answer: '-3', textAnswer: ' &nbsp; -3', template: 'first' },
			// problem 2
			{ outerSign: '-', innerSign: '-', absNumber: '5', textInnerSign: 'negative', firstHelp: 'The minus sign in front of a parenthesis means to take the opposite sign of the $$textInnerSign $$absNumber inside the parenthesis.', secondHelp: ' means take the opposite sign of the $$textInnerSign $$absNumber inside the parenthesis:', answer: '5', textAnswer: ' &nbsp; +5 (or just 5)', template: 'second' },
			// problem 3
			{ outerSign: '+', innerSign: '+', absNumber: '3', textInnerSign: 'positive', doubleQuote: '"', firstHelp: 'The plus sign in front of a parenthesis has no power to change the sign of any value.  The plus sign is the weak sign that can be read as $$doubleQuoteand$$doubleQuote.', secondHelp: ' means $$doubleQuoteand$$doubleQuote we have $$textInnerSign $$absNumber inside the parenthesis:', answer: '3', textAnswer: ' &nbsp; +3 (or just 3)', template: 'second' },
			// problem 4
			{ outerSign: '+', innerSign: '-', absNumber: '4', textInnerSign: 'negative', doubleQuote: '"', firstHelp: 'The plus sign in front of a parenthesis has no power to change the sign of any value.  The plus sign is the weak sign that can be read as $$doubleQuoteand$$doubleQuote.', secondHelp: ' means $$doubleQuoteand$$doubleQuote we have $$textInnerSign $$absNumber inside the parenthesis:', answer: '-4', textAnswer: ' &nbsp; -4', template: 'second' },
			// problem 5
			{ outerSign: '-', innerSign: '', absNumber: '8', textInnerSign: 'positive', firstHelp: 'The minus sign in front of a parenthesis means to take the opposite sign of whatever the value is inside the parenthesis.', secondHelp: ' means take the opposite sign of the $$textInnerSign $$absNumber inside the parenthesis:', answer: '-8', textAnswer: ' &nbsp; -8', template: 'first' },
			// problem 6
			{ outerSign: '+', innerSign: '', absNumber: '2', textInnerSign: 'positive', doubleQuote: '"', firstHelp: 'The plus sign in front of a parenthesis has no power to change the sign of any value.  The plus sign is the weak sign that can be read as $$doubleQuoteand$$doubleQuote.', secondHelp: ' means $$doubleQuoteand$$doubleQuote we have $$textInnerSign $$absNumber inside the parenthesis:', answer: '2', textAnswer: ' &nbsp; +2 (or just 2)', template: 'first' },
			// problem 7
			{ outerSign: '-', innerSign: '-', absNumber: '38', textInnerSign: 'negative', firstHelp: 'The minus sign in front of a parenthesis means to take the opposite sign of the $$textInnerSign $$absNumber inside the parenthesis.', secondHelp: ' means take the opposite sign of the $$textInnerSign $$absNumber inside the parenthesis:', answer: '38', textAnswer: ' &nbsp; +38 (or just 38)', template: 'second' },
			// problem 8
			{ outerSign: '-', innerSign: '+', absNumber: '7', textInnerSign: 'positive', firstHelp: 'The minus sign in front of a parenthesis means to take the opposite sign of the $$textInnerSign $$absNumber inside the parenthesis.', secondHelp: ' means take the opposite sign of the $$textInnerSign $$absNumber inside the parenthesis:', answer: '-7', textAnswer: ' &nbsp; -7', template: 'second' },
			// problem 9
            { outerSign: '-', innerSign: '', absNumber: '7', textInnerSign: 'positive', firstHelp: 'The minus sign in front of a parenthesis means to take the opposite sign of whatever the value is inside the parenthesis.', secondHelp: ' means take the opposite sign of the $$textInnerSign $$absNumber inside the parenthesis:', answer: '-7', textAnswer: ' &nbsp; -7', template: 'first' },
			// problem 10
			{ outerSign: '+', innerSign: '-', absNumber: '25', textInnerSign: 'negative', doubleQuote: '"', firstHelp: 'The plus sign in front of a parenthesis has no power to change the sign of any value.  The plus sign is the weak sign that can be read as $$doubleQuoteand$$doubleQuote.', secondHelp: ' means $$doubleQuoteand$$doubleQuote we have $$textInnerSign $$absNumber inside the parenthesis:', answer: '-25', textAnswer: ' &nbsp; -25', template: 'second' },
			// problem 11
			{ firstSign: '-', secondSign: '+', firstAbsNumber: '5', secondAbsNumber: '3', firstTextSign: 'negative', secondTextSign: 'positive', firstHelp: 'The $$firstAbsNumber is $$firstTextSign and the $$secondAbsNumber is $$secondTextSign.  The values have <span class=underline>different</span> signs.  Therefore, <span class=underline>take the difference</span> between the two absolute values and <span class=underline>keep the sign of the larger value</span>.', secondHelp: 'The difference between 5 and 3 (5 - 3) is 2.  The $$firstTextSign value is the larger sign, so the answer is $$firstTextSign.', answer: '-2', textAnswer: ' &nbsp; -2', template: 'third' },
			// problem 12
			{ firstSign: '', secondSign: '+', thirdSign: '-', firstAbsNumber: '4', secondAbsNumber: '11', firstTextSign: 'positive', secondTextSign: 'negative', firstHelp: 'The $$firstAbsNumber is $$firstTextSign and the $$secondAbsNumber is $$secondTextSign.  The values have <span class=underline>different</span> signs.  Therefore, <span class=underline>take the difference</span> between the two absolute values and <span class=underline>keep the sign of the larger value</span>.', secondHelp: 'The difference between 4 and 11 (11 - 4) is 7.  The $$secondTextSign value is the larger sign, so the answer is $$secondTextSign.', answer: '-7', textAnswer: ' &nbsp; -7', template: 'fifth' },
			// to be problem 15
			{ firstSign: '-', secondSign: '-', firstAbsNumber: '6', secondAbsNumber: '4', firstTextSign: 'negative', secondTextSign: 'negative', firstHelp: 'The $$firstAbsNumber is $$firstTextSign and the $$secondAbsNumber becomes $$secondTextSign.  The values have <span class=underline>the same</span> sign.  Therefore, <span class=underline>take the sum</span> of the two absolute values and <span class=underline>keep the sign</span>.', secondHelp: 'The sum of 6 and 4 (6 + 4) is 10.  Both signs are $$secondTextSign, so the answer is $$secondTextSign.', answer: '-10', textAnswer: ' &nbsp; -10', template: 'fourth' },
        ];

	return dataUtils.build(desc, template, data);
}]);



