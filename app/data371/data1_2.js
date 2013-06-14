/*global angular */

angular.module('mathSkills').service('data1_2', ['dataUtils', function (dataUtils) {
    var ret = {
            title: '1.2 Standard Notation of Whole Numbers',
            path: '1.2-standard-notation-of-whole-numbers',
            children: []
        },
        template = {
            main: {
                title: 'Words to Number',
                children: [{
                    title: 'Main Answer',
                    children: [{
                        problem: '\\str{Write $words in number notation}',
                        answer: '\\input{$number}',
                        controls: {
                            "checkAnswer": true,
                            "help": '\\rowgrp{\\row{\\str{$words}}}{row{\\str{\xA0}}}{\\css{\\row{\\str{Answer: \xA0}}{\\commasnumber{$number}}}{label_like}}'
                        }
                    }]
                }]
            }
        },
        data = [
            { words: 'fifty-eight', number: '58', template: 'main' },
            { words: 'one hundred, seventy-four', number: '174', template: 'main' },
            { words: 'three hundred, thirty-six', number: '336', template: 'main' },
            { words: 'three thousand, three hundred eighty-six', number: '3386', template: 'main' },
            { words: 'fifty thousand, nine hundred fifty-seven', number: '50957', template: 'main' },
            { words: 'four hundred one', number: '401', template: 'main' },
            { words: 'seven thousand, seven hundred nineteen', number: '7719', template: 'main' },
            { words: 'seventy-three thousand, one hundred seventy-eight', number: '73178', template: 'main' },
            { words: 'one hundred twenty-six', number: '126', template: 'main' },
            { words: 'seven thousand, seven hundred forty-eight', number: '7748', template: 'main' }
        ];

    return dataUtils.build(ret, template, data);
}]);
