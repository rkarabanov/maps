mapApp.filter('typeOfObjects',function () {
    return function (input) {
        return input.typeOfObject
                .indexOf(curType)>-1;
    }
});