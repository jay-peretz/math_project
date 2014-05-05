/*global angular */

// angular.module('mathSkills').value('data_f_1', {
//     title: 'F.1 Least Common Multiple',
//     path: 'F.1-least-common-multiple',
//     children: [{
//         title: 'Least Common Multiple',
//         children: [] }]
// });


/*global angular */

angular.module('mathSkills').service('data_f_1', ['dataUtils', function (dataUtils) {
    var desc = {
			title: 'F.1 Find the LCM',
   			path: 'F.1-find-the-lcm',
            children: []
        },
	        template = {
            twoFractions: {
                title: 'F.1 Find the LCM',
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
                title: 'F.1 Find the LCM',
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
            // #1
            { firstDen: '5', secondDen: '10', answer: '10', template: 'twoFractions' },
            // #2
			{ firstDen: '6', secondDen: '14', answer: '42', template: 'twoFractions' },
			// #3
			{ firstDen: '3', secondDen: '8', answer: '24', template: 'twoFractions' },
			// #4
			{ firstDen: '12', secondDen: '15', answer: '60', template: 'twoFractions' },

			// #5
			{ firstDen: '18', secondDen: '4', answer: '36', template: 'twoFractions' },
			// #6
			{ firstDen: '21', secondDen: '9', answer: '63', template: 'twoFractions' },
			// #7
			{ firstDen: '11', secondDen: '10', answer: '110', template: 'twoFractions' },
			// #8
			{ firstDen: '6', secondDen: '9', thirdDen: '18', answer: '18', template: 'threeFractions' },
			// #9
			{ firstDen: '4', secondDen: '6', thirdDen: '7', answer: '84', template: 'threeFractions' },
			// #10
			{ firstDen: '6', secondDen: '10', thirdDen: '15', answer: '30', template: 'threeFractions' },

			// { firstNum: '1', firstDen: '2', secondNum: '2', secondDen: '4', answer: '4', template: 'twoFractions' },
			// { firstNum: '1', firstDen: '2', secondNum: '2', secondDen: '3', answer: '6', template: 'twoFractions' },
			// { firstNum: '1', firstDen: '4', secondNum: '3', secondDen: '8', answer: '8', template: 'twoFractions' },
			// { firstNum: '5', firstDen: '6', secondNum: '5', secondDen: '9', answer: '18', template: 'twoFractions' },
			// { firstNum: '2', firstDen: '3', secondNum: '1', secondDen: '10', answer: '30', template: 'twoFractions' },
			// { firstNum: '3', firstDen: '4', secondNum: '1', secondDen: '6', answer: '12', template: 'twoFractions' },
			// { firstNum: '3', firstDen: '4', secondNum: '7', secondDen: '8', thirdNum: '5', thirdDen: '6', answer: '24', template: 'threeFractions' },
			// { firstNum: '1', firstDen: '4', secondNum: '1', secondDen: '6', thirdNum: '2', thirdDen: '3', answer: '12', template: 'threeFractions' },
			// { firstNum: '1', firstDen: '6', secondNum: '7', secondDen: '10', thirdNum: '3', thirdDen: '5', answer: '30', template: 'threeFractions' },
			// { firstNum: '1', firstDen: '4', secondNum: '2', secondDen: '5', thirdNum: '5', thirdDen: '7', answer: '140', template: 'threeFractions' },
        ];

    return dataUtils.build(desc, template, data);
}]);



