/*global angular */

angular.module('mathSkills').service('data23_1', ['dataUtils', function (dataUtils) {
    var desc = {
			title: '23.1 Converting Units of Volume',
            path: '23.1-converting-units-of-Volume',
            children: []
        },
        template = {
            gallonsToCups: {
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
									+'{\\html{c}}'
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
											+'{\\frac{\\html{$numeratorStart gal}}{\\html{$denominatorStart}}}'
											+'{\\sign{&times;}}'
											+'{\\frac{\\select{$firstNumAnswer}{$firstNumSelect}}'
											+'{\\select{$firstDenAnswer}{$firstDenSelect}}}'
										+'}'
									+'}{well}',
                        controls: {
                            "checkAnswer": true,
                            "help": '\\rowgrp'
							+'{\\html{The purpose of the first fraction we multiply by is to cancel out the word "gallons" that we don\'t want as a part of the answer.  The fraction with quarts in the numerator and gallons in the denominator allows us to cancel out "gallons".}}'
							+'{\\html{&nbsp;}}'
							+'{\\grp'
								+'{\\frac{\\html{$numeratorStart gal}}{\\html{$denominatorStart}}}'
								+'{\\sign{&times;}}'
								+'{\\css{\\frac{\\html{4 qt}}{\\html{1 gal}}}{blue-text}}'
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
										+'{\\frac{\\grp{\\html{4}}{\\image{23.1-Volume-Weight-Measure/$secondImage}}}{\\grp{\\html{1}}{\\image{23.1-Volume-Weight-Measure/$firstImage}}}}'
										+'{\\sign{&equals;}}{\\html{?}}{\\image{23.1-Volume-Weight-Measure/$fourthImage}}}',
                        answer: '\\pan{12}{11}'
									+'{\\rowgrp'
										+'{\\html{What is the second fraction (that equals 1 whole) that you need to multiply by?}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\frac{\\html{$numeratorStart gal}}{\\html{$denominatorStart}}}'
											+'{\\sign{&times;}}'
											+'{\\frac{\\html{4 qt}}{\\html{1 gal}}}'
											+'{\\sign{&times;}}'
											+'{\\frac{\\select{$secondNumAnswer}{$firstNumSelect}}{\\select{$secondDenAnswer}{$firstDenSelect}}}'
										+'}'
									+'}{well}',
                        controls: {
                            "checkAnswer": true,
                            "help": '\\rowgrp'
										+'{\\html{The purpose of the second fraction we multiply by is to cancel out the word "quarts" that we don\'t want as a part of the answer.  The fraction with pints in the numerator and quarts in the denominator allows us to cancel out "quarts".}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\frac{\\html{$numeratorStart gal}}{\\html{$denominatorStart}}}'
											+'{\\sign{&times;}}'
											+'{\\frac{\\html{4 qt}}{\\html{1 gal}}}'
											+'{\\sign{&times;}}'
											+'{\\css{\\frac{\\html{2 pt}}{\\html{1 qt}}}{blue-text}}'
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
										+'{\\frac{\\grp{\\html{4}}{\\image{23.1-Volume-Weight-Measure/$secondImage}}}{\\grp{\\html{1}}{\\image{23.1-Volume-Weight-Measure/$firstImage}}}}'
										+'{\\sign{&times;}}'
										+'{\\frac{\\grp{\\html{2}}{\\image{23.1-Volume-Weight-Measure/$thirdImage}}}{\\grp{\\html{1}}{\\image{23.1-Volume-Weight-Measure/$secondImage}}}}'
										+'{\\sign{&equals;}}'
										+'{\\html{?}}'
										+'{\\image{23.1-Volume-Weight-Measure/$fourthImage}}}',
                        answer: '\\pan{12}{11}'
									+'{\\rowgrp'
										+'{\\html{What is the third fraction (that equals 1 whole) that you need to multiply by?}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\frac{\\html{$numeratorStart gal}}{\\html{$denominatorStart}}}'
											+'{\\sign{&times;}}'
											+'{\\frac{\\html{4 qt}}{\\html{1 gal}}}'
											+'{\\sign{&times;}}'
											+'{\\frac{\\html{2 pt}}{\\html{1 qt}}}'
											+'{\\sign{&times;}}'
											+'{\\frac{\\select{$thirdNumAnswer}{$firstNumSelect}}{\\select{$thirdDenAnswer}{$firstDenSelect}}}'	
										+'}'
									+'}{well}',
                        controls: {
                            "checkAnswer": true,
                            "help": '\\rowgrp'
										+'{\\html{The purpose of the third fraction we multiply by is to cancel out the word "pints" that we don\'t want as a part of the answer.  The fraction with cups in the numerator and pints in the denominator allows us to cancel out "pints".}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\frac{\\html{$numeratorStart gal}}{\\html{$denominatorStart}}}'
											+'{\\sign{&times;}}'
											+'{\\frac{\\html{4 qt}}{\\html{1 gal}}}'
											+'{\\sign{&times;}}'
											+'{\\frac{\\html{2 pt}}{\\html{1 qt}}}'
											+'{\\sign{&times;}}'
											+'{\\css{\\frac{\\html{2 c}}{\\html{1 pt}}}{blue-text}}'
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
										+'{\\frac{\\grp{\\html{4}}{\\image{23.1-Volume-Weight-Measure/$secondImage}}}{\\grp{\\html{1}}{\\image{23.1-Volume-Weight-Measure/$firstImage}}}}'
										+'{\\sign{&times;}}'
										+'{\\frac{\\grp{\\html{2}}{\\image{23.1-Volume-Weight-Measure/$thirdImage}}}{\\grp{\\html{1}}{\\image{23.1-Volume-Weight-Measure/$secondImage}}}}'
										+'{\\sign{&times;}}'
										+'{\\frac{\\grp{\\html{2}}{\\image{23.1-Volume-Weight-Measure/$fourthImage}}}{\\grp{\\html{1}}{\\image{23.1-Volume-Weight-Measure/$thirdImage}}}}'
										+'{\\sign{&equals;}}{\\html{?}}{\\image{23.1-Volume-Weight-Measure/$fourthImage}}'
									+'}',
                        answer: '\\pan{12}{11}'
									+'{\\rowgrp'
										+'{\\html{Multiply the fractions (remember to cancel out words):}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\frac{\\html{$numeratorStart gal}}{\\html{$denominatorStart}}}'
											+'{\\sign{&times;}}'
											+'{\\frac{\\html{4 qt}}{\\html{1 gal}}}'
											+'{\\sign{&times;}}'
											+'{\\frac{\\html{2 pt}}{\\html{1 qt}}}'
											+'{\\sign{&times;}}'
											+'{\\frac{\\html{2 c}}{\\html{1 pt}}}'
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
											+'{\\frac{\\html{<span class=blue-text>$numeratorStart</span> <span class=line_through>gal</span>}}{\\html{<span class=blue-text>$denominatorStart</span>}}}'
											+'{\\sign{&times;}}'
											+'{\\frac{\\html{<span class=blue-text>4</span> <span class=line_through>qt</span>}}{\\html{<span class=blue-text>1</span> <span class=line_through>gal</span>}}}'
											+'{\\sign{&times;}}'
											+'{\\frac{\\html{<span class=blue-text>2</span> <span class=line_through>pt</span>}}{\\html{<span class=blue-text>1</span> <span class=line_through>qt</span>}}}'
											+'{\\sign{&times;}}'
											+'{\\frac{\\html{<span class=blue-text>2 c</span>}}{\\html{<span class=blue-text>1</span> <span class=line_through>pt</span>}}}'
											+'{\\sign{&equals;}}'
											+'{\\html{<span class=blue-text>$fourthAnswer c</span>}}'
										+'}',
							"modalButton": "\\html{Equivalence Chart}",
							"modalText": '$modalChart'
							
                        }
                    }]
                }]
            },
			quartsToCups: {
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
									+'{\\html{c}}'
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
											+'{\\frac{\\html{$numeratorStart qt}}{\\html{$denominatorStart}}}'
											+'{\\sign{&times;}}'
											+'{\\frac{\\select{$firstNumAnswer}{$firstNumSelect}}'
											+'{\\select{$firstDenAnswer}{$firstDenSelect}}}'
										+'}'
									+'}{well}',
                        controls: {
                            "checkAnswer": true,
                            "help": '\\rowgrp'
							+'{\\html{The purpose of the first fraction we multiply by is to cancel out the word "quarts" that we don\'t want as a part of the answer.  The fraction with pints in the numerator and quarts in the denominator allows us to cancel out "quarts".}}'
							+'{\\html{&nbsp;}}'
							+'{\\grp'
								+'{\\frac{\\html{$numeratorStart qt}}{\\html{$denominatorStart}}}'
								+'{\\sign{&times;}}'
								+'{\\css{\\frac{\\html{2 pt}}{\\html{1 qt}}}{blue-text}}'
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
										+'{\\frac{\\grp{\\html{2}}{\\image{23.1-Volume-Weight-Measure/$thirdImage}}}{\\grp{\\html{1}}{\\image{23.1-Volume-Weight-Measure/$secondImage}}}}'
										+'{\\sign{&equals;}}{\\html{?}}{\\image{23.1-Volume-Weight-Measure/$fourthImage}}}',
                        answer: '\\pan{12}{11}'
									+'{\\rowgrp'
										+'{\\html{What is the second fraction (that equals 1 whole) that you need to multiply by?}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\frac{\\html{$numeratorStart qt}}{\\html{$denominatorStart}}}'
											+'{\\sign{&times;}}'
											+'{\\frac{\\html{2 pt}}{\\html{1 qt}}}'
											+'{\\sign{&times;}}'
											+'{\\frac{\\select{$secondNumAnswer}{$firstNumSelect}}{\\select{$secondDenAnswer}{$firstDenSelect}}}'
										+'}'
									+'}{well}',
                        controls: {
                            "checkAnswer": true,
                            "help": '\\rowgrp'
										+'{\\html{The purpose of the second fraction we multiply by is to cancel out the word "pints" that we don\'t want as a part of the answer.  The fraction with cups in the numerator and pints in the denominator allows us to cancel out "pints".}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\frac{\\html{$numeratorStart qt}}{\\html{$denominatorStart}}}'
											+'{\\sign{&times;}}'
											+'{\\frac{\\html{2 pt}}{\\html{1 qt}}}'
											+'{\\sign{&times;}}'
											+'{\\css{\\frac{\\html{2 c}}{\\html{1 pt}}}{blue-text}}'
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
										+'{\\frac{\\grp{\\html{2}}{\\image{23.1-Volume-Weight-Measure/$thirdImage}}}{\\grp{\\html{1}}{\\image{23.1-Volume-Weight-Measure/$secondImage}}}}'
										+'{\\sign{&times;}}'
										+'{\\frac{\\grp{\\html{2}}{\\image{23.1-Volume-Weight-Measure/$fourthImage}}}{\\grp{\\html{1}}{\\image{23.1-Volume-Weight-Measure/$thirdImage}}}}'
										+'{\\sign{&equals;}}{\\html{?}}{\\image{23.1-Volume-Weight-Measure/$fourthImage}}'
									+'}',
                        answer: '\\pan{12}{11}'
									+'{\\rowgrp'
										+'{\\html{Multiply the fractions (remember to cancel out words):}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\frac{\\html{$numeratorStart qt}}{\\html{$denominatorStart}}}'
											+'{\\sign{&times;}}'
											+'{\\frac{\\html{2 pt}}{\\html{1 qt}}}'
											+'{\\sign{&times;}}'
											+'{\\frac{\\html{2 c}}{\\html{1 pt}}}'
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
											+'{\\frac{\\html{<span class=blue-text>$numeratorStart</span> <span class=line_through>qt</span>}}{\\html{<span class=blue-text>$denominatorStart</span>}}}'
											+'{\\sign{&times;}}'
											+'{\\frac{\\html{<span class=blue-text>2</span> <span class=line_through>pt</span>}}{\\html{<span class=blue-text>1</span> <span class=line_through>qt</span>}}}'
											+'{\\sign{&times;}}'
											+'{\\frac{\\html{<span class=blue-text>2 c</span>}}{\\html{<span class=blue-text>1</span> <span class=line_through>pt</span>}}}'
											+'{\\sign{&equals;}}'
											+'{\\html{<span class=blue-text>$fourthAnswer c</span>}}'
										+'}',
							"modalButton": "\\html{Equivalence Chart}",
							"modalText": '$modalChart'
							
                        }
                    }]
                }]
            }
        },
        data = [
            { //problem 1
				problemText: '3 gallons is how many cups?',
				labelSelect: '[\\"tsp\\", \\"tbs\\", \\"fl oz\\", \\"c\\", \\"pt\\", \\"qt\\", \\"gal\\"]',
				labelAnswer: 'gal',
				firstNumSelect: '[\\"3 tsp\\", \\"2 tbs\\", \\"8 fl oz\\", \\"2 c\\", \\"2 pt\\", \\"4 qt\\", \\"1 gal\\"]',
				firstDenSelect: '[\\"1 tbs\\", \\"1 oz\\", \\"1 c\\", \\"1 pt\\", \\"1 qt\\", \\"1 gal\\"]',
				initialAmount: '3',
				numeratorStart: '3',
				denominatorStart: '1',
				firstNumAnswer: '4 qt',
				firstDenAnswer: '1 gal',
				secondNumAnswer: '2 pt',
				secondDenAnswer: '1 qt',
				thirdNumAnswer: '2 c',
				thirdDenAnswer: '1 pt',
				fourthAnswer: '48',
				firstImage: 'gallon-01-56x70.png',
				secondImage: 'quart-02-40x70.png',
				thirdImage: 'pint-01_50x70.png',
				fourthImage: 'cup-02-50x60.png',
				modalChart: dataUtils.pre('\\html{<table class=equivalence-table><th colspan="3">Equivalence Table</th><tr><td>3 tsp</td><td>=</td><td>1 tbs</td></tr><tr><td>2 tbs</td><td>=</td><td>1 oz</td></tr><tr><td>8 oz</td><td>=</td><td>1 c</td></tr><tr><td>2 c</td><td>=</td><td>1 pt</td></tr><tr><td>2 pt</td><td>=</td><td>1 qt</td></tr><tr><td>4 qt</td><td>=</td><td>1 gal</td></tr></table>}'),
				template: 'gallonsToCups' 
			},
			{ // problem 2
				problemText: '<span class=bigger><sup>1</sup>/<sub>2</sub></span> gallon is how many cups?',
				labelSelect: '[\\"tsp\\", \\"tbs\\", \\"fl oz\\", \\"c\\", \\"pt\\", \\"qt\\", \\"gal\\"]',
				labelAnswer: 'gal',
				firstNumSelect: '[\\"3 tsp\\", \\"2 tbs\\", \\"8 fl oz\\", \\"2 c\\", \\"2 pt\\", \\"4 qt\\", \\"1 gal\\"]',
				firstDenSelect: '[\\"1 tbs\\", \\"1 oz\\", \\"1 c\\", \\"1 pt\\", \\"1 qt\\", \\"1 gal\\"]',
				initialAmount: '<sup>1</sup>/<sub>2</sub>',
				numeratorStart: '1',
				denominatorStart: '2',
				firstNumAnswer: '4 qt',
				firstDenAnswer: '1 gal',
				secondNumAnswer: '2 pt',
				secondDenAnswer: '1 qt',
				thirdNumAnswer: '2 c',
				thirdDenAnswer: '1 pt',
				fourthAnswer: '8',
				firstImage: 'gallon-01-56x70.png',
				secondImage: 'quart-02-40x70.png',
				thirdImage: 'pint-01_50x70.png',
				fourthImage: 'cup-02-50x60.png',
				modalChart: dataUtils.pre('\\html{<table class=equivalence-table><th colspan="3">Equivalence Table</th><tr><td>3 tsp</td><td>=</td><td>1 tbs</td></tr><tr><td>2 tbs</td><td>=</td><td>1 oz</td></tr><tr><td>8 oz</td><td>=</td><td>1 c</td></tr><tr><td>2 c</td><td>=</td><td>1 pt</td></tr><tr><td>2 pt</td><td>=</td><td>1 qt</td></tr><tr><td>4 qt</td><td>=</td><td>1 gal</td></tr></table>}'),
				template: 'gallonsToCups' 
			},
			{ // problem 3
				problemText: '2 quarts is how many cups?',
				labelSelect: '[\\"tsp\\", \\"tbs\\", \\"fl oz\\", \\"c\\", \\"pt\\", \\"qt\\", \\"gal\\"]',
				labelAnswer: 'qt',
				firstNumSelect: '[\\"3 tsp\\", \\"2 tbs\\", \\"8 fl oz\\", \\"2 c\\", \\"2 pt\\", \\"4 qt\\", \\"1 gal\\"]',
				firstDenSelect: '[\\"1 tbs\\", \\"1 oz\\", \\"1 c\\", \\"1 pt\\", \\"1 qt\\", \\"1 gal\\"]',
				initialAmount: '2',
				numeratorStart: '2',
				denominatorStart: '1',
				firstNumAnswer: '2 pt',
				firstDenAnswer: '1 qt',
				secondNumAnswer: '2 c',
				secondDenAnswer: '1 pt',
				thirdNumAnswer: '',
				thirdDenAnswer: '',
				fourthAnswer: '8',
				firstImage: 'gallon-01-56x70.png',
				secondImage: 'quart-02-40x70.png',
				thirdImage: 'pint-01_50x70.png',
				fourthImage: 'cup-02-50x60.png',
				modalChart: dataUtils.pre('\\html{<table class=equivalence-table><th colspan="3">Equivalence Table</th><tr><td>3 tsp</td><td>=</td><td>1 tbs</td></tr><tr><td>2 tbs</td><td>=</td><td>1 oz</td></tr><tr><td>8 oz</td><td>=</td><td>1 c</td></tr><tr><td>2 c</td><td>=</td><td>1 pt</td></tr><tr><td>2 pt</td><td>=</td><td>1 qt</td></tr><tr><td>4 qt</td><td>=</td><td>1 gal</td></tr></table>}'),
				template: 'quartsToCups' 
			}
			,
			{ // problem 3
				problemText: '<span class=bigger><sup>1</sup>/<sub>2</sub></span> quart is how many cups?',
				labelSelect: '[\\"tsp\\", \\"tbs\\", \\"fl oz\\", \\"c\\", \\"pt\\", \\"qt\\", \\"gal\\"]',
				labelAnswer: 'qt',
				firstNumSelect: '[\\"3 tsp\\", \\"2 tbs\\", \\"8 fl oz\\", \\"2 c\\", \\"2 pt\\", \\"4 qt\\", \\"1 gal\\"]',
				firstDenSelect: '[\\"1 tbs\\", \\"1 oz\\", \\"1 c\\", \\"1 pt\\", \\"1 qt\\", \\"1 gal\\"]',
				initialAmount: '<sup>1</sup>/<sub>2</sub>',
				numeratorStart: '1',
				denominatorStart: '2',
				firstNumAnswer: '2 pt',
				firstDenAnswer: '1 qt',
				secondNumAnswer: '2 c',
				secondDenAnswer: '1 pt',
				thirdNumAnswer: '',
				thirdDenAnswer: '',
				fourthAnswer: '2',
				firstImage: 'gallon-01-56x70.png',
				secondImage: 'quart-02-40x70.png',
				thirdImage: 'pint-01_50x70.png',
				fourthImage: 'cup-02-50x60.png',
				modalChart: dataUtils.pre('\\html{<table class=equivalence-table><th colspan="3">Equivalence Table</th><tr><td>3 tsp</td><td>=</td><td>1 tbs</td></tr><tr><td>2 tbs</td><td>=</td><td>1 oz</td></tr><tr><td>8 oz</td><td>=</td><td>1 c</td></tr><tr><td>2 c</td><td>=</td><td>1 pt</td></tr><tr><td>2 pt</td><td>=</td><td>1 qt</td></tr><tr><td>4 qt</td><td>=</td><td>1 gal</td></tr></table>}'),
				template: 'quartsToCups' 
			}
        ];

    return dataUtils.build(desc, template, data);
}]);
