/*global angular */

angular.module('mathSkills').service('data_e_1', ['dataUtils', function (dataUtils) {
    var desc = {
            title: 'E.1 Multiplication of Fractions',
            path: 'E.1-multiplication-of-fractions',
            children: []
        },
        template = {
            main: {
        title: 'Multiplying Fractions',
        children: [{
            title: 'Main Answer',
            children: [{
                problem: '\\row{\\html{Solve &nbsp;}}{\\frac{\\str{$n1}}{\\str{$d1}}}{\\sign{&times;}}{\\frac{\\str{$n2}}{\\str{$d2}}}',
                answer: '\\frac{\\input{$nr}}{\\input{$dr}}',
                controls: {
                    "checkAnswer": true,
                    "help": false,
                    "workbook": true
                }
            }]
        }, {
            title: 'Workbook',
            children: [{
                problem: '\\str{Multiply the fractions together.}',
                answer: '\\multiplyfracs{\\frac{\\str{$n1}}{\\str{$d1}}}{\\frac{\\str{$n2}}{\\str{$d2}}}',
                controls: {
                    "checkAnswer": true,
                    "help": '\\row{\\frac{\\str{$n1}}{\\str{$d1}}}{\\sign{&times;}}{\\frac{\\str{$n2}}{\\str{$d2}}}{\\sign{&equals;}}{\\frac{\\str{$na}}{\\str{$da}}}'
                }
            }, {
                problem: '\\str{Reduce the fraction to its lowest terms.}',
                answer: '\\prev{feedbackData.getPrevious()}{\\reducefrac{\\frac{\\str{$na}}{\\str{$da}}}',
                controls: {
                    "checkAnswer": true,
                    "help": '\\row{\\frac{\\str{$na}}{\\str{$da}}}{\\sign{&equals;}}{\\frac{\\str{$nr}}{\\str{$dr}}}'
                }
            }]
        }]
    } ,
	reduced: {
        title: 'Multiplying Fractions',
        children: [{
            title: 'Main Answer',
            children: [{
                problem: '\\row{\\html{Solve &nbsp;}}{\\frac{\\str{$n1}}{\\str{$d1}}}{\\sign{&times;}}{\\frac{\\str{$n2}}{\\str{$d2}}}',
                answer: '\\frac{\\input{$na}}{\\input{$da}}',
                controls: {
                    "checkAnswer": true,
                    "help": false,
                    "workbook": true
                }
            }]
        }, {
            title: 'Workbook',
            children: [{
                problem: '\\str{Multiply the fractions together.}',
                answer: '\\multiplyfracs{\\frac{\\str{$n1}}{\\str{$d1}}}{\\frac{\\str{$n2}}{\\str{$d2}}}',
                controls: {
                    "checkAnswer": true,
                    "help": '\\row{\\frac{\\str{$n1}}{\\str{$d1}}}{\\sign{&times;}}{\\frac{\\str{$n2}}{\\str{$d2}}}{\\sign{&equals;}}{\\frac{\\str{$na}}{\\str{$da}}}'
                }
            }, {
                problem: '\\str{Reduce the fraction to its lowest terms.}',
                answer: '\\prev{feedbackData.getPrevious()}{\\reducefrac{\\frac{\\str{$na}}{\\str{$da}}}',
                controls: {
                    "checkAnswer": true,
                    "help": '\\row{\\frac{\\str{$na}}{\\str{$da}}}{\\str{ is fully simplified.}}'
                }
            }]
        }]
    }
        },
        data = [
			{n1:1,d1:4,n2:2,d2:6,na:2,da:24,nr:1,dr:12,template:'main'},
			{n1:2,d1:4,n2:3,d2:8,na:3,da:16,template:'reduced'},
			{n1:3,d1:5,n2:2,d2:10,na:6,da:50,nr:3,dr:25,template:'main'},
			{n1:3,d1:4,n2:5,d2:8,na:15,da:32,template:'reduced'},
			{n1:2,d1:10,n2:3,d2:6,na:6,da:60,nr:1,dr:10,template:'main'},
			{n1:5,d1:6,n2:1,d2:2,na:5,da:12,template:'reduced'},
			{n1:1,d1:4,n2:6,d2:8,na:6,da:32,nr:3,dr:16,template:'main'},
			{n1:1,d1:4,n2:1,d2:8,na:1,da:32,template:'reduced'},
			{n1:3,d1:4,n2:3,d2:6,na:9,da:24,nr:3,dr:8,template:'main'},
			{n1:3,d1:5,n2:1,d2:2,na:3,da:10,template:'reduced'}			
        ];
    return dataUtils.build(desc, template, data);
}]);
