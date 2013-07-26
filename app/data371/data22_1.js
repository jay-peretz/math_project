/*global angular */

angular.module('mathSkills').service('data22_1', ['dataUtils', function (dataUtils) {
    var desc = {
            title: '22.1 Solving Simple Interest and Monthly Payment Problems',
            path: '22.1-solving-simple-interest-and-monthly-payment-problems',
            children: []
        },
        template = {
			timeFraction: {
                title: 'Solving Simple Interest and Monthly Payment Problems',
				children: [{
					title: 'Main Answer',
					children: [{
						problem: '\\col'
						+'{\\str{$problem}}',
						answer: '\\grp{\\html{$}}{\\css{\\inputcash{$answer}}{width200px}}',
						controls: {
							"checkAnswer": true,
							"help": '\\rowgrp'
							+'{\\html{&nbsp;}}'
							+'{\\html{$helpFirst}}'
							+'{\\html{&nbsp;}}'
							+'{\\html{$helpSecond}}'
							+'{\\html{&nbsp;}}'
							+'{\\html{$helpThird}}'
							+'{\\html{&nbsp;}}'
							+'{\\row{\\html{$helpfourth}}{\\frac{\\str{$timeNumerator}}{\\str{$timeDenominator}}}}'
							+'{\\html{&nbsp;}}'
							+'{\\html{$helpfifth}}'
							+'{\\html{&nbsp;}}'
							+'{\\html{$helpsixth}}'
							+'{\\html{&nbsp;}}'
							+'{\\row{\\css{\\str{Answer: \xA0 }}{help-answer-text}}'
							+'{\\css{\\row{\\str{$}}{\\html{$answer \xA0 }}}{help-answer-text-tight}}'
							+'{\\html{&nbsp;}}'
						}
					}]
                }]
            },
			timeWhole: {
                title: 'Solving Simple Interest and Monthly Payment Problems',
				children: [{
					title: 'Main Answer',
					children: [{
						problem: '\\col'
						+'{\\str{$problem}}',
						answer: '\\grp{\\html{$}}{\\css{\\inputcash($answer)}{width200px}}',
						controls: {
							"checkAnswer": true,
							"help": '\\rowgrp'
							+'{\\html{&nbsp;}}'
							+'{\\html{$helpFirst}}'
							+'{\\html{&nbsp;}}'
							+'{\\html{$helpSecond}}'
							+'{\\html{&nbsp;}}'
							+'{\\html{$helpThird}}'
							+'{\\html{&nbsp;}}'
							+'{\\html{$helpfourth}}'
							+'{\\html{&nbsp;}}'
							+'{\\html{$helpfifth}}'
							+'{\\html{&nbsp;}}'
							+'{\\html{$helpsixth}}'
							+'{\\html{&nbsp;}}'
							+'{\\html{$helpseventh}}'
							+'{\\html{&nbsp;}}'
							+'{\\html{$helpeighth}}'
							+'{\\html{&nbsp;}}'
							+'{\\html{$helpninth}}'
							+'{\\html{&nbsp;}}'
							+'{\\html{$helptenth}}'
							+'{\\html{&nbsp;}}'
							+'{\\row{\\css{\\str{Answer: \xA0 }}{help-answer-text}}'
							+'{\\css{\\row{\\str{$}}{\\html{$answer \xA0 }}}{help-answer-text-tight}}'
							+'{\\html{&nbsp;}}'
						}
					}]
                }]
            },
			timeWholeTwoPart: {
                title: 'Solving Simple Interest and Monthly Payment Problems',
				children: [{
					title: 'Main Answer',
					children: [{
						problem: '\\col'
						+'{\\str{$problem}}',
						answer: '\\grp{\\html{$}}{\\css{\\inputcash($answer1}}{width200px}}',
						controls: {
							"checkAnswer": true,
							"help": '\\rowgrp'
							+'{\\html{&nbsp;}}'
							+'{\\html{$helpFirst}}'
							+'{\\html{&nbsp;}}'
							+'{\\html{$helpSecond}}'
							+'{\\html{&nbsp;}}'
							+'{\\html{$helpThird}}'
							+'{\\html{&nbsp;}}'
							+'{\\html{$helpfourth}}'
							+'{\\html{&nbsp;}}'
							+'{\\html{$helpfifth}}'
							+'{\\html{&nbsp;}}'
							+'{\\html{$helpsixth}}'
							+'{\\html{&nbsp;}}'
							+'{\\html{$helpseventh}}'
							+'{\\html{&nbsp;}}'
							+'{\\html{$helpeighth}}'
							+'{\\html{&nbsp;}}'
							+'{\\html{$helpninth}}'
							+'{\\html{&nbsp;}}'
							+'{\\html{$helptenth}}'
							+'{\\html{&nbsp;}}'
							+'{\\row{\\css{\\str{Answer: \xA0 }}{help-answer-text}}'
							+'{\\css{\\row{\\str{$}}{\\html{$answer1 \xA0 }}}{help-answer-text-tight}}'
							+'{\\html{&nbsp;}}'
						}
					}, {						
						problem: '\\col'
						+'{\\str{$problem}}',
						answer: '\\css{\\rowgrp'
						+'{\\html{&nbsp;}}'
						+'{\\css{\\row{\\str{Answer: \xA0 }}'
						+'{\\str{$}}{\\html{$answer1 \xA0 }}}{help-answer-text-tight}}'
						+'{\\html{&nbsp;}}'
						+'{\\html{&nbsp;}}'
						+'{css{\\str{$part2Problem}}{alert alert-info}}'
						+'{\\html{&nbsp;}}'
						+'{\\grp{\\html{$}}{\\css{\\inputcash($answer2}}{width200px}}}}{well}',						
						controls: {
							"checkAnswer": true,
							"help": '\\rowgrp'
							+'{\\html{&nbsp;}}'
							+'{\\html{$helpeleventh}}'
							+'{\\html{&nbsp;}}'
							+'{\\html{$helptwelfth}}'
							+'{\\html{&nbsp;}}'
							+'{\\html{$helpthirteenth}}'
							+'{\\html{&nbsp;}}'
							+'{\\row{\\css{\\str{Answer: \xA0 }}{help-answer-text}}'
							+'{\\css{\\row{\\str{$}}{\\html{$answer2 \xA0 }}}{help-answer-text-tight}}'
							+'{\\html{&nbsp;}}'
						}
					}]
                }]
            },
			timeFractionTwoPart: {
					title: 'Solving Simple Interest and Monthly Payment Problems',
					children: [{
						title: 'Main Answer',
						children: [{
							problem: '\\col'
							+'{\\str{$problem}}',
							answer: '\\grp{\\html{$}}{\\css{\\inputcash($answer1}}{width200px}}',
							controls: {
								"checkAnswer": true,
								"help": '\\rowgrp'
								+'{\\html{&nbsp;}}'
								+'{\\html{$helpFirst}}'
								+'{\\html{&nbsp;}}'
								+'{\\html{$helpSecond}}'
								+'{\\html{&nbsp;}}'
								+'{\\html{$helpThird}}'
								+'{\\html{&nbsp;}}'
								+'{\\row{\\html{$helpfourth}}{\\frac{\\str{$timeNumerator}}{\\str{$timeDenominator}}}}'
								+'{\\html{&nbsp;}}'
								+'{\\html{$helpfifth}}'
								+'{\\html{&nbsp;}}'
								+'{\\html{$helpsixth}}'
								+'{\\html{&nbsp;}}'
								+'{\\html{$helpseventh}}'
								+'{\\html{&nbsp;}}'
								+'{\\html{$helpeighth}}'
								+'{\\html{&nbsp;}}'
								+'{\\html{$helpninth}}'
								+'{\\html{&nbsp;}}'
								+'{\\html{$helptenth}}'
								+'{\\html{&nbsp;}}'								
								+'{\\row{\\css{\\str{Answer: \xA0 }}{help-answer-text}}'
								+'{\\css{\\row{\\str{$}}{\\html{$answer1 \xA0 }}}{help-answer-text-tight}}'
								+'{\\html{&nbsp;}}'
							}
						}, {						
							problem: '\\col'
							+'{\\str{$problem}}',
							answer: '\\css{\\rowgrp'
							+'{\\html{&nbsp;}}'
							+'{\\css{\\row{\\str{Answer: \xA0 }}'
							+'{\\str{$}}{\\html{$answer1 \xA0 }}}{help-answer-text-tight}}'
							+'{\\html{&nbsp;}}'
							+'{\\html{&nbsp;}}'
							+'{css{\\str{$part2Problem}}{alert alert-info}}'
							+'{\\html{&nbsp;}}'
							+'{\\grp{\\html{$}}{\\css{\\inputcash($answer2}}{width200px}}}}{well}',						
							controls: {
								"checkAnswer": true,
								"help": '\\rowgrp'
								+'{\\html{&nbsp;}}'
								+'{\\html{$helpeleventh}}'
								+'{\\html{&nbsp;}}'
								+'{\\html{$helptwelfth}}'
								+'{\\html{&nbsp;}}'
								+'{\\html{$helpthirteenth}}'
								+'{\\html{&nbsp;}}'
								+'{\\row{\\css{\\str{Answer: \xA0 }}{help-answer-text}}'
								+'{\\css{\\row{\\str{$}}{\\html{$answer2 \xA0 }}}{help-answer-text-tight}}'
								+'{\\html{&nbsp;}}'
							}
						}]
					}]
				}
		},
        data = [
            { 
                problem: 'Val Daniels borrowed $1,200 from her credit union for a period of 9 months.  If the simple interest rate is 6%, how much interest did she pay at the end of this loan period?  (round all dollar amounts to the nearest cent)',
				 answer: '54.00', 
				 helpFirst: "1) The Basic Interest Formula:", 
				 helpSecond: "Interest <span class=bigger>=</span> \xA0Principal <span class=bigger>&sdot;</span> Rate <span class=bigger>&sdot;</span> Time",
				 helpThird: "2) Substitute the values into the formula:",
				 helpfourth: "I <span class=bigger>=</span> $1,200 <span class=bigger>&sdot;</span> 6% <span class=bigger>&sdot;</span>",
				 timeNumerator: "9",
				 timeDenominator: "12",
				 helpfifth: "3) Calculate the interest:",
				 helpsixth: "I <span class=bigger>=</span> $1200 <span class=bigger>&sdot;</span> 0.06 <span class=bigger>&sdot;</span> 0.75",
				 template: 'timeFraction'
            },{ 
                problem: 'Beth Roberts borrowed $1,400 at a bank where the simple interest rate is 11%.  Assuming she made no down payment on this loan, calculate the total amount she must pay back at the end of one year.  (round all dollar amounts to the nearest cent)',
				 answer: '1554.00', 
				 helpFirst: "1) The Basic Interest Formula:", 
				 helpSecond: "Interest <span class=bigger>\xA0 = \xA0</span> \xA0Principal <span class=bigger>&sdot;</span> Rate <span class=bigger>&sdot;</span> Time",
				 helpThird: "2) Substitute the values into the formula:",
				 helpfourth: "I <span class=bigger>=</span> $1,400 <span class=bigger>&sdot;</span> 11% <span class=bigger>&sdot;</span> 1",
				 helpfifth: "3) Calculate the interest:",
				 helpsixth: "I <span class=bigger>=</span> $1400 <span class=bigger>&sdot;</span> 0.11 <span class=bigger>&sdot;</span> 1",
				 helpseventh: "I <span class=bigger>=</span> $154.00",
				 helpeighth: "Total Payment = Principal + Interest",
				 helpninth: "Total Payment = $1400 + $154 <span class=bigger>=</span> $1,554.00",
				 helptenth: "",
				 template: 'timeWhole'
            },
			{ 
                problem: 'Bob Jones borrowed $10,200 at a bank where the simple interest rate is 6%.  Assuming he made no down payment on this loan, calculate the total amount he must pay back at the end of one year.  (round all dollar amounts to the nearest cent)',
				 answer: '10812.00', 
				 helpFirst: "1) The Basic Interest Formula:", 
				 helpSecond: "Interest <span class=bigger>\xA0 = \xA0</span> \xA0Principal <span class=bigger>&sdot;</span> Rate <span class=bigger>&sdot;</span> Time",
				 helpThird: "2) Substitute the values into the formula:",
				 helpfourth: "I <span class=bigger>=</span> $10,200 <span class=bigger>&sdot;</span> 6% <span class=bigger>&sdot;</span> 1",
				 helpfifth: "3) Calculate the interest:",
				 helpsixth: "I <span class=bigger>=</span> $10,200 <span class=bigger>&sdot;</span> 0.6 <span class=bigger>&sdot;</span> 1",
				 helpseventh: "I <span class=bigger>=</span> $612.00",
				 helpeighth: "Total Payment = Principal + Interest",
				 helpninth: "Total Payment = $10,200 + $612 <span class=bigger>=</span> $10,812.00",
				 helptenth: "",
				 template: 'timeWhole'
            },{ 
                problem: 'Dana Esquivel borrowed $900 from her credit union for a period of 3 months.  If the simple interest rate is 10%, how much interest did she pay at the end of this loan period?  (round all dollar amounts to the nearest cent)',
				 answer: '22.50', 
				 helpFirst: "1) The Basic Interest Formula:", 
				 helpSecond: "Interest <span class=bigger>=</span> \xA0Principal <span class=bigger>&sdot;</span> Rate <span class=bigger>&sdot;</span> Time",
				 helpThird: "2) Substitute the values into the formula:",
				 helpfourth: "I <span class=bigger>=</span> $900 <span class=bigger>&sdot;</span> 10% <span class=bigger>&sdot;</span>",
				 timeNumerator: "3",
				 timeDenominator: "12",
				 helpfifth: "3) Calculate the interest:",
				 helpsixth: "I <span class=bigger>=</span> $900 <span class=bigger>&sdot;</span> 0.1 <span class=bigger>&sdot;</span> 0.25",
				 template: 'timeFraction'
            },
			{ 
                problem: 'Alicia Taylor borrowed $1,600 at a bank where the simple interest rate is 12%.  Assuming she made no down payment on this loan, calculate her pay-off amount at the end of a year. (round all dollar amounts to the nearest cent)',
				part2Problem: "Determine Alicia's monthly payments. (round all dollar amounts to the nearest cent)",
				 answer1: '1792.00', 
				 answer2: '149.33',
				 helpFirst: "1) The Basic Interest Formula:", 
				 helpSecond: "Interest <span class=bigger>\xA0 = \xA0</span> \xA0Principal <span class=bigger>&sdot;</span> Rate <span class=bigger>&sdot;</span> Time",
				 helpThird: "2) Substitute the values into the formula:",
				 helpfourth: "I <span class=bigger>=</span> $1,600 <span class=bigger>&sdot;</span> 12% <span class=bigger>&sdot;</span> 1",
				 helpfifth: "3) Calculate the interest:",
				 helpsixth: "I <span class=bigger>=</span> $1600 <span class=bigger>&sdot;</span> 0.12 <span class=bigger>&sdot;</span> 1",
				 helpseventh: "I <span class=bigger>=</span> $192.00",
				 helpeighth: "Total Payment = Principal + Interest",
				 helpninth: "Total Payment = $1600 + $192 <span class=bigger>=</span> $1,792.00",
				 helptenth: "",
				 helpeleventh: "The Monthly Payment amount is determined by dividing the Total Payment by the Total Months:",
				 helptwelfth: "Monthly Payment <span class=bigger>=</span> Total Payment <span class=bigger>&divide;</span> Total Months",
				 helpthirteenth: "Monthly Payment <span class=bigger>=</span> $1792.00 <span class=bigger>&divide;</span> 12 <span class=bigger>=</span> 149.33",
				 template: 'timeWholeTwoPart'
            },
			{ 
                problem: 'Jayvis Williams borrowed $100,000 at a bank where the simple interest rate is 4%.  Assuming he made no down payment on this loan, calculate his pay-off amount at the end of a year. (round all dollar amounts to the nearest cent)',
				part2Problem: "Determine Jayvis's monthly payments. (round all dollar amounts to the nearest cent)",
				 answer1: '104000.00', 
				 answer2: '8666.67',
				 helpFirst: "1) The Basic Interest Formula:", 
				 helpSecond: "Interest <span class=bigger>\xA0 = \xA0</span> \xA0Principal <span class=bigger>&sdot;</span> Rate <span class=bigger>&sdot;</span> Time",
				 helpThird: "2) Substitute the values into the formula:",
				 helpfourth: "I <span class=bigger>=</span> $100,000 <span class=bigger>&sdot;</span> 4% <span class=bigger>&sdot;</span> 1",
				 helpfifth: "3) Calculate the interest:",
				 helpsixth: "I <span class=bigger>=</span> $100,000 <span class=bigger>&sdot;</span> 0.04 <span class=bigger>&sdot;</span> 1",
				 helpseventh: "I <span class=bigger>=</span> $4,000.00",
				 helpeighth: "Total Payment = Principal + Interest",
				 helpninth: "Total Payment = $100,000 + $4,000 <span class=bigger>=</span> $104,000.00",
				 helptenth: "",
				 helpeleventh: "The Monthly Payment amount is determined by dividing the Total Payment by the Total Months:",
				 helptwelfth: "Monthly Payment <span class=bigger>=</span> Total Payment <span class=bigger>&divide;</span> Total Months",
				 helpthirteenth: "Monthly Payment <span class=bigger>=</span> $104,000.00 <span class=bigger>&divide;</span> 12 <span class=bigger>=</span> 8,666.67",
				 template: 'timeWholeTwoPart'
            },
			{ 
                problem: 'Sarah Maple borrowed $3,600 for 6 months at a bank where the yearly interest rate is 15%.  She decides to make monthly payments on this loan after making a down-payment of $720.  Calculate her pay-off amount at the end of six months. (round all dollar amounts to the nearest cent)',
				part2Problem: "Determine Sarah's monthly payments. (round all dollar amounts to the nearest cent)",
				 answer1: '3096.00', 
				 answer2: '516.00',
				 helpFirst: "1) The Basic Interest Formula:", 
				 helpSecond: "Interest <span class=bigger>=</span> \xA0Principal <span class=bigger>&sdot;</span> Rate <span class=bigger>&sdot;</span> Time",
				 helpThird: "2) Substitute the values into the formula:",
				 helpfourth: "I <span class=bigger>=</span> $2,880 <span class=bigger>&sdot;</span> 15% <span class=bigger>&sdot;</span>",
				 timeNumerator: "6",
				 timeDenominator: "12",
				 helpfifth: "3) Calculate the interest:",
				 helpsixth: "I <span class=bigger>=</span> $2880 <span class=bigger>&sdot;</span> 0.15 <span class=bigger>&sdot;</span> 0.5",				 
				 helpseventh: "I <span class=bigger>=</span> $216.00",
				 helpeighth: "Total Payment = Principal + Interest",
				 helpninth: "Total Payment = $2880 + $216 <span class=bigger>=</span> $3,096.00",
				 helptenth: "",
				 helpeleventh: "The Monthly Payment amount is determined by dividing the Total Payment by the Total Months:",
				 helptwelfth: "Monthly Payment <span class=bigger>=</span> Total Payment <span class=bigger>&divide;</span> Total Months",
				 helpthirteenth: "Monthly Payment <span class=bigger>=</span> $3,096.00 <span class=bigger>&divide;</span> 6 <span class=bigger>=</span> $516.00",
				 template: 'timeFractionTwoPart'
            },
			{ 
                problem: 'Greg Schwarz borrowed $2,500 for 3 months at a bank where the yearly interest rate is 12%.  He decides to make monthly payments on this loan after making a down-payment of $100.  Calculate his pay-off amount at the end of three months. (round all dollar amounts to the nearest cent)',
				part2Problem: "Determine Greg's monthly payments. (round all dollar amounts to the nearest cent)",
				 answer1: '2472.00', 
				 answer2: '824.00',
				 helpFirst: "1) The Basic Interest Formula:", 
				 helpSecond: "Interest <span class=bigger>=</span> \xA0Principal <span class=bigger>&sdot;</span> Rate <span class=bigger>&sdot;</span> Time",
				 helpThird: "2) Substitute the values into the formula:",
				 helpfourth: "I <span class=bigger>=</span> $2,400 <span class=bigger>&sdot;</span> 12% <span class=bigger>&sdot;</span>",
				 timeNumerator: "3",
				 timeDenominator: "12",
				 helpfifth: "3) Calculate the interest:",
				 helpsixth: "I <span class=bigger>=</span> $2400 <span class=bigger>&sdot;</span> 0.12 <span class=bigger>&sdot;</span> 0.25",				 
				 helpseventh: "I <span class=bigger>=</span> $72.00",
				 helpeighth: "Total Payment = Principal + Interest",
				 helpninth: "Total Payment = $2400 + $72 <span class=bigger>=</span> $2,472.00",
				 helptenth: "",
				 helpeleventh: "The Monthly Payment amount is determined by dividing the Total Payment by the Total Months:",
				 helptwelfth: "Monthly Payment <span class=bigger>=</span> Total Payment <span class=bigger>&divide;</span> Total Months",
				 helpthirteenth: "Monthly Payment <span class=bigger>=</span> $2,472.00 <span class=bigger>&divide;</span> 3 <span class=bigger>=</span> $824.00",
				 template: 'timeFractionTwoPart'
            },
			{ 
                problem: 'Contansa Aguilera borrowed $54,200 for 6 months at a bank where the yearly interest rate is 8%.  She decides to make monthly payments on this loan after making a down-payment of $4000.  Calculate her pay-off amount at the end of six months. (round all dollar amounts to the nearest cent)',
				part2Problem: "Determine Contansa's monthly payments. (round all dollar amounts to the nearest cent)",
				 answer1: '52208.00', 
				 answer2: '8,701.33',
				 helpFirst: "1) The Basic Interest Formula:", 
				 helpSecond: "Interest <span class=bigger>=</span> \xA0Principal <span class=bigger>&sdot;</span> Rate <span class=bigger>&sdot;</span> Time",
				 helpThird: "2) Substitute the values into the formula:",
				 helpfourth: "I <span class=bigger>=</span> $50,200 <span class=bigger>&sdot;</span> 8% <span class=bigger>&sdot;</span>",
				 timeNumerator: "6",
				 timeDenominator: "12",
				 helpfifth: "3) Calculate the interest:",
				 helpsixth: "I <span class=bigger>=</span> $50,200 <span class=bigger>&sdot;</span> 0.08 <span class=bigger>&sdot;</span> 0.5",				 
				 helpseventh: "I <span class=bigger>=</span> $2,008.00",
				 helpeighth: "Total Payment = Principal + Interest",
				 helpninth: "Total Payment = $50,200 + $2,008 <span class=bigger>=</span> $52,208.00",
				 helptenth: "",
				 helpeleventh: "The Monthly Payment amount is determined by dividing the Total Payment by the Total Months:",
				 helptwelfth: "Monthly Payment <span class=bigger>=</span> Total Payment <span class=bigger>&divide;</span> Total Months",
				 helpthirteenth: "Monthly Payment <span class=bigger>=</span> $52,208.00 <span class=bigger>&divide;</span> 6 <span class=bigger>=</span> $8,701.33",
				 template: 'timeFractionTwoPart'
            },{ 
                problem: 'Yousef Ibrahim borrowed $2900 from his credit union for a period of 9 months.  If the simple interest rate is 5%, how much interest did he pay at the end of this loan period?  (round all dollar amounts to the nearest cent)',
				 answer: '108.75', 
				 helpFirst: "1) The Basic Interest Formula:", 
				 helpSecond: "Interest <span class=bigger>=</span> \xA0Principal <span class=bigger>&sdot;</span> Rate <span class=bigger>&sdot;</span> Time",
				 helpThird: "2) Substitute the values into the formula:",
				 helpfourth: "I <span class=bigger>=</span> $2900 <span class=bigger>&sdot;</span> 5% <span class=bigger>&sdot;</span>",
				 timeNumerator: "9",
				 timeDenominator: "12",
				 helpfifth: "3) Calculate the interest:",
				 helpsixth: "I <span class=bigger>=</span> $2900 <span class=bigger>&sdot;</span> 0.05 <span class=bigger>&sdot;</span> 0.75",
				 template: 'timeFraction'
            }

        ];
		
    return dataUtils.build(desc, template, data);
	
}]);