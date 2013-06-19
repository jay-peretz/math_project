

/*global angular */

angular.module('mathSkills').service('data16_1', function () {
    var ret = {
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
						problem: '\\col{\\row{\\str{Choose the reduced ratio with the same meaning as: }}}{\\row{\\str{\xA0}}}{\\row{\\frac{\\str{$problemNum}}{\\str{$problemDen}}}}',
						answer: '\\css{\\butgrp{\\col{\\row{\\str{\xA0}}}{\\row{\\but{A}{$buttonValueA}}{\\grp{\\str{\xA0 \xA0 $button1a to $button1b}}}}{\\row{\\but{B}{$buttonValueB}}{\\grp{\\str{\xA0 \xA0 $button2a to $button2b}}}}{\\row{\\but{C}{$buttonValueC}}{\\grp{\\str{\xA0 \xA0 $button3a to $button3b}}}}{\\row{\\but{D}{$buttonValueD}}{\\grp{\\str{\xA0 \xA0 $button4a to $button4b}}}}}}{ chart-buttons-margin}}',
						controls: {
							"checkAnswer": true,
							"help": '\\rowgrp{\\css{\\row{\\str{Answer: \xA0 }}{\\str{ $buttonLetter \xA0 }}}{label_like}}{\\row{\\str{\xA0}}}{\\css{\\row{\\str{$answerFirst to $answerSecond}}}{help-answer-text}}}'
						}
					}]
                }]
            },
			second: {
                title: 'Writing a Ratio of Two Numbers',
                children: [{
                    title: 'Main Answer',
                    children: [{
						problem: '\\col{\\row{\\str{Choose the reduced ratio with the same meaning as: }}}{\\row{\\str{\xA0}}}{\\row{\\str{ $problem1 to $problem2 }}',
						answer: '\\css{\\butgrp{\\col{\\row{\\str{\xA0}}}{\\row{\\but{A}{$buttonValueA}}{\\frac{\\str{$labelNum1}}{\\str{$labelDen1}}}}{\\row{\\but{B}{$buttonValueB}}{\\frac{\\str{$labelNum2}}{\\str{$labelDen2}}}}{\\row{\\but{C}{$buttonValueC}}{\\frac{\\str{$labelNum3}}{\\str{$labelDen3}}}}{\\row{\\but{D}{$buttonValueD}}{\\frac{\\str{$labelNum4}}{\\str{$labelDen4}}}}}}{ chart-buttons-margin}}',
						controls: {
							"checkAnswer": true,
							"help": '\\rowgrp{\\css{\\row{\\str{Answer: \xA0 }}{\\str{ $buttonLetter \xA0 }}}{label_like}}{\\row{\\str{\xA0}}}{\\css{\\row{\\frac{\\str{$answerNum}}{\\str{$answerDen}}}}{help-answer-text}}}'
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
        ],
        interpolate = function (obj, data) {
            var string = JSON.stringify(obj);
            for (var symbol in data) {
                if (data.hasOwnProperty(symbol)) {
                    string = string.replace(new RegExp('(\\$)?\\$' + symbol, 'g'), function ($0, $1) { return $1?$0 : data[symbol]; }); //console.log(string); 
                }
            }
            var ret = JSON.parse(string);
            ret.data = angular.copy(data);
            return ret;
        };

    ret.children = data.map(function (problem) {
        return interpolate(template[problem.template], problem);
    });
    
    return ret;
});
