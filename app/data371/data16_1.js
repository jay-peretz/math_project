

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
						answer: '\\css{\\butgrp{\\col{\\row{\\str{\xA0}}}{\\row{\\but{A}{F}}{\\str{\xA0 \xA0 $button1a to $button1b}}}{\\row{\\but{B}{F}}{\\str{\xA0 \xA0 $button2a to $button2b}}}{\\row{\\but{C}{F}}{\\str{\xA0 \xA0 $button3a to $button3b}}}{\\row{\\but{D}{T}}{\\str{\xA0 \xA0 $button4a to $button4b}}}}}{ chart-buttons-margin}}',
						controls: {
							"checkAnswer": true,
							"help": '\\str{D: $problemNum to $problemDen}'
						}
					}]
                }]
            },
			second: {
                title: 'Decimal & Fraction Form of Percents',
                children: [{
                    title: 'Main Answer',
                    children: [{
						problem: '\\col{\\row{\\str{Choose the reduced ratio with the same meaning as: }}}{\\row{\\str{\xA0}}}{\\row{\\str{ $problem1 to $problem2 }}',
						answer: '\\css{\\butgrp{\\col{\\row{\\str{\xA0}}}{\\row{\\but{A}{F}}{\\frac{\\str{$labelNum1}}{\\str{$labelDen1}}}}{\\row{\\but{B}{F}}{\\frac{\\str{$labelNum2}}{\\str{$labelDen2}}}}{\\row{\\but{C}{F}}{\\frac{\\str{$labelNum3}}{\\str{$labelDen3}}}}{\\row{\\but{D}{T}}{\\frac{\\str{$labelNum4}}{\\str{$labelDen4}}}}}}{ chart-buttons-margin}}',
						controls: {
							"checkAnswer": true,
							"help": '\\str{D: $problemNum to $problemDen}'
						}
					}]
                }]
            }
        },
        data = [
            { problemNum: '1', problemDen: '5', button1a: '2', button1b: '4', button2a: '2', button2b: '3', button3a: '4', button3b: '5', button4a: '1', button4b: '5', template: 'main' },
			{ problem1: '7', problem2: '8', labelNum1: '2', labelDen1: '4', labelNum2: '2', labelDen2: '4', labelNum3: '2', labelDen3: '4', labelNum4: '2', labelDen4: '4', template: 'main' },
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

