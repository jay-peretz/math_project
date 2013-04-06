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
                                                    "help": true
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
                                                    "help": true
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
                                                    "help": true
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
                                                    "help": true
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
                                                    "help": true
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
                                                    "help": true
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
                                                    "help": true
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
                                                    "help": true
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
                                                    "help": true
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
                                                    "help": true
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
                            },{
                                title: '1.3 Comparing Whole Numbers',
                                path: '1.3-comparing-whole-numbers',
                                children: [
                                    {
        								title: 'Comparing Whole Numbers',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\row{\\str{80 \xA0}}{\\but{>}{F}}{\\str{\xA0 or \xA0}}{\\but{<}{T}}{\\str{\xA0 91}}',
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
												problem: '\\rowgrp{\\row{\\str{X \xA0}}{\\but{>}{F}}{\\str{\xA0 or \xA0}}{\\but{<}{T}}{\\str{\xA0 Y}}}{\\row{\\str{\xA0}}}{\\row{\\comparewholesgraph{25}{33}{20}{35}}}',
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
												problem: '\\row{\\str{85 \xA0}}{\\but{>}{T}}{\\str{\xA0 or \xA0}}{\\but{<}{F}}{\\str{\xA0 80}}',
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
												problem: '\\row{\\str{53 \xA0}}{\\but{>}{T}}{\\str{\xA0 or \xA0}}{\\but{<}{F}}{\\str{\xA0 50}}',
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
												problem: '\\rowgrp{\\row{\\str{X \xA0}}{\\but{>}{T}}{\\str{\xA0 or \xA0}}{\\but{<}{F}}{\\str{\xA0 Y}}}{\\row{\\str{\xA0}}}{\\row{\\comparewholesgraph{56}{48}{45}{60}}}',
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
												problem: '\\row{\\str{54 \xA0}}{\\but{>}{F}}{\\str{\xA0 or \xA0}}{\\but{<}{T}}{\\str{\xA0 60}}',
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
												problem: '\\row{\\str{86 \xA0}}{\\but{>}{F}}{\\str{\xA0 or \xA0}}{\\but{<}{T}}{\\str{\xA0 93}}',
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
												problem: '\\rowgrp{\\row{\\str{X \xA0}}{\\but{>}{T}}{\\str{\xA0 or \xA0}}{\\but{<}{F}}{\\str{\xA0 Y}}}{\\row{\\str{\xA0}}}{\\row{\\comparewholesgraph{86}{77}{72}{88}}}',
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
												problem: '\\row{\\str{47 \xA0}}{\\but{>}{F}}{\\str{\xA0 or \xA0}}{\\but{<}{T}}{\\str{\xA0 57}}',
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
												problem: '\\rowgrp{\\row{\\str{X \xA0}}{\\but{>}{F}}{\\str{\xA0 or \xA0}}{\\but{<}{T}}{\\str{\xA0 Y}}}{\\row{\\str{\xA0}}}{\\row{\\comparewholesgraph{83}{84}{72}{88}}}',
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
												problem: '\\row{\\str{80 \xA0}}{\\but{>}{F}}{\\str{\xA0 or \xA0}}{\\but{<}{T}}{\\str{\xA0 91}}',
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
												problem: '\\rowgrp{\\row{\\str{X \xA0}}{\\but{>}{F}}{\\str{\xA0 or \xA0}}{\\but{<}{T}}{\\str{\xA0 Y}}}{\\row{\\str{\xA0}}}{\\row{\\comparewholesgraph{25}{33}{20}{35}}}',
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
												problem: '\\rowgrp{\\row{\\str{X \xA0}}{\\but{>}{T}}{\\str{\xA0 or \xA0}}{\\but{<}{F}}{\\str{\xA0 Y}}}{\\row{\\str{\xA0}}}{\\row{\\comparewholesgraph{85}{80}{72}{88}}}',
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
												problem: '\\row{\\str{53 \xA0}}{\\but{>}{T}}{\\str{\xA0 or \xA0}}{\\but{<}{F}}{\\str{\xA0 50}}',
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
												problem: '\\rowgrp{\\row{\\str{X \xA0}}{\\but{>}{F}}{\\str{\xA0 or \xA0}}{\\but{<}{T}}{\\str{\xA0 Y}}}{\\row{\\str{\xA0}}}{\\row{\\comparewholesgraph{18}{25}{15}{30}}}',
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
												problem: '\\row{\\str{54 \xA0}}{\\but{>}{F}}{\\str{\xA0 or \xA0}}{\\but{<}{T}}{\\str{\xA0 60}}',
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
												problem: '\\rowgrp{\\row{\\str{X \xA0}}{\\but{>}{F}}{\\str{\xA0 or \xA0}}{\\but{<}{T}}{\\str{\xA0 Y}}}{\\row{\\str{\xA0}}}{\\row{\\comparewholesgraph{86}{93}{85}{98}}}',
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
												problem: '\\row{\\str{95 \xA0}}{\\but{>}{T}}{\\str{\xA0 or \xA0}}{\\but{<}{F}}{\\str{\xA0 77}}',
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
												problem: '\\rowgrp{\\row{\\str{X \xA0}}{\\but{>}{T}}{\\str{\xA0 or \xA0}}{\\but{<}{F}}{\\str{\xA0 Y}}}{\\row{\\str{\xA0}}}{\\row{\\comparewholesgraph{52}{48}{45}{60}}}',
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
												problem: '\\row{\\str{26 \xA0}}{\\but{>}{T}}{\\str{\xA0 or \xA0}}{\\but{<}{F}}{\\str{\xA0 15}}',
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
												problem: '\\addwholes{math}{partial}{[47, 59]}',
												answer: '\\input{106}',
												controls: {
													"checkAnswer": true,
													"help": true
												}
											}]
										}]
									},
									{
										title: 'Add Whole Numbers',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\addwholes{english}{partial}{[301,815]}',
												answer: '\\input{1116}',
												controls: {
													"checkAnswer": true,
													"help": true
												}
											}]
										}]
									},
									{
										title: 'Add Whole Numbers',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\addwholes{math}{partial}{[968,827]}',
												answer: '\\input{1795}',
												controls: {
													"checkAnswer": true,
													"help": true
												}
											}]
										}]
									},
									{
										title: 'Add Whole Numbers',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\addwholes{math}{partial}{[68,47]}',
												answer: '\\input{115}',
												controls: {
													"checkAnswer": true,
													"help": true
												}
											}]
										}]
									},
									{
										title: 'Add Whole Numbers',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\addwholes{english}{partial}{[9026,1911]}',
												answer: '\\input{10937}',
												controls: {
													"checkAnswer": true,
													"help": true
												}
											}]
										}]
									},
									{
										title: 'Add Whole Numbers',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\addwholes{math}{partial}{[3148,2584]}',
												answer: '\\input{5732}',
												controls: {
													"checkAnswer": true,
													"help": true
												}
											}]
										}]
									},
									{
										title: 'Add Whole Numbers',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\addwholes{english}{partial}{[618,489,115]}',
												answer: '\\input{1222}',
												controls: {
													"checkAnswer": true,
													"help": true
												}
											}]
										}]
									},
									{
										title: 'Add Whole Numbers',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\addwholes{math}{partial}{[1700,2233,4945]}',
												answer: '\\input{8878}',
												controls: {
													"checkAnswer": true,
													"help": true
												}
											}]
										}]
									},
									{
										title: 'Add Whole Numbers',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\addwholes{math}{partial}{[8850,4626,177,401]}',
												answer: '\\input{14054}',
												controls: {
													"checkAnswer": true,
													"help": true
												}
											}]
										}]
									},
									{
										title: 'Add Whole Numbers',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\addwholes{english}{partial}{[832,6223,2705,146]}',
												answer: '\\input{9906}',
												controls: {
													"checkAnswer": true,
													"help": true
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
												problem: '\\subtractwholes{english}{partial}{110}{99}',
												answer: '\\input{11}',
												controls: {
													"checkAnswer": true,
													"help": true
												}
											}]
										}]
									},
									{
										title: 'Subtract Whole Numbers',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\subtractwholes{math}{partial}{989}{711}',
												answer: '\\input{278}',
												controls: {
													"checkAnswer": true,
													"help": true
												}
											}]
										}]
									},
									{
										title: 'Subtract Whole Numbers',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\subtractwholes{english}{partial}{832}{86}',
												answer: '\\input{746}',
												controls: {
													"checkAnswer": true,
													"help": true
												}
											}]
										}]
									},
									{
										title: 'Subtract Whole Numbers',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\subtractwholes{math}{partial}{518}{68}',
												answer: '\\input{450}',
												controls: {
													"checkAnswer": true,
													"help": true
												}
											}]
										}]
									},
									{
										title: 'Subtract Whole Numbers',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\subtractwholes{math}{partial}{3749}{756}',
												answer: '\\input{2993}',
												controls: {
													"checkAnswer": true,
													"help": true
												}
											}]
										}]
									},
									{
										title: 'Subtract Whole Numbers',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\subtractwholes{math}{partial}{8889}{549}',
												answer: '\\input{8340}',
												controls: {
													"checkAnswer": true,
													"help": true
												}
											}]
										}]
									},
									{
										title: 'Subtract Whole Numbers',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\subtractwholes{english}{partial}{9475}{7493}',
												answer: '\\input{1982}',
												controls: {
													"checkAnswer": true,
													"help": true
												}
											}]
										}]
									},
									{
										title: 'Subtract Whole Numbers',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\subtractwholes{math}{partial}{8206}{6863}',
												answer: '\\input{1343}',
												controls: {
													"checkAnswer": true,
													"help": true
												}
											}]
										}]
									},
									{
										title: 'Subtract Whole Numbers',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\subtractwholes{english}{partial}{89686}{62438}',
												answer: '\\input{27248}',
												controls: {
													"checkAnswer": true,
													"help": true
												}
											}]
										}]
									},
									{
										title: 'Subtract Whole Numbers',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\subtractwholes{math}{partial}{45300}{20532}',
												answer: '\\input{24768}',
												controls: {
													"checkAnswer": true,
													"help": true													
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
                                                    "help": true
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
                                                    "help": true
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
                                                    "help": true
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
                                                    "help": true
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
                                                    "help": true
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
                                                    "help": true
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
                                                    "help": true
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
                                                    "help": true
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
                                                    "help": true
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
                                                    "help": true
												}
                                            }]
                                        }]
                                    },
                                ]
                            },
                            {// start of Justins work
                                title: '5.1 Using Divisibility Tests Using Divisibility Tests',
                                path: '5.1-using-divisibility-tests-using-divisibility-tests',
                                children: [
                                    {
        								title: 'Divisibility Test on Whole Numbers',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\str{Is 47 divisible by 7?}',
												answer: '\\row{\\but{YES}{F}}{\\but{NO}{T}}',
												controls: {
													"checkAnswer": false,
													"help": true
												}
											}]
										}]
									},
									{
										title: 'Divisibility Test on Whole Numbers',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\str{Is 26 divisible by 10?}',
    											answer: '\\row{\\but{YES}{F}}{\\but{NO}{T}}',
												controls: {
													"checkAnswer": false,
													"help": true
												}
											}]
										}]
									},
									{
										title: 'Divisibility Test on Whole Numbers',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\str{Is 119 divisible by 10?}',
        										answer: '\\row{\\but{YES}{F}}{\\but{NO}{T}}',
												controls: {
													"checkAnswer": false,
													"help": true
												}
											}]
										}]
									},
									{
										title: 'Divisibility Test on Whole Numbers',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\str{Is 9 divisible by 2?}',
        										answer: '\\row{\\but{YES}{F}}{\\but{NO}{T}}',
												controls: {
													"checkAnswer": false,
													"help": true
												}
											}]
										}]
									},
									{
										title: 'Divisibility Test on Whole Numbers',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\str{Is 132 divisible by 3?}',
        										answer: '\\row{\\but{YES}{T}}{\\but{NO}{F}}',
                                                controls: {
													"checkAnswer": false,
													"help": true
												}
											}]
										}]
									},
									{
										title: 'Divisibility Test on Whole Numbers',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\str{Is 85 divisible by 5?}',
        										answer: '\\row{\\but{YES}{T}}{\\but{NO}{F}}',
												controls: {
													"checkAnswer": false,
													"help": true
												}
											}]
										}]
									},
									{
										title: 'Divisibility Test on Whole Numbers',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\str{Is 323 divisible by 5?}',
        										answer: '\\row{\\but{YES}{F}}{\\but{NO}{T}}',
												controls: {
													"checkAnswer": false,
													"help": true
												}
											}]
										}]
									},
									{
										title: 'Divisibility Test on Whole Numbers',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\str{Is 109 divisible by 7?}',
        										answer: '\\row{\\but{YES}{F}}{\\but{NO}{T}}',
												controls: {
													"checkAnswer": false,
													"help": true
												}
											}]
										}]
									},
									{
    									title: 'Determine whether a Number is Prime or Composite',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\str{Is 346 divisible by 3?}',
            									answer: '\\row{\\but{YES}{F}}{\\but{NO}{T}}',
												controls: {
													"checkAnswer": false,
													"help": true
                                                }
                                            }]
                                        }]
                                    },
									{
										title: 'Determine whether a Number is Prime or Composite',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\str{Is 384 divisible by 2?}',
            									answer: '\\row{\\but{YES}{T}}{\\but{NO}{F}}',
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
                                title: '5.3 Identifying Prime and Composite Numbers',
                                path: '5.3-identifying-prime-and-composite-numbers',
                                children: [
                                    {
    									title: 'Determine whether a Number is Prime or Composite',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\str{Is 42 prime or composite?}',
												answer: '\\row{\\but{Prime}{F}}{\\but{Composite}{T}}',
												controls: {
													"checkAnswer": false,
													"help": true
												}
											}]
										}]
									},
									{
										title: 'Determine whether a Number is Prime or Composite',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\str{Is 51 prime or composite?}',
    											answer: '\\row{\\but{Prime}{F}}{\\but{Composite}{T}}',
												controls: {
													"checkAnswer": false,
													"help": true
												}
											}]
										}]
									},
									{
										title: 'Determine whether a Number is Prime or Composite',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\str{Is 94 prime or composite?}',
        										answer: '\\row{\\but{Prime}{F}}{\\but{Composite}{T}}',
												controls: {
													"checkAnswer": false,
													"help": true
												}
											}]
										}]
									},
									{
										title: 'Determine whether a Number is Prime or Composite',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\str{Is 43 prime or composite?}',
            									answer: '\\row{\\but{Prime}{T}}{\\but{Composite}{F}}',
												controls: {
													"checkAnswer": false,
													"help": true
												}
											}]
										}]
									},
									{
										title: 'Determine whether a Number is Prime or Composite',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\str{Is 27 prime or composite?}',
                								answer: '\\row{\\but{Prime}{F}}{\\but{Composite}{T}}',
												controls: {
													"checkAnswer": false,
													"help": true
												}
											}]
										}]
									},
									{
										title: 'Determine whether a Number is Prime or Composite',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\str{Is 73 prime or composite?}',
                								answer: '\\row{\\but{Prime}{T}}{\\but{Composite}{F}}',
												controls: {
													"checkAnswer": false,
													"help": true
												}
											}]
										}]
									},
									{
										title: 'Determine whether a Number is Prime or Composite',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\str{Is 47 prime or composite?}',
                								answer: '\\row{\\but{Prime}{T}}{\\but{Composite}{F}}',
												controls: {
													"checkAnswer": false,
													"help": true
												}
											}]
										}]
									},
									{
										title: 'Determine whether a Number is Prime or Composite',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\str{Is 189 prime or composite?}',
                								answer: '\\row{\\but{Prime}{F}}{\\but{Composite}{T}}',
												controls: {
													"checkAnswer": false,
													"help": true
												}
											}]
										}]
									},
									{
										title: 'Determine whether a Number is Prime or Composite',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\str{Is 187 prime or composite?}',
                								answer: '\\row{\\but{Prime}{F}}{\\but{Composite}{T}}',
												controls: {
													"checkAnswer": false,
													"help": true
												}
											}]
										}]
									},
									{
										title: 'Divisibility Test on Whole Numbers',
										children: [{
											title: 'Main Answer',
											children: [{
												problem: '\\str{Is 187 prime or composite?}',
        										answer: '\\row{\\but{Prime}{F}}{\\but{Composite}{T}}',
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
