/*global angular */

angular.module('mathSkills').service('data23_2', ['dataUtils', function (dataUtils) {
    var desc = {
			title: '23.2 Converting Units of Volume',
            path: '23.2-converting-units-of-Volume',
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
										+'{\\html{$initialAmount}}{\\image{23.2_Fluid_Volume/gallon-01-56x70.png}}'
										+'{\\sign{&equals;}}'
										+'{\\html{?}}'
										+'{\\image{23.2_Fluid_Volume/cup-02-50x60.png}}'
									+'}',
                        answer: '\\grp'
									+'{\\input{$fourthAnswer}}'
									+'{\\html{c}}',
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
										+'{\\html{$initialAmount}}{\\image{23.2_Fluid_Volume/gallon-01-56x70.png}}'
										+'{\\sign{&equals;}}'
										+'{\\html{?}}'
										+'{\\image{23.2_Fluid_Volume/cup-02-50x60.png}}'
									+'}',
                        answer: '\\pan{12}{11}'
									+'{\\rowgrp'
										+'{\\html{What is the first equivalence fraction to multiply by?}}'
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
							+'{\\html{The equivalence denominator must match the measure to be converted, so the equivalence denominator is 1 gallon;<br>4 quarts equals 1 gallon, so the equivalence numerator is 4 quarts.}}'
							+'{\\html{&nbsp;}}'
							+'{\\grp'
								+'{\\frac{\\html{$numeratorStart gal}}{\\html{$denominatorStart}}}'
								+'{\\sign{&times;}}'
								+'{\\css{\\frac{\\html{4 qt}}{\\html{1 gal}}}{blue-text}}'
							+'}'
							
                        }
                    }, {
                        problem: '\\rowgrp'
									+'{\\html{$problemText}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp'
										+'{\\frac{\\grp{\\html{$numeratorStart}}{\\image{23.2_Fluid_Volume/gallon-01-56x70.png}}}{\\grp{\\css{\\html{&nbsp;}}{image-height}}{\\html{$denominatorStart}}}}'
										+'{\\sign{&times;}}'
										+'{\\frac{\\grp{\\html{4}}{\\image{23.2_Fluid_Volume/quart-02-40x70.png}}}{\\grp{\\html{1}}{\\image{23.2_Fluid_Volume/gallon-01-56x70.png}}}}'
										+'{\\sign{&equals;}}{\\html{?}}{\\image{23.2_Fluid_Volume/cup-02-50x60.png}}}',
                        answer: '\\pan{12}{11}'
									+'{\\rowgrp'
										+'{\\html{What is the second equivalence fraction to multiply by?}}'
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
										+'{\\html{<span>The equivalence denominator must match the measure to be converted, so the equivalence denominator is 1 quart;</span><br><span>2 pints equals 1 quart, so the equivalence numerator is 2 pints:</span>}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\frac{\\html{$numeratorStart gal}}{\\html{$denominatorStart}}}'
											+'{\\sign{&times;}}'
											+'{\\frac{\\html{4 qt}}{\\html{1 gal}}}'
											+'{\\sign{&times;}}'
											+'{\\css{\\frac{\\html{2 pt}}{\\html{1 qt}}}{blue-text}}'
										+'}',
							
                        }
                    }, {
                        problem: '\\rowgrp'
									+'{\\html{$problemText}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp'
										+'{\\frac{\\grp{\\html{$numeratorStart}}{\\image{23.2_Fluid_Volume/gallon-01-56x70.png}}}{\\grp{\\css{\\html{&nbsp;}}{image-height}}{\\html{$denominatorStart}}}}'
										+'{\\sign{&times;}}'
										+'{\\frac{\\grp{\\html{4}}{\\image{23.2_Fluid_Volume/quart-02-40x70.png}}}{\\grp{\\html{1}}{\\image{23.2_Fluid_Volume/gallon-01-56x70.png}}}}'
										+'{\\sign{&times;}}'
										+'{\\frac{\\grp{\\html{2}}{\\image{23.2_Fluid_Volume/pint-01_50x70.png}}}{\\grp{\\html{1}}{\\image{23.2_Fluid_Volume/quart-02-40x70.png}}}}'
										+'{\\sign{&equals;}}'
										+'{\\html{?}}'
										+'{\\image{23.2_Fluid_Volume/cup-02-50x60.png}}}',
                        answer: '\\pan{12}{11}'
									+'{\\rowgrp'
										+'{\\html{What is the third equivalence fraction to multiply by?}}'
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
										+'{\\html{<span>The equivalence denominator must match the measure to be converted, so the equivalence denominator is 1 pint;</span><br><span>2 cups equals 1 pint, so the equivalence numerator is 2 cups:</span>}}'
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
							
                        }
                    }, {
                        problem: '\\rowgrp'
									+'{\\html{$problemText}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp'
										+'{\\frac{\\grp{\\html{$numeratorStart}}{\\image{23.2_Fluid_Volume/gallon-01-56x70.png}}}{\\grp{\\css{\\html{&nbsp;}}{image-height}}{\\html{$denominatorStart}}}}'
										+'{\\sign{&times;}}'
										+'{\\frac{\\grp{\\html{4}}{\\image{23.2_Fluid_Volume/quart-02-40x70.png}}}{\\grp{\\html{1}}{\\image{23.2_Fluid_Volume/gallon-01-56x70.png}}}}'
										+'{\\sign{&times;}}'
										+'{\\frac{\\grp{\\html{2}}{\\image{23.2_Fluid_Volume/pint-01_50x70.png}}}{\\grp{\\html{1}}{\\image{23.2_Fluid_Volume/quart-02-40x70.png}}}}'
										+'{\\sign{&times;}}'
										+'{\\frac{\\grp{\\html{2}}{\\image{23.2_Fluid_Volume/cup-02-50x60.png}}}{\\grp{\\html{1}}{\\image{23.2_Fluid_Volume/pint-01_50x70.png}}}}'
										+'{\\sign{&equals;}}{\\html{?}}{\\image{23.2_Fluid_Volume/cup-02-50x60.png}}'
									+'}',
                        answer: '\\pan{12}{11}'
									+'{\\rowgrp'
										+'{\\html{Multiply equivalence fractions to obtain a result:}}'
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
										+'{\\html{$initialAmount}}{\\image{23.2_Fluid_Volume/quart-02-40x70.png}}'
										+'{\\sign{&equals;}}'
										+'{\\html{?}}'
										+'{\\image{23.2_Fluid_Volume/cup-02-50x60.png}}'
									+'}',
                        answer: '\\grp'
									+'{\\input{$fourthAnswer}}'
									+'{\\html{c}}',
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
										+'{\\html{$initialAmount}}{\\image{23.2_Fluid_Volume/quart-02-40x70.png}}'
										+'{\\sign{&equals;}}'
										+'{\\html{?}}'
										+'{\\image{23.2_Fluid_Volume/cup-02-50x60.png}}'
									+'}',
                        answer: '\\pan{12}{11}'
									+'{\\rowgrp'
										+'{\\html{What is the first equivalence fraction to multiply by?}}'
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
							+'{\\html{The equivalence denominator must match the measure to be converted, so the equivalence denominator is 1 quart;<br>2 pints equals 1 quart, so the equivalence numerator is 2 pints.}}'
							+'{\\html{&nbsp;}}'
							+'{\\grp'
								+'{\\frac{\\html{$numeratorStart qt}}{\\html{$denominatorStart}}}'
								+'{\\sign{&times;}}'
								+'{\\css{\\frac{\\html{2 pt}}{\\html{1 qt}}}{blue-text}}'
							+'}'
							
                        }
                    }, {
                        problem: '\\rowgrp'
									+'{\\html{$problemText}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp'
										+'{\\frac{\\grp{\\html{$numeratorStart}}{\\image{23.2_Fluid_Volume/quart-02-40x70.png}}}{\\grp{\\css{\\html{&nbsp;}}{image-height}}{\\html{$denominatorStart}}}}'
										+'{\\sign{&times;}}'
										+'{\\frac{\\grp{\\html{2}}{\\image{23.2_Fluid_Volume/pint-01_50x70.png}}}{\\grp{\\html{1}}{\\image{23.2_Fluid_Volume/quart-02-40x70.png}}}}'
										+'{\\sign{&equals;}}{\\html{?}}{\\image{23.2_Fluid_Volume/cup-02-50x60.png}}}',
                        answer: '\\pan{12}{11}'
									+'{\\rowgrp'
										+'{\\html{What is the second equivalence fraction to multiply by?}}'
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
										+'{\\html{<span>The equivalence denominator must match the measure to be converted, so the equivalence denominator is 1 pint;</span><br><span>2 cups equals 1 pint, so the equivalence numerator is 2 cups:</span>}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\frac{\\html{$numeratorStart qt}}{\\html{$denominatorStart}}}'
											+'{\\sign{&times;}}'
											+'{\\frac{\\html{2 pt}}{\\html{1 qt}}}'
											+'{\\sign{&times;}}'
											+'{\\css{\\frac{\\html{2 c}}{\\html{1 pt}}}{blue-text}}'
										+'}',
							
                        }
                    }, {
                        problem: '\\rowgrp'
									+'{\\html{$problemText}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp'
										+'{\\frac{\\grp{\\html{$numeratorStart}}{\\image{23.2_Fluid_Volume/quart-02-40x70.png}}}{\\grp{\\css{\\html{&nbsp;}}{image-height}}{\\html{$denominatorStart}}}}'
										+'{\\sign{&times;}}'
										+'{\\frac{\\grp{\\html{2}}{\\image{23.2_Fluid_Volume/pint-01_50x70.png}}}{\\grp{\\html{1}}{\\image{23.2_Fluid_Volume/quart-02-40x70.png}}}}'
										+'{\\sign{&times;}}'
										+'{\\frac{\\grp{\\html{2}}{\\image{23.2_Fluid_Volume/cup-02-50x60.png}}}{\\grp{\\html{1}}{\\image{23.2_Fluid_Volume/pint-01_50x70.png}}}}'
										+'{\\sign{&equals;}}{\\html{?}}{\\image{23.2_Fluid_Volume/cup-02-50x60.png}}'
									+'}',
                        answer: '\\pan{12}{11}'
									+'{\\rowgrp'
										+'{\\html{Multiply equivalence fractions to obtain a result:}}'
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
							
                        }
                    }]
                }]
            }
        },
        data = [
            { //problem 1
				problemText: '3 gallons is how many cups?',
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
				template: 'gallonsToCups' 
			},
			{ // problem 2
				problemText: '<span class=bigger><sup>1</sup>/<sub>2</sub></span> gallon is how many cups?',
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
				template: 'gallonsToCups' 
			},
			{ // problem 3
				problemText: '2 quarts is how many cups?',
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
				template: 'quartsToCups' 
			}
        ];

    return dataUtils.build(desc, template, data);
}]);
