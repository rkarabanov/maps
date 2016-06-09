'use strict';
mapApp.service('mainService',
    [function () {
        return {
            setFilterList: setFilterList,
            changeZoom: changeZoom,
            changeMarkesStatus: changeMarkesStatus
        };


        function changeZoom(markersLatLng) {
            //;

            let el=  document.getElementById("inputMeters");
            if(markersLatLng.length!==1){
                el.value="Оставьте одну метку";
            }else if(el.value<100||el.value>1000){
                el.value="ошибка ввода";
            }
            else for (let one of markersLatLng){
                map.center=one;
                map.setZoom(21-el.value/100);
            }

        }

        function changeMarkesStatus(list) {
            let markersLatLng=[];
            for (let i = 0, j=0; i < markers.length; i++) {
               if(list[j]&&markers[i].title===list[j].nameOfObject){
                   j++;
                   markers[i].setMap(map);
                   markersLatLng.push(markers[i]['position']);

                   // console.log(maps);
               }
                else{
                   markers[i].setMap(null);
               }
            }
            //Почему-то не работает
            //map.center=markersLatLng[0];
            return markersLatLng;
        }


        function setFilterList(type) {
            let arrPlaces = [];
            for (let i = 0; i < places.length; i++) {
                if (places[i].typeOfObject.indexOf(type) > -1) {
                    arrPlaces.push(places[i]);
                }
            }
            return arrPlaces;
        }


    }]
);