/*global angular */
/*
 
 
        title: 'Order Of Operations With Whole Numbers',
        children: [{
            title: 'Main Answer',
            children: [{
                problem: '\\str{Solve 27 / 9 + 6 * 8 - (10 + 25)}',
                answer: '\\input{16}',
                controls: {
                    "checkAnswer": true,
                    "help": false,
                    "workbook": true
                }
            }]
        }, {
            title: 'Workbook',
            children: [{
                problem: '\\str{Solve 27 / 9 + 6 * 8 - (10 + 25)}',
                answer: '\\ordops{27 / 9 + 6 * 8 - (10 + 25)}',
                controls: {
                    "checkAnswer": true,
                    "help": true
                }
            }]
        }]
    }, ]
});/*


/*global angular */

angular.module('mathSkills').service('data4_2', ['dataUtils', function (dataUtils) {
    var desc = {
			title: '4.2 Order Of Operations With Whole Numbers',
    		path: '4.2-order-of-operations-with-whole-numbers',
            children: []
        },
	        template = {
            first: {
                title: 'Order Of Operations With Whole Numbers',
                children: [{
                    title: 'Main Answer',
                    children: [{
						problem: '\\rowgrp'
						+'{\\html{Solve:}}'
						+'{\\html{&nbsp;}}'
						+'{\\html{$problemStatement}}',
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
						problem: '\\rowgrp'
						+'{\\html{Solve:}}'
						+'{\\html{&nbsp;}}'
						+'{\\html{$problemStatement}}',
						answer: '\\ordops{$ordopsStatement}',
						controls: {
							"checkAnswer": true,
							"help": true
						}
					}]
				}]
			}	
        },
        data = [
            { problemStatement: '7 <span class=bigger>&sdot;</span> 2 <span class=bigger>+</span> 4', ordopsStatement: '7 * 2 + 4', answer: '18', template: 'first' },
			{ problemStatement: '( 15 <span class=bigger>&minus;</span> 10 ) <span class=bigger>&divide;</span> 5', ordopsStatement: '( 15 - 10 ) / 5', answer: '1', template: 'first' },
			{ problemStatement: '4 <span class=bigger>&divide;</span> 2 <span class=bigger>+</span> 9', ordopsStatement: '4 / 2 + 9', answer: '11', template: 'first' },
			{ problemStatement: '6 <span class=bigger>&minus;</span> ( 6 <span class=bigger>&divide;</span> 3 )', ordopsStatement: '6 - (6 / 3)', answer: '4', template: 'first' },
			{ problemStatement: '7 <span class=bigger>+</span> 15 <span class=bigger>&divide;</span> 3', ordopsStatement: '7 + 15 / 3', answer: '12', template: 'first' },
			{ problemStatement: '3 <span class=bigger>&divide;</span> ( 3 <span class=bigger>&sdot;</span> 3 <span class=bigger>&divide;</span> 3 )', ordopsStatement: '3 / (3 * 3 / 3)', answer: '1', template: 'first' },
			{ problemStatement: '15 <span class=bigger>&minus;</span> ( ( 7 <span class=bigger>&minus;</span> 4 ) <span class=bigger>&sdot;</span> 2 )', ordopsStatement: '15 - ((7 - 4) * 2)', answer: '9', template: 'first' },
			{ problemStatement: '15 <span class=bigger>&minus;</span> 8 <span class=bigger>&sdot;</span> 2 <span class=bigger>&divide;</span> 4', ordopsStatement: '15 - 8 * 2 / 4', answer: '11', template: 'first' },
			{ problemStatement: '( 28 <span class=bigger>+</span> 15 <span class=bigger>&divide;</span> 5 ) <span class=bigger>&minus;</span> 14', ordopsStatement: '(28 + 15 / 5) - 14', answer: '17', template: 'first' },
			{ problemStatement: '27 <span class=bigger>&divide;</span> 9 <span class=bigger>+</span> 6 <span class=bigger>&sdot;</span> 8 <span class=bigger>&minus;</span> 35', ordopsStatement: '27 / 9 + 6 * 8 - 35)', answer: '16', template: 'first' },
        ];

	return dataUtils.build(desc, template, data);
}]);



