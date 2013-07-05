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
			 imageproblem: {
                title: 'The Meaning of Fractions',
				children: [{
					title: 'Main Answer',
					children: [{
					problem: '\\rowgrp{\\html{$instructions}}{\\image{$imagefile}}',
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
		//prob 1
			{instructions: '<p>What fractional part of this figure is shaded?</p>',
			 imagefile: 'B.1/b-1-1.png',
			response : '\\\\grp{\\\\frac{\\\\input{3}}{\\\\input{10}}}', 
			help: '\\\\rowgrp{\\\\row{\\\\str{Set up a part of a whole problem:}}}{\\\\row{\\\\frac{\\\\str{3}}{\\\\str{10}}}}', 
	    	template: 'imageproblem'
			},
		 //prob 2
			{instructions: '<p>What fractional part of this figure is not shaded?</p>',
			 imagefile: 'B.1/b-1-2.png',
			response : '\\\\grp{\\\\frac{\\\\input{3}}{\\\\input{5}}}', 
			help: '\\\\rowgrp{\\\\row{\\\\str{Set up a part of a whole problem:}}}{\\\\row{\\\\frac{\\\\str{3}}{\\\\str{5}}}}', 
	    	template: 'imageproblem'
			},
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
			response : '\\\\grp{\\\\frac{\\\\input{[5,10]}}{\\\\input{[11,22]}}}', 
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
		 //prob 12
			{instructions: '<p>Write a ratio of shaded parts to unshaded parts in the figure below.</p>',
			 imagefile: 'B.1/b-1-12.png',
			response : '\\\\grp{\\\\frac{\\\\input{3}}{\\\\input{4}}}', 
			help: '\\\\rowgrp{\\\\row{\\\\str{3 parts are shaded. 4 parts are unshaded.}}}{\\\\row{\\\\str{The ratio is:}}}{\\\\row{\\\\frac{\\\\str{3 parts shaded}}{\\\\str{4 parts unshaded}}}}', 
	    	template: 'imageproblem'
			},
		 //prob 13
			{instructions: '<p>Write a ratio of unshaded to shaded parts in the figure below.</p>',
			 imagefile: 'B.1/b-1-13.png',
			response : '\\\\grp{\\\\frac{\\\\input{3}}{\\\\input{5}}}', 
			help: '\\\\rowgrp{\\\\row{\\\\str{3 parts are unshaded. 5 parts are shaded.}}}{\\\\row{\\\\str{The ratio is:}}}{\\\\row{\\\\frac{\\\\str{3 parts unshaded}}{\\\\str{5 parts shaded}}}}', 
	    	template: 'imageproblem'
			},
			//prob 14
			{instructions: '<p>When 12 children were offered ice cream or cake for dessert, 5 kids chose cake and 7 chose ice cream. </p><p>Write a ratio of kids that chose ice cream to those who chose cake.</p>',
			response : '\\\\grp{\\\\frac{\\\\input{7}}{\\\\input{5}}}', 
			help: '\\\\rowgrp{\\\\row{\\\\str{Set up a ratio:}}}{\\\\row{\\\\frac{\\\\str{ 7 kids chose cake}}{\\\\str{5 kids who ice cream}}}}', 
	    	template: 'wordproblem'
			},
			//prob 15
			{instructions: '<p>If a soccer team attempted 11 shots on the goal and scored on 3 of them, what is the ratio of shots made to those missed?</p>',
			response : '\\\\grp{\\\\frac{\\\\input{3}}{\\\\input{8}}}', 
			help: '\\\\rowgrp{\\\\row{\\\\str{Set up a ratio:}}}{\\\\row{\\\\frac{\\\\str{# of shots made}}{\\\\str{# of shots missed}}}}{\\\\row{\\\\str{ or}}}{\\\\row{\\\\frac{\\\\str{(3)}}{\\\\str{11-3)}}}}{\\\\row{\\\\str{ or}}}{\\\\row{\\\\frac{\\\\str{3}}{\\\\str{8}}}', 
	    	template: 'wordproblem'
			},
			//prob 16
			{instructions: '<p>A set of 20 blocks has 4 red blocks and 7 black blocks. Write a ratio of the red and black blocks to the blocks of all other colors.</p>',
			response : '\\\\grp{\\\\frac{\\\\input{11}}{\\\\input{9}}}', 
			help: '\\\\rowgrp{\\\\row{\\\\str{Set up a ratio:}}}{\\\\row{\\\\frac{\\\\str{# of red blocks + # of black blocks}}{\\\\str{all blocks - (# of red blocks + # of black blocks)}}}}{\\\\row{\\\\str{ or}}}{\\\\row{\\\\frac{\\\\str{(4 + 7)}}{\\\\str{20 - (4 + 7))}}}}{\\\\row{\\\\str{ or}}}{\\\\row{\\\\frac{\\\\str{11}}{\\\\str{9}}}', 
	    	template: 'wordproblem'
			},
			//prob 17
			{instructions: '<p>Complete this equation:</p>',
			response : '\\\\grp{\\\\frac{\\\\str{4 computers}}{\\\\str{7 students}}}{\\\\str{ = }}{\\\\frac{\\\\grp{\\\\input{20}}{\\\\str{ computers}}}{\\\\str{35 students}}}', 
			help: '\\\\rowgrp{\\\\row{\\\\str{Set up a proportion problem:}}}{\\\\row{\\\\frac{\\\\str{4 computers}}{\\\\str{7 students}}}{\\\\str{ = }}{\\\\frac{\\\\str{x computers}}{\\\\str{35 students}}}}{\\\\row{\\\\str{Multiply the known cross product and divide by the third known value.}}}{\\\\row{\\\\str{ or}}}{\\\\row{\\\\str{(4 * 35) / 7}}}{\\\\row{\\\\str{ or}}}{\\\\row{\\\\str{20 computers}}', 
	    	template: 'wordproblem'
			},
			//prob 18
			{instructions: '<p>If 3 tickets cost $25.50, how much would 7 tickets cost (set up as a proportion, then solve)?</p>',
			response : '\\\\grp{\\\\str{$}}{\\\\input{59.50}}', 
			help: '\\\\rowgrp{\\\\row{\\\\str{Set up a proportion problem:}}}{\\\\row{\\\\frac{\\\\str{$25.50}}{\\\\str{3 tickets}}}{\\\\str{ = }}{\\\\frac{\\\\str{$ ?}}{\\\\str{7 tickets}}}}{\\\\row{\\\\str{Multiply the known cross product and divide by the third known value.}}}{\\\\row{\\\\str{ or}}}{\\\\row{\\\\str{(25.50 * 7) / 3}}}{\\\\row{\\\\str{ or}}}{\\\\row{\\\\str{$59.50}}', 
	    	template: 'wordproblem'
			},
			//prob 19
			{instructions: '<p>If 5 acres of land could support 16 squirrels, how many acres of this land would there need to be to support 36 squirrels (set up as a proportion, then solve)?</p>',
			response : '\\\\grp{\\\\input{11.25}}{\\\\str{ acres}}', 
			help: '\\\\rowgrp{\\\\row{\\\\str{Set up a proportion problem:}}}{\\\\row{\\\\frac{\\\\str{16 squirrels}}{\\\\str{5 acres}}}{\\\\str{ = }}{\\\\frac{\\\\str{36 squirrels}}{\\\\str{x acres}}}}{\\\\row{\\\\str{Multiply the known cross product and divide by the third known value.}}}{\\\\row{\\\\str{ or}}}{\\\\row{\\\\str{(36 * 5) / 16}}}{\\\\row{\\\\str{ or}}}{\\\\row{\\\\str{11.25 acres}}', 
	    	template: 'wordproblem'
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
			},
			//prob 22
			{instructions: '<p>When 50 adults were surveyed, 21 agreed with the governor\'s education plan, 15 disagreed, 7 had mixed feelings, and 7 didn\'t know what the governor\'s plan was.</p><p>What fraction of the adults surveyed agreed with the governor\'s plan?  </p>',
			response : '\\\\grp{\\\\frac{\\\\input{21}}{\\\\input{50}}}', 
			help: '\\\\rowgrp{\\\\row{\\\\str{The concept of the problem is part of the whole:}}}{\\\\row{\\\\frac{\\\\str{21}}{\\\\str{50}}}}', 
	    	template: 'wordproblem'
			},
			//prob 23
			{instructions: '<p>When 50 adults were surveyed, 21 agreed with the governor\'s education plan, 15 disagreed, 7 had mixed feelings, and 7 didn\'t know what the governor\'s plan was.</p><p>Out of those who knew what the governor\'s plan was, what fraction disagreed or had mixed feelings?</p>',
			response : '\\\\grp{\\\\frac{\\\\input{22}}{\\\\input{43}}}', 
			help: '\\\\rowgrp{\\\\row{\\\\str{The problem is a part of the whole where:}}}{\\\\row{\\\\frac{\\\\str{disagreed + mixed feelings}}{\\\\str{all - didn\'t understand}}}}{\\\\row{\\\\str{ or}}}{\\\\row{\\\\frac{\\\\str{15 + 7}}{\\\\str{50 - 7}}}}{\\\\row{\\\\str{ or}}}{\\\\row{\\\\frac{\\\\str{22}}{\\\\str{43}}}', 
	    	template: 'wordproblem'
			},
			//prob 24
			{instructions: '<p>When 50 adults were surveyed, 21 agreed with the governor\'s education plan, 15 disagreed, 7 had mixed feelings, and 7 didn\'t know what the governor\'s plan was.</p><p>What is the ratio of those who agreed with the governor\'s plan to all others surveyed?</p>',
			response : '\\\\grp{\\\\frac{\\\\input{21}}{\\\\input{29}}}', 
			help: '\\\\rowgrp{\\\\row{\\\\str{Set up a ratio:}}}{\\\\row{\\\\frac{\\\\str{agreed}}{\\\\str{all - agreed}}}}{\\\\row{\\\\str{ or}}}{\\\\row{\\\\frac{\\\\str{21}}{\\\\str{50 - 21}}}}{\\\\row{\\\\str{ or}}}{\\\\row{\\\\frac{\\\\str{21}}{\\\\str{29}}}', 
	    	template: 'wordproblem'
			},
			//prob 25
			{instructions: '<p>When 50 adults were surveyed, 21 agreed with the governor\'s education plan, 15 disagreed, 7 had mixed feelings, and 7 didn\'t know what the governor\'s plan was.</p><p>What is the ratio of those who agreed or had mixed feelings toward the governor\'s plan to those who disagreed with it?</p>',
			response : '\\\\grp{\\\\frac{\\\\input{28}}{\\\\input{15}}}', 
			help: '\\\\rowgrp{\\\\row{\\\\str{Set up a ratio:}}}{\\\\row{\\\\frac{\\\\str{agreed or mixed feelings}}{\\\\str{disagreed}}}}{\\\\row{\\\\str{ or}}}{\\\\row{\\\\frac{\\\\str{21 + 7}}{\\\\str{15}}}}{\\\\row{\\\\str{ or}}}{\\\\row{\\\\frac{\\\\str{28}}{\\\\str{15}}}', 
	    	template: 'wordproblem'
			},
			//prob 26
			{instructions: '<p>When 50 adults were surveyed, 21 agreed with the governor\'s education plan, 15 disagreed, 7 had mixed feelings, and 7 didn\'t know what the governor\'s plan was.</p><p>If the responses to this survey were accurate for the entire town of Pasos (4,000 adults), how many adults in Pasos did not know what the governor\'s plan was (set up as a proportion, then solve)?</p>',
			response : '\\\\input{560}', 
			help: '\\\\rowgrp{\\\\row{\\\\str{Set up a proportion problem:}}}{\\\\row{\\\\frac{\\\\str{7 didn\'t know}}{\\\\str{50 adults}}}{\\\\str{ = }}{\\\\frac{\\\\str{x didn\'t know}}{\\\\str{4000 adults}}}}{\\\\row{\\\\str{ or}}}{\\\\row{\\\\str{(7 * 4000) / 50}}}{\\\\row{\\\\str{ or}}}{\\\\row{\\\\str{560 adults}}', 
	    	template: 'wordproblem'
			},
			//prob 27
			{instructions: '<p>3 pizzas (each sliced into 10 pieces) were delivered. 8 pieces of the first pizza were eaten; 9 pieces of the second pizza were eaten; and 6 pieces of the third pizza were eaten.</p><p>What fraction of the pieces of pizza remain?</p>',
			response : '\\\\grp{\\\\frac{\\\\input{7}}{\\\\input{30}}}', 
			help: '\\\\rowgrp{\\\\row{\\\\str{Set up a part of the whole problem:}}}{\\\\row{\\\\frac{\\\\str{remaining slices}}{\\\\str{all slices}}}}{\\\\row{\\\\str{ or}}}{\\\\row{\\\\frac{\\\\str{30 - (8 + 9 + 6)}}{\\\\str{30}}}}{\\\\row{\\\\str{ or}}}{\\\\row{\\\\frac{\\\\str{7}}{\\\\str{30}}}', 
	    	template: 'wordproblem'
			},
			//prob 29
			{instructions: '<p>3 pizzas (each sliced into 10 pieces) were delivered. 8 pieces of the first pizza were eaten; 9 pieces of the second pizza were eaten; and 6 pieces of the third pizza were eaten.</p><p>What fraction of the pieces of pizza remain?</p>',
			response : '\\\\grp{\\\\frac{\\\\input{7}}{\\\\input{30}}}', 
			help: '\\\\rowgrp{\\\\row{\\\\str{Set up a part of the whole problem:}}}{\\\\row{\\\\frac{\\\\str{remaining slices}}{\\\\str{all slices}}}}{\\\\row{\\\\str{ or}}}{\\\\row{\\\\frac{\\\\str{30 - (8 + 9 + 6)}}{\\\\str{30}}}}{\\\\row{\\\\str{ or}}}{\\\\row{\\\\frac{\\\\str{7}}{\\\\str{30}}}', 
	    	template: 'wordproblem'
			},
			//prob 30
			{instructions: '<p>3 pizzas (each sliced into 10 pieces) were delivered. 8 pieces of the first pizza were eaten; 9 pieces of the second pizza were eaten; and 6 pieces of the third pizza were eaten.</p><p>Write a ratio of the pieces eaten to those uneaten.</p>',
			response : '\\\\grp{\\\\frac{\\\\input{23}}{\\\\input{7}}}', 
			help: '\\\\rowgrp{\\\\row{\\\\str{Set up a ratio:}}}{\\\\row{\\\\frac{\\\\str{slices eaten}}{\\\\str{slices uneaten}}}}{\\\\row{\\\\str{ or}}}{\\\\row{\\\\frac{\\\\str{(8 + 9 + 6)}}{\\\\str{30 - (8 + 9 + 6)}}}}{\\\\row{\\\\str{ or}}}{\\\\row{\\\\frac{\\\\str{23}}{\\\\str{7}}}', 
	    	template: 'wordproblem'
			}
		];
    return dataUtils.build(desc, template, data);
}]);