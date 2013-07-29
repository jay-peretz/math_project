/*global angular */

angular.module('mathSkills').service('data16_1', ['dataUtils', function (dataUtils) {
    var desc = {
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
						problem: '\\html{Choose the reduced ratio with the same meaning as:<br><br><table class=fraction><tr><td class=numerator>$problemNum</td></tr><tr><td><hr></td></tr><tr><td class=denominator>$problemDen</td></tr></table>}',
						answer: '\\rowgrp'
                                    +'{\\html{&nbsp;}}'
                                    +'{\\grp{\\btn{A}{$buttonValueA}{marg}}{\\str{\xA0 \xA0 $button1a to $button1b}}}'
                                    +'{\\grp{\\btn{B}{$buttonValueB}{marg}}{\\str{\xA0 \xA0 $button2a to $button2b}}}'
                                    +'{\\grp{\\btn{C}{$buttonValueC}{marg}}{\\str{\xA0 \xA0 $button3a to $button3b}}}'
                                    +'{\\grp{\\btn{D}{$buttonValueD}{marg}}{\\str{\xA0 \xA0 $button4a to $button4b}}}',
						controls: {
							"checkAnswer": true,
							"help": true
							/*"help": '\\rowgrp{\\css{\\row{\\str{Answer: \xA0 }}{\\str{ $buttonLetter \xA0 }}}{label_like}}{\\row{\\str{\xA0}}}{\\css{\\row{\\str{$answerFirst to $answerSecond}}}{help-answer-text}}}'*/
						}
					}]
                }]
            },
			second: {
                title: 'Writing a Ratio of Two Numbers',
                children: [{
                    title: 'Main Answer',
                    children: [{
						problem: '\\html{Choose the reduced ratio with the same meaning as:<br><br>$problem1 to $problem2}',
						answer: '\\rowgrp'
                                    +'{\\html{&nbsp;}}'
                                    +'{\\grp{\\btn{A}{$buttonValueA}{marg}}{\\frac{\\str{$labelNum1}}{\\str{$labelDen1}}}}'
                                    +'{\\grp{\\btn{B}{$buttonValueB}{marg}}{\\frac{\\str{$labelNum2}}{\\str{$labelDen2}}}}'
                                    +'{\\grp{\\btn{C}{$buttonValueC}{marg}}{\\frac{\\str{$labelNum3}}{\\str{$labelDen3}}}}'
                                    +'{\\grp{\\btn{D}{$buttonValueD}{marg}}{\\frac{\\str{$labelNum4}}{\\str{$labelDen4}}}}',
						controls: {
							"checkAnswer": true,
							"help": true
						}
					}]
                }]
            }
        },
        data = [
			{ problemNum: '1', problemDen: '5', button1a: '2', button1b: '4', button2a: '2', button2b: '3', button3a: '4', button3b: '5', button4a: '1', button4b: '5',  buttonValueA: 'F', buttonValueB: 'F', buttonValueC: 'F', buttonValueD: 'T', buttonLetter: 'D', answerFirst: '1', answerSecond: '5', template: 'main' },
			{ problem1: '7', problem2: '8', labelNum1: '1', labelDen1: '2', labelNum2: '2', labelDen2: '3', labelNum3: '7', labelDen3: '8', labelNum4: '8', labelDen4: '7',  buttonValueA: 'F', buttonValueB: 'F', buttonValueC: 'T', buttonValueD: 'F', buttonLetter: 'C', answerNum: '7', answerDen: '8', template: 'second' },
			{ problemNum: '10', problemDen: '18', button1a: '5', button1b: '9', button2a: '7', button2b: '14', button3a: '10', button3b: '18', button4a: '9', button4b: '18',  buttonValueA: 'T', buttonValueB: 'F', buttonValueC: 'F', buttonValueD: 'F', buttonLetter: 'A', answerFirst: '5', answerSecond: '9', template: 'main' },
			{ problem1: '4', problem2: '8', labelNum1: '2', labelDen1: '5', labelNum2: '2', labelDen2: '4', labelNum3: '4', labelDen3: '8', labelNum4: '1', labelDen4: '2',  buttonValueA: 'F', buttonValueB: 'F', buttonValueC: 'F', buttonValueD: 'T', buttonLetter: 'D', answerNum: '1', answerDen: '2', template: 'second' },
			{ problemNum: '5', problemDen: '10', button1a: '6', button1b: '17', button2a: '1', button2b: '2', button3a: '15', button3b: '17', button4a: '5', button4b: '10',  buttonValueA: 'F', buttonValueB: 'T', buttonValueC: 'F', buttonValueD: 'F', buttonLetter: 'B', answerFirst: '1', answerSecond: '2', template: 'main' },
			{ problem1: '5', problem2: '6', labelNum1: '2', labelDen1: '4', labelNum2: '5', labelDen2: '5', labelNum3: '5', labelDen3: '6', labelNum4: '5', labelDen4: '7',  buttonValueA: 'F', buttonValueB: 'F', buttonValueC: 'T', buttonValueD: 'F', buttonLetter: 'C', answerNum: '5', answerDen: '6', template: 'second' },
			{ problemNum: '7', problemDen: '16', button1a: '18', button1b: '34', button2a: '2', button2b: '9', button3a: '15', button3b: '17', button4a: '7', button4b: '16',  buttonValueA: 'F', buttonValueB: 'F', buttonValueC: 'F', buttonValueD: 'T', buttonLetter: 'D', answerFirst: '7', answerSecond: '16', template: 'main' },
			{ problem1: '4', problem2: '12', labelNum1: '1', labelDen1: '3', labelNum2: '1', labelDen2: '4', labelNum3: '2', labelDen3: '6', labelNum4: '1', labelDen4: '2',  buttonValueA: 'T', buttonValueB: 'F', buttonValueC: 'F', buttonValueD: 'F', buttonLetter: 'A', answerNum: '1', answerDen: '3', template: 'second' },
			{ problemNum: '4', problemDen: '7', button1a: '6', button1b: '8', button2a: '7', button2b: '16', button3a: '9', button3b: '10', button4a: '4', button4b: '7',  buttonValueA: 'F', buttonValueB: 'F', buttonValueC: 'F', buttonValueD: 'T', buttonLetter: 'D', answerFirst: '4', answerSecond: '7', template: 'main' },
			{ problem1: '6', problem2: '10', labelNum1: '3', labelDen1: '5', labelNum2: '5', labelDen2: '6', labelNum3: '2', labelDen3: '5', labelNum4: '3', labelDen4: '4',  buttonValueA: 'T', buttonValueB: 'F', buttonValueC: 'F', buttonValueD: 'F', buttonLetter: 'A', answerNum: '3', answerDen: '5', template: 'second' },
        ];

	return dataUtils.build(desc, template, data);
}]);