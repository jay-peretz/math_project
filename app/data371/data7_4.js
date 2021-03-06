/*global angular */

angular.module('mathSkills').service('data7_4', ['dataUtils', function (dataUtils) {
																		
    var desc = {
            title: '7.4 Fraction Application Problems',
            path: '7.4-fraction-application-problems',
            children: []
        },
        template = {
		   //problem 1
           housesDiv1: {
                title: 'Fraction Application Problems',
                children: [{
                    title: 'Main Answer',
                    children: [{
                        problem: '\\image{$illustration}',
                        answer: '\\rowgrp{\\ins{There are $total acres of land to be developed. If each house is to occupy <sup>$unitn</sup>&#8260;<sub>$unitd</sub> of an acre, how many houses will the developer be able to build?}}{\\grp{\\input{$number}}}',
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
                        answer: '\\wb{\\css{\\rowgrp'
										+'{\\html{There are $total acres of land to be developed. If each house is to occupy <sup>$unitn</sup>&#8260;<sub>$unitd</sub> of an acre, how many houses will the developer be able to build?}}'
										+'{\\html{&nbsp;}}'
										+'{\\ins{You have been given the <strong>total</strong> number of acres of land where houses will be built.  How many acres are needed to build <span class=underline>one</span> house?}}'
										+'{\\frac{\\input{$unitn}}{\\input{$unitd}}}'
										+'}}{well}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }, {
                        problem: '\\image{$illustration}',
                        answer:
                            '\\wb{css{' +
                                '\\rowgrp' +
									'{\\html{There are $total acres of land to be developed. If each house is to occupy <sup>$unitn</sup>&#8260;<sub>$unitd</sub> of an acre, how many houses will the developer be able to build?}}'+
									'{\\html{&nbsp;}}'+
                                    '{\\choose{[' +
                                        '\\ins{Yes, each house occupies <sup>$unitn</sup>&#8260;<sub>$unitd</sub> of an acre. To find out how many houses (each <sup>$unitn</sup>&#8260;<sub>$unitd</sub> of an acre in size) will fit into the total $total acres, what operation must we use?},' +
                                        '\\ins{No, we are told that each house occupies <sup>$unitn</sup>&#8260;<sub>$unitd</sub> of an acre. To find out how many houses (each <sup>$unitn</sup>&#8260;<sub>$unitd</sub> of an acre in size) will fit into the total $total acres, what operation must we use?}' +    
                                    ']}{$$previousCorrect}}' +
                                    '{\\select{Division}{["Addition", "Subtraction", "Multiplication", "Division"]}}' +
                            '}}{well}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }, {
                        problem: '\\image{$illustration}',
                        answer:
                            '\\wb{\\css{' +
                                '\\rowgrp' +
									'{\\html{There are $total acres of land to be developed. If each house is to occupy <sup>$unitn</sup>&#8260;<sub>$unitd</sub> of an acre, how many houses will the developer be able to build?}}'+
									'{\\html{&nbsp;}}'+
                                    '{\\choose{[' +
                                        '\\ins{Yes. Write a setup that will solve for the number of houses to be built.},' +
                                        '\\ins{We must divide to solve this problem. The given total land is being divided up into equal-sized parts&mdash;each <sup>$unitn</sup>&#8260;<sub>$unitd</sub> of an acre.  Each <sup>$unitn</sup>&#8260;<sub>$unitd</sub> of an acre of land will be where one house is built. Write a setup that will solve for the number of houses to be built.}' +    
                                    ']}{$$previousCorrect}}' +
                                    '{\\grp{\\frac{\\input{$total}}{\\input{1}}}{\\sign{&div;}}{\\frac{\\input{$unitn}}{\\input{$unitd}}}}' + 
                            '}}{well}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }, {
                        problem: '\\image{$illustration}',
                        answer: '\\css{\\rowgrp' +
									'{\\html{There are $total acres of land to be developed. If each house is to occupy <sup>$unitn</sup>&#8260;<sub>$unitd</sub> of an acre, how many houses will the developer be able to build?}}'+
									'{\\html{&nbsp;}}'+
									'{\\choose{[' +
										'\\ins{Great! The total of $total acres is being divided up into  pieces that are each <sup>$unitn</sup>&#8260;<sub>$unitd</sub> of an acre in size.  Now solve the problem.},' +
										'\\ins{This is a division problem.  When we set up a division problem, the <span class=underline>first number must be the total</span> that is being divided up.  In this case the $total acres is the total and is placed first in the division set up.  The correct setup is shown below; now solve the problem.}' +     
									']}{$$previousCorrect}}' +
									'{\\grp{\\frac{\\str{$total}}{\\str{1}}}{\\sign{&div;}}{\\frac{\\str{$unitn}}{\\str{$unitd}}}{\\sign{=}}{\\input{$number}}}'+
								'}{well}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }]
                }]
            },
			//problem 2
            housesDiv2: {
                title: 'Fraction Application Problems',
                children: [{
                    title: 'Main Answer',
                    children: [{
                        problem: '\\image{$illustration}',
                        answer: '\\rowgrp'+
									'{\\ins{$number houses are to be built on $total acres of land.  What will be the size of each parcel of land (know that each parcel will be the same size)?}}'+
									'{\\frac{\\input{$unitn}}{\\input{$unitd}}}',
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
                            '\\wb'+
								'{\\css' +
									'{\\rowgrp' +
										'{\\html{$number houses are to be built on $total acres of land.  What will be the size of each parcel of land (know that each parcel will be the same size)?}}'+
										'{\\html{&nbsp;}}'+
										'{\\ins{You have been <span class=underline>given the total</span> number of acres of land where houses will be built.  How many houses are being built?}}' +
										'{\\input{$number}}' +
								'}{well}}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }, {
                        problem: '\\image{$illustration}',
                        answer: 
                            '\\wb' +
								'{\\css'+
									'{\\rowgrp' +
										'{\\html{$number houses are to be built on $total acres of land.  What will be the size of each parcel of land (know that each parcel will be the same size)?}}'+
										'{\\html{&nbsp;}}'+
										'{\\choose{[' +
											'\\ins{Yes, $number houses will be built. To find out the size of each parcel of land, what operation must we use?},' +
											'\\ins{No, we are told $number houses will be built. To find out the size of each parcel of land, what operation must we use?}' +    
										']}{$$previousCorrect}}' +
										'{\\select{Division}{["Addition", "Subtraction", "Multiplication", "Division"]}}' +
								'}{well}}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }, {
                        problem: '\\image{$illustration}',
                        answer:
                            '\\wb' +
								'{\\css'+
									'{\\rowgrp' +
										'{\\html{$number houses are to be built on $total acres of land.  What will be the size of each parcel of land (know that each parcel will be the same size)?}}'+
										'{\\html{&nbsp;}}'+
										'{\\choose{[' +
											'\\ins{Yes, now write a setup that will solve this problem.},' +
											'\\ins{We must divide to solve this problem.  The <span class=underline>given total land</span> is being divided up into $number equal-sized parts of land.  Write a set up that will solve for the size of each parcel of land where a house will be built.}' +    
										']}{$$previousCorrect}}' +
										'{\\grp{\\frac{\\input{$total}}{\\input{1}}}{\\sign{&div;}}{\\frac{\\input{$number}}{\\input{1}}}}' +
								'}{well}}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }, {
                        problem: '\\image{$illustration}',
                        answer: 
                            '\\wb' +
								'{\\css'+
									'{\\rowgrp' +
										'{\\html{$number houses are to be built on $total acres of land.  What will be the size of each parcel of land (know that each parcel will be the same size)?}}'+
										'{\\html{&nbsp;}}'+
										'{\\choose{[' +
											'\\ins{Great! The total of $number houses is being divided up into $total pieces. Now give the solution.},' +
											'\\ins{This is a division problem.  When we set up a division problem, the <span class=underline>first number must be the total</span> that is being divided up.  In this case the $total acres is the total and is placed first in the division set up.  The correct setup is shown below.<br><br>Now solve the problem.}' +
										']}{$$previousCorrect}}' +
										'{\\grp{\\frac{\\str{$total}}{\\str{1}}}{\\sign{&div;}}{\\frac{\\str{$number}}{\\str{1}}}{\\sign{=}}{\\frac{\\input{$unitn}}{\\input{$unitd}}}}' +
								'}{well}}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }]
                }]
            },
			//problem 3
            housesMul: {
                title: 'Fraction Application Problems',
                children: [{
                    title: 'Main Answer',
                    children: [{
                        problem: '\\image{$illustration}',
                        answer: '\\rowgrp'
						+'{\\ins{Each house will occupy <sup>$unitn</sup>&#8260;<sub>$unitd</sub> of an acre.  If $number houses are to be built, how many acres of land are needed?}}'
						+'{\\input{$total}}',
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
											+'{\\html{Each house will occupy <sup>$unitn</sup>&#8260;<sub>$unitd</sub> of an acre.  If $number houses are to be built, how many acres of land are needed?}}'
											+'{\\html{&nbsp;}}'
											+'{\\ins{You are searching for the total number of acres that are needed.  How many acres are needed to build just one house?}}'
											+'{\\grp{\\frac{\\input{$unitn}}{\\input{$unitd}}}{\\html{acres}}}'+
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
											'{\\html{Each house will occupy <sup>$unitn</sup>&#8260;<sub>$unitd</sub> of an acre.  If $number houses are to be built, how many acres of land are needed?}}'+
											'{\\html{&nbsp;}}'+
											'{\\choose{[' +
												'\\ins{Yes, it takes <sup>$unitn</sup>&#8260;<sub>$unitd</sub> of an acre to build one house. How many houses are being built?},' +
												'\\ins{No, we are told it takes <sup>$unitn</sup>&#8260;<sub>$unitd</sub> of an acre to build one house. How many houses are being built?}' +    
											']}{$$previousCorrect}}' +
											'{\\grp{\\input{$number}}{\\html{houses}}}' +
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
											'{\\html{Each house will occupy <sup>$unitn</sup>&#8260;<sub>$unitd</sub> of an acre.  If $number houses are to be built, how many acres of land are needed?}}'+
											'{\\html{&nbsp;}}'+
											'{\\choose{[' +
												'\\ins{Yes, $number houses are being built. To find out the total number of acres required to build $number houses, each house occupying <sup>$unitn</sup>&#8260;<sub>$unitd</sub> of an acre, what operation must we use?},' +
												'\\ins{No, we are told $number houses are being built. To find out the total number of acres required to build $number houses, each house occupying <sup>$unitn</sup>&#8260;<sub>$unitd</sub> of an acre, what operation must we use?}' +    
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
											'{\\html{Each house will occupy <sup>$unitn</sup>&#8260;<sub>$unitd</sub> of an acre.  If $number houses are to be built, how many acres of land are needed?}}'+
											'{\\html{&nbsp;}}'+
											'{\\choose{[' +
												'\\rowgrp{\\ins{Yes, the <sup>$unitn</sup>&#8260;<sub>$unitd</sub> of an acre is being repeated $number times.  Write a setup that will solve for the total amount of land that is needed to build all $number houses.}},' +
												'\\ins{We must multiply to solve this problem.  The <sup>$unitn</sup>&#8260;<sub>$unitd</sub> of an acre is being repeated $number times. Write a setup that will solve for the total amount of land that is needed to build all $number houses.}' +    
											']}{$$previousCorrect}}' +
											'{\\grp{\\frac{\\input{$firstMultNum}}{\\input{$firstMultDen}}}{\\sign{&times;}}{\\frac{\\input{$secondMultNum}}{\\input{$secondMultDen}}}}' +
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
											'{\\html{Each house will occupy <sup>$unitn</sup>&#8260;<sub>$unitd</sub> of an acre.  If $number houses are to be built, how many acres of land are needed?}}'+
											'{\\html{&nbsp;}}'+
											'{\\choose{[' +
												'\\rowgrp{\\ins{Now solve the problem.}},' +
												'\\ins{This is a *repeated addition* or multiplication problem.  The <sup>$unitn</sup>&#8260;<sub>$unitd</sub> of an acre needs to be repeated $number times. The correct setup is shown below. Now solve the problem.}' +
											']}{$$previousCorrect}}' +
											'{\\grp{\\frac{\\fracstr{$$unitn}}{\\fracstr{$$unitd}}}{\\sign{&times;}}{\\frac{\\fracstr{$$number}}{\\fracstr{$$unitDenom}}}{\\sign{=}}{\\input{$total}}{\\html{acres}}}' +
										'}'+
									'{well}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }]
                }]
            },
            /// houses div frac
             /*housesDivFrac1: {
                title: 'Fraction Application Problems',
                children: [{
                    title: 'Main Answer',
                    children: [{
                        problem: '\\image{$illustration}',
                        answer: '\\rowgrp'+
									'{\\ins{There are <sup>$totaln</sup>&#8260;<sub>$totald</sub> acres of land to be developed. If each house is to occupy <sup>$unitn</sup>&#8260;<sub>$unitd</sub> of an acre, how many houses will the developer be able to build?}}'+
									'{\\input{$number}}',
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
											+'{\\html{There are <sup>$totaln</sup>&#8260;<sub>$totald</sub> acres of land to be developed. If each house is to occupy <sup>$unitn</sup>&#8260;<sub>$unitd</sub> of an acre, how many houses will the developer be able to build?}}'
											+'{\\html{&nbsp;}}'
											+'{\\ins{You have been given the <strong>total</strong> number of acres of land where houses will be built.  How many acres are needed to build <span class=underline>one</span> house?}}'
											+'{\\frac{\\input{$unitn}}{\\input{$unitd}}}'
										+'}'
									+'{well}}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }, {
                        problem: '\\image{$illustration}',
                        answer:'\\wb'+
									'{\\css'+
										'{\\rowgrp'+
											'{\\html{There are <sup>$totaln</sup>&#8260;<sub>$totald</sub> acres of land to be developed. If each house is to occupy <sup>$unitn</sup>&#8260;<sub>$unitd</sub> of an acre, how many houses will the developer be able to build?}}'+
											'{\\html{&nbsp;}}'+
											'{\\choose{[' +
												'\\ins{Yes, each house occupies <sup>$unitn</sup>&#8260;<sub>$unitd</sub> of an acre. To find out how many houses (each <sup>$unitn</sup>&#8260;<sub>$unitd</sub> of an acre in size) will fit into the total <sup>$totaln</sup>&#8260;<sub>$totald</sub> acres, what operation must we use?},' +
												'\\ins{No, we are told that each house occupies <sup>$unitn</sup>&#8260;<sub>$unitd</sub> of an acre. To find out how many houses (each <sup>$unitn</sup>&#8260;<sub>$unitd</sub> of an acre in size) will fit into the total <sup>$totaln</sup>&#8260;<sub>$totald</sub> acres, what operation must we use?}' +    
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
                        answer: '\\wb'+
									'{\\css'+
										'{\\rowgrp'+
											'{\\html{There are <sup>$totaln</sup>&#8260;<sub>$totald</sub> acres of land to be developed. If each house is to occupy <sup>$unitn</sup>&#8260;<sub>$unitd</sub> of an acre, how many houses will the developer be able to build?}}'+
											'{\\html{&nbsp;}}'+
											'{\\choose{[' +
												'\\ins{Yes. Write a setup that will solve for the number of houses to be built.},' +
												'\\ins{We must divide to solve this problem. The given total land is being divided up into equal-sized parts&mdash;each <sup>$unitn</sup>&#8260;<sub>$unitd</sub> of an acre.  Each <sup>$unitn</sup>&#8260;<sub>$unitd</sub> of an acre of land will be where one house is built. Write a setup that will solve for the number of houses to be built.}' +    
											']}{$$previousCorrect}}' +
											'{\\grp{\\frac{\\input{$totaln}}{\\input{$totald}}}{\\sign{&div;}}{\\frac{\\input{$unitn}}{\\input{$unitd}}}}' + 
										'}'+
									'{well}}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }, {
                        problem: '\\image{$illustration}',
                        answer:'\\css'+
										'{\\rowgrp'+
											'{\\html{There are <sup>$totaln</sup>&#8260;<sub>$totald</sub> acres of land to be developed. If each house is to occupy <sup>$unitn</sup>&#8260;<sub>$unitd</sub> of an acre, how many houses will the developer be able to build?}}'+
											'{\\html{&nbsp;}}'+
											'{\\choose{[' +
												'\\ins{Great! Now solve the problem.},' +
												'\\ins{This is a division problem.  When we set up a division problem, the <span class=underline>first number must be the total</span> that is being divided up.  In this case the <sup>$totaln</sup>&#8260;<sub>$totald</sub> acres is the total and is placed first in the division set up.  The correct setup is shown to the right. Now solve the problem.}' +    
											']}{$$previousCorrect}}' +
											'{\\grp{\\frac{\\str{$totaln}}{\\str{$totald}}}{\\sign{&div;}}{\\frac{\\str{$unitn}}{\\str{$unitd}}}{\\sign{=}}{\\input{$number}}}'+
										'}'+
									'{well}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }]
                }]
            },
            housesDivFrac2: {
                title: 'Fraction Application Problems',
                children: [{
                    title: 'Main Answer',
                    children: [{
                        problem: '\\image{$illustration}',
                        answer: '\\col{\\ins{$number houses are to be built on <sup>$totaln</sup>&#8260;<sub>$totald</sub> acres of land.  What will be the size of each parcel of land (know that each parcel will be the same size)?}}{\\frac{\\input{$unitn}}{\\input{$unitd}}}',
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
											'{\\html{$number houses are to be built on <sup>$totaln</sup>&#8260;<sub>$totald</sub> acres of land.  What will be the size of each parcel of land (know that each parcel will be the same size)?}}'+
											'{\\html{&nbsp;}}'+
											'{\\ins{You have been <span class=underline>given the total</span> number of acres of land where houses will be built.  How many houses are being built?}}' +
											'{\\input{$number}}' +
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
											'{\\html{$number houses are to be built on <sup>$totaln</sup>&#8260;<sub>$totald</sub> acres of land.  What will be the size of each parcel of land (know that each parcel will be the same size)?}}'+
											'{\\html{&nbsp;}}'+
											'{\\choose{[' +
												'\\ins{Yes, $number houses will be built. To find out the size of each parcel of land, what operation must we use?},' +
												'\\ins{No, we are told $number houses will be built. To find out the size of each parcel of land, what operation must we use?}' +    
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
                        answer: '\\wb'+
									'{\\css'+
										'{\\rowgrp'+
											'{\\html{$number houses are to be built on <sup>$totaln</sup>&#8260;<sub>$totald</sub> acres of land.  What will be the size of each parcel of land (know that each parcel will be the same size)?}}'+
											'{\\html{&nbsp;}}'+
											'{\\choose{[' +
												'\\ins{Yes, now write a setup that will solve this problem.},' +
												'\\ins{We must divide to solve this problem.  The <span class=underline>given total land</span> is being divided up into $number equal-sized parts of land.  Write a set up that will solve for the size of each parcel of land where a house will be built.}' +    
											']}{$$previousCorrect}}' +
											'{\\grp{\\frac{\\input{$totaln}}{\\input{$totald}}}{\\sign{&div;}}{\\frac{\\input{$number}}{\\input{1}}}}' +
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
											'{\\html{$number houses are to be built on <sup>$totaln</sup>&#8260;<sub>$totald</sub> acres of land.  What will be the size of each parcel of land (know that each parcel will be the same size)?}}'+
											'{\\html{&nbsp;}}'+
											'{\\choose{[' +
												'\\ins{Great! Now give the solution.},' +
												'\\ins{This is a division problem.  When we set up a division problem, the <span class=underline>first number must be the total</span> that is being divided up.  In this case the <sup>$totaln</sup>&#8260;<sub>$totald</sub> acres is the total and is placed first in the division set up.  The correct setup is shown below.<br><br>Now solve the problem.}' +
											']}{$$previousCorrect}}' +
											'{\\grp{\\frac{\\str{$totaln}}{\\str{$totald}}}{\\sign{&div;}}{\\frac{\\str{$number}}{\\str{1}}}{\\sign{=}}{\\frac{\\input{$unitn}}{\\input{$unitd}}}}' +
										'}'+
									'{well}}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }]
                }]
            },
            housesMulFrac: {
                title: 'Fraction Application Problems',
                children: [{
                    title: 'Main Answer',
                    children: [{
                        problem: '\\image{$illustration}',
                        answer: '\\col{\\ins{Each house will occupy <sup>$unitn</sup>&#8260;<sub>$unitd</sub> of an acre.  If $number houses are to be built, how many acres of land are needed?}}{\\frac{\\input{$totaln}}{\\input{$totald}}}',
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
											'{\\html{Each house will occupy <sup>$unitn</sup>&#8260;<sub>$unitd</sub> of an acre.  If $number houses are to be built, how many acres of land are needed?}}'+
											'{\\html{&nbsp;}}'+
											'{\\ins{You are searching for the total number of acres that are needed.  How many acres are needed to build one house?}}'+
											'{\\frac{\\input{$unitn}}{\\input{$unitd}}}'+
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
											'{\\html{Each house will occupy <sup>$unitn</sup>&#8260;<sub>$unitd</sub> of an acre.  If $number houses are to be built, how many acres of land are needed?}}'+
											'{\\html{&nbsp;}}'+
											'{\\ins{How many houses are being built?}}'+
											'{\\input{$number}}'+
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
											'{\\html{Each house will occupy <sup>$unitn</sup>&#8260;<sub>$unitd</sub> of an acre.  If $number houses are to be built, how many acres of land are needed?}}'+
											'{\\html{&nbsp;}}'+
											'{\\choose{[' +
												'\\ins{Yes, $number houses are being built. To find out the total number of acres required to build $number houses, each house occupying <sup>$unitn</sup>&#8260;<sub>$unitd</sub> of an acre, what operation must we use?},' +
												'\\ins{No, we are told $number houses are being built. To find out the total number of acres required to build $number houses, each house occupying <sup>$unitn</sup>&#8260;<sub>$unitd</sub> of an acre, what operation must we use?}' +    
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
											'{\\html{Each house will occupy <sup>$unitn</sup>&#8260;<sub>$unitd</sub> of an acre.  If $number houses are to be built, how many acres of land are needed?}}'+
											'{\\html{&nbsp;}}'+
											'{\\choose{[' +
												'\\rowgrp{\\ins{Yes, the <sup>$unitn</sup>&#8260;<sub>$unitd</sub> of an acre is being repeated $number times.  Write a setup that will solve for the total amount of land that is needed to build all $number houses.}},' +
												'\\ins{We must multiply to solve this problem.  The <sup>$unitn</sup>&#8260;<sub>$unitd</sub> of an acre is being repeated $number times. Write a setup that will solve for the total amount of land that is needed to build all $number houses.}' +
											']}{$$previousCorrect}}' +
											'{\\grp{\\frac{\\input{[$unitn, $number]}}{\\input{[$unitd, 1]}}}{\\sign{&times;}}{\\frac{\\input{[$number, $unitn]}}{\\input{[1, $unitd]}}}}' +
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
											'{\\html{Each house will occupy <sup>$unitn</sup>&#8260;<sub>$unitd</sub> of an acre.  If $number houses are to be built, how many acres of land are needed?}}'+
											'{\\html{&nbsp;}}'+
											'{\\choose{[' +
												'\\rowgrp{\\ins{Now solve the problem.}},' +
												'\\ins{This is a *repeated addition* or multiplication problem.  The <sup>$unitn</sup>&#8260;<sub>$unitd</sub> of an acre needs to be repeated $number times. The correct setup is shown below. Now solve the problem.}' +
											']}{$$previousCorrect}}' +
											'{\\grp{\\frac{\\fracstr{$unitn}}{\\fracstr{$unitd}}}{\\sign{&times;}}{\\frac{\\fracstr{$number}}{\\fracstr{1}}}{\\sign{=}}{\\frac{\\input{$totaln}}{\\input{$totald}}}{\\html{acres}}}' +
										'}'+
									'{well}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }]
                }]
            },*/
			//problem 4
			dollarsLeftFromFraction: {
                title: 'Mixed Fraction Application Problems',
                children: [{
                    title: 'Main Answer',
                    children: [{
                        problem: '\\image{$illustration}',
                        answer: '\\rowgrp'
									+'{\\ins{Justina had $number. She did some shopping, and came home with <sup>$secondunitn</sup>&#8260;<sub>$secondunitd</sub> of the $number. How much money did she have left?}}'
									+'{\\grp{\\html{$dollarSign}}{\\input{$dollarsLeft}}}',
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
											'{\\html{Justina had $number. She did some shopping, and came home with <sup>$secondunitn</sup>&#8260;<sub>$secondunitd</sub> of the $number. How much money did she have left?}}'+
											'{\\html{&nbsp;}}'+
											'{\\ins{You have been given the total amount of money which Justina had before she went shopping.  How much money did she start out with?}}' +
											'{\\grp{\\html{$dollarSign}}{\\input{$plainDollars}}}' +
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
											'{\\html{Justina had $number. She did some shopping, and came home with <sup>$secondunitn</sup>&#8260;<sub>$secondunitd</sub> of the $number. How much money did she have left?}}'+
											'{\\html{&nbsp;}}'+
											'{\\choose{[' +
												'\\ins{Yes, Justina had $number. Now, what part or what fraction <strong>of</strong> that money did she have left?},' +
												'\\ins{No, we are told that she started with $number. What part or what fraction <strong>of</strong> that money did she have left?}' +    
											']}{$$previousCorrect}}' +
											'{\\frac{\\input{$secondunitn}}{\\input{$secondunitd}}}' +
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
											'{\\html{Justina had $number. She did some shopping, and came home with <sup>$secondunitn</sup>&#8260;<sub>$secondunitd</sub> of the $number. How much money did she have left?}}'+
											'{\\html{&nbsp;}}'+
											'{\\choose{[' +
												'\\rowgrp{\\ins{Yes, Justina had <sup>$secondunitn</sup>&#8260;<sub>$secondunitd</sub> of her $number left. What operation must we use to find the actual amount of money she had left?}},' +
												'\\ins{No, Justina had <sup>$secondunitn</sup>&#8260;<sub>$secondunitd</sub> of her $number left.  What operation must we use to find the actual amount of money she had left?}' +    
											']}{$$previousCorrect}}' +                                    
											'{\\grp{\\select{Multiplication}{["Addition", "Subtraction", "Multiplication", "Division"]}}}' +
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
											'{\\html{Justina had $number. She did some shopping, and came home with <sup>$secondunitn</sup>&#8260;<sub>$secondunitd</sub> of the $number. How much money did she have left?}}'+
											'{\\html{&nbsp;}}'+
											'{\\choose{[' +
												'\\rowgrp{\\ins{Yes. Write a setup that will solve for the amount of money she had left.}},' +
												'\\ins{This is a <span class=underline>number of another number</span> problem.  The &quot;of&quot; between two number values means <span class=underline>multiply</span>. Write a setup that will solve for the amount of money she had left.}' +
											']}{$$previousCorrect}}' +
											'{\\grp{\\frac{\\input{$secondunitn}}{\\input{$secondunitd}}}{\\sign{&bull;}}{\\input{$plainDollars}}}}' +
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
											'{\\html{Justina had $number. She did some shopping, and came home with <sup>$secondunitn</sup>&#8260;<sub>$secondunitd</sub> of the $number. How much money did she have left?}}'+
											'{\\html{&nbsp;}}'+
											'{\\choose{[' +
												'\\rowgrp{\\ins{Now solve the problem.}},' +
												'\\ins{The amount of money Justina spent is the fraction of the money she spent (<sup>$secondunitn</sup>&#8260;<sub>$secondunitd</sub>) times the total she had to begin with ($number).  The correct setup is below. Now solve the problem.}' +
											']}{$$previousCorrect}}' +
											'{\\grp{\\frac{\\fracstr{$secondunitn}}{\\fracstr{$secondunitd}}}{\\sign{&bull;}}{\\html{$number}}{\\sign{=}}{\\html{$dollarSign}}{\\input{$dollarsLeft}}}' +
                            			'}'+
									'{well}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }]
                }]
            },
			//problem 5
            dollarsFindFractionSpent: {
                title: 'Mixed Fraction Application Problems',
                children: [{
                    title: 'Main Answer',
                    children: [{
                        problem: '\\image{$illustration}',
                        answer: '\\rowgrp'
									+'{\\ins{Devinder had $number. He spent $spent of the $number shopping. What fraction of the $number did he spend?}}'
									+'{\\grp{\\frac{\\input{$secondunitn}}{\\input{$secondunitd}}}}',
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
											'{\\html{Devinder had $number. He spent $spent of the $number shopping. What fraction of the $number did he spend?}}'+
											'{\\html{&nbsp;}}'+
											'{\\ins{You have been given the total amount of money which Devinder had before he went shopping.  How much money did he start out with?}}' +
											'{\\grp{\\html{$dollarSign}}{\\input{$plainDollars}}}' +
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
											'{\\html{Devinder had $number. He spent $spent of the $number shopping. What fraction of the $number did he spend?}}'+
											'{\\html{&nbsp;}}'+
											'{\\choose{[' +
												'\\ins{Yes, Devinder had $number. Now, how much money did he spend?},' +
												'\\ins{No, we are told that he started with $number. How much money did he spend?}' +    
											']}{$$previousCorrect}}' +
											'{\\grp{\\html{$dollarSign}}{\\input{$plainSpent}}}' +
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
											'{\\html{Devinder had $number. He spent $spent of the $number shopping. What fraction of the $number did he spend?}}'+
											'{\\html{&nbsp;}}'+
											'{\\choose{[' +
												'\\rowgrp{\\ins{Yes, Devinder spent $spent. Using the numbers $firstunitn and $firstunitd, write a fraction that shows the part of $firstunitd that $firstunitn represents.}},' +
												'\\ins{No, Devinder spent $spent.  The $spent is a part of the total $number amount. Using the numbers $firstunitn and $firstunitd, write a fraction that shows the part of $firstunitd that $firstunitn represents.}' +
											']}{$$previousCorrect}}' +
											'{\\grp{\\frac{\\input{$firstunitn}}{\\input{$firstunitd}}}}' +
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
											'{\\html{Devinder had $number. He spent $spent of the $number shopping. What fraction of the $number did he spend?}}'+
											'{\\html{&nbsp;}}'+
											'{\\choose{[' +
												'\\ins{Simplify the fraction <sup>$firstunitn</sup>&#8260;<sub>$firstunitd</sub> to lowest terms.},' +
												'\\ins{The fraction of money that Devinder spent can be represented as <sup>$firstunitn</sup>&#8260;<sub>$firstunitd</sub> of his total. Simplify the fraction to lowest terms.}' +
											']}{$$previousCorrect}}' +
											'{\\grp{\\frac{\\input{$secondunitn}}{\\input{$secondunitd}}}}'+
										'}'+
									'{well}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }]
                }]
            },
			//problem 6
            dollarsFindFractionLeft: {
                title: 'Mixed Fraction Application Problems',
                children: [{
                    title: 'Main Answer',
                    children: [{
                        problem: '\\image{$illustration}',
                        answer: '\\rowgrp'
									+'{\\ins{Matt had $number. After he went shopping, he had $left of the $number left. What fraction of the $number did he have left?}}'
									+'{\\grp{\\frac{\\input{$secondunitn}}{\\input{$secondunitd}}}}',
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
											'{\\html{Matt had $number. After he went shopping, he had $left of the $number left. What fraction of the $number did he have left?}}'+
											'{\\html{&nbsp;}}'+
											'{\\ins{You have been given the total amount of money which Matt had before he went shopping.  How much money did he start out with?}}' +
											'{\\grp{\\html{$dollarSign}}{\\input{$plainDollars}}}' +
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
											'{\\html{Matt had $number. After he went shopping, he had $left of the $number left. What fraction of the $number did he have left?}}'+
											'{\\html{&nbsp;}}'+
											'{\\choose{[' +
												'\\ins{Yes, Matt had $number. Now, how much money did he have left?},' +
												'\\ins{No, we are told that he started with $number. How much money did he have left?}' +    
											']}{$$previousCorrect}}' +
											'{\\grp{\\html{$dollarSign}}{\\input{$plainLeft}}}' +
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
											'{\\html{Matt had $number. After he went shopping, he had $left of the $number left. What fraction of the $number did he have left?}}'+
											'{\\html{&nbsp;}}'+
											'{\\choose{[' +
												'\\rowgrp{\\ins{Yes, Matt had $left left. Using $firstunitn and $firstunitd, write a fraction that shows the part of $firstunitd that $firstunitn represents.}},' +
												'\\ins{No, Matt had $left left.  The $left is a part of the total $number amount. Using $firstunitn and $firstunitd, write a fraction that shows the part of $firstunitd that $firstunitn represents.}' +
											']}{$$previousCorrect}}' +
											'{\\grp{\\frac{\\input{$firstunitn}}{\\input{$firstunitd}}}}' +
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
											'{\\html{Matt had $number. After he went shopping, he had $left of the $number left. What fraction of the $number did he have left?}}'+
											'{\\html{&nbsp;}}'+
											'{\\choose{[' +
												'\\ins{Now reduce the fraction if possible.},' +
												'\\ins{The fraction of money that Matt had left can be represented as <sup>$firstunitn</sup>&#8260;<sub>$firstunitd</sub> of his total.  Reduce the fraction if possible.}' +
											']}{$$previousCorrect}}' +
											'{\\reducefrac{\\frac{\\fracstr{$firstunitn}}{\\fracstr{$firstunitd}}}}'+
										'}'+
									'{well}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }]
                }]
            },
			//problem 7
			dollarsLeftFromFraction2: {
                title: 'Mixed Fraction Application Problems',
                children: [{
                    title: 'Main Answer',
                    children: [{
                        problem: '\\image{$illustration}',
                        answer: '\\rowgrp'
									+'{\\ins{Rene had $number. She paid some bills, and was left with <sup>$secondunitn</sup>&#8260;<sub>$secondunitd</sub> of the $number. How much money did she have left?}}'
									+'{\\grp{\\html{$dollarSign}}{\\input{$dollarsLeft}}}',
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
											'{\\html{Rene had $number. She paid some bills, and was left with <sup>$secondunitn</sup>&#8260;<sub>$secondunitd</sub> of the $number. How much money did she have left?}}'+
											'{\\html{&nbsp;}}'+
											'{\\ins{You have been given the total amount of money which Rene had before she paid bills.  How much money did she start out with?}}' +
											'{\\grp{\\html{$dollarSign}}{\\input{$plainDollars}}}' +
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
											'{\\html{Rene had $number. She paid some bills, and was left with <sup>$secondunitn</sup>&#8260;<sub>$secondunitd</sub> of the $number. How much money did she have left?}}'+
											'{\\html{&nbsp;}}'+
											'{\\choose{[' +
												'\\ins{Yes, Rene had $number. Now, what part or what fraction <strong>of</strong> that money did she have left?},' +
												'\\ins{No, we are told that she started with $number. What part or what fraction <strong>of</strong> that money did she have left?}' +    
											']}{$$previousCorrect}}' +
											'{\\frac{\\input{$secondunitn}}{\\input{$secondunitd}}}' +
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
											'{\\html{Rene had $number. She paid some bills, and was left with <sup>$secondunitn</sup>&#8260;<sub>$secondunitd</sub> of the $number. How much money did she have left?}}'+
											'{\\html{&nbsp;}}'+
											'{\\choose{[' +
												'\\rowgrp{\\ins{Yes, Rene had <sup>$secondunitn</sup>&#8260;<sub>$secondunitd</sub> of her $number left. What operation must we use to find the actual amount of money she had left?}},' +
												'\\ins{No, Rene had <sup>$secondunitn</sup>&#8260;<sub>$secondunitd</sub> of her $number left.  What operation must we use to find the actual amount of money she had left?}' +    
											']}{$$previousCorrect}}' +                                    
											'{\\grp{\\select{Multiplication}{["Addition", "Subtraction", "Multiplication", "Division"]}}}' +
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
											'{\\html{Rene had $number. She paid some bills, and was left with <sup>$secondunitn</sup>&#8260;<sub>$secondunitd</sub> of the $number. How much money did she have left?}}'+
											'{\\html{&nbsp;}}'+
											'{\\choose{[' +
												'\\rowgrp{\\ins{Yes. Write a setup that will solve for the amount of money she had left.}},' +
												'\\ins{This is a <span class=underline>number of another number</span> problem.  The &quot;of&quot; between two number values means <span class=underline>multiply</span>. Write a setup that will solve for the amount of money she had left.}' +
											']}{$$previousCorrect}}' +
											'{\\grp{\\frac{\\input{$secondunitn}}{\\input{$secondunitd}}}{\\sign{&bull;}}{\\html{$dollarSign}}{\\input{$plainDollars}}}}' +
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
											'{\\html{Rene had $number. She paid some bills, and was left with <sup>$secondunitn</sup>&#8260;<sub>$secondunitd</sub> of the $number. How much money did she have left?}}'+
											'{\\html{&nbsp;}}'+
											'{\\choose{[' +
												'\\rowgrp{\\ins{Now solve the problem.}},' +
												'\\ins{The amount of money Rene had left is the fraction of the money she had left (<sup>$secondunitn</sup>&#8260;<sub>$secondunitd</sub>) times the total she had to begin with ($number).  The correct setup is below. Now solve the problem.}' +
											']}{$$previousCorrect}}' +
											'{\\grp{\\frac{\\fracstr{$secondunitn}}{\\fracstr{$secondunitd}}}{\\sign{&bull;}}{\\html{$number}}{\\sign{=}}{\\html{$dollarSign}}{\\input{$dollarsLeft}}}' +
										'}'+
									'{well}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }]
                }]
            },
			//problem 8
            dollarsFindFractionSpent2: {
                title: 'Mixed Fraction Application Problems',
                children: [{
                    title: 'Main Answer',
                    children: [{
                        problem: '\\image{$illustration}',
                        answer: '\\rowgrp'
									+'{\\ins{Penelope had $number. She spent $spent of the $number on bills. What fraction of the $number did she spend?}}'
									+'{\\grp{\\frac{\\input{$secondunitn}}{\\input{$secondunitd}}}}',
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
											'{\\html{Penelope had $number. She spent $spent of the $number on bills. What fraction of the $number did she spend?}}'+
											'{\\html{&nbsp;}}'+
											'{\\ins{You have been given the total amount of money which Penelope had before she paid bills.  How much money did she start out with?}}' +
											'{\\grp{\\html{$dollarSign}}{\\input{$plainDollars}}}' +
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
											'{\\html{Penelope had $number. She spent $spent of the $number on bills. What fraction of the $number did she spend?}}'+
											'{\\html{&nbsp;}}'+
											'{\\choose{[' +
												'\\ins{Yes, Penelope had $number. Now, how much money did she spend?},' +
												'\\ins{No, we are told that she started with $number. How much money did she spend?}' +    
											']}{$$previousCorrect}}' +
											'{\\grp{\\html{$dollarSign}}{\\input{$plainSpent}}}' +
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
											'{\\html{Penelope had $number. She spent $spent of the $number on bills. What fraction of the $number did she spend?}}'+
											'{\\html{&nbsp;}}'+
											'{\\choose{[' +
												'\\rowgrp{\\ins{Yes, Penelope spent $spent. Using the numbers $firstunitn and $firstunitd, write a fraction that shows the part of $firstunitd that $firstunitn represents.}},' +
												'\\ins{No, Penelope spent $spent.  The $spent is a part of the total $number amount. Using the numbers $firstunitn and $firstunitd, write a fraction that shows the part of $firstunitd that $firstunitn represents.}' +
											']}{$$previousCorrect}}' +
											'{\\grp{\\frac{\\input{$firstunitn}}{\\input{$firstunitd}}}}' +
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
											'{\\html{Penelope had $number. She spent $spent of the $number on bills. What fraction of the $number did she spend?}}'+
											'{\\html{&nbsp;}}'+
											'{\\choose{[' +
												'\\ins{Simplify the fraction <sup>$firstunitn</sup>&#8260;<sub>$firstunitd</sub> to lowest terms.},' +
												'\\ins{The fraction of money that Penelope spent can be represented as <sup>$firstunitn</sup>&#8260;<sub>$firstunitd</sub> of her total.  Simplify the fraction to lowest terms.}' +
											']}{$$previousCorrect}}' +
											'{\\grp{\\frac{\\input{$secondunitn}}{\\input{$secondunitd}}}}'+
										'}'+
									'{well}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }]
                }]
            },
			//problem 9
            dollarsFindFractionLeft2: {
                title: 'Mixed Fraction Application Problems',
                children: [{
                    title: 'Main Answer',
                    children: [{
                        problem: '\\image{$illustration}',
                        answer: '\\rowgrp'
									+'{\\ins{Damian had $number. After he paid bills, he had $left of the $number left. What fraction of the $number did he have left?}}'
									+'{\\grp{\\frac{\\input{$secondunitn}}{\\input{$secondunitd}}}}',
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
											'{\\html{Damian had $number. After he paid bills, he had $left of the $number left. What fraction of the $number did he have left?}}'+
											'{\\html{&nbsp;}}'+
											'{\\ins{You have been given the total amount of money which Damian had before he paid bills.  How much money did he start out with?}}' +
											'{\\grp{\\html{$dollarSign}}{\\input{$plainDollars}}}' +
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
											'{\\html{Damian had $number. After he paid bills, he had $left of the $number left. What fraction of the $number did he have left?}}'+
											'{\\html{&nbsp;}}'+
											'{\\choose{[' +
												'\\ins{Yes, Damian had $number. Now, how much money did he have left?},' +
												'\\ins{No, we are told that he started with $number. How much money did he have left?}' +    
											']}{$$previousCorrect}}' +
											'{\\grp{\\html{$dollarSign}}{\\input{$plainLeft}}}' +
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
											'{\\html{Damian had $number. After he paid bills, he had $left of the $number left. What fraction of the $number did he have left?}}'+
											'{\\html{&nbsp;}}'+
											'{\\choose{[' +
												'\\rowgrp{\\ins{Yes, Damian had $left left. Using $firstunitn and $firstunitd, write a fraction that shows the part of $firstunitd that $firstunitn represents.}},' +
												'\\ins{No, Damian had $left left.  The $left is a part of the total $number amount. Using $firstunitn and $firstunitd, write a fraction that shows the part of $firstunitd that $firstunitn represents.}' +
											']}{$$previousCorrect}}' +
											'{\\grp{\\frac{\\input{$firstunitn}}{\\input{$firstunitd}}}}' +
										'}'+
									'{well}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }, {
                        problem: '\\image{$illustration}',
                        answer: '\\wb{' +
									'\\css{'+
										'\\rowgrp' +
											'{\\html{Damian had $number. After he paid bills, he had $left of the $number left. What fraction of the $number did he have left?}}'+
											'{\\html{&nbsp;}}'+
											'{\\choose{[' +
												'\\ins{Now reduce the fraction if possible.},' +
												'\\ins{The fraction of money that Damian had left can be represented as <sup>$firstunitn</sup>&#8260;<sub>$firstunitd</sub> of his total.  Reduce the fraction if possible.}' +
											']}{$$previousCorrect}}' +
											'{\\reducefrac{\\frac{\\fracstr{$firstunitn}}{\\fracstr{$firstunitd}}}}'+
										'}'+
									'{well}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }]
                }]
            },
			//problem 10
			coffeeDiv1: {
                title: 'Fraction Application Problems',
                children: [{
                    title: 'Main Answer',
                    children: [{
                        problem: '\\image{$illustration}',
                        answer: '\\rowgrp'+
									'{\\ins{There are $total pounds of coffee in a barrel. If each bag of coffee is to weigh <sup>$unitn</sup>&#8260;<sub>$unitd</sub> pounds, how many bags of coffee will the barrel produce?}}'+
									'{\\grp{\\input{$number}}}',
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
                        answer: '\\wb{\\css{\\rowgrp'
										+'{\\html{There are $total pounds of coffee in a barrel. If each bag of coffee is to weigh <sup>$unitn</sup>&#8260;<sub>$unitd</sub> pounds, how many bags of coffee will the barrel produce?}}'
										+'{\\html{&nbsp;}}'
										+'{\\ins{You have been given the <strong>total</strong> weight of the coffee from which the  bags of coffee will be produced.  How many pounds of coffee are in <span class=underline>one</span> bag of coffee?}}'
										+'{\\frac{\\input{$unitn}}{\\input{$unitd}}}'
										+'}}{well}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }, {
                        problem: '\\image{$illustration}',
                        answer:
                            '\\wb{css{' +
                                '\\rowgrp' +
									'{\\html{There are $total pounds of coffee in a barrel. If each bag of coffee is to weigh <sup>$unitn</sup>&#8260;<sub>$unitd</sub> pounds, how many bags of coffee will the barrel produce?}}'+
									'{\\html{&nbsp;}}'+
                                    '{\\choose{[' +
                                        '\\ins{Yes, each bag of coffee weighs <sup>$unitn</sup>&#8260;<sub>$unitd</sub> pounds. To find out how many bags of coffee (each <sup>$unitn</sup>&#8260;<sub>$unitd</sub> pounds in size) can be produced from $total pounds of coffee, what operation must we use?},' +
                                        '\\ins{No, we are told that each bag of coffee weighs <sup>$unitn</sup>&#8260;<sub>$unitd</sub> pounds. To find out how many bags of coffee (each <sup>$unitn</sup>&#8260;<sub>$unitd</sub> pounds in size) can be produced from $total pounds of coffee, what operation must we use?}' +    
                                    ']}{$$previousCorrect}}' +
                                    '{\\select{Division}{["Addition", "Subtraction", "Multiplication", "Division"]}}' +
                            '}}{well}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }, {
                        problem: '\\image{$illustration}',
                        answer:
                            '\\wb{\\css{' +
                                '\\rowgrp' +
									'{\\html{There are $total pounds of coffee in a barrel. If each bag of coffee is to weigh <sup>$unitn</sup>&#8260;<sub>$unitd</sub> pounds, how many bags of coffee will the barrel produce?}}'+
									'{\\html{&nbsp;}}'+
                                    '{\\choose{[' +
                                        '\\ins{Yes. Write a setup that will solve for the number of bags of coffee that can be produced from the barrel.},' +
                                        '\\ins{We must divide to solve this problem. The given total of coffee in the barrel is being divided up into equal-sized parts&mdash;each <sup>$unitn</sup>&#8260;<sub>$unitd</sub> pounds.  Each <sup>$unitn</sup>&#8260;<sub>$unitd</sub> pounds of coffee will make one bag of coffee. Write a setup that will solve for the number of bags of coffee that can be produced.}' +    
                                    ']}{$$previousCorrect}}' +
                                    '{\\grp{\\frac{\\input{$total}}{\\input{1}}}{\\sign{&div;}}{\\frac{\\input{$unitn}}{\\input{$unitd}}}}' + 
                            '}}{well}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }, {
                        problem: '\\image{$illustration}',
                        answer: '\\css{\\rowgrp' +
									'{\\html{There are $total pounds of coffee in a barrel. If each bag of coffee is to weigh <sup>$unitn</sup>&#8260;<sub>$unitd</sub> pounds, how many bags of coffee will the barrel produce?}}'+
									'{\\html{&nbsp;}}'+
									'{\\choose{[' +
										'\\ins{Great! The total of $total pounds is being divided up into parts that are each <sup>$unitn</sup>&#8260;<sub>$unitd</sub> pounds in size.  Now solve the problem.},' +
										'\\ins{This is a division problem.  When we set up a division problem, the <span class=underline>first number must be the total</span> that is being divided up.  In this case the $total pounds is the total and is placed first in the division set up.  The correct setup is shown below; now solve the problem.}' +     
									']}{$$previousCorrect}}' +
									'{\\grp{\\frac{\\str{$total}}{\\str{1}}}{\\sign{&div;}}{\\frac{\\str{$unitn}}{\\str{$unitd}}}{\\sign{=}}{\\input{$number}}}'+
								'}{well}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }]
                }]
            },
			//problem 11
            coffeeDiv2: {
                title: 'Fraction Application Problems',
                children: [{
                    title: 'Main Answer',
                    children: [{
                        problem: '\\image{$illustration}',
                        answer: '\\rowgrp'+
									'{\\ins{$number bags of coffee are to be produced from $total pounds in a barrel.  How much will each bag of coffee weigh (know that each bag will be the same weight)?}}'+
									'{\\frac{\\input{$unitn}}{\\input{$unitd}}}',
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
                            '\\wb'+
								'{\\css' +
									'{\\rowgrp' +
										'{\\html{$number bags of coffee are to be produced from $total pounds in a barrel.  What is the total weight of the coffee?}}'+
										'{\\html{&nbsp;}}'+
										'{\\ins{You have been <span class=underline>given the total</span> weight of the coffee from which the  bags of coffee will be produced.  What is the total weight of the coffee?}}' +
										'{\\grp{\\input{$total}}{\\html{pounds}}}' +
								'}{well}}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }, {
                        problem: '\\image{$illustration}',
                        answer: 
                            '\\wb' +
								'{\\css'+
									'{\\rowgrp' +
										'{\\html{$number bags of coffee are to be produced from $total pounds in a barrel.  How much will each bag of coffee weigh (know that each bag will be the same weight)?}}'+
										'{\\html{&nbsp;}}'+
										'{\\choose{[' +
											'\\ins{Yes, there is a total of $total pounds of coffee in the barrel. How many bags are to be produced?},' +
											'\\ins{No, we are told there is a total of $total pounds of coffee in the barrel. How many bags are to be produced?}' +    
										']}{$$previousCorrect}}' +
										'{\\grp{\\input{$number}}{\\html{bags}}}' +
								'}{well}}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }, {
                        problem: '\\image{$illustration}',
                        answer: 
                            '\\wb' +
								'{\\css'+
									'{\\rowgrp' +
										'{\\html{$number bags of coffee are to be produced from $total pounds in a barrel.  How much will each bag of coffee weigh (know that each bag will be the same weight)?}}'+
										'{\\html{&nbsp;}}'+
										'{\\choose{[' +
											'\\ins{Yes, $number bags of coffee will be produced. To find out the weight of each bag of coffee, what operation must we use?},' +
											'\\ins{No, we are told $number bags of coffee will be produced. To find out the weight of each bag of coffee, what operation must we use?}' +    
										']}{$$previousCorrect}}' +
										'{\\select{Division}{["Addition", "Subtraction", "Multiplication", "Division"]}}' +
								'}{well}}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }, {
                        problem: '\\image{$illustration}',
                        answer:
                            '\\wb' +
								'{\\css'+
									'{\\rowgrp' +
										'{\\html{$number bags of coffee are to be produced from $total pounds in a barrel.  What will be the weight of each bag of coffee (given that each bag will be the same weight)?}}'+
										'{\\html{&nbsp;}}'+
										'{\\choose{[' +
											'\\ins{Yes, now write a setup that will solve this problem.},' +
											'\\ins{We must divide to solve this problem.  The <span class=underline>given total weight</span> is being divided up into $number equal-sized parts.  Write a set up that will solve for the weight of each bag of coffee to be produced.}' +    
										']}{$$previousCorrect}}' +
										'{\\grp{\\frac{\\input{$total}}{\\input{1}}}{\\sign{&div;}}{\\frac{\\input{$number}}{\\input{1}}}}' +
								'}{well}}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }, {
                        problem: '\\image{$illustration}',
                        answer: 
                            '\\wb' +
								'{\\css'+
									'{\\rowgrp' +
										'{\\html{$number bags of coffee are to be produced from $total pounds in a barrel.  How much will each bag of coffee weigh (given that each bag will be the same weight)?}}'+
										'{\\html{&nbsp;}}'+
										'{\\choose{[' +
											'\\ins{Great! The total of $total pounds of coffee is being divided up into $number parts. Now give the solution.},' +
											'\\ins{This is a division problem.  When we set up a division problem, the <span class=underline>first number must be the total</span> that is being divided up.  In this case the $total pounds of coffee is the total and is placed first in the division set up.  The correct setup is shown below.<br><br>Now solve the problem.}' +
										']}{$$previousCorrect}}' +
										'{\\grp{\\frac{\\str{$total}}{\\str{1}}}{\\sign{&div;}}{\\frac{\\str{$number}}{\\str{1}}}{\\sign{=}}{\\frac{\\input{$unitn}}{\\input{$unitd}}}}' +
								'}{well}}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }]
                }]
            },
			//problem 12
            coffeeMul: {
                title: 'Fraction Application Problems',
                children: [{
                    title: 'Main Answer',
                    children: [{
                        problem: '\\image{$illustration}',
                        answer: '\\rowgrp'+
									'{\\ins{Each bag of coffee will weigh <sup>$unitn</sup>&#8260;<sub>$unitd</sub> pounds.  If $number bags of coffee are to be produced, how many total pounds of coffee will be used?}}'+
									'{\\grp{\\input{$total}}}',
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
											+'{\\html{Each bag of coffee will weigh <sup>$unitn</sup>&#8260;<sub>$unitd</sub> pounds.  If $number bags of coffee are to be produced, how many total pounds of coffee will be used?}}'
											+'{\\html{&nbsp;}}'
											+'{\\ins{You are searching for the total number of pounds of coffee that are needed.  How many pounds of coffee are needed to produce one bag of coffee?}}'
											+'{\\grp{\\frac{\\input{$unitn}}{\\input{$unitd}}}}'+
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
											'{\\html{Each bag of coffee will weigh <sup>$unitn</sup>&#8260;<sub>$unitd</sub> pounds.  If $number bags of coffee are to be produced, how many total pounds of coffee will be used?}}'+
											'{\\html{&nbsp;}}'+
											'{\\choose{[' +
												'\\ins{Yes, it takes <sup>$unitn</sup>&#8260;<sub>$unitd</sub> pounds to build one bag of coffee. How many bags of coffee are being produced?},' +
												'\\ins{No, we are told it takes <sup>$unitn</sup>&#8260;<sub>$unitd</sub> pounds to build one bag of coffee. How many bags of coffee are being produced?}' +    
											']}{$$previousCorrect}}' +
											'{\\grp{\\input{$number}}}' +
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
											'{\\html{Each bag of coffee will weigh <sup>$unitn</sup>&#8260;<sub>$unitd</sub> pounds.  If $number bags of coffee are to be produced, how many total pounds of coffee will be used?}}'+
											'{\\html{&nbsp;}}'+
											'{\\choose{[' +
												'\\ins{Yes, $number bags of coffee are being produced. To find out the total number of pounds of coffee required to produce $number bags of coffee, each bag weighing <sup>$unitn</sup>&#8260;<sub>$unitd</sub> pounds, what operation must we use?},' +
												'\\ins{No, we are told $number bags of coffee are being produced. To find out the total number of pounds of coffee required to produce $number bags of coffee, each bag weighing <sup>$unitn</sup>&#8260;<sub>$unitd</sub> pounds, what operation must we use?}' +    
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
											'{\\html{Each bag of coffee will weigh <sup>$unitn</sup>&#8260;<sub>$unitd</sub> pounds.  If $number bags of coffee are to be produced, how many total pounds of coffee will be used?}}'+
											'{\\html{&nbsp;}}'+
											'{\\choose{[' +
												'\\rowgrp{\\ins{Yes, the <sup>$unitn</sup>&#8260;<sub>$unitd</sub> pounds is being repeated $number times.  Write a setup that will solve for the total weight of coffee that is needed to produce all $number bags of coffee.}},' +
												'\\ins{We must multiply to solve this problem.  The <sup>$unitn</sup>&#8260;<sub>$unitd</sub> pounds is being repeated $number times. Write a setup that will solve for the total weight of coffee that is needed to produce all $number bags of coffee.}' +    
											']}{$$previousCorrect}}' +                                    		'{\\grp{\\frac{\\input{$firstMultNum}}{\\input{$firstMultDen}}}{\\sign{&times;}}{\\frac{\\input{$secondMultNum}}{\\input{$secondMultDen}}}}' +
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
											'{\\html{Each bag of coffee will weigh <sup>$unitn</sup>&#8260;<sub>$unitd</sub> pounds.  If $number bags of coffee are to be produced, how many total pounds of coffee will be used?}}'+
											'{\\html{&nbsp;}}'+
											'{\\choose{[' +
												'\\rowgrp{\\ins{Now solve the problem.}},' +
												'\\ins{This is a *repeated addition* or multiplication problem.  The <sup>$unitn</sup>&#8260;<sub>$unitd</sub> pounds needs to be repeated $number times. The correct setup is shown below. Now solve the problem.}' +
											']}{$$previousCorrect}}' +
											'{\\grp{\\frac{\\fracstr{$$unitn}}{\\fracstr{$$unitd}}}{\\sign{&times;}}{\\frac{\\fracstr{$$number}}{\\fracstr{$$unitDenom}}}{\\sign{=}}{\\input{$total}}}' +
										'}'+
									'{well}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }]
                }]
            },
			//problem 13
			lumberDiv1: {
                title: 'Fraction Application Problems',
                children: [{
                    title: 'Main Answer',
                    children: [{
                        problem: '\\image{$illustration}',
                        answer: '\\rowgrp'+
									'{\\ins{There are $total feet of lumber in a beam. If each piece is to be <sup>$unitn</sup>&#8260;<sub>$unitd</sub> foot, how many pieces of lumber will the beam produce?}}'+
									'{\\grp{\\input{$number}}}',
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
                        answer: '\\wb{\\css{\\rowgrp'
										+'{\\html{There are $total feet of lumber in a beam. If each piece is to be <sup>$unitn</sup>&#8260;<sub>$unitd</sub> foot, how many pieces of lumber will the beam produce?}}'
										+'{\\html{&nbsp;}}'
										+'{\\ins{You have been given the <strong>total</strong> length of the lumber from which the  pieces of lumber will be produced.  How many feet of lumber are in <span class=underline>one</span> piece?}}'
										+'{\\frac{\\input{$unitn}}{\\input{$unitd}}}'
										+'}}{well}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }, {
                        problem: '\\image{$illustration}',
                        answer:
                            '\\wb{css{' +
                                '\\rowgrp' +
									'{\\html{There are $total feet of lumber in a beam. If each piece is to be <sup>$unitn</sup>&#8260;<sub>$unitd</sub> foot, how many pieces of lumber will the beam produce?}}'+
									'{\\html{&nbsp;}}'+
                                    '{\\choose{[' +
                                        '\\ins{Yes, each piece is <sup>$unitn</sup>&#8260;<sub>$unitd</sub> foot. To find out how many pieces of lumber (each <sup>$unitn</sup>&#8260;<sub>$unitd</sub> foot in size) can be produced from $total feet of lumber, what operation must we use?},' +
                                        '\\ins{No, we are told that each piece is <sup>$unitn</sup>&#8260;<sub>$unitd</sub> foot. To find out how many pieces of lumber (each <sup>$unitn</sup>&#8260;<sub>$unitd</sub> foot in size) can be produced from $total feet of lumber, what operation must we use?}' +    
                                    ']}{$$previousCorrect}}' +
                                    '{\\select{Division}{["Addition", "Subtraction", "Multiplication", "Division"]}}' +
                            '}}{well}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }, {
                        problem: '\\image{$illustration}',
                        answer:
                            '\\wb{\\css{' +
                                '\\rowgrp' +
									'{\\html{There are $total feet of lumber in a beam. If each piece is to be <sup>$unitn</sup>&#8260;<sub>$unitd</sub> foot, how many pieces of lumber will the beam produce?}}'+
									'{\\html{&nbsp;}}'+
                                    '{\\choose{[' +
                                        '\\ins{Yes. Write a setup that will solve for the number of pieces of lumber that can be produced from the beam.},' +
                                        '\\ins{We must divide to solve this problem. The given total of lumber in the beam is being divided up into equal-sized parts&mdash;each <sup>$unitn</sup>&#8260;<sub>$unitd</sub> foot.  Each <sup>$unitn</sup>&#8260;<sub>$unitd</sub> foot of lumber will make one piece. Write a setup that will solve for the number of pieces of lumber that can be produced.}' +    
                                    ']}{$$previousCorrect}}' +
                                    '{\\grp{\\frac{\\input{$total}}{\\input{1}}}{\\sign{&div;}}{\\frac{\\input{$unitn}}{\\input{$unitd}}}}' + 
                            '}}{well}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }, {
                        problem: '\\image{$illustration}',
                        answer: '\\css{\\rowgrp' +
									'{\\html{There are $total feet of lumber in a beam. If each piece is to be <sup>$unitn</sup>&#8260;<sub>$unitd</sub> foot, how many pieces of lumber will the beam produce?}}'+
									'{\\html{&nbsp;}}'+
									'{\\choose{[' +
										'\\ins{Great! The total of $total feet is being divided up into parts that are each <sup>$unitn</sup>&#8260;<sub>$unitd</sub> foot in size.  Now solve the problem.},' +
										'\\ins{This is a division problem.  When we set up a division problem, the <span class=underline>first number must be the total</span> that is being divided up.  In this case the $total feet is the total and is placed first in the division set up.  The correct setup is shown below; now solve the problem.}' +     
									']}{$$previousCorrect}}' +
									'{\\grp{\\frac{\\str{$total}}{\\str{1}}}{\\sign{&div;}}{\\frac{\\str{$unitn}}{\\str{$unitd}}}{\\sign{=}}{\\input{$number}}}'+
								'}{well}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }]
                }]
            },
			//problem 14
            lumberDiv2: {
                title: 'Fraction Application Problems',
                children: [{
                    title: 'Main Answer',
                    children: [{
                        problem: '\\image{$illustration}',
                        answer: '\\rowgrp'+
									'{\\ins{$number pieces of lumber are to be produced from $total feet in a beam.  What will be the length of each piece (know that each piece will be the same length)?}}'+
									'{\\frac{\\input{$unitn}}{\\input{$unitd}}}',
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
                            '\\wb'+
								'{\\css' +
									'{\\rowgrp' +
										'{\\html{$number pieces of lumber are to be produced from $total feet in a beam.  What will be the length of each piece?}}'+
										'{\\html{&nbsp;}}'+
										'{\\ins{You have been <span class=underline>given the total</span> length of the lumber from which the  pieces of lumber will be produced.  What is the total length?}}' +
										'{\\grp{\\input{$total}}}' +
								'}{well}}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }, {
                        problem: '\\image{$illustration}',
                        answer: 
                            '\\wb' +
								'{\\css'+
									'{\\rowgrp' +
										'{\\html{$number pieces of lumber are to be produced from $total feet in a beam.  What will be the length of each piece (know that each piece will be the same length)?}}'+
										'{\\html{&nbsp;}}'+
										'{\\choose{[' +
											'\\ins{Yes, there are $total feet of lumber in the beam. How many pieces are to be produced?},' +
											'\\ins{No, we are told there are $total feet of lumber in the beam. How many pieces are to be produced?}' +    
										']}{$$previousCorrect}}' +
										'{\\grp{\\input{$number}}}' +
								'}{well}}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }, {
                        problem: '\\image{$illustration}',
                        answer: 
                            '\\wb' +
								'{\\css'+
									'{\\rowgrp' +
										'{\\html{$number pieces of lumber are to be produced from $total feet in a beam.  What will be the length of each piece (know that each piece will be the same length)?}}'+
										'{\\html{&nbsp;}}'+
										'{\\choose{[' +
											'\\ins{Yes, $number pieces of lumber will be produced. To find out the length of each piece, what operation must we use?},' +
											'\\ins{No, we are told $number pieces of lumber will be produced. To find out the length of each piece, what operation must we use?}' +    
										']}{$$previousCorrect}}' +
										'{\\select{Division}{["Addition", "Subtraction", "Multiplication", "Division"]}}' +
								'}{well}}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }, {
                        problem: '\\image{$illustration}',
                        answer:
                            '\\wb' +
								'{\\css'+
									'{\\rowgrp' +
										'{\\html{$number pieces of lumber are to be produced from $total feet in a beam.  What will be the length of each piece (know that each piece will be the same length)?}}'+
										'{\\html{&nbsp;}}'+
										'{\\choose{[' +
											'\\ins{Yes, now write a setup that will solve this problem.},' +
											'\\ins{We must divide to solve this problem.  The <span class=underline>given total length</span> is being divided up into $number equal-sized parts.  Write a set up that will solve for the length of each piece to be produced.}' +    
										']}{$$previousCorrect}}' +
										'{\\grp{\\frac{\\input{$total}}{\\input{1}}}{\\sign{&div;}}{\\frac{\\input{$number}}{\\input{1}}}}' +
								'}{well}}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }, {
                        problem: '\\image{$illustration}',
                        answer: 
                            '\\wb' +
								'{\\css'+
									'{\\rowgrp' +
										'{\\html{$number pieces of lumber are to be produced from $total feet in a beam.  What will be the length of each piece (know that each piece will be the same length)?}}'+
										'{\\html{&nbsp;}}'+
										'{\\choose{[' +
											'\\ins{Great! The total of $total feet of lumber is being divided up into $number parts. Now give the solution.},' +
											'\\ins{This is a division problem.  When we set up a division problem, the <span class=underline>first number must be the total</span> that is being divided up.  In this case the $total feet of lumber is the total and is placed first in the division set up.  The correct setup is shown below.<br><br>Now solve the problem.}' +
										']}{$$previousCorrect}}' +
										'{\\grp{\\frac{\\str{$total}}{\\str{1}}}{\\sign{&div;}}{\\frac{\\str{$number}}{\\str{1}}}{\\sign{=}}{\\frac{\\input{$unitn}}{\\input{$unitd}}}}' +
								'}{well}}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }]
                }]
            },
			//problem 15
            lumberMul: {
                title: 'Fraction Application Problems',
                children: [{
                    title: 'Main Answer',
                    children: [{
                        problem: '\\image{$illustration}',
                        answer: '\\rowgrp'+
									'{\\ins{Each piece will be <sup>$unitn</sup>&#8260;<sub>$unitd</sub> foot.  If $number pieces of lumber are to be produced, how many total feet of lumber will be used?}}'+
									'{\\grp{\\input{$total}}}',
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
											+'{\\html{Each piece will be <sup>$unitn</sup>&#8260;<sub>$unitd</sub> foot.  If $number pieces of lumber are to be produced, how many total feet of lumber will be used?}}'
											+'{\\html{&nbsp;}}'
											+'{\\ins{You are searching for the total number of feet of lumber that are needed.  How many feet of lumber are needed to produce one piece?}}'
											+'{\\grp{\\frac{\\input{$unitn}}{\\input{$unitd}}}}'+
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
											'{\\html{Each piece will be <sup>$unitn</sup>&#8260;<sub>$unitd</sub> foot.  If $number pieces of lumber are to be produced, how many total feet of lumber will be used?}}'+
											'{\\html{&nbsp;}}'+
											'{\\choose{[' +
												'\\ins{Yes, it takes <sup>$unitn</sup>&#8260;<sub>$unitd</sub> foot to build one piece. How many pieces of lumber are being produced?},' +
												'\\ins{No, we are told it takes <sup>$unitn</sup>&#8260;<sub>$unitd</sub> foot to build one piece. How many pieces of lumber are being produced?}' +    
											']}{$$previousCorrect}}' +
											'{\\grp{\\input{$number}}}' +
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
											'{\\html{Each piece will be <sup>$unitn</sup>&#8260;<sub>$unitd</sub> foot.  If $number pieces of lumber are to be produced, how many total feet of lumber will be used?}}'+
											'{\\html{&nbsp;}}'+
											'{\\choose{[' +
												'\\ins{Yes, $number pieces of lumber are being produced. To find out the total number of feet of lumber required to produce $number pieces of lumber, each piece being <sup>$unitn</sup>&#8260;<sub>$unitd</sub> foot, what operation must we use?},' +
												'\\ins{No, we are told $number pieces of lumber are being produced. To find out the total number of feet of lumber required to produce $number pieces of lumber, each piece being <sup>$unitn</sup>&#8260;<sub>$unitd</sub> foot, what operation must we use?}' +    
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
											'{\\html{Each piece will be <sup>$unitn</sup>&#8260;<sub>$unitd</sub> foot.  If $number pieces of lumber are to be produced, how many total feet of lumber will be used?}}'+
											'{\\html{&nbsp;}}'+
											'{\\choose{[' +
												'\\rowgrp{\\ins{Yes, the <sup>$unitn</sup>&#8260;<sub>$unitd</sub> foot is being repeated $number times.  Write a setup that will solve for the total length of lumber that is needed to produce all $number pieces of lumber.}},' +
												'\\ins{We must multiply to solve this problem.  The <sup>$unitn</sup>&#8260;<sub>$unitd</sub> foot is being repeated $number times. Write a setup that will solve for the total length of lumber that is needed to produce all $number pieces of lumber.}' +    
											']}{$$previousCorrect}}' +                                    		'{\\grp{\\frac{\\input{$firstMultNum}}{\\input{$firstMultDen}}}{\\sign{&times;}}{\\frac{\\input{$secondMultNum}}{\\input{$secondMultDen}}}}' +
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
											'{\\html{Each piece will be <sup>$unitn</sup>&#8260;<sub>$unitd</sub> foot.  If $number pieces of lumber are to be produced, how many total feet of lumber will be used?}}'+
											'{\\html{&nbsp;}}'+
											'{\\choose{[' +
												'\\rowgrp{\\ins{Now solve the problem.}},' +
												'\\ins{This is a *repeated addition* or multiplication problem.  The <sup>$unitn</sup>&#8260;<sub>$unitd</sub> foot needs to be repeated $number times. The correct setup is shown below. Now solve the problem.}' +
											']}{$$previousCorrect}}' +
											'{\\grp{\\frac{\\fracstr{$$unitn}}{\\fracstr{$$unitd}}}{\\sign{&times;}}{\\frac{\\fracstr{$$number}}{\\fracstr{$$unitDenom}}}{\\sign{=}}{\\input{$total}}}' +
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
            /*{ total: 15, unitn: 3, unitd: 4, number: 20, illustration: '7.4A-01_Acres_Houses/7.4A-01_15_Acres_Houses/400x300/Acres_Gplane_15a.jpg', template: 'housesDiv1' },
            { total: 15, unitn: 3, unitd: 4, number: 20, illustration: '7.4A-01_Acres_Houses/7.4A-01_15_Acres_Houses/400x300/Acres_Gplane_15b.jpg', template: 'housesDiv2' },
            { total: 15, unitn: 3, unitd: 4, number: 20, illustration: '7.4A-01_Acres_Houses/7.4A-01_15_Acres_Houses/400x300/Acres_Gplane_15c.jpg', template: 'housesMul' },*/
			//problem 1
            { total: 21, unitn: 1, unitd: 3, number: 63, illustration: '7.4A-01_Acres_Houses/7.4A-01_21_Acres_Houses/400x300/Acres_Gplane_21a.jpg', template: 'housesDiv1' },
			//problem 2
            { total: 21, unitn: 1, unitd: 3, number: 63, illustration: '7.4A-01_Acres_Houses/7.4A-01_21_Acres_Houses/400x300/Acres_Gplane_21b.jpg', template: 'housesDiv2' },
			//problem 3
            { total: 21, unitn: 1, unitd: 3, number: 63, unitDenom: 1, firstMultNum: '[\\"1\\",\\"63\\"]', firstMultDen: '[\\"3\\",\\"1\\"]', secondMultNum: '[\\"63\\",\\"1\\"]', secondMultDen: '[\\"1\\",\\"3\\"]', flip: [[1], ["unitn", "number"], ["unitDenom", "unitd"]], illustration: '7.4A-01_Acres_Houses/7.4A-01_21_Acres_Houses/400x300/Acres_Gplane_21c.jpg', template: 'housesMul' },
			/*
            { totaln: 2, totald: 3, unitn: 1, unitd: 9, number: 6, illustration: '7.4A-01_Acres_Houses/7.4A-01_2.3_Acres_Houses/400x300/Acres_Gplane_2.3a.jpg', template: 'housesDivFrac1' },
            {  totaln: 2, totald: 3, unitn: 1, unitd: 9, number: 6, illustration: '7.4A-01_Acres_Houses/7.4A-01_2.3_Acres_Houses/400x300/Acres_Gplane_2.3b.jpg', template: 'housesDivFrac2' },
            {  totaln: 2, totald: 3, unitn: 1, unitd: 9, number: 6, illustration: '7.4A-01_Acres_Houses/7.4A-01_2.3_Acres_Houses/400x300/Acres_Gplane_2.3c.jpg', template: 'housesMulFrac' },
			*/
			//problem 4
			{ firstunitn: '3', firstunitd: '5', secondunitn: '2', secondunitd: '5', number: '$200', dollarsLeft: '80', plainDollars: '200', dollarSign: '$', illustration: '7.4B-01_200_Dollars/400x300/$200_a.jpg', template: 'dollarsLeftFromFraction' },
			//problem 5
            { firstunitn: '120', firstunitd: '200', secondunitn: '3', secondunitd: '5', number: '$200', spent: '$120', plainDollars: '200', plainSpent: '120', dollarSign: '$', illustration: '7.4B-01_200_Dollars/400x300/$200_b.jpg', template: 'dollarsFindFractionSpent' },
			//problem 6
            { firstunitn: '80', firstunitd: '200', secondunitn: '2', secondunitd: '5', number: '$200', left: '$80', plainDollars: '200', plainLeft: '80', dollarSign: '$', illustration: '7.4B-01_200_Dollars/400x300/$200_c.jpg', template: 'dollarsFindFractionLeft' },
			//problem 7
			{ firstunitn: '2', firstunitd: '3', secondunitn: '1', secondunitd: '3', number: '$2400', dollarsLeft: '800', plainDollars: '2400', dollarSign: '$', illustration: '7.4B-02_2400_Dollars/400x300/$2400_a.jpg', template: 'dollarsLeftFromFraction2' },
			//problem 8
            { firstunitn: '1600', firstunitd: '2400', secondunitn: '2', secondunitd: '3', number: '$2400', spent: '$1600', plainDollars: '2400', plainSpent: '1600', dollarSign: '$', illustration: '7.4B-02_2400_Dollars/400x300/$2400_b.jpg', template: 'dollarsFindFractionSpent2' },
			//problem 9
            { firstunitn: '800', firstunitd: '2400', secondunitn: '1', secondunitd: '3', number: '$2400', left: '$800', plainDollars: '2400', plainLeft: '800', dollarSign: '$', illustration: '7.4B-02_2400_Dollars/400x300/$2400_c.jpg', template: 'dollarsFindFractionLeft2' },
			//problem 10
			{ total: 56, unitn: 7, unitd: 10, number: 80, illustration: '7.4A-02_Coffee/7.4A-02_56lbs_Coffee/400x300/Coffee_56a.jpg', template: 'coffeeDiv1' },
			//problem 11
            { total: 56, unitn: 7, unitd: 10, number: 80, illustration: '7.4A-02_Coffee/7.4A-02_56lbs_Coffee/400x300/Coffee_56b.jpg', template: 'coffeeDiv2' },
			//problem 12
            { total: 56, unitn: 7, unitd: 10, number: 80, unitDenom: 1, firstMultNum: '[\\"7\\",\\"80\\"]', firstMultDen: '[\\"10\\",\\"1\\"]', secondMultNum: '[\\"80\\",\\"7\\"]', secondMultDen: '[\\"1\\",\\"10\\"]', flip: [[1], ["unitn", "number"], ["unitDenom", "unitd"]], illustration: '7.4A-02_Coffee/7.4A-02_56lbs_Coffee/400x300/Coffee_56c.jpg', template: 'coffeeMul' },
			//problem 13
			{ total: 12, unitn: 1, unitd: 3, number: 36, illustration: '7.4A-03_Lumber/7.4A-03_12ft_Board/400x300/12-Ft_Board-01.jpg', template: 'lumberDiv1' },
			//problem 14
            { total: 12, unitn: 1, unitd: 3, number: 36, illustration: '7.4A-03_Lumber/7.4A-03_12ft_Board/400x300/12-Ft_Board-02.jpg', template: 'lumberDiv2' },
			//problem 15
            { total: 12, unitn: 1, unitd: 3, number: 36, unitDenom: 1, firstMultNum: '[\\"1\\",\\"36\\"]', firstMultDen: '[\\"3\\",\\"1\\"]', secondMultNum: '[\\"36\\",\\"1\\"]', secondMultDen: '[\\"1\\",\\"3\\"]', flip: [[1], ["unitn", "number"], ["unitDenom", "unitd"]], illustration: '7.4A-03_Lumber/7.4A-03_12ft_Board/400x300/12-Ft_Board-03.jpg', template: 'lumberMul' }
			];/*,
		shuffle = [
		{ problems: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], total: 15}
		];    
    	return dataUtils.build(desc, template, data, shuffle);*/
		    
    	return dataUtils.build(desc, template, data);
		
}]);
