'use strict';
/*global angular */

angular.module('mathSkills')
	.config(['parserProvider', function (parserProvider) {
		parserProvider.register('input', {
			directiveTemplate: '<ms-modal expected={{expected}} label={{label}}></ms-modal>'
    	});
    }])
    .directive('msModal', [
        function () {
            return {
                controller: [
                    '$rootScope',
                    '$scope',
                    function ($rootScope, $scope) {
                        $rootScope.$on('showModalText', function (e, data) {
                            $scope.modalText = data.modalText;
							$("#example").modal();
                        });
                    }
                ],
                restrict: 'E',
                scope: {
                    expected: '@',
                    label: '@'
                },
                template: '<div>'+
								'<div id="example" class="modal hide fade in" ng-show=showModal>'+  
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
