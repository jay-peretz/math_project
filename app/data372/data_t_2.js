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
					   				'{\\btngrp'+
										'{\\rowgrp'+
											'{\\grp{\\btn{A}{$buttonValueA}{marg}}{$buttonLabelA}}'+
											'{\\grp{\\btn{B}{$buttonValueB}{marg}}{$buttonLabelB}}'+
											'{\\grp{\\btn{C}{$buttonValueC}{marg}}{$buttonLabelC}}'+
											'{\\grp{\\btn{D}{$buttonValueD}{marg}}{$buttonLabelD}}'+
										'}'+
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
				template: 'simpleQuestion' 
			}
			,
			{ // problem 4
				probQuestion: 'The arc below is an open half circle. What is the formula to find the distance of this arc?<br><br>',
				illustration: 'T.2/Half_Circle_Closed02.jpg',
				alt: 'open half circle',
				width: '100px',
				height: '200px',
				buttonValueA: 'T',
				buttonLabelA: dataUtils.pre('\\str{<sup>1</sup>&#8260;<sub>2</sub> * &pi; * d}'),
				buttonValueB: 'F',
				buttonLabelB: dataUtils.pre('\\str{<sup>1</sup>&#8260;<sub>2</sub> * d &#43; d}'),
				buttonValueC: 'F',
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
				template: 'simpleQuestion' 
			}
			,
			{ // problem 12
				illustration: 'T.2/',
				alt: 'closed half circle diameter 1 2/3 in',
				width: '171px',
				height: '200px',
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
												'{\\str{in}}'
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

