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
						problem: '',
						answer: '\\css{\\rowgrp'
						+'{\\grp{\\sign{\xA0 \xA0}}{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}}'
						+'{\\html{&nbsp;}}'
						+'{\\css{\\grp{\\sign{+}}{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}}{border-bottom-with-padding}}'
						+'{\\html{&nbsp;}}'
						+'{\\grp{\\sign{\xA0 \xA0}}{\\mixed{\\input{$wholeanswer2}}{\\frac{\\input{$numanswer2}}{\\input{$answerDen}}}}}}'
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
									+'{\\grp{\\html{<span style="font-size:550%;">&nbsp;</span>}}{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp{\\sign{+}}{\\css{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}{border-bottom-with-padding}}}',
						answer: '\\rowgrp'
									+'{\\ins{Determine the lowest common denominator (LCD) of the fractions:}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp{\\input{$answerDen}}}',
						controls: {
							"checkAnswer": true,
							"help": true
						},
					}, {
						problem: '\\rowgrp'
									+'{\\grp{\\html{<span style="font-size:550%;">&nbsp;</span>}}{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp{\\sign{+}}{\\css{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}{border-bottom-with-padding}}}',
						answer: '\\css'
									+'{\\rowgrp'
										+'{\\html{Determine the lowest common denominator (LCD) of the fractions:}}'
										+'{\\html{&nbsp;}}'
										+'{\\html{$answerDen}}'
										+'{\\html{&nbsp;}}'
										+'{\\ins{Use the LCD to convert the fractions:}}'
										+'{\\grp{\\html{<span style="font-size:550%;">&nbsp;</span>}}{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}'
										+'{\\sign{=}}'
										+'{\\mixed{\\str{$whole1}}{\\frac{\\input{$numnew1}}{\\fracstr{$answerDen}}}}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp{\\sign{+}}{\\css{\\grp{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}'
										+'{\\sign{=}}'
										+'{\\mixed{\\str{$whole2}}{\\frac{\\input{$numnew2}}{\\fracstr{$answerDen}}}}}{border-bottom-with-padding}}}'
										+'{\\html{&nbsp;}}'
									+'}{well}',
						controls: {
							"checkAnswer": true,
							"help": true
						}
					}, {
						problem: '\\rowgrp'
									+'{\\grp{\\html{<span style="font-size:550%;">&nbsp;</span>}}{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp{\\sign{+}}{\\css{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}{border-bottom-with-padding}}}',
						answer: '\\css'
									+'{\\rowgrp'
										+'{\\html{Determine the lowest common denominator (LCD) of the fractions:}}'
										+'{\\html{&nbsp;}}'
										+'{\\html{$answerDen}}'
										+'{\\html{&nbsp;}}'
										+'{\\html{Use the LCD to convert the fractions:}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp{\\html{<span style="font-size:550%;">&nbsp;</span>}}{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}'
										+'{\\sign{=}}'
										+'{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$numnew1}}{\\fracstr{$answerDen}}}}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp{\\sign{+}}{\\css{\\grp{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}'
										+'{\\sign{=}}'
										+'{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$numnew2}}{\\fracstr{$answerDen}}}}}{border-bottom-with-padding}}}'
										+'{\\html{&nbsp;}}'
										+'{\\ins{Add the fractions:}}'
										+'{\\grp{\\html{<span style="font-size:550%;">&nbsp;</span>}}{\\mixed{\\str{$whole1}}{\\frac{\\str{$numnew1}}{\\str{$answerDen}}}}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp{\\sign{+}}{\\grp{\\css{\\mixed{\\str{$whole2}}{\\frac{\\str{$numnew2}}{\\str{$answerDen}}}}{border-bottom-with-padding}}}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp{\\html{<span style="font-size:300%;">&nbsp;</span>}}{\\mixed{\\input{$wholeanswer1}}{\\frac{\\input{$numanswer1}}{\\input{$answerDen}}}}}'
										+'{\\html{&nbsp;}}'
									+'}{well}',
						controls: {
							"checkAnswer": true,
							"help": true
						}
					}, {
						problem: '\\rowgrp'
									+'{\\grp{\\html{<span style="font-size:550%;">&nbsp;</span>}}{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp{\\sign{+}}{\\css{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}{border-bottom-with-padding}}}',
						answer: '\\css'
									+'{\\rowgrp'
										+'{\\html{Determine the lowest common denominator (LCD) of the fractions:}}'
										+'{\\html{&nbsp;}}'
										+'{\\html{$answerDen}}'
										+'{\\html{&nbsp;}}'
										+'{\\html{Use the LCD to convert the fractions:}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp{\\html{<span style="font-size:550%;">&nbsp;</span>}}{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}'
										+'{\\sign{=}}'
										+'{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$numnew1}}{\\fracstr{$answerDen}}}}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp{\\sign{+}}{\\css{\\grp{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}'
										+'{\\sign{=}}'
										+'{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$numnew2}}{\\fracstr{$answerDen}}}}}{border-bottom-with-padding}}}'
										+'{\\html{&nbsp;}}'
										+'{\\html{Add the fractions:}}'
										+'{\\grp{\\html{<span style="font-size:550%;">&nbsp;</span>}}{\\mixed{\\str{$whole1}}{\\frac{\\str{$numnew1}}{\\str{$answerDen}}}}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp{\\sign{+}}{\\grp{\\css{\\mixed{\\str{$whole2}}{\\frac{\\str{$numnew2}}{\\str{$answerDen}}}}{border-bottom-with-padding}}}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp{\\html{<span style="font-size:550%;">&nbsp;</span>}}{\\mixed{\\fracstr{$wholeanswer1}}{\\frac{\\fracstr{$numanswer1}}{\\fracstr{$answerDen}}}}}'
										+'{\\html{&nbsp;}}'
										+'{\\ins{Rewrite the answer as a mixed number with a proper fraction:}}'
										+'{\\grp{\\mixed{\\str{$wholeanswer1}}{\\frac{\\str{$numanswer1}}{\\str{$answerDen}}}}{\\sign{\xA0 \xA0 = \xA0 \xA0}}{\\mixed{\\input{$wholeanswer2}}{\\frac{\\input{$numanswer2}}{\\input{$answerDen}}}}}'
									+'}{well}',
						controls: {
							"checkAnswer": true,
							"help": true,
							"fixBottomRight": true
						}
					}]
				}]
            },
			second: {
                title: 'Adding Mixed Numbers',
				children: [{
					title: 'Main Answer',
					children: [{
						problem: '',
						answer: '\\css{\\rowgrp'
						+'{\\grp{\\sign{\xA0 \xA0}}{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}}'
						+'{\\html{&nbsp;}}'
						+'{\\css{\\grp{\\sign{+}}{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}}{border-bottom-with-padding}}'
						+'{\\html{&nbsp;}}'
						+'{\\grp{\\sign{\xA0 \xA0}}{\\mixed{\\input{$wholeanswer2}}{\\frac{\\input{$numanswer2}}{\\input{$answerDen}}}}}}'
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
									+'{\\grp{\\html{<span style="font-size:550%;">&nbsp;</span>}}{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp{\\sign{+}}{\\css{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}{border-bottom-with-padding}}}',
						answer: '\\rowgrp'
									+'{\\ins{Determine the lowest common denominator (LCD) of the fractions:}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp{\\input{$answerDen}}}',
						controls: {
							"checkAnswer": true,
							"help": true
						},
					}, {
						problem: '\\rowgrp'
									+'{\\grp{\\html{<span style="font-size:550%;">&nbsp;</span>}}{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp{\\sign{+}}{\\css{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}{border-bottom-with-padding}}}',
						answer: '\\css'
									+'{\\rowgrp'
										+'{\\html{Determine the lowest common denominator (LCD) of the fractions:}}'
										+'{\\html{&nbsp;}}'
										+'{\\html{$answerDen}}'
										+'{\\html{&nbsp;}}'
										+'{\\ins{Use the LCD to convert the fractions:}}'
										+'{\\grp{\\html{<span style="font-size:550%;">&nbsp;</span>}}{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}'
										+'{\\sign{=}}'
										+'{\\mixed{\\str{$whole1}}{\\frac{\\input{$numnew1}}{\\fracstr{$answerDen}}}}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp{\\sign{+}}{\\css{\\grp{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}'
										+'{\\sign{=}}'
										+'{\\mixed{\\str{$whole2}}{\\frac{\\input{$numnew2}}{\\fracstr{$answerDen}}}}}{border-bottom-with-padding}}}'
										+'{\\html{&nbsp;}}'
									+'}{well}',
						controls: {
							"checkAnswer": true,
							"help": true
						}
					}, {
						problem: '\\rowgrp'
									+'{\\grp{\\html{<span style="font-size:550%;">&nbsp;</span>}}{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp{\\sign{+}}{\\css{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}{border-bottom-with-padding}}}',
						answer: '\\css'
									+'{\\rowgrp'
										+'{\\html{Determine the lowest common denominator (LCD) of the fractions:}}'
										+'{\\html{&nbsp;}}'
										+'{\\html{$answerDen}}'
										+'{\\html{&nbsp;}}'
										+'{\\html{Use the LCD to convert the fractions:}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp{\\html{<span style="font-size:550%;">&nbsp;</span>}}{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}'
										+'{\\sign{=}}'
										+'{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$numnew1}}{\\fracstr{$answerDen}}}}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp{\\sign{+}}{\\css{\\grp{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}'
										+'{\\sign{=}}'
										+'{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$numnew2}}{\\fracstr{$answerDen}}}}}{border-bottom-with-padding}}}'
										+'{\\html{&nbsp;}}'
										+'{\\ins{Add the fractions:}}'
										+'{\\grp{\\html{<span style="font-size:550%;">&nbsp;</span>}}{\\mixed{\\str{$whole1}}{\\frac{\\str{$numnew1}}{\\str{$answerDen}}}}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp{\\sign{+}}{\\grp{\\css{\\mixed{\\str{$whole2}}{\\frac{\\str{$numnew2}}{\\str{$answerDen}}}}{border-bottom-with-padding}}}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp{\\html{<span style="font-size:300%;">&nbsp;</span>}}{\\mixed{\\input{$wholeanswer1}}{\\frac{\\input{$numanswer1}}{\\input{$answerDen}}}}}'
										+'{\\html{&nbsp;}}'
									+'}{well}',
						controls: {
							"checkAnswer": true,
							"help": true
						}
					}]
				}]
            },
			third: {
                title: 'Adding Mixed Numbers',
				children: [{
					title: 'Main Answer',
					children: [{
						problem: '',
						answer: '\\css{\\rowgrp'
						+'{\\grp{\\sign{\xA0 \xA0}}{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}}'
						+'{\\html{&nbsp;}}'
						+'{\\css{\\grp{\\sign{+}}{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}}{border-bottom-with-padding}}'
						+'{\\html{&nbsp;}}'
						+'{\\grp{\\sign{\xA0 \xA0}}{\\mixed{\\input{$wholeanswer2}}{\\frac{\\input{$numanswer2}}{\\input{$answerDen2}}}}}}'
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
									+'{\\grp{\\html{<span style="font-size:550%;">&nbsp;</span>}}{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp{\\sign{+}}{\\css{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}{border-bottom-with-padding}}}',
						answer: '\\rowgrp'
									+'{\\ins{Determine the lowest common denominator (LCD) of the fractions:}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp{\\input{$answerDen1}}}',
						controls: {
							"checkAnswer": true,
							"help": true
						},
					}, {
						problem: '\\rowgrp'
									+'{\\grp{\\html{<span style="font-size:550%;">&nbsp;</span>}}{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp{\\sign{+}}{\\css{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}{border-bottom-with-padding}}}',
						answer: '\\css'
									+'{\\rowgrp'
										+'{\\html{Determine the lowest common denominator (LCD) of the fractions:}}'
										+'{\\html{&nbsp;}}'
										+'{\\html{$answerDen1}}'
										+'{\\html{&nbsp;}}'
										+'{\\ins{Use the LCD to convert the fractions:}}'
										+'{\\grp{\\html{<span style="font-size:550%;">&nbsp;</span>}}{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}'
										+'{\\sign{=}}'
										+'{\\mixed{\\str{$whole1}}{\\frac{\\input{$numnew1}}{\\fracstr{$answerDen1}}}}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp{\\sign{+}}{\\css{\\grp{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}'
										+'{\\sign{=}}'
										+'{\\mixed{\\str{$whole2}}{\\frac{\\input{$numnew2}}{\\fracstr{$answerDen1}}}}}{border-bottom-with-padding}}}'
										+'{\\html{&nbsp;}}'
									+'}{well}',
						controls: {
							"checkAnswer": true,
							"help": true
						}
					}, {
						problem: '\\rowgrp'
									+'{\\grp{\\html{<span style="font-size:550%;">&nbsp;</span>}}{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp{\\sign{+}}{\\css{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}{border-bottom-with-padding}}}',
						answer: '\\css'
									+'{\\rowgrp'
										+'{\\html{Determine the lowest common denominator (LCD) of the fractions:}}'
										+'{\\html{&nbsp;}}'
										+'{\\html{$answerDen1}}'
										+'{\\html{&nbsp;}}'
										+'{\\html{Use the LCD to convert the fractions:}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp{\\html{<span style="font-size:550%;">&nbsp;</span>}}{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}'
										+'{\\sign{=}}'
										+'{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$numnew1}}{\\fracstr{$answerDen1}}}}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp{\\sign{+}}{\\css{\\grp{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}'
										+'{\\sign{=}}'
										+'{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$numnew2}}{\\fracstr{$answerDen1}}}}}{border-bottom-with-padding}}}'
										+'{\\html{&nbsp;}}'
										+'{\\ins{Add the fractions:}}'
										+'{\\grp{\\html{<span style="font-size:550%;">&nbsp;</span>}}{\\mixed{\\str{$whole1}}{\\frac{\\str{$numnew1}}{\\str{$answerDen1}}}}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp{\\sign{+}}{\\grp{\\css{\\mixed{\\str{$whole2}}{\\frac{\\str{$numnew2}}{\\str{$answerDen1}}}}{border-bottom-with-padding}}}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp{\\html{<span style="font-size:300%;">&nbsp;</span>}}{\\mixed{\\input{$wholeanswer1}}{\\frac{\\input{$numanswer1}}{\\input{$answerDen1}}}}}'
										+'{\\html{&nbsp;}}'
									+'}{well}',
						controls: {
							"checkAnswer": true,
							"help": true
						}
					}, {
						problem: '\\rowgrp'
									+'{\\grp{\\html{<span style="font-size:550%;">&nbsp;</span>}}{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp{\\sign{+}}{\\css{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}{border-bottom-with-padding}}}',
						answer: '\\css'
									+'{\\rowgrp'
										+'{\\html{Determine the lowest common denominator (LCD) of the fractions:}}'
										+'{\\html{&nbsp;}}'
										+'{\\html{$answerDen1}}'
										+'{\\html{&nbsp;}}'
										+'{\\html{Use the LCD to convert the fractions:}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp{\\html{<span style="font-size:550%;">&nbsp;</span>}}{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}'
										+'{\\sign{=}}'
										+'{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$numnew1}}{\\fracstr{$answerDen1}}}}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp{\\sign{+}}{\\css{\\grp{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}'
										+'{\\sign{=}}'
										+'{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$numnew2}}{\\fracstr{$answerDen1}}}}}{border-bottom-with-padding}}}'
										+'{\\html{&nbsp;}}'
										+'{\\html{Add the fractions:}}'
										+'{\\grp{\\html{<span style="font-size:550%;">&nbsp;</span>}}{\\mixed{\\str{$whole1}}{\\frac{\\str{$numnew1}}{\\str{$answerDen1}}}}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp{\\sign{+}}{\\grp{\\css{\\mixed{\\str{$whole2}}{\\frac{\\str{$numnew2}}{\\str{$answerDen1}}}}{border-bottom-with-padding}}}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp{\\html{<span style="font-size:550%;">&nbsp;</span>}}{\\mixed{\\fracstr{$wholeanswer1}}{\\frac{\\fracstr{$numanswer1}}{\\fracstr{$answerDen1}}}}}'
										+'{\\html{&nbsp;}}'
										+'{\\reducefrac{\\mixed{\\str{$wholeanswer2}}{\\frac{\\fracstr{$numanswer1}}{\\fracstr{$answerDen1}}}}}'
									+'}{well}',
						controls: {
							"checkAnswer": true,
							"help": false,
							"fixBottomRight": true
						}
					}]
				}]
			},
			fourth: {
                title: 'Adding Mixed Numbers',
				children: [{
					title: 'Main Answer',
					children: [{
						problem: '',
						answer: '\\css{\\rowgrp'
						+'{\\grp{\\sign{\xA0 \xA0}}{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}}'
						+'{\\html{&nbsp;}}'
						+'{\\grp{\\sign{\xA0 \xA0}}{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}}'
						+'{\\html{&nbsp;}}'
						+'{\\css{\\grp{\\sign{+}}{\\mixed{\\str{$whole3}}{\\frac{\\fracstr{$num3}}{\\fracstr{$den3}}}}}{border-bottom-with-padding}}'
						+'{\\html{&nbsp;}}'
						+'{\\grp{\\sign{\xA0 \xA0}}{\\mixed{\\input{$wholeanswer2}}{\\frac{\\input{$numanswer3}}{\\input{$answerDen2}}}}}}'
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
									+'{\\grp{\\html{<span style="font-size:550%;">&nbsp;</span>}}{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp{\\html{<span style="font-size:550%;">&nbsp;</span>}}{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp{\\sign{+}}{\\css{\\mixed{\\str{$whole3}}{\\frac{\\fracstr{$num3}}{\\fracstr{$den3}}}}{border-bottom-with-padding}}}',
						answer: '\\rowgrp'
									+'{\\ins{Determine the lowest common denominator (LCD) of the fractions:}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp{\\input{$answerDen1}}}',
						controls: {
							"checkAnswer": true,
							"help": true
						},
					}, {
						problem: '\\rowgrp'
									+'{\\grp{\\html{<span style="font-size:550%;">&nbsp;</span>}}{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp{\\html{<span style="font-size:550%;">&nbsp;</span>}}{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp{\\sign{+}}{\\css{\\mixed{\\str{$whole3}}{\\frac{\\fracstr{$num3}}{\\fracstr{$den3}}}}{border-bottom-with-padding}}}',
						answer: '\\css'
									+'{\\rowgrp'
										+'{\\html{Determine the lowest common denominator (LCD) of the fractions:}}'
										+'{\\html{&nbsp;}}'
										+'{\\html{$answerDen1}}'
										+'{\\html{&nbsp;}}'
										+'{\\ins{Use the LCD to convert the fractions:}}'
										+'{\\grp{\\html{<span style="font-size:550%;">&nbsp;</span>}}{\\mixed{\\str{$whole1}}{\\frac{\\str{$num1}}{\\str{$den1}}}}'
										+'{\\sign{=}}'
										+'{\\mixed{\\str{$whole1}}{\\frac{\\input{$numnew1}}{\\str{$answerDen1}}}}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp{\\html{<span style="font-size:550%;">&nbsp;</span>}}{\\mixed{\\str{$whole2}}{\\frac{\\str{$num2}}{\\str{$den2}}}}'
										+'{\\sign{=}}'
										+'{\\mixed{\\str{$whole2}}{\\frac{\\input{$numnew2}}{\\str{$answerDen1}}}}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp{\\sign{+}}{\\css{\\grp{\\mixed{\\str{$whole3}}{\\frac{\\str{$num3}}{\\str{$den3}}}}'
										+'{\\sign{=}}'
										+'{\\mixed{\\str{$whole3}}{\\frac{\\input{$numnew3}}{\\str{$answerDen1}}}}}{border-bottom-with-padding}}}'
										+'{\\html{&nbsp;}}'
									+'}{well}',
						controls: {
							"checkAnswer": true,
							"help": true
						}
					}, {
						problem: '\\rowgrp'
									+'{\\grp{\\html{<span style="font-size:550%;">&nbsp;</span>}}{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp{\\html{<span style="font-size:550%;">&nbsp;</span>}}{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp{\\sign{+}}{\\css{\\mixed{\\str{$whole3}}{\\frac{\\fracstr{$num3}}{\\fracstr{$den3}}}}{border-bottom-with-padding}}}',
						answer: '\\css'
									+'{\\rowgrp'
										+'{\\html{Determine the lowest common denominator (LCD) of the fractions:}}'
										+'{\\html{&nbsp;}}'
										+'{\\html{$answerDen1}}'
										+'{\\html{&nbsp;}}'
										+'{\\html{Use the LCD to convert the fractions:}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp{\\html{<span style="font-size:550%;">&nbsp;</span>}}{\\mixed{\\str{$whole1}}{\\frac{\\str{$num1}}{\\str{$den1}}}}'
										+'{\\sign{=}}'
										+'{\\mixed{\\fracstr{$whole1}}{\\frac{\\fracstr{$numnew1}}{\\fracstr{$answerDen1}}}}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp{\\html{<span style="font-size:550%;">&nbsp;</span>}}{\\mixed{\\str{$whole2}}{\\frac{\\str{$num2}}{\\str{$den2}}}}'
										+'{\\sign{=}}'
										+'{\\mixed{\\fracstr{$whole2}}{\\frac{\\fracstr{$numnew2}}{\\fracstr{$answerDen1}}}}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp{\\sign{+}}{\\css{\\grp{\\mixed{\\str{$whole3}}{\\frac{\\str{$num3}}{\\str{$den3}}}}'
										+'{\\sign{=}}'
										+'{\\mixed{\\fracstr{$whole3}}{\\frac{\\fracstr{$numnew3}}{\\fracstr{$answerDen1}}}}}{border-bottom-with-padding}}}'
										+'{\\html{&nbsp;}}'
										+'{\\ins{Add the fractions:}}'
										+'{\\grp{\\html{<span style="font-size:550%;">&nbsp;</span>}}{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$numnew1}}{\\fracstr{$answerDen1}}}}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp{\\html{<span style="font-size:550%;">&nbsp;</span>}}{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$numnew2}}{\\fracstr{$answerDen1}}}}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp{\\sign{+}}{\\grp{\\css{\\mixed{\\str{$whole3}}{\\frac{\\fracstr{$numnew3}}{\\fracstr{$answerDen1}}}}{border-bottom-with-padding}}}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp{\\html{<span style="font-size:550%;">&nbsp;</span>}}{\\mixed{\\input{$wholeanswer1}}{\\frac{\\input{$numanswer1}}{\\input{$answerDen1}}}}}'
									+'}{well}',
						controls: {
							"checkAnswer": true,
							"help": true,
							"fixBottomRight": true
						}
					}, {
						problem: '\\rowgrp'
									+'{\\grp{\\html{<span style="font-size:550%;">&nbsp;</span>}}{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp{\\html{<span style="font-size:550%;">&nbsp;</span>}}{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp{\\sign{+}}{\\css{\\mixed{\\str{$whole3}}{\\frac{\\fracstr{$num3}}{\\fracstr{$den3}}}}{border-bottom-with-padding}}}',
						answer: '\\css'
									+'{\\rowgrp'
										+'{\\html{Determine the lowest common denominator (LCD) of the fractions:}}'
										+'{\\html{&nbsp;}}'
										+'{\\html{$answerDen1}}'
										+'{\\html{&nbsp;}}'
										+'{\\html{Use the LCD to convert the fractions:}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp{\\html{<span style="font-size:550%;">&nbsp;</span>}}{\\mixed{\\str{$whole1}}{\\frac{\\str{$num1}}{\\str{$den1}}}}'
										+'{\\sign{=}}'
										+'{\\mixed{\\fracstr{$whole1}}{\\frac{\\fracstr{$numnew1}}{\\fracstr{$answerDen1}}}}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp{\\html{<span style="font-size:550%;">&nbsp;</span>}}{\\mixed{\\str{$whole2}}{\\frac{\\str{$num2}}{\\str{$den2}}}}'
										+'{\\sign{=}}'
										+'{\\mixed{\\fracstr{$whole2}}{\\frac{\\fracstr{$numnew2}}{\\fracstr{$answerDen1}}}}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp{\\sign{+}}{\\css{\\grp{\\mixed{\\str{$whole3}}{\\frac{\\str{$num3}}{\\str{$den3}}}}'
										+'{\\sign{=}}'
										+'{\\mixed{\\fracstr{$whole3}}{\\frac{\\fracstr{$numnew3}}{\\fracstr{$answerDen1}}}}}{border-bottom-with-padding}}}'
										+'{\\html{&nbsp;}}'
										+'{\\html{Add the fractions:}}'
										+'{\\grp{\\html{<span style="font-size:550%;">&nbsp;</span>}}{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$numnew1}}{\\fracstr{$answerDen1}}}}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp{\\html{<span style="font-size:550%;">&nbsp;</span>}}{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$numnew2}}{\\fracstr{$answerDen1}}}}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp{\\sign{+}}{\\grp{\\css{\\mixed{\\str{$whole3}}{\\frac{\\fracstr{$numnew3}}{\\fracstr{$answerDen1}}}}{border-bottom-with-padding}}}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp{\\html{<span style="font-size:550%;">&nbsp;</span>}}{\\mixed{\\fracstr{$wholeanswer1}}{\\frac{\\fracstr{$numanswer1}}{\\fracstr{$answerDen1}}}}}'
										+'{\\html{&nbsp;}}'
										+'{\\reducefrac{\\mixed{\\str{$wholeanswer1}}{\\frac{\\fracstr{$numanswer1}}{\\fracstr{$answerDen1}}}}}'
									+'}{well}',
						controls: {
							"checkAnswer": true,
							"help": false,
							"fixBottomRight": true
						}
					}, {
						problem: '\\rowgrp'
									+'{\\grp{\\html{<span style="font-size:550%;">&nbsp;</span>}}{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp{\\html{<span style="font-size:550%;">&nbsp;</span>}}{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp{\\sign{+}}{\\css{\\mixed{\\str{$whole3}}{\\frac{\\fracstr{$num3}}{\\fracstr{$den3}}}}{border-bottom-with-padding}}}',
						answer: '\\css'
									+'{\\rowgrp'
										+'{\\html{Determine the lowest common denominator (LCD) of the fractions:}}'
										+'{\\html{&nbsp;}}'
										+'{\\html{$answerDen1}}'
										+'{\\html{&nbsp;}}'
										+'{\\html{Use the LCD to convert the fractions:}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp{\\html{<span style="font-size:550%;">&nbsp;</span>}}{\\mixed{\\str{$whole1}}{\\frac{\\str{$num1}}{\\str{$den1}}}}'
										+'{\\sign{=}}'
										+'{\\mixed{\\fracstr{$whole1}}{\\frac{\\fracstr{$numnew1}}{\\fracstr{$answerDen1}}}}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp{\\html{<span style="font-size:550%;">&nbsp;</span>}}{\\mixed{\\str{$whole2}}{\\frac{\\str{$num2}}{\\str{$den2}}}}'
										+'{\\sign{=}}'
										+'{\\mixed{\\fracstr{$whole2}}{\\frac{\\fracstr{$numnew2}}{\\fracstr{$answerDen1}}}}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp{\\sign{+}}{\\css{\\grp{\\mixed{\\str{$whole3}}{\\frac{\\str{$num3}}{\\str{$den3}}}}'
										+'{\\sign{=}}'
										+'{\\mixed{\\fracstr{$whole3}}{\\frac{\\fracstr{$numnew3}}{\\fracstr{$answerDen1}}}}}{border-bottom-with-padding}}}'
										+'{\\html{&nbsp;}}'
										+'{\\html{Add the fractions:}}'
										+'{\\grp{\\html{<span style="font-size:550%;">&nbsp;</span>}}{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$numnew1}}{\\fracstr{$answerDen1}}}}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp{\\html{<span style="font-size:550%;">&nbsp;</span>}}{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$numnew2}}{\\fracstr{$answerDen1}}}}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp{\\sign{+}}{\\grp{\\css{\\mixed{\\str{$whole3}}{\\frac{\\fracstr{$numnew3}}{\\fracstr{$answerDen1}}}}{border-bottom-with-padding}}}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp{\\html{<span style="font-size:550%;">&nbsp;</span>}}{\\mixed{\\fracstr{$wholeanswer1}}{\\frac{\\fracstr{$numanswer1}}{\\fracstr{$answerDen1}}}}}'
										+'{\\html{&nbsp;}}'
										+'{\\ins{Rewrite the reduced fraction $wholeanswer1 <sup>$numanswer2</sup>&#8260;<sub>$answerDen2</sub> as a mixed number with a proper fraction:}}'
										+'{\\grp{\\mixed{\\str{$wholeanswer1}}{\\frac{\\str{$numanswer2}}{\\str{$answerDen2}}}}{\\sign{\xA0 \xA0 = \xA0 \xA0}}{\\mixed{\\input{$wholeanswer2}}{\\frac{\\input{$numanswer3}}{\\input{$answerDen2}}}}}'
									+'}{well}',
						controls: {
							"checkAnswer": true,
							"help": true,
							"fixBottomRight": true
						}
					}]
				}]
            },
			fifth: {
                title: 'Adding Mixed Numbers',
				children: [{
					title: 'Main Answer',
					children: [{
						problem: '',
						answer: '\\css{\\rowgrp'
						+'{\\grp{\\sign{\xA0 \xA0}}{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}}'
						+'{\\html{&nbsp;}}'
						+'{\\grp{\\sign{\xA0 \xA0}}{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}}'
						+'{\\html{&nbsp;}}'
						+'{\\css{\\grp{\\sign{+}}{\\mixed{\\str{$whole3}}{\\frac{\\fracstr{$num3}}{\\fracstr{$den3}}}}}{border-bottom-with-padding}}'
						+'{\\html{&nbsp;}}'
						+'{\\grp{\\sign{\xA0 \xA0}}{\\mixed{\\input{$wholeanswer1}}{\\frac{\\input{$numanswer1}}{\\input{$answerDen1}}}}}}'
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
									+'{\\grp{\\html{<span style="font-size:550%;">&nbsp;</span>}}{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp{\\html{<span style="font-size:550%;">&nbsp;</span>}}{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp{\\sign{+}}{\\css{\\mixed{\\str{$whole3}}{\\frac{\\fracstr{$num3}}{\\fracstr{$den3}}}}{border-bottom-with-padding}}}',
						answer: '\\rowgrp'
									+'{\\ins{Determine the lowest common denominator (LCD) of the fractions:}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp{\\input{$answerDen1}}}',
						controls: {
							"checkAnswer": true,
							"help": true
						},
					}, {
						problem: '\\rowgrp'
									+'{\\grp{\\html{<span style="font-size:550%;">&nbsp;</span>}}{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp{\\html{<span style="font-size:550%;">&nbsp;</span>}}{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp{\\sign{+}}{\\css{\\mixed{\\str{$whole3}}{\\frac{\\fracstr{$num3}}{\\fracstr{$den3}}}}{border-bottom-with-padding}}}',
						answer: '\\css'
									+'{\\rowgrp'
										+'{\\html{Determine the lowest common denominator (LCD) of the fractions:}}'
										+'{\\html{&nbsp;}}'
										+'{\\html{$answerDen1}}'
										+'{\\html{&nbsp;}}'
										+'{\\ins{Use the LCD to convert the fractions:}}'
										+'{\\grp{\\html{<span style="font-size:550%;">&nbsp;</span>}}{\\mixed{\\str{$whole1}}{\\frac{\\str{$num1}}{\\str{$den1}}}}'
										+'{\\sign{=}}'
										+'{\\mixed{\\str{$whole1}}{\\frac{\\input{$numnew1}}{\\str{$answerDen1}}}}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp{\\html{<span style="font-size:550%;">&nbsp;</span>}}{\\mixed{\\str{$whole2}}{\\frac{\\str{$num2}}{\\str{$den2}}}}'
										+'{\\sign{=}}'
										+'{\\mixed{\\str{$whole2}}{\\frac{\\input{$numnew2}}{\\str{$answerDen1}}}}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp{\\sign{+}}{\\css{\\grp{\\mixed{\\str{$whole3}}{\\frac{\\str{$num3}}{\\str{$den3}}}}'
										+'{\\sign{=}}'
										+'{\\mixed{\\str{$whole3}}{\\frac{\\input{$numnew3}}{\\str{$answerDen1}}}}}{border-bottom-with-padding}}}'
										+'{\\html{&nbsp;}}'
									+'}{well}',
						controls: {
							"checkAnswer": true,
							"help": true
						}
					}, {
						problem: '\\rowgrp'
									+'{\\grp{\\html{<span style="font-size:550%;">&nbsp;</span>}}{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp{\\html{<span style="font-size:550%;">&nbsp;</span>}}{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp{\\sign{+}}{\\css{\\mixed{\\str{$whole3}}{\\frac{\\fracstr{$num3}}{\\fracstr{$den3}}}}{border-bottom-with-padding}}}',
						answer: '\\css'
									+'{\\rowgrp'
										+'{\\html{Determine the lowest common denominator (LCD) of the fractions:}}'
										+'{\\html{&nbsp;}}'
										+'{\\html{$answerDen1}}'
										+'{\\html{&nbsp;}}'
										+'{\\html{Use the LCD to convert the fractions:}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp{\\html{<span style="font-size:550%;">&nbsp;</span>}}{\\mixed{\\str{$whole1}}{\\frac{\\str{$num1}}{\\str{$den1}}}}'
										+'{\\sign{=}}'
										+'{\\mixed{\\fracstr{$whole1}}{\\frac{\\fracstr{$numnew1}}{\\fracstr{$answerDen1}}}}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp{\\html{<span style="font-size:550%;">&nbsp;</span>}}{\\mixed{\\str{$whole2}}{\\frac{\\str{$num2}}{\\str{$den2}}}}'
										+'{\\sign{=}}'
										+'{\\mixed{\\fracstr{$whole2}}{\\frac{\\fracstr{$numnew2}}{\\fracstr{$answerDen1}}}}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp{\\sign{+}}{\\css{\\grp{\\mixed{\\str{$whole3}}{\\frac{\\str{$num3}}{\\str{$den3}}}}'
										+'{\\sign{=}}'
										+'{\\mixed{\\fracstr{$whole3}}{\\frac{\\fracstr{$numnew3}}{\\fracstr{$answerDen1}}}}}{border-bottom-with-padding}}}'
										+'{\\html{&nbsp;}}'
										+'{\\ins{Add the fractions:}}'
										+'{\\grp{\\html{<span style="font-size:550%;">&nbsp;</span>}}{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$numnew1}}{\\fracstr{$answerDen1}}}}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp{\\html{<span style="font-size:550%;">&nbsp;</span>}}{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$numnew2}}{\\fracstr{$answerDen1}}}}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp{\\sign{+}}{\\grp{\\css{\\mixed{\\str{$whole3}}{\\frac{\\fracstr{$numnew3}}{\\fracstr{$answerDen1}}}}{border-bottom-with-padding}}}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp{\\html{<span style="font-size:550%;">&nbsp;</span>}}{\\mixed{\\input{$wholeanswer1}}{\\frac{\\input{$numanswer1}}{\\input{$answerDen1}}}}}'
									+'}{well}',
						controls: {
							"checkAnswer": true,
							"help": true,
							"fixBottomRight": true
						}
					}]
				}]
            },
			sixth: {
                title: 'Adding Mixed Numbers',
				children: [{
					title: 'Main Answer',
					children: [{
						problem: '',
						answer: '\\css{\\rowgrp'
						+'{\\grp{\\sign{\xA0 \xA0}}{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}}'
						+'{\\html{&nbsp;}}'
						+'{\\grp{\\sign{\xA0 \xA0}}{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}}'
						+'{\\html{&nbsp;}}'
						+'{\\css{\\grp{\\sign{+}}{\\mixed{\\str{$whole3}}{\\frac{\\fracstr{$num3}}{\\fracstr{$den3}}}}}{border-bottom-with-padding}}'
						+'{\\html{&nbsp;}}'
						+'{\\grp{\\sign{\xA0 \xA0}}{\\mixed{\\input{$wholeanswer2}}{\\frac{\\input{$numanswer2}}{\\input{$answerDen2}}}}}}'
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
									+'{\\grp{\\html{<span style="font-size:550%;">&nbsp;</span>}}{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp{\\html{<span style="font-size:550%;">&nbsp;</span>}}{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp{\\sign{+}}{\\css{\\mixed{\\str{$whole3}}{\\frac{\\fracstr{$num3}}{\\fracstr{$den3}}}}{border-bottom-with-padding}}}',
						answer: '\\rowgrp'
									+'{\\ins{Determine the lowest common denominator (LCD) of the fractions:}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp{\\input{$answerDen1}}}',
						controls: {
							"checkAnswer": true,
							"help": true
						},
					}, {
						problem: '\\rowgrp'
									+'{\\grp{\\html{<span style="font-size:550%;">&nbsp;</span>}}{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp{\\html{<span style="font-size:550%;">&nbsp;</span>}}{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp{\\sign{+}}{\\css{\\mixed{\\str{$whole3}}{\\frac{\\fracstr{$num3}}{\\fracstr{$den3}}}}{border-bottom-with-padding}}}',
						answer: '\\css'
									+'{\\rowgrp'
										+'{\\html{Determine the lowest common denominator (LCD) of the fractions:}}'
										+'{\\html{&nbsp;}}'
										+'{\\html{$answerDen1}}'
										+'{\\html{&nbsp;}}'
										+'{\\ins{Use the LCD to convert the fractions:}}'
										+'{\\grp{\\html{<span style="font-size:550%;">&nbsp;</span>}}{\\mixed{\\str{$whole1}}{\\frac{\\str{$num1}}{\\str{$den1}}}}'
										+'{\\sign{=}}'
										+'{\\mixed{\\str{$whole1}}{\\frac{\\input{$numnew1}}{\\str{$answerDen1}}}}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp{\\html{<span style="font-size:550%;">&nbsp;</span>}}{\\mixed{\\str{$whole2}}{\\frac{\\str{$num2}}{\\str{$den2}}}}'
										+'{\\sign{=}}'
										+'{\\mixed{\\str{$whole2}}{\\frac{\\input{$numnew2}}{\\str{$answerDen1}}}}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp{\\sign{+}}{\\css{\\grp{\\mixed{\\str{$whole3}}{\\frac{\\str{$num3}}{\\str{$den3}}}}'
										+'{\\sign{=}}'
										+'{\\mixed{\\str{$whole3}}{\\frac{\\input{$numnew3}}{\\str{$answerDen1}}}}}{border-bottom-with-padding}}}'
										+'{\\html{&nbsp;}}'
									+'}{well}',
						controls: {
							"checkAnswer": true,
							"help": true
						}
					}, {
						problem: '\\rowgrp'
									+'{\\grp{\\html{<span style="font-size:550%;">&nbsp;</span>}}{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp{\\html{<span style="font-size:550%;">&nbsp;</span>}}{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp{\\sign{+}}{\\css{\\mixed{\\str{$whole3}}{\\frac{\\fracstr{$num3}}{\\fracstr{$den3}}}}{border-bottom-with-padding}}}',
						answer: '\\css'
									+'{\\rowgrp'
										+'{\\html{Determine the lowest common denominator (LCD) of the fractions:}}'
										+'{\\html{&nbsp;}}'
										+'{\\html{$answerDen1}}'
										+'{\\html{&nbsp;}}'
										+'{\\html{Use the LCD to convert the fractions:}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp{\\html{<span style="font-size:550%;">&nbsp;</span>}}{\\mixed{\\str{$whole1}}{\\frac{\\str{$num1}}{\\str{$den1}}}}'
										+'{\\sign{=}}'
										+'{\\mixed{\\fracstr{$whole1}}{\\frac{\\fracstr{$numnew1}}{\\fracstr{$answerDen1}}}}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp{\\html{<span style="font-size:550%;">&nbsp;</span>}}{\\mixed{\\str{$whole2}}{\\frac{\\str{$num2}}{\\str{$den2}}}}'
										+'{\\sign{=}}'
										+'{\\mixed{\\fracstr{$whole2}}{\\frac{\\fracstr{$numnew2}}{\\fracstr{$answerDen1}}}}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp{\\sign{+}}{\\css{\\grp{\\mixed{\\str{$whole3}}{\\frac{\\str{$num3}}{\\str{$den3}}}}'
										+'{\\sign{=}}'
										+'{\\mixed{\\fracstr{$whole3}}{\\frac{\\fracstr{$numnew3}}{\\fracstr{$answerDen1}}}}}{border-bottom-with-padding}}}'
										+'{\\html{&nbsp;}}'
										+'{\\ins{Add the fractions:}}'
										+'{\\grp{\\html{<span style="font-size:550%;">&nbsp;</span>}}{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$numnew1}}{\\fracstr{$answerDen1}}}}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp{\\html{<span style="font-size:550%;">&nbsp;</span>}}{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$numnew2}}{\\fracstr{$answerDen1}}}}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp{\\sign{+}}{\\grp{\\css{\\mixed{\\str{$whole3}}{\\frac{\\fracstr{$numnew3}}{\\fracstr{$answerDen1}}}}{border-bottom-with-padding}}}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp{\\html{<span style="font-size:550%;">&nbsp;</span>}}{\\mixed{\\input{$wholeanswer1}}{\\frac{\\input{$numanswer1}}{\\input{$answerDen1}}}}}'
									+'}{well}',
						controls: {
							"checkAnswer": true,
							"help": true,
							"fixBottomRight": true
						}
					}, {
						problem: '\\rowgrp'
									+'{\\grp{\\html{<span style="font-size:550%;">&nbsp;</span>}}{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp{\\html{<span style="font-size:550%;">&nbsp;</span>}}{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp{\\sign{+}}{\\css{\\mixed{\\str{$whole3}}{\\frac{\\fracstr{$num3}}{\\fracstr{$den3}}}}{border-bottom-with-padding}}}',
						answer: '\\css'
									+'{\\rowgrp'
										+'{\\html{Determine the lowest common denominator (LCD) of the fractions:}}'
										+'{\\html{&nbsp;}}'
										+'{\\html{$answerDen1}}'
										+'{\\html{&nbsp;}}'
										+'{\\html{Use the LCD to convert the fractions:}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp{\\html{<span style="font-size:550%;">&nbsp;</span>}}{\\mixed{\\str{$whole1}}{\\frac{\\str{$num1}}{\\str{$den1}}}}'
										+'{\\sign{=}}'
										+'{\\mixed{\\fracstr{$whole1}}{\\frac{\\fracstr{$numnew1}}{\\fracstr{$answerDen1}}}}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp{\\html{<span style="font-size:550%;">&nbsp;</span>}}{\\mixed{\\str{$whole2}}{\\frac{\\str{$num2}}{\\str{$den2}}}}'
										+'{\\sign{=}}'
										+'{\\mixed{\\fracstr{$whole2}}{\\frac{\\fracstr{$numnew2}}{\\fracstr{$answerDen1}}}}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp{\\sign{+}}{\\css{\\grp{\\mixed{\\str{$whole3}}{\\frac{\\str{$num3}}{\\str{$den3}}}}'
										+'{\\sign{=}}'
										+'{\\mixed{\\fracstr{$whole3}}{\\frac{\\fracstr{$numnew3}}{\\fracstr{$answerDen1}}}}}{border-bottom-with-padding}}}'
										+'{\\html{&nbsp;}}'
										+'{\\html{Add the fractions:}}'
										+'{\\grp{\\html{<span style="font-size:550%;">&nbsp;</span>}}{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$numnew1}}{\\fracstr{$answerDen1}}}}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp{\\html{<span style="font-size:550%;">&nbsp;</span>}}{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$numnew2}}{\\fracstr{$answerDen1}}}}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp{\\sign{+}}{\\grp{\\css{\\mixed{\\str{$whole3}}{\\frac{\\fracstr{$numnew3}}{\\fracstr{$answerDen1}}}}{border-bottom-with-padding}}}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp{\\html{<span style="font-size:550%;">&nbsp;</span>}}{\\mixed{\\fracstr{$wholeanswer1}}{\\frac{\\fracstr{$numanswer1}}{\\fracstr{$answerDen1}}}}}'
										+'{\\html{&nbsp;}}'
										+'{\\reducefrac{\\mixed{\\str{$wholeanswer1}}{\\frac{\\fracstr{$numanswer1}}{\\fracstr{$answerDen1}}}}}'
									+'}{well}',
						controls: {
							"checkAnswer": true,
							"help": false,
							"fixBottomRight": true
						}
					}]
				}]
            },
        },
        data = [
			// problem 1
            { whole1: 5, num1: 4, den1: 5, whole2: 2, num2: 3, den2: 4, wholeanswer1: 7, wholeanswer2: 8, numanswer1: 31,  numanswer2: 11,answerDen: 20, numnew1: 16, numnew2: 15, template: 'main' },
			// problem 2
			{ whole1: 2, num1: 5, den1: 6, whole2: 1, num2: 8, den2: 9, wholeanswer1: 3, wholeanswer2: 4, numanswer1: 31,  numanswer2: 13,answerDen: 18, numnew1: 15, numnew2: 16, template: 'main' },
			// problem 3
			{ whole1: 2, num1: 2, den1: 3, whole2: 1, num2: 3, den2: 5, wholeanswer1: 3, wholeanswer2: 4, numanswer1: 19,  numanswer2: 4,answerDen: 15, numnew1: 10, numnew2: 9, template: 'main' },
			// problem 4
			{ whole1: 2, num1: 1, den1: 10, whole2: 1 , num2: 5, den2: '\xA06\xA0', wholeanswer1: 3, numanswer1: 28, answerDen1: 30, numnew1: 3, numnew2: 25, wholeanswer2: 3, numanswer2: 14, answerDen2: 15, template: 'third' },
			// problem 5
			{ whole1: 2, num1: 3, den1: 8, whole2: 1, num2: 1, den2: 5, wholeanswer1: 3, wholeanswer2: 3, numanswer1: 23,  numanswer2: 23,answerDen: 40, numnew1: 15, numnew2: '8', template: 'second' },
			// problem 6
			{ whole1: 2, num1: 7, den1: 12, whole2: 1 , num2: 1, den2: '\xA06\xA0', wholeanswer1: 3, numanswer1: 9, answerDen1: 12, numnew1: 7, numnew2: 2, wholeanswer2: 3, numanswer2: 3, answerDen2: 4, template: 'third' },
			// problem 7
			{ whole1: 2, num1: 2, den1: 9, whole2: 1, num2: 5, den2: 8, wholeanswer1: 3, wholeanswer2: 3, numanswer1: 61,  numanswer2: 61,answerDen: 72, numnew1: 16, numnew2: 45, template: 'second' },
			// problem 8
			{ whole1: 2, num1: 1, den1: 12, whole2: 1, num2: 3, den2: '\xA04\xA0', whole3: 4,  num3: 5, den3: '\xA06\xA0', wholeanswer1: 7, numanswer1: 20, answerDen1: 12, numnew1: '\xA01', numnew2: '\xA09', numnew3: 10, wholeanswer2: 8, numanswer2: 5, answerDen2: 3, numanswer3: 2, template: 'fourth' },
			// problem 9
			{ whole1: 2, num1: 5, den1: '\xA08\xA0', whole2: 1, num2: 1, den2: 10, whole3: 1, num3: 1, den3: '\xA04\xA0', wholeanswer1: 4, numanswer1: 39, answerDen1: 40, numnew1: 25, numnew2: '\xA04', numnew3: 10, wholeanswer2: 4, numanswer2: 39, answerDen2: 40, template: 'fifth' },
			// problem 10
			{ whole1: 2, num1: 1, den1: 6, whole2: 3, num2: 1, den2: 4, whole3: 1, num3: 1, den3: 4, wholeanswer1: 6, numanswer1: 8, answerDen1: 12, numnew1: 2, numnew2: 3, numnew3: 3, wholeanswer2: 6, numanswer2: 2, answerDen2: 3, template: 'sixth' },
        ];

    return dataUtils.build(desc, template, data);
}]);
