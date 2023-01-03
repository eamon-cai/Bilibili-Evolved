!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["feeds/extend-live"]=t():e["feeds/extend-live"]=t()}(globalThis,(()=>(()=>{var e,t,i={387:(e,t,i)=>{var n=i(355)((function(e){return e[1]}));n.push([e.id,".live-up-list {\n  max-height: calc(100vh - 315px);\n}\nbody.enable-feeds-filter .live-up-list {\n  max-height: calc(100vh - 370px);\n}\nbody.feeds-filter-side-block-profile .live-up-list {\n  max-height: calc(100vh - 180px);\n}\n\n.bili-dyn-live-users {\n  display: flex !important;\n  flex-direction: column !important;\n}\n\n.bili-dyn-live-users__body {\n  overflow: auto;\n  scrollbar-width: none !important;\n  overscroll-behavior: contain;\n  margin: 0px -16px -16px -16px;\n  padding: 0px 16px 4px 16px;\n  max-height: calc(100vh - 318px);\n}\n.bili-dyn-live-users__body::-webkit-scrollbar {\n  height: 0 !important;\n  width: 0 !important;\n}\nbody.enable-feeds-filter .bili-dyn-live-users__body {\n  max-height: calc(100vh - 374px);\n}\nbody.feeds-filter-side-block-profile .bili-dyn-live-users__body {\n  max-height: calc(100vh - 178px);\n}\n\n.live-up-list {\n  overflow: auto;\n  scrollbar-width: none !important;\n  overscroll-behavior: contain;\n}\n.live-up-list::-webkit-scrollbar {\n  height: 0 !important;\n  width: 0 !important;\n}\n.live-up-list .live-detail[data-live-title] {\n  color: black;\n}\nbody.dark .live-up-list .live-detail[data-live-title] {\n  color: #eee;\n}\n.live-up-list .live-detail[data-live-title] .up-name {\n  font-size: 13px !important;\n  opacity: 0.6;\n}\n.live-up-list .live-detail[data-live-title]::before {\n  content: attr(data-live-title);\n  color: black;\n  line-height: 1.5;\n  display: block;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\nbody.dark .live-up-list .live-detail[data-live-title]::before {\n  color: #eee;\n}",""]),e.exports=n},355:e=>{"use strict";
// eslint-disable-next-line func-names
e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var i=e(t);return t[2]?"@media ".concat(t[2]," {").concat(i,"}"):i})).join("")},
// eslint-disable-next-line func-names
t.i=function(e,i,n){"string"==typeof e&&(
// eslint-disable-next-line no-param-reassign
e=[[null,e,""]]);var o={};if(n)for(var l=0;l<this.length;l++){
// eslint-disable-next-line prefer-destructuring
var r=this[l][0];null!=r&&(o[r]=!0)}for(var a=0;a<e.length;a++){var s=[].concat(e[a]);n&&o[s[0]]||(i&&(s[2]?s[2]="".concat(i," and ").concat(s[2]):s[2]=i),t.push(s))}},t}},361:(e,t,i)=>{var n=i(387);n&&n.__esModule&&(n=n.default),e.exports="string"==typeof n?n:n.toString()},375:e=>{"use strict";e.exports=coreApis.ajax},567:e=>{"use strict";e.exports=coreApis.componentApis.feeds.disableProfilePopup},200:e=>{"use strict";e.exports=coreApis.spinQuery}},n={};function o(e){var t=n[e];if(void 0!==t)return t.exports;var l=n[e]={id:e,exports:{}};return i[e](l,l.exports,o),l.exports}t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,o.t=function(i,n){if(1&n&&(i=this(i)),8&n)return i;if("object"==typeof i&&i){if(4&n&&i.__esModule)return i;if(16&n&&"function"==typeof i.then)return i}var l=Object.create(null);o.r(l);var r={};e=e||[null,t({}),t([]),t(t)];for(var a=2&n&&i;"object"==typeof a&&!~e.indexOf(a);a=t(a))Object.getOwnPropertyNames(a).forEach((e=>r[e]=()=>i[e]));return r.default=()=>i,o.d(l,r),l},o.d=(e,t)=>{for(var i in t)o.o(t,i)&&!o.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var l={};return(()=>{"use strict";o.d(l,{component:()=>e});const e={name:"extendFeedsLive",displayName:"直播信息扩充",description:{"zh-CN":"在动态的`正在直播`中, 为每一个直播间加上标题, 并且能够显示超过10个的直播间."},entry:(0,coreApis.componentApis.styledComponent.styledComponentEntry)((()=>Promise.resolve().then(o.t.bind(o,361,23))),(async()=>{const{select:e}=await Promise.resolve().then(o.t.bind(o,200,23)),t=await e(".live-up-list, .bili-dyn-live-users__body");if(null===t)return;const{getPages:i,getJsonWithCredentials:n}=await Promise.resolve().then(o.t.bind(o,375,23)),l=await i({api:e=>n(`https://api.live.bilibili.com/relation/v1/feed/feed_list?page=${e}&pagesize=24`),getList:e=>lodash.get(e,"data.list",[]),getTotal:e=>lodash.get(e,"data.results",0)}),r=".up-name, .bili-dyn-live-users__item__uname",a=dqa(t,r).map((e=>e.innerText.trim())),s=l.filter((e=>a.includes(e.uname))),d=l.filter((e=>!a.includes(e.uname))),c=t.children[0];d.forEach((e=>{if(dqa(t,r).some((t=>t.innerText.trim()===e.uname)))return;const i=(()=>{const t=c.cloneNode(!0),i=`https://live.bilibili.com/${e.roomid}`;dqa(t,"a[href]").forEach((e=>e.setAttribute("href",i))),t.matches(".bili-dyn-live-users__item")&&t.addEventListener("click",(()=>{window.open(i,"_blank")}));dq(t,".live-up-img, .bili-dyn-live-users__item__face .bili-awesome-img").style.backgroundImage=`url(${e.face})`;const n=dq(t,".live-name, .bili-dyn-live-users__item__title");n.innerHTML=e.title,n.title=e.title;const o=dq(t,r);return o.innerHTML=e.uname,o.title=e.uname,t})();t.insertAdjacentElement("beforeend",i)}));const{disableProfilePopup:p}=await Promise.resolve().then(o.t.bind(o,567,23));p(),console.log(s,d)})),tags:[componentsTags.feeds,componentsTags.live],urlInclude:[/^https:\/\/t\.bilibili\.com\/$/],commitHash:"5b8d9acf1192b0722c73cc99094f808a3bad6993",coreVersion:"2.6.0"}})(),l=l.component})()));