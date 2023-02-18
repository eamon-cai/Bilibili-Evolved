!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["utils/check-in-center"]=t():e["utils/check-in-center"]=t()}(globalThis,(()=>(()=>{"use strict";var e={560:(e,t,n)=>{n.r(t),n.d(t,{default:()=>u});var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"multiple-widgets"},e._l(e.items,(function(t){return n("DefaultWidget",{key:t.name,attrs:{disabled:t.disabled,"data-name":t.name,name:t.displayName,icon:t.icon},on:{click:function(n){return e.runItemAction(t,n)}}})})),1)};o._withStripped=!0;const i=coreApis.ui,s=coreApis.ajax,a=coreApis.toast;var r=n(605);const c=coreApis.pluginApis.data,d=[{name:"seeds-to-coins",displayName:"瓜子换硬币",icon:"mdi-seed-outline",action:async()=>{const e=await(0,s.postTextWithCredentials)("https://api.live.bilibili.com/xlive/revenue/v1/wallet/silver2coin",(0,r.formData)({csrf:(0,r.getCsrf)(),csrf_token:(0,r.getCsrf)()})),t=JSON.parse(e);0!==t.code?a.Toast.info(t.message,"瓜子换硬币",3e3):a.Toast.success(`${t.message}\n剩余银瓜子:${t.data.silver}`,"瓜子换硬币",3e3)}},{name:"live-check-in",displayName:"直播间签到",icon:"mdi-calendar-check",action:async()=>{const e=await(0,s.getJsonWithCredentials)("https://api.live.bilibili.com/xlive/web-ucenter/v1/sign/DoSign");if(0!==e.code)a.Toast.info(e.message,"直播间签到",3e3);else{const{text:t,specialText:n,allDays:o,hadSignDays:i}=e.data,s=`签到成功, 获得了${t} ${n}\n本月进度: ${i} / ${o}`;a.Toast.success(s,"直播间签到",3e3)}}}],[l]=(0,c.registerAndGetData)("checkInCenter.items",d);var p=function(e,t,n,o,i,s,a,r){var c,d="function"==typeof e?e.options:e;if(t&&(d.render=t,d.staticRenderFns=n,d._compiled=!0),o&&(d.functional=!0),s&&(d._scopeId="data-v-"+s),a?(c=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),i&&i.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(a)},d._ssrRegister=c):i&&(c=r?function(){i.call(this,(d.functional?this.parent:this).$root.$options.shadowRoot)}:i),c)if(d.functional){d._injectStyles=c;var l=d.render;d.render=function(e,t){return c.call(t),l(e,t)}}else{var p=d.beforeCreate;d.beforeCreate=p?[].concat(p,c):[c]}return{exports:e,options:d}}(Vue.extend({components:{DefaultWidget:i.DefaultWidget},data:()=>({items:l}),methods:{async runItemAction(e,t){try{this.$set(e,"disabled",!0);const n=this.$el.querySelector(`[data-name='${e.name}']`);await e.action(n,t)}finally{e.disabled=!1}}}}),o,[],!1,null,null,null);p.options.__file="registry/lib/components/utils/check-in-center/Widget.vue";const u=p.exports},605:e=>{e.exports=coreApis.utils}},t={};function n(o){var i=t[o];if(void 0!==i)return i.exports;var s=t[o]={exports:{}};return e[o](s,s.exports,n),s.exports}n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var o={};return(()=>{n.d(o,{component:()=>i});const e=coreApis.componentApis.define;var t=n(605);const i=(0,e.defineComponentMetadata)({name:"checkInCenter",displayName:"签到助手",description:{"zh-CN":"在功能面板中提供一些可以每日进行的操作."},tags:[componentsTags.utils],entry:none,widget:{component:()=>Promise.resolve().then(n.bind(n,560)).then((e=>e.default)),condition:()=>Boolean((0,t.getUID)())},commitHash:"f7bf8cda3da3548d98d41cc82514aba2fd17b0b4",coreVersion:"2.6.2"})})(),o=o.component})()));