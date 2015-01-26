/*global angular */

angular.module('mathSkills').value('data_v_1', {
    title: 'V.1 Volume',
    path: 'V.1-volume',
    children: [{
        title: 'Volume',
        children: [] }]
});

/*global angular */

angular.module('mathSkills').service('data_v_1', ['dataUtils', function (dataUtils) {
    var desc = {
			title: 'V.1 Volume',
    		path: 'v.1-volume',
            children: []
        },
	        template = {
			
			flexy: {
                title: 'Volume',
                children: [{
                    title: 'Main Answer',
                    children: [{
						problem: '\\rowgrp'
										+'{\\str{$probQuestion}}'
										+'{\\html{&nbsp;}}'
										//+'{\\image{$illustration}{$alt}}'
										,
						answer: '$solution',
						controls: {
								"checkAnswer": true,
								"help": '\\rowgrp' 	 
											+'$firstTable'
											+'{\\html{&nbsp;}}'
											+'{css'
												+'{\\grp'
													+'{\\str{Answer: &nbsp;}}'
													+'{$helpAnswer}'
												+'}'
												+'{help-answer-text}'
											+'}'
											+'{\\html{&nbsp;}}'
						}
					}]
				}]
			}
        },
        data = [
				{	// problem 1
					probQuestion: 'Find the volume of the shape below.',
					illustration: '',
					alt: 'rectangular box 8 x 12 x 5',
					answerInstructions: '',
					ansNumber: '480',
					solution: dataUtils.pre(
									'\\grp'
										+'{\\input{$$ansNumber}}'
										+'{\\exp{\\str{ft}}{\\input{3}}}'
						),
					firstTable: dataUtils.pre(
										'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{Identify the shape:}}'
												+'{width140}'
											+'}'
											+'{\\str{Rectangular Box}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{Write the formula:}}'
												+'{width140}'
											+'}'
											+'{\\str{V = L * W * H}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{Substitution:}}'
												+'{width140}'
											+'}'
											+'{\\str{V = ( 8 ) * ( 12 ) * ( 5 )}}'
										+'}'
										+'{\\str{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{Solve:}}'
												+'{width140}'
											+'}'
											+'{\\str{V = $$ansNumber}}'
										+'}'
								),
					helpAnswer: dataUtils.pre(
									'\\grp'
										+'{\\str{ &nbsp; $$ansNumber}}'
										+'{\\exp{\\str{ft}}{\\str{3}}}'
						),
					template: 'flexy',
				}
				,
				{	// problem 2
					probQuestion: 'Find the volume of the shape below.',
					illustration: '',
					alt: 'rectangular box 10 x 6 x 7',
					answerInstructions: '',
					ansNumber: '420',
					solution: dataUtils.pre(
									'\\grp'
										+'{\\input{$$ansNumber}}'
										+'{\\exp{\\str{cm}}{\\input{3}}}'
						),
					firstTable: dataUtils.pre(
										'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{Identify the shape:}}'
												+'{width140}'
											+'}'
											+'{\\str{Rectangular Box}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{Write the formula:}}'
												+'{width140}'
											+'}'
											+'{\\str{V = L * W * H}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{Substitution:}}'
												+'{width140}'
											+'}'
											+'{\\str{V = ( 10 ) * ( 6 ) * ( 7 )}}'
										+'}'
										+'{\\str{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{Solve:}}'
												+'{width140}'
											+'}'
											+'{\\str{V = $$ansNumber}}'
										+'}'
								),
					helpAnswer: dataUtils.pre(
									'\\grp'
										+'{\\str{ &nbsp; $$ansNumber}}'
										+'{\\exp{\\str{cm}}{\\str{3}}}'
						),
					template: 'flexy',
				}
				,
				{	// problem 3
					probQuestion: 'Find the volume of the shape below.',
					illustration: '',
					alt: 'rectangular box 6.5 x 4 x 3.25',
					answerInstructions: '',
					ansNumber: '84.5',
					solution: dataUtils.pre(
									'\\grp'
										+'{\\input{$$ansNumber}}'
										+'{\\exp{\\str{in}}{\\input{3}}}'
						),
					firstTable: dataUtils.pre(
										'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{Identify the shape:}}'
												+'{width140}'
											+'}'
											+'{\\str{Rectangular Box}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{Write the formula:}}'
												+'{width140}'
											+'}'
											+'{\\str{V = L * W * H}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{Substitution:}}'
												+'{width140}'
											+'}'
											+'{\\str{V = ( 6.5 ) * ( 4 ) * ( 3.25 )}}'
										+'}'
										+'{\\str{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{Solve:}}'
												+'{width140}'
											+'}'
											+'{\\str{V = $$ansNumber}}'
										+'}'
								),
					helpAnswer: dataUtils.pre(
									'\\grp'
										+'{\\str{ &nbsp; $$ansNumber}}'
										+'{\\exp{\\str{in}}{\\str{3}}}'
						),
					template: 'flexy',
				}
				,
				{	// problem 4
					probQuestion: 'Find the volume of the shape below.',
					illustration: '',
					alt: 'rectangular box 2.85 x 3.6 x 4.5',
					answerInstructions: '',
					ansNumber: '46.17',
					solution: dataUtils.pre(
									'\\grp'
										+'{\\input{$$ansNumber}}'
										+'{\\exp{\\str{ft}}{\\input{3}}}'
						),
					firstTable: dataUtils.pre(
										'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{Identify the shape:}}'
												+'{width140}'
											+'}'
											+'{\\str{Rectangular Box}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{Write the formula:}}'
												+'{width140}'
											+'}'
											+'{\\str{V = L * W * H}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{Substitution:}}'
												+'{width140}'
											+'}'
											+'{\\str{V = ( 2.85 ) * ( 3.6 ) * ( 4.5 )}}'
										+'}'
										+'{\\str{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{Solve:}}'
												+'{width140}'
											+'}'
											+'{\\str{V = $$ansNumber}}'
										+'}'
								),
					helpAnswer: dataUtils.pre(
									'\\grp'
										+'{\\str{ &nbsp; $$ansNumber}}'
										+'{\\exp{\\str{ft}}{\\str{3}}}'
						),
					template: 'flexy',
				}
				,
				{	// problem 5
					probQuestion: 'Find the volume of the shape below.  Give the answer as a mixed number.',
					illustration: '',
					alt: 'Cube side 3 1/2',
					answerInstructions: '',
					solution: dataUtils.pre(
								'\\css'
									+'{\\rowgrp'
										+'{\\str{$$answerInstructions}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\mixed{\\input{42}}{\\frac{\\input{7}}{\\input{8}}}}'
											+'{\\exp{\\str{m}}{\\input{3}}}'
										+'}'
									+'}'
									+'{marginLeft80px}'
						),
					firstTable: dataUtils.pre(
										'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{Identify the shape:}}'
												+'{width140}'
											+'}'
											+'{\\str{Cube}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{Write the formula:}}'
												+'{width140}'
											+'}'
											+'{\\str{V = s<sup> 3</sup>}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{Substitution:}}'
												+'{width140}'
											+'}'
											+'{\\str{V = }}'
											+'{\\exp'
												+'{\\grp'
													+'{\\str{(}}'
													+'{\\css'
														+'{\\mixed'
															+'{\\str{3}}'
															+'{\\frac'
																+'{\\str{1}}'
																+'{\\str{2}}'
															+'}'
														+'}'
														+'{fracReducedRightMargin}'
													+'}'
													+'{\\str{)}}'
												+'}'
												+'{\\str{3}}'
											+'}'
										+'}'
										+'{\\str{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{Solve:}}'
												+'{width140}'
											+'}'
											+'{\\str{V = }}'
											+'{\\css'
												+'{\\mixed'
													+'{\\str{42}}'
													+'{\\frac'
														+'{\\str{7}}'
														+'{\\str{8}}'
													+'}'
												+'}'
												+'{fracReducedRightMargin}'
											+'}'
										+'}'
								),
					helpAnswer: dataUtils.pre(
									'\\grp'
										+'{\\css'
											+'{\\mixed'
												+'{\\str{42}}'
												+'{\\frac'
													+'{\\str{7}}'
													+'{\\str{8}}'
												+'}'
											+'}'
											+'{fracReducedRightMargin}'
										+'}'
										+'{\\exp{\\str{m}}{\\str{3}}}'
						),
					template: 'flexy',
				}
				,
				{	// problem 6
					probQuestion: 'Find the volume of the shape below.  Give the answer as a mixed number.',
					illustration: '',
					alt: 'cube side 2 3/4',
					answerInstructions: '',
					ansWhole: '20',
					ansNum: '51',
					ansDen: '64',
					solution: dataUtils.pre(
								'\\css'
									+'{\\rowgrp'
										+'{\\str{$$answerInstructions}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\mixed{\\input{$$ansWhole}}{\\frac{\\input{$$ansNum}}{\\input{$$ansDen}}}}'
											+'{\\exp{\\str{in}}{\\input{3}}}'
										+'}'
									+'}'
									+'{marginLeft80px}'
						),
					firstTable: dataUtils.pre(
										'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{Identify the shape:}}'
												+'{width140}'
											+'}'
											+'{\\str{Cube}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{Write the formula:}}'
												+'{width140}'
											+'}'
											+'{\\str{V = s<sup> 3</sup>}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{Substitution:}}'
												+'{width140}'
											+'}'
											+'{\\str{V = }}'
											+'{\\exp'
												+'{\\grp'
													+'{\\str{(}}'
													+'{\\css'
														+'{\\mixed'
															+'{\\str{2}}'
															+'{\\frac'
																+'{\\str{3}}'
																+'{\\str{4}}'
															+'}'
														+'}'
														+'{fracReducedRightMargin}'
													+'}'
													+'{\\str{)}}'
												+'}'
												+'{\\str{3}}'
											+'}'
										+'}'
										+'{\\str{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{Solve:}}'
												+'{width140}'
											+'}'
											+'{\\str{V = }}'
											+'{\\css'
												+'{\\mixed'
													+'{\\str{$$ansWhole}}'
													+'{\\frac'
														+'{\\str{$$ansNum}}'
														+'{\\str{$$ansDen}}'
													+'}'
												+'}'
												+'{fracReducedRightMargin}'
											+'}'
										+'}'
								),
					helpAnswer: dataUtils.pre(
									'\\grp'
										+'{\\css'
											+'{\\mixed'
												+'{\\str{$$ansWhole}}'
												+'{\\frac'
													+'{\\str{$$ansNum}}'
													+'{\\str{$$ansDen}}'
												+'}'
											+'}'
											+'{fracReducedRightMargin}'
										+'}'
										+'{\\exp{\\str{in}}{\\str{3}}}'
						),
					template: 'flexy',
				}
				,
				{	// problem 7
					probQuestion: 'Find the volume of the shape below.  Use <sup>22</sup>&#8260;<sub>7</sub> for &pi;.',
					illustration: '',
					alt: 'Cylinder radius 7 length 15',
					answerInstructions: '',
					answerNumber: '2310',
					solution: dataUtils.pre(
								'\\css'
									+'{\\rowgrp'
										+'{\\str{$$answerInstructions}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\input{$$answerNumber}}'
											+'{\\exp{\\str{ft}}{\\input{3}}}'
										+'}'
									+'}'
									+'{marginLeft80px}'
						),
					firstTable: dataUtils.pre(
										'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{Identify the shape:}}'
												+'{width140}'
											+'}'
											+'{\\str{Cylinder}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{Write the formula:}}'
												+'{width140}'
											+'}'
											+'{\\str{V = }}'
											+'{\\str{&pi;}}'
											+'{\\str{*}}'
											+'{\\str{r<sup> 2</sup>}}'
											+'{\\str{*}}'
											+'{\\str{h}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{Substitution:}}'
												+'{width140}'
											+'}'
											+'{\\str{V = }}'
											+'{\\frac'
												+'{\\str{22}}'
												+'{\\str{7}}'
											+'}'
											+'{\\str{*}}'
											+'{\\exp'
												+'{\\str{( 7 )}}'
												+'{\\str{2}}'
											+'}'
											+'{\\str{*}}'
											+'{\\str{15}}'
										+'}'
										+'{\\str{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{Solve:}}'
												+'{width140}'
											+'}'
											+'{\\str{V = $$answerNumber}}'
										+'}'
								),
					helpAnswer: dataUtils.pre(
									'\\grp'
										+'{\\str{ &nbsp; $$answerNumber}}'
										+'{\\exp{\\str{ft}}{\\str{3}}}'
						),
					template: 'flexy',
				}
				,
				{	// problem 8
					probQuestion: 'Find the volume of the shape below.  Use <sup>22</sup>&#8260;<sub>7</sub> for &pi;.',
					illustration: '',
					alt: 'Cylinder radius 3 length 14',
					answerInstructions: '',
					answerNumber: '396',
					measure: 'cm',
					solution: dataUtils.pre(
								'\\css'
									+'{\\rowgrp'
										+'{\\str{$$answerInstructions}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\input{$$answerNumber}}'
											+'{\\exp{\\str{$$measure}}{\\input{3}}}'
										+'}'
									+'}'
									+'{marginLeft80px}'
						),
					firstTable: dataUtils.pre(
										'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{Identify the shape:}}'
												+'{width140}'
											+'}'
											+'{\\str{Cylinder}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{Write the formula:}}'
												+'{width140}'
											+'}'
											+'{\\str{V = }}'
											+'{\\str{&pi;}}'
											+'{\\str{*}}'
											+'{\\str{r<sup> 2</sup>}}'
											+'{\\str{*}}'
											+'{\\str{h}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{Substitution:}}'
												+'{width140}'
											+'}'
											+'{\\str{V = }}'
											+'{\\frac'
												+'{\\str{22}}'
												+'{\\str{7}}'
											+'}'
											+'{\\str{*}}'
											+'{\\exp'
												+'{\\str{( 3 )}}'
												+'{\\str{2}}'
											+'}'
											+'{\\str{*}}'
											+'{\\str{14}}'
										+'}'
										+'{\\str{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{Solve:}}'
												+'{width140}'
											+'}'
											+'{\\str{V = $$answerNumber}}'
										+'}'
								),
					helpAnswer: dataUtils.pre(
									'\\grp'
										+'{\\str{ &nbsp; $$answerNumber}}'
										+'{\\exp{\\str{$$measure}}{\\str{3}}}'
						),
					template: 'flexy',
				}
				,
				{	// problem 9
					probQuestion: 'Find the volume of the shape below.  Use 3.14 for &pi;.',
					illustration: '',
					alt: 'Cylinder diameter 4 length 12.5',
					answerInstructions: '',
					answerNumber: '628',
					measure: 'in',
					solution: dataUtils.pre(
								'\\css'
									+'{\\rowgrp'
										+'{\\str{$$answerInstructions}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\input{$$answerNumber}}'
											+'{\\exp{\\str{$$measure}}{\\input{3}}}'
										+'}'
									+'}'
									+'{marginLeft80px}'
						),
					firstTable: dataUtils.pre(
										'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{Identify the shape:}}'
												+'{width140}'
											+'}'
											+'{\\str{Cylinder}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\str{If the diameter is 8 inches, then we know that the radius is 4 inches (<sup>1</sup>&#8260;<sub>2</sub> of 8 inches).}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{Write the formula:}}'
												+'{width140}'
											+'}'
											+'{\\str{V = }}'
											+'{\\str{&pi;}}'
											+'{\\str{*}}'
											+'{\\str{r<sup> 2</sup>}}'
											+'{\\str{*}}'
											+'{\\str{h}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{Substitution:}}'
												+'{width140}'
											+'}'
											+'{\\str{V = }}'
											+'{\\frac'
												+'{\\str{22}}'
												+'{\\str{7}}'
											+'}'
											+'{\\str{*}}'
											+'{\\exp'
												+'{\\str{( 4 )}}'
												+'{\\str{2}}'
											+'}'
											+'{\\str{*}}'
											+'{\\str{12.5}}'
										+'}'
										+'{\\str{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{Solve:}}'
												+'{width140}'
											+'}'
											+'{\\str{V = $$answerNumber}}'
										+'}'
								),
					helpAnswer: dataUtils.pre(
									'\\grp'
										+'{\\str{ &nbsp; $$answerNumber}}'
										+'{\\exp{\\str{$$measure}}{\\str{3}}}'
						),
					template: 'flexy',
				}
				,
				{	// problem 10
					probQuestion: 'Find the volume of the shape below.  Use 3.14 for &pi;.',
					illustration: '',
					alt: 'Cylinder diameter 2.6 length 9',
					answerInstructions: '',
					answerNumber: '47.8',
					measure: 'yd',
					solution: dataUtils.pre(
								'\\css'
									+'{\\rowgrp'
										+'{\\str{$$answerInstructions}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\input{$$answerNumber}}'
											+'{\\exp{\\str{$$measure}}{\\input{3}}}'
										+'}'
									+'}'
									+'{marginLeft80px}'
						),
					firstTable: dataUtils.pre(
										'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{Identify the shape:}}'
												+'{width140}'
											+'}'
											+'{\\str{Cylinder}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\str{If the diameter is 2.6 yards, then we know that the radius is 1.3 yards (<sup>1</sup>&#8260;<sub>2</sub> of 2.6 yards).}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{Write the formula:}}'
												+'{width140}'
											+'}'
											+'{\\str{V = }}'
											+'{\\str{&pi;}}'
											+'{\\str{*}}'
											+'{\\str{r<sup> 2</sup>}}'
											+'{\\str{*}}'
											+'{\\str{h}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{Substitution:}}'
												+'{width140}'
											+'}'
											+'{\\str{V = }}'
											+'{\\str{3.14}}'
											+'{\\str{*}}'
											+'{\\exp'
												+'{\\str{( 1.3 )}}'
												+'{\\str{2}}'
											+'}'
											+'{\\str{*}}'
											+'{\\str{9}}'
										+'}'
										+'{\\str{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{Solve:}}'
												+'{width140}'
											+'}'
											+'{\\str{V = $$answerNumber}}'
										+'}'
								),
					helpAnswer: dataUtils.pre(
									'\\grp'
										+'{\\str{ &nbsp; $$answerNumber}}'
										+'{\\exp{\\str{$$measure}}{\\str{3}}}'
						),
					template: 'flexy',
				}
				,
				{	// problem 11
					probQuestion: 'Find the volume of the shape below. Use <sup>22</sup>&#8260;<sub>7</sub> for &pi;. Give the answer as a mixed number.',
					illustration: '',
					alt: 'Cylinder diameter 4 length 9 1/2',
					answerInstructions: '',
					ansWhole: '119',
					ansNum: '3',
					ansDen: '7',
					measure: 'ft',
					solution: dataUtils.pre(
								'\\css'
									+'{\\rowgrp'
										+'{\\str{$$answerInstructions}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\mixed{\\input{$$ansWhole}}{\\frac{\\input{$$ansNum}}{\\input{$$ansDen}}}}'
											+'{\\exp{\\str{$$measure}}{\\input{3}}}'
										+'}'
									+'}'
									+'{marginLeft80px}'
						),
					firstTable: dataUtils.pre(
										'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{Identify the shape:}}'
												+'{width140}'
											+'}'
											+'{\\str{Cylinder}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\str{If the diameter is 4 feet, then we know that the radius is 2 feet (<sup>1</sup>&#8260;<sub>2</sub> of 4 feet).}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{Write the formula:}}'
												+'{width140}'
											+'}'
											+'{\\str{V = }}'
											+'{\\str{&pi;}}'
											+'{\\str{*}}'
											+'{\\str{r<sup> 2</sup>}}'
											+'{\\str{*}}'
											+'{\\str{h}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{Substitution:}}'
												+'{width140}'
											+'}'
											+'{\\str{V = }}'
											+'{\\frac'
												+'{\\str{22}}'
												+'{\\str{7}}'
											+'}'
											+'{\\str{*}}'
											+'{\\exp{\\str{( 2 )}}{\\str{2}}}'
											+'{\\str{*}}'
											+'{\\css'
												+'{\\mixed'
													+'{\\str{9}}'
													+'{\\frac'
														+'{\\str{1}}'
														+'{\\str{2}}'
													+'}'
												+'}'
												+'{fracReducedRightMargin}'
											+'}'
										+'}'
										+'{\\str{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{Solve:}}'
												+'{width140}'
											+'}'
											+'{\\str{V = }}'
											+'{\\css'
												+'{\\mixed'
													+'{\\str{$$ansWhole}}'
													+'{\\frac'
														+'{\\str{$$ansNum}}'
														+'{\\str{$$ansDen}}'
													+'}'
												+'}'
												+'{fracReducedRightMargin}'
											+'}'
										+'}'
								),
					helpAnswer: dataUtils.pre(
									'\\grp'
										+'{\\css'
											+'{\\mixed'
												+'{\\str{$$ansWhole}}'
												+'{\\frac'
													+'{\\str{$$ansNum}}'
													+'{\\str{$$ansDen}}'
												+'}'
											+'}'
											+'{fracReducedRightMargin}'
										+'}'
										+'{\\exp{\\str{$$measure}}{\\str{3}}}'
						),
					template: 'flexy',
				}
				,
				{	// problem 12
					probQuestion: 'Find the volume of the shape below. Use <sup>22</sup>&#8260;<sub>7</sub> for &pi;. Give the answer as a mixed number.',
					illustration: '',
					alt: 'Cylinder diameter 6 length 7 1/2',
					answerInstructions: '',
					ansWhole: '212',
					ansNum: '1',
					ansDen: '7',
					measure: 'ft',
					solution: dataUtils.pre(
								'\\css'
									+'{\\rowgrp'
										+'{\\str{$$answerInstructions}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\mixed{\\input{$$ansWhole}}{\\frac{\\input{$$ansNum}}{\\input{$$ansDen}}}}'
											+'{\\exp{\\str{$$measure}}{\\input{3}}}'
										+'}'
									+'}'
									+'{marginLeft80px}'
						),
					firstTable: dataUtils.pre(
										'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{Identify the shape:}}'
												+'{width140}'
											+'}'
											+'{\\str{Cylinder}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\str{If the diameter is 6 feet, then we know that the radius is 3 feet (<sup>1</sup>&#8260;<sub>2</sub> of 6 feet).}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{Write the formula:}}'
												+'{width140}'
											+'}'
											+'{\\str{V = }}'
											+'{\\str{&pi;}}'
											+'{\\str{*}}'
											+'{\\str{r<sup> 2</sup>}}'
											+'{\\str{*}}'
											+'{\\str{h}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{Substitution:}}'
												+'{width140}'
											+'}'
											+'{\\str{V = }}'
											+'{\\frac'
												+'{\\str{22}}'
												+'{\\str{7}}'
											+'}'
											+'{\\str{*}}'
											+'{\\exp{\\str{( 3 )}}{\\str{2}}}'
											+'{\\str{*}}'
											+'{\\css'
												+'{\\mixed'
													+'{\\str{7}}'
													+'{\\frac'
														+'{\\str{1}}'
														+'{\\str{2}}'
													+'}'
												+'}'
												+'{fracReducedRightMargin}'
											+'}'
										+'}'
										+'{\\str{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{Solve:}}'
												+'{width140}'
											+'}'
											+'{\\str{V = }}'
											+'{\\css'
												+'{\\mixed'
													+'{\\str{$$ansWhole}}'
													+'{\\frac'
														+'{\\str{$$ansNum}}'
														+'{\\str{$$ansDen}}'
													+'}'
												+'}'
												+'{fracReducedRightMargin}'
											+'}'
										+'}'
								),
					helpAnswer: dataUtils.pre(
									'\\grp'
										+'{\\css'
											+'{\\mixed'
												+'{\\str{$$ansWhole}}'
												+'{\\frac'
													+'{\\str{$$ansNum}}'
													+'{\\str{$$ansDen}}'
												+'}'
											+'}'
											+'{fracReducedRightMargin}'
										+'}'
										+'{\\exp{\\str{$$measure}}{\\str{3}}}'
						),
					template: 'flexy',
				}
				,
				{	// problem 13
					probQuestion: 'Find the volume of the shape below.  Use 3.14 for &pi;.',
					illustration: '',
					alt: 'Cone diameter 10 length 18',
					answerInstructions: '',
					answerNumber: '471',
					measure: 'in',
					solution: dataUtils.pre(
								'\\css'
									+'{\\rowgrp'
										+'{\\str{$$answerInstructions}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\input{$$answerNumber}}'
											+'{\\exp{\\str{$$measure}}{\\input{3}}}'
										+'}'
									+'}'
									+'{marginLeft80px}'
						),
					firstTable: dataUtils.pre(
										'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{Identify the shape:}}'
												+'{width140}'
											+'}'
											+'{\\str{Cone}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\str{If the diameter is 10 inches, then we know that the radius is 5 inches (<sup>1</sup>&#8260;<sub>2</sub> of 10 inches).}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{Write the formula:}}'
												+'{width140}'
											+'}'
											+'{\\str{V = }}'
											+'{\\frac'
													+'{\\str{1}}'
													+'{\\str{3}}'
												+'}'
											+'{\\str{*}}'
											+'{\\str{&pi;}}'
											+'{\\str{*}}'
											+'{\\str{r<sup> 2</sup>}}'
											+'{\\str{*}}'
											+'{\\str{h}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{Substitution:}}'
												+'{width140}'
											+'}'
											+'{\\str{V = }}'
											+'{\\frac'
													+'{\\str{1}}'
													+'{\\str{3}}'
												+'}'
											+'{\\str{*}}'
											+'{\\str{3.14}}'
											+'{\\str{*}}'
											+'{\\exp'
												+'{\\str{( 5 )}}'
												+'{\\str{2}}'
											+'}'
											+'{\\str{*}}'
											+'{\\str{18}}'
										+'}'
										+'{\\str{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{Solve:}}'
												+'{width140}'
											+'}'
											+'{\\str{V = $$answerNumber}}'
										+'}'
								),
					helpAnswer: dataUtils.pre(
									'\\grp'
										+'{\\str{ &nbsp; $$answerNumber}}'
										+'{\\exp{\\str{$$measure}}{\\str{3}}}'
						),
					template: 'flexy',
				}
				,
				{	// problem 14
					probQuestion: 'Find the volume of the shape below. Use <sup>22</sup>&#8260;<sub>7</sub> for &pi;.',
					illustration: '',
					alt: 'Cone radius 9 length 21',
					answerInstructions: '',
					answerNumber: '1782',
					measure: 'm',
					solution: dataUtils.pre(
								'\\css'
									+'{\\rowgrp'
										+'{\\str{$$answerInstructions}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\input{$$answerNumber}}'
											+'{\\exp{\\str{$$measure}}{\\input{3}}}'
										+'}'
									+'}'
									+'{marginLeft80px}'
						),
					firstTable: dataUtils.pre(
										'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{Identify the shape:}}'
												+'{width140}'
											+'}'
											+'{\\str{Cone}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{Write the formula:}}'
												+'{width140}'
											+'}'
											+'{\\str{V = }}'
											+'{\\frac'
													+'{\\str{1}}'
													+'{\\str{3}}'
												+'}'
											+'{\\str{*}}'
											+'{\\str{&pi;}}'
											+'{\\str{*}}'
											+'{\\str{r<sup> 2</sup>}}'
											+'{\\str{*}}'
											+'{\\str{h}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{Substitution:}}'
												+'{width140}'
											+'}'
											+'{\\str{V = }}'
											+'{\\frac'
													+'{\\str{1}}'
													+'{\\str{3}}'
												+'}'
											+'{\\str{*}}'
											+'{\\frac'
												+'{\\str{22}}'
												+'{\\str{7}}'
											+'}'
											+'{\\str{*}}'
											+'{\\exp'
												+'{\\str{( 9 )}}'
												+'{\\str{2}}'
											+'}'
											+'{\\str{*}}'
											+'{\\str{21}}'
										+'}'
										+'{\\str{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{Solve:}}'
												+'{width140}'
											+'}'
											+'{\\str{V = $$answerNumber}}'
										+'}'
								),
					helpAnswer: dataUtils.pre(
									'\\grp'
										+'{\\str{ &nbsp; $$answerNumber}}'
										+'{\\exp{\\str{$$measure}}{\\str{3}}}'
						),
					template: 'flexy',
				}
				,
				{	// problem 15
					probQuestion: 'Find the volume of the shape below. Use 3.14 for &pi;.  Round to the hundredth of a cubic centimeter.',
					illustration: '',
					alt: 'Cone diameter 1 length 4.3',
					answerInstructions: '',
					infiniteNumber: '1.125166...',
					answerNumber: '1.13',
					measure: 'cm',
					solution: dataUtils.pre(
							'\\pan{3}{9}'
								+'{\\css'
									+'{\\rowgrp'
										+'{\\str{$$answerInstructions}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\input{$$answerNumber}}'
											+'{\\exp{\\str{$$measure}}{\\input{3}}}'
										+'}'
									+'}'
									+'{marginLeft80px}'
								+'}'
						),
					firstTable: dataUtils.pre(
										'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{Identify the shape:}}'
												+'{width140}'
											+'}'
											+'{\\str{Cone}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\str{If the diameter is 1 centimeter, then we know that the radius is 0.5 centimeters (<sup>1</sup>&#8260;<sub>2</sub> of 1 centimeter).}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{Write the formula:}}'
												+'{width140}'
											+'}'
											+'{\\str{V = }}'
											+'{\\frac'
													+'{\\str{1}}'
													+'{\\str{3}}'
												+'}'
											+'{\\str{*}}'
											+'{\\str{&pi;}}'
											+'{\\str{*}}'
											+'{\\str{r<sup> 2</sup>}}'
											+'{\\str{*}}'
											+'{\\str{h}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{Substitution:}}'
												+'{width140}'
											+'}'
											+'{\\str{V = }}'
											+'{\\frac'
													+'{\\str{1}}'
													+'{\\str{3}}'
												+'}'
											+'{\\str{*}}'
											+'{\\str{3.14}}'
											+'{\\str{*}}'
											+'{\\exp'
												+'{\\str{( 0.5 )}}'
												+'{\\str{2}}'
											+'}'
											+'{\\str{*}}'
											+'{\\str{4.3}}'
										+'}'
										+'{\\str{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{Solve:}}'
												+'{width140}'
											+'}'
											+'{\\str{V = $$infiniteNumber}}'
										+'}'
								),
					helpAnswer: dataUtils.pre(
									'\\grp'
										+'{\\str{ &nbsp; $$answerNumber}}'
										+'{\\exp{\\str{$$measure}}{\\str{3}}}'
						),
					template: 'flexy',
				}
				,
				{	// problem 16
					probQuestion: 'Find the volume of the shape below. Use 3.14 for &pi;.  Round to the nearest whole cubic foot.',
					illustration: '',
					alt: 'Cone radius 3.5 length 7',
					answerInstructions: '',
					infiniteNumber: '89.75166...',
					answerNumber: '90',
					measure: 'ft',
					solution: dataUtils.pre(
							'\\pan{3}{9}'
								+'{\\css'
									+'{\\rowgrp'
										+'{\\str{$$answerInstructions}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\input{$$answerNumber}}'
											+'{\\exp{\\str{$$measure}}{\\input{3}}}'
										+'}'
									+'}'
									+'{marginLeft80px}'
								+'}'
						),
					firstTable: dataUtils.pre(
										'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{Identify the shape:}}'
												+'{width140}'
											+'}'
											+'{\\str{Cone}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{Write the formula:}}'
												+'{width140}'
											+'}'
											+'{\\str{V = }}'
											+'{\\frac'
													+'{\\str{1}}'
													+'{\\str{3}}'
												+'}'
											+'{\\str{*}}'
											+'{\\str{&pi;}}'
											+'{\\str{*}}'
											+'{\\str{r<sup> 2</sup>}}'
											+'{\\str{*}}'
											+'{\\str{h}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{Substitution:}}'
												+'{width140}'
											+'}'
											+'{\\str{V = }}'
											+'{\\frac'
													+'{\\str{1}}'
													+'{\\str{3}}'
												+'}'
											+'{\\str{*}}'
											+'{\\str{3.14}}'
											+'{\\str{*}}'
											+'{\\exp'
												+'{\\str{( 3.5 )}}'
												+'{\\str{2}}'
											+'}'
											+'{\\str{*}}'
											+'{\\str{7}}'
										+'}'
										+'{\\str{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{Solve:}}'
												+'{width140}'
											+'}'
											+'{\\str{V = $$infiniteNumber}}'
										+'}'
								),
					helpAnswer: dataUtils.pre(
									'\\grp'
										+'{\\str{ &nbsp; $$answerNumber}}'
										+'{\\exp{\\str{$$measure}}{\\str{3}}}'
						),
					template: 'flexy',
				}
				,
				{	// problem 17
					probQuestion: 'Find the volume of the shape below. Use <sup>22</sup>&#8260;<sub>7</sub> for &pi;. Give the answer as a mixed number.',
					illustration: '',
					alt: 'Cone radius 4 1/5 length 8',
					answerInstructions: '',
					ansWhole: '157',
					ansNum: '2',
					ansDen: '25',
					measure: 'm',
					solution: dataUtils.pre(
							'\\pan{3}{9}'
								+'{\\css'
									+'{\\rowgrp'
										+'{\\str{$$answerInstructions}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\mixed{\\input{$$ansWhole}}{\\frac{\\input{$$ansNum}}{\\input{$$ansDen}}}}'
											+'{\\exp{\\str{$$measure}}{\\input{3}}}'
										+'}'
									+'}'
									+'{marginLeft80px}'
								+'}'
						),
					firstTable: dataUtils.pre(
										'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{Identify the shape:}}'
												+'{width140}'
											+'}'
											+'{\\str{Cone}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{Write the formula:}}'
												+'{width140}'
											+'}'
											+'{\\str{V = }}'
											+'{\\frac'
													+'{\\str{1}}'
													+'{\\str{3}}'
												+'}'
											+'{\\str{*}}'
											+'{\\str{&pi;}}'
											+'{\\str{*}}'
											+'{\\str{r<sup> 2</sup>}}'
											+'{\\str{*}}'
											+'{\\str{h}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{Substitution:}}'
												+'{width140}'
											+'}'
											+'{\\str{V = }}'
											+'{\\frac'
													+'{\\str{1}}'
													+'{\\str{3}}'
												+'}'
											+'{\\str{*}}'
											+'{\\frac'
												+'{\\str{22}}'
												+'{\\str{7}}'
											+'}'
											+'{\\str{*}}'
											+'{\\exp'
												+'{\\grp'
													+'{\\str{(}}'
													+'{\\css'
														+'{\\mixed'
															+'{\\str{4}}'
															+'{\\frac'
																+'{\\str{1}}'
																+'{\\str{5}}'
															+'}'
														+'}'
														+'{fracReducedRightMargin}'
													+'}'
													+'{\\str{)}}'
												+'}'
												+'{\\str{2}}'
											+'}'
											+'{\\str{*}}'
											+'{\\str{8}}'
										+'}'
										+'{\\str{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{Solve:}}'
												+'{width140}'
											+'}'
											+'{\\str{V = }}'
											+'{\\css'
												+'{\\mixed'
													+'{\\str{$$ansWhole}}'
													+'{\\frac'
														+'{\\str{$$ansNum}}'
														+'{\\str{$$ansDen}}'
													+'}'
												+'}'
												+'{fracReducedRightMargin}'
											+'}'
										+'}'
								),
					helpAnswer: dataUtils.pre(
									'\\grp'
										+'{\\css'
											+'{\\mixed'
												+'{\\str{$$ansWhole}}'
												+'{\\frac'
													+'{\\str{$$ansNum}}'
													+'{\\str{$$ansDen}}'
												+'}'
											+'}'
											+'{fracReducedRightMargin}'
										+'}'
										+'{\\exp{\\str{$$measure}}{\\str{3}}}'
						),
					template: 'flexy',
				}
				,
				{	// problem 18
					probQuestion: 'Find the volume of the shape below. Use <sup>22</sup>&#8260;<sub>7</sub> for &pi;. Give the answer as a mixed number.',
					illustration: '',
					alt: 'Cone radius 2 2/3 length 4',
					answerInstructions: '',
					ansWhole: '33',
					ansNum: '11',
					ansDen: '21',
					measure: 'ft',
					solution: dataUtils.pre(
							'\\pan{3}{9}'
								+'{\\css'
									+'{\\rowgrp'
										+'{\\str{$$answerInstructions}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\mixed{\\input{$$ansWhole}}{\\frac{\\input{$$ansNum}}{\\input{$$ansDen}}}}'
											+'{\\exp{\\str{$$measure}}{\\input{3}}}'
										+'}'
									+'}'
									+'{marginLeft80px}'
								+'}'
						),
					firstTable: dataUtils.pre(
										'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{Identify the shape:}}'
												+'{width140}'
											+'}'
											+'{\\str{Cone}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{Write the formula:}}'
												+'{width140}'
											+'}'
											+'{\\str{V = }}'
											+'{\\frac'
													+'{\\str{1}}'
													+'{\\str{3}}'
												+'}'
											+'{\\str{*}}'
											+'{\\str{&pi;}}'
											+'{\\str{*}}'
											+'{\\str{r<sup> 2</sup>}}'
											+'{\\str{*}}'
											+'{\\str{h}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{Substitution:}}'
												+'{width140}'
											+'}'
											+'{\\str{V = }}'
											+'{\\frac'
													+'{\\str{1}}'
													+'{\\str{3}}'
												+'}'
											+'{\\str{*}}'
											+'{\\frac'
												+'{\\str{22}}'
												+'{\\str{7}}'
											+'}'
											+'{\\str{*}}'
											+'{\\exp'
												+'{\\grp'
													+'{\\str{(}}'
													+'{\\css'
														+'{\\mixed'
															+'{\\str{2}}'
															+'{\\frac'
																+'{\\str{2}}'
																+'{\\str{3}}'
															+'}'
														+'}'
														+'{fracReducedRightMargin}'
													+'}'
													+'{\\str{)}}'
												+'}'
												+'{\\str{2}}'
											+'}'
											+'{\\str{*}}'
											+'{\\str{4}}'
										+'}'
										+'{\\str{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{Solve:}}'
												+'{width140}'
											+'}'
											+'{\\str{V = }}'
											+'{\\css'
												+'{\\mixed'
													+'{\\str{$$ansWhole}}'
													+'{\\frac'
														+'{\\str{$$ansNum}}'
														+'{\\str{$$ansDen}}'
													+'}'
												+'}'
												+'{fracReducedRightMargin}'
											+'}'
										+'}'
								),
					helpAnswer: dataUtils.pre(
									'\\grp'
										+'{\\css'
											+'{\\mixed'
												+'{\\str{$$ansWhole}}'
												+'{\\frac'
													+'{\\str{$$ansNum}}'
													+'{\\str{$$ansDen}}'
												+'}'
											+'}'
											+'{fracReducedRightMargin}'
										+'}'
										+'{\\exp{\\str{$$measure}}{\\str{3}}}'
						),
					template: 'flexy',
				}
				,
				{	// problem 19
					probQuestion: 'Find the volume of the shape below. Use 3.14 for &pi;.',
					illustration: '',
					alt: 'Sphere diameter 24 inches',
					answerInstructions: '',
					infiniteNumber: '7234.56',
					answerNumber: '7234.56',
					measure: 'in',
					solution: dataUtils.pre(
							'\\pan{3}{9}'
								+'{\\css'
									+'{\\rowgrp'
										+'{\\str{$$answerInstructions}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\input{$$answerNumber}}'
											+'{\\exp{\\str{$$measure}}{\\input{3}}}'
										+'}'
									+'}'
									+'{marginLeft80px}'
								+'}'
						),
					firstTable: dataUtils.pre(
										'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{Identify the shape:}}'
												+'{width140}'
											+'}'
											+'{\\str{Sphere}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\str{If the diameter is 24 inches, then we know that the radius is 12 inches (<sup>1</sup>&#8260;<sub>2</sub> of 24 inches).}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{Write the formula:}}'
												+'{width140}'
											+'}'
											+'{\\str{V = }}'
											+'{\\frac'
													+'{\\str{4}}'
													+'{\\str{3}}'
												+'}'
											+'{\\str{*}}'
											+'{\\str{&pi;}}'
											+'{\\str{*}}'
											+'{\\str{r<sup> 3</sup>}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{Substitution:}}'
												+'{width140}'
											+'}'
											+'{\\str{V = }}'
											+'{\\frac'
													+'{\\str{4}}'
													+'{\\str{3}}'
												+'}'
											+'{\\str{*}}'
											+'{\\str{3.14}}'
											+'{\\str{*}}'
											+'{\\exp'
												+'{\\str{( 12 )}}'
												+'{\\str{3}}'
											+'}'
										+'}'
										+'{\\str{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{Solve:}}'
												+'{width140}'
											+'}'
											+'{\\str{V = $$infiniteNumber}}'
										+'}'
								),
					helpAnswer: dataUtils.pre(
									'\\grp'
										+'{\\str{ &nbsp; $$answerNumber}}'
										+'{\\exp{\\str{$$measure}}{\\str{3}}}'
						),
					template: 'flexy',
				}
				,
				{	// problem 20
					probQuestion: 'Find the volume of the shape below. Use 3.14 for &pi;.',
					illustration: '',
					alt: 'Sphere diameter 30 feet',
					answerInstructions: '',
					answerNumber: '14130',
					infiniteNumber: '14,130',
					helpNumber: '14,130',
					measure: 'ft',
					solution: dataUtils.pre(
							'\\pan{3}{9}'
								+'{\\css'
									+'{\\rowgrp'
										+'{\\str{$$answerInstructions}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\input{$$answerNumber}}'
											+'{\\exp{\\str{$$measure}}{\\input{3}}}'
										+'}'
									+'}'
									+'{marginLeft80px}'
								+'}'
						),
					firstTable: dataUtils.pre(
										'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{Identify the shape:}}'
												+'{width140}'
											+'}'
											+'{\\str{Sphere}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\str{If the diameter is 30 feet, then we know that the radius is 15 feet (<sup>1</sup>&#8260;<sub>2</sub> of 30 feet).}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{Write the formula:}}'
												+'{width140}'
											+'}'
											+'{\\str{V = }}'
											+'{\\frac'
													+'{\\str{4}}'
													+'{\\str{3}}'
												+'}'
											+'{\\str{*}}'
											+'{\\str{&pi;}}'
											+'{\\str{*}}'
											+'{\\str{r<sup> 3</sup>}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{Substitution:}}'
												+'{width140}'
											+'}'
											+'{\\str{V = }}'
											+'{\\frac'
													+'{\\str{4}}'
													+'{\\str{3}}'
												+'}'
											+'{\\str{*}}'
											+'{\\str{3.14}}'
											+'{\\str{*}}'
											+'{\\exp'
												+'{\\str{( 15 )}}'
												+'{\\str{3}}'
											+'}'
										+'}'
										+'{\\str{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{Solve:}}'
												+'{width140}'
											+'}'
											+'{\\str{V = $$infiniteNumber}}'
										+'}'
								),
					helpAnswer: dataUtils.pre(
									'\\grp'
										+'{\\str{ &nbsp; $$helpNumber}}'
										+'{\\exp{\\str{$$measure}}{\\str{3}}}'
						),
					template: 'flexy',
				}
				,
				{	// problem 21
					probQuestion: 'Find the volume of the shape below. Use 3.14 for &pi;. Round to the nearest whole cubic meter.',
					illustration: '',
					alt: 'Sphere diameter 6.5 meters',
					answerInstructions: '',
					answerNumber: '1150',
					infiniteNumber: '1149.7633...',
					helpNumber: '1,150',
					measure: 'm',
					solution: dataUtils.pre(
							'\\pan{3}{9}'
								+'{\\css'
									+'{\\rowgrp'
										+'{\\str{$$answerInstructions}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\input{$$answerNumber}}'
											+'{\\exp{\\str{$$measure}}{\\input{3}}}'
										+'}'
									+'}'
									+'{marginLeft80px}'
								+'}'
						),
					firstTable: dataUtils.pre(
										'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{Identify the shape:}}'
												+'{width140}'
											+'}'
											+'{\\str{Sphere}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{Write the formula:}}'
												+'{width140}'
											+'}'
											+'{\\str{V = }}'
											+'{\\frac'
													+'{\\str{4}}'
													+'{\\str{3}}'
												+'}'
											+'{\\str{*}}'
											+'{\\str{&pi;}}'
											+'{\\str{*}}'
											+'{\\str{r<sup> 3</sup>}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{Substitution:}}'
												+'{width140}'
											+'}'
											+'{\\str{V = }}'
											+'{\\frac'
													+'{\\str{4}}'
													+'{\\str{3}}'
												+'}'
											+'{\\str{*}}'
											+'{\\str{3.14}}'
											+'{\\str{*}}'
											+'{\\exp'
												+'{\\str{( 6.5 )}}'
												+'{\\str{3}}'
											+'}'
										+'}'
										+'{\\str{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{Solve:}}'
												+'{width140}'
											+'}'
											+'{\\str{V = $$infiniteNumber}}'
										+'}'
								),
					helpAnswer: dataUtils.pre(
									'\\grp'
										+'{\\str{ &nbsp; $$helpNumber}}'
										+'{\\exp{\\str{$$measure}}{\\str{3}}}'
						),
					template: 'flexy',
				}
				,
				{	// problem 22
					probQuestion: 'Find the volume of the shape below. Use 3.14 for &pi;. Round to the nearest hundredth of a cubic mile.',
					illustration: '',
					alt: 'Sphere diameter 0.4 miles',
					answerInstructions: '',
					answerNumber: '0.27',
					infiniteNumber: '0.2679466...',
					helpNumber: '0.27',
					measure: 'mi',
					solution: dataUtils.pre(
							'\\pan{3}{9}'
								+'{\\css'
									+'{\\rowgrp'
										+'{\\str{$$answerInstructions}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\input{$$answerNumber}}'
											+'{\\exp{\\str{$$measure}}{\\input{3}}}'
										+'}'
									+'}'
									+'{marginLeft80px}'
								+'}'
						),
					firstTable: dataUtils.pre(
										'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{Identify the shape:}}'
												+'{width140}'
											+'}'
											+'{\\str{Sphere}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{Write the formula:}}'
												+'{width140}'
											+'}'
											+'{\\str{V = }}'
											+'{\\frac'
													+'{\\str{4}}'
													+'{\\str{3}}'
												+'}'
											+'{\\str{*}}'
											+'{\\str{&pi;}}'
											+'{\\str{*}}'
											+'{\\str{r<sup> 3</sup>}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{Substitution:}}'
												+'{width140}'
											+'}'
											+'{\\str{V = }}'
											+'{\\frac'
													+'{\\str{4}}'
													+'{\\str{3}}'
												+'}'
											+'{\\str{*}}'
											+'{\\str{3.14}}'
											+'{\\str{*}}'
											+'{\\exp'
												+'{\\str{( 0.4 )}}'
												+'{\\str{3}}'
											+'}'
										+'}'
										+'{\\str{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{Solve:}}'
												+'{width140}'
											+'}'
											+'{\\str{V = $$infiniteNumber}}'
										+'}'
								),
					helpAnswer: dataUtils.pre(
									'\\grp'
										+'{\\str{ &nbsp; $$helpNumber}}'
										+'{\\exp{\\str{$$measure}}{\\str{3}}}'
						),
					template: 'flexy',
				}
				,
				{	// problem 21
					probQuestion: 'Find the volume of the shape below. Use 3.14 for &pi;. Round to the nearest whole cubic centimeter.',
					illustration: '',
					alt: 'Sphere diameter 5 centimeters',
					answerInstructions: '',
					answerNumber: '65',
					infiniteNumber: '65.4166...',
					helpNumber: '65',
					measure: 'cm',
					solution: dataUtils.pre(
							'\\pan{3}{9}'
								+'{\\css'
									+'{\\rowgrp'
										+'{\\str{$$answerInstructions}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\input{$$answerNumber}}'
											+'{\\exp{\\str{$$measure}}{\\input{3}}}'
										+'}'
									+'}'
									+'{marginLeft80px}'
								+'}'
						),
					firstTable: dataUtils.pre(
										'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{Identify the shape:}}'
												+'{width140}'
											+'}'
											+'{\\str{Sphere}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\str{If the diameter is 5 centimeters, then we know that the<br>radius is 2<sup class=normalWeight>1</sup>&#8260;<sub class=normalWeight>2</sub> centimeters ( <sup>1</sup>&#8260;<sub>2</sub> &nbsp;of &nbsp;5&nbsp; centimeters ).}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{Write the formula:}}'
												+'{width140}'
											+'}'
											+'{\\str{V = }}'
											+'{\\frac'
													+'{\\str{4}}'
													+'{\\str{3}}'
												+'}'
											+'{\\str{*}}'
											+'{\\str{&pi;}}'
											+'{\\str{*}}'
											+'{\\str{r<sup> 3</sup>}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{Substitution:}}'
												+'{width140}'
											+'}'
											+'{\\str{V = }}'
											+'{\\frac'
													+'{\\str{4}}'
													+'{\\str{3}}'
												+'}'
											+'{\\str{*}}'
											+'{\\str{3.14}}'
											+'{\\str{*}}'
											+'{\\exp'
												+'{\\grp'
													+'{\\str{(}}'
													+'{\\css'
														+'{\\mixed'
															+'{\\str{2}}'
															+'{\\frac'
																+'{\\str{1}}'
																+'{\\str{2}}'
															+'}'
														+'}'
														+'{fracReducedRightMargin}'
													+'}'
													+'{\\str{)}}'
												+'}'
												+'{\\str{3}}'
											+'}'
										+'}'
										+'{\\str{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{Solve:}}'
												+'{width140}'
											+'}'
											+'{\\str{V = $$infiniteNumber}}'
										+'}'
								),
					helpAnswer: dataUtils.pre(
									'\\grp'
										+'{\\str{ &nbsp; $$helpNumber}}'
										+'{\\exp{\\str{$$measure}}{\\str{3}}}'
						),
					template: 'flexy',
				}
				,
				{	// problem 24
					probQuestion: 'Find the volume of the shape below. Use 3.14 for &pi;. Round to the nearest tenth of a cubic foot.',
					illustration: '',
					alt: 'Sphere diameter 1 4/5 feet',
					answerInstructions: '',
					answerNumber: '3.1',
					infiniteNumber: '3.0528',
					helpNumber: '3.1',
					measure: 'ft',
					solution: dataUtils.pre(
							'\\pan{3}{9}'
								+'{\\css'
									+'{\\rowgrp'
										+'{\\str{$$answerInstructions}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\input{$$answerNumber}}'
											+'{\\exp{\\str{$$measure}}{\\input{3}}}'
										+'}'
									+'}'
									+'{marginLeft80px}'
								+'}'
						),
					firstTable: dataUtils.pre(
										'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{Identify the shape:}}'
												+'{width140}'
											+'}'
											+'{\\str{Sphere}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\str{If the diameter is 1 <sup class=normalWeight>4</sup>&#8260;<sub class=normalWeight>5</sub> feet, then we know that the<br>radius is <sup class=normalWeight>9</sup>&#8260;<sub class=normalWeight>10</sub> of a foot ( <sup>1</sup>&#8260;<sub>2</sub> &nbsp;of &nbsp;1 <sup class=normalWeight>4</sup>&#8260;<sub class=normalWeight>5</sub> feet ).}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{Write the formula:}}'
												+'{width140}'
											+'}'
											+'{\\str{V = }}'
											+'{\\frac'
													+'{\\str{4}}'
													+'{\\str{3}}'
												+'}'
											+'{\\str{*}}'
											+'{\\str{&pi;}}'
											+'{\\str{*}}'
											+'{\\str{r<sup> 3</sup>}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{Substitution:}}'
												+'{width140}'
											+'}'
											+'{\\str{V = }}'
											+'{\\frac'
													+'{\\str{4}}'
													+'{\\str{3}}'
												+'}'
											+'{\\str{*}}'
											+'{\\str{3.14}}'
											+'{\\str{*}}'
											+'{\\exp'
												+'{\\grp'
													+'{\\str{(}}'
													+'{\\css'
														+'{\\frac'
															+'{\\str{9}}'
															+'{\\str{10}}'
														+'}'
														+'{fracReducedRightMargin}'
													+'}'
													+'{\\str{)}}'
												+'}'
												+'{\\str{3}}'
											+'}'
										+'}'
										+'{\\str{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{Solve:}}'
												+'{width140}'
											+'}'
											+'{\\str{V = $$infiniteNumber}}'
										+'}'
								),
					helpAnswer: dataUtils.pre(
									'\\grp'
										+'{\\str{ &nbsp; $$helpNumber}}'
										+'{\\exp{\\str{$$measure}}{\\str{3}}}'
						),
					template: 'flexy',
				}
				,
				{	// problem 25
					probQuestion: 'Find the volume of the shape below.',
					illustration: '',
					alt: 'Pyramid base 45 height 30',
					answerInstructions: '',
					answerNumber: '20250',
					infiniteNumber: '20,250',
					helpNumber: '20,250',
					measure: 'ft',
					solution: dataUtils.pre(
							'\\pan{3}{9}'
								+'{\\css'
									+'{\\rowgrp'
										+'{\\str{$$answerInstructions}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\input{$$answerNumber}}'
											+'{\\exp{\\str{$$measure}}{\\input{3}}}'
										+'}'
									+'}'
									+'{marginLeft80px}'
								+'}'
						),
					firstTable: dataUtils.pre(
										'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{Identify the shape:}}'
												+'{width140}'
											+'}'
											+'{\\str{Pyramid}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\str{Remember that the capitalized \"B\" means the area of the base. The base is a square, so the capital B is the same as the area for a square<span class=hyphenByLineThrough>&nbsp;&nbsp;</span> \"s<sup>2</sup>\".}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{Write the formula:}}'
												+'{width140}'
											+'}'
											+'{\\str{V = }}'
											+'{\\frac'
													+'{\\str{1}}'
													+'{\\str{3}}'
												+'}'
											+'{\\str{*}}'
											+'{\\str{B}}'
											+'{\\str{*}}'
											+'{\\str{H}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{Substitution:}}'
												+'{width140}'
											+'}'
											+'{\\str{V = }}'
											+'{\\frac'
													+'{\\str{1}}'
													+'{\\str{3}}'
												+'}'
											+'{\\str{*}}'
											+'{\\str{( 45 * 45 )}}'
											+'{\\str{*}}'
											+'{\\str{30}}'
										+'}'
										+'{\\str{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{Solve:}}'
												+'{width140}'
											+'}'
											+'{\\str{V = $$infiniteNumber}}'
										+'}'
								),
					helpAnswer: dataUtils.pre(
									'\\grp'
										+'{\\str{ &nbsp; $$helpNumber}}'
										+'{\\exp{\\str{$$measure}}{\\str{3}}}'
						),
					template: 'flexy',
				}
				,
				{	// problem 26
					probQuestion: 'Find the volume of the shape below.',
					illustration: '',
					alt: 'Pyramid base 18 height 22',
					answerInstructions: '',
					answerNumber: '2376',
					infiniteNumber: '2,376',
					helpNumber: '2,376',
					measure: 'm',
					solution: dataUtils.pre(
							'\\pan{3}{9}'
								+'{\\css'
									+'{\\rowgrp'
										+'{\\str{$$answerInstructions}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\input{$$answerNumber}}'
											+'{\\exp{\\str{$$measure}}{\\input{3}}}'
										+'}'
									+'}'
									+'{marginLeft80px}'
								+'}'
						),
					firstTable: dataUtils.pre(
										'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{Identify the shape:}}'
												+'{width140}'
											+'}'
											+'{\\str{Pyramid}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\str{Remember that the capitalized \"B\" means the area of the base. The base is a square, so the capital B is the same as the area for a square<span class=hyphenByLineThrough>&nbsp;&nbsp;</span> \"s<sup>2</sup>\".}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{Write the formula:}}'
												+'{width140}'
											+'}'
											+'{\\str{V = }}'
											+'{\\frac'
													+'{\\str{1}}'
													+'{\\str{3}}'
												+'}'
											+'{\\str{*}}'
											+'{\\str{B}}'
											+'{\\str{*}}'
											+'{\\str{H}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{Substitution:}}'
												+'{width140}'
											+'}'
											+'{\\str{V = }}'
											+'{\\frac'
													+'{\\str{1}}'
													+'{\\str{3}}'
												+'}'
											+'{\\str{*}}'
											+'{\\str{( 18 * 18 )}}'
											+'{\\str{*}}'
											+'{\\str{22}}'
										+'}'
										+'{\\str{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{Solve:}}'
												+'{width140}'
											+'}'
											+'{\\str{V = $$infiniteNumber}}'
										+'}'
								),
					helpAnswer: dataUtils.pre(
									'\\grp'
										+'{\\str{ &nbsp; $$helpNumber}}'
										+'{\\exp{\\str{$$measure}}{\\str{3}}}'
						),
					template: 'flexy',
				}
				,
				{	// problem 26
					probQuestion: 'Find the volume of the shape below.',
					illustration: '',
					alt: 'Pyramid base area 625 height 34.5',
					answerInstructions: '',
					answerNumber: '7187.5',
					infiniteNumber: '7,187.5',
					helpNumber: '7,187.5',
					measure: 'cm',
					solution: dataUtils.pre(
							'\\pan{3}{9}'
								+'{\\css'
									+'{\\rowgrp'
										+'{\\str{$$answerInstructions}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\input{$$answerNumber}}'
											+'{\\exp{\\str{$$measure}}{\\input{3}}}'
										+'}'
									+'}'
									+'{marginLeft80px}'
								+'}'
						),
					firstTable: dataUtils.pre(
										'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{Identify the shape:}}'
												+'{width140}'
											+'}'
											+'{\\str{Pyramid}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\str{Remember that the capitalized \"B\" means the area of the base. The base is a square, so the capital B is the same as the area for a square<span class=hyphenByLineThrough>&nbsp;&nbsp;</span> \"s<sup>2</sup>\".}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\str{In this problem you were given the area of the base. We know the given measurement (625 cm<sup>2</sup>) is the area because it is given in square centimeters.}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{Write the formula:}}'
												+'{width140}'
											+'}'
											+'{\\str{V = }}'
											+'{\\frac'
													+'{\\str{1}}'
													+'{\\str{3}}'
												+'}'
											+'{\\str{*}}'
											+'{\\str{B}}'
											+'{\\str{*}}'
											+'{\\str{H}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{Substitution:}}'
												+'{width140}'
											+'}'
											+'{\\str{V = }}'
											+'{\\frac'
													+'{\\str{1}}'
													+'{\\str{3}}'
												+'}'
											+'{\\str{*}}'
											+'{\\str{( 625 )}}'
											+'{\\str{*}}'
											+'{\\str{34.5}}'
										+'}'
										+'{\\str{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{Solve:}}'
												+'{width140}'
											+'}'
											+'{\\str{V = $$infiniteNumber}}'
										+'}'
								),
					helpAnswer: dataUtils.pre(
									'\\grp'
										+'{\\str{ &nbsp; $$helpNumber}}'
										+'{\\exp{\\str{$$measure}}{\\str{3}}}'
						),
					template: 'flexy',
				}
				,
				{	// problem 28
					probQuestion: 'Find the volume of the shape below. Round the answer to the nearest tenth of a cubic inch.',
					illustration: '',
					alt: 'Pyramid base area 16 height 2.75',
					answerInstructions: '',
					answerNumber: '14.7',
					infiniteNumber: '14.666...',
					helpNumber: '14.7',
					measure: 'in',
					solution: dataUtils.pre(
							'\\pan{3}{9}'
								+'{\\css'
									+'{\\rowgrp'
										+'{\\str{$$answerInstructions}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\input{$$answerNumber}}'
											+'{\\exp{\\str{$$measure}}{\\input{3}}}'
										+'}'
									+'}'
									+'{marginLeft80px}'
								+'}'
						),
					firstTable: dataUtils.pre(
										'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{Identify the shape:}}'
												+'{width140}'
											+'}'
											+'{\\str{Pyramid}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\str{Remember that the capitalized \"B\" means the area of the base. The base is a square, so the capital B is the same as the area for a square<span class=hyphenByLineThrough>&nbsp;&nbsp;</span> \"s<sup>2</sup>\".}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\str{In this problem you were given the area of the base. We know the given measurement (16 in<sup>2</sup>) is the area because it is given in square inches.}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{Write the formula:}}'
												+'{width140}'
											+'}'
											+'{\\str{V = }}'
											+'{\\frac'
													+'{\\str{1}}'
													+'{\\str{3}}'
												+'}'
											+'{\\str{*}}'
											+'{\\str{B}}'
											+'{\\str{*}}'
											+'{\\str{H}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{Substitution:}}'
												+'{width140}'
											+'}'
											+'{\\str{V = }}'
											+'{\\frac'
													+'{\\str{1}}'
													+'{\\str{3}}'
												+'}'
											+'{\\str{*}}'
											+'{\\str{( 625 )}}'
											+'{\\str{*}}'
											+'{\\str{34.5}}'
										+'}'
										+'{\\str{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{Solve:}}'
												+'{width140}'
											+'}'
											+'{\\str{V = $$infiniteNumber}}'
										+'}'
								),
					helpAnswer: dataUtils.pre(
									'\\grp'
										+'{\\str{ &nbsp; $$helpNumber}}'
										+'{\\exp{\\str{$$measure}}{\\str{3}}}'
						),
					template: 'flexy',
				}
				,
				{	// problem 29
					probQuestion: 'Find the volume of the shape below. Give the answer as a mixed number.',
					illustration: '',
					alt: 'Pyramid base 2 1/4 height 8 1/2',
					answerInstructions: '',
					ansWhole: '14',
					ansNum: '11',
					ansDen: '32',
					measure: 'in',
					solution: dataUtils.pre(
							'\\pan{3}{9}'
								+'{\\css'
									+'{\\rowgrp'
										+'{\\str{$$answerInstructions}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\mixed{\\input{$$ansWhole}}{\\frac{\\input{$$ansNum}}{\\input{$$ansDen}}}}'
											+'{\\exp{\\str{$$measure}}{\\input{3}}}'
										+'}'
									+'}'
									+'{marginLeft80px}'
								+'}'
						),
					firstTable: dataUtils.pre(
										'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{Identify the shape:}}'
												+'{width140}'
											+'}'
											+'{\\str{Pyramid}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\str{Remember that the capitalized \"B\" means the area of the base. The base is a square, so the capital B is the same as the area for a square<span class=hyphenByLineThrough>&nbsp;&nbsp;</span> \"s<sup>2</sup>\".}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{Write the formula:}}'
												+'{width140}'
											+'}'
											+'{\\str{V = }}'
											+'{\\frac'
													+'{\\str{1}}'
													+'{\\str{3}}'
												+'}'
											+'{\\str{*}}'
											+'{\\str{B}}'
											+'{\\str{*}}'
											+'{\\str{H}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{Substitution:}}'
												+'{width140}'
											+'}'
											+'{\\str{V = }}'
											+'{\\frac'
													+'{\\str{1}}'
													+'{\\str{3}}'
												+'}'
											+'{\\str{*}}'
											+'{\\str{(}}'
											+'{\\css'
												+'{\\mixed'
													+'{\\str{2}}'
													+'{\\frac'
														+'{\\str{1}}'
														+'{\\str{4}}'
													+'}'
												+'}'
												+'{fracReducedRightMargin}'
											+'}'
											+'{\\str{*}}'
											+'{\\css'
												+'{\\mixed'
													+'{\\str{2}}'
													+'{\\frac'
														+'{\\str{1}}'
														+'{\\str{4}}'
													+'}'
												+'}'
												+'{fracReducedRightMargin}'
											+'}'
											+'{\\str{)}}'
											+'{\\str{*}}'
											+'{\\css'
												+'{\\mixed'
													+'{\\str{8}}'
													+'{\\frac'
														+'{\\str{1}}'
														+'{\\str{2}}'
													+'}'
												+'}'
												+'{fracReducedRightMargin}'
											+'}'
										+'}'
										+'{\\str{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{Solve:}}'
												+'{width140}'
											+'}'
											+'{\\str{V = }}'
											+'{\\css'
												+'{\\mixed'
													+'{\\str{$$ansWhole}}'
													+'{\\frac'
														+'{\\str{$$ansNum}}'
														+'{\\str{$$ansDen}}'
													+'}'
												+'}'
												+'{fracReducedRightMargin}'
											+'}'
										+'}'
								),
					helpAnswer: dataUtils.pre(
									'\\grp'
										+'{\\css'
											+'{\\mixed'
												+'{\\str{$$ansWhole}}'
												+'{\\frac'
													+'{\\str{$$ansNum}}'
													+'{\\str{$$ansDen}}'
												+'}'
											+'}'
											+'{fracReducedRightMargin}'
										+'}'
										+'{\\exp{\\str{$$measure}}{\\str{3}}}'
						),
					template: 'flexy',
				}
				,
				{	// problem 29
					probQuestion: 'Find the volume of the shape below. Give the answer as a fraction.',
					illustration: '',
					alt: 'Pyramid base 1/2 height 2 5/8',
					answerInstructions: '',
					ansNum: '7',
					ansDen: '32',
					measure: 'ft',
					solution: dataUtils.pre(
							'\\pan{3}{9}'
								+'{\\css'
									+'{\\rowgrp'
										+'{\\str{$$answerInstructions}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\frac{\\input{$$ansNum}}{\\input{$$ansDen}}}'
											+'{\\exp{\\str{$$measure}}{\\input{3}}}'
										+'}'
									+'}'
									+'{marginLeft80px}'
								+'}'
						),
					firstTable: dataUtils.pre(
										'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{Identify the shape:}}'
												+'{width140}'
											+'}'
											+'{\\str{Pyramid}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\str{Remember that the capitalized \"B\" means the area of the base. The base is a square, so the capital B is the same as the area for a square<span class=hyphenByLineThrough>&nbsp;&nbsp;</span> \"s<sup>2</sup>\".}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{Write the formula:}}'
												+'{width140}'
											+'}'
											+'{\\str{V = }}'
											+'{\\frac'
													+'{\\str{1}}'
													+'{\\str{3}}'
												+'}'
											+'{\\str{*}}'
											+'{\\str{B}}'
											+'{\\str{*}}'
											+'{\\str{H}}'
										+'}'
										+'{\\html{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{Substitution:}}'
												+'{width140}'
											+'}'
											+'{\\str{V = }}'
											+'{\\frac'
													+'{\\str{1}}'
													+'{\\str{3}}'
												+'}'
											+'{\\str{*}}'
											+'{\\str{(}}'
											+'{\\css'
												+'{\\frac'
													+'{\\str{1}}'
													+'{\\str{2}}'
												+'}'
												+'{fracReducedRightMargin}'
											+'}'
											+'{\\str{*}}'
											+'{\\css'
												+'{\\frac'
													+'{\\str{1}}'
													+'{\\str{2}}'
												+'}'
												+'{fracReducedRightMargin}'
											+'}'
											+'{\\str{)}}'
											+'{\\str{*}}'
											+'{\\css'
												+'{\\mixed'
													+'{\\str{2}}'
													+'{\\frac'
														+'{\\str{5}}'
														+'{\\str{8}}'
													+'}'
												+'}'
												+'{fracReducedRightMargin}'
											+'}'
										+'}'
										+'{\\str{&nbsp;}}'
										+'{\\grp'
											+'{\\css'
												+'{\\str{Solve:}}'
												+'{width140}'
											+'}'
											+'{\\str{V = }}'
											+'{\\css'
												+'{\\frac'
													+'{\\str{$$ansNum}}'
													+'{\\str{$$ansDen}}'
												+'}'
												+'{fracReducedRightMargin}'
											+'}'
										+'}'
								),
					helpAnswer: dataUtils.pre(
									'\\grp'
										+'{\\css'
											+'{\\frac'
												+'{\\str{$$ansNum}}'
												+'{\\str{$$ansDen}}'
											+'}'
											+'{fracReducedRightMargin}'
										+'}'
										+'{\\exp{\\str{$$measure}}{\\str{3}}}'
						),
					template: 'flexy',
				}
        ];
		/*shuffle = [
				{ problems: [1,2], total: 1},
				{ problems: [3,4], total: 1},
				{ problems: [5,6], total: 1},
				{ problems: [7,8], total: 1},
				{ problems: [9,10], total: 1},
				{ problems: [11,12], total: 1},
				{ problems: [13,14], total: 1},
				{ problems: [15,16], total: 1},
				{ problems: [17,18], total: 1},
				{ problems: [19,20], total: 1},
				{ problems: [21,22], total: 1},
				{ problems: [23,24], total: 1}
		];
    
    	return dataUtils.build(desc, template, data, shuffle);*/
		
		return dataUtils.build(desc, template, data);
}]);
