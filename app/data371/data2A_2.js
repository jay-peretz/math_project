/*global angular */

angular.module('mathSkills').service('data2A_2', ['dataUtils', function (dataUtils) {
    var desc = {
			title: '2A.2 Charts and Bar Graphs',
			path: '2A.2-charts-and-bar-graphs',
            children: []
        },
        template = {
			first: {
					title: 'Charts and Bar Graphs',
					children: [{
						title: 'Main Answer',
						children: [{
							problem: '\\col{\\row{\\str{Answer the following questions by using the chart below.}}}{\\row{\\str{\xA0}}}{\\row{\\str{Question 1:   Which two athletes had the best times to finish Race #1?}}}{\\row{\\str{\xA0}}}{\\row{\\chart{Time (in seconds) to Run 220 Meters}{6}{5}{["Athlete","Race #1","Race #2","Race #3","Race #4","Runner A","27","29","29","29","Runner B","30","28","28","26","Runner C","26","30","27","24","Runner D","24","28","30","28","Runner E","27","24","28","24"]}}}',
							answer: '\\css{\\butgrp{\\col{\\row{\\but{A}{T}}{\\grp{\\str{\xA0 \xA0 C and D}}}}{\\row{\\but{B}{F}}{\\grp{\\str{\xA0 \xA0 A and B}}}}{\\row{\\but{C}{F}}{\\grp{\\str{\xA0 \xA0 B and C}}}}{\\row{\\but{D}{F}}{\\grp{\\str{\xA0 \xA0 D and E}}}}}}{buttonsright chart-buttons-margin}}',
							controls: {
								"checkAnswer": true,
								"help": '\\rowgrp{\\row{\\str{\xA0}}}{\\row{\\str{Runners C & D ran fastest in Race #1}}}{\\row{\\html{&nbsp;}}}{\\css{\\row{\\str{Answer: \xA0 }}{\\str{ A \xA0 }}}{help-answer-text}}{\\row{\\html{&nbsp;}}}}'
							}
						}]
					}]
				},
			second: {
					title: 'Charts and Bar Graphs',
					children: [{
						title: 'Main Answer',
						children: [{
							problem:'\\col{\\row{\\str{Answer the following questions by using the chart to below.}}}{\\row{\\str{\xA0}}}{\\row{\\str{Question 2:   Which athlete took the least amount of time to finish Race #2?}}}{\\row{\\str{\xA0}}}{\\chart{Time (in seconds) to Run 220 Meters}{6}{5}{["Athlete","Race #1","Race #2","Race #3","Race #4","Runner A","27","29","29","29","Runner B","30","28","28","26","Runner C","26","30","27","24","Runner D","24","28","30","28","Runner E","27","24","28","24"]}}' ,
							answer: '\\css{\\butgrp{\\col{\\row{\\but{A}{F}}{\\grp{\\str{\xA0 \xA0 runner D}}}}{\\row{\\but{B}{F}}{\\grp{\\str{\xA0 \xA0 runner C}}}}{\\row{\\but{C}{T}}{\\grp{\\str{\xA0 \xA0 runner E}}}}{\\row{\\but{D}{F}}{\\grp{\\str{\xA0 \xA0 runner A}}}}}}{buttonsright chart-buttons-margin}}',
							controls: {
								"checkAnswer": true,
								"help": '\\rowgrp{\\row{\\str{\xA0}}}{\\row{\\str{Runner E ran Race # 2 in the shortest amount of time}}}{\\row{\\html{&nbsp;}}}{\\css{\\row{\\str{Answer: \xA0 }}{\\str{ C \xA0 }}}{help-answer-text}}{\\row{\\html{&nbsp;}}}}'
							}
						}]
					}]
				},
			third: {
					title: 'Charts and Bar Graphs',
					children: [{
						title: 'Main Answer',
						children: [{
							problem: '\\col{\\row{\\str{Answer the following questions by using the chart to below.}}}{\\row{\\str{\xA0}}}{\\row{\\str{Question 3:   How many of the runners had a time of 25 seconds or better in at least one race?}}}{\\row{\\str{\xA0}}}{\\chart{Time (in seconds) to Run 220 Meters}{6}{5}{["Athlete","Race #1","Race #2","Race #3","Race #4","Runner A","27","29","29","29","Runner B","30","28","28","26","Runner C","26","30","27","24","Runner D","24","28","30","28","Runner E","27","24","28","24"]}}',
							answer: '\\css{\\butgrp{\\col{\\row{\\but{A}{F}}{\\grp{\\str{\xA0 \xA0 2 runners}}}}{\\row{\\but{B}{F}}{\\grp{\\str{\xA0 \xA0 0 runners}}}}{\\row{\\but{C}{F}}{\\grp{\\str{\xA0 \xA0 1 runner}}}}{\\row{\\but{D}{T}}{\\grp{\\str{\xA0 \xA0 3 runners}}}}}}{buttonsright chart-buttons-margin}}',
							controls: {
								"checkAnswer": true,
								"help": '\\rowgrp{\\row{\\str{\xA0}}}{\\row{\\str{3 runners ran at least one race under 25 seconds}}}{\\row{\\html{&nbsp;}}}{\\css{\\row{\\str{Answer: \xA0 }}{\\str{ D \xA0 }}}{help-answer-text}}{\\row{\\html{&nbsp;}}}}'
							}
						}]
					}]
				},
			fourth: {
					title: 'Charts and Bar Graphs',
					children: [{
						title: 'Main Answer',
						children: [{
							problem: '\\col{\\row{\\str{Answer the following questions by using the chart below.}}}{\\html{&nbsp;}}{\\row{\\str{Question 1:  How much more money does Nathan spend on gas than Anne?}}}{\\row{\\str{\xA0}}}{\\row{\\chart{Utility Bill for Gas and Electricity}{5}{5}{["Student","Therms of Gas Used","Cost of Gas","Kilowatt Hours of Electricity Used","Cost of Electricity","Anne","18","$26","188","$41","Travis","10","$14","183","$40","Nathan","20","$28","261","$56","Sondra","12","$17","251","$54"]}}}',
							answer: '\\css{\\row{\\str{$}}{\\input{2}}}{buttonsright chart-buttons-margin}}',
							controls: {
								"checkAnswer": true,
								"help": '\\rowgrp{\\row{\\str{\xA0}}}{\\row{\\str{Nathan spends $2 more than Anne on gas}}}{\\row{\\html{&nbsp;}}}{\\css{\\row{\\str{Answer: \xA0 }}{\\str{ $2 \xA0 }}}{help-answer-text}}{\\row{\\html{&nbsp;}}}}'
							}
						}]
					}]
				},
			fifth: {
					title: 'Charts and Bar Graphs',
					children: [{
						title: 'Main Answer',
						children: [{
							problem: '\\col{\\row{\\str{Answer the following questions by using the chart below.}}}{\\html{&nbsp;}}{\\row{\\str{Question 2:    How much more money does Nathan spend on electricity than on gas?}}}{\\row{\\str{\xA0}}}{\\row{\\chart{Utility Bill for Gas and Electricity}{5}{5}{["Student","Therms of Gas Used","Cost of Gas","Kilowatt Hours of Electricity Used","Cost of Electricity","Anne","18","$26","188","$41","Travis","10","$14","183","$40","Nathan","20","$28","261","$56","Sondra","12","$17","251","$54"]}}}',
							answer: '\\css{\\col{\\row{\\str{$}}{\\input{28}}}}{buttonsright chart-buttons-margin}}',
							controls: {
								"checkAnswer": true,
								"help": '\\rowgrp{\\row{\\str{\xA0}}}{\\row{\\str{Nathan spends $28 more on electricity than he spends on gas ($56 - $28 = $28)}}}{\\row{\\html{&nbsp;}}}{\\css{\\row{\\str{Answer: \xA0 }}{\\str{ $28 \xA0 }}}{help-answer-text}}{\\row{\\html{&nbsp;}}}}'
							}
						}]
					}]
				},
			sixth: {
					title: 'Charts and Bar Graphs',
					children: [{
						title: 'Main Answer',
						children: [{
							problem: '\\col{\\row{\\str{Answer the following questions by using the chart below.}}}{\\html{&nbsp;}}{\\row{\\str{Question 3:    How much more money does Nathan spend on the total utility bill (the cost of both gas and electricity) than Anne?}}}{\\row{\\str{\xA0}}}{\\row{\\chart{Utility Bill for Gas and Electricity}{5}{5}{["Student","Therms of Gas Used","Cost of Gas","Kilowatt Hours of Electricity Used","Cost of Electricity","Anne","18","$26","188","$41","Travis","10","$14","183","$40","Nathan","20","$28","261","$56","Sondra","12","$17","251","$54"]}}}',
							answer: '\\css{\\col{\\row{\\str{$}}{\\input{17}}}}{buttonsright chart-buttons-margin}}',
							controls: {
								"checkAnswer": true,
								"help": "\\rowgrp{\\row{\\str{\xA0}}}{\\row{\\str{Nathan total is $28 + $56 = $84}}}{\\row{\\str{Anne's total is $26 + $41 = $67}}}{\\row{\\str{Nathan spends $84 - $67 = $17 more than Anne}}}{\\row{\\html{&nbsp;}}}{\\css{\\row{\\str{Answer: \xA0 }}{\\str{ $17 \xA0 }}}{help-answer-text}}{\\row{\\html{&nbsp;}}}}"
							}
						}]
					}]
				},
			seventh: {
					title: 'Charts and Bar Graphs',
					children: [{
						title: 'Main Answer',
						children: [{
							problem: '\\col{\\row{\\str{Answer the following questions by using the chart below.}}}{\\row{\\str{\xA0}}}{\\row{\\str{Question 1:  For the four students, which student spent the most for Phone and Gas?}}}{\\html{&nbsp;}}{\\row{\\chart{}{5}{5}{["Student","Phone","Internet","Cable TV","Gas","Sam","41","16","40","69","Jerry","64","60","59","65","Maribel","94","67","67","99","Yvonne","41","69","34","113"]}}}',
							answer: '\\css{\\butgrp{\\col{\\row{\\but{A}{F}}{\\grp{\\str{\xA0 \xA0 Sam}}}}{\\row{\\but{B}{F}}{\\grp{\\str{\xA0 \xA0 Jerry}}}}{\\row{\\but{C}{T}}{\\grp{\\str{\xA0 \xA0 Maribel}}}}{\\row{\\but{D}{F}}{\\grp{\\str{\xA0 \xA0 Yvonne}}}}}}{buttonsright chart-buttons-margin}}',
							controls: {
								"checkAnswer": true,
								"help": '\\rowgrp{\\row{\\str{\xA0}}}{\\row{\\str{Maribel spent the most on Phone and Gas expenses.}}}{\\row{\\html{&nbsp;}}}{\\css{\\row{\\str{Answer: \xA0 }}{\\str{ C \xA0 }}}{help-answer-text}}{\\row{\\html{&nbsp;}}}}'
							}
						}]
					}]
				},
			eighth: {
					//problem 8
					title: 'Charts and Bar Graphs',
					children: [{
						title: 'Main Answer',
						  children: [{
							problem: '\\butgrp{\\col{\\row{\\str{Answer the following questions by using the chart below.}}}{\\row{\\str{\xA0}}}{\\row{\\str{Question 2:  Which service given in these four choices is the most expensive for the four students all together?}}}{\\html{&nbsp;}}{\\row{\\chart{}{5}{5}{["Student","Phone","Internet","Cable TV","Gas","Sam","41","16","40","69","Jerry","64","60","59","65","Maribel","94","67","67","99","Yvonne","41","69","34","113"]}}}}',
							answer: '\\css{\\butgrp{\\col{\\row{\\but{A}{F}}{\\grp{\\str{\xA0 \xA0 Phone}}}}{\\row{\\but{B}{F}}{\\grp{\\str{\xA0 \xA0 Internet}}}}{\\row{\\but{C}{F}}{\\grp{\\str{\xA0 \xA0 Cable TV}}}}{\\row{\\but{D}{T}}{\\grp{\\str{\xA0 \xA0 Gas}}}}}}{buttonsright chart-buttons-margin}}',
							controls: {
								"checkAnswer": true,
								"help": '\\rowgrp{\\row{\\str{\xA0}}}{\\row{\\str{The four students together spent the most on Gas.}}}{\\row{\\html{&nbsp;}}}{\\css{\\row{\\str{Answer: \xA0 }}{\\str{ D \xA0 }}}{help-answer-text}}{\\row{\\html{&nbsp;}}}}'
							}
						}]
					}]
				},
			nineth: {
					title: 'Charts and Bar Graphs',
					children: [{
					   title: 'Main Answer',
					   children: [{
							problem: '\\col{\\row{\\str{Answer the following questions by using the chart below.}}}{\\row{\\str{\xA0}}}{\\row{\\str{Question 3:  Which service given in these four choices is the least expensive for the four students all together?}}}{\\row{\\str{\xA0}}}{\\row{\\chart{}{5}{5}{["Student","Phone","Internet","Cable TV","Gas","Sam","41","16","40","69","Jerry","64","60","59","65","Maribel","94","67","67","99","Yvonne","41","69","34","113"]}}}',
							answer: '\\css{\\butgrp{\\col{\\row{\\but{A}{F}}{\\grp{\\str{\xA0 \xA0 Phone}}}}{\\row{\\but{B}{F}}{\\grp{\\str{\xA0 \xA0 Internet}}}}{\\row{\\but{C}{T}}{\\grp{\\str{\xA0 \xA0 Cable TV}}}}{\\row{\\but{D}{F}}{\\grp{\\str{\xA0 \xA0 Gas}}}}}}{buttonsright chart-buttons-margin}}',
							controls: {
								"checkAnswer": true,
								"help": '\\rowgrp{\\row{\\str{\xA0}}}{\\row{\\str{The lowest expense for the four students together is Cable TV.}}}{\\row{\\html{&nbsp;}}}{\\css{\\row{\\str{Answer: \xA0 }}{\\str{ C \xA0 }}}{help-answer-text}}{\\row{\\html{&nbsp;}}}}'
							}
						}]
					}]
				},
			tenth: {
					//problem 10
					title: 'Charts and Bar Graphs',
					children: [{
						title: 'Main Answer',
						children: [{
							problem: '\\col{\\row{\\str{What is the label for the vertical axis?}}}{\\html{&nbsp;}}{\\row{\\graph{Hourly Wages at Budget Warehouse}{[ ["A", 6], ["B", 7], ["C", 12], ["D", 15], ["E", 22], ["Manager", 27] ]}{30}{Hourly Wage}}',
							answer: '\\css{\\butgrp{\\col{\\row{\\str{\xA0}}}{\\row{\\str{\xA0}}}{\\row{\\but{A}{F}}{\\css{\\grp{\\str{Employee Classification}}}{button-label-margin}}}{\\row{\\but{B}{F}}{\\css{\\grp{\\str{Hourly Wages for Employees}}}{button-label-margin}}}{\\row{\\but{C}{T}}{\\css{\\grp{\\str{Hourly Wage}}}{button-label-margin}}}{\\row{\\but{D}{F}}{\\css{\\grp{\\str{Hourly Wages at Budget Warehouse}}}{button-label-margin}}}}}{buttonsright}',
							controls: {
								"checkAnswer": true,
								"help": '\\rowgrp{\\row{\\str{\xA0}}}{\\row{\\str{The label for the vertical axis is "Hourly Wages".}}}{\\row{\\html{&nbsp;}}}{\\css{\\row{\\str{Answer: \xA0 }}{\\str{ C \xA0 }}}{help-answer-text}}{\\row{\\html{&nbsp;}}}}'
							}
						}]
					}]
				},
			eleventh: {
					//problem 11
					title: 'Charts and Bar Graphs',
					children: [{
						title: 'Main Answer',
						children: [{
							problem: '\\col{\\row{\\str{Approximately how much more money per hour does a Class E worker make than Class A worker?}}}{\\row{\\str{\xA0}}}{\\row{\\graph{Hourly Wages at Budget Warehouse}{[ ["A", 6], ["B", 7], ["C", 12], ["D", 15], ["E", 22], ["Manager", 27] ]}{30}{Hourly Wage}}}}',
							answer: '\\css{\\butgrp{\\col{\\row{\\str{\xA0}}}{\\row{\\but{A}{F}}{\\css{\\grp{\\str{$20.00 more}}}{button-label-margin}}}{\\row{\\but{B}{T}}{\\css{\\grp{\\str{$16.00 more}}}{button-label-margin}}}{\\row{\\but{C}{F}}{\\css{\\grp{\\str{$10.00 more}}}{button-label-margin}}}{\\row{\\but{D}{F}}{\\css{\\grp{\\str{$5.00 more}}}{button-label-margin}}}}}{buttonsright}',
							controls: {
								"checkAnswer": true,
								"help": '\\rowgrp{\\row{\\str{\xA0}}}{\\row{\\str{Class E workers make $16/hour more than Class A workers.}}}{\\row{\\html{&nbsp;}}}{\\css{\\row{\\str{Answer: \xA0 }}{\\str{ B \xA0 }}}{help-answer-text}}{\\row{\\html{&nbsp;}}}}'
							}
						}]
					}]
				},
			twelveth: {
					title: 'Charts and Bar Graphs',
					children: [{
						title: 'Main Answer',
						children: [{
							problem: '\\col{\\row{\\str{If there are 100 Class A workers, 50 class B workers, 30 class C workers, 10 class D workers, 5 class E workers, and 2 managers, how many employees earn $15 an hour or more?}}}{\\row{\\str{\xA0}}}{\\row{\\graph{Hourly Wages at Budget Warehouse}{[ ["A", 6], ["B", 7], ["C", 12], ["D", 15], ["E", 22], ["Manager", 27] ]}{30}{Hourly Wage}}}',
							answer: '\\css{\\butgrp{\\col{\\row{\\str{\xA0}}}{\\row{\\but{A}{F}}{\\css{\\grp{\\str{7 employees}}}{button-label-margin}}}{\\row{\\but{B}{F}}{\\css{\\grp{\\str{15 employees}}}{button-label-margin}}}{\\row{\\but{C}{T}}{\\css{\\grp{\\str{17 employees}}}{button-label-margin}}}{\\row{\\but{D}{F}}{\\css{\\grp{\\str{180 employees}}}{button-label-margin}}}}}{buttonsright}',
							controls: {
								"checkAnswer": true,
								"help": '\\rowgrp{\\row{\\str{\xA0}}}{\\row{\\str{There are a total of 17 people who are Class D, Class E or Manager.}}}{\\row{\\html{&nbsp;}}}{\\css{\\row{\\str{Answer: \xA0 }}{\\str{ C \xA0 }}}{help-answer-text}}{\\row{\\html{&nbsp;}}}}'
							}
						}]
					}]
				},
			thirteenth: {
					title: 'Charts and Bar Graphs',
					children: [{
						title: 'Main Answer',
						children: [{
							problem: '\\col{\\row{\\str{What is the label for the vertical axis?}}}{\\row{\\str{\xA0}}}{\\row{\\graph{Deer Survey in Sonoma County}{[ ["January", 220], ["April", 370], ["July", 445], ["October", 300]]}{500}{Number of Deer Counted}}}',
							answer: '\\css{\\butgrp{\\col{\\row{\\str{\xA0}}}{\\row{\\but{A}{F}}{\\css{\\grp{\\str{Months}}}{button-label-margin}}}{\\row{\\but{B}{F}}{\\css{\\grp{\\str{Deer Survey in Sonoma County}}}{button-label-margin}}}{\\row{\\but{C}{F}}{\\css{\\grp{\\str{Deer Population}}}{button-label-margin}}}{\\row{\\but{D}{T}}{\\css{\\grp{\\str{Number of Deer Counted}}}{button-label-margin}}}}}{buttonsright}',
							controls: {
								"checkAnswer": true,
								"help": '\\rowgrp{\\row{\\str{\xA0}}}{\\row{\\str{The label of the vertical axis is "Number of Deer Counted".}}}{\\row{\\html{&nbsp;}}}{\\css{\\row{\\str{Answer: \xA0 }}{\\str{ D \xA0 }}}{help-answer-text}}{\\row{\\html{&nbsp;}}}}'
		
							}
						}]
					}]
				},
			fourteenth: {
					title: 'Charts and Bar Graphs',
					children: [{
						title: 'Main Answer',
						children: [{
							problem: '\\col{\\row{\\str{Approximately how many deer were counted in July?}}}{\\row{\\str{\xA0}}}{\\row{\\graph{Deer Survey in Sonoma County}{[ ["January", 220], ["April", 370], ["July", 445], ["October", 300]]}{500}{Number of Deer Counted}}}',
							answer: '\\css{\\butgrp{\\col{\\row{\\but{A}{T}}{\\css{\\grp{\\str{445 Deer}}}{button-label-margin}}}{\\row{\\but{B}{F}}{\\css{\\grp{\\str{380 Deer}}}{button-label-margin}}}{\\row{\\but{C}{F}}{\\css{\\grp{\\str{410 Deer}}}{button-label-margin}}}{\\row{\\but{D}{F}}{\\css{\\grp{\\str{300 Deer}}}{button-label-margin}}}}}{buttonsright}',
							controls: {
								"checkAnswer": true,
								"help": '\\rowgrp{\\row{\\str{\xA0}}}{\\row{\\str{Approximately 445 deer were counted in July.}}}{\\row{\\html{&nbsp;}}}{\\css{\\row{\\str{Answer: \xA0 }}{\\str{ A \xA0 }}}{help-answer-text}}{\\row{\\html{&nbsp;}}}}'
							}
						}]
					}]
				},
			fifteenth: {
					//problem 15
					title: 'Charts and Bar Graphs',
					children: [{
						title: 'Main Answer',
						children: [{
							problem: '\\col{\\row{\\str{Approximately how many deer were counted in the first two periods of the survey (January and April)?}}}{\\row{\\str{\xA0}}}{\\row{\\graph{Deer Survey in Sonoma County}{[ ["January", 220], ["April", 370], ["July", 445], ["October", 300]]}{500}{Number of Deer Counted}}}',
							answer: '\\css{\\butgrp{\\col{\\row{\\str{\xA0}}}{\\row{\\but{A}{F}}{\\css{\\grp{\\str{450 Deer}}}{button-label-margin}}}{\\row{\\but{B}{F}}{\\css{\\grp{\\str{680 Deer}}}{button-label-margin}}}{\\row{\\but{C}{T}}{\\css{\\grp{\\str{590 Deer}}}{button-label-margin}}}{\\row{\\but{D}{F}}{\\css{\\grp{\\str{500 Deer}}}{button-label-margin}}}}}{buttonsright}',
							controls: {
								"checkAnswer": true,
								"help": '\\rowgrp{\\row{\\str{\xA0}}}{\\row{\\str{There were approximately 590 deer counted in January and April.}}}{\\row{\\html{&nbsp;}}}{\\css{\\row{\\str{Answer: \xA0 }}{\\str{ C \xA0 }}}{help-answer-text}}{\\row{\\html{&nbsp;}}}}'
							}
						}]
					}]
				},
			sixteenth: {
					title: 'Charts and Bar Graphs',
					children: [{
						title: 'Main Answer',
						children: [{
							problem: '\\col{\\row{\\str{Question 1: What is the increment for the horizontal axis?}}}{\\row{\\str{\xA0}}}{\\row{\\horgraph{Country A:  Food Production and Population}{[[0, "1965"], [2, "1965"], null, [0, "1985"], [3, "1985"], null, [0, "2005"], [11, "2005"], null, [0, "2025"],[22, "2025"]]}{Population of Country A}{[[0, "1962"], [3, "1962"], null, [0, "1982"], [5, "1982"], null, [0, "2002"], [9, "2002"], null, [0, "2022"],[18, "2022"]]}{Population Country A can Feed}{Years}{Number (in millions)}}}{\\row{\\str{\xA0}}}',
							answer: '\\css{\\butgrp{\\col{\\row{\\but{A}{F}}{\\css{\\grp{\\str{20 years}}}{button-label-margin}}}{\\row{\\but{B}{F}}{\\css{\\grp{\\str{10 years}}}{button-label-margin}}}{\\row{\\but{C}{F}}{\\css{\\grp{\\str{10 million}}}{button-label-margin}}}{\\row{\\but{D}{T}}{\\css{\\grp{\\str{5 million}}}{button-label-margin}}}}}{buttonsright}',
							controls: {
								"checkAnswer": true,
								"help": '\\rowgrp{\\row{\\str{\xA0}}}{\\row{\\str{The increment for the horizontal axis is 5 million.}}}{\\row{\\html{&nbsp;}}}{\\css{\\row{\\str{Answer: \xA0 }}{\\str{ D \xA0 }}}{help-answer-text}}{\\row{\\html{&nbsp;}}}}'
		
							}
						}]
					}]
				},
			seventeenth: {
					title: 'Charts and Bar Graphs',
					children: [{
						title: 'Main Answer',
						children: [{
							problem: '\\col{\\row{\\str{Question 2:  Approximately what number represents the population of Country A in 2005?}}}{\\row{\\str{\xA0}}}{\\row{\\horgraph{Country A:  Food Production and Population}{[[0, "1965"], [2, "1965"], null, [0, "1985"], [3, "1985"], null, [0, "2005"], [11, "2005"], null, [0, "2025"],[22, "2025"]]}{Population of Country A}{[[0, "1962"], [3, "1962"], null, [0, "1982"], [5, "1982"], null, [0, "2002"], [9, "2002"], null, [0, "2022"],[18, "2022"]]}{Population Country A can Feed}{Years}{Number (in millions)}}}',
							answer: '\\css{\\butgrp{\\col{\\row{\\but{A}{F}}{\\css{\\grp{\\str{22 million}}}{button-label-margin}}}{\\row{\\but{B}{F}}{\\css{\\grp{\\str{18 million}}}{button-label-margin}}}{\\row{\\but{C}{T}}{\\css{\\grp{\\str{11 million}}}{button-label-margin}}}{\\row{\\but{D}{F}}{\\css{\\grp{\\str{9 million}}}{button-label-margin}}}}}{buttonsright}',
							controls: {
								"checkAnswer": true,
								"help": '\\rowgrp{\\row{\\str{\xA0}}}{\\row{\\str{The population of Country A in 2005 was approximately 11 million people.}}}{\\row{\\html{&nbsp;}}}{\\css{\\row{\\str{Answer: \xA0 }}{\\str{ C \xA0 }}}{help-answer-text}}{\\row{\\html{&nbsp;}}}}'
							}
						}]
					}]
				},
			eighteenth: {
					title: 'Charts and Bar Graphs',
					children: [{
						title: 'Main Answer',
						children: [{
							problem: '\\col{\\row{\\str{Question 3: Approximately what number represents the increase in population from 1965 to 1985?}}}{\\row{\\str{\xA0}}}{\\row{\\horgraph{Country A:  Food Production and Population}{[[0, "1965"], [2, "1965"], null, [0, "1985"], [3, "1985"], null, [0, "2005"], [11, "2005"], null, [0, "2025"],[22, "2025"]]}{Population of Country A}{[[0, "1962"], [3, "1962"], null, [0, "1982"], [5, "1982"], null, [0, "2002"], [9, "2002"], null, [0, "2022"],[18, "2022"]]}{Population Country A can Feed}{Years}{Number (in millions)}}}',
							answer: '\\css{\\butgrp{\\col{\\row{\\but{A}{F}}{\\css{\\grp{\\str{2 million}}}{button-label-margin}}}{\\row{\\but{B}{F}}{\\css{\\grp{\\str{3 million}}}{button-label-margin}}}{\\row{\\but{C}{F}}{\\css{\\grp{\\str{4 million}}}{button-label-margin}}}{\\row{\\but{D}{T}}{\\css{\\grp{\\str{1 million}}}{button-label-margin}}}}}{buttonsright}',
							controls: {
								"checkAnswer": true,
								"help": '\\rowgrp{\\row{\\str{\xA0}}}{\\row{\\str{Between 1965 and 1985, the population increased approximately by 1 million.}}}{\\row{\\html{&nbsp;}}}{\\css{\\row{\\str{Answer: \xA0 }}{\\str{ D \xA0 }}}{help-answer-text}}{\\row{\\html{&nbsp;}}}}'
							}
						}]
					}]
				}
        },
		// data not abstracted- one problem set only for charts and graphs at this time, per Matt
	        data = [
            { template: 'first' },
			{ template: 'second' },
			{ template: 'third' },
			{ template: 'fourth' },
			{ template: 'fifth' },
			{ template: 'sixth' },
			{ template: 'seventh' },
			{ template: 'eighth' },
			{ template: 'nineth' },
			{ template: 'tenth' },
			{ template: 'eleventh' },
			{ template: 'twelveth' },
			{ template: 'thirteenth' },
			{ template: 'fourteenth' },
			{ template: 'fifteenth' },
			{ template: 'sixteenth' },
			{ template: 'seventeenth' },
			{ template: 'eighteenth' },
			
        ];

	return dataUtils.build(desc, template, data);
}]);
