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
                chart1: dataUtils.pre('\\graphnum{-10}{10}{2}{1}{ [[-9, 0], [-3, 0], [6, 0]] }{chart1}'),
                chart2: dataUtils.pre('\\graphnum{-10}{10}{2}{1}{ [[-9, 0], [-3, 0], [6, 0]] }{chart2}'),
                question: 'What is the increment (the distance between any two consecutive ticks) on this graph?', template: 'main', answerBtn: 'noAnswer',
                answerIn: dataUtils.pre('\\rowgrp{$$button1}{$$button2}{$$button3}{$$button4}'),
                button1: dataUtils.pre('\\grp{\\btn{A}{F}{marg}}{\\str{\xA0 \xA0 -1}}'),
                button2: dataUtils.pre('\\grp{\\btn{B}{F}{marg}}{\\str{\xA0 \xA0 2}}'),
                button3: dataUtils.pre('\\grp{\\btn{C}{T}{marg}}{\\str{\xA0 \xA0 1}}'),
                button4: dataUtils.pre('\\grp{\\btn{D}{F}{marg}}{\\str{\xA0 \xA0 4}}'),
                val1: '-9', val2: '-3', val3: '6'
            },
			/*{  //2 //16 from 2A.2
                chart: dataUtils.pre('\\horgraph{Title of this graph}{[[0, "1965"], [2, "1965"], null, [0, "1985"], [3, "1985"], null, [0, "2005"], [11, "2005"], null, [0, "2025"],[22, "2025"]]}{Population of Country A}{[[0, "1962"], [3, "1962"], null, [0, "1982"], [5, "1982"], null, [0, "2002"], [9, "2002"], null, [0, "2022"],[18, "2022"]]}{Population Country A can Feed}{Years}{Number (in millions)}'), 
                question: 'What is the increment for the horizontal axis?', template: 'main', answerBtn: 'noAnswer',
                answertxt: 'The increment for the horizontal axis is 5 million.',
                answerIn: dataUtils.pre('\\rowgrp{$$button1}{$$button2}{$$button3}{$$button4}'),
                button1: dataUtils.pre('\\grp{\\btn{A}{F}{marg}}{\\str{\xA0 \xA0 20 years}}'),
                button2: dataUtils.pre('\\grp{\\btn{B}{F}{marg}}{\\str{\xA0 \xA0 10 years}}'),
                button3: dataUtils.pre('\\grp{\\btn{C}{F}{marg}}{\\str{\xA0 \xA0 10 million}}'),
                button4: dataUtils.pre('\\grp{\\btn{D}{T}{marg}}{\\str{\xA0 \xA0 5 million}}'),
                spanQ:'5', spanA:'7'  
            },*/
        ];

	return dataUtils.build(desc, template, data);
}]);