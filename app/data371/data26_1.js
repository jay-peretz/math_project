/*global angular */

angular.module('mathSkills').service('data26_1', ['dataUtils', function (dataUtils) {
    var desc = {
			title: '26.1 Conversions between the English and Metric Systems',
            path: '26.1-conversions-between-english-and-metric',
            children: []
        },
		template = {
        },
        data = [
        ];

    return dataUtils.build(desc, template, data);
}]);
