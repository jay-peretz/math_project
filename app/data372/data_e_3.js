/*global angular */

angular.module('mathSkills').service('data_e_3', ['dataUtils', function (dataUtils) {
    var desc = {
            title: 'E.3 Division of Fractions',
            path: 'E.3-division-of-fractions',
            children: []
        },
        template = {
    		 one: {
					title: 'Find the Reciprocal of a Fraction',
					children: [{
						title: 'Main Answer',
						children: [{
							problem: '\\rowgrp'
							+'{\\grp{\\str{What is the reciprocal of \xA0}}'
							+'{\\frac{\\fracstr{$n1}}{\\fracstr{$d1}}}',
							answer: '\\frac{\\input{$na}}{\\input{$da}}',
							controls: {
								"checkAnswer": true,
								"help": '\\rowgrp'
								+'{\\grp{\\str{The reciprocal of \xA0}}'
								+'{\\frac{\\fracstr{$n1}}{\\fracstr{$d1}}}'
								+'{\\str{\xA0 is \xA0}}'
								+'{\\frac{\\fracstr{$d1}}{\\fracstr{$n1}}}}'
								+'{\\html{&nbsp;}}'
								+'{css{\\grp{\\str{answer:  \xA0}}'
								+'{\\frac{\\fracstr{$na}}{\\fracstr{$da}}}}{help-answer-text}}'
							}
						}]
					}]
			   },
            two: {
                title: 'Dividing Fractions',
                children: [{
                    title: 'Main Answer',
                    children: [{
                       /* problem: '\\grp{\\html{Find the quotient of &nbsp;}}'
                        		//+'{\\frac{\\fracstr{$n1}}{\\fracstr{$d1}}}
                        		+'{\\mixed{\\html{$w1}}{\\frac{\\fracstr{$n1}}{\\fracstr{$d1}}}}'
                        		+'{\\sign{&divide;}}'
                        		//+'{\\frac{\\fracstr{$n2}}{\\fracstr{$d2}}}',
                        		+'{\\mixed{\\html{$w2}}{\\frac{\\fracstr{$n2}}{\\fracstr{$d2}}}}',
                        answer: '\\mixed{\\input{$wa}}{\\frac{\\input{$na}}{\\input{$da}}}',
                        	//'\\frac{\\input{$na}}{\\input{$da}}',*/
                    	problem:'\\rowgrp'
								+'{\\grp{\\str{Find the quotient of \xA0}}'
								+'{\\mixed{\\html{$w1}}{\\frac{\\fracstr{$n1}}{\\fracstr{$d1}}}}'
								+'{\\sign{&divide;}}'
								+'{\\mixed{\\html{$w2}}{\\frac{\\fracstr{$n2}}{\\fracstr{$d2}}}}',					
						answer: '\\mixed{\\input{$wa}}{\\frac{\\input{$na}}{\\input{$da}}}',
                    	controls: {
                            "checkAnswer": true,
                            "help": false,
                            "workbook": true
                        }
                    }]
                }, {
                    title: 'Workbook',
                    children: [{
                    	problem: '\\col'
                    		+'{\\html{Solve}}' 
                    		+'{\\grp{\\mixed{\\html{$w1}}{\\frac{\\fracstr{$n1}}{\\fracstr{$d1}}}}'
							+'{\\sign{&divide;}}'
							+'{\\mixed{\\html{$w2}}{\\frac{\\fracstr{$n2}}{\\fracstr{$d2}}}}}',			
		                answer: '\\rowgrp'
							+'{\\ins{Divide the operands:}}'
							+'{\\html{&nbsp;}}'
							+'{\\grp{\\mixed{\\html{$w1}}{\\frac{\\fracstr{$n1}}{\\fracstr{$d1}}}}'
							+'{\\sign{&divide;}}'
							+'{\\mixed{\\html{$w2}}{\\frac{\\fracstr{$n2}}{\\fracstr{$d2}}}}}'
							+'{\\html{&nbsp;}}'
							+'{css{\\grp{\\html{Answer: }}{\\mixed{\\html{$wa}}{\\frac{\\fracstr{$na}}{\\fracstr{$da}}}}}{help-answer-text}}',
		                controls: {
		                    "checkAnswer": true,
		                    "help": true
		                }
                        /*problem: '\\rowgrp'
								+'{\\grp{\\str{Find the quotient of \xA0}}'
								+'{\\mixed{\\html{$w1}}{\\frac{\\fracstr{$n1}}{\\fracstr{$d1}}}}'
								+'{\\sign{&divide;}}'
								+'{\\mixed{\\html{$w2}}{\\frac{\\fracstr{$n2}}{\\fracstr{$d2}}}}}',
                        answer: '\\rowgrp'
								+'{\\ins{Rewrite the problem as the product of fractions:}}'
								+'{\\html{&nbsp;}}'
								+'{\\grp{\\frac{\\input{$n1}}{\\input{$d1}}}{\\sign{&times;}}{\\frac{\\input{$d2}}{\\input{$n2}}}}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }*/
                    }, /*{
                       problem: '\\rowgrp'
								+'{\\grp{\\str{Find the quotient of \xA0}}'
								+'{\\mixed{\\html{$w1}}{\\frac{\\fracstr{$n1}}{\\fracstr{$d1}}}}'
								+'{\\sign{&divide;}}'
								+'{\\mixed{\\html{$w2}}{\\frac{\\fracstr{$n2}}{\\fracstr{$d2}}}}}',
                         answer: '\\css'
									+'{\\rowgrp'
										+'{\\html{Rewrite the problem as the product of fractions:}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp{\\frac{\\fracstr{$n1}}{\\fracstr{$d1}}}{\\sign{&times;}}{\\frac{\\fracstr{$d2}}{\\fracstr{$n2}}}}'
										+'{\\canfrac{[$n1,$d1]}{[$d2,$n2]}{[$na,$da]}}'
									+'}{well}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }*/]
                }]
            },
            three: {
                title: 'Dividing Fractions',
                children: [{
                    title: 'Main Answer',
                    children: [{
                        problem: '\\rowgrp'
                        		+'{\\html{Find the quotient of : }}'
                        		+'{\\html{&nbsp;}}'
                        		+'{\\grp{\\frac{\\fracstr{$n1}}{\\fracstr{$d1}}}{\\sign{&divide;}}{\\frac{\\fracstr{$n2}}{\\fracstr{$d2}}}{\\sign{&divide;}}{\\frac{\\fracstr{$n3}}{\\fracstr{$d3}}}}',
                        answer: '\\frac{\\input{$na}}{\\input{$da}}',
                        controls: {
                            "checkAnswer": true,
                            "help": false,
                            "workbook": true
                        }
                    }]
                }, {
                    title: 'Workbook',
                    children: [{
                    	problem: '\\col'
                    		+'{\\html{Solve}}' 
                    		+'{\\grp{\\mixed{\\html{$w1}}{\\frac{\\fracstr{$n1}}{\\fracstr{$d1}}}}'
							+'{\\sign{&divide;}}'
							+'{\\mixed{\\html{$w2}}{\\frac{\\fracstr{$n2}}{\\fracstr{$d2}}}}'
							+'{\\sign{&divide;}}'
							+'{\\frac{\\fracstr{$n3}}{\\fracstr{$d3}}}}',			
		                answer: '\\rowgrp'
							+'{\\ins{Divide the operands:}}'
							+'{\\html{&nbsp;}}'
							+'{\\grp{\\mixed{\\html{$w1}}{\\frac{\\fracstr{$n1}}{\\fracstr{$d1}}}}'
							+'{\\sign{&divide;}}'
							+'{\\mixed{\\html{$w2}}{\\frac{\\fracstr{$n2}}{\\fracstr{$d2}}}}'
							+'{\\sign{&divide;}}'
							+'{\\mixed{\\html{$w3}}{\\frac{\\fracstr{$n3}}{\\fracstr{$d3}}}}}'
							+'{\\html{&nbsp;}}'
							+'{css{\\grp{\\html{Answer: }}{\\mixed{\\html{$wa}}{\\frac{\\fracstr{$na}}{\\fracstr{$da}}}}}{help-answer-text}}',
		                controls: {
		                    "checkAnswer": true,
		                    "help": true
		                }
                       /* problem: '\\rowgrp'
                        	+'{\\html{Find the quotient of : }}'
                    		+'{\\html{&nbsp;}}'
                    		+'{\\grp{\\frac{\\fracstr{$n1}}{\\fracstr{$d1}}}{\\sign{&divide;}}{\\frac{\\fracstr{$n2}}{\\fracstr{$d2}}}{\\sign{&divide;}}{\\frac{\\fracstr{$n3}}{\\fracstr{$d3}}}}',
                        answer: '\\rowgrp'
								+'{\\ins{Rewrite the problem as the product of fractions:}}'
								+'{\\html{&nbsp;}}'
								+'{\\grp{\\frac{\\input{$n1}}{\\input{$d1}}}{\\sign{&times;}}{\\frac{\\input{$d2}}{\\input{$n2}}}{\\sign{&times;}}{\\frac{\\input{$d3}}{\\input{$n3}}}}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }*/
                    }, /*{
                        problem: '\\rowgrp'
                        	+'{\\html{Find the quotient of : }}'
                    		+'{\\html{&nbsp;}}'
                    		+'{\\grp{\\frac{\\fracstr{$n1}}{\\fracstr{$d1}}}{\\sign{&divide;}}{\\frac{\\fracstr{$n2}}{\\fracstr{$d2}}}{\\sign{&divide;}}{\\frac{\\fracstr{$n3}}{\\fracstr{$d3}}}}',
                        answer: '\\css'
									+'{\\rowgrp'
										+'{\\html{Rewrite the problem as the product of fractions:}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp{\\frac{\\fracstr{$n1}}{\\fracstr{$d1}}}{\\sign{&times;}}{\\frac{\\fracstr{$d2}}{\\fracstr{$n2}}}{\\sign{&times;}}{\\frac{\\fracstr{$d3}}{\\fracstr{$n3}}}}'
										+'{\\canfrac{[$n1,$d1]}{[$d2,$n2]}{[$d3,$n3]}{[$na,$da]}}'
									+'}{well}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }*/]
                }]
            }
        },
        data = [
            { n1: '3', d1: '7', na: '7', da: '3', template: 'one' },
			{ n1: '8', d1: '5', na: '5', da: '8', template: 'one' },
            { w1:'', n1: '2', d1: '9', w2:'', n2: '1', d2: '3', wa:'', na: '2', da: '3', template: 'two' },
            { w1:'', n1: '7', d1: '8', w2:'', n2: '3', d2: '2', wa:'', na: '7', da: '12', template: 'two' },
            { w1:'', n1: '4', d1: '5', w2:'', n2: '2', d2: '15', wa:'6', na: '', da: '', template: 'two' },
            { w1:'', n1: '1', d1: '2', w2:'5', n2: '', d2: '', wa:'', na: '1', da: '10', template: 'two' },
            { w1:'8', n1: '', d1: '', w2:'', n2: '5', d2: '6', wa:'9', na: '3', da: '5', template: 'two' },
            { w1:'', n1: '14', d1: '15', w2:'', n2: '7', d2: '3', wa:'', na: '2', da: '5', template: 'two' },
            { w1:'', n1: '7', d1: '10', w2:'', n2: '2', d2: '3', wa:'1', na: '1', da: '20', template: 'two' },
            { w1:'', n1: '3', d1: '4', w2:'', n2: '2', d2: '5', w3:'', n3: '9', d3: '8', wa:'', na: '4', da: '15', template: 'three' },
            { w1:'', n1: '28', d1: '15', w2:'', n2: '2', d2: '1', w3:'', n3: '14', d3: '20', wa:'1', na: '1', da: '3', template: 'three' },
            { w1:'', n1: '4', d1: '9', w2:'', n2: '3', d2: '5', w3:'', n3: '6', d3: '7', wa:'', na: '70', da: '81', template: 'three' }
        ];

    return dataUtils.build(desc, template, data);
}]);
