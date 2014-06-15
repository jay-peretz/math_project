/*global angular */

angular.module('mathSkills').service('data_n_1', ['dataUtils', function (dataUtils) {
    var desc = {
			title: 'N.1 Order of Operations With Negative Numbers',
    		path: 'n.1-order-of-operations-with-negative-numbers',
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
						+'{\\str{$problemStatement}}',
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
						+'{\\str{$problemStatement}}',
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
            { problemStatement: '6 - 8&nbsp; * &nbsp;2', ordopsStatement: '6 - 8 * 2', answer: '-10',
			wb: dataUtils.pre('\\ordopssimple{' +
						'\\grp{\\html{6}}{\\btn{-}{F}{bigger}}{\\html{8}}{\\btn{&bull;}{T}{bigger}}{\\html{2}},' +
                        '\\input{16},' +
                        '\\grp{\\html{6}}{\\btn{-}{T}{bigger}}{\\html{16}},' +
                        '\\input{-10},' +
						'\\grp{\\str{-10}},' +
                    '}{Solve 8 <span class=bigger>&bull;</span> 2}{Solve 6 <span class=bigger>-</span> 16}'),
			template: 'first' },
			// problem 2
			{ problemStatement: '14 - 4 / ( -2 )', ordopsStatement: '14 - 4 / ( -2 )', answer: '16', 
			wb: dataUtils.pre('\\ordopssimple{' +
						'\\grp{\\html{14}}{\\btn{-}{F}{bigger}}{\\html{4}}{\\btn{&divide;}{T}{bigger}}{\\html{(}}{\\str{-2}}{\\html{)}},' +
                        '\\input{-2},' +
                        '\\grp{\\html{14}}{\\btn{-}{T}{bigger}}{\\html{(}}{\\str{-2}}{\\html{)}},' +
                        '\\input{16},' +
						'\\grp{\\html{16}},' +
                    '}{Solve 4 <span class=bigger>&divide;</span> ( <span class=bigger>&minus;</span> 2 )}{Solve 14 <span class=bigger>-</span> (<span class=bigger>-</span>2)}'),
			template: 'first' },
			// problem 3
			{ problemStatement: '-4 - 6&nbsp; * &nbsp;-3', ordopsStatement: '-4 – 6 * -3', answer: '14',
			wb: dataUtils.pre('\\ordopssimple{' +
						'\\grp{\\str{-4}}{\\btn{-}{F}{bigger}}{\\str{6}}{\\btn{&bull;}{T}{bigger}}{\\str{-3}},' +
                        '\\input{-18},' +
                        '\\grp{\\str{-4}}{\\btn{-}{T}{bigger}}{\\html{(}}{\\str{-18}}{\\html{)}},' +
                        '\\input{14},' +
						'\\grp{\\html{14}},' +
                    '}{Solve 6 <span class=bigger>&bull;</span> <span class=bigger>-</span>3}{Solve <span class=bigger>-</span>4 <span class=bigger>-</span> (<span class=bigger>-</span>18)}'),
			template: 'first' },
			// problem 4
			{ problemStatement: '-11 - 18 / 6', ordopsStatement: '-11 - 18 / 6', answer: '-14',
			wb: dataUtils.pre('\\ordopssimple{' +
						'\\grp{\\str{-11}}{\\btn{-}{F}{bigger}}{\\str{18}}{\\btn{\xF7}{T}{bigger}}{\\html{6}},' +
                        '\\input{3},' +
                        '\\grp{\\str{-11}}{\\btn{-}{T}{bigger}}{\\str{3}},' +
                        '\\input{-14},' +
						'\\grp{\\str{-14}},' +
                    '}{Solve 18 <span class=bigger>&divide;</span> 6}{Solve <span class=bigger>-</span>11 - 3}'),
			template: 'first' },
			// problem 5
			{ problemStatement: '-10  /  5 - 3 &nbsp; * &nbsp; 7', ordopsStatement: '-10  /  5 - 3 * 7', answer: '-23',
			wb: dataUtils.pre('\\ordopssimple{' +
						'\\grp{\\str{-10}}{\\btn{&divide;}{T}{bigger}}{\\str{5}}{\\btn{-}{F}{bigger}}{\\str{3}}{\\btn{&bull;}{F}{bigger}}{\\str{7}},' +
                        '\\input{-2},' +
                        '\\grp{\\str{-2}}{\\btn{-}{F}{bigger}}{\\str{3}}{\\btn{&bull;}{T}{bigger}}{\\str{7}},' +
                        '\\input{21},' +
						'\\grp{\\str{-2}}{\\btn{-}{T}{bigger}}{\\str{21}},' +
                        '\\input{-23},' +
						'\\grp{\\str{-23}},' +
                    '}{Solve <span class=bigger>-</span>10 <span class=bigger>&divide;</span> 5}{Solve 3 <span class=bigger>&bull;</span> 7}{Solve <span class=bigger>-</span>2 <span class=bigger>-</span> 21}'),
			template: 'first' },
			// problem 6
			{ problemStatement: '-6 &nbsp; * &nbsp; 7 + 14 / -2', ordopsStatement: '-6  *  7 + 14 / -2', answer: '-49',
			wb: dataUtils.pre('\\ordopssimple{' +
						'\\grp{\\str{-6}}{\\btn{&bull;}{T}{bigger}}{\\str{7}}{\\btn{+}{F}{bigger}}{\\str{14}}{\\btn{&divide;}{F}{bigger}}{\\str{-2}},' +
                        '\\input{-42},' +
                        '\\grp{\\str{-42}}{\\btn{+}{F}{bigger}}{\\str{14}}{\\btn{&divide;}{T}{bigger}}{\\str{-2}},' +
                        '\\input{-7},' +
						'\\grp{\\str{-42}}{\\btn{+}{T}{bigger}}{\\html{(}}{\\str{-7}}{\\html{)}},' +
                        '\\input{-49},' +
						'\\grp{\\str{-49}},' +
                    '}{Solve <span class=bigger>-</span>6 &bull; 7}{Solve 14 <span class=bigger>&divide;</span> <span class=bigger>-</span>2}{Solve <span class=bigger>-</span>42 <span class=bigger>+</span> ( <span class=bigger>-</span>7 )}'),
			template: 'first' },
			// problem 7
			{ problemStatement: '-6 - 2 (-3 -1)', ordopsStatement: '-6 - 2 (-3 -1)', answer: '2',
			wb: dataUtils.pre('\\ordopssimple{' +
						'\\grp{\\str{-6}}{\\btn{-}{F}{bigger}}{\\str{2}}{\\str{(}}{\\str{-3}}{\\btn{-}{T}{bigger}}{\\str{1}}{\\str{)}},' +
                        '\\input{-4},' +
                       '\\grp{\\str{-6}}{\\btn{-}{F}{bigger}}{\\str{2}}{\\btn{&bull;}{T}{bigger}}{\\str{(}}{\\str{-4}}{\\str{)}},' +
                        '\\input{-8},' +
						'\\grp{\\str{-6}}{\\btn{-}{T}{bigger}}{\\str{(}}{\\str{-8}}{\\str{)}},' +
                        '\\input{2},' +
						'\\grp{\\str{2}},' +
                    '}{Solve <span class=bigger>-</span>3 <span class=bigger>-</span> 1}{Solve 2 &bull; <span class=bigger>-</span>4}{Solve <span class=bigger>-</span>6 <span class=bigger>-</span> (<span class=bigger>-</span>8)}'),
			template: 'first' },
			// problem 8
			{ problemStatement: '7 - 5 (2 - 7)', ordopsStatement: '7 - 5 (2 - 7)', answer: '32',
			wb: dataUtils.pre('\\ordopssimple{' +
						'\\grp{\\str{7}}{\\btn{-}{F}{bigger}}{\\str{5}}{\\str{(}}{\\str{2}}{\\btn{-}{T}{bigger}}{\\str{7}}{\\str{)}},' +
                        '\\input{-5},' +
                       '\\grp{\\str{7}}{\\btn{-}{F}{bigger}}{\\str{5}}{\\btn{&bull;}{T}{bigger}}{\\str{(}}{\\str{-5}}{\\str{)}},' +
                        '\\input{-25},' +
						'\\grp{\\str{7}}{\\btn{-}{T}{bigger}}{\\str{(}}{\\str{-25}}{\\str{)}},' +
                        '\\input{32},' +
						'\\grp{\\str{32}},' +
                    '}{Solve 2 <span class=bigger>-</span> 7}{Solve 5 &bull; <span class=bigger>-</span>5}{Solve 7 <span class=bigger>-</span> ( <span class=bigger>-</span>25 )}'),
			template: 'first' },
			// problem 9
			{ problemStatement: '-4 (-10 - 4 &nbsp; * &nbsp; 2)', ordopsStatement: '-4 (-10 - 4 * 2)', answer: '72',
			wb: dataUtils.pre('\\ordopssimple{' +
						'\\grp{\\str{-4}}{\\str{(}}{\\str{-10}}{\\btn{-}{F}{bigger}}{\\str{4}}{\\btn{&bull;}{T}{bigger}}{\\str{2}}{\\str{)}},' +
                        '\\input{8},' +
                       '\\grp{\\str{-4}}{\\str{(}}{\\str{-10}}{\\btn{-}{T}{bigger}}{\\str{8}}{\\str{)}},' +
                        '\\input{-18},' +
						'\\grp{\\str{-4}}{\\btn{&bull;}{T}{bigger}}{\\str{(}}{\\str{-18}}{\\str{)}},' +
                        '\\input{72},' +
						'\\grp{\\str{72}},' +
                    '}{Solve 4 &bull; 2}{Solve <span class=bigger>-</span>10 <span class=bigger>-</span>8}{Solve <span class=bigger>-</span>4 &bull; <span class=bigger>-</span>18}'),
			template: 'first' },
			// problem 10
			{ problemStatement: '-3 (-3 / -3 - 1)', ordopsStatement: '-3 (-3 / -3 - 1)', answer: '0', 
			  wb: dataUtils.pre('\\ordopssimple{' +
						'\\grp{\\str{-3}}{\\str{(}}{\\str{-3}}{\\btn{&divide;}{T}{bigger}}{\\str{-3}}{\\btn{-}{F}{bigger}}{\\str{1}}{\\str{)}},' +
                        '\\input{1},' +
                       '\\grp{\\str{-3}}{\\str{(}}{\\str{1}}{\\btn{-}{T}{bigger}}{\\str{1}}{\\str{)}},' +
                        '\\input{0},' +
						'\\grp{\\str{-3}}{\\btn{&bull;}{T}{bigger}}{\\str{(}}{\\str{0}}{\\str{)}},' +
                        '\\input{0},' +
						'\\grp{\\str{0}},' +
                    '}{Solve <span class=bigger>-</span>3 <span class=bigger>&divide;</span> <span class=bigger>-</span>3}{Solve 1 <span class=bigger>-</span> 1}{Solve <span class=bigger>-</span>3 &bull; 0}'),
			template: 'first' },
			// problem 11
			{ problemStatement: '8 &nbsp; * &nbsp; -7 - (-3) - 4', ordopsStatement: '8 * -7 - (-3) - 4)', answer: '-57', 
			  wb: dataUtils.pre('\\ordopssimple{' +
						'\\grp{\\str{8}}{\\btn{&bull;}{T}{bigger}}{\\str{-7}}{\\btn{-}{F}{bigger}}{\\str{(}}{\\str{-3}}{\\str{)}}{\\btn{-}{F}{bigger}}{\\str{4}},' +
                        '\\input{-56},' +
                       '\\grp{\\str{-56}}{\\btn{-}{T}{bigger}}{\\str{(}}{\\str{-3}}{\\str{)}}{\\btn{-}{F}{bigger}}{\\str{4}},' +
                        '\\input{-53},' +
						'\\grp{\\str{-53}}{\\btn{-}{T}{bigger}}{\\str{4}},' +
                        '\\input{-57},' +
						'\\grp{\\str{-57}},' +
                    '}{Solve 8<span class=bigger>&bull;</span><span class=bigger>-</span>7}{Solve <span class=bigger>-</span>56 <span class=bigger>-</span> ( <span class=bigger>-</span>3 )}{Solve <span class=bigger>-</span>53 <span class=bigger>-</span>4}'),
			template: 'first' },
			// problem 12
			{ problemStatement: '-15 / -3 - ( -6) + (-2)', ordopsStatement: '-15 / -3 - ( -6) + (-2)', answer: '9', 
			  wb: dataUtils.pre('\\ordopssimple{' +
						'\\grp{\\str{-15}}{\\btn{&divide;}{T}{bigger}}{\\str{-3}}{\\btn{-}{F}{bigger}}{\\str{(}}{\\str{-6}}{\\str{)}}{\\btn{+}{F}{bigger}}{\\str{(}}{\\str{-2}}{\\str{)}},' +
                        '\\input{5},' +
                       '\\grp{\\str{5}}{\\btn{-}{T}{bigger}}{\\str{(}}{\\str{-6}}{\\str{)}}{\\btn{+}{F}{bigger}}{\\str{(}}{\\str{-2}}{\\str{)}},' +
                        '\\input{11},' +
						'\\grp{\\str{11}}{\\btn{+}{T}{bigger}}{\\str{(}}{\\str{-2}}{\\str{)}},' +
                        '\\input{9},' +
						'\\grp{\\str{9}},' +
                    '}{Solve <span class=bigger>-</span>15<span class=bigger>&divide;</span><span class=bigger>-</span>3}{Solve 5 <span class=bigger>-</span> ( <span class=bigger>-</span>6 )}{Solve 11 <span class=bigger>+</span>( <span class=bigger>-</span>2 )}'),
			template: 'first' },
        ];

	return dataUtils.build(desc, template, data);
}]);




