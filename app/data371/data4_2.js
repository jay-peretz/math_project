/*global angular */

angular.module('mathSkills').service('data4_2', ['dataUtils', function (dataUtils) {
    var desc = {
			title: '4.2 Order Of Operations With Whole Numbers',
    		path: '4.2-order-of-operations-with-whole-numbers',
            children: []
        },
	        template = {
            first: {
                title: 'Order Of Operations With Whole Numbers',
                children: [{
                    title: 'Main Answer',
                    children: [{
						problem: '\\rowgrp'
						+'{\\html{Solve:}}'
						+'{\\html{&nbsp;}}'
						+'{\\html{$problemStatement}}',
						answer: '\\grp{\\input{$answer}}',
						controls: {
							"checkAnswer": true,
							"help": false,
							"workbook": true
						}
					}]
				}, {
					title: 'Workbook',
					children: [{
						problem: '\\rowgrp'
						+'{\\html{Solve:}}'
						+'{\\html{&nbsp;}}'
						+'{\\html{$problemStatement}}',
						answer: '$wb',
						controls: {
							"checkAnswer": true,
							"help": true
						}
					}]
				}]
			}	
        },
        data = [
			// problem 1
            { problemStatement: '7 <span class=margin-not-bigger>&bull;</span> 2 <span class=bigger>+</span> 4', ordopsStatement: '7 * 2 + 4', answer: '18',
			wb: dataUtils.pre('\\ordopssimple{' +
						'\\grp{\\html{7}}{\\btn{*}{T}{large}}{\\html{2}}{\\btn{+}{F}{large}}{\\html{4}},' +
                        '\\input{14},' +
                        '\\grp{\\html{14}}{\\btn{+}{T}{large}}{\\html{4}},' +
                        '\\input{18},' +
						'\\grp{\\html{18}},' +
                    '}{Solve 7 <span class=bigger>&bull;</span> 2}{Solve 14 + 4}'),
			template: 'first' },
			// problem 2
			{ problemStatement: '( 15 <span class=bigger>&minus;</span> 10 ) <span class=bigger>&divide;</span> 5', ordopsStatement: '( 15 - 10 ) / 5', answer: '1', 
			wb: dataUtils.pre('\\ordopssimple{' +
						'\\grp{\\str{(}}{\\html{15}}{\\btn{-}{T}{bigger}}{\\html{10}}{\\str{)}}{\\btn{/}{F}{bigger}}{\\html{5}},' +
                        '\\input{5},' +
                        '\\grp{\\html{5}}{\\btn{/}{T}{bigger}}{\\html{5}},' +
                        '\\input{1},' +
						'\\grp{\\html{1}},' +
                    '}{Solve 15 - 10}{Solve 5 <span class=bigger>/</span> 5}'),
			template: 'first' },
			// problem 3
			{ problemStatement: '4 <span class=bigger>&divide;</span> 2 <span class=bigger>+</span> 9', ordopsStatement: '4 / 2 + 9', answer: '11',
			wb: dataUtils.pre('\\ordopssimple{' +
						'\\grp{\\html{4}}{\\btn{/}{T}{bigger}}{\\html{2}}{\\btn{+}{F}{large}}{\\html{9}},' +
                        '\\input{2},' +
                        '\\grp{\\html{2}}{\\btn{+}{T}{large}}{\\html{9}},' +
                        '\\input{11},' +
						'\\grp{\\html{11}},' +
                    '}{Solve 4 <span class=bigger>/</span> 2}{Solve 2 + 9}'),
			template: 'first' },
			// problem 4
			{ problemStatement: '6 <span class=bigger>&minus;</span> ( 6 <span class=bigger>&divide;</span> 3 )', ordopsStatement: '6 - (6 / 3)', answer: '4',
			wb: dataUtils.pre('\\ordopssimple{' +
						'\\grp{\\html{6}}{\\btn{-}{F}{bigger}}{\\str{(}}{\\html{6}}{\\btn{/}{T}{bigger}}{\\html{3}}{\\str{)}},' +
                        '\\input{2},' +
                        '\\grp{\\html{6}}{\\btn{-}{T}{bigger}}{\\html{2}},' +
                        '\\input{4},' +
						'\\grp{\\html{4}},' +
                    '}{Solve 6 <span class=bigger>/</span> 3}{Solve 6 - 2}'),
			template: 'first' },
			// problem 5
			{ problemStatement: '7 <span class=bigger>+</span> 15 <span class=bigger>&divide;</span> 3', ordopsStatement: '7 + 15 / 3', answer: '12',
			wb: dataUtils.pre('\\ordopssimple{' +
						'\\grp{\\html{7}}{\\btn{+}{F}{large}}{\\html{15}}{\\btn{/}{T}{bigger}}{\\html{3}},' +
                        '\\input{5},' +
                        '\\grp{\\html{7}}{\\btn{+}{T}{large}}{\\html{5}},' +
                        '\\input{12},' +
						'\\grp{\\html{12}},' +
                    '}{Solve 15 <span class=bigger>/</span> 3}{Solve 7 + 5}'),
			template: 'first' },
			// problem 6
			{ problemStatement: '3 <span class=bigger>&divide;</span> ( 3 <span class=margin-not-bigger>&bull;</span> 3 <span class=bigger>&divide;</span> 3 )', ordopsStatement: '3 / (3 * 3 / 3)', answer: '1',
			wb: dataUtils.pre('\\ordopssimple{' +
						'\\grp{\\html{3}}{\\btn{/}{F}{bigger}}{\\str{(}}{\\html{3}}{\\btn{*}{T}{large}}{\\html{3}}{\\btn{/}{F}{bigger}}{\\html{3}}{\\str{)}},' +
                        '\\input{9},' +
                        '\\grp{\\html{3}}{\\btn{/}{F}{bigger}}{\\str{(}}{\\html{9}}{\\btn{/}{T}{bigger}}{\\html{3}}{\\str{)}},' +
                        '\\input{3},' +
						'\\grp{\\html{3}}{\\btn{/}{T}{bigger}}{\\html{3}},' +
                        '\\input{1},' +
						'\\grp{\\html{1}},' +
                    '}{Solve 3 <span class=bigger>\xB7</span> 3}{Solve 9 <span class=bigger>/</span> 3}{Solve 3 <span class=bigger>/</span> 3}'),
			template: 'first' },
			// problem 7
			{ problemStatement: '15 <span class=bigger>&minus;</span> ( ( 7 <span class=bigger>&minus;</span> 4 ) <span class=margin-not-bigger>&bull;</span> 2 )', ordopsStatement: '15 - ((7 - 4) * 2)', answer: '9',
			  wb: dataUtils.pre('\\ordopssimple{' +
						'\\grp{\\html{15}}{\\btn{-}{F}{bigger}}{\\str{(}}{\\str{(}}{\\html{7}}{\\btn{-}{T}{bigger}}{\\html{4}}{\\str{)}}{\\btn{*}{F}{large}}{\\html{2}}{\\str{)}},' +
                        '\\input{3},' +
                        '\\grp{\\html{15}}{\\btn{-}{F}{bigger}}{\\str{(}}{\\html{3}}{\\btn{*}{T}{large}}{\\html{2}}{\\str{)}},' +
                        '\\input{6},' +
						'\\grp{\\html{15}}{\\btn{-}{T}{bigger}}{\\html{6}},' +
                        '\\input{9},' +
						'\\grp{\\html{9}},' +
                    '}{Solve 7 - 4}{Solve 3 <span class=bigger>\xB7</span> 2}{Solve 15 - 6}'),
			  template: 'first' },
			// problem 8
			{ problemStatement: '15 <span class=bigger>&minus;</span> 8 <span class=margin-not-bigger>&bull;</span> 2 <span class=bigger>&divide;</span> 4', ordopsStatement: '15 - 8 * 2 / 4', answer: '11',
			  wb: dataUtils.pre('\\ordopssimple{' +
						'\\grp{\\html{15}}{\\btn{-}{F}{bigger}}{\\html{8}}{\\btn{*}{T}{large}}{\\html{2}}{\\btn{/}{F}{bigger}}{\\html{4}},' +
                        '\\input{16},' +
                        '\\grp{\\html{15}}{\\btn{-}{F}{bigger}}{\\html{16}}{\\btn{/}{T}{bigger}}{\\html{4}},' +
                        '\\input{4},' +
						'\\grp{\\html{15}}{\\btn{-}{T}{bigger}}{\\html{4}},' +
                        '\\input{11},' +
						'\\grp{\\html{11}},' +
                    '}{Solve 8 <span class=bigger>\xB7</span> 2}{Solve 16 <span class=bigger>/</span> 4}{Solve 15 - 4}'),
			  template: 'first' },
			// problem 9
			{ problemStatement: '( 28 <span class=bigger>+</span> 15 <span class=bigger>&divide;</span> 5 ) <span class=bigger>&minus;</span> 14', ordopsStatement: '(28 + 15 / 5) - 14', answer: '17', 
			  wb: dataUtils.pre('\\ordopssimple{' +
						'\\grp{\\str{(}}{\\html{28}}{\\btn{+}{F}{large}}{\\html{15}}{\\btn{/}{T}{bigger}}{\\html{5}}{\\str{)}}{\\btn{-}{F}{bigger}}{\\html{14}},' +
                        '\\input{3},' +
                        '\\grp{\\str{(}}{\\html{28}}{\\btn{+}{T}{large}}{\\html{3}}{\\str{)}}{\\btn{-}{F}{bigger}}{\\html{14}},' +
                        '\\input{31},' +
						'\\grp{\\html{31}}{\\btn{-}{T}{bigger}}{\\html{14}},' +
                        '\\input{17},' +
						'\\grp{\\html{17}},' +
                    '}{Solve 15 <span class=bigger>/</span> 5}{Solve 28 + 3}{Solve 31 - 14}'),
			  template: 'first' },
			// problem 10
			{ problemStatement: '27 <span class=bigger>&divide;</span> 9 <span class=bigger>+</span> 6 <span class=margin-not-bigger>&bull;</span> 8 <span class=bigger>&minus;</span> 35', ordopsStatement: '27 / 9 + 6 * 8 - 35)', answer: '16', wb: dataUtils.pre('\\ordopssimple{' +
						'\\grp{\\html{27}}{\\btn{/}{T}{bigger}}{\\html{9}}{\\btn{+}{F}{large}}{\\html{6}}{\\btn{*}{F}{large}}{\\html{8}}{\\btn{-}{F}{bigger}}{\\html{35}},' +
                        '\\input{3},' +
                        '\\grp{\\html{3}}{\\btn{+}{F}{large}}{\\html{6}}{\\btn{*}{T}{large}}{\\html{8}}{\\btn{-}{F}{bigger}}{\\html{35}},' +
                        '\\input{48},' +
						'\\grp{\\html{3}}{\\btn{+}{T}{large}}{\\html{48}}{\\btn{-}{F}{bigger}}{\\html{35}},' +
                        '\\input{51},' +
						'\\grp{\\html{51}}{\\btn{-}{T}{bigger}}{\\html{35}},' +
                        '\\input{16},' +
						'\\grp{\\html{16}},' +
                    '}{Solve 27 <span class=bigger>/</span> 9}{Solve 6 <span class=bigger>\xB7</span> 8}{Solve 3 + 48}{Solve 51 - 35}'),
			  template: 'first' },
        ];

	return dataUtils.build(desc, template, data);
}]);



