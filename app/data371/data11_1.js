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
                                '{\\str{Solve}}' +
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
                prob: '\\\\row{\\\\str{3}}{\\\\sign{+}}{\\\\frac{\\\\str{1}}{\\\\str{2}}}{\\\\sign{&times;}}{\\\\frac{\\\\str{1}}{\\\\str{4}}}{\\\\sign{-}}{\\\\str{2}}',
                ans: '\\\\mixed{\\\\input{1}}{\\\\frac{\\\\input{1}}{\\\\input{8}}}',
                wb: '\\\\ordopssimple{' +
                        '\\\\row{\\\\str{3}}{\\\\but{+}{F}}{\\\\frac{\\\\str{1}}{\\\\str{2}}}{\\\\but{×}{T}}{\\\\frac{\\\\str{1}}{\\\\str{4}}}{\\\\but{-}{F}}{\\\\str{2}},' +
                        '\\\\frac{\\\\input{1}}{\\\\input{8}},' +
                        '\\\\row{\\\\str{3}}{\\\\but{+}{T}}{\\\\frac{\\\\str{1}}{\\\\str{8}}}{\\\\but{-}{F}}{\\\\str{2}},' +
                        '\\\\mixed{\\\\input{3}}{\\\\frac{\\\\input{1}}{\\\\input{8}}},' +
                        '\\\\row{\\\\mixed{\\\\str{3}}{\\\\frac{\\\\str{1}}{\\\\str{8}}}}{\\\\but{-}{T}}{\\\\str{2}},' +
                        '\\\\mixed{\\\\input{1}}{\\\\frac{\\\\input{1}}{\\\\input{8}}},' +
                        '\\\\row{\\\\mixed{\\\\str{1}}{\\\\frac{\\\\str{1}}{\\\\str{8}}}' +
                    '}',
                template: 'main'
            },
			{
                prob: '\\\\row{\\\\frac{\\\\str{3}}{\\\\str{8}}}{\\\\sign{+}}{\\\\frac{\\\\str{6}}{\\\\str{8}}}{\\\\sign{-}}{\\\\frac{\\\\str{5}}{\\\\str{8}}}',
                ans: '\\\\frac{\\\\input{1}}{\\\\input{2}}',
                wb: '\\\\ordopssimple{' +
                        '\\\\row{\\\\frac{\\\\str{3}}{\\\\str{8}}}{\\\\but{+}{T}}{\\\\frac{\\\\str{6}}{\\\\str{8}}}{\\\\but{-}{F}}{\\\\frac{\\\\str{5}}{\\\\str{8}}},' +
                        '\\\\frac{\\\\input{9}}{\\\\input{8}},' +
                        '\\\\row{\\\\frac{\\\\str{9}}{\\\\str{8}}}{\\\\but{-}{T}}{\\\\frac{\\\\str{5}}{\\\\str{8}}},' +
                        '\\\\frac{\\\\input{1}}{\\\\input{2}},' +
						'\\\\row{\\\\frac{\\\\str{1}}{\\\\str{2}}}' +
                    '}',
                template: 'main'
            },
			{
				prob: '\\\\row{\\\\frac{\\\\str{8}}{\\\\str{6}}}{\\\\sign{-}}{\\\\frac{\\\\str{3}}{\\\\str{3}}}{\\\\sign{&divide;}}{\\\\frac{\\\\str{6}}{\\\\str{5}}}',
				ans: '\\\\frac{\\\\input{1}}{\\\\input{2}}',
				wb: '\\\\ordopssimple{' +
						'\\\\row{\\\\frac{\\\\str{8}}{\\\\str{6}}}{\\\\but{-}{F}}{\\\\frac{\\\\str{3}}{\\\\str{3}}}{\\\\but{÷}{T}}{\\\\frac{\\\\str{6}}{\\\\str{5}}},' +
						'\\\\frac{\\\\input{5}}{\\\\input{6}},' +
						'\\\\row{\\\\frac{\\\\str{8}}{\\\\str{6}}}{\\\\but{-}{T}}{\\\\frac{\\\\str{5}}{\\\\str{6}}},' +
						'\\\\frac{\\\\input{1}}{\\\\input{2}},' +
						'\\\\row{\\\\frac{\\\\str{1}}{\\\\str{2}}}' +
						'}',
				template: 'main'
			},
			{
				prob : '\\\\row{\\\\sign{(}}{\\\\frac{\\\\str{9}}{\\\\str{5}}}{\\\\sign{-}}{\\\\frac{\\\\str{1}}{\\\\str{4}}}{\\\\sign{)}}{\\\\sign{\xF7}}{\\\\frac{\\\\str{5}}{\\\\str{6}}}',
				ans: '\\\\mixed{\\\\input{1}}{\\\\frac{\\\\input{43}}{\\\\input{50}}}' ,
				wb : '\\\\ordopssimple{' +
						'\\\\row{\\\\sign{(}}{\\\\frac{\\\\str{9}}{\\\\str{5}}}{\\\\but{-}{T}}{\\\\frac{\\\\str{1}}{\\\\str{4}}}{\\\\sign{)}}{\\\\but{\xF7}{F}}{\\\\frac{\\\\str{5}}{\\\\str{6}}},' +
						'\\\\frac{\\\\input{31}}{\\\\input{20}},' +
						'\\\\row{\\\\frac{\\\\str{31}}{\\\\str{20}}}{\\\\but{\xF7}{T}}{\\\\frac{\\\\str{5}}{\\\\str{6}}},' +
						'\\\\mixed{\\\\input{1}}{\\\\frac{\\\\input{43}}{\\\\input{50}}},' +
						'\\\\row{\\\\mixed{\\\\str{1}}{\\\\frac{\\\\str{43}}{\\\\str{50}}}}' +
						'}',
				template: 'main'
			}
        ];

    return dataUtils.build(desc, template, data);
}]);
