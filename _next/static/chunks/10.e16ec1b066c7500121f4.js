(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[10],{"4YdT":function(e,t,r){"use strict";r.r(t);var n=r("q1tI"),o=r.n(n),s=r("vRNQ"),a=r.n(s),p=r("4ZJM"),c=r.n(p),i=function(){return(i=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},u={style:"mapbox://styles/mapbox/streets-v11",center:[0,0],zoom:0};var l=o.a.createElement,f={version:8,sources:{osm:{type:"raster",tiles:["https://a.tile.openstreetmap.org/{z}/{x}/{y}.png","https://b.tile.openstreetmap.org/{z}/{x}/{y}.png","https://c.tile.openstreetmap.org/{z}/{x}/{y}.png"],tileSize:256}},layers:[{id:"osm",source:"osm",type:"raster"}]};t.default=function(e){var t,r,o,s=e.setMapAPI,p=Object(n.useRef)();return t=p,r={center:[55,60],zoom:4,style:f},o=s,Object(n.useEffect)((function(){var e=t.current;if(e){var n=null!=r?r:{},s=i(i(i({},u),n),{container:e}),a=new c.a.Map(s);return a.once("load",(function(){return o&&o(a)})),function(){a.remove()}}}),[]),l("div",{className:a.a.mapboxmap,ref:p,style:{}})}}}]);