!function(e,r){"object"==typeof exports&&"object"==typeof module?module.exports=r():"function"==typeof define&&define.amd?define([],r):"object"==typeof exports?exports["live/side-bar"]=r():e["live/side-bar"]=r()}(globalThis,(()=>(()=>{var e,r,t={632:(e,r,t)=>{var n=t(355)((function(e){return e[1]}));n.push([e.id,'.side-bar-cntr {\n  transition: 0.24s ease-out !important;\n  overflow: visible !important;\n  transform: translateZ(0) translateX(100%) !important;\n}\n.side-bar-cntr:hover {\n  transform: translateZ(0) !important;\n}\n.side-bar-cntr::after {\n  right: calc(100% + 4px);\n  transform: translateY(-50%) rotate(45deg);\n  width: 8px;\n  height: 8px;\n  border-radius: 2px;\n  box-sizing: border-box;\n  border: 4px solid #aaa;\n  border-top-color: transparent;\n  border-right-color: transparent;\n}\nbody.dark .side-bar-cntr::after {\n  border: 4px solid #eee;\n  border-top-color: transparent;\n  border-right-color: transparent;\n}\n.side-bar-cntr::before {\n  right: calc(100% - 8px);\n  transform: translateY(-50%);\n  width: 32px;\n  height: 48px;\n  border-radius: 8px 0 0 8px;\n  background-color: #fff;\n  border: 1px solid #e9eaec;\n}\nbody.dark .side-bar-cntr::before {\n  background-color: #222;\n  border-color: transparent;\n}\n.side-bar-cntr::before, .side-bar-cntr::after {\n  content: "";\n  transition: 0.24s ease-out;\n  cursor: pointer;\n  position: fixed;\n  top: 50%;\n}\n.side-bar-cntr:hover::after, .side-bar-cntr:hover::before {\n  opacity: 0;\n}',""]),e.exports=n},355:e=>{"use strict";
// eslint-disable-next-line func-names
e.exports=function(e){var r=[];return r.toString=function(){return this.map((function(r){var t=e(r);return r[2]?"@media ".concat(r[2]," {").concat(t,"}"):t})).join("")},
// eslint-disable-next-line func-names
r.i=function(e,t,n){"string"==typeof e&&(
// eslint-disable-next-line no-param-reassign
e=[[null,e,""]]);var o={};if(n)for(var a=0;a<this.length;a++){
// eslint-disable-next-line prefer-destructuring
var i=this[a][0];null!=i&&(o[i]=!0)}for(var s=0;s<e.length;s++){var c=[].concat(e[s]);n&&o[c[0]]||(t&&(c[2]?c[2]="".concat(t," and ").concat(c[2]):c[2]=t),r.push(c))}},r}},693:(e,r,t)=>{var n=t(632);n&&n.__esModule&&(n=n.default),e.exports="string"==typeof n?n:n.toString()}},n={};function o(e){var r=n[e];if(void 0!==r)return r.exports;var a=n[e]={id:e,exports:{}};return t[e](a,a.exports,o),a.exports}r=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,o.t=function(t,n){if(1&n&&(t=this(t)),8&n)return t;if("object"==typeof t&&t){if(4&n&&t.__esModule)return t;if(16&n&&"function"==typeof t.then)return t}var a=Object.create(null);o.r(a);var i={};e=e||[null,r({}),r([]),r(r)];for(var s=2&n&&t;"object"==typeof s&&!~e.indexOf(s);s=r(s))Object.getOwnPropertyNames(s).forEach((e=>i[e]=()=>t[e]));return i.default=()=>t,o.d(a,i),a},o.d=(e,r)=>{for(var t in r)o.o(r,t)&&!o.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},o.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var a={};return(()=>{"use strict";o.d(a,{component:()=>t});const e=coreApis.componentApis.define,r=coreApis.utils.urls,t=(0,e.defineComponentMetadata)({name:"collapseLiveSideBar",entry:none,instantStyles:[{name:"collapseLiveSideBar",style:()=>Promise.resolve().then(o.t.bind(o,693,23))}],displayName:"自动收起直播侧栏",description:'自动收起直播间右边偏下的侧栏. (上面有个 "关注" 的面板)',tags:[componentsTags.live,componentsTags.style],urlInclude:r.liveUrls,commitHash:"5b8d9acf1192b0722c73cc99094f808a3bad6993",coreVersion:"2.6.0"})})(),a=a.component})()));