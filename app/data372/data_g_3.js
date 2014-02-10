
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
										+'{\\grp'
											+'{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}'
											+'{\\html{<span style="font-size:5%;">&nbsp;</span>}}{\\sign{+}}{\\html{<span style="font-size:5%;">&nbsp;</span>}}'
											+'{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\frac{\\input{$numnew1}}{\\fracstr{$den1}}}'
											+'{\\sign{+}}'
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
											+'{\\html{<span style="font-size:5%;">&nbsp;</span>}}{\\sign{+}}{\\html{<span style="font-size:5%;">&nbsp;</span>}}'
											+'{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\frac{\\fracstr{$numnew1}}{\\fracstr{$den1}}}'
											+'{\\sign{+}}'
											+'{\\frac{\\fracstr{$numnew2}}{\\fracstr{$den2}}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\ins{Determine the lowest common denominator (LCD) of the fractions:}}'
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
									+'}',
						answer: '\\css'
									+'{\\rowgrp'
										+'{\\html{Convert the mixed numbers to improper fractions:}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}'
											+'{\\html{<span style="font-size:5%;">&nbsp;</span>}}{\\sign{+}}{\\html{<span style="font-size:5%;">&nbsp;</span>}}'
											+'{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\frac{\\fracstr{$numnew1}}{\\fracstr{$den1}}}'
											+'{\\sign{+}}'
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
											+'{\\sign{+}}'
											+'{\\frac{\\fracstr{$numnew2}}{\\fracstr{$den2}}}'
										+'}'
										+'{\\html{&nbsp;}}'	
										+'{\\grp'
											+'{\\frac{\\input{$numlcd1}}{\\fracstr{$answerDen}}}'
											+'{\\sign{+}}'
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
											+'{\\html{<span style="font-size:5%;">&nbsp;</span>}}{\\sign{+}}{\\html{<span style="font-size:5%;">&nbsp;</span>}}'
											+'{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\frac{\\fracstr{$numnew1}}{\\fracstr{$den1}}}'
											+'{\\sign{+}}'
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
											+'{\\sign{+}}'
											+'{\\frac{\\fracstr{$numnew2}}{\\fracstr{$den2}}}'
										+'}'
										+'{\\html{&nbsp;}}'	
										+'{\\grp'
											+'{\\frac{\\fracstr{$numlcd1}}{\\fracstr{$answerDen}}}'
											+'{\\sign{+}}'
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
							"help": true,
							"fixBottomRight": true
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
											+'{\\html{<span style="font-size:5%;">&nbsp;</span>}}{\\sign{+}}{\\html{<span style="font-size:5%;">&nbsp;</span>}}'
											+'{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\frac{\\fracstr{$numnew1}}{\\fracstr{$den1}}}'
											+'{\\sign{+}}'
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
											+'{\\sign{+}}'
											+'{\\frac{\\fracstr{$numnew2}}{\\fracstr{$den2}}}'
										+'}'
										+'{\\html{&nbsp;}}'	
										+'{\\grp'
											+'{\\frac{\\fracstr{$numlcd1}}{\\fracstr{$answerDen}}}'
											+'{\\sign{+}}'
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
						answer: '\\css{\\grp'
								+'{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}'
								+'{\\sign{+}}{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}'
								+'{\\sign{=}}'
								+'{\\mixed{\\input{$wholeanswer1}}{\\frac{\\input{$numanswer2}}{\\input{$answer1Den}}}}}',
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
									+'{\\sign{+}}'
									+'{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}'
								+'}'
								+'{\\html{&nbsp;}}'
								+'{\\grp'
									+'{\\frac{\\input{$numnew1}}{\\fracstr{$den1}}}'
									+'{\\sign{+}}'
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
									+'{\\sign{+}}'
									+'{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}'
								+'}'
								+'{\\html{&nbsp;}}'
								+'{\\grp'
									+'{\\frac{\\fracstr{$numnew1}}{\\fracstr{$den1}}}'
									+'{\\sign{+}}'
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
									+'{\\sign{+}}'
									+'{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}'
								+'}'
								+'{\\html{&nbsp;}}'
								+'{\\grp'
									+'{\\frac{\\fracstr{$numnew1}}{\\fracstr{$den1}}}'
									+'{\\sign{+}}'
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
									+'{\\sign{+}}'
									+'{\\frac{\\fracstr{$numnew2}}{\\fracstr{$den2}}}'
								+'}'
								+'{\\html{&nbsp;}}'	
								+'{\\grp'
									+'{\\frac{\\input{$numlcd1}}{\\fracstr{$answerDen}}}'
									+'{\\sign{+}}'
									+'{\\frac{\\input{$numlcd2}}{\\fracstr{$answerDen}}}'
								+'}'
								+'{\\html{&nbsp;}}'
							+'}{well}',
						controls: {
							"checkAnswer": true,
							"help": true,
							"fixBottomRight": true
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
									+'{\\sign{+}}'
									+'{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}'
								+'}'
								+'{\\html{&nbsp;}}'
								+'{\\grp'
									+'{\\frac{\\fracstr{$numnew1}}{\\fracstr{$den1}}}'
									+'{\\sign{+}}'
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
									+'{\\sign{+}}'
									+'{\\frac{\\fracstr{$numnew2}}{\\fracstr{$den2}}}'
								+'}'
								+'{\\html{&nbsp;}}'	
								+'{\\grp'
									+'{\\frac{\\fracstr{$numlcd1}}{\\fracstr{$answerDen}}}'
									+'{\\sign{+}}'
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
							"help": true,
							"fixBottomRight": true
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
										+'{\\sign{+}}'
										+'{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}'
									+'}'
									+'{\\html{&nbsp;}}'
									+'{\\grp'
										+'{\\frac{\\fracstr{$numnew1}}{\\fracstr{$den1}}}'
										+'{\\sign{+}}'
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
										+'{\\sign{+}}'
										+'{\\frac{\\fracstr{$numnew2}}{\\fracstr{$den2}}}'
									+'}'
									+'{\\html{&nbsp;}}'	
									+'{\\grp'
										+'{\\frac{\\fracstr{$numlcd1}}{\\fracstr{$answerDen}}}'
										+'{\\sign{+}}'
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
									+'{\\ins{Rewrite the answer as a mixed number with a <span class=underline>simplified</span> proper fraction:}}'
									+'{\\grp'
										+'{\\frac{\\str{$numanswer1}}{\\str{$answerDen}}}'
										+'{\\sign{ = }}'
										+'{\\mixed{\\input{$wholeanswer1}}{\\frac{\\input{$numanswer2}}{\\input{$answer1Den}}}}}'
								+'}{well}',
						controls: {
							"checkAnswer": true,
							"help": true,
							"fixBottomRight": true
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
								+'{\\sign{+}}'
								+'{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}'
								+'{\\sign{+}}'
								+'{\\mixed{\\str{$whole3}}{\\frac{\\fracstr{$num3}}{\\fracstr{$den3}}}}'
								+'{\\sign{=}}'
								+'{\\mixed{\\input{$wholeanswer1}}{\\frac{\\input{$numanswer2}}{\\input{$answerDen}}}}}',
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
										+'{\\sign{+}}'
										+'{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}'
										+'{\\sign{+}}'
										+'{\\mixed{\\str{$whole3}}{\\frac{\\fracstr{$num3}}{\\fracstr{$den3}}}}'
									+'}'
									+'{\\html{&nbsp;}}'
									+'{\\grp'
										+'{\\frac{\\input{$numnew1}}{\\fracstr{$den1}}}'
										+'{\\sign{+}}'
										+'{\\frac{\\input{$numnew2}}{\\fracstr{$den2}}}'
										+'{\\sign{+}}'
										+'{\\frac{\\input{$numnew3}}{\\fracstr{$den3}}}'
									+'}'
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
										+'{\\sign{+}}'
										+'{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}'
										+'{\\sign{+}}'
										+'{\\mixed{\\str{$whole3}}{\\frac{\\fracstr{$num3}}{\\fracstr{$den3}}}}'
									+'}'
									+'{\\html{&nbsp;}}'
									+'{\\grp'
										+'{\\frac{\\fracstr{$numnew1}}{\\fracstr{$den1}}}'
										+'{\\sign{+}}'
										+'{\\frac{\\fracstr{$numnew2}}{\\fracstr{$den2}}}'
										+'{\\sign{+}}'
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
										+'{\\sign{+}}'
										+'{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}'
										+'{\\sign{+}}'
										+'{\\mixed{\\str{$whole3}}{\\frac{\\fracstr{$num3}}{\\fracstr{$den3}}}}'
									+'}'
									+'{\\html{&nbsp;}}'
									+'{\\grp'
										+'{\\frac{\\fracstr{$numnew1}}{\\fracstr{$den1}}}'
										+'{\\sign{+}}'
										+'{\\frac{\\fracstr{$numnew2}}{\\fracstr{$den2}}}'
										+'{\\sign{+}}'
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
										+'{\\sign{+}}'
										+'{\\frac{\\fracstr{$numnew2}}{\\fracstr{$den2}}}'
										+'{\\sign{+}}'
										+'{\\frac{\\fracstr{$numnew3}}{\\fracstr{$den3}}}'
									+'}'
									+'{\\html{&nbsp;}}'	
									+'{\\grp'
										+'{\\frac{\\input{$numlcd1}}{\\fracstr{$answerDen}}}'
										+'{\\sign{+}}'
										+'{\\frac{\\input{$numlcd2}}{\\fracstr{$answerDen}}}'
										+'{\\sign{+}}'
										+'{\\frac{\\input{$numlcd3}}{\\fracstr{$answerDen}}}'
									+'}'
								+'{\\html{&nbsp;}}'
								+'}{well}',
						controls: {
							"checkAnswer": true,
							"help": true,
							"fixBottomRight": true
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
									+'{\\sign{+}}'
									+'{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}'
									+'{\\sign{+}}'
									+'{\\mixed{\\str{$whole3}}{\\frac{\\fracstr{$num3}}{\\fracstr{$den3}}}}'
								+'}'
								+'{\\html{&nbsp;}}'
								+'{\\grp'
									+'{\\frac{\\fracstr{$numnew1}}{\\fracstr{$den1}}}'
									+'{\\sign{+}}'
									+'{\\frac{\\fracstr{$numnew2}}{\\fracstr{$den2}}}'
									+'{\\sign{+}}'
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
									+'{\\sign{+}}'
									+'{\\frac{\\fracstr{$numnew2}}{\\fracstr{$den2}}}'
									+'{\\sign{+}}'
									+'{\\frac{\\fracstr{$numnew3}}{\\fracstr{$den3}}}'
								+'}'
								+'{\\html{&nbsp;}}'	
								+'{\\grp'
									+'{\\frac{\\fracstr{$numlcd1}}{\\fracstr{$answerDen}}}'
									+'{\\sign{+}}'
									+'{\\frac{\\fracstr{$numlcd2}}{\\fracstr{$answerDen}}}'
									+'{\\sign{+}}'
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
								"help": true,
								"fixBottomRight": true
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
									+'{\\sign{+}}'
									+'{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}'
									+'{\\sign{+}}'
									+'{\\mixed{\\str{$whole3}}{\\frac{\\fracstr{$num3}}{\\fracstr{$den3}}}}'
								+'}'
								+'{\\html{&nbsp;}}'
								+'{\\grp'
									+'{\\frac{\\fracstr{$numnew1}}{\\fracstr{$den1}}}'
									+'{\\sign{+}}'
									+'{\\frac{\\fracstr{$numnew2}}{\\fracstr{$den2}}}'
									+'{\\sign{+}}'
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
									+'{\\sign{+}}'
									+'{\\frac{\\fracstr{$numnew2}}{\\fracstr{$den2}}}'
									+'{\\sign{+}}'
									+'{\\frac{\\fracstr{$numnew3}}{\\fracstr{$den3}}}'
								+'}'
								+'{\\html{&nbsp;}}'	
								+'{\\grp'
									+'{\\frac{\\fracstr{$numlcd1}}{\\fracstr{$answerDen}}}'
									+'{\\sign{+}}'
									+'{\\frac{\\fracstr{$numlcd2}}{\\fracstr{$answerDen}}}'
									+'{\\sign{+}}'
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
								"help": true,
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
						answer: '\\css{\\grp'
									+'{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}'
									+'{\\sign{+}}'
									+'{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}'
									+'{\\sign{+}}'
									+'{\\mixed{\\str{$whole3}}{\\frac{\\fracstr{$num3}}{\\fracstr{$den3}}}}'
									+'{\\sign{=}}'
									+'{\\mixed{\\input{$wholeanswer1}}{\\frac{\\input{$numanswer3}}{\\input{$answer1Den}}}}}',
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
										+'{\\sign{+}}'
										+'{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}'
										+'{\\sign{+}}'
										+'{\\mixed{\\str{$whole3}}{\\frac{\\fracstr{$num3}}{\\fracstr{$den3}}}}'
									+'}'
									+'{\\html{&nbsp;}}'
									+'{\\grp'
										+'{\\frac{\\input{$numnew1}}{\\fracstr{$den1}}}'
										+'{\\sign{+}}'
										+'{\\frac{\\input{$numnew2}}{\\fracstr{$den2}}}'
										+'{\\sign{+}}'
										+'{\\frac{\\input{$numnew3}}{\\fracstr{$den3}}}'
									+'}'
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
										+'{\\sign{+}}'
										+'{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}'
										+'{\\sign{+}}'
										+'{\\mixed{\\str{$whole3}}{\\frac{\\fracstr{$num3}}{\\fracstr{$den3}}}}'
									+'}'
									+'{\\html{&nbsp;}}'
									+'{\\grp'
										+'{\\frac{\\fracstr{$numnew1}}{\\fracstr{$den1}}}'
										+'{\\sign{+}}'
										+'{\\frac{\\fracstr{$numnew2}}{\\fracstr{$den2}}}'
										+'{\\sign{+}}'
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
											+'{\\sign{+}}'
											+'{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}'
											+'{\\sign{+}}'
											+'{\\mixed{\\str{$whole3}}{\\frac{\\fracstr{$num3}}{\\fracstr{$den3}}}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\frac{\\fracstr{$numnew1}}{\\fracstr{$den1}}}'
											+'{\\sign{+}}'
											+'{\\frac{\\fracstr{$numnew2}}{\\fracstr{$den2}}}'
											+'{\\sign{+}}'
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
											+'{\\sign{+}}'
											+'{\\frac{\\fracstr{$numnew2}}{\\fracstr{$den2}}}'
											+'{\\sign{+}}'
											+'{\\frac{\\fracstr{$numnew3}}{\\fracstr{$den3}}}'
										+'}'
										+'{\\html{&nbsp;}}'	
										+'{\\grp'
											+'{\\frac{\\input{$numlcd1}}{\\fracstr{$answerDen}}}'
											+'{\\sign{+}}'
											+'{\\frac{\\input{$numlcd2}}{\\fracstr{$answerDen}}}'
											+'{\\sign{+}}'
											+'{\\frac{\\input{$numlcd3}}{\\fracstr{$answerDen}}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'}{well}',
							controls: {
								"checkAnswer": true,
								"help": true,
								"fixBottomRight": true
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
												+'{\\sign{+}}'
												+'{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}'
												+'{\\sign{+}}'
												+'{\\mixed{\\str{$whole3}}{\\frac{\\fracstr{$num3}}{\\fracstr{$den3}}}}'
											+'}'
											+'{\\html{&nbsp;}}'
											+'{\\grp'
												+'{\\frac{\\fracstr{$numnew1}}{\\fracstr{$den1}}}'
												+'{\\sign{+}}'
												+'{\\frac{\\fracstr{$numnew2}}{\\fracstr{$den2}}}'
												+'{\\sign{+}}'
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
												+'{\\sign{+}}'
												+'{\\frac{\\fracstr{$numnew2}}{\\fracstr{$den2}}}'
												+'{\\sign{+}}'
												+'{\\frac{\\fracstr{$numnew3}}{\\fracstr{$den3}}}'
											+'}'
											+'{\\html{&nbsp;}}'	
											+'{\\grp'
												+'{\\frac{\\fracstr{$numlcd1}}{\\fracstr{$answerDen}}}'
												+'{\\sign{+}}'
												+'{\\frac{\\fracstr{$numlcd2}}{\\fracstr{$answerDen}}}'
												+'{\\sign{+}}'
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
									"help": true,
									"fixBottomRight": true
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
													+'{\\sign{+}}'
													+'{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}'
													+'{\\sign{+}}'
													+'{\\mixed{\\str{$whole3}}{\\frac{\\fracstr{$num3}}{\\fracstr{$den3}}}}'
												+'}'
												+'{\\html{&nbsp;}}'
												+'{\\grp'
													+'{\\frac{\\fracstr{$numnew1}}{\\fracstr{$den1}}}'
													+'{\\sign{+}}'
													+'{\\frac{\\fracstr{$numnew2}}{\\fracstr{$den2}}}'
													+'{\\sign{+}}'
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
													+'{\\sign{+}}'
													+'{\\frac{\\fracstr{$numnew2}}{\\fracstr{$den2}}}'
													+'{\\sign{+}}'
													+'{\\frac{\\fracstr{$numnew3}}{\\fracstr{$den3}}}'
												+'}'
												+'{\\html{&nbsp;}}'	
												+'{\\grp'
													+'{\\frac{\\fracstr{$numlcd1}}{\\fracstr{$answerDen}}}'
													+'{\\sign{+}}'
													+'{\\frac{\\fracstr{$numlcd2}}{\\fracstr{$answerDen}}}'
													+'{\\sign{+}}'
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
									"help": true,
									"fixBottomRight": true
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
											+'{\\sign{+}}'
											+'{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}'
											+'{\\sign{+}}'
											+'{\\mixed{\\str{$whole3}}{\\frac{\\fracstr{$num3}}{\\fracstr{$den3}}}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\frac{\\fracstr{$numnew1}}{\\fracstr{$den1}}}'
											+'{\\sign{+}}'
											+'{\\frac{\\fracstr{$numnew2}}{\\fracstr{$den2}}}'
											+'{\\sign{+}}'
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
											+'{\\sign{+}}'
											+'{\\frac{\\fracstr{$numnew2}}{\\fracstr{$den2}}}'
											+'{\\sign{+}}'
											+'{\\frac{\\fracstr{$numnew3}}{\\fracstr{$den3}}}'
										+'}'
										+'{\\html{&nbsp;}}'	
										+'{\\grp'
											+'{\\frac{\\fracstr{$numlcd1}}{\\fracstr{$answerDen}}}'
											+'{\\sign{+}}'
											+'{\\frac{\\fracstr{$numlcd2}}{\\fracstr{$answerDen}}}'
											+'{\\sign{+}}'
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
							"help": true,
							"fixBottomRight": true
						}
					}]
				}]
            },
        },
        data = [
			// problem 1
            { whole1: 2, num1: 1, den1: 5, whole2: 3, num2: 2, den2: 5,wholeanswer: '5', numanswer1: 28, numanswer2: 3, answerDen: 5, numnew1: 11, numnew2: 17, numlcd1: 11, numlcd2: 17, template: 'main' },
			// problem 2
			{ whole1: 1, num1: 2, den1: 3, whole2: 2, num2: 1, den2: 3, wholeanswer: 4, numanswer1: 12, numanswer2: 0, answerDen: 3, numnew1: 5, numnew2: 7, numlcd1: 5, numlcd2: 7, template: 'main' },
			// problem 3
			{ whole1: 3, num1: 3, den1: 8, whole2: 3, num2: 7, den2: 8, wholeanswer1: 7, numanswer1: 58, numanswer2: 1, answerDen: 8, answer1Den: 4, numnew1: 27, numnew2: 31, numlcd1: 27, numlcd2: 31, template: 'second' },
			// problem 4
			{ whole1: 2, num1: 1, den1: 10, whole2: 1 , num2: 5, den2: '\xA06\xA0', wholeanswer1: 3, numanswer1: 118, numanswer2: 14, answerDen: 30, answer1Den: 15, numnew1: 21, numnew2: 11, numlcd1: 63, numlcd2: 55, template: 'second' },
			// problem 5
			{ whole1: 2, num1: 3, den1: 8, whole2: 1, num2: 1, den2: 5, wholeanswer: 3, numanswer1: 143, numanswer2: 23, answerDen: 40, numnew1: 19, numnew2: 6, numlcd1: 95, numlcd2: 48, template: 'main' },
			// problem 6
			{ whole1: 2, num1: 7, den1: 12, whole2: 1 , num2: 1, den2: '\xA06\xA0', wholeanswer1: 3, numanswer1: 45, answerDen: 12, answer1Den: 4, numnew1: 31, numnew2: 7, numanswer2: 9, numanswer3: 3, numlcd1: 31, numlcd2: 14, template: 'second' },
			// problem 7
			{ whole1: 2, num1: 2, den1: 9, whole2: 1, num2: 5, den2: 8, wholeanswer: 3, numanswer1: 277,  numanswer2: 61, answerDen: 72, numnew1: 20, numnew2: 13, numlcd1: 160, numlcd2: 117, template: 'main' },
			// problem 8
			{ whole1: 2, num1: 1, den1: 12, whole2: 1, num2: 3, den2: 4, whole3: 4,  num3: 5, den3: 6, wholeanswer1: 8, numanswer1: 104, numanswer2: 8, numanswer3: 2, answerDen: 12, answer1Den: 3, numnew1: 25, numnew2: 7, numnew3: 29, numlcd1: 25, numlcd2: 21, numlcd3: 58, template: 'fourth' },
			// problem 9
			{ whole1: 2, num1: 5, den1: '\xA08\xA0', whole2: 1, num2: 1, den2: 10, whole3: 1, num3: 1, den3: '\xA04\xA0', wholeanswer1: 4, numanswer1: 199, answerDen: 40, numnew1: 21, numnew2: 11, numnew3: 5, numanswer2: 39, numlcd1: 105, numlcd2: 44, numlcd3: 50, template: 'third' },
			// problem 10
			{ whole1: 2, num1: 1, den1: 6, whole2: 3, num2: 1, den2: 4, whole3: 1, num3: 1, den3: 4, wholeanswer1: 6, numanswer1: 80, numanswer2: 8, numanswer3: 2, answerDen: 12, answer1Den: 3, numnew1: 13, numnew2: 13, numnew3: 5, numlcd1: 26, numlcd2: 39, numlcd3: 15, template: 'fourth' },
        ];

    return dataUtils.build(desc, template, data);
}]);
