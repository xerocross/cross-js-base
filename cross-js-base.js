!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("crossJsBase",[],t):"object"==typeof exports?exports.crossJsBase=t():e.crossJsBase=t()}(self,(()=>(()=>{"use strict";var e={d:(t,o)=>{for(var r in o)e.o(o,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:o[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{LocalStorageWrapper:()=>c,StoreLocal:()=>o,StringHash:()=>r});const o={build:function(e){const t={};let o=[];const r=function(){try{const t=JSON.parse(localStorage.getItem(e));if(Array.isArray(t))o=t;else if(null==t);else if(!Array.isArray(t))throw new Error("")}catch(e){throw new Error("store-local: data not formatted correctly")}},n=function(t){return e+":"+t};return t.addItem=function(e,r){const c=n(e);localStorage.setItem(c,r),o.push(e),t.saveIndexToDisk()},t.getItem=function(e){const t=n(e);return localStorage.getItem(t)},t.getIndex=function(){return r(),o},t.getAll=function(){t.getIndex();const e=[];for(let r=0;r<o.length;r++)e.push(t.getItem(o[r]));return e},t.removeItem=function(e){const r=n(e);localStorage.removeItem(r);const c=o.indexOf(e);c>-1&&(o.splice(c,1),t.saveIndexToDisk())},t.saveIndexToDisk=function(){localStorage.setItem(e,JSON.stringify(o))},r(),t}},r={hash:function(e){let t,o,r=0;if("string"!=typeof e)throw new Error("StringHash: invalid input type");if(0===e.length)return r;for(t=0;t<e.length;t++)o=e.charCodeAt(t),r=(r<<5)-r+o,r|=0;return r}};function n(){const e="test";try{return localStorage.setItem(e,e),localStorage.removeItem(e),!0}catch(e){return!1}}const c={setItem:function(e,t){n()&&localStorage.setItem(e,t)},getItem:function(e){if(n())return localStorage.getItem(e)},removeItem:function(e){if(n())return localStorage.removeItem(e)}};return t})()));