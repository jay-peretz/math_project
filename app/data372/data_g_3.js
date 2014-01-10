
/*global angular */

angular.module('mathSkills').service('data_g_3', ['dataUtils', function (dataUtils) {
    var desc = {
			title: 'G.3 Addition of Mixed Numbers',
			path: 'G.3-addition-of-mixed-numbers',
            children: []
        },
        template = {
            main: {
                title: 'Addition of Mixed Numbers',
				children: [{
					title: 'Main Answer',
					children: [{
						problem: '',
						answer: '\\css{\\grp'
								+'{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}'
								+'{\\sign{+}}{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}'
								+'{\\sign{=}}'
								+'{\\mixed{\\input{$wholeanswer}}{\\frac{\\input{$numanswer2}}{\\input{$answerDen}}}}}',
								//+'{centerTableText3}',
						controls: {
							"checkAnswer": true,
							"help": false,
							"workbook": true
						}
					}]
				}, {
					title: 'Workbook',
					children: [{
						problem: '\\grp'
									+'{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}'
									+'{\\sign{+}}'
									+'{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}'
								+'}',
						answer: '\\css'
									+'{\\rowgrp'
										+'{\\ins{Convert the mixed numbers to improper fractions:}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}'
											+'{\\sign{=}}'
											+'{\\frac{\\input{$numnew1}}{\\fracstr{$den1}}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}'
											+'{\\sign{=}}'
											+'{\\frac{\\input{$numnew2}}{\\fracstr{$den2}}}'
										+'}'
										+'{\\html{&nbsp;}}'
									+'}{well}',
						controls: {
							"checkAnswer": true,
							"help": true
						},
					}, {
						problem: '\\grp'
									+'{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}'
									+'{\\sign{+}}'
									+'{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}'
								+'}',
						answer: '\\css'
									+'{\\rowgrp'
										+'{\\html{Convert the mixed numbers to improper fractions:}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}'
											+'{\\sign{=}}'
											+'{\\frac{\\fracstr{$numnew1}}{\\fracstr{$den1}}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}'
											+'{\\sign{=}}'
											+'{\\frac{\\fracstr{$numnew2}}{\\fracstr{$den2}}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\ins{Determine the lowest common denominator (LCD) of the fractions:}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp{\\input{$answerDen}}}'
									+'}{well}',
						controls: {
							"checkAnswer": true,
							"help": true
						},
					}, {
						problem: '\\css'
									+'{\\grp'
										+'{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}'
										+'{\\sign{+}}'
										+'{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}'
									+'}{well}',
						answer: '\\css'
									+'{\\rowgrp'
										+'{\\html{Convert the mixed numbers to improper fractions:}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}'
											+'{\\sign{=}}'
											+'{\\frac{\\fracstr{$numnew1}}{\\fracstr{$den1}}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}'
											+'{\\sign{=}}'
											+'{\\frac{\\fracstr{$numnew2}}{\\fracstr{$den2}}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\html{Determine the lowest common denominator (LCD) of the fractions:}}'
										+'{\\html{&nbsp;}}'
										+'{\\html{$answerDen}}'
										+'{\\html{&nbsp;}}'
										+'{\\ins{Use the LCD to convert the fractions:}}'
										+'{\\grp'
											+'{\\frac{\\fracstr{$numnew1}}{\\fracstr{$den1}}}'
											+'{\\sign{=}}'
											+'{\\frac{\\input{$numlcd1}}{\\fracstr{$answerDen}}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\frac{\\fracstr{$numnew2}}{\\fracstr{$den2}}}'
											+'{\\sign{=}}'
											+'{\\frac{\\input{$numlcd2}}{\\fracstr{$answerDen}}}'
										+'}'
										+'{\\html{&nbsp;}}'
									+'}{well}',
						controls: {
							"checkAnswer": true,
							"help": true
						}
					}, {
						problem: '\\css{\\grp'
									+'{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}'
									+'{\\sign{+}}{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}',
						answer: '\\css'
									+'{\\rowgrp'
										+'{\\html{Convert the mixed numbers to improper fractions:}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}'
											+'{\\sign{=}}'
											+'{\\frac{\\fracstr{$numnew1}}{\\fracstr{$den1}}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}'
											+'{\\sign{=}}'
											+'{\\frac{\\fracstr{$numnew2}}{\\fracstr{$den2}}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\html{Determine the lowest common denominator (LCD) of the fractions:}}'
										+'{\\html{&nbsp;}}'
										+'{\\html{$answerDen}}'
										+'{\\html{&nbsp;}}'
										+'{\\html{Use the LCD to convert the fractions:}}'
										+'{\\grp'
											+'{\\frac{\\fracstr{$numnew1}}{\\fracstr{$den1}}}'
											+'{\\sign{=}}'
											+'{\\frac{\\fracstr{$numlcd1}}{\\fracstr{$answerDen}}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\frac{\\fracstr{$numnew2}}{\\fracstr{$den2}}}'
											+'{\\sign{=}}'
											+'{\\frac{\\fracstr{$numlcd2}}{\\fracstr{$answerDen}}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\ins{Add the fractions:}}'
										+'{\\grp'
											+'{\\frac'
												+'{\\grp'
													+'{\\str{$numlcd1}}'
													+'{\\sign{+}}'
													+'{\\str{$numlcd2}}'
												+'}'
												+'{\\fracstr{$answerDen}}'
											+'}'
											+'{\\sign{=}}'
											+'{\\frac{\\input{$numanswer1}}{\\fracstr{$answerDen}}}'
										+'}'
										+'{\\html{&nbsp;}}'
									+'}{well}',
						controls: {
							"checkAnswer": true,
							"help": true
						}
					}, {
						problem: '\\css{\\grp'
									+'{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}'
									+'{\\sign{+}}{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}',
						answer: '\\css'
									+'{\\rowgrp'
										+'{\\html{Convert the mixed numbers to improper fractions:}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}'
											+'{\\sign{=}}'
											+'{\\frac{\\fracstr{$numnew1}}{\\fracstr{$den1}}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}'
											+'{\\sign{=}}'
											+'{\\frac{\\fracstr{$numnew2}}{\\fracstr{$den2}}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\html{Determine the lowest common denominator (LCD) of the fractions:}}'
										+'{\\html{&nbsp;}}'
										+'{\\html{$answerDen}}'
										+'{\\html{&nbsp;}}'
										+'{\\html{Use the LCD to convert the fractions:}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\frac{\\fracstr{$numnew1}}{\\fracstr{$den1}}}'
											+'{\\sign{=}}'
											+'{\\frac{\\fracstr{$numlcd1}}{\\fracstr{$answerDen}}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\frac{\\fracstr{$numnew2}}{\\fracstr{$den2}}}'
											+'{\\sign{=}}'
											+'{\\frac{\\fracstr{$numlcd2}}{\\fracstr{$answerDen}}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\html{Add the fractions:}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\frac'
												+'{\\grp'
													+'{\\str{$numlcd1}}'
													+'{\\sign{+}}'
													+'{\\str{$numlcd2}}'
												+'}'
												+'{\\fracstr{$answerDen}}'
											+'}'
											+'{\\sign{=}}'
											+'{\\frac{\\fracstr{$numanswer1}}{\\fracstr{$answerDen}}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\ins{Rewrite the answer as a mixed number with a proper fraction:}}'
										+'{\\grp'
											+'{\\frac{\\str{$numanswer1}}{\\str{$answerDen}}}'
											+'{\\sign{ = }}'
											+'{\\mixed{\\input{$wholeanswer}}{\\frac{\\input{$numanswer2}}{\\input{$answerDen}}}}}'
									+'}{well}',
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
						problem: '',
						answer: '\\css{\\grp'
						+'{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}'
						+'{\\sign{+}}{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}'
						+'{\\sign{=}}'
						+'{\\mixed{\\input{$wholeanswer2}}{\\frac{\\input{$numanswer2}}{\\input{$answerDen}}}}}',
						//+'{centerTableText3}',
						controls: {
							"checkAnswer": true,
							"help": false,
							"workbook": true
						}
					}]
				}, {
					title: 'Workbook',
					children: [{
						problem: '\\css{\\grp'
									+'{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}'
									+'{\\sign{+}}{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}',
						answer: '\\rowgrp'
									+'{\\ins{Determine the lowest common denominator (LCD) of the fractions:}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp{\\input{$answerDen}}}',
						controls: {
							"checkAnswer": true,
							"help": true
						},
					}, {
						problem: '\\css{\\grp'
									+'{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}'
									+'{\\sign{+}}{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}',
						answer: '\\css'
									+'{\\rowgrp'
										+'{\\html{Determine the lowest common denominator (LCD) of the fractions:}}'
										+'{\\html{&nbsp;}}'
										+'{\\html{$answerDen}}'
										+'{\\html{&nbsp;}}'
										+'{\\ins{Use the LCD to convert the fractions:}}'
										+'{\\grp{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}'
										+'{\\sign{=}}'
										+'{\\mixed{\\str{$whole1}}{\\frac{\\input{$numnew1}}{\\fracstr{$answerDen}}}}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp{\\grp{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}'
										+'{\\sign{=}}'
										+'{\\mixed{\\str{$whole2}}{\\frac{\\input{$numnew2}}{\\fracstr{$answerDen}}}}}}'
										+'{\\html{&nbsp;}}'
									+'}{well}',
						controls: {
							"checkAnswer": true,
							"help": true
						}
					}, {
						problem: '\\css{\\grp'
									+'{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}'
									+'{\\sign{+}}{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}',
						answer: '\\css'
									+'{\\rowgrp'
										+'{\\html{Determine the lowest common denominator (LCD) of the fractions:}}'
										+'{\\html{&nbsp;}}'
										+'{\\html{$answerDen}}'
										+'{\\html{&nbsp;}}'
										+'{\\html{Use the LCD to convert the fractions:}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}'
										+'{\\sign{=}}'
										+'{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$numnew1}}{\\fracstr{$answerDen}}}}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}'
										+'{\\sign{=}}'
										+'{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$numnew2}}{\\fracstr{$answerDen}}}}}'
										+'{\\html{&nbsp;}}'
										+'{\\ins{Add the fractions:}}'
										+'{\\grp{\\mixed{\\str{$whole1}}{\\frac{\\str{$numnew1}}{\\str{$answerDen}}}}'
										+'{\\sign{+}}{\\grp{\\css{\\mixed{\\str{$whole2}}{\\frac{\\str{$numnew2}}{\\str{$answerDen}}}}}}'
										+'{\\sign{=}}'
										+'{\\mixed{\\input{$wholeanswer1}}{\\frac{\\input{$numanswer1}}{\\input{$answerDen}}}}}'
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
						answer: '\\css{\\grp'
								+'{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}'
								+'{\\sign{+}}{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}'
								+'{\\sign{=}}'
								+'{\\mixed{\\input{$wholeanswer1}}{\\frac{\\input{$numanswer3}}{\\input{$answerDen1}}}}}',
								//+'{centerTableText3}',
						controls: {
								"checkAnswer": true,
								"help": false,
								"workbook": true
						}
					}]
				}, {
					title: 'Workbook',
					children: [{
						problem: '\\css{\\grp'
								+'{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}'
								+'{\\sign{+}}{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}',
						answer: '\\css'
								+'{\\rowgrp'
								+'{\\ins{Convert the mixed numbers to improper fractions:}}'
								+'{\\grp'
									+'{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}'
									+'{\\sign{=}}'
									+'{\\frac{\\input{$numnew1}}{\\fracstr{$den1}}}'
								+'}'
								+'{\\html{&nbsp;}}'
								+'{\\grp'
									+'{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}'
									+'{\\sign{=}}'
									+'{\\frac{\\input{$numnew2}}{\\fracstr{$den2}}}'
								+'}'
								+'{\\html{&nbsp;}}'
							+'}{well}',
						controls: {
							"checkAnswer": true,
							"help": true
						},
					}, {
						problem: '\\css{\\grp'
								+'{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}'
								+'{\\sign{+}}{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}',
						answer: '\\css'
								+'{\\rowgrp'
								+'{\\html{Convert the mixed numbers to improper fractions:}}'
								+'{\\html{&nbsp;}}'
								+'{\\grp'
									+'{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}'
									+'{\\sign{=}}'
									+'{\\frac{\\fracstr{$numnew1}}{\\fracstr{$den1}}}'
								+'}'
								+'{\\html{&nbsp;}}'
								+'{\\grp'
									+'{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}'
									+'{\\sign{=}}'
									+'{\\frac{\\fracstr{$numnew2}}{\\fracstr{$den2}}}'
								+'}'
								+'{\\html{&nbsp;}}'
								+'{\\ins{Determine the lowest common denominator (LCD) of the fractions:}}'
								+'{\\grp{\\input{$answerDen}}}'
							+'}{well}',
						controls: {
							"checkAnswer": true,
							"help": true
						}
					}, {
						problem: '\\css{\\grp'
								+'{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}'
								+'{\\sign{+}}{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}',
						answer: '\\css'
								+'{\\rowgrp'
								+'{\\html{Convert the mixed numbers to improper fractions:}}'
								+'{\\html{&nbsp;}}'
								+'{\\grp'
									+'{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}'
									+'{\\sign{=}}'
									+'{\\frac{\\fracstr{$numnew1}}{\\fracstr{$den1}}}'
								+'}'
								+'{\\html{&nbsp;}}'
								+'{\\grp'
									+'{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}'
									+'{\\sign{=}}'
									+'{\\frac{\\fracstr{$numnew2}}{\\fracstr{$den2}}}'
								+'}'
								+'{\\html{&nbsp;}}'
								+'{\\html{Determine the lowest common denominator (LCD) of the fractions:}}'
								+'{\\html{&nbsp;}}'
								+'{\\html{$answerDen}}'
								+'{\\html{&nbsp;}}'
								+'{\\ins{Use the LCD to convert the fractions:}}'
								+'{\\grp'
									+'{\\frac{\\fracstr{$numnew1}}{\\fracstr{$den1}}}'
									+'{\\sign{=}}'
									+'{\\frac{\\input{$numlcd1}}{\\fracstr{$answerDen}}}'
								+'}'
								+'{\\html{&nbsp;}}'
								+'{\\grp'
									+'{\\frac{\\fracstr{$numnew2}}{\\fracstr{$den2}}}'
									+'{\\sign{=}}'
									+'{\\frac{\\input{$numlcd2}}{\\fracstr{$answerDen}}}'
								+'}'
								+'{\\html{&nbsp;}}'
							+'}{well}',
						controls: {
							"checkAnswer": true,
							"help": true
						}
					}, {
						problem: '\\css{\\grp'
								+'{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}'
								+'{\\sign{+}}{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}',
						answer: '\\css'
								+'{\\rowgrp'
								+'{\\html{Convert the mixed numbers to improper fractions:}}'
								+'{\\html{&nbsp;}}'
								+'{\\grp'
									+'{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}'
									+'{\\sign{=}}'
									+'{\\frac{\\fracstr{$numnew1}}{\\fracstr{$den1}}}'
								+'}'
								+'{\\html{&nbsp;}}'
								+'{\\grp'
									+'{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}'
									+'{\\sign{=}}'
									+'{\\frac{\\fracstr{$numnew2}}{\\fracstr{$den2}}}'
								+'}'
								+'{\\html{&nbsp;}}'
								+'{\\html{Determine the lowest common denominator (LCD) of the fractions:}}'
								+'{\\html{&nbsp;}}'
								+'{\\html{$answerDen}}'
								+'{\\html{&nbsp;}}'
								+'{\\html{Use the LCD to convert the fractions:}}'
								+'{\\html{&nbsp;}}'
								+'{\\grp'
									+'{\\frac{\\fracstr{$numnew1}}{\\fracstr{$den1}}}'
									+'{\\sign{=}}'
									+'{\\frac{\\fracstr{$numlcd1}}{\\fracstr{$answerDen}}}'
								+'}'
								+'{\\html{&nbsp;}}'
								+'{\\grp'
									+'{\\frac{\\fracstr{$numnew2}}{\\fracstr{$den2}}}'
									+'{\\sign{=}}'
									+'{\\frac{\\fracstr{$numlcd2}}{\\fracstr{$answerDen}}}'
								+'}'
								+'{\\html{&nbsp;}}'
								+'{\\ins{Add the fractions:}}'
								+'{\\grp'
									+'{\\frac'
										+'{\\grp'
											+'{\\str{$numlcd1}}'
											+'{\\sign{+}}'
											+'{\\str{$numlcd2}}'
										+'}'
										+'{\\fracstr{$answerDen}}'
									+'}'
									+'{\\sign{=}}'
									+'{\\frac{\\input{$numanswer1}}{\\fracstr{$answerDen}}}'
								+'}'
								+'{\\html{&nbsp;}}'
							+'}{well}',
//									+'{\\reducefrac{\\mixed{\\str{$wholeanswer2}}{\\frac{\\fracstr{$numanswer1}}{\\fracstr{$answerDen1}}}}}'
//									+'}{well}',
						controls: {
							"checkAnswer": true,
							"help": true
						}
					}, {
						problem: '\\css{\\grp'
								+'{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}'
								+'{\\sign{+}}{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}',
						answer: '\\css'
								+'{\\rowgrp'
									+'{\\html{Convert the mixed numbers to improper fractions:}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp'
										+'{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}'
										+'{\\sign{=}}'
										+'{\\frac{\\fracstr{$numnew1}}{\\fracstr{$den1}}}'
									+'}'
									+'{\\html{&nbsp;}}'
									+'{\\grp'
										+'{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}'
										+'{\\sign{=}}'
										+'{\\frac{\\fracstr{$numnew2}}{\\fracstr{$den2}}}'
									+'}'
									+'{\\html{&nbsp;}}'
									+'{\\html{Determine the lowest common denominator (LCD) of the fractions:}}'
									+'{\\html{&nbsp;}}'
									+'{\\html{$answerDen}}'
									+'{\\html{&nbsp;}}'
									+'{\\html{Use the LCD to convert the fractions:}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp'
										+'{\\frac{\\fracstr{$numnew1}}{\\fracstr{$den1}}}'
										+'{\\sign{=}}'
										+'{\\frac{\\fracstr{$numlcd1}}{\\fracstr{$answerDen}}}'
									+'}'
									+'{\\html{&nbsp;}}'
									+'{\\grp'
										+'{\\frac{\\fracstr{$numnew2}}{\\fracstr{$den2}}}'
										+'{\\sign{=}}'
										+'{\\frac{\\fracstr{$numlcd2}}{\\fracstr{$answerDen}}}'
									+'}'
									+'{\\html{&nbsp;}}'
									+'{\\html{Add the fractions:}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp'
										+'{\\frac'
											+'{\\grp'
												+'{\\str{$numlcd1}}'
												+'{\\sign{+}}'
												+'{\\str{$numlcd2}}'
											+'}'
											+'{\\fracstr{$answerDen}}'
										+'}'
										+'{\\sign{=}}'
										+'{\\frac{\\fracstr{$numanswer1}}{\\fracstr{$answerDen}}}'
									+'}'
									+'{\\html{&nbsp;}}'
									+'{\\ins{Rewrite the answer as a mixed number with a proper fraction:}}'
									+'{\\grp'
										+'{\\frac{\\str{$numanswer1}}{\\str{$answerDen}}}'
										+'{\\sign{ = }}'
										+'{\\mixed{\\input{$wholeanswer1}}{\\frac{\\input{$numanswer2}}{\\input{$answerDen}}}}}'
								+'}{well}',
						controls: {
							"checkAnswer": true,
							"help": true
						}
					}, {
						problem: '\\css{\\grp'
								+'{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}'
								+'{\\sign{+}}{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}',
						answer: '\\css'
								+'{\\rowgrp'
									+'{\\html{Convert the mixed numbers to improper fractions:}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp'
										+'{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}'
										+'{\\sign{=}}'
										+'{\\frac{\\fracstr{$numnew1}}{\\fracstr{$den1}}}'
									+'}'
									+'{\\html{&nbsp;}}'
									+'{\\grp'
										+'{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}'
										+'{\\sign{=}}'
										+'{\\frac{\\fracstr{$numnew2}}{\\fracstr{$den2}}}'
									+'}'
									+'{\\html{&nbsp;}}'
									+'{\\html{Determine the lowest common denominator (LCD) of the fractions:}}'
									+'{\\html{&nbsp;}}'
									+'{\\html{$answerDen}}'
									+'{\\html{&nbsp;}}'
									+'{\\html{Use the LCD to convert the fractions:}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp'
										+'{\\frac{\\fracstr{$numnew1}}{\\fracstr{$den1}}}'
										+'{\\sign{=}}'
										+'{\\frac{\\fracstr{$numlcd1}}{\\fracstr{$answerDen}}}'
									+'}'
									+'{\\html{&nbsp;}}'
									+'{\\grp'
										+'{\\frac{\\fracstr{$numnew2}}{\\fracstr{$den2}}}'
										+'{\\sign{=}}'
										+'{\\frac{\\fracstr{$numlcd2}}{\\fracstr{$answerDen}}}'
									+'}'
									+'{\\html{&nbsp;}}'
									+'{\\html{Add the fractions:}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp'
										+'{\\frac'
											+'{\\grp'
												+'{\\str{$numlcd1}}'
												+'{\\sign{+}}'
												+'{\\str{$numlcd2}}'
											+'}'
											+'{\\fracstr{$answerDen}}'
										+'}'
										+'{\\sign{=}}'
										+'{\\frac{\\fracstr{$numanswer1}}{\\fracstr{$answerDen}}}'
									+'}'
									+'{\\html{&nbsp;}}'
									+'{\\html{Rewrite the answer as a mixed number with a proper fraction:}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp'
										+'{\\frac{\\str{$numanswer1}}{\\str{$answerDen}}}'
										+'{\\sign{ = }}'
										+'{\\mixed{\\str{$wholeanswer1}}{\\frac{\\fracstr{$numanswer2}}{\\fracstr{$answerDen}}}}}'
									+'{\\html{&nbsp;}}'	
									+'{\\reducefrac{\\mixed{\\str{$wholeanswer1}}{\\frac{\\fracstr{$numanswer2}}{\\fracstr{$answerDen}}}}}'
								+'}{well}',
						controls: {
							"checkAnswer": true,
							"help": true
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
						answer: '\\css{\\grp'
						+'{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}'
						+'{\\sign{+}}'
						+'{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}'
						+'{\\sign{+}}'
						+'{\\mixed{\\str{$whole3}}{\\frac{\\fracstr{$num3}}{\\fracstr{$den3}}}}'
						+'{\\sign{=}}'
						+'{\\mixed{\\input{$wholeanswer2}}{\\frac{\\input{$numanswer3}}{\\input{$answerDen2}}}}}',
						//+'{centerTableText3}',
						controls: {
							"checkAnswer": true,
							"help": false,
							"workbook": true
						}
					}]
				}, {
					title: 'Workbook',
					children: [{
						problem: '\\css{\\grp'
									+'{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}'
									+'{\\sign{+}}'
									+'{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}'
									+'{\\sign{+}}'
									+'{\\mixed{\\str{$whole3}}{\\frac{\\fracstr{$num3}}{\\fracstr{$den3}}}}',
						answer: '\\rowgrp'
									+'{\\ins{Determine the lowest common denominator (LCD) of the fractions:}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp{\\input{$answerDen1}}}',
						controls: {
							"checkAnswer": true,
							"help": true
						},
					}, {
						problem: '\\css{\\grp'
									+'{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}'
									+'{\\sign{+}}'
									+'{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}'
									+'{\\sign{+}}'
									+'{\\mixed{\\str{$whole3}}{\\frac{\\fracstr{$num3}}{\\fracstr{$den3}}}}',
						answer: '\\css'
									+'{\\rowgrp'
										+'{\\html{Determine the lowest common denominator (LCD) of the fractions:}}'
										+'{\\html{&nbsp;}}'
										+'{\\html{$answerDen1}}'
										+'{\\html{&nbsp;}}'
										+'{\\ins{Use the LCD to convert the fractions:}}'
										+'{\\grp{\\mixed{\\str{$whole1}}{\\frac{\\str{$num1}}{\\str{$den1}}}}'
										+'{\\sign{=}}'
										+'{\\mixed{\\str{$whole1}}{\\frac{\\input{$numnew1}}{\\str{$answerDen1}}}}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp{\\mixed{\\str{$whole2}}{\\frac{\\str{$num2}}{\\str{$den2}}}}'
										+'{\\sign{=}}'
										+'{\\mixed{\\str{$whole2}}{\\frac{\\input{$numnew2}}{\\str{$answerDen1}}}}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp{\\grp{\\mixed{\\str{$whole3}}{\\frac{\\str{$num3}}{\\str{$den3}}}}'
										+'{\\sign{=}}'
										+'{\\mixed{\\str{$whole3}}{\\frac{\\input{$numnew3}}{\\str{$answerDen1}}}}}}'
										+'{\\html{&nbsp;}}'
									+'}{well}',
						controls: {
							"checkAnswer": true,
							"help": true
						}
					}, {
						problem: '\\css{\\grp'
									+'{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}'
									+'{\\sign{+}}'
									+'{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}'
									+'{\\sign{+}}'
									+'{\\mixed{\\str{$whole3}}{\\frac{\\fracstr{$num3}}{\\fracstr{$den3}}}}',
						answer: '\\css'
									+'{\\rowgrp'
										+'{\\html{Determine the lowest common denominator (LCD) of the fractions:}}'
										+'{\\html{&nbsp;}}'
										+'{\\html{$answerDen1}}'
										+'{\\html{&nbsp;}}'
										+'{\\html{Use the LCD to convert the fractions:}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp{\\mixed{\\str{$whole1}}{\\frac{\\str{$num1}}{\\str{$den1}}}}'
										+'{\\sign{=}}'
										+'{\\mixed{\\fracstr{$whole1}}{\\frac{\\fracstr{$numnew1}}{\\fracstr{$answerDen1}}}}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp{\\mixed{\\str{$whole2}}{\\frac{\\str{$num2}}{\\str{$den2}}}}'
										+'{\\sign{=}}'
										+'{\\mixed{\\fracstr{$whole2}}{\\frac{\\fracstr{$numnew2}}{\\fracstr{$answerDen1}}}}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp{\\mixed{\\str{$whole3}}{\\frac{\\str{$num3}}{\\str{$den3}}}}'
										+'{\\sign{=}}'
										+'{\\mixed{\\fracstr{$whole3}}{\\frac{\\fracstr{$numnew3}}{\\fracstr{$answerDen1}}}}}'
										+'{\\html{&nbsp;}}'
										+'{\\ins{Add the fractions:}}'
										+'{\\grp{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$numnew1}}{\\fracstr{$answerDen1}}}}'
										+'{\\sign{+}}'
										+'{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$numnew2}}{\\fracstr{$answerDen1}}}}'
										+'{\\sign{+}}'
										+'{\\mixed{\\str{$whole3}}{\\frac{\\fracstr{$numnew3}}{\\fracstr{$answerDen1}}}}'
										+'{\\sign{=}}'
										+'{\\mixed{\\input{$wholeanswer1}}{\\frac{\\input{$numanswer1}}{\\input{$answerDen1}}}}}'
									+'}{well}',
						controls: {
							"checkAnswer": true,
							"help": true
						}
					}, {
						problem: '\\css{\\grp'
									+'{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}'
									+'{\\sign{+}}'
									+'{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}'
									+'{\\sign{+}}'
									+'{\\mixed{\\str{$whole3}}{\\frac{\\fracstr{$num3}}{\\fracstr{$den3}}}}',
						answer: '\\css'
									+'{\\rowgrp'
										+'{\\html{Determine the lowest common denominator (LCD) of the fractions:}}'
										+'{\\html{&nbsp;}}'
										+'{\\html{$answerDen1}}'
										+'{\\html{&nbsp;}}'
										+'{\\html{Use the LCD to convert the fractions:}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp{\\mixed{\\str{$whole1}}{\\frac{\\str{$num1}}{\\str{$den1}}}}'
										+'{\\sign{=}}'
										+'{\\mixed{\\fracstr{$whole1}}{\\frac{\\fracstr{$numnew1}}{\\fracstr{$answerDen1}}}}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp{\\mixed{\\str{$whole2}}{\\frac{\\str{$num2}}{\\str{$den2}}}}'
										+'{\\sign{=}}'
										+'{\\mixed{\\fracstr{$whole2}}{\\frac{\\fracstr{$numnew2}}{\\fracstr{$answerDen1}}}}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp{\\mixed{\\str{$whole3}}{\\frac{\\str{$num3}}{\\str{$den3}}}}'
										+'{\\sign{=}}'
										+'{\\mixed{\\fracstr{$whole3}}{\\frac{\\fracstr{$numnew3}}{\\fracstr{$answerDen1}}}}}'
										+'{\\html{&nbsp;}}'
										+'{\\ins{Add the fractions:}}'
										+'{\\grp{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$numnew1}}{\\fracstr{$answerDen1}}}}'
										+'{\\sign{+}}'
										+'{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$numnew2}}{\\fracstr{$answerDen1}}}}'
										+'{\\sign{+}}'
										+'{\\mixed{\\str{$whole3}}{\\frac{\\fracstr{$numnew3}}{\\fracstr{$answerDen1}}}}'
										+'{\\sign{=}}'
										+'{\\mixed{\\fracstr{$wholeanswer1}}{\\frac{\\fracstr{$numanswer1}}{\\fracstr{$answerDen1}}}}}'
										+'{\\html{&nbsp;}}'
										+'{\\reducefrac{\\mixed{\\str{$wholeanswer1}}{\\frac{\\fracstr{$numanswer1}}{\\fracstr{$answerDen1}}}}}'
									+'}{well}',
						controls: {
							"checkAnswer": true,
							"help": false
						}
					}, {
						problem: '\\css{\\grp'
									+'{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}'
									+'{\\sign{+}}'
									+'{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}'
									+'{\\sign{+}}'
									+'{\\mixed{\\str{$whole3}}{\\frac{\\fracstr{$num3}}{\\fracstr{$den3}}}}',
						answer: '\\css'
									+'{\\rowgrp'
										+'{\\html{Determine the lowest common denominator (LCD) of the fractions:}}'
										+'{\\html{&nbsp;}}'
										+'{\\html{$answerDen1}}'
										+'{\\html{&nbsp;}}'
										+'{\\html{Use the LCD to convert the fractions:}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp{\\mixed{\\str{$whole1}}{\\frac{\\str{$num1}}{\\str{$den1}}}}'
										+'{\\sign{=}}'
										+'{\\mixed{\\fracstr{$whole1}}{\\frac{\\fracstr{$numnew1}}{\\fracstr{$answerDen1}}}}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp{\\mixed{\\str{$whole2}}{\\frac{\\str{$num2}}{\\str{$den2}}}}'
										+'{\\sign{=}}'
										+'{\\mixed{\\fracstr{$whole2}}{\\frac{\\fracstr{$numnew2}}{\\fracstr{$answerDen1}}}}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp{\\mixed{\\str{$whole3}}{\\frac{\\str{$num3}}{\\str{$den3}}}}'
										+'{\\sign{=}}'
										+'{\\mixed{\\fracstr{$whole3}}{\\frac{\\fracstr{$numnew3}}{\\fracstr{$answerDen1}}}}}'
										+'{\\html{&nbsp;}}'
										+'{\\ins{Add the fractions:}}'
										+'{\\grp{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$numnew1}}{\\fracstr{$answerDen1}}}}'
										+'{\\sign{+}}'
										+'{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$numnew2}}{\\fracstr{$answerDen1}}}}'
										+'{\\sign{+}}'
										+'{\\mixed{\\str{$whole3}}{\\frac{\\fracstr{$numnew3}}{\\fracstr{$answerDen1}}}}'
										+'{\\sign{=}}'
										+'{\\mixed{\\fracstr{$wholeanswer1}}{\\frac{\\fracstr{$numanswer1}}{\\fracstr{$answerDen1}}}}}'
										+'{\\html{&nbsp;}}'
										+'{\\ins{Rewrite the reduced fraction $wholeanswer1 <sup>$numanswer2</sup>&#8260;<sub>$answerDen2</sub> as a mixed number with a proper fraction:}}'
										+'{\\grp{\\mixed{\\str{$wholeanswer1}}{\\frac{\\str{$numanswer2}}{\\str{$answerDen2}}}}{\\sign{=}}{\\mixed{\\input{$wholeanswer2}}{\\frac{\\input{$numanswer3}}{\\input{$answerDen2}}}}}'
									+'}{well}',
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
						problem: '',
						answer: '\\css{\\grp'
								+'{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}'
								+'{\\sign{+}}'
								+'{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}'
								+'{\\sign{+}}'
								+'{\\mixed{\\str{$whole3}}{\\frac{\\fracstr{$num3}}{\\fracstr{$den3}}}}'
								+'{\\sign{=}}'
								+'{\\mixed{\\input{$wholeanswer1}}{\\frac{\\input{$numanswer2}}{\\input{$answerDen}}}}}',
								//+'{centerTableText3}',
						controls: {
							"checkAnswer": true,
							"help": false,
							"workbook": true
						}
					}]
				}, {
					title: 'Workbook',
					children: [{
						problem: '\\css{\\grp'
									+'{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}'
									+'{\\sign{+}}'
									+'{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}'
									+'{\\sign{+}}'
									+'{\\mixed{\\str{$whole3}}{\\frac{\\fracstr{$num3}}{\\fracstr{$den3}}}}',
						answer: '\\css'
									+'{\\rowgrp'
									+'{\\ins{Convert the mixed numbers to improper fractions:}}'
									+'{\\grp'
										+'{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}'
										+'{\\sign{=}}'
										+'{\\frac{\\input{$numnew1}}{\\fracstr{$den1}}}'
									+'}'
									+'{\\html{&nbsp;}}'
									+'{\\grp'
										+'{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}'
										+'{\\sign{=}}'
										+'{\\frac{\\input{$numnew2}}{\\fracstr{$den2}}}'
									+'}'
									+'{\\html{&nbsp;}}'
									+'{\\grp'
										+'{\\mixed{\\str{$whole3}}{\\frac{\\fracstr{$num3}}{\\fracstr{$den3}}}}'
										+'{\\sign{=}}'
										+'{\\frac{\\input{$numnew3}}{\\fracstr{$den3}}}'
									+'}'
									+'{\\html{&nbsp;}}'
								+'}{well}',
						controls: {
							"checkAnswer": true,
							"help": true
						},
					}, {
						problem: '\\css{\\grp'
									+'{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}'
									+'{\\sign{+}}'
									+'{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}'
									+'{\\sign{+}}'
									+'{\\mixed{\\str{$whole3}}{\\frac{\\fracstr{$num3}}{\\fracstr{$den3}}}}',
						answer: '\\css'
									+'{\\rowgrp'
									+'{\\html{Convert the mixed numbers to improper fractions:}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp'
										+'{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}'
										+'{\\sign{=}}'
										+'{\\frac{\\fracstr{$numnew1}}{\\fracstr{$den1}}}'
									+'}'
									+'{\\html{&nbsp;}}'
									+'{\\grp'
										+'{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}'
										+'{\\sign{=}}'
										+'{\\frac{\\fracstr{$numnew2}}{\\fracstr{$den2}}}'
									+'}'
									+'{\\html{&nbsp;}}'
									+'{\\grp'
										+'{\\mixed{\\str{$whole3}}{\\frac{\\fracstr{$num3}}{\\fracstr{$den3}}}}'
										+'{\\sign{=}}'
										+'{\\frac{\\fracstr{$numnew3}}{\\fracstr{$den3}}}'
									+'}'
									+'{\\html{&nbsp;}}'
									+'{\\ins{Determine the lowest common denominator (LCD) of the fractions:}}'
									+'{\\grp{\\input{$answerDen}}}'
								+'}{well}',
						controls: {
							"checkAnswer": true,
							"help": true
						}
					}, {
						problem: '\\css{\\grp'
									+'{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}'
									+'{\\sign{+}}'
									+'{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}'
									+'{\\sign{+}}'
									+'{\\mixed{\\str{$whole3}}{\\frac{\\fracstr{$num3}}{\\fracstr{$den3}}}}',	
						answer: '\\css'
									+'{\\rowgrp'
									+'{\\html{Convert the mixed numbers to improper fractions:}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp'
										+'{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}'
										+'{\\sign{=}}'
										+'{\\frac{\\fracstr{$numnew1}}{\\fracstr{$den1}}}'
									+'}'
									+'{\\html{&nbsp;}}'
									+'{\\grp'
										+'{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}'
										+'{\\sign{=}}'
										+'{\\frac{\\fracstr{$numnew2}}{\\fracstr{$den2}}}'
									+'}'
									+'{\\html{&nbsp;}}'
									+'{\\grp'
										+'{\\mixed{\\str{$whole3}}{\\frac{\\fracstr{$num3}}{\\fracstr{$den3}}}}'
										+'{\\sign{=}}'
										+'{\\frac{\\fracstr{$numnew3}}{\\fracstr{$den3}}}'
									+'}'
									+'{\\html{&nbsp;}}'
									+'{\\html{Determine the lowest common denominator (LCD) of the fractions:}}'
									+'{\\html{&nbsp;}}'
									+'{\\html{$answerDen}}'
									+'{\\html{&nbsp;}}'
									+'{\\ins{Use the LCD to convert the fractions:}}'
									+'{\\grp'
										+'{\\frac{\\fracstr{$numnew1}}{\\fracstr{$den1}}}'
										+'{\\sign{=}}'
										+'{\\frac{\\input{$numlcd1}}{\\fracstr{$answerDen}}}'
									+'}'
									+'{\\html{&nbsp;}}'
									+'{\\grp'
										+'{\\frac{\\fracstr{$numnew2}}{\\fracstr{$den2}}}'
										+'{\\sign{=}}'
										+'{\\frac{\\input{$numlcd2}}{\\fracstr{$answerDen}}}'
									+'}'
									+'{\\html{&nbsp;}}'
									+'{\\grp'
										+'{\\frac{\\fracstr{$numnew3}}{\\fracstr{$den3}}}'
										+'{\\sign{=}}'
										+'{\\frac{\\input{$numlcd3}}{\\fracstr{$answerDen}}}'
									+'}'
								+'{\\html{&nbsp;}}'
								+'}{well}',
						controls: {
							"checkAnswer": true,
							"help": true
						}
					},{
						problem: '\\css{\\grp'
								+'{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}'
								+'{\\sign{+}}'
								+'{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}'
								+'{\\sign{+}}'
								+'{\\mixed{\\str{$whole3}}{\\frac{\\fracstr{$num3}}{\\fracstr{$den3}}}}',
						answer: '\\css'
								+'{\\rowgrp'
								+'{\\html{Convert the mixed numbers to improper fractions:}}'
								+'{\\html{&nbsp;}}'
								+'{\\grp'
									+'{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}'
									+'{\\sign{=}}'
									+'{\\frac{\\fracstr{$numnew1}}{\\fracstr{$den1}}}'
								+'}'
								+'{\\html{&nbsp;}}'
								+'{\\grp'
									+'{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}'
									+'{\\sign{=}}'
									+'{\\frac{\\fracstr{$numnew2}}{\\fracstr{$den2}}}'
								+'}'
								+'{\\html{&nbsp;}}'
								+'{\\grp'
									+'{\\mixed{\\str{$whole3}}{\\frac{\\fracstr{$num3}}{\\fracstr{$den3}}}}'
									+'{\\sign{=}}'
									+'{\\frac{\\fracstr{$numnew3}}{\\fracstr{$den3}}}'
								+'}'
								+'{\\html{&nbsp;}}'
								+'{\\html{Determine the lowest common denominator (LCD) of the fractions:}}'
								+'{\\html{&nbsp;}}'
								+'{\\html{$answerDen}}'
								+'{\\html{&nbsp;}}'
								+'{\\html{Use the LCD to convert the fractions:}}'
								+'{\\html{&nbsp;}}'
								+'{\\grp'
									+'{\\frac{\\fracstr{$numnew1}}{\\fracstr{$den1}}}'
									+'{\\sign{=}}'
									+'{\\frac{\\fracstr{$numlcd1}}{\\fracstr{$answerDen}}}'
								+'}'
								+'{\\html{&nbsp;}}'
								+'{\\grp'
									+'{\\frac{\\fracstr{$numnew2}}{\\fracstr{$den2}}}'
									+'{\\sign{=}}'
									+'{\\frac{\\fracstr{$numlcd2}}{\\fracstr{$answerDen}}}'
								+'}'
								+'{\\html{&nbsp;}}'
								+'{\\grp'
									+'{\\frac{\\fracstr{$numnew3}}{\\fracstr{$den3}}}'
									+'{\\sign{=}}'
									+'{\\frac{\\fracstr{$numlcd3}}{\\fracstr{$answerDen}}}'
								+'}'
							+'{\\html{&nbsp;}}'
								+'{\\ins{Add the fractions:}}'
								+'{\\grp'
									+'{\\frac'
										+'{\\grp'
											+'{\\str{$numlcd1}}'
											+'{\\sign{+}}'
											+'{\\str{$numlcd2}}'
											+'{\\sign{+}}'
											+'{\\str{$numlcd3}}'
										+'}'
										+'{\\fracstr{$answerDen}}'
									+'}'
									+'{\\sign{=}}'
									+'{\\frac{\\input{$numanswer1}}{\\fracstr{$answerDen}}}'
								+'}'
								+'{\\html{&nbsp;}}'
							+'}{well}',
							controls: {
								"checkAnswer": true,
								"help": true
						}
					}, {
							problem: '\\css{\\grp'
								+'{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}'
								+'{\\sign{+}}'
								+'{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}'
								+'{\\sign{+}}'
								+'{\\mixed{\\str{$whole3}}{\\frac{\\fracstr{$num3}}{\\fracstr{$den3}}}}',
							answer: '\\css'
								+'{\\rowgrp'
								+'{\\html{Convert the mixed numbers to improper fractions:}}'
								+'{\\html{&nbsp;}}'
								+'{\\grp'
									+'{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}'
									+'{\\sign{=}}'
									+'{\\frac{\\fracstr{$numnew1}}{\\fracstr{$den1}}}'
								+'}'
								+'{\\html{&nbsp;}}'
								+'{\\grp'
									+'{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}'
									+'{\\sign{=}}'
									+'{\\frac{\\fracstr{$numnew2}}{\\fracstr{$den2}}}'
								+'}'
								+'{\\html{&nbsp;}}'
								+'{\\grp'
									+'{\\mixed{\\str{$whole3}}{\\frac{\\fracstr{$num3}}{\\fracstr{$den3}}}}'
									+'{\\sign{=}}'
									+'{\\frac{\\fracstr{$numnew3}}{\\fracstr{$den3}}}'
								+'}'
							+'{\\html{&nbsp;}}'
								+'{\\html{Determine the lowest common denominator (LCD) of the fractions:}}'
								+'{\\html{&nbsp;}}'
								+'{\\html{$answerDen}}'
								+'{\\html{&nbsp;}}'
								+'{\\html{Use the LCD to convert the fractions:}}'
								+'{\\html{&nbsp;}}'
								+'{\\grp'
									+'{\\frac{\\fracstr{$numnew1}}{\\fracstr{$den1}}}'
									+'{\\sign{=}}'
									+'{\\frac{\\fracstr{$numlcd1}}{\\fracstr{$answerDen}}}'
								+'}'
								+'{\\html{&nbsp;}}'
								+'{\\grp'
									+'{\\frac{\\fracstr{$numnew2}}{\\fracstr{$den2}}}'
									+'{\\sign{=}}'
									+'{\\frac{\\fracstr{$numlcd2}}{\\fracstr{$answerDen}}}'
								+'}'
								+'{\\html{&nbsp;}}'
								+'{\\grp'
									+'{\\frac{\\fracstr{$numnew3}}{\\fracstr{$den3}}}'
									+'{\\sign{=}}'
									+'{\\frac{\\fracstr{$numlcd3}}{\\fracstr{$answerDen}}}'
								+'}'
							+'{\\html{&nbsp;}}'
								+'{\\html{Add the fractions:}}'
								+'{\\html{&nbsp;}}'
								+'{\\grp'
									+'{\\frac'
										+'{\\grp'
											+'{\\str{$numlcd1}}'
											+'{\\sign{+}}'
											+'{\\str{$numlcd2}}'
											+'{\\sign{+}}'
											+'{\\str{$numlcd3}}'
										+'}'
										+'{\\fracstr{$answerDen}}'
									+'}'
									+'{\\sign{=}}'
									+'{\\frac{\\fracstr{$numanswer1}}{\\fracstr{$answerDen}}}'
								+'}'
								+'{\\html{&nbsp;}}'
								+'{\\ins{Rewrite the answer as a mixed number with a proper fraction:}}'
								+'{\\grp'
									+'{\\frac{\\str{$numanswer1}}{\\str{$answerDen}}}'
									+'{\\sign{ = }}'
									+'{\\mixed{\\input{$wholeanswer1}}{\\frac{\\input{$numanswer2}}{\\input{$answerDen}}}}}'
							+'}{well}',
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
						problem: '',
						answer: '\\css{\\grp'
									+'{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}'
									+'{\\sign{+}}'
									+'{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}'
									+'{\\sign{+}}'
									+'{\\mixed{\\str{$whole3}}{\\frac{\\fracstr{$num3}}{\\fracstr{$den3}}}}'
									+'{\\sign{=}}'
									+'{\\mixed{\\input{$wholeanswer1}}{\\frac{\\input{$numanswer3}}{\\input{$answerDen1}}}}}',
									//+'{centerTableText3}',
						controls: {
							"checkAnswer": true,
							"help": false,
							"workbook": true
						}
					}]
				}, {
					title: 'Workbook',
					children: [{
						problem: '\\css{\\grp'
									+'{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}'
									+'{\\sign{+}}'
									+'{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}'
									+'{\\sign{+}}'
									+'{\\mixed{\\str{$whole3}}{\\frac{\\fracstr{$num3}}{\\fracstr{$den3}}}}',
						answer: '\\css'
									+'{\\rowgrp'
									+'{\\ins{Convert the mixed numbers to improper fractions:}}'
									+'{\\grp'
										+'{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}'
										+'{\\sign{=}}'
										+'{\\frac{\\input{$numnew1}}{\\fracstr{$den1}}}'
									+'}'
									+'{\\html{&nbsp;}}'
									+'{\\grp'
										+'{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}'
										+'{\\sign{=}}'
										+'{\\frac{\\input{$numnew2}}{\\fracstr{$den2}}}'
									+'}'
									+'{\\html{&nbsp;}}'
									+'{\\grp'
										+'{\\mixed{\\str{$whole3}}{\\frac{\\fracstr{$num3}}{\\fracstr{$den3}}}}'
										+'{\\sign{=}}'
										+'{\\frac{\\input{$numnew3}}{\\fracstr{$den3}}}'
									+'}'
									+'{\\html{&nbsp;}}'
								+'}{well}',
						controls: {
							"checkAnswer": true,
							"help": true
						},
					}, {
						problem: '\\css{\\grp'
									+'{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}'
									+'{\\sign{+}}'
									+'{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}'
									+'{\\sign{+}}'
									+'{\\mixed{\\str{$whole3}}{\\frac{\\fracstr{$num3}}{\\fracstr{$den3}}}}',
						answer: '\\css'
									+'{\\rowgrp'
									+'{\\html{Convert the mixed numbers to improper fractions:}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp'
										+'{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}'
										+'{\\sign{=}}'
										+'{\\frac{\\fracstr{$numnew1}}{\\fracstr{$den1}}}'
									+'}'
									+'{\\html{&nbsp;}}'
									+'{\\grp'
										+'{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}'
										+'{\\sign{=}}'
										+'{\\frac{\\fracstr{$numnew2}}{\\fracstr{$den2}}}'
									+'}'
									+'{\\html{&nbsp;}}'
									+'{\\grp'
										+'{\\mixed{\\str{$whole3}}{\\frac{\\fracstr{$num3}}{\\fracstr{$den3}}}}'
										+'{\\sign{=}}'
										+'{\\frac{\\fracstr{$numnew3}}{\\fracstr{$den3}}}'
									+'}'
									+'{\\html{&nbsp;}}'
									+'{\\ins{Determine the lowest common denominator (LCD) of the fractions:}}'
									+'{\\grp{\\input{$answerDen}}}'
								+'}{well}',
						controls: {
							"checkAnswer": true,
							"help": true
						}
					}, {
							problem: '\\css{\\grp'
										+'{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}'
										+'{\\sign{+}}'
										+'{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}'
										+'{\\sign{+}}'
										+'{\\mixed{\\str{$whole3}}{\\frac{\\fracstr{$num3}}{\\fracstr{$den3}}}}',
							answer: '\\css'
										+'{\\rowgrp'
										+'{\\html{Convert the mixed numbers to improper fractions:}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}'
											+'{\\sign{=}}'
											+'{\\frac{\\fracstr{$numnew1}}{\\fracstr{$den1}}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}'
											+'{\\sign{=}}'
											+'{\\frac{\\fracstr{$numnew2}}{\\fracstr{$den2}}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\mixed{\\str{$whole3}}{\\frac{\\fracstr{$num3}}{\\fracstr{$den3}}}}'
											+'{\\sign{=}}'
											+'{\\frac{\\fracstr{$numnew3}}{\\fracstr{$den3}}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\html{Determine the lowest common denominator (LCD) of the fractions:}}'
										+'{\\html{&nbsp;}}'
										+'{\\html{$answerDen}}'
										+'{\\html{&nbsp;}}'
										+'{\\ins{Use the LCD to convert the fractions:}}'
										+'{\\grp'
											+'{\\frac{\\fracstr{$numnew1}}{\\fracstr{$den1}}}'
											+'{\\sign{=}}'
											+'{\\frac{\\input{$numlcd1}}{\\fracstr{$answerDen}}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\frac{\\fracstr{$numnew2}}{\\fracstr{$den2}}}'
											+'{\\sign{=}}'
											+'{\\frac{\\input{$numlcd2}}{\\fracstr{$answerDen}}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\frac{\\fracstr{$numnew3}}{\\fracstr{$den3}}}'
											+'{\\sign{=}}'
											+'{\\frac{\\input{$numlcd3}}{\\fracstr{$answerDen}}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'}{well}',
							controls: {
								"checkAnswer": true,
								"help": true
							}
						}, {
								problem: '\\css{\\grp'
											+'{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}'
											+'{\\sign{+}}'
											+'{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}'
											+'{\\sign{+}}'
											+'{\\mixed{\\str{$whole3}}{\\frac{\\fracstr{$num3}}{\\fracstr{$den3}}}}',
								answer: '\\css'
											+'{\\rowgrp'
											+'{\\html{Convert the mixed numbers to improper fractions:}}'
											+'{\\html{&nbsp;}}'
											+'{\\grp'
												+'{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}'
												+'{\\sign{=}}'
												+'{\\frac{\\fracstr{$numnew1}}{\\fracstr{$den1}}}'
											+'}'
											+'{\\html{&nbsp;}}'
											+'{\\grp'
												+'{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}'
												+'{\\sign{=}}'
												+'{\\frac{\\fracstr{$numnew2}}{\\fracstr{$den2}}}'
											+'}'
											+'{\\html{&nbsp;}}'
											+'{\\grp'
												+'{\\mixed{\\str{$whole3}}{\\frac{\\fracstr{$num3}}{\\fracstr{$den3}}}}'
												+'{\\sign{=}}'
												+'{\\frac{\\fracstr{$numnew3}}{\\fracstr{$den3}}}'
											+'}'
											+'{\\html{&nbsp;}}'
											+'{\\html{Determine the lowest common denominator (LCD) of the fractions:}}'
											+'{\\html{&nbsp;}}'
											+'{\\html{$answerDen}}'
											+'{\\html{&nbsp;}}'
											+'{\\html{Use the LCD to convert the fractions:}}'
											+'{\\html{&nbsp;}}'
											+'{\\grp'
												+'{\\frac{\\fracstr{$numnew1}}{\\fracstr{$den1}}}'
												+'{\\sign{=}}'
												+'{\\frac{\\fracstr{$numlcd1}}{\\fracstr{$answerDen}}}'
											+'}'
											+'{\\html{&nbsp;}}'
											+'{\\grp'
												+'{\\frac{\\fracstr{$numnew2}}{\\fracstr{$den2}}}'
												+'{\\sign{=}}'
												+'{\\frac{\\fracstr{$numlcd2}}{\\fracstr{$answerDen}}}'
											+'}'
											+'{\\html{&nbsp;}}'
											+'{\\grp'
												+'{\\frac{\\fracstr{$numnew3}}{\\fracstr{$den3}}}'
												+'{\\sign{=}}'
												+'{\\frac{\\fracstr{$numlcd3}}{\\fracstr{$answerDen}}}'
											+'}'
											+'{\\html{&nbsp;}}'
											+'{\\ins{Add the fractions:}}'
											+'{\\grp'
												+'{\\frac'
													+'{\\grp'
														+'{\\str{$numlcd1}}'
														+'{\\sign{+}}'
														+'{\\str{$numlcd2}}'
														+'{\\sign{+}}'
														+'{\\str{$numlcd3}}'
													+'}'
													+'{\\fracstr{$answerDen}}'
												+'}'
												+'{\\sign{=}}'
												+'{\\frac{\\input{$numanswer1}}{\\fracstr{$answerDen}}}'
											+'}'
											+'{\\html{&nbsp;}}'
										+'}{well}',
								controls: {
									"checkAnswer": true,
									"help": true
								}
							}, {
										problem: '\\css{\\grp'
												+'{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}'
												+'{\\sign{+}}'
												+'{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}'
												+'{\\sign{+}}'
												+'{\\mixed{\\str{$whole3}}{\\frac{\\fracstr{$num3}}{\\fracstr{$den3}}}}',
										answer: '\\css'
												+'{\\rowgrp'
												+'{\\html{Convert the mixed numbers to improper fractions:}}'
												+'{\\html{&nbsp;}}'
												+'{\\grp'
													+'{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}'
													+'{\\sign{=}}'
													+'{\\frac{\\fracstr{$numnew1}}{\\fracstr{$den1}}}'
												+'}'
												+'{\\html{&nbsp;}}'
												+'{\\grp'
													+'{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}'
													+'{\\sign{=}}'
													+'{\\frac{\\fracstr{$numnew2}}{\\fracstr{$den2}}}'
												+'}'
												+'{\\html{&nbsp;}}'
												+'{\\grp'
													+'{\\mixed{\\str{$whole3}}{\\frac{\\fracstr{$num3}}{\\fracstr{$den3}}}}'
													+'{\\sign{=}}'
													+'{\\frac{\\fracstr{$numnew3}}{\\fracstr{$den3}}}'
												+'}'
												+'{\\html{&nbsp;}}'
												+'{\\html{Determine the lowest common denominator (LCD) of the fractions:}}'
												+'{\\html{&nbsp;}}'
												+'{\\html{$answerDen}}'
												+'{\\html{&nbsp;}}'
												+'{\\html{Use the LCD to convert the fractions:}}'
												+'{\\html{&nbsp;}}'
												+'{\\grp'
													+'{\\frac{\\fracstr{$numnew1}}{\\fracstr{$den1}}}'
													+'{\\sign{=}}'
													+'{\\frac{\\fracstr{$numlcd1}}{\\fracstr{$answerDen}}}'
												+'}'
												+'{\\html{&nbsp;}}'
												+'{\\grp'
													+'{\\frac{\\fracstr{$numnew2}}{\\fracstr{$den2}}}'
													+'{\\sign{=}}'
													+'{\\frac{\\fracstr{$numlcd2}}{\\fracstr{$answerDen}}}'
												+'}'
												+'{\\html{&nbsp;}}'
												+'{\\grp'
													+'{\\frac{\\fracstr{$numnew3}}{\\fracstr{$den3}}}'
													+'{\\sign{=}}'
													+'{\\frac{\\fracstr{$numlcd3}}{\\fracstr{$answerDen}}}'
												+'}'
												+'{\\html{&nbsp;}}'
												+'{\\html{Add the fractions:}}'
												+'{\\html{&nbsp;}}'
												+'{\\grp'
													+'{\\frac'
														+'{\\grp'
															+'{\\str{$numlcd1}}'
															+'{\\sign{+}}'
															+'{\\str{$numlcd2}}'
															+'{\\sign{+}}'
															+'{\\str{$numlcd3}}'
														+'}'
														+'{\\fracstr{$answerDen}}'
													+'}'
													+'{\\sign{=}}'
													+'{\\frac{\\html{$numanswer1}}{\\fracstr{$answerDen}}}'
												+'}'
												
												+'{\\html{&nbsp;}}'
												+'{\\ins{Rewrite the answer as a mixed number with a proper fraction:}}'
												+'{\\grp'
													+'{\\frac{\\str{$numanswer1}}{\\str{$answerDen}}}'
													+'{\\sign{ = }}'
													+'{\\mixed{\\input{$wholeanswer1}}{\\frac{\\input{$numanswer2}}{\\input{$answerDen}}}}}'
											+'}{well}',
								controls: {
									"checkAnswer": true,
									"help": true
								}
							}, {
								problem: '\\css{\\grp'
										+'{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}'
										+'{\\sign{+}}'
										+'{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}'
										+'{\\sign{+}}'
										+'{\\mixed{\\str{$whole3}}{\\frac{\\fracstr{$num3}}{\\fracstr{$den3}}}}',
								answer: '\\css'
										+'{\\rowgrp'
										+'{\\html{Convert the mixed numbers to improper fractions:}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}'
											+'{\\sign{=}}'
											+'{\\frac{\\fracstr{$numnew1}}{\\fracstr{$den1}}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}'
											+'{\\sign{=}}'
											+'{\\frac{\\fracstr{$numnew2}}{\\fracstr{$den2}}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\mixed{\\str{$whole3}}{\\frac{\\fracstr{$num3}}{\\fracstr{$den3}}}}'
											+'{\\sign{=}}'
											+'{\\frac{\\fracstr{$numnew3}}{\\fracstr{$den3}}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\html{Determine the lowest common denominator (LCD) of the fractions:}}'
										+'{\\html{&nbsp;}}'
										+'{\\html{$answerDen}}'
										+'{\\html{&nbsp;}}'
										+'{\\html{Use the LCD to convert the fractions:}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\frac{\\fracstr{$numnew1}}{\\fracstr{$den1}}}'
											+'{\\sign{=}}'
											+'{\\frac{\\fracstr{$numlcd1}}{\\fracstr{$answerDen}}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\frac{\\fracstr{$numnew2}}{\\fracstr{$den2}}}'
											+'{\\sign{=}}'
											+'{\\frac{\\fracstr{$numlcd2}}{\\fracstr{$answerDen}}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\frac{\\fracstr{$numnew3}}{\\fracstr{$den3}}}'
											+'{\\sign{=}}'
											+'{\\frac{\\fracstr{$numlcd3}}{\\fracstr{$answerDen}}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\html{Add the fractions:}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\frac'
												+'{\\grp'
													+'{\\str{$numlcd1}}'
													+'{\\sign{+}}'
													+'{\\str{$numlcd2}}'
													+'{\\sign{+}}'
													+'{\\str{$numlcd3}}'
												+'}'
												+'{\\fracstr{$answerDen}}'
											+'}'
											+'{\\sign{=}}'
											+'{\\frac{\\html{$numanswer1}}{\\fracstr{$answerDen}}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\html{Rewrite the answer as a mixed number with a proper fraction:}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\frac{\\str{$numanswer1}}{\\str{$answerDen}}}'
											+'{\\sign{ = }}'
											+'{\\mixed{\\str{$wholeanswer1}}{\\frac{\\fracstr{$numanswer2}}{\\fracstr{$answerDen}}}}}'
										+'{\\html{&nbsp;}}'	
										+'{\\reducefrac{\\mixed{\\str{$wholeanswer1}}{\\frac{\\fracstr{$numanswer2}}{\\fracstr{$answerDen}}}}}'
									+'}{well}',
						controls: {
							"checkAnswer": true,
							"help": true
						}
					}]
				}]
            },
        },
        data = [
			// problem 1
            { whole1: 5, num1: 4, den1: 5, whole2: 2, num2: 3, den2: 4,wholeanswer: '8', numanswer1: 171, numanswer2: 11, answerDen: 20, numnew1: 29, numnew2: 11, numlcd1: 116, numlcd2: 55, template: 'main' },
			// problem 2
			{ whole1: 2, num1: 5, den1: 6, whole2: 1, num2: 8, den2: 9, wholeanswer: 4, numanswer1: 73, numanswer2: 1, answerDen: 18, numnew1: 17, numnew2: 11, numlcd1: 51, numlcd2: 22, template: 'main' },
			// problem 3
			{ whole1: 2, num1: 2, den1: 3, whole2: 1, num2: 3, den2: 5, wholeanswer: 4, numanswer1: 64, numanswer2: 4, answerDen: 15, numnew1: 8, numnew2: 8, numlcd1: 40, numlcd2: 24, template: 'main' },
			// problem 4
			{ whole1: 2, num1: 1, den1: 10, whole2: 1 , num2: 5, den2: '\xA06\xA0', wholeanswer1: 3, numanswer1: 118, numanswer2: 28, numanswer3: 14, answerDen: 30, answerDen1: 15, numnew1: 21, numnew2: 11, numlcd1: 63, numlcd2: 55, template: 'third' },
			// problem 5
			{ whole1: 2, num1: 3, den1: 8, whole2: 1, num2: 1, den2: 5, wholeanswer1: 3, wholeanswer2: 3, numanswer1: 23,  numanswer2: 23,answerDen: 40, numnew1: 15, numnew2: '\xA08', template: 'second' },
			// problem 6
			{ whole1: 2, num1: 7, den1: 12, whole2: 1 , num2: 1, den2: '\xA06\xA0', wholeanswer1: 3, numanswer1: 45, answerDen: 12, answerDen1: 4, numnew1: 31, numnew2: 7, numanswer2: 9, numanswer3: 3, numlcd1: 31, numlcd2: 14, template: 'third' },
			// problem 7
			{ whole1: 2, num1: 2, den1: 9, whole2: 1, num2: 5, den2: 8, wholeanswer1: 3, wholeanswer2: 3, numanswer1: 61,  numanswer2: 61,answerDen: 72, numnew1: 16, numnew2: 45, template: 'second' },
			// problem 8
			{ whole1: 2, num1: 1, den1: 12, whole2: 1, num2: 3, den2: '\xA04\xA0', whole3: 4,  num3: 5, den3: '\xA06\xA0', wholeanswer1: 7, numanswer1: 20, answerDen1: 12, numnew1: '\xA01', numnew2: '\xA09', numnew3: 10, wholeanswer2: 8, numanswer2: 5, answerDen2: 3, numanswer3: 2, template: 'fourth' },
			// problem 9
			{ whole1: 2, num1: 5, den1: '\xA08\xA0', whole2: 1, num2: 1, den2: 10, whole3: 1, num3: 1, den3: '\xA04\xA0', wholeanswer1: 4, numanswer1: 199, answerDen: 40, numnew1: 21, numnew2: 11, numnew3: 5, numanswer2: 39, numlcd1: 105, numlcd2: 44, numlcd3: 50, template: 'fifth' },
			// problem 10
			{ whole1: 2, num1: 1, den1: 6, whole2: 3, num2: 1, den2: 4, whole3: 1, num3: 1, den3: 4, wholeanswer1: 6, numanswer1: 80, numanswer2: 8, numanswer3: 2, answerDen: 12, answerDen1: 3, numnew1: 13, numnew2: 13, numnew3: 5, numlcd1: 26, numlcd2: 39, numlcd3: 15, template: 'sixth' },
        ];

    return dataUtils.build(desc, template, data);
}]);
