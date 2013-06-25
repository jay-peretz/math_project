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
						answer: '\\grp{\\html{$}}{\\input{$answer}}',
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
							+'{\\css{\\row{\\str{$}}{\\str{$answer \xA0 }}}{help-answer-text-tight}}'
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
						answer: '\\grp{\\html{$}}{\\input{$answer}}',
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
							+'{\\css{\\row{\\str{$}}{\\str{$answer \xA0 }}}{help-answer-text-tight}}'
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
				 helpSecond: "Interest <span class=bigger>=</span> \xA0Principle <span class=bigger>&sdot;</span> Rate <span class=bigger>&sdot;</span> Time",
				 helpThird: "2) Substitute the values into the formula:",
				 helpfourth: "I <span class=bigger>=</span> $1,200 <span class=bigger>&sdot;</span> 6% <span class=bigger>&sdot;</span>",
				 timeNumerator: "9",
				 timeDenominator: "12",
				 helpfifth: "3) Calculate the interest:",
				 helpsixth: "I <span class=bigger>=</span> $1200 <span class=bigger>&sdot;</span> 0.06 <span class=bigger>&sdot;</span> 0.75",
				 template: 'timeFraction'
            },{ 
                problem: 'Beth Roberts borrowed $1,400 at a bank where the simple interest rate is 11%.  Assuming she made no down payment on this loan, calculate the total amount she must make at the end of one year.  (round all dollar amounts to the nearest cent)',
				 answer: '1,554.00', 
				 helpFirst: "1) The Basic Interest Formula:", 
				 helpSecond: "Interest <span class=bigger>\xA0 = \xA0</span> \xA0Principle <span class=bigger>&sdot;</span> Rate <span class=bigger>&sdot;</span> Time",
				 helpThird: "2) Substitute the values into the formula:",
				 helpfourth: "I <span class=bigger>=</span> $1,400 <span class=bigger>&sdot;</span> 11% <span class=bigger>&sdot;</span> 1",
				 helpfifth: "3) Calculate the interest:",
				 helpsixth: "I <span class=bigger>=</span> $1400 <span class=bigger>&sdot;</span> 0.11 <span class=bigger>&sdot;</span> 1",
				 helpseventh: "I <span class=bigger>=</span> $154.00",
				 helpeighth: "Total Payment = Principle + Interest",
				 helpninth: "Total Payment = $1400 + $154 <span class=bigger>=</span> $1,554.00",
				 helptenth: "",
				 template: 'timeWhole'
            },
			{ 
                problem: 'Alicia Taylor borrowed $1,600 at a bank where the simple interest rate is 12%.  Assuming she made no down payment on this loan, first calculate her pay-off amount at the end of a year, then determine her monthly payments. (round all dollar amounts to the nearest cent)',
				 answer: '149.33', 
				 helpFirst: "1) The Basic Interest Formula:", 
				 helpSecond: "Interest <span class=bigger>\xA0 = \xA0</span> \xA0Principle <span class=bigger>&sdot;</span> Rate <span class=bigger>&sdot;</span> Time",
				 helpThird: "2) Substitute the values into the formula:",
				 helpfourth: "I <span class=bigger>=</span> $1,600 <span class=bigger>&sdot;</span> 12% <span class=bigger>&sdot;</span> 1",
				 helpfifth: "3) Calculate the interest:",
				 helpsixth: "I <span class=bigger>=</span> $1600 <span class=bigger>&sdot;</span> 0.12 <span class=bigger>&sdot;</span> 1",
				 helpseventh: "I <span class=bigger>=</span> $192.00",
				 helpeighth: "The Monthly Payment amount is determined by dividing the Total Payment by the Total Months:",
				 helpninth: "Monthly Payment <span class=bigger>=</span> Total Payment <span class=bigger>&divide;</span> Total Months",
				 helptenth: "Monthly Payment <span class=bigger>=</span> $1792.00 <span class=bigger>&divide;</span> 12 <span class=bigger>=</span> 149.33",
				 template: 'timeWhole'
            },

        ];
		
    return dataUtils.build(desc, template, data);
	
}]);