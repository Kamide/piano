function t(t,e){return Object.keys(e).forEach(function(i){"default"===i||"__esModule"===i||t.hasOwnProperty(i)||Object.defineProperty(t,i,{enumerable:!0,get:function(){return e[i]}})}),t}function e(t,e,i,s){Object.defineProperty(t,e,{get:i,set:s,enumerable:!0,configurable:!0})}var i,s,r,n,o={},l={};e(l,"KeyToNoteNumber",()=>a);class a{static QWERTY=new Map([["z",0],[",",1],["x",2],[".",3],["c",4],["v",5],["k",6],["b",7],["l",8],["n",9],[";",10],["m",11],["a",12],["i",13],["s",14],["o",15],["d",16],["f",17],["p",18],["g",19],["[",20],["h",21],["]",22],["j",23],["q",24],["8",25],["w",26],["9",27],["e",28],["r",29],["0",30],["t",31],["-",32],["y",33],["=",34],["u",35],["1",36],["/",37],["2",38],["'",39],["3",40],["4",41],["\\",42],["5",43],["Delete",44],["6",45],["Insert",46],["7",47]])}var h={};e(h,"PianoApp",()=>tZ);const u=window,d=u.trustedTypes,c=d?d.createPolicy("lit-html",{createHTML:t=>t}):void 0,p="$lit$",m=`lit$${(Math.random()+"").slice(9)}$`,v="?"+m,b=`<${v}>`,g=document,y=()=>g.createComment(""),f=t=>null===t||"object"!=typeof t&&"function"!=typeof t,$=Array.isArray,_=t=>$(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]),A="[ 	\n\f\r]",S=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,k=/-->/g,E=/>/g,w=RegExp(`>|${A}(?:([^\\s"'>=/]+)(${A}*=${A}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),N=/'/g,T=/"/g,C=/^(?:script|style|textarea|title)$/i,O=t=>(e,...i)=>({_$litType$:t,strings:e,values:i}),x=O(1),z=(O(2),Symbol.for("lit-noChange")),U=Symbol.for("lit-nothing"),P=new WeakMap,M=g.createTreeWalker(g,129,null,!1);function H(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==c?c.createHTML(e):e}const L=(t,e)=>{let i=t.length-1,s=[],r,n=2===e?"<svg>":"",o=S;for(let e=0;e<i;e++){let i=t[e],l,a,h=-1,u=0;for(;u<i.length&&(o.lastIndex=u,null!==(a=o.exec(i)));)u=o.lastIndex,o===S?"!--"===a[1]?o=k:void 0!==a[1]?o=E:void 0!==a[2]?(C.test(a[2])&&(r=RegExp("</"+a[2],"g")),o=w):void 0!==a[3]&&(o=w):o===w?">"===a[0]?(o=null!=r?r:S,h=-1):void 0===a[1]?h=-2:(h=o.lastIndex-a[2].length,l=a[1],o=void 0===a[3]?w:'"'===a[3]?T:N):o===T||o===N?o=w:o===k||o===E?o=S:(o=w,r=void 0);let d=o===w&&t[e+1].startsWith("/>")?" ":"";n+=o===S?i+b:h>=0?(s.push(l),i.slice(0,h)+p+i.slice(h)+m+d):i+m+(-2===h?(s.push(void 0),e):d)}return[H(t,n+(t[i]||"<?>")+(2===e?"</svg>":"")),s]};class D{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let r=0,n=0,o=t.length-1,l=this.parts,[a,h]=L(t,e);if(this.el=D.createElement(a,i),M.currentNode=this.el.content,2===e){let t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(s=M.nextNode())&&l.length<o;){if(1===s.nodeType){if(s.hasAttributes()){let t=[];for(let e of s.getAttributeNames())if(e.endsWith(p)||e.startsWith(m)){let i=h[n++];if(t.push(e),void 0!==i){let t=s.getAttribute(i.toLowerCase()+p).split(m),e=/([.?@])?(.*)/.exec(i);l.push({type:1,index:r,name:e[2],strings:t,ctor:"."===e[1]?j:"?"===e[1]?B:"@"===e[1]?W:V})}else l.push({type:6,index:r})}for(let e of t)s.removeAttribute(e)}if(C.test(s.tagName)){let t=s.textContent.split(m),e=t.length-1;if(e>0){s.textContent=d?d.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],y()),M.nextNode(),l.push({type:2,index:++r});s.append(t[e],y())}}}else if(8===s.nodeType){if(s.data===v)l.push({type:2,index:r});else{let t=-1;for(;-1!==(t=s.data.indexOf(m,t+1));)l.push({type:7,index:r}),t+=m.length-1}}r++}}static createElement(t,e){let i=g.createElement("template");return i.innerHTML=t,i}}function R(t,e,i=t,s){var r,n,o;if(e===z)return e;let l=void 0!==s?null===(r=i._$Co)||void 0===r?void 0:r[s]:i._$Cl,a=f(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==a&&(null===(n=null==l?void 0:l._$AO)||void 0===n||n.call(l,!1),void 0===a?l=void 0:(l=new a(t))._$AT(t,i,s),void 0!==s?(null!==(o=i._$Co)&&void 0!==o?o:i._$Co=[])[s]=l:i._$Cl=l),void 0!==l&&(e=R(t,l._$AS(t,e.values),l,s)),e}class q{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;let{el:{content:i},parts:s}=this._$AD,r=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:g).importNode(i,!0);M.currentNode=r;let n=M.nextNode(),o=0,l=0,a=s[0];for(;void 0!==a;){if(o===a.index){let e;2===a.type?e=new I(n,n.nextSibling,this,t):1===a.type?e=new a.ctor(n,a.name,a.strings,this,t):6===a.type&&(e=new F(n,this,t)),this._$AV.push(e),a=s[++l]}o!==(null==a?void 0:a.index)&&(n=M.nextNode(),o++)}return M.currentNode=g,r}v(t){let e=0;for(let i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class I{constructor(t,e,i,s){var r;this.type=2,this._$AH=U,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cp=null===(r=null==s?void 0:s.isConnected)||void 0===r||r}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return void 0!==e&&11===(null==t?void 0:t.nodeType)&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){f(t=R(this,t,e))?t===U||null==t||""===t?(this._$AH!==U&&this._$AR(),this._$AH=U):t!==this._$AH&&t!==z&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):_(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==U&&f(this._$AH)?this._$AA.nextSibling.data=t:this.$(g.createTextNode(t)),this._$AH=t}g(t){var e;let{values:i,_$litType$:s}=t,r="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=D.createElement(H(s.h,s.h[0]),this.options)),s);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===r)this._$AH.v(i);else{let t=new q(r,this),e=t.u(this.options);t.v(i),this.$(e),this._$AH=t}}_$AC(t){let e=P.get(t.strings);return void 0===e&&P.set(t.strings,e=new D(t)),e}T(t){$(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,i,s=0;for(let r of t)s===e.length?e.push(i=new I(this.k(y()),this.k(y()),this,this.options)):i=e[s],i._$AI(r),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){let e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cp=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class V{constructor(t,e,i,s,r){this.type=1,this._$AH=U,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=r,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=U}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,s){let r=this.strings,n=!1;if(void 0===r)(n=!f(t=R(this,t,e,0))||t!==this._$AH&&t!==z)&&(this._$AH=t);else{let s,o;let l=t;for(t=r[0],s=0;s<r.length-1;s++)(o=R(this,l[i+s],e,s))===z&&(o=this._$AH[s]),n||(n=!f(o)||o!==this._$AH[s]),o===U?t=U:t!==U&&(t+=(null!=o?o:"")+r[s+1]),this._$AH[s]=o}n&&!s&&this.j(t)}j(t){t===U?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class j extends V{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===U?void 0:t}}const K=d?d.emptyScript:"";class B extends V{constructor(){super(...arguments),this.type=4}j(t){t&&t!==U?this.element.setAttribute(this.name,K):this.element.removeAttribute(this.name)}}class W extends V{constructor(t,e,i,s,r){super(t,e,i,s,r),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=R(this,t,e,0))&&void 0!==i?i:U)===z)return;let s=this._$AH,r=t===U&&s!==U||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,n=t!==U&&(s===U||r);r&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}class F{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){R(this,t)}}const Z=u.litHtmlPolyfillSupport;null==Z||Z(D,I),(null!==(i=u.litHtmlVersions)&&void 0!==i?i:u.litHtmlVersions=[]).push("2.7.5");const G=(t,e,i)=>{var s,r;let n=null!==(s=null==i?void 0:i.renderBefore)&&void 0!==s?s:e,o=n._$litPart$;if(void 0===o){let t=null!==(r=null==i?void 0:i.renderBefore)&&void 0!==r?r:null;n._$litPart$=o=new I(e.insertBefore(y(),t),t,void 0,null!=i?i:{})}return o._$AI(t),o},{I:Y}={O:p,P:m,A:v,C:1,M:L,L:q,D:_,R:R,I:I,V:V,H:B,N:W,U:j,F:F},Q=t=>void 0===t.strings,J=t=>(...e)=>({_$litDirective$:t,values:e});class X{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}const tt=(t,e)=>{var i;let s=t._$AN;if(void 0===s)return!1;for(let t of s)null===(i=t._$AO)||void 0===i||i.call(t,e,!1),tt(t,e);return!0},te=t=>{let e,i;do{if(void 0===(e=t._$AM))break;(i=e._$AN).delete(t),t=e}while(0===(null==i?void 0:i.size))},ti=t=>{for(let e;e=t._$AM;t=e){let i=e._$AN;if(void 0===i)e._$AN=i=new Set;else if(i.has(t))break;i.add(t),tn(e)}};function ts(t){void 0!==this._$AN?(te(this),this._$AM=t,ti(this)):this._$AM=t}function tr(t,e=!1,i=0){let s=this._$AH,r=this._$AN;if(void 0!==r&&0!==r.size){if(e){if(Array.isArray(s))for(let t=i;t<s.length;t++)tt(s[t],!1),te(s[t]);else null!=s&&(tt(s,!1),te(s))}else tt(this,t)}}const tn=t=>{var e,i;2==t.type&&(null!==(e=t._$AP)&&void 0!==e||(t._$AP=tr),null!==(i=t._$AQ)&&void 0!==i||(t._$AQ=ts))};class to extends X{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,i){super._$AT(t,e,i),ti(this),this.isConnected=t._$AU}_$AO(t,e=!0){var i,s;t!==this.isConnected&&(this.isConnected=t,t?null===(i=this.reconnected)||void 0===i||i.call(this):null===(s=this.disconnected)||void 0===s||s.call(this)),e&&(tt(this,t),te(this))}setValue(t){if(Q(this._$Ct))this._$Ct._$AI(t,this);else{let e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}}const tl=()=>new ta;class ta{}const th=new WeakMap,tu=J(class extends to{render(t){return U}update(t,[e]){var i;let s=e!==this.G;return s&&void 0!==this.G&&this.ot(void 0),(s||this.rt!==this.lt)&&(this.G=e,this.ct=null===(i=t.options)||void 0===i?void 0:i.host,this.ot(this.lt=t.element)),U}ot(t){var e;if("function"==typeof this.G){let i=null!==(e=this.ct)&&void 0!==e?e:globalThis,s=th.get(i);void 0===s&&(s=new WeakMap,th.set(i,s)),void 0!==s.get(this.G)&&this.G.call(this.ct,void 0),s.set(this.G,t),void 0!==t&&this.G.call(this.ct,t)}else this.G.value=t}get rt(){var t,e,i;return"function"==typeof this.G?null===(e=th.get(null!==(t=this.ct)&&void 0!==t?t:globalThis))||void 0===e?void 0:e.get(this.G):null===(i=this.G)||void 0===i?void 0:i.value}disconnected(){this.rt===this.lt&&this.ot(void 0)}reconnected(){this.ot(this.lt)}}),td=window,tc=td.ShadowRoot&&(void 0===td.ShadyCSS||td.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,tp=Symbol(),tm=new WeakMap;class tv{constructor(t,e,i){if(this._$cssResult$=!0,i!==tp)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(tc&&void 0===t){let i=void 0!==e&&1===e.length;i&&(t=tm.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&tm.set(e,t))}return t}toString(){return this.cssText}}const tb=t=>new tv("string"==typeof t?t:t+"",void 0,tp),tg=(t,...e)=>{let i=1===t.length?t[0]:e.reduce((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1],t[0]);return new tv(i,t,tp)},ty=(t,e)=>{tc?t.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(e=>{let i=document.createElement("style"),s=td.litNonce;void 0!==s&&i.setAttribute("nonce",s),i.textContent=e.cssText,t.appendChild(i)})},tf=tc?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(let i of t.cssRules)e+=i.cssText;return tb(e)})(t):t,t$=window,t_=t$.trustedTypes,tA=t_?t_.emptyScript:"",tS=t$.reactiveElementPolyfillSupport,tk={toAttribute(t,e){switch(e){case Boolean:t=t?tA:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},tE=(t,e)=>e!==t&&(e==e||t==t),tw={attribute:!0,type:String,converter:tk,reflect:!1,hasChanged:tE},tN="finalized";class tT extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;this.finalize(),(null!==(e=this.h)&&void 0!==e?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();let t=[];return this.elementProperties.forEach((e,i)=>{let s=this._$Ep(i,e);void 0!==s&&(this._$Ev.set(s,i),t.push(s))}),t}static createProperty(t,e=tw){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){let i="symbol"==typeof t?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);void 0!==s&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){let r=this[t];this[e]=s,this.requestUpdate(t,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||tw}static finalize(){if(this.hasOwnProperty(tN))return!1;this[tN]=!0;let t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){let t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(let i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let i=new Set(t.flat(1/0).reverse());for(let t of i)e.unshift(tf(t))}else void 0!==t&&e.push(tf(t));return e}static _$Ep(t,e){let i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach(t=>t(this))}addController(t){var e,i;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;let e=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return ty(e,this.constructor.elementStyles),e}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach(t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)})}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach(t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=tw){var s;let r=this.constructor._$Ep(t,i);if(void 0!==r&&!0===i.reflect){let n=(void 0!==(null===(s=i.converter)||void 0===s?void 0:s.toAttribute)?i.converter:tk).toAttribute(e,i.type);this._$El=t,null==n?this.removeAttribute(r):this.setAttribute(r,n),this._$El=null}}_$AK(t,e){var i;let s=this.constructor,r=s._$Ev.get(t);if(void 0!==r&&this._$El!==r){let t=s.getPropertyOptions(r),n="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(i=t.converter)||void 0===i?void 0:i.fromAttribute)?t.converter:tk;this._$El=r,this[r]=n.fromAttribute(e,t.type),this._$El=null}}requestUpdate(t,e,i){let s=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||tE)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,i))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}let t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((t,e)=>this[e]=t),this._$Ei=void 0);let e=!1,i=this._$AL;try{(e=this.shouldUpdate(i))?(this.willUpdate(i),null===(t=this._$ES)||void 0===t||t.forEach(t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)}),this.update(i)):this._$Ek()}catch(t){throw e=!1,this._$Ek(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$ES)||void 0===e||e.forEach(t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach((t,e)=>this._$EO(e,this[e],t)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}tT[tN]=!0,tT.elementProperties=new Map,tT.elementStyles=[],tT.shadowRootOptions={mode:"open"},null==tS||tS({ReactiveElement:tT}),(null!==(s=t$.reactiveElementVersions)&&void 0!==s?s:t$.reactiveElementVersions=[]).push("1.6.2");class tC extends tT{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;let i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=G(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return z}}tC.finalized=!0,tC._$litElement$=!0,null===(r=globalThis.litElementHydrateSupport)||void 0===r||r.call(globalThis,{LitElement:tC});const tO=globalThis.litElementPolyfillSupport;null==tO||tO({LitElement:tC}),(null!==(n=globalThis.litElementVersions)&&void 0!==n?n:globalThis.litElementVersions=[]).push("3.3.2");class tx{context;gainNode;constructor(t){this.context=t,this.gainNode=new GainNode(t)}get currentTime(){return this.context.currentTime}get volume(){return this.gainNode.gain.value}set volume(t){this.gainNode.gain.setValueAtTime(t,this.currentTime)}}class tz{static naturals=[0,2,4,5,7,9,11];static accidentals=[1,3,6,8,10];static names=[["C"],["C♯","D♭"],["D"],["D♯","E♭"],["E"],["F"],["F♯","G♭"],["G"],["G♯","A♭"],["A"],["A♯","B♭"],["B"]];static isNatural(t){return this.naturals.includes((t%12+12)%12)}static isAccidental(t){return this.accidentals.includes((t%12+12)%12)}static namesOf(t){return this.names[(t%12+12)%12]}static frequencyOf(t,e){return t*Math.pow(2,e/12)}noteZeroFrequency;noteNumber;constructor(t,e=0){this.noteZeroFrequency=t,this.noteNumber=e}get frequency(){return this.constructor.frequencyOf(this.noteZeroFrequency,this.noteNumber)}get names(){return this.constructor.namesOf(this.noteNumber)}plus(t){return new this.constructor(this.noteZeroFrequency,t)}}class tU extends tx{gainEnvelope;oscillator;_wave;_note;startTime;stopTime;constructor(t,e,i,s,r){super(t),this.gainEnvelope=i,this.oscillator=new OscillatorNode(t),this.wave=s,this.note=r,this.startTime=-1,this.stopTime=-1,this.gainNode.connect(e),this.oscillator.connect(this.gainNode)}set wave(t){this._wave=t,this._wave instanceof PeriodicWave?this.oscillator.setPeriodicWave(this._wave):this.oscillator.type=this._wave}get wave(){return this._wave}get note(){return this._note}set note(t){this._note=t,this.oscillator.frequency.setValueAtTime(this._note.frequency,this.currentTime)}get started(){return this.startTime>=0}get stopped(){return this.stopTime>=0}get duration(){if(!this.started)return -1;{let t=this.stopped?this.stopTime:this.currentTime;return t-this.startTime}}start(t){this.startTime=t,this.gainEnvelope.gate(this.gainNode.gain,this.startTime),this.oscillator.start(this.startTime)}stop(t){this.stopTime=t,this.gainEnvelope.ungate(this.gainNode.gain,this.stopTime),this.oscillator.stop(Math.ceil(this.stopTime+this.gainEnvelope.releaseTime)+1)}onStop(t){this.oscillator.addEventListener("ended",t)}}class tP extends tx{compressor;gainEnvelope;wave;noteZero;oscillators;constructor(t,e,i){super(new AudioContext),this.compressor=new DynamicsCompressorNode(this.context),this.gainEnvelope=t,this.wave=e,this.noteZero=new tz(i),this.oscillators=[],this.compressor.connect(this.context.destination),this.gainNode.connect(this.compressor)}startOscillator(t,e){e||=this.currentTime;let i=new tU(this.context,this.gainNode,this.gainEnvelope,this.wave,this.noteZero.plus(t));return this.oscillators.push(i),i.start(e),i}get noteZeroFrequency(){return this.noteZero.noteZeroFrequency}set noteZeroFrequency(t){this.noteZero.noteZeroFrequency=t}stopOscillator(t,e){this.oscillators.includes(t)&&(e??=this.currentTime,t.onStop(()=>this.removeOscillator(t)),t.stop(e))}removeOscillator(t){let e=this.oscillators.indexOf(t);e>=0&&this.oscillators.splice(e,1)}}class tM{delayTime;minimumAmplitude;attackTime;maximumAmplitude;decayTime;sustainAmplitude;releaseTime;constructor(t=0,e=0,i=0,s=1,r=0,n=1,o=0){this.delayTime=t,this.minimumAmplitude=e,this.attackTime=i,this.maximumAmplitude=s,this.decayTime=r,this.sustainAmplitude=n,this.releaseTime=o}delay(t,e,i=1){t.cancelScheduledValues(e),t.setValueAtTime(this.minimumAmplitude*i,e)}attack(t,e,i=1){t.cancelScheduledValues(e),t.setTargetAtTime(this.maximumAmplitude*i,e,this.attackTime)}decay(t,e,i=1){t.cancelScheduledValues(e),t.setTargetAtTime(this.sustainAmplitude*i,e,this.decayTime)}release(t,e,i=1){t.cancelScheduledValues(e),t.setTargetAtTime(this.minimumAmplitude*i,e,this.releaseTime)}gate(t,e,i=1){this.delay(t,e,i),e+=this.delayTime,this.attack(t,e,i),e+=this.attackTime,this.decay(t,e,i)}ungate(t,e,i=1){this.release(t,e,i)}}function tH(t,e,i){let s=t.inlineStart+(t.inlineEnd-t.inlineStart)*e,r=t.blockStart+(t.blockEnd-t.blockStart)*i;return{inline:s,block:r}}function tL(t){let e=function(t){let e,i,s,r,n,o,l,a;let h=getComputedStyle(t),{writingMode:u,direction:d}=h;return u.startsWith("horizontal")?(e="inline",l="inlineSize",i="block",a="blockSize","ltr"===d?(s="inlineStart",r="inlineEnd"):(r="inlineStart",s="inlineEnd"),u.endsWith("-tb")?(n="blockStart",o="blockEnd"):(o="blockStart",n="blockEnd")):(i="inline",a="inlineSize",e="block",l="blockSize","ltr"===d?(n="inlineStart",o="inlineEnd"):(o="inlineStart",n="inlineEnd"),u.endsWith("-rl")?(r="blockStart",s="blockEnd"):(s="blockStart",r="blockEnd")),{x:e,y:i,left:s,right:r,top:n,bottom:o,width:l,height:a}}(t),i=t.getBoundingClientRect(),s={physicalRect:i,writingDirection:e};for(let t of["left","right","top","bottom","width","height"])s[e[t]]=i[t];return s}class tD extends tC{static tagName="ui-modal";static properties={closeEvent:{type:String,attribute:"close-event",reflect:!0},parent:{type:Element},parentInlineOffset:{type:Number,attribute:"i0",reflect:!0},parentBlockOffset:{type:Number,attribute:"b0",reflect:!0},inlineOffset:{type:Number,attribute:"i1",reflect:!0},blockOffset:{type:Number,attribute:"b1",reflect:!0}};constructor(){super(),this.closeEvent="close",this.parent=this.parentElement||document.body,this.parentInlineOffset=0,this.parentBlockOffset=1,this.inlineOffset=0,this.blockOffset=0,this.resizeObserver=new ResizeObserver(this.reposition)}disconnectedCallback(){this.resizeObserver.unobserve(this.parent)}firstUpdated(t){super.firstUpdated(t),this.resizeObserver.observe(this),this.resizeObserver.observe(this.parent)}updated(t){super.updated(t),this.reposition()}reposition=()=>{if(this.parent instanceof Element){this.style.transform="";let t=tL(document.body),e=tL(this.parent),i=tL(this),{inline:s,block:r}=tH(e,this.parentInlineOffset,this.parentBlockOffset),{inline:n,block:o}=tH(i,this.inlineOffset,this.blockOffset),l=s-n,a=r-o;i.inlineEnd+l>t.inlineEnd&&(l=t.inlineEnd-i.inlineEnd),i.blockEnd+a>t.blockEnd&&(a=t.blockEnd-i.blockEnd),i.inlineStart+l<t.inlineStart&&(l=-i.inlineStart),i.blockStart+a<t.blockStart&&(a=-i.blockStart);let h="inline"===i.writingDirection.x?"X":"Y",u="block"===i.writingDirection.y?"Y":"X";this.style.transform=`translate${h}(${l}px) translate${u}(${a}px)`}};close(){this.dispatchEvent(new CustomEvent(this.closeEvent,{bubbles:!0}))}render(){return x`
			<div part='grid'>
				<div part='head'>
					<span part='title'>
						<slot name='title'></slot>
					</span>
					<button part='close-button' type='button' @click='${this.close}'>
						<slot name='close-button'>✖</slot>
					</button>
				</div>
				<div part='body'>
					<slot name='body'></slot>
				</div>
			</div>
		`}static styles=tg`
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
	`}customElements.define(tD.tagName,tD);class tR extends tC{static tagName="ui-toggle";static properties={visible:{type:Boolean,reflect:!0}};constructor(){super(),this.visible=!1}firstUpdated(t){super.firstUpdated(t),this.addEventListener("close",this.closeHandler)}checkPath=t=>{let e=t.composedPath(),i=e.includes(this);i||this.toggle()};toggle(t){this.visible=t??!this.visible,this.visible?document.body.addEventListener("pointerdown",this.checkPath):document.body.removeEventListener("pointerdown",this.checkPath)}close(){this.toggle(!1)}clickHandler(){this.toggle()}closeHandler(t){t.stopPropagation(),this.close()}render(){return x`
			<slot @click='${this.clickHandler}'></slot>
			${this.visible?x`<slot name='toggled'></slot>`:U}
		`}}customElements.define(tR.tagName,tR);var tq={};e(tq,"PianoKeyboard",()=>tW);const tI="important",tV=" !"+tI,tj=J(class extends X{constructor(t){var e;if(super(t),1!==t.type||"style"!==t.name||(null===(e=t.strings)||void 0===e?void 0:e.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce((e,i)=>{let s=t[i];return null==s?e:e+`${i=i.includes("-")?i:i.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${s};`},"")}update(t,[e]){let{style:i}=t.element;if(void 0===this.ut){for(let t in this.ut=new Set,e)this.ut.add(t);return this.render(e)}for(let t in this.ut.forEach(t=>{null==e[t]&&(this.ut.delete(t),t.includes("-")?i.removeProperty(t):i[t]="")}),e){let s=e[t];if(null!=s){this.ut.add(t);let e="string"==typeof s&&s.endsWith(tV);t.includes("-")||e?i.setProperty(t,e?s.slice(0,-11):s,e?tI:""):i[t]=s}}return z}});var tK={};e(tK,"PianoKey",()=>tB);class tB extends tC{static tagName="piano-key";static properties={noteNumber:{type:Number,attribute:"note-number",reflect:!0},key:{type:String,reflect:!0},labelSource:{type:String,attribute:"label-source",reflect:!0}};constructor(){super(),this.noteNumber=0,this.key="",this.labelSource="names"}firstUpdated(t){super.firstUpdated(t)}get natural(){return tz.isNatural(this.noteNumber)}get accidental(){return tz.isAccidental(this.noteNumber)}get names(){return tz.namesOf(this.noteNumber)}start(t){1===t.buttons&&(t.currentTarget.focus(),t.target.releasePointerCapture(t.pointerId),this.dispatchEvent(new KeyboardEvent("keydown",{composed:!0,key:this.key})))}stop(){this.dispatchEvent(new KeyboardEvent("keyup",{composed:!0,key:this.key}))}renderNames(){return this.names.map(this.renderLabel)}renderLabel(t){return x`
			<span part='label'>
				${t}
			</span>
		`}renderLabels(){switch(this.labelSource){case"names":return this.renderNames();case"key":return this.renderLabel(this.key.substring(0,3));default:return""}}render(){return x`
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
		`}static styles=tg`
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
	`}customElements.define(tB.tagName,tB);class tW extends tC{static tagName="piano-keyboard";static dependencies=[tB];static properties={synthesizer:{type:tP},minimumNoteDuration:{type:Number,attribute:"minimum-note-duration",reflect:!0},labelSource:{type:String,attribute:"label-source",reflect:!0}};constructor(){super(),this.synthesizer=null,this.minimumNoteDuration=.2,this.labelSource="names",this.keyToNoteNumberMap=a.QWERTY,this.keyToOscillatorMap=new Map}firstUpdated(t){super.firstUpdated(t),this.addEventListener("keydown",this.keyDownListener),this.addEventListener("keyup",this.keyUpListener),this.addEventListener("blur",this.blurListener)}startOscillator(t){if(this.synthesizer instanceof tP&&!this.keyToOscillatorMap.has(t)){let e=this.keyToNoteNumberMap.get(t);if("number"==typeof e){let i=this.synthesizer.startOscillator(e,this.synthesizer.currentTime);return this.keyToOscillatorMap.set(t,i),this.requestUpdate(),!0}}return!1}stopOscillator(t){let e=this.keyToOscillatorMap.get(t);if(this.synthesizer instanceof tP&&e instanceof tU){let i=this.synthesizer.currentTime+Math.max(0,this.minimumNoteDuration-e.duration);return this.synthesizer.stopOscillator(e,i),this.keyToOscillatorMap.delete(t),this.requestUpdate(),!0}return!1}stopAllOscillators(){if(this.synthesizer instanceof tP){for(let[t,e]of this.keyToOscillatorMap)this.synthesizer.stopOscillator(e),this.keyToOscillatorMap.delete(t);this.requestUpdate()}}keyDownListener(t){!(t.ctrlKey||t.altKey||t.shiftKey)&&this.startOscillator(t.key)&&t.preventDefault()}keyUpListener(t){!(t.ctrlKey||t.altKey||t.shiftKey)&&this.stopOscillator(t.key)&&t.preventDefault()}blurListener(){this.stopAllOscillators()}renderKey(t,e){let i,s;let r=2*Math.floor(e/12),n=e%12;tz.isNatural(n)?(n>=5&&(n+=1),i=2,s=r):(n>=6&&(n+=1),i=1,s=r+1);let o=tj({gridRowStart:String(8-r-1),gridRowEnd:`span ${i}`,gridColumnStart:String(n+1),gridColumnEnd:"span 2",zIndex:String(s)});return x`
			<piano-key note-number=${e} key='${t}' ?down='${this.keyToOscillatorMap.has(t)}' label-source='${this.labelSource}' style='${o}'></piano-key>
		`}renderKeys(){let t=[];for(let[e,i]of this.keyToNoteNumberMap)t.push(this.renderKey(e,i));return t}render(){return x`
			<div part='grid'>
				${this.renderKeys()}
			</div>
		`}static styles=tg`
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
	`}customElements.define(tW.tagName,tW);const tF=Object.freeze(new tM(0,0,.1,1,.1,.8,.1));class tZ extends tC{static tagName="piano-app";static version="1.1.4";static dependencies=[tW,tD,tR];static waves=[["sine","Sine"],["square","Square"],["sawtooth","Sawtooth"],["triangle","Triangle"],["flute","Flute"]];static frequencies=[["27.50000","27.50 Hz (A0)"],["32.70320","32.70 Hz (C1)"],["55.00000","55.00 Hz (A1)"],["65.40639","65.40 Hz (C2)"],["110.0000","110.0 Hz (A2)"],["130.8128","130.8 Hz (C3)"],["220.0000","220.0 Hz (A3)"],["261.6256","261.6 Hz (C4)"]];static keyLabelSources=[["names","Note Names"],["key","Keyboard Shortcuts"],["none","None (Hide)"]];static properties={wave:{type:String,reflect:!0},frequencyString:{type:String,attribute:"frequency",reflect:!0},volume:{type:Number,reflect:!0},minimumNoteDuration:{type:Number,attribute:"minimum-note-duration",reflect:!0},keyLabelSource:{type:String,attribute:"key-label-source",reflect:!0}};constructor(){super(),this.wave="triangle",this.frequencyString="130.8128",this.volume=1,this.gainEnvelope=tF,this.synthesizer=new tP(this.gainEnvelope,this.wave,this.frequency),this.minimumNoteDuration=.25,this.keyLabelSource="names",this.keyboardRef=tl()}get frequency(){return Number(this.frequencyString)}get keyboard(){return this.keyboardRef.value}firstUpdated(t){super.firstUpdated(t),this.keyboard.focus()}updated(t){super.updated(t),t.has("wave")&&("flute"===this.wave?(this.synthesizer.wave="triangle",this.gainEnvelope=new tM(.1,0,.1,.8,.1,.4,.15)):(this.synthesizer.wave=this.wave,this.gainEnvelope=tF),this.synthesizer.gainEnvelope=this.gainEnvelope),t.has("volume")&&(this.synthesizer.volume=this.volume),t.has("frequencyString")&&(this.synthesizer.noteZeroFrequency=this.frequency)}setWave(t){this.wave=t.target.value}setFrequency(t){this.frequencyString=t.target.value}setVolume(t){this.volume=Number(t.currentTarget.value)}setKeyLabelSource(t){this.keyLabelSource=t.target.value}renderOption(t){return([e,i])=>x`
			<option value='${e}' ?selected='${e===t}'>
				${i}
			</option>
		`}renderSelect(t,e,i){return x`
			<select part='input' @input='${e}'>
				${t.map(this.renderOption(i))}
			</select>
		`}renderInstrumentSettings(){return x`
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
		`}renderVolumeSlider(){return x`
			<ui-toggle>
				<button type='button' class='menu-item'>
					${this.volume>=2/3?"\uD83D\uDD0A":this.volume>0?"\uD83D\uDD09":"\uD83D\uDD08"}
				</button>
				<ui-modal slot='toggled'>
					<span slot='title'>Volume</span>
					<div part='form' slot='body'>
						<input part='volume-slider' type='range' min='0' max='1' step='0.1' .value='${this.volume}'
							@input='${this.setVolume}' />
					</div>
				</ui-modal>
			</ui-toggle>
		`}renderSettings(){return x`
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
		`}render(){return x`
			<div class='grid'>
				<div class='menu'>
					${this.renderInstrumentSettings()}
					${this.renderVolumeSlider()}
					<span aria-hidden='true'></span>
					${this.renderSettings()}
				</div>
				<piano-keyboard ${tu(this.keyboardRef)} .synthesizer='${this.synthesizer}'
					minimum-note-duration='${this.minimumNoteDuration}' label-source='${this.keyLabelSource}' tabindex='0'>
				</piano-keyboard>
			</div>
		`}static styles=tg`
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
	`}customElements.define(tZ.tagName,tZ),t(o,l),t(o,h),t(o,tK),t(o,tq);
//# sourceMappingURL=index.0d7bad8d.js.map
