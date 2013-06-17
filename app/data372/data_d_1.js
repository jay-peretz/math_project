/*global angular */

angular.module('mathSkills').service('data_d_1', function () {
    var ret = {
              title: 'D.1 Reducing Fractions',
              path: 'D.1-reducing-fractions',
              children: []
        },
        template = {
            main: {
        title: 'Reduce Fractions',
        children: [{
            title: 'Main Answer',
            children: [{
                problem: '\\row{\\str{Reduce \xA0}}{\\frac{\\str{$n}}{\\str{$d}}}{\\str{\xA0 to its lowest terms}}',
                answer: '\\frac{\\input{$rn}}{\\input{$rd}}',
                controls: {
                    "checkAnswer": true,
                    "help": false,
                    "workbook": true
                }
            }]
        }, {
            title: 'Workbook',
            children: [{
                problem: '\\row{\\str{Reduce \xA0}}{\\frac{\\fracstr{$n}}{\\fracstr{$d}}}{\\str{\xA0 to its lowest terms }}',
                answer: '\\reducefrac{\\frac{\\fracstr{$n}}{\\fracstr{$d}}}',
                controls: {
                    "checkAnswer": true,
                    "help": '\\row{\\frac{\\str{$n}}{\\str{$d}}}{\\str{\xA0 can be reduced to }}{\\frac{\\str{$rn}}{\\str{$rd}}}'
                 }
              }]
            }]
          },
		  reduced: {
        title: 'Reduce Fractions',
        children: [{
            title: 'Main Answer',
            children: [{
                problem: '\\row{\\str{Reduce \xA0}}{\\frac{\\str{$n}}{\\str{$d}}}{\\str{\xA0 to its lowest terms}}',
                answer: '\\frac{\\input{$n}}{\\input{$d}}',
                controls: {
                    "checkAnswer": true,
                    "help": false,
                    "workbook": true
                }
            }]
        }, {
            title: 'Workbook',
            children: [{
                problem: '\\row{\\str{Reduce \xA0}}{\\frac{\\fracstr{$n}}{\\fracstr{$d}}}{\\str{\xA0 to its lowest terms }}',
                answer: '\\reducefrac{\\frac{\\fracstr{$n}}{\\fracstr{$d}}}',
                controls: {
                    "checkAnswer": true,
                    "help": '\\row{\\frac{\\str{$n}}{\\str{13}}}{\\str{\xA0 cannot be reduced. }}'
                }
            }]
        }]
    }
        },
        data = [
			{n:6,d:8,rn:3,rd:4,template:'main'},
			{n:2,d:4,rn:1,rd:2,template:'main'},
			{n:12,d:36,rn:1,rd:3,template:'main'},
			{n:14,d:36,rn:7,rd:18,template:'main'},
			{n:4,d:32,rn:1,rd:8,template:'main'},
			{n:2,d:3,template:'reduced'},
			{n:8,d:12,rn:2,rd:3,template:'main'},
			{n:3,d:9,rn:1,rd:3,template:'main'},
			{n:3,d:4,template:'reduced'},
			{n:20,d:80,rn:1,rd:4,template:'main'}
			
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