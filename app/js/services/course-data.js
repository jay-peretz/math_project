'use strict';
/*global angular */

angular.module('mathSkills.services')
    .service('courseData', [
        function () {
            var course = {
                title: 'GENERAL ARITHMETIC',
                children: [
                    {
						title: '1 Whole Numbers',
                        path: 'whole-numbers',
                        children: [
                            {
                                title: '1.1 Place Value Number System of Whole Numbers',
                                path: '1.1-place-value-number-system-of-whole-numbers',
                                children: [
                                    {
                                        title: 'Whole Number Place Value',
                                        children: [{
                                            title: 'Main Answer',
                                            children: [{
                                                problem: '\\rowgrp{\\row{\\str{Identify the place value of the indicated digit: }}}{\\row{\\placevalue{44816}{3}}}',
                                                answer: '\\select{Thousands}{["Ones", "Tens", "Hundreds", "Thousands", "Ten Thousands", "Hundred Thousands", "Millions", "Ten Millions", "Hundred Millions", "Billions", "Ten Billions", "Hundred Billions"]}',
                                                controls: {
                                                    "checkAnswer": true,
                                                    "help": '\\rowgrp{\\row{\\showplace{"Thousands"}{44816}}}{\\row{\\str{\xA0}}}{\\row{css{\\str{answer:  Thousands}}{label_like margin-left-small}}}}'
                                                }
                                            }]
                                        }]
                                    },
                                    {
                                        title: 'Whole Number Place Value',
                                        children: [{
                                            title: 'Main Answer',
                                            children: [{
                                                problem: '\\rowgrp{\\row{\\str{Identify the place value of the indicated digit: }}}{\\row{\\placevalue{38059}{2}}',
                                                answer: '\\select{Hundreds}{["Ones", "Tens", "Hundreds", "Thousands", "Ten Thousands", "Hundred Thousands", "Millions", "Ten Millions", "Hundred Millions", "Billions", "Ten Billions", "Hundred Billions"]}',
                                                controls: {
                                                    "checkAnswer": true,
                                                     "help": '\\rowgrp{\\row{\\showplace{"Hundreds"}{38059}}}{\\row{\\str{\xA0}}}{\\row{css{\\str{answer:  Hundreds}}{label_like margin-left-small}}}}'
                                                }
                                            }]
                                        }]
                                    },
                                    {
                                        title: 'Whole Number Place Value',
                                        children: [{
                                            title: 'Main Answer',
                                            children: [{
                                                problem: '\\rowgrp{\\row{\\str{Identify the place value of the indicated digit: }}}{\\row{\\placevalue{3888708}{6}}',
                                                answer: '\\select{Millions}{["Ones", "Tens", "Hundreds", "Thousands", "Ten Thousands", "Hundred Thousands", "Millions", "Ten Millions", "Hundred Millions", "Billions", "Ten Billions", "Hundred Billions"]}',
                                                controls: {
                                                    "checkAnswer": true,
                                                     "help": '\\rowgrp{\\row{\\showplace{"Millions"}{3888708}}}{\\row{\\str{\xA0}}}{\\row{css{\\str{answer:  Millions}}{label_like margin-left-small}}}}'
                                                }
                                            }]
                                        }]
                                    },
                                    {
                                        title: 'Whole Number Place Value',
                                        children: [{
                                            title: 'Main Answer',
                                            children: [{
                                                problem: '\\rowgrp{\\row{\\str{Identify the place value of the indicated digit: }}}{\\row{\\placevalue{7016486}{1}}',
                                                answer: '\\select{Tens}{["Ones", "Tens", "Hundreds", "Thousands", "Ten Thousands", "Hundred Thousands", "Millions", "Ten Millions", "Hundred Millions", "Billions", "Ten Billions", "Hundred Billions"]}',
                                                controls: {
                                                    "checkAnswer": true,
                                                     "help": '\\rowgrp{\\row{\\showplace{"Tens"}{7016486}}}{\\row{\\str{\xA0}}}{\\row{css{\\str{answer:  Tens}}{label_like margin-left-small}}}}'
                                                }
                                            }]
                                        }]
                                    },
                                    {
                                        title: 'Whole Number Place Value',
                                        children: [{
                                            title: 'Main Answer',
                                            children: [{
                                                problem: '\\rowgrp{\\row{\\str{Identify the place value of the indicated digit: }}}{\\row{\\placevalue{4927857}{5}}',
                                                answer: '\\select{Hundred Thousands}{["Ones", "Tens", "Hundreds", "Thousands", "Ten Thousands", "Hundred Thousands", "Millions", "Ten Millions", "Hundred Millions", "Billions", "Ten Billions", "Hundred Billions"]}',
                                                controls: {
                                                    "checkAnswer": true,
                                                     "help": '\\rowgrp{\\row{\\showplace{"Hundred Thousands"}{4927857}}}{\\row{\\str{\xA0}}}{\\row{css{\\str{answer:  Hundred Thousands}}{label_like margin-left-small}}}}'
                                                }
                                            }]
                                        }]
                                    },
                                    {
                                        title: 'Whole Number Place Value',
                                        children: [{
                                            title: 'Main Answer',
                                            children: [{
                                                problem: '\\rowgrp{\\row{\\str{Identify the place value of the indicated digit: }}}{\\row{\\placevalue{9049152}{5}}',
                                                answer: '\\select{Hundred Thousands}{["Ones", "Tens", "Hundreds", "Thousands", "Ten Thousands", "Hundred Thousands", "Millions", "Ten Millions", "Hundred Millions", "Billions", "Ten Billions", "Hundred Billions"]}',
                                                controls: {
                                                    "checkAnswer": true,
                                                     "help": '\\rowgrp{\\row{\\showplace{"Hundred Thousands"}{9049152}}}{\\row{\\str{\xA0}}}{\\row{css{\\str{answer:  Hundred Thousands}}{label_like margin-left-small}}}}'
                                                }
                                            }]
                                        }]
                                    },
                                    {
                                        title: 'Whole Number Place Value',
                                        children: [{
                                            title: 'Main Answer',
                                            children: [{
                                                problem: '\\rowgrp{\\row{\\str{Identify the place value of the indicated digit: }}}{\\row{\\placevalue{4555517}{3}}',
                                                answer: '\\select{Thousands}{["Ones", "Tens", "Hundreds", "Thousands", "Ten Thousands", "Hundred Thousands", "Millions", "Ten Millions", "Hundred Millions", "Billions", "Ten Billions", "Hundred Billions"]}',
                                                controls: {
                                                    "checkAnswer": true,
                                                     "help": '\\rowgrp{\\row{\\showplace{"Thousands"}{4555517}}}{\\row{\\str{\xA0}}}{\\row{css{\\str{answer:  Thousands}}{label_like margin-left-small}}}}'
                                                }
                                            }]
                                        }]
                                    },
                                    {
                                        title: 'Whole Number Place Value',
                                        children: [{
                                            title: 'Main Answer',
                                            children: [{
                                                problem: '\\rowgrp{\\row{\\str{Identify the place value of the indicated digit: }}}{\\row{\\placevalue{5174344}{0}}',
                                                answer: '\\select{Ones}{["Ones", "Tens", "Hundreds", "Thousands", "Ten Thousands", "Hundred Thousands", "Millions", "Ten Millions", "Hundred Millions", "Billions", "Ten Billions", "Hundred Billions"]}',
                                                controls: {
                                                    "checkAnswer": true,
                                                     "help": '\\rowgrp{\\row{\\showplace{"Ones"}{5174344}}}{\\row{\\str{\xA0}}}{\\row{css{\\str{answer:  Ones}}{label_like margin-left-small}}}}'
                                                }
                                            }]
                                        }]
                                    },
                                    {
                                        title: 'Whole Number Place Value',
                                        children: [{
                                            title: 'Main Answer',
                                            children: [{
                                                problem: '\\rowgrp{\\row{\\str{Identify the place value of the indicated digit: }}}{\\row{\\placevalue{1924837}{6}}',
                                                answer: '\\select{Millions}{["Ones", "Tens", "Hundreds", "Thousands", "Ten Thousands", "Hundred Thousands", "Millions", "Ten Millions", "Hundred Millions", "Billions", "Ten Billions", "Hundred Billions"]}',
                                                controls: {
                                                    "checkAnswer": true,
                                                     "help": '\\rowgrp{\\row{\\showplace{"Millions"}{1924837}}}{\\row{\\str{\xA0}}}{\\row{css{\\str{answer:  Millions}}{label_like margin-left-small}}}}'
                                                }
                                            }]
                                        }]
                                    },
                                    {
                                        title: 'Whole Number Place Value',
                                        children: [{
                                            title: 'Main Answer',
                                            children: [{
                                                problem: '\\rowgrp{\\row{\\str{Identify the place value of the indicated digit: }}}{\\row{\\placevalue{295082}{2}}',
                                                answer: '\\select{Hundreds}{["Ones", "Tens", "Hundreds", "Thousands", "Ten Thousands", "Hundred Thousands", "Millions", "Ten Millions", "Hundred Millions", "Billions", "Ten Billions", "Hundred Billions"]}',
                                                controls: {
                                                    "checkAnswer": true,
                                                      "help": '\\rowgrp{\\row{\\showplace{"Hundreds"}{295082}}}{\\row{\\str{\xA0}}}{\\row{css{\\str{answer:  Hundreds}}{label_like margin-left-small}}}}'
                                                }
                                            }]
                                        }]
                                    },
                                ]
                            },
                            {
                                title: '1.2 Standard Notation of Whole Numbers',
                                path: '1.2-standard-notation-of-whole-numbers',
                                children: [
                                    {
                                        title: 'Words to Number',
                                        children: [{
                                            title: 'Main Answer',
                                            children: [{
                                                problem: '\\str{Write fifty-eight in number notation}',
                                                answer: '\\input{58}',
                                                controls: {
                                                    "checkAnswer": true,
                                                    "help": '\\str{Fifty-eight in number notation is 58}'
                                                }
                                            }]
                                        }]
                                    },
                                    {
                                        title: 'Words to Number',
                                        children: [{
                                            title: 'Main Answer',
                                            children: [{
                                                problem: '\\str{Write one hundred seventy-four in number notation}',
                                                answer: '\\input{174}',
                                                controls: {
                                                    "checkAnswer": true,
                                                    "help": '\\str{One hundred seventy-four in number notation is 174}'
                                                }
                                            }]
                                        }]
                                    },
                                    {
                                        title: 'Words to Number',
                                        children: [{
                                            title: 'Main Answer',
                                            children: [{
                                                problem: '\\str{Write three hundred thirty-six in number notation}',
                                                answer: '\\input{336}',
                                                controls: {
                                                    "checkAnswer": true,
                                                    "help": '\\str{Three hundred thirty-six in number notation is 336}'
                                                }
                                            }]
                                        }]
                                    },
                                    {
                                        title: 'Words to Number',
                                        children: [{
                                            title: 'Main Answer',
                                            children: [{
                                                problem: '\\str{Write three thousand, three hundred eighty-six in number notation}',
                                                answer: '\\input{3386}',
                                                controls: {
                                                    "checkAnswer": true,
                                                    "help": '\\str{3,386}'
                                                }
                                            }]
                                        }]
                                    },
                                    {
                                        title: 'Words to Number',
                                        children: [{
                                            title: 'Main Answer',
                                            children: [{
                                                problem: '\\str{Write fifty thousand, nine hundred fifty-seven in number notation}',
                                                answer: '\\input{50957}',
                                                controls: {
                                                    "checkAnswer": true,
                                                    "help": '\\str{50,957}'
                                                }
                                            }]
                                        }]
                                    },
                                    {
                                        title: 'Words to Number',
                                        children: [{
                                            title: 'Main Answer',
                                            children: [{
                                                problem: '\\str{Write four hundred one in number notation}',
                                                answer: '\\input{401}',
                                                controls: {
                                                    "checkAnswer": true,
                                                    "help": '\\str{Four hundred one in number notation is 401}'
                                                }
                                            }]
                                        }]
                                    },
                                    {
                                        title: 'Words to Number',
                                        children: [{
                                            title: 'Main Answer',
                                            children: [{
                                                problem: '\\str{Write seven thousand, seven hundred nineteen in number notation}',
                                                answer: '\\input{7719}',
                                                controls: {
                                                    "checkAnswer": true,
                                                    "help": '\\str{7,719}'
                                                }
                                            }]
                                        }]
                                    },
                                    {
                                        title: 'Words to Number',
                                        children: [{
                                            title: 'Main Answer',
                                            children: [{
                                                problem: '\\str{Write seventy-three thousand, one hundred seventy-eight in number notation}',
                                                answer: '\\input{73178}',
                                                controls: {
                                                    "checkAnswer": true,
                                                    "help": '\\str{73,178}'
                                                }
                                            }]
                                        }]
                                    },
                                    {
                                        title: 'Words to Number',
                                        children: [{
                                            title: 'Main Answer',
                                            children: [{
                                                problem: '\\str{Write one hundred twenty-six in number notation}',
                                                answer: '\\input{126}',
                                                controls: {
                                                    "checkAnswer": true,
                                                    "help": '\\str{126}'
                                                }
                                            }]
                                        }]
                                    },
                                    {
                                        title: 'Words to Number',
                                        children: [{
                                            title: 'Main Answer',
                                            children: [{
                                                problem: '\\str{Write seven thousand, seven hundred forty-eight in number notation}',
                                                answer: '\\input{7748}',
                                                controls: {
                                                    "checkAnswer": true,
                                                    "help": '\\str{7,748}'
												}
                                            }]
                                        }]
                                    },
                                ]
                            }, {
                                title: '1.3 Comparing Whole Numbers',
                                path: '1.3-comparing-whole-numbers',
                                children: [
                                    {
        								title: 'Comparing Whole Numbers',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\butgrp{\\row{\\str{80 \xA0}}{\\but{>}{F}}{\\str{\xA0 or \xA0}}{\\but{<}{T}}{\\str{\xA0 91}}',
												answer: '',
												controls: {
													"checkAnswer": false,
													"help": '\\str{80 is LESS THAN 91}'
												}
											}]
										}]
									},
									{
										title: 'Comparing Whole Numbers',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\rowgrp{\\butgrp{\\row{\\str{X \xA0}}{\\but{>}{F}}{\\str{\xA0 or \xA0}}{\\but{<}{T}}{\\str{\xA0 Y}}}}{\\row{\\str{\xA0}}}{\\row{\\comparewholesgraph{25}{33}{20}{35}}}',
												answer: '',
												controls: {
													"checkAnswer": false,
													"help": '\\str{X or 25 is LESS THAN Y or 33}'
												}
											}]
										}]
									},
									{
										title: 'Comparing Whole Numbers',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\butgrp{\\row{\\str{85 \xA0}}{\\but{>}{T}}{\\str{\xA0 or \xA0}}{\\but{<}{F}}{\\str{\xA0 80}}',
												answer: '',
												controls: {
													"checkAnswer": false,
													"help": '\\str{85 is GREATER THAN 80}'
												}
											}]
										}]
									},
									{
										title: 'Comparing Whole Numbers',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\butgrp{\\row{\\str{53 \xA0}}{\\but{>}{T}}{\\str{\xA0 or \xA0}}{\\but{<}{F}}{\\str{\xA0 50}}',
												answer: '',

												controls: {
													"checkAnswer": false,
													"help": '\\str{53 is GREATER THAN 50}'
												}
											}]
										}]
									},
									{
										title: 'Comparing Whole Numbers',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\rowgrp{\\butgrp{\\row{\\str{X \xA0}}{\\but{>}{T}}{\\str{\xA0 or \xA0}}{\\but{<}{F}}{\\str{\xA0 Y}}}}{\\row{\\str{\xA0}}}{\\row{\\comparewholesgraph{56}{48}{45}{60}}}',
												answer: '',
                                                controls: {
													"checkAnswer": false,
													"help": '\\str{X or 56 is GREATER THAN Y or 48}'
												}
											}]
										}]
									},
									{
										title: 'Comparing Whole Numbers',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\butgrp{\\row{\\str{54 \xA0}}{\\but{>}{F}}{\\str{\xA0 or \xA0}}{\\but{<}{T}}{\\str{\xA0 60}}',
												answer: '',
												controls: {
													"checkAnswer": false,
													"help": '\\str{54 is LESS THAN 60}'
												}
											}]
										}]
									},
									{
										title: 'Comparing Whole Numbers',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\butgrp{\\row{\\str{86 \xA0}}{\\but{>}{F}}{\\str{\xA0 or \xA0}}{\\but{<}{T}}{\\str{\xA0 93}}',
												answer: '',
												controls: {
													"checkAnswer": false,
													"help": '\\str{86 is LESS THAN 93}'
												}
											}]
										}]
									},
									{
										title: 'Comparing Whole Numbers',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\rowgrp{\\butgrp{\\row{\\str{X \xA0}}{\\but{>}{T}}{\\str{\xA0 or \xA0}}{\\but{<}{F}}{\\str{\xA0 Y}}}}{\\row{\\str{\xA0}}}{\\row{\\comparewholesgraph{86}{77}{72}{88}}}',
												answer: '',
												controls: {
													"checkAnswer": false,
													"help": '\\str{86 is MORE THAN 77}'
												}
											}]
										}]
									},
									{
										title: 'Comparing Whole Numbers',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\butgrp{\\row{\\str{47 \xA0}}{\\but{>}{F}}{\\str{\xA0 or \xA0}}{\\but{<}{T}}{\\str{\xA0 57}}',
												answer: '',
												controls: {
													"checkAnswer": false,
													"help": '\\str{47 is LESS THAN 57}'
												}
											}]
										}]
									},
									{
										title: 'Comparing Whole Numbers',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\rowgrp{\\butgrp{\\row{\\str{X \xA0}}{\\but{>}{F}}{\\str{\xA0 or \xA0}}{\\but{<}{T}}{\\str{\xA0 Y}}}}{\\row{\\str{\xA0}}}{\\row{\\comparewholesgraph{83}{84}{72}{88}}}',
												answer: '',
												controls: {
													"checkAnswer": false,
													"help": '\\str{83 is LESS THAN 84}'
                                                }
                                            }]
                                        }]
                                    },
									{
        								title: 'Comparing Whole Numbers',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\butgrp{\\row{\\str{69 \xA0}}{\\but{>}{F}}{\\str{\xA0 or \xA0}}{\\but{<}{T}}{\\str{\xA0 70}}',
												answer: '',
												controls: {
													"checkAnswer": false,
													"help": '\\str{69 is LESS THAN 70}'
												}
											}]
										}]
									},
									{
										title: 'Comparing Whole Numbers',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\rowgrp{\\butgrp{\\row{\\str{X \xA0}}{\\but{>}{F}}{\\str{\xA0 or \xA0}}{\\but{<}{T}}{\\str{\xA0 Y}}}}{\\row{\\str{\xA0}}}{\\row{\\comparewholesgraph{15}{18}{10}{25}}}',
												answer: '',
												controls: {
													"checkAnswer": false,
													"help": '\\str{15 is LESS THAN 18}'
												}
											}]
										}]
									},
									{
										title: 'Comparing Whole Numbers',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\rowgrp{\\butgrp{\\row{\\str{X \xA0}}{\\but{>}{T}}{\\str{\xA0 or \xA0}}{\\but{<}{F}}{\\str{\xA0 Y}}}}{\\row{\\str{\xA0}}}{\\row{\\comparewholesgraph{84}{78}{72}{88}}}',
												answer: '',
												controls: {
													"checkAnswer": false,
													"help": '\\str{84 is GREATER THAN 78}'
												}
											}]
										}]
									},
									{
										title: 'Comparing Whole Numbers',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\butgrp{\\row{\\str{50 \xA0}}{\\but{>}{F}}{\\str{\xA0 or \xA0}}{\\but{<}{T}}{\\str{\xA0 53}}',
												answer: '',

												controls: {
													"checkAnswer": false,
													"help": '\\str{50 is LESS THAN 53}'
												}
											}]
										}]
									},
									{
										title: 'Comparing Whole Numbers',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\rowgrp{\\butgrp{\\row{\\str{X \xA0}}{\\but{>}{F}}{\\str{\xA0 or \xA0}}{\\but{<}{T}}{\\str{\xA0 Y}}}}{\\row{\\str{\xA0}}}{\\row{\\comparewholesgraph{18}{25}{15}{30}}}',
												answer: '',
                                                controls: {
													"checkAnswer": false,
													"help": '\\str{50 is LESS THAN 53}'
												}
											}]
										}]
									},
									{
										title: 'Comparing Whole Numbers',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\butgrp{\\row{\\str{54 \xA0}}{\\but{>}{F}}{\\str{\xA0 or \xA0}}{\\but{<}{T}}{\\str{\xA0 60}}',
												answer: '',
												controls: {
													"checkAnswer": false,
													"help": '\\str{54 is LESS THAN 60}'
												}
											}]
										}]
									},
									{
										title: 'Comparing Whole Numbers',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\rowgrp{\\butgrp{\\row{\\str{X \xA0}}{\\but{>}{F}}{\\str{\xA0 or \xA0}}{\\but{<}{T}}{\\str{\xA0 Y}}}}{\\row{\\str{\xA0}}}{\\row{\\comparewholesgraph{86}{93}{85}{98}}}',
												answer: '',
												controls: {
													"checkAnswer": false,
													"help": '\\str{86 is LESS THAN 93}'
												}
											}]
										}]
									},
									{
										title: 'Comparing Whole Numbers',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\butgrp{\\row{\\str{95 \xA0}}{\\but{>}{T}}{\\str{\xA0 or \xA0}}{\\but{<}{F}}{\\str{\xA0 77}}',
												answer: '',
												controls: {
													"checkAnswer": false,
													"help": '\\str{95 is GREATER THAN 77}'
												}
											}]
										}]
									},
									{
										title: 'Comparing Whole Numbers',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\rowgrp{\\butgrp{\\row{\\str{X \xA0}}{\\but{>}{T}}{\\str{\xA0 or \xA0}}{\\but{<}{F}}{\\str{\xA0 Y}}}}{\\row{\\str{\xA0}}}{\\row{\\comparewholesgraph{52}{48}{45}{60}}}',
												answer: '',
												controls: {
													"checkAnswer": false,
													"help": '\\str{52 is GREATER THAN 48}'
												}
											}]
										}]
									},
									{
										title: 'Comparing Whole Numbers',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\butgrp{\\row{\\str{26 \xA0}}{\\but{>}{T}}{\\str{\xA0 or \xA0}}{\\but{<}{F}}{\\str{\xA0 15}}',
												answer: '',
												controls: {
													"checkAnswer": false,
													"help": '\\str{26 is GREATER THAN 16}'
                                                }
                                            }]
                                        }]
                                    }
                                ]
                            },
                            {
                                title: '1.4 Add Whole Numbers',
                                path: '1.4-add-whole-numbers',
                                children: [
                                    {
										title: 'Add Whole Numbers',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\rowgrp{\\row{\\str{Find the sum of the whole numbers:}}}{\\row{\\addwholes{math}{partial}{[47,59]}}}',
												answer: '\\input{106}',
												controls: {
													"checkAnswer": true,
													"help": '\\rowgrp{\\row{\\addwholes{math}{complete}{[47, 59]}}{\\css{\\str{Answer:  \xA0}}{help-answer-text}}{\\css{\\str{106}}{label_like}}}'
												}
											}]
										}]
									},
									{
										title: 'Add Whole Numbers',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\rowgrp{\\row{\\str{Find the sum of the whole numbers:}}}{\\row{\\str{\xA0}}}{\\row{\\addwholes{english}{partial}{[301,815]}}}',
												answer: '\\input{1116}',
												controls: {
													"checkAnswer": true,
													"help": '\\rowgrp{\\row{\\addwholes{math}{complete}{[301,815]}}{\\css{\\str{Answer: }}{help-answer-text}}{\\css{\\str{1116}}{label_like}}}'
												}
											}]
										}]
									},
									{
										title: 'Add Whole Numbers',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\rowgrp{\\row{\\str{Find the sum of the whole numbers:}}}{\\row{\\addwholes{math}{partial}{[968,827]}}}',
												answer: '\\input{1795}',
												controls: {
													"checkAnswer": true,
													"help": '\\rowgrp{\\row{\\addwholes{math}{complete}{[968,827]}}{\\css{\\str{Answer:  \xA0}}{help-answer-text}}{\\css{\\str{1795}}{label_like}}}'
												}
											}]
										}]
									},
									{
										title: 'Add Whole Numbers',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\rowgrp{\\row{\\str{Find the sum of the whole numbers:}}}{\\row{\\addwholes{math}{partial}{[68,47]}}}',
												answer: '\\input{115}',
												controls: {
													"checkAnswer": true,
													"help": '\\rowgrp{\\row{\\addwholes{math}{complete}{[68,47]}}{\\css{\\str{Answer:  \xA0}}{help-answer-text}}{\\css{\\str{115}}{label_like}}}'
												}
											}]
										}]
									},
									{
										title: 'Add Whole Numbers',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\rowgrp{\\row{\\str{Find the sum of the whole numbers:}}}{\\row{\\str{\xA0}}}{\\row{\\addwholes{english}{partial}{[9026,1911]}}}',
												answer: '\\input{10937}',
												controls: {
													"checkAnswer": true,
													"help": '\\rowgrp{\\row{\\addwholes{math}{complete}{[9026,1911]}}{\\css{\\str{Answer:  \xA0}}{help-answer-text}}{\\css{\\str{10937}}{label_like}}}'
												}
											}]
										}]
									},
									{
										title: 'Add Whole Numbers',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\rowgrp{\\row{\\str{Find the sum of the whole numbers:}}}{\\row{\\addwholes{math}{partial}{[3148,2584]}}}',
												answer: '\\input{5732}',
												controls: {
													"checkAnswer": true,
													"help": '\\rowgrp{\\row{\\addwholes{math}{complete}{[3148,2584]}}{\\css{\\str{Answer:  \xA0}}{help-answer-text}}{\\css{\\str{5732}}{label_like}}}'
												}
											}]
										}]
									},
									{
										title: 'Add Whole Numbers',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\rowgrp{\\row{\\str{Find the sum of the whole numbers:}}}{\\row{\\str{\xA0}}}{\\row{\\addwholes{english}{partial}{[618,489,115]}}}',
												answer: '\\input{1222}',
												controls: {
													"checkAnswer": true,
													"help": '\\rowgrp{\\row{\\addwholes{math}{complete}{[618,489,115]}}{\\css{\\str{Answer:  \xA0}}{help-answer-text}}{\\css{\\str{1222}}{label_like}}}'
												}
											}]
										}]
									},
									{
										title: 'Add Whole Numbers',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\rowgrp{\\row{\\str{Find the sum of the whole numbers:}}}{\\row{\\addwholes{math}{partial}{[1700,2233,4945]}}}',
												answer: '\\input{8878}',
												controls: {
													"checkAnswer": true,
													"help": '\\rowgrp{\\row{\\addwholes{math}{complete}{[1700,2233,4945]}}{\\css{\\str{Answer:  \xA0}}{help-answer-text}}{\\css{\\str{8878}}{label_like}}}'
												}
											}]
										}]
									},
									{
										title: 'Add Whole Numbers',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\rowgrp{\\row{\\str{Find the sum of the whole numbers:}}}{\\row{\\addwholes{math}{partial}{[8850,4626,177,401]}}}',
												answer: '\\input{14054}',
												controls: {
													"checkAnswer": true,
													"help": '\\rowgrp{\\row{\\addwholes{math}{complete}{[8850,4626,177,401]}}{\\css{\\str{Answer:  \xA0}}{help-answer-text}}{\\css{\\str{14054}}{label_like}}}'
												}
											}]
										}]
									},
									{
										title: 'Add Whole Numbers',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\rowgrp{\\row{\\str{Find the sum of the whole numbers:}}}{\\row{\\str{\xA0}}}{\\row{\\addwholes{english}{partial}{[832,6223,2705,146]}}}',
												answer: '\\input{9906}',
												controls: {
													"checkAnswer": true,
													"help": '\\rowgrp{\\row{\\addwholes{math}{complete}{[832,6223,2705,146]}}{\\css{\\str{Answer:  \xA0}}{help-answer-text}}{\\css{\\str{9906}}{label_like}}}'
                                                }
                                            }]
                                        }]
                                    }
                                ]
                            },
                            {
                                title: '1.5 Subtract Whole Numbers',
                                path: '1.5-subtract-whole-numbers',
                                children: [
                                    {
										title: 'Subtract Whole Numbers',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\rowgrp{\\row{\\str{Find the difference of the whole numbers:}}}{\\row{\\str{\xA0}}}{\\row{\\subtractwholes{english}{partial}{110}{99}}}',
												answer: '\\input{11}',
												controls: {
													"checkAnswer": true,
													"help": '\\rowgrp{\\row{\\subtractwholes{math}{complete}{110}{99}}{\\css{\\str{Answer:  \xA0}}{help-answer-text}}{\\css{\\str{11}}{label_like}}}'
												}
											}]
										}]
									},
									{
										title: 'Subtract Whole Numbers',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\rowgrp{\\row{\\str{Find the difference of the whole numbers:}}}{\\row{\\subtractwholes{math}{partial}{989}{711}}}',
												answer: '\\input{278}',
												controls: {
													"checkAnswer": true,
													"help": '\\rowgrp{\\row{\\subtractwholes{math}{complete}{989}{711}}{\\css{\\str{Answer:  \xA0}}{help-answer-text}}{\\css{\\str{278}}{label_like}}}'
												}
											}]
										}]
									},
									{
										title: 'Subtract Whole Numbers',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\rowgrp{\\row{\\str{Find the difference of the whole numbers:}}}{\\row{\\str{\xA0}}}{\\row{\\subtractwholes{english}{partial}{832}{86}}}',
												answer: '\\input{746}',
												controls: {
													"checkAnswer": true,
													"help": '\\rowgrp{\\row{\\subtractwholes{math}{complete}{832}{86}}{\\css{\\str{Answer:  \xA0}}{help-answer-text}}{\\css{\\str{746}}{label_like}}}'
												}
											}]
										}]
									},
									{
										title: 'Subtract Whole Numbers',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\rowgrp{\\row{\\str{Find the difference of the whole numbers:}}}{\\row{\\subtractwholes{math}{partial}{518}{68}}}',
												answer: '\\input{450}',
												controls: {
													"checkAnswer": true,
													"help": '\\rowgrp{\\row{\\subtractwholes{math}{complete}{518}{68}}{\\css{\\str{Answer:  \xA0}}{help-answer-text}}{\\css{\\str{450}}{label_like}}}'
												}
											}]
										}]
									},
									{
										title: 'Subtract Whole Numbers',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\rowgrp{\\row{\\str{Find the difference of the whole numbers:}}}{\\row{\\subtractwholes{math}{partial}{3749}{756}}}',
												answer: '\\input{2993}',
												controls: {
													"checkAnswer": true,
													"help": '\\rowgrp{\\row{\\subtractwholes{math}{complete}{3749}{756}}{\\css{\\str{Answer:  \xA0}}{help-answer-text}}{\\css{\\str{2993}}{label_like}}}'
												}
											}]
										}]
									},
									{
										title: 'Subtract Whole Numbers',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\rowgrp{\\row{\\str{Find the difference of the whole numbers:}}}{\\row{\\subtractwholes{math}{partial}{8889}{549}}}',
												answer: '\\input{8340}',
												controls: {
													"checkAnswer": true,
													"help": '\\rowgrp{\\row{\\subtractwholes{math}{complete}{8889}{549}}{\\css{\\str{Answer:  \xA0}}{help-answer-text}}{\\css{\\str{8340}}{label_like}}}'
												}
											}]
										}]
									},
									{
										title: 'Subtract Whole Numbers',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\rowgrp{\\row{\\str{Find the difference of the whole numbers:}}}{\\row{\\str{\xA0}}}{\\row{\\subtractwholes{english}{partial}{9475}{7493}}}',
												answer: '\\input{1982}',
												controls: {
													"checkAnswer": true,
													"help": '\\rowgrp{\\row{\\subtractwholes{math}{complete}{9475}{7493}}{\\css{\\str{Answer:  \xA0}}{help-answer-text}}{\\css{\\str{1982}}{label_like}}}'
												}
											}]
										}]
									},
									{
										title: 'Subtract Whole Numbers',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\rowgrp{\\row{\\str{Find the difference of the whole numbers:}}}{\\row{\\subtractwholes{math}{partial}{8206}{6863}}}',
												answer: '\\input{1343}',
												controls: {
													"checkAnswer": true,
													"help": '\\rowgrp{\\row{\\subtractwholes{math}{complete}{8206}{6863}}{\\css{\\str{Answer:  \xA0}}{help-answer-text}}{\\css{\\str{1343}}{label_like}}}'
												}
											}]
										}]
									},
									{
										title: 'Subtract Whole Numbers',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\rowgrp{\\row{\\str{Find the difference of the whole numbers:}}}{\\row{\\str{\xA0}}}{\\row{\\subtractwholes{english}{partial}{89686}{62438}}}',
												answer: '\\input{27248}',
												controls: {
													"checkAnswer": true,
													"help": '\\rowgrp{\\row{\\str{Find the difference of the whole numbers:}}}{\\row{\\str{\xA0}}}{\\row{\\subtractwholes{math}{complete}{89686}{62438}}{\\css{\\str{Answer:  \xA0}}{help-answer-text}}{\\css{\\str{27248}}{label_like}}}'
												}
											}]
										}]
									},
									{
										title: 'Subtract Whole Numbers',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\rowgrp{\\row{\\str{Find the difference of the whole numbers:}}}{\\row{\\subtractwholes{math}{partial}{45300}{20532}}}',
												answer: '\\input{24768}',
												controls: {
													"checkAnswer": true,
													"help": '\\rowgrp{\\row{\\str{Find the difference of the whole numbers:}}}{\\row{\\str{\xA0}}}{\\row{\\subtractwholes{math}{complete}{45300}{20532}}{\\css{\\str{Answer:  \xA0}}{help-answer-text}}{\\css{\\str{24768}}{label_like}}}'													
                                                }
                                            }]
                                        }]
                                    }
                                ]
                            },
                            {
                                title: '2.1 Rounding Whole Numbers',
                                path: '2.1-rounding-whole-numbers',
                                children: [
                                    {
                                        title: 'Rounding Whole Numbers',
                                        children: [{
                                            title: 'Main Answer',
                                            children: [{
                                                problem: '\\rowgrp{\\row{\\str{Round this whole number to the}}}{\\row{\\str{tens place: }}}{\\row{\\str{471}}}}',
                                                answer: '\\input{470}',
                                                controls: {
                                                    "checkAnswer": true,
                                                    "help": '\\placevalue{471}{1}{showanswer}'
                                                }
                                            }]
                                        }]
                                    },
                                    {
                                        title: 'Rounding Whole Numbers',
                                        children: [{
                                            title: 'Main Answer',
                                            children: [{
                                                problem: '\\rowgrp{\\row{\\str{Round this whole number to the}}}{\\row{\\str{thousands place: }}}{\\row{\\str{1346}}}}',
                                                answer: '\\input{1000}',
                                                controls: {
                                                    "checkAnswer": true,
                                                    "help": '\\placevalue{1346}{3}{showanswer}'
                                                }
                                            }]
                                        }]
                                    },
                                    {
                                        title: 'Rounding Whole Numbers',
                                        children: [{
                                            title: 'Main Answer',
                                            children: [{
                                                 problem: '\\rowgrp{\\row{\\str{Round this whole number to the}}}{\\row{\\str{tens place: }}}{\\row{\\str{684}}}}',
                                                answer: '\\input{680}',
                                                controls: {
                                                    "checkAnswer": true,
                                                    "help": '\\placevalue{684}{1}{showanswer}'
                                                }
                                            }]
                                        }]
                                    },
                                    {
                                        title: 'Rounding Whole Numbers',
                                        children: [{
                                            title: 'Main Answer',
                                            children: [{
                                                problem: '\\rowgrp{\\row{\\str{Round this whole number to the}}}{\\row{\\str{tens place: }}}{\\row{\\str{959}}}}',
                                                answer: '\\input{960}',
                                                controls: {
                                                    "checkAnswer": true,
                                                    "help": '\\placevalue{959}{1}{showanswer}'
                                                }
                                            }]
                                        }]
                                    },
                                    {
                                        title: 'Rounding Whole Numbers',
                                        children: [{
                                            title: 'Main Answer',
                                            children: [{
                                                problem: '\\rowgrp{\\row{\\str{Round this whole number to the}}}{\\row{\\str{hundreds place: }}}{\\row{\\str{461}}}}',
                                                answer: '\\input{500}',
                                                controls: {
                                                    "checkAnswer": true,
                                                    "help": '\\placevalue{461}{2}{showanswer}'
                                                }
                                            }]
                                        }]
                                    },
                                    {
                                        title: 'Rounding Whole Numbers',
                                        children: [{
                                            title: 'Main Answer',
                                            children: [{
                                                problem: '\\rowgrp{\\row{\\str{Round this whole number to the}}}{\\row{\\str{ten thousands place: }}}{\\row{\\str{3990495}}}}',
                                                answer: '\\input{3990000}',
                                                controls: {
                                                    "checkAnswer": true,
                                                    "help": '\\placevalue{3990495}{4}{showanswer}'
                                                }
                                            }]
                                        }]
                                    },
                                    {
                                        title: 'Rounding Whole Numbers',
                                        children: [{
                                            title: 'Main Answer',
                                            children: [{
                                                problem: '\\rowgrp{\\row{\\str{Round this whole number to the}}}{\\row{\\str{ten thousands place: }}}{\\row{\\str{27523018}}}}',
                                                answer: '\\input{27520000}',
                                                controls: {
                                                    "checkAnswer": true,
                                                    "help": '\\placevalue{27523018}{4}{showanswer}'
                                                }
                                            }]
                                        }]
                                    },
                                    {
                                        title: 'Rounding Whole Numbers',
                                        children: [{
                                            title: 'Main Answer',
                                            children: [{
                                                problem: '\\rowgrp{\\row{\\str{Round this whole number to the}}}{\\row{\\str{hundred thousands place: }}}{\\row{\\str{563548}}}}',
                                                answer: '\\input{600000}',
                                                controls: {
                                                    "checkAnswer": true,
                                                     "help": '\\placevalue{563548}{5}{showanswer}'
                                                }
                                            }]
                                        }]
                                    },
                                    {
                                        title: 'Rounding Whole Numbers',
                                        children: [{
                                            title: 'Main Answer',
                                            children: [{
                                                problem: '\\rowgrp{\\row{\\str{Round this whole number to the}}}{\\row{\\str{tens place: }}}{\\row{\\str{230179}}}}',
                                                answer: '\\input{230180}',
                                                controls: {
                                                    "checkAnswer": true,
                                                     "help": '\\placevalue{230179}{1}{showanswer}'
                                                }
                                            }]
                                        }]
                                    },
                                    {
                                        title: 'Rounding Whole Numbers',
                                        children: [{
                                            title: 'Main Answer',
                                            children: [{
                                                problem: '\\rowgrp{\\row{\\str{Round this whole number to the}}}{\\row{\\str{hundreds place: }}}{\\row{\\str{49952}}}}',
                                                answer: '\\input{50000}',
                                                controls: {
                                                    "checkAnswer": true,
                                                    "help": '\\placevalue{49952}{2}{showanswer}'
												}
                                            }]
                                        }]
                                    },
                                ]
                            },
                            {
                                title: '2A.1 Translating Words to Math',
                                path: '2A.1-translating-words-to-math',
                                children: [
                                    {
                                        title: 'Translating Words to Math',
                                        children: [{
                                            title: 'Main Answer',
                                            children: [{
                                                problem: '\\butgrp{\\rowgrp{\\row{\\str{Translate the following words into a math expression or an inequality statement:}}}{\\row{\\str{\xA0}}}{\\row{\\str{74 is greater than 26}}}{\\row{\\str{\xA0}}}{\\row{\\but{A}{T}}{\\str{\xA0 \xA0 74 > 26}}}{\\row{\\but{B}{F}}{\\str{\xA0 \xA0 26 < 74}}}{\\row{\\but{C}{F}}{\\str{\xA0 \xA0 74 - 26}}}{\\row{\\but{D}{F}}{\\str{\xA0 \xA0 74 + 26}}}}}',
                                                answer: 'A',
                                                controls: {
                                                    "checkAnswer": true,
                                                    "help": '\\str{A: 74 > 26}'
                                                }
                                            }]
                                        }]
                                    },
                                    {
                                        title: 'Translating Words to Math',
                                        children: [{
                                            title: 'Main Answer',
                                            children: [{
                                                problem: '\\butgrp{\\rowgrp{\\row{\\str{Translate the following words into a math expression or an inequality statement:}}}{\\row{\\str{\xA0}}}{\\row{\\str{9 is less than 23}}}{\\row{\\str{\xA0}}}{\\row{\\but{A}{F}}{\\str{\xA0 \xA0 9 - 23}}}{\\row{\\but{B}{T}}{\\str{\xA0 \xA0 9 < 23}}}{\\row{\\but{C}{F}}{\\str{\xA0 \xA0 9 + 23}}}{\\row{\\but{D}{F}}{\\str{\xA0 \xA0 23 > 9}}}}}',
                                                answer: 'B',
                                                controls: {
                                                    "checkAnswer": true,
                                                    "help": '\\str{B: 9 < 23}'
                                                }
                                            }]
                                        }]
                                    },
                                    {
                                        title: 'Translating Words to Math',
                                        children: [{
                                            title: 'Main Answer',
                                            children: [{
                                                problem: '\\butgrp{\\rowgrp{\\row{\\str{Translate the following words into a math expression or an inequality statement:}}}{\\row{\\str{\xA0}}}{\\row{\\str{5 is more than 1}}}{\\row{\\str{\xA0}}}{\\row{\\but{A}{F}}{\\str{\xA0 \xA0 1 < 5}}}{\\row{\\but{B}{T}}{\\str{\xA0 \xA0 5 > 1}}}{\\row{\\but{C}{F}}{\\str{\xA0 \xA0 1 + 5}}}{\\row{\\but{D}{F}}{\\str{\xA0 \xA0 5 - 1}}}}}',
                                                answer: 'B',
                                                controls: {
                                                    "checkAnswer": true,
                                                    "help": '\\str{B: 5 > 1}'
                                                }
                                            }]
                                        }]
                                    },
                                    {
                                        title: 'Translating Words to Math',
                                        children: [{
                                            title: 'Main Answer',
                                            children: [{
                                                problem: '\\butgrp{\\rowgrp{\\row{\\str{Translate the following words into a math expression or an inequality statement:}}}{\\row{\\str{\xA0}}}{\\row{\\str{82 is how much less than 98?}}}{\\row{\\str{\xA0}}}{\\row{\\but{A}{F}}{\\str{\xA0 \xA0 82 + 98}}}{\\row{\\but{B}{F}}{\\str{\xA0 \xA0 98 > 82}}}{\\row{\\but{C}{T}}{\\str{\xA0 \xA0 98 - 82}}}{\\row{\\but{D}{F}}{\\str{\xA0 \xA0 82 < 98}}}}}',
                                                answer: 'C',
                                                controls: {
                                                    "checkAnswer": true,
                                                    "help": '\\str{C: 98 - 82}'
                                                }
                                            }]
                                        }]
                                    },
                                    {
                                        title: 'Translating Words to Math',
                                        children: [{
                                            title: 'Main Answer',
                                            children: [{
                                                problem: '\\butgrp{\\rowgrp{\\row{\\str{Translate the following words into a math expression or an inequality statement:}}}{\\row{\\str{\xA0}}}{\\row{\\str{91 is more than 66}}}{\\row{\\str{\xA0}}}{\\row{\\but{A}{F}}{\\str{\xA0 \xA0 66 + 91}}}{\\row{\\but{B}{F}}{\\str{\xA0 \xA0 66 < 91}}}{\\row{\\but{C}{F}}{\\str{\xA0 \xA0 91 - 66}}}{\\row{\\but{D}{T}}{\\str{\xA0 \xA0 91 > 66}}}}}',
                                                answer: 'D',
                                                controls: {
                                                    "checkAnswer": true,
                                                    "help": '\\str{D: 91 > 66}'
                                                }
                                            }]
                                        }]
                                    },
                                    {
                                        title: 'Translating Words to Math',
                                        children: [{
                                            title: 'Main Answer',
                                            children: [{
                                                problem: '\\butgrp{\\rowgrp{\\row{\\str{Translate the following words into a math expression or an inequality statement:}}}{\\row{\\str{\xA0}}}{\\row{\\str{13 is how much more than 12?}}}{\\row{\\str{\xA0}}}{\\row{\\but{A}{F}}{\\str{\xA0 \xA0 13 > 12}}}{\\row{\\but{B}{F}}{\\str{\xA0 \xA0 12 < 13}}}{\\row{\\but{C}{F}}{\\str{\xA0 \xA0 12 + 13}}}{\\row{\\but{D}{T}}{\\str{\xA0 \xA0 13 - 12}}}}}',
                                                answer: 'D',
                                                controls: {
                                                    "checkAnswer": true,
                                                    "help": '\\str{D: 13 - 12}'
                                                }
                                            }]
                                        }]
                                    },
                                    {
                                        title: 'Translating Words to Math',
                                        children: [{
                                            title: 'Main Answer',
                                            children: [{
                                                problem: '\\butgrp{\\rowgrp{\\row{\\str{Translate the following words into a math expression or an inequality statement:}}}{\\row{\\str{\xA0}}}{\\row{\\str{28 is more than 16}}}{\\row{\\str{\xA0}}}{\\row{\\but{A}{F}}{\\str{\xA0 \xA0 16 < 28}}}{\\row{\\but{B}{T}}{\\str{\xA0 \xA0 28 > 16}}}{\\row{\\but{C}{F}}{\\str{\xA0 \xA0 16 + 28}}}{\\row{\\but{D}{F}}{\\str{\xA0 \xA0 28 - 16}}}}}',
                                                answer: 'B',
                                                controls: {
                                                    "checkAnswer": true,
                                                    "help": '\\str{B: 28 > 16}'
                                                }
                                            }]
                                        }]
                                    },
                                    {
                                        title: 'Translating Words to Math',
                                        children: [{
                                            title: 'Main Answer',
                                            children: [{
                                                problem: '\\butgrp{\\rowgrp{\\row{\\str{Translate the following words into a math expression or an inequality statement:}}}{\\row{\\str{\xA0}}}{\\row{\\str{45 is greater than 1}}}{\\row{\\str{\xA0}}}{\\row{\\but{A}{F}}{\\str{\xA0 \xA0 1 < 45}}}{\\row{\\but{B}{T}}{\\str{\xA0 \xA0 45 > 1}}}{\\row{\\but{C}{F}}{\\str{\xA0 \xA0 45 - 1}}}{\\row{\\but{D}{F}}{\\str{\xA0 \xA0 1 + 45}}}}}',
                                                answer: 'B',
                                                controls: {
                                                    "checkAnswer": true,
                                                    "help": '\\str{B: 45 > 1}'
                                                }
                                            }]
                                        }]
                                    },
                                    {
                                        title: 'Translating Words to Math',
                                        children: [{
                                            title: 'Main Answer',
                                            children: [{
                                                problem: '\\butgrp{\\rowgrp{\\row{\\str{Translate the following words into a math expression or an inequality statement:}}}{\\row{\\str{\xA0}}}{\\row{\\str{28 is how much less than 47?}}}{\\row{\\str{\xA0}}}{\\row{\\but{A}{T}}{\\str{\xA0 \xA0 47 - 28}}}{\\row{\\but{B}{F}}{\\str{\xA0 \xA0 28 < 47}}}{\\row{\\but{C}{F}}{\\str{\xA0 \xA0 47 > 28}}}{\\row{\\but{D}{F}}{\\str{\xA0 \xA0 28 + 47}}}}}',
                                                answer: 'A',
                                                controls: {
                                                    "checkAnswer": true,
                                                    "help": '\\str{A: 47 - 28}'
                                                }
                                            }]
                                        }]
                                    },
                                    {
                                        title: 'Translating Words to Math',
                                        children: [{
                                            title: 'Main Answer',
                                            children: [{
                                                problem: '\\butgrp{\\rowgrp{\\row{\\str{Translate the following words into a math expression or an inequality statement:}}}{\\row{\\str{\xA0}}}{\\row{\\str{6 is less than 73}}}{\\row{\\str{\xA0}}}{\\row{\\but{A}{F}}{\\str{\xA0 \xA0 6 + 73}}}{\\row{\\but{B}{F}}{\\str{\xA0 \xA0 73 > 6}}}{\\row{\\but{C}{F}}{\\str{\xA0 \xA0 73 - 6}}}{\\row{\\but{D}{T}}{\\str{\xA0 \xA0 6 < 73}}}}}',
                                                answer: 'D',
                                                controls: {
                                                    "checkAnswer": true,
                                                    "help": '\\str{D: 6 < 73}'
												}
                                            }]
                                        }]
                                    },
                                ]
                            },
							{
                                title: '2A.2 Charts and Bar Graphs',
                                path: '2A.2-charts-and-bar-graphs',
                                children: [
                                    {
                                        title: 'Charts and Bar Graphs',
                                        children: [{
                                            title: 'Main Answer',
                                            children: [{
                                                problem: '\\rowgrp{\\row{\\str{Answer the following questions by using the chart below.}}}{\\row{\\str{\xA0}}}{\\row{\\str{Question 1:   Which two athletes had the best times to finish Race #1?}}}{\\row{\\str{\xA0}}}{\\row{\\chart{Time (in seconds) to Run 220 Meters}{6}{5}{["Athlete","Race #1","Race #2","Race #3","Race #4","Runner A","27","29","29","29","Runner B","30","28","28","26","Runner C","26","30","27","24","Runner D","24","28","30","28","Runner E","27","24","28","24"]}}}',
                                                answer: '\\butgrp{\\rowgrp{\\row{\\but{A}{T}}{\\str{\xA0 \xA0 C and D}}}{\\row{\\but{B}{F}}{\\str{\xA0 \xA0 A and B}}}{\\row{\\but{C}{F}}{\\str{\xA0 \xA0 B and C}}}{\\row{\\but{D}{F}}{\\str{\xA0 \xA0 D and E}}}}}',
                                                controls: {
                                                    "checkAnswer": true,
                                                    "help": '\\str{A: Runners C & D ran fastest in Race #1}'
                                                }
                                            }]
                                        }]
                                    },
                                    {
                                        title: 'Charts and Bar Graphs',
                                        children: [{
                                            title: 'Main Answer',
                                            children: [{
                                                problem:'\\rowgrp{\\row{\\str{Answer the following questions by using the chart to below.}}}{\\row{\\str{\xA0}}}{\\row{\\str{Question 2:   Which athlete took the least amount of time to finish Race #2?}}}{\\row{\\str{\xA0}}}{\\chart{Time (in seconds) to Run 220 Meters}{6}{5}{["Athlete","Race #1","Race #2","Race #3","Race #4","Runner A","27","29","29","29","Runner B","30","28","28","26","Runner C","26","30","27","24","Runner D","24","28","30","28","Runner E","27","24","28","24"]}}' ,
                                                answer: '\\butgrp{\\rowgrp{\\row{\\but{A}{F}}{\\str{\xA0 \xA0 runner D}}}{\\row{\\but{B}{F}}{\\str{\xA0 \xA0 runner C}}}{\\row{\\but{C}{T}}{\\str{\xA0 \xA0 runner E}}}{\\row{\\but{D}{F}}{\\str{\xA0 \xA0 runner A}}}}}',
                                                controls: {
                                                    "checkAnswer": true,
                                                    "help": '\\str{C: Runner E ran Race # 2 in the shortest amount of time}'
                                                }
                                            }]
                                        }]
                                    },
                                    {
                                        title: 'Charts and Bar Graphs',
                                        children: [{
                                            title: 'Main Answer',
                                            children: [{
                                                problem: '\\rowgrp{\\row{\\str{Answer the following questions by using the chart to below.}}}{\\row{\\str{\xA0}}}{\\row{\\str{Question 3:   How many of the runners had a time of 25 seconds or better in at least one race?}}}{\\row{\\str{\xA0}}}{\\chart{Time (in seconds) to Run 220 Meters}{6}{5}{["Athlete","Race #1","Race #2","Race #3","Race #4","Runner A","27","29","29","29","Runner B","30","28","28","26","Runner C","26","30","27","24","Runner D","24","28","30","28","Runner E","27","24","28","24"]}}',
                                                answer: '\\butgrp{\\rowgrp{\\row{\\but{A}{F}}{\\str{\xA0 \xA0 2 runners}}}{\\row{\\but{B}{F}}{\\str{\xA0 \xA0 0 runners}}}{\\row{\\but{C}{F}}{\\str{\xA0 \xA0 1 runner}}}{\\row{\\but{D}{T}}{\\str{\xA0 \xA0 3 runners}}}}}',
                                                controls: {
                                                    "checkAnswer": true,
                                                    "help": '\\str{D: 3 runners ran at least one race under 25 seconds}'
                                                }
                                            }]
                                        }]
                                    },
                                    {
                                        title: 'Charts and Bar Graphs',
                                        children: [{
                                            title: 'Main Answer',
                                            children: [{
                                                problem: '\\rowgrp{\\row{\\str{Answer the following questions by using the chart below.}}}{\\row{\\str{\xA0}}}{\\row{\\chart{Utility Bill for Gas and Electricity}{5}{5}{["Student","Therms of Gas Used","Cost of Gas","Kilowatt Hours of Electricity Used","Cost of Electricity","Anne","18","$26","188","$41","Travis","10","$14","183","$40","Nathan","20","$28","261","$56","Sondra","12","$17","251","$54"]}}}',
                                                answer: '\\rowgrp{\\row{\\str{Question 1:  How much more money does Nathan spend on gas than Anne?}}}{\\row{\\str{\xA0}}}{\\row{\\str{$}}{\\input{2}}}',
                                                controls: {
                                                    "checkAnswer": true,
                                                    "help": '\\str{Nathan spends $2 more than Anne on gas}'
                                                }
                                            }]
                                        }]
                                    },
                                    {
                                        title: 'Charts and Bar Graphs',
                                        children: [{
                                            title: 'Main Answer',
                                            children: [{
												problem: '\\rowgrp{\\row{\\str{Answer the following questions by using the chart below.}}}{\\row{\\str{\xA0}}}{\\row{\\chart{Utility Bill for Gas and Electricity}{5}{5}{["Student","Therms of Gas Used","Cost of Gas","Kilowatt Hours of Electricity Used","Cost of Electricity","Anne","18","$26","188","$41","Travis","10","$14","183","$40","Nathan","20","$28","261","$56","Sondra","12","$17","251","$54"]}}}',
                                                answer: '\\rowgrp{\\row{\\str{Question 3:    How much more money does Nathan spend on electricity than on gas?}}}{\\row{\\str{\xA0}}}{\\row{\\str{$}}{\\input{28}}}',
                                                controls: {
                                                    "checkAnswer": true,
                                                    "help": true
                                                }
                                            }]
                                        }]
                                    },
                                    {
                                        title: 'Charts and Bar Graphs',
                                        children: [{
                                            title: 'Main Answer',
                                            children: [{
                                                problem: '\\rowgrp{\\row{\\str{Answer the following questions by using the chart below.}}}{\\row{\\str{\xA0}}}{\\row{\\chart{Utility Bill for Gas and Electricity}{5}{5}{["Student","Therms of Gas Used","Cost of Gas","Kilowatt Hours of Electricity Used","Cost of Electricity","Anne","18","$26","188","$41","Travis","10","$14","183","$40","Nathan","20","$28","261","$56","Sondra","12","$17","251","$54"]}}}',
                                                answer: '\\rowgrp{\\row{\\str{Question 2:    How much more money does Nathan spend on the total utility bill (the cost of both gas and electricity) than Anne?}}}{\\row{\\str{\xA0}}}{\\row{\\str{$}}{\\input{17}}}',
                                                controls: {
                                                    "checkAnswer": true,
                                                    "help": '\\str{Nathan spends a total of $84, $17 more than Anne.}'
                                                }
                                            }]
                                        }]
                                    },
                                    {
                                        title: 'Charts and Bar Graphs',
                                        children: [{
                                            title: 'Main Answer',
											children: [{
                                                problem: '\\butgrp{\\rowgrp{\\row{\\str{Answer the following questions by using the chart to the right.}}}{\\row{\\str{\xA0}}}{\\row{\\str{Question 1:  For the four students, which student spent the most for Phone and Gas?}}}{\\row{\\str{\xA0}}}{\\row{\\but{A}{F}}{\\str{\xA0 \xA0 Sam}}}{\\row{\\but{B}{F}}{\\str{\xA0 \xA0 Jerry}}}{\\row{\\but{C}{T}}{\\str{\xA0 \xA0 Maribel}}}{\\row{\\but{D}{F}}{\\str{\xA0 \xA0 Yvonne}}}}}',
                                                answer: '\\chart{}{5}{5}{["Student","Phone","Internet","Cable TV","Gas","Sam","41","16","40","69","Jerry","64","60","59","65","Maribel","94","67","67","99","Yvonne","41","69","34","113"]}',
                                                controls: {
                                                    "checkAnswer": true,
                                                    "help": true
                                                }
                                            }]
                                        }]
                                    },
                                    {
                                        title: 'Charts and Bar Graphs',
                                        children: [{
                                            title: 'Main Answer',
                                              children: [{
                                                problem: '\\butgrp{\\rowgrp{\\row{\\str{Answer the following questions by using the chart to the right.}}}{\\row{\\str{\xA0}}}{\\row{\\str{Question 2:  Which service given in these four choices is the most expensive for the four students all together?}}}{\\row{\\str{\xA0}}}{\\row{\\but{A}{F}}{\\str{\xA0 \xA0 Phone}}}{\\row{\\but{B}{F}}{\\str{\xA0 \xA0 Internet}}}{\\row{\\but{C}{F}}{\\str{\xA0 \xA0 Cable TV}}}{\\row{\\but{D}{T}}{\\str{\xA0 \xA0 Gas}}}}}',
                                                answer: '\\chart{}{5}{5}{["Student","Phone","Internet","Cable TV","Gas","Sam","41","16","40","69","Jerry","64","60","59","65","Maribel","94","67","67","99","Yvonne","41","69","34","113"]}',
                                                controls: {
                                                    "checkAnswer": true,
                                                    "help": true
                                                }
                                            }]
                                        }]
                                    },
                                    {
                                        title: 'Charts and Bar Graphs',
                                        children: [{
                                           title: 'Main Answer',
                                           children: [{
                                                problem: '\\butgrp{\\rowgrp{\\row{\\str{Answer the following questions by using the chart to the right.}}}{\\row{\\str{\xA0}}}{\\row{\\str{Question 3:  Which service given in these four choices is the least expensive for the four students all together?}}}{\\row{\\str{\xA0}}}{\\row{\\but{A}{F}}{\\str{\xA0 \xA0 Phone}}}{\\row{\\but{B}{F}}{\\str{\xA0 \xA0 Internet}}}{\\row{\\but{C}{T}}{\\str{\xA0 \xA0 Cable TV}}}{\\row{\\but{D}{F}}{\\str{\xA0 \xA0 Gas}}}}}',
                                                answer: '\\chart{}{5}{5}{["Student","Phone","Internet","Cable TV","Gas","Sam","41","16","40","69","Jerry","64","60","59","65","Maribel","94","67","67","99","Yvonne","41","69","34","113"]}',
                                                controls: {
                                                    "checkAnswer": true,
                                                    "help": true
                                                }
                                            }]
                                        }]
                                    },
                                    {
                                        title: 'Charts and Bar Graphs',
                                        children: [{
                                            title: 'Main Answer',
                                            children: [{
                                                problem: '\\butgrp{\\rowgrp{\\row{\\str{What is the label for the vertical axis?}}}{\\row{\\str{\xA0}}}{\\row{\\str{\xA0}}}{\\row{\\but{A}{F}}{\\css{\\str{Employee Classification}}{button-label-margin}}}{\\row{\\but{B}{F}}{\\css{\\str{Hourly Wages for Employees}}{button-label-margin}}}{\\row{\\but{C}{T}}{\\css{\\str{Hourly Wage}}{button-label-margin}}}{\\row{\\but{D}{F}}{\\css{\\str{Hourly Wages at Budget Warehouse}}{button-label-margin}}}}}',
                                                answer: '\\graph{Hourly Wages at Budget Warehouse}{[ ["A", 6], ["B", 7], ["C", 12], ["D", 15], ["E", 22], ["Manager", 27] ]}{30}{Hourly Wage}',
                                                controls: {
                                                    "checkAnswer": true,
                                                    "help": true
                                                }
                                            }]
                                        }]
                                    },
									{
                                        title: 'Charts and Bar Graphs',
                                        children: [{
                                            title: 'Main Answer',
                                            children: [{
                                                problem: '\\butgrp{\\rowgrp{\\row{\\str{Approximately how much more money per hour does a Class E worker make than Class A worker?}}}{\\row{\\str{\xA0}}}{\\row{\\str{\xA0}}}{\\row{\\but{A}{F}}{\\css{\\str{$20.00 more}}{button-label-margin}}}{\\row{\\but{B}{T}}{\\css{\\str{$16.00 more}}{button-label-margin}}}{\\row{\\but{C}{F}}{\\css{\\str{$10.00 more}}{button-label-margin}}}{\\row{\\but{D}{F}}{\\css{\\str{$5.00 more}}{button-label-margin}}}}}',
                                                answer: '\\graph{Hourly Wages at Budget Warehouse}{[ ["A", 6], ["B", 7], ["C", 12], ["D", 15], ["E", 22], ["Manager", 27] ]}{30}{Hourly Wage}',
                                                controls: {
                                                    "checkAnswer": true,
                                                    "help": true
                                                }
                                            }]
                                        }]
                                    },
									{
                                        title: 'Charts and Bar Graphs',
                                        children: [{
                                            title: 'Main Answer',
                                            children: [{
                                                problem: '\\butgrp{\\rowgrp{\\row{\\str{If there are 100 Class A workers, 50 class B workers, 30 class C workers, 10 class D workers, 5 class E workers, and 2 managers, how many employees earn $15 an hour or more?}}}{\\row{\\str{\xA0}}}{\\row{\\str{\xA0}}}{\\row{\\but{A}{F}}{\\css{\\str{7 employees}}{button-label-margin}}}{\\row{\\but{B}{F}}{\\css{\\str{15 employees}}{button-label-margin}}}{\\row{\\but{C}{T}}{\\css{\\str{17 employees}}{button-label-margin}}}{\\row{\\but{D}{F}}{\\css{\\str{180 employees}}{button-label-margin}}}}}',
                                                answer: '\\graph{Hourly Wages at Budget Warehouse}{[ ["A", 6], ["B", 7], ["C", 12], ["D", 15], ["E", 22], ["Manager", 27] ]}{30}{Hourly Wage}',
                                                controls: {
                                                    "checkAnswer": true,
                                                    "help": true
                                                }
                                            }]
                                        }]
                                    },
									{
                                        title: 'Charts and Bar Graphs',
                                        children: [{
                                            title: 'Main Answer',
                                            children: [{
                                                problem: '\\butgrp{\\rowgrp{\\row{\\str{What is the label for the vertical axis?}}}{\\row{\\str{\xA0}}}{\\row{\\str{\xA0}}}{\\row{\\but{A}{F}}{\\css{\\str{Months}}{button-label-margin}}}{\\row{\\but{B}{F}}{\\css{\\str{Deer Survey in Sonoma County}}{button-label-margin}}}{\\row{\\but{C}{F}}{\\css{\\str{Deer Population}}{button-label-margin}}}{\\row{\\but{D}{T}}{\\css{\\str{Number of Deer Counted}}{button-label-margin}}}}}',
                                                answer: '\\graph{Deer Survey in Sonoma County}{[ ["January", 220], ["April", 370], ["July", 445], ["October", 300]]}{500}{Number of Deer Counted}',
                                                controls: {
                                                    "checkAnswer": true,
                                                    "help": true
                                                }
                                            }]
                                        }]
                                    },
									{
                                        title: 'Charts and Bar Graphs',
                                        children: [{
                                            title: 'Main Answer',
                                            children: [{
                                                problem: '\\butgrp{\\rowgrp{\\row{\\str{Approximately how many deer were counted in July?}}}{\\row{\\str{\xA0}}}{\\row{\\str{\xA0}}}{\\row{\\but{A}{T}}{\\css{\\str{445 Deer}}{button-label-margin}}}{\\row{\\but{B}{F}}{\\css{\\str{380 Deer}}{button-label-margin}}}{\\row{\\but{C}{F}}{\\css{\\str{410 Deer}}{button-label-margin}}}{\\row{\\but{D}{F}}{\\css{\\str{300 Deer}}{button-label-margin}}}}}',
                                                answer: '\\graph{Deer Survey in Sonoma County}{[ ["January", 220], ["April", 370], ["July", 445], ["October", 300]]}{500}{Number of Deer Counted}',
                                                controls: {
                                                    "checkAnswer": true,
                                                    "help": true
                                                }
                                            }]
                                        }]
                                    },
									{
                                        title: 'Charts and Bar Graphs',
                                        children: [{
                                            title: 'Main Answer',
                                            children: [{
                                                problem: '\\butgrp{\\rowgrp{\\row{\\str{Approximately how many deer were counted in the first two months of the survey (January and April)?}}}{\\row{\\str{\xA0}}}{\\row{\\str{\xA0}}}{\\row{\\but{A}{F}}{\\css{\\str{450 Deer}}{button-label-margin}}}{\\row{\\but{B}{F}}{\\css{\\str{680 Deer}}{button-label-margin}}}{\\row{\\but{C}{T}}{\\css{\\str{590 Deer}}{button-label-margin}}}{\\row{\\but{D}{F}}{\\css{\\str{500 Deer}}{button-label-margin}}}}}',
                                                answer: '\\graph{Deer Survey in Sonoma County}{[ ["January", 220], ["April", 370], ["July", 445], ["October", 300]]}{500}{Number of Deer Counted}',
                                                controls: {
                                                    "checkAnswer": true,
                                                    "help": true
                                                }
                                            }]
                                        }]
                                    },
									{
                                        title: 'Charts and Bar Graphs',
                                        children: [{
                                            title: 'Main Answer',
                                            children: [{
                                                problem: '\\butgrp{\\rowgrp{\\row{\\str{Question 1: What is the increment for the horizontal axis?}}}{\\row{\\str{\xA0}}}{\\row{\\str{\xA0}}}{\\row{\\but{A}{F}}{\\css{\\str{20 years}}{button-label-margin}}}{\\row{\\but{B}{F}}{\\css{\\str{10 years}}{button-label-margin}}}{\\row{\\but{C}{F}}{\\css{\\str{10 million}}{button-label-margin}}}{\\row{\\but{D}{T}}{\\css{\\str{5 million}}{button-label-margin}}}}}',
                                                answer: '\\horgraph{Country A:  Food Production and Population}{[[0, "1965"], [2, "1965"], null, [0, "1985"], [3, "1985"], null, [0, "2005"], [11, "2005"], null, [0, "2025"],[22, "2025"]]}{Population of Country A}{[[0, "1962"], [3, "1962"], null, [0, "1982"], [5, "1982"], null, [0, "2002"], [9, "2002"], null, [0, "2022"],[18, "2022"]]}{Population Country A can Feed}{Years}{Number (in millions)}',
                                                controls: {
                                                    "checkAnswer": true,
                                                    "help": true
                                                }
                                            }]
                                        }]
                                    },
									{
                                        title: 'Charts and Bar Graphs',
                                        children: [{
                                            title: 'Main Answer',
                                            children: [{
                                                problem: '\\butgrp{\\rowgrp{\\row{\\str{Question 2:  Approximately what number represents the population of Country A in 2005?}}}{\\row{\\str{\xA0}}}{\\row{\\str{\xA0}}}{\\row{\\but{A}{F}}{\\css{\\str{22 million}}{button-label-margin}}}{\\row{\\but{B}{F}}{\\css{\\str{18 million}}{button-label-margin}}}{\\row{\\but{C}{T}}{\\css{\\str{11 million}}{button-label-margin}}}{\\row{\\but{D}{F}}{\\css{\\str{9 million}}{button-label-margin}}}}}',
                                                answer: '\\horgraph{Country A:  Food Production and Population}{[[0, "1965"], [2, "1965"], null, [0, "1985"], [3, "1985"], null, [0, "2005"], [11, "2005"], null, [0, "2025"],[22, "2025"]]}{Population of Country A}{[[0, "1962"], [3, "1962"], null, [0, "1982"], [5, "1982"], null, [0, "2002"], [9, "2002"], null, [0, "2022"],[18, "2022"]]}{Population Country A can Feed}{Years}{Number (in millions)}',
                                                controls: {
                                                    "checkAnswer": true,
                                                    "help": true
                                                }
                                            }]
                                        }]
                                    },
									{
                                        title: 'Charts and Bar Graphs',
                                        children: [{
                                            title: 'Main Answer',
                                            children: [{
                                                problem: '\\butgrp{\\rowgrp{\\row{\\str{Question 3: Approximately what number represents the increase in population from 1965 to 1985?}}}{\\row{\\str{\xA0}}}{\\row{\\str{\xA0}}}{\\row{\\but{A}{F}}{\\css{\\str{2 million}}{button-label-margin}}}{\\row{\\but{B}{F}}{\\css{\\str{3 million}}{button-label-margin}}}{\\row{\\but{C}{F}}{\\css{\\str{4 million}}{button-label-margin}}}{\\row{\\but{D}{T}}{\\css{\\str{1 million}}{button-label-margin}}}}}',
                                                answer: '\\horgraph{Country A:  Food Production and Population}{[[0, "1965"], [2, "1965"], null, [0, "1985"], [3, "1985"], null, [0, "2005"], [11, "2005"], null, [0, "2025"],[22, "2025"]]}{Population of Country A}{[[0, "1962"], [3, "1962"], null, [0, "1982"], [5, "1982"], null, [0, "2002"], [9, "2002"], null, [0, "2022"],[18, "2022"]]}{Population Country A can Feed}{Years}{Number (in millions)}',
                                                controls: {
                                                    "checkAnswer": true,
                                                    "help": true
                                                }
                                            }]
                                        }]
                                    },
                                ]
                            },
                            {
                                title: '3.1 Multiply Whole Numbers',
                                path: '3.1-multiply-whole-numbers',
                                children: [
                                    {
										title: 'Multiply Whole Numbers',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\rowgrp{\\row{\\str{Find the product of the whole numbers:}}}{\\row{\\str{\xA0}}}{\\row{\\multiplywholes{math}{partial}{839}{3}}}',
												answer: '\\input{2517}',
												controls: {
													"checkAnswer": true,
													"help": '\\multiplywholes{math}{complete}{839}{3}'
												}
											}]
										}]
									},
									{
										title: 'Multiply Whole Numbers',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\rowgrp{\\row{\\str{Find the product of the whole numbers:}}}{\\row{\\str{\xA0}}}{\\row{\\multiplywholes{math}{partial}{596}{6}}}',
												answer: '\\input{3576}',
												controls: {
													"checkAnswer": true,
													"help": '\\rowgrp{\\row{\\multiplywholes{math}{complete}{596}{6}'
												}
											}]
										}]
									},
									{
										title: 'Multiply Whole Numbers',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\rowgrp{\\row{\\str{Find the product of the whole numbers:}}}{\\row{\\str{\xA0}}}{\\row{\\multiplywholes{english}{partial}{6453}{4}}}',
												answer: '\\input{25812}',
												controls: {
													"checkAnswer": true,
													"help": '\\rowgrp{\\row{\\multiplywholes{math}{complete}{6453}{4}'
												}
											}]
										}]
									},
									{
										title: 'Multiply Whole Numbers',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\rowgrp{\\row{\\str{Find the product of the whole numbers:}}}{\\row{\\str{\xA0}}}{\\row{\\multiplywholes{math}{partial}{4049}{7}}}',
												answer: '\\input{28343}',
												controls: {
													"checkAnswer": true,
													"help": '\\rowgrp{\\row{\\multiplywholes{math}{complete}{4049}{7}'												}
											}]
										}]
									},
									{
										title: 'Multiply Whole Numbers',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\rowgrp{\\row{\\str{Find the product of the whole numbers:}}}{\\row{\\str{\xA0}}}{\\row{\\multiplywholes{math}{partial}{97}{74}}}',
												answer: '\\input{7178}',
												controls: {
													"checkAnswer": true,
													"help": '\\rowgrp{\\row{\\multiplywholes{math}{complete}{97}{74}'
												}
											}]
										}]
									},
									{
										title: 'Multiply Whole Numbers',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\rowgrp{\\row{\\str{Find the product of the whole numbers:}}}{\\row{\\str{\xA0}}}{\\row{\\multiplywholes{english}{partial}{34}{29}}}',
												answer: '\\input{986}',
												controls: {
													"checkAnswer": true,
													"help": '\\rowgrp{\\row{\\multiplywholes{math}{complete}{34}{29}'
												}
											}]
										}]
									},
									{
										title: 'Multiply Whole Numbers',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\rowgrp{\\row{\\str{Find the product of the whole numbers:}}}{\\row{\\str{\xA0}}}{\\row{\\multiplywholes{math}{partial}{645}{90}}}',
												answer: '\\input{58050}',
												controls: {
													"checkAnswer": true,
													"help": '\\rowgrp{\\row{\\multiplywholes{math}{complete}{645}{90}'
												}
											}]
										}]
									},
									{
										title: 'Multiply Whole Numbers',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\rowgrp{\\row{\\str{Find the product of the whole numbers:}}}{\\row{\\str{\xA0}}}{\\row{\\multiplywholes{math}{partial}{374}{29}}}',
												answer: '\\input{10846}',
												controls: {
													"checkAnswer": true,
													"help": '\\rowgrp{\\row{\\multiplywholes{math}{complete}{374}{29}'
												}
											}]
										}]
									},
									{
										title: 'Multiply Whole Numbers',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\rowgrp{\\row{\\str{Find the product of the whole numbers:}}}{\\row{\\str{\xA0}}}{\\row{\\multiplywholes{english}{partial}{300}{356}}}',
												answer: '\\input{106800}',
												controls: {
													"checkAnswer": true,
													"help": '\\rowgrp{\\row{\\multiplywholes{math}{complete}{300}{356}'
												}
											}]
										}]
									},
									{
										title: 'Multiply Whole Numbers',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\rowgrp{\\row{\\str{Find the product of the whole numbers:}}}{\\row{\\str{\xA0}}}{\\row{\\multiplywholes{math}{partial}{508}{602}}}',
												answer: '\\input{305}',
												controls: {
													"checkAnswer": true,
													"help": '\\rowgrp{\\row{\\multiplywholes{math}{complete}{508}{602}'
                                                }
                                            }]
                                        }]
                                    }
                                ]
                            },
// 3.2 Divide Whole Numbers                           
                            {
                                title: '3.2 Divide Whole Numbers',
                                path: '3.2-divide-whole-numbers',
                                children: [
                                    {
                                        title: 'Divide Whole Numbers',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\html{How many times does 5 go into 9308?<br><br>Set up the division problem by placing the<br>dividend and the divisor in the proper places.}',
												answer: '\\css{\\divwholes{\\input{5}}{\\input{9308}}}{divwhole}',
												controls: {
													"checkAnswer": true,
													"help": false,
                                                    "workbook": true
												}
											}]
										}, {
                                            title: 'Workbook',
                                            children: [{
                                                problem: '\\str{Place the dividend and divisor in the proper places for the problem "9308 divided by 5"}',
                                                answer: '\\css{\\divwholes{\\select{5}{[5,9308]}}{\\select{9308}{[5,9308]}}}{divwhole}',
                                                controls: {
                                                    "checkAnswer": true,
                                                    "help": true
                                                }
                                            }]
										}]
									},
									{
                                        title: 'Divide Whole Numbers',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\html{Find the quotient of 3239 and 3.<br><br>Set up the division problem by placing the<br>dividend and the divisor in the proper places.}',
												answer: '\\css{\\divwholes{\\input{3}}{\\input{3239}}}{divwhole}',
												controls: {
													"checkAnswer": true,
													"help": false,
                                                    "workbook": true
												}
											}]
										}, {
                                            title: 'Workbook',
                                            children: [{
                                                problem: '\\str{Place the dividend and divisor in the proper places for the problem "3239 divided by 3"}',
                                                answer: '\\css{\\divwholes{\\select{3}{[3,3239]}}{\\select{3239}{[3,3239]}}}{divwhole}',
                                                controls: {
                                                    "checkAnswer": true,
                                                    "help": true
                                                }
                                            }]
                                        }]
									},
									{
                                        title: 'Divide Whole Numbers',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\html{Solve: x/y.<br><br>Set up the division problem by placing the<br>dividend and the divisor in the proper places.}',
												answer: '\\css{\\divwholes{\\input{y}}{\\input{x}}}{divwhole}',
												controls: {
													"checkAnswer": true,
													"help": false,
                                                    "workbook": true
												}
											}]
										}, {
                                            title: 'Workbook',
                                            children: [{
                                                problem: '\\str{Place the dividend and divisor in the proper places for the problem "x divided by y"}',
                                                answer: '\\css{\\divwholes{\\select{"x"}{["x","y"]}}{\\select{"y"}{["x","y"]}}}{divwhole}',
                                                controls: {
                                                    "checkAnswer": true,
                                                    "help": true
                                                }
                                            }]
                                        }]
									},
									{
                                        title: 'Divide Whole Numbers',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\html{How many times does 5 go into 7916?<br><br>Set up the division problem by placing the<br>dividend and the divisor in the proper places.}',
												answer: '\\css{\\divwholes{\\input{5}}{\\input{7916}}}{divwhole}',
												controls: {
													"checkAnswer": true,
													"help": false,
                                                    "workbook": true
												}
											}]
										}, {
                                            title: 'Workbook',
                                            children: [{
                                                problem: '\\str{Place the dividend and divisor in the proper places for the problem "7916 divided by 5"}',
                                                answer: '\\css{\\divwholes{\\select{5}{[5,7916]}}{\\select{7916}{[5,7916]}}}{divwhole}',
                                                controls: {
                                                    "checkAnswer": true,
                                                    "help": true
                                                }
                                            }]
                                        }]
									},
									{
                                        title: 'Divide Whole Numbers',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\html{How many times does 6 go into 2855?<br><br>Set up the division problem by placing the<br>dividend and the divisor in the proper places.}',
												answer: '\\css{\\divwholes{\\input{6}}{\\input{2855}}}{divwhole}',
												controls: {
													"checkAnswer": true,
													"help": false,
                                                    "workbook": true
												}
											}]
										}, {
                                            title: 'Workbook',
                                            children: [{
                                                problem: '\\str{Place the dividend and divisor in the proper places for the problem "2855 divided by 6"}',
                                                answer: '\\css{\\divwholes{\\select{6}{[6,2855]}}{\\select{2855}{[6,2855]}}}{divwhole}',
                                                controls: {
                                                    "checkAnswer": true,
                                                    "help": true
                                                }
                                            }]
                                        }]
									},
									{
                                        title: 'Divide Whole Numbers',
										children: [{
											title: 'Main Answer',
											children: [{
                                                problem: '\\html{Find the quotient of 6744 and 7.<br><br>Solve the problem.}',
												answer: '\\css{\\grp{\\input{6744}}{\\str{quotient}}{\\input{7}}{\\str{remainder}}}{divwhole}',
												controls: {
													"checkAnswer": true,
													"help": false,
                                                    "workbook": true
												}
											}]
										}, {
                                            title: 'Workbook',
                                            children: [{
                                                problem: '\\str{Place the dividend and divisor in the proper places for the problem "6744 divided by 7"}',
                                                answer: '\\css{\\divwholes{\\input{7}}{\\input{6744}}}{divwhole}',
                                                controls: {
                                                    "checkAnswer": true,
                                                    "help": true
                                                }
                                            }, {
                                                problem: '\\str{Click on the right-most digit of the number you would like to divide into.}',
                                                answer: '\\css{\\divwholes{\\str{7}}{\\butgrp{\\row{\\but{6}{F}}{\\but{7}{T}}{\\but{4}{F}}{\\but{4}{F}}}}}{divwhole}',
                                                controls: {
                                                    "checkAnswer": true,
                                                    "help": true
                                                }
                                            }, {
                                                problem: '\\str{Divide 6744 by 7}',
                                                answer: '\\longdiv{6744}{7}',
                                                controls: {
                                                    "checkAnswer": true,
                                                    "help": true
                                                }
                                            }]
										}]
									},
                                    {
                                        title: 'Divide Whole Numbers',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\html{Solve: 8306/7.<br><br>Solve the problem.}',
												answer: '\\css{\\grp{\\input{1186}}{\\str{quotient}}{\\input{4}}{\\str{remainder}}}{divwhole}',
												controls: {
													"checkAnswer": true,
													"help": false,
                                                    "workbook": true
												}
											}]
										}, {
                                            title: 'Workbook',
                                            children: [{
                                                problem: '\\str{Place the dividend and divisor in the proper places for the problem "8306 divided by 7"}',
                                                answer: '\\css{\\divwholes{\\input{7}}{\\input{8306}}}{divwhole}',
                                                controls: {
                                                    "checkAnswer": true,
                                                    "help": true
                                                }
                                            }, {
                                                problem: '\\str{Click on the right-most digit of the number you would like to divide into.}',
                                                answer: '\\css{\\divwholes{\\str{7}}{\\butgrp{\\row{\\but{8}{T}}{\\but{3}{F}}{\\but{0}{F}}{\\but{6}{F}}}}}{divwhole}',
                                                controls: {
                                                    "checkAnswer": true,
                                                    "help": true
                                                }
                                            }, {
                                                problem: '\\str{Divide 8306 by 7}',
                                                answer: '\\longdiv{8306}{7}',
                                                controls: {
                                                    "checkAnswer": true,
                                                    "help": true
                                                }
                                            }]
    									}]
									},
                                    {
                                        title: 'Divide Whole Numbers',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\html{Solve: 3027/3.<br><br>Solve the problem.}',
												answer: '\\css{\\grp{\\input{1009}}{\\str{quotient}}{\\input{0}}{\\str{remainder}}}{divwhole}',
												controls: {
													"checkAnswer": true,
													"help": false,
                                                    "workbook": true
												}
											}]
										}, {
                                            title: 'Workbook',
                                            children: [{
                                                problem: '\\str{Place the dividend and divisor in the proper places for the problem "3027 divided by 3"}',
                                                answer: '\\css{\\divwholes{\\input{3}}{\\input{3027}}}{divwhole}',
                                                controls: {
                                                    "checkAnswer": true,
                                                    "help": true
                                                }
                                            }, {
                                                problem: '\\str{Click on the right-most digit of the number you would like to divide into.}',
                                                answer: '\\css{\\divwholes{\\str{3}}{\\butgrp{\\row{\\but{3}{T}}{\\but{0}{F}}{\\but{2}{F}}{\\but{7}{F}}}}}{divwhole}',
                                                controls: {
                                                    "checkAnswer": true,
                                                    "help": true
                                                }
                                            }, {
                                                problem: '\\str{Divide 3027 by 3}',
                                                answer: '\\longdiv{3027}{3}',
                                                controls: {
                                                    "checkAnswer": true,
                                                    "help": true
                                                }
                                            }]
                                        }]
									},
                                    {
                                        title: 'Divide Whole Numbers',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\html{Find the quotient of 1828 and 6.<br><br>Solve the problem.}',
												answer: '\\css{\\grp{\\input{304}}{\\str{quotient}}{\\input{4}}{\\str{remainder}}}{divwhole}',
												controls: {
													"checkAnswer": true,
													"help": false,
                                                    "workbook": true
												}
											}]
										}, {
                                            title: 'Workbook',
                                            children: [{
                                                problem: '\\str{Place the dividend and divisor in the proper places for the problem "1828 divided by 6"}',
                                                answer: '\\css{\\divwholes{\\input{6}}{\\input{1828}}}{divwhole}',
                                                controls: {
                                                    "checkAnswer": true,
                                                    "help": true
                                                }
                                            }, {
                                                problem: '\\str{Click on the right-most digit of the number you would like to divide into.}',
                                                answer: '\\css{\\divwholes{\\str{6}}{\\butgrp{\\row{\\but{1}{F}}{\\but{8}{T}}{\\but{2}{F}}{\\but{8}{F}}}}}{divwhole}',
                                                controls: {
                                                    "checkAnswer": true,
                                                    "help": true
                                                }
                                            }, {
                                                problem: '\\str{Divide 1828 by 6}',
                                                answer: '\\longdiv{1828}{6}',
                                                controls: {
                                                    "checkAnswer": true,
                                                    "help": true
                                                }
                                            }]
                                        }]
									},
                                    {
                                        title: 'Divide Whole Numbers',//////////10
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\html{How many times does 3 go into 9381?<br><br>Solve the problem.}',
												answer: '\\css{\\grp{\\input{3127}}{\\str{quotient}}{\\input{0}}{\\str{remainder}}}{divwhole}',
												controls: {
													"checkAnswer": true,
													"help": false,
                                                    "workbook": true
												}
											}]
										}]
									},
                                    {
                                        title: 'Divide Whole Numbers',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\html{How many times does 23 go into 18300?<br><br>Solve the problem.}',
												answer: '\\css{\\grp{\\input{795}}{\\str{quotient}}{\\input{15}}{\\str{remainder}}}{divwhole}',
												controls: {
													"checkAnswer": true,
													"help": false,
                                                    "workbook": true
												}
											}]
										}]
									},
                                    {
                                        title: 'Divide Whole Numbers',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\html{Solve: 8293/52.<br><br>Solve the problem.}',
												answer: '\\css{\\grp{\\input{159}}{\\str{quotient}}{\\input{25}}{\\str{remainder}}}{divwhole}',
												controls: {
													"checkAnswer": true,
													"help": false,
                                                    "workbook": true
												}
											}]
										}]
									},
                                    {
                                        title: 'Divide Whole Numbers',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\html{Find the quotient of 2110 and 69.<br><br>Solve the problem.}',
												answer: '\\css{\\grp{\\input{30}}{\\str{quotient}}{\\input{40}}{\\str{remainder}}}{divwhole}',
												controls: {
													"checkAnswer": true,
													"help": false,
                                                    "workbook": true
												}
											}]
										}]
									},
                                    {
                                        title: 'Divide Whole Numbers',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\html{How many times does 72 go into 63052?<br><br>Solve the problem.}',
												answer: '\\css{\\grp{\\input{875}}{\\str{quotient}}{\\input{52}}{\\str{remainder}}}{divwhole}',
												controls: {
													"checkAnswer": true,
													"help": false,
                                                    "workbook": true
												}
											}]
										}]
									},
                                    {
                                        title: 'Divide Whole Numbers',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\html{Solve: 82292/905.<br><br>Solve the problem.}',
												answer: '\\css{\\grp{\\input{90}}{\\str{quotient}}{\\input{842}}{\\str{remainder}}}{divwhole}',
												controls: {
													"checkAnswer": true,
													"help": false,
                                                    "workbook": true
												}
											}]
										}]
									},
                                ]
                            },
// 4.1 Mean, Median, Mode                     
                            {
                                title: '4.1 Mean, Median, Mode',
                                path: '4.1-mean-median-mode',
                                children: [
                                    {
                                        title: 'Mean, Median, or Mode',
                                        children: [{
                                            title: 'Main Answer',
                                                children: [{
                                                problem: '\\html{Determine the average for these values:<br>127, 76, 22, 28, 32.}',
                                                answer: '\\input{57}',
                                                controls: {
                                                    "checkAnswer": true,
                                                    "help": '\\html{Solution<br><br>(127 + 76 + 22 + 28 + 32) ÷ 5 = 57}'
                                                }
                                            }]
                                        }]
                                    },
                                    {
                                        title: 'Mean, Median, or Mode',
                                        children: [{
                                            title: 'Main Answer',
                                                children: [{
                                                problem: '\\html{Determine the average for these values:<br>93, 60, 30, 33.}',
                                                answer: '\\input{54}',
                                                controls: {
                                                    "checkAnswer": true,
                                                    "help": '\\html{Solution<br><br>(93 + 60 + 30 + 33) ÷ 4 = 54}'
                                                }
                                            }]
                                        }]
                                    },
                                    {
                                        title: 'Mean, Median, or Mode',
                                        children: [{
                                            title: 'Main Answer',
                                                children: [{
                                                problem: '\\html{Determine the average for these values:<br>118, 16, 52.}',
                                                answer: '\\input{62}',
                                                controls: {
                                                    "checkAnswer": true,
                                                    "help": '\\html{Solution<br><br>(118 + 16 + 52) ÷ 3 = 62}'
                                                }
                                            }]
                                        }]
                                    },
                                    {
                                        title: 'Mean, Median, or Mode',
                                        children: [{
                                            title: 'Main Answer',
                                                children: [{
                                                problem: '\\html{Determine the median for these values:<br>458, 229, 310, 728, 661, 342.}',
                                                answer: '\\input{400}',
                                                controls: {
                                                    "checkAnswer": true,
                                                    "help": '\\html{Solution<br><br>229 310 342 458 661 728<br><br>Sort the numbers in ascending order. Then select the middle number. If there are two middle numbers, take their average. The average of 342 and 458 is 400.}'
                                                }
                                            }]
                                        }]
                                    },
                                    {
                                        title: 'Mean, Median, or Mode',
                                        children: [{
                                            title: 'Main Answer',
                                                children: [{
                                                problem: '\\html{Determine the median for these values:<br>714, 689, 639, 589, 533.}',
                                                answer: '\\input{639}',
                                                controls: {
                                                    "checkAnswer": true,
                                                    "help": '\\css{\\html{Solution<br><br>533 589 <span class=red>639</span> 689 714<br><br>Sort the numbers in ascending order. Then select the middle number. If there are two middle numbers, take their average.}}{help_4-1}'
                                                }
                                            }]
                                        }]
                                    },     
                                    {
                                        title: 'Mean, Median, or Mode',
                                        children: [{
                                            title: 'Main Answer',
                                                children: [{
                                                problem: '\\html{Determine the median for these values:<br>118, 333, 690, 417.}',
                                                answer: '\\input{375}',
                                                controls: {
                                                    "checkAnswer": true,
                                                    "help": '\\html{Solution<br><br>118 333 417 690<br><br>Sort the numbers in ascending order. Then select the middle number. If there are two middle numbers, take their average. The average of 333 and 417 is 375.}'
                                                }
                                            }]
                                        }]
                                    },
                                    {
                                        title: 'Mean, Median, or Mode',
                                        children: [{
                                            title: 'Main Answer',
                                                children: [{
                                                problem: '\\html{Determine the mode(s) for these values:<br>465, 465, 534, 557, 557.<br><br>If the numbers have no mode, enter "none".<br>If there is more than one mode, enter them in ascending order.}',
                                                answer: '\\css{grp{\\input{465}}{\\input{557}}}{mode}',
                                                controls: {
                                                    "checkAnswer": true,
                                                    "help": '\\css{\\html{Solution<br><br><span class=red>465 465</span> 534 <span class=red>557 557</span><br><br>Sort the numbers in ascending order. Then select the number or numbers that appear most frequently.The mode is: 465 & 557.}}{help_4-1}'
                                                }
                                            }]
                                        }]
                                    },
                                    {
                                        title: 'Mean, Median, or Mode',
                                        children: [{
                                            title: 'Main Answer',
                                                children: [{
                                                problem: '\\html{Determine the mode(s) for these values:<br>294, 406, 200, 564.<br><br>If the numbers have no mode, enter "none". If there is more than one mode, enter them in ascending order.}',
                                                answer: '\\input{none}',
                                                controls: {
                                                    "checkAnswer": true,
                                                    "help": '\\html{Solution<br><br>200 294 406 564<br><br>Sort the numbers in ascending order. Then select the number or numbers that appear most frequently.The mode is: none because no numbers appear more than once.}'
                                                }
                                            }]
                                        }]
                                    },
                                    {
                                        title: 'Mean, Median, or Mode',
                                        children: [{
                                            title: 'Main Answer',
                                                children: [{
                                                problem: '\\html{Determine the mode(s) for these values:<br>540, 540, 439, 41, 259, 690.<br><br>If the numbers have no mode, enter "none". If there is more than one mode, enter them in ascending order.}',
                                                answer: '\\input{540}',
                                                controls: {
                                                    "checkAnswer": true,
                                                    "help": '\\css{\\html{Solution<br><br>41 259 439 <span class=red>540 540</span> 690<br><br>Sort the numbers in ascending order. Then select the number or numbers that appear most frequently.The mode is: 540.}}{help_4-1}'
                                                }
                                            }]
                                        }]
                                    },
                                    {
                                        title: 'Mean, Median, or Mode',
                                        children: [{
                                            title: 'Main Answer',
                                                children: [{
                                                problem: '\\html{Determine the median for these values:<br>409, 434, 416, 129, 550, 448.}',
                                                answer: '\\input{425}',
                                                controls: {
                                                    "checkAnswer": true,
                                                    "help": '\\html{Solution<br><br>129 409 416 434 448 550<br><br>Sort the numbers in ascending order. Then select the middle number. If there are two middle numbers, take their average. The average of 416 and 434 is 425.}'
                                                }
                                            }]
                                        }]
                                    },
                                    {
                                        title: 'Mean, Median, or Mode',
                                        children: [{
                                            title: 'Main Answer',
                                                children: [{
                                                problem: '\\html{Determine the mode(s) for these values:<br>400, 400, 319, 438, 398.<br><br>If the numbers have no mode, enter "none". If there is more than one mode, enter them in ascending order.}',
                                                answer: '\\input{400}',
                                                controls: {
                                                    "checkAnswer": true,
                                                    "help": '\\css{\\html{Solution<br><br>319 398 <span class=red>400 400</span> 438<br><br>Sort the numbers in ascending order. Then select the number or numbers that appear most frequently.The mode is: 400.}}{help_4-1}'
                                                }
                                            }]
                                        }]
                                    },
                                    {
                                        title: 'Mean, Median, or Mode',
                                        children: [{
                                            title: 'Main Answer',
                                                children: [{
                                                problem: '\\html{Determine the average for these values:<br><br>61, 121, 14, 28.}',
                                                answer: '\\input{56}',
                                                controls: {
                                                    "checkAnswer": true,
                                                    "help": '\\html{Solution<br><br>(61 + 121 + 14 + 28) ÷ 4 = 56}'
                                                }
                                            }]
                                        }]
                                    },
                                    {
                                        title: 'Mean, Median, or Mode',
                                        children: [{
                                            title: 'Main Answer',
                                                children: [{
                                                problem: '\\html{Determine the mode(s) for these values:<br>763, 115, 113, 119, 761, 763.<br><br>If the numbers have no mode, enter "none". If there is more than one mode, enter them in ascending order.}',
                                                answer: '\\input{763}',
                                                controls: {
                                                    "checkAnswer": true,
                                                    "help": '\\css{\\html{Solution<br><br>113 115 119 761 <span class=red>763 763</span><br><br>Sort the numbers in ascending order. Then select the number or numbers that appear most frequently.The mode is: 763.}}{help_4-1}'
                                                }
                                            }]
                                        }]
                                    },
                                    {
                                        title: 'Mean, Median, or Mode',
                                        children: [{
                                            title: 'Main Answer',
                                                children: [{
                                                problem: '\\html{Determine the average for these values:<br><br>74, 96, 24, 14.}',
                                                answer: '\\input{52}',
                                                controls: {
                                                    "checkAnswer": true,
                                                    "help": '\\html{Solution<br>(74 + 96 + 24 + 14) ÷ 4 = 52}'
                                                }
                                            }]
                                        }]
                                    },
                                    {
                                        title: 'Mean, Median, or Mode',
                                        children: [{
                                            title: 'Main Answer',
                                                children: [{
                                                problem: '\\html{Determine the median for these values:<br>585, 358, 766, 528, 582.}',
                                                answer: '\\input{582}',
                                                controls: {
                                                    "checkAnswer": true,
                                                    "help": '\\css{\\html{Solution<br><br>358 528 <span class=red>582</span> 585 766<br><br>Sort the numbers in ascending order. Then select the middle number. If there are two middle numbers, take their average.}}{help_4-1}'
                                                }
                                            }]
                                        }]
                                    },
                                ]
                            },
// 4.2 Order Of Operations With Whole Numbers                    
                            {
                                title: '4.2 Order Of Operations With Whole Numbers',
                                path: '4.2-order-of-operations-with-whole-numbers',
                                children: [
                                    {
                                        title: 'Order Of Operations With Whole Numbers',
                                        children: [{
                                            title: 'Main Answer',
                                                children: [{
                                                problem: '\\str{Solve 7 * 2 + 4}',
                                                answer: '\\input{18}',
                                                controls: {
                                                    "checkAnswer": true,
                                                    "help": '\\str{7 * 2 + 4 = 18}'
                                                }
                                            }]
                                        }, {
                                            title: 'Workbook',
                                                children: [{
                                                problem: '\\str{Solve 7 * 2 + 4}',
                                                answer: '\\ordops{7 * 2 + 4}',
                                                controls: {
                                                    "checkAnswer": true,
                                                    "help": true
                                                }
                                            }]
                                        }]
                                    },
                                    {
                                        title: 'Order Of Operations With Whole Numbers',
                                        children: [{
                                            title: 'Main Answer',
                                                children: [{
                                                problem: '\\str{Solve (15 - 10) / 5}',
                                                answer: '\\input{1}',
                                                controls: {
                                                    "checkAnswer": true,
                                                    "help": '\\str{15 - 10 = 5 / 5 = 1}'
                                                }
                                            }]
                                        }, {
                                            title: 'Workbook',
                                                children: [{
                                                problem: '\\str{Solve (15 - 10) / 5}',
                                                answer: '\\ordops{(15 - 10) / 5}',
                                                controls: {
                                                    "checkAnswer": true,
                                                    "help": true
                                                }
                                            }]
                                        }]
                                    },
                                    {
                                        title: 'Order Of Operations With Whole Numbers',
                                        children: [{
                                            title: 'Main Answer',
                                                children: [{
                                                problem: '\\str{Solve 4 / 2 + 9}',
                                                answer: '\\input{11}',
                                                controls: {
                                                    "checkAnswer": true,
                                                    "help": '\\str{4 / 2 = 2 + 9 = 11}'
                                                }
                                            }]
                                        }, {
                                            title: 'Workbook',
                                                children: [{
                                                problem: '\\str{Solve 4 / 2 + 9}',
                                                answer: '\\ordops{4 / 2 + 9}',
                                                controls: {
                                                    "checkAnswer": true,
                                                    "help": true
                                                }
                                            }]
                                        }]
                                    },
                                    {
                                        title: 'Order Of Operations With Whole Numbers',
                                        children: [{
                                            title: 'Main Answer',
                                                children: [{
                                                problem: '\\str{Solve 6 - (6 / 3)}',
                                                answer: '\\input{4}',
                                                controls: {
                                                    "checkAnswer": true,
                                                    "help": '\\str{6 / 3 = 2.   6 - 2 = 4}'
                                                }
                                            }]
                                        }, {
                                            title: 'Workbook',
                                                children: [{
                                                problem: '\\str{Solve 6 - (6 / 3)}',
                                                answer: '\\ordops{6 - (6 / 3)}',
                                                controls: {
                                                    "checkAnswer": true,
                                                    "help": true
                                                }
                                            }]
                                        }]
                                    },
                                    {
                                        title: 'Order Of Operations With Whole Numbers',
                                        children: [{
                                            title: 'Main Answer',
                                                children: [{
                                                problem: '\\str{Solve 7 + 15 / 3}',
                                                answer: '\\input{12}',
                                                controls: {
                                                    "checkAnswer": true,
                                                    "help": '\\str{15 / 3 = 5.   7 + 5 = 12}'
                                                }
                                            }]
                                        }, {
                                            title: 'Workbook',
                                                children: [{
                                                problem: '\\str{Solve 7 + 15 / 3}',
                                                answer: '\\ordops{7 + 15 / 3}',
                                                controls: {
                                                    "checkAnswer": true,
                                                    "help": true
                                                }
                                            }]
                                        }]
                                    },
                                    {
                                        title: 'Order Of Operations With Whole Numbers',
                                        children: [{
                                            title: 'Main Answer',
                                                children: [{
                                                problem: '\\str{Solve 3 / (3 * 3 / 3)}',
                                                answer: '\\input{1}',
                                                controls: {
                                                    "checkAnswer": true,
                                                    "help": '\\str{3 * 3 = 9 / 3 = 3.  3 / 3 = 1}'
                                                }
                                            }]
                                        }, {
                                            title: 'Workbook',
                                                children: [{
                                                problem: '\\str{Solve 3 / (3 * 3 / 3)}',
                                                answer: '\\ordops{3 / (3 * 3 / 3)}',
                                                controls: {
                                                    "checkAnswer": true,
                                                    "help": true
                                                }
                                            }]
                                        }]
                                    },
                                    {
                                        title: 'Order Of Operations With Whole Numbers',
                                        children: [{
                                            title: 'Main Answer',
                                                children: [{
                                                problem: '\\str{Solve 15 - ((7 - 4) * 2)}',
                                                answer: '\\input{9}',
                                                controls: {
                                                    "checkAnswer": true,
                                                    "help": '\\str{7 - 4 = 3 * 2 = 6.   15 - 6 = 9}'
                                                }
                                            }]
                                        }, {
                                            title: 'Workbook',
                                                children: [{
                                                problem: '\\str{Solve 15 - ((7 - 4) * 2)}',
                                                answer: '\\ordops{15 - ((7 - 4) * 2)}',
                                                controls: {
                                                    "checkAnswer": true,
                                                    "help": true
                                                }
                                            }]
                                        }]
                                    },
                                    {
                                        title: 'Order Of Operations With Whole Numbers',
                                        children: [{
                                            title: 'Main Answer',
                                                children: [{
                                                problem: '\\str{Solve 15 - 8 * 2 / 4}',
                                                answer: '\\input{11}',
                                                controls: {
                                                    "checkAnswer": true,
                                                    "help": '\\str{11}'
                                                }
                                            }]
                                        }, {
                                            title: 'Workbook',
                                                children: [{
                                                problem: '\\str{Solve 15 - 8 * 2 / 4}',
                                                answer: '\\ordops{15 - 8 * 2 / 4}',
                                                controls: {
                                                    "checkAnswer": true,
                                                    "help": true
                                                }
                                            }]
                                        }]
                                    },
                                    {
                                        title: 'Order Of Operations With Whole Numbers',
                                        children: [{
                                            title: 'Main Answer',
                                                children: [{
                                                problem: '\\str{Solve (28 + 15 / 5) - (22 - 8)}',
                                                answer: '\\input{17}',
                                                controls: {
                                                    "checkAnswer": true,
                                                    "help": '\\str{17}'
                                                }
                                            }]
                                        }, {
                                            title: 'Workbook',
                                                children: [{
                                                problem: '\\str{Solve (28 + 15 / 5) - (22 - 8)}',
                                                answer: '\\ordops{(28 + 15 / 5) - (22 - 8)}',
                                                controls: {
                                                    "checkAnswer": true,
                                                    "help": true
                                                }
                                            }]
                                        }]
                                    },
                                    {
                                        title: 'Order Of Operations With Whole Numbers',
                                        children: [{
                                            title: 'Main Answer',
                                                children: [{
                                                problem: '\\str{Solve 27 / 9 + 6 * 8 - (10 + 25)}',
                                                answer: '\\input{16}',
                                                controls: {
                                                    "checkAnswer": true,
                                                    "help": '\\str{16}'
                                                }
                                            }]
                                        }, {
                                            title: 'Workbook',
                                                children: [{
                                                problem: '\\str{Solve 27 / 9 + 6 * 8 - (10 + 25)}',
                                                answer: '\\ordops{27 / 9 + 6 * 8 - (10 + 25)}',
                                                controls: {
                                                    "checkAnswer": true,
                                                    "help": true
                                                }
                                            }]
                                        }]
                                    },
                                ]
                            },
// 5.1 Using Divisibility Tests Using Divisibility Tests                            
                            {
                                title: '5.1 Using Divisibility Tests Using Divisibility Tests',
                                path: '5.1-using-divisibility-tests-using-divisibility-tests',
                                children: [
                                    {
                                        title: 'Divisibility Test on Whole Numbers',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\str{Is 39 divisible by 10?}',
												answer: '\\butgrp{\\row{\\but{YES}{F}}{\\but{NO}{T}}}',
												controls: {
													"checkAnswer": false,
													"help": '\\html{Solution<br><br>The number 10 divides evenly into any whole number which ends in a 0. Because 39 does not end with a 0, it is not divisible by 10.}'
												}
											}]
										}]
									},
									{
										title: 'Divisibility Test on Whole Numbers',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\str{Is 41 divisible by 10?}',
                                                answer: '\\butgrp{\\row{\\but{YES}{F}}{\\but{NO}{T}}}',
												controls: {
													"checkAnswer": false,
													"help": '\\html{Solution<br><br>The number 10 divides evenly into any whole number which ends in a 0. Because 41 does not end with a 0, it is not divisible by 10.}'
												}
											}]
										}]
									},
									{
										title: 'Divisibility Test on Whole Numbers',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\str{Is 9 divisible by 7?}',
                                                answer: '\\butgrp{\\row{\\but{YES}{F}}{\\but{NO}{T}}}',
												controls: {
													"checkAnswer": false,
													"help": '\\html{Solution<br><br>9 is not divisible by 7.}'
												}
											}]
										}]
									},
									{
										title: 'Divisibility Test on Whole Numbers',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\str{Is 173 divisible by 5?}',
                                                answer: '\\butgrp{\\row{\\but{YES}{F}}{\\but{NO}{T}}}',
												controls: {
													"checkAnswer": false,
													"help": '\\html{Solution<br><br>The number 5 divides evenly into any whole number which ends in a 5 or a 0. Because 173 does not end with a 0 or 5, it is not divisible by 5.}'
												}
											}]
										}]
									},
									{
										title: 'Divisibility Test on Whole Numbers',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\str{Is 28 divisible by 7?}',
                                                answer: '\\butgrp{\\row{\\but{YES}{T}}{\\but{NO}{F}}}',
                                                controls: {
													"checkAnswer": false,
													"help": '\\html{Solution<br><br>28 is divisible by 7.}'
												}
											}]
										}]
									},
									{
										title: 'Divisibility Test on Whole Numbers',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\str{Is 275 divisible by 3?}',
                                                answer: '\\butgrp{\\row{\\but{YES}{F}}{\\but{NO}{T}}}',
												controls: {
													"checkAnswer": false,
													"help": '\\html{Solution<br><br>The number 3 divides evenly into any whole number whose digits add up to a number divisible by 3. Because the digits of 275 add up to a number that is not divisible by 3, 275 is not divisible by 3.}'
												}
											}]
										}]
									},
									{
										title: 'Divisibility Test on Whole Numbers',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\str{Is 47 divisible by 3?}',
                                                answer: '\\butgrp{\\row{\\but{YES}{F}}{\\but{NO}{T}}}',
												controls: {
													"checkAnswer": false,
													"help": '\\html{Solution<br><br>The number 3 divides evenly into any whole number whose digits add up to a number divisible by 3. Because the digits of 47 add up to a number that is not divisible by 3, 47 is not divisible by 3.}'
												}
											}]
										}]
									},
									{
										title: 'Divisibility Test on Whole Numbers',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\str{Is 181 divisible by 5?}',
                                                answer: '\\butgrp{\\row{\\but{YES}{F}}{\\but{NO}{T}}}',
												controls: {
													"checkAnswer": false,
													"help": '\\html{Solution<br><br>The number 5 divides evenly into any whole number which ends in a 5 or a 0. Because 181 does not end with a 0 or 5, it is not divisible by 5.}'
												}
											}]
										}]
									},
									{
                                        title: 'Divisibility Test on Whole Numbers',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\str{Is 384 divisible by 2?}',
                                                answer: '\\butgrp{\\row{\\but{YES}{T}}{\\but{NO}{F}}}',
												controls: {
													"checkAnswer": false,
													"help": '\\html{Solution<br><br>The number 2 divides evenly into any even number. Because 384 is even, 2 divides into it evenly. (Rember: an even number is a number whose one\'s place is a 0, 2, 4, 6, or 8).}'
                                                }
                                            }]
                                        }]
                                    },
									{
										title: 'Divisibility Test on Whole Numbers',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\str{Is 165 divisible by 2?}',
                                                answer: '\\butgrp{\\row{\\but{YES}{F}}{\\but{NO}{T}}}',
												controls: {
													"checkAnswer": false,
													"help": '\\html{Solution<br><br>The number 2 divides evenly into any even number. Because 165 is odd, 2 does not divide into it evenly. (Rember: an even number is a number whose one\'s place is a 0, 2, 4, 6, or 8).}'
                                                }
                                            }]
                                        }]
                                    }
                                ]
                            },
//5.2 Identifying Factors of a Given Number                       
                            {
                                title: '5.2 Identifying Factors of a Given Number',
                                path: '5.2-identifying-factors-of-a-given-number',
                                children: [
                                    {
                                        title: 'Choose the Factors of Whole Numbers',
                                        children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\html{Select the given divisors of 95 .}',
												answer: '\\css{\\grp{\\chk{1}{T}}{\\chk{2}{F}}{\\chk{3}{F}}{\\chk{5}{T}}{\\chk{7}{F}}{\\chk{10}{F}}}{factors}',
												controls: {
													"checkAnswer": true,
													"help": '\\str{1 & 5}'
												}
											}]
										}]
									},  
                                    {
                                        title: 'Choose the Factors of Whole Numbers',
                                        children: [{
                                            title: 'Main Answer',
											children: [{
												problem: '\\html{Select the given divisors of 136 .}',
												answer: '\\css{\\grp{\\chk{1}{T}}{\\chk{2}{T}}{\\chk{3}{F}}{\\chk{5}{F}}{\\chk{7}{F}}{\\chk{10}{F}}}{factors}',
												controls: {
													"checkAnswer": true,
													"help": true
												}
											}]
										}]
									},
                                    {
                                        title: 'Choose the Factors of Whole Numbers',
                                        children: [{
                                            title: 'Main Answer',
                                            children: [{
												problem: '\\html{Select the given divisors of 190 .}',
												answer: '\\css{\\grp{\\chk{1}{T}}{\\chk{2}{T}}{\\chk{3}{F}}{\\chk{5}{T}}{\\chk{7}{F}}{\\chk{10}{T}}}{factors}',
												controls: {
													"checkAnswer": true,
													"help": true
												}
											}]
										}]
									},
                                    {
                                        title: 'Choose the Factors of Whole Numbers',
                                        children: [{
                                            title: 'Main Answer',
                                            children: [{
                                                problem: '\\html{Select the given divisors of 160 .}',
												answer: '\\css{\\grp{\\chk{1}{T}}{\\chk{2}{T}}{\\chk{3}{F}}{\\chk{5}{T}}{\\chk{7}{F}}{\\chk{10}{T}}}{factors}',
												controls: {
													"checkAnswer": true,
													"help": true
												}
											}]
										}]
									}, 
                                    {                                    
                                        title: 'Choose the Factors of Whole Numbers',
                                        children: [{
                                            title: 'Main Answer',
                                            children: [{
                                                problem: '\\html{Select the given divisors of 81 .}',
                                                answer: '\\css{\\grp{\\chk{1}{T}}{\\chk{2}{F}}{\\chk{3}{T}}{\\chk{5}{F}}{\\chk{7}{F}}{\\chk{10}{F}}}{factors}',
												controls: {
													"checkAnswer": true,
													"help": true
												}
											}]
										}]
									},
                                    {                                    
                                        title: 'Choose the Factors of Whole Numbers',
                                        children: [{
                                            title: 'Main Answer',
                                            children: [{
                                                problem: '\\html{Select the given divisors of 59 .}',
                                                answer: '\\css{\\grp{\\chk{1}{T}}{\\chk{2}{F}}{\\chk{3}{F}}{\\chk{5}{F}}{\\chk{7}{F}}{\\chk{10}{F}}}{factors}',
                                                controls: {
													"checkAnswer": true,
													"help": true
												}
											}]
										}]
									}, 
                                    {                                    
                                        title: 'Choose the Factors of Whole Numbers',
                                        children: [{
                                            title: 'Main Answer',
                                            children: [{
                                                problem: '\\html{Select the given divisors of 48 .}',
                                                answer: '\\css{\\grp{\\chk{1}{T}}{\\chk{2}{T}}{\\chk{3}{T}}{\\chk{5}{F}}{\\chk{7}{F}}{\\chk{10}{F}}}{factors}',
                                                controls: {
                                                    "checkAnswer": true,
													"help": true
												}
											}]
										}]
									}, 
                                    {                                    
                                        title: 'Choose the Factors of Whole Numbers',
                                        children: [{
                                            title: 'Main Answer',
                                            children: [{
                                                problem: '\\html{Select the given divisors of 145 .}',
                                                answer: '\\css{\\grp{\\chk{1}{T}}{\\chk{2}{F}}{\\chk{3}{F}}{\\chk{5}{T}}{\\chk{7}{F}}{\\chk{10}{F}}}{factors}',
                                                controls: {
                                                    "checkAnswer": true,
                                                    "help": true
												}
											}]
										}]
									}, 
                                    {                                    
                                        title: 'Choose the Factors of Whole Numbers',
                                        children: [{
                                            title: 'Main Answer',
                                            children: [{
                                                problem: '\\html{Select the given divisors of 60 .}',
                                                answer: '\\css{\\grp{\\chk{1}{T}}{\\chk{2}{T}}{\\chk{3}{T}}{\\chk{5}{T}}{\\chk{7}{F}}{\\chk{10}{T}}}{factors}',
                                                controls: {
                                                    "checkAnswer": true,
                                                    "help": true
                                                }
											}]
										}]
									}, 
                                    {                                    
                                        title: 'Choose the Factors of Whole Numbers',
                                        children: [{
                                            title: 'Main Answer',
                                            children: [{
                                                problem: '\\html{Select the given divisors of 94 .}',
                                                answer: '\\css{\\grp{\\chk{1}{T}}{\\chk{2}{T}}{\\chk{3}{F}}{\\chk{5}{F}}{\\chk{7}{F}}{\\chk{10}{F}}}{factors}',
                                                controls: {
                                                    "checkAnswer": true,
                                                    "help": true
                                                }
                                            }]
										}]
									},                                     
                                    
                                ]
                            },
// 5.3 Identifying Prime and Composite Numbers                            
                            {
                                title: '5.3 Identifying Prime and Composite Numbers',
                                path: '5.3-identifying-prime-and-composite-numbers',
                                children: [
                                    {
                                        title: 'Determine whether a Number is Prime or Composite',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\str{Is 55 prime or composite?}',
												answer: '\\butgrp{\\row{\\but{Prime}{F}}{\\but{Composite}{T}}}',
												controls: {
													"checkAnswer": false,
													"help": '\\html{Solution<br><br>55 is composite because it is divisible by more than 1 and itself.}'
												}
											}]
										}]
									},
									{
										title: 'Determine whether a Number is Prime or Composite',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\str{Is 41 prime or composite?}',
                                                answer: '\\butgrp{\\row{\\but{Prime}{T}}{\\but{Composite}{F}}}',
												controls: {
													"checkAnswer": false,
													"help": '\\html{Solution<br><br>41 is prime because it is divisible by only 1 and itself}'
												}
											}]
										}]
									},
									{
										title: 'Determine whether a Number is Prime or Composite',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\str{Is 71 prime or composite?}',
                                                answer: '\\butgrp{\\row{\\but{Prime}{T}}{\\but{Composite}{F}}}',
												controls: {
													"checkAnswer": false,
													"help": '\\html{Solution<br><br>71 is prime because it is divisible by only 1 and itself.}'
												}
											}]
										}]
									},
									{
										title: 'Determine whether a Number is Prime or Composite',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\str{Is 17 prime or composite?}',
                                                answer: '\\butgrp{\\row{\\but{Prime}{T}}{\\but{Composite}{F}}}',
												controls: {
													"checkAnswer": false,
													"help": '\\html{Solution<br><br>17 is prime because it is divisible by only 1 and itself.}'
												}
											}]
										}]
									},
									{
										title: 'Determine whether a Number is Prime or Composite',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\str{Is 56 prime or composite?}',
                                                answer: '\\butgrp{\\row{\\but{Prime}{F}}{\\but{Composite}{T}}}',
												controls: {
													"checkAnswer": false,
													"help": '\\html{Solution<br><hr>56 is composite because it is divisible by more than 1 and itself}'
												}
											}]
										}]
									},
									{
										title: 'Determine whether a Number is Prime or Composite',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\str{Is 90 prime or composite?}',
                                                answer: '\\butgrp{\\row{\\but{Prime}{F}}{\\but{Composite}{T}}}',
												controls: {
													"checkAnswer": false,
													"help": '\\html{Solution<br><br>90 is composite because it is divisible by more than 1 and itself}'
												}
											}]
										}]
									},
									{
										title: 'Determine whether a Number is Prime or Composite',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\str{Is 11 prime or composite?}',
                                                answer: '\\butgrp{\\row{\\but{Prime}{T}}{\\but{Composite}{F}}}',
												controls: {
													"checkAnswer": false,
													"help": '\\html{Solution<br><br>11 is prime because it is divisible by only 1 and itself.}'
												}
											}]
										}]
									},
									{
										title: 'Determine whether a Number is Prime or Composite',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\str{Is 118 prime or composite?}',
                                                answer: '\\butgrp{\\row{\\but{Prime}{F}}{\\but{Composite}{T}}}',
												controls: {
													"checkAnswer": false,
													"help": '\\html{Solution<br><br>118 is composite because it is divisible by more than 1 and itself.}'
												}
											}]
										}]
									},
									{
										title: 'Determine whether a Number is Prime or Composite',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\str{Is 111 prime or composite?}',
                                                answer: '\\butgrp{\\row{\\but{Prime}{F}}{\\but{Composite}{T}}}',
												controls: {
													"checkAnswer": false,
													"help": '\\html{Solution<br><br>111 is composite because it is divisible by more than 1 and itself.}'
												}
											}]
										}]
									},
									{
										title: 'Divisibility Test on Whole Numbers',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\str{Is 185 prime or composite?}',
                                                answer: '\\butgrp{\\row{\\but{Prime}{F}}{\\but{Composite}{T}}}',
												controls: {
													"checkAnswer": false,
													"help": '\\html{Solution<br><br>185 is composite because it is divisible by more than 1 and itself.}'
                                                }
                                            }]
                                        }]
                                    }
                                ]
                            },
// 5.4 Prime Factorization                           
                            {
                                title: '5.4 Prime Factorization',
                                path: '5.4-prime-factorization',
                                children: [
                                    {
                                        title: 'Writing Prime Factorization of Whole Numbers',
                                        children: [{
                                            title: 'Main Answer',
                                            children: [{
                                                problem: '\\str{Write the prime factorization of 10}',
                                                answer: '\\grp{\\input{2}}{\\sign{·}}{\\input{5}}',
                                                controls: {
                                                    "checkAnswer": true,
                                                    "help": false,
                                                    "workbook": true
                                                }
                                            }]
                                        }, {
                                            title: 'Workbook',
                                            children: [{
                                                problem: '\\str{Prime factor 10}',
                                                answer: '\\primefac{10}',
                                                controls: {
                                                    "checkAnswer": true,
                                                    "help": true
                                                }
                                            }]
                                        }]
                                    }, {
                                        title: 'Writing Prime Factorization of Whole Numbers',
                                        children: [{
                                            title: 'Main Answer',
                                            children: [{
                                                problem: '\\str{Write the prime factorization of 18}',
                                                answer: '\\grp{\\input{2}}{\\sign{·}}{\\exp{\\input{3}}{\\input{2}}}',
                                                controls: {
                                                    "checkAnswer": true,
                                                    "help": false,
                                                    "workbook": true
                                                }
                                            }]
                                        }, {
                                            title: 'Workbook',
                                            children: [{
                                                problem: '\\str{Prime factor 18}',
                                                answer: '\\primefac{18}',
                                                controls: {
                                                    "checkAnswer": true,
                                                    "help": true
                                                }
                                            }]
                                        }]
                                    }, {
                                        title: 'Writing Prime Factorization of Whole Numbers',
                                        children: [{
                                            title: 'Main Answer',
                                            children: [{
                                                problem: '\\str{Write the prime factorization of 36}',
                                                answer: '\\grp{\\exp{\\input{2}}{\\input{2}}}{\\sign{·}}{\\exp{\\input{3}}{\\input{2}}}',
                                                controls: {
                                                    "checkAnswer": true,
                                                    "help": false,
                                                    "workbook": true
                                                }
                                            }]
                                        }, {
                                            title: 'Workbook',
                                            children: [{
                                                problem: '\\str{Prime factor 36}',
                                                answer: '\\primefac{36}',
                                                controls: {
                                                    "checkAnswer": true,
                                                    "help": true
                                                }
                                            }]
                                        }]
                                    }, {
                                        title: 'Writing Prime Factorization of Whole Numbers',
                                        children: [{
                                            title: 'Main Answer',
                                            children: [{
                                                problem: '\\str{Write the prime factorization of 50}',
                                                answer: '\\grp{\\input{2}}{\\sign{·}}{\\exp{\\input{5}}{\\input{2}}}',
                                                controls: {
                                                    "checkAnswer": true,
                                                    "help": false,
                                                    "workbook": true
                                                }
                                            }]
                                        }, {
                                            title: 'Workbook',
                                            children: [{
                                                problem: '\\str{Prime factor 50}',
                                                answer: '\\primefac{50}',
                                                controls: {
                                                    "checkAnswer": true,
                                                    "help": true
                                                }
                                            }]
                                        }]
                                    }, {
                                        title: 'Writing Prime Factorization of Whole Numbers',
                                        children: [{
                                            title: 'Main Answer',
                                            children: [{
                                                problem: '\\str{Write the prime factorization of 118}',
                                                answer: '\\grp{\\input{2}}{\\sign{·}}{\\input{59}}',
                                                controls: {
                                                    "checkAnswer": true,
                                                    "help": false,
                                                    "workbook": true
                                                }
                                            }]
                                        }, {
                                            title: 'Workbook',
                                            children: [{
                                                problem: '\\str{Prime factor 118}',
                                                answer: '\\primefac{118}',
                                                controls: {
                                                    "checkAnswer": true,
                                                    "help": true
                                                }
                                            }]
                                        }]
                                    }, {
                                        title: 'Writing Prime Factorization of Whole Numbers',
                                        children: [{
                                            title: 'Main Answer',
                                            children: [{
                                                problem: '\\str{Write the prime factorization of 130}',
                                                answer: '\\grp{\\input{2}}{\\sign{·}}{\\input{5}}{\\sign{·}}{\\input{13}}',
                                                controls: {
                                                    "checkAnswer": true,
                                                    "help": false,
                                                    "workbook": true
                                                }
                                            }]
                                        }, {
                                            title: 'Workbook',
                                            children: [{
                                                problem: '\\str{Prime factor 130}',
                                                answer: '\\primefac{130}',
                                                controls: {
                                                    "checkAnswer": true,
                                                    "help": true
                                                }
                                            }]
                                        }]
                                    }, {
                                        title: 'Writing Prime Factorization of Whole Numbers',
                                        children: [{
                                            title: 'Main Answer',
                                            children: [{
                                                problem: '\\str{Write the prime factorization of 145}',
                                                answer: '\\grp{\\input{5}}{\\sign{·}}{\\input{29}}',
                                                controls: {
                                                    "checkAnswer": true,
                                                    "help": false,
                                                    "workbook": true
                                                }
                                            }]
                                        }, {
                                            title: 'Workbook',
                                            children: [{
                                                problem: '\\str{Prime factor 145}',
                                                answer: '\\primefac{145}',
                                                controls: {
                                                    "checkAnswer": true,
                                                    "help": true
                                                }
                                            }]
                                        }]
                                    }, {
                                        title: 'Writing Prime Factorization of Whole Numbers',
                                        children: [{
                                            title: 'Main Answer',
                                            children: [{
                                                problem: '\\str{Write the prime factorization of 294}',
                                                answer: '\\grp{\\input{2}}{\\sign{·}}{\\input{3}}{\\sign{·}}{\\exp{\\input{7}}{\\input{2}}}',
                                                controls: {
                                                    "checkAnswer": true,
                                                    "help": false,
                                                    "workbook": true
                                                }
                                            }]
                                        }, {
                                            title: 'Workbook',
                                            children: [{
                                                problem: '\\str{Prime factor 294}',
                                                answer: '\\primefac{294}',
                                                controls: {
                                                    "checkAnswer": true,
                                                    "help": true
                                                }
                                            }]
                                        }]
                                    }, {
                                        title: 'Writing Prime Factorization of Whole Numbers',
                                        children: [{
                                            title: 'Main Answer',
                                            children: [{
                                                problem: '\\str{Write the prime factorization of 171}',
                                                answer: '\\grp{\\exp{\\input{3}}{\\input{2}}}{\\sign{·}}{\\input{19}}',
                                                controls: {
                                                    "checkAnswer": true,
                                                    "help": false,
                                                    "workbook": true
                                                }
                                            }]
                                        }, {
                                            title: 'Workbook',
                                            children: [{
                                                problem: '\\str{Prime factor 171}',
                                                answer: '\\primefac{171}',
                                                controls: {
                                                    "checkAnswer": true,
                                                    "help": true
                                                }
                                            }]
                                        }]
                                    }, {
                                        title: 'Writing Prime Factorization of Whole Numbers',
                                        children: [{
                                            title: 'Main Answer',
                                            children: [{
                                                problem: '\\str{Write the prime factorization of 106}',
                                                answer: '\\grp{\\input{2}}{\\sign{·}}{\\input{53}}',
                                                controls: {
                                                    "checkAnswer": true,
                                                    "help": false,
                                                    "workbook": true
                                                }
                                            }]
                                        }, {
                                            title: 'Workbook',
                                            children: [{
                                                problem: '\\str{Prime factor 106}',
                                                answer: '\\primefac{106}',
                                                controls: {
                                                    "checkAnswer": true,
                                                    "help": true
                                                }
                                            }]
                                        }]
                                    }
                                ]
                            }
                        ]
                    }, {
                        title: '2 Fractions',
                        path: 'fractions',
                        children: [{
                            title: '6.1 Meaning of Fractions',
                            path: '6.1-meaning-of-fractions',
                            children: [{
                                title: 'The Meaning of Fractions',
                                children: [{
                                    title: 'Main Answer',
                                    children: [{
                                        problem: '\\rowgrp{\\str{What fraction of the figure is shaded?}}{\\fracbox{3}{4}}',
                                        answer: '\\frac{\\input{3}}{\\input{4}}',
                                        controls: {
                                            "checkAnswer": true,
                                            "help": '\\row{\\html{The answer is &nbsp;&nbsp;}}{\\frac{\\str{3}}{\\str{4}}}'
                                        }
                                    }]
                                }]
                            }, {
                                title: 'The Meaning of Fractions',
                                children: [{
                                    title: 'Main Answer',
                                    children: [{
                                        problem: '\\rowgrp{\\str{What fraction of the figure is shaded?}}{\\fracbox{1}{3}}',
                                        answer: '\\frac{\\input{1}}{\\input{3}}',
                                        controls: {
                                            "checkAnswer": true,
                                            "help": '\\row{\\html{The answer is &nbsp;&nbsp;}}{\\frac{\\str{1}}{\\str{3}}}'
                                        }
                                    }, {
                                        problem: '\\rowgrp{\\str{What fraction of the figure is NOT shaded?}}{\\fracbox{1}{3}}',
                                        answer: '\\frac{\\input{2}}{\\input{3}}',
                                        controls: {
                                            "checkAnswer": true,
                                            "help": '\\row{\\html{The answer is &nbsp;&nbsp;}}{\\frac{\\str{2}}{\\str{3}}}'
                                        }
                                    }]
                                }]
                            }, {
                                title: 'The Meaning of Fractions',
                                children: [{
                                    title: 'Main Answer',
                                    children: [{
                                        problem: '\\rowgrp{\\str{What fraction of the figure is shaded?}}{\\fracbox{2}{5}}',
                                        answer: '\\frac{\\input{2}}{\\input{5}}',
                                        controls: {
                                            "checkAnswer": true,
                                            "help": '\\row{\\html{The answer is &nbsp;&nbsp;}}{\\frac{\\str{2}}{\\str{5}}}'
                                        }
                                    }]
                                }]
                            }, {
                                title: 'The Meaning of Fractions',
                                children: [{
                                    title: 'Main Answer',
                                    children: [{
                                        problem: '\\rowgrp{\\str{What fraction of the figure is shaded?}}{\\fracbox{1}{6}}',
                                        answer: '\\frac{\\input{1}}{\\input{6}}',
                                        controls: {
                                            "checkAnswer": true,
                                            "help": '\\row{\\html{The answer is &nbsp;&nbsp;}}{\\frac{\\str{1}}{\\str{6}}}'
                                        }
                                    }, {
                                        problem: '\\rowgrp{\\str{What fraction of the figure is NOT shaded?}}{\\fracbox{1}{6}}',
                                        answer: '\\frac{\\input{5}}{\\input{6}}',
                                        controls: {
                                            "checkAnswer": true,
                                            "help": '\\row{\\html{The answer is &nbsp;&nbsp;}}{\\frac{\\str{5}}{\\str{6}}}'
                                        }
                                    }]
                                }]
                            }, {
                                title: 'The Meaning of Fractions',
                                children: [{
                                    title: 'Main Answer',
                                    children: [{
                                        problem: '\\rowgrp{\\str{What fraction of the figure is shaded?}}{\\fracbox{3}{7}}',
                                        answer: '\\frac{\\input{3}}{\\input{7}}',
                                        controls: {
                                            "checkAnswer": true,
                                            "help": '\\row{\\html{The answer is &nbsp;&nbsp;}}{\\frac{\\str{3}}{\\str{7}}}'
                                        }
                                    }]
                                }]
                            }, {
                                title: 'The Meaning of Fractions',
                                children: [{
                                    title: 'Main Answer',
                                    children: [{
                                        problem: '\\rowgrp{\\str{What fraction of the figure is shaded?}}{\\fracbox{2}{6}}',
                                        answer: '\\frac{\\input{2}}{\\input{6}}',
                                        controls: {
                                            "checkAnswer": true,
                                            "help": '\\row{\\html{The answer is &nbsp;&nbsp;}}{\\frac{\\str{2}}{\\str{6}}}'
                                        }
                                    }, {
                                        problem: '\\rowgrp{\\str{What fraction of the figure is NOT shaded?}}{\\fracbox{2}{6}}',
                                        answer: '\\frac{\\input{4}}{\\input{6}}',
                                        controls: {
                                            "checkAnswer": true,
                                            "help": '\\row{\\html{The answer is &nbsp;&nbsp;}}{\\frac{\\str{4}}{\\str{6}}}'
                                        }
                                    }]
                                }]
                            }, {
                                title: 'The Meaning of Fractions',
                                children: [{
                                    title: 'Main Answer',
                                    children: [{
                                        problem: '\\rowgrp{\\str{What fraction of the figure is shaded?}}{\\fracbox{4}{9}}',
                                        answer: '\\frac{\\input{4}}{\\input{9}}',
                                        controls: {
                                            "checkAnswer": true,
                                            "help": '\\row{\\html{The answer is &nbsp;&nbsp;}}{\\frac{\\str{4}}{\\str{9}}}'
                                        }
                                    }]
                                }]
                            }, {
                                title: 'The Meaning of Fractions',
                                children: [{
                                    title: 'Main Answer',
                                    children: [{
                                        problem: '\\rowgrp{\\str{What fraction of the figure is shaded?}}{\\fracbox{3}{8}}',
                                        answer: '\\frac{\\input{3}}{\\input{8}}',
                                        controls: {
                                            "checkAnswer": true,
                                            "help": '\\row{\\html{The answer is &nbsp;&nbsp;}}{\\frac{\\str{3}}{\\str{8}}}'
                                        }
                                    }, {
                                        problem: '\\rowgrp{\\str{What fraction of the figure is NOT shaded?}}{\\fracbox{3}{8}}',
                                        answer: '\\frac{\\input{5}}{\\input{8}}',
                                        controls: {
                                            "checkAnswer": true,
                                            "help": '\\row{\\html{The answer is &nbsp;&nbsp;}}{\\frac{\\str{5}}{\\str{8}}}'
                                        }
                                    }]
                                }]
                            }, {
                                title: 'The Meaning of Fractions',
                                children: [{
                                    title: 'Main Answer',
                                    children: [{
                                        problem: '\\rowgrp{\\str{What fraction of the figure is shaded?}}{\\fracbox{3}{10}}',
                                        answer: '\\frac{\\input{3}}{\\input{10}}',
                                        controls: {
                                            "checkAnswer": true,
                                            "help": '\\row{\\html{The answer is &nbsp;&nbsp;}}{\\frac{\\str{3}}{\\str{10}}}'
                                        }
                                    }]
                                }]
                            }, {
                                title: 'The Meaning of Fractions',
                                children: [{
                                    title: 'Main Answer',
                                    children: [{
                                        problem: '\\rowgrp{\\str{What fraction of the figure is shaded?}}{\\fracbox{6}{10}}',
                                        answer: '\\frac{\\input{6}}{\\input{10}}',
                                        controls: {
                                            "checkAnswer": true,
                                            "help": '\\row{\\html{The answer is &nbsp;&nbsp;}}{\\frac{\\str{6}}{\\str{10}}}'
                                        }
                                    }, {
                                        problem: '\\rowgrp{\\str{What fraction of the figure is NOT shaded?}}{\\fracbox{6}{10}}',
                                        answer: '\\frac{\\input{4}}{\\input{10}}',
                                        controls: {
                                            "checkAnswer": true,
                                            "help": '\\row{\\html{The answer is &nbsp;&nbsp;}}{\\frac{\\str{4}}{\\str{10}}}'
                                        }
                                    }]
                                }]
                            }]
                        }, {
                            title: '6.2 Proper and Improper Fractions',
                            path: '6.2-proper-and-improper-fractions',
                            children: [{
                                title: 'Proper and Improper Fractions',
                                children: [{
                                    title: 'Main Answer',
                                    children: [{
                                        problem: '\\rowgrp{\\str{What fraction of ONE whole figure is shaded?}}{\\fracbox{3}{2}}',
                                        answer: '\\frac{\\input{3}}{\\input{2}}',
                                        controls: {
                                            "checkAnswer": true,
                                            "help": '\\row{\\html{The answer is &nbsp;&nbsp;}}{\\frac{\\str{3}}{\\str{2}}}'
                                        }
                                    }]
                                }]
                            }, {
                                title: 'Proper and Improper Fractions',
                                children: [{
                                    title: 'Main Answer',
                                    children: [{
                                        problem: '\\rowgrp{\\str{What fraction of ONE whole figure is shaded?}}{\\fracbox{4}{2}}',
                                        answer: '\\frac{\\input{4}}{\\input{2}}',
                                        controls: {
                                            "checkAnswer": true,
                                            "help": '\\row{\\html{The answer is &nbsp;&nbsp;}}{\\frac{\\str{4}}{\\str{2}}}'
                                        }
                                    }]
                                }]
                            }, {
                                title: 'Proper and Improper Fractions',
                                children: [{
                                    title: 'Main Answer',
                                    children: [{
                                        problem: '\\rowgrp{\\str{What fraction of ONE whole figure is shaded?}}{\\fracbox{4}{3}}',
                                        answer: '\\frac{\\input{4}}{\\input{3}}',
                                        controls: {
                                            "checkAnswer": true,
                                            "help": '\\row{\\html{The answer is &nbsp;&nbsp;}}{\\frac{\\str{4}}{\\str{3}}}'
                                        }
                                    }]
                                }]
                            }, {
                                title: 'Proper and Improper Fractions',
                                children: [{
                                    title: 'Main Answer',
                                    children: [{
                                        problem: '\\rowgrp{\\str{What fraction of ONE whole figure is shaded?}}{\\fracbox{5}{2}}',
                                        answer: '\\frac{\\input{5}}{\\input{2}}',
                                        controls: {
                                            "checkAnswer": true,
                                            "help": '\\row{\\html{The answer is &nbsp;&nbsp;}}{\\frac{\\str{5}}{\\str{2}}}'
                                        }
                                    }]
                                }]
                            }, {
                                title: 'Proper and Improper Fractions',
                                children: [{
                                    title: 'Main Answer',
                                    children: [{
                                        problem: '\\rowgrp{\\str{What fraction of ONE whole figure is shaded?}}{\\fracbox{8}{3}}',
                                        answer: '\\frac{\\input{8}}{\\input{3}}',
                                        controls: {
                                            "checkAnswer": true,
                                            "help": '\\row{\\html{The answer is &nbsp;&nbsp;}}{\\frac{\\str{8}}{\\str{3}}}'
                                        }
                                    }]
                                }]
                            }, {
                                title: 'Proper and Improper Fractions',
                                children: [{
                                    title: 'Main Answer',
                                    children: [{
                                        problem: '\\rowgrp{\\str{What fraction of ONE whole figure is shaded?}}{\\fracbox{7}{5}}',
                                        answer: '\\frac{\\input{7}}{\\input{5}}',
                                        controls: {
                                            "checkAnswer": true,
                                            "help": '\\row{\\html{The answer is &nbsp;&nbsp;}}{\\frac{\\str{7}}{\\str{5}}}'
                                        }
                                    }]
                                }]
                            }, {
                                title: 'Proper and Improper Fractions',
                                children: [{
                                    title: 'Main Answer',
                                    children: [{
                                        problem: '\\rowgrp{\\str{What fraction of ONE whole figure is shaded?}}{\\fracbox{9}{4}}',
                                        answer: '\\frac{\\input{9}}{\\input{4}}',
                                        controls: {
                                            "checkAnswer": true,
                                            "help": '\\row{\\html{The answer is &nbsp;&nbsp;}}{\\frac{\\str{9}}{\\str{4}}}'
                                        }
                                    }]
                                }]
                            }, {
                                title: 'Proper and Improper Fractions',
                                children: [{
                                    title: 'Main Answer',
                                    children: [{
                                        problem: '\\rowgrp{\\str{What fraction of ONE whole figure is shaded?}}{\\fracbox{9}{2}}',
                                        answer: '\\frac{\\input{9}}{\\input{2}}',
                                        controls: {
                                            "checkAnswer": true,
                                            "help": '\\row{\\html{The answer is &nbsp;&nbsp;}}{\\frac{\\str{9}}{\\str{2}}}'
                                        }
                                    }]
                                }]
                            }, {
                                title: 'Proper and Improper Fractions',
                                children: [{
                                    title: 'Main Answer',
                                    children: [{
                                        problem: '\\rowgrp{\\str{What fraction of ONE whole figure is shaded?}}{\\fracbox{7}{6}}',
                                        answer: '\\frac{\\input{7}}{\\input{6}}',
                                        controls: {
                                            "checkAnswer": true,
                                            "help": '\\row{\\html{The answer is &nbsp;&nbsp;}}{\\frac{\\str{7}}{\\str{6}}}'
                                        }
                                    }]
                                }]
                            }, {
                                title: 'Proper and Improper Fractions',
                                children: [{
                                    title: 'Main Answer',
                                    children: [{
                                        problem: '\\rowgrp{\\str{What fraction of ONE whole figure is shaded?}}{\\fracbox{22}{7}}',
                                        answer: '\\frac{\\input{22}}{\\input{7}}',
                                        controls: {
                                            "checkAnswer": true,
                                            "help": '\\row{\\html{The answer is &nbsp;&nbsp;}}{\\frac{\\str{22}}{\\str{7}}}'
                                        }
                                    }]
                                }]
                            }]
                        },
//6.3 Equivalent Fractions                        
                        {
                            title: '6.3 Equivalent Fractions',
                            path: '6.3-equivalent-fractions  ',
                            children: [
                                {//----1
                                    title: 'Equivalent Fractions',
                                    children: [{
                                        title: 'Main Answer',
                                        children: [{
                                            problem: '\\rowgrp{\\str{Are these fractions equivalent?}}{\\row{\\frac{\\str{4}}{\\str{6}}}{\\sign{=}}{\\frac{\\str{8}}{\\str{12}}}',
                                            answer: '\\butgrp{\\row{\\but{Yes}{T}}{\\but{No}{F}}}',
                                            controls: {
                                                "checkAnswer": false,
                                                "help": '\\css{\\rowgrp{\\html{4 · 12\xA0 = \xA08 · 6<br><br>}}{\\html{\xA0 48\xA0 = \xA048}}}{center-tr-txt}'
                                            }
                                        }]
                                    }]
                                },
                                {//----2
                                    title: 'Equivalent Fractions',
                                    children: [{
                                        title: 'Main Answer',
                                        children: [{
                                            problem: '\\rowgrp{\\str{Are these fractions equivalent?}}{\\row{\\frac{\\str{14}}{\\str{16}}}{\\sign{=}}{\\frac{\\str{20}}{\\str{35}}}',
                                            answer: '\\butgrp{\\row{\\but{Yes}{F}}{\\but{No}{T}}}',
                                            controls: {
                                                "checkAnswer": false,
                                                "help": '\\css{\\rowgrp{\\html{14 · 35\xA0 \u2260 \xA020 · 16<br><br>}}{\\html{490\xA0 \u2260 \xA0320}}}{center-tr-txt}'
                                            }
                                        }]
                                    }]
                                },
                                {//----3
                                    title: 'Equivalent Fractions',
                                    children: [{
                                        title: 'Main Answer',
                                        children: [{
                                            problem: '\\rowgrp{\\str{Are these fractions equivalent?}}{\\row{\\frac{\\str{14}}{\\str{16}}}{\\sign{=}}{\\frac{\\str{16}}{\\str{36}}}',
                                            answer: '\\butgrp{\\row{\\but{Yes}{F}}{\\but{No}{T}}}',
                                            controls: {
                                                "checkAnswer": false,
                                                "help": '\\css{\\rowgrp{\\html{14 · 36\xA0 \u2260 \xA016 · 16<br><br>}}{\\html{504\xA0 \u2260 \xA0256}}}{center-tr-txt}'
                                            }
                                        }]
                                    }]
                                },
                                {//----4
                                    title: 'Equivalent Fractions',
                                    children: [{
                                        title: 'Main Answer',
                                        children: [{
                                            problem: '\\rowgrp{\\str{Are these fractions equivalent?}}{\\row{\\frac{\\str{6}}{\\str{9}}}{\\sign{=}}{\\frac{\\str{10}}{\\str{15}}}',
                                            answer: '\\butgrp{\\row{\\but{Yes}{T}}{\\but{No}{F}}}',
                                            controls: {
                                                "checkAnswer": false,
                                                "help": '\\css{\\rowgrp{\\html{6 · 15\xA0 = \xA010 · 9<br><br>}}{\\html{90\xA0 = \xA090}}}{center-tr-txt}'
                                            }
                                        }]
                                    }]
                                },
                                {//----5
                                    title: 'Equivalent Fractions',
                                    children: [{
                                        title: 'Main Answer',
                                        children: [{
                                            problem: '\\rowgrp{\\str{Are these fractions equivalent?}}{\\row{\\frac{\\str{15}}{\\str{18}}}{\\sign{=}}{\\frac{\\str{8}}{\\str{20}}}',
                                            answer: '\\butgrp{\\row{\\but{Yes}{F}}{\\but{No}{T}}}',
                                            controls: {
                                                "checkAnswer": false,
                                                "help": '\\css{\\rowgrp{\\html{15 · 20\xA0 \u2260 \xA08 · 18<br><br>}}{\\html{\xA0 300\xA0 \u2260 \xA0144}}}{center-tr-txt}'
                                            }
                                        }]
                                    }]
                                },
                                {//----6
                                    title: 'Equivalent Fractions',
                                    children: [{
                                        title: 'Main Answer',
                                        children: [{
                                            problem: '\\rowgrp{\\str{Solve for the missing number.}}{\\row{\\frac{\\str{3}}{\\str{6}}}{\\sign{=}}{\\frac{\\str{15}}{\\str{X}}}',
                                            answer: '\\row{\\str{X \xA0= \xA0}}{\\input{30}}',
                                            controls: {
                                                "checkAnswer": true,
                                                "help": '\\css{\\rowgrp{\\html{3 · X\xA0 = \xA06 · 15<br><br>}}{\\html{X\xA0 = \xA0(6 · 15)\xA0 \xF7 \xA03<br><br>}}{\\html{X\xA0 = \xA030}}}{center-tr-txt}'
                                            }
                                        }]
                                    }]
                                },
                                {//----7
                                    title: 'Equivalent Fractions',
                                    children: [{
                                        title: 'Main Answer',
                                        children: [{
                                            problem: '\\rowgrp{\\str{Solve for the missing number.}}{\\row{\\frac{\\str{76}}{\\str{X}}}{\\sign{=}}{\\frac{\\str{19}}{\\str{21}}}',
                                            answer: '\\row{\\str{X \xA0= \xA0}}{\\input{84}}',
                                            controls: {
                                                "checkAnswer": true,
                                                "help": '\\css{\\rowgrp{\\html{76 · 21\xA0 = \xA0X · 19<br><br>}}{\\html{(76 · 21)\xA0 \xF7 \xA019 = X<br><br>}}{\\html{84\xA0 = \xA0X}}}{center-tr-txt}'
                                            }
                                        }]
                                    }]
                                },
                                {//----8
                                    title: 'Equivalent Fractions',
                                    children: [{
                                        title: 'Main Answer',
                                        children: [{
                                            problem: '\\rowgrp{\\str{Solve for the missing number.}}{\\row{\\frac{\\str{27}}{\\str{26}}}{\\sign{=}}{\\frac{\\str{X}}{\\str{104}}}',
                                            answer: '\\row{\\str{X \xA0= \xA0}}{\\input{108}}',
                                            controls: {
                                                "checkAnswer": true,
                                                "help": '\\css{\\rowgrp{\\html{\xA0 27 · 104\xA0 = \xA026 · X<br><br>}}{\\html{(27 · 104)\xA0 \xF7 \xA026 =\xA0X<br><br>}}{\\html{\xA0 108\xA0 = \xA0X}}}{center-tr-txt}'
                                            }
                                        }]
                                    }]
                                },
                                {//----9
                                    title: 'Equivalent Fractions',
                                    children: [{
                                        title: 'Main Answer',
                                        children: [{
                                            problem: '\\rowgrp{\\str{Solve for the missing number.}}{\\row{\\frac{\\str{25}}{\\str{45}}}{\\sign{=}}{\\frac{\\str{75}}{\\str{X}}}',
                                            answer: '\\row{\\str{X \xA0= \xA0}}{\\input{135}}',
                                            controls: {
                                                "checkAnswer": true,
                                                "help": '\\css{\\rowgrp{\\html{25 · X\xA0 = \xA045 · 75<br><br>}}{\\html{X\xA0 = \xA0(45 · 75)\xA0 \xF7 \xA025<br><br>}}{\\html{X\xA0 = \xA0135}}}{center-tr-txt}'
                                            }
                                        }]
                                    }]
                                },
                                {//----10
                                    title: 'Equivalent Fractions',
                                    children: [{
                                        title: 'Main Answer',
                                        children: [{
                                            problem: '\\rowgrp{\\str{Solve for the missing number.}}{\\row{\\frac{\\str{19}}{\\str{38}}}{\\sign{=}}{\\frac{\\str{X}}{\\str{152}}}',
                                            answer: '\\row{\\str{X \xA0= \xA0}}{\\input{76}}',
                                            controls: {
                                                "checkAnswer": true,
                                                "help": '\\css{\\rowgrp{\\html{19 · 152\xA0 = \xA038 · X<br><br>}}{\\html{(19 · 152)\xA0 \xF7 \xA038\xA0 = \xA0X<br><br>}}{\\html{\xA0 76\xA0 = \xA0X}}}{center-tr-txt}'
                                            }
                                        }]
                                    }]
                                },
							]
						},{
                            title: '6.4 Reduce Fractions',
                            path: '6.4-reduce-fractions',
                            children: [{
                                title: 'Reduce Fractions',
                                children: [{
                                    title: 'Main Answer',
                                    children: [{
                                        problem: '\\row{\\str{Reduce \xA0}}{\\frac{\\str{3}}{\\str{6}}}{\\str{\xA0 to its lowest terms}}',
                                        answer: '\\frac{\\input{1}}{\\input{2}}',
                                        controls: {
                                            "checkAnswer": true,
                                            "help": false,
                                            "workbook": true
                                        }
                                    }]
                                }, {
                                    title: 'Workbook',
                                    children: [{
                                        problem: '\\row{\\str{Reduce \xA0}}{\\frac{\\fracstr{3}}{\\fracstr{6}}}{\\str{\xA0 to its lowest terms }}',
                                        answer: '\\reducefrac{\\frac{\\fracstr{3}}{\\fracstr{6}}}',
                                        controls: {
                                            "checkAnswer": true,
                                            "help": false
                                        }
                                    }]
                                }]
                            }, {
                                title: 'Reduce Fractions',
                                children: [{
                                    title: 'Main Answer',
                                    children: [{
                                        problem: '\\row{\\str{Reduce \xA0}}{\\frac{\\str{9}}{\\str{15}}}{\\str{\xA0 to its lowest terms}}',
                                        answer: '\\frac{\\input{3}}{\\input{5}}',
                                        controls: {
                                            "checkAnswer": true,
                                            "help": false,
                                            "workbook": true
                                        }
                                    }]
                                }, {
                                    title: 'Workbook',
                                    children: [{
                                        problem: '\\row{\\str{Reduce \xA0}}{\\frac{\\fracstr{9}}{\\fracstr{15}}}{\\str{\xA0 to its lowest terms }}',
                                        answer: '\\reducefrac{\\frac{\\fracstr{9}}{\\fracstr{15}}}',
                                        controls: {
                                            "checkAnswer": true,
                                            "help": false
                                        }
                                    }]
                                }]
                            }, {
                                title: 'Reduce Fractions',
                                children: [{
                                    title: 'Main Answer',
                                    children: [{
                                        problem: '\\row{\\str{Reduce \xA0}}{\\frac{\\str{24}}{\\str{28}}}{\\str{\xA0 to its lowest terms}}',
                                        answer: '\\frac{\\input{6}}{\\input{7}}',
                                        controls: {
                                            "checkAnswer": true,
                                            "help": false,
                                            "workbook": true
                                        }
                                    }]
                                }, {
                                    title: 'Workbook',
                                    children: [{
                                        problem: '\\row{\\str{Reduce \xA0}}{\\frac{\\fracstr{24}}{\\fracstr{28}}}{\\str{\xA0 to its lowest terms }}',
                                        answer: '\\reducefrac{\\frac{\\fracstr{24}}{\\fracstr{28}}}',
                                        controls: {
                                            "checkAnswer": true,
                                            "help": false
                                        }
                                    }]
                                }]
                            }, {
                                title: 'Reduce Fractions',
                                children: [{
                                    title: 'Main Answer',
                                    children: [{
                                        problem: '\\row{\\str{Reduce \xA0}}{\\frac{\\str{8}}{\\str{12}}}{\\str{\xA0 to its lowest terms}}',
                                        answer: '\\frac{\\input{2}}{\\input{3}}',
                                        controls: {
                                            "checkAnswer": true,
                                            "help": false,
                                            "workbook": true
                                        }
                                    }]
                                }, {
                                    title: 'Workbook',
                                    children: [{
                                        problem: '\\row{\\str{Reduce \xA0}}{\\frac{\\fracstr{8}}{\\fracstr{12}}}{\\str{\xA0 to its lowest terms }}',
                                        answer: '\\reducefrac{\\frac{\\fracstr{8}}{\\fracstr{12}}}',
                                        controls: {
                                            "checkAnswer": true,
                                            "help": false
                                        }
                                    }]
                                }]
                            }, {
                                title: 'Reduce Fractions',
                                children: [{
                                    title: 'Main Answer',
                                    children: [{
                                        problem: '\\row{\\str{Reduce \xA0}}{\\frac{\\str{4}}{\\str{13}}}{\\str{\xA0 to its lowest terms}}',
                                        answer: '\\frac{\\input{4}}{\\input{13}}',
                                        controls: {
                                            "checkAnswer": true,
                                            "help": false,
                                            "workbook": true
                                        }
                                    }]
                                }, {
                                    title: 'Workbook',
                                    children: [{
                                        problem: '\\row{\\str{Reduce \xA0}}{\\frac{\\fracstr{4}}{\\fracstr{13}}}{\\str{\xA0 to its lowest terms }}',
                                        answer: '\\reducefrac{\\frac{\\fracstr{4}}{\\fracstr{13}}}',
                                        controls: {
                                            "checkAnswer": true,
                                            "help": false
                                        }
                                    }]
                                }]
                            }, {
                                title: 'Reduce Fractions',
                                children: [{
                                    title: 'Main Answer',
                                    children: [{
                                        problem: '\\row{\\str{Reduce \xA0}}{\\frac{\\str{7}}{\\str{14}}}{\\str{\xA0 to its lowest terms}}',
                                        answer: '\\frac{\\input{1}}{\\input{2}}',
                                        controls: {
                                            "checkAnswer": true,
                                            "help": false,
                                            "workbook": true
                                        }
                                    }]
                                }, {
                                    title: 'Workbook',
                                    children: [{
                                        problem: '\\row{\\str{Reduce \xA0}}{\\frac{\\fracstr{7}}{\\fracstr{14}}}{\\str{\xA0 to its lowest terms }}',
                                        answer: '\\reducefrac{\\frac{\\fracstr{7}}{\\fracstr{14}}}',
                                        controls: {
                                            "checkAnswer": true,
                                            "help": true
                                        }
                                    }]
                                }]
                            }, {
                                title: 'Reduce Fractions',
                                children: [{
                                    title: 'Main Answer',
                                    children: [{
                                        problem: '\\row{\\str{Reduce \xA0}}{\\frac{\\str{10}}{\\str{12}}}{\\str{\xA0 to its lowest terms}}',
                                        answer: '\\frac{\\input{5}}{\\input{6}}',
                                        controls: {
                                            "checkAnswer": true,
                                            "help": false,
                                            "workbook": true
                                        }
                                    }]
                                }, {
                                    title: 'Workbook',
                                    children: [{
                                        problem: '\\row{\\str{Reduce \xA0}}{\\frac{\\fracstr{10}}{\\fracstr{12}}}{\\str{\xA0 to its lowest terms }}',
                                        answer: '\\reducefrac{\\frac{\\fracstr{10}}{\\fracstr{12}}}',
                                        controls: {
                                            "checkAnswer": true,
                                            "help": true
                                        }
                                    }]
                                }]
                            }, {
                                title: 'Reduce Fractions',
                                children: [{
                                    title: 'Main Answer',
                                    children: [{
                                        problem: '\\row{\\str{Reduce \xA0}}{\\frac{\\str{21}}{\\str{35}}}{\\str{\xA0 to its lowest terms}}',
                                        answer: '\\frac{\\input{3}}{\\input{5}}',
                                        controls: {
                                            "checkAnswer": true,
                                            "help": false,
                                            "workbook": true
                                        }
                                    }]
                                }, {
                                    title: 'Workbook',
                                    children: [{
                                        problem: '\\row{\\str{Reduce \xA0}}{\\frac{\\fracstr{21}}{\\fracstr{35}}}{\\str{\xA0 to its lowest terms }}',
                                        answer: '\\reducefrac{\\frac{\\fracstr{21}}{\\fracstr{35}}}',
                                        controls: {
                                            "checkAnswer": true,
                                            "help": false
                                        }
                                    }]
                                }]
                            }, {
                                title: 'Reduce Fractions',
                                children: [{
                                    title: 'Main Answer',
                                    children: [{
                                        problem: '\\row{\\str{Reduce \xA0}}{\\frac{\\str{6}}{\\str{8}}}{\\str{\xA0 to its lowest terms}}',
                                        answer: '\\frac{\\input{3}}{\\input{4}}',
                                        controls: {
                                            "checkAnswer": true,
                                            "help": false,
                                            "workbook": true
                                        }
                                    }]
                                }, {
                                    title: 'Workbook',
                                    children: [{
                                        problem: '\\row{\\str{Reduce \xA0}}{\\frac{\\fracstr{6}}{\\fracstr{8}}}{\\str{\xA0 to its lowest terms }}',
                                        answer: '\\reducefrac{\\frac{\\fracstr{6}}{\\fracstr{8}}}',
                                        controls: {
                                            "checkAnswer": true,
                                            "help": false
                                        }
                                    }]
                                }]
                            }, {
                                title: 'Reduce Fractions',
                                children: [{
                                    title: 'Main Answer',
                                    children: [{
                                        problem: '\\row{\\str{Reduce \xA0}}{\\frac{\\str{12}}{\\str{48}}}{\\str{\xA0 to its lowest terms}}',
                                        answer: '\\frac{\\input{1}}{\\input{4}}',
                                        controls: {
                                            "checkAnswer": true,
                                            "help": false,
                                            "workbook": true
                                        }
                                    }]
                                }, {
                                    title: 'Workbook',
                                    children: [{
                                        problem: '\\row{\\str{Reduce \xA0}}{\\frac{\\fracstr{12}}{\\fracstr{48}}}{\\str{\xA0 to its lowest terms }}',
                                        answer: '\\reducefrac{\\frac{\\fracstr{12}}{\\fracstr{48}}}',
                                        controls: {
                                            "checkAnswer": true,
                                            "help": false
                                        }
                                    }]
                                }]
                            }]
                        }, {
                            title: '7.1 Multiplying Fractions',
                            path: '7.1-multiplying-fractions',
                            children: [{
                                title: 'Multiplying Fractions',
                                children: [{
                                    title: 'Main Answer',
                                    children: [{
                                        problem: '\\row{\\html{Solve &nbsp;}}{\\frac{\\str{1}}{\\str{2}}}{\\sign{&times;}}{\\frac{\\str{2}}{\\str{3}}}',
                                        answer: '\\frac{\\input{1}}{\\input{3}}',
                                        controls: {
                                            "checkAnswer": true,
                                            "help": false,
                                            "workbook": true
                                        }
                                    }]
                                }, {
                                    title: 'Workbook',
                                    children: [{
                                        problem: '\\str{Multiply the fractions together.}',
                                        answer: '\\multiplyfracs{\\frac{\\str{1}}{\\str{2}}}{\\frac{\\str{2}}{\\str{3}}}',
                                        controls: {
                                            "checkAnswer": true,
                                            "help": true
                                        }
                                    }, {
                                        problem: '\\str{Reduce the fraction to its lowest terms.}',
                                        answer: '\\prev{feedbackData.getPrevious()}{\\reducefrac{\\frac{\\str{2}}{\\str{6}}}',
                                        controls: {
                                            "checkAnswer": true,
                                            "help": true
                                        }
                                    }]
                                }]
                            }, {
                                title: 'Multiplying Fractions',
                                children: [{
                                    title: 'Main Answer',
                                    children: [{
                                        problem: '\\row{\\html{Solve &nbsp;}}{\\frac{\\str{1}}{\\str{4}}}{\\sign{&times;}}{\\frac{\\str{2}}{\\str{6}}}',
                                        answer: '\\frac{\\input{1}}{\\input{12}}',
                                        controls: {
                                            "checkAnswer": true,
                                            "help": false,
                                            "workbook": true
                                        }
                                    }]
                                }, {
                                    title: 'Workbook',
                                    children: [{
                                        problem: '\\str{Multiply the fractions together.}',
                                        answer: '\\multiplyfracs{\\frac{\\str{1}}{\\str{4}}}{\\frac{\\str{2}}{\\str{6}}}',
                                        controls: {
                                            "checkAnswer": true,
                                            "help": true
                                        }
                                    }, {
                                        problem: '\\str{Reduce the fraction to its lowest terms.}',
                                        answer: '\\prev{feedbackData.getPrevious()}{\\reducefrac{\\frac{\\str{2}}{\\str{24}}}',
                                        controls: {
                                            "checkAnswer": true,
                                            "help": true
                                        }
                                    }]
                                }]
                            }, {
                                title: 'Multiplying Fractions',
                                children: [{
                                    title: 'Main Answer',
                                    children: [{
                                        problem: '\\row{\\html{Solve &nbsp;}}{\\frac{\\str{6}}{\\str{8}}}{\\sign{&times;}}{\\frac{\\str{10}}{\\str{9}}}',
                                        answer: '\\frac{\\input{5}}{\\input{6}}',
                                        controls: {
                                            "checkAnswer": true,
                                            "help": false,
                                            "workbook": true
                                        }
                                    }]
                                }, {
                                    title: 'Workbook',
                                    children: [{
                                        problem: '\\str{Multiply the fractions together.}',
                                        answer: '\\multiplyfracs{\\frac{\\str{6}}{\\str{8}}}{\\frac{\\str{10}}{\\str{9}}}',
                                        controls: {
                                            "checkAnswer": true,
                                            "help": true
                                        }
                                    }, {
                                        problem: '\\str{Reduce the fraction to its lowest terms.}',
                                        answer: '\\prev{feedbackData.getPrevious()}{\\reducefrac{\\frac{\\str{60}}{\\str{72}}}',
                                        controls: {
                                            "checkAnswer": true,
                                            "help": true
                                        }
                                    }]
                                }]
                            }, {
                                title: 'Multiplying Fractions',
                                children: [{
                                    title: 'Main Answer',
                                    children: [{
                                        problem: '\\row{\\html{Solve &nbsp;}}{\\frac{\\str{3}}{\\str{6}}}{\\sign{&times;}}{\\frac{\\str{6}}{\\str{2}}}',
                                        answer: '\\frac{\\input{3}}{\\input{2}}',
                                        controls: {
                                            "checkAnswer": true,
                                            "help": false,
                                            "workbook": true
                                        }
                                    }]
                                }, {
                                    title: 'Workbook',
                                    children: [{
                                        problem: '\\str{Multiply the fractions together.}',
                                        answer: '\\multiplyfracs{\\frac{\\str{3}}{\\str{6}}}{\\frac{\\str{6}}{\\str{2}}}',
                                        controls: {
                                            "checkAnswer": true,
                                            "help": true
                                        }
                                    }, {
                                        problem: '\\str{Reduce the fraction to its lowest terms.}',
                                        answer: '\\prev{feedbackData.getPrevious()}{\\reducefrac{\\frac{\\str{18}}{\\str{12}}}',
                                        controls: {
                                            "checkAnswer": true,
                                            "help": true
                                        }
                                    }]
                                }]
                            }, {
                                title: 'Multiplying Fractions',
                                children: [{
                                    title: 'Main Answer',
                                    children: [{
                                        problem: '\\row{\\html{Solve &nbsp;}}{\\frac{\\str{42}}{\\str{8}}}{\\sign{&times;}}{\\frac{\\str{12}}{\\str{14}}}',
                                        answer: '\\frac{\\input{9}}{\\input{2}}',
                                        controls: {
                                            "checkAnswer": true,
                                            "help": false,
                                            "workbook": true
                                        }
                                    }]
                                }, {
                                    title: 'Workbook',
                                    children: [{
                                        problem: '\\str{Multiply the fractions together.}',
                                        answer: '\\multiplyfracs{\\frac{\\str{42}}{\\str{8}}}{\\frac{\\str{12}}{\\str{14}}}',
                                        controls: {
                                            "checkAnswer": true,
                                            "help": true
                                        }
                                    }, {
                                        problem: '\\str{Reduce the fraction to its lowest terms.}',
                                        answer: '\\prev{feedbackData.getPrevious()}{\\reducefrac{\\frac{\\str{504}}{\\str{112}}}',
                                        controls: {
                                            "checkAnswer": true,
                                            "help": true
                                        }
                                    }]
                                }]
                            }, {
                                title: 'Multiplying Fractions',
                                children: [{
                                    title: 'Main Answer',
                                    children: [{
                                        problem: '\\row{\\html{Solve &nbsp;}}{\\frac{\\str{15}}{\\str{6}}}{\\sign{&times;}}{\\frac{\\str{20}}{\\str{35}}}',
                                        answer: '\\frac{\\input{10}}{\\input{7}}',
                                        controls: {
                                            "checkAnswer": true,
                                            "help": false,
                                            "workbook": true
                                        }
                                    }]
                                }, {
                                    title: 'Workbook',
                                    children: [{
                                        problem: '\\str{Multiply the fractions together.}',
                                        answer: '\\multiplyfracs{\\frac{\\str{15}}{\\str{6}}}{\\frac{\\str{20}}{\\str{35}}}',
                                        controls: {
                                            "checkAnswer": true,
                                            "help": true
                                        }
                                    }, {
                                        problem: '\\str{Reduce the fraction to its lowest terms.}',
                                        answer: '\\prev{feedbackData.getPrevious()}{\\reducefrac{\\frac{\\str{300}}{\\str{210}}}',
                                        controls: {
                                            "checkAnswer": true,
                                            "help": true
                                        }
                                    }]
                                }]
                            }, {
                                title: 'Multiplying Fractions',
                                children: [{
                                    title: 'Main Answer',
                                    children: [{
                                        problem: '\\row{\\html{Solve &nbsp;}}{\\frac{\\str{63}}{\\str{72}}}{\\sign{&times;}}{\\frac{\\str{64}}{\\str{99}}}',
                                        answer: '\\frac{\\input{56}}{\\input{99}}',
                                        controls: {
                                            "checkAnswer": true,
                                            "help": false,
                                            "workbook": true
                                        }
                                    }]
                                }, {
                                    title: 'Workbook',
                                    children: [{
                                        problem: '\\str{Multiply the fractions together.}',
                                        answer: '\\multiplyfracs{\\frac{\\str{63}}{\\str{72}}}{\\frac{\\str{64}}{\\str{99}}}',
                                        controls: {
                                            "checkAnswer": true,
                                            "help": true
                                        }
                                    }, {
                                        problem: '\\str{Reduce the fraction to its lowest terms.}',
                                        answer: '\\prev{feedbackData.getPrevious()}{\\reducefrac{\\frac{\\str{4096}}{\\str{7128}}}',
                                        controls: {
                                            "checkAnswer": true,
                                            "help": true
                                        }
                                    }]
                                }]
                            }, {
                                title: 'Multiplying Fractions',
                                children: [{
                                    title: 'Main Answer',
                                    children: [{
                                        problem: '\\row{\\html{Solve &nbsp;}}{\\frac{\\str{3}}{\\str{5}}}{\\sign{&times;}}{\\frac{\\str{10}}{\\str{18}}}{\\sign{&times;}}{\\frac{\\str{15}}{\\str{20}}}',
                                        answer: '\\frac{\\input{1}}{\\input{4}}',
                                        controls: {
                                            "checkAnswer": true,
                                            "help": false,
                                            "workbook": true
                                        }
                                    }]
                                }, {
                                    title: 'Workbook',
                                    children: [{
                                        problem: '\\str{Multiply the fractions together.}',
                                        answer: '\\multiplyfracs{\\frac{\\str{3}}{\\str{5}}}{\\frac{\\str{10}}{\\str{18}}}{\\frac{\\str{15}}{\\str{20}}}',
                                        controls: {
                                            "checkAnswer": true,
                                            "help": true
                                        }
                                    }, {
                                        problem: '\\str{Reduce the fraction to its lowest terms.}',
                                        answer: '\\prev{feedbackData.getPrevious()}{\\reducefrac{\\frac{\\str{450}}{\\str{1800}}}',
                                        controls: {
                                            "checkAnswer": true,
                                            "help": true
                                        }
                                    }]
                                }]
                            }, {
                                title: 'Multiplying Fractions',
                                children: [{
                                    title: 'Main Answer',
                                    children: [{
                                        problem: '\\row{\\html{Solve &nbsp;}}{\\frac{\\str{12}}{\\str{24}}}{\\sign{&times;}}{\\frac{\\str{36}}{\\str{6}}}{\\sign{&times;}}{\\frac{\\str{18}}{\\str{32}}}',
                                        answer: '\\frac{\\input{27}}{\\input{16}}',
                                        controls: {
                                            "checkAnswer": true,
                                            "help": false,
                                            "workbook": true
                                        }
                                    }]
                                }, {
                                    title: 'Workbook',
                                    children: [{
                                        problem: '\\str{Multiply the fractions together.}',
                                        answer: '\\multiplyfracs{\\frac{\\str{12}}{\\str{24}}}{\\frac{\\str{36}}{\\str{6}}}{\\frac{\\str{18}}{\\str{32}}}',
                                        controls: {
                                            "checkAnswer": true,
                                            "help": true
                                        }
                                    }, {
                                        problem: '\\str{Reduce the fraction to its lowest terms.}',
                                        answer: '\\prev{feedbackData.getPrevious()}{\\reducefrac{\\frac{\\str{7776}}{\\str{4608}}}',
                                        controls: {
                                            "checkAnswer": true,
                                            "help": true
                                        }
                                    }]
                                }]
                            }, {
                                title: 'Multiplying Fractions',
                                children: [{
                                    title: 'Main Answer',
                                    children: [{
                                        problem: '\\row{\\html{Solve &nbsp;}}{\\frac{\\str{65}}{\\str{77}}}{\\sign{&times;}}{\\frac{\\str{55}}{\\str{104}}}{\\sign{&times;}}{\\frac{\\str{84}}{\\str{132}}}',
                                        answer: '\\frac{\\input{25}}{\\input{88}}',
                                        controls: {
                                            "checkAnswer": true,
                                            "help": false,
                                            "workbook": true
                                        }
                                    }]
                                }, {
                                    title: 'Workbook',
                                    children: [{
                                        problem: '\\str{Multiply the fractions together.}',
                                        answer: '\\multiplyfracs{\\frac{\\str{65}}{\\str{77}}}{\\frac{\\str{55}}{\\str{104}}}{\\frac{\\str{84}}{\\str{132}}}',
                                        controls: {
                                            "checkAnswer": true,
                                            "help": true
                                        }
                                    }, {
                                        problem: '\\str{Reduce the fraction to its lowest terms.}',
                                        answer: '\\prev{feedbackData.getPrevious()}{\\reducefrac{\\frac{\\str{300300}}{\\str{1057056}}}',
                                        controls: {
                                            "checkAnswer": true,
                                            "help": true
                                        }
                                    }]
                                }]
                            }]
                        }, {
							    title: '7.2 Find the Reciprocal of a Fraction',
                                path: '7.2-find-the-reciprocal-of-a-fraction',
                                children: [
                                    {
        								title: 'Find the Reciprocal of a Fraction',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\rowgrp{\\row{\\str{What is the reciprocal of \xA0}}{\\frac{\\str{1}}{\\str{4}}}{\\str{ ?}}}{\\row{\\str{Simplify if necessary.}}}}',
												answer: '\\input{\\str{4}}',
												controls: {
													"checkAnswer": true,
													"help": '\\rowgrp{\\row{\\str{The reciprocal of \xA0}}{\\frac{\\str{1}}{\\str{4}}}{\\str{\xA0 is \xA0}}{\\frac{\\str{4}}{\\str{1}}}{css{\\str{answer:  \xA0}}{label_like margin-left-small}}{css{\\str{ 4}}{label_like}}}}'
												}
											}]
										}]
									},
									{
										title: 'Find the Reciprocal of a Fraction',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\rowgrp{\\row{\\str{What is the reciprocal of \xA0}}{\\frac{\\str{2}}{\\str{3}}}{\\str{ ?}}}{\\row{\\str{Simplify if necessary.}}}}',
												answer: '\\mixed{\\input{1}}{\\frac{\\input{1}}{\\input{2}}}',
												controls: {
													"checkAnswer": true,
													"help": '\\rowgrp{\\row{\\str{The reciprocal of \xA0}}{\\frac{\\str{2}}{\\str{3}}}{\\str{\xA0 is \xA0}}{\\frac{\\str{3}}{\\str{2}}}{css{\\str{answer:  \xA0}}{label_like margin-left-small}}{css{\\mixed{\\str{1}}{\\frac{\\fracstr{1}}{\\fracstr{2}}}}{label_like}}}'
												}
											}]
										}]
									},
									{
										title: 'Find the Reciprocal of a Fraction',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\rowgrp{\\row{\\str{What is the reciprocal of \xA0}}{\\frac{\\str{9}}{\\str{10}}}{\\str{ ?}}}{\\row{\\str{Simplify if necessary.}}}}',
												answer: '\\mixed{\\input{1}}{\\frac{\\input{1}}{\\input{9}}}',
												controls: {
													"checkAnswer": true,
													"help": '\\rowgrp{\\row{\\str{The reciprocal of \xA0}}{\\frac{\\str{9}}{\\str{10}}}{\\str{\xA0 is \xA0}}{\\frac{\\str{10}}{\\str{9}}}{css{\\str{answer:  \xA0}}{label_like margin-left-small}}{css{\\mixed{\\str{1}}{\\frac{\\fracstr{1}}{\\fracstr{9}}}}{label_like}}}'										
													}
											}]
										}]
									},
									{
										title: 'Find the Reciprocal of a Fraction',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\rowgrp{\\row{\\str{What is the reciprocal of \xA0}}{\\frac{\\str{13}}{\\str{30}}}{\\str{ ?}}}{\\row{\\str{Simplify if necessary.}}}}',
												answer: '\\mixed{\\input{2}}{\\frac{\\input{4}}{\\input{13}}}',
												controls: {
													"checkAnswer": true,
													"help": '\\rowgrp{\\row{\\str{The reciprocal of \xA0}}{\\frac{\\str{13}}{\\str{30}}}{\\str{\xA0 is \xA0}}{\\frac{\\str{30}}{\\str{13}}}{css{\\str{answer:  \xA0}}{label_like margin-left-small}}{css{\\mixed{\\str{2}}{\\frac{\\fracstr{4}}{\\fracstr{13}}}}{label_like}}}'
												}
											}]
										}]
									},
									{
										title: 'Find the Reciprocal of a Fraction',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\rowgrp{\\row{\\str{What is the reciprocal of \xA0}}{\\frac{\\str{1}}{\\str{2}}}{\\str{ ?}}}{\\row{\\str{Simplify if necessary.}}}}',
												answer: '\\input{\\str{2}}',
												controls: {
													"checkAnswer": true,
													"help": '\\rowgrp{\\row{\\str{The reciprocal of \xA0}}{\\frac{\\str{1}}{\\str{2}}}{\\str{\xA0 is \xA0}}{\\frac{\\str{2}}{\\str{1}}}{css{\\str{answer:  \xA0}}{label_like margin-left-small}}{css{\\str{ 2}}{label_like}}}}'
												}
											}]
										}]
									},
									{
										title: 'Find the Reciprocal of a Fraction',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\rowgrp{\\row{\\str{What is the reciprocal of \xA0}}{\\frac{\\str{9}}{\\str{10}}}{\\str{ ?}}}{\\row{\\str{Simplify if necessary.}}}}',
												answer: '\\mixed{\\input{1}}{\\frac{\\input{1}}{\\input{9}}}',
												controls: {
													"checkAnswer": true,
													"help": '\\rowgrp{\\row{\\str{The reciprocal of \xA0}}{\\frac{\\str{9}}{\\str{10}}}{\\str{\xA0 is \xA0}}{\\frac{\\str{10}}{\\str{9}}}{css{\\str{answer:  \xA0}}{label_like margin-left-small}}{css{\\mixed{\\str{1}}{\\frac{\\fracstr{1}}{\\fracstr{9}}}}{label_like}}}'		
												}
											}]
										}]
									},
									{
										title: 'Find the Reciprocal of a Fraction',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\rowgrp{\\row{\\str{What is the reciprocal of \xA0}}{\\frac{\\str{6}}{\\str{4}}}{\\str{ ?}}}{\\row{\\str{Simplify if necessary.}}}}',
												answer: '\\frac{\\input{2}}{\\input{3}}',
												controls: {
													"checkAnswer": true,
													"help": '\\rowgrp{\\row{\\str{The reciprocal of \xA0}}{\\frac{\\str{6}}{\\str{4}}}{\\str{\xA0 is \xA0}}{\\frac{\\str{4}}{\\str{6}}}{css{\\str{answer:  \xA0}}{label_like margin-left-small}}{css{\\frac{\\fracstr{2}}{\\fracstr{3}}}{label_like}}}'
												}
											}]
										}]
									},
									{
										title: 'Find the Reciprocal of a Fraction',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\rowgrp{\\row{\\str{What is the reciprocal of \xA0}}{\\frac{\\str{3}}{\\str{4}}}{\\str{ ?}}}{\\row{\\str{Simplify if necessary.}}}}',
												answer: '\\mixed{\\input{1}}{\\frac{\\input{1}}{\\input{3}}}',
												controls: {
													"checkAnswer": true,
													"help": '\\rowgrp{\\row{\\str{The reciprocal of \xA0}}{\\frac{\\str{3}}{\\str{4}}}{\\str{\xA0 is \xA0}}{\\frac{\\str{4}}{\\str{3}}}{css{\\str{answer:  \xA0}}{label_like margin-left-small}}{css{\\mixed{\\str{1}}{\\frac{\\fracstr{1}}{\\fracstr{3}}}}{label_like}}}'
												}
											}]
										}]
									},
									{
										title: 'Find the Reciprocal of a Fraction',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\rowgrp{\\row{\\str{What is the reciprocal of \xA0}}{\\mixed{\\str{1}}{\\frac{\\fracstr{4}}{\\fracstr{6}}}}{\\str{ ?}}}{\\row{\\str{Simplify if necessary.}}}}',
												answer: '\\frac{\\input{3}}{\\input{5}}',
												controls: {
													"checkAnswer": true,
													"help": '\\rowgrp{\\row{\\str{The reciprocal of \xA0}}{\\mixed{\\str{1}}{\\frac{\\fracstr{4}}{\\fracstr{6}}}}{\\str{\xA0 is \xA0}}{\\frac{\\str{6}}{\\str{10}}}{css{\\str{answer:  \xA0}}{label_like margin-left-small}}{css{\\frac{\\fracstr{3}}{\\fracstr{5}}}{label_like}}}'	
												}
											}]
										}]
									},
									{
										title: 'Find the Reciprocal of a Fraction',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\rowgrp{\\row{\\str{What is the reciprocal of \xA0}}{\\mixed{\\str{1}}{\\frac{\\fracstr{5}}{\\fracstr{6}}}}{\\str{ ?}}}{\\row{\\str{Simplify if necessary.}}}}',
												answer: '\\frac{\\input{6}}{\\input{11}}',
												controls: {
													"checkAnswer": true,
													"help": '\\rowgrp{\\row{\\str{The reciprocal of \xA0}}{\\mixed{\\str{1}}{\\frac{\\fracstr{5}}{\\fracstr{6}}}}{\\str{\xA0 is \xA0}}{\\frac{\\str{6}}{\\str{11}}}{css{\\str{answer:  \xA0}}{label_like margin-left-small}}{css{\\frac{\\fracstr{6}}{\\fracstr{11}}}{label_like}}}'	
												}
											}]
										}]
									}]
                            }, {
                                title: '7.3 Dividing Fractions',
                                path: '7.3-dividing-fractions',
                                children: [{
                                    title: 'Dividing Fractions',
                                    children: [{
                                        title: 'Main Answer',
                                        children: [{
                                            problem: '\\row{\\html{Solve &nbsp;}}{\\frac{\\str{1}}{\\str{2}}}{\\sign{&divide;}}{\\frac{\\str{3}}{\\str{2}}}',
                                            answer: '\\frac{\\input{1}}{\\input{3}}',
                                            controls: {
                                                "checkAnswer": true,
                                                "help": false,
                                                "workbook": true
                                            }
                                        }]
                                    }, {
                                        title: 'Workbook',
                                        children: [{
                                            problem: '\\rowgrp{\\row{\\str{Rewrite the problem as the product of the fractions.}}}{\\row{\\frac{\\str{1}}{\\str{2}}}{\\sign{&divide;}}{\\frac{\\str{3}}{\\str{2}}}}',
                                            answer: '\\grp{\\frac{\\input{1}}{\\input{2}}}{\\sign{&times;}}{\\frac{\\input{2}}{\\input{3}}}',
                                            controls: {
                                                "checkAnswer": true,
                                                "help": true
                                            }
                                        }, {
                                            problem: '\\str{Multiply the fractions together.}',
                                            answer: '\\multiplyfracs{\\frac{\\str{1}}{\\str{2}}}{\\frac{\\str{2}}{\\str{3}}}',
                                            controls: {
                                                "checkAnswer": true,
                                                "help": true
                                            }
                                        }, {
                                            problem: '\\str{Reduce the fraction to its lowest terms.}',
                                            answer: '\\prev{feedbackData.getPrevious()}{\\reducefrac{\\frac{\\str{2}}{\\str{6}}}',
                                            controls: {
                                                "checkAnswer": true,
                                                "help": true
                                            }
                                        }]
                                    }]
                                }, {
                                    title: 'Dividing Fractions',
                                    children: [{
                                        title: 'Main Answer',
                                        children: [{
                                            problem: '\\row{\\html{Solve &nbsp;}}{\\frac{\\str{5}}{\\str{10}}}{\\sign{&divide;}}{\\frac{\\str{5}}{\\str{2}}}',
                                            answer: '\\frac{\\input{1}}{\\input{5}}',
                                            controls: {
                                                "checkAnswer": true,
                                                "help": false,
                                                "workbook": true
                                            }
                                        }]
                                    }, {
                                        title: 'Workbook',
                                        children: [{
                                            problem: '\\rowgrp{\\row{\\str{Rewrite the problem as the product of the fractions.}}}{\\row{\\frac{\\str{5}}{\\str{10}}}{\\sign{&divide;}}{\\frac{\\str{5}}{\\str{2}}}}',
                                            answer: '\\grp{\\frac{\\input{5}}{\\input{10}}}{\\sign{&times;}}{\\frac{\\input{2}}{\\input{5}}}',
                                            controls: {
                                                "checkAnswer": true,
                                                "help": true
                                            }
                                        }, {
                                            problem: '\\str{Multiply the fractions together.}',
                                            answer: '\\multiplyfracs{\\frac{\\str{5}}{\\str{10}}}{\\frac{\\str{2}}{\\str{5}}}',
                                            controls: {
                                                "checkAnswer": true,
                                                "help": true
                                            }
                                        }, {
                                            problem: '\\str{Reduce the fraction to its lowest terms.}',
                                            answer: '\\prev{feedbackData.getPrevious()}{\\reducefrac{\\frac{\\str{10}}{\\str{50}}}',
                                            controls: {
                                                "checkAnswer": true,
                                                "help": true
                                            }
                                        }]
                                    }]
                                }, {
                                    title: 'Dividing Fractions',
                                    children: [{
                                        title: 'Main Answer',
                                        children: [{
                                            problem: '\\row{\\html{Solve &nbsp;}}{\\frac{\\str{7}}{\\str{6}}}{\\sign{&divide;}}{\\frac{\\str{7}}{\\str{3}}}',
                                            answer: '\\frac{\\input{1}}{\\input{2}}',
                                            controls: {
                                                "checkAnswer": true,
                                                "help": false,
                                                "workbook": true
                                            }
                                        }]
                                    }, {
                                        title: 'Workbook',
                                        children: [{
                                            problem: '\\rowgrp{\\row{\\str{Rewrite the problem as the product of the fractions.}}}{\\row{\\frac{\\str{7}}{\\str{6}}}{\\sign{&divide;}}{\\frac{\\str{7}}{\\str{3}}}}',
                                            answer: '\\grp{\\frac{\\input{7}}{\\input{6}}}{\\sign{&times;}}{\\frac{\\input{3}}{\\input{7}}}',
                                            controls: {
                                                "checkAnswer": true,
                                                "help": true
                                            }
                                        }, {
                                            problem: '\\str{Multiply the fractions together.}',
                                            answer: '\\multiplyfracs{\\frac{\\str{7}}{\\str{6}}}{\\frac{\\str{3}}{\\str{7}}}',
                                            controls: {
                                                "checkAnswer": true,
                                                "help": true
                                            }
                                        }, {
                                            problem: '\\str{Reduce the fraction to its lowest terms.}',
                                            answer: '\\prev{feedbackData.getPrevious()}{\\reducefrac{\\frac{\\str{21}}{\\str{42}}}',
                                            controls: {
                                                "checkAnswer": true,
                                                "help": true
                                            }
                                        }]
                                    }]
                                }, {
                                    title: 'Dividing Fractions',
                                    children: [{
                                        title: 'Main Answer',
                                        children: [{
                                            problem: '\\row{\\html{Solve &nbsp;}}{\\frac{\\str{2}}{\\str{9}}}{\\sign{&divide;}}{\\frac{\\str{5}}{\\str{3}}}',
                                            answer: '\\frac{\\input{2}}{\\input{15}}',
                                            controls: {
                                                "checkAnswer": true,
                                                "help": false,
                                                "workbook": true
                                            }
                                        }]
                                    }, {
                                        title: 'Workbook',
                                        children: [{
                                            problem: '\\rowgrp{\\row{\\str{Rewrite the problem as the product of the fractions.}}}{\\row{\\frac{\\str{2}}{\\str{9}}}{\\sign{&divide;}}{\\frac{\\str{5}}{\\str{3}}}}',
                                            answer: '\\grp{\\frac{\\input{2}}{\\input{9}}}{\\sign{&times;}}{\\frac{\\input{3}}{\\input{5}}}',
                                            controls: {
                                                "checkAnswer": true,
                                                "help": true
                                            }
                                        }, {
                                            problem: '\\str{Multiply the fractions together.}',
                                            answer: '\\multiplyfracs{\\frac{\\str{2}}{\\str{9}}}{\\frac{\\str{3}}{\\str{5}}}',
                                            controls: {
                                                "checkAnswer": true,
                                                "help": true
                                            }
                                        }, {
                                            problem: '\\str{Reduce the fraction to its lowest terms.}',
                                            answer: '\\prev{feedbackData.getPrevious()}{\\reducefrac{\\frac{\\str{6}}{\\str{45}}}',
                                            controls: {
                                                "checkAnswer": true,
                                                "help": true
                                            }
                                        }]
                                    }]
                                }, {
                                    title: 'Dividing Fractions',
                                    children: [{
                                        title: 'Main Answer',
                                        children: [{
                                            problem: '\\row{\\html{Solve &nbsp;}}{\\frac{\\str{10}}{\\str{3}}}{\\sign{&divide;}}{\\frac{\\str{12}}{\\str{11}}}',
                                            answer: '\\frac{\\input{55}}{\\input{18}}',
                                            controls: {
                                                "checkAnswer": true,
                                                "help": false,
                                                "workbook": true
                                            }
                                        }]
                                    }, {
                                        title: 'Workbook',
                                        children: [{
                                            problem: '\\rowgrp{\\row{\\str{Rewrite the problem as the product of the fractions.}}}{\\row{\\frac{\\str{10}}{\\str{3}}}{\\sign{&divide;}}{\\frac{\\str{12}}{\\str{11}}}}',
                                            answer: '\\grp{\\frac{\\input{10}}{\\input{3}}}{\\sign{&times;}}{\\frac{\\input{11}}{\\input{12}}}',
                                            controls: {
                                                "checkAnswer": true,
                                                "help": true
                                            }
                                        }, {
                                            problem: '\\str{Multiply the fractions together.}',
                                            answer: '\\multiplyfracs{\\frac{\\str{10}}{\\str{3}}}{\\frac{\\str{11}}{\\str{12}}}',
                                            controls: {
                                                "checkAnswer": true,
                                                "help": true
                                            }
                                        }, {
                                            problem: '\\str{Reduce the fraction to its lowest terms.}',
                                            answer: '\\prev{feedbackData.getPrevious()}{\\reducefrac{\\frac{\\str{110}}{\\str{36}}}',
                                            controls: {
                                                "checkAnswer": true,
                                                "help": true
                                            }
                                        }]
                                    }]
                                }, {
                                    title: 'Dividing Fractions',
                                    children: [{
                                        title: 'Main Answer',
                                        children: [{
                                            problem: '\\row{\\html{Solve &nbsp;}}{\\frac{\\str{17}}{\\str{34}}}{\\sign{&divide;}}{\\frac{\\str{12}}{\\str{14}}}',
                                            answer: '\\frac{\\input{7}}{\\input{12}}',
                                            controls: {
                                                "checkAnswer": true,
                                                "help": false,
                                                "workbook": true
                                            }
                                        }]
                                    }, {
                                        title: 'Workbook',
                                        children: [{
                                            problem: '\\rowgrp{\\row{\\str{Rewrite the problem as the product of the fractions.}}}{\\row{\\frac{\\str{17}}{\\str{34}}}{\\sign{&divide;}}{\\frac{\\str{12}}{\\str{14}}}}',
                                            answer: '\\grp{\\frac{\\input{17}}{\\input{34}}}{\\sign{&times;}}{\\frac{\\input{14}}{\\input{12}}}',
                                            controls: {
                                                "checkAnswer": true,
                                                "help": true
                                            }
                                        }, {
                                            problem: '\\str{Multiply the fractions together.}',
                                            answer: '\\multiplyfracs{\\frac{\\str{17}}{\\str{34}}}{\\frac{\\str{14}}{\\str{12}}}',
                                            controls: {
                                                "checkAnswer": true,
                                                "help": true
                                            }
                                        }, {
                                            problem: '\\str{Reduce the fraction to its lowest terms.}',
                                            answer: '\\prev{feedbackData.getPrevious()}{\\reducefrac{\\frac{\\str{238}}{\\str{408}}}',
                                            controls: {
                                                "checkAnswer": true,
                                                "help": true
                                            }
                                        }]
                                    }]
                                }, {
                                    title: 'Dividing Fractions',
                                    children: [{
                                        title: 'Main Answer',
                                        children: [{
                                            problem: '\\row{\\html{Solve &nbsp;}}{\\frac{\\str{18}}{\\str{27}}}{\\sign{&divide;}}{\\frac{\\str{23}}{\\str{21}}}',
                                            answer: '\\frac{\\input{14}}{\\input{23}}',
                                            controls: {
                                                "checkAnswer": true,
                                                "help": false,
                                                "workbook": true
                                            }
                                        }]
                                    }, {
                                        title: 'Workbook',
                                        children: [{
                                            problem: '\\rowgrp{\\row{\\str{Rewrite the problem as the product of the fractions.}}}{\\row{\\frac{\\str{18}}{\\str{27}}}{\\sign{&divide;}}{\\frac{\\str{23}}{\\str{21}}}}',
                                            answer: '\\grp{\\frac{\\input{18}}{\\input{27}}}{\\sign{&times;}}{\\frac{\\input{21}}{\\input{23}}}',
                                            controls: {
                                                "checkAnswer": true,
                                                "help": true
                                            }
                                        }, {
                                            problem: '\\str{Multiply the fractions together.}',
                                            answer: '\\multiplyfracs{\\frac{\\str{18}}{\\str{27}}}{\\frac{\\str{21}}{\\str{23}}}',
                                            controls: {
                                                "checkAnswer": true,
                                                "help": true
                                            }
                                        }, {
                                            problem: '\\str{Reduce the fraction to its lowest terms.}',
                                            answer: '\\prev{feedbackData.getPrevious()}{\\reducefrac{\\frac{\\str{378}}{\\str{621}}}',
                                            controls: {
                                                "checkAnswer": true,
                                                "help": true
                                            }
                                        }]
                                    }]
                                }, {
                                    title: 'Dividing Fractions',
                                    children: [{
                                        title: 'Main Answer',
                                        children: [{
                                            problem: '\\row{\\html{Solve &nbsp;}}{\\frac{\\str{2}}{\\str{4}}}{\\sign{&divide;}}{\\frac{\\str{12}}{\\str{8}}}{\\sign{&divide;}}{\\frac{\\str{24}}{\\str{18}}}',
                                            answer: '\\frac{\\input{1}}{\\input{4}}',
                                            controls: {
                                                "checkAnswer": true,
                                                "help": false,
                                                "workbook": true
                                            }
                                        }]
                                    }, {
                                        title: 'Workbook',
                                        children: [{
                                            problem: '\\rowgrp{\\row{\\str{Rewrite the problem as the product of the fractions.}}}{\\row{\\frac{\\str{2}}{\\str{4}}}{\\sign{&divide;}}{\\frac{\\str{12}}{\\str{8}}}{\\sign{&divide;}}{\\frac{\\str{24}}{\\str{18}}}}',
                                            answer: '\\grp{\\frac{\\input{2}}{\\input{4}}}{\\sign{&times;}}{\\frac{\\input{8}}{\\input{12}}}{\\sign{&times;}}{\\frac{\\input{18}}{\\input{24}}}',
                                            controls: {
                                                "checkAnswer": true,
                                                "help": true
                                            }
                                        }, {
                                            problem: '\\str{Multiply the fractions together.}',
                                            answer: '\\multiplyfracs{\\frac{\\str{2}}{\\str{4}}}{\\frac{\\str{8}}{\\str{12}}}{\\frac{\\str{18}}{\\str{24}}}',
                                            controls: {
                                                "checkAnswer": true,
                                                "help": true
                                            }
                                        }, {
                                            problem: '\\str{Reduce the fraction to its lowest terms.}',
                                            answer: '\\prev{feedbackData.getPrevious()}{\\reducefrac{\\frac{\\str{378}}{\\str{621}}}',
                                            controls: {
                                                "checkAnswer": true,
                                                "help": true
                                            }
                                        }]
                                    }]
                                }, {
                                    title: 'Dividing Fractions',
                                    children: [{
                                        title: 'Main Answer',
                                        children: [{
                                            problem: '\\row{\\html{Solve &nbsp;}}{\\frac{\\str{27}}{\\str{14}}}{\\sign{&divide;}}{\\frac{\\str{28}}{\\str{21}}}{\\sign{&divide;}}{\\frac{\\str{9}}{\\str{12}}}',
                                            answer: '\\frac{\\input{27}}{\\input{14}}',
                                            controls: {
                                                "checkAnswer": true,
                                                "help": false,
                                                "workbook": true
                                            }
                                        }]
                                    }, {
                                        title: 'Workbook',
                                        children: [{
                                            problem: '\\rowgrp{\\row{\\str{Rewrite the problem as the product of the fractions.}}}{\\row{\\frac{\\str{27}}{\\str{14}}}{\\sign{&divide;}}{\\frac{\\str{28}}{\\str{21}}}{\\sign{&divide;}}{\\frac{\\str{9}}{\\str{12}}}}',
                                            answer: '\\grp{\\frac{\\input{27}}{\\input{14}}}{\\sign{&times;}}{\\frac{\\input{21}}{\\input{28}}}{\\sign{&times;}}{\\frac{\\input{12}}{\\input{9}}}',
                                            controls: {
                                                "checkAnswer": true,
                                                "help": true
                                            }
                                        }, {
                                            problem: '\\str{Multiply the fractions together.}',
                                            answer: '\\multiplyfracs{\\frac{\\str{27}}{\\str{14}}}{\\frac{\\str{21}}{\\str{28}}}{\\frac{\\str{12}}{\\str{9}}}',
                                            controls: {
                                                "checkAnswer": true,
                                                "help": true
                                            }
                                        }, {
                                            problem: '\\str{Reduce the fraction to its lowest terms.}',
                                            answer: '\\prev{feedbackData.getPrevious()}{\\reducefrac{\\frac{\\str{6804}}{\\str{3528}}}',
                                            controls: {
                                                "checkAnswer": true,
                                                "help": true
                                            }
                                        }]
                                    }]
                                }, {
                                    title: 'Dividing Fractions',
                                    children: [{
                                        title: 'Main Answer',
                                        children: [{
                                            problem: '\\row{\\html{Solve &nbsp;}}{\\frac{\\str{5}}{\\str{10}}}{\\sign{&divide;}}{\\frac{\\str{27}}{\\str{32}}}{\\sign{&divide;}}{\\frac{\\str{8}}{\\str{10}}}',
                                            answer: '\\frac{\\input{20}}{\\input{27}}',
                                            controls: {
                                                "checkAnswer": true,
                                                "help": false,
                                                "workbook": true
                                            }
                                        }]
                                    }, {
                                        title: 'Workbook',
                                        children: [{
                                            problem: '\\rowgrp{\\row{\\str{Rewrite the problem as the product of the fractions.}}}{\\row{\\frac{\\str{5}}{\\str{10}}}{\\sign{&divide;}}{\\frac{\\str{27}}{\\str{32}}}{\\sign{&divide;}}{\\frac{\\str{8}}{\\str{10}}}}',
                                            answer: '\\grp{\\frac{\\input{5}}{\\input{10}}}{\\sign{&times;}}{\\frac{\\input{32}}{\\input{27}}}{\\sign{&times;}}{\\frac{\\input{10}}{\\input{8}}}',
                                            controls: {
                                                "checkAnswer": true,
                                                "help": true
                                            }
                                        }, {
                                            problem: '\\str{Multiply the fractions together.}',
                                            answer: '\\multiplyfracs{\\frac{\\str{5}}{\\str{10}}}{\\frac{\\str{32}}{\\str{27}}}{\\frac{\\str{10}}{\\str{8}}}',
                                            controls: {
                                                "checkAnswer": true,
                                                "help": true
                                            }
                                        }, {
                                            problem: '\\str{Reduce the fraction to its lowest terms.}',
                                            answer: '\\prev{feedbackData.getPrevious()}{\\reducefrac{\\frac{\\str{1600}}{\\str{2160}}}',
                                            controls: {
                                                "checkAnswer": true,
                                                "help": true
                                            }
                                        }]
                                    }]
                                }]
                            }, {
								title: '8.1 Change Mixed Numbers into Improper Fractions',
                                path: '8.1-change-mixed-numbers-into-improper-fractions',
                                children: [
                                    {
        								title: 'Change Mixed Numbers into Improper Fractions',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\rowgrp{\\row{\\str{Write the mixed number as an improper fraction:}}}{\\row{\\mixed{\\str{1}}{\\frac{\\fracstr{2}}{\\fracstr{3}}}}}',
												answer: '\\frac{\\input{5}}{\\input{3}}',
												controls: {
													"checkAnswer": true,
													"help": '\\rowgrp{\\row{\\str{Multiply the whole number times the denominator and add the result to the numerator. \xA0}}}{\\row{\\str{\xA0}}}{\\row{\\frac{\\fracstr{(1 \xb7 3) + 2}}{\\fracstr{3}}}{\\row{\\str{\xA0 = \xA0}}}{\\row{\\frac{\\fracstr{5}}{\\fracstr{3}}}{\\row{css{\\str{answer:  \xA0}}{label_like margin-left-small}}{css{\\frac{\\fracstr{5}}{\\fracstr{3}}}{label_like}}}}'
												}
											}]
										}]
									},
									{
										title: 'Change Mixed Numbers into Improper Fractions',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\rowgrp{\\row{\\str{Write the mixed number as an improper fraction:}}}{\\row{\\mixed{\\str{1}}{\\frac{\\fracstr{1}}{\\fracstr{2}}}}}',
												answer: '\\frac{\\input{3}}{\\input{2}}',
												controls: {
													"checkAnswer": true,
													"help": '\\rowgrp{\\row{\\str{Multiply the whole number times the denominator and add the result to the numerator. \xA0}}}{\\row{\\str{\xA0}}}{\\row{\\frac{\\fracstr{(1 \xb7 2) + 1}}{\\fracstr{2}}}{\\row{\\str{\xA0 = \xA0}}}{\\row{\\frac{\\fracstr{3}}{\\fracstr{2}}}{\\row{css{\\str{answer:  \xA0}}{label_like margin-left-small}}{css{\\frac{\\fracstr{3}}{\\fracstr{2}}}{label_like}}}}'
												}
											}]
										}]
									},
									{
										title: 'Change Mixed Numbers into Improper Fractions',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\rowgrp{\\row{\\str{Write the mixed number as an improper fraction:}}}{\\row{\\mixed{\\str{1}}{\\frac{\\fracstr{2}}{\\fracstr{5}}}}}',
												answer: '\\frac{\\input{7}}{\\input{5}}',
												controls: {
													"checkAnswer": true,
													"help": '\\rowgrp{\\row{\\str{Multiply the whole number times the denominator and add the result to the numerator. \xA0}}}{\\row{\\str{\xA0}}}{\\row{\\frac{\\fracstr{(1 \xb7 5) + 2}}{\\fracstr{5}}}{\\row{\\str{\xA0 = \xA0}}}{\\row{\\frac{\\fracstr{7}}{\\fracstr{5}}}{\\row{css{\\str{answer:  \xA0}}{label_like margin-left-small}}{css{\\frac{\\fracstr{7}}{\\fracstr{5}}}{label_like}}}}'													
													}
											}]
										}]
									},
									{
										title: 'Change Mixed Numbers into Improper Fractions',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\rowgrp{\\row{\\str{Write the mixed number as an improper fraction:}}}{\\row{\\mixed{\\str{3}}{\\frac{\\fracstr{3}}{\\fracstr{4}}}}}',
												answer: '\\frac{\\input{15}}{\\input{4}}',
												controls: {
													"checkAnswer": true,
													"help": '\\rowgrp{\\row{\\str{Multiply the whole number times the denominator and add the result to the numerator. \xA0}}}{\\row{\\str{\xA0}}}{\\row{\\frac{\\fracstr{(3 \xb7 4) + 3}}{\\fracstr{4}}}{\\row{\\str{\xA0 = \xA0}}}{\\row{\\frac{\\fracstr{15}}{\\fracstr{4}}}{\\row{css{\\str{answer:  \xA0}}{label_like margin-left-small}}{css{\\frac{\\fracstr{15}}{\\fracstr{4}}}{label_like}}}}'
												}
											}]
										}]
									},
									{
										title: 'Change Mixed Numbers into Improper Fractions',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\rowgrp{\\row{\\str{Write the mixed number as an improper fraction:}}}{\\row{\\mixed{\\str{2}}{\\frac{\\fracstr{4}}{\\fracstr{7}}}}}',
												answer: '\\frac{\\input{18}}{\\input{7}}',
												controls: {
													"checkAnswer": true,
													"help": '\\rowgrp{\\row{\\str{Multiply the whole number times the denominator and add the result to the numerator. \xA0}}}{\\row{\\str{\xA0}}}{\\row{\\frac{\\fracstr{(2 \xb7 7) + 4}}{\\fracstr{7}}}{\\row{\\str{\xA0 = \xA0}}}{\\row{\\frac{\\fracstr{18}}{\\fracstr{7}}}{\\row{css{\\str{answer:  \xA0}}{label_like margin-left-small}}{css{\\frac{\\fracstr{18}}{\\fracstr{7}}}{label_like}}}}'
												}
											}]
										}]
									},
									{
										title: 'Change Mixed Numbers into Improper Fractions',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\rowgrp{\\row{\\str{Write the mixed number as an improper fraction:}}}{\\row{\\mixed{\\str{1}}{\\frac{\\fracstr{2}}{\\fracstr{9}}}}}',
												answer: '\\frac{\\input{11}}{\\input{9}}',
												controls: {
													"checkAnswer": true,
													"help": '\\rowgrp{\\row{\\str{Multiply the whole number times the denominator and add the result to the numerator. \xA0}}}{\\row{\\str{\xA0}}}{\\row{\\frac{\\fracstr{(1 \xb7 9) + 2}}{\\fracstr{9}}}{\\row{\\str{\xA0 = \xA0}}}{\\row{\\frac{\\fracstr{11}}{\\fracstr{9}}}{\\row{css{\\str{answer:  \xA0}}{label_like margin-left-small}}{css{\\frac{\\fracstr{11}}{\\fracstr{9}}}{label_like}}}}'
												}
											}]
										}]
									},
									{
										title: 'Change Mixed Numbers into Improper Fractions',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\rowgrp{\\row{\\str{Write the mixed number as an improper fraction:}}}{\\row{\\mixed{\\str{2}}{\\frac{\\fracstr{5}}{\\fracstr{6}}}}}',
												answer: '\\frac{\\input{17}}{\\input{6}}',
												controls: {
													"checkAnswer": true,
													"help": '\\rowgrp{\\row{\\str{Multiply the whole number times the denominator and add the result to the numerator. \xA0}}}{\\row{\\str{\xA0}}}{\\row{\\frac{\\fracstr{(2 \xb7 6) + 5}}{\\fracstr{6}}}{\\row{\\str{\xA0 = \xA0}}}{\\row{\\frac{\\fracstr{17}}{\\fracstr{6}}}{\\row{css{\\str{answer:  \xA0}}{label_like margin-left-small}}{css{\\frac{\\fracstr{17}}{\\fracstr{6}}}{label_like}}}}'
												}
											}]
										}]
									},
									{
										title: 'Change Mixed Numbers into Improper Fractions',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\rowgrp{\\row{\\str{Write the mixed number as an improper fraction:}}}{\\row{\\mixed{\\str{2}}{\\frac{\\fracstr{1}}{\\fracstr{3}}}}}',
												answer: '\\frac{\\input{7}}{\\input{3}}',
												controls: {
													"checkAnswer": true,
													"help": '\\rowgrp{\\row{\\str{Multiply the whole number times the denominator and add the result to the numerator. \xA0}}}{\\row{\\str{\xA0}}}{\\row{\\frac{\\fracstr{(2 \xb7 3) + 1}}{\\fracstr{3}}}{\\row{\\str{\xA0 = \xA0}}}{\\row{\\frac{\\fracstr{7}}{\\fracstr{3}}}{\\row{css{\\str{answer:  \xA0}}{label_like margin-left-small}}{css{\\frac{\\fracstr{7}}{\\fracstr{3}}}{label_like}}}}'
												}
											}]
										}]
									},
									{
										title: 'Change Mixed Numbers into Improper Fractions',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\rowgrp{\\row{\\str{Write the mixed number as an improper fraction:}}}{\\row{\\mixed{\\str{2}}{\\frac{\\fracstr{1}}{\\fracstr{2}}}}}',
												answer: '\\frac{\\input{5}}{\\input{2}}',
												controls: {
													"checkAnswer": true,
													"help": '\\rowgrp{\\row{\\str{Multiply the whole number times the denominator and add the result to the numerator. \xA0}}}{\\row{\\str{\xA0}}}{\\row{\\frac{\\fracstr{(2 \xb7 2) + 1}}{\\fracstr{2}}}{\\row{\\str{\xA0 = \xA0}}}{\\row{\\frac{\\fracstr{5}}{\\fracstr{2}}}{\\row{css{\\str{answer:  \xA0}}{label_like margin-left-small}}{css{\\frac{\\fracstr{5}}{\\fracstr{2}}}{label_like}}}}'
												}
											}]
										}]
									},
									{
										title: 'Change Mixed Numbers into Improper Fractions',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\rowgrp{\\row{\\str{Write the mixed number as an improper fraction:}}}{\\row{\\mixed{\\str{1}}{\\frac{\\fracstr{5}}{\\fracstr{13}}}}}',
												answer: '\\frac{\\input{18}}{\\input{13}}',
												controls: {
													"checkAnswer": true,
													"help": '\\rowgrp{\\row{\\str{Multiply the whole number times the denominator and add the result to the numerator. \xA0}}}{\\row{\\str{\xA0}}}{\\row{\\frac{\\fracstr{(1 \xb7 13) + 5}}{\\fracstr{13}}}{\\row{\\str{\xA0 = \xA0}}}{\\row{\\frac{\\fracstr{18}}{\\fracstr{13}}}{\\row{css{\\str{answer:  \xA0}}{label_like margin-left-small}}{css{\\frac{\\fracstr{18}}{\\fracstr{13}}}{label_like}}}}'
												}
											}]
										}]
									}]
                            }, {
								title: '8.2 Change Improper Fractions into Mixed Numbers',
                                path: '8.2-change-improper-fractions-into-mixed-numbers',
                                children: [
                                    {
        								title: 'Change Improper Fractions into Mixed Numbers',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\rowgrp{\\row{\\str{Write the improper fraction as a mixed number:}}}{\\row{\\frac{\\fracstr{8}}{\\fracstr{3}}}}',
												answer: '\\mixed{\\input{2}}{\\frac{\\input{2}}{\\input{3}}}',
												controls: {
													"checkAnswer": true,
													"help": '\\rowgrp{\\row{\\str{Divide the numerator by the denominator, then make the quotient the mixed number whole and the remainder the mixed number numerator. \xA0}}}{\\row{\\str{\xA0}}}{\\row{\\frac{\\fracstr{8}}{\\fracstr{3}}}{\\row{\\str{\xA0 = \xA0}}}{\\row{\\mixed{\\fracstr{2}}{\\frac{\\fracstr{2}}{\\fracstr{3}}}}{\\row{css{\\str{answer:  \xA0}}{label_like margin-left-small}}{css{\\mixed{\\fracstr{2}}{\\frac{\\fracstr{2}}{\\fracstr{3}}}}{label_like}}}}'
												}
											}]
										}]
									},
									{
										title: 'Change Improper Fractions into Mixed Numbers',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\rowgrp{\\row{\\str{Write the improper fraction as a mixed number:}}}{\\row{\\frac{\\fracstr{3}}{\\fracstr{2}}}}',
												answer: '\\mixed{\\input{1}}{\\frac{\\input{1}}{\\input{2}}}',
												controls: {
													"checkAnswer": true,
													"help": '\\rowgrp{\\row{\\str{Divide the numerator by the denominator, then make the quotient the mixed number whole and the remainder the mixed number numerator. \xA0}}}{\\row{\\str{\xA0}}}{\\row{\\frac{\\fracstr{3}}{\\fracstr{2}}}{\\row{\\str{\xA0 = \xA0}}}{\\row{\\mixed{\\fracstr{1}}{\\frac{\\fracstr{1}}{\\fracstr{2}}}}{\\row{css{\\str{answer:  \xA0}}{label_like margin-left-small}}{css{\\mixed{\\fracstr{1}}{\\frac{\\fracstr{1}}{\\fracstr{2}}}}{label_like}}}}'
												}
											}]
										}]
									},
									{
										title: 'Change Improper Fractions into Mixed Numbers',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\rowgrp{\\row{\\str{Write the improper fraction as a mixed number:}}}{\\row{\\frac{\\fracstr{13}}{\\fracstr{6}}}}',
												answer: '\\mixed{\\input{2}}{\\frac{\\input{1}}{\\input{6}}}',
												controls: {
													"checkAnswer": true,
													"help": '\\rowgrp{\\row{\\str{Divide the numerator by the denominator, then make the quotient the mixed number whole and the remainder the mixed number numerator. \xA0}}}{\\row{\\str{\xA0}}}{\\row{\\frac{\\fracstr{13}}{\\fracstr{6}}}{\\row{\\str{\xA0 = \xA0}}}{\\row{\\mixed{\\fracstr{2}}{\\frac{\\fracstr{1}}{\\fracstr{6}}}}{\\row{css{\\str{answer:  \xA0}}{label_like margin-left-small}}{css{\\mixed{\\fracstr{2}}{\\frac{\\fracstr{1}}{\\fracstr{6}}}}{label_like}}}}'													
												}
											}]
										}]
									},
									{
										title: 'Change Improper Fractions into Mixed Numbers',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\rowgrp{\\row{\\str{Write the improper fraction as a mixed number:}}}{\\row{\\frac{\\fracstr{13}}{\\fracstr{2}}}}',
												answer: '\\mixed{\\input{6}}{\\frac{\\input{1}}{\\input{2}}}',
												controls: {
													"checkAnswer": true,
													"help": '\\rowgrp{\\row{\\str{Divide the numerator by the denominator, then make the quotient the mixed number whole and the remainder the mixed number numerator. \xA0}}}{\\row{\\str{\xA0}}}{\\row{\\frac{\\fracstr{13}}{\\fracstr{2}}}{\\row{\\str{\xA0 = \xA0}}}{\\row{\\mixed{\\fracstr{6}}{\\frac{\\fracstr{1}}{\\fracstr{2}}}}{\\row{css{\\str{answer:  \xA0}}{label_like margin-left-small}}{css{\\mixed{\\fracstr{6}}{\\frac{\\fracstr{1}}{\\fracstr{2}}}}{label_like}}}}'
												}
											}]
										}]
									},
									{
										title: 'Change Improper Fractions into Mixed Numbers',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\rowgrp{\\row{\\str{Write the improper fraction as a mixed number (simplify your answer if necessary):}}}{\\row{\\frac{\\fracstr{35}}{\\fracstr{20}}}}',
												answer: '\\mixed{\\input{1}}{\\frac{\\input{3}}{\\input{4}}}',
												controls: {
													"checkAnswer": true,
													"help": '\\rowgrp{\\row{\\str{Divide the numerator by the denominator, then make the quotient the mixed number whole and the remainder the mixed number numerator. \xA0}}}{\\row{\\str{\xA0}}}{\\row{\\frac{\\fracstr{35}}{\\fracstr{20}}}{\\row{\\str{\xA0 = \xA0}}}{\\row{\\mixed{\\fracstr{1}}{\\frac{\\fracstr{15}}{\\fracstr{20}}}}{\\row{\\str{\xA0 = \xA0}}}{\\row{\\mixed{\\fracstr{1}}{\\frac{\\fracstr{3}}{\\fracstr{4}}}}{\\row{css{\\str{answer:  \xA0}}{label_like margin-left-small}}{css{\\mixed{\\fracstr{1}}{\\frac{\\fracstr{3}}{\\fracstr{4}}}}{label_like}}}}'
												}
											}]
										}]
									},
									{
										title: 'Change Improper Fractions into Mixed Numbers',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\rowgrp{\\row{\\str{Write the improper fraction as a mixed number (simplify your answer if necessary):}}}{\\row{\\frac{\\fracstr{35}}{\\fracstr{15}}}}',
												answer: '\\mixed{\\input{2}}{\\frac{\\input{1}}{\\input{3}}}',
												controls: {
													"checkAnswer": true,
													"help": '\\rowgrp{\\row{\\str{Divide the numerator by the denominator, then make the quotient the mixed number whole and the remainder the mixed number numerator. \xA0}}}{\\row{\\str{\xA0}}}{\\row{\\frac{\\fracstr{35}}{\\fracstr{15}}}{\\row{\\str{\xA0 = \xA0}}}{\\row{\\mixed{\\fracstr{2}}{\\frac{\\fracstr{5}}{\\fracstr{15}}}}{\\row{\\str{\xA0 = \xA0}}}{\\row{\\mixed{\\fracstr{2}}{\\frac{\\fracstr{1}}{\\fracstr{3}}}}{\\row{css{\\str{answer:  \xA0}}{label_like margin-left-small}}{css{\\mixed{\\fracstr{2}}{\\frac{\\fracstr{1}}{\\fracstr{3}}}}{label_like}}}}'
												}
											}]
										}]
									},
									{
										title: 'Change Improper Fractions into Mixed Numbers',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\rowgrp{\\row{\\str{Write the improper fraction as a mixed number (simplify your answer if necessary):}}}{\\row{\\frac{\\fracstr{110}}{\\fracstr{30}}}}',
												answer: '\\mixed{\\input{3}}{\\frac{\\input{2}}{\\input{3}}}',
												controls: {
													"checkAnswer": true,
													"help": '\\rowgrp{\\row{\\str{Divide the numerator by the denominator, then make the quotient the mixed number whole and the remainder the mixed number numerator. \xA0}}}{\\row{\\str{\xA0}}}{\\row{\\frac{\\fracstr{110}}{\\fracstr{30}}}{\\row{\\str{\xA0 = \xA0}}}{\\row{\\mixed{\\fracstr{3}}{\\frac{\\fracstr{20}}{\\fracstr{30}}}}{\\row{\\str{\xA0 = \xA0}}}{\\row{\\mixed{\\fracstr{3}}{\\frac{\\fracstr{2}}{\\fracstr{3}}}}{\\row{css{\\str{answer:  \xA0}}{label_like margin-left-small}}{css{\\mixed{\\fracstr{3}}{\\frac{\\fracstr{2}}{\\fracstr{3}}}}{label_like}}}}'
												}
											}]
										}]
									},
									{
										title: 'Change Improper Fractions into Mixed Numbers',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\rowgrp{\\row{\\str{Write the improper fraction as a mixed number:}}}{\\row{\\frac{\\fracstr{11}}{\\fracstr{8}}}}',
												answer: '\\mixed{\\input{1}}{\\frac{\\input{3}}{\\input{8}}}',
												controls: {
													"checkAnswer": true,
													"help": '\\rowgrp{\\row{\\str{Divide the numerator by the denominator, then make the quotient the mixed number whole and the remainder the mixed number numerator. \xA0}}}{\\row{\\str{\xA0}}}{\\row{\\frac{\\fracstr{11}}{\\fracstr{8}}}{\\row{\\str{\xA0 = \xA0}}}{\\row{\\mixed{\\fracstr{1}}{\\frac{\\fracstr{3}}{\\fracstr{8}}}}{\\row{css{\\str{answer:  \xA0}}{label_like margin-left-small}}{css{\\mixed{\\fracstr{1}}{\\frac{\\fracstr{3}}{\\fracstr{8}}}}{label_like}}}}'
												}
											}]
										}]
									},
									{
										title: 'Change Improper Fractions into Mixed Numbers',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\rowgrp{\\row{\\str{Write the improper fraction as a mixed number (simplify your answer if necessary):}}}{\\row{\\frac{\\fracstr{10}}{\\fracstr{4}}}}',
												answer: '\\mixed{\\input{2}}{\\frac{\\input{1}}{\\input{2}}}',
												controls: {
													"checkAnswer": true,
													"help": '\\rowgrp{\\row{\\str{Divide the numerator by the denominator, then make the quotient the mixed number whole and the remainder the mixed number numerator. \xA0}}}{\\row{\\str{\xA0}}}{\\row{\\frac{\\fracstr{10}}{\\fracstr{4}}}{\\row{\\str{\xA0 = \xA0}}}{\\row{\\mixed{\\fracstr{2}}{\\frac{\\fracstr{2}}{\\fracstr{4}}}}{\\row{\\str{\xA0 = \xA0}}}{\\row{\\mixed{\\fracstr{2}}{\\frac{\\fracstr{1}}{\\fracstr{2}}}}{\\row{css{\\str{answer:  \xA0}}{label_like margin-left-small}}{css{\\mixed{\\fracstr{2}}{\\frac{\\fracstr{1}}{\\fracstr{2}}}}{label_like}}}}'
												}
											}]
										}]
									},
									{
										title: 'Change Improper Fractions into Mixed Numbers',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\rowgrp{\\row{\\str{Write the improper fraction as a mixed number (simplify your answer if necessary):}}}{\\row{\\frac{\\fracstr{77}}{\\fracstr{49}}}}',
												answer: '\\mixed{\\input{1}}{\\frac{\\input{4}}{\\input{7}}}',
												controls: {
													"checkAnswer": true,
													"help": '\\rowgrp{\\row{\\str{Divide the numerator by the denominator, then make the quotient the mixed number whole and the remainder the mixed number numerator. \xA0}}}{\\row{\\str{\xA0}}}{\\row{\\frac{\\fracstr{77}}{\\fracstr{49}}}{\\row{\\str{\xA0 = \xA0}}}{\\row{\\mixed{\\fracstr{1}}{\\frac{\\fracstr{28}}{\\fracstr{49}}}}{\\row{\\str{\xA0 = \xA0}}}{\\row{\\mixed{\\fracstr{1}}{\\frac{\\fracstr{4}}{\\fracstr{7}}}}{\\row{css{\\str{answer:  \xA0}}{label_like margin-left-small}}{css{\\mixed{\\fracstr{1}}{\\frac{\\fracstr{4}}{\\fracstr{7}}}}{label_like}}}}'
												}
											}]
										}]
									}]
                            }, {
                            title: '8.3 Multiply Mixed Numbers',
                            path: '8.3-multiply-mixed-numbers',
                            children: [{
                                title: 'Multiply Mixed Numbers',
                                children: [{
                                    title: 'Main Answer',
                                    children: [{
                                        problem: '\\row{\\html{Solve &nbsp;}}{\\mixed{\\fracstr{1}}{\\frac{\\fracstr{1}}{\\fracstr{3}}}}{\\sign{&nbsp; &times; &nbsp;}}{\\mixed{\\fracstr{1}}{\\frac{\\fracstr{2}}{\\fracstr{3}}}}',
                                        answer: '\\mixed{\\input{2}}{\\frac{\\input{2}}{\\input{9}}}',
                                        controls: {
                                            "checkAnswer": true,
                                            "help": false,
                                            "workbook": true
                                        }
                                    }]
                                }, {
                                    title: 'Workbook',
                                    children: [{
                                        problem: '\\rowgrp{\\row{\\str{Change the mixed numbers into improper fractions.}}}{\\row{\\str{\xA0}}}{\\row{\\mixed{\\fracstr{1}}{\\frac{\\fracstr{1}}{\\fracstr{3}}}}{\\sign{&nbsp; &times; &nbsp;}}{\\mixed{\\fracstr{1}}{\\frac{\\fracstr{2}}{\\fracstr{3}}}}',
                                        answer: '\\grp{\\frac{\\input{4}}{\\input{3}}}{\\sign{&times;}}{\\frac{\\input{5}}{\\input{3}}}',
                                        controls: {
                                            "checkAnswer": true,
                                            "help": true
                                        }
                                    }, {
                                        problem: '\\str{Multiply the fractions together.}',
                                        answer: '\\multiplyfracs{\\frac{\\str{4}}{\\str{3}}}{\\frac{\\str{5}}{\\str{3}}}',
                                        controls: {
                                            "checkAnswer": true,
                                            "help": true
                                        }
                                    }, {
                                        problem: '\\str{Reduce the fraction to its lowest terms.}',
                                        answer: '\\prev{feedbackData.getPrevious()}{\\reducefrac{\\frac{\\str{20}}{\\str{9}}}',
                                        controls: {
                                            "checkAnswer": true,
                                            "help": true
                                        }
                                    }, {
                                        problem: '\\rowgrp{\\row{\\str{Write the fraction as a mixed number.}}}{\\row{\\str{\xA0}}}{\\row{\\frac{\\str{20}}{\\str{9}}}',
                                        answer: '\\mixed{\\input{2}}{\\frac{\\input{2}}{\\input{9}}}',
                                        controls: {
                                            "checkAnswer": true,
                                            "help": '\\rowgrp{\\row{\\str{Divide the numerator by the denominator, then make the quotient the mixed number whole and the remainder the mixed number numerator. \xA0}}}{\\row{\\str{\xA0}}}{\\row{\\frac{\\fracstr{20}}{\\fracstr{9}}}{\\row{\\str{\xA0 = \xA0}}}{\\row{\\mixed{\\fracstr{2}}{\\frac{\\fracstr{2}}{\\fracstr{9}}}}{\\row{css{\\str{answer:  \xA0}}{label_like margin-left-small}}{css{\\mixed{\\fracstr{2}}{\\frac{\\fracstr{2}}{\\fracstr{9}}}}{label_like}}}}'
                                        }
                                    }]
                                }]
                            }, {
                               title: 'Multiply Mixed Numbers',
                               children: [{
                                    title: 'Main Answer',
                                    children: [{
                                        problem: '\\row{\\html{Solve &nbsp;}}{\\mixed{\\fracstr{1}}{\\frac{\\fracstr{3}}{\\fracstr{7}}}}{\\sign{&nbsp; &times; &nbsp;}}{\\mixed{\\fracstr{1}}{\\frac{\\fracstr{1}}{\\fracstr{7}}}}',
                                        answer: '\\mixed{\\input{1}}{\\frac{\\input{31}}{\\input{49}}}',
                                        controls: {
                                            "checkAnswer": true,
                                            "help": false,
                                            "workbook": true
                                        }
                                    }]
                                }, {
                                    title: 'Workbook',
                                    children: [{
                                        problem: '\\rowgrp{\\row{\\str{Change the mixed numbers into improper fractions.}}}{\\row{\\str{\xA0}}}{\\row{\\mixed{\\fracstr{1}}{\\frac{\\fracstr{3}}{\\fracstr{7}}}}{\\sign{&nbsp; &times; &nbsp;}}{\\mixed{\\fracstr{1}}{\\frac{\\fracstr{1}}{\\fracstr{7}}}}',
                                        answer: '\\grp{\\frac{\\input{10}}{\\input{7}}}{\\sign{&times;}}{\\frac{\\input{8}}{\\input{7}}}',
                                        controls: {
                                            "checkAnswer": true,
                                            "help": true
                                        }
                                    }, {
                                        problem: '\\str{Multiply the fractions together.}',
                                        answer: '\\multiplyfracs{\\frac{\\str{10}}{\\str{7}}}{\\frac{\\str{8}}{\\str{7}}}',
                                        controls: {
                                            "checkAnswer": true,
                                            "help": true
                                        }
                                    }, {
                                        problem: '\\str{Reduce the fraction to its lowest terms.}',
                                        answer: '\\prev{feedbackData.getPrevious()}{\\reducefrac{\\frac{\\str{80}}{\\str{49}}}',
                                        controls: {
                                            "checkAnswer": true,
                                            "help": true
                                        }
                                    }, {
                                        problem: '\\rowgrp{\\row{\\str{Write the fraction as a mixed number.}}}{\\row{\\str{\xA0}}}{\\row{\\frac{\\str{80}}{\\str{49}}}',
                                        answer: '\\mixed{\\input{1}}{\\frac{\\input{31}}{\\input{49}}}',
                                        controls: {
                                            "checkAnswer": true,
                                            "help": '\\rowgrp{\\row{\\str{Divide the numerator by the denominator, then make the quotient the mixed number whole and the remainder the mixed number numerator. \xA0}}}{\\row{\\str{\xA0}}}{\\row{\\frac{\\fracstr{80}}{\\fracstr{49}}}{\\row{\\str{\xA0 = \xA0}}}{\\row{\\mixed{\\fracstr{1}}{\\frac{\\fracstr{31}}{\\fracstr{49}}}}{\\row{css{\\str{answer:  \xA0}}{label_like margin-left-small}}{css{\\mixed{\\fracstr{1}}{\\frac{\\fracstr{31}}{\\fracstr{49}}}}{label_like}}}}'
                                        }
                                    }]
                                }]
                            }, {
                               title: 'Multiply Mixed Numbers',
                               children: [{
                                    title: 'Main Answer',
                                    children: [{
                                        problem: '\\row{\\html{Solve &nbsp;}}{\\mixed{\\fracstr{1}}{\\frac{\\fracstr{2}}{\\fracstr{5}}}}{\\sign{&nbsp; &times; &nbsp;}}{\\mixed{\\fracstr{2}}{\\frac{\\fracstr{1}}{\\fracstr{5}}}}',
                                        answer: '\\mixed{\\input{3}}{\\frac{\\input{2}}{\\input{25}}}',
                                        controls: {
                                            "checkAnswer": true,
                                            "help": false,
                                            "workbook": true
                                        }
                                    }]
                                }, {
                                    title: 'Workbook',
                                    children: [{
                                        problem: '\\rowgrp{\\row{\\str{Change the mixed numbers into improper fractions.}}}{\\row{\\str{\xA0}}}{\\row{\\mixed{\\fracstr{1}}{\\frac{\\fracstr{2}}{\\fracstr{5}}}}{\\sign{&nbsp; &times; &nbsp;}}{\\mixed{\\fracstr{2}}{\\frac{\\fracstr{1}}{\\fracstr{5}}}}',
                                        answer: '\\grp{\\frac{\\input{7}}{\\input{5}}}{\\sign{&times;}}{\\frac{\\input{11}}{\\input{5}}}',
                                        controls: {
                                            "checkAnswer": true,
                                            "help": true
                                        }
                                    }, {
                                        problem: '\\str{Reduce the fraction to its lowest terms.}',
                                        answer: '\\prev{feedbackData.getPrevious()}{\\reducefrac{\\frac{\\str{77}}{\\str{25}}}',
                                        controls: {
                                            "checkAnswer": true,
                                            "help": true
                                        }
                                    }, {
                                        problem: '\\rowgrp{\\row{\\str{Write the fraction as a mixed number.}}}{\\row{\\str{\xA0}}}{\\row{\\frac{\\str{77}}{\\str{25}}}',
                                        answer: '\\mixed{\\input{3}}{\\frac{\\input{2}}{\\input{25}}}',
                                        controls: {
                                            "checkAnswer": true,
                                            "help": '\\rowgrp{\\row{\\str{Divide the numerator by the denominator, then make the quotient the mixed number whole and the remainder the mixed number numerator. \xA0}}}{\\row{\\str{\xA0}}}{\\row{\\frac{\\fracstr{77}}{\\fracstr{25}}}{\\row{\\str{\xA0 = \xA0}}}{\\row{\\mixed{\\fracstr{3}}{\\frac{\\fracstr{2}}{\\fracstr{25}}}}{\\row{css{\\str{answer:  \xA0}}{label_like margin-left-small}}{css{\\mixed{\\fracstr{3}}{\\frac{\\fracstr{2}}{\\fracstr{25}}}}{label_like}}}}'
                                        }
                                    }]
                                }]
                            }, {
                                title: 'Multiply Mixed Numbers',
                               children: [{
                                    title: 'Main Answer',
                                    children: [{
                                        problem: '\\row{\\html{Solve &nbsp;}}{\\mixed{\\fracstr{2}}{\\frac{\\fracstr{1}}{\\fracstr{2}}}}{\\sign{&nbsp; &times; &nbsp;}}{\\mixed{\\fracstr{2}}{\\frac{\\fracstr{1}}{\\fracstr{2}}}}',
                                        answer: '\\mixed{\\input{6}}{\\frac{\\input{1}}{\\input{4}}}',
                                        controls: {
                                            "checkAnswer": true,
                                            "help": false,
                                            "workbook": true
                                        }
                                    }]
                                }, {
                                    title: 'Workbook',
                                    children: [{
                                        problem: '\\rowgrp{\\row{\\str{Change the mixed numbers into improper fractions.}}}{\\row{\\str{\xA0}}}{\\row{\\mixed{\\fracstr{2}}{\\frac{\\fracstr{1}}{\\fracstr{2}}}}{\\sign{&nbsp; &times; &nbsp;}}{\\mixed{\\fracstr{2}}{\\frac{\\fracstr{1}}{\\fracstr{2}}}}',
                                        answer: '\\grp{\\frac{\\input{5}}{\\input{2}}}{\\sign{&times;}}{\\frac{\\input{5}}{\\input{2}}}',
                                        controls: {
                                            "checkAnswer": true,
                                            "help": true
                                        }
                                    }, {
                                        problem: '\\str{Multiply the fractions together.}',
                                        answer: '\\multiplyfracs{\\frac{\\str{5}}{\\str{2}}}{\\frac{\\str{5}}{\\str{2}}}',
                                        controls: {
                                            "checkAnswer": true,
                                            "help": true
                                        }
                                    }, {
                                        problem: '\\str{Reduce the fraction to its lowest terms.}',
                                        answer: '\\prev{feedbackData.getPrevious()}{\\reducefrac{\\frac{\\str{25}}{\\str{4}}}',
                                        controls: {
                                            "checkAnswer": true,
                                            "help": true
                                        }
                                    }, {
                                        problem: '\\rowgrp{\\row{\\str{Write the fraction as a mixed number.}}}{\\row{\\str{\xA0}}}{\\row{\\frac{\\str{25}}{\\str{4}}}',
                                        answer: '\\mixed{\\input{6}}{\\frac{\\input{1}}{\\input{4}}}',
                                        controls: {
                                            "checkAnswer": true,
                                            "help": '\\rowgrp{\\row{\\str{Divide the numerator by the denominator, then make the quotient the mixed number whole and the remainder the mixed number numerator. \xA0}}}{\\row{\\str{\xA0}}}{\\row{\\frac{\\fracstr{25}}{\\fracstr{4}}}{\\row{\\str{\xA0 = \xA0}}}{\\row{\\mixed{\\fracstr{6}}{\\frac{\\fracstr{1}}{\\fracstr{4}}}}{\\row{css{\\str{answer:  \xA0}}{label_like margin-left-small}}{css{\\mixed{\\fracstr{6}}{\\frac{\\fracstr{1}}{\\fracstr{4}}}}{label_like}}}}'
                                        }
                                    }]
                                }]                            
							}, {
                                title: 'Multiply Mixed Numbers',
                               children: [{
                                    title: 'Main Answer',
                                    children: [{
                                        problem: '\\row{\\html{Solve &nbsp;}}{\\mixed{\\fracstr{2}}{\\frac{\\fracstr{1}}{\\fracstr{8}}}}{\\sign{&nbsp; &times; &nbsp;}}{\\mixed{\\fracstr{1}}{\\frac{\\fracstr{3}}{\\fracstr{8}}}}',
                                        answer: '\\mixed{\\input{2}}{\\frac{\\input{59}}{\\input{64}}}',
                                        controls: {
                                            "checkAnswer": true,
                                            "help": false,
                                            "workbook": true
                                        }
                                    }]
                                }, {
                                    title: 'Workbook',
                                    children: [{
                                        problem: '\\rowgrp{\\row{\\str{Change the mixed numbers into improper fractions.}}}{\\row{\\str{\xA0}}}{\\row{\\mixed{\\fracstr{2}}{\\frac{\\fracstr{1}}{\\fracstr{8}}}}{\\sign{&nbsp; &times; &nbsp;}}{\\mixed{\\fracstr{1}}{\\frac{\\fracstr{3}}{\\fracstr{8}}}}',
                                        answer: '\\grp{\\frac{\\input{17}}{\\input{8}}}{\\sign{&times;}}{\\frac{\\input{11}}{\\input{8}}}',
                                        controls: {
                                            "checkAnswer": true,
                                            "help": true

                                        }
                                    }, {
                                        problem: '\\str{Multiply the fractions together.}',
                                        answer: '\\multiplyfracs{\\frac{\\str{17}}{\\str{8}}}{\\frac{\\str{11}}{\\str{8}}}',
                                        controls: {
                                            "checkAnswer": true,
                                            "help": true
                                        }
                                    }, {
                                        problem: '\\str{Reduce the fraction to its lowest terms.}',
                                        answer: '\\prev{feedbackData.getPrevious()}{\\reducefrac{\\frac{\\str{187}}{\\str{64}}}',
                                        controls: {
                                            "checkAnswer": true,
                                            "help": true
                                        }
                                    }, {
                                        problem: '\\rowgrp{\\row{\\str{Write the fraction as a mixed number.}}}{\\row{\\str{\xA0}}}{\\row{\\frac{\\str{187}}{\\str{64}}}',
                                        answer: '\\mixed{\\input{2}}{\\frac{\\input{59}}{\\input{64}}}',
                                        controls: {
                                            "checkAnswer": true,
                                            "help": '\\rowgrp{\\row{\\str{Divide the numerator by the denominator, then make the quotient the mixed number whole and the remainder the mixed number numerator. \xA0}}}{\\row{\\str{\xA0}}}{\\row{\\frac{\\fracstr{187}}{\\fracstr{64}}}{\\row{\\str{\xA0 = \xA0}}}{\\row{\\mixed{\\fracstr{2}}{\\frac{\\fracstr{59}}{\\fracstr{64}}}}{\\row{css{\\str{answer:  \xA0}}{label_like margin-left-small}}{css{\\mixed{\\fracstr{2}}{\\frac{\\fracstr{59}}{\\fracstr{64}}}}{label_like}}}}'
                                        }
                                    }]
                                }]
                            }, {
                                title: 'Multiply Mixed Numbers',
                               children: [{
                                    title: 'Main Answer',
                                    children: [{
                                        problem: '\\row{\\html{Solve &nbsp;}}{\\mixed{\\fracstr{1}}{\\frac{\\fracstr{2}}{\\fracstr{3}}}}{\\sign{&nbsp; &times; &nbsp;}}{\\mixed{\\fracstr{1}}{\\frac{\\fracstr{5}}{\\fracstr{6}}}}',
                                        answer: '\\mixed{\\input{3}}{\\frac{\\input{1}}{\\input{18}}}',
                                        controls: {
                                            "checkAnswer": true,
                                            "help": false,
                                            "workbook": true
                                        }
                                    }]
                                }, {
                                    title: 'Workbook',
                                    children: [{
                                        problem: '\\rowgrp{\\row{\\str{Change the mixed numbers into improper fractions.}}}{\\row{\\str{\xA0}}}{\\row{\\mixed{\\fracstr{1}}{\\frac{\\fracstr{2}}{\\fracstr{3}}}}{\\sign{&nbsp; &times; &nbsp;}}{\\mixed{\\fracstr{1}}{\\frac{\\fracstr{5}}{\\fracstr{6}}}}',
                                        answer: '\\grp{\\frac{\\input{5}}{\\input{3}}}{\\sign{&times;}}{\\frac{\\input{11}}{\\input{6}}}',
                                        controls: {
                                            "checkAnswer": true,
                                            "help": true
                                        }
                                    }, {
                                        problem: '\\str{Multiply the fractions together.}',
                                        answer: '\\multiplyfracs{\\frac{\\str{5}}{\\str{3}}}{\\frac{\\str{11}}{\\str{6}}}',
                                        controls: {
                                            "checkAnswer": true,
                                            "help": true
                                        }
                                    }, {
                                        problem: '\\str{Reduce the fraction to its lowest terms.}',
                                        answer: '\\prev{feedbackData.getPrevious()}{\\reducefrac{\\frac{\\str{55}}{\\str{18}}}',
                                        controls: {
                                            "checkAnswer": true,
                                            "help": true
                                        }
                                    }, {
                                        problem: '\\rowgrp{\\row{\\str{Write the fraction as a mixed number.}}}{\\row{\\str{\xA0}}}{\\row{\\frac{\\str{55}}{\\str{18}}}',
                                        answer: '\\mixed{\\input{3}}{\\frac{\\input{1}}{\\input{18}}}',
                                        controls: {
                                            "checkAnswer": true,
                                            "help": '\\rowgrp{\\row{\\str{Divide the numerator by the denominator, then make the quotient the mixed number whole and the remainder the mixed number numerator. \xA0}}}{\\row{\\str{\xA0}}}{\\row{\\frac{\\fracstr{55}}{\\fracstr{18}}}{\\row{\\str{\xA0 = \xA0}}}{\\row{\\mixed{\\fracstr{3}}{\\frac{\\fracstr{1}}{\\fracstr{18}}}}{\\row{css{\\str{answer:  \xA0}}{label_like margin-left-small}}{css{\\mixed{\\fracstr{3}}{\\frac{\\fracstr{1}}{\\fracstr{18}}}}{label_like}}}}'
                                        }
                                    }]
                                }]
                            }, {
                                title: 'Multiply Mixed Numbers',
                               children: [{
                                    title: 'Main Answer',
                                    children: [{
                                        problem: '\\row{\\html{Solve &nbsp;}}{\\mixed{\\fracstr{2}}{\\frac{\\fracstr{8}}{\\fracstr{9}}}}{\\sign{&nbsp; &times; &nbsp;}}{\\mixed{\\fracstr{2}}{\\frac{\\fracstr{1}}{\\fracstr{9}}}}',
                                        answer: '\\mixed{\\input{6}}{\\frac{\\input{8}}{\\input{27}}}',
                                        controls: {
                                            "checkAnswer": true,
                                            "help": false,
                                            "workbook": true
                                        }
                                    }]
                                }, {
                                    title: 'Workbook',
                                    children: [{
                                        problem: '\\rowgrp{\\row{\\str{Change the mixed numbers into improper fractions.}}}{\\row{\\str{\xA0}}}{\\row{\\mixed{\\fracstr{2}}{\\frac{\\fracstr{8}}{\\fracstr{9}}}}{\\sign{&nbsp; &times; &nbsp;}}{\\mixed{\\fracstr{2}}{\\frac{\\fracstr{1}}{\\fracstr{9}}}}',
                                        answer: '\\grp{\\frac{\\input{26}}{\\input{9}}}{\\sign{&times;}}{\\frac{\\input{19}}{\\input{9}}}',
                                        controls: {
                                            "checkAnswer": true,
                                            "help": true
                                        }
                                    }, {
                                        problem: '\\str{Multiply the fractions together.}',
                                        answer: '\\multiplyfracs{\\frac{\\str{26}}{\\str{9}}}{\\frac{\\str{19}}{\\str{9}}}',
                                        controls: {
                                            "checkAnswer": true,
                                            "help": true
                                        }
                                    }, {
                                        problem: '\\str{Reduce the fraction to its lowest terms.}',
                                        answer: '\\prev{feedbackData.getPrevious()}{\\reducefrac{\\frac{\\str{494}}{\\str{81}}}',
                                        controls: {
                                            "checkAnswer": true,
                                            "help": true
                                        }
                                    }, {
                                        problem: '\\rowgrp{\\row{\\str{Write the fraction as a mixed number.}}}{\\row{\\str{\xA0}}}{\\row{\\frac{\\str{494}}{\\str{81}}}',
                                        answer: '\\mixed{\\input{6}}{\\frac{\\input{8}}{\\input{27}}}',
                                        controls: {
                                            "checkAnswer": true,
                                            "help": '\\rowgrp{\\row{\\str{Divide the numerator by the denominator, then make the quotient the mixed number whole and the remainder the mixed number numerator. \xA0}}}{\\row{\\str{\xA0}}}{\\row{\\frac{\\fracstr{494}}{\\fracstr{81}}}{\\row{\\str{\xA0 = \xA0}}}{\\row{\\mixed{\\fracstr{6}}{\\frac{\\fracstr{8}}{\\fracstr{27}}}}{\\row{css{\\str{answer:  \xA0}}{label_like margin-left-small}}{css{\\mixed{\\fracstr{6}}{\\frac{\\fracstr{8}}{\\fracstr{27}}}}{label_like}}}}'
                                        }
                                    }]
                                }]                            
							 }, {
                                title: 'Multiply Mixed Numbers',
                               children: [{
                                    title: 'Main Answer',
                                    children: [{
                                        problem: '\\row{\\html{Solve &nbsp;}}{\\mixed{\\fracstr{1}}{\\frac{\\fracstr{1}}{\\fracstr{3}}}}{\\sign{&nbsp; &times; &nbsp;}}{\\mixed{\\fracstr{2}}{\\frac{\\fracstr{1}}{\\fracstr{2}}}}',
                                        answer: '\\mixed{\\input{3}}{\\frac{\\input{2}}{\\input{3}}}',
                                        controls: {
                                            "checkAnswer": true,
                                            "help": false,
                                            "workbook": true
                                        }
                                    }]
                                }, {
                                    title: 'Workbook',
                                    children: [{
                                        problem: '\\rowgrp{\\row{\\str{Change the mixed numbers into improper fractions.}}}{\\row{\\str{\xA0}}}{\\row{\\mixed{\\fracstr{1}}{\\frac{\\fracstr{1}}{\\fracstr{3}}}}{\\sign{&nbsp; &times; &nbsp;}}{\\mixed{\\fracstr{2}}{\\frac{\\fracstr{1}}{\\fracstr{2}}}}',
                                        answer: '\\grp{\\frac{\\input{4}}{\\input{3}}}{\\sign{&times;}}{\\frac{\\input{5}}{\\input{2}}}',
                                        controls: {
                                            "checkAnswer": true,
                                            "help": true
                                        }
                                    }, {
                                        problem: '\\str{Multiply the fractions together.}',
                                        answer: '\\multiplyfracs{\\frac{\\str{4}}{\\str{3}}}{\\frac{\\str{5}}{\\str{2}}}',
                                        controls: {
                                            "checkAnswer": true,
                                            "help": true
                                        }
                                    }, {
                                        problem: '\\str{Reduce the fraction to its lowest terms.}',
                                        answer: '\\prev{feedbackData.getPrevious()}{\\reducefrac{\\frac{\\str{20}}{\\str{6}}}',
                                        controls: {
                                            "checkAnswer": true,
                                            "help": true
                                        }
                                    }, {
                                        problem: '\\rowgrp{\\row{\\str{Write the fraction as a mixed number.}}}{\\row{\\str{\xA0}}}{\\row{\\frac{\\str{10}}{\\str{3}}}',
                                        answer: '\\mixed{\\input{3}}{\\frac{\\input{1}}{\\input{3}}}',
                                        controls: {
                                            "checkAnswer": true,
                                            "help": '\\rowgrp{\\row{\\str{Divide the numerator by the denominator, then make the quotient the mixed number whole and the remainder the mixed number numerator. \xA0}}}{\\row{\\str{\xA0}}}{\\row{\\frac{\\fracstr{10}}{\\fracstr{3}}}{\\row{\\str{\xA0 = \xA0}}}{\\row{\\mixed{\\fracstr{3}}{\\frac{\\fracstr{1}}{\\fracstr{3}}}}{\\row{css{\\str{answer:  \xA0}}{label_like margin-left-small}}{css{\\mixed{\\fracstr{3}}{\\frac{\\fracstr{1}}{\\fracstr{3}}}}{label_like}}}}'
                                        }
                                    }]
                                }]
                            }, {
                                title: 'Multiply Mixed Numbers',
                               children: [{
                                    title: 'Main Answer',
                                    children: [{
                                        problem: '\\row{\\html{Solve &nbsp;}}{\\mixed{\\fracstr{1}}{\\frac{\\fracstr{1}}{\\fracstr{6}}}}{\\sign{&nbsp; &times; &nbsp;}}{\\mixed{\\fracstr{2}}{\\frac{\\fracstr{5}}{\\fracstr{8}}}}',
                                        answer: '\\mixed{\\input{3}}{\\frac{\\input{1}}{\\input{16}}}',
                                        controls: {
                                            "checkAnswer": true,
                                            "help": false,
                                            "workbook": true
                                        }
                                    }]
                                }, {
                                    title: 'Workbook',
                                    children: [{
                                        problem: '\\rowgrp{\\row{\\str{Change the mixed numbers into improper fractions.}}}{\\row{\\str{\xA0}}}{\\row{\\mixed{\\fracstr{1}}{\\frac{\\fracstr{1}}{\\fracstr{6}}}}{\\sign{&nbsp; &times; &nbsp;}}{\\mixed{\\fracstr{2}}{\\frac{\\fracstr{5}}{\\fracstr{8}}}}',
                                        answer: '\\grp{\\frac{\\input{7}}{\\input{6}}}{\\sign{&times;}}{\\frac{\\input{21}}{\\input{8}}}',
                                        controls: {
                                            "checkAnswer": true,
                                            "help": true
                                        }
                                    }, {
                                        problem: '\\str{Multiply the fractions together.}',
                                        answer: '\\multiplyfracs{\\frac{\\str{7}}{\\str{6}}}{\\frac{\\str{21}}{\\str{8}}}',
                                        controls: {
                                            "checkAnswer": true,
                                            "help": true
                                        }
                                    }, {
                                        problem: '\\str{Reduce the fraction to its lowest terms.}',
                                        answer: '\\prev{feedbackData.getPrevious()}{\\reducefrac{\\frac{\\str{147}}{\\str{48}}}',
                                        controls: {
                                            "checkAnswer": true,
                                            "help": true
                                        }
                                    }, {
                                        problem: '\\rowgrp{\\row{\\str{Write the fraction as a mixed number.}}}{\\row{\\str{\xA0}}}{\\row{\\frac{\\str{49}}{\\str{16}}}',
                                        answer: '\\mixed{\\input{3}}{\\frac{\\input{1}}{\\input{16}}}',
                                        controls: {
                                            "checkAnswer": true,
                                            "help": '\\rowgrp{\\row{\\str{Divide the numerator by the denominator, then make the quotient the mixed number whole and the remainder the mixed number numerator. \xA0}}}{\\row{\\str{\xA0}}}{\\row{\\frac{\\fracstr{49}}{\\fracstr{16}}}{\\row{\\str{\xA0 = \xA0}}}{\\row{\\mixed{\\fracstr{3}}{\\frac{\\fracstr{1}}{\\fracstr{16}}}}{\\row{css{\\str{answer:  \xA0}}{label_like margin-left-small}}{css{\\mixed{\\fracstr{3}}{\\frac{\\fracstr{1}}{\\fracstr{16}}}}{label_like}}}}'
                                        }
                                    }]
                                }]
                            }, {
                                title: 'Multiply Mixed Numbers',
                                children: [{
title: 'Main Answer',
                                    children: [{
                                        problem: '\\row{\\html{Solve &nbsp;}}{\\mixed{\\fracstr{3}}{\\frac{\\fracstr{2}}{\\fracstr{3}}}}{\\sign{&nbsp; &times; &nbsp;}}{\\mixed{\\fracstr{1}}{\\frac{\\fracstr{3}}{\\fracstr{8}}}}',
                                        answer: '\\mixed{\\input{5}}{\\frac{\\input{1}}{\\input{24}}}',
                                        controls: {
                                            "checkAnswer": true,
                                            "help": false,
                                            "workbook": true
                                        }
                                    }]
                                }, {
                                    title: 'Workbook',
                                    children: [{
                                        problem: '\\rowgrp{\\row{\\str{Change the mixed numbers into improper fractions.}}}{\\row{\\str{\xA0}}}{\\row{\\mixed{\\fracstr{3}}{\\frac{\\fracstr{2}}{\\fracstr{3}}}}{\\sign{&nbsp; &times; &nbsp;}}{\\mixed{\\fracstr{1}}{\\frac{\\fracstr{3}}{\\fracstr{8}}}}',
                                        answer: '\\grp{\\frac{\\input{11}}{\\input{3}}}{\\sign{&times;}}{\\frac{\\input{11}}{\\input{8}}}',
                                        controls: {
                                            "checkAnswer": true,
                                            "help": true
                                        }
                                    }, {
                                        problem: '\\str{Multiply the fractions together.}',
                                        answer: '\\multiplyfracs{\\frac{\\str{11}}{\\str{3}}}{\\frac{\\str{11}}{\\str{8}}}',
                                        controls: {
                                            "checkAnswer": true,
                                            "help": true
                                        }
                                    }, {
                                        problem: '\\str{Reduce the fraction to its lowest terms.}',
                                        answer: '\\prev{feedbackData.getPrevious()}{\\reducefrac{\\frac{\\str{121}}{\\str{24}}}',
                                        controls: {
                                            "checkAnswer": true,
                                            "help": true
                                        }
                                    }, {
                                        problem: '\\rowgrp{\\row{\\str{Write the fraction as a mixed number.}}}{\\row{\\str{\xA0}}}{\\row{\\frac{\\str{121}}{\\str{24}}}',
                                        answer: '\\mixed{\\input{5}}{\\frac{\\input{1}}{\\input{24}}}',
                                        controls: {
                                            "checkAnswer": true,
                                            "help": '\\rowgrp{\\row{\\str{Divide the numerator by the denominator, then make the quotient the mixed number whole and the remainder the mixed number numerator. \xA0}}}{\\row{\\str{\xA0}}}{\\row{\\frac{\\fracstr{121}}{\\fracstr{24}}}{\\row{\\str{\xA0 = \xA0}}}{\\row{\\mixed{\\fracstr{5}}{\\frac{\\fracstr{1}}{\\fracstr{24}}}}{\\row{css{\\str{answer:  \xA0}}{label_like margin-left-small}}{css{\\mixed{\\fracstr{5}}{\\frac{\\fracstr{1}}{\\fracstr{24}}}}{label_like}}}}'
                                        }
                                    }]
                                }]
                            }]
                        }, {
                            title: '8.4 Divide Mixed Numbers',
                            path: '8.4-divide-mixed-numbers',
                            children: [{
                                title: 'Divide Mixed Numbers',
                                children: [{
                                    title: 'Main Answer',
                                    children: [{
                                        problem: '\\row{\\html{Solve &nbsp;}}{\\mixed{\\fracstr{1}}{\\frac{\\fracstr{1}}{\\fracstr{3}}}}{\\sign{&nbsp; &divide; &nbsp;}}{\\mixed{\\fracstr{1}}{\\frac{\\fracstr{2}}{\\fracstr{3}}}}',
                                        answer: '\\frac{\\input{4}}{\\input{5}}',
                                        controls: {
                                            "checkAnswer": true,
                                            "help": false,
                                            "workbook": true
                                        }
                                    }]
                                }, {
                                    title: 'Workbook',
                                    children: [{
											problem: '\\rowgrp{\\row{\\str{Change the mixed numbers into improper fractions.}}}{\\row{\\str{\xA0}}}{\\row{\\mixed{\\fracstr{1}}{\\frac{\\fracstr{1}}{\\fracstr{3}}}}{\\sign{&nbsp; &divide; &nbsp;}}{\\mixed{\\fracstr{1}}{\\frac{\\fracstr{2}}{\\fracstr{3}}}}',
											answer: '\\grp{\\frac{\\input{4}}{\\input{3}}}{\\sign{&divide;}}{\\frac{\\input{5}}{\\input{3}}}',
											controls: {
												"checkAnswer": true,
												"help": true
											}
										}, {
                                            problem: '\\rowgrp{\\row{\\str{Rewrite the problem as the product of the fractions.}}}{\\row{\\frac{\\str{4}}{\\str{3}}}{\\sign{&divide;}}{\\frac{\\str{5}}{\\str{3}}}}',
                                            answer: '\\grp{\\frac{\\input{4}}{\\input{3}}}{\\sign{&times;}}{\\frac{\\input{3}}{\\input{5}}}',
                                            controls: {
                                                "checkAnswer": true,
                                                "help": true
                                            }
                                        }, {
                                            problem: '\\str{Multiply the fractions together.}',
                                            answer: '\\multiplyfracs{\\frac{\\str{4}}{\\str{3}}}{\\frac{\\str{3}}{\\str{5}}}',
                                            controls: {
                                                "checkAnswer": true,
                                                "help": true
                                            }
                                        }, {
                                            problem: '\\str{Reduce the fraction to its lowest terms.}',
                                            answer: '\\prev{feedbackData.getPrevious()}{\\reducefrac{\\frac{\\str{4}}{\\str{5}}}',
                                            controls: {
                                                "checkAnswer": true,
                                                "help": true
                                            }
                                        }]
                                    }]
                                }, {
                                title: 'Divide Mixed Numbers',
                                children: [{
                                    title: 'Main Answer',
                                    children: [{
                                        problem: '\\row{\\html{Solve &nbsp;}}{\\mixed{\\fracstr{1}}{\\frac{\\fracstr{5}}{\\fracstr{6}}}}{\\sign{&nbsp; &divide; &nbsp;}}{\\mixed{\\fracstr{1}}{\\frac{\\fracstr{1}}{\\fracstr{2}}}}',
                                        answer: '\\mixed{\\input{1}}{\\frac{\\input{2}}{\\input{9}}}',
                                        controls: {
                                            "checkAnswer": true,
                                            "help": false,
                                            "workbook": true
                                        }
                                    }]
                                }, {
                                    title: 'Workbook',
                                    children: [{
											problem: '\\rowgrp{\\row{\\str{Change the mixed numbers into improper fractions.}}}{\\row{\\str{\xA0}}}{\\row{\\mixed{\\fracstr{1}}{\\frac{\\fracstr{5}}{\\fracstr{6}}}}{\\sign{&nbsp; &divide; &nbsp;}}{\\mixed{\\fracstr{1}}{\\frac{\\fracstr{1}}{\\fracstr{2}}}}',
											answer: '\\grp{\\frac{\\input{11}}{\\input{6}}}{\\sign{&divide;}}{\\frac{\\input{3}}{\\input{2}}}',
											controls: {
												"checkAnswer": true,
												"help": true
											}
										}, {
                                            problem: '\\rowgrp{\\row{\\str{Rewrite the problem as the product of the fractions.}}}{\\row{\\frac{\\str{11}}{\\str{6}}}{\\sign{&divide;}}{\\frac{\\str{3}}{\\str{2}}}}',
                                            answer: '\\grp{\\frac{\\input{11}}{\\input{6}}}{\\sign{&times;}}{\\frac{\\input{2}}{\\input{3}}}',
                                            controls: {
                                                "checkAnswer": true,
                                                "help": true
                                            }
                                        }, {
                                            problem: '\\str{Multiply the fractions together.}',
                                            answer: '\\multiplyfracs{\\frac{\\str{11}}{\\str{6}}}{\\frac{\\str{2}}{\\str{3}}}',
                                            controls: {
                                                "checkAnswer": true,
                                                "help": true
                                            }
                                        }, {
                                            problem: '\\str{Reduce the fraction to its lowest terms.}',
                                            answer: '\\prev{feedbackData.getPrevious()}{\\reducefrac{\\frac{\\str{22}}{\\str{18}}}',
                                            controls: {
                                                "checkAnswer": true,
                                                "help": true
                                            }
                                        }, {
											problem: '\\rowgrp{\\row{\\str{Write the fraction as a mixed number.}}}{\\row{\\str{\xA0}}}{\\row{\\frac{\\str{11}}{\\str{9}}}',
											answer: '\\mixed{\\input{1}}{\\frac{\\input{2}}{\\input{9}}}',
											controls: {
												"checkAnswer": true,
												"help": '\\rowgrp{\\row{\\str{Divide the numerator by the denominator, then make the quotient the mixed number whole and the remainder the mixed number numerator. \xA0}}}{\\row{\\str{\xA0}}}{\\row{\\frac{\\fracstr{11}}{\\fracstr{9}}}{\\row{\\str{\xA0 = \xA0}}}{\\row{\\mixed{\\fracstr{1}}{\\frac{\\fracstr{2}}{\\fracstr{9}}}}{\\row{css{\\str{answer:  \xA0}}{label_like margin-left-small}}{css{\\mixed{\\fracstr{1}}{\\frac{\\fracstr{2}}{\\fracstr{9}}}}{label_like}}}}'
											}
                                    	}]
                                    }]
                                }, {
                                title: 'Divide Mixed Numbers',
                                children: [{
                                    title: 'Main Answer',
                                    children: [{
                                        problem: '\\row{\\html{Solve &nbsp;}}{\\mixed{\\fracstr{1}}{\\frac{\\fracstr{3}}{\\fracstr{8}}}}{\\sign{&nbsp; &divide; &nbsp;}}{\\mixed{\\fracstr{1}}{\\frac{\\fracstr{5}}{\\fracstr{6}}}}',
                                        answer: '\\frac{\\input{3}}{\\input{4}}',
                                        controls: {
                                            "checkAnswer": true,
                                            "help": false,
                                            "workbook": true
                                        }
                                    }]
                                }, {
                                    title: 'Workbook',
                                    children: [{
											problem: '\\rowgrp{\\row{\\str{Change the mixed numbers into improper fractions.}}}{\\row{\\str{\xA0}}}{\\row{\\mixed{\\fracstr{1}}{\\frac{\\fracstr{5}}{\\fracstr{6}}}}{\\sign{&nbsp; &divide; &nbsp;}}{\\mixed{\\fracstr{1}}{\\frac{\\fracstr{1}}{\\fracstr{2}}}}',
											answer: '\\grp{\\frac{\\input{11}}{\\input{6}}}{\\sign{&divide;}}{\\frac{\\input{3}}{\\input{2}}}',
											controls: {
												"checkAnswer": true,
												"help": true
											}
										}, {
                                            problem: '\\rowgrp{\\row{\\str{Rewrite the problem as the product of the fractions.}}}{\\row{\\frac{\\str{11}}{\\str{6}}}{\\sign{&divide;}}{\\frac{\\str{3}}{\\str{2}}}}',
                                            answer: '\\grp{\\frac{\\input{11}}{\\input{6}}}{\\sign{&times;}}{\\frac{\\input{2}}{\\input{3}}}',
                                            controls: {
                                                "checkAnswer": true,
                                                "help": true
                                            }
                                        }, {
                                            problem: '\\str{Multiply the fractions together.}',
                                            answer: '\\multiplyfracs{\\frac{\\str{11}}{\\str{6}}}{\\frac{\\str{2}}{\\str{3}}}',
                                            controls: {
                                                "checkAnswer": true,
                                                "help": true
                                            }
                                        }, {
                                            problem: '\\str{Reduce the fraction to its lowest terms.}',
                                            answer: '\\prev{feedbackData.getPrevious()}{\\reducefrac{\\frac{\\str{22}}{\\str{18}}}',
                                            controls: {
                                                "checkAnswer": true,
                                                "help": true
                                            }
                                        }, {
											problem: '\\rowgrp{\\row{\\str{Write the fraction as a mixed number.}}}{\\row{\\str{\xA0}}}{\\row{\\frac{\\str{11}}{\\str{9}}}',
											answer: '\\mixed{\\input{1}}{\\frac{\\input{2}}{\\input{9}}}',
											controls: {
												"checkAnswer": true,
												"help": '\\rowgrp{\\row{\\str{Divide the numerator by the denominator, then make the quotient the mixed number whole and the remainder the mixed number numerator. \xA0}}}{\\row{\\str{\xA0}}}{\\row{\\frac{\\fracstr{11}}{\\fracstr{9}}}{\\row{\\str{\xA0 = \xA0}}}{\\row{\\mixed{\\fracstr{1}}{\\frac{\\fracstr{2}}{\\fracstr{9}}}}{\\row{css{\\str{answer:  \xA0}}{label_like margin-left-small}}{css{\\mixed{\\fracstr{1}}{\\frac{\\fracstr{2}}{\\fracstr{9}}}}{label_like}}}}'
											}
                                    	}]
                                    }]
                                }, {
							    title: 'Divide Mixed Numbers',
                                children: [{
                                    title: 'Main Answer',
                                    children: [{
                                        problem: '\\row{\\html{Solve &nbsp;}}{\\mixed{\\fracstr{1}}{\\frac{\\fracstr{2}}{\\fracstr{3}}}}{\\sign{&nbsp; &divide; &nbsp;}}{\\mixed{\\fracstr{1}}{\\frac{\\fracstr{5}}{\\fracstr{6}}}}',
                                        answer: '\\frac{\\input{10}}{\\input{11}}',
                                        controls: {
                                            "checkAnswer": true,
                                            "help": false,
                                            "workbook": true
                                        }
                                    }]
                                }, {
                                    title: 'Workbook',
                                    children: [{
											problem: '\\rowgrp{\\row{\\str{Change the mixed numbers into improper fractions.}}}{\\row{\\str{\xA0}}}{\\row{\\mixed{\\fracstr{1}}{\\frac{\\fracstr{2}}{\\fracstr{3}}}}{\\sign{&nbsp; &divide; &nbsp;}}{\\mixed{\\fracstr{1}}{\\frac{\\fracstr{5}}{\\fracstr{6}}}}',
											answer: '\\grp{\\frac{\\input{5}}{\\input{3}}}{\\sign{&divide;}}{\\frac{\\input{11}}{\\input{6}}}',
											controls: {
												"checkAnswer": true,
												"help": true
											}
										}, {
                                            problem: '\\rowgrp{\\row{\\str{Rewrite the problem as the product of the fractions.}}}{\\row{\\frac{\\str{5}}{\\str{3}}}{\\sign{&divide;}}{\\frac{\\str{11}}{\\str{6}}}}',
                                            answer: '\\grp{\\frac{\\input{5}}{\\input{3}}}{\\sign{&times;}}{\\frac{\\input{6}}{\\input{11}}}',
                                            controls: {
                                                "checkAnswer": true,
                                                "help": true
                                            }
                                        }, {
                                            problem: '\\str{Multiply the fractions together.}',
                                            answer: '\\multiplyfracs{\\frac{\\str{5}}{\\str{3}}}{\\frac{\\str{6}}{\\str{11}}}',
                                            controls: {
                                                "checkAnswer": true,
                                                "help": true
                                            }
                                        }, {
                                            problem: '\\str{Reduce the fraction to its lowest terms.}',
                                            answer: '\\prev{feedbackData.getPrevious()}{\\reducefrac{\\frac{\\str{10}}{\\str{11}}}',
                                            controls: {
                                                "checkAnswer": true,
                                                "help": true
                                            }
                                        }]
                                    }]
                                }, {
                                title: 'Divide Mixed Numbers',
                                children: [{
                                    title: 'Main Answer',
                                    children: [{
                                        problem: '\\row{\\html{Solve &nbsp;}}{\\mixed{\\fracstr{2}}{\\frac{\\fracstr{3}}{\\fracstr{8}}}}{\\sign{&nbsp; &divide; &nbsp;}}{\\mixed{\\fracstr{1}}{\\frac{\\fracstr{6}}{\\fracstr{7}}}}',
                                        answer: '{\\mixed{\\input{1}}{\\frac{\\input{5}}{\\input{28}}}',
                                        controls: {
                                            "checkAnswer": true,
                                            "help": false,
                                            "workbook": true
                                        }
                                    }]
                                }, {
                                    title: 'Workbook',
                                    children: [{
											problem: '\\rowgrp{\\row{\\str{Change the mixed numbers into improper fractions.}}}{\\row{\\str{\xA0}}}{\\row{\\mixed{\\fracstr{2}}{\\frac{\\fracstr{3}}{\\fracstr{8}}}}{\\sign{&nbsp; &divide; &nbsp;}}{\\mixed{\\fracstr{1}}{\\frac{\\fracstr{6}}{\\fracstr{7}}}}',
											answer: '\\grp{\\frac{\\input{19}}{\\input{8}}}{\\sign{&divide;}}{\\frac{\\input{13}}{\\input{7}}}',
											controls: {
												"checkAnswer": true,
												"help": true
											}
										}, {
                                            problem: '\\rowgrp{\\row{\\str{Rewrite the problem as the product of the fractions.}}}{\\row{\\frac{\\str{19}}{\\str{8}}}{\\sign{&divide;}}{\\frac{\\str{13}}{\\str{7}}}}',
                                            answer: '\\grp{\\frac{\\input{19}}{\\input{8}}}{\\sign{&times;}}{\\frac{\\input{7}}{\\input{13}}}',
                                            controls: {
                                                "checkAnswer": true,
                                                "help": true
                                            }
                                        }, {
                                            problem: '\\str{Multiply the fractions together.}',
                                            answer: '\\multiplyfracs{\\frac{\\str{19}}{\\str{8}}}{\\frac{\\str{7}}{\\str{13}}}',
                                            controls: {
                                                "checkAnswer": true,
                                                "help": true
                                            }
                                        }, {
                                            problem: '\\str{Reduce the fraction to its lowest terms.}',
                                            answer: '\\prev{feedbackData.getPrevious()}{\\reducefrac{\\frac{\\str{133}}{\\str{104}}}',
                                            controls: {
                                                "checkAnswer": true,
                                                "help": true
                                            }
                                        }, {
											problem: '\\rowgrp{\\row{\\str{Write the fraction as a mixed number.}}}{\\row{\\str{\xA0}}}{\\row{\\frac{\\str{133}}{\\str{104}}}',
											answer: '\\mixed{\\input{1}}{\\frac{\\input{29}}{\\input{104}}}',
											controls: {
												"checkAnswer": true,
												"help": '\\rowgrp{\\row{\\str{Divide the numerator by the denominator, then make the quotient the mixed number whole and the remainder the mixed number numerator. \xA0}}}{\\row{\\str{\xA0}}}{\\row{\\frac{\\fracstr{133}}{\\fracstr{104}}}{\\row{\\str{\xA0 = \xA0}}}{\\row{\\mixed{\\fracstr{1}}{\\frac{\\fracstr{29}}{\\fracstr{104}}}}{\\row{css{\\str{answer:  \xA0}}{label_like margin-left-small}}{css{\\mixed{\\fracstr{1}}{\\frac{\\fracstr{29}}{\\fracstr{104}}}}{label_like}}}}'
											}
                                    	}]
                                    }]
                                }, {
                                title: 'Divide Mixed Numbers',
                                children: [{
                                    title: 'Main Answer',
                                    children: [{
                                        problem: '\\row{\\html{Solve &nbsp;}}{\\mixed{\\fracstr{1}}{\\frac{\\fracstr{1}}{\\fracstr{2}}}}{\\sign{&nbsp; &divide; &nbsp;}}{\\mixed{\\fracstr{1}}{\\frac{\\fracstr{2}}{\\fracstr{5}}}}',
                                        answer: '{\\mixed{\\input{1}}{\\frac{\\input{1}}{\\input{14}}}',
                                        controls: {
                                            "checkAnswer": true,
                                            "help": false,
                                            "workbook": true
                                        }
                                    }]
                                }, {
                                    title: 'Workbook',
                                    children: [{
											problem: '\\rowgrp{\\row{\\str{Change the mixed numbers into improper fractions.}}}{\\row{\\str{\xA0}}}{\\row{\\mixed{\\fracstr{1}}{\\frac{\\fracstr{1}}{\\fracstr{2}}}}{\\sign{&nbsp; &divide; &nbsp;}}{\\mixed{\\fracstr{1}}{\\frac{\\fracstr{2}}{\\fracstr{5}}}}',
											answer: '\\grp{\\frac{\\input{3}}{\\input{2}}}{\\sign{&divide;}}{\\frac{\\input{7}}{\\input{5}}}',
											controls: {
												"checkAnswer": true,
												"help": true
											}
										}, {
                                            problem: '\\rowgrp{\\row{\\str{Rewrite the problem as the product of the fractions.}}}{\\row{\\frac{\\str{3}}{\\str{2}}}{\\sign{&divide;}}{\\frac{\\str{7}}{\\str{5}}}}',
                                            answer: '\\grp{\\frac{\\input{3}}{\\input{2}}}{\\sign{&times;}}{\\frac{\\input{5}}{\\input{7}}}',
                                            controls: {
                                                "checkAnswer": true,
                                                "help": true
                                            }
                                        }, {
                                            problem: '\\str{Multiply the fractions together.}',
                                            answer: '\\multiplyfracs{\\frac{\\str{3}}{\\str{2}}}{\\frac{\\str{5}}{\\str{7}}}',
                                            controls: {
                                                "checkAnswer": true,
                                                "help": true
                                            }
                                        }, {
                                            problem: '\\str{Reduce the fraction to its lowest terms.}',
                                            answer: '\\prev{feedbackData.getPrevious()}{\\reducefrac{\\frac{\\str{15}}{\\str{14}}}',
                                            controls: {
                                                "checkAnswer": true,
                                                "help": true
                                            }
                                        }, {
											problem: '\\rowgrp{\\row{\\str{Write the fraction as a mixed number.}}}{\\row{\\str{\xA0}}}{\\row{\\frac{\\str{15}}{\\str{14}}}',
											answer: '\\mixed{\\input{1}}{\\frac{\\input{1}}{\\input{14}}}',
											controls: {
												"checkAnswer": true,
												"help": '\\rowgrp{\\row{\\str{Divide the numerator by the denominator, then make the quotient the mixed number whole and the remainder the mixed number numerator. \xA0}}}{\\row{\\str{\xA0}}}{\\row{\\frac{\\fracstr{15}}{\\fracstr{14}}}{\\row{\\str{\xA0 = \xA0}}}{\\row{\\mixed{\\fracstr{1}}{\\frac{\\fracstr{1}}{\\fracstr{14}}}}{\\row{css{\\str{answer:  \xA0}}{label_like margin-left-small}}{css{\\mixed{\\fracstr{1}}{\\frac{\\fracstr{1}}{\\fracstr{14}}}}{label_like}}}}'
											}
                                    	}]
                                    }]
                                }, {
                                title: 'Divide Mixed Numbers',
                                children: [{
                                    title: 'Main Answer',
                                    children: [{
                                        problem: '\\row{\\html{Solve &nbsp;}}{\\mixed{\\fracstr{1}}{\\frac{\\fracstr{4}}{\\fracstr{9}}}}{\\sign{&nbsp; &divide; &nbsp;}}{\\mixed{\\fracstr{1}}{\\frac{\\fracstr{4}}{\\fracstr{5}}}}',
                                        answer: '\\frac{\\input{65}}{\\input{81}}',
                                        controls: {
                                            "checkAnswer": true,
                                            "help": false,
                                            "workbook": true
                                        }
                                    }]
                                }, {
                                    title: 'Workbook',
                                    children: [{
											problem: '\\rowgrp{\\row{\\str{Change the mixed numbers into improper fractions.}}}{\\row{\\str{\xA0}}}{\\row{\\mixed{\\fracstr{1}}{\\frac{\\fracstr{4}}{\\fracstr{9}}}}{\\sign{&nbsp; &divide; &nbsp;}}{\\mixed{\\fracstr{1}}{\\frac{\\fracstr{4}}{\\fracstr{5}}}}',
											answer: '\\grp{\\frac{\\input{13}}{\\input{9}}}{\\sign{&divide;}}{\\frac{\\input{9}}{\\input{5}}}',
											controls: {
												"checkAnswer": true,
												"help": true
											}
										}, {
                                            problem: '\\rowgrp{\\row{\\str{Rewrite the problem as the product of the fractions.}}}{\\row{\\frac{\\str{13}}{\\str{9}}}{\\sign{&divide;}}{\\frac{\\str{9}}{\\str{5}}}}',
                                            answer: '\\grp{\\frac{\\input{13}}{\\input{9}}}{\\sign{&times;}}{\\frac{\\input{5}}{\\input{9}}}',
                                            controls: {
                                                "checkAnswer": true,
                                                "help": true
                                            }
                                        }, {
                                            problem: '\\str{Multiply the fractions together.}',
                                            answer: '\\multiplyfracs{\\frac{\\str{13}}{\\str{9}}}{\\frac{\\str{5}}{\\str{9}}}',
                                            controls: {
                                                "checkAnswer": true,
                                                "help": true
                                            }
                                        }, {
                                            problem: '\\str{Reduce the fraction to its lowest terms.}',
                                            answer: '\\prev{feedbackData.getPrevious()}{\\reducefrac{\\frac{\\str{65}}{\\str{81}}}',
                                            controls: {
                                                "checkAnswer": true,
                                                "help": true
                                            }
                                        }]
                                    }]
                                }, {
                                title: 'Divide Mixed Numbers',
                                children: [{
                                    title: 'Main Answer',
                                    children: [{
                                        problem: '\\row{\\html{Solve &nbsp;}}{\\mixed{\\fracstr{1}}{\\frac{\\fracstr{1}}{\\fracstr{10}}}}{\\sign{&nbsp; &divide; &nbsp;}}{\\mixed{\\fracstr{2}}{\\frac{\\fracstr{3}}{\\fracstr{4}}}}',
                                        answer: '\\frac{\\input{2}}{\\input{5}}',
                                        controls: {
                                            "checkAnswer": true,
                                            "help": false,
                                            "workbook": true
                                        }
                                    }]
                                }, {
                                    title: 'Workbook',
                                    children: [{
											problem: '\\rowgrp{\\row{\\str{Change the mixed numbers into improper fractions.}}}{\\row{\\str{\xA0}}}{\\row{\\mixed{\\fracstr{1}}{\\frac{\\fracstr{1}}{\\fracstr{10}}}}{\\sign{&nbsp; &divide; &nbsp;}}{\\mixed{\\fracstr{2}}{\\frac{\\fracstr{3}}{\\fracstr{4}}}}',
											answer: '\\grp{\\frac{\\input{11}}{\\input{10}}}{\\sign{&divide;}}{\\frac{\\input{11}}{\\input{4}}}',
											controls: {
												"checkAnswer": true,
												"help": true
											}
										}, {
                                            problem: '\\rowgrp{\\row{\\str{Rewrite the problem as the product of the fractions.}}}{\\row{\\frac{\\str{11}}{\\str{10}}}{\\sign{&divide;}}{\\frac{\\str{11}}{\\str{4}}}}',
                                            answer: '\\grp{\\frac{\\input{11}}{\\input{10}}}{\\sign{&times;}}{\\frac{\\input{4}}{\\input{11}}}',
                                            controls: {
                                                "checkAnswer": true,
                                                "help": true
                                            }
                                        }, {
                                            problem: '\\str{Multiply the fractions together.}',
                                            answer: '\\multiplyfracs{\\frac{\\str{11}}{\\str{10}}}{\\frac{\\str{4}}{\\str{11}}}',
                                            controls: {
                                                "checkAnswer": true,
                                                "help": true
                                            }
                                        }, {
                                            problem: '\\str{Reduce the fraction to its lowest terms.}',
                                            answer: '\\prev{feedbackData.getPrevious()}{\\reducefrac{\\frac{\\str{10}}{\\str{4}}}',
                                            controls: {
                                                "checkAnswer": true,
                                                "help": true
                                            }
                                        }]
                                    }]
                                }, {
                                 title: 'Divide Mixed Numbers',
                                children: [{
                                    title: 'Main Answer',
                                    children: [{
                                        problem: '\\row{\\html{Solve &nbsp;}}{\\mixed{\\fracstr{3}}{\\frac{\\fracstr{5}}{\\fracstr{12}}}}{\\sign{&nbsp; &divide; &nbsp;}}{\\mixed{\\fracstr{3}}{\\frac{\\fracstr{1}}{\\fracstr{3}}}}',
                                        answer: '{\\mixed{\\input{1}}{\\frac{\\input{1}}{\\input{40}}}',
                                        controls: {
                                            "checkAnswer": true,
                                            "help": false,
                                            "workbook": true
                                        }
                                    }]
                                }, {
                                    title: 'Workbook',
                                    children: [{
											problem: '\\rowgrp{\\row{\\str{Change the mixed numbers into improper fractions.}}}{\\row{\\str{\xA0}}}{\\row{\\mixed{\\fracstr{3}}{\\frac{\\fracstr{5}}{\\fracstr{12}}}}{\\sign{&nbsp; &divide; &nbsp;}}{\\mixed{\\fracstr{3}}{\\frac{\\fracstr{1}}{\\fracstr{3}}}}',
											answer: '\\grp{\\frac{\\input{41}}{\\input{12}}}{\\sign{&divide;}}{\\frac{\\input{10}}{\\input{3}}}',
											controls: {
												"checkAnswer": true,
												"help": true
											}
										}, {
                                            problem: '\\rowgrp{\\row{\\str{Rewrite the problem as the product of the fractions.}}}{\\row{\\frac{\\str{41}}{\\str{12}}}{\\sign{&divide;}}{\\frac{\\str{10}}{\\str{3}}}}',
                                            answer: '\\grp{\\frac{\\input{41}}{\\input{12}}}{\\sign{&times;}}{\\frac{\\input{3}}{\\input{10}}}',
                                            controls: {
                                                "checkAnswer": true,
                                                "help": true
                                            }
                                        }, {
                                            problem: '\\str{Multiply the fractions together.}',
                                            answer: '\\multiplyfracs{\\frac{\\str{41}}{\\str{12}}}{\\frac{\\str{3}}{\\str{10}}}',
                                            controls: {
                                                "checkAnswer": true,
                                                "help": true
                                            }
                                        }, {
                                            problem: '\\str{Reduce the fraction to its lowest terms.}',
                                            answer: '\\prev{feedbackData.getPrevious()}{\\reducefrac{\\frac{\\str{41}}{\\str{40}}}',
                                            controls: {
                                                "checkAnswer": true,
                                                "help": true
                                            }
                                        }, {
											problem: '\\rowgrp{\\row{\\str{Write the fraction as a mixed number.}}}{\\row{\\str{\xA0}}}{\\row{\\frac{\\str{41}}{\\str{40}}}',
											answer: '\\mixed{\\input{1}}{\\frac{\\input{1}}{\\input{40}}}',
											controls: {
												"checkAnswer": true,
												"help": '\\rowgrp{\\row{\\str{Divide the numerator by the denominator, then make the quotient the mixed number whole and the remainder the mixed number numerator. \xA0}}}{\\row{\\str{\xA0}}}{\\row{\\frac{\\fracstr{41}}{\\fracstr{40}}}{\\row{\\str{\xA0 = \xA0}}}{\\row{\\mixed{\\fracstr{1}}{\\frac{\\fracstr{1}}{\\fracstr{40}}}}{\\row{css{\\str{answer:  \xA0}}{label_like margin-left-small}}{css{\\mixed{\\fracstr{1}}{\\frac{\\fracstr{1}}{\\fracstr{40}}}}{label_like}}}}'
											}
                                    	}]
                                    }]
                                }, {
                                 title: 'Divide Mixed Numbers',
                                children: [{
                                    title: 'Main Answer',
                                    children: [{
                                        problem: '\\row{\\html{Solve &nbsp;}}{\\mixed{\\fracstr{7}}{\\frac{\\fracstr{1}}{\\fracstr{4}}}}{\\sign{&nbsp; &divide; &nbsp;}}{\\mixed{\\fracstr{6}}{\\frac{\\fracstr{7}}{\\fracstr{8}}}}',
                                        answer: '{\\mixed{\\input{1}}{\\frac{\\input{3}}{\\input{55}}}',
                                        controls: {
                                            "checkAnswer": true,
                                            "help": false,
                                            "workbook": true
                                        }
                                    }]
                                }, {
                                    title: 'Workbook',
                                    children: [{
											problem: '\\rowgrp{\\row{\\str{Change the mixed numbers into improper fractions.}}}{\\row{\\str{\xA0}}}{\\row{\\mixed{\\fracstr{7}}{\\frac{\\fracstr{1}}{\\fracstr{4}}}}{\\sign{&nbsp; &divide; &nbsp;}}{\\mixed{\\fracstr{6}}{\\frac{\\fracstr{7}}{\\fracstr{8}}}}',
											answer: '\\grp{\\frac{\\input{29}}{\\input{4}}}{\\sign{&divide;}}{\\frac{\\input{55}}{\\input{8}}}',
											controls: {
												"checkAnswer": true,
												"help": true
											}
										}, {
                                            problem: '\\rowgrp{\\row{\\str{Rewrite the problem as the product of the fractions.}}}{\\row{\\frac{\\str{29}}{\\str{4}}}{\\sign{&divide;}}{\\frac{\\str{55}}{\\str{8}}}}',
                                            answer: '\\grp{\\frac{\\input{29}}{\\input{4}}}{\\sign{&times;}}{\\frac{\\input{8}}{\\input{55}}}',
                                            controls: {
                                                "checkAnswer": true,
                                                "help": true
                                            }
                                        }, {
                                            problem: '\\str{Multiply the fractions together.}',
                                            answer: '\\multiplyfracs{\\frac{\\str{29}}{\\str{4}}}{\\frac{\\str{8}}{\\str{55}}}',
                                            controls: {
                                                "checkAnswer": true,
                                                "help": true
                                            }
                                        }, {
                                            problem: '\\str{Reduce the fraction to its lowest terms.}',
                                            answer: '\\prev{feedbackData.getPrevious()}{\\reducefrac{\\frac{\\str{58}}{\\str{55}}}',
                                            controls: {
                                                "checkAnswer": true,
                                                "help": true
                                            }
                                        }, {
											problem: '\\rowgrp{\\row{\\str{Write the fraction as a mixed number.}}}{\\row{\\str{\xA0}}}{\\row{\\frac{\\str{58}}{\\str{55}}}',
											answer: '\\mixed{\\input{1}}{\\frac{\\input{3}}{\\input{55}}}',
											controls: {
												"checkAnswer": true,
												"help": '\\rowgrp{\\row{\\str{Divide the numerator by the denominator, then make the quotient the mixed number whole and the remainder the mixed number numerator. \xA0}}}{\\row{\\str{\xA0}}}{\\row{\\frac{\\fracstr{58}}{\\fracstr{55}}}{\\row{\\str{\xA0 = \xA0}}}{\\row{\\mixed{\\fracstr{1}}{\\frac{\\fracstr{3}}{\\fracstr{55}}}}{\\row{css{\\str{answer:  \xA0}}{label_like margin-left-small}}{css{\\mixed{\\fracstr{1}}{\\frac{\\fracstr{3}}{\\fracstr{55}}}}{label_like}}}}'
											}
                                    	}]
                                    }]
                                }]
                        },{
                            title: '9.1 Add and Subtract Like Fractions',
                            path: '9.1-add-and-subtract-like-fractions  ',
                            children: [
                                {//----1
                                    title: 'Add and Subtract Like Fractions',
                                    children: [{
                                        title: 'Main Answer',
                                        children: [{
                                            problem: '\\row{\\frac{\\str{2}}{\\str{4}}}{\\sign{-}}{\\frac{\\str{1}}{\\str{4}}',
                                            answer: '\\grp{\\sign{=}}{\\frac{\\input{1}}{\\input{4}}}',
                                            controls: {
                                                "checkAnswer": true,
                                                "help": '\\row{\\frac{\\str{2}}{\\str{4}}}{\\sign{-}}{\\frac{\\str{1}}{\\str{4}}}{\\sign{=}}{\\frac{\\str{1}}{\\str{4}}}'
                                            }
                                        }]
                                    }]
                                },
                                {//----2
                                    title: 'Add and Subtract Like Fractions',
                                    children: [{
                                        title: 'Main Answer',
                                        children: [{
                                            problem: '\\row{\\frac{\\str{6}}{\\str{8}}}{\\sign{-}}{\\frac{\\str{2}}{\\str{8}}',
                                            answer: '\\grp{\\sign{=}}{\\frac{\\input{1}}{\\input{2}}}',
                                            controls: {
                                                "checkAnswer": true,
                                                "help": '\\row{\\frac{\\str{6}}{\\str{8}}}{\\sign{-}}{\\frac{\\str{2}}{\\str{8}}}{\\sign{=}}{\\frac{\\str{1}}{\\str{2}}}'
                                            }
                                        }]
                                    }]
                                },
                                {//----3
                                    title: 'Add and Subtract Like Fractions',
                                    children: [{
                                        title: 'Main Answer',
                                        children: [{
                                            problem: '\\row{\\frac{\\str{6}}{\\str{9}}}{\\sign{\+}}{\\frac{\\str{2}}{\\str{9}}',
                                            answer: '\\grp{\\sign{=}}{\\frac{\\input{8}}{\\input{9}}}',
                                            controls: {
                                                "checkAnswer": true,
                                                "help": '\\row{\\frac{\\str{6}}{\\str{9}}}{\\sign{\+}}{\\frac{\\str{2}}{\\str{9}}}{\\sign{=}}{\\frac{\\str{8}}{\\str{9}}}'
                                            }
                                        }]
                                    }]
                                },
                                {//----4
                                    title: 'Add and Subtract Like Fractions',
                                    children: [{
                                        title: 'Main Answer',
                                        children: [{
                                            problem: '\\row{\\frac{\\str{15}}{\\str{25}}}{\\sign{\+}}{\\frac{\\str{9}}{\\str{25}}',
                                            answer: '\\grp{\\sign{=}}{\\frac{\\input{24}}{\\input{25}}}',
                                            controls: {
                                                "checkAnswer": true,
                                                "help": '\\row{\\frac{\\str{15}}{\\str{25}}}{\\sign{\+}}{\\frac{\\str{9}}{\\str{25}}}{\\sign{=}}{\\frac{\\str{24}}{\\str{25}}}'
                                            }
                                        }]
                                    }]
                                },
                                {//----5
                                    title: 'Add and Subtract Like Fractions',
                                    children: [{
                                        title: 'Main Answer',
                                        children: [{
                                            problem: '\\row{\\frac{\\str{2}}{\\str{6}}}{\\sign{\+}}{\\frac{\\str{3}}{\\str{6}}',
                                            answer: '\\grp{\\sign{=}}{\\frac{\\input{5}}{\\input{6}}}',
                                            controls: {
                                                "checkAnswer": true,
                                                "help": '\\row{\\frac{\\str{2}}{\\str{6}}}{\\sign{\+}}{\\frac{\\str{3}}{\\str{6}}}{\\sign{=}}{\\frac{\\str{5}}{\\str{6}}}'
                                            }
                                        }]
                                    }]
                                },
                                {//----6
                                    title: 'Add and Subtract Like Fractions',
                                    children: [{
                                        title: 'Main Answer',
                                        children: [{
                                            problem: '\\row{\\frac{\\str{12}}{\\str{13}}}{\\sign{-}}{\\frac{\\str{4}}{\\str{13}}',
                                            answer: '\\grp{\\sign{=}}{\\frac{\\input{8}}{\\input{13}}}',
                                            controls: {
                                                "checkAnswer": true,
                                                "help": '\\row{\\frac{\\str{12}}{\\str{13}}}{\\sign{-}}{\\frac{\\str{4}}{\\str{13}}}{\\sign{=}}{\\frac{\\str{8}}{\\str{13}}}'
                                            }
                                        }]
                                    }]
                                },
                                {//----7
                                    title: 'Add and Subtract Like Fractions',
                                    children: [{
                                        title: 'Main Answer',
                                        children: [{
                                            problem: '\\row{\\frac{\\str{28}}{\\str{42}}}{\\sign{-}}{\\frac{\\str{9}}{\\str{42}}',
                                            answer: '\\grp{\\sign{=}}{\\frac{\\input{19}}{\\input{42}}}',
                                            controls: {
                                                "checkAnswer": true,
                                                "help": '\\row{\\frac{\\str{28}}{\\str{42}}}{\\sign{-}}{\\frac{\\str{9}}{\\str{42}}}{\\sign{=}}{\\frac{\\str{19}}{\\str{42}}}'
                                            }
                                        }]
                                    }]
                                },
                                {//----8
                                    title: 'Add and Subtract Like Fractions',
                                    children: [{
                                        title: 'Main Answer',
                                        children: [{
                                            problem: '\\row{\\frac{\\str{40}}{\\str{66}}}{\\sign{-}}{\\frac{\\str{15}}{\\str{66}}',
                                            answer: '\\grp{\\sign{=}}{\\frac{\\input{25}}{\\input{66}}}',
                                            controls: {
                                                "checkAnswer": true,
                                                "help": '\\row{\\frac{\\str{40}}{\\str{66}}}{\\sign{-}}{\\frac{\\str{15}}{\\str{66}}}{\\sign{=}}{\\frac{\\str{25}}{\\str{66}}}'
                                            }
                                        }]
                                    }]
                                },
                                {//----9
                                    title: 'Add and Subtract Like Fractions',
                                    children: [{
                                        title: 'Main Answer',
                                        children: [{
                                            problem: '\\row{\\frac{\\str{30}}{\\str{49}}}{\\sign{\+}}{\\frac{\\str{30}}{\\str{49}}',
                                            answer: '\\grp{\\sign{=}}{\\mixed{\\input{1}}{\\frac{\\input{11}}{\\input{49}}}}',
                                            controls: {
                                                "checkAnswer": true,
                                                "help": '\\row{\\frac{\\str{30}}{\\str{49}}}{\\sign{\+}}{\\frac{\\str{30}}{\\str{49}}}{\\sign{=}}{\\mixed{\\str{1}}{\\frac{\\str{11}}{\\str{49}}}}'
                                            }
                                        }]
                                    }]
                                },
                                {//----10
                                    title: 'Add and Subtract Like Fractions',
                                    children: [{
                                        title: 'Main Answer',
                                        children: [{
                                            problem: '\\row{\\frac{\\str{30}}{\\str{77}}}{\\sign{\+}}{\\frac{\\str{35}}{\\str{77}}',
                                            answer: '\\grp{\\sign{=}}{\\frac{\\input{65}}{\\input{77}}}',
                                            controls: {
                                                "checkAnswer": true,
                                                "help": '\\row{\\frac{\\str{30}}{\\str{77}}}{\\sign{\+}}{\\frac{\\str{35}}{\\str{77}}}{\\sign{=}}{\\frac{\\str{65}}{\\str{77}}}'
                                            }
                                        }]
                                    }]
                                },
        					]
						},{
                            title: '9.3 Build an Equivalent Fraction',
                            path: '9.3-build-an-equivalent-fraction',
                            children: [{
                                title: 'Build an Equivalent Fraction',
                                children: [{
                                    title: 'Main Answer',
                                    children: [{
                                        problem: '\\rowgrp{\\row{\\str{Start with the fraction \xA0}}{\\frac{\\str{3}}{\\str{5}}}}{\\row{\\str{ and build an equivalent fraction that has a denominator of 20.}}}',
                                        answer: '\\frac{\\input{12}}{\\fracstr{20}}',
                                        controls: {
                                            "checkAnswer": true,
                                            "help": false,
                                            "workbook": true
                                        }
                                    }]
                                }, {
                                    title: 'Workbook',
                                    children: [{
                                        problem: '\\row{\\str{Multiply numerator and denominator by the same number: \xA0}}}',
                                        answer: '\\row{\\buildequivfracs{\\frac{\\str{3}}{\\str{5}}}{\\frac{\\input{4}}{\\input{4}}}}{\\frac{\\input{12}}{\\fracstr{20}}}}',
                                        controls: {
                                            "checkAnswer": true,
                                            "help": false
                                        }
                                    }]
                                }]
                            }, {
                                title: 'Build an Equivalent Fraction',
                                children: [{
                                    title: 'Main Answer',
                                    children: [{
                                        problem: '\\rowgrp{\\row{\\str{Start with the fraction \xA0}}{\\frac{\\str{7}}{\\str{6}}}}{\\row{\\str{ and build an equivalent fraction that has a numerator of 21.}}}',
                                        answer: '\\frac{\\fracstr{21}}{\\input{18}}',
                                        controls: {
                                            "checkAnswer": true,
                                            "help": false,
                                            "workbook": true
                                        }
                                    }]
                                }, {
                                    title: 'Workbook',
                                    children: [{
                                        problem: '\\row{\\str{Multiply numerator and denominator by the same number: \xA0}}}',
                                        answer: '\\row{\\buildequivfracs{\\frac{\\str{7}}{\\str{6}}}{\\frac{\\input{3}}{\\input{3}}}}{\\frac{\\fracstr{21}}{\\input{18}}}}',
                                        controls: {
                                            "checkAnswer": true,
                                            "help": false
                                        }
                                    }]
                                }]
                            }, {
                                title: 'Build an Equivalent Fraction',
                                children: [{
                                    title: 'Main Answer',
                                    children: [{
                                        problem: '\\rowgrp{\\row{\\str{Start with the fraction \xA0}}{\\frac{\\str{11}}{\\str{9}}}}{\\row{\\str{ and build an equivalent fraction that has a numerator of 22.}}}',
                                        answer: '\\frac{\\fracstr{22}}{\\input{18}}',
                                        controls: {
                                            "checkAnswer": true,
                                            "help": false,
                                            "workbook": true
                                        }
                                    }]
                                }, {
                                    title: 'Workbook',
                                    children: [{
                                        problem: '\\row{\\str{Multiply numerator and denominator by the same number: \xA0}}}',
                                        answer: '\\row{\\buildequivfracs{\\frac{\\str{11}}{\\str{9}}}{\\frac{\\input{2}}{\\input{2}}}}{\\frac{\\fracstr{22}}{\\input{18}}}}',
                                        controls: {
                                            "checkAnswer": true,
                                            "help": false
                                        }
                                    }]
                                }]
                            }, {
                                title: 'Build an Equivalent Fraction',
                                children: [{
                                    title: 'Main Answer',
                                    children: [{
                                        problem: '\\rowgrp{\\row{\\str{Start with the fraction \xA0}}{\\frac{\\str{11}}{\\str{8}}}}{\\row{\\str{ and build an equivalent fraction that has a denominator of 24.}}}',
                                        answer: '\\frac{\\input{33}}{\\fracstr{24}}',
                                        controls: {
                                            "checkAnswer": true,
                                            "help": false,
                                            "workbook": true
                                        }
                                    }]
                                }, {
                                    title: 'Workbook',
                                    children: [{
                                        problem: '\\row{\\str{Multiply numerator and denominator by the same number: \xA0}}}',
                                        answer: '\\row{\\buildequivfracs{\\frac{\\str{11}}{\\str{8}}}{\\frac{\\input{3}}{\\input{3}}}}{\\frac{\\input{33}}{\\fracstr{24}}}}',
                                        controls: {
                                            "checkAnswer": true,
                                            "help": false
                                        }
                                    }]
                                }]
                            }, {
                                title: 'Build an Equivalent Fraction',
                                children: [{
                                    title: 'Main Answer',
                                    children: [{
                                        problem: '\\rowgrp{\\row{\\str{Start with the fraction \xA0}}{\\frac{\\str{3}}{\\str{4}}}}{\\row{\\str{ and build an equivalent fraction that has a denominator of 12.}}}',
                                        answer: '\\frac{\\input{9}}{\\fracstr{12}}',
                                        controls: {
                                            "checkAnswer": true,
                                            "help": false,
                                            "workbook": true
                                        }
                                    }]
                                }, {
                                    title: 'Workbook',
                                    children: [{
                                        problem: '\\row{\\str{Multiply numerator and denominator by the same number: \xA0}}}',
                                        answer: '\\row{\\buildequivfracs{\\frac{\\str{3}}{\\str{4}}}{\\frac{\\input{3}}{\\input{3}}}}{\\frac{\\input{9}}{\\fracstr{12}}}}',
                                        controls: {
                                            "checkAnswer": true,
                                            "help": false
                                        }
                                    }]
                                }]
                            }, {
                                title: 'Build an Equivalent Fraction',
                                children: [{
                                    title: 'Main Answer',
                                    children: [{
                                        problem: '\\rowgrp{\\row{\\str{Start with the fraction \xA0}}{\\frac{\\str{3}}{\\str{8}}}}{\\row{\\str{ and build an equivalent fraction that has a numerator of 12.}}}',
                                        answer: '\\frac{\\fracstr{12}}{\\input{32}}',
                                        controls: {
                                            "checkAnswer": true,
                                            "help": false,
                                            "workbook": true
                                        }
                                    }]
                                }, {
                                    title: 'Workbook',
                                    children: [{
                                        problem: '\\row{\\str{Multiply numerator and denominator by the same number: \xA0}}}',
                                        answer: '\\row{\\buildequivfracs{\\frac{\\str{3}}{\\str{8}}}{\\frac{\\input{4}}{\\input{4}}}}{\\frac{\\fracstr{12}}{\\input{32}}}}',
                                        controls: {
                                            "checkAnswer": true,
                                            "help": false
                                        }
                                    }]
                                }]
                            }, {
                                title: 'Build an Equivalent Fraction',
                                children: [{
                                    title: 'Main Answer',
                                    children: [{
                                        problem: '\\rowgrp{\\row{\\str{Start with the fraction \xA0}}{\\frac{\\str{5}}{\\str{10}}}}{\\row{\\str{ and build an equivalent fraction that has a numerator of 35.}}}',
                                        answer: '\\frac{\\fracstr{35}}{\\input{70}}',
                                        controls: {
                                            "checkAnswer": true,
                                            "help": false,
                                            "workbook": true
                                        }
                                    }]
                                }, {
                                    title: 'Workbook',
                                    children: [{
                                        problem: '\\row{\\str{Multiply numerator and denominator by the same number: \xA0}}}',
                                        answer: '\\row{\\buildequivfracs{\\frac{\\str{5}}{\\str{10}}}{\\frac{\\input{7}}{\\input{7}}}}{\\frac{\\fracstr{35}}{\\input{70}}}}',
                                        controls: {
                                            "checkAnswer": true,
                                            "help": false
                                        }
                                    }]
                                }]
                            }, {
                                title: 'Build an Equivalent Fraction',
                                children: [{
                                    title: 'Main Answer',
                                    children: [{
                                        problem: '\\rowgrp{\\row{\\str{Start with the fraction \xA0}}{\\frac{\\str{10}}{\\str{15}}}}{\\row{\\str{ and build an equivalent fraction that has a denominator of 90.}}}',
                                        answer: '\\frac{\\input{60}}{\\fracstr{90}}',
                                        controls: {
                                            "checkAnswer": true,
                                            "help": false,
                                            "workbook": true
                                        }
                                    }]
                                }, {
                                    title: 'Workbook',
                                    children: [{
                                        problem: '\\row{\\str{Multiply numerator and denominator by the same number: \xA0}}}',
                                        answer: '\\row{\\buildequivfracs{\\frac{\\str{10}}{\\str{15}}}{\\frac{\\input{6}}{\\input{6}}}}{\\frac{\\input{60}}{\\fracstr{90}}}}',
                                        controls: {
                                            "checkAnswer": true,
                                            "help": false
                                        }
                                    }]
                                }]
                            }, {
                               title: 'Build an Equivalent Fraction',
                                children: [{
                                    title: 'Main Answer',
                                    children: [{
                                        problem: '\\rowgrp{\\row{\\str{Start with the fraction \xA0}}{\\frac{\\str{9}}{\\str{12}}}}{\\row{\\str{ and build an equivalent fraction that has a numerator of 18.}}}',
                                        answer: '\\frac{\\fracstr{18}}{\\input{24}}',
                                        controls: {
                                            "checkAnswer": true,
                                            "help": false,
                                            "workbook": true
                                        }
                                    }]
                                }, {
                                    title: 'Workbook',
                                    children: [{
                                        problem: '\\row{\\str{Multiply numerator and denominator by the same number: \xA0}}}',
                                        answer: '\\row{\\buildequivfracs{\\frac{\\str{9}}{\\str{12}}}{\\frac{\\input{2}}{\\input{2}}}}{\\frac{\\fracstr{18}}{\\input{24}}}}',
                                        controls: {
                                            "checkAnswer": true,
                                            "help": false
                                        }
                                    }]
                                }]
                            }, {
                                title: 'Build an Equivalent Fraction',
                                children: [{
                                    title: 'Main Answer',
                                    children: [{
                                        problem: '\\rowgrp{\\row{\\str{Start with the fraction \xA0}}{\\frac{\\str{6}}{\\str{25}}}}{\\row{\\str{ and build an equivalent fraction that has a denominator of 100.}}}',
                                        answer: '\\frac{\\input{24}}{\\fracstr{100}}',
                                        controls: {
                                            "checkAnswer": true,
                                            "help": false,
                                            "workbook": true
                                        }
                                    }]
                                }, {
                                    title: 'Workbook',
                                    children: [{
                                        problem: '\\row{\\str{Multiply numerator and denominator by the same number: \xA0}}}',
                                        answer: '\\row{\\buildequivfracs{\\frac{\\str{6}}{\\str{25}}}{\\frac{\\input{4}}{\\input{4}}}}{\\frac{\\input{24}}{\\fracstr{100}}}}',
                                        controls: {
                                            "checkAnswer": true,
                                            "help": false
                                        }
                                    }]
                                }]
                            }]
                        },{
                            title: '9.4 Build Equivalent Fractions',
                            path: '9.4-build-equivalent-fractions',
                            children: [{
                                title: 'Build Equivalent Fractions',
                                children: [{
                                    title: 'Main Answer',
                                    children: [{
                                        problem: '\\rowgrp{\\row{\\str{Start with the fractions:}}}{\\row{\\frac{\\str{1}}{\\str{4}}}{\\row{\\html{<span> &nbsp; and &nbsp; </span>}}}{\\frac{\\str{3}}{\\str{5}}}}{\\row{\\str{Build equivalent fractions that have the same denominator.}}}',
                                        answer: '\\row{\\frac{\\input{5}}{\\input{20}}}{\\html{<span> &nbsp; and &nbsp; </span>}}{\\frac{\\input{12}}{\\input{20}}}',
                                        controls: {
                                            "checkAnswer": true,
                                            "help": false,
                                            "workbook": true
                                        }
                                    }]
                                }, {
                                    title: 'Workbook',
                                    children: [{
                                        problem: '\\rowgrp{\\row{\\str{What is the lowest common denominator (LCD) of the fractions?}}}{\\row{\\frac{\\fracstr{1}}{\\fracstr{4}}}{\\row{\\html{<span> &nbsp; and &nbsp; </span>}}}{\\frac{\\fracstr{3}}{\\fracstr{5}}}}',
                                        answer: '\\row{\\input{20}}',
                                        controls: {
                                            "checkAnswer": true,
                                            "help": false
                                        },
                                    }, {
                                        problem: '\\rowgrp{\\row{\\str{Use the LCD to convert the fractions: }}}{\\row{\\frac{\\fracstr{1}}{\\fracstr{4}}}{\\row{\\html{<span> &nbsp; and &nbsp; </span>}}}{\\frac{\\fracstr{3}}{\\fracstr{5}}}}',
                                        answer: '\\row{\\frac{\\input{5}}{\\fracstr{20}}}{\\html{<span> &nbsp; and &nbsp; </span>}}{\\frac{\\input{12}}{\\fracstr{20}}}',
                                        controls: {
                                            "checkAnswer": true,
                                            "help": false
                                        }
                                    }]
                                }]
                            }, {
                                title: 'Build Equivalent Fractions',
                                children: [{
                                    title: 'Main Answer',
                                    children: [{
                                        problem: '\\rowgrp{\\row{\\str{Start with the fractions:}}}{\\row{\\frac{\\str{3}}{\\str{8}}}{\\row{\\html{<span> &nbsp; and &nbsp; </span>}}}{\\frac{\\str{5}}{\\str{6}}}}{\\row{\\str{Build equivalent fractions that have the same denominator.}}}',
                                        answer: '\\row{\\frac{\\input{9}}{\\input{24}}}{\\html{<span> &nbsp; and &nbsp; </span>}}{\\frac{\\input{20}}{\\input{24}}}',
                                        controls: {
                                            "checkAnswer": true,
                                            "help": false,
                                            "workbook": true
                                        }
                                    }]
                                }, {
                                    title: 'Workbook',
                                    children: [{
                                        problem: '\\rowgrp{\\row{\\str{What is the lowest common denominator (LCD) of the fractions?}}}{\\row{\\frac{\\fracstr{3}}{\\fracstr{8}}}{\\row{\\html{<span> &nbsp; and &nbsp; </span>}}}{\\frac{\\fracstr{5}}{\\fracstr{6}}}}',
                                        answer: '\\row{\\input{24}}',
                                        controls: {
                                            "checkAnswer": true,
                                            "help": false
                                        },
                                    }, {
                                        problem: '\\rowgrp{\\row{\\str{Use the LCD to convert the fractions: }}}{\\row{\\frac{\\fracstr{3}}{\\fracstr{8}}}{\\row{\\html{<span> &nbsp; and &nbsp; </span>}}}{\\frac{\\fracstr{5}}{\\fracstr{6}}}}',
                                        answer: '\\row{\\frac{\\input{9}}{\\fracstr{24}}}{\\html{<span> &nbsp; and &nbsp; </span>}}{\\frac{\\input{20}}{\\fracstr{24}}}',
                                        controls: {
                                            "checkAnswer": true,
                                            "help": false
                                        }
                                    }]
                                }]
                            }, {
                                title: 'Build Equivalent Fractions',
                                children: [{
                                    title: 'Main Answer',
                                    children: [{
                                        problem: '\\rowgrp{\\row{\\str{Start with the fractions:}}}{\\row{\\frac{\\str{4}}{\\str{5}}}{\\row{\\html{<span> &nbsp; and &nbsp; </span>}}}{\\frac{\\str{5}}{\\str{4}}}}{\\row{\\str{Build equivalent fractions that have the same denominator.}}}',
                                        answer: '\\row{\\frac{\\input{16}}{\\input{20}}}{\\html{<span> &nbsp; and &nbsp; </span>}}{\\frac{\\input{25}}{\\input{20}}}',
                                        controls: {
                                            "checkAnswer": true,
                                            "help": false,
                                            "workbook": true
                                        }
                                    }]
                                }, {
                                    title: 'Workbook',
                                    children: [{
                                        problem: '\\rowgrp{\\row{\\str{What is the lowest common denominator (LCD) of the fractions?}}}{\\row{\\frac{\\fracstr{4}}{\\fracstr{5}}}{\\row{\\html{<span> &nbsp; and &nbsp; </span>}}}{\\frac{\\fracstr{5}}{\\fracstr{4}}}}',
                                        answer: '\\row{\\input{20}}',
                                        controls: {
                                            "checkAnswer": true,
                                            "help": false
                                        },
                                    }, {
                                        problem: '\\rowgrp{\\row{\\str{Use the LCD to convert the fractions: }}}{\\row{\\frac{\\fracstr{4}}{\\fracstr{5}}}{\\row{\\html{<span> &nbsp; and &nbsp; </span>}}}{\\frac{\\fracstr{5}}{\\fracstr{4}}}}',
                                        answer: '\\row{\\frac{\\input{16}}{\\fracstr{20}}}{\\html{<span> &nbsp; and &nbsp; </span>}}{\\frac{\\input{25}}{\\fracstr{20}}}',
                                        controls: {
                                            "checkAnswer": true,
                                            "help": false
                                        }
                                    }]
                                }]
                            }, {
                                title: 'Build Equivalent Fractions',
                                children: [{
                                    title: 'Main Answer',
                                    children: [{
                                        problem: '\\rowgrp{\\row{\\str{Start with the fractions:}}}{\\row{\\frac{\\str{2}}{\\str{3}}}{\\row{\\html{<span> &nbsp; and &nbsp; </span>}}}{\\frac{\\str{5}}{\\str{6}}}}{\\row{\\str{Build equivalent fractions that have the same denominator.}}}',
                                        answer: '\\row{\\frac{\\input{4}}{\\input{6}}}{\\html{<span> &nbsp; and &nbsp; </span>}}{\\frac{\\input{5}}{\\input{6}}}',
                                        controls: {
                                            "checkAnswer": true,
                                            "help": false,
                                            "workbook": true
                                        }
                                    }]
                                }, {
                                    title: 'Workbook',
                                    children: [{
                                        problem: '\\rowgrp{\\row{\\str{What is the lowest common denominator (LCD) of the fractions?}}}{\\row{\\frac{\\fracstr{2}}{\\fracstr{3}}}{\\row{\\html{<span> &nbsp; and &nbsp; </span>}}}{\\frac{\\fracstr{5}}{\\fracstr{6}}}}',
                                        answer: '\\row{\\input{6}}',
                                        controls: {
                                            "checkAnswer": true,
                                            "help": false
                                        },
                                    }, {
                                        problem: '\\rowgrp{\\row{\\str{Use the LCD to convert the fractions: }}}{\\row{\\frac{\\fracstr{2}}{\\fracstr{3}}}{\\row{\\html{<span> &nbsp; and &nbsp; </span>}}}{\\frac{\\fracstr{5}}{\\fracstr{6}}}}',
                                        answer: '\\row{\\frac{\\input{4}}{\\fracstr{6}}}{\\html{<span> &nbsp; and &nbsp; </span>}}{\\frac{\\input{5}}{\\fracstr{6}}}',
                                        controls: {
                                            "checkAnswer": true,
                                            "help": false
                                        }
                                    }]
                                }]
                            }, {
                                title: 'Build Equivalent Fractions',
                                children: [{
                                    title: 'Main Answer',
                                    children: [{
                                        problem: '\\rowgrp{\\row{\\str{Start with the fractions:}}}{\\row{\\frac{\\str{5}}{\\str{8}}}{\\row{\\html{<span> &nbsp; and &nbsp; </span>}}}{\\frac{\\str{6}}{\\str{5}}}}{\\row{\\str{Build equivalent fractions that have the same denominator.}}}',
                                        answer: '\\row{\\frac{\\input{25}}{\\input{40}}}{\\html{<span> &nbsp; and &nbsp; </span>}}{\\frac{\\input{48}}{\\input{40}}}',
                                        controls: {
                                            "checkAnswer": true,
                                            "help": false,
                                            "workbook": true
                                        }
                                    }]
                                }, {
                                    title: 'Workbook',
                                    children: [{
                                        problem: '\\rowgrp{\\row{\\str{What is the lowest common denominator (LCD) of the fractions?}}}{\\row{\\frac{\\fracstr{5}}{\\fracstr{8}}}{\\row{\\html{<span> &nbsp; and &nbsp; </span>}}}{\\frac{\\fracstr{6}}{\\fracstr{5}}}}',
                                        answer: '\\row{\\input{40}}',
                                        controls: {
                                            "checkAnswer": true,
                                            "help": false
                                        },
                                    }, {
                                        problem: '\\rowgrp{\\row{\\str{Use the LCD to convert the fractions: }}}{\\row{\\frac{\\fracstr{5}}{\\fracstr{8}}}{\\row{\\html{<span> &nbsp; and &nbsp; </span>}}}{\\frac{\\fracstr{6}}{\\fracstr{5}}}}',
                                        answer: '\\row{\\frac{\\input{25}}{\\fracstr{40}}}{\\html{<span> &nbsp; and &nbsp; </span>}}{\\frac{\\input{48}}{\\fracstr{40}}}',
                                        controls: {
                                            "checkAnswer": true,
                                            "help": false
                                        }
                                    }]
                                }]
                            }, {
                                title: 'Build Equivalent Fractions',
                                children: [{
                                    title: 'Main Answer',
                                    children: [{
                                        problem: '\\rowgrp{\\row{\\str{Start with the fractions:}}}{\\row{\\frac{\\str{1}}{\\str{10}}}{\\row{\\html{<span> &nbsp; and &nbsp; </span>}}}{\\frac{\\str{3}}{\\str{4}}}}{\\row{\\str{Build equivalent fractions that have the same denominator.}}}',
                                        answer: '\\row{\\frac{\\input{2}}{\\input{20}}}{\\html{<span> &nbsp; and &nbsp; </span>}}{\\frac{\\input{15}}{\\input{20}}}',
                                        controls: {
                                            "checkAnswer": true,
                                            "help": false,
                                            "workbook": true
                                        }
                                    }]
                                }, {
                                    title: 'Workbook',
                                    children: [{
                                        problem: '\\rowgrp{\\row{\\str{What is the lowest common denominator (LCD) of the fractions?}}}{\\row{\\frac{\\fracstr{1}}{\\fracstr{10}}}{\\row{\\html{<span> &nbsp; and &nbsp; </span>}}}{\\frac{\\fracstr{3}}{\\fracstr{4}}}}',
                                        answer: '\\row{\\input{20}}',
                                        controls: {
                                            "checkAnswer": true,
                                            "help": false
                                        },
                                    }, {
                                        problem: '\\rowgrp{\\row{\\str{Use the LCD to convert the fractions: }}}{\\row{\\frac{\\fracstr{1}}{\\fracstr{10}}}{\\row{\\html{<span> &nbsp; and &nbsp; </span>}}}{\\frac{\\fracstr{3}}{\\fracstr{4}}}}',
                                        answer: '\\row{\\frac{\\input{2}}{\\fracstr{20}}}{\\html{<span> &nbsp; and &nbsp; </span>}}{\\frac{\\input{15}}{\\fracstr{20}}}',
                                        controls: {
                                            "checkAnswer": true,
                                            "help": false
                                        }
                                    }]
                                }]
                            }, {
                                title: 'Build Equivalent Fractions',
                                children: [{
                                    title: 'Main Answer',
                                    children: [{
                                        problem: '\\rowgrp{\\row{\\str{Start with the fractions:}}}{\\row{\\frac{\\str{10}}{\\str{3}}}{\\row{\\html{<span> &nbsp; and &nbsp; </span>}}}{\\frac{\\str{7}}{\\str{5}}}}{\\row{\\str{Build equivalent fractions that have the same denominator.}}}',
                                        answer: '\\row{\\frac{\\input{50}}{\\input{15}}}{\\html{<span> &nbsp; and &nbsp; </span>}}{\\frac{\\input{21}}{\\input{15}}}',
                                        controls: {
                                            "checkAnswer": true,
                                            "help": false,
                                            "workbook": true
                                        }
                                    }]
                                }, {
                                    title: 'Workbook',
                                    children: [{
                                        problem: '\\rowgrp{\\row{\\str{What is the lowest common denominator (LCD) of the fractions?}}}{\\row{\\frac{\\fracstr{10}}{\\fracstr{3}}}{\\row{\\html{<span> &nbsp; and &nbsp; </span>}}}{\\frac{\\fracstr{7}}{\\fracstr{5}}}}',
                                        answer: '\\row{\\input{15}}',
                                        controls: {
                                            "checkAnswer": true,
                                            "help": false
                                        },
                                    }, {
                                        problem: '\\rowgrp{\\row{\\str{Use the LCD to convert the fractions: }}}{\\row{\\frac{\\fracstr{10}}{\\fracstr{3}}}{\\row{\\html{<span> &nbsp; and &nbsp; </span>}}}{\\frac{\\fracstr{7}}{\\fracstr{5}}}}',
                                        answer: '\\row{\\frac{\\input{50}}{\\fracstr{15}}}{\\html{<span> &nbsp; and &nbsp; </span>}}{\\frac{\\input{21}}{\\fracstr{15}}}',
                                        controls: {
                                            "checkAnswer": true,
                                            "help": false
                                        }
                                    }]
                                }]
                            }, {
                                title: 'Build Equivalent Fractions',
                                children: [{
                                    title: 'Main Answer',
                                    children: [{
                                        problem: '\\rowgrp{\\row{\\str{Start with the fractions:}}}{\\row{\\frac{\\str{9}}{\\str{5}}}{\\row{\\html{<span> &nbsp; and &nbsp; </span>}}}{\\frac{\\str{7}}{\\str{2}}}}{\\row{\\str{Build equivalent fractions that have the same denominator.}}}',
                                        answer: '\\row{\\frac{\\input{18}}{\\input{10}}}{\\html{<span> &nbsp; and &nbsp; </span>}}{\\frac{\\input{35}}{\\input{10}}}',
                                        controls: {
                                            "checkAnswer": true,
                                            "help": false,
                                            "workbook": true
                                        }
                                    }]
                                }, {
                                    title: 'Workbook',
                                    children: [{
                                        problem: '\\rowgrp{\\row{\\str{What is the lowest common denominator (LCD) of the fractions?}}}{\\row{\\frac{\\fracstr{9}}{\\fracstr{5}}}{\\row{\\html{<span> &nbsp; and &nbsp; </span>}}}{\\frac{\\fracstr{7}}{\\fracstr{2}}}}',
                                        answer: '\\row{\\input{10}}',
                                        controls: {
                                            "checkAnswer": true,
                                            "help": false
                                        },
                                    }, {
                                        problem: '\\rowgrp{\\row{\\str{Use the LCD to convert the fractions: }}}{\\row{\\frac{\\fracstr{9}}{\\fracstr{5}}}{\\row{\\html{<span> &nbsp; and &nbsp; </span>}}}{\\frac{\\fracstr{7}}{\\fracstr{2}}}}',
                                        answer: '\\row{\\frac{\\input{18}}{\\fracstr{10}}}{\\html{<span> &nbsp; and &nbsp; </span>}}{\\frac{\\input{35}}{\\fracstr{10}}}',
                                        controls: {
                                            "checkAnswer": true,
                                            "help": false
                                        }
                                    }]
                                }]
                            }, {
                                title: 'Build Equivalent Fractions',
                                children: [{
                                    title: 'Main Answer',
                                    children: [{
                                        problem: '\\rowgrp{\\row{\\str{Start with the fractions:}}}{\\row{\\frac{\\str{3}}{\\str{7}}}{\\row{\\html{<span> &nbsp; and &nbsp; </span>}}}{\\frac{\\str{7}}{\\str{8}}}}{\\row{\\str{Build equivalent fractions that have the same denominator.}}}',
                                        answer: '\\row{\\frac{\\input{24}}{\\input{56}}}{\\html{<span> &nbsp; and &nbsp; </span>}}{\\frac{\\input{49}}{\\input{56}}}',
                                        controls: {
                                            "checkAnswer": true,
                                            "help": false,
                                            "workbook": true
                                        }
                                    }]
                                }, {
                                    title: 'Workbook',
                                    children: [{
                                        problem: '\\rowgrp{\\row{\\str{What is the lowest common denominator (LCD) of the fractions?}}}{\\row{\\frac{\\fracstr{3}}{\\fracstr{7}}}{\\row{\\html{<span> &nbsp; and &nbsp; </span>}}}{\\frac{\\fracstr{7}}{\\fracstr{8}}}}',
                                        answer: '\\row{\\input{56}}',
                                        controls: {
                                            "checkAnswer": true,
                                            "help": false
                                        },
                                    }, {
                                        problem: '\\rowgrp{\\row{\\str{Use the LCD to convert the fractions: }}}{\\row{\\frac{\\fracstr{3}}{\\fracstr{7}}}{\\row{\\html{<span> &nbsp; and &nbsp; </span>}}}{\\frac{\\fracstr{7}}{\\fracstr{8}}}}',
                                        answer: '\\row{\\frac{\\input{21}}{\\fracstr{56}}}{\\html{<span> &nbsp; and &nbsp; </span>}}{\\frac{\\input{49}}{\\fracstr{56}}}',
                                        controls: {
                                            "checkAnswer": true,
                                            "help": false
                                        }
                                    }]
                                }]
                            }, {
                                title: 'Build Equivalent Fractions',
                                children: [{
                                    title: 'Main Answer',
                                    children: [{
                                        problem: '\\rowgrp{\\row{\\str{Start with the fractions:}}}{\\row{\\frac{\\str{15}}{\\str{6}}}{\\row{\\html{<span> &nbsp; and &nbsp; </span>}}}{\\frac{\\str{3}}{\\str{10}}}}{\\row{\\str{Build equivalent fractions that have the same denominator.}}}',
                                        answer: '\\row{\\frac{\\input{75}}{\\input{30}}}{\\html{<span> &nbsp; and &nbsp; </span>}}{\\frac{\\input{9}}{\\input{30}}}',
                                        controls: {
                                            "checkAnswer": true,
                                            "help": false,
                                            "workbook": true
                                        }
                                    }]
                                }, {
                                    title: 'Workbook',
                                    children: [{
                                        problem: '\\rowgrp{\\row{\\str{What is the lowest common denominator (LCD) of the fractions?}}}{\\row{\\frac{\\fracstr{15}}{\\fracstr{6}}}{\\row{\\html{<span> &nbsp; and &nbsp; </span>}}}{\\frac{\\fracstr{3}}{\\fracstr{10}}}}',
                                        answer: '\\row{\\input{30}}',
                                        controls: {
                                            "checkAnswer": true,
                                            "help": false
                                        },
                                    }, {
                                        problem: '\\rowgrp{\\row{\\str{Use the LCD to convert the fractions: }}}{\\row{\\frac{\\fracstr{15}}{\\fracstr{6}}}{\\row{\\html{<span> &nbsp; and &nbsp; </span>}}}{\\frac{\\fracstr{3}}{\\fracstr{10}}}}',
                                        answer: '\\row{\\frac{\\input{75}}{\\fracstr{30}}}{\\html{<span> &nbsp; and &nbsp; </span>}}{\\frac{\\input{9}}{\\fracstr{30}}}',
                                        controls: {
                                            "checkAnswer": true,
                                            "help": false
                                        }
                                    }]
                                }]
                            }]
                        }]
                    }, {
                        title: '3 Decimals',
                        path: 'decimals',
                        children: [
								   {
									title: '3.1 Place Value Number System of Decimal Numbers',
									path: '3.1-place-value-number-system-of-decimal-numbers',
									children: [
										{
											title: 'Decimal Number Place Value',
											children: [{
												title: 'Main Answer',
												children: [{
													problem: '\\rowgrp{\\row{\\str{Identify the place value of the indicated digit: }}}{\\row{\\placevalue{2.97551}{4}}}',
													answer: '\\select{Hundredths}{["Millionths", "Hundred-thousandths", "Ten-thousandths", "Thousandths", "Hundredths", "Tenths", "Ones", "Tens", "Hundreds", "Thousands", "Ten Thousands", "Hundred Thousands", "Millions", "Ten Millions", "Hundred Millions", "Billions", "Ten Billions", "Hundred Billions"]}',
													controls: {
														"checkAnswer": true,
														"help": '\\rowgrp{\\row{\\showplacedecimal{"Hundredths"}{2.97551}}}{\\row{\\str{\xA0}}}{\\row{css{\\str{answer:  Hundredths}}{label_like margin-left-small}}}}'
													}
												}]
											}]
										},
										{
											title: 'Decimal Number Place Value',
											children: [{
												title: 'Main Answer',
												children: [{
													problem: '\\rowgrp{\\row{\\str{Identify the place value of the indicated digit: }}}{\\row{\\placevalue{37928.46101}{9}}}',
													answer: '\\select{Thousands}{["Millionths", "Hundred-thousandths", "Ten-thousandths", "Thousandths", "Hundredths", "Tenths", "Ones", "Tens", "Hundreds", "Thousands", "Ten Thousands", "Hundred Thousands", "Millions", "Ten Millions", "Hundred Millions", "Billions", "Ten Billions", "Hundred Billions"]}',
													controls: {
														"checkAnswer": true,
														"help": '\\rowgrp{\\row{\\showplacedecimal{"Thousands"}{37928.46101}}}{\\row{\\str{\xA0}}}{\\row{css{\\str{answer:  Thousands}}{label_like margin-left-small}}}}'
													}
												}]
											}]
										},
										{
											title: 'Decimal Number Place Value',
											children: [{
												title: 'Main Answer',
												children: [{
													problem: '\\rowgrp{\\row{\\str{Identify the place value of the indicated digit: }}}{\\row{\\placevalue{0.1569}{2}}}',
													answer: '\\select{Thousandths}{["Millionths", "Hundred-thousandths", "Ten-thousandths", "Thousandths", "Hundredths", "Tenths", "Ones", "Tens", "Hundreds", "Thousands", "Ten Thousands", "Hundred Thousands", "Millions", "Ten Millions", "Hundred Millions", "Billions", "Ten Billions", "Hundred Billions"]}',
													controls: {
														"checkAnswer": true,
														"help": '\\rowgrp{\\row{\\showplacedecimal{"Thousandths"}{0.1569}}}{\\row{\\str{\xA0}}}{\\row{css{\\str{answer:  Thousandths}}{label_like margin-left-small}}}}'
													}
												}]
											}]
										},
										{
											title: 'Decimal Number Place Value',
											children: [{
												title: 'Main Answer',
												children: [{
													problem: '\\rowgrp{\\row{\\str{Identify the place value of the indicated digit: }}}{\\row{\\placevalue{86.38456}{6}}}',
													answer: '\\select{Ones}{["Millionths", "Hundred-thousandths", "Ten-thousandths", "Thousandths", "Hundredths", "Tenths", "Ones", "Tens", "Hundreds", "Thousands", "Ten Thousands", "Hundred Thousands", "Millions", "Ten Millions", "Hundred Millions", "Billions", "Ten Billions", "Hundred Billions"]}',
													controls: {
														"checkAnswer": true,
														"help": '\\rowgrp{\\row{\\showplacedecimal{"Ones"}{86.38456}}}{\\row{\\str{\xA0}}}{\\row{css{\\str{answer:  Ones}}{label_like margin-left-small}}}}'
													}
												}]
											}]
										},
										{
											title: 'Decimal Number Place Value',
											children: [{
												title: 'Main Answer',
												children: [{
													problem: '\\rowgrp{\\row{\\str{Identify the place value of the indicated digit: }}}{\\row{\\placevalue{9956.52}{2}}}',
													answer: '\\select{Tenths}{["Millionths", "Hundred-thousandths", "Ten-thousandths", "Thousandths", "Hundredths", "Tenths", "Ones", "Tens", "Hundreds", "Thousands", "Ten Thousands", "Hundred Thousands", "Millions", "Ten Millions", "Hundred Millions", "Billions", "Ten Billions", "Hundred Billions"]}',
													controls: {
														"checkAnswer": true,
														"help": '\\rowgrp{\\row{\\showplacedecimal{"Tenths"}{9956.52}}}{\\row{\\str{\xA0}}}{\\row{css{\\str{answer:  Tenths}}{label_like margin-left-small}}}}'
													}
												}]
											}]
										},
										{
											title: 'Decimal Number Place Value',
											children: [{
												title: 'Main Answer',
												children: [{
													problem: '\\rowgrp{\\row{\\str{Identify the place value of the indicated digit: }}}{\\row{\\placevalue{83.20524}{1}}}',
													answer: '\\select{Hundred-thousandths}{["Millionths", "Hundred-thousandths", "Ten-thousandths", "Thousandths", "Hundredths", "Tenths", "Ones", "Tens", "Hundreds", "Thousands", "Ten Thousands", "Hundred Thousands", "Millions", "Ten Millions", "Hundred Millions", "Billions", "Ten Billions", "Hundred Billions"]}',
													controls: {
														"checkAnswer": true,
														"help": '\\rowgrp{\\row{\\showplacedecimal{"Hundred-thousandths"}{2.97551}}}{\\row{\\str{\xA0}}}{\\row{css{\\str{answer:  Hundred-thousandths}}{label_like margin-left-small}}}}'
													}
												}]
											}]
										},
										{
											title: 'Decimal Number Place Value',
											children: [{
												title: 'Main Answer',
												children: [{
													problem: '\\rowgrp{\\row{\\str{Identify the place value of the indicated digit: }}}{\\row{\\placevalue{972.6571}{1}}}',
													answer: '\\select{Ten-thousandths}{["Millionths", "Hundred-thousandths", "Ten-thousandths", "Thousandths", "Hundredths", "Tenths", "Ones", "Tens", "Hundreds", "Thousands", "Ten Thousands", "Hundred Thousands", "Millions", "Ten Millions", "Hundred Millions", "Billions", "Ten Billions", "Hundred Billions"]}',
													controls: {
														"checkAnswer": true,
														"help": '\\rowgrp{\\row{\\showplacedecimal{"Ten-thousandths"}{972.6571}}}{\\row{\\str{\xA0}}}{\\row{css{\\str{answer:  Ten-thousandths}}{label_like margin-left-small}}}}'
													}
												}]
											}]
										},
										{
											title: 'Decimal Number Place Value',
											children: [{
												title: 'Main Answer',
												children: [{
													problem: '\\rowgrp{\\row{\\str{Identify the place value of the indicated digit: }}}{\\row{\\placevalue{0.659}{4}}}',
													answer: '\\select{Ones}{["Millionths", "Hundred-thousandths", "Ten-thousandths", "Thousandths", "Hundredths", "Tenths", "Ones", "Tens", "Hundreds", "Thousands", "Ten Thousands", "Hundred Thousands", "Millions", "Ten Millions", "Hundred Millions", "Billions", "Ten Billions", "Hundred Billions"]}',
													controls: {
														"checkAnswer": true,
														"help": '\\rowgrp{\\row{\\showplacedecimal{"Ones"}{0.659}}}{\\row{\\str{\xA0}}}{\\row{css{\\str{answer:  Ones}}{label_like margin-left-small}}}}'
													}
												}]
											}]
										},
										{
											title: 'Decimal Number Place Value',
											children: [{
												title: 'Main Answer',
												children: [{
													problem: '\\rowgrp{\\row{\\str{Identify the place value of the indicated digit: }}}{\\row{\\placevalue{2.78929}{3}}}',
													answer: '\\select{Thousandths}{["Millionths", "Hundred-thousandths", "Ten-thousandths", "Thousandths", "Hundredths", "Tenths", "Ones", "Tens", "Hundreds", "Thousands", "Ten Thousands", "Hundred Thousands", "Millions", "Ten Millions", "Hundred Millions", "Billions", "Ten Billions", "Hundred Billions"]}',
													controls: {
														"checkAnswer": true,
														"help": '\\rowgrp{\\row{\\showplacedecimal{"Thousandths"}{2.78929}}}{\\row{\\str{\xA0}}}{\\row{css{\\str{answer:  Thousandths}}{label_like margin-left-small}}}}'
													}
												}]
											}]
										},
										{
											title: 'Decimal Number Place Value',
											children: [{
												title: 'Main Answer',
												children: [{
													problem: '\\rowgrp{\\row{\\str{Identify the place value of the indicated digit: }}}{\\row{\\placevalue{0.85237}{4}}}',
													answer: '\\select{Hundredths}{["Millionths", "Hundred-thousandths", "Ten-thousandths", "Thousandths", "Hundredths", "Tenths", "Ones", "Tens", "Hundreds", "Thousands", "Ten Thousands", "Hundred Thousands", "Millions", "Ten Millions", "Hundred Millions", "Billions", "Ten Billions", "Hundred Billions"]}',
													controls: {
														"checkAnswer": true,
														"help": '\\rowgrp{\\row{\\showplacedecimal{"Hundredths"}{0.85237}}}{\\row{\\str{\xA0}}}{\\row{css{\\str{answer:  Hundredths}}{label_like margin-left-small}}}}'
													}
												}]
											}]
										},
									]
								},{
									title: '3.2 Change Decimals to Fractions and Mixed Numbers',
									path: '3.2-change-decimals-to-fractions-and-mixed-numbers',
									children: [
										{
											title: 'Change Decimals to Fractions and Mixed Numbers',
											children: [{
												title: 'Main Answer',
												children: [{
													problem: '\\rowgrp{\\row{\\str{What is the fraction of this decimal (reduced to lowest terms)?}}}{\\row{\\str{0.6}}}}',
													answer: '\\frac{\\input{3}}{\\input{5}}',
													controls: {
														"checkAnswer": true,
														"help": '\\rowgrp{\\row{\\str{Write the place value name as a fraction;}}}{\\row{\\str{reduce if necessary.}}}{\\row{\\str{\xA0}}}{\\row{\\frac{\\fracstr{6}}{\\fracstr{10}}}{\\str{ \xA0 \xA0 = \xA0 \xA0 }}{\\frac{\\fracstr{3}}{\\fracstr{5}}}{\\str{ \xA0 \xA0 \xA0 \xA0 }}{css{\\str{Answer: \xA0 \xA0}}{help-answer-text}}{css{\\frac{\\fracstr{3}}{\\fracstr{5}}}{help-answer-text-tight}}'
													}
												}]
											}]
										},
										{
											title: 'Change Decimals to Fractions and Mixed Numbers',
											children: [{
												title: 'Main Answer',
												children: [{
													problem: '\\rowgrp{\\row{\\str{What is the fraction of this decimal (reduced to lowest terms)?}}}{\\row{\\str{0.3}}}}',
													answer: '\\frac{\\input{3}}{\\input{10}}',
													controls: {
														"checkAnswer": true,
														"help": '\\rowgrp{\\row{\\str{Write the place value name as a fraction;}}}{\\row{\\str{reduce if necessary.}}}{\\row{\\str{\xA0}}}{\\row{css{\\str{Answer: \xA0 \xA0}}{help-answer-text}}{css{\\frac{\\fracstr{3}}{\\fracstr{10}}}{help-answer-text-tight}}}'															}
												}]
											}]
										},
										{
											title: 'Change Decimals to Fractions and Mixed Numbers',
											children: [{
												title: 'Main Answer',
												children: [{
													problem: '\\rowgrp{\\row{\\str{What is the fraction of this decimal (reduced to lowest terms)?}}}{\\row{\\str{0.57}}}}',
													answer: '\\frac{\\input{57}}{\\input{100}}',
													controls: {
														"checkAnswer": true,
														"help": '\\rowgrp{\\row{\\str{Write the place value name as a fraction;}}}{\\row{\\str{reduce if necessary.}}}{\\row{\\str{\xA0}}}{\\row{css{\\str{Answer: \xA0 \xA0}}{help-answer-text}}{css{\\frac{\\fracstr{57}}{\\fracstr{100}}}{help-answer-text-tight}}}'
													}
												}]
											}]
										},
										{
											title: 'Change Decimals to Fractions and Mixed Numbers',
											children: [{
												title: 'Main Answer',
												children: [{
													problem: '\\rowgrp{\\row{\\str{What is the fraction of this decimal (reduced to lowest terms)?}}}{\\row{\\str{8.4}}}}',
													answer: '\\mixed{\\input{8}}{\\frac{\\input{2}}{\\input{5}}}',
													controls: {
														"checkAnswer": true,
														"help": '\\rowgrp{\\row{\\str{Write the place value name as a fraction;}}}{\\row{\\str{reduce if necessary.}}}{\\row{\\str{\xA0}}}{\\row{\\frac{\\fracstr{84}}{\\fracstr{10}}}{\\str{ \xA0 \xA0 = \xA0 \xA0 }}{\\mixed{\\str{8}}{\\frac{\\fracstr{2}}{\\fracstr{5}}}}{\\row{css{\\str{Answer:  \xA0 \xA0}}{help-answer-text}}{css{\\mixed{\\str{8}}{\\frac{\\fracstr{2}}{\\fracstr{5}}}}{help-answer-text-tight}}}'															}
												}]
											}]
										},
										{
											title: 'Change Decimals to Fractions and Mixed Numbers',
											children: [{
												title: 'Main Answer',
												children: [{
													problem: '\\rowgrp{\\row{\\str{What is the fraction of this decimal (reduced to lowest terms)?}}}{\\row{\\str{0.9}}}}',
													answer: '\\frac{\\input{9}}{\\input{10}}',
													controls: {
														"checkAnswer": true,
														"help": '\\rowgrp{\\row{\\str{Write the place value name as a fraction;}}}{\\row{\\str{reduce if necessary.}}}{\\row{\\str{\xA0}}}{\\row{css{\\str{Answer: \xA0 \xA0}}{help-answer-text}}{css{\\frac{\\fracstr{9}}{\\fracstr{10}}}{help-answer-text-tight}}}'			
													}
												}]
											}]
										},
										{
											title: 'Change Decimals to Fractions and Mixed Numbers',
											children: [{
												title: 'Main Answer',
												children: [{
													problem: '\\rowgrp{\\row{\\str{What is the fraction of this decimal (reduced to lowest terms)?}}}{\\row{\\str{2.69}}}}',
													answer: '\\mixed{\\input{2}}{\\frac{\\input{69}}{\\input{100}}}',
													controls: {
														"checkAnswer": true,
														"help": '\\rowgrp{\\row{\\str{Write the place value name as a fraction;}}}{\\row{\\str{reduce if necessary.}}}{\\row{\\str{\xA0}}}{\\row{\\frac{\\fracstr{269}}{\\fracstr{100}}}{\\str{ \xA0 \xA0 = \xA0 \xA0 }}{\\mixed{\\str{2}}{\\frac{\\fracstr{69}}{\\fracstr{100}}}}{\\row{css{\\str{Answer:  \xA0 \xA0}}{help-answer-text}}{css{\\mixed{\\str{2}}{\\frac{\\fracstr{69}}{\\fracstr{100}}}}{help-answer-text-tight}}}'
													}
												}]
											}]
										},
										{
											title: 'Change Decimals to Fractions and Mixed Numbers',
											children: [{
												title: 'Main Answer',
												children: [{
													problem: '\\rowgrp{\\row{\\str{What is the fraction of this decimal (reduced to lowest terms)?}}}{\\row{\\str{0.43}}}}',
													answer: '\\frac{\\input{43}}{\\input{100}}',
													controls: {
														"checkAnswer": true,
														"help": '\\rowgrp{\\row{\\str{Write the place value name as a fraction;}}}{\\row{\\str{reduce if necessary.}}}{\\row{\\str{\xA0}}}{\\row{css{\\str{Answer: \xA0 \xA0}}{help-answer-text}}{css{\\frac{\\fracstr{43}}{\\fracstr{100}}}{help-answer-text-tight}}}'	
													}
												}]
											}]
										},
										{
											title: 'Change Decimals to Fractions and Mixed Numbers',
											children: [{
												title: 'Main Answer',
												children: [{
													problem: '\\rowgrp{\\row{\\str{What is the fraction of this decimal (reduced to lowest terms)?}}}{\\row{\\str{0.68}}}}',
													answer: '\\frac{\\input{17}}{\\input{25}}',
													controls: {
														"checkAnswer": true,
														"help": '\\rowgrp{\\row{\\str{Write the place value name as a fraction;}}}{\\row{\\str{reduce if necessary.}}}{\\row{\\str{\xA0}}}{\\row{\\frac{\\fracstr{68}}{\\fracstr{100}}}{\\str{ \xA0 \xA0 = \xA0 \xA0 }}{\\frac{\\fracstr{17}}{\\fracstr{25}}}{\\str{ \xA0 \xA0 \xA0 \xA0 }}{css{\\str{Answer: \xA0 \xA0}}{help-answer-text}}{css{\\frac{\\fracstr{17}}{\\fracstr{25}}}{help-answer-text-tight}}}'
													}
												}]
											}]
										},
										{
											title: 'Change Decimals to Fractions and Mixed Numbers',
											children: [{
												title: 'Main Answer',
												children: [{
													problem: '\\rowgrp{\\row{\\str{What is the fraction of this decimal (reduced to lowest terms)?}}}{\\row{\\str{0.17}}}}',
													answer: '\\frac{\\input{17}}{\\input{100}}',
													controls: {
														"checkAnswer": true,
														"help": '\\rowgrp{\\row{\\str{Write the place value name as a fraction;}}}{\\row{\\str{reduce if necessary.}}}{\\row{\\str{\xA0}}}{\\row{css{\\str{Answer: \xA0 \xA0}}{help-answer-text}}{css{\\frac{\\fracstr{17}}{\\fracstr{100}}}{help-answer-text-tight}}}'	
													}
												}]
											}]
										},
										{
											title: 'Change Decimals to Fractions and Mixed Numbers',
											children: [{
												title: 'Main Answer',
												children: [{
													problem: '\\rowgrp{\\row{\\str{What is the fraction of this decimal (reduced to lowest terms)?}}}{\\row{\\str{2.87}}}}',
													answer: '\\mixed{\\input{2}}{\\frac{\\input{87}}{\\input{100}}}',
													controls: {
														"checkAnswer": true,
														"help": '\\rowgrp{\\row{\\str{Write the place value name as a fraction;}}}{\\row{\\str{reduce if necessary.}}}{\\row{\\str{\xA0}}}{\\row{\\frac{\\fracstr{287}}{\\fracstr{100}}}{\\str{ \xA0 \xA0 = \xA0 \xA0 }}{\\mixed{\\str{2}}{\\frac{\\fracstr{87}}{\\fracstr{100}}}}{\\row{css{\\str{Answer:  \xA0 \xA0}}{help-answer-text}}{css{\\mixed{\\str{2}}{\\frac{\\fracstr{87}}{\\fracstr{100}}}}{help-answer-text-tight}}}'
													}
												}]
											}]
										},
									]
								},{
									title: '3.3 Round Decimals',
									path: '3.3-round-decimals',
									children: [
										{
											title: 'Round Decimals',
											children: [{
												title: 'Main Answer',
												children: [{
													problem: '\\rowgrp{\\row{\\str{Round this decimal number to the indicated place value: Nearest Hundredths place}}}{\\row{\\str{0.96139}}}}',
													answer: '\\input{0.96}',
													controls: {
														"checkAnswer": true,
														"help": '\\placevalue{0.96139}{4}{showanswer}'
													}
												}]
											}]
										},
										{
											title: 'Round Decimals',
											children: [{
												title: 'Main Answer',
												children: [{
													problem: '\\rowgrp{\\row{\\str{Round this decimal number to the indicated place value: Nearest Tenths place}}}{\\row{\\str{5.52887}}}}',
													answer: '\\input{5.5}',
													controls: {
														"checkAnswer": true,
														"help": '\\placevalue{5.52887}{5}{showanswer}'
													}
												}]
											}]
										},
										{
											title: 'Round Decimals',
											children: [{
												title: 'Main Answer',
												children: [{
													problem: '\\rowgrp{\\row{\\str{Round this decimal number to the indicated place value: Nearest Hundredths place}}}{\\row{\\str{6.2412}}}}',
													answer: '\\input{6.24}',
													controls: {
														"checkAnswer": true,
														"help": '\\placevalue{6.2412}{3}{showanswer}'
													}
												}]
											}]
										},
										{
											title: 'Round Decimals',
											children: [{
												title: 'Main Answer',
												children: [{
													problem: '\\rowgrp{\\row{\\str{Round this decimal number to the indicated place value: Nearest Ten-Thousandths place}}}{\\row{\\str{1.96139}}}}',
													answer: '\\input{1.9614}',
													controls: {
														"checkAnswer": true,
														"help": '\\placevalue{1.96139}{2}{showanswer}'
													}
												}]
											}]
										},
										{
											title: 'Round Decimals',
											children: [{
												title: 'Main Answer',
												children: [{
													problem: '\\rowgrp{\\row{\\str{Round this decimal number to the indicated place value: Nearest Ones place}}}{\\row{\\str{1.68}}}}',
													answer: '\\input{2}',
													controls: {
														"checkAnswer": true,
														"help": '\\placevalue{1.68}{3}{showanswer}'
													}
												}]
											}]
										},
										{
											title: 'Round Decimals',
											children: [{
												title: 'Main Answer',
												children: [{
													problem: '\\rowgrp{\\row{\\str{Round this decimal number to the indicated place value: Nearest Tenths place}}}{\\row{\\str{7.19824}}}}',
													answer: '\\input{7.2}',
													controls: {
														"checkAnswer": true,
														"help": '\\placevalue{7.19824}{5}{showanswer}'
													}
												}]
											}]
										},
										{
											title: 'Round Decimals',
											children: [{
												title: 'Main Answer',
												children: [{
													problem: '\\rowgrp{\\row{\\str{Round this decimal number to the indicated place value: Nearest Tenths place}}}{\\row{\\str{10.9563}}}}',
													answer: '\\input{11.0}',
													controls: {
														"checkAnswer": true,
														"help": '\\placevalue{10.9563}{4}{showanswer}'
													}
												}]
											}]
										},
										{
											title: 'Round Decimals',
											children: [{
												title: 'Main Answer',
												children: [{
													problem: '\\rowgrp{\\row{\\str{Round this decimal number to the indicated place value: Nearest Tens place}}}{\\row{\\str{49.1}}}}',
													answer: '\\input{50}',
													controls: {
														"checkAnswer": true,
														"help": '\\placevalue{49.1}{3}{showanswer}'
													}
												}]
											}]
										},
										{
											title: 'Round Decimals',
											children: [{
												title: 'Main Answer',
												children: [{
													problem: '\\rowgrp{\\row{\\str{Round this decimal number to the indicated place value: Nearest Hundredths place}}}{\\row{\\str{16.4118}}}}',
													answer: '\\input{16.41}',
													controls: {
														"checkAnswer": true,
														"help": '\\placevalue{16.4118}{3}{showanswer}'
													}
												}]
											}]
										},
										{
											title: 'Round Decimals',
											children: [{
												title: 'Main Answer',
												children: [{
													problem: '\\rowgrp{\\row{\\str{Round this decimal number to the indicated place value: Nearest Thousandths place}}}{\\row{\\str{7.7195}}}}',
													answer: '\\input{7.720}',
													controls: {
														"checkAnswer": true,
														"help": '\\placevalue{7.7195}{2}{showanswer}'
													}
												}]
											}]
										},
									]
								},
								{
                                title: '3.4 Add Decimal Numbers',
                                path: '3.4-add-decimal-numbers',
                                children: [
                                    {
										title: 'Add Decimal Numbers',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\rowgrp{\\row{\\str{Find the sum of the decimal numbers:}}}{\\row{\\adddecimals{math}{partial}{[47.2,59.6]}}}',
												answer: '\\input{106.8}',
												controls: {
													"checkAnswer": true,
													"help": '\\rowgrp{\\row{\\adddecimals{math}{complete}{[47.2,59.6]}}{\\css{\\str{Answer:  106.8}}{help-answer-text}}}'
												}
											}]
										}]
									},{
										title: 'Add Decimal Numbers',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\rowgrp{\\row{\\str{Find the sum of the decimal numbers:}}}{\\row{\\adddecimals{english}{partial}{[73.98,396.43,47.514]}}}',
												answer: '\\input{517.924}',
												controls: {
													"checkAnswer": true,
													"help": '\\rowgrp{\\row{\\adddecimals{math}{complete}{[73.98,396.43,47.514]}}{\\css{\\str{Answer:  517.924}}{help-answer-text}}}'
												}
											}]
										}]
									},
									{
										title: 'Add Decimal Numbers',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\rowgrp{\\row{\\str{Find the sum of the decimal numbers:}}}{\\row{\\adddecimals{english}{partial}{[95.2,53.3,75.12]}}}',
												answer: '\\input{223.62}',
												controls: {
													"checkAnswer": true,
													"help": '\\rowgrp{\\row{\\adddecimals{math}{complete}{[95.2,53.3,75.12]}}{\\css{\\str{Answer:  223.62}}{help-answer-text}}}'
												}
											}]
										}]
									},
									{
										title: 'Add Decimal Numbers',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\rowgrp{\\row{\\str{Find the sum of the decimal numbers:}}}{\\row{\\adddecimals{math}{partial}{[86.21,8.83,235.755]}}}',
												answer: '\\input{330.795}',
												controls: {
													"checkAnswer": true,
													"help": '\\rowgrp{\\row{\\adddecimals{math}{complete}{[86.21,8.83,235.755]}}{\\css{\\str{Answer:  330.795}}{help-answer-text}}}'
												}
											}]
										}]
									},
									{
										title: 'Add Decimal Numbers',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\rowgrp{\\row{\\str{Find the sum of the decimal numbers:}}}{\\row{\\adddecimals{english}{partial}{[3.471,92.43,8.11]}}}',
												answer: '\\input{104.011}',
												controls: {
													"checkAnswer": true,
													"help": '\\rowgrp{\\row{\\adddecimals{math}{complete}{[3.471,92.43,8.11]}}{\\css{\\str{Answer:  104.011}}{help-answer-text}}}'
												}
											}]
										}]
									},
									{
										title: 'Add Decimal Numbers',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\rowgrp{\\row{\\str{Find the sum of the decimal numbers:}}}{\\row{\\adddecimals{math}{partial}{[66.6,36.94,7.44]}}}',
												answer: '\\input{110.98}',
												controls: {
													"checkAnswer": true,
													"help": '\\rowgrp{\\row{\\adddecimals{math}{complete}{[66.6,36.94,7.44]}}{\\css{\\str{Answer:  110.98}}{help-answer-text}}}'
												}
											}]
										}]
									},
									{
										title: 'Add Decimal Numbers',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\rowgrp{\\row{\\str{Find the sum of the decimal numbers:}}}{\\row{\\adddecimals{math}{partial}{[4.2,1.883,72.79]}}}',
												answer: '\\input{78.873}',
												controls: {
													"checkAnswer": true,
													"help": '\\rowgrp{\\row{\\adddecimals{math}{complete}{[4.2,1.883,72.79]}}{\\css{\\str{Answer:  78.873}}{help-answer-text}}}'
												}
											}]
										}]
									},
									{
										title: 'Add Decimal Numbers',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\rowgrp{\\row{\\str{Find the sum of the decimal numbers:}}}{\\row{\\adddecimals{english}{partial}{[4068.97963, 343390.77255, 537.75789]}}}',
												answer: '\\input{347997.51007}',
												controls: {
													"checkAnswer": true,
													"help": '\\rowgrp{\\row{\\adddecimals{math}{complete}{[4068.97963, 343390.77255, 537.75789]}}{\\css{\\str{Answer:  347997.51007}}{help-answer-text}}}'
												}
											}]
										}]
									},
									{
										title: 'Add Decimal Numbers',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\rowgrp{\\row{\\str{Find the sum of the decimal numbers:}}}{\\row{\\adddecimals{math}{partial}{[532.2879,51694.671,685.8118]}}}',
												answer: '\\input{52912.7707}',
												controls: {
													"checkAnswer": true,
													"help": '\\rowgrp{\\row{\\adddecimals{math}{complete}{[532.2879,51694.671,685.8118]}}{\\css{\\str{Answer:  52912.7707}}{help-answer-text}}}'
												}
											}]
										}]
									},
									{
										title: 'Add Decimal Numbers',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\rowgrp{\\row{\\str{Find the sum of the decimal numbers:}}}{\\row{\\adddecimals{english}{partial}{[5267.4401,583.1444,938.78761]}}}',
												answer: '\\input{6789.37211}',
												controls: {
													"checkAnswer": true,
													"help": '\\rowgrp{\\row{\\adddecimals{math}{complete}{[5267.4401,583.1444,938.78761]}}{\\css{\\str{Answer:  6789.37211}}{help-answer-text}}}'
												}
											}]
                                        }]
                                    }
                                ]
                            },
								{
                                title: '3.5 Subtract Decimal Numbers',
                                path: '3.5-subtract-decimal-numbers',
                                children: [
                                    {
										title: 'Subtract Decimal Numbers',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\rowgrp{\\row{\\str{Find the difference of the decimal numbers:}}}{\\row{\\subtractdecimals{math}{partial}{17.3}{8.22}}}',
												answer: '\\input{9.08}',
												controls: {
													"checkAnswer": true,
													"help": '\\rowgrp{\\row{\\subtractdecimals{math}{complete}{17.3}{8.22}}{\\css{\\str{Answer:  9.08}}{help-answer-text}}}'
												}
											}]
										}]
									},{
										title: 'Subtract Decimal Numbers',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\rowgrp{\\row{\\str{Find the difference of the decimal numbers:}}}{\\row{\\subtractdecimals{math}{partial}{3}{0.12}}}',
												answer: '\\input{2.88}',
												controls: {
													"checkAnswer": true,
													"help": '\\rowgrp{\\row{\\subtractdecimals{math}{complete}{3}{0.12}}{\\css{\\str{Answer:  2.88}}{help-answer-text}}}'
												}
											}]
										}]
									},
									{
										title: 'Subtract Decimal Numbers',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\rowgrp{\\row{\\str{Find the difference of the decimal numbers:}}}{\\row{\\subtractdecimals{math}{partial}{8.42}{5.75}}}',
												answer: '\\input{2.67}',
												controls: {
													"checkAnswer": true,
													"help": '\\rowgrp{\\row{\\subtractdecimals{math}{complete}{8.42}{5.75}}{\\css{\\str{Answer:  2.67}}{help-answer-text}}}'
												}
											}]
										}]
									},
									{
										title: 'Subtract Decimal Numbers',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\rowgrp{\\row{\\str{Find the difference of the decimal numbers:}}}{\\row{\\subtractdecimals{english}{partial}{8.7}{5.33}}}',
												answer: '\\input{3.37}',
												controls: {
													"checkAnswer": true,
													"help": '\\rowgrp{\\row{\\subtractdecimals{math}{complete}{8.7}{5.33}}{\\css{\\str{Answer:  3.37}}{help-answer-text}}}'
												}
											}]
										}]
									},
									{
										title: 'Subtract Decimal Numbers',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\rowgrp{\\row{\\str{Find the difference of the decimal numbers:}}}{\\row{\\subtractdecimals{math}{partial}{27.15}{2.75}}}',
												answer: '\\input{24.4}',
												controls: {
													"checkAnswer": true,
													"help": '\\rowgrp{\\row{\\subtractdecimals{math}{complete}{27.15}{2.75}}{\\css{\\str{Answer:  24.4}}{help-answer-text}}}'
												}
											}]
										}]
									},
									{
										title: 'Subtract Decimal Numbers',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\rowgrp{\\row{\\str{Find the difference of the decimal numbers:}}}{\\row{\\subtractdecimals{english}{partial}{22.1}{3.8}}}',
												answer: '\\input{18.3}',
												controls: {
													"checkAnswer": true,
													"help": '\\rowgrp{\\row{\\subtractdecimals{math}{complete}{22.1}{3.8}}{\\css{\\str{Answer:  18.3}}{help-answer-text}}}'
												}
											}]
										}]
									},
									{
										title: 'Subtract Decimal Numbers',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\rowgrp{\\row{\\str{Find the difference of the decimal numbers:}}}{\\row{\\subtractdecimals{math}{partial}{458.5}{84.158}}}',
												answer: '\\input{374.342}',
												controls: {
													"checkAnswer": true,
													"help": '\\rowgrp{\\row{\\subtractdecimals{math}{complete}{458.5}{84.158}}{\\css{\\str{Answer:  374.342}}{help-answer-text}}}'
												}
											}]
										}]
									},
									{
										title: 'Subtract Decimal Numbers',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\rowgrp{\\row{\\str{Find the difference of the decimal numbers:}}}{\\row{\\subtractdecimals{english}{partial}{292.653}{6.32}}}',
												answer: '\\input{286.333}',
												controls: {
													"checkAnswer": true,
													"help": '\\rowgrp{\\row{\\subtractdecimals{math}{complete}{292.653}{6.32}}{\\css{\\str{Answer:  286.333}}{help-answer-text}}}'
												}
											}]
										}]
									},
									{
										title: 'Subtract Decimal Numbers',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\rowgrp{\\row{\\str{Find the difference of the decimal numbers:}}}{\\row{\\subtractdecimals{english}{partial}{9.28}{5.84}}}',
												answer: '\\input{3.39}',
												controls: {
													"checkAnswer": true,
													"help": '\\rowgrp{\\row{\\subtractdecimals{math}{complete}{9.28}{5.84}}{\\css{\\str{Answer:  3.39}}{help-answer-text}}}'
												}
											}]
										}]
									},
									{
										title: 'Subtract Decimal Numbers',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\rowgrp{\\row{\\str{Find the difference of the decimal numbers:}}}{\\row{\\subtractdecimals{math}{partial}{955.707}{87.998}}}',
												answer: '\\input{867.709}',
												controls: {
													"checkAnswer": true,
													"help": '\\rowgrp{\\row{\\subtractdecimals{math}{complete}{955.707}{87.998}}{\\css{\\str{Answer:  867.709}}{help-answer-text}}}'
												}
											}]
                                        }]
                                    }
                                ]
                            },
                            {
                                title: '3.6 Multiply Decimal Numbers',
                                path: '3.6-multiply-decimal-numbers',
                                children: [
                                    {
										title: 'Multiply Decimal Numbers',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\rowgrp{\\row{\\str{Find the product of the decimal numbers:}}}{\\row{\\str{\xA0}}}{\\row{\\multiplydecimals{math}{partial}{8.4}{6.7}}}',
												answer: '\\input{56.28}',
												controls: {
													"checkAnswer": true,
													"help": '\\multiplydecimals{math}{complete}{8.4}{6.7}'
												}
											}]
										}]
									},
									{
										title: 'Multiply Decimal Numbers',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\rowgrp{\\row{\\str{Find the product of the decimal numbers:}}}{\\row{\\str{\xA0}}}{\\row{\\multiplydecimals{math}{partial}{0.4}{8.7}}}',
												answer: '\\input{3.48}',
												controls: {
													"checkAnswer": true,
													"help": '\\multiplydecimals{math}{complete}{0.4}{8.7}'
												}
											}]
										}]
									},
									{
										title: 'Multiply Decimal Numbers',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\rowgrp{\\row{\\str{Find the product of the decimal numbers:}}}{\\row{\\str{\xA0}}}{\\row{\\multiplydecimals{english}{partial}{8.7}{2.3}}}',
												answer: '\\input{20.01}',
												controls: {
													"checkAnswer": true,
													"help": '\\multiplydecimals{math}{complete}{8.7}{2.3}'
												}
											}]
										}]
									},
									{
										title: 'Multiply Decimal Numbers',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\rowgrp{\\row{\\str{Find the product of the decimal numbers:}}}{\\row{\\str{\xA0}}}{\\row{\\multiplydecimals{math}{partial}{2.6}{2.3}}}',
												answer: '\\input{5.98}',
												controls: {
													"checkAnswer": true,
													"help": '\\multiplydecimals{math}{complete}{2.6}{2.3}}'
												}
											}]
										}]
									},
									{
										title: 'Multiply Decimal Numbers',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\rowgrp{\\row{\\str{Find the product of the decimal numbers:}}}{\\row{\\str{\xA0}}}{\\row{\\multiplydecimals{english}{partial}{6.6}{4.4}}}',
												answer: '\\input{29.04}',
												controls: {
													"checkAnswer": true,
													"help": '\\multiplydecimals{math}{complete}{6.6}{4.4}}'
												}
											}]
										}]
									},
									{
										title: 'Multiply Decimal Numbers',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\rowgrp{\\row{\\str{Find the product of the decimal numbers:}}}{\\row{\\str{\xA0}}}{\\row{\\multiplydecimals{math}{partial}{3.4}{3.6}}}',
												answer: '\\input{12.24}',
												controls: {
													"checkAnswer": true,
													"help": '\\multiplydecimals{math}{complete}{3.4}{3.6}}'
												}
											}]
										}]
									},
									{
										title: 'Multiply Decimal Numbers',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\rowgrp{\\row{\\str{Find the product of the decimal numbers:}}}{\\row{\\str{\xA0}}}{\\row{\\multiplydecimals{math}{partial}{5.27}{1.3}}}',
												answer: '\\input{6.851}',
												controls: {
													"checkAnswer": true,
													"help": '\\multiplydecimals{math}{complete}{5.27}{1.3}'
												}
											}]
										}]
									},
									{
										title: 'Multiply Decimal Numbers',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\rowgrp{\\row{\\str{Find the product of the decimal numbers:}}}{\\row{\\str{\xA0}}}{\\row{\\multiplydecimals{english}{partial}{8.68}{39.8}}}',
												answer: '\\input{345.464}',
												controls: {
													"checkAnswer": true,
													"help": '\\multiplydecimals{math}{complete}{8.68}{39.8}'
												}
											}]
										}]
									},
									{
										title: 'Multiply Decimal Numbers',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\rowgrp{\\row{\\str{Find the product of the decimal numbers:}}}{\\row{\\str{\xA0}}}{\\row{\\multiplydecimals{english}{partial}{5.4}{3.18}}}',
												answer: '\\input{17.172}',
												controls: {
													"checkAnswer": true,
													"help": '\\multiplydecimals{math}{complete}{5.4}{3.18}'
												}
											}]
										}]
									},
									{
										title: 'Multiply Decimal Numbers',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\rowgrp{\\row{\\str{Find the product of the decimal numbers:}}}{\\row{\\str{\xA0}}}{\\row{\\multiplydecimals{math}{partial}{1.39}{3.82}}}',
												answer: '\\input{5.3098}',
												controls: {
													"checkAnswer": true,
													"help": '\\multiplydecimals{math}{complete}{1.39}{3.82}'
												}
                                            }]
                                        }]
                                    }
                                ]
                            },
                            {
                                title: '3.7 Multiply by Powers of Ten',
                                path: '3.7-multiply-by-powers-of-ten',
                                children: [
                                    {
										title: 'Multiply by Powers of Ten',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\rowgrp{\\row{\\str{Determine the product of:}}}{\\row{\\str{\xA0}}}{\\row{\\str{833 \(100\)}}}',
												answer: '\\input{83300}',
												controls: {
													"checkAnswer": true,
													"help": '\\rowgrp{\\row{\\multiplydecpowten{833}{100}}{\\css{\\str{Answer:  83300}}{help-answer-text help-answer-margin-right}}}'
												}
											}]
										}]
									},
									{
										title: 'Multiply by Powers of Ten',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\rowgrp{\\row{\\str{Determine the product of:}}}{\\row{\\str{\xA0}}}{\\row{\\str{722 \(10\)}}}',
												answer: '\\input{7220}',
												controls: {
													"checkAnswer": true,
													"help": '\\rowgrp{\\row{\\multiplydecpowten{722}{10}}{\\css{\\str{Answer:  7220}}{help-answer-text help-answer-margin-right}}}'
												}
											}]
										}]
									},
									{
										title: 'Multiply by Powers of Ten',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\rowgrp{\\row{\\str{Determine the product of:}}}{\\row{\\str{\xA0}}}{\\row{\\str{0.1 \(1000\)}}}',
												answer: '\\input{100}',
												controls: {
													"checkAnswer": true,
													"help": '\\rowgrp{\\row{\\multiplydecpowten{0.1}{1000}}{\\css{\\str{Answer:  100}}{help-answer-text help-answer-margin-right}}}'
												}
											}]
										}]
									},
									{
										title: 'Multiply by Powers of Ten',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\rowgrp{\\row{\\str{Determine the product of:}}}{\\row{\\str{\xA0}}}{\\row{\\str{3.36 \(1000\)}}}',
												answer: '\\input{3360}',
												controls: {
													"checkAnswer": true,
													"help": '\\rowgrp{\\row{\\multiplydecpowten{3.36}{1000}}{\\css{\\str{Answer:  3360}}{help-answer-text help-answer-margin-right}}}'
												}
											}]
										}]
									},
									{
										title: 'Multiply by Powers of Ten',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\rowgrp{\\row{\\str{Determine the product of:}}}{\\row{\\str{\xA0}}}{\\row{\\str{82 \(0.001\)}}}',
												answer: '\\input{0.082}',
												controls: {
													"checkAnswer": true,
													"help": '\\rowgrp{\\row{\\multiplydecpowten{82}{0.001}}{\\css{\\str{Answer:  .082}}{help-answer-text help-answer-margin-right}}}'
												}
											}]
										}]
									},
									{
										title: 'Multiply by Powers of Ten',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\rowgrp{\\row{\\str{Determine the product of:}}}{\\row{\\str{\xA0}}}{\\row{\\str{0.1 \(0.001\)}}}',
												answer: '\\input{0.0001}',
												controls: {
													"checkAnswer": true,
													"help": '\\rowgrp{\\row{\\multiplydecpowten{0.1}{0.001}}{\\css{\\str{Answer:  .0001}}{help-answer-text help-answer-margin-right}}}'
												}
											}]
										}]
									},
									{
										title: 'Multiply by Powers of Ten',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\rowgrp{\\row{\\str{Determine the product of:}}}{\\row{\\str{\xA0}}}{\\row{\\str{38.5 \(0.001\)}}}',
												answer: '\\input{0.0385}',
												controls: {
													"checkAnswer": true,
													"help": '\\rowgrp{\\row{\\multiplydecpowten{38.5}{0.001}}{\\css{\\str{Answer:  .0385}}{help-answer-text help-answer-margin-right}}}'
												}
											}]
										}]
									},
									{
										title: 'Multiply by Powers of Ten',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\rowgrp{\\row{\\str{Determine the product of:}}}{\\row{\\str{\xA0}}}{\\row{\\str{80.62 \(0.00001\)}}}',
												answer: '\\input{0.0008062}',
												controls: {
													"checkAnswer": true,
													"help": '\\rowgrp{\\row{\\multiplydecpowten{80.62}{0.00001}}{\\css{\\str{Answer:  0.0008062}}{help-answer-text help-answer-margin-right}}}'
												}
											}]
										}]
									},
									{
										title: 'Multiply by Powers of Ten',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\rowgrp{\\row{\\str{Determine the product of:}}}{\\row{\\str{\xA0}}}{\\row{\\str{988 \(1000\)}}}',
												answer: '\\input{988000}',
												controls: {
													"checkAnswer": true,
													"help": '\\rowgrp{\\row{\\multiplydecpowten{988}{1000}}{\\css{\\str{Answer:  988000}}{help-answer-text help-answer-margin-right}}}'
												}
											}]
										}]
									},
									{
										title: 'Multiply by Powers of Ten',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\rowgrp{\\row{\\str{Determine the product of:}}}{\\row{\\str{\xA0}}}{\\row{\\str{7.6 \(0.01\)}}}',
												answer: '\\input{0.076}',
												controls: {
													"checkAnswer": true,
													"help": '\\rowgrp{\\row{\\multiplydecpowten{7.6}{0.01}}{\\css{\\str{Answer:  .076}}{help-answer-text help-answer-margin-right}}}'
												}
                                            }]
                                        }]
                                    }
                                ]
                            },{
											title: '3.8 Change Fractions to Decimals',
											path: '3.8-change-fractions-to-decimals',
											children: [
												{
													title: 'Change Fractions to Decimals',
													children: [{
														title: 'Main Answer',
														children: [{
															problem: '\\row{\\str{Change \xA0}}{\\frac{\\fracstr{3}}{\\fracstr{10}}}{\\str{\xA0 to a decimal:}}',
															answer: '\\input{0.3}',
															controls: {
																"checkAnswer": true,
																"help": '\\rowgrp{\\row{\\str{3}}{\\str{\xA0 divided by \xA0}}{\\str{10}}{\\str{\xA0 equals \xA0}}{\\str{0.3}}}{\\row{\\str{\xA0}}}{\\css{\\row{\\str{Answer:  0.3}}}{help-answer-text help-answer-margin-right}}}}'
															}
														}]
													}]
												},
												{
													title: 'Change Fractions to Decimals',
													children: [{
														title: 'Main Answer',
														children: [{
															problem: '\\row{\\str{Change \xA0}}{\\frac{\\fracstr{4}}{\\fracstr{8}}}{\\str{\xA0 to a decimal:}}',
															answer: '\\input{0.5}',
															controls: {
																"checkAnswer": true,
																"help": '\\rowgrp{\\row{\\str{4}}{\\str{\xA0 divided by \xA0}}{\\str{8}}{\\str{\xA0 equals \xA0}}{\\str{0.5}}}{\\row{\\str{\xA0}}}{\\css{\\row{\\str{Answer:  0.5}}}{help-answer-text help-answer-margin-right}}}}'
							
															}
														}]
													}]
												},
												{
													title: 'Change Fractions to Decimals',
													children: [{
														title: 'Main Answer',
														children: [{
															problem: '\\row{\\str{Change \xA0}}{\\frac{\\fracstr{6}}{\\fracstr{8}}}{\\str{\xA0 to a decimal:}}',
															answer: '\\input{0.75}',
															controls: {
																"checkAnswer": true,
																"help": '\\rowgrp{\\row{\\str{6}}{\\str{\xA0 divided by \xA0}}{\\str{8}}{\\str{\xA0 equals \xA0}}{\\str{0.75}}}{\\row{\\str{\xA0}}}{\\css{\\row{\\str{Answer:  0.75}}}{help-answer-text help-answer-margin-right}}}}'

															}
														}]
													}]
												},
												{
													title: 'Change Fractions to Decimals',
													children: [{
														title: 'Main Answer',
														children: [{
															problem: '\\rowgrp{\\row{\\str{Change \xA0}}{\\frac{\\fracstr{14}}{\\fracstr{22}}}{\\str{\xA0 to a decimal;}}}{\\row{\\str{\xA0}}}{\\row{\\str{Round to the hundredths place if necessary.}}}',
															answer: '\\input{0.64}',
															controls: {
																"checkAnswer": true,
																"help": '\\rowgrp{\\row{\\str{14}}{\\str{\xA0 divided by \xA0}}{\\str{22}}{\\str{\xA0 equals \xA0}}{\\str{0.636...}}}{\\row{\\str{\xA0}}}{\\css{\\row{\\str{Answer:  0.64}}}{help-answer-text help-answer-margin-right}}}}'

															}
														}]
													}]
												},
												{
													title: 'Change Fractions to Decimals',
													children: [{
														title: 'Main Answer',
														children: [{
														//	problem: '\\frac{\\str{3}}{\\str{10}}',
															problem: '\\rowgrp{\\row{\\str{Change \xA0}}{\\frac{\\fracstr{14}}{\\fracstr{24}}}{\\str{\xA0 to a decimal;}}}{\\row{\\str{\xA0}}}{\\row{\\str{Round to the hundredths place if necessary.}}}',
															answer: '\\input{0.58}',
															controls: {
																"checkAnswer": true,
																"help": '\\rowgrp{\\row{\\str{14}}{\\str{\xA0 divided by \xA0}}{\\str{24}}{\\str{\xA0 equals \xA0}}{\\str{0.583...}}}{\\row{\\str{\xA0}}}{\\css{\\row{\\str{Answer:  0.58}}}{help-answer-text help-answer-margin-right}}}}'
															}
														}]
													}]
												},
												{
													title: 'Change Fractions to Decimals',
													children: [{
														title: 'Main Answer',
														children: [{
															problem: '\\row{\\str{Change \xA0}}{\\frac{\\fracstr{17}}{\\fracstr{34}}}{\\str{\xA0 to a decimal:}}',
															answer: '\\input{0.5}',
															controls: {
																"checkAnswer": true,
																"help": '\\rowgrp{\\row{\\str{17}}{\\str{\xA0 divided by \xA0}}{\\str{34}}{\\str{\xA0 equals \xA0}}{\\str{0.5}}}{\\row{\\str{\xA0}}}{\\css{\\row{\\str{Answer:  0.5}}}{help-answer-text help-answer-margin-right}}}}'
															}
														}]
													}]
												},
												{
													title: 'Change Fractions to Decimals',
													children: [{
														title: 'Main Answer',
														children: [{
															problem: '\\rowgrp{\\row{\\str{Change \xA0}}{\\frac{\\fracstr{10}}{\\fracstr{15}}}{\\str{\xA0 to a decimal;}}}{\\row{\\str{\xA0}}}{\\row{\\str{Round to the hundredths place if necessary.}}}',
															answer: '\\input{0.67}',
															controls: {
																"checkAnswer": true,
																"help": '\\rowgrp{\\row{\\str{10}}{\\str{\xA0 divided by \xA0}}{\\str{15}}{\\str{\xA0 equals \xA0}}{\\str{0.666...}}}{\\row{\\str{\xA0}}}{\\css{\\row{\\str{Answer:  0.67}}}{help-answer-text help-answer-margin-right}}}}'
															}
														}]
													}]
												},
												{
													title: 'Change Fractions to Decimals',
													children: [{
														title: 'Main Answer',
														children: [{
															problem: '\\rowgrp{\\row{\\str{Change \xA0}}{\\frac{\\fracstr{12}}{\\fracstr{21}}}{\\str{\xA0 to a decimal;}}}{\\row{\\str{\xA0}}}{\\row{\\str{Round to the hundredths place if necessary.}}}',
															answer: '\\input{0.57}',
															controls: {
																"checkAnswer": true,
																"help": '\\rowgrp{\\row{\\str{12}}{\\str{\xA0 divided by \xA0}}{\\str{21}}{\\str{\xA0 equals \xA0}}{\\str{0.571...}}}{\\row{\\str{\xA0}}}{\\css{\\row{\\str{Answer:  0.57}}}{help-answer-text help-answer-margin-right}}}}'
															}
														}]
													}]
												},
												{
													title: 'Change Fractions to Decimals',
													children: [{
														title: 'Main Answer',
														children: [{
															problem: '\\rowgrp{\\row{\\str{Change \xA0}}{\\frac{\\fracstr{28}}{\\fracstr{52}}}{\\str{\xA0 to a decimal;}}}{\\row{\\str{\xA0}}}{\\row{\\str{Round to the hundredths place if necessary.}}}',
															answer: '\\input{0.54}',
															controls: {
																"checkAnswer": true,
																"help": '\\rowgrp{\\row{\\str{28}}{\\str{\xA0 divided by \xA0}}{\\str{52}}{\\str{\xA0 equals \xA0}}{\\str{0.538...}}}{\\row{\\str{\xA0}}}{\\css{\\row{\\str{Answer:  0.54}}}{help-answer-text help-answer-margin-right}}}}'
															}
														}]
													}]
												},
												{
													title: 'Change Fractions to Decimals',
													children: [{
														title: 'Main Answer',
														children: [{
															problem: '\\rowgrp{\\row{\\str{Change \xA0}}{\\frac{\\fracstr{6}}{\\fracstr{9}}}{\\str{\xA0 to a decimal;}}}{\\row{\\str{\xA0}}}{\\row{\\str{Round to the hundredths place if necessary.}}}',
															answer: '\\input{0.67}',
															controls: {
																"checkAnswer": true,
																"help": '\\rowgrp{\\row{\\str{6}}{\\str{\xA0 divided by \xA0}}{\\str{9}}{\\str{\xA0 equals \xA0}}{\\str{0.666...}}}{\\row{\\str{\xA0}}}{\\css{\\row{\\str{Answer:  0.67}}}{help-answer-text help-answer-margin-right}}}}'
															}
														}]
													}]
												},
											]
										},
// 3.2 Divide Whole Numbers                           
                            {
                                title: '3.9 Divide Decimals',
                                path: '3.9-divide-whole-numbers',
                                children: [
                                    {
                                        title: 'Divide Whole Numbers',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\html{How many times does 5 go into 9308?<br><br>Set up the division problem by placing the<br>dividend and the divisor in the proper places.}',
												answer: '\\css{\\divwholes{\\input{5}}{\\input{9308}}}{divwhole}',
												controls: {
													"checkAnswer": true,
													"help": false,
                                                    "workbook": true
												}
											}]
										}, {
                                            title: 'Workbook',
                                            children: [{
                                                problem: '\\str{Place the dividend and divisor in the proper places for the problem "9308 divided by 5"}',
                                                answer: '\\css{\\divwholes{\\select{5}{[5,9308]}}{\\select{9308}{[5,9308]}}}{divwhole}',
                                                controls: {
                                                    "checkAnswer": true,
                                                    "help": true
                                                }
                                            }]
										}]
									},
									{
                                        title: 'Divide Whole Numbers',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\html{Find the quotient of 3239 and 3.<br><br>Set up the division problem by placing the<br>dividend and the divisor in the proper places.}',
												answer: '\\css{\\divwholes{\\input{3}}{\\input{3239}}}{divwhole}',
												controls: {
													"checkAnswer": true,
													"help": false,
                                                    "workbook": true
												}
											}]
										}, {
                                            title: 'Workbook',
                                            children: [{
                                                problem: '\\str{Place the dividend and divisor in the proper places for the problem "3239 divided by 3"}',
                                                answer: '\\css{\\divwholes{\\select{3}{[3,3239]}}{\\select{3239}{[3,3239]}}}{divwhole}',
                                                controls: {
                                                    "checkAnswer": true,
                                                    "help": true
                                                }
                                            }]
                                        }]
									},
									{
                                        title: 'Divide Whole Numbers',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\html{Solve: x/y.<br><br>Set up the division problem by placing the<br>dividend and the divisor in the proper places.}',
												answer: '\\css{\\divwholes{\\input{y}}{\\input{x}}}{divwhole}',
												controls: {
													"checkAnswer": true,
													"help": false,
                                                    "workbook": true
												}
											}]
										}, {
                                            title: 'Workbook',
                                            children: [{
                                                problem: '\\str{Place the dividend and divisor in the proper places for the problem "x divided by y"}',
                                                answer: '\\css{\\divwholes{\\select{x}{[x,y]}}{\\select{y}{[x,y]}}}{divwhole}',
                                                controls: {
                                                    "checkAnswer": true,
                                                    "help": true
                                                }
                                            }]
                                        }]
									},
									{
                                        title: 'Divide Whole Numbers',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\html{How many times does 5 go into 7916?<br><br>Set up the division problem by placing the<br>dividend and the divisor in the proper places.}',
												answer: '\\css{\\divwholes{\\input{5}}{\\input{7916}}}{divwhole}',
												controls: {
													"checkAnswer": true,
													"help": false,
                                                    "workbook": true
												}
											}]
										}, {
                                            title: 'Workbook',
                                            children: [{
                                                problem: '\\str{Place the dividend and divisor in the proper places for the problem "7916 divided by 5"}',
                                                answer: '\\css{\\divwholes{\\select{5}{[5,7916]}}{\\select{7916}{[5,7916]}}}{divwhole}',
                                                controls: {
                                                    "checkAnswer": true,
                                                    "help": true
                                                }
                                            }]
                                        }]
									},
									{
                                        title: 'Divide Whole Numbers',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\html{How many times does 6 go into 2855?<br><br>Set up the division problem by placing the<br>dividend and the divisor in the proper places.}',
												answer: '\\css{\\divwholes{\\input{6}}{\\input{2855}}}{divwhole}',
												controls: {
													"checkAnswer": true,
													"help": false,
                                                    "workbook": true
												}
											}]
										}, {
                                            title: 'Workbook',
                                            children: [{
                                                problem: '\\str{Place the dividend and divisor in the proper places for the problem "2855 divided by 6"}',
                                                answer: '\\css{\\divwholes{\\select{6}{[6,2855]}}{\\select{2855}{[6,2855]}}}{divwhole}',
                                                controls: {
                                                    "checkAnswer": true,
                                                    "help": true
                                                }
                                            }]
                                        }]
									},
									{
                                        title: 'Divide Whole Numbers',
										children: [{
											title: 'Main Answer',
											children: [{
                                                problem: '\\html{Find the quotient of 6744 and 7.<br><br>Solve the problem.}',
												answer: '\\css{\\grp{\\input{6744}}{\\str{quotient}}{\\input{7}}{\\str{remainder}}}{divwhole}',
												controls: {
													"checkAnswer": true,
													"help": false,
                                                    "workbook": true
												}
											}]
										}, {
                                            title: 'Workbook',
                                            children: [{
                                                problem: '\\str{Place the dividend and divisor in the proper places for the problem "6744 divided by 7"}',
                                                answer: '\\css{\\divwholes{\\input{7}}{\\input{6744}}}{divwhole}',
                                                controls: {
                                                    "checkAnswer": true,
                                                    "help": true
                                                }
                                            }, {
                                                problem: '\\str{Click on the right-most digit of the number you would like to divide into.}',
                                                answer: '\\css{\\divwholes{\\str{7}}{\\butgrp{\\row{\\but{6}{F}}{\\but{7}{T}}{\\but{4}{F}}{\\but{4}{F}}}}}{divwhole}',
                                                controls: {
                                                    "checkAnswer": true,
                                                    "help": true
                                                }
                                            }, {
                                                problem: '\\str{Divide 6744 by 7}',
                                                answer: '\\longdiv{6744}{7}',
                                                controls: {
                                                    "checkAnswer": true,
                                                    "help": true
                                                }
                                            }]
										}]
									},
                                    {
                                        title: 'Divide Whole Numbers',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\html{Solve: 8306/7.<br><br>Solve the problem.}',
												answer: '\\css{\\grp{\\input{1186}}{\\str{quotient}}{\\input{4}}{\\str{remainder}}}{divwhole}',
												controls: {
													"checkAnswer": true,
													"help": false,
                                                    "workbook": true
												}
											}]
										}, {
                                            title: 'Workbook',
                                            children: [{
                                                problem: '\\str{Place the dividend and divisor in the proper places for the problem "8306 divided by 7"}',
                                                answer: '\\css{\\divwholes{\\input{7}}{\\input{8306}}}{divwhole}',
                                                controls: {
                                                    "checkAnswer": true,
                                                    "help": true
                                                }
                                            }, {
                                                problem: '\\str{Click on the right-most digit of the number you would like to divide into.}',
                                                answer: '\\css{\\divwholes{\\str{7}}{\\butgrp{\\row{\\but{8}{T}}{\\but{3}{F}}{\\but{0}{F}}{\\but{6}{F}}}}}{divwhole}',
                                                controls: {
                                                    "checkAnswer": true,
                                                    "help": true
                                                }
                                            }, {
                                                problem: '\\str{Divide 8306 by 7}',
                                                answer: '\\longdiv{8306}{7}',
                                                controls: {
                                                    "checkAnswer": true,
                                                    "help": true
                                                }
                                            }]
    									}]
									},
                                    {
                                        title: 'Divide Whole Numbers',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\html{Solve: 3027/3.<br><br>Solve the problem.}',
												answer: '\\css{\\grp{\\input{1009}}{\\str{quotient}}{\\input{0}}{\\str{remainder}}}{divwhole}',
												controls: {
													"checkAnswer": true,
													"help": false,
                                                    "workbook": true
												}
											}]
										}, {
                                            title: 'Workbook',
                                            children: [{
                                                problem: '\\str{Place the dividend and divisor in the proper places for the problem "3027 divided by 3"}',
                                                answer: '\\css{\\divwholes{\\input{3}}{\\input{3027}}}{divwhole}',
                                                controls: {
                                                    "checkAnswer": true,
                                                    "help": true
                                                }
                                            }, {
                                                problem: '\\str{Click on the right-most digit of the number you would like to divide into.}',
                                                answer: '\\css{\\divwholes{\\str{3}}{\\butgrp{\\row{\\but{3}{T}}{\\but{0}{F}}{\\but{2}{F}}{\\but{7}{F}}}}}{divwhole}',
                                                controls: {
                                                    "checkAnswer": true,
                                                    "help": true
                                                }
                                            }, {
                                                problem: '\\str{Divide 3027 by 3}',
                                                answer: '\\longdiv{3027}{3}',
                                                controls: {
                                                    "checkAnswer": true,
                                                    "help": true
                                                }
                                            }]
                                        }]
									},
                                    {
                                        title: 'Divide Whole Numbers',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\html{Find the quotient of 1828 and 6.<br><br>Solve the problem.}',
												answer: '\\css{\\grp{\\input{304}}{\\str{quotient}}{\\input{4}}{\\str{remainder}}}{divwhole}',
												controls: {
													"checkAnswer": true,
													"help": false,
                                                    "workbook": true
												}
											}]
										}, {
                                            title: 'Workbook',
                                            children: [{
                                                problem: '\\str{Place the dividend and divisor in the proper places for the problem "1828 divided by 6"}',
                                                answer: '\\css{\\divwholes{\\input{6}}{\\input{1828}}}{divwhole}',
                                                controls: {
                                                    "checkAnswer": true,
                                                    "help": true
                                                }
                                            }, {
                                                problem: '\\str{Click on the right-most digit of the number you would like to divide into.}',
                                                answer: '\\css{\\divwholes{\\str{6}}{\\butgrp{\\row{\\but{1}{F}}{\\but{8}{T}}{\\but{2}{F}}{\\but{8}{F}}}}}{divwhole}',
                                                controls: {
                                                    "checkAnswer": true,
                                                    "help": true
                                                }
                                            }, {
                                                problem: '\\str{Divide 1828 by 6}',
                                                answer: '\\longdiv{1828}{6}',
                                                controls: {
                                                    "checkAnswer": true,
                                                    "help": true
                                                }
                                            }]
                                        }]
									},
                                    {
                                        title: 'Divide Whole Numbers',//////////10
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\html{How many times does 3 go into 9381?<br><br>Solve the problem.}',
												answer: '\\css{\\grp{\\input{3127}}{\\str{quotient}}{\\input{0}}{\\str{remainder}}}{divwhole}',
												controls: {
													"checkAnswer": true,
													"help": false,
                                                    "workbook": true
												}
											}]
										}]
									},
                                    {
                                        title: 'Divide Whole Numbers',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\html{How many times does 23 go into 18300?<br><br>Solve the problem.}',
												answer: '\\css{\\grp{\\input{795}}{\\str{quotient}}{\\input{15}}{\\str{remainder}}}{divwhole}',
												controls: {
													"checkAnswer": true,
													"help": false,
                                                    "workbook": true
												}
											}]
										}]
									},
                                    {
                                        title: 'Divide Whole Numbers',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\html{Solve: 8293/52.<br><br>Solve the problem.}',
												answer: '\\css{\\grp{\\input{159}}{\\str{quotient}}{\\input{25}}{\\str{remainder}}}{divwhole}',
												controls: {
													"checkAnswer": true,
													"help": false,
                                                    "workbook": true
												}
											}]
										}]
									},
                                    {
                                        title: 'Divide Whole Numbers',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\html{Find the quotient of 2110 and 69.<br><br>Solve the problem.}',
												answer: '\\css{\\grp{\\input{30}}{\\str{quotient}}{\\input{40}}{\\str{remainder}}}{divwhole}',
												controls: {
													"checkAnswer": true,
													"help": false,
                                                    "workbook": true
												}
											}]
										}]
									},
                                    {
                                        title: 'Divide Whole Numbers',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\html{How many times does 72 go into 63052?<br><br>Solve the problem.}',
												answer: '\\css{\\grp{\\input{875}}{\\str{quotient}}{\\input{52}}{\\str{remainder}}}{divwhole}',
												controls: {
													"checkAnswer": true,
													"help": false,
                                                    "workbook": true
												}
											}]
										}]
									},
                                    {
                                        title: 'Divide Whole Numbers',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\html{Solve: 82292/905.<br><br>Solve the problem.}',
												answer: '\\css{\\grp{\\input{90}}{\\str{quotient}}{\\input{842}}{\\str{remainder}}}{divwhole}',
												controls: {
													"checkAnswer": true,
													"help": false,
                                                    "workbook": true
												}
											}]
										}]
									},
                                ]
                            }
						]
                    }, {
                        title: '4 Ratios & Proportions',
                        path: 'ratios-proportions',
                        children: [
                            {
                                title: '16.4 Proportion Application Problems',
                                path: '16.4-proportion-application-problems',
                                children: [
                                    {
                                        title: 'Proportion Application Problems',
            							children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\html{In a park, there are five oak trees to every three elm trees.<br><br><span class=blue-text>If there are 20 Oak trees, how many elm trees are there?</span>}',
												answer: '\\input{12}',
												controls: {
													"checkAnswer": true,
													"help": false,
                                                    "workbook": true
												}
											}]
										}, {
                                            title: 'Workbook',
                                            children: [{
                                                problem: '\\html{In a park, there are five oak trees to every three elm trees.<br><br><span class=blue-text>If there are 20 Oak trees, how many elm trees are there?</span>}',
                                                answer: '\\ins{\\frac{\\select{[\"oak trees\",\"elm trees\"]}{[\"oak trees\",\"elm trees\",\"parks\"]}}{\\select{[\"elm trees\",\"oak trees\"]}{[\"oak trees\",\"elm trees\",\"parks\"]}}}{Identify the two items (lables) that are in relationship with each other?}',
                                                controls: {
                                                    "checkAnswer": true,
                                                    "help": true
                                                }
                                            }, {
                                                problem: '\\html{In a park, there are five oak trees to every three elm trees.<br><br><span class=blue-text>If there are 20 Oak trees, how many elm trees are there?</span>}',
                                                answer: '\\ins{\\flip{\\frac{\\grp{\\input{5}}{\\str{ oak trees}}}{\\grp{\\input{3}}{\\str{ elm trees}}}}{[1]}}{[\"No, the given relationship is between @oak trees# and @elm trees#. Now what number of @oak trees# and what number of @elm trees# are provided in the given relationship?\",\"Good. Now what number of @oak trees# and what number of @elm trees# are provided in the given relationship?\"]}',
                                                controls: {
                                                    "checkAnswer": true,
                                                    "help": true
                                                }
                                            }, {
                                                problem: '\\html{In a park, there are five oak trees to every three elm trees.<br><br><span class=blue-text>If there are 20 Oak trees, how many elm trees are there?</span>}',
                                                answer: '\\ins{\\grp{\\flip{\\frac{\\grp{\\str{5}}{\\str{ oak trees}}}{\\grp{\\str{3}}{\\str{ elm trees}}}}{[1]}}{\\str{=}}{\\flip{\\frac{\\grp{\\input{20}}{\\select{oak trees}{[\"oak trees\",\"elm trees\",\"parks\"]}}}{\\grp{\\input{x}}{\\select{elm trees}{[\"oak trees\",\"elm trees\",\"parks\"]}}}}{[1]}}}{[\"We are told that there are @5 oak trees# to every @3 elm trees#. The given relationship is:\",\"Yes, now make this first relationship between @oak trees# and @elm trees# equal to a second relationship (use \\"X\\" for an unknown value).\"]}{[\"Now make this first relationship between @oak trees# and @elm trees# equal to a second relationship (use \\"X\\" for an unknown value).\",\"false\"]}',
                                                controls: {
                                                    "checkAnswer": true,
                                                    "help": true
                                                }
                                            }, {
                                                problem: '\\html{In a park, there are five oak trees to every three elm trees.<br><br><span class=blue-text>If there are 20 Oak trees, how many elm trees are there?</span>}',
                                                answer: '\\rowgrp{\\ins{\\grp{\\flip{\\frac{\\grp{\\str{5}}{\\str{ oak trees}}}{\\grp{\\str{3}}{\\str{ elm trees}}}}{[1]}}{\\str{=}}{\\flip{\\frac{\\grp{\\str{20}}{\\str{oak trees}}}{\\grp{\\str{x}}{\\str{elm trees}}}}{[1]}}}{[\"The second relationship is an \\"unknown number\\" (shown here as \\"X\\") of elm trees to every 20 oak trees. You now have a proportion:\",\"Great! You now have a proportion. Solve the proportion problem.\"]}{[\"Now solve the proportion problem.\",\"false\"]}}{\\css{\\row{\\html{X\xA0 = \xA0}}{\\input{12}}}{proportion-application}}',
                                                controls: {
                                                    "checkAnswer": true,
                                                    "help": true
                                                }
                                            }, {
                                                problem: '\\html{In a park, there are five oak trees to every three elm trees.<br><br><span class=blue-text>If there are 20 Oak trees, how many elm trees are there?</span>}',
                                                answer: '\\ins{\\grp{\\flip{\\frac{\\grp{\\str{5}}{\\str{ oak trees}}}{\\grp{\\str{3}}{\\str{ elm trees}}}}{[1]}}{\\str{=}}{\\flip{\\frac{\\grp{\\str{20}}{\\str{oak trees}}}{\\grp{\\str{12}}{\\str{elm trees}}}}{[1]}}}{[\"The correct solution is:\",\"Congratulations!\"]}',
                                                controls: {
                                                    "checkAnswer": true,
                                                    "help": true
                                                }    
                                            }]
										}]
									},{
                                        title: 'Proportion Application Problems',
        								children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\html{In a park, there are five oak trees to every three elm trees.<br><br><span class=blue-text>If there are thirty elm trees in a park, how many oak trees are there?</span>}',
												answer: '\\input{50}',
												controls: {
													"checkAnswer": true,
													"help": false,
                                                    "workbook": true
												}
											}]
										}, {
                                            title: 'Workbook',
                                            children: [{
                                                problem: '\\html{In a park, there are five oak trees to every three elm trees.<br><br><span class=blue-text>If there are thirty elm trees in a park, how many oak trees are there?</span>}',
                                                answer: '\\ins{\\frac{\\select{[\"oak trees\",\"elm trees\"]}{[\"oak trees\",\"elm trees\",\"parks\"]}}{\\select{[\"elm trees\",\"oak trees\"]}{[\"oak trees\",\"elm trees\",\"parks\"]}}}{Identify the two items (lables) that are in relationship with each other?}',
                                                controls: {
                                                    "checkAnswer": true,
                                                    "help": true
                                                }
                                            }, {
                                                problem: '\\html{In a park, there are five oak trees to every three elm trees.<br><br><span class=blue-text>If there are thirty elm trees in a park, how many oak trees are there?</span>}',
                                                answer: '\\ins{\\flip{\\frac{\\grp{\\input{5}}{\\str{ oak trees}}}{\\grp{\\input{3}}{\\str{ elm trees}}}}{[1]}}{[\"No, the given relationship is between @oak trees# and @elm trees#. Now what number of @oak trees# and what number of @elm trees# are provided in the given relationship?\",\"Good. Now what number of @oak trees# and what number of @elm trees# are provided in the given relationship?\"]}',
                                                controls: {
                                                    "checkAnswer": true,
                                                    "help": true
                                                }
                                            }, {
                                                problem: '\\html{In a park, there are five oak trees to every three elm trees.<br><br><span class=blue-text>If there are thirty elm trees in a park, how many oak trees are there?</span>}',
                                                answer: '\\ins{\\grp{\\flip{\\frac{\\grp{\\str{5}}{\\str{ oak trees}}}{\\grp{\\str{3}}{\\str{ elm trees}}}}{[1]}}{\\str{=}}{\\flip{\\frac{\\grp{\\input{x}}{\\select{oak trees}{[\"oak trees\",\"elm trees\",\"parks\"]}}}{\\grp{\\input{30}}{\\select{elm trees}{[\"oak trees\",\"elm trees\",\"parks\"]}}}}{[1]}}}{[\"We are told that there are @5 oak trees# to every @3 elm trees#. The given relationship is:\",\"Yes, now make this first relationship between @oak trees# and @elm trees# equal to a second relationship (use \\"X\\" for an unknown value).\"]}{[\"Now make this first relationship between @oak trees# and @elm trees# equal to a second relationship (use \\"X\\" for an unknown value).\",\"false\"]}',
                                                controls: {
                                                    "checkAnswer": true,
                                                    "help": true
                                                }
                                            }, {
                                                problem: '\\html{In a park, there are five oak trees to every three elm trees.<br><br><span class=blue-text>If there are thirty elm trees in a park, how many oak trees are there?</span>}',
                                                answer: '\\ins{\\grp{\\flip{\\frac{\\grp{\\str{5}}{\\str{ oak trees}}}{\\grp{\\str{3}}{\\str{ elm trees}}}}{[1]}}{\\str{=}}{\\flip{\\frac{\\grp{\\input{50}}{\\str{oak trees}}}{\\grp{\\str{30}}{\\str{elm trees}}}}{[1]}}}{[\"The second relationship is an \\"unknown number\\" (shown here as \\"X\\") of oak trees to every 30 elm trees. You now have a proportion:\",\"Great! You now have a proportion. Solve the proportion problem.\"]}{[\"Now solve the proportion problem.\",\"false\"]}',
                                                controls: {
                                                    "checkAnswer": true,
                                                    "help": true
                                                }
                                            }]
										}]
									},
                                ]
                            }//--------------------
                        ]
                    }, {
                        title: '5 Percents',
                        path: 'percents',
                        children: [
							{
									title: '18.1 Decimal & Fraction Form of Percents',
									path: '18.1-decimal-fraction-form-percents',
									children: [
										{
											title: 'Decimal & Fraction Form of Percents',
											children: [{
												title: 'Main Answer',
												children: [{
													problem: '\\rowgrp{\\row{\\str{Write the equivalent fractional value (reduced to lowest terms) of this decimal:}}}{\\row{\\str{4.8}}}',
													answer: '\\mixed{\\input{4}}{\\frac{\\input{4}}{\\input{5}}}',
													controls: {
														"checkAnswer": true,
														"help": '\\rowgrp{\\row{\\str{Write the decimal place value as the denominator of the fraction.}}}{\\row{\\percentsdecimalfrac{\\str{4.8}}{decimalNotPercent}{percentAsFraction}}{css{\\str{Answer: \xA0 \xA0}}{help-answer-text}}{css{\\mixed{\\str{4}}{\\frac{\\fracstr{4}}{\\fracstr{5}}}}{help-answer-text-tight}}'
													} 
												}]
											}]
										},
										{
											title: 'Decimal & Fraction Form of Percents',
											children: [{
												title: 'Main Answer',
												children: [{
													problem: '\\rowgrp{\\row{\\str{Write the equivalent fractional value (reduced to lowest terms) of this decimal:}}}{\\row{\\str{0.125}}}',
													answer: '\\frac{\\input{1}}{\\input{8}}',
													controls: {
														"checkAnswer": true,
														"help": '\\rowgrp{\\row{\\str{Write the decimal place value as the denominator of the fraction.}}}{\\row{\\percentsdecimalfrac{\\str{0.125}}{decimalNotPercent}{percentAsFraction}}{css{\\str{Answer: \xA0 \xA0}}{help-answer-text}}{css{\\frac{\\fracstr{1}}{\\fracstr{8}}}{help-answer-text-tight}}'
													} 
												}]
											}]
										},
										{
											title: 'Decimal & Fraction Form of Percents',
											children: [{
												title: 'Main Answer',
												children: [{
													problem: '\\rowgrp{\\row{\\str{Write the equivalent fractional value (reduced to lowest terms) of this decimal:}}}{\\row{\\str{3.2}}}',
													answer: '\\mixed{\\input{3}}{\\frac{\\input{1}}{\\input{5}}}',
													controls: {
														"checkAnswer": true,
														"help": '\\rowgrp{\\row{\\str{Write the decimal place value as the denominator of the fraction.}}}{\\row{\\percentsdecimalfrac{\\str{3.2}}{decimalNotPercent}{percentAsFraction}}{css{\\str{Answer: \xA0 \xA0}}{help-answer-text}}{css{\\mixed{\\str{3}}{\\frac{\\fracstr{1}}{\\fracstr{5}}}}{help-answer-text-tight}}'
													} 
												}]
											}]
										},
										{
											title: 'Decimal & Fraction Form of Percents',
											children: [{
												title: 'Main Answer',
												children: [{
													problem: '\\rowgrp{\\row{\\str{Write the equivalent fractional value (reduced to lowest terms) of this decimal:}}}{\\row{\\str{0.5}}}',
													answer: '\\frac{\\input{1}}{\\input{2}}',
													controls: {
														"checkAnswer": true,
														"help": '\\rowgrp{\\row{\\str{Write the decimal place value as the denominator of the fraction.}}}{\\row{\\percentsdecimalfrac{\\str{0.5}}{decimalNotPercent}{percentAsFraction}}{css{\\str{Answer: \xA0 \xA0}}{help-answer-text}}{css{\\frac{\\fracstr{1}}{\\fracstr{2}}}{help-answer-text-tight}}'
													} 
												}]
											}]
										},
										{
											title: 'Decimal & Fraction Form of Percents',
											children: [{
												title: 'Main Answer',
												children: [{
													problem: '\\rowgrp{\\row{\\str{Write the equivalent fractional value (reduced to lowest terms) of this decimal:}}}{\\row{\\str{0.75}}}',
													answer: '\\frac{\\input{3}}{\\input{4}}',
													controls: {
														"checkAnswer": true,
														"help": '\\rowgrp{\\row{\\str{Write the decimal place value as the denominator of the fraction.}}}{\\row{\\percentsdecimalfrac{\\str{0.75}}{decimalNotPercent}{percentAsFraction}}{css{\\str{Answer: \xA0 \xA0}}{help-answer-text}}{css{\\frac{\\fracstr{3}}{\\fracstr{4}}}{help-answer-text-tight}}'
													} 
												}]
											}]
										},
										{
											title: 'Decimal & Fraction Form of Percents',
											children: [{
												title: 'Main Answer',
												children: [{
													problem: '\\rowgrp{\\row{\\str{Write the equivalent decimal value of this fraction:}}}{\\row{\\frac{\\str{7}}{\\str{8}}}}',
													answer: '\\input{0.875}',
													controls: {
														"checkAnswer": true,
														"help": '\\rowgrp{\\row{\\str{Divide the numerator of the fraction by the denominator.}}}{\\row{css{\\str{Answer: \xA0 \xA0}}{help-answer-text}}{css{\\percentsdecimalfrac{\\frac{\\str{7}}{\\str{8}}}{percentAsFraction}{decimalNotPercent}}{help-answer-text-tight}}}'
													} 
												}]
											}]
										},
										{
											title: 'Decimal & Fraction Form of Percents',
											children: [{
												title: 'Main Answer',
												children: [{
													problem: '\\rowgrp{\\row{\\str{Write the equivalent decimal value of this fraction:}}}{\\row{\\mixed{\\str{3}}{\\frac{\\str{2}}{\\str{5}}}}}',
													answer: '\\input{3.4}',
													controls: {
														"checkAnswer": true,
														"help": '\\rowgrp{\\row{\\str{Divide the numerator of the fraction by the denominator.}}}{\\row{css{\\str{Answer: \xA0 \xA0}}{help-answer-text}}{css{\\percentsdecimalfrac{\\mixed{\\str{3}}{\\frac{\\str{2}}{\\str{5}}}}{percentAsFraction}{decimalNotPercent}}{help-answer-text-tight}}}'
													} 
												}]
											}]
										},
										{
											title: 'Decimal & Fraction Form of Percents',
											children: [{
												title: 'Main Answer',
												children: [{
													problem: '\\rowgrp{\\row{\\str{Write the equivalent decimal value of this fraction:}}}{\\row{\\frac{\\str{1}}{\\str{10}}}}',
													answer: '\\input{0.1}',
													controls: {
														"checkAnswer": true,
														"help": '\\rowgrp{\\row{\\str{Divide the numerator of the fraction by the denominator.}}}{\\row{css{\\str{Answer: \xA0 \xA0}}{help-answer-text}}{css{\\percentsdecimalfrac{\\frac{\\str{1}}{\\str{10}}}{percentAsFraction}{decimalNotPercent}}{help-answer-text-tight}}}'
													} 
												}]
											}]
										},
										{
											title: 'Decimal & Fraction Form of Percents',
											children: [{
												title: 'Main Answer',
												children: [{
													problem: '\\rowgrp{\\row{\\str{Write the equivalent decimal value of this fraction:}}}{\\row{\\mixed{\\str{1}}{\\frac{\\str{3}}{\\str{8}}}}}',
													answer: '\\input{1.375}',
													controls: {
														"checkAnswer": true,
														"help": '\\rowgrp{\\row{\\str{Divide the numerator of the fraction by the denominator.}}}{\\row{css{\\str{Answer: \xA0 \xA0}}{help-answer-text}}{css{\\percentsdecimalfrac{\\mixed{\\str{1}}{\\frac{\\str{3}}{\\str{8}}}}{percentAsFraction}{decimalNotPercent}}{help-answer-text-tight}}}'
													} 
												}]
											}]
										},
										{
											title: 'Decimal & Fraction Form of Percents',
											children: [{
												title: 'Main Answer',
												children: [{
													problem: '\\rowgrp{\\row{\\str{Write the equivalent decimal value of this fraction:}}}{\\row{\\frac{\\str{1}}{\\str{4}}}}',
													answer: '\\input{0.25}',
													controls: {
														"checkAnswer": true,
														"help": '\\rowgrp{\\row{\\str{Divide the numerator of the fraction by the denominator.}}}{\\row{css{\\str{Answer: \xA0 \xA0}}{help-answer-text}}{css{\\percentsdecimalfrac{\\frac{\\str{1}}{\\str{4}}}{percentAsFraction}{decimalNotPercent}}{help-answer-text-tight}}}'
													} 
												}]
											}]
										},
										{
											title: 'Decimal & Fraction Form of Percents',
											children: [{
												title: 'Main Answer',
												children: [{
													problem: '\\rowgrp{\\row{\\str{Express the decimal percent as a fractional percent:}}}{\\row{\\str{0.875%}}}',
													answer: '\\row{\\frac{\\input{7}}{\\input{8}}}{\\str{%}}',
													controls: {
														"checkAnswer": true,
														"help": '\\rowgrp{\\row{\\str{Write the decimal place value as the denominator of the fraction.}}}{\\row{\\percentsdecimalfrac{\\str{0.875}}{decimalNotPercent}{percentAsFraction}}{css{\\str{Answer: \xA0 \xA0}}{help-answer-text}}{css{\\frac{\\fracstr{7}}{\\fracstr{8}}}{help-answer-text-tight}}{css{\\str{%}}{help-answer-text-tight}}'
													} 
												}]
											}]
										},
										{
											title: 'Decimal & Fraction Form of Percents',
											children: [{
												title: 'Main Answer',
												children: [{
													problem: '\\rowgrp{\\row{\\str{Express the decimal percent as a fractional percent:}}}{\\row{\\str{0.75%}}}',
													answer: '\\row{\\frac{\\input{3}}{\\input{4}}}{\\str{%}}',
													controls: {
														"checkAnswer": true,
														"help": '\\rowgrp{\\row{\\str{Write the decimal place value as the denominator of the fraction.}}}{\\row{\\percentsdecimalfrac{\\str{0.75}}{decimalNotPercent}{percentAsFraction}}{css{\\str{Answer: \xA0 \xA0}}{help-answer-text}}{css{\\frac{\\fracstr{3}}{\\fracstr{4}}}{help-answer-text-tight}}{css{\\str{%}}{help-answer-text-tight}}'
													} 
												}]
											}]
										},
										{
											title: 'Decimal & Fraction Form of Percents',
											children: [{
												title: 'Main Answer',
												children: [{
													problem: '\\rowgrp{\\row{\\str{Express the decimal percent as a fractional percent:}}}{\\row{\\str{0.875%}}}',
													answer: '\\row{\\frac{\\input{7}}{\\input{8}}}{\\str{%}}',
													controls: {
														"checkAnswer": true,
														"help": '\\rowgrp{\\row{\\str{Write the decimal place value as the denominator of the fraction.}}}{\\row{\\percentsdecimalfrac{\\str{0.875}}{decimalNotPercent}{percentAsFraction}}{css{\\str{Answer: \xA0 \xA0}}{help-answer-text}}{css{\\frac{\\fracstr{7}}{\\fracstr{8}}}{help-answer-text-tight}}{css{\\str{%}}{help-answer-text-tight}}'
													} 
												}]
											}]
										},
										{
											title: 'Decimal & Fraction Form of Percents',
											children: [{
												title: 'Main Answer',
												children: [{
													problem: '\\rowgrp{\\row{\\str{Express the fractional precent as a decimal percent:}}}{\\row{\\mixed{\\str{1}}{\\frac{\\str{3}}{\\str{8}}}}{\\str{%}}}',
													answer: '\\row{\\input{1.375}}{\\str{%}}',
													controls: {
														"checkAnswer": true,
														"help": '\\rowgrp{\\row{\\str{Divide the numerator of the fraction by the denominator.}}}{\\row{css{\\str{Answer: \xA0 \xA0}}{help-answer-text}}{css{\\percentsdecimalfrac{\\mixed{\\str{1}}{\\frac{\\str{3}}{\\str{8}}}}{percentAsFraction}{decimalNotPercent}}{help-answer-text-tight}}{css{\\str{%}}{help-answer-text-tight}}}}'
													} 
												}]
											}]
										},
										{
											title: 'Decimal & Fraction Form of Percents',
											children: [{
												title: 'Main Answer',
												children: [{
													problem: '\\rowgrp{\\row{\\str{Express the fractional precent as a decimal percent:}}}{\\row{\\frac{\\str{9}}{\\str{10}}}{\\str{%}}}',
													answer: '\\row{\\input{0.9}}{\\str{%}}',
													controls: {
														"checkAnswer": true,
														"help": '\\rowgrp{\\row{\\str{Divide the numerator of the fraction by the denominator.}}}{\\row{css{\\str{Answer: \xA0 \xA0}}{help-answer-text}}{css{\\percentsdecimalfrac{\\frac{\\str{9}}{\\str{10}}}{percentAsFraction}{decimalNotPercent}}{help-answer-text-tight}}{css{\\str{%}}{help-answer-text-tight}}}}'
													}
											}]
										}]
									}]
                            }, {
                                title: '18.2 Change a Decimal to a Percent',
                                path: '18.2-change-a-decimal-to-a-percent',
                                children: [
                                    {
										title: 'Change a Decimal to a Percent',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\rowgrp{\\row{\\str{Change this decimal into a percent:}}}{\\row{\\str{\xA0}}}{\\row{\\str{8.41}}}',
												answer: '\\row{\\input{841}}{\\str{%}}',
												controls: {
													"checkAnswer": true,
													"help": '\\rowgrp{\\row{\\percentarrows{8.41}{100}{decimal}{percent}}{\\css{\\str{Answer:  841%}}{help-answer-text help-answer-margin-right}}}'
												}
											}]
										}]
									},
									{
										title: 'Change a Decimal to a Percent',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\rowgrp{\\row{\\str{Change this decimal into a percent:}}}{\\row{\\str{\xA0}}}{\\row{\\str{0.6}}}',
												answer: '\\row{\\input{60}}{\\str{%}}',
												controls: {
													"checkAnswer": true,
													"help": '\\rowgrp{\\row{\\percentarrows{0.6}{100}{decimal}{percent}}{\\css{\\str{Answer:  60%}}{help-answer-text help-answer-margin-right}}}'
												}
											}]
										}]
									},
									{
										title: 'Change a Decimal to a Percent',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\rowgrp{\\row{\\str{Change this decimal into a percent:}}}{\\row{\\str{\xA0}}}{\\row{\\str{0.66}}}',
												answer: '\\row{\\input{66}}{\\str{%}}',
												controls: {
													"checkAnswer": true,
													"help": '\\rowgrp{\\row{\\percentarrows{0.66}{100}{decimal}{percent}}{\\css{\\str{Answer:  66%}}{help-answer-text help-answer-margin-right}}}'
												}
											}]
										}]
									},
									{
										title: 'Change a Decimal to a Percent',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\rowgrp{\\row{\\str{Change this decimal into a percent:}}}{\\row{\\str{\xA0}}}{\\row{\\str{0.54}}}',
												answer: '\\row{\\input{54}}{\\str{%}}',
												controls: {
													"checkAnswer": true,
													"help": '\\rowgrp{\\row{\\percentarrows{0.54}{100}{decimal}{percent}}{\\css{\\str{Answer:  54%}}{help-answer-text help-answer-margin-right}}}'
												}
											}]
										}]
									},
									{
										title: 'Change a Decimal to a Percent',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\rowgrp{\\row{\\str{Change this decimal into a percent:}}}{\\row{\\str{\xA0}}}{\\row{\\str{7.4}}}',
												answer: '\\row{\\input{740}}{\\str{%}}',
												controls: {
													"checkAnswer": true,
													"help": '\\rowgrp{\\row{\\percentarrows{7.4}{100}{decimal}{percent}}{\\css{\\str{Answer:  740%}}{help-answer-text help-answer-margin-right}}}'
												}
											}]
										}]
									},
									{
										title: 'Change a Decimal to a Percent',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\rowgrp{\\row{\\str{Change this decimal into a percent:}}}{\\row{\\str{\xA0}}}{\\row{\\str{0.7758}}}',
												answer: '\\row{\\input{77.58}}{\\str{%}}',
												controls: {
													"checkAnswer": true,
													"help": '\\rowgrp{\\row{\\percentarrows{0.7758}{100}{decimal}{percent}}{\\css{\\str{Answer:  77.58%}}{help-answer-text help-answer-margin-right}}}'
												}
											}]
										}]
									},
									{
										title: 'Change a Decimal to a Percent',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\rowgrp{\\row{\\str{Change this decimal into a percent:}}}{\\row{\\str{\xA0}}}{\\row{\\str{0.463}}}',
												answer: '\\row{\\input{46.3}}{\\str{%}}',
												controls: {
													"checkAnswer": true,
													"help": '\\rowgrp{\\row{\\percentarrows{0.463}{100}{decimal}{percent}}{\\css{\\str{Answer:  46.3%}}{help-answer-text help-answer-margin-right}}}'
												}
											}]
										}]
									},
									{
										title: 'Change a Decimal to a Percent',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\rowgrp{\\row{\\str{Change this decimal into a percent:}}}{\\row{\\str{\xA0}}}{\\row{\\str{0.8769}}}',
												answer: '\\row{\\input{87.69}}{\\str{%}}',
												controls: {
													"checkAnswer": true,
													"help": '\\rowgrp{\\row{\\percentarrows{0.8769}{100}{decimal}{percent}}{\\css{\\str{Answer:  87.69%}}{help-answer-text help-answer-margin-right}}}'
												}
											}]
										}]
									},
									{
										title: 'Change a Decimal to a Percent',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\rowgrp{\\row{\\str{Change this decimal into a percent:}}}{\\row{\\str{\xA0}}}{\\row{\\str{1.432}}}',
												answer: '\\row{\\input{143.2}}{\\str{%}}',
												controls: {
													"checkAnswer": true,
													"help": '\\rowgrp{\\row{\\percentarrows{1.432}{100}{decimal}{percent}}{\\css{\\str{Answer:  143.2%}}{help-answer-text help-answer-margin-right}}}'
												}
											}]
										}]
									},
									{
										title: 'Change a Decimal to a Percent',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\rowgrp{\\row{\\str{Change this decimal into a percent:}}}{\\row{\\str{\xA0}}}{\\row{\\str{0.5}}}',
												answer: '\\row{\\input{50}}{\\str{%}}',
												controls: {
													"checkAnswer": true,
													"help": '\\rowgrp{\\row{\\percentarrows{0.5}{100}{decimal}{percent}}{\\css{\\str{Answer:  50%}}{help-answer-text help-answer-margin-right}}}'
												}
                                            }]
                                        }]
                                    }
                                ]					
							}, {
                                title: '18.3 Change a Percent to a Decimal',
                                path: '18.3-change-a-percent-to-a-decimal',
                                children: [
                                    {
										title: 'Change a Percent to a Decimal',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\rowgrp{\\row{\\str{Change this percent to a decimal:}}}{\\row{\\str{\xA0}}}{\\row{\\str{9}}{\\str{%}}',
												answer: '\\row{\\input{0.09}}',
												controls: {
													"checkAnswer": true,
													"help": '\\rowgrp{\\row{\\percentarrows{9}{0.01}{percent}{decimal}}{\\css{\\str{Answer:  0.09}}{help-answer-text help-answer-margin-right}}}'
												}
											}]
										}]
									},
									{
										title: 'Change a Percent to a Decimal',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\rowgrp{\\row{\\str{Change this percent to a decimal:}}}{\\row{\\str{\xA0}}}{\\row{\\str{327}}{\\str{%}}',
												answer: '\\row{\\input{3.27}}',
												controls: {
													"checkAnswer": true,
													"help": '\\rowgrp{\\row{\\percentarrows{327}{0.01}{percent}{decimal}}{\\css{\\str{Answer:  3.27}}{help-answer-text help-answer-margin-right}}}'
												}
											}]
										}]
									},
									{
										title: 'Change a Percent to a Decimal',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\rowgrp{\\row{\\str{Change this percent to a decimal:}}}{\\row{\\str{\xA0}}}{\\row{\\str{85}}{\\str{%}}',
												answer: '\\row{\\input{0.85}}',
												controls: {
													"checkAnswer": true,
													"help": '\\rowgrp{\\row{\\percentarrows{85}{0.01}{percent}{decimal}}{\\css{\\str{Answer:  0.85}}{help-answer-text help-answer-margin-right}}}'
												}
											}]
										}]
									},
									{
										title: 'Change a Percent to a Decimal',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\rowgrp{\\row{\\str{Change this percent to a decimal:}}}{\\row{\\str{\xA0}}}{\\row{\\str{55.6}}{\\str{%}}',
												answer: '\\row{\\input{0.556}}',
												controls: {
													"checkAnswer": true,
													"help": '\\rowgrp{\\row{\\percentarrows{55.6}{0.01}{percent}{decimal}}{\\css{\\str{Answer:  0.556}}{help-answer-text help-answer-margin-right}}}'
												}
											}]
										}]
									},
									{
										title: 'Change a Percent to a Decimal',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\rowgrp{\\row{\\str{Change this percent to a decimal:}}}{\\row{\\str{\xA0}}}{\\row{\\str{67.85}}{\\str{%}}',
												answer: '\\row{\\input{0.6785}}',
												controls: {
													"checkAnswer": true,
													"help": '\\rowgrp{\\row{\\percentarrows{67.85}{0.01}{percent}{decimal}}{\\css{\\str{Answer:  .6785}}{help-answer-text help-answer-margin-right}}}'
												}
											}]
										}]
									},
									{
										title: 'Change a Percent to a Decimal',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\rowgrp{\\row{\\str{Change this fraction percent to a decimal percent:}}}{\\row{\\str{\xA0}}}{\\row{\\frac{\\str{5}}{\\str{7}}}{\\str{%}}}{\\row{\\str{\xA0}}}{\\row{\\str{Round the decimal percent to the hundredths place.}}}',
												answer: '\\row{\\input{0.71}}{\\str{%}}',
												controls: {
													"checkAnswer": true,
													"help": '\\rowgrp{\\row{\\frac{\\str{5}}{\\str{7}}}{\\str{%}}{\\sign{=}}{\\str{0.71%}}{\\css{\\str{Answer:  0.71%}}{help-answer-text help-answer-margin-right}}}'
												}
											}]
										}]
									},
									{
										title: 'Change a Percent to a Decimal',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\rowgrp{\\row{\\str{Change this fraction percent to a decimal percent:}}}{\\row{\\str{\xA0}}}{\\row{\\frac{\\str{4}}{\\str{5}}}{\\str{%}}}',
												answer: '\\row{\\input{0.8}}{\\str{%}}',
												controls: {
													"checkAnswer": true,
													"help": '\\rowgrp{\\row{\\frac{\\str{4}}{\\str{5}}}{\\str{%}}{\\sign{=}}{\\str{0.8%}}{\\css{\\str{Answer:  0.8%}}{help-answer-text help-answer-margin-right}}}'
												}
											}]
										}]
									},
									{
										title: 'Change a Percent to a Decimal',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\rowgrp{\\row{\\str{Change this fraction percent to a decimal percent:}}}{\\row{\\str{\xA0}}}{\\row{\\frac{\\str{2}}{\\str{3}}}{\\str{%}}}{\\row{\\str{\xA0}}}{\\row{\\str{Round the decimal percent to the hundredths place.}}}',
												answer: '\\row{\\input{0.67}}{\\str{%}}',
												controls: {
													"checkAnswer": true,
													"help": '\\rowgrp{\\row{\\frac{\\str{2}}{\\str{3}}}{\\str{%}}{\\sign{=}}{\\str{0.67%}}{\\css{\\str{Answer:  0.67%}}{help-answer-text help-answer-margin-right}}}'
												}
											}]
										}]
									},
									{
										title: 'Change a Percent to a Decimal',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\rowgrp{\\row{\\str{Change this fraction percent to a decimal percent:}}}{\\row{\\str{\xA0}}}{\\row{\\mixed{\\str{1}}{\\frac{\\fracstr{1}}{\\fracstr{4}}}}{\\str{%}}}',
												answer: '\\row{\\input{1.25}}{\\str{%}}',
												controls: {
													"checkAnswer": true,
													"help": '\\rowgrp{\\row{\\mixed{\\str{1}}{\\frac{\\fracstr{1}}{\\fracstr{4}}}}{\\str{%}}{\\sign{=}}{\\str{1.25%}}{\\css{\\str{Answer:  1.25%}}{help-answer-text help-answer-margin-right}}}'
												}
											}]
										}]
									},
									{
										title: 'Change a Percent to a Decimal',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\rowgrp{\\row{\\str{Change this fraction percent to a decimal percent:}}}{\\row{\\str{\xA0}}}{\\row{\\mixed{\\str{1}}{\\frac{\\fracstr{1}}{\\fracstr{12}}}}{\\str{%}}}{\\row{\\str{\xA0}}}{\\row{\\str{Round the decimal percent to the hundredths place.}}}',
												answer: '\\row{\\input{1.08}}{\\str{%}}',
												controls: {
													"checkAnswer": true,
													"help": '\\rowgrp{\\row{\\mixed{\\str{1}}{\\frac{\\fracstr{1}}{\\fracstr{12}}}}{\\str{%}}{\\sign{=}}{\\str{1.08%}}{\\css{\\str{Answer:  1.08%}}{help-answer-text help-answer-margin-right}}}'
												}
                                            }]
                                        }]
                                    }]					
							}, {
                                title: '19.1 Change a Fraction to a Percent (directly)',
                                path: '19.1-change-a-percent-to-a-decimal',
                                children: [
                                    									{
										title: 'Change a Fraction to a Percent (directly)',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\rowgrp{\\row{\\str{Change the fraction to a percent (directly):}}}{\\row{\\str{\xA0}}}{\\row{\\frac{\\str{4}}{\\str{5}}}',
												answer: '\\row{\\input{80}}{\\str{%}}',
												controls: {
													"checkAnswer": true,
													"help": '\\rowgrp{\\row{\\frac{\\str{4}}{\\str{5}}}{\\html{<span>&nbsp; &times; &nbsp;</span>}}{\\str{ 100 }}{\\sign{\xA0 = \xA0}}{\\str{80%}}{\\css{\\str{Answer:  80%}}{help-answer-text help-answer-margin-right}}}'
												}
											}]
										}]
									},
									{
										title: 'Change a Fraction to a Percent (directly)',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\rowgrp{\\row{\\str{Change the fraction to a percent (directly):}}}{\\row{\\str{\xA0}}}{\\row{\\frac{\\str{1}}{\\str{10}}}',
												answer: '\\row{\\input{10}}{\\str{%}}',
												controls: {
													"checkAnswer": true,
													"help": '\\rowgrp{\\row{\\frac{\\str{1}}{\\str{10}}}{\\html{<span>&nbsp; &times; &nbsp;</span>}}{\\str{ 100 }}{\\sign{\xA0 = \xA0}}{\\str{10%}}{\\css{\\str{Answer:  10%}}{help-answer-text help-answer-margin-right}}}'
												}
											}]
										}]
									},
									{
										title: 'Change a Fraction to a Percent (directly)',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\rowgrp{\\row{\\str{Change the fraction to a percent (directly):}}}{\\row{\\str{\xA0}}}{\\row{\\frac{\\str{49}}{\\str{50}}}',
												answer: '\\row{\\input{98}}{\\str{%}}',
												controls: {
													"checkAnswer": true,
													"help": '\\rowgrp{\\row{\\frac{\\str{49}}{\\str{50}}}{\\html{<span>&nbsp; &times; &nbsp;</span>}}{\\str{ 100 }}{\\sign{\xA0 = \xA0}}{\\str{98%}}{\\css{\\str{Answer:  98%}}{help-answer-text help-answer-margin-right}}}'
												}
											}]
										}]
									},
									{
										title: 'Change a Fraction to a Percent (directly)',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\rowgrp{\\row{\\str{Change the fraction to a percent (directly):}}}{\\row{\\str{\xA0}}}{\\row{\\frac{\\str{9}}{\\str{5}}}',
												answer: '\\row{\\input{180}}{\\str{%}}',
												controls: {
													"checkAnswer": true,
													"help": '\\rowgrp{\\row{\\frac{\\str{9}}{\\str{5}}}{\\html{<span>&nbsp; &times; &nbsp;</span>}}{\\str{ 100 }}{\\sign{\xA0 = \xA0}}{\\str{180%}}{\\css{\\str{Answer:  180%}}{help-answer-text help-answer-margin-right}}}'
												}
											}]
										}]
									},
									{
										title: 'Change a Fraction to a Percent (directly)',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\rowgrp{\\row{\\str{Change the fraction to a percent (directly):}}}{\\row{\\str{\xA0}}}{\\row{\\frac{\\str{16}}{\\str{10}}}',
												answer: '\\row{\\input{160}}{\\str{%}}',
												controls: {
													"checkAnswer": true,
													"help": '\\rowgrp{\\row{\\frac{\\str{16}}{\\str{10}}}{\\html{<span>&nbsp; &times; &nbsp;</span>}}{\\str{ 100 }}{\\sign{\xA0 = \xA0}}{\\str{160%}}{\\css{\\str{Answer:  160%}}{help-answer-text help-answer-margin-right}}}'
												}
                                            }]
                                        }]
                                    },
									{
										title: 'Change a Fraction to a Percent (directly)',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\rowgrp{\\row{\\str{Change the fraction to a mixed-number percentage:}}}{\\row{\\str{\xA0}}}{\\row{\\frac{\\str{6}}{\\str{7}}}',
												answer: '\\row{\\mixed{\\input{85}}{\\frac{\\input{5}}{\\input{7}}}}{\\str{%}}',
												controls: {
													"checkAnswer": true,
													"help": '\\row{\\frac{\\str{6}}{\\str{7}}}{\\html{<span>&nbsp; &times; &nbsp;</span>}}{\\str{ 100 }}{\\sign{\xA0 = \xA0}}{\\mixed{\\str{85}}{\\frac{\\fracstr{5}}{\\fracstr{7}}}}{\\str{%}}{css{\\str{answer:  \xA0}}{label_like margin-left-small}}{css{\\mixed{\\fracstr{85}}{\\frac{\\fracstr{5}}{\\fracstr{7}}}}{label_like}}{css{\\str{%}}{label_like}}'
												}
											}]
										}]
									},
									{
										title: 'Change a Fraction to a Percent (directly)',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\rowgrp{\\row{\\str{Change the fraction to a mixed-number percentage:}}}{\\row{\\str{\xA0}}}{\\row{\\frac{\\str{3}}{\\str{11}}}',
												answer: '\\row{\\mixed{\\input{27}}{\\frac{\\input{3}}{\\input{11}}}}{\\str{%}}',
												controls: {
													"checkAnswer": true,
													"help": '\\row{\\frac{\\str{3}}{\\str{11}}}{\\html{<span>&nbsp; &times; &nbsp;</span>}}{\\str{ 100 }}{\\sign{\xA0 = \xA0}}{\\mixed{\\str{27}}{\\frac{\\fracstr{3}}{\\fracstr{11}}}}{\\str{%}}{css{\\str{answer:  \xA0}}{label_like margin-left-small}}{css{\\mixed{\\fracstr{27}}{\\frac{\\fracstr{3}}{\\fracstr{11}}}}{label_like}}{css{\\str{%}}{label_like}}'
												}
											}]
										}]
									},
									{
										title: 'Change a Fraction to a Percent (directly)',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\rowgrp{\\row{\\str{Change the fraction to a mixed-number percentage:}}}{\\row{\\str{\xA0}}}{\\row{\\frac{\\str{2}}{\\str{3}}}',
												answer: '\\row{\\mixed{\\input{66}}{\\frac{\\input{2}}{\\input{3}}}}{\\str{%}}',
												controls: {
													"checkAnswer": true,
													"help": '\\row{\\frac{\\str{2}}{\\str{3}}}{\\html{<span>&nbsp; &times; &nbsp;</span>}}{\\str{ 100 }}{\\sign{\xA0 = \xA0}}{\\mixed{\\str{66}}{\\frac{\\fracstr{2}}{\\fracstr{3}}}}{\\str{%}}{css{\\str{answer:  \xA0}}{label_like margin-left-small}}{css{\\mixed{\\fracstr{66}}{\\frac{\\fracstr{2}}{\\fracstr{3}}}}{label_like}}{css{\\str{%}}{label_like}}'
												}
											}]
										}]
									},
									{
										title: 'Change a Fraction to a Percent (directly)',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\rowgrp{\\row{\\str{Change the fraction to a mixed-number percentage:}}}{\\row{\\str{\xA0}}}{\\row{\\frac{\\str{1}}{\\str{15}}}',
												answer: '\\row{\\mixed{\\input{6}}{\\frac{\\input{2}}{\\input{3}}}}{\\str{%}}',
												controls: {
													"checkAnswer": true,
													"help": '\\row{\\frac{\\str{1}}{\\str{15}}}{\\html{<span>&nbsp; &times; &nbsp;</span>}}{\\str{ 100 }}{\\sign{\xA0 = \xA0}}{\\mixed{\\str{6}}{\\frac{\\fracstr{2}}{\\fracstr{3}}}}{\\str{%}}{css{\\str{answer:  \xA0}}{label_like margin-left-small}}{css{\\mixed{\\fracstr{6}}{\\frac{\\fracstr{2}}{\\fracstr{3}}}}{label_like}}{css{\\str{%}}{label_like}}'
												}
											}]
										}]
									},
									{
										title: 'Change a Fraction to a Percent (directly)',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\rowgrp{\\row{\\str{Change the fraction to a mixed-number percentage:}}}{\\row{\\str{\xA0}}}{\\row{\\frac{\\str{2}}{\\str{9}}}',
												answer: '\\row{\\mixed{\\input{22}}{\\frac{\\input{2}}{\\input{9}}}}{\\str{%}}',
												controls: {
													"checkAnswer": true,
													"help": '\\row{\\frac{\\str{2}}{\\str{9}}}{\\html{<span>&nbsp; &times; &nbsp;</span>}}{\\str{ 100 }}{\\sign{\xA0 = \xA0}}{\\mixed{\\str{22}}{\\frac{\\fracstr{2}}{\\fracstr{9}}}}{\\str{%}}{css{\\str{answer:  \xA0}}{label_like margin-left-small}}{css{\\mixed{\\fracstr{22}}{\\frac{\\fracstr{2}}{\\fracstr{9}}}}{label_like}}{css{\\str{%}}{label_like}}'
												}
                                            }]
                                        }]
                                    }]					
							}, {
                                title: '19.2 Change a Fraction to a Decimal, then to a  Percent',
                                path: '19.2-change-a-fraction-to-a-decimal-then-to-a-percent',
                                children: [
                                    	{
										title: 'Change a Fraction to a Decimal, then to a  Percent',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\rowgrp{\\row{\\str{Change the fraction to decimal:}}}{\\row{\\str{\xA0}}}{\\row{\\frac{\\str{9}}{\\str{10}}}',
												answer: '\\input{0.9}',
												controls: {
													"checkAnswer": true,
													"help": '\\rowgrp{\\row{\\str{Divide the numerator of the fraction by the denominator.}}}{\\row{css{\\str{Answer: \xA0 \xA0}}{help-answer-text}}{css{\\percentsdecimalfrac{\\frac{\\str{9}}{\\str{10}}}{percentAsFraction}{decimalNotPercent}}{help-answer-text-tight}}}'
												}
											},{
												problem: '\\rowgrp{\\row{\\str{Change the decimal to a percentage:}}}{\\row{\\str{\xA0}}}{\\row{\\str{0.9}}}',
												answer: '\\row{\\input{90}}{\\str{%}}',
												controls: {
													"checkAnswer": true,
													"help": '\\rowgrp{\\row{\\percentarrows{0.9}{100}{decimal}{percent}}{\\css{\\str{Answer:  90%}}{help-answer-text help-answer-margin-right}}}'
												}
											}]
										}]
									},
									{
										title: 'Change a Fraction to a Decimal, then to a  Percent',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\rowgrp{\\row{\\str{Change the fraction to decimal:}}}{\\row{\\str{\xA0}}}{\\row{\\frac{\\str{67}}{\\str{100}}}',
												answer: '\\input{0.67}',
												controls: {
													"checkAnswer": true,
													"help": '\\rowgrp{\\row{\\str{Divide the numerator of the fraction by the denominator.}}}{\\row{css{\\str{Answer: \xA0 \xA0}}{help-answer-text}}{css{\\percentsdecimalfrac{\\frac{\\str{67}}{\\str{100}}}{percentAsFraction}{decimalNotPercent}}{help-answer-text-tight}}}'
												}
											},{
												problem: '\\rowgrp{\\row{\\str{Change the decimal to a percentage:}}}{\\row{\\str{\xA0}}}{\\row{\\str{0.67}}}',
												answer: '\\row{\\input{67}}{\\str{%}}',
												controls: {
													"checkAnswer": true,
													"help": '\\rowgrp{\\row{\\percentarrows{0.67}{100}{decimal}{percent}}{\\css{\\str{Answer:  67%}}{help-answer-text help-answer-margin-right}}}'
												}
											}]
										}]
									},
									{
										title: 'Change a Fraction to a Decimal, then to a  Percent',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\rowgrp{\\row{\\str{Change the fraction to decimal:}}}{\\row{\\str{\xA0}}}{\\row{\\frac{\\str{5}}{\\str{10}}}',
												answer: '\\input{0.5}',
												controls: {
													"checkAnswer": true,
													"help": '\\rowgrp{\\row{\\str{Divide the numerator of the fraction by the denominator.}}}{\\row{css{\\str{Answer: \xA0 \xA0}}{help-answer-text}}{css{\\percentsdecimalfrac{\\frac{\\str{5}}{\\str{10}}}{percentAsFraction}{decimalNotPercent}}{help-answer-text-tight}}}'
												}
											},{
												problem: '\\rowgrp{\\row{\\str{Change the decimal to a percentage:}}}{\\row{\\str{\xA0}}}{\\row{\\str{0.5}}}',
												answer: '\\row{\\input{50}}{\\str{%}}',
												controls: {
													"checkAnswer": true,
													"help": '\\rowgrp{\\row{\\percentarrows{0.5}{100}{decimal}{percent}}{\\css{\\str{Answer:  50%}}{help-answer-text help-answer-margin-right}}}'
												}
											}]
										}]
									},
									{
										title: 'Change a Fraction to a Decimal, then to a  Percent',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\rowgrp{\\row{\\str{Change the fraction to decimal:}}}{\\row{\\str{\xA0}}}{\\row{\\frac{\\str{29}}{\\str{50}}}',
												answer: '\\input{0.58}',
												controls: {
													"checkAnswer": true,
													"help": '\\rowgrp{\\row{\\str{Divide the numerator of the fraction by the denominator.}}}{\\row{css{\\str{Answer: \xA0 \xA0}}{help-answer-text}}{css{\\percentsdecimalfrac{\\frac{\\str{29}}{\\str{50}}}{percentAsFraction}{decimalNotPercent}}{help-answer-text-tight}}}'
												}
											},{
												problem: '\\rowgrp{\\row{\\str{Change the decimal to a percentage:}}}{\\row{\\str{\xA0}}}{\\row{\\str{0.58}}}',
												answer: '\\row{\\input{58}}{\\str{%}}',
												controls: {
													"checkAnswer": true,
													"help": '\\rowgrp{\\row{\\percentarrows{0.58}{100}{decimal}{percent}}{\\css{\\str{Answer:  58%}}{help-answer-text help-answer-margin-right}}}'
												}
											}]
										}]
									},
									{
										title: 'Change a Fraction to a Decimal, then to a  Percent',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\rowgrp{\\row{\\str{Change the fraction to decimal:}}}{\\row{\\str{\xA0}}}{\\row{\\frac{\\str{38}}{\\str{20}}}',
												answer: '\\input{1.9}',
												controls: {
													"checkAnswer": true,
													"help": '\\rowgrp{\\row{\\str{Divide the numerator of the fraction by the denominator.}}}{\\row{css{\\str{Answer: \xA0 \xA0}}{help-answer-text}}{css{\\percentsdecimalfrac{\\frac{\\str{38}}{\\str{20}}}{percentAsFraction}{decimalNotPercent}}{help-answer-text-tight}}}'
												}
											},{
												problem: '\\rowgrp{\\row{\\str{Change the decimal to a percentage:}}}{\\row{\\str{\xA0}}}{\\row{\\str{1.9}}}',
												answer: '\\row{\\input{190}}{\\str{%}}',
												controls: {
													"checkAnswer": true,
													"help": '\\rowgrp{\\row{\\percentarrows{1.9}{100}{decimal}{percent}}{\\css{\\str{Answer:  190%}}{help-answer-text help-answer-margin-right}}}'
												}
											}]
                                        }]
                                    },
									{
										title: 'Change a Fraction to a Decimal, then to a  Percent',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\rowgrp{\\row{\\str{Change the fraction to decimal:}}}{\\row{\\str{\xA0}}}{\\row{\\frac{\\str{79}}{\\str{160}}}',
												answer: '\\input{0.49375}',
												controls: {
													"checkAnswer": true,
													"help": '\\rowgrp{\\row{\\str{Divide the numerator of the fraction by the denominator.}}}{\\row{css{\\str{Answer: \xA0 \xA0}}{help-answer-text}}{css{\\percentsdecimalfrac{\\frac{\\str{79}}{\\str{160}}}{percentAsFraction}{decimalNotPercent}}{help-answer-text-tight}}}'
												}
											},{
												problem: '\\rowgrp{\\row{\\str{Change the decimal to a percentage:}}}{\\row{\\str{\xA0}}}{\\row{\\str{0.49375}}}',
												answer: '\\row{\\input{49.375}}{\\str{%}}',
												controls: {
													"checkAnswer": true,
													"help": '\\rowgrp{\\row{\\percentarrows{0.49375}{100}{decimal}{percent}}{\\css{\\str{Answer:  49.375%}}{help-answer-text help-answer-margin-right}}}'
												}
											}]
										}]
									},
									{
										title: 'Change a Fraction to a Decimal, then to a  Percent',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\rowgrp{\\row{\\str{Change the fraction to decimal:}}}{\\row{\\str{\xA0}}}{\\row{\\frac{\\str{71}}{\\str{160}}}',
												answer: '\\input{0.44375}',
												controls: {
													"checkAnswer": true,
													"help": '\\rowgrp{\\row{\\str{Divide the numerator of the fraction by the denominator.}}}{\\row{css{\\str{Answer: \xA0 \xA0}}{help-answer-text}}{css{\\percentsdecimalfrac{\\frac{\\str{71}}{\\str{160}}}{percentAsFraction}{decimalNotPercent}}{help-answer-text-tight}}}'
												}
											},{
												problem: '\\rowgrp{\\row{\\str{Change the decimal to a percentage:}}}{\\row{\\str{\xA0}}}{\\row{\\str{0.44375}}}',
												answer: '\\row{\\input{44.375}}{\\str{%}}',
												controls: {
													"checkAnswer": true,
													"help": '\\rowgrp{\\row{\\percentarrows{0.44375}{100}{decimal}{percent}}{\\css{\\str{Answer:  44.375%}}{help-answer-text help-answer-margin-right}}}'
												}
											}]
										}]
									},
									{
										title: 'Change a Fraction to a Decimal, then to a  Percent',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\rowgrp{\\row{\\str{Change the fraction to decimal:}}}{\\row{\\str{\xA0}}}{\\row{\\frac{\\str{771}}{\\str{800}}}',
												answer: '\\input{0.96375}',
												controls: {
													"checkAnswer": true,
													"help": '\\rowgrp{\\row{\\str{Divide the numerator of the fraction by the denominator.}}}{\\row{css{\\str{Answer: \xA0 \xA0}}{help-answer-text}}{css{\\percentsdecimalfrac{\\frac{\\str{771}}{\\str{800}}}{percentAsFraction}{decimalNotPercent}}{help-answer-text-tight}}}'
												}
											},{
												problem: '\\rowgrp{\\row{\\str{Change the decimal to a percentage:}}}{\\row{\\str{\xA0}}}{\\row{\\str{0.96375}}}',
												answer: '\\row{\\input{96.375}}{\\str{%}}',
												controls: {
													"checkAnswer": true,
													"help": '\\rowgrp{\\row{\\percentarrows{0.96375}{100}{decimal}{percent}}{\\css{\\str{Answer:  96.375%}}{help-answer-text help-answer-margin-right}}}'
												}
											}]
										}]
									},
									{
										title: 'Change a Fraction to a Decimal, then to a  Percent',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\rowgrp{\\row{\\str{Change the fraction to decimal:}}}{\\row{\\str{\xA0}}}{\\row{\\frac{\\str{2}}{\\str{125}}}',
												answer: '\\input{0.016}',
												controls: {
													"checkAnswer": true,
													"help": '\\rowgrp{\\row{\\str{Divide the numerator of the fraction by the denominator.}}}{\\row{css{\\str{Answer: \xA0 \xA0}}{help-answer-text}}{css{\\percentsdecimalfrac{\\frac{\\str{2}}{\\str{125}}}{percentAsFraction}{decimalNotPercent}}{help-answer-text-tight}}}'
												}
											},{
												problem: '\\rowgrp{\\row{\\str{Change the decimal to a percentage:}}}{\\row{\\str{\xA0}}}{\\row{\\str{0.016}}}',
												answer: '\\row{\\input{1.6}}{\\str{%}}',
												controls: {
													"checkAnswer": true,
													"help": '\\rowgrp{\\row{\\percentarrows{0.016}{100}{decimal}{percent}}{\\css{\\str{Answer:  1.6%}}{help-answer-text help-answer-margin-right}}}'
												}
											}]
										}]
									},
									{
										title: 'Change a Fraction to a Decimal, then to a  Percent',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\rowgrp{\\row{\\str{Change the fraction to decimal:}}}{\\row{\\str{\xA0}}}{\\row{\\frac{\\str{189}}{\\str{200}}}',
												answer: '\\input{0.945}',
												controls: {
													"checkAnswer": true,
													"help": '\\rowgrp{\\row{\\str{Divide the numerator of the fraction by the denominator.}}}{\\row{css{\\str{Answer: \xA0 \xA0}}{help-answer-text}}{css{\\percentsdecimalfrac{\\frac{\\str{189}}{\\str{200}}}{percentAsFraction}{decimalNotPercent}}{help-answer-text-tight}}}'
												}
											},{
												problem: '\\rowgrp{\\row{\\str{Change the decimal to a percentage:}}}{\\row{\\str{\xA0}}}{\\row{\\str{0.945}}}',
												answer: '\\row{\\input{94.5}}{\\str{%}}',
												controls: {
													"checkAnswer": true,
													"help": '\\rowgrp{\\row{\\percentarrows{0.945}{100}{decimal}{percent}}{\\css{\\str{Answer:  94.5%}}{help-answer-text help-answer-margin-right}}}'
												}
											}]
                                        }]
                                    }]					
							}, {
                                title: '19.3 Change a Percent to a Fraction (Directly)',
                                path: '19.3-change-a-percent-to-a-fraction-directly',
                                children: [
                                    	{
										title: 'Change a Percent to a Fraction (Directly)',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\rowgrp{\\row{\\str{Change the percent into a fraction (reduced to lowest terms:}}}{\\row{\\str{\xA0}}}{\\row{\\str{11%}}',
												answer: '\\frac{\\input{11}}{\\input{100}}',
												controls: {
													"checkAnswer": true,
													"help": '\\rowgrp{\\row{\\str{11% \xA0 = \xA0}}{\\frac{\\fracstr{11}}{\\fracstr{100}}}{\\row{css{\\str{Answer: \xA0 \xA0}}{help-answer-text}}{css{\\frac{\\fracstr{11}}{\\fracstr{100}}}{help-answer-text-tight}}}'
												}
											}]
										}]
									},
									{
										title: 'Change a Percent to a Fraction (Directly)',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\rowgrp{\\row{\\str{Change the percent into a fraction (reduced to lowest terms:}}}{\\row{\\str{\xA0}}}{\\row{\\str{44%}}',
												answer: '\\frac{\\input{11}}{\\input{25}}',
												controls: {
													"checkAnswer": true,
													"help": '\\rowgrp{\\row{\\str{44%}}{\\str{ \xA0 = \xA0}}{\\frac{\\fracstr{44}}{\\fracstr{100}}}{\\str{ \xA0 = \xA0}}{\\frac{\\fracstr{11}}{\\fracstr{25}}}{\\row{css{\\str{Answer: \xA0 \xA0}}{help-answer-text}}{css{\\frac{\\fracstr{11}}{\\fracstr{25}}}{help-answer-text-tight}}}'
												}
											}]
										}]
									},
									{
										title: 'Change a Percent to a Fraction (Directly)',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\rowgrp{\\row{\\str{Change the percent into a fraction (reduced to lowest terms:}}}{\\row{\\str{\xA0}}}{\\row{\\str{35%}}',
												answer: '\\frac{\\input{7}}{\\input{25}}',
												controls: {
													"checkAnswer": true,
													"help": '\\rowgrp{\\row{\\str{35%}}{\\str{ \xA0 = \xA0}}{\\frac{\\fracstr{35}}{\\fracstr{100}}}{\\str{ \xA0 = \xA0}}{\\frac{\\fracstr{7}}{\\fracstr{25}}}{\\row{css{\\str{Answer: \xA0 \xA0}}{help-answer-text}}{css{\\frac{\\fracstr{7}}{\\fracstr{25}}}{help-answer-text-tight}}}'
												}
											}]
										}]
									},
									{
										title: 'Change a Percent to a Fraction (Directly)',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\rowgrp{\\row{\\str{Change the percent into a fraction (reduced to lowest terms:}}}{\\row{\\str{\xA0}}}{\\row{\\mixed{\\fracstr{1}}{\\frac{\\fracstr{1}}{\\fracstr{8}}}}{\\str{%}}}}',
												answer: '\\frac{\\input{9}}{\\input{800}}',
												controls: {
													"checkAnswer": true,
													"help": '\\rowgrp{\\row{\\mixed{\\fracstr{1}}{\\frac{\\fracstr{1}}{\\fracstr{8}}}}{\\str{%}}{\\str{\xA0 = \xA0}}{\\frac{\\fracstr{9}}{\\fracstr{800}}}{\\row{css{\\str{Answer: \xA0 \xA0}}{help-answer-text}}{css{\\frac{\\fracstr{9}}{\\fracstr{800}}}{help-answer-text-tight}}}'
												}
											}]
										}]
									},
									{
										title: 'Change a Percent to a Fraction (Directly)',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\rowgrp{\\row{\\str{Change the percent into a fraction (reduced to lowest terms:}}}{\\row{\\str{\xA0}}}{\\row{\\mixed{\\fracstr{1}}{\\frac{\\fracstr{1}}{\\fracstr{4}}}}{\\str{%}}}}',
												answer: '\\frac{\\input{1}}{\\input{80}}',
												controls: {
													"checkAnswer": true,
													"help": '\\rowgrp{\\row{\\mixed{\\fracstr{1}}{\\frac{\\fracstr{1}}{\\fracstr{4}}}}{\\str{%}}{\\str{\xA0 = \xA0}}{\\frac{\\fracstr{5}}{\\fracstr{400}}}{\\str{\xA0 = \xA0}}{\\frac{\\fracstr{1}}{\\fracstr{80}}}{\\row{css{\\str{Answer: \xA0 \xA0}}{help-answer-text}}{css{\\frac{\\fracstr{1}}{\\fracstr{80}}}{help-answer-text-tight}}}'
												}
											}]
                                        }]
                                    },
									{
										title: 'Change a Percent to a Fraction (Directly)',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\rowgrp{\\row{\\str{Change the percent into a fraction (reduced to lowest terms:}}}{\\row{\\str{\xA0}}}{\\row{\\mixed{\\fracstr{1}}{\\frac{\\fracstr{7}}{\\fracstr{8}}}}{\\str{%}}}}',
												answer: '\\frac{\\input{3}}{\\input{160}}',
												controls: {
													"checkAnswer": true,
													"help": '\\rowgrp{\\row{\\mixed{\\fracstr{1}}{\\frac{\\fracstr{7}}{\\fracstr{8}}}}{\\str{%}}{\\str{\xA0 = \xA0}}{\\frac{\\fracstr{15}}{\\fracstr{800}}}{\\str{\xA0 = \xA0}}{\\frac{\\fracstr{3}}{\\fracstr{160}}}{\\row{css{\\str{Answer: \xA0 \xA0}}{help-answer-text}}{css{\\frac{\\fracstr{3}}{\\fracstr{160}}}{help-answer-text-tight}}}'
												}
											}]
										}]
									},
									{
										title: 'Change a Percent to a Fraction (Directly)',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\rowgrp{\\row{\\str{Write the decimal percent as a percent in mixed number form:}}}{\\row{\\str{\xA0}}}{\\row{\\str{8.1%}}',
												answer: '\\grp{\\mixed{\\input{8}}{\\frac{\\input{1}}{\\input{10}}}}{\\str{%}}',
												controls: {
													"checkAnswer": true,
													"help": '\\rowgrp{\\row{\\str{8.1%}}{\\str{\xA0 = \xA0}}{\\mixed{\\fracstr{8}}{\\frac{\\fracstr{1}}{\\fracstr{10}}}}{\\str{%}}{css{\\str{Answer: \xA0 \xA0}}{help-answer-text}}{css{\\mixed{\\fracstr{8}}{\\frac{\\fracstr{1}}{\\fracstr{10}}}}{help-answer-text-tight}}{css{\\str{%}}{help-answer-text-tight}}}'
												}
											},{
												problem: '\\rowgrp{\\row{\\str{Change the percent into the equivalent fraction:}}}{\\row{\\str{\xA0}}}{\\row{\\str{8.1%}}{\\str{\xA0 = \xA0}}{\\mixed{\\fracstr{8}}{\\frac{\\fracstr{1}}{\\fracstr{10}}}}{\\str{%}}',
												answer: '\\frac{\\input{81}}{\\input{1000}}',
												controls: {
													"checkAnswer": true,
													"help": '\\rowgrp{\\row{\\str{8.1%}}{\\str{\xA0 = \xA0}}{\\mixed{\\fracstr{8}}{\\frac{\\fracstr{1}}{\\fracstr{10}}}}{\\str{%}}{\\str{\xA0 = \xA0}}{\\frac{\\fracstr{81}}{\\fracstr{1000}}}{css{\\str{Answer: \xA0 \xA0}}{help-answer-text}}{css{\\frac{\\fracstr{81}}{\\fracstr{1000}}}{help-answer-text-tight}}'
												}
											}]
										}]
									},
									{
										title: 'Change a Percent to a Fraction (Directly)',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\rowgrp{\\row{\\str{Write the decimal percent as a percent in mixed number form:}}}{\\row{\\str{\xA0}}}{\\row{\\str{3.6%}}',
												answer: '\\grp{\\mixed{\\input{3}}{\\frac{\\input{3}}{\\input{5}}}}{\\str{%}}',
												controls: {
													"checkAnswer": true,
													"help": '\\rowgrp{\\row{\\str{3.6%}}{\\str{\xA0 = \xA0}}{\\mixed{\\fracstr{3}}{\\frac{\\fracstr{6}}{\\fracstr{10}}}}{\\str{%}}{\\str{\xA0 = \xA0}}{\\mixed{\\fracstr{3}}{\\frac{\\fracstr{3}}{\\fracstr{5}}}}{\\str{%}}{css{\\str{Answer: \xA0 \xA0}}{help-answer-text}}{css{\\mixed{\\fracstr{3}}{\\frac{\\fracstr{3}}{\\fracstr{5}}}}{help-answer-text-tight}}{css{\\str{%}}{help-answer-text-tight}}}'
												}
											},{
												problem: '\\rowgrp{\\row{\\str{Change the percent into the equivalent fraction:}}}{\\row{\\str{\xA0}}}{\\row{\\str{3.6%}}{\\str{\xA0 = \xA0}}{\\mixed{\\fracstr{3}}{\\frac{\\fracstr{3}}{\\fracstr{5}}}}{\\str{%}}',
												answer: '\\frac{\\input{9}}{\\input{250}}',
												controls: {
													"checkAnswer": true,
													"help": '\\rowgrp{\\row{\\str{3.6%}}{\\str{\xA0 = \xA0}}{\\mixed{\\fracstr{3}}{\\frac{\\fracstr{3}}{\\fracstr{5}}}}{\\str{%}}{\\str{\xA0 = \xA0}}{\\frac{\\fracstr{18}}{\\fracstr{500}}}{\\str{\xA0 = \xA0}}{\\frac{\\fracstr{9}}{\\fracstr{250}}}{css{\\str{Answer: \xA0 \xA0}}{help-answer-text}}{css{\\frac{\\fracstr{9}}{\\fracstr{250}}}{help-answer-text-tight}}'
												}
											}]
										}]
									},
									{
										title: 'Change a Percent to a Fraction (Directly)',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\rowgrp{\\row{\\str{Write the decimal percent as a percent in mixed number form:}}}{\\row{\\str{\xA0}}}{\\row{\\str{2.3%}}',
												answer: '\\grp{\\mixed{\\input{2}}{\\frac{\\input{3}}{\\input{10}}}}{\\str{%}}',
												controls: {
													"checkAnswer": true,
													"help": '\\rowgrp{\\row{\\str{2.3%}}{\\str{\xA0 = \xA0}}{\\mixed{\\fracstr{2}}{\\frac{\\fracstr{3}}{\\fracstr{10}}}}{\\str{%}}{css{\\str{Answer: \xA0 \xA0}}{help-answer-text}}{css{\\mixed{\\fracstr{2}}{\\frac{\\fracstr{3}}{\\fracstr{10}}}}{help-answer-text-tight}}{css{\\str{%}}{help-answer-text-tight}}}'
												}
											},{
												problem: '\\rowgrp{\\row{\\str{Change the percent into the equivalent fraction:}}}{\\row{\\str{\xA0}}}{\\row{\\str{2.3%}}{\\str{\xA0 = \xA0}}{\\mixed{\\fracstr{2}}{\\frac{\\fracstr{3}}{\\fracstr{10}}}}{\\str{%}}',
												answer: '\\frac{\\input{23}}{\\input{1000}}',
												controls: {
													"checkAnswer": true,
													"help": '\\rowgrp{\\row{\\str{2.3%}}{\\str{\xA0 = \xA0}}{\\mixed{\\fracstr{2}}{\\frac{\\fracstr{3}}{\\fracstr{10}}}}{\\str{%}}{\\str{\xA0 = \xA0}}{\\frac{\\fracstr{23}}{\\fracstr{1000}}}{css{\\str{Answer: \xA0 \xA0}}{help-answer-text}}{css{\\frac{\\fracstr{23}}{\\fracstr{1000}}}{help-answer-text-tight}}'
												}
											}]
										}]
									},
									{
										title: 'Change a Percent to a Fraction (Directly)',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\rowgrp{\\row{\\str{Write the decimal percent as a percent in mixed number form:}}}{\\row{\\str{\xA0}}}{\\row{\\str{3.5%}}',
												answer: '\\grp{\\mixed{\\input{3}}{\\frac{\\input{1}}{\\input{2}}}}{\\str{%}}',
												controls: {
													"checkAnswer": true,
													"help": '\\rowgrp{\\row{\\str{3.5%}}{\\str{\xA0 = \xA0}}{\\mixed{\\fracstr{3}}{\\frac{\\fracstr{1}}{\\fracstr{2}}}}{\\str{%}}{css{\\str{Answer: \xA0 \xA0}}{help-answer-text}}{css{\\mixed{\\fracstr{3}}{\\frac{\\fracstr{1}}{\\fracstr{2}}}}{help-answer-text-tight}}{css{\\str{%}}{help-answer-text-tight}}}'
												}
											},{
												problem: '\\rowgrp{\\row{\\str{Change the percent into the equivalent fraction:}}}{\\row{\\str{\xA0}}}{\\row{\\str{3.5%}}{\\str{\xA0 = \xA0}}{\\mixed{\\fracstr{3}}{\\frac{\\fracstr{1}}{\\fracstr{2}}}}{\\str{%}}',
												answer: '\\frac{\\input{7}}{\\input{200}}',
												controls: {
													"checkAnswer": true,
													"help": '\\rowgrp{\\row{\\str{3.5%}}{\\str{\xA0 = \xA0}}{\\mixed{\\fracstr{3}}{\\frac{\\fracstr{1}}{\\fracstr{2}}}}{\\str{%}}{\\str{\xA0 = \xA0}}{\\frac{\\fracstr{7}}{\\fracstr{200}}}{css{\\str{Answer: \xA0 \xA0}}{help-answer-text}}{css{\\frac{\\fracstr{7}}{\\fracstr{200}}}{help-answer-text-tight}}'
												}
											}]
                                        }]
                                    }]					
							}]
                    }, {
                        title: '6 Measurements',
                        path: 'measurements',
                        children: []
                    }, {
                        title: '7 Test',
                        path: 'test',
                        children: [
                            {
                                title: '7.1 Testing Long Division',
                                path: '7.1-testing-long-division',
                                children: [
                                    {
                                        title: 'Long Division',
                                        children: [{
                                            title: 'Main Answer',
                                            children: [{
                                                problem: '\\str{Divide 930 by 21.}',
                                                answer: '\\longdiv{930}{21}',
                                                controls: {
                                                    "checkAnswer": true,
                                                    "help": true
                                                }
                                            }]
                                        }]
                                    }, {
                                        title: 'Multiply Fractions',
                                        children: [{
                                            title: 'Main Answer',
                                            children: [{
                                                problem: '\\str{Multiply the fractions together.}',
                                                answer: '\\multiplyfracs{\\frac{\\str{12}}{\\str{36}}}{\\frac{\\str{2}}{\\str{24}}}',
                                                controls: {
                                                    "checkAnswer": true,
                                                    "help": true
                                                }
                                            }]
                                        }]
                                    }, {
                                        title: 'Multiply Fractions',
                                        children: [{
                                            title: 'Main Answer',
                                            children: [{
                                                problem: '\\str{Multiply the fractions together.}',
                                                answer: '\\multiplyfracs{\\frac{\\str{12}}{\\str{36}}}{\\frac{\\str{2}}{\\str{24}}}{\\frac{\\str{10}}{\\str{8}}}',
                                                controls: {
                                                    "checkAnswer": true,
                                                    "help": true
                                                }
                                            }]
                                        }]
                                    }
                                ]
                            }, {
                                title: '7.2 Testing Prime Factorization',
                                path: '7.2-testing-prime-factorization',
                                children: [
                                    {
                                        title: 'Prime Factorization',
                                        children: [{
                                            title: 'Main Answer',
                                            children: [{
                                                problem: '\\str{Prime factor 10.}',
                                                answer: '\\primefac{10}',
                                                controls: {
                                                    "checkAnswer": true,
                                                    "help": true
                                                }
                                            }]
                                        }]
                                    }
                                ]
                            },{
                                title: 'Testing Multiply Fractions',
                                path: 'testing-multiply-fractions',
                                children: [
                                    {
                                        title: 'Multiply Fractions',
                                        children: [{
                                            title: 'Main Answer',
                                            children: [{
                                                problem: '\\str{Multiply the fractions together.}',
                                                answer: '\\multiplyfracs{\\frac{\\str{10}}{\\str{20}}}{\\frac{\\str{2}}{\\str{3}}}',
                                                controls: {
                                                    "checkAnswer": true,
                                                    "help": true
                                                }
                                            }]
                                        }]
                                    }
                                ]
                            }, {
                                title: 'Testing width',
                                path: 'width',
                                children: [
                                    {
                                        title: 'width',
                                        children: [{
                                            title: 'Main Answer',
                                            children: [{
                                                problem: '\\str{this is a width test}',
                                                answer: '\\row{\\str{5}}{\\sign{\xb7}}{\\str{8}}',
                                                //answer: '\\mixed{\\input{55}}{\\frac{\\input{66}}{\\input{99999}}}',
                                                //answer: '\\frac{\\mixed{\\input{5555}}{\\frac{\\input{66}}{\\input{99999}}}}{\\mixed{\\input{55}}{\\frac{\\input{2}}{\\input{33}}}}',
                                                //answer: 'frac{\\frac{\\mixed{\\input{1}}{\\frac{\\select{Tens}{["Ones", "Tens"]}}{\\input{20}}}}{\\mixed{\\input{55}}{\\frac{\\input{2}}{\\input{33}}}}}{\\frac{\\mixed{\\input{55}}{\\frac{\\select{Tens}{["Ones", "Tens", "Hundreds", "Thousands"]}}{\\input{99999}}}}{\\mixed{\\input{55}}{\\frac{\\input{2}}{\\input{33}}}}}',
                                                //answer: '\\mixed{\\input{55}}{\\frac{\\select{Tens}{["Ones", "Tens", "Hundreds", "Thousands"]}}{\\select{Tens}{["Ones", "Tens"]}}',
                                                //answer: '\\frac{\\mixed{\\input{55}}{\\frac{\\select{Tens}{["Ones", "Tens", "Hundreds", "Thousands"]}}{\\select{Tens}{["Ones", "Tens"]}}}{\\mixed{\\input{55}}{\\frac{\\select{Tens}{["Ones", "Tens", "Hundreds", "Thousands"]}}{\\select{Tens}{["Ones", "Tens"]}}}',
                                                controls: {
                                                    "checkAnswer": true,
                                                    "help": true
                                                }
                                            }]
                                        }]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            };

            var courseData = {
                getCourseData: function () {
                    return angular.copy(course);
                },
                getNumberOfProblems: function (unitPath, problemSetPath) {
                    return courseData.getProblemSetData(unitPath, problemSetPath).children.length;
                },
                getProblemData: function (unitPath, problemSetPath, problemNumber) {
                    var problemSet = courseData.getProblemSetData(unitPath, problemSetPath),
                        ret;

                    problemSet.children.forEach(function (problem, ii) {
                        if (ii + 1 === +problemNumber) {
                            ret = problem;
                        }
                    });

                    return ret;
                },
                getProblemSetData: function (unitPath, problemSetPath) {
                    var unit = courseData.getUnitData(unitPath),
                        ret;

                    unit.children.forEach(function (problemSet) {
                        if (problemSet.path === problemSetPath) {
                            ret = problemSet;
                        }
                    });

                    return ret;
                },
                getUnitData: function (unitPath) {
                    var ret;

                    course.children.forEach(function (unit) {
                        if (unit.path === unitPath) {
                            ret = unit;
                        }
                    });

                    return ret;
                },
                setCourseData: function (data) {
                    course = data;
                }
            };

            return courseData;
        }
    ]);
