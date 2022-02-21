class t{}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var e;t.QWERTY=new Map([["z",0],[",",1],["x",2],[".",3],["c",4],["v",5],["k",6],["b",7],["l",8],["n",9],[";",10],["m",11],["a",12],["i",13],["s",14],["o",15],["d",16],["f",17],["p",18],["g",19],["[",20],["h",21],["]",22],["j",23],["q",24],["8",25],["w",26],["9",27],["e",28],["r",29],["0",30],["t",31],["-",32],["y",33],["=",34],["u",35],["1",36],["/",37],["2",38],["'",39],["3",40],["4",41],["\\",42],["5",43],["Delete",44],["6",45],["Insert",46],["7",47]]);const i=globalThis.trustedTypes,s=i?i.createPolicy("lit-html",{createHTML:t=>t}):void 0,n=`lit$${(Math.random()+"").slice(9)}$`,r="?"+n,o=`<${r}>`,l=document,a=(t="")=>l.createComment(t),h=t=>null===t||"object"!=typeof t&&"function"!=typeof t,c=Array.isArray,d=t=>{var e;return c(t)||"function"==typeof(null===(e=t)||void 0===e?void 0:e[Symbol.iterator])},u=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,p=/-->/g,m=/>/g,v=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,b=/'/g,g=/"/g,y=/^(?:script|style|textarea|title)$/i,f=t=>(e,...i)=>({_$litType$:t,strings:e,values:i}),$=f(1),_=(f(2),Symbol.for("lit-noChange")),A=Symbol.for("lit-nothing"),k=new WeakMap,S=l.createTreeWalker(l,129,null,!1),w=(t,e)=>{const i=t.length-1,r=[];let l,a=2===e?"<svg>":"",h=u;for(let e=0;e<i;e++){const i=t[e];let s,c,d=-1,f=0;for(;f<i.length&&(h.lastIndex=f,c=h.exec(i),null!==c);)f=h.lastIndex,h===u?"!--"===c[1]?h=p:void 0!==c[1]?h=m:void 0!==c[2]?(y.test(c[2])&&(l=RegExp("</"+c[2],"g")),h=v):void 0!==c[3]&&(h=v):h===v?">"===c[0]?(h=null!=l?l:u,d=-1):void 0===c[1]?d=-2:(d=h.lastIndex-c[2].length,s=c[1],h=void 0===c[3]?v:'"'===c[3]?g:b):h===g||h===b?h=v:h===p||h===m?h=u:(h=v,l=void 0);const $=h===v&&t[e+1].startsWith("/>")?" ":"";a+=h===u?i+o:d>=0?(r.push(s),i.slice(0,d)+"$lit$"+i.slice(d)+n+$):i+n+(-2===d?(r.push(void 0),e):$)}const c=a+(t[i]||"<?>")+(2===e?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==s?s.createHTML(c):c,r]};class E{constructor({strings:t,_$litType$:e},s){let o;this.parts=[];let l=0,h=0;const c=t.length-1,d=this.parts,[u,p]=w(t,e);if(this.el=E.createElement(u,s),S.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(o=S.nextNode())&&d.length<c;){if(1===o.nodeType){if(o.hasAttributes()){const t=[];for(const e of o.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(n)){const i=p[h++];if(t.push(e),void 0!==i){const t=o.getAttribute(i.toLowerCase()+"$lit$").split(n),e=/([.?@])?(.*)/.exec(i);d.push({type:1,index:l,name:e[2],strings:t,ctor:"."===e[1]?O:"?"===e[1]?z:"@"===e[1]?H:x})}else d.push({type:6,index:l})}for(const e of t)o.removeAttribute(e)}if(y.test(o.tagName)){const t=o.textContent.split(n),e=t.length-1;if(e>0){o.textContent=i?i.emptyScript:"";for(let i=0;i<e;i++)o.append(t[i],a()),S.nextNode(),d.push({type:2,index:++l});o.append(t[e],a())}}}else if(8===o.nodeType)if(o.data===r)d.push({type:2,index:l});else{let t=-1;for(;-1!==(t=o.data.indexOf(n,t+1));)d.push({type:7,index:l}),t+=n.length-1}l++}}static createElement(t,e){const i=l.createElement("template");return i.innerHTML=t,i}}function N(t,e,i=t,s){var n,r,o,l;if(e===_)return e;let a=void 0!==s?null===(n=i._$Cl)||void 0===n?void 0:n[s]:i._$Cu;const c=h(e)?void 0:e._$litDirective$;return(null==a?void 0:a.constructor)!==c&&(null===(r=null==a?void 0:a._$AO)||void 0===r||r.call(a,!1),void 0===c?a=void 0:(a=new c(t),a._$AT(t,i,s)),void 0!==s?(null!==(o=(l=i)._$Cl)&&void 0!==o?o:l._$Cl=[])[s]=a:i._$Cu=a),void 0!==a&&(e=N(t,a._$AS(t,e.values),a,s)),e}class T{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;const{el:{content:i},parts:s}=this._$AD,n=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:l).importNode(i,!0);S.currentNode=n;let r=S.nextNode(),o=0,a=0,h=s[0];for(;void 0!==h;){if(o===h.index){let e;2===h.type?e=new C(r,r.nextSibling,this,t):1===h.type?e=new h.ctor(r,h.name,h.strings,this,t):6===h.type&&(e=new P(r,this,t)),this.v.push(e),h=s[++a]}o!==(null==h?void 0:h.index)&&(r=S.nextNode(),o++)}return n}m(t){let e=0;for(const i of this.v)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class C{constructor(t,e,i,s){var n;this.type=2,this._$AH=A,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cg=null===(n=null==s?void 0:s.isConnected)||void 0===n||n}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=N(this,t,e),h(t)?t===A||null==t||""===t?(this._$AH!==A&&this._$AR(),this._$AH=A):t!==this._$AH&&t!==_&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.k(t):d(t)?this.S(t):this.$(t)}A(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}k(t){this._$AH!==t&&(this._$AR(),this._$AH=this.A(t))}$(t){this._$AH!==A&&h(this._$AH)?this._$AA.nextSibling.data=t:this.k(l.createTextNode(t)),this._$AH=t}T(t){var e;const{values:i,_$litType$:s}=t,n="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=E.createElement(s.h,this.options)),s);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===n)this._$AH.m(i);else{const t=new T(n,this),e=t.p(this.options);t.m(i),this.k(e),this._$AH=t}}_$AC(t){let e=k.get(t.strings);return void 0===e&&k.set(t.strings,e=new E(t)),e}S(t){c(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const n of t)s===e.length?e.push(i=new C(this.A(a()),this.A(a()),this,this.options)):i=e[s],i._$AI(n),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cg=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class x{constructor(t,e,i,s,n){this.type=1,this._$AH=A,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=n,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=A}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,s){const n=this.strings;let r=!1;if(void 0===n)t=N(this,t,e,0),r=!h(t)||t!==this._$AH&&t!==_,r&&(this._$AH=t);else{const s=t;let o,l;for(t=n[0],o=0;o<n.length-1;o++)l=N(this,s[i+o],e,o),l===_&&(l=this._$AH[o]),r||(r=!h(l)||l!==this._$AH[o]),l===A?t=A:t!==A&&(t+=(null!=l?l:"")+n[o+1]),this._$AH[o]=l}r&&!s&&this.C(t)}C(t){t===A?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class O extends x{constructor(){super(...arguments),this.type=3}C(t){this.element[this.name]=t===A?void 0:t}}const U=i?i.emptyScript:"";class z extends x{constructor(){super(...arguments),this.type=4}C(t){t&&t!==A?this.element.setAttribute(this.name,U):this.element.removeAttribute(this.name)}}class H extends x{constructor(t,e,i,s,n){super(t,e,i,s,n),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=N(this,t,e,0))&&void 0!==i?i:A)===_)return;const s=this._$AH,n=t===A&&s!==A||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,r=t!==A&&(s===A||n);n&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}class P{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){N(this,t)}}const M={P:"$lit$",L:n,V:r,I:1,N:w,R:T,D:d,j:N,H:C,O:x,F:z,B:H,W:O,Z:P},L=window.litHtmlPolyfillSupport;null==L||L(E,C),(null!==(e=globalThis.litHtmlVersions)&&void 0!==e?e:globalThis.litHtmlVersions=[]).push("2.2.0");
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const{H:q}=M,R=2;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const D=(t,e)=>{var i,s;const n=t._$AN;if(void 0===n)return!1;for(const t of n)null===(s=(i=t)._$AO)||void 0===s||s.call(i,e,!1),D(t,e);return!0},I=t=>{let e,i;do{if(void 0===(e=t._$AM))break;i=e._$AN,i.delete(t),t=e}while(0===(null==i?void 0:i.size))},B=t=>{for(let e;e=t._$AM;t=e){let i=e._$AN;if(void 0===i)e._$AN=i=new Set;else if(i.has(t))break;i.add(t),W(e)}};function V(t){void 0!==this._$AN?(I(this),this._$AM=t,B(this)):this._$AM=t}function K(t,e=!1,i=0){const s=this._$AH,n=this._$AN;if(void 0!==n&&0!==n.size)if(e)if(Array.isArray(s))for(let t=i;t<s.length;t++)D(s[t],!1),I(s[t]);else null!=s&&(D(s,!1),I(s));else D(this,t)}const W=t=>{var e,i,s,n;t.type==R&&(null!==(e=(s=t)._$AP)&&void 0!==e||(s._$AP=K),null!==(i=(n=t)._$AQ)&&void 0!==i||(n._$AQ=V))};class F{}const Z=new WeakMap,j=(t=>(...e)=>({_$litDirective$:t,values:e}))(class extends class extends class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,i){super._$AT(t,e,i),B(this),this.isConnected=t._$AU}_$AO(t,e=!0){var i,s;t!==this.isConnected&&(this.isConnected=t,t?null===(i=this.reconnected)||void 0===i||i.call(this):null===(s=this.disconnected)||void 0===s||s.call(this)),e&&(D(this,t),I(this))}setValue(t){if(void 0===this._$Ct.strings)this._$Ct._$AI(t,this);else{const e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}}
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */{render(t){return A}update(t,[e]){var i;const s=e!==this.U;return s&&void 0!==this.U&&this.ot(void 0),(s||this.rt!==this.lt)&&(this.U=e,this.ht=null===(i=t.options)||void 0===i?void 0:i.host,this.ot(this.lt=t.element)),A}ot(t){"function"==typeof this.U?(void 0!==Z.get(this.U)&&this.U.call(this.ht,void 0),Z.set(this.U,t),void 0!==t&&this.U.call(this.ht,t)):this.U.value=t}get rt(){var t;return"function"==typeof this.U?Z.get(this.U):null===(t=this.U)||void 0===t?void 0:t.value}disconnected(){this.rt===this.lt&&this.ot(void 0)}reconnected(){this.ot(this.lt)}}),G=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Q=Symbol(),Y=new Map;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class J{constructor(t,e){if(this._$cssResult$=!0,e!==Q)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){let t=Y.get(this.cssText);return G&&void 0===t&&(Y.set(this.cssText,t=new CSSStyleSheet),t.replaceSync(this.cssText)),t}toString(){return this.cssText}}const X=(t,...e)=>{const i=1===t.length?t[0]:e.reduce(((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1]),t[0]);return new J(i,Q)},tt=G?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new J("string"==typeof t?t:t+"",Q))(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var et;const it=window.trustedTypes,st=it?it.emptyScript:"",nt=window.reactiveElementPolyfillSupport,rt={toAttribute(t,e){switch(e){case Boolean:t=t?st:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},ot=(t,e)=>e!==t&&(e==e||t==t),lt={attribute:!0,type:String,converter:rt,reflect:!1,hasChanged:ot};class at extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(t){var e;null!==(e=this.l)&&void 0!==e||(this.l=[]),this.l.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,i)=>{const s=this._$Eh(i,e);void 0!==s&&(this._$Eu.set(s,i),t.push(s))})),t}static createProperty(t,e=lt){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);void 0!==s&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){const n=this[t];this[e]=s,this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||lt}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(tt(t))}else void 0!==t&&e.push(tt(t));return e}static _$Eh(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}o(){var t;this._$Ep=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Em(),this.requestUpdate(),null===(t=this.constructor.l)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,i;(null!==(e=this._$Eg)&&void 0!==e?e:this._$Eg=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$Eg)||void 0===e||e.splice(this._$Eg.indexOf(t)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Et.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const e=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return i=e,s=this.constructor.elementStyles,G?i.adoptedStyleSheets=s.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):s.forEach((t=>{const e=document.createElement("style"),s=window.litNonce;void 0!==s&&e.setAttribute("nonce",s),e.textContent=t.cssText,i.appendChild(e)})),e;var i,s}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ES(t,e,i=lt){var s,n;const r=this.constructor._$Eh(t,i);if(void 0!==r&&!0===i.reflect){const o=(null!==(n=null===(s=i.converter)||void 0===s?void 0:s.toAttribute)&&void 0!==n?n:rt.toAttribute)(e,i.type);this._$Ei=t,null==o?this.removeAttribute(r):this.setAttribute(r,o),this._$Ei=null}}_$AK(t,e){var i,s,n;const r=this.constructor,o=r._$Eu.get(t);if(void 0!==o&&this._$Ei!==o){const t=r.getPropertyOptions(o),l=t.converter,a=null!==(n=null!==(s=null===(i=l)||void 0===i?void 0:i.fromAttribute)&&void 0!==s?s:"function"==typeof l?l:null)&&void 0!==n?n:rt.fromAttribute;this._$Ei=o,this[o]=a(e,t.type),this._$Ei=null}}requestUpdate(t,e,i){let s=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||ot)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$Ei!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,i))):s=!1),!this.isUpdatePending&&s&&(this._$Ep=this._$E_())}async _$E_(){this.isUpdatePending=!0;try{await this._$Ep}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach(((t,e)=>this[e]=t)),this._$Et=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(i)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$Eg)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$ES(e,this[e],t))),this._$EC=void 0),this._$EU()}updated(t){}firstUpdated(t){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var ht,ct;at.finalized=!0,at.elementProperties=new Map,at.elementStyles=[],at.shadowRootOptions={mode:"open"},null==nt||nt({ReactiveElement:at}),(null!==(et=globalThis.reactiveElementVersions)&&void 0!==et?et:globalThis.reactiveElementVersions=[]).push("1.3.0");class dt extends at{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=((t,e,i)=>{var s,n;const r=null!==(s=null==i?void 0:i.renderBefore)&&void 0!==s?s:e;let o=r._$litPart$;if(void 0===o){const t=null!==(n=null==i?void 0:i.renderBefore)&&void 0!==n?n:null;r._$litPart$=o=new C(e.insertBefore(a(),t),t,void 0,null!=i?i:{})}return o._$AI(t),o})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!1)}render(){return _}}dt.finalized=!0,dt._$litElement$=!0,null===(ht=globalThis.litElementHydrateSupport)||void 0===ht||ht.call(globalThis,{LitElement:dt});const ut=globalThis.litElementPolyfillSupport;null==ut||ut({LitElement:dt});(null!==(ct=globalThis.litElementVersions)&&void 0!==ct?ct:globalThis.litElementVersions=[]).push("3.2.0");class pt{constructor(t){this.context=t,this.gainNode=new GainNode(t)}get currentTime(){return this.context.currentTime}get volume(){return this.gainNode.gain.value}set volume(t){this.gainNode.gain.setValueAtTime(t,this.currentTime)}}function mt(t,e){return(t%e+e)%e}class vt{static isNatural(t){return this.naturals.includes(mt(t,12))}static isAccidental(t){return this.accidentals.includes(mt(t,12))}static namesOf(t){return this.names[mt(t,12)]}static frequencyOf(t,e){return t*Math.pow(2,e/12)}constructor(t,e=0){this.noteZeroFrequency=t,this.noteNumber=e}get frequency(){return this.constructor.frequencyOf(this.noteZeroFrequency,this.noteNumber)}get names(){return this.constructor.namesOf(this.noteNumber)}plus(t){return new this.constructor(this.noteZeroFrequency,t)}}vt.naturals=[0,2,4,5,7,9,11],vt.accidentals=[1,3,6,8,10],vt.names=[["C"],["C♯","D♭"],["D"],["D♯","E♭"],["E"],["F"],["F♯","G♭"],["G"],["G♯","A♭"],["A"],["A♯","B♭"],["B"]];class bt extends pt{constructor(t,e,i,s,n){super(t),this.gainEnvelope=i,this.oscillator=new OscillatorNode(t),this.wave=s,this.note=n,this.startTime=-1,this.stopTime=-1,this.gainNode.connect(e),this.oscillator.connect(this.gainNode)}set wave(t){this._wave=t,this._wave instanceof PeriodicWave?this.oscillator.setPeriodicWave(this._wave):this.oscillator.type=this._wave}get wave(){return this._wave}get note(){return this._note}set note(t){this._note=t,this.oscillator.frequency.setValueAtTime(this._note.frequency,this.currentTime)}get started(){return this.startTime>=0}get stopped(){return this.stopTime>=0}get duration(){if(this.started){return(this.stopped?this.stopTime:this.currentTime)-this.startTime}return-1}start(t){this.startTime=t,this.gainEnvelope.gate(this.gainNode.gain,this.startTime),this.oscillator.start(this.startTime)}stop(t){this.stopTime=t,this.gainEnvelope.ungate(this.gainNode.gain,this.stopTime),this.oscillator.stop(Math.ceil(this.stopTime+this.gainEnvelope.releaseTime)+1)}onStop(t){this.oscillator.addEventListener("ended",t)}}class gt extends pt{constructor(t,e,i){super(new AudioContext),this.compressor=new DynamicsCompressorNode(this.context),this.gainEnvelope=t,this.wave=e,this.noteZero=new vt(i),this.oscillators=[],this.compressor.connect(this.context.destination),this.gainNode.connect(this.compressor)}startOscillator(t,e){e||=this.currentTime;const i=new bt(this.context,this.gainNode,this.gainEnvelope,this.wave,this.noteZero.plus(t));return this.oscillators.push(i),i.start(e),i}get noteZeroFrequency(){return this.noteZero.noteZeroFrequency}set noteZeroFrequency(t){this.noteZero.noteZeroFrequency=t}stopOscillator(t,e){this.oscillators.includes(t)&&(e??=this.currentTime,t.onStop((()=>this.removeOscillator(t))),t.stop(e))}removeOscillator(t){const e=this.oscillators.indexOf(t);e>=0&&this.oscillators.splice(e,1)}}class yt{constructor(t=0,e=0,i=0,s=1,n=0,r=1,o=0){this.delayTime=t,this.minimumAmplitude=e,this.attackTime=i,this.maximumAmplitude=s,this.decayTime=n,this.sustainAmplitude=r,this.releaseTime=o}delay(t,e,i=1){t.cancelScheduledValues(e),t.setValueAtTime(this.minimumAmplitude*i,e)}attack(t,e,i=1){t.cancelScheduledValues(e),t.setTargetAtTime(this.maximumAmplitude*i,e,this.attackTime)}decay(t,e,i=1){t.cancelScheduledValues(e),t.setTargetAtTime(this.sustainAmplitude*i,e,this.decayTime)}release(t,e,i=1){t.cancelScheduledValues(e),t.setTargetAtTime(this.minimumAmplitude*i,e,this.releaseTime)}gate(t,e,i=1){this.delay(t,e,i),e+=this.delayTime,this.attack(t,e,i),e+=this.attackTime,this.decay(t,e,i)}ungate(t,e,i=1){this.release(t,e,i)}}function ft(t,e,i){return{inline:t.inlineStart+(t.inlineEnd-t.inlineStart)*e,block:t.blockStart+(t.blockEnd-t.blockStart)*i}}function $t(t){const e=function(t){const e=getComputedStyle(t),{writingMode:i,direction:s}=e;let n,r,o,l,a,h,c,d;return i.startsWith("horizontal")?(n="inline",c="inlineSize",r="block",d="blockSize","ltr"===s?(o="inlineStart",l="inlineEnd"):(l="inlineStart",o="inlineEnd"),i.endsWith("-tb")?(a="blockStart",h="blockEnd"):(h="blockStart",a="blockEnd")):(r="inline",d="inlineSize",n="block",c="blockSize","ltr"===s?(a="inlineStart",h="inlineEnd"):(h="inlineStart",a="inlineEnd"),i.endsWith("-rl")?(l="blockStart",o="blockEnd"):(o="blockStart",l="blockEnd")),{x:n,y:r,left:o,right:l,top:a,bottom:h,width:c,height:d}}(t),i=t.getBoundingClientRect(),s={physicalRect:i,writingDirection:e};for(const t of["left","right","top","bottom","width","height"])s[e[t]]=i[t];return s}var _t=X`

:host {
	display: block;
	position: absolute;
	z-index: 1;
}

[part='grid'] {
	background: white;
	border-radius: 0.25em;
	box-shadow: 0 0.25em 0.5em rgba(0, 0, 0, 0.3), 0 0.5em 1em rgba(0, 0, 0, 0.2), 0 1em 2em rgba(0, 0, 0, 0.1);
	color: black;
	overflow: auto;
}

[part='head'] {
	align-items: center;
	border-block-end: thin solid rgba(0, 0, 0, 0.2);
	display: grid;
	font-size: 0.8em;
	grid-template-columns: 1fr auto;
}

[part='close-button'] {
	all: unset;
	user-select: none;
}

[part='title'], [part='close-button'], [part='body'] {
	padding: 1em;
}

[part='title'] {
	font-weight: bold;
}

[part='close-button']:hover, [part='close-button']:focus {
	background: rgba(0, 0, 0, 0.1);
}

[part='close-button']:active {
	background: rgba(0, 0, 0, 0.2);
}

`;class At extends dt{constructor(){super(),this.reposition=()=>{if(this.parent instanceof Element){this.style.transform="";const t=$t(document.body),e=$t(this.parent),i=$t(this),{inline:s,block:n}=ft(e,this.parentInlineOffset,this.parentBlockOffset),{inline:r,block:o}=ft(i,this.inlineOffset,this.blockOffset);let l=s-r,a=n-o;i.inlineEnd+l>t.inlineEnd&&(l=t.inlineEnd-i.inlineEnd),i.blockEnd+a>t.blockEnd&&(a=t.blockEnd-i.blockEnd),i.inlineStart+l<t.inlineStart&&(l=-i.inlineStart),i.blockStart+a<t.blockStart&&(a=-i.blockStart);const h="inline"===i.writingDirection.x?"X":"Y",c="block"===i.writingDirection.y?"Y":"X";this.style.transform=`translate${h}(${l}px) translate${c}(${a}px)`}},this.closeEvent="close",this.parent=this.parentElement||document.body,this.parentInlineOffset=0,this.parentBlockOffset=1,this.inlineOffset=0,this.blockOffset=0,this.resizeObserver=new ResizeObserver(this.reposition)}disconnectedCallback(){this.resizeObserver.unobserve(this.parent)}firstUpdated(t){super.firstUpdated(t),this.resizeObserver.observe(this),this.resizeObserver.observe(this.parent)}updated(t){super.updated(t),this.reposition()}close(t){1===t.buttons&&this.closeEvent.length>0&&this.dispatchEvent(new CustomEvent(this.closeEvent,{bubbles:!0}))}render(){return $`
			<div part="grid">
				<div part="head">
					<span part="title">
						<slot name="title"></slot>
					</span>
					<button
						part="close-button"
						@pointerdown="${this.close}"
					>
						<slot name="close-button">✖</slot>
					</button>
				</div>
				<div part="body">
					<slot name="body"></slot>
				</div>
			</div>
		`}}At.tagName="ui-modal",At.styles=_t,At.properties={closeEvent:{type:String,attribute:"close-event",reflect:!0},parent:{type:Element},parentInlineOffset:{type:Number,attribute:"i0",reflect:!0},parentBlockOffset:{type:Number,attribute:"b0",reflect:!0},inlineOffset:{type:Number,attribute:"i1",reflect:!0},blockOffset:{type:Number,attribute:"b1",reflect:!0}},customElements.define(At.tagName,At);class kt extends dt{constructor(){super(),this.checkPath=t=>{!t.composedPath().includes(this)&&this.toggle()},this.visible=!1}firstUpdated(t){super.firstUpdated(t),this.addEventListener("close",this.closeHandler)}toggle(t){this.visible=t??!this.visible,this.visible?document.body.addEventListener("pointerdown",this.checkPath):document.body.removeEventListener("pointerdown",this.checkPath)}close(){this.toggle(!1)}clickHandler(){this.toggle()}closeHandler(t){t.stopPropagation(),this.close()}render(){return $`
			<slot @click="${this.clickHandler}"></slot>
			${this.visible?$`<slot name="toggled"></slot>`:A}
		`}}kt.tagName="ui-toggle",kt.properties={visible:{type:Boolean,reflect:!0}},customElements.define(kt.tagName,kt);var St=X`

:host {
	display: block;
}

[part~='key'] {
	all: unset;
	user-select: none;
}

[part~='key'], [part='labels'] {
	block-size: 100%;
	box-sizing: border-box;
	inline-size: 100%;
	position: relative;
}

[part~='natural'] {
	--background: white;
	--border-color: hsl(0, 0%, 30%);
	--font-size: 1em;
	--text-color: black;
}

[part~='accidental'] {
	--background: hsl(0, 0%, 10%);
	--border-color: hsl(0, 0%, 30%);
	--font-size: 0.8em;
	--text-color: white;
}

[part='labels'] {
	align-items: end;
	background: var(--background);
	border-radius: 0.25em;
	border: 0.0625em solid var(--border-color);
	box-shadow: 0 0.125em 0.0625em rgba(0, 0, 0, 0.3), 0 0.25em 0.125em rgba(0, 0, 0, 0.2), 0 0.5em 0.25em rgba(0, 0, 0, 0.1);
	color: var(--text-color);
	display: grid;
	font-size: var(--font-size);
	grid-template-rows: 1fr auto;
	inset-block-start: 0;
	justify-items: center;
	padding: 0.5em;
	pointer-events: none;
	transition: inset-block-start 0.125s;
}

[part~='down'] [part='labels'] {
	inset-block-start: 0.5em;
	position: absolute;
	transition: none;
}

`;class wt extends dt{constructor(){super(),this.noteNumber=0,this.key="",this.down=!1,this.labelSource="names"}firstUpdated(t){super.firstUpdated(t)}get natural(){return vt.isNatural(this.noteNumber)}get accidental(){return vt.isAccidental(this.noteNumber)}get names(){return vt.namesOf(this.noteNumber)}get buttonParts(){const t=["key"];return this.down&&t.push("down"),this.natural&&t.push("natural"),this.accidental&&t.push("accidental"),t.join(" ")}start(t){1===t.buttons&&(t.currentTarget.focus(),t.target.releasePointerCapture(t.pointerId),this.dispatchEvent(new KeyboardEvent("keydown",{composed:!0,key:this.key})))}stop(){this.dispatchEvent(new KeyboardEvent("keyup",{composed:!0,key:this.key}))}renderNames(){return this.names.map(this.renderLabel)}renderLabel(t){return $`
			<span part="label">
				${t}
			</span>
		`}renderLabels(){switch(this.labelSource){case"names":return this.renderNames();case"key":return this.renderLabel(this.key.substring(0,3));default:return""}}render(){return $`
			<button
				part=${this.buttonParts}
				@pointerdown="${this.start}"
				@pointerup="${this.stop}"
				@pointerenter="${this.start}"
				@pointerleave="${this.stop}"
				tabindex="-1"
			>
				<span part="labels">
					${this.renderLabels()}
				</span>
			</button>
		`}}wt.tagName="piano-key",wt.styles=St,wt.properties={noteNumber:{type:Number,attribute:"note-number",reflect:!0},key:{type:String,reflect:!0},down:{type:Boolean,reflect:!0},labelSource:{type:String,attribute:"label-source",reflect:!0}},customElements.define(wt.tagName,wt);var Et=X`

:host {
	display: block;
	touch-action: none;
}

[part='grid'] {
	block-size: 100%;
	box-sizing: border-box;
	display: grid;
	grid-template-columns: repeat(14, 1fr);
	grid-template-rows: repeat(8, 1fr);
	inline-size: 100%;
	padding-block-end: 0.75em;
	padding-block-start: 0.125em;
	padding-inline: 0.25em;
	transition: opacity 0.125s;
}

:host(:not(:focus):not(:focus-within)) [part='grid'] {
	opacity: 0.5;
}

`;class Nt extends dt{constructor(){super(),this.synthesizer=null,this.minimumNoteDuration=.2,this.labelSource="names",this.keyToNoteNumberMap=t.QWERTY,this.keyToOscillatorMap=new Map}firstUpdated(t){super.firstUpdated(t),this.addEventListener("keydown",this.keyDownListener),this.addEventListener("keyup",this.keyUpListener),this.addEventListener("blur",this.blurListener)}startOscillator(t){if(this.synthesizer instanceof gt&&!this.keyToOscillatorMap.has(t)){const e=this.keyToNoteNumberMap.get(t);if("number"==typeof e){const i=this.synthesizer.startOscillator(e,this.synthesizer.currentTime);return this.keyToOscillatorMap.set(t,i),this.requestUpdate(),!0}}return!1}stopOscillator(t){const e=this.keyToOscillatorMap.get(t);if(this.synthesizer instanceof gt&&e instanceof bt){const i=this.synthesizer.currentTime+Math.max(0,this.minimumNoteDuration-e.duration);return this.synthesizer.stopOscillator(e,i),this.keyToOscillatorMap.delete(t),this.requestUpdate(),!0}return!1}stopAllOscillators(){if(this.synthesizer instanceof gt){for(const[t,e]of this.keyToOscillatorMap)this.synthesizer.stopOscillator(e),this.keyToOscillatorMap.delete(t);this.requestUpdate()}}keyDownListener(t){t.ctrlKey||t.altKey||t.shiftKey||this.startOscillator(t.key)&&t.preventDefault()}keyUpListener(t){t.ctrlKey||t.altKey||t.shiftKey||this.stopOscillator(t.key)&&t.preventDefault()}blurListener(){this.stopAllOscillators()}renderKey(t,e){const i=2*Math.floor(e/12);let s,n,r=e%12;vt.isNatural(r)?(r>=5&&(r+=1),s=2,n=i):(r>=6&&(r+=1),s=1,n=i+1);const o=`\n\t\t\tgrid-row-start: ${8-i-1};\n\t\t\tgrid-row-end: span ${s};\n\t\t\tgrid-column-start: ${r+1};\n\t\t\tgrid-column-end: span 2;\n\t\t\tz-index: ${n};\n\t\t`;return $`
			<piano-key
				note-number=${e}
				key="${t}"
				.down="${this.keyToOscillatorMap.has(t)}"
				label-source="${this.labelSource}"
				style="${o}"
			></piano-key>
		`}renderKeys(){const t=[];for(const[e,i]of this.keyToNoteNumberMap)t.push(this.renderKey(e,i));return t}render(){return $`
			<div part="grid">
				${this.renderKeys()}
			</div>
		`}}Nt.tagName="piano-keyboard",Nt.dependencies=[wt],Nt.styles=Et,Nt.properties={synthesizer:{type:gt},minimumNoteDuration:{type:Number,attribute:"minimum-note-duration",reflect:!0},labelSource:{type:String,attribute:"label-source",reflect:!0}},customElements.define(Nt.tagName,Nt);var Tt=X`

:host {
	display: block;
}

.grid {
	block-size: 100%;
	display: grid;
	grid-template-rows: auto 1fr;
	inline-size: 100%;
}

.menu {
	color: white;
	display: grid;
	grid-template-columns: auto auto 1fr auto;
	padding-block-end: 0.125em;
	padding-block-start: 0.25em;
	padding-inline: 0.25em;
}

.menu-item {
	all: unset;
	box-sizing: border-box;
	inline-size: 100%;
	padding-block: 0.5em;
	padding-inline: 0.75em;
}

.menu-item:hover {
	background: gray;
	border-radius: 0.25em;
	user-select: none;
}

[part='form'] {
	display: grid;
	gap: 1em;
}

[part='input-group'] {
	display: block;
}

[part='input-label'] {
	display: block;
	margin-block-end: 0.25em;
}

[part~='input'] {
	font-size: 0.875em;
	padding: 0.5em;
}

[part='volume-slider'] {
	inline-size: 10em;
}

piano-keyboard::part(key) {
	background: red;
}

`;class Ct extends dt{constructor(){super(),this.wave="triangle",this.frequencyString="130.8128",this.volume=1,this.gainEnvelope=new yt(0,0,.1,1,.1,.8,.1),this.synthesizer=new gt(this.gainEnvelope,this.wave,this.frequency),this.minimumNoteDuration=.25,this.keyLabelSource="names",this.keyboardRef=new F}get frequency(){return Number(this.frequencyString)}get keyboard(){return this.keyboardRef.value}firstUpdated(t){super.firstUpdated(t),this.keyboard.focus()}updated(t){super.updated(t),t.has("wave")&&(this.synthesizer.wave=this.wave),t.has("volume")&&(this.synthesizer.volume=this.volume),t.has("frequencyString")&&(this.synthesizer.noteZeroFrequency=this.frequency)}setWave(t){this.wave=t.target.value}setFrequency(t){this.frequencyString=t.target.value}setVolume(t){this.volume=Number(t.currentTarget.value)}setKeyLabelSource(t){this.keyLabelSource=t.target.value}renderOption(t){return([e,i])=>$`
			<option
				value="${e}"
				?selected="${e===t}"
			>
				${i}
			</option>
		`}renderSelect(t,e,i){return $`
			<select
				part="input"
				@input="${e}"
			>
				${t.map(this.renderOption(i))}
			</select>
		`}renderInstrumentSettings(){return $`
			<ui-toggle>
				<button class="menu-item">
					🎹
				</button>
				<ui-modal slot="toggled">
					<span slot="title">Instrument</span>
					<div
						part="form"
						slot="body"
					>
						<label part="input-group">
							<span part="input-label">
								Wave
							</span>
							${this.renderSelect(this.constructor.waves,this.setWave,this.wave)}
						</label>
						<label part="input-group">
							<span part="input-label">
								C<sub>0</sub> Frequency
							</span>
							${this.renderSelect(this.constructor.frequencies,this.setFrequency,this.frequencyString)}
						</label>
					</div>
				</ui-modal>
			</ui-toggle>
		`}renderVolumeSlider(){let t;return t=this.volume>=2/3?"🔊":this.volume>0?"🔉":"🔈",$`
			<ui-toggle>
				<button class="menu-item">
					${t}
				</button>
				<ui-modal slot="toggled">
					<span slot="title">Volume</span>
					<div
						part="form"
						slot="body"
					>
						<input
							part="volume-slider"
							type="range"
							min="0" max="1"
							step="0.1"
							.value="${this.volume}"
							@input="${this.setVolume}"
						/>
					</div>
				</ui-modal>
			</ui-toggle>
		`}renderSettings(){return $`
			<ui-toggle>
				<button class="menu-item">⚙️</button>
				<ui-modal
					slot="toggled"
					i0="1" b0="1"
					i1="1" b1="0"
				>
					<span slot="title">Settings</span>
					<div
						part="form"
						slot="body"
					>
						<label part="input-group">
							<span part="input-label">
								Key Labels From
							</span>
							${this.renderSelect(this.constructor.keyLabelSources,this.setKeyLabelSource,this.keyLabelSource)}
						</label>
					</div>
				</ui-modal>
			</ui-toggle>
		`}render(){return $`
			<div class="grid">
				<div class="menu">
					${this.renderInstrumentSettings()}
					${this.renderVolumeSlider()}
					<span aria-hidden="true"></span>
					${this.renderSettings()}
				</div>
				<piano-keyboard
					${j(this.keyboardRef)}
					.synthesizer="${this.synthesizer}"
					minimum-note-duration="${this.minimumNoteDuration}"
					label-source="${this.keyLabelSource}"
					tabindex="0"
				></piano-keyboard>
			</div>
		`}}Ct.tagName="piano-app",Ct.version="1.0.0",Ct.dependencies=[Nt,At,kt],Ct.styles=Tt,Ct.waves=[["sine","Sine"],["square","Square"],["sawtooth","Sawtooth"],["triangle","Triangle"]],Ct.frequencies=[["27.50000","27.50 Hz (A0)"],["32.70320","32.70 Hz (C1)"],["55.00000","55.00 Hz (A1)"],["65.40639","65.40 Hz (C2)"],["110.0000","110.0 Hz (A2)"],["130.8128","130.8 Hz (C3)"],["220.0000","220.0 Hz (A3)"],["261.6256","261.6 Hz (C4)"]],Ct.keyLabelSources=[["names","Note Names"],["key","Keyboard Shortcuts"],["none","None (Hide)"]],Ct.properties={wave:{type:String,reflect:!0},frequencyString:{type:String,attribute:"frequency",reflect:!0},volume:{type:Number,reflect:!0},minimumNoteDuration:{type:Number,attribute:"minimum-note-duration",reflect:!0},keyLabelSource:{type:String,attribute:"key-label-source",reflect:!0}},customElements.define(Ct.tagName,Ct);
//# sourceMappingURL=index.f2eeadf7.js.map
