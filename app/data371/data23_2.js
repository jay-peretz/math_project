/*global angular */

angular.module('mathSkills').service('data23_2', ['dataUtils', function (dataUtils) {
    var desc = {
			title: '23.2 Converting Units of Volume',
            path: '23.2-converting-units-of-Volume',
            children: []
        },
        template = {
            two: {
                title: 'Converting Units of Volume',
                children: [{
                    title: 'Main Answer',
                    children: [{
						problem: '\\row{\\str{3}}{\\image{23.2_Fluid_Volume/gallon-01-56x70.png}}'
						+'{\\sign{&equals;}}{\\str{?}}{\\image{23.2_Fluid_Volume/cup-02-50x60.png}}',
                        answer: '\\input{48}',
                        controls: {
                            "checkAnswer": true,
                            "help": false,
                            "workbook": true
                        }
                    }]
                }, {
                    title: 'Workbook',
                    children: [{
                        problem: '\\rowgrp{\\row{\\str{3}}{\\image{23.2_Fluid_Volume/gallon-01-56x70.png}}'
						+'{\\sign{&equals;}}{\\str{?}}{\\image{23.2_Fluid_Volume/cup-02-50x60.png}}}'
						+'{\\html{&nbsp;}}'
						+'{\\str{What is the first equivalence fraction to multiply by?}}',
                        answer: '\\grp{\\frac{\\str{3 gal}}{\\str{1}}}{\\sign{&times;}}{\\frac{\\select{$firstNumAnswer}{$firstNumSelect}}{\\select{$firstDenAnswer}{$firstDenSelect}}}',
                        controls: {
                            "checkAnswer": true,
                            "help": false
                        }
                    }, {
                        problem: '\\rowgrp{\\row{\\str{3}}{\\image{23.2_Fluid_Volume/gallon-01-56x70.png}}'
						+'{\\sign{&times;}}'
						+'{\\frac{\\grp{\\str{4}}{\\image{23.2_Fluid_Volume/quart-02-40x70.png}}}{\\grp{\\str{1}}{\\image{23.2_Fluid_Volume/gallon-01-56x70.png}}}}'
						+'{\\sign{&equals;}}{\\str{?}}{\\image{23.2_Fluid_Volume/cup-02-50x60.png}}}'
						+'{\\html{&nbsp;}}'
						+'{\\str{What is the second equivalence fraction to multiply by?}}',
                        answer: '\\grp{\\frac{\\str{3 gal}}{\\str{1}}}{\\sign{&times;}}{\\frac{\\str{4 qt}}{\\str{1 gal}}}{\\sign{&times;}}{\\frac{\\select{$secondNumAnswer}{$firstNumSelect}}{\\select{$secondDenAnswer}{$firstDenSelect}}}',
                        controls: {
                            "checkAnswer": true,
                            "help": false
                        }
                    }, {
                        problem: '\\rowgrp{\\row{\\str{3}}{\\image{23.2_Fluid_Volume/gallon-01-56x70.png}}'
						+'{\\sign{&times;}}'
						+'{\\frac{\\grp{\\str{4}}{\\image{23.2_Fluid_Volume/quart-02-40x70.png}}}{\\grp{\\str{1}}{\\image{23.2_Fluid_Volume/gallon-01-56x70.png}}}}'
						+'{\\sign{&times;}}'
						+'{\\frac{\\grp{\\str{2}}{\\image{23.2_Fluid_Volume/pint-01_50x70.png}}}{\\grp{\\str{1}}{\\image{23.2_Fluid_Volume/quart-02-40x70.png}}}}'
						+'{\\sign{&equals;}}{\\str{?}}{\\image{23.2_Fluid_Volume/cup-02-50x60.png}}}'
						+'{\\html{&nbsp;}}'
						+'{\\str{What is the third equivalence fraction to multiply by?}}',
                        answer: '\\grp{\\frac{\\str{3 gal}}{\\str{1}}}{\\sign{&times;}}{\\frac{\\str{4 qt}}{\\str{1 gal}}}{\\sign{&times;}}{\\frac{\\str{2 pt}}{\\str{1 qt}}}{\\sign{&times;}}{\\frac{\\select{$thirdNumAnswer}{$firstNumSelect}}{\\select{$thirdDenAnswer}{$firstDenSelect}}}',
                        controls: {
                            "checkAnswer": true,
                            "help": false
                        }
                    }, {
                        problem: '\\rowgrp{\\row{\\str{3}}{\\image{23.2_Fluid_Volume/gallon-01-56x70.png}}'
						+'{\\sign{&times;}}'
						+'{\\frac{\\grp{\\str{4}}{\\image{23.2_Fluid_Volume/quart-02-40x70.png}}}{\\grp{\\str{1}}{\\image{23.2_Fluid_Volume/gallon-01-56x70.png}}}}'
						+'{\\sign{&times;}}'
						+'{\\frac{\\grp{\\str{2}}{\\image{23.2_Fluid_Volume/pint-01_50x70.png}}}{\\grp{\\str{1}}{\\image{23.2_Fluid_Volume/quart-02-40x70.png}}}}'
						+'{\\sign{&times;}}'
						+'{\\frac{\\grp{\\str{2}}{\\image{23.2_Fluid_Volume/cup-02-50x60.png}}}{\\grp{\\str{1}}{\\image{23.2_Fluid_Volume/pint-01_50x70.png}}}}'
						+'{\\sign{&equals;}}{\\str{?}}{\\image{23.2_Fluid_Volume/cup-02-50x60.png}}}'
						+'{\\html{&nbsp;}}'
						+'{\\str{Multiply equivalence fractions to obtain a result:}}',
                        answer: '\\grp{\\frac{\\str{3 gal}}{\\str{1}}}{\\sign{&times;}}{\\frac{\\str{4 qt}}{\\str{1 gal}}}{\\sign{&times;}}{\\frac{\\str{2 pt}}{\\str{1 qt}}}{\\sign{&times;}}{\\frac{\\str{2 c}}{\\str{1 pt}}}{\\sign{&equals;}}{\\input{48}}{\\str{c}}',
                        controls: {
                            "checkAnswer": true,
                            "help": false
                        }
                    }]
                }]
            }
        },
        data = [
            { firstNumSelect: '[\\"3 tsp\\", \\"2 tbs\\", \\"8 fl oz\\", \\"2 c\\", \\"2 pt\\", \\"4 qt\\", \\"1 gal\\"]', firstDenSelect: '[\\"1 tbs\\", \\"1 oz\\", \\"1 c\\", \\"1 pt\\", \\"1 qt\\", \\"1 gal\\"]', firstNumAnswer: '4 qt', firstDenAnswer: '1 gal', secondNumAnswer: '2 pt', secondDenAnswer: '1 qt', thirdNumAnswer: '2 c', thirdDenAnswer: '1 pt', fourthAnswer: '48', template: 'two' }
        ];

    return dataUtils.build(desc, template, data);
}]);
