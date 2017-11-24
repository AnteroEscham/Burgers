ymaps.ready(init);
    var myMap;

    function init(){
        myMap = new ymaps.Map ("map", {
            center: [59.95, 30.35],
            zoom: 11
        });

      myPlacemark = new ymaps.Placemark([59.95, 30.35], { content: 'Москва!', balloonContent: 'Столица России' });

      myMap.geoObjects.add(myPlacemark);
    }
