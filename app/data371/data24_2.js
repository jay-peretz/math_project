/*global angular */

angular.module('mathSkills').service('data24_2', ['dataUtils', function (dataUtils) {
    var desc = {
			title: '24.2 Add, Subtract, Multiply, and Divide Measurements in the English System',
            path: '24.2-add-subtract-multiply-divide-measurements-in-the-english-system',
            children: []
        },
		template = {
        },
        data = [
        ];

    return dataUtils.build(desc, template, data);
}]);
