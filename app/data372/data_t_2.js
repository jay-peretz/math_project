/*global angular */
angular.module('mathSkills').service('data_t_2', ['dataUtils', function (dataUtils) {
    var desc = {
			title: 'T.2 Perimeter of Half Circles and Shapes Consisting of a Half Circle and a Rectangle',
    		path: 't.2-perimeter-of-half-circles-and-shapes-consisting-of-a-half-circle-and-a-rectangle',
            children: []
        },
        template = {
			multipleChoice: {
                title: 'Perimeter of Half Circles and Shapes Consisting of a Half Circle and a Rectangle',
                children: [{
                    title: 'Main Answer',
                    children: [{
						problem: '\\rowgrp'
									+'{\\html{$probQuestion}}'
									+'{\\html{&nbsp;}}'
									+'{\\image{$illustration}}',
                       answer: '\\css'+
									'{\\rowgrp'+
										'{\\grp{\\btn{A}{$buttonValueA}{marg}}{$buttonLabelA}}'+
										'{\\grp{\\btn{B}{$buttonValueB}{marg}}{$buttonLabelB}}'+
										'{\\grp{\\btn{C}{$buttonValueC}{marg}}{$buttonLabelC}}'+
										'{\\grp{\\btn{D}{$buttonValueD}{marg}}{$buttonLabelD}}'+
									'}'+
								'{margin-left-small}',
                        controls: {
                            "checkAnswer": true,
                            "help": '\\rowgrp'
										+'{\\str{$firstHelp}}'
										+'{\\html{&nbsp;}}'
										+'{\\str{$secondHelp}}'
										+'{\\html{&nbsp;}}'
										+'{\\str{$thirdHelp}}'
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
            },
			simpleQuestion: {
                title: 'Perimeter of Half Circles and Shapes Consisting of a Half Circle and a Rectangle',
                children: [{
                    title: 'Main Answer',
                    children: [{
						problem: '\\rowgrp'
									+'{\\str{$probQuestion}}'
									+'{\\html{&nbsp;}}'
									+'{\\html{&nbsp;}}'
									+'{\\css'
										+'{\\image{$illustration}{$alt}{$width}{$height}}'
										+'{$imageClass}'
									+'}',
                       answer: '\\css'+
					   				'{$simpleAnswer}'+
									'{margin-left-small}',
                        controls: {
                            "checkAnswer": true,
                            "help": '\\rowgrp'
										+'{\\str{$helpTexts}}'
										+'{\\css'
											+'{\\grp'
												+'{\\html{Answer$answerRound: &nbsp;}}'
												+'{$answerHelp}'
											+'}'
											+'{help-answer-text}'
										+'}'
                        }
                    }]
                }]
            },
			question2ImageHelp: {
                title: 'Perimeter of Half Circles and Shapes Consisting of a Half Circle and a Rectangle',
                children: [{
                    title: 'Main Answer',
                    children: [{
						problem: '\\rowgrp'
									+'{\\str{$probQuestion}}'
									+'{\\html{&nbsp;}}'
									+'{\\html{&nbsp;}}'
									+'{\\css'
										+'{\\image{$mainIllustration}{$alt}{$width}{$height}}'
										+'{$imageClass}'
									+'}',
                       answer: '\\css'+
					   				'{$simpleAnswer}'+
									'{margin-left-small}',
                        controls: {
                            "checkAnswer": true,
                            "help": '\\rowgrp'
										 	+'{\\str{$firstHelpText}}'
											+'{\\str{&nbsp;}}'
											+'{\\grp'
												+'{\\str{&nbsp;}}'
												+'{\\image{$firstHelpIllustration}{$firstHelpAlt}{$firstHelpWidth}{$firstHelpHeight}}'
												+'{\\str{&nbsp;}}'
												+'{\\str{becomes}}'
												+'{\\str{&nbsp;}}'
												+'{\\image{$secondHelpIllustration}{$secondHelpAlt}{$secondHelpWidth}{$secondHelpHeight}}'
											+'}'
											+'{\\str{&nbsp;}}'
											+'{\\str{The closed half circle is in fact the same distance as the open half circle plus the distance of the diameter.}}'
											 +'{\\str{&nbsp;}}'
											 +'{\\str{The perimeter of the closed half circle can be found by adding together these two distances.}}'
											 +'{\\str{&nbsp;}}'
											 +'{\\str{Perimeter = (distance of <sup>1</sup>&#8260;<sub>2</sub> circumference) &#43; (diameter)}}'
											 +'{\\str{&nbsp;}}'
											 +'{\\str{In this case we are given:}}'
											 +'{\\str{&nbsp;}}'
											 +'{\\str{(1) distance of <sup>1</sup>&#8260;<sub>2</sub> circumference = $halfCircumference}}'
											 +'{\\str{&nbsp;}}'
											 +'{\\str{(2) diameter = $helpDiameter}}'
											  +'{\\str{&nbsp;}}'
											 +'{\\str{Perimeter of closed half circle = $helpPerimeter}}'
											+'{\\str{&nbsp;}}'
											+'{\\css'
												+'{\\grp'
													+'{\\html{Answer: &nbsp;}}'
													+'{$answerHelp}'
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
				probQuestion: 'The arc below is an open half circle. What is the formula to find the distance of this arc?<br><br>',
				illustration: 'T.2/Half_Circle_Open02.jpg',
				alt: 'open half circle',
				width: '100px',
				height: '200px',
				buttonValueA: 'T',
				buttonLabelA: dataUtils.pre('\\str{<sup>1</sup>&#8260;<sub>2</sub> * &pi; * d}'),
				buttonValueB: 'F',
				buttonLabelB: dataUtils.pre('\\str{&pi; * d}'),
				buttonValueC: 'F',
				buttonLabelC: dataUtils.pre('\\str{<sup>1</sup>&#8260;<sub>2</sub> * &pi; * r<sup>2</sup>}'),
				buttonValueD: 'F',
				buttonLabelD: dataUtils.pre('\\str{&pi; * r<sup>2</sup>}'),
                firstHelp: 'The formula to find the circumference or perimeter of a circle is: &nbsp; c = &pi; * d',
				secondHelp: 'The distance of the open half circle is only <sup>1</sup>&#8260;<sub>2</sub> of the distance of the circumference. Therefore:<br><br>Distance of open half circle = <sup>1</sup>&#8260;<sub>2</sub> of (circumference)',
				thirdHelp: 'Now we just substitute the formula for the word \\"circumference\\"  (&pi; * d). We get:<br><br>Distance of open half circle = <sup>1</sup>&#8260;<sub>2</sub> * (&pi; * d)',
				answerHelp: '<sup>1</sup>&#8260;<sub>2</sub> * &pi; * d',
				template: 'multipleChoice' 
			}
			,
			{ // problem 2
				illustration: 'T.2/Half_Circle_Open02.jpg',
				alt: 'open half circle',
				width: '100px',
				height: '200px',
				imageClass: '',
				probQuestion: 'The arc below is an open half circle with a distance of 12 feet. If this half circle was completed to make a full circle, what would its circumference be?',
				simpleAnswer: dataUtils.pre('\\grp'+
												'{\\input{24}}'+
												'{\\str{ft}}'
								),
				helpTexts: 'The circumference is double the distance of an open half circle (two half circles make a full circle).<br><br>The circumference would be:  2 * 12<br><br>',
				answerHelp: dataUtils.pre('\\str{24 ft}'
								),
				answerRound: '',
                template: 'simpleQuestion' 
			}
			,
			{ // problem 3
				illustration: 'T.2/Half_Circle_Open01.jpg',
				alt: 'open half circle',
				width: '100px',
				height: '200px',
				imageClass: 'buttonsright',
				probQuestion: 'The arc below is an open half circle with a distance of 5 meters. If this half circle was completed to make a full circle, what would its circumference be?',
				simpleAnswer: dataUtils.pre('\\grp'+
												'{\\input{10}}'+
												'{\\str{m}}'
								),
				helpTexts: 'The circumference is double the distance of an open half circle (two half circles make a full circle).<br><br>The circumference would be:  2 * 5<br><br>',
				answerHelp: dataUtils.pre('\\str{10 m}'
								),
				answerRound: '',
                template: 'simpleQuestion' 
			}
			,
			{ // problem 4
				probQuestion: 'The arc below is an open half circle. What is the formula to find the distance of this arc?<br><br>',
				illustration: 'T.2/Half_Circle_Closed02.jpg',
				alt: 'open half circle',
				width: '100px',
				height: '200px',
				buttonValueA: 'F',
				buttonLabelA: dataUtils.pre('\\str{<sup>1</sup>&#8260;<sub>2</sub> * &pi; * d}'),
				buttonValueB: 'F',
				buttonLabelB: dataUtils.pre('\\str{<sup>1</sup>&#8260;<sub>2</sub> * d &#43; d}'),
				buttonValueC: 'T',
				buttonLabelC: dataUtils.pre('\\str{<sup>1</sup>&#8260;<sub>2</sub> * &pi; * d &#43; d}'),
				buttonValueD: 'F',
				buttonLabelD: dataUtils.pre('\\str{<sup>1</sup>&#8260;<sub>2</sub> * &pi; * r<sup>2</sup>}'),
                firstHelp: 'To understand the formula for the perimeter of a closed half circle is to remember that we are adding together two separate distances.<br><br>Perimeter = (distance of <sup>1</sup>&#8260;<sub>2</sub> circumference) + (diameter)<br><br>Now change the words above into variable expressions.',
				secondHelp: '(1) distance of <sup>1</sup>&#8260;<sub>2</sub> circumference = <sup>1</sup>&#8260;<sub>2</sub> * &pi; * d<br><br>(2) diameter = d',
				thirdHelp: 'Our formula becomes: &nbsp; (<sup>1</sup>&#8260;<sub>2</sub> * &pi; * d) &#43; d',
				answerHelp: '<sup>1</sup>&#8260;<sub>2</sub> * &pi; * d &#43; d',
				template: 'multipleChoice' 
			}
			,
			{ // problem 5
				mainIllustration: 'T.2/Half_Circle_Open02.jpg',
				alt: 'open half circle',
				width: '100px',
				height: '200px',
				imageClass: '',
				firstHelpIllustration: 'T.2/Half_Circle_Open02_clear.png',
				firstHelpAlt: 'open half circle',
				firstHelpWidth: '50px',
				firstHelpHeight: '100px',
				secondHelpIllustration: 'T.2/Half_Circle_Closed02_clear.png',
				secondHelpAlt: 'closed half circle',
				secondHelpWidth: '51px',
				secondHelpHeight: '100px',
				probQuestion: 'The arc below is an open half circle with a distance of 7.85 inches. It has a diameter of 5 inches. What would the perimeter of this half circle be if it were closed?',
				simpleAnswer: dataUtils.pre('\\grp'+
												'{\\input{12.85}}'+
												'{\\str{in}}'
								),
				firstHelpText: 'An open half circle becomes a closed half circle when the two ends of the open half circle are connected by the diameter. We can see this below: ',
				halfCircumference: '7.85 in',
				helpDiameter: '5 in',
				helpPerimeter: '7.85 &#43; 5',
				answerHelp: dataUtils.pre('\\str{12.85 in}'
								),
				template: 'question2ImageHelp' 
			}
			,
			{ // problem 6
				mainIllustration: 'T.2/Half_Circle_Open01.jpg',
				alt: 'open half circle',
				width: '100px',
				height: '200px',
				imageClass: 'buttonsright',
				firstHelpIllustration: 'T.2/Half_Circle_Open01_clear.png',
				firstHelpAlt: 'open half circle',
				firstHelpWidth: '50px',
				firstHelpHeight: '100px',
				secondHelpIllustration: 'T.2/Half_Circle_Closed01_clear.png',
				secondHelpAlt: 'closed half circle',
				secondHelpWidth: '51px',
				secondHelpHeight: '100px',
				probQuestion: 'The arc below is an open half circle with a distance of 11 centimeters. It has a diameter of 7 centimeters. What would the perimeter of this half circle be if it were closed?',
				simpleAnswer: dataUtils.pre('\\grp'+
												'{\\input{18}}'+
												'{\\str{cm}}'
								),
				firstHelpText: 'An open half circle becomes a closed half circle when the two ends of the open half circle are connected by the diameter. We can see this below: ',
				halfCircumference: '11 cm',
				helpDiameter: '7 cm',
				helpPerimeter: '11 &#43; 7',
				answerHelp: dataUtils.pre('\\str{18 cm}'
								),
				template: 'question2ImageHelp' 
			}
			,
			{ // problem 7
				illustration: 'T.2/HalfCircle_d_18cm_v2.jpg',
				alt: 'closed half circle diameter 18 cm',
				width: '170px',
				height: '200px',
				imageClass: '',
				probQuestion: 'Find the perimeter of the shape below. Use 3.14 for &pi;.',
				simpleAnswer: dataUtils.pre('\\grp'+
												'{\\input{46.26}}'+
												'{\\str{cm}}'
								),
				helpTexts: 'Identify the shape: &nbsp; Closed Half Circle'
										+'<br><br>'
										+'<table>'
										+'<tr><td>Write the formula:</td><td>&nbsp;</td><td>P = (<sup>1</sup>&#8260;<sub>2</sub> * &pi; * d) &#43; d</td></tr>'
										+'<tr><td>Substitution:</td><td>&nbsp;</td><td>P = (<sup>1</sup>&#8260;<sub>2</sub> * 3.14 * 18) &#43; 18</td></tr>'
										+'<tr><td>Solve:</td><td>&nbsp;</td><td>P = 46.26</td></tr>'
										+'</table>'
										+'<br>',
				answerHelp: dataUtils.pre('\\str{46.26 cm}'
								),
				answerRound: '',
                template: 'simpleQuestion' 
			}
			,
			{ // problem 8
				illustration: 'T.2/HalfCircle_d_12.5m_v2.jpg',
				alt: 'closed half circle diameter 12.5 m',
				width: '184px',
				height: '200px',
				imageClass: '',
				probQuestion: 'Find the perimeter of the shape below. Use 3.14 for &pi;.',
				simpleAnswer: dataUtils.pre('\\grp'+
												'{\\input{32.125}}'+
												'{\\str{m}}'
								),
				helpTexts: 'Identify the shape: &nbsp; Closed Half Circle'
										+'<br><br>'
										+'<table>'
										+'<tr><td>Write the formula:</td><td>&nbsp;</td><td>P = (<sup>1</sup>&#8260;<sub>2</sub> * &pi; * d) &#43; d</td></tr>'
										+'<tr><td>Substitution:</td><td>&nbsp;</td><td>P = (<sup>1</sup>&#8260;<sub>2</sub> * 3.14 * 12.5) &#43; 12.5</td></tr>'
										+'<tr><td>Solve:</td><td>&nbsp;</td><td>P = 32.125</td></tr>'
										+'</table>'
										+'<br>',
				answerHelp: dataUtils.pre('\\str{32.125 m}'
								),
				answerRound: '',
                template: 'simpleQuestion' 
			}
			,
			{ // problem 9
				illustration: 'T.2/HalfCircle_r_7.5ft_v2.jpg',
				alt: 'closed half circle radius 7.5 ft',
				width: '108px',
				height: '200px',
				imageClass: 'buttonsright',
				probQuestion: 'Find the perimeter of the shape below. Use 3.14 for &pi;.',
				simpleAnswer: dataUtils.pre('\\grp'+
												'{\\input{38.55}}'+
												'{\\str{ft}}'
								),
				helpTexts: 'Identify the shape: &nbsp; Closed Half Circle'
										+'<br><br>'
										+'The radius of 7.5 ft is given.<br>'
										+'Therefore, the diameter is 15 ft.'
										+'<br><br>'
										+'<table>'
										+'<tr><td>Write the formula:</td><td>&nbsp;</td><td>P = (<sup>1</sup>&#8260;<sub>2</sub> * &pi; * d) &#43; d</td></tr>'
										+'<tr><td>Substitution:</td><td>&nbsp;</td><td>P = (<sup>1</sup>&#8260;<sub>2</sub> * 3.14 * 15) &#43; 15</td></tr>'
										+'<tr><td>Solve:</td><td>&nbsp;</td><td>P = 38.55</td></tr>'
										+'</table>'
										+'<br>',
				answerHelp: dataUtils.pre('\\str{38.55 ft}'
								),
				answerRound: '',
                template: 'simpleQuestion' 
			}
			,
			{ // problem 10
				illustration: 'T.2/HalfCircle_r_5cm_v2.jpg',
				alt: 'closed half circle radius 5 cm',
				width: '103px',
				height: '200px',
				imageClass: '',
				probQuestion: 'Find the perimeter of the shape below. Use 3.14 for &pi;.',
				simpleAnswer: dataUtils.pre('\\grp'+
												'{\\input{25.7}}'+
												'{\\str{cm}}'
								),
				helpTexts: 'Identify the shape: &nbsp; Closed Half Circle'
										+'<br><br>'
										+'The radius of 5 cm is given.<br>'
										+'Therefore, the diameter is 10 cm.'
										+'<br><br>'
										+'<table>'
										+'<tr><td>Write the formula:</td><td>&nbsp;</td><td>P = (<sup>1</sup>&#8260;<sub>2</sub> * &pi; * d) &#43; d</td></tr>'
										+'<tr><td>Substitution:</td><td>&nbsp;</td><td>P = (<sup>1</sup>&#8260;<sub>2</sub> * 3.14 * 10) &#43; 10</td></tr>'
										+'<tr><td>Solve:</td><td>&nbsp;</td><td>P = 25.7</td></tr>'
										+'</table>'
										+'<br>',
				answerHelp: dataUtils.pre('\\str{25.7 ft}'
								),
				answerRound: '',
                template: 'simpleQuestion' 
			}
			,
			{ // problem 11
				illustration: 'T.2/HalfCircle_d_1_3-4ft_v2.jpg',
				alt: 'closed half circle radius 1 3/4 cm',
				width: '171px',
				height: '200px',
				imageClass: 'buttonsright',
				probQuestion: 'Find the perimeter of the shape below. Use <sup>22</sup>&#8260;<sub>7</sub> for &pi;.',
				simpleAnswer: dataUtils.pre('\\grp'+
												'{\\mixed{\\input{4}}{\\frac{\\input{1}}{\\input{2}}}}'+
												'{\\str{ft}}'
								),
				helpTexts: 'Identify the shape: &nbsp; Closed Half Circle'
										+'<br><br>'
										+'<table>'
										+'<tr><td>Write the formula:</td><td>&nbsp;</td><td>P = (<sup>1</sup>&#8260;<sub>2</sub> * &pi; * d) &#43; d</td></tr>'
										+'<tr><td>Substitution:</td><td>&nbsp;</td><td>P = (<sup>1</sup>&#8260;<sub>2</sub>&nbsp; * &nbsp;<sup>22</sup>&#8260;<sub>7</sub>&nbsp; * &nbsp;1<sup>3</sup>&#8260;<sub>4</sub>)&nbsp; &#43; &nbsp;1<sup>3</sup>&#8260;<sub>4</sub></td></tr>'
										+'<tr><td>Solve:</td><td>&nbsp;</td><td>P = 4<sup>1</sup>&#8260;<sub>2</sub></td></tr>'
										+'</table>'
										+'<br>',
				answerHelp: dataUtils.pre('\\str{4<sup>1</sup>&#8260;<sub>2</sub> ft}'
								),
				answerRound: '',
                template: 'simpleQuestion' 
			}
			,
			{ // problem 12
				illustration: 'T.2/12_HalfCircle_r_1_2-3in.jpg',
				alt: 'closed half circle diameter 1 2/3 in',
				width: '200px',
				height: '172px',
				imageClass: 'buttonsright',
				probQuestion: 'Find the perimeter of the shape below. Use <sup>22</sup>&#8260;<sub>7</sub> for &pi;.',
				simpleAnswer: dataUtils.pre('\\grp'+
												'{\\mixed{\\input{4}}{\\frac{\\input{2}}{\\input{7}}}}'+
												'{\\str{in}}'
								),
				helpTexts: 'Identify the shape: &nbsp; Closed Half Circle'
										+'<br><br>'
										+'<table>'
										+'<tr><td>Write the formula:</td><td>&nbsp;</td><td>P = (<sup>1</sup>&#8260;<sub>2</sub> * &pi; * d) &#43; d</td></tr>'
										+'<tr><td>Substitution:</td><td>&nbsp;</td><td>P = (<sup>1</sup>&#8260;<sub>2</sub>&nbsp; * &nbsp;<sup>22</sup>&#8260;<sub>7</sub>&nbsp; * &nbsp;1<sup>2</sup>&#8260;<sub>3</sub>)&nbsp; &#43; &nbsp;1<sup>2</sup>&#8260;<sub>3</sub></td></tr>'
										+'<tr><td>Solve:</td><td>&nbsp;</td><td>P = 4<sup>2</sup>&#8260;<sub>7</sub></td></tr>'
										+'</table>'
										+'<br>',
				answerHelp: dataUtils.pre('\\str{4<sup>2</sup>&#8260;<sub>7</sub> in}'
								),
				answerRound: '',
                template: 'simpleQuestion' 
			}
			,
			{ // problem 13
				illustration: 'T.2/HalfCircle_d_10_1-2in_v2.jpg',
				alt: 'closed half circle diameter 10 1/2 in',
				width: '104px',
				height: '200px',
				imageClass: '',
				probQuestion: 'Find the perimeter of the shape below. Use <sup>22</sup>&#8260;<sub>7</sub> for &pi;.',
				simpleAnswer: dataUtils.pre('\\grp'+
												'{\\input{54}}'+
												'{\\str{in}}'
								),
				helpTexts: 'Identify the shape: &nbsp; Closed Half Circle'
										+'<br><br>'
										+'The radius of 10 <sup>1</sup>&#8260;<sub>2</sub> inches is given.<br>'
										+'Therefore, the diameter is 21 inches.'
										+'<br><br>'
										+'<table>'
										+'<tr><td>Write the formula:</td><td>&nbsp;</td><td>P = (<sup>1</sup>&#8260;<sub>2</sub> * &pi; * d) &#43; d</td></tr>'
										+'<tr><td>Substitution:</td><td>&nbsp;</td><td>P = (<sup>1</sup>&#8260;<sub>2</sub> * 3.14 * 21) &#43; 21</td></tr>'
										+'<tr><td>Solve:</td><td>&nbsp;</td><td>P = 54</td></tr>'
										+'</table>'
										+'<br>',
				answerHelp: dataUtils.pre('\\str{54 in}'
								),
				answerRound: '',
                template: 'simpleQuestion' 
			}
			,
			{ // problem 14
				illustration: 'T.2/HalfCircle_r_2_1-2mi_v2.jpg',
				alt: 'closed half circle diameter 2 1/2 mi',
				width: '104px',
				height: '200px',
				imageClass: 'buttonsright',
				probQuestion: 'Find the perimeter of the shape below. Use <sup>22</sup>&#8260;<sub>7</sub> for &pi;.',
				simpleAnswer: dataUtils.pre('\\grp'+
												'{\\mixed{\\input{12}}{\\frac{\\input{6}}{\\input{7}}}}'+
												'{\\str{mi}}'
								),
				helpTexts: 'Identify the shape: &nbsp; Closed Half Circle'
										+'<br><br>'
										+'The radius of 2 <sup>1</sup>&#8260;<sub>2</sub> miles is given.<br>'
										+'Therefore, the diameter is 5 miles.'
										+'<br><br>'
										+'<table>'
										+'<tr><td>Write the formula:</td><td>&nbsp;</td><td>P = (<sup>1</sup>&#8260;<sub>2</sub> * &pi; * d) &#43; d</td></tr>'
										+'<tr><td>Substitution:</td><td>&nbsp;</td><td>P = (<sup>1</sup>&#8260;<sub>2</sub>&nbsp; * &nbsp;<sup>22</sup>&#8260;<sub>7</sub>&nbsp; * &nbsp;5)&nbsp; &#43; &nbsp;5</td></tr>'
										+'<tr><td>Solve:</td><td>&nbsp;</td><td>P = 12 <sup>6</sup>&#8260;<sub>7</sub></td></tr>'
										+'</table>'
										+'<br>',
				answerHelp: dataUtils.pre('\\str{12 <sup>6</sup>&#8260;<sub>7</sub> mi}'
								),
				answerRound: '',
                template: 'simpleQuestion' 
			}
			,
			{ // problem 15
				illustration: 'T.2/Rectangle_Half_Circle03.jpg',
				alt: 'rectangle half circle',
				width: '300px',
				height: '170px',
				imageClass: '',
				probQuestion: 'What is the correct formula to find the perimeter of this object?',
				buttonValueA: 'F',
				buttonLabelA: dataUtils.pre('\\str{P = 2a &#43; 2b &#43; (<sup>1</sup>&#8260;<sub>2</sub> * &pi; * d)}'),
				buttonValueB: 'T',
				buttonLabelB: dataUtils.pre('\\str{P = a &#43; b &#43; c &#43; (<sup>1</sup>&#8260;<sub>2</sub> * &pi; * d)}'),
				buttonValueC: 'F',
				buttonLabelC: dataUtils.pre('\\str{P = 2a &#43; 2b &#43; (&pi; * d)}'),
				buttonValueD: 'F',
				buttonLabelD: dataUtils.pre('\\str{P = a &#43; 2b &#43; (&pi; * d)}'),
                firstHelp: 'Identify the shape:  A rectangle connected to a half circle.',
				secondHelp: 'Side d is <u>not</u> a part of the perimeter because it is <u>inside</u> the shape, not a part of its outside.'
							+'<br><br>'
							+'The perimeter (the outside of this shape) consists of three sides (sides a, b, and c) <u>and</u> an open half circle (<sup>1</sup>&#8260;<sub>2</sub> of a circumference).'
							+'<br><br>'
							+'Distance of the three sides = a &#43; b &#43; c'
							+'<br>'
							+'Distance of open half circle = <sup>1</sup>&#8260;<sub>2</sub> * &pi; * d',
				thirdHelp: 'Add these together to get the perimeter formula.',
				answerHelp: 'P = a &#43; b &#43; c &#43; (<sup>1</sup>&#8260;<sub>2</sub> * &pi; * d)',
				template: 'multipleChoice' 
			}
			,
			{ // problem 16
				illustration: 'T.2/16_Rectangle_Half_Circle03_s1-s2-s3.jpg',
				alt: 'rectangle half circle',
				width: '300px',
				height: '187px',
				imageClass: '',
				probQuestion: 'What is the correct formula to find the perimeter of this object?',
				buttonValueA: 'F',
				buttonLabelA: dataUtils.pre('\\str{P = 2(s<sub>1</sub>) &#43; 2(s<sub>2</sub>) &#43; (<sup>1</sup>&#8260;<sub>2</sub> * &pi; * d)}'),
				buttonValueB: 'F',
				buttonLabelB: dataUtils.pre('\\str{P = s<sub>1</sub> &#43; 2(s<sub>2</sub>) &#43; s<sub>3</sub> &#43; (&pi; * d)}'),
				buttonValueC: 'F',
				buttonLabelC: dataUtils.pre('\\str{P = s<sub>1</sub> &#43; s<sub>2</sub> &#43; s<sub>3</sub> &#43; (&pi; * d)}'),
				buttonValueD: 'T',
				buttonLabelD: dataUtils.pre('\\str{P = s<sub>1</sub> &#43; s<sub>2</sub> &#43; s<sub>3</sub> &#43; (<sup>1</sup>&#8260;<sub>2</sub> * &pi; * d)}'),
                firstHelp: 'Identify the shape:  A rectangle connected to a half circle.',
				secondHelp: 'The perimeter (the outside of this shape) consists of three sides (sides s<sub>1</sub>, s<sub>2</sub>, and s<sub>3</sub>) <u>and</u> an open half circle (<sup>1</sup>&#8260;<sub>2</sub> of a circumference).'
							+'<br><br>'
							+'Distance of the three sides = s<sub>1</sub> &#43; s<sub>2</sub> &#43; s<sub>3</sub>'
							+'<br>'
							+'Distance of open half circle = <sup>1</sup>&#8260;<sub>2</sub> * &pi; * d',
				thirdHelp: 'Add these together to get the perimeter formula.',
				answerHelp: 'P = s<sub>1</sub> &#43; s<sub>2</sub> &#43; s<sub>3</sub> &#43; (<sup>1</sup>&#8260;<sub>2</sub> * &pi; * d)',
				template: 'multipleChoice' 
			}
			,
			{ // problem 17
				illustration: 'T.2/RectHalfCircle_s2_14in_s3_12in_v2.jpg',
				alt: 'rectangle half circle',
				width: '300px',
				height: '211px',
				imageClass: '',
				probQuestion: 'Find the perimeter of the shape below. Use <sup>22</sup>&#8260;<sub>7</sub> for &pi;.',
				simpleAnswer: dataUtils.pre('\\grp'+
												'{\\input{60}}'+
												'{\\str{in}}'
								),
				helpTexts: 'Identify the shape: &nbsp; A rectangle connected to a half circle.'
										+'<br><br>'
										+'The perimeter (the outside of this shape) consists of three sides (sides s<sub>1</sub>, s<sub>2</sub>, and s<sub>3</sub>) <u>and</u> an open half circle (<sup>1</sup>&#8260;<sub>2</sub> of a circumference).'
										+'<br><br>'
										+'In this shape s<sub>2</sub> is the same as the diameter of the half circle (the dotted line).'
										+'<br><br>'
										+'<table>'
										+'<tr><td>The formula:</td><td>&nbsp;</td><td>P = s<sub>1</sub> &#43; s<sub>2</sub> &#43; s<sub>3</sub> &#43; (<sup>1</sup>&#8260;<sub>2</sub> * &pi; * d)</td></tr>'
										+'<tr><td>Substitution:</td><td>&nbsp;</td><td>P = 12 &#43; 14 &#43; 12 &#43; (<sup>1</sup>&#8260;<sub>2</sub> * <sup>22</sup>&#8260;<sub>7</sub> * 14)</td></tr>'
										+'<tr><td>Solve:</td><td>&nbsp;</td><td>P = 60</td></tr>'
										+'</table>'
										+'<br>',
				answerHelp: dataUtils.pre('\\str{60 in}'
								),
				answerRound: '',
                template: 'simpleQuestion' 
			}
			,
			{ // problem 18
				illustration: 'T.2/RectHalfCircle_a_21cm_b_15cm_v2.jpg',
				alt: 'rectangle half circle',
				width: '350px',
				height: '180px',
				imageClass: '',
				probQuestion: 'Find the perimeter of the shape below. Use <sup>22</sup>&#8260;<sub>7</sub> for &pi;.',
				simpleAnswer: dataUtils.pre('\\grp'+
												'{\\input{84}}'+
												'{\\str{cm}}'
								),
				helpTexts: 'Identify the shape: &nbsp; A rectangle connected to a half circle.'
										+'<br><br>'
										+'The perimeter (the outside of this shape) consists of three sides (sides a, b, and c) <u>and</u> an open half circle (<sup>1</sup>&#8260;<sub>2</sub> of a circumference).'
										+'<br><br>'
										+'In this shape <em>a</em> is the same as the diameter of the half circle (the dotted line).'
										+'<br><br>'
										+'<table>'
										+'<tr><td>The formula:</td><td>&nbsp;</td><td>P = a &#43; b &#43; c &#43; (<sup>1</sup>&#8260;<sub>2</sub> * &pi; * d)</td></tr>'
										+'<tr><td>Substitution:</td><td>&nbsp;</td><td>P = 21 &#43; 15 &#43; 15 &#43; (<sup>1</sup>&#8260;<sub>2</sub> * <sup>22</sup>&#8260;<sub>7</sub> * 21)</td></tr>'
										+'<tr><td>Solve:</td><td>&nbsp;</td><td>P = 84</td></tr>'
										+'</table>'
										+'<br>',
				answerHelp: dataUtils.pre('\\str{84 cm}'
								),
				answerRound: '',
                template: 'simpleQuestion' 
			}
			,
			{ // problem 19
				illustration: 'T.2/RectHalfCircle_s2_11.5ft_s3_18.2ft_v2.jpg',
				alt: 'rectangle half circle',
				width: '350px',
				height: '167px',
				imageClass: '',
				probQuestion: 'Find the perimeter of the shape below. Use 3.14 for &pi;. Round answer to the nearest whole.',
				simpleAnswer: dataUtils.pre('\\grp'+
												'{\\input{66}}'+
												'{\\str{ft}}'
								),
				helpTexts: 'Identify the shape: &nbsp; A rectangle connected to a half circle.'
										+'<br><br>'
										+'The perimeter (the outside of this shape) consists of three sides (sides s<sub>1</sub>, s<sub>2</sub>, and s<sub>3</sub>) <u>and</u> an open half circle (<sup>1</sup>&#8260;<sub>2</sub> of a circumference).'
										+'<br><br>'
										+'In this shape s<sub>2</sub> is the same as the diameter of the half circle (the dotted line).'
										+'<br><br>'
										+'<table>'
										+'<tr><td>The formula:</td><td>&nbsp;</td><td>P = s<sub>1</sub> &#43; s<sub>2</sub> &#43; s<sub>3</sub> &#43; (<sup>1</sup>&#8260;<sub>2</sub> * &pi; * d)</td></tr>'
										+'<tr><td>Substitution:</td><td>&nbsp;</td><td>P = 18.2 &#43; 11.5 &#43; 18.2 &#43; (<sup>1</sup>&#8260;<sub>2</sub> * 3.14 * 11.5)</td></tr>'
										+'<tr><td>Solve:</td><td>&nbsp;</td><td>P = 65.955</td></tr>'
										+'</table>'
										+'<br>',
				answerHelp: dataUtils.pre('\\str{66 ft}'
								),
                answerRound: ' (rounded to the nearest whole)',
                template: 'simpleQuestion' 
			}
			,
			{ // problem 20
				illustration: 'T.2/RectHalfCircle_a_6.2m_c_10.5m_v2.jpg',
				alt: 'rectangle half circle',
				width: '350px',
				height: '165px',
				imageClass: '',
				probQuestion: 'Find the perimeter of the shape below. Use 3.14 for &pi;. Round answer to the nearest whole.',
				simpleAnswer: dataUtils.pre('\\grp'+
												'{\\input{37}}'+
												'{\\str{m}}'
								),
				helpTexts: 'Identify the shape: &nbsp; A rectangle connected to a half circle.'
										+'<br><br>'
										+'The perimeter (the outside of this shape) consists of three sides (sides a, b, and c) <u>and</u> an open half circle (<sup>1</sup>&#8260;<sub>2</sub> of a circumference).'
										+'<br><br>'
										+'In this shape <em>a</em> is the same as the diameter of the half circle (the dotted line).'
										+'<br><br>'
										+'<table>'
										+'<tr><td>The formula:</td><td>&nbsp;</td><td>P = a &#43; b &#43; c &#43; (<sup>1</sup>&#8260;<sub>2</sub> * &pi; * d)</td></tr>'
										+'<tr><td>Substitution:</td><td>&nbsp;</td><td>P = 6.2 &#43; 10.5 &#43; 10.5 &#43; (<sup>1</sup>&#8260;<sub>2</sub> * 3.14 * 6.2)</td></tr>'
										+'<tr><td>Solve:</td><td>&nbsp;</td><td>P = 36.934</td></tr>'
										+'</table>'
										+'<br>',
				answerHelp: dataUtils.pre('\\str{37 m}'
								),
				answerRound: ' (rounded to the nearest whole)',
                template: 'simpleQuestion' 
			}
			,
			{ // problem 21
				illustration: 'T.2/RectHalfCircle_a_3_1-2in_c_7in_v2.jpg',
				alt: 'rectangle half circle',
				width: '350px',
				height: '142px',
				imageClass: '',
				probQuestion: 'Find the perimeter of the shape below. Use <sup>22</sup>&#8260;<sub>7</sub> for &pi;.',
				simpleAnswer: dataUtils.pre('\\grp'+
												'{\\input{23}}'+
												'{\\str{in}}'
								),
				helpTexts: 'Identify the shape: &nbsp; A rectangle connected to a half circle.'
										+'<br><br>'
										+'The perimeter (the outside of this shape) consists of three sides (sides a, b, and c) <u>and</u> an open half circle (<sup>1</sup>&#8260;<sub>2</sub> of a circumference).'
										+'<br><br>'
										+'In this shape <em>a</em> is the same as the diameter of the half circle (the dotted line).'
										+'<br><br>'
										+'<table>'
										+'<tr><td>The formula:</td><td>&nbsp;</td><td>P = a &#43; b &#43; c &#43; (<sup>1</sup>&#8260;<sub>2</sub> * &pi; * d)</td></tr>'
										+'<tr><td>Substitution:</td><td>&nbsp;</td><td>P = 3 <sup>1</sup>&#8260;<sub>2</sub> &#43; 7 &#43; 7 &#43; (<sup>1</sup>&#8260;<sub>2</sub> * <sup>22</sup>&#8260;<sub>7</sub> * 3 <sup>1</sup>&#8260;<sub>2</sub>)</td></tr>'
										+'<tr><td>Solve:</td><td>&nbsp;</td><td>P = 23</td></tr>'
										+'</table>'
										+'<br>',
				answerHelp: dataUtils.pre('\\str{23 in}'
								),
				answerRound: '',
                template: 'simpleQuestion' 
			}
			,
			{ // problem 22
				illustration: 'T.2/RectHalfCircle_s2_5_2-5cm_s3_6_1-2cm_v2.jpg',
				alt: 'rectangle half circle',
				width: '350px',
				height: '183px',
				imageClass: '',
				probQuestion: 'Find the perimeter of the shape below. Use <sup>22</sup>&#8260;<sub>7</sub> for &pi;.',
				simpleAnswer: dataUtils.pre('\\grp'+
												'{\\mixed{\\input{26}}{\\frac{\\input{31}}{\\input{35}}}}'+
												'{\\str{cm}}'
								),
				helpTexts: 'Identify the shape: &nbsp; A rectangle connected to a half circle.'
										+'<br><br>'
										+'The perimeter (the outside of this shape) consists of three sides (sides s<sub>1</sub>, s<sub>2</sub>, and s<sub>3</sub>) <u>and</u> an open half circle (<sup>1</sup>&#8260;<sub>2</sub> of a circumference).'
										+'<br><br>'
										+'In this shape s<sub>2</sub> is the same as the diameter of the half circle (the dotted line).'
										+'<br><br>'
										+'<table>'
										+'<tr><td>The formula:</td><td>&nbsp;</td><td>P = s<sub>1</sub> &#43; s<sub>2</sub> &#43; s<sub>3</sub> &#43; (<sup>1</sup>&#8260;<sub>2</sub> * &pi; * d)</td></tr>'
										+'<tr><td>Substitution:</td><td>&nbsp;</td><td>P = 6 <sup>1</sup>&#8260;<sub>2</sub> &#43; 5 <sup>2</sup>&#8260;<sub>5</sub> &#43; 6 <sup>1</sup>&#8260;<sub>2</sub> &#43; (<sup>1</sup>&#8260;<sub>2</sub> * <sup>22</sup>&#8260;<sub>7</sub> * 5 <sup>2</sup>&#8260;<sub>5</sub>)</td></tr>'
										+'<tr><td>Solve:</td><td>&nbsp;</td><td>P = 26 <sup>31</sup>&#8260;<sub>35</sub></td></tr>'
										+'</table>'
										+'<br>',
				answerHelp: dataUtils.pre('\\str{26 <sup>31</sup>&#8260;<sub>35</sub> cm}'
								),
				answerRound: '',
                template: 'simpleQuestion' 
			}
			,
			{ // problem 23
				illustration: 'T.2/Rect_HalfCircle_r_1_3-4ft_s3_4_1-5ft_v2.jpg',
				alt: 'rectangle half circle',
				width: '300px',
				height: '195px',
				imageClass: '',
				probQuestion: 'Find the perimeter of the shape below. Use <sup>22</sup>&#8260;<sub>7</sub> for &pi;.',
				simpleAnswer: dataUtils.pre('\\grp'+
												'{\\mixed{\\input{17}}{\\frac{\\input{2}}{\\input{5}}}}'+
												'{\\str{ft}}'
								),
				helpTexts: 'Identify the shape: &nbsp; A rectangle connected to a half circle.'
										+'<br><br>'
										+'The perimeter (the outside of this shape) consists of three sides (sides s<sub>1</sub>, s<sub>2</sub>, and s<sub>3</sub>) <u>and</u> an open half circle (<sup>1</sup>&#8260;<sub>2</sub> of a circumference).'
										+'<br><br>'
										+'For the half circle, we are given the radius of 1 <sup>3</sup>&#8260;<sub>4</sub> ft. That means that the diameter (the dotted line) is double that (2 * 1 <sup>3</sup>&#8260;<sub>4</sub>) or 3 <sup>1</sup>&#8260;<sub>2</sub> ft.'
										+'<br><br>'
										+'<table>'
										+'<tr><td>The formula:</td><td>&nbsp;</td><td>P = s<sub>1</sub> &#43; s<sub>2</sub> &#43; s<sub>3</sub> &#43; (<sup>1</sup>&#8260;<sub>2</sub> * &pi; * d)</td></tr>'
										+'<tr><td>Substitution:</td><td>&nbsp;</td><td>P = 4 <sup>1</sup>&#8260;<sub>5</sub> &#43; 3 <sup>1</sup>&#8260;<sub>2</sub> &#43; 4 <sup>1</sup>&#8260;<sub>5</sub> &#43; (<sup>1</sup>&#8260;<sub>2</sub> * <sup>22</sup>&#8260;<sub>7</sub> * 3 <sup>1</sup>&#8260;<sub>2</sub>)</td></tr>'
										+'<tr><td>Solve:</td><td>&nbsp;</td><td>P = 17 <sup>2</sup>&#8260;<sub>5</sub></td></tr>'
										+'</table>'
										+'<br>',
				answerHelp: dataUtils.pre('\\str{17 <sup>2</sup>&#8260;<sub>5</sub> ft}'
								),
				answerRound: '',
                template: 'simpleQuestion' 
			}
			,
			{ // problem 24
				illustration: 'T.2/24_Rect_HalfCircle_r_2_1-4in_s1_5_1-2in.jpg',
				alt: 'rectangle half circle',
				width: '300px',
				height: '194px',
				imageClass: '',
				probQuestion: 'Find the perimeter of the shape below. Use <sup>22</sup>&#8260;<sub>7</sub> for &pi;.',
				simpleAnswer: dataUtils.pre('\\grp'+
												'{\\mixed{\\input{22}}{\\frac{\\input{4}}{\\input{7}}}}'+
												'{\\str{in}}'
								),
				helpTexts: 'Identify the shape: &nbsp; A rectangle connected to a half circle.'
										+'<br><br>'
										+'The perimeter (the outside of this shape) consists of three sides (sides s<sub>1</sub>, s<sub>2</sub>, and s<sub>3</sub>) <u>and</u> an open half circle (<sup>1</sup>&#8260;<sub>2</sub> of a circumference).'
										+'<br><br>'
										+'For the half circle, we are given the radius of 2 <sup>1</sup>&#8260;<sub>4</sub> in. That means that the diameter (the dotted line) is double that (2 * 2 <sup>1</sup>&#8260;<sub>4</sub>) or 4 <sup>1</sup>&#8260;<sub>2</sub> in.'
										+'<br><br>'
										+'The diameter of 4 <sup>1</sup>&#8260;<sub>2</sub> is the same distance as s<sub>2</sub>.'
										+'<br><br>'
										+'<table>'
										+'<tr><td>The formula:</td><td>&nbsp;</td><td>P = s<sub>1</sub> &#43; s<sub>2</sub> &#43; s<sub>3</sub> &#43; (<sup>1</sup>&#8260;<sub>2</sub> * &pi; * d)</td></tr>'
										+'<tr><td>Substitution:</td><td>&nbsp;</td><td>P = 5 <sup>1</sup>&#8260;<sub>2</sub> &#43; 4 <sup>1</sup>&#8260;<sub>2</sub> &#43; 5 <sup>1</sup>&#8260;<sub>2</sub> &#43; (<sup>1</sup>&#8260;<sub>2</sub> * <sup>22</sup>&#8260;<sub>7</sub> * 4 <sup>1</sup>&#8260;<sub>2</sub>)</td></tr>'
										+'<tr><td>Solve:</td><td>&nbsp;</td><td>P = 22 <sup>4</sup>&#8260;<sub>7</sub></td></tr>'
										+'</table>'
										+'<br>',
				answerHelp: dataUtils.pre('\\str{22 <sup>4</sup>&#8260;<sub>7</sub> in}'
								),
				answerRound: '',
                template: 'simpleQuestion' 
			}
			,
			{ // problem 25
				illustration: 'T.2/HalfCircle_d_7in_v2.jpg',
				alt: 'closed half circle diameter 7 inches',
				width: '148px',
				height: '200px',
				imageClass: '',
				probQuestion: 'Find the perimeter of the shape below. Use <sup>22</sup>&#8260;<sub>7</sub> for &pi;.',
				simpleAnswer: dataUtils.pre('\\grp'+
												'{\\input{18}}'+
												'{\\str{in}}'
								),
				helpTexts: 'Identify the shape: &nbsp; Closed Half Circle'
										+'<br><br>'
										+'<table>'
										+'<tr><td>Write the formula:</td><td>&nbsp;</td><td>P = (<sup>1</sup>&#8260;<sub>2</sub> * &pi; * d) &#43; d</td></tr>'
										+'<tr><td>Substitution:</td><td>&nbsp;</td><td>P = (<sup>1</sup>&#8260;<sub>2</sub> * <sup>22</sup>&#8260;<sub>7</sub> * 7)&nbsp; &#43; &nbsp;7</td></tr>'
										+'<tr><td>Solve:</td><td>&nbsp;</td><td>P = 18</td></tr>'
										+'</table>'
										+'<br>',
				answerHelp: dataUtils.pre('\\str{18 in}'
								),
				answerRound: '',
                template: 'simpleQuestion' 
			}
			,
			{ // problem 26
				illustration: 'T.2/26_HalfCircle_d_28m.jpg',
				alt: 'closed half circle diameter 7 inches',
				width: '156px',
				height: '200px',
				imageClass: 'buttonsright',
				probQuestion: 'Find the perimeter of the shape below. Use <sup>22</sup>&#8260;<sub>7</sub> for &pi;.',
				simpleAnswer: dataUtils.pre('\\grp'+
												'{\\input{72}}'+
												'{\\str{m}}'
								),
				helpTexts: 'Identify the shape: &nbsp; Closed Half Circle'
										+'<br><br>'
										+'<table>'
										+'<tr><td>Write the formula:</td><td>&nbsp;</td><td>P = (<sup>1</sup>&#8260;<sub>2</sub> * &pi; * d) &#43; d</td></tr>'
										+'<tr><td>Substitution:</td><td>&nbsp;</td><td>P = (<sup>1</sup>&#8260;<sub>2</sub> * <sup>22</sup>&#8260;<sub>7</sub> * 28)&nbsp; &#43; &nbsp;28</td></tr>'
										+'<tr><td>Solve:</td><td>&nbsp;</td><td>P = 72</td></tr>'
										+'</table>'
										+'<br>',
				answerHelp: dataUtils.pre('\\str{72 m}'
								),
				answerRound: '',
                template: 'simpleQuestion' 
			}
        ];
	
	/*shuffle = [
				{ problems: [1,2,3,4,5,6,7,8,9,10], total: 8},
				{ problems: [11,12], total: 1},
				{ problems: [13,14,15,16], total: 1}
		];

    
    	return dataUtils.build(desc, template, data, shuffle);*/

    return dataUtils.build(desc, template, data);
	
}]);

