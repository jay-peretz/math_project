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
						answer: '\\reducefrac{mixed{\\str{4}}{\\frac{\\fracstr{$numanswer1}}{\\fracstr{$denanswer1}}}}',
						controls: {
							"checkAnswer": true,
							"help": false
						}
					},{
						problem: '\\str{The mixed number difference in lowest terms is:}',
						answer: '\\css{\\rowgrp{grp{\\sign{\xA0 \xA0}}{\\mixed{\\str{$whole1}}{\\frac{\\str{$num1}}{\\str{$den1}}}}}{grp{\\sign{-}}{\\mixed{\\str{$whole2}}{\\frac{\\str{$num2}}{\\str{$den2}}}}}{grp{\\sign{\xA0 \xA0}}{\\mixed{\\input{$wholeanswer}}{\\frac{\\str{$numanswer2}}{\\str{$denanswer2}}}}}}{centerTableText3}',
						controls: {
							"checkAnswer": true,
							"help": false,
							"workbook": true
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
						answer: '\\css{\\rowgrp{grp{\\sign{\xA0 \xA0}}{\\frac{\\str{$num1}}{\\str{$den1}}}}{grp{\\sign{\xA0 \xA0}}{\\frac{\\str{$num2}}{\\str{$den2}}}}{grp{\\sign{-}}{\\frac{\\str{$num3}}{\\str{$den3}}}}{grp{\\sign{\xA0 \xA0}}{\\frac{\\input{$numanswer2}}{\\input{$denanswer2}}}}}{centerTableText3}',
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
						problem: '\\str{Subtract the fractions:}',
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
                title: 'Subtracting Mixed Numbers',
				children: [{
					title: 'Main Answer',
					children: [{
						problem: '\\str{\xA0}',
						answer: '\\css{\\rowgrp{grp{\\sign{\xA0 \xA0}}{\\frac{\\str{$num1}}{\\str{$den1}}}}{grp{\\sign{\xA0 \xA0}}{\\frac{\\str{$num2}}{\\str{$den2}}}}{grp{\\sign{-}}{\\frac{\\str{$num3}}{\\str{$den3}}}}{grp{\\sign{\xA0 \xA0}}{\\frac{\\input{$numanswer}}{\\input{$denanswer}}}}}{centerTableText3}',
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
						problem: '\\str{Subtract the fractions:}',
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
            { whole1: 2, num1: 4, den1: 5, whole2: 1, num2: 3, den2: 4, wholeanswer: 1, numanswer: 1, denanswer: 20, numnew1: 16, numnew2: 15, template: 'main' },
			{ whole1: 3, num1: 7, den1: 6, whole2: 2, num2: 8, den2: 9, wholeanswer: 1, numanswer: 5, denanswer: 18, numnew1: 21, numnew2: 16, template: 'main' },
			{ whole1: 5, num1: 4, den1: 3, whole2: 3, num2: 3, den2: 5, wholeanswer: 2, numanswer: 11, denanswer: 15, numnew1: 20, numnew2: 9, template: 'main' },
			{ whole1: 6, num1: 9, den1: 10, whole2: 2, num2: 5, den2: 6, wholeanswer: 4, numanswer1: 2, denanswer1: 30, numnew1: 27, numnew2: 25, numanswer2: 1, denanswer2: 15, template: 'second' },
			{ whole1: 6, num1: 3, den1: 8, whole2: 2, num2: 1, den2: 5, wholeanswer: 4, numanswer: 7, denanswer: 40, numnew1: 15, numnew2: 8, template: 'main' },
			{ whole1: 6, num1: 7, den1: 12, whole2: 2, num2: 1, den2: 6, wholeanswer: 4, numanswer: 5, denanswer: 12, numnew1: 7, numnew2: 2, template: 'main' },
			{ whole1: 6, num1: 8, den1: 9, whole2: 2, num2: 5, den2: 8, wholeanswer: 4, numanswer: 19, denanswer: 72, numnew1: 64, numnew2: 45, template: 'main' },
			{ whole1: 6, num1: 3, den1: 8, whole2: 2, num2: 1, den2: 5, wholeanswer: 4, numanswer: 7, denanswer: 40, numnew1: 15, numnew2: 8, template: 'main' },
			{ whole1: 6, num1: 7, den1: 12, whole2: 2, num2: 1, den2: 6, wholeanswer: 4, numanswer: 5, denanswer: 12, numnew1: 7, numnew2: 2, template: 'main' },
			{ whole1: 6, num1: 8, den1: 9, whole2: 2, num2: 5, den2: 8, wholeanswer: 4, numanswer: 19, denanswer: 72, numnew1: 64, numnew2: 45, template: 'main' }
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