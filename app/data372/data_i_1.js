/*global angular */

angular.module('mathSkills').service('data_i_1', ['dataUtils', function (dataUtils) {
    var desc = {
            title: 'I.1 Conversions Between Decimals and Fractions or Mixed Numbers',
            path: 'i.1-conversions-between-decimals-and-fractions-or-mixed-numbers',
            children: []
        },
        template = {
			equivFracValueReduce: {
                title: 'Conversions Between Decimals & Fractions/Mixed Numbers',
                children: [{
                    title: 'Main Answer',
                    children: [{
                         problem: '\\rowgrp'
									+'{\\str{Write the equivalent fractional value (reduced to lowest terms) of this decimal:}}'
									+'{\\html{&nbsp;}}'
									+'{\\str{$decimal}}',
						answer: '\\mixed{\\input{$answerWhole}}{\\frac{\\input{$answerNum}}{\\input{$answerDen}}}',
						controls: {
							"checkAnswer": true,
							"help": '\\rowgrp'
							+'{\\str{Write the decimal place value as the denominator of the fraction:}}'
							+'{\\html{&nbsp;}}'
							+'{\\grp{\\mixed{\\str{$helpWhole}}{\\frac{\\fracstr{$helpNum}}{\\fracstr{$helpDen}}}}'
							+'{\\sign{\xA0 = \xA0}}'
							+'{\\mixed{\\str{$answerWhole}}{\\frac{\\fracstr{$answerNum}}{\\fracstr{$answerDen}}}}'
							+'{css{\\str{Answer: \xA0 }}{help-answer-text}}'
							+'{css{\\mixed{\\str{$answerWhole}}{\\frac{\\fracstr{$answerNum}}{\\fracstr{$answerDen}}}}{help-answer-text-tight}}'
                		}
                    }]
                }]
            },
			equivFracValueNoReduce: {
                title: 'Conversions Between Decimals & Fractions/Mixed Numbers',
                children: [{
                    title: 'Main Answer',
                    children: [{
                         problem: '\\rowgrp'
						 				+'{\\str{Write the equivalent fractional value (reduced to lowest terms) of this decimal:}}'
										+'{\\html{&nbsp;}}'
										+'{\\str{$decimal}}',
						answer: '\\mixed{\\input{$answerWhole}}{\\frac{\\input{$answerNum}}{\\input{$answerDen}}}',
						controls: {
							"checkAnswer": true,
							"help": '\\rowgrp'
							+'{\\str{Write the decimal place value as the denominator of the fraction:}}'
							+'{\\html{&nbsp;}}'
							+'{\\mixed{\\str{$answerWhole}}{\\frac{\\fracstr{$answerNum}}{\\fracstr{$answerDen}}}}'
							+'{\\html{&nbsp;}}'
							+'{css{\\grp{\\str{Answer: \xA0}}{\\mixed{\\str{$answerWhole}}{\\frac{\\fracstr{$answerNum}}{\\fracstr{$answerDen}}}}}{help-answer-text}}'
                		}
                    }]
                }]
            },
			equivDecValueProper: {
                title: 'Conversions Between Decimals & Fractions/Mixed Numbers',
                children: [{
                    title: 'Main Answer',
                    children: [{
						problem: '\\rowgrp'
									+'{\\str{Write the equivalent decimal value of this fraction$roundText:}}'
									+'{\\html{&nbsp;}}'
									+'{\\mixed{\\html{$fractionWhole}}{\\frac{\\fracstr{$fractionNum}}{\\fracstr{$fractionDen}}}}',
						answer: '\\grp{\\input{$answerDecimal}}',						
						controls: {
							"checkAnswer": true,
							"help": '\\rowgrp'
										+'{\\str{Divide the numerator of the fraction by the denominator.}}'
										+'{\\html{&nbsp;}}'
										+'{\\mixed{\\html{$fractionWhole}}{\\frac{\\fracstr{$fractionNum}}{\\fracstr{$fractionDen}}}}'
										+'{\\grp'
											+'{\\str{the fraction \xA0}}'
											+'{\\frac{\\str{$fractionNum}}{\\str{$fractionDen}}}'
											+'{\\str{\xA0 means \xA0 $fractionNum }}'
											+'{\\sign{\xF7}}'
											+'{\\str{\xA0 $fractionDen}}'
										+'}'
										+'{\\str{$additionalRoundText}}'
										+'{\\html{&nbsp;}}'
										+'{\\css{\\str{Answer: \xA0 $answerDecimal}}{help-answer-text}}'
						}
                    }]
                }]
            },
			equivDecValueImproper: {
                title: 'Conversions Between Decimals & Fractions/Mixed Numbers',
                children: [{
                    title: 'Main Answer',
                    children: [{
						problem: '\\rowgrp'
									+'{\\str{Write the equivalent decimal value of this fraction$roundText:}}'
									+'{\\html{&nbsp;}}'
									+'{\\mixed{\\html{$fractionWhole}}{\\frac{\\fracstr{$fractionNum}}{\\fracstr{$fractionDen}}}}',
						answer: '\\grp{\\input{$answerDecimal}}',						
						controls: {
							"checkAnswer": true,
							"help": '\\rowgrp'
										+'{\\str{Divide the numerator of the fraction by the denominator.}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\mixed{\\html{$fractionWhole}}{\\frac{\\fracstr{$fractionNum}}{\\fracstr{$fractionDen}}}}'
											+'{\\sign{\xA0 = \xA0}}'
											+'{\\frac{\\fracstr{$helpNum}}{\\fracstr{$fractionDen}}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\str{the fraction \xA0}}'
											+'{\\frac{\\fracstr{$helpNum}}{\\fracstr{$fractionDen}}}'
											+'{\\str{\xA0 means \xA0 $helpNum / \xA0 $fractionDen}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\str{$additionalRoundText}}'
										+'{\\css{\\str{Answer: \xA0 $answerDecimal}}{help-answer-text}}'
						}
                    }]
                }]
            }
        },
        data = [
			// problem 1
            { decimal: '0.3', answerWhole: '', answerNum: 3, answerDen: 10, helpWhole: '', helpNum: 3, helpDen: 10, template: 'equivFracValueNoReduce' },
			// problem 2
            { decimal: '0.48', answerWhole: "", answerNum: 12, answerDen: 25, helpWhole: "", helpNum: 48, helpDen: 100, template: 'equivFracValueReduce' },
			// problem 3
            { decimal: '0.005', answerWhole: '', answerNum: 1, answerDen: 200, helpWhole: '', helpNum: 5, helpDen: 1000, template: 'equivFracValueReduce' },
			// problem 4
            { decimal: '8.25', answerWhole: 8, answerNum: 1, answerDen: 4, helpWhole: 8, helpNum: 25, helpDen: 100, template: 'equivFracValueReduce' },
			// problem 5
            { decimal: '20.375', answerWhole: 20, answerNum: 3, answerDen: 8, helpWhole: 20, helpNum: 375, helpDen: 1000, template: 'equivFracValueReduce' },
			// problem 6
           	{ fractionWhole: '', fractionNum: '4', fractionDen: '5', answerDecimal: '0.8', roundText: '', additionalRoundText: '', template: 'equivDecValueProper' },
			// problem 7
			{ fractionWhole: '', fractionNum: '2', fractionDen: '3', answerDecimal: '0.67', roundText: ' (round the decimal answer to the hundredths place)', additionalRoundText: '<br>2 / 3 = .666... <br><br>Rounding .666... to the hundredths place:<br><br>', template: 'equivDecValueProper' },
			// problem 8
			{ fractionWhole: '', fractionNum: '7', fractionDen: '8', answerDecimal: '0.875', roundText: '', additionalRoundText: '', template: 'equivDecValueProper' },
			// problem 9
            { fractionWhole: '5', fractionNum: '3', fractionDen: '4', helpNum: '23', answerDecimal: '5.75', roundText: '', additionalRoundText: '', template: 'equivDecValueImproper' },
			// problem 10
            { fractionWhole: '4', fractionNum: '5', fractionDen: '6', helpNum: '29',  answerDecimal: '4.83', roundText: ' (round the decimal answer to the hundredths place)', additionalRoundText: 'Rounding 4.833... to the hundredths place:<br><br>', template: 'equivDecValueImproper' }
        ];
		
    return dataUtils.build(desc, template, data);
	
}]);