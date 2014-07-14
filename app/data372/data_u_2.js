/*global angular */
angular.module('mathSkills').service('data_u_2', ['dataUtils', function (dataUtils) {
    var desc = {
			title: 'U.2 Area of Half Circles and Shapes Consisting of a Half Circle and a Rectangle',
    		path: 'u.2-area-of-half-circles-and-shapes-consisting-of-a-half-circle-and-a-rectangle',
            children: []
        },
        template = {
			multipleChoice: {
                title: 'Area of Half Circles and Shapes Consisting of a Half Circle and a Rectangle',
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
                title: 'Area of Half Circles and Shapes Consisting of a Half Circle and a Rectangle',
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
												+'{\\html{Answer: &nbsp;}}'
												+'{$answerHelp}'
											+'}'
											+'{help-answer-text}'
										+'}'
                        }
                    }]
                }]
            },
			question2ImageHelp: {
                title: 'Area of Half Circles and Shapes Consisting of a Half Circle and a Rectangle',
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
				probQuestion: 'The shape below is a half circle. What is the formula to find the area of this shape?<br><br>',
				illustration: 'T.2/Half_Circle_Closed02.jpg',
				alt: 'open half circle',
				width: '100px',
				height: '200px',
				buttonValueA: 'F',
				buttonLabelA: dataUtils.pre('\\str{&pi; * r<sup>2</sup>}'),
				buttonValueB: 'F',
				buttonLabelB: dataUtils.pre('\\str{&pi; * d &#43; d}'),
				buttonValueC: 'F',
				buttonLabelC: dataUtils.pre('\\str{<sup>1</sup>&#8260;<sub>2</sub> * &pi; * r<sup>2</sup> &#43; d}'),
				buttonValueD: 'T',
				buttonLabelD: dataUtils.pre('\\str{<sup>1</sup>&#8260;<sub>2</sub> * &pi; * r<sup>2</sup>}'),
                firstHelp: 'The area formula for a full circle is:  A = &pi; * r<sup>2</sup>.<br><br>'
							+'The space or area of a half circle is only <sup>1</sup>&#8260;<sub>2</sub> of the area of the full circle. Therefore:<br><br>'
							+'Area of half circle = <sup>1</sup>&#8260;<sub>2</sub> of (area of a full circle)',
				secondHelp: 'Now we just substitute the formula for the words \'area of a full circle\' (&pi; * r<sup>2</sup>). We get:',
				thirdHelp: 'Area of a half circle =  <sup>1</sup>&#8260;<sub>2</sub> * &pi; * r<sup>2</sup>',
				answerHelp: '<sup>1</sup>&#8260;<sub>2</sub> * &pi; * r<sup>2</sup>',
				template: 'multipleChoice' 
			}
			,
			{ // problem 2
				illustration: 'T.2/HalfCircle_d_18cm_v2.jpg',
				alt: 'closed half circle diameter 18 cm',
				width: '170px',
				height: '200px',
				imageClass: '',
				probQuestion: 'Find the area of the shape below. Use 3.14 for &pi;.',
				simpleAnswer: dataUtils.pre('\\grp'+
												'{\\input{127.17}}'+
												'{\\str{cm<sup>2</sup>}}'
								),
				helpTexts: 'Identify the shape: &nbsp; Half Circle'
										+'<br><br>'
										+'The diameter is given as 18 cm.<br>' 
										+'Therefore: the radius (<sup>1</sup>&#8260;<sub>2</sub> of a diameter) is 9 cm.'
										+'<br><br>'
										+'<table>'
										+'<tr><td>Formula:</td><td>&nbsp;</td><td>A = <sup>1</sup>&#8260;<sub>2</sub> * &pi; * r<sup>2</sup></td></tr>'
										+'<tr><td>Substitution:</td><td>&nbsp;</td><td>A = <sup>1</sup>&#8260;<sub>2</sub> * 3.14 * 9<sup>2</sup></td></tr>'
										+'<tr><td>Solve:</td><td>&nbsp;</td><td>A = 127.17</td></tr>'
										+'</table>'
										+'<br>',
				answerHelp: dataUtils.pre('\\str{127.17 sq. cm or 127.17 cm<sup>2</sup>}'
								),
				answerRound: '',
                template: 'simpleQuestion' 
			}
			,
			{ // problem 3
				illustration: 'T.2/HalfCircle_d_12.5m_v2.jpg',
				alt: 'closed half circle diameter 12.5 m',
				width: '184px',
				height: '200px',
				imageClass: '',
				probQuestion: 'Find the area of the shape below. Use 3.14 for &pi;. $$answerRound',
				simpleAnswer: dataUtils.pre('\\grp'+
												'{\\input{61}}'+
												'{\\str{m<sup>2</sup>}}'
								),
				helpTexts: 'Identify the shape: &nbsp; Half Circle'
										+'<br><br>'
										+'The diameter is given as 12.5 cm.<br>' 
										+'Therefore: the radius (<sup>1</sup>&#8260;<sub>2</sub> of a diameter) is 6.25 cm.'
										+'<br><br>'
										+'<table>'
										+'<tr><td>Formula:</td><td>&nbsp;</td><td>A = <sup>1</sup>&#8260;<sub>2</sub> * &pi; * r<sup>2</sup></td></tr>'
										+'<tr><td>Substitution:</td><td>&nbsp;</td><td>A = <sup>1</sup>&#8260;<sub>2</sub> * 3.14 * 6.25<sup>2</sup></td></tr>'
										+'<tr><td>Solve:</td><td>&nbsp;</td><td>A = 61.328125</td></tr>'
										+'</table>'
										+'<br>'
										+'$$answerRound'
										+'<br><br>',
				answerHelp: dataUtils.pre('\\str{61 sq. m or 61 m<sup>2</sup>}'
								),
				answerRound: 'Round the answer to the nearest whole.',
                template: 'simpleQuestion' 
			}
			,
			{ // problem 4
				illustration: 'T.2/HalfCircle_r_7.5ft_v2.jpg',
				alt: 'closed half circle radius 7.5 ft',
				width: '108px',
				height: '200px',
				imageClass: 'buttonsright',
				probQuestion: 'Find the area of the shape below. Use 3.14 for &pi;. $$answerRound',
				simpleAnswer: dataUtils.pre('\\grp'+
												'{\\input{88}}'+
												'{\\str{ft<sup>2</sup>}}'
								),
				helpTexts: 'Identify the shape: &nbsp; Half Circle'
										+'<br><br>'
										+'The radius is given as 7.5 ft.' 
										+'<br><br>'
										+'<table>'
										+'<tr><td>Formula:</td><td>&nbsp;</td><td>A = <sup>1</sup>&#8260;<sub>2</sub> * &pi; * r<sup>2</sup></td></tr>'
										+'<tr><td>Substitution:</td><td>&nbsp;</td><td>A = <sup>1</sup>&#8260;<sub>2</sub> * 3.14 * 7.5<sup>2</sup></td></tr>'
										+'<tr><td>Solve:</td><td>&nbsp;</td><td>A = 88.3125</td></tr>'
										+'</table>'
										+'<br>'
										+'$$answerRound'
										+'<br><br>',
				answerHelp: dataUtils.pre('\\str{88 sq. ft or 88 ft<sup>2</sup>}'
								),
				answerRound: 'Round the answer to the nearest whole.',
                template: 'simpleQuestion' 
			}
			,
			{ // problem 5
				illustration: 'T.2/HalfCircle_r_5cm_v2.jpg',
				alt: 'closed half circle radius 5 cm',
				width: '103px',
				height: '200px',
				imageClass: '',
				probQuestion: 'Find the area of the shape below. Use 3.14 for &pi;. $$answerRound',
				simpleAnswer: dataUtils.pre('\\grp'+
												'{\\input{39.25}}'+
												'{\\str{cm<sup>2</sup>}}'
								),
				helpTexts: 'Identify the shape: &nbsp; Half Circle'
										+'<br><br>'
										+'The radius is given as 5 cm.' 
										+'<br><br>'
										+'<table>'
										+'<tr><td>Formula:</td><td>&nbsp;</td><td>A = <sup>1</sup>&#8260;<sub>2</sub> * &pi; * r<sup>2</sup></td></tr>'
										+'<tr><td>Substitution:</td><td>&nbsp;</td><td>A = <sup>1</sup>&#8260;<sub>2</sub> * 3.14 * 5<sup>2</sup></td></tr>'
										+'<tr><td>Solve:</td><td>&nbsp;</td><td>A = 39.25</td></tr>'
										+'</table>'
										+'<br>'
										+'$$answerRound'
										+'<br><br>',
				answerHelp: dataUtils.pre('\\str{39.25 sq. cm or 39.25 cm<sup>2</sup>}'
								),
				answerRound: '',
                template: 'simpleQuestion' 
			}
			,
			{ // problem 6
				illustration: 'T.2/HalfCircle_d_1_3-4ft_v2.jpg',
				alt: 'closed half circle radius 1 3/4 cm',
				width: '171px',
				height: '200px',
				imageClass: 'buttonsright',
				probQuestion: 'Find the area of the shape below.  Use <sup>22</sup>&#8260;<sub>7</sub> for &pi;. Give the answer as a mixed number. $$answerRound',
				simpleAnswer: dataUtils.pre('\\grp'+
												'{\\mixed{\\input{1}}{\\frac{\\input{13}}{\\input{64}}}}'+
												'{\\str{ft<sup>2</sup>}}'
								),
				helpTexts: 'Identify the shape: &nbsp; Half Circle'
										+'<br><br>'
										+'The diameter is given as 1 <sup>3</sup>&#8260;<sub>4</sub>.<br>' 
										+'Therefore: the radius (<sup>1</sup>&#8260;<sub>2</sub> of a diameter) is <sup>7</sup>&#8260;<sub>8</sub> ft.' 
										+'<br><br>'
										+'<table>'
										+'<tr><td>Formula:</td><td>&nbsp;</td><td>A = <sup>1</sup>&#8260;<sub>2</sub> * &pi; * r<sup>2</sup></td></tr>'
										+'<tr><td>Substitution:</td><td>&nbsp;</td><td>A = <sup>1</sup>&#8260;<sub>2</sub> * <sup>22</sup>&#8260;<sub>7</sub> * (<sup>7</sup>&#8260;<sub>8</sub>)<sup>2</sup></td></tr>'
										+'<tr><td>Solve:</td><td>&nbsp;</td><td>A = 1 <sup>13</sup>&#8260;<sub>64</sub></td></tr>'
										+'</table>'
										+'<br>'
										+'$$answerRound'
										+'<br><br>',
				answerHelp: dataUtils.pre('\\str{1 <sup>13</sup>&#8260;<sub>64</sub> sq. ft or 1 <sup>13</sup>&#8260;<sub>64</sub> ft<sup>2</sup>}'
								),
				answerRound: '',
                template: 'simpleQuestion' 
			}
			,
			{ // problem 7
				illustration: 'T.2/12_HalfCircle_r_1_2-3in.jpg',
				alt: 'closed half circle diameter 1 2/3 in',
				width: '200px',
				height: '172px',
				imageClass: '',
				probQuestion: 'Find the area of the shape below.  Use <sup>22</sup>&#8260;<sub>7</sub> for &pi;. Give the answer as a mixed number. $$answerRound',
				simpleAnswer: dataUtils.pre('\\grp'+
												'{\\mixed{\\input{1}}{\\frac{\\input{23}}{\\input{252}}}}'+
												'{\\str{in<sup>2</sup>}}'
								),
				helpTexts: 'Identify the shape: &nbsp; Half Circle'
										+'<br><br>'
										+'The diameter is given as 1 <sup>2</sup>&#8260;<sub>3</sub>.<br>' 
										+'Therefore: the radius (<sup>1</sup>&#8260;<sub>2</sub> of a diameter) is <sup>5</sup>&#8260;<sub>6</sub> ft.' 
										+'<br><br>'
										+'<table>'
										+'<tr><td>Formula:</td><td>&nbsp;</td><td>A = <sup>1</sup>&#8260;<sub>2</sub> * &pi; * r<sup>2</sup></td></tr>'
										+'<tr><td>Substitution:</td><td>&nbsp;</td><td>A = <sup>1</sup>&#8260;<sub>2</sub> * <sup>22</sup>&#8260;<sub>7</sub> * (<sup>5</sup>&#8260;<sub>6</sub>)<sup>2</sup></td></tr>'
										+'<tr><td>Solve:</td><td>&nbsp;</td><td>A = 1 <sup>23</sup>&#8260;<sub>252</sub></td></tr>'
										+'</table>'
										+'<br>'
										+'$$answerRound'
										+'<br><br>',
				answerHelp: dataUtils.pre('\\str{1 <sup>23</sup>&#8260;<sub>252</sub> sq. in or 1 <sup>23</sup>&#8260;<sub>252</sub> in<sup>2</sup>}'
								),
				answerRound: '',
                template: 'simpleQuestion' 
			}
			,
			{ // problem 8
				illustration: 'T.2/HalfCircle_d_10_1-2in_v2.jpg',
				alt: 'closed half circle diameter 10 1/2 in',
				width: '104px',
				height: '200px',
				imageClass: '',
				probQuestion: 'Find the area of the shape below.  Use <sup>22</sup>&#8260;<sub>7</sub> for &pi;. Give the answer as a mixed number. $$answerRound',
				simpleAnswer: dataUtils.pre('\\grp'+
												'{\\mixed{\\input{173}}{\\frac{\\input{1}}{\\input{4}}}}'+
												'{\\str{in<sup>2</sup>}}'
								),
				helpTexts: 'Identify the shape: &nbsp; Half Circle'
										+'<br><br>'
										+'The radius is given as 10 <sup>1</sup>&#8260;<sub>2</sub>.' 
										+'<br><br>'
										+'<table>'
										+'<tr><td>Formula:</td><td>&nbsp;</td><td>A = <sup>1</sup>&#8260;<sub>2</sub> * &pi; * r<sup>2</sup></td></tr>'
										+'<tr><td>Substitution:</td><td>&nbsp;</td><td>A = <sup>1</sup>&#8260;<sub>2</sub> * <sup>22</sup>&#8260;<sub>7</sub> * (10<sup>1</sup>&#8260;<sub>2</sub>)<sup>2</sup></td></tr>'
										+'<tr><td>Solve:</td><td>&nbsp;</td><td>A = 173 <sup>1</sup>&#8260;<sub>4</sub></td></tr>'
										+'</table>'
										+'<br>'
										+'$$answerRound'
										+'<br><br>',
				answerHelp: dataUtils.pre('\\str{173 <sup>1</sup>&#8260;<sub>4</sub> sq. in or 173 <sup>1</sup>&#8260;<sub>4</sub> in<sup>2</sup>}'
								),
				answerRound: '',
                template: 'simpleQuestion' 
			}
			,
			{ // problem 9
				illustration: 'T.2/HalfCircle_r_2_1-2mi_v2.jpg',
				alt: 'closed half circle diameter 2 1/2 mi',
				width: '104px',
				height: '200px',
				imageClass: 'buttonsright',
				probQuestion: 'Find the area of the shape below.  Use <sup>22</sup>&#8260;<sub>7</sub> for &pi;. Give the answer as a mixed number. $$answerRound',
				simpleAnswer: dataUtils.pre('\\grp'+
												'{\\mixed{\\input{9}}{\\frac{\\input{23}}{\\input{28}}}}'+
												'{\\str{mi<sup>2</sup>}}'
								),
				helpTexts: 'Identify the shape: &nbsp; Half Circle'
										+'<br><br>'
										+'The radius is given as 2 <sup>1</sup>&#8260;<sub>2</sub>.' 
										+'<br><br>'
										+'<table>'
										+'<tr><td>Formula:</td><td>&nbsp;</td><td>A = <sup>1</sup>&#8260;<sub>2</sub> * &pi; * r<sup>2</sup></td></tr>'
										+'<tr><td>Substitution:</td><td>&nbsp;</td><td>A = <sup>1</sup>&#8260;<sub>2</sub> * <sup>22</sup>&#8260;<sub>7</sub> * (2<sup>1</sup>&#8260;<sub>2</sub>)<sup>2</sup></td></tr>'
										+'<tr><td>Solve:</td><td>&nbsp;</td><td>A = 9 <sup>23</sup>&#8260;<sub>28</sub></td></tr>'
										+'</table>'
										+'<br>'
										+'$$answerRound'
										+'<br><br>',
				answerHelp: dataUtils.pre('\\str{9 <sup>23</sup>&#8260;<sub>28</sub> sq. mi or 9 <sup>23</sup>&#8260;<sub>28</sub> mi<sup>2</sup>}'
								),
				answerRound: '',
                template: 'simpleQuestion' 
			}
			,
			{ // problem 10
				illustration: 'T.2/15_Rectangle_Half_Circle03_No_E.jpg',
				alt: 'rectangle half circle',
				width: '300px',
				height: '186px',
				imageClass: '',
				probQuestion: 'What is the correct formula to find the area of this object?',
				buttonValueA: 'F',
				buttonLabelA: dataUtils.pre('\\str{A = a &#43; 2b &#43; (<sup>1</sup>&#8260;<sub>2</sub> * &pi; * d)}'),
				buttonValueB: 'T',
				buttonLabelB: dataUtils.pre('\\str{A = (b &bull; a) &#43; (<sup>1</sup>&#8260;<sub>2</sub> * &pi; * r<sup>2</sup>)}'),
				buttonValueC: 'F',
				buttonLabelC: dataUtils.pre('\\str{A = (b &bull; a) &#43; (<sup>1</sup>&#8260;<sub>2</sub> * &pi; * r<sup>2</sup>) &#43; d}'),
				buttonValueD: 'F',
				buttonLabelD: dataUtils.pre('\\str{A = a &#43; 2b &#43; (<sup>1</sup>&#8260;<sub>2</sub> * &pi; * r<sup>2</sup>)}'),
                firstHelp: 'Identify the shape:  A rectangle connected to a half circle.'
							+'<br><br>'
							+'The area of this shape is the area of the rectangle plus the area of the half circle.',
				secondHelp: 'A = (area of rectangle) &#43; (area of half circle)'
							+'<br><br>'
							+'Area of rectangle  =  l &bull; w.  In this figure we could use side b as the length and side a as the width. l &bull; w is the same as b &bull; a'
							+'<br><br>'
							+'Area of half circle =  <sup>1</sup>&#8260;<sub>2</sub> * &pi; * r<sup>2</sup>',
				thirdHelp: 'Add these together to get the area formula.'
							+'<br><br>'
							+'(b &bull; a) &#43; (<sup>1</sup>&#8260;<sub>2</sub> * &pi; * r<sup>2</sup>)',
				answerHelp: 'A = (b &bull; a) &#43; (<sup>1</sup>&#8260;<sub>2</sub> * &pi; * r<sup>2</sup>)',
				template: 'multipleChoice' 
			}
			,
			{ // problem 11
				illustration: 'T.2/16_Rectangle_Half_Circle03_s1-s2-s3.jpg',
				alt: 'rectangle half circle',
				width: '300px',
				height: '187px',
				imageClass: '',
				probQuestion: 'What is the correct formula to find the area of this object?',
				buttonValueA: 'F',
				buttonLabelA: dataUtils.pre('\\str{A = 2(s<sub>1</sub>) &#43; 2(s<sub>2</sub>) &#43; (<sup>1</sup>&#8260;<sub>2</sub> * &pi; * d)}'),
				buttonValueB: 'F',
				buttonLabelB: dataUtils.pre('\\str{A = s<sub>1</sub> &#43; 2(s<sub>2</sub>) &#43; s<sub>3</sub> &#43; (&pi; * d)}'),
				buttonValueC: 'F',
				buttonLabelC: dataUtils.pre('\\str{A = s<sub>1</sub> &#43; s<sub>2</sub> &#43; s<sub>3</sub> &#43; (&pi; * d)}'),
				buttonValueD: 'T',
				buttonLabelD: dataUtils.pre('\\str{A = s<sub>1</sub> &#43; s<sub>2</sub> &#43; s<sub>3</sub> &#43; (<sup>1</sup>&#8260;<sub>2</sub> * &pi; * d)}'),
                firstHelp: 'Identify the shape:  A rectangle connected to a half circle.',
				secondHelp: 'The perimeter (the outside of this shape) consists of three sides (s<sub>1</sub>, s<sub>2</sub>, and s<sub>3</sub>) <u>and</u> an open half circle (<sup>1</sup>&#8260;<sub>2</sub> of a circumference).'
							+'<br><br>'
							+'Distance of the three sides = s<sub>1</sub> &#43; s<sub>2</sub> &#43; s<sub>3</sub>'
							+'<br>'
							+'Distance of open half circle = <sup>1</sup>&#8260;<sub>2</sub> * &pi; * d',
				thirdHelp: 'Add these together to get the perimeter formula.',
				answerHelp: 'P = s<sub>1</sub> &#43; s<sub>2</sub> &#43; s<sub>3</sub> &#43; (<sup>1</sup>&#8260;<sub>2</sub> * &pi; * d)',
				template: 'multipleChoice' 
			}
			,
			{ // problem 12
				illustration: 'T.2/RectHalfCircle_a_3_1-2in_c_7in_v2.jpg',
				alt: 'rectangle half circle',
				width: '350px',
				height: '142px',
				imageClass: '',
				probQuestion: 'Find the area of the shape below. Use <sup>22</sup>&#8260;<sub>7</sub> for &pi;.',
				simpleAnswer: dataUtils.pre('\\grp'+
												'{\\input{23}}'+
												'{\\str{in}}'
								),
				helpTexts: 'Identify the shape: &nbsp; A rectangle connected to a half circle.'
										+'<br><br>'
										+'The perimeter (the outside of this shape) consists of three sides (a, b, and c) <u>and</u> an open half circle (<sup>1</sup>&#8260;<sub>2</sub> of a circumference).'
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
			{ // problem 13
				illustration: 'T.2/RectHalfCircle_s2_5_2-5cm_s3_6_1-2cm_v2.jpg',
				alt: 'rectangle half circle',
				width: '350px',
				height: '183px',
				imageClass: '',
				probQuestion: 'Find the area of the shape below. Use <sup>22</sup>&#8260;<sub>7</sub> for &pi;.',
				simpleAnswer: dataUtils.pre('\\grp'+
												'{\\mixed{\\input{26}}{\\frac{\\input{31}}{\\input{35}}}}'+
												'{\\str{cm}}'
								),
				helpTexts: 'Identify the shape: &nbsp; A rectangle connected to a half circle.'
										+'<br><br>'
										+'The perimeter (the outside of this shape) consists of three sides (s<sub>1</sub>, s<sub>2</sub>, and s<sub>3</sub>) <u>and</u> an open half circle (<sup>1</sup>&#8260;<sub>2</sub> of a circumference).'
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
			{ // problem 14
				illustration: 'T.2/RectHalfCircle_s2_11.5ft_s3_18.2ft_v2.jpg',
				alt: 'rectangle half circle',
				width: '350px',
				height: '167px',
				imageClass: '',
				probQuestion: 'Find the area of the shape below. Use 3.14 for &pi;. Round answer to the nearest whole.',
				simpleAnswer: dataUtils.pre('\\grp'+
												'{\\input{66}}'+
												'{\\str{ft}}'
								),
				helpTexts: 'Identify the shape: &nbsp; A rectangle connected to a half circle.'
										+'<br><br>'
										+'The perimeter (the outside of this shape) consists of three sides (s<sub>1</sub>, s<sub>2</sub>, and s<sub>3</sub>) <u>and</u> an open half circle (<sup>1</sup>&#8260;<sub>2</sub> of a circumference).'
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
			{ // problem 15
				illustration: 'T.2/RectHalfCircle_a_6.2m_c_10.5m_v2.jpg',
				alt: 'rectangle half circle',
				width: '350px',
				height: '165px',
				imageClass: '',
				probQuestion: 'Find the area of the shape below. Use 3.14 for &pi;. Round answer to the nearest whole.',
				simpleAnswer: dataUtils.pre('\\grp'+
												'{\\input{37}}'+
												'{\\str{m}}'
								),
				helpTexts: 'Identify the shape: &nbsp; A rectangle connected to a half circle.'
										+'<br><br>'
										+'The perimeter (the outside of this shape) consists of three sides (a, b, and c) <u>and</u> an open half circle (<sup>1</sup>&#8260;<sub>2</sub> of a circumference).'
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
			{ // problem 16
				illustration: 'T.2/RectHalfCircle_s2_14in_s3_12in_v2.jpg',
				alt: 'rectangle half circle',
				width: '300px',
				height: '211px',
				imageClass: '',
				probQuestion: 'Find the area of the shape below. Use <sup>22</sup>&#8260;<sub>7</sub> for &pi;.',
				simpleAnswer: dataUtils.pre('\\grp'+
												'{\\input{60}}'+
												'{\\str{in}}'
								),
				helpTexts: 'Identify the shape: &nbsp; A rectangle connected to a half circle.'
										+'<br><br>'
										+'The perimeter (the outside of this shape) consists of three sides (s<sub>1</sub>, s<sub>2</sub>, and s<sub>3</sub>) <u>and</u> an open half circle (<sup>1</sup>&#8260;<sub>2</sub> of a circumference).'
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
			{ // problem 17
				illustration: 'T.2/RectHalfCircle_a_21cm_b_15cm_v2.jpg',
				alt: 'rectangle half circle',
				width: '350px',
				height: '180px',
				imageClass: '',
				probQuestion: 'Find the area of the shape below. Use <sup>22</sup>&#8260;<sub>7</sub> for &pi;.',
				simpleAnswer: dataUtils.pre('\\grp'+
												'{\\input{84}}'+
												'{\\str{cm}}'
								),
				helpTexts: 'Identify the shape: &nbsp; A rectangle connected to a half circle.'
										+'<br><br>'
										+'The perimeter (the outside of this shape) consists of three sides (a, b, and c) <u>and</u> an open half circle (<sup>1</sup>&#8260;<sub>2</sub> of a circumference).'
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
			{ // problem 18
				illustration: 'T.2/Rect_HalfCircle_r_1_3-4ft_s3_4_1-5ft_v2.jpg',
				alt: 'rectangle half circle',
				width: '300px',
				height: '195px',
				imageClass: '',
				probQuestion: 'Find the area of the shape below. Use <sup>22</sup>&#8260;<sub>7</sub> for &pi;.',
				simpleAnswer: dataUtils.pre('\\grp'+
												'{\\mixed{\\input{17}}{\\frac{\\input{2}}{\\input{5}}}}'+
												'{\\str{ft}}'
								),
				helpTexts: 'Identify the shape: &nbsp; A rectangle connected to a half circle.'
										+'<br><br>'
										+'The perimeter (the outside of this shape) consists of three sides (s<sub>1</sub>, s<sub>2</sub>, and s<sub>3</sub>) <u>and</u> an open half circle (<sup>1</sup>&#8260;<sub>2</sub> of a circumference).'
										+'<br><br>'
										+'For the half circle, we are given the radius of 1 <sup>3</sup>&#8260;<sub>4</sub> ft. That means that the diameter (the dotted line) is double that (2 * 1 <sup>3</sup>&#8260;<sub>4</sub>) or 3 <sup>1</sup>&#8260;<sub>2</sub> ft.'
										+'<br><br>'
										+'The diameter (the dotted line) is the same distance as s<sub>2</sub> in this shape.'
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
			{ // problem 19
				illustration: 'T.2/24_Rect_HalfCircle_r_2_1-4in_s1_5_1-2in.jpg',
				alt: 'rectangle half circle',
				width: '300px',
				height: '194px',
				imageClass: '',
				probQuestion: 'Find the area of the shape below. Use <sup>22</sup>&#8260;<sub>7</sub> for &pi;.',
				simpleAnswer: dataUtils.pre('\\grp'+
												'{\\mixed{\\input{22}}{\\frac{\\input{4}}{\\input{7}}}}'+
												'{\\str{in}}'
								),
				helpTexts: 'Identify the shape: &nbsp; A rectangle connected to a half circle.'
										+'<br><br>'
										+'The perimeter (the outside of this shape) consists of three sides (s<sub>1</sub>, s<sub>2</sub>, and s<sub>3</sub>) <u>and</u> an open half circle (<sup>1</sup>&#8260;<sub>2</sub> of a circumference).'
										+'<br><br>'
										+'For the half circle, we are given the radius of 2 <sup>1</sup>&#8260;<sub>4</sub> in. That means that the diameter (the dotted line) is double that (2 * 2 <sup>1</sup>&#8260;<sub>4</sub>) or 4 <sup>1</sup>&#8260;<sub>2</sub> in.'
										+'<br><br>'
										+'The diameter (the dotted line) is the same distance as s<sub>2</sub> in this shape.'
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
        ];
	
	/*shuffle = [
				{ problems: [1,2,3,4,5,6,7,8,9,10], total: 8},
				{ problems: [11,12], total: 1},
				{ problems: [13,14,15,16], total: 1}
		];

    
    	return dataUtils.build(desc, template, data, shuffle);*/

    return dataUtils.build(desc, template, data);
	
}]);

