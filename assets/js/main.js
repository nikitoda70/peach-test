(()=>{var e,r={319:(e,r,t)=>{"use strict";t(310);new(t(356).ZP)(".slider",{type:"loop",perPage:1,perMove:1,pagination:!0,arrows:!0,autoplay:!0,interval:5e3,classes:{pagination:"splide__pagination slider__pagination",page:"splide__pagination__page slider__page"},breakpoints:{768:{pagination:!1,arrows:!1}}}).mount();var o=t(667),a=t(357);o.p8.registerPlugin(a.i),o.p8.to(".about__card",{y:0,duration:1.5,opacity:1,scale:1,scrollTrigger:{trigger:".about__card",start:150,toggleClass:"about__card--before-enter"}});t(942),t(814)},942:()=>{const e=document.querySelector("#map"),r=document.querySelector("#map-dropdown");new MutationObserver((function(r,t){r.forEach((r=>{"class"===r.attributeName&&(r.target.classList.value.includes("show")?e.classList.add("map--opened"):e.classList.remove("map--opened"))}))})).observe(r,{attributes:!0})},814:()=>{const e=document.querySelector("#map-wrapper"),r=[...document.querySelectorAll(".map__tabs-button")];function t(r,t){r.addEventListener("click",(()=>{e.scrollTo({top:0,left:t,behavior:"smooth"})}))}t(r[0],0),t(r[1],0),t(r[2],0),t(r[3],0),t(r[4],0),t(r[5],70),t(r[6],150),t(r[7],300),t(r[8],862)}},t={};function o(e){var a=t[e];if(void 0!==a)return a.exports;var n=t[e]={exports:{}};return r[e](n,n.exports,o),n.exports}o.m=r,e=[],o.O=(r,t,a,n)=>{if(!t){var i=1/0;for(c=0;c<e.length;c++){for(var[t,a,n]=e[c],s=!0,l=0;l<t.length;l++)(!1&n||i>=n)&&Object.keys(o.O).every((e=>o.O[e](t[l])))?t.splice(l--,1):(s=!1,n<i&&(i=n));if(s){e.splice(c--,1);var p=a();void 0!==p&&(r=p)}}return r}n=n||0;for(var c=e.length;c>0&&e[c-1][2]>n;c--)e[c]=e[c-1];e[c]=[t,a,n]},o.d=(e,r)=>{for(var t in r)o.o(r,t)&&!o.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},o.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e={179:0};o.O.j=r=>0===e[r];var r=(r,t)=>{var a,n,[i,s,l]=t,p=0;if(i.some((r=>0!==e[r]))){for(a in s)o.o(s,a)&&(o.m[a]=s[a]);if(l)var c=l(o)}for(r&&r(t);p<i.length;p++)n=i[p],o.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return o.O(c)},t=self.webpackChunk=self.webpackChunk||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})();var a=o.O(void 0,[116],(()=>o(319)));a=o.O(a)})();