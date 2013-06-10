/*global angular */

angular.module('mathSkills').service('data10_4', function () {
    var ret = {
			title: '10.4 Subtracting Mixed Numbers',
			path: '10.4-subtracting-mixed-numbers',
            children: []
        },
        template = {
            main: {
                title: 'Subtracting Mixed Numbers',
				children: [{
					title: 'Main Answer',
					children: [{
						problem: '\\str{\xA0}',
						answer: '\\css{\\rowgrp{grp{\\sign{\xA0 \xA0}}{\\mixed{\\str{$whole1}}{\\frac{\\str{$num1}}{\\str{$den1}}}}}{grp{\\sign{-}}{\\mixed{\\str{$whole2}}{\\frac{\\str{$num2}}{\\str{$den2}}}}}{grp{\\sign{\xA0 \xA0}}{\\mixed{\\input{$wholeanswer}}{\\frac{\\input{$numanswer}}{\\input{$denanswer}}}}}}{centerTableText3}',
						controls: {
							"checkAnswer": true,
							"help": false,
							"workbook": true
						}
					}]
				}, {
					title: 'Workbook',
					children: [{
						problem: '\\rowgrp{\\row{\\str{Find the lowest common denominator (LCD) of the fractions:}}}',
						answer: '\\css{\\rowgrp{grp{\\mixed{\\str{$whole1}}{\\frac{\\str{$num1}}{\\str{$den1}}}}}{grp{\\mixed{\\str{$whole2}}{\\frac{\\str{$num2}}{\\str{$den2}}}}}{\\grp{\\str{\xA0}}{\\input{$denanswer}}}}{centerTableText6}',
						controls: {
							"checkAnswer": true,
							"help": false
						},
					}, {
						problem: '\\str{Use the LCD to convert the fractions: }',
						answer: '\\rowgrp{\\grp{\\sign{\xA0 \xA0 \xA0 }}{\\mixed{\\str{$whole1}}{\\frac{\\str{$num1}}{\\str{$den1}}}}{\\sign{\xA0 \xA0 = \xA0 \xA0}}{\\mixed{\\str{$whole1}}{\\frac{\\input{$numnew1}}{\\str{$denanswer}}}}}{\\grp{\\str{\xA0}}}{\\grp{\\sign{\xA0 \xA0 + }}{\\mixed{\\str{$whole2}}{\\frac{\\str{$num2}}{\\str{$den2}}}}{\\sign{\xA0 \xA0 = \xA0 \xA0}}{\\mixed{\\str{$whole2}}{\\frac{\\input{$numnew2}}{\\str{$denanswer}}}}}',
						controls: {
							"checkAnswer": true,
							"help": false
						}
					}, {
						problem: '\\str{Subtract the fractions:}',
						answer: '\\css{\\rowgrp{\\grp{\\sign{\xA0 \xA0 \xA0 \xA0}}{\\mixed{\\str{$whole1}}{\\frac{\\str{$numnew1}}{\\str{$denanswer}}}}}{\\grp{\\sign{\xA0 \xA0 - }}{\\mixed{\\str{$whole2}}{\\frac{\\str{$numnew2}}{\\str{$denanswer}}}}}{\\grp{\\sign{\xA0 \xA0 \xA0}}{\\mixed{\\input{$wholeanswer}}{\\frac{\\input{$numanswer}}{\\input{$denanswer}}}}}}{centerTableText3}',
						controls: {
							"checkAnswer": true,
							"help": false
						}
					}]
				}]
            },
			second: {
                title: 'Subtracting Mixed Numbers',
				children: [{
					title: 'Main Answer',
					children: [{
						problem: '\\str{\xA0}',
						answer: '\\css{\\rowgrp{grp{\\sign{\xA0 \xA0}}{\\mixed{\\str{$whole1}}{\\frac{\\str{$num1}}{\\str{$den1}}}}}{grp{\\sign{-}}{\\mixed{\\str{$whole2}}{\\frac{\\str{$num2}}{\\str{$den2}}}}}{grp{\\sign{\xA0 \xA0}}{\\mixed{\\input{$wholeanswer}}{\\frac{\\input{$numanswer2}}{\\input{$denanswer2}}}}}}{centerTableText3}',
						controls: {
							"checkAnswer": true,
							"help": false,
							"workbook": true
						}
					}]
				}, {
					title: 'Workbook',
					children: [{
						problem: '\\rowgrp{\\row{\\str{Find the lowest common denominator (LCD) of the fractions:}}}',
						answer: '\\css{\\rowgrp{grp{\\mixed{\\str{$whole1}}{\\frac{\\str{$num1}}{\\str{$den1}}}}}{grp{\\mixed{\\str{$whole2}}{\\frac{\\str{$num2}}{\\str{$den2}}}}}{\\grp{\\str{\xA0}}{\\input{$denanswer1}}}}{centerTableText6}',
						controls: {
							"checkAnswer": true,
							"help": false
						},
					}, {
						problem: '\\str{Use the LCD to convert the fractions: }',
						answer: '\\rowgrp{\\grp{\\sign{\xA0 \xA0 \xA0 }}{\\mixed{\\str{$whole1}}{\\frac{\\str{$num1}}{\\str{$den1}}}}{\\sign{\xA0 \xA0 = \xA0 \xA0}}{\\mixed{\\str{$whole1}}{\\frac{\\input{$numnew1}}{\\str{$denanswer1}}}}}{\\grp{\\str{\xA0}}}{\\grp{\\sign{\xA0 \xA0 + }}{\\mixed{\\str{$whole2}}{\\frac{\\str{$num2}}{\\str{$den2}}}}{\\sign{\xA0 \xA0 = \xA0 \xA0}}{\\mixed{\\str{$whole2}}{\\frac{\\input{$numnew2}}{\\str{$denanswer1}}}}}',
						controls: {
							"checkAnswer": true,
							"help": false
						}
					}, {
						problem: '\\str{Subtract the fractions:}',
						answer: '\\css{\\rowgrp{\\grp{\\sign{\xA0 \xA0 \xA0 \xA0}}{\\mixed{\\str{$whole1}}{\\frac{\\str{$numnew1}}{\\str{$denanswer1}}}}}{\\grp{\\sign{\xA0 \xA0 - }}{\\mixed{\\str{$whole2}}{\\frac{\\str{$numnew2}}{\\str{$denanswer1}}}}}{\\grp{\\sign{\xA0 \xA0 \xA0}}{\\mixed{\\input{$wholeanswer}}{\\frac{\\input{$numanswer1}}{\\input{$denanswer1}}}}}}{centerTableText3}',
						controls: {
							"checkAnswer": true,
							"help": false
						}
					}, {
						problem: '\\row{\\str{Reduce \xA0}}{\\mixed{\\str{$wholeanswer}}{\\frac{\\fracstr{$numanswer1}}{\\fracstr{$denanswer1}}}}{\\str{\xA0 to its lowest terms }}',
						answer: '\\reducefrac{mixed{\\str{$wholeanswer}}{\\frac{\\fracstr{$numanswer1}}{\\fracstr{$denanswer1}}}}',
						controls: {
							"checkAnswer": true,
							"help": false
						}
					}]
				}]
			},
			third: {
                title: 'Subtracting Mixed Numbers',
				children: [{
					title: 'Main Answer',
					children: [{
						problem: '\\str{\xA0}',
						answer: '\\css{\\rowgrp{grp{\\sign{\xA0 \xA0}}{\\mixed{\\str{$whole1}}{\\frac{\\str{$num1}}{\\str{$den1}}}}}{grp{\\sign{-}}{\\mixed{\\str{$whole2}}{\\frac{\\str{$num2}}{\\str{$den2}}}}}{grp{\\sign{\xA0 \xA0}}{\\mixed{\\input{$wholeanswer}}{\\frac{\\input{$numanswer}}{\\input{$denanswer}}}}}}{centerTableText3}',
						controls: {
							"checkAnswer": true,
							"help": false,
							"workbook": true
						}
					}]
				}, {
					title: 'Workbook',
					children: [{
						problem: '\\rowgrp{\\row{\\str{Find the lowest common denominator (LCD) of the fractions:}}}',
						answer: '\\css{\\rowgrp{grp{\\mixed{\\str{$whole1}}{\\frac{\\str{$num1}}{\\str{$den1}}}}}{grp{\\mixed{\\str{$whole2}}{\\frac{\\str{$num2}}{\\str{$den2}}}}}{\\grp{\\str{\xA0}}{\\input{$dennew1}}}}{centerTableText6}',
						controls: {
							"checkAnswer": true,
							"help": false
						},
					}, {
						problem: '\\str{Use the LCD to convert the fractions: }',
						answer: '\\rowgrp{\\grp{\\mixed{\\str{$whole1}}{\\frac{\\str{$num1}}{\\str{$den1}}}}{\\sign{\xA0 \xA0 = \xA0 \xA0}}{\\mixed{\\str{$whole1}}{\\frac{\\input{$numnew1}}{\\str{$dennew1}}}}}{\\grp{\\str{\xA0}}}{\\grp{\\mixed{\\str{$whole2}}{\\frac{\\str{$num2}}{\\str{$den2}}}}{\\sign{\xA0 \xA0 = \xA0 \xA0}}{\\mixed{\\str{$whole2}}{\\frac{\\input{$numnew2}}{\\str{$dennew1}}}}}',
						controls: {
							"checkAnswer": true,
							"help": false
						}
					}, {
						problem: '\\str{Do you need to borrow one?}',
						answer: '\\css{\\rowgrp{\\grp{\\sign{\xA0 \xA0 \xA0 \xA0}}{\\mixed{\\str{$whole1}}{\\frac{\\str{$numnew1}}{\\str{$dennew1}}}}}{\\grp{\\sign{\xA0 \xA0 - }}{\\mixed{\\str{$whole2}}{\\frac{\\str{$numnew2}}{\\str{$dennew1}}}}}{\\grp{\\sign{\xA0 \xA0 \xA0}}{\\butgrp{\\row{\\but{YES}{T}}{\\but{NO}{F}}}}}}{centerTableText3}',
						controls: {
							"checkAnswer": true,
							"help": false
						}
					}, {
						problem: '\\str{Rewrite the fractional part of the minuend, borrowing one from the whole number: }',
						answer: '\\rowgrp{\\grp{\\mixed{\\str{$whole1}}{\\frac{\\str{$numnew1}}{\\str{$dennew1}}}}{\\sign{\xA0 \xA0 = \xA0 \xA0}}{\\mixed{\\str{$wholeReduced}}{\\frac{\\input{$numnew3}}{\\str{$dennew1}}}}}',
						controls: {
							"checkAnswer": true,
							"help": false
						}
					}, {
						problem: '\\str{Subtract the fractions:}',
						answer: '\\css{\\rowgrp{\\grp{\\sign{\xA0 \xA0 \xA0 \xA0}}{\\mixed{\\str{$wholeReduced}}{\\frac{\\str{$numnew3}}{\\str{$dennew1}}}}}{\\grp{\\sign{\xA0 \xA0 - }}{\\mixed{\\str{$whole2}}{\\frac{\\str{$numnew2}}{\\str{$dennew1}}}}}{\\grp{\\sign{\xA0 \xA0 \xA0}}{\\mixed{\\input{$wholeanswer}}{\\frac{\\input{$numanswer}}{\\input{$dennew1}}}}}}{centerTableText3}',
						controls: {
							"checkAnswer": true,
							"help": false
						}
					}]
				}]
            },
			fourth: {
                title: 'Subtracting Mixed Numbers',
				children: [{
					title: 'Main Answer',
					children: [{
						problem: '\\str{\xA0}',
						answer: '\\css{\\rowgrp{grp{\\sign{\xA0 \xA0}}{\\mixed{\\str{$whole1}}{\\frac{\\str{$num1}}{\\str{$den1}}}}}{grp{\\sign{-}}{\\mixed{\\str{$whole2}}{\\frac{\\str{$num2}}{\\str{$den2}}}}}{grp{\\sign{\xA0 \xA0}}{\\mixed{\\input{$wholeanswer}}{\\frac{\\input{$numanswer}}{\\input{$denanswer}}}}}}{centerTableText3}',
						controls: {
							"checkAnswer": true,
							"help": false,
							"workbook": true
						}
					}]
				}, {
					title: 'Workbook',
					children: [{
						problem: '\\rowgrp{\\row{\\str{Find the lowest common denominator (LCD) of the fractions:}}}',
						answer: '\\css{\\rowgrp{grp{\\mixed{\\str{$whole1}}{\\frac{\\str{$num1}}{\\str{$den1}}}}}{grp{\\mixed{\\str{$whole2}}{\\frac{\\str{$num2}}{\\str{$den2}}}}}{\\grp{\\str{\xA0}}{\\input{$dennew1}}}}{centerTableText6}',
						controls: {
							"checkAnswer": true,
							"help": false
						},
					}, {
						problem: '\\str{Use the LCD to convert the fractions: }',
						answer: '\\rowgrp{\\grp{\\mixed{\\str{$whole1}}{\\frac{\\str{$num1}}{\\str{$den1}}}}{\\sign{\xA0 \xA0 = \xA0 \xA0}}{\\mixed{\\str{$whole1}}{\\frac{\\input{$numnew1}}{\\str{$dennew1}}}}}{\\grp{\\str{\xA0}}}{\\grp{\\mixed{\\str{$whole2}}{\\frac{\\str{$num2}}{\\str{$den2}}}}{\\sign{\xA0 \xA0 = \xA0 \xA0}}{\\mixed{\\str{$whole2}}{\\frac{\\input{$numnew2}}{\\str{$dennew1}}}}}',
						controls: {
							"checkAnswer": true,
							"help": false
						}
					}, {
						problem: '\\str{Do you need to borrow one?}',
						answer: '\\css{\\rowgrp{\\grp{\\sign{\xA0 \xA0 \xA0 \xA0}}{\\mixed{\\str{$whole1}}{\\frac{\\str{$numnew1}}{\\str{$dennew1}}}}}{\\grp{\\sign{\xA0 \xA0 - }}{\\mixed{\\str{$whole2}}{\\frac{\\str{$numnew2}}{\\str{$dennew1}}}}}{\\grp{\\sign{\xA0 \xA0 \xA0}}{\\butgrp{\\row{\\but{YES}{T}}{\\but{NO}{F}}}}}}{centerTableText3}',
						controls: {
							"checkAnswer": true,
							"help": false
						}
					}, {
						problem: '\\str{Rewrite the fractional part of the minuend, borrowing one from the whole number: }',
						answer: '\\rowgrp{\\grp{\\mixed{\\str{$whole1}}{\\frac{\\str{$numnew1}}{\\str{$dennew1}}}}{\\sign{\xA0 \xA0 = \xA0 \xA0}}{\\mixed{\\str{$wholeReduced}}{\\frac{\\input{$numnew3}}{\\str{$dennew1}}}}}',
						controls: {
							"checkAnswer": true,
							"help": false
						}
					}, {
						problem: '\\str{Subtract the fractions:}',
						answer: '\\css{\\rowgrp{\\grp{\\sign{\xA0 \xA0 \xA0 \xA0}}{\\mixed{\\str{$wholeReduced}}{\\frac{\\str{$numnew3}}{\\str{$dennew1}}}}}{\\grp{\\sign{\xA0 \xA0 - }}{\\mixed{\\str{$whole2}}{\\frac{\\str{$numnew2}}{\\str{$dennew1}}}}}{\\grp{\\sign{\xA0 \xA0 \xA0}}{\\mixed{\\input{$wholeanswer}}{\\frac{\\input{$numnew4}}{\\input{$dennew1}}}}}}{centerTableText3}',
						controls: {
							"checkAnswer": true,
							"help": false
						}
					}, {
						problem: '\\row{\\str{Reduce \xA0}}{\\mixed{\\str{$wholeanswer}}{\\frac{\\fracstr{$numnew4}}{\\fracstr{$dennew1}}}}{\\str{\xA0 to its lowest terms }}',
						answer: '\\reducefrac{mixed{\\str{$wholeanswer}}{\\frac{\\fracstr{$numnew4}}{\\fracstr{$dennew1}}}}',
						controls: {
							"checkAnswer": true,
							"help": false
						}
					}]
				}]
            }
        },
        data = [
            { whole1: 2, num1: 4, den1: 5, whole2: 1, num2: 3, den2: 4, wholeanswer: 1, numanswer: 1, denanswer: 20, numnew1: 16, numnew2: 15, template: 'main' },
			{ whole1: 3, num1: 7, den1: 6, whole2: 2, num2: 8, den2: 9, wholeanswer: 1, numanswer: 5, denanswer: 18, numnew1: 21, numnew2: 16, template: 'main' },
			{ whole1: 5, num1: 4, den1: 3, whole2: 3, num2: 3, den2: 5, wholeanswer: 2, numanswer: 11, denanswer: 15, numnew1: 20, numnew2: 9, template: 'main' },
			{ whole1: 6, num1: 9, den1: 10, whole2: 2, num2: 5, den2: 6, wholeanswer: 4, numanswer1: 2, denanswer1: 30, numnew1: 27, numnew2: 25, numanswer2: 1, denanswer2: 15, template: 'second' },
			{ whole1: 5, num1: 3, den1: 8, whole2: 2, num2: 3, den2: 5, wholeanswer: 2, numanswer: 31, denanswer: 40, numnew1: 15,  dennew1: 40, numnew2: 24, wholeReduced: 4, numnew3: 55, template: 'third' },
			{ whole1: 3, num1: 5, den1: 12, whole2: 1, num2: 3, den2: 4, wholeanswer: 1, numanswer: 2, denanswer: 3, numnew1: 5,   dennew1: 12, numnew2: 9, wholeReduced: 2, numnew3: 17, numnew4: 8, template: 'fourth' },
			{ whole1: 6, num1: 7, den1: 9, whole2: 5, num2: 2, den2: 3, wholeanswer: 1, numanswer: 1, denanswer: 9, numnew1: 7, numnew2: 6, template: 'main' },
			{ whole1: 4, num1: 1, den1: 6, whole2: 1, num2: 3, den2: 10, wholeanswer: 2, numanswer: 13, denanswer: 15, numnew1: 5,   dennew1: 30, numnew2: 9, wholeReduced: 3, numnew3: 35, numnew4: 26, template: 'fourth' },
			{ whole1: 5, num1: 9, den1: 10, whole2: 2, num2: 2, den2: 5, wholeanswer: 3, numanswer1: 5, denanswer1: 10, numnew1: 9, numnew2: 4, numanswer2: 1, denanswer2: 2, template: 'second' },
			{ whole1: 7, num1: 5, den1: 8, whole2: 5, num2: 4, den2: 5, wholeanswer: 1, numanswer: 33, denanswer: 40, numnew1: 25,  dennew1: 40, numnew2: 32, wholeReduced: 6, numnew3: 65, template: 'third' },
        ],
        interpolate = function (obj, data) {
            var string = JSON.stringify(obj);
            for (var symbol in data) {
                if (data.hasOwnProperty(symbol)) {
                    string = string.replace(new RegExp('\\$' + symbol, 'g'), data[symbol]);
                }
            }
            return JSON.parse(string);
        };

    ret.children = data.map(function (problem) {
        return interpolate(template[problem.template], problem);
    });

    return ret;
});