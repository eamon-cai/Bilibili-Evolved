!function(e,o){"object"==typeof exports&&"object"==typeof module?module.exports=o():"function"==typeof define&&define.amd?define([],o):"object"==typeof exports?exports["video/danmaku/expand"]=o():e["video/danmaku/expand"]=o()}(globalThis,(()=>(()=>{"use strict";var e={d:(o,t)=>{for(var a in t)e.o(t,a)&&!e.o(o,a)&&Object.defineProperty(o,a,{enumerable:!0,get:t[a]})},o:(e,o)=>Object.prototype.hasOwnProperty.call(e,o)},o={};e.d(o,{component:()=>l});const t=coreApis.componentApis.define,a=coreApis.observer,n=coreApis.spinQuery,i=coreApis.utils,s=coreApis.utils.log,r=coreApis.utils.urls,l=(0,t.defineComponentMetadata)({name:"expandDanmakuList",displayName:"展开弹幕列表",entry:async e=>{let{settings:{options:o}}=e;const t=(0,s.useScopedConsole)("展开弹幕列表");(0,a.videoChange)((async()=>{if(r.mediaListUrls.some((e=>(0,i.matchUrlPattern)(e)))&&o.ignoreMediaList)return;const e=await(async()=>{const e=((await(0,n.select)(".bilibili-player-video-info-danmaku-number, .bpx-player-video-info-dm"))?.textContent??"").match(/\d+/);if(!e)return null;const o=parseInt(e[0]);return Number.isNaN(o)?null:o})();if(t.log(`当前弹幕量: ${e}`),null!==e&&e>o.maxDanmakuCount)return void t.log(`超过了最大弹幕数量 ${o.maxDanmakuCount}, 跳过展开`);const a=await(0,n.select)(".bui-collapse-wrap");if(a&&a.classList.contains("bui-collapse-wrap-folded")){(await(0,n.select)(".bui-collapse-header"))?.click()}}))},tags:[componentsTags.video],description:{"zh-CN":"每次加载视频时自动展开弹幕列表, 如果弹幕装载量超过 `最大弹幕数量`, 则不展开以免对页面造成卡顿."},options:{ignoreMediaList:{defaultValue:!0,displayName:"合集类页面不自动展开"},maxDanmakuCount:{defaultValue:500,displayName:"最大弹幕数量"}},urlInclude:[...r.videoAndBangumiUrls,...r.mediaListUrls],commitHash:"5b8d9acf1192b0722c73cc99094f808a3bad6993",coreVersion:"2.6.0"});return o=o.component})()));