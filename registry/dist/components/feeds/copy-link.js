!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["feeds/copy-link"]=t():e["feeds/copy-link"]=t()}(globalThis,(()=>(()=>{"use strict";var e,t,o={799:e=>{e.exports=coreApis.componentApis.feeds.api}},r={};function n(e){var t=r[e];if(void 0!==t)return t.exports;var i=r[e]={exports:{}};return o[e](i,i.exports,n),i.exports}t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,n.t=function(o,r){if(1&r&&(o=this(o)),8&r)return o;if("object"==typeof o&&o){if(4&r&&o.__esModule)return o;if(16&r&&"function"==typeof o.then)return o}var i=Object.create(null);n.r(i);var c={};e=e||[null,t({}),t([]),t(t)];for(var s=2&r&&o;"object"==typeof s&&!~e.indexOf(s);s=t(s))Object.getOwnPropertyNames(s).forEach((e=>c[e]=()=>o[e]));return c.default=()=>o,n.d(i,c),i},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var i={};return(()=>{n.d(i,{component:()=>e});const e={name:"copyFeedsLink",displayName:"复制动态链接",description:{"zh-CN":"开启后, 可在每条动态的菜单中选择复制链接."},entry:async()=>{const{forEachFeedsCard:e,addMenuItem:t}=await Promise.resolve().then(n.t.bind(n,799,23));e({added:e=>{t(e,{className:"copy-link",text:"复制链接",action:async()=>{await navigator.clipboard.writeText(`https://t.bilibili.com/${e.id}`)}})}})},urlInclude:coreApis.utils.urls.feedsUrls,tags:[componentsTags.feeds,componentsTags.utils],commitHash:"5b8d9acf1192b0722c73cc99094f808a3bad6993",coreVersion:"2.6.0"}})(),i=i.component})()));