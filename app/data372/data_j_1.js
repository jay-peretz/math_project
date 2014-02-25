/*global angular */

angular.module('mathSkills').service('data_j_1', ['dataUtils', function (dataUtils) {
    var desc = {
			title: 'J.1 Number Line',
    		path: 'J.1-number-line',
            children: []
        },
        	template = {
            main: {
                title: 'Charts and Bar Graphs', // IK - where does it show?
                children: [{
                    title: 'Main Answer',
                    children: [{
                        problem:'\\pan{$spanQ}{$spanA}{'+
                                    '$chart'+
                                '}', 
                        answer: '\\css{'+
                                    '\\rowgrp'+
                                        '{\\ins{$question}}'+
                                        '{$answerIn}'+
                                '}{well}',
                        controls: {
                            "checkAnswer": true,
                            "help": '\\rowgrp'+
                                        '{\\ins{$question}}'+
                                        '{\\html{<span class=>Answer:</span><br><br>$answertxt}}'
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
			// { firstButton: 'F', secondButton: 'T', firstNumber: '-5', secondNumber: '5', startGraph: '-10', endGraph: '10', statement: 'LESS THAN', template: 'second', answerBtn: 'noAnswer' },
			
			{  //1 //15 from 2A.2
                chart: dataUtils.pre('\\graphnum{Title}{[ ["January", 220], ["April", 370], ["July", 445], ["October", 300]]}{500}{Side title}'), 
                question: 'What is the increment (the distance between any two consecutive ticks) on this graph?', template: 'main', answerBtn: 'noAnswer',
                answertxt: 'There were approximately 590 deer counted in January and April.',
                answerIn: dataUtils.pre('\\rowgrp{$$button1}{$$button2}{$$button3}{$$button4}'),
                button1: dataUtils.pre('\\grp{\\btn{A}{F}{marg}}{\\str{\xA0 \xA0 Answer 1}}'),
                button2: dataUtils.pre('\\grp{\\btn{B}{F}{marg}}{\\str{\xA0 \xA0 Answer 2}}'),
                button3: dataUtils.pre('\\grp{\\btn{C}{T}{marg}}{\\str{\xA0 \xA0 Answer 3}}'),
                button4: dataUtils.pre('\\grp{\\btn{D}{F}{marg}}{\\str{\xA0 \xA0 Answer 4}}'),
                spanQ:'5', spanA:'7'  
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