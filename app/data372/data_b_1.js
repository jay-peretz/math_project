/*global angular */

angular.module('mathSkills').service('data_b_1', ['dataUtils', function (dataUtils) {
    var desc = {
            title: 'B.1 The Meaning of Fractions',
            path: 'B.1-meaning-of-fractions',
            children: []
        },
        template = {
            wordproblem: {
                title: 'The Meaning of Fractions',
				children: [{
					title: 'Main Answer',
					children: [{
					problem: '\\rowgrp{\\html{$instructions}}',
						answer: '\\rowgrp{\\row{$response}}',		
						controls: {
							"checkAnswer": true,
							"help": '$help'
						}
					}]
                }]
            },
			trueorfalse : {
				title: 'The Meaning of Fractions',
				children: [{
					title: 'Main Answer',
					children: [{
					problem: '\\rowgrp{\\\\row{\\html{$instructions}}}{\\row{$problem}}',
						answer: '\\css{\\butgrp{\\row{\\but{True}{$buttonTrueValue}}{\\grp{\\html{&nbsp; &nbsp;}}}{\\but{False}{$buttonFalseValue}}}}{margin-left-small}',		
						controls: {
							"checkAnswer": true,
							"help": '$help'
						}
					}]
                }]
			}
        },
        data = [
		
		// prob 3
			{instructions: '<p>Marcus paid a $32 cable bill, a $42 phone bill, and a $47 utility bill.</p><p>  What fractional part of these bills was spent on paying for phone service?</p> ',
			response : '\\\\grp{\\\\frac{\\\\input{42}}{\\\\input{121}}}',  
			help: '\\\\rowgrp{\\\\row{\\\\str{The problem can be expressed as:}}}{\\\\row{\\\\frac{\\\\str{phone bill}}{\\\\str{cable bill + phone bill + utility bill}}}}{\\\\row{\\\\str{ or}}}{\\\\row{\\\\frac{\\\\str{42}}{\\\\str{32 + 42 + 47}}}}{\\\\row{\\\\str{ or}}}{\\\\row{\\\\frac{\\\\str{42}}{\\\\str{121}}}', 
	    	template: 'wordproblem' },
			//prob 4
			{instructions: '<p>Sandra had 5 quarters, 3 dimes, and 6 pennies.</p><p>  What fraction of her coins were in quarters?</p>',
			response : '\\\\grp{\\\\frac{\\\\input{5}}{\\\\input{14}}}', 
			help: '\\\\rowgrp{\\\\row{\\\\str{The problem can be expressed as:}}}{\\\\row{\\\\frac{\\\\str{quarters}}{\\\\str{quarters + dimes + pennies}}}}{\\\\row{\\\\str{ or}}}{\\\\row{\\\\frac{\\\\str{5}}{\\\\str{5 + 3 + 6}}}}{\\\\row{\\\\str{ or}}}{\\\\row{\\\\frac{\\\\str{5}}{\\\\str{14}}}', 
	    	template: 'wordproblem'
			},
			//prob 5
			{instructions: '<p>Sandra had 5 quarters, 3 dimes, and 6 pennies.</p><p>  What fraction of her coins were in dimes and pennies?</p>',
			response : '\\\\grp{\\\\frac{\\\\input{9}}{\\\\input{14}}}', 
			help: '\\\\rowgrp{\\\\row{\\\\str{The problem can be expressed as:}}}{\\\\row{\\\\frac{\\\\str{dimes + pennies}}{\\\\str{quarters + dimes + pennies}}}}{\\\\row{\\\\str{ or}}}{\\\\row{\\\\frac{\\\\str{3 + 6}}{\\\\str{5 + 3 + 6}}}}{\\\\row{\\\\str{ or}}}{\\\\row{\\\\frac{\\\\str{9}}{\\\\str{14}}}', 
	    	template: 'wordproblem'
			},
			//prob 6
			{instructions: '<p>Sandra had 5 quarters, 3 dimes, and 6 pennies.</p><p>  What fraction of her total coin money was in dimes?</p>',
			response : '\\\\grp{\\\\frac{\\\\input{30}}{\\\\input{161}}}', 
			help: '\\\\rowgrp{\\\\row{\\\\str{The problem can be expressed as:}}}{\\\\row{\\\\frac{\\\\str{(# of dimes * 10)}}{\\\\str{(# of quarters * 25) + (# of dimes * 10) + (# of pennies * 1)}}}}{\\\\row{\\\\str{ or}}}{\\\\row{\\\\frac{\\\\str{(3 * 10)}}{\\\\str{(5 * 25) + (3 * 10) + (6 * 1)}}}}{\\\\row{\\\\str{ or}}}{\\\\row{\\\\frac{\\\\str{30}}{\\\\str{161}}}', 
	    	template: 'wordproblem'
			},
			//prob 7
			{instructions: '<p>A child had a set of building blocks that consisted of 10 red blocks, 5 green blocks, and 7 white blocks. All of these blocks were put into a bag.</p><p>If a block was randomly chosen, what is the probability of choosing a red block?</p>',
			response : '\\\\grp{\\\\frac{\\\\input{5}}{\\\\input{11}}}', 
			help: '\\\\rowgrp{\\\\row{\\\\str{The problem can be expressed as:}}}{\\\\row{\\\\frac{\\\\str{red blocks}}{\\\\str{red blocks + green blocks + white blocks}}}}{\\\\row{\\\\str{ or}}}{\\\\row{\\\\frac{\\\\str{10}}{\\\\str{10 + 5 + 7}}}}{\\\\row{\\\\str{ or}}}{\\\\row{\\\\frac{\\\\str{10}}{\\\\str{22}}}}{\\\\row{\\\\str{ or}}}{\\\\row{\\\\frac{\\\\str{5}}{\\\\str{11}}}}', 
	    	template: 'wordproblem'
			},
			//prob 8
			{instructions: '<p>A child had a set of building blocks that consisted of 10 red blocks, 5 green blocks, and 7 white blocks. All of these blocks were put into a bag.</p><p>If a block was randomly chosen, what is the probability of choosing a red or white block?</p>',
			response : '\\\\grp{\\\\frac{\\\\input{17}}{\\\\input{22}}}', 
			help: '\\\\rowgrp{\\\\row{\\\\str{The problem can be expressed as:}}}{\\\\row{\\\\frac{\\\\str{red blocks + white blocks}}{\\\\str{red blocks + green blocks + white blocks}}}}{\\\\row{\\\\str{ or}}}{\\\\row{\\\\frac{\\\\str{10 + 7}}{\\\\str{10 + 5 + 7}}}}{\\\\row{\\\\str{ or}}}{\\\\row{\\\\frac{\\\\str{17}}{\\\\str{22}}}}', 
	    	template: 'wordproblem'
			},
			//prob 9
			{instructions: '<p>In a bag with 30 pieces of candy, 10 pieces have walnuts and 7 pieces have almonds.</p><p> What is the probability of picking a piece of candy that has neither walnuts nor almonds?</p>',
			response : '\\\\grp{\\\\frac{\\\\input{13}}{\\\\input{30}}}', 
			help: '\\\\rowgrp{\\\\row{\\\\str{The problem can be expressed as:}}}{\\\\row{\\\\frac{\\\\str{all pieces - (walnut + almonds)}}{\\\\str{all pieces}}}}{\\\\row{\\\\str{ or}}}{\\\\row{\\\\frac{\\\\str{30 - (10 + 7)}}{\\\\str{30}}}}{\\\\row{\\\\str{ or}}}{\\\\row{\\\\frac{\\\\str{13}}{\\\\str{30}}}}', 
	    	template: 'wordproblem'
			},
			//prob 10
			{instructions: '<p>True or False:</p>',
			problem: '\\\\grp{\\\\frac{\\\\str{3}}{\\\\str{4}}}{\\\\str{ = }}{\\\\frac{\\\\str{12}}{\\\\str{16}}}',
		   //   problem: 
			 buttonTrueValue: 'T', 
			 buttonFalseValue: 'F',
			help: '\\\\rowgrp{\\\\row{\\\\str{The fractions are equal because the cross-products are equal:}}}{\\\\row{\\\\str{3 * 16 = 48}}}{\\\\row{\\\\str{and}}}{\\\\row{\\\\str{ 4 * 12 = 48}}}', 
	    	template: 'trueorfalse'
			},
			//prob 11
			{instructions: '<p>True or False:</p>',
			problem: '\\\\grp{\\\\frac{\\\\str{0.25}}{\\\\str{4}}}{\\\\str{ = }}{\\\\frac{\\\\str{0.3}}{\\\\str{4.8}}}',
		   //   problem: 
			 buttonTrueValue: 'T', 
			 buttonFalseValue: 'F',
			help: '\\\\rowgrp{\\\\row{\\\\str{The fractions are equal because the cross-products are equal:}}}{\\\\row{\\\\str{0.25 * 4.8 = 1.2}}}{\\\\row{\\\\str{and}}}{\\\\row{\\\\str{ 0.3 * 4 = 1.2}}}', 
	    	template: 'trueorfalse'
			},
			//prob 20
			{instructions: '<p>True or False:</p>',
			problem: '\\\\grp{\\\\frac{\\\\str{4 cars}}{\\\\str{5 people}}}{\\\\str{ = }}{\\\\frac{\\\\str{32 cars}}{\\\\str{40 people}}}',
		   //   problem: 
			 buttonTrueValue: 'T', 
			 buttonFalseValue: 'F',
			help: '\\\\rowgrp{\\\\row{\\\\str{The proportions are equal because the cross-products are equal:}}}{\\\\row{\\\\str{4 * 40 = 160}}}{\\\\row{\\\\str{and}}}{\\\\row{\\\\str{ 5 * 32 = 160}}}', 
	    	template: 'trueorfalse'
			},
			//prob 21
			{instructions: '<p>True or False:</p>',
			problem: '\\\\grp{\\\\frac{\\\\str{2.3 children}}{\\\\str{2 adults}}}{\\\\str{ = }}{\\\\frac{\\\\str{8.3 children}}{\\\\str{7 adults}}}',
		   //   problem: 
			 buttonTrueValue: 'F', 
			 buttonFalseValue: 'T',
			help: '\\\\rowgrp{\\\\row{\\\\str{The proportions are not equal because the cross-products are not equal:}}}{\\\\row{\\\\str{2.3 * 7 = 16.1}}}{\\\\row{\\\\str{and}}}{\\\\row{\\\\str{ 2 * 8.3 = 16.6}}}', 
	    	template: 'trueorfalse'
			}
		];
    return dataUtils.build(desc, template, data);
}]);