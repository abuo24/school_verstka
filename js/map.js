ymaps.ready(init);

function init() {
    var myMap = new ymaps.Map("map", {
        center: [40.319237, 72.24966,],
        zoom: 12
    });
    // ymaps.geoXml.load("/maps/doc/ymapsml/1.x/examples/xml/styles.xml")
    //     .then(function (res) {
    //         myMap.geoObjects.add(res.geoObjects);
    //     }, function (error) {
    //         alert("Error when loading styles: " + error);
    //     });
}