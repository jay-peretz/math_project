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
                         problem: '\\rowgrp'+
                                	'{\\str{Solve:}}' +
									'{\\html{&nbsp;}}' +
                                	'{$prob}',
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
                         problem: '\\rowgrp'+
                                	'{\\str{Solve:}}' +
									'{\\html{&nbsp;}}' +
                                	'{$prob}',
                        answer: '$wb',
                        controls: {
                            "checkAnswer": true,
                            "help": true
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
                        '\\grp{\\html{<span class=bigger>4096</span>}}{\\btn{-}{F}{bigger}}{\\btn{6 <sup>5</sup>}{T}{large}},' +
                        '\\input{7776},' +
						'\\grp{\\html{<span class=bigger>4096</span>}}{\\btn{-}{T}{bigger}}{\\html{<span class=bigger>7776</span>}},' +
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
                        '\\grp{\\html{<span class=bigger>512</span>}}{\\btn{-}{F}{bigger}}{\\btn{12 <sup>3</sup>}{T}{large}},' +
                        '\\input{1728},' +
						'\\grp{\\html{<span class=bigger>512</span>}}{\\btn{-}{T}{bigger}}{\\html{<span class=bigger>1728</span>}},' +
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
						'\\grp{\\html{<span class=bigger>5</span>}}{\\btn{-}{F}{bigger}}{\\btn{3 <sup>2</sup>}{T}{large}}{\\btn{&bull;}{F}{large}}{\\html{<span class=bigger>2</span>}},' +
                        '\\input{9},' +
                        '\\grp{\\html{<span class=bigger>5</span>}}{\\btn{-}{F}{bigger}}{\\html{<span class=bigger>9</span>}}{\\btn{&bull;}{T}{large}}{\\html{<span class=bigger>2</span>}},' +
                        '\\input{18},' +
						'\\grp{\\html{<span class=bigger>5</span>}}{\\btn{-}{T}{bigger}}{\\html{<span class=bigger>18</span>}},' +
						'\\input{-13},' +
						'\\sign{-13}' +
                    '}{terms}{evaluate&nbsp; 3<sup>2</sup>}{9 &bull; 2}{5 - 18}'),
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
						'\\grp{\\html{<span class=bigger>20</span>}}{\\btn{-}{F}{bigger}}{\\btn{6 <sup>2</sup>}{T}{large}}{\\btn{&divide;}{F}{bigger}}{\\str{(}}{\\html{<span class=bigger>-2</span>}}{\\str{)}},' +
                        '\\input{36},' +
                        '\\grp{\\html{<span class=bigger>20</span>}}{\\btn{-}{F}{bigger}}{\\html{<span class=bigger>36</span>}}{\\btn{&divide;}{T}{bigger}}{\\str{(}}{\\html{<span class=bigger>-2</span>}}{\\str{)}},' +
                        '\\input{-18},' +
						'\\grp{\\html{<span class=bigger>20</span>}}{\\btn{-}{T}{bigger}}{\\html{( <span class=bigger>-18</span> )}},' +
						'\\input{38},' +
						'\\sign{38}' +
                    '}{terms}{evaluate&nbsp; 6<sup>2</sup>}{36 &divide; (-2)}{20 - (-18)}'),
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
						'\\grp{\\btn{- 2 <sup>3</sup>}{T}{large}}{\\btn{-}{F}{bigger}}{\\html{<span class=bigger>4</span>}}{\\btn{&bull;}{F}{large}}{\\html{<span class=bigger>-</span><span class=bigger>3</span>}},' +
                        '\\input{-8},' +
                        '\\grp{\\html{<span class=bigger>-</span><span class=bigger>8</span>}}{\\btn{-}{F}{bigger}}{\\html{<span class=bigger>4</span>}}{\\btn{&bull;}{T}{large}}{\\html{<span class=bigger>-</span><span class=bigger>3</span>}},' +
                        '\\input{-12},' +
						'\\grp{\\html{<span class=bigger>-</span><span class=bigger>8</span>}}{\\btn{-}{T}{bigger}}{\\str{(}}{\\html{<span class=bigger>-</span><span class=bigger>12</span>}}{\\str{)}},' +
						'\\input{4},' +
						'\\sign{4}' +
                    '}{terms}{evaluate&nbsp; -2<sup>3</sup>}{4 &bull; -3}{-8 - (-12)}'),
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
						'\\grp{\\btn{- 11 <sup>2</sup>}{T}{large}}{\\btn{-}{F}{bigger}}{\\html{<span class=bigger>18</span>}}{\\btn{&divide;}{F}{bigger}}{\\html{<span class=bigger>6</span>}},' +
                        '\\input{-121},' +
                        '\\grp{\\html{<span class=bigger>-</span><span class=bigger>121</span>}}{\\btn{-}{F}{bigger}}{\\html{<span class=bigger>18</span>}}{\\btn{&divide;}{T}{bigger}}{\\html{<span class=bigger>6</span>}},' +
                        '\\input{3},' +
						'\\grp{\\html{<span class=bigger>-</span><span class=bigger>121</span>}}{\\btn{-}{T}{bigger}}{\\html{<span class=bigger>3</span>}},' +
						'\\input{-124},' +
						'\\sign{-124}' +
                    '}{terms}{evaluate&nbsp; -11<sup>2</sup>}{18 &divide; 6}{-121 - 3}'),
			template: 'evaluate' 
			}
			,
			{ // problem 17
			problemStatement: dataUtils.pre(
											'{\\grp'
												+'{\\exp{\\str{-10}}{\\str{2}}}'
												+'{\\str{/&nbsp; 4&nbsp; - &nbsp; 5 &nbsp; * &nbsp; 7}}'
											+'}'
								),
			answer: '-10',
			wb: dataUtils.pre('\\ordopssimple{' +
						'\\grp{\\btn{- 10 <sup>2</sup>}{T}{large}}{\\btn{&divide;}{F}{bigger}}{\\html{<span class=bigger>4</span>}}{\\btn{-}{F}{bigger}}{\\html{<span class=bigger>5</span>}}{\\btn{&bull;}{F}{large}}{\\html{<span class=bigger>7</span>}},' +
                        '\\input{-100},' +
                        '\\grp{\\html{<span class=bigger>100</span>}}{\\btn{&divide;}{T}{bigger}}{\\html{<span class=bigger>4</span>}}{\\btn{-}{F}{bigger}}{\\html{<span class=bigger>5</span>}}{\\btn{&bull;}{F}{large}}{\\html{<span class=bigger>7</span>}},' +
                        '\\input{25},' +
						'\\grp{\\html{<span class=bigger>25</span>}}{\\btn{-}{F}{bigger}}{\\html{<span class=bigger>5</span>}}{\\btn{&bull;}{T}{large}}{\\html{<span class=bigger>7</span>}},' +
						'\\input{35},' +
						'\\grp{\\html{<span class=bigger>25</span>}}{\\btn{-}{T}{bigger}}{\\html{<span class=bigger>35</span>}},' +
						'\\input{-10},' +
						'\\sign{-10}' +
                    '}{terms}{evaluate&nbsp; -10<sup>2</sup>}{100 &divide; 4}{5 &bull; 7}{25 - 35}'),
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
						'\\grp{\\btn{( - 6 ) <sup>2</sup>}{T}{large}}{\\btn{&bull;}{F}{large}}{\\html{<span class=bigger>2</span>}}{\\btn{+}{F}{large}}{\\html{<span class=bigger>27</span>}}{\\btn{&divide;}{F}{bigger}}{\\html{<span class=bigger>-</span><span class=bigger>3</span>}},' +
                        '\\input{36},' +
                        '\\grp{\\html{<span class=bigger>36</span>}}{\\btn{&bull;}{T}{large}}{\\html{<span class=bigger>2</span>}}{\\btn{+}{F}{large}}{\\html{<span class=bigger>27</span>}}{\\btn{&divide;}{F}{bigger}}{\\html{<span class=bigger>-</span><span class=bigger>3</span>}},' +
                        '\\input{72},' +
						'\\grp{\\html{<span class=bigger>72</span>}}{\\btn{+}{F}{large}}{\\html{<span class=bigger>27</span>}}{\\btn{&divide;}{T}{bigger}}{\\html{<span class=bigger>-</span><span class=bigger>3</span>}},' +
						'\\input{-9},' +
						'\\grp{\\html{<span class=bigger>72</span>}}{\\btn{+}{T}{large}}{\\html{<span class=hugeAndThin>(</span> <span class=bigger>-</span><span class=bigger>9</span> <span class=hugeAndThin>)</span>}},' +
						'\\input{63},' +
						'\\sign{63}' +
                    '}{terms}{evaluate&nbsp; ( -6 ) <sup>2</sup>}{100 &bull; 4}{5 &bull; 7}{25 - 35}'),
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
						'\\grp{\\btn{- ( - 5 ) <sup>2</sup>}{T}{large}}{\\btn{-}{F}{bigger}}{\\btn{2 <sup>3</sup>}{F}{large}},' +
                        '\\input{-25},' +
                        '\\grp{\\html{<span class=bigger>-</span> <span class=bigger>25</span>}}{\\btn{-}{F}{bigger}}{\\btn{2 <sup>3</sup>}{T}{large}},' +
                        '\\input{8},' +
						'\\grp{\\html{<span class=bigger>-</span> <span class=bigger>25</span>}}{\\btn{-}{T}{bigger}}{\\html{<span class=bigger>8</span>}},' +
						'\\input{-33},' +
						'\\sign{-33}' +
                    '}{terms}{evaluate&nbsp; - ( -5 ) <sup>2</sup>}{evaluate&nbsp; 2<sup>3</sup>}{-25 - 8}'),
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
						'\\grp{\\btn{- ( - 7 ) <sup>2</sup>}{T}{large}}{\\btn{-}{F}{bigger}}{\\btn{1 <sup>3</sup>}{F}{large}},' +
                        '\\input{-49},' +
                        '\\grp{\\html{<span class=bigger>-</span> <span class=bigger>49</span>}}{\\btn{-}{F}{bigger}}{\\btn{1 <sup>3</sup>}{T}{large}},' +
                        '\\input{1},' +
						'\\grp{\\html{<span class=bigger>-</span> <span class=bigger>49</span>}}{\\btn{-}{T}{bigger}}{\\html{<span class=bigger>1</span>}},' +
						'\\input{-50},' +
						'\\sign{-50}' +
                    '}{terms}{evaluate&nbsp; - ( -7 ) <sup>2</sup>}{evaluate&nbsp; 1<sup>3</sup>}{-49 - 1}'),
			template: 'evaluate' 
			}
			,
            { // problem 21
			problemStatement: dataUtils.pre(
											'{\\grp'
												+'{\\exp{\\str{(-2 )}}{\\str{3}}}'
												+'{\\str{( -8 &nbsp;-&nbsp; 2 &nbsp; &bull; &nbsp; 1 )}}'
											+'}'
								),
			answer: '80',
			wb: dataUtils.pre('\\ordopssimple{' +
						'\\grp{\\btn{( - 2 ) <sup>3</sup>}{T}{large}}{\\str{(}}{\\html{<span class=bigger>-</span><span class=bigger>8</span>}}{\\btn{-}{F}{bigger}}{\\html{<span class=bigger>2</span>}}{\\btn{&bull;}{F}{large}}{\\html{<span class=bigger>1</span>}}{\\str{)}},' +
                        '\\input{-8},' +
                        '\\grp{\\html{<span class=bigger>-</span><span class=bigger>8</span>}}{\\str{(}}{\\html{<span class=bigger>-</span><span class=bigger>8</span>}}{\\btn{-}{F}{bigger}}{\\html{<span class=bigger>2</span>}}{\\btn{&bull;}{T}{large}}{\\html{<span class=bigger>1</span>}}{\\str{)}},' +
                        '\\input{2},' +
						'\\grp{\\html{<span class=bigger>-</span><span class=bigger>8</span>}}{\\str{(}}{\\html{<span class=bigger>-</span><span class=bigger>8</span>}}{\\btn{-}{T}{bigger}}{\\html{<span class=bigger>2</span>}}{\\str{)}},' +
						'\\input{-10},' +
						'\\grp{\\btn{- 8&nbsp;( -10 )}{T}{bigger}},' +
						'\\input{80},' +
						'\\sign{80}' +
                    '}{terms}{evaluate&nbsp; ( -2 ) <sup>3</sup>}{2 &bull; 1}{-8 - 2}{-8 ( -10 )}'),
			template: 'evaluate' 
			}
			,
            { // problem 22
			problemStatement: dataUtils.pre(
											'{\\grp'
												+'{\\exp{\\str{(-3 )}}{\\str{3}}}'
												+'{\\str{( -5 &nbsp;/&nbsp; -1 &nbsp; - &nbsp; 4 )}}'
											+'}'
								),
			answer: '-27',
			wb: dataUtils.pre('\\ordopssimple{' +
						'\\grp{\\btn{( - 3 ) <sup>3</sup>}{T}{large}}{\\str{(}}{\\html{<span class=bigger>-</span><span class=bigger>5</span>}}{\\btn{&divide;}{F}{bigger}}{\\html{<span class=bigger>-</span><span class=bigger>1</span>}}{\\btn{-}{F}{bigger}}{\\html{<span class=bigger>4</span>}}{\\str{)}},' +
                        '\\input{-27},' +
                        '\\grp{\\html{<span class=bigger>-</span><span class=bigger>27</span>}}{\\str{(}}{\\html{<span class=bigger>-</span><span class=bigger>5</span>}}{\\btn{&divide;}{T}{bigger}}{\\html{<span class=bigger>-</span><span class=bigger>1</span>}}{\\btn{-}{F}{bigger}}{\\html{<span class=bigger>4</span>}}{\\str{)}},' +
                        '\\input{5},' +
						'\\grp{\\html{<span class=bigger>-</span><span class=bigger>27</span>}}{\\str{(}}{\\html{<span class=bigger>5</span>}}{\\btn{-}{T}{bigger}}{\\html{<span class=bigger>4</span>}}{\\str{)}},' +
						'\\input{1},' +
						'\\grp{\\btn{-27&nbsp;( 1 )}{T}{bigger}},' +
						'\\input{-27},' +
						'\\sign{-27}' +
                    '}{terms}{evaluate&nbsp; ( -3 ) <sup>3</sup>}{-5 &nbsp;&divide;&nbsp; -1}{5 - 4}{-27 ( 1 )}'),
			template: 'evaluate' 
			}
			,
			{ // problem 23
			problemStatement: dataUtils.pre(
											'{\\grp'
												+'{\\str{2 &nbsp;&nbsp; * &nbsp;}}'
												+'{\\exp{\\str{ -7 &nbsp;}}{\\str{2}}}'
												+'{\\str{ - &nbsp;}}'
												+'{\\exp{\\str{( -3 &nbsp;)}}{\\str{2}}}'
												+'{\\str{ &nbsp; &#43; &nbsp;}}'
												+'{\\exp{\\str{( -5 &nbsp;)}}{\\str{2}}}'
											+'}'
								),
			answer: '-82',
			wb: dataUtils.pre('\\ordopssimple{' +
						'\\grp{\\html{<span class=bigger>2</span>}}{\\btn{&bull;}{F}{large}}{\\btn{ - 7 <sup>2</sup>}{T}{large}}{\\btn{-}{F}{bigger}}{\\btn{( - 3 ) <sup>2</sup>}{F}{large}}{\\btn{+}{F}{large}}{\\btn{( - 5 ) <sup>2</sup>}{F}{large}},' +
                        '\\input{-49},' +
                        '\\grp{\\html{<span class=bigger>2</span>}}{\\btn{&bull;}{F}{large}}{\\html{<span class=bigger>-</span><span class=bigger>49</span>}}{\\btn{-}{F}{bigger}}{\\btn{( - 3 ) <sup>2</sup>}{T}{large}}{\\btn{+}{F}{large}}{\\btn{( - 5 ) <sup>2</sup>}{F}{large}},' +
                        '\\input{9},' +
						'\\grp{\\html{<span class=bigger>2</span>}}{\\btn{&bull;}{F}{large}}{\\html{<span class=bigger>-</span><span class=bigger>49</span>}}{\\btn{-}{F}{bigger}}{\\html{<span class=bigger>9</span>}}{\\btn{+}{F}{large}}{\\btn{( - 5 ) <sup>2</sup>}{T}{large}},' +
						'\\input{25},' +
						'\\grp{\\html{<span class=bigger>2</span>}}{\\btn{&bull;}{T}{large}}{\\html{<span class=bigger>-</span><span class=bigger>49</span>}}{\\btn{-}{F}{bigger}}{\\html{<span class=bigger>9</span>}}{\\btn{+}{F}{large}}{\\html{<span class=bigger>25</span>}},' +
						'\\input{-98},' +
						'\\grp{\\html{<span class=bigger>-</span><span class=bigger>98</span>}}{\\btn{-}{T}{bigger}}{\\html{<span class=bigger>9</span>}}{\\btn{+}{F}{large}}{\\html{<span class=bigger>25</span>}},' +
						'\\input{-107},' +
						'\\grp{\\html{<span class=bigger>-</span><span class=bigger>107</span>}}{\\btn{+}{T}{large}}{\\html{<span class=bigger>25</span>}},' +
						'\\input{-82},' +
						'\\sign{-82}' +
                    '}{terms}{evaluate&nbsp; -7 <sup>2</sup>}{evaluate&nbsp; ( -3 ) <sup>2</sup>}{evaluate&nbsp; ( -5 ) <sup>2</sup>}{2 &nbsp;&bull;&nbsp; -49}{-98 &nbsp;-&nbsp; 9}{-107 &nbsp;+&nbsp; 25}'),
			template: 'wideEvaluate' 
			}
			,
			{ // problem 24
			problemStatement: dataUtils.pre(
											'{\\grp'
												+'{\\str{- 45 &nbsp;&nbsp; / &nbsp;}}'
												+'{\\exp{\\str{ -3 &nbsp;}}{\\str{2}}}'
												+'{\\str{ - &nbsp;}}'
												+'{\\exp{\\str{( -2 &nbsp;)}}{\\str{2}}}'
												+'{\\str{ &nbsp; &#43; &nbsp;}}'
												+'{\\exp{\\str{( -2 &nbsp;)}}{\\str{3}}}'
											+'}'
								),
			answer: '-7',
			wb: dataUtils.pre('\\ordopssimple{' +
						'\\grp{\\html{<span class=bigger>-</span><span class=bigger>45</span>}}{\\btn{&divide;}{F}{bigger}}{\\btn{ - 3 <sup>2</sup>}{T}{large}}{\\btn{-}{F}{bigger}}{\\btn{( - 2 ) <sup>2</sup>}{F}{large}}{\\btn{+}{F}{large}}{\\btn{( - 2 ) <sup>3</sup>}{F}{large}},' +
                        '\\input{-9},' +
                        '\\grp{\\html{<span class=bigger>-</span><span class=bigger>45</span>}}{\\btn{&divide;}{F}{bigger}}{\\html{<span class=bigger>-</span><span class=bigger>9</span>}}{\\btn{-}{F}{bigger}}{\\btn{( - 2 ) <sup>2</sup>}{T}{large}}{\\btn{+}{F}{large}}{\\btn{( - 2 ) <sup>3</sup>}{F}{large}},' +
                        '\\input{4},' +
						'\\grp{\\html{<span class=bigger>-</span><span class=bigger>45</span>}}{\\btn{&divide;}{F}{bigger}}{\\html{<span class=bigger>-</span><span class=bigger>9</span>}}{\\btn{-}{F}{bigger}}{\\html{<span class=bigger>4</span>}}{\\btn{+}{F}{large}}{\\btn{( - 2 ) <sup>3</sup>}{T}{large}},' +
						'\\input{-8},' +
						'\\grp{\\html{<span class=bigger>-</span><span class=bigger>45</span>}}{\\btn{&divide;}{T}{bigger}}{\\html{<span class=bigger>-</span><span class=bigger>9</span>}}{\\btn{-}{F}{bigger}}{\\html{<span class=bigger>4</span>}}{\\btn{+}{F}{large}}{\\html{<span class=bigger>-</span><span class=bigger>8</span>}},' +
						'\\input{5},' +
						'\\grp{\\html{<span class=bigger>5</span>}}{\\btn{-}{T}{bigger}}{\\html{<span class=bigger>4</span>}}{\\btn{+}{F}{large}}{\\html{<span class=bigger>-</span><span class=bigger>8</span>}},' +
						'\\input{1},' +
						'\\grp{\\html{<span class=bigger>1</span>}}{\\btn{+}{T}{large}}{\\html{<span class=bigger>-</span><span class=bigger>8</span>}},' +
						'\\input{-7},' +
						'\\sign{-7}' +
                    '}{terms}{evaluate&nbsp; - 3 <sup>2</sup>}{evaluate&nbsp; ( - 2 ) <sup>2</sup>}{evaluate&nbsp; ( - 2 ) <sup>3</sup>}{- 45 &nbsp;&divide;&nbsp; -9}{5 &nbsp;-&nbsp; 4}{1 &nbsp;+&nbsp; - 8}'),
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
			problemStatement: dataUtils.pre(
									'{\\grp'
										+'{\\frac{\\fracstr{7}}{\\fracstr{10}}}'
										+'{\\str{-}}'
										+'{\\str{(}}'
										+'{\\mixed{\\str{-}}{\\frac{\\fracstr{2}}{\\fracstr{5}}}}'
										+'{\\str{)}}'
										+'{\\css'
											+'{\\html{<sup>2</sup>}}'
											+'{exponentLarge}'
										+'}'
									+'}'
								),
			answer: '-3680',
			wb: dataUtils.pre('\\ordopssimple{' +
						'\\grp'
							+'{\\css'
								+'{\\frac{\\fracstr{7}}{\\fracstr{10}}}'
								+'{bigger}'
							+'}'
							+'{\\btn{-}{F}{bigger}}'
							+'{\\btn{'
								+'<table><tr><td rowspan="3" class=hugeAndThin>(</td><td></td><td>2</td><td rowspan="3" class=hugeAndThin>)</td><td rowspan="3"><span class=exponentLarge><sup>2</sup></span></td></tr><tr><td>-</td><td><hr class=specialHR></td></tr><tr><td></td><td>5</td></tr></table>'
							+'}'
							+'{T}{}},' 
							+'\\frac{\\input{4}}{\\input{25}},'
                        +'\\grp'
							+'{\\css'
								+'{\\frac{\\fracstr{7}}{\\fracstr{10}}}'
								+'{bigger}'
							+'}'
							+'{\\btn{-}{T}{bigger}}'
							+'{\\css'
								+'{\\frac{\\fracstr{4}}{\\fracstr{25}}}'
								+'{bigger}'
							+'},'
							+'\\frac{\\input{27}}{\\input{50}},' 
						+'\\frac{\\input{27}}{\\input{50}}' 
                    +'}{terms}'
						+'{<table><tr><td>evaluate&nbsp;</td><td>&nbsp;</td><td><table><tr><td rowspan="3" class=hugeAndThin>(</td><td></td><td>2</td><td rowspan="3" class=hugeAndThin>)</td><td rowspan="3"><span class=exponentLarge><sup>2</sup></span></td></tr><tr><td><span class=bigger>-</span></td><td><hr class=specialHR></td></tr><tr><td></td><td>5</td></tr></table></td></tr></table>}'
						+'{<table><tr><td><table><tr><td>7<td></tr><tr><td><hr class=specialHR><td></tr><tr><td>10<td></tr></table></td><td>&nbsp; <span class=bigger>-</bigger> &nbsp;</td><td><table><tr><td>4<td></tr><tr><td><hr class=specialHR><td></tr><tr><td>25<td></tr></table></td></tr></table>}'),
			template: 'evaluate' 
			}
			
        ];

	return dataUtils.build(desc, template, data);
}]);



