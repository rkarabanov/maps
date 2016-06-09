'use strict';
//директивы не используеются
mapApp.directive('objectsButton', function () {

    return {

        restrict: 'A',
        replace: false,
        scope: true,
        link: function ($scope, element, attrs) {

            $scope.setType = function () {
                $scope.curType = '';
                console.log($scope.curType);
            }
        }
    }
})
    .directive('townsButton', function () {

        return {

            restrict: 'A',
            replace: false,
            scope: true,
            link: function ($scope, element, attrs) {

                $scope.setType = function () {
                    $scope.curType = 'town';
                    console.log($scope.curType);
                }
            }
        }
    })
    .directive('universityesButton', function () {

        return {

            restrict: 'A',
            replace: false,
            scope: true,
            link: function ($scope, element, attrs) {

                $scope.setType = function () {
                    $scope.curType = 'university';
                    console.log($scope.curType);
                }
            }
        }
    })

;