'use strict';
/*global angular */

angular.module('mathSkills')
    .controller('home', [
        '$scope',
        function ($scope) {
			if ($('body').hasClass('clskls372')) {
				$scope.course = 'Prealgebra';
			} else {
				$scope.course = 'GENERAL ARITHMETIC';
			}
        }
    ]);
