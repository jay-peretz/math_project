/*global angular */

angular.module('mathSkills').service('data7_3', ['dataUtils', function (dataUtils) {
    var desc = {
            title: '7.3 Dividing Fractions',
            path: '7.3-dividing-fractions',
            children: []
        },
        template = {
            two: {
                title: 'Dividing Fractions',
                children: [{
                    title: 'Main Answer',
                    children: [{
                        problem: '\\grp{\\html{Solve &nbsp;}}{\\frac{\\fracstr{$n1}}{\\fracstr{$d1}}}{\\sign{&divide;}}{\\frac{\\fracstr{$n2}}{\\fracstr{$d2}}}',
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
						+'{\\grp{\\html{Solve &nbsp;}}{\\frac{\\fracstr{$n1}}{\\fracstr{$d1}}}{\\sign{&divide;}}{\\frac{\\fracstr{$n2}}{\\fracstr{$d2}}}}',
                        answer: '\\rowgrp'
						+'{\\ins{Rewrite the problem as the product of fractions:}}'
						+'{\\html{&nbsp;}}'
						+'{\\grp{\\frac{\\input{$n1}}{\\input{$d1}}}{\\sign{&times;}}{\\frac{\\input{$d2}}{\\input{$n2}}}}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }, {
                       problem: '\\rowgrp'
						+'{\\grp{\\html{Solve &nbsp;}}{\\frac{\\fracstr{$n1}}{\\fracstr{$d1}}}{\\sign{&divide;}}{\\frac{\\fracstr{$n2}}{\\fracstr{$d2}}}}',
                         answer: '\\css'
									+'{\\rowgrp'
										+'{\\html{Rewrite the problem as the product of fractions:}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp{\\frac{\\fracstr{$n1}}{\\fracstr{$d1}}}{\\sign{&times;}}{\\frac{\\fracstr{$d2}}{\\fracstr{$n2}}}}'
										+'{\\canfrac{[$n1,$d1]}{[$d2,$n2]}{[$na,$da]}}'
									+'}{well}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }]
                }]
            },
            three: {
                title: 'Dividing Fractions',
                children: [{
                    title: 'Main Answer',
                    children: [{
                        problem: '\\row{\\html{Solve &nbsp;}}{\\frac{\\fracstr{$n1}}{\\fracstr{$d1}}}{\\sign{&divide;}}{\\frac{\\fracstr{$n2}}{\\fracstr{$d2}}}{\\sign{&divide;}}{\\frac{\\fracstr{$n3}}{\\fracstr{$d3}}}',
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
                        problem: '\\row{\\html{Solve &nbsp;}}{\\frac{\\fracstr{$n1}}{\\fracstr{$d1}}}{\\sign{&divide;}}{\\frac{\\fracstr{$n2}}{\\fracstr{$d2}}}{\\sign{&divide;}}{\\frac{\\fracstr{$n3}}{\\fracstr{$d3}}}',
                        answer: '\\rowgrp'
						+'{\\ins{Rewrite the problem as the product of fractions:}}'
						+'{\\html{&nbsp;}}'
						+'{\\grp{\\frac{\\input{$n1}}{\\input{$d1}}}{\\sign{&times;}}{\\frac{\\input{$d2}}{\\input{$n2}}}{\\sign{&times;}}{\\frac{\\input{$d3}}{\\input{$n3}}}}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }, {
                        problem: '\\row{\\html{Solve &nbsp;}}{\\frac{\\fracstr{$n1}}{\\fracstr{$d1}}}{\\sign{&divide;}}{\\frac{\\fracstr{$n2}}{\\fracstr{$d2}}}{\\sign{&divide;}}{\\frac{\\fracstr{$n3}}{\\fracstr{$d3}}}',
                        answer: '\\css'
									+'{\\rowgrp'
										+'{\\html{Rewrite the problem as the product of fractions:}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp{\\frac{\\fracstr{$n1}}{\\fracstr{$d1}}}{\\sign{&times;}}{\\frac{\\fracstr{$d2}}{\\fracstr{$n2}}}{\\sign{&times;}}{\\frac{\\fracstr{$d3}}{\\fracstr{$n3}}}}'
										+'{\\canfrac{[$n1,$d1]}{[$d2,$n2]}{[$d3,$n3]}{[$na,$da]}}'
									+'}{well}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }]
                }]
            }
        },
        data = [
            { n1: 1, d1: 2, n2: 3, d2: 2, na: 1, da: 3, template: 'two' },
            { n1: 5, d1: 10, n2: 5, d2: 2, na: 1, da: 5, template: 'two' },
            { n1: 7, d1: 6, n2: 7, d2: 3, na: 1, da: 2, template: 'two' },
            { n1: 2, d1: 9, n2: 5, d2: 3, na: 2, da: 15, template: 'two' },
            { n1: 10, d1: 3, n2: 12, d2: 11, na: 55, da: 18, template: 'two' },
            { n1: 17, d1: 34, n2: 12, d2: 14, na: 7, da: 12, template: 'two' },
            { n1: 18, d1: 27, n2: 23, d2: 21, na: 14, da: 23, template: 'two' },
            { n1: 2, d1: 4, n2: 12, d2: 8, n3: 24, d3: 18, na: 1, da: 4, template: 'three' },
            { n1: 27, d1: 14, n2: 28, d2: 21, n3: 9, d3: 12, na: 27, da: 14, template: 'three' },
            { n1: 5, d1: 10, n2: 27, d2: 32, n3: 8, d3: 10, na: 20, da: 27, template: 'three' }
        ];

    return dataUtils.build(desc, template, data);
}]);
