/*global angular */

angular.module('mathSkills').service('data_e_4', ['dataUtils', function (dataUtils) {
    var desc = {
            title: 'E.4 Division of Mixed Numbers',
            path: 'E.4-division-of-mixed-numbers',
            children: []
        },
        template = {
            wholeFracAnswerTwo: {
                title: 'Division of Mixed Numbers',
                children: [{
                    title: 'Main Answer',
                    children: [{
                        problem: '\\grp'
									+'{\\str{Solve: \xA0}}'
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
									+'{\\str{Solve: \xA0}}'
									+'{\\mixed{\\fracstr{$m1}}{\\frac{\\fracstr{$n1}}{\\fracstr{$d1}}}}'
									+'{\\sign{&divide;}}'
									+'{\\mixed{\\fracstr{$m2}}{\\frac{\\fracstr{$n2}}{\\fracstr{$d2}}}}',
                        answer: '\\rowgrp'
									+'{\\ins{Change the mixed numbers into improper fractions.}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp{\\frac{\\input{$wn1}}{\\input{$wd1}}}{\\sign{&divide;}}{\\frac{\\input{$wn2}}{\\input{$wd2}}}}',
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
										+'{\\grp{\\frac{\\fracstr{$wn1}}{\\fracstr{$wd1}}}{\\sign{&divide;}}{\\frac{\\fracstr{$wn2}}{\\fracstr{$wd2}}}}'
										+'{\\html{&nbsp;}}'
										+'{\\ins{Rewrite the problem as the product of the fractions.}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp{\\frac{\\input{$wn1}}{\\input{$wd1}}}{\\sign{&times;}}{\\frac{\\input{$wd2}}{\\input{$wn2}}}}'
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
										+'{\\grp{\\frac{\\fracstr{$wn1}}{\\fracstr{$wd1}}}{\\sign{&divide;}}{\\frac{\\fracstr{$wn2}}{\\fracstr{$wd2}}}}'
										+'{\\html{&nbsp;}}'
										+'{\\str{Rewrite the problem as the product of the fractions.}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp{\\frac{\\fracstr{$wn1}}{\\fracstr{$wd1}}}{\\sign{&times;}}{\\frac{\\fracstr{$wd2}}{\\fracstr{$wn2}}}}'
										+'{\\canfrac{[$wn1,$wd1]}{[$wd2,$wn2]}{[$wna,$wda]}}'
								+'}{well}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }]
                }]
            },
            fracAnswerThree: {
                title: 'Division of Mixed Numbers',
                children: [{
                    title: 'Main Answer',
                    children: [{
                        problem: '\\grp'
									+'{\\str{Solve: \xA0}}'
									+'{\\mixed{\\fracstr{$m1}}{\\frac{\\fracstr{$n1}}{\\fracstr{$d1}}}}'
									+'{\\sign{&divide;}}'
									+'{\\mixed{\\fracstr{$m2}}{\\frac{\\fracstr{$n2}}{\\fracstr{$d2}}}}'
									+'{\\sign{&divide;}}'
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
									+'{\\str{Solve: \xA0}}'
									+'{\\mixed{\\fracstr{$m1}}{\\frac{\\fracstr{$n1}}{\\fracstr{$d1}}}}'
									+'{\\sign{&divide;}}'
									+'{\\mixed{\\fracstr{$m2}}{\\frac{\\fracstr{$n2}}{\\fracstr{$d2}}}}'
									+'{\\sign{&divide;}}'
									+'{\\mixed{\\fracstr{$m3}}{\\frac{\\fracstr{$n3}}{\\fracstr{$d3}}}}',
                        answer: '\\rowgrp'
									+'{\\ins{Change the mixed numbers into improper fractions.}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp{\\frac{\\input{$wn1}}{\\input{$wd1}}}{\\sign{&divide;}}{\\frac{\\input{$wn2}}{\\input{$wd2}}}{\\sign{&divide;}}{\\frac{\\input{$wn3}}{\\input{$wd3}}}}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }, {
                        problem: '\\grp'
									+'{\\str{Solve: \xA0}}'
									+'{\\mixed{\\fracstr{$m1}}{\\frac{\\fracstr{$n1}}{\\fracstr{$d1}}}}'
									+'{\\sign{&divide;}}'
									+'{\\mixed{\\fracstr{$m2}}{\\frac{\\fracstr{$n2}}{\\fracstr{$d2}}}}'
									+'{\\sign{&divide;}}'
									+'{\\mixed{\\fracstr{$m3}}{\\frac{\\fracstr{$n3}}{\\fracstr{$d3}}}}',
                        answer: '\\css'
									+'{\\rowgrp'
										+'{\\str{Change the mixed numbers into improper fractions.}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp{\\frac{\\fracstr{$wn1}}{\\fracstr{$wd1}}}{\\sign{&divide;}}{\\frac{\\fracstr{$wn2}}{\\fracstr{$wd2}}}{\\sign{&divide;}}{\\frac{\\fracstr{$wn3}}{\\fracstr{$wd3}}}}'
										+'{\\html{&nbsp;}}'
										+'{\\ins{Rewrite the problem as the product of the fractions.}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp{\\frac{\\input{$wn1}}{\\input{$wd1}}}{\\sign{&times;}}{\\frac{\\input{$wd2}}{\\input{$wn2}}}{\\sign{&times;}}{\\frac{\\input{$wd3}}{\\input{$wn3}}}}'
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
									+'{\\mixed{\\fracstr{$m2}}{\\frac{\\fracstr{$n2}}{\\fracstr{$d2}}}}'
									+'{\\sign{&divide;}}'
									+'{\\mixed{\\fracstr{$m3}}{\\frac{\\fracstr{$n3}}{\\fracstr{$d3}}}}',
                        answer: '\\css'
									+'{\\rowgrp'
										+'{\\str{Change the mixed numbers into improper fractions.}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp{\\frac{\\fracstr{$wn1}}{\\fracstr{$wd1}}}{\\sign{&divide;}}{\\frac{\\fracstr{$wn2}}{\\fracstr{$wd2}}}{\\sign{&divide;}}{\\frac{\\fracstr{$wn3}}{\\fracstr{$wd3}}}}'
										+'{\\html{&nbsp;}}'
										+'{\\str{Rewrite the problem as the product of the fractions.}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp{\\frac{\\fracstr{$wn1}}{\\fracstr{$wd1}}}{\\sign{&times;}}{\\frac{\\fracstr{$wd2}}{\\fracstr{$wn2}}}{\\sign{&times;}}{\\frac{\\fracstr{$wd3}}{\\fracstr{$wn3}}}}'
										+'{\\canfrac{[$wn1,$wd1]}{[$wd2,$wn2]}{[$wd3,$wn3]}{[$wna,$wda]}}'
								+'}{well}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }]
                }]
            },
            mixedAnswerTwo: {
                title: 'Division of Mixed Numbers',
                children: [{
                    title: 'Main Answer',
                    children: [{
                        problem: '\\grp'
									+'{\\str{Solve: \xA0}}'
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
									+'{\\str{Solve: \xA0}}'
									+'{\\mixed{\\fracstr{$m1}}{\\frac{\\fracstr{$n1}}{\\fracstr{$d1}}}}'
									+'{\\sign{&divide;}}'
									+'{\\mixed{\\fracstr{$m2}}{\\frac{\\fracstr{$n2}}{\\fracstr{$d2}}}}',
                        answer: '\\rowgrp'
									+'{\\ins{Change the mixed numbers into improper fractions.}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp{\\frac{\\input{$wn1}}{\\input{$d1}}}{\\sign{&divide;}}{\\frac{\\input{$wn2}}{\\input{$d2}}}}',
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
										+'{\\grp{\\frac{\\fracstr{$wn1}}{\\fracstr{$d1}}}{\\sign{&divide;}}{\\frac{\\fracstr{$wn2}}{\\fracstr{$d2}}}}'
										+'{\\html{&nbsp;}}'
										+'{\\ins{Rewrite the problem as the product of the fractions.}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp{\\frac{\\input{$wn1}}{\\input{$d1}}}{\\sign{&times;}}{\\frac{\\input{$d2}}{\\input{$wn2}}}}'
										+'}{well}',
		                controls: {
		                    "checkAnswer": true,
		                    "help": true
		                }
		            },  {
		                problem: '\\grp'
							+'{\\str{Solve: \xA0}}'
							+'{\\mixed{\\fracstr{$m1}}{\\frac{\\fracstr{$n1}}{\\fracstr{$d1}}}}'
							+'{\\sign{&divide;}}'
							+'{\\mixed{\\fracstr{$m2}}{\\frac{\\fracstr{$n2}}{\\fracstr{$d2}}}}',
				        answer: '\\css'
									+'{\\rowgrp'
										+'{\\str{Change the mixed numbers into improper fractions.}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp{\\frac{\\fracstr{$wn1}}{\\fracstr{$d1}}}{\\sign{&divide;}}{\\frac{\\fracstr{$wn2}}{\\fracstr{$d2}}}}'
										+'{\\html{&nbsp;}}'
										+'{\\str{Rewrite the problem as the product of the fractions.}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp{\\frac{\\fracstr{$wn1}}{\\fracstr{$d1}}}{\\sign{&times;}}{\\frac{\\fracstr{$d2}}{\\fracstr{$wn2}}}}'
										+'{\\canfrac{[$wn1,$d1]}{[$d2,$wn2]}{[$numProd,$da]}}'
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
										+'{\\grp{\\frac{\\fracstr{$wn1}}{\\fracstr{$d1}}}{\\sign{&divide;}}{\\frac{\\fracstr{$wn2}}{\\fracstr{$d2}}}}'
										+'{\\html{&nbsp;}}'
										+'{\\str{Rewrite the problem as the product of the fractions.}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp{\\frac{\\fracstr{$wn1}}{\\fracstr{$d1}}}{\\sign{&times;}}{\\frac{\\fracstr{$d2}}{\\fracstr{$wn2}}}}'
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
                            "help": '\\rowgrp{\\row{\\str{Divide the numerator by the denominator, then make the quotient the mixed number whole and the remainder the mixed number numerator. \xA0}}}{\\row{\\str{\xA0}}}{\\row{\\frac{\\fracstr{$$numProd}}{\\fracstr{$$da}}}{\\row{\\str{\xA0 = \xA0}}}{\\row{\\mixed{\\fracstr{$ma}}{\\frac{\\fracstr{$na}}{\\fracstr{$da}}}}{\\row{css{\\str{answer:  \xA0}}{label_like margin-left-small}}{css{\\mixed{\\fracstr{$ma}}{\\frac{\\fracstr{$na}}{\\fracstr{$da}}}}{label_like}}}}'
                        }
                    }]
                }]
            },
            mixedAnswerThree: {
                title: 'Division of Mixed Numbers',
                children: [{
                    title: 'Main Answer',
                    children: [{
                        problem: '\\grp'
								+'{\\str{Solve: \xA0}}'
								+'{\\mixed{\\fracstr{$m1}}{\\frac{\\fracstr{$n1}}{\\fracstr{$d1}}}}'
								+'{\\sign{&divide;}}'
								+'{\\mixed{\\fracstr{$m2}}{\\frac{\\fracstr{$n2}}{\\fracstr{$d2}}}}'
								+'{\\sign{&divide;}}'
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
								+'{\\str{Solve: \xA0}}'
								+'{\\mixed{\\fracstr{$m1}}{\\frac{\\fracstr{$n1}}{\\fracstr{$d1}}}}'
								+'{\\sign{&divide;}}'
								+'{\\mixed{\\fracstr{$m2}}{\\frac{\\fracstr{$n2}}{\\fracstr{$d2}}}}'
								+'{\\sign{&divide;}}'
								+'{\\mixed{\\fracstr{$m3}}{\\frac{\\fracstr{$n3}}{\\fracstr{$d3}}}}',
                        answer: '\\rowgrp'
							+'{\\ins{Change the mixed numbers into improper fractions.}}'
							+'{\\html{&nbsp;}}'
							+'{\\grp{\\frac{\\input{$wn1}}{\\input{$wd1}}}{\\sign{&divide;}}{\\frac{\\input{$wn2}}{\\input{$wd2}}}{\\sign{&divide;}}{\\frac{\\input{$wn3}}{\\input{$wd3}}}}',
		                controls: {
		                    "checkAnswer": true,
		                    "help": true
		                }
                    }, {
                        problem: '\\grp'
								+'{\\str{Solve: \xA0}}'
								+'{\\mixed{\\fracstr{$m1}}{\\frac{\\fracstr{$n1}}{\\fracstr{$d1}}}}'
								+'{\\sign{&divide;}}'
								+'{\\mixed{\\fracstr{$m2}}{\\frac{\\fracstr{$n2}}{\\fracstr{$d2}}}}'
								+'{\\sign{&divide;}}'
								+'{\\mixed{\\fracstr{$m3}}{\\frac{\\fracstr{$n3}}{\\fracstr{$d3}}}}',
		                answer: '\\css'
								+'{\\rowgrp'
								+'{\\str{Change the mixed numbers into improper fractions.}}'
								+'{\\html{&nbsp;}}'
								+'{\\grp{\\frac{\\fracstr{$wn1}}{\\fracstr{$wd1}}}{\\sign{&divide;}}{\\frac{\\fracstr{$wn2}}{\\fracstr{$wd2}}}{\\sign{&divide;}}{\\frac{\\fracstr{$wn3}}{\\fracstr{$wd3}}}}'
								+'{\\html{&nbsp;}}'
								+'{\\ins{Rewrite the problem as the product of the fractions.}}'
								+'{\\html{&nbsp;}}'
								+'{\\grp{\\frac{\\input{$wn1}}{\\input{$wd1}}}{\\sign{&times;}}{\\frac{\\input{$wd2}}{\\input{$wn2}}}{\\sign{&times;}}{\\frac{\\input{$wd3}}{\\input{$wn3}}}}'
								+'}{well}',
			            controls: {
			                "checkAnswer": true,
			                "help": true
			            }
		            },  {
		                problem: '\\grp'
								+'{\\str{Solve: \xA0}}'
								+'{\\mixed{\\fracstr{$m1}}{\\frac{\\fracstr{$n1}}{\\fracstr{$d1}}}}'
								+'{\\sign{&divide;}}'
								+'{\\mixed{\\fracstr{$m2}}{\\frac{\\fracstr{$n2}}{\\fracstr{$d2}}}}'
								+'{\\sign{&divide;}}'
								+'{\\mixed{\\fracstr{$m3}}{\\frac{\\fracstr{$n3}}{\\fracstr{$d3}}}}',
						answer: '\\css'
							+'{\\rowgrp'
								+'{\\str{Change the mixed numbers into improper fractions.}}'
								+'{\\html{&nbsp;}}'
								+'{\\grp{\\frac{\\fracstr{$wn1}}{\\fracstr{$wd1}}}{\\sign{&divide;}}{\\frac{\\fracstr{$wn2}}{\\fracstr{$wd2}}}{\\sign{&divide;}}{\\frac{\\fracstr{$wn3}}{\\fracstr{$wd3}}}}'
								+'{\\html{&nbsp;}}'
								+'{\\str{Rewrite the problem as the product of the fractions.}}'
								+'{\\html{&nbsp;}}'
								+'{\\grp{\\frac{\\fracstr{$wn1}}{\\fracstr{$wd1}}}{\\sign{&times;}}{\\frac{\\fracstr{$wd2}}{\\fracstr{$wn2}}}{\\sign{&times;}}{\\frac{\\fracstr{$wd3}}{\\fracstr{$wn3}}}}'
								+'{\\canfrac{[$wn1,$wd1]}{[$wd2,$wn2]}{[$wd3,$wn3]}{[$wna,$wda]}}'
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
								+'{\\mixed{\\fracstr{$m2}}{\\frac{\\fracstr{$n2}}{\\fracstr{$d2}}}}'
								+'{\\sign{&divide;}}'
								+'{\\mixed{\\fracstr{$m3}}{\\frac{\\fracstr{$n3}}{\\fracstr{$d3}}}}',
						answer: '\\css'
								+'{\\rowgrp'
								+'{\\str{Change the mixed numbers into improper fractions.}}'
								+'{\\html{&nbsp;}}'
								+'{\\grp{\\frac{\\fracstr{$wn1}}{\\fracstr{$wd1}}}{\\sign{&divide;}}{\\frac{\\fracstr{$wn2}}{\\fracstr{$wd2}}}{\\sign{&divide;}}{\\frac{\\fracstr{$wn3}}{\\fracstr{$wd3}}}}'
								+'{\\html{&nbsp;}}'
								+'{\\str{Rewrite the problem as the product of the fractions.}}'
								+'{\\html{&nbsp;}}'
								+'{\\grp{\\frac{\\fracstr{$wn1}}{\\fracstr{$wd1}}}{\\sign{&times;}}{\\frac{\\fracstr{$wd2}}{\\fracstr{$wn2}}}{\\sign{&times;}}{\\frac{\\fracstr{$wd3}}{\\fracstr{$wn3}}}}'
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
                            "help": '\\rowgrp{\\row{\\str{Divide the numerator by the denominator, then make the quotient the mixed number whole and the remainder the mixed number numerator. \xA0}}}{\\row{\\str{\xA0}}}{\\row{\\frac{\\fracstr{$$numProd}}{\\fracstr{$$da}}}{\\row{\\str{\xA0 = \xA0}}}{\\row{\\mixed{\\fracstr{$ma}}{\\frac{\\fracstr{$na}}{\\fracstr{$da}}}}{\\row{css{\\str{answer:  \xA0}}{label_like margin-left-small}}{css{\\mixed{\\fracstr{$ma}}{\\frac{\\fracstr{$na}}{\\fracstr{$da}}}}{label_like}}}}'
                        }
                    }]
                }]
            },
            divMulThree: {
                title: 'Division of Mixed Numbers',
                children: [{
                    title: 'Main Answer',
                    children: [{
                        problem: '\\grp'
									+'{\\str{Solve: \xA0}}'
									+'{\\html{(}}{\\mixed{\\fracstr{$m1}}{\\frac{\\fracstr{$n1}}{\\fracstr{$d1}}}}'
									+'{\\sign{&divide;}}'
									+'{\\mixed{\\fracstr{$m2}}{\\frac{\\fracstr{$n2}}{\\fracstr{$d2}}}}{\\html{)}}'
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
									+'{\\str{Solve: \xA0}}'
									+'{\\html{(}}{\\mixed{\\fracstr{$m1}}{\\frac{\\fracstr{$n1}}{\\fracstr{$d1}}}}'
									+'{\\sign{&divide;}}'
									+'{\\mixed{\\fracstr{$m2}}{\\frac{\\fracstr{$n2}}{\\fracstr{$d2}}}}{\\html{)}}'
									+'{\\sign{&times;}}'
									+'{\\mixed{\\fracstr{$m3}}{\\frac{\\fracstr{$n3}}{\\fracstr{$d3}}}}',
                        answer: '\\rowgrp'
									+'{\\ins{Change the mixed numbers into improper fractions.}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp{\\html{(}}{\\frac{\\input{$wn1}}{\\input{$wd1}}}{\\sign{&divide;}}{\\frac{\\input{$wn2}}{\\input{$wd2}}}{\\html{)}}{\\sign{&times;}}{\\frac{\\input{$wn3}}{\\input{$wd3}}}}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }, {
                        problem: '\\grp'
									+'{\\str{Solve: \xA0}}'
									+'{\\html{(}}{\\mixed{\\fracstr{$m1}}{\\frac{\\fracstr{$n1}}{\\fracstr{$d1}}}}'
									+'{\\sign{&divide;}}'
									+'{\\mixed{\\fracstr{$m2}}{\\frac{\\fracstr{$n2}}{\\fracstr{$d2}}}}{\\html{)}}'
									+'{\\sign{&times;}}'
									+'{\\mixed{\\fracstr{$m3}}{\\frac{\\fracstr{$n3}}{\\fracstr{$d3}}}}',
                        answer: '\\css'
									+'{\\rowgrp'
										+'{\\str{Change the mixed numbers into improper fractions.}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp{\\html{(}}{\\frac{\\fracstr{$wn1}}{\\fracstr{$wd1}}}{\\sign{&divide;}}{\\frac{\\fracstr{$wn2}}{\\fracstr{$wd2}}}{\\html{)}}{\\sign{&times;}}{\\frac{\\fracstr{$wn3}}{\\fracstr{$wd3}}}}'
										+'{\\html{&nbsp;}}'
										+'{\\ins{Rewrite the problem as the product of the fractions.}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp{\\frac{\\input{$wn1}}{\\input{$wd1}}}{\\sign{&times;}}{\\frac{\\input{$wd2}}{\\input{$wn2}}}{\\sign{&times;}}{\\frac{\\input{$wn3}}{\\input{$wd3}}}}'
										+'}{well}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }, {
                        problem: '\\grp'
									+'{\\str{Solve: \xA0}}'
									+'{\\html{(}}{\\mixed{\\fracstr{$m1}}{\\frac{\\fracstr{$n1}}{\\fracstr{$d1}}}}'
									+'{\\sign{&divide;}}'
									+'{\\mixed{\\fracstr{$m2}}{\\frac{\\fracstr{$n2}}{\\fracstr{$d2}}}}{\\html{)}}'
									+'{\\sign{&times;}}'
									+'{\\mixed{\\fracstr{$m3}}{\\frac{\\fracstr{$n3}}{\\fracstr{$d3}}}}',
                        answer: '\\css'
									+'{\\rowgrp'
										+'{\\str{Change the mixed numbers into improper fractions.}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp{\\html{(}}{\\frac{\\fracstr{$wn1}}{\\fracstr{$wd1}}}{\\sign{&divide;}}{\\frac{\\fracstr{$wn2}}{\\fracstr{$wd2}}}{\\html{)}}{\\sign{&times;}}{\\frac{\\fracstr{$wn3}}{\\fracstr{$wd3}}}}'
										+'{\\html{&nbsp;}}'
										+'{\\str{Rewrite the problem as the product of the fractions.}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp{\\frac{\\fracstr{$wn1}}{\\fracstr{$wd1}}}{\\sign{&times;}}{\\frac{\\fracstr{$wd2}}{\\fracstr{$wn2}}}{\\sign{&times;}}{\\frac{\\fracstr{$wn3}}{\\fracstr{$wd3}}}}'
										+'{\\canfrac{[$wn1,$wd1]}{[$wd2,$wn2]}{[$wn3,$wd3]}{[$wna,$wda]}}'
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
            { m1: 3, n1: 1, d1: 3, m2: '', n2: 5, d2: 6, wn1: 10, wd1: 3, wn2:5, wd2:6, ma: 4, na: '',  da: '', wna: '4',  wda: '1', template: 'wholeFracAnswerTwo'},
            { m1: 4, n1: 2, d1: 5, m2: 2, n2: 2, d2: 3, wn1: 22, wn2:8, ma: 1, na: 13,  da: 20, rn1: 11, rd1:5, rn2: 3, rd2: 4, numProd: '33', template: 'mixedAnswerTwo'},
            { m1: 1, n1: 7, d1: 8, m2: 1, n2: 3, d2: 7, wn1: 15, wn2:10, ma: 1, na: 5,  da: 16, rn1: 3, rd1:8, rn2: 7, rd2: 2, numProd: '21', template: 'mixedAnswerTwo'},
            { m1: 4, n1: 1, d1: 2, m2: 6, n2: '', d2: '', wn1: 9, wd1: 2, wn2:6, wd2:1, ma: '', na: 3,  da: 4, wna: '3',  wda: '4', template: 'wholeFracAnswerTwo'},
            { m1: 7, n1:'', d1: '', m2: 2, n2: 1, d2: 3, wn1: 7, wd1:1, wn2:7, wd2:3, ma: 3, na: '',  da: '', wna: 3,  wda: 1, template: 'wholeFracAnswerTwo'},
            { m1: 2, n1:2, d1: 7, m2: 3, n2: 3, d2: 7, wn1: 16, wd1:7, wn2:24, wd2:7, ma: '', na: 2,  da: 3, wna: 2,  wda: 3, template: 'wholeFracAnswerTwo'},
            { m1: 10, n1: 1, d1: 5, m2: 3, n2: 3, d2: 4, wn1: 51, wn2:15, ma: 2, na: 18,  da: 25, rn1: 17, rd1:5, rn2: 4, rd2: 5, numProd: '68', template: 'mixedAnswerTwo'},
            { m1: 3, n1: 1, d1: 8, m2: 2, n2: 1, d2: 4, m3: 5, n3: '', d3: '', wn1: 25, wd1: 8, wn2:9, wd2:4, wn3:5, wd3:1, ma: '', na: 5,  da: 18, wna: 5,  wda: 18, template: 'fracAnswerThree'},
            { m1: 6, n1: 2, d1: 3, m2: 2, n2: 4, d2: 5, m3: 2, n3: 2, d3: 7, wn1: 20, wd1: 3, wn2:14, wd2:5, wn3:16, wd3:7, ma: 1, na: 1,  da: 24, wna: 25,  wda: 24, rn1: 5, rd1:3, rn2: 5, rd2: 1, rn3: 1, rd3:8, numProd: '25',  template: 'mixedAnswerThree'},
            { m1: '', n1: 28, d1: 45, m2: 2, n2: 5, d2: 8, m3: '', n3: 9, d3: 16, wn1: 28, wd1: 45, wn2:21, wd2:8, wn3:9, wd3:16, ma: '', na: 2,  da: 15, wna: 2,  wda: 15, template: 'divMulThree'},
            ];

    return dataUtils.build(desc, template, data);
}]);
