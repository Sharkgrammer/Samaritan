(function(){"use strict";var e={9996:function(e,t,o){var n=o(5130),s=o(6768),i=o.p+"img/setting_red.ff62fa86.svg",a=o.p+"img/setting.34ce58c6.svg";const r={class:"w-screen h-screen"},l={class:"h-full flex justify-center items-center flex flex-col gap-1"},u={key:0,src:i},c={key:1,src:a};function d(e,t,o,n,i,a){const d=(0,s.g2)("ConsoleUI"),p=(0,s.g2)("PopupUI");return(0,s.uX)(),(0,s.CE)(s.FK,null,[(0,s.Lk)("div",r,[(0,s.Lk)("div",l,[((0,s.uX)(),(0,s.Wv)(d,{key:i.forceWait,api:i.key,wait:i.forceWait},null,8,["api","wait"]))])]),(0,s.Lk)("div",{class:"absolute top-2 right-2 p-2 cursor-pointer",onMouseenter:t[0]||(t[0]=e=>i.hover=!0),onMouseleave:t[1]||(t[1]=e=>i.hover=!1),onClick:t[2]||(t[2]=(...e)=>a.openPopup&&a.openPopup(...e))},[i.hover?((0,s.uX)(),(0,s.CE)("img",u)):((0,s.uX)(),(0,s.CE)("img",c))],32),i.showPopup?((0,s.uX)(),(0,s.Wv)(p,{key:0,onClose:a.closePopup},null,8,["onClose"])):(0,s.Q3)("",!0)],64)}var p=o(4232),h=o.p+"img/samaritan.e89d05b7.svg";const f={class:"text-5xl uppercase font-bold h-12"},m={class:"pt-10 h-14"};function g(e,t,o,i,a,r){return(0,s.uX)(),(0,s.CE)(s.FK,null,[(0,s.Lk)("div",{class:(0,p.C4)([r.getShove(),"h-14"])},[(0,s.Lk)("h1",f,(0,p.v_)(a.output),1),(0,s.Lk)("div",{class:(0,p.C4)(["border-2 border-black mx-1",{"w-20":a.waiting}])},null,2)],2),((0,s.uX)(),(0,s.CE)("div",{key:a.speaking,class:"h-14"},[(0,s.Lk)("img",{src:h,class:(0,p.C4)(["h-10",{"animate-fade":a.speaking,"animate-gentle-fade":!a.speaking}])},null,2)])),(0,s.Lk)("div",m,[a.waiting&&!o.wait?(0,s.bo)(((0,s.uX)(),(0,s.CE)("input",{key:0,id:"textbox",type:"text",placeholder:"Command","onUpdate:modelValue":t[0]||(t[0]=e=>a.textValue=e),onKeypress:t[1]||(t[1]=(0,n.jR)(((...e)=>r.sendText&&r.sendText(...e)),["enter"])),class:"h-10 animate-fade-in box"},null,544)),[[n.Jo,a.textValue]]):(0,s.Q3)("",!0)])],64)}o(4114);var k=o(141);let b={"^(good)\\s(morning|afternoon|evening)$":"what are your commands?|how can i help you?|what do you need?","^(hi|hello|greetings)$":"hello|hi",test:"test|what are you testing|what","^(good)\\s(night|bye)$":"goodbye|bye|farewell","^(goodbye|bye|farewell)$":"goodbye|bye|farewell","^(find|locate)\\s(john|harold|sameen|samantha|the)\\s(reese|finch|shaw|groves|machine)$":"findCommand","^(kill|eliminate)\\s(john|harold|sameen|samantha|the)\\s(reese|finch|shaw|groves|machine)$":"killCommand","^(identify)\\s(john|harold|sameen|samantha|the)\\s(reese|finch|shaw|groves|machine)$":"identifyCommand"},y={"(find|locate)":"searching for|locating|hunting|finding","(kill|eliminate)":"eliminate|assets dispatched for|destroy","(identify)":"unknown"};function v(e){let t;for(let o in b)if(t=new RegExp(o),t.test(e.toLowerCase()))return x(e,b[o]);return null}function x(e,t){switch(console.log(e+" "+t),t){case"findCommand":case"killCommand":case"identifyCommand":return w(e,t)}if(t.includes("|")){let e=t.split("|");return e[Math.floor(Math.random()*e.length)]}return t}function w(e){let t,o=e.split(" "),n=o[0];for(let s in y)if(t=new RegExp(s),t.test(n.toLowerCase())){let t=y[s].split("|");return x(e,t[Math.floor(Math.random()*t.length)]+" "+o[1]+" "+o[2])}return null}function C(e,t,o){P(e,t),S(e,o)}function P(e,t){V(e)?e.$store.commit("setKey",t):T("key",t)}function S(e,t){e.$store.commit("setSave",t)}function L(e,t){e.$store.commit("setPopup",t)}function I(e){return V(e)?e.$store.getters.key:$("key")}function V(e){return e.$store.getters.save}function E(e){return e.$store.getters.seenPopup}function T(e,t){document.cookie=`${e}=${t}; path=/;SameSite=None;`}function $(e){const t=document.cookie.split(";").map((e=>e.trim()));for(const o of t){const[t,n]=o.split("=");if(t===e)return n}return""}var j={name:"ConsoleUI",props:{api:{type:String,default:"",required:!0},wait:{type:Boolean,default:!1}},data(){return{output:"",words:[],wordsIdx:0,timeout:700,speaking:!1,waiting:!1,textValue:""}},mounted(){console.log(I(this)),this.wait?this.stopSpeaking():this.run("what are your commands?")},methods:{run(e){this.parseWords(e),this.startSpeaking(),this.speak(this.words[this.wordsIdx++]),this.words.length!==this.wordsIdx?this.speakTimeout(this):this.stopSpeakingTimeout(this)},parseWords(e){let t=e.split(" "),o=t[t.length-1];this.words=e.replace(/[.,?@'#]/g,"").split(" "),o.includes("?")&&this.words.push("?")},speakTimeout(e){setTimeout((function(){e.speak(e.words[e.wordsIdx++]),e.wordsIdx<e.words.length?e.speakTimeout(e):e.stopSpeakingTimeout(e)}),this.timeout)},speak(e){this.output=e},getShove(){let e=this.output.length,t="pl-0";return e>3&&e<=5?t="pl-5":e>5&&e<=7?t="pl-10":e>=8&&(t="pl-20"),t},startSpeaking(){this.speaking=!0,this.waiting=!1,this.textValue=""},stopSpeakingTimeout(e){setTimeout((function(){e.stopSpeaking()}),this.timeout)},stopSpeaking(){this.output="",this.speaking=!1,this.waiting=!0,this.words=[],this.wordsIdx=0},async sendText(){if(console.log(this.textValue),document.getElementById("textbox").style.animation="fadeOut 1s",this.textValue<0)return;let e=v(this.textValue);if(null===e)try{const e=new k.Ay({apiKey:I(this),dangerouslyAllowBrowser:!0});let t="answer the following in 12 words or less: "+this.textValue;const o=await e.chat.completions.create({messages:[{role:"user",content:t}],model:"gpt-3.5-turbo",max_tokens:50});this.run(o.choices[0].message.content)}catch(t){this.run("cannot access ai need valid api key")}else this.run(e)}}},O=o(1241);const A=(0,O.A)(j,[["render",g]]);var M=A;const W=e=>((0,s.Qi)("data-v-2baf4eb4"),e=e(),(0,s.jt)(),e),X={class:"fixed inset-0 z-50 flex items-center justify-center animate-fade-in"},U={class:"bg-white rounded-lg p-8 max-w-md w-full mx-auto"},K={class:"flex flex-col items-center"},_=W((()=>(0,s.Lk)("h2",{class:"text-lg font-semibold mb-4"},"Samaritan v1.1",-1))),F=W((()=>(0,s.Lk)("p",{class:"mb-4"},"A Person of Interest Samaritan inspired web UI for accessing ChatGPT.",-1))),B=W((()=>(0,s.Lk)("img",{src:h,class:"h-10 animate-gentle-fade mb-4"},null,-1))),Q={key:0},R={key:1},q=W((()=>(0,s.Lk)("p",{class:"mb-6"},"Samaritan can store this key for future sessions using Vuex. Otherwise it will forget it once you close the tab.",-1))),G=W((()=>(0,s.Lk)("p",{class:"mb-6"},"Samaritan uses Vuex and session cookies to store data like your key and if you've already seen this popup.",-1))),J={class:"grid grid-cols-2 gap-2"},z=W((()=>(0,s.Lk)("div",{class:"fixed inset-0 bg-black opacity-50"},null,-1)));function H(e,t,o,i,a,r){return(0,s.uX)(),(0,s.CE)(s.FK,null,[(0,s.Lk)("div",X,[(0,s.Lk)("div",U,[(0,s.Lk)("div",K,[_,F,B,((0,s.uX)(),(0,s.CE)("p",{key:a.keyExists,class:"mb-4"},[(0,s.eW)("For most features, Samaritan requires access to the ChatGPT API. "),a.keyExists?((0,s.uX)(),(0,s.CE)("span",Q,"You already have an API key set but you can change it below. Leave blank to remove.")):((0,s.uX)(),(0,s.CE)("span",R,"To use it, please enter an API key below. If you don't, Samaritan has a small list of responses."))])),(0,s.bo)((0,s.Lk)("input",{id:"textbox",type:"text",placeholder:"API key","onUpdate:modelValue":t[0]||(t[0]=e=>a.textValue=e),class:"h-10 box mb-6"},null,512),[[n.Jo,a.textValue]]),q,(0,s.bo)((0,s.Lk)("input",{id:"checkbox",type:"checkbox",placeholder:"API key","onUpdate:modelValue":t[1]||(t[1]=e=>a.boxValue=e),class:"h-8 box mb-6 bg-accent"},null,512),[[n.lH,a.boxValue]]),G,(0,s.Lk)("div",J,[(0,s.Lk)("button",{class:"bg-background text-accent border-accent hover:bg-accent hover:text-background hover:border-background border font-bold py-1 px-2 rounded",onClick:t[2]||(t[2]=e=>r.closeModal(!0))},"Save "),(0,s.Lk)("button",{class:"bg-background text-accent border-accent hover:bg-accent hover:text-background hover:border-background border font-bold py-1 px-2 rounded",onClick:t[3]||(t[3]=e=>r.closeModal(!1))},"Close ")])])])]),z],64)}var N={name:"PopupUI",emits:["close"],data(){return{textValue:"",boxValue:"",keyExists:!1}},mounted(){this.keyExists=I(this).length>0,this.boxValue=V(this)},methods:{closeModal(e){e&&C(this,this.textValue,this.boxValue),L(this,!0),this.$emit("close")}}};const Y=(0,O.A)(N,[["render",H],["__scopeId","data-v-2baf4eb4"]]);var D=Y,Z={name:"App",components:{PopupUI:D,ConsoleUI:M},data(){return{hover:!1,forceWait:!1,showPopup:!1,key:""}},mounted(){this.key=this.checkKey(),E(this)||this.openPopup()},methods:{checkKey(){return""},openPopup(){this.forceWait=!0,this.showPopup=!0,console.log(this.forceWait)},closePopup(){this.forceWait=this.showPopup=!1,console.log(this.forceWait)}}};const ee=(0,O.A)(Z,[["render",d]]);var te=ee,oe=o(782),ne=o(5131),se=(0,oe.y$)({state(){return{key:"",save:!1,seenPopup:!1}},mutations:{setKey(e,t){e.key=t},setSave(e,t){e.save=t},setPopup(e,t){e.seenPopup=t}},getters:{key:e=>e.key,save:e=>e.save,seenPopup:e=>e.seenPopup},plugins:[(0,ne.A)()]});let ie=(0,n.Ef)(te);ie.use(se),ie.mount("#app")}},t={};function o(n){var s=t[n];if(void 0!==s)return s.exports;var i=t[n]={exports:{}};return e[n].call(i.exports,i,i.exports,o),i.exports}o.m=e,function(){var e=[];o.O=function(t,n,s,i){if(!n){var a=1/0;for(c=0;c<e.length;c++){n=e[c][0],s=e[c][1],i=e[c][2];for(var r=!0,l=0;l<n.length;l++)(!1&i||a>=i)&&Object.keys(o.O).every((function(e){return o.O[e](n[l])}))?n.splice(l--,1):(r=!1,i<a&&(a=i));if(r){e.splice(c--,1);var u=s();void 0!==u&&(t=u)}}return t}i=i||0;for(var c=e.length;c>0&&e[c-1][2]>i;c--)e[c]=e[c-1];e[c]=[n,s,i]}}(),function(){o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,{a:t}),t}}(),function(){o.d=function(e,t){for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){o.p="/"}(),function(){var e={524:0};o.O.j=function(t){return 0===e[t]};var t=function(t,n){var s,i,a=n[0],r=n[1],l=n[2],u=0;if(a.some((function(t){return 0!==e[t]}))){for(s in r)o.o(r,s)&&(o.m[s]=r[s]);if(l)var c=l(o)}for(t&&t(n);u<a.length;u++)i=a[u],o.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return o.O(c)},n=self["webpackChunkSamaritan"]=self["webpackChunkSamaritan"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=o.O(void 0,[504],(function(){return o(9996)}));n=o.O(n)})();
//# sourceMappingURL=app.2035201c.js.map