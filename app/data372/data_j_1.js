/*global angular */

angular.module('mathSkills').service('data_j_1', ['dataUtils', function (dataUtils) {
    var desc = {
			title: 'J.1 Number Line',
    		path: 'J.1-number-line',
            children: []
        },
        	template = {
            graphNumberline: {
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
							"help": true,
							"stepwiseNextProblem": "Check Answer"
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
                        answer: '\\css'+
									'{\\rowgrp'+
		                                        '{\\ins{$question}}'+
		                                        '{\\grp{\\btn{A}{$buttonValueA}{marg}}{\\str{ $buttonLabelA}}}'+
		                                        '{\\grp{\\btn{B}{$buttonValueB}{marg}}{\\str{ $buttonLabelB}}}'+
		                                        '{\\grp{\\btn{C}{$buttonValueC}{marg}}{\\str{ $buttonLabelC}}}'+
		                                        '{\\grp{\\btn{D}{$buttonValueD}{marg}}{\\str{ $buttonLabelD}}}'+
		                            '}{well}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                },{
						problem:'\\pan{12}{11}', 
                        answer: '\\rowgrp'+
									'{\\html{&nbsp;}}'+
									'{$numberline2}'+
									'{\\html{&nbsp;}}'+
									'{\\css{'+
										'\\rowgrp'+
											'{\\ins{Plot the given values directly on the number line:}}'+
											'{\\grp{\\str{X = $plotX<span class=marginLeft80px>Y = $plotY</span><span class=marginLeft80px>&nbsp;Z = $plotZ</span>}}}'+
											'{\\html{&nbsp;}}'+	
											'{\\grp{\\str{Plotting Instruction: To plot (locate) the given values on the displayed number line, simply move the mouse pointer to that location, then click once.}}}'+
									'}{well}}',
						controls: {
							"checkAnswer": true,
							"help": true,
							"stepwiseNextProblem": "Check Answer"
						}
					}]
                }]
           }
      
        },
       
       
        data = [
			
			//problem 1
            {   
                chart1: dataUtils.pre('\\graphnum{-10}{10}{2}{1}{ [[-9, 0], [-3, 0], [6, 0]] }{chart1}'),
                chart2: dataUtils.pre('\\graphnum{-10}{10}{2}{1}{ [[-9, 0], [-3, 0], [6, 0]] }{chart2}'),
                question: 'What is the increment (the distance between any two consecutive ticks) on this graph?', template: 'graphNumberline', answerBtn: 'noAnswer',
                answerIn: dataUtils.pre('\\rowgrp{$$button1}{$$button2}{$$button3}{$$button4}'),
                button1: dataUtils.pre('\\grp{\\btn{A}{F}{marg}}{\\str{ -1}}'),
                button2: dataUtils.pre('\\grp{\\btn{B}{F}{marg}}{\\str{ 2}}'),
                button3: dataUtils.pre('\\grp{\\btn{C}{T}{marg}}{\\str{ 1}}'),
                button4: dataUtils.pre('\\grp{\\btn{D}{F}{marg}}{\\str{ 4}}'),
                val1: '-9', val2: '-3', val3: '6'
            },
            //problem 2
            {   
                chart1: dataUtils.pre('\\graphnum{-10}{10}{2}{1}{ [[5, 0], [-1, 0], [7.5, 0]] }{chart1}'),
                chart2: dataUtils.pre('\\graphnum{-10}{10}{2}{1}{ [[5, 0], [-1, 0], [7.5, 0]] }{chart2}'),
                question: 'What is the increment (the distance between any two consecutive ticks) on this graph?', template: 'graphNumberline', answerBtn: 'noAnswer',
                answerIn: dataUtils.pre('\\rowgrp{$$button1}{$$button2}{$$button3}{$$button4}'),
                button1: dataUtils.pre('\\grp{\\btn{A}{F}{marg}}{\\str{ -2}}'),
                button2: dataUtils.pre('\\grp{\\btn{B}{T}{marg}}{\\str{ 1}}'),
                button3: dataUtils.pre('\\grp{\\btn{C}{F}{marg}}{\\str{ -1}}'),
                button4: dataUtils.pre('\\grp{\\btn{D}{F}{marg}}{\\str{ 4}}'),
                val1: '5', val2: '-1', val3: '7.5'
            },
            //problem 3
            {   
                chart1: dataUtils.pre('\\graphnum{-10}{10}{2}{1}{ [[-7, 0], [0, 0], [10, 0]] }{chart1}'),
                chart2: dataUtils.pre('\\graphnum{-10}{10}{2}{1}{ [[-7, 0], [0, 0], [10, 0]] }{chart2}'),
                question: 'What is the increment (the distance between any two consecutive ticks) on this graph?', template: 'graphNumberline', answerBtn: 'noAnswer',
                answerIn: dataUtils.pre('\\rowgrp{$$button1}{$$button2}{$$button3}{$$button4}'),
                button1: dataUtils.pre('\\grp{\\btn{A}{F}{marg}}{\\str{ -1}}'),
                button2: dataUtils.pre('\\grp{\\btn{B}{F}{marg}}{\\str{ 2}}'),
                button3: dataUtils.pre('\\grp{\\btn{C}{T}{marg}}{\\str{ 1}}'),
                button4: dataUtils.pre('\\grp{\\btn{D}{F}{marg}}{\\str{ 4}}'),
                val1: '-7', val2: '0', val3: '10'
            },
            //problem 4
            {   
                chart1: dataUtils.pre('\\graphnum{-2}{2}{1}{4}{ [[1, 0], [-1.5, 0], [-0.25, 0]] }{chart1}'),
                chart2: dataUtils.pre('\\graphnum{-2}{2}{1}{4}{ [[1, 0], [-1.5, 0], [-0.25, 0]] }{chart2}'),
                question: 'What is the increment (the distance between any two consecutive ticks) on this graph?', template: 'graphNumberline', answerBtn: 'noAnswer',
                answerIn: dataUtils.pre('\\rowgrp{$$button1}{$$button2}{$$button3}{$$button4}'),
                button1: dataUtils.pre('\\grp{\\btn{A}{F}{marg}}{\\str{ 1}}'),
                button2: dataUtils.pre('\\grp{\\btn{B}{T}{marg}}{\\str{ 0.25}}'),
                button3: dataUtils.pre('\\grp{\\btn{C}{F}{marg}}{\\str{ 4}}'),
                button4: dataUtils.pre('\\grp{\\btn{D}{F}{marg}}{\\str{ -1}}'),
                val1: '1', val2: '-1.5', val3: '[\\"-0.25\\",\\"-.25\\"]'
            },
            //problem 5
            {   
                chart1: dataUtils.pre('\\graphnum{-2}{2}{1}{4}{ [[-0.75, 0], [-1.5, 0], [-0.25, 0]] }{chart1}'),
                chart2: dataUtils.pre('\\graphnum{-2}{2}{1}{4}{ [[-0.75, 0], [-1.5, 0], [-0.25, 0]] }{chart2}'),
                question: 'What is the increment (the distance between any two consecutive ticks) on this graph?', template: 'graphNumberline', answerBtn: 'noAnswer',
                answerIn: dataUtils.pre('\\rowgrp{$$button1}{$$button2}{$$button3}{$$button4}'),
                button1: dataUtils.pre('\\grp{\\btn{A}{F}{marg}}{\\str{ 1}}'),
                button2: dataUtils.pre('\\grp{\\btn{B}{T}{marg}}{\\str{ 0.25}}'),
                button3: dataUtils.pre('\\grp{\\btn{C}{F}{marg}}{\\str{ 4}}'),
                button4: dataUtils.pre('\\grp{\\btn{D}{F}{marg}}{\\str{ -1}}'),
                val1: '-0.75', val2: '-1.5', val3: '[\\"-0.25\\",\\"-.25\\"]'
            },
            //problem 6
            {   
                chart1: dataUtils.pre('\\graphnum{-3}{3}{1}{4}{ [[-2.75, 0], [2.75, 0], [-0.25, 0]] }{chart1}'),
                chart2: dataUtils.pre('\\graphnum{-3}{3}{1}{4}{ [[-2.75, 0], [2.75, 0], [-0.25, 0]] }{chart2}'),
                question: 'What is the increment (the distance between any two consecutive ticks) on this graph?', template: 'graphNumberline', answerBtn: 'noAnswer',
                answerIn: dataUtils.pre('\\rowgrp{$$button1}{$$button2}{$$button3}{$$button4}'),
                button1: dataUtils.pre('\\grp{\\btn{A}{F}{marg}}{\\str{ 0.5}}'),
                button2: dataUtils.pre('\\grp{\\btn{B}{T}{marg}}{\\str{ 0.25}}'),
                button3: dataUtils.pre('\\grp{\\btn{C}{F}{marg}}{\\str{ 3}}'),
                button4: dataUtils.pre('\\grp{\\btn{D}{F}{marg}}{\\str{ -1}}'),
                val1: '-2.75', val2: '2.75', val3: '[\\"-0.25\\",\\"-.25\\"]'
            },
            //problem 7
            {   
                chart1: dataUtils.pre('\\graphnum{-2}{2}{1}{5}{ [[0.4, 0], [-1.8, 0], [1.2, 0]] }{chart1}'),
                chart2: dataUtils.pre('\\graphnum{-2}{2}{1}{5}{ [[0.4, 0], [-1.8, 0], [1.2, 0]] }{chart2}'),
                question: 'What is the increment (the distance between any two consecutive ticks) on this graph?', template: 'graphNumberline', answerBtn: 'noAnswer',
                answerIn: dataUtils.pre('\\rowgrp{$$button1}{$$button2}{$$button3}{$$button4}'),
                button1: dataUtils.pre('\\grp{\\btn{A}{T}{marg}}{\\str{ 0.2}}'),
                button2: dataUtils.pre('\\grp{\\btn{B}{F}{marg}}{\\str{ 1}}'),
                button3: dataUtils.pre('\\grp{\\btn{C}{F}{marg}}{\\str{ 5}}'),
                button4: dataUtils.pre('\\grp{\\btn{D}{F}{marg}}{\\str{ 0.5}}'),
                val1: '0.4', val2: '-1.8', val3: '1.2'
            },
            //problem 8
            {   
                chart1: dataUtils.pre('\\graphnum{-3}{3}{1}{5}{ [[2.4, 0], [1.8, 0], [-1.2, 0]] }{chart1}'),
                chart2: dataUtils.pre('\\graphnum{-3}{3}{1}{5}{ [[2.4, 0], [1.8, 0], [-1.2, 0]] }{chart2}'),
                question: 'What is the increment (the distance between any two consecutive ticks) on this graph?', template: 'graphNumberline', answerBtn: 'noAnswer',
                answerIn: dataUtils.pre('\\rowgrp{$$button1}{$$button2}{$$button3}{$$button4}'),
                button1: dataUtils.pre('\\grp{\\btn{A}{F}{marg}}{\\str{ 1.2}}'),
                button2: dataUtils.pre('\\grp{\\btn{B}{F}{marg}}{\\str{ 1}}'),
                button3: dataUtils.pre('\\grp{\\btn{C}{F}{marg}}{\\str{ 5}}'),
                button4: dataUtils.pre('\\grp{\\btn{D}{T}{marg}}{\\str{ 0.2}}'),
                val1: '2.4', val2: '1.8', val3: '-1.2'
            },
            //problem 9
            {   
                chart1: dataUtils.pre('\\graphnum{-2}{2}{1}{5}{ [[-1.6, 0], [0.8, 0], [-0.2, 0]] }{chart1}'),
                chart2: dataUtils.pre('\\graphnum{-2}{2}{1}{5}{ [[-1.6, 0], [0.8, 0], [-0.2, 0]] }{chart2}'),
                question: 'What is the increment (the distance between any two consecutive ticks) on this graph?', template: 'graphNumberline', answerBtn: 'noAnswer',
                answerIn: dataUtils.pre('\\rowgrp{$$button1}{$$button2}{$$button3}{$$button4}'),
                button1: dataUtils.pre('\\grp{\\btn{A}{F}{marg}}{\\str{ 1.2}}'),
                button2: dataUtils.pre('\\grp{\\btn{B}{T}{marg}}{\\str{ 0.2}}'),
                button3: dataUtils.pre('\\grp{\\btn{C}{F}{marg}}{\\str{ 5}}'),
                button4: dataUtils.pre('\\grp{\\btn{D}{F}{marg}}{\\str{ 0.5}}'),
                val1: '-1.6', val2: '0.8', val3: '-0.2'
            },
            //problem 10
            {   
                chart1: dataUtils.pre('\\graphnum{-12}{12}{2}{0}{ [[-10, 0], [-2, 0], [3, 0]] }{chart1}'),
                chart2: dataUtils.pre('\\graphnum{-12}{12}{2}{0}{ [[-10, 0], [-2, 0], [3, 0]] }{chart2}'),
                question: 'What is the increment (the distance between any two consecutive ticks) on this graph?', template: 'graphNumberline', answerBtn: 'noAnswer',
                answerIn: dataUtils.pre('\\rowgrp{$$button1}{$$button2}{$$button3}{$$button4}'),
                button1: dataUtils.pre('\\grp{\\btn{A}{F}{marg}}{\\str{ 0.2}}'),
                button2: dataUtils.pre('\\grp{\\btn{B}{T}{marg}}{\\str{ 2}}'),
                button3: dataUtils.pre('\\grp{\\btn{C}{F}{marg}}{\\str{ 1}}'),
                button4: dataUtils.pre('\\grp{\\btn{D}{F}{marg}}{\\str{ 4}}'),
                val1: '-10', val2: '-2', val3: '3'
            },
            //problem 11
            {   
                chart1: dataUtils.pre('\\graphnum{-12}{12}{2}{0}{ [[11, 0], [-7, 0], [-4, 0]] }{chart1}'),
                chart2: dataUtils.pre('\\graphnum{-12}{12}{2}{0}{ [[11, 0], [-7, 0], [-4, 0]] }{chart2}'),
                question: 'What is the increment (the distance between any two consecutive ticks) on this graph?', template: 'graphNumberline', answerBtn: 'noAnswer',
                answerIn: dataUtils.pre('\\rowgrp{$$button1}{$$button2}{$$button3}{$$button4}'),
                button1: dataUtils.pre('\\grp{\\btn{A}{F}{marg}}{\\str{ 0.2}}'),
                button2: dataUtils.pre('\\grp{\\btn{B}{T}{marg}}{\\str{ 2}}'),
                button3: dataUtils.pre('\\grp{\\btn{C}{F}{marg}}{\\str{ 1}}'),
                button4: dataUtils.pre('\\grp{\\btn{D}{F}{marg}}{\\str{ 4}}'),
                val1: '11', val2: '-7', val3: '-4'
            },
            //problem 12
            {   
                chart1: dataUtils.pre('\\graphnum{-12}{12}{2}{0}{ [[-1, 0], [-11, 0], [3, 0]] }{chart1}'),
                chart2: dataUtils.pre('\\graphnum{-12}{12}{2}{0}{ [[-1, 0], [-11, 0], [3, 0]] }{chart2}'),
                question: 'What is the increment (the distance between any two consecutive ticks) on this graph?', template: 'graphNumberline', answerBtn: 'noAnswer',
                answerIn: dataUtils.pre('\\rowgrp{$$button1}{$$button2}{$$button3}{$$button4}'),
                button1: dataUtils.pre('\\grp{\\btn{A}{F}{marg}}{\\str{ 0.2}}'),
                button2: dataUtils.pre('\\grp{\\btn{B}{T}{marg}}{\\str{ 2}}'),
                button3: dataUtils.pre('\\grp{\\btn{C}{F}{marg}}{\\str{ 1}}'),
                button4: dataUtils.pre('\\grp{\\btn{D}{F}{marg}}{\\str{ 4}}'),
                val1: '-1', val2: '-11', val3: '3'
            },
			//problem 13
            {   
                chart1: dataUtils.pre('\\graphnum{-3}{3}{1}{4}{ [[-2.5, 0], [-0.75, 0], [1.25, 0]] }{chart1}'),
                chart2: dataUtils.pre('\\graphnum{-3}{3}{1}{4}{ [[-2.5, 0], [-0.75, 0], [1.25, 0]] }{chart2}'),
                question: 'What is the increment (the distance between any two consecutive ticks) on this graph?', template: 'graphNumberline', answerBtn: 'noAnswer',
                answerIn: dataUtils.pre('\\rowgrp{$$button1}{$$button2}{$$button3}{$$button4}'),
                button1: dataUtils.pre('\\grp{\\btn{A}{F}{marg}}{\\str{ 1}}'),
                button2: dataUtils.pre('\\grp{\\btn{B}{T}{marg}}{\\str{ 0.25}}'),
                button3: dataUtils.pre('\\grp{\\btn{C}{F}{marg}}{\\str{ 4}}'),
                button4: dataUtils.pre('\\grp{\\btn{D}{F}{marg}}{\\str{ -0.5}}'),
                val1: '-2.5', val2: '[\\"-0.75\\",\\"-.75\\"]', val3: '1.25'
            },
            //problem 14
            {   
                chart1: dataUtils.pre('\\graphnum{-2}{2}{1}{4}{ [[0.75, 0], [1.75, 0], [-1.25, 0]] }{chart1}'),
                chart2: dataUtils.pre('\\graphnum{-2}{2}{1}{4}{ [[0.75, 0], [1.75, 0], [-1.25, 0]] }{chart2}'),
                question: 'What is the increment (the distance between any two consecutive ticks) on this graph?', template: 'graphNumberline', answerBtn: 'noAnswer',
                answerIn: dataUtils.pre('\\rowgrp{$$button1}{$$button2}{$$button3}{$$button4}'),
                button1: dataUtils.pre('\\grp{\\btn{A}{F}{marg}}{\\str{ 1}}'),
                button2: dataUtils.pre('\\grp{\\btn{B}{T}{marg}}{\\str{ 0.25}}'),
                button3: dataUtils.pre('\\grp{\\btn{C}{F}{marg}}{\\str{ 4}}'),
                button4: dataUtils.pre('\\grp{\\btn{D}{F}{marg}}{\\str{ -0.5}}'),
                val1: '[\\"-0.75\\",\\"-.75\\"]', val2: '1.75', val3: '-1.25'
            },
            //problem 15
            {   
                chart1: dataUtils.pre('\\graphnum{-3}{3}{1}{4}{ [[-0.5, 0], [1.25, 0], [-2.5, 0]] }{chart1}'),
                chart2: dataUtils.pre('\\graphnum{-3}{3}{1}{4}{ [[-0.5, 0], [1.25, 0], [-2.5, 0]] }{chart2}'),
                question: 'What is the increment (the distance between any two consecutive ticks) on this graph?', template: 'graphNumberline', answerBtn: 'noAnswer',
                answerIn: dataUtils.pre('\\rowgrp{$$button1}{$$button2}{$$button3}{$$button4}'),
                button1: dataUtils.pre('\\grp{\\btn{A}{F}{marg}}{\\str{ 1.25}}'),
                button2: dataUtils.pre('\\grp{\\btn{B}{F}{marg}}{\\str{ -0.5}}'),
                button3: dataUtils.pre('\\grp{\\btn{C}{F}{marg}}{\\str{ 4}}'),
                button4: dataUtils.pre('\\grp{\\btn{D}{T}{marg}}{\\str{ 0.25}}'),
                val1: '[\\"-0.5\\",\\"-.5\\"]', val2: '1.25', val3: '-2.5'
            },
          //problem 16
            {   
            	numberline1: dataUtils.pre('\\numberline{-60}{60}{10}{-30}{10}{40}{numberline1}{false}'),
            	numberline2: dataUtils.pre('\\numberline{-60}{60}{10}{-30}{10}{40}{numberline2}{true}{true}'),
            	question: 'What is the increment (the distance between any two consecutive ticks) on this numberline?', 
            	template: 'interactiveNumberline', answerBtn: 'noAnswer',
				buttonValueA: 'F', buttonValueB: 'F', buttonValueC: 'T', buttonValueD: 'F',
				buttonLabelA: '-10', buttonLabelB:'.5', buttonLabelC:'10', buttonLabelD:'1',
                plotX: '-30', plotY: '10', plotZ: '40'
            },	
          //problem 17
            {   
            	numberline1: dataUtils.pre('\\numberline{-10}{10}{1}{5}{-9}{1}{numberline1}{false}'),
            	numberline2: dataUtils.pre('\\numberline{-10}{10}{1}{5}{-9}{1}{numberline2}{true}{true}'),
                question: 'What is the increment (the distance between any two consecutive ticks) on this numberline?', 
                template: 'interactiveNumberline', answerBtn: 'noAnswer',
                buttonValueA: 'T', buttonValueB: 'F', buttonValueC: 'F', buttonValueD: 'F', 
                buttonLabelA: '1', buttonLabelB:'.5', buttonLabelC:'-1', buttonLabelD:'4',
                plotX: '5', plotY: '-9', plotZ: '1'
            },
          //problem 18
            {   
            	numberline1: dataUtils.pre('\\numberline{-2}{2}{.2}{-1.4}{-0.2}{1}{numberline1}{false}'),
            	numberline2: dataUtils.pre('\\numberline{-2}{2}{.2}{-1.4}{-0.2}{1}{numberline2}{true}{true}'),
                question: 'What is the increment (the distance between any two consecutive ticks) on this numberline?', 
                template: 'interactiveNumberline', answerBtn: 'noAnswer',
                buttonValueA: 'F', buttonValueB: 'T', buttonValueC: 'F', buttonValueD: 'F', 
                buttonLabelA: '1', buttonLabelB:'.2', buttonLabelC:'.25', buttonLabelD:'-2',
                plotX: '-1.4', plotY: '-0.2', plotZ: '1'
            },
            //problem 19
            {   
            	numberline1: dataUtils.pre('\\numberline{-20}{20}{2}{2}{18}{-10}{numberline1}{false}'),
            	numberline2: dataUtils.pre('\\numberline{-20}{20}{2}{2}{18}{-10}{numberline2}{true}{true}'),
                question: 'What is the increment (the distance between any two consecutive ticks) on this numberline?', 
                template: 'interactiveNumberline', answerBtn: 'noAnswer',
                buttonValueA: 'F', buttonValueB: 'F', buttonValueC: 'F', buttonValueD: 'T', 
                buttonLabelA: '-2', buttonLabelB:'-3', buttonLabelC:'1', buttonLabelD:'2',
                plotX: '2', plotY: '18', plotZ: '-10'
            },
            //problem 20
            {   
            	numberline1: dataUtils.pre('\\numberline{-40}{40}{10}{30}{-30}{20}{numberline1}{false}'),
            	numberline2: dataUtils.pre('\\numberline{-40}{40}{10}{30}{-30}{20}{numberline2}{true}{true}'),
            	question: 'What is the increment (the distance between any two consecutive ticks) on this numberline?', 
            	template: 'interactiveNumberline', answerBtn: 'noAnswer',
				buttonValueA: 'F', buttonValueB: 'F', buttonValueC: 'T', buttonValueD: 'F',
				buttonLabelA: '-10', buttonLabelB:'.5', buttonLabelC:'10', buttonLabelD:'1',
                plotX: '30', plotY: '-30', plotZ: '20'
            },	
         //problem 21
            {   
            	numberline1: dataUtils.pre('\\numberline{-10}{10}{1}{-7}{3}{8}{numberline1}{false}'),
            	numberline2: dataUtils.pre('\\numberline{-10}{10}{1}{-7}{3}{8}{numberline2}{true}{true}'),
                question: 'What is the increment (the distance between any two consecutive ticks) on this numberline?', 
                template: 'interactiveNumberline', answerBtn: 'noAnswer',
                buttonValueA: 'T', buttonValueB: 'F', buttonValueC: 'F', buttonValueD: 'F', 
                buttonLabelA: '1', buttonLabelB:'.5', buttonLabelC:'-1', buttonLabelD:'4',
                plotX: '-7', plotY: '3', plotZ: '8'
            },
          //problem 22
            {   
            	numberline1: dataUtils.pre('\\numberline{-3}{3}{.2}{.4}{-2.2}{-1.8}{numberline1}{false}'),
            	numberline2: dataUtils.pre('\\numberline{-3}{3}{.2}{.4}{-2.2}{-1.8}{numberline2}{true}{true}'),
                question: 'What is the increment (the distance between any two consecutive ticks) on this numberline?', 
                template: 'interactiveNumberline', answerBtn: 'noAnswer',
                buttonValueA: 'F', buttonValueB: 'T', buttonValueC: 'F', buttonValueD: 'F', 
                buttonLabelA: '1', buttonLabelB:'.2', buttonLabelC:'.25', buttonLabelD:'-2',
                plotX: '.4', plotY: '-2.2', plotZ: '-1.8'
            },
          //problem 23
            {   
            	numberline1: dataUtils.pre('\\numberline{-3}{3}{.25}{-2.25}{0.75}{2.25}{numberline1}{false}'),
            	numberline2: dataUtils.pre('\\numberline{-3}{3}{.25}{-2.25}{0.75}{2.25}{numberline2}{true}{true}'),
                question: 'What is the increment (the distance between any two consecutive ticks) on this numberline?', 
                template: 'interactiveNumberline', answerBtn: 'noAnswer',
                buttonValueA: 'F', buttonValueB: 'T', buttonValueC: 'F', buttonValueD: 'F', 
                buttonLabelA: '1', buttonLabelB:'.25', buttonLabelC:'.2', buttonLabelD:'.5',
                plotX: '-2.25', plotY: '0.75', plotZ: '2.25'
            },
            //problem 24
            {   
            	numberline1: dataUtils.pre('\\numberline{-2}{2}{.2}{-1.2}{.2}{1.4}{numberline1}{false}'),
            	numberline2: dataUtils.pre('\\numberline{-2}{2}{.2}{-1.2}{.2}{1.4}{numberline2}{true}{true}'),
                question: 'What is the increment (the distance between any two consecutive ticks) on this numberline?', 
                template: 'interactiveNumberline', answerBtn: 'noAnswer',
                buttonValueA: 'F', buttonValueB: 'T', buttonValueC: 'F', buttonValueD: 'F', 
                buttonLabelA: '1', buttonLabelB:'.2', buttonLabelC:'.25', buttonLabelD:'-2',
                plotX: '-1.2', plotY: '.2', plotZ: '1.4'
            },
          //problem 25
            {   
            	numberline1: dataUtils.pre('\\numberline{-60}{60}{10}{20}{-10}{-50}{numberline1}{false}'),
            	numberline2: dataUtils.pre('\\numberline{-60}{60}{10}{20}{-10}{-50}{numberline2}{true}{true}'),
            	question: 'What is the increment (the distance between any two consecutive ticks) on this numberline?', 
            	template: 'interactiveNumberline', answerBtn: 'noAnswer',
				buttonValueA: 'F', buttonValueB: 'F', buttonValueC: 'T', buttonValueD: 'F',
				buttonLabelA: '-10', buttonLabelB:'.5', buttonLabelC:'10', buttonLabelD:'1',
                plotX: '20', plotY: '-10', plotZ: '-50'
            },
          //problem 26
            {   
            	numberline1: dataUtils.pre('\\numberline{-2}{2}{.25}{-1.50}{-.50}{1.50}{numberline1}{false}'),
            	numberline2: dataUtils.pre('\\numberline{-2}{2}{.25}{-1.50}{-.50}{1.50}{numberline2}{true}{true}'),
                question: 'What is the increment (the distance between any two consecutive ticks) on this numberline?', 
                template: 'interactiveNumberline', answerBtn: 'noAnswer',
                buttonValueA: 'F', buttonValueB: 'T', buttonValueC: 'F', buttonValueD: 'F', 
                buttonLabelA: '1', buttonLabelB:'.25', buttonLabelC:'.2', buttonLabelD:'.5',
                plotX: '-1.50', plotY: '-.50', plotZ: '1.50'
            },
          //problem 27
            {   
            	numberline1: dataUtils.pre('\\numberline{-12}{12}{2}{-8}{-4}{6}{numberline1}{false}'),
            	numberline2: dataUtils.pre('\\numberline{-12}{12}{2}{-8}{-4}{6}{numberline2}{true}{true}'),
                question: 'What is the increment (the distance between any two consecutive ticks) on this numberline?', 
                template: 'interactiveNumberline', answerBtn: 'noAnswer',
                buttonValueA: 'F', buttonValueB: 'F', buttonValueC: 'F', buttonValueD: 'T', 
                buttonLabelA: '-2', buttonLabelB:'-3', buttonLabelC:'1', buttonLabelD:'2',
                plotX: '-8', plotY: '-4', plotZ: '6'
            },
          //problem 28
            {   
            	numberline1: dataUtils.pre('\\numberline{-8}{8}{1}{-7}{4}{-5}{numberline1}{false}'),
            	numberline2: dataUtils.pre('\\numberline{-8}{8}{1}{-7}{4}{-5}{numberline2}{true}{true}'),
                question: 'What is the increment (the distance between any two consecutive ticks) on this numberline?', 
                template: 'interactiveNumberline', answerBtn: 'noAnswer',
                buttonValueA: 'T', buttonValueB: 'F', buttonValueC: 'F', buttonValueD: 'F', 
                buttonLabelA: '1', buttonLabelB:'.5', buttonLabelC:'-1', buttonLabelD:'4',
                plotX: '-7', plotY: '4', plotZ: '-5'
            },
          //problem 29
            {   
            	numberline1: dataUtils.pre('\\numberline{-2}{2}{.25}{.25}{-0.75}{-1.25}{numberline1}{false}'),
            	numberline2: dataUtils.pre('\\numberline{-2}{2}{.25}{.25}{-0.75}{-1.25}{numberline2}{true}{true}'),
                question: 'What is the increment (the distance between any two consecutive ticks) on this numberline?', 
                template: 'interactiveNumberline', answerBtn: 'noAnswer',
                buttonValueA: 'F', buttonValueB: 'T', buttonValueC: 'F', buttonValueD: 'F', 
                buttonLabelA: '1', buttonLabelB:'.25', buttonLabelC:'.2', buttonLabelD:'.5',
                plotX: '.25', plotY: '-0.75', plotZ: '-1.25'
            },
          //problem 30
            {   
            	numberline1: dataUtils.pre('\\numberline{-16}{16}{2}{10}{-14}{-6}{numberline1}{false}'),
            	numberline2: dataUtils.pre('\\numberline{-16}{16}{2}{10}{-14}{-6}{numberline2}{true}{true}'),
                question: 'What is the increment (the distance between any two consecutive ticks) on this numberline?', 
                template: 'interactiveNumberline', answerBtn: 'noAnswer',
                buttonValueA: 'F', buttonValueB: 'F', buttonValueC: 'F', buttonValueD: 'T', 
                buttonLabelA: '-2', buttonLabelB:'-3', buttonLabelC:'1', buttonLabelD:'2',
                plotX: '10', plotY: '-14', plotZ: '-6'
            },
        ];

	shuffle = [
		{ problems: [1,2,3], total: 1},
		{ problems: [4,5,6], total: 1},
		{ problems: [7,8,9], total: 1},
		{ problems: [10,11,12], total: 1},
		{ problems: [13,14,15], total: 1},
		{ problems: [17,21,28], total: 1},
		{ problems: [18,22,24], total: 1},
		{ problems: [16,20,25], total: 1},
		{ problems: [19,27,30], total: 1},
		{ problems: [23,26,29], total: 1},
		];    
    	return dataUtils.build(desc, template, data, shuffle);
		
	//return dataUtils.build(desc, template, data);
}]);