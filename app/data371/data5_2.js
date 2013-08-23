/*global angular */

angular.module('mathSkills').service('data5_2', ['dataUtils', function (dataUtils) {
    var ret = {
            title: '5.2 Identifying Factors of a Given Number',
            path: '5.2-identifying-factors-of-a-given-number',
            children: []
        },
        template = {
            main: {
                title: 'Choose the Factors of Whole Numbers',
                children: [{
                    title: 'Main Answer',
                    children: [{
                        problem: '\\html{Select the given divisors of $number .}',
                        answer: '\\grp{\\chkbtn{1}{$btn1}}{\\chkbtn{2}{$btn2}}{\\chkbtn{3}{$btn3}}{\\chkbtn{5}{$btn5}}{\\chkbtn{7}{$btn7}}{\\chkbtn{10}{$btn0}}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }]
                }]
            }
        },
        data = [
            { number: '95', btn1:'T', btn2:'F', btn3:'F', btn5:'T', btn7:'F', btn0:'F', template: 'main'},
            { number: '136', btn1:'T', btn2:'T', btn3:'F', btn5:'F', btn7:'F', btn0:'F', template: 'main'},
            { number: '180', btn1:'T', btn2:'T', btn3:'T', btn5:'T', btn7:'F', btn0:'T', template: 'main'},
            { number: '160', btn1:'T', btn2:'T', btn3:'F', btn5:'T', btn7:'F', btn0:'T', template: 'main'},
            { number: '81', btn1:'T', btn2:'F', btn3:'T', btn5:'F', btn7:'F', btn0:'F', template: 'main'},
            { number: '59', btn1:'T', btn2:'F', btn3:'F', btn5:'F', btn7:'F', btn0:'F', template: 'main'},
            { number: '84', btn1:'T', btn2:'T', btn3:'T', btn5:'F', btn7:'T', btn0:'F', template: 'main'},
            { number: '145', btn1:'T', btn2:'F', btn3:'F', btn5:'T', btn7:'F', btn0:'F', template: 'main'},
            { number: '60', btn1:'T', btn2:'T', btn3:'T', btn5:'T', btn7:'F', btn0:'T', template: 'main'},
            { number: '94', btn1:'T', btn2:'T', btn3:'F', btn5:'F', btn7:'F', btn0:'F', template: 'main'}
        ];

    return dataUtils.build(ret, template, data);
}]);