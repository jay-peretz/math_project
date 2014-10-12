/*global angular */

angular.module('mathSkills').service('data_o_1', ['dataUtils', function (dataUtils) {
    var desc = {
			title: 'O.1 Evaluating Exponential Expressions',
    		path: 'O.1-evaluating-exponential-expressions',
            children: []
        },
	        template = {
            first: {
                title: 'Evaluating Exponential Expressions',
                children: [{
                    title: 'Main Answer',
                    children: [{
						problem: '\\rowgrp'
						+'{\\html{Evaluate:}}'
						+'{\\html{&nbsp;}}'
						+'{\\grp'
							+'$problemStatement'
						+'}',
						answer: '\\grp{\\input{$answer}}',
						controls: {
							"checkAnswer": true,
							"help": '\\rowgrp'
							+'{\\html{$firstHelp}}'
							+'{\\html{&nbsp;}}'
							+'$secondHelp'
							+'{\\html{&nbsp;}}'
							+'{css{\\str{Answer: &nbsp; $answer}}{help-answer-text}}'
						}
					}]
				}]
			},
			evaluate: {
                title: 'Evaluating Exponential Expressions',
                children: [{
                    title: 'Main Answer',
                    children: [{
						problem: '\\rowgrp'
									+'$problemStatement',
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
									+'$problemStatement',
						answer: '$wb',
						controls: {
							"checkAnswer": true,
							"help": true
						}
					}]
				}]
			},
			wideEvaluate: {
                title: 'Evaluating Exponential Expressions',
                children: [{
                    title: 'Main Answer',
                    children: [{
						problem: '\\pan{6}{6}'
									+'{\\rowgrp'
										+'$problemStatement'
									+'}',
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
						problem: '\\pan{12}{11}'
									+'{\\rowgrp'
										+'$problemStatement'
									+'}',
						answer: '$wb',
						controls: {
							"checkAnswer": true,
							"help": true
						}
					}]
				}]
			},
			evaluateFractionBase: {
                title: 'Evaluating Exponential Expressions',
                children: [{
                    title: 'Main Answer',
                    children: [{
						problem: '\\pan{6}{6}'
									+'{\\rowgrp'
										+'{$prob}'
									+'}',
                        answer: '$ans',
                        controls: {
                            "checkAnswer": true,
                            "help": false,
                            "workbook": true
                        }
                    }]
                }, {
                    title: 'Workbook',
                    children: [{
						problem: '\\pan{12}{11}'
									+'{\\rowgrp'
										+'{$prob}'
									+'}',
                        answer: '$wb',
                        controls: {
                            "checkAnswer": true,
                            "help": true,
							"fixBottomRight": true
                        }
                    }]
                }]
            }
			,
			firstFractions: {
                title: 'Evaluating Exponential Expressions',
                children: [{
                    title: 'Main Answer',
                    children: [{
						problem: '\\rowgrp'
						+'{\\html{Evaluate:}}'
						+'{\\html{&nbsp;}}'
						+'{\\grp'
							+'$problemStatement'
						+'}',
						answer: '\\grp{$answer}',
						controls: {
							"checkAnswer": true,
							"help": '\\rowgrp'
							+'{\\html{$firstHelp}}'
							+'{\\html{&nbsp;}}'
							+'$secondHelp'
							+'{\\html{&nbsp;}}'
							+'{css'
								+'{\\grp'
									+'{\\str{Answer: &nbsp;}}'
									+'{$helpAnswer}'
								+'}'	
								+'{help-answer-text}'
							+'}'
						}
					}]
				}]
			},
        },
        data = [
            { // problem 1
			problemStatement: dataUtils.pre('{\\exp{\\str{(-5 )}}{\\str{2}}}'),
			firstHelp: 'The exponent is raised above the parenthesis. It therefore affects \\"everything\\" inside the parenthesis (the sign and the number).', 
			secondHelp: dataUtils.pre(
							'{\\grp'
								+'{\\exp{\\str{(-5 )}}{\\str{2}}}'
								+'{\\str{ means &nbsp; -5 &nbsp; *&nbsp; -5}}'
							+'}'
						),
			answer: '25', 
			template: 'first' 
			}
			,
            { // problem 2
			problemStatement: dataUtils.pre('{\\exp{\\str{(-7 )}}{\\str{2}}}'),
			firstHelp: 'The exponent is raised above the parenthesis. It therefore affects \\"everything\\" inside the parenthesis (the sign and the number).', 
			secondHelp: dataUtils.pre(
							'{\\grp'
								+'{\\exp{\\str{(-7 )}}{\\str{2}}}'
								+'{\\str{ means &nbsp; -7 &nbsp; *&nbsp; -7}}'
							+'}'
						),
			answer: '49', 
			template: 'first' 
			}
			,
            { // problem 3
			problemStatement: dataUtils.pre('{\\exp{\\str{-4}}{\\str{2}}}'),
			absValue: '4',
			firstHelp: 'The exponent is <u>not</u> raised above the parenthesis. It affects only the base of $$absValue, and <u>not</u> the minus sign.', 
			secondHelp: dataUtils.pre(
							'{\\grp'
								+'{\\exp{\\str{-4}}{\\str{2}}}'
								+'{\\str{ means &nbsp; - (&nbsp; 4 &nbsp;*&nbsp; 4 )}}'
							+'}'
						),
			answer: '-16', 
			template: 'first' 
			}
			,
            { // problem 4
			problemStatement: dataUtils.pre('{\\exp{\\str{-8}}{\\str{2}}}'),
			absValue: '8',
			firstHelp: 'The exponent is <u>not</u> raised above the parenthesis. It affects only the base of $$absValue, and <u>not</u> the minus sign.', 
			secondHelp: dataUtils.pre(
							'{\\grp'
								+'{\\exp{\\str{-8}}{\\str{2}}}'
								+'{\\str{ means &nbsp; - (&nbsp; 8 &nbsp;*&nbsp; 8 )}}'
							+'}'
						),
			answer: '-64', 
			template: 'first' 
			}
			,
            { // problem 5
			problemStatement: dataUtils.pre('{\\exp{\\str{(-2 )}}{\\str{3}}}'),
			firstHelp: 'The exponent is raised above the parenthesis. It therefore affects \\"everything\\" inside the parenthesis (the sign and the number).', 
			secondHelp: dataUtils.pre(
							'{\\grp'
								+'{\\exp{\\str{(-2 )}}{\\str{3}}}'
								+'{\\str{ means &nbsp; -2 &nbsp; *&nbsp; -2 &nbsp; *&nbsp; -2}}'
							+'}'
						),
			answer: '-8', 
			template: 'first' }
			,
            { // problem 6
			problemStatement: dataUtils.pre('{\\exp{\\str{(-1 )}}{\\str{3}}}'),
			firstHelp: 'The exponent is raised above the parenthesis. It therefore affects \\"everything\\" inside the parenthesis (the sign and the number).', 
			secondHelp: dataUtils.pre(
							'{\\grp'
								+'{\\exp{\\str{(-1 )}}{\\str{3}}}'
								+'{\\str{ means &nbsp; -1 &nbsp; *&nbsp; -1 &nbsp; *&nbsp; -1}}'
							+'}'
						),
			answer: '-1', 
			template: 'first' }
			,
            { // problem 7
			problemStatement: dataUtils.pre('{\\exp{\\str{-5}}{\\str{3}}}'),
			absValue: '5',
			firstHelp: 'The exponent is <u>not</u> raised above the parenthesis. It affects only the base of $$absValue, and <u>not</u> the minus sign.', 
			secondHelp: dataUtils.pre(
							'{\\grp'
								+'{\\exp{\\str{-5}}{\\str{3}}}'
								+'{\\str{ means &nbsp; - (&nbsp; 5 &nbsp;*&nbsp; 5 &nbsp;*&nbsp; 5 )}}'
							+'}'
						),
			answer: '-125', 
			template: 'first' 
			}
			,
            { // problem 8
			problemStatement: dataUtils.pre('{\\exp{\\str{-4}}{\\str{3}}}'),
			absValue: '4',
			firstHelp: 'The exponent is <u>not</u> raised above the parenthesis. It affects only the base of $$absValue, and <u>not</u> the minus sign.', 
			secondHelp: dataUtils.pre(
							'{\\grp'
								+'{\\exp{\\str{-4}}{\\str{3}}}'
								+'{\\str{ means &nbsp; - (&nbsp; 4 &nbsp;*&nbsp; 4 &nbsp;*&nbsp; 4 )}}'
							+'}'
						),
			answer: '-64', 
			template: 'first' 
			}
			,
            { // problem 9
			problemStatement: dataUtils.pre('{\\exp{\\str{-(-3 )}}{\\str{2}}}'),
			firstHelp: 'The exponent is raised above the parenthesis. It therefore affects \\"everything\\" inside the parenthesis (the sign and the number), but <u>only</u> what is in the parenthesis.', 
			secondHelp: dataUtils.pre(
							'{\\grp'
								+'{\\exp{\\str{-(-3 )}}{\\str{2}}}'
								+'{\\str{ is the same as &nbsp; -&nbsp; ( -3 &nbsp; *&nbsp; -3 &nbsp;)}}'
							+'}'
							+'{\\grp'
								+'{\\html{<span class=hiddenSpace>-(-3)<sup>2</sup></span>}}'
								+'{\\str{This is the same as &nbsp;-( 9 )}}'
							+'}'
						),
			answer: '-9', 
			template: 'first' }
			,
            { // problem 10
			problemStatement: dataUtils.pre('{\\exp{\\str{-(-2 )}}{\\str{2}}}'),
			firstHelp: 'The exponent is raised above the parenthesis. It therefore affects \\"everything\\" inside the parenthesis (the sign and the number), but <u>only</u> what is in the parenthesis.', 
			secondHelp: dataUtils.pre(
							'{\\grp'
								+'{\\exp{\\str{-(-2 )}}{\\str{2}}}'
								+'{\\str{ is the same as &nbsp; -&nbsp; ( -2 &nbsp; *&nbsp; -2 &nbsp;)}}'
							+'}'
							+'{\\grp'
								+'{\\html{<span class=hiddenSpace>-(-2)<sup>2</sup></span>}}'
								+'{\\str{This is the same as &nbsp;-( 4 )}}'
							+'}'
						),
			answer: '-4', 
			template: 'first' }
			,
             { // problem 11
			problemStatement: dataUtils.pre(
											'{\\grp'
												+'{\\exp{\\str{8}}{\\str{4}}}'
												+'{\\str{ - }}'
												+'{\\exp{\\str{6}}{\\str{5}}}'
											+'}'
								),
			answer: '-3680',
			wb: dataUtils.pre('\\ordopssimple{' +
						'\\grp{\\btn{8 <sup>4</sup>}{T}{large}}{\\btn{-}{F}{bigger}}{\\btn{6 <sup>5</sup>}{F}{large}},' +
                        '\\input{4096},' +
                        '\\grp{\\html{<span class=large>4096</span>}}{\\btn{-}{F}{bigger}}{\\btn{6 <sup>5</sup>}{T}{large}},' +
                        '\\input{7776},' +
						'\\grp{\\html{<span class=large>4096</span>}}{\\btn{-}{T}{bigger}}{\\html{<span class=large>7776</span>}},' +
						'\\input{-3680},' +
						'\\sign{-3680}' +
                    '}{terms}{evaluate&nbsp; 8<sup>4</sup>}{evaluate&nbsp; 6<sup>5</sup>}{4096 - 7776}'),
			template: 'evaluate' 
			}
			,
            { // problem 12
			problemStatement: dataUtils.pre(
											'{\\grp'
												+'{\\exp{\\str{2}}{\\str{9}}}'
												+'{\\str{ - }}'
												+'{\\exp{\\str{12}}{\\str{3}}}'
											+'}'
								),
			answer: '-1216',
			wb: dataUtils.pre('\\ordopssimple{' +
						'\\grp{\\btn{2 <sup>9</sup>}{T}{large}}{\\btn{-}{F}{bigger}}{\\btn{12 <sup>3</sup>}{F}{large}},' +
                        '\\input{512},' +
                        '\\grp{\\html{<span class=large>512</span>}}{\\btn{-}{F}{bigger}}{\\btn{12 <sup>3</sup>}{T}{large}},' +
                        '\\input{1728},' +
						'\\grp{\\html{<span class=large>512</span>}}{\\btn{-}{T}{bigger}}{\\html{<span class=large>1728</span>}},' +
						'\\input{-1216},' +
						'\\sign{-1216}' +
                    '}{terms}{evaluate&nbsp; 2<sup>9</sup>}{evaluate&nbsp; 12<sup>3</sup>}{512 - 1728}'),
			template: 'evaluate' 
			}
			,
			{ // problem 13
			problemStatement: dataUtils.pre(
											'{\\grp'
												+'{\\str{ 5 - }}'
												+'{\\exp{\\str{3}}{\\str{2}}}'
												+'{\\str{ * }}'
												+'{\\str{2 }}'
											+'}'
								),
			answer: '-13',
			wb: dataUtils.pre('\\ordopssimple{' +
						'\\grp{\\html{<span class=large>5</span>}}{\\btn{-}{F}{bigger}}{\\btn{3 <sup>2</sup>}{T}{large}}{\\btn{*}{F}{large}}{\\html{<span class=large>2</span>}},' +
                        '\\input{9},' +
                        '\\grp{\\html{<span class=large>5</span>}}{\\btn{-}{F}{bigger}}{\\html{<span class=large>9</span>}}{\\btn{*}{T}{large}}{\\html{<span class=large>2</span>}},' +
                        '\\input{18},' +
						'\\grp{\\html{<span class=large>5</span>}}{\\btn{-}{T}{bigger}}{\\html{<span class=large>18</span>}},' +
						'\\input{-13},' +
						'\\sign{-13}' +
                    '}{terms}{evaluate&nbsp; 3<sup>2</sup>}{9 * 2}{5 - 18}'),
			template: 'evaluate' 
			}
			,
			{ // problem 14
			problemStatement: dataUtils.pre(
											'{\\grp'
												+'{\\str{ 20 - }}'
												+'{\\exp{\\str{6}}{\\str{2}}}'
												+'{\\str{/ }}'
												+'{\\str{( -2 )}}'
											+'}'
								),
			answer: '38',
			wb: dataUtils.pre('\\ordopssimple{' +
						'\\grp{\\html{<span class=large>20</span>}}{\\btn{-}{F}{bigger}}{\\btn{6 <sup>2</sup>}{T}{large}}{\\btn{/}{F}{bigger}}{\\str{(}}{\\html{<span class=large>-2</span>}}{\\str{)}},' +
                        '\\input{36},' +
                        '\\grp{\\html{<span class=large>20</span>}}{\\btn{-}{F}{bigger}}{\\html{<span class=large>36</span>}}{\\btn{/}{T}{bigger}}{\\str{(}}{\\html{<span class=large>-2</span>}}{\\str{)}},' +
                        '\\input{-18},' +
						'\\grp{\\html{<span class=large>20</span>}}{\\btn{-}{T}{bigger}}{\\html{( <span class=large>-18</span> )}},' +
						'\\input{38},' +
						'\\sign{38}' +
                    '}{terms}{evaluate&nbsp; 6<sup>2</sup>}{36 / (-2)}{20 - (-18)}'),
			template: 'evaluate' 
			}
			,
			{ // problem 15
			problemStatement: dataUtils.pre(
											'{\\grp'
												+'{\\exp{\\str{-2}}{\\str{3}}}'
												+'{\\str{ - &nbsp; 4 &nbsp; * &nbsp; -3}}'
											+'}'
								),
			answer: '4',
			wb: dataUtils.pre('\\ordopssimple{' +
						'\\grp{\\btn{- 2 <sup>3</sup>}{T}{large}}{\\btn{-}{F}{bigger}}{\\html{<span class=large>4</span>}}{\\btn{*}{F}{large}}{\\html{<span class=bigger>-</span><span class=large>3</span>}},' +
                        '\\input{-8},' +
                        '\\grp{\\html{<span class=bigger>-</span><span class=large>8</span>}}{\\btn{-}{F}{bigger}}{\\html{<span class=large>4</span>}}{\\btn{*}{T}{large}}{\\html{<span class=bigger>-</span><span class=large>3</span>}},' +
                        '\\input{-12},' +
						'\\grp{\\html{<span class=bigger>-</span><span class=large>8</span>}}{\\btn{-}{T}{bigger}}{\\str{(}}{\\html{<span class=bigger>-</span><span class=large>12</span>}}{\\str{)}},' +
						'\\input{4},' +
						'\\sign{4}' +
                    '}{terms}{evaluate&nbsp; -2<sup>3</sup>}{4 * -3}{-8 - (-12)}'),
			template: 'evaluate' 
			}
			,
			{ // problem 16
			problemStatement: dataUtils.pre(
											'{\\grp'
												+'{\\exp{\\str{-11}}{\\str{2}}}'
												+'{\\str{ - &nbsp; 18 &nbsp; / &nbsp; 6}}'
											+'}'
								),
			answer: '-124',
			wb: dataUtils.pre('\\ordopssimple{' +
						'\\grp{\\btn{- 11 <sup>2</sup>}{T}{large}}{\\btn{-}{F}{bigger}}{\\html{<span class=large>18</span>}}{\\btn{/}{F}{bigger}}{\\html{<span class=large>6</span>}},' +
                        '\\input{-121},' +
                        '\\grp{\\html{<span class=bigger>-</span><span class=large>121</span>}}{\\btn{-}{F}{bigger}}{\\html{<span class=large>18</span>}}{\\btn{/}{T}{bigger}}{\\html{<span class=large>6</span>}},' +
                        '\\input{3},' +
						'\\grp{\\html{<span class=bigger>-</span><span class=large>121</span>}}{\\btn{-}{T}{bigger}}{\\html{<span class=large>3</span>}},' +
						'\\input{-124},' +
						'\\sign{-124}' +
                    '}{terms}{evaluate&nbsp; -11<sup>2</sup>}{18 / 6}{-121 - 3}'),
			template: 'evaluate' 
			}
			,
			{ // problem 17
			problemStatement: dataUtils.pre(
											'{\\grp'
												+'{\\exp{\\str{(-10 )}}{\\str{2}}}'
												+'{\\str{/&nbsp; 4&nbsp; - &nbsp; 5 &nbsp; * &nbsp; 7}}'
											+'}'
								),
			answer: '-10',
			wb: dataUtils.pre('\\ordopssimple{' +
						'\\grp{\\btn{( - 10 ) <sup>2</sup>}{T}{large}}{\\btn{/}{F}{bigger}}{\\html{<span class=large>4</span>}}{\\btn{-}{F}{bigger}}{\\html{<span class=large>5</span>}}{\\btn{*}{F}{large}}{\\html{<span class=large>7</span>}},' +
                        '\\input{-100},' +
                        '\\grp{\\html{<span class=large>100</span>}}{\\btn{/}{T}{bigger}}{\\html{<span class=large>4</span>}}{\\btn{-}{F}{bigger}}{\\html{<span class=large>5</span>}}{\\btn{*}{F}{large}}{\\html{<span class=large>7</span>}},' +
                        '\\input{25},' +
						'\\grp{\\html{<span class=large>25</span>}}{\\btn{-}{F}{bigger}}{\\html{<span class=large>5</span>}}{\\btn{*}{T}{large}}{\\html{<span class=large>7</span>}},' +
						'\\input{35},' +
						'\\grp{\\html{<span class=large>25</span>}}{\\btn{-}{T}{bigger}}{\\html{<span class=large>35</span>}},' +
						'\\input{-10},' +
						'\\sign{-10}' +
                    '}{terms}{evaluate&nbsp; -10<sup>2</sup>}{100 / 4}{5 * 7}{25 - 35}'),
			template: 'evaluate' 
			}
			,
			{ // problem 18
			problemStatement: dataUtils.pre(
											'{\\grp'
												+'{\\exp{\\str{( -6 &nbsp;)}}{\\str{2}}}'
												+'{\\str{* &nbsp; 2 &nbsp; &#43; &nbsp; 27 &nbsp; / &nbsp;-3}}'
											+'}'
								),
			answer: '63',
			wb: dataUtils.pre('\\ordopssimple{' +
						'\\grp{\\btn{( - 6 ) <sup>2</sup>}{T}{large}}{\\btn{*}{F}{large}}{\\html{<span class=large>2</span>}}{\\btn{+}{F}{large}}{\\html{<span class=large>27</span>}}{\\btn{/}{F}{bigger}}{\\html{<span class=bigger>-</span><span class=large>3</span>}},' +
                        '\\input{36},' +
                        '\\grp{\\html{<span class=large>36</span>}}{\\btn{*}{T}{large}}{\\html{<span class=large>2</span>}}{\\btn{+}{F}{large}}{\\html{<span class=large>27</span>}}{\\btn{/}{F}{bigger}}{\\html{<span class=bigger>-</span><span class=large>3</span>}},' +
                        '\\input{72},' +
						'\\grp{\\html{<span class=large>72</span>}}{\\btn{+}{F}{large}}{\\html{<span class=large>27</span>}}{\\btn{/}{T}{bigger}}{\\html{<span class=bigger>-</span><span class=large>3</span>}},' +
						'\\input{-9},' +
						'\\grp{\\html{<span class=large>72</span>}}{\\btn{+}{T}{large}}{\\html{<span class=hugeAndThin>(</span> <span class=bigger>-</span><span class=large>9</span> <span class=hugeAndThin>)</span>}},' +
						'\\input{63},' +
						'\\sign{63}' +
                    '}{terms}{evaluate&nbsp; ( -6 ) <sup>2</sup>}{100 * 4}{5 * 7}{25 - 35}'),
			template: 'evaluate' 
			}
			,
            { // problem 19
			problemStatement: dataUtils.pre(
											'{\\grp'
												+'{\\exp{\\str{-(-5 )}}{\\str{2}}}'
												+'{\\str{-}}'
												+'{\\exp{\\str{2}}{\\str{3}}}'
											+'}'
								),
			answer: '-33',
			wb: dataUtils.pre('\\ordopssimple{' +
						'\\grp{\\str{-}}{\\btn{( - 5 ) <sup>2</sup>}{T}{large}}{\\btn{-}{F}{bigger}}{\\btn{2 <sup>3</sup>}{F}{large}},' +
                        '\\input{25},' +
                        '\\grp{\\str{-}}{\\html{<span class=large>25</span>}}{\\btn{-}{F}{bigger}}{\\btn{2 <sup>3</sup>}{T}{large}},' +
                        '\\input{8},' +
						'\\grp{\\html{<span class=bigger>-</span> <span class=large>25</span>}}{\\btn{-}{T}{bigger}}{\\html{<span class=large>8</span>}},' +
						'\\input{-33},' +
						'\\sign{-33}' +
                    '}{terms}{evaluate&nbsp; ( -5 ) <sup>2</sup>}{evaluate&nbsp; 2<sup>3</sup>}{-25 - 8}'),
			template: 'evaluate' 
			}
			,
            { // problem 20
			problemStatement: dataUtils.pre(
											'{\\grp'
												+'{\\exp{\\str{-(-7 )}}{\\str{2}}}'
												+'{\\str{-}}'
												+'{\\exp{\\str{1}}{\\str{3}}}'
											+'}'
								),
			answer: '-50',
			wb: dataUtils.pre('\\ordopssimple{' +
						'\\grp{\\str{-}}{\\btn{( - 7 ) <sup>2</sup>}{T}{large}}{\\btn{-}{F}{bigger}}{\\btn{1 <sup>3</sup>}{F}{large}},' +
                        '\\input{49},' +
                        '\\grp{\\str{-}}{\\html{<span class=large>49</span>}}{\\btn{-}{F}{bigger}}{\\btn{1 <sup>3</sup>}{T}{large}},' +
                        '\\input{1},' +
						'\\grp{\\str{-}}{\\html{<span class=large>49</span>}}{\\btn{-}{T}{bigger}}{\\html{<span class=large>1</span>}},' +
						'\\input{-50},' +
						'\\sign{-50}' +
                    '}{terms}{evaluate&nbsp; ( -7 ) <sup>2</sup>}{evaluate&nbsp; 1<sup>3</sup>}{-49 - 1}'),
			template: 'evaluate' 
			}
			,
            { // problem 21
			problemStatement: dataUtils.pre(
											'{\\grp'
												+'{\\exp{\\str{(-2 )}}{\\str{3}}}'
												+'{\\str{( -8 &nbsp;-&nbsp; 1 &nbsp; * &nbsp; 2 )}}'
											+'}'
								),
			answer: '80',
			wb: dataUtils.pre('\\ordopssimple{' +
						'\\grp{\\btn{( - 2 ) <sup>3</sup>}{F}{large}}{\\str{(}}{\\html{<span class=bigger>-</span><span class=large>8</span>}}{\\btn{-}{F}{bigger}}{\\html{<span class=large>1</span>}}{\\btn{*}{T}{large}}{\\html{<span class=large>2</span>}}{\\str{)}},' +
                        '\\input{2},' +
                        '\\grp{\\btn{( - 2 ) <sup>3</sup>}{F}{large}}{\\str{(}}{\\html{<span class=bigger>-</span><span class=large>8</span>}}{\\btn{-}{T}{bigger}}{\\html{<span class=large>2</span>}}{\\str{)}},' +
                        '\\input{-10},' +
						'\\grp{\\btn{( - 2 ) <sup>3</sup>}{T}{large}}{\\str{(}}{\\html{<span class=bigger>-</span><span class=large>10</span>}}{\\str{)}},' +
						'\\input{-8},' +
						'\\grp{\\btn{- 8&nbsp;( -10 )}{T}{bigger}},' +
						'\\input{80},' +
						'\\sign{80}' +
                    '}{terms}{1 * 2}{-8 - 2}{evaluate&nbsp; ( -2 ) <sup>3</sup>}{-8 ( -10 )}'),
			template: 'evaluate' 
			}
			,
            { // problem 22
			problemStatement: dataUtils.pre(
											'{\\grp'
												+'{\\exp{\\str{(-3 )}}{\\str{3}}}'
												+'{\\str{( -6 &nbsp;/&nbsp; -1 &nbsp; - &nbsp; 4 )}}'
											+'}'
								),
			answer: '-54',
			wb: dataUtils.pre('\\ordopssimple{' +
						'\\grp{\\btn{( - 3 ) <sup>3</sup>}{F}{large}}{\\str{(}}{\\html{<span class=bigger>-</span><span class=large>6</span>}}{\\btn{/}{T}{large}}{\\html{<span class=bigger>-</span><span class=large>1</span>}}{\\btn{-}{F}{bigger}}{\\html{<span class=large>4</span>}}{\\str{)}},' +
                        '\\input{6},' +
                        '\\grp{\\btn{( - 3 ) <sup>3</sup>}{F}{large}}{\\str{(}}{\\html{<span class=large>6</span>}}{\\btn{-}{T}{bigger}}{\\html{<span class=large>4</span>}}{\\str{)}},' +
                        '\\input{2},' +
						'\\grp{\\btn{( - 3 ) <sup>3</sup>}{T}{large}}{\\str{(}}{\\html{<span class=large>2</span>}}{\\str{)}},' +
						'\\input{-27},' +
						'\\grp{\\btn{-27&nbsp;( 2 )}{T}{large}},' +
						'\\input{-54},' +
						'\\str{-54}' +
                    '}{terms}{-6 / -1}{6 - 4}{evaluate&nbsp; ( -3 ) <sup>3</sup>}{-27 ( 2 )}'),
			template: 'evaluate' 
			}
			,
			{ // problem 23
			problemStatement: dataUtils.pre(
											'{\\grp'
												+'{\\str{2 &nbsp;&nbsp; * &nbsp;}}'
												+'{\\exp{\\str{( -7 &nbsp;)}}{\\str{2}}}'
												+'{\\str{ - &nbsp;}}'
												+'{\\exp{\\str{( -3 &nbsp;)}}{\\str{2}}}'
												+'{\\str{ &nbsp; &#43; &nbsp;}}'
												+'{\\exp{\\str{( -5 &nbsp;)}}{\\str{2}}}'
											+'}'
								),
			answer: '114',
			wb: dataUtils.pre('\\ordopssimple{' +
						'\\grp{\\html{<span class=large>2</span>}}{\\btn{*}{F}{large}}{\\btn{( - 7 ) <sup>2</sup>}{T}{large}}{\\btn{-}{F}{bigger}}{\\btn{( - 3 ) <sup>2</sup>}{F}{large}}{\\btn{+}{F}{large}}{\\btn{( - 5 ) <sup>2</sup>}{F}{large}},' +
                        '\\input{49},' +
                        '\\grp{\\html{<span class=large>2</span>}}{\\btn{*}{F}{large}}{\\html{<span class=large>49</span>}}{\\btn{-}{F}{bigger}}{\\btn{( - 3 ) <sup>2</sup>}{T}{large}}{\\btn{+}{F}{large}}{\\btn{( - 5 ) <sup>2</sup>}{F}{large}},' +
                        '\\input{9},' +
						'\\grp{\\html{<span class=large>2</span>}}{\\btn{*}{F}{large}}{\\html{<span class=large>49</span>}}{\\btn{-}{F}{bigger}}{\\html{<span class=large>9</span>}}{\\btn{+}{F}{large}}{\\btn{( - 5 ) <sup>2</sup>}{T}{large}},' +
						'\\input{25},' +
						'\\grp{\\html{<span class=large>2</span>}}{\\btn{*}{T}{large}}{\\html{<span class=large>49</span>}}{\\btn{-}{F}{bigger}}{\\html{<span class=large>9</span>}}{\\btn{+}{F}{large}}{\\html{<span class=large>25</span>}},' +
						'\\input{98},' +
						'\\grp{\\html{<span class=large>98</span>}}{\\btn{-}{T}{bigger}}{\\html{<span class=large>9</span>}}{\\btn{+}{F}{large}}{\\html{<span class=large>25</span>}},' +
						'\\input{89},' +
						'\\grp{\\html{<span class=large>89</span>}}{\\btn{+}{T}{large}}{\\html{<span class=large>25</span>}},' +
						'\\input{114},' +
						'\\sign{114}' +
                    '}{terms}{evaluate&nbsp;( -7 ) <sup>2</sup>}{evaluate&nbsp; ( -3 ) <sup>2</sup>}{evaluate&nbsp; ( -5 ) <sup>2</sup>}{2 &nbsp;*&nbsp; 49}{98 &nbsp;-&nbsp; 9}{89 &nbsp;+&nbsp; 25}'),
			template: 'wideEvaluate' 
			}
			,
			{ // problem 24
			problemStatement: dataUtils.pre(
											'{\\grp'
												+'{\\str{- 45 &nbsp;&nbsp; / &nbsp;}}'
												+'{\\exp{\\str{( -3 &nbsp;)}}{\\str{2}}}'
												+'{\\str{ - &nbsp;}}'
												+'{\\exp{\\str{( -2 &nbsp;)}}{\\str{2}}}'
												+'{\\str{ &nbsp; &#43; &nbsp;}}'
												+'{\\exp{\\str{( -2 &nbsp;)}}{\\str{3}}}'
											+'}'
								),
			answer: '-17',
			wb: dataUtils.pre('\\ordopssimple{' +
						'\\grp{\\html{<span class=bigger>-</span><span class=large>45</span>}}{\\btn{/}{F}{bigger}}{\\btn{( - 3 ) <sup>2</sup>}{T}{large}}{\\btn{-}{F}{bigger}}{\\btn{( - 2 ) <sup>2</sup>}{F}{large}}{\\btn{+}{F}{large}}{\\btn{( - 2 ) <sup>3</sup>}{F}{large}},' +
                        '\\input{9},' +
                        '\\grp{\\html{<span class=bigger>-</span><span class=large>45</span>}}{\\btn{/}{F}{bigger}}{\\html{<span class=large>9</span>}}{\\btn{-}{F}{bigger}}{\\btn{( - 2 ) <sup>2</sup>}{T}{large}}{\\btn{+}{F}{large}}{\\btn{( - 2 ) <sup>3</sup>}{F}{large}},' +
                        '\\input{4},' +
						'\\grp{\\html{<span class=bigger>-</span><span class=large>45</span>}}{\\btn{/}{F}{bigger}}{\\html{<span class=large>9</span>}}{\\btn{-}{F}{bigger}}{\\html{<span class=large>4</span>}}{\\btn{+}{F}{large}}{\\btn{( - 2 ) <sup>3</sup>}{T}{large}},' +
						'\\input{-8},' +
						'\\grp{\\html{<span class=bigger>-</span><span class=large>45</span>}}{\\btn{/}{T}{bigger}}{\\html{<span class=large>9</span>}}{\\btn{-}{F}{bigger}}{\\html{<span class=large>4</span>}}{\\btn{+}{F}{large}}{\\html{<span class=large>(</span><span class=bigger>-</span><span class=large>8 )</span>}},' +
						'\\input{-5},' +
						'\\grp{\\html{<span class=bigger>-</span><span class=large>5</span>}}{\\btn{-}{T}{bigger}}{\\html{<span class=large>4</span>}}{\\btn{+}{F}{large}}{\\html{<span class=large>(</span><span class=bigger>-</span><span class=large>8 )</span>}},' +
						'\\input{-9},' +
						'\\grp{\\html{<span class=bigger>-</span><span class=large>9</span>}}{\\btn{+}{T}{large}}{\\html{<span class=large>(</span><span class=bigger>-</span><span class=large>8 )</span>}},' +
						'\\input{-17},' +
						'\\str{-17}' +
                    '}{terms}{evaluate&nbsp;( - 3 ) <sup>2</sup>}{evaluate&nbsp; ( - 2 ) <sup>2</sup>}{evaluate&nbsp; ( - 2 ) <sup>3</sup>}{- 45 / 9}{-5 - 4}{-9 + ( - 8 )}'),
			template: 'wideEvaluate' 
			}
			,
            { // problem 25
			problemStatement: dataUtils.pre('{\\grp{\\str{(}}{\\mixed{\\str{-}}{\\frac{\\fracstr{2}}{\\fracstr{5}}}}{\\str{)}}{\\css{\\html{<sup>2</sup>}}{exponentLarge}}}'),
			firstHelp: 'The exponent is raised above the parenthesis. It therefore affects \\"everything\\" inside the parenthesis (the sign and the number).', 
			secondHelp: dataUtils.pre(
							'{\\grp'
								+'{\\str{(}}'
								+'{\\mixed{\\str{-}}{\\frac{\\fracstr{2}}{\\fracstr{5}}}}'
								+'{\\str{)}}'
								+'{\\css'
									+'{\\html{<sup>2</sup>}}'
									+'{exponentLarge}'
								+'}'
								+'{\\str{ &nbsp; means &nbsp; }}'
								+'{\\mixed{\\str{-}}{\\frac{\\fracstr{2}}{\\fracstr{5}}}}'
								+'{\\str{&nbsp;* &nbsp;}}'
								+'{\\mixed{\\str{-}}{\\frac{\\fracstr{2}}{\\fracstr{5}}}}'
							+'}'
						),
			answer: dataUtils.pre('\\frac{\\input{4}}{\\input{25}}'),
			helpAnswer: dataUtils.pre('\\frac{\\fracstr{4}}{\\fracstr{25}}'),
			template: 'firstFractions' 
			}
			,
            { // problem 26
			problemStatement: dataUtils.pre('{\\grp{\\str{(}}{\\mixed{\\str{-}}{\\frac{\\fracstr{3}}{\\fracstr{7}}}}{\\str{)}}{\\css{\\html{<sup>2</sup>}}{exponentLarge}}}'),
			firstHelp: 'The exponent is raised above the parenthesis. It therefore affects \\"everything\\" inside the parenthesis (the sign and the number).', 
			secondHelp: dataUtils.pre(
							'{\\grp'
								+'{\\str{(}}'
								+'{\\mixed{\\str{-}}{\\frac{\\fracstr{3}}{\\fracstr{7}}}}'
								+'{\\str{)}}'
								+'{\\css'
									+'{\\html{<sup>2</sup>}}'
									+'{exponentLarge}'
								+'}'
								+'{\\str{ &nbsp; means &nbsp; }}'
								+'{\\mixed{\\str{-}}{\\frac{\\fracstr{3}}{\\fracstr{7}}}}'
								+'{\\str{&nbsp;* &nbsp;}}'
								+'{\\mixed{\\str{-}}{\\frac{\\fracstr{3}}{\\fracstr{7}}}}'
							+'}'
						),
			answer: dataUtils.pre('\\frac{\\input{9}}{\\input{49}}'),
			helpAnswer: dataUtils.pre('\\frac{\\fracstr{9}}{\\fracstr{49}}'),
			template: 'firstFractions' 
			}
			,
            { // problem 27
			problemStatement: dataUtils.pre('{\\grp{\\str{(}}{\\mixed{\\str{-}}{\\frac{\\fracstr{5}}{\\fracstr{4}}}}{\\str{)}}{\\css{\\html{<sup>3</sup>}}{exponentLarge}}}'),
			firstHelp: 'The exponent is raised above the parenthesis. It therefore affects \\"everything\\" inside the parenthesis (the sign and the number).', 
			secondHelp: dataUtils.pre(
							'{\\grp'
								+'{\\str{(}}'
								+'{\\mixed{\\str{-}}{\\frac{\\fracstr{5}}{\\fracstr{4}}}}'
								+'{\\str{)}}'
								+'{\\css'
									+'{\\html{<sup>3</sup>}}'
									+'{exponentLarge}'
								+'}'
								+'{\\str{ &nbsp; means &nbsp; }}'
								+'{\\mixed{\\str{-}}{\\frac{\\fracstr{5}}{\\fracstr{4}}}}'
								+'{\\str{&nbsp;* &nbsp;}}'
								+'{\\mixed{\\str{-}}{\\frac{\\fracstr{5}}{\\fracstr{4}}}}'
								+'{\\str{&nbsp;* &nbsp;}}'
								+'{\\mixed{\\str{-}}{\\frac{\\fracstr{5}}{\\fracstr{4}}}}'
							+'}'
						),
			answer: dataUtils.pre('\\frac{\\input{-125}}{\\input{64}}'),
			helpAnswer: dataUtils.pre('\\mixed{\\str{-}}{\\frac{\\fracstr{125}}{\\fracstr{64}}}'),
			template: 'firstFractions' 
			}
			,
            { // problem 28
			problemStatement: dataUtils.pre('{\\grp{\\str{(}}{\\mixed{\\str{-}}{\\frac{\\fracstr{2}}{\\fracstr{7}}}}{\\str{)}}{\\css{\\html{<sup>3</sup>}}{exponentLarge}}}'),
			firstHelp: 'The exponent is raised above the parenthesis. It therefore affects \\"everything\\" inside the parenthesis (the sign and the number).', 
			secondHelp: dataUtils.pre(
							'{\\grp'
								+'{\\str{(}}'
								+'{\\mixed{\\str{-}}{\\frac{\\fracstr{2}}{\\fracstr{7}}}}'
								+'{\\str{)}}'
								+'{\\css'
									+'{\\html{<sup>3</sup>}}'
									+'{exponentLarge}'
								+'}'
								+'{\\str{ &nbsp; means &nbsp; }}'
								+'{\\mixed{\\str{-}}{\\frac{\\fracstr{2}}{\\fracstr{7}}}}'
								+'{\\str{&nbsp;* &nbsp;}}'
								+'{\\mixed{\\str{-}}{\\frac{\\fracstr{2}}{\\fracstr{7}}}}'
								+'{\\str{&nbsp;* &nbsp;}}'
								+'{\\mixed{\\str{-}}{\\frac{\\fracstr{2}}{\\fracstr{7}}}}'
							+'}'
						),
			answer: dataUtils.pre('\\frac{\\input{-8}}{\\input{343}}'),
			helpAnswer: dataUtils.pre('\\mixed{\\str{-}}{\\frac{\\fracstr{8}}{\\fracstr{343}}}'),
			template: 'firstFractions' 
			}
			,
            { // problem 29
			problemStatement: dataUtils.pre('{\\grp{\\str{-}}{\\str{(}}{\\mixed{\\str{-}}{\\frac{\\fracstr{1}}{\\fracstr{4}}}}{\\str{)}}{\\css{\\html{<sup>2</sup>}}{exponentLarge}}}'),
			firstHelp: 'The exponent is raised above the parenthesis. It therefore affects \\"everything\\" inside the parenthesis (the sign and the number). It does not affect the minus sign in front of the parenthesis.', 
			secondHelp: dataUtils.pre(
							'{\\str{Evaluate the exponent and its base first.}}'
							+'{\\html{&nbsp;}}'
							+'{\\grp'
								+'{\\str{-}}'
								+'{\\str{(}}'
								+'{\\mixed{\\str{-}}{\\frac{\\fracstr{1}}{\\fracstr{4}}}}'
								+'{\\str{)}}'
								+'{\\css'
									+'{\\html{<sup>2</sup>}}'
									+'{exponentLarge}'
								+'}'
								+'{\\str{ &nbsp; means &nbsp; }}'
								+'{\\str{-}}'
								+'{\\str{(}}'
								+'{\\frac{\\fracstr{1}}{\\fracstr{16}}}'
								+'{\\str{)}}'
							+'}'
						),
			answer: dataUtils.pre('\\frac{\\input{-1}}{\\input{16}}'),
			helpAnswer: dataUtils.pre('\\mixed{\\str{-}}{\\frac{\\fracstr{1}}{\\fracstr{16}}}'),
			template: 'firstFractions' 
			}
			,
            { // problem 30
			problemStatement: dataUtils.pre('{\\grp{\\str{-}}{\\str{(}}{\\mixed{\\str{-}}{\\frac{\\fracstr{1}}{\\fracstr{6}}}}{\\str{)}}{\\css{\\html{<sup>2</sup>}}{exponentLarge}}}'),
			firstHelp: 'The exponent is raised above the parenthesis. It therefore affects \\"everything\\" inside the parenthesis (the sign and the number). It does not affect the minus sign in front of the parenthesis.', 
			secondHelp: dataUtils.pre(
							'{\\str{Evaluate the exponent and its base first.}}'
							+'{\\html{&nbsp;}}'
							+'{\\grp'
								+'{\\str{-}}'
								+'{\\str{(}}'
								+'{\\mixed{\\str{-}}{\\frac{\\fracstr{1}}{\\fracstr{6}}}}'
								+'{\\str{)}}'
								+'{\\css'
									+'{\\html{<sup>2</sup>}}'
									+'{exponentLarge}'
								+'}'
								+'{\\str{ &nbsp; means &nbsp; }}'
								+'{\\str{-}}'
								+'{\\str{(}}'
								+'{\\frac{\\fracstr{1}}{\\fracstr{36}}}'
								+'{\\str{)}}'
							+'}'
						),
			answer: dataUtils.pre('\\frac{\\input{-1}}{\\input{36}}'),
			helpAnswer: dataUtils.pre('\\mixed{\\str{-}}{\\frac{\\fracstr{1}}{\\fracstr{36}}}'),
			template: 'firstFractions' 
			}
			,
            { // problem 31
			problemStatement: dataUtils.pre('{\\grp{\\str{-}}{\\str{(}}{\\mixed{\\str{-}}{\\frac{\\fracstr{2}}{\\fracstr{3}}}}{\\str{)}}{\\css{\\html{<sup>3</sup>}}{exponentLarge}}}'),
			firstHelp: 'The exponent is raised above the parenthesis. It therefore affects \\"everything\\" inside the parenthesis (the sign and the number). It does not affect the minus sign in front of the parenthesis.', 
			secondHelp: dataUtils.pre(
							'{\\str{Evaluate the exponent and its base first.}}'
							+'{\\html{&nbsp;}}'
							+'{\\grp'
								+'{\\str{-}}'
								+'{\\str{(}}'
								+'{\\mixed{\\str{-}}{\\frac{\\fracstr{2}}{\\fracstr{3}}}}'
								+'{\\str{)}}'
								+'{\\css'
									+'{\\html{<sup>3</sup>}}'
									+'{exponentLarge}'
								+'}'
								+'{\\str{ &nbsp; means &nbsp; }}'
								+'{\\str{-}}'
								+'{\\str{(}}'
								+'{\\mixed{str{-}}{\\frac{\\fracstr{8}}{\\fracstr{27}}}}'
								+'{\\str{)}}'
							+'}'
						),
			answer: dataUtils.pre('\\frac{\\input{8}}{\\input{27}}'),
			helpAnswer: dataUtils.pre('\\mixed{\\str{}}{\\frac{\\fracstr{8}}{\\fracstr{27}}}'),
			template: 'firstFractions' 
			}
			,
            { // problem 31
			problemStatement: dataUtils.pre('{\\grp{\\str{-}}{\\str{(}}{\\mixed{\\str{-}}{\\frac{\\fracstr{3}}{\\fracstr{2}}}}{\\str{)}}{\\css{\\html{<sup>3</sup>}}{exponentLarge}}}'),
			firstHelp: 'The exponent is raised above the parenthesis. It therefore affects \\"everything\\" inside the parenthesis (the sign and the number). It does not affect the minus sign in front of the parenthesis.', 
			secondHelp: dataUtils.pre(
							'{\\str{Evaluate the exponent and its base first.}}'
							+'{\\html{&nbsp;}}'
							+'{\\grp'
								+'{\\str{-}}'
								+'{\\str{(}}'
								+'{\\mixed{\\str{-}}{\\frac{\\fracstr{3}}{\\fracstr{2}}}}'
								+'{\\str{)}}'
								+'{\\css'
									+'{\\html{<sup>3</sup>}}'
									+'{exponentLarge}'
								+'}'
								+'{\\str{ &nbsp; means &nbsp; }}'
								+'{\\str{-}}'
								+'{\\str{(}}'
								+'{\\mixed{str{-}}{\\frac{\\fracstr{27}}{\\fracstr{8}}}}'
								+'{\\str{)}}'
							+'}'
						),
			answer: dataUtils.pre('\\frac{\\input{27}}{\\input{8}}'),
			helpAnswer: dataUtils.pre('\\mixed{\\str{}}{\\frac{\\fracstr{27}}{\\fracstr{8}}}'),
			template: 'firstFractions' 
			}
			,
             { // problem 33
			prob: dataUtils.pre(
									'\\grp'
										+'{\\frac{\\fracstr{7}}{\\fracstr{10}}}'
										+'{\\str{-}}'
										+'{\\str{(}}'
										+'{\\mixed{\\str{-}}{\\frac{\\fracstr{2}}{\\fracstr{5}}}}'
										+'{\\str{)}}'
										+'{\\css'
											+'{\\html{<sup>2</sup>}}'
											+'{exponentLarge}'
										+'}'
								),
			ans: dataUtils.pre('\\frac{\\input{27}}{\\input{50}}'),
			firstFraction: '<table>'
								+'<tr>'
									+'<td rowspan="3" class=hugeAndThin>(</td>'
									+'<td rowspan="3" class=bigger>-</td>'
									+'<td>2</td>'
									+'<td rowspan="3" class=hugeAndThin>&nbsp; )</td>'
									+'<td rowspan="3"><span class=exponentLarge><sup>2</sup></span></td>'
								+'</tr>'
								+'<tr>'
									+'<td><hr></td>'
								+'</tr>'
								+'<tr>'
									+'<td>5</td>'
								+'</tr>'
							+'</table>',
			wb: dataUtils.pre('\\ordopssimple{' +
						'\\grp'
							+'{\\css'
								+'{\\frac{\\fracstr{7}}{\\fracstr{10}}}'
								+'{large}'
							+'}'
							+'{\\btn{-}{F}{bigger}}'
							+'{\\btn{'
								+'$$firstFraction'
							+'}'
							+'{T}{}},' 
							+'\\frac{\\input{4}}{\\input{25}},'
                        +'\\grp'
							+'{\\css'
								+'{\\frac{\\fracstr{7}}{\\fracstr{10}}}'
								+'{large}'
							+'}'
							+'{\\btn{-}{T}{bigger}}'
							+'{\\css'
								+'{\\frac{\\fracstr{4}}{\\fracstr{25}}}'
								+'{large}'
							+'},'
							+'\\frac{\\input{27}}{\\input{50}},' 
						+'\\frac{\\fracstr{27}}{\\fracstr{50}}' 
                    +'}{terms}'
						+'{<table><tr><td>evaluate&nbsp;</td><td>&nbsp;</td><td><table><tr><td rowspan="3" class=hugeAndThin>(</td><td></td><td>2</td><td rowspan="3" class=hugeAndThin>&nbsp; )</td><td rowspan="3"><span class=exponentLarge><sup>2</sup></span></td></tr><tr><td>-</td><td><hr></td></tr><tr><td></td><td>5</td></tr></table></td></tr></table>}'
						+'{<table><tr><td><table><tr><td>7<td></tr><tr><td><hr><td></tr><tr><td>10<td></tr></table></td><td>&nbsp; - &nbsp;</td><td><table><tr><td>4<td></tr><tr><td><hr><td></tr><tr><td>25<td></tr></table></td></tr></table>}'),
			template: 'evaluateFractionBase' 
			}
			,
             { // problem 34
			prob: dataUtils.pre(
									'\\grp'
										+'{\\mixed{\\str{-}}{\\frac{\\fracstr{11}}{\\fracstr{18}}}}'
										+'{\\str{-}}'
										+'{\\str{(}}'
										+'{\\mixed{\\str{-}}{\\frac{\\fracstr{4}}{\\fracstr{3}}}}'
										+'{\\str{)}}'
										+'{\\css'
											+'{\\html{<sup>2</sup>}}'
											+'{exponentLarge}'
										+'}'
								),
			ans: dataUtils.pre('\\frac{\\input{-43}}{\\input{18}}'),
			wb: dataUtils.pre('\\ordopssimple{' +
						'\\grp'
							+'{\\css'
								+'{\\mixed{\\str{-}}{\\frac{\\fracstr{11}}{\\fracstr{18}}}}'
								+'{large}'
							+'}'
							+'{\\btn{-}{F}{bigger}}'
							+'{\\btn{'
								+'<table><tr><td rowspan="3" class=hugeAndThin>(</td><td></td><td>4</td><td rowspan="3" class=hugeAndThin>&nbsp; )</td><td rowspan="3"><span class=exponentLarge><sup>2</sup></span></td></tr><tr><td>-</td><td><hr></td></tr><tr><td></td><td>3</td></tr></table>'
							+'}'
							+'{T}{}},' 
							+'\\frac{\\input{16}}{\\input{9}},'
                        +'\\grp'
							+'{\\css'
								+'{\\mixed{\\str{-}}{\\frac{\\fracstr{11}}{\\fracstr{18}}}}'
								+'{large}'
							+'}'
							+'{\\btn{-}{T}{bigger}}'
							+'{\\css'
								+'{\\frac{\\fracstr{16}}{\\fracstr{9}}}'
								+'{large}'
							+'},'
							+'\\frac{\\input{-43}}{\\input{18}},' 
						+'\\frac{\\fracstr{-43}}{\\fracstr{18}}' 
                    +'}{terms}'
						+'{<table><tr><td>evaluate&nbsp;</td><td>&nbsp;</td><td><table><tr><td rowspan="3" class=hugeAndThin>(</td><td></td><td>4</td><td rowspan="3" class=hugeAndThin>&nbsp; )</td><td rowspan="3"><span class=exponentLarge><sup>2</sup></span></td></tr><tr><td>-</td><td><hr></td></tr><tr><td></td><td>3</td></tr></table></td></tr></table>}'
						+'{<table><tr><td><table><tr><td>11<td></tr><tr><td><hr><td></tr><tr><td>18<td></tr></table></td><td>&nbsp; - &nbsp;</td><td><table><tr><td>16<td></tr><tr><td><hr><td></tr><tr><td>9<td></tr></table></td></tr></table>}'),
			template: 'evaluateFractionBase' 
			}
			,
            { // problem 35
			prob: dataUtils.pre(
									'\\grp'
										+'{\\mixed{\\str{-}}{\\frac{\\fracstr{3}}{\\fracstr{5}}}}'
										+'{\\str{*}}'
										+'{\\frac{\\fracstr{1}}{\\fracstr{2}}}'
										+'{\\str{-}}'
										+'{\\str{(}}'
										+'{\\mixed{\\str{-}}{\\frac{\\fracstr{2}}{\\fracstr{3}}}}'
										+'{\\str{)}}'
										+'{\\css'
											+'{\\html{<sup>2</sup>}}'
											+'{exponentLarge}'
										+'}'
								),
			ans: dataUtils.pre('\\frac{\\input{-67}}{\\input{90}}'),
			firstFraction: '<table>'
								+'<tr>'
									+'<td rowspan="3" class=hugeAndThin>(</td>'
									+'<td></td>'
									+'<td>2</td>'
									+'<td rowspan="3" class=hugeAndThin>&nbsp; )</td>'
									+'<td rowspan="3"><span class=exponentLarge><sup>2</sup></span></td>'
								+'</tr>'
								+'<tr>'
									+'<td><span class=bigger>-</span></td>'
									+'<td><hr></td>'
								+'</tr>'
								+'<tr>'
									+'<td></td>'
									+'<td>3</td>'
								+'</tr>'
							+'</table>',
			secondFraction: '<table>'
								+'<tr>'
									+'<td class=bigger>-&nbsp;</td>'
									+'<td>'
										+'<table><tr><td>3<td></tr><tr><td><hr><td></tr><tr><td>5<td></tr></table>'
									+'</td>'
									+'<td>&nbsp; <span class=large>*</span> &nbsp;</td>'
									+'<td>'
										+'<table><tr><td>1<td></tr><tr><td><hr><td></tr><tr><td>2<td></tr></table>'
									+'</td>'
								+'</tr>'
							+'</table>',
			thirdFraction: '<table>'
								+'<tr>'
									+'<td class=bigger>-&nbsp;</td>'
									+'<td>'
										+'<table>'
											+'<tr>'
												+'<td>3<td>'
											+'</tr>'
											+'<tr>'
												+'<td><hr><td>'
											+'</tr>'
											+'<tr>'
												+'<td>10<td>'
											+'</tr>'
										+'</table>'
									+'</td>'
									+'<td>&nbsp; <span class=bigger>-</span> &nbsp;</td>'
									+'<td>'
										+'<table>'
											+'<tr>'
												+'<td>4<td>'
											+'</tr>'
											+'<tr>'
												+'<td><hr><td>'
											+'</tr>'
											+'<tr>'
												+'<td>9<td>'
											+'</tr>'
										+'</table>'
									+'</td>'
								+'</tr>'
							+'</table>',
			wb: dataUtils.pre('\\ordopssimple{' +
						'\\grp'
							+'{\\css'
								+'{\\mixed{\\str{-}}{\\frac{\\fracstr{3}}{\\fracstr{5}}}}'
								+'{large}'
							+'}'
							+'{\\btn{*}{F}{large}}'
							+'{\\css'
								+'{\\frac{\\fracstr{1}}{\\fracstr{2}}}'
								+'{large}'
							+'}'
							+'{\\btn{-}{F}{bigger}}'
							+'{\\btn{'
								+'$$firstFraction'
							+'}'
							+'{T}{large}},' 
							+'\\frac{\\input{4}}{\\input{9}},'
                        +'\\grp'
							+'{\\css'
								+'{\\mixed{\\str{-}}{\\frac{\\fracstr{3}}{\\fracstr{5}}}}'
								+'{large}'
							+'}'
							+'{\\btn{*}{T}{large}}'
							+'{\\css'
								+'{\\frac{\\fracstr{1}}{\\fracstr{2}}}'
								+'{large}'
							+'}'
							+'{\\btn{-}{F}{bigger}}'
							+'{\\css'
								+'{\\frac{\\fracstr{4}}{\\fracstr{9}}}'
								+'{large}'
							+'},'
							+'\\frac{\\input{-3}}{\\input{10}},' 
						 +'\\grp'
							+'{\\css'
								+'{\\mixed{\\str{-}}{\\frac{\\fracstr{3}}{\\fracstr{10}}}}'
								+'{large}'
							+'}'
							+'{\\btn{-}{T}{bigger}}'
							+'{\\css'
								+'{\\frac{\\fracstr{4}}{\\fracstr{9}}}'
								+'{large}'
							+'},'
							+'\\frac{\\input{-67}}{\\input{90}},' 
						+'\\frac{\\fracstr{-67}}{\\fracstr{90}}' 
                    +'}{terms}'
						+'{<table><tr><td>evaluate&nbsp;</td><td>&nbsp;</td><td>$$firstFraction</td></tr></table>}'
						+'{$$secondFraction}'
						+'{$$thirdFraction}'),
			template: 'evaluateFractionBase' 
			}
			,
			{ // problem 36
			prob: dataUtils.pre(
									'\\grp'
										+'{\\frac{\\fracstr{2}}{\\fracstr{5}}}'
										+'{\\str{/}}'
										+'{\\str{(}}'
										+'{\\mixed{\\str{-}}{\\frac{\\fracstr{4}}{\\fracstr{5}}}}'
										+'{\\str{)}}'
										+'{\\str{-}}'
										+'{\\str{(}}'
										+'{\\mixed{\\str{-}}{\\frac{\\fracstr{3}}{\\fracstr{4}}}}'
										+'{\\str{)}}'
										+'{\\css'
											+'{\\html{<sup>2</sup>}}'
											+'{exponentLarge}'
										+'}'
								),
			ans: dataUtils.pre('\\frac{\\input{-17}}{\\input{16}}'),
			firstFraction: '<table>'
								+'<tr>'
									+'<td>2<td>'
								+'</tr>'
								+'<tr>'
									+'<td><hr><td>'
								+'</tr>'
								+'<tr>'
									+'<td>5<td>'
								+'</tr>'
							+'</table>',
			secondFraction: '<table>'
								+'<tr>'
									+'<td rowspan="3" class=hugeAndThin>(</td>'
									+'<td></td>'
									+'<td>4</td>'
									+'<td rowspan="3" class=hugeAndThin>&nbsp; )</td>'
								+'</tr>'
								+'<tr>'
									+'<td><span class=bigger>-</span></td>'
									+'<td><hr></td>'
								+'</tr>'
								+'<tr>'
									+'<td></td>'
									+'<td>5</td>'
								+'</tr>'
							+'</table>',
			thirdFraction: '<table>'
								+'<tr>'
									+'<td rowspan="3" class=hugeAndThin>(</td>'
									+'<td></td>'
									+'<td>3</td>'
									+'<td rowspan="3" class=hugeAndThin>&nbsp; )</td>'
									+'<td rowspan="3"><span class=exponentLarge><sup>2</sup></span></td>'
								+'</tr>'
								+'<tr>'
									+'<td><span class=bigger>-</span></td>'
									+'<td><hr></td>'
								+'</tr>'
								+'<tr>'
									+'<td></td>'
									+'<td>4</td>'
								+'</tr>'
							+'</table>',
			fourthFraction: '<table>'
								+'<tr>'
									+'<td class=bigger>-&nbsp;</td>'
									+'<td>'
										+'<table><tr><td>1<td></tr><tr><td><hr><td></tr><tr><td>2<td></tr></table>'
									+'</td>'
								+'</tr>'
							+'</table>',
			fifthFraction: '<table>'
								+'<tr>'
									+'<td>9<td>'
								+'</tr>'
								+'<tr>'
									+'<td><hr><td>'
								+'</tr>'
								+'<tr>'
									+'<td>16<td>'
								+'</tr>'
							+'</table>',
			wb: dataUtils.pre('\\ordopssimple{' +
						'\\grp'
							+'{\\css'
								+'{\\frac{\\fracstr{2}}{\\fracstr{5}}}'
								+'{large}'
							+'}'
							+'{\\btn{/}{F}{bigger}}'
							+'{\\str{(}}'
							+'{\\css'
								+'{\\mixed{\\str{-}}{\\frac{\\fracstr{4}}{\\fracstr{5}}}}'
								+'{large}'
							+'}'
							+'{\\str{)}}'
							+'{\\btn{-}{F}{bigger}}'
							+'{\\btn'
								+'{$$thirdFraction}'
								+'{T}'
								+'{large}'
							+'},' 
							+'\\frac{\\input{9}}{\\input{16}},'
                        +'\\grp'
							+'{\\css'
								+'{\\frac{\\fracstr{2}}{\\fracstr{5}}}'
								+'{large}'
							+'}'
							+'{\\btn{/}{T}{bigger}}'
							+'{\\str{(}}'
							+'{\\css'
								+'{\\mixed{\\str{-}}{\\frac{\\fracstr{4}}{\\fracstr{5}}}}'
								+'{large}'
							+'}'
							+'{\\str{)}}'
							+'{\\btn{-}{F}{bigger}}'
							+'{\\css'
								+'{\\frac{\\fracstr{9}}{\\fracstr{16}}}'
								+'{large}'
							+'},' 
							+'\\frac{\\input{-1}}{\\input{2}},'
						 +'\\grp'
							+'{\\css'
								+'{\\mixed{\\str{-}}{\\frac{\\fracstr{1}}{\\fracstr{2}}}}'
								+'{large}'
							+'}'
							+'{\\btn{-}{T}{bigger}}'
							+'{\\css'
								+'{\\frac{\\fracstr{9}}{\\fracstr{16}}}'
								+'{large}'
							+'},'
							+'\\frac{\\input{-17}}{\\input{16}},' 
						+'\\frac{\\fracstr{-17}}{\\fracstr{16}}' 
                    +'}{terms}'
						+'{<table><tr><td>evaluate&nbsp;</td><td>&nbsp;</td><td>$$thirdFraction</td></tr></table>}'
						+'{<table><tr><td>$$firstFraction</td><td><span class=bigger>&divide;</span></td><td>$$secondFraction</td></tr></table>}'
						+'{<table><tr><td>$$fourthFraction</td><td>&nbsp; - &nbsp;</td><td>$$fifthFraction</td></tr></table>}'),
			template: 'evaluateFractionBase' 
			}
			,
			{ // problem 37
			prob: dataUtils.pre(
									'\\grp'
										+'{\\str{-}}'
										+'{\\str{(}}'
										+'{\\mixed{\\str{-}}{\\frac{\\fracstr{3}}{\\fracstr{5}}}}'
										+'{\\str{)}}'
										+'{\\css'
											+'{\\html{<sup>3</sup>}}'
											+'{exponentLarge}'
										+'}'
										+'{\\str{/}}'
										+'{\\str{(}}'
										+'{\\mixed{\\str{-}}{\\frac{\\fracstr{1}}{\\fracstr{5}}}}'
										+'{\\str{)}}'
										+'{\\css'
											+'{\\html{<sup>2</sup>}}'
											+'{exponentLarge}'
										+'}'
										+'{\\str{-}}'
										+'{\\frac{\\fracstr{3}}{\\fracstr{5}}}'
								),
			ans: dataUtils.pre('\\frac{\\input{24}}{\\input{5}}'),
			firstFraction: '<table>'
								+'<tr>'
									+'<td rowspan="3" class=hugeAndThin>(</td>'
									+'<td></td>'
									+'<td>3</td>'
									+'<td rowspan="3" class=hugeAndThin>&nbsp; )</td>'
									+'<td rowspan="3"><span class=exponentLarge><sup>3</sup></span></td>'
								+'</tr>'
								+'<tr>'
									+'<td><span class=bigger>-</span></td>'
									+'<td><hr></td>'
								+'</tr>'
								+'<tr>'
									+'<td></td>'
									+'<td>5</td>'
								+'</tr>'
							+'</table>',
			secondFraction: '<table>'
								+'<tr>'
									+'<td rowspan="3" class=hugeAndThin>(</td>'
									+'<td></td>'
									+'<td>1</td>'
									+'<td rowspan="3" class=hugeAndThin>&nbsp; )</td>'
									+'<td rowspan="3"><span class=exponentLarge><sup>2</sup></span></td>'
								+'</tr>'
								+'<tr>'
									+'<td><span class=bigger>-</span></td>'
									+'<td><hr></td>'
								+'</tr>'
								+'<tr>'
									+'<td></td>'
									+'<td>5</td>'
								+'</tr>'
							+'</table>',
			thirdFraction: '<table>'
								+'<tr>'
									+'<td rowspan="3" class=hugeAndThin>(&nbsp;</td>'
									+'<td rowspan="3" class=bigger>-</td>'
									+'<td>'
										+'<table>'
											+'<tr>'
												+'<td>27<td>'
											+'</tr>'
											+'<tr>'
												+'<td><hr><td>'
											+'</tr>'
											+'<tr>'
												+'<td>125<td>'
											+'</tr>'
										+'</table>'
									+'</td>'
									+'<td rowspan="3" class=hugeAndThin>)&nbsp;</td>'
								+'</tr>'
							+'</table>',
			fourthFraction: '<table>'
								+'<tr>'
									+'<td rowspan="3" class=bigger>-</td>'
									+'<td rowspan="3" class=hugeAndThin>(</td>'
									+'<td rowspan="3" class=bigger>-</td>'
									+'<td>27</td>'
									+'<td rowspan="3" class=hugeAndThin>&nbsp; )</td>'
								+'</tr>'
								+'<tr>'
									+'<td><hr></td>'
								+'</tr>'
								+'<tr>'
									+'<td>5</td>'
								+'</tr>'
							+'</table>',
			wb: dataUtils.pre('\\ordopssimple{' +
						'\\grp'
							+'{\\btn'
								+'{-}'
								+'{F}'
								+'{bigger}'
							+'}' 
							+'{\\btn'
								+'{$$firstFraction}'
								+'{T}'
								+'{large}'
							+'}'
							+'{\\btn'
								+'{/}'
								+'{F}'
								+'{bigger}'
							+'}'
							+'{\\btn'
								+'{$$secondFraction}'
								+'{F}'
								+'{large}'
							+'}'
							+'{\\btn'
								+'{-}'
								+'{F}'
								+'{bigger}'
							+'}' 
							+'{\\css'
								+'{\\frac{\\fracstr{3}}{\\fracstr{5}}}'
								+'{large}'
							+'},'
							+'\\frac{\\input{-27}}{\\input{125}},'
						+'\\grp'
							+'{\\btn'
								+'{-}'
								+'{F}'
								+'{bigger}'
							+'}' 
							+'{\\str{(}}'
							+'{\\css'
								+'{\\mixed{\\str{-}}{\\frac{\\fracstr{27}}{\\fracstr{125}}}}'
								+'{large}'
							+'}'
							+'{\\str{)}}'
							+'{\\btn'
								+'{/}'
								+'{F}'
								+'{bigger}'
							+'}'
							+'{\\btn'
								+'{$$secondFraction}'
								+'{T}'
								+'{large}'
							+'}'
							+'{\\btn'
								+'{-}'
								+'{F}'
								+'{bigger}'
							+'}' 
							+'{\\css'
								+'{\\frac{\\fracstr{3}}{\\fracstr{5}}}'
								+'{large}'
							+'},'
							+'\\frac{\\input{1}}{\\input{25}},'
                       +'\\grp'
							+'{\\btn'
								+'{-}'
								+'{F}'
								+'{bigger}'
							+'}' 
							+'{\\str{(}}'
							+'{\\css'
								+'{\\mixed{\\str{-}}{\\frac{\\fracstr{27}}{\\fracstr{125}}}}'
								+'{large}'
							+'}'
							+'{\\str{)}}'
							+'{\\btn'
								+'{/}'
								+'{T}'
								+'{bigger}'
							+'}'
							+'{\\css'
								+'{\\frac{\\fracstr{1}}{\\fracstr{25}}}'
								+'{large}'
							+'}'
							+'{\\btn'
								+'{-}'
								+'{F}'
								+'{bigger}'
							+'}' 
							+'{\\css'
								+'{\\frac{\\fracstr{3}}{\\fracstr{5}}}'
								+'{large}'
							+'},'
							+'\\frac{\\input{-27}}{\\input{5}},'
						+'\\grp'
							+'{\\btn'
								+'{$$fourthFraction}'
								+'{T}'
								+'{large}'
							+'}'
							+'{\\btn'
								+'{-}'
								+'{F}'
								+'{bigger}'
							+'}' 
							+'{\\css'
								+'{\\frac{\\fracstr{3}}{\\fracstr{5}}}'
								+'{large}'
							+'},'
							+'\\frac{\\input{27}}{\\input{5}},'
						+'\\grp'
							+'{\\css'
								+'{\\frac{\\fracstr{27}}{\\fracstr{5}}}'
								+'{large}'
							+'}'
							+'{\\btn'
								+'{-}'
								+'{T}'
								+'{bigger}'
							+'}' 
							+'{\\css'
								+'{\\frac{\\fracstr{3}}{\\fracstr{5}}}'
								+'{large}'
							+'},'
							+'\\frac{\\input{24}}{\\input{5}},'
						+'\\frac{\\fracstr{24}}{\\fracstr{5}}' 
                    +'}{terms}'
						+'{<table><tr><td>evaluate&nbsp;</td><td>&nbsp;</td><td>$$firstFraction</td></tr></table>}'
						+'{<table><tr><td>evaluate&nbsp;</td><td>&nbsp;</td><td>$$secondFraction</td></tr></table>}'
						+'{<table><tr><td><span class=hugeAndThin>(</span><span class=bigger>-</span></td><td><table><tr><td>27<td></tr><tr><td><hr><td></tr><tr><td>125<td></tr></table></td><td>&nbsp;<span class=hugeAndThin>)</span>&nbsp;</td><td>&nbsp; <span class=bigger>&divide</span> &nbsp;</td><td><table><tr><td>1<td></tr><tr><td><hr><td></tr><tr><td>25<td></tr></table></td></tr></table>}'
						+'{<table><tr><td>evaluate&nbsp;</td><td>&nbsp;</td><td>$$fourthFraction</td></tr></table>}'
						+'{<table><tr><td><table><tr><td>27<td></tr><tr><td><hr><td></tr><tr><td>5<td></tr></table></td><td>&nbsp; - &nbsp;</td><td><table><tr><td>3<td></tr><tr><td><hr><td></tr><tr><td>5<td></tr></table></td></tr></table>}'),
			template: 'evaluateFractionBase' 
			}
			,
			{ // problem 38
			prob: dataUtils.pre(
									'\\grp'
										+'{\\str{-}}'
										+'{\\str{(}}'
										+'{\\mixed{\\str{-}}{\\frac{\\fracstr{3}}{\\fracstr{4}}}}'
										+'{\\str{)}}'
										+'{\\css'
											+'{\\html{<sup>3</sup>}}'
											+'{exponentLarge}'
										+'}'
										+'{\\str{*}}'
										+'{\\str{(}}'
										+'{\\mixed{\\str{-}}{\\frac{\\fracstr{8}}{\\fracstr{3}}}}'
										+'{\\str{)}}'
										+'{\\css'
											+'{\\html{<sup>2</sup>}}'
											+'{exponentLarge}'
										+'}'
										+'{\\str{-}}'
										+'{\\str{(}}'
										+'{\\mixed{\\str{-}}{\\frac{\\fracstr{3}}{\\fracstr{2}}}}'
										+'{\\str{)}}'
										+'{\\css'
											+'{\\html{<sup>2</sup>}}'
											+'{exponentLarge}'
										+'}'
								),
			ans: dataUtils.pre('\\frac{\\input{3}}{\\input{4}}'),
			firstFraction: '<table>'
								+'<tr>'
									+'<td rowspan="3" class=hugeAndThin>(</td>'
									+'<td rowspan="3" class=bigger>-</td>'
									+'<td>3</td>'
									+'<td rowspan="3" class=hugeAndThin>&nbsp;)</td>'
									+'<td rowspan="3"><span class=exponentLarge><sup>3</sup></span></td>'
								+'</tr>'
								+'<tr>'
									+'<td><hr></td>'
								+'</tr>'
								+'<tr>'
									+'<td>4</td>'
								+'</tr>'
							+'</table>',
			secondFraction: '<table>'
								+'<tr>'
									+'<td rowspan="3" class=hugeAndThin>(</td>'
									+'<td rowspan="3" class=bigger>-</td>'
									+'<td>8</td>'
									+'<td rowspan="3" class=hugeAndThin>&nbsp;)</td>'
									+'<td rowspan="3"><span class=exponentLarge><sup>2</sup></span></td>'
								+'</tr>'
								+'<tr>'
									+'<td><hr></td>'
								+'</tr>'
								+'<tr>'
									+'<td>3</td>'
								+'</tr>'
							+'</table>',
			thirdFraction: '<table>'
								+'<tr>'
									+'<td rowspan="3" class=hugeAndThin>(</td>'
									+'<td rowspan="3" class=bigger>-</td>'
									+'<td>3</td>'
									+'<td rowspan="3" class=hugeAndThin>&nbsp;)</td>'
									+'<td rowspan="3"><span class=exponentLarge><sup>2</sup></span></td>'
								+'</tr>'
								+'<tr>'
									+'<td><hr></td>'
								+'</tr>'
								+'<tr>'
									+'<td>2</td>'
								+'</tr>'
							+'</table>',
			fourthFraction: '<table>'
								+'<tr>'
									+'<td rowspan="3" class=hugeAndThin>(&nbsp;</td>'
									+'<td rowspan="3" class=bigger>-</td>'
									+'<td>'
										+'<table>'
											+'<tr>'
												+'<td>27<td>'
											+'</tr>'
											+'<tr>'
												+'<td><hr><td>'
											+'</tr>'
											+'<tr>'
												+'<td>64<td>'
											+'</tr>'
										+'</table>'
									+'</td>'
									+'<td rowspan="3" class=hugeAndThin>)&nbsp;</td>'
								+'</tr>'
							+'</table>',
			wb: dataUtils.pre('\\ordopssimple{' +
						'\\grp'
							+'{\\btn'
								+'{-}'
								+'{F}'
								+'{bigger}'
							+'}' 
							+'{\\btn'
								+'{$$firstFraction}'
								+'{T}'
								+'{large}'
							+'}'
							+'{\\btn'
								+'{*}'
								+'{F}'
								+'{bigger}'
							+'}'
							+'{\\btn'
								+'{$$secondFraction}'
								+'{F}'
								+'{large}'
							+'}'
							+'{\\btn'
								+'{-}'
								+'{F}'
								+'{bigger}'
							+'}' 
							+'{\\btn'
								+'{$$thirdFraction}'
								+'{F}'
								+'{large}'
							+'},'
							+'\\frac{\\input{-27}}{\\input{64}},'
						+'\\grp'
							+'{\\btn'
								+'{-}'
								+'{F}'
								+'{bigger}'
							+'}' 
							+'{\\css'
								+'{\\grp'
									+'{str{(}}'
									+'{str{-}}'
									+'{\\frac{\\fracstr{27}}{\\fracstr{64}}}'
									+'{str{)}}'
								+'}'
								+'{large}'
							+'}'
							+'{\\btn'
								+'{*}'
								+'{F}'
								+'{bigger}'
							+'}'
							+'{\\btn'
								+'{$$secondFraction}'
								+'{T}'
								+'{large}'
							+'}'
							+'{\\btn'
								+'{-}'
								+'{F}'
								+'{bigger}'
							+'}' 
							+'{\\btn'
								+'{$$thirdFraction}'
								+'{F}'
								+'{large}'
							+'},'
							+'\\frac{\\input{64}}{\\input{9}},'
                       +'\\grp'
							+'{\\btn'
								+'{-}'
								+'{F}'
								+'{bigger}'
							+'}' 
							+'{\\css'
								+'{\\grp'
									+'{str{(}}'
									+'{str{-}}'
									+'{\\frac{\\fracstr{27}}{\\fracstr{64}}}'
									+'{str{)}}'
								+'}'
								+'{large}'
							+'}'
							+'{\\btn'
								+'{*}'
								+'{F}'
								+'{bigger}'
							+'}'
							+'{\\css'
								+'{\\frac{\\fracstr{64}}{\\fracstr{9}}}'
								+'{large}'
							+'}'
							+'{\\btn'
								+'{-}'
								+'{F}'
								+'{bigger}'
							+'}' 
							+'{\\btn'
								+'{$$thirdFraction}'
								+'{T}'
								+'{large}'
							+'},'
							+'\\frac{\\input{9}}{\\input{4}},'
						+'\\grp'
							+'{\\btn'
								+'{-}'
								+'{F}'
								+'{bigger}'
							+'}' 
							+'{\\css'
								+'{\\grp'
									+'{str{(}}'
									+'{str{-}}'
									+'{\\frac{\\fracstr{27}}{\\fracstr{64}}}'
									+'{str{)}}'
								+'}'
								+'{large}'
							+'}'
							+'{\\btn'
								+'{*}'
								+'{T}'
								+'{large}'
							+'}'
							+'{\\css'
								+'{\\frac{\\fracstr{64}}{\\fracstr{9}}}'
								+'{large}'
							+'}'
							+'{\\btn'
								+'{-}'
								+'{F}'
								+'{bigger}'
							+'}' 
							+'{\\css'
								+'{\\frac{\\fracstr{9}}{\\fracstr{4}}}'
								+'{large}'
							+'},'
							+'\\grp{\\input{-3}},'
						+'\\grp'
							+'{\\btn'
								+'{- ( - 3 )}'
								+'{T}'
								+'{bigger}'
							+'}' 
							+'{\\btn'
								+'{-}'
								+'{F}'
								+'{bigger}'
							+'}' 
							+'{\\css'
								+'{\\frac{\\fracstr{9}}{\\fracstr{4}}}'
								+'{large}'
							+'},'
							+'\\grp{\\input{3}},'
						+'\\grp'
							+'{\\css'
								+'{\\str{3}}'
								+'{large}'
							+'}' 
							+'{\\btn'
								+'{-}'
								+'{T}'
								+'{bigger}'
							+'}' 
							+'{\\css'
								+'{\\frac{\\fracstr{9}}{\\fracstr{4}}}'
								+'{large}'
							+'},'
							+'\\frac{\\input{3}}{\\input{4}},'
						+'\\frac{\\input{3}}{\\input{4}}' 
                    +'}{terms}'
						+'{<table><tr><td>evaluate&nbsp;</td><td>&nbsp;</td><td>$$firstFraction</td></tr></table>}'
						+'{<table><tr><td>evaluate&nbsp;</td><td>&nbsp;</td><td>$$secondFraction</td></tr></table>}'
						+'{<table><tr><td>evaluate&nbsp;</td><td>&nbsp;</td><td>$$thirdFraction</td></tr></table>}'
						+'{<table>'
							+'<tr>'
								+'<td>'
									+'<table>'
										+'<tr>'
											+'<td rowspan="3" class=hugeAndThin>(</td>'
											+'<td rowspan="3" class=bigger>-</td>'
											+'<td>27<td>'
											+'<td rowspan="3" class=hugeAndThin>)</td>'
										+'</tr>'
										+'<tr>'
											+'<td><hr><td>'
										+'</tr>'
										+'<tr>'
											+'<td>64<td>'
										+'</tr>'
									+'</table>'
								+'</td>'
								+'<td>&nbsp; <span class=large>*</span> &nbsp;</td>'
								+'<td>'
									+'<table>'
										+'<tr>'
											+'<td>64<td>'
										+'</tr>'
										+'<tr>'
											+'<td><hr><td>'
										+'</tr>'
										+'<tr>'
											+'<td>9<td>'
										+'</tr>'
									+'</table>'
								+'</td>'
							+'</tr>'
						+'</table>}'
						+'{<span class=bigger>-</span> ( <span class=bigger>-</span>3 )}'
						+'{<table><tr><td>3</td><td>&nbsp; - &nbsp;</td><td><table><tr><td>9</td></tr><tr><td><hr></td></tr><tr><td>4</td></tr></table></td></tr></table>}'),
			template: 'evaluateFractionBase' 
			}
			,
			{ // problem 39
			prob: dataUtils.pre(
									'\\grp'
										+'{\\str{-}}'
										+'{\\str{(}}'
										+'{\\frac{\\fracstr{1}}{\\fracstr{4}}}'
										+'{\\str{)}}'
										+'{\\css'
											+'{\\html{<sup>2</sup>}}'
											+'{exponentLarge}'
										+'}'
										+'{\\str{-}}'
										+'{\\css{\\html{[}}{hugeAndThin}}'
										+'{\\str{(}}'
										+'{\\mixed{\\str{-}}{\\frac{\\fracstr{1}}{\\fracstr{3}}}}'
										+'{\\str{)}}'
										+'{\\css'
											+'{\\html{<sup>2</sup>}}'
											+'{exponentLarge}'
										+'}'
										+'{\\str{/}}'
										+'{\\str{(}}'
										+'{\\frac{\\fracstr{4}}{\\fracstr{3}}}'
										+'{\\str{)}}'
										+'{\\css'
											+'{\\html{<sup>2</sup>}}'
											+'{exponentLarge}'
										+'}'
										+'{\\str{]}}'
								),
			ans: dataUtils.pre('\\frac{\\input{-1}}{\\input{8}}'),
			firstFraction: '<table>'
								+'<tr>'
									+'<td rowspan="3" class=hugeAndThin>(&nbsp;</td>'
									+'<td>1</td>'
									+'<td rowspan="3" class=hugeAndThin>&nbsp;)</td>'
									+'<td rowspan="3"><span class=exponentLarge><sup>2</sup></span></td>'
								+'</tr>'
								+'<tr>'
									+'<td><hr></td>'
								+'</tr>'
								+'<tr>'
									+'<td>4</td>'
								+'</tr>'
							+'</table>',
			secondFraction: '<table>'
								+'<tr>'
									+'<td rowspan="3" class=hugeAndThin>(</td>'
									+'<td rowspan="3" class=bigger>-</span></td>'
									+'<td>1</td>'
									+'<td rowspan="3" class=hugeAndThin>&nbsp;)</td>'
									+'<td rowspan="3"><span class=exponentLarge><sup>2</sup></span></td>'
								+'</tr>'
								+'<tr>'
									+'<td><hr></td>'
								+'</tr>'
								+'<tr>'
									+'<td>3</td>'
								+'</tr>'
							+'</table>',
			thirdFraction: '<table>'
								+'<tr>'
									+'<td rowspan="3" class=hugeAndThin>(&nbsp;</td>'
									+'<td>4</td>'
									+'<td rowspan="3" class=hugeAndThin>&nbsp;)</td>'
									+'<td rowspan="3"><span class=exponentLarge><sup>2</sup></span></td>'
								+'</tr>'
								+'<tr>'
									+'<td><hr></td>'
								+'</tr>'
								+'<tr>'
									+'<td>3</td>'
								+'</tr>'
							+'</table>',
			wb: dataUtils.pre('\\ordopssimple{' +
						'\\grp'
							+'{str{-}}'
							+'{\\btn'
								+'{$$firstFraction}'
								+'{F}'
								+'{large}'
							+'}'
							+'{\\btn'
								+'{-}'
								+'{F}'
								+'{bigger}'
							+'}'
							+'{\\css{\\html{[}}{hugeAndThin}}'
							+'{\\btn'
								+'{$$secondFraction}'
								+'{T}'
								+'{large}'
							+'}'
							+'{\\btn'
								+'{/}'
								+'{F}'
								+'{bigger}'
							+'}' 
							+'{\\btn'
								+'{$$thirdFraction}'
								+'{F}'
								+'{large}'
							+'}'
							+'{\\str{]}},'
							+'\\frac{\\input{1}}{\\input{9}},'
                       +'\\grp'
					   		+'{str{-}}'
							+'{\\btn'
								+'{$$firstFraction}'
								+'{F}'
								+'{large}'
							+'}'
							+'{\\btn'
								+'{-}'
								+'{F}'
								+'{bigger}'
							+'}'
							+'{\\css{\\html{[}}{hugeAndThin}}'
							+'{\\css'
								+'{\\frac{\\fracstr{1}}{\\fracstr{9}}}'
								+'{large}'
							+'}'
							+'{\\btn'
								+'{/}'
								+'{F}'
								+'{bigger}'
							+'}' 
							+'{\\btn'
								+'{$$thirdFraction}'
								+'{T}'
								+'{large}'
							+'}'
							+'{\\str{]}},'
							+'\\frac{\\input{16}}{\\input{9}},'
						+'\\grp'
							+'{str{-}}'
							+'{\\btn'
								+'{$$firstFraction}'
								+'{F}'
								+'{large}'
							+'}'
							+'{\\btn'
								+'{-}'
								+'{F}'
								+'{bigger}'
							+'}'
							+'{\\css{\\html{[}}{hugeAndThin}}'
							+'{\\css'
								+'{\\frac{\\fracstr{1}}{\\fracstr{9}}}'
								+'{large}'
							+'}'
							+'{\\btn'
								+'{/}'
								+'{T}'
								+'{bigger}'
							+'}' 
							+'{\\css'
								+'{\\frac{\\fracstr{16}}{\\fracstr{9}}}'
								+'{large}'
							+'}'
							+'{\\str{]}},'
							+'\\frac{\\input{1}}{\\input{16}},'
						+'\\grp'
							+'{str{-}}'
							+'{\\btn'
								+'{$$firstFraction}'
								+'{T}'
								+'{large}'
							+'}'
							+'{\\btn'
								+'{-}'
								+'{F}'
								+'{bigger}'
							+'}'
							+'{\\css'
								+'{\\frac{\\fracstr{1}}{\\fracstr{16}}}'
								+'{large}'
							+'},'
							+'\\frac{\\input{1}}{\\input{16}},'
						
						+'\\grp'
							+'{\\css'
								+'{\\mixed{\\str{-}}{\\frac{\\fracstr{1}}{\\fracstr{16}}}}'
								+'{large}'
							+'}'
							+'{\\btn'
								+'{-}'
								+'{T}'
								+'{bigger}'
							+'}' 
							+'{\\css'
								+'{\\frac{\\fracstr{1}}{\\fracstr{16}}}'
								+'{large}'
							+'},'
							+'\\frac{\\input{-1}}{\\input{8}},'
						+'\\mixed{\\fracstr{-}}{\\frac{\\fracstr{1}}{\\fracstr{8}}}' 
                    +'}{terms}'
						+'{<table><tr><td>evaluate&nbsp;</td><td>&nbsp;</td><td>$$secondFraction</td></tr></table>}'
						+'{<table><tr><td>evaluate&nbsp;</td><td>&nbsp;</td><td>$$thirdFraction</td></tr></table>}'
						+'{<table>'
							+'<tr>'
								+'<td>'
									+'<table>'
										+'<tr>'
											+'<td>1<td>'
										+'</tr>'
										+'<tr>'
											+'<td><hr><td>'
										+'</tr>'
										+'<tr>'
											+'<td>9<td>'
										+'</tr>'
									+'</table>'
								+'</td>'
								+'<td>&nbsp; <span class=bigger>&divide;</span> &nbsp;</td>'
								+'<td>'
									+'<table>'
										+'<tr>'
											+'<td>16<td>'
										+'</tr>'
										+'<tr>'
											+'<td><hr><td>'
										+'</tr>'
										+'<tr>'
											+'<td>9<td>'
										+'</tr>'
									+'</table>'
								+'</td>'
							+'</tr>'
						+'</table>}'
						+'{<table><tr><td>evaluate&nbsp;</td><td>&nbsp;</td><td>$$firstFraction</td></tr></table>}'
						+'{<table>'
							+'<tr>'
								+'<td class=bigger>-&nbsp;</td>'
								+'<td>'
									+'<table>'
										+'<tr>'
											+'<td>1<td>'
										+'</tr>'
										+'<tr>'
											+'<td><hr><td>'
										+'</tr>'
										+'<tr>'
											+'<td>16<td>'
										+'</tr>'
									+'</table>'
								+'</td>'
								+'<td>&nbsp; <span class=bigger>-</span> &nbsp;</td>'
								+'<td>'
									+'<table>'
										+'<tr>'
											+'<td>1<td>'
										+'</tr>'
										+'<tr>'
											+'<td><hr><td>'
										+'</tr>'
										+'<tr>'
											+'<td>16<td>'
										+'</tr>'
									+'</table>'
								+'</td>'
							+'</tr>'
						+'</table>}'
						),
			template: 'evaluateFractionBase' 
			}
			,
			{ // problem 40
			prob: dataUtils.pre(
									'\\grp'
										+'{\\str{-}}'
										+'{\\str{(}}'
										+'{\\frac{\\fracstr{5}}{\\fracstr{2}}}'
										+'{\\str{)}}'
										+'{\\css'
											+'{\\html{<sup>2</sup>}}'
											+'{exponentLarge}'
										+'}'
										+'{\\str{-}}'
										+'{\\css{\\html{[}}{hugeAndThin}}'
										+'{\\str{(}}'
										+'{\\mixed{\\str{-}}{\\frac{\\fracstr{2}}{\\fracstr{9}}}}'
										+'{\\str{)}}'
										+'{\\css'
											+'{\\html{<sup>2</sup>}}'
											+'{exponentLarge}'
										+'}'
										+'{\\str{*}}'
										+'{\\str{(}}'
										+'{\\mixed{\\str{-}}{\\frac{\\fracstr{3}}{\\fracstr{2}}}}'
										+'{\\str{)}}'
										+'{\\css'
											+'{\\html{<sup>3</sup>}}'
											+'{exponentLarge}'
										+'}'
										+'{\\str{]}}'
								),
			ans: dataUtils.pre('\\frac{\\input{-73}}{\\input{12}}'),
			firstFraction: '<table>'
								+'<tr>'
									+'<td rowspan="3" class=hugeAndThin>(&nbsp;</td>'
									+'<td>5</td>'
									+'<td rowspan="3" class=hugeAndThin>&nbsp;)</td>'
									+'<td rowspan="3"><span class=exponentLarge><sup>2</sup></span></td>'
								+'</tr>'
								+'<tr>'
									+'<td><hr></td>'
								+'</tr>'
								+'<tr>'
									+'<td>2</td>'
								+'</tr>'
							+'</table>',
			secondFraction: '<table>'
								+'<tr>'
									+'<td rowspan="3" class=hugeAndThin>(</td>'
									+'<td rowspan="3" class=bigger>-</td>'
									+'<td>2</td>'
									+'<td rowspan="3" class=hugeAndThin>&nbsp; )</td>'
									+'<td rowspan="3"><span class=exponentLarge><sup>2</sup></span></td>'
								+'</tr>'
								+'<tr>'
									+'<td><hr></td>'
								+'</tr>'
								+'<tr>'
									+'<td>9</td>'
								+'</tr>'
							+'</table>',
			thirdFraction: '<table>'
								+'<tr>'
									+'<td rowspan="3" class=hugeAndThin>(</td>'
									+'<td rowspan="3" class=bigger>-</td>'
									+'<td>3</td>'
									+'<td rowspan="3" class=hugeAndThin>&nbsp; )</td>'
									+'<td rowspan="3"><span class=exponentLarge><sup>3</sup></span></td>'
								+'</tr>'
								+'<tr>'
									+'<td><hr></td>'
								+'</tr>'
								+'<tr>'
									+'<td>2</td>'
								+'</tr>'
							+'</table>',
			wb: dataUtils.pre('\\ordopssimple{' +
						'\\grp'
							+'{str{-}}'
							+'{\\btn'
								+'{$$firstFraction}'
								+'{F}'
								+'{large}'
							+'}'
							+'{\\btn'
								+'{-}'
								+'{F}'
								+'{bigger}'
							+'}'
							+'{\\css{\\html{[}}{hugeAndThin}}'
							+'{\\btn'
								+'{$$secondFraction}'
								+'{T}'
								+'{large}'
							+'}'
							+'{\\btn'
								+'{*}'
								+'{F}'
								+'{large}'
							+'}' 
							+'{\\btn'
								+'{$$thirdFraction}'
								+'{F}'
								+'{large}'
							+'}'
							+'{\\str{]}},'
							+'\\frac{\\input{4}}{\\input{81}},'
                       +'\\grp'
					   		+'{str{-}}'
							+'{\\btn'
								+'{$$firstFraction}'
								+'{F}'
								+'{large}'
							+'}'
							+'{\\btn'
								+'{-}'
								+'{F}'
								+'{bigger}'
							+'}'
							+'{\\css{\\html{[}}{hugeAndThin}}'
							+'{\\css'
								+'{\\frac{\\fracstr{4}}{\\fracstr{81}}}'
								+'{large}'
							+'}'
							+'{\\btn'
								+'{*}'
								+'{F}'
								+'{large}'
							+'}' 
							+'{\\btn'
								+'{$$thirdFraction}'
								+'{T}'
								+'{large}'
							+'}'
							+'{\\str{]}},'
							+'\\frac{\\input{-27}}{\\input{8}},'
						+'\\grp'
							+'{str{-}}'
							+'{\\btn'
								+'{$$firstFraction}'
								+'{F}'
								+'{large}'
							+'}'
							+'{\\btn'
								+'{-}'
								+'{F}'
								+'{bigger}'
							+'}'
							+'{\\css{\\html{[}}{hugeAndThin}}'
							+'{\\css'
								+'{\\frac{\\fracstr{4}}{\\fracstr{81}}}'
								+'{large}'
							+'}'
							+'{\\btn'
								+'{*}'
								+'{T}'
								+'{large}'
							+'}'
							+'{\\str{(}}'
							+'{\\css'
								+'{\\mixed{\\fracstr{-}}{\\frac{\\fracstr{27}}{\\fracstr{8}}}}'
								+'{large}'
							+'}'
							+'{\\str{)}}'
							+'{\\str{]}},'
							+'\\frac{\\input{-1}}{\\input{6}},'
						+'\\grp'
							+'{str{-}}'
							+'{\\btn'
								+'{$$firstFraction}'
								+'{T}'
								+'{large}'
							+'}'
							+'{\\btn'
								+'{-}'
								+'{F}'
								+'{bigger}'
							+'}'
							+'{\\css{\\html{[}}{hugeAndThin}}'
							+'{\\css'
								+'{\\mixed{\\fracstr{-}}{\\frac{\\fracstr{1}}{\\fracstr{6}}}}'
								+'{large}'
							+'}'
							+'{\\str{]}},'
							+'\\frac{\\input{25}}{\\input{4}},'
						
						+'\\grp'
							+'{str{-}}'
							+'{\\css'
								+'{\\frac{\\fracstr{25}}{\\fracstr{4}}}'
								+'{large}'
							+'}'
							+'{\\btn'
								+'{-}'
								+'{T}'
								+'{bigger}'
							+'}' 
							+'{\\css{\\html{[}}{hugeAndThin}}'
							+'{\\css'
								+'{\\mixed{\\fracstr{-}}{\\frac{\\fracstr{1}}{\\fracstr{6}}}}'
								+'{large}'
							+'}'
							+'{\\str{]}},'
							+'\\frac{\\input{-73}}{\\input{12}},'
						+'\\frac{\\fracstr{-73}}{\\fracstr{12}}' 
                    +'}{terms}'
						+'{<table><tr><td>evaluate&nbsp;</td><td>&nbsp;</td><td>$$secondFraction</td></tr></table>}'
						+'{<table><tr><td>evaluate&nbsp;</td><td>&nbsp;</td><td>$$thirdFraction</td></tr></table>}'
						+'{<table>'
							+'<tr>'
								+'<td>'
									+'<table>'
										+'<tr>'
											+'<td>4<td>'
										+'</tr>'
										+'<tr>'
											+'<td><hr><td>'
										+'</tr>'
										+'<tr>'
											+'<td>81<td>'
										+'</tr>'
									+'</table>'
								+'</td>'
								+'<td>&nbsp; <span class=large>*</span> &nbsp;</td>'
								+'<td><span class=hugeAndThin>(</span></td>'
								+'<td class=bigger>-&nbsp;</td>'
								+'<td>'
									+'<table>'
										+'<tr>'
											+'<td>27<td>'
										+'</tr>'
										+'<tr>'
											+'<td><hr><td>'
										+'</tr>'
										+'<tr>'
											+'<td>8<td>'
										+'</tr>'
									+'</table>'
								+'</td>'
								+'<td><span class=hugeAndThin>)</span></td>'
							+'</tr>'
						+'</table>}'
						+'{<table><tr><td>evaluate&nbsp;</td><td>&nbsp;</td><td>$$firstFraction</td></tr></table>}'
						+'{<table>'
							+'<tr>'
								+'<td class=bigger>-&nbsp;</td>'
								+'<td>'
									+'<table>'
										+'<tr>'
											+'<td>25<td>'
										+'</tr>'
										+'<tr>'
											+'<td><hr><td>'
										+'</tr>'
										+'<tr>'
											+'<td>4<td>'
										+'</tr>'
									+'</table>'
								+'</td>'
								+'<td>&nbsp; <span class=bigger>-</span> &nbsp;</td>'
								+'<td>&nbsp; [ &nbsp;</td>'
								+'<td>&nbsp; <span class=bigger>-</span> &nbsp;</td>'
								+'<td>'
									+'<table>'
										+'<tr>'
											+'<td>1<td>'
										+'</tr>'
										+'<tr>'
											+'<td><hr><td>'
										+'</tr>'
										+'<tr>'
											+'<td>6<td>'
										+'</tr>'
									+'</table>'
								+'</td>'
								+'<td>&nbsp; ] &nbsp;</td>'
							+'</tr>'
						+'</table>}'
						),
			template: 'evaluateFractionBase' 
			}
        ];
		shuffle = [
				{ problems: [1,2], total: 1},
				{ problems: [3,4], total: 1},
				{ problems: [5,6], total: 1},
				{ problems: [7,8], total: 1},
				{ problems: [9,10], total: 1},
				{ problems: [11,12], total: 1},
				{ problems: [13,14], total: 1},
				{ problems: [15,16], total: 1},
				{ problems: [17,18], total: 1},
				{ problems: [19,20], total: 1},
				{ problems: [21,22], total: 1},
				{ problems: [23,24], total: 1},
				{ problems: [25,26], total: 1},
				{ problems: [27,28], total: 1},
				{ problems: [29,30], total: 1},
				{ problems: [31,32], total: 1},
				{ problems: [33,34], total: 1},
				{ problems: [35,36], total: 1},
				{ problems: [37,38], total: 1},
				{ problems: [39,40], total: 1}
		];
		//return dataUtils.build(desc, template, data);
    
    	return dataUtils.build(desc, template, data, shuffle);
}]);



