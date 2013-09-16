/*global angular */

angular.module('mathSkills').service('data8_5', ['dataUtils', function (dataUtils) {
    var desc = {
            title: '8.5 Mixed Fraction Application Problems',
            path: '8.5-mixed-fraction-application-problems',
            children: []
        },
        template = {
            firstFraction: {
                title: 'Mixed Fraction Application Problems',
                children: [{
                    title: 'Main Answer',
                    children: [{
                        problem: '\\image{$illustration}',
                        answer: '\\wb{\\rowgrp{\\ins{A single Vegburger weighs 8 ounces.  If there are 7 Vegburgers on a tray, what is the <u>total number of ounces</u> of Vegburger on the tray?}}{\\input{$number}}',
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
						+'{\\rowgrp'
						+'{\\ins{To find out the <u>total</u> number of ounces of Vegburger on the tray, what operation must we use?}}{\\select{Multiplication}{["Addition", "Subtraction", "Multiplication", "Division"]}}}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }, {
                        problem: '\\image{$illustration}',
                        answer:
                            '\\rowgrp' 
							+'{\\ins{We must multiply to solve this problem. The number of ounces in a single Vegburger must be multiplied by the number of burgers on the tray to get the total number of ounces of Vegburger on the tray.  Write a setup that will solve for the number of ounces of Vegburger on the tray.}}' +    
                            '{\\grp{\\input{$firstInput}}{\\html{ ounces }}{\\sign{&bull;}}{\\input{$secondInput}}{\\html{ Vegburgers }}}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }, {
                        problem: '\\image{$illustration}',
                        answer:
                            '\\rowgrp'
                            	+'{\\ins{Great! Now solve the problem.}}' 
                                +'{\\grp{\\html{$firstInput}}{\\html{ ounces }}{\\sign{&bull;}}{\\html{$secondInput}}{\\html{ Vegburgers }}}'
								+'{\\html{&nbsp;}}'
								+'{grp{\\sign{=}}{\\input{$number}}{\\html{ ounces of Vegburger on the tray.}}}',
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
                        problem: '\\html{<img src=img/illustrations/$illustration>}',
                        answer: '\\col{\\ins{$number houses are to be built on $total acres of land.  What will be the size of each parcel of land (know that each parcel will be the same size)?}}{\\frac{\\input{$unitn}}{\\input{$unitd}}}',
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
                                    '{\\grp{\\frac{\\input{$total}}{\\input{1}}}{\\sign{&div;}}{\\frac{\\input{$number}}{\\input{1}}}}' +
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
                                        '\\ins{This is a division problem.  When we set up a division problem, the <u>first number must be the total</u> that is being divided up.  In this case the $total acres is the total and is placed first in the division set up.  The correct setup is shown below.<br><br>Now solve the problem.}' +
                                    ']}{$$previousCorrect}}' +
                                    '{\\grp{\\frac{\\str{$total}}{\\str{1}}}{\\sign{&div;}}{\\frac{\\str{$number}}{\\str{1}}}{\\sign{=}}{\\frac{\\input{$unitn}}{\\input{$unitd}}}}' +
                            '}',
                        controls: {
                            "checkAnswer": true,
                            "help": '\\row{\\frac{\\str{$total}}{\\str{1}}}{\\sign{&div;}}{\\frac{\\str{$number}}{\\str{1}}}{\\sign{=}}{\\frac{\\str{$unitn}}{\\str{$unitd}}}'
                        }
                    }]
                }]
            },
            housesMul: {
                title: 'Mixed Fraction Application Problems',
                children: [{
                    title: 'Main Answer',
                    children: [{
                        problem: '\\html{<img src=img/illustrations/$illustration>}',
                        answer: '\\col{\\ins{Each house will occupy <sup>$unitn</sup>&#8260;<sub>$unitd</sub> of an acre.  If $number houses are to be built, how many acres of land are needed?}}{\\input{$total}}',
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
                        answer: '\\grp{\\frac{\\str{$unitn}}{\\str{$unitd}}}{\\sign{&div;}}{\\frac{\\str{$number}}{\\str{1}}}{\\sign{=}}{\\input{$total}}',
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
            { firstInput: 8, secondInput: 7, number: 56, illustration: '8.5-08_Veggie_Burger/400x300/VegBurger_c.jpg', template: 'firstFraction' },
            { total: 15, unitn: 3, unitd: 4, number: 20, illustration: 'Acres_Gplane_15b.jpg', template: 'housesDiv2' },
            { total: 15, unitn: 3, unitd: 4, number: 20, illustration: 'Acres_Gplane_15c.jpg', template: 'housesMul' },
            { total: 21, unitn: 1, unitd: 3, number: 63, illustration: 'Acres_Gplane_21a.jpg', template: 'firstFraction' },
            { total: 21, unitn: 1, unitd: 3, number: 63, illustration: 'Acres_Gplane_21b.jpg', template: 'housesDiv2' },
            { total: 21, unitn: 1, unitd: 3, number: 63, illustration: 'Acres_Gplane_21c.jpg', template: 'housesMul' },
            { totaln: 2, totald: 3, unitn: 1, unitd: 9, number: 6, illustration: 'Acres_Gplane_2.3a.jpg', template: 'housesDivFrac1' },
            {  totaln: 2, totald: 3, unitn: 1, unitd: 9, number: 6, illustration: 'Acres_Gplane_2.3b.jpg', template: 'housesDivFrac2' },
            {  totaln: 2, totald: 3, unitn: 1, unitd: 9, number: 6, illustration: 'Acres_Gplane_2.3c.jpg', template: 'housesMulFrac' }
        ];
    
    return dataUtils.build(desc, template, data);
}]);
