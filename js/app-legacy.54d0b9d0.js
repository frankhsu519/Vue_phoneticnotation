(function(){"use strict";var n={3090:function(n,t,i){i(6992),i(8674),i(9601),i(7727);var e=i(144),a=function(){var n=this,t=n.$createElement,i=n._self._c||t;return i("v-app",[i("v-main",[i("PhoneticNotation")],1)],1)},o=[],s=function(){var n=this,t=n.$createElement,i=n._self._c||t;return i("v-container",[i("v-row",{staticClass:"justify-center text-center mb-5"},[i("v-col",{attrs:{col:"12"}},n._l(n.type,(function(t){return i("v-btn",{key:t.name,staticClass:" my-3 mx-2 ",class:{"blue-grey darken-1":!t.clicked,"green darken-1":t.clicked},on:{click:function(i){return n.fileter(t)}}},[n._v(" "+n._s(t.name)+" ")])})),1)],1),i("v-row",{staticClass:"teal accent-3 justify-center align-center text-h1 show_block",staticStyle:{"min-height":"300px"}},["Free combination"!=n.selectType?i("div",[n._v(" "+n._s(n.screen_data)+" ")]):i("div",{staticStyle:{"max-width":"85%"}},[n._v(" "+n._s(n.spell_)),i("br"),i("div",{staticStyle:{display:"flex","flex-wrap":"wrap"}},n._l(n.pinyin_arr,(function(t,e){return i("div",{directives:[{name:"show",rawName:"v-show",value:0!=t.length,expression:"arr.length != 0"}],key:e},[n._v(" ["+n._s(t)+"]   ")])})),0)]),"Free combination"==n.selectType?i("div",{staticClass:"show_block_inside1"},[i("v-btn",{attrs:{color:"yellow"},on:{click:function(t){return n.spell_voice(n.spell_array)}}},[n._v(" voice ")])],1):n._e(),"Free combination"==n.selectType?i("div",{staticClass:"show_block_inside3"},[i("v-btn",{attrs:{color:"red"},on:{click:function(t){return n.clear()}}},[n._v(" clear ")])],1):n._e(),"Free combination"==n.selectType?i("div",{staticClass:"show_block_inside2"},[i("div",{staticClass:"d-inline-flex flex-column"},n._l(n.note,(function(t){return i("v-btn",{key:t.name,staticClass:"mb-3 voice_note",attrs:{color:"red"},on:{click:function(i){return n.add_notes(t)}}},[n._v(" "+n._s(t.name)+" ")])})),1)]):n._e()]),i("v-row",[i("v-col",{staticClass:"d-flex flex-wrap justify-start",attrs:{col:"12"}},n._l(n.filter_result,(function(t,e){return i("v-btn",{key:e,staticClass:"box my-3 mx-2 text-lowercase",attrs:{color:"info"},on:{click:function(i){return n.audio(t)}}},[n._v(" "+n._s(t.name)+" "),i("br"),n._v(" "+n._s(t.pinyin)+" ")])})),1)],1)],1)},r=[],u=i(8932),p=(i(4916),i(3123),i(8309),i(7601),i(7327),i(1539),{name:"HelloWorld",components:{},data:function(){return{type:[{name:"All",clicked:!1},{name:"Consonant",clicked:!1},{name:"HeadVowel",clicked:!1},{name:"Vowel",clicked:!1},{name:"Free combination",clicked:!1}],test:[{id:0,name:"ㄅ",pinyin:"[b]",pinyin_mark:"b",audio:"https://github.com/frankhsu519/Vue_phoneticnotation/raw/gh-pages/audio/%E3%84%85.WAV",type:"Consonant"},{id:1,name:"ㄆ",pinyin:"[p]",pinyin_mark:"p",audio:"https://github.com/frankhsu519/Vue_phoneticnotation/raw/gh-pages/audio/%E3%84%86.WAV",type:"Consonant"},{id:2,name:"ㄇ",pinyin:"[m]",pinyin_mark:"m",audio:"https://github.com/frankhsu519/Vue_phoneticnotation/raw/gh-pages/audio/%E3%84%87.WAV",type:"Consonant"},{id:3,name:"ㄈ",pinyin:"[f]",pinyin_mark:"f",audio:"https://github.com/frankhsu519/Vue_phoneticnotation/raw/gh-pages/audio/%E3%84%88.WAV",type:"Consonant"},{id:4,name:"ㄉ",pinyin:"[d]",pinyin_mark:"d",audio:"https://github.com/frankhsu519/Vue_phoneticnotation/raw/gh-pages/audio/%E3%84%89.WAV",type:"Consonant"},{id:5,name:"ㄊ",pinyin:"[t]",pinyin_mark:"t",audio:"https://github.com/frankhsu519/Vue_phoneticnotation/raw/gh-pages/audio/%E3%84%8A.WAV",type:"Consonant"},{id:6,name:"ㄋ",pinyin:"[n]",pinyin_mark:"n",audio:"https://github.com/frankhsu519/Vue_phoneticnotation/raw/gh-pages/audio/%E3%84%8B.WAV",type:"Consonant"},{id:7,name:"ㄌ",pinyin:"[l]",pinyin_mark:"l",audio:"https://github.com/frankhsu519/Vue_phoneticnotation/raw/gh-pages/audio/%E3%84%8C.WAV",type:"Consonant"},{id:8,name:"ㄍ",pinyin:"[g]",pinyin_mark:"g",audio:"https://github.com/frankhsu519/Vue_phoneticnotation/raw/gh-pages/audio/%E3%84%8D.WAV",type:"Consonant"},{id:9,name:"ㄎ",pinyin:"[k]",pinyin_mark:"k",audio:"https://github.com/frankhsu519/Vue_phoneticnotation/raw/gh-pages/audio/%E3%84%8E.WAV",type:"Consonant"},{id:10,name:"ㄏ",pinyin:"[h]",pinyin_mark:"h",audio:"https://github.com/frankhsu519/Vue_phoneticnotation/raw/gh-pages/audio/%E3%84%8F.WAV",type:"Consonant"},{id:11,name:"ㄐ",pinyin:"[j]",pinyin_mark:"j",audio:"https://github.com/frankhsu519/Vue_phoneticnotation/raw/gh-pages/audio/%E3%84%90.WAV",type:"Consonant"},{id:12,name:"ㄑ",pinyin:"[q]",pinyin_mark:"q",audio:"https://github.com/frankhsu519/Vue_phoneticnotation/raw/gh-pages/audio/%E3%84%91.WAV",type:"Consonant"},{id:13,name:"ㄒ",pinyin:"[x]",pinyin_mark:"x",audio:"https://github.com/frankhsu519/Vue_phoneticnotation/raw/gh-pages/audio/%E3%84%92.WAV",type:"Consonant"},{id:14,name:"ㄓ",pinyin:"[zh]",pinyin_mark:"zh",audio:"https://github.com/frankhsu519/Vue_phoneticnotation/raw/gh-pages/audio/%E3%84%93.WAV",type:"Consonant"},{id:15,name:"ㄔ",pinyin:"[ch]",pinyin_mark:"ch",audio:"https://github.com/frankhsu519/Vue_phoneticnotation/raw/gh-pages/audio/%E3%84%94.WAV",type:"Consonant"},{id:16,name:"ㄕ",pinyin:"[sh]",pinyin_mark:"sh",audio:"https://github.com/frankhsu519/Vue_phoneticnotation/raw/gh-pages/audio/%E3%84%95.WAV",type:"Consonant"},{id:17,name:"ㄖ",pinyin:"[r]",pinyin_mark:"r",audio:"https://github.com/frankhsu519/Vue_phoneticnotation/raw/gh-pages/audio/%E3%84%96.WAV",type:"Consonant"},{id:18,name:"ㄗ",pinyin:"[z]",pinyin_mark:"z",audio:"https://github.com/frankhsu519/Vue_phoneticnotation/raw/gh-pages/audio/%E3%84%97.WAV",type:"Consonant"},{id:19,name:"ㄘ",pinyin:"[c]",pinyin_mark:"c",audio:"https://github.com/frankhsu519/Vue_phoneticnotation/raw/gh-pages/audio/%E3%84%98.WAV",type:"Consonant"},{id:20,name:"ㄙ",pinyin:"[s]",pinyin_mark:"s",audio:"https://github.com/frankhsu519/Vue_phoneticnotation/raw/gh-pages/audio/%E3%84%99.WAV",type:"Consonant"},{id:21,name:"一",pinyin:"[i]",pinyin_mark:"i",audio:"https://github.com/frankhsu519/Vue_phoneticnotation/raw/gh-pages/audio/%E3%84%A7.WAV",type:"HeadVowel"},{id:22,name:"ㄨ",pinyin:"[wu]",pinyin_mark:"wu",audio:"https://github.com/frankhsu519/Vue_phoneticnotation/raw/gh-pages/audio/%E3%84%A8.WAV",type:"HeadVowel"},{id:23,name:"ㄩ",pinyin:"[yu]",pinyin_mark:"yu",audio:"https://github.com/frankhsu519/Vue_phoneticnotation/raw/gh-pages/audio/%E3%84%A9.WAV",type:"HeadVowel"},{id:24,name:"ㄚ",pinyin:"[a]",pinyin_mark:"a",audio:"https://github.com/frankhsu519/Vue_phoneticnotation/raw/gh-pages/audio/%E3%84%9A.WAV",type:"Vowel"},{id:25,name:"ㄛ",pinyin:"[o]",pinyin_mark:"o",audio:"https://github.com/frankhsu519/Vue_phoneticnotation/raw/gh-pages/audio/%E3%84%9B.WAV",type:"Vowel"},{id:26,name:"ㄜ",pinyin:"[e]",pinyin_mark:"e",audio:"https://github.com/frankhsu519/Vue_phoneticnotation/raw/gh-pages/audio/%E3%84%9C.WAV",type:"Vowel"},{id:27,name:"ㄝ",pinyin:"[ê]",pinyin_mark:"ê",audio:"https://github.com/frankhsu519/Vue_phoneticnotation/raw/gh-pages/audio/%E3%84%9D.WAV",type:"Vowel"},{id:28,name:"ㄞ",pinyin:"[ai]",pinyin_mark:"ai",audio:"https://github.com/frankhsu519/Vue_phoneticnotation/raw/gh-pages/audio/%E3%84%9E.WAV",type:"Vowel"},{id:29,name:"ㄟ",pinyin:"[ei]",pinyin_mark:"ei",audio:"https://github.com/frankhsu519/Vue_phoneticnotation/raw/gh-pages/audio/%E3%84%9F.WAV",type:"Vowel"},{id:30,name:"ㄠ",pinyin:"[ao]",pinyin_mark:"ao",audio:"https://github.com/frankhsu519/Vue_phoneticnotation/raw/gh-pages/audio/%E3%84%A0.WAV",type:"Vowel"},{id:31,name:"ㄡ",pinyin:"[ou]",pinyin_mark:"ou",audio:"https://github.com/frankhsu519/Vue_phoneticnotation/raw/gh-pages/audio/%E3%84%A1.WAV",type:"Vowel"},{id:32,name:"ㄢ",pinyin:"[an]",pinyin_mark:"an",audio:"https://github.com/frankhsu519/Vue_phoneticnotation/raw/gh-pages/audio/%E3%84%A2.WAV",type:"Vowel"},{id:33,name:"ㄣ",pinyin:"[en]",pinyin_mark:"en",audio:"https://github.com/frankhsu519/Vue_phoneticnotation/raw/gh-pages/audio/%E3%84%A3.WAV",type:"Vowel"},{id:34,name:"ㄤ",pinyin:"[ang]",pinyin_mark:"ang",audio:"https://github.com/frankhsu519/Vue_phoneticnotation/raw/gh-pages/audio/%E3%84%A4.WAV",type:"Vowel"},{id:35,name:"ㄥ",pinyin:"[eng]",pinyin_mark:"eng",audio:"https://github.com/frankhsu519/Vue_phoneticnotation/raw/gh-pages/audio/%E3%84%A5.WAV",type:"Vowel"},{id:36,name:"ㄦ",pinyin:"[er]",pinyin_mark:"er",audio:"https://github.com/frankhsu519/Vue_phoneticnotation/raw/gh-pages/audio/%E3%84%A6.WAV",type:"Vowel"}],note:[{name:".(0 sound)",mark:"˙"},{name:" (1 sound)",mark:" "},{name:"ˊ(2 sound)",mark:"ˊ"},{name:"ˇ(3 sound)",mark:"ˇ"},{name:"ˋ(4 sound)",mark:"ˋ"}],filter_result:[],selectType:"",screen_data:"",spell_:"",spell_pinyin:"",current_spell_:"",spell_array:[],current_array:[],pinyin_str:"",pinyin_arr:[]}},watch:{pinyin_str:function(){this.pinyin_arr=this.pinyin_str.split("=")}},methods:{audio:function(n){var t=new Audio(n.audio);t.play(),this.show_data(n)},fileter:function(n){var t=this;this.changeColor(n),this.selectType=n.name,"All"==this.selectType?this.filter_result=(0,u.Z)(this.test):"Free combination"==this.selectType?(alert("Free combination"),this.filter_result=(0,u.Z)(this.test)):this.filter_result=this.test.filter((function(n){return n.type==t.selectType}))},changeColor:function(n){for(var t=0;t<this.type.length;t++)this.type[t].clicked=!1;n.clicked=!0},show_data:function(n){"Free combination"!=this.selectType?this.screen_data=n.name:(this.spell_+=n.name,this.spell_pinyin+=n.pinyin,this.current_spell_+=n.name,this.pinyin_str+=n.pinyin_mark)},add_notes:function(n){this.spell_+=n.mark,this.current_spell_+=n.mark,this.current_array.push(this.current_spell_),this.pinyin_str+=n.mark,this.pinyin_str+="=",this.spell_voice(this.current_array),this.spell_array.push(this.current_spell_),this.current_spell_="",this.current_array=[]},spell_audio:function(n){var t=[],i=!1;t="1"==n.check?(0,u.Z)(this.api_data1):"2"==n.check?(0,u.Z)(this.api_data2):(0,u.Z)(this.api_data3);for(var e=0;e<t.length;e++)n.html_url==t[e].html_url&&(i=!0);if(i){var a=new Audio(n.audio);a.play()}else alert("Sorry no this sound , 沒有此音檔")},clear:function(){this.spell_="",this.spell_pinyin="",this.current_spell_="",this.spell_array=[],this.pinyin_str=""},spell_voice:function(n){for(var t=this,i=this,e=function(e){i=t;var a={};a.toUnicode=encodeURI(n[e]),a.toUnicode<encodeURI("ㄏㄟ ")?(a.audio="https://github.com/frankhsu519/spell_sound1/raw/master/".concat(a.toUnicode,".mp3"),a.html_url="https://github.com/frankhsu519/spell_sound1/blob/master/".concat(a.toUnicode,".mp3"),a.check="1"):a.toUnicode<encodeURI("ㄨㄢ ")?(a.audio="https://github.com/frankhsu519/spell_sound2/raw/master/".concat(a.toUnicode,".mp3"),a.html_url="https://github.com/frankhsu519/spell_sound2/blob/master/".concat(a.toUnicode,".mp3"),a.check="2"):(a.audio="https://github.com/frankhsu519/spell_sound3/raw/master/".concat(a.toUnicode,".mp3"),a.html_url="https://github.com/frankhsu519/spell_sound3/blob/master/".concat(a.toUnicode,".mp3"),a.check="3"),setTimeout((function(){i.spell_audio(a)}),1e3*e)},a=0;a<n.length;a++){e(a)}},getApi_data:function(){var n=this;this.axios.get("https://api.github.com/repos/frankhsu519/spell_sound1/contents").then((function(t){"200"==t.status&&(n.api_data1=t.data)})).catch((function(n){console.log(n),alert("找不到1")})),this.axios.get("https://api.github.com/repos/frankhsu519/spell_sound2/contents").then((function(t){"200"==t.status&&(n.api_data2=t.data)})).catch((function(n){console.log(n),alert("找不到2")})),this.axios.get("https://api.github.com/repos/frankhsu519/spell_sound3/contents").then((function(t){"200"==t.status&&(n.api_data3=t.data)})).catch((function(n){console.log(n),alert("找不到3")}))}},mounted:function(){this.fileter(this.type[0]),this.getApi_data()}}),h=p,c=i(1001),l=i(3453),d=i.n(l),m=i(9947),_=i(2102),y=i(247),f=i(2877),g=(0,c.Z)(h,s,r,!1,null,null,null),k=g.exports;d()(g,{VBtn:m.Z,VCol:_.Z,VContainer:y.Z,VRow:f.Z});var b={name:"App",components:{PhoneticNotation:k},data:function(){return{}}},V=b,w=i(7524),v=i(1009),A=(0,c.Z)(V,a,o,!1,null,null,null),E=A.exports;d()(A,{VApp:w.Z,VMain:v.Z});var C=i(5591);e.Z.use(C.Z);var W=new C.Z({}),x=i(9669),Z=i.n(x),O=i(2346);e.Z.use(O.Z,Z()),e.Z.config.productionTip=!1,new e.Z({vuetify:W,render:function(n){return n(E)}}).$mount("#app")}},t={};function i(e){var a=t[e];if(void 0!==a)return a.exports;var o=t[e]={id:e,loaded:!1,exports:{}};return n[e](o,o.exports,i),o.loaded=!0,o.exports}i.m=n,function(){i.amdO={}}(),function(){var n=[];i.O=function(t,e,a,o){if(!e){var s=1/0;for(h=0;h<n.length;h++){e=n[h][0],a=n[h][1],o=n[h][2];for(var r=!0,u=0;u<e.length;u++)(!1&o||s>=o)&&Object.keys(i.O).every((function(n){return i.O[n](e[u])}))?e.splice(u--,1):(r=!1,o<s&&(s=o));if(r){n.splice(h--,1);var p=a();void 0!==p&&(t=p)}}return t}o=o||0;for(var h=n.length;h>0&&n[h-1][2]>o;h--)n[h]=n[h-1];n[h]=[e,a,o]}}(),function(){i.n=function(n){var t=n&&n.__esModule?function(){return n["default"]}:function(){return n};return i.d(t,{a:t}),t}}(),function(){i.d=function(n,t){for(var e in t)i.o(t,e)&&!i.o(n,e)&&Object.defineProperty(n,e,{enumerable:!0,get:t[e]})}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){i.hmd=function(n){return n=Object.create(n),n.children||(n.children=[]),Object.defineProperty(n,"exports",{enumerable:!0,set:function(){throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+n.id)}}),n}}(),function(){i.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)}}(),function(){i.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})}}(),function(){var n={143:0};i.O.j=function(t){return 0===n[t]};var t=function(t,e){var a,o,s=e[0],r=e[1],u=e[2],p=0;if(s.some((function(t){return 0!==n[t]}))){for(a in r)i.o(r,a)&&(i.m[a]=r[a]);if(u)var h=u(i)}for(t&&t(e);p<s.length;p++)o=s[p],i.o(n,o)&&n[o]&&n[o][0](),n[o]=0;return i.O(h)},e=self["webpackChunkspin_namin"]=self["webpackChunkspin_namin"]||[];e.forEach(t.bind(null,0)),e.push=t.bind(null,e.push.bind(e))}();var e=i.O(void 0,[998],(function(){return i(3090)}));e=i.O(e)})();
//# sourceMappingURL=app-legacy.54d0b9d0.js.map