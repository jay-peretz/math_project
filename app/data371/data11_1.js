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
			// problem 1
			{
                prob: dataUtils.pre('\\grp{\\frac{\\fracstr{2}}{\\fracstr{3}}}{\\sign{+}}{\\frac{\\fracstr{2}}{\\fracstr{3}}}{\\css{\\html{\xB7}}{huge}}{\\frac{\\fracstr{1}}{\\fracstr{4}}}'),
                ans: dataUtils.pre('\\frac{\\input{5}}{\\input{6}}'),
                wb: dataUtils.pre('\\ordopssimple{' +
						'\\grp{\\frac{\\fracstr{2}}{\\fracstr{3}}}{\\btn{+}{F}{bigger}}{\\frac{\\fracstr{2}}{\\fracstr{3}}}{\\btn{\xB7}{T}{huge}}{\\frac{\\fracstr{1}}{\\fracstr{4}}},' +
                        '\\frac{\\input{1}}{\\input{6}},' +
                        '\\grp{\\frac{\\fracstr{2}}{\\fracstr{3}}}{\\btn{+}{T}{bigger}}{\\frac{\\fracstr{1}}{\\fracstr{6}}},' +
                        '\\frac{\\input{5}}{\\input{6}},' +
						'\\grp{\\frac{\\fracstr{5}}{\\fracstr{6}}}' +
                    '}{Evaluate the operator (simplify any fractions).}'),
                template: 'main'
            },
			//problem 2
			{
				prob: dataUtils.pre('\\grp{\\frac{\\fracstr{8}}{\\fracstr{6}}}{\\sign{-}}{\\frac{\\fracstr{3}}{\\fracstr{3}}}{\\sign{&divide;}}{\\frac{\\fracstr{6}}{\\fracstr{5}}}'),
				ans: dataUtils.pre('\\frac{\\input{1}}{\\input{2}}'),
				wb: dataUtils.pre('\\ordopssimple{' +
						'\\grp{\\frac{\\fracstr{8}}{\\fracstr{6}}}{\\btn{-}{F}{bigger}}{\\frac{\\fracstr{3}}{\\fracstr{3}}}{\\btn{÷}{T}{bigger}}{\\frac{\\fracstr{6}}{\\fracstr{5}}},' +
						'\\frac{\\input{5}}{\\input{6}},' +
						'\\grp{\\frac{\\fracstr{8}}{\\fracstr{6}}}{\\btn{-}{T}{bigger}}{\\frac{\\fracstr{5}}{\\fracstr{6}}},' +
						'\\frac{\\input{1}}{\\input{2}},' +
						'\\grp{\\frac{\\fracstr{1}}{\\fracstr{2}}}' +
						'}{Evaluate the operator (simplify any fractions).}'),
				template: 'main'
			},
			// problem 3
			{
                prob: dataUtils.pre('\\grp{\\frac{\\fracstr{1}}{\\fracstr{2}}}{\\css{\\html{\xB7}}{huge}}{\\frac{\\fracstr{3}}{\\fracstr{5}}}{\\sign{-}}{\\frac{\\fracstr{1}}{\\fracstr{5}}}'),
                ans: dataUtils.pre('\\frac{\\input{1}}{\\input{10}}'),
                wb: dataUtils.pre('\\ordopssimple{' +
						'\\grp{\\frac{\\fracstr{1}}{\\fracstr{2}}}{\\btn{\xB7}{T}{huge}}{\\frac{\\fracstr{3}}{\\fracstr{5}}}{\\btn{-}{F}{bigger}}{\\frac{\\fracstr{1}}{\\fracstr{5}}},' +
                        '\\frac{\\input{3}}{\\input{10}},' +
                        '\\grp{\\frac{\\fracstr{3}}{\\fracstr{10}}}{\\btn{-}{T}{bigger}}{\\frac{\\fracstr{1}}{\\fracstr{5}}},' +
                        '\\frac{\\input{1}}{\\input{10}},' +
						'\\grp{\\frac{\\fracstr{1}}{\\fracstr{10}}}' +
                    '}{Evaluate the operator (simplify any fractions).}'),
                template: 'main'
            },
			// problem 4
			{
				prob : dataUtils.pre('\\grp{\\frac{\\fracstr{5}}{\\fracstr{8}}}{\\css{\\html{\xB7}}{huge}}{\\css{\\html{(}}{bigger}}{\\frac{\\fracstr{2}}{\\fracstr{3}}}{\\sign{+}}{\\frac{\\fracstr{1}}{\\fracstr{2}}}{\\css{\\html{)}}{bigger}}'),
				ans: dataUtils.pre('\\frac{\\input{35}}{\\input{48}}'),
				wb : dataUtils.pre('\\ordopssimple{' +
						'\\grp{\\frac{\\fracstr{5}}{\\fracstr{8}}}{\\btn{\xB7}{F}{huge}}{\\css{\\html{(}}{bigger}}{\\frac{\\fracstr{2}}{\\fracstr{3}}}{\\btn{+}{T}{bigger}}{\\frac{\\fracstr{1}}{\\fracstr{2}}}{\\css{\\html{)}}{bigger}},' +
						'\\frac{\\input{7}}{\\input{6}},' +
						'\\grp{\\frac{\\fracstr{5}}{\\fracstr{8}}}{\\btn{\xB7}{T}{huge}}{\\frac{\\fracstr{7}}{\\fracstr{6}}},' +
						'\\frac{\\input{35}}{\\input{48}},' +
						'\\grp{\\frac{\\fracstr{35}}{\\fracstr{48}}}' +
						'}{Evaluate the operator (simplify any fractions).}'),
				template: 'main'
			},
			// problem 5
			{
				prob : dataUtils.pre('\\grp{\\sign{(}}{\\frac{\\fracstr{9}}{\\fracstr{5}}}{\\sign{-}}{\\frac{\\fracstr{1}}{\\fracstr{4}}}{\\sign{)}}{\\sign{\xF7}}{\\frac{\\fracstr{5}}{\\fracstr{6}}}'),
				ans: dataUtils.pre('\\mixed{\\input{1}}{\\frac{\\input{43}}{\\input{50}}}'),
				wb : dataUtils.pre('\\ordopssimple{' +
						'\\grp{\\css{\\html{(}}{bigger}}{\\frac{\\fracstr{9}}{\\fracstr{5}}}{\\btn{-}{T}{bigger}}{\\frac{\\fracstr{1}}{\\fracstr{4}}}{\\css{\\html{)}}{bigger}}{\\btn{\xF7}{F}{bigger}}{\\frac{\\fracstr{5}}{\\fracstr{6}}},' +
						'\\frac{\\input{31}}{\\input{20}},' +
						'\\grp{\\frac{\\fracstr{31}}{\\fracstr{20}}}{\\btn{\xF7}{T}{bigger}}{\\frac{\\fracstr{5}}{\\fracstr{6}}},' +
						'\\mixed{\\input{1}}{\\frac{\\input{43}}{\\input{50}}},' +
						'\\grp{\\mixed{\\fracstr{1}}{\\frac{\\fracstr{43}}{\\fracstr{50}}}}' +
						'}{Evaluate the operator (simplify any fractions).}'),
				template: 'main'
			},
			// problem 6
			{
                prob: dataUtils.pre('\\grp{\\frac{\\fracstr{3}}{\\fracstr{4}}}{\\sign{+}}{\\frac{\\fracstr{1}}{\\fracstr{3}}}{\\css{\\html{\xB7}}{huge}}{\\frac{\\fracstr{2}}{\\fracstr{3}}}{\\sign{-}}{\\frac{\\fracstr{5}}{\\fracstr{12}}}'),
                ans: dataUtils.pre('\\frac{\\input{5}}{\\input{9}}'),
                wb: dataUtils.pre('\\ordopssimple{' +
								  
						'\\grp{\\frac{\\fracstr{3}}{\\fracstr{4}}}{\\btn{+}{F}{bigger}}{\\frac{\\fracstr{1}}{\\fracstr{3}}}{\\btn{\xB7}{T}{huge}}{\\frac{\\fracstr{2}}{\\fracstr{3}}}{\\btn{-}{F}{bigger}}{\\frac{\\fracstr{5}}{\\fracstr{12}}},' +
                        '\\frac{\\input{2}}{\\input{9}},' +
                        '\\grp{\\frac{\\fracstr{3}}{\\fracstr{4}}}{\\btn{+}{T}{bigger}}{\\frac{\\fracstr{2}}{\\fracstr{9}}}{\\btn{-}{F}{bigger}}{\\frac{\\fracstr{5}}{\\fracstr{12}}},' +
                        '\\frac{\\input{35}}{\\input{36}},' +
                        '\\grp{\\frac{\\fracstr{35}}{\\fracstr{36}}}{\\btn{-}{T}{bigger}}{\\frac{\\fracstr{5}}{\\fracstr{12}}},' +
                        '\\frac{\\input{5}}{\\input{9}},' +
                        '\\grp{\\frac{\\fracstr{5}}{\\fracstr{9}}}' +
                    '}{Evaluate the operator (simplify any fractions).}'),
                template: 'main'
            },
			// problem 7
			{
                prob: dataUtils.pre('\\grp{\\frac{\\fracstr{4}}{\\fracstr{5}}}{\\sign{+}}{\\html{6}}{\\sign{\xF7}}{\\frac{\\fracstr{3}}{\\fracstr{2}}}'),
                ans: dataUtils.pre('\\mixed{\\input{4}}{\\frac{\\input{4}}{\\input{5}}}'),
                wb: dataUtils.pre('\\ordopssimple{' +
						'\\grp{\\frac{\\fracstr{4}}{\\fracstr{5}}}{\\btn{+}{F}{bigger}}{\\html{6}}{\\btn{\xF7}{T}{bigger}}{\\frac{\\fracstr{3}}{\\fracstr{2}}},' +
                        '\\input{4},' +
                        '\\grp{\\frac{\\fracstr{4}}{\\fracstr{5}}}{\\btn{+}{T}{bigger}}{\\html{4}},' +
                        '\\mixed{\\input{4}}{\\frac{\\input{4}}{\\input{5}}},' +
						'\\grp{\\mixed{\\fracstr{4}}{\\frac{\\fracstr{4}}{\\fracstr{5}}}}' +
                    '}{Evaluate the operator (simplify any fractions).}'),
                template: 'main'
            },
			// problem 8
			{
                prob: dataUtils.pre('\\grp{\\mixed{\\fracstr{2}}{\\frac{\\fracstr{1}}{\\fracstr{3}}}}{\\sign{-}}{\\mixed{\\fracstr{1}}{\\frac{\\fracstr{1}}{\\fracstr{4}}}}{\\css{\\html{\xB7}}{huge}}{\\mixed{\\fracstr{1}}{\\frac{\\fracstr{2}}{\\fracstr{5}}}}'),
                ans: dataUtils.pre('\\frac{\\input{7}}{\\input{12}}'),
                wb: dataUtils.pre('\\ordopssimple{' +
						'\\grp{\\mixed{\\fracstr{2}}{\\frac{\\fracstr{1}}{\\fracstr{3}}}}{\\btn{-}{F}{bigger}}{\\mixed{\\fracstr{1}}{\\frac{\\fracstr{1}}{\\fracstr{4}}}}{\\btn{\xB7}{T}{huge}}{\\mixed{\\fracstr{1}}{\\frac{\\fracstr{2}}{\\fracstr{5}}}},' +
                        '\\frac{\\input{7}}{\\input{4}},' +
                        '\\grp{\\mixed{\\fracstr{2}}{\\frac{\\fracstr{1}}{\\fracstr{3}}}}{\\btn{-}{T}{bigger}}{\\frac{\\fracstr{7}}{\\fracstr{4}}},' +
                        '\\frac{\\input{7}}{\\input{12}},' +
						'\\grp{\\frac{\\fracstr{7}}{\\fracstr{12}}}' +
                    '}{Evaluate the operator (simplify any fractions).}'),
                template: 'main'
            },
			// problem 9
			{
                prob: dataUtils.pre('\\grp{\\css{\\html{(}}{bigger}}{\\mixed{\\fracstr{1}}{\\frac{\\fracstr{1}}{\\fracstr{2}}}}{\\sign{+}}{\\frac{\\fracstr{3}}{\\fracstr{4}}}{\\css{\\html{)}}{bigger}}{\\sign{\xF7}}{\\mixed{\\fracstr{1}}{\\frac{\\fracstr{4}}{\\fracstr{5}}}}'),
                ans: dataUtils.pre('\\mixed{\\input{1}}{\\frac{\\input{1}}{\\input{4}}}'),
                wb: dataUtils.pre('\\ordopssimple{' +
						'\\grp{\\css{\\html{(}}{bigger}}{\\mixed{\\fracstr{1}}{\\frac{\\fracstr{1}}{\\fracstr{2}}}}{\\btn{+}{T}{bigger}}{\\frac{\\fracstr{3}}{\\fracstr{4}}}{\\css{\\html{)}}{bigger}}{\\btn{\xF7}{F}{bigger}}{\\mixed{\\fracstr{1}}{\\frac{\\fracstr{4}}{\\fracstr{5}}}},' +
                        '\\mixed{\\input{2}}{\\frac{\\input{1}}{\\input{4}}},' +
                        '\\grp{\\mixed{\\fracstr{2}}{\\frac{\\fracstr{1}}{\\fracstr{4}}}}{\\btn{\xF7}{T}{bigger}}{\\mixed{\\fracstr{1}}{\\frac{\\fracstr{4}}{\\fracstr{5}}}},' +
                        '\\mixed{\\input{1}}{\\frac{\\input{1}}{\\input{4}}},' +
						'\\grp{\\mixed{\\fracstr{1}}{\\frac{\\fracstr{1}}{\\fracstr{4}}}}' +
                    '}{Evaluate the operator (simplify any fractions).}'),
                template: 'main'
            },
			// problem 10
            {
                prob: dataUtils.pre('\\grp{\\html{3}}{\\sign{+}}{\\frac{\\fracstr{1}}{\\fracstr{2}}}{\\sign{&bull;}}{\\frac{\\fracstr{1}}{\\fracstr{4}}}{\\sign{-}}{\\html{2}}'),
                ans: dataUtils.pre('\\mixed{\\input{1}}{\\frac{\\input{1}}{\\input{8}}}'),
                wb: dataUtils.pre('\\ordopssimple{' +
                        '\\grp{\\html{3}}{\\btn{+}{F}{bigger}}{\\frac{\\fracstr{1}}{\\fracstr{2}}}{\\btn{\xB7}{T}{huge}}{\\frac{\\fracstr{1}}{\\fracstr{4}}}{\\btn{-}{F}{bigger}}{\\html{2}},' +
                        '\\frac{\\input{1}}{\\input{8}},' +
                        '\\grp{\\html{3}}{\\btn{+}{T}{bigger}}{\\frac{\\fracstr{1}}{\\fracstr{8}}}{\\btn{-}{F}{bigger}}{\\html{2}},' +
                        '\\mixed{\\input{3}}{\\frac{\\input{1}}{\\input{8}}},' +
                        '\\grp{\\mixed{\\fracstr{3}}{\\frac{\\fracstr{1}}{\\fracstr{8}}}}{\\btn{-}{T}{bigger}}{\\html{2}},' +
                        '\\mixed{\\input{1}}{\\frac{\\input{1}}{\\input{8}}},' +
                        '\\grp{\\mixed{\\fracstr{1}}{\\frac{\\fracstr{1}}{\\fracstr{8}}}}' +
                    '}{Evaluate the operator (simplify any fractions).}'),
                template: 'main'
            }
        ];

    return dataUtils.build(desc, template, data);
}]);
// sign{(} outputs the parents, in bigger styles
