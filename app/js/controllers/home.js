'use strict';
/*global angular */

angular.module('mathSkills')
    .controller('home', [
        '$scope',
        function ($scope) {
            $scope.course = 'GENERAL ARITHMETIC';
        }
    ]);
