ymaps.ready(init);
    var myMap;

    function init(){
        myMap = new ymaps.Map ("map", {
            center: [59.95, 30.35],
            zoom: 10
        });

        myCollection = new ymaps.GeoObjectCollection({}, {
          iconLayout: 'default#image',
          iconImageHref: './img/content/map-marker.svg',
          // iconImageHref: '/img/content/ancor-map.png'
         draggable: false // и их можно перемещать
      });


      var myPlacemark1 = new ymaps.Placemark([59.95, 30.35], {

       });

      var myPlacemark2 = new ymaps.Placemark([60.00, 30.35], {

        });

      var myPlacemark3 = new ymaps.Placemark([59.90, 30.60], {

         });


      myCollection.add(myPlacemark1).add(myPlacemark2).add(myPlacemark3);
      myMap.geoObjects.add(myCollection);
    }
