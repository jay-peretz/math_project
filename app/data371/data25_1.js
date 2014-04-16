/*global angular */

angular.module('mathSkills').service('data25_1', ['dataUtils', function (dataUtils) {
    var desc = {
			title: '25.1 Metric to Metric Conversions',
            path: '25.1-metric-to-metric-conversions',
            children: []
        },
        template = {
            main: {
                title: 'Metric to Metric Conversions',
                children: [{
                    title: 'Main Answer',
                    children: [{
						problem: '',
                        answer: '\\grp'
									+'{\\html{$initialAmount &nbsp; $unitsStart}}'
									+'{\\sign{&equals;}}'
									+'{\\input{$finalAnswer}}'
									+'{\\html{$unitsSecond}}',
                        controls: {
                            "checkAnswer": true,
                            "help": '\\rowgrp'
										+'{\\html{<table class=conversion-table><th>kilo<br>(k)</th><th>hecto<br>(h)</th><th>deka<br>(da)</th><th>Basic<br>Units</th><th>deci<br>(h)</th><th>centi<br>(c)</th><th>milli<br>(m)</th></tr><tr><td style="rowspan=\'3\'">&nbsp;</td><td style="rowspan=\'3\'">&nbsp;</td style="rowspan=\'3\'"><td style="rowspan=\'3\'">&nbsp;</td><td style="rowspan=\'3\'">METER<br>LITER<br>GRAM</td><td style="rowspan=\'3\'">&nbsp;</td><td style="rowspan=\'3\'">&nbsp;</td><td style="rowspan=\'3\'">&nbsp;</td></tr></table>}}'
										+'{\\html{&nbsp;}}'
										+'{\\html{&nbsp;}}'
										+'{\\html{$initialAmount $unitsStart <span class=bigger>=</span> ? $unitsSecond}}'
										+'{\\html{&nbsp;}}'
										+'{\\html{To change from $fullUnitsStart to $fullUnitsSecond,<br>move the decimal point $howManyPlaces to the $rightOrLeft.}}'
										+'{\\html{&nbsp;}}'
										+'{\\css'
											+'{\\grp'
												+'{\\html{Answer: &nbsp;}}'
												+'{\\html{$helpAnswer}}'
												+'{\\html{$unitsSecond}}'
											+'}'
											+'{help-answer-text}'
										+'}',
                            "workbook": false,
							"modalButton": "\\html{Conversion Chart}",
							"modalText": '\\html{<table class=conversion-table><th>kilo<br>(k)</th><th>hecto<br>(h)</th><th>deka<br>(da)</th><th>Basic<br>Units</th><th>deci<br>(h)</th><th>centi<br>(c)</th><th>milli<br>(m)</th></tr><tr><td style="rowspan=\'3\'">&nbsp;</td><td style="rowspan=\'3\'">&nbsp;</td style="rowspan=\'3\'"><td style="rowspan=\'3\'">&nbsp;</td><td style="rowspan=\'3\'">METER<br>LITER<br>GRAM</td><td style="rowspan=\'3\'">&nbsp;</td><td style="rowspan=\'3\'">&nbsp;</td><td style="rowspan=\'3\'">&nbsp;</td></tr></table>}'
                        }
                    }]
                }]
            }
        },
        data = [
			{ // problem 1
				initialAmount: '25',
				unitsStart: 'meters',
				unitsSecond: 'cm',
                fullUnitsStart: 'meters',
				fullUnitsSecond: 'centimeters',
				finalAnswer: '2500',
				helpAnswer: '2,500',
				howManyPlaces: '2 places',
				rightOrLeft: 'right',
				template: 'main' 
			},
			{ // problem 2
				initialAmount: '6',
				unitsStart: 'meters',
				unitsSecond: 'dm',
                fullUnitsStart: 'meters',
				fullUnitsSecond: 'decimeters',
				finalAnswer: '60',
				helpAnswer: '60',
				howManyPlaces: '1 place',
				rightOrLeft: 'right',
				template: 'main' 
			},
			{ // problem 3
				initialAmount: '4',
				unitsStart: 'L',
				unitsSecond: 'mL',
                fullUnitsStart: 'liters',
				fullUnitsSecond: 'milliliters',
				finalAnswer: '4000',
				helpAnswer: '4,000',
				howManyPlaces: '3 places',
				rightOrLeft: 'right',
				template: 'main' 
			},
			{ // problem 4
				initialAmount: '8.2',
				unitsStart: 'L',
				unitsSecond: 'cL',
                fullUnitsStart: 'liters',
				fullUnitsSecond: 'centiliters',
				finalAnswer: '820',
				helpAnswer: '820',
				howManyPlaces: '2 places',
				rightOrLeft: 'right',
				template: 'main' 
			},
			{ // problem 5
				initialAmount: '16',
				unitsStart: 'g',
				unitsSecond: 'dg',
                fullUnitsStart: 'grams',
				fullUnitsSecond: 'decigrams',
				finalAnswer: '160',
				helpAnswer: '160',
				howManyPlaces: '1 place',
				rightOrLeft: 'right',
				template: 'main' 
			},
			{ // problem 6
				initialAmount: '140',
				unitsStart: 'g',
				unitsSecond: 'mg',
                fullUnitsStart: 'grams',
				fullUnitsSecond: 'milligrams',
				finalAnswer: '140000',
				helpAnswer: '140,000',
				howManyPlaces: '3 places',
				rightOrLeft: 'right',
				template: 'main' 
			},
			{ // problem 7
				initialAmount: '12',
				unitsStart: 'meters',
				unitsSecond: 'dam',
                fullUnitsStart: 'meters',
				fullUnitsSecond: 'dekameters',
				finalAnswer: '1.2',
				helpAnswer: '1.2',
				howManyPlaces: '1 place',
				rightOrLeft: 'left',
				template: 'main' 
			},
			{ // problem 8
				initialAmount: '4.3',
				unitsStart: 'meters',
				unitsSecond: 'km',
                fullUnitsStart: 'meters',
				fullUnitsSecond: 'kilometers',
				finalAnswer: '0.0043',
				helpAnswer: '0.0043',
				howManyPlaces: '3 places',
				rightOrLeft: 'left',
				template: 'main' 
			},
			{ // problem 9
				initialAmount: '86',
				unitsStart: 'L',
				unitsSecond: 'hL',
                fullUnitsStart: 'liters',
				fullUnitsSecond: 'hectoliters',
				finalAnswer: '0.86',
				helpAnswer: '0.86',
				howManyPlaces: '2 places',
				rightOrLeft: 'left',
				template: 'main' 
			},
			{ // problem 10
				initialAmount: '0.4',
				unitsStart: 'L',
				unitsSecond: 'kL',
                fullUnitsStart: 'liters',
				fullUnitsSecond: 'kiloliters',
				finalAnswer: '0.0004',
				helpAnswer: '0.0004',
				howManyPlaces: '3 places',
				rightOrLeft: 'left',
				template: 'main' 
			},
			{ // problem 11
				initialAmount: '100',
				unitsStart: 'g',
				unitsSecond: 'hg',
                fullUnitsStart: 'grams',
				fullUnitsSecond: 'hectograms',
				finalAnswer: '1',
				helpAnswer: '1',
				howManyPlaces: '2 places',
				rightOrLeft: 'left',
				template: 'main' 
			},
			{ // problem 12
				initialAmount: '3.75',
				unitsStart: 'g',
				unitsSecond: 'dag',
                fullUnitsStart: 'grams',
				fullUnitsSecond: 'dekagrams',
				finalAnswer: '0.375',
				helpAnswer: '0.375',
				howManyPlaces: '1 place',
				rightOrLeft: 'left',
				template: 'main' 
			},
			{ // problem 13
				initialAmount: '2.65',
				unitsStart: 'km',
				unitsSecond: 'dm',
                fullUnitsStart: 'kilometers',
				fullUnitsSecond: 'decimeters',
				finalAnswer: '26500',
				helpAnswer: '26,500',
				howManyPlaces: '4 places',
				rightOrLeft: 'right',
				template: 'main' 
			},
			{ // problem 14
				initialAmount: '15',
				unitsStart: 'hm',
				unitsSecond: 'km',
                fullUnitsStart: 'hectometers',
				fullUnitsSecond: 'kilometers',
				finalAnswer: '1.5',
				helpAnswer: '1.5',
				howManyPlaces: '1 place',
				rightOrLeft: 'left',
				template: 'main' 
			},
			{ // problem 15
				initialAmount: '0.08',
				unitsStart: 'daL',
				unitsSecond: 'cL',
                fullUnitsStart: 'dekaliters',
				fullUnitsSecond: 'centiliters',
				finalAnswer: '80',
				helpAnswer: '80',
				howManyPlaces: '3 places',
				rightOrLeft: 'right',
				template: 'main' 
			},
			{ // problem 16
				initialAmount: '8.2',
				unitsStart: 'hL',
				unitsSecond: 'dL',
                fullUnitsStart: 'hectoliters',
				fullUnitsSecond: 'deciliters',
				finalAnswer: '8200',
				helpAnswer: '8,200',
				howManyPlaces: '3 places',
				rightOrLeft: 'right',
				template: 'main' 
			},
			{ // problem 17
				initialAmount: '1.325',
				unitsStart: 'kg',
				unitsSecond: 'cg',
                fullUnitsStart: 'kilograms',
				fullUnitsSecond: 'centigrams',
				finalAnswer: '132500',
				helpAnswer: '132,500',
				howManyPlaces: '5 places',
				rightOrLeft: 'right',
				template: 'main' 
			},
			{ // problem 18
				initialAmount: '12.6',
				unitsStart: 'dag',
				unitsSecond: 'mg',
                fullUnitsStart: 'dekagrams',
				fullUnitsSecond: 'milligrams',
				finalAnswer: '126000',
				helpAnswer: '126,000',
				howManyPlaces: '4 places',
				rightOrLeft: 'right',
				template: 'main' 
			},
			{ // problem 19
				initialAmount: '15',
				unitsStart: 'mm',
				unitsSecond: 'km',
                fullUnitsStart: 'millimeters',
				fullUnitsSecond: 'kilometers',
				finalAnswer: '0.000015',
				helpAnswer: '0.000015',
				howManyPlaces: '6 places',
				rightOrLeft: 'left',
				template: 'main' 
			},
			{ // problem 20
				initialAmount: '188',
				unitsStart: 'dm',
				unitsSecond: 'hm',
                fullUnitsStart: 'decimeters',
				fullUnitsSecond: 'hectometers',
				finalAnswer: '0.188',
				helpAnswer: '0.188',
				howManyPlaces: '3 places',
				rightOrLeft: 'left',
				template: 'main' 
			},
			{ // problem 21
				initialAmount: '70',
				unitsStart: 'mL',
				unitsSecond: 'kL',
                fullUnitsStart: 'milliliters',
				fullUnitsSecond: 'kiloliters',
				finalAnswer: '0.00007',
				helpAnswer: '0.00007',
				howManyPlaces: '6 places',
				rightOrLeft: 'left',
				template: 'main' 
			},
			{ // problem 22
				initialAmount: '62.5',
				unitsStart: 'cL',
				unitsSecond: 'hL',
                fullUnitsStart: 'centiliters',
				fullUnitsSecond: 'hectoliters',
				finalAnswer: '0.00625',
				helpAnswer: '0.00625',
				howManyPlaces: '4 places',
				rightOrLeft: 'left',
				template: 'main' 
			},
			{ // problem 23
				initialAmount: '0.75',
				unitsStart: 'dg',
				unitsSecond: 'dag',
                fullUnitsStart: 'decigrams',
				fullUnitsSecond: 'dekagrams',
				finalAnswer: '0.0075',
				helpAnswer: '0.0075',
				howManyPlaces: '2 places',
				rightOrLeft: 'left',
				template: 'main' 
			},
			{ // problem 24
				initialAmount: '84.6',
				unitsStart: 'cg',
				unitsSecond: 'hg',
                fullUnitsStart: 'centigrams',
				fullUnitsSecond: 'hectograms',
				finalAnswer: '0.00846',
				helpAnswer: '0.00846',
				howManyPlaces: '4 places',
				rightOrLeft: 'left',
				template: 'main' 
			}
        ];

    return dataUtils.build(desc, template, data);
}]);
