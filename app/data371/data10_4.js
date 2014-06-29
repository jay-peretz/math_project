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
						+'{\\grp{\\sign{\xA0 \xA0}}{\\mixed{\\str{$whole1}}{\\frac{\\str{$num1}}{\\str{$den1}}}}}'
						+'{\\html{&nbsp;}}'
						+'{\\css{\\grp{\\sign{-}}{\\mixed{\\str{$whole2}}{\\frac{\\str{$num2}}{\\str{$den2}}}}}{border-bottom-with-padding}}'
						+'{\\html{&nbsp;}}'
						+'{\\grp{\\sign{\xA0 \xA0}}{\\mixed{\\input{$wholeanswer}}{\\frac{\\input{$numanswer}}{\\input{$denanswer}}}}}}'
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
									+'{\\grp{\\html{<span style="font-size:550%;">&nbsp;</span>}}{\\mixed{\\str{$whole1}}{\\frac{\\str{$num1}}{\\str{$den1}}}}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp{\\sign{&minus;}}{\\css{\\mixed{\\str{$whole2}}{\\frac{\\str{$num2}}{\\str{$den2}}}}{border-bottom-with-padding}}'
								+'}',
						answer: '\\rowgrp'
									+'{\\ins{Determine the lowest common denominator (LCD) of the fractions:}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp{\\input{$denanswer}}'
								+'}',
						controls: {
							"checkAnswer": true,
							"help": true
						},
					}, {
						problem: '\\rowgrp'
									+'{\\grp{\\html{<span style="font-size:550%;">&nbsp;</span>}}{\\mixed{\\str{$whole1}}{\\frac{\\str{$num1}}{\\str{$den1}}}}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp{\\sign{&minus;}}{\\css{\\mixed{\\str{$whole2}}{\\frac{\\str{$num2}}{\\str{$den2}}}}{border-bottom-with-padding}}'
								+'}',
						answer: '\\css'
								+'{\\rowgrp'
									+'{\\html{Determine the lowest common denominator (LCD) of the fractions:}}'
									+'{\\html{&nbsp;}}'
									+'{\\html{$denanswer}}'
									+'{\\html{&nbsp;}}'
									+'{\\ins{Use the LCD to convert the fractions:}}'
									+'{\\grp{\\html{<span style="font-size:550%;">&nbsp;</span>}}{\\mixed{\\str{$whole1}}{\\frac{\\str{$num1}}{\\str{$den1}}}}'
										+'{\\sign{=}}'
										+'{\\mixed{\\str{$whole1}}{\\frac{\\input{$numnew1}}{\\str{$denanswer}}}}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp{\\sign{-}}{\\css{\\grp{\\mixed{\\str{$whole2}}{\\frac{\\str{$num2}}{\\str{$den2}}}}'
										+'{\\sign{=}}'
										+'{\\mixed{\\str{$whole2}}{\\frac{\\input{$numnew2}}{\\str{$denanswer}}}}}{border-bottom-with-padding}}}'
									+'{\\html{&nbsp;}}'
								+'}{well}',
						controls: {
							"checkAnswer": true,
							"help": true
						}
					}, {
						problem: '\\rowgrp'
									+'{\\grp{\\html{<span style="font-size:550%;">&nbsp;</span>}}{\\mixed{\\str{$whole1}}{\\frac{\\str{$num1}}{\\str{$den1}}}}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp{\\sign{&minus;}}{\\css{\\mixed{\\str{$whole2}}{\\frac{\\str{$num2}}{\\str{$den2}}}}{border-bottom-with-padding}}'
								+'}',
						answer: '\\css'
									+'{\\rowgrp'
										+'{\\html{Determine the lowest common denominator (LCD) of the fractions:}}'
										+'{\\html{&nbsp;}}'
										+'{\\html{$denanswer}}'
										+'{\\html{&nbsp;}}'
										+'{\\html{Use the LCD to convert the fractions:}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp{\\html{<span style="font-size:550%;">&nbsp;</span>}}{\\mixed{\\str{$whole1}}{\\frac{\\str{$num1}}{\\str{$den1}}}}'
										+'{\\sign{=}}'
										+'{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$numnew1}}{\\str{$denanswer}}}}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp{\\sign{-}}{\\css{\\grp{\\mixed{\\str{$whole2}}{\\frac{\\str{$num2}}{\\str{$den2}}}}'
										+'{\\sign{=}}'
										+'{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$numnew2}}{\\str{$denanswer}}}}}{border-bottom-with-padding}}}'
									+'{\\html{&nbsp;}}'
										+'{\\ins{Subtract the fractions:}}'
										+'{\\grp{\\html{<span style="font-size:550%;">&nbsp;</span>}}{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$numnew1}}{\\str{$denanswer}}}}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp{\\sign{-}}{\\grp{\\css{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$numnew2}}{\\str{$denanswer}}}}{border-bottom-with-padding}}}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp{\\html{<span style="font-size:300%;">&nbsp;</span>}}{\\mixed{\\input{$wholeanswer}}{\\frac{\\input{$numanswer}}{\\input{$denanswer}}}}}'
										+'{\\html{&nbsp;}}'
									+'}{well}',
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
						+'{\\grp{\\sign{\xA0 \xA0}}{\\mixed{\\str{$whole1}}{\\frac{\\str{$num1}}{\\str{$den1}}}}}'
						+'{\\html{&nbsp;}}'
						+'{\\css{\\grp{\\sign{-}}{\\mixed{\\str{$whole2}}{\\frac{\\str{$num2}}{\\str{$den2}}}}}{border-bottom-with-padding}}'
						+'{\\html{&nbsp;}}'
						+'{\\grp{\\sign{\xA0 \xA0}}{\\mixed{\\input{$wholeanswer}}{\\frac{\\input{$numanswer2}}{\\input{$denanswer2}}}}}}'
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
									+'{\\grp{\\html{<span style="font-size:550%;">&nbsp;</span>}}{\\mixed{\\str{$whole1}}{\\frac{\\str{$num1}}{\\str{$den1}}}}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp{\\sign{&minus;}}{\\css{\\mixed{\\str{$whole2}}{\\frac{\\str{$num2}}{\\str{$den2}}}}{border-bottom-with-padding}}'
								+'}',
						answer: '\\rowgrp'
									+'{\\ins{Determine the lowest common denominator (LCD) of the fractions:}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp{\\input{$denanswer1}}'
								+'}',
						controls: {
							"checkAnswer": true,
							"help": true
						},
					}, {
						problem: '\\rowgrp'
									+'{\\grp{\\html{<span style="font-size:550%;">&nbsp;</span>}}{\\mixed{\\str{$whole1}}{\\frac{\\str{$num1}}{\\str{$den1}}}}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp{\\sign{&minus;}}{\\css{\\mixed{\\str{$whole2}}{\\frac{\\str{$num2}}{\\str{$den2}}}}{border-bottom-with-padding}}'
								+'}',
						answer: '\\css'
								+'{\\rowgrp'
									+'{\\html{Determine the lowest common denominator (LCD) of the fractions:}}'
									+'{\\html{&nbsp;}}'
									+'{\\html{$denanswer1}}'
									+'{\\html{&nbsp;}}'
									+'{\\ins{Use the LCD to convert the fractions:}}'
									+'{\\grp{\\html{<span style="font-size:550%;">&nbsp;</span>}}{\\mixed{\\str{$whole1}}{\\frac{\\str{$num1}}{\\str{$den1}}}}'
										+'{\\sign{=}}'
										+'{\\mixed{\\str{$whole1}}{\\frac{\\input{$numnew1}}{\\str{$denanswer1}}}}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp{\\sign{-}}{\\css{\\grp{\\mixed{\\str{$whole2}}{\\frac{\\str{$num2}}{\\str{$den2}}}}'
										+'{\\sign{=}}'
										+'{\\mixed{\\str{$whole2}}{\\frac{\\input{$numnew2}}{\\str{$denanswer1}}}}}{border-bottom-with-padding}}}'
									+'{\\html{&nbsp;}}'
								+'}{well}',
						controls: {
							"checkAnswer": true,
							"help": true
						}
					}, {
						problem: '\\rowgrp'
									+'{\\grp{\\html{<span style="font-size:550%;">&nbsp;</span>}}{\\mixed{\\str{$whole1}}{\\frac{\\str{$num1}}{\\str{$den1}}}}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp{\\sign{&minus;}}{\\css{\\mixed{\\str{$whole2}}{\\frac{\\str{$num2}}{\\str{$den2}}}}{border-bottom-with-padding}}'
								+'}',
						answer: '\\css'
									+'{\\rowgrp'
										+'{\\html{Determine the lowest common denominator (LCD) of the fractions:}}'
										+'{\\html{&nbsp;}}'
										+'{\\html{$denanswer1}}'
										+'{\\html{&nbsp;}}'
										+'{\\html{Use the LCD to convert the fractions:}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp{\\html{<span style="font-size:550%;">&nbsp;</span>}}{\\mixed{\\str{$whole1}}{\\frac{\\str{$num1}}{\\str{$den1}}}}'
										+'{\\sign{=}}'
										+'{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$numnew1}}{\\str{$denanswer1}}}}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp{\\sign{-}}{\\css{\\grp{\\mixed{\\str{$whole2}}{\\frac{\\str{$num2}}{\\str{$den2}}}}'
										+'{\\sign{=}}'
										+'{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$numnew2}}{\\str{$denanswer1}}}}}{border-bottom-with-padding}}}'
									+'{\\html{&nbsp;}}'
										+'{\\ins{Subtract the fractions:}}'
										+'{\\grp{\\html{<span style="font-size:550%;">&nbsp;</span>}}{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$numnew1}}{\\str{$denanswer1}}}}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp{\\sign{-}}{\\grp{\\css{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$numnew2}}{\\str{$denanswer1}}}}{border-bottom-with-padding}}}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp{\\html{<span style="font-size:300%;">&nbsp;</span>}}{\\mixed{\\input{$wholeanswer}}{\\frac{\\input{$numanswer1}}{\\input{$denanswer1}}}}}'
										+'{\\html{&nbsp;}}'
									+'}{well}',
						controls: {
							"checkAnswer": true,
							"help": true
						}
					}, {
						problem: '\\rowgrp'
									+'{\\grp{\\html{<span style="font-size:550%;">&nbsp;</span>}}{\\mixed{\\str{$whole1}}{\\frac{\\str{$num1}}{\\str{$den1}}}}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp{\\sign{&minus;}}{\\css{\\mixed{\\str{$whole2}}{\\frac{\\str{$num2}}{\\str{$den2}}}}{border-bottom-with-padding}}'
								+'}',
						answer: '\\css'
									+'{\\rowgrp'
										+'{\\html{Determine the lowest common denominator (LCD) of the fractions:}}'
										+'{\\html{&nbsp;}}'
										+'{\\html{$denanswer1}}'
										+'{\\html{&nbsp;}}'
										+'{\\html{Use the LCD to convert the fractions:}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp{\\html{<span style="font-size:550%;">&nbsp;</span>}}{\\mixed{\\str{$whole1}}{\\frac{\\str{$num1}}{\\str{$den1}}}}'
										+'{\\sign{=}}'
										+'{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$numnew1}}{\\str{$denanswer1}}}}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp{\\sign{-}}{\\css{\\grp{\\mixed{\\str{$whole2}}{\\frac{\\str{$num2}}{\\str{$den2}}}}'
										+'{\\sign{=}}'
										+'{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$numnew2}}{\\str{$denanswer1}}}}}{border-bottom-with-padding}}}'
										+'{\\html{&nbsp;}}'
										+'{\\html{Subtract the fractions:}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp{\\html{<span style="font-size:550%;">&nbsp;</span>}}{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$numnew1}}{\\str{$denanswer1}}}}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp{\\sign{-}}{\\grp{\\css{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$numnew2}}{\\str{$denanswer1}}}}{border-bottom-with-padding}}}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp{\\html{<span style="font-size:550%;">&nbsp;</span>}}{\\mixed{\\fracstr{$wholeanswer}}{\\frac{\\fracstr{$numanswer1}}{\\fracstr{$denanswer1}}}}}'
										+'{\\html{&nbsp;}}'
										+'{\\reducefrac{mixed{\\str{$wholeanswer}}{\\frac{\\fracstr{$numanswer1}}{\\fracstr{$denanswer1}}}}}'
									+'}{well}',
						controls: {
							"checkAnswer": true,
							"help": false,
							"fixBottomRight": true
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
						+'{\\grp{\\sign{\xA0 \xA0}}{\\mixed{\\str{$whole1}}{\\frac{\\str{$num1}}{\\str{$den1}}}}}'
						+'{\\html{&nbsp;}}'
						+'{\\css{\\grp{\\sign{-}}{\\mixed{\\str{$whole2}}{\\frac{\\str{$num2}}{\\str{$den2}}}}}{border-bottom-with-padding}}'
						+'{\\html{&nbsp;}}'
						+'{\\grp{\\sign{\xA0 \xA0}}{\\mixed{\\input{$wholeanswer}}{\\frac{\\input{$numanswer2}}{\\input{$denanswer2}}}}}}'
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
									+'{\\grp{\\html{<span style="font-size:550%;">&nbsp;</span>}}{\\mixed{\\str{$whole1}}{\\frac{\\str{$num1}}{\\str{$den1}}}}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp{\\sign{&minus;}}{\\css{\\mixed{\\str{$whole2}}{\\frac{\\str{$num2}}{\\str{$den2}}}}{border-bottom-with-padding}}'
								+'}',
						answer: '\\rowgrp'
									+'{\\ins{Determine the lowest common denominator (LCD) of the fractions:}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp{\\input{$denanswer}}'
								+'}',
						controls: {
							"checkAnswer": true,
							"help": true
						},
					}, {
						problem: '\\rowgrp'
									+'{\\grp{\\html{<span style="font-size:550%;">&nbsp;</span>}}{\\mixed{\\str{$whole1}}{\\frac{\\str{$num1}}{\\str{$den1}}}}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp{\\sign{&minus;}}{\\css{\\mixed{\\str{$whole2}}{\\frac{\\str{$num2}}{\\str{$den2}}}}{border-bottom-with-padding}}'
								+'}',
						answer: '\\css'
								+'{\\rowgrp'
									+'{\\html{Determine the lowest common denominator (LCD) of the fractions:}}'
									+'{\\html{&nbsp;}}'
									+'{\\html{$denanswer}}'
									+'{\\html{&nbsp;}}'
									+'{\\ins{Use the LCD to convert the fractions:}}'
									+'{\\grp{\\html{<span style="font-size:550%;">&nbsp;</span>}}{\\mixed{\\str{$whole1}}{\\frac{\\str{$num1}}{\\str{$den1}}}}'
										+'{\\sign{=}}'
										+'{\\mixed{\\str{$whole1}}{\\frac{\\input{$numnew1}}{\\str{$denanswer}}}}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp{\\sign{-}}{\\css{\\grp{\\mixed{\\str{$whole2}}{\\frac{\\str{$num2}}{\\str{$den2}}}}'
										+'{\\sign{=}}'
										+'{\\mixed{\\str{$whole2}}{\\frac{\\input{$numnew2}}{\\str{$denanswer}}}}}{border-bottom-with-padding}}}'
									+'{\\html{&nbsp;}}'
								+'}{well}',
						controls: {
							"checkAnswer": true,
							"help": true
						}
					}, {
						problem: '\\rowgrp'
									+'{\\grp{\\html{<span style="font-size:550%;">&nbsp;</span>}}{\\mixed{\\str{$whole1}}{\\frac{\\str{$num1}}{\\str{$den1}}}}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp{\\sign{&minus;}}{\\css{\\mixed{\\str{$whole2}}{\\frac{\\str{$num2}}{\\str{$den2}}}}{border-bottom-with-padding}}'
								+'}',
						answer: '\\css'
								+'{\\rowgrp'
									+'{\\html{Determine the lowest common denominator (LCD) of the fractions:}}'
									+'{\\html{&nbsp;}}'
									+'{\\html{$denanswer}}'
									+'{\\html{&nbsp;}}'
									+'{\\html{Use the LCD to convert the fractions:}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp{\\html{<span style="font-size:550%;">&nbsp;</span>}}{\\mixed{\\str{$whole1}}{\\frac{\\str{$num1}}{\\str{$den1}}}}'
										+'{\\sign{=}}'
										+'{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$numnew1}}{\\str{$denanswer}}}}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp{\\sign{-}}{\\css{\\grp{\\mixed{\\str{$whole2}}{\\frac{\\str{$num2}}{\\str{$den2}}}}'
										+'{\\sign{=}}'
										+'{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$numnew2}}{\\str{$denanswer}}}}}{border-bottom-with-padding}}}'
									+'{\\html{&nbsp;}}'
									+'{\\ins{Do you need to borrow one whole?}}'
									+'{\\grp{\\btn{YES}{T}}{\\grp{\\html{&nbsp; &nbsp;}}}{\\btn{NO}{F}}}'
								+'}{well}',
						controls: {
							"checkAnswer": true,
							"help": true
						}
					}, {
						problem: '\\rowgrp'
									+'{\\grp{\\html{<span style="font-size:550%;">&nbsp;</span>}}{\\mixed{\\str{$whole1}}{\\frac{\\str{$num1}}{\\str{$den1}}}}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp{\\sign{&minus;}}{\\css{\\mixed{\\str{$whole2}}{\\frac{\\str{$num2}}{\\str{$den2}}}}{border-bottom-with-padding}}'
								+'}',
						answer: '\\css'
								+'{\\rowgrp'
									+'{\\html{Determine the lowest common denominator (LCD) of the fractions:}}'
									+'{\\html{&nbsp;}}'
									+'{\\html{$denanswer}}'
									+'{\\html{&nbsp;}}'
									+'{\\html{Use the LCD to convert the fractions:}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp{\\html{<span style="font-size:550%;">&nbsp;</span>}}{\\mixed{\\str{$whole1}}{\\frac{\\str{$num1}}{\\str{$den1}}}}'
										+'{\\sign{=}}'
										+'{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$numnew1}}{\\str{$denanswer}}}}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp{\\sign{-}}{\\css{\\grp{\\mixed{\\str{$whole2}}{\\frac{\\str{$num2}}{\\str{$den2}}}}'
										+'{\\sign{=}}'
										+'{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$numnew2}}{\\str{$denanswer}}}}}{border-bottom-with-padding}}}'
									+'{\\html{&nbsp;}}'
									+'{\\html{You need to borrow one whole.}}'
									+'{\\html{&nbsp;}}'
									+'{\\ins{Rewrite the fractional part of the minuend, borrowing one from the whole number:}}'									
									+'{\\grp{\\html{<span style="font-size:550%;">&nbsp;</span>}}{\\mixed{\\str{$whole1}}{\\frac{\\str{$numnew1}}{\\str{$denanswer}}}}'
										+'{\\sign{=}}'
										+'{\\mixed{\\str{$wholeReduced}}{\\frac{\\input{$numnew3}}{\\str{$denanswer}}}}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp{\\sign{-}}{\\css{\\grp{\\mixed{\\str{$whole2}}{\\frac{\\str{$numnew2}}{\\str{$denanswer}}}}'
										+'{\\sign{=}}'
										+'{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$numnew2}}{\\str{$denanswer}}}}}{border-bottom-with-padding}}}'
									+'{\\html{&nbsp;}}'
								+'}{well}',
						controls: {
							"checkAnswer": true,
							"help": true,
							"fixBottomRight": true
						}
					}, {
						problem: '\\rowgrp'
									+'{\\grp{\\html{<span style="font-size:550%;">&nbsp;</span>}}{\\mixed{\\str{$whole1}}{\\frac{\\str{$num1}}{\\str{$den1}}}}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp{\\sign{&minus;}}{\\css{\\mixed{\\str{$whole2}}{\\frac{\\str{$num2}}{\\str{$den2}}}}{border-bottom-with-padding}}'
								+'}',
						answer: '\\css'
								+'{\\rowgrp'
									+'{\\html{Determine the lowest common denominator (LCD) of the fractions:}}'
									+'{\\html{&nbsp;}}'
									+'{\\html{$denanswer}}'
									+'{\\html{&nbsp;}}'
									+'{\\html{Use the LCD to convert the fractions:}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp{\\html{<span style="font-size:550%;">&nbsp;</span>}}{\\mixed{\\str{$whole1}}{\\frac{\\str{$num1}}{\\str{$den1}}}}'
										+'{\\sign{=}}'
										+'{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$numnew1}}{\\str{$denanswer}}}}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp{\\sign{-}}{\\css{\\grp{\\mixed{\\str{$whole2}}{\\frac{\\str{$num2}}{\\str{$den2}}}}'
										+'{\\sign{=}}'
										+'{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$numnew2}}{\\str{$denanswer}}}}}{border-bottom-with-padding}}}'
									+'{\\html{&nbsp;}}'
									+'{\\html{You need to borrow one whole.}}'
									+'{\\html{&nbsp;}}'
									+'{\\html{Rewrite the fractional part of the minuend, borrowing one from the whole number:}}'									
									+'{\\grp{\\html{<span style="font-size:550%;">&nbsp;</span>}}{\\mixed{\\str{$whole1}}{\\frac{\\str{$numnew1}}{\\str{$denanswer}}}}'
										+'{\\sign{=}}'
										+'{\\mixed{\\str{$wholeReduced}}{\\frac{\\fracstr{$numnew3}}{\\str{$denanswer}}}}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp{\\sign{-}}{\\css{\\grp{\\mixed{\\str{$whole2}}{\\frac{\\str{$numnew2}}{\\str{$denanswer}}}}'
										+'{\\sign{=}}'
										+'{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$numnew2}}{\\str{$denanswer}}}}}{border-bottom-with-padding}}}'
									+'{\\html{&nbsp;}}'
									+'{\\ins{Subtract the fractions:}}'
									
									+'{\\grp{\\html{<span style="font-size:550%;">&nbsp;</span>}}{\\mixed{\\str{$wholeReduced}}{\\frac{\\str{$numnew3}}{\\str{$dennew1}}}}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp{\\sign{-}}{\\grp{\\css{\\mixed{\\str{$whole2}}{\\frac{\\str{$numnew2}}{\\str{$dennew1}}}}{border-bottom-with-padding}}}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp{\\html{<span style="font-size:300%;">&nbsp;</span>}}{\\mixed{\\input{$wholeanswer}}{\\frac{\\input{$numanswer}}{\\input{$dennew1}}}}}'
									+'{\\html{&nbsp;}}'
								+'}{well}',
						controls: {
							"checkAnswer": true,
							"help": true,
							"fixBottomRight": true
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
						+'{\\grp{\\sign{\xA0 \xA0}}{\\mixed{\\str{$whole1}}{\\frac{\\str{$num1}}{\\str{$den1}}}}}'
						+'{\\html{&nbsp;}}'
						+'{\\css{\\grp{\\sign{-}}{\\mixed{\\str{$whole2}}{\\frac{\\str{$num2}}{\\str{$den2}}}}}{border-bottom-with-padding}}'
						+'{\\html{&nbsp;}}'
						+'{\\grp{\\sign{\xA0 \xA0}}{\\mixed{\\input{$wholeanswer}}{\\frac{\\input{$numanswer2}}{\\input{$denanswer2}}}}}}'
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
									+'{\\grp{\\html{<span style="font-size:550%;">&nbsp;</span>}}{\\mixed{\\str{$whole1}}{\\frac{\\str{$num1}}{\\str{$den1}}}}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp{\\sign{&minus;}}{\\css{\\mixed{\\str{$whole2}}{\\frac{\\str{$num2}}{\\str{$den2}}}}{border-bottom-with-padding}}'
								+'}',
						answer: '\\rowgrp'
									+'{\\ins{Determine the lowest common denominator (LCD) of the fractions:}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp{\\input{$dennew1}}'
								+'}',
						controls: {
							"checkAnswer": true,
							"help": true
						},
					}, {
						problem: '\\rowgrp'
									+'{\\grp{\\html{<span style="font-size:550%;">&nbsp;</span>}}{\\mixed{\\str{$whole1}}{\\frac{\\str{$num1}}{\\str{$den1}}}}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp{\\sign{&minus;}}{\\css{\\mixed{\\str{$whole2}}{\\frac{\\str{$num2}}{\\str{$den2}}}}{border-bottom-with-padding}}'
								+'}',
						answer: '\\css'
								+'{\\rowgrp'
									+'{\\html{Determine the lowest common denominator (LCD) of the fractions:}}'
									+'{\\html{&nbsp;}}'
									+'{\\html{$dennew1}}'
									+'{\\html{&nbsp;}}'
									+'{\\ins{Use the LCD to convert the fractions:}}'
									+'{\\grp{\\html{<span style="font-size:550%;">&nbsp;</span>}}{\\mixed{\\str{$whole1}}{\\frac{\\str{$num1}}{\\str{$den1}}}}'
										+'{\\sign{=}}'
										+'{\\mixed{\\str{$whole1}}{\\frac{\\input{$numnew1}}{\\str{$dennew1}}}}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp{\\sign{-}}{\\css{\\grp{\\mixed{\\str{$whole2}}{\\frac{\\str{$num2}}{\\str{$den2}}}}'
										+'{\\sign{=}}'
										+'{\\mixed{\\str{$whole2}}{\\frac{\\input{$numnew2}}{\\str{$dennew1}}}}}{border-bottom-with-padding}}}'
									+'{\\html{&nbsp;}}'
								+'}{well}',
						controls: {
							"checkAnswer": true,
							"help": true
						}
					}, {
						problem: '\\rowgrp'
									+'{\\grp{\\html{<span style="font-size:550%;">&nbsp;</span>}}{\\mixed{\\str{$whole1}}{\\frac{\\str{$num1}}{\\str{$den1}}}}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp{\\sign{&minus;}}{\\css{\\mixed{\\str{$whole2}}{\\frac{\\str{$num2}}{\\str{$den2}}}}{border-bottom-with-padding}}'
								+'}',
						answer: '\\css'
								+'{\\rowgrp'
									+'{\\html{Determine the lowest common denominator (LCD) of the fractions:}}'
									+'{\\html{&nbsp;}}'
									+'{\\html{$dennew1}}'
									+'{\\html{&nbsp;}}'
									+'{\\html{Use the LCD to convert the fractions:}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp{\\html{<span style="font-size:550%;">&nbsp;</span>}}{\\mixed{\\str{$whole1}}{\\frac{\\str{$num1}}{\\str{$den1}}}}'
										+'{\\sign{=}}'
										+'{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$numnew1}}{\\str{$dennew1}}}}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp{\\sign{-}}{\\css{\\grp{\\mixed{\\str{$whole2}}{\\frac{\\str{$num2}}{\\str{$den2}}}}'
										+'{\\sign{=}}'
										+'{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$numnew2}}{\\str{$dennew1}}}}}{border-bottom-with-padding}}}'
									+'{\\html{&nbsp;}}'
									+'{\\ins{Do you need to borrow one whole?}}'
									+'{\\grp{\\btn{YES}{T}}{\\grp{\\html{&nbsp; &nbsp;}}}{\\btn{NO}{F}}}'
								+'}{well}',
						controls: {
							"checkAnswer": true,
							"help": true
						}
					}, {
						problem: '\\rowgrp'
									+'{\\grp{\\html{<span style="font-size:550%;">&nbsp;</span>}}{\\mixed{\\str{$whole1}}{\\frac{\\str{$num1}}{\\str{$den1}}}}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp{\\sign{&minus;}}{\\css{\\mixed{\\str{$whole2}}{\\frac{\\str{$num2}}{\\str{$den2}}}}{border-bottom-with-padding}}'
								+'}',
						answer: '\\css'
								+'{\\rowgrp'
									+'{\\html{Determine the lowest common denominator (LCD) of the fractions:}}'
									+'{\\html{&nbsp;}}'
									+'{\\html{$dennew1}}'
									+'{\\html{&nbsp;}}'
									+'{\\html{Use the LCD to convert the fractions:}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp{\\html{<span style="font-size:550%;">&nbsp;</span>}}{\\mixed{\\str{$whole1}}{\\frac{\\str{$num1}}{\\str{$den1}}}}'
										+'{\\sign{=}}'
										+'{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$numnew1}}{\\str{$dennew1}}}}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp{\\sign{-}}{\\css{\\grp{\\mixed{\\str{$whole2}}{\\frac{\\str{$num2}}{\\str{$den2}}}}'
										+'{\\sign{=}}'
										+'{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$numnew2}}{\\str{$dennew1}}}}}{border-bottom-with-padding}}}'
									+'{\\html{&nbsp;}}'
									+'{\\html{You need to borrow one whole.}}'
									+'{\\html{&nbsp;}}'
									+'{\\ins{Rewrite the fractional part of the minuend, borrowing one from the whole number:}}'									
									+'{\\grp{\\html{<span style="font-size:550%;">&nbsp;</span>}}{\\mixed{\\str{$whole1}}{\\frac{\\str{$num1}}{\\str{$den1}}}}'
										+'{\\sign{=}}'
										+'{\\mixed{\\str{$wholeReduced}}{\\frac{\\input{$numnew3}}{\\str{$dennew1}}}}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp{\\sign{-}}{\\css{\\grp{\\mixed{\\str{$whole2}}{\\frac{\\str{$num2}}{\\str{$den2}}}}'
										+'{\\sign{=}}'
										+'{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$numnew2}}{\\str{$dennew1}}}}}{border-bottom-with-padding}}}'
									+'{\\html{&nbsp;}}'
								+'}{well}',
						controls: {
							"checkAnswer": true,
							"help": true,
							"fixBottomRight": true
						}
					}, {
						problem: '\\rowgrp'
									+'{\\grp{\\html{<span style="font-size:550%;">&nbsp;</span>}}{\\mixed{\\str{$whole1}}{\\frac{\\str{$num1}}{\\str{$den1}}}}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp{\\sign{&minus;}}{\\css{\\mixed{\\str{$whole2}}{\\frac{\\str{$num2}}{\\str{$den2}}}}{border-bottom-with-padding}}'
								+'}',
						answer: '\\css'
								+'{\\rowgrp'
									+'{\\html{Determine the lowest common denominator (LCD) of the fractions:}}'
									+'{\\html{&nbsp;}}'
									+'{\\html{$dennew1}}'
									+'{\\html{&nbsp;}}'
									+'{\\html{Use the LCD to convert the fractions:}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp{\\html{<span style="font-size:550%;">&nbsp;</span>}}{\\mixed{\\str{$whole1}}{\\frac{\\str{$num1}}{\\str{$den1}}}}'
										+'{\\sign{=}}'
										+'{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$numnew1}}{\\str{$dennew1}}}}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp{\\sign{-}}{\\css{\\grp{\\mixed{\\str{$whole2}}{\\frac{\\str{$num2}}{\\str{$den2}}}}'
										+'{\\sign{=}}'
										+'{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$numnew2}}{\\str{$dennew1}}}}}{border-bottom-with-padding}}}'
									+'{\\html{&nbsp;}}'
									+'{\\html{You need to borrow one whole.}}'
									+'{\\html{&nbsp;}}'
									+'{\\html{Rewrite the fractional part of the minuend, borrowing one from the whole number:}}'									
									+'{\\grp{\\html{<span style="font-size:550%;">&nbsp;</span>}}{\\mixed{\\str{$whole1}}{\\frac{\\str{$num1}}{\\str{$den1}}}}'
										+'{\\sign{=}}'
										+'{\\mixed{\\str{$wholeReduced}}{\\frac{\\fracstr{$numnew3}}{\\str{$dennew1}}}}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp{\\sign{-}}{\\css{\\grp{\\mixed{\\str{$whole2}}{\\frac{\\str{$num2}}{\\str{$den2}}}}'
										+'{\\sign{=}}'
										+'{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$numnew2}}{\\str{$dennew1}}}}}{border-bottom-with-padding}}}'
									+'{\\html{&nbsp;}}'
									+'{\\ins{Subtract the fractions:}}'
									
									+'{\\grp{\\html{<span style="font-size:550%;">&nbsp;</span>}}{\\mixed{\\str{$wholeReduced}}{\\frac{\\str{$numnew3}}{\\str{$dennew1}}}}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp{\\sign{-}}{\\grp{\\css{\\mixed{\\str{$whole2}}{\\frac{\\str{$numnew2}}{\\str{$dennew1}}}}{border-bottom-with-padding}}}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp{\\html{<span style="font-size:300%;">&nbsp;</span>}}{\\mixed{\\input{$wholeanswer}}{\\frac{\\input{$numnew4}}{\\input{$dennew1}}}}}'
									+'{\\html{&nbsp;}}'
								+'}{well}',
						controls: {
							"checkAnswer": true,
							"help": true,
							"fixBottomRight": true
						}
					}, {
						problem: '\\rowgrp'
									+'{\\grp{\\html{<span style="font-size:550%;">&nbsp;</span>}}{\\mixed{\\str{$whole1}}{\\frac{\\str{$num1}}{\\str{$den1}}}}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp{\\sign{&minus;}}{\\css{\\mixed{\\str{$whole2}}{\\frac{\\str{$num2}}{\\str{$den2}}}}{border-bottom-with-padding}}'
								+'}',
						answer: '\\css'
								+'{\\rowgrp'
									+'{\\html{Determine the lowest common denominator (LCD) of the fractions:}}'
									+'{\\html{&nbsp;}}'
									+'{\\html{$dennew1}}'
									+'{\\html{&nbsp;}}'
									+'{\\html{Use the LCD to convert the fractions:}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp{\\html{<span style="font-size:550%;">&nbsp;</span>}}{\\mixed{\\str{$whole1}}{\\frac{\\str{$num1}}{\\str{$den1}}}}'
										+'{\\sign{=}}'
										+'{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$numnew1}}{\\str{$dennew1}}}}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp{\\sign{-}}{\\css{\\grp{\\mixed{\\str{$whole2}}{\\frac{\\str{$num2}}{\\str{$den2}}}}'
										+'{\\sign{=}}'
										+'{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$numnew2}}{\\str{$dennew1}}}}}{border-bottom-with-padding}}}'
									+'{\\html{&nbsp;}}'
									+'{\\html{You need to borrow one whole.}}'
									+'{\\html{&nbsp;}}'
									+'{\\html{Rewrite the fractional part of the minuend, borrowing one from the whole number:}}'									
									+'{\\grp{\\html{<span style="font-size:550%;">&nbsp;</span>}}{\\mixed{\\str{$whole1}}{\\frac{\\str{$num1}}{\\str{$den1}}}}'
										+'{\\sign{=}}'
										+'{\\mixed{\\str{$wholeReduced}}{\\frac{\\fracstr{$numnew3}}{\\str{$dennew1}}}}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp{\\sign{-}}{\\css{\\grp{\\mixed{\\str{$whole2}}{\\frac{\\str{$num2}}{\\str{$den2}}}}'
										+'{\\sign{=}}'
										+'{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$numnew2}}{\\str{$dennew1}}}}}{border-bottom-with-padding}}}'
									+'{\\html{&nbsp;}}'
									+'{\\html{Subtract the fractions:}}'
									
									+'{\\grp{\\html{<span style="font-size:550%;">&nbsp;</span>}}{\\mixed{\\str{$wholeReduced}}{\\frac{\\str{$numnew3}}{\\str{$dennew1}}}}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp{\\sign{-}}{\\grp{\\css{\\mixed{\\str{$whole2}}{\\frac{\\str{$numnew2}}{\\str{$dennew1}}}}{border-bottom-with-padding}}}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp{\\html{<span style="font-size:550%;">&nbsp;</span>}}{\\mixed{\\fracstr{$wholeanswer}}{\\frac{\\fracstr{$numnew4}}{\\fracstr{$dennew1}}}}}'
									+'{\\html{&nbsp;}}'
									+'{\\reducefrac{mixed{\\str{$wholeanswer}}{\\frac{\\fracstr{$numnew4}}{\\fracstr{$dennew1}}}}}'
								+'}{well}',
						controls: {
							"checkAnswer": true,
							"help": true,
							"fixBottomRight": true
						}
					}]
				}]
            },
        },
        data = [
			// problem 1
            { whole1: 2, num1: 4, den1: 5, whole2: 1, num2: 3, den2: 4, wholeanswer: 1, numanswer: 1, denanswer: 20, numnew1: 16, numnew2: 15, template: 'main' },
			// problem 2
			{ whole1: 3, num1: 8, den1: 9, whole2: 2, num2: 5, den2: 6, wholeanswer: 1, numanswer: 1, denanswer: 18, numnew1: 16, numnew2: 15, template: 'main' },
			// problem 3
			{ whole1: 5, num1: 2, den1: 3, whole2: 3, num2: 3, den2: 5, wholeanswer: 2, numanswer: 1, denanswer: 15, numnew1: 10, numnew2: 9, template: 'main' },
			// problem 4
			{ whole1: 6, num1: 9, den1: 10, whole2: 2, num2: 5, den2: '\xA06\xA0', wholeanswer: 4, numanswer1: 2, denanswer1: 30, numnew1: 27, numnew2: 25, numanswer2: 1, denanswer2: 15, template: 'second' },
			// problem 5
			{ whole1: 5, num1: 3, den1: 8, whole2: 2, num2: 3, den2: 5, wholeanswer: 2, numanswer: 31, denanswer: 40, numnew1: 15,  dennew1: 40, numnew2: 24, wholeReduced: 4, numnew3: 55, template: 'third' },
			// problem 6
			{ whole1: 3, num1: 5, den1: 12, whole2: 1, num2: 3, den2: '\xA04\xA0', wholeanswer: 1, numanswer: 2, denanswer: 3, numnew1: 5,   dennew1: 12, numnew2: 9, wholeReduced: 2, numnew3: 17, numnew4: 8, template: 'fourth' },
			// problem 7
			{ whole1: 6, num1: 7, den1: 9, whole2: 5, num2: 2, den2: 3, wholeanswer: 1, numanswer: 1, denanswer: 9, numnew1: 7, numnew2: 6, template: 'main' },
			// problem 8
			{ whole1: 4, num1: 1, den1: '\xA06\xA0', whole2: 1, num2: 3, den2: 10, wholeanswer: 2, numanswer: 13, denanswer: 15, numnew1: 5,   dennew1: 30, numnew2: 9, wholeReduced: 3, numnew3: 35, numnew4: 26, template: 'fourth' },
			// problem 9
			{ whole1: 5, num1: 9, den1: 10, whole2: 2, num2: 2, den2: '\xA05\xA0', wholeanswer: 3, numanswer1: 5, denanswer1: 10, numnew1: 9, numnew2: 4, numanswer2: 1, denanswer2: 2, template: 'second' },
			// problem 10
			{ whole1: 7, num1: 5, den1: 8, whole2: 5, num2: 4, den2: 5, wholeanswer: 1, numanswer: 33, denanswer: 40, numnew1: 25,  dennew1: 40, numnew2: 32, wholeReduced: 6, numnew3: 65, template: 'third' },
        ];

    return dataUtils.build(desc, template, data);
}]);