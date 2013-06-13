/*global angular */

angular.module('mathSkills').value('data8_4', {
    title: '8.4 Divide Mixed Numbers',
    path: '8.4-divide-mixed-numbers',
    children: [{
        title: 'Divide Mixed Numbers',
        children: [{
            title: 'Main Answer',
            children: [{
                problem: '\\row{\\html{Solve &nbsp;}}{\\mixed{\\fracstr{1}}{\\frac{\\fracstr{1}}{\\fracstr{3}}}}{\\sign{&nbsp; &divide; &nbsp;}}{\\mixed{\\fracstr{1}}{\\frac{\\fracstr{2}}{\\fracstr{3}}}}',
                answer: '\\frac{\\input{4}}{\\input{5}}',
                controls: {
                    "checkAnswer": true,
                    "help": false,
                    "workbook": true
                }
            }]
        }, {
            title: 'Workbook',
            children: [{
                problem: '\\rowgrp{\\row{\\str{Change the mixed numbers into improper fractions.}}}{\\row{\\str{\xA0}}}{\\row{\\mixed{\\fracstr{1}}{\\frac{\\fracstr{1}}{\\fracstr{3}}}}{\\sign{&nbsp; &divide; &nbsp;}}{\\mixed{\\fracstr{1}}{\\frac{\\fracstr{2}}{\\fracstr{3}}}}',
                answer: '\\grp{\\frac{\\input{4}}{\\input{3}}}{\\sign{&divide;}}{\\frac{\\input{5}}{\\input{3}}}',
                controls: {
                    "checkAnswer": true,
                    "help": true
                }
            }, {
                problem: '\\rowgrp{\\row{\\str{Rewrite the problem as the product of the fractions.}}}{\\row{\\frac{\\str{4}}{\\str{3}}}{\\sign{&divide;}}{\\frac{\\str{5}}{\\str{3}}}}',
                answer: '\\grp{\\frac{\\input{4}}{\\input{3}}}{\\sign{&times;}}{\\frac{\\input{3}}{\\input{5}}}',
                controls: {
                    "checkAnswer": true,
                    "help": true
                }
            }, {
                problem: '\\str{Multiply the fractions together.}',
                answer: '\\multiplyfracs{\\frac{\\str{4}}{\\str{3}}}{\\frac{\\str{3}}{\\str{5}}}',
                controls: {
                    "checkAnswer": true,
                    "help": true
                }
            }, {
                problem: '\\str{Reduce the fraction to its lowest terms.}',
                answer: '\\prev{feedbackData.getPrevious()}{\\reducefrac{\\frac{\\str{4}}{\\str{5}}}',
                controls: {
                    "checkAnswer": true,
                    "help": true
                }
            }]
        }]
    }, {
        title: 'Divide Mixed Numbers',
        children: [{
            title: 'Main Answer',
            children: [{
                problem: '\\row{\\html{Solve &nbsp;}}{\\mixed{\\fracstr{1}}{\\frac{\\fracstr{5}}{\\fracstr{6}}}}{\\sign{&nbsp; &divide; &nbsp;}}{\\mixed{\\fracstr{1}}{\\frac{\\fracstr{1}}{\\fracstr{2}}}}',
                answer: '\\mixed{\\input{1}}{\\frac{\\input{2}}{\\input{9}}}',
                controls: {
                    "checkAnswer": true,
                    "help": false,
                    "workbook": true
                }
            }]
        }, {
            title: 'Workbook',
            children: [{
                problem: '\\rowgrp{\\row{\\str{Change the mixed numbers into improper fractions.}}}{\\row{\\str{\xA0}}}{\\row{\\mixed{\\fracstr{1}}{\\frac{\\fracstr{5}}{\\fracstr{6}}}}{\\sign{&nbsp; &divide; &nbsp;}}{\\mixed{\\fracstr{1}}{\\frac{\\fracstr{1}}{\\fracstr{2}}}}',
                answer: '\\grp{\\frac{\\input{11}}{\\input{6}}}{\\sign{&divide;}}{\\frac{\\input{3}}{\\input{2}}}',
                controls: {
                    "checkAnswer": true,
                    "help": true
                }
            }, {
                problem: '\\rowgrp{\\row{\\str{Rewrite the problem as the product of the fractions.}}}{\\row{\\frac{\\str{11}}{\\str{6}}}{\\sign{&divide;}}{\\frac{\\str{3}}{\\str{2}}}}',
                answer: '\\grp{\\frac{\\input{11}}{\\input{6}}}{\\sign{&times;}}{\\frac{\\input{2}}{\\input{3}}}',
                controls: {
                    "checkAnswer": true,
                    "help": true
                }
            }, {
                problem: '\\str{Multiply the fractions together.}',
                answer: '\\multiplyfracs{\\frac{\\str{11}}{\\str{6}}}{\\frac{\\str{2}}{\\str{3}}}',
                controls: {
                    "checkAnswer": true,
                    "help": true
                }
            }, {
                problem: '\\str{Reduce the fraction to its lowest terms.}',
                answer: '\\prev{feedbackData.getPrevious()}{\\reducefrac{\\frac{\\str{22}}{\\str{18}}}',
                controls: {
                    "checkAnswer": true,
                    "help": true
                }
            }, {
                problem: '\\rowgrp{\\row{\\str{Write the fraction as a mixed number.}}}{\\row{\\str{\xA0}}}{\\row{\\frac{\\str{11}}{\\str{9}}}',
                answer: '\\mixed{\\input{1}}{\\frac{\\input{2}}{\\input{9}}}',
                controls: {
                    "checkAnswer": true,
                    "help": '\\rowgrp{\\row{\\str{Divide the numerator by the denominator, then make the quotient the mixed number whole and the remainder the mixed number numerator. \xA0}}}{\\row{\\str{\xA0}}}{\\row{\\frac{\\fracstr{11}}{\\fracstr{9}}}{\\row{\\str{\xA0 = \xA0}}}{\\row{\\mixed{\\fracstr{1}}{\\frac{\\fracstr{2}}{\\fracstr{9}}}}{\\row{css{\\str{answer:  \xA0}}{label_like margin-left-small}}{css{\\mixed{\\fracstr{1}}{\\frac{\\fracstr{2}}{\\fracstr{9}}}}{label_like}}}}'
                }
            }]
        }]
    }, {
        title: 'Divide Mixed Numbers',
        children: [{
            title: 'Main Answer',
            children: [{
                problem: '\\row{\\html{Solve &nbsp;}}{\\mixed{\\fracstr{1}}{\\frac{\\fracstr{3}}{\\fracstr{8}}}}{\\sign{&nbsp; &divide; &nbsp;}}{\\mixed{\\fracstr{1}}{\\frac{\\fracstr{5}}{\\fracstr{6}}}}',
                answer: '\\frac{\\input{3}}{\\input{4}}',
                controls: {
                    "checkAnswer": true,
                    "help": false,
                    "workbook": true
                }
            }]
        }, {
            title: 'Workbook',
            children: [{
                problem: '\\rowgrp{\\row{\\str{Change the mixed numbers into improper fractions.}}}{\\row{\\str{\xA0}}}{\\row{\\mixed{\\fracstr{1}}{\\frac{\\fracstr{5}}{\\fracstr{6}}}}{\\sign{&nbsp; &divide; &nbsp;}}{\\mixed{\\fracstr{1}}{\\frac{\\fracstr{1}}{\\fracstr{2}}}}',
                answer: '\\grp{\\frac{\\input{11}}{\\input{6}}}{\\sign{&divide;}}{\\frac{\\input{3}}{\\input{2}}}',
                controls: {
                    "checkAnswer": true,
                    "help": true
                }
            }, {
                problem: '\\rowgrp{\\row{\\str{Rewrite the problem as the product of the fractions.}}}{\\row{\\frac{\\str{11}}{\\str{6}}}{\\sign{&divide;}}{\\frac{\\str{3}}{\\str{2}}}}',
                answer: '\\grp{\\frac{\\input{11}}{\\input{6}}}{\\sign{&times;}}{\\frac{\\input{2}}{\\input{3}}}',
                controls: {
                    "checkAnswer": true,
                    "help": true
                }
            }, {
                problem: '\\str{Multiply the fractions together.}',
                answer: '\\multiplyfracs{\\frac{\\str{11}}{\\str{6}}}{\\frac{\\str{2}}{\\str{3}}}',
                controls: {
                    "checkAnswer": true,
                    "help": true
                }
            }, {
                problem: '\\str{Reduce the fraction to its lowest terms.}',
                answer: '\\prev{feedbackData.getPrevious()}{\\reducefrac{\\frac{\\str{22}}{\\str{18}}}',
                controls: {
                    "checkAnswer": true,
                    "help": true
                }
            }, {
                problem: '\\rowgrp{\\row{\\str{Write the fraction as a mixed number.}}}{\\row{\\str{\xA0}}}{\\row{\\frac{\\str{11}}{\\str{9}}}',
                answer: '\\mixed{\\input{1}}{\\frac{\\input{2}}{\\input{9}}}',
                controls: {
                    "checkAnswer": true,
                    "help": '\\rowgrp{\\row{\\str{Divide the numerator by the denominator, then make the quotient the mixed number whole and the remainder the mixed number numerator. \xA0}}}{\\row{\\str{\xA0}}}{\\row{\\frac{\\fracstr{11}}{\\fracstr{9}}}{\\row{\\str{\xA0 = \xA0}}}{\\row{\\mixed{\\fracstr{1}}{\\frac{\\fracstr{2}}{\\fracstr{9}}}}{\\row{css{\\str{answer:  \xA0}}{label_like margin-left-small}}{css{\\mixed{\\fracstr{1}}{\\frac{\\fracstr{2}}{\\fracstr{9}}}}{label_like}}}}'
                }
            }]
        }]
    }, {
        title: 'Divide Mixed Numbers',
        children: [{
            title: 'Main Answer',
            children: [{
                problem: '\\row{\\html{Solve &nbsp;}}{\\mixed{\\fracstr{1}}{\\frac{\\fracstr{2}}{\\fracstr{3}}}}{\\sign{&nbsp; &divide; &nbsp;}}{\\mixed{\\fracstr{1}}{\\frac{\\fracstr{5}}{\\fracstr{6}}}}',
                answer: '\\frac{\\input{10}}{\\input{11}}',
                controls: {
                    "checkAnswer": true,
                    "help": false,
                    "workbook": true
                }
            }]
        }, {
            title: 'Workbook',
            children: [{
                problem: '\\rowgrp{\\row{\\str{Change the mixed numbers into improper fractions.}}}{\\row{\\str{\xA0}}}{\\row{\\mixed{\\fracstr{1}}{\\frac{\\fracstr{2}}{\\fracstr{3}}}}{\\sign{&nbsp; &divide; &nbsp;}}{\\mixed{\\fracstr{1}}{\\frac{\\fracstr{5}}{\\fracstr{6}}}}',
                answer: '\\grp{\\frac{\\input{5}}{\\input{3}}}{\\sign{&divide;}}{\\frac{\\input{11}}{\\input{6}}}',
                controls: {
                    "checkAnswer": true,
                    "help": true
                }
            }, {
                problem: '\\rowgrp{\\row{\\str{Rewrite the problem as the product of the fractions.}}}{\\row{\\frac{\\str{5}}{\\str{3}}}{\\sign{&divide;}}{\\frac{\\str{11}}{\\str{6}}}}',
                answer: '\\grp{\\frac{\\input{5}}{\\input{3}}}{\\sign{&times;}}{\\frac{\\input{6}}{\\input{11}}}',
                controls: {
                    "checkAnswer": true,
                    "help": true
                }
            }, {
                problem: '\\str{Multiply the fractions together.}',
                answer: '\\multiplyfracs{\\frac{\\str{5}}{\\str{3}}}{\\frac{\\str{6}}{\\str{11}}}',
                controls: {
                    "checkAnswer": true,
                    "help": true
                }
            }, {
                problem: '\\str{Reduce the fraction to its lowest terms.}',
                answer: '\\prev{feedbackData.getPrevious()}{\\reducefrac{\\frac{\\str{10}}{\\str{11}}}',
                controls: {
                    "checkAnswer": true,
                    "help": true
                }
            }]
        }]
    }, {
        title: 'Divide Mixed Numbers',
        children: [{
            title: 'Main Answer',
            children: [{
                problem: '\\row{\\html{Solve &nbsp;}}{\\mixed{\\fracstr{2}}{\\frac{\\fracstr{3}}{\\fracstr{8}}}}{\\sign{&nbsp; &divide; &nbsp;}}{\\mixed{\\fracstr{1}}{\\frac{\\fracstr{6}}{\\fracstr{7}}}}',
                answer: '{\\mixed{\\input{1}}{\\frac{\\input{5}}{\\input{28}}}',
                controls: {
                    "checkAnswer": true,
                    "help": false,
                    "workbook": true
                }
            }]
        }, {
            title: 'Workbook',
            children: [{
                problem: '\\rowgrp{\\row{\\str{Change the mixed numbers into improper fractions.}}}{\\row{\\str{\xA0}}}{\\row{\\mixed{\\fracstr{2}}{\\frac{\\fracstr{3}}{\\fracstr{8}}}}{\\sign{&nbsp; &divide; &nbsp;}}{\\mixed{\\fracstr{1}}{\\frac{\\fracstr{6}}{\\fracstr{7}}}}',
                answer: '\\grp{\\frac{\\input{19}}{\\input{8}}}{\\sign{&divide;}}{\\frac{\\input{13}}{\\input{7}}}',
                controls: {
                    "checkAnswer": true,
                    "help": true
                }
            }, {
                problem: '\\rowgrp{\\row{\\str{Rewrite the problem as the product of the fractions.}}}{\\row{\\frac{\\str{19}}{\\str{8}}}{\\sign{&divide;}}{\\frac{\\str{13}}{\\str{7}}}}',
                answer: '\\grp{\\frac{\\input{19}}{\\input{8}}}{\\sign{&times;}}{\\frac{\\input{7}}{\\input{13}}}',
                controls: {
                    "checkAnswer": true,
                    "help": true
                }
            }, {
                problem: '\\str{Multiply the fractions together.}',
                answer: '\\multiplyfracs{\\frac{\\str{19}}{\\str{8}}}{\\frac{\\str{7}}{\\str{13}}}',
                controls: {
                    "checkAnswer": true,
                    "help": true
                }
            }, {
                problem: '\\str{Reduce the fraction to its lowest terms.}',
                answer: '\\prev{feedbackData.getPrevious()}{\\reducefrac{\\frac{\\str{133}}{\\str{104}}}',
                controls: {
                    "checkAnswer": true,
                    "help": true
                }
            }, {
                problem: '\\rowgrp{\\row{\\str{Write the fraction as a mixed number.}}}{\\row{\\str{\xA0}}}{\\row{\\frac{\\str{133}}{\\str{104}}}',
                answer: '\\mixed{\\input{1}}{\\frac{\\input{29}}{\\input{104}}}',
                controls: {
                    "checkAnswer": true,
                    "help": '\\rowgrp{\\row{\\str{Divide the numerator by the denominator, then make the quotient the mixed number whole and the remainder the mixed number numerator. \xA0}}}{\\row{\\str{\xA0}}}{\\row{\\frac{\\fracstr{133}}{\\fracstr{104}}}{\\row{\\str{\xA0 = \xA0}}}{\\row{\\mixed{\\fracstr{1}}{\\frac{\\fracstr{29}}{\\fracstr{104}}}}{\\row{css{\\str{answer:  \xA0}}{label_like margin-left-small}}{css{\\mixed{\\fracstr{1}}{\\frac{\\fracstr{29}}{\\fracstr{104}}}}{label_like}}}}'
                }
            }]
        }]
    }, {
        title: 'Divide Mixed Numbers',
        children: [{
            title: 'Main Answer',
            children: [{
                problem: '\\row{\\html{Solve &nbsp;}}{\\mixed{\\fracstr{1}}{\\frac{\\fracstr{1}}{\\fracstr{2}}}}{\\sign{&nbsp; &divide; &nbsp;}}{\\mixed{\\fracstr{1}}{\\frac{\\fracstr{2}}{\\fracstr{5}}}}',
                answer: '{\\mixed{\\input{1}}{\\frac{\\input{1}}{\\input{14}}}',
                controls: {
                    "checkAnswer": true,
                    "help": false,
                    "workbook": true
                }
            }]
        }, {
            title: 'Workbook',
            children: [{
                problem: '\\rowgrp{\\row{\\str{Change the mixed numbers into improper fractions.}}}{\\row{\\str{\xA0}}}{\\row{\\mixed{\\fracstr{1}}{\\frac{\\fracstr{1}}{\\fracstr{2}}}}{\\sign{&nbsp; &divide; &nbsp;}}{\\mixed{\\fracstr{1}}{\\frac{\\fracstr{2}}{\\fracstr{5}}}}',
                answer: '\\grp{\\frac{\\input{3}}{\\input{2}}}{\\sign{&divide;}}{\\frac{\\input{7}}{\\input{5}}}',
                controls: {
                    "checkAnswer": true,
                    "help": true
                }
            }, {
                problem: '\\rowgrp{\\row{\\str{Rewrite the problem as the product of the fractions.}}}{\\row{\\frac{\\str{3}}{\\str{2}}}{\\sign{&divide;}}{\\frac{\\str{7}}{\\str{5}}}}',
                answer: '\\grp{\\frac{\\input{3}}{\\input{2}}}{\\sign{&times;}}{\\frac{\\input{5}}{\\input{7}}}',
                controls: {
                    "checkAnswer": true,
                    "help": true
                }
            }, {
                problem: '\\str{Multiply the fractions together.}',
                answer: '\\multiplyfracs{\\frac{\\str{3}}{\\str{2}}}{\\frac{\\str{5}}{\\str{7}}}',
                controls: {
                    "checkAnswer": true,
                    "help": true
                }
            }, {
                problem: '\\str{Reduce the fraction to its lowest terms.}',
                answer: '\\prev{feedbackData.getPrevious()}{\\reducefrac{\\frac{\\str{15}}{\\str{14}}}',
                controls: {
                    "checkAnswer": true,
                    "help": true
                }
            }, {
                problem: '\\rowgrp{\\row{\\str{Write the fraction as a mixed number.}}}{\\row{\\str{\xA0}}}{\\row{\\frac{\\str{15}}{\\str{14}}}',
                answer: '\\mixed{\\input{1}}{\\frac{\\input{1}}{\\input{14}}}',
                controls: {
                    "checkAnswer": true,
                    "help": '\\rowgrp{\\row{\\str{Divide the numerator by the denominator, then make the quotient the mixed number whole and the remainder the mixed number numerator. \xA0}}}{\\row{\\str{\xA0}}}{\\row{\\frac{\\fracstr{15}}{\\fracstr{14}}}{\\row{\\str{\xA0 = \xA0}}}{\\row{\\mixed{\\fracstr{1}}{\\frac{\\fracstr{1}}{\\fracstr{14}}}}{\\row{css{\\str{answer:  \xA0}}{label_like margin-left-small}}{css{\\mixed{\\fracstr{1}}{\\frac{\\fracstr{1}}{\\fracstr{14}}}}{label_like}}}}'
                }
            }]
        }]
    }, {
        title: 'Divide Mixed Numbers',
        children: [{
            title: 'Main Answer',
            children: [{
                problem: '\\row{\\html{Solve &nbsp;}}{\\mixed{\\fracstr{1}}{\\frac{\\fracstr{4}}{\\fracstr{9}}}}{\\sign{&nbsp; &divide; &nbsp;}}{\\mixed{\\fracstr{1}}{\\frac{\\fracstr{4}}{\\fracstr{5}}}}',
                answer: '\\frac{\\input{65}}{\\input{81}}',
                controls: {
                    "checkAnswer": true,
                    "help": false,
                    "workbook": true
                }
            }]
        }, {
            title: 'Workbook',
            children: [{
                problem: '\\rowgrp{\\row{\\str{Change the mixed numbers into improper fractions.}}}{\\row{\\str{\xA0}}}{\\row{\\mixed{\\fracstr{1}}{\\frac{\\fracstr{4}}{\\fracstr{9}}}}{\\sign{&nbsp; &divide; &nbsp;}}{\\mixed{\\fracstr{1}}{\\frac{\\fracstr{4}}{\\fracstr{5}}}}',
                answer: '\\grp{\\frac{\\input{13}}{\\input{9}}}{\\sign{&divide;}}{\\frac{\\input{9}}{\\input{5}}}',
                controls: {
                    "checkAnswer": true,
                    "help": true
                }
            }, {
                problem: '\\rowgrp{\\row{\\str{Rewrite the problem as the product of the fractions.}}}{\\row{\\frac{\\str{13}}{\\str{9}}}{\\sign{&divide;}}{\\frac{\\str{9}}{\\str{5}}}}',
                answer: '\\grp{\\frac{\\input{13}}{\\input{9}}}{\\sign{&times;}}{\\frac{\\input{5}}{\\input{9}}}',
                controls: {
                    "checkAnswer": true,
                    "help": true
                }
            }, {
                problem: '\\str{Multiply the fractions together.}',
                answer: '\\multiplyfracs{\\frac{\\str{13}}{\\str{9}}}{\\frac{\\str{5}}{\\str{9}}}',
                controls: {
                    "checkAnswer": true,
                    "help": true
                }
            }, {
                problem: '\\str{Reduce the fraction to its lowest terms.}',
                answer: '\\prev{feedbackData.getPrevious()}{\\reducefrac{\\frac{\\str{65}}{\\str{81}}}',
                controls: {
                    "checkAnswer": true,
                    "help": true
                }
            }]
        }]
    }, {
        title: 'Divide Mixed Numbers',
        children: [{
            title: 'Main Answer',
            children: [{
                problem: '\\row{\\html{Solve &nbsp;}}{\\mixed{\\fracstr{1}}{\\frac{\\fracstr{1}}{\\fracstr{10}}}}{\\sign{&nbsp; &divide; &nbsp;}}{\\mixed{\\fracstr{2}}{\\frac{\\fracstr{3}}{\\fracstr{4}}}}',
                answer: '\\frac{\\input{2}}{\\input{5}}',
                controls: {
                    "checkAnswer": true,
                    "help": false,
                    "workbook": true
                }
            }]
        }, {
            title: 'Workbook',
            children: [{
                problem: '\\rowgrp{\\row{\\str{Change the mixed numbers into improper fractions.}}}{\\row{\\str{\xA0}}}{\\row{\\mixed{\\fracstr{1}}{\\frac{\\fracstr{1}}{\\fracstr{10}}}}{\\sign{&nbsp; &divide; &nbsp;}}{\\mixed{\\fracstr{2}}{\\frac{\\fracstr{3}}{\\fracstr{4}}}}',
                answer: '\\grp{\\frac{\\input{11}}{\\input{10}}}{\\sign{&divide;}}{\\frac{\\input{11}}{\\input{4}}}',
                controls: {
                    "checkAnswer": true,
                    "help": true
                }
            }, {
                problem: '\\rowgrp{\\row{\\str{Rewrite the problem as the product of the fractions.}}}{\\row{\\frac{\\str{11}}{\\str{10}}}{\\sign{&divide;}}{\\frac{\\str{11}}{\\str{4}}}}',
                answer: '\\grp{\\frac{\\input{11}}{\\input{10}}}{\\sign{&times;}}{\\frac{\\input{4}}{\\input{11}}}',
                controls: {
                    "checkAnswer": true,
                    "help": true
                }
            }, {
                problem: '\\str{Multiply the fractions together.}',
                answer: '\\multiplyfracs{\\frac{\\str{11}}{\\str{10}}}{\\frac{\\str{4}}{\\str{11}}}',
                controls: {
                    "checkAnswer": true,
                    "help": true
                }
            }, {
                problem: '\\str{Reduce the fraction to its lowest terms.}',
                answer: '\\prev{feedbackData.getPrevious()}{\\reducefrac{\\frac{\\str{10}}{\\str{4}}}',
                controls: {
                    "checkAnswer": true,
                    "help": true
                }
            }]
        }]
    }, {
        title: 'Divide Mixed Numbers',
        children: [{
            title: 'Main Answer',
            children: [{
                problem: '\\row{\\html{Solve &nbsp;}}{\\mixed{\\fracstr{3}}{\\frac{\\fracstr{5}}{\\fracstr{12}}}}{\\sign{&nbsp; &divide; &nbsp;}}{\\mixed{\\fracstr{3}}{\\frac{\\fracstr{1}}{\\fracstr{3}}}}',
                answer: '{\\mixed{\\input{1}}{\\frac{\\input{1}}{\\input{40}}}',
                controls: {
                    "checkAnswer": true,
                    "help": false,
                    "workbook": true
                }
            }]
        }, {
            title: 'Workbook',
            children: [{
                problem: '\\rowgrp{\\row{\\str{Change the mixed numbers into improper fractions.}}}{\\row{\\str{\xA0}}}{\\row{\\mixed{\\fracstr{3}}{\\frac{\\fracstr{5}}{\\fracstr{12}}}}{\\sign{&nbsp; &divide; &nbsp;}}{\\mixed{\\fracstr{3}}{\\frac{\\fracstr{1}}{\\fracstr{3}}}}',
                answer: '\\grp{\\frac{\\input{41}}{\\input{12}}}{\\sign{&divide;}}{\\frac{\\input{10}}{\\input{3}}}',
                controls: {
                    "checkAnswer": true,
                    "help": true
                }
            }, {
                problem: '\\rowgrp{\\row{\\str{Rewrite the problem as the product of the fractions.}}}{\\row{\\frac{\\str{41}}{\\str{12}}}{\\sign{&divide;}}{\\frac{\\str{10}}{\\str{3}}}}',
                answer: '\\grp{\\frac{\\input{41}}{\\input{12}}}{\\sign{&times;}}{\\frac{\\input{3}}{\\input{10}}}',
                controls: {
                    "checkAnswer": true,
                    "help": true
                }
            }, {
                problem: '\\str{Multiply the fractions together.}',
                answer: '\\multiplyfracs{\\frac{\\str{41}}{\\str{12}}}{\\frac{\\str{3}}{\\str{10}}}',
                controls: {
                    "checkAnswer": true,
                    "help": true
                }
            }, {
                problem: '\\str{Reduce the fraction to its lowest terms.}',
                answer: '\\prev{feedbackData.getPrevious()}{\\reducefrac{\\frac{\\str{41}}{\\str{40}}}',
                controls: {
                    "checkAnswer": true,
                    "help": true
                }
            }, {
                problem: '\\rowgrp{\\row{\\str{Write the fraction as a mixed number.}}}{\\row{\\str{\xA0}}}{\\row{\\frac{\\str{41}}{\\str{40}}}',
                answer: '\\mixed{\\input{1}}{\\frac{\\input{1}}{\\input{40}}}',
                controls: {
                    "checkAnswer": true,
                    "help": '\\rowgrp{\\row{\\str{Divide the numerator by the denominator, then make the quotient the mixed number whole and the remainder the mixed number numerator. \xA0}}}{\\row{\\str{\xA0}}}{\\row{\\frac{\\fracstr{41}}{\\fracstr{40}}}{\\row{\\str{\xA0 = \xA0}}}{\\row{\\mixed{\\fracstr{1}}{\\frac{\\fracstr{1}}{\\fracstr{40}}}}{\\row{css{\\str{answer:  \xA0}}{label_like margin-left-small}}{css{\\mixed{\\fracstr{1}}{\\frac{\\fracstr{1}}{\\fracstr{40}}}}{label_like}}}}'
                }
            }]
        }]
    }, {
        title: 'Divide Mixed Numbers',
        children: [{
            title: 'Main Answer',
            children: [{
                problem: '\\row{\\html{Solve &nbsp;}}{\\mixed{\\fracstr{7}}{\\frac{\\fracstr{1}}{\\fracstr{4}}}}{\\sign{&nbsp; &divide; &nbsp;}}{\\mixed{\\fracstr{6}}{\\frac{\\fracstr{7}}{\\fracstr{8}}}}',
                answer: '{\\mixed{\\input{1}}{\\frac{\\input{3}}{\\input{55}}}',
                controls: {
                    "checkAnswer": true,
                    "help": false,
                    "workbook": true
                }
            }]
        }, {
            title: 'Workbook',
            children: [{
                problem: '\\rowgrp{\\row{\\str{Change the mixed numbers into improper fractions.}}}{\\row{\\str{\xA0}}}{\\row{\\mixed{\\fracstr{7}}{\\frac{\\fracstr{1}}{\\fracstr{4}}}}{\\sign{&nbsp; &divide; &nbsp;}}{\\mixed{\\fracstr{6}}{\\frac{\\fracstr{7}}{\\fracstr{8}}}}',
                answer: '\\grp{\\frac{\\input{29}}{\\input{4}}}{\\sign{&divide;}}{\\frac{\\input{55}}{\\input{8}}}',
                controls: {
                    "checkAnswer": true,
                    "help": true
                }
            }, {
                problem: '\\rowgrp{\\row{\\str{Rewrite the problem as the product of the fractions.}}}{\\row{\\frac{\\str{29}}{\\str{4}}}{\\sign{&divide;}}{\\frac{\\str{55}}{\\str{8}}}}',
                answer: '\\grp{\\frac{\\input{29}}{\\input{4}}}{\\sign{&times;}}{\\frac{\\input{8}}{\\input{55}}}',
                controls: {
                    "checkAnswer": true,
                    "help": true
                }
            }, {
                problem: '\\str{Multiply the fractions together.}',
                answer: '\\multiplyfracs{\\frac{\\str{29}}{\\str{4}}}{\\frac{\\str{8}}{\\str{55}}}',
                controls: {
                    "checkAnswer": true,
                    "help": true
                }
            }, {
                problem: '\\str{Reduce the fraction to its lowest terms.}',
                answer: '\\prev{feedbackData.getPrevious()}{\\reducefrac{\\frac{\\str{58}}{\\str{55}}}',
                controls: {
                    "checkAnswer": true,
                    "help": true
                }
            }, {
                problem: '\\rowgrp{\\row{\\str{Write the fraction as a mixed number.}}}{\\row{\\str{\xA0}}}{\\row{\\frac{\\str{58}}{\\str{55}}}',
                answer: '\\mixed{\\input{1}}{\\frac{\\input{3}}{\\input{55}}}',
                controls: {
                    "checkAnswer": true,
                    "help": '\\rowgrp{\\row{\\str{Divide the numerator by the denominator, then make the quotient the mixed number whole and the remainder the mixed number numerator. \xA0}}}{\\row{\\str{\xA0}}}{\\row{\\frac{\\fracstr{58}}{\\fracstr{55}}}{\\row{\\str{\xA0 = \xA0}}}{\\row{\\mixed{\\fracstr{1}}{\\frac{\\fracstr{3}}{\\fracstr{55}}}}{\\row{css{\\str{answer:  \xA0}}{label_like margin-left-small}}{css{\\mixed{\\fracstr{1}}{\\frac{\\fracstr{3}}{\\fracstr{55}}}}{label_like}}}}'
                }
            }]
        }]
    }]
});
