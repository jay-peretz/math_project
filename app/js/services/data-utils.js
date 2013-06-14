'use strict';
/*global angular */

angular.module('mathSkills.services').value('dataUtils', {
    build: function (desc, template, data) {
        var interpolate = function (obj, data) {
            var string = JSON.stringify(obj);
            for (var symbol in data) {
                if (data.hasOwnProperty(symbol)) {
                    string = string.replace(new RegExp('(\\$)?\\$' + symbol, 'g'), function ($0, $1) { return $1?$0 : data[symbol]; }); //console.log(string); 
                }
            }
            var ret = JSON.parse(string);
            ret.data = angular.copy(data);
            return ret;
        };

        desc.children = data.map(function (problem) {
            return interpolate(template[problem.template], problem);
        });

        return desc;
    }
});
