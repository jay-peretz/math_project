/*global angular */

angular.module('mathSkills').service('data_e_4', ['dataUtils', function (dataUtils) {
    var desc = {
            title: 'E.4 Division of Mixed Numbers',
            path: 'E.4-division-of-mixed-numbers',
            children: []
        },
        template = {
            fracAnswer: {
                title: 'Division of Mixed Numbers',
                children: [{
                    title: 'Main Answer',
                    children: [{
                        problem: '\\grp'
									+'{\\str{Solve: \xA0}}'
									+'{\\mixed{\\fracstr{$m1}}{\\frac{\\fracstr{$n1}}{\\fracstr{$d1}}}}'
									+'{\\sign{&divide;}}'
									+'{\\mixed{\\fracstr{$m2}}{\\frac{\\fracstr{$n2}}{\\fracstr{$d2}}}}',
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
									+'{\\str{Solve: \xA0}}'
									+'{\\mixed{\\fracstr{$m1}}{\\frac{\\fracstr{$n1}}{\\fracstr{$d1}}}}'
									+'{\\sign{&divide;}}'
									+'{\\mixed{\\fracstr{$m2}}{\\frac{\\fracstr{$n2}}{\\fracstr{$d2}}}}',
                        answer: '\\rowgrp'
									+'{\\ins{Change the mixed numbers into improper fractions.}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp{\\frac{\\input{$un1}}{\\input{$d1}}}{\\sign{&divide;}}{\\frac{\\input{$un2}}{\\input{$d2}}}}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }, {
                        problem: '\\grp'
									+'{\\str{Solve: \xA0}}'
									+'{\\mixed{\\fracstr{$m1}}{\\frac{\\fracstr{$n1}}{\\fracstr{$d1}}}}'
									+'{\\sign{&divide;}}'
									+'{\\mixed{\\fracstr{$m2}}{\\frac{\\fracstr{$n2}}{\\fracstr{$d2}}}}',
                        answer: '\\css'
									+'{\\rowgrp'
										+'{\\str{Change the mixed numbers into improper fractions.}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp{\\frac{\\fracstr{$un1}}{\\fracstr{$d1}}}{\\sign{&divide;}}{\\frac{\\fracstr{$un2}}{\\fracstr{$d2}}}}'
										+'{\\html{&nbsp;}}'
										+'{\\ins{Rewrite the problem as the product of the fractions.}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp{\\frac{\\input{$un1}}{\\input{$d1}}}{\\sign{&times;}}{\\frac{\\input{$d2}}{\\input{$un2}}}}'
										+'}{well}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }, {
                        problem: '\\grp'
									+'{\\str{Solve: \xA0}}'
									+'{\\mixed{\\fracstr{$m1}}{\\frac{\\fracstr{$n1}}{\\fracstr{$d1}}}}'
									+'{\\sign{&divide;}}'
									+'{\\mixed{\\fracstr{$m2}}{\\frac{\\fracstr{$n2}}{\\fracstr{$d2}}}}',
                        answer: '\\css'
									+'{\\rowgrp'
										+'{\\str{Change the mixed numbers into improper fractions.}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp{\\frac{\\fracstr{$un1}}{\\fracstr{$d1}}}{\\sign{&divide;}}{\\frac{\\fracstr{$un2}}{\\fracstr{$d2}}}}'
										+'{\\html{&nbsp;}}'
										+'{\\str{Rewrite the problem as the product of the fractions.}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp{\\frac{\\fracstr{$un1}}{\\fracstr{$d1}}}{\\sign{&times;}}{\\frac{\\fracstr{$d2}}{\\fracstr{$un2}}}}'
										+'{\\canfrac{[$un1,$d1]}{[$d2,$un2]}{[$na,$da]}}'
								+'}{well}',
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
                        problem: '\\grp'
									+'{\\str{Solve: \xA0 \xA0}}'
									+'{\\mixed{\\fracstr{$m1}}{\\frac{\\fracstr{$n1}}{\\fracstr{$d1}}}}'
									+'{\\sign{&divide;}}'
									+'{\\mixed{\\fracstr{$m2}}{\\frac{\\fracstr{$n2}}{\\fracstr{$d2}}}}',
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
                        problem: '\\grp'
									+'{\\str{Solve: \xA0 \xA0}}'
									+'{\\mixed{\\fracstr{$m1}}{\\frac{\\fracstr{$n1}}{\\fracstr{$d1}}}}'
									+'{\\sign{&divide;}}'
									+'{\\mixed{\\fracstr{$m2}}{\\frac{\\fracstr{$n2}}{\\fracstr{$d2}}}}',
						answer: '\\rowgrp'
									+'{\\ins{Change the mixed numbers into improper fractions.}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp{\\frac{\\input{$un1}}{\\input{$d1}}}{\\sign{&divide;}}{\\frac{\\input{$un2}}{\\input{$d2}}}}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }, {
                        problem: '\\grp'
									+'{\\str{Solve: \xA0 \xA0}}'
									+'{\\mixed{\\fracstr{$m1}}{\\frac{\\fracstr{$n1}}{\\fracstr{$d1}}}}'
									+'{\\sign{&divide;}}'
									+'{\\mixed{\\fracstr{$m2}}{\\frac{\\fracstr{$n2}}{\\fracstr{$d2}}}}',
						answer: '\\css'
									+'{\\rowgrp'
										+'{\\str{Change the mixed numbers into improper fractions.}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp{\\frac{\\fracstr{$un1}}{\\fracstr{$d1}}}{\\sign{&divide;}}{\\frac{\\fracstr{$un2}}{\\fracstr{$d2}}}}'
										+'{\\html{&nbsp;}}'
										+'{\\ins{Rewrite the problem as the product of the fractions.}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp{\\frac{\\input{$un1}}{\\input{$d1}}}{\\sign{&times;}}{\\frac{\\input{$d2}}{\\input{$un2}}}}'
										+'}{well}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }, {
                        problem: '\\grp'
									+'{\\str{Solve: \xA0 \xA0}}'
									+'{\\mixed{\\fracstr{$m1}}{\\frac{\\fracstr{$n1}}{\\fracstr{$d1}}}}'
									+'{\\sign{&divide;}}'
									+'{\\mixed{\\fracstr{$m2}}{\\frac{\\fracstr{$n2}}{\\fracstr{$d2}}}}',
                        answer: '\\css'
									+'{\\rowgrp'
										+'{\\str{Change the mixed numbers into improper fractions.}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp{\\frac{\\fracstr{$un1}}{\\fracstr{$d1}}}{\\sign{&divide;}}{\\frac{\\fracstr{$un2}}{\\fracstr{$d2}}}}'
										+'{\\html{&nbsp;}}'
										+'{\\html{Rewrite the problem as the product of the fractions.}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp{\\frac{\\fracstr{$un1}}{\\fracstr{$d1}}}{\\sign{&times;}}{\\frac{\\fracstr{$d2}}{\\fracstr{$un2}}}}'
										+'{\\canfrac{[$un1,$d1]}{[$d2,$un2]}{[$numProd,$da]}}'
								+'}{well}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }, {
                       problem: '\\grp'
									+'{\\str{Solve: \xA0 \xA0}}'
									+'{\\mixed{\\fracstr{$m1}}{\\frac{\\fracstr{$n1}}{\\fracstr{$d1}}}}'
									+'{\\sign{&divide;}}'
									+'{\\mixed{\\fracstr{$m2}}{\\frac{\\fracstr{$n2}}{\\fracstr{$d2}}}}',
                        answer: '\\mixed{\\input{$ma}}{\\frac{\\input{$na}}{\\input{$da}}}',
						answer: '\\css'
									+'{\\rowgrp'
										+'{\\str{Change the mixed numbers into improper fractions.}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp{\\frac{\\fracstr{$un1}}{\\fracstr{$d1}}}{\\sign{&divide;}}{\\frac{\\fracstr{$un2}}{\\fracstr{$d2}}}}'
										+'{\\html{&nbsp;}}'
										+'{\\str{Rewrite the problem as the product of the fractions.}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp{\\frac{\\fracstr{$un1}}{\\fracstr{$d1}}}{\\sign{&times;}}{\\frac{\\fracstr{$d2}}{\\fracstr{$un2}}}}'
										+'{\\html{&nbsp;}}'
										+'{\\str{Cancel and multiply the result to obtain the product.}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp{\\frac{\\fracstr{$rn1}}{\\fracstr{$rd1}}}{\\sign{&times;}}{\\frac{\\fracstr{$rn2}}{\\fracstr{$rd2}}}{\\sign{=}}{\\frac{\\fracstr{$numProd}}{\\fracstr{$da}}}}'
										+'{\\html{&nbsp;}}'
										+'{\\ins{Write the product as a mixed number.}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\frac{\\fracstr{$numProd}}{\\fracstr{$da}}}'
											+'{\\sign{=}}'
											+'{\\mixed{\\input{$ma}}{\\frac{\\input{$na}}{\\input{$da}}}}}'
								+'}{well}',
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
            { m1: 1, n1: 5, d1: 6,  un1: 11, m2: 1, n2: 1, d2: 2, un2: 3,  ma: 1, rn1: 11, rd1:3, rn2: 1, rd2: 3, numProd: 11,   na: 2,  da: 9,  template: 'mixedAnswer' },
            { m1: 1, n1: 3, d1: 8,  un1: 11, m2: 1, n2: 5, d2: 6, un2: 11, ma: null, na: 3,  da: 4,  template: 'fracAnswer'  },
            { m1: 1, n1: 2, d1: 3,  un1: 5,  m2: 1, n2: 5, d2: 6, un2: 11, ma: null, na: 10, da: 11, template: 'fracAnswer'  },
            { m1: 2, n1: 2, d1: 8,  un1: 18, m2: 1, n2: 5, d2: 7, un2: 12, ma: 1, rn1: 3, rd1:8, rn2: 7, rd2: 2, numProd: 21,   na: 5,  da: 16, template: 'mixedAnswer' },
            { m1: 1, n1: 1, d1: 2,  un1: 3,  m2: 1, n2: 2, d2: 5, un2: 7,  ma: 1, rn1: 3, rd1:2, rn2: 5, rd2: 7, numProd: 15,   na: 1,  da: 14, template: 'mixedAnswer' },
            { m1: 1, n1: 4, d1: 9,  un1: 13, m2: 1, n2: 4, d2: 5, un2: 9,  ma: null, na: 65, da: 81, template: 'fracAnswer'  },
            { m1: 1, n1: 1, d1: 10, un1: 11, m2: 2, n2: 3, d2: 4, un2: 11, ma: null, na: 2,  da: 5,  template: 'fracAnswer'  },
            { m1: 3, n1: 5, d1: 12, un1: 41, m2: 3, n2: 1, d2: 3, un2: 10, ma: 1, rn1: 41, rd1:4, rn2: 1, rd2: 10, numProd: 41,   na: 1,  da: 40, template: 'mixedAnswer' },
            { m1: 7, n1: 1, d1: 4,  un1: 29, m2: 6, n2: 7, d2: 8, un2: 55, ma: 1, rn1: 29, rd1:1, rn2: 2, rd2: 55, numProd: 58,    na: 3,  da: 55, template: 'mixedAnswer' }
        ];

    return dataUtils.build(desc, template, data);
}]);
