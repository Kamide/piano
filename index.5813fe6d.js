class t{static QWERTY=new Map([["z",0],[",",1],["x",2],[".",3],["c",4],["v",5],["k",6],["b",7],["l",8],["n",9],[";",10],["m",11],["a",12],["i",13],["s",14],["o",15],["d",16],["f",17],["p",18],["g",19],["[",20],["h",21],["]",22],["j",23],["q",24],["8",25],["w",26],["9",27],["e",28],["r",29],["0",30],["t",31],["-",32],["y",33],["=",34],["u",35],["1",36],["/",37],["2",38],["'",39],["3",40],["4",41],["\\",42],["5",43],["Delete",44],["6",45],["Insert",46],["7",47]])}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var e;const i=window,s=i.trustedTypes,n=s?s.createPolicy("lit-html",{createHTML:t=>t}):void 0,r=`lit$${(Math.random()+"").slice(9)}$`,o="?"+r,l=`<${o}>`,a=document,h=(t="")=>a.createComment(t),c=t=>null===t||"object"!=typeof t&&"function"!=typeof t,d=Array.isArray,u=t=>d(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]),p=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,m=/-->/g,v=/>/g,g=RegExp(">|[ \t\n\f\r](?:([^\\s\"'>=/]+)([ \t\n\f\r]*=[ \t\n\f\r]*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)","g"),b=/'/g,y=/"/g,f=/^(?:script|style|textarea|title)$/i,$=t=>(e,...i)=>({_$litType$:t,strings:e,values:i}),_=$(1),A=($(2),Symbol.for("lit-noChange")),E=Symbol.for("lit-nothing"),S=new WeakMap,k=a.createTreeWalker(a,129,null,!1),w=(t,e)=>{const i=t.length-1,s=[];let o,a=2===e?"<svg>":"",h=p;for(let e=0;e<i;e++){const i=t[e];let n,c,d=-1,u=0;for(;u<i.length&&(h.lastIndex=u,c=h.exec(i),null!==c);)u=h.lastIndex,h===p?"!--"===c[1]?h=m:void 0!==c[1]?h=v:void 0!==c[2]?(f.test(c[2])&&(o=RegExp("</"+c[2],"g")),h=g):void 0!==c[3]&&(h=g):h===g?">"===c[0]?(h=null!=o?o:p,d=-1):void 0===c[1]?d=-2:(d=h.lastIndex-c[2].length,n=c[1],h=void 0===c[3]?g:'"'===c[3]?y:b):h===y||h===b?h=g:h===m||h===v?h=p:(h=g,o=void 0);const $=h===g&&t[e+1].startsWith("/>")?" ":"";a+=h===p?i+l:d>=0?(s.push(n),i.slice(0,d)+"$lit$"+i.slice(d)+r+$):i+r+(-2===d?(s.push(void 0),e):$)}const c=a+(t[i]||"<?>")+(2===e?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==n?n.createHTML(c):c,s]};class T{constructor({strings:t,_$litType$:e},i){let n;this.parts=[];let l=0,a=0;const c=t.length-1,d=this.parts,[u,p]=w(t,e);if(this.el=T.createElement(u,i),k.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(n=k.nextNode())&&d.length<c;){if(1===n.nodeType){if(n.hasAttributes()){const t=[];for(const e of n.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(r)){const i=p[a++];if(t.push(e),void 0!==i){const t=n.getAttribute(i.toLowerCase()+"$lit$").split(r),e=/([.?@])?(.*)/.exec(i);d.push({type:1,index:l,name:e[2],strings:t,ctor:"."===e[1]?z:"?"===e[1]?H:"@"===e[1]?M:x})}else d.push({type:6,index:l})}for(const e of t)n.removeAttribute(e)}if(f.test(n.tagName)){const t=n.textContent.split(r),e=t.length-1;if(e>0){n.textContent=s?s.emptyScript:"";for(let i=0;i<e;i++)n.append(t[i],h()),k.nextNode(),d.push({type:2,index:++l});n.append(t[e],h())}}}else if(8===n.nodeType)if(n.data===o)d.push({type:2,index:l});else{let t=-1;for(;-1!==(t=n.data.indexOf(r,t+1));)d.push({type:7,index:l}),t+=r.length-1}l++}}static createElement(t,e){const i=a.createElement("template");return i.innerHTML=t,i}}function N(t,e,i=t,s){var n,r,o,l;if(e===A)return e;let a=void 0!==s?null===(n=i._$Co)||void 0===n?void 0:n[s]:i._$Cl;const h=c(e)?void 0:e._$litDirective$;return(null==a?void 0:a.constructor)!==h&&(null===(r=null==a?void 0:a._$AO)||void 0===r||r.call(a,!1),void 0===h?a=void 0:(a=new h(t),a._$AT(t,i,s)),void 0!==s?(null!==(o=(l=i)._$Co)&&void 0!==o?o:l._$Co=[])[s]=a:i._$Cl=a),void 0!==a&&(e=N(t,a._$AS(t,e.values),a,s)),e}class C{constructor(t,e){this.u=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(t){var e;const{el:{content:i},parts:s}=this._$AD,n=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:a).importNode(i,!0);k.currentNode=n;let r=k.nextNode(),o=0,l=0,h=s[0];for(;void 0!==h;){if(o===h.index){let e;2===h.type?e=new O(r,r.nextSibling,this,t):1===h.type?e=new h.ctor(r,h.name,h.strings,this,t):6===h.type&&(e=new P(r,this,t)),this.u.push(e),h=s[++l]}o!==(null==h?void 0:h.index)&&(r=k.nextNode(),o++)}return n}p(t){let e=0;for(const i of this.u)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class O{constructor(t,e,i,s){var n;this.type=2,this._$AH=E,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cm=null===(n=null==s?void 0:s.isConnected)||void 0===n||n}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cm}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=N(this,t,e),c(t)?t===E||null==t||""===t?(this._$AH!==E&&this._$AR(),this._$AH=E):t!==this._$AH&&t!==A&&this.g(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):u(t)?this.k(t):this.g(t)}O(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}g(t){this._$AH!==E&&c(this._$AH)?this._$AA.nextSibling.data=t:this.T(a.createTextNode(t)),this._$AH=t}$(t){var e;const{values:i,_$litType$:s}=t,n="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=T.createElement(s.h,this.options)),s);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===n)this._$AH.p(i);else{const t=new C(n,this),e=t.v(this.options);t.p(i),this.T(e),this._$AH=t}}_$AC(t){let e=S.get(t.strings);return void 0===e&&S.set(t.strings,e=new T(t)),e}k(t){d(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const n of t)s===e.length?e.push(i=new O(this.O(h()),this.O(h()),this,this.options)):i=e[s],i._$AI(n),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cm=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class x{constructor(t,e,i,s,n){this.type=1,this._$AH=E,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=n,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=E}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,s){const n=this.strings;let r=!1;if(void 0===n)t=N(this,t,e,0),r=!c(t)||t!==this._$AH&&t!==A,r&&(this._$AH=t);else{const s=t;let o,l;for(t=n[0],o=0;o<n.length-1;o++)l=N(this,s[i+o],e,o),l===A&&(l=this._$AH[o]),r||(r=!c(l)||l!==this._$AH[o]),l===E?t=E:t!==E&&(t+=(null!=l?l:"")+n[o+1]),this._$AH[o]=l}r&&!s&&this.j(t)}j(t){t===E?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class z extends x{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===E?void 0:t}}const U=s?s.emptyScript:"";class H extends x{constructor(){super(...arguments),this.type=4}j(t){t&&t!==E?this.element.setAttribute(this.name,U):this.element.removeAttribute(this.name)}}class M extends x{constructor(t,e,i,s,n){super(t,e,i,s,n),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=N(this,t,e,0))&&void 0!==i?i:E)===A)return;const s=this._$AH,n=t===E&&s!==E||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,r=t!==E&&(s===E||n);n&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}class P{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){N(this,t)}}const L={P:"$lit$",A:r,M:o,C:1,L:w,R:C,D:u,V:N,I:O,H:x,N:H,U:M,B:z,F:P},R=i.litHtmlPolyfillSupport;null==R||R(T,O),(null!==(e=i.litHtmlVersions)&&void 0!==e?e:i.litHtmlVersions=[]).push("2.4.0");const q=(t,e,i)=>{var s,n;const r=null!==(s=null==i?void 0:i.renderBefore)&&void 0!==s?s:e;let o=r._$litPart$;if(void 0===o){const t=null!==(n=null==i?void 0:i.renderBefore)&&void 0!==n?n:null;r._$litPart$=o=new O(e.insertBefore(h(),t),t,void 0,null!=i?i:{})}return o._$AI(t),o},{I:D}=L,I={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},B=t=>(...e)=>({_$litDirective$:t,values:e});
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class V{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const j=(t,e)=>{var i,s;const n=t._$AN;if(void 0===n)return!1;for(const t of n)null===(s=(i=t)._$AO)||void 0===s||s.call(i,e,!1),j(t,e);return!0},K=t=>{let e,i;do{if(void 0===(e=t._$AM))break;i=e._$AN,i.delete(t),t=e}while(0===(null==i?void 0:i.size))},W=t=>{for(let e;e=t._$AM;t=e){let i=e._$AN;if(void 0===i)e._$AN=i=new Set;else if(i.has(t))break;i.add(t),Z(e)}};function Y(t){void 0!==this._$AN?(K(this),this._$AM=t,W(this)):this._$AM=t}function F(t,e=!1,i=0){const s=this._$AH,n=this._$AN;if(void 0!==n&&0!==n.size)if(e)if(Array.isArray(s))for(let t=i;t<s.length;t++)j(s[t],!1),K(s[t]);else null!=s&&(j(s,!1),K(s));else j(this,t)}const Z=t=>{var e,i,s,n;t.type==I.CHILD&&(null!==(e=(s=t)._$AP)&&void 0!==e||(s._$AP=F),null!==(i=(n=t)._$AQ)&&void 0!==i||(n._$AQ=Y))};class G extends V{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,i){super._$AT(t,e,i),W(this),this.isConnected=t._$AU}_$AO(t,e=!0){var i,s;t!==this.isConnected&&(this.isConnected=t,t?null===(i=this.reconnected)||void 0===i||i.call(this):null===(s=this.disconnected)||void 0===s||s.call(this)),e&&(j(this,t),K(this))}setValue(t){if(void 0===this._$Ct.strings)this._$Ct._$AI(t,this);else{const e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}}
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Q{}const J=new WeakMap,X=B(class extends G{render(t){return E}update(t,[e]){var i;const s=e!==this.Y;return s&&void 0!==this.Y&&this.rt(void 0),(s||this.lt!==this.ct)&&(this.Y=e,this.dt=null===(i=t.options)||void 0===i?void 0:i.host,this.rt(this.ct=t.element)),E}rt(t){var e;if("function"==typeof this.Y){const i=null!==(e=this.dt)&&void 0!==e?e:globalThis;let s=J.get(i);void 0===s&&(s=new WeakMap,J.set(i,s)),void 0!==s.get(this.Y)&&this.Y.call(this.dt,void 0),s.set(this.Y,t),void 0!==t&&this.Y.call(this.dt,t)}else this.Y.value=t}get lt(){var t,e,i;return"function"==typeof this.Y?null===(e=J.get(null!==(t=this.dt)&&void 0!==t?t:globalThis))||void 0===e?void 0:e.get(this.Y):null===(i=this.Y)||void 0===i?void 0:i.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),tt=window,et=tt.ShadowRoot&&(void 0===tt.ShadyCSS||tt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,it=Symbol(),st=new WeakMap;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class nt{constructor(t,e,i){if(this._$cssResult$=!0,i!==it)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(et&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=st.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&st.set(e,t))}return t}toString(){return this.cssText}}const rt=(t,...e)=>{const i=1===t.length?t[0]:e.reduce(((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1]),t[0]);return new nt(i,t,it)},ot=(t,e)=>{et?t.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):e.forEach((e=>{const i=document.createElement("style"),s=tt.litNonce;void 0!==s&&i.setAttribute("nonce",s),i.textContent=e.cssText,t.appendChild(i)}))},lt=et?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new nt("string"==typeof t?t:t+"",void 0,it))(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var at;const ht=window,ct=ht.trustedTypes,dt=ct?ct.emptyScript:"",ut=ht.reactiveElementPolyfillSupport,pt={toAttribute(t,e){switch(e){case Boolean:t=t?dt:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},mt=(t,e)=>e!==t&&(e==e||t==t),vt={attribute:!0,type:String,converter:pt,reflect:!1,hasChanged:mt};class gt extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;null!==(e=this.h)&&void 0!==e||(this.h=[]),this.h.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,i)=>{const s=this._$Ep(i,e);void 0!==s&&(this._$Ev.set(s,i),t.push(s))})),t}static createProperty(t,e=vt){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);void 0!==s&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){const n=this[t];this[e]=s,this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||vt}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(lt(t))}else void 0!==t&&e.push(lt(t));return e}static _$Ep(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,i;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const e=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return ot(e,this.constructor.elementStyles),e}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=vt){var s;const n=this.constructor._$Ep(t,i);if(void 0!==n&&!0===i.reflect){const r=(void 0!==(null===(s=i.converter)||void 0===s?void 0:s.toAttribute)?i.converter:pt).toAttribute(e,i.type);this._$El=t,null==r?this.removeAttribute(n):this.setAttribute(n,r),this._$El=null}}_$AK(t,e){var i;const s=this.constructor,n=s._$Ev.get(t);if(void 0!==n&&this._$El!==n){const t=s.getPropertyOptions(n),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(i=t.converter)||void 0===i?void 0:i.fromAttribute)?t.converter:pt;this._$El=n,this[n]=r.fromAttribute(e,t.type),this._$El=null}}requestUpdate(t,e,i){let s=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||mt)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,i))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,e)=>this[e]=t)),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(i)):this._$Ek()}catch(t){throw e=!1,this._$Ek(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$ES)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$EO(e,this[e],t))),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var bt,yt;gt.finalized=!0,gt.elementProperties=new Map,gt.elementStyles=[],gt.shadowRootOptions={mode:"open"},null==ut||ut({ReactiveElement:gt}),(null!==(at=ht.reactiveElementVersions)&&void 0!==at?at:ht.reactiveElementVersions=[]).push("1.4.1");class ft extends gt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=q(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return A}}ft.finalized=!0,ft._$litElement$=!0,null===(bt=globalThis.litElementHydrateSupport)||void 0===bt||bt.call(globalThis,{LitElement:ft});const $t=globalThis.litElementPolyfillSupport;null==$t||$t({LitElement:ft});(null!==(yt=globalThis.litElementVersions)&&void 0!==yt?yt:globalThis.litElementVersions=[]).push("3.2.2");class _t{constructor(t){this.context=t,this.gainNode=new GainNode(t)}get currentTime(){return this.context.currentTime}get volume(){return this.gainNode.gain.value}set volume(t){this.gainNode.gain.setValueAtTime(t,this.currentTime)}}class At{static naturals=[0,2,4,5,7,9,11];static accidentals=[1,3,6,8,10];static names=[["C"],["C♯","D♭"],["D"],["D♯","E♭"],["E"],["F"],["F♯","G♭"],["G"],["G♯","A♭"],["A"],["A♯","B♭"],["B"]];static isNatural(t){return this.naturals.includes(Et(t,12))}static isAccidental(t){return this.accidentals.includes(Et(t,12))}static namesOf(t){return this.names[Et(t,12)]}static frequencyOf(t,e){return t*Math.pow(2,e/12)}constructor(t,e=0){this.noteZeroFrequency=t,this.noteNumber=e}get frequency(){return this.constructor.frequencyOf(this.noteZeroFrequency,this.noteNumber)}get names(){return this.constructor.namesOf(this.noteNumber)}plus(t){return new this.constructor(this.noteZeroFrequency,t)}}function Et(t,e){return(t%e+e)%e}class St extends _t{constructor(t,e,i,s,n){super(t),this.gainEnvelope=i,this.oscillator=new OscillatorNode(t),this.wave=s,this.note=n,this.startTime=-1,this.stopTime=-1,this.gainNode.connect(e),this.oscillator.connect(this.gainNode)}set wave(t){this._wave=t,this._wave instanceof PeriodicWave?this.oscillator.setPeriodicWave(this._wave):this.oscillator.type=this._wave}get wave(){return this._wave}get note(){return this._note}set note(t){this._note=t,this.oscillator.frequency.setValueAtTime(this._note.frequency,this.currentTime)}get started(){return this.startTime>=0}get stopped(){return this.stopTime>=0}get duration(){if(this.started){return(this.stopped?this.stopTime:this.currentTime)-this.startTime}return-1}start(t){this.startTime=t,this.gainEnvelope.gate(this.gainNode.gain,this.startTime),this.oscillator.start(this.startTime)}stop(t){this.stopTime=t,this.gainEnvelope.ungate(this.gainNode.gain,this.stopTime),this.oscillator.stop(Math.ceil(this.stopTime+this.gainEnvelope.releaseTime)+1)}onStop(t){this.oscillator.addEventListener("ended",t)}}class kt extends _t{constructor(t,e,i){super(new AudioContext),this.compressor=new DynamicsCompressorNode(this.context),this.gainEnvelope=t,this.wave=e,this.noteZero=new At(i),this.oscillators=[],this.compressor.connect(this.context.destination),this.gainNode.connect(this.compressor)}startOscillator(t,e){e||=this.currentTime;const i=new St(this.context,this.gainNode,this.gainEnvelope,this.wave,this.noteZero.plus(t));return this.oscillators.push(i),i.start(e),i}get noteZeroFrequency(){return this.noteZero.noteZeroFrequency}set noteZeroFrequency(t){this.noteZero.noteZeroFrequency=t}stopOscillator(t,e){this.oscillators.includes(t)&&(e??=this.currentTime,t.onStop((()=>this.removeOscillator(t))),t.stop(e))}removeOscillator(t){const e=this.oscillators.indexOf(t);e>=0&&this.oscillators.splice(e,1)}}class wt{constructor(t=0,e=0,i=0,s=1,n=0,r=1,o=0){this.delayTime=t,this.minimumAmplitude=e,this.attackTime=i,this.maximumAmplitude=s,this.decayTime=n,this.sustainAmplitude=r,this.releaseTime=o}delay(t,e,i=1){t.cancelScheduledValues(e),t.setValueAtTime(this.minimumAmplitude*i,e)}attack(t,e,i=1){t.cancelScheduledValues(e),t.setTargetAtTime(this.maximumAmplitude*i,e,this.attackTime)}decay(t,e,i=1){t.cancelScheduledValues(e),t.setTargetAtTime(this.sustainAmplitude*i,e,this.decayTime)}release(t,e,i=1){t.cancelScheduledValues(e),t.setTargetAtTime(this.minimumAmplitude*i,e,this.releaseTime)}gate(t,e,i=1){this.delay(t,e,i),e+=this.delayTime,this.attack(t,e,i),e+=this.attackTime,this.decay(t,e,i)}ungate(t,e,i=1){this.release(t,e,i)}}function Tt(t,e,i){return{inline:t.inlineStart+(t.inlineEnd-t.inlineStart)*e,block:t.blockStart+(t.blockEnd-t.blockStart)*i}}function Nt(t){const e=getComputedStyle(t),{writingMode:i,direction:s}=e;let n,r,o,l,a,h,c,d;return i.startsWith("horizontal")?(n="inline",c="inlineSize",r="block",d="blockSize","ltr"===s?(o="inlineStart",l="inlineEnd"):(l="inlineStart",o="inlineEnd"),i.endsWith("-tb")?(a="blockStart",h="blockEnd"):(h="blockStart",a="blockEnd")):(r="inline",d="inlineSize",n="block",c="blockSize","ltr"===s?(a="inlineStart",h="inlineEnd"):(h="inlineStart",a="inlineEnd"),i.endsWith("-rl")?(l="blockStart",o="blockEnd"):(o="blockStart",l="blockEnd")),{x:n,y:r,left:o,right:l,top:a,bottom:h,width:c,height:d}}function Ct(t){const e=Nt(t),i=t.getBoundingClientRect(),s={physicalRect:i,writingDirection:e};for(const t of["left","right","top","bottom","width","height"])s[e[t]]=i[t];return s}class Ot extends ft{static tagName="ui-modal";static properties={closeEvent:{type:String,attribute:"close-event",reflect:!0},parent:{type:Element},parentInlineOffset:{type:Number,attribute:"i0",reflect:!0},parentBlockOffset:{type:Number,attribute:"b0",reflect:!0},inlineOffset:{type:Number,attribute:"i1",reflect:!0},blockOffset:{type:Number,attribute:"b1",reflect:!0}};constructor(){super(),this.closeEvent="close",this.parent=this.parentElement||document.body,this.parentInlineOffset=0,this.parentBlockOffset=1,this.inlineOffset=0,this.blockOffset=0,this.resizeObserver=new ResizeObserver(this.reposition)}disconnectedCallback(){this.resizeObserver.unobserve(this.parent)}firstUpdated(t){super.firstUpdated(t),this.resizeObserver.observe(this),this.resizeObserver.observe(this.parent)}updated(t){super.updated(t),this.reposition()}reposition=()=>{if(this.parent instanceof Element){this.style.transform="";const t=Ct(document.body),e=Ct(this.parent),i=Ct(this),{inline:s,block:n}=Tt(e,this.parentInlineOffset,this.parentBlockOffset),{inline:r,block:o}=Tt(i,this.inlineOffset,this.blockOffset);let l=s-r,a=n-o;i.inlineEnd+l>t.inlineEnd&&(l=t.inlineEnd-i.inlineEnd),i.blockEnd+a>t.blockEnd&&(a=t.blockEnd-i.blockEnd),i.inlineStart+l<t.inlineStart&&(l=-i.inlineStart),i.blockStart+a<t.blockStart&&(a=-i.blockStart);const h="inline"===i.writingDirection.x?"X":"Y",c="block"===i.writingDirection.y?"Y":"X";this.style.transform=`translate${h}(${l}px) translate${c}(${a}px)`}};close(t){1===t.buttons&&this.closeEvent.length>0&&this.dispatchEvent(new CustomEvent(this.closeEvent,{bubbles:!0}))}render(){return _`
			<div part='grid'>
				<div part='head'>
					<span part='title'>
						<slot name='title'></slot>
					</span>
					<button part='close-button' type='button' @pointerdown='${this.close}'>
						<slot name='close-button'>✖</slot>
					</button>
				</div>
				<div part='body'>
					<slot name='body'></slot>
				</div>
			</div>
		`}static styles=rt`
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
	`}customElements.define(Ot.tagName,Ot);class xt extends ft{static tagName="ui-toggle";static properties={visible:{type:Boolean,reflect:!0}};constructor(){super(),this.visible=!1}firstUpdated(t){super.firstUpdated(t),this.addEventListener("close",this.closeHandler)}checkPath=t=>{!t.composedPath().includes(this)&&this.toggle()};toggle(t){this.visible=t??!this.visible,this.visible?document.body.addEventListener("pointerdown",this.checkPath):document.body.removeEventListener("pointerdown",this.checkPath)}close(){this.toggle(!1)}clickHandler(){this.toggle()}closeHandler(t){t.stopPropagation(),this.close()}render(){return _`
			<slot @click='${this.clickHandler}'></slot>
			${this.visible?_`<slot name='toggled'></slot>`:E}
		`}}customElements.define(xt.tagName,xt);
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const zt=B(class extends V{constructor(t){var e;if(super(t),t.type!==I.ATTRIBUTE||"style"!==t.name||(null===(e=t.strings)||void 0===e?void 0:e.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce(((e,i)=>{const s=t[i];return null==s?e:e+`${i=i.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${s};`}),"")}update(t,[e]){const{style:i}=t.element;if(void 0===this.vt){this.vt=new Set;for(const t in e)this.vt.add(t);return this.render(e)}this.vt.forEach((t=>{null==e[t]&&(this.vt.delete(t),t.includes("-")?i.removeProperty(t):i[t]="")}));for(const t in e){const s=e[t];null!=s&&(this.vt.add(t),t.includes("-")?i.setProperty(t,s):i[t]=s)}return A}});class Ut extends ft{static tagName="piano-key";static properties={noteNumber:{type:Number,attribute:"note-number",reflect:!0},key:{type:String,reflect:!0},labelSource:{type:String,attribute:"label-source",reflect:!0}};constructor(){super(),this.noteNumber=0,this.key="",this.labelSource="names"}firstUpdated(t){super.firstUpdated(t)}get natural(){return At.isNatural(this.noteNumber)}get accidental(){return At.isAccidental(this.noteNumber)}get names(){return At.namesOf(this.noteNumber)}start(t){1===t.buttons&&(t.currentTarget.focus(),t.target.releasePointerCapture(t.pointerId),this.dispatchEvent(new KeyboardEvent("keydown",{composed:!0,key:this.key})))}stop(){this.dispatchEvent(new KeyboardEvent("keyup",{composed:!0,key:this.key}))}renderNames(){return this.names.map(this.renderLabel)}renderLabel(t){return _`
			<span part='label'>
				${t}
			</span>
		`}renderLabels(){switch(this.labelSource){case"names":return this.renderNames();case"key":return this.renderLabel(this.key.substring(0,3));default:return""}}render(){return _`
			<button class='key ${this.natural?"natural":"accidental"}' type='button' tabindex='-1'
				@pointerdown='${this.start}'
				@pointerup='${this.stop}'
				@pointerenter='${this.start}'
				@pointerleave='${this.stop}'
			>
				<span part='labels'>
					${this.renderLabels()}
				</span>
			</button>
		`}static styles=rt`
		:host {
			display: block;
		}

		.key {
			all: unset;
			user-select: none;
		}

		.key, [part='labels'] {
			block-size: 100%;
			box-sizing: border-box;
			inline-size: 100%;
		}

		.natural {
			--background: white;
			--border-color: hsl(0, 0%, 30%);
			--font-size: 1em;
			--text-color: black;
		}

		.accidental {
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
			justify-items: center;
			padding: 0.5em;
			pointer-events: none;
			transition: transform 0.125s;
		}

		:host([down]) [part='labels'] {
			transform: translateY(0.5em);
			transition: none;
		}
	`}customElements.define(Ut.tagName,Ut);class Ht extends ft{static tagName="piano-keyboard";static dependencies=[Ut];static properties={synthesizer:{type:kt},minimumNoteDuration:{type:Number,attribute:"minimum-note-duration",reflect:!0},labelSource:{type:String,attribute:"label-source",reflect:!0}};constructor(){super(),this.synthesizer=null,this.minimumNoteDuration=.2,this.labelSource="names",this.keyToNoteNumberMap=t.QWERTY,this.keyToOscillatorMap=new Map}firstUpdated(t){super.firstUpdated(t),this.addEventListener("keydown",this.keyDownListener),this.addEventListener("keyup",this.keyUpListener),this.addEventListener("blur",this.blurListener)}startOscillator(t){if(this.synthesizer instanceof kt&&!this.keyToOscillatorMap.has(t)){const e=this.keyToNoteNumberMap.get(t);if("number"==typeof e){const i=this.synthesizer.startOscillator(e,this.synthesizer.currentTime);return this.keyToOscillatorMap.set(t,i),this.requestUpdate(),!0}}return!1}stopOscillator(t){const e=this.keyToOscillatorMap.get(t);if(this.synthesizer instanceof kt&&e instanceof St){const i=this.synthesizer.currentTime+Math.max(0,this.minimumNoteDuration-e.duration);return this.synthesizer.stopOscillator(e,i),this.keyToOscillatorMap.delete(t),this.requestUpdate(),!0}return!1}stopAllOscillators(){if(this.synthesizer instanceof kt){for(const[t,e]of this.keyToOscillatorMap)this.synthesizer.stopOscillator(e),this.keyToOscillatorMap.delete(t);this.requestUpdate()}}keyDownListener(t){t.ctrlKey||t.altKey||t.shiftKey||this.startOscillator(t.key)&&t.preventDefault()}keyUpListener(t){t.ctrlKey||t.altKey||t.shiftKey||this.stopOscillator(t.key)&&t.preventDefault()}blurListener(){this.stopAllOscillators()}renderKey(t,e){const i=2*Math.floor(e/12);let s,n,r=e%12;At.isNatural(r)?(r>=5&&(r+=1),s=2,n=i):(r>=6&&(r+=1),s=1,n=i+1);const o=zt({gridRowStart:String(8-i-1),gridRowEnd:`span ${s}`,gridColumnStart:String(r+1),gridColumnEnd:"span 2",zIndex:String(n)});return _`
			<piano-key note-number=${e} key='${t}' ?down='${this.keyToOscillatorMap.has(t)}' label-source='${this.labelSource}' style='${o}'></piano-key>
		`}renderKeys(){const t=[];for(const[e,i]of this.keyToNoteNumberMap)t.push(this.renderKey(e,i));return t}render(){return _`
			<div part='grid'>
				${this.renderKeys()}
			</div>
		`}static styles=rt`
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
	`}customElements.define(Ht.tagName,Ht);const Mt=Object.freeze(new wt(0,0,.1,1,.1,.8,.1));class Pt extends ft{static tagName="piano-app";static version="1.1.3";static dependencies=[Ht,Ot,xt];static waves=[["sine","Sine"],["square","Square"],["sawtooth","Sawtooth"],["triangle","Triangle"],["flute","Flute"]];static frequencies=[["27.50000","27.50 Hz (A0)"],["32.70320","32.70 Hz (C1)"],["55.00000","55.00 Hz (A1)"],["65.40639","65.40 Hz (C2)"],["110.0000","110.0 Hz (A2)"],["130.8128","130.8 Hz (C3)"],["220.0000","220.0 Hz (A3)"],["261.6256","261.6 Hz (C4)"]];static keyLabelSources=[["names","Note Names"],["key","Keyboard Shortcuts"],["none","None (Hide)"]];static properties={wave:{type:String,reflect:!0},frequencyString:{type:String,attribute:"frequency",reflect:!0},volume:{type:Number,reflect:!0},minimumNoteDuration:{type:Number,attribute:"minimum-note-duration",reflect:!0},keyLabelSource:{type:String,attribute:"key-label-source",reflect:!0}};constructor(){super(),this.wave="triangle",this.frequencyString="130.8128",this.volume=1,this.gainEnvelope=Mt,this.synthesizer=new kt(this.gainEnvelope,this.wave,this.frequency),this.minimumNoteDuration=.25,this.keyLabelSource="names",this.keyboardRef=new Q}get frequency(){return Number(this.frequencyString)}get keyboard(){return this.keyboardRef.value}firstUpdated(t){super.firstUpdated(t),this.keyboard.focus()}updated(t){super.updated(t),t.has("wave")&&("flute"===this.wave?(this.synthesizer.wave="triangle",this.gainEnvelope=new wt(.1,0,.1,.8,.1,.4,.15),this.synthesizer.gainEnvelope=this.gainEnvelope):(this.synthesizer.wave=this.wave,this.gainEnvelope=Mt,this.synthesizer.gainEnvelope=this.gainEnvelope)),t.has("volume")&&(this.synthesizer.volume=this.volume),t.has("frequencyString")&&(this.synthesizer.noteZeroFrequency=this.frequency)}setWave(t){this.wave=t.target.value}setFrequency(t){this.frequencyString=t.target.value}setVolume(t){this.volume=Number(t.currentTarget.value)}setKeyLabelSource(t){this.keyLabelSource=t.target.value}renderOption(t){return([e,i])=>_`
			<option value='${e}' ?selected='${e===t}'>
				${i}
			</option>
		`}renderSelect(t,e,i){return _`
			<select part='input' @input='${e}'>
				${t.map(this.renderOption(i))}
			</select>
		`}renderInstrumentSettings(){return _`
			<ui-toggle>
				<button type='button' class='menu-item'>
					🎹
				</button>
				<ui-modal slot='toggled'>
					<span slot='title'>Instrument</span>
					<div part='form' slot='body'>
						<label part='input-group'>
							<span part='input-label'>
								Wave
							</span>
							${this.renderSelect(this.constructor.waves,this.setWave,this.wave)}
						</label>
						<label part='input-group'>
							<span part='input-label'>
								C<sub>0</sub> Frequency
							</span>
							${this.renderSelect(this.constructor.frequencies,this.setFrequency,this.frequencyString)}
						</label>
					</div>
				</ui-modal>
			</ui-toggle>
		`}renderVolumeSlider(){let t;return t=this.volume>=2/3?"🔊":this.volume>0?"🔉":"🔈",_`
			<ui-toggle>
				<button type='button' class='menu-item'>
					${t}
				</button>
				<ui-modal slot='toggled'>
					<span slot='title'>Volume</span>
					<div part='form' slot='body'>
						<input part='volume-slider' type='range' min='0' max='1' step='0.1' .value='${this.volume}'
							@input='${this.setVolume}' />
					</div>
				</ui-modal>
			</ui-toggle>
		`}renderSettings(){return _`
			<ui-toggle>
				<button type='button' class='menu-item'>⚙️</button>
				<ui-modal slot='toggled' i0='1' b0='1' i1='1' b1='0'>
					<span slot='title'>Settings</span>
					<div part='form' slot='body'>
						<label part='input-group'>
							<span part='input-label'>
								Key Labels From
							</span>
							${this.renderSelect(this.constructor.keyLabelSources,this.setKeyLabelSource,this.keyLabelSource)}
						</label>
					</div>
				</ui-modal>
			</ui-toggle>
		`}render(){return _`
			<div class='grid'>
				<div class='menu'>
					${this.renderInstrumentSettings()}
					${this.renderVolumeSlider()}
					<span aria-hidden='true'></span>
					${this.renderSettings()}
				</div>
				<piano-keyboard ${X(this.keyboardRef)} .synthesizer='${this.synthesizer}'
					minimum-note-duration='${this.minimumNoteDuration}' label-source='${this.keyLabelSource}' tabindex='0'>
				</piano-keyboard>
			</div>
		`}static styles=rt`
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

		[part='input'] {
			font-size: 0.875em;
			padding: 0.5em;
		}

		[part='volume-slider'] {
			inline-size: 10em;
		}
	`}customElements.define(Pt.tagName,Pt);
//# sourceMappingURL=index.5813fe6d.js.map
