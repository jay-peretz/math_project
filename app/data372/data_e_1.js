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
            },
            four: {
                title: 'Multiplication of Fractions',
                children: [{
                    title: 'Main Answer',
                    children: [{
                        problem: '\\grp'
						+'{\\html{Find the product of &nbsp;}}'
						+'{\\frac{\\str{$n1}}{\\str{$d1}}}'
						+'{\\sign{&times;}}'
						+'{\\frac{\\str{$n2}}{\\str{$d2}}}',			
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
						+'{\\html{Find the product of &nbsp;}}'
						+'{\\frac{\\str{$n1}}{\\str{$d1}}}'
						+'{\\sign{&times;}}'
						+'{\\frac{\\str{$n2}}{\\str{$d2}}}',					
                        answer: '\\canfrac{[$n1,$d1]}{[$n2,$d2]}{[$product,$da]}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }]
                }]
            },
            five: {
                title: 'Multiplication of Fractions',
                children: [{
                    title: 'Main Answer',
                    children: [{						
						problem:'\\rowgrp'
								+'{\\grp{\\html{Find the product of &nbsp;}}'
								+'{\\mixed{\\html{$w1}}}'
								+'{\\sign{&times;}}'
								+'{\\mixed{\\html{$w2}}{\\frac{\\fracstr{$n2}}{\\fracstr{$d2}}}}',	
                        answer: '\\mixed{\\input{$wa}}{\\frac{\\input{$na}}{\\input{$da}}}',
                        controls: {
                            "checkAnswer": true,
                            "help": false,
                            "workbook": true
                        }
                    }]
                }, {
                    title: 'Workbook',
                    children: [{
						problem:'\\rowgrp'
								+'{\\grp{\\html{Find the product of &nbsp;}}'
								+'{\\mixed{\\html{$w1}}}'
								+'{\\sign{&times;}}'
								+'{\\mixed{\\html{$w2}}{\\frac{\\fracstr{$n2}}{\\fracstr{$d2}}}}',							
                        answer: '\\canfrac{[$n1,$d1]}{[$n2,$d2]}{[$product,$da]}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }]
                }]
            },
            six: {
                title: 'Multiplying Fractions',
                children: [{
                    title: 'Main Answer',
                    children: [{
                        /*problem: '\\rowgrp'
						+'{\\html{Find the product of:}}'
						+'{\\html{&nbsp;}}'
						+'{\\grp{\\frac{\\str{$n1}}{\\str{$d1}}}{\\sign{&times;}}{\\mixed{\\html{$w2}}{\\sign{&times;}}{\\frac{\\str{$n3}}{\\str{$d3}}}}',*/
						
						problem:'\\rowgrp'
								+'{\\grp{\\html{Find the product of &nbsp;}}'
								+'{\\mixed{\\html{$w1}}{\\frac{\\fracstr{$n1}}{\\fracstr{$d1}}}}'
								+'{\\sign{&times;}}'
								+'{\\mixed{\\html{$w2}}}'
								+'{\\sign{&times;}}'
								+'{\\mixed{\\html{$w3}}{\\frac{\\fracstr{$n3}}{\\fracstr{$d3}}}}',	
                        answer: '\\mixed{\\input{$wa}}{\\frac{\\input{$na}}{\\input{$da}}}',
						
                        //answer: '\\frac{\\input{$na}}{\\input{$da}}',
                        controls: {
                            "checkAnswer": true,
                            "help": false,
                            "workbook": true
                        }
                    }]
                }, {
                    title: 'Workbook',
                    children: [{
                        problem:'\\rowgrp'
								+'{\\grp{\\html{Find the product of &nbsp;}}'
								+'{\\mixed{\\html{$w1}}{\\frac{\\fracstr{$n1}}{\\fracstr{$d1}}}}'
								+'{\\sign{&times;}}'
								+'{\\mixed{\\html{$w2}}}'
								+'{\\sign{&times;}}'
								+'{\\mixed{\\html{$w3}}{\\frac{\\fracstr{$n3}}{\\fracstr{$d3}}}}',	
                        answer: '\\canfrac{[$n1,$d1]}{[$n2,$d2]}{[$n3,$d3]}{[$product,$da]}',
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
            { n1: 9, d1: 20, n2: 14, d2: 3, ma: 2, na: 1, da: 10, product: '21', template: 'four' },
            { w1:'8', n1: '8', d1: '1', w2:'', n2: '1', d2: '7', wa:'1', na: '1', da: '7', product: '8', template: 'five' },
            { n1: 3, d1: 17, n2: 2, d2: 5, na: 6, da: 85, template: 'two' },
            //{ n1: 1, d1: 4, n2: 8, d2: 1, n3: 2, d3: 3, ma: 1, na: 1, da: 3, product: 4, template: 'six' },
            { w1: '', n1: 1, d1: 4, w2: 8, n2: 8, d2: 1, w3: '', n3: 2, d3: 3, wa: 1, na: 1, da: 3, product: 4, template: 'six' },
            { n1: 11, d1: 22, n2: 1, d2: 2, n3: 3, d3: 6, na: 1, da: 8, template: 'three' },
            { n1: 10, d1: 3, n2: 6, d2: 25, n3: 1, d3: 9, na: 4, da: 45, template: 'three' }
        ];
    
    return dataUtils.build(desc, template, data);
}]);
