(function(){"use strict";var e={2049:function(e,s,t){var r=t(9242),n=t(3396);const a={class:"header-container"},i=(0,n._)("h1",null,[(0,n.Uk)("T"),(0,n._)("span",null,"Vue")],-1),l=(0,n._)("span",{class:"source"},"Populares",-1),o=(0,n._)("span",{class:"source"},"Contacto",-1);function u(e,s,t,r,u,c){const p=(0,n.up)("router-link"),d=(0,n.up)("router-view");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n._)("header",null,[(0,n._)("div",a,[(0,n.Wm)(p,{to:"/"},{default:(0,n.w5)((()=>[i])),_:1}),(0,n.Wm)(p,{to:"/populares"},{default:(0,n.w5)((()=>[l])),_:1}),(0,n.Wm)(p,{to:"/contacto"},{default:(0,n.w5)((()=>[o])),_:1})])]),(0,n.Wm)(d)],64)}var c={},p=t(89);const d=(0,p.Z)(c,[["render",u]]);var v=d,_=t(2483);const h=e=>((0,n.dD)("data-v-cf1cb3d2"),e=e(),(0,n.Cn)(),e),f={class:"home"},g=h((()=>(0,n._)("div",{class:"logo"},[(0,n._)("h2",null,[(0,n.Uk)("T"),(0,n._)("span",null,"Vue")])],-1))),m=h((()=>(0,n._)("div",{class:"logo"},[(0,n._)("h3",null,"Tu VUEscador de series")],-1))),b={class:"d-flex justify-content-center"},w={type:"submit"};function k(e,s,t,a,i,l){const o=(0,n.up)("uil-search"),u=(0,n.up)("ListaSeries");return(0,n.wg)(),(0,n.iD)("div",f,[g,m,(0,n._)("div",b,[(0,n._)("form",{class:"search-bar d-flex justify-content-center",onSubmit:s[1]||(s[1]=(0,r.iM)(((...e)=>a.searchMovies&&a.searchMovies(...e)),["prevent"]))},[(0,n.wy)((0,n._)("input",{type:"text",placeholder:"Encuentra tu serie","onUpdate:modelValue":s[0]||(s[0]=e=>a.queryBúsqueda=e)},null,512),[[r.nr,a.queryBúsqueda]]),(0,n._)("button",w,[(0,n.Wm)(o,{class:"search-icon"})])],32)]),(0,n.Wm)(u,{series:a.series},null,8,["series"])])}var y=t(4870),D={apikey:"02b575c8c9c0f8bfb43cbde51d545e54"},j=t(7139);const z={class:"serie-list"},O={class:"serie-poster"},U=["src","alt"],W={class:"serie-detail"},S={class:"serie-ratings"},$={key:0},x={key:1};function H(e,s,t,r,a,i){const l=(0,n.up)("uis-star"),o=(0,n.up)("router-link");return(0,n.wg)(),(0,n.iD)("div",z,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(t.series,(e=>((0,n.wg)(),(0,n.iD)("div",{class:"serie-card",key:e.id},[(0,n.Wm)(o,{to:"/serie/"+e.id,class:"serie-link"},{default:(0,n.w5)((()=>[(0,n._)("div",O,[(0,n._)("img",{src:`https://image.tmdb.org/t/p/original/${e.backdrop_path}`,alt:e.title},null,8,U)]),(0,n._)("div",W,[(0,n._)("h3",null,(0,j.zw)(e.name),1),(0,n._)("div",S,[(0,n._)("span",null,(0,j.zw)(e.vote_average),1),(0,n.Wm)(l,{class:"star-icon"})]),""!==e.overview?((0,n.wg)(),(0,n.iD)("p",$,(0,j.zw)(e.overview),1)):((0,n.wg)(),(0,n.iD)("p",x,"Click para ver más detalles"))])])),_:2},1032,["to"])])))),128))])}var Z=t(9080),q={props:["series"],components:{UisStar:Z.Z}};const C=(0,p.Z)(q,[["render",H]]);var T=C,V=t(7005),L={components:{ListaSeries:T,UilSearch:V.Z},setup(){const e=(0,y.iH)(""),s=(0,y.iH)([]);(0,n.bv)((()=>{fetch(`https://api.themoviedb.org/3/search/tv?api_key=${D.apikey}&language=es&page=1&include_adult=false&query=${e.value}`).then((e=>e.json())).then((t=>{s.value=t.results.filter((e=>null!==e.poster_path&&null!==e.backdrop_path)),e.value=""}))}));const t=()=>{fetch(`https://api.themoviedb.org/3/search/tv?api_key=${D.apikey}&language=es&page=1&include_adult=false&query=${e.value}`).then((e=>e.json())).then((t=>{console.log(t),s.value=t.results.filter((e=>null!==e.poster_path&&null!==e.backdrop_path)),e.value=""}))};return{"queryBúsqueda":e,series:s,searchMovies:t}}};const M=(0,p.Z)(L,[["render",k],["__scopeId","data-v-cf1cb3d2"]]);var E=M;const I=e=>((0,n.dD)("data-v-7d34352b"),e=e(),(0,n.Cn)(),e),P={class:"serie-banner"},Y=["src","alt"],B={class:"serie-poster"},F=["src","alt"],K={class:"serie-detail"},A={class:"serie-text"},G={key:0,class:"genero-name"},J={key:1,class:"genero-name"},N={class:"serie-datos"},Q=I((()=>(0,n._)("div",{class:"serie-detail"},null,-1)));function R(e,s,t,r,a,i){const l=(0,n.up)("uil-arrow-left"),o=(0,n.up)("uil-schedule"),u=(0,n.up)("uil-star");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n._)("div",P,[(0,n._)("a",{onClick:s[0]||(s[0]=s=>e.$router.go(-1))},[(0,n.Wm)(l,{class:"back-button"})]),(0,n._)("img",{src:`https://image.tmdb.org/t/p/original/${r.serie.backdrop_path}`,alt:r.serie.title+" poster",class:"serie-backdrop"},null,8,Y),(0,n._)("div",B,[(0,n._)("img",{src:`https://image.tmdb.org/t/p/original/${r.serie.poster_path}`,alt:r.serie.title+" poster"},null,8,F)]),(0,n._)("div",K,[(0,n._)("div",A,[(0,n._)("h2",null,(0,j.zw)(r.serie.name),1),(0,n._)("h4",null,(0,j.zw)(r.serie.tagline),1),((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(r.generos,(e=>((0,n.wg)(),(0,n.iD)("div",{key:e.id,class:"serie-generos"},[r.generos.indexOf(e)!==r.generos.length-1?((0,n.wg)(),(0,n.iD)("span",G,[(0,n._)("i",null,(0,j.zw)(e.name)+", ",1)])):((0,n.wg)(),(0,n.iD)("span",J,[(0,n._)("i",null,(0,j.zw)(e.name),1)]))])))),128)),(0,n._)("div",N,[(0,n._)("span",null,(0,j.zw)(r.serie.number_of_seasons)+" temporada/s, "+(0,j.zw)(r.serie.number_of_episodes)+" episodio/s",1),(0,n._)("span",null,[(0,n.Wm)(o,{class:"icon"}),(0,n.Uk)((0,j.zw)(r.serie.first_air_date.slice(0,4))+"-"+(0,j.zw)(r.serie.last_air_date.slice(0,4)),1)]),(0,n._)("span",null,[(0,n.Wm)(u,{class:"icon"}),(0,n.Uk)((0,j.zw)(r.rating),1)])]),(0,n._)("p",null,(0,j.zw)(r.serie.overview),1)])])]),Q],64)}var X=t(4067),ee=t(2169),se=t(8931),te={components:{UilSchedule:X.Z,UilStar:ee.Z,UilArrowLeft:se.Z},setup(){const e=(0,y.iH)({}),s=(0,_.yj)(),t=(0,y.iH)([]),r=(0,y.iH)("");return(0,n.wF)((()=>{fetch(`https://api.themoviedb.org/3/tv/${s.params.id}?api_key=${D.apikey}&language=es`).then((e=>e.json())).then((s=>{e.value=s,t.value=e.value.genres,r.value=e.value.vote_average.toFixed(1)}))})),{serie:e,route:s,generos:t,rating:r}}};const re=(0,p.Z)(te,[["render",R],["__scopeId","data-v-7d34352b"]]);var ne=re;const ae=e=>((0,n.dD)("data-v-7d4d37b3"),e=e(),(0,n.Cn)(),e),ie={class:"home"},le=ae((()=>(0,n._)("div",{class:"logo"},[(0,n._)("h2",null,[(0,n.Uk)("T"),(0,n._)("span",null,"Vue")])],-1))),oe=ae((()=>(0,n._)("div",{class:"logo"},[(0,n._)("h3",null,"Tu VUEscador de series")],-1)));function ue(e,s,t,r,a,i){const l=(0,n.up)("ListaSeries");return(0,n.wg)(),(0,n.iD)("div",ie,[le,oe,(0,n.Wm)(l,{series:r.series},null,8,["series"])])}var ce={components:{ListaSeries:T},setup(){const e=(0,y.iH)([]);return(0,n.bv)((()=>{fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${D.apikey}&language=es&page=1&include_adult=false&page=1`).then((e=>e.json())).then((s=>{e.value=s.results.filter((e=>null!==e.poster_path&&null!==e.backdrop_path))}))})),{series:e}}};const pe=(0,p.Z)(ce,[["render",ue],["__scopeId","data-v-7d4d37b3"]]);var de=pe;const ve=[{path:"/",name:"Inicio",component:E},{path:"/serie/:id",name:"Serie detallada",component:ne},{path:"/populares",name:"Series populares",component:de}],_e=(0,_.p7)({history:(0,_.PO)("/"),routes:ve});var he=_e;(0,r.ri)(v).use(he).mount("#app")}},s={};function t(r){var n=s[r];if(void 0!==n)return n.exports;var a=s[r]={exports:{}};return e[r](a,a.exports,t),a.exports}t.m=e,function(){var e=[];t.O=function(s,r,n,a){if(!r){var i=1/0;for(c=0;c<e.length;c++){r=e[c][0],n=e[c][1],a=e[c][2];for(var l=!0,o=0;o<r.length;o++)(!1&a||i>=a)&&Object.keys(t.O).every((function(e){return t.O[e](r[o])}))?r.splice(o--,1):(l=!1,a<i&&(i=a));if(l){e.splice(c--,1);var u=n();void 0!==u&&(s=u)}}return s}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[r,n,a]}}(),function(){t.n=function(e){var s=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(s,{a:s}),s}}(),function(){t.d=function(e,s){for(var r in s)t.o(s,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:s[r]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,s){return Object.prototype.hasOwnProperty.call(e,s)}}(),function(){var e={143:0};t.O.j=function(s){return 0===e[s]};var s=function(s,r){var n,a,i=r[0],l=r[1],o=r[2],u=0;if(i.some((function(s){return 0!==e[s]}))){for(n in l)t.o(l,n)&&(t.m[n]=l[n]);if(o)var c=o(t)}for(s&&s(r);u<i.length;u++)a=i[u],t.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return t.O(c)},r=self["webpackChunktvue_app"]=self["webpackChunktvue_app"]||[];r.forEach(s.bind(null,0)),r.push=s.bind(null,r.push.bind(r))}();var r=t.O(void 0,[998],(function(){return t(2049)}));r=t.O(r)})();
//# sourceMappingURL=app.00a9160f.js.map