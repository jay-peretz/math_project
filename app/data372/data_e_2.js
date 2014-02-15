/*global angular */

angular.module('mathSkills').service('data_e_2', ['dataUtils', function (dataUtils) {
    var desc = {
            title: 'E.2 Multiplication of  Mixed Numbers',
            path: 'E.2-multiplication-of-mixed-numbers',
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
                            "help": true,
							"fixBottomRight": true
                        }
                    }]
                }]
            },
            mixedGeneric: {
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
                        			+'{\\grp{\\frac{\\input{$nw1}}{\\input{$dw1}}}{\\sign{&times;}}{\\frac{\\input{$nw2}}{\\input{$dw2}}}}',
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
										+'{\\grp{\\frac{\\fracstr{$nw1}}{\\fracstr{$dw1}}}{\\sign{&times;}}{\\frac{\\fracstr{$nw2}}{\\fracstr{$dw2}}}}'
										+'{\\canfrac{[$nw1,$dw1]}{[$nw2,$dw2]}{[$nproduct,$dproduct]}}'
									+'}{well}',
                        controls: {
                            "checkAnswer": true,
                            "help": true,
							"fixBottomRight": true
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
										+'{\\grp{\\frac{\\fracstr{$nw1}}{\\fracstr{$dw1}}}{\\sign{&times;}}{\\frac{\\fracstr{$nw2}}{\\fracstr{$dw2}}}}'
										+'{\\html{&nbsp;}}'
										+'{\\str{Cancel and multiply the result to obtain the product.}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp{\\frac{\\fracstr{$nw1}}{\\fracstr{$dw1}}}{\\sign{&times;}}{\\frac{\\fracstr{$nw2}}{\\fracstr{$dw2}}}{\\sign{=}}{\\frac{\\fracstr{$nproduct}}{\\fracstr{$dproduct}}}}'
										+'{\\html{&nbsp;}}'
										+'{\\ins{Write the fraction as a mixed number.}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp{\\frac{\\fracstr{$nproduct}}{\\fracstr{$dproduct}}}'
										+'{\\str{\xA0 = \xA0}}'
										+'{\\mixed{\\input{$ma}}{\\frac{\\input{$na}}{\\input{$da}}}}}'
									+'}{well}',
                        controls: {
                            "checkAnswer": true,
                            /*"help": '\\rowgrp'
										+'{\\str{Divide the numerator by the denominator, then make the quotient the mixed number whole and the remainder the mixed number numerator. \xA0}}'
										+'{\\str{\xA0}}'
										+'{\\grp{\\frac{\\fracstr{$nproduct}}{\\fracstr{$dproduct}}}'
										+'{\\str{\xA0 = \xA0}}'
										+'{\\mixed{\\fracstr{$ma}}{\\frac{\\fracstr{$na}}{\\fracstr{$da}}}}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp{css{\\str{answer:  \xA0}}{help-answer-text}}'
										+'{css{\\mixed{\\fracstr{$ma}}{\\frac{\\fracstr{$na}}{\\fracstr{$da}}}}{help-answer-text-tight}}}',*/
							"help": true,			
							"fixBottomRight": true
                        }
                    }]
                }]
            },
            mixedGenericThree: {
                title: 'Multiply Mixed Numbers',
                children: [{
                    title: 'Main Answer',
                    children: [{
                        problem: '\\grp'
									+'{\\html{Solve &nbsp;}}'
									+'{\\mixed{\\fracstr{$m1}}{\\frac{\\fracstr{$n1}}{\\fracstr{$d1}}}}'
									+'{\\sign{&times;}}'
									+'{\\mixed{\\fracstr{$m2}}{\\frac{\\fracstr{$n2}}{\\fracstr{$d2}}}}'
									+'{\\sign{&times;}}'
									+'{\\mixed{\\fracstr{$m3}}{\\frac{\\fracstr{$n3}}{\\fracstr{$d3}}}}',
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
									+'{\\mixed{\\fracstr{$m2}}{\\frac{\\fracstr{$n2}}{\\fracstr{$d2}}}}'
									+'{\\sign{&times;}}'
									+'{\\mixed{\\fracstr{$m3}}{\\frac{\\fracstr{$n3}}{\\fracstr{$d3}}}}',
						answer: '\\rowgrp'
									+'{\\ins{Change the mixed numbers into improper fractions:}}'
									+'{\\html{&nbsp;}}'
                        			+'{\\grp{\\frac{\\input{$nw1}}{\\input{$dw1}}}{\\sign{&times;}}{\\frac{\\input{$nw2}}{\\input{$dw2}}}{\\sign{&times;}}{\\frac{\\input{$nw3}}{\\input{$dw3}}}}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }, {
                        problem: '\\grp'
									+'{\\html{Solve &nbsp;}}'
									+'{\\mixed{\\fracstr{$m1}}{\\frac{\\fracstr{$n1}}{\\fracstr{$d1}}}}'
									+'{\\sign{&times;}}'
									+'{\\mixed{\\fracstr{$m2}}{\\frac{\\fracstr{$n2}}{\\fracstr{$d2}}}}'
									+'{\\sign{&times;}}'
									+'{\\mixed{\\fracstr{$m3}}{\\frac{\\fracstr{$n3}}{\\fracstr{$d3}}}}',
                        answer: '\\css'
									+'{\\rowgrp'
										+'{\\html{Change the mixed numbers into improper fractions:}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp{\\frac{\\fracstr{$nw1}}{\\fracstr{$dw1}}}{\\sign{&times;}}{\\frac{\\fracstr{$nw2}}{\\fracstr{$dw2}}}{\\sign{&times;}}{\\frac{\\fracstr{$nw3}}{\\fracstr{$dw3}}}}'
										+'{\\canfrac{[$nw1,$dw1]}{[$nw2,$dw2]}{[$nw3,$dw3]}{[$nproduct,$dproduct]}}'
									+'}{well}',
                        controls: {
                            "checkAnswer": true,
                            "help": true,
							"fixBottomRight": true
                        }
                    }, {
                        problem: '\\grp'
									+'{\\html{Solve &nbsp;}}'
									+'{\\mixed{\\fracstr{$m1}}{\\frac{\\fracstr{$n1}}{\\fracstr{$d1}}}}'
									+'{\\sign{&times;}}'
									+'{\\mixed{\\fracstr{$m2}}{\\frac{\\fracstr{$n2}}{\\fracstr{$d2}}}}'
									+'{\\sign{&times;}}'
									+'{\\mixed{\\fracstr{$m3}}{\\frac{\\fracstr{$n3}}{\\fracstr{$d3}}}}',
                        answer: '\\css'
									+'{\\rowgrp'
										+'{\\html{Change the mixed numbers into improper fractions:}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp{\\frac{\\fracstr{$nw1}}{\\fracstr{$dw1}}}{\\sign{&times;}}{\\frac{\\fracstr{$nw2}}{\\fracstr{$dw2}}}{\\sign{&times;}}{\\frac{\\fracstr{$nw3}}{\\fracstr{$dw3}}}}'
										+'{\\html{&nbsp;}}'
										+'{\\str{Cancel and multiply the result to obtain the product.}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp{\\frac{\\fracstr{$nw1}}{\\fracstr{$dw1}}}{\\sign{&times;}}{\\frac{\\fracstr{$nw2}}{\\fracstr{$dw2}}}{\\sign{&times;}}{\\frac{\\fracstr{$nw3}}{\\fracstr{$dw3}}}{\\sign{=}}{\\frac{\\fracstr{$nproduct}}{\\fracstr{$dproduct}}}}'
										+'{\\html{&nbsp;}}'
										+'{\\ins{Write the fraction as a mixed number.}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp{\\frac{\\fracstr{$nproduct}}{\\fracstr{$dproduct}}}'
										+'{\\str{\xA0 = \xA0}}'
										+'{\\mixed{\\input{$ma}}{\\frac{\\input{$na}}{\\input{$da}}}}}'
									+'}{well}',
                        controls: {
                            "checkAnswer": true,
                            /*"help": '\\rowgrp'
										+'{\\str{Divide the numerator by the denominator, then make the quotient the mixed number whole and the remainder the mixed number numerator. \xA0}}'
										+'{\\str{\xA0}}'
										+'{\\grp{\\frac{\\fracstr{$nproduct}}{\\fracstr{$dproduct}}}'
										+'{\\str{\xA0 = \xA0}}'
										+'{\\mixed{\\fracstr{$ma}}{\\frac{\\fracstr{$na}}{\\fracstr{$da}}}}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp{css{\\str{answer:  \xA0}}{help-answer-text}}'
										+'{css{\\mixed{\\fracstr{$ma}}{\\frac{\\fracstr{$na}}{\\fracstr{$da}}}}{help-answer-text-tight}}}',*/
							"help": true,
							"fixBottomRight": true
                        }
                    }]
                }]
            },
            mixedWholeAnsThree: {
                title: 'Multiply Mixed Numbers',
                children: [{
                    title: 'Main Answer',
                    children: [{
                        problem: '\\grp'
									+'{\\html{Solve &nbsp;}}'
									+'{\\mixed{\\fracstr{$m1}}{\\frac{\\fracstr{$n1}}{\\fracstr{$d1}}}}'
									+'{\\sign{&times;}}'
									+'{\\mixed{\\fracstr{$m2}}{\\frac{\\fracstr{$n2}}{\\fracstr{$d2}}}}'
									+'{\\sign{&times;}}'
									+'{\\mixed{\\fracstr{$m3}}{\\frac{\\fracstr{$n3}}{\\fracstr{$d3}}}}',
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
									+'{\\mixed{\\fracstr{$m2}}{\\frac{\\fracstr{$n2}}{\\fracstr{$d2}}}}'
									+'{\\sign{&times;}}'
									+'{\\mixed{\\fracstr{$m3}}{\\frac{\\fracstr{$n3}}{\\fracstr{$d3}}}}',
						answer: '\\rowgrp'
									+'{\\ins{Change the mixed numbers into improper fractions:}}'
									+'{\\html{&nbsp;}}'
                        			+'{\\grp{\\frac{\\input{$nw1}}{\\input{$dw1}}}{\\sign{&times;}}{\\frac{\\input{$nw2}}{\\input{$dw2}}}{\\sign{&times;}}{\\frac{\\input{$nw3}}{\\input{$dw3}}}}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }, {
                        problem: '\\grp'
									+'{\\html{Solve &nbsp;}}'
									+'{\\mixed{\\fracstr{$m1}}{\\frac{\\fracstr{$n1}}{\\fracstr{$d1}}}}'
									+'{\\sign{&times;}}'
									+'{\\mixed{\\fracstr{$m2}}{\\frac{\\fracstr{$n2}}{\\fracstr{$d2}}}}'
									+'{\\sign{&times;}}'
									+'{\\mixed{\\fracstr{$m3}}{\\frac{\\fracstr{$n3}}{\\fracstr{$d3}}}}',
                        answer: '\\css'
									+'{\\rowgrp'
										+'{\\html{Change the mixed numbers into improper fractions:}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp{\\frac{\\fracstr{$nw1}}{\\fracstr{$dw1}}}{\\sign{&times;}}{\\frac{\\fracstr{$nw2}}{\\fracstr{$dw2}}}{\\sign{&times;}}{\\frac{\\fracstr{$nw3}}{\\fracstr{$dw3}}}}'
										+'{\\canfrac{[$nw1,$dw1]}{[$nw2,$dw2]}{[$nw3,$dw3]}{[$nproduct,$dproduct]}}'
									+'}{well}',
                        controls: {
                            "checkAnswer": true,
                            "help": true,
							"fixBottomRight": true
                        }
                    }]
                }]
            },
            mixedWholeAns: {
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
                        			+'{\\grp{\\frac{\\input{$nw1}}{\\input{$dw1}}}{\\sign{&times;}}{\\frac{\\input{$nw2}}{\\input{$dw2}}}}',
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
										+'{\\grp{\\frac{\\fracstr{$nw1}}{\\fracstr{$dw1}}}{\\sign{&times;}}{\\frac{\\fracstr{$nw2}}{\\fracstr{$dw2}}}}'
										+'{\\canfrac{[$nw1,$dw1]}{[$nw2,$dw2]}{[$nproduct,$dproduct]}}'
									+'}{well}',
                        controls: {
                            "checkAnswer": true,
                            "help": true,
							"fixBottomRight": true
                        }
                    }]
                }]
            }
        },
        data = [ 
			// prob 1
            { m1: 1, n1: 2, d1: 5, m2: 2, n2: 1, d2: 2, nw1: 6, dw1: 5, nw2: 5, dw2: 2, ma: 3, na: '', da: '', nproduct: 3,  dproduct: 1, template: 'mixedWholeAns' },           // prob 2
            { m1: 2, n1: 2, d1: 3, m2: 1, n2: 1, d2: 4, ma: 3, na: 1, da: 3, nw1: 8, dw1: 3, nw2: 5, dw2: 4, nproduct: '10', dproduct: '3', template: 'mixedGeneric' },
			// prob 3
            { m1: 2, n1: '', d1: '', m2: 1, n2: 3, d2: 10, ma: 2, na: 3, da: 5, nw1: 2, dw1: 1, nw2: 13, dw2: 10, nproduct: '13', dproduct: '5', template: 'mixedGeneric' },
			// prob 4
            { m1: 3, n1: 3, d1: 4, m2: 12, n2: '', d2: '', ma: 45, na: '', da: '', nw1: 15, dw1: 4, nw2: 12, dw2: 1, nproduct: '45', dproduct: '1', template: 'mixedWholeAns' },
			// prob 5
            { m1: 3, n1: 1, d1: 8, m2: 2, n2: 2, d2: 3, ma: 8, na: 1, da: 3, nw1: 25, dw1: 8, nw2: 8, dw2: 3, nproduct: 25, dproduct: 3, template: 'mixedGeneric' },
			// prob 6
            { m1: '', n1: 3, d1: 5, un1: 3, m2: 1, n2: 1, d2: 2, un2: 3, ma: '', na: 9, product: '9', da: 10, template: 'simple' },
			// prob 7
            { m1: 3, n1: 3, d1: 8, un1: 27, m2: '', n2: 2, d2: 9, un2: 2, ma: '', na: 3, product: '3', da: 4, template: 'simple' },
			// prob 8
            { m1: 3, n1: 3, d1: 7, m2: 1, n2: 5, d2: 6, m3: 28, n3: '', d3: '', ma: 88, na: '', da: '', nw1: 24, dw1: 7, nw2: 11, dw2: 6, nw3: 28, dw3: 1, nproduct: '88', dproduct: '1', template: 'mixedWholeAnsThree' },
			// prob 9
            { m1: 12, n1: '', d1: '', m2: '', n2: 4, d2: 7, m3: 6, n3: 1, d3: 2, ma: 44, na: 4, da: 7, nw1: 12, dw1: 1, nw2: 4, dw2: 7, nw3: 13, dw3: 2, nproduct: '312', dproduct: '7', template: 'mixedGenericThree' },
			// prob 10
            { m1: '', n1: 3, d1: 8, m2: 4, n2: 1, d2: 5, m3: 2, n3: 1, d3: 7, ma: 3, na: 3, da: 8, nw1: 3, dw1: 8, nw2: 21, dw2: 5, nw3: 15, dw3: 7, nproduct: '27', dproduct: '8', template: 'mixedGenericThree' },
        ];

    return dataUtils.build(desc, template, data);
}]);
