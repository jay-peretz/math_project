/*global angular */

angular.module('mathSkills').service('data17_2', ['dataUtils', function (dataUtils) {
    var desc = {
			title: '17.2 Solving Unit Rates Using Proportions',
            path: '17.2-solving-unit-rates-using-proportions',
            children: []
        },
        template = {
            main: {
                
                title: 'Solving Unit Rates Using Proportions',
                children: [{
                    title: 'Main Answer',
                    children: [{
                        problem: '\\html{$question $round}',
                        answer: '\\grp{\\input{$answer}}{\\frac{\\input{$Nanswer}}{\\input{$Danswer}}}',
                        controls: {
                            "checkAnswer": true,
                            "help": false,
                            "workbook": true
                        }
                    }]
                }, {
                    title: 'Workbook',
                    children: [{
                        problem: '\\html{$question $round}',
                        answer: '\\wb{\\rowgrp{'+
                                    '\\ins{Identify the two items (labels) that are in relationship with each other:}'+
                                '}{'+
                                    '\\frac'+
                                        '{\\select{$lbln}{$lblarr}}'+
                                        '{\\select{$lbld}{$lblarr}}'+
                                '}}{well}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }, {
                        problem: '\\html{$question $round}',
                        answer: '\\wb{\\rowgrp{'+
                                    '\\choose{['+
                                        '\\ins{Good! Now what $words $$lbln and what number of $$lbld are provided in the given relationship?},'+
                                        '\\ins{No, the given relationship is between $lbln and $lbld. Now what $words $lbln and what number of $lbld are provided in the given relationship?}'+
                                    ']}{$$previousCorrect}'+
                                '}{'+
                                    '\\frac'+
                                    '{\\grp{\\input{$ln}}{\\frac{\\input{$Nln}}{\\input{$Dln}}}{\\str{$lbln}}}'+
                                    '{\\grp{\\input{$ld}}{\\frac{\\input{$Nld}}{\\input{$Dld}}}{\\str{$lbld}}}'+
                                '}}{well}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }, {
                        problem: '\\html{$question $round}',
                        answer: '\\wb{\\rowgrp{'+
                                    '\\choose{['+
                                        '\\ins{Yes, now make this first relationship between $lbln and $lbld equal to a second relationship (use \\"X\\" for an unknown value).},'+
                                        '\\ins{We are told that there are $ln $lbln to every $ld $lbld. The given relationship is:}'+
                                    ']}{$$previousCorrect}'+
                                '}{'+
                                    '\\equiv'+
                                    '{\\grp{\\str{$ln}}{\\frac{\\str{$Nln}}{\\str{$Dln}}}{\\str{$lbln}}}'+
                                    '{\\grp{\\str{$ld}}{\\frac{\\str{$Nld}}{\\str{$Dld}}}{\\str{$lbld}}}'+
                                    '{\\str{=}}'+
                                    '{\\grp{\\input{$rn}}{\\frac{\\input{$Nrn}}{\\input{$Drn}}}{\\select{$lbln}{$lblarr}}}'+
                                    '{\\grp{\\input{$rd}{rden}{func}}{\\frac{\\input{$Nrd}}{\\input{$Drd}}}{\\select{$lbld}{$$lblarr}{selRDen}}}'+
                                '}{'+
                                    '\\choose{['+
                                        '\\ins{}{q},'+
                                        '\\ins{Now make this first relationship between $$lbln and $$lbld equal to a second relationship (use \\"X\\" for an unknown value).}'+
                                    ']}{$$previousCorrect}'+
                                '}}{well}',
                    
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }, {
                        problem: '\\html{$question $round}',
                        answer: '\\wb{\\rowgrp{'+
                                    '\\choose{['+
                                        '\\ins{Congratulations!},'+
                                        '\\ins{The correct solution is:}'+
                                    ']}{$$previousCorrect}'+
                                '}{'+
                                    '\\equiv'+
                                        '{\\grp{\\str{$ln}}{\\frac{\\str{$Nln}}{\\str{$Dln}}}{\\str{$lbln}}}'+
                                        '{\\grp{\\str{$ld}}{\\frac{\\str{$Nld}}{\\str{$Dld}}}{\\str{$lbld}}}'+
                                        '{\\str{=}}'+
                                        '{\\grp{\\str{$rn}}{\\frac{\\str{$Nrn}}{\\str{$Drn}}}{\\str{$lbln}}}'+
                                        '{\\grp{\\str{$rd}}{\\frac{\\str{$Nrd}}{\\str{$Drd}}}{\\str{$$lbld}}}'+
                                '}{'+
                                    '\\ins{Now fill in the boxes below with the complete unit rate answer.}'+
                                '}{'+
                                    '\\size{\\grp'+
                                        '{\\str{Answer:}}'+
                                        '{\\input{$$answer}}'+
                                        '{\\frac{\\input{$Nanswer}}{\\input{$Danswer}}}'+
                                        '{\\select{$lbln}{$lblarr}}'+
                                        '{\\html{<span class="bigger">/</span>}}'+
                                        '{\\select{$xlbld}{$xlblarr}}'+
                                    '}{zero pad-left}'+
                                '}}{well}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }]
                }]
            }, 
			lemonade: {
                
                title: 'Solving Unit Rates Using Proportions',
                children: [{
                    title: 'Main Answer',
                    children: [{
                        problem: '\\html{$question $round}',
                        answer: '\\grp{\\input{$answer}}{\\frac{\\input{$Nanswer}}{\\input{$Danswer}}}',
                        controls: {
                            "checkAnswer": true,
                            "help": false,
                            "workbook": true
                        }
                    }]
                }, {
                    title: 'Workbook',
                    children: [{
                        problem: '\\html{$question $round}',
                        answer: '\\wb{\\rowgrp{'+
                                    '\\ins{Identify the two items (labels) that are in relationship with each other:}'+
                                '}{'+
                                    '\\frac'+
                                        '{\\select{$lbln}{$lblarr}}'+
                                        '{\\select{$lbld}{$lblarr}}'+
                                '}}{well}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }, {
                        problem: '\\html{$question $round}',
                        answer: '\\wb{\\rowgrp{'+
                                    '\\choose{['+
                                        '\\ins{Good! Now what $words $$lbln and what number of $$lbld are provided in the given relationship?},'+
                                        '\\ins{No, the given relationship is between $lbln and $lbld. Now what $words $lbln and what number of $lbld are provided in the given relationship?}'+
                                    ']}{$$previousCorrect}'+
                                '}{'+
                                    '\\frac'+
                                    '{\\grp{\\input{$ln}}{\\frac{\\input{$Nln}}{\\input{$Dln}}}{\\str{$lbln}}}'+
                                    '{\\grp{\\input{$ld}}{\\frac{\\input{$Nld}}{\\input{$Dld}}}{\\str{$xlbld}}}'+
                                '}}{well}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }, {
                        problem: '\\html{$question $round}',
                        answer: '\\wb{\\rowgrp{'+
                                    '\\choose{['+
                                        '\\ins{Yes, now make this first relationship between $lbln and cups equal to a second relationship (use \\"X\\" for an unknown value).},'+
                                        '\\ins{We are told that there are $ln $lbln to every $ld $xlbld. The given relationship is:}'+
                                    ']}{$$previousCorrect}'+
                                '}{'+
                                    '\\equiv'+
                                    '{\\grp{\\str{$ln}}{\\frac{\\str{$Nln}}{\\str{$Dln}}}{\\str{$lbln}}}'+
                                    '{\\grp{\\str{$ld}}{\\frac{\\str{$Nld}}{\\str{$Dld}}}{\\str{$xlbld}}}'+
                                    '{\\str{=}}'+
                                    '{\\grp{\\input{$rn}}{\\frac{\\input{$Nrn}}{\\input{$Drn}}}{\\select{$lbln}{$lblarr}}}'+
                                    '{\\grp{\\input{$rd}{rden}{func}}{\\frac{\\input{$Nrd}}{\\input{$Drd}}}{\\select{$lbld}{$$lblarr}{selRDen}}}'+
                                '}{'+
                                    '\\choose{['+
                                        '\\ins{}{q},'+
                                        '\\ins{Now make this first relationship between $$lbln and $$lbld equal to a second relationship (use \\"X\\" for an unknown value).}'+
                                    ']}{$$previousCorrect}'+
                                '}}{well}',
                    
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }, {
                        problem: '\\html{$question $round}',
                        answer: '\\wb{\\rowgrp{'+
                                    '\\choose{['+
                                        '\\ins{Great! You now have a proportion. Solve the proportion problem.},'+
                                        '\\ins{The second relationship is &#36;$rn to an \\"unknown number\\" (shown here as \\"x\\") of cups. You now have a proportion:}'+
                                    ']}{$$previousCorrect}'+
                                '}{'+
                                    '\\equiv'+
                                        '{\\grp{\\str{$ln}}{\\frac{\\str{$Nln}}{\\str{$Dln}}}{\\str{$lbln}}}'+
                                        '{\\grp{\\str{$ld}}{\\frac{\\str{$Nld}}{\\str{$Dld}}}{\\str{cup}}}'+
                                        '{\\str{=}}'+
                                        '{\\grp{\\str{$rn}}{\\frac{\\str{$Nrn}}{\\str{$Drn}}}{\\str{$lbln}}}'+
                                        '{\\grp{\\str{$rd}}{\\frac{\\str{$Nrd}}{\\str{$Drd}}}{\\str{cups}}'+
                                    '}'+
                                '}{'+
                                    '\\ins{Now solve the proportion problem. $rememberToRound}'+
                                '}{'+
                                    '\\css{'+
                                        '\\grp'+
                                            '{\\str{X}}'+
                                            '{\\str{=}}'+
                                            '{\\input{$$answer}}'+
                                            '{\\frac{\\input{$Nanswer}}{\\input{$Danswer}}}'+
                                        '}'+
                                    '{proportion-application}'+
                                '}}{well}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }]
                }]
            },
			tablets: {
                
                title: 'Solving Unit Rates Using Proportions',
                children: [{
                    title: 'Main Answer',
                    children: [{
                        problem: '\\html{$question $round}',
                        answer: '\\grp{\\input{$answer}}{\\frac{\\input{$Nanswer}}{\\input{$Danswer}}}',
                        controls: {
                            "checkAnswer": true,
                            "help": false,
                            "workbook": true
                        }
                    }]
                }, {
                    title: 'Workbook',
                    children: [{
                        problem: '\\html{$question $round}',
                        answer: '\\wb{\\rowgrp{'+
                                    '\\ins{Identify the two items (labels) that are in relationship with each other:}'+
                                '}{'+
                                    '\\frac'+
                                        '{\\select{$lbln}{$lblarr}}'+
                                        '{\\select{$lbld}{$lblarr}}'+
                                '}}{well}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }, {
                        problem: '\\html{$question $round}',
                        answer: '\\wb{\\rowgrp{'+
                                    '\\choose{['+
                                        '\\ins{Good! Now what $words $$lbln and what number of $$lbld are provided in the given relationship?},'+
                                        '\\ins{No, the given relationship is between $lbln and $lbld. Now what $words $lbln and what number of $lbld are provided in the given relationship?}'+
                                    ']}{$$previousCorrect}'+
                                '}{'+
                                    '\\frac'+
                                    '{\\grp{\\input{$ln}}{\\frac{\\input{$Nln}}{\\input{$Dln}}}{\\str{$lbln}}}'+
                                    '{\\grp{\\input{$ld}}{\\frac{\\input{$Nld}}{\\input{$Dld}}}{\\str{$xlbld}}}'+
                                '}}{well}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }, {
                        problem: '\\html{$question $round}',
                        answer: '\\wb{\\rowgrp{'+
                                    '\\choose{['+
                                        '\\ins{Yes, now make this first relationship between $lbln and $xlbld equal to a second relationship (use \\"X\\" for an unknown value).},'+
                                        '\\ins{We are told that there are $ln $lbln to every $ld $xlbld. The given relationship is:}'+
                                    ']}{$$previousCorrect}'+
                                '}{'+
                                    '\\equiv'+
                                    '{\\grp{\\str{$ln}}{\\frac{\\str{$Nln}}{\\str{$Dln}}}{\\str{$lbln}}}'+
                                    '{\\grp{\\str{$ld}}{\\frac{\\str{$Nld}}{\\str{$Dld}}}{\\str{$xlbld}}}'+
                                    '{\\str{=}}'+
                                    '{\\grp{\\input{$rn}}{\\frac{\\input{$Nrn}}{\\input{$Drn}}}{\\select{$lbln}{$lblarr}}}'+
                                    '{\\grp{\\input{$rd}{rden}{func}}{\\frac{\\input{$Nrd}}{\\input{$Drd}}}{\\select{$lbld}{$$lblarr}{selRDen}}}'+
                                '}{'+
                                    '\\choose{['+
                                        '\\ins{}{q},'+
                                        '\\ins{Now make this first relationship between $$lbln and $$lbld equal to a second relationship (use \\"X\\" for an unknown value).}'+
                                    ']}{$$previousCorrect}'+
                                '}}{well}',
                    
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }, {
                        problem: '\\html{$question $round}',
                        answer: '\\wb{\\rowgrp{'+
                                    '\\choose{['+
                                        '\\ins{Great! You have a proportion.},'+
                                        '\\ins{The second relationship is $rn of $$lbln to every \\"unknown number\\" (shown here as \\"x\\") of tablets. You now have a proportion:}'+
                                    ']}{$$previousCorrect}'+
                                '}{'+
                                    '\\equiv'+
                                        '{\\grp{\\str{$ln}}{\\frac{\\str{$Nln}}{\\str{$Dln}}}{\\str{$lbln}}}'+
                                        '{\\grp{\\str{$ld}}{\\frac{\\str{$Nld}}{\\str{$Dld}}}{\\str{$xlbld}}}'+
                                        '{\\str{=}}'+
                                        '{\\grp{\\str{$rn}}{\\frac{\\str{$Nrn}}{\\str{$Drn}}}{\\str{$lbln}}}'+
                                        '{\\grp{\\str{$rd}}{\\frac{\\str{$Nrd}}{\\str{$Drd}}}{\\str{tablets}}'+
                                    '}'+
                                '}{'+
                                    '\\ins{Now solve the proportion problem. $rememberToRound}'+
                                '}{'+
                                    '\\css{'+
                                        '\\grp'+
                                            '{\\str{X}}'+
                                            '{\\str{=}}'+
                                            '{\\input{$$answer}}'+
                                            '{\\frac{\\input{$Nanswer}}{\\input{$Danswer}}}'+
                                        '}'+
                                    '{proportion-application}'+
                                '}}{well}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }, {
                        problem: '\\html{$question $round}',
                        answer: '\\wb{\\rowgrp{'+
                                    '\\choose{['+
                                        '\\ins{Congratulations!},'+
                                        '\\ins{The correct solution is:}'+
                                    ']}{$$previousCorrect}'+
                                '}{'+
                                    '\\equiv'+
                                        '{\\grp{\\str{$ln}}{\\frac{\\str{$Nln}}{\\str{$Dln}}}{\\str{$lbln}}}'+
                                        '{\\grp{\\str{$ld}}{\\frac{\\str{$Nld}}{\\str{$Dld}}}{\\str{$lbld}}}'+
                                        '{\\str{=}}'+
                                        '{\\grp{\\str{$rn}}{\\frac{\\str{$Nrn}}{\\str{$Drn}}}{\\str{$lbln}}}'+
                                        '{\\grp{\\str{$answer}}{\\str{tablets}}}'+
                                '}{'+
                                    '\\ins{Now fill in the boxes below with the complete unit rate answer.}'+
                                '}{'+
                                    '\\size{\\grp'+
                                        '{\\str{Answer:}}'+
                                        '{\\input{$$answer}}'+
                                        '{\\frac{\\input{$Nanswer}}{\\input{$Danswer}}}'+
                                        '{\\select{tablets}{[\\"(mg) medication\\",\\"cups\\",\\"tablets\\",\\"day\\"]}}'+
                                        '{\\html{<span class="bigger">/</span>}}'+
                                        '{\\select{day}{[\\"(mg) medication\\",\\"cups\\",\\"tablets\\",\\"day\\"]}}'+
                                    '}{zero pad-left}'+
                                '}}{well}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }]
                }]
            }
        },
        data = 
        [
		 	// problem 1
            {
                question: 'In seven days Mandy earned $154 baby sitting. How much did she earn per day?',
                round: '',
                answer: '22', Nanswer:'', Danswer:'', template: 'main',
                ln: '154', Nln: '', Dln: '', rn: 'x', Nrn: '', Drn: '', lbln: 'dollars', words: 'number of',
                ld: '7', Nld: '', Dld: '', rd: '1', Nrd: '', Drd: '', lbld: 'days', xlbld: 'day',
                lblarr: '[\\"dollars\\",\\"days\\",\\"earned\\"]',
                xlblarr: '[\\"dollar\\",\\"day\\",\\"earned\\"]',
                previousCorrect: true,
            },
			// problem 2
            {
                question: 'A store sold 60 gallons of ice cream in 8 hours. How many gallons were sold per hour?', 
                round: '',
                answer: '7.5', Nanswer:'', Danswer:'', template: 'main',
                ln: '60', Nln: '', Dln: '', rn: 'x', Nrn: '', Drn: '', lbln: 'gallons', words: 'number of',
                ld: '8', Nld: '', Dld: '', rd: '1', Nrd: '', Drd: '', lbld: 'hours', xlbld: 'hour',
                lblarr: '[\\"gallons\\",\\"ice cream\\",\\"hours\\"]',
                xlblarr: '[\\"gallon\\",\\"ice cream\\",\\"hour\\"]',
                previousCorrect: true,
            },
			// problem 3
            {
                question: 'A store sold 40 gallons of ice cream in 6 hours. How many gallons were sold per hour?', 
                round: '<br><br><span class=blue-text>Round to nearest tenth of a gallon.</span>',
                answer: '6.7', Nanswer:'', Danswer:'', template: 'main',
                ln: '40', Nln: '', Dln: '', rn: 'x', Nrn: '', Drn: '', lbln: 'gallons', words: 'number of',
                ld: '6', Nld: '', Dld: '', rd: '1', Nrd: '', Drd: '', lbld: 'hours', xlbld: 'hour',
                lblarr: '[\\"gallons\\",\\"ice cream\\",\\"hours\\"]',
                xlblarr: '[\\"gallon\\",\\"ice cream\\",\\"hour\\"]',
                previousCorrect: true,
            },
			// problem 4
            {
                question: 'Six bottles of juice cost $7.20. What is the price per bottle of juice?', 
                round: '',
                answer: '1.20', Nanswer:'', Danswer:'', template: 'main',
                ln: '7.20', Nln: '', Dln: '', rn: 'x', Nrn: '', Drn: '', lbln: 'dollars', words: 'is the',
                ld: '6', Nld: '', Dld: '', rd: '1', Nrd: '', Drd: '', lbld: 'bottles', xlbld: 'bottle',
                lblarr: '[\\"bottles\\",\\"cans\\",\\"dollars\\"]',
                xlblarr: '[\\"bottle\\",\\"can\\",\\"dollars\\"]',
                previousCorrect: true,
            },
			// problem 5
            {
                question: 'Twelve bottles of juice cost $13.15. What is the price per bottle of juice?', 
                round: '<br><br><span class=blue-text>Round to nearest cent.</span>',
                answer: '1.10', Nanswer:'', Danswer:'', template: 'main',
                ln: '13.15', Nln: '', Dln: '', rn: 'x', Nrn: '', Drn: '', lbln: 'dollars', words: 'is the',
                ld: '12', Nld: '', Dld: '', rd: '1', Nrd: '', Drd: '', lbld: 'bottles', xlbld: 'bottle',
                lblarr: '[\\"bottles\\",\\"cans\\",\\"dollars\\"]',
                xlblarr: '[\\"bottle\\",\\"can\\",\\"dollars\\"]',
                previousCorrect: true,
            },
			// problem 6
            {
                question: 'A carton of juice holds 32 fluid ounces. If the carton costs $7.68, what is the cost per fluid ounce?', 
                round: '',
                answer: '0.24', Nanswer:'', Danswer:'', template: 'main',
                ln: '7.68', Nln: '', Dln: '', rn: 'x', Nrn: '', Drn: '', lbln: 'dollars', words: 'is the',
                ld: '32', Nld: '', Dld: '', rd: '1', Nrd: '', Drd: '', lbld: 'fluid ounces', xlbld: 'fluid ounce',
                lblarr: '[\\"cartons\\",\\"fluid ounces\\",\\"dollars\\"]',
                xlblarr: '[\\"carton\\",\\"fluid ounce\\",\\"dollars\\"]',
                previousCorrect: true,
            },
			// problem 7
            {
                question: 'A carton of juice holds 22 fluid ounces. If the carton costs $6.99, what is the cost per fluid ounce?', 
                round: '<br><br><span class=blue-text>Round to nearest cent.</span>',
                answer: '0.32', Nanswer:'', Danswer:'', template: 'main',
                ln: '6.99', Nln: '', Dln: '', rn: 'x', Nrn: '', Drn: '', lbln: 'dollars', words: 'is the',
                ld: '22', Nld: '', Dld: '', rd: '1', Nrd: '', Drd: '', lbld: 'fluid ounces', xlbld: 'fluid ounce',
                lblarr: '[\\"cartons\\",\\"fluid ounces\\",\\"dollars\\"]',
                xlblarr: '[\\"carton\\",\\"fluid ounce\\",\\"dollars\\"]',
                previousCorrect: true,
            },
			// problem 8
            {
                question: 'A herd of 60 elephants lives in a protected wilderness area that is 36,000 acres in size. How many acres of wilderness area are there per elephant?', 
                round: '',
                answer: '600', Nanswer:'', Danswer:'', template: 'main',
                ln: '36000', Nln: '', Dln: '', rn: 'x', Nrn: '', Drn: '', lbln: 'acres', words: 'number of',
                ld: '60', Nld: '', Dld: '', rd: '1', Nrd: '', Drd: '', lbld: 'elephants', xlbld: 'elephant',
                lblarr: '[\\"elephants\\",\\"acres\\",\\"herds\\"]',
                xlblarr: '[\\"elephant\\",\\"acre\\",\\"herd\\"]',
                previousCorrect: true,
            },
			// problem 9
            {
                question: 'A herd of 30 elephants lives in a protected wilderness area that is 24,700 acres in size. How many acres of wilderness area are there per elephant?', 
                round: '<br><br><span class=blue-text>Round to nearest whole acre.</span>',
                answer: '823', Nanswer:'', Danswer:'', template: 'main',
                ln: '24700', Nln: '', Dln: '', rn: 'x', Nrn: '', Drn: '', lbln: 'acres', words: 'number of',
                ld: '30', Nld: '', Dld: '', rd: '1', Nrd: '', Drd: '', lbld: 'elephants', xlbld: 'elephant',
                lblarr: '[\\"elephants\\",\\"acres\\",\\"herds\\"]',
                xlblarr: '[\\"elephant\\",\\"acre\\",\\"herd\\"]',
                previousCorrect: true,
            },
			// problem 10
            {
                question: '200 milligrams (mg) of medication are in 50 milliliters (mL) of solution. How many milligrams of medication are in each milliliter of solution?', 
                round: '',
                answer: '4', Nanswer:'', Danswer:'', template: 'main',
                ln: '200', Nln: '', Dln: '', rn: 'x', Nrn: '', Drn: '', lbln: '(mg) medication', words: 'number of',
                ld: '50', Nld: '', Dld: '', rd: '1', Nrd: '', Drd: '', lbld: '(mL) solution', xlbld: '(mL) solution',
                lblarr: '[\\"(mg) medication\\",\\"(mL) solution\\",\\"cups\\"]',
                xlblarr: '[\\"(mg) medication\\",\\"(mL) solution\\",\\"cup\\"]',
                previousCorrect: true,
            },
			// problem 11
            {
                question: '90 milligrams (mg) of medication are in 20 milliliters (mL) of solution. How many milligrams of medication are in each milliliter of solution?', 
                round: '<br><br><span class=blue-text>Round to nearest whole milligram (mg).</span>',
                answer: '4.5', Nanswer:'', Danswer:'', template: 'main',
                ln: '90', Nln: '', Dln: '', rn: 'x', Nrn: '', Drn: '', lbln: '(mg) medication', words: 'number of',
                ld: '20', Nld: '', Dld: '', rd: '1', Nrd: '', Drd: '', lbld: '(mL) solution', xlbld: '(mL) solution',
                lblarr: '[\\"(mg) medication\\",\\"(mL) solution\\",\\"cups\\"]',
                xlblarr: '[\\"(mg) medication\\",\\"(mL) solution\\",\\"cup\\"]',
                previousCorrect: true,
            },
			// problem 12
            {
                question: 'A car can travel 360 miles on 10 gallons of gas. How many miles per gallon does the car get?', 
                round: '',
                answer: '36', Nanswer:'', Danswer:'', template: 'main',
                ln: '360', Nln: '', Dln: '', rn: 'x', Nrn: '', Drn: '', lbln: 'miles', words: 'number of',
                ld: '10', Nld: '', Dld: '', rd: '1', Nrd: '', Drd: '', lbld: 'gallons', xlbld: 'gallon',
                lblarr: '[\\"gallons\\",\\"miles\\",\\"cars\\"]',
                xlblarr: '[\\"gallon\\",\\"mile\\",\\"car\\"]',
                previousCorrect: true,
            },
			// problem 13
            {
                question: 'A car can travel 310 miles on 12 gallons of gas. How many miles per gallon does the car get?', 
                round: '<br><br><span class=blue-text>Round to nearest whole mile.</span>',
                answer: '26', Nanswer:'', Danswer:'', template: 'main',
                ln: '310', Nln: '', Dln: '', rn: 'x', Nrn: '', Drn: '', lbln: 'miles', words: 'number of',
                ld: '12', Nld: '', Dld: '', rd: '1', Nrd: '', Drd: '', lbld: 'gallons', xlbld: 'gallon',
                lblarr: '[\\"gallons\\",\\"miles\\",\\"cars\\"]',
                xlblarr: '[\\"gallon\\",\\"mile\\",\\"car\\"]',
                previousCorrect: true,
            },
			// problem 14
            {
                question: 'A snail moves 4.5 feet in three hours. How far does the snail move per hour?', 
                round: '',
                answer: '1.5', Nanswer:'', Danswer:'', template: 'main',
                ln: '4.5', Nln: '', Dln: '', rn: 'x', Nrn: '', Drn: '', lbln: 'feet', words: 'number of',
                ld: '3', Nld: '', Dld: '', rd: '1', Nrd: '', Drd: '', lbld: 'hours', xlbld: 'hour',
                lblarr: '[\\"hours\\",\\"feet\\",\\"snails\\"]',
                xlblarr: '[\\"hour\\",\\"feet\\",\\"snail\\"]',
                previousCorrect: true,
            },
			// problem 15
            {
                question: 'A snail moves 7.85 feet in six hours. How far does the snail move per hour?', 
                round: '<br><br><span class=blue-text>Round to nearest tenth of a foot.</span>',
                answer: '1.3', Nanswer:'', Danswer:'', template: 'main',
                ln: '7.85', Nln: '', Dln: '', rn: 'x', Nrn: '', Drn: '', lbln: 'feet', words: 'number of',
                ld: '6', Nld: '', Dld: '', rd: '1', Nrd: '', Drd: '', lbld: 'hours', xlbld: 'hour',
                lblarr: '[\\"hours\\",\\"feet\\",\\"snails\\"]',
                xlblarr: '[\\"hour\\",\\"feet\\",\\"snail\\"]',
                previousCorrect: true,
            },
			// problem 16
            {
                question: 'A dozen eggs costs $4.68. What is the cost per egg?', 
                round: '',
                answer: '0.39', Nanswer:'', Danswer:'', template: 'main',
                ln: '4.68', Nln: '', Dln: '', rn: 'x', Nrn: '', Drn: '', lbln: 'dollars', words: 'is the',
                ld: '12', Nld: '', Dld: '', rd: '1', Nrd: '', Drd: '', lbld: 'eggs', xlbld: 'egg',
                lblarr: '[\\"chickens\\",\\"dollars\\",\\"eggs\\"]',
                xlblarr: '[\\"chicken\\",\\"dollars\\",\\"egg\\"]',
                previousCorrect: true,
            },
			// problem 17
            {
                question: 'A dozen eggs costs $4.17. What is the cost per egg?', 
                round: '<br><br><span class=blue-text>Round to nearest cent.</span>',
                answer: '0.35', Nanswer:'', Danswer:'', template: 'main',
                ln: '4.17', Nln: '', Dln: '', rn: 'x', Nrn: '', Drn: '', lbln: 'dollars', words: 'is the',
                ld: '12', Nld: '', Dld: '', rd: '1', Nrd: '', Drd: '', lbld: 'eggs', xlbld: 'egg',
                lblarr: '[\\"chickens\\",\\"dollars\\",\\"eggs\\"]',
                xlblarr: '[\\"chicken\\",\\"dollars\\",\\"egg\\"]',
                previousCorrect: true,
            },
			// problem 18
            {
                question: 'It costs $0.55 for a cup of lemonade. For $6.60, how much lemonade can you buy?', 
                round: '',
                answer: '12', Nanswer:'', Danswer:'', template: 'lemonade',
                ln: '0.55', Nln: '', Dln: '', rn: '6.60', Nrn: '', Drn: '', lbln: 'dollars', words: 'is the',
                ld: '1', Nld: '', Dld: '', rd: 'x', Nrd: '', Drd: '', lbld: 'cups', xlbld: 'cup',
				rememberToRound: '',
                lblarr: '[\\"lemons\\",\\"dollars\\",\\"cups\\"]',
                xlblarr: '[\\"lemon\\",\\"dollars\\",\\"cup\\"]',
                previousCorrect: true,
            },
			// problem 19
            {
                question: 'It costs $0.70 for a cup of lemonade. For $5.10, how much lemonade can you buy?', 
                round: '<br><br><span class=blue-text>Round to nearest whole cup.</span>',
                answer: '7', Nanswer:'', Danswer:'', template: 'lemonade',
				rememberToRound: 'Remember to round the answer if necessary.',
                ln: '0.70', Nln: '', Dln: '', rn: '5.10', Nrn: '', Drn: '', lbln: 'dollars', words: 'is the',
                ld: '1', Nld: '', Dld: '', rd: 'x', Nrd: '', Drd: '', lbld: 'cups', xlbld: 'cup',
                lblarr: '[\\"lemons\\",\\"dollars\\",\\"cups\\"]',
                xlblarr: '[\\"lemon\\",\\"dollars\\",\\"cup\\"]',
                previousCorrect: true,
            },
			// problem 20
            {
                question: 'There are 150 milligrams (mg) of medication in a tablet. If a patient needs 675 milligrams (mg) of medication each day, how many tablets should she receive?', 
                round: '',
                answer: '4.5', Nanswer:'', Danswer:'', template: 'tablets',
                ln: '150', Nln: '', Dln: '', rn: '675', Nrn: '', Drn: '', lbln: '(mg) medication', words: 'number of',
                ld: '1', Nld: '', Dld: '', rd: 'x', Nrd: '', Drd: '', lbld: 'tablets', xlbld: 'tablet',
				rememberToRound: '',
                lblarr: '[\\"(mg) medication\\",\\"cups\\",\\"tablets\\"]',
                xlblarr: '[\\"(mg) medication\\",\\"cup\\",\\"tablet\\"]',
                previousCorrect: true,
            },
			// problem 21
            {
                question: 'There are 225 milligrams (mg) of medication in a tablet. If a patient needs 400 milligrams (mg) of medication each day, how many tablets should she receive?', 
                round: '<br><br><span class=blue-text>Round to nearest whole tablet.</span>',
                answer: '2', Nanswer:'', Danswer:'', template: 'tablets',
                ln: '225', Nln: '', Dln: '', rn: '400', Nrn: '', Drn: '', lbln: '(mg) medication', words: 'number of',
                ld: '1', Nld: '', Dld: '', rd: 'x', Nrd: '', Drd: '', lbld: 'tablets', xlbld: 'tablet',
				rememberToRound: 'Remember to round the answer if necessary.',
                lblarr: '[\\"(mg) medication\\",\\"cups\\",\\"tablets\\"]',
                xlblarr: '[\\"(mg) medication\\",\\"cup\\",\\"tablet\\"]',
                previousCorrect: true,
            },
			// problem 22
            {
                question: 'For practice a marathon runner ran 15 miles in 82 1/2 minutes. How many minutes did he average per mile that he ran?', 
                round: '<br><br><span class=blue-text>Give answer as a mixed number.</span>',
                answer: '5', Nanswer:'1', Danswer:'2', template: 'main',
                ln: '82', Nln: '1', Dln: '2', rn: 'x', Nrn: '', Drn: '', lbln: 'minutes', words: 'number of',
                ld: '15', Nld: '', Dld: '', rd: '1', Nrd: '', Drd: '', lbld: 'miles', xlbld: 'mile',
                lblarr: '[\\"minutes\\",\\"runners\\",\\"miles\\"]',
                xlblarr: '[\\"minute\\",\\"runner\\",\\"mile\\"]',
                previousCorrect: true,
            },
			// problem 23
            {
                question: 'For practice a marathon runner ran 12 miles in 70 4/5 minutes. How many minutes did he average per mile that he ran?', 
                round: '<br><br><span class=blue-text>Give answer as a mixed number.</span>',
                answer: '5', Nanswer:'9', Danswer:'10', template: 'main',
                ln: '70', Nln: '4', Dln: '5', rn: 'x', Nrn: '', Drn: '', lbln: 'minutes', words: 'number of',
                ld: '12', Nld: '', Dld: '', rd: '1', Nrd: '', Drd: '', lbld: 'miles', xlbld: 'mile',
                lblarr: '[\\"minutes\\",\\"runners\\",\\"miles\\"]',
                xlblarr: '[\\"minute\\",\\"runner\\",\\"mile\\"]',
                previousCorrect: true,
            }
        ];
	return dataUtils.build(desc, template, data);
}]);
