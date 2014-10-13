/*global angular */

angular.module('mathSkills').service('data_r_1', ['dataUtils', function (dataUtils) {
    var desc = {
            title: 'R.1 The Powers of 10s and Scientific Notation',
            path: 'r.1-scientific-notation',
            children: []
        },
        template = {
			simpleEvaluation: {
                title: 'The Powers of 10s and Scientific Notation',
				children: [{
					title: 'Main Answer',
					children: [{
						problem: '$problemStatement',
						answer: '$solutionAnswer',		
						controls: {
                            "checkAnswer": true,
                            "help": '\\rowgrp'
										+'{\\html{&nbsp;}}'
										+'{$line1}'
										+'{\\html{&nbsp;}}'
										+'{\\css'
											+'{\\grp'
												+'{$helpAnswer}'
											+'}'
											+'{help-answer-text}'
										+'}'
										+'{\\html{&nbsp;}}'
						}
					}]
                }]
            },
			displayEvaluation: {
                title: 'The Powers of 10s and Scientific Notation',
				children: [{
					title: 'Main Answer',
					children: [{
						problem: '$problemStatement',
						answer: '$solutionAnswer',		
						controls: {
                            "checkAnswer": true,
                            "help": '\\rowgrp'
										+'{\\html{&nbsp;}}'
										+'{$line1}'
										+'{\\css'
											+'{\\grp'
												+'{$helpAnswer}'
											+'}'
											+'{help-answer-text}'
										+'}'
										+'{\\html{&nbsp;}}'
						}
					}]
                }]
            },
			evaluateAfterSimplify: {
                title: 'The Powers of 10s and Scientific Notation',
				children: [{
					title: 'Main Answer',
					children: [{
								problem: '$problemStatement',
								answer: '$solutionAnswer',		
								controls: {
									"checkAnswer": true,
									"help": '\\rowgrp'
										+'{\\html{&nbsp;}}'
										+'{$line1}'
										+'{\\html{&nbsp;}}'
										+'{\\css'
											+'{\\grp'
												+'{$helpAnswer}'
											+'}'
											+'{help-answer-text}'
										+'}'
										+'{\\html{&nbsp;}}'
								}
						}
						,
						{
						problem: '$problemStatement',
						answer: '$wellProblemStatement',	
						controls: {
                            "checkAnswer": true,
                            "help": true
						}
					}]
                }]
            }
		},
		data = [
			// prob 1
			{
				problemStatement: dataUtils.pre(
								'\\rowgrp'
									+'{\\grp'
										+'{\\str{Evaluate: &nbsp;}}'
										+'{\\exp{\\str{&nbsp;$$base}}{\\str{$$exp1}}}'
									+'}'
							),
				answerInstructions: '',
				base: '10',
				exp1: '0',
				answer: '1',
				solutionAnswer: dataUtils.pre(
								'\\rowgrp'
									+'{\\str{$$answerInstructions}}'
									+'{\\grp'
										+'{\\input{$$answer}}'
									+'}'
							),
				line1: dataUtils.pre(
								'\\rowgrp'
									+'{\\str{Any base raised to the power of zero equals 1 whole.}}'
							),
				helpAnswer: dataUtils.pre(
								'\\grp'
									+'{\\str{<br>Answer: &nbsp; $$answer}}'	
							),
				template: 'simpleEvaluation' 
			 }
		  	,
			// prob 2
			{
				problemStatement: dataUtils.pre(
								'\\rowgrp'
									+'{\\grp'
										+'{\\str{Evaluate: &nbsp;}}'
										+'{\\exp{\\str{&nbsp;$$base}}{\\str{$$exp1}}}'
									+'}'
							),
				answerInstructions: '',
				base: '10',
				exp1: '1',
				answer: '10',
				solutionAnswer: dataUtils.pre(
								'\\rowgrp'
									+'{\\str{$$answerInstructions}}'
									+'{\\grp'
										+'{\\input{$$answer}}'
									+'}'
							),
				line1: dataUtils.pre(
								'\\rowgrp'
									+'{\\str{Any base raised to the power of one equals itself.}}'
							),
				helpAnswer: dataUtils.pre(
								'\\grp'
									+'{\\str{<br>Answer: &nbsp; $$answer}}'	
							),
				template: 'simpleEvaluation' 
			 }
			 ,
			// prob 3
			{
				problemStatement: dataUtils.pre(
								'\\rowgrp'
									+'{\\grp'
										+'{\\str{Evaluate: &nbsp;}}'
										+'{\\exp{\\str{&nbsp;$$base}}{\\str{$$exp1}}}'
									+'}'
							),
				answerInstructions: '',
				base: '10',
				exp1: '3',
				multiplier: '1000',
				answer: '1000',
				helpNumber: '1,000',
				solutionAnswer: dataUtils.pre(
								'\\rowgrp'
									+'{\\str{$$answerInstructions}}'
									+'{\\grp'
										+'{\\input{$$answer}}'
									+'}'
							),
				line1: dataUtils.pre(
								'\\rowgrp'
									+'{\\str{We know that 10<sup> 3</sup>  means 10 * 10 * 10.<br>Here is a quick method for solving a power of 10 expression.}}'
									+'{\\str{&nbsp;}}'
									+'{\\str{Any base raised to a positive exponent will become larger; the decimal point will be moved to the right here.}}'
									+'{\\str{&nbsp;}}'
									+'{\\str{<span class=bottomBlack>If we use 10<sup> 0</sup> (which equals 1 whole) as our reference point</span>, then the exponent above base 10 tells us to <span class=bottomBlack>move the decimal point 3 times to the right from the value of one whole</span>. }}'
									+'{\\str{&nbsp;}}'
									+'{\\str{$$base<sup> $$exp1</sup> means:}}'
									+'{\\html{&nbsp;}}'
									+'{\\multiplydecpowten{1}{$$multiplier}{hide}}'
							),
				helpAnswer: dataUtils.pre(
								'\\grp'
									+'{\\str{Answer: &nbsp; $$helpNumber}}'	
							),
				template: 'displayEvaluation' 
			 }
			 ,
			// prob 4
			{
				problemStatement: dataUtils.pre(
								'\\rowgrp'
									+'{\\grp'
										+'{\\str{Evaluate: &nbsp;}}'
										+'{\\exp{\\str{&nbsp;$$base}}{\\str{$$exp1}}}'
									+'}'
							),
				answerInstructions: '',
				base: '10',
				exp1: '5',
				multiplier: '100000',
				answer: '100000',
				helpNumber: '100,000',
				solutionAnswer: dataUtils.pre(
								'\\rowgrp'
									+'{\\str{$$answerInstructions}}'
									+'{\\grp'
										+'{\\input{$$answer}}'
									+'}'
							),
				line1: dataUtils.pre(
								'\\rowgrp'
									+'{\\str{We know that 10<sup> $$exp1</sup>  means 10 * 10 * 10 * 10 * 10.<br>Here is a quick method for solving a power of 10 expression.}}'
									+'{\\str{&nbsp;}}'
									+'{\\str{Any base raised to a positive exponent will become larger; the decimal point will be moved to the right here.}}'
									+'{\\str{&nbsp;}}'
									+'{\\str{<span class=bottomBlack>If we use 10<sup> 0</sup> (which equals 1 whole) as our reference point</span>, then the exponent above base 10 tells us to <span class=bottomBlack>move the decimal point $$exp1 times to the right from the value of one whole</span>. }}'
									+'{\\str{&nbsp;}}'
									+'{\\str{$$base<sup> $$exp1</sup> means:}}'
									+'{\\html{&nbsp;}}'
									+'{\\multiplydecpowten{1}{$$multiplier}{hide}}'
							),
				helpAnswer: dataUtils.pre(
								'\\grp'
									+'{\\str{Answer: &nbsp; $$helpNumber}}'	
							),
				template: 'displayEvaluation' 
			 }
			 ,
			// prob 5
			{
				problemStatement: dataUtils.pre(
								'\\rowgrp'
									+'{\\grp'
										+'{\\str{Evaluate: &nbsp;}}'
										+'{\\exp{\\str{&nbsp;$$base}}{\\str{$$exp1}}}'
									+'}'
							),
				answerInstructions: '',
				base: '10',
				exp1: '-2 ',
				positiveExp1: '2',
				multiplier: '.01',
				answer: '0.01',
				helpNumber: '0.01',
				solutionAnswer: dataUtils.pre(
								'\\rowgrp'
									+'{\\str{$$answerInstructions}}'
									+'{\\grp'
										+'{\\input{$$answer}}'
									+'}'
							),
				line1: dataUtils.pre(
								'\\rowgrp'
									+'{\\str{We know that 10<sup> $$exp1</sup> &nbsp;&nbsp;means}}'
									+'{\\str{&nbsp;}}'
									+'{\\frac{\\str{1}}{\\str{10<sup> $$positiveExp1</sup>}}}'
									+'{\\str{&nbsp;}}'
									+'{\\str{which will equal:}}'
									+'{\\str{&nbsp;}}'
									+'{\\frac{\\str{1}}{\\str{10 * 10}}}'
									+'{\\str{&nbsp;}}'
									+'{\\str{Here is a quick method for solving a power of 10 expression.}}'
									+'{\\str{&nbsp;}}'
									+'{\\str{Any base raised to a negative exponent will become smaller; the decimal point will be moved to the left here.}}'
									+'{\\str{&nbsp;}}'
									+'{\\str{<span class=bottomBlack>If we use 10<sup> 0</sup> (which equals 1 whole) as our reference point</span>, then the exponent above base 10 tells us to <span class=bottomBlack>move the decimal point $$positiveExp1 times to the left from the value of one whole</span>. }}'
									+'{\\str{&nbsp;}}'
									+'{\\str{$$base<sup> $$exp1</sup> means:}}'
									+'{\\html{&nbsp;}}'
									+'{\\multiplydecpowten{1}{$$multiplier}{hide}}'
							),
				helpAnswer: dataUtils.pre(
								'\\grp'
									+'{\\str{Answer: &nbsp; $$helpNumber}}'	
							),
				template: 'displayEvaluation' 
			 }
			 ,
			// prob 5
			{
				problemStatement: dataUtils.pre(
								'\\rowgrp'
									+'{\\grp'
										+'{\\str{Evaluate: &nbsp;}}'
										+'{\\exp{\\str{&nbsp;$$base}}{\\str{$$exp1}}}'
									+'}'
							),
				answerInstructions: '',
				base: '10',
				exp1: '-4 ',
				positiveExp1: '4',
				multiplier: '.0001',
				answer: '0.0001',
				helpNumber: '0.0001',
				solutionAnswer: dataUtils.pre(
								'\\rowgrp'
									+'{\\str{$$answerInstructions}}'
									+'{\\grp'
										+'{\\input{$$answer}}'
									+'}'
							),
				line1: dataUtils.pre(
								'\\rowgrp'
									+'{\\str{We know that 10<sup> $$exp1</sup> &nbsp;&nbsp;means}}'
									+'{\\str{&nbsp;}}'
									+'{\\frac{\\str{1}}{\\str{10<sup> $$positiveExp1</sup>}}}'
									+'{\\str{&nbsp;}}'
									+'{\\str{which will equal:}}'
									+'{\\str{&nbsp;}}'
									+'{\\frac{\\str{1}}{\\str{10 * 10 * 10 * 10}}}'
									+'{\\str{&nbsp;}}'
									+'{\\str{Here is a quick method for solving a power of 10 expression.}}'
									+'{\\str{&nbsp;}}'
									+'{\\str{Any base raised to a negative exponent will become smaller; the decimal point will be moved to the left here.}}'
									+'{\\str{&nbsp;}}'
									+'{\\str{<span class=bottomBlack>If we use 10<sup> 0</sup> (which equals 1 whole) as our reference point</span>, then the exponent above base 10 tells us to <span class=bottomBlack>move the decimal point $$positiveExp1 times to the left from the value of one whole</span>. }}'
									+'{\\str{&nbsp;}}'
									+'{\\str{$$base<sup> $$exp1</sup> means:}}'
									+'{\\html{&nbsp;}}'
									+'{\\multiplydecpowten{1}{$$multiplier}{hide}}'
							),
				helpAnswer: dataUtils.pre(
								'\\grp'
									+'{\\str{Answer: &nbsp; $$helpNumber}}'	
							),
				template: 'displayEvaluation' 
			 }
			 ,
			// prob 6
			{
				problemStatement: dataUtils.pre(
								'\\rowgrp'
									+'{\\grp'
										+'{\\str{Evaluate: &nbsp;}}'
										+'{\\exp{\\str{&nbsp;$$base}}{\\str{$$exp1}}}'
									+'}'
							),
				answerInstructions: '',
				base: '10',
				exp1: '-1 ',
				positiveExp1: '1',
				multiplier: '.1',
				answer: '0.1',
				helpNumber: '0.1',
				solutionAnswer: dataUtils.pre(
								'\\rowgrp'
									+'{\\str{$$answerInstructions}}'
									+'{\\grp'
										+'{\\input{$$answer}}'
									+'}'
							),
				line1: dataUtils.pre(
								'\\rowgrp'
									+'{\\str{We know that 10<sup> $$exp1</sup> &nbsp;&nbsp;means}}'
									+'{\\str{&nbsp;}}'
									+'{\\frac{\\str{1}}{\\str{10<sup> $$positiveExp1</sup>}}}'
									+'{\\str{&nbsp;}}'
									+'{\\str{which will equal:}}'
									+'{\\str{&nbsp;}}'
									+'{\\frac{\\str{1}}{\\str{10}}}'
									+'{\\str{&nbsp;}}'
									+'{\\str{Here is a quick method for solving a power of 10 expression.}}'
									+'{\\str{&nbsp;}}'
									+'{\\str{Any base raised to a negative exponent will become smaller; the decimal point will be moved to the left here.}}'
									+'{\\str{&nbsp;}}'
									+'{\\str{<span class=bottomBlack>If we use 10<sup> 0</sup> (which equals 1 whole) as our reference point</span>, then the exponent above base 10 tells us to <span class=bottomBlack>move the decimal point $$positiveExp1 times to the left from the value of one whole</span>. }}'
									+'{\\str{&nbsp;}}'
									+'{\\str{$$base<sup> $$exp1</sup> means:}}'
									+'{\\html{&nbsp;}}'
									+'{\\multiplydecpowten{1}{$$multiplier}{hide}}'
							),
				helpAnswer: dataUtils.pre(
								'\\grp'
									+'{\\str{Answer: &nbsp; $$helpNumber}}'	
							),
				template: 'displayEvaluation' 
			 }
			 ,
			// prob 8
			{
				problemStatement: dataUtils.pre(
								'\\rowgrp'
									+'{\\grp'
										+'{\\str{Evaluate: &nbsp;}}'
										+'{\\exp{\\str{&nbsp;$$base}}{\\str{$$exp1}}}'
									+'}'
							),
				answerInstructions: '',
				base: '10',
				exp1: '4',
				multiplier: '10000',
				answer: '10000',
				helpNumber: '10,000',
				solutionAnswer: dataUtils.pre(
								'\\rowgrp'
									+'{\\str{$$answerInstructions}}'
									+'{\\grp'
										+'{\\input{$$answer}}'
									+'}'
							),
				line1: dataUtils.pre(
								'\\rowgrp'
									+'{\\str{We know that 10<sup> $$exp1</sup>  means 10 * 10 * 10 * 10.<br>Here is a quick method for solving a power of 10 expression.}}'
									+'{\\str{&nbsp;}}'
									+'{\\str{Any base raised to a positive exponent will become larger; the decimal point will be moved to the right here.}}'
									+'{\\str{&nbsp;}}'
									+'{\\str{<span class=bottomBlack>If we use 10<sup> 0</sup> (which equals 1 whole) as our reference point</span>, then the exponent above base 10 tells us to <span class=bottomBlack>move the decimal point $$exp1 times to the right from the value of one whole</span>. }}'
									+'{\\str{&nbsp;}}'
									+'{\\str{$$base<sup> $$exp1</sup> means:}}'
									+'{\\html{&nbsp;}}'
									+'{\\multiplydecpowten{1}{$$multiplier}{hide}}'
							),
				helpAnswer: dataUtils.pre(
								'\\grp'
									+'{\\str{Answer: &nbsp; $$helpNumber}}'	
							),
				template: 'displayEvaluation' 
			 }
			 ,
			// prob 9
			{
				problemStatement: dataUtils.pre(
								'\\rowgrp'
									+'{\\str{Express the following scientific notation in standard notation:}}'
									+'{\\str{&nbsp;}}'
									+'{\\grp'
										+'{\\str{$$problemNumber}}'
										+'{\\str{&nbsp; x &nbsp;}}'
										+'{\\exp{\\str{&nbsp;$$base}}{\\str{$$exp1}}}'
									+'}'
							),
				answerInstructions: '',
				problemNumber: '1.6',
				base: '10',
				exp1: '3',
				longhand: 'three',
				multiplier: '1000',
				answer: '1600',
				helpNumber: '1,600',
				solutionAnswer: dataUtils.pre(
								'\\rowgrp'
									+'{\\str{$$answerInstructions}}'
									+'{\\grp'
										+'{\\input{$$answer}}'
									+'}'
							),
				line1: dataUtils.pre(
								'\\rowgrp'
									+'{\\str{In scientific notation the exponent above the base of 10 tells us the direction <span class=bottomBlack>and</span> the number of places to move the decimal point in the given number.}}'
									+'{\\str{&nbsp;}}'
									+'{\\str{In this case the exponent of positive $$exp1 in $$base<sup>$$exp1 </sup> &nbsp;tells us to move the decimal point in $$problemNumber $$longhand decimal places to the right.}}'
									+'{\\str{&nbsp;}}'
									+'{\\grp'
										+'{\\str{$$problemNumber}}'
										+'{\\str{&nbsp; x &nbsp;}}'
										+'{\\exp{\\str{&nbsp;$$base}}{\\str{$$exp1}}}'
										+'{\\str{&nbsp;&nbsp;means:}}'
									+'}'
									+'{\\html{&nbsp;}}'
									+'{\\multiplydecpowten{$$problemNumber}{$$multiplier}{hide}}'
							),
				helpAnswer: dataUtils.pre(
								'\\grp'
									+'{\\str{Answer: &nbsp; $$helpNumber}}'	
							),
				template: 'displayEvaluation' 
			 }
			  ,
			// prob 10
			{
				problemStatement: dataUtils.pre(
								'\\rowgrp'
									+'{\\str{Express the following scientific notation in standard notation:}}'
									+'{\\str{&nbsp;}}'
									+'{\\grp'
										+'{\\str{$$problemNumber}}'
										+'{\\str{&nbsp; x &nbsp;}}'
										+'{\\exp{\\str{&nbsp;$$base}}{\\str{$$exp1}}}'
									+'}'
							),
				answerInstructions: '',
				problemNumber: '4.3',
				base: '10',
				exp1: '6',
				longhand: 'six',
				multiplier: '1000000',
				answer: '4300000',
				helpNumber: '4,300,000',
				solutionAnswer: dataUtils.pre(
								'\\rowgrp'
									+'{\\str{$$answerInstructions}}'
									+'{\\css'
										+'{\\input{$$answer}}'
										+'{width120px}'
									+'}'
							),
				line1: dataUtils.pre(
								'\\rowgrp'
									+'{\\str{In scientific notation the exponent above the base of 10 tells us the direction <span class=bottomBlack>and</span> the number of places to move the decimal point in the given number.}}'
									+'{\\str{&nbsp;}}'
									+'{\\str{In this case the exponent of positive $$exp1 in $$base<sup>$$exp1 </sup> &nbsp;tells us to move the decimal point in $$problemNumber $$longhand decimal places to the right.}}'
									+'{\\str{&nbsp;}}'
									+'{\\grp'
										+'{\\str{$$problemNumber}}'
										+'{\\str{&nbsp; x &nbsp;}}'
										+'{\\exp{\\str{&nbsp;$$base}}{\\str{$$exp1}}}'
										+'{\\str{&nbsp;&nbsp;means:}}'
									+'}'
									+'{\\html{&nbsp;}}'
									+'{\\multiplydecpowten{$$problemNumber}{$$multiplier}{hide}}'
							),
				helpAnswer: dataUtils.pre(
								'\\grp'
									+'{\\str{Answer: &nbsp; $$helpNumber}}'	
							),
				template: 'displayEvaluation' 
			 }
			 ,
			// prob 11
			{
				problemStatement: dataUtils.pre(
								'\\rowgrp'
									+'{\\str{Express the following scientific notation in standard notation:}}'
									+'{\\str{&nbsp;}}'
									+'{\\grp'
										+'{\\str{$$problemNumber}}'
										+'{\\str{&nbsp; x &nbsp;}}'
										+'{\\exp{\\str{&nbsp;$$base}}{\\str{$$exp1}}}'
									+'}'
							),
				answerInstructions: '',
				problemNumber: '9.2',
				base: '10',
				exp1: '-2 ',
				positiveExp1: '2',
				longhand: 'two',
				multiplier: '.01',
				answer: '0.092',
				helpNumber: '0.092',
				solutionAnswer: dataUtils.pre(
								'\\rowgrp'
									+'{\\str{$$answerInstructions}}'
									+'{\\grp'
										+'{\\input{$$answer}}'
									+'}'
							),
				line1: dataUtils.pre(
								'\\rowgrp'
									+'{\\str{In scientific notation the exponent above the base of 10 tells us the direction <span class=bottomBlack>and</span> the number of places to move the decimal point in the given number.}}'
									+'{\\str{&nbsp;}}'
									+'{\\str{In this case the exponent of negative $$positiveExp1 in $$base<sup>$$exp1 </sup> &nbsp;tells us to move the decimal point in $$problemNumber $$longhand decimal places to the left.}}'
									+'{\\str{&nbsp;}}'
									+'{\\grp'
										+'{\\str{$$problemNumber}}'
										+'{\\str{&nbsp; x &nbsp;}}'
										+'{\\exp{\\str{&nbsp;$$base}}{\\str{$$exp1}}}'
										+'{\\str{&nbsp;&nbsp;means:}}'
									+'}'
									+'{\\html{&nbsp;}}'
									+'{\\multiplydecpowten{$$problemNumber}{$$multiplier}{hide}}'
							),
				helpAnswer: dataUtils.pre(
								'\\grp'
									+'{\\str{Answer: &nbsp; $$helpNumber}}'	
							),
				template: 'displayEvaluation' 
			 }
			  ,
			// prob 12
			{
				problemStatement: dataUtils.pre(
								'\\rowgrp'
									+'{\\str{Express the following scientific notation in standard notation:}}'
									+'{\\str{&nbsp;}}'
									+'{\\grp'
										+'{\\str{$$problemNumber}}'
										+'{\\str{&nbsp; x &nbsp;}}'
										+'{\\exp{\\str{&nbsp;$$base}}{\\str{$$exp1}}}'
									+'}'
							),
				answerInstructions: '',
				problemNumber: '5.64',
				base: '10',
				exp1: '-3 ',
				positiveExp1: '3',
				longhand: 'three',
				multiplier: '.001',
				answer: '0.00564',
				helpNumber: '0.00564',
				solutionAnswer: dataUtils.pre(
								'\\rowgrp'
									+'{\\str{$$answerInstructions}}'
									+'{\\grp'
										+'{\\input{$$answer}}'
									+'}'
							),
				line1: dataUtils.pre(
								'\\rowgrp'
									+'{\\str{In scientific notation the exponent above the base of 10 tells us the direction <span class=bottomBlack>and</span> the number of places to move the decimal point in the given number.}}'
									+'{\\str{&nbsp;}}'
									+'{\\str{In this case the exponent of negative $$positiveExp1 in $$base<sup>$$exp1 </sup> &nbsp;tells us to move the decimal point in $$problemNumber $$longhand decimal places to the left.}}'
									+'{\\str{&nbsp;}}'
									+'{\\grp'
										+'{\\str{$$problemNumber}}'
										+'{\\str{&nbsp; x &nbsp;}}'
										+'{\\exp{\\str{&nbsp;$$base}}{\\str{$$exp1}}}'
										+'{\\str{&nbsp;&nbsp;means:}}'
									+'}'
									+'{\\html{&nbsp;}}'
									+'{\\multiplydecpowten{$$problemNumber}{$$multiplier}{hide}}'
							),
				helpAnswer: dataUtils.pre(
								'\\grp'
									+'{\\str{Answer: &nbsp; $$helpNumber}}'	
							),
				template: 'displayEvaluation' 
			 }
			 ,
			// prob 13
			{
				problemStatement: dataUtils.pre(
								'\\rowgrp'
									+'{\\str{Express the following value in scientific notation:}}'
									+'{\\str{&nbsp;}}'
									+'{\\grp'
										+'{\\str{$$problemNumber}}'
									+'}'
							),
				answerInstructions: '',
				problemNumber: '34,000',
				scienceNumber: '3.4',
				rightLeft: 'right',
				base: '10',
				exp1: '4',
				longhand: 'four',
				firstDigit: 'three',
				lastDigit: 'four',
				combineTable: '<table>'
								+'<tr>'
									+'<td>'
										+'<span>(From the 1<sup>st</sup> step)</span>'
									+'</td>'
									+'<td>'
										+'<span>&nbsp;&bull;&nbsp;</span>'
									+'</td>'
									+'<td>'
										+'<span>(From the 2<sup>nd</sup> step)</span>'
									+'</td>'
								+'</tr>'
								+'<tr>'
									+'<td class=textAlignRight></span>'
										+'<span>3.4</span>'
									+'</td>'
									+'<td>'
										+'<span>&nbsp;x&nbsp;</span>'
									+'</td>'
									+'<td class=textAlignLeft>'
										+'<span>10<sup> 4</sup></span>'
									+'</td>'
								+'</tr>'
							+'</table>',
				solutionAnswer: dataUtils.pre(
								'\\rowgrp'
									+'{\\str{$$answerInstructions}}'
									+'{\\grp'
										+'{\\input{$$scienceNumber}}'
										+'{\\str{x}}'
										+'{\\exp{\\input{$$base}}{\\input{$$exp1}}}'
									+'}'
							),
				line1: dataUtils.pre(
								'\\rowgrp'
									+'{\\str{To rewrite a number in scientific notation:}}'
									+'{\\str{&nbsp;}}'
									+'{\\str{<u>First Step</u>: Rewrite the given number by inserting the decimal point to the $$rightLeft of the first non&#45;zero digit. This will always create a number that is greater than or equal to one whole and less than 10.}}'
									+'{\\str{&nbsp;}}'
									+'{\\str{In $$problemNumber the first non&#45;zero number is the $$firstDigit. Therefore, we will insert the decimal point to the $$rightLeft of the $$firstDigit.}}'
									+'{\\str{&nbsp;}}'
									+'{\\str{The first part of our scientific notation answer will be $$scienceNumber. Notice that we do not include any zeros to the right of the $$lastDigit (the last non&#45;zero digit).}}'
									+'{\\str{&nbsp;}}'
									+'{\\str{<u>Second Step</u>: Ask how many places <span class=bottomBlack>and</span> which direction we would need to move the decimal point in $$scienceNumber to get the original value of $$problemNumber.}}'
									+'{\\str{&nbsp;}}'
									+'{\\str{To get from $$scienceNumber to $$problemNumber, we would need to move the decimal point $$longhand places to the $$rightLeft. We represent this as a power of 10, and get 10<sup> $$exp1</sup>. It is 10<sup> $$exp1</sup> that tells us to move the decimal point $$longhand places to the $$rightLeft.}}'
									+'{\\str{&nbsp;}}'
									+'{\\str{<u>Final Answer</u>: Write these two parts as a product. It is common practice to use the arithmetic \"x\" for the multiplication symbol in scientific notation.}}'
									+'{\\str{&nbsp;}}'
									+'{\\html{'
										+'$$combineTable'
									+'}}'
									+'{\\html{&nbsp;}}'
							),
				helpAnswer: dataUtils.pre(
								'\\grp'
									+'{\\str{Answer: &nbsp; $$scienceNumber &nbsp;x}}'
									+'{\\exp{\\str{$$base}}{\\str{$$exp1}}}'
							),
				template: 'displayEvaluation' 
			 }
			  ,
			// prob 14
			{
				problemStatement: dataUtils.pre(
								'\\rowgrp'
									+'{\\str{Express the following value in scientific notation:}}'
									+'{\\str{&nbsp;}}'
									+'{\\grp'
										+'{\\str{$$problemNumber}}'
									+'}'
							),
				answerInstructions: '',
				problemNumber: '708,000',
				scienceNumber: '7.08',
				rightLeft: 'right',
				base: '10',
				exp1: '5',
				longhand: 'five',
				firstDigit: '7',
				lastDigit: '8',
				combineTable: '<table>'
								+'<tr>'
									+'<td>'
										+'<span>(From the 1<sup>st</sup> step)</span>'
									+'</td>'
									+'<td>'
										+'<span>&nbsp;&bull;&nbsp;</span>'
									+'</td>'
									+'<td>'
										+'<span>(From the 2<sup>nd</sup> step)</span>'
									+'</td>'
								+'</tr>'
								+'<tr>'
									+'<td class=textAlignRight></span>'
										+'<span>7.08</span>'
									+'</td>'
									+'<td>'
										+'<span>&nbsp;x&nbsp;</span>'
									+'</td>'
									+'<td class=textAlignLeft>'
										+'<span>10<sup> 5</sup></span>'
									+'</td>'
								+'</tr>'
							+'</table>',
				solutionAnswer: dataUtils.pre(
								'\\rowgrp'
									+'{\\str{$$answerInstructions}}'
									+'{\\grp'
										+'{\\input{$$scienceNumber}}'
										+'{\\str{x}}'
										+'{\\exp{\\input{$$base}}{\\input{$$exp1}}}'
									+'}'
							),
				line1: dataUtils.pre(
								'\\rowgrp'
									+'{\\str{To rewrite a number in scientific notation:}}'
									+'{\\str{&nbsp;}}'
									+'{\\str{<u>First Step</u>: Rewrite the given number by inserting the decimal point to the $$rightLeft of the first non&#45;zero digit. This will always create a number that is greater than or equal to one whole and less than 10.}}'
									+'{\\str{&nbsp;}}'
									+'{\\str{In $$problemNumber the first non&#45;zero number is the $$firstDigit. Therefore, we will insert the decimal point to the $$rightLeft of the $$firstDigit.}}'
									+'{\\str{&nbsp;}}'
									+'{\\str{The first part of our scientific notation answer will be $$scienceNumber. Notice that we do not include any zeros to the right of the $$lastDigit (the last non&#45;zero digit).}}'
									+'{\\str{&nbsp;}}'
									+'{\\str{<u>Second Step</u>: Ask how many places <span class=bottomBlack>and</span> which direction we would need to move the decimal point in $$scienceNumber to get the original value of $$problemNumber.}}'
									+'{\\str{&nbsp;}}'
									+'{\\str{To get from $$scienceNumber to $$problemNumber, we would need to move the decimal point $$longhand places to the $$rightLeft. We represent this as a power of 10, and get 10<sup> $$exp1</sup>. It is 10<sup> $$exp1</sup> that tells us to move the decimal point $$longhand places to the $$rightLeft.}}'
									+'{\\str{&nbsp;}}'
									+'{\\str{<u>Final Answer</u>: Write these two parts as a product. It is common practice to use the arithmetic \"x\" for the multiplication symbol in scientific notation.}}'
									+'{\\str{&nbsp;}}'
									+'{\\html{'
										+'$$combineTable'
									+'}}'
									+'{\\html{&nbsp;}}'
							),
				helpAnswer: dataUtils.pre(
								'\\grp'
									+'{\\str{Answer: &nbsp; $$scienceNumber &nbsp;x}}'
									+'{\\exp{\\str{$$base}}{\\str{$$exp1}}}'
							),
				template: 'displayEvaluation' 
			 }
			  ,
			// prob 15
			{
				problemStatement: dataUtils.pre(
								'\\rowgrp'
									+'{\\str{Express the following value in scientific notation:}}'
									+'{\\str{&nbsp;}}'
									+'{\\grp'
										+'{\\str{$$problemNumber}}'
									+'}'
							),
				answerInstructions: '',
				problemNumber: '0.00327',
				scienceNumber: '3.27',
				rightLeft: 'left',
				base: '10',
				exp1: '-3 ',
				ansExp1: '-3',
				longhand: 'three',
				firstDigit: '3',
				lastDigit: '7',
				combineTable: '<table>'
								+'<tr>'
									+'<td>'
										+'<span>(From the 1<sup>st</sup> step)</span>'
									+'</td>'
									+'<td>'
										+'<span>&nbsp;&bull;&nbsp;</span>'
									+'</td>'
									+'<td>'
										+'<span>(From the 2<sup>nd</sup> step)</span>'
									+'</td>'
								+'</tr>'
								+'<tr>'
									+'<td class=textAlignRight></span>'
										+'<span>3.27</span>'
									+'</td>'
									+'<td>'
										+'<span>&nbsp;x&nbsp;</span>'
									+'</td>'
									+'<td class=textAlignLeft>'
										+'<span>10<sup> -3</sup></span>'
									+'</td>'
								+'</tr>'
							+'</table>',
				solutionAnswer: dataUtils.pre(
								'\\rowgrp'
									+'{\\str{$$answerInstructions}}'
									+'{\\grp'
										+'{\\input{$$scienceNumber}}'
										+'{\\str{x}}'
										+'{\\exp{\\input{$$base}}{\\input{$$ansExp1}}}'
									+'}'
							),
				line1: dataUtils.pre(
								'\\rowgrp'
									+'{\\str{To rewrite a number in scientific notation:}}'
									+'{\\str{&nbsp;}}'
									+'{\\str{<u>First Step</u>: Rewrite the given number by inserting the decimal point to the $$rightLeft of the first non&#45;zero digit. This will always create a number that is greater than or equal to one whole and less than 10.}}'
									+'{\\str{&nbsp;}}'
									+'{\\str{In $$problemNumber the first non&#45;zero number is the $$firstDigit. Therefore, we will insert the decimal point to the right of the $$firstDigit.}}'
									+'{\\str{&nbsp;}}'
									+'{\\str{The first part of our scientific notation answer will be $$scienceNumber.}}'
									+'{\\str{&nbsp;}}'
									+'{\\str{<u>Second Step</u>: Ask how many places <span class=bottomBlack>and</span> which direction we would need to move the decimal point in $$scienceNumber to get the original value of $$problemNumber.}}'
									+'{\\str{&nbsp;}}'
									+'{\\str{To get from $$scienceNumber to $$problemNumber, we would need to move the decimal point $$longhand places to the $$rightLeft. We represent this as a power of 10, and get 10<sup> $$exp1</sup>. It is 10<sup> $$exp1</sup>&nbsp; that tells us to move the decimal point $$longhand places to the $$rightLeft.}}'
									+'{\\str{&nbsp;}}'
									+'{\\str{<u>Final Answer</u>: Write these two parts as a product. It is common practice to use the arithmetic \"x\" for the multiplication symbol in scientific notation.}}'
									+'{\\str{&nbsp;}}'
									+'{\\html{'
										+'$$combineTable'
									+'}}'
									+'{\\html{&nbsp;}}'
							),
				helpAnswer: dataUtils.pre(
								'\\grp'
									+'{\\str{Answer: &nbsp; $$scienceNumber &nbsp;x}}'
									+'{\\exp{\\str{$$base}}{\\str{$$exp1}}}'
							),
				template: 'displayEvaluation' 
			 }
			 ,
			// prob 16
			{
				problemStatement: dataUtils.pre(
								'\\rowgrp'
									+'{\\str{Express the following value in scientific notation:}}'
									+'{\\str{&nbsp;}}'
									+'{\\grp'
										+'{\\str{$$problemNumber}}'
									+'}'
							),
				answerInstructions: '',
				problemNumber: '0.08',
				scienceNumber: '8',
				rightLeft: 'left',
				base: '10',
				exp1: '-2 ',
				ansExp1: '-2',
				longhand: 'two',
				firstDigit: '8',
				lastDigit: '',
				combineTable: '<table>'
								+'<tr>'
									+'<td>'
										+'<span>(From the 1<sup>st</sup> step)</span>'
									+'</td>'
									+'<td>'
										+'<span>&nbsp;&bull;&nbsp;</span>'
									+'</td>'
									+'<td>'
										+'<span>(From the 2<sup>nd</sup> step)</span>'
									+'</td>'
								+'</tr>'
								+'<tr>'
									+'<td class=textAlignRight></span>'
										+'<span>8</span>'
									+'</td>'
									+'<td>'
										+'<span>&nbsp;x&nbsp;</span>'
									+'</td>'
									+'<td class=textAlignLeft>'
										+'<span>10<sup> -2</sup></span>'
									+'</td>'
								+'</tr>'
							+'</table>',
				solutionAnswer: dataUtils.pre(
								'\\rowgrp'
									+'{\\str{$$answerInstructions}}'
									+'{\\grp'
										+'{\\input{$$scienceNumber}}'
										+'{\\str{x}}'
										+'{\\exp{\\input{$$base}}{\\input{$$ansExp1}}}'
									+'}'
							),
				line1: dataUtils.pre(
								'\\rowgrp'
									+'{\\str{To rewrite a number in scientific notation:}}'
									+'{\\str{&nbsp;}}'
									+'{\\str{<u>First Step</u>: Rewrite the given number by inserting the decimal point to the $$rightLeft of the first non&#45;zero digit. This will always create a number that is greater than or equal to one whole and less than 10.}}'
									+'{\\str{&nbsp;}}'
									+'{\\str{In $$problemNumber the first non&#45;zero number is the $$firstDigit. Therefore, we will insert the decimal point to the right of the $$firstDigit.}}'
									+'{\\str{&nbsp;}}'
									+'{\\str{The first part of our scientific notation answer will be $$scienceNumber.}}'
									+'{\\str{&nbsp;}}'
									+'{\\str{<u>Second Step</u>: Ask how many places <span class=bottomBlack>and</span> which direction we would need to move the decimal point in $$scienceNumber to get the original value of $$problemNumber.}}'
									+'{\\str{&nbsp;}}'
									+'{\\str{To get from $$scienceNumber to $$problemNumber, we would need to move the decimal point $$longhand places to the $$rightLeft. We represent this as a power of 10, and get <span class=whiteSpaceNoWrap>10<sup>$$exp1</sup>. &nbsp;It</span> is 10<sup> $$exp1</sup>&nbsp; that tells us to move the decimal point $$longhand places to the $$rightLeft.}}'
									+'{\\str{&nbsp;}}'
									+'{\\str{<u>Final Answer</u>: Write these two parts as a product. It is common practice to use the arithmetic \"x\" for the multiplication symbol in scientific notation.}}'
									+'{\\str{&nbsp;}}'
									+'{\\html{'
										+'$$combineTable'
									+'}}'
									+'{\\html{&nbsp;}}'
							),
				helpAnswer: dataUtils.pre(
								'\\grp'
									+'{\\str{Answer: &nbsp; $$scienceNumber &nbsp;x}}'
									+'{\\exp{\\str{$$base}}{\\str{$$exp1}}}'
							),
				template: 'displayEvaluation' 
			 }
			  ,
			// prob 17
			{
				problemStatement: dataUtils.pre(
								'\\rowgrp'
									+'{\\str{Express the following scientific notation in standard notation: &nbsp;}}'
									+'{\\str{&nbsp;}}'
									+'{\\grp'
										+'{\\str{$$scienceNumber &nbsp;x}}'
										+'{\\exp{\\str{$$base}}{\\str{$$exp1}}}'
									+'}'
							),
				answerInstructions: '',
				scienceNumber: '6',
				base: '10',
				exp1: '-4 ',
				positiveExp1: '4',
				longhand: 'four',
				multiplier: '.0001',
				answer: '0.0006',
				helpNumber: '0.0006',
				solutionAnswer: dataUtils.pre(
								'\\rowgrp'
									+'{\\str{$$answerInstructions}}'
									+'{\\grp'
										+'{\\input{$$answer}}'
									+'}'
							),
				line1: dataUtils.pre(
								'\\rowgrp'
									+'{\\str{In scientific notation the exponent above the base of 10 tells us the direction <u>and</u> the number of places to move the decimal point in the given number.}}'
									+'{\\str{&nbsp;}}'
									+'{\\str{In this case the exponent of negative $$positiveExp1 in 10<sup>$$exp1 </sup> &nbsp;tells us to move the decimal point in $$scienceNumber $$longhand decimal places to the left.}}'
									+'{\\str{&nbsp;}}'
									+'{\\grp'
										+'{\\str{$$scienceNumber &nbsp;x}}'
										+'{\\exp{\\str{$$base}}{\\str{$$exp1}}}'
										+'{\\str{&nbsp;&nbsp;means:}}'
									+'}'
									+'{\\str{&nbsp;}}'
									+'{\\multiplydecpowten{$$scienceNumber}{$$multiplier}{hide}}'
							),
				helpAnswer: dataUtils.pre(
								'\\grp'
									+'{\\str{Answer: &nbsp; $$helpNumber}}'	
							),
				template: 'displayEvaluation' 
			 }
			 ,
			// prob 18
			{
				problemStatement: dataUtils.pre(
								'\\rowgrp'
									+'{\\str{Express the following scientific notation in standard notation: &nbsp;}}'
									+'{\\str{&nbsp;}}'
									+'{\\grp'
										+'{\\str{$$scienceNumber &nbsp;x}}'
										+'{\\exp{\\str{$$base}}{\\str{$$exp1}}}'
									+'}'
							),
				answerInstructions: '',
				scienceNumber: '3',
				base: '10',
				exp1: '-5 ',
				positiveExp1: '5',
				longhand: 'five',
				multiplier: '.00001',
				answer: '0.00003',
				helpNumber: '0.00003',
				solutionAnswer: dataUtils.pre(
								'\\rowgrp'
									+'{\\str{$$answerInstructions}}'
									+'{\\grp'
										+'{\\input{$$answer}}'
									+'}'
							),
				line1: dataUtils.pre(
								'\\rowgrp'
									+'{\\str{In scientific notation the exponent above the base of 10 tells us the direction <u>and</u> the number of places to move the decimal point in the given number.}}'
									+'{\\str{&nbsp;}}'
									+'{\\str{In this case the exponent of negative $$positiveExp1 in 10<sup>$$exp1 </sup> &nbsp;tells us to move the decimal point in $$scienceNumber $$longhand decimal places to the left.}}'
									+'{\\str{&nbsp;}}'
									+'{\\grp'
										+'{\\str{$$scienceNumber &nbsp;x}}'
										+'{\\exp{\\str{$$base}}{\\str{$$exp1}}}'
										+'{\\str{&nbsp;&nbsp;means:}}'
									+'}'
									+'{\\str{&nbsp;}}'
									+'{\\multiplydecpowten{$$scienceNumber}{$$multiplier}{hide}}'
							),
				helpAnswer: dataUtils.pre(
								'\\grp'
									+'{\\str{Answer: &nbsp; $$helpNumber}}'	
							),
				template: 'displayEvaluation' 
			 }
			 ,
			// prob 19
			{
				problemStatement: dataUtils.pre(
								'\\rowgrp'
									+'{\\str{Express the following value in scientific notation:}}'
									+'{\\str{&nbsp;}}'
									+'{\\grp'
										+'{\\str{$$problemNumber}}'
									+'}'
							),
				answerInstructions: '',
				problemNumber: '0.503',
				scienceNumber: '5.03',
				rightLeft: 'left',
				base: '10',
				exp1: '-1 ',
				ansExp1: '-1',
				longhand: 'one',
				firstDigit: '5',
				lastDigit: '3',
				combineTable: '<table>'
								+'<tr>'
									+'<td>'
										+'<span>(From the 1<sup>st</sup> step)</span>'
									+'</td>'
									+'<td>'
										+'<span>&nbsp;&bull;&nbsp;</span>'
									+'</td>'
									+'<td>'
										+'<span>(From the 2<sup>nd</sup> step)</span>'
									+'</td>'
								+'</tr>'
								+'<tr>'
									+'<td class=textAlignRight></span>'
										+'<span>5.03</span>'
									+'</td>'
									+'<td>'
										+'<span>&nbsp;x&nbsp;</span>'
									+'</td>'
									+'<td class=textAlignLeft>'
										+'<span>10<sup> -1</sup></span>'
									+'</td>'
								+'</tr>'
							+'</table>',
				solutionAnswer: dataUtils.pre(
								'\\rowgrp'
									+'{\\str{$$answerInstructions}}'
									+'{\\grp'
										+'{\\input{$$scienceNumber}}'
										+'{\\str{x}}'
										+'{\\exp{\\input{$$base}}{\\input{$$ansExp1}}}'
									+'}'
							),
				line1: dataUtils.pre(
								'\\rowgrp'
									+'{\\str{To rewrite a number in scientific notation:}}'
									+'{\\str{&nbsp;}}'
									+'{\\str{<u>First Step</u>: Rewrite the given number by inserting the decimal point to the $$rightLeft of the first non&#45;zero digit. This will always create a number that is greater than or equal to one whole and less than 10.}}'
									+'{\\str{&nbsp;}}'
									+'{\\str{In $$problemNumber the first non&#45;zero number is the $$firstDigit. Therefore, we will insert the decimal point to the right of the $$firstDigit.}}'
									+'{\\str{&nbsp;}}'
									+'{\\str{The first part of our scientific notation answer will be $$scienceNumber.}}'
									+'{\\str{&nbsp;}}'
									+'{\\str{<u>Second Step</u>: Ask how many places <span class=bottomBlack>and</span> which direction we would need to move the decimal point in $$scienceNumber to get the original value of $$problemNumber.}}'
									+'{\\str{&nbsp;}}'
									+'{\\str{To get from $$scienceNumber to $$problemNumber, we would need to move the decimal point $$longhand place to the $$rightLeft. We represent this as a power of 10, and get <span class=whiteSpaceNoWrap>10<sup>$$exp1</sup>. &nbsp;It</span> is 10<sup> $$exp1</sup>&nbsp; that tells us to move the decimal point $$longhand place to the $$rightLeft.}}'
									+'{\\str{&nbsp;}}'
									+'{\\str{<u>Final Answer</u>: Write these two parts as a product. It is common practice to use the arithmetic \"x\" for the multiplication symbol in scientific notation.}}'
									+'{\\str{&nbsp;}}'
									+'{\\html{'
										+'$$combineTable'
									+'}}'
									+'{\\html{&nbsp;}}'
							),
				helpAnswer: dataUtils.pre(
								'\\grp'
									+'{\\str{Answer: &nbsp; $$scienceNumber &nbsp;x}}'
									+'{\\exp{\\str{$$base}}{\\str{$$exp1}}}'
							),
				template: 'displayEvaluation' 
			 }
			 ,
			// prob 20
			{
				problemStatement: dataUtils.pre(
								'\\rowgrp'
									+'{\\str{Express the following value in scientific notation:}}'
									+'{\\str{&nbsp;}}'
									+'{\\grp'
										+'{\\str{$$problemNumber}}'
									+'}'
							),
				answerInstructions: '',
				problemNumber: '0.405',
				scienceNumber: '4.05',
				rightLeft: 'left',
				base: '10',
				exp1: '-1 ',
				ansExp1: '-1',
				longhand: 'one',
				firstDigit: '4',
				lastDigit: '',
				combineTable: '<table>'
								+'<tr>'
									+'<td>'
										+'<span>(From the 1<sup>st</sup> step)</span>'
									+'</td>'
									+'<td>'
										+'<span>&nbsp;&bull;&nbsp;</span>'
									+'</td>'
									+'<td>'
										+'<span>(From the 2<sup>nd</sup> step)</span>'
									+'</td>'
								+'</tr>'
								+'<tr>'
									+'<td class=textAlignRight></span>'
										+'<span>4.05</span>'
									+'</td>'
									+'<td>'
										+'<span>&nbsp;x&nbsp;</span>'
									+'</td>'
									+'<td class=textAlignLeft>'
										+'<span>10<sup> -1</sup></span>'
									+'</td>'
								+'</tr>'
							+'</table>',
				solutionAnswer: dataUtils.pre(
								'\\rowgrp'
									+'{\\str{$$answerInstructions}}'
									+'{\\grp'
										+'{\\input{$$scienceNumber}}'
										+'{\\str{x}}'
										+'{\\exp{\\input{$$base}}{\\input{$$ansExp1}}}'
									+'}'
							),
				line1: dataUtils.pre(
								'\\rowgrp'
									+'{\\str{To rewrite a number in scientific notation:}}'
									+'{\\str{&nbsp;}}'
									+'{\\str{<u>First Step</u>: Rewrite the given number by inserting the decimal point to the $$rightLeft of the first non&#45;zero digit. This will always create a number that is greater than or equal to one whole and less than 10.}}'
									+'{\\str{&nbsp;}}'
									+'{\\str{In $$problemNumber the first non&#45;zero number is the $$firstDigit. Therefore, we will insert the decimal point to the right of the $$firstDigit.}}'
									+'{\\str{&nbsp;}}'
									+'{\\str{The first part of our scientific notation answer will be $$scienceNumber.}}'
									+'{\\str{&nbsp;}}'
									+'{\\str{<u>Second Step</u>: Ask how many places <span class=bottomBlack>and</span> which direction we would need to move the decimal point in $$scienceNumber to get the original value of $$problemNumber.}}'
									+'{\\str{&nbsp;}}'
									+'{\\str{To get from $$scienceNumber to $$problemNumber, we would need to move the decimal point $$longhand place to the $$rightLeft. We represent this as a power of 10, and get <span class=whiteSpaceNoWrap>10<sup>$$exp1</sup>. &nbsp;It</span> is 10<sup> $$exp1</sup>&nbsp; that tells us to move the decimal point $$longhand place to the $$rightLeft.}}'
									+'{\\str{&nbsp;}}'
									+'{\\str{<u>Final Answer</u>: Write these two parts as a product. It is common practice to use the arithmetic \"x\" for the multiplication symbol in scientific notation.}}'
									+'{\\str{&nbsp;}}'
									+'{\\html{'
										+'$$combineTable'
									+'}}'
									+'{\\html{&nbsp;}}'
							),
				helpAnswer: dataUtils.pre(
								'\\grp'
									+'{\\str{Answer: &nbsp; $$scienceNumber &nbsp;x}}'
									+'{\\exp{\\str{$$base}}{\\str{$$exp1}}}'
							),
				template: 'displayEvaluation' 
			 }
			 ,
			// prob 21
			{
				problemStatement: dataUtils.pre(
								'\\rowgrp'
									+'{\\str{Express the following scientific notation in standard notation: &nbsp;}}'
									+'{\\str{&nbsp;}}'
									+'{\\grp'
										+'{\\str{$$scienceNumber &nbsp;x}}'
										+'{\\exp{\\str{$$base}}{\\str{$$exp1}}}'
									+'}'
							),
				answerInstructions: '',
				scienceNumber: '7.6',
				base: '10',
				exp1: '1',
				positiveExp1: '1',
				longhand: 'one',
				multiplier: '10',
				answer: '76',
				helpNumber: '76',
				solutionAnswer: dataUtils.pre(
								'\\rowgrp'
									+'{\\str{$$answerInstructions}}'
									+'{\\grp'
										+'{\\input{$$answer}}'
									+'}'
							),
				line1: dataUtils.pre(
								'\\rowgrp'
									+'{\\str{In scientific notation the exponent above the base of 10 tells us the direction <u>and</u> the number of places to move the decimal point in the given number.}}'
									+'{\\str{&nbsp;}}'
									+'{\\str{In this case the exponent of positive $$positiveExp1 in 10<sup>$$exp1 </sup> &nbsp;tells us to move the decimal point in $$scienceNumber $$longhand one decimal place to the right.}}'
									+'{\\str{&nbsp;}}'
									+'{\\grp'
										+'{\\str{$$scienceNumber &nbsp;x}}'
										+'{\\exp{\\str{$$base}}{\\str{$$exp1}}}'
										+'{\\str{&nbsp;&nbsp;means:}}'
									+'}'
									+'{\\str{&nbsp;}}'
									+'{\\multiplydecpowten{$$scienceNumber}{$$multiplier}{hide}}'
							),
				helpAnswer: dataUtils.pre(
								'\\grp'
									+'{\\str{Answer: &nbsp; $$helpNumber}}'	
							),
				template: 'displayEvaluation' 
			 }
			  ,
			// prob 22
			{
				problemStatement: dataUtils.pre(
								'\\rowgrp'
									+'{\\str{Express the following scientific notation in standard notation: &nbsp;}}'
									+'{\\str{&nbsp;}}'
									+'{\\grp'
										+'{\\str{$$scienceNumber &nbsp;x}}'
										+'{\\exp{\\str{$$base}}{\\str{$$exp1}}}'
									+'}'
							),
				answerInstructions: '',
				scienceNumber: '8.4',
				base: '10',
				exp1: '0',
				positiveExp1: 'zero',
				longhand: 'zero',
				multiplier: '1',
				answer: '8.4',
				helpNumber: '8.4',
				solutionAnswer: dataUtils.pre(
								'\\rowgrp'
									+'{\\str{$$answerInstructions}}'
									+'{\\grp'
										+'{\\input{$$answer}}'
									+'}'
							),
				line1: dataUtils.pre(
								'\\rowgrp'
									+'{\\str{In scientific notation the exponent above the base of 10 tells us the direction <u>and</u> the number of places to move the decimal point in the given number.}}'
									+'{\\str{&nbsp;}}'
									+'{\\str{In this case the exponent of $$positiveExp1 in 10<sup>$$exp1 </sup> &nbsp;tells us to move the decimal point in $$scienceNumber $$longhand decimal places.}}'
									+'{\\str{&nbsp;}}'
									+'{\\grp'
										+'{\\str{$$scienceNumber &nbsp;x}}'
										+'{\\exp{\\str{$$base}}{\\str{$$exp1}}}'
										+'{\\str{&nbsp;means&nbsp; 8.4}}'
									+'}'
									+'{\\str{&nbsp;}}'
							),
				helpAnswer: dataUtils.pre(
								'\\grp'
									+'{\\str{Answer: &nbsp; $$helpNumber}}'	
							),
				template: 'displayEvaluation' 
			 }
			 ,
			// prob 23
			{
				problemStatement: dataUtils.pre(
								'\\rowgrp'
									+'{\\str{Express the following value in scientific notation:}}'
									+'{\\str{&nbsp;}}'
									+'{\\grp'
										+'{\\str{$$problemNumber}}'
									+'}'
							),
				answerInstructions: '',
				problemNumber: '2,605,000,000,000',
				scienceNumber: '2.605',
				rightLeft: 'right',
				base: '10',
				exp1: '12',
				longhand: '12',
				firstDigit: '2',
				lastDigit: '5',
				combineTable: '<table>'
								+'<tr>'
									+'<td>'
										+'<span>(From the 1<sup>st</sup> step)</span>'
									+'</td>'
									+'<td>'
										+'<span>&nbsp;&bull;&nbsp;</span>'
									+'</td>'
									+'<td>'
										+'<span>(From the 2<sup>nd</sup> step)</span>'
									+'</td>'
								+'</tr>'
								+'<tr>'
									+'<td class=textAlignRight></span>'
										+'<span>2.605</span>'
									+'</td>'
									+'<td>'
										+'<span>&nbsp;x&nbsp;</span>'
									+'</td>'
									+'<td class=textAlignLeft>'
										+'<span>10<sup> 12</sup></span>'
									+'</td>'
								+'</tr>'
							+'</table>',
				solutionAnswer: dataUtils.pre(
								'\\rowgrp'
									+'{\\str{$$answerInstructions}}'
									+'{\\grp'
										+'{\\input{$$scienceNumber}}'
										+'{\\str{x}}'
										+'{\\exp{\\input{$$base}}{\\input{$$exp1}}}'
									+'}'
							),
				line1: dataUtils.pre(
								'\\rowgrp'
									+'{\\str{To rewrite a number in scientific notation:}}'
									+'{\\str{&nbsp;}}'
									+'{\\str{<u>First Step</u>: Rewrite the given number by inserting the decimal point to the $$rightLeft of the first non&#45;zero digit. This will always create a number that is greater than or equal to one whole and less than 10.}}'
									+'{\\str{&nbsp;}}'
									+'{\\str{In $$problemNumber the first non&#45;zero number is the $$firstDigit. Therefore, we will insert the decimal point to the right of the $$firstDigit.}}'
									+'{\\str{&nbsp;}}'
									+'{\\str{The first part of our scientific notation answer will be $$scienceNumber. Notice that we do not include any zeros to the right of the $$lastDigit (the last non&#45;zero digit).}}'
									+'{\\str{&nbsp;}}'
									+'{\\str{<u>Second Step</u>: Ask how many places <span class=bottomBlack>and</span> which direction we would need to move the decimal point in $$scienceNumber to get the original value of $$problemNumber.}}'
									+'{\\str{&nbsp;}}'
									+'{\\str{To get from $$scienceNumber to $$problemNumber, we would need to move the decimal point $$longhand places to the $$rightLeft. We represent this as a power of 10, and get <span class=whiteSpaceNoWrap>10<sup>$$exp1</sup>. &nbsp;It</span> is 10<sup> $$exp1</sup>&nbsp; that tells us to move the decimal point $$longhand places to the $$rightLeft.}}'
									+'{\\str{&nbsp;}}'
									+'{\\str{<u>Final Answer</u>: Write these two parts as a product. It is common practice to use the arithmetic \"x\" for the multiplication symbol in scientific notation.}}'
									+'{\\str{&nbsp;}}'
									+'{\\html{'
										+'$$combineTable'
									+'}}'
									+'{\\html{&nbsp;}}'
							),
				helpAnswer: dataUtils.pre(
								'\\grp'
									+'{\\str{Answer: &nbsp; $$scienceNumber &nbsp;x}}'
									+'{\\exp{\\str{$$base}}{\\str{$$exp1}}}'
							),
				template: 'displayEvaluation' 
			 }
			 ,
			// prob 23
			{
				problemStatement: dataUtils.pre(
								'\\rowgrp'
									+'{\\str{Express the following value in scientific notation:}}'
									+'{\\str{&nbsp;}}'
									+'{\\grp'
										+'{\\str{$$problemNumber}}'
									+'}'
							),
				answerInstructions: '',
				problemNumber: '90,700,000,000',
				scienceNumber: '9.07',
				rightLeft: 'right',
				base: '10',
				exp1: '10',
				longhand: '10',
				firstDigit: '9',
				lastDigit: '7',
				combineTable: '<table>'
								+'<tr>'
									+'<td>'
										+'<span>(From the 1<sup>st</sup> step)</span>'
									+'</td>'
									+'<td>'
										+'<span>&nbsp;&bull;&nbsp;</span>'
									+'</td>'
									+'<td>'
										+'<span>(From the 2<sup>nd</sup> step)</span>'
									+'</td>'
								+'</tr>'
								+'<tr>'
									+'<td class=textAlignRight></span>'
										+'<span>9.07</span>'
									+'</td>'
									+'<td>'
										+'<span>&nbsp;x&nbsp;</span>'
									+'</td>'
									+'<td class=textAlignLeft>'
										+'<span>10<sup> 10</sup></span>'
									+'</td>'
								+'</tr>'
							+'</table>',
				solutionAnswer: dataUtils.pre(
								'\\rowgrp'
									+'{\\str{$$answerInstructions}}'
									+'{\\grp'
										+'{\\input{$$scienceNumber}}'
										+'{\\str{x}}'
										+'{\\exp{\\input{$$base}}{\\input{$$exp1}}}'
									+'}'
							),
				line1: dataUtils.pre(
								'\\rowgrp'
									+'{\\str{To rewrite a number in scientific notation:}}'
									+'{\\str{&nbsp;}}'
									+'{\\str{<u>First Step</u>: Rewrite the given number by inserting the decimal point to the $$rightLeft of the first non&#45;zero digit. This will always create a number that is greater than or equal to one whole and less than 10.}}'
									+'{\\str{&nbsp;}}'
									+'{\\str{In $$problemNumber the first non&#45;zero number is the $$firstDigit. Therefore, we will insert the decimal point to the right of the $$firstDigit.}}'
									+'{\\str{&nbsp;}}'
									+'{\\str{The first part of our scientific notation answer will be $$scienceNumber. Notice that we do not include any zeros to the right of the $$lastDigit (the last non&#45;zero digit).}}'
									+'{\\str{&nbsp;}}'
									+'{\\str{<u>Second Step</u>: Ask how many places <span class=bottomBlack>and</span> which direction we would need to move the decimal point in $$scienceNumber to get the original value of $$problemNumber.}}'
									+'{\\str{&nbsp;}}'
									+'{\\str{To get from $$scienceNumber to $$problemNumber, we would need to move the decimal point $$longhand places to the $$rightLeft. We represent this as a power of 10, and get <span class=whiteSpaceNoWrap>10<sup>$$exp1</sup>. &nbsp;It</span> is 10<sup> $$exp1</sup>&nbsp; that tells us to move the decimal point $$longhand places to the $$rightLeft.}}'
									+'{\\str{&nbsp;}}'
									+'{\\str{<u>Final Answer</u>: Write these two parts as a product. It is common practice to use the arithmetic \"x\" for the multiplication symbol in scientific notation.}}'
									+'{\\str{&nbsp;}}'
									+'{\\html{'
										+'$$combineTable'
									+'}}'
									+'{\\html{&nbsp;}}'
							),
				helpAnswer: dataUtils.pre(
								'\\grp'
									+'{\\str{Answer: &nbsp; $$scienceNumber &nbsp;x}}'
									+'{\\exp{\\str{$$base}}{\\str{$$exp1}}}'
							),
				template: 'displayEvaluation' 
			 }
		];
		
		/*shuffle = [
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
				{ problems: [23,24], total: 1}
		];*/
		return dataUtils.build(desc, template, data);
    
    	//return dataUtils.build(desc, template, data, shuffle);
}]);
