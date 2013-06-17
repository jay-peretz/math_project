/*global angular */

angular.module('mathSkills').service('data_b_1', function () {
    var ret = {
            title: 'B.1 The Meaning of Fractions',
   		    path: 'B.1-meaning-of-fractions',
            children: []
        },
        template = {
            main: {
                title: 'The Meaning of Fractions',
                children: [{
            title: 'Main Answer',
            children: [{
                problem: '\\rowgrp{\\str{What fraction of the figure is shaded?}}{\\fracbox{$n}{$d}}',
                answer: '\\frac{\\input{$n}}{\\input{$d}}',
                controls: {
                    "checkAnswer": true,
                    "help": '\\row{\\html{The answer is &nbsp;&nbsp;}}{\\frac{\\str{$n}}{\\str{$d}}}'
                          }
                }]
              }]
            }, 
			repeater: {
        title: 'The Meaning of Fractions',
        children: [{
            title: 'Main Answer',
            children: [{
                problem: '\\rowgrp{\\str{What fraction of the figure is shaded?}}{\\fracbox{$n}{$d}}',
                answer: '\\frac{\\input{$n}}{\\input{$d}}',
                controls: {
                    "checkAnswer": true,
                    "help": '\\row{\\html{The answer is &nbsp;&nbsp;}}{\\frac{\\str{$n}}{\\str{$d}}}'
                }
            }, {
                problem: '\\rowgrp{\\str{What fraction of the figure is NOT shaded?}}{\\fracbox{$n}{$d}}',
                answer: '\\frac{\\input{$r}}{\\input{$d}}',
                controls: {
                    "checkAnswer": true,
                    "help": '\\row{\\html{The answer is &nbsp;&nbsp;}}{\\frac{\\str{$r}}{\\str{$d}}}'
                }
               }]
            }]
        }
        },
        data = [
			{n:3,d:4,template:'main'},
			{n:1,d:4,r:3,template:'repeater'},
			{n:2,d:5,template:'main'},
			{n:5,d:6,r:1,template:'repeater'},
			{n:6,d:8,template:'main'},
			{n:2,d:3,template:'main'},
			{n:4,d:7,r:3,template:'repeater'},
			{n:3,d:9,template:'main'},
			{n:3,d:4,template:'main'},
			{n:2,d:8,r:6,template:'repeater'}
			
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