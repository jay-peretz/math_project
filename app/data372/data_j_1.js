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
            interactiveNumberline: {
           	 title: 'Charts and Bar Graphs', 
                children: [{
                    title: 'Main Answer',
                    children: [{
                        problem:'\\pan{12}{11}{$numberline1}',
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
						problem:'\\pan{12}{11}{$numberline2}', 
                        answer: '\\css{'+
                                    '\\rowgrp'+
                                        '{\\ins{Plot the given values directly on the number line:}}'+
                                        '{\\grp{\\str{X = $plotX}}}'+
                                        '{\\html{&nbsp;}}'+
                                        '{\\grp{\\str{Y = $plotY}}}'+
                                        '{\\html{&nbsp;}}'+
                                        '{\\grp{\\str{Z = $plotZ}}}'+
                                        '{\\html{&nbsp;}}'+
                                        '{\\grp{\\str{Plotting Instruction: To plot (locate) the given values on the displayed number line, simply move the mouse pointer to that location, then click once.}}}'+
                                '}{well}',
						controls: {
							"checkAnswer": true,
                            //"nextProblem": true,
							"help": true
						}
					}]
                }]
           },
      // },
			dynamic: {
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
                                        '{\\grp{\\str{A = }}{\\input{$val1}}}'+
                                        '{\\grp{\\str{B = }}{\\input{$val2}}}'+
                                        '{\\grp{\\str{C = }}{\\input{$val3}}}'+
                                '}{well}',
						controls: {
							"checkAnswer": true,
							"help": true
						}
					}]
                }]
            }
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
          //problem 6
            {   
            	numberline1: dataUtils.pre('\\numberline{-50}{50}{10}{-30}{10}{40}'),
            	numberline2: dataUtils.pre('\\numberline{-50}{50}{10}{-30}{10}{40}'),
            	question: 'What is the increment (the distance between any two consecutive ticks) on this numberline?', template: 'interactiveNumberline', answerBtn: 'noAnswer',
                answerIn: dataUtils.pre('\\rowgrp{$$button1}{$$button2}{$$button3}{$$button4}'),
                button1: dataUtils.pre('\\grp{\\btn{A}{F}{marg}}{\\str{\xA0 \xA0 -10}}'),
                button2: dataUtils.pre('\\grp{\\btn{B}{F}{marg}}{\\str{\xA0 \xA0 .5}}'),
                button3: dataUtils.pre('\\grp{\\btn{C}{T}{marg}}{\\str{\xA0 \xA0 10}}'),
                button4: dataUtils.pre('\\grp{\\btn{D}{F}{marg}}{\\str{\xA0 \xA0 1}}'),
                plotX: '-30', plotY: '10', plotZ: '40'
            },
			/*//problem 6
            {   
                chart1: dataUtils.pre('\\numberline{-10}{10}{1}{ [[-9, 0], [6, 0], [-3, 0]] }{chart1}'),
                chart2: dataUtils.pre('\\numberline{-10}{10}{1}{ [[-9, 0], [6, 0], [-3, 0]] }{chart2}'), 
                question: 'What\'s up, Doc?', template: 'dynamic', answerBtn: 'noAnswer',
                //answertxt: 'There were approximately 590 deer counted in January and April.',
                answerIn: dataUtils.pre('\\rowgrp{\\input{$$input1}}'),
				input1: 'wabbit',
                val1: '-9', val2: '-3', val3: '6'
            },*/
          //problem 7
            {   
            	numberline1: dataUtils.pre('\\numberline{-2}{2}{.2}{-1.4}{-0.2}{1}'),
            	numberline2: dataUtils.pre('\\numberline{-2}{2}{.2}{-1.4}{-0.2}{1}'),
                question: 'What is the increment (the distance between any two consecutive ticks) on this numberline?', template: 'interactiveNumberline', answerBtn: 'noAnswer',
                answerIn: dataUtils.pre('\\rowgrp{$$button1}{$$button2}{$$button3}{$$button4}'),
                button1: dataUtils.pre('\\grp{\\btn{A}{F}{marg}}{\\str{\xA0 \xA0 1}}'),
                button2: dataUtils.pre('\\grp{\\btn{B}{T}{marg}}{\\str{\xA0 \xA0 .2}}'),
                button3: dataUtils.pre('\\grp{\\btn{C}{F}{marg}}{\\str{\xA0 \xA0 .25}}'),
                button4: dataUtils.pre('\\grp{\\btn{D}{F}{marg}}{\\str{\xA0\xA0 -2}}'),
                plotX: '-1.4', plotY: '-0.2', plotZ: '1'
            },
          //problem 8
            {   
            	numberline1: dataUtils.pre('\\numberline{-9}{9}{1}{-7}{3}{8}'),
            	numberline2: dataUtils.pre('\\numberline{-9}{9}{1}{-7}{3}{8}'),
                question: 'What is the increment (the distance between any two consecutive ticks) on this numberline?', template: 'interactiveNumberline', answerBtn: 'noAnswer',
                answerIn: dataUtils.pre('\\rowgrp{$$button1}{$$button2}{$$button3}{$$button4}'),
                button1: dataUtils.pre('\\grp{\\btn{A}{T}{marg}}{\\str{\xA0 \xA0 1}}'),
                button2: dataUtils.pre('\\grp{\\btn{B}{F}{marg}}{\\str{\xA0 \xA0 .5}}'),
                button3: dataUtils.pre('\\grp{\\btn{C}{F}{marg}}{\\str{\xA0\xA0 -1}}'),
                button4: dataUtils.pre('\\grp{\\btn{D}{F}{marg}}{\\str{\xA0 \xA0 4}}'),
                plotX: '-7', plotY: '3', plotZ: '8'
            },
          //problem 9
            {   
            	numberline1: dataUtils.pre('\\numberline{-3}{3}{.25}{-2.25}{0.75}{2.25}'),
            	numberline2: dataUtils.pre('\\numberline{-3}{3}{.25}{-2.25}{0.75}{2.25}'),
                question: 'What is the increment (the distance between any two consecutive ticks) on this numberline?', template: 'interactiveNumberline', answerBtn: 'noAnswer',
                answerIn: dataUtils.pre('\\rowgrp{$$button1}{$$button2}{$$button3}{$$button4}'),
                button1: dataUtils.pre('\\grp{\\btn{A}{F}{marg}}{\\str{\xA0 \xA0 1}}'),
                button2: dataUtils.pre('\\grp{\\btn{B}{T}{marg}}{\\str{\xA0 \xA0 .25}}'),
                button3: dataUtils.pre('\\grp{\\btn{C}{F}{marg}}{\\str{\xA0 \xA0 .2}}'),
                button4: dataUtils.pre('\\grp{\\btn{D}{F}{marg}}{\\str{\xA0 \xA0 .5}}'),
                plotX: '-2.25', plotY: '0.75', plotZ: '2.25'
            },
          //problem 10
            {   
            	numberline1: dataUtils.pre('\\numberline{-12}{12}{2}{-8}{-4}{6}'),
            	numberline2: dataUtils.pre('\\numberline{-12}{12}{2}{-8}{-4}{6}'),
                question: 'What is the increment (the distance between any two consecutive ticks) on this numberline?', template: 'interactiveNumberline', answerBtn: 'noAnswer',
                answerIn: dataUtils.pre('\\rowgrp{$$button1}{$$button2}{$$button3}{$$button4}'),
                button1: dataUtils.pre('\\grp{\\btn{A}{F}{marg}}{\\str{\xA0\xA0 -2}}'),
                button2: dataUtils.pre('\\grp{\\btn{B}{F}{marg}}{\\str{\xA0\xA0 -3}}'),
                button3: dataUtils.pre('\\grp{\\btn{C}{F}{marg}}{\\str{\xA0 \xA0 1}}'),
                button4: dataUtils.pre('\\grp{\\btn{D}{T}{marg}}{\\str{\xA0 \xA0 2}}'),
                plotX: '-8', plotY: '-4', plotZ: '6'
            },
        ];

	return dataUtils.build(desc, template, data);
}]);