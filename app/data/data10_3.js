/*global angular */

angular.module('mathSkills').service('data10_3', function () {
    var ret = {
			title: '10.3 Adding Mixed Numbers',
			path: '10.3-adding-mixed-numbers',
            children: []
        },
        template = {
            main: {
                title: 'Adding Mixed Numbers',
				children: [{
					title: 'Main Answer',
					children: [{
						problem: '\\str{\xA0}',
						answer: '\\css{\\rowgrp{grp{\\sign{\xA0 \xA0}}{\\frac{\\str{$num1}}{\\str{$den1}}}}{grp{\\sign{+}}{\\frac{\\str{$num2}}{\\str{$den2}}}}{grp{\\sign{\xA0 \xA0}}{\\frac{\\input{$numanswer}}{\\input{$denanswer}}}}}{centerTableText3}',
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
						answer: '\\css{\\rowgrp{\\grp{\\frac{\\str{$num1}}{\\str{$den1}}}{\\str{\xA0 and \xA0}}{\\frac{\\str{$num2}}{\\str{$den2}}}}{\\grp{\\str{\xA0}}{\\input{$denanswer}}{\\str{\xA0}}}}{centerTableText6}',
						controls: {
							"checkAnswer": true,
							"help": false
						},
					}, {
						problem: '\\str{Use the LCD to convert the fractions: }',
						answer: '\\rowgrp{\\grp{\\sign{\xA0 \xA0 \xA0 }}{\\frac{\\str{$num1}}{\\str{$den1}}}{\\sign{\xA0 \xA0 = \xA0 \xA0}}{\\frac{\\input{$numnew1}}{\\str{$denanswer}}}}{\\grp{\\str{\xA0}}}{\\grp{\\sign{\xA0 \xA0 + }}{\\frac{\\str{$num2}}{\\str{$den2}}}{\\sign{\xA0 \xA0 = \xA0 \xA0}}{\\frac{\\input{$numnew2}}{\\str{$denanswer}}}}',
						controls: {
							"checkAnswer": true,
							"help": false
						}
					}, {
						problem: '\\str{Add the fractions:}',
						answer: '\\css{\\rowgrp{\\grp{\\sign{\xA0 \xA0 \xA0 \xA0}}{\\frac{\\str{$numnew1}}{\\str{$denanswer}}}}{\\grp{\\sign{\xA0 \xA0 + }}{\\frac{\\str{$numnew2}}{\\str{$denanswer}}}}{\\grp{\\sign{\xA0 \xA0 \xA0}}{\\frac{\\input{$numanswer}}{\\input{$denanswer}}}}}{centerTableText3}',
						controls: {
							"checkAnswer": true,
							"help": false
						}
					}]
				}]
            },
			second: {
                title: 'Adding Mixed Numbers',
				children: [{
					title: 'Main Answer',
					children: [{
						problem: '\\str{\xA0}',
						answer: '\\css{\\rowgrp{grp{\\sign{\xA0 \xA0}}{\\frac{\\str{$num1}}{\\str{$den1}}}}{grp{\\sign{+}}{\\frac{\\str{$num2}}{\\str{$den2}}}}{grp{\\sign{\xA0 \xA0}}{\\frac{\\input{$numanswer2}}{\\input{$denanswer2}}}}}{centerTableText3}',
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
						answer: '\\css{\\rowgrp{\\grp{\\frac{\\str{$num1}}{\\str{$den1}}}{\\str{\xA0 and \xA0}}{\\frac{\\str{$num2}}{\\str{$den2}}}}{\\grp{\\str{\xA0}}{\\input{$denanswer1}}{\\str{\xA0}}}}{centerTableText6}',
						controls: {
							"checkAnswer": true,
							"help": false
						},
					}, {
						problem: '\\str{Use the LCD to convert the fractions: }',
						answer: '\\rowgrp{\\grp{\\sign{\xA0 \xA0 \xA0 }}{\\frac{\\str{$num1}}{\\str{$den1}}}{\\sign{\xA0 \xA0 = \xA0 \xA0}}{\\frac{\\input{$numnew1}}{\\str{$denanswer1}}}}{\\grp{\\str{\xA0}}}{\\grp{\\sign{\xA0 \xA0 + }}{\\frac{\\str{$num2}}{\\str{$den2}}}{\\sign{\xA0 \xA0 = \xA0 \xA0}}{\\frac{\\input{$numnew2}}{\\str{$denanswer1}}}}',
						controls: {
							"checkAnswer": true,
							"help": false
						}
					}, {
						problem: '\\str{Add the fractions:}',
						answer: '\\css{\\rowgrp{\\grp{\\sign{\xA0 \xA0 \xA0 \xA0}}{\\frac{\\str{$numnew1}}{\\str{$denanswer1}}}}{\\grp{\\sign{\xA0 \xA0 + }}{\\frac{\\str{$numnew2}}{\\str{$denanswer1}}}}{\\grp{\\sign{\xA0 \xA0 \xA0}}{\\frac{\\input{$numanswer1}}{\\input{$denanswer1}}}}}{centerTableText3}',
						controls: {
							"checkAnswer": true,
							"help": false
						}
					}, {
						problem: '\\row{\\str{Reduce \xA0}}{\\frac{\\fracstr{$numanswer1}}{\\fracstr{$denanswer1}}}{\\str{\xA0 to its lowest terms }}',
						answer: '\\reducefrac{\\frac{\\fracstr{$numanswer1}}{\\fracstr{$denanswer1}}}',
						controls: {
							"checkAnswer": true,
							"help": false
						}
					}]
				}]
			},
			third: {
                title: 'Adding Mixed Numbers',
				children: [{
					title: 'Main Answer',
					children: [{
						problem: '\\str{\xA0}',
						answer: '\\css{\\rowgrp{grp{\\sign{\xA0 \xA0}}{\\frac{\\str{$num1}}{\\str{$den1}}}}{grp{\\sign{\xA0 \xA0}}{\\frac{\\str{$num2}}{\\str{$den2}}}}{grp{\\sign{+}}{\\frac{\\str{$num3}}{\\str{$den3}}}}{grp{\\sign{\xA0 \xA0}}{\\frac{\\input{$numanswer2}}{\\input{$denanswer2}}}}}{centerTableText3}',
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
						answer: '\\css{\\rowgrp{\\grp{\\frac{\\str{$num1}}{\\str{$den1}}}{\\str{\xA0 and \xA0}}{\\frac{\\str{$num2}}{\\str{$den2}}}{\\str{\xA0 and \xA0}}{\\frac{\\str{$num3}}{\\str{$den3}}}}{\\grp{\\str{\xA0}}{\\input{$denanswer1}}{\\str{\xA0}}}}{centerTableText6}',
						controls: {
							"checkAnswer": true,
							"help": false
						},
					}, {
						problem: '\\str{Use the LCD to convert the fractions: }',
						answer: '\\rowgrp{\\grp{\\sign{\xA0 \xA0 \xA0 }}{\\frac{\\str{$num1}}{\\str{$den1}}}{\\sign{\xA0 \xA0 = \xA0 \xA0}}{\\frac{\\input{$numnew1}}{\\str{$denanswer1}}}}{\\grp{\\str{\xA0}}}{\\grp{\\sign{\xA0 \xA0 \xA0 }}{\\frac{\\str{$num2}}{\\str{$den2}}}{\\sign{\xA0 \xA0 = \xA0 \xA0}}{\\frac{\\input{$numnew2}}{\\str{$denanswer1}}}}{\\grp{\\str{\xA0}}}{\\grp{\\sign{\xA0 \xA0 + }}{\\frac{\\str{$num3}}{\\str{$den3}}}{\\sign{\xA0 \xA0 = \xA0 \xA0}}{\\frac{\\input{$numnew3}}{\\str{$denanswer1}}}}',
						controls: {
							"checkAnswer": true,
							"help": false
						}
					}, {
						problem: '\\str{Add the fractions:}',
						answer: '\\css{\\rowgrp{\\grp{\\sign{\xA0 \xA0 \xA0 \xA0}}{\\frac{\\str{$numnew1}}{\\str{$denanswer1}}}}{\\grp{\\sign{\xA0 \xA0 \xA0 \xA0}}{\\frac{\\str{$numnew2}}{\\str{$denanswer1}}}}{\\grp{\\sign{\xA0 \xA0 + }}{\\frac{\\str{$numnew3}}{\\str{$denanswer1}}}}{\\grp{\\sign{\xA0 \xA0 \xA0}}{\\frac{\\input{$numanswer1}}{\\input{$denanswer1}}}}}{centerTableText3}',
						controls: {
							"checkAnswer": true,
							"help": false
						}
					}, {
						problem: '\\row{\\str{Reduce \xA0}}{\\frac{\\fracstr{$numanswer1}}{\\fracstr{$denanswer1}}}{\\str{\xA0 to its lowest terms }}',
						answer: '\\reducefrac{\\frac{\\fracstr{$numanswer1}}{\\fracstr{$denanswer1}}}',
						controls: {
							"checkAnswer": true,
							"help": false
						}
					}]
				}]
            },
			fourth: {
                title: 'Adding Mixed Numbers',
				children: [{
					title: 'Main Answer',
					children: [{
						problem: '\\str{\xA0}',
						answer: '\\css{\\rowgrp{grp{\\sign{\xA0 \xA0}}{\\frac{\\str{$num1}}{\\str{$den1}}}}{grp{\\sign{\xA0 \xA0}}{\\frac{\\str{$num2}}{\\str{$den2}}}}{grp{\\sign{+}}{\\frac{\\str{$num3}}{\\str{$den3}}}}{grp{\\sign{\xA0 \xA0}}{\\frac{\\input{$numanswer}}{\\input{$denanswer}}}}}{centerTableText3}',
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
						answer: '\\css{\\rowgrp{\\grp{\\frac{\\str{$num1}}{\\str{$den1}}}{\\str{\xA0 and \xA0}}{\\frac{\\str{$num2}}{\\str{$den2}}}{\\str{\xA0 and \xA0}}{\\frac{\\str{$num3}}{\\str{$den3}}}}{\\grp{\\str{\xA0}}{\\input{$denanswer}}{\\str{\xA0}}}}{centerTableText6}',
						controls: {
							"checkAnswer": true,
							"help": false
						},
					}, {
						problem: '\\str{Use the LCD to convert the fractions: }',
						answer: '\\rowgrp{\\grp{\\sign{\xA0 \xA0 \xA0 }}{\\frac{\\str{$num1}}{\\str{$den1}}}{\\sign{\xA0 \xA0 = \xA0 \xA0}}{\\frac{\\input{$numnew1}}{\\str{$denanswer}}}}{\\grp{\\str{\xA0}}}{\\grp{\\sign{\xA0 \xA0 \xA0 }}{\\frac{\\str{$num2}}{\\str{$den2}}}{\\sign{\xA0 \xA0 = \xA0 \xA0}}{\\frac{\\input{$numnew2}}{\\str{$denanswer}}}}{\\grp{\\str{\xA0}}}{\\grp{\\sign{\xA0 \xA0 + }}{\\frac{\\str{$num3}}{\\str{$den3}}}{\\sign{\xA0 \xA0 = \xA0 \xA0}}{\\frac{\\input{$numnew3}}{\\str{$denanswer}}}}',
						controls: {
							"checkAnswer": true,
							"help": false
						}
					}, {
						problem: '\\str{Add the fractions:}',
						answer: '\\css{\\rowgrp{\\grp{\\sign{\xA0 \xA0 \xA0 \xA0}}{\\frac{\\str{$numnew1}}{\\str{$denanswer}}}}{\\grp{\\sign{\xA0 \xA0 \xA0 \xA0}}{\\frac{\\str{$numnew2}}{\\str{$denanswer}}}}{\\grp{\\sign{\xA0 \xA0 + }}{\\frac{\\str{$numnew3}}{\\str{$denanswer}}}}{\\grp{\\sign{\xA0 \xA0 \xA0}}{\\frac{\\input{$numanswer}}{\\input{$denanswer}}}}}{centerTableText3}',
						controls: {
							"checkAnswer": true,
							"help": false
						}
					}]
				}]
            }
        },
        data = [
            { num1: 4, den1: 5, num2: 3, den2: 4, numanswer: 31, denanswer: 20, numnew1: 16, numnew2: 15, template: 'main' },
			{ num1: 7, den1: 6, num2: 8, den2: 9, numanswer: 37, denanswer: 18, numnew1: 21, numnew2: 16, template: 'main' },
			{ num1: 2, den1: 3, num2: 3, den2: 5, numanswer: 19, denanswer: 15, numnew1: 10, numnew2: 9, template: 'main' },
			{ num1: 1, den1: 10, num2: 5, den2: 6, numanswer1: 28, denanswer1: 30, numnew1: 3, numnew2: 25, numanswer2: 14, denanswer2: 15, template: 'second' },
			{ num1: 3, den1: 8, num2: 1, den2: 5, numanswer: 23, denanswer: 40, numnew1: 15, numnew2: 8, template: 'main' },
			{ num1: 7, den1: 12, num2: 1, den2: 6, numanswer1: 9, denanswer1: 12, numnew1: 7, numnew2: 2, numanswer2: 3, denanswer2: 4, template: 'second' },
			{ num1: 2, den1: 9, num2: 5, den2: 8, numanswer: 61, denanswer: 72, numnew1: 16, numnew2: 45, template: 'main' },
			{ num1: 1, den1: 12, num2: 3, den2: 4, num3: 5, den3: 6, numanswer1: 20, denanswer1: 12, numnew1: 1, numnew2: 9, numnew3: 10, numanswer2: 5, denanswer2: 3, template: 'third' },
			{ num1: 5, den1: 8, num2: 1, den2: 10, num3: 1, den3: 4, numanswer: 39, denanswer: 40, numnew1: 25, numnew2: 4, numnew3: 10, template: 'fourth' },
			{ num1: 7, den1: 9, num2: 5, den2: 4, num3: 2, den3: 3, numanswer: 97, denanswer: 36, numnew1: 28, numnew2: 45, numnew3: 24, template: 'fourth' }
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