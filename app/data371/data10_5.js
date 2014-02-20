
/*global angular */

angular.module('mathSkills').service('data10_5', ['dataUtils', function (dataUtils) {
    var desc = {
			title: '10.5 Compare and Order Fractions',
			path: '10.5-compare-and-order-fractions',
            children: []
        },
	        template = {
            first: {
                title: 'Compare and Order Fractions',
                children: [{
                    title: 'Main Answer',
                    children: [{
						problem: '',
						answer: '\\pan{2}{10}'
                                    +'{\\grp'
                                        +'{\\frac{\\fracstr{$firstNum}}{\\fracstr{$firstDen}}}'
                                        +'{\\btn{<}{$firstButton}{bigger}}'
                                        +'{\\btn{=}{$secondButton}{bigger}}'
                                        +'{\\btn{>}{$thirdButton}{bigger}}'
										+'{\\frac{\\fracstr{$secondNum}}{\\fracstr{$secondDen}}}'
									+'}'
                                +'}',
						controls: {
							"checkAnswer": false,
							"help": '\\rowgrp'
										+'{\\grp'
											+'{\\frac{\\fracstr{$firstNum}}{\\fracstr{$firstDen}}}'
											+'{\\css{\\html{?}}{fakeButton}}'
											+'{\\frac{\\fracstr{$secondNum}}{\\fracstr{$secondDen}}}'
										+'}'
										+'{html{&nbsp;}}'
										+'{\\grp'
											+'{\\frac{\\fracstr{$firstLCDNum}}{\\fracstr{$lcdDen}}}'
											+'{\\css{\\html{?}}{fakeButton}}'
											+'{\\frac{\\fracstr{$secondLCDNum}}{\\fracstr{$lcdDen}}}'
										+'}'
										+'{html{&nbsp;}}'
										+'{\\css{\\html{Answer:}}{help-answer-text}}'
										+'{html{&nbsp;}}'
										+'{\\css'
											+'{\\grp'
												+'{\\frac{\\fracstr{$firstNum}}{\\fracstr{$firstDen}}}'
												+'{\\sign{$answerSign}}'
												+'{\\frac{\\fracstr{$secondNum}}{\\fracstr{$secondDen}}}'
											+'}'
										+'{help-answer-text}}'
						}
                    }]
                }]
           },
		   second: {
                title: 'Compare and Order Fractions',
                children: [{
                    title: 'Main Answer',
                    children: [{
						problem: '\\rowgrp'
									+'{\\html{Arrange from smallest to largest:}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp'
                                        +'{\\frac{\\fracstr{$firstNum}}{\\fracstr{$firstDen}}}'
                                        +'{\\html{,}}'
                                        +'{\\frac{\\fracstr{$secondNum}}{\\fracstr{$secondDen}}}'
                                         +'{\\html{,}}'
										+'{\\frac{\\fracstr{$thirdNum}}{\\fracstr{$thirdDen}}}'
									+'}'
									,
						answer: '\\grp'
                                        +'{\\frac{\\input{$firstAnswerNum}}{\\input{$firstAnswerDen}}}'
                                        +'{\\sign{<}}'
                                        +'{\\frac{\\input{$secondAnswerNum}}{\\input{$secondAnswerDen}}}'
                                        +'{\\sign{<}}'
										+'{\\frac{\\input{$thirdAnswerNum}}{\\input{$thirdAnswerDen}}}',
						controls: {
							"checkAnswer": false,
							"help":'\\rowgrp' 
										+'{\\grp'
											+'{\\frac{\\fracstr{$firstNum}}{\\fracstr{$firstDen}}}'
											+'{\\sign{=}}'
											+'{\\frac{\\fracstr{$firstLCDNum}}{\\fracstr{$lcdDen}}}'
										+'}'
										+'{html{&nbsp;}}'
										+'{\\grp'
											+'{\\frac{\\fracstr{$secondNum}}{\\fracstr{$secondDen}}}'
											+'{\\sign{=}}'
											+'{\\frac{\\fracstr{$secondLCDNum}}{\\fracstr{$lcdDen}}}'
										+'}'
										+'{html{&nbsp;}}'
										+'{\\grp'
											+'{\\frac{\\fracstr{$thirdNum}}{\\fracstr{$thirdDen}}}'
											+'{\\sign{=}}'
											+'{\\frac{\\fracstr{$thirdLCDNum}}{\\fracstr{$lcdDen}}}'
										+'}'
										+'{html{&nbsp;}}'
										+'{\\css{\\html{Answer:}}{help-answer-text}}'
										+'{html{&nbsp;}}'
										+'{\\css'
											+'{\\grp'
												+'{\\frac{\\fracstr{$firstAnswerNum}}{\\fracstr{$firstAnswerDen}}}'
												+'{\\sign{<}}'
												+'{\\frac{\\fracstr{$secondAnswerNum}}{\\fracstr{$secondAnswerDen}}}'
												+'{\\sign{<}}'
												+'{\\frac{\\fracstr{$thirdAnswerNum}}{\\fracstr{$thirdAnswerDen}}}'
											+'}'
										+'{help-answer-text}}'
						}
                    }]
                }]
           }
        },
        data = [
			// problem 1
            { firstNum: '1', firstDen: '4', secondNum: '2', secondDen: '6', firstLCDNum: '3', lcdDen: '12', secondLCDNum: '4', firstButton: 'T', secondButton: 'F', thirdButton: 'F', answerSign: '<', template: 'first', answerBtn: 'noAnswer'
			},
			// problem 2
            { firstNum: '2', firstDen: '3', secondNum: '3', secondDen: '8', firstLCDNum: '16', lcdDen: '24', secondLCDNum: '9', firstButton: 'F', secondButton: 'F', thirdButton: 'T', answerSign: '>', template: 'first', answerBtn: 'noAnswer'
			},
			// problem 3
            { firstNum: '7', firstDen: '9', secondNum: '2', secondDen: '3', firstLCDNum: '14', lcdDen: '18', secondLCDNum: '12', firstButton: 'F', secondButton: 'F', thirdButton: 'T', answerSign: '>', template: 'first', answerBtn: 'noAnswer'
			},
			// problem 4
            { firstNum: '2', firstDen: '5', secondNum: '8', secondDen: '20', firstLCDNum: '8', lcdDen: '20', secondLCDNum: '8', firstButton: 'F', secondButton: 'T', thirdButton: 'F', answerSign: '=', template: 'first', answerBtn: 'noAnswer'
			},
			// problem 5
            { firstNum: '3', firstDen: '7', secondNum: '1', secondDen: '2', firstLCDNum: '6', lcdDen: '14', secondLCDNum: '7', firstButton: 'T', secondButton: 'F', thirdButton: 'F', answerSign: '<', template: 'first', answerBtn: 'noAnswer'
			},
			// problem 6
			{ firstNum: '1', firstDen: '2', secondNum: '2', secondDen: '3', thirdNum: '3',thirdDen: '5', firstLCDNum: '15', secondLCDNum: '20', thirdLCDNum: '18', lcdDen: '30', firstAnswerNum: '1', firstAnswerDen: '2', secondAnswerNum: '3', secondAnswerDen: '5', thirdAnswerNum: '2', thirdAnswerDen: '3', template: 'second', answerBtn: 'noAnswer'
			},
			// problem 7
			{ firstNum: '3', firstDen: '4', secondNum: '5', secondDen: '6', thirdNum: '2',thirdDen: '5', firstLCDNum: '45', secondLCDNum: '50', thirdLCDNum: '24', lcdDen: '60', firstAnswerNum: '2', firstAnswerDen: '5', secondAnswerNum: '3', secondAnswerDen: '4', thirdAnswerNum: '5', thirdAnswerDen: '6', template: 'second', answerBtn: 'noAnswer'
			},
			// problem 8
			{ firstNum: '7', firstDen: '8', secondNum: '1', secondDen: '3', thirdNum: '4',thirdDen: '4', firstLCDNum: '21', secondLCDNum: '8', thirdLCDNum: '24', lcdDen: '24', firstAnswerNum: '1', firstAnswerDen: '3', secondAnswerNum: '7', secondAnswerDen: '8', thirdAnswerNum: '4', thirdAnswerDen: '4', template: 'second', answerBtn: 'noAnswer'
			},
			// problem 9
			{ firstNum: '9', firstDen: '10', secondNum: '4', secondDen: '5', thirdNum: '5',thirdDen: '6', firstLCDNum: '54', secondLCDNum: '48', thirdLCDNum: '50', lcdDen: '60', firstAnswerNum: '4', firstAnswerDen: '5', secondAnswerNum: '5', secondAnswerDen: '6', thirdAnswerNum: '9', thirdAnswerDen: '10', template: 'second', answerBtn: 'noAnswer'
			},
			// problem 10
			{ firstNum: '23', firstDen: '40', secondNum: '3', secondDen: '4', thirdNum: '3',thirdDen: '5', firstLCDNum: '23', secondLCDNum: '30', thirdLCDNum: '24', lcdDen: '40', firstAnswerNum: '23', firstAnswerDen: '40', secondAnswerNum: '3', secondAnswerDen: '5', thirdAnswerNum: '3', thirdAnswerDen: '4', template: 'second', answerBtn: 'noAnswer'
			},
        ];

	return dataUtils.build(desc, template, data);
}]);



