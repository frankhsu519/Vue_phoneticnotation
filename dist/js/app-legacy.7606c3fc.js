(function(){"use strict";var n={4159:function(n,t,i){i(6992),i(8674),i(9601),i(7727);var e=i(144),o=function(){var n=this,t=n.$createElement,i=n._self._c||t;return i("v-app",[i("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[i("div",{staticClass:"d-flex align-center"},[i("v-img",{staticClass:"shrink mr-2",attrs:{alt:"Vuetify Logo",contain:"",src:"https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png",transition:"scale-transition",width:"40"}}),i("v-img",{staticClass:"shrink mt-1 hidden-sm-and-down",attrs:{alt:"Vuetify Name",contain:"","min-width":"100",src:"https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png",width:"100"}})],1),i("v-spacer"),i("v-btn",{attrs:{href:"https://github.com/vuetifyjs/vuetify/releases/latest",target:"_blank",text:""}},[i("span",{staticClass:"mr-2"},[n._v("Latest Release")]),i("v-icon",[n._v("mdi-open-in-new")])],1)],1),i("v-main",[i("PhoneticNotation")],1)],1)},a=[],u=function(){var n=this,t=n.$createElement,i=n._self._c||t;return i("v-container",[i("v-row",{staticClass:"justify-center text-center mb-5"},n._l(n.type,(function(t){return i("v-btn",{key:t.name,staticClass:" my-3 mx-2 ",class:{"blue-grey darken-1":!t.clicked,"green darken-1":t.clicked},on:{click:function(i){return n.fileter(t)}}},[n._v(" "+n._s(t.name)+" ")])})),1),i("v-row",{staticClass:"justify-center text-center"},[i("div",{staticClass:"d-flex flex-wrap justify-start",staticStyle:{width:"95%"}},n._l(n.filter_result,(function(t,e){return i("v-btn",{key:e,staticClass:"box my-3 mx-2 text-lowercase",attrs:{color:"info"},on:{click:function(i){return n.audio(t)}}},[n._v(" "+n._s(t.name)),i("br"),n._v(" "+n._s(t.pinyin)+" ")])})),1)])],1)},p=[],d=i(8932),r=(i(8309),i(4916),i(7601),i(7327),i(1539),{name:"HelloWorld",components:{},data:function(){return{type:[{name:"All",clicked:!1},{name:"Consonant",clicked:!1},{name:"HeadVowel",clicked:!1},{name:"Vowel",clicked:!1}],test:[{id:0,name:"ㄅ",pinyin:"[b]",audio:"http://127.0.0.1/audio/ㄅ.WAV",type:"Consonant"},{id:1,name:"ㄆ",pinyin:"[p]",audio:"http://127.0.0.1/audio/ㄆ.WAV",type:"Consonant"},{id:2,name:"ㄇ",pinyin:"[m]",audio:"http://127.0.0.1/audio/ㄇ.WAV",type:"Consonant"},{id:3,name:"ㄈ",pinyin:"[f]",audio:"http://127.0.0.1/audio/ㄈ.WAV",type:"Consonant"},{id:4,name:"ㄉ",pinyin:"[d]",audio:"http://127.0.0.1/audio/ㄉ.WAV",type:"Consonant"},{id:5,name:"ㄊ",pinyin:"[t]",audio:"http://127.0.0.1/audio/ㄊ.WAV",type:"Consonant"},{id:6,name:"ㄋ",pinyin:"[n]",audio:"http://127.0.0.1/audio/ㄋ.WAV",type:"Consonant"},{id:7,name:"ㄌ",pinyin:"[l]",audio:"http://127.0.0.1/audio/ㄌ.WAV",type:"Consonant"},{id:8,name:"ㄍ",pinyin:"[g]",audio:"http://127.0.0.1/audio/ㄍ.WAV",type:"Consonant"},{id:9,name:"ㄎ",pinyin:"[k]",audio:"http://127.0.0.1/audio/ㄎ.WAV",type:"Consonant"},{id:10,name:"ㄏ",pinyin:"[h]",audio:"http://127.0.0.1/audio/ㄏ.WAV",type:"Consonant"},{id:11,name:"ㄐ",pinyin:"[j]",audio:"http://127.0.0.1/audio/ㄐ.WAV",type:"Consonant"},{id:12,name:"ㄑ",pinyin:"[q]",audio:"http://127.0.0.1/audio/ㄑ.WAV",type:"Consonant"},{id:13,name:"ㄒ",pinyin:"[x]",audio:"http://127.0.0.1/audio/ㄒ.WAV",type:"Consonant"},{id:14,name:"ㄓ",pinyin:"[zh]",audio:"http://127.0.0.1/audio/ㄓ.WAV",type:"Consonant"},{id:15,name:"ㄔ",pinyin:"[ch]",audio:"http://127.0.0.1/audio/ㄔ.WAV",type:"Consonant"},{id:16,name:"ㄕ",pinyin:"[sh]",audio:"http://127.0.0.1/audio/ㄕ.WAV",type:"Consonant"},{id:17,name:"ㄖ",pinyin:"[r]",audio:"http://127.0.0.1/audio/ㄖ.WAV",type:"Consonant"},{id:18,name:"ㄗ",pinyin:"[z]",audio:"http://127.0.0.1/audio/ㄗ.WAV",type:"Consonant"},{id:19,name:"ㄘ",pinyin:"[c]",audio:"http://127.0.0.1/audio/ㄘ.WAV",type:"Consonant"},{id:20,name:"ㄙ",pinyin:"[s]",audio:"http://127.0.0.1/audio/ㄙ.WAV",type:"Consonant"},{id:21,name:"一",pinyin:"[i]",audio:"http://127.0.0.1/audio/ㄧ.WAV",type:"HeadVowel"},{id:22,name:"ㄨ",pinyin:"[wu]",audio:"http://127.0.0.1/audio/ㄨ.WAV",type:"HeadVowel"},{id:23,name:"ㄩ",pinyin:"[yu]",audio:"http://127.0.0.1/audio/ㄩ.WAV",type:"HeadVowel"},{id:24,name:"ㄚ",pinyin:"[a]",audio:"http://127.0.0.1/audio/ㄚ.WAV",type:"Vowel"},{id:25,name:"ㄛ",pinyin:"[o]",audio:"http://127.0.0.1/audio/ㄛ.WAV",type:"Vowel"},{id:26,name:"ㄜ",pinyin:"[e]",audio:"http://127.0.0.1/audio/ㄜ.WAV",type:"Vowel"},{id:27,name:"ㄝ",pinyin:"[ê]",audio:"http://127.0.0.1/audio/ㄝ.WAV",type:"Vowel"},{id:28,name:"ㄞ",pinyin:"[ai]",audio:"http://127.0.0.1/audio/ㄞ.WAV",type:"Vowel"},{id:29,name:"ㄟ",pinyin:"[ei]",audio:"http://127.0.0.1/audio/ㄟ.WAV",type:"Vowel"},{id:30,name:"ㄠ",pinyin:"[ao]",audio:"http://127.0.0.1/audio/ㄠ.WAV",type:"Vowel"},{id:31,name:"ㄡ",pinyin:"[ou]",audio:"http://127.0.0.1/audio/ㄡ.WAV",type:"Vowel"},{id:32,name:"ㄢ",pinyin:"[an]",audio:"http://127.0.0.1/audio/ㄢ.WAV",type:"Vowel"},{id:33,name:"ㄣ",pinyin:"[en]",audio:"http://127.0.0.1/audio/ㄣ.WAV",type:"Vowel"},{id:34,name:"ㄤ",pinyin:"[ang]",audio:"http://127.0.0.1/audio/ㄤ.WAV",type:"Vowel"},{id:35,name:"ㄥ",pinyin:"[eng]",audio:"http://127.0.0.1/audio/ㄥ.WAV",type:"Vowel"},{id:36,name:"ㄦ",pinyin:"[er]",audio:"http://127.0.0.1/audio/ㄦ.WAV",type:"Vowel"}],filter_result:[],selectType:"All"}},methods:{audio:function(n){var t=new Audio(n.audio);t.play()},fileter:function(n){var t=this;this.changeColor(n),this.selectType=n.name,"All"==this.selectType?this.filter_result=(0,d.Z)(this.test):this.filter_result=this.test.filter((function(n){return n.type==t.selectType}))},changeColor:function(n){for(var t=0;t<this.type.length;t++)this.type[t].clicked=!1;n.clicked=!0}},mounted:function(){this.fileter(this.type[0])}}),s=r,l=i(1001),c=i(3453),y=i.n(c),f=i(3513),h=i(9846),m=i(2877),V=(0,l.Z)(s,u,p,!1,null,null,null),v=V.exports;y()(V,{VBtn:f.Z,VContainer:h.Z,VRow:m.Z});var A={name:"App",components:{PhoneticNotation:v},data:function(){return{}}},w=A,W=i(7524),C=i(3583),g=i(6428),b=i(7047),k=i(7877),_=i(9762),Z=(0,l.Z)(w,o,a,!1,null,null,null),x=Z.exports;y()(Z,{VApp:W.Z,VAppBar:C.Z,VBtn:f.Z,VIcon:g.Z,VImg:b.Z,VMain:k.Z,VSpacer:_.Z});var j=i(5591);e.Z.use(j.Z);var O=new j.Z({});e.Z.config.productionTip=!1,new e.Z({vuetify:O,render:function(n){return n(x)}}).$mount("#app")}},t={};function i(e){var o=t[e];if(void 0!==o)return o.exports;var a=t[e]={exports:{}};return n[e](a,a.exports,i),a.exports}i.m=n,function(){var n=[];i.O=function(t,e,o,a){if(!e){var u=1/0;for(s=0;s<n.length;s++){e=n[s][0],o=n[s][1],a=n[s][2];for(var p=!0,d=0;d<e.length;d++)(!1&a||u>=a)&&Object.keys(i.O).every((function(n){return i.O[n](e[d])}))?e.splice(d--,1):(p=!1,a<u&&(u=a));if(p){n.splice(s--,1);var r=o();void 0!==r&&(t=r)}}return t}a=a||0;for(var s=n.length;s>0&&n[s-1][2]>a;s--)n[s]=n[s-1];n[s]=[e,o,a]}}(),function(){i.n=function(n){var t=n&&n.__esModule?function(){return n["default"]}:function(){return n};return i.d(t,{a:t}),t}}(),function(){i.d=function(n,t){for(var e in t)i.o(t,e)&&!i.o(n,e)&&Object.defineProperty(n,e,{enumerable:!0,get:t[e]})}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){i.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)}}(),function(){i.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})}}(),function(){var n={143:0};i.O.j=function(t){return 0===n[t]};var t=function(t,e){var o,a,u=e[0],p=e[1],d=e[2],r=0;if(u.some((function(t){return 0!==n[t]}))){for(o in p)i.o(p,o)&&(i.m[o]=p[o]);if(d)var s=d(i)}for(t&&t(e);r<u.length;r++)a=u[r],i.o(n,a)&&n[a]&&n[a][0](),n[a]=0;return i.O(s)},e=self["webpackChunkspin_namin"]=self["webpackChunkspin_namin"]||[];e.forEach(t.bind(null,0)),e.push=t.bind(null,e.push.bind(e))}();var e=i.O(void 0,[998],(function(){return i(4159)}));e=i.O(e)})();
//# sourceMappingURL=app-legacy.7606c3fc.js.map