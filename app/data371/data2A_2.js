/*global angular */

angular.module('mathSkills').value('data2A_2', {
title: '2A.2 Charts and Bar Graphs',
	path: '2A.2-charts-and-bar-graphs',
	children: [
		{
			title: 'Charts and Bar Graphs',
			children: [{
				title: 'Main Answer',
				children: [{
					problem: '\\col{\\row{\\str{Answer the following questions by using the chart below.}}}{\\row{\\str{\xA0}}}{\\row{\\str{Question 1:   Which two athletes had the best times to finish Race #1?}}}{\\row{\\str{\xA0}}}{\\row{\\chart{Time (in seconds) to Run 220 Meters}{6}{5}{["Athlete","Race #1","Race #2","Race #3","Race #4","Runner A","27","29","29","29","Runner B","30","28","28","26","Runner C","26","30","27","24","Runner D","24","28","30","28","Runner E","27","24","28","24"]}}}',
					answer: '\\css{\\butgrp{\\col{\\row{\\but{A}{T}}{\\str{\xA0 \xA0 C and D}}}{\\row{\\but{B}{F}}{\\str{\xA0 \xA0 A and B}}}{\\row{\\but{C}{F}}{\\str{\xA0 \xA0 B and C}}}{\\row{\\but{D}{F}}{\\str{\xA0 \xA0 D and E}}}}}{buttonsright chart-buttons-margin}}',
					controls: {
						"checkAnswer": true,
						"help": '\\str{A: Runners C & D ran fastest in Race #1}'
					}
				}]
			}]
		},
		{
			title: 'Charts and Bar Graphs',
			children: [{
				title: 'Main Answer',
				children: [{
					problem:'\\col{\\row{\\str{Answer the following questions by using the chart to below.}}}{\\row{\\str{\xA0}}}{\\row{\\str{Question 2:   Which athlete took the least amount of time to finish Race #2?}}}{\\row{\\str{\xA0}}}{\\chart{Time (in seconds) to Run 220 Meters}{6}{5}{["Athlete","Race #1","Race #2","Race #3","Race #4","Runner A","27","29","29","29","Runner B","30","28","28","26","Runner C","26","30","27","24","Runner D","24","28","30","28","Runner E","27","24","28","24"]}}' ,
					answer: '\\css{\\butgrp{\\col{\\row{\\but{A}{F}}{\\str{\xA0 \xA0 runner D}}}{\\row{\\but{B}{F}}{\\str{\xA0 \xA0 runner C}}}{\\row{\\but{C}{T}}{\\str{\xA0 \xA0 runner E}}}{\\row{\\but{D}{F}}{\\str{\xA0 \xA0 runner A}}}}}{buttonsright chart-buttons-margin}}',
					controls: {
						"checkAnswer": true,
						"help": '\\str{C: Runner E ran Race # 2 in the shortest amount of time}'
					}
				}]
			}]
		},
		{
			title: 'Charts and Bar Graphs',
			children: [{
				title: 'Main Answer',
				children: [{
					problem: '\\col{\\row{\\str{Answer the following questions by using the chart to below.}}}{\\row{\\str{\xA0}}}{\\row{\\str{Question 3:   How many of the runners had a time of 25 seconds or better in at least one race?}}}{\\row{\\str{\xA0}}}{\\chart{Time (in seconds) to Run 220 Meters}{6}{5}{["Athlete","Race #1","Race #2","Race #3","Race #4","Runner A","27","29","29","29","Runner B","30","28","28","26","Runner C","26","30","27","24","Runner D","24","28","30","28","Runner E","27","24","28","24"]}}',
					answer: '\\css{\\butgrp{\\col{\\row{\\but{A}{F}}{\\str{\xA0 \xA0 2 runners}}}{\\row{\\but{B}{F}}{\\str{\xA0 \xA0 0 runners}}}{\\row{\\but{C}{F}}{\\str{\xA0 \xA0 1 runner}}}{\\row{\\but{D}{T}}{\\str{\xA0 \xA0 3 runners}}}}}{buttonsright chart-buttons-margin}}',
					controls: {
						"checkAnswer": true,
						"help": '\\str{D: 3 runners ran at least one race under 25 seconds}'
					}
				}]
			}]
		},
		{
			title: 'Charts and Bar Graphs',
			children: [{
				title: 'Main Answer',
				children: [{
					problem: '\\col{\\row{\\str{Answer the following questions by using the chart below.}}}{\\row{\\str{Question 1:  How much more money does Nathan spend on gas than Anne?}}}{\\row{\\str{\xA0}}}{\\row{\\chart{Utility Bill for Gas and Electricity}{5}{5}{["Student","Therms of Gas Used","Cost of Gas","Kilowatt Hours of Electricity Used","Cost of Electricity","Anne","18","$26","188","$41","Travis","10","$14","183","$40","Nathan","20","$28","261","$56","Sondra","12","$17","251","$54"]}}}',
					answer: '\\css{\\row{\\str{$}}{\\input{2}}}{buttonsright chart-buttons-margin}}',
					controls: {
						"checkAnswer": true,
						"help": '\\str{Nathan spends $2 more than Anne on gas}'
					}
				}]
			}]
		},
		{
			title: 'Charts and Bar Graphs',
			children: [{
				title: 'Main Answer',
				children: [{
					problem: '\\col{\\row{\\str{Answer the following questions by using the chart below.}}}{\\row{\\str{Question 2:    How much more money does Nathan spend on electricity than on gas?}}}{\\row{\\str{\xA0}}}{\\row{\\chart{Utility Bill for Gas and Electricity}{5}{5}{["Student","Therms of Gas Used","Cost of Gas","Kilowatt Hours of Electricity Used","Cost of Electricity","Anne","18","$26","188","$41","Travis","10","$14","183","$40","Nathan","20","$28","261","$56","Sondra","12","$17","251","$54"]}}}',
					answer: '\\css{\\col{\\row{\\str{$}}{\\input{28}}}}{buttonsright chart-buttons-margin}}',
					controls: {
						"checkAnswer": true,
						"help": '\\col{\\row{\\str{Nathan spends $28 more on electricity than he spends on gas}}}{\\row{\\str{$56 - $28 = $28 }}}'
					}
				}]
			}]
		},
		{
			title: 'Charts and Bar Graphs',
			children: [{
				title: 'Main Answer',
				children: [{
					problem: '\\col{\\row{\\str{Answer the following questions by using the chart below.}}}{\\row{\\str{Question 3:    How much more money does Nathan spend on the total utility bill (the cost of both gas and electricity) than Anne?}}}{\\row{\\str{\xA0}}}{\\row{\\chart{Utility Bill for Gas and Electricity}{5}{5}{["Student","Therms of Gas Used","Cost of Gas","Kilowatt Hours of Electricity Used","Cost of Electricity","Anne","18","$26","188","$41","Travis","10","$14","183","$40","Nathan","20","$28","261","$56","Sondra","12","$17","251","$54"]}}}',
					answer: '\\css{\\col{\\row{\\str{$}}{\\input{17}}}}{buttonsright chart-buttons-margin}}',
					controls: {
						"checkAnswer": true,
						"help": '\\str{Nathan spends a total of $84, $17 more than Anne.}'
					}
				}]
			}]
		},
		{
			title: 'Charts and Bar Graphs',
			children: [{
				title: 'Main Answer',
				children: [{
					problem: '\\col{\\row{\\str{Answer the following questions by using the chart below.}}}{\\row{\\str{\xA0}}}{\\row{\\str{Question 1:  For the four students, which student spent the most for Phone and Gas?}}}{\\row{\\chart{}{5}{5}{["Student","Phone","Internet","Cable TV","Gas","Sam","41","16","40","69","Jerry","64","60","59","65","Maribel","94","67","67","99","Yvonne","41","69","34","113"]}}}',
					answer: '\\css{\\butgrp{\\col{\\row{\\but{A}{F}}{\\str{\xA0 \xA0 Sam}}}{\\row{\\but{B}{F}}{\\str{\xA0 \xA0 Jerry}}}{\\row{\\but{C}{T}}{\\str{\xA0 \xA0 Maribel}}}{\\row{\\but{D}{F}}{\\str{\xA0 \xA0 Yvonne}}}}}{buttonsright chart-buttons-margin}}',
					controls: {
						"checkAnswer": true,
						"help": '\\str{Maribel spent the most on Phone and Gas expenses.}'
					}
				}]
			}]
		},
		{
			//problem 8
			title: 'Charts and Bar Graphs',
			children: [{
				title: 'Main Answer',
				  children: [{
					problem: '\\butgrp{\\col{\\row{\\str{Answer the following questions by using the chart below.}}}{\\row{\\str{\xA0}}}{\\row{\\str{Question 2:  Which service given in these four choices is the most expensive for the four students all together?}}}{\\row{\\chart{}{5}{5}{["Student","Phone","Internet","Cable TV","Gas","Sam","41","16","40","69","Jerry","64","60","59","65","Maribel","94","67","67","99","Yvonne","41","69","34","113"]}}}}',
					answer: '\\css{\\butgrp{\\col{\\row{\\but{A}{F}}{\\str{\xA0 \xA0 Phone}}}{\\row{\\but{B}{F}}{\\str{\xA0 \xA0 Internet}}}{\\row{\\but{C}{F}}{\\str{\xA0 \xA0 Cable TV}}}{\\row{\\but{D}{T}}{\\str{\xA0 \xA0 Gas}}}}}{buttonsright chart-buttons-margin}}',
					controls: {
						"checkAnswer": true,
						"help": '\\str{The four students together spent the most on Gas.}'
					}
				}]
			}]
		},
		{
			title: 'Charts and Bar Graphs',
			children: [{
			   title: 'Main Answer',
			   children: [{
					problem: '\\col{\\row{\\str{Answer the following questions by using the chart below.}}}{\\row{\\str{\xA0}}}{\\row{\\str{Question 3:  Which service given in these four choices is the least expensive for the four students all together?}}}{\\row{\\str{\xA0}}}{\\row{\\chart{}{5}{5}{["Student","Phone","Internet","Cable TV","Gas","Sam","41","16","40","69","Jerry","64","60","59","65","Maribel","94","67","67","99","Yvonne","41","69","34","113"]}}}',
					answer: '\\css{\\butgrp{\\col{\\row{\\but{A}{F}}{\\str{\xA0 \xA0 Phone}}}{\\row{\\but{B}{F}}{\\str{\xA0 \xA0 Internet}}}{\\row{\\but{C}{T}}{\\str{\xA0 \xA0 Cable TV}}}{\\row{\\but{D}{F}}{\\str{\xA0 \xA0 Gas}}}}}{buttonsright chart-buttons-margin}}',
					controls: {
						"checkAnswer": true,
						"help": '\\str{The lowest expense for the four students together is Cable TV.}'
					}
				}]
			}]
		},
		{
			//problem 10
			title: 'Charts and Bar Graphs',
			children: [{
				title: 'Main Answer',
				children: [{
					problem: '\\col{\\row{\\str{What is the label for the vertical axis?}}}{\\row{\\graph{Hourly Wages at Budget Warehouse}{[ ["A", 6], ["B", 7], ["C", 12], ["D", 15], ["E", 22], ["Manager", 27] ]}{30}{Hourly Wage}}',
					answer: '\\css{\\butgrp{\\col{\\row{\\str{\xA0}}}{\\row{\\str{\xA0}}}{\\row{\\but{A}{F}}{\\css{\\str{Employee Classification}}{button-label-margin}}}{\\row{\\but{B}{F}}{\\css{\\str{Hourly Wages for Employees}}{button-label-margin}}}{\\row{\\but{C}{T}}{\\css{\\str{Hourly Wage}}{button-label-margin}}}{\\row{\\but{D}{F}}{\\css{\\str{Hourly Wages at Budget Warehouse}}{button-label-margin}}}}}{buttonsright}',
					controls: {
						"checkAnswer": true,
						"help": '\\str{The label for the vertical axis is Hourly Wages}'
					}
				}]
			}]
		},
		{
			//problem 11
			title: 'Charts and Bar Graphs',
			children: [{
				title: 'Main Answer',
				children: [{
					problem: '\\col{\\row{\\str{Approximately how much more money per hour does a Class E worker make than Class A worker?}}}{\\row{\\str{\xA0}}}{\\row{\\str{\xA0}}}{\\row{\\graph{Hourly Wages at Budget Warehouse}{[ ["A", 6], ["B", 7], ["C", 12], ["D", 15], ["E", 22], ["Manager", 27] ]}{30}{Hourly Wage}}}}',
					answer: '\\css{\\butgrp{\\col{\\row{\\str{\xA0}}}{\\row{\\but{A}{F}}{\\css{\\str{$20.00 more}}{button-label-margin}}}{\\row{\\but{B}{T}}{\\css{\\str{$16.00 more}}{button-label-margin}}}{\\row{\\but{C}{F}}{\\css{\\str{$10.00 more}}{button-label-margin}}}{\\row{\\but{D}{F}}{\\css{\\str{$5.00 more}}{button-label-margin}}}}}{buttonsright}',
					controls: {
						"checkAnswer": true,
						"help": '\\str{Class E workers make $16/hour more than Class A workers.}'
					}
				}]
			}]
		},
		{
			title: 'Charts and Bar Graphs',
			children: [{
				title: 'Main Answer',
				children: [{
					problem: '\\col{\\row{\\str{If there are 100 Class A workers, 50 class B workers, 30 class C workers, 10 class D workers, 5 class E workers, and 2 managers, how many employees earn $15 an hour or more?}}}{\\row{\\str{\xA0}}}{\\row{\\graph{Hourly Wages at Budget Warehouse}{[ ["A", 6], ["B", 7], ["C", 12], ["D", 15], ["E", 22], ["Manager", 27] ]}{30}{Hourly Wage}}}',
					answer: '\\css{\\butgrp{\\col{\\row{\\str{\xA0}}}{\\row{\\but{A}{F}}{\\css{\\str{7 employees}}{button-label-margin}}}{\\row{\\but{B}{F}}{\\css{\\str{15 employees}}{button-label-margin}}}{\\row{\\but{C}{T}}{\\css{\\str{17 employees}}{button-label-margin}}}{\\row{\\but{D}{F}}{\\css{\\str{180 employees}}{button-label-margin}}}}}{buttonsright}',
					controls: {
						"checkAnswer": true,
						"help": '\\str{There are a total of 17 people who are Class D, Class E or Manager.}'
					}
				}]
			}]
		},
		{
			title: 'Charts and Bar Graphs',
			children: [{
				title: 'Main Answer',
				children: [{
					problem: '\\col{\\row{\\str{What is the label for the vertical axis?}}}{\\row{\\str{\xA0}}}{\\row{\\graph{Deer Survey in Sonoma County}{[ ["January", 220], ["April", 370], ["July", 445], ["October", 300]]}{500}{Number of Deer Counted}}}',
					answer: '\\css{\\butgrp{\\col{\\row{\\str{\xA0}}}{\\row{\\but{A}{F}}{\\css{\\str{Months}}{button-label-margin}}}{\\row{\\but{B}{F}}{\\css{\\str{Deer Survey in Sonoma County}}{button-label-margin}}}{\\row{\\but{C}{F}}{\\css{\\str{Deer Population}}{button-label-margin}}}{\\row{\\but{D}{T}}{\\css{\\str{Number of Deer Counted}}{button-label-margin}}}}}{buttonsright}',
					controls: {
						"checkAnswer": true,
						"help": '\\str{The label of the vertical axis is Number of Deer Counted.}'
					}
				}]
			}]
		},
		{
			title: 'Charts and Bar Graphs',
			children: [{
				title: 'Main Answer',
				children: [{
					problem: '\\col{\\row{\\str{Approximately how many deer were counted in July?}}}{\\row{\\str{\xA0}}}{\\row{\\graph{Deer Survey in Sonoma County}{[ ["January", 220], ["April", 370], ["July", 445], ["October", 300]]}{500}{Number of Deer Counted}}}',
					answer: '\\css{\\butgrp{\\col{\\row{\\but{A}{T}}{\\css{\\str{445 Deer}}{button-label-margin}}}{\\row{\\but{B}{F}}{\\css{\\str{380 Deer}}{button-label-margin}}}{\\row{\\but{C}{F}}{\\css{\\str{410 Deer}}{button-label-margin}}}{\\row{\\but{D}{F}}{\\css{\\str{300 Deer}}{button-label-margin}}}}}{buttonsright}',
					controls: {
						"checkAnswer": true,
						"help": '\\str{Approximately 445 deer were counted in July.}'
					}
				}]
			}]
		},
		{
			//problem 15
			title: 'Charts and Bar Graphs',
			children: [{
				title: 'Main Answer',
				children: [{
					problem: '\\col{\\row{\\str{Approximately how many deer were counted in the first two periods of the survey (January and April)?}}}{\\row{\\str{\xA0}}}{\\row{\\graph{Deer Survey in Sonoma County}{[ ["January", 220], ["April", 370], ["July", 445], ["October", 300]]}{500}{Number of Deer Counted}}}',
					answer: '\\css{\\butgrp{\\col{\\row{\\str{\xA0}}}{\\row{\\but{A}{F}}{\\css{\\str{450 Deer}}{button-label-margin}}}{\\row{\\but{B}{F}}{\\css{\\str{680 Deer}}{button-label-margin}}}{\\row{\\but{C}{T}}{\\css{\\str{590 Deer}}{button-label-margin}}}{\\row{\\but{D}{F}}{\\css{\\str{500 Deer}}{button-label-margin}}}}}{buttonsright}',
					controls: {
						"checkAnswer": true,
						"help": '\\str{There were approximately 590 deer counted in January and April.}'
					}
				}]
			}]
		},
		{
			title: 'Charts and Bar Graphs',
			children: [{
				title: 'Main Answer',
				children: [{
					problem: '\\col{\\row{\\str{Question 1: What is the increment for the horizontal axis?}}}{\\row{\\str{\xA0}}}{\\row{\\horgraph{Country A:  Food Production and Population}{[[0, "1965"], [2, "1965"], null, [0, "1985"], [3, "1985"], null, [0, "2005"], [11, "2005"], null, [0, "2025"],[22, "2025"]]}{Population of Country A}{[[0, "1962"], [3, "1962"], null, [0, "1982"], [5, "1982"], null, [0, "2002"], [9, "2002"], null, [0, "2022"],[18, "2022"]]}{Population Country A can Feed}{Years}{Number (in millions)}}}{\\row{\\str{\xA0}}}',
					answer: '\\css{\\butgrp{\\col{\\row{\\but{A}{F}}{\\css{\\str{20 years}}{button-label-margin}}}{\\row{\\but{B}{F}}{\\css{\\str{10 years}}{button-label-margin}}}{\\row{\\but{C}{F}}{\\css{\\str{10 million}}{button-label-margin}}}{\\row{\\but{D}{T}}{\\css{\\str{5 million}}{button-label-margin}}}}}{buttonsright}',
					controls: {
						"checkAnswer": true,
						"help": '\\str{The increment for the horizontal axis is 5 million.}'
					}
				}]
			}]
		},
		{
			title: 'Charts and Bar Graphs',
			children: [{
				title: 'Main Answer',
				children: [{
					problem: '\\col{\\row{\\str{Question 2:  Approximately what number represents the population of Country A in 2005?}}}{\\row{\\str{\xA0}}}{\\row{\\str{\xA0}}}{\\row{\\horgraph{Country A:  Food Production and Population}{[[0, "1965"], [2, "1965"], null, [0, "1985"], [3, "1985"], null, [0, "2005"], [11, "2005"], null, [0, "2025"],[22, "2025"]]}{Population of Country A}{[[0, "1962"], [3, "1962"], null, [0, "1982"], [5, "1982"], null, [0, "2002"], [9, "2002"], null, [0, "2022"],[18, "2022"]]}{Population Country A can Feed}{Years}{Number (in millions)}}}',
					answer: '\\css{\\butgrp{\\col{\\row{\\but{A}{F}}{\\css{\\str{22 million}}{button-label-margin}}}{\\row{\\but{B}{F}}{\\css{\\str{18 million}}{button-label-margin}}}{\\row{\\but{C}{T}}{\\css{\\str{11 million}}{button-label-margin}}}{\\row{\\but{D}{F}}{\\css{\\str{9 million}}{button-label-margin}}}}}{buttonsright}',
					controls: {
						"checkAnswer": true,
						"help": '\\str{The population of Country A in 2005 was approximately 11 million people.}'
					}
				}]
			}]
		},
		{
			title: 'Charts and Bar Graphs',
			children: [{
				title: 'Main Answer',
				children: [{
					problem: '\\col{\\row{\\str{Question 3: Approximately what number represents the increase in population from 1965 to 1985?}}}{\\row{\\str{\xA0}}}{\\row{\\str{\xA0}}}{\\row{\\horgraph{Country A:  Food Production and Population}{[[0, "1965"], [2, "1965"], null, [0, "1985"], [3, "1985"], null, [0, "2005"], [11, "2005"], null, [0, "2025"],[22, "2025"]]}{Population of Country A}{[[0, "1962"], [3, "1962"], null, [0, "1982"], [5, "1982"], null, [0, "2002"], [9, "2002"], null, [0, "2022"],[18, "2022"]]}{Population Country A can Feed}{Years}{Number (in millions)}}}',
					answer: '\\css{\\butgrp{\\col{\\row{\\but{A}{F}}{\\css{\\str{2 million}}{button-label-margin}}}{\\row{\\but{B}{F}}{\\css{\\str{3 million}}{button-label-margin}}}{\\row{\\but{C}{F}}{\\css{\\str{4 million}}{button-label-margin}}}{\\row{\\but{D}{T}}{\\css{\\str{1 million}}{button-label-margin}}}}}{buttonsright}',
					controls: {
						"checkAnswer": true,
						"help": '\\str{Bwtween 1965 and 1985, the population increased approximately by 1 million.}'
					}
				}]
			}]
		},
	]
});
