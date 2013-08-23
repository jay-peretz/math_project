/*global angular */

angular.module('mathSkills').service('data2A_2', ['dataUtils', function (dataUtils) {
    var desc = {
            title: '2A.2 Charts and Bar Graphs',
            path: '2A.2-charts-and-bar-graphs',
            children: []
        },
        template = {
            main: {
                title: 'Charts and Bar Graphs',
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
        data = [
            {  //1
                chart: dataUtils.pre('\\chart{Time (in seconds) to Run 220 Meters}{6}{5}{["Athlete","Race #1","Race #2","Race #3","Race #4","Runner A","27","29","29","29","Runner B","30","28","28","26","Runner C","26","30","27","24","Runner D","24","28","30","28","Runner E","27","24","28","24"]}'), 
                question: 'Question 1:<br><br>Which two athletes had the best times to finish Race #1?', template: 'main', answerBtn: 'noAnswer',
                answertxt: 'Runners C & D ran fastest in Race #1',
                answerIn: dataUtils.pre('\\rowgrp{$$button1}{$$button2}{$$button3}{$$button4}'),
                button1: dataUtils.pre('\\grp{\\btn{A}{T}{marg}}{\\str{\xA0 \xA0 C and D}}'),
                button2: dataUtils.pre('\\grp{\\btn{B}{F}{marg}}{\\str{\xA0 \xA0 A and B}}'),
                button3: dataUtils.pre('\\grp{\\btn{C}{F}{marg}}{\\str{\xA0 \xA0 B and C}}'),
                button4: dataUtils.pre('\\grp{\\btn{D}{F}{marg}}{\\str{\xA0 \xA0 D and E}}'),
                spanQ:'5', spanA:'7'  
            },
            {  //2
                chart: dataUtils.pre('\\chart{Time (in seconds) to Run 220 Meters}{6}{5}{["Athlete","Race #1","Race #2","Race #3","Race #4","Runner A","27","29","29","29","Runner B","30","28","28","26","Runner C","26","30","27","24","Runner D","24","28","30","28","Runner E","27","24","28","24"]}'), 
                question: 'Question 2:<br><br>Which athlete took the least amount of time to finish Race #2?', template: 'main', answerBtn: 'noAnswer',
                answertxt: 'Runner E ran Race # 2 in the shortest amount of time',
                answerIn: dataUtils.pre('\\rowgrp{$$button1}{$$button2}{$$button3}{$$button4}'),
                button1: dataUtils.pre('\\grp{\\btn{A}{F}{marg}}{\\str{\xA0 \xA0 runner D}}'),
                button2: dataUtils.pre('\\grp{\\btn{B}{F}{marg}}{\\str{\xA0 \xA0 runner C}}'),
                button3: dataUtils.pre('\\grp{\\btn{C}{T}{marg}}{\\str{\xA0 \xA0 runner E}}'),
                button4: dataUtils.pre('\\grp{\\btn{D}{F}{marg}}{\\str{\xA0 \xA0 runner A}}'),
                spanQ:'5', spanA:'7'  
            },
            {  //3
                chart: dataUtils.pre('\\chart{Time (in seconds) to Run 220 Meters}{6}{5}{["Athlete","Race #1","Race #2","Race #3","Race #4","Runner A","27","29","29","29","Runner B","30","28","28","26","Runner C","26","30","27","24","Runner D","24","28","30","28","Runner E","27","24","28","24"]}'), 
                question: 'Question 3:<br><br>How many of the runners had a time of 25 seconds or better in at least one race?', template: 'main', answerBtn: 'noAnswer',
                answertxt: '3 runners ran at least one race under 25 seconds',
                answerIn: dataUtils.pre('\\rowgrp{$$button1}{$$button2}{$$button3}{$$button4}'),
                button1: dataUtils.pre('\\grp{\\btn{A}{F}{marg}}{\\str{\xA0 \xA0 2 runners}}'),
                button2: dataUtils.pre('\\grp{\\btn{B}{F}{marg}}{\\str{\xA0 \xA0 0 runners}}'),
                button3: dataUtils.pre('\\grp{\\btn{C}{F}{marg}}{\\str{\xA0 \xA0 1 runner}}'),
                button4: dataUtils.pre('\\grp{\\btn{D}{T}{marg}}{\\str{\xA0 \xA0 3 runners}}'),
                spanQ:'5', spanA:'7'  
            },
            {  //4
                chart: dataUtils.pre('\\chart{Utility Bill for Gas and Electricity}{5}{5}{["Student","Therms of Gas Used","Cost of Gas","Kilowatt Hours of Electricity Used","Cost of Electricity","Anne","18","$26","188","$41","Travis","10","$14","183","$40","Nathan","20","$28","261","$56","Sondra","12","$17","251","$54"]}'), 
                question: 'Question 1:<br><br>How much more money does Nathan spend on gas than Anne?', template: 'main',
                answertxt: 'Nathan spends $2 more than Anne on gas',
                answerIn: dataUtils.pre('\\grp{\\str{$}}{\\input{2}}'),
                spanQ:'5', spanA:'7'  
            },
            {  //5
                chart: dataUtils.pre('\\chart{Utility Bill for Gas and Electricity}{5}{5}{["Student","Therms of Gas Used","Cost of Gas","Kilowatt Hours of Electricity Used","Cost of Electricity","Anne","18","$26","188","$41","Travis","10","$14","183","$40","Nathan","20","$28","261","$56","Sondra","12","$17","251","$54"]}'), 
                question: 'Question 2:<br><br>How much more money does Nathan spend on electricity than on gas?', template: 'main',
                answertxt: 'Nathan spends $28 more on electricity than he spends on gas ($56 - $28 = $28)',
                answerIn: dataUtils.pre('\\grp{\\str{$}}{\\input{28}}'),
                spanQ:'5', spanA:'7'  
            },
            {  //6
                chart: dataUtils.pre('\\chart{Utility Bill for Gas and Electricity}{5}{5}{["Student","Therms of Gas Used","Cost of Gas","Kilowatt Hours of Electricity Used","Cost of Electricity","Anne","18","$26","188","$41","Travis","10","$14","183","$40","Nathan","20","$28","261","$56","Sondra","12","$17","251","$54"]}'), 
                question: 'Question 3:<br><br>How much more money does Nathan spend on the total utility bill (the cost of both gas and electricity) than Anne?', template: 'main',
                answertxt: 'Nathan\'s total is $28 + $56 = $84<br><br>Anne\'s total is $26 + $41 = $67<br><br>Nathan spends $84 - $67 = $17',
                answerIn: dataUtils.pre('\\grp{\\str{$}}{\\input{17}}'),
                spanQ:'5', spanA:'7'  
            },
            {  //7
                chart: dataUtils.pre('\\chart{}{5}{5}{["Student","Phone","Internet","Cable TV","Gas","Sam","41","16","40","69","Jerry","64","60","59","65","Maribel","94","67","67","99","Yvonne","41","69","34","113"]}'), 
                question: 'Question 1:<br><br>For the four students, which student spent the most for Phone and Gas?', template: 'main', answerBtn: 'noAnswer',
                answertxt: 'Maribel spent the most on Phone and Gas expenses.',
                answerIn: dataUtils.pre('\\rowgrp{$$button1}{$$button2}{$$button3}{$$button4}'),
                button1: dataUtils.pre('\\grp{\\btn{A}{F}{marg}}{\\str{\xA0 \xA0 Sam}}'),
                button2: dataUtils.pre('\\grp{\\btn{B}{F}{marg}}{\\str{\xA0 \xA0 Jerry}}'),
                button3: dataUtils.pre('\\grp{\\btn{C}{T}{marg}}{\\str{\xA0 \xA0 Maribel}}'),
                button4: dataUtils.pre('\\grp{\\btn{D}{F}{marg}}{\\str{\xA0 \xA0 Yvonne}}'),
                spanQ:'4', spanA:'8'  
            },
            {  //8
                chart: dataUtils.pre('\\chart{}{5}{5}{["Student","Phone","Internet","Cable TV","Gas","Sam","41","16","40","69","Jerry","64","60","59","65","Maribel","94","67","67","99","Yvonne","41","69","34","113"]}'), 
                question: 'Question 2:<br><br>Which service given in these four choices is the most expensive for the four students all together?', template: 'main', answerBtn: 'noAnswer',
                answertxt: 'The four students together spent the most on Gas.',
                answerIn: dataUtils.pre('\\rowgrp{$$button1}{$$button2}{$$button3}{$$button4}'),
                button1: dataUtils.pre('\\grp{\\btn{A}{F}{marg}}{\\str{\xA0 \xA0 Phone}}'),
                button2: dataUtils.pre('\\grp{\\btn{B}{F}{marg}}{\\str{\xA0 \xA0 Internet}}'),
                button3: dataUtils.pre('\\grp{\\btn{C}{F}{marg}}{\\str{\xA0 \xA0 Cable TV}}'),
                button4: dataUtils.pre('\\grp{\\btn{D}{T}{marg}}{\\str{\xA0 \xA0 Gas}}'),
                spanQ:'4', spanA:'8'  
            },
            {  //9
                chart: dataUtils.pre('\\chart{}{5}{5}{["Student","Phone","Internet","Cable TV","Gas","Sam","41","16","40","69","Jerry","64","60","59","65","Maribel","94","67","67","99","Yvonne","41","69","34","113"]}'), 
                question: 'Question 3:<br><br>Which service given in these four choices is the least expensive for the four students all together?', template: 'main', answerBtn: 'noAnswer',
                answertxt: 'The lowest expense for the four students together is Cable TV.',
                answerIn: dataUtils.pre('\\rowgrp{$$button1}{$$button2}{$$button3}{$$button4}'),
                button1: dataUtils.pre('\\grp{\\btn{A}{F}{marg}}{\\str{\xA0 \xA0 Phone}}'),
                button2: dataUtils.pre('\\grp{\\btn{B}{F}{marg}}{\\str{\xA0 \xA0 Internet}}'),
                button3: dataUtils.pre('\\grp{\\btn{C}{T}{marg}}{\\str{\xA0 \xA0 Cable TV}}'),
                button4: dataUtils.pre('\\grp{\\btn{D}{F}{marg}}{\\str{\xA0 \xA0 Gas}}'),
                spanQ:'4', spanA:'8'  
            },
            {  //10
                chart: dataUtils.pre('\\graph{Hourly Wages at Budget Warehouse}{[ ["A", 6], ["B", 7], ["C", 12], ["D", 15], ["E", 22], ["Manager", 27] ]}{30}{Hourly Wage}'), 
                question: 'Question 1:<br><br>What is the label for the vertical axis?', template: 'main', answerBtn: 'noAnswer',
                answertxt: 'The label for the vertical axis is \\"Hourly Wages\\".',
                answerIn: dataUtils.pre('\\rowgrp{$$button1}{$$button2}{$$button3}{$$button4}'),
                button1: dataUtils.pre('\\grp{\\btn{A}{F}{marg}}{\\str{\xA0 \xA0 Employee Classification}}'),
                button2: dataUtils.pre('\\grp{\\btn{B}{F}{marg}}{\\str{\xA0 \xA0 Hourly Wages for Employees}}'),
                button3: dataUtils.pre('\\grp{\\btn{C}{T}{marg}}{\\str{\xA0 \xA0 Hourly Wage}}'),
                button4: dataUtils.pre('\\grp{\\btn{D}{F}{marg}}{\\str{\xA0 \xA0 Hourly Wages at Budget Warehouse}}'),
                spanQ:'5', spanA:'7'  
            },
            {  //11
                chart: dataUtils.pre('\\graph{Hourly Wages at Budget Warehouse}{[ ["A", 6], ["B", 7], ["C", 12], ["D", 15], ["E", 22], ["Manager", 27] ]}{30}{Hourly Wage}'), 
                question: 'Question 2:<br><br>Approximately how much more money per hour does a Class E worker make than Class A worker?', template: 'main', answerBtn: 'noAnswer',
                answertxt: 'Class E workers make $16/hour more than Class A workers.',
                answerIn: dataUtils.pre('\\rowgrp{$$button1}{$$button2}{$$button3}{$$button4}'),
                button1: dataUtils.pre('\\grp{\\btn{A}{F}{marg}}{\\str{\xA0 \xA0 $20.00 more}}'),
                button2: dataUtils.pre('\\grp{\\btn{B}{T}{marg}}{\\str{\xA0 \xA0 $16.00 more}}'),
                button3: dataUtils.pre('\\grp{\\btn{C}{F}{marg}}{\\str{\xA0 \xA0 $10.00 more}}'),
                button4: dataUtils.pre('\\grp{\\btn{D}{F}{marg}}{\\str{\xA0 \xA0 $5.00 more}}'),
                spanQ:'5', spanA:'7'  
            },
            {  //12
                chart: dataUtils.pre('\\graph{Hourly Wages at Budget Warehouse}{[ ["A", 6], ["B", 7], ["C", 12], ["D", 15], ["E", 22], ["Manager", 27] ]}{30}{Hourly Wage}'), 
                question: 'Question 3:<br><br>If there are 100 Class A workers, 50 class B workers, 30 class C workers, 10 class D workers, 5 class E workers, and 2 managers, how many employees earn $15 an hour or more?', template: 'main', answerBtn: 'noAnswer',
                answertxt: 'There are a total of 17 people who are Class D, Class E or Manager.',
                answerIn: dataUtils.pre('\\rowgrp{$$button1}{$$button2}{$$button3}{$$button4}'),
                button1: dataUtils.pre('\\grp{\\btn{A}{F}{marg}}{\\str{\xA0 \xA0 7 employees}}'),
                button2: dataUtils.pre('\\grp{\\btn{B}{F}{marg}}{\\str{\xA0 \xA0 15 employees}}'),
                button3: dataUtils.pre('\\grp{\\btn{C}{T}{marg}}{\\str{\xA0 \xA0 17 employees}}'),
                button4: dataUtils.pre('\\grp{\\btn{D}{F}{marg}}{\\str{\xA0 \xA0 180 employees}}'),
                spanQ:'5', spanA:'7'  
            },
            {  //13
                chart: dataUtils.pre('\\graph{Deer Survey in Sonoma County}{[ ["January", 220], ["April", 370], ["July", 445], ["October", 300]]}{500}{Number of Deer Counted}'), 
                question: 'Question 1:<br><br>What is the label for the vertical axis?', template: 'main', answerBtn: 'noAnswer',
                answertxt: 'The label of the vertical axis is \\"Number of Deer Counted\\".',
                answerIn: dataUtils.pre('\\rowgrp{$$button1}{$$button2}{$$button3}{$$button4}'),
                button1: dataUtils.pre('\\grp{\\btn{A}{F}{marg}}{\\str{\xA0 \xA0 Months}}'),
                button2: dataUtils.pre('\\grp{\\btn{B}{F}{marg}}{\\str{\xA0 \xA0 Deer Survey in Sonoma County}}'),
                button3: dataUtils.pre('\\grp{\\btn{C}{F}{marg}}{\\str{\xA0 \xA0 Deer Population}}'),
                button4: dataUtils.pre('\\grp{\\btn{D}{T}{marg}}{\\str{\xA0 \xA0 Number of Deer Counted}}'),
                spanQ:'5', spanA:'7'  
            },
            {  //14
                chart: dataUtils.pre('\\graph{Deer Survey in Sonoma County}{[ ["January", 220], ["April", 370], ["July", 445], ["October", 300]]}{500}{Number of Deer Counted}'), 
                question: 'Question 2:<br><br>Approximately how many deer were counted in July?', template: 'main', answerBtn: 'noAnswer',
                answertxt: 'Approximately 445 deer were counted in July.',
                answerIn: dataUtils.pre('\\rowgrp{$$button1}{$$button2}{$$button3}{$$button4}'),
                button1: dataUtils.pre('\\grp{\\btn{A}{T}{marg}}{\\str{\xA0 \xA0 445 Deer}}'),
                button2: dataUtils.pre('\\grp{\\btn{B}{F}{marg}}{\\str{\xA0 \xA0 380 Deer}}'),
                button3: dataUtils.pre('\\grp{\\btn{C}{F}{marg}}{\\str{\xA0 \xA0 410 Deer}}'),
                button4: dataUtils.pre('\\grp{\\btn{D}{F}{marg}}{\\str{\xA0 \xA0 300 Deer}}'),
                spanQ:'5', spanA:'7'  
            },
            {  //15
                chart: dataUtils.pre('\\graph{Deer Survey in Sonoma County}{[ ["January", 220], ["April", 370], ["July", 445], ["October", 300]]}{500}{Number of Deer Counted}'), 
                question: 'Question 3:<br><br>Approximately how many deer were counted in the first two periods of the survey (January and April)?', template: 'main', answerBtn: 'noAnswer',
                answertxt: 'There were approximately 590 deer counted in January and April.',
                answerIn: dataUtils.pre('\\rowgrp{$$button1}{$$button2}{$$button3}{$$button4}'),
                button1: dataUtils.pre('\\grp{\\btn{A}{F}{marg}}{\\str{\xA0 \xA0 450 Deer}}'),
                button2: dataUtils.pre('\\grp{\\btn{B}{F}{marg}}{\\str{\xA0 \xA0 680 Deer}}'),
                button3: dataUtils.pre('\\grp{\\btn{C}{T}{marg}}{\\str{\xA0 \xA0 590 Deer}}'),
                button4: dataUtils.pre('\\grp{\\btn{D}{F}{marg}}{\\str{\xA0 \xA0 500 Deer}}'),
                spanQ:'5', spanA:'7'  
            },
            {  //16
                chart: dataUtils.pre('\\horgraph{Country A:  Food Production and Population}{[[0, "1965"], [2, "1965"], null, [0, "1985"], [3, "1985"], null, [0, "2005"], [11, "2005"], null, [0, "2025"],[22, "2025"]]}{Population of Country A}{[[0, "1962"], [3, "1962"], null, [0, "1982"], [5, "1982"], null, [0, "2002"], [9, "2002"], null, [0, "2022"],[18, "2022"]]}{Population Country A can Feed}{Years}{Number (in millions)}'), 
                question: 'Question 1:<br><br>What is the increment for the horizontal axis?', template: 'main', answerBtn: 'noAnswer',
                answertxt: 'The increment for the horizontal axis is 5 million.',
                answerIn: dataUtils.pre('\\rowgrp{$$button1}{$$button2}{$$button3}{$$button4}'),
                button1: dataUtils.pre('\\grp{\\btn{A}{F}{marg}}{\\str{\xA0 \xA0 20 years}}'),
                button2: dataUtils.pre('\\grp{\\btn{B}{F}{marg}}{\\str{\xA0 \xA0 10 years}}'),
                button3: dataUtils.pre('\\grp{\\btn{C}{F}{marg}}{\\str{\xA0 \xA0 10 million}}'),
                button4: dataUtils.pre('\\grp{\\btn{D}{T}{marg}}{\\str{\xA0 \xA0 5 million}}'),
                spanQ:'5', spanA:'7'  
            },
            {  //17
                chart: dataUtils.pre('\\horgraph{Country A:  Food Production and Population}{[[0, "1965"], [2, "1965"], null, [0, "1985"], [3, "1985"], null, [0, "2005"], [11, "2005"], null, [0, "2025"],[22, "2025"]]}{Population of Country A}{[[0, "1962"], [3, "1962"], null, [0, "1982"], [5, "1982"], null, [0, "2002"], [9, "2002"], null, [0, "2022"],[18, "2022"]]}{Population Country A can Feed}{Years}{Number (in millions)}'), 
                question: 'Question 2:<br><br>Approximately what number represents the population of Country A in 2005?', template: 'main', answerBtn: 'noAnswer',
                answertxt: 'The population of Country A in 2005 was approximately 11 million people.',
                answerIn: dataUtils.pre('\\rowgrp{$$button1}{$$button2}{$$button3}{$$button4}'),
                button1: dataUtils.pre('\\grp{\\btn{A}{F}{marg}}{\\str{\xA0 \xA0 12 million}}'),
                button2: dataUtils.pre('\\grp{\\btn{B}{F}{marg}}{\\str{\xA0 \xA0 18 million}}'),
                button3: dataUtils.pre('\\grp{\\btn{C}{T}{marg}}{\\str{\xA0 \xA0 11 million}}'),
                button4: dataUtils.pre('\\grp{\\btn{D}{F}{marg}}{\\str{\xA0 \xA0 9 million}}'),
                spanQ:'5', spanA:'7'  
            },
            {  //18
                chart: dataUtils.pre('\\horgraph{Country A:  Food Production and Population}{[[0, "1965"], [2, "1965"], null, [0, "1985"], [3, "1985"], null, [0, "2005"], [11, "2005"], null, [0, "2025"],[22, "2025"]]}{Population of Country A}{[[0, "1962"], [3, "1962"], null, [0, "1982"], [5, "1982"], null, [0, "2002"], [9, "2002"], null, [0, "2022"],[18, "2022"]]}{Population Country A can Feed}{Years}{Number (in millions)}'), 
                question: 'Question 3:<br><br>Approximately what number represents the increase in population from 1965 to 1985?', template: 'main', answerBtn: 'noAnswer',
                answertxt: 'Between 1965 and 1985, the population increased approximately by 1 million.',
                answerIn: dataUtils.pre('\\rowgrp{$$button1}{$$button2}{$$button3}{$$button4}'),
                button1: dataUtils.pre('\\grp{\\btn{A}{F}{marg}}{\\str{\xA0 \xA0 2 million}}'),
                button2: dataUtils.pre('\\grp{\\btn{B}{F}{marg}}{\\str{\xA0 \xA0 3 million}}'),
                button3: dataUtils.pre('\\grp{\\btn{C}{F}{marg}}{\\str{\xA0 \xA0 4 million}}'),
                button4: dataUtils.pre('\\grp{\\btn{D}{T}{marg}}{\\str{\xA0 \xA0 1 million}}'),
                spanQ:'5', spanA:'7'  
            }
        ];
	return dataUtils.build(desc, template, data);
}]);
