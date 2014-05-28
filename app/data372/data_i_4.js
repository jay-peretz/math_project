/*global angular */

angular.module('mathSkills').service('data_i_4', ['dataUtils', function (dataUtils) {
    var desc = {
            title: 'I.4 More Conversions',
            path: 'i.4-more-conversions',
            children: []
        },
        template = {
			first: {
                title: 'Change a Percent to a Decimal',
                children: [{
                    title: 'Main Answer',
                    children: [{
                         problem: '\\rowgrp'
						 				+'{\\str{Change this fraction percent to a decimal percent:}}'
										+'{\\grp'
											+'{\\mixed{\\html{$problemWhole}}{\\frac{\\str{$problemNum}}{\\str{$problemDen}}}}'
											+'{\\str{%}}'
										+'}'
										+'{\\str{$instructRound}}',
						answer: '\\grp{\\input{$decimalPercent}}{\\str{%}}',
						controls: {
							"checkAnswer": true,
							"help": '\\rowgrp'
										+'{\\grp'
											+'{\\str{The fractional percent of \xA0}}'
											+'{\\mixed{\\html{$problemWhole}}{\\frac{\\str{$problemNum}}{\\str{$problemDen}}}}'
											+'{\\str{%}}'
										+'}'
										+'{\\grp'
											+'{\\str{equals the decimal percent of \xA0}}'
											+'{\\str{$decimalPercent% $rounded}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\css{\\str{Answer:}}{help-answer-text}}'
										+'{\\html{&nbsp;}}'
										+'{\\css'
											+'{\\str{$decimalPercent%}}'
											+'{help-answer-text}'
										+'}'
										+'{\\html{&nbsp;}}'
						}
                    },
					{
                         problem: '\\rowgrp'
									 +'{\\str{Change this fraction percent to a decimal percent:}}'
									 +'{\\str{\xA0}}'
									 +'{\\grp'
									 	+'{\\mixed{\\html{$problemWhole}}{\\frac{\\str{$problemNum}}{\\str{$problemDen}}}}'
										+'{\\str{%}}'
									+'}'
									 +'{\\str{\xA0}}'
									 +'{\\str{$instructRound}}',
						answer: '\\css'
									+'{\\rowgrp'
										+'{\\grp'
											+'{\\mixed{\\html{$problemWhole}}{\\frac{\\fracstr{$problemNum}}{\\fracstr{$problemDen}}}}'
											+'{\\str{%}}'
											+'{\\sign{=}}'
											+'{\\str{$decimalPercent}}'
											+'{\\str{%}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\css'
											+'{\\str{Now change the $changePercent into a decimal:}}'
											+'{alert alert-info}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\input{$decimalAnswer}}'
										+'}'						
									+'}{well}',
						controls: {
							"checkAnswer": true,
							"help": '\\rowgrp'
										+'{\\percentarrows{$decimalPercent}{.01}{percent}{decimal}}'
										+'{\\html{&nbsp;}}'
										+'{\\css'
											+'{\\str{Answer: \xA0 $decimalAnswer}}'
											+'{help-answer-text}'
										+'}'
						}
                    }]
                }]
            },
           second: {
                title: 'Change a Percent to a Fraction (Directly)',
                children: [{
                    title: 'Main Answer',
                    children: [{
						problem: '\\rowgrp'
									+'{\\str{Convert the percent in fractional form into a percent in decimal form.$instructRound}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp'
										+'{\\mixed{\\html{$problemWhole}}{\\frac{\\fracstr{$problemNum}}{\\fracstr{$problemDen}}}}'
										+'{\\str{%}}'
									+'}',
						answer: '\\grp{\\input{$decimalPercent}}{\\str{%}}',			
						controls: {
							"checkAnswer": true,
							"help": '\\rowgrp'
										+'{\\str{$instructHelpRound}}'
										+'{\\grp'
											+'{\\mixed{\\html{$problemWhole}}{\\frac{\\fracstr{$problemNum}}{\\fracstr{$problemDen}}}}'
											+'{\\str{%}}'
											+'{\\sign{ \xA0 = \xA0 }}'
											+'{\\str{$decimalPercent}}'
											+'{\\str{%}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{css{\\str{Answer: \xA0 \xA0}}{help-answer-text}}'
											+'{css{\\str{$decimalAnswerPercent %}}{help-answer-text-tight}}'
										+'}'
						}
					}, {
						problem: '\\rowgrp'
									+'{\\str{Convert the percent in fractional form into a percent in decimal form:}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp'
										+'{\\mixed{\\html{$problemWhole}}{\\frac{\\fracstr{$problemNum}}{\\fracstr{$problemDen}}}}'
										+'{\\str{%}}'
									+'}',
						answer: '\\css'
									+'{\\rowgrp'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\mixed{\\html{$problemWhole}}{\\frac{\\fracstr{$problemNum}}{\\fracstr{$problemDen}}}}'
											+'{\\str{%}}'
											+'{\\sign{=}}'
											+'{\\str{$decimalPercent}}'
											+'{\\str{%}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\html{&nbsp;}}'
										+'{css{\\str{Convert the percent in decimal form into a decimal:}}{alert alert-info}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp{\\input{$decimal}}}'
									+'}'
								+'{well}',
						controls: {
							"checkAnswer": true,
							"help": '\\rowgrp'
										+'{\\grp'
											+'{\\mixed{\\html{$problemWhole}}{\\frac{\\fracstr{$problemNum}}{\\fracstr{$problemDen}}}}'
											+'{\\str{%}}'
											+'{\\sign{=}}'
											+'{\\str{$decimalPercent}}'
											+'{\\str{%}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\percentarrows{$decimalAnswerPercent}{0.01}{percent}{decimal}}'
										+'{\\html{&nbsp;}}'
										+'{\\css{\\str{Answer:  $decimal}}{help-answer-text}}'
						}
					}, {
						problem: '\\rowgrp'
									+'{\\str{Convert the percent in fractional form into a percent in decimal form:}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp'
										+'{\\mixed{\\html{$problemWhole}}{\\frac{\\fracstr{$problemNum}}{\\fracstr{$problemDen}}}}'
										+'{\\str{%}}'
									+'}',
						answer: '\\css'
									+'{\\rowgrp'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\mixed{\\html{$problemWhole}}{\\frac{\\fracstr{$problemNum}}{\\fracstr{$problemDen}}}}'
											+'{\\str{%}}'
											+'{\\sign{=}}'
											+'{\\str{$decimalPercent}}'
											+'{\\str{%}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\html{&nbsp;}}'
										+'{\\str{Convert the percent in decimal form into a decimal:}}'
										+'{\\html{&nbsp;}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\str{$decimalAnswerPercent}}'
											+'{\\str{%}}'
											+'{\\sign{=}}'
											+'{\\str{$decimal}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\html{&nbsp;}}'
										+'{css{\\str{Convert the decimal to a fraction:}}{alert alert-info}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp{\\frac{\\input{$answerNum}}{\\input{$answerDen}}}}'
									+'}'
								+'{well}',
						controls: {
							"checkAnswer": true,							
							"help": '\\rowgrp'
										+'{\\grp'
											+'{\\mixed{\\html{$problemWhole}}{\\frac{\\fracstr{$problemNum}}{\\fracstr{$problemDen}}}}'
											+'{\\str{%}}'
											+'{\\sign{=}}'
											+'{\\str{$decimalPercent}}'
											+'{\\str{%}}'
											+'{\\sign{=}}'
											+'{\\str{$decimal}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\str{The decimal $decimal is converted by stating the decimal number out loud.  Use the appropriate place value:}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\str{$decimal}}'
											+'{\\sign{ \xA0 = \xA0 }}'
											+'{\\html{"$outLoud"}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\str{or: \xA0}}'
											+'{\\frac{\\fracstr{$helpNum}}{\\fracstr{$helpDen}}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\str{Reduce whenever possible.}}'
										+'{\\html{&nbsp;}}'
										+'{css'
											+'{\\grp'
												+'{\\str{Answer: \xA0 \xA0}}'
												+'{\\frac{\\fracstr{$answerNum}}{\\fracstr{$answerDen}}}'
											+'}'
											+'{help-answer-text}'
										+'}'
						}
					}]
                }]
            },
			third: {
                title: 'Change a Percent to a Fraction (Directly)',
                children: [{
                    title: 'Main Answer',
                    children: [{
						problem: '\\rowgrp'
									+'{\\str{Write the percent as a percent in mixed number form:}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp'
										+'{\\str{$problemDecimal}}'
										+'{\\str{%}}'
									+'}',
						answer: '\\grp'
									+'{\\mixed{\\input{$answerFractionWhole}}{\\frac{\\input{$answerFractionNum}}{\\input{$answerFractionDen}}}}'
									+'{\\str{%}}',		
						controls: {
							"checkAnswer": true,
							"help": '\\rowgrp'
										+'{\\grp'
											+'{\\str{$problemDecimal}}'
											+'{\\str{%}}'
											+'{\\sign{ \xA0 = \xA0 }}'
											+'{\\mixed{\\html{$answerFractionWhole}}{\\frac{\\fracstr{$answerFractionNum}}{\\fracstr{$answerFractionDen}}}}'
											+'{\\str{%}}'
										+'}'
										+'{\\grp'
											+'{css'
												+'{\\str{Answer: \xA0 \xA0}}'
												+'{help-answer-text}'
											+'}'
											+'{css'
												+'{\\mixed{\\html{$answerFractionWhole}}{\\frac{\\fracstr{$answerFractionNum}}{\\fracstr{$answerFractionDen}}}}'
												+'{help-answer-text-tight}'
											+'}'
											+'{css'
												+'{\\str{%}}'
												+'{help-answer-text-tight}'
											+'}'
										+'}'
						}
						
					}, {						
						problem: '\\rowgrp'
									+'{\\str{Write the percent as a percent in mixed number form:}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp'
										+'{\\str{$problemDecimal}}'
										+'{\\str{%}}'
									+'}',
						answer: '\\css'
									+'{\\rowgrp'
										+'{\\html{&nbsp;}}'
										+'{\\css'
											+'{\\grp'
												+'{\\str{$problemDecimal}}'
												+'{\\str{%}}'
												+'{\\sign{=}}'
												+'{\\mixed{\\str{$answerFractionWhole}}{\\frac{\\str{$answerFractionNum}}{\\str{$answerFractionDen}}}}'
												+'{\\str{%}}'
											+'}'
											+'{padLastZero}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{css'
											+'{\\str{Change the percent into its equivalent fraction (reduced to lowest terms):}}'
											+'{alert alert-info}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\frac{\\input{$answerSecondNum}}{\\input{$answerSecondDen}}}'
										+'}'
									+'}'
								+'{well}',						
						controls: {
							"checkAnswer": true,
							"help": '\\rowgrp'
										+'{\\css'
											+'{\\grp'
												+'{\\mixed{\\html{$answerFractionWhole}}{\\frac{\\fracstr{$answerFractionNum}}{\\fracstr{$answerFractionDen}}}}'
												+'{\\str{%}}'
											+'}'
											+'{padLastZero}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\str{can be converted into a fraction by dividing by 100.}}'
										+'{\\str{Solve:}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\mixed{\\html{$answerFractionWhole}}{\\frac{\\fracstr{$answerFractionNum}}{\\fracstr{$answerFractionDen}}}}'
											+'{\\sign{&divide;}}'
											+'{\\frac{\\fracstr{100}}{\\fracstr{1}}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\str{Always reduce the fraction if possible.}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{css'
												+'{\\str{Answer: \xA0 \xA0}}'
												+'{help-answer-text}'
											+'}'
											+'{css'
												+'{\\mixed{\\html{$answerSecondWhole}}{\\frac{\\fracstr{$answerSecondNum}}{\\fracstr{$answerSecondDen}}}}'
												+'{help-answer-text-tight}'
											+'}'
										+'}'
						}
					}]
                }]
            },
			fourth: {
                title: 'Decimal & Fraction Form of Percents',
                children: [{
                    title: 'Main Answer',
                    children: [{
						problem: '\\rowgrp'
									+'{\\str{Change the fraction to decimal:}}'
									+'{\\html{&nbsp;}}'
									+'{\\mixed{\\html{$fractionWhole}}{\\frac{\\fracstr{$fractionNum}}{\\fracstr{$fractionDen}}}}',
						answer: '\\grp{\\input{$answerDecimal}}',	
						controls: {
							"checkAnswer": true,
							"help": '\\rowgrp'
										+'{\\str{Divide the numerator of the fraction by the denominator.}}'
										+'{\\mixed{\\html{$fractionWhole}}{\\frac{\\fracstr{$fractionNum}}{\\fracstr{$fractionDen}}}}'
										+'{\\grp'
											+'{\\str{the fraction \xA0}}'
											+'{\\frac{\\str{$fractionNum}}{\\str{$fractionDen}}}'
											+'{\\str{\xA0 means \xA0 $fractionNum / $fractionDen}}}'
										+'{\\html{&nbsp;}}'
										+'{\\css'
											+'{\\str{\xA0 Answer: \xA0 $answerDecimal}}'
											+'{help-answer-text}'
										+'}'
						}
						
					}, {
						problem: '\\rowgrp'
									+'{\\str{Change the fraction to decimal:}}'
									+'{\\html{&nbsp;}}'
									+'{\\mixed{\\html{$fractionWhole}}{\\frac{\\fracstr{$fractionNum}}{\\fracstr{$fractionDen}}}}',
						answer: '\\css'
									+'{\\rowgrp'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\mixed{\\html{$fractionWhole}}{\\frac{\\fracstr{$fractionNum}}{\\fracstr{$fractionDen}}}}'
											+'{\\sign{=}}'
											+'{\\str{$answerDecimal}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\html{&nbsp;}}'
										+'{css'
											+'{\\str{Change the decimal to a percentage:}}'
											+'{alert alert-info}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\input{$answerPercent}}'
											+'{\\str{%}}'
										+'}'
									+'}'
									+'{well}',
						controls: {
							"checkAnswer": true,
							"help": '\\rowgrp'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\mixed{\\html{$fractionWhole}}{\\frac{\\fracstr{$fractionNum}}{\\fracstr{$fractionDen}}}}'
											+'{\\sign{=}}'
											+'{\\str{$answerDecimal}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\html{&nbsp;}}'
										+'{\\str{Change the decimal to a percentage:}}'
										+'{\\html{&nbsp;}}'
										+'{\\percentarrows{$answerDecimal}{100}{decimal}{percent}}'
										+'{\\html{&nbsp;}}'
										+'{\\css{\\str{Answer: $answerPercent %}}{help-answer-text}}'
										+'{\\html{&nbsp;}}'
						}
					}, {
						problem: '\\rowgrp'
									+'{\\str{Change the fraction to decimal:}}'
									+'{\\html{&nbsp;}}'
									+'{\\mixed{\\html{$fractionWhole}}{\\frac{\\fracstr{$fractionNum}}{\\fracstr{$fractionDen}}}}',
						answer: '\\css'
									+'{\\rowgrp'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\mixed{\\html{$fractionWhole}}{\\frac{\\fracstr{$fractionNum}}{\\fracstr{$fractionDen}}}}'
											+'{\\sign{=}}'
											+'{\\str{$answerDecimal}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\html{&nbsp;}}'
										+'{\\str{Change the decimal to a percentage:}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\str{$answerDecimal}}'
											+'{\\sign{=}}'
											+'{\\str{$answerPercent}}'
											+'{\\str{%}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{css{\\str{Change the decimal percentage to a fractional or mixed number percentage:}}{alert alert-info}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\mixed{\\input{$fractionPercentWhole}}{\\frac{\\input{$fractionPercentNum}}{\\input{$fractionPercentDen}}}}'
											+'{\\str{%}}'
										+'}'
									+'}'
									+'{well}',
						controls: {
							"checkAnswer": true,
							"help": '\\rowgrp'
										+'{\\str{Write the decimal place value as the denominator of the fraction.}}'
										+'{\\grp'
											+'{\\str{$answerPercent}}'
											+'{\\str{%}}'
											+'{\\sign{\xA0 = \xA0}}'
											+'{\\mixed{\\str{$helpWhole}}{\\frac{\\fracstr{$helpNum}}{\\fracstr{$helpDen}}}}'
											+'{\\str{%}}'
											+'{\\sign{ \xA0 = \xA0 }}'
											+'{\\mixed{\\str{$fractionPercentWhole}}{\\frac{\\fracstr{$fractionPercentNum}}{\\fracstr{$fractionPercentDen}}}}'
											+'{\\str{%}}'
										+'}'
										+'{\\grp'
											+'{css'
												+'{\\str{Answer: \xA0 \xA0}}'
												+'{help-answer-text}'
											+'}'
											+'{css'
												+'{\\mixed{\\str{$fractionPercentWhole}}{\\frac{\\fracstr{$fractionPercentNum}}{\\fracstr{$fractionPercentDen}}}}'
												+'{help-answer-text-tight}'
											+'}'
											+'{css'
												+'{\\str{%}}'
												+'{help-answer-text-tight}'
											+'}'
										+'}'
						}
					}]
                }]
            },
			fifth: {
                title: 'Decimal & Fraction Form of Percents',
                children: [{
                    title: 'Main Answer',
                    children: [{
						problem: '\\rowgrp'
									+'{\\str{Change the fraction to decimal.<br>$roundText:}}'
									+'{\\html{&nbsp;}}'
									+'{\\mixed{\\html{$fractionWhole}}{\\frac{\\fracstr{$fractionNum}}{\\fracstr{$fractionDen}}}}',
						answer: '\\grp{\\input{$answerDecimal}}',	
						controls: {
							"checkAnswer": true,
							"help": '\\rowgrp'
										+'{\\str{Divide the numerator of the fraction by the denominator.}}'
										+'{\\mixed{\\html{$fractionWhole}}{\\frac{\\fracstr{$fractionNum}}{\\fracstr{$fractionDen}}}}'
										+'{\\grp'
											+'{\\str{the fraction \xA0}}'
											+'{\\frac{\\str{$fractionNum}}{\\str{$fractionDen}}}'
											+'{\\str{\xA0 means &nbsp; $fractionNum / $fractionDen}}'
										+'}'
										+'{\\str{$roundText:}}'
										+'{\\html{&nbsp;}}'
										+'{\\str{$fractionNum / $fractionDen = $answerContinuedDecimal = $answerDecimal}}'
										+'{\\html{&nbsp;}}'
										+'{\\css{\\str{\xA0 Answer: \xA0 $answerDecimal}}{help-answer-text}}'
						}
						
					}, {
						problem: '\\rowgrp'
									+'{\\str{Change the fraction to decimal:}}'
									+'{\\html{&nbsp;}}'
									+'{\\mixed{\\html{$fractionWhole}}{\\frac{\\fracstr{$fractionNum}}{\\fracstr{$fractionDen}}}}',
						answer: '\\css'
									+'{\\rowgrp'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\mixed{\\html{$fractionWhole}}{\\frac{\\fracstr{$fractionNum}}{\\fracstr{$fractionDen}}}}'
											+'{\\sign{=}}'
											+'{\\str{$answerDecimal}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\html{&nbsp;}}'
										+'{css{\\str{Change the decimal to a percentage:}}{alert alert-info}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\input{$answerPercent}}'
											+'{\\str{%}}'
										+'}'
									+'}'
									+'{well}',
						controls: {
							"checkAnswer": true,
							"help": '\\rowgrp'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\mixed{\\html{$fractionWhole}}{\\frac{\\fracstr{$fractionNum}}{\\fracstr{$fractionDen}}}}'
											+'{\\sign{=}}'
											+'{\\str{$answerDecimal}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\html{&nbsp;}}'
										+'{\\str{Change the decimal to a percentage:}}'
										+'{\\html{&nbsp;}}'
										+'{\\percentarrows{$answerDecimal}{100}{decimal}{percent}}'
										+'{\\html{&nbsp;}}'
										+'{\\css{\\str{Answer: $answerPercent %}}{help-answer-text}}'
										+'{\\html{&nbsp;}}'
						}
					}, {
						problem: '\\rowgrp'
									+'{\\str{Change the fraction to decimal:}}'
									+'{\\html{&nbsp;}}'
									+'{\\mixed{\\html{$fractionWhole}}{\\frac{\\fracstr{$fractionNum}}{\\fracstr{$fractionDen}}}}',
						answer: '\\css'
									+'{\\rowgrp'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\mixed{\\html{$fractionWhole}}{\\frac{\\fracstr{$fractionNum}}{\\fracstr{$fractionDen}}}}'
											+'{\\sign{=}}'
											+'{\\str{$answerDecimal}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\html{&nbsp;}}'
										+'{\\str{Change the decimal to a percentage:}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\str{$answerDecimal}}'
											+'{\\sign{=}}'
											+'{\\str{$answerPercent}}'
											+'{\\str{%}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{css{\\str{Change the decimal percentage to a fractional or mixed number percentage:}}{alert alert-info}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\mixed{\\input{$fractionPercentWhole}}{\\frac{\\input{$fractionPercentNum}}{\\input{$fractionPercentDen}}}}'
											+'{\\str{%}}'
										+'}'
									+'}'
									+'{well}',
						controls: {
							"checkAnswer": true,
							"help": '\\rowgrp'
										+'{\\str{Write the decimal place value as the denominator of the fraction.}}'
										+'{\\grp'
											+'{\\str{$answerPercent}}'
											+'{\\str{%}}'
											+'{\\sign{\xA0 = \xA0}}'
											+'{\\mixed{\\str{$helpWhole}}{\\frac{\\fracstr{$helpNum}}{\\fracstr{$helpDen}}}}'
											+'{\\str{%}}'
											+'{\\sign{ \xA0 = \xA0 }}'
											+'{\\mixed{\\str{$fractionPercentWhole}}{\\frac{\\fracstr{$fractionPercentNum}}{\\fracstr{$fractionPercentDen}}}}'
											+'{\\str{%}}'
										+'}'
										+'{\\grp'
											+'{css'
												+'{\\str{Answer: \xA0 \xA0}}'
												+'{help-answer-text}'
											+'}'
											+'{css'
												+'{\\mixed{\\str{$fractionPercentWhole}}{\\frac{\\fracstr{$fractionPercentNum}}{\\fracstr{$fractionPercentDen}}}}'
												+'{help-answer-text-tight}'
											+'}'
											+'{css'
												+'{\\str{%}}'
												+'{help-answer-text-tight}'
											+'}'
										+'}'
						}
					}]
                }]
            }
	},
        data = [
			// problem 1
			{ instructRound: '', problemWhole: '8', problemNum: '1', problemDen: '2', rounded: "", decimalPercent: '8.5', decimalAnswer: '0.085', changePercent: 'percent', template: 'first'  },
			// problem 2
			{ instructRound: '', problemWhole: '29', problemNum: '4', problemDen: '5', rounded: "", decimalPercent: '29.8', decimalAnswer: '0.298', changePercent: 'rounded percent', template: 'first'  },
			// problem 3
			{ instructRound: '', instructHelpRound: '', problemWhole: '87', problemNum: '1', problemDen: '2', decimalPercent: '87.5', decimalAnswerPercent: '87.5',decimal: '0.875',  answerNum: '7', answerDen: '8', helpNum: '875', helpDen: '1000', outLoud: 'eight hundred seventy-five thousandths', template: 'second' },
			// problem 4
			{ instructRound: '<br>Round to the nearest hundredth of a percent:',instructHelpRound: 'Round to the nearest hundredth of a percent:<br><br>', problemWhole: '2', problemNum: '2', problemDen: '3', decimalPercent: '2.666... % &nbsp; = &nbsp; 2.67', decimalAnswerPercent: '2.67', decimal: '0.0267',  answerNum: '267', answerDen: '10000', helpNum: '267', helpDen: '10000', outLoud: 'two hundred sixty-seven ten-thousandths', template: 'second' },
			// problem 5
			{  problemDecimal: '42.7', answerFractionWhole: '42', answerFractionNum: '7', answerFractionDen: '10', answerSecondWhole: '&nbsp;', answerSecondNum: '427', answerSecondDen: '1000', template: 'third' },
			// problem 6
			{  problemDecimal: '6.75', answerFractionWhole: '6', answerFractionNum: '3', answerFractionDen: '4', answerSecondWhole: '&nbsp;', answerSecondNum: '27', answerSecondDen: '400', template: 'third' },
			// problem 7
			{ fractionWhole: '&nbsp;', fractionNum: '11', fractionDen: '40', answerDecimal: '0.275', answerPercent: '27.5', fractionPercentWhole: '27', fractionPercentNum: '1', fractionPercentDen: '2', helpWhole: '27', helpNum: '5', helpDen: '10', template: 'fourth' },
			// problem 8
			{ fractionWhole: '&nbsp;', fractionNum: '5', fractionDen: '9', roundText: 'Round to the nearest thousandths', answerDecimal: '0.556', answerContinuedDecimal: '0.555...', answerPercent: '55.6', fractionPercentWhole: '55', fractionPercentNum: '3', fractionPercentDen: '5', helpWhole: '55', helpNum: '6', helpDen: '10', template: 'fifth' }
        ];

    return dataUtils.build(desc, template, data);
}]);
