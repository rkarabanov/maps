'use strict';

controllers

    .controller('MainCtrl', ['$scope', 'mainService',
        function ($scope, mainService) {
            $scope.mapList=places;
            $scope.curType = '';
            $scope.markersActive=mainService.changeMarkesStatus($scope.mapList);

            $scope.setType = function (type) {
                $scope.curType=type;
                $scope.mapList = mainService.setFilterList(type);
                $scope.markersActive=mainService.changeMarkesStatus($scope.mapList);
            };

            $scope.setName = function (name) {
                $scope.markersActive=mainService.changeMarkesStatus([{nameOfObject:name}]);
            };

            $scope.setZoom = function () {
                mainService.changeZoom( $scope.markersActive);
            }

        }]);