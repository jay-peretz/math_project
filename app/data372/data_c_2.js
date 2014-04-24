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
            { firstNumber: '10', secondNumber: '15', answer: '5', template: 'gcfTwoNumbers' },
			
			{ firstNumber: '12', secondNumber: '18', thirdNumber: '36', answer: '6', template: 'gcfThreeNumbers' },
        ];

    return dataUtils.build(desc, template, data);
}]);
