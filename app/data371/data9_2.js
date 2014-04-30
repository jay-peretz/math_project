/*global angular */

angular.module('mathSkills').service('data9_2', ['dataUtils', function (dataUtils) {
    var desc = {
			title: '9.2 Find the LCM',
   			path: '9.2-find-the-lcm',
            children: []
        },
	        template = {
            twoFractions: {
                title: '9.2 Find the LCM',
                children: [{
                    title: 'Main Answer',
                    children: [{
						 problem: '\\str{Find the LCM of $firstDen and $secondDen.}',
						answer: '\\input{$answer}',
						controls: {
							"checkAnswer": true,
							"help": false,
							"workbook": true
						}
                    }]
                }, {
                    title: 'Workbook',
                    children: [{
                        problem: '\\str{Find the LCM of $firstDen and $secondDen.}',
						answer: '\\findlcm{$firstDen}{$secondDen}',
						controls: {
							"checkAnswer": true,
							"help": true
						}
                    }]
               }]
			},
			threeFractions: {
                title: '9.2 Find the LCM',
                children: [{
                    title: 'Main Answer',
                    children: [{
						 problem: '\\str{Find the LCM of $firstDen, $secondDen and $thirdDen.}',
						answer: '\\input{$answer}',
						controls: {
							"checkAnswer": true,
							"help": false,
							"workbook": true
						}
                    }]
                }, {
                    title: 'Workbook',
                    children: [{
                        problem: '\\str{Find the LCM of $firstDen, $secondDen and $thirdDen.}',
						answer: '\\findlcm{$firstDen}{$secondDen}{$thirdDen}',
						controls: {
							"checkAnswer": true,
							"help": true
						}
                    }]
               }]
			}
        },
        data = [
            { firstNum: '1', firstDen: '2', secondNum: '2', secondDen: '4', answer: '4', template: 'twoFractions' },
			{ firstNum: '1', firstDen: '2', secondNum: '2', secondDen: '3', answer: '6', template: 'twoFractions' },
			{ firstNum: '1', firstDen: '4', secondNum: '3', secondDen: '8', answer: '8', template: 'twoFractions' },
			{ firstNum: '5', firstDen: '6', secondNum: '5', secondDen: '9', answer: '18', template: 'twoFractions' },
			{ firstNum: '2', firstDen: '3', secondNum: '1', secondDen: '10', answer: '30', template: 'twoFractions' },
			{ firstNum: '3', firstDen: '4', secondNum: '1', secondDen: '6', answer: '12', template: 'twoFractions' },
			{ firstNum: '3', firstDen: '4', secondNum: '7', secondDen: '8', thirdNum: '5', thirdDen: '6', answer: '24', template: 'threeFractions' },
			{ firstNum: '1', firstDen: '4', secondNum: '1', secondDen: '6', thirdNum: '2', thirdDen: '3', answer: '12', template: 'threeFractions' },
			{ firstNum: '1', firstDen: '6', secondNum: '7', secondDen: '10', thirdNum: '3', thirdDen: '5', answer: '30', template: 'threeFractions' },
			{ firstNum: '1', firstDen: '4', secondNum: '2', secondDen: '5', thirdNum: '5', thirdDen: '7', answer: '140', template: 'threeFractions' },
        ];

    return dataUtils.build(desc, template, data);
}]);



