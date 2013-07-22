
/*global angular */

angular.module('mathSkills').service('data1_3', ['dataUtils', function (dataUtils) {
    var desc = {
			title: '1.3 Comparing Whole Numbers',
			path: '1.3-comparing-whole-numbers',
            children: []
        },
	        template = {
            first: {
                title: 'Comparing Whole Numbers',
                children: [{
                    title: 'Main Answer',
                    children: [{
						problem: '',
						answer: '\\pan{2}{10}{'+
                                    '\\grp'+
                                        '{\\str{$firstNumber \xA0}}'+
                                        '{\\btn{>}{$firstButton}}'+
                                        '{\\str{\xA0 or \xA0}}'+
                                        '{\\btn{<}{$secondButton}}'+
                                        '{\\str{\xA0 $secondNumber}}'+
                                '}',
						controls: {
							"checkAnswer": false,
							"help": true //'\\str{$firstNumber is $statement $secondNumber}'
						}
                    }]
                }]
           },
			second: {
                title: 'Comparing Whole Numbers',
				children: [{
					title: 'Main Answer',
					children: [{
						problem: '',
						answer: '\\pan{2}{10}{'+
                                    '\\rowgrp{'+
                                        '\\grp'+
                                            '{\\str{X \xA0}}'+
                                            '{\\btn{>}{$firstButton}}'+
                                            '{\\str{\xA0 or \xA0}}'+
                                            '{\\btn{<}{$secondButton}}'+
                                            '{\\str{\xA0 Y}}'+
                                    '}{'+
                                        '\\rowgrp'+
                                            '{\\html{<br><br>}}'+
                                            '{\\comparewholesgraph{$firstNumber}{$secondNumber}{$startGraph}{$endGraph}}'+
                                    '}'+
                                '}',
						controls: {
							"checkAnswer": false,
							"help": true //'\\str{X or $firstNumber is $statement Y or $secondNumber}'
						}
					}]
                }]
            }
        },
        data = [
            { firstNumber: '80', secondNumber: '91', firstButton: 'F', secondButton: 'T', statement: 'LESS THAN', template: 'first' },
			{ firstButton: 'F', secondButton: 'T', firstNumber: '25', secondNumber: '33', startGraph: '20', endGraph: '35', statement: 'LESS THAN', template: 'second' },
            { firstNumber: '85', secondNumber: '80', firstButton: 'T', secondButton: 'F', statement: 'GREATER THAN', template: 'first' },
			{ firstNumber: '53', secondNumber: '50', firstButton: 'T', secondButton: 'F', statement: 'GREATER THAN', template: 'first' },
			{ firstButton: 'T', secondButton: 'F', firstNumber: '56', secondNumber: '48', startGraph: '45', endGraph: '60', statement: 'GREATER THAN', template: 'second' },
			{ firstNumber: '54', secondNumber: '60', firstButton: 'F', secondButton: 'T', statement: 'LESS THAN', template: 'first' },
			{ firstNumber: '85', secondNumber: '93', firstButton: 'F', secondButton: 'T', statement: 'LESS THAN', template: 'first' },
			{ firstButton: 'T', secondButton: 'F', firstNumber: '86', secondNumber: '77', startGraph: '72', endGraph: '88', statement: 'MORE THAN', template: 'second' },
			{ firstNumber: '47', secondNumber: '57', firstButton: 'F', secondButton: 'T', statement: 'LESS THAN', template: 'first' },
			{ firstButton: 'F', secondButton: 'T', firstNumber: '83', secondNumber: '84', startGraph: '72', endGraph: '88', statement: 'LESS THAN', template: 'second' },
			{ firstNumber: '69', secondNumber: '70', firstButton: 'F', secondButton: 'T', statement: 'LESS THAN', template: 'first' },
			{ firstButton: 'F', secondButton: 'T', firstNumber: '15', secondNumber: '18', startGraph: '10', endGraph: '25', statement: 'LESS THAN', template: 'second' },
			{ firstButton: 'T', secondButton: 'F', firstNumber: '84', secondNumber: '78', startGraph: '72', endGraph: '88', statement: 'MORE THAN', template: 'second' },
			{ firstNumber: '50', secondNumber: '53', firstButton: 'F', secondButton: 'T', statement: 'LESS THAN', template: 'first' },
			{ firstButton: 'F', secondButton: 'T', firstNumber: '18', secondNumber: '25', startGraph: '15', endGraph: '30', statement: 'LESS THAN', template: 'second' },
			{ firstNumber: '54', secondNumber: '60', firstButton: 'F', secondButton: 'T', statement: 'LESS THAN', template: 'first' },
			{ firstNumber: '86', secondNumber: '93', firstButton: 'F', secondButton: 'T', statement: 'LESS THAN', template: 'first' },
			{ firstNumber: '95', secondNumber: '87', firstButton: 'T', secondButton: 'F', statement: 'GREATER THAN', template: 'first' },
			{ firstButton: 'T', secondButton: 'F', firstNumber: '52', secondNumber: '48', startGraph: '45', endGraph: '60', statement: 'GREATER THAN', template: 'second' },
			{ firstNumber: '26', secondNumber: '16', firstButton: 'T', secondButton: 'F', statement: 'GREATER THAN', template: 'first' },
        ];

	return dataUtils.build(desc, template, data);
}]);



