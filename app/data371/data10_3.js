/*global angular */

angular.module('mathSkills').service('data10_3', ['dataUtils', function (dataUtils) {
    var desc = {
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
						answer: '\\css{\\rowgrp'
						+'{\\grp{\\sign{\xA0 \xA0}}{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}}'
						+'{\\html{&nbsp;}}'
						+'{\\css{\\grp{\\sign{+}}{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}}{border-bottom-with-padding}}'
						+'{\\html{&nbsp;}}'
						+'{\\grp{\\sign{\xA0 \xA0}}{\\mixed{\\input{$wholeanswer2}}{\\frac{\\input{$numanswer2}}{\\input{$denanswer}}}}}}'
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
						+'{\\html{&nbsp;}}'
						+'{\\grp{\\html{<span style="font-size:550%;">&nbsp;</span>}}{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}}'
						+'{\\html{&nbsp;}}'
						+'{\\grp{\\sign{+}}{\\css{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}{border-bottom-with-padding}}}',
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
						answer: '\\rowgrp{\\grp{\\mixed{\\str{$whole1}}{\\frac{\\str{$num1}}{\\str{$den1}}}}{\\sign{\xA0 \xA0 = \xA0 \xA0}}{\\mixed{\\str{$whole1}}{\\frac{\\input{$numnew1}}{\\str{$denanswer}}}}}{\\grp{\\str{\xA0}}}{\\grp{\\mixed{\\str{$whole2}}{\\frac{\\str{$num2}}{\\str{$den2}}}}{\\sign{\xA0 \xA0 = \xA0 \xA0}}{\\mixed{\\str{$whole2}}{\\frac{\\input{$numnew2}}{\\str{$denanswer}}}}}',
						controls: {
							"checkAnswer": true,
							"help": true
						}
					}, {
						problem: '\\str{Add the fractions:}',
						answer: '\\css{\\rowgrp'
						+'{\\grp{\\sign{\xA0 \xA0 \xA0 \xA0}}{\\mixed{\\str{$whole1}}{\\frac{\\str{$numnew1}}{\\str{$denanswer}}}}}'
						+'{\\html{&nbsp;}}'
						+'{\\css{\\grp{\\sign{\xA0 \xA0 + }}{\\mixed{\\str{$whole2}}{\\frac{\\str{$numnew2}}{\\str{$denanswer}}}}}{border-bottom-with-padding}}'
						+'{\\html{&nbsp;}}'
						+'{\\grp{\\sign{\xA0 \xA0 \xA0}}{\\mixed{\\input{$wholeanswer1}}{\\frac{\\input{$numanswer1}}{\\input{$denanswer}}}}}}{centerTableText3}',
						controls: {
							"checkAnswer": true,
							"help": true
						}
					}, {
						problem: '\\str{Rewrite the answer as a mixed number with a proper fraction: }',
						answer: '\\rowgrp{\\grp{\\mixed{\\str{$wholeanswer1}}{\\frac{\\str{$numanswer1}}{\\str{$denanswer}}}}{\\sign{\xA0 \xA0 = \xA0 \xA0}}{\\mixed{\\input{$wholeanswer2}}{\\frac{\\input{$numanswer2}}{\\input{$denanswer}}}}}',
						controls: {
							"checkAnswer": true,
							"help": true
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
						answer: '\\css{\\rowgrp'
						+'{\\grp{\\sign{\xA0 \xA0}}{\\mixed{\\str{$whole1}}{\\frac{\\str{$num1}}{\\str{$den1}}}}}'
						+'{\\html{&nbsp;}}'
						+'{\\css{\\grp{\\sign{+}}{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}}{border-bottom-with-padding}}'
						+'{\\html{&nbsp;}}'
						+'{\\grp{\\sign{\xA0 \xA0}}{\\mixed{\\input{$wholeanswer2}}{\\frac{\\input{$numanswer2}}{\\input{$denanswer}}}}}}'
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
						+'{\\html{&nbsp;}}'
						+'{\\grp{\\html{<span style="font-size:550%;">&nbsp;</span>}}{\\mixed{\\str{$whole1}}{\\frac{\\str{$num1}}{\\str{$den1}}}}}'
						+'{\\html{&nbsp;}}'
						+'{\\grp{\\sign{+}}{\\css{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}{border-bottom-with-padding}}}',
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
						answer: '\\rowgrp{\\grp{\\mixed{\\str{$whole1}}{\\frac{\\str{$num1}}{\\str{$den1}}}}{\\sign{\xA0 \xA0 = \xA0 \xA0}}{\\mixed{\\str{$whole1}}{\\frac{\\input{$numnew1}}{\\str{$denanswer}}}}}{\\grp{\\str{\xA0}}}{\\grp{\\mixed{\\str{$whole2}}{\\frac{\\str{$num2}}{\\str{$den2}}}}{\\sign{\xA0 \xA0 = \xA0 \xA0}}{\\mixed{\\str{$whole2}}{\\frac{\\input{$numnew2}}{\\str{$denanswer}}}}}',
						controls: {
							"checkAnswer": true,
							"help": true
						}
					}, {
						problem: '\\str{Add the fractions:}',
						answer: '\\css{\\rowgrp'
						+'{\\grp{\\sign{\xA0 \xA0 \xA0 \xA0}}{\\mixed{\\str{$whole1}}{\\frac{\\str{$numnew1}}{\\str{$denanswer}}}}}'
						+'{\\html{&nbsp;}}'
						+'{\\css{\\grp{\\sign{\xA0 \xA0 + }}{\\mixed{\\str{$whole2}}{\\frac{\\str{$numnew2}}{\\str{$denanswer}}}}}{border-bottom-with-padding}}'
						+'{\\html{&nbsp;}}'
						+'{\\grp{\\sign{\xA0 \xA0 \xA0}}{\\mixed{\\input{$wholeanswer1}}{\\frac{\\input{$numanswer1}}{\\input{$denanswer}}}}}}{centerTableText3}',
						controls: {
							"checkAnswer": true,
							"help": true
						}
					} ]
				}]
            },
			third: {
                title: 'Adding Mixed Numbers',
				children: [{
					title: 'Main Answer',
					children: [{
						problem: '\\str{\xA0}',
						answer: '\\css{\\rowgrp'
						+'{\\grp{\\sign{\xA0 \xA0}}{\\mixed{\\str{$whole1}}{\\frac{\\str{$num1}}{\\str{$den1}}}}}'
						+'{\\html{&nbsp;}}'
						+'{\\css{\\grp{\\sign{+}}{\\mixed{\\str{$whole2}}{\\frac{\\str{$num2}}{\\str{$den2}}}}}{border-bottom-with-padding}}'
						+'{\\html{&nbsp;}}'
						+'{\\grp{\\sign{\xA0 \xA0}}{\\mixed{\\input{$wholeanswer2}}{\\frac{\\input{$numanswer2}}{\\input{$denanswer2}}}}}}'
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
						+'{\\html{&nbsp;}}'
						+'{\\grp{\\html{<span style="font-size:550%;">&nbsp;</span>}}{\\mixed{\\str{$whole1}}{\\frac{\\str{$num1}}{\\str{$den1}}}}}'
						+'{\\html{&nbsp;}}'
						+'{\\grp{\\sign{+}}{\\css{\\mixed{\\str{$whole2}}{\\frac{\\str{$num2}}{\\str{$den2}}}}{border-bottom-with-padding}}}',
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
						answer: '\\rowgrp{\\grp{\\mixed{\\str{$whole1}}{\\frac{\\str{$num1}}{\\str{$den1}}}}{\\sign{\xA0 \xA0 = \xA0 \xA0}}{\\mixed{\\str{$whole1}}{\\frac{\\input{$numnew1}}{\\str{$denanswer1}}}}}{\\grp{\\str{\xA0}}}{\\grp{\\mixed{\\str{$whole2}}{\\frac{\\str{$num2}}{\\str{$den2}}}}{\\sign{\xA0 \xA0 = \xA0 \xA0}}{\\mixed{\\str{$whole2}}{\\frac{\\input{$numnew2}}{\\str{$denanswer1}}}}}',
						controls: {
							"checkAnswer": true,
							"help": true
						}
					}, {
						problem: '\\str{Add the fractions:}',
						answer: '\\css{\\rowgrp'
						+'{\\grp{\\sign{\xA0 \xA0 \xA0 \xA0}}{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$numnew1}}{\\fracstr{$denanswer1}}}}}'
						+'{\\html{&nbsp;}}'
						+'{\\css{\\grp{\\sign{\xA0 \xA0 + }}{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$numnew2}}{\\fracstr{$denanswer1}}}}}{border-bottom-with-padding}}'
						+'{\\html{&nbsp;}}'
						+'{\\grp{\\sign{\xA0 \xA0 \xA0}}{\\mixed{\\input{$wholeanswer1}}{\\frac{\\input{$numanswer1}}{\\input{$denanswer1}}}}}}{centerTableText3}',
						controls: {
							"checkAnswer": true,
							"help": true
						}
					}, {
						problem: '\\row{\\str{Reduce \xA0}}{\\mixed{\\str{$wholeanswer2}}{\\frac{\\fracstr{$numanswer1}}{\\fracstr{$denanswer1}}}}{\\str{\xA0 to its lowest terms }}',
						answer: '\\reducefrac{\\mixed{\\str{$wholeanswer2}}{\\frac{\\fracstr{$numanswer1}}{\\fracstr{$denanswer1}}}}',
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
						answer: '\\css{\\rowgrp'
						+'{\\grp{\\sign{\xA0 \xA0}}{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}}'
						+'{\\html{&nbsp;}}'
						+'{\\grp{\\sign{\xA0 \xA0}}{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}}'
						+'{\\html{&nbsp;}}'
						+'{\\css{\\grp{\\sign{+}}{\\mixed{\\str{$whole3}}{\\frac{\\fracstr{$num3}}{\\fracstr{$den3}}}}}{border-bottom-with-padding}}'
						+'{\\html{&nbsp;}}'
						+'{\\grp{\\sign{\xA0 \xA0}}{\\mixed{\\input{$wholeanswer2}}{\\frac{\\input{$numanswer3}}{\\input{$denanswer2}}}}}}'
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
						+'{\\html{&nbsp;}}'
						+'{\\grp{\\html{<span style="font-size:550%;">&nbsp;</span>}}{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}}'
						+'{\\html{&nbsp;}}'
						+'{\\grp{\\html{<span style="font-size:550%;">&nbsp;</span>}}{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}}'
						+'{\\html{&nbsp;}}'
						+'{\\grp{\\sign{+}}{\\css{\\mixed{\\str{$whole3}}{\\frac{\\fracstr{$num3}}{\\fracstr{$den3}}}}{border-bottom-with-padding}}}',
						answer: '\\input{$denanswer1}',
						controls: {
							"checkAnswer": true,
							"help": '\\rowgrp'
							+'{\\str{The LCD of $den1, $den2 and $den3 is $denanswer1.}}'
							+'{\\html{&nbsp;}}'
							+'{\\css{\\str{\xA0 Answer: \xA0 $denanswer1}}{help-answer-text}}'
						},
					}, {
						problem: '\\str{Use the LCD to convert the fractions: }',
						answer: '\\rowgrp'
						+'{\\grp{\\mixed{\\str{$whole1}}{\\frac{\\str{$num1}}{\\str{$den1}}}}{\\sign{\xA0 \xA0 = \xA0 \xA0}}{\\mixed{\\str{$whole1}}{\\frac{\\input{$numnew1}}{\\str{$denanswer1}}}}}'
						+'{\\grp{\\str{\xA0}}}'
						+'{\\grp{\\mixed{\\str{$whole2}}{\\frac{\\str{$num2}}{\\str{$den2}}}}{\\sign{\xA0 \xA0 = \xA0 \xA0}}{\\mixed{\\str{$whole2}}{\\frac{\\input{$numnew2}}{\\str{$denanswer1}}}}}'
						+'{\\grp{\\str{\xA0}}}'
						+'{\\grp{\\mixed{\\str{$whole3}}{\\frac{\\str{$num3}}{\\str{$den3}}}}{\\sign{\xA0 \xA0 = \xA0 \xA0}}{\\mixed{\\str{$whole3}}{\\frac{\\input{$numnew3}}{\\str{$denanswer1}}}}}',
						controls: {
							"checkAnswer": true,
							"help": true
						}
					}, {
						problem: '\\str{Add the fractions:}',
						answer: '\\css{\\rowgrp'
						+'{\\grp{\\sign{\xA0 \xA0 \xA0 \xA0}}{\\mixed{\\str{$whole1}}{\\frac{\\str{$numnew1}}{\\str{$denanswer1}}}}}'
						+'{\\html{&nbsp;}}'
						+'{\\grp{\\sign{\xA0 \xA0 \xA0 \xA0}}{\\mixed{\\str{$whole2}}{\\frac{\\str{$numnew2}}{\\str{$denanswer1}}}}}'
						+'{\\html{&nbsp;}}'
						+'{\\css{\\grp{\\sign{\xA0 \xA0 + }}{\\mixed{\\str{$whole3}}{\\frac{\\str{$numnew3}}{\\str{$denanswer1}}}}}{border-bottom-with-padding}}'
						+'{\\html{&nbsp;}}'
						+'{\\grp{\\sign{\xA0 \xA0 \xA0}}{\\mixed{\\input{$wholeanswer1}}{\\frac{\\input{$numanswer1}}{\\input{$denanswer1}}}}}}{centerTableText3}',
						controls: {
							"checkAnswer": true,
							"help": true
						}
					}, {
						problem: '\\row{\\str{Reduce \xA0}}{\\mixed{\\str{$wholeanswer1}}{\\frac{\\fracstr{$numanswer1}}{\\fracstr{$denanswer1}}}}{\\str{\xA0 to its lowest terms }}',
						answer: '\\reducefrac{\\mixed{\\str{$wholeanswer1}}{\\frac{\\fracstr{$numanswer1}}{\\fracstr{$denanswer1}}}}',
						controls: {
							"checkAnswer": true,
							"help": false
						}
					}, {
						problem: '\\str{Rewrite the answer as a mixed number with a proper fraction: }',
						answer: '\\rowgrp{\\grp{\\mixed{\\str{$wholeanswer1}}{\\frac{\\str{$numanswer2}}{\\str{$denanswer2}}}}{\\sign{\xA0 \xA0 = \xA0 \xA0}}{\\mixed{\\input{$wholeanswer2}}{\\frac{\\input{$numanswer3}}{\\input{$denanswer2}}}}}',
						controls: {
							"checkAnswer": true,
							"help": true
						}
					}]
				}]
            },
			fifth: {
                title: 'Adding Mixed Numbers',
				children: [{
					title: 'Main Answer',
					children: [{
						problem: '\\str{\xA0}',
						answer: '\\css{\\rowgrp'
						+'{\\grp{\\sign{\xA0 \xA0}}{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}}'
						+'{\\html{&nbsp;}}'
						+'{\\grp{\\sign{\xA0 \xA0}}{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}}'
						+'{\\html{&nbsp;}}'
						+'{\\css{\\grp{\\sign{+}}{\\mixed{\\str{$whole3}}{\\frac{\\fracstr{$num3}}{\\fracstr{$den3}}}}}{border-bottom-with-padding}}'
						+'{\\html{&nbsp;}}'
						+'{\\grp{\\sign{\xA0 \xA0}}{\\mixed{\\input{$wholeanswer2}}{\\frac{\\input{$numanswer2}}{\\input{$denanswer2}}}}}}'
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
						+'{\\html{&nbsp;}}'
						+'{\\grp{\\html{<span style="font-size:550%;">&nbsp;</span>}}{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}}'
						+'{\\html{&nbsp;}}'
						+'{\\grp{\\html{<span style="font-size:550%;">&nbsp;</span>}}{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}}'
						+'{\\html{&nbsp;}}'
						+'{\\grp{\\sign{+}}{\\css{\\mixed{\\str{$whole3}}{\\frac{\\fracstr{$num3}}{\\fracstr{$den3}}}}{border-bottom-with-padding}}}',
						answer: '\\input{$denanswer1}',
						controls: {
							"checkAnswer": true,
							"help": '\\rowgrp'
							+'{\\str{The LCD of $den1, $den2 and $den3 is $denanswer1.}}'
							+'{\\html{&nbsp;}}'
							+'{\\css{\\str{\xA0 Answer: \xA0 $denanswer1}}{help-answer-text}}'
						},
					}, {
						problem: '\\str{Use the LCD to convert the fractions: }',
						answer: '\\rowgrp'
						+'{\\grp{\\mixed{\\str{$whole1}}{\\frac{\\str{$num1}}{\\str{$den1}}}}{\\sign{\xA0 \xA0 = \xA0 \xA0}}{\\mixed{\\str{$whole1}}{\\frac{\\input{$numnew1}}{\\str{$denanswer1}}}}}'
						+'{\\grp{\\str{\xA0}}}'
						+'{\\grp{\\mixed{\\str{$whole2}}{\\frac{\\str{$num2}}{\\str{$den2}}}}{\\sign{\xA0 \xA0 = \xA0 \xA0}}{\\mixed{\\str{$whole2}}{\\frac{\\input{$numnew2}}{\\str{$denanswer1}}}}}'
						+'{\\grp{\\str{\xA0}}}'
						+'{\\grp{\\mixed{\\str{$whole3}}{\\frac{\\str{$num3}}{\\str{$den3}}}}{\\sign{\xA0 \xA0 = \xA0 \xA0}}{\\mixed{\\str{$whole3}}{\\frac{\\input{$numnew3}}{\\str{$denanswer1}}}}}',
						controls: {
							"checkAnswer": true,
							"help": true
						}
					}, {
						problem: '\\str{Add the fractions:}',
						answer: '\\css{\\rowgrp'
						+'{\\grp{\\sign{\xA0 \xA0 \xA0 \xA0}}{\\mixed{\\str{$whole1}}{\\frac{\\str{$numnew1}}{\\str{$denanswer1}}}}}'
						+'{\\html{&nbsp;}}'
						+'{\\grp{\\sign{\xA0 \xA0 \xA0 \xA0}}{\\mixed{\\str{$whole2}}{\\frac{\\str{$numnew2}}{\\str{$denanswer1}}}}}'
						+'{\\html{&nbsp;}}'
						+'{\\css{\\grp{\\sign{\xA0 \xA0 + }}{\\mixed{\\str{$whole3}}{\\frac{\\str{$numnew3}}{\\str{$denanswer1}}}}}{border-bottom-with-padding}}'
						+'{\\html{&nbsp;}}'
						+'{\\grp{\\sign{\xA0 \xA0 \xA0}}{\\mixed{\\input{$wholeanswer1}}{\\frac{\\input{$numanswer1}}{\\input{$denanswer1}}}}}}{centerTableText3}',
						controls: {
							"checkAnswer": true,
							"help": true
						}
					}]
				}]
            },
			sixth: {
                title: 'Adding Mixed Numbers',
				children: [{
					title: 'Main Answer',
					children: [{
						problem: '\\str{\xA0}',
						answer: '\\css{\\rowgrp'
						+'{\\grp{\\sign{\xA0 \xA0}}{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}}'
						+'{\\html{&nbsp;}}'
						+'{\\grp{\\sign{\xA0 \xA0}}{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}}'
						+'{\\html{&nbsp;}}'
						+'{\\css{\\grp{\\sign{+}}{\\mixed{\\str{$whole3}}{\\frac{\\fracstr{$num3}}{\\fracstr{$den3}}}}}{border-bottom-with-padding}}'
						+'{\\html{&nbsp;}}'
						+'{\\grp{\\sign{\xA0 \xA0}}{\\mixed{\\input{$wholeanswer2}}{\\frac{\\input{$numanswer2}}{\\input{$denanswer2}}}}}}'
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
						+'{\\html{&nbsp;}}'
						+'{\\grp{\\html{<span style="font-size:550%;">&nbsp;</span>}}{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}}'
						+'{\\html{&nbsp;}}'
						+'{\\grp{\\html{<span style="font-size:550%;">&nbsp;</span>}}{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}}'
						+'{\\html{&nbsp;}}'
						+'{\\grp{\\sign{+}}{\\css{\\mixed{\\str{$whole3}}{\\frac{\\fracstr{$num3}}{\\fracstr{$den3}}}}{border-bottom-with-padding}}}',
						answer: '\\input{$denanswer1}',
						controls: {
							"checkAnswer": true,
							"help": '\\rowgrp'
							+'{\\str{The LCD of $den1, $den2 and $den3 is $denanswer1.}}'
							+'{\\html{&nbsp;}}'
							+'{\\css{\\str{\xA0 Answer: \xA0 $denanswer1}}{help-answer-text}}'
						},
					}, {
						problem: '\\str{Use the LCD to convert the fractions: }',
						answer: '\\rowgrp'
						+'{\\grp{\\mixed{\\str{$whole1}}{\\frac{\\str{$num1}}{\\str{$den1}}}}{\\sign{\xA0 \xA0 = \xA0 \xA0}}{\\mixed{\\str{$whole1}}{\\frac{\\input{$numnew1}}{\\str{$denanswer1}}}}}'
						+'{\\grp{\\str{\xA0}}}'
						+'{\\grp{\\mixed{\\str{$whole2}}{\\frac{\\str{$num2}}{\\str{$den2}}}}{\\sign{\xA0 \xA0 = \xA0 \xA0}}{\\mixed{\\str{$whole2}}{\\frac{\\input{$numnew2}}{\\str{$denanswer1}}}}}'
						+'{\\grp{\\str{\xA0}}}'
						+'{\\grp{\\mixed{\\str{$whole3}}{\\frac{\\str{$num3}}{\\str{$den3}}}}{\\sign{\xA0 \xA0 = \xA0 \xA0}}{\\mixed{\\str{$whole3}}{\\frac{\\input{$numnew3}}{\\str{$denanswer1}}}}}',
						controls: {
							"checkAnswer": true,
							"help": true
						}
					}, {
						problem: '\\str{Add the fractions:}',
						answer: '\\css{\\rowgrp'
						+'{\\grp{\\sign{\xA0 \xA0 \xA0 \xA0}}{\\mixed{\\str{$whole1}}{\\frac{\\str{$numnew1}}{\\str{$denanswer1}}}}}'
						+'{\\html{&nbsp;}}'
						+'{\\grp{\\sign{\xA0 \xA0 \xA0 \xA0}}{\\mixed{\\str{$whole2}}{\\frac{\\str{$numnew2}}{\\str{$denanswer1}}}}}'
						+'{\\html{&nbsp;}}'
						+'{\\css{\\grp{\\sign{\xA0 \xA0 + }}{\\mixed{\\str{$whole3}}{\\frac{\\str{$numnew3}}{\\str{$denanswer1}}}}}{border-bottom-with-padding}}'
						+'{\\html{&nbsp;}}'
						+'{\\grp{\\sign{\xA0 \xA0 \xA0}}{\\mixed{\\input{$wholeanswer1}}{\\frac{\\input{$numanswer1}}{\\input{$denanswer1}}}}}}{centerTableText3}',
						controls: {
							"checkAnswer": true,
							"help": true
						}
					}, {
						problem: '\\row{\\str{Reduce \xA0}}{\\mixed{\\str{$wholeanswer1}}{\\frac{\\fracstr{$numanswer1}}{\\fracstr{$denanswer1}}}}{\\str{\xA0 to its lowest terms }}',
						answer: '\\reducefrac{\\mixed{\\str{$wholeanswer1}}{\\frac{\\fracstr{$numanswer1}}{\\fracstr{$denanswer1}}}}',
						controls: {
							"checkAnswer": true,
							"help": false
						}
					}]
				}]
            },
			seventh: {
                title: 'Adding Mixed Numbers',
				children: [{
					title: 'Main Answer',
					children: [{
						problem: '\\str{\xA0}',
						answer: '\\css{\\rowgrp'
						+'{\\grp{\\sign{\xA0 \xA0}}{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}}'
						+'{\\html{&nbsp;}}'
						+'{\\grp{\\sign{\xA0 \xA0}}{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}}'
						+'{\\html{&nbsp;}}'
						+'{\\css{\\grp{\\sign{+}}{\\mixed{\\str{$whole3}}{\\frac{\\fracstr{$num3}}{\\fracstr{$den3}}}}}{border-bottom-with-padding}}'
						+'{\\html{&nbsp;}}'
						+'{\\grp{\\sign{\xA0 \xA0}}{\\mixed{\\input{$wholeanswer2}}{\\frac{\\input{$numanswer3}}{\\input{$denanswer2}}}}}}'
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
						+'{\\html{&nbsp;}}'
						+'{\\grp{\\html{<span style="font-size:550%;">&nbsp;</span>}}{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}}'
						+'{\\html{&nbsp;}}'
						+'{\\grp{\\html{<span style="font-size:550%;">&nbsp;</span>}}{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}}'
						+'{\\html{&nbsp;}}'
						+'{\\grp{\\sign{+}}{\\css{\\mixed{\\str{$whole3}}{\\frac{\\fracstr{$num3}}{\\fracstr{$den3}}}}{border-bottom-with-padding}}}',
						answer: '\\input{$denanswer1}',
						controls: {
							"checkAnswer": true,
							"help": '\\rowgrp'
							+'{\\str{The LCD of $den1, $den2 and $den3 is $denanswer1.}}'
							+'{\\html{&nbsp;}}'
							+'{\\css{\\str{\xA0 Answer: \xA0 $denanswer1}}{help-answer-text}}'
						},
					}, {
						problem: '\\str{Use the LCD to convert the fractions: }',
						answer: '\\rowgrp{\\grp{\\mixed{\\str{$whole1}}{\\frac{\\str{$num1}}{\\str{$den1}}}}{\\sign{\xA0 \xA0 = \xA0 \xA0}}{\\mixed{\\str{$whole1}}{\\frac{\\input{$numnew1}}{\\str{$denanswer1}}}}}{\\grp{\\str{\xA0}}}{\\grp{\\mixed{\\str{$whole2}}{\\frac{\\str{$num2}}{\\str{$den2}}}}{\\sign{\xA0 \xA0 = \xA0 \xA0}}{\\mixed{\\str{$whole2}}{\\frac{\\input{$numnew2}}{\\str{$denanswer1}}}}}{\\grp{\\str{\xA0}}}{\\grp{\\mixed{\\str{$whole3}}{\\frac{\\str{$num3}}{\\str{$den3}}}}{\\sign{\xA0 \xA0 = \xA0 \xA0}}{\\mixed{\\str{$whole3}}{\\frac{\\input{$numnew3}}{\\str{$denanswer1}}}}}',
						controls: {
							"checkAnswer": true,
							"help": true
						}
					}, {
						problem: '\\str{Add the fractions:}',
						answer: '\\css{\\rowgrp'
						+'{\\grp{\\sign{\xA0 \xA0 \xA0 \xA0}}{\\mixed{\\str{$whole1}}{\\frac{\\str{$numnew1}}{\\str{$denanswer1}}}}}'
						+'{\\html{&nbsp;}}'
						+'{\\grp{\\sign{\xA0 \xA0 \xA0 \xA0}}{\\mixed{\\str{$whole2}}{\\frac{\\str{$numnew2}}{\\str{$denanswer1}}}}}'
						+'{\\html{&nbsp;}}'
						+'{\\css{\\grp{\\sign{\xA0 \xA0 + }}{\\mixed{\\str{$whole3}}{\\frac{\\str{$numnew3}}{\\str{$denanswer1}}}}}{border-bottom-with-padding}}'
						+'{\\html{&nbsp;}}'
						+'{\\grp{\\sign{\xA0 \xA0 \xA0}}{\\mixed{\\input{$wholeanswer1}}{\\frac{\\input{$numanswer1}}{\\input{$denanswer1}}}}}}{centerTableText3}',
						controls: {
							"checkAnswer": true,
							"help": true
						}
					}, {
						problem: '\\row{\\str{Reduce \xA0}}{\\mixed{\\str{$wholeanswer1}}{\\frac{\\fracstr{$numanswer1}}{\\fracstr{$denanswer1}}}}{\\str{\xA0 to its lowest terms }}',
						answer: '\\reducefrac{\\mixed{\\str{$wholeanswer1}}{\\frac{\\fracstr{$numanswer1}}{\\fracstr{$denanswer1}}}}',
						controls: {
							"checkAnswer": true,
							"help": false
						}
					}, {
						problem: '\\str{Rewrite the answer as a mixed number with a proper fraction: }',
						answer: '\\rowgrp{\\grp{\\mixed{\\str{$wholeanswer1}}{\\frac{\\str{$numanswer2}}{\\str{$denanswer2}}}}{\\sign{\xA0 \xA0 = \xA0 \xA0}}{\\mixed{\\input{$wholeanswer2}}{\\frac{\\input{$numanswer3}}{\\input{$denanswer2}}}}}',
						controls: {
							"checkAnswer": true,
							"help": true
						}
					}]
				}]
            }
        },
        data = [
            { whole1: 5, num1: 4, den1: 5, whole2: 2, num2: 3, den2: 4, wholeanswer1: 7, wholeanswer2: 8, numanswer1: 31,  numanswer2: 11,denanswer: 20, numnew1: 16, numnew2: 15, template: 'main' },
			{ whole1: 2, num1: 5, den1: 6, whole2: 1, num2: 8, den2: 9, wholeanswer1: 3, wholeanswer2: 4, numanswer1: 31,  numanswer2: 13,denanswer: 18, numnew1: 15, numnew2: 16, template: 'main' },
			{ whole1: 2, num1: 2, den1: 3, whole2: 1, num2: 3, den2: 5, wholeanswer1: 3, wholeanswer2: 4, numanswer1: 19,  numanswer2: 4,denanswer: 15, numnew1: 10, numnew2: 9, template: 'main' },
			{ whole1: 2, num1: 1, den1: 10, whole2: 1 , num2: 5, den2: '\xA06\xA0', wholeanswer1: 3, numanswer1: 28, denanswer1: 30, numnew1: 3, numnew2: 25, wholeanswer2: 3, numanswer2: 14, denanswer2: 15, template: 'third' },
			{ whole1: 2, num1: 3, den1: 8, whole2: 1, num2: 1, den2: 5, wholeanswer1: 3, wholeanswer2: 3, numanswer1: 23,  numanswer2: 23,denanswer: 40, numnew1: 15, numnew2: '\xA08', template: 'second' },
			{ whole1: 2, num1: 7, den1: 12, whole2: 1 , num2: 1, den2: '\xA06\xA0', wholeanswer1: 3, numanswer1: 9, denanswer1: 12, numnew1: 7, numnew2: 2, wholeanswer2: 3, numanswer2: 3, denanswer2: 4, template: 'third' },		
			{ whole1: 2, num1: 2, den1: 9, whole2: 1, num2: 5, den2: 8, wholeanswer1: 3, wholeanswer2: 3, numanswer1: 61,  numanswer2: 61,denanswer: 72, numnew1: 16, numnew2: 45, template: 'second' },
			{ whole1: 2, num1: 1, den1: 12, whole2: 1, num2: 3, den2: '\xA04\xA0', whole3: 4,  num3: 5, den3: '\xA06\xA0', wholeanswer1: 7, numanswer1: 20, denanswer1: 12, numnew1: '\xA01', numnew2: '\xA09', numnew3: 10, wholeanswer2: 8, numanswer2: 5, denanswer2: 3, numanswer3: 2, template: 'fourth' },
			{ whole1: 2, num1: 5, den1: '\xA08\xA0', whole2: 1, num2: 1, den2: 10, whole3: 1, num3: 1, den3: '\xA04\xA0', wholeanswer1: 4, numanswer1: 39, denanswer1: 40, numnew1: 25, numnew2: '\xA04', numnew3: 10, wholeanswer2: 4, numanswer2: 39, denanswer2: 40, template: 'fifth' },
			{ whole1: 2, num1: 1, den1: 6, whole2: 3, num2: 1, den2: 4, whole3: 1, num3: 1, den3: 4, wholeanswer1: 6, numanswer1: 8, denanswer1: 12, numnew1: 2, numnew2: 3, numnew3: 3, wholeanswer2: 6, numanswer2: 2, denanswer2: 3, template: 'sixth' },
			/*{ whole1: 1, num1: 1, den1: 12, whole2: 2, num2: 3, den2: '\xA04\xA0', whole3: 3,  num3: 5, den3: '\xA06\xA0', wholeanswer1: 6, numanswer1: 20, denanswer1: 12, numnew1: '\xA01', numnew2: '\xA09', numnew3: 10, wholeanswer2: 7, numanswer2: 5, denanswer2: 3, numanswer3: 2, template: 'seventh' }*/
        ];

    return dataUtils.build(desc, template, data);
}]);
