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
                                                problem: '\\rowgrp{\\row{\\str{Identify the place value of the indicated digit: }}}{\\row{\\wholeplace{44816}{3}}}',
                                                answer: '\\select{"Thousands"}{["Ones", "Tens", "Hundreds", "Thousands", "Ten Thousands", "Hundred Thousands", "Millions", "Ten Millions", "Hundred Millions", "Billions", "Ten Billions", "Hundred Billions"]}',
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
                                                problem: '\\rowgrp{\\row{\\str{Identify the place value of the indicated digit: }}}{\\row{\\wholeplace{38059}{2}}',
                                                answer: '\\select{"Hundreds"}{["Ones", "Tens", "Hundreds", "Thousands", "Ten Thousands", "Hundred Thousands", "Millions", "Ten Millions", "Hundred Millions", "Billions", "Ten Billions", "Hundred Billions"]}',
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
                                                problem: '\\rowgrp{\\row{\\str{Identify the place value of the indicated digit: }}}{\\row{\\wholeplace{3888708}{6}}',
                                                answer: '\\select{"Millions"}{["Ones", "Tens", "Hundreds", "Thousands", "Ten Thousands", "Hundred Thousands", "Millions", "Ten Millions", "Hundred Millions", "Billions", "Ten Billions", "Hundred Billions"]}',
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
                                                problem: '\\rowgrp{\\row{\\str{Identify the place value of the indicated digit: }}}{\\row{\\wholeplace{7016486}{1}}',
                                                answer: '\\select{"Tens"}{["Ones", "Tens", "Hundreds", "Thousands", "Ten Thousands", "Hundred Thousands", "Millions", "Ten Millions", "Hundred Millions", "Billions", "Ten Billions", "Hundred Billions"]}',
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
                                                problem: '\\rowgrp{\\row{\\str{Identify the place value of the indicated digit: }}}{\\row{\\wholeplace{4927857}{5}}',
                                                answer: '\\select{"Hundred Thousands"}{["Ones", "Tens", "Hundreds", "Thousands", "Ten Thousands", "Hundred Thousands", "Millions", "Ten Millions", "Hundred Millions", "Billions", "Ten Billions", "Hundred Billions"]}',
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
                                                problem: '\\rowgrp{\\row{\\str{Identify the place value of the indicated digit: }}}{\\row{\\wholeplace{9049152}{5}}',
                                                answer: '\\select{"Hundred Thousands"}{["Ones", "Tens", "Hundreds", "Thousands", "Ten Thousands", "Hundred Thousands", "Millions", "Ten Millions", "Hundred Millions", "Billions", "Ten Billions", "Hundred Billions"]}',
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
                                                problem: '\\rowgrp{\\row{\\str{Identify the place value of the indicated digit: }}}{\\row{\\wholeplace{4555517}{3}}',
                                                answer: '\\select{"Thousands"}{["Ones", "Tens", "Hundreds", "Thousands", "Ten Thousands", "Hundred Thousands", "Millions", "Ten Millions", "Hundred Millions", "Billions", "Ten Billions", "Hundred Billions"]}',
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
                                                problem: '\\rowgrp{\\row{\\str{Identify the place value of the indicated digit: }}}{\\row{\\wholeplace{5174344}{0}}',
                                                answer: '\\select{"Ones"}{["Ones", "Tens", "Hundreds", "Thousands", "Ten Thousands", "Hundred Thousands", "Millions", "Ten Millions", "Hundred Millions", "Billions", "Ten Billions", "Hundred Billions"]}',
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
                                                problem: '\\rowgrp{\\row{\\str{Identify the place value of the indicated digit: }}}{\\row{\\wholeplace{1924837}{6}}',
                                                answer: '\\select{"Millions"}{["Ones", "Tens", "Hundreds", "Thousands", "Ten Thousands", "Hundred Thousands", "Millions", "Ten Millions", "Hundred Millions", "Billions", "Ten Billions", "Hundred Billions"]}',
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
                                                problem: '\\rowgrp{\\row{\\str{Identify the place value of the indicated digit: }}}{\\row{\\wholeplace{295082}{2}}',
                                                answer: '\\select{"Hundreds"}{["Ones", "Tens", "Hundreds", "Thousands", "Ten Thousands", "Hundred Thousands", "Millions", "Ten Millions", "Hundred Millions", "Billions", "Ten Billions", "Hundred Billions"]}',
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
                                                    "help": true
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
                                                    "help": true
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
                                                    "help": true
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
                                                    "help": true
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
                                                    "help": true
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
                                                    "help": true
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
                                                    "help": true
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
                                                    "help": true
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
                                                    "help": true
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
                                                    "help": true
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
													"help": true
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
													"help": true
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
													"help": true
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
													"help": true
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
													"help": true
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
													"help": true
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
													"help": true
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
													"help": true
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
													"help": true
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
													"help": true
                                                }
                                            }]
                                        }]
                                    },
									{
        								title: 'Comparing Whole Numbers',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\butgrp{\\row{\\str{80 \xA0}}{\\but{>}{F}}{\\str{\xA0 or \xA0}}{\\but{<}{T}}{\\str{\xA0 91}}',
												answer: '',
												controls: {
													"checkAnswer": false,
													"help": true
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
													"help": true
												}
											}]
										}]
									},
									{
										title: 'Comparing Whole Numbers',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\rowgrp{\\butgrp{\\row{\\str{X \xA0}}{\\but{>}{T}}{\\str{\xA0 or \xA0}}{\\but{<}{F}}{\\str{\xA0 Y}}}}{\\row{\\str{\xA0}}}{\\row{\\comparewholesgraph{85}{80}{72}{88}}}',
												answer: '',
												controls: {
													"checkAnswer": false,
													"help": true
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
													"help": true
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
													"help": true
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
													"help": true
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
													"help": true
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
													"help": true
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
													"help": true
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
													"help": true
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
												problem: '\\rowgrp{\\row{\\str{Find the sum of the whole numbers:}}}{\\row{\\addwholes{math}{partial}{[47, 59]}}}',
												answer: '\\input{106}',
												controls: {
													"checkAnswer": true,
													"help": '\\rowgrp{\\row{\\addwholes{math}{complete}{[47, 59]}}{\\css{\\html{<br><br><br><br><br><br><br>Answer:  106}}{label_like}}}'
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
													"help": '\\rowgrp{\\row{\\addwholes{math}{complete}{[301,815]}}{\\css{\\html{<br><br><br><br><br><br><br>Answer:  1116}}{label_like}}}'
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
													"help": '\\rowgrp{\\row{\\addwholes{math}{complete}{[968,827]}}{\\css{\\html{<br><br><br><br><br><br><br>Answer:  1795}}{label_like}}}'
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
													"help": '\\rowgrp{\\row{\\addwholes{math}{complete}{[68,47]}}{\\css{\\html{<br><br><br><br><br><br><br>Answer:  115}}{label_like}}}'
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
													"help": '\\rowgrp{\\row{\\addwholes{math}{complete}{[9026,1911]}}{\\css{\\html{<br><br><br><br><br><br><br>Answer:  10937}}{label_like}}}'
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
													"help": '\\rowgrp{\\row{\\addwholes{math}{complete}{[3148,2584]}}{\\css{\\html{<br><br><br><br><br><br><br>Answer:  5732}}{label_like}}}'
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
													"help": '\\rowgrp{\\row{\\addwholes{math}{complete}{[618,489,115]}}{\\css{\\html{<br><br><br><br><br><br><br><br><br>Answer:  1222}}{label_like}}}'
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
													"help": '\\rowgrp{\\row{\\addwholes{math}{complete}{[1700,2233,4945]}}{\\css{\\html{<br><br><br><br><br><br><br><br><br>Answer:  8878}}{label_like}}}'
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
													"help": '\\rowgrp{\\row{\\addwholes{math}{complete}{[8850,4626,177,401]}}{\\css{\\html{<br><br><br><br><br><br><br><br><br>Answer:  14054}}{label_like}}}'
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
													"help": '\\rowgrp{\\row{\\addwholes{math}{complete}{[832,6223,2705,146]}}{\\css{\\html{<br><br><br><br><br><br><br><br><br>Answer:  9906}}{label_like}}}'
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
													"help": '\\rowgrp{\\row{\\subtractwholes{math}{complete}{110}{99}}{\\css{\\html{<br><br><br><br><br><br><br><br><br>Answer:  11}}{label_like}}}'
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
													"help": '\\rowgrp{\\row{\\subtractwholes{math}{complete}{989}{711}}{\\css{\\html{<br><br><br><br><br><br><br><br><br>Answer:  278}}{label_like}}}'
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
													"help": '\\rowgrp{\\row{\\subtractwholes{math}{complete}{832}{86}}{\\css{\\html{<br><br><br><br><br><br><br><br><br>Answer:  746}}{label_like}}}'
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
													"help": '\\rowgrp{\\row{\\subtractwholes{math}{complete}{518}{68}}{\\css{\\html{<br><br><br><br><br><br><br><br><br>Answer:  450}}{label_like}}}'
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
													"help": '\\rowgrp{\\row{\\subtractwholes{math}{complete}{3749}{756}}{\\css{\\html{<br><br><br><br><br><br><br><br><br>Answer:  2993}}{label_like}}}'
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
													"help": '\\rowgrp{\\row{\\subtractwholes{math}{complete}{8889}{549}}{\\css{\\html{<br><br><br><br><br><br><br><br><br>Answer:  8340}}{label_like}}}'
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
													"help": '\\rowgrp{\\row{\\subtractwholes{math}{complete}{9475}{7493}}{\\css{\\html{<br><br><br><br><br><br><br><br><br>Answer:  1982}}{label_like}}}'
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
													"help": '\\rowgrp{\\row{\\subtractwholes{math}{complete}{8206}{6863}}{\\css{\\html{<br><br><br><br><br><br><br><br><br>Answer:  1343}}{label_like}}}'
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
													"help": '\\rowgrp{\\row{\\str{Find the difference of the whole numbers:}}}{\\row{\\str{\xA0}}}{\\row{\\subtractwholes{math}{complete}{89686}{62438}}{\\css{\\html{<br><br><br><br><br><br><br><br><br>Answer:  27248}}{label_like}}}'
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
													"help": '\\rowgrp{\\row{\\str{Find the difference of the whole numbers:}}}{\\row{\\str{\xA0}}}{\\row{\\subtractwholes{math}{complete}{45300}{20532}}{\\css{\\html{<br><br><br><br><br><br><br><br><br>Answer:  24768}}{label_like}}}'													
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
                                                    "help": '\\rowgrp{\\row{\\str{471}}}{\\row{\\str{Since the number to the right of the 7 in the Tens place is 1 (4 or lower), the 7 (in the Tens place) must stay the same. The whole number digits to the right of the rounded value become zeros.}}}{\\row{\\wholeplace{470}{1}}}}'
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
                                                    "help": '\\rowgrp{\\row{\\str{1346}}}{\\row{\\str{Since the number to the right of the 1 in the Thousands place is 3 (4 or lower), the 1 (in the Thousands place) must stay the same. The whole number digits to the right of the rounded value become zeros.}}}{\\row{\\wholeplace{1000}{3}}}}'
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
                                                    "help": '\\rowgrp{\\row{\\str{684}}}{\\row{\\str{Since the number to the right of the 8 in the tens place is 4 (4 or lower), the 8 (in the tens place) must stay the same. The whole number digits to the right of the rounded value become zeros.}}}{\\row{\\wholeplace{680}{1}}}}'
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
                                                    "help": '\\rowgrp{\\row{\\str{959}}}{\\row{\\str{Since the number to the right of the 5 in the tens place is 9 (5 or higher), the 5 (in the tens place) must go up one. It becomes 6. The whole number digits to the right of the rounded value become zeros.}}}{\\row{\\wholeplace{960}{1}}}}'
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
                                                    "help": '\\rowgrp{\\row{\\str{461}}}{\\row{\\str{Since the number to the right of the 4 in the hundreds place is 6 (5 or higher), the 4 (in the hundreds place) must go up one. It becomes 5. The whole number digits to the right of the rounded value become zeros.}}}{\\row{\\wholeplace{500}{2}}}}'
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
                                                    "help": '\\rowgrp{\\row{\\str{3990495}}}{\\row{\\str{Since the number to the right of the 9 in the ten thousands place is 0 (4 or lower), the 9 (in the ten thousands place) must stay the same. The whole number digits to the right of the rounded value become zeros.}}}{\\row{\\wholeplace{3990000}{4}}}}'
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
                                                    "help": '\\rowgrp{\\row{\\str{27523018}}}{\\row{\\str{Since the number to the right of the 2 in the ten thousands place is 3 (4 or lower), the 2 (in the ten thousands place) must stay the same. The whole number digits to the right of the rounded value become zeros.}}}{\\row{\\wholeplace{27520000}{4}}}}'
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
                                                     "help": '\\rowgrp{\\row{\\str{563548}}}{\\row{\\str{Since the number to the right of the 5 in the hundred thousands place is 6 (5 or higher), the 5 (in the hundred thousands place) must go up one. It becomes 6. The whole number digits to the right of the rounded value become zeros.}}}{\\row{\\wholeplace{600000}{5}}}}'
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
                                                     "help": '\\rowgrp{\\row{\\str{230179}}}{\\row{\\str{Since the number to the right of the 7 in the tens place is 9 (5 or higher), the 7 (in the tens place) must go up one. It becomes 8. The whole number digits to the right of the rounded value become zeros.}}}{\\row{\\wholeplace{230180}{1}}}}'
                                                }
                                            }]
                                        }]
                                    },
                                    {
                                        title: 'Rounding Whole Numbers',
                                        children: [{
                                            title: 'Main Answer',
                                            children: [{
                                                problem: '\\rowgrp{\\row{\\str{Round this whole number to the}}}{\\row{\\str{hundreds place: }}}{\\row{\\str{41742}}}}',
                                                answer: '\\input{41700}',
                                                controls: {
                                                    "checkAnswer": true,
                                                    "help": '\\rowgrp{\\row{\\str{41742}}}{\\row{\\str{Since the number to the right of the 7 in the hundreds place is 4 (4 or lower), the 7 (in the hundreds place) must stay the same. The whole number digits to the right of the rounded value become zeros.}}}{\\row{\\wholeplace{41700}{2}}}}'
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
                                                problem: '\\butgrp{\\rowgrp{\\row{\\str{Translate the following words into a math expression or an inequality statement:}}}{\\row{\xA0}}{\\row{\\str{74 is greater than 26}}}{\\row{\xA0}}{\\row{\xA0}}{\\row{\\but{A}{T}}{\\str{\xA0 \xA0 74 > 26}}}{\\row{\\but{B}{F}}{\\str{\xA0 \xA0 26 < 74}}}{\\row{\\but{C}{F}}{\\str{\xA0 \xA0 74 - 26}}}{\\row{\\but{D}{F}}{\\str{\xA0 \xA0 74 + 26}}}}}',
                                                answer: 'A',
                                                controls: {
                                                    "checkAnswer": true,
                                                    "help": true
                                                }
                                            }]
                                        }]
                                    },
                                    {
                                        title: 'Translating Words to Math',
                                        children: [{
                                            title: 'Main Answer',
                                            children: [{
                                                problem: '\\butgrp{\\rowgrp{\\row{\\str{Translate the following words into a math expression or an inequality statement:}}}{\\row{\xA0}}{\\row{\\str{9 is less than 23}}}{\\row{\xA0}}{\\row{\xA0}}{\\row{\\but{A}{F}}{\\str{\xA0 \xA0 9 - 23}}}{\\row{\\but{B}{T}}{\\str{\xA0 \xA0 9 < 23}}}{\\row{\\but{C}{F}}{\\str{\xA0 \xA0 9 + 23}}}{\\row{\\but{D}{F}}{\\str{\xA0 \xA0 23 > 9}}}}}',
                                                answer: 'B',
                                                controls: {
                                                    "checkAnswer": true,
                                                    "help": true
                                                }
                                            }]
                                        }]
                                    },
                                    {
                                        title: 'Translating Words to Math',
                                        children: [{
                                            title: 'Main Answer',
                                            children: [{
                                                problem: '\\butgrp{\\rowgrp{\\row{\\str{Translate the following words into a math expression or an inequality statement:}}}{\\row{\xA0}}{\\row{\\str{5 is more than 1}}}{\\row{\xA0}}{\\row{\xA0}}{\\row{\\but{A}{F}}{\\str{\xA0 \xA0 1 < 5}}}{\\row{\\but{B}{T}}{\\str{\xA0 \xA0 5 > 1}}}{\\row{\\but{C}{F}}{\\str{\xA0 \xA0 1 + 5}}}{\\row{\\but{D}{F}}{\\str{\xA0 \xA0 5 - 1}}}}}',
                                                answer: 'B',
                                                controls: {
                                                    "checkAnswer": true,
                                                    "help": true
                                                }
                                            }]
                                        }]
                                    },
                                    {
                                        title: 'Translating Words to Math',
                                        children: [{
                                            title: 'Main Answer',
                                            children: [{
                                                problem: '\\butgrp{\\rowgrp{\\row{\\str{Translate the following words into a math expression or an inequality statement:}}}{\\row{\xA0}}{\\row{\\str{82 is how much less than 98?}}}{\\row{\xA0}}{\\row{\xA0}}{\\row{\\but{A}{F}}{\\str{\xA0 \xA0 82 + 98}}}{\\row{\\but{B}{F}}{\\str{\xA0 \xA0 98 > 82}}}{\\row{\\but{C}{T}}{\\str{\xA0 \xA0 98 - 82}}}{\\row{\\but{D}{F}}{\\str{\xA0 \xA0 82 < 98}}}}}',
                                                answer: 'C',
                                                controls: {
                                                    "checkAnswer": true,
                                                    "help": true
                                                }
                                            }]
                                        }]
                                    },
                                    {
                                        title: 'Translating Words to Math',
                                        children: [{
                                            title: 'Main Answer',
                                            children: [{
                                                problem: '\\butgrp{\\rowgrp{\\row{\\str{Translate the following words into a math expression or an inequality statement:}}}{\\row{\xA0}}{\\row{\\str{91 is more than 66}}}{\\row{\xA0}}{\\row{\xA0}}{\\row{\\but{A}{F}}{\\str{\xA0 \xA0 66 + 91}}}{\\row{\\but{B}{F}}{\\str{\xA0 \xA0 66 < 91}}}{\\row{\\but{C}{F}}{\\str{\xA0 \xA0 91 - 66}}}{\\row{\\but{D}{T}}{\\str{\xA0 \xA0 91 > 66}}}}}',
                                                answer: 'D',
                                                controls: {
                                                    "checkAnswer": true,
                                                    "help": true
                                                }
                                            }]
                                        }]
                                    },
                                    {
                                        title: 'Translating Words to Math',
                                        children: [{
                                            title: 'Main Answer',
                                            children: [{
                                                problem: '\\butgrp{\\rowgrp{\\row{\\str{Translate the following words into a math expression or an inequality statement:}}}{\\row{\xA0}}{\\row{\\str{13 is how much more than 12}}}{\\row{\xA0}}{\\row{\xA0}}{\\row{\\but{A}{F}}{\\str{\xA0 \xA0 13 > 12}}}{\\row{\\but{B}{F}}{\\str{\xA0 \xA0 12 < 13}}}{\\row{\\but{C}{F}}{\\str{\xA0 \xA0 12 + 13}}}{\\row{\\but{D}{T}}{\\str{\xA0 \xA0 13 - 12}}}}}',
                                                answer: 'D',
                                                controls: {
                                                    "checkAnswer": true,
                                                    "help": true
                                                }
                                            }]
                                        }]
                                    },
                                    {
                                        title: 'Translating Words to Math',
                                        children: [{
                                            title: 'Main Answer',
                                            children: [{
                                                problem: '\\butgrp{\\rowgrp{\\row{\\str{Translate the following words into a math expression or an inequality statement:}}}{\\row{\xA0}}{\\row{\\str{28 is more than 16}}}{\\row{\xA0}}{\\row{\xA0}}{\\row{\\but{A}{F}}{\\str{\xA0 \xA0 16 < 28}}}{\\row{\\but{B}{T}}{\\str{\xA0 \xA0 28 > 16}}}{\\row{\\but{C}{F}}{\\str{\xA0 \xA0 16 + 28}}}{\\row{\\but{D}{F}}{\\str{\xA0 \xA0 28 - 16}}}}}',
                                                answer: 'B',
                                                controls: {
                                                    "checkAnswer": true,
                                                    "help": true
                                                }
                                            }]
                                        }]
                                    },
                                    {
                                        title: 'Translating Words to Math',
                                        children: [{
                                            title: 'Main Answer',
                                            children: [{
                                                problem: '\\butgrp{\\rowgrp{\\row{\\str{Translate the following words into a math expression or an inequality statement:}}}{\\row{\xA0}}{\\row{\\str{45 is greater than 1}}}{\\row{\xA0}}{\\row{\xA0}}{\\row{\\but{A}{F}}{\\str{\xA0 \xA0 1 < 45}}}{\\row{\\but{B}{T}}{\\str{\xA0 \xA0 45 > 1}}}{\\row{\\but{C}{F}}{\\str{\xA0 \xA0 45 - 1}}}{\\row{\\but{D}{F}}{\\str{\xA0 \xA0 1 + 45}}}}}',
                                                answer: 'B',
                                                controls: {
                                                    "checkAnswer": true,
                                                    "help": true
                                                }
                                            }]
                                        }]
                                    },
                                    {
                                        title: 'Translating Words to Math',
                                        children: [{
                                            title: 'Main Answer',
                                            children: [{
                                                problem: '\\butgrp{\\rowgrp{\\row{\\str{Translate the following words into a math expression or an inequality statement:}}}{\\row{\xA0}}{\\row{\\str{28 is how much less than 47?}}}{\\row{\xA0}}{\\row{\xA0}}{\\row{\\but{A}{T}}{\\str{\xA0 \xA0 47 - 28}}}{\\row{\\but{B}{F}}{\\str{\xA0 \xA0 28 < 47}}}{\\row{\\but{C}{F}}{\\str{\xA0 \xA0 47 > 28}}}{\\row{\\but{D}{F}}{\\str{\xA0 \xA0 28 + 47}}}}}',
                                                answer: 'A',
                                                controls: {
                                                    "checkAnswer": true,
                                                    "help": true
                                                }
                                            }]
                                        }]
                                    },
                                    {
                                        title: 'Translating Words to Math',
                                        children: [{
                                            title: 'Main Answer',
                                            children: [{
                                                problem: '\\butgrp{\\rowgrp{\\row{\\str{Translate the following words into a math expression or an inequality statement:}}}{\\row{\xA0}}{\\row{\\str{6 is less than 73}}}{\\row{\xA0}}{\\row{\xA0}}{\\row{\\but{A}{F}}{\\str{\xA0 \xA0 6 + 73}}}{\\row{\\but{B}{F}}{\\str{\xA0 \xA0 73 > 6}}}{\\row{\\but{C}{F}}{\\str{\xA0 \xA0 73 - 6}}}{\\row{\\but{D}{T}}{\\str{\xA0 \xA0 6 < 73}}}}}',
                                                answer: 'D',
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
                                title: '2A.2 Charts and Bar Graphs',
                                path: '2A.2-charts-and-bar-graphs',
                                children: [
                                    {
                                        title: 'Charts and Bar Graphs',
                                        children: [{
                                            title: 'Main Answer',
                                            children: [{
                                                problem: '\\butgrp{\\rowgrp{\\row{\\str{Answer the following questions by using the chart to the right.}}}{\\row{\xA0}}{\\row{\\str{Question 1:   Which two athletes had the best times to finish Race #1?}}}{\\row{\xA0}}{\\row{\xA0}}{\\row{\\but{A}{T}}{\\str{\xA0 \xA0 C and D}}}{\\row{\\but{B}{F}}{\\str{\xA0 \xA0 A and B}}}{\\row{\\but{C}{F}}{\\str{\xA0 \xA0 B and C}}}{\\row{\\but{D}{F}}{\\str{\xA0 \xA0 D and E}}}}}',
                                                answer: '\\chart{Time (in seconds) to Run 220 Meters}{6}{5}{["Athlete","Race #1","Race #2","Race #3","Race #4","Runner A","27","29","29","29","Runner B","30","28","28","26","Runner C","26","30","27","24","Runner D","24","28","30","28","Runner E","27","24","28","24"]}',
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
                                                problem: '\\butgrp{\\rowgrp{\\row{\\str{Answer the following questions by using the chart to the right.}}}{\\row{\xA0}}{\\row{\\str{Question 2:   Which athlete took the least amount of time to finish Race #2?}}}{\\row{\xA0}}{\\row{\xA0}}{\\row{\\but{A}{F}}{\\str{\xA0 \xA0 runner D}}}{\\row{\\but{B}{F}}{\\str{\xA0 \xA0 runner C}}}{\\row{\\but{C}{T}}{\\str{\xA0 \xA0 runner E}}}{\\row{\\but{D}{F}}{\\str{\xA0 \xA0 runner A}}}}}',
                                                answer: '\\chart{Time (in seconds) to Run 220 Meters}{6}{5}{["Athlete","Race #1","Race #2","Race #3","Race #4","Runner A","27","29","29","29","Runner B","30","28","28","26","Runner C","26","30","27","24","Runner D","24","28","30","28","Runner E","27","24","28","24"]}',
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
                                                problem: '\\butgrp{\\rowgrp{\\row{\\str{Answer the following questions by using the chart to the right.}}}{\\row{\xA0}}{\\row{\\str{Question 3:   How many of the runners had a time of 25 seconds or better in at least one race?}}}{\\row{\xA0}}{\\row{\xA0}}{\\row{\\but{A}{F}}{\\str{\xA0 \xA0 2 runners}}}{\\row{\\but{B}{F}}{\\str{\xA0 \xA0 0 runners}}}{\\row{\\but{C}{F}}{\\str{\xA0 \xA0 1 runner}}}{\\row{\\but{D}{T}}{\\str{\xA0 \xA0 5 runners}}}}}',
                                                answer: '\\chart{Time (in seconds) to Run 220 Meters}{6}{5}{["Athlete","Race #1","Race #2","Race #3","Race #4","Runner A","27","29","29","29","Runner B","30","28","28","26","Runner C","26","30","27","24","Runner D","24","28","30","28","Runner E","27","24","28","24"]}',
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
                                                problem: '\\butgrp{\\rowgrp{\\row{\\str{Answer the following questions by using the chart to the right.}}}{\\row{\xA0}}{\\html{<br><br>}}{\\row{\\str{Question 1:  How much more money does Nathan spend on gas than Anne?}}}{\\row{\xA0}}}',
                                                answer: '\\rowgrp{\\row{\\str{$}}{\\input{2}}}{\\row{\xA0}}{\\row{\\chart{Utility Bill for Gas and Electricity}{5}{5}{["Student","Therms of Gas Used","Cost of Gas","Kilowatt Hours of Electricity Used","Cost of Electricity","Anne","18","$26","188","$41","Travis","10","$14","183","$40","Nathan","20","$28","261","$56","Sondra","12","$17","251","$54"]}}}',
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
                                                problem: '\\butgrp{\\rowgrp{\\row{\\str{Answer the following questions by using the chart to the right.}}}{\\row{\xA0}}{\\html{<br><br>}}{\\row{\\str{Question 2:    How much more money does Nathan spend on the total utility bill (the cost of both gas and electricity) than Anne?}}}{\\row{\xA0}}}',
                                                answer: '\\rowgrp{\\row{\\str{$}}{\\input{17}}}{\\row{\xA0}}{\\row{\\chart{Utility Bill for Gas and Electricity}{5}{5}{["Student","Therms of Gas Used","Cost of Gas","Kilowatt Hours of Electricity Used","Cost of Electricity","Anne","18","$26","188","$41","Travis","10","$14","183","$40","Nathan","20","$28","261","$56","Sondra","12","$17","251","$54"]}}}',
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
                                                problem: '\\butgrp{\\rowgrp{\\row{\\str{Answer the following questions by using the chart to the right.}}}{\\row{\xA0}}{\\html{<br><br>}}{\\row{\\str{Question 3:    How much more money does Nathan spend on electricity than on gas?}}}{\\row{\xA0}}}',
                                                answer: '\\rowgrp{\\row{\\str{$}}{\\input{28}}}{\\row{\xA0}}{\\row{\\chart{Utility Bill for Gas and Electricity}{5}{5}{["Student","Therms of Gas Used","Cost of Gas","Kilowatt Hours of Electricity Used","Cost of Electricity","Anne","18","$26","188","$41","Travis","10","$14","183","$40","Nathan","20","$28","261","$56","Sondra","12","$17","251","$54"]}}}',
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
                                                problem: '\\butgrp{\\rowgrp{\\row{\\str{Answer the following questions by using the chart to the right.}}}{\\row{\xA0}}{\\row{\\str{Question 1:  For the four students, which student spent the most for Phone and Gas?}}}{\\row{\xA0}}{\\row{\xA0}}{\\row{\\but{A}{F}}{\\str{\xA0 \xA0 Sam}}}{\\row{\\but{B}{F}}{\\str{\xA0 \xA0 Jerry}}}{\\row{\\but{C}{F}}{\\str{\xA0 \xA0 Maribel}}}{\\row{\\but{D}{T}}{\\str{\xA0 \xA0 Yvonne}}}}}',
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
                                                problem: '\\butgrp{\\rowgrp{\\row{\\str{Answer the following questions by using the chart to the right.}}}{\\row{\xA0}}{\\row{\\str{Question 2:  Which service given in these four choices is the most expensive for the four students all together?}}}{\\row{\xA0}}{\\row{\xA0}}{\\row{\\but{A}{F}}{\\str{\xA0 \xA0 Phone}}}{\\row{\\but{B}{F}}{\\str{\xA0 \xA0 Internet}}}{\\row{\\but{C}{F}}{\\str{\xA0 \xA0 Cable TV}}}{\\row{\\but{D}{T}}{\\str{\xA0 \xA0 Gas}}}}}',
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
                                                problem: '\\butgrp{\\rowgrp{\\row{\\str{Answer the following questions by using the chart to the right.}}}{\\row{\xA0}}{\\row{\\str{Question 3:  Which service given in these four choices is the least expensive for the four students all together?}}}{\\row{\xA0}}{\\row{\xA0}}{\\row{\\but{A}{F}}{\\str{\xA0 \xA0 Phone}}}{\\row{\\but{B}{F}}{\\str{\xA0 \xA0 Internet}}}{\\row{\\but{C}{T}}{\\str{\xA0 \xA0 Cable TV}}}{\\row{\\but{D}{F}}{\\str{\xA0 \xA0 Gas}}}}}',
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
                                                problem: '\\butgrp{\\rowgrp{\\row{\\str{What is the label for the vertical axis?}}}{\\row{\xA0}}{\\row{\\str{\xA0}}}{\\row{\xA0}}{\\row{\xA0}}{\\row{\\but{A}{F}}{\\css{\\str{Employee Classification}}{button-label-margin}}}{\\row{\\but{B}{F}}{\\css{\\str{Hourly Wages for Employees}}{button-label-margin}}}{\\row{\\but{C}{T}}{\\css{\\str{Hourly Wage}}{button-label-margin}}}{\\row{\\but{D}{F}}{\\css{\\str{Hourly Wages at Budget Warehouse}}{button-label-margin}}}}}',
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
                                                problem: '\\butgrp{\\rowgrp{\\row{\\str{Approximately how much more money per hour does a Class E worker make than Class A worker?}}}{\\row{\xA0}}{\\row{\\str{\xA0}}}{\\row{\xA0}}{\\row{\xA0}}{\\row{\\but{A}{F}}{\\css{\\str{$20.00 more}}{button-label-margin}}}{\\row{\\but{B}{T}}{\\css{\\str{$16.00 more}}{button-label-margin}}}{\\row{\\but{C}{F}}{\\css{\\str{$10.00 more}}{button-label-margin}}}{\\row{\\but{D}{F}}{\\css{\\str{$5.00 more}}{button-label-margin}}}}}',
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
                                                problem: '\\butgrp{\\rowgrp{\\row{\\str{If there are 100 Class A workers, 50 class B workers, 30 class C workers, 10 class D workers, 5 class E workers, and 2 managers, how many employees earn $15 an hour or more?}}}{\\row{\xA0}}{\\row{\\str{\xA0}}}{\\row{\xA0}}{\\row{\xA0}}{\\row{\\but{A}{F}}{\\css{\\str{7 employees}}{button-label-margin}}}{\\row{\\but{B}{F}}{\\css{\\str{15 employees}}{button-label-margin}}}{\\row{\\but{C}{T}}{\\css{\\str{17 employees}}{button-label-margin}}}{\\row{\\but{D}{F}}{\\css{\\str{180 employees}}{button-label-margin}}}}}',
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
                                                problem: '\\butgrp{\\rowgrp{\\row{\\str{What is the label for the vertical axis?}}}{\\row{\xA0}}{\\row{\\str{\xA0}}}{\\row{\xA0}}{\\row{\xA0}}{\\row{\\but{A}{F}}{\\css{\\str{Months}}{button-label-margin}}}{\\row{\\but{B}{F}}{\\css{\\str{Deer Survey in Sonoma County}}{button-label-margin}}}{\\row{\\but{C}{F}}{\\css{\\str{Deer Population}}{button-label-margin}}}{\\row{\\but{D}{T}}{\\css{\\str{Number of Deer Counted}}{button-label-margin}}}}}',
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
                                                problem: '\\butgrp{\\rowgrp{\\row{\\str{Approximately how many deer were counted in July?}}}{\\row{\xA0}}{\\row{\\str{\xA0}}}{\\row{\xA0}}{\\row{\xA0}}{\\row{\\but{A}{T}}{\\css{\\str{445 Deer}}{button-label-margin}}}{\\row{\\but{B}{F}}{\\css{\\str{380 Deer}}{button-label-margin}}}{\\row{\\but{C}{F}}{\\css{\\str{410 Deer}}{button-label-margin}}}{\\row{\\but{D}{F}}{\\css{\\str{300 Deer}}{button-label-margin}}}}}',
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
                                                problem: '\\butgrp{\\rowgrp{\\row{\\str{Approximately how many deer were counted in the first two months of the survey (January and April)?}}}{\\row{\xA0}}{\\row{\\str{\xA0}}}{\\row{\xA0}}{\\row{\xA0}}{\\row{\\but{A}{F}}{\\css{\\str{450 Deer}}{button-label-margin}}}{\\row{\\but{B}{F}}{\\css{\\str{680 Deer}}{button-label-margin}}}{\\row{\\but{C}{T}}{\\css{\\str{590 Deer}}{button-label-margin}}}{\\row{\\but{D}{F}}{\\css{\\str{500 Deer}}{button-label-margin}}}}}',
                                                answer: '\\graph{Deer Survey in Sonoma County}{[ ["January", 220], ["April", 370], ["July", 445], ["October", 300]]}{500}{Number of Deer Counted}',
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
													"help": '\\rowgrp{\\row{\\multiplywholes{math}{complete}{839}{3}}{\\css{\\html{<br><br><br><br><br><br><br>Answer:  2517}}{label_like}}}'
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
													"help": '\\rowgrp{\\row{\\multiplywholes{math}{complete}{596}{6}}{\\css{\\html{<br><br><br><br><br><br><br>Answer:  3576}}{label_like}}}'
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
													"help": '\\rowgrp{\\row{\\multiplywholes{math}{complete}{6453}{4}}{\\css{\\html{<br><br><br><br><br><br><br>Answer:  25812}}{label_like}}}'
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
													"help": '\\rowgrp{\\row{\\multiplywholes{math}{complete}{4049}{7}}{\\css{\\html{<br><br><br><br><br><br><br><br><br>Answer:  28343}}{label_like}}}'												}
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
													"help": '\\rowgrp{\\row{\\multiplywholes{math}{complete}{97}{74}}{\\css{\\html{<br><br><br><br><br><br><br><br><br>Answer:  7178}}{label_like}}}'
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
													"help": '\\rowgrp{\\row{\\multiplywholes{math}{complete}{34}{29}}{\\css{\\html{<br><br><br><br><br><br><br><br><br>Answer:  986}}{label_like}}}'
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
													"help": '\\rowgrp{\\row{\\multiplywholes{math}{complete}{645}{90}}{\\css{\\html{<br><br><br><br><br><br><br><br><br>Answer:  58050}}{label_like}}}'
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
													"help": '\\rowgrp{\\row{\\multiplywholes{math}{complete}{374}{29}}{\\css{\\html{<br><br><br><br><br><br><br><br><br><br><br>Answer:  10846}}{label_like}}}'
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
													"help": '\\rowgrp{\\row{\\multiplywholes{math}{complete}{300}{356}}{\\css{\\html{<br><br><br><br><br><br><br><br><br><br><br>Answer:  106800}}{label_like}}}'
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
													"help": '\\rowgrp{\\row{\\multiplywholes{math}{complete}{508}{602}}{\\css{\\html{<br><br><br><br><br><br><br><br><br><br><br>Answer:  305816}}{label_like}}}'
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
												problem: '\\html{How many times does 5 go into 9308.<br><br>Set up the division problem by placing the<br>dividend and the divisor in the proper places.}',
												answer: '\\css{\\divwholes{\\input{5}}{\\input{9308}}}{divwhole}',
												controls: {
													"checkAnswer": true,
													"help": false
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
													"help": false
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
													"help": false
												}
											}]
										}]
									},
									{
                                        title: 'Divide Whole Numbers',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\html{How many times does 5 go into 7916.<br><br>Set up the division problem by placing the<br>dividend and the divisor in the proper places.}',
												answer: '\\css{\\divwholes{\\input{5}}{\\input{7916}}}{divwhole}',
												controls: {
													"checkAnswer": true,
													"help": false
												}
											}]
										}]
									},
									{
                                        title: 'Divide Whole Numbers',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\html{How many times does 6 go into 2855.<br><br>Set up the division problem by placing the<br>dividend and the divisor in the proper places.}',
												answer: '\\css{\\divwholes{\\input{6}}{\\input{2855}}}{divwhole}',
												controls: {
													"checkAnswer": true,
													"help": false
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
													"help": false
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
                                                problem: '\\rowgrp{\\row{\\str{Select the first part of the dividend that is equal to or larger than the divisor.}}}{\\row{\\str{Click on the right-most digit of the number you would like to divide into.}}}',
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
													"help": false
												}
											}]
										}]
									},
                                    {
                                        title: 'Divide Whole Numbers',//////////8
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\html{Solve: 3027/3.<br><br>Solve the problem.}',
												answer: '\\css{\\grp{\\input{1009}}{\\str{quotient}}{\\input{0}}{\\str{remainder}}}{divwhole}',
												controls: {
													"checkAnswer": true,
													"help": false
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
													"help": false
												}
											}]
										}]
									},
                                    {
                                        title: 'Divide Whole Numbers',//////////10
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\html{How many times does 3 go into 9381.<br><br>Solve the problem.}',
												answer: '\\css{\\grp{\\input{3127}}{\\str{quotient}}{\\input{0}}{\\str{remainder}}}{divwhole}',
												controls: {
													"checkAnswer": true,
													"help": false
												}
											}]
										}]
									},
                                    {
                                        title: 'Divide Whole Numbers',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\html{How many times does 23 go into 18300.<br><br>Solve the problem.}',
												answer: '\\css{\\grp{\\input{795}}{\\str{quotient}}{\\input{15}}{\\str{remainder}}}{divwhole}',
												controls: {
													"checkAnswer": true,
													"help": false
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
													"help": false
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
													"help": false
												}
											}]
										}]
									},
                                    {
                                        title: 'Divide Whole Numbers',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\html{How many times does 72 go into 63052.<br><br>Solve the problem.}',
												answer: '\\css{\\grp{\\input{875}}{\\str{quotient}}{\\input{52}}{\\str{remainder}}}{divwhole}',
												controls: {
													"checkAnswer": true,
													"help": false
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
													"help": false
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
                                                problem: '\\str{Solve (9 / 1 + 8)}',
                                                answer: '\\input{17}',
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
                                                problem: '\\str{Solve 8 * 9 + 6}',
                                                answer: '\\input{78}',
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
                                                problem: '\\str{Solve 8 - (9 * 15)}',
                                                answer: '\\input{-127}',
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
                                                problem: '\\str{Solve (7 * 2 + 14)}',
                                                answer: '\\input{28}',
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
                                                problem: '\\str{Solve (4 + 9) - 8}',
                                                answer: '\\input{5}',
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
                                                problem: '\\str{Solve 4 - (7 / 1) - 7}',
                                                answer: '\\input{-3}',
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
                                                problem: '\\str{Solve (9 + 15 * 12 + 8)}',
                                                answer: '\\input{197}',
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
                                                problem: '\\str{Solve 28 + 29 / 1 - 22 + 8}',
                                                answer: '\\input{43}',
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
                                                problem: '\\str{Solve (17 * 29 + 19 - 46 * 45)}',
                                                answer: '\\input{-1558}',
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
                                                answer: '\\grp{\\input{2}}{\\str{·}}{\\input{5}}',
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
                                                answer: '\\grp{\\input{2}}{\\str{·}}{\\exp{\\input{3}}{\\input{2}}}',
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
                                                answer: '\\grp{\\exp{\\input{2}}{\\input{2}}}{\\str{·}}{\\exp{\\input{3}}{\\input{2}}}',
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
                                                answer: '\\grp{\\input{2}}{\\str{·}}{\\exp{\\input{5}}{\\input{2}}}',
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
                                                answer: '\\grp{\\input{2}}{\\str{·}}{\\input{59}}',
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
                                                answer: '\\grp{\\input{2}}{\\str{·}}{\\input{5}}{\\str{·}}{\\input{13}}',
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
                                                answer: '\\grp{\\input{5}}{\\str{·}}{\\input{29}}',
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
                                                answer: '\\grp{\\input{2}}{\\str{·}}{\\input{3}}{\\str{·}}{\\exp{\\input{7}}{\\input{2}}}',
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
                                                answer: '\\grp{\\exp{\\input{3}}{\\input{2}}}{\\str{·}}{\\input{19}}',
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
                                                answer: '\\grp{\\input{2}}{\\str{·}}{\\input{53}}',
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
                        children: []
                    }, {
                        title: '3 Decimals',
                        path: 'decimals',
                        children: []
                    }, {
                        title: '4 Ratios & Proportions',
                        path: 'ratios-proportions',
                        children: []
                    }, {
                        title: '5 Percents',
                        path: 'percents',
                        children: []
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
