/*global angular */

angular.module('mathSkills').service('data22_2', ['dataUtils', function (dataUtils) {
    var desc = {
            title: '22.2 Solving Compound Interest Problems',
            path: '22.2-solving-compound-interest-problem',
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
						answer: '\\grp{\\str{$}}{\\css{\\inputcash{$answer}}{width200px}}',
						controls: {
							"checkAnswer": true,
							"help": '\\rowgrp'
							+'{\\html{&nbsp;}}'
							+'{\\html{$helpFirst}}'
							+'{\\html{&nbsp;}}'
							+'{\\html{$helpSecond}}'
							+'{\\row{\\html{$helpPrefractionSecond}}{\\frac{\\str{$timeNumerator}}{\\str{$timeDenominator}}}{\\html{$helpPostFractionSecond}}}'
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
							+'{\\html{$helpeleventh}}'
							+'{\\html{&nbsp;}}'
							+'{\\html{$helptwelveth}}'
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
						answer: '\\grp{\\str{$}}{\\css{\\inputcash{$answer}}{width200px}}',
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
						answer: '\\grp{\\str{$}}{\\css{\\inputcash{$answer1}}{width200px}}',
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
						+'{\\grp{\\str{$}}{\\css{\\inputcash{$answer2}}{width200px}}}}{well}',						
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
							answer: '\\grp{\\str{$}}{\\css{\\inputcash{$answer1}}{width200px}}',
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
							+'{\\grp{\\str{$}}{\\css{\\inputcash{$answer2}}{width200px}}}}{well}',						
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
                problem: 'Val Daniels saved $6,300 with her credit union for a period of one year.  The interest rate is 7% compounded semi-annually.  If she made no additional deposits to her account, what is her balance at the end of the year?  (round all dollar amounts to the nearest cent)',
				 answer: '6,748.72', 
				 helpFirst: "The Basic Interest Formula:", 
				 timeNumerator: "6",
				 timeDenominator: "12",
				 helpSecond: "Interest <span class=bigger>=</span> \xA0Principal <span class=bigger>&sdot;</span> Rate <span class=bigger>&sdot;</span> Time<br><br>The interest is compounded semiannually.  This means that the interest must be calculated every 6 months, ",
				 helpPrefractionSecond: 'which is &nbsp;',
				 helpPostFractionSecond: ' of a year or 0.5 years.',
				 helpThird: "Step 1:  Calculate the interest rate for the first 6-month (0.5 year) period of the investment.",
				 helpfourth: "1st Interest <span class=bigger>=</span> $6,300 <span class=bigger>&sdot;</span> 7% <span class=bigger>&sdot;</span> 0.5 <span class=bigger>=</span> $220.50",
				 helpclosefourth: " <span class=bigger>=</span> $220.50",
				 helpfifth: "Step 2:  Next, calculate the 'new' principal by adding the interest earned in step 1 to the original principal:",
				 helpsixth: "'New' Principal <span class=bigger>=</span> Original Principal + 1st Interest",
				 helpseventh: "'New' Principal <span class=bigger>=</span> $6300 + $220.50 <span class=bigger>=</span> $6520.50",
				 helpeighth: "Step 3:  Calculate the interest rate for the 2nd 6-month (0.5 year) period of the investment.",
				 helpninth: "2nd Interest <span class=bigger>=</span> $6,520.50 <span class=bigger>&sdot;</span> 7% <span class=bigger>&sdot;</span> 0.5 <span class=bigger>=</span> $228.22",
				 helptenth: "Step 4:  Next, calculate the final principal by adding the 2nd interest earned in step 3 to the new  principal of step 2:",
				 helpeleventh: "Final Principal <span class=bigger>=</span> 'New' Principal + 2nd Interest",
				 helptwelveth: "Final Principal <span class=bigger>=</span> $6,520.50 + $228.22 <span class=bigger>=</span> $6,748.72",
				 template: "timeFraction"
            },{ 
                problem: 'Julie Naples borrowed $1,400 for one year at a bank where the yearly interest rate is 12% compounded semiannually.  Calculate the total amount that will be paid to the bank by the close of the loan (round all dollar amounts to the nearest cent)',
				 answer: '1573.04', 
				 helpFirst: "The Basic Interest Formula:", 
				 timeNumerator: "6",
				 timeDenominator: "12",
				 helpSecond: "Interest <span class=bigger>=</span> \xA0Principal <span class=bigger>&sdot;</span> Rate <span class=bigger>&sdot;</span> Time<br><br>The interest is compounded semiannually.  This means that the interest must be calculated every 6 months, ",
				 helpPrefractionSecond: 'which is &nbsp;',
				 helpPostFractionSecond: ' of a year or 0.5 years.',
				 helpThird: "Step 1:  Calculate the interest rate for the first 6-month (0.5 year) period of the investment.",
				 helpfourth: "1st Interest <span class=bigger>=</span> $1,400 <span class=bigger>&sdot;</span> 12% <span class=bigger>&sdot;</span> 0.5 <span class=bigger>=</span> $84.00",
				 helpclosefourth: " <span class=bigger>=</span> $84.00",
				 helpfifth: "Step 2:  Next, calculate the 'new' principal by adding the interest earned in step 1 to the original principal:",
				 helpsixth: "'New' Principal <span class=bigger>=</span> Original Principal + 1st Interest",
				 helpseventh: "'New' Principal <span class=bigger>=</span> $1,400 + $84.00 <span class=bigger>=</span> $1,484",
				 helpeighth: "Step 3:  Calculate the interest rate for the 2nd 6-month (0.5 year) period of the investment.",
				 helpninth: "2nd Interest <span class=bigger>=</span> $1,484.00 <span class=bigger>&sdot;</span> 12% <span class=bigger>&sdot;</span> 0.5 <span class=bigger>=</span> $89.04",
				 helptenth: "Step 4:  Next, calculate the final principal by adding the 2nd interest earned in step 3 to the new  principal of step 2:",
				 helpeleventh: "Final Principal <span class=bigger>=</span> 'New' Principal + 2nd Interest",
				 helptwelveth: "Final Principal <span class=bigger>=</span> $1,484.00 + $89.04 <span class=bigger>=</span> $1,573.04",
				 template: "timeFraction"
            },{ 
                problem: 'Gina Thompson saved $2,800 for one year at Bank EZ where the yearly interest rate is 10% compounded semiannually.  Assuming that she made no additional deposits to her account, calculate the total interest earned at the end of the year (round all dollar amounts to the nearest cent)',
				 answer: '287.00', 
				 helpFirst: "The Basic Interest Formula:", 
				 timeNumerator: "6",
				 timeDenominator: "12",
				 helpSecond: "Interest <span class=bigger>=</span> \xA0Principal <span class=bigger>&sdot;</span> Rate <span class=bigger>&sdot;</span> Time<br><br>The interest is compounded semiannually.  This means that the interest must be calculated every 6 months, ",
				 helpPrefractionSecond: 'which is &nbsp;',
				 helpPostFractionSecond: ' of a year or 0.5 years.',
				 helpThird: "Step 1:  Calculate the interest rate for the first 6-month (0.5 year) period of the investment.",
				 helpfourth: "1st Interest <span class=bigger>=</span> $2,800 <span class=bigger>&sdot;</span> 10% <span class=bigger>&sdot;</span> 0.5 <span class=bigger>=</span> $140.00",
				 helpclosefourth: " <span class=bigger>=</span> $140.00",
				 helpfifth: "Step 2:  Next, calculate the 'new' principal by adding the interest earned in step 1 to the original principal:",
				 helpsixth: "'New' Principal <span class=bigger>=</span> Original Principal + 1st Interest",
				 helpseventh: "'New' Principal <span class=bigger>=</span> $2,800 + $140.00 <span class=bigger>=</span> $2,940",
				 helpeighth: "Step 3:  Calculate the interest rate for the 2nd 6-month (0.5 year) period of the investment.",
				 helpninth: "2nd Interest <span class=bigger>=</span> $2,940.00 <span class=bigger>&sdot;</span> 10% <span class=bigger>&sdot;</span> 0.5 <span class=bigger>=</span> $147.00",
				 helptenth: "Step 4:  Next, calculate the total interest by adding the 2nd interest earned in step 3 to the 1st interest of step 2:",
				 helpeleventh: "Total Interest <span class=bigger>=</span> 1st Interest + 2nd Interest",
				 helptwelveth: "Total Interest <span class=bigger>=</span> $140.00 + $147.00 <span class=bigger>=</span> $287.00",
				 template: "timeFraction"
            },{ 
                problem: 'Sonia Torres borrowed $4,200 for one year at Bank EZ where the yearly interest rate is 12% compounded semiannually.  Calculate the total amount that will be paid to the bank by the close of the loan (round all dollar amounts to the nearest cent)',
				 answer: '4719.12', 
				 helpFirst: "The Basic Interest Formula:", 
				 timeNumerator: "6",
				 timeDenominator: "12",
				 helpSecond: "Interest <span class=bigger>=</span> \xA0Principal <span class=bigger>&sdot;</span> Rate <span class=bigger>&sdot;</span> Time<br><br>The interest is compounded semiannually.  This means that the interest must be calculated every 6 months, ",
				 helpPrefractionSecond: 'which is &nbsp;',
				 helpPostFractionSecond: ' of a year or 0.5 years.',
				 helpThird: "Step 1:  Calculate the interest rate for the first 6-month (0.5 year) period of the investment.",
				 helpfourth: "1st Interest <span class=bigger>=</span> $4,200 <span class=bigger>&sdot;</span> 12% <span class=bigger>&sdot;</span> 0.5 <span class=bigger>=</span> $252.00",
				 helpclosefourth: " <span class=bigger>=</span> $252.00",
				 helpfifth: "Step 2:  Next, calculate the 'new' principal by adding the interest earned in step 1 to the original principal:",
				 helpsixth: "'New' Principal <span class=bigger>=</span> Original Principal + 1st Interest",
				 helpseventh: "'New' Principal <span class=bigger>=</span> $4,200 + $252.00 <span class=bigger>=</span> $4,452.00",
				 helpeighth: "Step 3:  Calculate the interest rate for the 2nd 6-month (0.5 year) period of the investment.",
				 helpninth: "2nd Interest <span class=bigger>=</span> $4,452.00 <span class=bigger>&sdot;</span> 12% <span class=bigger>&sdot;</span> 0.5 <span class=bigger>=</span> $267.12",
				 helptenth: "Step 4:  Next, calculate the final principal by adding the 2nd interest earned in step 3 to the new  principal of step 2:",
				 helpeleventh: "Final Principal <span class=bigger>=</span> 'New' Principal + 2nd Interest",
				 helptwelveth: "Final Principal <span class=bigger>=</span> $4,452.00 + $267.12 <span class=bigger>=</span> $4719.12",
				 template: "timeFraction"
            }

        ];
		
    return dataUtils.build(desc, template, data);
	
}]);