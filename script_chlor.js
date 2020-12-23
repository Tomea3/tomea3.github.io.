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
    layers: 'webovka:Brno_dam_chlorofyl',
    format: 'image/png',
    transparent: true
});

const J18CH = L.tileLayer.wms(BRNO_DAM_URL, {
    layers: 'webovka:Bd_j18ch',
    format: 'image/png',
    transparent: true

});

const L181CH = L.tileLayer.wms(BRNO_DAM_URL, {
    layers: 'webovka:Bd_l181ch',
    format: 'image/png',
    transparent: true

});

const L182CH = L.tileLayer.wms(BRNO_DAM_URL, {
    layers: 'webovka:Bd_l182ch',
    format: 'image/png',
    transparent: true

});

const P18CH = L.tileLayer.wms(BRNO_DAM_URL, {
    layers: 'webovka:Bd_p18ch',
    format: 'image/png',
    transparent: true

});

const J19CH = L.tileLayer.wms(BRNO_DAM_URL, {
    layers: 'webovka:Bd_j19ch',
    format: 'image/png',
    transparent: true

});

const L191CH = L.tileLayer.wms(BRNO_DAM_URL, {
    layers: 'webovka:Bd_l191ch',
    format: 'image/png',
    transparent: true

});

const L192CH = L.tileLayer.wms(BRNO_DAM_URL, {
    layers: 'webovka:Bd_l192ch',
    format: 'image/png',
    transparent: true

});

const P19CH = L.tileLayer.wms(BRNO_DAM_URL, {
    layers: 'webovka:Bd_p19ch',
    format: 'image/png',
    transparent: true

});

const overlays = {
    'Duben 2018': J18CH,
    'Červenec 2018': L181CH,
    'Srpen 2018': L182CH,
    'Říjen 2018': P18CH,
    'Duben 2019': J19CH,
    'Červenec 2019': L191CH,
    'Srpen 2019': L192CH,
    'Říjen 2019': P19CH,

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
  div.innerHTML += "<h4>Množství chlorofylu-a ve vodě [μg/l]</h4>";
  div.innerHTML += '<i style="background: #2b83ba"></i><span>< 2,5</span><br>';
  div.innerHTML += '<i style="background: #abdda4"></i><span>2,5 - 10</span><br>';
  div.innerHTML += '<i style="background: #ffffbf"></i><span>10 - 30</span><br>';
  div.innerHTML += '<i style="background: #fdae61"></i><span>30 - 110</span><br>';
  div.innerHTML += '<i style="background: #d7191c"></i><span>< 110</span><br>';
  

  return div;
};

legend.addTo(MAP);