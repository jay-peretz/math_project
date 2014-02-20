
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
											+'{\\frac{\\fracstr{$firstNum}}{\\fracstr{$firstDen}}}'
											+'{\\css{\\html{?}}{fakeButton}}'
											+'{\\frac{\\fracstr{$reduceNum}}{\\fracstr{$reduceDen}}}'
										+'}'
										+'{html{&nbsp;}}'
										+'{\\css{\\html{Answer:}}{help-answer-text}}'
										+'{html{&nbsp;}}'
										+'{\\css'
											+'{\\grp'
												+'{\\html{Therefore}}'
												+'{\\html{&nbsp;}}'
												+'{\\frac{\\fracstr{$firstNum}}{\\fracstr{$firstDen}}}'
												+'{\\sign{<}}'
												+'{\\frac{\\fracstr{$reduceNum}}{\\fracstr{$reduceDen}}}'
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
            { firstNum: '1', firstDen: '4', secondNum: '2', secondDen: '6', reduceNum: '1', reduceDen: '3', firstButton: 'T', secondButton: 'F', thirdButton: 'F', template: 'first', answerBtn: 'noAnswer'
			},
			{ firstNum: '1', firstDen: '2', secondNum: '2', secondDen: '3', thirdNum: '3',thirdDen: '5', firstLCDNum: '15', secondLCDNum: '20', thirdLCDNum: '18', lcdDen: '30', firstAnswerNum: '1', firstAnswerDen: '2', secondAnswerNum: '3', secondAnswerDen: '5', thirdAnswerNum: '2', thirdAnswerDen: '3', template: 'second', answerBtn: 'noAnswer'
			}
        ];

	return dataUtils.build(desc, template, data);
}]);



