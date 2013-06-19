/*global angular */

angular.module('mathSkills').service('data_e_2', ['dataUtils', function (dataUtils) {
    var desc = {
            title: 'E.2 Multiplication of  Mixed Numbers',
            path: 'E.s-multiplication-of-mixed-numbers',
            children: []
        },
        template = {
            two: {
                title: 'Multiplication of Mixed Numbers',
                children: [{
                    title: 'Main Answer',
                    children: [{
                        problem: '\\row{\\html{Solve &nbsp;}}{\\mixed{\\fracstr{$m1}}{\\frac{\\fracstr{$n1}}{\\fracstr{$d1}}}}{\\sign{&times;}}{\\mixed{\\fracstr{$m2}}{\\frac{\\fracstr{$n2}}{\\fracstr{$d2}}}}',
                        answer: '\\mixed{\\input{$ma}}{\\frac{\\input{$na}}{\\input{$da}}}',
                        controls: {
                            "checkAnswer": true,
                            "help": false,
                            "workbook": true
                        }
                    }]
                }, {
                    title: 'Workbook',
                    children: [{
                        problem: '\\rowgrp{\\row{\\str{Change the mixed numbers into improper fractions.}}}{\\row{\\str{\xA0}}}{\\row{\\mixed{\\fracstr{$m1}}{\\frac{\\fracstr{$n1}}{\\fracstr{$d1}}}}{\\sign{&times;}}{\\mixed{\\fracstr{$m2}}{\\frac{\\fracstr{$n2}}{\\fracstr{$d2}}}}',
                        answer: '\\grp{\\frac{\\input{$un1}}{\\input{$d1}}}{\\sign{&times;}}{\\frac{\\input{$un2}}{\\input{$d2}}}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }, {
                        problem: '\\col'+
                                '{\\str{Reduce the fractions by canceling.}}' +
                                '{\\row{\\frac{\\str{$un1}}{\\str{$d1}}}{\\sign{&times;}}{\\frac{\\str{$un2}}{\\str{$d2}}}}',
                        answer: '\\cancelfracs{[$un1,$d1]}{[$un2,$d2]}',
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
                        problem: '\\rowgrp{\\row{\\str{Write the fraction as a mixed number.}}}{\\row{\\str{\xA0}}}{\\row{\\frac{\\str{$$mfn}}{\\str{$$mfd}}}',
                        answer: '\\mixed{\\input{$ma}}{\\frac{\\input{$na}}{\\input{$da}}}',
                        controls: {
                            "checkAnswer": true,
                            "help": '\\rowgrp{\\row{\\str{Divide the numerator by the denominator, then make the quotient the mixed number whole and the remainder the mixed number numerator. \xA0}}}{\\row{\\str{\xA0}}}{\\row{\\frac{\\fracstr{$$mfn}}{\\fracstr{$$mfd}}}{\\row{\\str{\xA0 = \xA0}}}{\\row{\\mixed{\\fracstr{$ma}}{\\frac{\\fracstr{$na}}{\\fracstr{$da}}}}{\\row{css{\\str{answer:  \xA0}}{label_like margin-left-small}}{css{\\mixed{\\fracstr{$ma}}{\\frac{\\fracstr{$na}}{\\fracstr{$da}}}}{label_like}}}}'
                        }
                    }]
                }]
            }
        },
        data = [
            { m1: 1, n1: 2, d1: 3, un1: 5, m2: 1, n2: 1, d2: 3, un2: 4, ma: 2, na: 2, da: 9, template: 'two' },
            { m1: 1, n1: 5, d1: 8, un1: 13, m2: 1, n2: 3, d2: 8, un2: 11, ma: 2, na: 15, da: 64, template: 'two' },
            { m1: 1, n1: 2, d1: 5, un1: 7, m2: 2, n2: 3, d2: 5, un2: 13, ma: 3, na: 16, da: 25, template: 'two' },
            { m1: 2, n1: 1, d1: 4, un1: 9, m2: 2, n2: 1, d2: 4, un2: 9, ma: 5, na: 1, da: 16, template: 'two' },
            { m1: 1, n1: 1, d1: 8, un1: 9, m2: 2, n2: 3, d2: 8, un2: 19, ma: 2, na: 43, da: 64, template: 'two' },
            { m1: 1, n1: 2, d1: 3, un1: 5, m2: 1, n2: 5, d2: 6, un2: 11, ma: 3, na: 1, da: 18, template: 'two' },
            { m1: 2, n1: 6, d1: 9, un1: 24, m2: 1, n2: 1, d2: 6, un2: 7, ma: 3, na: 1, da: 9, template: 'two' },         
            { m1: 1, n1: 1, d1: 6, un1: 7, m2: 2, n2: 5, d2: 8, un2: 21, ma: 3, na: 1, da: 16, template: 'two' },
			{ m1: 1, n1: 1, d1: 3, un1: 4, m2: 2, n2: 1, d2: 2, un2: 5, ma: 3, na: 1, da: 3, template: 'two' },
            { m1: 3, n1: 2, d1: 3, un1: 11, m2: 1, n2: 3, d2: 8, un2: 11, ma: 5, na: 1, da: 24, template: 'two' }
        ];

    return dataUtils.build(desc, template, data);
}]);
