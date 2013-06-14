/*global angular */

angular.module('mathSkills').service('data7_1', ['dataUtils', function (dataUtils) {
    var desc = {
            title: '7.1 Multiplying Fractions',
            path: '7.1-multiplying-fractions',
            children: []
        },
        template = {
            two: {
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
                        problem: '\\col'+
                                '{\\str{Reduce the fractions by canceling.}}' +
                                '{\\row{\\frac{\\str{$n1}}{\\str{$d1}}}{\\sign{&times;}}{\\frac{\\str{$n2}}{\\str{$d2}}}}',
                        answer: '\\cancelfracs{[$n1,$d1]}{[$n2,$d2]}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }, {
                        problem: '\\str{Multiply the fractions together.}',
                        answer: '\\multiplyfracs{\\frac{\\str{$$n1}}{\\str{$$d1}}}{\\frac{\\str{$$n2}}{\\str{$$d2}}}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }, {
                        problem: '\\str{Reduce the fraction to its lowest terms.}',
                        answer: '\\reducefrac{\\frac{\\str{$$mfn}}{\\str{$$mfd}}',
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
                        problem: '\\row{\\html{Solve &nbsp;}}{\\frac{\\str{$n1}}{\\str{$d1}}}{\\sign{&times;}}{\\frac{\\str{$n2}}{\\str{$d2}}}{\\sign{&times;}}{\\frac{\\str{$n3}}{\\str{$d3}}}',
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
                        problem: '\\col'+
                                '{\\str{Reduce the fractions by canceling.}}' +
                                '{\\row{\\frac{\\str{$n1}}{\\str{$d1}}}{\\sign{&times;}}{\\frac{\\str{$n2}}{\\str{$d2}}}{\\sign{&times;}}{\\frac{\\str{$n3}}{\\str{$d3}}}}',
                        answer: '\\cancelfracs{[$n1,$d1]}{[$n2,$d2]}{[$n3,$d3]}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }, {
                        problem: '\\str{Multiply the fractions together.}',
                        answer: '\\multiplyfracs{\\frac{\\str{$$n1}}{\\str{$$d1}}}{\\frac{\\str{$$n2}}{\\str{$$d2}}}{\\frac{\\str{$$n3}}{\\str{$$d3}}}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }, {
                        problem: '\\str{Reduce the fraction to its lowest terms.}',
                        answer: '\\reducefrac{\\frac{\\str{$$mfn}}{\\str{$$mfd}}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }]
                }]
            }
        },
        data = [
            { n1: 1, d1: 2, n2: 2, d2: 3, na: 1, da: 3, template: 'two' },
            { n1: 1, d1: 4, n2: 2, d2: 6, na: 1, da: 12, template: 'two' },
            { n1: 6, d1: 8, n2: 10, d2: 9, na: 5, da: 6, template: 'two' },
            { n1: 3, d1: 6, n2: 6, d2: 2, na: 3, da: 2, template: 'two' },
            { n1: 42, d1: 8, n2: 12, d2: 14, na: 9, da: 2, template: 'two' },
            { n1: 15, d1: 6, n2: 20, d2: 35, na: 10, da: 7, template: 'two' },
            { n1: 63, d1: 72, n2: 64, d2: 99, na: 56, da: 99, template: 'two' },
            { n1: 3, d1: 5, n2: 10, d2: 18, n3: 15, d3: 20, na: 1, da: 4, template: 'three' },
            { n1: 12, d1: 24, n2: 36, d2: 6, n3: 18, d3: 32, na: 27, da: 16, template: 'three' },
            { n1: 65, d1: 77, n2: 55, d2: 104, n3: 84, d3: 132, na: 25, da: 88, template: 'three' }
        ];
    
    return dataUtils.build(desc, template, data);
}]);
