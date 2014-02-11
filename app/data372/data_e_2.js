/*global angular */

angular.module('mathSkills').service('data_e_2', ['dataUtils', function (dataUtils) {
    var desc = {
            title: 'E.2 Multiplication of  Mixed Numbers',
            path: 'E.s-multiplication-of-mixed-numbers',
            children: []
        },
        template = {
            simple: {
                title: 'Multiply Mixed Numbers',
                children: [{
                    title: 'Main Answer',
                    children: [{
                        problem: '\\grp'
									+'{\\html{Solve &nbsp;}}'
									+'{\\mixed{\\fracstr{$m1}}{\\frac{\\fracstr{$n1}}{\\fracstr{$d1}}}}'
									+'{\\sign{&times;}}'
									+'{\\mixed{\\fracstr{$m2}}{\\frac{\\fracstr{$n2}}{\\fracstr{$d2}}}}',
                        //answer: '\\mixed{\\input{$ma}}{\\frac{\\input{$na}}{\\input{$da}}}',
                        answer: '\\mixed{\\input{$ma}}',
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
									+'{\\html{Solve &nbsp;}}'
									+'{\\mixed{\\fracstr{$m1}}{\\frac{\\fracstr{$n1}}{\\fracstr{$d1}}}}'
									+'{\\sign{&times;}}'
									+'{\\mixed{\\fracstr{$m2}}{\\frac{\\fracstr{$n2}}{\\fracstr{$d2}}}}',
                        answer: '\\rowgrp'
									+'{\\ins{Change the mixed numbers into improper fractions:}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp{\\frac{\\input{$un1}}{\\input{$d1}}}{\\sign{&times;}}{\\frac{\\input{$un2}}{\\input{$d2}}}}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }, {
                        problem: '\\grp'
									+'{\\html{Solve &nbsp;}}'
									+'{\\mixed{\\fracstr{$m1}}{\\frac{\\fracstr{$n1}}{\\fracstr{$d1}}}}'
									+'{\\sign{&times;}}'
									+'{\\mixed{\\fracstr{$m2}}{\\frac{\\fracstr{$n2}}{\\fracstr{$d2}}}}',
                        answer: '\\css'
									+'{\\rowgrp'
										+'{\\html{Change the mixed numbers into improper fractions:}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp{\\frac{\\fracstr{$un1}}{\\fracstr{$d1}}}{\\sign{&times;}}{\\frac{\\fracstr{$un2}}{\\fracstr{$d2}}}}'
										+'{\\canfrac{[$un1,$d1]}{[$un2,$d2]}{[$product,$da]}}'
									+'}{well}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }]
                }]
            },
			mixed: {
                title: 'Multiply Mixed Numbers',
                children: [{
                    title: 'Main Answer',
                    children: [{
                        problem: '\\grp'
									+'{\\html{Solve &nbsp;}}'
									+'{\\mixed{\\fracstr{$m1}}{\\frac{\\fracstr{$n1}}{\\fracstr{$d1}}}}'
									+'{\\sign{&times;}}'
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
									+'{\\html{Solve &nbsp;}}'
									+'{\\mixed{\\fracstr{$m1}}{\\frac{\\fracstr{$n1}}{\\fracstr{$d1}}}}'
									+'{\\sign{&times;}}'
									+'{\\mixed{\\fracstr{$m2}}{\\frac{\\fracstr{$n2}}{\\fracstr{$d2}}}}',
						answer: '\\rowgrp'
									+'{\\ins{Change the mixed numbers into improper fractions:}}'
									+'{\\html{&nbsp;}}'
                        			+'{\\grp{\\frac{\\input{$un1}}{\\input{$d1}}}{\\sign{&times;}}{\\frac{\\input{$un2}}{\\input{$d2}}}}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }, {
                        problem: '\\grp'
									+'{\\html{Solve &nbsp;}}'
									+'{\\mixed{\\fracstr{$m1}}{\\frac{\\fracstr{$n1}}{\\fracstr{$d1}}}}'
									+'{\\sign{&times;}}'
									+'{\\mixed{\\fracstr{$m2}}{\\frac{\\fracstr{$n2}}{\\fracstr{$d2}}}}',
                        answer: '\\css'
									+'{\\rowgrp'
										+'{\\html{Change the mixed numbers into improper fractions:}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp{\\frac{\\fracstr{$un1}}{\\fracstr{$d1}}}{\\sign{&times;}}{\\frac{\\fracstr{$un2}}{\\fracstr{$d2}}}}'
										+'{\\canfrac{[$un1,$d1]}{[$un2,$d2]}{[$product,$da]}}'
									+'}{well}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }, {
                        problem: '\\grp'
									+'{\\html{Solve &nbsp;}}'
									+'{\\mixed{\\fracstr{$m1}}{\\frac{\\fracstr{$n1}}{\\fracstr{$d1}}}}'
									+'{\\sign{&times;}}'
									+'{\\mixed{\\fracstr{$m2}}{\\frac{\\fracstr{$n2}}{\\fracstr{$d2}}}}',
                        answer: '\\css'
									+'{\\rowgrp'
										+'{\\html{Change the mixed numbers into improper fractions:}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp{\\frac{\\fracstr{$un1}}{\\fracstr{$d1}}}{\\sign{&times;}}{\\frac{\\fracstr{$un2}}{\\fracstr{$d2}}}}'
										+'{\\html{&nbsp;}}'
										+'{\\str{Cancel and multiply the result to obtain the product.}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp{\\frac{\\fracstr{$rn1}}{\\fracstr{$rd1}}}{\\sign{&times;}}{\\frac{\\fracstr{$rn2}}{\\fracstr{$rd2}}}{\\sign{=}}{\\frac{\\fracstr{$product}}{\\fracstr{$da}}}}'
										+'{\\html{&nbsp;}}'
										+'{\\ins{Write the fraction as a mixed number.}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp{\\frac{\\fracstr{$product}}{\\fracstr{$da}}}'
										+'{\\str{\xA0 = \xA0}}'
										+'{\\mixed{\\input{$ma}}{\\frac{\\input{$na}}{\\input{$da}}}}}'
									+'}{well}',
                        controls: {
                            "checkAnswer": true,
                            "help": '\\rowgrp'
										+'{\\str{Divide the numerator by the denominator, then make the quotient the mixed number whole and the remainder the mixed number numerator. \xA0}}'
										+'{\\str{\xA0}}'
										+'{\\grp{\\frac{\\fracstr{$product}}{\\fracstr{$da}}}'
										+'{\\str{\xA0 = \xA0}}'
										+'{\\mixed{\\fracstr{$ma}}{\\frac{\\fracstr{$na}}{\\fracstr{$da}}}}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp{css{\\str{answer:  \xA0}}{help-answer-text}}'
										+'{css{\\mixed{\\fracstr{$ma}}{\\frac{\\fracstr{$na}}{\\fracstr{$da}}}}{help-answer-text-tight}}}'
                        }
                    }]
                }]
            }
        },
        data = [
            { m1: 1, n1: 1, d1: 5, un1: 6, m2: 2, n2: 1, d2: 2, un2: 5, ma: 3, na: 3, da: 1, product: '3', template: 'simple' },
            { m1: 2, n1: 2, d1: 3, un1: 8, m2: 1, n2: 1, d2: 4, un2: 5, ma: 3, na: 1, product: '10', da: 3, rn1: 8, rd1:3, rn2: 5, rd2: 4, template: 'mixed' },
            { m1: 2, n1: '', d1: '', un1: 2, m2: 1, n2: 3, d2: 10, un2: 13, ma: 2, na: 3, product: '26', da: 5, rn1: 2, rd1:1, rn2: 13, rd2: 10, template: 'mixed' },
            { m1: 2, n1: 1, d1: 2, un1: 5, m2: 2, n2: 1, d2: 2, un2: 5, ma: 6, na: 1, product: '25', da: 4, rn1: 5, rd1:2, rn2: 5, rd2: 2, template: 'mixed' },
            { m1: 2, n1: 1, d1: 8, un1: 17, m2: 1, n2: 3, d2: 8, un2: 11, ma: 2, na: 59, product: '187', da: 64, rn1: 17, rd1: 8, rn2: 11, rd2: 8, template: 'mixed' },
            { m1: 1, n1: 2, d1: 3, un1: 5, m2: 1, n2: 5, d2: 6, un2: 11, ma: 3, na: 1, product: '55', da: 18, rn1: 5, rd1:3, rn2: 11, rd2: 6, template: 'mixed' },
            { m1: 2, n1: 6, d1: 9, un1: 24, m2: 1, n2: 1, d2: 6, un2: 7, ma: 3, na: 1, product: '28', da: 9, rn1: 4, rd1:9, rn2: 7, rd2: 1, template: 'mixed' },
            { m1: 1, n1: 1, d1: 3, un1: 4, m2: 2, n2: 1, d2: 2, un2: 5, ma: 3, na: 1, product: '10', da: 3, rn1: 2, rd1:3, rn2: 5, rd2: 1, template: 'mixed' },
            { m1: 1, n1: 1, d1: 6, un1: 7, m2: 2, n2: 5, d2: 8, un2: 21, ma: 3, na: 1, product: '49', da: 16, rn1: 7, rd1:2, rn2: 7, rd2: 8, template: 'mixed' },
            { m1: 3, n1: 2, d1: 3, un1: 11, m2: 1, n2: 3, d2: 8, un2: 11, ma: 5, na: 1, product: '121', da: 24, rn1: 11, rd1:3, rn2: 11, rd2: 8, template: 'mixed' }
        ];

    return dataUtils.build(desc, template, data);
}]);
