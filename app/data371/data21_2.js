/*global angular */

angular.module('mathSkills').service('data21_2', ['dataUtils', function (dataUtils) {
    var desc = {
            title: '21.2 Social Security and Income Tax',
            path: '21.2-social-security-and-income-tax',
            children: []
        },
        template = {
            main: {
                
                title: 'Social Security Tax',
                children: [{
                    title: 'Main Answer',
                    children: [{
                        problem: '\\html{<span class="blue-text">$SStax</span><br><br>$problem}',
						answer: '\\grp{\\str{$}}{\\css{\\inputcash{$answer}}{width200px}}',
                        controls: {
                            "checkAnswer": true,
                            "help": false,
                            "workbook": true
                        }
                    }]
                }, {
                    title: 'Workbook',
                    children: [{
                        problem: '\\html{<span class="blue-text">$SStax</span><br><br>$problem}',
                        answer: '\\wb{\\rowgrp{'+
                            '\\ins{Set up a percent proportion to solve the problem (use "X" for an unknown value).}'+
                        '}{'+
                            '\\grp'+
                            '{\\frac{\\input{[\"$$ln\",\"$$rn\"]}}{\\input{[\"$$ld\",\"$$rd\"]}}}'+
                            '{\\sign{=}}'+
                            '{\\frac{\\input{[\"$$rn\",\"$$ln\"]}}{\\input{[\"$$rd\",\"$$ld\"]}}}'+
                        '}}{well}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }, {
                        problem: '\\html{<span class="blue-text">$SStax</span><br><br>$problem}',
                        answer: '\\wb{\\rowgrp{'+
                            '\\choose{[\\html{},\\ins{The standard percent proportion is set up as follows:}]}{$$previousCorrect}'+
                        '}{'+
                            '\\choose{[\\html{},\\grp{\\frac{\\str{$$dln}}{\\str{$$dld}}}{\\sign{=}}{\\frac{\\str{$$drn}}{\\str{$$drd}}}]}{$$previousCorrect}'+
                        '}{'+
                            '\\choose{[\\ins{Yes!},\\ins{We substitute the given values to get:}]}{$$previousCorrect}'+
                        '}{'+
                            '\\grp{\\frac{\\str{$$ln}}{\\str{$$ld}}}{\\sign{=}}{\\frac{\\str{$$rn}}{\\str{$$rd}}}'+
                        '}{'+
                            '\\ins{Now solve the problem.}'+
                        '}{'+
                            '\\css{\\grp{\\html{X}}{\\sign{=}}{\\set{\\input{$$answer}}{$$key}}}{proportion-application}'+
                        '}}{well}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }, {
                        problem: '\\html{<span class="blue-text">$SStax</span><br><br>$problem}',
                        answer: '\\wb{\\rowgrp{'+
                            '\\choose{[\\html{},\\grp{\\frac{\\str{$$ln}}{\\str{$$ld}}}{\\sign{=}}{\\frac{\\str{$$rn}}{\\str{$$rd}}}]}{$$previousCorrect}'+
                        '}{'+
                            '\\choose{[\\ins{Congratulations!},\\ins{The correct answer is found by following the process to solve all proportion problems. We substitute the given values to get:}]}{$$previousCorrect}'+
                        '}{'+
                            '\\choose{[\\grp{\\frac{\\str{$$ln}}{\\str{$$ld}}}{\\sign{=}}{\\frac{\\str{$$rn}}{\\str{$$rd}}},\\css{\\grp{\\html{X}}{\\sign{=}}{\\html{$solution}}}{proportion-application}]}{$$previousCorrect}'+
                        '}{'+
                            '\\choose{[\\html{},\\ins{The answer is}]}{$$previousCorrect}'+
                        '}{'+
                            '\\choose{[\\html{},\\css{\\grp{\\html{$$pre_symbol}}{\\html{$$answer}}{\\html{$$post_symbol}}}{proportion-application}]}{$$previousCorrect}'+
                        '}}{well}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }]
                }]
            },
			incomeTax: {
                title: 'Solving Social Security and Income Tax Problems',
				children: [{
					title: 'Main Answer',
					children: [{
						problem: '\\col'
						+'{\\str{$problem}}'
						+'{\\str{\xA0}}'
						+'{\\str{\xA0}}'
						+'{\\chart{2012 Income Tax Rate Schedule for Single Person}{7}{2}{["If you have a taxable income:","Amount of Income Tax","between $0 and $8,925, then you pay:","10% <span class=bigger>&sdot;</span>(amount of taxable income)","between $8,925 and $36,250, then you pay:","$893 + <br> 15% <span class=bigger>&sdot;</span>(amount of taxable income over $8,925)","between $36,250 and $87,850, then you pay:","$4,991 + <br> 25% <span class=bigger>&sdot;</span>(amount of taxable income over $36,250)", "between $87,850 and $183,250, then you pay:","$17,891 + <br>28% <span class=bigger>&sdot;</span>(amount of taxable income over $87,850)", "between $183,250 and $398,350, then you pay:","$44,603 +<br> 33% <span class=bigger>&sdot;</span>(amount of taxable income over $183,250)", "over $398,350, then you pay:","$116,164 +<br> 39.6% <span class=bigger>&sdot;</span>(amount of taxable income over $398,350)"]}',
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
							+'{\\html{$helpfifth}}'
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
                problem: 'On total wages of $16,400, how much social security tax did Jacob pay?',
                SStax:'The Social Security Tax Rate of 6.2% is to be paid on total earnings up to $130,700.',
                answer: '1016.80', template: 'main', pre_symbol: '$', post_symbol: '', 
                key: 'rn', keyf: 'ln', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: 100, drd: 'Base (Whole Quantity)',
                ln: 6.2, rn: 'x', 
                ld: 100, rd: 16400, 
                solution: '$$ln &#149; $$rd &#247; $$ld',
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"], ["key", "keyf"]],
            },
            { 
                problem: 'Jacob paid $1,016.80 in social security taxes this year. What were his total earnings?',
                SStax:'The Social Security Tax Rate of 6.2% is to be paid on total earnings up to $130,700.',
                answer: '16,400', template: 'main', pre_symbol: '$', post_symbol: '', 
                key: 'rd', keyf: 'ld', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: '6.2', rn: '1016.80', 
                ld: '100', rd: 'x', 
                solution: '$$ld &#149; $$rn &#247; $$ln',
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"], ["key", "keyf"]],
            },
            { 
                problem: 'How much income tax did Julie pay in 2012 if her taxable income was $6,983? (round to the nearest dollar)',
				 answer: '698.00', 
				 helpFirst: "Julie's taxable income puts her in the first bracket.  She pays:", 
				 helpSecond: "10% of $6,983",
				 helpThird: "(.10)($6,983)",
				 helpfourth: "",
				 helpfifth: "",
				 template: 'incomeTax'
            },
            { 
                problem: 'How much income tax did Mark pay in 2012 if his taxable income was $57,547? (round to the nearest dollar)',
				 answer: '10,315.00', 
				 helpFirst: "Mark's taxable income puts him in the third bracket.  He pays:", 
				 helpSecond: "$4,991 + 25% of the amount over $36,250",
				 helpThird: "$4,991 + (.25)($57,547 - $36,250)",
				 helpfourth: "$4,991 + (.25)($21,297)<br><br>",
				 helpfifth: "$4,991 + $5,324.25<br><br>",
				 template: 'incomeTax'
            },
			{ 
                problem: 'Kevin earned a total of $16,236 in 2012.  His taxable income, however, was $14,118. Calculate his income tax for 2012 (round to the nearest dollar)',
				 answer: '1,760.00', 
				 helpFirst: "Kevin's taxable income puts him in the second bracket.  He pays:", 
				 helpSecond: "$893 + 15% of the amount over $8,925",
				 helpThird: "$893 + (.15)($14,118 - $8,925)",
				 helpfourth: "$893 + (.15)($5193)<br><br>",
				 helpfifth: "$893 + $778.95<br><br>",
				 template: 'incomeTax'
            },
			{ 
                problem: 'How much income tax did Susan pay in 2012 if her taxable income was $233,819? (round to the nearest dollar)',
				 answer: '61,291.00', 
				 helpFirst: "Susan's taxable income puts her in the fifth bracket.  She pays:", 
				 helpSecond: "$44,603 + 33% of the amount over $183,250",
				 helpThird: "$44,603 + (.33)($233,819 - $183,250)",
				 helpfourth: "$44,603 + (.33)($50,569)<br><br>",
				 helpfifth: "$44,603 + $16,687.77<br><br>",
				 template: 'incomeTax'
            },
			{ 
                problem: "Dana earned a total of $15,425,378 in 2012.  Taxable income for Dana, however, was $8,424,169. Calculate Dana's income tax for 2012 (round to the nearest dollar)",
				 answer: '3,294,388.00', 
				 helpFirst: "Dana's taxable income puts Dana in the fifth bracket.  Dana pays:", 
				 helpSecond: "$116,164 + 39.6% of the amount over $398,350",
				 helpThird: "$116,164 + (.396)($8,424,169 - $398,350)",
				 helpfourth: "$116,164 + (.396)($8,025,819)<br><br>",
				 helpfifth: "$116,164 + $3,178,224.32<br><br>",
				 template: 'incomeTax'
            }
        ];
		
    return dataUtils.build(desc, template, data);
	
}]);