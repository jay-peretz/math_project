/*global angular */
angular.module('mathSkills').service('data_t_1', ['dataUtils', function (dataUtils) {
    var desc = {
			title: 'T.1 Perimeter of Trapezoids and Shapes Consisting of Two Rectangles',
    		path: 't.1-perimeter-of-trapezoids-and-shapes-consisting-of-two-rectangles',
            children: []
        },
        template = {
			multipleChoice: {
                title: 'Perimeter of Trapezoids and Shapes Consisting of Two Rectangles',
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
										+'{\\html{$firstHelp}}'
										+'{\\html{&nbsp;}}'
										+'{\\html{$secondHelp}}'
										+'{\\html{&nbsp;}}'
										+'{\\html{$thirdHelp}}'
										+'{\\html{&nbsp;}}'
										+'{\\css'
											+'{\\grp'
												+'{\\html{Answer: &nbsp;}}'
												+'{\\str{$answerHelp}}'
											+'}'
											+'{help-answer-text}'
										+'}'
                        }
                    }]
                }]
            },
			simpleQuestion: {
                title: 'Perimeter of Trapezoids and Shapes Consisting of Two Rectangles',
                children: [{
                    title: 'Main Answer',
                    children: [{
						problem: '\\rowgrp'
									+'{\\str{$probQuestion}}'
									+'{\\html{&nbsp;}}'
									+'{\\image{$illustration}{$alt}{$width}{$height}}',
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
            }
        },
        data = [
			{ // problem 1
				probQuestion: 'Which distances are the same length?',
				illustration: 'T.1/Trapezoid_01.jpg',
				buttonValueA: 'F',
				buttonLabelA: dataUtils.pre('\\str{d and b}'),
				buttonValueB: 'F',
				buttonLabelB: dataUtils.pre('\\str{e and b}'),
				buttonValueC: 'T',
				buttonLabelC: dataUtils.pre('\\str{a and c}'),
				buttonValueD: 'F',
				buttonLabelD: dataUtils.pre('\\str{no sides are known to be equal in length}'),
				aValue: '<em>a</em>',
				bValue: '<em>b</em>',
				cValue: '<em>c</em>',
				dValue: '<em>d</em>',
                firstHelp: 'Sides $$dValue and $$bValue are not parallel, and they are not equal in length.  Side $$dValue is longer than side $$bValue.',
				secondHelp: 'Sides $$aValue and $$cValue are parallel, but not equal in length.  Side $$cValue is longer than side $$aValue.',
				thirdHelp: 'Only sides $$bValue and $$cValue are equal in length. They are actually opposite sides of an internal rectangle.',
				answerHelp: 'Sides $$cValue and $$bValue are equal in length',
				template: 'multipleChoice' 
			}
			,
			{ // problem 2
				probQuestion: 'Which distances are the same length?',
				illustration: 'T.1/Trapezoid_02.jpg',
				buttonValueA: 'F',
				buttonLabelA: dataUtils.pre('\\str{s<sub>1</sub> and s<sub>3</sub>}'),
				buttonValueB: 'T',
				buttonLabelB: dataUtils.pre('\\str{s<sub>2</sub> and s<sub>4</sub>}'),
				buttonValueC: 'F',
				buttonLabelC: dataUtils.pre('\\str{s<sub>1</sub> and s<sub>4</sub>}'),
				buttonValueD: 'F',
				buttonLabelD: dataUtils.pre('\\str{no sides are known to be equal in length}'),
				s1Value: 's<sub>1</sub>',
				s2Value: 's<sub>2</sub>',
				s3Value: 's<sub>3</sub>',
				s4Value: 's<sub>4</sub>',
                firstHelp: '$$s1Value and $$s3Value are parallel, but not equal in length: $$s3Value is longer than $$s1Value.',
				secondHelp: '$$s2Value and $$s4Value are not parallel, and they are not equal in length: $$s2Value is longer than $$s4Value.',
				thirdHelp: '$$s1Value and $$s4Value would only be equal if the internal rectangle was actually a square. We don\'t know this, so we <u><strong>cannot</strong></u> assume they are equal.',
				answerHelp: 'no sides are known to be equal in length',
				template: 'multipleChoice'
			}
			,
			{ // problem 3
				probQuestion: 'Choose the formula that would correctly solve for the perimeter of the trapezoid below.',
				illustration: 'T.1/Trapezoid_01.jpg',
				buttonValueA: 'F',
				buttonLabelA: dataUtils.pre('\\str{P = a + b + c + d + e}'),
				buttonValueB: 'F',
				buttonLabelB: dataUtils.pre('\\str{P = 2a + 2b}'),
				buttonValueC: 'T',
				buttonLabelC: dataUtils.pre('\\str{P = a + b + c + d}'),
				buttonValueD: 'F',
				buttonLabelD: dataUtils.pre('\\str{P = a + b + (e - c) + d}'),
                firstHelp: 'The four sides of the trapezoid make up its perimeter (the distance around the outside of the shape).  Side e is <u><strong>inside</strong></u> the trapezoid so it is <u><strong>not</strong></u> part of the perimeter.',
				secondHelp: 'No two sides are the same length, so no sides can be duplicated.',
				thirdHelp: 'The correct formula is: &nbsp; P = a + b + c + d',
				answerHelp: 'P = a + b + c + d',
				template: 'multipleChoice'
			}
			,
			{ // problem 4
				probQuestion: 'Choose the formula that would correctly solve for the perimeter of the trapezoid below.',
				illustration: 'T.1/Trapezoid_02.jpg',
				buttonValueA: 'F',
				buttonLabelA: dataUtils.pre('\\str{P = 2($$s1Value) + 2($$s4Value)}'),
				buttonValueB: 'T',
				buttonLabelB: dataUtils.pre('\\str{P = $$s1Value + $$s2Value + $$s3Value + $$s4Value}'),
				buttonValueC: 'F',
				buttonLabelC: dataUtils.pre('\\str{P = 4($$s1Value)}'),
				buttonValueD: 'F',
				buttonLabelD: dataUtils.pre('\\str{P = ($$s3Value - $$s1Value) + $$s2Value + $$s4Value}'),
				s1Value: 's<sub>1</sub>',
				s2Value: 's<sub>2</sub>',
				s3Value: 's<sub>3</sub>',
				s4Value: 's<sub>4</sub>',
                firstHelp: 'The four sides of the trapezoid make up its perimeter (the distance around the outside of the shape).',
				secondHelp: 'No two sides are the same length, so no sides can be duplicated.',
				thirdHelp: 'The correct formula is: &nbsp; P = $$s1Value + $$s2Value + $$s3Value + $$s4Value',
				answerHelp: 'P = $$s1Value + $$s2Value + $$s3Value + $$s4Value',
				template: 'multipleChoice'
			}
			,
			{ // problem 5
				illustration: 'T.1/Trap_a_10in_b_4in_d_5in.jpg',
				alt: 'trapezoid',
				width: '300px',
				height: '127px',
				probQuestion: 'What is the length of side $$cValue?',
				simpleAnswer: dataUtils.pre('\\grp'+
												'{\\input{13}}'+
												'{\\str{in}}'
								),
				aValue: '<em>a</em>',
				bValue: '<em>b</em>',
				cValue: '<em>c</em>',
				dValue: '<em>d</em>',
				helpTexts: 'The length of side $$cValue is the same as side $$aValue (10 inches) plus the 3 inches that are the base of the internal triangle.<br><br><table><tr><td>Distance of side $$cValue &nbsp; = &nbsp;</td><td>$$aValue + 3</td></tr>'
										+'<tr><td>&nbsp;</td><td>10 + 3</td></tr></table><br>',
				answerHelp: dataUtils.pre('\\str{13 in}'
								),
				template: 'simpleQuestion' 
			}
			,
			{ // problem 6
				illustration: 'T.1/Trap_s1_8m_s2_3.75m_s4_3m.jpg',
				alt: 'trapezoid',
				width: '400px',
				height: '144px',
				probQuestion: 'What is the length of side $$s3Value?',
				simpleAnswer: dataUtils.pre('\\grp'+
												'{\\input{10.25}}'+
												'{\\str{m}}'
								),
				s1Value: 's<sub>1</sub>',
				s2Value: 's<sub>2</sub>',
				s3Value: 's<sub>3</sub>',
				s4Value: 's<sub>4</sub>',
				helpTexts: 'The length of side $$s3Value is the same distance as side $$s1Value (8 meters) plus the 2.25 meters that are the base of the internal triangle.<br><br><table><tr><td>Distance of side $$s3Value &nbsp; = &nbsp; </td><td>$$s1Value + 2.25</td></tr>'
										+'<tr><td>&nbsp;</td><td>8 + 2.25</td></tr></table><br>',
				answerHelp: dataUtils.pre('\\str{10.25 m}'
								),
				template: 'simpleQuestion' 
			}
			,
			{ // problem 7
				illustration: 'T.1/Trap_a_10in_b_4in_d_5in.jpg',
				alt: 'trapezoid',
				width: '300px',
				height: '127px',
				probQuestion: 'Solve for the perimeter of the following shape:',
				simpleAnswer: dataUtils.pre('\\grp'+
												'{\\input{32}}'+
												'{\\str{in}}'
								),
				aValue: 'a',
				bValue: 'b',
				cValue: 'c',
				dValue: 'd',
                helpTexts: 'Identify the shape: &nbsp; Trapezoid<br><br><table><tr><td>Write the formula:&nbsp;&nbsp;</td><td>P = $$aValue + $$bValue + $$cValue + $$dValue</td></tr>'
										+'<tr><td>Substitution:&nbsp;&nbsp;</td><td>P = 10 + 4 + (10 + 3) + 5</td></tr>'
										+'<tr><td>Solve:&nbsp;&nbsp;</td><td> P = 32</td></tr></table><br>',
				answerHelp: dataUtils.pre('\\str{32 in}'
								),
				template: 'simpleQuestion' 
			}
			,
			{ // problem 8
				illustration: 'T.1/Trap_s1_8m_s2_3.75m_s4_3m.jpg',
				alt: 'trapezoid',
				width: '400px',
				height: '144px',
				probQuestion: 'Solve for the perimeter of the following shape:',
				simpleAnswer: dataUtils.pre('\\grp'+
												'{\\input{25}}'+
												'{\\str{m}}'
								),
				s1Value: 's<sub>1</sub>',
				s2Value: 's<sub>2</sub>',
				s3Value: 's<sub>3</sub>',
				s4Value: 's<sub>4</sub>',
				helpTexts: 'Identify the shape: &nbsp; Trapezoid<br><br><table><tr><td>Write the formula:&nbsp;&nbsp;</td><td>P = $$s1Value + $$s2Value + $$s3Value + $$s4Value</td></tr>'
										+'<tr><td>Substitution:&nbsp;&nbsp;</td><td>P = 8 + 3.75 + (8 + 2.25) + 3</td></tr>'
										+'<tr><td>Solve:&nbsp;&nbsp;</td><td> P = 25</td></tr></table><br>',
				answerHelp: dataUtils.pre('\\str{25 m}'
								),
				template: 'simpleQuestion' 
			}
			,
			{ // problem 9
				illustration: 'T.1/Trapezoid-15cm.jpg',
				alt: 'trapezoid',
				width: '387px',
				height: '182px',
				probQuestion: 'Solve for the perimeter of the following shape:',
				simpleAnswer: dataUtils.pre('\\grp'+
												'{\\input{70}}'+
												'{\\str{m}}'
								),
				s1Value: 's<sub>1</sub>',
				s2Value: 's<sub>2</sub>',
				s3Value: 's<sub>3</sub>',
				s4Value: 's<sub>4</sub>',
				helpTexts: 'Identify the shape: &nbsp; Trapezoid<br><br><table><tr><td>Write the formula:&nbsp; </td><td>P = $$s1Value + $$s2Value + $$s3Value + $$s4Value</td></tr>'
										+'<tr><td>Substitution:&nbsp; </td><td>P = 15 + 12.5 + (7.5 + 1.5 + 7.5) + 12.5</td></tr>'
										+'<tr><td>Solve:&nbsp; </td><td> P = 70</td></tr></table><br>',
				answerHelp: dataUtils.pre('\\str{70 m}'
								),
				template: 'simpleQuestion' 
			}
			,
			{ // problem 10
				illustration: 'T.1/Notched_Rectangle_04.jpg',
				alt: 'trapezoid',
				width: '300px',
				height: '159px',
				probQuestion: 'Solve for the perimeter of the following shape:',
				simpleAnswer: dataUtils.pre('\\grp'+
												'{\\input{124}}'+
												'{\\str{ft}}'
								),
				aValue: 'a',
				bValue: 'b',
				cValue: 'c',
				dValue: 'd',
                helpTexts: 'Identify the shape: &nbsp; Trapezoid<br><br><table><tr><td>Write the formula:&nbsp;</td><td>P = $$aValue + $$bValue + $$cValue + $$dValue</td></tr>'
										+'<tr><td>Substitution:&nbsp;</td><td>P = 22 + 25 + (15 + 22 +15) + 25</td></tr>'
										+'<tr><td>Solve:&nbsp;</td><td> P = 124</td></tr></table><br>',
				answerHelp: dataUtils.pre('\\str{124 ft}'
								),
				template: 'simpleQuestion' 
			}
			,
			{ // problem 11
				probQuestion: 'Choose the expression that has the same length as $$s1Value.',
				illustration: 'T.1/Notched_Rectangle_04.jpg',
				buttonValueA: 'T',
				buttonLabelA: dataUtils.pre('\\str{$$s3Value - $$s5Value}'),
				buttonValueB: 'F',
				buttonLabelB: dataUtils.pre('\\str{$$s2Value}'),
				buttonValueC: 'F',
				buttonLabelC: dataUtils.pre('\\str{$$s4Value - $$s6Value}'),
				buttonValueD: 'F',
				buttonLabelD: dataUtils.pre('\\str{$$s3Value + $$s5Value}'),
				s1Value: 's<sub>1</sub>',
				s2Value: 's<sub>2</sub>',
				s3Value: 's<sub>3</sub>',
				s4Value: 's<sub>4</sub>',
				s5Value: 's<sub>5</sub>',
				s6Value: 's<sub>6</sub>',
                firstHelp: '$$s1Value is a horizontal distance.',
				secondHelp: '$$s3Value is the long horizontal side. The other two horizontal sides, $$s5Value plus $$s1Value together equal the length of $$s3Value.',
				thirdHelp: 'If we subtract $$s5Value from $$s3Value, we have $$s1Value.',
				answerHelp: '$$s3Value - $$s5Value',
				template: 'multipleChoice'
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

