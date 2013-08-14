/*global angular */

angular.module('mathSkills').service('data_d_1', ['dataUtils', function (dataUtils) {
    var desc = {
			title: 'D.1 Reducing Fractions',
			path: 'D.1-reducing-fractions',
            children: []
        },
        template = {
            main: {
                title: 'Converting Units of Volume',
                children: [{
                    title: 'Main Answer',
                    children: [{
						problem: '\\row{\\str{Reduce \xA0}}{\\frac{\\str{$probNum}}{\\str{$probDen}}}{\\str{\xA0 to its lowest terms}}',
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
                        problem: '\\row{\\str{Reduce \xA0}}{\\frac{\\fracstr{$probNum}}{\\fracstr{$probDen}}}{\\str{\xA0 to its lowest terms }}',
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
            { probNum: '6', probDen: '8', answerNum: '3', answerDen: '4', template: 'main' },
			{ probNum: '2', probDen: '4', answerNum: '1', answerDen: '2', template: 'main' },
			{ probNum: '12', probDen: '36', answerNum: '1', answerDen: '3', template: 'main' },
			{ probNum: '4', probDen: '32', answerNum: '1', answerDen: '8', template: 'main' },
			{ probNum: '2', probDen: '3', answerNum: '2', answerDen: '3', template: 'main' },
			{ probNum: '8', probDen: '12', answerNum: '2', answerDen: '3', template: 'main' },
			{ probNum: '3', probDen: '9', answerNum: '1', answerDen: '3', template: 'main' },
			{ probNum: '3', probDen: '4', answerNum: '3', answerDen: '4', template: 'main' },
			{ probNum: '20', probDen: '80', answerNum: '1', answerDen: '4', template: 'main' },
			{ probNum: '12', probDen: '48', answerNum: '1', answerDen: '4', template: 'main' }
        ];

    return dataUtils.build(desc, template, data);
}]);