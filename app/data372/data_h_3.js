/*global angular */
 
angular.module('mathSkills').service('data_h_3', ['dataUtils', function (dataUtils) {
    var desc = {
            title: 'H.3 Subtraction of Mixed Numbers',
              path: 'H.3-subtraction-of-mixed-numbers',
            children: []
        },
        template = {
             main: {
                title: 'Subtraction of Mixed Numbers',
				children: [{
					title: 'Main Answer',
					children: [{
						problem: '',
						answer: '\\grp'
								+'{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}'
								+'{\\sign{-}}{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}'
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
									+'{\\sign{-}}'
									+'{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}',
						answer: '\\css'
									+'{\\rowgrp'
										+'{\\ins{Convert the mixed numbers to improper fractions:}}'
										+'{\\grp'
											+'{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}'
											+'{\\html{<span style="font-size:5%;">&nbsp;</span>}}{\\sign{-}}{\\html{<span style="font-size:5%;">&nbsp;</span>}}'
											+'{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}'
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
									+'{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}'
									+'{\\sign{-}}'
									+'{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}',
						answer: '\\css'
									+'{\\rowgrp'
										+'{\\html{Convert the mixed numbers to improper fractions:}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}'
											+'{\\html{<span style="font-size:5%;">&nbsp;</span>}}{\\sign{-}}{\\html{<span style="font-size:5%;">&nbsp;</span>}}'
											+'{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
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
										+'{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}'
										+'{\\sign{-}}'
										+'{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}',
						answer: '\\css'
									+'{\\rowgrp'
										+'{\\html{Convert the mixed numbers to improper fractions:}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}'
											+'{\\html{<span style="font-size:5%;">&nbsp;</span>}}{\\sign{-}}{\\html{<span style="font-size:5%;">&nbsp;</span>}}'
											+'{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\frac{\\fracstr{$numnew1}}{\\fracstr{$den1}}}'
											+'{\\sign{-}}'
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
									+'{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}'
									+'{\\sign{-}}{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}',
						answer: '\\css'
									+'{\\rowgrp'
										+'{\\html{Convert the mixed numbers to improper fractions:}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}'
											+'{\\html{<span style="font-size:5%;">&nbsp;</span>}}{\\sign{-}}{\\html{<span style="font-size:5%;">&nbsp;</span>}}'
											+'{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\frac{\\fracstr{$numnew1}}{\\fracstr{$den1}}}'
											+'{\\sign{-}}'
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
											+'{\\sign{-}}'
											+'{\\frac{\\fracstr{$numnew2}}{\\fracstr{$den2}}}'
										+'}'
										+'{\\html{&nbsp;}}'	
										+'{\\grp'
											+'{\\frac{\\fracstr{$numlcd1}}{\\fracstr{$answerDen}}}'
											+'{\\sign{-}}'
											+'{\\frac{\\fracstr{$numlcd2}}{\\fracstr{$answerDen}}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\ins{Subtract the fractions:}}'
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
									+'{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}'
									+'{\\sign{-}}{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}',
						answer: '\\css'
									+'{\\rowgrp'
										+'{\\html{Convert the mixed numbers to improper fractions:}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}'
											+'{\\html{<span style="font-size:5%;">&nbsp;</span>}}{\\sign{-}}{\\html{<span style="font-size:5%;">&nbsp;</span>}}'
											+'{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\frac{\\fracstr{$numnew1}}{\\fracstr{$den1}}}'
											+'{\\sign{-}}'
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
											+'{\\sign{-}}'
											+'{\\frac{\\fracstr{$numnew2}}{\\fracstr{$den2}}}'
										+'}'
										+'{\\html{&nbsp;}}'	
										+'{\\grp'
											+'{\\frac{\\fracstr{$numlcd1}}{\\fracstr{$answerDen}}}'
											+'{\\sign{-}}'
											+'{\\frac{\\fracstr{$numlcd2}}{\\fracstr{$answerDen}}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\html{Subtract the fractions:}}'
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
			first: {
                title: 'Subtraction of Mixed Numbers',
				children: [{
					title: 'Main Answer',
					children: [{
						problem: '',
						answer: '\\grp'
									+'{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}'
									+'{\\sign{-}}'
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
									+'{\\sign{-}}'
									+'{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}',
						answer: '\\css'
									+'{\\rowgrp'
										+'{\\ins{Convert the mixed numbers to improper fractions:}}'
										+'{\\grp'
											+'{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}'
											+'{\\html{<span style="font-size:5%;">&nbsp;</span>}}{\\sign{-}}{\\html{<span style="font-size:5%;">&nbsp;</span>}}'
											+'{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}'
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
									+'{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}'
									+'{\\sign{-}}'
									+'{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}',
						answer: '\\css'
									+'{\\rowgrp'
										+'{\\html{Convert the mixed numbers to improper fractions:}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}'
											+'{\\html{<span style="font-size:5%;">&nbsp;</span>}}{\\sign{-}}{\\html{<span style="font-size:5%;">&nbsp;</span>}}'
											+'{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\frac{\\fracstr{$numnew1}}{\\fracstr{$den1}}}'
											+'{\\sign{-}}'
											+'{\\frac{\\fracstr{$numnew2}}{\\fracstr{$den2}}}'
										+'}'
										+'{\\html{&nbsp;}}'	
										+'{\\ins{Subtract the fractions:}}'
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
									+'{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}'
									+'{\\sign{-}}'
									+'{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}',
						answer: '\\css'
									+'{\\rowgrp'
										+'{\\html{Convert the mixed numbers to improper fractions:}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}'
											+'{\\html{<span style="font-size:5%;">&nbsp;</span>}}{\\sign{-}}{\\html{<span style="font-size:5%;">&nbsp;</span>}}'
											+'{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\frac{\\fracstr{$numnew1}}{\\fracstr{$den1}}}'
											+'{\\sign{-}}'
											+'{\\frac{\\fracstr{$numnew2}}{\\fracstr{$den2}}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\html{Subtract the fractions:}}'
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
                title: 'Subtracting Mixed Numbers',
    children: [{
     title: 'Main Answer',
     children: [{
      problem: '',
      answer: '\\grp'
        +'{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}'
        +'{\\sign{-}}{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}'
        +'{\\sign{=}}'
        +'{\\mixed{\\input{$wholeanswer1}}{\\frac{\\input{$numanswer3}}{\\input{$answer1Den}}}}',
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
        +'{\\sign{-}}{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}',
      answer: '\\css'
        +'{\\rowgrp'
        +'{\\ins{Convert the mixed numbers to improper fractions:}}'
        +'{\\grp'
         +'{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}'
         +'{\\sign{-}}'
         +'{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}'
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
        +'{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}'
        +'{\\sign{-}}{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}',
      answer: '\\css'
        +'{\\rowgrp'
        +'{\\html{Convert the mixed numbers to improper fractions:}}'
        +'{\\html{&nbsp;}}'
        +'{\\grp'
         +'{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}'
         +'{\\sign{-}}'
         +'{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}'
        +'}'
        +'{\\html{&nbsp;}}'
        +'{\\grp'
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
      }
     }, {
      problem: '\\grp'
        +'{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}'
        +'{\\sign{-}}{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}',
      answer: '\\css'
        +'{\\rowgrp'
        +'{\\html{Convert the mixed numbers to improper fractions:}}'
        +'{\\html{&nbsp;}}'
        +'{\\grp'
         +'{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}'
         +'{\\sign{-}}'
         +'{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}'
        +'}'
        +'{\\html{&nbsp;}}'
        +'{\\grp'
         +'{\\frac{\\fracstr{$numnew1}}{\\fracstr{$den1}}}'
         +'{\\sign{-}}'
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
       "help": true,
       "fixBottomRight": true
      }
     }, {
      problem: '\\grp'
        +'{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}'
        +'{\\sign{-}}{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}',
      answer: '\\css'
        +'{\\rowgrp'
        +'{\\html{Convert the mixed numbers to improper fractions:}}'
        +'{\\html{&nbsp;}}'
        +'{\\grp'
         +'{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}'
         +'{\\sign{-}}'
         +'{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}'
        +'}'
        +'{\\html{&nbsp;}}'
        +'{\\grp'
         +'{\\frac{\\fracstr{$numnew1}}{\\fracstr{$den1}}}'
         +'{\\sign{-}}'
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
         +'{\\sign{-}}'
         +'{\\frac{\\fracstr{$numnew2}}{\\fracstr{$den2}}}'
        +'}'
        +'{\\html{&nbsp;}}' 
        +'{\\grp'
         +'{\\frac{\\fracstr{$numlcd1}}{\\fracstr{$answerDen}}}'
         +'{\\sign{-}}'
         +'{\\frac{\\fracstr{$numlcd2}}{\\fracstr{$answerDen}}}'
        +'}'
        +'{\\html{&nbsp;}}'
        +'{\\ins{Subtract the fractions:}}'
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
        +'{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}'
        +'{\\sign{-}}{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}',
      answer: '\\css'
        +'{\\rowgrp'
         +'{\\html{Convert the mixed numbers to improper fractions:}}'
         +'{\\html{&nbsp;}}'
         +'{\\grp'
          +'{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}'
          +'{\\sign{-}}'
          +'{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}'
         +'}'
         +'{\\html{&nbsp;}}'
         +'{\\grp'
          +'{\\frac{\\fracstr{$numnew1}}{\\fracstr{$den1}}}'
          +'{\\sign{-}}'
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
          +'{\\sign{-}}'
          +'{\\frac{\\fracstr{$numnew2}}{\\fracstr{$den2}}}'
         +'}'
         +'{\\html{&nbsp;}}' 
         +'{\\grp'
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
      problem: '\\grp'
        +'{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}'
        +'{\\sign{-}}{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}',
      answer: '\\css'
        +'{\\rowgrp'
         +'{\\html{Convert the mixed numbers to improper fractions:}}'
         +'{\\html{&nbsp;}}'
         +'{\\grp'
          +'{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}'
          +'{\\sign{-}}'
          +'{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}'
         +'}'
         +'{\\html{&nbsp;}}'
         +'{\\grp'
          +'{\\frac{\\fracstr{$numnew1}}{\\fracstr{$den1}}}'
          +'{\\sign{-}}'
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
          +'{\\sign{-}}'
          +'{\\frac{\\fracstr{$numnew2}}{\\fracstr{$den2}}}'
         +'}'
         +'{\\html{&nbsp;}}' 
         +'{\\grp'
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
            third: {
                title: 'Subtracting Mixed Numbers',
    children: [{
     title: 'Main Answer',
     children: [{
      problem: '',
      answer: '\\grp'
        +'{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}'
        +'{\\sign{-}}'
        +'{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}'
        +'{\\sign{-}}'
        +'{\\mixed{\\str{$whole3}}{\\frac{\\fracstr{$num3}}{\\fracstr{$den3}}}}'
        +'{\\sign{=}}'
        +'{\\mixed{\\input{$wholeanswer1}}{\\frac{\\input{$numanswer2}}{\\input{$answerDen}}}}',
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
         +'{\\sign{-}}'
         +'{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}'
         +'{\\sign{-}}'
         +'{\\mixed{\\str{$whole3}}{\\frac{\\fracstr{$num3}}{\\fracstr{$den3}}}}',
      answer: '\\css'
         +'{\\rowgrp'
         +'{\\ins{Convert the mixed numbers to improper fractions:}}'
         +'{\\grp'
          +'{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}'
          +'{\\sign{-}}'
          +'{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}'
          +'{\\sign{-}}'
          +'{\\mixed{\\str{$whole3}}{\\frac{\\fracstr{$num3}}{\\fracstr{$den3}}}}'
         +'}'
         +'{\\html{&nbsp;}}'
         +'{\\grp'
          +'{\\frac{\\input{$numnew1}}{\\fracstr{$den1}}}'
          +'{\\sign{-}}'
          +'{\\frac{\\input{$numnew2}}{\\fracstr{$den2}}}'
          +'{\\sign{-}}'
          +'{\\frac{\\input{$numnew3}}{\\fracstr{$den3}}}'
         +'}'
         +'}{well}',
      controls: {
       "checkAnswer": true,
       "help": true
      },
     }, {
      problem: '\\grp'
         +'{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}'
         +'{\\sign{-}}'
         +'{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}'
         +'{\\sign{-}}'
         +'{\\mixed{\\str{$whole3}}{\\frac{\\fracstr{$num3}}{\\fracstr{$den3}}}}',
      answer: '\\css'
         +'{\\rowgrp'
         +'{\\html{Convert the mixed numbers to improper fractions:}}'
         +'{\\html{&nbsp;}}'
         +'{\\grp'
          +'{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}'
          +'{\\sign{-}}'
          +'{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}'
          +'{\\sign{-}}'
          +'{\\mixed{\\str{$whole3}}{\\frac{\\fracstr{$num3}}{\\fracstr{$den3}}}}'
         +'}'
         +'{\\html{&nbsp;}}'
         +'{\\grp'
          +'{\\frac{\\fracstr{$numnew1}}{\\fracstr{$den1}}}'
          +'{\\sign{-}}'
          +'{\\frac{\\fracstr{$numnew2}}{\\fracstr{$den2}}}'
          +'{\\sign{-}}'
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
         +'{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}'
         +'{\\sign{-}}'
         +'{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}'
         +'{\\sign{-}}'
         +'{\\mixed{\\str{$whole3}}{\\frac{\\fracstr{$num3}}{\\fracstr{$den3}}}}', 
      answer: '\\css'
         +'{\\rowgrp'
         +'{\\html{Convert the mixed numbers to improper fractions:}}'
         +'{\\html{&nbsp;}}'
         +'{\\grp'
          +'{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}'
          +'{\\sign{-}}'
          +'{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}'
          +'{\\sign{-}}'
          +'{\\mixed{\\str{$whole3}}{\\frac{\\fracstr{$num3}}{\\fracstr{$den3}}}}'
         +'}'
         +'{\\html{&nbsp;}}'
         +'{\\grp'
          +'{\\frac{\\fracstr{$numnew1}}{\\fracstr{$den1}}}'
          +'{\\sign{-}}'
          +'{\\frac{\\fracstr{$numnew2}}{\\fracstr{$den2}}}'
          +'{\\sign{-}}'
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
          +'{\\sign{-}}'
          +'{\\frac{\\fracstr{$numnew2}}{\\fracstr{$den2}}}'
          +'{\\sign{-}}'
          +'{\\frac{\\fracstr{$numnew3}}{\\fracstr{$den3}}}'
         +'}'
         +'{\\html{&nbsp;}}' 
         +'{\\grp'
          +'{\\frac{\\input{$numlcd1}}{\\fracstr{$answerDen}}}'
          +'{\\sign{-}}'
          +'{\\frac{\\input{$numlcd2}}{\\fracstr{$answerDen}}}'
          +'{\\sign{-}}'
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
        +'{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}'
        +'{\\sign{-}}'
        +'{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}'
        +'{\\sign{-}}'
        +'{\\mixed{\\str{$whole3}}{\\frac{\\fracstr{$num3}}{\\fracstr{$den3}}}}',
      answer: '\\css'
        +'{\\rowgrp'
        +'{\\html{Convert the mixed numbers to improper fractions:}}'
        +'{\\html{&nbsp;}}'
        +'{\\grp'
         +'{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}'
         +'{\\sign{-}}'
         +'{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}'
         +'{\\sign{-}}'
         +'{\\mixed{\\str{$whole3}}{\\frac{\\fracstr{$num3}}{\\fracstr{$den3}}}}'
        +'}'
        +'{\\html{&nbsp;}}'
        +'{\\grp'
         +'{\\frac{\\fracstr{$numnew1}}{\\fracstr{$den1}}}'
         +'{\\sign{-}}'
         +'{\\frac{\\fracstr{$numnew2}}{\\fracstr{$den2}}}'
         +'{\\sign{-}}'
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
         +'{\\sign{-}}'
         +'{\\frac{\\fracstr{$numnew2}}{\\fracstr{$den2}}}'
         +'{\\sign{-}}'
         +'{\\frac{\\fracstr{$numnew3}}{\\fracstr{$den3}}}'
        +'}'
        +'{\\html{&nbsp;}}' 
        +'{\\grp'
         +'{\\frac{\\fracstr{$numlcd1}}{\\fracstr{$answerDen}}}'
         +'{\\sign{-}}'
         +'{\\frac{\\fracstr{$numlcd2}}{\\fracstr{$answerDen}}}'
         +'{\\sign{-}}'
         +'{\\frac{\\fracstr{$numlcd3}}{\\fracstr{$answerDen}}}'
        +'}'
       +'{\\html{&nbsp;}}'
        +'{\\ins{Subtract the fractions:}}'
        +'{\\grp'
         +'{\\frac'
          +'{\\grp'
           +'{\\str{$numlcd1}}'
           +'{\\sign{-}}'
           +'{\\str{$numlcd2}}'
           +'{\\sign{-}}'
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
       problem: '\\grp'
        +'{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}'
        +'{\\sign{-}}'
        +'{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}'
        +'{\\sign{-}}'
        +'{\\mixed{\\str{$whole3}}{\\frac{\\fracstr{$num3}}{\\fracstr{$den3}}}}',
       answer: '\\css'
        +'{\\rowgrp'
        +'{\\html{Convert the mixed numbers to improper fractions:}}'
        +'{\\html{&nbsp;}}'
        +'{\\grp'
         +'{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}'
         +'{\\sign{-}}'
         +'{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}'
         +'{\\sign{-}}'
         +'{\\mixed{\\str{$whole3}}{\\frac{\\fracstr{$num3}}{\\fracstr{$den3}}}}'
        +'}'
        +'{\\html{&nbsp;}}'
        +'{\\grp'
         +'{\\frac{\\fracstr{$numnew1}}{\\fracstr{$den1}}}'
         +'{\\sign{-}}'
         +'{\\frac{\\fracstr{$numnew2}}{\\fracstr{$den2}}}'
         +'{\\sign{-}}'
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
         +'{\\sign{-}}'
         +'{\\frac{\\fracstr{$numnew2}}{\\fracstr{$den2}}}'
         +'{\\sign{-}}'
         +'{\\frac{\\fracstr{$numnew3}}{\\fracstr{$den3}}}'
        +'}'
        +'{\\html{&nbsp;}}' 
        +'{\\grp'
         +'{\\frac{\\fracstr{$numlcd1}}{\\fracstr{$answerDen}}}'
         +'{\\sign{-}}'
         +'{\\frac{\\fracstr{$numlcd2}}{\\fracstr{$answerDen}}}'
         +'{\\sign{-}}'
         +'{\\frac{\\fracstr{$numlcd3}}{\\fracstr{$answerDen}}}'
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
           +'{\\sign{-}}'
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
                title: 'Subtracting Mixed Numbers',
    children: [{
     title: 'Main Answer',
     children: [{
      problem: '',
      answer: '\\grp'
        +'{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}'
        +'{\\sign{-}}'
        +'{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}'
        +'{\\sign{-}}'
        +'{\\mixed{\\str{$whole3}}{\\frac{\\fracstr{$num3}}{\\fracstr{$den3}}}}'
        +'{\\sign{=}}'
        +'{\\mixed{\\input{$wholeanswer1}}{\\frac{\\input{$numanswer2}}{\\input{$answerDen}}}}',
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
         +'{\\sign{-}}'
         +'{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}'
         +'{\\sign{-}}'
         +'{\\mixed{\\str{$whole3}}{\\frac{\\fracstr{$num3}}{\\fracstr{$den3}}}}',
      answer: '\\css'
         +'{\\rowgrp'
         +'{\\ins{Convert the mixed numbers to improper fractions:}}'
         +'{\\grp'
          +'{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}'
          +'{\\sign{-}}'
          +'{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}'
          +'{\\sign{-}}'
          +'{\\mixed{\\str{$whole3}}{\\frac{\\fracstr{$num3}}{\\fracstr{$den3}}}}'
         +'}'
         +'{\\html{&nbsp;}}'
         +'{\\grp'
          +'{\\frac{\\input{$numnew1}}{\\fracstr{$den1}}}'
          +'{\\sign{-}}'
          +'{\\frac{\\input{$numnew2}}{\\fracstr{$den2}}}'
          +'{\\sign{-}}'
          +'{\\frac{\\input{$numnew3}}{\\input{$den4}}}'
         +'}'
         +'}{well}',
      controls: {
       "checkAnswer": true,
       "help": true
      },
     }, {
      problem: '\\grp'
         +'{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}'
         +'{\\sign{-}}'
         +'{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}'
         +'{\\sign{-}}'
         +'{\\mixed{\\str{$whole3}}{\\frac{\\fracstr{$num3}}{\\fracstr{$den3}}}}',
      answer: '\\css'
         +'{\\rowgrp'
         +'{\\html{Convert the mixed numbers to improper fractions:}}'
         +'{\\html{&nbsp;}}'
         +'{\\grp'
          +'{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}'
          +'{\\sign{-}}'
          +'{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}'
          +'{\\sign{-}}'
          +'{\\frac{\\fracstr{$numnew3}}{\\fracstr{$den4}}}'
         +'}'
         +'{\\html{&nbsp;}}'
         +'{\\grp'
          +'{\\frac{\\fracstr{$numnew1}}{\\fracstr{$den1}}}'
          +'{\\sign{-}}'
          +'{\\frac{\\fracstr{$numnew2}}{\\fracstr{$den2}}}'
          +'{\\sign{-}}'
          +'{\\frac{\\fracstr{$numnew3}}{\\fracstr{$den4}}}'
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
         +'{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}'
         +'{\\sign{-}}'
         +'{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}'
         +'{\\sign{-}}'
         +'{\\mixed{\\str{$whole3}}{\\frac{\\fracstr{$num3}}{\\fracstr{$den3}}}}', 
      answer: '\\css'
         +'{\\rowgrp'
         +'{\\html{Convert the mixed numbers to improper fractions:}}'
         +'{\\html{&nbsp;}}'
         +'{\\grp'
          +'{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}'
          +'{\\sign{-}}'
          +'{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}'
          +'{\\sign{-}}'
          +'{\\frac{\\fracstr{$numnew3}}{\\fracstr{$den4}}}'
         +'}'
         +'{\\html{&nbsp;}}'
         +'{\\grp'
          +'{\\frac{\\fracstr{$numnew1}}{\\fracstr{$den1}}}'
          +'{\\sign{-}}'
          +'{\\frac{\\fracstr{$numnew2}}{\\fracstr{$den2}}}'
          +'{\\sign{-}}'
          +'{\\frac{\\fracstr{$numnew3}}{\\fracstr{$den4}}}'
         +'}'
         +'{\\html{&nbsp;}}'
         +'{\\html{Determine the lowest common denominator (LCD) of the fractions:}}'
         +'{\\html{&nbsp;}}'
         +'{\\html{$answerDen}}'
         +'{\\html{&nbsp;}}'
         +'{\\ins{Use the LCD to convert the fractions:}}'
         +'{\\grp'
          +'{\\frac{\\fracstr{$numnew1}}{\\fracstr{$den1}}}'
          +'{\\sign{-}}'
          +'{\\frac{\\fracstr{$numnew2}}{\\fracstr{$den2}}}'
          +'{\\sign{-}}'
          +'{\\frac{\\fracstr{$numnew3}}{\\fracstr{$den4}}}'
         +'}'
         +'{\\html{&nbsp;}}' 
         +'{\\grp'
          +'{\\frac{\\input{$numlcd1}}{\\fracstr{$answerDen}}}'
          +'{\\sign{-}}'
          +'{\\frac{\\input{$numlcd2}}{\\fracstr{$answerDen}}}'
          +'{\\sign{-}}'
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
        +'{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}'
        +'{\\sign{-}}'
        +'{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}'
        +'{\\sign{-}}'
        +'{\\mixed{\\str{$whole3}}{\\frac{\\fracstr{$num3}}{\\fracstr{$den3}}}}',
      answer: '\\css'
        +'{\\rowgrp'
        +'{\\html{Convert the mixed numbers to improper fractions:}}'
        +'{\\html{&nbsp;}}'
        +'{\\grp'
         +'{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}'
         +'{\\sign{-}}'
         +'{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}'
         +'{\\sign{-}}'
         +'{\\frac{\\fracstr{$numnew3}}{\\fracstr{$den4}}}'
        +'}'
        +'{\\html{&nbsp;}}'
        +'{\\grp'
         +'{\\frac{\\fracstr{$numnew1}}{\\fracstr{$den1}}}'
         +'{\\sign{-}}'
         +'{\\frac{\\fracstr{$numnew2}}{\\fracstr{$den2}}}'
         +'{\\sign{-}}'
         +'{\\frac{\\fracstr{$numnew3}}{\\fracstr{$den4}}}'
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
         +'{\\sign{-}}'
         +'{\\frac{\\fracstr{$numnew2}}{\\fracstr{$den2}}}'
         +'{\\sign{-}}'
         +'{\\frac{\\fracstr{$numnew3}}{\\fracstr{$den4}}}'
        +'}'
        +'{\\html{&nbsp;}}' 
        +'{\\grp'
         +'{\\frac{\\fracstr{$numlcd1}}{\\fracstr{$answerDen}}}'
         +'{\\sign{-}}'
         +'{\\frac{\\fracstr{$numlcd2}}{\\fracstr{$answerDen}}}'
         +'{\\sign{-}}'
         +'{\\frac{\\fracstr{$numlcd3}}{\\fracstr{$answerDen}}}'
        +'}'
       +'{\\html{&nbsp;}}'
        +'{\\ins{Subtract the fractions:}}'
        +'{\\grp'
         +'{\\frac'
          +'{\\grp'
           +'{\\str{$numlcd1}}'
           +'{\\sign{-}}'
           +'{\\str{$numlcd2}}'
           +'{\\sign{-}}'
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
       problem: '\\grp'
        +'{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}'
        +'{\\sign{-}}'
        +'{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}'
        +'{\\sign{-}}'
        +'{\\mixed{\\str{$whole3}}{\\frac{\\fracstr{$num3}}{\\fracstr{$den3}}}}',
       answer: '\\css'
        +'{\\rowgrp'
        +'{\\html{Convert the mixed numbers to improper fractions:}}'
        +'{\\html{&nbsp;}}'
        +'{\\grp'
         +'{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}'
         +'{\\sign{-}}'
         +'{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}'
         +'{\\sign{-}}'
         +'{\\frac{\\fracstr{$numnew3}}{\\fracstr{$den4}}}'
        +'}'
        +'{\\html{&nbsp;}}'
        +'{\\grp'
         +'{\\frac{\\fracstr{$numnew1}}{\\fracstr{$den1}}}'
         +'{\\sign{-}}'
         +'{\\frac{\\fracstr{$numnew2}}{\\fracstr{$den2}}}'
         +'{\\sign{-}}'
         +'{\\frac{\\fracstr{$numnew3}}{\\fracstr{$den4}}}'
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
         +'{\\sign{-}}'
         +'{\\frac{\\fracstr{$numnew2}}{\\fracstr{$den2}}}'
         +'{\\sign{-}}'
         +'{\\frac{\\fracstr{$numnew3}}{\\fracstr{$den4}}}'
        +'}'
        +'{\\html{&nbsp;}}' 
        +'{\\grp'
         +'{\\frac{\\fracstr{$numlcd1}}{\\fracstr{$answerDen}}}'
         +'{\\sign{-}}'
         +'{\\frac{\\fracstr{$numlcd2}}{\\fracstr{$answerDen}}}'
         +'{\\sign{-}}'
         +'{\\frac{\\fracstr{$numlcd3}}{\\fracstr{$answerDen}}}'
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
           +'{\\sign{-}}'
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
			fifth: {
                title: 'Subtracting Mixed Numbers',
				children: [{
					title: 'Main Answer',
					children: [{
						problem: '',
						answer: '\\grp'
								+'{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}'
								+'{\\sign{-}}{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}'
								+'{\\sign{=}}'
								+'{\\mixed{\\input{$wholeanswer1}}{\\frac{\\input{$numanswer2}}{\\input{$answer1Den}}}}',
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
								+'{\\sign{-}}{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}',
						answer: '\\css'
								+'{\\rowgrp'
								+'{\\ins{Convert the mixed numbers to improper fractions:}}'
								+'{\\grp'
									+'{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}'
									+'{\\sign{-}}'
									+'{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}'
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
					},  {
						problem: '\\grp'
								+'{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}'
								+'{\\sign{-}}{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}',
						answer: '\\css'
								+'{\\rowgrp'
								+'{\\html{Convert the mixed numbers to improper fractions:}}'
								+'{\\html{&nbsp;}}'
								+'{\\grp'
									+'{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}'
									+'{\\sign{-}}'
									+'{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}'
								+'}'
								+'{\\html{&nbsp;}}'
								+'{\\grp'
									+'{\\frac{\\fracstr{$numnew1}}{\\fracstr{$den1}}}'
									+'{\\sign{-}}'
									+'{\\frac{\\fracstr{$numnew2}}{\\fracstr{$den2}}}'
								+'}'
								+'{\\html{&nbsp;}}'
								+'{\\ins{Subtract the fractions:}}'
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
								+'{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}'
								+'{\\sign{-}}{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}',
						answer: '\\css'
								+'{\\rowgrp'
									+'{\\html{Convert the mixed numbers to improper fractions:}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp'
										+'{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}'
										+'{\\sign{-}}'
										+'{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}'
									+'}'
									+'{\\html{&nbsp;}}'
									+'{\\grp'
										+'{\\frac{\\fracstr{$numnew1}}{\\fracstr{$den1}}}'
										+'{\\sign{-}}'
										+'{\\frac{\\fracstr{$numnew2}}{\\fracstr{$den2}}}'
									+'}'
									+'{\\html{&nbsp;}}'
									+'{\\html{Subtract the fractions:}}'
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
			sixth: {
                title: 'Subtraction of Mixed Numbers',
				children: [{
					title: 'Main Answer',
					children: [{
						problem: '',
						answer: '\\grp'
								+'{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}'
								+'{\\sign{-}}{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}'
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
									+'{\\sign{-}}'
									+'{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}',
						answer: '\\css'
									+'{\\rowgrp'
										+'{\\ins{Convert the mixed numbers to improper fractions:}}'
										+'{\\grp'
											+'{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}'
											+'{\\html{<span style="font-size:5%;">&nbsp;</span>}}{\\sign{-}}{\\html{<span style="font-size:5%;">&nbsp;</span>}}'
											+'{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\frac{\\input{$numnew1}}{\\fracstr{$den1}}}'
											+'{\\sign{-}}'
											+'{\\frac{\\input{$numnew2}}{\\input{$den3}}}'
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
									+'{\\sign{-}}'
									+'{\\frac{\\fracstr{$numnew2}}{\\fracstr{$den3}}}',
						answer: '\\css'
									+'{\\rowgrp'
										+'{\\html{Convert the mixed numbers to improper fractions:}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}'
											+'{\\html{<span style="font-size:5%;">&nbsp;</span>}}{\\sign{-}}{\\html{<span style="font-size:5%;">&nbsp;</span>}}'
											+'{\\frac{\\fracstr{$numnew2}}{\\fracstr{$den3}}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\frac{\\fracstr{$numnew1}}{\\fracstr{$den1}}}'
											+'{\\sign{-}}'
											+'{\\frac{\\fracstr{$numnew2}}{\\fracstr{$den3}}}'
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
										+'{\\sign{-}}'
										+'{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}',
						answer: '\\css'
									+'{\\rowgrp'
										+'{\\html{Convert the mixed numbers to improper fractions:}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}'
											+'{\\html{<span style="font-size:5%;">&nbsp;</span>}}{\\sign{-}}{\\html{<span style="font-size:5%;">&nbsp;</span>}}'
											+'{\\frac{\\fracstr{$numnew2}}{\\fracstr{$den3}}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\frac{\\fracstr{$numnew1}}{\\fracstr{$den1}}}'
											+'{\\sign{-}}'
											+'{\\frac{\\fracstr{$numnew2}}{\\fracstr{$den3}}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\html{Determine the lowest common denominator (LCD) of the fractions:}}'
										+'{\\html{&nbsp;}}'
										+'{\\html{$answerDen}}'
										+'{\\html{&nbsp;}}'
										+'{\\ins{Use the LCD to convert the fractions:}}'
										+'{\\grp'
											+'{\\frac{\\fracstr{$numnew1}}{\\fracstr{$den1}}}'
											+'{\\sign{-}}'
											+'{\\frac{\\fracstr{$numnew2}}{\\fracstr{$den3}}}'
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
									+'{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}'
									+'{\\sign{-}}{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}',
						answer: '\\css'
									+'{\\rowgrp'
										+'{\\html{Convert the mixed numbers to improper fractions:}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}'
											+'{\\html{<span style="font-size:5%;">&nbsp;</span>}}{\\sign{-}}{\\html{<span style="font-size:5%;">&nbsp;</span>}}'
											+'{\\frac{\\fracstr{$numnew2}}{\\fracstr{$den3}}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\frac{\\fracstr{$numnew1}}{\\fracstr{$den1}}}'
											+'{\\sign{-}}'
											+'{\\frac{\\fracstr{$numnew2}}{\\fracstr{$den3}}}'
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
											+'{\\sign{-}}'
											+'{\\frac{\\fracstr{$numnew2}}{\\fracstr{$den3}}}'
										+'}'
										+'{\\html{&nbsp;}}'	
										+'{\\grp'
											+'{\\frac{\\fracstr{$numlcd1}}{\\fracstr{$answerDen}}}'
											+'{\\sign{-}}'
											+'{\\frac{\\fracstr{$numlcd2}}{\\fracstr{$answerDen}}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\ins{Subtract the fractions:}}'
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
									+'{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}'
									+'{\\sign{-}}{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}',
						answer: '\\css'
									+'{\\rowgrp'
										+'{\\html{Convert the mixed numbers to improper fractions:}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}'
											+'{\\html{<span style="font-size:5%;">&nbsp;</span>}}{\\sign{-}}{\\html{<span style="font-size:5%;">&nbsp;</span>}}'
											+'{\\frac{\\fracstr{$numnew2}}{\\fracstr{$den3}}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\frac{\\fracstr{$numnew1}}{\\fracstr{$den1}}}'
											+'{\\sign{-}}'
											+'{\\frac{\\fracstr{$numnew2}}{\\fracstr{$den3}}}'
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
											+'{\\sign{-}}'
											+'{\\frac{\\fracstr{$numnew2}}{\\fracstr{$den3}}}'
										+'}'
										+'{\\html{&nbsp;}}'	
										+'{\\grp'
											+'{\\frac{\\fracstr{$numlcd1}}{\\fracstr{$answerDen}}}'
											+'{\\sign{-}}'
											+'{\\frac{\\fracstr{$numlcd2}}{\\fracstr{$answerDen}}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\html{Subtract the fractions:}}'
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
			seventh: {
                title: 'Subtraction of Mixed Numbers',
				children: [{
					title: 'Main Answer',
					children: [{
						problem: '',
						answer: '\\grp'
								+'{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}'
								+'{\\sign{-}}{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}'
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
									+'{\\sign{-}}'
									+'{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}',
						answer: '\\css'
									+'{\\rowgrp'
										+'{\\ins{Convert the mixed numbers to improper fractions:}}'
										+'{\\grp'
											+'{\\frac{\\fracstr{$numnew1}}{\\fracstr{$den3}}}'
											+'{\\html{<span style="font-size:5%;">&nbsp;</span>}}{\\sign{-}}{\\html{<span style="font-size:5%;">&nbsp;</span>}}'
											+'{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\frac{\\input{$numnew1}}{\\fracstr{$den3}}}'
											+'{\\sign{-}}'
											+'{\\frac{\\input{$numnew2}}{\\input{$den2}}}'
										+'}'
										+'{\\html{&nbsp;}}'
									+'}{well}',
						controls: {
							"checkAnswer": true,
							"help": true
						},
					}, {
						problem: '\\grp'
									+'{\\frac{\\fracstr{$numnew1}}{\\fracstr{$den3}}}'
									+'{\\sign{-}}'
									+'{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}',
						answer: '\\css'
									+'{\\rowgrp'
										+'{\\html{Convert the mixed numbers to improper fractions:}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\frac{\\fracstr{$numnew1}}{\\fracstr{$den3}}}'
											+'{\\html{<span style="font-size:5%;">&nbsp;</span>}}{\\sign{-}}{\\html{<span style="font-size:5%;">&nbsp;</span>}}'
											+'{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\frac{\\fracstr{$numnew1}}{\\fracstr{$den3}}}'
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
										+'{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}'
										+'{\\sign{-}}'
										+'{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}',
						answer: '\\css'
									+'{\\rowgrp'
										+'{\\html{Convert the mixed numbers to improper fractions:}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\frac{\\fracstr{$numnew1}}{\\fracstr{$den3}}}'
											+'{\\html{<span style="font-size:5%;">&nbsp;</span>}}{\\sign{-}}{\\html{<span style="font-size:5%;">&nbsp;</span>}}'
											+'{\\frac{\\fracstr{$numnew2}}{\\fracstr{$den2}}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\frac{\\fracstr{$numnew1}}{\\fracstr{$den3}}}'
											+'{\\sign{-}}'
											+'{\\frac{\\fracstr{$numnew2}}{\\fracstr{$den2}}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\html{Determine the lowest common denominator (LCD) of the fractions:}}'
										+'{\\html{&nbsp;}}'
										+'{\\html{$answerDen}}'
										+'{\\html{&nbsp;}}'
										+'{\\ins{Use the LCD to convert the fractions:}}'
										+'{\\grp'
											+'{\\frac{\\fracstr{$numnew1}}{\\fracstr{$den3}}}'
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
									+'{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}'
									+'{\\sign{-}}{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}',
						answer: '\\css'
									+'{\\rowgrp'
										+'{\\html{Convert the mixed numbers to improper fractions:}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\frac{\\fracstr{$numnew1}}{\\fracstr{$den3}}}'
											+'{\\html{<span style="font-size:5%;">&nbsp;</span>}}{\\sign{-}}{\\html{<span style="font-size:5%;">&nbsp;</span>}}'
											+'{\\frac{\\fracstr{$numnew2}}{\\fracstr{$den2}}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\frac{\\fracstr{$numnew1}}{\\fracstr{$den3}}}'
											+'{\\sign{-}}'
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
											+'{\\frac{\\fracstr{$numnew1}}{\\fracstr{$den3}}}'
											+'{\\sign{-}}'
											+'{\\frac{\\fracstr{$numnew2}}{\\fracstr{$den2}}}'
										+'}'
										+'{\\html{&nbsp;}}'	
										+'{\\grp'
											+'{\\frac{\\fracstr{$numlcd1}}{\\fracstr{$answerDen}}}'
											+'{\\sign{-}}'
											+'{\\frac{\\fracstr{$numlcd2}}{\\fracstr{$answerDen}}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\ins{Subtract the fractions:}}'
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
									+'{\\mixed{\\str{$whole1}}{\\frac{\\fracstr{$num1}}{\\fracstr{$den1}}}}'
									+'{\\sign{-}}{\\mixed{\\str{$whole2}}{\\frac{\\fracstr{$num2}}{\\fracstr{$den2}}}}',
						answer: '\\css'
									+'{\\rowgrp'
										+'{\\html{Convert the mixed numbers to improper fractions:}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\frac{\\fracstr{$numnew1}}{\\fracstr{$den3}}}'
											+'{\\html{<span style="font-size:5%;">&nbsp;</span>}}{\\sign{-}}{\\html{<span style="font-size:5%;">&nbsp;</span>}}'
											+'{\\frac{\\fracstr{$numnew2}}{\\fracstr{$den2}}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\frac{\\fracstr{$numnew1}}{\\fracstr{$den1}}}'
											+'{\\sign{-}}'
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
											+'{\\frac{\\fracstr{$numnew1}}{\\fracstr{$den3}}}'
											+'{\\sign{-}}'
											+'{\\frac{\\fracstr{$numnew2}}{\\fracstr{$den2}}}'
										+'}'
										+'{\\html{&nbsp;}}'	
										+'{\\grp'
											+'{\\frac{\\fracstr{$numlcd1}}{\\fracstr{$answerDen}}}'
											+'{\\sign{-}}'
											+'{\\frac{\\fracstr{$numlcd2}}{\\fracstr{$answerDen}}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\html{Subtract the fractions:}}'
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
        },
        
	data = [
            // problem 1
			{ whole1: 2, num1: 3, den1: 8, whole2: 1, num2: 1, den2: 8, wholeanswer1: 1, numanswer1: 10, numanswer2: 1, answerDen: 8, answer1Den: 4, numnew1: 19, numnew2: 9, numlcd1: 19, numlcd2: 9, template: 'fifth' },
            // problem 2
            { whole1: 3, num1: 4, den1: 5, whole2: 1, num2: 2, den2: 5, wholeanswer: 2, numanswer1: 12, numanswer2: 2, answerDen: 5, numnew1: 19, numnew2: 7, numlcd1: 19, numlcd2: 7, template: 'first' },
            // problem 3
			{ whole1: 5, num1: '', den1: '', whole2: 2, num2: 1, den2: 3, den3: 1, wholeanswer: 2, numanswer1: 8, numanswer2: 2, answerDen: 3, numnew1: 5, numnew2: 7, numlcd1: 15, numlcd2: 7, template: 'seventh' },
            // problem 4
            { whole1: 3, num1: 1, den1: 4, whole2: 2, num2: 3, den2: 4, wholeanswer1: '', numanswer1: 2, numanswer2: 1, answerDen: 4, answer1Den: 2, numnew1: 13, numnew2: 11, numlcd1: 13, numlcd2: 11, template: 'fifth' },
            // problem 5
            { whole1: 3, num1: 1, den1: 6, whole2: 2, num2: 7, den2: 12,wholeanswer: '', numanswer1: 7, numanswer2: 7, answerDen: 12, numnew1: 19, numnew2: 31, numlcd1: 38, numlcd2: 31, template: 'main' },
            // problem 6
           { whole1: 7, num1: 2, den1: 5, whole2: 4, num2: '', den2: '', den3: 1, wholeanswer: 3, numanswer1: 17, numanswer2: 2, answerDen: 5, numnew1: 37, numnew2: 4, numlcd1: 37, numlcd2: 20, template: 'sixth' },
            // problem 7
           { whole1: 2, num1: 4, den1: '\xA05\xA0', whole2: 1, num2: 1, den2: 2, whole3: '', num3: 3, den3: '\xA04\xA0', wholeanswer1: '', numanswer1: 11, answerDen: 20, numnew1: 14, numnew2: 3, numnew3: 3, numanswer2: 11, numlcd1: 56, numlcd2: 30, numlcd3: 15, template: 'third' },
            // problem 8
            { whole1: 3, num1: 2, den1: '\xA03\xA0', whole2: 1, num2: 1, den2: 4, whole3: 2, num3: '', den3: '', den4: 1, wholeanswer1: '', numanswer1: 5, answerDen: 12, numnew1: 11, numnew2: 5, numnew3: 2, numanswer2: 5, numlcd1: 44, numlcd2: 15, numlcd3: 24, template: 'fourth' },
            // problem 9
            { whole1: 5, num1: 4, den1: '\xA09\xA0', whole2: 1, num2: 1, den2: 3, whole3: 2, num3: 5, den3: '\xA06\xA0', wholeanswer1: 1, numanswer1: 23, answerDen: 18, numnew1: 49, numnew2: 4, numnew3: 17, numanswer2: 5, numlcd1: 98, numlcd2: 24, numlcd3: 51, template: 'third' },
            // problem 10
            { whole1: 5, num1: 1, den1: '\xA04\xA0', whole2: 1, num2: 3, den2: 8, whole3: 2, num3: 5, den3: '\xA016\xA0', wholeanswer1: 1, numanswer1: 25, answerDen: 16, numnew1: 21, numnew2: 11, numnew3: 37, numanswer2: 9, numlcd1: 84, numlcd2: 22, numlcd3: 37, template: 'third' },
        ];
 


 
    return dataUtils.build(desc, template, data);
}]);
