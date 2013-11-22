/*global angular */

angular.module('mathSkills').service('data21_2', ['dataUtils', function (dataUtils) {
    var desc = {
            title: '21.2 Social Security and Income Tax',
            path: '21.2-social-security-and-income-tax',
            children: []
        },
        template = {
            main: {
                
                title: 'Sales Tax',
                children: [{
                    title: 'Main Answer',
                    children: [{
                        problem: '\\html{<span class="blue-text">$SStax</span><br><br>$problem<br><br><span class="blue-text">$round</span>}',
                        answer: '\\grp'+
                                    '{\\str{$pre_symbol}}'+
                                    '{\\css{$answerIn}{width200px}}'+
                                    '{\\str{$post_symbol}}',
                        controls: {
                            "checkAnswer": true,
                            "help": false,
                            "workbook": true
                        }
                    }]
                }, {
                    title: 'Workbook',
                    children: [{
                        problem: '\\html{<span class="blue-text">$SStax</span><br><br>$problem<br><br>$round}',
                        answer: '\\wb{'+
                                    '\\rowgrp{'+
                                        '\\ins{Set up a percent proportion to solve the problem (use "X" for an unknown value).}'+
                                    '}{'+
                                        '\\grp'+
                                        '{\\frac{\\input{[\"$ln\",\"$rn\"]}}{\\input{[\"$ld\",\"$rd\"]}}}'+
                                        '{\\sign{=}}'+
                                        '{\\frac{\\input{[\"$rn\",\"$ln\"]}}{\\input{[\"$rd\",\"$ld\"]}}}'+
                                    '}'+
                                '}{well}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }, {
                        problem: '\\html{<span class="blue-text">$SStax</span><br><br>$problem<br><br>$round}',
                        answer: '\\wb{'+
                                    '\\rowgrp{'+
                                        '\\choose{['+
                                            '\\ins{}{q},'+
                                            '\\ins{The standard percent proportion is set up as follows:}]}'+
                                        '{$$previousCorrect}'+
                                    '}{'+
                                        '\\css{'+
                                            '\\choose{['+
                                                '\\ins{}{q},'+
                                                '\\grp'+
                                                    '{\\frac{\\str{$$dln}}{\\str{$$dld}}}'+
                                                    '{\\sign{=}}'+
                                                    '{\\frac{\\str{$$drn}}{\\str{$$drd}}}'+
                                            ']}{$$previousCorrect}}'+
                                        '{bottom-marg}'+
                                    '}{'+
                                        '\\choose{['+
                                            '\\ins{Yes!},'+
                                            '\\ins{$onlyFirst130We substitute the given values to get:}]}'+
                                        '{$$previousCorrect}'+
                                    '}{'+
                                        '\\css{'+
                                            '\\grp'+
                                                '{\\frac{\\str{$$ln}}{\\str{$$ld}}}'+
                                                '{\\sign{=}}'+
                                                '{\\frac{\\str{$$rn}}{\\str{$$rd}}}'+
                                        '}{bottom-marg}'+
                                    '}{'+
                                        '\\ins{Now solve the problem.}'+
                                    '}{'+
                                        '\\css{'+
                                            '\\grp'+
                                                '{\\str{X}}'+
                                                '{\\sign{=}}'+
                                                '{\\set{\\input{$$answer}}{$$key}}'+
                                        '}{proportion-application}'+
                                    '}'+
                                '}{well}{end}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }, {
                        problem: '\\html{<span class="blue-text">$SStax</span><br><br>$problem<br><br>$round}',
                        answer: '\\wb{'+
                                    '\\rowgrp{'+
                                        '\\css{'+
                                            '\\choose{['+
                                                '\\ins{}{q},'+
                                                '\\grp'+
                                                    '{\\frac{\\str{$$ln}}{\\str{$$ld}}}'+
                                                    '{\\sign{=}}'+
                                                    '{\\frac{\\str{$$rn}}{\\str{$$rd}}}'+
                                            ']}{$$previousCorrect}'+
                                        '}{bottom-marg}'+
                                    '}{'+
                                        '\\choose{['+
                                            '\\ins{Congratulations!},'+
                                            '\\ins{The correct answer is found by following the process to solve all proportion problems. We substitute the given values to get:}'+
                                        ']}{$$previousCorrect}'+
                                    '}{'+
                                        '\\css{'+
                                            '\\choose{['+
                                                '\\grp'+
                                                    '{\\frac{\\str{$$ln}}{\\str{$$ld}}}'+
                                                    '{\\sign{=}}'+
                                                    '{\\frac{\\str{$$rn}}{\\str{$$rd}}},'+
                                                '\\css{'+
                                                    '\\grp'+
                                                        '{\\str{X}}'+
                                                        '{\\sign{=}}'+
                                                        '{$solution}'+
                                                '}{proportion-application}'+
                                            ']}{$$previousCorrect}'+
                                        '}{bottom-marg}'+
                                    '}{'+
                                        '\\choose{['+
                                            '\\ins{}{q},'+
                                            '\\ins{The answer is}]}'+
                                        '{$$previousCorrect}'+
                                    '}{'+
                                        '\\choose{['+
                                            '\\ins{}{q},'+
                                            '\\css{'+
                                                '\\grp'+
                                                    '{\\str{$$pre_symbol}}'+
                                                    '{\\str{$answer}}'+
                                                    '{\\str{$$post_symbol}}'+
                                            '}{proportion-application}]}'+
                                        '{$$previousCorrect}'+
                                    '}}{well}',
                        controls: {
                            "checkAnswer": true,
                            "help": false,
							"stepwiseNextProblem": true
							
                        }
                    }]
                }]
            },
			incomeTax: {
                title: 'Solving Social Security and Income Tax Problems',
				children: [{
					title: 'Main Answer',
					children: [{
						problem: '\\pan{6}{6}{\\col'
						+'{\\str{$problem}}'
						+'{\\str{\xA0}}'
						+'{\\str{\xA0}}'
						+'{\\chart{2013 Income Tax Rate Schedule for Single Person}{7}{2}{["If you have a taxable income:","Amount of Income Tax","between $0 and $8,925, then you pay:","10% <span class=bigger>&sdot;</span>(amount of taxable income)","between $8,925 and $36,250, then you pay:","$893 + <br> 15% <span class=bigger>&sdot;</span>(amount of taxable income over $8,925)","between $36,250 and $87,850, then you pay:","$4,991 + <br> 25% <span class=bigger>&sdot;</span>(amount of taxable income over $36,250)", "between $87,850 and $183,250, then you pay:","$17,891 + <br>28% <span class=bigger>&sdot;</span>(amount of taxable income over $87,850)", "between $183,250 and $398,350, then you pay:","$44,603 +<br> 33% <span class=bigger>&sdot;</span>(amount of taxable income over $183,250)", "over $398,350, then you pay:","$116,164 +<br> 39.6% <span class=bigger>&sdot;</span>(amount of taxable income over $398,350)"]}}',
						answer: '\\grp{\\str{$}}{\\css{\\input{$answer}}{width200px}}',
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
							+'{\\html{Round to the nearest whole dollar:}}'
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
            { //1
                problem: 'On total wages of $16,400, how much social security tax did Jacob pay?',
                SStax:'The Social Security Tax Rate of 6.2% is to be paid on total earnings up to $130,700.',
                round:'',
                answerIn: dataUtils.pre('\\inputcash{$$answer}'),
                answer: '1016.80', template: 'main', pre_symbol: '$', post_symbol: '', 
                key: 'rn', fkey: 'ln', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: '6.2', rn: 'x', 
                ld: '100', rd: '16400', 
                solution: dataUtils.pre('\\grp{\\str{16400}}{\\html{&#149;}}{\\str{6.2}}{css{\\html{\xF7}}{bigger}}{\\str{100}}'),
                onlyFirst130: "",
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"]],
            },
            { //2
                problem: 'Jacob paid $1,016.80 in social security taxes this year. What were his total earnings?',
                SStax:'The Social Security Tax Rate of 6.2% is to be paid on total earnings up to $130,700.',
                round:'',
                answerIn: dataUtils.pre('\\input{$$answer}'),
                answer: '16400', template: 'main', pre_symbol: '$', post_symbol: '', 
                key: 'rd', fkey: 'ld', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: '6.2', rn: '1016.80', 
                ld: '100', rd: 'x', 
                solution: dataUtils.pre('\\grp{\\str{100}}{\\html{&#149;}}{\\str{1016.80}}{css{\\html{\xF7}}{bigger}}{\\str{6.2}}'),
                onlyFirst130: "",
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"]],
            },
            { //3
                problem: 'On total wages of $55,200, how much social security tax did Mary pay?',
                SStax:'The Social Security Tax Rate of 6.2% is to be paid on total earnings up to $130,700.',
                round:'',
                answerIn: dataUtils.pre('\\inputcash{$$answer}'),
                answer: '3422.40', template: 'main', pre_symbol: '$', post_symbol: '', 
                key: 'rn', fkey: 'ln', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: '6.2', rn: 'x', 
                ld: '100', rd: '55200', 
                solution: dataUtils.pre('\\grp{\\str{55200}}{\\html{&#149;}}{\\str{6.2}}{css{\\html{\xF7}}{bigger}}{\\str{100}}'),
                onlyFirst130: "",
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"]],
            },
            { //4
                problem: 'Mary paid $3,422.40 in social security taxes this year. What were her total earnings?',
                SStax:'The Social Security Tax Rate of 6.2% is to be paid on total earnings up to $130,700.',
                round:'',
                answerIn: dataUtils.pre('\\inputcash{$$answer}'),
                answer: '55200', template: 'main', pre_symbol: '$', post_symbol: '', 
                key: 'rd', fkey: 'ld', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: '6.2', rn: '3422.40', 
                ld: '100', rd: 'x', 
                solution: dataUtils.pre('\\grp{\\str{100}}{\\html{&#149;}}{\\str{3422.40}}{css{\\html{\xF7}}{bigger}}{\\str{6.2}}'),
                onlyFirst130: "",
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"]],
            },
            { //5
                problem: 'On total wages of $33,030, how much social security tax did Slina pay?',
                SStax:'The Social Security Tax Rate of 6.2% is to be paid on total earnings up to $130,700.',
                round:'',
                answerIn: dataUtils.pre('\\inputcash{$$answer}'),
                answer: '2047.86', template: 'main', pre_symbol: '$', post_symbol: '', 
                key: 'rn', fkey: 'ln', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: '6.2', rn: 'x', 
                ld: '100', rd: '33030', 
                solution: dataUtils.pre('\\grp{\\str{33030}}{\\html{&#149;}}{\\str{6.2}}{css{\\html{\xF7}}{bigger}}{\\str{100}}'),
                onlyFirst130: "",
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"]],
            },
            { //6
                problem: 'Slina paid $2,047.86 in social security taxes this year. What were her total earnings?',
                SStax:'The Social Security Tax Rate of 6.2% is to be paid on total earnings up to $130,700.',
                round:'',
                answerIn: dataUtils.pre('\\inputcash{$$answer}'),
                answer: '33030', template: 'main', pre_symbol: '$', post_symbol: '', 
                key: 'rd', fkey: 'ld', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: '6.2', rn: '2047.86', 
                ld: '100', rd: 'x', 
                solution: dataUtils.pre('\\grp{\\str{100}}{\\html{&#149;}}{\\str{2047.86}}{css{\\html{\xF7}}{bigger}}{\\str{6.2}}'),
                onlyFirst130: "",
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"]],
            },
            { //7
                problem: 'On total wages of $10010.48, how much social security tax did Tim pay?',
                SStax:'The Social Security Tax Rate of 6.2% is to be paid on total earnings up to $130,700.',
                round:'Round answer to the nearest cent.',
                answerIn: dataUtils.pre('\\inputcash{$$answer}'),
                answer: '620.65', template: 'main', pre_symbol: '$', post_symbol: '', 
                key: 'rn', fkey: 'ln', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: '6.2', rn: 'x', 
                ld: '100', rd: '10010.48', 
                solution: dataUtils.pre('\\grp{\\str{10010.48}}{\\html{&#149;}}{\\str{6.2}}{css{\\html{\xF7}}{bigger}}{\\str{100}}'),
                onlyFirst130: "",
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"]],
            },
            { //8
                problem: 'Tim paid $620.65 in social security taxes this year. What were his total earnings?',
                SStax:'The Social Security Tax Rate of 6.2% is to be paid on total earnings up to $130,700.',
                round:'Round answer to the nearest cent.',
                answerIn: dataUtils.pre('\\inputcash{$$answer}'),
                answer: '10010.48', template: 'main', pre_symbol: '$', post_symbol: '', 
                key: 'rd', fkey: 'ld', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: '6.2', rn: '620.65', 
                ld: '100', rd: 'x', 
                solution: dataUtils.pre('\\grp{\\str{100}}{\\html{&#149;}}{\\str{620.65}}{css{\\html{\xF7}}{bigger}}{\\str{6.2}}'),
                onlyFirst130: "",
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"]],
            },
            { //9
                problem: 'On total wages of $1,560,960, how much social security tax did Justin pay?',
                SStax:'The Social Security Tax Rate of 6.2% is to be paid on total earnings up to $130,700.',
                round:'',
                answerIn: dataUtils.pre('\\inputcash{$$answer}'),
                answer: '8103.40', template: 'main', pre_symbol: '$', post_symbol: '', 
                key: 'rn', fkey: 'ln', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: '6.2', rn: 'x', 
                ld: '100', rd: '130700', 
                solution: dataUtils.pre('\\grp{\\str{130700}}{\\html{&#149;}}{\\str{6.2}}{css{\\html{\xF7}}{bigger}}{\\str{100}}'),
                onlyFirst130: "Social Security tax is only paid on the first $130,700 of Justin's $1,560,960 total earnings. ",
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"]],
            },
            { //10
                problem: 'Justin paid $8103.40 in social security taxes this year. What were his total earnings?',
                SStax:'The Social Security Tax Rate of 6.2% is to be paid on total earnings up to $130,700.',
                round:'',
                answerIn: dataUtils.pre('\\inputcash{$$answer}'),
                answer: '130700', template: 'main', pre_symbol: '$', post_symbol: '', 
                key: 'rd', fkey: 'ld', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: '6.2', rn: '8103.40', 
                ld: '100', rd: 'x', 
                solution: dataUtils.pre('\\grp{\\str{100}}{\\html{&#149;}}{\\str{8103.40}}{css{\\html{\xF7}}{bigger}}{\\str{6.2}}'),
                onlyFirst130: "",
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"]],
            },
            { //11
                problem: 'On total wages of $70,234.34, how much social security tax did Alison pay?',
                SStax:'The Social Security Tax Rate of 6.2% is to be paid on total earnings up to $130,700.',
                round:'Round answer to the nearest cent.',
                answerIn: dataUtils.pre('\\inputcash{$$answer}'),
                answer: '4354.53', template: 'main', pre_symbol: '$', post_symbol: '', 
                key: 'rn', fkey: 'ln', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: '6.2', rn: 'x', 
                ld: '100', rd: '70234.34', 
                solution: dataUtils.pre('\\grp{\\str{70234.34}}{\\html{&#149;}}{\\str{6.2}}{css{\\html{\xF7}}{bigger}}{\\str{100}}'),
                onlyFirst130: "",
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"]],
            },
            { //12
                problem: 'Alison paid $4,354.53 in social security taxes this year. What were her total earnings?',
                SStax:'The Social Security Tax Rate of 6.2% is to be paid on total earnings up to $130,700.',
                round:'Round answer to the nearest cent.',
                answerIn: dataUtils.pre('\\inputcash{$$answer}'),
                answer: '70234.35', template: 'main', pre_symbol: '$', post_symbol: '', 
                key: 'rd', fkey: 'ld', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: '6.2', rn: '4354.53', 
                ld: '100', rd: 'x', 
                solution: dataUtils.pre('\\grp{\\str{100}}{\\html{&#149;}}{\\str{4354.53}}{css{\\html{\xF7}}{bigger}}{\\str{6.2}}'),
                onlyFirst130: "",
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"]],
            },
            { //13
                problem: 'On total wages of $555,001, how much social security tax did Rosemary pay?',
                SStax:'The Social Security Tax Rate of 6.2% is to be paid on total earnings up to $130,700.',
                round:'Round answer to the nearest cent.',
                answerIn: dataUtils.pre('\\inputcash{$$answer}'),
                answer: '8103.40', template: 'main', pre_symbol: '$', post_symbol: '', 
                key: 'rn', fkey: 'ln', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: '6.2', rn: 'x', 
                ld: '100', rd: '130700', 
                solution: dataUtils.pre('\\grp{\\str{130700}}{\\html{&#149;}}{\\str{6.2}}{css{\\html{\xF7}}{bigger}}{\\str{100}}'),
                onlyFirst130: "Social Security tax is only paid on the first $130,700 of Rosemary's $555,001 total earnings. ",
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"]],
            },
            { //14
                problem: 'On total wages of $212,000, how much social security tax did Marcia pay?',
                SStax:'The Social Security Tax Rate of 6.2% is to be paid on total earnings up to $130,700.',
                round:'Round answer to the nearest cent.',
                answerIn: dataUtils.pre('\\inputcash{$$answer}'),
                answer: '8103.40', template: 'main', pre_symbol: '$', post_symbol: '', 
                key: 'rn', fkey: 'ln', 
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: '6.2', rn: 'x', 
                ld: '100', rd: '130700', 
                solution: dataUtils.pre('\\grp{\\str{130700}}{\\html{&#149;}}{\\str{6.2}}{css{\\html{\xF7}}{bigger}}{\\str{100}}'),
                onlyFirst130: "Social Security tax is only paid on the first $130,700 of Marcia's $212,000 total earnings. ",
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"]],
            },
            
            { 	//15
                problem: 'How much income tax did Julie pay in 2012 if her taxable income was $6,983? Round to the nearest dollar.',
				 answer: '698', 
				 helpFirst: "Julie's taxable income puts her in the first bracket.  She pays:", 
				 helpSecond: "10% of $6,983",
				 helpThird: "(.10)($6,983)",
				 helpfourth: "",
				 helpfifth: "",
				 template: 'incomeTax'
            },
            { 	//16
                problem: 'How much income tax did Mark pay in 2012 if his taxable income was $57,547? Round to the nearest dollar.',
				 answer: '10315', 
				 helpFirst: "Mark's taxable income puts him in the third bracket.  He pays:", 
				 helpSecond: "$4,991 + 25% of the amount over $36,250",
				 helpThird: "$4,991 + (.25)($57,547 - $36,250)",
				 helpfourth: "$4,991 + (.25)($21,297)<br><br>",
				 helpfifth: "$4,991 + $5,324.25<br><br>",
				 template: 'incomeTax'
            },
			{ 	//17
                problem: 'Kevin earned a total of $16,236 in 2012.  His taxable income, however, was $14,118. Calculate his income tax for 2012 Round to the nearest dollar.',
				 answer: '1672', 
				 helpFirst: "Kevin's taxable income puts him in the second bracket.  He pays:", 
				 helpSecond: "$893 + 15% of the amount over $8,925",
				 helpThird: "$893 + (.15)($14,118 - $8,925)",
				 helpfourth: "$893 + (.15)($5193)<br><br>",
				 helpfifth: "$893 + $778.95<br><br>",
				 template: 'incomeTax'
            },
			{ 	//18
                problem: 'How much income tax did Susan pay in 2012 if her taxable income was $233,819? Round to the nearest dollar.',
				 answer: '61291', 
				 helpFirst: "Susan's taxable income puts her in the fifth bracket.  She pays:", 
				 helpSecond: "$44,603 + 33% of the amount over $183,250",
				 helpThird: "$44,603 + (.33)($233,819 - $183,250)",
				 helpfourth: "$44,603 + (.33)($50,569)<br><br>",
				 helpfifth: "$44,603 + $16,687.77<br><br>",
				 template: 'incomeTax'
            },
			{ 	//19
                problem: "Dana earned a total of $15,425,378 in 2012.  Taxable income for Dana, however, was $8,424,169. Calculate Dana's income tax for 2012 Round to the nearest dollar.",
				 answer: '3294388', 
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