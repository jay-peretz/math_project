/*global angular */

angular.module('mathSkills').service('data5_1', ['dataUtils', function (dataUtils) {
    var ret = {
            title: '5.1 Using Divisibility Tests Using Divisibility Tests',
            path: '5.1-using-divisibility-tests-using-divisibility-tests',
            children: []
        },
        template = {
            main: {
                title: 'Divisibility Test on Whole Numbers',
                children: [{
                    title: 'Main Answer',
                    children: [{
                        problem: '\\str{Is $number divisible by $div?}',
                        answer: '\\grp{\\btn{YES}{$yes}}{\\btn{NO}{$no}}',
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
                number: '95', div: '10', yes:'F', no:'T', template: 'main',
                help: 'The number 10 divides evenly into any whole number which ends in a 0. Because 39 does not end with a 0, it is not divisible by 10.'
            },
            { //2
                number: '41', div: '10', yes:'F', no:'T', template: 'main',
                help: 'The number 10 divides evenly into any whole number which ends in a 0. Because 41 does not end with a 0, it is not divisible by 10.'
            },
            { //3
                number: '9', div: '7', yes:'F', no:'T', template: 'main',
                help: '9 is not divisible by 7'
            },
            { //4
                number: '173', div: '5', yes:'F', no:'T', template: 'main',
                help: 'The number 5 divides evenly into any whole number which ends in a 5 or a 0. Because 173 does not end with a 0 or 5, it is not divisible by 5.'
            },
            { //5
                number: '28', div: '7', yes:'T', no:'F', template: 'main',
                help: '28 is divisible by 7.'
            },
            { //6
                number: '275', div: '3', yes:'F', no:'T', template: 'main',
                help: 'The number 3 divides evenly into any whole number whose digits add up to a number divisible by 3. Because the digits of 275 add up to a number that is not divisible by 3, 275 is not divisible by 3.'
            },
            { //7
                number: '47', div: '3', yes:'F', no:'T', template: 'main',
                help: 'The number 3 divides evenly into any whole number whose digits add up to a number divisible by 3. Because the digits of 47 add up to a number that is not divisible by 3, 47 is not divisible by 3.'
            },
            { //8
                number: '181', div: '5', yes:'F', no:'T', template: 'main',
                help: 'The number 5 divides evenly into any whole number which ends in a 5 or a 0. Because 181 does not end with a 0 or 5, it is not divisible by 5.'
            },
            { //9
                number: '384', div: '2', yes:'T', no:'F', template: 'main',
                help: 'The number 2 divides evenly into any even number. Because 384 is even, 2 divides into it evenly. (Rember: an even number is a number whose one\'s place is a 0, 2, 4, 6, or 8).'
            },
            { //10
                number: '165', div: '2', yes:'F', no:'T', template: 'main',
                help: 'The number 2 divides evenly into any even number. Because 165 is odd, 2 does not divide into it evenly. (Rember: an even number is a number whose one\'s place is a 0, 2, 4, 6, or 8).'
            },
        ];

    return dataUtils.build(ret, template, data);
}]);