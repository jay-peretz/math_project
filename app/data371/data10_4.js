/*global angular */

angular.module('mathSkills').service('data10_4', ['dataUtils', function (dataUtils) {
    var desc = {
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
						answer: '\\css'
						+'{\\rowgrp'
						+'{grp{\\sign{\xA0 \xA0}}{\\mixed{\\str{$whole1}}{\\frac{\\str{$num1}}{\\str{$den1}}}}}'
						+'{html{&nbsp;}}'
						+'{\\css{grp{\\sign{-}}{\\mixed{\\str{$whole2}}{\\frac{\\str{$num2}}{\\str{$den2}}}}}{border-bottom-with-padding}}'
						+'{html{&nbsp;}}'
						+'{grp{\\sign{\xA0 \xA0}}{\\mixed{\\input{$wholeanswer}}{\\frac{\\input{$numanswer}}{\\input{$denanswer}}}}}}'
						+'{centerTableText3}',
						controls: {
							"checkAnswer": true,
							"help": false,
							"workbook": true
						}
					}]
				}, {
					title: 'Workbook',
					children: [{
						problem: '\\rowgrp'
						+'{\\str{Find the lowest common denominator (LCD) of the fractions:}}'
						+'{html{&nbsp;}}'
						+'{grp{\\mixed{\\str{$whole1}}{\\frac{\\str{$num1}}{\\str{$den1}}}}{\\str{\xA0 and \xA0}}{\\mixed{\\str{$whole2}}{\\frac{\\str{$num2}}{\\str{$den2}}}}}',
						answer: '\\input{$denanswer}',
						controls: {
							"checkAnswer": true,
							"help": '\\rowgrp'
							+'{\\str{The LCD of $den1 and $den2 is $denanswer.}}'
							+'{\\html{&nbsp;}}'
							+'{\\css{\\str{\xA0 Answer: \xA0 $denanswer}}{help-answer-text}}'
						},
					}, {
						problem: '\\str{Use the LCD to convert the fractions: }',
						answer: '\\rowgrp'
						+'{\\grp{\\mixed{\\str{$whole1}}{\\frac{\\str{$num1}}{\\str{$den1}}}}{\\sign{\xA0 \xA0 = \xA0 \xA0}}{\\mixed{\\str{$whole1}}{\\frac{\\input{$numnew1}}{\\str{$denanswer}}}}}'
						+'{html{&nbsp;}}'
						+'{\\grp{\\mixed{\\str{$whole2}}{\\frac{\\str{$num2}}{\\str{$den2}}}}{\\sign{\xA0 \xA0 = \xA0 \xA0}}{\\mixed{\\str{$whole2}}{\\frac{\\input{$numnew2}}{\\str{$denanswer}}}}}',
						controls: {
							"checkAnswer": true,
							"help": true
						}
					}, {
						problem: '\\str{Subtract the fractions:}',
						answer: '\\css'
						+'{\\rowgrp'
						+'{\\grp{\\sign{\xA0 \xA0 \xA0 \xA0}}{\\mixed{\\str{$whole1}}{\\frac{\\str{$numnew1}}{\\str{$denanswer}}}}}'
						+'{html{&nbsp;}}'
						+'{\\css{\\grp{\\sign{\xA0 \xA0 - }}{\\mixed{\\str{$whole2}}{\\frac{\\str{$numnew2}}{\\str{$denanswer}}}}}{border-bottom-with-padding}}'
						+'{html{&nbsp;}}'
						+'{\\grp{\\sign{\xA0 \xA0 \xA0}}{\\mixed{\\input{$wholeanswer}}{\\frac{\\input{$numanswer}}{\\input{$denanswer}}}}}}{centerTableText3}',
						controls: {
							"checkAnswer": true,
							"help": true
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
						answer: '\\css'
						+'{\\rowgrp'
						+'{grp{\\sign{\xA0 \xA0}}{\\mixed{\\str{$whole1}}{\\frac{\\str{$num1}}{\\str{$den1}}}}}'
						+'{html{&nbsp;}}'
						+'{\\css{grp{\\sign{-}}{\\mixed{\\str{$whole2}}{\\frac{\\str{$num2}}{\\str{$den2}}}}}{border-bottom-with-padding}}'
						+'{html{&nbsp;}}'
						+'{grp{\\sign{\xA0 \xA0}}{\\mixed{\\input{$wholeanswer}}{\\frac{\\input{$numanswer2}}{\\input{$denanswer2}}}}}}'
						+'{centerTableText3}',
						controls: {
							"checkAnswer": true,
							"help": false,
							"workbook": true
						}
					}]
				}, {
					title: 'Workbook',
					children: [{
						problem: '\\rowgrp'
						+'{\\str{Find the lowest common denominator (LCD) of the fractions:}}'
						+'{html{&nbsp;}}'
						+'{grp{\\mixed{\\str{$whole1}}{\\frac{\\str{$num1}}{\\str{$den1}}}}{\\str{\xA0 and \xA0}}{\\mixed{\\str{$whole2}}{\\frac{\\str{$num2}}{\\str{$den2}}}}}',
						answer: '\\input{$denanswer1}',
						controls: {
							"checkAnswer": true,
							"help": '\\rowgrp'
							+'{\\str{The LCD of $den1 and $den2 is $denanswer1.}}'
							+'{\\html{&nbsp;}}'
							+'{\\css{\\str{\xA0 Answer: \xA0 $denanswer1}}{help-answer-text}}'
						},
					}, {
						problem: '\\str{Use the LCD to convert the fractions: }',
						answer: '\\rowgrp'
						+'{\\grp{\\mixed{\\str{$whole1}}{\\frac{\\str{$num1}}{\\str{$den1}}}}{\\sign{\xA0 \xA0 = \xA0 \xA0}}{\\mixed{\\str{$whole1}}{\\frac{\\input{$numnew1}}{\\str{$denanswer1}}}}}'
						+'{html{&nbsp;}}'
						+'{\\grp{\\mixed{\\str{$whole2}}{\\frac{\\str{$num2}}{\\str{$den2}}}}{\\sign{\xA0 \xA0 = \xA0 \xA0}}{\\mixed{\\str{$whole2}}{\\frac{\\input{$numnew2}}{\\str{$denanswer1}}}}}',
						controls: {
							"checkAnswer": true,
							"help": true
						}
					}, {
						problem: '\\str{Subtract the fractions:}',
						answer: '\\css'
						+'{\\rowgrp'
						+'{\\grp{\\sign{\xA0 \xA0 \xA0 \xA0}}{\\mixed{\\str{$whole1}}{\\frac{\\str{$numnew1}}{\\str{$denanswer1}}}}}'
						+'{html{&nbsp;}}'
						+'{\\css{\\grp{\\sign{\xA0 \xA0 - }}{\\mixed{\\str{$whole2}}{\\frac{\\str{$numnew2}}{\\str{$denanswer1}}}}}{border-bottom-with-padding}}'
						+'{html{&nbsp;}}'
						+'{\\grp{\\sign{\xA0 \xA0 \xA0}}{\\mixed{\\input{$wholeanswer}}{\\frac{\\input{$numanswer1}}{\\input{$denanswer1}}}}}}{centerTableText3}',
						controls: {
							"checkAnswer": true,
							"help": true
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
						answer: '\\css'
						+'{\\rowgrp'
						+'{grp{\\sign{\xA0 \xA0}}{\\mixed{\\str{$whole1}}{\\frac{\\str{$num1}}{\\str{$den1}}}}}'
						+'{html{&nbsp;}}'
						+'{\\css{grp{\\sign{-}}{\\mixed{\\str{$whole2}}{\\frac{\\str{$num2}}{\\str{$den2}}}}}{border-bottom-with-padding}}'
						+'{html{&nbsp;}}'
						+'{grp{\\sign{\xA0 \xA0}}{\\mixed{\\input{$wholeanswer}}{\\frac{\\input{$numanswer}}{\\input{$denanswer}}}}}}'
						+'{centerTableText3}',
						controls: {
							"checkAnswer": true,
							"help": false,
							"workbook": true
						}
					}]
				}, {
					title: 'Workbook',
					children: [{
						problem: '\\rowgrp'
						+'{\\str{Find the lowest common denominator (LCD) of the fractions:}}'
						+'{html{&nbsp;}}'
						+'{grp{\\mixed{\\str{$whole1}}{\\frac{\\str{$num1}}{\\str{$den1}}}}{\\str{\xA0 and \xA0}}{\\mixed{\\str{$whole2}}{\\frac{\\str{$num2}}{\\str{$den2}}}}}',
						answer: '\\input{$dennew1}',
						controls: {
							"checkAnswer": true,
							"help": '\\rowgrp'
							+'{\\str{The LCD of $den1 and $den2 is $dennew1.}}'
							+'{\\html{&nbsp;}}'
							+'{\\css{\\str{\xA0 Answer: \xA0 $dennew1}}{help-answer-text}}'
						},
					}, {
						problem: '\\str{Use the LCD to convert the fractions: }',
						answer: '\\rowgrp'
						+'{\\grp{\\mixed{\\str{$whole1}}{\\frac{\\str{$num1}}{\\str{$den1}}}}{\\sign{\xA0 \xA0 = \xA0 \xA0}}{\\mixed{\\str{$whole1}}{\\frac{\\input{$numnew1}}{\\str{$dennew1}}}}}'
						+'{\\grp{\\str{\xA0}}}'
						+'{\\grp{\\mixed{\\str{$whole2}}{\\frac{\\str{$num2}}{\\str{$den2}}}}{\\sign{\xA0 \xA0 = \xA0 \xA0}}{\\mixed{\\str{$whole2}}{\\frac{\\input{$numnew2}}{\\str{$dennew1}}}}}',
						controls: {
							"checkAnswer": true,
							"help": true
						}
					}, {
						problem: '\\str{Do you need to borrow one?}',
						answer: '\\css'
						+'{\\rowgrp'
						+'{grp{\\sign{\xA0}}{\\mixed{\\str{$whole1}}{\\frac{\\str{$numnew1}}{\\str{$dennew1}}}}}'
						+'{html{&nbsp;}}'
						+'{\\css{grp{\\sign{-}}{\\mixed{\\str{$whole2}}{\\frac{\\str{$numnew2}}{\\str{$dennew1}}}}}{border-bottom-with-padding}}'
						+'{html{&nbsp;}}'
						+'{\\butgrp{\\row{\\but{YES}{T}}{\\grp{\\html{&nbsp; &nbsp;}}}{\\but{NO}{F}}}}}'
						+'{centerTableText3}',
						controls: {
							"checkAnswer": true,
							"help": false
						}
					}, {
						problem: '\\str{Rewrite the fractional part of the minuend, borrowing one from the whole number: }',
						answer: '\\rowgrp{\\grp{\\mixed{\\str{$whole1}}{\\frac{\\str{$numnew1}}{\\str{$dennew1}}}}{\\sign{\xA0 \xA0 = \xA0 \xA0}}{\\mixed{\\str{$wholeReduced}}{\\frac{\\input{$numnew3}}{\\str{$dennew1}}}}}',
						controls: {
							"checkAnswer": true,
							"help": true
						}
					}, {
						problem: '\\str{Subtract the fractions:}',
						answer: '\\css'
						+'{\\rowgrp'
						+'{\\grp{\\sign{\xA0 \xA0 \xA0 \xA0}}{\\mixed{\\str{$wholeReduced}}{\\frac{\\str{$numnew3}}{\\str{$dennew1}}}}}'
						+'{html{&nbsp;}}'
						+'{\\css{\\grp{\\sign{\xA0 \xA0 - }}{\\mixed{\\str{$whole2}}{\\frac{\\str{$numnew2}}{\\str{$dennew1}}}}}{border-bottom-with-padding}}'
						+'{html{&nbsp;}}'
						+'{\\grp{\\sign{\xA0 \xA0 \xA0}}{\\mixed{\\input{$wholeanswer}}{\\frac{\\input{$numanswer}}{\\input{$dennew1}}}}}}'
						+'{centerTableText3}',
						controls: {
							"checkAnswer": true,
							"help": true
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
						answer: '\\css'
						+'{\\rowgrp'
						+'{grp{\\sign{\xA0 \xA0}}{\\mixed{\\str{$whole1}}{\\frac{\\str{$num1}}{\\str{$den1}}}}}'
						+'{html{&nbsp;}}'
						+'{\\css{grp{\\sign{-}}{\\mixed{\\str{$whole2}}{\\frac{\\str{$num2}}{\\str{$den2}}}}}{border-bottom-with-padding}}'
						+'{html{&nbsp;}}'
						+'{grp{\\sign{\xA0 \xA0}}{\\mixed{\\input{$wholeanswer}}{\\frac{\\input{$numanswer}}{\\input{$denanswer}}}}}}'
						+'{centerTableText3}',
						controls: {
							"checkAnswer": true,
							"help": false,
							"workbook": true
						}
					}]
				}, {
					title: 'Workbook',
					children: [{
						problem: '\\rowgrp'
						+'{\\str{Find the lowest common denominator (LCD) of the fractions:}}'
						+'{html{&nbsp;}}'
						+'{grp{\\mixed{\\str{$whole1}}{\\frac{\\str{$num1}}{\\str{$den1}}}}{\\str{\xA0 and \xA0}}{\\mixed{\\str{$whole2}}{\\frac{\\str{$num2}}{\\str{$den2}}}}}',
						answer: '\\input{$dennew1}',
						controls: {
							"checkAnswer": true,
							"help": '\\rowgrp'
							+'{\\str{The LCD of $den1 and $den2 is $dennew1.}}'
							+'{\\html{&nbsp;}}'
							+'{\\css{\\str{\xA0 Answer: \xA0 $dennew1}}{help-answer-text}}'
						},
					}, {
						problem: '\\str{Use the LCD to convert the fractions: }',
						answer: '\\rowgrp'
						+'{\\grp{\\mixed{\\str{$whole1}}{\\frac{\\str{$num1}}{\\str{$den1}}}}{\\sign{\xA0 \xA0 = \xA0 \xA0}}{\\mixed{\\str{$whole1}}{\\frac{\\input{$numnew1}}{\\str{$dennew1}}}}}'
						+'{\\grp{\\str{\xA0}}}'
						+'{\\grp{\\mixed{\\str{$whole2}}{\\frac{\\str{$num2}}{\\str{$den2}}}}{\\sign{\xA0 \xA0 = \xA0 \xA0}}{\\mixed{\\str{$whole2}}{\\frac{\\input{$numnew2}}{\\str{$dennew1}}}}}',
						controls: {
							"checkAnswer": true,
							"help": true
						}
					}, {
						problem: '\\str{Do you need to borrow one?}',
						answer: '\\css'
						+'{\\rowgrp'
						+'{grp{\\sign{\xA0}}{\\mixed{\\str{$whole1}}{\\frac{\\str{$numnew1}}{\\str{$dennew1}}}}}'
						+'{html{&nbsp;}}'
						+'{\\css{grp{\\sign{-}}{\\mixed{\\str{$whole2}}{\\frac{\\str{$numnew2}}{\\str{$dennew1}}}}}{border-bottom-with-padding}}'
						+'{html{&nbsp;}}'
						+'{\\butgrp{\\row{\\but{YES}{T}}{\\grp{\\html{&nbsp; &nbsp;}}}{\\but{NO}{F}}}}}'
						+'{centerTableText3}',
						controls: {
							"checkAnswer": true,
							"help": false
						}
					}, {
						problem: '\\str{Rewrite the fractional part of the minuend, borrowing one from the whole number: }',
						answer: '\\rowgrp{\\grp{\\mixed{\\str{$whole1}}{\\frac{\\str{$numnew1}}{\\str{$dennew1}}}}{\\sign{\xA0 \xA0 = \xA0 \xA0}}{\\mixed{\\str{$wholeReduced}}{\\frac{\\input{$numnew3}}{\\str{$dennew1}}}}}',
						controls: {
							"checkAnswer": true,
							"help": true
						}
					}, {
						problem: '\\str{Subtract the fractions:}',
						answer: '\\css'
						+'{\\rowgrp'
						+'{\\grp{\\sign{\xA0 \xA0 \xA0 \xA0}}{\\mixed{\\str{$wholeReduced}}{\\frac{\\str{$numnew3}}{\\str{$dennew1}}}}}'
						+'{html{&nbsp;}}'
						+'{\\css{\\grp{\\sign{\xA0 \xA0 - }}{\\mixed{\\str{$whole2}}{\\frac{\\str{$numnew2}}{\\str{$dennew1}}}}}{border-bottom-with-padding}}'
						+'{html{&nbsp;}}'
						+'{\\grp{\\sign{\xA0 \xA0 \xA0}}{\\mixed{\\input{$wholeanswer}}{\\frac{\\input{$numnew4}}{\\input{$dennew1}}}}}}'
						+'{centerTableText3}',
						controls: {
							"checkAnswer": true,
							"help": true
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
            },
			/*fourthOld: {
                title: 'Subtracting Mixed Numbers',
				children: [{
					title: 'Main Answer',
					children: [{
						problem: '\\str{\xA0}',
						answer: '\\css'
						+'{\\rowgrp'
						+'{grp{\\sign{\xA0 \xA0}}{\\mixed{\\str{$whole1}}{\\frac{\\str{$num1}}{\\str{$den1}}}}}'
						+'{grp{\\sign{-}}{\\mixed{\\str{$whole2}}{\\frac{\\str{$num2}}{\\str{$den2}}}}}'
						+'{grp{\\sign{\xA0 \xA0}}{\\mixed{\\input{$wholeanswer}}{\\frac{\\input{$numanswer}}{\\input{$denanswer}}}}}}'
						+'{centerTableText3}',
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
            }*/
        },
        data = [
            { whole1: 2, num1: 4, den1: 5, whole2: 1, num2: 3, den2: 4, wholeanswer: 1, numanswer: 1, denanswer: 20, numnew1: 16, numnew2: 15, template: 'main' },
			{ whole1: 3, num1: 7, den1: 6, whole2: 2, num2: 8, den2: 9, wholeanswer: 1, numanswer: 5, denanswer: 18, numnew1: 21, numnew2: 16, template: 'main' },
			{ whole1: 5, num1: 4, den1: 3, whole2: 3, num2: 3, den2: 5, wholeanswer: 2, numanswer: 11, denanswer: 15, numnew1: 20, numnew2: 9, template: 'main' },
			{ whole1: 6, num1: 9, den1: 10, whole2: 2, num2: 5, den2: '\xA06\xA0', wholeanswer: 4, numanswer1: 2, denanswer1: 30, numnew1: 27, numnew2: 25, numanswer2: 1, denanswer2: 15, template: 'second' },
			{ whole1: 5, num1: 3, den1: 8, whole2: 2, num2: 3, den2: 5, wholeanswer: 2, numanswer: 31, denanswer: 40, numnew1: 15,  dennew1: 40, numnew2: 24, wholeReduced: 4, numnew3: 55, template: 'third' },
			{ whole1: 3, num1: 5, den1: 12, whole2: 1, num2: 3, den2: '\xA04\xA0', wholeanswer: 1, numanswer: 2, denanswer: 3, numnew1: 5,   dennew1: 12, numnew2: 9, wholeReduced: 2, numnew3: 17, numnew4: 8, template: 'fourth' },
			{ whole1: 6, num1: 7, den1: 9, whole2: 5, num2: 2, den2: 3, wholeanswer: 1, numanswer: 1, denanswer: 9, numnew1: 7, numnew2: 6, template: 'main' },
			{ whole1: 4, num1: 1, den1: '\xA06\xA0', whole2: 1, num2: 3, den2: 10, wholeanswer: 2, numanswer: 13, denanswer: 15, numnew1: 5,   dennew1: 30, numnew2: 9, wholeReduced: 3, numnew3: 35, numnew4: 26, template: 'fourth' },
			{ whole1: 5, num1: 9, den1: 10, whole2: 2, num2: 2, den2: '\xA05\xA0', wholeanswer: 3, numanswer1: 5, denanswer1: 10, numnew1: 9, numnew2: 4, numanswer2: 1, denanswer2: 2, template: 'second' },
			{ whole1: 7, num1: 5, den1: 8, whole2: 5, num2: 4, den2: 5, wholeanswer: 1, numanswer: 33, denanswer: 40, numnew1: 25,  dennew1: 40, numnew2: 32, wholeReduced: 6, numnew3: 65, template: 'third' },
        ];

    return dataUtils.build(desc, template, data);
}]);