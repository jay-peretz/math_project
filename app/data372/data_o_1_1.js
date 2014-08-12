/*global angular */

angular.module('mathSkills').service('data_o_1_1', ['dataUtils', function (dataUtils) {
    var desc = {
			title: 'O.1.1 Evaluating Exponential Expressions',
    		path: 'O.1.1-evaluating-exponential-expressions',
            children: []
        },
	        template = {
            first: {
                title: 'Evaluating Exponential Expressions',
                children: [{
                    title: 'Main Answer',
                    children: [{
						problem: '\\rowgrp'
						+'{\\html{Evaluate:}}'
						+'{\\html{&nbsp;}}'
						+'{\\grp'
							+'$problemStatement'
						+'}',
						answer: '\\grp{\\input{$answer}}',
						controls: {
							"checkAnswer": true,
							"help": '\\rowgrp'
							+'{\\html{$firstHelp}}'
							+'{\\html{&nbsp;}}'
							+'$secondHelp'
							+'{\\html{&nbsp;}}'
							+'{css{\\str{answer:  $textAnswer}}{help-answer-text}}'
						}
					}]
				}]
			},
			evaluate: {
                title: 'Evaluating Exponential Expressions',
                children: [{
                    title: 'Main Answer',
                    children: [{
						problem: '\\rowgrp'
									+'$problemStatement',
						answer: '\\grp{\\input{$answer}}',
						controls: {
							"checkAnswer": true,
							"help": false,
							"workbook": true
						}
					}]
				}, {
					title: 'Workbook',
					children: [{
						problem: '\\rowgrp'
									+'$problemStatement',
						answer: '$wb',
						controls: {
							"checkAnswer": true,
							"help": true
						}
					}]
				}]
			},
			evaluateFractionBase: {
                title: 'Evaluating Exponential Expressions',
                children: [{
                    title: 'Main Answer',
                    children: [{
                         problem: '\\rowgrp'+
                                	'{\\str{Solve:}}' +
									'{\\html{&nbsp;}}' +
                                	'{$prob}',
                        answer: '$ans',
                        controls: {
                            "checkAnswer": true,
                            "help": false,
                            "workbook": true
                        }
                    }]
                }, {
                    title: 'Workbook',
                    children: [{
                         problem: '\\rowgrp'+
                                	'{\\str{Solve:}}' +
									'{\\html{&nbsp;}}' +
                                	'{$prob}',
                        answer: '$wb',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }]
                }]
            }
        },
        data = [
            { // problem 1
			problemStatement: dataUtils.pre('{\\exp{\\str{(-5 )}}{\\str{2}}}'),
			firstHelp: 'The exponent is raised above the parenthesis. It therefore affects \\"everything\\" inside the parenthesis (the sign and the number).', 
			secondHelp: dataUtils.pre(
							'{\\grp'
								+'{\\exp{\\str{(-5 )}}{\\str{2}}}'
								+'{\\str{ means &nbsp; -5 &nbsp; *&nbsp; -5}}'
							+'}'
						),
			answer: '-25', 
			textAnswer: ' &nbsp; -25', 
			template: 'first' 
			}
			,
            { // problem 2
			problemStatement: dataUtils.pre('{\\exp{\\str{(-5 )}}{\\str{2}}}'),
			firstHelp: 'The exponent is raised above the parenthesis. It therefore affects \\"everything\\" inside the parenthesis (the sign and the number).', 
			secondHelp: dataUtils.pre(
							'{\\grp'
								+'{\\exp{\\str{(-5 )}}{\\str{2}}}'
								+'{\\str{ means &nbsp; -5 &nbsp; *&nbsp; -5}}'
							+'}'
						),
			answer: '-25', 
			textAnswer: ' &nbsp; -25', 
			template: 'first' }
			,
            { // problem 3
			problemStatement: dataUtils.pre('{\\exp{\\str{(-5 )}}{\\str{2}}}'),
			firstHelp: 'The exponent is raised above the parenthesis. It therefore affects \\"everything\\" inside the parenthesis (the sign and the number).', 
			secondHelp: dataUtils.pre(
							'{\\grp'
								+'{\\exp{\\str{(-5 )}}{\\str{2}}}'
								+'{\\str{ means &nbsp; -5 &nbsp; *&nbsp; -5}}'
							+'}'
						),
			answer: '-25', 
			textAnswer: ' &nbsp; -25', 
			template: 'first' }
			,
            { // problem 4
			problemStatement: dataUtils.pre('{\\exp{\\str{(-5 )}}{\\str{2}}}'),
			firstHelp: 'The exponent is raised above the parenthesis. It therefore affects \\"everything\\" inside the parenthesis (the sign and the number).', 
			secondHelp: dataUtils.pre(
							'{\\grp'
								+'{\\exp{\\str{(-5 )}}{\\str{2}}}'
								+'{\\str{ means &nbsp; -5 &nbsp; *&nbsp; -5}}'
							+'}'
						),
			answer: '-25', 
			textAnswer: ' &nbsp; -25', 
			template: 'first' }
			,
            { // problem 5
			problemStatement: dataUtils.pre('{\\exp{\\str{(-5 )}}{\\str{2}}}'),
			firstHelp: 'The exponent is raised above the parenthesis. It therefore affects \\"everything\\" inside the parenthesis (the sign and the number).', 
			secondHelp: dataUtils.pre(
							'{\\grp'
								+'{\\exp{\\str{(-5 )}}{\\str{2}}}'
								+'{\\str{ means &nbsp; -5 &nbsp; *&nbsp; -5}}'
							+'}'
						),
			answer: '-25', 
			textAnswer: ' &nbsp; -25', 
			template: 'first' }
			,
            { // problem 6
			problemStatement: dataUtils.pre('{\\exp{\\str{(-5 )}}{\\str{2}}}'),
			firstHelp: 'The exponent is raised above the parenthesis. It therefore affects \\"everything\\" inside the parenthesis (the sign and the number).', 
			secondHelp: dataUtils.pre(
							'{\\grp'
								+'{\\exp{\\str{(-5 )}}{\\str{2}}}'
								+'{\\str{ means &nbsp; -5 &nbsp; *&nbsp; -5}}'
							+'}'
						),
			answer: '-25', 
			textAnswer: ' &nbsp; -25', 
			template: 'first' }
			,
            { // problem 7
			problemStatement: dataUtils.pre('{\\exp{\\str{(-5 )}}{\\str{2}}}'),
			firstHelp: 'The exponent is raised above the parenthesis. It therefore affects \\"everything\\" inside the parenthesis (the sign and the number).', 
			secondHelp: dataUtils.pre(
							'{\\grp'
								+'{\\exp{\\str{(-5 )}}{\\str{2}}}'
								+'{\\str{ means &nbsp; -5 &nbsp; *&nbsp; -5}}'
							+'}'
						),
			answer: '-25', 
			textAnswer: ' &nbsp; -25', 
			template: 'first' }
			,
            { // problem 8
			problemStatement: dataUtils.pre('{\\exp{\\str{(-5 )}}{\\str{2}}}'),
			firstHelp: 'The exponent is raised above the parenthesis. It therefore affects \\"everything\\" inside the parenthesis (the sign and the number).', 
			secondHelp: dataUtils.pre(
							'{\\grp'
								+'{\\exp{\\str{(-5 )}}{\\str{2}}}'
								+'{\\str{ means &nbsp; -5 &nbsp; *&nbsp; -5}}'
							+'}'
						),
			answer: '-25', 
			textAnswer: ' &nbsp; -25', 
			template: 'first' }
			,
            { // problem 9
			problemStatement: dataUtils.pre('{\\exp{\\str{(-5 )}}{\\str{2}}}'),
			firstHelp: 'The exponent is raised above the parenthesis. It therefore affects \\"everything\\" inside the parenthesis (the sign and the number).', 
			secondHelp: dataUtils.pre(
							'{\\grp'
								+'{\\exp{\\str{(-5 )}}{\\str{2}}}'
								+'{\\str{ means &nbsp; -5 &nbsp; *&nbsp; -5}}'
							+'}'
						),
			answer: '-25', 
			textAnswer: ' &nbsp; -25', 
			template: 'first' }
			,
            { // problem 10
			problemStatement: dataUtils.pre('{\\exp{\\str{(-5 )}}{\\str{2}}}'),
			firstHelp: 'The exponent is raised above the parenthesis. It therefore affects \\"everything\\" inside the parenthesis (the sign and the number).', 
			secondHelp: dataUtils.pre(
							'{\\grp'
								+'{\\exp{\\str{(-5 )}}{\\str{2}}}'
								+'{\\str{ means &nbsp; -5 &nbsp; *&nbsp; -5}}'
							+'}'
						),
			answer: '-25', 
			textAnswer: ' &nbsp; -25', 
			template: 'first' }
			,
             { // problem 11
			problemStatement: dataUtils.pre(
											'{\\grp'
												+'{\\exp{\\str{8}}{\\str{4}}}'
												+'{\\str{ - }}'
												+'{\\exp{\\str{6}}{\\str{5}}}'
											+'}'
								),
			ordopsStatement: '8<sup>4</sup> - 6<sup>5</sup>',
			answer: '-3680',
			wb: dataUtils.pre('\\ordopssimple{' +
						'\\grp{\\btn{8 <sup>4</sup>}{T}{bigger}}{\\btn{-}{F}{bigger}}{\\btn{6 <sup>5</sup>}{F}{bigger}},' +
                        '\\input{4096},' +
                        '\\grp{\\html{<span class=bigger>4096</span>}}{\\btn{-}{F}{bigger}}{\\btn{6 <sup>5</sup>}{T}{bigger}},' +
                        '\\input{7776},' +
						'\\grp{\\html{<span class=bigger>4096</span>}}{\\btn{-}{T}{bigger}}{\\html{<span class=bigger>7776</span>}},' +
						'\\input{-3680},' +
						'\\sign{-3680}' +
                    '}{terms}{evaluate&nbsp; 8<sup>4</sup>}{evaluate&nbsp; 6<sup>5</sup>}{4096 - 7776}'),
			template: 'evaluate' 
			}
			,
            { // problem 12
			problemStatement: dataUtils.pre(
											'{\\grp'
												+'{\\exp{\\str{2}}{\\str{9}}}'
												+'{\\str{ - }}'
												+'{\\exp{\\str{12}}{\\str{3}}}'
											+'}'
								),
			ordopsStatement: '2<sup>9</sup> - 12<sup>3</sup>',
			answer: '-1216',
			wb: dataUtils.pre('\\ordopssimple{' +
						'\\grp{\\btn{2 <sup>9</sup>}{T}{bigger}}{\\btn{-}{F}{bigger}}{\\btn{12 <sup>3</sup>}{F}{bigger}},' +
                        '\\input{512},' +
                        '\\grp{\\html{<span class=bigger>512</span>}}{\\btn{-}{F}{bigger}}{\\btn{12 <sup>3</sup>}{T}{bigger}},' +
                        '\\input{1728},' +
						'\\grp{\\html{<span class=bigger>512</span>}}{\\btn{-}{T}{bigger}}{\\html{<span class=bigger>1728</span>}},' +
						'\\input{-1216},' +
						'\\sign{-1216}' +
                    '}{terms}{evaluate&nbsp; 2<sup>9</sup>}{evaluate&nbsp; 12<sup>3</sup>}{512 - 1728}'),
			template: 'evaluate' 
			}
        ];

	return dataUtils.build(desc, template, data);
}]);



