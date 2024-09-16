(function(){"use strict";var n={1839:function(n,t,a){var r=a(5130),e=a(6768);const o={class:"container"};function u(n,t,a,r,u,s){const i=(0,e.g2)("ContentEntity");return(0,e.uX)(),(0,e.CE)("div",o,[((0,e.uX)(),(0,e.Wv)(e.tY,null,{default:(0,e.k6)((()=>[(0,e.bF)(i)])),_:1}))])}const s={class:"centered"};function i(n,t,a,r,o,u){const i=(0,e.g2)("ScreenshotImage"),c=(0,e.g2)("CalloutPanel"),l=(0,e.g2)("TagList");return(0,e.uX)(),(0,e.CE)(e.FK,null,[(0,e.Lk)("div",s,[(0,e.bF)(i,{image:r.randomData.image},null,8,["image"])]),(0,e.bF)(c,{title:r.randomData.title,content:r.randomData.text,translation:r.randomData.translation},null,8,["title","content","translation"]),t[0]||(t[0]=(0,e.Lk)("br",null,null,-1)),(0,e.bF)(l,{tags:r.randomData.tags},null,8,["tags"])],64)}var c=a(144),l=a(4232);const f={class:"callout-jp"},d={class:"callout-pt"};function v(n,t,a,r,o,u){return(0,e.uX)(),(0,e.CE)(e.FK,null,[(0,e.Lk)("div",f,[(0,e.Lk)("h6",null,(0,l.v_)(a.title),1),(0,e.Lk)("span",null,(0,l.v_)(a.content),1)]),(0,e.Lk)("div",d,[t[0]||(t[0]=(0,e.Lk)("h6",null,"Tradução",-1)),(0,e.Lk)("span",null,(0,l.v_)(a.translation),1)])],64)}var p={props:["title","content","translation","vocabulary"]},g=a(1241);const m=(0,g.A)(p,[["render",v],["__scopeId","data-v-9340d378"]]);var h=m;const b=["src"];function k(n,t,a,r,o,u){return(0,e.uX)(),(0,e.CE)("div",null,[(0,e.Lk)("img",{src:`https://japanesestudies.github.io/randomss_data/screenshots/${this.image}.png`,height:"400px"},null,8,b)])}var _={props:["image"]};const y=(0,g.A)(_,[["render",k]]);var C=y;function j(n,t,a,r,o,u){const s=(0,e.g2)("GrammarTag");return(0,e.uX)(!0),(0,e.CE)(e.FK,null,(0,e.pI)(a.tags,((n,t)=>((0,e.uX)(),(0,e.Wv)(s,{key:t,tag:n},null,8,["tag"])))),128)}function L(n,t,a,r,o,u){return(0,e.uX)(),(0,e.CE)("span",null,"#"+(0,l.v_)(a.tag),1)}var O={props:["tag"]};const w=(0,g.A)(O,[["render",L],["__scopeId","data-v-1f023f87"]]);var E=w,F={props:["tags"],components:{GrammarTag:E}};const X=(0,g.A)(F,[["render",j]]);var x=X;const I=(0,c.KR)();var T={components:{ScreenshotImage:C,CalloutPanel:h,TagList:x},async setup(){const n=await fetch("https://japanesestudies.github.io/randomss_data/data.json");I.value=await n.json();const t=parseInt(Math.random()*I.value.size),a=I.value.data[t];return{randomData:a}}};const A=(0,g.A)(T,[["render",i],["__scopeId","data-v-4fb3ce4c"]]);var D=A,K={components:{ContentEntity:D}};const P=(0,g.A)(K,[["render",u]]);var G=P;(0,r.Ef)(G).mount("#app")}},t={};function a(r){var e=t[r];if(void 0!==e)return e.exports;var o=t[r]={exports:{}};return n[r].call(o.exports,o,o.exports,a),o.exports}a.m=n,function(){var n=[];a.O=function(t,r,e,o){if(!r){var u=1/0;for(l=0;l<n.length;l++){r=n[l][0],e=n[l][1],o=n[l][2];for(var s=!0,i=0;i<r.length;i++)(!1&o||u>=o)&&Object.keys(a.O).every((function(n){return a.O[n](r[i])}))?r.splice(i--,1):(s=!1,o<u&&(u=o));if(s){n.splice(l--,1);var c=e();void 0!==c&&(t=c)}}return t}o=o||0;for(var l=n.length;l>0&&n[l-1][2]>o;l--)n[l]=n[l-1];n[l]=[r,e,o]}}(),function(){a.n=function(n){var t=n&&n.__esModule?function(){return n["default"]}:function(){return n};return a.d(t,{a:t}),t}}(),function(){a.d=function(n,t){for(var r in t)a.o(t,r)&&!a.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:t[r]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){a.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)}}(),function(){var n={524:0};a.O.j=function(t){return 0===n[t]};var t=function(t,r){var e,o,u=r[0],s=r[1],i=r[2],c=0;if(u.some((function(t){return 0!==n[t]}))){for(e in s)a.o(s,e)&&(a.m[e]=s[e]);if(i)var l=i(a)}for(t&&t(r);c<u.length;c++)o=u[c],a.o(n,o)&&n[o]&&n[o][0](),n[o]=0;return a.O(l)},r=self["webpackChunkrandomss"]=self["webpackChunkrandomss"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=a.O(void 0,[504],(function(){return a(1839)}));r=a.O(r)})();
//# sourceMappingURL=app.64d710ea.js.map