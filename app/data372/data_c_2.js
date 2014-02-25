/*global angular */

angular.module('mathSkills').service('data_c_2', ['dataUtils', function (dataUtils) {
    var desc = {
			title: 'C.2 Greatest Common Factor',
   			path: 'C.2-greatest-common-factor',
            children: []
        },
	        template = {
            twoFractions: {
                title: 'Greatest Common Factor',
                children: [{
                    title: 'Main Answer',
                    children: [{
						 problem: '\\row{\\str{Find the GCF of \xA0}}{\\frac{\\str{$firstNum}}{\\str{$firstDen}}}{\\str{\xA0 and \xA0}}{\\frac{\\str{$secondNum}}{\\str{$secondDen}}}',
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
                        problem: '\\str{Find the GCF of $firstNum and $secondNum.}',
						answer: '\\findlcm{$firstDen}{$secondDen}',
						controls: {
							"checkAnswer": true,
							"help": true
						}
                    }]
               }]
			},
			
        },
        data = [
            { firstNum: '10', firstDen: '', secondNum: '15', secondDen: '', answer: '5', template: 'twoFractions' },
			  ];

    return dataUtils.build(desc, template, data);
}]);



