/*global angular */

angular.module('mathSkills').value('data9_4', {
    title: '9.4 Build Equivalent Fractions',
    path: '9.4-build-equivalent-fractions',
    children: [{
        title: 'Build Equivalent Fractions',
        children: [{
            title: 'Main Answer',
            children: [{
                problem: '\\rowgrp{\\row{\\str{Start with the fractions:}}}{\\row{\\frac{\\str{1}}{\\str{4}}}{\\row{\\html{<span> &nbsp; and &nbsp; </span>}}}{\\frac{\\str{3}}{\\str{5}}}}{\\row{\\str{Build equivalent fractions that have the same denominator.}}}',
                answer: '\\row{\\frac{\\input{5}}{\\input{20}}}{\\html{<span> &nbsp; and &nbsp; </span>}}{\\frac{\\input{12}}{\\input{20}}}',
                controls: {
                    "checkAnswer": true,
                    "help": false,
                    "workbook": true
                }
            }]
        }, {
            title: 'Workbook',
            children: [{
                problem: '\\row{\\str{What is the lowest common denominator (LCD) of the fractions?}}}',
                answer: '\\rowgrp{\\row{\\frac{\\fracstr{1}}{\\fracstr{4}}}{\\html{<span> &nbsp; and &nbsp; </span>}}{\\frac{\\fracstr{3}}{\\fracstr{5}}}}{\\row{\\input{20}}}',
                controls: {
                    "checkAnswer": true,
                    "help": '\\row{\\str{20 is the LCD of 4 and 5.}}}'
                },
            }, {
                problem: '\\row{\\str{Use the LCD to convert the fractions: }}',
                answer: '\\rowgrp{\\row{\\frac{\\fracstr{1}}{\\fracstr{4}}}{\\row{\\html{<span> &nbsp; and &nbsp; </span>}}}{\\frac{\\fracstr{3}}{\\fracstr{5}}}}{\\row{\\frac{\\input{5}}{\\fracstr{20}}}{\\html{<span> &nbsp; and &nbsp; </span>}}{\\frac{\\input{12}}{\\fracstr{20}}}}',
                controls: {
                    "checkAnswer": true,
                    "help": '\\rowgrp{\\row{\\frac{\\fracstr{1}}{\\fracstr{4}}}{\\row{\\html{<span> &nbsp; and &nbsp; </span>}}}{\\frac{\\fracstr{3}}{\\fracstr{5}}}}{\\row{\\str{converts to}}}{\\row{\\frac{\\fracstr{5}}{\\fracstr{20}}}{\\html{<span> &nbsp; and &nbsp; </span>}}{\\frac{\\fracstr{12}}{\\fracstr{20}}}}'
                }
            }]
        }]
    }, {
		// problem 2
        title: 'Build Equivalent Fractions',
        children: [{
            title: 'Main Answer',
            children: [{
                problem: '\\rowgrp{\\row{\\str{Start with the fractions:}}}{\\row{\\frac{\\str{3}}{\\str{8}}}{\\row{\\html{<span> &nbsp; and &nbsp; </span>}}}{\\frac{\\str{5}}{\\str{6}}}}{\\row{\\str{Build equivalent fractions that have the same denominator.}}}',
                answer: '\\row{\\frac{\\input{9}}{\\input{24}}}{\\html{<span> &nbsp; and &nbsp; </span>}}{\\frac{\\input{20}}{\\input{24}}}',
                controls: {
                    "checkAnswer": true,
                    "help": false,
                    "workbook": true
                }
            }]
        }, {
            title: 'Workbook',
            children: [{
                problem: '\\row{\\str{What is the lowest common denominator (LCD) of the fractions?}}}',
                answer: '\\rowgrp{\\row{\\frac{\\fracstr{3}}{\\fracstr{8}}}{\\row{\\html{<span> &nbsp; and &nbsp; </span>}}}{\\frac{\\fracstr{5}}{\\fracstr{6}}}}{\\row{\\input{24}}}',
                controls: {
                    "checkAnswer": true,
                    "help": '\\row{\\str{24 is the LCD of 8 and 6.}}}'
                },
            }, {
                problem: '\\row{\\str{Use the LCD to convert the fractions: }}',
                answer: '\\rowgrp{\\row{\\frac{\\fracstr{3}}{\\fracstr{8}}}{\\row{\\html{<span> &nbsp; and &nbsp; </span>}}}{\\frac{\\fracstr{5}}{\\fracstr{6}}}}{\\row{\\frac{\\input{9}}{\\fracstr{24}}}{\\html{<span> &nbsp; and &nbsp; </span>}}{\\frac{\\input{20}}{\\fracstr{24}}}}',
                controls: {
                    "checkAnswer": true,
                    "help": '\\rowgrp{\\row{\\frac{\\fracstr{3}}{\\fracstr{8}}}{\\row{\\html{<span> &nbsp; and &nbsp; </span>}}}{\\frac{\\fracstr{5}}{\\fracstr{6}}}}{\\row{\\str{converts to}}}{\\row{\\frac{\\fracstr{9}}{\\fracstr{24}}}{\\html{<span> &nbsp; and &nbsp; </span>}}{\\frac{\\fracstr{20}}{\\fracstr{24}}}}'
                }
            }]
        }]
    }, {
		//problem 3
        title: 'Build Equivalent Fractions',
        children: [{
            title: 'Main Answer',
            children: [{
                problem: '\\rowgrp{\\row{\\str{Start with the fractions:}}}{\\row{\\frac{\\str{4}}{\\str{5}}}{\\row{\\html{<span> &nbsp; and &nbsp; </span>}}}{\\frac{\\str{5}}{\\str{4}}}}{\\row{\\str{Build equivalent fractions that have the same denominator.}}}',
                answer: '\\row{\\frac{\\input{16}}{\\input{20}}}{\\html{<span> &nbsp; and &nbsp; </span>}}{\\frac{\\input{25}}{\\input{20}}}',
                controls: {
                    "checkAnswer": true,
                    "help": false,
                    "workbook": true
                }
            }]
        }, {
            title: 'Workbook',
            children: [{
                problem: '\\rowgrp{\\row{\\str{What is the lowest common denominator (LCD) of the fractions?}}}{\\row{\\frac{\\fracstr{4}}{\\fracstr{5}}}{\\row{\\html{<span> &nbsp; and &nbsp; </span>}}}{\\frac{\\fracstr{5}}{\\fracstr{4}}}}',
                answer: '\\row{\\input{20}}',
                controls: {
                    "checkAnswer": true,
                    "help": false
                },
            }, {
                problem: '\\rowgrp{\\row{\\str{Use the LCD to convert the fractions: }}}{\\row{\\frac{\\fracstr{4}}{\\fracstr{5}}}{\\row{\\html{<span> &nbsp; and &nbsp; </span>}}}{\\frac{\\fracstr{5}}{\\fracstr{4}}}}',
                answer: '\\row{\\frac{\\input{16}}{\\fracstr{20}}}{\\html{<span> &nbsp; and &nbsp; </span>}}{\\frac{\\input{25}}{\\fracstr{20}}}',
                controls: {
                    "checkAnswer": true,
                    "help": false
                }
            }]
        }]
    }, {
        title: 'Build Equivalent Fractions',
        children: [{
            title: 'Main Answer',
            children: [{
                problem: '\\rowgrp{\\row{\\str{Start with the fractions:}}}{\\row{\\frac{\\str{2}}{\\str{3}}}{\\row{\\html{<span> &nbsp; and &nbsp; </span>}}}{\\frac{\\str{5}}{\\str{6}}}}{\\row{\\str{Build equivalent fractions that have the same denominator.}}}',
                answer: '\\row{\\frac{\\input{4}}{\\input{6}}}{\\html{<span> &nbsp; and &nbsp; </span>}}{\\frac{\\input{5}}{\\input{6}}}',
                controls: {
                    "checkAnswer": true,
                    "help": false,
                    "workbook": true
                }
            }]
        }, {
            title: 'Workbook',
            children: [{
                problem: '\\rowgrp{\\row{\\str{What is the lowest common denominator (LCD) of the fractions?}}}{\\row{\\frac{\\fracstr{2}}{\\fracstr{3}}}{\\row{\\html{<span> &nbsp; and &nbsp; </span>}}}{\\frac{\\fracstr{5}}{\\fracstr{6}}}}',
                answer: '\\row{\\input{6}}',
                controls: {
                    "checkAnswer": true,
                    "help": false
                },
            }, {
                problem: '\\rowgrp{\\row{\\str{Use the LCD to convert the fractions: }}}{\\row{\\frac{\\fracstr{2}}{\\fracstr{3}}}{\\row{\\html{<span> &nbsp; and &nbsp; </span>}}}{\\frac{\\fracstr{5}}{\\fracstr{6}}}}',
                answer: '\\row{\\frac{\\input{4}}{\\fracstr{6}}}{\\html{<span> &nbsp; and &nbsp; </span>}}{\\frac{\\input{5}}{\\fracstr{6}}}',
                controls: {
                    "checkAnswer": true,
                    "help": false
                }
            }]
        }]
    }, {
        title: 'Build Equivalent Fractions',
        children: [{
            title: 'Main Answer',
            children: [{
                problem: '\\rowgrp{\\row{\\str{Start with the fractions:}}}{\\row{\\frac{\\str{5}}{\\str{8}}}{\\row{\\html{<span> &nbsp; and &nbsp; </span>}}}{\\frac{\\str{6}}{\\str{5}}}}{\\row{\\str{Build equivalent fractions that have the same denominator.}}}',
                answer: '\\row{\\frac{\\input{25}}{\\input{40}}}{\\html{<span> &nbsp; and &nbsp; </span>}}{\\frac{\\input{48}}{\\input{40}}}',
                controls: {
                    "checkAnswer": true,
                    "help": false,
                    "workbook": true
                }
            }]
        }, {
            title: 'Workbook',
            children: [{
                problem: '\\rowgrp{\\row{\\str{What is the lowest common denominator (LCD) of the fractions?}}}{\\row{\\frac{\\fracstr{5}}{\\fracstr{8}}}{\\row{\\html{<span> &nbsp; and &nbsp; </span>}}}{\\frac{\\fracstr{6}}{\\fracstr{5}}}}',
                answer: '\\row{\\input{40}}',
                controls: {
                    "checkAnswer": true,
                    "help": false
                },
            }, {
                problem: '\\rowgrp{\\row{\\str{Use the LCD to convert the fractions: }}}{\\row{\\frac{\\fracstr{5}}{\\fracstr{8}}}{\\row{\\html{<span> &nbsp; and &nbsp; </span>}}}{\\frac{\\fracstr{6}}{\\fracstr{5}}}}',
                answer: '\\row{\\frac{\\input{25}}{\\fracstr{40}}}{\\html{<span> &nbsp; and &nbsp; </span>}}{\\frac{\\input{48}}{\\fracstr{40}}}',
                controls: {
                    "checkAnswer": true,
                    "help": false
                }
            }]
        }]
    }, {
        title: 'Build Equivalent Fractions',
        children: [{
            title: 'Main Answer',
            children: [{
                problem: '\\rowgrp{\\row{\\str{Start with the fractions:}}}{\\row{\\frac{\\str{1}}{\\str{10}}}{\\row{\\html{<span> &nbsp; and &nbsp; </span>}}}{\\frac{\\str{3}}{\\str{4}}}}{\\row{\\str{Build equivalent fractions that have the same denominator.}}}',
                answer: '\\row{\\frac{\\input{2}}{\\input{20}}}{\\html{<span> &nbsp; and &nbsp; </span>}}{\\frac{\\input{15}}{\\input{20}}}',
                controls: {
                    "checkAnswer": true,
                    "help": false,
                    "workbook": true
                }
            }]
        }, {
            title: 'Workbook',
            children: [{
                problem: '\\rowgrp{\\row{\\str{What is the lowest common denominator (LCD) of the fractions?}}}{\\row{\\frac{\\fracstr{1}}{\\fracstr{10}}}{\\row{\\html{<span> &nbsp; and &nbsp; </span>}}}{\\frac{\\fracstr{3}}{\\fracstr{4}}}}',
                answer: '\\row{\\input{20}}',
                controls: {
                    "checkAnswer": true,
                    "help": false
                },
            }, {
                problem: '\\rowgrp{\\row{\\str{Use the LCD to convert the fractions: }}}{\\row{\\frac{\\fracstr{1}}{\\fracstr{10}}}{\\row{\\html{<span> &nbsp; and &nbsp; </span>}}}{\\frac{\\fracstr{3}}{\\fracstr{4}}}}',
                answer: '\\row{\\frac{\\input{2}}{\\fracstr{20}}}{\\html{<span> &nbsp; and &nbsp; </span>}}{\\frac{\\input{15}}{\\fracstr{20}}}',
                controls: {
                    "checkAnswer": true,
                    "help": false
                }
            }]
        }]
    }, {
        title: 'Build Equivalent Fractions',
        children: [{
            title: 'Main Answer',
            children: [{
                problem: '\\rowgrp{\\row{\\str{Start with the fractions:}}}{\\row{\\frac{\\str{10}}{\\str{3}}}{\\row{\\html{<span> &nbsp; and &nbsp; </span>}}}{\\frac{\\str{7}}{\\str{5}}}}{\\row{\\str{Build equivalent fractions that have the same denominator.}}}',
                answer: '\\row{\\frac{\\input{50}}{\\input{15}}}{\\html{<span> &nbsp; and &nbsp; </span>}}{\\frac{\\input{21}}{\\input{15}}}',
                controls: {
                    "checkAnswer": true,
                    "help": false,
                    "workbook": true
                }
            }]
        }, {
            title: 'Workbook',
            children: [{
                problem: '\\rowgrp{\\row{\\str{What is the lowest common denominator (LCD) of the fractions?}}}{\\row{\\frac{\\fracstr{10}}{\\fracstr{3}}}{\\row{\\html{<span> &nbsp; and &nbsp; </span>}}}{\\frac{\\fracstr{7}}{\\fracstr{5}}}}',
                answer: '\\row{\\input{15}}',
                controls: {
                    "checkAnswer": true,
                    "help": false
                },
            }, {
                problem: '\\rowgrp{\\row{\\str{Use the LCD to convert the fractions: }}}{\\row{\\frac{\\fracstr{10}}{\\fracstr{3}}}{\\row{\\html{<span> &nbsp; and &nbsp; </span>}}}{\\frac{\\fracstr{7}}{\\fracstr{5}}}}',
                answer: '\\row{\\frac{\\input{50}}{\\fracstr{15}}}{\\html{<span> &nbsp; and &nbsp; </span>}}{\\frac{\\input{21}}{\\fracstr{15}}}',
                controls: {
                    "checkAnswer": true,
                    "help": false
                }
            }]
        }]
    }, {
        title: 'Build Equivalent Fractions',
        children: [{
            title: 'Main Answer',
            children: [{
                problem: '\\rowgrp{\\row{\\str{Start with the fractions:}}}{\\row{\\frac{\\str{9}}{\\str{5}}}{\\row{\\html{<span> &nbsp; and &nbsp; </span>}}}{\\frac{\\str{7}}{\\str{2}}}}{\\row{\\str{Build equivalent fractions that have the same denominator.}}}',
                answer: '\\row{\\frac{\\input{18}}{\\input{10}}}{\\html{<span> &nbsp; and &nbsp; </span>}}{\\frac{\\input{35}}{\\input{10}}}',
                controls: {
                    "checkAnswer": true,
                    "help": false,
                    "workbook": true
                }
            }]
        }, {
            title: 'Workbook',
            children: [{
                problem: '\\rowgrp{\\row{\\str{What is the lowest common denominator (LCD) of the fractions?}}}{\\row{\\frac{\\fracstr{9}}{\\fracstr{5}}}{\\row{\\html{<span> &nbsp; and &nbsp; </span>}}}{\\frac{\\fracstr{7}}{\\fracstr{2}}}}',
                answer: '\\row{\\input{10}}',
                controls: {
                    "checkAnswer": true,
                    "help": false
                },
            }, {
                problem: '\\rowgrp{\\row{\\str{Use the LCD to convert the fractions: }}}{\\row{\\frac{\\fracstr{9}}{\\fracstr{5}}}{\\row{\\html{<span> &nbsp; and &nbsp; </span>}}}{\\frac{\\fracstr{7}}{\\fracstr{2}}}}',
                answer: '\\row{\\frac{\\input{18}}{\\fracstr{10}}}{\\html{<span> &nbsp; and &nbsp; </span>}}{\\frac{\\input{35}}{\\fracstr{10}}}',
                controls: {
                    "checkAnswer": true,
                    "help": false
                }
            }]
        }]
    }, {
        title: 'Build Equivalent Fractions',
        children: [{
            title: 'Main Answer',
            children: [{
                problem: '\\rowgrp{\\row{\\str{Start with the fractions:}}}{\\row{\\frac{\\str{3}}{\\str{7}}}{\\row{\\html{<span> &nbsp; and &nbsp; </span>}}}{\\frac{\\str{7}}{\\str{8}}}}{\\row{\\str{Build equivalent fractions that have the same denominator.}}}',
                answer: '\\row{\\frac{\\input{24}}{\\input{56}}}{\\html{<span> &nbsp; and &nbsp; </span>}}{\\frac{\\input{49}}{\\input{56}}}',
                controls: {
                    "checkAnswer": true,
                    "help": false,
                    "workbook": true
                }
            }]
        }, {
            title: 'Workbook',
            children: [{
                problem: '\\rowgrp{\\row{\\str{What is the lowest common denominator (LCD) of the fractions?}}}{\\row{\\frac{\\fracstr{3}}{\\fracstr{7}}}{\\row{\\html{<span> &nbsp; and &nbsp; </span>}}}{\\frac{\\fracstr{7}}{\\fracstr{8}}}}',
                answer: '\\row{\\input{56}}',
                controls: {
                    "checkAnswer": true,
                    "help": false
                },
            }, {
                problem: '\\rowgrp{\\row{\\str{Use the LCD to convert the fractions: }}}{\\row{\\frac{\\fracstr{3}}{\\fracstr{7}}}{\\row{\\html{<span> &nbsp; and &nbsp; </span>}}}{\\frac{\\fracstr{7}}{\\fracstr{8}}}}',
                answer: '\\row{\\frac{\\input{21}}{\\fracstr{56}}}{\\html{<span> &nbsp; and &nbsp; </span>}}{\\frac{\\input{49}}{\\fracstr{56}}}',
                controls: {
                    "checkAnswer": true,
                    "help": false
                }
            }]
        }]
    }, {
        title: 'Build Equivalent Fractions',
        children: [{
            title: 'Main Answer',
            children: [{
                problem: '\\rowgrp{\\row{\\str{Start with the fractions:}}}{\\row{\\frac{\\str{15}}{\\str{6}}}{\\row{\\html{<span> &nbsp; and &nbsp; </span>}}}{\\frac{\\str{3}}{\\str{10}}}}{\\row{\\str{Build equivalent fractions that have the same denominator.}}}',
                answer: '\\row{\\frac{\\input{75}}{\\input{30}}}{\\html{<span> &nbsp; and &nbsp; </span>}}{\\frac{\\input{9}}{\\input{30}}}',
                controls: {
                    "checkAnswer": true,
                    "help": false,
                    "workbook": true
                }
            }]
        }, {
            title: 'Workbook',
            children: [{
                problem: '\\rowgrp{\\row{\\str{What is the lowest common denominator (LCD) of the fractions?}}}{\\row{\\frac{\\fracstr{15}}{\\fracstr{6}}}{\\row{\\html{<span> &nbsp; and &nbsp; </span>}}}{\\frac{\\fracstr{3}}{\\fracstr{10}}}}',
                answer: '\\row{\\input{30}}',
                controls: {
                    "checkAnswer": true,
                    "help": false
                },
            }, {
                problem: '\\rowgrp{\\row{\\str{Use the LCD to convert the fractions: }}}{\\row{\\frac{\\fracstr{15}}{\\fracstr{6}}}{\\row{\\html{<span> &nbsp; and &nbsp; </span>}}}{\\frac{\\fracstr{3}}{\\fracstr{10}}}}',
                answer: '\\row{\\frac{\\input{75}}{\\fracstr{30}}}{\\html{<span> &nbsp; and &nbsp; </span>}}{\\frac{\\input{9}}{\\fracstr{30}}}',
                controls: {
                    "checkAnswer": true,
                    "help": false
                }
            }]
        }]
    }]
});
