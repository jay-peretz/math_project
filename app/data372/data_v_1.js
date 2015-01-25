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
											+'{\\str{V = (2.85) * (3.6) * (4.5)}}'
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
											+'{\\str{(}}'
											+'{\\css'
												+'{\\mixed'
													+'{\\str{3}}'
													+'{\\frac'
														+'{\\str{1}}'
														+'{\\str{2}}'
													+'}'
												+'}'
												+'{fracNoMargin}'
											+'}'
											+'{\\str{)}}'
											+'{\\str{<sup> 3</sup>}}'
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
												+'{}'
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
											+'{}'
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
											+'{\\str{(}}'
											+'{\\css'
												+'{\\mixed'
													+'{\\str{2}}'
													+'{\\frac'
														+'{\\str{3}}'
														+'{\\str{4}}'
													+'}'
												+'}'
												+'{fracNoMargin}'
											+'}'
											+'{\\str{)}}'
											+'{\\str{<sup> 3</sup>}}'
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
												+'{}'
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
											+'{}'
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
											+'{\\frac'
												+'{\\str{22}}'
												+'{\\str{7}}'
											+'}'
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
											+'{\\str{( 7 )<sup> 2</sup>}}'
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
