/*global angular */

angular.module('mathSkills').service('data26_1', ['dataUtils', function (dataUtils) {
    var desc = {
			title: '26.1 Converting English and Metric Measurements',
            path: '26.1-converting-english-and-metric-measurements',
            children: []
        },
        template = {
            oneStep: {
                title: 'Converting English and Metric Measurements',
                children: [{
                    title: 'Main Answer',
                    children: [{
						problem: '\\rowgrp'
									+'{\\html{$problemText}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp'
										+'{\\html{$initialAmount}}'
										+'{\\html{$unitsStart}}'
										/*+'{\\image{23.1-Volume-Weight-Measure/$firstImage}}'*/
										+'{\\sign{&equals;}}'
										+'{\\html{?}}'
										+'{\\html{$unitsSecond}}'
										/*+'{\\image{23.1-Volume-Weight-Measure/$secondImage}}'*/
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
										+'{\\html{$initialAmount}}'
										+'{\\html{$unitsStart}}'
										/*+'{\\image{23.1-Volume-Weight-Measure/$firstImage}}'*/
										+'{\\sign{&equals;}}'
										+'{\\html{?}}'
										+'{\\html{$unitsSecond}}'
										/*+'{\\image{23.1-Volume-Weight-Measure/$secondImage}}'*/
									+'}',
                        answer: '\\pan{12}{11}'
									+'{\\rowgrp'
										+'{\\html{Write the given value as a fraction.$descriptor}}'
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
									+'{\\html{$problemText}}',
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
									+'{\\html{$problemText}}',
                        answer: '\\pan{12}{11}'
									+'{\\rowgrp'
										+'{\\html{Multiply the fractions (remember to cancel out words)$answerRoundingText}}'
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
										+'}'
										+'{$roundingText}',
							"modalButton": "\\html{Equivalence Chart}",
							"modalText": '$modalChart'
							
                        }
                    }]
                }]
            },
			twoStep: {
                title: 'Converting English and Metric Measurements',
                children: [{
                    title: 'Main Answer',
                    children: [{
						problem: '\\rowgrp'
									+'{\\html{$problemText}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp'
										+'{\\html{$initialAmount}}'
										+'{\\html{$unitsStart}}'
										/*+'{\\image{23.1-Volume-Weight-Measure/$firstImage}}'*/
										+'{\\sign{&equals;}}'
										+'{\\html{?}}'
										+'{\\html{$unitsThird}}'
										/*+'{\\image{23.1-Volume-Weight-Measure/$thirdImage}}'*/
									+'}',
                        answer: '\\css'
									+'{\\grp'
										+'{\\input{$finalAnswer}}'
										+'{\\html{$unitsThird}}'
										+'{$modalChart}'
									+'}'
									+'{pre-multiple-tables}',
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
										+'{\\html{$initialAmount}}'
										+'{\\html{$unitsStart}}'
										/*+'{\\image{23.1-Volume-Weight-Measure/$firstImage}}'*/
										+'{\\sign{&equals;}}'
										+'{\\html{?}}'
										+'{\\html{$unitsThird}}'
										/*+'{\\image{23.1-Volume-Weight-Measure/$thirdImage}}'*/
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
									+'{\\html{$problemText}}',
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
									+'{\\html{$problemText}}',
                        answer: '\\pan{12}{11}'
									+'{\\rowgrp'
										+'{\\html{What is the second fraction (that equals 1 whole) that you need to multiply by?}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\frac{\\html{$numeratorStart $unitsStart}}{\\html{$denominatorStart}}}'
											+'{\\sign{&times;}}'
											+'{\\frac{\\html{$firstNumAnswer}}{\\html{$firstDenAnswer}}}'
											+'{\\sign{&times;}}'
											+'{\\frac{\\select{$secondNumAnswer}{$secondNumSelect}}{\\select{$secondDenAnswer}{$secondDenSelect}}}'
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
									+'{\\html{$problemText}}',
                        answer: '\\pan{12}{11}'
									+'{\\rowgrp'
										+'{\\html{Multiply the fractions (remember to cancel out words)$answerRoundingText}}'
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
										+'}'
										+'{$roundingText}',
							"modalButton": "\\html{Equivalence Chart}",
							"modalText": '$modalChart'
							
                        }
                    }]
                }]
            }/*,
			threeStep: {
                title: 'Converting English and Metric Measurements',
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
											+'{\\html{$unitsFourth}}'
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
            }*/
        },
        data = [
			{ // problem 1
				problemText: '5 miles is how many kilometers?',
				labelSelect: '[\\"miles\\", \\"kilometers\\", \\"hours\\"]',
				labelAnswer: 'miles',
				firstNumSelect: '[\\"1.61 km\\", \\"1 mile\\"]',
				firstDenSelect: '[\\"1.61 km\\", \\"1 mile\\", \\"1 km\\"]',
				initialAmount: '5',
				numeratorStart: '5',
				denominatorStart: '1',
				numeratorSecond: '1.61',
				denominatorSecond: '1',
				unitsStart: 'mi',
				unitsSecond: 'km',
				firstNumAnswer: '1.61 km',
				firstDenAnswer: '1 mile',
				finalAnswer: '8.05',
				helpFinalAnswer: '8.05',
				firstWordCancel: 'miles',
				secondWordCancel: 'kilometers',
				answerRoundingText: ':',
				roundingText: '',
				descriptor: '',
				firstImage: '',
				secondImage: '',
				descriptor: '',
				modalChart: dataUtils.pre('\\html{<table class=equivalence-table><th colspan="3">Equivalence Table</th><tr><td>1 mi</td><td>=</td><td>1.61 km</td></tr><tr><td>1 in</td><td>=</td><td>2.54 cm</td></tr><tr><td>1 lb</td><td>=</td><td>454 g</td></tr><tr><td>1.06 qt</td><td>=</td><td>1 L</td></tr></table>}'),
				template: 'oneStep' 
			}
			,
			{ // problem 2
				problemText: '4 miles is how many kilometers?',
				labelSelect: '[\\"miles\\", \\"kilometers\\", \\"hours\\"]',
				labelAnswer: 'miles',
				firstNumSelect: '[\\"1.61 km\\", \\"1 mile\\"]',
				firstDenSelect: '[\\"1.61 km\\", \\"1 mile\\", \\"1 km\\"]',
				initialAmount: '4',
				numeratorStart: '4',
				denominatorStart: '1',
				numeratorSecond: '1.61',
				denominatorSecond: '1',
				unitsStart: 'mi',
				unitsSecond: 'km',
				firstNumAnswer: '1.61 km',
				firstDenAnswer: '1 mile',
				finalAnswer: '6.44',
				helpFinalAnswer: '6.44',
				firstWordCancel: 'miles',
				secondWordCancel: 'kilometers',
				answerRoundingText: ':',
				roundingText: '',
				descriptor: '',
				firstImage: '',
				secondImage: '',
				descriptor: '',
				modalChart: dataUtils.pre('\\html{<table class=equivalence-table><th colspan="3">Equivalence Table</th><tr><td>1 mi</td><td>=</td><td>1.61 km</td></tr><tr><td>1 in</td><td>=</td><td>2.54 cm</td></tr><tr><td>1 lb</td><td>=</td><td>454 g</td></tr><tr><td>1.06 qt</td><td>=</td><td>1 L</td></tr></table>}'),
				template: 'oneStep' 
			}
			,
			{ // problem 3
				problemText: '3.5 pounds is how many grams?',
				labelSelect: '[\\"pounds\\", \\"grams\\", \\"hours\\"]',
				labelAnswer: 'pounds',
				firstNumSelect: '[\\"454 g\\", \\"1 lb\\"]',
				firstDenSelect: '[\\"454 g\\", \\"1 lb\\", \\"1 g\\"]',
				initialAmount: '3.5',
				numeratorStart: '3.5',
				denominatorStart: '1',
				numeratorSecond: '454',
				denominatorSecond: '1',
				unitsStart: 'lb',
				unitsSecond: 'g',
				firstNumAnswer: '454 g',
				firstDenAnswer: '1 lb',
				finalAnswer: '1589',
				helpFinalAnswer: '1589',
				firstWordCancel: 'pounds',
				secondWordCancel: 'grams',
				answerRoundingText: ':',
				roundingText: '',
				descriptor: '',
				firstImage: '',
				secondImage: '',
				modalChart: dataUtils.pre('\\html{<table class=equivalence-table><th colspan="3">Equivalence Table</th><tr><td>1 mi</td><td>=</td><td>1.61 km</td></tr><tr><td>1 in</td><td>=</td><td>2.54 cm</td></tr><tr><td>1 lb</td><td>=</td><td>454 g</td></tr><tr><td>1.06 qt</td><td>=</td><td>1 L</td></tr></table>}'),
				template: 'oneStep' 
			}
			,
			{ // problem 4
				problemText: '0.5 pounds is how many grams?',
				labelSelect: '[\\"pounds\\", \\"grams\\", \\"hours\\"]',
				labelAnswer: 'pounds',
				firstNumSelect: '[\\"454 g\\", \\"1 lb\\"]',
				firstDenSelect: '[\\"454 g\\", \\"1 lb\\", \\"1 g\\"]',
				initialAmount: '0.5',
				numeratorStart: '0.5',
				denominatorStart: '1',
				numeratorSecond: '454',
				denominatorSecond: '1',
				unitsStart: 'lb',
				unitsSecond: 'g',
				firstNumAnswer: '454 g',
				firstDenAnswer: '1 lb',
				finalAnswer: '227',
				helpFinalAnswer: '227',
				firstWordCancel: 'pounds',
				secondWordCancel: 'grams',
				answerRoundingText: ':',
				roundingText: '',
				descriptor: '',
				firstImage: '',
				secondImage: '',
				modalChart: dataUtils.pre('\\html{<table class=equivalence-table><th colspan="3">Equivalence Table</th><tr><td>1 mi</td><td>=</td><td>1.61 km</td></tr><tr><td>1 in</td><td>=</td><td>2.54 cm</td></tr><tr><td>1 lb</td><td>=</td><td>454 g</td></tr><tr><td>1.06 qt</td><td>=</td><td>1 L</td></tr></table>}'),
				template: 'oneStep' 
			}
			,
			{ // problem 5
				problemText: '12 quarts is how many liters? Round answer to the nearest tenth of a liter.',
				labelSelect: '[\\"liters\\", \\"quarts\\", \\"gallons\\"]',
				labelAnswer: 'quarts',
				firstNumSelect: '[\\"1.06 qt\\", \\"1 L\\", \\"1 gal\\"]',
				firstDenSelect: '[\\"1.06 qt\\", \\"1 L\\", \\"1 gal\\"]',
				initialAmount: '12',
				numeratorStart: '12',
				denominatorStart: '1',
				numeratorSecond: '1',
				denominatorSecond: '1.06',
				unitsStart: 'qt',
				unitsSecond: 'L',
				firstNumAnswer: '1 L',
				firstDenAnswer: '1.06 qt',
				finalAnswer: '11.3',
				helpFinalAnswer: '11.320...',
				firstWordCancel: 'qt',
				secondWordCancel: 'L',
				answerRoundingText: ';<br>round answer to the nearest tenth of a liter:',
				roundingText: dataUtils.pre(
									'\\rowgrp'
											+'{\\html{&nbsp;}}'
											+'{\\str{Round answer to the nearest tenth of a liter:}}'
											+'{\\html{&nbsp;}}'
											+'{css'
												+'{\\grp'
													+'{\\str{Answer: &nbsp;$$finalAnswer $$unitsSecond}}'
												+'}'
												+'{help-answer-text}'
											+'}'
											+'{\\html{&nbsp;}}'
						),
				descriptor: '',
				firstImage: '',
				secondImage: '',
				modalChart: dataUtils.pre('\\html{<table class=equivalence-table><th colspan="3">Equivalence Table</th><tr><td>1 mi</td><td>=</td><td>1.61 km</td></tr><tr><td>1 in</td><td>=</td><td>2.54 cm</td></tr><tr><td>1 lb</td><td>=</td><td>454 g</td></tr><tr><td>1.06 qt</td><td>=</td><td>1 L</td></tr></table>}'),
				template: 'oneStep' 
			}
			,
			{ // problem 6
				problemText: '3 quarts is how many liters? Round answer to the nearest tenth of a liter.',
				labelSelect: '[\\"liters\\", \\"quarts\\", \\"gallons\\"]',
				labelAnswer: 'quarts',
				firstNumSelect: '[\\"1.06 qt\\", \\"1 L\\", \\"1 gal\\"]',
				firstDenSelect: '[\\"1.06 qt\\", \\"1 L\\", \\"1 gal\\"]',
				initialAmount: '3',
				numeratorStart: '3',
				denominatorStart: '1',
				numeratorSecond: '1',
				denominatorSecond: '1.06',
				unitsStart: 'qt',
				unitsSecond: 'L',
				firstNumAnswer: '1 L',
				firstDenAnswer: '1.06 qt',
				finalAnswer: '2.8',
				helpFinalAnswer: '2.830...',
				firstWordCancel: 'qt',
				secondWordCancel: 'L',
				answerRoundingText: ';<br>round answer to the nearest tenth of a liter:',
				roundingText: dataUtils.pre(
									'\\rowgrp'
											+'{\\html{&nbsp;}}'
											+'{\\str{Round answer to the nearest tenth of a liter:}}'
											+'{\\html{&nbsp;}}'
											+'{css'
												+'{\\grp'
													+'{\\str{Answer: &nbsp;$$finalAnswer $$unitsSecond}}'
												+'}'
												+'{help-answer-text}'
											+'}'
											+'{\\html{&nbsp;}}'
						),
				descriptor: '',
				firstImage: '',
				secondImage: '',
				modalChart: dataUtils.pre('\\html{<table class=equivalence-table><th colspan="3">Equivalence Table</th><tr><td>1 mi</td><td>=</td><td>1.61 km</td></tr><tr><td>1 in</td><td>=</td><td>2.54 cm</td></tr><tr><td>1 lb</td><td>=</td><td>454 g</td></tr><tr><td>1.06 qt</td><td>=</td><td>1 L</td></tr></table>}'),
				template: 'oneStep' 
			}
			,
			{ // problem 7
				problemText: '1000 grams is how many pounds? Round answer to the nearest tenth of a pound.',
				labelSelect: '[\\"pounds\\", \\"grams\\", \\"ounces\\"]',
				labelAnswer: 'grams',
				firstNumSelect: '[\\"454 g\\", \\"1 lb\\", \\"1 g\\"]',
				firstDenSelect: '[\\"454 g\\", \\"1 lb\\", \\"1 g\\"]',
				initialAmount: '1000',
				numeratorStart: '1000',
				denominatorStart: '1',
				numeratorSecond: '1',
				denominatorSecond: '454',
				unitsStart: 'g',
				unitsSecond: 'lb',
				firstNumAnswer: '1 lb',
				firstDenAnswer: '454 g',
				finalAnswer: '2.2',
				helpFinalAnswer: '2.202...',
				firstWordCancel: 'grams',
				secondWordCancel: 'pounds',
				answerRoundingText: ';<br>round answer to the nearest tenth of a pound:',
				roundingText: dataUtils.pre(
									'\\rowgrp'
											+'{\\html{&nbsp;}}'
											+'{\\str{Round answer to the nearest tenth of a pound:}}'
											+'{\\html{&nbsp;}}'
											+'{css'
												+'{\\grp'
													+'{\\str{Answer: &nbsp;$$finalAnswer $$unitsSecond}}'
												+'}'
												+'{help-answer-text}'
											+'}'
											+'{\\html{&nbsp;}}'
						),
				descriptor: '',
				firstImage: '',
				secondImage: '',
				modalChart: dataUtils.pre('\\html{<table class=equivalence-table><th colspan="3">Equivalence Table</th><tr><td>1 mi</td><td>=</td><td>1.61 km</td></tr><tr><td>1 in</td><td>=</td><td>2.54 cm</td></tr><tr><td>1 lb</td><td>=</td><td>454 g</td></tr><tr><td>1.06 qt</td><td>=</td><td>1 L</td></tr></table>}'),
				template: 'oneStep' 
			}
			,
			{ // problem 8
				problemText: '750 grams is how many pounds? Round answer to the nearest tenth of a pound.',
				labelSelect: '[\\"pounds\\", \\"grams\\", \\"ounces\\"]',
				labelAnswer: 'grams',
				firstNumSelect: '[\\"454 g\\", \\"1 lb\\", \\"1 g\\"]',
				firstDenSelect: '[\\"454 g\\", \\"1 lb\\", \\"1 g\\"]',
				initialAmount: '750',
				numeratorStart: '750',
				denominatorStart: '1',
				numeratorSecond: '1',
				denominatorSecond: '454',
				unitsStart: 'g',
				unitsSecond: 'lb',
				firstNumAnswer: '1 lb',
				firstDenAnswer: '454 g',
				finalAnswer: '1.7',
				helpFinalAnswer: '1.651...',
				firstWordCancel: 'grams',
				secondWordCancel: 'pounds',
				answerRoundingText: ';<br>round answer to the nearest tenth of a pound:',
				roundingText: dataUtils.pre(
									'\\rowgrp'
											+'{\\html{&nbsp;}}'
											+'{\\str{Round answer to the nearest tenth of a pound:}}'
											+'{\\html{&nbsp;}}'
											+'{css'
												+'{\\grp'
													+'{\\str{Answer: &nbsp;$$finalAnswer $$unitsSecond}}'
												+'}'
												+'{help-answer-text}'
											+'}'
											+'{\\html{&nbsp;}}'
						),
				descriptor: '',
				firstImage: '',
				secondImage: '',
				modalChart: dataUtils.pre('\\html{<table class=equivalence-table><th colspan="3">Equivalence Table</th><tr><td>1 mi</td><td>=</td><td>1.61 km</td></tr><tr><td>1 in</td><td>=</td><td>2.54 cm</td></tr><tr><td>1 lb</td><td>=</td><td>454 g</td></tr><tr><td>1.06 qt</td><td>=</td><td>1 L</td></tr></table>}'),
				template: 'oneStep' 
			}
			,
			{ // problem 9
				problemText: '10 liters is how many quarts?',
				labelSelect: '[\\"liters\\", \\"quarts\\", \\"gallons\\"]',
				labelAnswer: 'liters',
				firstNumSelect: '[\\"1.06 qt\\", \\"1 L\\", \\"1 gal\\"]',
				firstDenSelect: '[\\"1.06 qt\\", \\"1 L\\", \\"1 gal\\"]',
				initialAmount: '10',
				numeratorStart: '10',
				denominatorStart: '1',
				numeratorSecond: '1.06',
				denominatorSecond: '1',
				unitsStart: 'L',
				unitsSecond: 'qt',
				firstNumAnswer: '1.06 qt',
				firstDenAnswer: '1 L',
				finalAnswer: '10.6',
				helpFinalAnswer: '10.6',
				firstWordCancel: 'liters',
				secondWordCancel: 'quarts',
				answerRoundingText: ':',
				roundingText: '',
				descriptor: '',
				firstImage: '',
				secondImage: '',
				modalChart: dataUtils.pre('\\html{<table class=equivalence-table><th colspan="3">Equivalence Table</th><tr><td>1 mi</td><td>=</td><td>1.61 km</td></tr><tr><td>1 in</td><td>=</td><td>2.54 cm</td></tr><tr><td>1 lb</td><td>=</td><td>454 g</td></tr><tr><td>1.06 qt</td><td>=</td><td>1 L</td></tr></table>}'),
				template: 'oneStep'
			}
			,
			{ // problem 10
				problemText: '65 liters is how many quarts?',
				labelSelect: '[\\"liters\\", \\"quarts\\", \\"gallons\\"]',
				labelAnswer: 'liters',
				firstNumSelect: '[\\"1.06 qt\\", \\"1 L\\", \\"1 gal\\"]',
				firstDenSelect: '[\\"1.06 qt\\", \\"1 L\\", \\"1 gal\\"]',
				initialAmount: '65',
				numeratorStart: '65',
				denominatorStart: '1',
				numeratorSecond: '1.06',
				denominatorSecond: '1',
				unitsStart: 'L',
				unitsSecond: 'qt',
				firstNumAnswer: '1.06 qt',
				firstDenAnswer: '1 L',
				finalAnswer: '68.9',
				helpFinalAnswer: '68.9',
				firstWordCancel: 'liters',
				secondWordCancel: 'quarts',
				answerRoundingText: ':',
				roundingText: '',
				descriptor: '',
				firstImage: '',
				secondImage: '',
				modalChart: dataUtils.pre('\\html{<table class=equivalence-table><th colspan="3">Equivalence Table</th><tr><td>1 mi</td><td>=</td><td>1.61 km</td></tr><tr><td>1 in</td><td>=</td><td>2.54 cm</td></tr><tr><td>1 lb</td><td>=</td><td>454 g</td></tr><tr><td>1.06 qt</td><td>=</td><td>1 L</td></tr></table>}'),
				template: 'oneStep'
			}
			,
			{ // problem 11
				problemText: '200 kilometers is how many miles? Round answer to the nearest whole mile.',
				labelSelect: '[\\"miles\\", \\"kilometers\\", \\"hours\\"]',
				labelAnswer: 'kilometers',
				firstNumSelect: '[\\"1.61 km\\", \\"1 mile\\", \\"1 km\\"]',
				firstDenSelect: '[\\"1.61 km\\", \\"1 mile\\"]',
				initialAmount: '200',
				numeratorStart: '200',
				denominatorStart: '1',
				numeratorSecond: '1',
				denominatorSecond: '1.61',
				unitsStart: 'km',
				unitsSecond: 'mi',
				firstNumAnswer: '1 mile',
				firstDenAnswer: '1.61 km',
				finalAnswer: '124',
				helpFinalAnswer: '124.223...',
				firstWordCancel: 'kilometers',
				secondWordCancel: 'miles',
				answerRoundingText: ';<br>round answer to the mile:',
				roundingText: dataUtils.pre(
									'\\rowgrp'
											+'{\\html{&nbsp;}}'
											+'{\\str{Round answer to the mile:}}'
											+'{\\html{&nbsp;}}'
											+'{css'
												+'{\\grp'
													+'{\\str{Answer: &nbsp;$$finalAnswer $$unitsSecond}}'
												+'}'
												+'{help-answer-text}'
											+'}'
											+'{\\html{&nbsp;}}'
						),
				descriptor: '',
				firstImage: '',
				secondImage: '',
				modalChart: dataUtils.pre('\\html{<table class=equivalence-table><th colspan="3">Equivalence Table</th><tr><td>1 mi</td><td>=</td><td>1.61 km</td></tr><tr><td>1 in</td><td>=</td><td>2.54 cm</td></tr><tr><td>1 lb</td><td>=</td><td>454 g</td></tr><tr><td>1.06 qt</td><td>=</td><td>1 L</td></tr></table>}'),
				template: 'oneStep' 
			}
			,
			{ // problem 12
				problemText: '1500 kilometers is how many miles? Round answer to the nearest whole mile.',
				labelSelect: '[\\"miles\\", \\"kilometers\\", \\"hours\\"]',
				labelAnswer: 'kilometers',
				firstNumSelect: '[\\"1.61 km\\", \\"1 mile\\", \\"1 km\\"]',
				firstDenSelect: '[\\"1.61 km\\", \\"1 mile\\"]',
				initialAmount: '1500',
				numeratorStart: '1500',
				denominatorStart: '1',
				numeratorSecond: '1',
				denominatorSecond: '1.61',
				unitsStart: 'km',
				unitsSecond: 'mi',
				firstNumAnswer: '1 mile',
				firstDenAnswer: '1.61 km',
				finalAnswer: '932',
				helpFinalAnswer: '931.667...',
				firstWordCancel: 'kilometers',
				secondWordCancel: 'miles',
				answerRoundingText: ';<br>round answer to the mile:',
				roundingText: dataUtils.pre(
									'\\rowgrp'
											+'{\\html{&nbsp;}}'
											+'{\\str{Round answer to the mile:}}'
											+'{\\html{&nbsp;}}'
											+'{css'
												+'{\\grp'
													+'{\\str{Answer: &nbsp;$$finalAnswer $$unitsSecond}}'
												+'}'
												+'{help-answer-text}'
											+'}'
											+'{\\html{&nbsp;}}'
						),
				descriptor: '',
				firstImage: '',
				secondImage: '',
				modalChart: dataUtils.pre('\\html{<table class=equivalence-table><th colspan="3">Equivalence Table</th><tr><td>1 mi</td><td>=</td><td>1.61 km</td></tr><tr><td>1 in</td><td>=</td><td>2.54 cm</td></tr><tr><td>1 lb</td><td>=</td><td>454 g</td></tr><tr><td>1.06 qt</td><td>=</td><td>1 L</td></tr></table>}'),
				template: 'oneStep' 
			}
			,
			{ // problem 13
				problemText: '15 gallons is how many liters? Round answer to the nearest tenth of a liter.',
				labelSelect: '[\\"liters\\", \\"quarts\\", \\"gallons\\"]',
				labelAnswer: 'gallons',
				firstNumSelect: '[\\"1 L\\", \\"4 qt\\", \\"1 gal\\"]',
				firstDenSelect: '[\\"1 L\\", \\"1.06 qt\\", \\"1 gal\\"]',
				initialAmount: '15',
				numeratorStart: '15',
				denominatorStart: '1',
				numeratorSecond: '4',
				denominatorSecond: '1',
				numeratorThird: '1',
				denominatorThird: '1.06',
				unitsStart: 'gal',
				unitsSecond: 'qt',
				unitsThird: 'L',
				firstNumAnswer: '4 qt',
				firstDenAnswer: '1 gal',
				secondNumSelect: '[\\"1 L\\", \\"4 qt\\", \\"1 gal\\"]',
				secondDenSelect: '[\\"1 L\\", \\"1.06 qt\\", \\"1 gal\\"]',
				secondNumAnswer: '1 L',
				secondDenAnswer: '1.06 qt',
				finalAnswer: '56.6',
				helpFinalAnswer: '56.603...',
				firstWordCancel: 'gallons',
				secondWordCancel: 'quarts',
				thirdWordCancel: 'liters',
				answerRoundingText: ';<br>round answer to the nearest tenth of a liter:',
				roundingText: dataUtils.pre(
									'\\rowgrp'
											+'{\\html{&nbsp;}}'
											+'{\\str{Round answer to the nearest tenth of a liter:}}'
											+'{\\html{&nbsp;}}'
											+'{css'
												+'{\\grp'
													+'{\\str{Answer: &nbsp;$$finalAnswer $$unitsThird}}'
												+'}'
												+'{help-answer-text}'
											+'}'
											+'{\\html{&nbsp;}}'
						),
				firstImage: '',
				secondImage: '',
				thirdImage: '',
				descriptor: '',
				modalChart: dataUtils.pre('\\html{<table class=equivalence-table><th colspan="3">Equivalence Table</th><tr><td>1 mi</td><td>=</td><td>1.61 km</td></tr><tr><td>1 in</td><td>=</td><td>2.54 cm</td></tr><tr><td>1 lb</td><td>=</td><td>454 g</td></tr><tr style="border-bottom:0px;"><td>1.06 qt</td><td>=</td><td>1 L</td></tr><tr style="border-bottom:0px;"><td style="padding:0em .2em;">&nbsp;</td><td style="padding:0em .2em;">&nbsp;</td><td style="padding:0em .2em;">&nbsp;</td></tr><tr><td>1 gal</td><td>=</td><td>4 qt</td></tr><tr><td>16 oz</td><td>=</td><td>1 lb</td></tr><tr><td>1 ft</td><td>=</td><td>12 in</td></tr></table>}'),
				template: 'twoStep' 
			}
			,
			{ // problem 14
				problemText: '1.2 gallons is how many liters? Round answer to the nearest tenth of a liter.',
				labelSelect: '[\\"liters\\", \\"quarts\\", \\"gallons\\"]',
				labelAnswer: 'gallons',
				firstNumSelect: '[\\"1 L\\", \\"4 qt\\", \\"1 gal\\"]',
				firstDenSelect: '[\\"1 L\\", \\"1.06 qt\\", \\"1 gal\\"]',
				initialAmount: '1.2',
				numeratorStart: '1.2',
				denominatorStart: '1',
				numeratorSecond: '4',
				denominatorSecond: '1',
				numeratorThird: '1',
				denominatorThird: '1.06',
				unitsStart: 'gal',
				unitsSecond: 'qt',
				unitsThird: 'L',
				firstNumAnswer: '4 qt',
				firstDenAnswer: '1 gal',
				secondNumSelect: '[\\"1 L\\", \\"4 qt\\", \\"1 gal\\"]',
				secondDenSelect: '[\\"1 L\\", \\"1.06 qt\\", \\"1 gal\\"]',
				secondNumAnswer: '1 L',
				secondDenAnswer: '1.06 qt',
				finalAnswer: '4.5',
				helpFinalAnswer: '4.528...',
				firstWordCancel: 'gallons',
				secondWordCancel: 'quarts',
				thirdWordCancel: 'liters',
				answerRoundingText: ';<br>round answer to the nearest tenth of a liter:',
				roundingText: dataUtils.pre(
									'\\rowgrp'
											+'{\\html{&nbsp;}}'
											+'{\\str{Round answer to the nearest tenth of a liter:}}'
											+'{\\html{&nbsp;}}'
											+'{css'
												+'{\\grp'
													+'{\\str{Answer: &nbsp;$$finalAnswer $$unitsThird}}'
												+'}'
												+'{help-answer-text}'
											+'}'
											+'{\\html{&nbsp;}}'
						),
				firstImage: '',
				secondImage: '',
				thirdImage: '',
				descriptor: '',
				modalChart: dataUtils.pre('\\html{<table class=equivalence-table><th colspan="3">Equivalence Table</th><tr><td>1 mi</td><td>=</td><td>1.61 km</td></tr><tr><td>1 in</td><td>=</td><td>2.54 cm</td></tr><tr><td>1 lb</td><td>=</td><td>454 g</td></tr><tr style="border-bottom:0px;"><td>1.06 qt</td><td>=</td><td>1 L</td></tr><tr style="border-bottom:0px;"><td style="padding:0em .2em;">&nbsp;</td><td style="padding:0em .2em;">&nbsp;</td><td style="padding:0em .2em;">&nbsp;</td></tr><tr><td>1 gal</td><td>=</td><td>4 qt</td></tr><tr><td>16 oz</td><td>=</td><td>1 lb</td></tr><tr><td>1 ft</td><td>=</td><td>12 in</td></tr></table>}'),
				template: 'twoStep' 
			}
			,
			{ // problem 15
				problemText: '80 ounces is how many grams?',
				labelSelect: '[\\"grams\\", \\"pounds\\", \\"ounces\\"]',
				labelAnswer: 'ounces',
				firstNumSelect: '[\\"1 lb\\", \\"1 g\\"]',
				firstDenSelect: '[\\"16 oz\\", \\"1 lb\\", \\"454 g\\"]',
				initialAmount: '80',
				numeratorStart: '80',
				denominatorStart: '1',
				numeratorSecond: '1',
				denominatorSecond: '16',
				numeratorThird: '454',
				denominatorThird: '1',
				unitsStart: 'oz',
				unitsSecond: 'lb',
				unitsThird: 'g',
				firstNumAnswer: '1 lb',
				firstDenAnswer: '16 oz',
				secondNumSelect: '[\\"1 lb\\", \\"1 g\\", \\"454 g\\"]',
				secondDenSelect: '[\\"16 oz\\", \\"1 lb\\", \\"454 g\\"]',
				secondNumAnswer: '454 g',
				secondDenAnswer: '1 lb',
				finalAnswer: '2270',
				helpFinalAnswer: '2270',
				firstWordCancel: 'ounces',
				secondWordCancel: 'pounds',
				thirdWordCancel: 'grams',
				answerRoundingText: ':',
				roundingText: '',
				firstImage: '',
				secondImage: '',
				thirdImage: '',
				descriptor: '',
				modalChart: dataUtils.pre('\\html{<table class=equivalence-table><th colspan="3">Equivalence Table</th><tr><td>1 mi</td><td>=</td><td>1.61 km</td></tr><tr><td>1 in</td><td>=</td><td>2.54 cm</td></tr><tr><td>1 lb</td><td>=</td><td>454 g</td></tr><tr style="border-bottom:0px;"><td>1.06 qt</td><td>=</td><td>1 L</td></tr><tr style="border-bottom:0px;"><td style="padding:0em .2em;">&nbsp;</td><td style="padding:0em .2em;">&nbsp;</td><td style="padding:0em .2em;">&nbsp;</td></tr><tr><td>1 gal</td><td>=</td><td>4 qt</td></tr><tr><td>16 oz</td><td>=</td><td>1 lb</td></tr><tr><td>1 ft</td><td>=</td><td>12 in</td></tr></table>}'),
				template: 'twoStep' 
			}
			,
			{ // problem 16
				problemText: '4 ounces is how many grams?',
				labelSelect: '[\\"grams\\", \\"pounds\\", \\"ounces\\"]',
				labelAnswer: 'ounces',
				firstNumSelect: '[\\"1 lb\\", \\"1 g\\"]',
				firstDenSelect: '[\\"16 oz\\", \\"1 lb\\", \\"454 g\\"]',
				initialAmount: '4',
				numeratorStart: '4',
				denominatorStart: '1',
				numeratorSecond: '1',
				denominatorSecond: '16',
				numeratorThird: '454',
				denominatorThird: '1',
				unitsStart: 'oz',
				unitsSecond: 'lb',
				unitsThird: 'g',
				firstNumAnswer: '1 lb',
				firstDenAnswer: '16 oz',
				secondNumSelect: '[\\"1 lb\\", \\"1 g\\", \\"454 g\\"]',
				secondDenSelect: '[\\"16 oz\\", \\"1 lb\\", \\"454 g\\"]',
				secondNumAnswer: '454 g',
				secondDenAnswer: '1 lb',
				finalAnswer: '113.5',
				helpFinalAnswer: '113.5',
				firstWordCancel: 'ounces',
				secondWordCancel: 'pounds',
				thirdWordCancel: 'grams',
				answerRoundingText: '',
				roundingText: '',
				firstImage: '',
				secondImage: '',
				thirdImage: '',
				descriptor: '',
				modalChart: dataUtils.pre('\\html{<table class=equivalence-table><th colspan="3">Equivalence Table</th><tr><td>1 mi</td><td>=</td><td>1.61 km</td></tr><tr><td>1 in</td><td>=</td><td>2.54 cm</td></tr><tr><td>1 lb</td><td>=</td><td>454 g</td></tr><tr style="border-bottom:0px;"><td>1.06 qt</td><td>=</td><td>1 L</td></tr><tr style="border-bottom:0px;"><td style="padding:0em .2em;">&nbsp;</td><td style="padding:0em .2em;">&nbsp;</td><td style="padding:0em .2em;">&nbsp;</td></tr><tr><td>1 gal</td><td>=</td><td>4 qt</td></tr><tr><td>16 oz</td><td>=</td><td>1 lb</td></tr><tr><td>1 ft</td><td>=</td><td>12 in</td></tr></table>}'),
				template: 'twoStep' 
			}
			,
			{ // problem 17
				problemText: '20 feet is how many centimeters?',
				labelSelect: '[\\"feet\\", \\"inches\\", \\"centimeters\\"]',
				labelAnswer: 'feet',
				firstNumSelect: '[\\"1 ft\\", \\"2.54 cm\\", \\"12 in\\"]',
				firstDenSelect: '[\\"1 ft\\", \\"1 cm\\", \\"1 in\\"]',
				initialAmount: '20',
				numeratorStart: '20',
				denominatorStart: '1',
				numeratorSecond: '12',
				denominatorSecond: '1',
				numeratorThird: '2.54',
				denominatorThird: '1',
				unitsStart: 'ft',
				unitsSecond: 'in',
				unitsThird: 'cm',
				firstNumAnswer: '12 in',
				firstDenAnswer: '1 ft',
				secondNumSelect: '[\\"1 ft\\", \\"2.54 cm\\", \\"12 in\\"]',
				secondDenSelect: '[\\"1 ft\\", \\"1 cm\\", \\"1 in\\"]',
				secondNumAnswer: '2.54 cm',
				secondDenAnswer: '1 in',
				finalAnswer: '609.6',
				helpFinalAnswer: '609.6',
				firstWordCancel: 'feet',
				secondWordCancel: 'inches',
				thirdWordCancel: 'centimeters',
				answerRoundingText: '',
				roundingText: '',
				firstImage: '',
				secondImage: '',
				thirdImage: '',
				descriptor: '',
				modalChart: dataUtils.pre('\\html{<table class=equivalence-table><th colspan="3">Equivalence Table</th><tr><td>1 mi</td><td>=</td><td>1.61 km</td></tr><tr><td>1 in</td><td>=</td><td>2.54 cm</td></tr><tr><td>1 lb</td><td>=</td><td>454 g</td></tr><tr style="border-bottom:0px;"><td>1.06 qt</td><td>=</td><td>1 L</td></tr><tr style="border-bottom:0px;"><td style="padding:0em .2em;">&nbsp;</td><td style="padding:0em .2em;">&nbsp;</td><td style="padding:0em .2em;">&nbsp;</td></tr><tr><td>1 gal</td><td>=</td><td>4 qt</td></tr><tr><td>16 oz</td><td>=</td><td>1 lb</td></tr><tr><td>1 ft</td><td>=</td><td>12 in</td></tr></table>}'),
				template: 'twoStep' 
			}
			,
			{ // problem 18
				problemText: '6.5 feet is how many centimeters? Round the answer to the nearest whole centimeter.',
				labelSelect: '[\\"feet\\", \\"inches\\", \\"centimeters\\"]',
				labelAnswer: 'feet',
				firstNumSelect: '[\\"1 ft\\", \\"2.54 cm\\", \\"12 in\\"]',
				firstDenSelect: '[\\"1 ft\\", \\"1 cm\\", \\"1 in\\"]',
				initialAmount: '6.5',
				numeratorStart: '6.5',
				denominatorStart: '1',
				numeratorSecond: '12',
				denominatorSecond: '1',
				numeratorThird: '2.54',
				denominatorThird: '1',
				unitsStart: 'ft',
				unitsSecond: 'in',
				unitsThird: 'cm',
				firstNumAnswer: '12 in',
				firstDenAnswer: '1 ft',
				secondNumSelect: '[\\"1 ft\\", \\"2.54 cm\\", \\"12 in\\"]',
				secondDenSelect: '[\\"1 ft\\", \\"1 cm\\", \\"1 in\\"]',
				secondNumAnswer: '2.54 cm',
				secondDenAnswer: '1 in',
				finalAnswer: '198',
				helpFinalAnswer: '198.12',
				firstWordCancel: 'feet',
				secondWordCancel: 'inches',
				thirdWordCancel: 'centimeters',
				answerRoundingText: ';<br>round the answer to the nearest whole centimeter:',
				roundingText: dataUtils.pre(
									'\\rowgrp'
											+'{\\html{&nbsp;}}'
											+'{\\str{Round the answer to the nearest whole centimeter:}}'
											+'{\\html{&nbsp;}}'
											+'{css'
												+'{\\grp'
													+'{\\str{Answer: &nbsp;$$finalAnswer $$unitsThird}}'
												+'}'
												+'{help-answer-text}'
											+'}'
											+'{\\html{&nbsp;}}'
						),
				firstImage: '',
				secondImage: '',
				thirdImage: '',
				descriptor: '',
				modalChart: dataUtils.pre('\\html{<table class=equivalence-table><th colspan="3">Equivalence Table</th><tr><td>1 mi</td><td>=</td><td>1.61 km</td></tr><tr><td>1 in</td><td>=</td><td>2.54 cm</td></tr><tr><td>1 lb</td><td>=</td><td>454 g</td></tr><tr style="border-bottom:0px;"><td>1.06 qt</td><td>=</td><td>1 L</td></tr><tr style="border-bottom:0px;"><td style="padding:0em .2em;">&nbsp;</td><td style="padding:0em .2em;">&nbsp;</td><td style="padding:0em .2em;">&nbsp;</td></tr><tr><td>1 gal</td><td>=</td><td>4 qt</td></tr><tr><td>16 oz</td><td>=</td><td>1 lb</td></tr><tr><td>1 ft</td><td>=</td><td>12 in</td></tr></table>}'),
				template: 'twoStep' 
			}
			,
			{ // problem 19
				problemText: '150 hectograms is how many pounds? Round answer to the nearest whole pound.',
				labelSelect: '[\\"hg\\", \\"pounds\\", \\"dg\\"]',
				labelAnswer: 'hg',
				firstNumSelect: '[\\"1 hg\\", \\"1 lb\\", \\"100 g\\"]',
				firstDenSelect: '[\\"1 g\\", \\"1 lb\\", \\"1 hg\\"]',
				initialAmount: '150',
				numeratorStart: '150',
				denominatorStart: '1',
				numeratorSecond: '100',
				denominatorSecond: '1',
				numeratorThird: '1',
				denominatorThird: '454',
				unitsStart: 'hg',
				unitsSecond: 'g',
				unitsThird: 'lb',
				firstNumAnswer: '100 g',
				firstDenAnswer: '1 hg',
				secondNumSelect: '[\\"1 lb\\", \\"1 g\\", \\"454 g\\"]',
				secondDenSelect: '[\\"1 lb\\", \\"1 g\\", \\"454 g\\"]',
				secondNumAnswer: '1 lb',
				secondDenAnswer: '454 g',
				finalAnswer: '33',
				helpFinalAnswer: '33.039...',
				firstWordCancel: 'hectograms',
				secondWordCancel: 'grams',
				thirdWordCancel: 'pounds',
				answerRoundingText: ';<br>round the answer to the nearest whole pound:',
				roundingText: dataUtils.pre(
									'\\rowgrp'
											+'{\\html{&nbsp;}}'
											+'{\\str{Round the answer to the nearest whole pound:}}'
											+'{\\html{&nbsp;}}'
											+'{css'
												+'{\\grp'
													+'{\\str{Answer: &nbsp;$$finalAnswer $$unitsThird}}'
												+'}'
												+'{help-answer-text}'
											+'}'
											+'{\\html{&nbsp;}}'
						),
				firstImage: '',
				secondImage: '',
				thirdImage: '',
				descriptor: '',
				modalChart: dataUtils.pre('\\html{<table class=equivalence-table><th colspan="3">Equivalence Table</th><tr><td>1 mi</td><td>=</td><td>1.61 km</td></tr><tr><td>1 in</td><td>=</td><td>2.54 cm</td></tr><tr><td>1 lb</td><td>=</td><td>454 g</td></tr><tr><td>1.06 qt</td><td>=</td><td>1 L</td></tr></table><br><br><table class=conversion-table><th>kilo<br>(k)</th><th>hecto<br>(h)</th><th>deka<br>(da)</th><th>Basic<br>Units</th><th>deci<br>(d)</th><th>centi<br>(c)</th><th>milli<br>(m)</th></tr><tr><td style="rowspan=\'3\'">&nbsp;</td><td style="rowspan=\'3\'">&nbsp;</td style="rowspan=\'3\'"><td style="rowspan=\'3\'">&nbsp;</td><td style="rowspan=\'3\'">METER<br>LITER<br>GRAM</td><td style="rowspan=\'3\'">&nbsp;</td><td style="rowspan=\'3\'">&nbsp;</td><td style="rowspan=\'3\'">&nbsp;</td></tr></table>}'),
				template: 'twoStep' 
			}
			,
			{ // problem 20
				problemText: '72 kilograms is how many pounds? Round answer to the nearest whole pound.',
				labelSelect: '[\\"hg\\", \\"pounds\\", \\"kg\\"]',
				labelAnswer: 'kg',
				firstNumSelect: '[\\"1 lb\\", \\"1000 g\\", \\"1 kg\\"]',
				firstDenSelect: '[\\"1 g\\", \\"1 lb\\", \\"1 kg\\"]',
				initialAmount: '72',
				numeratorStart: '72',
				denominatorStart: '1',
				numeratorSecond: '1000',
				denominatorSecond: '1',
				numeratorThird: '1',
				denominatorThird: '454',
				unitsStart: 'kg',
				unitsSecond: 'g',
				unitsThird: 'lb',
				firstNumAnswer: '1000 g',
				firstDenAnswer: '1 kg',
				secondNumSelect: '[\\"1 lb\\", \\"1 g\\", \\"454 g\\"]',
				secondDenSelect: '[\\"1 lb\\", \\"1 g\\", \\"454 g\\"]',
				secondNumAnswer: '1 lb',
				secondDenAnswer: '454 g',
				finalAnswer: '159',
				helpFinalAnswer: '158.590...',
				firstWordCancel: 'kilograms',
				secondWordCancel: 'grams',
				thirdWordCancel: 'pounds',
				answerRoundingText: ';<br>round the answer to the nearest whole pound:',
				roundingText: dataUtils.pre(
									'\\rowgrp'
											+'{\\html{&nbsp;}}'
											+'{\\str{Round the answer to the nearest whole pound:}}'
											+'{\\html{&nbsp;}}'
											+'{css'
												+'{\\grp'
													+'{\\str{Answer: &nbsp;$$finalAnswer $$unitsThird}}'
												+'}'
												+'{help-answer-text}'
											+'}'
											+'{\\html{&nbsp;}}'
						),
				firstImage: '',
				secondImage: '',
				thirdImage: '',
				descriptor: '',
				modalChart: dataUtils.pre('\\html{<table class=equivalence-table><th colspan="3">Equivalence Table</th><tr><td>1 mi</td><td>=</td><td>1.61 km</td></tr><tr><td>1 in</td><td>=</td><td>2.54 cm</td></tr><tr><td>1 lb</td><td>=</td><td>454 g</td></tr><tr><td>1.06 qt</td><td>=</td><td>1 L</td></tr></table><br><br><table class=conversion-table><th>kilo<br>(k)</th><th>hecto<br>(h)</th><th>deka<br>(da)</th><th>Basic<br>Units</th><th>deci<br>(d)</th><th>centi<br>(c)</th><th>milli<br>(m)</th></tr><tr><td style="rowspan=\'3\'">&nbsp;</td><td style="rowspan=\'3\'">&nbsp;</td style="rowspan=\'3\'"><td style="rowspan=\'3\'">&nbsp;</td><td style="rowspan=\'3\'">METER<br>LITER<br>GRAM</td><td style="rowspan=\'3\'">&nbsp;</td><td style="rowspan=\'3\'">&nbsp;</td><td style="rowspan=\'3\'">&nbsp;</td></tr></table>}'),
				template: 'twoStep' 
			}
			
			/*
            { //problem three step
				problemText: '504 minutes is how many weeks?',
				labelSelect: '[\\"sec\\", \\"min\\", \\"hr\\", \\"day\\", \\"wk\\"]',
				labelAnswer: 'min',
				firstNumSelect: '[\\"1 sec\\", \\"1 min\\", \\"1 hr\\",  \\"1 day\\",  \\"1 wk\\"]',
				firstDenSelect: '[\\"60 sec\\", \\"60 min\\", \\"24 hr\\",  \\"7 day\\"]',
				initialAmount: '504',
				numeratorStart: '504',
				denominatorStart: '1',
				numeratorSecond: '1',
				denominatorSecond: '60',
				numeratorThird: '1',
				denominatorThird: '24',
				numeratorFourth: '1',
				denominatorFourth: '7',
				unitsStart: 'min',
				unitsSecond: 'hr',
				unitsThird: 'day',
				unitsFourth: 'wk',
				firstNumAnswer: '1 hr',
				firstDenAnswer: '60 min',
				secondNumAnswer: '1 day',
				secondDenAnswer: '24 hr',
				thirdNumAnswer: '1 wk',
				thirdDenAnswer: '7 day',
				fourthAnswer: '0.05',
				helpFinalAnswer: '0.05',
				firstWordCancel: 'minutes',
				secondWordCancel: 'hours',
				thirdWordCancel: 'days',
				fourthWordCancel: 'weeks',
				firstImage: 'clockface_minutes.png',
				secondImage: 'clockface_hours.png',
				thirdImage: 'calendar_days.png',
				fourthImage: 'calendar_week.png',
				descriptor: '',
				modalChart: dataUtils.pre('\\html{<table class=equivalence-table><th colspan="3">Equivalence Table</th><tr><td>60 sec</td><td>=</td><td>1 min</td></tr><tr><td>60 min</td><td>=</td><td>1 hr</td></tr><tr><td>24 hr</td><td>=</td><td>1 day</td><tr><td>7 days</td><td>=</td><td>1 wk</td></tr></table>}'),
				template: 'threeStep' 
			}*/
        ];
		/*shuffle = [
				{ problems: [1,2,5,6], total: 1},
				{ problems: [11,12,15,16], total: 1},
				{ problems: [3,4,13,14], total: 1},
				{ problems: [7,8,9,10], total: 1},
				{ problems: [19,20,21,22], total: 1},
				{ problems: [17,18,23,24], total: 1},
				{ problems: [25,27,33,34], total: 1},
				{ problems: [26,28,31,32,35], total: 1},
				{ problems: [29,30,36], total: 1},
				{ problems: [37], total: 1}
		];

    
    	return dataUtils.build(desc, template, data, shuffle);*/
		
		return dataUtils.build(desc, template, data);
		
}]);

