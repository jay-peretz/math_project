/*global angular */

angular.module('mathSkills').service('data2A_1', ['dataUtils', function (dataUtils) {
    var desc = {
			title: '2A.1 Translating Words to Math',
			path: '2A.1-translating-words-to-math',
            children: []
        },
        template = {
			main: {
                title: 'Translating Words to Math',
				children: [{
					title: 'Main Answer',
					children: [{
						problem: '\\html{'+
                                        'Translate the following words into a math expression or an inequality statement:'+
                                        '<br><br><span class=blue-text>$problemStatement</span>'+
                                    '}',
						answer: '\\rowgrp'+
                                    '{\\grp{\\btn{A}{$buttonValueA}{marg}}{\\str{\xA0$buttonLabelA}}}'+
                                    '{\\grp{\\btn{B}{$buttonValueB}{marg}}{\\str{\xA0$buttonLabelB}}}'+
                                    '{\\grp{\\btn{C}{$buttonValueC}{marg}}{\\str{\xA0$buttonLabelC}}}'+
                                    '{\\grp{\\btn{D}{$buttonValueD}{marg}}{\\str{\xA0$buttonLabelD}}}',
						controls: {
							"checkAnswer": true,
						    "help": true
                        }
					}]
                }]
            }
        },
        data = [
			{ problemStatement: '74 is greater than 26', buttonValueA: 'T', buttonLabelA: '74 > 26', buttonValueB: 'F', buttonLabelB: '26 < 74', buttonValueC: 'F', buttonLabelC: '74 - 26', buttonValueD: 'F', buttonLabelD: '74 + 26', answerLabel: '74 > 26', buttonLetter: 'A', template: 'main' },
			{ problemStatement: '9 is less than 23', buttonValueA: 'F', buttonLabelA: '9 - 23', buttonValueB: 'T', buttonLabelB: '9 < 23', buttonValueC: 'F', buttonLabelC: '9 + 23', buttonValueD: 'F', buttonLabelD: '23 > 9', answerLabel: '9 < 23', buttonLetter: 'B',  template: 'main' },
			{ problemStatement: '5 is more than 1', buttonValueA: 'F', buttonLabelA: '1 < 5', buttonValueB: 'T', buttonLabelB: '5 > 1', buttonValueC: 'F', buttonLabelC: '1 + 5', buttonValueD: 'F', buttonLabelD: '5 - 1', answerLabel: '5 > 1', buttonLetter: 'B', template: 'main' },			
			{ problemStatement: '82 is how much less than 98?', buttonValueA: 'F', buttonLabelA: '82 + 98', buttonValueB: 'F', buttonLabelB: '98 > 82', buttonValueC: 'T', buttonLabelC: '98 - 82', buttonValueD: 'F', buttonLabelD: '82 < 98', answerLabel: '98 - 82', buttonLetter: 'C',  template: 'main' },			
			{ problemStatement: '91 is more than 66', buttonValueA: 'F', buttonLabelA: '66 + 91', buttonValueB: 'F', buttonLabelB: '66 < 91', buttonValueC: 'F', buttonLabelC: '91 - 66', buttonValueD: 'T', buttonLabelD: '91 > 66', answerLabel: '91 > 66', buttonLetter: 'D', template: 'main' },
			{ problemStatement: '13 is how much more than 12?', buttonValueA: 'F', buttonLabelA: '13 > 12', buttonValueB: 'F', buttonLabelB: '12 < 13', buttonValueC: 'F', buttonLabelC: '12 + 13', buttonValueD: 'T', buttonLabelD: '13 - 12', answerLabel: '13 - 12', buttonLetter: 'D',  template: 'main' },
			{ problemStatement: '6 less than 15', buttonValueA: 'F', buttonLabelA: '6 < 15', buttonValueB: 'T', buttonLabelB: '15 - 6', buttonValueC: 'F', buttonLabelC: '15 > 6', buttonValueD: 'F', buttonLabelD: '6 - 15', answerLabel: '15 - 6', buttonLetter: 'B', template: 'main' },
			{ problemStatement: '45 is greater than 1', buttonValueA: 'T', buttonLabelA: '45 > 1', buttonValueB: 'F', buttonLabelB: '1 < 45', buttonValueC: 'F', buttonLabelC: '45 - 1', buttonValueD: 'F', buttonLabelD: '1 + 45', answerLabel: '45 > 1', buttonLetter: 'A',  template: 'main' },			
			{ problemStatement: '28 is how much less than 47?', buttonValueA: 'F', buttonLabelA: '28 < 47', buttonValueB: 'F', buttonLabelB: '47 > 28', buttonValueC: 'F', buttonLabelC: '28 + 47', buttonValueD: 'T', buttonLabelD: '47 - 28', answerLabel: '47 - 28', buttonLetter: 'D', template: 'main' },			
			{ problemStatement: '6 is less than 73', buttonValueA: 'F', buttonLabelA: '6 + 73', buttonValueB: 'F', buttonLabelB: '73 > 6', buttonValueC: 'T', buttonLabelC: '6 < 73', buttonValueD: 'F', buttonLabelD: '73 - 6', answerLabel: '6 < 73', buttonLetter: 'C',  template: 'main' },
			{ problemStatement: '10 more than 4', buttonValueA: 'T', buttonLabelA: '10 + 4', buttonValueB: 'F', buttonLabelB: '10 > 4', buttonValueC: 'F', buttonLabelC: '10 < 4', buttonValueD: 'F', buttonLabelD: '10 - 4', answerLabel: '10 + 4', buttonLetter: 'A',  template: 'main' },
			{ problemStatement: 'the sum of 8 and 6', buttonValueA: 'F', buttonLabelA: '8 > 6', buttonValueB: 'F', buttonLabelB: '8 < 6', buttonValueC: 'F', buttonLabelC: '8 - 6', buttonValueD: 'T', buttonLabelD: '8 + 6', answerLabel: '8 + 6', buttonLetter: 'D',  template: 'main' },
			{ problemStatement: 'the difference of 11 and 7', buttonValueA: 'F', buttonLabelA: '11 + 7', buttonValueB: 'F', buttonLabelB: '11 > 7', buttonValueC: 'T', buttonLabelC: '11 - 7', buttonValueD: 'F', buttonLabelD: '11 < 7', answerLabel: '11 - 7', buttonLetter: 'C',  template: 'main' },	
			{ problemStatement: '4 more than 2', buttonValueA: 'F', buttonLabelA: '4 > 2', buttonValueB: 'F', buttonLabelB: '4 < 2', buttonValueC: 'F', buttonLabelC: '4 - 2', buttonValueD: 'T', buttonLabelD: '4 + 2', answerLabel: '4 + 2', buttonLetter: 'D', template: 'main' },
			{ problemStatement: 'x more than y', buttonValueA: 'F', buttonLabelA: 'x < y', buttonValueB: 'F', buttonLabelB: 'x > y', buttonValueC: 'T', buttonLabelC: 'x + y', buttonValueD: 'F', buttonLabelD: 'x - y', answerLabel: 'x + y', buttonLetter: 'C', template: 'main' },
        ];

	return dataUtils.build(desc, template, data);
}]);




