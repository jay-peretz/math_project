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
            }
        ];

    return dataUtils.build(desc, template, data);
}]);
