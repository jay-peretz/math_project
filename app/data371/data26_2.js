/*global angular */

angular.module('mathSkills').service('data26_2', ['dataUtils', function (dataUtils) {
    var desc = {
			title: '26.2 Conversions between the Fahrenheit and Celsius Temperature Scales',
            path: '26.2-conversions-between-fahrenheit-and-celsius',
            children: []
        },
				template = {
        },
        data = [
        ];

    return dataUtils.build(desc, template, data);
}]);
