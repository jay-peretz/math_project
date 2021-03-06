/*global angular */

angular.module('mathSkills').service('data_m_2', ['dataUtils', function (dataUtils) {
    var desc = {
			title: 'M.2 Combining Mixed Numbers',
			path: 'M.2-combining-mixed-numbers',
            children: []
        },
        template = {
            main: {
                title: 'Combining Mixed Numbers',
				children: [{
					title: 'Main Answer',
					children: [{
						problem: '',
						answer: '\\grp'
									+'{\\sign{$firstSign}}{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}'
									+'{\\sign{-}}{\\str{(}}{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}'
									+'{\\str{)}}'
									+'{\\sign{=}}'
									+'{\\mixed{\\input{$wholeanswer}}{\\frac{\\input{$numanswer2}}{\\input{$answerDen}}}}',
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
									+'{\\sign{$firstSign}}{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}'
									+'{\\sign{-}}{\\str{(}}{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}'
									+'{\\str{)}}',
						answer: '\\css'
									+'{\\rowgrp'
										+'{\\ins{Convert the mixed numbers to improper fractions:}}'
										+'{\\grp'
											+'{\\sign{$firstSign}}{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}'
											+'{\\html{<span style="font-size:5%;">&nbsp;</span>}}{\\sign{-}}{\\html{<span style="font-size:5%;">&nbsp;</span>}}'
											+'{\\str{(}}{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}'
											+'{\\str{)}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\frac{\\input{$numnew1}}{\\fracstr{$den1}}}'
											+'{\\sign{-}}'
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
									+'{\\sign{$firstSign}}{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}'
									+'{\\sign{-}}{\\str{(}}{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}'
									+'{\\str{)}}',
						answer: '\\css'
									+'{\\rowgrp'
										+'{\\html{&nbsp;}}'
										+'{\\html{Convert the mixed numbers to improper fractions:}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\sign{$firstSign}}{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}'
											+'{\\html{<span style="font-size:5%;">&nbsp;</span>}}{\\sign{-}}{\\html{<span style="font-size:5%;">&nbsp;</span>}}'
											+'{\\str{(}}{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}'
											+'{\\str{)}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\html{&nbsp;}}'
											+'{\\frac{\\fracstr{$numnew1}}{\\fracstr{$den1}}}'
											+'{\\sign{-}}'
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
						problem: '\\grp'
									+'{\\sign{$firstSign}}{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}'
									+'{\\sign{-}}{\\str{(}}{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}'
									+'{\\str{)}}',
						answer: '\\css'
									+'{\\rowgrp'
										+'{\\html{&nbsp;}}'
										+'{\\html{Convert the mixed numbers to improper fractions:}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\sign{$firstSign}}{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}'
											+'{\\html{<span style="font-size:5%;">&nbsp;</span>}}{\\sign{-}}{\\html{<span style="font-size:5%;">&nbsp;</span>}}'
											+'{\\str{(}}{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}'
											+'{\\str{)}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\html{&nbsp;}}'
											+'{\\frac{\\fracstr{$numnew1}}{\\fracstr{$den1}}}'
											+'{\\sign{-}}'
											+'{\\frac{\\fracstr{$numnew2}}{\\fracstr{$den2}}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\html{Determine the lowest common denominator (LCD) of the fractions:}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\html{&nbsp;}}'
											+'{\\html{$answerDen}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\ins{Use the LCD to convert the fractions:}}'
										+'{\\grp'
											+'{\\html{&nbsp;}}'
											+'{\\frac{\\fracstr{$numnew1}}{\\fracstr{$den1}}}'
											+'{\\sign{-}}'
											+'{\\frac{\\fracstr{$numnew2}}{\\fracstr{$den2}}}'
										+'}'
										+'{\\html{&nbsp;}}'	
										+'{\\grp'
											+'{\\frac{\\input{$numlcd1}}{\\fracstr{$answerDen}}}'
											+'{\\sign{-}}'
											+'{\\frac{\\input{$numlcd2}}{\\fracstr{$answerDen}}}'
										+'}'
										+'{\\html{&nbsp;}}'
									+'}{well}',
						controls: {
							"checkAnswer": true,
							"help": true
						}
					}, {
						problem: '\\grp'
									+'{\\sign{$firstSign}}{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}'
									+'{\\sign{-}}{\\str{(}}{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}'
									+'{\\str{)}}',
						answer: '\\css'
									+'{\\rowgrp'
										+'{\\html{&nbsp;}}'
										+'{\\html{Convert the mixed numbers to improper fractions:}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\sign{$firstSign}}{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}'
											+'{\\html{<span style="font-size:5%;">&nbsp;</span>}}{\\sign{-}}{\\html{<span style="font-size:5%;">&nbsp;</span>}}'
											+'{\\str{(}}{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}'
											+'{\\str{)}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\html{&nbsp;}}'
											+'{\\frac{\\fracstr{$numnew1}}{\\fracstr{$den1}}}'
											+'{\\sign{-}}'
											+'{\\frac{\\fracstr{$numnew2}}{\\fracstr{$den2}}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\html{Determine the lowest common denominator (LCD) of the fractions:}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\html{&nbsp;}}'
											+'{\\html{$answerDen}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\html{Use the LCD to convert the fractions:}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\html{&nbsp;}}'
											+'{\\frac{\\fracstr{$numnew1}}{\\fracstr{$den1}}}'
											+'{\\sign{-}}'
											+'{\\frac{\\fracstr{$numnew2}}{\\fracstr{$den2}}}'
										+'}'
										+'{\\html{&nbsp;}}'	
										+'{\\grp'
											+'{\\html{&nbsp;}}'
											+'{\\frac{\\fracstr{$numlcd1}}{\\fracstr{$answerDen}}}'
											+'{\\sign{-}}'
											+'{\\frac{\\fracstr{$numlcd2}}{\\fracstr{$answerDen}}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\ins{Add the fractions:}}'
										+'{\\grp'
											+'{\\frac'
												+'{\\grp'
													+'{\\str{$numlcd1}}'
													+'{\\sign{-}}'
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
						problem: '\\grp'
									+'{\\sign{$firstSign}}{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}'
									+'{\\sign{-}}{\\str{(}}{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}'
									+'{\\str{)}}',
						answer: '\\css'
									+'{\\rowgrp'
										+'{\\html{&nbsp;}}'
										+'{\\html{Convert the mixed numbers to improper fractions:}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\sign{$firstSign}}{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}'
											+'{\\html{<span style="font-size:5%;">&nbsp;</span>}}{\\sign{-}}{\\html{<span style="font-size:5%;">&nbsp;</span>}}'
											+'{\\str{(}}{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}'
											+'{\\str{)}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\html{&nbsp;}}'
											+'{\\frac{\\fracstr{$numnew1}}{\\fracstr{$den1}}}'
											+'{\\sign{-}}'
											+'{\\frac{\\fracstr{$numnew2}}{\\fracstr{$den2}}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\html{Determine the lowest common denominator (LCD) of the fractions:}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\html{&nbsp;}}'
											+'{\\html{$answerDen}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\html{Use the LCD to convert the fractions:}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\html{&nbsp;}}'
											+'{\\frac{\\fracstr{$numnew1}}{\\fracstr{$den1}}}'
											+'{\\sign{-}}'
											+'{\\frac{\\fracstr{$numnew2}}{\\fracstr{$den2}}}'
										+'}'
										+'{\\html{&nbsp;}}'	
										+'{\\grp'
											+'{\\html{&nbsp;}}'
											+'{\\frac{\\fracstr{$numlcd1}}{\\fracstr{$answerDen}}}'
											+'{\\sign{-}}'
											+'{\\frac{\\fracstr{$numlcd2}}{\\fracstr{$answerDen}}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\html{Add the fractions:}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\frac'
												+'{\\grp'
													+'{\\str{$numlcd1}}'
													+'{\\sign{-}}'
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
											+'{\\frac{\\fracstr{$numanswer1}}{\\str{$answerDen}}}'
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
			first: {
                title: 'Adding Fractions and Mixed Numbers',
				children: [{
					title: 'Main Answer',
					children: [{
						problem: '',
						answer: '\\grp'
									+'{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}'
							+'{\\sign{$secondSign}}{\\str{(}}{\\sign{$thirdSign}}{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}'
									+'{\\str{)}}'
									+'{\\sign{=}}'
									+'{\\mixed{\\input{$wholeanswer}}{\\frac{\\input{$numanswer2}}{\\input{$answerDen}}}}',
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
									+'{\\sign{$secondSign}}'
									+'{\\str{(}}'
									+'{\\sign{$thirdSign}}'
									+'{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}'
									+'{\\str{)}}',
						answer: '\\css'
									+'{\\rowgrp'
										+'{\\ins{Convert the mixed numbers to improper fractions:}}'
										+'{\\grp'
											+'{\\html{&nbsp;}}'
											+'{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}'
											+'{\\html{<span style="font-size:5%;">&nbsp;</span>}}{\\html{<span style="font-size:5%;">&nbsp;</span>}}'
						+'{\\sign{$secondSign}}{\\str{(}}{\\sign{$thirdSign}}{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}'
											+'{\\str{)}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\frac{\\input{$numnew1}}{\\input{$den3}}}'
											+'{\\sign{$secondSign}}{\\str{(}}{\\sign{$thirdSign}}'
											+'{\\frac{\\input{$numnew2}}{\\fracstr{$den2}}}'
											+'{\\str{)}}'
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
									+'{\\sign{$secondSign}}'
									+'{\\str{(}}{\\sign{$thirdSign}}{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}'
									+'{\\str{)}}',
						answer: '\\css'
									+'{\\rowgrp'
										+'{\\html{&nbsp;}}'
										+'{\\html{Convert the mixed numbers to improper fractions:}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\html{&nbsp;}}'
											+'{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}'
											+'{\\html{<span style="font-size:5%;">&nbsp;</span>}}{\\html{<span style="font-size:5%;">&nbsp;</span>}}'
											+'{\\sign{$secondSign}}'
											+'{\\str{(}}{\\sign{$thirdSign}}{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}'
											+'{\\str{)}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\frac{\\fracstr{$numnew1}}{\\fracstr{$den3}}}'
											+'{\\sign{$secondSign}}'
											+'{\\str{(}}{\\sign{$thirdSign}}{\\frac{\\fracstr{$numnew2}}{\\fracstr{$den2}}}'
											+'{\\str{)}}'
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
						problem: '\\grp'
									+'{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}'
									+'{\\sign{$secondSign}}'
									+'{\\str{(}}{\\sign{$thirdSign}}{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}'
									+'{\\str{)}}',
						answer: '\\css'
									+'{\\rowgrp'
										+'{\\html{&nbsp;}}'
										+'{\\html{Convert the mixed numbers to improper fractions:}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\html{&nbsp;}}'
											+'{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}'
											+'{\\html{<span style="font-size:5%;">&nbsp;</span>}}{\\html{<span style="font-size:5%;">&nbsp;</span>}}'
											+'{\\sign{$secondSign}}'
											+'{\\str{(}}{\\sign{$thirdSign}}{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}'
											+'{\\str{)}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\frac{\\fracstr{$numnew1}}{\\fracstr{$den3}}}'
											+'{\\sign{$secondSign}}'
											+'{\\str{(}}{\\sign{$thirdSign}}{\\frac{\\fracstr{$numnew2}}{\\fracstr{$den2}}}'
											+'{\\str{)}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\html{Determine the lowest common denominator (LCD) of the fractions:}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\html{&nbsp;}}'
											+'{\\html{$answerDen}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\ins{Use the LCD to convert the fractions:}}'
										+'{\\grp'
											+'{\\frac{\\fracstr{$numnew1}}{\\fracstr{$den3}}}'
											+'{\\sign{$secondSign}}'
											+'{\\str{(}}{\\sign{$thirdSign}}{\\frac{\\fracstr{$numnew2}}{\\fracstr{$den2}}}'
											+'{\\str{)}}'
										+'}'
										+'{\\html{&nbsp;}}'	
										+'{\\grp'
											+'{\\frac{\\input{$numlcd1}}{\\fracstr{$answerDen}}}'
											+'{\\sign{$secondSign}}'
											+'{\\str{(}}{\\sign{$thirdSign}}{\\frac{\\input{$numlcd2}}{\\fracstr{$answerDen}}}'
											+'{\\str{)}}'
										+'}'
										+'{\\html{&nbsp;}}'
									+'}{well}',
						controls: {
							"checkAnswer": true,
							"help": true
						}
					}, {
						problem: '\\grp'
									+'{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}'
									+'{\\sign{$secondSign}}'
									+'{\\str{(}}{\\sign{$thirdSign}}{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}'
									+'{\\str{)}}',
						answer: '\\css'
									+'{\\rowgrp'
										+'{\\html{&nbsp;}}'
										+'{\\html{Convert the mixed numbers to improper fractions:}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\html{&nbsp;}}'
											+'{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}'
											+'{\\html{<span style="font-size:5%;">&nbsp;</span>}}{\\html{<span style="font-size:5%;">&nbsp;</span>}}'
											+'{\\sign{$secondSign}}'
											+'{\\str{(}}{\\sign{$thirdSign}}{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}'
											+'{\\str{)}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\frac{\\fracstr{$numnew1}}{\\fracstr{$den3}}}'
											+'{\\sign{$secondSign}}'
											+'{\\str{(}}{\\sign{$thirdSign}}{\\frac{\\fracstr{$numnew2}}{\\fracstr{$den2}}}'
											+'{\\str{)}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\html{Determine the lowest common denominator (LCD) of the fractions:}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\html{&nbsp;}}'
											+'{\\html{$answerDen}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\str{Use the LCD to convert the fractions:}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\frac{\\fracstr{$numnew1}}{\\fracstr{$den3}}}'
											+'{\\sign{$secondSign}}'
											+'{\\str{(}}{\\sign{$thirdSign}}{\\frac{\\fracstr{$numnew2}}{\\fracstr{$den2}}}'
											+'{\\str{)}}'
										+'}'
										+'{\\html{&nbsp;}}'	
										+'{\\grp'
											+'{\\frac{\\fracstr{$numlcd1}}{\\fracstr{$answerDen}}}'
											+'{\\sign{$secondSign}}'
											+'{\\str{(}}{\\sign{$thirdSign}}{\\frac{\\fracstr{$numlcd2}}{\\fracstr{$answerDen}}}'
											+'{\\str{)}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\ins{Add the fractions:}}'
										+'{\\grp'
											+'{\\frac'
												+'{\\grp'
													+'{\\str{$numlcd1}}'
													+'{\\sign{$thirdSign}}'
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
						problem: '\\grp'
									+'{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}'
									+'{\\sign{$secondSign}}'
									+'{\\str{(}}{\\sign{$thirdSign}}{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}'
									+'{\\str{)}}',
						answer: '\\css'
									+'{\\rowgrp'
										+'{\\html{&nbsp;}}'
										+'{\\html{Convert the mixed numbers to improper fractions:}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\html{&nbsp;}}'
											+'{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}'
											+'{\\html{<span style="font-size:5%;">&nbsp;</span>}}{\\html{<span style="font-size:5%;">&nbsp;</span>}}'
											+'{\\sign{$secondSign}}'
											+'{\\str{(}}{\\sign{$thirdSign}}{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}'
											+'{\\str{)}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\frac{\\fracstr{$numnew1}}{\\fracstr{$den3}}}'
											+'{\\sign{$secondSign}}'
											+'{\\str{(}}{\\sign{$thirdSign}}{\\frac{\\fracstr{$numnew2}}{\\fracstr{$den2}}}'
											+'{\\str{)}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\html{Determine the lowest common denominator (LCD) of the fractions:}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\html{&nbsp;}}'
											+'{\\html{$answerDen}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\str{Use the LCD to convert the fractions:}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\frac{\\fracstr{$numnew1}}{\\fracstr{$den3}}}'
											+'{\\sign{$secondSign}}'
											+'{\\str{(}}{\\sign{$thirdSign}}{\\frac{\\fracstr{$numnew2}}{\\fracstr{$den2}}}'
											+'{\\str{)}}'
										+'}'
										+'{\\html{&nbsp;}}'	
										+'{\\grp'
											+'{\\frac{\\fracstr{$numlcd1}}{\\fracstr{$answerDen}}}'
											+'{\\sign{$secondSign}}'
											+'{\\str{(}}{\\sign{$thirdSign}}{\\frac{\\fracstr{$numlcd2}}{\\fracstr{$answerDen}}}'
											+'{\\str{)}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\html{Add the fractions:}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\frac'
												+'{\\grp'
													+'{\\str{$numlcd1}}'
													+'{\\sign{$thirdSign}}'
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
											+'{\\frac{\\fracstr{$numanswer1}}{\\str{$answerDen}}}'
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
			f1: {
                title: 'Addition of Mixed Numbers',
				children: [{
					title: 'Main Answer',
					children: [{
						problem: '',
						answer: '\\grp'
									+'{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}'
									+'{\\sign{+}}'
									+'{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}'
									+'{\\sign{=}}'
									+'{\\mixed{\\input{$wholeanswer}}{\\frac{\\input{$numanswer2}}{\\input{$answerDen}}}}',
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
									+'{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}',
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
									+'{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}',
						answer: '\\css'
									+'{\\rowgrp'
										+'{\\html{&nbsp;}}'
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
						problem: '\\grp'
									+'{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}'
									+'{\\sign{+}}'
									+'{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}',
						answer: '\\css'
									+'{\\rowgrp'
										+'{\\html{&nbsp;}}'
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
											+'{\\frac{\\fracstr{$numanswer1}}{\\str{$answerDen}}}'
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
                title: 'Addition of Mixed Numbers',
				children: [{
					title: 'Main Answer',
					children: [{
						problem: '',
						answer: '\\grp'
									+'{\\sign{$firstSign}}'
									+'{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}'
									+'{\\sign{$secondSign}}'
									+'{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}'
									+'{\\sign{=}}'
									+'{\\frac{\\input{$numanswer2}}{\\input{$answerDen}}}',
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
									+'{\\sign{$firstSign}}{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}'
									+'{\\sign{$secondSign}}'
									+'{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}',
						answer: '\\css'
									+'{\\rowgrp'
										+'{\\ins{Convert the mixed numbers to improper fractions:}}'
										+'{\\grp'
											+'{\\sign{$firstSign}}{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}'
											+'{\\html{<span style="font-size:5%;">&nbsp;</span>}}{\\sign{$secondSign}}{\\html{<span style="font-size:5%;">&nbsp;</span>}}'
											+'{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\frac{\\input{$numnew1}}{\\fracstr{$den1}}}'
											+'{\\sign{$secondSign}}'
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
									+'{\\sign{$firstSign}}{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}'
									+'{\\sign{$secondSign}}'
									+'{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}',
						answer: '\\css'
									+'{\\rowgrp'
										+'{\\html{&nbsp;}}'
										+'{\\html{Convert the mixed numbers to improper fractions:}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\sign{$firstSign}}{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}'
											+'{\\html{<span style="font-size:5%;">&nbsp;</span>}}{\\sign{$secondSign}}{\\html{<span style="font-size:5%;">&nbsp;</span>}}'
											+'{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\html{&nbsp;}}'
											+'{\\frac{\\fracstr{$numnew1}}{\\fracstr{$den1}}}'
											+'{\\sign{$secondSign}}'
											+'{\\frac{\\fracstr{$numnew2}}{\\fracstr{$den2}}}'
										+'}'
										+'{\\html{&nbsp;}}'	
										+'{\\ins{Combine the fractions:}}'
										+'{\\grp'
											+'{\\frac'
												+'{\\grp'
													+'{\\str{$numlcd1}}'
													+'{\\sign{$secondSign}}'
													+'{\\str{$numlcd2}}'
												+'}'
												+'{\\fracstr{$answerDen}}'
											+'}'
											+'{\\sign{=}}'
											+'{\\frac{\\input{$numanswer1}}{\\input{$answerDen}}}'
										+'}'
										+'{\\html{&nbsp;}}'
									+'}{well}',
						controls: {
							"checkAnswer": true,
							"help": true,
							"fixBottomRight": true
						}
					},]
				}]
            },
			third: {
                title: 'Adding Mixed Numbers',
				children: [{
					title: 'Main Answer',
					children: [{
						problem: '',
						answer: '\\grp'
									+'{\\sign{$sign1}}'
									+'{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}'
									+'{\\sign{$sign2}}'
									+'{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}'
									+'{\\sign{$sign3}}'
									+'{\\mixed{\\str{$whole3}}{\\frac{\\fracstr{$num3}}{\\fracstr{$den3}}}}'
									+'{\\sign{=}}'
									+'{\\frac{\\input{$numanswer2}}{\\input{$answerDen}}}',
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
									+'{\\sign{$sign1}}{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}'
									+'{\\sign{$sign2}}'
									+'{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}'
									+'{\\sign{$sign3}}'
									+'{\\mixed{\\str{$whole3}}{\\frac{\\fracstr{$num3}}{\\fracstr{$den3}}}}',
						answer: '\\css'
									+'{\\rowgrp'
									+'{\\ins{Convert the mixed numbers to improper fractions:}}'
									+'{\\grp'
										+'{\\sign{$sign1}}{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}'
										+'{\\sign{$sign2}}'
										+'{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}'
										+'{\\sign{$sign3}}'
										+'{\\mixed{\\str{$whole3}}{\\frac{\\fracstr{$num3}}{\\fracstr{$den3}}}}'
									+'}'
									+'{\\html{&nbsp;}}'
									+'{\\grp'
										+'{\\sign{$sign1}}'
										+'{\\frac{\\input{$numnew1}}{\\fracstr{$den1}}}'
										+'{\\sign{$sign2}}'
										+'{\\frac{\\input{$numnew2}}{\\fracstr{$den2}}}'
										+'{\\sign{$sign3}}'
										+'{\\frac{\\input{$numnew3}}{\\fracstr{$den3}}}'
									+'}'
									+'}{well}',
						controls: {
							"checkAnswer": true,
							"help": true
						},
					}, {
						problem: '\\grp'
									+'{\\sign{$sign1}}{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}'
									+'{\\sign{$sign2}}'
									+'{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}'
									+'{\\sign{$sign3}}'
									+'{\\mixed{\\str{$whole3}}{\\frac{\\fracstr{$num3}}{\\fracstr{$den3}}}}',
						answer: '\\css'
									+'{\\rowgrp'
										+'{\\html{&nbsp;}}'
										+'{\\str{Convert the mixed numbers to improper fractions:}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
										+'{\\sign{$sign1}}{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}'
										+'{\\sign{$sign2}}'
										+'{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}'
										+'{\\sign{$sign3}}'
										+'{\\mixed{\\str{$whole3}}{\\frac{\\fracstr{$num3}}{\\fracstr{$den3}}}}'
									+'}'
									+'{\\html{&nbsp;}}'
									+'{\\grp'
										+'{\\sign{$sign1}}{\\frac{\\fracstr{$numnew1}}{\\fracstr{$den1}}}'
										+'{\\sign{$sign2}}'
										+'{\\frac{\\fracstr{$numnew2}}{\\fracstr{$den2}}}'
										+'{\\sign{$sign3}}'
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
						problem: '\\grp'
									+'{\\sign{$sign1}}{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}'
									+'{\\sign{$sign2}}'
									+'{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}'
									+'{\\sign{$sign3}}'
									+'{\\mixed{\\str{$whole3}}{\\frac{\\fracstr{$num3}}{\\fracstr{$den3}}}}',	
						answer: '\\css'
									+'{\\rowgrp'
										+'{\\html{&nbsp;}}'
										+'{\\str{Convert the mixed numbers to improper fractions:}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
										+'{\\sign{$sign1}}{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}'
										+'{\\sign{$sign2}}'
										+'{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}'
										+'{\\sign{$sign3}}'
										+'{\\mixed{\\str{$whole3}}{\\frac{\\fracstr{$num3}}{\\fracstr{$den3}}}}'
									+'}'
									+'{\\html{&nbsp;}}'
									+'{\\grp'
										+'{\\sign{$sign1}}{\\frac{\\fracstr{$numnew1}}{\\fracstr{$den1}}}'
										+'{\\sign{$sign2}}'
										+'{\\frac{\\fracstr{$numnew2}}{\\fracstr{$den2}}}'
										+'{\\sign{$sign3}}'
										+'{\\frac{\\fracstr{$numnew3}}{\\fracstr{$den3}}}'
									+'}'
									+'{\\html{&nbsp;}}'
									+'{\\html{Determine the lowest common denominator (LCD) of the fractions:}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\html{&nbsp;}}'
											+'{\\html{$answerDen}}'
										+'}'
										+'{\\html{&nbsp;}}'
									+'{\\ins{Use the LCD to convert the fractions:}}'
									+'{\\grp'
										+'{\\sign{$sign1}}{\\frac{\\fracstr{$numnew1}}{\\fracstr{$den1}}}'
										+'{\\sign{$sign2}}'
										+'{\\frac{\\fracstr{$numnew2}}{\\fracstr{$den2}}}'
										+'{\\sign{$sign3}}'
										+'{\\frac{\\fracstr{$numnew3}}{\\fracstr{$den3}}}'
									+'}'
									+'{\\html{&nbsp;}}'	
									+'{\\grp'
										+'{\\sign{$sign1}}{\\frac{\\input{$numlcd1}}{\\fracstr{$answerDen}}}'
										+'{\\sign{$sign2}}'
										+'{\\frac{\\input{$numlcd2}}{\\fracstr{$answerDen}}}'
										+'{\\sign{$sign3}}'
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
						problem: '\\grp'
									+'{\\sign{$sign1}}{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}'
									+'{\\sign{$sign2}}'
									+'{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}'
									+'{\\sign{$sign3}}'
									+'{\\mixed{\\str{$whole3}}{\\frac{\\fracstr{$num3}}{\\fracstr{$den3}}}}',
						answer: '\\css'
								+'{\\rowgrp'
										+'{\\html{&nbsp;}}'
										+'{\\str{Convert the mixed numbers to improper fractions:}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
										+'{\\sign{$sign1}}{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}'
										+'{\\sign{$sign2}}'
										+'{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}'
										+'{\\sign{$sign3}}'
										+'{\\mixed{\\str{$whole3}}{\\frac{\\fracstr{$num3}}{\\fracstr{$den3}}}}'
									+'}'
									+'{\\html{&nbsp;}}'
									+'{\\grp'
										+'{\\sign{$sign1}}{\\frac{\\fracstr{$numnew1}}{\\fracstr{$den1}}}'
										+'{\\sign{$sign2}}'
										+'{\\frac{\\fracstr{$numnew2}}{\\fracstr{$den2}}}'
										+'{\\sign{$sign3}}'
										+'{\\frac{\\fracstr{$numnew3}}{\\fracstr{$den3}}}'
									+'}'
									+'{\\html{&nbsp;}}'
									+'{\\html{Determine the lowest common denominator (LCD) of the fractions:}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\html{&nbsp;}}'
											+'{\\html{$answerDen}}'
										+'}'
										+'{\\html{&nbsp;}}'
									+'{\\str{Use the LCD to convert the fractions:}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp'
										+'{\\sign{$sign1}}{\\frac{\\fracstr{$numnew1}}{\\fracstr{$den1}}}'
										+'{\\sign{$sign2}}'
										+'{\\frac{\\fracstr{$numnew2}}{\\fracstr{$den2}}}'
										+'{\\sign{$sign3}}'
										+'{\\frac{\\fracstr{$numnew3}}{\\fracstr{$den3}}}'
									+'}'
									+'{\\html{&nbsp;}}'	
								+'{\\grp'
									+'{\\sign{$sign1}}{\\frac{\\fracstr{$numlcd1}}{\\fracstr{$answerDen}}}'
									+'{\\sign{$sign2}}'
									+'{\\frac{\\fracstr{$numlcd2}}{\\fracstr{$answerDen}}}'
									+'{\\sign{$sign3}}'
									+'{\\frac{\\fracstr{$numlcd3}}{\\fracstr{$answerDen}}}'
								+'}'
							+'{\\html{&nbsp;}}'
								+'{\\ins{Add the fractions:}}'
								+'{\\grp'
									+'{\\frac'
										+'{\\grp'
											+'{\\sign{$sign1}}'
											+'{\\str{$numlcd1}}'
											+'{\\sign{$sign2}}'
											+'{\\str{$numlcd2}}'
											+'{\\sign{$sign3}}'
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
					}]
				}]
            },
			
			fourth: {
                title: 'Addition of Mixed Numbers',
				children: [{
					title: 'Main Answer',
					children: [{
						problem: '',
						answer: '\\grp'
									+'{\\sign{$firstSign}}{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}'
									+'{\\sign{$secondSign}}'
									+'{\\html{$leftParen}}' 
									+'{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}'
									+'{\\html{$rightParen}}' 
									+'{\\sign{=}}'
									+'{\\frac{\\input{$numanswer2}}{\\input{$answerDen}}}',
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
									+'{\\sign{$firstSign}}{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}'
									+'{\\sign{$secondSign}}'
									+'{\\html{$leftParen}}' 
									+'{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}'
									+'{\\html{$rightParen}}' ,
						answer: '\\css'
									+'{\\rowgrp'
										+'{\\html{&nbsp;}}'
										+'{\\str{Convert the mixed numbers to improper fractions:}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\sign{$firstSign}}{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}'
											+'{\\html{<span style="font-size:5%;">&nbsp;</span>}}{\\sign{$secondSign}}{\\html{<span style="font-size:5%;">&nbsp;</span>}}'
											+'{\\html{$leftParen}}' 
											+'{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}'
											+'{\\html{$rightParen}}' 
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\frac{\\input{$numnew1}}{\\fracstr{$den1}}}'
											+'{\\sign{$secondSign}}'
											+'{\\frac{\\input{$numnew2}}{\\fracstr{$den2}}}'
										+'}'
										+'{\\html{&nbsp;}}'
									+'}{well}',
						controls: {
							"checkAnswer": true,
							"help": true
						}
					}, {
						problem: '\\grp'
									+'{\\sign{$firstSign}}{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}'
									+'{\\sign{$secondSign}}'
									+'{\\html{$leftParen}}' 
									+'{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}'
									+'{\\html{$rightParen}}',
						answer: '\\css'
									+'{\\rowgrp'
										+'{\\html{&nbsp;}}'
										+'{\\html{Convert the mixed numbers to improper fractions:}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\sign{$firstSign}}{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}'
											+'{\\html{<span style="font-size:5%;">&nbsp;</span>}}{\\sign{$secondSign}}{\\html{<span style="font-size:5%;">&nbsp;</span>}}'
											+'{\\html{$leftParen}}' 
											+'{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}'
											+'{\\html{$rightParen}}' 
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\html{&nbsp;}}'
											+'{\\frac{\\fracstr{$numnew1}}{\\fracstr{$den1}}}'
											+'{\\sign{$secondSign}}'
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
						problem: '\\grp'
									+'{\\sign{$firstSign}}{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}'
									+'{\\sign{$secondSign}}'
									+'{\\html{$leftParen}}' 
									+'{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}'
									+'{\\html{$rightParen}}',
						answer: '\\css'
									+'{\\rowgrp'
										+'{\\html{&nbsp;}}'
										+'{\\html{Convert the mixed numbers to improper fractions:}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\sign{$firstSign}}{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}'
											+'{\\html{<span style="font-size:5%;">&nbsp;</span>}}{\\sign{$secondSign}}{\\html{<span style="font-size:5%;">&nbsp;</span>}}'
											+'{\\html{$leftParen}}' 
											+'{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}'
											+'{\\html{$rightParen}}' 
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\html{&nbsp;}}'
											+'{\\frac{\\fracstr{$numnew1}}{\\fracstr{$den1}}}'
											+'{\\sign{$secondSign}}'
											+'{\\frac{\\fracstr{$numnew2}}{\\fracstr{$den2}}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\html{Determine the lowest common denominator (LCD) of the fractions:}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\html{&nbsp;}}'
											+'{\\html{$answerDen}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\ins{Use the LCD to convert the fractions:}}'
										+'{\\grp'
											+'{\\html{&nbsp;}}'
											+'{\\frac{\\fracstr{$numnew1}}{\\fracstr{$den1}}}'
											+'{\\sign{$secondSign}}'
											+'{\\frac{\\fracstr{$numnew2}}{\\fracstr{$den2}}}'
										+'}'
										+'{\\html{&nbsp;}}'	
										+'{\\grp'
											+'{\\frac{\\input{$numlcd1}}{\\fracstr{$answerDen}}}'
											+'{\\sign{$secondSign}}'
											+'{\\frac{\\input{$numlcd2}}{\\fracstr{$answerDen}}}'
										+'}'
										+'{\\html{&nbsp;}}'
									+'}{well}',
						controls: {
							"checkAnswer": true,
							"help": true
						}
					},
					{
						problem: '\\grp'
									+'{\\sign{$firstSign}}{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}'
									+'{\\sign{$secondSign}}'
									+'{\\html{$leftParen}}' 
									+'{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}'
									+'{\\html{$rightParen}}',
						answer: '\\css'
									+'{\\rowgrp'
										+'{\\html{&nbsp;}}'
										+'{\\html{Convert the mixed numbers to improper fractions:}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\sign{$firstSign}}{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}'
											+'{\\html{<span style="font-size:5%;">&nbsp;</span>}}{\\sign{$secondSign}}{\\html{<span style="font-size:5%;">&nbsp;</span>}}'
											+'{\\html{$leftParen}}' 
											+'{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}'
											+'{\\html{$rightParen}}' 
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\html{&nbsp;}}'
											+'{\\frac{\\fracstr{$numnew1}}{\\fracstr{$den1}}}'
											+'{\\sign{$secondSign}}'
											+'{\\frac{\\fracstr{$numnew2}}{\\fracstr{$den2}}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\html{Determine the lowest common denominator (LCD) of the fractions:}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\html{&nbsp;}}'
											+'{\\html{$answerDen}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\str{Use the LCD to convert the fractions:}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\html{&nbsp;}}'
											+'{\\frac{\\fracstr{$numnew1}}{\\fracstr{$den1}}}'
											+'{\\sign{$secondSign}}'
											+'{\\frac{\\fracstr{$numnew2}}{\\fracstr{$den2}}}'
										+'}'
										+'{\\html{&nbsp;}}'	
										+'{\\grp'
											+'{\\html{&nbsp;}}'
											+'{\\frac{\\fracstr{$numlcd1}}{\\fracstr{$answerDen}}}'
											+'{\\sign{$secondSign}}'
											+'{\\frac{\\fracstr{$numlcd2}}{\\fracstr{$answerDen}}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\ins{Combine the fractions:}}'
										+'{\\grp'
											+'{\\frac'
												+'{\\grp'
													+'{\\str{$numlcd1}}'
													+'{\\sign{$secondSign}}'
													+'{\\str{$numlcd2}}'
												+'}'
												+'{\\fracstr{$answerDen}}'
											+'}'
											+'{\\sign{=}}'
											+'{\\frac{\\input{$numanswer1}}{\\input{$answerDen}}}'
										+'}'
										+'{\\html{&nbsp;}}'
									+'}{well}',
						controls: {
							"checkAnswer": true,
							"help": true,
							"fixBottomRight": true
						}
					},]
				}]
            },
			twoFracDblNeg: {
                title: 'Adding Fractions and Mixed Numbers',
				children: [{
					title: 'Main Answer',
					children: [{
						problem: '',
						answer: '\\grp'
									+'{$firstSign}{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}'
									+'{\\sign{$secondSign}}'
									+'{\\str{(}}{\\sign{$thirdSign}}{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}{\\str{)}}'
									+'{\\sign{=}}'
									+'{\\mixed{\\input{$wholeanswer}}{\\frac{\\input{$numanswer2}}{\\input{$answerDen}}}}',
						controls: {
								"checkAnswer": true,
								"help": false,
								"workbook": true,
								"stepwiseNextProblem": "Check Answer"
						}
					}]
				}, {
					title: 'Workbook',
					children: [{
						problem: '\\grp'
									+'{$firstSign}'
									+'{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}'
									+'{\\sign{$secondSign}}'
									+'{\\str{(}}'
									+'{\\sign{$thirdSign}}'
									+'{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}'
									+'{\\str{)}}',
						answer: '\\rowgrp'+
									'{\\ins{Choose the expression that is rewritten correctly without any double negatives:}}'+
										'{\\grp{\\btn{A}{$buttonValueA}{marg}}{$buttonLabelA}}'+
										'{\\html{&nbsp;}}'+
										'{\\grp{\\btn{B}{$buttonValueB}{marg}}{$buttonLabelB}}'+
										'{\\html{&nbsp;}}'+
										'{\\grp{\\btn{C}{$buttonValueC}{marg}}{$buttonLabelC}}'+
										'{\\html{&nbsp;}}'+
										'{\\grp{\\btn{D}{$buttonValueD}{marg}}{$buttonLabelD}}',
						controls: {
							"checkAnswer": true,
							"help": '\\rowgrp'
										+'{\\html{&nbsp;}}'
										+'{\\html{The minus sign in front of a parenthesis means to take the opposite sign of the negative $negFrac inside the parenthesis.}}'
										+'{\\html{&nbsp;}}'
										+'{\\html{The expression without double negatives is:}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{$firstSign}{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}'
											+'{\\sign{+ }}'
											+'{\\str{(}}{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}{\\str{)}}'
										+'}'
						},
                    }, {
						problem: '\\grp'
									+'{$firstSign}'
									+'{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}'
									+'{\\sign{$secondSign}}'
									+'{\\str{(}}'
									+'{\\sign{$thirdSign}}'
									+'{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}'
									+'{\\str{)}}',
						answer: '\\css'
									+'{\\rowgrp'
										+'{\\html{The expression without double negatives is:}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{$firstSign}'
											+'{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}'
											+'{\\html{<span style="font-size:5%;">&nbsp;</span>}}{\\sign{+}}{\\html{<span style="font-size:5%;">&nbsp;</span>}}'
											+'{\\str{(}}'
											+'{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}{\\str{)}}'
										+'}'
										+'{\\html{&nbsp;}}'
									+'{\\ins{Convert the mixed numbers to improper fractions:}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp'
										+'{$firstSign}'
										+'{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}'
											+'{\\html{<span style="font-size:5%;">&nbsp;</span>}}{\\sign{+}}{\\html{<span style="font-size:5%;">&nbsp;</span>}}'
											+'{\\str{(}}'
											+'{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}{\\str{)}}'
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
							"help": true,
							"stepwiseNextProblem": "Check Answer"
						},
					}, {
						problem: '\\grp'
									+'{$firstSign}'
									+'{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}'
									+'{\\sign{$secondSign}}'
									+'{\\str{(}}'
									+'{\\sign{$thirdSign}}'
									+'{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}'
									+'{\\str{)}}',
						answer: '\\css'
									+'{\\rowgrp'
										+'{\\html{The expression without double negatives is:}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{$firstSign}'
											+'{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}'
											+'{\\html{<span style="font-size:5%;">&nbsp;</span>}}{\\sign{+}}{\\html{<span style="font-size:5%;">&nbsp;</span>}}'
											+'{\\str{(}}'
											+'{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}{\\str{)}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\html{Convert the mixed numbers to improper fractions:}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
										+'{$firstSign}'
										+'{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}'
										+'{\\html{<span style="font-size:5%;">&nbsp;</span>}}'
										+'{\\sign{+}}'
										+'{\\html{<span style="font-size:5%;">&nbsp;</span>}}'
										+'{\\str{(}}'
										+'{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}'
										+'{\\str{)}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\html{&nbsp;}}'																			 											+'{\\frac{\\fracstr{$numnew1}}{\\fracstr{$den1}}}'
											+'{\\sign{+}}'
											+'{\\frac{\\fracstr{$numnew2}}{\\fracstr{$den2}}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\ins{Determine the lowest common denominator (LCD) of the fractions:}}'
										+'{\\grp{\\input{$answerDen}}}'
									+'}{well}',
						controls: {
							"checkAnswer": true,
							"help": true,
							"stepwiseNextProblem": "Check Answer"
						},
					}, {
						problem: '\\grp'
									+'{$firstSign}'
									+'{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}'
									+'{\\sign{$secondSign}}'
									+'{\\str{(}}'
									+'{\\sign{$thirdSign}}'
									+'{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}'
									+'{\\str{)}}',
						answer: '\\css'
									+'{\\rowgrp'
										+'{\\html{The expression without double negatives is:}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{$firstSign}'
											+'{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}'
											+'{\\html{<span style="font-size:5%;">&nbsp;</span>}}{\\sign{+}}{\\html{<span style="font-size:5%;">&nbsp;</span>}}'
											+'{\\str{(}}'
											+'{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}{\\str{)}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\html{Convert the mixed numbers to improper fractions:}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{$firstSign}'
											+'{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}'
											+'{\\html{<span style="font-size:5%;">&nbsp;</span>}}{\\sign{+}}{\\html{<span style="font-size:5%;">&nbsp;</span>}}'
											+'{\\str{(}}'
											+'{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}{\\str{)}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\html{&nbsp;}}'																			 											+'{\\frac{\\fracstr{$numnew1}}{\\fracstr{$den1}}}'
											+'{\\sign{+}}'
											+'{\\frac{\\fracstr{$numnew2}}{\\fracstr{$den2}}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\html{Determine the lowest common denominator (LCD) of the fractions:}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\html{&nbsp;}}'
											+'{\\html{$answerDen}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\ins{Use the LCD to convert the fractions:}}'
										+'{\\grp'
											+'{\\html{&nbsp;}}'																			 											+'{\\frac{\\fracstr{$numnew1}}{\\fracstr{$den1}}}'
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
							"stepwiseNextProblem": "Check Answer",
							"fixBottomRight": true
						}
					}, {
						problem: '\\grp'
									+'{$firstSign}'
									+'{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}'
									+'{\\sign{$secondSign}}'
									+'{\\str{(}}'
									+'{\\sign{$thirdSign}}'
									+'{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}'
									+'{\\str{)}}',
						answer: '\\css'
									+'{\\rowgrp'
										+'{\\html{The expression without double negatives is:}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{$firstSign}'
											+'{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}'
											+'{\\html{<span style="font-size:5%;">&nbsp;</span>}}{\\sign{+}}{\\html{<span style="font-size:5%;">&nbsp;</span>}}'
											+'{\\str{(}}'
											+'{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}{\\str{)}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\html{Convert the mixed numbers to improper fractions:}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{$firstSign}'
											+'{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}'
											+'{\\html{<span style="font-size:5%;">&nbsp;</span>}}{\\sign{+}}{\\html{<span style="font-size:5%;">&nbsp;</span>}}'
											+'{\\str{(}}'
											+'{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}{\\str{)}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\html{&nbsp;}}'																			 											+'{\\frac{\\fracstr{$numnew1}}{\\fracstr{$den1}}}'
											+'{\\sign{+}}'
											+'{\\frac{\\fracstr{$numnew2}}{\\fracstr{$den2}}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\html{Determine the lowest common denominator (LCD) of the fractions:}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\html{&nbsp;}}'
											+'{\\html{$answerDen}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\html{Use the LCD to convert the fractions:}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\html{&nbsp;}}'																			 											+'{\\frac{\\fracstr{$numnew1}}{\\fracstr{$den1}}}'
											+'{\\sign{+}}'
											+'{\\frac{\\fracstr{$numnew2}}{\\fracstr{$den2}}}'
										+'}'
										+'{\\html{&nbsp;}}'	
										+'{\\grp'
											+'{\\html{&nbsp;}}'
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
							"stepwiseNextProblem": "Check Answer",
							"fixBottomRight": true
						}
					}, {
						problem: '\\grp'
									+'{$firstSign}'
									+'{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}'
									+'{\\sign{$secondSign}}'
									+'{\\str{(}}'
									+'{\\sign{$thirdSign}}'
									+'{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}'
									+'{\\str{)}}',
						answer: '\\css'
									+'{\\rowgrp'
										+'{\\html{The expression without double negatives is:}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{$firstSign}'
											+'{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}'
											+'{\\html{<span style="font-size:5%;">&nbsp;</span>}}{\\sign{+}}{\\html{<span style="font-size:5%;">&nbsp;</span>}}'
											+'{\\str{(}}'
											+'{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}{\\str{)}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\html{Convert the mixed numbers to improper fractions:}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
										+'{$firstSign}'
										+'{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}'
											+'{\\html{<span style="font-size:5%;">&nbsp;</span>}}{\\sign{+}}{\\html{<span style="font-size:5%;">&nbsp;</span>}}'
											+'{\\str{(}}'
											+'{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}{\\str{)}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\html{&nbsp;}}'																			 											+'{\\frac{\\fracstr{$numnew1}}{\\fracstr{$den1}}}'
											+'{\\sign{+}}'
											+'{\\frac{\\fracstr{$numnew2}}{\\fracstr{$den2}}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\html{Determine the lowest common denominator (LCD) of the fractions:}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\html{&nbsp;}}'
											+'{\\html{$answerDen}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\html{Use the LCD to convert the fractions:}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\html{&nbsp;}}'																			 											+'{\\frac{\\fracstr{$numnew1}}{\\fracstr{$den1}}}'
											+'{\\sign{+}}'
											+'{\\frac{\\fracstr{$numnew2}}{\\fracstr{$den2}}}'
										+'}'
										+'{\\html{&nbsp;}}'	
										+'{\\grp'
											+'{\\html{&nbsp;}}'
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
											+'{\\frac{\\fracstr{$numanswer1}}{\\str{$answerDen}}}'
											+'{\\sign{ = }}'
											+'{\\mixed{\\input{$wholeanswer}}{\\frac{\\input{$numanswer2}}{\\input{$answerDen}}}}}'
									+'}{well}',
						controls: {
							"checkAnswer": true,
							"help": true,
							"stepwiseNextProblem": "Check Answer",
							"fixBottomRight": true
						}
					}]
				}]
            },
			threeFracDblNeg: {
                title: 'Adding Mixed Numbers',
				children: [{
					title: 'Main Answer',
					children: [{
						problem: '',
						answer: '\\grp'
									+'{\\sign{$firstSign}}'
									+'{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}'
									+'{\\sign{$secondSign}}'
									+'{\\str{(}}'
									+'{\\sign{$thirdSign}}'
									+'{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}'
									+'{\\str{)}}'
									+'{\\sign{$fourthSign}}'
									+'{\\str{(}}'
									+'{\\sign{$fifthSign}}'
									+'{\\mixed{\\str{$whole3}}{\\frac{\\fracstr{$num3}}{\\fracstr{$den3}}}}'
									+'{\\str{)}}'
									+'{\\sign{=}}'
									+'{\\mixed{\\input{$wholeanswer1}}{\\frac{\\input{$numanswer2}}{\\input{$answer1Den}}}}',
						controls: {
							"checkAnswer": true,
							"help": false,
							"workbook": true,
							"stepwiseNextProblem": "Check Answer"
						}
					}]
				}, {
					title: 'Workbook',
					children: [{
						problem: '\\grp'
									+'{\\sign{$firstSign}}'
									+'{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}'
									+'{\\sign{$secondSign}}'
									+'{\\str{(}}'
									+'{\\sign{$thirdSign}}'
									+'{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}'
									+'{\\str{)}}'
									+'{\\sign{$fourthSign}}'
									+'{\\str{(}}'
									+'{\\sign{$fifthSign}}'
									+'{\\mixed{\\str{$whole3}}{\\frac{\\fracstr{$num3}}{\\fracstr{$den3}}}}'
									+'{\\str{)}}',
						answer: 
									'\\rowgrp'+
									'{\\ins{Choose the expression that is rewritten correctly without any double negatives:}}'+
										'{\\grp{\\btn{A}{$buttonValueA}{marg}}{$buttonLabelA}}'+
										'{\\html{&nbsp;}}'+
										'{\\grp{\\btn{B}{$buttonValueB}{marg}}{$buttonLabelB}}'+
										'{\\html{&nbsp;}}'+
										'{\\grp{\\btn{C}{$buttonValueC}{marg}}{$buttonLabelC}}'+
										'{\\html{&nbsp;}}'+
										'{\\grp{\\btn{D}{$buttonValueD}{marg}}{$buttonLabelD}}',
						controls: {
							"checkAnswer": true,
							"help": '\\rowgrp'
										+'{\\html{&nbsp;}}'
										+'{\\html{The minus sign in front of a parenthesis means to take the opposite sign of the negative $negFrac inside the parenthesis.}}'
										+'{\\html{&nbsp;}}'
										+'{\\html{The expression without double negatives is:}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\sign{$sign1}}{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}'
											+'{\\sign{$sign2}}'
											+'{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}'
											+'{\\sign{$sign3}}'
											+'{\\mixed{\\str{$whole3}}{\\frac{\\fracstr{$num3}}{\\fracstr{$den3}}}}'
										+'}'
						},
                    }, {
                    	problem: '\\grp'
									+'{\\sign{$firstSign}}'
									+'{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}'
									+'{\\sign{$secondSign}}'
									+'{\\str{(}}'
									+'{\\sign{$thirdSign}}'
									+'{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}'
									+'{\\str{)}}'
									+'{\\sign{$fourthSign}}'
									+'{\\str{(}}'
									+'{\\sign{$fifthSign}}'
									+'{\\mixed{\\str{$whole3}}{\\frac{\\fracstr{$num3}}{\\fracstr{$den3}}}}'
									+'{\\str{)}}',
						answer: '\\css'
								+'{\\rowgrp'
									+'{\\html{The expression without double negatives is:}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\sign{$sign1}}{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}'
											+'{\\sign{$sign2}}'
											+'{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}'
											+'{\\sign{$sign3}}'
											+'{\\mixed{\\str{$whole3}}{\\frac{\\fracstr{$num3}}{\\fracstr{$den3}}}}'
										+'}'
									+'{\\html{&nbsp;}}'
									+'{\\ins{Convert the mixed numbers to improper fractions:}}'
									+'{\\grp'
										+'{\\sign{$sign1}}{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}'
										+'{\\sign{$sign2}}'
										+'{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}'
										+'{\\sign{$sign3}}'
										+'{\\mixed{\\str{$whole3}}{\\frac{\\fracstr{$num3}}{\\fracstr{$den3}}}}'
									+'}'
									+'{\\html{&nbsp;}}'
									+'{\\grp'
										+'{\\sign{$sign1}}'
										+'{\\frac{\\input{$numnew1}}{\\fracstr{$den1}}}'
										+'{\\sign{$sign2}}'
										+'{\\frac{\\input{$numnew2}}{\\fracstr{$den2}}}'
										+'{\\sign{$sign3}}'
										+'{\\frac{\\input{$numnew3}}{\\fracstr{$den3}}}'
									+'}'
								+'}{well}',
						controls: {
							"checkAnswer": true,
							"help": true,
							"stepwiseNextProblem": "Check Answer"
						},
					}, {
						problem: '\\grp'
									+'{\\sign{$firstSign}}'
									+'{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}'
									+'{\\sign{$secondSign}}'
									+'{\\str{(}}'
									+'{\\sign{$thirdSign}}'
									+'{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}'
									+'{\\str{)}}'
									+'{\\sign{$fourthSign}}'
									+'{\\str{(}}'
									+'{\\sign{$fifthSign}}'
									+'{\\mixed{\\str{$whole3}}{\\frac{\\fracstr{$num3}}{\\fracstr{$den3}}}}'
									+'{\\str{)}}',
						answer: '\\css'
									+'{\\rowgrp'
										+'{\\html{&nbsp;}}'
										+'{\\html{Convert the mixed numbers to improper fractions:}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp'
										+'{\\sign{$sign1}}{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}'
										+'{\\sign{$sign2}}'
										+'{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}'
										+'{\\sign{$sign3}}'
										+'{\\mixed{\\str{$whole3}}{\\frac{\\fracstr{$num3}}{\\fracstr{$den3}}}}'
									+'}'
									+'{\\html{&nbsp;}}'
									+'{\\grp'
										+'{\\sign{$sign1}}'
										+'{\\frac{\\fracstr{$numnew1}}{\\fracstr{$den1}}}'
										+'{\\sign{$sign2}}'
										+'{\\frac{\\fracstr{$numnew2}}{\\fracstr{$den2}}}'
										+'{\\sign{$sign3}}'
										+'{\\frac{\\fracstr{$numnew3}}{\\fracstr{$den3}}}'
									+'}'
									+'{\\html{&nbsp;}}'
									+'{\\ins{Determine the lowest common denominator (LCD) of the fractions:}}'
									+'{\\grp{\\input{$answerDen}}}'
								+'}{well}',
						controls: {
							"checkAnswer": true,
							"help": true,
							"stepwiseNextProblem": "Check Answer"
						}
					}, {
						problem: '\\grp'
									+'{\\sign{$firstSign}}'
									+'{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}'
									+'{\\sign{$secondSign}}'
									+'{\\str{(}}'
									+'{\\sign{$thirdSign}}'
									+'{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}'
									+'{\\str{)}}'
									+'{\\sign{$fourthSign}}'
									+'{\\str{(}}'
									+'{\\sign{$fifthSign}}'
									+'{\\mixed{\\str{$whole3}}{\\frac{\\fracstr{$num3}}{\\fracstr{$den3}}}}'
									+'{\\str{)}}',	
						answer: '\\css'
									+'{\\rowgrp'
										+'{\\html{&nbsp;}}'
										+'{\\html{Convert the mixed numbers to improper fractions:}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp'
										+'{\\sign{$sign1}}{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}'
										+'{\\sign{$sign2}}'
										+'{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}'
										+'{\\sign{$sign3}}'
										+'{\\mixed{\\str{$whole3}}{\\frac{\\fracstr{$num3}}{\\fracstr{$den3}}}}'
									+'}'
									+'{\\html{&nbsp;}}'
									+'{\\grp'
										+'{\\sign{$sign1}}'
										+'{\\frac{\\fracstr{$numnew1}}{\\fracstr{$den1}}}'
										+'{\\sign{$sign2}}'
										+'{\\frac{\\fracstr{$numnew2}}{\\fracstr{$den2}}}'
										+'{\\sign{$sign3}}'
										+'{\\frac{\\fracstr{$numnew3}}{\\fracstr{$den3}}}'
									+'}'
									+'{\\html{&nbsp;}}'
									+'{\\html{Determine the lowest common denominator (LCD) of the fractions:}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\html{&nbsp;}}'
											+'{\\html{$answerDen}}'
										+'}'
										+'{\\html{&nbsp;}}'
									+'{\\ins{Use the LCD to convert the fractions:}}'
									+'{\\grp'
										+'{\\sign{$sign1}}'
										+'{\\frac{\\fracstr{$numnew1}}{\\fracstr{$den1}}}'
										+'{\\sign{$sign2}}'
										+'{\\frac{\\fracstr{$numnew2}}{\\fracstr{$den2}}}'
										+'{\\sign{$sign3}}'
										+'{\\frac{\\fracstr{$numnew3}}{\\fracstr{$den3}}}'
									+'}'
									+'{\\html{&nbsp;}}'	
									+'{\\grp'
										+'{\\sign{$sign1}}'
										+'{\\frac{\\input{$numlcd1}}{\\fracstr{$answerDen}}}'
										+'{\\sign{$sign2}}'
										+'{\\frac{\\input{$numlcd2}}{\\fracstr{$answerDen}}}'
										+'{\\sign{$sign3}}'
										+'{\\frac{\\input{$numlcd3}}{\\fracstr{$answerDen}}}'
									+'}'
								+'{\\html{&nbsp;}}'
								+'}{well}',
						controls: {
							"checkAnswer": true,
							"help": true,
							"stepwiseNextProblem": "Check Answer",
							"fixBottomRight": true
						}
					},{
						problem: '\\grp'
									+'{\\sign{$firstSign}}'
									+'{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}'
									+'{\\sign{$secondSign}}'
									+'{\\str{(}}'
									+'{\\sign{$thirdSign}}'
									+'{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}'
									+'{\\str{)}}'
									+'{\\sign{$fourthSign}}'
									+'{\\str{(}}'
									+'{\\sign{$fifthSign}}'
									+'{\\mixed{\\str{$whole3}}{\\frac{\\fracstr{$num3}}{\\fracstr{$den3}}}}'
									+'{\\str{)}}',
						answer: '\\css'
								+'{\\rowgrp'
										+'{\\html{&nbsp;}}'
										+'{\\html{Convert the mixed numbers to improper fractions:}}'
								+'{\\html{&nbsp;}}'
								+'{\\grp'
										+'{\\sign{$sign1}}{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}'
										+'{\\sign{$sign2}}'
										+'{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}'
										+'{\\sign{$sign3}}'
										+'{\\mixed{\\str{$whole3}}{\\frac{\\fracstr{$num3}}{\\fracstr{$den3}}}}'
								+'}'
								+'{\\html{&nbsp;}}'
								+'{\\grp'
										+'{\\sign{$sign1}}'
										+'{\\frac{\\fracstr{$numnew1}}{\\fracstr{$den1}}}'
										+'{\\sign{$sign2}}'
										+'{\\frac{\\fracstr{$numnew2}}{\\fracstr{$den2}}}'
										+'{\\sign{$sign3}}'
										+'{\\frac{\\fracstr{$numnew3}}{\\fracstr{$den3}}}'
								+'}'
								+'{\\html{&nbsp;}}'
								+'{\\html{Determine the lowest common denominator (LCD) of the fractions:}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\html{&nbsp;}}'
											+'{\\html{$answerDen}}'
										+'}'
										+'{\\html{&nbsp;}}'
								+'{\\html{Use the LCD to convert the fractions:}}'
								+'{\\html{&nbsp;}}'
								+'{\\grp'
										+'{\\sign{$sign1}}'
										+'{\\frac{\\fracstr{$numnew1}}{\\fracstr{$den1}}}'
										+'{\\sign{$sign2}}'
										+'{\\frac{\\fracstr{$numnew2}}{\\fracstr{$den2}}}'
										+'{\\sign{$sign3}}'
										+'{\\frac{\\fracstr{$numnew3}}{\\fracstr{$den3}}}'
								+'}'
								+'{\\html{&nbsp;}}'	
								+'{\\grp'
									+'{\\sign{$sign1}}'
									+'{\\frac{\\fracstr{$numlcd1}}{\\fracstr{$answerDen}}}'
									+'{\\sign{$sign2}}'
									+'{\\frac{\\fracstr{$numlcd2}}{\\fracstr{$answerDen}}}'
									+'{\\sign{$sign3}}'
									+'{\\frac{\\fracstr{$numlcd3}}{\\fracstr{$answerDen}}}'
								+'}'
							+'{\\html{&nbsp;}}'
								+'{\\ins{Add the fractions:}}'
								+'{\\grp'
									+'{\\frac'
										+'{\\grp'
											+'{\\sign{$sign1}}'
											+'{\\str{$numlcd1}}'
											+'{\\sign{$sign2}}'
											+'{\\str{$numlcd2}}'
											+'{\\sign{$sign3}}'
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
								"stepwiseNextProblem": "Check Answer",
								"fixBottomRight": true
						}
					}, {
							problem: '\\grp'
										+'{\\sign{$firstSign}}'
										+'{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}'
										+'{\\sign{$secondSign}}'
										+'{\\str{(}}'
										+'{\\sign{$thirdSign}}'
										+'{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}'
										+'{\\str{)}}'
										+'{\\sign{$fourthSign}}'
										+'{\\str{(}}'
										+'{\\sign{$fifthSign}}'
										+'{\\mixed{\\str{$whole3}}{\\frac{\\fracstr{$num3}}{\\fracstr{$den3}}}}'
										+'{\\str{)}}',
							answer: '\\css'
								+'{\\rowgrp'
										+'{\\html{&nbsp;}}'
										+'{\\html{Convert the mixed numbers to improper fractions:}}'
								+'{\\html{&nbsp;}}'
								+'{\\grp'
										+'{\\sign{$sign1}}{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}'
										+'{\\sign{$sign2}}'
										+'{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}'
										+'{\\sign{$sign3}}'
										+'{\\mixed{\\str{$whole3}}{\\frac{\\fracstr{$num3}}{\\fracstr{$den3}}}}'
								+'}'
								+'{\\html{&nbsp;}}'
								+'{\\grp'
										+'{\\sign{$sign1}}'
										+'{\\frac{\\fracstr{$numnew1}}{\\fracstr{$den1}}}'
										+'{\\sign{$sign2}}'
										+'{\\frac{\\fracstr{$numnew2}}{\\fracstr{$den2}}}'
										+'{\\sign{$sign3}}'
										+'{\\frac{\\fracstr{$numnew3}}{\\fracstr{$den3}}}'
								+'}'
								+'{\\html{&nbsp;}}'
								+'{\\html{Determine the lowest common denominator (LCD) of the fractions:}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\html{&nbsp;}}'
											+'{\\html{$answerDen}}'
										+'}'
										+'{\\html{&nbsp;}}'
								+'{\\html{Use the LCD to convert the fractions:}}'
								+'{\\html{&nbsp;}}'
								+'{\\grp'
										+'{\\sign{$sign1}}'
										+'{\\frac{\\fracstr{$numnew1}}{\\fracstr{$den1}}}'
										+'{\\sign{$sign2}}'
										+'{\\frac{\\fracstr{$numnew2}}{\\fracstr{$den2}}}'
										+'{\\sign{$sign3}}'
										+'{\\frac{\\fracstr{$numnew3}}{\\fracstr{$den3}}}'
								+'}'
								+'{\\html{&nbsp;}}'	
								+'{\\grp'
									+'{\\sign{$sign1}}'
									+'{\\frac{\\fracstr{$numlcd1}}{\\fracstr{$answerDen}}}'
									+'{\\sign{$sign2}}'
									+'{\\frac{\\fracstr{$numlcd2}}{\\fracstr{$answerDen}}}'
									+'{\\sign{$sign3}}'
									+'{\\frac{\\fracstr{$numlcd3}}{\\fracstr{$answerDen}}}'
								+'}'
							+'{\\html{&nbsp;}}'
								+'{\\html{Add the fractions:}}'
								+'{\\html{&nbsp;}}'
								+'{\\grp'
									+'{\\frac'
										+'{\\grp'
											+'{\\sign{$sign1}}'
											+'{\\str{$numlcd1}}'
											+'{\\sign{$sign2}}'
											+'{\\str{$numlcd2}}'
											+'{\\sign{$sign3}}'
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
									+'{\\frac{\\fracstr{$numanswer1}}{\\str{$answerDen}}}'
									+'{\\sign{ = }}'
									+'{\\mixed{\\input{$wholeanswer1}}{\\frac{\\input{$numanswer2}}{\\input{$answer1Den}}}}}'
							+'}{well}',
							controls: {
								"checkAnswer": true,
								"help": true,
								"stepwiseNextProblem": "Check Answer",
								"fixBottomRight": true
						}
					}]
				}]
            },
			
			tenth: {
                title: 'Adding Fractions and Mixed Numbers',
				children: [{
					title: 'Main Answer',
					children: [{
						problem: '',
						answer: '\\grp'
									+'{\\sign{$firstSign}}'
									+'{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}'
									+'{\\sign{$secondSign}}'
									+'{\\str{(}}'
									+'{\\sign{$thirdSign}}'
									+'{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}'
									+'{\\str{)}}'
									+'{\\sign{=}}'
									+'{\\mixed{\\input{$wholeanswer}}{\\frac{\\input{$numanswer2}}{\\input{$answerDen}}}}',
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
									+'{\\sign{$firstSign}}'
									+'{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}'
									+'{\\sign{$secondSign}}'
									+'{\\str{(}}'
									+'{\\sign{$thirdSign}}'
									+'{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}'
									+'{\\str{)}}',
						answer: '\\css'
									+'{\\rowgrp'
										+'{\\ins{Convert the mixed numbers to improper fractions:}}'
										+'{\\grp'
										+'{\\sign{$firstSign}}{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}'
											+'{\\html{<span style="font-size:5%;">&nbsp;</span>}}{\\sign{$secondSign}}{\\html{<span style="font-size:5%;">&nbsp;</span>}}'
											+'{\\str{(}}{\\sign{$thirdSign}}'
											+'{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}{\\str{)}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\frac{\\input{$numnew1}}{\\fracstr{$den1}}}'
											+'{\\sign{-}}'
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
									+'{\\sign{$firstSign}}'
									+'{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}'
									+'{\\sign{$secondSign}}'
									+'{\\str{(}}'
									+'{\\sign{$thirdSign}}'
									+'{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}'
									+'{\\str{)}}',
						answer: '\\css'
									+'{\\rowgrp'
										+'{\\html{&nbsp;}}'
										+'{\\str{Convert the mixed numbers to improper fractions:}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
										+'{\\sign{$firstSign}}{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}'
											+'{\\html{<span style="font-size:5%;">&nbsp;</span>}}{\\sign{$secondSign}}{\\html{<span style="font-size:5%;">&nbsp;</span>}}'
											+'{\\str{(}}{\\sign{$thirdSign}}'
											+'{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}{\\str{)}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\html{&nbsp;}}'
											+'{\\frac{\\fracstr{$numnew1}}{\\fracstr{$den1}}}'
											+'{\\sign{-}}'
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
						problem: '\\grp'
									+'{\\sign{$firstSign}}'
									+'{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}'
									+'{\\sign{$secondSign}}'
									+'{\\str{(}}'
									+'{\\sign{$thirdSign}}'
									+'{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}'
									+'{\\str{)}}',
						answer: '\\css'
									+'{\\rowgrp'
										+'{\\html{&nbsp;}}'
										+'{\\str{Convert the mixed numbers to improper fractions:}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
										+'{\\sign{$firstSign}}{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}'
											+'{\\html{<span style="font-size:5%;">&nbsp;</span>}}{\\sign{$secondSign}}{\\html{<span style="font-size:5%;">&nbsp;</span>}}'
											+'{\\str{(}}{\\sign{$thirdSign}}'
											+'{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}{\\str{)}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\html{&nbsp;}}'
											+'{\\frac{\\fracstr{$numnew1}}{\\fracstr{$den1}}}'
											+'{\\sign{-}}'
											+'{\\frac{\\fracstr{$numnew2}}{\\fracstr{$den2}}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\html{Determine the lowest common denominator (LCD) of the fractions:}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\html{&nbsp;}}'
											+'{\\html{$answerDen}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\ins{Use the LCD to convert the fractions:}}'
										+'{\\grp'
											+'{\\html{&nbsp;}}'
											+'{\\frac{\\fracstr{$numnew1}}{\\fracstr{$den1}}}'
											+'{\\sign{-}}'
											+'{\\frac{\\fracstr{$numnew2}}{\\fracstr{$den2}}}'
										+'}'
										+'{\\html{&nbsp;}}'	
										+'{\\grp'
											+'{\\frac{\\input{$numlcd1}}{\\fracstr{$answerDen}}}'
											+'{\\sign{-}}'
											+'{\\frac{\\input{$numlcd2}}{\\fracstr{$answerDen}}}'
										+'}'
										+'{\\html{&nbsp;}}'
									+'}{well}',
						controls: {
							"checkAnswer": true,
							"help": true
						}
					}, {
						problem: '\\grp'
									+'{\\sign{$firstSign}}'
									+'{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}'
									+'{\\sign{$secondSign}}'
									+'{\\str{(}}'
									+'{\\sign{$thirdSign}}'
									+'{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}'
									+'{\\str{)}}',
						answer: '\\css'
									+'{\\rowgrp'
										+'{\\html{&nbsp;}}'
										+'{\\str{Convert the mixed numbers to improper fractions:}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
										+'{\\sign{$firstSign}}{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}'
											+'{\\html{<span style="font-size:5%;">&nbsp;</span>}}{\\sign{$secondSign}}{\\html{<span style="font-size:5%;">&nbsp;</span>}}'
											+'{\\str{(}}{\\sign{$thirdSign}}'
											+'{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}{\\str{)}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\html{&nbsp;}}'
											+'{\\frac{\\fracstr{$numnew1}}{\\fracstr{$den1}}}'
											+'{\\sign{-}}'
											+'{\\frac{\\fracstr{$numnew2}}{\\fracstr{$den2}}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\html{Determine the lowest common denominator (LCD) of the fractions:}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\html{&nbsp;}}'
											+'{\\html{$answerDen}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\html{Use the LCD to convert the fractions:}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\html{&nbsp;}}'
											+'{\\frac{\\fracstr{$numnew1}}{\\fracstr{$den1}}}'
											+'{\\sign{-}}'
											+'{\\frac{\\fracstr{$numnew2}}{\\fracstr{$den2}}}'
										+'}'
										+'{\\html{&nbsp;}}'	
										+'{\\grp'
											+'{\\html{&nbsp;}}'
											+'{\\frac{\\fracstr{$numlcd1}}{\\fracstr{$answerDen}}}'
											+'{\\sign{-}}'
											+'{\\frac{\\fracstr{$numlcd2}}{\\fracstr{$answerDen}}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\ins{Add the fractions:}}'
										+'{\\grp'
											+'{\\frac'
												+'{\\grp'
													+'{\\str{$numlcd1}}'
													+'{\\sign{-}}'
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
						problem: '\\grp'
									+'{\\sign{$firstSign}}'
									+'{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}'
									+'{\\sign{$secondSign}}'
									+'{\\str{(}}'
									+'{\\sign{$thirdSign}}'
									+'{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}'
									+'{\\str{)}}',
						answer: '\\css'
									+'{\\rowgrp'
										+'{\\html{&nbsp;}}'
										+'{\\str{Convert the mixed numbers to improper fractions:}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
										+'{\\sign{$firstSign}}{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}'
											+'{\\html{<span style="font-size:5%;">&nbsp;</span>}}{\\sign{$secondSign}}{\\html{<span style="font-size:5%;">&nbsp;</span>}}'
											+'{\\str{(}}{\\sign{$thirdSign}}'
											+'{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}{\\str{)}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\html{&nbsp;}}'
											+'{\\frac{\\fracstr{$numnew1}}{\\fracstr{$den1}}}'
											+'{\\sign{-}}'
											+'{\\frac{\\fracstr{$numnew2}}{\\fracstr{$den2}}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\html{Determine the lowest common denominator (LCD) of the fractions:}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\html{&nbsp;}}'
											+'{\\html{$answerDen}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\html{Use the LCD to convert the fractions:}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\html{&nbsp;}}'
											+'{\\frac{\\fracstr{$numnew1}}{\\fracstr{$den1}}}'
											+'{\\sign{-}}'
											+'{\\frac{\\fracstr{$numnew2}}{\\fracstr{$den2}}}'
										+'}'
										+'{\\html{&nbsp;}}'	
										+'{\\grp'
											+'{\\html{&nbsp;}}'
											+'{\\frac{\\fracstr{$numlcd1}}{\\fracstr{$answerDen}}}'
											+'{\\sign{-}}'
											+'{\\frac{\\fracstr{$numlcd2}}{\\fracstr{$answerDen}}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\html{Add the fractions:}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\frac'
												+'{\\grp'
													+'{\\str{$numlcd1}}'
													+'{\\sign{-}}'
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
											+'{\\frac{\\fracstr{$numanswer1}}{\\html{$answerDen}}}'
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
        },
        data = [
			// problem 1
            { whole1: 2, num1: 3, den1: 5, whole2: 3, num2: 1, den2: 5, numanswer1: 3, numanswer2: 3, answerDen: 5, numnew1: -13, numnew2: 16, numlcd1: -13, numlcd2: 16, 
			firstSign: '-',
			secondSign: '+', 
			template: 'second' },
			// problem 2
			{ whole1: 1, num1: 4, den1: 5, whole2: 2, num2: 1, den2: 2,wholeanswer: '-4', numanswer1: -43, numanswer2: 3, answerDen: 10, numnew1: -9, numnew2: 5, numlcd1: -18, numlcd2: 25, 
			firstSign: '-', template: 'main' },
			// problem 3
			{ whole1: 4, num1: '', den1: '', whole2: 1, num2: 7, den2: 8, den3: 1, wholeanswer: 2, numanswer1: 17, numanswer2: 1, answerDen: 8, numnew1: 4, numnew2: 15, numlcd1: 32, numlcd2: 15, 
			secondSign: '+', thirdSign: '-', 
			template: 'first' },
			// problem 4
			{ whole1: 2, num1: 2, den1: 3, whole2: 2, num2: 1, den2: 4, numanswer1: -5, numanswer2: -5, answerDen: 12, numnew1: -8, numnew2: 9, numlcd1: -32, numlcd2: 27, firstSign: '-', secondSign: '+',leftParen: '', rightParen: '', template: 'fourth' },
			// problem 5
			{ whole1: 3, num1: 1, den1: 6, whole2: 2, num2: 3, den2: 5, numanswer1: 17, numanswer2: 17, answerDen: 30, numnew1: 19, numnew2: 13, numlcd1: 95, numlcd2: 78, wholeanswer: '',
			firstSign: '',
			secondSign: '-',leftParen: '(', rightParen: ')', 
			template: 'fourth' },
			// problem 6
			{ whole1: 7, num1: 1, den1: 2, whole2: 4, num2: 3, den2: 4,wholeanswer: '-2', numanswer1: -11, numanswer2: 3, answerDen: 4, numnew1: -15, numnew2: 19, numlcd1: -30, numlcd2: 19,
			firstSign: dataUtils.pre('str{-}'),
			secondSign: '-', thirdSign: '-', negFrac: '4 3/4' ,
			answerBtn: 'noAnswer',
			template: 'twoFracDblNeg',
			buttonValueA: 'T',
				buttonLabelA: dataUtils.pre('\\grp'
												+'{\\mixed{\\str{-7}}'
												+'{\\frac{\\fracstr{1}}{\\fracstr{2}}}}'
												+'{\\sign{+}}'
												+'{\\mixed{\\str{4}}'
												+'{\\frac{\\fracstr{3}}{\\fracstr{4}}}}'
												),
				buttonValueB: 'F',
				buttonLabelB: dataUtils.pre('\\grp'
												+'{\\mixed{\\str{7}}'
												+'{\\frac{\\fracstr{1}}{\\fracstr{2}}}}'
												+'{\\sign{+}}'
												+'{\\mixed{\\str{4}}'
												+'{\\frac{\\fracstr{3}}{\\fracstr{4}}}}'
												),
				buttonValueC: 'F',
				buttonLabelC: dataUtils.pre('\\grp'
												+'{\\mixed{\\str{-7}}'
												+'{\\frac{\\fracstr{1}}{\\fracstr{2}}}}'
												+'{\\sign{-}}'
												+'{\\mixed{\\str{4}}'
												+'{\\frac{\\fracstr{3}}{\\fracstr{4}}}}'
												),
				buttonValueD: 'F',
				buttonLabelD: dataUtils.pre('\\grp'
												+'{\\mixed{\\str{7}}'
												+'{\\frac{\\fracstr{1}}{\\fracstr{2}}}}'
												+'{\\sign{-}}'
												+'{\\mixed{\\str{4}}'
												+'{\\frac{\\fracstr{3}}{\\fracstr{4}}}}'
												),
			
						},
			// problem 7
			{ whole1: 1, num1: 2, den1: 9, whole2: 5, num2: 1, den2: 3,wholeanswer: '6', numanswer1: 59, numanswer2: 5, answerDen: 9, numnew1: 11, numnew2: 16, numlcd1: 11, numlcd2: 48,
			firstSign: dataUtils.pre('\\html{}'),
			secondSign: '-', thirdSign: '-', negFrac: '5 1/3' ,
			answerBtn: 'noAnswer',
			template: 'twoFracDblNeg',
			buttonValueA: 'F',
				buttonLabelA: dataUtils.pre('\\grp'
												+'{\\mixed{\\str{-1}}'
												+'{\\frac{\\fracstr{2}}{\\fracstr{9}}}}'
												+'{\\sign{-}}'
												+'{\\mixed{\\str{5}}'
												+'{\\frac{\\fracstr{1}}{\\fracstr{3}}}}'
												),
				buttonValueB: 'T',
				buttonLabelB: dataUtils.pre('\\grp'
												+'{\\mixed{\\str{1}}'
												+'{\\frac{\\fracstr{2}}{\\fracstr{9}}}}'
												+'{\\sign{+}}'
												+'{\\mixed{\\str{5}}'
												+'{\\frac{\\fracstr{1}}{\\fracstr{3}}}}'
												),
				buttonValueC: 'F',
				buttonLabelC: dataUtils.pre('\\grp'
												+'{\\mixed{\\str{-1}}'
												+'{\\frac{\\fracstr{2}}{\\fracstr{9}}}}'
												+'{\\sign{+}}'
												+'{\\mixed{\\str{5}}'
												+'{\\frac{\\fracstr{1}}{\\fracstr{3}}}}'
												),
				buttonValueD: 'F',
				buttonLabelD: dataUtils.pre('\\grp'
												+'{\\mixed{\\str{1}}'
												+'{\\frac{\\fracstr{2}}{\\fracstr{9}}}}'
												+'{\\sign{-}}'
												+'{\\mixed{\\str{5}}'
												+'{\\frac{\\fracstr{1}}{\\fracstr{3}}}}'
												),		},
			// problem 8
			{ whole1: 12, num1: 1, den1: 2, whole2: 20, num2: 1, den2: 3,wholeanswer: '-7', numanswer1: -47, numanswer2: 5, answerDen: 6, numnew1: 25, numnew2: 61, numlcd1: 75, numlcd2: 122, 
			firstSign: '', 
			template: 'main' },
			// problem 9
			{ whole1: 10, num1: 2, den1: 5, whole2: 8, num2: 1, den2: 4, wholeanswer: '-18', numanswer1: -373, numanswer2: 13, answerDen: 20, numnew1: -52, numnew2: 33, numlcd1: -208, numlcd2: 165, 
			firstSign: '-',
			secondSign: '+', thirdSign: '-',
			template: 'tenth' },
			// problem 10
			{ whole1: 3, num1: 1, den1: '\xA02\xA0', whole2: 1, num2: 1, den2: 4, whole3: 2, num3: 2, den3: '\xA03\xA0', wholeanswer1: -4, numanswer1: -59, answerDen: 12, answer1Den: 12, numnew1: 7, numnew2: 5, numnew3: 8, numanswer2: 11, numlcd1: 42, numlcd2: 15, numlcd3: 32,firstSign: '-', secondSign: '-', thirdSign: '-', fourthSign: '+', fifthSign: '-', sign1: '-', sign2: '+' , sign3: '-', negFrac: '1 1/4', template: 'threeFracDblNeg', answerBtn: 'noAnswer',
			buttonValueA: 'F',
				buttonLabelA: dataUtils.pre('\\grp'
												+'{\\mixed{\\str{-3}}'
												+'{\\frac{\\fracstr{1}}{\\fracstr{2}}}}'
												+'{\\sign{-}}'
												+'{\\mixed{\\str{1}}'
												+'{\\frac{\\fracstr{1}}{\\fracstr{4}}}}'
												+'{\\sign{+}}'
												+'{\\mixed{\\str{2}}'
												+'{\\frac{\\fracstr{2}}{\\fracstr{3}}}}'),
				buttonValueB: 'F',
				buttonLabelB: dataUtils.pre('\\grp'
												+'{\\mixed{\\str{3}}'
												+'{\\frac{\\fracstr{1}}{\\fracstr{2}}}}'
												+'{\\sign{+}}'
												+'{\\mixed{\\str{1}}'
												+'{\\frac{\\fracstr{1}}{\\fracstr{4}}}}'
												+'{\\sign{-}}'
												+'{\\mixed{\\str{2}}'
												+'{\\frac{\\fracstr{2}}{\\fracstr{3}}}}'),
				buttonValueC: 'F',
				buttonLabelC: dataUtils.pre('\\grp'
												+'{\\mixed{\\str{3}}'
												+'{\\frac{\\fracstr{1}}{\\fracstr{2}}}}'
												+'{\\sign{-}}'
												+'{\\mixed{\\str{1}}'
												+'{\\frac{\\fracstr{1}}{\\fracstr{4}}}}'
												+'{\\sign{+}}'
												+'{\\mixed{\\str{2}}'
												+'{\\frac{\\fracstr{2}}{\\fracstr{3}}}}'),
				buttonValueD: 'T',
				buttonLabelD: dataUtils.pre('\\grp'
												+'{\\mixed{\\str{-3}}'
												+'{\\frac{\\fracstr{1}}{\\fracstr{2}}}}'
												+'{\\sign{+}}'
												+'{\\mixed{\\str{1}}'
												+'{\\frac{\\fracstr{1}}{\\fracstr{4}}}}'
												+'{\\sign{-}}'
												+'{\\mixed{\\str{2}}'
												+'{\\frac{\\fracstr{2}}{\\fracstr{3}}}}'),
			 },
			// problem 11
			{ whole1: 1, num1: 1, den1: '\xA05\xA0', whole2: 3, num2: 1, den2: 10, whole3: 2, num3: 1, den3: '\xA02\xA0', wholeanswer1: 4, numanswer1: 44, answerDen: 10, answer1Den: 5, numnew1: 6, numnew2:31, numnew3: 5, numanswer2: 2, numlcd1: 12, numlcd2: 31, numlcd3: 25,firstSign: '-', secondSign: '+', thirdSign: '', fourthSign: '-', fifthSign: '-', sign1: '-', sign2: '+' , sign3: '+', negFrac: '2 1/2', template: 'threeFracDblNeg', answerBtn: 'noAnswer',
			buttonValueA: 'F',
				buttonLabelA: dataUtils.pre('\\grp'
												+'{\\mixed{\\str{-1}}'
												+'{\\frac{\\fracstr{1}}{\\fracstr{5}}}}'
												+'{\\sign{-}}'
												+'{\\mixed{\\str{3}}'
												+'{\\frac{\\fracstr{1}}{\\fracstr{10}}}}'
												+'{\\sign{+}}'
												+'{\\mixed{\\str{2}}'
												+'{\\frac{\\fracstr{1}}{\\fracstr{2}}}}'),
				buttonValueB: 'T',
				buttonLabelB: dataUtils.pre('\\grp'
												+'{\\mixed{\\str{-1}}'
												+'{\\frac{\\fracstr{1}}{\\fracstr{5}}}}'
												+'{\\sign{+}}'
												+'{\\mixed{\\str{3}}'
												+'{\\frac{\\fracstr{1}}{\\fracstr{10}}}}'
												+'{\\sign{+}}'
												+'{\\mixed{\\str{2}}'
												+'{\\frac{\\fracstr{1}}{\\fracstr{2}}}}'),
				buttonValueC: 'F',
				buttonLabelC: dataUtils.pre('\\grp'
												+'{\\mixed{\\str{1}}'
												+'{\\frac{\\fracstr{1}}{\\fracstr{5}}}}'
												+'{\\sign{+}}'
												+'{\\mixed{\\str{3}}'
												+'{\\frac{\\fracstr{1}}{\\fracstr{10}}}}'
												+'{\\sign{+}}'
												+'{\\mixed{\\str{2}}'
												+'{\\frac{\\fracstr{1}}{\\fracstr{2}}}}'),
				buttonValueD: 'F',
				buttonLabelD: dataUtils.pre('\\grp'
												+'{\\mixed{\\str{1}}'
												+'{\\frac{\\fracstr{1}}{\\fracstr{5}}}}'
												+'{\\sign{+}}'
												+'{\\mixed{\\str{3}}'
												+'{\\frac{\\fracstr{1}}{\\fracstr{10}}}}'
												+'{\\sign{-}}'
												+'{\\mixed{\\str{2}}'
												+'{\\frac{\\fracstr{1}}{\\fracstr{2}}}}'),
			
			},
			// problem 12
			{ whole1: 1, num1: 3, den1: '\xA08\xA0', whole2: 1, num2: 1, den2: 6, whole3: 2, num3: 3, den3: '\xA04\xA0', wholeanswer1: 5, numanswer1: 5, answerDen: 24, numnew1: 11, numnew2:7, numnew3: 11, numanswer2: 5, numlcd1: 33, numlcd2: 28, numlcd3: 66, sign1: '-', sign2: '-' , sign3: '+', negFrac: '2 1/2', template: 'third' }
        ];

    return dataUtils.build(desc, template, data);
}]);
