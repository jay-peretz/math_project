/*global angular */

angular.module('mathSkills').service('data_a_1', ['dataUtils', function (dataUtils) {
    var desc = {
            title: 'A.1 Setting Up Expressions',
            path: 'A.1-setting-up-expressions',
            children: []
        },
        template = {
            expressions: {
                title: 'Setting Up Expressions',
				children: [{
					title: 'Main Answer',
					children: [{
						problem: '\\rowgrp'+
						'{\\html{Click ALL the correct answers.}}'+
						'{\\html{&nbsp;}}'+
						'{\\css{\\html{$instructions}}{blue-text}}',
						answer: '\\rowgrp'+
									'{\\grp{\\chkbtn{}{$buttonValueA}{marg}}{$buttonLabelA}}'+
									'{\\grp{\\chkbtn{}{$buttonValueB}{marg}}{$buttonLabelB}}'+
									'{\\grp{\\chkbtn{}{$buttonValueC}{marg}}{$buttonLabelC}}'+
									'{\\grp{\\chkbtn{}{$buttonValueD}{marg}}{$buttonLabelD}}',		
						controls: {
							"checkAnswer": true,
							"help": true
						}
					}]
                }]
            },
		    expressions2: {title: 'Setting Up Expressions',
				children: [{
					title: 'Main Answer',
					children: [{
					problem: '\\str{$instructions}',
						answer: '\\grp{$answer}',
						controls: {
							"checkAnswer": true,
							"help": '\\rowgrp$help'
						}
					}]
                }]
		       }
        },
        data = [
		// problem 1
		{instructions: 'Seven plus four, then multiply by three.',  
		 buttonValueA: 'F', 
		 buttonLabelA: '\\\\str{7 + (4 • 3)}', 
		 buttonValueB: 'T', 
		 buttonLabelB: '\\\\str{(7 + 4) • 3}', 
		 buttonValueC: 'F', 
		 buttonLabelC: '\\\\str{7 + 4 • 3}', 
		 buttonValueD: 'T', 
		 buttonLabelD: '\\\\str{(7 + 4) (3)}',  
		 template: 'expressions' },
		 // problem 2
		{instructions: 'Start with seven, then add the product of four and three.',  
		buttonValueA: 'T', buttonLabelA: '\\\\str{7 + (4 • 3)}', 
		buttonValueB: 'F', buttonLabelB: '\\\\str{(7 + 4) • 3}', 
		buttonValueC: 'T', buttonLabelC: '\\\\str{7 + 4 • 3}', 
		buttonValueD: 'F', buttonLabelD: '\\\\str{(7 + 4) (3)}', 
		help: '\\\\rowgrp{\\\\row{\\\\str{The expression can be expressed as:}}}{\\\\row{\\\\str{7 + (4 * 3)}}}', 
		template: 'expressions' },
		// problem 3
		{instructions: 'Start with 20, then subtract the quotient of fourteen and two.',  
		buttonValueA: 'T', buttonLabelA: '\\\\str{20 - 14 / 2}', 
		buttonValueB: 'F', buttonLabelB: '\\\\str{20 - 14 • 2}', 
		buttonValueC: 'T', buttonLabelC: '\\\\grp{\\\\str{20 - }}{\\\\frac{\\\\str{14}}{\\\\str{2}}}', 
		buttonValueD: 'T', buttonLabelD: '\\\\str{20 - (14 / 2)}', 
		help: '\\\\rowgrp{\\\\row{\\\\str{The expression can be expressed as either:}}}{\\\\row{\\\\str{20 - 14 / 2}}}{\\\\row{\\\\str{or}}}{\\\\row{\\\\grp{\\\\str{20 - }}{\\\\frac{\\\\str{14}}{\\\\str{2}}}}}', 
		template: 'expressions' },
		// problem 4
		{instructions: 'Multiply eight by the sum of 4, 7, and 9.',  
		buttonValueA: 'F', buttonLabelA: '\\\\str{4 + 7 + 9 • 8}', 
		buttonValueB: 'F', buttonLabelB: '\\\\str{8 • 4 + 7 + 9}', 
		buttonValueC: 'T', buttonLabelC: '\\\\str{8 (4 + 7 + 9)}', 
		buttonValueD: 'T', buttonLabelD: '\\\\str{(4 + 7 + 9) • 8}', 
		help: '\\\\rowgrp{\\\\row{\\\\str{The expression can be expressed as either:}}}{\\\\row{\\\\str{4 + 7 + 9 * 8}}}{\\\\row{\\\\str{or}}}{\\\\row{\\\\str{(4 + 7 + 9) * 8}}}', 
		template: 'expressions' },
		// problem 5
		{instructions: 'Take the sum of 40, 25, and 15.   Then divide this total by 3.',  
		buttonValueA: 'T', buttonLabelA: '\\\\str{(40 + 25 + 15) / 3}', 
		buttonValueB: 'T', buttonLabelB: '\\\\frac{\\\\str{(40 + 25 + 15)}}{\\\\str{3}}', 
		buttonValueC: 'F', buttonLabelC: '\\\\str{3 / (40 + 25 + 15)}', 
		buttonValueD: 'F', buttonLabelD: '\\\\str{40 + 25 + 15 / 3}', 
		help: '\\\\rowgrp{\\\\row{\\\\str{The expression can be expressed as either:}}}{\\\\row{\\\\str{(40 + 25 + 15) / 3}}}{\\\\row{\\\\str{or}}}{\\\\row{\\\\frac{\\\\str{(40 + 25 + 15)}}{\\\\str{3}}}}', 
		template: 'expressions' },
		// problem 6
		{instructions: 'Find the setups that give the answer of 20.',  
		buttonValueA: 'F', buttonLabelA: '\\\\str{3 + (2 • 4)}',
		buttonValueB: 'T', buttonLabelB: '\\\\str{(3 + 2) • 4}', 
		buttonValueC: 'F', buttonLabelC: '\\\\str{3 + 2 • 4}', 
		buttonValueD: 'T', buttonLabelD: '\\\\str{(3 + 2)(4)}', 
		help: '\\\\rowgrp{\\\\row{\\\\str{The expression can be expressed as either:}}}{\\\\row{\\\\str{(3 + 2) * 4}}}{\\\\row{\\\\str{3 + 2 * 4}}}{\\\\row{\\\\str{or}}}{\\\\row{\\\\str{(3 + 2)(4)}}}', 
		template: 'expressions' },
		// problem 7
		{instructions: 'Find the setups that give the answer of 11.',  
		buttonValueA: 'T', buttonLabelA: '\\\\str{3 + (2 • 4)}', 
		buttonValueB: 'T', buttonLabelC: '\\\\str{(3 + 2) • 4}', 
		buttonValueC: 'F', buttonLabelB: '\\\\str{3 + 2 • 4}', 
		buttonValueD: 'F', buttonLabelD: '\\\\str{(3 + 2)(4)}', 
		help: '\\\\rowgrp{\\\\row{\\\\str{The expression can be expressed as:}}}{\\\\row{\\\\str{3 + (2 * 4)}}}', 
		template: 'expressions' },
		// problem 8
		{instructions: 'Find the setups that give the answer of 7.',  
		buttonValueA: 'T', buttonLabelA: '\\\\str{10 - 6 / 2}', 
		buttonValueB: 'T', buttonLabelB: '\\\\grp{\\\\str{10}}{\\\\str{-}}{\\\\frac{\\\\str{6}}{\\\\str{2}}}', 
		buttonValueC: 'T', buttonLabelC: '\\\\str{10 - (6 / 2)}', 
		buttonValueD: 'F', buttonLabelD: '\\\\str{10 + 4 / 2}', 
		help: '\\\\rowgrp{\\\\row{\\\\str{The expression can be expressed as either:}}}{\\\\row{\\\\grp{\\\\str{10}}{\\\\str{-}}{\\\\frac{\\\\str{6}}{\\\\str{2}}}}}{\\\\row{\\\\str{or}}}{\\\\row{\\\\str{10 - (6 / 2)}}}', 
		template: 'expressions' },
        // problem 9
		{instructions: 'Find the setups that give the answer of 45.',  
		buttonValueA: 'F', buttonLabelA: '\\\\str{5 + 6 + 4 • 3}', 
		buttonValueB: 'F', buttonLabelB: '\\\\str{3 • 5 + 6 + 4}', 
		buttonValueC: 'T', buttonLabelC: '\\\\str{3 (5 + 6 + 4)}', 
		buttonValueD: 'T', buttonLabelD: '\\\\str{(5 + 6 + 4) • 3}', 
		help: '\\\\rowgrp{\\\\row{\\\\str{The expression can be expressed as either:}}}{\\\\row{\\\\str{5 + 6 + 4 * 3}}}{\\\\row{\\\\str{or}}}{\\\\row{\\\\str{3 (5 + 6 +4)}}}{\\\\row{\\\\str{or}}}{\\\\row{\\\\str{(5 + 6 + 4) * 3}}}', 
		template: 'expressions' },
		// problem 10
		{instructions: 'Find the setups that give the answer of 20.',  
		buttonValueA: 'F', buttonLabelA: '\\\\str{10 + 35 + 15 / 3}', 
		buttonValueB: 'F', buttonLabelB: '\\\\str{3 / (10 + 35 + 15)}', 
		buttonValueC: 'T', buttonLabelC: '\\\\str{(10 + 35 + 15) / 3}', 
		buttonValueD: 'T', buttonLabelD: '\\\\grp{\\\\frac{\\\\str{(10 + 35 + 15)}}{\\\\str{3}}}', 
		help: '\\\\rowgrp{\\\\row{\\\\str{The expression can be expressed as either:}}}{\\\\row{\\\\str{(10 + 35 + 15) / 3}}}{\\\\row{\\\\str{or}}}{\\\\row{\\\\grp{\\\\frac{\\\\str{(10 + 35 + 15)}}{\\\\str{3}}}}}', 
		template: 'expressions' },
		// problem 11
		{instructions: 'Marcus had $300 dollars in his checking account before he paid a $32 cable bill, a $42 phone bill, and a $47 utility bill. How much money does he have left in his account now?',
	     buttonValueA: 'T', buttonLabelA: '\\\\str{300 - (32 + 42 + 47)}', 
		 buttonValueB: 'F', buttonLabelB: '\\\\str{300 - 32 + 42 + 47}', 
		 buttonValueC: 'F', buttonLabelC: '\\\\str{(32 + 42 + 47) - 300}', 
		 buttonValueD: 'T', buttonLabelD: '\\\\str{300 - 32 - 42 - 47}', 
		 help: '\\\\rowgrp{\\\\row{\\\\str{The expression can be expressed as either:}}}{\\\\row{\\\\str{300 - (32 + 42 + 47)}}}{\\\\row{\\\\str{or}}}{\\\\row{\\\\str{300 - 32 + 42 + 47}}}{\\\\row{\\\\str{or}}}{\\\\row{\\\\str{300 - 32 - 42 - 47}}}', 
		 template: 'expressions' },
        // problem 12
		{instructions: 'Elisa worked at two jobs last week. At the first job she worked 15 hours and was paid $9 per hour. At the second job she was paid $14 per hour and worked for 30 hours. How much money did she make last week?',
	     buttonValueA: 'T', buttonLabelA: '\\\\str{15 (9) + 30 (14)}', 
		 buttonValueB: 'T', buttonLabelB: '\\\\str{(15 • 9) + (30 • 14)}', 
		 buttonValueC: 'T', buttonLabelC: '\\\\str{(9 • 15) + (14 • 30)}', 
		 buttonValueD: 'F', buttonLabelD: '\\\\str{9 (15) • 14 (30)}', 
		 help: '\\\\rowgrp{\\\\row{\\\\str{The expression can be expressed as either:}}}{\\\\row{\\\\str{15 (9) + 30 (14)}}}{\\\\row{\\\\str{or}}}{\\\\row{\\\\str{(15 * 9) + (30 * 14)}}}{\\\\row{\\\\str{or}}}{\\\\row{\\\\str{(8 * 15) + (14 * 30)}}}', 
		 template: 'expressions' },
        // problem 13
		{instructions: 'When she arrived at the grocery store, Melissa had $40. She bought three items--one for $6.25, and the other two for $4.50 each. How much money did she have when she left the store?',
	     buttonValueA: 'T', buttonLabelA: '\\\\str{40 - [6.25 + 2 (4.50)]}', 
		 buttonValueB: 'F', buttonLabelB: '\\\\str{40 - 6.25 + 2 (4.50)}', 
		 buttonValueC: 'T', buttonLabelC: '\\\\str{40 - (6.25 + 2 • 4.50)}', 
		 buttonValueD: 'T', buttonLabelD: '\\\\str{40 - (6.25 + 4.50 + 4.50)}', 
		 help: '\\\\rowgrp{\\\\row{\\\\str{The expression can be expressed as either:}}}{\\\\row{\\\\str{40 - [6.25 + 2 (4.50)]}}}{\\\\row{\\\\str{or}}}{\\\\row{\\\\str{40 - (6.25 + 4.50 + 4.50)}}}', 
		 template: 'expressions' },
        // problem 14
		{instructions: 'If Pilar worked 34 hours one week, 25 hours another week, and 50 hours a third week, what was the average number of hours he worked for each of those three weeks?',
	     buttonValueA: 'F', buttonLabelA: '\\\\str{34 + 25 + 50 / 3}', 
		 buttonValueB: 'T', buttonLabelB: '\\\\grp{\\\\frac{\\\\str{(34 + 25 + 50)}}{\\\\str{3}}}', 
		 buttonValueC: 'F', buttonLabelC: '\\\\str{3 • (34 + 25 + 50)}', 
		 buttonValueD: 'T', buttonLabelD: '\\\\str{(34 + 25 + 50) / 3}', 
		 help: '\\\\rowgrp{\\\\row{\\\\str{The expression can be expressed as either:}}}{\\\\row{\\\\grp{\\\\frac{\\\\str{(34 + 25 + 50)}}{\\\\str{3}}}}}{\\\\row{\\\\str{or}}}{\\\\row{\\\\str{(34 + 25 + 50) / 3}}}', 
		 template: 'expressions' },
        // problem 15
		{instructions: 'In a two-week period, two police officers each gave out 4 traffic tickets, three police officers each gave out 5 tickets, and four officers each gave out 3 tickets. How many traffic tickets did these officers give in this two-week period?',
	     buttonValueA: 'F', buttonLabelA: '\\\\str{2 [2 (4) + 3 (5) + 4 (3)]}', 
		 buttonValueB: 'F', buttonLabelB: '\\\\grp{\\\\frac{\\\\str{2 (4) + 3 (5) + 4 (3)}}{\\\\str{2}}}', 
		 buttonValueC: 'F', buttonLabelC: '\\\\str{2 • [2 (4) + 3 (5) + 4 (3)]}', 
		 buttonValueD: 'T', buttonLabelD: '\\\\str{2 (4) + 3 (5) + 4 (3)}', 
		 help: '\\\\rowgrp{\\\\row{\\\\str{The expression can be expressed as:}}}{\\\\row{\\\\str{2 (4) + 3 (5) + 4 (3)}}}', 
		 template: 'expressions' },
        // problem 16
		{instructions: 'In a two-week period, three police officers each gave out 4 traffic tickets, two police officers each gave out 5 tickets, and three officers each gave out 3 tickets. If the average fine for each ticket was $45, how much money were the traffic violators made to pay?',
	     buttonValueA: 'F', buttonLabelA: '\\\\str{[3 (4) + 2 (5) + 3 (3)] / 45}', 
		 buttonValueB: 'F', buttonLabelB: '\\\\grp{\\\\frac{\\\\str{3 (4) + 2 (5) + 3 (3)}}{\\\\str{45}}}', 
		 buttonValueC: 'T', buttonLabelC: '\\\\str{[3 (4) + 2 (5) + 3 (3)] (45)}', 
		 buttonValueD: 'F', buttonLabelD: '\\\\grp{\\\\frac{\\\\str{[3 (4) + 2 (5) + 3 (3)] (45)}}{\\\\str{2}}}', 
		 help: '\\\\rowgrp{\\\\row{\\\\str{The expression can be expressed as:}}}{\\\\row{\\\\str{[3 (4) + 2 (5) + 3 (3)] (45)}}}', 
		 template: 'expressions' },
        // problem 17
		{instructions: 'Mac and his brother ran a small lumber business. They made three deliveries to customers last week--two cords of wood to one family, seven cords of wood to a hotel, and four cords to a restaurant. If the business profited $140 per cord of wood after expenses, and if Mac and his brother evenly split the profits, how much money did each man make last week?',
	     buttonValueA: 'T', buttonLabelA: '\\\\str{(2 + 7 + 4) (140) / 2}', 
		 buttonValueB: 'F', buttonLabelB: '\\\\str{(3) (140) / 2}', 
		 buttonValueC: 'T', buttonLabelC: '\\\\grp{\\\\frac{\\\\str{(140) (2 + 7 + 4)}}{\\\\str{2}}}', 
		 buttonValueD: 'F', buttonLabelD: '\\\\str{3 • (2 + 7 + 4) (140) / 2}', 
		 help: '\\\\rowgrp{\\\\row{\\\\str{The expression can be expressed as either:}}}{\\\\row{\\\\str{(2 + 7 + 4) (140) / 2}}}{\\\\row{\\\\str{or}}}{\\\\row{\\\\grp{\\\\frac{\\\\str{(140) (2 + 7 + 4)}}{\\\\str{2}}}}}', 
		 template: 'expressions' },
        // problem 18
		 {instructions: 'When playing the video game Survival, Sergei started with 50 points. He first earned 40 points for escaping bandits. He then had his total points tripled for finding a spring in the desert. However, when he ate a poisonous plant, he became sick for two days. He had to surrender 35 points for each day he was ill. At this point in the game, how many points did Sergei have?',
		 answer: '\\\\input{200}',
		 help: '{\\\\row{\\\\str{The expression can be expressed as:}}}{\\\\row{\\\\str{[(50 + 40) • 3] - 35 • 2}}}{\\\\row{\\\\str{or}}}{\\\\row{\\\\str{200}}}',
		 template: 'expressions2' },
        // problem 19
		 {instructions: 'Five hundred tickets were sold to a movie opening. Fifty people did not show. For those who did attend the opening, they were seated evenly in three separate sections in the theater. How many people sat in each section?',
		 answer: '\\\\input{150}',
		 help: '{\\\\row{\\\\str{The expression can be expressed as:}}}{\\\\row{\\\\str{(500 - 50) / 3}}}{\\\\row{\\\\str{or}}}{\\\\row{\\\\str{150}}}',
		 template: 'expressions2' },
        // problem 20
		 {instructions: 'It cost $2,500 for the community theater group to put on a play for three nights. Tickets cost $8 to see the play. 130 tickets were sold for the first night, 100 tickets the second night, and 170 tickets the third night. How much money did the theater group make?',
		 answer: '\\\\input{700}',
		 help: '{\\\\row{\\\\str{The expression can be expressed as:}}}{\\\\row{\\\\str{[(130 + 100 + 170) • 8] - 2500}}}{\\\\row{\\\\str{or}}}{\\\\row{\\\\str{700}}}',
		 template:'expressions2'}
		];
    return dataUtils.build(desc, template, data);
}]);
