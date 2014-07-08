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
										+'{\\html{$helpTexts}}'
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
				buttonLabelA: dataUtils.pre('\\html{d and b}'),
				buttonValueB: 'T',
				buttonLabelB: dataUtils.pre('\\html{e and b}'),
				buttonValueC: 'F',
				buttonLabelC: dataUtils.pre('\\html{a and c}'),
				buttonValueD: 'F',
				buttonLabelD: dataUtils.pre('\\html{no sides are known to be equal in length}'),
				aValue: '<em>a</em>',
				bValue: '<em>b</em>',
				cValue: '<em>c</em>',
				dValue: '<em>d</em>',
				eValue: '<em>e</em>',
                firstHelp: 'Sides $$dValue and $$bValue are not parallel, and they are not equal in length.  Side $$dValue is longer than side $$bValue.',
				secondHelp: 'Sides $$aValue and $$cValue are parallel, but not equal in length.  Side $$cValue is longer than side $$aValue.',
				thirdHelp: 'Only sides $$bValue and $$eValue are equal in length. They are actually opposite sides of an internal rectangle.',
				answerHelp: 'Sides $$eValue and $$bValue are equal in length',
				template: 'multipleChoice' 
			}
			,
			{ // problem 2
				probQuestion: 'Which distances are the same length?',
				illustration: 'T.1/Trapezoid_02.jpg',
				buttonValueA: 'F',
				buttonLabelA: dataUtils.pre('\\html{s<sub>1</sub> and s<sub>3</sub>}'),
				buttonValueB: 'F',
				buttonLabelB: dataUtils.pre('\\html{s<sub>2</sub> and s<sub>4</sub>}'),
				buttonValueC: 'F',
				buttonLabelC: dataUtils.pre('\\html{s<sub>1</sub> and s<sub>4</sub>}'),
				buttonValueD: 'T',
				buttonLabelD: dataUtils.pre('\\html{no sides are known to be equal in length}'),
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
				buttonLabelA: dataUtils.pre('\\html{P = a + b + c + d + e}'),
				buttonValueB: 'F',
				buttonLabelB: dataUtils.pre('\\html{P = 2a + 2b}'),
				buttonValueC: 'T',
				buttonLabelC: dataUtils.pre('\\html{P = a + b + c + d}'),
				buttonValueD: 'F',
				buttonLabelD: dataUtils.pre('\\html{P = a + b + (e <span class=bigger>-</span> c) + d}'),
                firstHelp: 'The four sides of the trapezoid make up its perimeter (the distance around the outside of the shape).  Side e is <u><strong>inside</strong></u> the trapezoid so it is <u><strong>not</strong></u> part of the perimeter.',
				secondHelp: 'No two sides are the same length, so no sides can be doubled.',
				thirdHelp: 'The correct formula is: &nbsp; P = a + b + c + d',
				answerHelp: 'P = a + b + c + d',
				template: 'multipleChoice'
			}
			,
			{ // problem 4
				probQuestion: 'Choose the formula that would correctly solve for the perimeter of the trapezoid below.',
				illustration: 'T.1/Trapezoid_02.jpg',
				buttonValueA: 'F',
				buttonLabelA: dataUtils.pre('\\html{P = 2($$s1Value) + 2($$s4Value)}'),
				buttonValueB: 'T',
				buttonLabelB: dataUtils.pre('\\html{P = $$s1Value + $$s2Value + $$s3Value + $$s4Value}'),
				buttonValueC: 'F',
				buttonLabelC: dataUtils.pre('\\html{P = 4($$s1Value)}'),
				buttonValueD: 'F',
				buttonLabelD: dataUtils.pre('\\html{P = ($$s3Value <span class=bigger>-</span> $$s1Value) + $$s2Value + $$s4Value}'),
				s1Value: 's<sub>1</sub>',
				s2Value: 's<sub>2</sub>',
				s3Value: 's<sub>3</sub>',
				s4Value: 's<sub>4</sub>',
                firstHelp: 'The four sides of the trapezoid make up its perimeter (the distance around the outside of the shape).',
				secondHelp: 'No two sides are the same length, so no sides can be doubled.',
				thirdHelp: 'The correct formula is: &nbsp; P = $$s1Value + $$s2Value + $$s3Value + $$s4Value',
				answerHelp: 'P = $$s1Value + $$s2Value + $$s3Value + $$s4Value',
				template: 'multipleChoice'
			}
			,
			{ // problem 5
				illustration: 'T.1/Trap_a_10in_b_4in_d_5in.jpg',
				alt: 'trapezoid',
				width: '400px',
				height: '156px',
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
				width: '400px',
				height: '156px',
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
										+'<tr><td>Substitution:&nbsp; </td><td>P = 15 + 12.5 + (7.5 + 15 + 7.5) + 12.5</td></tr>'
										+'<tr><td>Solve:&nbsp; </td><td> P = 70</td></tr></table><br>',
				answerHelp: dataUtils.pre('\\str{70 m}'
								),
				template: 'simpleQuestion' 
			}
			,
			{ // problem 10
				illustration: 'T.1/Trap_a_22ft_b_25ft.jpg',
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
				buttonLabelA: dataUtils.pre('\\html{$$s3Value <span class=bigger>-</span> $$s5Value}'),
				buttonValueB: 'F',
				buttonLabelB: dataUtils.pre('\\html{$$s2Value}'),
				buttonValueC: 'F',
				buttonLabelC: dataUtils.pre('\\html{$$s4Value <span class=bigger>-</span> $$s6Value}'),
				buttonValueD: 'F',
				buttonLabelD: dataUtils.pre('\\html{$$s3Value + $$s5Value}'),
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
			,
			{ // problem 12
				probQuestion: 'Choose the expression that has the same length as $$s2Value.',
				illustration: 'T.1/Notched_Rectangle_04.jpg',
				buttonValueA: 'F',
				buttonLabelA: dataUtils.pre('\\html{$$s4Value + $$s6Value}'),
				buttonValueB: 'F',
				buttonLabelB: dataUtils.pre('\\html{$$s3Value <span class=bigger>-</span> $$s6Value}'),
				buttonValueC: 'T',
				buttonLabelC: dataUtils.pre('\\html{$$s4Value <span class=bigger>-</span> $$s6Value}'),
				buttonValueD: 'F',
				buttonLabelD: dataUtils.pre('\\html{$$s3Value + $$s5Value}'),
				s1Value: 's<sub>1</sub>',
				s2Value: 's<sub>2</sub>',
				s3Value: 's<sub>3</sub>',
				s4Value: 's<sub>4</sub>',
				s5Value: 's<sub>5</sub>',
				s6Value: 's<sub>6</sub>',
                firstHelp: '$$s2Value is a vertical distance.',
				secondHelp: '$$s4Value is the long vertical side. The other two vertical sides, $$s6Value plus $$s2Value together equal the length of $$s4Value.',
				thirdHelp: 'If we subtract $$s6Value from $$s4Value, we have $$s2Value.',
				answerHelp: '$$s4Value - $$s6Value',
				template: 'multipleChoice'
			}
			,
			{ // problem 13
				probQuestion: 'Choose the expression that has the same length as $$s3Value.',
				illustration: 'T.1/Notched_Rectangle_04.jpg',
				buttonValueA: 'F',
				buttonLabelA: dataUtils.pre('\\html{$$s4Value <span class=bigger>-</span> $$s5Value}'),
				buttonValueB: 'F',
				buttonLabelB: dataUtils.pre('\\html{$$s4Value}'),
				buttonValueC: 'F',
				buttonLabelC: dataUtils.pre('\\html{$$s2Value + $$s6Value}'),
				buttonValueD: 'T',
				buttonLabelD: dataUtils.pre('\\html{$$s5Value + $$s1Value}'),
				s1Value: 's<sub>1</sub>',
				s2Value: 's<sub>2</sub>',
				s3Value: 's<sub>3</sub>',
				s4Value: 's<sub>4</sub>',
				s5Value: 's<sub>5</sub>',
				s6Value: 's<sub>6</sub>',
                firstHelp: '$$s3Value is a horizontal distance.',
				secondHelp: '$$s3Value is the long horizontal side. ',
				thirdHelp: 'The other two horizontal sides, $$s5Value and $$s1Value, must be added together to equal the length of $$s3Value.',
				answerHelp: '$$s5Value + $$s1Value',
				template: 'multipleChoice'
			}
			,
			{ // problem 14
				probQuestion: 'Choose the expression that has the same length as $$s4Value.',
				illustration: 'T.1/Notched_Rectangle_04.jpg',
				buttonValueA: 'F',
				buttonLabelA: dataUtils.pre('\\html{$$s5Value + $$s1Value}'),
				buttonValueB: 'F',
				buttonLabelB: dataUtils.pre('\\html{$$s3Value + $$s2Value}'),
				buttonValueC: 'F',
				buttonLabelC: dataUtils.pre('\\html{$$s3Value <span class=bigger>-</span> $$s5Value}'),
				buttonValueD: 'T',
				buttonLabelD: dataUtils.pre('\\html{$$s6Value + $$s2Value}'),
				s1Value: 's<sub>1</sub>',
				s2Value: 's<sub>2</sub>',
				s3Value: 's<sub>3</sub>',
				s4Value: 's<sub>4</sub>',
				s5Value: 's<sub>5</sub>',
				s6Value: 's<sub>6</sub>',
                firstHelp: '$$s4Value is a vertical distance.',
				secondHelp: '$$s4Value is the long vertical side.',
				thirdHelp: 'The other two vertical sides, $$s6Value and $$s2Value, must be added together to equal the length of $$s4Value.',
				answerHelp: '$$s6Value + $$s2Value',
				template: 'multipleChoice'
			}
			,
			{ // problem 15
				probQuestion: 'Choose the expression that has the same length as $$s5Value.',
				illustration: 'T.1/Notched_Rectangle_04.jpg',
				buttonValueA: 'F',
				buttonLabelA: dataUtils.pre('\\html{$$s3Value <span class=bigger>-</span> $$s6Value}'),
				buttonValueB: 'F',
				buttonLabelB: dataUtils.pre('\\html{$$s4Value <span class=bigger>-</span> $$s2Value}'),
				buttonValueC: 'T',
				buttonLabelC: dataUtils.pre('\\html{$$s3Value <span class=bigger>-</span> $$s1Value}'),
				buttonValueD: 'F',
				buttonLabelD: dataUtils.pre('\\html{$$s1Value + $$s6Value}'),
				s1Value: 's<sub>1</sub>',
				s2Value: 's<sub>2</sub>',
				s3Value: 's<sub>3</sub>',
				s4Value: 's<sub>4</sub>',
				s5Value: 's<sub>5</sub>',
				s6Value: 's<sub>6</sub>',
                firstHelp: '$$s5Value is a horizontal distance.',
				secondHelp: '$$s3Value is the long horizontal side. The other two horizontal sides, $$s5Value and $$s1Value together equal the length of $$s3Value.',
				thirdHelp: 'If we subtract $$s1Value from $$s3Value, we have $$s5Value.',
				answerHelp: '$$s3Value - $$s1Value',
				template: 'multipleChoice'
			}
			,
			{ // problem 16
				probQuestion: 'Choose the expression that has the same length as $$s6Value.',
				illustration: 'T.1/Notched_Rectangle_04.jpg',
				buttonValueA: 'T',
				buttonLabelA: dataUtils.pre('\\html{$$s4Value <span class=bigger>-</span> $$s2Value}'),
				buttonValueB: 'F',
				buttonLabelB: dataUtils.pre('\\html{$$s3Value <span class=bigger>-</span> $$s5Value}'),
				buttonValueC: 'F',
				buttonLabelC: dataUtils.pre('\\html{$$s4Value + $$s6Value}'),
				buttonValueD: 'F',
				buttonLabelD: dataUtils.pre('\\html{$$s3Value + $$s5Value}'),
				s1Value: 's<sub>1</sub>',
				s2Value: 's<sub>2</sub>',
				s3Value: 's<sub>3</sub>',
				s4Value: 's<sub>4</sub>',
				s5Value: 's<sub>5</sub>',
				s6Value: 's<sub>6</sub>',
                firstHelp: '$$s6Value is a vertical distance.',
				secondHelp: '$$s4Value is the long vertical side. The other two vertical sides, $$s6Value plus $$s2Value together equal the length of $$s4Value.',
				thirdHelp: 'If we subtract $$s2Value from $$s4Value, we have $$s6Value.',
				answerHelp: '$$s4Value - $$s2Value',
				template: 'multipleChoice'
			}
			,
			{ // problem 17
				illustration: 'T.1/Notched_Rectangle_02.jpg',
				alt: 'notched rectangle',
				width: '400px',
				height: '151px',
				probQuestion: 'Solve for the perimeter of the following shape. All measurements are in meters.',
				simpleAnswer: dataUtils.pre('\\grp'+
												'{\\input{36}}'+
												'{\\str{m}}'
								),
				s1Value: 's<sub>1</sub>',
				s2Value: 's<sub>2</sub>',
				s3Value: 's<sub>3</sub>',
				s4Value: 's<sub>4</sub>',
				s5Value: 's<sub>5</sub>',
				s6Value: 's<sub>6</sub>',
                helpTexts: 'Identify the shape: &nbsp; six&#45;sided figure.<br><br>'
				+'First, we need to solve for the unknown lengths of $$s1Value and $$s2Value.<br><br>'
				+'<table><tr><td>$$s1Value = $$s3Value + $$s5Value</td><td><span class=marginLeft80px>&nbsp;</span></td><td>$$s2Value = $$s6Value + $$s4Value</td></tr>'
										+'<tr><td>$$s1Value = 6 + 4</td><td><span class=marginLeft80px>&nbsp;</span></td><td>$$s2Value = 3 + 5</td></tr>'
										+'<tr><td><strong>$$s1Value = 10</strong></td><td><span class=marginLeft80px>&nbsp;</span></td><td><strong>$$s2Value = 8</strong></td></tr></table><br><br>'
				+'Now we can write the formula and substitute.<br><br>'
				+'<table><tr><td>Formula:&nbsp;</td><td>P = $$s1Value + $$s2Value + $$s3Value + $$s4Value + $$s5Value + $$s6Value</td></tr>'
										+'<tr><td>Substitution:&nbsp;</td><td>P = 10 + 8 + 6 + 5 + 4 + 3</td></tr>'
										+'<tr><td>Solve:&nbsp;</td><td> P = 36</td></tr></table><br>',
				answerHelp: dataUtils.pre('\\str{36 m}'
								),
				template: 'simpleQuestion' 
			}
			,
			{ // problem 18
				illustration: 'T.1/Notched_Rectangle_01.jpg',
				alt: 'notched rectangle',
				width: '400px',
				height: '216px',
				probQuestion: 'Solve for the perimeter of the following shape. All measurements are in feet.',
				simpleAnswer: dataUtils.pre('\\grp'+
												'{\\input{52}}'+
												'{\\str{ft}}'
								),
				aValue: 'a',
				bValue: 'b',
				cValue: 'c',
				dValue: 'd',
				eValue: 'e',
				fValue: 'f',
                helpTexts: 'Identify the shape: &nbsp; six&#45;sided figure.<br><br>'
				+'First, we need to solve for the unknown lengths of side \\"$$bValue\\" and side \\"$$cValue\\".<br><br>'
				+'<table><tr><td>$$bValue = $$fValue <span class=bigger>-</span> $$dValue</td><td><span class=marginLeft80px>&nbsp;</span></td><td>$$cValue = $$eValue <span class=bigger>-</span> $$aValue</td></tr>'
										+'<tr><td>$$bValue = 10 <span class=bigger>-</span> 7</td><td><span class=marginLeft80px>&nbsp;</span></td><td>$$cValue = 16 <span class=bigger>-</span> 12</td></tr>'
										+'<tr><td><strong>$$bValue = 3</strong></td><td><span class=marginLeft80px>&nbsp;</span></td><td><strong>$$cValue = 4</strong></td></tr></table><br><br>'
				+'Now we can write the formula and substitute.<br><br>'
				+'<table><tr><td>Formula:&nbsp;</td><td>P = $$aValue + $$bValue + $$cValue + $$dValue + $$eValue + $$fValue</td></tr>'
										+'<tr><td>Substitution:&nbsp;</td><td>P = 12 + 3 + 4 + 7 + 16 + 10</td></tr>'
										+'<tr><td>Solve:&nbsp;</td><td> P = 52</td></tr></table><br>',
				answerHelp: dataUtils.pre('\\str{52 ft}'
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

