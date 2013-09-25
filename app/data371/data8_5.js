 /*global angular */

angular.module('mathSkills').service('data8_5', ['dataUtils', 'numberUtils', function (dataUtils, numberUtils) {
    var desc = {
            title: '8.5 Mixed Fraction Application Problems',
            path: '8.5-mixed-fraction-application-problems',
            children: []
        },
        template = {
            housesDiv1: {
                title: 'Mixed Fraction Application Problems',
                children: [{
                    title: 'Main Answer',
                    children: [{
                        problem: '\\image{$illustration}',
                        answer: '\\rowgrp{\\ins{There are houses worth a total of &#36;$firstunitwhole <sup>$firstunitn</sup>&#8260;<sub>$firstunitd</sub> million dollars in a subdivision. If each house is worth <sup>$secondunitn</sup>&#8260;<sub>$secondunitd</sub> of a million dollars, how many houses are in the subdivision?}}{\\grp{\\input{$number}}{html{houses}}}',
                        controls: {
                            "checkAnswer": true,
                            "help": false,
                            "workbook": true
                        }
                    }]
                }, {
                    title: 'Workbook',
                    children: [{
                        problem: '\\image{$illustration}',
                        answer: '\\wb{\\rowgrp{\\ins{You have been given the <strong>total</strong> value of the houses in the subdivision.  What is the total value of <span class=underline>one</span> house?}}{\\grp{\\frac{\\input{$secondunitn}}{\\input{$secondunitd}}}{html{million dollars}}}}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }, {
                        problem: '\\image{$illustration}',
                        answer:
                            '\\wb{' +
                                '\\rowgrp' + 
                                    '{\\choose{[' +
                                        '\\ins{Yes, each house is valued at <sup>$secondunitn</sup>&#8260;<sub>$secondunitd</sub> million dollars. To find out how many houses (each worth <sup>$secondunitn</sup>&#8260;<sub>$secondunitd</sub> million dollars) are in the subdivision, what operation must we use?},' +
                                        '\\ins{No, we are told that each house is valued at <sup>$secondunitn</sup>&#8260;<sub>$secondunitd</sub> million dollars. To find out how many houses (each worth <sup>$secondunitn</sup>&#8260;<sub>$secondunitd</sub> million dollars) are in the subdivision , what operation must we use?}' +    
                                    ']}{$$previousCorrect}}' +
                                    '{\\select{Division}{["Addition", "Subtraction", "Multiplication", "Division"]}}' +
                            '}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }, {
                        problem: '\\image{$illustration}',
                        answer: '\\wb{' +
                                '\\rowgrp' +
                                    '{\\choose{[' +
                                        '\\rowgrp{\\css{\\ins{Yes. Write a setup that will solve for the total number of houses in the subdivision.}}{width400}}{\\html{<br><br>}},' +
                                        '\\css{\\ins{We must divide to solve this problem. The given total value has been divided up into equal-sized parts&mdash;each worth <sup>$secondunitn</sup>&#8260;<sub>$secondunitd</sub> million dollars.  Each <sup>$secondunitn</sup>&#8260;<sub>$secondunitd</sub> million dollars represents one house. Write a setup that will solve for the number of houses in the subdivision.}}{width400}' +    
                                    ']}{$$previousCorrect}}' +                                    
									'{\\grp{\\select{$firstunitwhole $firstunitn/$firstunitd million dollars}{["$firstunitwhole $firstunitn/$firstunitd million dollars", "$secondunitn/$secondunitd million dollars"]}}{\\sign{&div;}}{\\select{$secondunitn/$secondunitd million dollars}{["$firstunitwhole $firstunitn/$firstunitd million dollars", "$secondunitn/$secondunitd million dollars"]}}}' +
                            	'}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }, {
                        problem: '\\image{$illustration}',
                        answer:
                            '\\rowgrp' +
                                '{\\choose{[' +
                                    '\\ins{Great! Now solve the problem.},' +
                                    '\\ins{This is a division problem.  When we set up a division problem, the <span class=underline>first number must be the total</span> that is being divided up.  In this case the total being divided up is the value of the subdivision (&#36;$firstunitwhole <sup>$firstunitn</sup>&#8260;<sub>$firstunitd</sub> million dollars), so the value of the subdivision is placed first in the division set up.  The correct setup is below. Now solve the problem.}' +    
                                ']}{$$previousCorrect}}' +
                                '{\\grp{\\html{&#36;}}{\\mixed{\\fracstr{$firstunitwhole}}{\\frac{\\fracstr{$firstunitn}}{\\fracstr{$firstunitd}}}}{\\html{million dollars}}{\\sign{&div;}}{\\frac{\\fracstr{$secondunitn}}{\\fracstr{$secondunitd}}}{\\html{million dollars}}{\\sign{=}}{\\input{$number}}}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }]
                }]
            },
            housesDiv2: {
                title: 'Mixed Fraction Application Problems',
                children: [{
                    title: 'Main Answer',
                    children: [{
                        problem: '\\image{$illustration}',
                        answer: '\\rowgrp{\\ins{$number houses in a subdivision are worth a total of &#36;$firstunitwhole <sup>$firstunitn</sup>&#8260;<sub>$firstunitd</sub> million dollars.  What is the value of each house (know that each house is priced exactly the same)?}}{\\grp{\\frac{\\input{$secondunitn}}{\\input{$secondunitd}}}{html{million dollars}}}',
                        controls: {
                            "checkAnswer": true,
                            "help": false,
                            "workbook": true
                        }
                    }]
                }, {
                    title: 'Workbook',
                    children: [{
                        problem: '\\image{$illustration}',
                        answer: 
                            '\\wb{' +
                                '\\rowgrp' +
                                    '{\\ins{You have been <span class=underline>given the total</span> number of houses in the subdivision.  How many houses are in the subdivision?}}' +
                                    '{\\grp{\\input{$number}}{\\html{houses}}}' +
                            '}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }, {
                        problem: '\\image{$illustration}',
                        answer: 
                            '\\wb{' +
                                '\\rowgrp' +
                                    '{\\choose{[' +
                                        '\\ins{Yes, there are $number houses in the subdivision. To find out the price of each house, what operation must we use?},' +
                                        '\\ins{No, we are told there are $number houses in the subdivision. To find out the price of each house, what operation must we use?}' +    
                                    ']}{$$previousCorrect}}' +
                                    '{\\select{Division}{["Addition", "Subtraction", "Multiplication", "Division"]}}' +
                            '}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }, {
                        problem: '\\image{$illustration}',
                        answer: '\\wb{' +
                                '\\rowgrp' +
                                    '{\\choose{[' +
                                        '\\rowgrp{\\css{\\ins{Yes, now write a setup that will solve this problem.}}{width400}}{\\html{<br><br>}},' +
                                        '\\css{\\ins{We must divide to solve this problem.  The <span class=underline>given total value of the subdivision</span> is being divided up into $number identically-priced houses.  Pick the set up that will solve for the value of each house.}}{width400}' +    
                                    ']}{$$previousCorrect}}' +                                    
									'{\\grp{\\select{$firstunitwhole $firstunitn/$firstunitd million dollars}{["$firstunitwhole $firstunitn/$firstunitd million dollars", "$number houses"]}}{\\sign{&div;}}{\\select{$number houses}{["$firstunitwhole $firstunitn/$firstunitd million dollars", "$number houses"]}}}' +
                            	'}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }, {
                        problem: '\\image{$illustration}',
                        answer: 
                            '\\wb{' +
                                '\\rowgrp' +
                                    '{\\choose{[' +
                                        '\\css{\\ins{Great! Now give the solution.}}{width400},' +
                                        '\\css{\\ins{This is a division problem.  When we set up a division problem, the <span class=underline>first number must be the total</span> that is being divided up.  In this case the total is the total value of the subdivision (&#36;$firstunitwhole <sup>$firstunitn</sup>&#8260;<sub>$firstunitd</sub> million dollars) and is placed first in the division set up.  The correct setup is shown below.<br><br>Now solve the problem.}}{width400}' +
                                    ']}{$$previousCorrect}}' +
                                    '{\\rowgrp{\\grp{\\html{&#36;}}{\\mixed{\\fracstr{$firstunitwhole}}{\\frac{\\fracstr{$firstunitn}}{\\fracstr{$firstunitd}}}}{\\html{million dollars}}{\\sign{&div;}}{\\frac{\\fracstr{$number}}{\\fracstr{1}}}{\\html{houses}}}{\\html{&nbsp;}}{\\grp{\\sign{=}}{\\grp{\\frac{\\input{$secondunitn}}{\\input{$secondunitd}}}{\\html{million dollars}}{\\html{/}}{\\html{house}}}}}' +
                            '}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }]
                }]
            },
            housesMul: {
                title: 'Mixed Fraction Application Problems',
                children: [{
                    title: 'Main Answer',
                    children: [{
                        problem: '\\image{$illustration}',
                        answer: '\\rowgrp' + 
									'{\\ins{If $number houses have been built, and each house is priced at <sup>$secondunitn</sup>&#8260;<sub>$secondunitd</sub> million dollars, what is the total value of all the houses in the subdivision combined?}}' +
									'{\\html{&nbsp;}}' + 
									'{\\grp{\\html{&#36;}}{\\mixed{\\input{$firstunitwhole}}{\\frac{\\input{$firstunitn}}{\\input{$firstunitd}}}}{\\html{million dollars}}}',
                        controls: {
                            "checkAnswer": true,
                            "help": false,
                            "workbook": true
                        }
                    }]
                }, {
                    title: 'Workbook',
                    children: [{
                        problem: '\\image{$illustration}',
                        answer: '\\wb{' +
									'\\rowgrp' +
										'{\\ins{You have been <span class=underline>given the total</span> number of houses in the subdivision.  How many houses are in the subdivision?}}' +
										'{\\grp{\\input{$number}}{\\html{houses}}}' +
								'}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }, {
                        problem: '\\image{$illustration}',
                        answer: '\\wb{' +
									'\\rowgrp' +
										'{\\choose{[' +
											'\\ins{Yes, there are $number houses in the subdivision. To find out the total combined value of all the houses in the subdivision, what operation must we use?},' +
											'\\ins{No, we are told there are $number houses in the subdivision. To find out the total combined value of all the houses in the subdivision, what operation must we use?}' +    
										']}{$$previousCorrect}}' +
										'{\\select{Multiplication}{["Addition", "Subtraction", "Multiplication", "Division"]}}' +
								'}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }, {
                        problem: '\\image{$illustration}',
                        answer: '\\wb{' +
									'\\rowgrp' +
										'{\\choose{[' +
											'\\rowgrp{\\css{\\ins{Yes, now write a setup that will solve this problem.}}{width400}}{\\html{<br><br>}},' +
											'\\css{\\ins{We must multiply to solve this problem.  The <span class=underline>given value of each house in the subdivision</span> is being multiplied by $number houses.  Pick the set up that will solve for the total combined value of the houses in the subdivision.}}{width400}' +    
										']}{$$previousCorrect}}' +                                    
										'{\\grp{\\select{$secondunitn/$secondunitd million dollars}{["$secondunitn/$secondunitd million dollars", "$number houses"]}}{\\sign{&bull;}}{\\select{$number houses}{["$secondunitn/$secondunitd million dollars", "$number houses"]}}}' +
                            	'}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }, {
                        problem: '\\image{$illustration}',
                        answer: '\\wb{' +
                                '\\rowgrp' +
                                    '{\\choose{[' +
                                        '\\rowgrp{\\css{\\ins{Now solve the problem.}}{width400}}{\\html{<br><br>}},' +
                                        '\\css{\\ins{This is a *repeated addition* or multiplication problem.  The value of each house, <sup>$secondunitn</sup>&#8260;<sub>$secondunitd</sub> million dollars, needs to be repeated $number times. The correct setup is shown below. Now solve the problem.}}{width400}' +
                                    ']}{$$previousCorrect}}' +
                                    '{\\grp{\\frac{\\str{$secondunitn}}{\\str{$secondunitd}}}{\\html{million dollars}}{\\sign{&bull;}}{\\html{$number}}{\\html{houses}}{\\sign{=}}{\\grp{\\html{&#36;}}{\\mixed{\\input{$firstunitwhole}}{\\frac{\\input{$firstunitn}}{\\input{$firstunitd}}}}{\\html{million dollars}}}}' +
                            '}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }]
                }]
            },
            cookiesDiv1: {
                title: 'Mixed Fraction Application Problems',
                children: [{
                    title: 'Main Answer',
                    children: [{
                        problem: '\\image{$illustration}',
                        answer: '\\rowgrp{\\ins{There are cookies weighing a total of $firstunitwhole <sup>$firstunitn</sup>&#8260;<sub>$firstunitd</sub> pounds in a jar. How many $secondunitwhole<sup>$secondunitn</sup>&#8260;<sub>$secondunitd</sub>-pound portions of cookies are in the jar?}}{\\grp{\\input{$number}}{html{portions}}}',
                        controls: {
                            "checkAnswer": true,
                            "help": false,
                            "workbook": true
                        }
                    }]
                }, {
                    title: 'Workbook',
                    children: [{
                        problem: '\\image{$illustration}',
                        answer: '\\wb{\\rowgrp{\\ins{You have been given the <strong>total</strong> weight of the cookies in the jar.  What is the weight of <span class=underline>one</span> portion?}}{\\grp{\\mixed{\\input{$secondunitwhole}}{\\frac{\\input{$secondunitn}}{\\input{$secondunitd}}}}{html{pounds}}}}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }, {
                        problem: '\\image{$illustration}',
                        answer:
                            '\\wb{' +
                                '\\rowgrp' + 
                                    '{\\choose{[' +
                                        '\\ins{Yes, each portion weigh s $secondunitwhole<sup>$secondunitn</sup>&#8260;<sub>$secondunitd</sub> pounds. To find out how many cookie portions (each weighing $secondunitwhole<sup>$secondunitn</sup>&#8260;<sub>$secondunitd</sub> pounds) are in the jar, what operation must we use?},' +
                                        '\\ins{No, we are told that each portion weighs $secondunitwhole<sup>$secondunitn</sup>&#8260;<sub>$secondunitd</sub> pounds. To find out how many cookie portions (each weighing $secondunitwhole<sup>$secondunitn</sup>&#8260;<sub>$secondunitd</sub> pounds) are in the jar , what operation must we use?}' +    
                                    ']}{$$previousCorrect}}' +
                                    '{\\select{Division}{["Addition", "Subtraction", "Multiplication", "Division"]}}' +
                            '}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }, {
                        problem: '\\image{$illustration}',
                        answer: '\\wb{' +
                                '\\rowgrp' +
                                    '{\\choose{[' +
                                        '\\rowgrp{\\css{\\ins{Yes. Write a setup that will solve for the number of cookie portions each weighing $secondunitwhole<sup>$secondunitn</sup>&#8260;<sub>$secondunitd</sub> pounds in the jar.}}{width400}}{\\html{<br><br>}},' +
                                        '\\css{\\ins{We must divide to solve this problem. The given total weight of cookies has been divided up into equal-sized portions&mdash;each weighing $secondunitwhole<sup>$secondunitn</sup>&#8260;<sub>$secondunitd</sub> pounds.  Each $secondunitwhole<sup>$secondunitn</sup>&#8260;<sub>$secondunitd</sub> pounds represents one portion. Write a setup that will solve for the number of cookie portions in the jar.}}{width400}' +    
                                    ']}{$$previousCorrect}}' +                                    
									'{\\grp{\\select{$firstunitwhole $firstunitn/$firstunitd pounds}{["$firstunitwhole $firstunitn/$firstunitd pounds", "$secondunitwhole $secondunitn/$secondunitd pounds"]}}{\\sign{&div;}}{\\select{$secondunitwhole $secondunitn/$secondunitd pounds}{["$firstunitwhole $firstunitn/$firstunitd pounds", "$secondunitwhole $secondunitn/$secondunitd pounds"]}}}' +
                            	'}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }, {
                        problem: '\\image{$illustration}',
                        answer:
                            '\\rowgrp' +
                                '{\\choose{[' +
                                    '\\ins{Great! Now solve the problem.},' +
                                    '\\ins{This is a division problem.  When we set up a division problem, the <span class=underline>first number must be the total</span> that is being divided up.  In this case the total being divided up is the weight in the jar ($firstunitwhole <sup>$firstunitn</sup>&#8260;<sub>$firstunitd</sub> pounds), so the weight in the jar is placed first in the division set up.  The correct setup is below. Now solve the problem.}' +    
                                ']}{$$previousCorrect}}' +
                                '{\\grp{\\mixed{\\fracstr{$firstunitwhole}}{\\frac{\\fracstr{$firstunitn}}{\\fracstr{$firstunitd}}}}{\\html{pounds}}{\\sign{&div;}}{\\mixed{\\fracstr{$secondunitwhole}}{\\frac{\\fracstr{$secondunitn}}{\\fracstr{$secondunitd}}}}{\\html{pounds}}{\\sign{=}}{\\input{$number}}}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }]
                }]
            },
            cookiesDiv2: {
                title: 'Mixed Fraction Application Problems',
                children: [{
                    title: 'Main Answer',
                    children: [{
                        problem: '\\image{$illustration}',
                        answer: '\\rowgrp{\\ins{$number portions of cookies in a jar weigh a total of $firstunitwhole <sup>$firstunitn</sup>&#8260;<sub>$firstunitd</sub> pounds.  What is the weight of each portion (given that each portion weighs exactly the same)?}}{\\grp{\\mixed{\\input{$secondunitwhole}}{\\frac{\\input{$secondunitn}}{\\input{$secondunitd}}}}{\\html{pounds}}}',
                        controls: {
                            "checkAnswer": true,
                            "help": false,
                            "workbook": true
                        }
                    }]
                }, {
                    title: 'Workbook',
                    children: [{
                        problem: '\\image{$illustration}',
                        answer: 
                            '\\wb{' +
                                '\\rowgrp' +
                                    '{\\ins{You have been <span class=underline>given the total</span> weight of the cookies in the jar, and the number of portions in the jar.  What is the number of portions of cookies?}}' +
                                    '{\\grp{\\input{$number}}{\\html{portions}}}' +
                            '}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }, {
                        problem: '\\image{$illustration}',
                        answer: 
                            '\\wb{' +
                                '\\rowgrp' +
                                    '{\\choose{[' +
                                        '\\ins{Yes, there are $number portions of cookies in the jar. To find out the weight of each portion, what operation must we use?},' +
                                        '\\ins{No, we are told there are $number portions of cookies in the jar. To find out the weight of each portion, what operation must we use?}' +    
                                    ']}{$$previousCorrect}}' +
                                    '{\\select{Division}{["Addition", "Subtraction", "Multiplication", "Division"]}}' +
                            '}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }, {
                        problem: '\\image{$illustration}',
                        answer: '\\wb{' +
                                '\\rowgrp' +
                                    '{\\choose{[' +
                                        '\\rowgrp{\\css{\\ins{Yes, now write a setup that will solve this problem.}}{width400}}{\\html{<br><br>}},' +
                                        '\\css{\\ins{We must divide to solve this problem.  The <span class=underline>given total weight</span> of the cookies in the jar is being divided up into $number equal portions of cookies.  Pick the set up that will solve for the weight of each portion.}}{width400}' +    
                                    ']}{$$previousCorrect}}' +                                    
									'{\\grp{\\select{$firstunitwhole $firstunitn/$firstunitd pounds}{["$firstunitwhole $firstunitn/$firstunitd pounds", "$number portions"]}}{\\sign{&div;}}{\\select{$number portions}{["$firstunitwhole $firstunitn/$firstunitd pounds", "$number portions"]}}}' +
                            	'}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }, {
                        problem: '\\image{$illustration}',
                        answer: 
                            '\\wb{' +
                                '\\rowgrp' +
                                    '{\\choose{[' +
                                        '\\css{\\ins{Great! Now give the solution.}}{width400},' +
                                        '\\css{\\ins{This is a division problem.  When we set up a division problem, the <span class=underline>first number must be the total</span> that is being divided up.  In this case the total is the total weight of the cookies in the jar ($firstunitwhole <sup>$firstunitn</sup>&#8260;<sub>$firstunitd</sub> pounds) and is placed first in the division set up.  The correct setup is shown below.<br><br>Now solve the problem.}}{width400}' +
                                    ']}{$$previousCorrect}}' +
                                    '{\\rowgrp{\\grp{\\mixed{\\fracstr{$firstunitwhole}}{\\frac{\\fracstr{$firstunitn}}{\\fracstr{$firstunitd}}}}{\\html{pounds}}{\\sign{&div;}}{\\frac{\\fracstr{$number}}{\\fracstr{1}}}{\\html{portions}}}{\\html{&nbsp;}}{\\grp{\\sign{=}}{\\grp{\\mixed{\\input{$secondunitwhole}}{\\frac{\\input{$secondunitn}}{\\input{$secondunitd}}}}{\\html{pounds}}{\\html{/}}{\\html{portion}}}}}' +
                            '}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }]
                }]
            },
            cookiesMul: {
                title: 'Mixed Fraction Application Problems',
                children: [{
                    title: 'Main Answer',
                    children: [{
                        problem: '\\image{$illustration}',
                        answer: '\\rowgrp' + 
									'{\\ins{If $number portions of cookies are in the jar, and each portion weighs $secondunitwhole<sup>$secondunitn</sup>&#8260;<sub>$secondunitd</sub> pounds, what is the total weight of the cookies in the jar?}}' +
									'{\\html{&nbsp;}}' + 
									'{\\grp{\\mixed{\\input{$firstunitwhole}}{\\frac{\\input{$firstunitn}}{\\input{$firstunitd}}}}{\\html{pounds}}}',
                        controls: {
                            "checkAnswer": true,
                            "help": false,
                            "workbook": true
                        }
                    }]
                }, {
                    title: 'Workbook',
                    children: [{
                        problem: '\\image{$illustration}',
                        answer: '\\wb{' +
									'\\rowgrp' +
										'{\\ins{You have been <span class=underline>given the number</span> of portions of cookies in the jar.  Each portion weighs $secondunitwhole<sup>$secondunitn</sup>&#8260;<sub>$secondunitd</sub> pounds.  How many portions of cookies are in the jar?}}' +
										'{\\grp{\\input{$number}}{\\html{portions of cookies}}}' +
								'}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }, {
                        problem: '\\image{$illustration}',
                        answer: '\\wb{' +
									'\\rowgrp' +
										'{\\choose{[' +
											'\\ins{Yes, there are $number portions of cookies in the jar. To find out the total combined weight of all the cookies in the jar, what operation must we use?},' +
											'\\ins{No, we are told there are $number portions of cookies in the jar. To find out the total combined weight of all the cookies in the jar, what operation must we use?}' +    
										']}{$$previousCorrect}}' +
										'{\\select{Multiplication}{["Addition", "Subtraction", "Multiplication", "Division"]}}' +
								'}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }, {
                        problem: '\\image{$illustration}',
                        answer: '\\wb{' +
									'\\rowgrp' +
										'{\\choose{[' +
											'\\rowgrp{\\css{\\ins{Yes, now write a setup that will solve this problem.}}{width400}}{\\html{<br><br>}},' +
											'\\css{\\ins{We must multiply to solve this problem.  The <span class=underline>given weight of each portion</span> of cookies in the jar is being multiplied by $number portions of cookies.  Pick the set up that will solve for the total combined weight of the cookies in the jar.}}{width400}' +    
										']}{$$previousCorrect}}' +                                    
										'{\\grp{\\select{$secondunitwhole $secondunitn/$secondunitd}{["$secondunitwhole $secondunitn/$secondunitd", "$number"]}}{\\sign{&bull;}}{\\select{$number}{["$secondunitwhole $secondunitn/$secondunitd", "$number"]}}}' +
                            	'}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }, {
                        problem: '\\image{$illustration}',
                        answer: '\\wb{' +
                                '\\rowgrp' +
                                    '{\\choose{[' +
                                        '\\rowgrp{\\css{\\ins{Now solve the problem.}}{width400}}{\\html{<br><br>}},' +
                                        '\\css{\\ins{This is a *repeated addition* or multiplication problem.  The weight of each portion of cookies, $secondunitwhole<sup>$secondunitn</sup>&#8260;<sub>$secondunitd</sub> pounds, needs to be repeated $number times. The correct setup is shown below. Now solve the problem.}}{width400}' +
                                    ']}{$$previousCorrect}}' +
                                    '{\\grp{\\mixed{\\fracstr{$secondunitwhole}}{\\frac{\\str{$secondunitn}}{\\str{$secondunitd}}}}{\\sign{&bull;}}{\\html{$number}}{\\sign{=}}{\\grp{\\mixed{\\input{$firstunitwhole}}{\\frac{\\input{$firstunitn}}{\\input{$firstunitd}}}}{\\html{pounds}}}}' +
                            '}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }]
                }]
            },
            pagesDiv1: {
                title: 'Mixed Fraction Application Problems',
                children: [{
                    title: 'Main Answer',
                    children: [{
                        problem: '\\image{$illustration}',
                        answer: '\\rowgrp{\\ins{There are a total of $firstunitwhole <sup>$firstunitn</sup>&#8260;<sub>$firstunitd</sub> typed pages in the tray. How many minutes did it take to type the pages in the tray if the typist types $secondunitwhole<sup>$secondunitn</sup>&#8260;<sub>$secondunitd</sub> of a page per minute?}}{\\grp{\\input{$number}}{html{minutes}}}',
                        controls: {
                            "checkAnswer": true,
                            "help": false,
                            "workbook": true
                        }
                    }]
                }, {
                    title: 'Workbook',
                    children: [{
                        problem: '\\image{$illustration}',
                        answer: '\\wb{\\rowgrp{\\ins{You have been given the <strong>total</strong> number of typed pages in the tray.  What is the <span class=underline>total</span>?}}{\\grp{\\mixed{\\input{$firstunitwhole}}{\\frac{\\input{$firstunitn}}{\\input{$firstunitd}}}}{html{typed pages}}}}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }, {
                        problem: '\\image{$illustration}',
                        answer:
                            '\\wb{' +
                                '\\rowgrp' + 
                                    '{\\choose{[' +
                                        '\\ins{Yes, the total is $firstunitwhole<sup>$firstunitn</sup>&#8260;<sub>$firstunitd</sub> typed pages. To find out how many minutes it takes the typist to type $firstunitwhole<sup>$firstunitn</sup>&#8260;<sub>$firstunitd</sub> pages at the rate of $secondunitwhole<sup>$secondunitn</sup>&#8260;<sub>$secondunitd</sub> of a page per minute, what operation must we use?},' +
                                        '\\ins{No, we are told that the total is $firstunitwhole<sup>$firstunitn</sup>&#8260;<sub>$firstunitd</sub> typed pages. To find out how many minutes it takes the typist to type $firstunitwhole<sup>$firstunitn</sup>&#8260;<sub>$firstunitd</sub> pages at the rate of $secondunitwhole<sup>$secondunitn</sup>&#8260;<sub>$secondunitd</sub> of a page per minute, what operation must we use?}' +    
                                    ']}{$$previousCorrect}}' +
                                    '{\\select{Division}{["Addition", "Subtraction", "Multiplication", "Division"]}}' +
                            '}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }, {
                        problem: '\\image{$illustration}',
                        answer: '\\wb{' +
                                '\\rowgrp' +
                                    '{\\choose{[' +
                                        '\\rowgrp{\\css{\\ins{Yes. Write a setup that will solve for the number of minutes required to type $firstunitwhole<sup>$firstunitn</sup>&#8260;<sub>$firstunitd</sub> pages at $secondunitwhole<sup>$secondunitn</sup>&#8260;<sub>$secondunitd</sub> of a page per minute.}}{width400}}{\\html{<br><br>}},' +
                                        '\\css{\\ins{We must divide to solve this problem. The given total number of pages ($firstunitwhole<sup>$firstunitn</sup>&#8260;<sub>$firstunitd</sub>) were typed at a rate of $secondunitwhole<sup>$secondunitn</sup>&#8260;<sub>$secondunitd</sub> of a page per minute.  Each $secondunitwhole<sup>$secondunitn</sup>&#8260;<sub>$secondunitd</sub> of a page represents one minute of typing. Write a setup that will solve for the number of $secondunitwhole<sup>$secondunitn</sup>&#8260;<sub>$secondunitd</sub> of a page in $firstunitwhole<sup>$firstunitn</sup>&#8260;<sub>$firstunitd</sub> pages.}}{width400}' +    
                                    ']}{$$previousCorrect}}' +                                    
									'{\\grp{\\select{$firstunitwhole $firstunitn/$firstunitd pages}{["$firstunitwhole $firstunitn/$firstunitd pages", "$secondunitwhole $secondunitn/$secondunitd of a page"]}}{\\sign{&div;}}{\\select{$secondunitwhole $secondunitn/$secondunitd of a page}{["$firstunitwhole $firstunitn/$firstunitd pages", "$secondunitwhole $secondunitn/$secondunitd of a page"]}}}' +
                            	'}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }, {
                        problem: '\\image{$illustration}',
                        answer:
                            '\\rowgrp' +
                                '{\\choose{[' +
                                    '\\rowgrp{\\css{\\ins{Great! Now solve the problem.}}{width400}}{\\html{<br><br>}},' +
                                    '\\css{\\ins{This is a division problem.  When we set up a division problem, the <span class=underline>first number must be the total</span> that is being divided up.  In this case the total being divided up is the number of pages in the tray ($firstunitwhole <sup>$firstunitn</sup>&#8260;<sub>$firstunitd</sub> pages), so the number of pages in the tray is placed first in the division set up.  The correct setup is below. Now solve the problem.}}{width400}' +    
                                ']}{$$previousCorrect}}' +
                                '{\\grp{\\mixed{\\fracstr{$firstunitwhole}}{\\frac{\\fracstr{$firstunitn}}{\\fracstr{$firstunitd}}}}{\\html{pages}}{\\sign{&div;}}{\\mixed{\\fracstr{$secondunitwhole}}{\\frac{\\fracstr{$secondunitn}}{\\fracstr{$secondunitd}}}}{\\html{pages/minute}}{\\sign{=}}{\\input{$number}}{\\html{minutes}}}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }]
                }]
            },
            pagesDiv2: {
                title: 'Mixed Fraction Application Problems',
                children: [{
                    title: 'Main Answer',
                    children: [{
                        problem: '\\image{$illustration}',
						answer: '\\rowgrp{\\ins{If the typist typed $firstunitwhole <sup>$firstunitn</sup>&#8260;<sub>$firstunitd</sub> pages in $number minutes, how many pages per minute did the typist type?}}{\\grp{\\mixed{\\input{$secondunitwhole}}{\\frac{\\input{$secondunitn}}{\\input{$secondunitd}}}}{\\html{pages per minute}}}',
                        controls: {
                            "checkAnswer": true,
                            "help": false,
                            "workbook": true
                        }
                    }]
                }, {
                    title: 'Workbook',
                    children: [{
                        problem: '\\image{$illustration}',
                        answer: 
                            '\\wb{' +
                                '\\rowgrp' +
                                    '{\\ins{You have been <span class=underline>given the total</span> number of pages the typist typed.  What is the total number of pages?}}' +
                                    '{\\grp{\\mixed{\\input{$firstunitwhole}}{\\frac{\\input{$firstunitn}}{\\input{$firstunitd}}}}{\\html{pages}}}' +
                            '}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }, {
                        problem: '\\image{$illustration}',
                        answer:
                            '\\wb{' +
                                '\\rowgrp' + 
                                    '{\\choose{[' +
                                        '\\ins{Yes, the total is $firstunitwhole<sup>$firstunitn</sup>&#8260;<sub>$firstunitd</sub> typed pages. To find out how many pages a minute the typist typed, what operation must we use?},' +
                                        '\\ins{No, we are told that the total is $firstunitwhole<sup>$firstunitn</sup>&#8260;<sub>$firstunitd</sub> typed pages. To find out how many pages a minute the typist typed, what operation must we use?}' +    
                                    ']}{$$previousCorrect}}' +
                                    '{\\select{Division}{["Addition", "Subtraction", "Multiplication", "Division"]}}' +
                            '}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }, {
                        problem: '\\image{$illustration}',
                        answer: '\\wb{' +
                                '\\rowgrp' +
                                    '{\\choose{[' +
                                        '\\rowgrp{\\css{\\ins{Yes. Write a setup that will solve for the number of pages per minute that must be typed in order to type $firstunitwhole<sup>$firstunitn</sup>&#8260;<sub>$firstunitd</sub> pages in $number minutes.}}{width400}}{\\html{<br><br>}},' +
                                        '\\css{\\ins{We must divide to solve this problem. The given total number of pages ($firstunitwhole<sup>$firstunitn</sup>&#8260;<sub>$firstunitd</sub>) were typed in $number minutes.  What fraction of a page was typed in one minute?  Write a setup that will solve for the fraction of $firstunitwhole<sup>$firstunitn</sup>&#8260;<sub>$firstunitd</sub> pages that could be typed in one minute.}}{width400}' +    
                                    ']}{$$previousCorrect}}' +                                    
									'{\\grp{\\select{$firstunitwhole $firstunitn/$firstunitd pages}{["$firstunitwhole $firstunitn/$firstunitd pages", "$number minutes"]}}{\\sign{&div;}}{\\select{$number minutes}{["$firstunitwhole $firstunitn/$firstunitd pages", "$number minutes"]}}}' +
                            	'}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }, {
                        problem: '\\image{$illustration}',
                        answer:
                            '\\rowgrp' +
                                '{\\choose{[' +
                                    '\\rowgrp{\\css{\\ins{Great! Now give the solution.}}{width400}}{\\html{<br><br>}},' +
                                    '\\css{\\ins{This is a division problem.  When we set up a division problem, the <span class=underline>first number must be the total</span> that is being divided up.  In this case the total being divided up is the number of pages in the tray ($firstunitwhole <sup>$firstunitn</sup>&#8260;<sub>$firstunitd</sub> pages), so the number of pages in the tray is placed first in the division set up.  The correct setup is below. Now solve the problem.}}{width400}' +    
                                ']}{$$previousCorrect}}' +
                                '{\\grp{\\mixed{\\fracstr{$firstunitwhole}}{\\frac{\\fracstr{$firstunitn}}{\\fracstr{$firstunitd}}}}{\\html{pages}}{\\sign{&div;}}{\\html{$number}}{\\html{ minutes}}{\\sign{=}}{\\mixed{\\fracstr{$secondunitwhole}}{\\frac{\\fracstr{$secondunitn}}{\\fracstr{$secondunitd}}}}{\\html{pages/minute}}}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }]
                }]
            },
            pagesMul: {
                title: 'Mixed Fraction Application Problems',
                children: [{
                    title: 'Main Answer',
                    children: [{
                        problem: '\\image{$illustration}',
						answer: '\\rowgrp{\\ins{If the typist typed for $number minutes at a rate of $secondunitwhole <sup>$secondunitn</sup>&#8260;<sub>$secondunitd</sub> of a page per minute, how many pages did the typist type?}}{\\grp{\\mixed{\\input{$firstunitwhole}}{\\frac{\\input{$firstunitn}}{\\input{$firstunitd}}}}{\\html{pages}}}',
                        controls: {
                            "checkAnswer": true,
                            "help": false,
                            "workbook": true
                        }
                    }]
                }, {
                    title: 'Workbook',
                    children: [{
                        problem: '\\image{$illustration}',
                        answer: '\\wb{' +
									'\\rowgrp' +
										'{\\ins{You have been <span class=underline>given the total</span> number of minutes the typist typed.  How many minutes did the typist type?}}' +
										'{\\grp{\\input{$number}}{\\html{minutes}}}' +
								'}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }, {
                        problem: '\\image{$illustration}',
						answer:
                            '\\wb{' +
                                '\\rowgrp' + 
                                    '{\\choose{[' +
                                        '\\ins{Yes, the typist typed for $number minutes. To find out how many pages the typist typed if the typist typed for $number minutes at a rate of $secondunitwhole<sup>$secondunitn</sup>&#8260;<sub>$secondunitd</sub> of a page a minute, what operation must we use?},' +
                                        '\\ins{No, we are told that the typist typed for $number minutes. To find out how many pages the typist typed if the typist typed $number minutes at a rate of $secondunitwhole<sup>$secondunitn</sup>&#8260;<sub>$secondunitd</sub> of a page a minute, what operation must we use?}' +    
                                    ']}{$$previousCorrect}}' +
                                    '{\\select{Multiplication}{["Addition", "Subtraction", "Multiplication", "Division"]}}' +
                            '}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }, {
                        problem: '\\image{$illustration}',
                        answer: '\\wb{' +
                                '\\rowgrp' +
                                    '{\\choose{[' +
                                        '\\rowgrp{\\css{\\ins{Yes. Write a setup that will solve for the number of pages typed if the typist types $number minutes at the rate of $secondunitwhole<sup>$secondunitn</sup>&#8260;<sub>$secondunitd</sub> pages per minute.}}{width400}}{\\html{<br><br>}},' +
                                        '\\css{\\ins{We must multiply to solve this problem. The typist types $number minutes.  If the typist types at the rate of $secondunitwhole<sup>$secondunitn</sup>&#8260;<sub>$secondunitd</sub> pages per minute, how many pages does the typist type?  Write a setup that will solve for the total number of pages the typist typed.}}{width400}' +    
                                    ']}{$$previousCorrect}}' +                                    
									'{\\grp{\\select{["$number minutes", "$secondunitwhole $secondunitn/$secondunitd pages per minute"]}{["$number minutes", "$secondunitwhole $secondunitn/$secondunitd pages per minute"]}}{\\sign{&bull;}}{\\select{["$secondunitwhole $secondunitn/$secondunitd pages per minute", "$number minutes"]}{["$number minutes", "$secondunitwhole $secondunitn/$secondunitd pages per minute"]}}}' +
                            	'}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }, {
                        problem: '\\image{$illustration}',
                        answer: '\\wb{' +
                                '\\rowgrp' +
                                    '{\\choose{[' +
                                        '\\rowgrp{\\css{\\ins{Now solve the problem.}}{width400}}{\\html{<br><br>}},' +
                                        '\\css{\\ins{This is a *repeated addition* or multiplication problem.  The number of pages the typist can type in one minute ($secondunitwhole<sup>$secondunitn</sup>&#8260;<sub>$secondunitd</sub> pages), needs to be repeated $number times. The correct setup is shown below. Now solve the problem.}}{width400}' +
                                    ']}{$$previousCorrect}}' +
                                    '{\\grp{\\html{$number}}{\\html{minutes}}{\\sign{&bull;}}{\\mixed{\\fracstr{$secondunitwhole}}{\\frac{\\str{$secondunitn}}{\\str{$secondunitd}}}}{\\html{pages per minute}}{\\sign{=}}{\\grp{\\mixed{\\input{$firstunitwhole}}{\\frac{\\input{$firstunitn}}{\\input{$firstunitd}}}}{\\html{pages}}}}' +
                            '}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }]
                }]
            },
			tomCanDiv1: {
                title: 'Mixed Fraction Application Problems',
                children: [{
                    title: 'Main Answer',
                    children: [{
                        problem: '\\image{$illustration}',
                        answer: '\\rowgrp{\\ins{There are cans of tomatos weighing a total of $firstunitwhole <sup>$firstunitn</sup>&#8260;<sub>$firstunitd</sub> pounds in a box. How many $secondunitwhole<sup>$secondunitn</sup>&#8260;<sub>$secondunitd</sub> pound cans of tomatos are in the box?}}{\\grp{\\input{$number}}}',
                        controls: {
                            "checkAnswer": true,
                            "help": false,
                            "workbook": true
                        }
                    }]
                }, {
                    title: 'Workbook',
                    children: [{
                        problem: '\\image{$illustration}',
                        answer: '\\wb{\\rowgrp{\\ins{You have been given the <strong>total</strong> weight of the cans of tomatos in the box.  What is the weight of <span class=underline>one</span> can?}}{\\grp{\\mixed{\\input{$secondunitwhole}}{\\frac{\\input{$secondunitn}}{\\input{$secondunitd}}}}{html{pounds}}}}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }, {
                        problem: '\\image{$illustration}',
                        answer:
                            '\\wb{' +
                                '\\rowgrp' + 
                                    '{\\choose{[' +
                                        '\\ins{Yes, each can weighs $secondunitwhole<sup>$secondunitn</sup>&#8260;<sub>$secondunitd</sub> pounds. To find out how many cans (each weighing $secondunitwhole<sup>$secondunitn</sup>&#8260;<sub>$secondunitd</sub> pounds) are in the box, what operation must we use?},' +
                                        '\\ins{No, we are told that each can weighs $secondunitwhole<sup>$secondunitn</sup>&#8260;<sub>$secondunitd</sub> pounds. To find out how many cans (each weighing $secondunitwhole<sup>$secondunitn</sup>&#8260;<sub>$secondunitd</sub> pounds) are in the box , what operation must we use?}' +    
                                    ']}{$$previousCorrect}}' +
                                    '{\\select{Division}{["Addition", "Subtraction", "Multiplication", "Division"]}}' +
                            '}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }, {
                        problem: '\\image{$illustration}',
                        answer: '\\wb{' +
                                '\\rowgrp' +
                                    '{\\choose{[' +
                                        '\\rowgrp{\\css{\\ins{Yes. Choose the setup that will solve for the number of cans each weighing $secondunitwhole<sup>$secondunitn</sup>&#8260;<sub>$secondunitd</sub> pounds in the box.}}{width400}}{\\html{<br><br>}},' +
                                        '\\css{\\ins{We must divide to solve this problem. The given total weight of the box of tomatos is divided up into cans each weighing $secondunitwhole<sup>$secondunitn</sup>&#8260;<sub>$secondunitd</sub> pounds.  Each $secondunitwhole<sup>$secondunitn</sup>&#8260;<sub>$secondunitd</sub> pounds represents one can. Choose the setup that will solve for the number of cans in the box.}}{width400}' +    
                                    ']}{$$previousCorrect}}' +                                    
									'{\\grp{\\select{$firstunitwhole $firstunitn/$firstunitd pounds}{["$firstunitwhole $firstunitn/$firstunitd pounds", "$secondunitwhole $secondunitn/$secondunitd pounds"]}}{\\sign{&div;}}{\\select{$secondunitwhole $secondunitn/$secondunitd pounds}{["$firstunitwhole $firstunitn/$firstunitd pounds", "$secondunitwhole $secondunitn/$secondunitd pounds"]}}}' +
                            	'}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }, {
                        problem: '\\image{$illustration}',
                        answer:
                            '\\rowgrp' +
                                '{\\choose{[' +
                                    '\\ins{Great! Now solve the problem.},' +
                                    '\\ins{This is a division problem.  When we set up a division problem, the <span class=underline>first number must be the total</span> that is being divided up.  In this case the total being divided up is the weight of the box ($firstunitwhole <sup>$firstunitn</sup>&#8260;<sub>$firstunitd</sub> pounds), so the weight in the box is placed first in the division set up.  The correct setup is below. Now solve the problem.}' +    
                                ']}{$$previousCorrect}}' +
                                '{\\grp{\\mixed{\\fracstr{$firstunitwhole}}{\\frac{\\fracstr{$firstunitn}}{\\fracstr{$firstunitd}}}}{\\html{pounds}}{\\sign{&div;}}{\\mixed{\\fracstr{$secondunitwhole}}{\\frac{\\fracstr{$secondunitn}}{\\fracstr{$secondunitd}}}}{\\html{pounds}}{\\sign{=}}{\\input{$number}}}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }]
                }]
            },
            tomCanDiv2: {
                title: 'Mixed Fraction Application Problems',
                children: [{
                    title: 'Main Answer',
                    children: [{
                        problem: '\\image{$illustration}',
                        answer: '\\rowgrp{\\ins{$number cans of tomatos in a box weigh a total of $firstunitwhole <sup>$firstunitn</sup>&#8260;<sub>$firstunitd</sub> pounds.  What is the weight of each can (given that the cans all weigh the same)?}}{\\grp{\\mixed{\\input{$secondunitwhole}}{\\frac{\\input{$secondunitn}}{\\input{$secondunitd}}}}{\\html{pounds}}}',
                        controls: {
                            "checkAnswer": true,
                            "help": false,
                            "workbook": true
                        }
                    }]
                }, {
                    title: 'Workbook',
                    children: [{
                        problem: '\\image{$illustration}',
                        answer: 
                            '\\wb{' +
                                '\\rowgrp' +
                                    '{\\ins{You have been <span class=underline>given the total</span> weight of the cans in the box, and the number of cans in the box.  What is the number of cans in the box?}}' +
                                    '{\\grp{\\input{$number}}}' +
                            '}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }, {
                        problem: '\\image{$illustration}',
                        answer: 
                            '\\wb{' +
                                '\\rowgrp' +
                                    '{\\choose{[' +
                                        '\\ins{Yes, there are $number cans in the box. To find out the weight of each can, what operation must we use?},' +
                                        '\\ins{No, we are told there are $number cans of tomatos in the box. To find out the weight of each can, what operation must we use?}' +    
                                    ']}{$$previousCorrect}}' +
                                    '{\\select{Division}{["Addition", "Subtraction", "Multiplication", "Division"]}}' +
                            '}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }, {
                        problem: '\\image{$illustration}',
                        answer: '\\wb{' +
                                '\\rowgrp' +
                                    '{\\choose{[' +
                                        '\\rowgrp{\\css{\\ins{Yes, now write a setup that will solve this problem.}}{width400}}{\\html{<br><br>}},' +
                                        '\\css{\\ins{We must divide to solve this problem.  The <span class=underline>given total weight</span> of the cans in the box is being divided up into $number cans, all of the same weight.  Pick the set up that will solve for the weight of each can.}}{width400}' +    
                                    ']}{$$previousCorrect}}' +                                    
									'{\\grp{\\select{$firstunitwhole $firstunitn/$firstunitd pounds}{["$firstunitwhole $firstunitn/$firstunitd pounds", "$number portions"]}}{\\sign{&div;}}{\\select{$number portions}{["$firstunitwhole $firstunitn/$firstunitd pounds", "$number portions"]}}}' +
                            	'}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }, {
                        problem: '\\image{$illustration}',
                        answer: 
                            '\\wb{' +
                                '\\rowgrp' +
                                    '{\\choose{[' +
                                        '\\css{\\ins{Great! Now give the solution.}}{width400},' +
                                        '\\css{\\ins{This is a division problem.  When we set up a division problem, the <span class=underline>first number must be the total</span> that is being divided up.  In this case the total is the total weight of the cans in the box ($firstunitwhole <sup>$firstunitn</sup>&#8260;<sub>$firstunitd</sub> pounds) and is placed first in the division set up.  The correct setup is shown below.<br><br>Now solve the problem.}}{width400}' +
                                    ']}{$$previousCorrect}}' +
                                    '{\\rowgrp{\\grp{\\mixed{\\fracstr{$firstunitwhole}}{\\frac{\\fracstr{$firstunitn}}{\\fracstr{$firstunitd}}}}{\\sign{&div;}}{\\frac{\\fracstr{$number}}{\\fracstr{1}}}}{\\html{&nbsp;}}{\\grp{\\sign{=}}{\\grp{\\mixed{\\input{$secondunitwhole}}{\\frac{\\input{$secondunitn}}{\\input{$secondunitd}}}}{\\html{pounds}}}}}' +
                            '}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }]
                }]
            },
            tomCanMul: {
                title: 'Mixed Fraction Application Problems',
                children: [{
                    title: 'Main Answer',
                    children: [{
                        problem: '\\image{$illustration}',
                        answer: '\\rowgrp' + 
									'{\\ins{If $number cans of tomatos are in the box, and each can weighs $secondunitwhole<sup>$secondunitn</sup>&#8260;<sub>$secondunitd</sub> pounds, what is the total weight of the cans in the box?}}' +
									'{\\html{&nbsp;}}' + 
									'{\\grp{\\mixed{\\input{$firstunitwhole}}{\\frac{\\input{$firstunitn}}{\\input{$firstunitd}}}}{\\html{pounds}}}',
                        controls: {
                            "checkAnswer": true,
                            "help": false,
                            "workbook": true
                        }
                    }]
                }, {
                    title: 'Workbook',
                    children: [{
                        problem: '\\image{$illustration}',
                        answer: '\\wb{' +
									'\\rowgrp' +
										'{\\ins{You have been <span class=underline>given the number</span> of cans in the box.  Each can weighs $secondunitwhole<sup>$secondunitn</sup>&#8260;<sub>$secondunitd</sub> pounds.  How many cans of tomatos are in the box?}}' +
										'{\\grp{\\input{$number}}}' +
								'}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }, {
                        problem: '\\image{$illustration}',
                        answer: '\\wb{' +
									'\\rowgrp' +
										'{\\choose{[' +
											'\\ins{Yes, there are $number cans of tomatos in the box. To find out the total combined weight of all the cans in the box, what operation must we use?},' +
											'\\ins{No, we are told there are $number cans of tomatos in the box. To find out the total combined weight of all the cans in the box, what operation must we use?}' +    
										']}{$$previousCorrect}}' +
										'{\\select{Multiplication}{["Addition", "Subtraction", "Multiplication", "Division"]}}' +
								'}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }, {
                        problem: '\\image{$illustration}',
                        answer: '\\wb{' +
									'\\rowgrp' +
										'{\\choose{[' +
											'\\rowgrp{\\css{\\ins{Yes, now write a setup that will solve this problem.}}{width400}}{\\html{<br><br>}},' +
											'\\css{\\ins{We must multiply to solve this problem.  The <span class=underline>given weight of each can</span> is being multiplied by $number cans.  Pick the set up that will solve for the total combined weight of the cans in the box.}}{width400}' +    
										']}{$$previousCorrect}}' +                                    
										'{\\grp{\\select{$secondunitwhole $secondunitn/$secondunitd}{["$secondunitwhole $secondunitn/$secondunitd", "$number"]}}{\\sign{&bull;}}{\\select{$number}{["$secondunitwhole $secondunitn/$secondunitd", "$number"]}}}' +
                            	'}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }, {
                        problem: '\\image{$illustration}',
                        answer: '\\wb{' +
                                '\\rowgrp' +
                                    '{\\choose{[' +
                                        '\\rowgrp{\\css{\\ins{Now solve the problem.}}{width400}}{\\html{<br><br>}},' +
                                        '\\css{\\ins{This is a *repeated addition* or multiplication problem.  The weight of each can of tomatos, $secondunitwhole<sup>$secondunitn</sup>&#8260;<sub>$secondunitd</sub> pounds, needs to be repeated $number times. The correct setup is shown below. Now solve the problem.}}{width400}' +
                                    ']}{$$previousCorrect}}' +
                                    '{\\grp{\\mixed{\\fracstr{$secondunitwhole}}{\\frac{\\str{$secondunitn}}{\\str{$secondunitd}}}}{\\sign{&bull;}}{\\html{$number}}{\\sign{=}}{\\grp{\\mixed{\\input{$firstunitwhole}}{\\frac{\\input{$firstunitn}}{\\input{$firstunitd}}}}{\\html{pounds}}}}' +
                            '}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }]
                }]
            }
        },
        data = [
            { firstunitwhole: '2', firstunitn: '7', firstunitd: '10', secondunitn: '3', secondunitd: '10', number: '9', illustration: '8.5-11_Houses_Money/400x300/Millions_houses_a.jpg', template: 'housesDiv1' },
            { firstunitwhole: '2', firstunitn: '7', firstunitd: '10', secondunitn: '3', secondunitd: '10', number: '9', illustration: '8.5-11_Houses_Money/400x300/Millions_houses_b.jpg', template: 'housesDiv2' },
            { firstunitwhole: '2', firstunitn: '7', firstunitd: '10', secondunitn: '3', secondunitd: '10', number: '9', illustration: '8.5-11_Houses_Money/400x300/Millions_houses_c.jpg', template: 'housesMul' },
            { firstunitwhole: '4', firstunitn: '4', firstunitd: '5', secondunitwhole: '1', secondunitn: '1', secondunitd: '5', number: '4', illustration: '8.5-12_Cookies/400x300/Cookies_a.jpg', template: 'cookiesDiv1' },
            { firstunitwhole: '4', firstunitn: '4', firstunitd: '5', secondunitwhole: '1', secondunitn: '1', secondunitd: '5', number: '4', illustration: '8.5-12_Cookies/400x300/Cookies_b.jpg', template: 'cookiesDiv2' },
            { firstunitwhole: '4', firstunitn: '4', firstunitd: '5', secondunitwhole: '1', secondunitn: '1', secondunitd: '5', number: '4', illustration: '8.5-12_Cookies/400x300/Cookies_c.jpg', template: 'cookiesMul' },
			{ firstunitwhole: '7', firstunitn: '1', firstunitd: '2', secondunitwhole: '', secondunitn: '3', secondunitd: '20', number: '50', illustration: '8.5-9_Typed_Pages/400x300/Typed_Pages_a.jpg', template: 'pagesDiv1' },
            { firstunitwhole: '7', firstunitn: '1', firstunitd: '2', secondunitwhole: '', secondunitn: '3', secondunitd: '20', number: '50', illustration: '8.5-9_Typed_Pages/400x300/Typed_Pages_b.jpg', template: 'pagesDiv2' },
            { firstunitwhole: '7', firstunitn: '1', firstunitd: '2', secondunitwhole: '', secondunitn: '3', secondunitd: '20', number: '50',illustration: '8.5-9_Typed_Pages/400x300/Typed_Pages_c.jpg', template: 'pagesMul' },
			{ firstunitwhole: '51', firstunitn: '1', firstunitd: '4', secondunitwhole: '1', secondunitn: '1', secondunitd: '4', number: '41', illustration: '8.5-10_Tomato_Cans/400x300/51.25-lbs_X-Cans_1.25-lbs_Can.jpg', template: 'tomCanDiv1' },
            { firstunitwhole: '51', firstunitn: '1', firstunitd: '4', secondunitwhole: '1', secondunitn: '1', secondunitd: '4', number: '41', illustration: '8.5-10_Tomato_Cans/400x300/51.25lbs_41-Cans_X-Lbs-Can.jpg', template: 'tomCanDiv2' },
            { firstunitwhole: '51', firstunitn: '1', firstunitd: '4', secondunitwhole: '1', secondunitn: '1', secondunitd: '4', number: '41', illustration: '8.5-10_Tomato_Cans/400x300/X-lbs_41-Cans_1.25-lbs_Can.jpg', template: 'tomCanMul' }
        ];
    
	return dataUtils.build(desc, template, data);
    //return dataUtils.build(desc, template, numberUtils.shuffleArray(data));
}]);
