!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("crossJsBase",[],t):"object"==typeof exports?exports.crossJsBase=t():e.crossJsBase=t()}(self,(()=>(()=>{"use strict";var e={d:(t,r)=>{for(var o in r)e.o(r,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:r[o]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{StoreLocal:()=>r,StringHash:()=>o});const r={build:function(e){let t={},r=[],o=function(){try{let t=JSON.parse(localStorage.getItem(e));if(Array.isArray(t))r=t;else if(null==t);else if(!Array.isArray(t))throw new Error("")}catch(e){throw new Error("store-local: data not formatted correctly")}},n=function(t){return e+":"+t};return t.addItem=function(e,o){let l=n(e);localStorage.setItem(l,o),r.push(e),t.saveIndexToDisk()},t.getItem=function(e){let t=n(e);return localStorage.getItem(t)},t.getIndex=function(){return o(),r},t.getAll=function(){t.getIndex();let e=[];for(let o=0;o<r.length;o++)e.push(t.getItem(r[o]));return e},t.removeItem=function(e){let o=n(e);localStorage.removeItem(o);let l=r.indexOf(e);l>-1&&(r.splice(l,1),t.saveIndexToDisk())},t.saveIndexToDisk=function(){localStorage.setItem(e,JSON.stringify(r))},o(),t}},o={hash:function(e){var t,r=0;if("string"!=typeof e)throw new Error("StringHash: invalid input type");if(0===e.length)return r;for(t=0;t<e.length;t++)r=(r<<5)-r+e.charCodeAt(t),r|=0;return r}};return t})()));