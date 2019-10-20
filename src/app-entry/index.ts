import ZeldaMapEnglisthTranslation from "@/zelda-map/EnglishTranslation.vue";

const appendDom = document.createElement("div");
document.body.appendChild(appendDom);

const v2 = new ZeldaMapEnglisthTranslation({});
v2.$mount(appendDom);
if(document.location.hostname == "zeldamaps.com"){
  //initZeldaMap();
}