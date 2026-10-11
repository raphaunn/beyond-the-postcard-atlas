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
var format_unesco_areas_1 = new ol.format.GeoJSON();
var features_unesco_areas_1 = format_unesco_areas_1.readFeatures(json_unesco_areas_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_unesco_areas_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_unesco_areas_1.addFeatures(features_unesco_areas_1);
var lyr_unesco_areas_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_unesco_areas_1, 
                style: style_unesco_areas_1,
                popuplayertitle: 'unesco_areas',
                interactive: true,
    title: 'unesco_areas<br />\
    <img src="styles/legend/unesco_areas_1_0.png" /> A<br />\
    <img src="styles/legend/unesco_areas_1_1.png" /> B<br />\
    <img src="styles/legend/unesco_areas_1_2.png" /> <br />' });
var format_GeocodedNominatim_2 = new ol.format.GeoJSON();
var features_GeocodedNominatim_2 = format_GeocodedNominatim_2.readFeatures(json_GeocodedNominatim_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GeocodedNominatim_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GeocodedNominatim_2.addFeatures(features_GeocodedNominatim_2);
cluster_GeocodedNominatim_2 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_GeocodedNominatim_2
});
var lyr_GeocodedNominatim_2 = new ol.layer.Vector({
                declutter: false,
                source:cluster_GeocodedNominatim_2, 
                style: style_GeocodedNominatim_2,
                popuplayertitle: 'Geocoded (Nominatim)',
                interactive: true,
    title: 'Geocoded (Nominatim)<br />\
    <img src="styles/legend/GeocodedNominatim_2_0.png" /> Amsterdam<br />\
    <img src="styles/legend/GeocodedNominatim_2_1.png" /> Bern<br />\
    <img src="styles/legend/GeocodedNominatim_2_2.png" /> Bruges<br />\
    <img src="styles/legend/GeocodedNominatim_2_3.png" /> Brussels<br />\
    <img src="styles/legend/GeocodedNominatim_2_4.png" /> Luxembourg<br />\
    <img src="styles/legend/GeocodedNominatim_2_5.png" /> Nice<br />\
    <img src="styles/legend/GeocodedNominatim_2_6.png" /> Strasbourg<br />\
    <img src="styles/legend/GeocodedNominatim_2_7.png" /> <br />' });
var format_points_3 = new ol.format.GeoJSON();
var features_points_3 = format_points_3.readFeatures(json_points_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_points_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_points_3.addFeatures(features_points_3);
var lyr_points_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_points_3, 
                style: style_points_3,
                popuplayertitle: 'points',
                interactive: true,
                title: 'points'
            });
var group_capturas = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'capturas'});

lyr_WorldStreetMap_0.setVisible(true);lyr_unesco_areas_1.setVisible(true);lyr_GeocodedNominatim_2.setVisible(true);lyr_points_3.setVisible(true);
var layersList = [lyr_WorldStreetMap_0,lyr_unesco_areas_1,lyr_GeocodedNominatim_2,lyr_points_3];
lyr_unesco_areas_1.set('fieldAliases', {'id': 'id', 'area': 'area', 'Area/buffe': 'Area/buffe', });
lyr_GeocodedNominatim_2.set('fieldAliases', {'fid': 'fid', 'query': 'query', 'poi_id': 'poi_id', 'name': 'name', 'city_stop': 'city_stop', 'locality': 'locality', 'country': 'country', 'type': 'type', 'description': 'description', 'geocode_query': 'geocode_query', 'verification': 'verification', 'source_url': 'source_url', 'coordinates': 'coordinates', 'status': 'status', });
lyr_points_3.set('fieldAliases', {'fid': 'fid', 'X': 'X', 'Y': 'Y', 'City': 'City', 'World Heritage Site(s)': 'World Heritage Site(s)', });
lyr_unesco_areas_1.set('fieldImages', {'id': 'TextEdit', 'area': 'TextEdit', 'Area/buffe': 'TextEdit', });
lyr_GeocodedNominatim_2.set('fieldImages', {'fid': 'TextEdit', 'query': 'TextEdit', 'poi_id': 'TextEdit', 'name': 'TextEdit', 'city_stop': 'TextEdit', 'locality': 'TextEdit', 'country': 'TextEdit', 'type': 'TextEdit', 'description': 'TextEdit', 'geocode_query': 'TextEdit', 'verification': 'TextEdit', 'source_url': 'TextEdit', 'coordinates': 'TextEdit', 'status': 'TextEdit', });
lyr_points_3.set('fieldImages', {'fid': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'City': 'TextEdit', 'World Heritage Site(s)': 'TextEdit', });
lyr_unesco_areas_1.set('fieldLabels', {'id': 'no label', 'area': 'no label', 'Area/buffe': 'no label', });
lyr_GeocodedNominatim_2.set('fieldLabels', {'fid': 'no label', 'query': 'no label', 'poi_id': 'no label', 'name': 'no label', 'city_stop': 'no label', 'locality': 'no label', 'country': 'no label', 'type': 'no label', 'description': 'no label', 'geocode_query': 'no label', 'verification': 'no label', 'source_url': 'no label', 'coordinates': 'no label', 'status': 'no label', });
lyr_points_3.set('fieldLabels', {'fid': 'hidden field', 'X': 'hidden field', 'Y': 'header label - always visible', 'City': 'header label - visible with data', 'World Heritage Site(s)': 'header label - visible with data', });
lyr_points_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});