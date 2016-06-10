'use strict';
mapApp.service('mainService',
    [function () {
        return {
            setFilterList: setFilterList,
            changeZoom: changeZoom,
            changeMarkesStatus: changeMarkesStatus,
            toCenterMap:toCenterMap
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
                // map.center=one;
                // map.setZoom(Math.round(21-el.value/100));
                    toCenterMap(el.value,one);
            }

        }

        function toCenterMap(zoom,dot) {
            map.center=dot;
            zoom>=100? map.setZoom(Math.round(21-zoom/100)): map.setZoom(zoom);

        }


        function changeMarkesStatus(list) {
            let markersLatLng=[];
            for (let i = 0, j=0; i < markers.length; i++) {
               if(list[j]&&markers[i].title===list[j].nameOfObject){
                   if(j===0){
                 toCenterMap(11,markers[i]['position']);
                       console.log('Yeah');
                   }
                   j++;

                   // console.log(map.center+" "+ markers[i]['position']);
                   // map.center=markers[i]['position'];
                   // console.log(map.center+" "+ markers[i]['position']);
                   markers[i].setMap(map);
                   markersLatLng.push(markers[i]['position']);

                   // console.log(maps);
               }
                else{
                   markers[i].setMap(null);
               }
            }
            //Почему-то не работает
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