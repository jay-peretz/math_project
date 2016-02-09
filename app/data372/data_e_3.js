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
                      problem:'\\rowgrp'
								+'{\\grp{\\str{Find the quotient of \xA0}}'
								+'{\\mixed{\\html{$w1}}{\\frac{\\fracstr{$n1}}{\\fracstr{$d1}}}}'
								+'{\\sign{&divide;}}'
								+'{\\mixed{\\html{$w2}}{\\frac{\\fracstr{$n2}}{\\fracstr{$d2}}}}}',					
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
                        problem: '\\rowgrp'
								+'{\\grp{\\str{Find the quotient of \xA0}}'
								+'{\\mixed{\\html{$w1}}{\\frac{\\fracstr{$n1}}{\\fracstr{$d1}}}}'
								+'{\\sign{&divide;}}'
								+'{\\mixed{\\html{$w2}}{\\frac{\\fracstr{$n2}}{\\fracstr{$d2}}}}}',
                        answer: '\\rowgrp'
								+'{\\ins{Rewrite the problem as the product of fractions:}}'
								+'{\\html{&nbsp;}}'
								+'{\\grp{\\frac{\\input{$wn1}}{\\input{$wd1}}}{\\sign{&times;}}{\\frac{\\input{$wd2}}{\\input{$wn2}}}}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }, {
                       problem: '\\rowgrp'
								+'{\\grp{\\str{Find the quotient of \xA0}}'
								+'{\\mixed{\\html{$w1}}{\\frac{\\fracstr{$n1}}{\\fracstr{$d1}}}}'
								+'{\\sign{&divide;}}'
								+'{\\mixed{\\html{$w2}}{\\frac{\\fracstr{$n2}}{\\fracstr{$d2}}}}}',
                         answer: '\\css'
									+'{\\rowgrp'
										+'{\\html{Rewrite the problem as the product of fractions:}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp{\\frac{\\fracstr{$wn1}}{\\fracstr{$wd1}}}{\\sign{&times;}}{\\frac{\\fracstr{$wd2}}{\\fracstr{$wn2}}}}'
										+'{\\canfrac{[$wn1,$wd1]}{[$wd2,$wn2]}{[$wna,$wda]}}'
									+'}{well}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }]
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
                        		+'{\\grp{\\frac{\\fracstr{$n1}}{\\fracstr{$d1}}}{\\sign{&divide;}}{\\mixed{\\html{$w2}}{\\frac{\\fracstr{$n2}}{\\fracstr{$d2}}}}{\\sign{&divide;}}{\\frac{\\fracstr{$n3}}{\\fracstr{$d3}}}}',
                        answer: '\\rowgrp'
                        		+'{\\html{&nbsp;}}'
                        		+'{\\mixed{\\input{$wa}}{\\frac{\\input{$na}}{\\input{$da}}}}',
                        controls: {
                            "checkAnswer": true,
                            "help": false,
                            "workbook": true
                        }
                    }]
                }, {
                    title: 'Workbook',
                    children: [{
                    	problem: '\\rowgrp'
                        	+'{\\html{Find the quotient of : }}'
                    		+'{\\html{&nbsp;}}'
                    		+'{\\grp{\\frac{\\fracstr{$n1}}{\\fracstr{$d1}}}{\\sign{&divide;}}{\\mixed{\\html{$w2}}{\\frac{\\fracstr{$n2}}{\\fracstr{$d2}}}}{\\sign{&divide;}}{\\frac{\\fracstr{$n3}}{\\fracstr{$d3}}}}',
                        answer: '\\rowgrp'
								+'{\\ins{Rewrite the problem as the product of fractions:}}'
								+'{\\html{&nbsp;}}'
								+'{\\grp{\\frac{\\input{$n1}}{\\input{$d1}}}{\\sign{&times;}}{\\frac{\\input{$wd2}}{\\input{$wn2}}}{\\sign{&times;}}{\\frac{\\input{$d3}}{\\input{$n3}}}}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }, {
                        problem: '\\rowgrp'
                        	+'{\\html{Find the quotient of : }}'
                    		+'{\\html{&nbsp;}}'
                    		+'{\\grp{\\frac{\\fracstr{$n1}}{\\fracstr{$d1}}}{\\sign{&divide;}}{\\mixed{\\html{$w2}}{\\frac{\\fracstr{$n2}}{\\fracstr{$d2}}}}{\\sign{&divide;}}{\\frac{\\fracstr{$n3}}{\\fracstr{$d3}}}}',
                        answer: '\\css'
									+'{\\rowgrp'
										+'{\\html{Rewrite the problem as the product of fractions:}}'
										+'{\\html{&nbsp;}}'
										+'{\\grp{\\frac{\\fracstr{$n1}}{\\fracstr{$d1}}}{\\sign{&times;}}{\\frac{\\fracstr{$wd2}}{\\fracstr{$wn2}}}{\\sign{&times;}}{\\frac{\\fracstr{$d3}}{\\fracstr{$n3}}}}'
										+'{\\canfrac{[$n1,$d1]}{[$wd2,$wn2]}{[$d3,$n3]}{[$wna,$wda]}}'
									+'}{well}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }]
                }]
            }
        },
        data = [
			//problem 1
            { n1: '3', d1: '7', na: '7', da: '3', template: 'one' },
			//problem 2
			{ n1: '8', d1: '5', na: '5', da: '8', template: 'one' },
			//problem 3
            { w1:'', n1: '2', d1: '9', w2:'', n2: '1', d2: '3', wn1:'2', wd1:'9', wn2:'1', wd2:'3', wa:'', na: '2', da: '3', wna: '2', wda: '3', template: 'two' },
			//problem 4
            { w1:'', n1: '7', d1: '8', w2:'', n2: '3', d2: '2', wn1:'7', wd1:'8', wn2:'3', wd2:'2', wa:'', na: '7', da: '12', wna: '7', wda: '12', template: 'two' },
			//problem 5
            { w1:'', n1: '4', d1: '5', w2:'', n2: '2', d2: '15', wn1:'4', wd1:'5', wn2:'2', wd2:'15', wa:'6', na: '', da: '',  wna: '6', wda: '1', template: 'two' },
			//problem 6
            { w1:'', n1: '1', d1: '2', w2:'5', n2: '', d2: '', wn1:'1', wd1:'2', wn2:'5', wd2:'1', wa:'', na: '1', da: '10', na1: '', da1: '1', wna: '1', wda: '10', template: 'two' },
			//problem 7
            { w1:'8', n1: '', d1: '', w2:'', n2: '5', d2: '6', wn1:'8', wd1:'1', wn2:'5', wd2:'6', wa:'9', na: '3', da: '5', wna: '48', wda: '5', template: 'two' },
			//problem 8
            { w1:'', n1: '14', d1: '15', w2:'', n2: '7', d2: '3',  wn1:'14', wd1:'15', wn2:'7', wd2:'3', wa:'', na: '2', da: '5', wna: '2', wda: '5', template: 'two' },
			//problem 9
            { w1:'', n1: '7', d1: '10', w2:'', n2: '2', d2: '3', wn1:'7', wd1:'10', wn2:'2', wd2:'3', wa:'1', na: '1', da: '20', wna: '21', wda: '20', template: 'two' },
			//problem 10
            { w1:'', n1: '3', d1: '4', w2:'', n2: '2', d2: '5', w3:'', n3: '9', d3: '8', wn2: '2', wd2: '5', wa:'1', na: '2', da: '3', wna: '5', wda: '3', template: 'three' },
			//problem 11
            { w1:'', n1: '28', d1: '15', w2:'2', n2: '', d2: '', w3:'', n3: '14', d3: '20', wn2: '2', wd2: '1', wa:'1', na: '1', da: '3', wna: '4', wda: '3', template: 'three' },
			//problem 12
            { w1:'', n1: '4', d1: '9', w2:'', n2: '3', d2: '5', w3:'', n3: '6', d3: '7', wn2: '3', wd2: '5', wa:'', na: '70', da: '81', wna: '70', wda: '81', template: 'three' }
        ];

    return dataUtils.build(desc, template, data);
}]);
