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
    layers: 'webovka:Brno_dam_pruhlednost',
    format: 'image/png',
    transparent: true
});

const J18P = L.tileLayer.wms(BRNO_DAM_URL, {
    layers: 'webovka:Bd_j18p',
    format: 'image/png',
    transparent: true

});

const L181P = L.tileLayer.wms(BRNO_DAM_URL, {
    layers: 'webovka:Bd_l181p',
    format: 'image/png',
    transparent: true

});

const L182P = L.tileLayer.wms(BRNO_DAM_URL, {
    layers: 'webovka:Bd_l182p',
    format: 'image/png',
    transparent: true

});

const P18P = L.tileLayer.wms(BRNO_DAM_URL, {
    layers: 'webovka:Bd_p18p',
    format: 'image/png',
    transparent: true

});

const J19P = L.tileLayer.wms(BRNO_DAM_URL, {
    layers: 'webovka:Bd_j19p',
    format: 'image/png',
    transparent: true

});

const L191P = L.tileLayer.wms(BRNO_DAM_URL, {
    layers: 'webovka:Bd_l191p',
    format: 'image/png',
    transparent: true

});

const L192P = L.tileLayer.wms(BRNO_DAM_URL, {
    layers: 'webovka:Bd_l192p',
    format: 'image/png',
    transparent: true

});

const P19P = L.tileLayer.wms(BRNO_DAM_URL, {
    layers: 'webovka:Bd_p19p',
    format: 'image/png',
    transparent: true

});

const overlays = {
    'Duben 2018': J18P,
    'Červenec 2018': L181P,
    'Srpen 2018': L182P,
    'Říjen 2018': P18P,
    'Duben 2019': J19P,
    'Červenec 2019': L191P,
    'Srpen 2019': L192P,
    'Říjen 2019': P19P,

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
  div.innerHTML += "<h4>Průhlednost vody [m]</h4>";
  div.innerHTML += '<i style="background: #d7191c"></i><span>< 0,5</span><br>';
  div.innerHTML += '<i style="background: #fdae61"></i><span>0,5 - 1</span><br>';
  div.innerHTML += '<i style="background: #ffffc0"></i><span>1 - 1,5</span><br>';
  div.innerHTML += '<i style="background: #a6d96a"></i><span>1,5 - 2</span><br>';
  div.innerHTML += '<i style="background: #1a9641"></i><span>< 2</span><br>';
  

  return div;
};

legend.addTo(MAP);
