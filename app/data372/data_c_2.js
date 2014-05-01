/*global angular */

angular.module('mathSkills').service('data_c_2', ['dataUtils', function (dataUtils) {
    var desc = {
			title: 'C.2 Greatest Common Factor',
   			path: 'C.2-greatest-common-factor',
            children: []
			},
	        template = {
            gcfTwoNumbers: {
                title: '9.2 Find the GCF',
                children: [{
                    title: 'Main Answer',
                    children: [{
						 problem: '\\html{Find the GCF of $firstNumber and $secondNumber.}',
						answer: '\\grp{\\input{$answer}}',
						controls: {
							"checkAnswer": true,
							"help": false,
							"workbook": true
						}
                    }]
                }, {
                    title: 'Workbook',
                    children: [{
                        problem: '\\html{Find the GCF of $firstNumber and $secondNumber.}',
						answer: '\\findgcf{$answer}{$firstNumber}{$secondNumber}',
						controls: {
							"checkAnswer": true,
							"help": true
						}
                    }]
               }]
			},
			gcfThreeNumbers: {
                title: '9.2 Find the GCF',
                children: [{
                    title: 'Main Answer',
                    children: [{
						 problem: '\\html{Find the GCF of $firstNumber, $secondNumber and $thirdNumber.}',
						answer: '\\grp{\\input{$answer}}',
						controls: {
							"checkAnswer": true,
							"help": false,
							"workbook": true
						}
                    }]
                }, {
                    title: 'Workbook',
                    children: [{
						problem:'\\pan{12}{11}{\\html{Find the GCF of $firstNumber, $secondNumber and $thirdNumber.}}',
						answer: '\\findgcf{$answer}{$firstNumber}{$secondNumber}{$thirdNumber}',
						controls: {
							"checkAnswer": true,
							"help": true
						}
                    }]
               }]
			}
        },
        data = [
			// problem 1
            { firstNumber: '10', secondNumber: '15', answer: '5', template: 'gcfTwoNumbers' },
			// problem 2
			{ firstNumber: '14', secondNumber: '35', answer: '7', template: 'gcfTwoNumbers' },
			// problem 3
			{ firstNumber: '11', secondNumber: '20', answer: '1', template: 'gcfTwoNumbers' },
			// problem 4
			{ firstNumber: '24', secondNumber: '30', answer: '6', template: 'gcfTwoNumbers' },
			// problem 5
            { firstNumber: '63', secondNumber: '84', answer: '21', template: 'gcfTwoNumbers' },
			// problem 6
            { firstNumber: '77', secondNumber: '110', answer: '11', template: 'gcfTwoNumbers' },
			// problem 7
            { firstNumber: '140', secondNumber: '200', answer: '20', template: 'gcfTwoNumbers' },
			// problem 8
			{ firstNumber: '12', secondNumber: '18', thirdNumber: '36', answer: '6', template: 'gcfThreeNumbers' },
			// problem 9
			{ firstNumber: '14', secondNumber: '15', thirdNumber: '19', answer: '1', template: 'gcfThreeNumbers' },
			// problem 10
			{ firstNumber: '24', secondNumber: '40', thirdNumber: '72', answer: '8', template: 'gcfThreeNumbers' }
        ];

    return dataUtils.build(desc, template, data);
}]);
