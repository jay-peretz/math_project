/*global angular */

angular.module('mathSkills').service('data_j_1', ['dataUtils', function (dataUtils) {
    var desc = {
			title: 'J.1 Number Line',
    		path: 'J.1-number-line',
            children: []
        },
        	template = {
            main: {
                title: 'Charts and Bar Graphs', 
                children: [{
                    title: 'Main Answer',
                    children: [{
                        problem:'\\pan{12}{11}{$chart1}',
                        answer: '\\css{'+
                                    '\\rowgrp'+
                                        '{\\ins{$question}}'+
                                        '{$answerIn}'+
                                '}{well}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                },{
						problem:'\\pan{12}{11}{$chart2}', 
                        answer: '\\css{'+
                                    '\\rowgrp'+
                                        '{\\ins{Identify each value on the number line:}}'+
                                        '{\\grp{\\str{X = }}{\\input{$val1}}}'+
                                        '{\\grp{\\str{Y = }}{\\input{$val2}}}'+
                                        '{\\grp{\\str{Z = }}{\\input{$val3}}}'+
                                '}{well}',
						controls: {
							"checkAnswer": true,
                            //"nextProblem": true,
							"help": true
						}
					}]
                }]
            },
        },
	        /*template = {
            second: {
                title: 'Comparing Whole Numbers',
				children: [{
					title: 'Main Answer',
					children: [{
						problem: '',
						answer: '\\pan{2}{10}{'+
                                    '\\rowgrp{'+
                                        '\\grp'+
                                            '{\\str{X \xA0}}'+
                                            '{\\btn{>}{$firstButton}}'+
                                            '{\\str{\xA0 or \xA0}}'+
                                            '{\\btn{<}{$secondButton}}'+
                                            '{\\str{\xA0 Y}}'+
                                    '}{'+
                                        '\\rowgrp'+
                                            '{\\html{<br><br>}}'+
                                            '{\\numberline{$firstNumber}{$secondNumber}{$startGraph}{$endGraph}}'+
                                    '}'+
                                '}',
						controls: {
							"checkAnswer": false,
							"help": true //'\\str{X or $firstNumber is $statement Y or $secondNumber}'
						}
					}]
                }]
            }
        },*/
       
       
        data = [
			
			//problem 1
            {   
                chart1: dataUtils.pre('\\graphnum{-10}{10}{1}{1}{ [[-9, 0], [-3, 0], [6, 0]] }{chart1}'),
                chart2: dataUtils.pre('\\graphnum{-10}{10}{1}{1}{ [[-9, 0], [-3, 0], [6, 0]] }{chart2}'),
                question: 'What is the increment (the distance between any two consecutive ticks) on this graph?', template: 'main', answerBtn: 'noAnswer',
                answerIn: dataUtils.pre('\\rowgrp{$$button1}{$$button2}{$$button3}{$$button4}'),
                button1: dataUtils.pre('\\grp{\\btn{A}{F}{marg}}{\\str{\xA0 \xA0 -1}}'),
                button2: dataUtils.pre('\\grp{\\btn{B}{F}{marg}}{\\str{\xA0 \xA0 2}}'),
                button3: dataUtils.pre('\\grp{\\btn{C}{T}{marg}}{\\str{\xA0 \xA0 1}}'),
                button4: dataUtils.pre('\\grp{\\btn{D}{F}{marg}}{\\str{\xA0 \xA0 4}}'),
                val1: '-9', val2: '-3', val3: '6'
            },
            //problem 2
            {   
                chart1: dataUtils.pre('\\graphnum{-2}{2}{1}{4}{ [[-1.5, 0], [-0.25, 0], [1, 0]] }{chart1}'),
                chart2: dataUtils.pre('\\graphnum{-2}{2}{1}{4}{ [[-1.5, 0], [-0.25, 0], [1, 0]] }{chart2}'),
                question: 'What is the increment (the distance between any two consecutive ticks) on this graph?', template: 'main', answerBtn: 'noAnswer',
                answerIn: dataUtils.pre('\\rowgrp{$$button1}{$$button2}{$$button3}{$$button4}'),
                button1: dataUtils.pre('\\grp{\\btn{A}{F}{marg}}{\\str{\xA0 \xA0 1}}'),
                button2: dataUtils.pre('\\grp{\\btn{B}{T}{marg}}{\\str{\xA0 \xA0 0.25}}'),
                button3: dataUtils.pre('\\grp{\\btn{C}{F}{marg}}{\\str{\xA0 \xA0 4}}'),
                button4: dataUtils.pre('\\grp{\\btn{D}{F}{marg}}{\\str{\xA0 \xA0 -1}}'),
                val1: '-1.5', val2: '-0.25', val3: '1'
            },
            //problem 3
            {   
                chart1: dataUtils.pre('\\graphnum{-2}{2}{1}{5}{ [[-1.8, 0], [0.4, 0], [1.2, 0]] }{chart1}'),
                chart2: dataUtils.pre('\\graphnum{-2}{2}{1}{5}{ [[-1.8, 0], [0.4, 0], [1.2, 0]] }{chart2}'),
                question: 'What is the increment (the distance between any two consecutive ticks) on this graph?', template: 'main', answerBtn: 'noAnswer',
                answerIn: dataUtils.pre('\\rowgrp{$$button1}{$$button2}{$$button3}{$$button4}'),
                button1: dataUtils.pre('\\grp{\\btn{A}{T}{marg}}{\\str{\xA0 \xA0 0.2}}'),
                button2: dataUtils.pre('\\grp{\\btn{B}{F}{marg}}{\\str{\xA0 \xA0 1}}'),
                button3: dataUtils.pre('\\grp{\\btn{C}{F}{marg}}{\\str{\xA0 \xA0 5}}'),
                button4: dataUtils.pre('\\grp{\\btn{D}{F}{marg}}{\\str{\xA0 \xA0 0.5}}'),
                val1: '-1.8', val2: '-0.4', val3: '1.2'
            },
            //problem 4
            {   
                chart1: dataUtils.pre('\\graphnum{-12}{12}{2}{0}{ [[-10, 0], [-2, 0], [3, 0]] }{chart1}'),
                chart2: dataUtils.pre('\\graphnum{-12}{12}{2}{0}{ [[-10, 0], [-2, 0], [3, 0]] }{chart2}'),
                question: 'What is the increment (the distance between any two consecutive ticks) on this graph?', template: 'main', answerBtn: 'noAnswer',
                answerIn: dataUtils.pre('\\rowgrp{$$button1}{$$button2}{$$button3}{$$button4}'),
                button1: dataUtils.pre('\\grp{\\btn{A}{F}{marg}}{\\str{\xA0 \xA0 0.2}}'),
                button2: dataUtils.pre('\\grp{\\btn{B}{T}{marg}}{\\str{\xA0 \xA0 2}}'),
                button3: dataUtils.pre('\\grp{\\btn{C}{F}{marg}}{\\str{\xA0 \xA0 1}}'),
                button4: dataUtils.pre('\\grp{\\btn{D}{F}{marg}}{\\str{\xA0 \xA0 4}}'),
                val1: '-10', val2: '-2', val3: '3'
            },
			//problem 5
            {   
                chart1: dataUtils.pre('\\graphnum{-3}{3}{1}{4}{ [[-2.5, 0], [-0.75, 0], [1.25, 0]] }{chart1}'),
                chart2: dataUtils.pre('\\graphnum{-3}{3}{1}{4}{ [[-2.5, 0], [-0.75, 0], [1.25, 0]] }{chart2}'),
                question: 'What is the increment (the distance between any two consecutive ticks) on this graph?', template: 'main', answerBtn: 'noAnswer',
                answerIn: dataUtils.pre('\\rowgrp{$$button1}{$$button2}{$$button3}{$$button4}'),
                button1: dataUtils.pre('\\grp{\\btn{A}{F}{marg}}{\\str{\xA0 \xA0 1}}'),
                button2: dataUtils.pre('\\grp{\\btn{B}{T}{marg}}{\\str{\xA0 \xA0 0.25}}'),
                button3: dataUtils.pre('\\grp{\\btn{C}{F}{marg}}{\\str{\xA0 \xA0 4}}'),
                button4: dataUtils.pre('\\grp{\\btn{D}{F}{marg}}{\\str{\xA0 \xA0 -0.5}}'),
                val1: '-2.5', val2: '-0.75', val3: '1.25'
            },
        ];

	return dataUtils.build(desc, template, data);
}]);