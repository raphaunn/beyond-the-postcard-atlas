var wms_layers = [];


        var lyr_WorldStreetMap_0 = new ol.layer.Tile({
            'title': 'World Street Map',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_UNESCOareas_1 = new ol.format.GeoJSON();
var features_UNESCOareas_1 = format_UNESCOareas_1.readFeatures(json_UNESCOareas_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UNESCOareas_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UNESCOareas_1.addFeatures(features_UNESCOareas_1);
var lyr_UNESCOareas_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UNESCOareas_1, 
                style: style_UNESCOareas_1,
                popuplayertitle: 'UNESCO areas',
                interactive: true,
    title: 'UNESCO areas<br />\
    <img src="styles/legend/UNESCOareas_1_0.png" /> Boundaries of World Heritage properties<br />\
    <img src="styles/legend/UNESCOareas_1_1.png" /> Buffer zones of World Heritage properties<br />\
    <img src="styles/legend/UNESCOareas_1_2.png" /> <br />' });
var format_Cities_2 = new ol.format.GeoJSON();
var features_Cities_2 = format_Cities_2.readFeatures(json_Cities_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cities_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cities_2.addFeatures(features_Cities_2);
var lyr_Cities_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Cities_2, 
                style: style_Cities_2,
                popuplayertitle: 'Cities',
                interactive: true,
                title: 'Cities'
            });
var format_PlacesPOIs_3 = new ol.format.GeoJSON();
var features_PlacesPOIs_3 = format_PlacesPOIs_3.readFeatures(json_PlacesPOIs_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PlacesPOIs_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PlacesPOIs_3.addFeatures(features_PlacesPOIs_3);
cluster_PlacesPOIs_3 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_PlacesPOIs_3
});
var lyr_PlacesPOIs_3 = new ol.layer.Vector({
                declutter: false,
                source:cluster_PlacesPOIs_3, 
                style: style_PlacesPOIs_3,
                popuplayertitle: 'Places (POIs)',
                interactive: true,
    title: 'Places (POIs)<br />\
    <img src="styles/legend/PlacesPOIs_3_0.png" /> Amsterdam<br />\
    <img src="styles/legend/PlacesPOIs_3_1.png" /> Bern<br />\
    <img src="styles/legend/PlacesPOIs_3_2.png" /> Bruges<br />\
    <img src="styles/legend/PlacesPOIs_3_3.png" /> Brussels<br />\
    <img src="styles/legend/PlacesPOIs_3_4.png" /> Luxembourg<br />\
    <img src="styles/legend/PlacesPOIs_3_5.png" /> Nice<br />\
    <img src="styles/legend/PlacesPOIs_3_6.png" /> Strasbourg<br />\
    <img src="styles/legend/PlacesPOIs_3_7.png" /> <br />' });
var group_capturas = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'capturas'});

lyr_WorldStreetMap_0.setVisible(true);lyr_UNESCOareas_1.setVisible(true);lyr_Cities_2.setVisible(true);lyr_PlacesPOIs_3.setVisible(true);
var layersList = [lyr_WorldStreetMap_0,lyr_UNESCOareas_1,lyr_Cities_2,lyr_PlacesPOIs_3];
lyr_UNESCOareas_1.set('fieldAliases', {'id': 'id', 'area': 'area', 'Area/buffe': 'Area/buffe', });
lyr_Cities_2.set('fieldAliases', {'fid': 'fid', 'X': 'X', 'Y': 'Y', 'City': 'City', 'World Heritage Site(s)': 'World Heritage Site(s)', });
lyr_PlacesPOIs_3.set('fieldAliases', {'fid': 'fid', 'query': 'query', 'poi_id': 'poi_id', 'name': 'name', 'city_stop': 'city_stop', 'locality': 'locality', 'country': 'country', 'type': 'type', 'description': 'description', 'geocode_query': 'geocode_query', 'verification': 'verification', 'source_url': 'source_url', 'coordinates': 'coordinates', 'status': 'status', });
lyr_UNESCOareas_1.set('fieldImages', {'id': 'TextEdit', 'area': 'TextEdit', 'Area/buffe': 'TextEdit', });
lyr_Cities_2.set('fieldImages', {'fid': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'City': 'TextEdit', 'World Heritage Site(s)': 'TextEdit', });
lyr_PlacesPOIs_3.set('fieldImages', {'fid': 'TextEdit', 'query': 'TextEdit', 'poi_id': 'TextEdit', 'name': 'TextEdit', 'city_stop': 'TextEdit', 'locality': 'TextEdit', 'country': 'TextEdit', 'type': 'TextEdit', 'description': 'TextEdit', 'geocode_query': 'TextEdit', 'verification': 'TextEdit', 'source_url': 'TextEdit', 'coordinates': 'TextEdit', 'status': 'TextEdit', });
lyr_UNESCOareas_1.set('fieldLabels', {'id': 'hidden field', 'area': 'inline label - always visible', 'Area/buffe': 'hidden field', });
lyr_Cities_2.set('fieldLabels', {'fid': 'hidden field', 'X': 'hidden field', 'Y': 'hidden field', 'City': 'header label - always visible', 'World Heritage Site(s)': 'hidden field', });
lyr_PlacesPOIs_3.set('fieldLabels', {'fid': 'hidden field', 'query': 'hidden field', 'poi_id': 'hidden field', 'name': 'inline label - always visible', 'city_stop': 'hidden field', 'locality': 'hidden field', 'country': 'hidden field', 'type': 'hidden field', 'description': 'inline label - always visible', 'geocode_query': 'hidden field', 'verification': 'hidden field', 'source_url': 'hidden field', 'coordinates': 'hidden field', 'status': 'hidden field', });
lyr_PlacesPOIs_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});