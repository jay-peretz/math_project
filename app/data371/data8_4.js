/*global angular */

angular.module('mathSkills').service('data8_4', ['dataUtils', function (dataUtils) {
    var desc = {
            title: '8.4 Divide Mixed Numbers',
            path: '8.4-divide-mixed-numbers',
            children: []
        },
        template = {
            fracAnswer: {
                title: 'Divide Mixed Numbers',
                children: [{
                    title: 'Main Answer',
                    children: [{
                        problem: '\\row{\\str{Solve: \xA0}}{\\mixed{\\fracstr{$m1}}{\\frac{\\fracstr{$n1}}{\\fracstr{$d1}}}}{\\sign{&divide;}}{\\mixed{\\fracstr{$m2}}{\\frac{\\fracstr{$n2}}{\\fracstr{$d2}}}}',
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
                        problem: '\\rowgrp{\\row{\\str{Change the mixed numbers into improper fractions.}}}{\\row{\\str{\xA0}}}{\\row{\\mixed{\\fracstr{$m1}}{\\frac{\\fracstr{$n1}}{\\fracstr{$d1}}}}{\\sign{&divide;}}{\\mixed{\\fracstr{$m2}}{\\frac{\\fracstr{$n2}}{\\fracstr{$d2}}}}',
                        answer: '\\grp{\\frac{\\input{$un1}}{\\input{$d1}}}{\\sign{&divide;}}{\\frac{\\input{$un2}}{\\input{$d2}}}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }, {
                        problem: '\\rowgrp{\\row{\\str{Rewrite the problem as the product of the fractions.}}}{\\html{&nbsp;}}{\\row{\\frac{\\str{$un1}}{\\str{$d1}}}{\\sign{&divide;}}{\\frac{\\str{$un2}}{\\str{$d2}}}}',
                        answer: '\\grp{\\frac{\\input{$un1}}{\\input{$d1}}}{\\sign{&times;}}{\\frac{\\input{$d2}}{\\input{$un2}}}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }, {
                        problem: '\\col'+
                                '{\\str{Reduce the fractions by canceling.}}' +
								'{\\html{&nbsp;}}'+
                                '{\\row{\\frac{\\str{$un1}}{\\str{$d1}}}{\\sign{&times;}}{\\frac{\\str{$d2}}{\\str{$un2}}}}',
                        answer: '\\cancelfracs{[$un1,$d1]}{[$d2,$un2]}',
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
                    }]
                }]
            },
            mixedAnswer: {
                title: 'Divide Mixed Numbers',
                children: [{
                    title: 'Main Answer',
                    children: [{
                        problem: '\\row{\\str{Solve: \xA0 \xA0}}{\\mixed{\\fracstr{$m1}}{\\frac{\\fracstr{$n1}}{\\fracstr{$d1}}}}{\\sign{&divide;}}{\\mixed{\\fracstr{$m2}}{\\frac{\\fracstr{$n2}}{\\fracstr{$d2}}}}',
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
                        problem: '\\rowgrp{\\row{\\str{Change the mixed numbers into improper fractions.}}}{\\row{\\str{\xA0}}}{\\row{\\mixed{\\fracstr{$m1}}{\\frac{\\fracstr{$n1}}{\\fracstr{$d1}}}}{\\sign{&divide;}}{\\mixed{\\fracstr{$m2}}{\\frac{\\fracstr{$n2}}{\\fracstr{$d2}}}}',
                        answer: '\\grp{\\frac{\\input{$un1}}{\\input{$d1}}}{\\sign{&divide;}}{\\frac{\\input{$un2}}{\\input{$d2}}}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }, {
                        problem: '\\rowgrp{\\row{\\str{Rewrite the problem as the product of the fractions.}}}{\\html{&nbsp;}}{\\row{\\frac{\\str{$un1}}{\\str{$d1}}}{\\sign{&divide;}}{\\frac{\\str{$un2}}{\\str{$d2}}}}',
                        answer: '\\grp{\\frac{\\input{$un1}}{\\input{$d1}}}{\\sign{&times;}}{\\frac{\\input{$d2}}{\\input{$un2}}}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }, {
                        problem: '\\col'+
                                '{\\str{Reduce the fractions by canceling.}}' +
								'{\\html{&nbsp;}}'+
                                '{\\row{\\frac{\\str{$un1}}{\\str{$d1}}}{\\sign{&times;}}{\\frac{\\str{$d2}}{\\str{$un2}}}}',
                        answer: '\\cancelfracs{[$un1,$d1]}{[$d2,$un2]}',
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
            { m1: 1, n1: 1, d1: 3,  un1: 4,  m2: 1, n2: 2, d2: 3, un2: 5,  ma: null, na: 4,  da: 5,  template: 'fracAnswer'  },
            { m1: 1, n1: 5, d1: 6,  un1: 11, m2: 1, n2: 1, d2: 2, un2: 3,  ma: 1,    na: 2,  da: 9,  template: 'mixedAnswer' },
            { m1: 1, n1: 3, d1: 8,  un1: 11, m2: 1, n2: 5, d2: 6, un2: 11, ma: null, na: 3,  da: 4,  template: 'fracAnswer'  },
            { m1: 1, n1: 2, d1: 3,  un1: 5,  m2: 1, n2: 5, d2: 6, un2: 11, ma: null, na: 10, da: 11, template: 'fracAnswer'  },
            { m1: 2, n1: 2, d1: 8,  un1: 18, m2: 1, n2: 5, d2: 7, un2: 12, ma: 1,    na: 5,  da: 16, template: 'mixedAnswer' },
            { m1: 1, n1: 1, d1: 2,  un1: 3,  m2: 1, n2: 2, d2: 5, un2: 7,  ma: 1,    na: 1,  da: 14, template: 'mixedAnswer' },
            { m1: 1, n1: 4, d1: 9,  un1: 13, m2: 1, n2: 4, d2: 5, un2: 9,  ma: null, na: 65, da: 81, template: 'fracAnswer'  },
            { m1: 1, n1: 1, d1: 10, un1: 11, m2: 2, n2: 3, d2: 4, un2: 11, ma: null, na: 2,  da: 5,  template: 'fracAnswer'  },
            { m1: 3, n1: 5, d1: 12, un1: 41, m2: 3, n2: 1, d2: 3, un2: 10, ma: 1,    na: 1,  da: 40, template: 'mixedAnswer' },
            { m1: 7, n1: 1, d1: 4,  un1: 29, m2: 6, n2: 7, d2: 8, un2: 55, ma: 1,    na: 3,  da: 55, template: 'mixedAnswer' }
        ];

    return dataUtils.build(desc, template, data);
}]);
