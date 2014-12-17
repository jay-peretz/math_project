/*global angular */

angular.module('mathSkills').service('data25_2', ['dataUtils', function (dataUtils) {
    var desc = {
			title: '25.2 Converting Compound Measurements in the Metric System',
            path: '25.2-converting-compound-measurements-in-the-metric-system',
            children: []
        },
        template = {
			simpleConversion: {
                title: 'Converting Compound Measurements in the Metric System',
                children: [{
                    title: 'Main Answer',
                    children: [{
						problem: '\\rowgrp'
									+'{\\html{$problemText}}'
									+'{\\html{&nbsp;}}'
									+'{$fractionQuestion}',
                        answer: '$fractionAnswer',
                        controls: {
                            "checkAnswer": true,
                            "help": '\\rowgrp'
										+'{\\html{&nbsp;}}'
										+'{\\html{Every fraction is a division problem (the top value divided by the bottom value).$helpAddLine}}'
										+'{\\html{&nbsp;}}'
										+'{\\html{Any value divided by itself equals 1 whole.}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\html{In this case, }}'
											+'{$fractionQuestion}'
											+'{\\sign{=}}'
											+'{\\html{1}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\css'
											+'{\\html{Answer:  $answer}}'
											+'{help-answer-text}'
										+'}',
							"modalButton": "\\html{Equivalence Chart}",
							"modalText": '$modalChart'
                        }
                    }]
                }]
			},
			simpleMultFracConversion: {
                title: 'Converting Compound Measurements in the Metric System',
                children: [{
                    title: 'Main Answer',
                    children: [{
						problem: '\\rowgrp'
									+'{\\html{$problemText}}'
									+'{\\html{&nbsp;}}'
									+'{$fractionQuestion}',
                        answer: '$fractionAnswer',
                        controls: {
                            "checkAnswer": true,
                            "help": '\\rowgrp'
										+'{\\html{&nbsp;}}'
										+'{\\html{Since $initialNumAmount $unitsStart is exactly the same as $initialDenAmount $unitsPer, we know that the fraction of:}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\frac'
												+'{\\fracstr{$$initialNumAmount $$unitsStart}}'
												+'{\\fracstr{$$initialDenAmount $$unitsPer}}'
											+'}'
											+'{\\html{&nbsp;}}'
											+'{\\html{ is equal to 1 whole. Therefore:}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{$fractionQuestion}'
											+'{\\str{ is the same as }}'
											+'{$helpFractionAnswer}'
											+'{\\str{ * 1}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\css'
											+'{\\grp'
												+'{\\html{Answer: }}'
												+'{$helpFractionAnswer}'
											+'}'
											+'{help-answer-text}'
										+'}',
							"modalButton": "\\html{Equivalence Chart}",
							"modalText": '$modalChart'
                        }
                    }]
                }]
			},
			simpleFractional: {
                title: 'Converting Compound Measurements in the Metric System',
                children: [{
                    title: 'Main Answer',
                    children: [{
						problem: '\\rowgrp'
									+'{\\html{$problemText}}',
						answer: '\\rowgrp'
									+'{$fractionAnswer}',
                        controls: {
                            "checkAnswer": true,
                            "help": '\\rowgrp'
										+'{$fractionNoInputAnswer}'
										+'{\\html{&nbsp;}}'
										+'{\\str{$helpText}}'
										+'{\\html{&nbsp;}}'
										+'{$fractionHelp}'
										+'{\\html{&nbsp;}}'
										+'{\\css'
											+'{\\str{Answer:  $answer}}'
											+'{help-answer-text}'
										+'}',
							"modalButton": "\\html{Equivalence Chart}",
							"modalText": '$modalChart'
                        }
                    }]
                }]
			},
			dollarOneStep: {
                title: 'Converting Units of Volume',
                children: [{
                    title: 'Main Answer',
                    children: [{
						problem: '\\rowgrp'
									+'{\\html{$problemText}}',
                        answer: '\\grp'
									+'{\\css{\\html{$dollarSign}}{bigger}}'
									+'{\\inputcash{$finalAnswer}}',
                        controls: {
                            "checkAnswer": true,
                            "help": false,
                            "workbook": true,
							"modalButton": "\\html{Equivalence Chart}",
							"modalText": '$modalChart'
                        }
                    }]
                }, {
                    title: 'Workbook',
                    children: [{
                        problem: '\\rowgrp'
									+'{\\html{$problemText}}',
                        answer: '\\pan{12}{11}'
									+'{\\rowgrp'
										+'{\\html{Write the given rate as a fraction.}}'
										+'{\\html{&nbsp;}}'
										+'{\\frac'
											+'{\\grp'
												+'{\\html{$dollarSign}}'
												+'{\\html{&nbsp;}}'
												+'{\\input{$delta}}'
												+'{\\html{&nbsp;}}'
											+'}'
											+'{\\grp'
												+'{\\input{$epsilon}}'
												+'{\\html{&nbsp;}}'
												+'{\\select{$unitsQuestionPer}{$perSelect}}'
											+'}'
										+'}'
									+'}{well}',
                        controls: {
                            "checkAnswer": true,
                            "help": true,
							"modalButton": "\\html{Equivalence Chart}",
							"modalText": '$modalChart'
							
                        }
							   
					}, {
                       problem: '\\rowgrp'
									+'{\\html{$problemText}}',
                        answer: '\\pan{12}{11}'
									+'{\\rowgrp'
										+'{\\html{When multiplying by a fraction (that equals 1 whole) which has two metric measurements, we must make either the numerator or the denominator equal to 1 whole.}}'
										+'{\\html{&nbsp;}}'
										+'{\\html{Here you are given the 1 whole in the $givenFirstPart.  Now choose the correct units of measurement and enter the correct number value for the $givenSecondPart.}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\frac'
												+'{\\grp'
													+'{\\html{$$dollarSign}}'
													+'{\\html{&nbsp;}}'
													+'{\\html{$$delta}}'
													+'{\\html{&nbsp;}}'
												+'}'
												+'{\\grp'
													+'{\\html{$$epsilon}}'
													+'{\\html{&nbsp;}}'
													+'{\\html{$$unitsQuestionPer}}'
												+'}'
											+'}'
											+'{\\sign{&times;}}'
											+'$step2Inputs'
										+'}'
									+'}{well}',
                        controls: {
                            "checkAnswer": true,
                            "help": '\\rowgrp'
										+'{\\html{The purpose of the fraction we multiply by is to cancel out the word "$firstWordCancel" that we don\'t want as a part of the answer.  The fraction with "$firstWordCancel" in the numerator and "$secondWordCancel" in the denominator allows us to cancel out "$firstWordCancel".}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\frac'
												+'{\\grp{\\html{$dollarSign}}{\\html{&nbsp;}}{\\html{$delta}}{\\html{&nbsp;}}}'
												+'{\\grp{\\html{$epsilon}}{\\html{&nbsp;}}{\\html{$unitsQuestionPer}}}'
											+'}'
											+'{\\sign{&times;}}'
											+'{\\frac'
												+'{\\grp'
													+'{\\html{$numDecimal}}'
													+'{\\html{&nbsp;}}'
													+'{\\html{$unitsQuestionPer}}'
												+'}'
												+'{\\grp'
													+'{\\html{$denDecimal}}{\\html{&nbsp;}}{\\html{$denUnitFrac}}'
												+'}'
											+'}'
										+'}',
							"modalButton": "\\html{Equivalence Chart}",
							"modalText": '$modalChart'
							
                        }
                    }, {
                       problem: '\\rowgrp'
									+'{\\html{$problemText}}',
                        answer: '\\pan{12}{11}'
									+'{\\rowgrp'
										+'{\\html{What is the price per $unitsAnswerPer?}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\frac'
												+'{\\grp'
													+'{\\html{$$dollarSign}}'
													+'{\\html{&nbsp;}}'
													+'{\\html{$$delta}}'
													+'{\\html{&nbsp;}}'
												+'}'
												+'{\\grp'
													+'{\\html{$$epsilon}}'
													+'{\\html{&nbsp;}}'
													+'{\\html{$$unitsQuestionPer}}'
												+'}'
											+'}'
											+'{\\sign{&times;}}'
											+'{\\frac'
												+'{\\grp'
													+'{\\html{$numDecimal}}'
													+'{\\html{&nbsp;}}'
													+'{\\html{$unitsQuestionPer}}'
												+'}'
												+'{\\grp'
													+'{\\html{$denDecimal}}{\\html{&nbsp;}}{\\html{$denUnitFrac}}'
												+'}'
											+'}'
											+'{\\sign{&equals;}}'
											+'{\\css{\\html{$dollarSign}}{bigger}}'
											+'{\\inputcash{$helpFinalAnswer}}'
											+'{\\html{<span class=bigger>/</span> $denUnitFrac}}'
										+'}'
									+'}{well}',
                        controls: {
                            "checkAnswer": true,
                            "help": '\\rowgrp'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\frac{\\html{<span class=blue-text>$dollarSign $delta</span>}}{\\html{<span class=blue-text>$epsilon</span><span class=line_through> $unitsQuestionPer</span>}}}'
											+'{\\sign{&times;}}'
											+'{\\frac{\\html{<span class=blue-text>$numDecimal</span> <span class=line_through>$unitsQuestionPer</span>}}{\\html{<span class=blue-text>$denominatorSecond $denUnitFrac</span>}}}'
											+'{\\sign{&equals;}}'
											+'{\\html{<span class=blue-text>$dollarSign $helpFinalAnswer / $denUnitFrac</span>}}'
										+'}',
							"modalButton": "\\html{Equivalence Chart}",
							"modalText": '$modalChart'
							
                        }
                    }, {
                       problem: '\\rowgrp'
									+'{\\html{$problemText}}',
                        answer: '\\pan{12}{11}'
									+'{\\rowgrp'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\frac'
												+'{\\grp{\\html{$dollarSign}}{\\html{&nbsp;}}{\\html{$delta}}{\\html{&nbsp;}}}'
												+'{\\grp{\\html{$epsilon}}{\\html{&nbsp;}}{\\html{$unitsQuestionPer}}}'
											+'}'
											+'{\\sign{&times;}}'
											+'{\\frac'
												+'{\\grp'
													+'{\\html{$numDecimal}}'
													+'{\\html{&nbsp;}}'
													+'{\\html{$unitsQuestionPer}}'
												+'}'
												+'{\\grp'
													+'{\\html{$denDecimal}}{\\html{&nbsp;}}{\\html{$denUnitFrac}}'
												+'}'
											+'}'
											+'{\\sign{&equals;}}'
											+'{\\css{\\html{$dollarSign}}{bigger}}'
											+'{\\html{$helpFinalAnswer}}'
											+'{\\html{/ $denUnitFrac}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\ins{How much would $problemAmount $fourthProblemPer cost?}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css{\\html{$dollarSign}}{bigger}}'
											+'{\\inputcash{$finalAnswer}}'
										+'}'
									+'}{well}',
                        controls: {
                            "checkAnswer": true,
                            "help": true,
							"modalButton": "\\html{Equivalence Chart}",
							"modalText": '$modalChart'
							
                        }
                    }]
                }]
            },
			quantityOneStep: {
                title: 'Converting Units of Volume',
                children: [{
                    title: 'Main Answer',
                    children: [{
						problem: '\\rowgrp'
									+'{\\html{$problemText}}',
                        answer: '\\grp'
									+'{\\input{$finalAnswer}}'
									+'{\\html{$unitsAnswerPer}}',
                        controls: {
                            "checkAnswer": true,
                            "help": false,
                            "workbook": true,
							"modalButton": "\\html{Equivalence Chart}",
							"modalText": '$modalChart'
                        }
                    }]
                }, {
                    title: 'Workbook',
                    children: [{
                        problem: '\\rowgrp'
									+'{\\html{$problemText}}',
                        answer: '\\pan{12}{11}'
									+'{\\rowgrp'
										+'{\\html{Write the given rate as a fraction.}}'
										+'{\\html{&nbsp;}}'
										+'{\\frac'
											+'{\\grp'
												+'{\\input{$delta}}'
												+'{\\html{&nbsp;}}'
												+'{\\select{$unitsQuestionPer}{$perSelect}}'
											+'}'
											+'{\\grp'
												+'{\\input{$epsilon}}'
												+'{\\html{&nbsp;}}'
												+'{\\select{$unitsPer}{$conversionToSelect}}'
											+'}'
										+'}'
									+'}{well}',
                        controls: {
                            "checkAnswer": true,
                            "help": true,
							"modalButton": "\\html{Equivalence Chart}",
							"modalText": '$modalChart'
							
                        }
							   
					}, {
                       problem: '\\rowgrp'
									+'{\\html{$problemText}}',
                        answer: '\\pan{12}{11}'
									+'{\\rowgrp'
										+'{\\html{When multiplying by a fraction (that equals 1 whole) which has two metric measurements, we must make either the numerator or the denominator equal to 1 whole.}}'
										+'{\\html{&nbsp;}}'
                						+'{\\html{Here you are given the 1 whole in the $givenFirstPart.  Now choose the correct units of measurement and enter the correct number value for the $givenSecondPart.}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\frac'
												+'{\\grp'
													+'{\\html{$delta}}'
													+'{\\html{&nbsp;}}'
													+'{\\html{$unitsQuestionPer}}'
												+'}'
												+'{\\grp'
													+'{\\html{$epsilon}}'
													+'{\\html{&nbsp;}}'
													+'{\\html{$unitsPer}}'
												+'}'
											+'}'
											+'{\\sign{&times;}}'
											+'$step2Inputs'
										+'}'
									+'}{well}',
                        controls: {
                            "checkAnswer": true,
                            "help": '\\rowgrp'
										+'{\\html{The purpose of the fraction we multiply by is to cancel out the word "$firstWordCancel" that we don\'t want as a part of the answer.  The fraction with "$firstWordCancel" in the denominator and "$secondWordCancel" in the numerator allows us to cancel out "$firstWordCancel".}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\frac'
												+'{\\grp'
													+'{\\html{$delta}}'
													+'{\\html{&nbsp;}}'
													+'{\\html{$unitsQuestionPer}}'
												+'}'
												+'{\\grp'
													+'{\\html{$epsilon}}'
													+'{\\html{&nbsp;}}'
													+'{\\html{$unitsPer}}'
												+'}'
											+'}'
											+'{\\sign{&times;}}'
											+'{\\frac'
												+'{\\grp'
													+'{\\html{$numDecimal}}'
													+'{\\html{&nbsp;}}'
													+'{\\html{$numUnitFrac}}'
												+'}'
												+'{\\grp'
													+'{\\html{$denDecimal}}{\\html{&nbsp;}}{\\html{$denUnitFrac}}'
												+'}'
											+'}'
										+'}',
							"modalButton": "\\html{Equivalence Chart}",
							"modalText": '$modalChart'
							
                        }
                    }, {
                       problem: '\\rowgrp'
									+'{\\html{$problemText}}',
                        answer: '\\pan{12}{11}'
									+'{\\rowgrp'
										+'{\\html{$statementTwo}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\frac'
												+'{\\grp'
													+'{\\html{$delta}}'
													+'{\\html{&nbsp;}}'
													+'{\\html{$unitsQuestionPer}}'
												+'}'
												+'{\\grp'
													+'{\\html{$epsilon}}'
													+'{\\html{&nbsp;}}'
													+'{\\html{$unitsPer}}'
												+'}'
											+'}'
											+'{\\sign{&times;}}'
											+'{\\frac'
												+'{\\grp'
													+'{\\html{$numDecimal}}'
													+'{\\html{&nbsp;}}'
													+'{\\html{$numUnitFrac}}'
												+'}'
												+'{\\grp'
													+'{\\html{$denDecimal}}{\\html{&nbsp;}}{\\html{$denUnitFrac}}'
												+'}'
											+'}'
											+'{\\sign{&equals;}}'
											+'{\\input{$helpFinalAnswer}}'
											+'{\\html{$numUnitFrac <span class=bigger>/</span> $unitsPer}}'
										+'}'
									+'}{well}',
                        controls: {
                            "checkAnswer": true,
                            "help": '\\rowgrp'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\frac'
												+'{\\grp'
													+'{\\html{<span class=blue-text>$delta</span>}}'
													+'{\\html{&nbsp;}}'
													+'{\\html{<span class=line_through>$unitsQuestionPer</span>}}'
												+'}'
												+'{\\grp'
													+'{\\html{<span class=blue-text>$epsilon</span>}}'
													+'{\\html{&nbsp;}}'
													+'{\\html{<span class=blue-text>$unitsPer</span>}}'
												+'}'
											+'}'
											+'{\\sign{&times;}}'
											+'{\\frac'
												+'{\\grp'
													+'{\\html{<span class=blue-text>$numDecimal</span>}}'
													+'{\\html{&nbsp;}}'
													+'{\\html{<span class=blue-text>$numUnitFrac</span>}}'
												+'}'
												+'{\\grp'
													+'{\\html{<span class=blue-text>$denDecimal</span>}}{\\html{&nbsp;}}{\\html{<span class=line_through>$denUnitFrac</span>}}'
												+'}'
											+'}'
											+'{\\sign{&equals;}}'
											
											+'{\\html{<span class=blue-text>$helpFinalAnswer $numUnitFrac <span class=bigger>/</span> $unitsPer</span>}}'
										+'}',
							"modalButton": "\\html{Equivalence Chart}",
							"modalText": '$modalChart'
							
                        }
                    }, {
                       problem: '\\rowgrp'
									+'{\\html{$problemText}}',
                        answer: '\\pan{12}{11}'
									+'{\\rowgrp'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\frac'
												+'{\\grp'
													+'{\\html{$delta}}'
													+'{\\html{&nbsp;}}'
													+'{\\html{$unitsQuestionPer}}'
												+'}'
												+'{\\grp'
													+'{\\html{$epsilon}}'
													+'{\\html{&nbsp;}}'
													+'{\\html{$unitsPer}}'
												+'}'
											+'}'
											+'{\\sign{&times;}}'
											+'{\\frac'
												+'{\\grp'
													+'{\\html{$numDecimal}}'
													+'{\\html{&nbsp;}}'
													+'{\\html{$numUnitFrac}}'
												+'}'
												+'{\\grp'
													+'{\\html{$denDecimal}}{\\html{&nbsp;}}{\\html{$denUnitFrac}}'
												+'}'
											+'}'
											+'{\\sign{&equals;}}'
											+'{\\html{$helpFinalAnswer}}'
											+'{\\html{$numUnitFrac <span class=bigger>/</span> $unitsPer}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\ins{$instructionThird}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\input{$finalAnswer}}'
											+'{\\html{$unitsAnswerPer}}'
										+'}'
									+'}{well}',
                        controls: {
                            "checkAnswer": true,
                            "help": true,
							"modalButton": "\\html{Equivalence Chart}",
							"modalText": '$modalChart'
							
                        }
                    }]
                }]
            },
			quantityTwoStep: {
                title: 'Converting Units of Volume',
                children: [{
                    title: 'Main Answer',
                    children: [{
						problem: '\\rowgrp'
									+'{\\html{$problemText}}',
                        answer: '\\grp'
									+'{\\input{$finalAnswer}}'
									+'{\\html{$unitsAnswerPer}}',
                        controls: {
                            "checkAnswer": true,
                            "help": false,
                            "workbook": true,
							"modalButton": "\\html{Equivalence Chart}",
							"modalText": '$modalChart'
                        }
                    }]
                }, {
                    title: 'Workbook',
                    children: [{
                        problem: '\\rowgrp'
									+'{\\html{$problemText}}',
                        answer: '\\pan{12}{11}'
									+'{\\rowgrp'
										+'{\\html{Write the given rate as a fraction.}}'
										+'{\\html{&nbsp;}}'
										+'{\\frac'
											+'{\\grp'
												+'{\\input{$delta}}'
												+'{\\html{&nbsp;}}'
												+'{\\select{$unitsQuestionPer}{$perSelect}}'
											+'}'
											+'{\\grp'
												+'{\\input{$epsilon}}'
												+'{\\html{&nbsp;}}'
												+'{\\select{$unitsPer}{$conversionToSelect}}'
											+'}'
										+'}'
									+'}{well}',
                        controls: {
                            "checkAnswer": true,
                            "help": true,
							"modalButton": "\\html{Equivalence Chart}",
							"modalText": '$modalChart'
							
                        }
							   
					}, {
                       problem: '\\rowgrp'
									+'{\\html{$problemText}}',
                        answer: '\\pan{12}{11}'
									+'{\\rowgrp'
										+'{\\html{When multiplying by a fraction (that equals 1 whole) which has two metric measurements, we make either the numerator or the denominator equal to 1 whole.}}'
										+'{\\html{&nbsp;}}'
										+'{\\html{Here you are given the 1 whole in the $givenFirstPart.  Now choose the correct units of measurement and enter the correct number value for the $givenSecondPart.}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\frac'
												+'{\\grp'
													+'{\\html{$delta}}'
													+'{\\html{&nbsp;}}'
													+'{\\html{$unitsQuestionPer}}'
												+'}'
												+'{\\grp'
													+'{\\html{$epsilon}}'
													+'{\\html{&nbsp;}}'
													+'{\\html{$unitsPer}}'
												+'}'
											+'}'
											+'{\\sign{&times;}}'
											+'$step2Inputs'
										+'}'
									+'}{well}',
                        controls: {
                            "checkAnswer": true,
                            "help": '\\rowgrp'
										+'{\\html{The purpose of the fraction we multiply by is to cancel out the word "$firstWordCancel" that we don\'t want as a part of the answer.  The fraction with "$firstWordCancel" in the denominator and "$secondWordCancel" in the numerator allows us to cancel out "$firstWordCancel".}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\frac'
												+'{\\grp'
													+'{\\html{$delta}}'
													+'{\\html{&nbsp;}}'
													+'{\\html{$unitsQuestionPer}}'
												+'}'
												+'{\\grp'
													+'{\\html{$epsilon}}'
													+'{\\html{&nbsp;}}'
													+'{\\html{$unitsPer}}'
												+'}'
											+'}'
											+'{\\sign{&times;}}'
											+'{\\frac'
												+'{\\grp'
													+'{\\html{$numDecimal}}'
													+'{\\html{&nbsp;}}'
													+'{\\html{$numUnitFrac}}'
												+'}'
												+'{\\grp'
													+'{\\html{$denDecimal}}{\\html{&nbsp;}}{\\html{$denUnitFrac}}'
												+'}'
											+'}'
										+'}',
							"modalButton": "\\html{Equivalence Chart}",
							"modalText": '$modalChart'
							
                        }
                    }, {
                       problem: '\\rowgrp'
									+'{\\html{$problemText}}',
                        answer: '\\pan{12}{11}'
									+'{\\rowgrp'
										+'{\\html{What is the fraction (that equals 1 whole) that you need to multiply by?}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\frac'
												+'{\\grp'
													+'{\\html{$delta}}'
													+'{\\html{&nbsp;}}'
													+'{\\html{$unitsQuestionPer}}'
												+'}'
												+'{\\grp'
													+'{\\html{$epsilon}}'
													+'{\\html{&nbsp;}}'
													+'{\\html{$unitsPer}}'
												+'}'
											+'}'
											+'{\\sign{&times;}}'
											+'{\\frac'
												+'{\\html{$numDecimal $numUnitFrac}}'
												+'{\\html{$denDecimal $denUnitFrac}}'
											+'}'
											+'{\\sign{&times;}}'
											+'$step3Inputs'
										+'}'
									+'}{well}',
                        controls: {
                            "checkAnswer": true,
                            "help": '\\rowgrp'
										+'{\\html{The purpose of the fraction we multiply by is to cancel out the word "$thirdWordCancel" that we don\'t want as a part of the answer.  The fraction with "$thirdWordCancel" in the numerator and "$fourthWordCancel" in the denominator allows us to cancel out "$thirdWordCancel".}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\frac'
												+'{\\html{$delta $unitsQuestionPer}}'
												+'{\\html{$epsilon  $unitsPer}}'
											+'}'
											+'{\\sign{&times;}}'
											+'{\\frac'
												+'{\\html{$numDecimal $numUnitFrac}}'
												+'{\\html{$denDecimal $denUnitFrac}}'
											+'}'
											+'{\\sign{&times;}}'
											+'{\\frac'
												+'{\\html{$numThirdStep $numThirdUnit}}'
												+'{\\html{$denThirdStep $denThirdUnit}}'
											+'}'
										+'}',
							"modalButton": "\\html{Equivalence Chart}",
							"modalText": '$modalChart'
							
                        }
                    }, {
                       problem: '\\rowgrp'
									+'{\\html{$problemText}}',
                        answer: '\\pan{12}{11}'
									+'{\\rowgrp'
										+'{\\html{$statementTwo}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\frac'
												+'{\\html{$delta $unitsQuestionPer}}'
												+'{\\html{$epsilon $unitsPer}}'
											+'}'
											+'{\\sign{&times;}}'
											+'{\\frac'
												+'{\\html{$numDecimal $numUnitFrac}}'
												+'{\\html{$denDecimal $denUnitFrac}}'
											+'}'
											+'{\\sign{&times;}}'
											+'{\\frac'
												+'{\\html{$numThirdStep $numThirdUnit}}'
												+'{\\html{$denThirdStep $denThirdUnit}}'
											+'}'
											+'{\\sign{&equals;}}'
											+'{\\input{$helpFinalAnswer}}'
											+'{\\html{$numUnitFrac <span class=bigger>/</span> $denThirdUnit}}'
										+'}'
									+'}{well}',
                        controls: {
                            "checkAnswer": true,
                            "help": '\\rowgrp'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\frac'
												+'{\\html{<span class=blue-text>$delta</span> <span class=line_through>$unitsQuestionPer</span>}}'
												+'{\\html{<span class=blue-text>$epsilon</span> <span class=line_through>$unitsPer</span>}}'
											+'}'
											+'{\\sign{&times;}}'
											+'{\\frac'
												+'{\\html{<span class=blue-text>$numDecimal $numUnitFrac</span>}}'
												+'{\\html{<span class=blue-text>$denDecimal</span> <span class=line_through>$denUnitFrac</span>}}'
											+'}'
											+'{\\sign{&times;}}'
											+'{\\frac'
												+'{\\html{<span class=blue-text>$numThirdStep</span> <span class=line_through>$numThirdUnit</span>}}'
												+'{\\html{<span class=blue-text>$denThirdStep $denThirdUnit</span>}}'
											+'}'
											+'{\\sign{&equals;}}'
											
											+'{\\html{<span class=blue-text>$helpFinalAnswer $numUnitFrac <span class=bigger>/</span> $denThirdUnit</span>}}'
										+'}',
							"modalButton": "\\html{Equivalence Chart}",
							"modalText": '$modalChart'
							
                        }
                    }, {
                       problem: '\\rowgrp'
									+'{\\html{$problemText}}',
                        answer: '\\pan{12}{11}'
									+'{\\rowgrp'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\frac'
												+'{\\html{$delta $unitsQuestionPer}}'
												+'{\\html{$epsilon $unitsPer}}'
											+'}'
											+'{\\sign{&times;}}'
											+'{\\frac'
												+'{\\html{$numDecimal $numUnitFrac}}'
												+'{\\html{$denDecimal $denUnitFrac}}'
											+'}'
											+'{\\sign{&times;}}'
											+'{\\frac'
												+'{\\html{$numThirdStep $numThirdUnit}}'
												+'{\\html{$denThirdStep $denThirdUnit}}'
											+'}'
											+'{\\sign{&equals;}}'
											+'{\\html{$helpFinalAnswer}}'
											+'{\\html{$numUnitFrac <span class=bigger>/</span> $denThirdUnit}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\ins{$instructionThird}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\input{$finalAnswer}}'
											+'{\\html{$unitsAnswerPer}}'
										+'}'
									+'}{well}',
                        controls: {
                            "checkAnswer": true,
                            "help": true,
							"modalButton": "\\html{Equivalence Chart}",
							"modalText": '$modalChart'
							
                        }
                    }]
                }]
            },
        },
        data = [
				// problem 1
			{
				problemText: 'What is the value of this fraction:',
				answer: '1',
				initialNumAmount: '3',
				initialDenAmount: '3',
				unitsStart: '',
				unitsPer: '',
				fractionQuestion: dataUtils.pre(
							'\\frac'
								+'{\\fracstr{$$initialNumAmount}}'
								+'{\\fracstr{$$initialDenAmount}}'
						),
				fractionAnswer: dataUtils.pre('\\grp'
									+'{\\input{$$answer}}'
						),
				modalChart: dataUtils.pre('\\html{<table class=conversion-table><th>kilo<br>(k)</th><th>hecto<br>(h)</th><th>deka<br>(da)</th><th>Basic<br>Units</th><th>deci<br>(d)</th><th>centi<br>(c)</th><th>milli<br>(m)</th></tr><tr><td rowspan=3>&nbsp;</td><td rowspan=3>&nbsp;</td rowspan=3><td rowspan=3>&nbsp;</td><td rowspan=3>METER<br>LITER<br>GRAM</td><td rowspan=3>&nbsp;</td><td rowspan=3>&nbsp;</td><td rowspan=3>&nbsp;</td></tr></table>}'),
                helpAddLine: '<br><br>This fraction means 3 <span class=bigger>&divide;</span> 3.',
				template: 'simpleConversion' },
				// problem 2
			{
				problemText: 'What is the value of this fraction:',
				answer: '1',
				initialNumAmount: '1',
				initialDenAmount: '1000',
				unitsStart: 'meter',
				unitsPer: 'millimeters',
				fractionQuestion: dataUtils.pre(
							'\\frac'
								+'{\\fracstr{$$initialNumAmount $$unitsStart}}'
								+'{\\fracstr{$$initialDenAmount $$unitsPer}}'
						),
				fractionAnswer: dataUtils.pre('\\grp'
									+'{\\input{$$answer}}'
						),
				modalChart: dataUtils.pre('\\html{<table class=conversion-table><th>kilo<br>(k)</th><th>hecto<br>(h)</th><th>deka<br>(da)</th><th>Basic<br>Units</th><th>deci<br>(d)</th><th>centi<br>(c)</th><th>milli<br>(m)</th></tr><tr><td rowspan=3>&nbsp;</td><td rowspan=3>&nbsp;</td rowspan=3><td rowspan=3>&nbsp;</td><td rowspan=3>METER<br>LITER<br>GRAM</td><td rowspan=3>&nbsp;</td><td rowspan=3>&nbsp;</td><td rowspan=3>&nbsp;</td></tr></table>}'),
                helpAddLine: '<br><br>1 meter is the <u>same</u> distance as 1000 millimeters.',
				template: 'simpleConversion' },
				// problem 3
			{
				problemText: 'What is the value of this fraction:',
				answer: '1',
				initialNumAmount: '0.01',
				initialDenAmount: '1',
				unitsStart: 'hectogram',
				unitsPer: 'gram',
				fractionQuestion: dataUtils.pre(
							'\\frac'
								+'{\\fracstr{$$initialNumAmount $$unitsStart}}'
								+'{\\fracstr{$$initialDenAmount $$unitsPer}}'
						),
				fractionAnswer: dataUtils.pre('\\grp'
									+'{\\input{$$answer}}'
						),
				modalChart: dataUtils.pre('\\html{<table class=conversion-table><th>kilo<br>(k)</th><th>hecto<br>(h)</th><th>deka<br>(da)</th><th>Basic<br>Units</th><th>deci<br>(d)</th><th>centi<br>(c)</th><th>milli<br>(m)</th></tr><tr><td rowspan=3>&nbsp;</td><td rowspan=3>&nbsp;</td rowspan=3><td rowspan=3>&nbsp;</td><td rowspan=3>METER<br>LITER<br>GRAM</td><td rowspan=3>&nbsp;</td><td rowspan=3>&nbsp;</td><td rowspan=3>&nbsp;</td></tr></table>}'),
                helpAddLine: '<br><br>0.01 hectograms is the <u>same</u> weight as 1 gram.',
				template: 'simpleConversion' },
				// problem 4
			{
				problemText: 'What is the value of this fraction:',
				answer: '1',
				initialNumAmount: '1',
				initialDenAmount: '10',
				unitsStart: 'dL',
				unitsPer: 'cL',
				fractionQuestion: dataUtils.pre(
							'\\frac'
								+'{\\fracstr{$$initialNumAmount $$unitsStart}}'
								+'{\\fracstr{$$initialDenAmount $$unitsPer}}'
						),
				fractionAnswer: dataUtils.pre('\\grp'
									+'{\\input{$$answer}}'
						),
				modalChart: dataUtils.pre('\\html{<table class=conversion-table><th>kilo<br>(k)</th><th>hecto<br>(h)</th><th>deka<br>(da)</th><th>Basic<br>Units</th><th>deci<br>(d)</th><th>centi<br>(c)</th><th>milli<br>(m)</th></tr><tr><td rowspan=3>&nbsp;</td><td rowspan=3>&nbsp;</td rowspan=3><td rowspan=3>&nbsp;</td><td rowspan=3>METER<br>LITER<br>GRAM</td><td rowspan=3>&nbsp;</td><td rowspan=3>&nbsp;</td><td rowspan=3>&nbsp;</td></tr></table>}'),
                helpAddLine: '<br><br>1 dL is the <u>same</u> value as 10 cL.',
				template: 'simpleConversion' },
				// problem 5
			{
				problemText: 'Solve:',
				answer: '4',
				initialNumAmount: '1',
				initialDenAmount: '0.001',
				unitsStart: 'm',
				unitsPer: 'km',
				fractionQuestion: dataUtils.pre('\\grp'
									+'{\\html{4}}'
									+'{\\str{*}}'
									+'{\\frac'
										+'{\\fracstr{$$initialNumAmount $$unitsStart}}'
										+'{\\fracstr{$$initialDenAmount $$unitsPer}}'
									+'}'
						),
				fractionAnswer: dataUtils.pre('\\grp'
									+'{\\input{$$answer}}'
						),
				helpFractionAnswer: dataUtils.pre('\\grp'
									+'{\\str{$$answer}}'
						),
				helpText: 'Since 1 m is exactly the same as 0.001 km, we know that the fraction of 1 m/0.001 km is equal to 1 whole.<sup>3</sup>&#8260;<sub>5</sub><br>Therefore:<br><br>4 * 1 m / 0.001 km is the same as 4 * 1',
				modalChart: dataUtils.pre('\\html{<table class=conversion-table><th>kilo<br>(k)</th><th>hecto<br>(h)</th><th>deka<br>(da)</th><th>Basic<br>Units</th><th>deci<br>(d)</th><th>centi<br>(c)</th><th>milli<br>(m)</th></tr><tr><td rowspan=3>&nbsp;</td><td rowspan=3>&nbsp;</td rowspan=3><td rowspan=3>&nbsp;</td><td rowspan=3>METER<br>LITER<br>GRAM</td><td rowspan=3>&nbsp;</td><td rowspan=3>&nbsp;</td><td rowspan=3>&nbsp;</td></tr></table>}'),
				template: 'simpleMultFracConversion' 
			},
				// problem 6
			{
				problemText: 'Solve:',
				answer: '<sup>3</sup>&#8260;<sub>5</sub>',
				multiplierNumAmount: '3',
				multiplierDenAmount: '5',
				initialNumAmount: '100',
				initialDenAmount: '1',
				unitsStart: 'cg',
				unitsPer: 'g',
				fractionQuestion: dataUtils.pre('\\grp'
									+'{\\frac'
										+'{\\fracstr{$$multiplierNumAmount}}'
										+'{\\fracstr{$$multiplierDenAmount}}'
									+'}'
									+'{\\str{*}}'
									+'{\\frac'
										+'{\\fracstr{$$initialNumAmount $$unitsStart}}'
										+'{\\fracstr{$$initialDenAmount $$unitsPer}}'
									+'}'
						),
				fractionAnswer: dataUtils.pre('\\frac'
										+'{\\input{3}}'
										+'{\\input{5}}'
						),
				helpFractionAnswer: dataUtils.pre('\\frac'
										+'{\\fracstr{3}}'
										+'{\\fracstr{5}}'
						),
				helpText: 'Since 100 cg is exactly the same as 1 g, we know that the fraction of 100 cg/1 g is equal to 1 whole.<br>Therefore:<br><br><sup>3</sup>&#8260;<sub>5</sub> * 100 cg/1 g is the same as &nbsp;<sup>3</sup>&#8260;<sub>5</sub> * 1',
				modalChart: dataUtils.pre('\\html{<table class=conversion-table><th>kilo<br>(k)</th><th>hecto<br>(h)</th><th>deka<br>(da)</th><th>Basic<br>Units</th><th>deci<br>(d)</th><th>centi<br>(c)</th><th>milli<br>(m)</th></tr><tr><td rowspan=3>&nbsp;</td><td rowspan=3>&nbsp;</td rowspan=3><td rowspan=3>&nbsp;</td><td rowspan=3>METER<br>LITER<br>GRAM</td><td rowspan=3>&nbsp;</td><td rowspan=3>&nbsp;</td><td rowspan=3>&nbsp;</td></tr></table>}'),
				template: 'simpleMultFracConversion' 
			},
				// problem 7
			{
				problemText: 'Fill in the blank to create a fraction that equals 1 whole (where the numerator and the denominator represent the same value):',
				answer: '1000',
				initialNumAmount: '1',
				unitsStart: ' km',
				unitsPer: ' m',
				fractionAnswer: dataUtils.pre('\\frac'
												+'{\\fracstr{$$initialNumAmount$$unitsStart}}'
												+'{\\grp'
													+'{\\input{$$answer}}'
													+'{\\str{$$unitsPer}}'
												+'}'
								),
				fractionNoInputAnswer: dataUtils.pre('\\frac'
												+'{\\fracstr{$$initialNumAmount$$unitsStart}}'
												+'{\\grp'
													+'{\\html{?}}'
													+'{\\str{$$unitsPer}}'
												+'}'
								),
				fractionHelp: dataUtils.pre('\\frac'
												+'{\\fracstr{$$initialNumAmount$$unitsStart}}'
												+'{\\grp'
													+'{\\html{$$answer}}'
													+'{\\str{$$unitsPer}}'
												+'}'
								),
				helpText: '1 km = 1000 m.<br><br>Therefore, the fraction that equals 1 whole would be:',
				modalChart: dataUtils.pre('\\html{<table class=conversion-table><th>kilo<br>(k)</th><th>hecto<br>(h)</th><th>deka<br>(da)</th><th>Basic<br>Units</th><th>deci<br>(d)</th><th>centi<br>(c)</th><th>milli<br>(m)</th></tr><tr><td rowspan=3>&nbsp;</td><td rowspan=3>&nbsp;</td rowspan=3><td rowspan=3>&nbsp;</td><td rowspan=3>METER<br>LITER<br>GRAM</td><td rowspan=3>&nbsp;</td><td rowspan=3>&nbsp;</td><td rowspan=3>&nbsp;</td></tr></table>}'),
				template: 'simpleFractional' 
			},
				// problem 8
			{
				problemText: 'Fill in the blank to create a fraction that equals 1 whole (where the numerator and the denominator represent the same value):',
				answer: '1000',
				initialNumAmount: '1',
				unitsStart: ' g',
				unitsPer: ' mg',
				fractionAnswer: dataUtils.pre('\\frac'
												+'{\\fracstr{$$initialNumAmount$$unitsStart}}'
												+'{\\grp'
													+'{\\input{$$answer}}'
													+'{\\str{$$unitsPer}}'
												+'}'
								),
				fractionNoInputAnswer: dataUtils.pre('\\frac'
												+'{\\fracstr{$$initialNumAmount$$unitsStart}}'
												+'{\\grp'
													+'{\\str{?}}'
													+'{\\str{$$unitsPer}}'
												+'}'
								),
				fractionHelp: dataUtils.pre('\\frac'
												+'{\\fracstr{$$initialNumAmount$$unitsStart}}'
												+'{\\grp'
													+'{\\html{$$answer}}'
													+'{\\str{$$unitsPer}}'
												+'}'
								),
				helpText: '1 g = 1000 mg. <br><br>Therefore, the fraction that equals 1 whole would be:',
				modalChart: dataUtils.pre('\\html{<table class=conversion-table><th>kilo<br>(k)</th><th>hecto<br>(h)</th><th>deka<br>(da)</th><th>Basic<br>Units</th><th>deci<br>(d)</th><th>centi<br>(c)</th><th>milli<br>(m)</th></tr><tr><td rowspan=3>&nbsp;</td><td rowspan=3>&nbsp;</td rowspan=3><td rowspan=3>&nbsp;</td><td rowspan=3>METER<br>LITER<br>GRAM</td><td rowspan=3>&nbsp;</td><td rowspan=3>&nbsp;</td><td rowspan=3>&nbsp;</td></tr></table>}'),
				template: 'simpleFractional' 
			},
			// problem 9
			{
				problemText: 'Fill in the blank to create a fraction that equals 1 whole (where the numerator and the denominator represent the same value):',
				answer: '0.001',
				initialNumAmount: '1',
				unitsStart: ' mm',
				unitsPer: ' m',
				fractionAnswer: dataUtils.pre('\\frac'
												+'{\\fracstr{$$initialNumAmount$$unitsStart}}'
												+'{\\grp'
													+'{\\input{$$answer}}'
													+'{\\str{$$unitsPer}}'
												+'}'
								),
				fractionNoInputAnswer: dataUtils.pre('\\frac'
												+'{\\fracstr{$$initialNumAmount$$unitsStart}}'
												+'{\\grp'
													+'{\\str{?}}'
													+'{\\str{$$unitsPer}}'
												+'}'
								),
				fractionHelp: dataUtils.pre('\\frac'
												+'{\\fracstr{$$initialNumAmount$$unitsStart}}'
												+'{\\grp'
													+'{\\html{$$answer}}'
													+'{\\str{$$unitsPer}}'
												+'}'
								),
				helpText: '1 mm = 0.001 m.<br><br>Therefore, the fraction that equals 1 whole would be:',
				modalChart: dataUtils.pre('\\html{<table class=conversion-table><th>kilo<br>(k)</th><th>hecto<br>(h)</th><th>deka<br>(da)</th><th>Basic<br>Units</th><th>deci<br>(d)</th><th>centi<br>(c)</th><th>milli<br>(m)</th></tr><tr><td rowspan=3>&nbsp;</td><td rowspan=3>&nbsp;</td rowspan=3><td rowspan=3>&nbsp;</td><td rowspan=3>METER<br>LITER<br>GRAM</td><td rowspan=3>&nbsp;</td><td rowspan=3>&nbsp;</td><td rowspan=3>&nbsp;</td></tr></table>}'),
				template: 'simpleFractional' 
			},
			// problem 10
			{
				problemText: 'Fill in the blank to create a fraction that equals 1 whole (where the numerator and the denominator represent the same value):',
				answer: '0.01',
				initialNumAmount: '1',
				unitsStart: ' cL',
				unitsPer: ' L',
				fractionAnswer: dataUtils.pre('\\frac'
												+'{\\fracstr{$$initialNumAmount$$unitsStart}}'
												+'{\\grp'
													+'{\\input{$$answer}}'
													+'{\\str{$$unitsPer}}'
												+'}'
								),
				fractionNoInputAnswer: dataUtils.pre('\\frac'
												+'{\\fracstr{$$initialNumAmount$$unitsStart}}'
												+'{\\grp'
													+'{\\str{?}}'
													+'{\\str{$$unitsPer}}'
												+'}'
								),
				fractionHelp: dataUtils.pre('\\frac'
												+'{\\fracstr{$$initialNumAmount$$unitsStart}}'
												+'{\\grp'
													+'{\\html{$$answer}}'
													+'{\\str{$$unitsPer}}'
												+'}'
								),
				helpText: '1 cL = 0.01 L.<br><br>Therefore, the fraction that equals 1 whole would be:',
				modalChart: dataUtils.pre('\\html{<table class=conversion-table><th>kilo<br>(k)</th><th>hecto<br>(h)</th><th>deka<br>(da)</th><th>Basic<br>Units</th><th>deci<br>(d)</th><th>centi<br>(c)</th><th>milli<br>(m)</th></tr><tr><td rowspan=3>&nbsp;</td><td rowspan=3>&nbsp;</td rowspan=3><td rowspan=3>&nbsp;</td><td rowspan=3>METER<br>LITER<br>GRAM</td><td rowspan=3>&nbsp;</td><td rowspan=3>&nbsp;</td><td rowspan=3>&nbsp;</td></tr></table>}'),
				template: 'simpleFractional' 
			},
			// problem 11
			{
				problemText: 'Fill in the blank to create a fraction that equals 1 whole (where the numerator and the denominator represent the same value):',
				answer: '0.01',
				initialNumAmount: '1',
				unitsStart: ' dL',
				unitsPer: ' daL',
				fractionAnswer: dataUtils.pre('\\frac'
												+'{\\grp'
													+'{\\input{$$answer}}'
													+'{\\str{$$unitsPer}}'
												+'}'
												+'{\\fracstr{$$initialNumAmount$$unitsStart}}'
								),
				fractionNoInputAnswer: dataUtils.pre('\\frac'
												+'{\\grp'
													+'{\\str{?}}'
													+'{\\str{$$unitsPer}}'
												+'}'
												+'{\\fracstr{$$initialNumAmount$$unitsStart}}'
								),
				fractionHelp: dataUtils.pre('\\frac'
												+'{\\grp'
													+'{\\str{$$answer}}'
													+'{\\str{$$unitsPer}}'
												+'}'
												+'{\\fracstr{$$initialNumAmount$$unitsStart}}'
								),
				helpText: '0.01 daL = 1 dL.<br><br>Therefore, the fraction that equals 1 whole would be:',
				modalChart: dataUtils.pre('\\html{<table class=conversion-table><th>kilo<br>(k)</th><th>hecto<br>(h)</th><th>deka<br>(da)</th><th>Basic<br>Units</th><th>deci<br>(d)</th><th>centi<br>(c)</th><th>milli<br>(m)</th></tr><tr><td rowspan=3>&nbsp;</td><td rowspan=3>&nbsp;</td rowspan=3><td rowspan=3>&nbsp;</td><td rowspan=3>METER<br>LITER<br>GRAM</td><td rowspan=3>&nbsp;</td><td rowspan=3>&nbsp;</td><td rowspan=3>&nbsp;</td></tr></table>}'),
				template: 'simpleFractional' 
			},
			// problem 12
			{
				problemText: 'Fill in the blank to create a fraction that equals 1 whole (where the numerator and the denominator represent the same value):',
				answer: '0.0001',
				initialNumAmount: '1',
				unitsStart: ' cg',
				unitsPer: ' hg',
				fractionAnswer: dataUtils.pre('\\frac'
												+'{\\grp'
													+'{\\input{$$answer}}'
													+'{\\str{$$unitsPer}}'
												+'}'
												+'{\\fracstr{$$initialNumAmount$$unitsStart}}'
								),
				fractionNoInputAnswer: dataUtils.pre('\\frac'
												+'{\\grp'
													+'{\\str{?}}'
													+'{\\str{$$unitsPer}}'
												+'}'
												+'{\\fracstr{$$initialNumAmount$$unitsStart}}'
								),
				fractionHelp: dataUtils.pre('\\frac'
												+'{\\grp'
													+'{\\str{$$answer}}'
													+'{\\str{$$unitsPer}}'
												+'}'
												+'{\\fracstr{$$initialNumAmount$$unitsStart}}'
								),
				helpText: '0.0001 hg = 1 cg.<br><br>Therefore, the fraction that equals 1 whole would be:',
				modalChart: dataUtils.pre('\\html{<table class=conversion-table><th>kilo<br>(k)</th><th>hecto<br>(h)</th><th>deka<br>(da)</th><th>Basic<br>Units</th><th>deci<br>(d)</th><th>centi<br>(c)</th><th>milli<br>(m)</th></tr><tr><td rowspan=3>&nbsp;</td><td rowspan=3>&nbsp;</td rowspan=3><td rowspan=3>&nbsp;</td><td rowspan=3>METER<br>LITER<br>GRAM</td><td rowspan=3>&nbsp;</td><td rowspan=3>&nbsp;</td><td rowspan=3>&nbsp;</td></tr></table>}'),
				template: 'simpleFractional' 
			},
			{ // problem 13
				problemText: '1 centimeter of cloth costs $0.06.<br>How much would 3 meters of the cloth cost?',
				problemAmount: '3',
				descriptor: '',
				perSelect: '[\\"cm\\", \\"m\\"]',
				initialAmount: '0.06',
				delta: '0.06',
				epsilon: '1',
				denominatorSecond: '1',
				dollarSign: '$',
				unitsQuestionPer: 'cm',
				unitsAnswerPer: 'meter',
				fourthProblemPer: 'meters',
				finalAnswer: '18.00',
				numDecimal: '100',
				denDecimal: '1',
				numUnitFrac: 'cm',
				numSelect: '[\\"cm\\", \\"m\\"]',
				denUnitFrac: 'm',
				denSelect: '[\\"cm\\", \\"m\\"]',
				helpFinalAnswer: '6.00',
				firstWordCancel: 'cm',
				secondWordCancel: 'm',
				givenFirstPart: 'denominator',
				givenSecondPart: 'numerator',
                step2Inputs: dataUtils.pre('{\\frac'
												+'{\\grp'
													+'{\\input{$$numDecimal}}'
													+'{\\html{&nbsp;}}'
													+'{\\select{$$numUnitFrac}{$$numSelect}}'
												+'}'
												+'{\\grp'
													+'{\\str{$$denDecimal}}'
													+'{\\html{&nbsp; &nbsp;}}'
													+'{\\select{$$denUnitFrac}{$$denSelect}}'
												+'}'
											+'}'
								),
				modalChart: dataUtils.pre('\\html{<table class=conversion-table><th>kilo<br>(k)</th><th>hecto<br>(h)</th><th>deka<br>(da)</th><th>Basic<br>Units</th><th>deci<br>(d)</th><th>centi<br>(c)</th><th>milli<br>(m)</th></tr><tr><td rowspan=3>&nbsp;</td><td rowspan=3>&nbsp;</td rowspan=3><td rowspan=3>&nbsp;</td><td rowspan=3>METER<br>LITER<br>GRAM</td><td rowspan=3>&nbsp;</td><td rowspan=3>&nbsp;</td><td rowspan=3>&nbsp;</td></tr></table>}'),
				template: 'dollarOneStep' 
			}
			,
			{ // problem 14
				problemText: 'A kiloliter of juice costs $1,250. How much would two liters of the juice cost?',
				problemAmount: '2',
				descriptor: '',
				perSelect: '[\\"kL\\", \\"L\\"]',
				initialAmount: '1',
				delta: '1250',
				epsilon: '1',
				numeratorSecond: '1',
				denominatorSecond: '1000',
				dollarSign: '$',
				unitsQuestionPer: 'kL',
				unitsAnswerPer: 'L',
				fourthProblemPer: 'liters',
				thirdStepUnit: 'liter',
				finalAnswer: '2.50',
				numDecimal: '1',
				denDecimal: '1000',
				numUnitFrac: 'kL',
				numSelect: '[\\"kL\\", \\"L\\"]',
				denUnitFrac: 'L',
				denSelect: '[\\"kL\\", \\"L\\"]',
				helpFinalAnswer: '1.25',
				firstWordCancel: 'kL',
				secondWordCancel: 'L',
				givenFirstPart: 'numerator',
				givenSecondPart: 'denominator',
                step2Inputs: dataUtils.pre('{\\frac'
												+'{\\grp'
													+'{\\str{$$numDecimal}}'
													+'{\\html{&nbsp; &nbsp;}}'
													+'{\\select{$$numUnitFrac}{$$numSelect}}'
												+'}'
												+'{\\grp'
													+'{\\input{$$denDecimal}}'
													+'{\\html{&nbsp;}}'
													+'{\\select{$$denUnitFrac}{$$denSelect}}'
												+'}'
											+'}'
								),
				modalChart: dataUtils.pre('\\html{<table class=conversion-table><th>kilo<br>(k)</th><th>hecto<br>(h)</th><th>deka<br>(da)</th><th>Basic<br>Units</th><th>deci<br>(d)</th><th>centi<br>(c)</th><th>milli<br>(m)</th></tr><tr><td rowspan=3>&nbsp;</td><td rowspan=3>&nbsp;</td rowspan=3><td rowspan=3>&nbsp;</td><td rowspan=3>METER<br>LITER<br>GRAM</td><td rowspan=3>&nbsp;</td><td rowspan=3>&nbsp;</td><td rowspan=3>&nbsp;</td></tr></table>}'),
				template: 'dollarOneStep' 
			}
			,
			{ // problem 15
				problemText: 'Gas costs $1.10 per liter. How much would it cost to buy 5 hectoliters?',
				problemAmount: '5',
				descriptor: '',
				perSelect: '[\\"hL\\", \\"dL\\", \\"L\\"]',
				initialAmount: '1',
				delta: '1.10',
				epsilon: '1',
				denominatorSecond: '0.01',
				dollarSign: '$',
				unitsQuestionPer: 'L',
				unitsAnswerPer: 'hL',
				fourthProblemPer: 'hectoliters',
				thirdStepUnit: 'hectoliters',
				finalAnswer: '550.00',
				numDecimal: '1',
				denDecimal: '0.01',
				numUnitFrac: 'L',
				numSelect: '[\\"hL\\", \\"L\\"]',
				denUnitFrac: 'hL',
				denSelect: '[\\"hL\\", \\"L\\"]',
				helpFinalAnswer: '110.00',
				firstWordCancel: 'L',
				secondWordCancel: 'hL',
				givenFirstPart: 'numerator',
				givenSecondPart: 'denominator',
                step2Inputs: dataUtils.pre('{\\frac'
												+'{\\grp'
													+'{\\str{$$numDecimal}}'
													+'{\\html{&nbsp; &nbsp;}}'
													+'{\\select{$$numUnitFrac}{$$numSelect}}'
												+'}'
												+'{\\grp'
													+'{\\input{$$denDecimal}}'
													+'{\\html{&nbsp;}}'
													+'{\\select{$$denUnitFrac}{$$denSelect}}'
												+'}'
											+'}'
								),
				modalChart: dataUtils.pre('\\html{<table class=conversion-table><th>kilo<br>(k)</th><th>hecto<br>(h)</th><th>deka<br>(da)</th><th>Basic<br>Units</th><th>deci<br>(d)</th><th>centi<br>(c)</th><th>milli<br>(m)</th></tr><tr><td rowspan=3>&nbsp;</td><td rowspan=3>&nbsp;</td rowspan=3><td rowspan=3>&nbsp;</td><td rowspan=3>METER<br>LITER<br>GRAM</td><td rowspan=3>&nbsp;</td><td rowspan=3>&nbsp;</td><td rowspan=3>&nbsp;</td></tr></table>}'),
				template: 'dollarOneStep' 
			}
			,
			{ // problem 16
				problemText: 'A kilometer of wire costs $145. How much would 250 meters cost?',
				problemAmount: '250',
				descriptor: '',
				perSelect: '[\\"km\\", \\"hM\\", \\"dM\\", \\"m\\"]',
				initialAmount: '1',
				delta: '145',
				epsilon: '1',
				denominatorSecond: '1000',
				dollarSign: '$',
				unitsQuestionPer: 'km',
				unitsAnswerPer: 'm',
				fourthProblemPer: 'meters',
				thirdStepUnit: 'meter',
				finalAnswer: '36.25',
				numDecimal: '1',
				denDecimal: '1000',
				numUnitFrac: 'km',
				numSelect: '[\\"km\\", \\"m\\"]',
				denUnitFrac: 'm',
				denSelect: '[\\"km\\", \\"m\\"]',
				helpFinalAnswer: '0.145',
				firstWordCancel: 'km',
				secondWordCancel: 'm',
				givenFirstPart: 'numerator',
				givenSecondPart: 'denominator',
                step2Inputs: dataUtils.pre('{\\frac'
												+'{\\grp'
													+'{\\str{$$numDecimal}}'
													+'{\\html{&nbsp; &nbsp;}}'
													+'{\\select{$$numUnitFrac}{$$numSelect}}'
												+'}'
												+'{\\grp'
													+'{\\input{$$denDecimal}}'
													+'{\\html{&nbsp;}}'
													+'{\\select{$$denUnitFrac}{$$denSelect}}'
												+'}'
											+'}'
								),
				modalChart: dataUtils.pre('\\html{<table class=conversion-table><th>kilo<br>(k)</th><th>hecto<br>(h)</th><th>deka<br>(da)</th><th>Basic<br>Units</th><th>deci<br>(d)</th><th>centi<br>(c)</th><th>milli<br>(m)</th></tr><tr><td rowspan=3>&nbsp;</td><td rowspan=3>&nbsp;</td rowspan=3><td rowspan=3>&nbsp;</td><td rowspan=3>METER<br>LITER<br>GRAM</td><td rowspan=3>&nbsp;</td><td rowspan=3>&nbsp;</td><td rowspan=3>&nbsp;</td></tr></table>}'),
				template: 'dollarOneStep' 
			}
			,
			{ // problem 17
				problemText: '50 milligrams of medication costs $8. How much would 20 grams cost?',
				problemAmount: '20',
				descriptor: '',
				perSelect: '[\\"g\\", \\"dG\\", \\"hG\\", \\"mg\\"]',
				initialAmount: '1',
				delta: '8',
				epsilon: '50',
				denominatorSecond: '1',
				dollarSign: '$',
				unitsQuestionPer: 'mg',
				unitsAnswerPer: 'g',
				fourthProblemPer: 'grams',
				thirdStepUnit: 'gram',
				finalAnswer: '3200.00',
				numDecimal: '1000',
				denDecimal: '1',
				numUnitFrac: 'mg',
				numSelect: '[\\"g\\", \\"mg\\"]',
				denUnitFrac: 'g',
				denSelect: '[\\"g\\", \\"mg\\"]',
				helpFinalAnswer: '160.00',
				firstWordCancel: 'mg',
				secondWordCancel: 'g',
				givenFirstPart: 'denominator',
				givenSecondPart: 'numerator',
                step2Inputs: dataUtils.pre('{\\frac'
												+'{\\grp'
													+'{\\input{$$numDecimal}}'
													+'{\\html{&nbsp;}}'
													+'{\\select{$$numUnitFrac}{$$numSelect}}'
												+'}'
												+'{\\grp'
													+'{\\str{$$denDecimal}}'
													+'{\\html{&nbsp; &nbsp;}}'
													+'{\\select{$$denUnitFrac}{$$denSelect}}'
												+'}'
											+'}'
								),
				modalChart: dataUtils.pre('\\html{<table class=conversion-table><th>kilo<br>(k)</th><th>hecto<br>(h)</th><th>deka<br>(da)</th><th>Basic<br>Units</th><th>deci<br>(d)</th><th>centi<br>(c)</th><th>milli<br>(m)</th></tr><tr><td rowspan=3>&nbsp;</td><td rowspan=3>&nbsp;</td rowspan=3><td rowspan=3>&nbsp;</td><td rowspan=3>METER<br>LITER<br>GRAM</td><td rowspan=3>&nbsp;</td><td rowspan=3>&nbsp;</td><td rowspan=3>&nbsp;</td></tr></table>}'),
				template: 'dollarOneStep' 
			}
			,
			{ // problem 18
				problemText: 'The recipe calls for 20 centigrams of sweetener for every liter of juice. How many grams of sweetener would you need if you used six liters of juice?',
				statementTwo: 'How many grams of sweetener per liter are needed?',
				instructionThird: 'How many grams of sweetener would be needed for six liters of juice?',
				problemAmount: '20',
				descriptor: '',
				perSelect: '[\\"cg\\", \\"g\\"]',
				conversionToSelect: '[\\"cL\\", \\"L\\"]',
				initialAmount: '20',
				delta: '20',
				epsilon: '1',
				denominatorSecond: '1',
				unitsQuestionPer: 'cg',
				unitsAnswerPer: 'grams',
				unitsPer: 'L',
				firstExample: '0.001 m',
				secondExample: '1 mm',
				thirdStepUnit: 'gram',
				finalAnswer: '1.2',
				numDecimal: '0.01',
				denDecimal: '1',
				numUnitFrac: 'g',
				numSelect: '[\\"g\\", \\"cg\\"]',
				denUnitFrac: 'cg',
				denSelect: '[\\"g\\", \\"cg\\"]',
				helpFinalAnswer: '0.2',
				firstWordCancel: 'cg',
				secondWordCancel: 'g',
				givenFirstPart: 'denominator',
				givenSecondPart: 'numerator',
                step2Inputs: dataUtils.pre('{\\frac'
												+'{\\grp'
													+'{\\input{$$numDecimal}}'
													+'{\\html{&nbsp;}}'
													+'{\\select{$$numUnitFrac}{$$numSelect}}'
												+'}'
												+'{\\grp'
													+'{\\str{$$denDecimal}}'
													+'{\\html{&nbsp; &nbsp;}}'
													+'{\\select{$$denUnitFrac}{$$denSelect}}'
												+'}'
											+'}'
								),
				modalChart: dataUtils.pre('\\html{<table class=conversion-table><th>kilo<br>(k)</th><th>hecto<br>(h)</th><th>deka<br>(da)</th><th>Basic<br>Units</th><th>deci<br>(d)</th><th>centi<br>(c)</th><th>milli<br>(m)</th></tr><tr><td rowspan=3>&nbsp;</td><td rowspan=3>&nbsp;</td rowspan=3><td rowspan=3>&nbsp;</td><td rowspan=3>METER<br>LITER<br>GRAM</td><td rowspan=3>&nbsp;</td><td rowspan=3>&nbsp;</td><td rowspan=3>&nbsp;</td></tr></table>}'),
				template: 'quantityOneStep' 
			} 
			,
			{ // problem 19
				problemText: 'The chickens ate 40 grams of food in one day. How many decigrams of food do they eat in seven days?',
				statementTwo: 'How many decigrams of food do the chickens eat per day?',
				instructionThird: 'How many decigrams of food do the chickens eat in seven days?',
				problemAmount: '40',
				descriptor: '',
				perSelect: '[\\"g\\", \\"hg\\"]',
				conversionToSelect: '[\\"day\\", \\"week\\"]',
				initialAmount: '40',
				delta: '40',
				epsilon: '1',
				denominatorSecond: '1',
				unitsQuestionPer: 'g',
				unitsAnswerPer: 'dg',
				unitsPer: 'day',
				firstExample: '1000 mm',
				secondExample: '1 mm',
				finalAnswer: '2800',
				numDecimal: '10',
				denDecimal: '1',
				numUnitFrac: 'dg',
				numSelect: '[\\"g\\", \\"dg\\"]',
				denUnitFrac: 'g',
				denSelect: '[\\"g\\", \\"dg\\"]',
				helpFinalAnswer: '400',
				firstWordCancel: 'g',
				secondWordCancel: 'dg',
				givenFirstPart: 'denominator',
				givenSecondPart: 'numerator',
                step2Inputs: dataUtils.pre('{\\frac'
												+'{\\grp'
													+'{\\input{$$numDecimal}}'
													+'{\\html{&nbsp;}}'
													+'{\\select{$$numUnitFrac}{$$numSelect}}'
												+'}'
												+'{\\grp'
													+'{\\str{$$denDecimal}}'
													+'{\\html{&nbsp; &nbsp;}}'
													+'{\\select{$$denUnitFrac}{$$denSelect}}'
												+'}'
											+'}'
								),
				modalChart: dataUtils.pre('\\html{<table class=conversion-table><th>kilo<br>(k)</th><th>hecto<br>(h)</th><th>deka<br>(da)</th><th>Basic<br>Units</th><th>deci<br>(d)</th><th>centi<br>(c)</th><th>milli<br>(m)</th></tr><tr><td rowspan=3>&nbsp;</td><td rowspan=3>&nbsp;</td rowspan=3><td rowspan=3>&nbsp;</td><td rowspan=3>METER<br>LITER<br>GRAM</td><td rowspan=3>&nbsp;</td><td rowspan=3>&nbsp;</td><td rowspan=3>&nbsp;</td></tr></table>}'),
				template: 'quantityOneStep' 
			}
			,
			{ // problem 20
				problemText: 'A hectometer of fishing line costs $5. How much would 10 kilometers cost?',
				problemAmount: '10',
				descriptor: '',
				perSelect: '[\\"hm\\", \\"m\\"]',
				initialAmount: '1',
				delta: '5',
				epsilon: '1',
				denominatorSecond: '0.1',
				dollarSign: '$',
				unitsQuestionPer: 'hm',
				unitsAnswerPer: 'km',
				fourthProblemPer: 'kilometers',
				finalAnswer: '500.00',
				numDecimal: '1',
				denDecimal: '0.1',
				numUnitFrac: 'hm',
				numSelect: '[\\"hm\\", \\"km\\"]',
				denUnitFrac: 'km',
				denSelect: '[\\"hm\\", \\"km\\"]',
				helpFinalAnswer: '50.00',
				firstWordCancel: 'hm',
				secondWordCancel: 'km',
				givenFirstPart: 'numerator',
				givenSecondPart: 'denominator',
                step2Inputs: dataUtils.pre('{\\frac'
												+'{\\grp'
													+'{\\str{$$numDecimal}}'
													+'{\\html{&nbsp; &nbsp;}}'
													+'{\\select{$$numUnitFrac}{$$numSelect}}'
												+'}'
												+'{\\grp'
													+'{\\input{$$denDecimal}}'
													+'{\\html{&nbsp;}}'
													+'{\\select{$$denUnitFrac}{$$denSelect}}'
												+'}'
											+'}'
								),
				modalChart: dataUtils.pre('\\html{<table class=conversion-table><th>kilo<br>(k)</th><th>hecto<br>(h)</th><th>deka<br>(da)</th><th>Basic<br>Units</th><th>deci<br>(d)</th><th>centi<br>(c)</th><th>milli<br>(m)</th></tr><tr><td rowspan=3>&nbsp;</td><td rowspan=3>&nbsp;</td rowspan=3><td rowspan=3>&nbsp;</td><td rowspan=3>METER<br>LITER<br>GRAM</td><td rowspan=3>&nbsp;</td><td rowspan=3>&nbsp;</td><td rowspan=3>&nbsp;</td></tr></table>}'),
				template: 'dollarOneStep' 
			}
			,
			{ // problem 21
				problemText: 'Three liters of water flow through a pipe in 1 minute. At that rate, how many centiliters flow through the pipe in three hours?',
				statementTwo: 'How many centiliters of water flow through the pipe in one hour?',
				instructionThird: 'How many centiliters of water flow through the pipe in three hours?',
				typeFraction: 'volume',
				problemAmount: '3',
				descriptor: 'volume',
				perSelect: '[\\"cL\\", \\"L\\"]',
				conversionToSelect: '[\\"min\\", \\"hr\\"]',
				initialAmount: '3',
				delta: '3',
				epsilon: '1',
				denominatorSecond: '1',
				unitsQuestionPer: 'L',
				unitsAnswerPer: 'cL',
				unitsPer: 'min',
				unitsSecondPer: 'hr',
				finalAnswer: '54000',
				numDecimal: '100',
				denDecimal: '1',
				numUnitFrac: 'cL',
				numSelect: '[\\"cL\\", \\"L\\"]',
				denUnitFrac: 'L',
				denSelect: '[\\"cL\\", \\"L\\"]',
				numThirdStep: '60',
				denThirdStep: '1',
				numThirdUnit: 'min',
				numThirdSelect: '[\\"min\\", \\"hr\\"]',
				denThirdUnit: 'hr',
				denThirdSelect: '[\\"min\\", \\"hr\\"]',
				helpFinalAnswer: '18000',
				firstWordCancel: 'L',
				secondWordCancel: 'cL',
				thirdWordCancel: 'min',
				fourthWordCancel: 'hr',
				givenFirstPart: 'denominator',
				givenSecondPart: 'numerator',
                step2Inputs: dataUtils.pre('{\\frac'
												+'{\\grp'
													+'{\\input{$$numDecimal}}'
													+'{\\html{&nbsp;}}'
													+'{\\select{$$numUnitFrac}{$$numSelect}}'
												+'}'
												+'{\\grp'
													+'{\\str{$$denDecimal}}'
													+'{\\html{&nbsp; &nbsp;}}'
													+'{\\select{$$denUnitFrac}{$$denSelect}}'
												+'}'
											+'}'
								),
					step3Inputs: dataUtils.pre('{\\frac'
												+'{\\grp'
													+'{\\input{$$numThirdStep}}'
													+'{\\html{&nbsp;}}'
													+'{\\select{$$numThirdUnit}{$$numThirdSelect}}'
												+'}'
												+'{\\grp'
													+'{\\str{$$denThirdStep}}'
													+'{\\html{&nbsp; &nbsp;}}'
													+'{\\select{$$denThirdUnit}{$$denThirdSelect}}'
												+'}'
											+'}'
								),
				modalChart: dataUtils.pre('\\html{<table class=conversion-table><th>kilo<br>(k)</th><th>hecto<br>(h)</th><th>deka<br>(da)</th><th>Basic<br>Units</th><th>deci<br>(d)</th><th>centi<br>(c)</th><th>milli<br>(m)</th></tr><tr><td rowspan=3>&nbsp;</td><td rowspan=3>&nbsp;</td rowspan=3><td rowspan=3>&nbsp;</td><td rowspan=3>METER<br>LITER<br>GRAM</td><td rowspan=3>&nbsp;</td><td rowspan=3>&nbsp;</td><td rowspan=3>&nbsp;</td></tr></table>}'),
				template: 'quantityTwoStep' 
			}
			,
			{ // problem 22
				problemText: 'You ran 1.5 meters in one second. At this rate, how many kilometers could you run in forty-five minutes?',
				statementTwo: 'How many kilometers could you run in one minute?',
				instructionThird: 'How many kilometers could you run in forty-five minutes?',
				typeFraction: 'distance',
				problemAmount: '1.5',
				descriptor: '',
				perSelect: '[\\"m\\", \\"km\\"]',
				conversionToSelect: '[\\"sec\\", \\"min\\"]',
				initialAmount: '1.5',
				delta: '1.5',
				epsilon: '1',
				denominatorSecond: '1',
				unitsQuestionPer: 'm',
				unitsAnswerPer: 'km',
				unitsPer: 'sec',
				unitsSecondPer: 'min',
				finalAnswer: '4.05',
				numDecimal: '1',
				denDecimal: '1000',
				numUnitFrac: 'km',
				numSelect: '[\\"m\\", \\"km\\"]',
				denUnitFrac: 'm',
				denSelect: '[\\"m\\", \\"km\\"]',
				numThirdStep: '60',
				denThirdStep: '1',
				numThirdUnit: 'sec',
				numThirdSelect: '[\\"sec\\", \\"min\\"]',
				denThirdUnit: 'min',
				denThirdSelect: '[\\"sec\\", \\"min\\"]',
				helpFinalAnswer: '0.09',
				firstWordCancel: 'm',
				secondWordCancel: 'km',
				thirdWordCancel: 'sec',
				fourthWordCancel: 'min',
				givenFirstPart: 'numerator',
				givenSecondPart: 'denominator',
                step2Inputs: dataUtils.pre('{\\frac'
												+'{\\grp'
													+'{\\str{$$numDecimal}}'
													+'{\\html{&nbsp; &nbsp;}}'
													+'{\\select{$$numUnitFrac}{$$numSelect}}'
												+'}'
												+'{\\grp'
													+'{\\input{$$denDecimal}}'
													+'{\\html{&nbsp; &nbsp;}}'
													+'{\\select{$$denUnitFrac}{$$denSelect}}'
												+'}'
											+'}'
								),
				step3Inputs: dataUtils.pre('{\\frac'
												+'{\\grp'
													+'{\\input{$$numThirdStep}}'
													+'{\\html{&nbsp;}}'
													+'{\\select{$$numThirdUnit}{$$numThirdSelect}}'
												+'}'
												+'{\\grp'
													+'{\\str{$$denThirdStep}}'
													+'{\\html{&nbsp; &nbsp;}}'
													+'{\\select{$$denThirdUnit}{$$denThirdSelect}}'
												+'}'
											+'}'
								),
				modalChart: dataUtils.pre('\\html{<table class=conversion-table><th>kilo<br>(k)</th><th>hecto<br>(h)</th><th>deka<br>(da)</th><th>Basic<br>Units</th><th>deci<br>(d)</th><th>centi<br>(c)</th><th>milli<br>(m)</th></tr><tr><td rowspan=3>&nbsp;</td><td rowspan=3>&nbsp;</td rowspan=3><td rowspan=3>&nbsp;</td><td rowspan=3>METER<br>LITER<br>GRAM</td><td rowspan=3>&nbsp;</td><td rowspan=3>&nbsp;</td><td rowspan=3>&nbsp;</td></tr></table>}'),
				template: 'quantityTwoStep' 
			}
        ];
		shuffle = [
				{ problems: [1], total: 1},
				{ problems: [2,3,4], total: 2},
				{ problems: [5,6], total: 1},
				{ problems: [7,8], total: 1},
				{ problems: [9,10], total: 1},
				{ problems: [11,12], total: 1},
				{ problems: [13,14,15,16,17,18,19,20], total: 6},
				{ problems: [21], total: 1},
				{ problems: [22], total: 1}
		];
    
    	return dataUtils.build(desc, template, data, shuffle);
		
		//return dataUtils.build(desc, template, data);
}]);