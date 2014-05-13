'use strict';
/*global angular */

angular.module('mathSkills')
    .directive('msModal', [
        function () {
            return {
                controller: [
                    '$rootScope',
                    '$scope',
                    function ($rootScope, $scope) {
                        $rootScope.$on('showModalText', function (e, data) {
                            $scope.modalText = data.modalText;
							if (typeof data.modalClass !== "undefined") {
								$scope.modalClass = data.modalClass;
							} else {
								$scope.modalClass = "modalUpperRight";
							}
							$("#indexModal").modal({  
							  //backdrop: false  
							});
                        });
                    }
                ],
                restrict: 'E',
                scope: {
                    expected: '@',
                    label: '@'
                },
                template: '<div>'+
								'<div id="indexModal" class="modal hide" role="dialog" aria-hidden="true" data-backdrop="false" ng-show=showModal ng-class=modalClass>'+  
									'<div class="modal-body">'+  
									'<ms-expression expected={{modalText}}></ms-expression>'+
									'</div>'+ 
									'<div class="modal-footer">'+  
									'<a href="#" class="btn" data-dismiss="modal">Close</a>'+  
									'</div>'+  
								'</div>'+
						'</div>'		
            };
        }
    ]);
