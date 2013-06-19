/*global angular */

angular.module('mathSkills').value('data3_2', {
    title: '3.2 Divide Whole Numbers',
    path: '3.2-divide-whole-numbers',
    children: [{
        title: 'Divide Whole Numbers',
        children: [{
            title: 'Main Answer',
            children: [{
                problem: '\\html{How many times does 5 go into 9308?<br><br>Set up the division problem by placing the<br>dividend and the divisor in the proper places.}',
                answer: '\\css{\\divwholes{\\input{5}}{\\input{9308}}}{divwhole}',
                controls: {
                    "checkAnswer": true,
                    "help": false,
                    "workbook": true
                }
            }]
        }, {
            title: 'Workbook',
            children: [{
                problem: '\\str{Place the dividend and divisor in the proper places for the problem "9308 divided by 5"}',
                answer: '\\css{\\divwholes{\\select{5}{[5,9308]}}{\\select{9308}{[5,9308]}}}{divwhole}',
                controls: {
                    "checkAnswer": true,
                    "help": true
                }
            }]
        }]
    }, {
        title: 'Divide Whole Numbers',
        children: [{
            title: 'Main Answer',
            children: [{
                problem: '\\html{Find the quotient of 3239 and 3.<br><br>Set up the division problem by placing the<br>dividend and the divisor in the proper places.}',
                answer: '\\css{\\divwholes{\\input{3}}{\\input{3239}}}{divwhole}',
                controls: {
                    "checkAnswer": true,
                    "help": false,
                    "workbook": true
                }
            }]
        }, {
            title: 'Workbook',
            children: [{
                problem: '\\str{Place the dividend and divisor in the proper places for the problem "3239 divided by 3"}',
                answer: '\\css{\\divwholes{\\select{3}{[3,3239]}}{\\select{3239}{[3,3239]}}}{divwhole}',
                controls: {
                    "checkAnswer": true,
                    "help": true
                }
            }]
        }]
    }, {
        title: 'Divide Whole Numbers',
        children: [{
            title: 'Main Answer',
            children: [{
                problem: '\\col{\\str{Solve: x / y.}}{\\html{&nbsp;}}{\\str{Set up the division problem by placing the dividend and the divisor in the proper places.}',
                answer: '\\css{\\divwholes{\\input{y}}{\\input{x}}}{divwhole}',
                controls: {
                    "checkAnswer": true,
                    "help": false,
                    "workbook": true
                }
            }]
        }, {
            title: 'Workbook',
            children: [{
                problem: '\\str{Place the dividend and divisor in the proper places for the problem "x divided by y"}',
                answer: '\\css{\\divwholes{\\select{"x"}{["x","y"]}}{\\select{"y"}{["x","y"]}}}{divwhole}',
                controls: {
                    "checkAnswer": true,
                    "help": true
                }
            }]
        }]
    }, {
        title: 'Divide Whole Numbers',
        children: [{
            title: 'Main Answer',
            children: [{
                problem: '\\html{How many times does 5 go into 7916?<br><br>Set up the division problem by placing the<br>dividend and the divisor in the proper places.}',
                answer: '\\css{\\divwholes{\\input{5}}{\\input{7916}}}{divwhole}',
                controls: {
                    "checkAnswer": true,
                    "help": false,
                    "workbook": true
                }
            }]
        }, {
            title: 'Workbook',
            children: [{
                problem: '\\str{Place the dividend and divisor in the proper places for the problem "7916 divided by 5"}',
                answer: '\\css{\\divwholes{\\select{5}{[5,7916]}}{\\select{7916}{[5,7916]}}}{divwhole}',
                controls: {
                    "checkAnswer": true,
                    "help": true
                }
            }]
        }]
    }, {
        title: 'Divide Whole Numbers',
        children: [{
            title: 'Main Answer',
            children: [{
                problem: '\\html{How many times does 6 go into 2855?<br><br>Set up the division problem by placing the<br>dividend and the divisor in the proper places.}',
                answer: '\\css{\\divwholes{\\input{6}}{\\input{2855}}}{divwhole}',
                controls: {
                    "checkAnswer": true,
                    "help": false,
                    "workbook": true
                }
            }]
        }, {
            title: 'Workbook',
            children: [{
                problem: '\\str{Place the dividend and divisor in the proper places for the problem "2855 divided by 6"}',
                answer: '\\css{\\divwholes{\\select{6}{[6,2855]}}{\\select{2855}{[6,2855]}}}{divwhole}',
                controls: {
                    "checkAnswer": true,
                    "help": true
                }
            }]
        }]
    }, {
        title: 'Divide Whole Numbers',
        children: [{
            title: 'Main Answer',
            children: [{
                problem: '\\html{Find the quotient of 6744 and 7.<br><br>Solve the problem.}',
                answer: '\\css{\\grp{\\input{6744}}{\\str{quotient}}{\\input{7}}{\\str{remainder}}}{divwhole}',
                controls: {
                    "checkAnswer": true,
                    "help": false,
                    "workbook": true
                }
            }]
        }, {
            title: 'Workbook',
            children: [{
                problem: '\\str{Place the dividend and divisor in the proper places for the problem "6744 divided by 7"}',
                answer: '\\css{\\divwholes{\\input{7}}{\\input{6744}}}{divwhole}',
                controls: {
                    "checkAnswer": true,
                    "help": true
                }
            }, {
                problem: '\\str{Click on the right-most digit of the number you would like to divide into.}',
                answer: '\\css{\\divwholes{\\str{7}}{\\butgrp{\\row{\\but{6}{F}}{\\but{7}{T}}{\\but{4}{F}}{\\but{4}{F}}}}}{divwhole}',
                controls: {
                    "checkAnswer": true,
                    "help": true
                }
            }, {
                problem: '\\str{Divide 6744 by 7}',
                answer: '\\longdiv{6744}{7}',
                controls: {
                    "checkAnswer": true,
                    "help": true
                }
            }]
        }]
    }, {
        title: 'Divide Whole Numbers',
        children: [{
            title: 'Main Answer',
            children: [{
                problem: '\\col{\\str{Solve: 8306 / 7}}{\\html{<br>Solve the problem.}}',
                answer: '\\css{\\grp{\\input{1186}}{\\str{quotient}}{\\input{4}}{\\str{remainder}}}{divwhole}',
                controls: {
                    "checkAnswer": true,
                    "help": false,
                    "workbook": true
                }
            }]
        }, {
            title: 'Workbook',
            children: [{
                problem: '\\str{Place the dividend and divisor in the proper places for the problem "8306 divided by 7"}',
                answer: '\\css{\\divwholes{\\input{7}}{\\input{8306}}}{divwhole}',
                controls: {
                    "checkAnswer": true,
                    "help": true
                }
            }, {
                problem: '\\str{Click on the right-most digit of the number you would like to divide into.}',
                answer: '\\css{\\divwholes{\\str{7}}{\\butgrp{\\row{\\but{8}{T}}{\\but{3}{F}}{\\but{0}{F}}{\\but{6}{F}}}}}{divwhole}',
                controls: {
                    "checkAnswer": true,
                    "help": true
                }
            }, {
                problem: '\\str{Divide 8306 by 7}',
                answer: '\\longdiv{8306}{7}',
                controls: {
                    "checkAnswer": true,
                    "help": true
                }
            }]
        }]
    }, {
        title: 'Divide Whole Numbers',
        children: [{
            title: 'Main Answer',
            children: [{
                problem: '\\col{\\str{Solve: 3027 / 3.}}{\\html{<br>Solve the problem.}}',
                answer: '\\css{\\grp{\\input{1009}}{\\str{quotient}}{\\input{0}}{\\str{remainder}}}{divwhole}',
                controls: {
                    "checkAnswer": true,
                    "help": false,
                    "workbook": true
                }
            }]
        }, {
            title: 'Workbook',
            children: [{
                problem: '\\str{Place the dividend and divisor in the proper places for the problem "3027 divided by 3"}',
                answer: '\\css{\\divwholes{\\input{3}}{\\input{3027}}}{divwhole}',
                controls: {
                    "checkAnswer": true,
                    "help": true
                }
            }, {
                problem: '\\str{Click on the right-most digit of the number you would like to divide into.}',
                answer: '\\css{\\divwholes{\\str{3}}{\\butgrp{\\row{\\but{3}{T}}{\\but{0}{F}}{\\but{2}{F}}{\\but{7}{F}}}}}{divwhole}',
                controls: {
                    "checkAnswer": true,
                    "help": true
                }
            }, {
                problem: '\\str{Divide 3027 by 3}',
                answer: '\\longdiv{3027}{3}',
                controls: {
                    "checkAnswer": true,
                    "help": true
                }
            }]
        }]
    }, {
        title: 'Divide Whole Numbers',
        children: [{
            title: 'Main Answer',
            children: [{
                problem: '\\html{Find the quotient of 1828 and 6.<br><br>Solve the problem.}',
                answer: '\\css{\\grp{\\input{304}}{\\str{quotient}}{\\input{4}}{\\str{remainder}}}{divwhole}',
                controls: {
                    "checkAnswer": true,
                    "help": false,
                    "workbook": true
                }
            }]
        }, {
            title: 'Workbook',
            children: [{
                problem: '\\str{Place the dividend and divisor in the proper places for the problem "1828 divided by 6"}',
                answer: '\\css{\\divwholes{\\input{6}}{\\input{1828}}}{divwhole}',
                controls: {
                    "checkAnswer": true,
                    "help": true
                }
            }, {
                problem: '\\str{Click on the right-most digit of the number you would like to divide into.}',
                answer: '\\css{\\divwholes{\\str{6}}{\\butgrp{\\row{\\but{1}{F}}{\\but{8}{T}}{\\but{2}{F}}{\\but{8}{F}}}}}{divwhole}',
                controls: {
                    "checkAnswer": true,
                    "help": true
                }
            }, {
                problem: '\\str{Divide 1828 by 6}',
                answer: '\\longdiv{1828}{6}',
                controls: {
                    "checkAnswer": true,
                    "help": true
                }
            }]
        }]
    }, {
        title: 'Divide Whole Numbers', //////////10
        children: [{
            title: 'Main Answer',
            children: [{
                problem: '\\html{How many times does 3 go into 9381?<br><br>Solve the problem.}',
                answer: '\\css{\\grp{\\input{3127}}{\\str{quotient}}{\\input{0}}{\\str{remainder}}}{divwhole}',
                controls: {
                    "checkAnswer": true,
                    "help": false,
                    "workbook": true
                }
            }]
        }, {
            title: 'Workbook',
            children: [{
                problem: '\\str{Place the dividend and divisor in the proper places for the problem "9381 divided by 3"}',
                answer: '\\css{\\divwholes{\\input{3}}{\\input{9381}}}{divwhole}',
                controls: {
                    "checkAnswer": true,
                    "help": true
                }
            }, {
                problem: '\\str{Click on the right-most digit of the number you would like to divide into.}',
                answer: '\\css{\\divwholes{\\str{3}}{\\butgrp{\\row{\\but{9}{T}}{\\but{3}{F}}{\\but{8}{F}}{\\but{1}{F}}}}}{divwhole}',
                controls: {
                    "checkAnswer": true,
                    "help": true
                }
            }, {
                problem: '\\str{Divide 9381 by 3}',
                answer: '\\longdiv{9381}{3}',
                controls: {
                    "checkAnswer": true,
                    "help": true
                }
            }]
        }]
    }, {
        title: 'Divide Whole Numbers',
        children: [{
            title: 'Main Answer',
            children: [{
                problem: '\\html{How many times does 23 go into 18300?<br><br>Solve the problem.}',
                answer: '\\css{\\grp{\\input{795}}{\\str{quotient}}{\\input{15}}{\\str{remainder}}}{divwhole}',
                controls: {
                    "checkAnswer": true,
                    "help": false,
                    "workbook": true
                }
            }]
        }, {
            title: 'Workbook',
            children: [{
                problem: '\\str{Place the dividend and divisor in the proper places for the problem "18300 divided by 23"}',
                answer: '\\css{\\divwholes{\\input{23}}{\\input{18300}}}{divwhole}',
                controls: {
                    "checkAnswer": true,
                    "help": true
                }
            }, {
                problem: '\\str{Click on the right-most digit of the number you would like to divide into.}',
                answer: '\\css{\\divwholes{\\str{23}}{\\butgrp{\\row{\\but{1}{F}}{\\but{8}{F}}{\\but{3}{T}}{\\but{0}{F}}{\\but{0}{F}}}}}{divwhole}',
                controls: {
                    "checkAnswer": true,
                    "help": true
                }
            }, {
                problem: '\\str{Divide 18300 by 23}',
                answer: '\\longdiv{18300}{23}',
                controls: {
                    "checkAnswer": true,
                    "help": true
                }
            }]
        }]
    }, {
        title: 'Divide Whole Numbers',
        children: [{
            title: 'Main Answer',
            children: [{
                problem: '\\col{\\str{Solve: 8293 / 52.}}{\\html{<br>Solve the problem.}}',
                answer: '\\css{\\grp{\\input{159}}{\\str{quotient}}{\\input{25}}{\\str{remainder}}}{divwhole}',
                controls: {
                    "checkAnswer": true,
                    "help": false,
                    "workbook": true
                }
            }]
        }, {
            title: 'Workbook',
            children: [{
                problem: '\\str{Place the dividend and divisor in the proper places for the problem "8293 divided by 52"}',
                answer: '\\css{\\divwholes{\\input{52}}{\\input{8293}}}{divwhole}',
                controls: {
                    "checkAnswer": true,
                    "help": true
                }
            }, {
                problem: '\\str{Click on the right-most digit of the number you would like to divide into.}',
                answer: '\\css{\\divwholes{\\str{52}}{\\butgrp{\\row{\\but{8}{F}}{\\but{2}{T}}{\\but{9}{F}}{\\but{3}{F}}}}}{divwhole}',
                controls: {
                    "checkAnswer": true,
                    "help": true
                }
            }, {
                problem: '\\str{Divide 8293 by 52}',
                answer: '\\longdiv{8293}{52}',
                controls: {
                    "checkAnswer": true,
                    "help": true
                }
            }]
        }]
    }, {
        title: 'Divide Whole Numbers',
        children: [{
            title: 'Main Answer',
            children: [{
                problem: '\\html{Find the quotient of 2110 and 69.<br><br>Solve the problem.}',
                answer: '\\css{\\grp{\\input{30}}{\\str{quotient}}{\\input{40}}{\\str{remainder}}}{divwhole}',
                controls: {
                    "checkAnswer": true,
                    "help": false,
                    "workbook": true
                }
            }]
        }, {
            title: 'Workbook',
            children: [{
                problem: '\\str{Place the dividend and divisor in the proper places for the problem "2110 divided by 69"}',
                answer: '\\css{\\divwholes{\\input{69}}{\\input{2110}}}{divwhole}',
                controls: {
                    "checkAnswer": true,
                    "help": true
                }
            }, {
                problem: '\\str{Click on the right-most digit of the number you would like to divide into.}',
                answer: '\\css{\\divwholes{\\str{69}}{\\butgrp{\\row{\\but{2}{F}}{\\but{1}{F}}{\\but{1}{T}}{\\but{0}{F}}}}}{divwhole}',
                controls: {
                    "checkAnswer": true,
                    "help": true
                }
            }, {
                problem: '\\str{Divide 2110 by 69}',
                answer: '\\longdiv{2110}{69}',
                controls: {
                    "checkAnswer": true,
                    "help": true
                }
            }]
        }]
    }, {
        title: 'Divide Whole Numbers',
        children: [{
            title: 'Main Answer',
            children: [{
                problem: '\\html{How many times does 72 go into 63052?<br><br>Solve the problem.}',
                answer: '\\css{\\grp{\\input{875}}{\\str{quotient}}{\\input{52}}{\\str{remainder}}}{divwhole}',
                controls: {
                    "checkAnswer": true,
                    "help": false,
                    "workbook": true
                }
            }]
        }, {
            title: 'Workbook',
            children: [{
                problem: '\\str{Place the dividend and divisor in the proper places for the problem "63052 divided by 72"}',
                answer: '\\css{\\divwholes{\\input{72}}{\\input{63052}}}{divwhole}',
                controls: {
                    "checkAnswer": true,
                    "help": true
                }
            }, {
                problem: '\\str{Click on the right-most digit of the number you would like to divide into.}',
                answer: '\\css{\\divwholes{\\str{72}}{\\butgrp{\\row{\\but{6}{F}}{\\but{3}{F}}{\\but{0}{T}}{\\but{5}{F}}{\\but{2}{F}}}}}{divwhole}',
                controls: {
                    "checkAnswer": true,
                    "help": true
                }
            }, {
                problem: '\\str{Divide 63052 by 72}',
                answer: '\\longdiv{63052}{72}',
                controls: {
                    "checkAnswer": true,
                    "help": true
                }
            }]
        }]
    }, {
        title: 'Divide Whole Numbers',
        children: [{
            title: 'Main Answer',
            children: [{
                problem: '\\col{\\str{Solve: 82292 / 905.}}{\\html{<br>Solve the problem.}}',
                answer: '\\css{\\grp{\\input{90}}{\\str{quotient}}{\\input{842}}{\\str{remainder}}}{divwhole}',
                controls: {
                    "checkAnswer": true,
                    "help": false,
                    "workbook": true
                }
            }]
        }, {
            title: 'Workbook',
            children: [{
                problem: '\\str{Place the dividend and divisor in the proper places for the problem "82292 divided by 905"}',
                answer: '\\css{\\divwholes{\\input{905}}{\\input{82292}}}{divwhole}',
                controls: {
                    "checkAnswer": true,
                    "help": true
                }
            }, {
                problem: '\\str{Click on the right-most digit of the number you would like to divide into.}',
                answer: '\\css{\\divwholes{\\str{905}}{\\butgrp{\\row{\\but{8}{F}}{\\but{2}{F}}{\\but{2}{F}}{\\but{9}{T}}{\\but{2}{F}}}}}{divwhole}',
                controls: {
                    "checkAnswer": true,
                    "help": true
                }
            }, {
                problem: '\\str{Divide 82292 by 905}',
                answer: '\\longdiv{82292}{905}',
                controls: {
                    "checkAnswer": true,
                    "help": true
                }
            }]
        }]
    }]
});
