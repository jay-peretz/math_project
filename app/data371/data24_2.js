/*global angular */

angular.module('mathSkills').service('data24_2', ['dataUtils', function (dataUtils) {
    var desc = {
			title: '24.2 Add, Subtract, Multiply, and Divide English Measurements',
            path: '24.2-add-subtract-multiply-divide-english-measurements',
            children: []
        },
	        template = {
			// first template, integers operation
			oneConversion: {
                title: 'Evaluating Algebraic Expressions',
                children: [{
                    title: 'Main Answer',
                    children: [{
						problem: '$stateProblem',
						answer: '$solution',
						controls: {
								"checkAnswer": true,
								"help": '\\rowgrp'
											+'$firstLines'
											+'{\\html{&nbsp;}}'
											+'{css'
												+'{\\grp'
													+'{\\str{Answer: &nbsp;}}'
													+'{$helpAnswer}'
												+'}'
												+'{help-answer-text}'
											+'}'
											+'{\\html{&nbsp;}}',
								"modalButton": "\\html{Equivalence Chart}",
								"modalText": '$modalChart',
								"modalClass": 'modalMiddleLeft',
								"fixHelpControls": true,
						}
					}]
				}]
			}
        },
        data = [
			// problem 1
			{	
				stateProblem: dataUtils.pre(
									'\\rowgrp'
										+'{\\grp'
											+'{\\str{Solve and give the answer in simplified measurements. }}'
										+'}'
										+'{\\str{&nbsp;}}'
										+'{\\html{'
											+'<table>'
												+'<tr>'
													+'<td>'
														+'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
													+'</td>'
													+'<td>'
														+'10 lbs'
													+'</td>'
													+'<td>'
														+'12 oz.'
													+'</td>'
												+'</tr>'
												+'<tr>'
													+'<td>'
														+'&nbsp;&nbsp;&nbsp;<span class=fontsize110>+</span>&nbsp;&nbsp;&nbsp;&nbsp;'
													+'</td>'
													+'<td class=bottomBlackPadded>'
														+'&nbsp;&nbsp;3 lbs.'
													+'</td>'
													+'<td class=bottomBlackPadded>'
														+'&nbsp;&nbsp;9 oz.'
													+'</td>'
												+'</tr>'
											+'</table>'
										+'}}'
								),
				solution: dataUtils.pre(
							'\\rowgrp'
								+'{\\grp'
									+'{\\input{$$firstAnswer}}'
									+'{\\str{&nbsp;$$firstField&nbsp;&nbsp;}}'
									+'{\\input{$$secondAnswer}}'
									+'{\\str{&nbsp;$$secondField}}'
								+'}'
					),
				firstAnswer: '14',
				firstField: 'lbs.',
				secondAnswer: '5',
				secondField: 'oz.',
				firstLines: dataUtils.pre(
									'{\\str{<u>First</u> add up all the same measurements.}}'
									+'{\\str{&nbsp;}}'
									+'{\\html{'
											+'<table>'
												+'<tr>'
													+'<td>'
														+'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
													+'</td>'
													+'<td>'
														+'10 lbs.'
													+'</td>'
													+'<td>'
														+'12 oz.'
													+'</td>'
												+'</tr>'
												+'<tr>'
													+'<td>'
														+'&nbsp;&nbsp;&nbsp;<span class=fontsize110>+</span>&nbsp;&nbsp;&nbsp;&nbsp;'
													+'</td>'
													+'<td class=bottomBlackPadded>'
														+'&nbsp;&nbsp;3 lbs.'
													+'</td>'
													+'<td class=bottomBlackPadded>'
														+'&nbsp;&nbsp;9 oz.'
													+'</td>'
												+'</tr>'
												+'<tr>'
													+'<td class=divisionPadTop>'
														+'&nbsp;&nbsp;&nbsp;<span class=fontsize110>&nbsp;</span>&nbsp;&nbsp;&nbsp;&nbsp;'
													+'</td>'
													+'<td class=divisionPadTop>'
														+'13 lbs.'
													+'</td>'
													+'<td class=divisionPadTop>'
														+'21 oz.'
													+'</td>'
												+'</tr>'
											+'</table>'
										+'}}'
									+'{\\str{&nbsp;}}'
									+'{\\str{<u>Second</u>, simplify as necessary. Remember to always start with the smallest unit of measurement.}}'
									+'{\\str{&nbsp;}}'
									+'{\\str{21 oz. can be simplified because it is more than the 16 oz. that make a pound.}}'
									+'{\\str{&nbsp;}}'
									+'{\\str{Divide 21 oz. by 16 to find out how many \"ounces\" are in 21 pounds.}}'
									+'{\\str{&nbsp;}}'
									+'{\\html{'
										+'<table>'
											+'<tr>'
												+'<td>'
													+'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
												+'</td>'
												+'<td>'
													+'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
												+'</td>'
												+'<td>'
													+'<span class="hiddenSpace">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>1 lb.'
												+'</td>'
											+'</tr>'
											+'<tr>'
												+'<td>'
													+'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
												+'</td>'
												+'<td>'
													+'<span class=divisorstyleSmall>16</span>'
												+'</td>'
												+'<td>'
													+'<span class=dividendstyleSmall><span class="hiddenSpace">&nbsp;&nbsp;</span>21&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>'
												+'</td>'
											+'</tr>'
											+'<tr>'
												+'<td>'
													+'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
												+'</td>'
												+'<td>'
													+'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
												+'</td>'
												+'<td>'
													+'<span class=bigger>-</span><span class=bottomBlackPadded>16</span>'
												+'</td>'
											+'</tr>'
											+'<tr>'
												+'<td>'
													+'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
												+'</td>'
												+'<td>'
													+'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
												+'</td>'
												+'<td class=divisionPadTop>'
													+'<span class="bigger hiddenSpace">-&nbsp;&nbsp;</span>5 oz. (now simplified)'
												+'</td>'
											+'</tr>'
										+'</table>'
									+'}}'
									+'{\\str{&nbsp;}}'
									+'{\\str{21 oz. is the same as 1 lb. 5 oz.}}'
									+'{\\str{&nbsp;}}'
									+'{\\html{'
										+'<table>'
											+'<tr>'
												+'<td>'
													+'Therefore:'
												+'</td>'
												+'<td>'
													+'&nbsp;'
												+'</td>'
												+'<td>'
													+'&nbsp;'
												+'</td>'
												+'<td>'
													+'&nbsp;'
												+'</td>'
												+'<td>'
													+'&nbsp;&nbsp;13 lbs.'
												+'</td>'
												+'<td>'
													+'&nbsp;'
												+'</td>'
												+'<td>'
													+'<span class=line_through>21 oz.</span>'
												+'</td>'
											+'</tr>'
											+'<tr>'
												+'<td>'
													+'&nbsp;'
												+'</td>'
												+'<td>'
													+'&nbsp;'
												+'</td>'
												+'<td>'
													+'&nbsp;'
												+'</td>'
												+'<td>'
													+'&nbsp;'
												+'</td>'
												+'<td>'
													+'&nbsp;'
												+'</td>'
												+'<td>'
													+'&nbsp;'
												+'</td>'
												+'<td>'
													+'<span class="bigger rotate-45-clockwise">|</span>&nbsp;&nbsp;<span class=fontweightBold>|</span>'
												+'</td>'
											+'</tr>'
											+'<tr>'
												+'<td>'
													+'&nbsp;'
												+'</td>'
												+'<td>'
													+'&nbsp;'
												+'</td>'
												+'<td class=textAlignRight>'
													+'+'
												+'</td>'
												+'<td>'
													+'&nbsp;&nbsp;&nbsp;'
												+'</td>'
												+'<td>'
													+'&nbsp;&nbsp;&nbsp;&nbsp;1 lb.'
												+'</td>'
												+'<td>'
													+'&nbsp;'
												+'</td>'
												+'<td>'
													+'&nbsp;&nbsp;5 oz.'
												+'</td>'
											+'</tr>'
											+'<tr class=lineheight40>'
												+'<td colspan=4>'
													+'&nbsp;'
												+'</td>'
												+'<td colspan=3 class=continuedDecimal>'
													+'&nbsp;'
												+'</td>'
											+'</tr>'
											+'<tr>'
												+'<td>'
													+'Becomes:'
												+'</td>'
												+'<td>'
													+'&nbsp;'
												+'</td>'
												+'<td>'
													+'&nbsp;'
												+'</td>'
												+'<td>'
													+'&nbsp;'
												+'</td>'
												+'<td>'
													+'&nbsp;&nbsp;14 lbs.'
												+'</td>'
												+'<td>'
													+'&nbsp;'
												+'</td>'
												+'<td>'
													+'&nbsp;&nbsp;5 oz.'
												+'</td>'
											+'</tr>'
										+'</table>'
									+'}}'
									+'{\\str{&nbsp;}}'
									+'{\\str{The measurements are simplified. We are done.}}'
								),
				helpAnswer: dataUtils.pre(
								'\\grp'
									+'{\\str{$$firstAnswer&nbsp;$$firstField&nbsp;&nbsp;$$secondAnswer&nbsp;$$secondField}}'
					),
				modalChart: dataUtils.pre('\\html{<table class=equivalence-table><th colspan="3">Equivalence Table</th><tr><td>16 oz</td><td>=</td><td>1 lb</td></tr><tr><td>2000 lbs</td><td>=</td><td>1 ton</td></tr></table>}'),
				template: 'oneConversion'
			}
			,
			// problem 2
			{	
				stateProblem: dataUtils.pre(
									'\\rowgrp'
										+'{\\grp'
											+'{\\str{Solve and give the answer in simplified measurements. }}'
										+'}'
										+'{\\str{&nbsp;}}'
										+'{\\html{'
											+'<table>'
												+'$$problemTableRows'
											+'</table>'
										+'}}'
								),
				solution: dataUtils.pre(
							'\\rowgrp'
								+'{\\grp'
									+'{\\input{$$firstAnswer}}'
									+'{\\str{&nbsp;$$firstField&nbsp;&nbsp;}}'
									+'{\\input{$$secondAnswer}}'
									+'{\\str{&nbsp;$$secondField}}'
								+'}'
					),
				firstAnswer: '7',
				firstField: 'gal.',
				secondAnswer: '1',
				secondField: 'qt.',
				problemTableRows: '<tr>'
									+'<td>'
										+'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
									+'</td>'
									+'<td>'
										+'2 gal.'
									+'</td>'
									+'<td>'
										+'&nbsp;2 qt.'
									+'</td>'
								+'</tr>'
								+'<tr>'
									+'<td>'
										+'&nbsp;&nbsp;&nbsp;<span class=fontsize110>+</span>&nbsp;&nbsp;&nbsp;&nbsp;'
									+'</td>'
									+'<td class=bottomBlackPadded>'
										+'4 gal.'
									+'</td>'
									+'<td class=bottomBlackPadded>'
										+'&nbsp;3 qt.'
									+'</td>'
								+'</tr>',
				firstLines: dataUtils.pre(
									'{\\str{<u>First</u> add up all the same measurements.}}'
									+'{\\str{&nbsp;}}'
									+'{\\html{'
											+'<table>'
												+'$$problemTableRows'
												+'<tr>'
													+'<td class=divisionPadTop>'
														+'&nbsp;&nbsp;&nbsp;<span class=fontsize110>&nbsp;</span>&nbsp;&nbsp;&nbsp;&nbsp;'
													+'</td>'
													+'<td class=divisionPadTop>'
														+'6 gal.'
													+'</td>'
													+'<td class=divisionPadTop>'
														+'&nbsp;5 qt.'
													+'</td>'
												+'</tr>'
											+'</table>'
										+'}}'
									+'{\\str{&nbsp;}}'
									+'{\\str{<u>Second</u>, simplify as necessary. Remember to always start with the smallest unit of measurement.}}'
									+'{\\str{&nbsp;}}'
									+'{\\str{5 qt. can be simplified because it is more than the 4 qt. that make a pound.}}'
									+'{\\str{&nbsp;}}'
									+'{\\str{Divide 5 qt. by 4 to find out how many \"gallons\" are in 5 qt.}}'
									+'{\\str{&nbsp;}}'
									+'{\\html{'
										+'<table>'
											+'<tr>'
												+'<td>'
													+'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
												+'</td>'
												+'<td>'
													+'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
												+'</td>'
												+'<td>'
													+'<span class="hiddenSpace">&nbsp;&nbsp;&nbsp;&nbsp;</span>1 gal.'
												+'</td>'
											+'</tr>'
											+'<tr>'
												+'<td>'
													+'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
												+'</td>'
												+'<td>'
													+'<span class=divisorstyleSmall>4</span>'
												+'</td>'
												+'<td>'
													+'<span class=dividendstyleSmall><span class="hiddenSpace">&nbsp;&nbsp;</span>5&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>'
												+'</td>'
											+'</tr>'
											+'<tr>'
												+'<td>'
													+'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
												+'</td>'
												+'<td>'
													+'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
												+'</td>'
												+'<td>'
													+'<span class=bigger>-</span><span class=bottomBlackPadded>4</span>'
												+'</td>'
											+'</tr>'
											+'<tr>'
												+'<td>'
													+'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
												+'</td>'
												+'<td>'
													+'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
												+'</td>'
												+'<td class=divisionPadTop>'
													+'<span class="bigger hiddenSpace">-</span>1 qt. (now simplified)'
												+'</td>'
											+'</tr>'
										+'</table>'
									+'}}'
									+'{\\str{&nbsp;}}'
									+'{\\str{5 qt. is the same as 1 gal. 1 qt.}}'
									+'{\\str{&nbsp;}}'
									+'{\\html{'
										+'<table>'
											+'<tr>'
												+'<td>'
													+'Therefore:'
												+'</td>'
												+'<td>'
													+'&nbsp;'
												+'</td>'
												+'<td>'
													+'&nbsp;'
												+'</td>'
												+'<td>'
													+'&nbsp;'
												+'</td>'
												+'<td>'
													+'&nbsp;&nbsp;6 gal.'
												+'</td>'
												+'<td>'
													+'&nbsp;'
												+'</td>'
												+'<td>'
													+'<span class=line_through>&nbsp;&nbsp;5 qt.</span>'
												+'</td>'
											+'</tr>'
											+'<tr>'
												+'<td>'
													+'&nbsp;'
												+'</td>'
												+'<td>'
													+'&nbsp;'
												+'</td>'
												+'<td>'
													+'&nbsp;'
												+'</td>'
												+'<td>'
													+'&nbsp;'
												+'</td>'
												+'<td>'
													+'&nbsp;'
												+'</td>'
												+'<td>'
													+'&nbsp;'
												+'</td>'
												+'<td>'
													+'<span class="bigger rotate-45-clockwise">|</span>&nbsp;&nbsp;<span class=fontweightBold>|</span>'
												+'</td>'
											+'</tr>'
											+'<tr>'
												+'<td>'
													+'&nbsp;'
												+'</td>'
												+'<td>'
													+'&nbsp;'
												+'</td>'
												+'<td class=textAlignRight>'
													+'+'
												+'</td>'
												+'<td>'
													+'&nbsp;&nbsp;&nbsp;'
												+'</td>'
												+'<td>'
													+'&nbsp;&nbsp;1 gal.'
												+'</td>'
												+'<td>'
													+'&nbsp;'
												+'</td>'
												+'<td>'
													+'&nbsp;&nbsp;1 qt.'
												+'</td>'
											+'</tr>'
											+'<tr class=lineheight40>'
												+'<td colspan=4>'
													+'&nbsp;'
												+'</td>'
												+'<td colspan=3 class=continuedDecimal>'
													+'&nbsp;'
												+'</td>'
											+'</tr>'
											+'<tr>'
												+'<td>'
													+'Becomes:'
												+'</td>'
												+'<td>'
													+'&nbsp;'
												+'</td>'
												+'<td>'
													+'&nbsp;'
												+'</td>'
												+'<td>'
													+'&nbsp;'
												+'</td>'
												+'<td>'
													+'&nbsp;&nbsp;7 gal.'
												+'</td>'
												+'<td>'
													+'&nbsp;'
												+'</td>'
												+'<td>'
													+'&nbsp;&nbsp;1 qt.'
												+'</td>'
											+'</tr>'
										+'</table>'
									+'}}'
									+'{\\str{&nbsp;}}'
									+'{\\str{The measurements are simplified. We are done.}}'
								),
				helpAnswer: dataUtils.pre(
								'\\grp'
									+'{\\str{$$firstAnswer&nbsp;$$firstField&nbsp;&nbsp;$$secondAnswer&nbsp;$$secondField}}'
					),
				modalChart: dataUtils.pre('\\html{<table class=equivalence-table><th colspan="3">Equivalence Table</th><tr><td>16 oz</td><td>=</td><td>1 lb</td></tr><tr><td>2000 lbs</td><td>=</td><td>1 ton</td></tr></table>}'),
				template: 'oneConversion'
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
				{ problems: [19,20], total: 1}
		];
    
    	return dataUtils.build(desc, template, data, shuffle);*/
		
		return dataUtils.build(desc, template, data);
}]);
