if(!self.define){let e,i={};const n=(n,s)=>(n=new URL(n+".js",s).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(s,d)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let o={};const c=e=>n(e,r),f={module:{uri:r},exports:o,require:c};i[r]=Promise.all(s.map((e=>f[e]||c(e)))).then((e=>(d(...e),o)))}}define(["./workbox-2b403519"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"icon.4abaf729.svg",revision:"0b62becb3fc26b1adfa5ede4dfda6811"},{url:"icon.512d4903.png",revision:"119057cbc11318a5f0b2bd5a60543989"},{url:"index.0d7bad8d.js",revision:"8c32148929169d49d01af1c50ef359d6"},{url:"index.0d7bad8d.js.map",revision:"606cefcf49186febfd7cbef0b57b6679"},{url:"index.html",revision:"cba27b1dc3e8e8e34d67206bf1570364"},{url:"manifest.webmanifest",revision:"0791988afb11a5c678109f12163e8545"},{url:"maskable.11c0abf6.png",revision:"c909d40a6bc8ae3871931df3bd1e010a"}],{})}));
//# sourceMappingURL=service-worker.js.map