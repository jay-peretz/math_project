/*global angular */

angular.module('mathSkills').service('data8_5', ['dataUtils', function (dataUtils) {
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
                        answer: '\\col{\\ins{There are houses worth a total of &#36;$firstunitwhole <sup>$firstunitn</sup>&#8260;<sub>$firstunitd</sub> million dollars in a subdivision. If each house is worth <sup>$secondunitn</sup>&#8260;<sub>$secondunitd</sub> of a million dollars, how many houses are in the subdivision?}}{\\input{$number}}',
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
                        answer: '\\wb{\\rowgrp{\\ins{You have been given the <strong>total</strong> value of the houses in the subdivision.  What is the total value of <u>one</u> house?}}{\\grp{\\frac{\\input{$secondunitn}}{\\input{$secondunitd}}}{html{million dollars}}}}',
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
                        answer:
                            '\\wb{' +
                                '\\rowgrp' +
                                    '{\\choose{[' +
                                        '\\ins{Yes. Write a setup that will solve for the total number of houses in the subdivision.},' +
                                        '\\ins{We must divide to solve this problem. The given total value has been divided up into equal-sized parts&mdash;each worth <sup>$secondunitn</sup>&#8260;<sub>$secondunitd</sub> million dollars.  Each <sup>$secondunitn</sup>&#8260;<sub>$secondunitd</sub> million dollars represents one house. Write a setup that will solve for the number of houses in the subdivision.}' +    
                                    ']}{$$previousCorrect}}' +
                                    '{\\grp{\\html{&#36;}}{\\mixed{\\input{$firstunitwhole}}{\\frac{\\input{$firstunitn}}{\\input{$firstunitd}}}}{\\html{million dollars}}{\\sign{&div;}}{\\frac{\\input{$secondunitn}}{\\input{$secondunitd}}}{\\html{million dollars}}}' + 
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
                                    '\\ins{This is a division problem.  When we set up a division problem, the <u>first number must be the total</u> that is being divided up.  In this case the total being divided up is the value of the subdivision (&#36;$firstunitwhole <sup>$firstunitn</sup>&#8260;<sub>$firstunitd</sub> million dollars), so the value of the subdivision is placed first in the division set up.  The correct setup is below. Now solve the problem.}' +    
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
                        answer: '\\col{\\ins{$number houses in a subdivision are worth a total of &#36;$firstunitwhole <sup>$firstunitn</sup>&#8260;<sub>$firstunitd</sub> million dollars.  What is the value of each house (know that each house is priced exactly the same)?}}{\\frac{\\input{$secondunitn}}{\\input{$secondunitd}}}',
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
                                    '{\\ins{You have been <u>given the total</u> number of houses in the subdivision.  How many houses are in the subdivision?}}' +
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
                        answer:
                            '\\wb{' +
                                '\\rowgrp' +
                                    '{\\choose{[' +
                                        '\\rowgrp{\\css{\\ins{Yes, now write a setup that will solve this problem.}}{width400}}{\\html{<br><br>}},' +
                                        '\\css{\\ins{We must divide to solve this problem.  The <u>given total value of the subdivision</u> is being divided up into $number identically-priced houses.  Pick the set up that will solve for the value of each house.}}{width400}' +    
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
                                        '\\css{\\ins{This is a division problem.  When we set up a division problem, the <u>first number must be the total</u> that is being divided up.  In this case the total is the total value of the subdivision (&#36;$firstunitwhole <sup>$firstunitn</sup>&#8260;<sub>$firstunitd</sub> million dollars) and is placed first in the division set up.  The correct setup is shown below.<br><br>Now solve the problem.}}{width400}' +
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
										'{\\ins{You have been <u>given the total</u> number of houses in the subdivision.  How many houses are in the subdivision?}}' +
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
											'\\css{\\ins{We must multiply to solve this problem.  The <u>given value of each house in the subdivision</u> is being multiplied by $number houses.  Pick the set up that will solve for the total combined value of the houses in the subdivision.}}{width400}' +    
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
                                        '\\css{\\ins{This is a repeated addition or multiplication problem.  The value of each house, <sup>$secondunitn</sup>&#8260;<sub>$secondunitd</sub> million dollars, needs to be repeated $number times. The correct setup is shown below. Now solve the problem.}}{width400}' +
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
            /// houses div frac
             housesDivFrac1: {
                title: 'Mixed Fraction Application Problems',
                children: [{
                    title: 'Main Answer',
                    children: [{
                        problem: '\\html{<img src=img/illustrations/$illustration>}',
                        answer: '\\col{\\ins{There are <sup>$totaln</sup>&#8260;<sub>$totald</sub> acres of land to be developed. If each house is to occupy <sup>$unitn</sup>&#8260;<sub>$unitd</sub> of an acre, how many houses will the developer be able to build?}}{\\input{$number}}',
                        controls: {
                            "checkAnswer": true,
                            "help": false,
                            "workbook": true
                        }
                    }]
                }, {
                    title: 'Workbook',
                    children: [{
                        problem: '\\html{<img src=img/illustrations/$illustration>}',
                        answer: '\\wb{\\rowgrp{\\ins{You have been given the <strong>total</strong> number of acres of land where houses will be built.  How many acres are needed to build <u>one</u> house?}}{\\frac{\\input{$unitn}}{\\input{$unitd}}}}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }, {
                        problem: '\\html{<img src=img/illustrations/$illustration>}',
                        answer:
                            '\\wb{' +
                                '\\rowgrp' + 
                                    '{\\choose{[' +
                                        '\\ins{Yes, each house occupies <sup>$unitn</sup>&#8260;<sub>$unitd</sub> of an acre. To find out how many houses (each <sup>$unitn</sup>&#8260;<sub>$unitd</sub> of an acre in size) will fit into the total <sup>$totaln</sup>&#8260;<sub>$totald</sub> acres, what operation must we use?},' +
                                        '\\ins{No, we are told that each house occupies <sup>$unitn</sup>&#8260;<sub>$unitd</sub> of an acre. To find out how many houses (each <sup>$unitn</sup>&#8260;<sub>$unitd</sub> of an acre in size) will fit into the total <sup>$totaln</sup>&#8260;<sub>$totald</sub> acres, what operation must we use?}' +    
                                    ']}{$$previousCorrect}}' +
                                    '{\\select{Division}{["Addition", "Subtraction", "Multiplication", "Division"]}}' +
                            '}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }, {
                        problem: '\\html{<img src=img/illustrations/$illustration>}',
                        answer:
                            '\\wb{' +
                                '\\rowgrp' +
                                    '{\\choose{[' +
                                        '\\ins{Yes. Write a setup that will solve for the number of houses to be built.},' +
                                        '\\ins{We must divide to solve this problem. The given total land is being divided up into equal-sized parts&mdash;each <sup>$unitn</sup>&#8260;<sub>$unitd</sub> of an acre.  Each <sup>$unitn</sup>&#8260;<sub>$unitd</sub> of an acre of land will be where one house is built. Write a setup that will solve for the number of houses to be built.}' +    
                                    ']}{$$previousCorrect}}' +
                                    '{\\grp{\\frac{\\input{$totaln}}{\\input{$totald}}}{\\sign{&div;}}{\\frac{\\input{$unitn}}{\\input{$unitd}}}}' + 
                            '}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }, {
                        problem: '\\html{<img src=img/illustrations/$illustration>}',
                        answer:
                            '\\rowgrp' +
                                '{\\choose{[' +
                                    '\\ins{Great! Now solve the problem.},' +
                                    '\\ins{This is a division problem.  When we set up a division problem, the <u>first number must be the total</u> that is being divided up.  In this case the <sup>$totaln</sup>&#8260;<sub>$totald</sub> acres is the total and is placed first in the division set up.  The correct setup is shown to the right. Now solve the problem.}' +    
                                ']}{$$previousCorrect}}' +
                                '{\\grp{\\frac{\\str{$totaln}}{\\str{$totald}}}{\\sign{&div;}}{\\frac{\\str{$unitn}}{\\str{$unitd}}}{\\sign{=}}{\\input{$number}}}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }]
                }]
            },
            housesDivFrac2: {
                title: 'Mixed Fraction Application Problems',
                children: [{
                    title: 'Main Answer',
                    children: [{
                        problem: '\\html{<img src=img/illustrations/$illustration>}',
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
                        problem: '\\html{<img src=img/illustrations/$illustration>}',
                        answer: 
                            '\\wb{' +
                                '\\rowgrp' +
                                    '{\\ins{You have been <u>given the total</u> number of acres of land where houses will be built.  How many houses are being built?}}' +
                                    '{\\input{$number}}' +
                            '}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }, {
                        problem: '\\html{<img src=img/illustrations/$illustration>}',
                        answer: 
                            '\\wb{' +
                                '\\rowgrp' +
                                    '{\\choose{[' +
                                        '\\ins{Yes, $number houses will be built. To find out the size of each parcel of land, what operation must we use?},' +
                                        '\\ins{No, we are told $number houses will be built. To find out the size of each parcel of land, what operation must we use?}' +    
                                    ']}{$$previousCorrect}}' +
                                    '{\\select{Division}{["Addition", "Subtraction", "Multiplication", "Division"]}}' +
                            '}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }, {
                        problem: '\\html{<img src=img/illustrations/$illustration>}',
                        answer:
                            '\\wb{' +
                                '\\rowgrp' +
                                    '{\\choose{[' +
                                        '\\ins{Yes, now write a setup that will solve this problem.},' +
                                        '\\ins{We must divide to solve this problem.  The <u>given total land</u> is being divided up into $number equal-sized parts of land.  Write a set up that will solve for the size of each parcel of land where a house will be built.}' +    
                                    ']}{$$previousCorrect}}' +
                                    '{\\grp{\\frac{\\input{$totaln}}{\\input{$totald}}}{\\sign{&div;}}{\\frac{\\input{$number}}{\\input{1}}}}' +
                            '}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }, {
                        problem: '\\html{<img src=img/illustrations/$illustration>}',
                        answer: 
                            '\\wb{' +
                                '\\rowgrp' +
                                    '{\\choose{[' +
                                        '\\ins{Great! Now give the solution.},' +
                                        '\\ins{This is a division problem.  When we set up a division problem, the <u>first number must be the total</u> that is being divided up.  In this case the <sup>$totaln</sup>&#8260;<sub>$totald</sub> acres is the total and is placed first in the division set up.  The correct setup is shown below.<br><br>Now solve the problem.}' +
                                    ']}{$$previousCorrect}}' +
                                    '{\\grp{\\frac{\\str{$totaln}}{\\str{$totald}}}{\\sign{&div;}}{\\frac{\\str{$number}}{\\str{1}}}{\\sign{=}}{\\frac{\\input{$unitn}}{\\input{$unitd}}}}' +
                            '}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }]
                }]
            },
            housesMulFrac: {
                title: 'Mixed Fraction Application Problems',
                children: [{
                    title: 'Main Answer',
                    children: [{
                        problem: '\\html{<img src=img/illustrations/$illustration>}',
                        answer: '\\col{\\ins{Each house will occupy <sup>$unitn</sup>&#8260;<sub>$unitd</sub> of an acre.  If $number houses are to be built, how many acres of land are needed?}}{\\frac{\\input{$totaln}}{\\input{$totaln}}',
                        controls: {
                            "checkAnswer": true,
                            "help": false,
                            "workbook": true
                        }
                    }]
                }, {
                    title: 'Workbook',
                    children: [{
                        problem: '\\col{\\html{<img src=img/illustrations/$illustration>}}{\\str{You are searching for the total number of acres that are needed.  How many acres are needed to build one house?}}',
                        answer: '\\frac{\\input{$unitn}}{\\input{$unitd}}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }, {
                        problem: '\\col{\\html{<img src=img/illustrations/$illustration>}}{\\row{\\str{How many houses are being built?}}}',
                        answer: '\\input{$number}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }, {
                        problem: '\\col{\\html{<img src=img/illustrations/$illustration>}}{\\str{Write a setup that will solve for the total amount of land that is needed to build all $number houses.}}',
                        answer: '\\grp{\\frac{\\input{$unitn}}{\\input{$unitd}}}{\\sign{&times;}}{\\frac{\\input{$number}}{\\input{1}}}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }, {
                        problem: '\\col{\\html{<img src=img/illustrations/$illustration>}}{\\str{Now solve the problem.}}',
                        answer: '\\grp{\\frac{\\str{$unitn}}{\\str{$unitd}}}{\\sign{&div;}}{\\frac{\\str{$number}}{\\str{1}}}{\\sign{=}}{\\frac{\\input{$totaln}}{\\input{$totald}}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }]
                }]
            }
        },
        data = [
            { total: '2.7',firstunitwhole: '2', firstunitn: '7', firstunitd: '10', secondunitn: '3', secondunitd: '10', number: '9', illustration: '8.5-11_Houses_Money/400x300/Millions_houses_a.jpg', template: 'housesDiv1' },
            { total: '2.7',firstunitwhole: '2', firstunitn: '7', firstunitd: '10', secondunitn: '3', secondunitd: '10', number: '9', illustration: '8.5-11_Houses_Money/400x300/Millions_houses_b.jpg', template: 'housesDiv2' },
            { total: '2.7',firstunitwhole: '2', firstunitn: '7', firstunitd: '10', secondunitn: '3', secondunitd: '10', number: '9', illustration: '8.5-11_Houses_Money/400x300/Millions_houses_c.jpg', template: 'housesMul' },
            /*{ total: 21, unitn: 1, unitd: 3, number: 63, illustration: 'Acres_Gplane_21a.jpg', template: 'housesDiv1' },
            { total: 21, unitn: 1, unitd: 3, number: 63, illustration: 'Acres_Gplane_21b.jpg', template: 'housesDiv2' },
            { total: 21, unitn: 1, unitd: 3, number: 63, illustration: 'Acres_Gplane_21c.jpg', template: 'housesMul' },
            { totaln: 2, totald: 3, unitn: 1, unitd: 9, number: 6, illustration: 'Acres_Gplane_2.3a.jpg', template: 'housesDivFrac1' },
            {  totaln: 2, totald: 3, unitn: 1, unitd: 9, number: 6, illustration: 'Acres_Gplane_2.3b.jpg', template: 'housesDivFrac2' },
            {  totaln: 2, totald: 3, unitn: 1, unitd: 9, number: 6, illustration: 'Acres_Gplane_2.3c.jpg', template: 'housesMulFrac' }*/
        ];
    
    return dataUtils.build(desc, template, data);
}]);
