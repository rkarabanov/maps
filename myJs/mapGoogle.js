var markers=[],
    map,
    myCircle,
    places=[
    {
        LatLng:{lat: 49.4534242, lng: 32.0461053},
        nameOfObject:'Черкаський національний університет імені Богдана Хмельницького, бульвар Шевченка',
        typeOfObject: 'university',
        imgUrl:'images/data/2-1.png'
    },
    {
        LatLng:{lat: 49.4216513, lng: 32.0965558},
        nameOfObject:'Черкасский государственный технологический университет',
        typeOfObject: 'university',
        imgUrl:'images/data/3-1.png'
    },
    {
        LatLng:{lat: 49.4058244, lng: 32.0536238},
        nameOfObject:'Восточноевропейский университет экономики и менеджмента',
        typeOfObject: 'university',
        imgUrl:'images/data/3-1.png'
    },
    {
        LatLng:{lat: 49.4360412, lng: 32.0743837},
        nameOfObject:'Ресторан "Государь"',
        typeOfObject: 'restaurant',
        imgUrl:'images/data/1-1.png'
    },
    {
        LatLng:{lat: 49.444, lng: 32.060852},
        nameOfObject:'Ресторан "Прованс"',
        typeOfObject: 'restaurant',
        imgUrl:'images/data/2-1.png'
    },
    {
        LatLng:{lat: 49.446408, lng: 32.06406},
        nameOfObject:'Ресторан "Балкон"',
        typeOfObject: 'restaurant',
        imgUrl:'images/data/3-1.png'
    },
    {
        LatLng:{lat: 49.4267021, lng: 32.0909706},
        nameOfObject:'Аптека "Желаем здоровья"',
        typeOfObject: 'pharmacy',
        imgUrl:'images/data/1-1.png'
    },
    {
        LatLng:{lat: 49.424385, lng: 32.077419},
        nameOfObject:'Кинотеатр "Мир"',
        typeOfObject: 'cinema',
        imgUrl:'images/data/2-1.png'
    },
    {
        LatLng:{lat: 49.4277321, lng: 32.0799995},
        nameOfObject:'Добра аптека',
        typeOfObject: 'pharmacy',
        imgUrl:'images/data/3-1.png'
    }

];

function initMap() {
        map = new google.maps.Map(document.getElementById('googleMap'), {
            center: {lat: 49.444433, lng: 32.059767},
            scrollwheel: false,
            zoom: 10
        });
    let marker;
    for (let i = 0; i < places.length; i++) {
        marker = new google.maps.Marker({
            map: map,
            position: places[i].LatLng,
            title: places[i].nameOfObject
        });
        markers.push(marker);
    }
  // map=new google.maps.Map(document.getElementById("googleMap"), mapProp);
}


google.maps.event.addDomListener(window, 'load', initMap);

