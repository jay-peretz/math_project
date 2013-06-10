/*global angular */

angular.module('mathSkills').service('data1_2', function () {
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
                            "help": '\\str{$words in number notation is $number}'
                        }
                    }]
                }]
            }
        },
        data = [
            { words: 'fifty-eight', number: '58', template: 'main' },
            { words: 'one hundred, seventy-four', number: '174', template: 'main' },
            { words: 'three hundred, thirty-six', number: '336', template: 'main' },
            { words: 'three thousand, three hundred eighty-six', number: '3,386', template: 'main' },
            { words: 'fifty thousand, nine hundred fifty-seven', number: '50,957', template: 'main' },
            { words: 'four hundred one', number: '401', template: 'main' },
            { words: 'seven thousand, seven hundred nineteen', number: '7,719', template: 'main' },
            { words: 'seventy-three thousand, one hundred seventy-eight', number: '73,178', template: 'main' },
            { words: 'one hundred twenty-six', number: '126', template: 'main' },
            { words: 'seven thousand, seven hundred forty-eight', number: '7,748', template: 'main' }
        ],
        interpolate = function (obj, data) {
            var string = JSON.stringify(obj);
            for (var symbol in data) {
                if (data.hasOwnProperty(symbol)) {
                    string = string.replace(new RegExp('\\$' + symbol, 'g'), data[symbol]);
                }
            }
            return JSON.parse(string);
        };

    ret.children = data.map(function (problem) {
        return interpolate(template[problem.template], problem);
    });

    return ret;
});
