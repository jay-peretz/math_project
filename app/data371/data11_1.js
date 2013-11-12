/*global angular */

angular.module('mathSkills').service('data11_1', ['dataUtils', function (dataUtils) {
    var desc = {
            title: '11.1 Order Of Operations with Fractions',
            path: '11.1-order-of-operations-with-fractions',
            children: []
        },
        template = {
            main: {
                title: 'Order of Operations with Fractions',
                children: [{
                    title: 'Main Answer',
                    children: [{
                        problem: '$prob',
                        answer: '$ans',
                        controls: {
                            "checkAnswer": true,
                            "help": false,
                            "workbook": true
                        }
                    }]
                }, {
                    title: 'Workbook',
                    children: [{
                        problem: '\\col'+
                                '{\\fracstr{Solve}}' +
                                '{$prob}',
                        answer: '$wb',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }]
                }]
            }
        },
        data = [
            {
                prob: dataUtils.pre('\\grp{\\html{3}}{\\sign{+}}{\\frac{\\fracstr{1}}{\\fracstr{2}}}{\\sign{&bull;}}{\\frac{\\fracstr{1}}{\\fracstr{4}}}{\\sign{-}}{\\html{2}}'),
                ans: dataUtils.pre('\\mixed{\\input{1}}{\\frac{\\input{1}}{\\input{8}}}'),
                wb: dataUtils.pre('\\ordopssimple{' +
                        '\\btngrp{\\html{3}}{\\btn{+}{F}{bigger}}{\\frac{\\fracstr{1}}{\\fracstr{2}}}{\\btn{\xB7}{T}{huge}}{\\frac{\\fracstr{1}}{\\fracstr{4}}}{\\btn{-}{F}{bigger}}{\\html{2}},' +
                        '\\frac{\\input{1}}{\\input{8}},' +
                        '\\btngrp{\\html{3}}{\\btn{+}{T}{bigger}}{\\frac{\\fracstr{1}}{\\fracstr{8}}}{\\btn{-}{F}{bigger}}{\\html{2}},' +
                        '\\mixed{\\input{3}}{\\frac{\\input{1}}{\\input{8}}},' +
                        '\\btngrp{\\mixed{\\fracstr{3}}{\\frac{\\fracstr{1}}{\\fracstr{8}}}}{\\btn{-}{T}{bigger}}{\\html{2}},' +
                        '\\mixed{\\input{1}}{\\frac{\\input{1}}{\\input{8}}},' +
                        '\\grp{\\mixed{\\fracstr{1}}{\\frac{\\fracstr{1}}{\\fracstr{8}}}' +
                    '}'),
                template: 'main'
            },
			{
                prob: dataUtils.pre('\\grp{\\frac{\\fracstr{3}}{\\fracstr{8}}}{\\sign{+}}{\\frac{\\fracstr{6}}{\\fracstr{8}}}{\\sign{-}}{\\frac{\\fracstr{5}}{\\fracstr{8}}}'),
                ans: dataUtils.pre('\\frac{\\input{1}}{\\input{2}}'),
                wb: dataUtils.pre('\\ordopssimple{' +
                        '\\btngrp{\\frac{\\fracstr{3}}{\\fracstr{8}}}{\\btn{+}{T}{bigger}}{\\frac{\\fracstr{6}}{\\fracstr{8}}}{\\btn{-}{F}{bigger}}{\\frac{\\fracstr{5}}{\\fracstr{8}}},' +
                        '\\frac{\\input{9}}{\\input{8}},' +
                        '\\btngrp{\\frac{\\fracstr{9}}{\\fracstr{8}}}{\\btn{-}{T}{bigger}}{\\frac{\\fracstr{5}}{\\fracstr{8}}},' +
                        '\\frac{\\input{1}}{\\input{2}},' +
						'\\grp{\\frac{\\fracstr{1}}{\\fracstr{2}}}' +
                    '}'),
                template: 'main'
            },
			{
				prob: dataUtils.pre('\\grp{\\frac{\\fracstr{8}}{\\fracstr{6}}}{\\sign{-}}{\\frac{\\fracstr{3}}{\\fracstr{3}}}{\\sign{&divide;}}{\\frac{\\fracstr{6}}{\\fracstr{5}}}'),
				ans: dataUtils.pre('\\frac{\\input{1}}{\\input{2}}'),
				wb: dataUtils.pre('\\ordopssimple{' +
						'\\btngrp{\\frac{\\fracstr{8}}{\\fracstr{6}}}{\\btn{-}{F}{bigger}}{\\frac{\\fracstr{3}}{\\fracstr{3}}}{\\btn{÷}{T}{bigger}}{\\frac{\\fracstr{6}}{\\fracstr{5}}},' +
						'\\frac{\\input{5}}{\\input{6}},' +
						'\\btngrp{\\frac{\\fracstr{8}}{\\fracstr{6}}}{\\btn{-}{T}{bigger}}{\\frac{\\fracstr{5}}{\\fracstr{6}}},' +
						'\\frac{\\input{1}}{\\input{2}},' +
						'\\grp{\\frac{\\fracstr{1}}{\\fracstr{2}}}' +
						'}'),
				template: 'main'
			},
			{
				prob : dataUtils.pre('\\grp{\\sign{(}}{\\frac{\\fracstr{9}}{\\fracstr{5}}}{\\sign{-}}{\\frac{\\fracstr{1}}{\\fracstr{4}}}{\\sign{)}}{\\sign{\xF7}}{\\frac{\\fracstr{5}}{\\fracstr{6}}}'),
				ans: dataUtils.pre('\\mixed{\\input{1}}{\\frac{\\input{43}}{\\input{50}}}'),
				wb : dataUtils.pre('\\ordopssimple{' +
						'\\btngrp{\\css{\\html{(}}{bigger}}{\\frac{\\fracstr{9}}{\\fracstr{5}}}{\\btn{-}{T}{bigger}}{\\frac{\\fracstr{1}}{\\fracstr{4}}}{\\css{\\html{)}}{bigger}}{\\btn{\xF7}{F}{bigger}}{\\frac{\\fracstr{5}}{\\fracstr{6}}},' +
						'\\frac{\\input{31}}{\\input{20}},' +
						'\\btngrp{\\frac{\\fracstr{31}}{\\fracstr{20}}}{\\btn{\xF7}{T}{bigger}}{\\frac{\\fracstr{5}}{\\fracstr{6}}},' +
						'\\mixed{\\input{1}}{\\frac{\\input{43}}{\\input{50}}},' +
						'\\grp{\\mixed{\\fracstr{1}}{\\frac{\\fracstr{43}}{\\fracstr{50}}}}' +
						'}'),
				template: 'main'
			}
        ];

    return dataUtils.build(desc, template, data);
}]);
// sign{(} outputs the parents, in bigger styles
