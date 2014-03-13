/*global angular */

// angular.module('mathSkills').value('data_m_1', {
    // title: 'M.1 Combining Fractions and Mixed Numbers',
    // path: 'M.1-combining-fractions-and-mixed-numbers',
    // children: [{
        // title: 'Combining Fractions and Mixed Numbers',
        // children: [] }]
// });

/*global angular */

angular.module('mathSkills').service('data_m_1', ['dataUtils', function (dataUtils) {
    var desc = {
    		title: 'M.1 Combining Fractions and Mixed Numbers',
    	    path: 'M.1-combining-fractions-and-mixed-numbers',
            children: []
        },
	        template = {
            twoFractions: {
                title: 'Combining Fractions and Mixed Numbers',
                children: [{
                    title: 'twoFractions Answer',
                    children: [{
						problem: '\\html{&nbsp;}',
						answer: '\\grp'
							+'{\\sign{$firstSign}}'
							+'{\\frac{\\fracstr{$firstNum}}{\\fracstr{$firstDen}}}'
							+'{\\sign{$secondSign}}'
							+'{\\frac{\\fracstr{$secondNum}}{\\fracstr{$secondDen}}}'
							+'{\\sign{=}}'
							+'{\\frac{\\input{$differenceNum}}{\\input{$answerDen}}}',
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
									+'{\\frac{\\fracstr{$firstNum}}{\\fracstr{$firstDen}}}'
									+'{\\sign{&minus;}}{\\frac{\\fracstr{$secondNum}}{\\fracstr{$secondDen}}'
								+'}',
						answer: '\\rowgrp'
									+'{\\ins{Determine the lowest common denominator (LCD) of the fractions:}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp{\\input{$answerDen}}'
								+'}',
						controls: {
							"checkAnswer": true,
							"help": true
						},
                    }, {
						problem: '\\grp'
									+'{\\frac{\\fracstr{$firstNum}}{\\fracstr{$firstDen}}}'
									+'{\\sign{&minus;}}{\\frac{\\fracstr{$secondNum}}{\\fracstr{$secondDen}}'
								+'}',
						answer: '\\css'
								+'{\\rowgrp'
									+'{\\html{Determine the lowest common denominator (LCD) of the fractions:}}'
									+'{\\html{&nbsp;}}'
									+'{\\html{$answerDen}}'
									+'{\\html{&nbsp;}}'
									+'{\\ins{Use the LCD to convert the fractions:}}'
									+'{\\grp{\\frac{\\fracstr{$firstNum}}{\\fracstr{$firstDen}}}'
        										+'{\\sign{&minus;}}'
        										+'{\\frac{\\fracstr{$secondNum}}{\\fracstr{$secondDen}}}}'       								
        							+'{\\html{&nbsp;}}'
									+'{\\grp'
        										+'{\\frac{\\input{$firstAnswerNum}}{\\fracstr{$answerDen}}}'
        										+'{\\sign{&minus;}}'
        										+'{\\frac{\\input{$secondAnswerNum}}{\\fracstr{$answerDen}}}'
        										+'}'
        									+'}{well}',
						controls: {
							"checkAnswer": true,
							"help": true
						}
                    }, {
						problem: 'grp'
									+'{\\frac{\\fracstr{$firstNum}}{\\fracstr{$firstDen}}}'
									+'{\\sign{&minus;}}{\\frac{\\fracstr{$secondNum}}{\\fracstr{$secondDen}}'
								+'}',
							answer: '\\css'
									+'{\\rowgrp'
										+'{\\html{Determine the lowest common denominator (LCD) of the fractions:}}'
										+'{\\html{&nbsp;}}'
										+'{\\html{$answerDen}}'
										+'{\\html{&nbsp;}}'
										+'{\\html{Use the LCD to convert the fractions:}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp{\\frac{\\fracstr{$firstNum}}{\\fracstr{$firstDen}}}'
											+'{\\sign{&minus;}}'											
											+'{\\frac{\\fracstr{$secondNum}}{\\fracstr{$secondDen}}}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp{\\frac{\\fracstr{$firstAnswerNum}}{\\fracstr{$answerDen}}}'
											+'{\\sign{&minus;}}'
											+'{\\frac{\\fracstr{$secondAnswerNum}}{\\fracstr{$answerDen}}}}'
										+'{\\html{&nbsp;}}'
										+'{\\ins{Subtract the numerators:}}'
										+'{\\grp{\\frac{\\grp{\\fracstr{$firstAnswerNum}}{\\sign{&minus;}}{\\fracstr{$secondAnswerNum}}}{\\fracstr{$answerDen}}}{\\sign{=}}{\\frac{\\input{$differenceNum}}{\\input{$answerDen}}}}'	
        									+'}{well}',
						controls: {
							"checkAnswer": true,
							"help": true,
							"fixBottomRight": true
						}
                    }]
                }]
            },
			threeFractions: {
                title: 'Subtracting Unlike Fractions',
                children: [{
                    title: 'Main Answer',
                    children: [{
						problem: '\\html{&nbsp;}',
						answer: '\\grp'
							+'{\\frac{\\fracstr{$firstNum}}{\\fracstr{$firstDen}}}'
							+'{\\html{&nbsp;}}'
							+'{\\sign{&minus;}}'
							+'{\\frac{\\fracstr{$secondNum}}{\\fracstr{$secondDen}}}'
							+'{\\html{&nbsp;}}'
							+'{\\sign{&minus;}}'
							+'{\\frac{\\fracstr{$thirdNum}}{\\fracstr{$thirdDen}}}'
							+'{\\html{&nbsp;}}'
							+'{\\sign{=}}'
							+'{\\html{&nbsp;}}'
							+'{\\frac{\\input{$differenceNum}}{\\input{$answerDen}}}',
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
									+'{\\frac{\\fracstr{$firstNum}}{\\fracstr{$firstDen}}}'
									+'{\\sign{&minus;}}'
									+'{\\frac{\\fracstr{$secondNum}}{\\fracstr{$secondDen}}}'
									+'{\\sign{&minus;}}'
									+'{\\frac{\\fracstr{$thirdNum}}{\\fracstr{$thirdDen}}}'
									+'{\\html{&nbsp;}}',
						answer: '\\rowgrp'
									+'{\\ins{Determine the lowest common denominator (LCD) of the fractions:}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp{\\input{$answerDen}}'
								+'}',
						controls: {
							"checkAnswer": true,
							"help": true
						},
                    }, {
						problem: '\\grp'
									+'{\\frac{\\fracstr{$firstNum}}{\\fracstr{$firstDen}}}'
									+'{\\sign{&minus;}}'
									+'{\\frac{\\fracstr{$secondNum}}{\\fracstr{$secondDen}}}'
									+'{\\sign{&minus;}}'
									+'{\\frac{\\fracstr{$thirdNum}}{\\fracstr{$thirdDen}}}'
									+'{\\html{&nbsp;}}',
						answer: '\\css'
							+'{\\rowgrp'
									+'{\\html{Determine the lowest common denominator (LCD) of the fractions:}}'
									+'{\\html{&nbsp;}}'
									+'{\\html{$answerDen}}'
									+'{\\html{&nbsp;}}'
									+'{\\ins{Use the LCD to convert the fractions:}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp{\\frac{\\fracstr{$firstNum}}{\\fracstr{$firstDen}}}'
											+'{\\sign{&minus;}}'
											+'{\\frac{\\fracstr{$secondNum}}{\\fracstr{$secondDen}}}'
											+'{\\sign{&minus;}}'
											+'{\\frac{\\fracstr{$thirdNum}}{\\fracstr{$thirdDen}}}}'
											+'{\\html{&nbsp;}}'
											+'{\\grp{\\frac{\\input{$firstAnswerNum}}{\\fracstr{$answerDen}}}'
											+'{\\sign{&minus;}}'
											+'{\\frac{\\input{$secondAnswerNum}}{\\fracstr{$answerDen}}}'
											+'{\\sign{&minus;}}'
											+'{\\frac{\\input{$thirdAnswerNum}}{\\fracstr{$answerDen}}}}'
    										+'{\\html{&nbsp;}}'
								+'}{well}',
						controls: {
							"checkAnswer": true,
							"help": true
						}
                    }, {
						problem: '\\grp'
									+'{\\frac{\\fracstr{$firstNum}}{\\fracstr{$firstDen}}}'
									+'{\\sign{&minus;}}'
									+'{\\frac{\\fracstr{$secondNum}}{\\fracstr{$secondDen}}}'
									+'{\\sign{&minus;}}'
									+'{\\frac{\\fracstr{$thirdNum}}{\\fracstr{$thirdDen}}}'
									+'{\\html{&nbsp;}}',
						answer: '\\css'					
								+'{\\rowgrp'
									+'{\\html{Determine the lowest common denominator (LCD) of the fractions:}}'
									+'{\\html{&nbsp;}}'
									+'{\\html{$answerDen}}'
									+'{\\html{&nbsp;}}'
									+'{\\html{Use the LCD to convert the fractions:}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp{\\frac{\\fracstr{$firstNum}}{\\fracstr{$firstDen}}}'
										+'{\\sign{&minus;}}'
										+'{\\frac{\\fracstr{$secondNum}}{\\fracstr{$secondDen}}}'
										+'{\\sign{&minus;}}'
										+'{\\frac{\\fracstr{$thirdNum}}{\\fracstr{$thirdDen}}}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp{\\frac{\\fracstr{$firstAnswerNum}}{\\fracstr{$answerDen}}}'
										+'{\\sign{&minus;}}'
										+'{\\frac{\\fracstr{$secondAnswerNum}}{\\fracstr{$answerDen}}}'
										+'{\\sign{&minus;}}'
										+'{\\frac{\\fracstr{$thirdAnswerNum}}{\\fracstr{$answerDen}}}}'
									+'{\\html{&nbsp;}}'
									+'{\\ins{Subtract the numerators:}}'
									+'{\\grp{\\frac{\\grp{\\fracstr{$firstAnswerNum}}{\\sign{&minus;}}{\\fracstr{$secondAnswerNum}}{\\sign{&minus;}}{\\fracstr{$thirdAnswerNum}}}{\\fracstr{$answerDen}}}{\\sign{=}}{\\frac{\\input{$differenceNum}}{\\input{$answerDen}}}}'	
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
            //problem 2
            { firstNum: '1', firstDen: '3', secondNum: '4', secondDen: '5', firstAnswerNum: '5', secondAnswerNum: '4', differenceNum: '1', answerDen: '6', firstSign: '&minus;', secondSign: '+', thirdSign: '', template: 'twoFractions' },
 /*           { firstNum: '1', firstDen: '4', secondNum: '1', secondDen: '10', firstAnswerNum: '5', secondAnswerNum: '2', differenceNum: '3', answerDen: '20', template: 'twoFractions' },
			{ firstNum: '7', firstDen: '8', secondNum: '5', secondDen: '12', firstAnswerNum: '21', secondAnswerNum: '10', differenceNum: '11', answerDen: '24', template: 'twoFractions' },
			{ firstNum: '1', firstDen: '2', secondNum: '3', secondDen: '11', firstAnswerNum: '11', secondAnswerNum: '6', differenceNum: '5', answerDen: '22', template: 'twoFractions' },

			{ firstNum: '7', firstDen: '8', secondNum: '1', secondDen: '\xA06\xA0', thirdNum: '2', thirdDen: '\xA03\xA0', firstAnswerNum: '21', secondAnswerNum: '4', thirdAnswerNum: '16', differenceNum: '1', answerDen: '24', template: 'threeFractions' },
			{ firstNum: '9', firstDen: '5', secondNum: '3', secondDen: '\xA08\xA0', thirdNum: '1', thirdDen: '\xA02\xA0', firstAnswerNum: '72', secondAnswerNum: '15', thirdAnswerNum: '20', differenceNum: '37', answerDen: '40', template: 'threeFractions' },
			{ firstNum: '11', firstDen: '14', secondNum: '2', secondDen: '7', thirdNum: '1', thirdDen: '4', firstAnswerNum: '22', secondAnswerNum: '8', thirdAnswerNum: '7', differenceNum: '7', answerDen: '28', template: 'threeFractions' }
*/			
        ];

    return dataUtils.build(desc, template, data);
}]);



