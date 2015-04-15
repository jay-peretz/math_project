/*global angular */
angular.module('mathSkills').service('data_u_1', ['dataUtils', function (dataUtils) {
    var desc = {
			title: 'U.1 Area of Trapezoids and Shapes Consisting of Two Rectangles',
    		path: 'u.1-area-of-trapezoids-and-shapes-consisting-of-two-rectangles',
            children: []
        },
        template = {
			multipleChoice: {
                title: 'Area of Trapezoids and Shapes Consisting of Two Rectangles',
                children: [{
                    title: 'Main Answer',
                    children: [{
						problem: '\\rowgrp'
									+'{\\str{$probQuestion}}'
									+'{\\html{&nbsp;}}'
									+'{\\image{$illustration}{$alt}}',
                       answer: '\\pan{5}{7}'+
					  				'{\\css'+
										'{\\rowgrp'+
											'{\\grp{\\btn{A}{$buttonValueA}{marg}}{$buttonLabelA}}'+
											'{\\grp{\\btn{B}{$buttonValueB}{marg}}{$buttonLabelB}}'+
											'{\\grp{\\btn{C}{$buttonValueC}{marg}}{$buttonLabelC}}'+
											'{\\grp{\\btn{D}{$buttonValueD}{marg}}{$buttonLabelD}}'+
										'}'+
									'{margin-left-small}'+
								'}',
                        controls: {
                            "checkAnswer": true,
                            "help": '\\rowgrp'
										+'{\\html{$firstHelp}}'
										+'{\\html{&nbsp;}}'
										+'{\\html{$secondHelp}}'
										+'{\\html{&nbsp;}}'
										+'{\\html{$thirdHelp}}'
										+'{\\html{&nbsp;}}'
										+'{\\css'
											+'{\\grp'
												+'{\\html{Answer: }}'
												+'{\\str{$answerHelp}}'
											+'}'
											+'{help-answer-text}'
										+'}'
                        }
                    }]
                }]
            }
			,
			simpleWideQuestion: {
                title: 'Area of Trapezoids and Shapes Consisting of Two Rectangles',
                children: [{
                    title: 'Main Answer',
                    children: [{
						problem: '\\rowgrp'
									+'{\\str{$probQuestion}}'
									+'{\\html{&nbsp;}}'
									+'{\\image{$illustration}{$alt}{$width}{$height}}',
                       answer: '\\pan{6}{6}'+
					   				'{\\css'+
										'{$simpleAnswer}'+
										'{margin-left-small}'+
									'}',
                        controls: {
                            "checkAnswer": true,
                            "help": '\\rowgrp'
										+'{\\html{$helpTexts}}'
										+'{\\css'
											+'{\\grp'
												+'{\\html{Answer: &nbsp;}}'
												+'{$answerHelp}'
											+'}'
											+'{help-answer-text}'
										+'}',
                        }
                    }]
                }]
            },
			multipleChoiceSimpleHelp: {
                title: 'Area of Trapezoids and Shapes Consisting of Two Rectangles',
                children: [{
                    title: 'Main Answer',
                    children: [{
						problem: '\\rowgrp'
									+'{\\str{$probQuestion}}'
									+'{\\html{&nbsp;}}'
									+'{\\image{$illustration}{$alt}}',
                       answer: '\\pan{5}{7}'+
					  				'{\\css'+
										'{\\rowgrp'+
											'{\\grp{\\btn{A}{$buttonValueA}{marg}}{$buttonLabelA}}'+
											'{\\grp{\\btn{B}{$buttonValueB}{marg}}{$buttonLabelB}}'+
											'{\\grp{\\btn{C}{$buttonValueC}{marg}}{$buttonLabelC}}'+
											'{\\grp{\\btn{D}{$buttonValueD}{marg}}{$buttonLabelD}}'+
										'}'+
									'{margin-left-small}'+
								'}',
                        controls: {
                            "checkAnswer": true,
                            "help": '\\rowgrp'
										+'{\\html{$firstHelp}}'
										+'{\\html{&nbsp;}}'
										+'{\\css'
											+'{\\grp'
												+'{\\html{Answer: }}'
												+'{\\str{$answerHelp}}'
											+'}'
											+'{help-answer-text}'
										+'}'
                        }
                    }]
                }]
            }
        },
        data = [
			{ // problem 1
				probQuestion: 'The formula to find the area of a trapezoid is: <br><br>'
								+'A = <sup>1</sup>&#8260;<sub>2</sub> * (b<sub>1</sub> &#43; b<sub>2</sub>) * h.<br><br>Which two sides below represent b<sub>1</sub> and b<sub>2</sub>?<br><br>',
				illustration: 'T.1/Trapezoid_02.jpg',
				alt: 'Trapezoid',
				buttonValueA: 'F',
				buttonLabelA: dataUtils.pre('\\html{s<sub>2</sub> and s<sub>4</sub>}'),
				buttonValueB: 'F',
				buttonLabelB: dataUtils.pre('\\html{s<sub>1</sub> and s<sub>4</sub>}'),
				buttonValueC: 'T',
				buttonLabelC: dataUtils.pre('\\html{s<sub>1</sub> and s<sub>3</sub>}'),
				buttonValueD: 'F',
				buttonLabelD: dataUtils.pre('\\html{s<sub>2</sub> and s<sub>3</sub>}'),
				s1Value: 's<sub>1</sub>',
				s2Value: 's<sub>2</sub>',
				s3Value: 's<sub>3</sub>',
				s4Value: 's<sub>4</sub>',
                firstHelp: 'b<sub>1</sub> and b<sub>2</sub> in the formula are the two bases of the trapezoid.',
				secondHelp: 'The bases of a trapezoid are always the only two sides which are <strong><u>parallel</u></strong> to each other.',
				thirdHelp: '$$s1Value and $$s3Value are parallel sides. They are the bases.',
				answerHelp: 's<sub>1</sub> and s<sub>3</sub>',
				template: 'multipleChoice'
			}
			,
			{ // problem 2
				probQuestion: 'The formula to find the area of a trapezoid is: '
								+'A = <sup>1</sup>&#8260;<sub>2</sub> * (b<sub>1</sub> &#43; b<sub>2</sub>) * h. Which letter below represents <em>h</em> (the height of the trapezoid)?',
				probQuestion: 'The formula to find the area of a trapezoid is: <br><br>'
								+'A = <sup>1</sup>&#8260;<sub>2</sub> * (b<sub>1</sub> &#43; b<sub>2</sub>) * h.<br><br>Which letter below represents <em>h</em> (the height of the trapezoid)?<br><br>',
				illustration: 'T.1/Trapezoid_01.jpg',
				alt: 'Trapezoid',
				buttonValueA: 'F',
				buttonLabelA: dataUtils.pre('\\str{a or c}'),
				buttonValueB: 'F',
				buttonLabelB: dataUtils.pre('\\str{c}'),
				buttonValueC: 'T',
				buttonLabelC: dataUtils.pre('\\str{e or b}'),
				buttonValueD: 'F',
				buttonLabelD: dataUtils.pre('\\str{d}'),
                firstHelp: 'The height of a trapezoid is the distance between the two bases of the trapezoid.',
				secondHelp: 'Since a and c are the parallel sides of the trapezoid, they are the bases. The distance between them is either distance e or distance b. ',
				thirdHelp: 'd is <u>not</u> the height because it is a slanted line (not perpendicular to the bases).',
				answerHelp: 'e or b',
				template: 'multipleChoice'
			}
			,
			{ // problem 3
				probQuestion: 'Solve for the area of the following shape.',
				illustration: 'U.1/Trap_a_10in_b_4in_d_5in.jpg',
				alt: 'trapezoid',
				width: '450px',
				height: '175px',
				simpleAnswer: dataUtils.pre('\\grp'+
												'{\\input{46}}'+
												'{\\str{in<sup>2</sup>}}'
								),
                helpTexts: 'Identify the shape: &nbsp; Trapezoid<br><br>'
								+'Identify the two bases and the height of the figure.<br><br>'
								+'<table>'
									+'<tr><td>Side a (10) is b<sub>1</sub>.</td><td><span class=marginLeft80px>&nbsp;</span></td><td>b<sub>1</sub> = 10</td></tr>'
									+'<tr><td>Side c (10 &#43; 3) is b<sub>2</sub>.</td><td><span class=marginLeft80px>&nbsp;</span></td><td>b<sub>2</sub> = 13</td></tr>'
									+'<tr><td>Side b (4) is the height.</td><td><span class=marginLeft80px>&nbsp;</span></td><td>h = 4</td></tr>'
								+'</table><br><br>'
								+'Now we can write the formula and substitute.<br><br>'
								+'<table>'
									+'<tr><td>Formula:&nbsp;&nbsp;</td><td>A = <sup>1</sup>&#8260;<sub>2</sub> &bull; (b<sub>1</sub> &#43; b<sub>2</sub>) &bull; h</td></tr>'
									+'<tr><td>Substitution:&nbsp;&nbsp;</td><td>A = <sup>1</sup>&#8260;<sub>2</sub> &bull; (10 &#43; 13) &bull; 4</td></tr>'
									+'<tr><td>Solve:&nbsp;&nbsp;</td><td> A = 46</td></tr>'
								+'</table><br>',
				answerHelp: dataUtils.pre('\\str{46 sq. in. or 46 in<sup>2</sup>}'
								),
				template: 'simpleWideQuestion' 
			}
			,
			{ // problem 4
				probQuestion: 'Solve for the area of the following shape.',
				illustration: 'U.1/04_Trap_a_5in_b_2in_d_2.5in.jpg',
				alt: 'trapezoid',
				width: '450px',
				height: '173px',
				simpleAnswer: dataUtils.pre('\\grp'+
												'{\\input{11.5}}'+
												'{\\str{in<sup>2</sup>}}'
								),
                helpTexts: 'Identify the shape: &nbsp; Trapezoid<br><br>'
								+'Identify the two bases and the height of the figure.<br><br>'
								+'<table>'
									+'<tr><td>Side a (5) is b<sub>1</sub>.</td><td><span class=marginLeft80px>&nbsp;</span></td><td>b<sub>1</sub> = 5</td></tr>'
									+'<tr><td>Side c (5 &#43; 1.5) is b<sub>2</sub>.</td><td><span class=marginLeft80px>&nbsp;</span></td><td>b<sub>2</sub> = 6.5</td></tr>'
									+'<tr><td>Side b (2) is the height.</td><td><span class=marginLeft80px>&nbsp;</span></td><td>h = 2</td></tr>'
								+'</table><br><br>'
								+'Now we can write the formula and substitute.<br><br>'
								+'<table>'
									+'<tr><td>Formula:&nbsp;&nbsp;</td><td>A = <sup>1</sup>&#8260;<sub>2</sub> &bull; (b<sub>1</sub> &#43; b<sub>2</sub>) &bull; h</td></tr>'
									+'<tr><td>Substitution:&nbsp;&nbsp;</td><td>A = <sup>1</sup>&#8260;<sub>2</sub> &bull; (5 &#43; 6.5) &bull; 2</td></tr>'
									+'<tr><td>Solve:&nbsp;&nbsp;</td><td> A = 11.5</td></tr>'
								+'</table><br>',
				answerHelp: dataUtils.pre('\\str{11.5 sq. in. or 11.5 in<sup>2</sup>}'
								),
				template: 'simpleWideQuestion' 
			}
			,
			{ // problem 5
				probQuestion: 'Solve for the area of the following shape. Round the answer to the nearest tenth of a meter.',
				illustration: 'U.1/Trap_s1_8m_s2_3.75m_s4_3m.jpg',
				alt: 'trapezoid',
				width: '450px',
				height: '162px',
				simpleAnswer: dataUtils.pre('\\grp'+
												'{\\input{27.4}}'+
												'{\\str{m<sup>2</sup>}}'
								),
                helpTexts: 'Identify the shape: &nbsp; Trapezoid<br><br>'
								+'Identify the two bases and the height of the figure.<br><br>'
								+'<table>'
									+'<tr><td>s<sub>1</sub> (8) is b<sub>1</sub>.</td><td><span class=marginLeft80px>&nbsp;</span></td><td>b<sub>1</sub> = 8</td></tr>'
									+'<tr><td>s<sub>3</sub> (8 &#43; 2.25) is b<sub>2</sub>.</td><td><span class=marginLeft80px>&nbsp;</span></td><td>b<sub>2</sub> = 10.25</td></tr>'
									+'<tr><td>s<sub>4</sub> (3) is the height.</td><td><span class=marginLeft80px>&nbsp;</span></td><td>h = 3</td></tr>'
								+'</table><br><br>'
								+'Now we can write the formula and substitute.<br><br>'
								+'<table>'
									+'<tr><td>Formula:&nbsp;&nbsp;</td><td>A = <sup>1</sup>&#8260;<sub>2</sub> &bull; (b<sub>1</sub> &#43; b<sub>2</sub>) &bull; h</td></tr>'
									+'<tr><td>Substitution:&nbsp;&nbsp;</td><td>A = <sup>1</sup>&#8260;<sub>2</sub> &bull; (8 &#43; 10.25) &bull; 3</td></tr>'
									+'<tr><td>Solve:&nbsp;&nbsp;</td><td> A = 27.375</td></tr>'
								+'</table><br><br>'
								+'Round answer to the tenths place.<br><br>',
				answerHelp: dataUtils.pre('\\str{27.4 sq. m. or 27.4 m<sup>2</sup>}'
								),
				template: 'simpleWideQuestion' 
			}
			,
			{ // problem 6
				probQuestion: 'Solve for the area of the following shape.',
				illustration: 'U.1/06_Trap_s1_16m_s2_7.5m_s4_6m.jpg',
				alt: 'trapezoid',
				width: '450px',
				height: '165px',
				simpleAnswer: dataUtils.pre('\\grp'+
												'{\\input{109.5}}'+
												'{\\str{m<sup>2</sup>}}'
								),
                helpTexts: 'Identify the shape: &nbsp; Trapezoid<br><br>'
								+'Identify the two bases and the height of the figure.<br><br>'
								+'<table>'
									+'<tr><td>s<sub>1</sub> (16) is b<sub>1</sub>.</td><td><span class=marginLeft80px>&nbsp;</span></td><td>b<sub>1</sub> = 16</td></tr>'
									+'<tr><td>s<sub>3</sub> (16 &#43; 4.5) is b<sub>2</sub>.</td><td><span class=marginLeft80px>&nbsp;</span></td><td>b<sub>2</sub> = 20.5</td></tr>'
									+'<tr><td>s<sub>4</sub> (6) is the height.</td><td><span class=marginLeft80px>&nbsp;</span></td><td>h = 6</td></tr>'
								+'</table><br><br>'
								+'Now we can write the formula and substitute.<br><br>'
								+'<table>'
									+'<tr><td>Formula:&nbsp;&nbsp;</td><td>A = <sup>1</sup>&#8260;<sub>2</sub> &bull; (b<sub>1</sub> &#43; b<sub>2</sub>) &bull; h</td></tr>'
									+'<tr><td>Substitution:&nbsp;&nbsp;</td><td>A = <sup>1</sup>&#8260;<sub>2</sub> &bull; (16 &#43; 20.5) &bull; 6</td></tr>'
									+'<tr><td>Solve:&nbsp;&nbsp;</td><td> A = 109.5</td></tr>'
								+'</table><br>',
				answerHelp: dataUtils.pre('\\str{109.5 sq. m. or 109.5 m<sup>2</sup>}'
								),
				template: 'simpleWideQuestion' 
			}
			,
			{ // problem 7
				probQuestion: 'Solve for the area of the following shape.',
				illustration: 'U.1/07_Trap_s1_15cm_s2_12.5cm_H_10cm.jpg',
				alt: 'trapezoid',
				width: '400px',
				height: '188px',
				simpleAnswer: dataUtils.pre('\\grp'+
												'{\\input{225}}'+
												'{\\str{cm<sup>2</sup>}}'
								),
                helpTexts: 'Identify the shape: &nbsp; Trapezoid<br><br>'
								+'Identify the two bases and the height of the figure.<br><br>'
								+'<table>'
									+'<tr><td>s<sub>1</sub> (15) is b<sub>1</sub>.</td><td><span class=marginLeft80px>&nbsp;</span></td><td>b<sub>1</sub> = 15</td></tr>'
									+'<tr><td>s<sub>3</sub> (15 &#43; 7.5 &#43; 7.5) is b<sub>2</sub>.</td><td><span class=marginLeft80px>&nbsp;</span></td><td>b<sub>2</sub> = 30</td></tr>'
									+'<tr><td>The height is 10.</td><td><span class=marginLeft80px>&nbsp;</span></td><td>h = 10</td></tr>'
								+'</table><br><br>'
								+'Now we can write the formula and substitute.<br><br>'
								+'<table>'
									+'<tr><td>Formula:&nbsp;&nbsp;</td><td>A = <sup>1</sup>&#8260;<sub>2</sub> &bull; (b<sub>1</sub> &#43; b<sub>2</sub>) &bull; h</td></tr>'
									+'<tr><td>Substitution:&nbsp;&nbsp;</td><td>A = <sup>1</sup>&#8260;<sub>2</sub> &bull; (15 &#43; 30) &bull; 10</td></tr>'
									+'<tr><td>Solve:&nbsp;&nbsp;</td><td> A = 225</td></tr>'
								+'</table><br>',
				answerHelp: dataUtils.pre('\\str{225 sq. cm. or 225 cm<sup>2</sup>}'
								),
				template: 'simpleWideQuestion' 
			}
			,
			{ // problem 8
				probQuestion: 'Solve for the area of the following shape.',
				illustration: 'U.1/08_Trap_s1_7.5cm_s2_6.25cm.jpg',
				alt: 'trapezoid',
				width: '400px',
				height: '188px',
				simpleAnswer: dataUtils.pre('\\grp'+
												'{\\input{56.25}}'+
												'{\\str{cm<sup>2</sup>}}'
								),
                helpTexts: 'Identify the shape: &nbsp; Trapezoid<br><br>'
								+'Identify the two bases and the height of the figure.<br><br>'
								+'<table>'
									+'<tr><td>s<sub>1</sub> (7.5) is b<sub>1</sub>.</td><td><span class=marginLeft80px>&nbsp;</span></td><td>b<sub>1</sub> = 7.5</td></tr>'
									+'<tr><td>s<sub>3</sub> (7.5 &#43; 3.75 &#43; 3.75) is b<sub>2</sub>.</td><td><span class=marginLeft80px>&nbsp;</span></td><td>b<sub>2</sub> = 15</td></tr>'
									+'<tr><td>The height is 5.</td><td><span class=marginLeft80px>&nbsp;</span></td><td>h = 5</td></tr>'
								+'</table><br><br>'
								+'Now we can write the formula and substitute.<br><br>'
								+'<table>'
									+'<tr><td>Formula:&nbsp;&nbsp;</td><td>A = <sup>1</sup>&#8260;<sub>2</sub> &bull; (b<sub>1</sub> &#43; b<sub>2</sub>) &bull; h</td></tr>'
									+'<tr><td>Substitution:&nbsp;&nbsp;</td><td>A = <sup>1</sup>&#8260;<sub>2</sub> &bull; (7.5 &#43; 15) &bull; 5</td></tr>'
									+'<tr><td>Solve:&nbsp;&nbsp;</td><td> A = 56.25</td></tr>'
								+'</table><br>',
				answerHelp: dataUtils.pre('\\str{56.25 sq. cm. or 56.25 cm<sup>2</sup>}'
								),
				template: 'simpleWideQuestion' 
			}
			,
			{ // problem 9
				probQuestion: 'Solve for the area of the following shape.',
				illustration: 'U.1/09_Trap_a_22ft_b_25ft_H_22ft.jpg',
				alt: 'trapezoid',
				width: '400px',
				height: '212px',
				simpleAnswer: dataUtils.pre('\\grp'+
												'{\\input{740}}'+
												'{\\str{ft<sup>2</sup>}}'
								),
                helpTexts: 'Identify the shape: &nbsp; Trapezoid<br><br>'
								+'Identify the two bases and the height of the figure.<br><br>'
								+'<table>'
									+'<tr><td>s<sub>1</sub> (22) is b<sub>1</sub>.</td><td><span class=marginLeft80px>&nbsp;</span></td><td>b<sub>1</sub> = 22</td></tr>'
									+'<tr><td>s<sub>3</sub> (22 &#43; 15 &#43; 15) is b<sub>2</sub>.</td><td><span class=marginLeft80px>&nbsp;</span></td><td>b<sub>2</sub> = 52</td></tr>'
									+'<tr><td>The height is 20.</td><td><span class=marginLeft80px>&nbsp;</span></td><td>h = 20</td></tr>'
								+'</table><br><br>'
								+'Now we can write the formula and substitute.<br><br>'
								+'<table>'
									+'<tr><td>Formula:&nbsp;&nbsp;</td><td>A = <sup>1</sup>&#8260;<sub>2</sub> &bull; (b<sub>1</sub> &#43; b<sub>2</sub>) &bull; h</td></tr>'
									+'<tr><td>Substitution:&nbsp;&nbsp;</td><td>A = <sup>1</sup>&#8260;<sub>2</sub> &bull; (22 &#43; 52) &bull; 20</td></tr>'
									+'<tr><td>Solve:&nbsp;&nbsp;</td><td> A = 740</td></tr>'
								+'</table><br>',
				answerHelp: dataUtils.pre('\\str{740 sq. ft. or 740 ft<sup>2</sup>}'
								),
				template: 'simpleWideQuestion' 
			}
			,
			{ // problem 10
				probQuestion: 'Solve for the area of the following shape.',
				illustration: 'U.1/10_Trap_a_33ft_b_37.5ft_H_30ft.jpg',
				alt: 'trapezoid',
				width: '400px',
				height: '208px',
				simpleAnswer: dataUtils.pre('\\grp'+
												'{\\input{1665}}'+
												'{\\str{ft<sup>2</sup>}}'
								),
                helpTexts: 'Identify the shape: &nbsp; Trapezoid<br><br>'
								+'Identify the two bases and the height of the figure.<br><br>'
								+'<table>'
									+'<tr><td>s<sub>1</sub> (33) is b<sub>1</sub>.</td><td><span class=marginLeft80px>&nbsp;</span></td><td>b<sub>1</sub> = 33</td></tr>'
									+'<tr><td>s<sub>3</sub> (33 &#43; 22.5 &#43; 22.5) is b<sub>2</sub>.</td><td><span class=marginLeft80px>&nbsp;</span></td><td>b<sub>2</sub> = 78</td></tr>'
									+'<tr><td>The height is 30.</td><td><span class=marginLeft80px>&nbsp;</span></td><td>h = 30</td></tr>'
								+'</table><br><br>'
								+'Now we can write the formula and substitute.<br><br>'
								+'<table>'
									+'<tr><td>Formula:&nbsp;&nbsp;</td><td>A = <sup>1</sup>&#8260;<sub>2</sub> &bull; (b<sub>1</sub> &#43; b<sub>2</sub>) &bull; h</td></tr>'
									+'<tr><td>Substitution:&nbsp;&nbsp;</td><td>A = <sup>1</sup>&#8260;<sub>2</sub> &bull; (33 &#43; 78) &bull; 30</td></tr>'
									+'<tr><td>Solve:&nbsp;&nbsp;</td><td> A = 1665</td></tr>'
								+'</table><br>',
				answerHelp: dataUtils.pre('\\str{1665 sq. ft. or 1665 ft<sup>2</sup>}'
								),
				template: 'simpleWideQuestion' 
			}
			,
			{ // problem 11
				probQuestion: 'Choose the expression (the length by the width) that makes a rectangle.<br><br>',
				illustration: 'T.1/Notched_Rectangle_04.jpg',
				alt: 'Notched Rectangle',
				buttonValueA: 'F',
				buttonLabelA: dataUtils.pre('\\html{s<sub>6</sub> by s<sub>3</sub>}'),
				buttonValueB: 'F',
				buttonLabelB: dataUtils.pre('\\html{s<sub>1</sub> by s<sub>3</sub>}'),
				buttonValueC: 'T',
				buttonLabelC: dataUtils.pre('\\html{s<sub>5</sub> by s<sub>6</sub>}'),
				buttonValueD: 'F',
				buttonLabelD: dataUtils.pre('\\html{s<sub>1</sub> by s<sub>4</sub>}'),
                firstHelp: 's<sub>5</sub> is a length and s<sub>6</sub> is a width that forms a rectangle. None of the other given pairs of sides form the length and width of a rectangle. ',
				answerHelp: 's<sub>5</sub> by s<sub>6</sub>',
				template: 'multipleChoiceSimpleHelp'
			}
			,
			{ // problem 12
				probQuestion: 'Choose the expression (the length by the width) that makes a rectangle.<br><br>',
				illustration: 'T.1/Notched_Rectangle_04.jpg',
				alt: 'Notched Rectangle',
				buttonValueA: 'T',
				buttonLabelA: dataUtils.pre('\\html{s<sub>2</sub> by s<sub>3</sub>}'),
				buttonValueB: 'F',
				buttonLabelB: dataUtils.pre('\\html{s<sub>1</sub> by s<sub>5</sub>}'),
				buttonValueC: 'F',
				buttonLabelC: dataUtils.pre('\\html{s<sub>1</sub> by s<sub>4</sub>}'),
				buttonValueD: 'F',
				buttonLabelD: dataUtils.pre('\\html{s<sub>1</sub> by s<sub>4</sub>}'),
                firstHelp: 's<sub>3</sub> is a length and s<sub>2</sub> is a width that forms a rectangle. None of the other given pairs of sides form the length and width of a rectangle. ',
				answerHelp: 's<sub>2</sub> by s<sub>3</sub>',
				template: 'multipleChoiceSimpleHelp'
			}
			,
			{ // problem 13
				probQuestion: 'Choose the formula given below which will solve for the area of the figure.<br><br>',
				illustration: 'T.1/Notched_Rectangle_04.jpg',
				alt: 'Notched Rectangle',
				buttonValueA: 'F',
				buttonLabelA: dataUtils.pre('\\html{A = (s<sub>4</sub> &bull; s<sub>3</sub>) + (s<sub>2</sub> &bull; s<sub>3</sub>)}'),
				buttonValueB: 'T',
				buttonLabelB: dataUtils.pre('\\html{A = (s<sub>5</sub> &bull; s<sub>6</sub>) + (s<sub>2</sub> &bull; s<sub>3</sub>)}'),
				buttonValueC: 'F',
				buttonLabelC: dataUtils.pre('\\html{A = (s<sub>5</sub> &bull; s<sub>6</sub>) + (s<sub>4</sub> &bull; s<sub>1</sub>)}'),
				buttonValueD: 'F',
				buttonLabelD: dataUtils.pre('\\html{A = (s<sub>4</sub> &bull; s<sub>5</sub>) + (s<sub>2</sub> &bull; s<sub>3</sub>)}'),
				s1Value: 's<sub>1</sub>',
				s2Value: 's<sub>2</sub>',
				s3Value: 's<sub>3</sub>',
				s4Value: 's<sub>4</sub>',
				s5Value: 's<sub>5</sub>',
				s6Value: 's<sub>6</sub>',
                firstHelp: 'Let\'s look at the possible answers:<br><br>'
								+'(a) &nbsp; A = ($$s4Value &bull; $$s3Value)  +  ($$s2Value &bull; $$s3Value)<br><br>'
								+'$$s4Value &bull; $$s3Value and $$s2Value &bull; $$s3Value will each solve for the area of a rectangle. However, the area of the rectangle with dimensions of $$s4Value &bull; $$s3Value by itself is larger than the area of the shape we want to solve for. (a) can\'t be correct.',
				secondHelp: '(c) &nbsp; A = ($$s5Value &bull; $$s6Value)  +  ($$s4Value &bull; $$s1Value)<br><br>'
								+'$$s5Value &bull; $$s6Value solves for the area of a rectangle. However, $$s4Value &bull; $$s1Value will not solve for an area; $$s4Value and $$s1Value are not the dimensions (the length and width) of a rectangle. The sides of $$s4Value and $$s1Value do not meet to create a box. (c) can\'t be correct.',
				thirdHelp: '(d) &nbsp; A = ($$s4Value &bull; $$s5Value)  +  ($$s2Value &bull; $$s3Value)<br><br>'
								+'$$s4Value &bull; $$s5Value and $$s2Value &bull; $$s3Value will each solve for the area of a rectangle. However, the areas of these two rectangles overlap each other. The area at the bottom left of this figure is incorrectly counted twice. (d) can\'t be correct.<br><br>'
							+'(b) &nbsp; A = ($$s5Value &bull; $$s6Value)  +  ($$s2Value &bull; $$s3Value)<br><br>'
								+'$$s5Value &bull; $$s6Value and $$s2Value &bull; $$s3Value will each solve for the area of a rectangle. The areas of these two rectangles do not overlap each other. Together they correctly measure the entire area of the given shape. (b) is the correct answer.',
				answerHelp: 'A = (s<sub>5</sub> &bull; s<sub>6</sub>) + (s<sub>2</sub> &bull; s<sub>3</sub>)',
				template: 'multipleChoice'
			}
			,
			{ // problem 14
				probQuestion: 'Choose the formula given below which will solve for the area of the figure.<br><br>',
				illustration: 'T.1/Notched_Rectangle_04.jpg',
				alt: 'Notched Rectangle',
				buttonValueA: 'F',
				buttonLabelA: dataUtils.pre('\\html{A = (s<sub>4</sub> &bull; s<sub>2</sub>) + (s<sub>5</sub> &bull; s<sub>6</sub>)}'),
				buttonValueB: 'F',
				buttonLabelB: dataUtils.pre('\\html{A = (s<sub>4</sub> &bull; s<sub>5</sub>) + (s<sub>2</sub> &bull; s<sub>3</sub>)}'),
				buttonValueC: 'T',
				buttonLabelC: dataUtils.pre('\\html{A = (s<sub>4</sub> &bull; s<sub>5</sub>) + (s<sub>1</sub> &bull; s<sub>2</sub>)}'),
				buttonValueD: 'F',
				buttonLabelD: dataUtils.pre('\\html{A = (s<sub>2</sub> &bull; s<sub>3</sub>) + (s<sub>6</sub> &bull; s<sub>1</sub>)}'),
				s1Value: 's<sub>1</sub>',
				s2Value: 's<sub>2</sub>',
				s3Value: 's<sub>3</sub>',
				s4Value: 's<sub>4</sub>',
				s5Value: 's<sub>5</sub>',
				s6Value: 's<sub>6</sub>',
                firstHelp: 'Let\'s look at the possible answers:<br><br>'
								+'(a) &nbsp; A = ($$s4Value &bull; $$s2Value)  +  ($$s5Value &bull; $$s6Value)<br><br>'
								+'$$s5Value &bull; $$s6Value solves for the area of a rectangle. However, $$s4Value &bull; $$s2Value will not solve for an area;  $$s4Value and $$s2Value are not the dimensions (the length and width) of a rectangle. The sides of $$s4Value and $$s2Value do not meet to create a box. (a) can\'t be correct.',
				secondHelp: '(b) &nbsp; A = ($$s4Value &bull; $$s5Value)  +  ($$s2Value &bull; $$s3Value)<br><br>'
								+'$$s4Value &bull; $$s5Value and $$s2Value &bull; $$s3Value will each solve for the area of a rectangle. However, the areas of these two rectangles overlap each other. The area at the bottom left of this figure is incorrectly counted twice. (b) can\'t be correct.',
				thirdHelp: '(d) &nbsp; A = ($$s2Value &bull; $$s3Value)  +  ($$s6Value &bull; $$s1Value)<br><br>'
								+'$$s2Value &bull; $$s3Value and $$s6Value &bull; $$s1Value will each solve for the area of a rectangle. However, the area of the rectangle with dimensions of $$s6Value &bull; $$s1Value measures the area of a rectangle <u>outside</u> the shape we want to solve for. (d) can\'t be correct.<br><br>'
							+'(c) &nbsp; A = ($$s4Value &bull; $$s5Value)  +  ($$s1Value &bull; $$s2Value)<br><br>'
								+'$$s4Value &bull; $$s5Value and $$s1Value &bull; $$s2Value will each solve for the area of a rectangle. The areas of these two rectangles do not overlap each other. Together they correctly measure the entire area of the given shape. (c) is the correct answer.',
				answerHelp: 'A = (s<sub>4</sub> &bull; s<sub>5</sub>) + (s<sub>1</sub> &bull; s<sub>2</sub>)',
				template: 'multipleChoice'
			}
			,
			{ // problem 15
				probQuestion: 'Choose the formula given below which will solve for the area of the figure.<br><br>',
				illustration: 'T.1/Notched_Rectangle_04.jpg',
				alt: 'Notched Rectangle',
				buttonValueA: 'F',
				buttonLabelA: dataUtils.pre('\\html{A = (s<sub>5</sub> &bull; s<sub>3</sub>) &#8722; (s<sub>5</sub> &bull; s<sub>6</sub>)}'),
				buttonValueB: 'F',
				buttonLabelB: dataUtils.pre('\\html{A = (s<sub>2</sub> &bull; s<sub>3</sub>) &#8722; (s<sub>5</sub> &bull; s<sub>6</sub>)}'),
				buttonValueC: 'T',
				buttonLabelC: dataUtils.pre('\\html{A = (s<sub>4</sub> &bull; s<sub>3</sub>) &#8722; (s<sub>1</sub> &bull; s<sub>6</sub>)}'),
				buttonValueD: 'F',
				buttonLabelD: dataUtils.pre('\\html{A = (s<sub>4</sub> &bull; s<sub>1</sub>) &#8722; (s<sub>6</sub> &bull; s<sub>1</sub>)}'),
				s1Value: 's<sub>1</sub>',
				s2Value: 's<sub>2</sub>',
				s3Value: 's<sub>3</sub>',
				s4Value: 's<sub>4</sub>',
				s5Value: 's<sub>5</sub>',
				s6Value: 's<sub>6</sub>',
                firstHelp: 'Let\'s look at the possible answers:<br><br>'
								+'(a) &nbsp; A = ($$s5Value &bull; $$s3Value)  &#8722; ($$s5Value &bull; $$s6Value)<br><br>'
								+'$$s5Value &bull; $$s3Value will not solve for an area;  $$s5Value and $$s3Value are <strong><u>not</u></strong> the dimensions (the length and width) of a rectangle. The sides of $$s5Value and $$s3Value do not meet to create a box. (a) can\'t be correct.',
				secondHelp: '(b) &nbsp; A = ($$s2Value &bull; $$s3Value)  &#8722;  ($$s5Value &bull; $$s6Value)<br><br>'
								+'$$s2Value &bull; $$s3Value and $$s5Value &bull; $$s6Value will each solve for the area of a rectangle. However, the area of the first rectangle ($$s2Value &bull; $$s3Value) is less than the total area of the shape we are measuring. Therefore, we can\'t be subtracting the second area ($$s5Value &bull; $$s6Value). We would need to add to get more area. (b) can\'t be correct.',
				thirdHelp: '(d) &nbsp; A = ($$s4Value &bull; $$s1Value)  &#8722;  ($$s6Value &bull; $$s1Value)<br><br>'
								+'$$s4Value &bull; $$s1Value will not solve for an area; $$s4Value and $$s1Value are <strong><u>not</u></strong> the dimensions (the length and width) of a rectangle. The sides of $$s4Value and $$s1Value do not meet to create a box. (d) can\'t be correct.<br><br>'
							+'(c) &nbsp; A = ($$s4Value &bull; $$s3Value)  &#8722;  ($$s1Value &bull; $$s6Value)<br><br>'
								+'$$s4Value &bull; $$s3Value and $$s1Value &bull; $$s6Value will each solve for the area of a rectangle. The area of the first rectangle ($$s4Value &bull; $$s3Value) is larger than the area of the shape we are measuring. If we subtract the area of the second rectangle ($$s1Value &bull; $$s6Value) we are left with exactly the area of the given shape.  (c) is the correct answer.',
				answerHelp: 'A = (s<sub>4</sub> &bull; s<sub>3</sub>) - (s<sub>1</sub> &bull; s<sub>6</sub>)',
				template: 'multipleChoice'
			}
			,
			{ // problem 16
				probQuestion: 'Solve for the area of the following shape. All measurements are in inches.',
				illustration: 'T.1/Notched_Rectangle_02_v2.jpg',
				alt: 'notched rectangle',
				width: '350px',
				height: '257px',
				simpleAnswer: dataUtils.pre('\\pan{5}{6}'+
												'{\\grp'+
													'{\\input{60}}'+
													'{\\str{in<sup>2</sup>}}'+
												'}'
								),
				s1Value: 's<sub>1</sub>',
				s2Value: 's<sub>2</sub>',
				s3Value: 's<sub>3</sub>',
				s4Value: 's<sub>4</sub>',
				s5Value: 's<sub>5</sub>',
				s6Value: 's<sub>6</sub>',
                helpTexts: 'Identify the shape: &nbsp; An Irregular Shape that Consists of Two Rectangles<br><br>'
				+'One way to solve for the area of this shape is to visualize and identify the area formulas for the following two rectangles:<br><br>'
				+'(1) $$s6Value &bull; $$s5Value<br>'
				+'(2) $$s2Value &bull; $$s3Value<br><br>'
				+'We need to solve for the unknown length of $$s2Value.<br><br>'
				+'$$s2Value = $$s6Value + $$s4Value<br>'
				+'$$s2Value = 3 + 5<br>'
				+'<strong>$$s2Value = 8</strong><br><br>'
				+'Now we can write the formula and substitute.<br><br>'
				+'<table><tr><td>Formula:&nbsp;</td><td>A = ($$s6Value &bull; $$s5Value) + ($$s2Value &bull; $$s3Value)</td></tr>'
										+'<tr><td>Substitution:&nbsp;</td><td>A = (3 &bull; 4) + (8 &bull; 6)</td></tr>'
										+'<tr><td>Solve:&nbsp;</td><td> A = 60</td></tr></table><br>',
				answerHelp: dataUtils.pre('\\str{60 sq. in or 60 in<sup>2</sup>}'
								),
				template: 'simpleWideQuestion' 
			}
			,
			{ // problem 17
				probQuestion: 'Solve for the area of the following shape. All measurements are in feet.',
				illustration: 'T.1/Notched_Rectangle_01.jpg',
				alt: 'notched rectangle',
				width: '400px',
				height: '216px',
				simpleAnswer: dataUtils.pre('\\grp'+
												'{\\input{148}}'+
												'{\\str{ft<sup>2</sup>}}'
								),
                helpTexts: 'Identify the shape: &nbsp; An Irregular Shape that Consists of Two Rectangles<br><br>'
				+'One way to solve for the area of this shape is to visualize and identify the area formulas for the following two rectangles:<br><br>'
				+'(1) c &bull; d<br>'
				+'(2) a &bull; f<br><br>'
				+'We need to solve for the unknown length of side c.<br><br>'
				+'c = e &#8722; a<br>'
				+'c = 16 &#8722; 12<br>'
				+'<strong>c = 4</strong><br><br>'
				+'Now we can write the formula and substitute.<br><br>'
				+'<table><tr><td>Formula:&nbsp;</td><td>A = (c &bull; d) + (a &bull; f)</td></tr>'
										+'<tr><td>Substitution:&nbsp;</td><td>A = (4 &bull; 7) + (12 &bull; 10)</td></tr>'
										+'<tr><td>Solve:&nbsp;</td><td> A = 148</td></tr></table><br>',
				answerHelp: dataUtils.pre('\\str{148 sq. ft or 148 ft<sup>2</sup>}'
								),
				template: 'simpleWideQuestion' 
			}
			,
			{ // problem 18
				probQuestion: 'Solve for the area of the following shape. All measurements are in centimeters.<br><br>'
							+'$$s1Value = 4 <sup>1</sup>&#8260;<sub>5</sub><br>'
							+'$$s2Value = 3 <sup>1</sup>&#8260;<sub>2</sub><br>'
							+'$$s4Value = 6 <sup>1</sup>&#8260;<sub>4</sub><br>'
							+'$$s5Value = 1 <sup>1</sup>&#8260;<sub>5</sub><br><br>',
				illustration: 'T.1/Notched_Rectangle_04.jpg',
				alt: 'notched rectangle',
				width: '318px',
				height: '350px',
				s1Value: 's<sub>1</sub>',
				s2Value: 's<sub>2</sub>',
				s3Value: 's<sub>3</sub>',
				s4Value: 's<sub>4</sub>',
				s5Value: 's<sub>5</sub>',
				s6Value: 's<sub>6</sub>',
				simpleAnswer: dataUtils.pre('\\grp'+
												'{\\mixed{\\input{22}}{\\frac{\\input{1}}{\\input{5}}}}'+
												'{\\str{cm<sup>2</sup>}}'
								),
                helpTexts: 'Identify the shape: &nbsp; An Irregular Shape that Consists of Two Rectangles<br><br>'
				+'One way to solve for the area of this shape is to visualize and identify the area formulas for the following two rectangles:<br><br>'
				+'(1) $$s5Value &bull; $$s6Value<br>'
				+'(2) $$s2Value &bull; $$s3Value<br><br>'
				+'We need to solve for the unknown lengths of $$s6Value and $$s3Value.<br><br>'
								+'<table>'
									+'<tr><td>$$s6Value = $$s4Value &#8722; $$s2Value</td><td><span class=marginLeft80px>&nbsp;</span></td><td>$$s3Value = $$s1Value + $$s5Value</td></tr>'
									+'<tr><td>$$s6Value = 6 <sup>1</sup>&#8260;<sub>4</sub> &#8722; 3 <sup>1</sup>&#8260;<sub>2</sub></td><td><span class=marginLeft80px>&nbsp;</span></td><td>$$s3Value = 4 <sup>1</sup>&#8260;<sub>5</sub> + 1 <sup>1</sup>&#8260;<sub>5</sub></td></tr>'
									+'<tr><td><strong>$$s6Value = 2 <sup>3</sup>&#8260;<sub>4</sub></strong></td><td><span class=marginLeft80px>&nbsp;</span></td><td><strong>$$s3Value = 5 <sup>2</sup>&#8260;<sub>5</sub></strong></td></tr>'
								+'</table><br><br>'
								+'Now we can write the formula and substitute.<br><br>'
								+'<table>'
									+'<tr><td>Formula:&nbsp;&nbsp;</td><td>A = ($$s5Value &bull; $$s6Value) + ($$s2Value &bull; $$s3Value)</td></tr>'
									+'<tr><td>Substitution:&nbsp;&nbsp;</td><td>A = (1 <sup>1</sup>&#8260;<sub>5</sub> &bull; 2 <sup>3</sup>&#8260;<sub>4</sub>) + (3 <sup>1</sup>&#8260;<sub>2</sub> &bull; 5 <sup>2</sup>&#8260;<sub>5</sub>)</td></tr>'
									+'<tr><td>&nbsp;</td><td>A = (3 <sup>3</sup>&#8260;<sub>10</sub>) + (18 <sup>9</sup>&#8260;<sub>10</sub>)</td></tr>'
									+'<tr><td>Solve:&nbsp;&nbsp;</td><td> A = 22 <sup>1</sup>&#8260;<sub>5</sub></td></tr>'
								+'</table><br><br>',
				answerHelp: dataUtils.pre('\\str{22 <sup>1</sup>&#8260;<sub>5</sub> sq. cm. or 22 <sup>1</sup>&#8260;<sub>5</sub> cm<sup>2</sup>}'
								),
				template: 'simpleWideQuestion' 
			}
        ],
		shuffle = [
				{ problems: [1], total: 1},
				{ problems: [2], total: 1},
				{ problems: [3,4], total: 1},
				{ problems: [5,6], total: 1},
				{ problems: [7,8], total: 1},
				{ problems: [9,10], total: 1},
				{ problems: [11], total: 1},
				{ problems: [12], total: 1},
				{ problems: [13], total: 1},
				{ problems: [14], total: 1},
				{ problems: [15], total: 1},
				{ problems: [16], total: 1},
				{ problems: [17], total: 1},
				{ problems: [18], total: 1}
		];
		//return dataUtils.build(desc, template, data);
    
    	return dataUtils.build(desc, template, data, shuffle);
}]);