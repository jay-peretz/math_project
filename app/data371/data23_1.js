/*global angular */

angular.module('mathSkills').service('data23_1', ['dataUtils', function (dataUtils) {
    var desc = {
			title: '23.1 Converting Units of Volume',
            path: '23.1-converting-units-of-Volume',
            children: []
        },
        template = {
            oneStep: {
                title: 'Converting Units of Volume',
                children: [{
                    title: 'Main Answer',
                    children: [{
						problem: '\\rowgrp'
									+'{\\html{$problemText}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp'
										+'{\\html{$initialAmount}}{\\image{23.1-Volume-Weight-Measure/$firstImage}}'
										+'{\\sign{&equals;}}'
										+'{\\html{?}}'
										+'{\\image{23.1-Volume-Weight-Measure/$secondImage}}'
									+'}',
                        answer: '\\grp'
									+'{\\input{$finalAnswer}}'
									+'{\\html{$unitsSecond}}'
									+'{$modalChart}',
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
									+'{\\html{$problemText}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp'
										+'{\\html{$initialAmount}}{\\image{23.1-Volume-Weight-Measure/$firstImage}}'
										+'{\\sign{&equals;}}'
										+'{\\html{?}}'
										+'{\\image{23.1-Volume-Weight-Measure/$secondImage}}'
									+'}',
                        answer: '\\pan{12}{11}'
									+'{\\rowgrp'
										+'{\\html{Write the given value as a fraction.}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\frac{\\grp{\\input{$numeratorStart}}{\\html{&nbsp;}}{\\select{$labelAnswer}{$labelSelect}}}{\\input{$denominatorStart}}}'
										+'}'
									+'}{well}',
                        controls: {
                            "checkAnswer": true,
                            "help": true,
							"modalButton": "\\html{Equivalence Chart}",
							"modalText": '$modalChart'
							
                        }
							   
					}, {
                        problem: '\\rowgrp'
									+'{\\html{$problemText}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp'
										+'{\\html{$initialAmount}}{\\image{23.1-Volume-Weight-Measure/$firstImage}}'
										+'{\\sign{&equals;}}'
										+'{\\html{?}}'
										+'{\\image{23.1-Volume-Weight-Measure/$secondImage}}'
									+'}',
                        answer: '\\pan{12}{11}'
									+'{\\rowgrp'
										+'{\\html{What is the fraction (that equals 1 whole) that you need to multiply by?}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\frac{\\html{$numeratorStart $unitsStart}}{\\html{$denominatorStart}}}'
											+'{\\sign{&times;}}'
											+'{\\frac{\\select{$firstNumAnswer}{$firstNumSelect}}'
											+'{\\select{$firstDenAnswer}{$firstDenSelect}}}'
										+'}'
									+'}{well}',
                        controls: {
                            "checkAnswer": true,
                            "help": '\\rowgrp'
							+'{\\html{The purpose of the fraction we multiply by is to cancel out the word "$firstWordCancel" that we don\'t want as a part of the answer.  The fraction with "$secondWordCancel" in the numerator and "$firstWordCancel" in the denominator allows us to cancel out "$firstWordCancel".}}'
							+'{\\html{&nbsp;}}'
							+'{\\grp'
								+'{\\frac{\\html{$numeratorStart $unitsStart}}{\\html{$denominatorStart}}}'
								+'{\\sign{&times;}}'
								+'{\\css{\\frac{\\html{$firstNumAnswer}}{\\html{$firstDenAnswer}}}{blue-text}}'
							+'}',
							"modalButton": "\\html{Equivalence Chart}",
							"modalText": '$modalChart'
							
                        }
                    }, {
                        problem: '\\rowgrp'
									+'{\\html{$problemText}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp'
										+'{\\frac{\\grp{\\html{$numeratorStart}}{\\image{23.1-Volume-Weight-Measure/$firstImage}}}{\\grp{\\css{\\html{&nbsp;}}{image-height}}{\\html{$denominatorStart}}}}'
										+'{\\sign{&times;}}'
										+'{\\frac{\\grp{\\html{$numeratorSecond}}{\\image{23.1-Volume-Weight-Measure/$secondImage}}}{\\grp{\\html{$denominatorSecond}}{\\image{23.1-Volume-Weight-Measure/$firstImage}}}}'
										+'{\\sign{&equals;}}{\\html{?}}{\\image{23.1-Volume-Weight-Measure/$secondImage}}'
									+'}',
                        answer: '\\pan{12}{11}'
									+'{\\rowgrp'
										+'{\\html{Multiply the fractions (remember to cancel out words):}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\frac{\\html{$numeratorStart $unitsStart}}{\\html{$denominatorStart}}}'
											+'{\\sign{&times;}}'
											+'{\\frac{\\html{$firstNumAnswer}}{\\html{$firstDenAnswer}}}'
											+'{\\sign{&equals;}}'
											+'{\\input{$finalAnswer}}'
											+'{\\html{$unitsSecond}}'
										+'}'
									+'}{well}',
                        controls: {
                            "checkAnswer": true,
                            "help": '\\rowgrp'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\frac{\\html{<span class=blue-text>$numeratorStart</span> <span class=line_through>$unitsStart</span>}}{\\html{<span class=blue-text>$denominatorStart</span>}}}'
											+'{\\sign{&times;}}'
											+'{\\frac{\\html{<span class=blue-text>$numeratorSecond</span> <span>$unitsSecond</span>}}{\\html{<span class=blue-text>$denominatorSecond</span> <span class=line_through>$unitsStart</span>}}}'
											+'{\\sign{&equals;}}'
											+'{\\html{<span class=blue-text>$helpFinalAnswer $unitsSecond</span>}}'
										+'}',
							"modalButton": "\\html{Equivalence Chart}",
							"modalText": '$modalChart'
							
                        }
                    }]
                }]
            },
			twoStep: {
                title: 'Converting Units of Volume',
                children: [{
                    title: 'Main Answer',
                    children: [{
						problem: '\\rowgrp'
									+'{\\html{$problemText}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp'
										+'{\\html{$initialAmount}}{\\image{23.1-Volume-Weight-Measure/$firstImage}}'
										+'{\\sign{&equals;}}'
										+'{\\html{?}}'
										+'{\\image{23.1-Volume-Weight-Measure/$thirdImage}}'
									+'}',
                        answer: '\\grp'
									+'{\\input{$finalAnswer}}'
									+'{\\html{$unitsThird}}'
									+'{$modalChart}',
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
									+'{\\html{$problemText}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp'
										+'{\\html{$initialAmount}}{\\image{23.1-Volume-Weight-Measure/$firstImage}}'
										+'{\\sign{&equals;}}'
										+'{\\html{?}}'
										+'{\\image{23.1-Volume-Weight-Measure/$thirdImage}}'
									+'}',
                        answer: '\\pan{12}{11}'
									+'{\\rowgrp'
										+'{\\html{Write the given value as a fraction. $descriptor}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\frac{\\grp{\\input{$numeratorStart}}{\\html{&nbsp;}}{\\select{$labelAnswer}{$labelSelect}}}{\\input{$denominatorStart}}}'
										+'}'
									+'}{well}',
                        controls: {
                            "checkAnswer": true,
                            "help": true,
							"modalButton": "\\html{Equivalence Chart}",
							"modalText": '$modalChart'
							
                        }
							   
					}, {
                        problem: '\\rowgrp'
									+'{\\html{$problemText}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp'
										+'{\\html{$initialAmount}}{\\image{23.1-Volume-Weight-Measure/$firstImage}}'
										+'{\\sign{&equals;}}'
										+'{\\html{?}}'
										+'{\\image{23.1-Volume-Weight-Measure/$thirdImage}}'
									+'}',
                        answer: '\\pan{12}{11}'
									+'{\\rowgrp'
										+'{\\html{What is the first fraction (that equals 1 whole) that you need to multiply by?}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\frac{\\html{$numeratorStart $unitsStart}}{\\html{$denominatorStart}}}'
											+'{\\sign{&times;}}'
											+'{\\frac{\\select{$firstNumAnswer}{$firstNumSelect}}'
											+'{\\select{$firstDenAnswer}{$firstDenSelect}}}'
										+'}'
									+'}{well}',
                        controls: {
                            "checkAnswer": true,
                            "help": '\\rowgrp'
							+'{\\html{The purpose of the first fraction we multiply by is to cancel out the word "$firstWordCancel" that we don\'t want as a part of the answer.  The fraction with "$secondWordCancel" in the numerator and "$firstWordCancel" in the denominator allows us to cancel out "$firstWordCancel".}}'
							+'{\\html{&nbsp;}}'
							+'{\\grp'
								+'{\\frac{\\html{$numeratorStart $unitsStart}}{\\html{$denominatorStart}}}'
								+'{\\sign{&times;}}'
								+'{\\css{\\frac{\\html{$firstNumAnswer}}{\\html{$firstDenAnswer}}}{blue-text}}'
							+'}',
							"modalButton": "\\html{Equivalence Chart}",
							"modalText": '$modalChart'
							
                        }
                    }, {
                        problem: '\\rowgrp'
									+'{\\html{$problemText}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp'
										+'{\\frac{\\grp{\\html{$numeratorStart}}{\\image{23.1-Volume-Weight-Measure/$firstImage}}}{\\grp{\\css{\\html{&nbsp;}}{image-height}}{\\html{$denominatorStart}}}}'
										+'{\\sign{&times;}}'
										+'{\\frac{\\grp{\\html{$numeratorSecond}}{\\image{23.1-Volume-Weight-Measure/$secondImage}}}{\\grp{\\html{$denominatorSecond}}{\\image{23.1-Volume-Weight-Measure/$firstImage}}}}'
										+'{\\sign{&equals;}}{\\html{?}}{\\image{23.1-Volume-Weight-Measure/$thirdImage}}}',
                        answer: '\\pan{12}{11}'
									+'{\\rowgrp'
										+'{\\html{What is the second fraction (that equals 1 whole) that you need to multiply by?}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\frac{\\html{$numeratorStart $unitsStart}}{\\html{$denominatorStart}}}'
											+'{\\sign{&times;}}'
											+'{\\frac{\\html{$firstNumAnswer}}{\\html{$firstDenAnswer}}}'
											+'{\\sign{&times;}}'
											+'{\\frac{\\select{$secondNumAnswer}{$firstNumSelect}}{\\select{$secondDenAnswer}{$firstDenSelect}}}'
										+'}'
									+'}{well}',
                        controls: {
                            "checkAnswer": true,
                            "help": '\\rowgrp'
										+'{\\html{The purpose of the second fraction we multiply by is to cancel out the word "$secondWordCancel" that we don\'t want as a part of the answer.  The fraction with "$thirdWordCancel" in the numerator and "$secondWordCancel" in the denominator allows us to cancel out "$secondWordCancel".}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\frac{\\html{$numeratorStart $unitsStart}}{\\html{$denominatorStart}}}'
											+'{\\sign{&times;}}'
											+'{\\frac{\\html{$firstNumAnswer}}{\\html{$firstDenAnswer}}}'
											+'{\\sign{&times;}}'
											+'{\\css{\\frac{\\html{$secondNumAnswer}}{\\html{$secondDenAnswer}}}{blue-text}}'
										+'}',
							"modalButton": "\\html{Equivalence Chart}",
							"modalText": '$modalChart'
							
                        }
                    }, {
                        problem: '\\rowgrp'
									+'{\\html{$problemText}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp'
										+'{\\frac{\\grp{\\html{$numeratorStart}}{\\image{23.1-Volume-Weight-Measure/$firstImage}}}{\\grp{\\css{\\html{&nbsp;}}{image-height}}{\\html{$denominatorStart}}}}'
										+'{\\sign{&times;}}'
										+'{\\frac{\\grp{\\html{$numeratorSecond}}{\\image{23.1-Volume-Weight-Measure/$secondImage}}}{\\grp{\\html{$denominatorSecond}}{\\image{23.1-Volume-Weight-Measure/$firstImage}}}}'
										+'{\\sign{&times;}}'
										+'{\\frac{\\grp{\\html{$numeratorThird}}{\\image{23.1-Volume-Weight-Measure/$thirdImage}}}{\\grp{\\html{$denominatorThird}}{\\image{23.1-Volume-Weight-Measure/$secondImage}}}}'
										+'{\\sign{&equals;}}{\\html{?}}{\\image{23.1-Volume-Weight-Measure/$thirdImage}}'
									+'}',
                        answer: '\\pan{12}{11}'
									+'{\\rowgrp'
										+'{\\html{Multiply the fractions (remember to cancel out words):}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\frac{\\html{$numeratorStart $unitsStart}}{\\html{$denominatorStart}}}'
											+'{\\sign{&times;}}'
											+'{\\frac{\\html{$firstNumAnswer}}{\\html{$firstDenAnswer}}}'
											+'{\\sign{&times;}}'
											+'{\\frac{\\html{$secondNumAnswer}}{\\html{$secondDenAnswer}}}'
											+'{\\sign{&equals;}}'
											+'{\\input{$finalAnswer}}'
											+'{\\html{$unitsThird}}'
										+'}'
									+'}{well}',
                        controls: {
                            "checkAnswer": true,
                            "help": '\\rowgrp'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\frac{\\html{<span class=blue-text>$numeratorStart</span> <span class=line_through>$unitsStart</span>}}{\\html{<span class=blue-text>$denominatorStart</span>}}}'
											+'{\\sign{&times;}}'
											+'{\\frac{\\html{<span class=blue-text>$numeratorSecond</span> <span class=line_through>$unitsSecond</span>}}{\\html{<span class=blue-text>$denominatorSecond</span> <span class=line_through>$unitsStart</span>}}}'
											+'{\\sign{&times;}}'
											+'{\\frac{\\html{<span class=blue-text>$numeratorThird $unitsThird</span>}}{\\html{<span class=blue-text>$denominatorThird</span> <span class=line_through>$unitsSecond</span>}}}'
											+'{\\sign{&equals;}}'
											+'{\\html{<span class=blue-text>$helpFinalAnswer $unitsThird</span>}}'
										+'}',
							"modalButton": "\\html{Equivalence Chart}",
							"modalText": '$modalChart'
							
                        }
                    }]
                }]
            },
			threeStep: {
                title: 'Converting Units of Volume',
                children: [{
                    title: 'Main Answer',
                    children: [{
						problem: '\\rowgrp'
									+'{\\html{$problemText}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp'
										+'{\\html{$initialAmount}}'
										+'{\\image{23.1-Volume-Weight-Measure/$firstImage}}'
										+'{\\sign{&equals;}}'
										+'{\\html{?}}'
										+'{\\image{23.1-Volume-Weight-Measure/$fourthImage}}'
									+'}',
                        answer: '\\grp'
									+'{\\input{$fourthAnswer}}'
									+'{\\html{$unitsFourth}}'
									+'{$modalChart}',
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
									+'{\\html{$problemText}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp'
										+'{\\html{$initialAmount}}{\\image{23.1-Volume-Weight-Measure/$firstImage}}'
										+'{\\sign{&equals;}}'
										+'{\\html{?}}'
										+'{\\image{23.1-Volume-Weight-Measure/$fourthImage}}'
									+'}',
                        answer: '\\pan{12}{11}'
									+'{\\rowgrp'
										+'{\\html{Write the given value as a fraction.}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\frac{\\grp{\\input{$numeratorStart}}{\\html{&nbsp;}}{\\select{$labelAnswer}{$labelSelect}}}{\\input{$denominatorStart}}}'
										+'}'
									+'}{well}',
                        controls: {
                            "checkAnswer": true,
                            "help": true,
							"modalButton": "\\html{Equivalence Chart}",
							"modalText": '$modalChart'
							
                        }
							   
					}, {
                        problem: '\\rowgrp'
									+'{\\html{$problemText}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp'
										+'{\\html{$initialAmount}}{\\image{23.1-Volume-Weight-Measure/$firstImage}}'
										+'{\\sign{&equals;}}'
										+'{\\html{?}}'
										+'{\\image{23.1-Volume-Weight-Measure/$fourthImage}}'
									+'}',
                        answer: '\\pan{12}{11}'
									+'{\\rowgrp'
										+'{\\html{What is the first fraction (that equals 1 whole) that you need to multiply by?}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\frac{\\html{$numeratorStart $unitsStart}}{\\html{$denominatorStart}}}'
											+'{\\sign{&times;}}'
											+'{\\frac{\\select{$firstNumAnswer}{$firstNumSelect}}'
											+'{\\select{$firstDenAnswer}{$firstDenSelect}}}'
										+'}'
									+'}{well}',
                        controls: {
                            "checkAnswer": true,
                            "help": '\\rowgrp'
							+'{\\html{The purpose of the first fraction we multiply by is to cancel out the word "$firstWordCancel" that we don\'t want as a part of the answer.  The fraction with "$secondWordCancel" in the numerator and "$firstWordCancel" in the denominator allows us to cancel out "$firstWordCancel".}}'
							+'{\\html{&nbsp;}}'
							+'{\\grp'
								+'{\\frac{\\html{$numeratorStart $unitsStart}}{\\html{$denominatorStart}}}'
								+'{\\sign{&times;}}'
								+'{\\css{\\frac{\\html{$firstNumAnswer}}{\\html{$firstDenAnswer}}}{blue-text}}'
							+'}',
							"modalButton": "\\html{Equivalence Chart}",
							"modalText": '$modalChart'
							
                        }
                    }, {
                        problem: '\\rowgrp'
									+'{\\html{$problemText}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp'
										+'{\\frac{\\grp{\\html{$numeratorStart}}{\\image{23.1-Volume-Weight-Measure/$firstImage}}}{\\grp{\\css{\\html{&nbsp;}}{image-height}}{\\html{$denominatorStart}}}}'
										+'{\\sign{&times;}}'
										+'{\\frac{\\grp{\\html{$numeratorSecond}}{\\image{23.1-Volume-Weight-Measure/$secondImage}}}{\\grp{\\html{$denominatorSecond}}{\\image{23.1-Volume-Weight-Measure/$firstImage}}}}'
										+'{\\sign{&equals;}}{\\html{?}}{\\image{23.1-Volume-Weight-Measure/$fourthImage}}}',
                        answer: '\\pan{12}{11}'
									+'{\\rowgrp'
										+'{\\html{What is the second fraction (that equals 1 whole) that you need to multiply by?}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\frac{\\html{$numeratorStart $unitsStart}}{\\html{$denominatorStart}}}'
											+'{\\sign{&times;}}'
											+'{\\frac{\\html{$firstNumAnswer}}{\\html{$firstDenAnswer}}}'
											+'{\\sign{&times;}}'
											+'{\\frac{\\select{$secondNumAnswer}{$firstNumSelect}}{\\select{$secondDenAnswer}{$firstDenSelect}}}'
										+'}'
									+'}{well}',
                        controls: {
                            "checkAnswer": true,
                            "help": '\\rowgrp'
										+'{\\html{The purpose of the second fraction we multiply by is to cancel out the word "$secondWordCancel" that we don\'t want as a part of the answer.  The fraction with "$thirdWordCancel" in the numerator and "$secondWordCancel" in the denominator allows us to cancel out "$secondWordCancel".}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\frac{\\html{$numeratorStart $unitsStart}}{\\html{$denominatorStart}}}'
											+'{\\sign{&times;}}'
											+'{\\frac{\\html{$firstNumAnswer}}{\\html{$firstDenAnswer}}}'
											+'{\\sign{&times;}}'
											+'{\\css{\\frac{\\html{$secondNumAnswer}}{\\html{$secondDenAnswer}}}{blue-text}}'
										+'}',
							"modalButton": "\\html{Equivalence Chart}",
							"modalText": '$modalChart'
							
                        }
                    }, {
                        problem: '\\rowgrp'
									+'{\\html{$problemText}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp'
										+'{\\frac{\\grp{\\html{$numeratorStart}}{\\image{23.1-Volume-Weight-Measure/$firstImage}}}{\\grp{\\css{\\html{&nbsp;}}{image-height}}{\\html{$denominatorStart}}}}'
										+'{\\sign{&times;}}'
										+'{\\frac{\\grp{\\html{$numeratorSecond}}{\\image{23.1-Volume-Weight-Measure/$secondImage}}}{\\grp{\\html{$denominatorSecond}}{\\image{23.1-Volume-Weight-Measure/$firstImage}}}}'
										+'{\\sign{&times;}}'
										+'{\\frac{\\grp{\\html{$numeratorThird}}{\\image{23.1-Volume-Weight-Measure/$thirdImage}}}{\\grp{\\html{$denominatorThird}}{\\image{23.1-Volume-Weight-Measure/$secondImage}}}}'
										+'{\\sign{&equals;}}'
										+'{\\html{?}}'
										+'{\\image{23.1-Volume-Weight-Measure/$fourthImage}}}',
                        answer: '\\pan{12}{11}'
									+'{\\rowgrp'
										+'{\\html{What is the third fraction (that equals 1 whole) that you need to multiply by?}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\frac{\\html{$numeratorStart $unitsStart}}{\\html{$denominatorStart}}}'
											+'{\\sign{&times;}}'
											+'{\\frac{\\html{$firstNumAnswer}}{\\html{$firstDenAnswer}}}'
											+'{\\sign{&times;}}'
											+'{\\frac{\\html{$$secondNumAnswer}}{\\html{$secondDenAnswer}}}'
											+'{\\sign{&times;}}'
											+'{\\frac{\\select{$thirdNumAnswer}{$firstNumSelect}}{\\select{$thirdDenAnswer}{$firstDenSelect}}}'	
										+'}'
									+'}{well}',
                        controls: {
                            "checkAnswer": true,
                            "help": '\\rowgrp'
										+'{\\html{The purpose of the third fraction we multiply by is to cancel out the word "$thirdWordCancel" that we don\'t want as a part of the answer.  The fraction with $fourthWordCancel in the numerator and "$thirdWordCancel" in the denominator allows us to cancel out "$thirdWordCancel".}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\frac{\\html{$numeratorStart $unitsStart}}{\\html{$denominatorStart}}}'
											+'{\\sign{&times;}}'
											+'{\\frac{\\html{$firstNumAnswer}}{\\html{$firstDenAnswer}}}'
											+'{\\sign{&times;}}'
											+'{\\frac{\\html{$secondNumAnswer}}{\\html{$secondDenAnswer}}}'
											+'{\\sign{&times;}}'
											+'{\\css{\\frac{\\html{$thirdNumAnswer}}{\\html{$thirdDenAnswer}}}{blue-text}}'
										+'}',
							"modalButton": "\\html{Equivalence Chart}",
							"modalText": '$modalChart'
							
                        }
                    }, {
                        problem: '\\rowgrp'
									+'{\\html{$problemText}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp'
										+'{\\frac{\\grp{\\html{$numeratorStart}}{\\image{23.1-Volume-Weight-Measure/$firstImage}}}{\\grp{\\css{\\html{&nbsp;}}{image-height}}{\\html{$denominatorStart}}}}'
										+'{\\sign{&times;}}'
										+'{\\frac{\\grp{\\html{$numeratorSecond}}{\\image{23.1-Volume-Weight-Measure/$secondImage}}}{\\grp{\\html{$denominatorSecond}}{\\image{23.1-Volume-Weight-Measure/$firstImage}}}}'
										+'{\\sign{&times;}}'
										+'{\\frac{\\grp{\\html{$numeratorThird}}{\\image{23.1-Volume-Weight-Measure/$thirdImage}}}{\\grp{\\html{$denominatorThird}}{\\image{23.1-Volume-Weight-Measure/$secondImage}}}}'
										+'{\\sign{&times;}}'
										+'{\\frac{\\grp{\\html{$numeratorFourth}}{\\image{23.1-Volume-Weight-Measure/$fourthImage}}}{\\grp{\\html{$denominatorFourth}}{\\image{23.1-Volume-Weight-Measure/$thirdImage}}}}'
										+'{\\sign{&equals;}}{\\html{?}}{\\image{23.1-Volume-Weight-Measure/$fourthImage}}'
									+'}',
                        answer: '\\pan{12}{11}'
									+'{\\rowgrp'
										+'{\\html{Multiply the fractions (remember to cancel out words):}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\frac{\\html{$numeratorStart $unitsStart}}{\\html{$denominatorStart}}}'
											+'{\\sign{&times;}}'
											+'{\\frac{\\html{$firstNumAnswer}}{\\html{$firstDenAnswer}}}'
											+'{\\sign{&times;}}'
											+'{\\frac{\\html{$secondNumAnswer}}{\\html{$secondDenAnswer}}}'
											+'{\\sign{&times;}}'
											+'{\\frac{\\html{$thirdNumAnswer}}{\\html{$thirdDenAnswer}}}'
											+'{\\sign{&equals;}}'
											+'{\\input{$fourthAnswer}}'
											+'{\\html{c}}'
										+'}'
									+'}{well}',
                        controls: {
                            "checkAnswer": true,
                            "help": '\\rowgrp'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\frac{\\html{<span class=blue-text>$numeratorStart</span> <span class=line_through>$unitsStart</span>}}{\\html{<span class=blue-text>$denominatorStart</span>}}}'
											+'{\\sign{&times;}}'
											+'{\\frac{\\html{<span class=blue-text>$numeratorSecond</span> <span class=line_through>$unitsSecond</span>}}{\\html{<span class=blue-text>$denominatorSecond</span> <span class=line_through>$unitsStart</span>}}}'
											+'{\\sign{&times;}}'
											+'{\\frac{\\html{<span class=blue-text>$numeratorThird</span> <span class=line_through>$unitsThird</span>}}{\\html{<span class=blue-text>$denominatorThird</span> <span class=line_through>$unitsSecond</span>}}}'
											+'{\\sign{&times;}}'
											+'{\\frac{\\html{<span class=blue-text>$numeratorFourth $unitsFourth</span>}}{\\html{<span class=blue-text>$denominatorFourth</span> <span class=line_through>$unitsThird</span>}}}'
											+'{\\sign{&equals;}}'
											+'{\\html{<span class=blue-text>$helpFinalAnswer $unitsFourth</span>}}'
										+'}',
							"modalButton": "\\html{Equivalence Chart}",
							"modalText": '$modalChart'
							
                        }
                    }]
                }]
            }
        },
        data = [
			{ // problem 1
				problemText: '4 miles is how many feet?',
				labelSelect: '[\\"in\\", \\"ft\\", \\"yd\\", \\"mi\\"]',
				labelAnswer: 'mi',
				firstNumSelect: '[\\"12 in\\", \\"3 ft\\", \\"1760 yd\\",  \\"1 mi\\"]',
				firstDenSelect: '[\\"1 in\\", \\"1 ft\\", \\"1 yd\\",  \\"1 mi\\"]',
				initialAmount: '4',
				numeratorStart: '4',
				denominatorStart: '1',
				numeratorSecond: '1760',
				denominatorSecond: '1',
				numeratorThird: '3',
				denominatorThird: '1',
				unitsStart: 'mi',
				unitsSecond: 'yd',
				unitsThird: 'ft',
				firstNumAnswer: '1760 yd',
				firstDenAnswer: '1 mi',
				secondNumAnswer: '3 ft',
				secondDenAnswer: '1 yd',
				finalAnswer: '21120',
				helpFinalAnswer: '21,120',
				firstWordCancel: 'mi',
				secondWordCancel: 'yd',
				thirdWordCancel: 'ft',
				firstImage: 'mile.png',
				secondImage: 'Yard_01_V2_48x67.png',
				thirdImage: 'Foot_01_V2_48x67.png',
				descriptor: '',
				modalChart: dataUtils.pre('\\html{<table class=equivalence-table><th colspan="3">Equivalence Table</th><tr><td>12 in</td><td>=</td><td>1 ft</td></tr><tr><td>3 ft</td><td>=</td><td>1 yd</td></tr><tr><td>1760 yd</td><td>=</td><td>1 mi</td></tr></table>}'),
				template: 'twoStep' 
			}
			,
			{ // problem 2
				problemText: '6 feet is how many inches?',
				labelSelect: '[\\"in\\", \\"ft\\", \\"yd\\", \\"mi\\"]',
				labelAnswer: 'ft',
				firstNumSelect: '[\\"12 in\\", \\"3 ft\\", \\"1760 yd\\",  \\"1 mi\\"]',
				firstDenSelect: '[\\"1 in\\", \\"1 ft\\", \\"1 yd\\",  \\"1 mi\\"]',
				initialAmount: '6',
				numeratorStart: '6',
				denominatorStart: '1',
				numeratorSecond: '12',
				denominatorSecond: '1',
				unitsStart: 'ft',
				unitsSecond: 'in',
				firstNumAnswer: '12 in',
				firstDenAnswer: '1 ft',
				finalAnswer: '72',
				helpFinalAnswer: '72',
				firstWordCancel: 'ft',
				secondWordCancel: 'in',
				firstImage: 'Foot_01_V2_48x67.png',
				secondImage: 'Inches_01_V2_48x67.png',
				modalChart: dataUtils.pre('\\html{<table class=equivalence-table><th colspan="3">Equivalence Table</th><tr><td>12 in</td><td>=</td><td>1 ft</td></tr><tr><td>3 ft</td><td>=</td><td>1 yd</td></tr><tr><td>1760 yd</td><td>=</td><td>1 mi</td></tr></table>}'),
				template: 'oneStep' 
			}
			,
			{ // problem 3
				problemText: '15 feet is how many yards?',
				labelSelect: '[\\"in\\", \\"ft\\", \\"yd\\", \\"mi\\"]',
				labelAnswer: 'ft',
				firstNumSelect: '[\\"1 in\\", \\"1 ft\\", \\"1 yd\\",  \\"1 mi\\"]',
				firstDenSelect: '[\\"12 in\\", \\"3 ft\\", \\"1760 yd\\",  \\"1 mi\\"]',
				initialAmount: '15',
				numeratorStart: '15',
				denominatorStart: '1',
				numeratorSecond: '1',
				denominatorSecond: '3',
				unitsStart: 'ft',
				unitsSecond: 'yd',
				firstNumAnswer: '1 yd',
				firstDenAnswer: '3 ft',
				finalAnswer: '5',
				helpFinalAnswer: '5',
				firstWordCancel: 'ft',
				secondWordCancel: 'yd',
				firstImage: 'Foot_01_V2_48x67.png',
				secondImage: 'Yard_01_V2_48x67.png',
				modalChart: dataUtils.pre('\\html{<table class=equivalence-table><th colspan="3">Equivalence Table</th><tr><td>12 in</td><td>=</td><td>1 ft</td></tr><tr><td>3 ft</td><td>=</td><td>1 yd</td></tr><tr><td>1760 yd</td><td>=</td><td>1 mi</td></tr></table>}'),
				template: 'oneStep' 
			}
			,
			{ // problem 4
				problemText: '48 inches is how many feet?',
				labelSelect: '[\\"in\\", \\"ft\\", \\"yd\\", \\"mi\\"]',
				labelAnswer: 'in',
				firstNumSelect: '[\\"1 in\\", \\"1 ft\\", \\"1 yd\\",  \\"1 mi\\"]',
				firstDenSelect: '[\\"12 in\\", \\"3 ft\\", \\"1760 yd\\",  \\"1 mi\\"]',
				initialAmount: '48',
				numeratorStart: '48',
				denominatorStart: '1',
				numeratorSecond: '1',
				denominatorSecond: '12',
				unitsStart: 'in',
				unitsSecond: 'ft',
				firstNumAnswer: '1 ft',
				firstDenAnswer: '12 in',
				finalAnswer: '4',
				helpFinalAnswer: '4',
				firstWordCancel: 'in',
				secondWordCancel: 'ft',
				firstImage: 'Inches_01_V2_48x67.png',
				secondImage: 'Foot_01_V2_48x67.png',
				modalChart: dataUtils.pre('\\html{<table class=equivalence-table><th colspan="3">Equivalence Table</th><tr><td>12 in</td><td>=</td><td>1 ft</td></tr><tr><td>3 ft</td><td>=</td><td>1 yd</td></tr><tr><td>1760 yd</td><td>=</td><td>1 mi</td></tr></table>}'),
				template: 'oneStep' 
			}
			,
			{ // problem 5
				problemText: '3 tons is how many pounds?',
				labelSelect: '[\\"oz\\", \\"lbs\\", \\"tons\\"]',
				labelAnswer: 'tons',
				firstNumSelect: '[\\"16 oz\\", \\"2000 lbs\\", \\"1 ton\\"]',
				firstDenSelect: '[\\"1 fl oz\\", \\"1 lbs\\", \\"1 ton\\"]',
				initialAmount: '3',
				numeratorStart: '3',
				denominatorStart: '1',
				numeratorSecond: '2000',
				denominatorSecond: '1',
				unitsStart: 'tons',
				unitsSecond: 'lbs',
				firstNumAnswer: '2000 lbs',
				firstDenAnswer: '1 ton',
				finalAnswer: '6000',
				helpFinalAnswer: '6,000',
				firstWordCancel: 'tons',
				secondWordCancel: 'pounds',
				firstImage: 'Ton_01_40x50.png',
				secondImage: 'Pound_02_40x60.png',
				modalChart: dataUtils.pre('\\html{<table class=equivalence-table><th colspan="3">Equivalence Table</th><tr><td>16 oz</td><td>=</td><td>1 lb</td></tr><tr><td>2000 lbs</td><td>=</td><td>1 ton</td></tr></table>}'),
				template: 'oneStep' 
			}
			,
			{ // problem 6
				problemText: '7 pounds is how many ounces?',
				labelSelect: '[\\"oz\\", \\"lbs\\", \\"tons\\"]',
				labelAnswer: 'lbs',
				firstNumSelect: '[\\"16 oz\\", \\"2000 lbs\\", \\"1 ton\\"]',
				firstDenSelect: '[\\"1 fl oz\\", \\"1 lbs\\", \\"1 ton\\"]',
				initialAmount: '7',
				numeratorStart: '7',
				denominatorStart: '1',
				numeratorSecond: '16',
				denominatorSecond: '1',
				unitsStart: 'lbs',
				unitsSecond: 'oz',
				firstNumAnswer: '16 oz',
				firstDenAnswer: '1 lbs',
				finalAnswer: '112',
				helpFinalAnswer: '112',
				firstWordCancel: 'pounds',
				secondWordCancel: 'ounces',
				firstImage: 'Pound_02_40x60.png',
				secondImage: 'Ounce_01_V2_Large_40x60.png',
				modalChart: dataUtils.pre('\\html{<table class=equivalence-table><th colspan="3">Equivalence Table</th><tr><td>16 oz</td><td>=</td><td>1 lb</td></tr><tr><td>2000 lbs</td><td>=</td><td>1 ton</td></tr></table>}'),
				template: 'oneStep' 
			}
			,
			{ // problem 7
				problemText: '9000 pounds is how many tons?',
				labelSelect: '[\\"oz\\", \\"lbs\\", \\"tons\\"]',
				labelAnswer: 'lbs',
				firstNumSelect: '[\\"1 fl oz\\", \\"1 lbs\\", \\"1 ton\\"]',
				firstDenSelect: '[\\"16 oz\\", \\"2000 lbs\\", \\"1 ton\\"]',
				initialAmount: '9000',
				numeratorStart: '9000',
				denominatorStart: '1',
				numeratorSecond: '1',
				denominatorSecond: '2000',
				unitsStart: 'lbs',
				unitsSecond: 'tons',
				firstNumAnswer: '1 ton',
				firstDenAnswer: '2000 lbs',
				finalAnswer: '4.5',
				helpFinalAnswer: '4.5',
				firstWordCancel: 'pounds',
				secondWordCancel: 'tons',
				firstImage: 'Pound_02_40x60.png',
				secondImage: 'Ton_01_40x50.png',
				modalChart: dataUtils.pre('\\html{<table class=equivalence-table><th colspan="3">Equivalence Table</th><tr><td>16 oz</td><td>=</td><td>1 lb</td></tr><tr><td>2000 lbs</td><td>=</td><td>1 ton</td></tr></table>}'),
				template: 'oneStep' 
			}
			,
			{ // problem 8
				problemText: '128 ounces is how many pounds?',
				labelSelect: '[\\"oz\\", \\"lbs\\", \\"tons\\"]',
				labelAnswer: 'oz',
				firstNumSelect: '[\\"1 fl oz\\", \\"1 lbs\\", \\"1 ton\\"]',
				firstDenSelect: '[\\"16 oz\\", \\"2000 lbs\\", \\"1 ton\\"]',
				initialAmount: '128',
				numeratorStart: '128',
				denominatorStart: '1',
				numeratorSecond: '1',
				denominatorSecond: '16',
				unitsStart: 'oz',
				unitsSecond: 'lbs',
				firstNumAnswer: '1 lbs',
				firstDenAnswer: '16 oz',
				finalAnswer: '8',
				helpFinalAnswer: '8',
				firstWordCancel: 'ounces',
				secondWordCancel: 'pounds',
				firstImage: 'Ounce_01_V2_Large_40x60.png',
				secondImage: 'Pound_02_40x60.png',
				modalChart: dataUtils.pre('\\html{<table class=equivalence-table><th colspan="3">Equivalence Table</th><tr><td>16 oz</td><td>=</td><td>1 lb</td></tr><tr><td>2000 lbs</td><td>=</td><td>1 ton</td></tr></table>}'),
				template: 'oneStep' 
			}
			,
			{ // problem 9
				problemText: '8 cups is how many pints?',
				labelSelect: '[\\"tsp\\", \\"tbs\\", \\"fl oz\\", \\"c\\", \\"pt\\", \\"qt\\", \\"gal\\"]',
				labelAnswer: 'c',
				firstNumSelect: '[\\"1 tbs\\", \\"1 fl oz\\", \\"1 c\\", \\"1 pt\\", \\"1 qt\\", \\"1 gal\\"]',
				firstDenSelect: '[\\"3 tsp\\", \\"2 tbs\\", \\"8 fl oz\\", \\"2 c\\", \\"2 pt\\", \\"4 qt\\", \\"1 gal\\"]',
				initialAmount: '8',
				numeratorStart: '8',
				denominatorStart: '1',
				numeratorSecond: '1',
				denominatorSecond: '2',
				unitsStart: 'c',
				unitsSecond: 'pts',
				firstNumAnswer: '1 pt',
				firstDenAnswer: '2 c',
				finalAnswer: '4',
				helpFinalAnswer: '4',
				firstWordCancel: 'cups',
				secondWordCancel: 'pints',
				firstImage: 'cup-02-50x60.png',
				secondImage: 'pint-01_50x70.png',
				modalChart: dataUtils.pre('\\html{<table class=equivalence-table><th colspan="3">Equivalence Table</th><tr><td>3 tsp</td><td>=</td><td>1 tbs</td></tr><tr><td>2 tbs</td><td>=</td><td>1 oz</td></tr><tr><td>8 oz</td><td>=</td><td>1 c</td></tr><tr><td>2 c</td><td>=</td><td>1 pt</td></tr><tr><td>2 pt</td><td>=</td><td>1 qt</td></tr><tr><td>4 qt</td><td>=</td><td>1 gal</td></tr></table>}'),
				template: 'oneStep' 
			}
			,
			{ // problem 10
				problemText: '12 teaspoons is how many tablespoons?',
				labelSelect: '[\\"tsp\\", \\"tbs\\", \\"fl oz\\", \\"c\\", \\"pt\\", \\"qt\\", \\"gal\\"]',
				labelAnswer: 'tsp',
				firstNumSelect: '[\\"1 tbs\\", \\"1 fl oz\\", \\"1 c\\", \\"1 pt\\", \\"1 qt\\", \\"1 gal\\"]',
				firstDenSelect: '[\\"3 tsp\\", \\"2 tbs\\", \\"8 fl oz\\", \\"2 c\\", \\"2 pt\\", \\"4 qt\\", \\"1 gal\\"]',
				initialAmount: '12',
				numeratorStart: '12',
				denominatorStart: '1',
				numeratorSecond: '1',
				denominatorSecond: '3',
				unitsStart: 'tsp',
				unitsSecond: 'tbs',
				firstNumAnswer: '1 tbs',
				firstDenAnswer: '3 tsp',
				finalAnswer: '4',
				helpFinalAnswer: '4',
				firstWordCancel: 'teaspoons',
				secondWordCancel: 'tablespoons',
				firstImage: 'TeaSpoon_01_46x65.png',
				secondImage: 'Tablepoon_TeaSpoon_01_46x65.png',
				modalChart: dataUtils.pre('\\html{<table class=equivalence-table><th colspan="3">Equivalence Table</th><tr><td>3 tsp</td><td>=</td><td>1 tbs</td></tr><tr><td>2 tbs</td><td>=</td><td>1 oz</td></tr><tr><td>8 oz</td><td>=</td><td>1 c</td></tr><tr><td>2 c</td><td>=</td><td>1 pt</td></tr><tr><td>2 pt</td><td>=</td><td>1 qt</td></tr><tr><td>4 qt</td><td>=</td><td>1 gal</td></tr></table>}'),
				template: 'oneStep' 
			}
			,
			{ // problem 11
				problemText: '5 gallons is how many quarts?',
				labelSelect: '[\\"tsp\\", \\"tbs\\", \\"fl oz\\", \\"c\\", \\"pt\\", \\"qt\\", \\"gal\\"]',
				labelAnswer: 'gal',
				firstNumSelect: '[\\"3 tsp\\", \\"2 tbs\\", \\"8 fl oz\\", \\"2 c\\", \\"2 pt\\", \\"4 qt\\", \\"1 gal\\"]',
				firstDenSelect: '[\\"1 tbs\\", \\"1 fl oz\\", \\"1 c\\", \\"1 pt\\", \\"1 qt\\", \\"1 gal\\"]',
				initialAmount: '5',
				numeratorStart: '5',
				denominatorStart: '1',
				numeratorSecond: '4',
				denominatorSecond: '1',
				unitsStart: 'gal',
				unitsSecond: 'qts',
				firstNumAnswer: '4 qt',
				firstDenAnswer: '1 gal',
				finalAnswer: '20',
				helpFinalAnswer: '20',
				firstWordCancel: 'gallons',
				secondWordCancel: 'quarts',
				firstImage: 'gallon-01-56x70.png',
				secondImage: 'quart-02-40x70.png',
				modalChart: dataUtils.pre('\\html{<table class=equivalence-table><th colspan="3">Equivalence Table</th><tr><td>3 tsp</td><td>=</td><td>1 tbs</td></tr><tr><td>2 tbs</td><td>=</td><td>1 oz</td></tr><tr><td>8 oz</td><td>=</td><td>1 c</td></tr><tr><td>2 c</td><td>=</td><td>1 pt</td></tr><tr><td>2 pt</td><td>=</td><td>1 qt</td></tr><tr><td>4 qt</td><td>=</td><td>1 gal</td></tr></table>}'),
				template: 'oneStep' 
			}
			,
			{ // problem 12
				problemText: '3 cups is how many fluid ounces?',
				labelSelect: '[\\"tsp\\", \\"tbs\\", \\"fl oz\\", \\"c\\", \\"pt\\", \\"qt\\", \\"gal\\"]',
				labelAnswer: 'c',
				firstNumSelect: '[\\"3 tsp\\", \\"2 tbs\\", \\"8 fl oz\\", \\"2 c\\", \\"2 pt\\", \\"4 qt\\", \\"1 gal\\"]',
				firstDenSelect: '[\\"1 tbs\\", \\"1 fl oz\\", \\"1 c\\", \\"1 pt\\", \\"1 qt\\", \\"1 gal\\"]',
				initialAmount: '3',
				numeratorStart: '3',
				denominatorStart: '1',
				numeratorSecond: '8',
				denominatorSecond: '1',
				unitsStart: 'c',
				unitsSecond: 'fl oz',
				firstNumAnswer: '8 fl oz',
				firstDenAnswer: '1 c',
				finalAnswer: '24',
				helpFinalAnswer: '24',
				firstWordCancel: 'cups',
				secondWordCancel: 'fluid ounces',
				firstImage: 'cup-02-50x60.png',
				secondImage: 'OZ_Shot_01-44x65.png',
				modalChart: dataUtils.pre('\\html{<table class=equivalence-table><th colspan="3">Equivalence Table</th><tr><td>3 tsp</td><td>=</td><td>1 tbs</td></tr><tr><td>2 tbs</td><td>=</td><td>1 oz</td></tr><tr><td>8 oz</td><td>=</td><td>1 c</td></tr><tr><td>2 c</td><td>=</td><td>1 pt</td></tr><tr><td>2 pt</td><td>=</td><td>1 qt</td></tr><tr><td>4 qt</td><td>=</td><td>1 gal</td></tr></table>}'),
				template: 'oneStep' 
			}
			,
			{ // problem 17
				problemText: '108 inches is how many yards?',
				labelSelect: '[\\"in\\", \\"ft\\", \\"yd\\", \\"mi\\"]',
				labelAnswer: 'in',
				firstNumSelect: '[\\"1 in\\", \\"1 ft\\", \\"1 yd\\",  \\"1 mi\\"]',
				firstDenSelect: '[\\"12 in\\", \\"3 ft\\", \\"1760 yd\\",  \\"1 mi\\"]',
				initialAmount: '108',
				numeratorStart: '108',
				denominatorStart: '1',
				numeratorSecond: '1',
				denominatorSecond: '12',
				numeratorThird: '1',
				denominatorThird: '3',
				unitsStart: 'in',
				unitsSecond: 'ft',
				unitsThird: 'yd',
				firstNumAnswer: '1 ft',
				firstDenAnswer: '12 in',
				secondNumAnswer: '1 yd',
				secondDenAnswer: '3 ft',
				finalAnswer: '3',
				helpFinalAnswer: '3',
				firstWordCancel: 'in',
				secondWordCancel: 'ft',
				thirdWordCancel: 'yd',
				firstImage: 'Inches_01_V2_48x67.png',
				secondImage: 'Foot_01_V2_48x67.png',
				thirdImage: 'Yard_01_V2_48x67.png',
				descriptor: '',
				modalChart: dataUtils.pre('\\html{<table class=equivalence-table><th colspan="3">Equivalence Table</th><tr><td>12 in</td><td>=</td><td>1 ft</td></tr><tr><td>3 ft</td><td>=</td><td>1 yd</td></tr><tr><td>1760 yd</td><td>=</td><td>1 mi</td></tr></table>}'),
				template: 'twoStep' 
			}
			,
			{ // problem 18
				problemText: '90 inches is how many yards?',
				labelSelect: '[\\"in\\", \\"ft\\", \\"yd\\", \\"mi\\"]',
				labelAnswer: 'in',
				firstNumSelect: '[\\"1 in\\", \\"1 ft\\", \\"1 yd\\",  \\"1 mi\\"]',
				firstDenSelect: '[\\"12 in\\", \\"3 ft\\", \\"1760 yd\\",  \\"1 mi\\"]',
				initialAmount: '90',
				numeratorStart: '90',
				denominatorStart: '1',
				numeratorSecond: '1',
				denominatorSecond: '12',
				numeratorThird: '1',
				denominatorThird: '3',
				unitsStart: 'in',
				unitsSecond: 'ft',
				unitsThird: 'yd',
				firstNumAnswer: '1 ft',
				firstDenAnswer: '12 in',
				secondNumAnswer: '1 yd',
				secondDenAnswer: '3 ft',
				finalAnswer: '2.5',
				helpFinalAnswer: '2.5',
				firstWordCancel: 'in',
				secondWordCancel: 'ft',
				thirdWordCancel: 'yd',
				firstImage: 'Inches_01_V2_48x67.png',
				secondImage: 'Foot_01_V2_48x67.png',
				thirdImage: 'Yard_01_V2_48x67.png',
				descriptor: '',
				modalChart: dataUtils.pre('\\html{<table class=equivalence-table><th colspan="3">Equivalence Table</th><tr><td>12 in</td><td>=</td><td>1 ft</td></tr><tr><td>3 ft</td><td>=</td><td>1 yd</td></tr><tr><td>1760 yd</td><td>=</td><td>1 mi</td></tr></table>}'),
				template: 'twoStep' 
			}
			,
			{ //problem 19
				problemText: '2 miles is how many inches?',
				labelSelect: '[\\"in\\", \\"ft\\", \\"yd\\", \\"mi\\"]',
				labelAnswer: 'mi',
				firstNumSelect: '[\\"12 in\\", \\"3 ft\\", \\"1760 yd\\",  \\"1 mi\\"]',
				firstDenSelect: '[\\"1 in\\", \\"1 ft\\", \\"1 yd\\",  \\"1 mi\\"]',
				initialAmount: '2',
				numeratorStart: '2',
				denominatorStart: '1',
				numeratorSecond: '1760',
				denominatorSecond: '1',
				numeratorThird: '3',
				denominatorThird: '1',
				numeratorFourth: '12',
				denominatorFourth: '1',
				unitsStart: 'mi',
				unitsSecond: 'yd',
				unitsThird: 'ft',
				unitsFourth: 'in',
				firstNumAnswer: '1760 yd',
				firstDenAnswer: '1 mi',
				secondNumAnswer: '3 ft',
				secondDenAnswer: '1 yd',
				thirdNumAnswer: '12 in',
				thirdDenAnswer: '1 ft',
				fourthAnswer: '126720',
				helpFinalAnswer: '126,720',
				firstWordCancel: 'mi',
				secondWordCancel: 'yd',
				thirdWordCancel: 'ft',
				fourthWordCancel: 'in',
				firstImage: 'mile.png',
				secondImage: 'Yard_01_V2_48x67.png',
				thirdImage: 'Foot_01_V2_48x67.png',
				fourthImage: 'Inches_01_V2_48x67.png',
				modalChart: dataUtils.pre('\\html{<table class=equivalence-table><th colspan="3">Equivalence Table</th><tr><td>12 in</td><td>=</td><td>1 ft</td></tr><tr><td>3 ft</td><td>=</td><td>1 yd</td></tr><tr><td>1760 yd</td><td>=</td><td>1 mi</td></tr></table>}'),
				template: 'threeStep' 
			},
			{ // problem 20
				problemText: '10 yards is how many inches?',
				labelSelect: '[\\"in\\", \\"ft\\", \\"yd\\", \\"mi\\"]',
				labelAnswer: 'yd',
				firstNumSelect: '[\\"12 in\\", \\"3 ft\\", \\"1760 yd\\",  \\"1 mi\\"]',
				firstDenSelect: '[\\"1 in\\", \\"1 ft\\", \\"1 yd\\",  \\"1 mi\\"]',
				initialAmount: '10',
				numeratorStart: '10',
				denominatorStart: '1',
				numeratorSecond: '3',
				denominatorSecond: '1',
				numeratorThird: '12',
				denominatorThird: '1',
				unitsStart: 'yd',
				unitsSecond: 'ft',
				unitsThird: 'in',
				firstNumAnswer: '3 ft',
				firstDenAnswer: '1 yd',
				secondNumAnswer: '12 in',
				secondDenAnswer: '1 ft',
				finalAnswer: '360',
				helpFinalAnswer: '360',
				firstWordCancel: 'yd',
				secondWordCancel: 'ft',
				thirdWordCancel: 'in',
				firstImage: 'Yard_01_V2_48x67.png',
				secondImage: 'Foot_01_V2_48x67.png',
				thirdImage: 'Inches_01_V2_48x67.png',
				descriptor: '',
				modalChart: dataUtils.pre('\\html{<table class=equivalence-table><th colspan="3">Equivalence Table</th><tr><td>12 in</td><td>=</td><td>1 ft</td></tr><tr><td>3 ft</td><td>=</td><td>1 yd</td></tr><tr><td>1760 yd</td><td>=</td><td>1 mi</td></tr></table>}'),
				template: 'twoStep' 
			}
			,
			{ // problem 21
				problemText: '1.5 tons is how many ounces?',
				labelSelect: '[\\"oz\\", \\"lbs\\", \\"tons\\"]',
				labelAnswer: 'tons',
				firstNumSelect: '[\\"16 oz\\", \\"2000 lbs\\", \\"1 ton\\"]',
				firstDenSelect: '[\\"1 fl oz\\", \\"1 lbs\\", \\"1 ton\\"]',
				initialAmount: '1.5',
				numeratorStart: '1.5',
				denominatorStart: '1',
				numeratorSecond: '2000',
				denominatorSecond: '1',
				numeratorThird: '16',
				denominatorThird: '1',
				unitsStart: 'tons',
				unitsSecond: 'lbs',
				unitsThird: 'oz',
				firstNumAnswer: '2000 lbs',
				firstDenAnswer: '1 ton',
				secondNumAnswer: '16 oz',
				secondDenAnswer: '1 lbs',
				finalAnswer: '48000',
				helpFinalAnswer: '48,000',
				firstWordCancel: 'tons',
				secondWordCancel: 'pounds',
				thirdWordCancel: 'ounces',
				firstImage: 'Ton_01_40x50.png',
				secondImage: 'Pound_02_40x60.png',
				thirdImage: 'Ounce_01_V2_Large_40x60.png',
				descriptor: '<br>Use \\"1.5\\" in decimal form.',
				modalChart: dataUtils.pre('\\html{<table class=equivalence-table><th colspan="3">Equivalence Table</th><tr><td>16 oz</td><td>=</td><td>1 lb</td></tr><tr><td>2000 lbs</td><td>=</td><td>1 ton</td></tr></table>}'),
				template: 'twoStep' 
			}
			,
			{ // problem 22
				problemText: '2 tons is how many ounces?',
				labelSelect: '[\\"oz\\", \\"lbs\\", \\"tons\\"]',
				labelAnswer: 'tons',
				firstNumSelect: '[\\"16 oz\\", \\"2000 lbs\\", \\"1 ton\\"]',
				firstDenSelect: '[\\"1 fl oz\\", \\"1 lbs\\", \\"1 ton\\"]',
				initialAmount: '2',
				numeratorStart: '2',
				denominatorStart: '1',
				numeratorSecond: '2000',
				denominatorSecond: '1',
				numeratorThird: '16',
				denominatorThird: '1',
				unitsStart: 'tons',
				unitsSecond: 'lbs',
				unitsThird: 'oz',
				firstNumAnswer: '2000 lbs',
				firstDenAnswer: '1 ton',
				secondNumAnswer: '16 oz',
				secondDenAnswer: '1 lbs',
				finalAnswer: '64000',
				helpFinalAnswer: '64,000',
				firstWordCancel: 'tons',
				secondWordCancel: 'pounds',
				thirdWordCancel: 'ounces',
				firstImage: 'Ton_01_40x50.png',
				secondImage: 'Pound_02_40x60.png',
				thirdImage: 'Ounce_01_V2_Large_40x60.png',
				descriptor: '',
				modalChart: dataUtils.pre('\\html{<table class=equivalence-table><th colspan="3">Equivalence Table</th><tr><td>16 oz</td><td>=</td><td>1 lb</td></tr><tr><td>2000 lbs</td><td>=</td><td>1 ton</td></tr></table>}'),
				template: 'twoStep' 
			},
			{ // problem 23
				problemText: '32,000 ounces is how many tons?',
				labelSelect: '[\\"oz\\", \\"lbs\\", \\"tons\\"]',
				labelAnswer: 'oz',
				firstNumSelect: '[\\"1 fl oz\\", \\"1 lbs\\", \\"1 ton\\"]',
				firstDenSelect: '[\\"16 oz\\", \\"2000 lbs\\", \\"1 ton\\"]',
				initialAmount: '32000',
				numeratorStart: '32000',
				denominatorStart: '1',
				numeratorSecond: '1',
				denominatorSecond: '16',
				numeratorThird: '1',
				denominatorThird: '2000',
				unitsStart: 'ounces',
				unitsSecond: 'lbs',
				unitsThird: 'tons',
				firstNumAnswer: '1 lbs',
				firstDenAnswer: '16 oz',
				secondNumAnswer: '1 ton',
				secondDenAnswer: '2000 lbs',
				finalAnswer: '1',
				helpFinalAnswer: '1',
				firstWordCancel: 'ounces',
				secondWordCancel: 'pounds',
				thirdWordCancel: 'tons',
				firstImage: 'Ounce_01_V2_Large_40x60.png',
				secondImage: 'Pound_02_40x60.png',
				thirdImage: 'Ton_01_40x50.png',
				descriptor: '',
				modalChart: dataUtils.pre('\\html{<table class=equivalence-table><th colspan="3">Equivalence Table</th><tr><td>16 oz</td><td>=</td><td>1 lb</td></tr><tr><td>2000 lbs</td><td>=</td><td>1 ton</td></tr></table>}'),
				template: 'twoStep' 
			}
			,
			{ // problem 24
				problemText: '40,000 ounces is how many tons?',
				labelSelect: '[\\"oz\\", \\"lbs\\", \\"tons\\"]',
				labelAnswer: 'oz',
				firstNumSelect: '[\\"1 fl oz\\", \\"1 lbs\\", \\"1 ton\\"]',
				firstDenSelect: '[\\"16 oz\\", \\"2000 lbs\\", \\"1 ton\\"]',
				initialAmount: '40000',
				numeratorStart: '40000',
				denominatorStart: '1',
				numeratorSecond: '1',
				denominatorSecond: '16',
				numeratorThird: '1',
				denominatorThird: '2000',
				unitsStart: 'ounces',
				unitsSecond: 'lbs',
				unitsThird: 'tons',
				firstNumAnswer: '1 lbs',
				firstDenAnswer: '16 oz',
				secondNumAnswer: '1 ton',
				secondDenAnswer: '2000 lbs',
				finalAnswer: '1.25',
				helpFinalAnswer: '1.25',
				firstWordCancel: 'ounces',
				secondWordCancel: 'pounds',
				thirdWordCancel: 'tons',
				firstImage: 'Ounce_01_V2_Large_40x60.png',
				secondImage: 'Pound_02_40x60.png',
				thirdImage: 'Ton_01_40x50.png',
				descriptor: '',
				modalChart: dataUtils.pre('\\html{<table class=equivalence-table><th colspan="3">Equivalence Table</th><tr><td>16 oz</td><td>=</td><td>1 lb</td></tr><tr><td>2000 lbs</td><td>=</td><td>1 ton</td></tr></table>}'),
				template: 'twoStep' 
			}
			,
            { //problem 29
				problemText: '3 gallons is how many cups?',
				labelSelect: '[\\"tsp\\", \\"tbs\\", \\"fl oz\\", \\"c\\", \\"pt\\", \\"qt\\", \\"gal\\"]',
				labelAnswer: 'gal',
				firstNumSelect: '[\\"3 tsp\\", \\"2 tbs\\", \\"8 fl oz\\", \\"2 c\\", \\"2 pt\\", \\"4 qt\\", \\"1 gal\\"]',
				firstDenSelect: '[\\"1 tbs\\", \\"1 fl oz\\", \\"1 c\\", \\"1 pt\\", \\"1 qt\\", \\"1 gal\\"]',
				initialAmount: '3',
				numeratorStart: '3',
				denominatorStart: '1',
				numeratorSecond: '4',
				denominatorSecond: '1',
				numeratorThird: '2',
				denominatorThird: '1',
				numeratorFourth: '2',
				denominatorFourth: '1',
				unitsStart: 'gal',
				unitsSecond: 'qt',
				unitsThird: 'pt',
				unitsFourth: 'c',
				firstNumAnswer: '4 qt',
				firstDenAnswer: '1 gal',
				secondNumAnswer: '2 pt',
				secondDenAnswer: '1 qt',
				thirdNumAnswer: '2 c',
				thirdDenAnswer: '1 pt',
				fourthAnswer: '48',
				helpFinalAnswer: '48',
				firstWordCancel: 'gallons',
				secondWordCancel: 'quarts',
				thirdWordCancel: 'pints',
				fourthWordCancel: 'cups',
				firstImage: 'gallon-01-56x70.png',
				secondImage: 'quart-02-40x70.png',
				thirdImage: 'pint-01_50x70.png',
				fourthImage: 'cup-02-50x60.png',
				modalChart: dataUtils.pre('\\html{<table class=equivalence-table><th colspan="3">Equivalence Table</th><tr><td>3 tsp</td><td>=</td><td>1 tbs</td></tr><tr><td>2 tbs</td><td>=</td><td>1 oz</td></tr><tr><td>8 oz</td><td>=</td><td>1 c</td></tr><tr><td>2 c</td><td>=</td><td>1 pt</td></tr><tr><td>2 pt</td><td>=</td><td>1 qt</td></tr><tr><td>4 qt</td><td>=</td><td>1 gal</td></tr></table>}'),
				template: 'threeStep' 
			},
			{ // problem 30
				problemText: '<span class=bigger><sup>1</sup>/<sub>2</sub></span> gallon is how many cups?',
				labelSelect: '[\\"tsp\\", \\"tbs\\", \\"fl oz\\", \\"c\\", \\"pt\\", \\"qt\\", \\"gal\\"]',
				labelAnswer: 'gal',
				firstNumSelect: '[\\"3 tsp\\", \\"2 tbs\\", \\"8 fl oz\\", \\"2 c\\", \\"2 pt\\", \\"4 qt\\", \\"1 gal\\"]',
				firstDenSelect: '[\\"1 tbs\\", \\"1 fl oz\\", \\"1 c\\", \\"1 pt\\", \\"1 qt\\", \\"1 gal\\"]',
				initialAmount: '<sup>1</sup>/<sub>2</sub>',
				numeratorStart: '1',
				denominatorStart: '2',
				numeratorSecond: '4',
				denominatorSecond: '1',
				numeratorThird: '2',
				denominatorThird: '1',
				numeratorFourth: '2',
				denominatorFourth: '1',
				unitsStart: 'gal',
				unitsSecond: 'qt',
				unitsThird: 'pt',
				unitsFourth: 'c',
				firstNumAnswer: '4 qt',
				firstDenAnswer: '1 gal',
				secondNumAnswer: '2 pt',
				secondDenAnswer: '1 qt',
				thirdNumAnswer: '2 c',
				thirdDenAnswer: '1 pt',
				fourthAnswer: '8',
				helpFinalAnswer: '8',
				firstWordCancel: 'gallons',
				secondWordCancel: 'quarts',
				thirdWordCancel: 'pints',
				fourthWordCancel: 'cups',
				firstImage: 'gallon-01-56x70.png',
				secondImage: 'quart-02-40x70.png',
				thirdImage: 'pint-01_50x70.png',
				fourthImage: 'cup-02-50x60.png',
				modalChart: dataUtils.pre('\\html{<table class=equivalence-table><th colspan="3">Equivalence Table</th><tr><td>3 tsp</td><td>=</td><td>1 tbs</td></tr><tr><td>2 tbs</td><td>=</td><td>1 oz</td></tr><tr><td>8 oz</td><td>=</td><td>1 c</td></tr><tr><td>2 c</td><td>=</td><td>1 pt</td></tr><tr><td>2 pt</td><td>=</td><td>1 qt</td></tr><tr><td>4 qt</td><td>=</td><td>1 gal</td></tr></table>}'),
				template: 'threeStep' 
			},
			{ // problem 31
				problemText: '2 quarts is how many cups?',
				labelSelect: '[\\"tsp\\", \\"tbs\\", \\"fl oz\\", \\"c\\", \\"pt\\", \\"qt\\", \\"gal\\"]',
				labelAnswer: 'qt',
				firstNumSelect: '[\\"3 tsp\\", \\"2 tbs\\", \\"8 fl oz\\", \\"2 c\\", \\"2 pt\\", \\"4 qt\\", \\"1 gal\\"]',
				firstDenSelect: '[\\"1 tbs\\", \\"1 fl oz\\", \\"1 c\\", \\"1 pt\\", \\"1 qt\\", \\"1 gal\\"]',
				initialAmount: '2',
				numeratorStart: '2',
				denominatorStart: '1',
				numeratorSecond: '2',
				denominatorSecond: '1',
				numeratorThird: '2',
				denominatorThird: '1',
				unitsStart: 'qt',
				unitsSecond: 'pt',
				unitsThird: 'c',
				firstNumAnswer: '2 pt',
				firstDenAnswer: '1 qt',
				secondNumAnswer: '2 c',
				secondDenAnswer: '1 pt',
				finalAnswer: '8',
				helpFinalAnswer: '8',
				firstWordCancel: 'quarts',
				secondWordCancel: 'pints',
				thirdWordCancel: 'cups',
				firstImage: 'quart-02-40x70.png',
				secondImage: 'pint-01_50x70.png',
				thirdImage: 'cup-02-50x60.png',
				descriptor: '',
				modalChart: dataUtils.pre('\\html{<table class=equivalence-table><th colspan="3">Equivalence Table</th><tr><td>3 tsp</td><td>=</td><td>1 tbs</td></tr><tr><td>2 tbs</td><td>=</td><td>1 oz</td></tr><tr><td>8 oz</td><td>=</td><td>1 c</td></tr><tr><td>2 c</td><td>=</td><td>1 pt</td></tr><tr><td>2 pt</td><td>=</td><td>1 qt</td></tr><tr><td>4 qt</td><td>=</td><td>1 gal</td></tr></table>}'),
				template: 'twoStep' 
			}
			,
			{ // problem 32
				problemText: '<span class=bigger><sup>1</sup>/<sub>2</sub></span> quart is how many cups?',
				labelSelect: '[\\"tsp\\", \\"tbs\\", \\"fl oz\\", \\"c\\", \\"pt\\", \\"qt\\", \\"gal\\"]',
				labelAnswer: 'qt',
				firstNumSelect: '[\\"3 tsp\\", \\"2 tbs\\", \\"8 fl oz\\", \\"2 c\\", \\"2 pt\\", \\"4 qt\\", \\"1 gal\\"]',
				firstDenSelect: '[\\"1 tbs\\", \\"1 fl oz\\", \\"1 c\\", \\"1 pt\\", \\"1 qt\\", \\"1 gal\\"]',
				initialAmount: '<sup>1</sup>/<sub>2</sub>',
				numeratorStart: '1',
				denominatorStart: '2',
				numeratorSecond: '2',
				denominatorSecond: '1',
				numeratorThird: '2',
				denominatorThird: '1',
				unitsStart: 'qt',
				unitsSecond: 'pt',
				unitsThird: 'c',
				firstNumAnswer: '2 pt',
				firstDenAnswer: '1 qt',
				secondNumAnswer: '2 c',
				secondDenAnswer: '1 pt',
				finalAnswer: '2',
				helpFinalAnswer: '2',
				firstWordCancel: 'quarts',
				secondWordCancel: 'pints',
				thirdWordCancel: 'cups',
				firstImage: 'quart-02-40x70.png',
				secondImage: 'pint-01_50x70.png',
				thirdImage: 'cup-02-50x60.png',
				descriptor: '',
				modalChart: dataUtils.pre('\\html{<table class=equivalence-table><th colspan="3">Equivalence Table</th><tr><td>3 tsp</td><td>=</td><td>1 tbs</td></tr><tr><td>2 tbs</td><td>=</td><td>1 oz</td></tr><tr><td>8 oz</td><td>=</td><td>1 c</td></tr><tr><td>2 c</td><td>=</td><td>1 pt</td></tr><tr><td>2 pt</td><td>=</td><td>1 qt</td></tr><tr><td>4 qt</td><td>=</td><td>1 gal</td></tr></table>}'),
				template: 'twoStep' 
			}
        ];

    return dataUtils.build(desc, template, data);
}]);
