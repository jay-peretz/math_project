/*global angular */

angular.module('mathSkills').service('data_e_1', ['dataUtils', function (dataUtils) {
    var desc = {
            title: 'E.1 Multiplication of Fractions',
            path: 'E.1-multiplication-of-fractions',
            children: []
        },
        template = {
            two: {
                title: 'Multiplication of Fractions',
                children: [{
                    title: 'Main Answer',
                    children: [{
                        problem: '\\grp'
						+'{\\html{Find the product of &nbsp;}}'
						+'{\\frac{\\str{$n1}}{\\str{$d1}}}'
						+'{\\sign{&times;}}'
						+'{\\frac{\\str{$n2}}{\\str{$d2}}}',
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
                        problem: '\\grp'
						+'{\\html{Find the product of &nbsp;}}'
						+'{\\frac{\\str{$n1}}{\\str{$d1}}}'
						+'{\\sign{&times;}}'
						+'{\\frac{\\str{$n2}}{\\str{$d2}}}',
                        answer: '\\canfrac{[$n1,$d1]}{[$n2,$d2]}{[$na,$da]}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }]
                }]
            },
            three: {
                title: 'Multiplying Fractions',
                children: [{
                    title: 'Main Answer',
                    children: [{
                        problem: '\\rowgrp'
						+'{\\html{Find the product of:}}'
						+'{\\html{&nbsp;}}'
						+'{\\grp{\\frac{\\str{$n1}}{\\str{$d1}}}{\\sign{&times;}}{\\frac{\\str{$n2}}{\\str{$d2}}}{\\sign{&times;}}{\\frac{\\str{$n3}}{\\str{$d3}}}}',
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
                        problem: '\\rowgrp'
						+'{\\html{Find the product of:}}'
						+'{\\html{&nbsp;}}'
						+'{\\grp{\\frac{\\str{$n1}}{\\str{$d1}}}{\\sign{&times;}}{\\frac{\\str{$n2}}{\\str{$d2}}}{\\sign{&times;}}{\\frac{\\str{$n3}}{\\str{$d3}}}}',
                        answer: '\\canfrac{[$n1,$d1]}{[$n2,$d2]}{[$n3,$d3]}{[$na,$da]}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }]
                }]
            }
        },
        data = [
            { n1: 7, d1: 5, n2: 3, d2: 5, na: 21, da: 25, template: 'two' },
            { n1: 3, d1: 10, n2: 5, d2: 7, na: 3, da: 14, template: 'two' },
            { n1: 5, d1: 8, n2: 8, d2: 15, na: 1, da: 3, template: 'two' },
            { n1: 8, d1: 9, n2: 3, d2: 4, na: 2, da: 3, template: 'two' },
            { n1: 9, d1: 20, n2: 14, d2: 3, na: 21, da: 10, template: 'two' },
            { n1: 15, d1: 6, n2: 20, d2: 35, na: 10, da: 7, template: 'two' },
            { n1: 3, d1: 17, n2: 2, d2: 5, na: 6, da: 85, template: 'two' },
            { n1: 3, d1: 5, n2: 10, d2: 18, n3: 15, d3: 20, na: 1, da: 4, template: 'three' },
            { n1: 12, d1: 24, n2: 36, d2: 6, n3: 18, d3: 32, na: 27, da: 16, template: 'three' },
            { n1: 10, d1: 3, n2: 6, d2: 25, n3: 1, d3: 9, na: 4, da: 45, template: 'three' }
        ];
    
    return dataUtils.build(desc, template, data);
}]);
