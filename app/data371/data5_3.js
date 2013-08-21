/*global angular */

angular.module('mathSkills').service('data5_3', ['dataUtils', function (dataUtils) {
    var ret = {
            title: '5.3 Identifying Prime and Composite Numbers',
            path: '5.3-identifying-prime-and-composite-numbers',
            children: []
        },
        template = {
            main: {
                title: 'Determine whether a Number is Prime or Composite',
                children: [{
                    title: 'Main Answer',
                    children: [{
                        problem: '\\str{Is $number prime or composite?}',
                        answer: '\\grp{\\btn{Prime}{$prime}}{\\btn{Composite}{$composite}}',
                        controls: {
                            "checkAnswer": false,
                            "help": '\\html{$help}'
                        }
                    }]
                }]
            }
        },
        data = [
            { //1
                number: '55', prime:'F', composite:'T', template: 'main',
                help: '55 is composite because it is divisible by more than 1 and itself.'
            },
            { //2
                number: '41', prime:'T', composite:'F', template: 'main',
                help: '41 is prime because it is divisible by only 1 and itself.'
            },
            { //3
                number: '71', prime:'T', composite:'F', template: 'main',
                help: '71 is prime because it is divisible by only 1 and itself.'
            },
            { //4
                number: '17', prime:'T', composite:'F', template: 'main',
                help: '17 is prime because it is divisible by only 1 and itself.'
            },
            { //5
                number: '56', prime:'F', composite:'T', template: 'main',
                help: '56 is composite because it is divisible by more than 1 and itself.'
            },
            { //6
                number: '90', prime:'F', composite:'T', template: 'main',
                help: '90 is composite because it is divisible by more than 1 and itself.'
            },
            { //7
                number: '11', prime:'T', composite:'F', template: 'main',
                help: '11 is prime because it is divisible by only 1 and itself.'
            },
            { //8
                number: '118', prime:'F', composite:'T', template: 'main',
                help: '118 is composite because it is divisible by more than 1 and itself.'
            },
            { //9
                number: '111', prime:'F', composite:'T', template: 'main',
                help: '111 is composite because it is divisible by more than 1 and itself.'
            },
            { //10
                number: '185', prime:'F', composite:'T', template: 'main',
                help: '185 is composite because it is divisible by more than 1 and itself.'
            },
        ];

    return dataUtils.build(ret, template, data);
}]);
