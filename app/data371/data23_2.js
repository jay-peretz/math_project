/*global angular */

angular.module('mathSkills').service('data23_2', ['dataUtils', function (dataUtils) {
    var desc = {
			title: '23.2 Converting Units of Volume',
            path: '23.2-converting-units-of-Volume',
            children: []
        },
        template = {
            two: {
                title: 'Converting Units of Volume',
                children: [{
                    title: 'Main Answer',
                    children: [{
						problem: '\\row{\\str{3}}{\\image{23.2_Fluid_Volume/gallon-01-56x70.png}}'
						+'{\\sign{&equals;}}{\\str{?}}{\\image{23.2_Fluid_Volume/cup-02-50x60.png}}',
                        answer: '\\input{48}',
                        controls: {
                            "checkAnswer": true,
                            "help": false,
                            "workbook": true
                        }
                    }]
                }/*, {
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
                }*/]
            }
        },
        data = [
            { m1: 1, n1: 1, d1: 3, un1: 4, m2: 1, n2: 2, d2: 3, un2: 5, ma: 2, na: 2, da: 9, template: 'two' }
        ];

    return dataUtils.build(desc, template, data);
}]);
