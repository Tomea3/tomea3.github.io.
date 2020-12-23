"use strict";

const MAP = L.map('map', {
    minZoom: 10
}).setView([49.2473119, 16.4908419], 13);

const URL_OSM = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";

const OSM = L.tileLayer(URL_OSM, {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'
});


const BRNO_DAM_URL = "https://zelda.sci.muni.cz/geoserver/wms"
const DAM_POLYGON = L.tileLayer.wms(BRNO_DAM_URL, {
    layers: 'webovka:Brn_preh_polygon',
    format: 'image/png',
    transparent: true
});

const DAM_POINTS = L.tileLayer.wms(BRNO_DAM_URL, {
    layers: 'webovka:Brno_dam_teplota',
    format: 'image/png',
    transparent: true
});

const J18T = L.tileLayer.wms(BRNO_DAM_URL, {
    layers: 'webovka:Bd_j18t',
    format: 'image/png',
    transparent: true

});

const L181T = L.tileLayer.wms(BRNO_DAM_URL, {
    layers: 'webovka:Bd_l181t',
    format: 'image/png',
    transparent: true,
    attribution: "Test"

});

const L182T = L.tileLayer.wms(BRNO_DAM_URL, {
    layers: 'webovka:Bd_l182t',
    format: 'image/png',
    transparent: true

});

const P18T = L.tileLayer.wms(BRNO_DAM_URL, {
    layers: 'webovka:Bd_p18t',
    format: 'image/png',
    transparent: true

});

const J19T = L.tileLayer.wms(BRNO_DAM_URL, {
    layers: 'webovka:Bd_j19t',
    format: 'image/png',
    transparent: true

});

const L191T = L.tileLayer.wms(BRNO_DAM_URL, {
    layers: 'webovka:Bd_l191t',
    format: 'image/png',
    transparent: true

});

const L192T = L.tileLayer.wms(BRNO_DAM_URL, {
    layers: 'webovka:Bd_l192t',
    format: 'image/png',
    transparent: true

});

const P19T = L.tileLayer.wms(BRNO_DAM_URL, {
    layers: 'webovka:Bd_p19t',
    format: 'image/png',
    transparent: true

});

const overlays = {
    'Duben 2018': J18T,
    'Červenec 2018': L181T,
    'Srpen 2018': L182T,
    'Říjen 2018': P18T,
    'Duben 2019': J19T,
    'Červenec 2019': L191T,
    'Srpen 2019': L192T,
    'Říjen 2019': P19T,

};

const body = {
    'Měřící stanice': DAM_POINTS
    
};

MAP.addControl(L.control.layers(overlays, body));


MAP.addLayer(OSM);
MAP.addLayer(DAM_POLYGON);

L.control.ruler().addTo(MAP);

var legend = L.control({ position: "bottomleft" });

legend.onAdd = function(map) {
  var div = L.DomUtil.create("div", "legend");
  div.innerHTML += "<h4>Teplota vody [°C]</h4>";
  div.innerHTML += '<i style="background: #2579ff"></i><span>< 5</span><br>';
  div.innerHTML += '<i style="background: #21bd82"></i><span>5 - 10</span><br>';
  div.innerHTML += '<i style="background: #46ec2c"></i><span>10 - 15</span><br>';
  div.innerHTML += '<i style="background: #b8f422"></i><span>15 - 20</span><br>';
  div.innerHTML += '<i style="background: #e9a324"></i><span>20 - 25</span><br>';
  div.innerHTML += '<i style="background: #fd2b2b"></i><span>> 25</span><br>';
  

  return div;
};

legend.addTo(MAP);


// legenda: https://zelda.sci.muni.cz/geoserver/wms?service=WMS&version=1.1.0&request=GetLegendGraphic&layer=webovka:Bd_j18t&format=image/png