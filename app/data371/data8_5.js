 /*global angular */

angular.module('mathSkills').service('data8_5', ['dataUtils', function (dataUtils) {
    var desc = {
            title: '8.5 Mixed Fraction Application Problems',
            path: '8.5-mixed-fraction-application-problems',
            children: []
        },
        template = {
			// problem 1
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
                        answer: '\\wb'+
									'{\\css'+
										'{\\rowgrp'+
											'{\\html{There are houses worth a total of &#36;$firstunitwhole <sup>$firstunitn</sup>&#8260;<sub>$firstunitd</sub> million dollars in a subdivision. If each house is worth <sup>$secondunitn</sup>&#8260;<sub>$secondunitd</sub> of a million dollars, how many houses are in the subdivision?}}'+
											'{\\html{&nbsp;}}'+
											'{\\ins{You have been given the <strong>total</strong> value of the houses in the subdivision.  What is the total value of <span class=underline>one</span> house?}}' +
											'{\\grp{\\frac{\\input{$secondunitn}}{\\input{$secondunitd}}}{html{million dollars}}}}' +
										'}'+
									'{well}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }, {
                        problem: '\\image{$illustration}',
                        answer: '\\wb'+
									'{\\css'+
										'{\\rowgrp'+
											'{\\html{There are houses worth a total of &#36;$firstunitwhole <sup>$firstunitn</sup>&#8260;<sub>$firstunitd</sub> million dollars in a subdivision. If each house is worth <sup>$secondunitn</sup>&#8260;<sub>$secondunitd</sub> of a million dollars, how many houses are in the subdivision?}}'+
											'{\\html{&nbsp;}}'+
											'{\\choose{[' +
												'\\ins{Yes, each house is valued at <sup>$secondunitn</sup>&#8260;<sub>$secondunitd</sub> million dollars. To find out how many houses (each worth <sup>$secondunitn</sup>&#8260;<sub>$secondunitd</sub> million dollars) are in the subdivision, what operation must we use?},' +
												'\\ins{No, we are told that each house is valued at <sup>$secondunitn</sup>&#8260;<sub>$secondunitd</sub> million dollars. To find out how many houses (each worth <sup>$secondunitn</sup>&#8260;<sub>$secondunitd</sub> million dollars) are in the subdivision , what operation must we use?}' +    
											']}{$$previousCorrect}}' +
											'{\\select{Division}{["Addition", "Subtraction", "Multiplication", "Division"]}}' +
										'}'+
									'{well}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }, {
                        problem: '\\image{$illustration}',
                        answer: '\\wb'+
									'{\\css'+
										'{\\rowgrp'+
											'{\\html{There are houses worth a total of &#36;$firstunitwhole <sup>$firstunitn</sup>&#8260;<sub>$firstunitd</sub> million dollars in a subdivision. If each house is worth <sup>$secondunitn</sup>&#8260;<sub>$secondunitd</sub> of a million dollars, how many houses are in the subdivision?}}'+
											'{\\html{&nbsp;}}'+
											'{\\choose{[' +
												'\\ins{Yes. Write a setup that will solve for the total number of houses in the subdivision.},' +
                                        '\\ins{We must divide to solve this problem. The given total value has been divided up into equal-sized parts&mdash;each worth <sup>$secondunitn</sup>&#8260;<sub>$secondunitd</sub> million dollars.  Each <sup>$secondunitn</sup>&#8260;<sub>$secondunitd</sub> million dollars represents one house. Write a setup that will solve for the number of houses in the subdivision.}' +    
											']}{$$previousCorrect}}' +
											'{\\grp{\\css{\\select{$firstunitwhole $firstunitn/$firstunitd}{["$firstunitwhole $firstunitn/$firstunitd", "$secondunitn/$secondunitd"]}}{width160}}{\\sign{&div;}}{\css{\\select{$secondunitn/$secondunitd}{["$firstunitwhole $firstunitn/$firstunitd", "$secondunitn/$secondunitd"]}}{width160}}}' +
										'}'+
									'{well}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }, {
                        problem: '\\image{$illustration}',
                        answer: '\\wb'+
									'{\\css'+
										'{\\rowgrp'+
											'{\\html{There are houses worth a total of &#36;$firstunitwhole <sup>$firstunitn</sup>&#8260;<sub>$firstunitd</sub> million dollars in a subdivision. If each house is worth <sup>$secondunitn</sup>&#8260;<sub>$secondunitd</sub> of a million dollars, how many houses are in the subdivision?}}'+
											'{\\html{&nbsp;}}'+
											'{\\choose{[' +
												'\\ins{Great! Now solve the problem.},' +
                                        		'\\ins{This is a division problem.  When we set up a division problem, the <span class=underline>first number must be the total</span> that is being divided up.  In this case the total being divided up is the value of the subdivision (&#36;$firstunitwhole <sup>$firstunitn</sup>&#8260;<sub>$firstunitd</sub> million dollars), so the value of the subdivision is placed first in the division set up.  The correct setup is below. Now solve the problem.}' +    
											']}{$$previousCorrect}}' +
											'{\\grp{\\mixed{\\fracstr{$firstunitwhole}}{\\frac{\\fracstr{$firstunitn}}{\\fracstr{$firstunitd}}}}{\\sign{&div;}}{\\frac{\\fracstr{$secondunitn}}{\\fracstr{$secondunitd}}}{\\sign{=}}{\\input{$number}}{html{houses}}}' +
										'}'+
									'{well}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }]
                }]
            },
			// problem 2
            housesDiv2: {
                title: 'Mixed Fraction Application Problems',
                children: [{
                    title: 'Main Answer',
                    children: [{
                        problem: '\\image{$illustration}',
                        answer: '\\rowgrp{\\ins{$number houses in a subdivision are worth a total of &#36;$firstunitwhole <sup>$firstunitn</sup>&#8260;<sub>$firstunitd</sub> million dollars.  What is the value of each house (given that each house is priced exactly the same)?}}{\\grp{\\html{&#36;}}{\\frac{\\input{$secondunitn}}{\\input{$secondunitd}}}{html{million dollars}}}',
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
                        answer: '\\wb'+
									'{\\css'+
										'{\\rowgrp'+
											'{\\html{$number houses in a subdivision are worth a total of &#36;$firstunitwhole <sup>$firstunitn</sup>&#8260;<sub>$firstunitd</sub> million dollars.  What is the value of each house (given that each house is priced exactly the same)?}}'+
											'{\\html{&nbsp;}}'+
											'{\\ins{You have been <span class=underline>given the total</span> number of houses in the subdivision.  How many houses are in the subdivision?}}' +
											'{\\grp{\\input{$number}}}' +
										'}'+
									'{well}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }, {
                        problem: '\\image{$illustration}',
                        answer: '\\wb'+
									'{\\css'+
										'{\\rowgrp'+
											'{\\html{$number houses in a subdivision are worth a total of &#36;$firstunitwhole <sup>$firstunitn</sup>&#8260;<sub>$firstunitd</sub> million dollars.  What is the value of each house (given that each house is priced exactly the same)?}}'+
											'{\\html{&nbsp;}}'+
											'{\\choose{[' +
												'\\ins{Yes, there are $number houses in the subdivision. To find out the price of each house, what operation must we use?},' +
												'\\ins{No, we are told there are $number houses in the subdivision. To find out the price of each house, what operation must we use?}' +    
											']}{$$previousCorrect}}' +
											'{\\select{Division}{["Addition", "Subtraction", "Multiplication", "Division"]}}' +
										'}'+
									'{well}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }, {
                        problem: '\\image{$illustration}',
                        answer: '\\wb'+
									'{\\css'+
										'{\\rowgrp'+
											'{\\html{$number houses in a subdivision are worth a total of &#36;$firstunitwhole <sup>$firstunitn</sup>&#8260;<sub>$firstunitd</sub> million dollars.  What is the value of each house (given that each house is priced exactly the same)?}}'+
											'{\\html{&nbsp;}}'+
											'{\\choose{[' +
												'\\ins{Yes, now write a setup that will solve this problem.},' +
                                        		'\\ins{We must divide to solve this problem.  The <span class=underline>given total value of the subdivision</span> is being divided up into $number identically-priced houses.  Pick the set up that will solve for the value of each house.}' +    
											']}{$$previousCorrect}}' +
											'{\\grp{\\css{\\select{$firstunitwhole $firstunitn/$firstunitd}{["$firstunitwhole $firstunitn/$firstunitd", "$secondunitn/$secondunitd"]}}{width160}}{\\sign{&div;}}{\css{\\select{$number}{["$firstunitwhole $firstunitn/$firstunitd", "$number"]}}{width160}}}' +
										'}'+
									'{well}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }, {
                        problem: '\\image{$illustration}',
                        answer: '\\wb'+
									'{\\css'+
										'{\\rowgrp'+
											'{\\html{$number houses in a subdivision are worth a total of &#36;$firstunitwhole <sup>$firstunitn</sup>&#8260;<sub>$firstunitd</sub> million dollars.  What is the value of each house (given that each house is priced exactly the same)?}}'+
											'{\\html{&nbsp;}}'+
											'{\\choose{[' +
												'\\ins{Great! Now give the solution.},' +
                                        		'\\ins{This is a division problem.  When we set up a division problem, the <span class=underline>first number must be the total</span> that is being divided up.  In this case the total is the total value of the subdivision (&#36;$firstunitwhole <sup>$firstunitn</sup>&#8260;<sub>$firstunitd</sub> million dollars) and is placed first in the division set up.  The correct setup is shown below.<br><br>Now solve the problem.}' +    
											']}{$$previousCorrect}}' +
											'{\\rowgrp{\\grp{\\mixed{\\fracstr{$firstunitwhole}}{\\frac{\\fracstr{$firstunitn}}{\\fracstr{$firstunitd}}}}{\\sign{&div;}}{\\frac{\\fracstr{$number}}{\\fracstr{1}}}}{\\html{&nbsp;}}{\\grp{\\sign{=}}{\\grp{\\html{&#36;}}{\\frac{\\input{$secondunitn}}{\\input{$secondunitd}}}{\\html{million dollars}}}}}' +
										'}'+
									'{well}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }]
                }]
            },
			// problem 3
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
                        answer: '\\wb'
									+'{\\css'
										+'{\\rowgrp'
											+'{\\html{If $number houses have been built, and each house is priced at <sup>$secondunitn</sup>&#8260;<sub>$secondunitd</sub> million dollars, what is the total value of all the houses in the subdivision combined?}}'
											+'{\\html{&nbsp;}}'
											+'{\\ins{You have been <span class=underline>given the number</span> of houses in the subdivision.  How many houses are in the subdivision?}}'
											+'{\\grp{\\input{$number}}}'+
										'}'
									+'{well}}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }, {
                        problem: '\\image{$illustration}',
                        answer: '\\wb' +
									'{\\css'+
										'{\\rowgrp' +
											'{\\html{If $number houses have been built, and each house is priced at <sup>$secondunitn</sup>&#8260;<sub>$secondunitd</sub> million dollars, what is the total value of all the houses in the subdivision combined?}}'+
											'{\\html{&nbsp;}}'+
											'{\\choose{[' +
												'\\ins{Yes, there are $number houses in the subdivision. To find out the total combined value of all the houses in the subdivision, what operation must we use?},' +
												'\\ins{No, we are told there are $number houses in the subdivision. To find out the total combined value of all the houses in the subdivision, what operation must we use?}' +    
											']}{$$previousCorrect}}' +
											'{\\select{Multiplication}{["Addition", "Subtraction", "Multiplication", "Division"]}}' +
										'}'+
									'{well}}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }, {
                        problem: '\\image{$illustration}',
                        answer: '\\wb' +
									'{\\css'+
										'{\\rowgrp' +
											'{\\html{If $number houses have been built, and each house is priced at <sup>$secondunitn</sup>&#8260;<sub>$secondunitd</sub> million dollars, what is the total value of all the houses in the subdivision combined?}}'+
											'{\\html{&nbsp;}}'+
											'{\\choose{[' +
												'\\ins{Yes, now write a setup that will solve this problem.},' +
												'\\ins{We must multiply to solve this problem.  The <span class=underline>given value of each house in the subdivision</span> is being multiplied by $number houses.  Pick the set up that will solve for the total combined value of the houses in the subdivision.}' +    
											']}{$$previousCorrect}}' +
											'{\\grp{\\css{\\select{[\"$firstMult\",\"$secondMult\"]}{$multArray}}{width160}}'+
											'{\\sign{&bull;}}'+
                                			'{\css{\\select{[\"$secondMult\",\"$firstMult\"]}{$multArray}}{width160}}}'+ 
										'}'+
									'{well}}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }, {
                        problem: '\\image{$illustration}',
                        answer: '\\css'+
										'{\\rowgrp' +
											'{\\html{If $number houses have been built, and each house is priced at <sup>$secondunitn</sup>&#8260;<sub>$secondunitd</sub> million dollars, what is the total value of all the houses in the subdivision combined?}}'+
											'{\\html{&nbsp;}}'+
											'{\\choose{[' +
												'\\rowgrp{\\ins{Now solve the problem.}},' +
												'\\ins{This is a *repeated addition* or multiplication problem.  The value of each house, <sup>$secondunitn</sup>&#8260;<sub>$secondunitd</sub> million dollars, needs to be repeated $number times. The correct setup is shown below. Now solve the problem.}' +
											']}{$$previousCorrect}}' +
											'{\\grp{html{$$firstMult}}{\\sign{&bull;}}{\\html{$$secondMult}}{\\sign{=}}{\\grp{\\html{&#36;}}{\\mixed{\\input{$firstunitwhole}}{\\frac{\\input{$firstunitn}}{\\input{$firstunitd}}}}{\\html{million dollars}}}}' +
										'}'+
									'{well}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }]
                }]
            },
			// problem 4
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
                        answer: '\\wb'+
									'{\\css'+
										'{\\rowgrp'+
											'{\\html{There are cookies weighing a total of $firstunitwhole <sup>$firstunitn</sup>&#8260;<sub>$firstunitd</sub> pounds in a jar. How many $secondunitwhole<sup>$secondunitn</sup>&#8260;<sub>$secondunitd</sub>-pound portions of cookies are in the jar?}}'+
											'{\\html{&nbsp;}}'+
											'{\\ins{You have been given the <strong>total</strong> weight of the cookies in the jar.  What is the weight of <span class=underline>one</span> portion?}}' +
											'{\\grp{\\mixed{\\input{$secondunitwhole}}{\\frac{\\input{$secondunitn}}{\\input{$secondunitd}}}}{html{pounds}}}}' +
										'}'+
									'{well}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }, {
                        problem: '\\image{$illustration}',
                        answer: '\\wb'+
									'{\\css'+
										'{\\rowgrp'+
											'{\\html{There are cookies weighing a total of $firstunitwhole <sup>$firstunitn</sup>&#8260;<sub>$firstunitd</sub> pounds in a jar. How many $secondunitwhole<sup>$secondunitn</sup>&#8260;<sub>$secondunitd</sub>-pound portions of cookies are in the jar?}}'+
											'{\\html{&nbsp;}}'+
											'{\\choose{[' +
												'\\ins{Yes, each portion weighs $secondunitwhole<sup>$secondunitn</sup>&#8260;<sub>$secondunitd</sub> pounds. To find out how many cookie portions (each weighing $secondunitwhole<sup>$secondunitn</sup>&#8260;<sub>$secondunitd</sub> pounds) are in the jar, what operation must we use?},' +
												'\\ins{No, we are told that each portion weighs $secondunitwhole<sup>$secondunitn</sup>&#8260;<sub>$secondunitd</sub> pounds. To find out how many cookie portions (each weighing $secondunitwhole<sup>$secondunitn</sup>&#8260;<sub>$secondunitd</sub> pounds) are in the jar , what operation must we use?}' +    
											']}{$$previousCorrect}}' +
											'{\\select{Division}{["Addition", "Subtraction", "Multiplication", "Division"]}}' +
										'}'+
									'{well}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }, {
                        problem: '\\image{$illustration}',
                        answer: '\\wb'+
									'{\\css'+
										'{\\rowgrp'+
											'{\\html{There are cookies weighing a total of $firstunitwhole <sup>$firstunitn</sup>&#8260;<sub>$firstunitd</sub> pounds in a jar. How many $secondunitwhole<sup>$secondunitn</sup>&#8260;<sub>$secondunitd</sub>-pound portions of cookies are in the jar?}}'+
											'{\\html{&nbsp;}}'+
											'{\\choose{[' +
												'\\ins{Yes. Write a setup that will solve for the number of cookie portions each weighing $secondunitwhole<sup>$secondunitn</sup>&#8260;<sub>$secondunitd</sub> pounds in the jar.},' +
                                        '\\ins{We must divide to solve this problem. The given total weight of cookies has been divided up into equal-sized portions&mdash;each weighing $secondunitwhole<sup>$secondunitn</sup>&#8260;<sub>$secondunitd</sub> pounds.  Each $secondunitwhole<sup>$secondunitn</sup>&#8260;<sub>$secondunitd</sub> pounds represents one portion. Write a setup that will solve for the number of cookie portions in the jar.}' +    
											']}{$$previousCorrect}}' +
											'{\\grp{\\css{\\select{$firstunitwhole $firstunitn/$firstunitd}{["$firstunitwhole $firstunitn/$firstunitd", "$secondunitwhole $secondunitn/$secondunitd"]}}{width160}}{\\sign{&div;}}{\css{\\select{$secondunitwhole $secondunitn/$secondunitd}{["$firstunitwhole $firstunitn/$firstunitd", "$secondunitwhole $secondunitn/$secondunitd"]}}{width160}}}'+
										'}'+
									'{well}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }, {
                        problem: '\\image{$illustration}',
                        answer: '\\wb'+
									'{\\css'+
										'{\\rowgrp'+
											'{\\html{There are cookies weighing a total of $firstunitwhole <sup>$firstunitn</sup>&#8260;<sub>$firstunitd</sub> pounds in a jar. How many $secondunitwhole<sup>$secondunitn</sup>&#8260;<sub>$secondunitd</sub>-pound portions of cookies are in the jar?}}'+
											'{\\html{&nbsp;}}'+
											'{\\choose{[' +
												'\\ins{Great! Now solve the problem.},' +
												'\\ins{This is a division problem.  When we set up a division problem, the <span class=underline>first number must be the total</span> that is being divided up.  In this case the total being divided up is the weight in the jar ($firstunitwhole <sup>$firstunitn</sup>&#8260;<sub>$firstunitd</sub> pounds), so the weight in the jar is placed first in the division set up.  The correct setup is below. Now solve the problem.}' +    
													']}{$$previousCorrect}}' +
											'{\\grp{\\mixed{\\fracstr{$firstunitwhole}}{\\frac{\\fracstr{$firstunitn}}{\\fracstr{$firstunitd}}}}{\\sign{&div;}}{\\mixed{\\fracstr{$secondunitwhole}}{\\frac{\\fracstr{$secondunitn}}{\\fracstr{$secondunitd}}}}{\\sign{=}}{\\input{$number}}}'+
										'}'+
									'{well}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }]
                }]
            },
			// problem 5
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
                        answer: '\\wb'+
									'{\\css'+
										'{\\rowgrp'+
											'{\\html{$number portions of cookies in a jar weigh a total of $firstunitwhole <sup>$firstunitn</sup>&#8260;<sub>$firstunitd</sub> pounds.  What is the weight of each portion (given that each portion weighs exactly the same)?}}'+
											'{\\html{&nbsp;}}'+
											'{\\ins{You have been <span class=underline>given the total</span> weight of the cookies in the jar, and the number of portions in the jar.  What is the number of portions of cookies?}}' +
											'{\\grp{\\input{$number}}}' +
										'}'+
									'{well}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }, {
                        problem: '\\image{$illustration}',
                        answer: '\\wb'+
									'{\\css'+
										'{\\rowgrp'+
											'{\\html{$number portions of cookies in a jar weigh a total of $firstunitwhole <sup>$firstunitn</sup>&#8260;<sub>$firstunitd</sub> pounds.  What is the weight of each portion (given that each portion weighs exactly the same)?}}'+
											'{\\html{&nbsp;}}'+
											'{\\choose{[' +
												'\\ins{Yes, there are $number portions of cookies in the jar. To find out the weight of each portion, what operation must we use?},' +
												'\\ins{No, we are told there are $number portions of cookies in the jar. To find out the weight of each portion, what operation must we use?}' +    
											']}{$$previousCorrect}}' +
											'{\\select{Division}{["Addition", "Subtraction", "Multiplication", "Division"]}}' +
										'}'+
									'{well}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }, {
                        problem: '\\image{$illustration}',
                        answer: '\\wb'+
									'{\\css'+
										'{\\rowgrp'+
											'{\\html{$number portions of cookies in a jar weigh a total of $firstunitwhole <sup>$firstunitn</sup>&#8260;<sub>$firstunitd</sub> pounds.  What is the weight of each portion (given that each portion weighs exactly the same)?}}'+
											'{\\html{&nbsp;}}'+
											'{\\choose{[' +
												'\\ins{Yes, now write a setup that will solve this problem.},' +
                                        '\\ins{We must divide to solve this problem.  The <span class=underline>given total weight</span> of the cookies in the jar is being divided up into $number equal portions of cookies.  Pick the set up that will solve for the weight of each portion.}' +    
											']}{$$previousCorrect}}' +
											'{\\grp{\\css{\\select{$firstunitwhole $firstunitn/$firstunitd}{["$firstunitwhole $firstunitn/$firstunitd", "$number"]}}{width160}}{\\sign{&div;}}{\css{\\select{$number}{["$firstunitwhole $firstunitn/$firstunitd", "$number"]}}{width160}}}'+
										'}'+
									'{well}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }, {
                        problem: '\\image{$illustration}',
                        answer: '\\wb'+
									'{\\css'+
										'{\\rowgrp'+
											'{\\html{$number portions of cookies in a jar weigh a total of $firstunitwhole <sup>$firstunitn</sup>&#8260;<sub>$firstunitd</sub> pounds.  What is the weight of each portion (given that each portion weighs exactly the same)?}}'+
											'{\\html{&nbsp;}}'+
											'{\\choose{[' +
												'\\ins{Great! Now give the solution.},' +
												'\\ins{This is a division problem.  When we set up a division problem, the <span class=underline>first number must be the total</span> that is being divided up.  In this case the total is the total weight of the cookies in the jar ($firstunitwhole <sup>$firstunitn</sup>&#8260;<sub>$firstunitd</sub> pounds) and is placed first in the division set up.  The correct setup is shown below.<br><br>Now solve the problem.}' +    
													']}{$$previousCorrect}}' +
											'{\\grp{\\mixed{\\fracstr{$firstunitwhole}}{\\frac{\\fracstr{$firstunitn}}{\\fracstr{$firstunitd}}}}{\\sign{&div;}}{\\frac{\\fracstr{$number}}{\\fracstr{1}}}{\\sign{=}}{\\mixed{\\input{$secondunitwhole}}{\\frac{\\input{$secondunitn}}{\\input{$secondunitd}}}}{\\html{pounds}}}' +
										'}'+
									'{well}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }]
                }]
            },
			// problem 6
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
                        answer: '\\wb'
									+'{\\css'
										+'{\\rowgrp'
											+'{\\html{If $number portions of cookies are in the jar, and each portion weighs $secondunitwhole<sup>$secondunitn</sup>&#8260;<sub>$secondunitd</sub> pounds, what is the total weight of the cookies in the jar?}}'
											+'{\\html{&nbsp;}}'
											+'{\\ins{You have been <span class=underline>given the number</span> of portions of cookies in the jar.  Each portion weighs $secondunitwhole<sup>$secondunitn</sup>&#8260;<sub>$secondunitd</sub> pounds.  How many portions of cookies are in the jar?}}'
											+'{\\grp{\\input{$number}}}'+
										'}'
									+'{well}}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }, {
                        problem: '\\image{$illustration}',
                        answer: '\\wb' +
									'{\\css'+
										'{\\rowgrp' +
											'{\\html{If $number portions of cookies are in the jar, and each portion weighs $secondunitwhole<sup>$secondunitn</sup>&#8260;<sub>$secondunitd</sub> pounds, what is the total weight of the cookies in the jar?}}'+
											'{\\html{&nbsp;}}'+
											'{\\choose{[' +
												'\\ins{Yes, there are $number portions of cookies in the jar. To find out the total combined weight of all the cookies in the jar, what operation must we use?},' +
												'\\ins{No, we are told there are $number portions of cookies in the jar. To find out the total combined weight of all the cookies in the jar, what operation must we use?}' +    
											']}{$$previousCorrect}}' +
											'{\\select{Multiplication}{["Addition", "Subtraction", "Multiplication", "Division"]}}' +
										'}'+
									'{well}}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }, {
                        problem: '\\image{$illustration}',
                        answer: '\\wb' +
									'{\\css'+
										'{\\rowgrp' +
											'{\\html{If $number portions of cookies are in the jar, and each portion weighs $secondunitwhole<sup>$secondunitn</sup>&#8260;<sub>$secondunitd</sub> pounds, what is the total weight of the cookies in the jar?}}'+
											'{\\html{&nbsp;}}'+
											'{\\choose{[' +
												'\\ins{Yes, now write a setup that will solve this problem.},' +
												'\\ins{We must multiply to solve this problem.  The <span class=underline>given weight of each portion</span> of cookies in the jar is being multiplied by $number portions of cookies.  Pick the set up that will solve for the total combined weight of the cookies in the jar.}' +    
											']}{$$previousCorrect}}' +
											'{\\grp{\\css{\\select{[\"$firstMult\",\"$secondMult\"]}{$multArray}}{width160}}'+
											'{\\sign{&bull;}}'+
                                			'{\css{\\select{[\"$secondMult\",\"$firstMult\"]}{$multArray}}{width160}}}'+ 
										'}'+
									'{well}}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }, {
                        problem: '\\image{$illustration}',
                        answer: '\\css'+
									'{\\rowgrp' +
											'{\\html{If $number portions of cookies are in the jar, and each portion weighs $secondunitwhole<sup>$secondunitn</sup>&#8260;<sub>$secondunitd</sub> pounds, what is the total weight of the cookies in the jar?}}'+
											'{\\html{&nbsp;}}'+
											'{\\choose{[' +
												'\\rowgrp{\\ins{Now solve the problem.}},' +
												'\\ins{This is a *repeated addition* or multiplication problem.  The weight of each portion of cookies, $secondunitwhole<sup>$secondunitn</sup>&#8260;<sub>$secondunitd</sub> pounds, needs to be repeated $number times. The correct setup is shown below. Now solve the problem.}' +
											']}{$$previousCorrect}}' +
											'{\\grp{html{$$firstMult}}{\\sign{&bull;}}{\\html{$$secondMult}}{\\sign{=}}{\\grp{\\mixed{\\input{$firstunitwhole}}{\\frac{\\input{$firstunitn}}{\\input{$firstunitd}}}}{\\html{pounds}}}}' +
										'}'+
									'{well}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }]
                }]
            },
			// problem 7
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
                        answer: '\\wb'+
									'{\\css'+
										'{\\rowgrp'+
											'{\\html{There are a total of $firstunitwhole <sup>$firstunitn</sup>&#8260;<sub>$firstunitd</sub> typed pages in the tray. How many minutes did it take to type the pages in the tray if the typist types $secondunitwhole<sup>$secondunitn</sup>&#8260;<sub>$secondunitd</sub> of a page per minute?}}'+
											'{\\html{&nbsp;}}'+
											'{\\ins{You have been given the <strong>total</strong> number of typed pages in the tray.  What is the <span class=underline>total</span>?}}' +
											'{\\grp{\\mixed{\\input{$firstunitwhole}}{\\frac{\\input{$firstunitn}}{\\input{$firstunitd}}}}}}' +
										'}'+
									'{well}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }, {
                        problem: '\\image{$illustration}',
                        answer: '\\wb'+
									'{\\css'+
										'{\\rowgrp'+
											'{\\html{There are a total of $firstunitwhole <sup>$firstunitn</sup>&#8260;<sub>$firstunitd</sub> typed pages in the tray. How many minutes did it take to type the pages in the tray if the typist types $secondunitwhole<sup>$secondunitn</sup>&#8260;<sub>$secondunitd</sub> of a page per minute?}}'+
											'{\\html{&nbsp;}}'+
											'{\\choose{[' +
												'\\ins{Yes, the total is $firstunitwhole<sup>$firstunitn</sup>&#8260;<sub>$firstunitd</sub> typed pages. To find out how many minutes it takes the typist to type $firstunitwhole<sup>$firstunitn</sup>&#8260;<sub>$firstunitd</sub> pages at the rate of $secondunitwhole<sup>$secondunitn</sup>&#8260;<sub>$secondunitd</sub> of a page per minute, what operation must we use?},' +
												'\\ins{No, we are told that the total is $firstunitwhole<sup>$firstunitn</sup>&#8260;<sub>$firstunitd</sub> typed pages. To find out how many minutes it takes the typist to type $firstunitwhole<sup>$firstunitn</sup>&#8260;<sub>$firstunitd</sub> pages at the rate of $secondunitwhole<sup>$secondunitn</sup>&#8260;<sub>$secondunitd</sub> of a page per minute, what operation must we use?}' +    
											']}{$$previousCorrect}}' +
											'{\\select{Division}{["Addition", "Subtraction", "Multiplication", "Division"]}}' +
										'}'+
									'{well}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }, {
                        problem: '\\image{$illustration}',
                        answer: '\\wb'+
									'{\\css'+
										'{\\rowgrp'+
											'{\\html{There are a total of $firstunitwhole <sup>$firstunitn</sup>&#8260;<sub>$firstunitd</sub> typed pages in the tray. How many minutes did it take to type the pages in the tray if the typist types $secondunitwhole<sup>$secondunitn</sup>&#8260;<sub>$secondunitd</sub> of a page per minute?}}'+
											'{\\html{&nbsp;}}'+
											'{\\choose{[' +
												'\\ins{Yes. Write a setup that will solve for the number of minutes required to type $firstunitwhole<sup>$firstunitn</sup>&#8260;<sub>$firstunitd</sub> pages at $secondunitwhole<sup>$secondunitn</sup>&#8260;<sub>$secondunitd</sub> of a page per minute.},' +
												'\\ins{We must divide to solve this problem. The given total number of pages ($firstunitwhole<sup>$firstunitn</sup>&#8260;<sub>$firstunitd</sub>) were typed at a rate of $secondunitwhole<sup>$secondunitn</sup>&#8260;<sub>$secondunitd</sub> of a page per minute.  Each $secondunitwhole<sup>$secondunitn</sup>&#8260;<sub>$secondunitd</sub> of a page represents one minute of typing. Write a setup that will solve for the number of $secondunitwhole<sup>$secondunitn</sup>&#8260;<sub>$secondunitd</sub> of a page in $firstunitwhole<sup>$firstunitn</sup>&#8260;<sub>$firstunitd</sub> pages.}' +    
											']}{$$previousCorrect}}' +
											'{\\grp{\\css{\\select{$firstunitwhole $firstunitn/$firstunitd}{["$firstunitwhole $firstunitn/$firstunitd", "$secondunitwhole $secondunitn/$secondunitd"]}}{width160}}{\\sign{&div;}}{\css{\\select{$secondunitwhole $secondunitn/$secondunitd}{["$firstunitwhole $firstunitn/$firstunitd", "$secondunitwhole $secondunitn/$secondunitd"]}}{width160}}}' +
										'}'+
									'{well}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }, {
                        problem: '\\image{$illustration}',
                        answer: '\\wb'+
									'{\\css'+
										'{\\rowgrp'+
											'{\\html{There are a total of $firstunitwhole <sup>$firstunitn</sup>&#8260;<sub>$firstunitd</sub> typed pages in the tray. How many minutes did it take to type the pages in the tray if the typist types $secondunitwhole<sup>$secondunitn</sup>&#8260;<sub>$secondunitd</sub> of a page per minute?}}'+
											'{\\html{&nbsp;}}'+
											'{\\choose{[' +
												'\\ins{Great! Now solve the problem.},' +
												'\\ins{This is a division problem.  When we set up a division problem, the <span class=underline>first number must be the total</span> that is being divided up.  In this case the total being divided up is the number of pages in the tray ($firstunitwhole <sup>$firstunitn</sup>&#8260;<sub>$firstunitd</sub> pages), so the number of pages in the tray is placed first in the division set up.  The correct setup is below. Now solve the problem.}' +    
											']}{$$previousCorrect}}' +
											'{\\grp{\\mixed{\\fracstr{$firstunitwhole}}{\\frac{\\fracstr{$firstunitn}}{\\fracstr{$firstunitd}}}}{\\sign{&div;}}{\\mixed{\\fracstr{$secondunitwhole}}{\\frac{\\fracstr{$secondunitn}}{\\fracstr{$secondunitd}}}}{\\sign{=}}{\\input{$number}}{\\html{minutes}}}' +
										'}'+
									'{well}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }]
                }]
            },
			// problem 8
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
                        answer: '\\wb'+
									'{\\css'+
										'{\\rowgrp'+
											'{\\html{If the typist typed $firstunitwhole <sup>$firstunitn</sup>&#8260;<sub>$firstunitd</sub> pages in $number minutes, how many pages per minute did the typist type?}}'+
											'{\\html{&nbsp;}}'+
											'{\\ins{You have been <span class=underline>given the total</span> number of pages the typist typed.  What is the total number of pages?}}' +
											'{\\grp{\\mixed{\\input{$firstunitwhole}}{\\frac{\\input{$firstunitn}}{\\input{$firstunitd}}}}{\\html{pages}}}' +
										'}'+
									'{well}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }, {
                        problem: '\\image{$illustration}',
                        answer: '\\wb'+
									'{\\css'+
										'{\\rowgrp'+
											'{\\html{If the typist typed $firstunitwhole <sup>$firstunitn</sup>&#8260;<sub>$firstunitd</sub> pages in $number minutes, how many pages per minute did the typist type?}}'+
											'{\\html{&nbsp;}}'+
											'{\\choose{[' +
												'\\ins{Yes, the total is $firstunitwhole<sup>$firstunitn</sup>&#8260;<sub>$firstunitd</sub> typed pages. To find out how many pages a minute the typist typed, what operation must we use?},' +
												'\\ins{No, we are told that the total is $firstunitwhole<sup>$firstunitn</sup>&#8260;<sub>$firstunitd</sub> typed pages. To find out how many pages a minute the typist typed, what operation must we use?}' +    
											']}{$$previousCorrect}}' +
											'{\\select{Division}{["Addition", "Subtraction", "Multiplication", "Division"]}}' +
										'}'+
									'{well}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }, {
                        problem: '\\image{$illustration}',
                        answer: '\\wb'+
									'{\\css'+
										'{\\rowgrp'+
											'{\\html{If the typist typed $firstunitwhole <sup>$firstunitn</sup>&#8260;<sub>$firstunitd</sub> pages in $number minutes, how many pages per minute did the typist type?}}'+
											'{\\html{&nbsp;}}'+
											'{\\choose{[' +
												'\\ins{Yes. Write a setup that will solve for the number of pages per minute that must be typed in order to type $firstunitwhole<sup>$firstunitn</sup>&#8260;<sub>$firstunitd</sub> pages in $number minutes.},' +
												'\\ins{We must divide to solve this problem. The given total number of pages ($firstunitwhole<sup>$firstunitn</sup>&#8260;<sub>$firstunitd</sub>) were typed in $number minutes.  What fraction of a page was typed in one minute?  Write a setup that will solve for the fraction of $firstunitwhole<sup>$firstunitn</sup>&#8260;<sub>$firstunitd</sub> pages that could be typed in one minute.}' +    
											']}{$$previousCorrect}}' +
											'{\\grp{\\css{\\select{$firstunitwhole $firstunitn/$firstunitd pages}{["$firstunitwhole $firstunitn/$firstunitd pages", "$number minutes"]}}{width160}}{\\sign{&div;}}{\css{\\select{$number minutes}{["$firstunitwhole $firstunitn/$firstunitd pages", "$number minutes"]}}{width160}}}' +
										'}'+
									'{well}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }, {
                        problem: '\\image{$illustration}',
                        answer: '\\wb'+
									'{\\css'+
										'{\\rowgrp'+
											'{\\html{If the typist typed $firstunitwhole <sup>$firstunitn</sup>&#8260;<sub>$firstunitd</sub> pages in $number minutes, how many pages per minute did the typist type?}}'+
											'{\\html{&nbsp;}}'+
											'{\\choose{[' +
												'\\ins{Great! Now give the solution.},' +
												'\\ins{This is a division problem.  When we set up a division problem, the <span class=underline>first number must be the total</span> that is being divided up.  In this case the total being divided up is the number of pages in the tray ($firstunitwhole <sup>$firstunitn</sup>&#8260;<sub>$firstunitd</sub> pages), so the number of pages in the tray is placed first in the division set up.  The correct setup is below. Now solve the problem.}' +    
											']}{$$previousCorrect}}' +
											'{\\grp{\\mixed{\\fracstr{$firstunitwhole}}{\\frac{\\fracstr{$firstunitn}}{\\fracstr{$firstunitd}}}}{\\sign{&div;}}{\\html{$number}}{\\sign{=}}{\\mixed{\\input{$secondunitwhole}}{\\frac{\\input{$secondunitn}}{\\input{$secondunitd}}}}{\\html{pages/minute}}}' +
										'}'+
									'{well}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }]
                }]
            },
			// problem 9
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
                        answer: '\\wb'+
									'{\\css'+
										'{\\rowgrp'+
											'{\\html{If the typist typed for $number minutes at a rate of $secondunitwhole <sup>$secondunitn</sup>&#8260;<sub>$secondunitd</sub> of a page per minute, how many pages did the typist type?}}'+
											'{\\html{&nbsp;}}'+
											'{\\ins{You have been <span class=underline>given the number</span> of minutes the typist typed.  How many minutes did the typist type?}}' +
											'{\\grp{\\input{$number}}}' +
										'}'+
									'{well}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }, {
                        problem: '\\image{$illustration}',
						answer: '\\wb' +
									'{\\css'+
										'{\\rowgrp' +
											'{\\html{If the typist typed for $number minutes at a rate of $secondunitwhole <sup>$secondunitn</sup>&#8260;<sub>$secondunitd</sub> of a page per minute, how many pages did the typist type?}}'+
											'{\\html{&nbsp;}}'+
											'{\\choose{[' +
												'\\ins{Yes, the typist typed for $number minutes. To find out how many pages the typist typed if the typist typed for $number minutes at a rate of $secondunitwhole<sup>$secondunitn</sup>&#8260;<sub>$secondunitd</sub> of a page a minute, what operation must we use?},' +
												'\\ins{No, we are told that the typist typed for $number minutes. To find out how many pages the typist typed if the typist typed $number minutes at a rate of $secondunitwhole<sup>$secondunitn</sup>&#8260;<sub>$secondunitd</sub> of a page a minute, what operation must we use?}' +    
											']}{$$previousCorrect}}' +
											'{\\select{Multiplication}{["Addition", "Subtraction", "Multiplication", "Division"]}}' +
										'}'+
									'{well}}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }, {
                        problem: '\\image{$illustration}',
                        answer: '\\wb' +
									'{\\css'+
										'{\\rowgrp' +
											'{\\html{If the typist typed for $number minutes at a rate of $secondunitwhole <sup>$secondunitn</sup>&#8260;<sub>$secondunitd</sub> of a page per minute, how many pages did the typist type?}}'+
											'{\\html{&nbsp;}}'+
											'{\\choose{[' +
												'\\ins{Yes. Write a setup that will solve for the number of pages typed if the typist types $number minutes at the rate of $secondunitwhole<sup>$secondunitn</sup>&#8260;<sub>$secondunitd</sub> pages per minute.},' +
												'\\ins{We must multiply to solve this problem. The typist types $number minutes.  If the typist types at the rate of $secondunitwhole<sup>$secondunitn</sup>&#8260;<sub>$secondunitd</sub> pages per minute, how many pages does the typist type?  Write a setup that will solve for the total number of pages the typist typed.}' +    
											']}{$$previousCorrect}}' +
											'{\\grp{\\css{\\select{[\"$firstMult\",\"$secondMult\"]}{$multArray}}{width160}}'+
											'{\\sign{&bull;}}'+
                                			'{\css{\\select{[\"$secondMult\",\"$firstMult\"]}{$multArray}}{width160}}}'+ 
										'}'+
									'{well}}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }, {
                        problem: '\\image{$illustration}',
                        answer: '\\css'+
									'{\\rowgrp' +
											'{\\html{If the typist typed for $number minutes at a rate of $secondunitwhole <sup>$secondunitn</sup>&#8260;<sub>$secondunitd</sub> of a page per minute, how many pages did the typist type?}}'+
											'{\\html{&nbsp;}}'+
											'{\\choose{[' +
												'\\rowgrp{\\ins{Now solve the problem.}},' +
												'\\ins{This is a *repeated addition* or multiplication problem.  The number of pages the typist can type in one minute ($secondunitwhole<sup>$secondunitn</sup>&#8260;<sub>$secondunitd</sub> pages), needs to be repeated $number times. The correct setup is shown below. Now solve the problem.}' +
											']}{$$previousCorrect}}' +
											'{\\grp{html{$$firstMult}}{\\sign{&bull;}}{\\html{$$secondMult}}{\\sign{=}}{\\grp{\\mixed{\\input{$firstunitwhole}}{\\frac{\\input{$firstunitn}}{\\input{$firstunitd}}}}{\\html{pages}}}}' +
										'}'+
									'{well}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }]
                }]
            },
			// problem 10
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
                        answer: '\\wb'+
									'{\\css'+
										'{\\rowgrp'+
											'{\\html{There are cans of tomatos weighing a total of $firstunitwhole <sup>$firstunitn</sup>&#8260;<sub>$firstunitd</sub> pounds in a box. How many $secondunitwhole<sup>$secondunitn</sup>&#8260;<sub>$secondunitd</sub> pound cans of tomatos are in the box?}}'+
											'{\\html{&nbsp;}}'+
											'{\\ins{You have been given the <strong>total</strong> weight of the cans of tomatos in the box.  What is the weight of <span class=underline>one</span> can?}}' +
											'{\\grp{\\mixed{\\input{$secondunitwhole}}{\\frac{\\input{$secondunitn}}{\\input{$secondunitd}}}}{html{pounds}}}' +
										'}'+
									'{well}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }, {
                        problem: '\\image{$illustration}',
                        answer: '\\wb' +
									'{\\css'+
										'{\\rowgrp' +
											'{\\html{There are cans of tomatos weighing a total of $firstunitwhole <sup>$firstunitn</sup>&#8260;<sub>$firstunitd</sub> pounds in a box. How many $secondunitwhole<sup>$secondunitn</sup>&#8260;<sub>$secondunitd</sub> pound cans of tomatos are in the box?}}'+
											'{\\html{&nbsp;}}'+
											'{\\choose{[' +
												'\\ins{Yes, each can weighs $secondunitwhole<sup>$secondunitn</sup>&#8260;<sub>$secondunitd</sub> pounds. To find out how many cans (each weighing $secondunitwhole<sup>$secondunitn</sup>&#8260;<sub>$secondunitd</sub> pounds) are in the box, what operation must we use?},' +
												'\\ins{No, we are told that each can weighs $secondunitwhole<sup>$secondunitn</sup>&#8260;<sub>$secondunitd</sub> pounds. To find out how many cans (each weighing $secondunitwhole<sup>$secondunitn</sup>&#8260;<sub>$secondunitd</sub> pounds) are in the box , what operation must we use?}' +    
											']}{$$previousCorrect}}' +
											'{\\select{Division}{["Addition", "Subtraction", "Multiplication", "Division"]}}' +
										'}'+
									'{well}}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }, {
                        problem: '\\image{$illustration}',
                        answer: '\\wb' +
									'{\\css'+
										'{\\rowgrp' +
											'{\\html{There are cans of tomatos weighing a total of $firstunitwhole <sup>$firstunitn</sup>&#8260;<sub>$firstunitd</sub> pounds in a box. How many $secondunitwhole<sup>$secondunitn</sup>&#8260;<sub>$secondunitd</sub> pound cans of tomatos are in the box?}}'+
											'{\\html{&nbsp;}}'+
											'{\\choose{[' +
												'\\ins{Yes. Choose the setup that will solve for the number of cans each weighing $secondunitwhole<sup>$secondunitn</sup>&#8260;<sub>$secondunitd</sub> pounds in the box.},' +
												'\\ins{We must divide to solve this problem. The given total weight of the box of tomatos is divided up into cans each weighing $secondunitwhole<sup>$secondunitn</sup>&#8260;<sub>$secondunitd</sub> pounds.  Each $secondunitwhole<sup>$secondunitn</sup>&#8260;<sub>$secondunitd</sub> pounds represents one can. Choose the setup that will solve for the number of cans in the box.}' +    
											']}{$$previousCorrect}}' +
											'{\\grp{\\css{\\select{$firstunitwhole $firstunitn/$firstunitd}{["$firstunitwhole $firstunitn/$firstunitd", "$secondunitwhole $secondunitn/$secondunitd"]}}{width160}}{\\sign{&div;}}{\css{\\select{$secondunitwhole $secondunitn/$secondunitd}{["$firstunitwhole $firstunitn/$firstunitd", "$secondunitwhole $secondunitn/$secondunitd"]}}{width160}}}' +
										'}'+
									'{well}}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }, {
                        problem: '\\image{$illustration}',
                        answer: '\\wb'+
									'{\\css'+
										'{\\rowgrp'+
											'{\\html{There are cans of tomatos weighing a total of $firstunitwhole <sup>$firstunitn</sup>&#8260;<sub>$firstunitd</sub> pounds in a box. How many $secondunitwhole<sup>$secondunitn</sup>&#8260;<sub>$secondunitd</sub> pound cans of tomatos are in the box?}}'+
											'{\\html{&nbsp;}}'+
											'{\\choose{[' +
												'\\ins{Great! Now solve the problem.},' +
												'\\ins{This is a division problem.  When we set up a division problem, the <span class=underline>first number must be the total</span> that is being divided up.  In this case the total being divided up is the weight of the box ($firstunitwhole <sup>$firstunitn</sup>&#8260;<sub>$firstunitd</sub> pounds), so the weight in the box is placed first in the division set up.  The correct setup is below. Now solve the problem.}' +    
											']}{$$previousCorrect}}' +
											'{\\grp{\\mixed{\\fracstr{$firstunitwhole}}{\\frac{\\fracstr{$firstunitn}}{\\fracstr{$firstunitd}}}}{\\sign{&div;}}{\\mixed{\\fracstr{$secondunitwhole}}{\\frac{\\fracstr{$secondunitn}}{\\fracstr{$secondunitd}}}}{\\sign{=}}{\\input{$number}}}' +
										'}'+
									'{well}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }]
                }]
            },
			// problem 11
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
                        answer: '\\wb'+
									'{\\css'+
										'{\\rowgrp'+
											'{\\html{$number cans of tomatos in a box weigh a total of $firstunitwhole <sup>$firstunitn</sup>&#8260;<sub>$firstunitd</sub> pounds.  What is the weight of each can (given that the cans all weigh the same)?}}'+
											'{\\html{&nbsp;}}'+
											'{\\ins{You have been <span class=underline>given the total</span> weight of the cans in the box, and the number of cans in the box.  What is the number of cans in the box?}}' +
											'{\\grp{\\input{$number}}}' +
										'}'+
									'{well}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }, {
                        problem: '\\image{$illustration}',
                        answer: '\\wb' +
									'{\\css'+
										'{\\rowgrp' +
											'{\\html{$number cans of tomatos in a box weigh a total of $firstunitwhole <sup>$firstunitn</sup>&#8260;<sub>$firstunitd</sub> pounds.  What is the weight of each can (given that the cans all weigh the same)?}}'+
											'{\\html{&nbsp;}}'+
											'{\\choose{[' +
												'\\ins{Yes, there are $number of cans in the box. To find the weight of each can, what operation must we use?},' +
												'\\ins{No, there are $number of cans in the box. To find the weight of each can, what operation must we use?}' +    
											']}{$$previousCorrect}}' +
											'{\\select{Division}{["Addition", "Subtraction", "Multiplication", "Division"]}}' +
										'}'+
									'{well}}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }, {
                        problem: '\\image{$illustration}',
                        answer: '\\wb' +
									'{\\css'+
										'{\\rowgrp' +
											'{\\html{$number cans of tomatos in a box weigh a total of $firstunitwhole <sup>$firstunitn</sup>&#8260;<sub>$firstunitd</sub> pounds.  What is the weight of each can (given that the cans all weigh the same)?}}'+
											'{\\html{&nbsp;}}'+
											'{\\choose{[' +
												'\\ins{Yes, now write a setup that will solve this problem.},' +
												'\\ins{We must divide to solve this problem.  The <span class=underline>given total weight</span> of the cans in the box is being divided up into $number cans, all of the same weight.  Pick the set up that will solve for the weight of each can.}' +    
											']}{$$previousCorrect}}' +
											'{\\grp{\\css{\\select{$firstunitwhole $firstunitn/$firstunitd}{["$firstunitwhole $firstunitn/$firstunitd", "$number"]}}{width160}}{\\sign{&div;}}{\css{\\select{$number}{["$firstunitwhole $firstunitn/$firstunitd", "$number"]}}{width160}}}' +
										'}'+
									'{well}}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }, {
                        problem: '\\image{$illustration}',
                        answer: '\\wb' +
									'{\\css'+
										'{\\rowgrp' +
											'{\\html{$number cans of tomatos in a box weigh a total of $firstunitwhole <sup>$firstunitn</sup>&#8260;<sub>$firstunitd</sub> pounds.  What is the weight of each can (given that the cans all weigh the same)?}}'+
											'{\\html{&nbsp;}}'+
											'{\\choose{[' +
												'\\ins{Great! Now give the solution.},' +
												'\\ins{This is a division problem.  When we set up a division problem, the <span class=underline>first number must be the total</span> that is being divided up.  In this case the total is the total weight of the cans in the box ($firstunitwhole <sup>$firstunitn</sup>&#8260;<sub>$firstunitd</sub> pounds) and is placed first in the division set up.  The correct setup is shown below.<br><br>Now solve the problem.}' +    
											']}{$$previousCorrect}}' +
											'{\\rowgrp{\\grp{\\mixed{\\fracstr{$firstunitwhole}}{\\frac{\\fracstr{$firstunitn}}{\\fracstr{$firstunitd}}}}{\\sign{&div;}}{\\frac{\\fracstr{$number}}{\\fracstr{1}}}}{\\html{&nbsp;}}{\\grp{\\sign{=}}{\\grp{\\mixed{\\input{$secondunitwhole}}{\\frac{\\input{$secondunitn}}{\\input{$secondunitd}}}}{\\html{pounds}}}}}' +
										'}'+
									'{well}}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }]
                }]
            },
			// problem 12
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
                        answer: '\\wb'+
									'{\\css'+
										'{\\rowgrp'+
											'{\\html{If $number cans of tomatos are in the box, and each can weighs $secondunitwhole<sup>$secondunitn</sup>&#8260;<sub>$secondunitd</sub> pounds, what is the total weight of the cans in the box?}}'+
											'{\\html{&nbsp;}}'+
											'{\\ins{You have been <span class=underline>given the number</span> of cans of tomatos in the box. How many cans are in the box?}}' +
											'{\\grp{\\input{$number}}}' +
										'}'+
									'{well}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }, {
                        problem: '\\image{$illustration}',
                        answer: '\\wb' +
									'{\\css'+
										'{\\rowgrp' +
											'{\\html{If $number cans of tomatos are in the box, and each can weighs $secondunitwhole<sup>$secondunitn</sup>&#8260;<sub>$secondunitd</sub> pounds, what is the total weight of the cans in the box?}}'+
											'{\\html{&nbsp;}}'+
											'{\\choose{[' +
												'\\ins{Yes, there are $number cans of tomatos in the box. To find out the total combined weight of all the cans in the box, what operation must we use?},' +
												'\\ins{No, we are told there are $number cans of tomatos in the box. To find out the total combined weight of all the cans in the box, what operation must we use?}' +    
											']}{$$previousCorrect}}' +
											'{\\select{Multiplication}{["Addition", "Subtraction", "Multiplication", "Division"]}}' +
										'}'+
									'{well}}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }, {
                        problem: '\\image{$illustration}',
                        answer: '\\wb' +
									'{\\css'+
										'{\\rowgrp' +
											'{\\html{If $number cans of tomatos are in the box, and each can weighs $secondunitwhole<sup>$secondunitn</sup>&#8260;<sub>$secondunitd</sub> pounds, what is the total weight of the cans in the box?}}'+
											'{\\html{&nbsp;}}'+
											'{\\choose{[' +
												'\\ins{Yes, now write a setup that will solve this problem.},' +
												'\\ins{We must multiply to solve this problem.  The <span class=underline>given weight of each can</span> is being multiplied by $number cans.  Pick the set up that will solve for the total combined weight of the cans in the box.}' +    
											']}{$$previousCorrect}}' +
											'{\\grp{\\css{\\select{[\"$firstMult\",\"$secondMult\"]}{$multArray}}{width160}}'+
											'{\\sign{&bull;}}'+
                                			'{\css{\\select{[\"$secondMult\",\"$firstMult\"]}{$multArray}}{width160}}}'+ 
										'}'+
									'{well}}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }, {
                        problem: '\\image{$illustration}',
                        answer: '\\css'+
									'{\\rowgrp' +
											'{\\html{If $number cans of tomatos are in the box, and each can weighs $secondunitwhole<sup>$secondunitn</sup>&#8260;<sub>$secondunitd</sub> pounds, what is the total weight of the cans in the box?}}'+
											'{\\html{&nbsp;}}'+
											'{\\choose{[' +
												'\\rowgrp{\\ins{Now solve the problem.}},' +
												'\\ins{This is a *repeated addition* or multiplication problem.  The weight of each can of tomatos, $secondunitwhole<sup>$secondunitn</sup>&#8260;<sub>$secondunitd</sub> pounds, needs to be repeated $number times. The correct setup is shown below. Now solve the problem.}' +
											']}{$$previousCorrect}}' +
											'{\\grp{html{$$firstMult}}{\\sign{&bull;}}{\\html{$$secondMult}}{\\sign{=}}{\\grp{\\mixed{\\input{$firstunitwhole}}{\\frac{\\input{$firstunitn}}{\\input{$firstunitd}}}}{\\html{pounds}}}}' +
										'}'+
									'{well}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }]
                }]
            }
        },
        data = [
			// problem 1
            { firstunitwhole: '2', firstunitn: '7', firstunitd: '10', secondunitn: '3', secondunitd: '10', number: '9', illustration: '8.5-11_Houses_Money/400x300/Millions_houses_a.jpg', template: 'housesDiv1' },
			// problem 2
            { firstunitwhole: '2', firstunitn: '7', firstunitd: '10', secondunitn: '3', secondunitd: '10', number: '9', illustration: '8.5-11_Houses_Money/400x300/Millions_houses_b.jpg', template: 'housesDiv2' },
			// problem 3
            { firstunitwhole: '2', firstunitn: '7', firstunitd: '10', secondunitn: '3', secondunitd: '10', number: '9', firstMult: '9', secondMult: '3/10', multArray: '[\\"9\\",\\"3/10\\"]', flip: [[1], ["firstMult", "secondMult"]], illustration: '8.5-11_Houses_Money/400x300/Millions_houses_c.jpg', template: 'housesMul' },
			// problem 4
            { firstunitwhole: '4', firstunitn: '4', firstunitd: '5', secondunitwhole: '1', secondunitn: '1', secondunitd: '5', number: '4', illustration: '8.5-12_Cookies/400x300/Cookies_a.jpg', template: 'cookiesDiv1' },
			// problem 5
            { firstunitwhole: '4', firstunitn: '4', firstunitd: '5', secondunitwhole: '1', secondunitn: '1', secondunitd: '5', number: '4', illustration: '8.5-12_Cookies/400x300/Cookies_b.jpg', template: 'cookiesDiv2' },
			// problem 6
            { firstunitwhole: '4', firstunitn: '4', firstunitd: '5', secondunitwhole: '1', secondunitn: '1', secondunitd: '5', number: '4', firstMult: '4', secondMult: '1 4/5', multArray: '[\\"4\\",\\"1 4/5\\"]', flip: [[1], ["firstMult", "secondMult"]], illustration: '8.5-12_Cookies/400x300/Cookies_c.jpg', template: 'cookiesMul' },
			// problem 7
			{ firstunitwhole: '7', firstunitn: '1', firstunitd: '2', secondunitwhole: '', secondunitn: '3', secondunitd: '20', number: '50', illustration: '8.5-9_Typed_Pages/400x300/Typed_Pages_a.jpg', template: 'pagesDiv1' },
			// problem 8
            { firstunitwhole: '7', firstunitn: '1', firstunitd: '2', secondunitwhole: '', secondunitn: '3', secondunitd: '20', number: '50', illustration: '8.5-9_Typed_Pages/400x300/Typed_Pages_b.jpg', template: 'pagesDiv2' },
			// problem 9
            { firstunitwhole: '7', firstunitn: '1', firstunitd: '2', secondunitwhole: '', secondunitn: '3', secondunitd: '20', number: '50', firstMult: '50', secondMult: '3/20', multArray: '[\\"50\\",\\"3/20\\"]', flip: [[1], ["firstMult", "secondMult"]], illustration: '8.5-9_Typed_Pages/400x300/Typed_Pages_c.jpg', template: 'pagesMul' },
			// problem 10
			{ firstunitwhole: '51', firstunitn: '1', firstunitd: '4', secondunitwhole: '1', secondunitn: '1', secondunitd: '4', number: '41', illustration: '8.5-10_Tomato_Cans/400x300/51.25-lbs_X-Cans_1.25-lbs_Can.jpg', template: 'tomCanDiv1' },
			// problem 11
            { firstunitwhole: '51', firstunitn: '1', firstunitd: '4', secondunitwhole: '1', secondunitn: '1', secondunitd: '4', number: '41', illustration: '8.5-10_Tomato_Cans/400x300/51.25lbs_41-Cans_X-Lbs-Can.jpg', template: 'tomCanDiv2' },
			// problem 12
            { firstunitwhole: '51', firstunitn: '1', firstunitd: '4', secondunitwhole: '1', secondunitn: '1', secondunitd: '4', number: '41', firstMult: '41', secondMult: '1 1/4', multArray: '[\\"41\\",\\"1 1/4\\"]', flip: [[1], ["firstMult", "secondMult"]], illustration: '8.5-10_Tomato_Cans/400x300/X-lbs_41-Cans_1.25-lbs_Can.jpg', template: 'tomCanMul' }
        ];/*,
		shuffle = [
		{ problems: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], total: 15}
		];    
    	return dataUtils.build(desc, template, data, shuffle);*/
    
		return dataUtils.build(desc, template, data);

}]);
