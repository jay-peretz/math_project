/*global angular */

angular.module('mathSkills').service('data25_2', ['dataUtils', function (dataUtils) {
    var desc = {
			title: '25.2 Converting English Compound Units Using Dimensional Analysis',
            path: '25.2-converting-english-compound-units-using-dimensional-analysis',
            children: []
        },
        template = {
			simpleConversion: {
                title: 'Converting English Compound Units Using Dimensional Analysis',
                children: [{
                    title: 'Main Answer',
                    children: [{
						problem: '\\rowgrp'
									+'{\\html{$problemText}}'
									+'{\\html{&nbsp;}}'
									+'{\\frac{\\fracstr{$initialNumAmount$unitsStart}}{\\fracstr{$initialDenAmount$unitsPer}}}',
                        answer: '\\grp'
									+'{\\input{$answer}}'
									+'$fractionAnswer',
                        controls: {
                            "checkAnswer": true,
                            "help": '\\rowgrp'
										+'{\\html{&nbsp;}}'
										+'{\\str{$helpText}}'
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
            oneStep: {
                title: 'Converting English Compound Units Using Dimensional Analysis',
                children: [{
                    title: 'Main Answer',
                    children: [{
						problem: '\\rowgrp'
									+'{\\html{$problemText}}',
                        answer: '\\grp'
									+'{\\sign{&equals;}}'
									+'{\\html{$prefixAnswer}}'
									+'{\\input{$answer}}'
									+'$fractionAnswer',
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
									+'{\\html{$problemText}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp'
										+'{\\html{$initialAmount &nbsp; $unitsStart / $unitsPer}}'
										+'{\\sign{&equals;}}'
										+'{\\html{? &nbsp; $unitsSecond / $unitsPer}}'
									+'}',
                        answer: '\\pan{12}{11}'
									+'{\\rowgrp'
										+'{\\html{Write the given value as a fraction.$descriptor}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\frac{\\grp{\\input{$numeratorStart}}{\\html{&nbsp;}}{\\select{$unitsStart}{$labelSelect}}}{\\grp{\\input{$denominatorStart}}{\\html{&nbsp;}}{\\select{$unitsPer}{$perSelect}}}}'
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
									+'{\\html{$problemText}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp'
										+'{\\html{$initialAmount &nbsp; $unitsStart / $unitsPer}}'
										+'{\\sign{&equals;}}'
										+'{\\html{? &nbsp; $unitsSecond / $unitsPer}}'
									+'}',
                        answer: '\\pan{12}{11}'
									+'{\\rowgrp'
										+'{\\html{What is the fraction (that equals 1 whole) that you need to multiply by?}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\frac'
												+'{\\grp'
													+'{\\html{$initialAmount}}{\\html{&nbsp;}}{\\html{$unitsStart}}'
												+'}'
												+'{\\grp'
													+'{\\html{1}}{\\html{&nbsp;}}{\\html{$unitsPer}}'
												+'}'
											+'}'
											+'{\\sign{&times;}}'
											+'{\\frac'
												+'{\\select{$numEqFrac}{$numSelect}}'
												+'{\\select{$denEqFrac}{$denSelect}}'
											+'}'
										+'}'
									+'}{well}',
                        controls: {
                            "checkAnswer": true,
                            "help": '\\rowgrp'
							+'{\\html{The purpose of the fraction we multiply by is to cancel out the word "$firstWordCancel" that we don\'t want as a part of the answer.  The fraction with "$secondWordCancel" in the numerator and "$firstWordCancel" in the denominator allows us to cancel out "$firstWordCancel".}}'
							+'{\\html{&nbsp;}}'
							+'{\\grp'
								+'{\\frac'
									+'{\\html{$initialAmount &nbsp; $unitsStart}}'
									+'{\\html{1 &nbsp; $unitsPer}}'
								+'}'
								+'{\\sign{&times;}}'
								+'{\\frac'
									+'{\\html{$firstNumAnswer &nbsp $unitsSecond}}'
									+'{\\html{$firstDenAnswer &nbsp; $unitsStart}}'
								+'}'
							+'}'
							+'}',
							"modalButton": "\\html{Equivalence Chart}",
							"modalText": '$modalChart'
							
                        }
                    }, {
                        problem: '\\rowgrp'
									+'{\\html{$problemText}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp'
										+'{\\html{$initialAmount &nbsp; $unitsStart / $unitsPer}}'
										+'{\\sign{&equals;}}'
										+'{\\html{? &nbsp; $unitsSecond / $unitsPer}}'
									+'}',
                        answer: '\\pan{12}{11}'
									+'{\\rowgrp'
										+'{\\html{Multiply the fractions (remember to cancel out words):}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\frac'
												+'{\\html{$initialAmount &nbsp; $unitsStart}}'
												+'{\\html{1 &nbsp; $unitsPer}}'
											+'}'
											+'{\\sign{&times;}}'
											+'{\\frac'
												+'{\\html{$firstNumAnswer &nbsp $unitsSecond}}'
												+'{\\html{$firstDenAnswer &nbsp; $unitsStart}}'
											+'}'
											+'{\\sign{&equals;}}'
											+'{\\input{$finalAnswer}}'
											+'{\\html{$unitsSecond / $unitsPer}}'
										+'}'
									+'}{well}',
                        controls: {
                            "checkAnswer": true,
                            "help": '\\rowgrp'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\frac{\\html{<span class=blue-text>$numeratorStart</span> <span class=line_through>$unitsStart</span>}}{\\html{<span class=blue-text>$denominatorStart</span><span class=blue-text> $unitsPer</span>}}}'
											+'{\\sign{&times;}}'
											+'{\\frac{\\html{<span class=blue-text>$numeratorSecond $unitsSecond</span>}}{\\html{<span class=blue-text>$denominatorSecond</span> <span class=line_through>$unitsStart</span>}}}'
											+'{\\sign{&equals;}}'
											+'{\\html{<span class=blue-text>$helpFinalAnswer $unitsSecond / $unitsPer</span>}}'
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
									+'{\\inputcash{$finalAnswer}}'
									+'{\\html{ $unitsAnswerPer}}',
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
										+'{\\html{Write the given value as a fraction.}}'
										+'{\\html{&nbsp;}}'
										+'{\\frac'
											+'{\\grp{\\html{$dollarSign}}{\\html{&nbsp;}}{\\input{$numeratorStart}}{\\html{&nbsp;}}}'
											+'{\\grp{\\input{$denominatorStart}}{\\html{&nbsp;}}{\\select{$unitsQuestionPer}{$perSelect}}}'
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
										+'{\\html{From the given options, choose the fraction (that equals 1 whole) to multiply by:}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\frac'
												+'{\\grp{\\html{$dollarSign}}{\\html{&nbsp;}}{\\html{$numeratorStart}}{\\html{&nbsp;}}}'
												+'{\\grp{\\html{$denominatorStart}}{\\html{&nbsp;}}{\\html{$unitsQuestionPer}}}'
											+'}'
											+'{\\sign{&times;}}'
											+'{\\frac'
												+'{\\select{$numEqFrac}{$numSelect}}'
												+'{\\select{$denEqFrac}{$denSelect}}'
											+'}'
										+'}'
									+'}{well}',
                        controls: {
                            "checkAnswer": true,
                            "help": '\\rowgrp'
										+'{\\html{The purpose of the fraction we multiply by is to cancel out the word "$firstWordCancel" that we don\'t want as a part of the answer.  The fraction with "$firstWordCancel" in the numerator and "$secondWordCancel" in the denominator allows us to cancel out "$firstWordCancel".}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\frac'
												+'{\\grp{\\html{$dollarSign}}{\\html{&nbsp;}}{\\html{$numeratorStart}}{\\html{&nbsp;}}}'
												+'{\\grp{\\html{$denominatorStart}}{\\html{&nbsp;}}{\\html{$unitsQuestionPer}}}'
											+'}'
											+'{\\sign{&times;}}'
											+'{\\frac'
												+'{\\grp'
													+'{\\html{$firstNumAnswer}}'
													+'{\\html{&nbsp;}}'
													+'{\\html{$unitsQuestionPer}}'
												+'}'
												+'{\\grp'
													+'{\\html{$firstDenAnswer}}{\\html{&nbsp;}}{\\html{$unitsAnswerPer}}'
												+'}'
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
										+'{\\html{What is the price per $thirdStepUnit?}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\frac'
												+'{\\grp{\\html{$dollarSign}}{\\html{&nbsp;}}{\\html{$numeratorStart}}{\\html{&nbsp;}}}'
												+'{\\grp{\\html{$denominatorStart}}{\\html{&nbsp;}}{\\html{$unitsQuestionPer}}}'
											+'}'
											+'{\\sign{&times;}}'
											+'{\\frac'
												+'{\\grp'
													+'{\\html{$firstNumAnswer}}'
													+'{\\html{&nbsp;}}'
													+'{\\html{$unitsQuestionPer}}'
												+'}'
												+'{\\grp'
													+'{\\html{$firstDenAnswer}}{\\html{&nbsp;}}{\\html{$unitsAnswerPer}}'
												+'}'
											+'}'
											+'{\\sign{&equals;}}'
											+'{\\css{\\html{$dollarSign}}{bigger}}'
											+'{\\inputcash{$helpFinalAnswer}}'
											+'{\\html{ $unitsAnswerPer}}'
										+'}'
									+'}{well}',
                        controls: {
                            "checkAnswer": true,
                            "help": '\\rowgrp'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\frac{\\html{<span class=blue-text>$dollarSign $numeratorStart</span>}}{\\html{<span class=blue-text>$denominatorStart</span><span class=line_through> $unitsQuestionPer</span>}}}'
											+'{\\sign{&times;}}'
											+'{\\frac{\\html{<span class=blue-text>$firstNumAnswer</span> <span class=line_through>$unitsQuestionPer</span>}}{\\html{<span class=blue-text>$denominatorSecond $unitsAnswerPer</span>}}}'
											+'{\\sign{&equals;}}'
											+'{\\html{<span class=blue-text>$dollarSign $helpFinalAnswer/ $unitsAnswerPer</span>}}'
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
												+'{\\grp{\\html{$dollarSign}}{\\html{&nbsp;}}{\\html{$numeratorStart}}{\\html{&nbsp;}}}'
												+'{\\grp{\\html{$denominatorStart}}{\\html{&nbsp;}}{\\html{$unitsQuestionPer}}}'
											+'}'
											+'{\\sign{&times;}}'
											+'{\\frac'
												+'{\\grp'
													+'{\\html{$firstNumAnswer}}'
													+'{\\html{&nbsp;}}'
													+'{\\html{$unitsQuestionPer}}'
												+'}'
												+'{\\grp'
													+'{\\html{$firstDenAnswer}}{\\html{&nbsp;}}{\\html{$unitsAnswerPer}}'
												+'}'
											+'}'
											+'{\\sign{&equals;}}'
											+'{\\css{\\html{$dollarSign}}{bigger}}'
											+'{\\html{$helpFinalAnswer}}'
											+'{\\html{/ $unitsAnswerPer}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\ins{How much would $problemAmount $thirdStepUnits cost?}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css{\\html{$dollarSign}}{bigger}}'
											+'{\\inputcash{$finalAnswer}}'
											+'{\\html{ $finalUnitsAnswerPer}}'
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
			twoStep: {
                title: 'Converting Units of Volume',
                children: [{
                    title: 'Main Answer',
                    children: [{
						problem: '\\rowgrp'
									+'{\\html{$problemText$descriptor}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp'
										+'{\\html{$initialAmount &nbsp; $unitsStart / $firstDenAnswer}}'
										+'{\\sign{&equals;}}'
										+'{\\html{? &nbsp; $unitsThird / $unitsPer}}'
									+'}',
                        answer: '\\grp'
									+'{\\input{$finalAnswer}}'
									+'{\\html{$unitsThird / $unitsPer}}',
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
									+'{\\html{$problemText$descriptor}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp'
										+'{\\html{$initialAmount &nbsp; $unitsStart / $firstDenAnswer}}'
										+'{\\sign{&equals;}}'
										+'{\\html{? &nbsp; $unitsThird / $unitsPer}}'
									+'}',
                        answer: '\\pan{12}{11}'
									+'{\\rowgrp'
										+'{\\html{Write the given value as a fraction.$descriptor}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\frac{\\grp{\\input{$numeratorStart}}{\\html{&nbsp;}}{\\select{$unitsStart}{$perSelectOne}}}{\\grp{\\input{$denominatorStart}}{\\html{&nbsp;}}{\\select{$firstDenAnswer}{$perSelectTwo}}}}'
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
									+'{\\html{$problemText$descriptor}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp'
										+'{\\html{$initialAmount &nbsp; $unitsStart / $firstDenAnswer}}'
										+'{\\sign{&equals;}}'
										+'{\\html{? &nbsp; $unitsThird / $unitsPer}}'
									+'}',
                        answer: '\\pan{12}{11}'
									+'{\\rowgrp'
										+'{\\html{There are two fractions that you will need to multiply by to solve this problem. What is the listed fraction that is one of the fractions that you need to multiply by?}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\frac'
												+'{\\grp'
													+'{\\html{$initialAmount}}{\\html{&nbsp;}}{\\html{$unitsStart}}'
												+'}'
												+'{\\grp'
													+'{\\html{$denominatorStart}}{\\html{&nbsp;}}{\\html{$firstDenAnswer}}'
												+'}'
											+'}'
											+'{\\sign{&times;}}'
											+'{\\frac'
												+'{\\select{$numEqFrac}{$numSelect}}'
												+'{\\select{$denEqFrac}{$denSelect}}'
											+'}'
										+'}'
									+'}{well}',
                        controls: {
                            "checkAnswer": true,
                            "help": '\\rowgrp'
							+'{\\html{The purpose of the fraction we multiply by is to cancel out the word "$firstWordCancel" that we don\'t want as a part of the answer.  The fraction with "$secondWordCancel" in the numerator and "$firstWordCancel" in the denominator allows us to cancel out "$firstWordCancel".}}'
							+'{\\html{&nbsp;}}'
							+'{\\grp'
								+'{\\frac'
									+'{\\html{$initialAmount &nbsp; $unitsStart}}'
									+'{\\html{$denominatorStart &nbsp; $firstDenAnswer}}'
								+'}'
								+'{\\sign{&times;}}'
								+'{\\css'
									+'{\\frac'
										+'{\\grp'
											+'{\\html{$numeratorSecond}}{\\html{&nbsp;}}{\\html{$unitsSecond}}'
										+'}'
										+'{\\grp'
											+'{\\html{$denominatorSecond}}{\\html{&nbsp;}}{\\html{$unitsStart}}'
										+'}'
									+'}'
								+'{blue-text}}'
							+'}',
							"modalButton": "\\html{Equivalence Chart}",
							"modalText": '$modalChart'
							
                        }
                    }, {
                        problem: '\\rowgrp'
									+'{\\html{$problemText$descriptor}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp'
										+'{\\html{$initialAmount &nbsp; $unitsStart / $firstDenAnswer}}'
										+'{\\sign{&times;}}'
										+'{\\frac'
											+'{\\grp'
												+'{\\html{$numeratorSecond}}{\\html{&nbsp;}}{\\html{$unitsSecond}}'
											+'}'
											+'{\\grp'
												+'{\\html{$denominatorSecond}}{\\html{&nbsp;}}{\\html{$unitsStart}}'
											+'}'
										+'}'
										+'{\\sign{&equals;}}'
										+'{\\html{? &nbsp; $unitsThird / $unitsPer}}'
									+'}',
                        answer: '\\pan{12}{11}'
									+'{\\rowgrp'
										+'{\\html{is the second fraction that you need to multiply by?}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\frac'
												+'{\\grp'
													+'{\\html{$initialAmount}}{\\html{&nbsp;}}{\\html{$unitsStart}}'
												+'}'
												+'{\\grp'
													+'{\\html{$denominatorStart}}{\\html{&nbsp;}}{\\html{$firstDenAnswer}}'
												+'}'
											+'}'
											+'{\\sign{&times;}}'
											+'{\\frac'
												+'{\\grp'
													+'{\\html{$numeratorSecond}}{\\html{&nbsp;}}{\\html{$unitsSecond}}'
												+'}'
												+'{\\grp'
													+'{\\html{$denominatorSecond}}{\\html{&nbsp;}}{\\html{$unitsStart}}'
												+'}'
											+'}'
											+'{\\sign{&times;}}'
											+'{\\frac'
												+'{\\select{$num2ndEqFrac}{$num2ndSelect}}'
												+'{\\select{$den2ndEqFrac}{$den2ndSelect}}'
											+'}'
										+'}'
									+'}{well}',
                        controls: {
                            "checkAnswer": true,
                            "help": '\\rowgrp'
										+'{\\html{The purpose of the fraction we multiply by is to cancel out the word "$thirdWordCancel" that we don\'t want as a part of the answer.  The fraction with "$thirdWordCancel" in the numerator and "$perWordCancel" in the denominator allows us to cancel out "$thirdWordCancel".}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\frac'
												+'{\\html{$initialAmount &nbsp; $unitsStart}}'
												+'{\\html{$denominatorStart &nbsp; $firstDenAnswer}}'
											+'}'
											+'{\\sign{&times;}}'
											+'{\\frac'
												+'{\\grp'
													+'{\\html{$numeratorSecond}}{\\html{&nbsp;}}{\\html{$unitsSecond}}'
												+'}'
												+'{\\grp'
													+'{\\html{$denominatorSecond}}{\\html{&nbsp;}}{\\html{$unitsStart}}'
												+'}'
											+'}'
											+'{\\sign{&times;}}'
											+'{\\css'
												+'{\\frac'
													+'{\\grp'
														+'{\\html{$numeratorThird}}{\\html{&nbsp;}}{\\html{$thirdNumAnswer}}'
													+'}'
													+'{\\grp'
														+'{\\html{$denominatorThird}}{\\html{&nbsp;}}{\\html{$thirdDenAnswer}}'
													+'}'
												+'}'
											+'{blue-text}}'
										+'}',
							"modalButton": "\\html{Equivalence Chart}",
							"modalText": '$modalChart'
							
                        }
                    }, {
                        problem: '\\rowgrp'
									+'{\\html{$problemText$descriptor}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp'
										+'{\\html{$initialAmount &nbsp; $unitsStart / $firstDenAnswer}}'
										+'{\\sign{&times;}}'
										+'{\\frac'
											+'{\\grp'
												+'{\\html{$numeratorSecond}}{\\html{&nbsp;}}{\\html{$unitsSecond}}'
											+'}'
											+'{\\grp'
												+'{\\html{$denominatorSecond}}{\\html{&nbsp;}}{\\html{$unitsStart}}'
											+'}'
										+'}'
										+'{\\sign{&times;}}'
										+'{\\frac'
											+'{\\grp'
												+'{\\html{$numeratorThird}}{\\html{&nbsp;}}{\\html{$thirdNumAnswer}}'
											+'}'
											+'{\\grp'
												+'{\\html{$denominatorThird}}{\\html{&nbsp;}}{\\html{$thirdDenAnswer}}'
											+'}'
										+'}'
										+'{\\sign{&equals;}}'
										+'{\\html{? &nbsp; $unitsSecond / $unitsPer}}'
									+'}',
                        answer: '\\pan{12}{11}'
									+'{\\rowgrp'
										+'{\\html{Multiply the fractions (remember to cancel out words).$descriptor}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\frac'
												+'{\\grp'
													+'{\\html{$initialAmount}}{\\html{&nbsp;}}{\\html{$unitsStart}}'
												+'}'
												+'{\\grp'
													+'{\\html{$denominatorStart}}{\\html{&nbsp;}}{\\html{$firstDenAnswer}}'
												+'}'
											+'}'
											+'{\\sign{&times;}}'
											+'{\\frac'
												+'{\\grp'
													+'{\\html{$numeratorSecond}}{\\html{&nbsp;}}{\\html{$unitsSecond}}'
												+'}'
												+'{\\grp'
													+'{\\html{$denominatorSecond}}{\\html{&nbsp;}}{\\html{$unitsStart}}'
												+'}'
											+'}'
											+'{\\sign{&times;}}'
											+'{\\frac'
												+'{\\grp'
													+'{\\html{$numeratorThird}}{\\html{&nbsp;}}{\\html{$thirdNumAnswer}}'
												+'}'
												+'{\\grp'
													+'{\\html{$denominatorThird}}{\\html{&nbsp;}}{\\html{$thirdDenAnswer}}'
												+'}'
											+'}'
											+'{\\sign{&equals;}}'
											+'{\\input{$finalAnswer}}'
											+'{\\html{$unitsSecond / $unitsPer}}'
										+'}'
									+'}{well}',
                        controls: {
                            "checkAnswer": true,
                            "help": '\\grp'
										+'{\\frac'
											+'{\\html{<span class=blue-text>$initialAmount</span> <span class=line_through>$unitsStart</span>}}'
											+'{\\html{<span class=blue-text>$denominatorStart</span> <span class=line_through>$firstDenAnswer</span>}}'
										+'}'
										+'{\\sign{&times;}}'
										+'{\\frac'
											+'{\\grp'
												+'{\\html{<span class=blue-text>$numeratorSecond $unitsSecond</span>}}'
											+'}'
											+'{\\grp'
												+'{\\html{<span class=blue-text>$denominatorSecond</span> <span class=line_through>$unitsStart</span>}}'
											+'}'
										+'}'
										+'{\\sign{&times;}}'
										+'{\\frac'
											+'{\\grp'
												+'{\\html{<span class=blue-text>$numeratorThird</span> <span class=line_through>$thirdNumAnswer</span>}}'
											+'}'
											+'{\\grp'
												+'{\\html{<span class=blue-text>$denominatorThird $thirdDenAnswer</span>}}'
											+'}'
										+'}'
										+'{\\sign{&equals;}}'
										+'{\\css'
											+'{\\grp'
												+'{\\html{$helpFinalAnswer}}'
												+'{\\html{$unitsSecond / $unitsPer}}'
											+'}'
										+'{blue-text}}',
							"modalButton": "\\html{Equivalence Chart}",
							"modalText": '$modalChart'
							
                        }
                    }]
                }]
            },
			threeStep: {
                title: 'Converting Units of Volume',
                children: [{
                    title: 'Main Answer',
                    children: [{
						problem: '\\rowgrp'
									+'{\\html{$problemText$descriptor}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp'
										+'{\\html{$initialAmount &nbsp; $unitsStart / $firstDenAnswer}}'
										+'{\\sign{&equals;}}'
										+'{\\html{? &nbsp; $unitsThird / $unitsPer}}'
									+'}',
                        answer: '\\grp'
									+'{\\input{$finalAnswer}}'
									+'{\\html{$unitsThird / $unitsPer}}',
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
									+'{\\html{$problemText$descriptor}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp'
										+'{\\html{$initialAmount &nbsp; $unitsStart / $firstDenAnswer}}'
										+'{\\sign{&equals;}}'
										+'{\\html{? &nbsp; $unitsThird / $unitsPer}}'
									+'}',
                        answer: '\\pan{12}{11}'
									+'{\\rowgrp'
										+'{\\html{Write the given value as a fraction.$descriptor}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\frac{\\grp{\\input{$numeratorStart}}{\\html{&nbsp;}}{\\select{$unitsStart}{$perSelectOne}}}{\\grp{\\input{$denominatorStart}}{\\html{&nbsp;}}{\\select{$firstDenAnswer}{$perSelectTwo}}}}'
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
									+'{\\html{$problemText$descriptor}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp'
										+'{\\html{$initialAmount &nbsp; $unitsStart / $firstDenAnswer}}'
										+'{\\sign{&equals;}}'
										+'{\\html{? &nbsp; $unitsThird / $unitsPer}}'
									+'}',
                        answer: '\\pan{12}{11}'
									+'{\\rowgrp'
										+'{\\html{There are three fractions that you will need to multiply by to solve this problem. What is the listed fraction that is one of the fractions that you need to multiply by?}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\frac'
												+'{\\grp'
													+'{\\html{$initialAmount}}{\\html{&nbsp;}}{\\html{$unitsStart}}'
												+'}'
												+'{\\grp'
													+'{\\html{$denominatorStart}}{\\html{&nbsp;}}{\\html{$firstDenAnswer}}'
												+'}'
											+'}'
											+'{\\sign{&times;}}'
											+'{\\frac'
												+'{\\select{$numEqFrac}{$numSelect}}'
												+'{\\select{$denEqFrac}{$denSelect}}'
											+'}'
										+'}'
									+'}{well}',
                        controls: {
                            "checkAnswer": true,
                            "help": '\\rowgrp'
							+'{\\html{The purpose of the fraction we multiply by is to cancel out the word "$firstWordCancel" that we don\'t want as a part of the answer.  The fraction with "$secondWordCancel" in the numerator and "$firstWordCancel" in the denominator allows us to cancel out "$firstWordCancel".}}'
							+'{\\html{&nbsp;}}'
							+'{\\grp'
								+'{\\frac'
									+'{\\html{$initialAmount &nbsp; $unitsStart}}'
									+'{\\html{$denominatorStart &nbsp; $firstDenAnswer}}'
								+'}'
								+'{\\sign{&times;}}'
								+'{\\css'
									+'{\\frac'
										+'{\\grp'
											+'{\\html{$numeratorSecond}}{\\html{&nbsp;}}{\\html{$unitsSecond}}'
										+'}'
										+'{\\grp'
											+'{\\html{$denominatorSecond}}{\\html{&nbsp;}}{\\html{$unitsStart}}'
										+'}'
									+'}'
								+'{blue-text}}'
							+'}',
							"modalButton": "\\html{Equivalence Chart}",
							"modalText": '$modalChart'
							
                        }
                    }, {
                        problem: '\\rowgrp'
									+'{\\html{$problemText$descriptor}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp'
										+'{\\html{$initialAmount &nbsp; $unitsStart / $firstDenAnswer}}'
										+'{\\sign{&times;}}'
										+'{\\frac'
											+'{\\grp'
												+'{\\html{$numeratorSecond}}{\\html{&nbsp;}}{\\html{$unitsSecond}}'
											+'}'
											+'{\\grp'
												+'{\\html{$denominatorSecond}}{\\html{&nbsp;}}{\\html{$unitsStart}}'
											+'}'
										+'}'
										+'{\\sign{&equals;}}'
										+'{\\html{? &nbsp; $unitsThird / $unitsPer}}'
									+'}',
                        answer: '\\pan{12}{11}'
									+'{\\rowgrp'
										+'{\\html{What is a second fraction that you need to multiply by?}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\frac'
												+'{\\grp'
													+'{\\html{$initialAmount}}{\\html{&nbsp;}}{\\html{$unitsStart}}'
												+'}'
												+'{\\grp'
													+'{\\html{$denominatorStart}}{\\html{&nbsp;}}{\\html{$firstDenAnswer}}'
												+'}'
											+'}'
											+'{\\sign{&times;}}'
											+'{\\frac'
												+'{\\grp'
													+'{\\html{$numeratorSecond}}{\\html{&nbsp;}}{\\html{$unitsSecond}}'
												+'}'
												+'{\\grp'
													+'{\\html{$denominatorSecond}}{\\html{&nbsp;}}{\\html{$unitsStart}}'
												+'}'
											+'}'
											+'{\\sign{&times;}}'
											+'{\\frac'
												+'{\\select{$num2ndEqFrac}{$num2ndSelect}}'
												+'{\\select{$den2ndEqFrac}{$den2ndSelect}}'
											+'}'
										+'}'
									+'}{well}',
                        controls: {
                            "checkAnswer": true,
                            "help": '\\rowgrp'
										+'{\\html{The purpose of the fraction we multiply by is to cancel out the word "$secondWordCancel" that we don\'t want as a part of the answer.  The fraction with "$thirdWordCancel" in the numerator and "$secondWordCancel" in the denominator allows us to cancel out "$secondWordCancel".}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\frac'
												+'{\\html{$initialAmount &nbsp; $unitsStart}}'
												+'{\\html{$denominatorStart &nbsp; $firstDenAnswer}}'
											+'}'
											+'{\\sign{&times;}}'
											+'{\\frac'
												+'{\\grp'
													+'{\\html{$numeratorSecond}}{\\html{&nbsp;}}{\\html{$unitsSecond}}'
												+'}'
												+'{\\grp'
													+'{\\html{$denominatorSecond}}{\\html{&nbsp;}}{\\html{$unitsStart}}'
												+'}'
											+'}'
											+'{\\sign{&times;}}'
											+'{\\css'
												+'{\\frac'
													+'{\\grp'
														+'{\\html{$numeratorThird}}{\\html{&nbsp;}}{\\html{$unitsThird}}'
													+'}'
													+'{\\grp'
														+'{\\html{$denominatorThird}}{\\html{&nbsp;}}{\\html{$unitsSecond}}'
													+'}'
												+'}'
											+'{blue-text}}'
										+'}',
							"modalButton": "\\html{Equivalence Chart}",
							"modalText": '$modalChart'
							
                        }
                    }, {
                        problem: '\\rowgrp'
									+'{\\html{$problemText$descriptor}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp'
										+'{\\html{$initialAmount &nbsp; $unitsStart / $firstDenAnswer}}'
										+'{\\sign{&times;}}'
										+'{\\frac'
											+'{\\grp'
												+'{\\html{$numeratorSecond}}{\\html{&nbsp;}}{\\html{$unitsSecond}}'
											+'}'
											+'{\\grp'
												+'{\\html{$denominatorSecond}}{\\html{&nbsp;}}{\\html{$unitsStart}}'
											+'}'
										+'}'
										+'{\\sign{&times;}}'
										+'{\\frac'
											+'{\\grp'
												+'{\\html{$numeratorThird}}{\\html{&nbsp;}}{\\html{$unitsThird}}'
											+'}'
											+'{\\grp'
												+'{\\html{$denominatorThird}}{\\html{&nbsp;}}{\\html{$unitsSecond}}'
											+'}'
										+'}'
										+'{\\sign{&equals;}}'
										+'{\\html{? &nbsp; $unitsThird / $unitsPer}}'
									+'}',
                        answer: '\\pan{12}{11}'
									+'{\\rowgrp'
										+'{\\html{What is a third fraction that you need to multiply by?}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\frac'
												+'{\\grp'
													+'{\\html{$initialAmount}}{\\html{&nbsp;}}{\\html{$unitsStart}}'
												+'}'
												+'{\\grp'
													+'{\\html{$denominatorStart}}{\\html{&nbsp;}}{\\html{$firstDenAnswer}}'
												+'}'
											+'}'
											+'{\\sign{&times;}}'
											+'{\\frac'
												+'{\\grp'
													+'{\\html{$numeratorSecond}}{\\html{&nbsp;}}{\\html{$unitsSecond}}'
												+'}'
												+'{\\grp'
													+'{\\html{$denominatorSecond}}{\\html{&nbsp;}}{\\html{$unitsStart}}'
												+'}'
											+'}'
											+'{\\sign{&times;}}'
											+'{\\frac'
												+'{\\grp'
													+'{\\html{$numeratorThird}}{\\html{&nbsp;}}{\\html{$unitsThird}}'
												+'}'
												+'{\\grp'
													+'{\\html{$denominatorThird}}{\\html{&nbsp;}}{\\html{$unitsSecond}}'
												+'}'
											+'}'
											+'{\\sign{&times;}}'
											+'{\\frac'
												+'{\\select{$num3rdEqFrac}{$num3rdSelect}}'
												+'{\\select{$den3rdEqFrac}{$den3rdSelect}}'
											+'}'
										+'}'
									+'}{well}',
                        controls: {
                            "checkAnswer": true,
                            "help": '\\rowgrp'
										+'{\\html{The purpose of the fraction we multiply by is to cancel out the word "$fourthWordCancel" that we don\'t want as a part of the answer.  The fraction with "$fourthWordCancel" in the numerator and "$perWordCancel" in the denominator allows us to cancel out "$fourthWordCancel".}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\frac'
												+'{\\html{$initialAmount &nbsp; $unitsStart}}'
												+'{\\html{$denominatorStart &nbsp; $firstDenAnswer}}'
											+'}'
											+'{\\sign{&times;}}'
											+'{\\frac'
												+'{\\grp'
													+'{\\html{$numeratorSecond}}{\\html{&nbsp;}}{\\html{$unitsSecond}}'
												+'}'
												+'{\\grp'
													+'{\\html{$denominatorSecond}}{\\html{&nbsp;}}{\\html{$unitsStart}}'
												+'}'
											+'}'
											+'{\\sign{&times;}}'
											+'{\\frac'
												+'{\\grp'
													+'{\\html{$numeratorThird}}{\\html{&nbsp;}}{\\html{$unitsThird}}'
												+'}'
												+'{\\grp'
													+'{\\html{$denominatorThird}}{\\html{&nbsp;}}{\\html{$unitsSecond}}'
												+'}'
											+'}'
											+'{\\sign{&times;}}'
											+'{\\css'
												+'{\\frac'
													+'{\\grp'
														+'{\\html{$numeratorFourth}}{\\html{&nbsp;}}{\\html{$firstDenAnswer}}'
													+'}'
													+'{\\grp'
														+'{\\html{$denominatorFourth}}{\\html{&nbsp;}}{\\html{$unitsPer}}'
													+'}'
												+'}'
											+'{blue-text}}'
										+'}',
							"modalButton": "\\html{Equivalence Chart}",
							"modalText": '$modalChart'
							
                        }
                    }, {
                        problem: '\\rowgrp'
									+'{\\html{$problemText$descriptor}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp'
										+'{\\html{$initialAmount &nbsp; $unitsStart / $firstDenAnswer}}'
										+'{\\sign{&times;}}'
										+'{\\frac'
											+'{\\grp'
												+'{\\html{$numeratorSecond}}{\\html{&nbsp;}}{\\html{$unitsSecond}}'
											+'}'
											+'{\\grp'
												+'{\\html{$denominatorSecond}}{\\html{&nbsp;}}{\\html{$unitsStart}}'
											+'}'
										+'}'
										+'{\\sign{&times;}}'
										+'{\\frac'
											+'{\\grp'
												+'{\\html{$numeratorThird}}{\\html{&nbsp;}}{\\html{$unitsThird}}'
											+'}'
											+'{\\grp'
												+'{\\html{$denominatorThird}}{\\html{&nbsp;}}{\\html{$unitsSecond}}'
											+'}'
										+'}'
										+'{\\sign{&times;}}'
										+'{\\frac'
											+'{\\grp'
												+'{\\html{$numeratorFourth}}{\\html{&nbsp;}}{\\html{$firstDenAnswer}}'
											+'}'
											+'{\\grp'
												+'{\\html{$denominatorFourth}}{\\html{&nbsp;}}{\\html{$unitsPer}}'
											+'}'
										+'}'
										+'{\\sign{&equals;}}'
										+'{\\html{? &nbsp; $unitsThird / $unitsPer}}'
									+'}',
                        answer: '\\pan{12}{11}'
									+'{\\rowgrp'
										+'{\\html{Multiply the fractions (remember to cancel out words):}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\frac'
												+'{\\grp'
													+'{\\html{$initialAmount}}{\\html{&nbsp;}}{\\html{$unitsStart}}'
												+'}'
												+'{\\grp'
													+'{\\html{$denominatorStart}}{\\html{&nbsp;}}{\\html{$firstDenAnswer}}'
												+'}'
											+'}'
											+'{\\sign{&times;}}'
											+'{\\frac'
												+'{\\grp'
													+'{\\html{$numeratorSecond}}{\\html{&nbsp;}}{\\html{$unitsSecond}}'
												+'}'
												+'{\\grp'
													+'{\\html{$denominatorSecond}}{\\html{&nbsp;}}{\\html{$unitsStart}}'
												+'}'
											+'}'
											+'{\\sign{&times;}}'
											+'{\\frac'
												+'{\\grp'
													+'{\\html{$numeratorThird}}{\\html{&nbsp;}}{\\html{$unitsThird}}'
												+'}'
												+'{\\grp'
													+'{\\html{$denominatorThird}}{\\html{&nbsp;}}{\\html{$unitsSecond}}'
												+'}'
											+'}'
											+'{\\sign{&times;}}'
											+'{\\frac'
												+'{\\grp'
													+'{\\html{$numeratorFourth}}{\\html{&nbsp;}}{\\html{$firstDenAnswer}}'
												+'}'
												+'{\\grp'
													+'{\\html{$denominatorFourth}}{\\html{&nbsp;}}{\\html{$unitsPer}}'
												+'}'
											+'}'
											+'{\\sign{&equals;}}'
											+'{\\input{$finalAnswer}}'
											+'{\\html{$unitsThird / $unitsPer}}'
										+'}'
									+'}{well}',
                        controls: {
                            "checkAnswer": true,
                            "help": '\\grp'
										+'{\\frac'
											+'{\\html{<span class=blue-text>$initialAmount</span> <span class=line_through>$unitsStart</span>}}'
											+'{\\html{<span class=blue-text>$denominatorStart</span> <span class=line_through>$firstDenAnswer</span>}}'
										+'}'
										+'{\\sign{&times;}}'
										+'{\\frac'
											+'{\\grp'
												+'{\\html{<span class=blue-text>$numeratorSecond</span> <span class=line_through>$unitsSecond</span>}}'
											+'}'
											+'{\\grp'
												+'{\\html{<span class=blue-text>$denominatorSecond</span> <span class=line_through>$unitsStart</span>}}'
											+'}'
										+'}'
										+'{\\sign{&times;}}'
										+'{\\frac'
											+'{\\grp'
												+'{\\html{<span class=blue-text>$numeratorThird $unitsThird</span>}}'
											+'}'
											+'{\\grp'
												+'{\\html{<span class=blue-text>$denominatorThird</span> <span class=line_through>$unitsSecond</span>}}'
											+'}'
										+'}'
										+'{\\sign{&times;}}'
										+'{\\frac'
											+'{\\grp'
												+'{\\html{<span class=blue-text>$numeratorFourth</span> <span class=line_through>$firstDenAnswer</span>}}'
											+'}'
											+'{\\grp'
												+'{\\html{<span class=blue-text>$denominatorFourth $unitsPer</span>}}'
											+'}'
										+'}'
										+'{\\sign{&equals;}}'
										+'{\\css'
											+'{\\grp'
												+'{\\html{$helpFinalAnswer}}'
												+'{\\html{$unitsThird / $unitsPer}}'
											+'}'
										+'{blue-text}}',
							"modalButton": "\\html{Equivalence Chart}",
							"modalText": '$modalChart'
							
                        }
                    }]
                }]
            }
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
				fractionAnswer: '',
				helpText: 'Every fraction is a division problem (the top value divided by the bottom value).<br><br>'
				+'Any value divided by itself equals 1 whole.<br><br>'
				+'In this case, $$initialNumAmount / $$initialDenAmount  = 1',
				modalChart: dataUtils.pre('\\html{<table class=conversion-table><th>kilo<br>(k)</th><th>hecto<br>(h)</th><th>deka<br>(da)</th><th>Basic<br>Units</th><th>deci<br>(h)</th><th>centi<br>(c)</th><th>milli<br>(m)</th></tr><tr><td style="rowspan=\'3\'">&nbsp;</td><td style="rowspan=\'3\'">&nbsp;</td style="rowspan=\'3\'"><td style="rowspan=\'3\'">&nbsp;</td><td style="rowspan=\'3\'">METER<br>LITER<br>GRAM</td><td style="rowspan=\'3\'">&nbsp;</td><td style="rowspan=\'3\'">&nbsp;</td><td style="rowspan=\'3\'">&nbsp;</td></tr></table>}'),
				template: 'simpleConversion' 
			},
				// problem 2
			{
				problemText: 'What is the value of this fraction:',
				answer: '1',
				initialNumAmount: '1',
				initialDenAmount: '1000',
				unitsStart: ' meter',
				unitsPer: ' millimeters',
				fractionAnswer: '',
				/*fractionAnswer: dataUtils.pre('{\\frac'
										+'{\\html{$$unitsStart}}'
										+'{\\html{$$unitsPer}}'
									+'}'
						),*/
				helpText: 'Every fraction is a division problem (the top value divided by the bottom value).<br><br>'
				+'Any value divided by itself equals 1 whole.<br><br>'
				+'In this case, 1 meter (the numerator) is exactly the same value as 1000 millimeters (the denominator). Therefore:<br><br>1 meter / 1000 millimeters  = 1',
				modalChart: dataUtils.pre('\\html{<table class=conversion-table><th>kilo<br>(k)</th><th>hecto<br>(h)</th><th>deka<br>(da)</th><th>Basic<br>Units</th><th>deci<br>(h)</th><th>centi<br>(c)</th><th>milli<br>(m)</th></tr><tr><td style="rowspan=\'3\'">&nbsp;</td><td style="rowspan=\'3\'">&nbsp;</td style="rowspan=\'3\'"><td style="rowspan=\'3\'">&nbsp;</td><td style="rowspan=\'3\'">METER<br>LITER<br>GRAM</td><td style="rowspan=\'3\'">&nbsp;</td><td style="rowspan=\'3\'">&nbsp;</td><td style="rowspan=\'3\'">&nbsp;</td></tr></table>}'),
				template: 'simpleConversion' 
			},
				// problem 3
			{
				problemText: 'What is the value of this fraction:',
				answer: '1',
				initialNumAmount: '0.01',
				initialDenAmount: '1',
				unitsStart: ' hectogram',
				unitsPer: ' gram',
				fractionAnswer: '',
				helpText: 'Every fraction is a division problem (the top value divided by the bottom value).<br><br>'
				+'Any value divided by itself equals 1 whole.<br><br>'
				+'In this case, 0.01 hectograms (the numerator) is exactly the same value as 1 gram (the denominator). Therefore:<br><br>0.01 hectograms / 1 gram  = 1',
				modalChart: dataUtils.pre('\\html{<table class=equivalence-table><th colspan="3">Equivalence Table</th><tr><td>12 in</td><td>=</td><td>1 ft</td></tr><tr><td>3 ft</td><td>=</td><td>1 yd</td></tr><tr><td>5,280 ft</td><td>=</td><td>1 mi</td></tr></table>}'),
				template: 'simpleConversion' 
			},
				// problem 4
			{
				problemText: 'What is the value of this fraction:',
				answer: '1',
				initialNumAmount: '1',
				initialDenAmount: '10',
				unitsStart: ' dL',
				unitsPer: ' cL',
				fractionAnswer: '',
				helpText: 'Every fraction is a division problem (the top value divided by the bottom value).<br><br>'
				+'Any value divided by itself equals 1 whole.<br><br>'
				+'In this case, 1 dL (the numerator) is exactly the same value as 10 cL (the denominator).  Therefore:<br><br>1 dL / 10 cL  = 1',
				modalChart: dataUtils.pre('\\html{<table class=equivalence-table><th colspan="3">Equivalence Table</th><tr><td>12 in</td><td>=</td><td>1 ft</td></tr><tr><td>3 ft</td><td>=</td><td>1 yd</td></tr><tr><td>5,280 ft</td><td>=</td><td>1 mi</td></tr></table>}'),
				template: 'simpleConversion' 
			},
				// problem 5
			{
				problemText: 'Solve:',
				answer: '4',
				initialNumAmount: '4 * 1',
				initialDenAmount: '0.001',
				unitsStart: ' m',
				unitsPer: ' km',
				fractionAnswer: '',
				helpText: 'Since 1 m is exactly the same as 0.001 km, we know that the fraction of 1 m/0.001 km is equal to 1 whole.<sup>3</sup>&#8260;<sub>5</sub><br>Therefore:<br><br>4 * 1 m / 0.001 km is the same as 4 * 1',
				modalChart: dataUtils.pre('\\html{<table class=equivalence-table><th colspan="3">Equivalence Table</th><tr><td>12 in</td><td>=</td><td>1 ft</td></tr><tr><td>3 ft</td><td>=</td><td>1 yd</td></tr><tr><td>5,280 ft</td><td>=</td><td>1 mi</td></tr></table>}'),
				template: 'simpleConversion' 
			},
				// problem 6
			{
				problemText: 'Solve:',
				answer: '4',
				initialNumAmount: '<sup>3</sup>&#8260;<sub>5</sub>',
				initialDenAmount: '1',
				unitsStart: ' * 100 cg',
				unitsPer: ' g',
				fractionAnswer: '',
				helpText: 'Since 100 cg is exactly the same as 1 g, we know that the fraction of 100 cg/1 g is equal to 1 whole.<br>Therefore:<br><br><sup>3</sup>&#8260;<sub>5</sub> * 100 cg/1 g is the same as <sup>3</sup>&#8260;<sub>5</sub> * 1',
				modalChart: dataUtils.pre('\\html{<table class=equivalence-table><th colspan="3">Equivalence Table</th><tr><td>12 in</td><td>=</td><td>1 ft</td></tr><tr><td>3 ft</td><td>=</td><td>1 yd</td></tr><tr><td>5,280 ft</td><td>=</td><td>1 mi</td></tr></table>}'),
				template: 'simpleConversion' 
			},
			{ // problem 13
				problemText: '1 centimeter of cloth costs $0.06.<br>How much would 3 meters of the cloth cost?',
				problemAmount: '3',
				descriptor: '',
				perSelect: '[\\"cm\\", \\"m\\", \\"\\"]',
				initialAmount: '0.06',
				numeratorStart: '0.06',
				denominatorStart: '1',
				numeratorSecond: '1',
				denominatorSecond: '1',
				dollarSign: '$',
				unitsQuestionPer: 'cm',
				unitsAnswerPer: 'm',
				firstNumAnswer: '100',
				firstDenAnswer: '1',
				thirdStepUnit: 'meter',
				finalAnswer: '18.00',
				finalUnitsAnswerPer: '',
				numEqFrac: '100 cm',
				numSelect: '[\\"100 cm\\", \\"1 cm\\", \\"1 m\\", \\"100 m\\"]',
				denEqFrac: '1 m',
				denSelect: '[\\"100 m\\", \\"1 m\\", \\"100 cm\\", \\"1 cm\\"]',
				helpFinalAnswer: '6.00',
				firstWordCancel: 'cm',
				secondWordCancel: 'm',
				modalChart: dataUtils.pre('\\html{<table class=conversion-table><th>kilo<br>(k)</th><th>hecto<br>(h)</th><th>deka<br>(da)</th><th>Basic<br>Units</th><th>deci<br>(h)</th><th>centi<br>(c)</th><th>milli<br>(m)</th></tr><tr><td style="rowspan=\'3\'">&nbsp;</td><td style="rowspan=\'3\'">&nbsp;</td style="rowspan=\'3\'"><td style="rowspan=\'3\'">&nbsp;</td><td style="rowspan=\'3\'">METER<br>LITER<br>GRAM</td><td style="rowspan=\'3\'">&nbsp;</td><td style="rowspan=\'3\'">&nbsp;</td><td style="rowspan=\'3\'">&nbsp;</td></tr></table>}'),
				template: 'dollarOneStep' 
			}
			,
			{ // problem 2
				problemText: 'Write the given rate in fractional form.',
				unitSelect: '[\\"1\\", \\"7\\", \\"24\\", \\"60\\"]',
				perSelect: '[\\"sec\\", \\"min\\", \\"hr\\", \\"day\\", \\"wk\\"]',
				initialAmount: '20',
				numeratorStart: '20',
				denominatorStart: '1',
				numeratorSecond: '1',
				denominatorSecond: '60',
				dollarSign: '$',
				unitsQuestionPer: 'hr',
				unitsAnswerPer: 'min',
				firstNumAnswer: '1',
				firstDenAnswer: '60',
				finalAnswer: '0.33',
				numEqFrac: '1 hr',
				numSelect: '[\\"1 hr\\", \\"$1\\", \\"1 min\\", \\"60 min\\"]',
				denEqFrac: '60 min',
				denSelect: '[\\"60 min\\", \\"1 min\\", \\"$20\\", \\"1 hr\\"]',
				helpFinalAnswer: '0.33',
				firstWordCancel: 'hours',
				secondWordCancel: 'minutes',
				descriptor: '<br>Round to the nearest cent.',
				modalChart: dataUtils.pre('\\html{<table class=equivalence-table><th colspan="3">Equivalence Table</th><tr><td>60 sec</td><td>=</td><td>1 min</td></tr><tr><td>60 min</td><td>=</td><td>1 hr</td></tr><tr><td>24 hr</td><td>=</td><td>1 day</td><tr><td>7 days</td><td>=</td><td>1 wk</td></tr></table>}'),
				template: 'dollarOneStep' 
			}
			,
			{ // problem 3
				problemText: 'Write the given rate in fractional form:',
				labelSelect: '[\\"oz\\", \\"lb\\", \\"ton\\"]',
				unitSelect: '[\\"1\\", \\"2\\", \\"3\\", \\"4\\", \\"8\\", \\"16\\", \\"2000\\"]',
				perSelect: '[\\"tsp\\", \\"tbsp\\", \\"fl oz\\", \\"c\\", \\"pt\\", \\"qt\\", \\"gal\\"]',
				initialAmount: '8',
				numeratorStart: '8',
				denominatorStart: '1',
				numeratorSecond: '1',
				denominatorSecond: '16',
				unitsStart: 'oz',
				unitsSecond: 'lb',
				unitsPer: 'c',
				firstNumAnswer: '1',
				firstDenAnswer: '16',
				numEqFrac: '1 1b',
				numSelect: '[\\"1 pt\\", \\"1 1b\\", \\"16 oz\\", \\"2 cups\\"]',
				denEqFrac: '60 min',
				denSelect: '[\\"2 cups\\", \\"16 oz\\", \\"1 lb\\", \\"1 pt\\"]',
				finalAnswer: '0.5',
				helpFinalAnswer: '0.5',
				firstWordCancel: 'ounces',
				secondWordCancel: 'pounds',
				descriptor: '',
				modalChart: dataUtils.pre('\\html{<table class=equivalence-table><th colspan="3">Equivalence Table</th><tr><td>16 oz</td><td>=</td><td>1 lb</td></tr><tr><td>2000 lbs</td><td>=</td><td>1 ton</td></tr></table>}'),
				template: 'oneStep' 
			}
			,
			{ // problem 4
				problemText: 'Write the given rate in fractional form:',
				labelSelect: '[\\"in\\", \\"ft\\", \\"yd\\", \\"mi\\"]',
				unitSelect: '[\\"1\\", \\"12\\", \\"3\\", \\"5,280\\"]',
				perSelect: '[\\"sec\\", \\"min\\", \\"hr\\", \\"day\\", \\"wk\\"]',
				initialAmount: '1320',
				numeratorStart: '1320',
				denominatorStart: '1',
				numeratorSecond: '1',
				denominatorSecond: '5,280',
				unitsStart: 'ft',
				unitsSecond: 'mi',
				unitsPer: 'hr',
				firstNumAnswer: '1',
				firstDenAnswer: '5,280',
				numEqFrac: '1 mi',
				numSelect: '[\\"5280 ft\\", \\"1 hr\\", \\"60 min\\", \\"1 mi\\"]',
				denEqFrac: '5280 ft',
				denSelect: '[\\"1 mi\\", \\"60 min\\", \\"1 hr\\", \\"5280 ft\\"]',
				finalAnswer: '0.25',
				helpFinalAnswer: '0.25',
				firstWordCancel: 'feet',
				secondWordCancel: 'miles',
				descriptor: '',
				modalChart: dataUtils.pre('\\html{<table class=equivalence-table><th colspan="3">Equivalence Table</th><tr><td>12 in</td><td>=</td><td>1 ft</td></tr><tr><td>3 ft</td><td>=</td><td>1 yd</td></tr><tr><td>5,280 ft</td><td>=</td><td>1 mi</td></tr></table>}'),
				template: 'oneStep' 
			},
			{ // problem 5
				problemText: 'Write the given rate in fractional form.',
				unitSelect: '[\\"1\\", \\"7\\", \\"24\\", \\"60\\"]',
				perSelect: '[\\"sec\\", \\"min\\", \\"hr\\", \\"day\\", \\"wk\\"]',
				initialAmount: '0.65',
				numeratorStart: '0.65',
				denominatorStart: '1',
				numeratorSecond: '60',
				denominatorSecond: '1',
				dollarSign: '$',
				unitsQuestionPer: 'min',
				unitsAnswerPer: 'hr',
				firstNumAnswer: '60',
				firstDenAnswer: '1',
				numEqFrac: '60 min',
				numSelect: '[\\"1 hr\\", \\"60 min\\", \\"1 min\\", \\"$65\\"]',
				denEqFrac: '1 hr',
				denSelect: '[\\"60 min\\", \\"1 hr\\", \\"$0.65\\", \\"1 day\\"]',
				finalAnswer: '39',
				helpFinalAnswer: '39',
				firstWordCancel: 'minutes',
				secondWordCancel: 'hours',
				descriptor: '',
				modalChart: dataUtils.pre('\\html{<table class=equivalence-table><th colspan="3">Equivalence Table</th><tr><td>60 sec</td><td>=</td><td>1 min</td></tr><tr><td>60 min</td><td>=</td><td>1 hr</td></tr><tr><td>24 hr</td><td>=</td><td>1 day</td><tr><td>7 days</td><td>=</td><td>1 wk</td></tr></table>}'),
				template: 'dollarOneStep' 
			},
			{ //problem 6
				problemText: 'Write the given rate in fractional form.',
				labelSelect: '[\\"tsp\\", \\"tbsp\\", \\"fl oz\\", \\"c\\", \\"pt\\", \\"qt\\", \\"gal\\"]',
				unitSelect: '[ \\"1\\", \\"2\\", \\"3\\", \\"4\\", \\"8\\", \\"16\\", \\"60\\"]',
				
				perSelectOne: '[\\"tsp\\", \\"tbsp\\", \\"fl oz\\", \\"c\\", \\"pt\\", \\"qt\\", \\"gal\\"]',
				perSelectTwo: '[\\"sec\\", \\"min\\", \\"hr\\", \\"day\\", \\"wk\\"]',
				initialAmount: '100',
				numeratorStart: '100',
				denominatorStart: '1',
				numeratorSecond: '4',
				denominatorSecond: '1',
				numeratorThird: '1',
				denominatorThird: '60',
				unitsStart: 'gal',
				unitsSecond: 'qt',
				unitsThird: 'qt',
				unitsPer: 'min',
				firstNumAnswer: 'gal',
				firstDenAnswer: 'hr',
				secondNumAnswer: 'qt',
				secondDenAnswer: 'gal',
				thirdNumAnswer: 'hr',
				thirdDenAnswer: 'min',
				firstWordCancel: 'gallons',
				secondWordCancel: 'quarts',
				thirdWordCancel: 'hours',
				perWordCancel: 'minutes',
				numEqFrac: '4 qt',
				numSelect: '[\\"1 gal\\", \\"24 hr\\", \\"4 qt\\", \\"1 day\\"]',
				denEqFrac: '1 gal',
				denSelect: '[\\"4 qt\\", \\"1 day\\", \\"1 gal\\", \\"24 hr\\"]',
				num2ndEqFrac: '1 hr',
				num2ndSelect: '[\\"60 min\\", \\"1 hr\\", \\"24 hr\\", \\"1 day\\"]',
				den2ndEqFrac: '60 min',
				den2ndSelect: '[\\"1 hr\\", \\"60 min\\", \\"1 day\\", \\"24 hr\\"]',
				finalAnswer: '6.7',
				helpFinalAnswer: '6.7',
				descriptor: '<br>Round the answer to the nearest tenth of a quart.',
				modalChart: dataUtils.pre('\\html{'
										  +'<table>'
										  	+'<th colspan="2">Equivalence Table</th>'
												+'<tr><td>&nbsp;</td><td>&nbsp;</td></tr>'
												+'<tr>'
													+'<td><table class=equivalence-table><tr style="border-bottom: 1px solid black;"><td>3 tsp</td><td>=</td><td>1 tbsp</td></tr><tr><td>2 tbsp</td><td>=</td><td>1 fl oz</td></tr><tr><td>8 fl oz</td><td>=</td><td>1 c</td></tr><tr><td>2 c</td><td>=</td><td>1 pt</td></tr><tr><td>2 pt</td><td>=</td><td>1 qt</td></tr><tr><td>4 qt</td><td>=</td><td>1 gal</td></tr></table></td>'
													+'<td><table class=equivalence-table><tr style="border-bottom: 1px solid black;"><td>60 sec</td><td>=</td><td>1 min</td></tr><tr><td>60 min</td><td>=</td><td>1 hr</td></tr><tr><td>24 hr</td><td>=</td><td>1 day</td><tr><td>7 days</td><td>=</td><td>1 wk</td></tr></table></td>'
												+'</tr>'
										+'</table>}'),
				template: 'twoStep' 
			},
			{ //problem 7
				problemText: 'Write the given rate in fractional form.',
				unitSelect: '[ \\"1\\", \\"2\\", \\"3\\", \\"4\\", \\"8\\", \\"16\\", \\"60\\"]',
				
				perSelectOne: '[\\"tsp\\", \\"tbsp\\", \\"fl oz\\", \\"c\\", \\"pt\\", \\"qt\\", \\"gal\\"]',
				perSelectTwo: '[\\"sec\\", \\"min\\", \\"hr\\", \\"day\\", \\"wk\\"]',
				initialAmount: '5',
				numeratorStart: '5',
				denominatorStart: '1',
				numeratorSecond: '1',
				denominatorSecond: '4',
				numeratorThird: '60',
				denominatorThird: '1',
				unitsStart: 'qt',
				unitsSecond: 'gal',
				unitsThird: 'gal',
				unitsPer: 'hr',
				firstNumAnswer: 'qt',
				firstDenAnswer: 'min',
				secondNumAnswer: 'gal',
				secondDenAnswer: 'qt',
				thirdNumAnswer: 'min',
				thirdDenAnswer: 'hr',
				firstWordCancel: 'quarts',
				secondWordCancel: 'gallons',
				thirdWordCancel: 'minutes',
				perWordCancel: 'hours',
				numEqFrac: '1 gal',
				numSelect: '[\\"1 gal\\", \\"1 min\\", \\"4 qt\\", \\"60 min\\"]',
				denEqFrac: '4 qt',
				denSelect: '[\\"4 qt\\", \\"1 qt\\", \\"1 gal\\", \\"1 hr\\"]',
				num2ndEqFrac: '60 min',
				num2ndSelect: '[\\"1 min\\", \\"4 qt\\", \\"1 hr\\", \\"60 min\\"]',
				den2ndEqFrac: '1 hr',
				den2ndSelect: '[\\"60 sec\\", \\"1 gal\\", \\"60 min\\", \\"1 hr\\"]',
				finalAnswer: '75',
				helpFinalAnswer: '75',
				descriptor: '',
				modalChart: dataUtils.pre('\\html{'
										  +'<table>'
										  	+'<th colspan="2">Equivalence Table</th>'
												+'<tr><td>&nbsp;</td><td>&nbsp;</td></tr>'
												+'<tr>'
													+'<td><table class=equivalence-table><tr style="border-bottom: 1px solid black;"><td>3 tsp</td><td>=</td><td>1 tbsp</td></tr><tr><td>2 tbsp</td><td>=</td><td>1 fl oz</td></tr><tr><td>8 fl oz</td><td>=</td><td>1 c</td></tr><tr><td>2 c</td><td>=</td><td>1 pt</td></tr><tr><td>2 pt</td><td>=</td><td>1 qt</td></tr><tr><td>4 qt</td><td>=</td><td>1 gal</td></tr></table></td>'
													+'<td><table class=equivalence-table><tr style="border-bottom: 1px solid black;"><td>60 sec</td><td>=</td><td>1 min</td></tr><tr><td>60 min</td><td>=</td><td>1 hr</td></tr><tr><td>24 hr</td><td>=</td><td>1 day</td><tr><td>7 days</td><td>=</td><td>1 wk</td></tr></table></td>'
												+'</tr>'
										+'</table>}'),
				template: 'twoStep' 
			},
			{ //problem 8
				problemText: 'Write the given rate in fractional form.',
				unitSelect: '[ \\"1\\", \\"2\\", \\"3\\", \\"7\\", \\"12\\", \\"24\\", \\"60\\", \\"5,280\\"]',
				
				perSelectOne: '[\\"in\\", \\"ft\\", \\"yd\\", \\"mi\\"]',
				perSelectTwo: '[\\"sec\\", \\"min\\", \\"hr\\", \\"day\\", \\"wk\\"]',
				initialAmount: '6',
				numeratorStart: '6',
				denominatorStart: '1',
				numeratorSecond: '1',
				denominatorSecond: '12',
				numeratorThird: '60',
				denominatorThird: '1',
				unitsStart: 'in',
				unitsSecond: 'ft',
				unitsThird: 'ft',
				unitsPer: 'min',
				firstNumAnswer: 'in',
				firstDenAnswer: 'sec',
				secondNumAnswer: 'ft',
				secondDenAnswer: 'in',
				thirdNumAnswer: 'sec',
				thirdDenAnswer: 'min',
				firstWordCancel: 'inches',
				secondWordCancel: 'feet',
				thirdWordCancel: 'seconds',
				perWordCancel: 'minutes',
				numEqFrac: '1 ft',
				numSelect: '[\\"60 sec\\", \\"1 min\\", \\"1 ft\\", \\"12 in\\"]',
				denEqFrac: '12 in',
				denSelect: '[\\"1 in\\", \\"60 sec\\", \\"12 in\\", \\"1 ft\\"]',
				num2ndEqFrac: '60 sec',
				num2ndSelect: '[\\"1 hr\\", \\"1 sec\\", \\"1 min\\", \\"60 sec\\"]',
				den2ndEqFrac: '1 min',
				den2ndSelect: '[\\"60 min\\", \\"6 in\\", \\"60 sec\\", \\"1 min\\"]',
				finalAnswer: '30',
				helpFinalAnswer: '30',
				descriptor: '',
				modalChart: dataUtils.pre('\\html{'
										  +'<table>'
										  	+'<th colspan="2">Equivalence Table</th>'
												+'<tr><td>&nbsp;</td><td>&nbsp;</td></tr>'
												+'<tr>'
													+'<td><table class=equivalence-table><tr style="border-bottom: 1px solid black;"><td>12 in</td><td>=</td><td>1 ft</td></tr><tr><td>3 ft</td><td>=</td><td>1 yd</td></tr><tr><td>5,280 ft</td><td>=</td><td>1 mi</td></tr></table></td>'
													+'<td><table class=equivalence-table><tr style="border-bottom: 1px solid black;"><td>60 sec</td><td>=</td><td>1 min</td></tr><tr><td>60 min</td><td>=</td><td>1 hr</td></tr><tr><td>24 hr</td><td>=</td><td>1 day</td><tr><td>7 days</td><td>=</td><td>1 wk</td></tr></table></td>'
												+'</tr>'
										+'</table>}'),
				template: 'twoStep' 
			},
			{ //problem 9
				problemText: 'Write the given rate in fractional form.',
				unitSelect: '[ \\"1\\", \\"2\\", \\"3\\", \\"4\\", \\"8\\"]',
				
				perSelectOne: '[\\"tsp\\", \\"tbsp\\", \\"fl oz\\", \\"c\\", \\"pt\\", \\"qt\\", \\"gal\\"]',
				perSelectTwo: '[\\"tsp\\", \\"tbsp\\", \\"fl oz\\", \\"c\\", \\"pt\\", \\"qt\\", \\"gal\\"]',
				initialAmount: '2',
				numeratorStart: '2',
				denominatorStart: '1',
				numeratorSecond: '3',
				denominatorSecond: '1',
				numeratorThird: '1',
				denominatorThird: '2',
				unitsStart: 'tbsp',
				unitsSecond: 'tsp',
				unitsThird: 'tsp',
				unitsPer: 'c',
				firstNumAnswer: 'tbsp',
				firstDenAnswer: 'pt',
				secondNumAnswer: 'tsp',
				secondDenAnswer: 'tbsp',
				thirdNumAnswer: 'pt',
				thirdDenAnswer: 'c',
				firstWordCancel: 'tablespoons',
				secondWordCancel: 'teaspoons',
				thirdWordCancel: 'pints',
				perWordCancel: 'cups',
				numEqFrac: '3 tsp',
				numSelect: '[\\"3 tsp\\", \\"1 tbsp\\", \\"8 fl oz\\", \\"1 cup\\"]',
				denEqFrac: '1 tbsp',
				denSelect: '[\\"1 tbsp\\", \\"3 tsp\\", \\"1 cup\\", \\"8 fl oz\\"]',
				num2ndEqFrac: '1 pt',
				num2ndSelect: '[\\"1 cup\\", \\"8 fl oz\\", \\"1 pt\\", \\"2 cups\\"]',
				den2ndEqFrac: '2 cups',
				den2ndSelect: '[\\"8 fl oz\\", \\"1 cup\\", \\"2 cups\\", \\"1 pt\\"]',
				finalAnswer: '3',
				helpFinalAnswer: '3',
				descriptor: '',
				modalChart: dataUtils.pre('\\html{<table class=equivalence-table><th colspan="3">Equivalence Table</th><tr><td>3 tsp</td><td>=</td><td>1 tbsp</td></tr><tr><td>2 tbsp</td><td>=</td><td>1 fl oz</td></tr><tr><td>8 fl oz</td><td>=</td><td>1 c</td></tr><tr><td>2 c</td><td>=</td><td>1 pt</td></tr><tr><td>2 pt</td><td>=</td><td>1 qt</td></tr><tr><td>4 qt</td><td>=</td><td>1 gal</td></tr></table>}'),
				template: 'twoStep' 
			}
			,
            { //problem 10
				problemText: 'Write the given rate in fractional form:',
				unitSelect: '[ \\"1\\", \\"2\\", \\"3\\", \\"4\\", \\"8\\", \\"16\\"]',
				
				perSelectOne: '[\\"tsp\\", \\"tbsp\\", \\"fl oz\\", \\"c\\", \\"pt\\", \\"qt\\", \\"gal\\"]',
				perSelectTwo: '[\\"oz\\", \\"lb\\", \\"ton\\"]',
				initialAmount: '2',
				numeratorStart: '2',
				denominatorStart: '1',
				numeratorSecond: '4',
				denominatorSecond: '1',
				numeratorThird: '2',
				denominatorThird: '1',
				numeratorFourth: '1',
				denominatorFourth: '16',
				unitsStart: 'gal',
				unitsSecond: 'qt',
				unitsThird: 'pt',
				unitsFourth: 'lb',
				unitsPer: 'oz',
				firstNumAnswer: 'gal',
				firstDenAnswer: 'lb',
				secondNumAnswer: 'qt',
				secondDenAnswer: 'gal',
				thirdNumAnswer: 'pt',
				thirdDenAnswer: 'qt',
				fourthNumAnswer: 'lb',
				fourthDenAnswer: 'oz',
				helpFinalAnswer: 'oz',
				firstWordCancel: 'gallons',
				secondWordCancel: 'quarts',
				thirdWordCancel: 'pints',
				fourthWordCancel: 'pounds',
				perWordCancel: 'ounces',
				numEqFrac: '4 qt',
				numSelect: '[\\"1 gal\\", \\"4 qt\\", \\"1 qt\\", \\"16 oz\\"]',
				denEqFrac: '1 gal',
				denSelect: '[\\"4 qt\\", \\"1 gal\\", \\"16 oz\\", \\"1 lb\\"]',
				num2ndEqFrac: '2 pt',
				num2ndSelect: '[\\"1 lb\\", \\"4 qt\\", \\"1 qt\\", \\"2 pt\\"]',
				den2ndEqFrac: '1 qt',
				den2ndSelect: '[\\"4 qt\\", \\"16 oz\\", \\"2 pt\\", \\"1 qt\\"]',
				num3rdEqFrac: '1 lb',
				num3rdSelect: '[\\"1 lb\\", \\"16 oz\\", \\"4 qt\\", \\"1 pt\\"]',
				den3rdEqFrac: '16 oz',
				den3rdSelect: '[\\"16 oz\\", \\"1 lb\\", \\"1 gal\\", \\"2 cups\\"]',
				finalAnswer: '1',
				helpFinalAnswer: '1',
				descriptor: '',
				modalChart: dataUtils.pre('\\html{'
										  +'<table>'
										  	+'<th colspan="2">Equivalence Table</th>'
												+'<tr><td>&nbsp;</td><td>&nbsp;</td></tr>'
												+'<tr>'
													+'<td><table class=equivalence-table><tr style="border-bottom: 1px solid black;"><td>3 tsp</td><td>=</td><td>1 tbsp</td></tr><tr><td>2 tbsp</td><td>=</td><td>1 fl oz</td></tr><tr><td>8 fl oz</td><td>=</td><td>1 c</td></tr><tr><td>2 c</td><td>=</td><td>1 pt</td></tr><tr><td>2 pt</td><td>=</td><td>1 qt</td></tr><tr><td>4 qt</td><td>=</td><td>1 gal</td></tr></table></td>'
													+'<td><table class=equivalence-table><tr style="border-bottom: 1px solid black;"><td>16 oz</td><td>=</td><td>1 lb</td></tr><tr><td>2000 lbs</td><td>=</td><td>1 ton</td></tr></table></td>'
												+'</tr>'
										+'</table>}'),
				template: 'threeStep' 
			}
        ];

    return dataUtils.build(desc, template, data);
}]);
