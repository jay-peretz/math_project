/*global angular */

angular.module('mathSkills').service('data23_2', ['dataUtils', function (dataUtils) {
    var desc = {
			title: '23.2 Converting Compound Units of Volume',
            path: '23.2-converting-compound-units-of-volume',
            children: []
        },
        template = {
            oneStep: {
                title: 'Converting Units of Volume',
                children: [{
                    title: 'Main Answer',
                    children: [{
						problem: '\\rowgrp'
									+'{\\html{$problemText}}'
									+'{\\html{&nbsp;}}'
									+'{\\grp'
										+'{\\html{$initialAmount &nbsp; $unitsStart / $unitsPer}}'
										+'{\\sign{&equals;}}'
										+'{\\html{? &nbsp; $unitsSecond / $unitsPer}}'
									+'}',
                        answer: '\\grp'
									+'{\\input{$finalAnswer}}'
									+'{\\html{$unitsSecond / $unitsPer}}',
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
											+'{\\frac{\\grp{\\input{$numeratorStart}}{\\html{&nbsp;}}{\\select{$labelAnswer}{$labelSelect}}}{\\grp{\\input{$denominatorStart}}{\\select{$unitsPer}{$perSelect}}}}'
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
												+'{\\grp'
													+'{\\select{$firstNumAnswer}{$unitSelect}}'
													+'{\\html{&nbsp;}}'
													+'{\\select{$secondLabelAnswer}{$labelSelect}}'
												+'}'
												+'{\\grp'
													+'{\\select{$firstDenAnswer}{$unitSelect}}{\\html{&nbsp;}}{\\select{$labelAnswer}{$labelSelect}}'
												+'}'
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
									+'{\\html{$firstNumAnswer &nbsp $secondLabelAnswer}}'
									+'{\\html{$firstDenAnswer &nbsp; $labelAnswer}}'
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
												+'{\\html{$firstNumAnswer &nbsp $secondLabelAnswer}}'
												+'{\\html{$firstDenAnswer &nbsp; $labelAnswer}}'
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
			threeStep: {
                title: 'Converting Units of Volume',
                children: [{
                    title: 'Main Answer',
                    children: [{
						problem: '\\rowgrp'
									+'{\\html{$problemText}}'
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
									+'{\\html{$problemText}}'
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
											+'{\\frac{\\grp{\\input{$numeratorStart}}{\\html{&nbsp;}}{\\select{$labelAnswer}{$labelSelect}}}{\\grp{\\input{$denominatorStart}}{\\select{$firstDenAnswer}{$perSelectTwo}}}}'
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
										+'{\\html{$initialAmount &nbsp; $unitsStart / $firstDenAnswer}}'
										+'{\\sign{&equals;}}'
										+'{\\html{? &nbsp; $unitsThird / $unitsPer}}'
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
													+'{\\html{$denominatorStart}}{\\html{&nbsp;}}{\\html{$firstDenAnswer}}'
												+'}'
											+'}'
											+'{\\sign{&times;}}'
											+'{\\frac'
												+'{\\grp'
													+'{\\select{$numeratorSecond}{$unitSelect}}'
													+'{\\html{&nbsp;}}'
													+'{\\select{$unitsSecond}{$perSelectOne}}'
												+'}'
												+'{\\grp'
													+'{\\select{$denominatorSecond}{$unitSelect}}{\\html{&nbsp;}}{\\select{$unitsStart}{$perSelectOne}}'
												+'}'
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
									+'{\\html{$problemText}}'
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
										+'{\\html{What is the next fraction (that equals 1 whole) that you need to multiply by?}}'
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
													+'{\\select{$numeratorThird}{$unitSelect}}'
													+'{\\html{&nbsp;}}'
													+'{\\select{$unitsThird}{$perSelectOne}}'
												+'}'
												+'{\\grp'
													+'{\\select{$denominatorThird}{$unitSelect}}{\\html{&nbsp;}}{\\select{$unitsSecond}{$perSelectOne}}'
												+'}'
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
									+'{\\html{$problemText}}'
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
										+'{\\html{What is the next fraction (that equals 1 whole) that you need to multiply by?}}'
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
													+'{\\select{$numeratorFourth}{$unitSelect}}'
													+'{\\html{&nbsp;}}'
													+'{\\select{$unitsFourth}{$perSelectTwo}}'
												+'}'
												+'{\\grp'
													+'{\\select{$denominatorFourth}{$unitSelect}}{\\html{&nbsp;}}{\\select{$unitsPer}{$perSelectTwo}}'
												+'}'
											+'}'
										+'}'
									+'}{well}',
                        controls: {
                            "checkAnswer": true,
                            "help": '\\rowgrp'
										+'{\\html{The purpose of the fraction we multiply by is to cancel out the word "$firstDenAnswer" that we don\'t want as a part of the answer.  The fraction with "$firstDenAnswer" in the numerator and "$unitsPer" in the denominator allows us to cancel out "$firstDenAnswer".}}'
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
									+'{\\html{$problemText}}'
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
                            "help": '\\rowgrp'
										+'{\\html{The purpose of the fraction we multiply by is to cancel out the word "$firstDenAnswer" that we don\'t want as a part of the answer.  The fraction with "$firstDenAnswer" in the numerator and "$unitsPer" in the denominator allows us to cancel out "$firstDenAnswer".}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
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
													+'{\\html{<span class=blue-text>$numeratorThird</span> <span class=line_through>$unitsThird</span>}}'
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
													+'{\\html{$finalAnswer}}'
													+'{\\html{$unitsThird / $unitsPer}}'
												+'}'
											+'{blue-text}}'
										+'}',
							"modalButton": "\\html{Equivalence Chart}",
							"modalText": '$modalChart'
							
                        }
                    }]
                }]
            }
        },
        data = [
			{ // problem 1
				problemText: 'Write the given rate in fractional form:',
				labelSelect: '[\\"in\\", \\"ft\\", \\"yd\\", \\"mi\\"]',
				labelAnswer: 'mi',
				secondLabelAnswer: 'ft',
				unitSelect: '[\\"12\\", \\"3\\", \\"5,280\\",  \\"1\\"]',
				perSelect: '[\\"sec\\", \\"min\\", \\"hr\\", \\"day\\", \\"wk\\"]',
				initialAmount: '40',
				numeratorStart: '40',
				denominatorStart: '1',
				numeratorSecond: '5,280',
				denominatorSecond: '1',
				unitsStart: 'mi',
				unitsSecond: 'ft',
				unitsPer: 'hr',
				firstNumAnswer: '5,280',
				firstDenAnswer: '1',
				finalAnswer: '211200',
				helpFinalAnswer: '211,200',
				firstWordCancel: 'miles',
				secondWordCancel: 'feet',
				descriptor: '',
				modalChart: dataUtils.pre('\\html{<table class=equivalence-table><th colspan="3">Equivalence Table</th><tr><td>12 in</td><td>=</td><td>1 ft</td></tr><tr><td>3 ft</td><td>=</td><td>1 yd</td></tr><tr><td>5,280 ft</td><td>=</td><td>1 mi</td></tr></table>}'),
				template: 'oneStep' 
			}
			,
            { //problem 10
				problemText: 'Write the given rate in fractional form:',
				labelSelect: '[\\"tsp\\", \\"tbsp\\", \\"fl oz\\", \\"c\\", \\"pt\\", \\"qt\\", \\"gal\\"]',
				labelAnswer: 'gal',
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
				finalAnswer: '1',
				modalChart: dataUtils.pre('\\html{<table class=equivalence-table><th colspan="3">Equivalence Table</th><tr><td>3 tsp</td><td>=</td><td>1 tbsp</td></tr><tr><td>2 tbsp</td><td>=</td><td>1 fl oz</td></tr><tr><td>8 fl oz</td><td>=</td><td>1 c</td></tr><tr><td>2 c</td><td>=</td><td>1 pt</td></tr><tr><td>2 pt</td><td>=</td><td>1 qt</td></tr><tr><td>4 qt</td><td>=</td><td>1 gal</td></tr></table>}'),
				template: 'threeStep' 
			}
        ];

    return dataUtils.build(desc, template, data);
}]);
