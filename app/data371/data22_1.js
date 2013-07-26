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
							+'{\\css{\\row{\\str{$}}{\\html{$helpAnswer \xA0 }}}{help-answer-text-tight}}'
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
							+'{\\css{\\row{\\str{$}}{\\html{$helpAnswer \xA0 }}}{help-answer-text-tight}}'
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
						answer: '\\grp{\\html{$}}{\\css{\\inputcash{$answer1}}{width200px}}',
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
							+'{\\css{\\row{\\str{$}}{\\html{$helpAnswer1 \xA0 }}}{help-answer-text-tight}}'
							+'{\\html{&nbsp;}}'
						}
					}, {						
						problem: '\\col'
						+'{\\str{$problem}}',
						answer: '\\css{\\rowgrp'
						+'{\\html{&nbsp;}}'
						+'{\\css{\\row{\\str{Answer: \xA0 }}'
						+'{\\str{$}}{\\html{$helpAnswer1 \xA0 }}}{help-answer-text-tight}}'
						+'{\\html{&nbsp;}}'
						+'{\\html{&nbsp;}}'
						+'{css{\\str{$part2Problem}}{alert alert-info}}'
						+'{\\html{&nbsp;}}'
						+'{\\grp{\\html{$}}{\\css{\\inputcash{$answer2}}{width200px}}}}{well}',						
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
							+'{\\css{\\row{\\str{$}}{\\html{$helpAnswer2 \xA0 }}}{help-answer-text-tight}}'
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
							answer: '\\grp{\\html{$}}{\\css{\\inputcash{$answer1}}{width200px}}',
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
								+'{\\css{\\row{\\str{$}}{\\html{$helpAnswer1 \xA0 }}}{help-answer-text-tight}}'
								+'{\\html{&nbsp;}}'
							}
						}, {						
							problem: '\\col'
							+'{\\str{$problem}}',
							answer: '\\css{\\rowgrp'
							+'{\\html{&nbsp;}}'
							+'{\\css{\\row{\\str{Answer: \xA0 }}'
							+'{\\str{$}}{\\html{$helpAnswer1 \xA0 }}}{help-answer-text-tight}}'
							+'{\\html{&nbsp;}}'
							+'{\\html{&nbsp;}}'
							+'{css{\\str{$part2Problem}}{alert alert-info}}'
							+'{\\html{&nbsp;}}'
							+'{\\grp{\\html{$}}{\\css{\\inputcash{$answer2}}{width200px}}}}{well}',						
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
								+'{\\css{\\row{\\str{$}}{\\html{$helpAnswer2 \xA0 }}}{help-answer-text-tight}}'
								+'{\\html{&nbsp;}}'
							}
						}]
					}]
				},
				timeFractionTwoPartShort: {
					title: 'Solving Simple Interest and Monthly Payment Problems',
					children: [{
						title: 'Main Answer',
						children: [{
							problem: '\\col'
							+'{\\str{$problem}}',
							answer: '\\grp{\\html{$}}{\\css{\\inputcash{$answer1}}{width200px}}',
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
								+'{\\row{\\css{\\str{Answer: \xA0 }}{help-answer-text}}'
								+'{\\css{\\row{\\str{$}}{\\html{$helpAnswer1 \xA0 }}}{help-answer-text-tight}}'
								+'{\\html{&nbsp;}}'
							}
						}, {						
							problem: '\\col'
							+'{\\str{$problem}}',
							answer: '\\css{\\rowgrp'
							+'{\\html{&nbsp;}}'
							+'{\\css{\\row{\\str{Answer: \xA0 }}'
							+'{\\str{$}}{\\html{$helpAnswer1 \xA0 }}}{help-answer-text-tight}}'
							+'{\\html{&nbsp;}}'
							+'{\\html{&nbsp;}}'
							+'{css{\\str{$part2Problem}}{alert alert-info}}'
							+'{\\html{&nbsp;}}'
							+'{\\grp{\\html{$}}{\\css{\\inputcash{$answer2}}{width200px}}}}{well}',						
							controls: {
								"checkAnswer": true,
								"help": '\\rowgrp'
								+'{\\html{&nbsp;}}'
								+'{\\html{$helpeleventh}}'
								+'{\\html{&nbsp;}}'
								+'{\\html{$helptwelfth}}'
								+'{\\html{&nbsp;}}'
								+'{\\row{\\css{\\str{Answer: \xA0 }}{help-answer-text}}'
								+'{\\css{\\row{\\str{$}}{\\html{$helpAnswer2 \xA0 }}}{help-answer-text-tight}}'
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
				 helpAnswer: '54.00',
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
				 helpAnswer: '1,554.00',
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
                problem: 'Bob Jones borrowed $10,200 at a bank where the simple interest rate is 6%.  Assuming he made no down payment on this loan, calculate the total amount he must pay back at the end of two years.  (round all dollar amounts to the nearest cent)',
				 answer: '11424.00', 
				 helpAnswer: '11,424.00',
				 helpFirst: "1) The Basic Interest Formula:", 
				 helpSecond: "Interest <span class=bigger>\xA0 = \xA0</span> \xA0Principal <span class=bigger>&sdot;</span> Rate <span class=bigger>&sdot;</span> Time",
				 helpThird: "2) Substitute the values into the formula:",
				 helpfourth: "I <span class=bigger>=</span> $10,200 <span class=bigger>&sdot;</span> 6% <span class=bigger>&sdot;</span> 2",
				 helpfifth: "3) Calculate the interest:",
				 helpsixth: "I <span class=bigger>=</span> $10,200 <span class=bigger>&sdot;</span> 0.6 <span class=bigger>&sdot;</span> 2",
				 helpseventh: "I <span class=bigger>=</span> $1224.00",
				 helpeighth: "Total Payment = Principal + Interest",
				 helpninth: "Total Payment = $10,200 + $1224 <span class=bigger>=</span> $11,424.00",
				 helptenth: "",
				 template: 'timeWhole'
            },
			{ 
                problem: 'Dana Esquival invested $15,000 into a new company.  She earned 7% simple interest for 2 years.  How much interest did she earn from her investment?',
				part2Problem: "How much money did the company pay back to Constanza? (round all dollar amounts to the nearest cent)",
				 answer1: '2100.00',
				 helpAnswer1: '2,100.00',
				 answer2: '17,100.00',
				 helpAnswer2: '17,100.00',
				 helpFirst: "1) The Basic Interest Formula:", 
				 helpSecond: "Interest <span class=bigger>=</span> \xA0Principal <span class=bigger>&sdot;</span> Rate <span class=bigger>&sdot;</span> Time<br><br>The principal is the investment ($15,000).",
				 helpThird: "2) Substitute the values into the formula:",
				 helpfourth: "I <span class=bigger>=</span> $15,000 <span class=bigger>&sdot;</span> 7% <span class=bigger>&sdot;</span>",
				 timeNumerator: "24",
				 timeDenominator: "12",
				 helpfifth: "3) Calculate the interest:",
				 helpsixth: "I <span class=bigger>=</span> $15,000 <span class=bigger>&sdot;</span> 0.07 <span class=bigger>&sdot;</span> 2",				 
				 helpseventh: "I <span class=bigger>=</span> $2,100.00",
				 helpeleventh: "Total Payment = Principal + Interest",
				 helptwelfth: "Total Payment = $15,000 + $2,100 <span class=bigger>=</span> $17,100.00",
				 template: 'timeFractionTwoPartShort'
            },
			{ 
                problem: 'Alicia Taylor borrowed $1,600 at a bank where the simple interest rate is 12%.  Assuming she made no down payment on this loan, calculate her pay-off amount at the end of a year. (round all dollar amounts to the nearest cent)',
				part2Problem: "Determine Alicia's monthly payments. (round all dollar amounts to the nearest cent)",
				 answer1: '1792.00',
				 helpAnswer1: '1,792.00',
				 answer2: '149.33',
				 helpAnswer2: '149.33',
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
                problem: 'Jayvis Williams borrowed $100,000 at a bank where the simple interest rate is 4%.  Assuming he made no down payment on this loan, calculate his pay-off amount at the end of ten years. (round all dollar amounts to the nearest cent)',
				part2Problem: "Determine Jayvis's monthly payments. (round all dollar amounts to the nearest cent)",
				 answer1: '140000.00',
				 helpAnswer1: '140,000.00',
				 answer2: '1166.67',
				 helpAnswer2: '1,166.67',
				 helpFirst: "1) The Basic Interest Formula:", 
				 helpSecond: "Interest <span class=bigger>\xA0 = \xA0</span> \xA0Principal <span class=bigger>&sdot;</span> Rate <span class=bigger>&sdot;</span> Time",
				 helpThird: "2) Substitute the values into the formula:",
				 helpfourth: "I <span class=bigger>=</span> $100,000 <span class=bigger>&sdot;</span> 4% <span class=bigger>&sdot;</span> 10",
				 helpfifth: "3) Calculate the interest:",
				 helpsixth: "I <span class=bigger>=</span> $100,000 <span class=bigger>&sdot;</span> 0.04 <span class=bigger>&sdot;</span> 10",
				 helpseventh: "I <span class=bigger>=</span> $40,000.00",
				 helpeighth: "Total Payment = Principal + Interest",
				 helpninth: "Total Payment = $100,000 + $40,000 <span class=bigger>=</span> $140,000.00",
				 helptenth: "",
				 helpeleventh: "The Monthly Payment amount is determined by dividing the Total Payment by the Total Months:",
				 helptwelfth: "Monthly Payment <span class=bigger>=</span> Total Payment <span class=bigger>&divide;</span> Total Months",
				 helpthirteenth: "Monthly Payment <span class=bigger>=</span> $140,000.00 <span class=bigger>&divide;</span> (10 <span class=bigger>&sdot;</span> 12)<br><span style='visibility:hidden;'>Monthly Payment </span><span class=bigger>=</span> $140,000.00 <span class=bigger>&divide;</span> 120<br><span style='visibility:hidden;'>Monthly Payment </span><span class=bigger>=</span> 1166.67",
				 template: 'timeWholeTwoPart'
            },
			{ 
                problem: 'Sarah Maple borrowed $3,600 for 6 months at a bank where the yearly interest rate is 15%.  She decides to make monthly payments on this loan after making a down-payment of $720.  Calculate the total amount of money she must pay back to the bank in the six months after she makes her down payment (round all dollar amounts to the nearest cent).',
				part2Problem: "Determine Sarah's monthly payments. (round all dollar amounts to the nearest cent)",
				 answer1: '3096.00',
				 helpAnswer1: '3,096.00',
				 answer2: '516.00',
				 helpAnswer2: '516.00',
				 helpFirst: "1) The Basic Interest Formula:", 
				 helpSecond: "Interest <span class=bigger>=</span> \xA0Principal <span class=bigger>&sdot;</span> Rate <span class=bigger>&sdot;</span> Time<br><br>The principal is the loan ($3,600) - downpayment ($720).<br>The principal is only $2,880.",
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
                problem: 'Greg Schwarz borrowed $2,500 for 3 months at a bank where the yearly interest rate is 12%.  He decides to make monthly payments on this loan after making a down-payment of $100.  Calculate the total amount of money he must pay back to the bank in the three months after he makes his down payment (round all dollar amounts to the nearest cent).',
				part2Problem: "Determine Greg's monthly payments. (round all dollar amounts to the nearest cent)",
				 answer1: '2472.00',
				 helpAnswer1: '2,472.00',
				 answer2: '824.00',
				 helpAnswer2: '824.00',
				 helpFirst: "1) The Basic Interest Formula:", 
				 helpSecond: "Interest <span class=bigger>=</span> \xA0Principal <span class=bigger>&sdot;</span> Rate <span class=bigger>&sdot;</span> Time<br><br>The principal is the loan ($2,500) - downpayment ($100).<br>The principal is only $2,400.",
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
                problem: 'Contansa Aguilera invested $50,000 into a new company.  She earned 8% simple interest for 3 years.  How much interest did she earn from her investment?',
				part2Problem: "How much money did the company pay back to Constanza? (round all dollar amounts to the nearest cent)",
				 answer1: '12000.00',
				 helpAnswer1: '12,000.00',
				 answer2: '62000.00',
				 helpAnswer2: '62,000.00',
				 helpFirst: "1) The Basic Interest Formula:", 
				 helpSecond: "Interest <span class=bigger>=</span> \xA0Principal <span class=bigger>&sdot;</span> Rate <span class=bigger>&sdot;</span> Time<br><br>The principal is the investment ($50,000).",
				 helpThird: "2) Substitute the values into the formula:",
				 helpfourth: "I <span class=bigger>=</span> $50,000 <span class=bigger>&sdot;</span> 8% <span class=bigger>&sdot;</span>",
				 timeNumerator: "36",
				 timeDenominator: "12",
				 helpfifth: "3) Calculate the interest:",
				 helpsixth: "I <span class=bigger>=</span> $50,000 <span class=bigger>&sdot;</span> 0.08 <span class=bigger>&sdot;</span> 3",				 
				 helpseventh: "I <span class=bigger>=</span> $12,000.00",
				 helpeleventh: "Total Payment = Principal + Interest",
				 helptwelfth: "Total Payment = $50,000 + $12,000 <span class=bigger>=</span> $62,000.00",
				 template: 'timeFractionTwoPartShort'
            },{ 
				 problem: 'To start his new business, Yousef needed to purchase $180,000 worth of specialized packaging equipment.  He made a 20% downpayment to the manufacturer for this equipment and borrowed the rest at a 5.5% simple interest rate for 6 years.  How much money did Yousef have to pay back to the manufacturer after he made his downpayment?',
				part2Problem: "What was Yousef's monthly payment? (round all dollar amounts to the nearest cent)",
				 answer1: '191520.00',
				 helpAnswer1: '191,520.00',
				 answer2: '2660.00',
				 helpAnswer2: '2,660.00',
				 helpFirst: "1) The Basic Interest Formula:", 
				 helpSecond: "Interest <span class=bigger>\xA0 = \xA0</span> \xA0Principal <span class=bigger>&sdot;</span> Rate <span class=bigger>&sdot;</span> Time<br><br>The principal is the loan ($180,000) - downpayment (20% of $180,000). The principal is only $144,000.",
				 helpThird: "2) Substitute the values into the formula:",
				 helpfourth: "I <span class=bigger>=</span> $144,000 <span class=bigger>&sdot;</span> 5.5% <span class=bigger>&sdot;</span> 6",
				 helpfifth: "3) Calculate the interest:",
				 helpsixth: "I <span class=bigger>=</span> $144,000 <span class=bigger>&sdot;</span> 0.055 <span class=bigger>&sdot;</span> 6",
				 helpseventh: "I <span class=bigger>=</span> $47,520.00",
				 helpeighth: "Total Payment = Principal + Interest",
				 helpninth: "Total Payment = $144,000 + $47,520 <span class=bigger>=</span> $191,520.00",
				 helptenth: "",
				 helpeleventh: "The Monthly Payment amount is determined by dividing the Total Payment by the Total Months:",
				 helptwelfth: "Monthly Payment <span class=bigger>=</span> Total Payment <span class=bigger>&divide;</span> Total Months",
				 helpthirteenth: "Monthly Payment <span class=bigger>=</span> $191,520.00 <span class=bigger>&divide;</span> (6 <span class=bigger>&sdot;</span> 12)<br><span style='visibility:hidden;'>Monthly Payment </span><span class=bigger>=</span> $191,520.00 <span class=bigger>&divide;</span> 72 <br><span style='visibility:hidden;'>Monthly Payment </span><span class=bigger>=</span> 2660.00",
				 template: 'timeWholeTwoPart'
            }

        ];
		
    return dataUtils.build(desc, template, data);
	
}]);