/*global angular */

angular.module('mathSkills').value('data7_3', {
    title: '7.3 Dividing Fractions',
    path: '7.3-dividing-fractions',
    children: [{
        title: 'Dividing Fractions',
        children: [{
            title: 'Main Answer',
            children: [{
                problem: '\\row{\\html{Solve &nbsp;}}{\\frac{\\str{1}}{\\str{2}}}{\\sign{&divide;}}{\\frac{\\str{3}}{\\str{2}}}',
                answer: '\\frac{\\input{1}}{\\input{3}}',
                controls: {
                    "checkAnswer": true,
                    "help": false,
                    "workbook": true
                }
            }]
        }, {
            title: 'Workbook',
            children: [{
                problem: '\\rowgrp{\\row{\\frac{\\str{1}}{\\str{2}}}{\\sign{&divide;}}{\\frac{\\str{3}}{\\str{2}}}}{\\row{\\str{Rewrite the problem as the product of the fractions.}}}',
                answer: '\\grp{\\frac{\\input{1}}{\\input{2}}}{\\sign{&times;}}{\\frac{\\input{2}}{\\input{3}}}',
                controls: {
                    "checkAnswer": true,
                    "help": true
                }
            }, {
                problem: '\\str{Multiply the fractions together.}',
                answer: '\\multiplyfracs{\\frac{\\str{1}}{\\str{2}}}{\\frac{\\str{2}}{\\str{3}}}',
                controls: {
                    "checkAnswer": true,
                    "help": true
                }
            }, {
                problem: '\\str{Reduce the fraction to its lowest terms.}',
                answer: '\\prev{feedbackData.getPrevious()}{\\reducefrac{\\frac{\\str{2}}{\\str{6}}}',
                controls: {
                    "checkAnswer": true,
                    "help": true
                }
            }]
        }]
    }, {
        title: 'Dividing Fractions',
        children: [{
            title: 'Main Answer',
            children: [{
                problem: '\\row{\\html{Solve &nbsp;}}{\\frac{\\str{5}}{\\str{10}}}{\\sign{&divide;}}{\\frac{\\str{5}}{\\str{2}}}',
                answer: '\\frac{\\input{1}}{\\input{5}}',
                controls: {
                    "checkAnswer": true,
                    "help": false,
                    "workbook": true
                }
            }]
        }, {
            title: 'Workbook',
            children: [{
                problem: '\\rowgrp{\\row{\\frac{\\str{5}}{\\str{10}}}{\\sign{&divide;}}{\\frac{\\str{5}}{\\str{2}}}}{\\row{\\str{Rewrite the problem as the product of the fractions.}}}',
                answer: '\\grp{\\frac{\\input{5}}{\\input{10}}}{\\sign{&times;}}{\\frac{\\input{2}}{\\input{5}}}',
                controls: {
                    "checkAnswer": true,
                    "help": true
                }
            }, {
                problem: '\\str{Multiply the fractions together.}',
                answer: '\\multiplyfracs{\\frac{\\str{5}}{\\str{10}}}{\\frac{\\str{2}}{\\str{5}}}',
                controls: {
                    "checkAnswer": true,
                    "help": true
                }
            }, {
                problem: '\\str{Reduce the fraction to its lowest terms.}',
                answer: '\\prev{feedbackData.getPrevious()}{\\reducefrac{\\frac{\\str{10}}{\\str{50}}}',
                controls: {
                    "checkAnswer": true,
                    "help": true
                }
            }]
        }]
    }, {
        title: 'Dividing Fractions',
        children: [{
            title: 'Main Answer',
            children: [{
                problem: '\\row{\\html{Solve &nbsp;}}{\\frac{\\str{7}}{\\str{6}}}{\\sign{&divide;}}{\\frac{\\str{7}}{\\str{3}}}',
                answer: '\\frac{\\input{1}}{\\input{2}}',
                controls: {
                    "checkAnswer": true,
                    "help": false,
                    "workbook": true
                }
            }]
        }, {
            title: 'Workbook',
            children: [{
                problem: '\\rowgrp{\\row{\\frac{\\str{7}}{\\str{6}}}{\\sign{&divide;}}{\\frac{\\str{7}}{\\str{3}}}}{\\row{\\str{Rewrite the problem as the product of the fractions.}}}',
                answer: '\\grp{\\frac{\\input{7}}{\\input{6}}}{\\sign{&times;}}{\\frac{\\input{3}}{\\input{7}}}',
                controls: {
                    "checkAnswer": true,
                    "help": true
                }
            }, {
                problem: '\\str{Multiply the fractions together.}',
                answer: '\\multiplyfracs{\\frac{\\str{7}}{\\str{6}}}{\\frac{\\str{3}}{\\str{7}}}',
                controls: {
                    "checkAnswer": true,
                    "help": true
                }
            }, {
                problem: '\\str{Reduce the fraction to its lowest terms.}',
                answer: '\\prev{feedbackData.getPrevious()}{\\reducefrac{\\frac{\\str{21}}{\\str{42}}}',
                controls: {
                    "checkAnswer": true,
                    "help": true
                }
            }]
        }]
    }, {
        title: 'Dividing Fractions',
        children: [{
            title: 'Main Answer',
            children: [{
                problem: '\\row{\\html{Solve &nbsp;}}{\\frac{\\str{2}}{\\str{9}}}{\\sign{&divide;}}{\\frac{\\str{5}}{\\str{3}}}',
                answer: '\\frac{\\input{2}}{\\input{15}}',
                controls: {
                    "checkAnswer": true,
                    "help": false,
                    "workbook": true
                }
            }]
        }, {
            title: 'Workbook',
            children: [{
                problem: '\\rowgrp{\\row{\\frac{\\str{2}}{\\str{9}}}{\\sign{&divide;}}{\\frac{\\str{5}}{\\str{3}}}}{\\row{\\str{Rewrite the problem as the product of the fractions.}}}',
                answer: '\\grp{\\frac{\\input{2}}{\\input{9}}}{\\sign{&times;}}{\\frac{\\input{3}}{\\input{5}}}',
                controls: {
                    "checkAnswer": true,
                    "help": true
                }
            }, {
                problem: '\\str{Multiply the fractions together.}',
                answer: '\\multiplyfracs{\\frac{\\str{2}}{\\str{9}}}{\\frac{\\str{3}}{\\str{5}}}',
                controls: {
                    "checkAnswer": true,
                    "help": true
                }
            }, {
                problem: '\\str{Reduce the fraction to its lowest terms.}',
                answer: '\\prev{feedbackData.getPrevious()}{\\reducefrac{\\frac{\\str{6}}{\\str{45}}}',
                controls: {
                    "checkAnswer": true,
                    "help": true
                }
            }]
        }]
    }, {
        title: 'Dividing Fractions',
        children: [{
            title: 'Main Answer',
            children: [{
                problem: '\\row{\\html{Solve &nbsp;}}{\\frac{\\str{10}}{\\str{3}}}{\\sign{&divide;}}{\\frac{\\str{12}}{\\str{11}}}',
                answer: '\\frac{\\input{55}}{\\input{18}}',
                controls: {
                    "checkAnswer": true,
                    "help": false,
                    "workbook": true
                }
            }]
        }, {
            title: 'Workbook',
            children: [{
                problem: '\\rowgrp{\\row{\\frac{\\str{10}}{\\str{3}}}{\\sign{&divide;}}{\\frac{\\str{12}}{\\str{11}}}}{\\row{\\str{Rewrite the problem as the product of the fractions.}}}',
                answer: '\\grp{\\frac{\\input{10}}{\\input{3}}}{\\sign{&times;}}{\\frac{\\input{11}}{\\input{12}}}',
                controls: {
                    "checkAnswer": true,
                    "help": true
                }
            }, {
                problem: '\\str{Multiply the fractions together.}',
                answer: '\\multiplyfracs{\\frac{\\str{10}}{\\str{3}}}{\\frac{\\str{11}}{\\str{12}}}',
                controls: {
                    "checkAnswer": true,
                    "help": true
                }
            }, {
                problem: '\\str{Reduce the fraction to its lowest terms.}',
                answer: '\\prev{feedbackData.getPrevious()}{\\reducefrac{\\frac{\\str{110}}{\\str{36}}}',
                controls: {
                    "checkAnswer": true,
                    "help": true
                }
            }]
        }]
    }, {
        title: 'Dividing Fractions',
        children: [{
            title: 'Main Answer',
            children: [{
                problem: '\\row{\\html{Solve &nbsp;}}{\\frac{\\str{17}}{\\str{34}}}{\\sign{&divide;}}{\\frac{\\str{12}}{\\str{14}}}',
                answer: '\\frac{\\input{7}}{\\input{12}}',
                controls: {
                    "checkAnswer": true,
                    "help": false,
                    "workbook": true
                }
            }]
        }, {
            title: 'Workbook',
            children: [{
                problem: '\\rowgrp{\\row{\\frac{\\str{17}}{\\str{34}}}{\\sign{&divide;}}{\\frac{\\str{12}}{\\str{14}}}}{\\row{\\str{Rewrite the problem as the product of the fractions.}}}',
                answer: '\\grp{\\frac{\\input{17}}{\\input{34}}}{\\sign{&times;}}{\\frac{\\input{14}}{\\input{12}}}',
                controls: {
                    "checkAnswer": true,
                    "help": true
                }
            }, {
                problem: '\\str{Multiply the fractions together.}',
                answer: '\\multiplyfracs{\\frac{\\str{17}}{\\str{34}}}{\\frac{\\str{14}}{\\str{12}}}',
                controls: {
                    "checkAnswer": true,
                    "help": true
                }
            }, {
                problem: '\\str{Reduce the fraction to its lowest terms.}',
                answer: '\\prev{feedbackData.getPrevious()}{\\reducefrac{\\frac{\\str{238}}{\\str{408}}}',
                controls: {
                    "checkAnswer": true,
                    "help": true
                }
            }]
        }]
    }, {
        title: 'Dividing Fractions',
        children: [{
            title: 'Main Answer',
            children: [{
                problem: '\\row{\\html{Solve &nbsp;}}{\\frac{\\str{18}}{\\str{27}}}{\\sign{&divide;}}{\\frac{\\str{23}}{\\str{21}}}',
                answer: '\\frac{\\input{14}}{\\input{23}}',
                controls: {
                    "checkAnswer": true,
                    "help": false,
                    "workbook": true
                }
            }]
        }, {
            title: 'Workbook',
            children: [{
                problem: '\\rowgrp{\\row{\\frac{\\str{18}}{\\str{27}}}{\\sign{&divide;}}{\\frac{\\str{23}}{\\str{21}}}}{\\row{\\str{Rewrite the problem as the product of the fractions.}}}',
                answer: '\\grp{\\frac{\\input{18}}{\\input{27}}}{\\sign{&times;}}{\\frac{\\input{21}}{\\input{23}}}',
                controls: {
                    "checkAnswer": true,
                    "help": true
                }
            }, {
                problem: '\\str{Multiply the fractions together.}',
                answer: '\\multiplyfracs{\\frac{\\str{18}}{\\str{27}}}{\\frac{\\str{21}}{\\str{23}}}',
                controls: {
                    "checkAnswer": true,
                    "help": true
                }
            }, {
                problem: '\\str{Reduce the fraction to its lowest terms.}',
                answer: '\\prev{feedbackData.getPrevious()}{\\reducefrac{\\frac{\\str{378}}{\\str{621}}}',
                controls: {
                    "checkAnswer": true,
                    "help": true
                }
            }]
        }]
    }, {
        title: 'Dividing Fractions',
        children: [{
            title: 'Main Answer',
            children: [{
                problem: '\\row{\\html{Solve &nbsp;}}{\\frac{\\str{2}}{\\str{4}}}{\\sign{&divide;}}{\\frac{\\str{12}}{\\str{8}}}{\\sign{&divide;}}{\\frac{\\str{24}}{\\str{18}}}',
                answer: '\\frac{\\input{1}}{\\input{4}}',
                controls: {
                    "checkAnswer": true,
                    "help": false,
                    "workbook": true
                }
            }]
        }, {
            title: 'Workbook',
            children: [{
                problem: '\\rowgrp{\\row{\\frac{\\str{2}}{\\str{4}}}{\\sign{&divide;}}{\\frac{\\str{12}}{\\str{8}}}{\\sign{&divide;}}{\\frac{\\str{24}}{\\str{18}}}}{\\row{\\str{Rewrite the problem as the product of the fractions.}}}',
                answer: '\\grp{\\frac{\\input{2}}{\\input{4}}}{\\sign{&times;}}{\\frac{\\input{8}}{\\input{12}}}{\\sign{&times;}}{\\frac{\\input{18}}{\\input{24}}}',
                controls: {
                    "checkAnswer": true,
                    "help": true
                }
            }, {
                problem: '\\str{Multiply the fractions together.}',
                answer: '\\multiplyfracs{\\frac{\\str{2}}{\\str{4}}}{\\frac{\\str{8}}{\\str{12}}}{\\frac{\\str{18}}{\\str{24}}}',
                controls: {
                    "checkAnswer": true,
                    "help": true
                }
            }, {
                problem: '\\str{Reduce the fraction to its lowest terms.}',
                answer: '\\prev{feedbackData.getPrevious()}{\\reducefrac{\\frac{\\str{378}}{\\str{621}}}',
                controls: {
                    "checkAnswer": true,
                    "help": true
                }
            }]
        }]
    }, {
        title: 'Dividing Fractions',
        children: [{
            title: 'Main Answer',
            children: [{
                problem: '\\row{\\html{Solve &nbsp;}}{\\frac{\\str{27}}{\\str{14}}}{\\sign{&divide;}}{\\frac{\\str{28}}{\\str{21}}}{\\sign{&divide;}}{\\frac{\\str{9}}{\\str{12}}}',
                answer: '\\frac{\\input{27}}{\\input{14}}',
                controls: {
                    "checkAnswer": true,
                    "help": false,
                    "workbook": true
                }
            }]
        }, {
            title: 'Workbook',
            children: [{
                problem: '\\rowgrp{\\row{\\frac{\\str{27}}{\\str{14}}}{\\sign{&divide;}}{\\frac{\\str{28}}{\\str{21}}}{\\sign{&divide;}}{\\frac{\\str{9}}{\\str{12}}}}{\\row{\\str{Rewrite the problem as the product of the fractions.}}}',
                answer: '\\grp{\\frac{\\input{27}}{\\input{14}}}{\\sign{&times;}}{\\frac{\\input{21}}{\\input{28}}}{\\sign{&times;}}{\\frac{\\input{12}}{\\input{9}}}',
                controls: {
                    "checkAnswer": true,
                    "help": true
                }
            }, {
                problem: '\\str{Multiply the fractions together.}',
                answer: '\\multiplyfracs{\\frac{\\str{27}}{\\str{14}}}{\\frac{\\str{21}}{\\str{28}}}{\\frac{\\str{12}}{\\str{9}}}',
                controls: {
                    "checkAnswer": true,
                    "help": true
                }
            }, {
                problem: '\\str{Reduce the fraction to its lowest terms.}',
                answer: '\\prev{feedbackData.getPrevious()}{\\reducefrac{\\frac{\\str{6804}}{\\str{3528}}}',
                controls: {
                    "checkAnswer": true,
                    "help": true
                }
            }]
        }]
    }, {
        title: 'Dividing Fractions',
        children: [{
            title: 'Main Answer',
            children: [{
                problem: '\\row{\\html{Solve &nbsp;}}{\\frac{\\str{5}}{\\str{10}}}{\\sign{&divide;}}{\\frac{\\str{27}}{\\str{32}}}{\\sign{&divide;}}{\\frac{\\str{8}}{\\str{10}}}',
                answer: '\\frac{\\input{20}}{\\input{27}}',
                controls: {
                    "checkAnswer": true,
                    "help": false,
                    "workbook": true
                }
            }]
        }, {
            title: 'Workbook',
            children: [{
                problem: '\\rowgrp{\\row{\\frac{\\str{5}}{\\str{10}}}{\\sign{&divide;}}{\\frac{\\str{27}}{\\str{32}}}{\\sign{&divide;}}{\\frac{\\str{8}}{\\str{10}}}}{\\row{\\str{Rewrite the problem as the product of the fractions.}}}',
                answer: '\\grp{\\frac{\\input{5}}{\\input{10}}}{\\sign{&times;}}{\\frac{\\input{32}}{\\input{27}}}{\\sign{&times;}}{\\frac{\\input{10}}{\\input{8}}}',
                controls: {
                    "checkAnswer": true,
                    "help": true
                }
            }, {
                problem: '\\str{Multiply the fractions together.}',
                answer: '\\multiplyfracs{\\frac{\\str{5}}{\\str{10}}}{\\frac{\\str{32}}{\\str{27}}}{\\frac{\\str{10}}{\\str{8}}}',
                controls: {
                    "checkAnswer": true,
                    "help": true
                }
            }, {
                problem: '\\str{Reduce the fraction to its lowest terms.}',
                answer: '\\prev{feedbackData.getPrevious()}{\\reducefrac{\\frac{\\str{1600}}{\\str{2160}}}',
                controls: {
                    "checkAnswer": true,
                    "help": true
                }
            }]
        }]
    }]
});
