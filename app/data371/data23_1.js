/*global angular */

angular.module('mathSkills').service('data23_1', ['dataUtils', function (dataUtils) {
    var desc = {
			title: '23.1 Converting Units of Volume',
            path: '23.1-converting-units-of-Volume',
            children: []
        },
        template = {
            threeStepSmallerUnit: {
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
							+'{\\html{The purpose of the first fraction we multiply by is to cancel out the word "$firstWordCancel" that we don\'t want as a part of the answer.  The fraction with $secondWordCancel in the numerator and $firstWordCancel in the denominator allows us to cancel out "$firstWordCancel".}}'
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
										+'{\\frac{\\grp{\\html{$numeratorSecond}}{\\image{23.1-Volume-Weight-Measure/$secondImage}}}{\\grp{\\html{1}}{\\image{23.1-Volume-Weight-Measure/$firstImage}}}}'
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
										+'{\\html{The purpose of the second fraction we multiply by is to cancel out the word "$secondWordCancel" that we don\'t want as a part of the answer.  The fraction with $thirdWordCancel in the numerator and $secondWordCancel in the denominator allows us to cancel out "$secondWordCancel".}}'
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
										+'{\\frac{\\grp{\\html{$numeratorSecond}}{\\image{23.1-Volume-Weight-Measure/$secondImage}}}{\\grp{\\html{1}}{\\image{23.1-Volume-Weight-Measure/$firstImage}}}}'
										+'{\\sign{&times;}}'
										+'{\\frac{\\grp{\\html{$numeratorThird}}{\\image{23.1-Volume-Weight-Measure/$thirdImage}}}{\\grp{\\html{1}}{\\image{23.1-Volume-Weight-Measure/$secondImage}}}}'
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
										+'{\\html{The purpose of the third fraction we multiply by is to cancel out the word "$thirdWordCancel" that we don\'t want as a part of the answer.  The fraction with $fourthWordCancel in the numerator and $thirdWordCancel in the denominator allows us to cancel out "$thirdWordCancel".}}'
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
										+'{\\frac{\\grp{\\html{$numeratorSecond}}{\\image{23.1-Volume-Weight-Measure/$secondImage}}}{\\grp{\\html{1}}{\\image{23.1-Volume-Weight-Measure/$firstImage}}}}'
										+'{\\sign{&times;}}'
										+'{\\frac{\\grp{\\html{$numeratorThird}}{\\image{23.1-Volume-Weight-Measure/$thirdImage}}}{\\grp{\\html{1}}{\\image{23.1-Volume-Weight-Measure/$secondImage}}}}'
										+'{\\sign{&times;}}'
										+'{\\frac{\\grp{\\html{$numeratorFourth}}{\\image{23.1-Volume-Weight-Measure/$fourthImage}}}{\\grp{\\html{1}}{\\image{23.1-Volume-Weight-Measure/$thirdImage}}}}'
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
											+'{\\frac{\\html{<span class=blue-text>$numeratorStart</span> <span class=line_through>$unitsStart</span}}{\\html{<span class=blue-text>$denominatorStart</span}}}'
											+'{\\sign{&times;}}'
											+'{\\frac{\\html{<span class=blue-text>4</span> <span class=line_through>qt</span}}{\\html{<span class=blue-text>1</span> <span class=line_through>gal</span}}}'
											+'{\\sign{&times;}}'
											+'{\\frac{\\html{<span class=blue-text>2</span> <span class=line_through>pt</span}}{\\html{<span class=blue-text>1</span> <span class=line_through>qt</span}}}'
											+'{\\sign{&times;}}'
											+'{\\frac{\\html{<span class=blue-text>2 c</span}}{\\html{<span class=blue-text>1</span> <span class=line_through>pt</span}}}'
											+'{\\sign{&equals;}}'
											+'{\\html{<span class=blue-text>$fourthAnswer c</span}}'
										+'}',
							"modalButton": "\\html{Equivalence Chart}",
							"modalText": '$modalChart'
							
                        }
                    }]
                }]
            },
			twoStepSmallerUnit: {
                title: 'Converting Units of Volume',
                children: [{
                    title: 'Main Answer',
                    children: [{
						problem: '\\rowgrp'
									+'{\\html{$problemText}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp'
										+'{\\html{$initialAmount}}{\\image{23.1-Volume-Weight-Measure/$secondImage}}'
										+'{\\sign{&equals;}}'
										+'{\\html{?}}'
										+'{\\image{23.1-Volume-Weight-Measure/$fourthImage}}'
									+'}',
                        answer: '\\grp'
									+'{\\input{$fourthAnswer}}'
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
										+'{\\html{$initialAmount}}{\\image{23.1-Volume-Weight-Measure/$secondImage}}'
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
										+'{\\html{$initialAmount}}{\\image{23.1-Volume-Weight-Measure/$secondImage}}'
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
							+'{\\html{The purpose of the first fraction we multiply by is to cancel out the word "$firstWordCancel" that we don\'t want as a part of the answer.  The fraction with $secondWordCancel in the numerator and $firstWordCancel in the denominator allows us to cancel out "$firstWordCancel".}}'
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
										+'{\\frac{\\grp{\\html{$numeratorStart}}{\\image{23.1-Volume-Weight-Measure/$secondImage}}}{\\grp{\\css{\\html{&nbsp;}}{image-height}}{\\html{$denominatorStart}}}}'
										+'{\\sign{&times;}}'
										+'{\\frac{\\grp{\\html{$numeratorSecond}}{\\image{23.1-Volume-Weight-Measure/$thirdImage}}}{\\grp{\\html{1}}{\\image{23.1-Volume-Weight-Measure/$secondImage}}}}'
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
										+'{\\html{The purpose of the second fraction we multiply by is to cancel out the word "$secondWordCancel" that we don\'t want as a part of the answer.  The fraction with $thirdWordCancel in the numerator and $secondWordCancel in the denominator allows us to cancel out "$secondWordCancel".}}'
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
										+'{\\frac{\\grp{\\html{$numeratorStart}}{\\image{23.1-Volume-Weight-Measure/$secondImage}}}{\\grp{\\css{\\html{&nbsp;}}{image-height}}{\\html{$denominatorStart}}}}'
										+'{\\sign{&times;}}'
										+'{\\frac{\\grp{\\html{$numeratorSecond}}{\\image{23.1-Volume-Weight-Measure/$thirdImage}}}{\\grp{\\html{1}}{\\image{23.1-Volume-Weight-Measure/$secondImage}}}}'
										+'{\\sign{&times;}}'
										+'{\\frac{\\grp{\\html{$numeratorThird}}{\\image{23.1-Volume-Weight-Measure/$fourthImage}}}{\\grp{\\html{1}}{\\image{23.1-Volume-Weight-Measure/$thirdImage}}}}'
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
											+'{\\sign{&equals;}}'
											+'{\\input{$fourthAnswer}}'
											+'{\\html{$unitsThird}}'
										+'}'
									+'}{well}',
                        controls: {
                            "checkAnswer": true,
                            "help": '\\rowgrp'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\frac{\\html{<span class=blue-text>$numeratorStart</span> <span class=line_through>$unitsStart</span}}{\\html{<span class=blue-text>$denominatorStart</span}}}'
											+'{\\sign{&times;}}'
											+'{\\frac{\\html{<span class=blue-text>$numeratorSecond</span> <span class=line_through>$unitsSecond</span}}{\\html{<span class=blue-text>1</span> <span class=line_through>$unitsStart</span}}}'
											+'{\\sign{&times;}}'
											+'{\\frac{\\html{<span class=blue-text>$secondNumAnswer</span}}{\\html{<span class=blue-text>1</span> <span class=line_through>pt</span}}}'
											+'{\\sign{&equals;}}'
											+'{\\html{<span class=blue-text>$fourthAnswer $unitsThird</span}}'
										+'}',
							"modalButton": "\\html{Equivalence Chart}",
							"modalText": '$modalChart'
							
                        }
                    }]
                }]
            }
        },
        data = [
			
            { //problem 29
				problemText: '3 gallons is how many cups?',
				labelSelect: '[\\"tsp\\", \\"tbs\\", \\"fl oz\\", \\"c\\", \\"pt\\", \\"qt\\", \\"gal\\"]',
				labelAnswer: 'gal',
				firstNumSelect: '[\\"3 tsp\\", \\"2 tbs\\", \\"8 fl oz\\", \\"2 c\\", \\"2 pt\\", \\"4 qt\\", \\"1 gal\\"]',
				firstDenSelect: '[\\"1 tbs\\", \\"1 oz\\", \\"1 c\\", \\"1 pt\\", \\"1 qt\\", \\"1 gal\\"]',
				initialAmount: '3',
				numeratorStart: '3',
				denominatorStart: '1',
				numeratorSecond: '4',
				numeratorThird: '2',
				numeratorFourth: '2',
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
				firstWordCancel: 'gallons',
				secondWordCancel: 'quarts',
				thirdWordCancel: 'pints',
				fourthWordCancel: 'cups',
				firstImage: 'gallon-01-56x70.png',
				secondImage: 'quart-02-40x70.png',
				thirdImage: 'pint-01_50x70.png',
				fourthImage: 'cup-02-50x60.png',
				modalChart: dataUtils.pre('\\html{<table class=equivalence-table><th colspan="3">Equivalence Table</th><tr><td>3 tsp</td><td>=</td><td>1 tbs</td></tr><tr><td>2 tbs</td><td>=</td><td>1 oz</td></tr><tr><td>8 oz</td><td>=</td><td>1 c</td></tr><tr><td>2 c</td><td>=</td><td>1 pt</td></tr><tr><td>2 pt</td><td>=</td><td>1 qt</td></tr><tr><td>4 qt</td><td>=</td><td>1 gal</td></tr></table>}'),
				template: 'threeStepSmallerUnit' 
			},
			{ // problem 30
				problemText: '<span class=bigger><sup>1</sup>/<sub>2</sub></span> gallon is how many cups?',
				labelSelect: '[\\"tsp\\", \\"tbs\\", \\"fl oz\\", \\"c\\", \\"pt\\", \\"qt\\", \\"gal\\"]',
				labelAnswer: 'gal',
				firstNumSelect: '[\\"3 tsp\\", \\"2 tbs\\", \\"8 fl oz\\", \\"2 c\\", \\"2 pt\\", \\"4 qt\\", \\"1 gal\\"]',
				firstDenSelect: '[\\"1 tbs\\", \\"1 oz\\", \\"1 c\\", \\"1 pt\\", \\"1 qt\\", \\"1 gal\\"]',
				initialAmount: '<sup>1</sup>/<sub>2</sub>',
				numeratorStart: '1',
				denominatorStart: '2',
				numeratorSecond: '4',
				numeratorThird: '2',
				numeratorFourth: '2',
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
				firstWordCancel: 'gallons',
				secondWordCancel: 'quarts',
				thirdWordCancel: 'pints',
				fourthWordCancel: 'cups',
				firstImage: 'gallon-01-56x70.png',
				secondImage: 'quart-02-40x70.png',
				thirdImage: 'pint-01_50x70.png',
				fourthImage: 'cup-02-50x60.png',
				modalChart: dataUtils.pre('\\html{<table class=equivalence-table><th colspan="3">Equivalence Table</th><tr><td>3 tsp</td><td>=</td><td>1 tbs</td></tr><tr><td>2 tbs</td><td>=</td><td>1 oz</td></tr><tr><td>8 oz</td><td>=</td><td>1 c</td></tr><tr><td>2 c</td><td>=</td><td>1 pt</td></tr><tr><td>2 pt</td><td>=</td><td>1 qt</td></tr><tr><td>4 qt</td><td>=</td><td>1 gal</td></tr></table>}'),
				template: 'threeStepSmallerUnit' 
			},
			{ // problem 31
				problemText: '2 quarts is how many cups?',
				labelSelect: '[\\"tsp\\", \\"tbs\\", \\"fl oz\\", \\"c\\", \\"pt\\", \\"qt\\", \\"gal\\"]',
				labelAnswer: 'qt',
				firstNumSelect: '[\\"3 tsp\\", \\"2 tbs\\", \\"8 fl oz\\", \\"2 c\\", \\"2 pt\\", \\"4 qt\\", \\"1 gal\\"]',
				firstDenSelect: '[\\"1 tbs\\", \\"1 oz\\", \\"1 c\\", \\"1 pt\\", \\"1 qt\\", \\"1 gal\\"]',
				initialAmount: '2',
				numeratorStart: '2',
				denominatorStart: '1',
				numeratorSecond: '2',
				numeratorThird: '2',
				unitsStart: 'qt',
				unitsSecond: 'pt',
				unitsThird: 'c',
				firstNumAnswer: '2 pt',
				firstDenAnswer: '1 qt',
				secondNumAnswer: '2 c',
				secondDenAnswer: '1 pt',
				thirdNumAnswer: '',
				thirdDenAnswer: '',
				fourthAnswer: '8',
				firstWordCancel: 'quarts',
				secondWordCancel: 'pints',
				thirdWordCancel: 'cups',
				firstImage: 'gallon-01-56x70.png',
				secondImage: 'quart-02-40x70.png',
				thirdImage: 'pint-01_50x70.png',
				fourthImage: 'cup-02-50x60.png',
				modalChart: dataUtils.pre('\\html{<table class=equivalence-table><th colspan="3">Equivalence Table</th><tr><td>3 tsp</td><td>=</td><td>1 tbs</td></tr><tr><td>2 tbs</td><td>=</td><td>1 oz</td></tr><tr><td>8 oz</td><td>=</td><td>1 c</td></tr><tr><td>2 c</td><td>=</td><td>1 pt</td></tr><tr><td>2 pt</td><td>=</td><td>1 qt</td></tr><tr><td>4 qt</td><td>=</td><td>1 gal</td></tr></table>}'),
				template: 'twoStepSmallerUnit' 
			}
			,
			{ // problem 32
				problemText: '<span class=bigger><sup>1</sup>/<sub>2</sub></span> quart is how many cups?',
				labelSelect: '[\\"tsp\\", \\"tbs\\", \\"fl oz\\", \\"c\\", \\"pt\\", \\"qt\\", \\"gal\\"]',
				labelAnswer: 'qt',
				firstNumSelect: '[\\"3 tsp\\", \\"2 tbs\\", \\"8 fl oz\\", \\"2 c\\", \\"2 pt\\", \\"4 qt\\", \\"1 gal\\"]',
				firstDenSelect: '[\\"1 tbs\\", \\"1 oz\\", \\"1 c\\", \\"1 pt\\", \\"1 qt\\", \\"1 gal\\"]',
				initialAmount: '<sup>1</sup>/<sub>2</sub>',
				numeratorStart: '1',
				denominatorStart: '2',
				numeratorSecond: '2',
				numeratorThird: '2',
				unitsStart: 'qt',
				unitsSecond: 'pt',
				unitsThird: 'c',
				firstNumAnswer: '2 pt',
				firstDenAnswer: '1 qt',
				secondNumAnswer: '2 c',
				secondDenAnswer: '1 pt',
				thirdNumAnswer: '',
				thirdDenAnswer: '',
				fourthAnswer: '2',
				firstWordCancel: 'quarts',
				secondWordCancel: 'pints',
				thirdWordCancel: 'cups',
				firstImage: 'gallon-01-56x70.png',
				secondImage: 'quart-02-40x70.png',
				thirdImage: 'pint-01_50x70.png',
				fourthImage: 'cup-02-50x60.png',
				modalChart: dataUtils.pre('\\html{<table class=equivalence-table><th colspan="3">Equivalence Table</th><tr><td>3 tsp</td><td>=</td><td>1 tbs</td></tr><tr><td>2 tbs</td><td>=</td><td>1 oz</td></tr><tr><td>8 oz</td><td>=</td><td>1 c</td></tr><tr><td>2 c</td><td>=</td><td>1 pt</td></tr><tr><td>2 pt</td><td>=</td><td>1 qt</td></tr><tr><td>4 qt</td><td>=</td><td>1 gal</td></tr></table>}'),
				template: 'twoStepSmallerUnit' 
			}
        ];

    return dataUtils.build(desc, template, data);
}]);
