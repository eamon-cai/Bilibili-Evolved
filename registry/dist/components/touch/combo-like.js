!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["touch/combo-like"]=t():e["touch/combo-like"]=t()}(globalThis,(()=>(()=>{"use strict";var e,t,o={200:e=>{e.exports=coreApis.spinQuery}},n={};function r(e){var t=n[e];if(void 0!==t)return t.exports;var i=n[e]={exports:{}};return o[e](i,i.exports,r),i.exports}t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,r.t=function(o,n){if(1&n&&(o=this(o)),8&n)return o;if("object"==typeof o&&o){if(4&n&&o.__esModule)return o;if(16&n&&"function"==typeof o.then)return o}var i=Object.create(null);r.r(i);var c={};e=e||[null,t({}),t([]),t(t)];for(var s=2&n&&o;"object"==typeof s&&!~e.indexOf(s);s=t(s))Object.getOwnPropertyNames(s).forEach((e=>c[e]=()=>o[e]));return c.default=()=>o,r.d(i,c),i},r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var i={};return(()=>{r.d(i,{component:()=>o});const e=coreApis.componentApis.define,t=coreApis.utils.urls,o=(0,e.defineComponentMetadata)({name:"touchComboLike",displayName:"三连触摸支持",tags:[componentsTags.touch],enabledByDefault:navigator.maxTouchPoints>0,entry:async()=>{const{select:e}=await Promise.resolve().then(r.t.bind(r,200,23)),t=await e(":is(.ops, .video-toolbar-v1) span.like");if(!t)return;t.style.userSelect="none";const o=(e,o)=>{const n=new CustomEvent(e,o);t.dispatchEvent(n)};let n=!0;t.addEventListener("touchstart",(e=>{e.preventDefault(),n=!0,setTimeout((()=>n=!1),200),o("mousedown",e)})),t.addEventListener("touchend",(e=>{e.preventDefault(),o("mouseup",e),n&&o("click",e)}))},description:{"zh-CN":"为视频页面中的三连操作 (长按点赞) 启用触摸支持."},urlInclude:t.videoUrls,commitHash:"5b8d9acf1192b0722c73cc99094f808a3bad6993",coreVersion:"2.6.0"})})(),i=i.component})()));