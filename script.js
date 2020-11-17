"use strict";
document.addEventListener("DOMContentLoaded", function(){
const FORM = document.querySelector("form");
FORM.addEventListener("submit", function(event) {
    event.preventDefault();
    var rovA_st = document.getElementById("rovA_st").value;
    var rovA_m = document.getElementById("rovA_m").value;
    var polA_st = document.getElementById("polA_st").value;
    var polA_m = document.getElementById("polA_m").value;
    var rovB_st = document.getElementById("rovB_st").value;
    var rovB_m = document.getElementById("rovB_m").value;
    var polB_st = document.getElementById("polB_st").value;
    var polB_m = document.getElementById("polB_m").value;
    var rovA_s = document.getElementById("rovA_s").value;
    var polA_d = document.getElementById("polA_d").value;
    var rovB_s = document.getElementById("rovB_s").value;
    var polB_d = document.getElementById("polB_d").value;
    
// převody na čísla + minuty na des. čísla
    rovA_st = Number(rovA_st);
    rovA_m = (Number(rovA_m))/60;
    polA_st = Number(polA_st);
    polA_m = (Number(polA_m))/60;
    rovB_st = Number(rovB_st);
    rovB_m = (Number(rovB_m))/60;
    polB_st = Number(polB_st);
    polB_m = (Number(polB_m))/60;

//součet stupňů a minut
    rovA_st=rovA_st+rovA_m;
    rovB_st=rovB_st+rovB_m;
    polA_st=polA_st+polA_m;
    polB_st=polB_st+polB_m;

// podmínky na šířky/délky
    if(rovA_s == "jižní šířka"){
        rovA_st = -(rovA_st);
    }else{}
    if(polA_d == "západní délka"){
        polA_st = -(polA_st);
    }else{}
    if(rovB_s == "jižní šířka"){
        rovB_st = -(rovB_st);
    }else{}
    if(polB_d == "západní délka"){
        polB_st = -(polB_st);
    }else{}

// převod stupňů na radiány
    rovA_st = rovA_st * (Math.PI/180);
    polA_st = polA_st * (Math.PI/180);
    rovB_st = rovB_st * (Math.PI/180);
    polB_st = polB_st * (Math.PI/180);

//výpočty
    var r = 6371;
    var o = Math.acos(Math.sin(rovA_st) * Math.sin(rovB_st) + Math.cos(rovA_st) * Math.cos(rovB_st) * Math.cos(polB_st - polA_st));
    var d = o * r;

    document.getElementById("vysledek").value = d;


});

});
