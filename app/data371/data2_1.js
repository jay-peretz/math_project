/*global angular */
/*

  
        title: 'Rounding Whole Numbers',
        children: [{
            title: 'Main Answer',
            children: [{
                problem: '\\rowgrp{\\row{\\str{Round this whole number to the}}}{\\row{\\str{hundreds place: }}}{\\row{\\str{49952}}}',
                answer: '\\input{50000}',
                controls: {
                    "checkAnswer": true,
                    "help": '\\placevalue{49952}{2}{showanswer}'
                }
            }]
        }]
    }]
});
*/

/*global angular */

angular.module('mathSkills').service('data2_1', ['dataUtils', function (dataUtils) {
    var desc = {
		    title: '2.1 Rounding Whole Numbers',
			path: '2.1-rounding-whole-numbers',
            children: []
        },
	        template = {
            first: {
                title: 'Rounding Whole Numbers',
                children: [{
                    title: 'Main Answer',
                    children: [{
						problem: '\\rowgrp{\\row{\\str{Round this whole number to the}}}{\\row{\\str{$placeValue place: }}}{\\row{\\str{$problemNumber}}}',
						answer: '\\input{$answerNumber}',
						controls: {
							"checkAnswer": true,
							"help": '\\placevalue{$problemNumber}{$roundPosition}{showanswer}'
						}
                    }]
                }]
           }
        },
        data = [
            { placeValue: 'tens', problemNumber: '471', answerNumber: '470', roundPosition: '1', template: 'first' },
			{ placeValue: 'thousands', problemNumber: '1346', answerNumber: '1000', roundPosition: '3', template: 'first' },
			{ placeValue: 'tens', problemNumber: '684', answerNumber: '680', roundPosition: '1', template: 'first' },
			{ placeValue: 'tens', problemNumber: '959', answerNumber: '960', roundPosition: '1', template: 'first' },
			{ placeValue: 'hundreds', problemNumber: '461', answerNumber: '500', roundPosition: '2', template: 'first' },
			{ placeValue: 'ten thousands', problemNumber: '3990495', answerNumber: '3990000', roundPosition: '4', template: 'first' },
			{ placeValue: 'ten thousands', problemNumber: '27523018', answerNumber: '27520000', roundPosition: '4', template: 'first' },
			{ placeValue: 'hundred thousands', problemNumber: '563548', answerNumber: '600000', roundPosition: '5', template: 'first' },
			{ placeValue: 'tens', problemNumber: '230179', answerNumber: '230180', roundPosition: '1', template: 'first' },
			{ placeValue: 'hundreds', problemNumber: '49952', answerNumber: '50000', roundPosition: '2', template: 'first' }
        ];

	return dataUtils.build(desc, template, data);
}]);




