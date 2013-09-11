/*global angular */

angular.module('mathSkills').service('data6_4', ['dataUtils', function (dataUtils) {
    var desc = {
			title: '6.4 Reduce Fractions',
			path: '6.4-reduce-fractions',
            children: []
        },
        template = {
            main: {
                title: 'Converting Units of Volume',
                children: [{
                    title: 'Main Answer',
                    children: [{
						problem: '\\grp{\\str{Reduce \xA0}}{\\frac{\\str{$probNum}}{\\str{$probDen}}}{\\str{\xA0 to its lowest terms}}',
						answer: '\\frac{\\input{$answerNum}}{\\input{$answerDen}}',
						controls: {
							"checkAnswer": true,
							"help": false,
							"workbook": true
						}
                    }]
                }, {
                    title: 'Workbook',
                    children: [{
                        problem: '\\grp{\\str{Reduce \xA0}}{\\frac{\\fracstr{$probNum}}{\\fracstr{$probDen}}}{\\str{\xA0 to its lowest terms }}',
						answer: '\\reducefrac{\\frac{\\fracstr{$probNum}}{\\fracstr{$probDen}}}',
						controls: {
							"checkAnswer": true,
							"help": false
						}
                    }]
                }]
            }
        },
        data = [
            { probNum: '3', probDen: '6', answerNum: '1', answerDen: '2', template: 'main' },
			{ probNum: '9', probDen: '15', answerNum: '3', answerDen: '5', template: 'main' },
			{ probNum: '24', probDen: '28', answerNum: '6', answerDen: '7', template: 'main' },
			{ probNum: '8', probDen: '12', answerNum: '2', answerDen: '3', template: 'main' },
			{ probNum: '4', probDen: '13', answerNum: '4', answerDen: '13', template: 'main' },			
			{ probNum: '21', probDen: '14', answerNum: '3', answerDen: '2', template: 'main' },
			{ probNum: '30', probDen: '12', answerNum: '5', answerDen: '2', template: 'main' },			
			{ probNum: '7', probDen: '14', answerNum: '1', answerDen: '2', template: 'main' },
			{ probNum: '10', probDen: '12', answerNum: '5', answerDen: '6', template: 'main' },
			{ probNum: '21', probDen: '35', answerNum: '3', answerDen: '5', template: 'main' },
			{ probNum: '6', probDen: '8', answerNum: '3', answerDen: '4', template: 'main' },
			{ probNum: '12', probDen: '48', answerNum: '1', answerDen: '4', template: 'main' }
        ];

    return dataUtils.build(desc, template, data);
}]);

