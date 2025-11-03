import{a as vi}from"./chunk-V4YH7JW5.js";import{A as ui,B as pi,C as mi,D as vn,E as hi,F as Bt,G as fi,H as gi,I as bi,L as rt,M as Y,N as _i,O as Cn,P as xn,Q as Xe,R as st,S as N,T as yi,V as Ht,a as Se,b as Ve,c as Jn,d as ye,e as ei,f as ti,g as _t,h as ni,i as ii,j as oi,k as oe,l as ri,m as yt,n as si,o as ai,p as vt,q as ze,r as Ne,t as li,u as _n,v as di,w as ci,x as le,z as yn}from"./chunk-4V7NGQJL.js";import{B as Yn,C as Xn,D as Kn,G as bn,a as gn,b as Gn,c as Un,d as Rt,e as Te,f as it,g as Me,h as ae,i as U,j as qn,s as Zn,x as Qn}from"./chunk-VTCIYUQI.js";import{c as ot,d as De,f as _e,g as Pe,h as Ye,i as bt}from"./chunk-UB7WHAP5.js";import{b as at,c as lt}from"./chunk-HELKZFRM.js";import{$ as u,$a as Vt,$b as gt,Ac as zt,Bc as S,Db as a,Eb as m,Ec as Nt,Fb as p,Gb as A,Hb as pe,Ib as me,Jb as ge,Kb as Z,Kc as y,Lb as Q,Lc as be,Mb as ie,Mc as Wn,Nb as G,Ob as nt,Pa as ft,Pb as I,Qa as Bn,Rb as d,Sa as l,Sb as Ge,Tb as Ue,Ub as X,V as Oe,Vb as we,W as T,Wb as P,X as $,Xa as Hn,Xb as z,Ya as We,Z as et,Za as V,_ as je,_b as Ae,ac as fn,bc as qe,cc as _,dc as O,ea as w,ec as ce,f as he,fa as D,fb as v,fc as K,ga as ne,gb as W,ha as ht,hb as k,hc as kt,ia as Ce,ib as jn,ic as Ot,jb as b,jc as Ft,kb as f,mb as q,mc as E,n as zn,na as fe,nb as tt,nc as At,ob as mn,oc as se,pc as Ze,qb as $n,qc as Lt,rc as J,s as Nn,sa as xe,sc as ee,ta as g,tb as hn,tc as Le,ub as M,va as $e,wc as Qe,xb as Ie,xc as H,y as Rn,yb as Ee,yc as Pt,za as Fe}from"./chunk-I2LWXBCZ.js";import{a as x,b as ve}from"./chunk-7CGTOI24.js";function dt(...t){if(t){let o=[];for(let e=0;e<t.length;e++){let n=t[e];if(!n)continue;let i=typeof n;if(i==="string"||i==="number")o.push(n);else if(i==="object"){let r=Array.isArray(n)?[dt(...n)]:Object.entries(n).map(([s,c])=>c?s:void 0);o=r.length?o.concat(r.filter(s=>!!s)):o}}return o.join(" ").trim()}}var jt={};function te(t="pui_id_"){return Object.hasOwn(jt,t)||(jt[t]=0),jt[t]++,`${t}${jt[t]}`}var Ci=(()=>{class t extends N{name="common";static \u0275fac=(()=>{let e;return function(i){return(e||(e=g(t)))(i||t)}})();static \u0275prov=T({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),R=(()=>{class t{document=u(Ce);platformId=u(Fe);el=u($e);injector=u(ht);cd=u(Nt);renderer=u(We);config=u(yi);baseComponentStyle=u(Ci);baseStyle=u(N);scopedStyleEl;rootEl;dt;get styleOptions(){return{nonce:this.config?.csp().nonce}}get _name(){return this.constructor.name.replace(/^_/,"").toLowerCase()}get componentStyle(){return this._componentStyle}attrSelector=te("pc");themeChangeListeners=[];_getHostInstance(e){if(e)return e?this.hostName?e.name===this.hostName?e:this._getHostInstance(e.parentInstance):e.parentInstance:void 0}_getOptionValue(e,n="",i={}){return fi(e,n,i)}ngOnInit(){this.document&&(this._loadCoreStyles(),this._loadStyles())}ngAfterViewInit(){this.rootEl=this.el?.nativeElement,this.rootEl&&this.rootEl?.setAttribute(this.attrSelector,"")}ngOnChanges(e){if(this.document&&!qn(this.platformId)){let{dt:n}=e;n&&n.currentValue&&(this._loadScopedThemeStyles(n.currentValue),this._themeChangeListener(()=>this._loadScopedThemeStyles(n.currentValue)))}}ngOnDestroy(){this._unloadScopedThemeStyles(),this.themeChangeListeners.forEach(e=>Cn.off("theme:change",e))}_loadStyles(){let e=()=>{st.isStyleNameLoaded("base")||(this.baseStyle.loadGlobalCSS(this.styleOptions),st.setLoadedStyleName("base")),this._loadThemeStyles()};e(),this._themeChangeListener(()=>e())}_loadCoreStyles(){!st.isStyleNameLoaded("base")&&this.componentStyle?.name&&(this.baseComponentStyle.loadCSS(this.styleOptions),this.componentStyle&&this.componentStyle?.loadCSS(this.styleOptions),st.setLoadedStyleName(this.componentStyle?.name))}_loadThemeStyles(){if(!Xe.isStyleNameLoaded("common")){let{primitive:e,semantic:n,global:i,style:r}=this.componentStyle?.getCommonTheme?.()||{};this.baseStyle.load(e?.css,x({name:"primitive-variables"},this.styleOptions)),this.baseStyle.load(n?.css,x({name:"semantic-variables"},this.styleOptions)),this.baseStyle.load(i?.css,x({name:"global-variables"},this.styleOptions)),this.baseStyle.loadGlobalTheme(x({name:"global-style"},this.styleOptions),r),Xe.setLoadedStyleName("common")}if(!Xe.isStyleNameLoaded(this.componentStyle?.name)&&this.componentStyle?.name){let{css:e,style:n}=this.componentStyle?.getComponentTheme?.()||{};this.componentStyle?.load(e,x({name:`${this.componentStyle?.name}-variables`},this.styleOptions)),this.componentStyle?.loadTheme(x({name:`${this.componentStyle?.name}-style`},this.styleOptions),n),Xe.setLoadedStyleName(this.componentStyle?.name)}if(!Xe.isStyleNameLoaded("layer-order")){let e=this.componentStyle?.getLayerOrderThemeCSS?.();this.baseStyle.load(e,x({name:"layer-order",first:!0},this.styleOptions)),Xe.setLoadedStyleName("layer-order")}this.dt&&(this._loadScopedThemeStyles(this.dt),this._themeChangeListener(()=>this._loadScopedThemeStyles(this.dt)))}_loadScopedThemeStyles(e){let{css:n}=this.componentStyle?.getPresetTheme?.(e,`[${this.attrSelector}]`)||{},i=this.componentStyle?.load(n,x({name:`${this.attrSelector}-${this.componentStyle?.name}`},this.styleOptions));this.scopedStyleEl=i?.el}_unloadScopedThemeStyles(){this.scopedStyleEl?.remove()}_themeChangeListener(e=()=>{}){st.clearLoadedStyleNames(),Cn.on("theme:change",e),this.themeChangeListeners.push(e)}cx(e,n={}){return dt(this._getOptionValue(this.$style?.classes,e,x({instance:this},n)))}sx(e="",n=!0,i={}){if(n)return this._getOptionValue(this.$style?.inlineStyles,e,x({instance:this},i))}get parent(){return this.parentInstance}get $style(){return this.parent?this.parent.componentStyle:this.componentStyle}cn=dt;static \u0275fac=function(n){return new(n||t)};static \u0275dir=k({type:t,inputs:{dt:"dt"},features:[E([Ci,N]),xe]})}return t})();var Re=(()=>{class t{static zindex=1e3;static calculatedScrollbarWidth=null;static calculatedScrollbarHeight=null;static browser;static addClass(e,n){e&&n&&(e.classList?e.classList.add(n):e.className+=" "+n)}static addMultipleClasses(e,n){if(e&&n)if(e.classList){let i=n.trim().split(" ");for(let r=0;r<i.length;r++)e.classList.add(i[r])}else{let i=n.split(" ");for(let r=0;r<i.length;r++)e.className+=" "+i[r]}}static removeClass(e,n){e&&n&&(e.classList?e.classList.remove(n):e.className=e.className.replace(new RegExp("(^|\\b)"+n.split(" ").join("|")+"(\\b|$)","gi")," "))}static removeMultipleClasses(e,n){e&&n&&[n].flat().filter(Boolean).forEach(i=>i.split(" ").forEach(r=>this.removeClass(e,r)))}static hasClass(e,n){return e&&n?e.classList?e.classList.contains(n):new RegExp("(^| )"+n+"( |$)","gi").test(e.className):!1}static siblings(e){return Array.prototype.filter.call(e.parentNode.children,function(n){return n!==e})}static find(e,n){return Array.from(e.querySelectorAll(n))}static findSingle(e,n){return this.isElement(e)?e.querySelector(n):null}static index(e){let n=e.parentNode.childNodes,i=0;for(var r=0;r<n.length;r++){if(n[r]==e)return i;n[r].nodeType==1&&i++}return-1}static indexWithinGroup(e,n){let i=e.parentNode?e.parentNode.childNodes:[],r=0;for(var s=0;s<i.length;s++){if(i[s]==e)return r;i[s].attributes&&i[s].attributes[n]&&i[s].nodeType==1&&r++}return-1}static appendOverlay(e,n,i="self"){i!=="self"&&e&&n&&this.appendChild(e,n)}static alignOverlay(e,n,i="self",r=!0){e&&n&&(r&&(e.style.minWidth=`${t.getOuterWidth(n)}px`),i==="self"?this.relativePosition(e,n):this.absolutePosition(e,n))}static relativePosition(e,n,i=!0){let r=He=>{if(He)return getComputedStyle(He).getPropertyValue("position")==="relative"?He:r(He.parentElement)},s=e.offsetParent?{width:e.offsetWidth,height:e.offsetHeight}:this.getHiddenElementDimensions(e),c=n.offsetHeight,h=n.getBoundingClientRect(),C=this.getWindowScrollTop(),L=this.getWindowScrollLeft(),B=this.getViewport(),j=r(e)?.getBoundingClientRect()||{top:-1*C,left:-1*L},ue,ke,St="top";h.top+c+s.height>B.height?(ue=h.top-j.top-s.height,St="bottom",h.top+ue<0&&(ue=-1*h.top)):(ue=c+h.top-j.top,St="top");let Pn=h.left+s.width-B.width,xo=h.left-j.left;if(s.width>B.width?ke=(h.left-j.left)*-1:Pn>0?ke=xo-Pn:ke=h.left-j.left,e.style.top=ue+"px",e.style.left=ke+"px",e.style.transformOrigin=St,i){let He=ti(/-anchor-gutter$/)?.value;e.style.marginTop=St==="bottom"?`calc(${He??"2px"} * -1)`:He??""}}static absolutePosition(e,n,i=!0){let r=e.offsetParent?{width:e.offsetWidth,height:e.offsetHeight}:this.getHiddenElementDimensions(e),s=r.height,c=r.width,h=n.offsetHeight,C=n.offsetWidth,L=n.getBoundingClientRect(),B=this.getWindowScrollTop(),re=this.getWindowScrollLeft(),j=this.getViewport(),ue,ke;L.top+h+s>j.height?(ue=L.top+B-s,e.style.transformOrigin="bottom",ue<0&&(ue=B)):(ue=h+L.top+B,e.style.transformOrigin="top"),L.left+c>j.width?ke=Math.max(0,L.left+re+C-c):ke=L.left+re,e.style.top=ue+"px",e.style.left=ke+"px",i&&(e.style.marginTop=origin==="bottom"?"calc(var(--p-anchor-gutter) * -1)":"calc(var(--p-anchor-gutter))")}static getParents(e,n=[]){return e.parentNode===null?n:this.getParents(e.parentNode,n.concat([e.parentNode]))}static getScrollableParents(e){let n=[];if(e){let i=this.getParents(e),r=/(auto|scroll)/,s=c=>{let h=window.getComputedStyle(c,null);return r.test(h.getPropertyValue("overflow"))||r.test(h.getPropertyValue("overflowX"))||r.test(h.getPropertyValue("overflowY"))};for(let c of i){let h=c.nodeType===1&&c.dataset.scrollselectors;if(h){let C=h.split(",");for(let L of C){let B=this.findSingle(c,L);B&&s(B)&&n.push(B)}}c.nodeType!==9&&s(c)&&n.push(c)}}return n}static getHiddenElementOuterHeight(e){e.style.visibility="hidden",e.style.display="block";let n=e.offsetHeight;return e.style.display="none",e.style.visibility="visible",n}static getHiddenElementOuterWidth(e){e.style.visibility="hidden",e.style.display="block";let n=e.offsetWidth;return e.style.display="none",e.style.visibility="visible",n}static getHiddenElementDimensions(e){let n={};return e.style.visibility="hidden",e.style.display="block",n.width=e.offsetWidth,n.height=e.offsetHeight,e.style.display="none",e.style.visibility="visible",n}static scrollInView(e,n){let i=getComputedStyle(e).getPropertyValue("borderTopWidth"),r=i?parseFloat(i):0,s=getComputedStyle(e).getPropertyValue("paddingTop"),c=s?parseFloat(s):0,h=e.getBoundingClientRect(),L=n.getBoundingClientRect().top+document.body.scrollTop-(h.top+document.body.scrollTop)-r-c,B=e.scrollTop,re=e.clientHeight,j=this.getOuterHeight(n);L<0?e.scrollTop=B+L:L+j>re&&(e.scrollTop=B+L-re+j)}static fadeIn(e,n){e.style.opacity=0;let i=+new Date,r=0,s=function(){r=+e.style.opacity.replace(",",".")+(new Date().getTime()-i)/n,e.style.opacity=r,i=+new Date,+r<1&&(window.requestAnimationFrame?window.requestAnimationFrame(s):setTimeout(s,16))};s()}static fadeOut(e,n){var i=1,r=50,s=n,c=r/s;let h=setInterval(()=>{i=i-c,i<=0&&(i=0,clearInterval(h)),e.style.opacity=i},r)}static getWindowScrollTop(){let e=document.documentElement;return(window.pageYOffset||e.scrollTop)-(e.clientTop||0)}static getWindowScrollLeft(){let e=document.documentElement;return(window.pageXOffset||e.scrollLeft)-(e.clientLeft||0)}static matches(e,n){var i=Element.prototype,r=i.matches||i.webkitMatchesSelector||i.mozMatchesSelector||i.msMatchesSelector||function(s){return[].indexOf.call(document.querySelectorAll(s),this)!==-1};return r.call(e,n)}static getOuterWidth(e,n){let i=e.offsetWidth;if(n){let r=getComputedStyle(e);i+=parseFloat(r.marginLeft)+parseFloat(r.marginRight)}return i}static getHorizontalPadding(e){let n=getComputedStyle(e);return parseFloat(n.paddingLeft)+parseFloat(n.paddingRight)}static getHorizontalMargin(e){let n=getComputedStyle(e);return parseFloat(n.marginLeft)+parseFloat(n.marginRight)}static innerWidth(e){let n=e.offsetWidth,i=getComputedStyle(e);return n+=parseFloat(i.paddingLeft)+parseFloat(i.paddingRight),n}static width(e){let n=e.offsetWidth,i=getComputedStyle(e);return n-=parseFloat(i.paddingLeft)+parseFloat(i.paddingRight),n}static getInnerHeight(e){let n=e.offsetHeight,i=getComputedStyle(e);return n+=parseFloat(i.paddingTop)+parseFloat(i.paddingBottom),n}static getOuterHeight(e,n){let i=e.offsetHeight;if(n){let r=getComputedStyle(e);i+=parseFloat(r.marginTop)+parseFloat(r.marginBottom)}return i}static getHeight(e){let n=e.offsetHeight,i=getComputedStyle(e);return n-=parseFloat(i.paddingTop)+parseFloat(i.paddingBottom)+parseFloat(i.borderTopWidth)+parseFloat(i.borderBottomWidth),n}static getWidth(e){let n=e.offsetWidth,i=getComputedStyle(e);return n-=parseFloat(i.paddingLeft)+parseFloat(i.paddingRight)+parseFloat(i.borderLeftWidth)+parseFloat(i.borderRightWidth),n}static getViewport(){let e=window,n=document,i=n.documentElement,r=n.getElementsByTagName("body")[0],s=e.innerWidth||i.clientWidth||r.clientWidth,c=e.innerHeight||i.clientHeight||r.clientHeight;return{width:s,height:c}}static getOffset(e){var n=e.getBoundingClientRect();return{top:n.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:n.left+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)}}static replaceElementWith(e,n){let i=e.parentNode;if(!i)throw"Can't replace element";return i.replaceChild(n,e)}static getUserAgent(){if(navigator&&this.isClient())return navigator.userAgent}static isIE(){var e=window.navigator.userAgent,n=e.indexOf("MSIE ");if(n>0)return!0;var i=e.indexOf("Trident/");if(i>0){var r=e.indexOf("rv:");return!0}var s=e.indexOf("Edge/");return s>0}static isIOS(){return/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream}static isAndroid(){return/(android)/i.test(navigator.userAgent)}static isTouchDevice(){return"ontouchstart"in window||navigator.maxTouchPoints>0}static appendChild(e,n){if(this.isElement(n))n.appendChild(e);else if(n&&n.el&&n.el.nativeElement)n.el.nativeElement.appendChild(e);else throw"Cannot append "+n+" to "+e}static removeChild(e,n){if(this.isElement(n))n.removeChild(e);else if(n.el&&n.el.nativeElement)n.el.nativeElement.removeChild(e);else throw"Cannot remove "+e+" from "+n}static removeElement(e){"remove"in Element.prototype?e.remove():e.parentNode?.removeChild(e)}static isElement(e){return typeof HTMLElement=="object"?e instanceof HTMLElement:e&&typeof e=="object"&&e!==null&&e.nodeType===1&&typeof e.nodeName=="string"}static calculateScrollbarWidth(e){if(e){let n=getComputedStyle(e);return e.offsetWidth-e.clientWidth-parseFloat(n.borderLeftWidth)-parseFloat(n.borderRightWidth)}else{if(this.calculatedScrollbarWidth!==null)return this.calculatedScrollbarWidth;let n=document.createElement("div");n.className="p-scrollbar-measure",document.body.appendChild(n);let i=n.offsetWidth-n.clientWidth;return document.body.removeChild(n),this.calculatedScrollbarWidth=i,i}}static calculateScrollbarHeight(){if(this.calculatedScrollbarHeight!==null)return this.calculatedScrollbarHeight;let e=document.createElement("div");e.className="p-scrollbar-measure",document.body.appendChild(e);let n=e.offsetHeight-e.clientHeight;return document.body.removeChild(e),this.calculatedScrollbarWidth=n,n}static invokeElementMethod(e,n,i){e[n].apply(e,i)}static clearSelection(){if(window.getSelection&&window.getSelection())window.getSelection()?.empty?window.getSelection()?.empty():window.getSelection()?.removeAllRanges&&(window.getSelection()?.rangeCount||0)>0&&(window.getSelection()?.getRangeAt(0)?.getClientRects()?.length||0)>0&&window.getSelection()?.removeAllRanges();else if(document.selection&&document.selection.empty)try{document.selection.empty()}catch{}}static getBrowser(){if(!this.browser){let e=this.resolveUserAgent();this.browser={},e.browser&&(this.browser[e.browser]=!0,this.browser.version=e.version),this.browser.chrome?this.browser.webkit=!0:this.browser.webkit&&(this.browser.safari=!0)}return this.browser}static resolveUserAgent(){let e=navigator.userAgent.toLowerCase(),n=/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||e.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:n[1]||"",version:n[2]||"0"}}static isInteger(e){return Number.isInteger?Number.isInteger(e):typeof e=="number"&&isFinite(e)&&Math.floor(e)===e}static isHidden(e){return!e||e.offsetParent===null}static isVisible(e){return e&&e.offsetParent!=null}static isExist(e){return e!==null&&typeof e<"u"&&e.nodeName&&e.parentNode}static focus(e,n){e&&document.activeElement!==e&&e.focus(n)}static getFocusableSelectorString(e=""){return`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        .p-inputtext:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        .p-button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e}`}static getFocusableElements(e,n=""){let i=this.find(e,this.getFocusableSelectorString(n)),r=[];for(let s of i){let c=getComputedStyle(s);this.isVisible(s)&&c.display!="none"&&c.visibility!="hidden"&&r.push(s)}return r}static getFocusableElement(e,n=""){let i=this.findSingle(e,this.getFocusableSelectorString(n));if(i){let r=getComputedStyle(i);if(this.isVisible(i)&&r.display!="none"&&r.visibility!="hidden")return i}return null}static getFirstFocusableElement(e,n=""){let i=this.getFocusableElements(e,n);return i.length>0?i[0]:null}static getLastFocusableElement(e,n){let i=this.getFocusableElements(e,n);return i.length>0?i[i.length-1]:null}static getNextFocusableElement(e,n=!1){let i=t.getFocusableElements(e),r=0;if(i&&i.length>0){let s=i.indexOf(i[0].ownerDocument.activeElement);n?s==-1||s===0?r=i.length-1:r=s-1:s!=-1&&s!==i.length-1&&(r=s+1)}return i[r]}static generateZIndex(){return this.zindex=this.zindex||999,++this.zindex}static getSelection(){return window.getSelection?window.getSelection()?.toString():document.getSelection?document.getSelection()?.toString():document.selection?document.selection.createRange().text:null}static getTargetElement(e,n){if(!e)return null;switch(e){case"document":return document;case"window":return window;case"@next":return n?.nextElementSibling;case"@prev":return n?.previousElementSibling;case"@parent":return n?.parentElement;case"@grandparent":return n?.parentElement?.parentElement;default:let i=typeof e;if(i==="string")return document.querySelector(e);if(i==="object"&&e.hasOwnProperty("nativeElement"))return this.isExist(e.nativeElement)?e.nativeElement:void 0;let s=(c=>!!(c&&c.constructor&&c.call&&c.apply))(e)?e():e;return s&&s.nodeType===9||this.isExist(s)?s:null}}static isClient(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}static getAttribute(e,n){if(e){let i=e.getAttribute(n);return isNaN(i)?i==="true"||i==="false"?i==="true":i:+i}}static calculateBodyScrollbarWidth(){return window.innerWidth-document.documentElement.offsetWidth}static blockBodyScroll(e="p-overflow-hidden"){document.body.style.setProperty("--scrollbar-width",this.calculateBodyScrollbarWidth()+"px"),this.addClass(document.body,e)}static unblockBodyScroll(e="p-overflow-hidden"){document.body.style.removeProperty("--scrollbar-width"),this.removeClass(document.body,e)}static createElement(e,n={},...i){if(e){let r=document.createElement(e);return this.setAttributes(r,n),r.append(...i),r}}static setAttribute(e,n="",i){this.isElement(e)&&i!==null&&i!==void 0&&e.setAttribute(n,i)}static setAttributes(e,n={}){if(this.isElement(e)){let i=(r,s)=>{let c=e?.$attrs?.[r]?[e?.$attrs?.[r]]:[];return[s].flat().reduce((h,C)=>{if(C!=null){let L=typeof C;if(L==="string"||L==="number")h.push(C);else if(L==="object"){let B=Array.isArray(C)?i(r,C):Object.entries(C).map(([re,j])=>r==="style"&&(j||j===0)?`${re.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${j}`:j?re:void 0);h=B.length?h.concat(B.filter(re=>!!re)):h}}return h},c)};Object.entries(n).forEach(([r,s])=>{if(s!=null){let c=r.match(/^on(.+)/);c?e.addEventListener(c[1].toLowerCase(),s):r==="pBind"?this.setAttributes(e,s):(s=r==="class"?[...new Set(i("class",s))].join(" ").trim():r==="style"?i("style",s).join(";").trim():s,(e.$attrs=e.$attrs||{})&&(e.$attrs[r]=s),e.setAttribute(r,s))}})}}static isFocusableElement(e,n=""){return this.isElement(e)?e.matches(`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n}`):!1}}return t})();function ll(){Jn({variableName:xn("scrollbar.width").name})}function dl(){ei({variableName:xn("scrollbar.width").name})}var ct=class{element;listener;scrollableParents;constructor(o,e=()=>{}){this.element=o,this.listener=e}bindScrollListener(){this.scrollableParents=Re.getScrollableParents(this.element);for(let o=0;o<this.scrollableParents.length;o++)this.scrollableParents[o].addEventListener("scroll",this.listener)}unbindScrollListener(){if(this.scrollableParents)for(let o=0;o<this.scrollableParents.length;o++)this.scrollableParents[o].removeEventListener("scroll",this.listener)}destroy(){this.unbindScrollListener(),this.element=null,this.listener=null,this.scrollableParents=null}};var $t=(()=>{class t extends R{autofocus=!1;focused=!1;platformId=u(Fe);document=u(Ce);host=u($e);ngAfterContentChecked(){this.autofocus===!1?this.host.nativeElement.removeAttribute("autofocus"):this.host.nativeElement.setAttribute("autofocus",!0),this.focused||this.autoFocus()}ngAfterViewChecked(){this.focused||this.autoFocus()}autoFocus(){U(this.platformId)&&this.autofocus&&setTimeout(()=>{let e=Re.getFocusableElements(this.host?.nativeElement);e.length===0&&this.host.nativeElement.focus(),e.length>0&&e[0].focus(),this.focused=!0})}static \u0275fac=(()=>{let e;return function(i){return(e||(e=g(t)))(i||t)}})();static \u0275dir=k({type:t,selectors:[["","pAutoFocus",""]],inputs:{autofocus:[0,"pAutoFocus","autofocus"]},features:[b]})}return t})();var xi=`
    .p-badge {
        display: inline-flex;
        border-radius: dt('badge.border.radius');
        align-items: center;
        justify-content: center;
        padding: dt('badge.padding');
        background: dt('badge.primary.background');
        color: dt('badge.primary.color');
        font-size: dt('badge.font.size');
        font-weight: dt('badge.font.weight');
        min-width: dt('badge.min.width');
        height: dt('badge.height');
    }

    .p-badge-dot {
        width: dt('badge.dot.size');
        min-width: dt('badge.dot.size');
        height: dt('badge.dot.size');
        border-radius: 50%;
        padding: 0;
    }

    .p-badge-circle {
        padding: 0;
        border-radius: 50%;
    }

    .p-badge-secondary {
        background: dt('badge.secondary.background');
        color: dt('badge.secondary.color');
    }

    .p-badge-success {
        background: dt('badge.success.background');
        color: dt('badge.success.color');
    }

    .p-badge-info {
        background: dt('badge.info.background');
        color: dt('badge.info.color');
    }

    .p-badge-warn {
        background: dt('badge.warn.background');
        color: dt('badge.warn.color');
    }

    .p-badge-danger {
        background: dt('badge.danger.background');
        color: dt('badge.danger.color');
    }

    .p-badge-contrast {
        background: dt('badge.contrast.background');
        color: dt('badge.contrast.color');
    }

    .p-badge-sm {
        font-size: dt('badge.sm.font.size');
        min-width: dt('badge.sm.min.width');
        height: dt('badge.sm.height');
    }

    .p-badge-lg {
        font-size: dt('badge.lg.font.size');
        min-width: dt('badge.lg.min.width');
        height: dt('badge.lg.height');
    }

    .p-badge-xl {
        font-size: dt('badge.xl.font.size');
        min-width: dt('badge.xl.min.width');
        height: dt('badge.xl.height');
    }
`;var wo=`
    ${xi}

    /* For PrimeNG (directive)*/
    .p-overlay-badge {
        position: relative;
    }

    .p-overlay-badge > .p-badge {
        position: absolute;
        top: 0;
        inset-inline-end: 0;
        transform: translate(50%, -50%);
        transform-origin: 100% 0;
        margin: 0;
    }
`,Do={root:({instance:t})=>["p-badge p-component",{"p-badge-circle":Bt(t.value())&&String(t.value()).length===1,"p-badge-dot":hi(t.value()),"p-badge-sm":t.size()==="small"||t.badgeSize()==="small","p-badge-lg":t.size()==="large"||t.badgeSize()==="large","p-badge-xl":t.size()==="xlarge"||t.badgeSize()==="xlarge","p-badge-info":t.severity()==="info","p-badge-success":t.severity()==="success","p-badge-warn":t.severity()==="warn","p-badge-danger":t.severity()==="danger","p-badge-secondary":t.severity()==="secondary","p-badge-contrast":t.severity()==="contrast"}]},wi=(()=>{class t extends N{name="badge";theme=wo;classes=Do;static \u0275fac=(()=>{let e;return function(i){return(e||(e=g(t)))(i||t)}})();static \u0275prov=T({token:t,factory:t.\u0275fac})}return t})();var Ct=(()=>{class t extends R{styleClass=S();badgeSize=S();size=S();severity=S();value=S();badgeDisabled=S(!1,{transform:y});_componentStyle=u(wi);static \u0275fac=(()=>{let e;return function(i){return(e||(e=g(t)))(i||t)}})();static \u0275cmp=v({type:t,selectors:[["p-badge"]],hostVars:4,hostBindings:function(n,i){n&2&&(_(i.cn(i.cx("root"),i.styleClass())),gt("display",i.badgeDisabled()?"none":null))},inputs:{styleClass:[1,"styleClass"],badgeSize:[1,"badgeSize"],size:[1,"size"],severity:[1,"severity"],value:[1,"value"],badgeDisabled:[1,"badgeDisabled"]},features:[E([wi]),b],decls:1,vars:1,template:function(n,i){n&1&&O(0),n&2&&ce(i.value())},dependencies:[ae,Y],encapsulation:2,changeDetection:0})}return t})(),xt=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=W({type:t});static \u0275inj=$({imports:[Ct,Y,Y]})}return t})();var Io=["*"],Eo={root:"p-fluid"},Ii=(()=>{class t extends N{name="fluid";classes=Eo;static \u0275fac=(()=>{let e;return function(i){return(e||(e=g(t)))(i||t)}})();static \u0275prov=T({token:t,factory:t.\u0275fac})}return t})();var Wt=(()=>{class t extends R{_componentStyle=u(Ii);static \u0275fac=(()=>{let e;return function(i){return(e||(e=g(t)))(i||t)}})();static \u0275cmp=v({type:t,selectors:[["p-fluid"]],hostVars:2,hostBindings:function(n,i){n&2&&_(i.cx("root"))},features:[E([Ii]),b],ngContentSelectors:Io,decls:1,vars:0,template:function(n,i){n&1&&(Ge(),Ue(0))},dependencies:[ae],encapsulation:2,changeDetection:0})}return t})();var To=["*"],Mo=`
.p-icon {
    display: inline-block;
    vertical-align: baseline;
}

.p-icon-spin {
    -webkit-animation: p-icon-spin 2s infinite linear;
    animation: p-icon-spin 2s infinite linear;
}

@-webkit-keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}

@keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}
`,Ei=(()=>{class t extends N{name="baseicon";css=Mo;static \u0275fac=(()=>{let e;return function(i){return(e||(e=g(t)))(i||t)}})();static \u0275prov=T({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Be=(()=>{class t extends R{spin=!1;_componentStyle=u(Ei);getClassNames(){return dt("p-icon",{"p-icon-spin":this.spin})}static \u0275fac=(()=>{let e;return function(i){return(e||(e=g(t)))(i||t)}})();static \u0275cmp=v({type:t,selectors:[["ng-component"]],hostAttrs:["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],hostVars:2,hostBindings:function(n,i){n&2&&_(i.getClassNames())},inputs:{spin:[2,"spin","spin",y]},features:[E([Ei]),b],ngContentSelectors:To,decls:1,vars:0,template:function(n,i){n&1&&(Ge(),Ue(0))},encapsulation:2,changeDetection:0})}return t})();var So=["data-p-icon","spinner"],Ti=(()=>{class t extends Be{pathId;ngOnInit(){super.ngOnInit(),this.pathId="url(#"+te()+")"}static \u0275fac=(()=>{let e;return function(i){return(e||(e=g(t)))(i||t)}})();static \u0275cmp=v({type:t,selectors:[["","data-p-icon","spinner"]],features:[b],attrs:So,decls:5,vars:2,consts:[["d","M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(n,i){n&1&&(ne(),pe(0,"g"),ge(1,"path",0),me(),pe(2,"defs")(3,"clipPath",1),ge(4,"rect",2),me()()),n&2&&(M("clip-path",i.pathId),l(3),nt("id",i.pathId))},encapsulation:2})}return t})();var Vo=["data-p-icon","times"],Mi=(()=>{class t extends Be{static \u0275fac=(()=>{let e;return function(i){return(e||(e=g(t)))(i||t)}})();static \u0275cmp=v({type:t,selectors:[["","data-p-icon","times"]],features:[b],attrs:Vo,decls:1,vars:0,consts:[["d","M8.01186 7.00933L12.27 2.75116C12.341 2.68501 12.398 2.60524 12.4375 2.51661C12.4769 2.42798 12.4982 2.3323 12.4999 2.23529C12.5016 2.13827 12.4838 2.0419 12.4474 1.95194C12.4111 1.86197 12.357 1.78024 12.2884 1.71163C12.2198 1.64302 12.138 1.58893 12.0481 1.55259C11.9581 1.51625 11.8617 1.4984 11.7647 1.50011C11.6677 1.50182 11.572 1.52306 11.4834 1.56255C11.3948 1.60204 11.315 1.65898 11.2488 1.72997L6.99067 5.98814L2.7325 1.72997C2.59553 1.60234 2.41437 1.53286 2.22718 1.53616C2.03999 1.53946 1.8614 1.61529 1.72901 1.74767C1.59663 1.88006 1.5208 2.05865 1.5175 2.24584C1.5142 2.43303 1.58368 2.61419 1.71131 2.75116L5.96948 7.00933L1.71131 11.2675C1.576 11.403 1.5 11.5866 1.5 11.7781C1.5 11.9696 1.576 12.1532 1.71131 12.2887C1.84679 12.424 2.03043 12.5 2.2219 12.5C2.41338 12.5 2.59702 12.424 2.7325 12.2887L6.99067 8.03052L11.2488 12.2887C11.3843 12.424 11.568 12.5 11.7594 12.5C11.9509 12.5 12.1346 12.424 12.27 12.2887C12.4053 12.1532 12.4813 11.9696 12.4813 11.7781C12.4813 11.5866 12.4053 11.403 12.27 11.2675L8.01186 7.00933Z","fill","currentColor"]],template:function(n,i){n&1&&(ne(),ge(0,"path",0))},encapsulation:2})}return t})();var ko=["data-p-icon","window-maximize"],Si=(()=>{class t extends Be{pathId;ngOnInit(){super.ngOnInit(),this.pathId="url(#"+te()+")"}static \u0275fac=(()=>{let e;return function(i){return(e||(e=g(t)))(i||t)}})();static \u0275cmp=v({type:t,selectors:[["","data-p-icon","window-maximize"]],features:[b],attrs:ko,decls:5,vars:2,consts:[["fill-rule","evenodd","clip-rule","evenodd","d","M7 14H11.8C12.3835 14 12.9431 13.7682 13.3556 13.3556C13.7682 12.9431 14 12.3835 14 11.8V2.2C14 1.61652 13.7682 1.05694 13.3556 0.644365C12.9431 0.231785 12.3835 0 11.8 0H2.2C1.61652 0 1.05694 0.231785 0.644365 0.644365C0.231785 1.05694 0 1.61652 0 2.2V7C0 7.15913 0.063214 7.31174 0.175736 7.42426C0.288258 7.53679 0.44087 7.6 0.6 7.6C0.75913 7.6 0.911742 7.53679 1.02426 7.42426C1.13679 7.31174 1.2 7.15913 1.2 7V2.2C1.2 1.93478 1.30536 1.68043 1.49289 1.49289C1.68043 1.30536 1.93478 1.2 2.2 1.2H11.8C12.0652 1.2 12.3196 1.30536 12.5071 1.49289C12.6946 1.68043 12.8 1.93478 12.8 2.2V11.8C12.8 12.0652 12.6946 12.3196 12.5071 12.5071C12.3196 12.6946 12.0652 12.8 11.8 12.8H7C6.84087 12.8 6.68826 12.8632 6.57574 12.9757C6.46321 13.0883 6.4 13.2409 6.4 13.4C6.4 13.5591 6.46321 13.7117 6.57574 13.8243C6.68826 13.9368 6.84087 14 7 14ZM9.77805 7.42192C9.89013 7.534 10.0415 7.59788 10.2 7.59995C10.3585 7.59788 10.5099 7.534 10.622 7.42192C10.7341 7.30985 10.798 7.15844 10.8 6.99995V3.94242C10.8066 3.90505 10.8096 3.86689 10.8089 3.82843C10.8079 3.77159 10.7988 3.7157 10.7824 3.6623C10.756 3.55552 10.701 3.45698 10.622 3.37798C10.5099 3.2659 10.3585 3.20202 10.2 3.19995H7.00002C6.84089 3.19995 6.68828 3.26317 6.57576 3.37569C6.46324 3.48821 6.40002 3.64082 6.40002 3.79995C6.40002 3.95908 6.46324 4.11169 6.57576 4.22422C6.68828 4.33674 6.84089 4.39995 7.00002 4.39995H8.80006L6.19997 7.00005C6.10158 7.11005 6.04718 7.25246 6.04718 7.40005C6.04718 7.54763 6.10158 7.69004 6.19997 7.80005C6.30202 7.91645 6.44561 7.98824 6.59997 8.00005C6.75432 7.98824 6.89791 7.91645 6.99997 7.80005L9.60002 5.26841V6.99995C9.6021 7.15844 9.66598 7.30985 9.77805 7.42192ZM1.4 14H3.8C4.17066 13.9979 4.52553 13.8498 4.78763 13.5877C5.04973 13.3256 5.1979 12.9707 5.2 12.6V10.2C5.1979 9.82939 5.04973 9.47452 4.78763 9.21242C4.52553 8.95032 4.17066 8.80215 3.8 8.80005H1.4C1.02934 8.80215 0.674468 8.95032 0.412371 9.21242C0.150274 9.47452 0.00210008 9.82939 0 10.2V12.6C0.00210008 12.9707 0.150274 13.3256 0.412371 13.5877C0.674468 13.8498 1.02934 13.9979 1.4 14ZM1.25858 10.0586C1.29609 10.0211 1.34696 10 1.4 10H3.8C3.85304 10 3.90391 10.0211 3.94142 10.0586C3.97893 10.0961 4 10.147 4 10.2V12.6C4 12.6531 3.97893 12.704 3.94142 12.7415C3.90391 12.779 3.85304 12.8 3.8 12.8H1.4C1.34696 12.8 1.29609 12.779 1.25858 12.7415C1.22107 12.704 1.2 12.6531 1.2 12.6V10.2C1.2 10.147 1.22107 10.0961 1.25858 10.0586Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(n,i){n&1&&(ne(),pe(0,"g"),ge(1,"path",0),me(),pe(2,"defs")(3,"clipPath",1),ge(4,"rect",2),me()()),n&2&&(M("clip-path",i.pathId),l(3),nt("id",i.pathId))},encapsulation:2})}return t})();var Oo=["data-p-icon","window-minimize"],Vi=(()=>{class t extends Be{pathId;ngOnInit(){super.ngOnInit(),this.pathId="url(#"+te()+")"}static \u0275fac=(()=>{let e;return function(i){return(e||(e=g(t)))(i||t)}})();static \u0275cmp=v({type:t,selectors:[["","data-p-icon","window-minimize"]],features:[b],attrs:Oo,decls:5,vars:2,consts:[["fill-rule","evenodd","clip-rule","evenodd","d","M11.8 0H2.2C1.61652 0 1.05694 0.231785 0.644365 0.644365C0.231785 1.05694 0 1.61652 0 2.2V7C0 7.15913 0.063214 7.31174 0.175736 7.42426C0.288258 7.53679 0.44087 7.6 0.6 7.6C0.75913 7.6 0.911742 7.53679 1.02426 7.42426C1.13679 7.31174 1.2 7.15913 1.2 7V2.2C1.2 1.93478 1.30536 1.68043 1.49289 1.49289C1.68043 1.30536 1.93478 1.2 2.2 1.2H11.8C12.0652 1.2 12.3196 1.30536 12.5071 1.49289C12.6946 1.68043 12.8 1.93478 12.8 2.2V11.8C12.8 12.0652 12.6946 12.3196 12.5071 12.5071C12.3196 12.6946 12.0652 12.8 11.8 12.8H7C6.84087 12.8 6.68826 12.8632 6.57574 12.9757C6.46321 13.0883 6.4 13.2409 6.4 13.4C6.4 13.5591 6.46321 13.7117 6.57574 13.8243C6.68826 13.9368 6.84087 14 7 14H11.8C12.3835 14 12.9431 13.7682 13.3556 13.3556C13.7682 12.9431 14 12.3835 14 11.8V2.2C14 1.61652 13.7682 1.05694 13.3556 0.644365C12.9431 0.231785 12.3835 0 11.8 0ZM6.368 7.952C6.44137 7.98326 6.52025 7.99958 6.6 8H9.8C9.95913 8 10.1117 7.93678 10.2243 7.82426C10.3368 7.71174 10.4 7.55913 10.4 7.4C10.4 7.24087 10.3368 7.08826 10.2243 6.97574C10.1117 6.86321 9.95913 6.8 9.8 6.8H8.048L10.624 4.224C10.73 4.11026 10.7877 3.95982 10.7849 3.80438C10.7822 3.64894 10.7192 3.50063 10.6093 3.3907C10.4994 3.28077 10.3511 3.2178 10.1956 3.21506C10.0402 3.21232 9.88974 3.27002 9.776 3.376L7.2 5.952V4.2C7.2 4.04087 7.13679 3.88826 7.02426 3.77574C6.91174 3.66321 6.75913 3.6 6.6 3.6C6.44087 3.6 6.28826 3.66321 6.17574 3.77574C6.06321 3.88826 6 4.04087 6 4.2V7.4C6.00042 7.47975 6.01674 7.55862 6.048 7.632C6.07656 7.70442 6.11971 7.7702 6.17475 7.82524C6.2298 7.88029 6.29558 7.92344 6.368 7.952ZM1.4 8.80005H3.8C4.17066 8.80215 4.52553 8.95032 4.78763 9.21242C5.04973 9.47452 5.1979 9.82939 5.2 10.2V12.6C5.1979 12.9707 5.04973 13.3256 4.78763 13.5877C4.52553 13.8498 4.17066 13.9979 3.8 14H1.4C1.02934 13.9979 0.674468 13.8498 0.412371 13.5877C0.150274 13.3256 0.00210008 12.9707 0 12.6V10.2C0.00210008 9.82939 0.150274 9.47452 0.412371 9.21242C0.674468 8.95032 1.02934 8.80215 1.4 8.80005ZM3.94142 12.7415C3.97893 12.704 4 12.6531 4 12.6V10.2C4 10.147 3.97893 10.0961 3.94142 10.0586C3.90391 10.0211 3.85304 10 3.8 10H1.4C1.34696 10 1.29609 10.0211 1.25858 10.0586C1.22107 10.0961 1.2 10.147 1.2 10.2V12.6C1.2 12.6531 1.22107 12.704 1.25858 12.7415C1.29609 12.779 1.34696 12.8 1.4 12.8H3.8C3.85304 12.8 3.90391 12.779 3.94142 12.7415Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(n,i){n&1&&(ne(),pe(0,"g"),ge(1,"path",0),me(),pe(2,"defs")(3,"clipPath",1),ge(4,"rect",2),me()()),n&2&&(M("clip-path",i.pathId),l(3),nt("id",i.pathId))},encapsulation:2})}return t})();var ki=`
    .p-ink {
        display: block;
        position: absolute;
        background: dt('ripple.background');
        border-radius: 100%;
        transform: scale(0);
        pointer-events: none;
    }

    .p-ink-active {
        animation: ripple 0.4s linear;
    }

    @keyframes ripple {
        100% {
            opacity: 0;
            transform: scale(2.5);
        }
    }
`;var Fo=`
    ${ki}
    /* For PrimeNG */
    .p-ripple {
        overflow: hidden;
        position: relative;
    }

    .p-ripple-disabled .p-ink {
        display: none !important;
    }

    @keyframes ripple {
        100% {
            opacity: 0;
            transform: scale(2.5);
        }
    }
`,Ao={root:"p-ink"},Oi=(()=>{class t extends N{name="ripple";theme=Fo;classes=Ao;static \u0275fac=(()=>{let e;return function(i){return(e||(e=g(t)))(i||t)}})();static \u0275prov=T({token:t,factory:t.\u0275fac})}return t})();var Gt=(()=>{class t extends R{zone=u(tt);_componentStyle=u(Oi);animationListener;mouseDownListener;timeout;constructor(){super(),Pt(()=>{U(this.platformId)&&(this.config.ripple()?this.zone.runOutsideAngular(()=>{this.create(),this.mouseDownListener=this.renderer.listen(this.el.nativeElement,"mousedown",this.onMouseDown.bind(this))}):this.remove())})}ngAfterViewInit(){super.ngAfterViewInit()}onMouseDown(e){let n=this.getInk();if(!n||this.document.defaultView?.getComputedStyle(n,null).display==="none")return;if(ye(n,"p-ink-active"),!_n(n)&&!yn(n)){let c=Math.max(oe(this.el.nativeElement),le(this.el.nativeElement));n.style.height=c+"px",n.style.width=c+"px"}let i=ci(this.el.nativeElement),r=e.pageX-i.left+this.document.body.scrollTop-yn(n)/2,s=e.pageY-i.top+this.document.body.scrollLeft-_n(n)/2;this.renderer.setStyle(n,"top",s+"px"),this.renderer.setStyle(n,"left",r+"px"),Ve(n,"p-ink-active"),this.timeout=setTimeout(()=>{let c=this.getInk();c&&ye(c,"p-ink-active")},401)}getInk(){let e=this.el.nativeElement.children;for(let n=0;n<e.length;n++)if(typeof e[n].className=="string"&&e[n].className.indexOf("p-ink")!==-1)return e[n];return null}resetInk(){let e=this.getInk();e&&ye(e,"p-ink-active")}onAnimationEnd(e){this.timeout&&clearTimeout(this.timeout),ye(e.currentTarget,"p-ink-active")}create(){let e=this.renderer.createElement("span");this.renderer.addClass(e,"p-ink"),this.renderer.appendChild(this.el.nativeElement,e),this.renderer.setAttribute(e,"aria-hidden","true"),this.renderer.setAttribute(e,"role","presentation"),this.animationListener||(this.animationListener=this.renderer.listen(e,"animationend",this.onAnimationEnd.bind(this)))}remove(){let e=this.getInk();e&&(this.mouseDownListener&&this.mouseDownListener(),this.animationListener&&this.animationListener(),this.mouseDownListener=null,this.animationListener=null,pi(e))}ngOnDestroy(){this.config&&this.config.ripple()&&this.remove(),super.ngOnDestroy()}static \u0275fac=function(n){return new(n||t)};static \u0275dir=k({type:t,selectors:[["","pRipple",""]],hostAttrs:[1,"p-ripple"],features:[E([Oi]),b]})}return t})();var Fi=`
    .p-button {
        display: inline-flex;
        cursor: pointer;
        user-select: none;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        position: relative;
        color: dt('button.primary.color');
        background: dt('button.primary.background');
        border: 1px solid dt('button.primary.border.color');
        padding: dt('button.padding.y') dt('button.padding.x');
        font-size: 1rem;
        font-family: inherit;
        font-feature-settings: inherit;
        transition:
            background dt('button.transition.duration'),
            color dt('button.transition.duration'),
            border-color dt('button.transition.duration'),
            outline-color dt('button.transition.duration'),
            box-shadow dt('button.transition.duration');
        border-radius: dt('button.border.radius');
        outline-color: transparent;
        gap: dt('button.gap');
    }

    .p-button:disabled {
        cursor: default;
    }

    .p-button-icon-right {
        order: 1;
    }

    .p-button-icon-right:dir(rtl) {
        order: -1;
    }

    .p-button:not(.p-button-vertical) .p-button-icon:not(.p-button-icon-right):dir(rtl) {
        order: 1;
    }

    .p-button-icon-bottom {
        order: 2;
    }

    .p-button-icon-only {
        width: dt('button.icon.only.width');
        padding-inline-start: 0;
        padding-inline-end: 0;
        gap: 0;
    }

    .p-button-icon-only.p-button-rounded {
        border-radius: 50%;
        height: dt('button.icon.only.width');
    }

    .p-button-icon-only .p-button-label {
        visibility: hidden;
        width: 0;
    }

    .p-button-icon-only::after {
        content: "\0A0";
        visibility: hidden;
        width: 0;
    }

    .p-button-sm {
        font-size: dt('button.sm.font.size');
        padding: dt('button.sm.padding.y') dt('button.sm.padding.x');
    }

    .p-button-sm .p-button-icon {
        font-size: dt('button.sm.font.size');
    }

    .p-button-sm.p-button-icon-only {
        width: dt('button.sm.icon.only.width');
    }

    .p-button-sm.p-button-icon-only.p-button-rounded {
        height: dt('button.sm.icon.only.width');
    }

    .p-button-lg {
        font-size: dt('button.lg.font.size');
        padding: dt('button.lg.padding.y') dt('button.lg.padding.x');
    }

    .p-button-lg .p-button-icon {
        font-size: dt('button.lg.font.size');
    }

    .p-button-lg.p-button-icon-only {
        width: dt('button.lg.icon.only.width');
    }

    .p-button-lg.p-button-icon-only.p-button-rounded {
        height: dt('button.lg.icon.only.width');
    }

    .p-button-vertical {
        flex-direction: column;
    }

    .p-button-label {
        font-weight: dt('button.label.font.weight');
    }

    .p-button-fluid {
        width: 100%;
    }

    .p-button-fluid.p-button-icon-only {
        width: dt('button.icon.only.width');
    }

    .p-button:not(:disabled):hover {
        background: dt('button.primary.hover.background');
        border: 1px solid dt('button.primary.hover.border.color');
        color: dt('button.primary.hover.color');
    }

    .p-button:not(:disabled):active {
        background: dt('button.primary.active.background');
        border: 1px solid dt('button.primary.active.border.color');
        color: dt('button.primary.active.color');
    }

    .p-button:focus-visible {
        box-shadow: dt('button.primary.focus.ring.shadow');
        outline: dt('button.focus.ring.width') dt('button.focus.ring.style') dt('button.primary.focus.ring.color');
        outline-offset: dt('button.focus.ring.offset');
    }

    .p-button .p-badge {
        min-width: dt('button.badge.size');
        height: dt('button.badge.size');
        line-height: dt('button.badge.size');
    }

    .p-button-raised {
        box-shadow: dt('button.raised.shadow');
    }

    .p-button-rounded {
        border-radius: dt('button.rounded.border.radius');
    }

    .p-button-secondary {
        background: dt('button.secondary.background');
        border: 1px solid dt('button.secondary.border.color');
        color: dt('button.secondary.color');
    }

    .p-button-secondary:not(:disabled):hover {
        background: dt('button.secondary.hover.background');
        border: 1px solid dt('button.secondary.hover.border.color');
        color: dt('button.secondary.hover.color');
    }

    .p-button-secondary:not(:disabled):active {
        background: dt('button.secondary.active.background');
        border: 1px solid dt('button.secondary.active.border.color');
        color: dt('button.secondary.active.color');
    }

    .p-button-secondary:focus-visible {
        outline-color: dt('button.secondary.focus.ring.color');
        box-shadow: dt('button.secondary.focus.ring.shadow');
    }

    .p-button-success {
        background: dt('button.success.background');
        border: 1px solid dt('button.success.border.color');
        color: dt('button.success.color');
    }

    .p-button-success:not(:disabled):hover {
        background: dt('button.success.hover.background');
        border: 1px solid dt('button.success.hover.border.color');
        color: dt('button.success.hover.color');
    }

    .p-button-success:not(:disabled):active {
        background: dt('button.success.active.background');
        border: 1px solid dt('button.success.active.border.color');
        color: dt('button.success.active.color');
    }

    .p-button-success:focus-visible {
        outline-color: dt('button.success.focus.ring.color');
        box-shadow: dt('button.success.focus.ring.shadow');
    }

    .p-button-info {
        background: dt('button.info.background');
        border: 1px solid dt('button.info.border.color');
        color: dt('button.info.color');
    }

    .p-button-info:not(:disabled):hover {
        background: dt('button.info.hover.background');
        border: 1px solid dt('button.info.hover.border.color');
        color: dt('button.info.hover.color');
    }

    .p-button-info:not(:disabled):active {
        background: dt('button.info.active.background');
        border: 1px solid dt('button.info.active.border.color');
        color: dt('button.info.active.color');
    }

    .p-button-info:focus-visible {
        outline-color: dt('button.info.focus.ring.color');
        box-shadow: dt('button.info.focus.ring.shadow');
    }

    .p-button-warn {
        background: dt('button.warn.background');
        border: 1px solid dt('button.warn.border.color');
        color: dt('button.warn.color');
    }

    .p-button-warn:not(:disabled):hover {
        background: dt('button.warn.hover.background');
        border: 1px solid dt('button.warn.hover.border.color');
        color: dt('button.warn.hover.color');
    }

    .p-button-warn:not(:disabled):active {
        background: dt('button.warn.active.background');
        border: 1px solid dt('button.warn.active.border.color');
        color: dt('button.warn.active.color');
    }

    .p-button-warn:focus-visible {
        outline-color: dt('button.warn.focus.ring.color');
        box-shadow: dt('button.warn.focus.ring.shadow');
    }

    .p-button-help {
        background: dt('button.help.background');
        border: 1px solid dt('button.help.border.color');
        color: dt('button.help.color');
    }

    .p-button-help:not(:disabled):hover {
        background: dt('button.help.hover.background');
        border: 1px solid dt('button.help.hover.border.color');
        color: dt('button.help.hover.color');
    }

    .p-button-help:not(:disabled):active {
        background: dt('button.help.active.background');
        border: 1px solid dt('button.help.active.border.color');
        color: dt('button.help.active.color');
    }

    .p-button-help:focus-visible {
        outline-color: dt('button.help.focus.ring.color');
        box-shadow: dt('button.help.focus.ring.shadow');
    }

    .p-button-danger {
        background: dt('button.danger.background');
        border: 1px solid dt('button.danger.border.color');
        color: dt('button.danger.color');
    }

    .p-button-danger:not(:disabled):hover {
        background: dt('button.danger.hover.background');
        border: 1px solid dt('button.danger.hover.border.color');
        color: dt('button.danger.hover.color');
    }

    .p-button-danger:not(:disabled):active {
        background: dt('button.danger.active.background');
        border: 1px solid dt('button.danger.active.border.color');
        color: dt('button.danger.active.color');
    }

    .p-button-danger:focus-visible {
        outline-color: dt('button.danger.focus.ring.color');
        box-shadow: dt('button.danger.focus.ring.shadow');
    }

    .p-button-contrast {
        background: dt('button.contrast.background');
        border: 1px solid dt('button.contrast.border.color');
        color: dt('button.contrast.color');
    }

    .p-button-contrast:not(:disabled):hover {
        background: dt('button.contrast.hover.background');
        border: 1px solid dt('button.contrast.hover.border.color');
        color: dt('button.contrast.hover.color');
    }

    .p-button-contrast:not(:disabled):active {
        background: dt('button.contrast.active.background');
        border: 1px solid dt('button.contrast.active.border.color');
        color: dt('button.contrast.active.color');
    }

    .p-button-contrast:focus-visible {
        outline-color: dt('button.contrast.focus.ring.color');
        box-shadow: dt('button.contrast.focus.ring.shadow');
    }

    .p-button-outlined {
        background: transparent;
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined:not(:disabled):hover {
        background: dt('button.outlined.primary.hover.background');
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined:not(:disabled):active {
        background: dt('button.outlined.primary.active.background');
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined.p-button-secondary {
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-secondary:not(:disabled):hover {
        background: dt('button.outlined.secondary.hover.background');
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-secondary:not(:disabled):active {
        background: dt('button.outlined.secondary.active.background');
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-success {
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-success:not(:disabled):hover {
        background: dt('button.outlined.success.hover.background');
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-success:not(:disabled):active {
        background: dt('button.outlined.success.active.background');
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-info {
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-info:not(:disabled):hover {
        background: dt('button.outlined.info.hover.background');
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-info:not(:disabled):active {
        background: dt('button.outlined.info.active.background');
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-warn {
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-warn:not(:disabled):hover {
        background: dt('button.outlined.warn.hover.background');
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-warn:not(:disabled):active {
        background: dt('button.outlined.warn.active.background');
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-help {
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-help:not(:disabled):hover {
        background: dt('button.outlined.help.hover.background');
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-help:not(:disabled):active {
        background: dt('button.outlined.help.active.background');
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-danger {
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-danger:not(:disabled):hover {
        background: dt('button.outlined.danger.hover.background');
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-danger:not(:disabled):active {
        background: dt('button.outlined.danger.active.background');
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-contrast {
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-contrast:not(:disabled):hover {
        background: dt('button.outlined.contrast.hover.background');
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-contrast:not(:disabled):active {
        background: dt('button.outlined.contrast.active.background');
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-plain {
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-outlined.p-button-plain:not(:disabled):hover {
        background: dt('button.outlined.plain.hover.background');
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-outlined.p-button-plain:not(:disabled):active {
        background: dt('button.outlined.plain.active.background');
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-text {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text:not(:disabled):hover {
        background: dt('button.text.primary.hover.background');
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text:not(:disabled):active {
        background: dt('button.text.primary.active.background');
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text.p-button-secondary {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-secondary:not(:disabled):hover {
        background: dt('button.text.secondary.hover.background');
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-secondary:not(:disabled):active {
        background: dt('button.text.secondary.active.background');
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-success {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-success:not(:disabled):hover {
        background: dt('button.text.success.hover.background');
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-success:not(:disabled):active {
        background: dt('button.text.success.active.background');
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-info {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-info:not(:disabled):hover {
        background: dt('button.text.info.hover.background');
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-info:not(:disabled):active {
        background: dt('button.text.info.active.background');
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-warn {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-warn:not(:disabled):hover {
        background: dt('button.text.warn.hover.background');
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-warn:not(:disabled):active {
        background: dt('button.text.warn.active.background');
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-help {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-help:not(:disabled):hover {
        background: dt('button.text.help.hover.background');
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-help:not(:disabled):active {
        background: dt('button.text.help.active.background');
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-danger {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-danger:not(:disabled):hover {
        background: dt('button.text.danger.hover.background');
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-danger:not(:disabled):active {
        background: dt('button.text.danger.active.background');
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-contrast {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-contrast:not(:disabled):hover {
        background: dt('button.text.contrast.hover.background');
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-contrast:not(:disabled):active {
        background: dt('button.text.contrast.active.background');
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-plain {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-text.p-button-plain:not(:disabled):hover {
        background: dt('button.text.plain.hover.background');
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-text.p-button-plain:not(:disabled):active {
        background: dt('button.text.plain.active.background');
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-link {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.color');
    }

    .p-button-link:not(:disabled):hover {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.hover.color');
    }

    .p-button-link:not(:disabled):hover .p-button-label {
        text-decoration: underline;
    }

    .p-button-link:not(:disabled):active {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.active.color');
    }
`;var Lo=["content"],Po=["loadingicon"],zo=["icon"],No=["*"],Li=t=>({class:t});function Ro(t,o){t&1&&ie(0)}function Bo(t,o){if(t&1&&A(0,"span"),t&2){let e=d(3);_(e.cn(e.cx("loadingIcon"),"pi-spin",e.loadingIcon)),M("aria-hidden",!0)("data-pc-section","loadingicon")}}function Ho(t,o){if(t&1&&(ne(),A(0,"svg",7)),t&2){let e=d(3);_(e.cn(e.cx("loadingIcon"),e.spinnerIconClass())),a("spin",!0),M("aria-hidden",!0)("data-pc-section","loadingicon")}}function jo(t,o){if(t&1&&(Z(0),f(1,Bo,1,4,"span",3)(2,Ho,1,5,"svg",6),Q()),t&2){let e=d(2);l(),a("ngIf",e.loadingIcon),l(),a("ngIf",!e.loadingIcon)}}function $o(t,o){}function Wo(t,o){if(t&1&&f(0,$o,0,0,"ng-template",8),t&2){let e=d(2);a("ngIf",e.loadingIconTemplate||e._loadingIconTemplate)}}function Go(t,o){if(t&1&&(Z(0),f(1,jo,3,2,"ng-container",2)(2,Wo,1,1,null,5),Q()),t&2){let e=d();l(),a("ngIf",!e.loadingIconTemplate&&!e._loadingIconTemplate),l(),a("ngTemplateOutlet",e.loadingIconTemplate||e._loadingIconTemplate)("ngTemplateOutletContext",se(3,Li,e.cx("loadingIcon")))}}function Uo(t,o){if(t&1&&A(0,"span"),t&2){let e=d(2);_(e.cn("icon",e.iconClass())),M("data-pc-section","icon")}}function qo(t,o){}function Zo(t,o){if(t&1&&f(0,qo,0,0,"ng-template",8),t&2){let e=d(2);a("ngIf",!e.icon&&(e.iconTemplate||e._iconTemplate))}}function Qo(t,o){if(t&1&&(Z(0),f(1,Uo,1,3,"span",3)(2,Zo,1,1,null,5),Q()),t&2){let e=d();l(),a("ngIf",e.icon&&!e.iconTemplate&&!e._iconTemplate),l(),a("ngTemplateOutlet",e.iconTemplate||e._iconTemplate)("ngTemplateOutletContext",se(3,Li,e.cx("icon")))}}function Yo(t,o){if(t&1&&(m(0,"span"),O(1),p()),t&2){let e=d();_(e.cx("label")),M("aria-hidden",e.icon&&!e.label)("data-pc-section","label"),l(),ce(e.label)}}function Xo(t,o){if(t&1&&A(0,"p-badge",9),t&2){let e=d();a("value",e.badge)("severity",e.badgeSeverity)}}var Ko={root:({instance:t})=>["p-button p-component",{"p-button-icon-only":(t.icon||t.buttonProps?.icon||t.iconTemplate||t._iconTemplate||t.loadingIcon||t.loadingIconTemplate||t._loadingIconTemplate)&&!t.label&&!t.buttonProps?.label,"p-button-vertical":(t.iconPos==="top"||t.iconPos==="bottom")&&t.label,"p-button-loading":t.loading||t.buttonProps?.loading,"p-button-link":t.link||t.buttonProps?.link,[`p-button-${t.severity||t.buttonProps?.severity}`]:t.severity||t.buttonProps?.severity,"p-button-raised":t.raised||t.buttonProps?.raised,"p-button-rounded":t.rounded||t.buttonProps?.rounded,"p-button-text":t.text||t.variant==="text"||t.buttonProps?.text||t.buttonProps?.variant==="text","p-button-outlined":t.outlined||t.variant==="outlined"||t.buttonProps?.outlined||t.buttonProps?.variant==="outlined","p-button-sm":t.size==="small"||t.buttonProps?.size==="small","p-button-lg":t.size==="large"||t.buttonProps?.size==="large","p-button-plain":t.plain||t.buttonProps?.plain,"p-button-fluid":t.hasFluid}],loadingIcon:"p-button-loading-icon",icon:({instance:t})=>["p-button-icon",{[`p-button-icon-${t.iconPos||t.buttonProps?.iconPos}`]:t.label||t.buttonProps?.label,"p-button-icon-left":(t.iconPos==="left"||t.buttonProps?.iconPos==="left")&&t.label||t.buttonProps?.label,"p-button-icon-right":(t.iconPos==="right"||t.buttonProps?.iconPos==="right")&&t.label||t.buttonProps?.label},t.icon,t.buttonProps?.icon],spinnerIcon:({instance:t})=>Object.entries(t.iconClass()).filter(([,o])=>!!o).reduce((o,[e])=>o+` ${e}`,"p-button-loading-icon"),label:"p-button-label"},Ai=(()=>{class t extends N{name="button";theme=Fi;classes=Ko;static \u0275fac=(()=>{let e;return function(i){return(e||(e=g(t)))(i||t)}})();static \u0275prov=T({token:t,factory:t.\u0275fac})}return t})();var Dn=(()=>{class t extends R{type="button";iconPos="left";icon;badge;label;disabled;loading=!1;loadingIcon;raised=!1;rounded=!1;text=!1;plain=!1;severity;outlined=!1;link=!1;tabindex;size;variant;style;styleClass;badgeClass;badgeSeverity="secondary";ariaLabel;buttonProps;autofocus;fluid=S(void 0,{transform:y});onClick=new q;onFocus=new q;onBlur=new q;contentTemplate;loadingIconTemplate;iconTemplate;templates;pcFluid=u(Wt,{optional:!0,host:!0,skipSelf:!0});get hasFluid(){return this.fluid()??!!this.pcFluid}_componentStyle=u(Ai);_contentTemplate;_iconTemplate;_loadingIconTemplate;ngAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"content":this._contentTemplate=e.template;break;case"icon":this._iconTemplate=e.template;break;case"loadingicon":this._loadingIconTemplate=e.template;break;default:this._contentTemplate=e.template;break}})}spinnerIconClass(){return Object.entries(this.iconClass()).filter(([,e])=>!!e).reduce((e,[n])=>e+` ${n}`,"p-button-loading-icon")}iconClass(){return{[`p-button-loading-icon pi-spin ${this.loadingIcon??""}`]:this.loading,"p-button-icon":!0,[this.icon]:!0,"p-button-icon-left":this.iconPos==="left"&&this.label,"p-button-icon-right":this.iconPos==="right"&&this.label,"p-button-icon-top":this.iconPos==="top"&&this.label,"p-button-icon-bottom":this.iconPos==="bottom"&&this.label}}static \u0275fac=(()=>{let e;return function(i){return(e||(e=g(t)))(i||t)}})();static \u0275cmp=v({type:t,selectors:[["p-button"]],contentQueries:function(n,i,r){if(n&1&&(X(r,Lo,5),X(r,Po,5),X(r,zo,5),X(r,rt,4)),n&2){let s;P(s=z())&&(i.contentTemplate=s.first),P(s=z())&&(i.loadingIconTemplate=s.first),P(s=z())&&(i.iconTemplate=s.first),P(s=z())&&(i.templates=s)}},inputs:{type:"type",iconPos:"iconPos",icon:"icon",badge:"badge",label:"label",disabled:[2,"disabled","disabled",y],loading:[2,"loading","loading",y],loadingIcon:"loadingIcon",raised:[2,"raised","raised",y],rounded:[2,"rounded","rounded",y],text:[2,"text","text",y],plain:[2,"plain","plain",y],severity:"severity",outlined:[2,"outlined","outlined",y],link:[2,"link","link",y],tabindex:[2,"tabindex","tabindex",be],size:"size",variant:"variant",style:"style",styleClass:"styleClass",badgeClass:"badgeClass",badgeSeverity:"badgeSeverity",ariaLabel:"ariaLabel",buttonProps:"buttonProps",autofocus:[2,"autofocus","autofocus",y],fluid:[1,"fluid"]},outputs:{onClick:"onClick",onFocus:"onFocus",onBlur:"onBlur"},features:[E([Ai]),b],ngContentSelectors:No,decls:7,vars:15,consts:[["pRipple","",3,"click","focus","blur","ngStyle","disabled","pAutoFocus"],[4,"ngTemplateOutlet"],[4,"ngIf"],[3,"class",4,"ngIf"],[3,"value","severity",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["data-p-icon","spinner",3,"class","spin",4,"ngIf"],["data-p-icon","spinner",3,"spin"],[3,"ngIf"],[3,"value","severity"]],template:function(n,i){n&1&&(Ge(),m(0,"button",0),I("click",function(s){return i.onClick.emit(s)})("focus",function(s){return i.onFocus.emit(s)})("blur",function(s){return i.onBlur.emit(s)}),Ue(1),f(2,Ro,1,0,"ng-container",1)(3,Go,3,5,"ng-container",2)(4,Qo,3,5,"ng-container",2)(5,Yo,2,5,"span",3)(6,Xo,1,2,"p-badge",4),p()),n&2&&(_(i.cn(i.cx("root"),i.styleClass,i.buttonProps==null?null:i.buttonProps.styleClass)),a("ngStyle",i.style||(i.buttonProps==null?null:i.buttonProps.style))("disabled",i.disabled||i.loading||(i.buttonProps==null?null:i.buttonProps.disabled))("pAutoFocus",i.autofocus||(i.buttonProps==null?null:i.buttonProps.autofocus)),M("type",i.type||(i.buttonProps==null?null:i.buttonProps.type))("aria-label",i.ariaLabel||(i.buttonProps==null?null:i.buttonProps.ariaLabel))("data-pc-name","button")("data-pc-section","root")("tabindex",i.tabindex||(i.buttonProps==null?null:i.buttonProps.tabindex)),l(2),a("ngTemplateOutlet",i.contentTemplate||i._contentTemplate),l(),a("ngIf",i.loading),l(),a("ngIf",!i.loading),l(),a("ngIf",!i.contentTemplate&&!i._contentTemplate&&i.label),l(),a("ngIf",!i.contentTemplate&&!i._contentTemplate&&i.badge))},dependencies:[ae,Te,Me,it,Gt,$t,Ti,xt,Ct,Y],encapsulation:2,changeDetection:0})}return t})(),qd=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=W({type:t});static \u0275inj=$({imports:[ae,Dn,Y,Y]})}return t})();var Pi=(()=>{class t extends R{pFocusTrapDisabled=!1;platformId=u(Fe);document=u(Ce);firstHiddenFocusableElement;lastHiddenFocusableElement;ngOnInit(){super.ngOnInit(),U(this.platformId)&&!this.pFocusTrapDisabled&&!this.firstHiddenFocusableElement&&!this.lastHiddenFocusableElement&&this.createHiddenFocusableElements()}ngOnChanges(e){super.ngOnChanges(e),e.pFocusTrapDisabled&&U(this.platformId)&&(e.pFocusTrapDisabled.currentValue?this.removeHiddenFocusableElements():this.createHiddenFocusableElements())}removeHiddenFocusableElements(){this.firstHiddenFocusableElement&&this.firstHiddenFocusableElement.parentNode&&this.firstHiddenFocusableElement.parentNode.removeChild(this.firstHiddenFocusableElement),this.lastHiddenFocusableElement&&this.lastHiddenFocusableElement.parentNode&&this.lastHiddenFocusableElement.parentNode.removeChild(this.lastHiddenFocusableElement)}getComputedSelector(e){return`:not(.p-hidden-focusable):not([data-p-hidden-focusable="true"])${e??""}`}createHiddenFocusableElements(){let n=i=>si("span",{class:"p-hidden-accessible p-hidden-focusable",tabindex:"0",role:"presentation","aria-hidden":!0,"data-p-hidden-accessible":!0,"data-p-hidden-focusable":!0,onFocus:i?.bind(this)});this.firstHiddenFocusableElement=n(this.onFirstHiddenElementFocus),this.lastHiddenFocusableElement=n(this.onLastHiddenElementFocus),this.firstHiddenFocusableElement.setAttribute("data-pc-section","firstfocusableelement"),this.lastHiddenFocusableElement.setAttribute("data-pc-section","lastfocusableelement"),this.el.nativeElement.prepend(this.firstHiddenFocusableElement),this.el.nativeElement.append(this.lastHiddenFocusableElement)}onFirstHiddenElementFocus(e){let{currentTarget:n,relatedTarget:i}=e,r=i===this.lastHiddenFocusableElement||!this.el.nativeElement?.contains(i)?li(n.parentElement,":not(.p-hidden-focusable)"):this.lastHiddenFocusableElement;Ne(r)}onLastHiddenElementFocus(e){let{currentTarget:n,relatedTarget:i}=e,r=i===this.firstHiddenFocusableElement||!this.el.nativeElement?.contains(i)?di(n.parentElement,":not(.p-hidden-focusable)"):this.firstHiddenFocusableElement;Ne(r)}static \u0275fac=(()=>{let e;return function(i){return(e||(e=g(t)))(i||t)}})();static \u0275dir=k({type:t,selectors:[["","pFocusTrap",""]],inputs:{pFocusTrapDisabled:[2,"pFocusTrapDisabled","pFocusTrapDisabled",y]},features:[b,xe]})}return t})();function Jo(){let t=[],o=(r,s)=>{let c=t.length>0?t[t.length-1]:{key:r,value:s},h=c.value+(c.key===r?0:s)+2;return t.push({key:r,value:h}),h},e=r=>{t=t.filter(s=>s.value!==r)},n=()=>t.length>0?t[t.length-1].value:0,i=r=>r&&parseInt(r.style.zIndex,10)||0;return{get:i,set:(r,s,c)=>{s&&(s.style.zIndex=String(o(r,c)))},clear:r=>{r&&(e(i(r)),r.style.zIndex="")},getCurrent:()=>n(),generateZIndex:o,revertZIndex:e}}var de=Jo();var zi=`
    .p-dialog {
        max-height: 90%;
        transform: scale(1);
        border-radius: dt('dialog.border.radius');
        box-shadow: dt('dialog.shadow');
        background: dt('dialog.background');
        border: 1px solid dt('dialog.border.color');
        color: dt('dialog.color');
    }

    .p-dialog-content {
        overflow-y: auto;
        padding: dt('dialog.content.padding');
    }

    .p-dialog-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-shrink: 0;
        padding: dt('dialog.header.padding');
    }

    .p-dialog-title {
        font-weight: dt('dialog.title.font.weight');
        font-size: dt('dialog.title.font.size');
    }

    .p-dialog-footer {
        flex-shrink: 0;
        padding: dt('dialog.footer.padding');
        display: flex;
        justify-content: flex-end;
        gap: dt('dialog.footer.gap');
    }

    .p-dialog-header-actions {
        display: flex;
        align-items: center;
        gap: dt('dialog.header.gap');
    }

    .p-dialog-enter-active {
        transition: all 150ms cubic-bezier(0, 0, 0.2, 1);
    }

    .p-dialog-leave-active {
        transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
    }

    .p-dialog-enter-from,
    .p-dialog-leave-to {
        opacity: 0;
        transform: scale(0.7);
    }

    .p-dialog-top .p-dialog,
    .p-dialog-bottom .p-dialog,
    .p-dialog-left .p-dialog,
    .p-dialog-right .p-dialog,
    .p-dialog-topleft .p-dialog,
    .p-dialog-topright .p-dialog,
    .p-dialog-bottomleft .p-dialog,
    .p-dialog-bottomright .p-dialog {
        margin: 0.75rem;
        transform: translate3d(0px, 0px, 0px);
    }

    .p-dialog-top .p-dialog-enter-active,
    .p-dialog-top .p-dialog-leave-active,
    .p-dialog-bottom .p-dialog-enter-active,
    .p-dialog-bottom .p-dialog-leave-active,
    .p-dialog-left .p-dialog-enter-active,
    .p-dialog-left .p-dialog-leave-active,
    .p-dialog-right .p-dialog-enter-active,
    .p-dialog-right .p-dialog-leave-active,
    .p-dialog-topleft .p-dialog-enter-active,
    .p-dialog-topleft .p-dialog-leave-active,
    .p-dialog-topright .p-dialog-enter-active,
    .p-dialog-topright .p-dialog-leave-active,
    .p-dialog-bottomleft .p-dialog-enter-active,
    .p-dialog-bottomleft .p-dialog-leave-active,
    .p-dialog-bottomright .p-dialog-enter-active,
    .p-dialog-bottomright .p-dialog-leave-active {
        transition: all 0.3s ease-out;
    }

    .p-dialog-top .p-dialog-enter-from,
    .p-dialog-top .p-dialog-leave-to {
        transform: translate3d(0px, -100%, 0px);
    }

    .p-dialog-bottom .p-dialog-enter-from,
    .p-dialog-bottom .p-dialog-leave-to {
        transform: translate3d(0px, 100%, 0px);
    }

    .p-dialog-left .p-dialog-enter-from,
    .p-dialog-left .p-dialog-leave-to,
    .p-dialog-topleft .p-dialog-enter-from,
    .p-dialog-topleft .p-dialog-leave-to,
    .p-dialog-bottomleft .p-dialog-enter-from,
    .p-dialog-bottomleft .p-dialog-leave-to {
        transform: translate3d(-100%, 0px, 0px);
    }

    .p-dialog-right .p-dialog-enter-from,
    .p-dialog-right .p-dialog-leave-to,
    .p-dialog-topright .p-dialog-enter-from,
    .p-dialog-topright .p-dialog-leave-to,
    .p-dialog-bottomright .p-dialog-enter-from,
    .p-dialog-bottomright .p-dialog-leave-to {
        transform: translate3d(100%, 0px, 0px);
    }

    .p-dialog-left:dir(rtl) .p-dialog-enter-from,
    .p-dialog-left:dir(rtl) .p-dialog-leave-to,
    .p-dialog-topleft:dir(rtl) .p-dialog-enter-from,
    .p-dialog-topleft:dir(rtl) .p-dialog-leave-to,
    .p-dialog-bottomleft:dir(rtl) .p-dialog-enter-from,
    .p-dialog-bottomleft:dir(rtl) .p-dialog-leave-to {
        transform: translate3d(100%, 0px, 0px);
    }

    .p-dialog-right:dir(rtl) .p-dialog-enter-from,
    .p-dialog-right:dir(rtl) .p-dialog-leave-to,
    .p-dialog-topright:dir(rtl) .p-dialog-enter-from,
    .p-dialog-topright:dir(rtl) .p-dialog-leave-to,
    .p-dialog-bottomright:dir(rtl) .p-dialog-enter-from,
    .p-dialog-bottomright:dir(rtl) .p-dialog-leave-to {
        transform: translate3d(-100%, 0px, 0px);
    }

    .p-dialog-maximized {
        width: 100vw !important;
        height: 100vh !important;
        top: 0px !important;
        left: 0px !important;
        max-height: 100%;
        height: 100%;
        border-radius: 0;
    }

    .p-dialog-maximized .p-dialog-content {
        flex-grow: 1;
    }

    .p-dialog .p-resizable-handle {
        position: absolute;
        font-size: 0.1px;
        display: block;
        cursor: se-resize;
        width: 12px;
        height: 12px;
        right: 1px;
        bottom: 1px;
    }
`;var er={mask:({instance:t})=>({position:"fixed",height:"100%",width:"100%",left:0,top:0,display:"flex",justifyContent:t.position==="left"||t.position==="topleft"||t.position==="bottomleft"?"flex-start":t.position==="right"||t.position==="topright"||t.position==="bottomright"?"flex-end":"center",alignItems:t.position==="top"||t.position==="topleft"||t.position==="topright"?"flex-start":t.position==="bottom"||t.position==="bottomleft"||t.position==="bottomright"?"flex-end":"center",pointerEvents:t.modal?"auto":"none"}),root:{display:"flex",flexDirection:"column",pointerEvents:"auto"}},tr={mask:({instance:t})=>{let e=["left","right","top","topleft","topright","bottom","bottomleft","bottomright"].find(n=>n===t.position);return["p-dialog-mask",{"p-overlay-mask p-overlay-mask-enter":t.modal},e?`p-dialog-${e}`:""]},root:({instance:t})=>["p-dialog p-component",{"p-dialog-maximized":t.maximizable&&t.maximized}],header:"p-dialog-header",title:"p-dialog-title",resizeHandle:"p-resizable-handle",headerActions:"p-dialog-header-actions",pcMaximizeButton:"p-dialog-maximize-button",pcCloseButton:"p-dialog-close-button",content:()=>["p-dialog-content"],footer:"p-dialog-footer"},Ni=(()=>{class t extends N{name="dialog";theme=zi;classes=tr;inlineStyles=er;static \u0275fac=(()=>{let e;return function(i){return(e||(e=g(t)))(i||t)}})();static \u0275prov=T({token:t,factory:t.\u0275fac})}return t})();var dc=Ye([_e({transform:"{{transform}}",opacity:0}),De("{{transition}}")]),cc=Ye([De("{{transition}}",_e({transform:"{{transform}}",opacity:0}))]);var nr=["mask"],ir=["content"],or=["footer"],rr=["titlebar"],sr=(t,o,e)=>({position:"fixed",height:"100%",width:"100%",left:0,top:0,display:"flex","justify-content":t,"align-items":o,"pointer-events":e}),ar=t=>({"p-dialog p-component":!0,"p-dialog-maximized":t}),lr=()=>({display:"flex","flex-direction":"column","pointer-events":"auto"}),dr=(t,o)=>({transform:t,transition:o}),cr=t=>({value:"visible",params:t});function ur(t,o){if(t&1){let e=G();m(0,"div",15),I("mousedown",function(i){w(e);let r=d(2);return D(r.initResize(i))}),p()}t&2&&a("ngClass","p-resizable-handle")}function pr(t,o){t&1&&ie(0)}function mr(t,o){t&1&&(ne(),A(0,"svg",24))}function hr(t,o){}function fr(t,o){t&1&&f(0,hr,0,0,"ng-template")}function gr(t,o){if(t&1&&(Z(0),f(1,mr,1,0,"svg",22)(2,fr,1,0,null,23),Q()),t&2){let e=d(6);l(),a("ngIf",!e.maximizeIconTemplate),l(),a("ngTemplateOutlet",e.maximizeIconTemplate)}}function br(t,o){t&1&&(ne(),A(0,"svg",26))}function _r(t,o){}function yr(t,o){t&1&&f(0,_r,0,0,"ng-template")}function vr(t,o){if(t&1&&(Z(0),f(1,br,1,0,"svg",25)(2,yr,1,0,null,23),Q()),t&2){let e=d(6);l(),a("ngIf",!e.minimizeIconTemplate),l(),a("ngTemplateOutlet",e.minimizeIconTemplate)}}function Cr(t,o){if(t&1&&f(0,gr,3,2,"ng-container",12)(1,vr,3,2,"ng-container",12),t&2){let e=d(5);a("ngIf",!e.maximized),l(),a("ngIf",e.maximized)}}function xr(t,o){if(t&1){let e=G();m(0,"p-button",21),I("onClick",function(){w(e);let i=d(4);return D(i.maximize())})("keydown.enter",function(){w(e);let i=d(4);return D(i.maximize())}),f(1,Cr,2,2,"ng-template",null,4,Le),p()}if(t&2){let e=d(4);a("styleClass","p-dialog-maximize-button")("tabindex",e.maximizable?"0":"-1")}}function wr(t,o){t&1&&(ne(),A(0,"svg",29))}function Dr(t,o){}function Ir(t,o){t&1&&f(0,Dr,0,0,"ng-template")}function Er(t,o){if(t&1&&f(0,wr,1,0,"svg",28)(1,Ir,1,0,null,23),t&2){let e=d(5);a("ngIf",!e.closeIconTemplate),l(),a("ngTemplateOutlet",e.closeIconTemplate)}}function Tr(t,o){if(t&1){let e=G();m(0,"p-button",27),I("onClick",function(){w(e);let i=d(4);return D(i.hide())})("keydown.enter",function(){w(e);let i=d(4);return D(i.hide())}),f(1,Er,2,2,"ng-template",null,4,Le),p()}if(t&2){let e=d(4);a("styleClass","p-dialog-close-button")("ariaLabel",e.ddconfig.closeAriaLabel||e.defaultCloseAriaLabel)}}function Mr(t,o){if(t&1&&(Z(0),m(1,"span",17),O(2),p(),m(3,"div",18),f(4,xr,3,2,"p-button",19)(5,Tr,3,2,"p-button",20),p(),Q()),t&2){let e=d(3);l(),a("ngClass","p-dialog-title")("id",e.ariaLabelledBy),l(),ce(e.ddconfig.header),l(),a("ngClass","p-dialog-header-actions"),l(),a("ngIf",e.ddconfig.maximizable),l(),a("ngIf",e.closable)}}function Sr(t,o){if(t&1){let e=G();m(0,"div",16,3),I("mousedown",function(i){w(e);let r=d(2);return D(r.initDrag(i))}),f(2,pr,1,0,"ng-container",13)(3,Mr,6,6,"ng-container",12),p()}if(t&2){let e=d(2);a("ngClass","p-dialog-header"),l(2),a("ngComponentOutlet",e.headerTemplate),l(),a("ngIf",!e.headerTemplate)}}function Vr(t,o){}function kr(t,o){t&1&&f(0,Vr,0,0,"ng-template",30)}function Or(t,o){t&1&&ie(0)}function Fr(t,o){if(t&1&&(Z(0),O(1),Q()),t&2){let e=d(3);l(),K(" ",e.ddconfig.footer," ")}}function Ar(t,o){t&1&&ie(0)}function Lr(t,o){if(t&1&&(m(0,"div",18,5),f(2,Fr,2,1,"ng-container",12)(3,Ar,1,0,"ng-container",13),p()),t&2){let e=d(2);a("ngClass","p-dialog-footer"),l(2),a("ngIf",!e.footerTemplate),l(),a("ngComponentOutlet",e.footerTemplate)}}function Pr(t,o){if(t&1){let e=G();m(0,"div",8,1),I("@animation.start",function(i){w(e);let r=d();return D(r.onAnimationStart(i))})("@animation.done",function(i){w(e);let r=d();return D(r.onAnimationEnd(i))}),f(2,ur,1,1,"div",9)(3,Sr,4,3,"div",10),m(4,"div",11,2),f(6,kr,1,0,null,12)(7,Or,1,0,"ng-container",13),p(),f(8,Lr,4,3,"div",14),p()}if(t&2){let e=d();qe(e.ddconfig.style),_(e.ddconfig.styleClass),gt("width",e.ddconfig.width)("height",e.ddconfig.height),a("ngClass",se(22,ar,e.maximizable&&e.maximized))("ngStyle",At(24,lr))("@animation",se(28,cr,Ze(25,dr,e.transformOptions,e.ddconfig.transitionOptions||"150ms cubic-bezier(0, 0, 0.2, 1)")))("pFocusTrapDisabled",e.ddconfig.focusTrap===!1),M("aria-labelledby",e.ariaLabelledBy)("aria-modal",!0)("id",e.dialogId),l(2),a("ngIf",e.ddconfig.resizable),l(),a("ngIf",e.ddconfig.showHeader!==!1),l(),a("ngClass","p-dialog-content")("ngStyle",e.ddconfig.contentStyle),l(2),a("ngIf",!e.contentTemplate),l(),a("ngComponentOutlet",e.contentTemplate),l(),a("ngIf",e.ddconfig.footer||e.footerTemplate)}}var Ri=(()=>{class t{viewContainerRef;constructor(e){this.viewContainerRef=e}static \u0275fac=function(n){return new(n||t)(V(Vt))};static \u0275dir=k({type:t,selectors:[["","pDynamicDialogContent",""]]})}return t})(),Bi=(()=>{class t extends Ni{name="dialog";static \u0275fac=(()=>{let e;return function(i){return(e||(e=g(t)))(i||t)}})();static \u0275prov=T({token:t,factory:t.\u0275fac})}return t})();var Ut=class{data;inputValues;header;ariaLabelledBy;footer;width;height;closeOnEscape=!1;focusOnShow=!0;focusTrap=!0;baseZIndex;autoZIndex=!1;dismissableMask=!1;rtl=!1;style;contentStyle;styleClass;transitionOptions;closable=!1;showHeader=!1;modal=!1;maskStyleClass;resizable=!1;draggable=!1;keepInViewport=!1;minX;minY;maximizable=!1;maximizeIcon;minimizeIcon;position;closeAriaLabel;appendTo;duplicate=!1;breakpoints;templates},wt=class{constructor(){}close(o){this._onClose.next(o),setTimeout(()=>{this._onClose.complete()},1e3)}destroy(){this._onDestroy.next(null)}dragStart(o){this._onDragStart.next(o)}dragEnd(o){this._onDragEnd.next(o)}resizeInit(o){this._onResizeInit.next(o)}resizeEnd(o){this._onResizeEnd.next(o)}maximize(o){this._onMaximize.next(o)}_onClose=new he;onClose=this._onClose.asObservable();_onDestroy=new he;onDestroy=this._onDestroy.asObservable();_onDragStart=new he;onDragStart=this._onDragStart.asObservable();_onDragEnd=new he;onDragEnd=this._onDragEnd.asObservable();_onResizeInit=new he;onResizeInit=this._onResizeInit.asObservable();_onResizeEnd=new he;onResizeEnd=this._onResizeEnd.asObservable();_onMaximize=new he;onMaximize=this._onMaximize.asObservable();onChildComponentLoaded=new he},zr=Ye([_e({transform:"{{transform}}",opacity:0}),De("{{transition}}",_e({transform:"none",opacity:1}))]),Nr=Ye([De("{{transition}}",_e({transform:"{{transform}}",opacity:0}))]),Rr=(()=>{class t extends R{renderer;ddconfig;dialogRef;zone;parentDialog;visible=!0;componentRef;mask;resizing;dragging;maximized;_style={};originalStyle;lastPageX;lastPageY;ariaLabelledBy;id=te("pn_id_");styleElement;insertionPoint;maskViewChild;contentViewChild;footerViewChild;headerViewChild;childComponentType;inputValues;container;wrapper;documentKeydownListener;documentEscapeListener;maskClickListener;transformOptions="scale(0.7)";documentResizeListener;documentResizeEndListener;documentDragListener;documentDragEndListener;_componentStyle=u(Bi);get minX(){return this.ddconfig.minX?this.ddconfig.minX:0}get minY(){return this.ddconfig.minY?this.ddconfig.minY:0}get keepInViewport(){return this.ddconfig.keepInViewport}get maximizable(){return this.ddconfig.maximizable}get maximizeIcon(){return this.ddconfig.maximizeIcon}get minimizeIcon(){return this.ddconfig.minimizeIcon}get closable(){return this.ddconfig.closable}get style(){return this._style}get position(){return this.ddconfig.position}get defaultCloseAriaLabel(){return this.config.getTranslation(_i.ARIA).close}set style(e){e&&(this._style=x({},e),this.originalStyle=e)}get parent(){let e=Array.from(this.document.getElementsByClassName("p-dialog"));if(e.length>1)return e.pop()}get parentContent(){let e=Array.from(this.document.getElementsByClassName("p-dialog"));if(e.length>0){let n=e[e.length-1].querySelector(".p-dialog-content");if(n)return Array.isArray(n)?n[0]:n}}get header(){return this.ddconfig.header}get data(){return this.ddconfig.data}get breakpoints(){return this.ddconfig.breakpoints}get footerTemplate(){return this.ddconfig?.templates?.footer}get headerTemplate(){return this.ddconfig?.templates?.header}get contentTemplate(){return this.ddconfig?.templates?.content}get minimizeIconTemplate(){return this.ddconfig?.templates?.minimizeicon}get maximizeIconTemplate(){return this.ddconfig?.templates?.maximizeicon}get closeIconTemplate(){return this.ddconfig?.templates?.closeicon}get maskClass(){let n=["left","right","top","topleft","topright","bottom","bottomleft","bottomright"].find(i=>i===this.position);return{"p-dialog-mask":!0,"p-overlay-mask p-overlay-mask-enter":this.ddconfig.modal||this.ddconfig.dismissableMask,[`p-dialog-${n}`]:n}}get dialogId(){return this.attrSelector}zIndexForLayering;constructor(e,n,i,r,s){super(),this.renderer=e,this.ddconfig=n,this.dialogRef=i,this.zone=r,this.parentDialog=s}ngOnInit(){super.ngOnInit(),this.breakpoints&&this.createStyle()}createStyle(){if(U(this.platformId)&&!this.styleElement){this.styleElement=this.renderer.createElement("style"),this.styleElement.type="text/css",vn(this.styleElement,"nonce",this.config?.csp()?.nonce),this.renderer.appendChild(this.document.head,this.styleElement);let e="";for(let n in this.breakpoints)e+=`
                        @media screen and (max-width: ${n}) {
                            .p-dialog[id=${this.dialogId}]:not(.p-dialog-maximized) {
                                width: ${this.breakpoints[n]} !important;
                            }
                        }
                    `;this.renderer.setProperty(this.styleElement,"innerHTML",e),vn(this.styleElement,"nonce",this.config?.csp()?.nonce)}}destroyStyle(){this.styleElement&&(this.renderer.removeChild(this.document.head,this.styleElement),this.styleElement=null)}ngAfterViewInit(){super.ngAfterViewInit(),this.loadChildComponent(this.childComponentType),this.ariaLabelledBy=this.getAriaLabelledBy(),this.cd.detectChanges()}getAriaLabelledBy(){let{header:e,showHeader:n}=this.ddconfig;return e===null||n===!1?null:te("pn_id_")+"_header"}loadChildComponent(e){let n=this.insertionPoint?.viewContainerRef;n?.clear(),this.componentRef=n?.createComponent(e),this.inputValues&&this.componentRef&&Object.entries(this.inputValues).forEach(([i,r])=>{this.componentRef.setInput(i,r)}),this.dialogRef.onChildComponentLoaded.next(this.componentRef.instance)}moveOnTop(){this.ddconfig.autoZIndex!==!1?(de.set("modal",this.container,(this.ddconfig.baseZIndex||0)+this.config.zIndex.modal),this.wrapper.style.zIndex=String(parseInt(this.container.style.zIndex,10)-1)):this.zIndexForLayering=de.generateZIndex("modal",(this.ddconfig.baseZIndex||0)+this.config.zIndex.modal)}onAnimationStart(e){switch(e.toState){case"visible":this.container=e.element,this.wrapper=this.container.parentElement,this.moveOnTop(),this.parent&&this.unbindGlobalListeners(),this.bindGlobalListeners(),this.container?.setAttribute(this.id,""),this.ddconfig.modal!==!1&&this.enableModality(),this.ddconfig.focusOnShow!==!1&&this.focus();break;case"void":this.wrapper&&this.ddconfig.modal!==!1&&Ve(this.wrapper,"p-overlay-mask-leave");break}}onAnimationEnd(e){e.toState==="void"&&(this.parentContent&&this.focus(this.parentContent),this.onContainerDestroy(),this.dialogRef.destroy())}onContainerDestroy(){this.unbindGlobalListeners(),this.container&&this.ddconfig.autoZIndex!==!1&&de.clear(this.container),this.zIndexForLayering&&de.revertZIndex(this.zIndexForLayering),this.ddconfig.modal!==!1&&this.disableModality(),this.container=null}close(){this.visible=!1,this.cd.markForCheck()}hide(){this.dialogRef&&this.dialogRef.close()}enableModality(){this.ddconfig.dismissableMask&&this.wrapper&&(this.maskClickListener=this.renderer.listen(this.wrapper,"mousedown",e=>{this.wrapper&&this.wrapper.isSameNode(e.target)&&this.hide()})),this.ddconfig.modal!==!1&&Ve(this.document.body,"p-overflow-hidden")}disableModality(){this.wrapper&&(this.ddconfig.dismissableMask&&this.unbindMaskClickListener(),this.ddconfig.modal!==!1&&ye(this.document.body,"p-overflow-hidden"),this.cd.destroyed||this.cd.detectChanges())}focus(e=this.contentViewChild?.nativeElement){if(!e)return;let n=Re.getFocusableElement(e,"[autofocus]");if(n){this.zone.runOutsideAngular(()=>{setTimeout(()=>n.focus(),5)});return}let i=Re.getFocusableElement(e);i?this.zone.runOutsideAngular(()=>{setTimeout(()=>i.focus(),5)}):this.footerViewChild&&e!==this.footerViewChild.nativeElement?this.focus(this.footerViewChild.nativeElement):!i&&this.headerViewChild&&e!==this.headerViewChild.nativeElement&&this.focus(this.headerViewChild.nativeElement)}maximize(){this.maximized=!this.maximized,this.maximized?Ve(this.document.body,"p-overflow-hidden"):ye(this.document.body,"p-overflow-hidden"),this.dialogRef.maximize({maximized:this.maximized})}initResize(e){this.ddconfig.resizable&&(this.documentResizeListener||this.bindDocumentResizeListeners(),this.resizing=!0,this.lastPageX=e.pageX,this.lastPageY=e.pageY,Ve(this.document.body,"p-unselectable-text"),this.dialogRef.resizeInit(e))}onResize(e){if(this.resizing){let n=e.pageX-this.lastPageX,i=e.pageY-this.lastPageY,r=this.container?oe(this.container):0,s=this.container?le(this.container):0,c=le(this.contentViewChild.nativeElement),h=r+n,C=s+i,L=this.container.style.minWidth,B=this.container.style.minHeight,re=this.container.getBoundingClientRect(),j=_t();(!parseInt(this.container.style.top)||!parseInt(this.container.style.left))&&(h+=n,C+=i),(!L||h>parseInt(L))&&re.left+h<j.width&&(this._style.width=h+"px",this.container.style.width=this._style.width),(!B||C>parseInt(B))&&re.top+C<j.height&&(this.contentViewChild.nativeElement.style.height=c+C-s+"px",this._style.height&&(this._style.height=C+"px",this.container.style.height=this._style.height)),this.lastPageX=e.pageX,this.lastPageY=e.pageY}}resizeEnd(e){this.resizing&&(this.resizing=!1,ye(this.document.body,"p-unselectable-text"),this.dialogRef.resizeEnd(e))}initDrag(e){let n=e.target;Se(n,"p-dialog-header-icon")||n.parentElement&&Se(n.parentElement,"p-dialog-header-icon")||this.ddconfig.draggable&&(this.dragging=!0,this.lastPageX=e.pageX,this.lastPageY=e.pageY,this.container.style.margin="0",Ve(this.document.body,"p-unselectable-text"),this.dialogRef.dragStart(e))}onDrag(e){if(this.dragging){let n=this.container?oe(this.container):0,i=this.container?le(this.container):0,r=e.pageX-this.lastPageX,s=e.pageY-this.lastPageY,c=this.container.getBoundingClientRect(),h=c.left+r,C=c.top+s,L=_t();this.container.style.position="fixed",this.keepInViewport?(h>=this.minX&&h+n<L.width&&(this._style.left=h+"px",this.lastPageX=e.pageX,this.container.style.left=h+"px"),C>=this.minY&&C+i<L.height&&(this._style.top=C+"px",this.lastPageY=e.pageY,this.container.style.top=C+"px")):(this.lastPageX=e.pageX,this.container.style.left=h+"px",this.lastPageY=e.pageY,this.container.style.top=C+"px")}}endDrag(e){this.dragging&&(this.dragging=!1,ye(this.document.body,"p-unselectable-text"),this.dialogRef.dragEnd(e),this.cd.detectChanges())}resetPosition(){this.container.style.position="",this.container.style.left="",this.container.style.top="",this.container.style.margin=""}bindDocumentDragListener(){U(this.platformId)&&this.zone.runOutsideAngular(()=>{this.documentDragListener=this.renderer.listen(this.document,"mousemove",this.onDrag.bind(this))})}bindDocumentDragEndListener(){U(this.platformId)&&this.zone.runOutsideAngular(()=>{this.documentDragEndListener=this.renderer.listen(this.document,"mouseup",this.endDrag.bind(this))})}unbindDocumentDragEndListener(){this.documentDragEndListener&&(this.documentDragEndListener(),this.documentDragEndListener=null)}unbindDocumentDragListener(){this.documentDragListener&&(this.documentDragListener(),this.documentDragListener=null)}bindDocumentResizeListeners(){U(this.platformId)&&this.zone.runOutsideAngular(()=>{this.documentResizeListener=this.renderer.listen(this.document,"mousemove",this.onResize.bind(this)),this.documentResizeEndListener=this.renderer.listen(this.document,"mouseup",this.resizeEnd.bind(this))})}unbindDocumentResizeListeners(){this.documentResizeListener&&this.documentResizeEndListener&&(this.documentResizeListener(),this.documentResizeEndListener(),this.documentResizeListener=null,this.documentResizeEndListener=null)}bindGlobalListeners(){this.ddconfig.closeOnEscape!==!1&&this.bindDocumentEscapeListener(),this.ddconfig.resizable&&this.bindDocumentResizeListeners(),this.ddconfig.draggable&&(this.bindDocumentDragListener(),this.bindDocumentDragEndListener())}unbindGlobalListeners(){this.unbindDocumentEscapeListener(),this.unbindDocumentResizeListeners(),this.unbindDocumentDragListener(),this.unbindDocumentDragEndListener()}bindDocumentEscapeListener(){let e=this.maskViewChild?this.maskViewChild.nativeElement.ownerDocument:"document";this.documentEscapeListener=this.renderer.listen(e,"keydown",n=>{if(n.key==="Escape"||n.keyCode===27||n.which===27){let i=de.getCurrent();(parseInt(this.container.style.zIndex)==i||this.zIndexForLayering==i)&&this.hide()}})}unbindDocumentEscapeListener(){this.documentEscapeListener&&(this.documentEscapeListener(),this.documentEscapeListener=null)}unbindMaskClickListener(){this.maskClickListener&&(this.maskClickListener(),this.maskClickListener=null)}ngOnDestroy(){this.onContainerDestroy(),this.componentRef&&typeof this.componentRef.destroy=="function"&&this.componentRef.destroy(),this.destroyStyle(),super.ngOnDestroy()}static \u0275fac=function(n){return new(n||t)(V(We),V(Ut),V(wt),V(tt),V(t,12))};static \u0275cmp=v({type:t,selectors:[["p-dynamicDialog"],["p-dynamicdialog"],["p-dynamic-dialog"]],viewQuery:function(n,i){if(n&1&&(we(Ri,5),we(nr,5),we(ir,5),we(or,5),we(rr,5)),n&2){let r;P(r=z())&&(i.insertionPoint=r.first),P(r=z())&&(i.maskViewChild=r.first),P(r=z())&&(i.contentViewChild=r.first),P(r=z())&&(i.footerViewChild=r.first),P(r=z())&&(i.headerViewChild=r.first)}},features:[E([Bi]),b],decls:3,vars:9,consts:[["mask",""],["container",""],["content",""],["titlebar",""],["icon",""],["footer",""],[3,"ngStyle","ngClass"],["role","dialog","pFocusTrap","",3,"ngClass","ngStyle","style","class","pFocusTrapDisabled","width","height",4,"ngIf"],["role","dialog","pFocusTrap","",3,"ngClass","ngStyle","pFocusTrapDisabled"],["style","z-index: 90;",3,"ngClass","mousedown",4,"ngIf"],[3,"ngClass","mousedown",4,"ngIf"],[3,"ngClass","ngStyle"],[4,"ngIf"],[4,"ngComponentOutlet"],[3,"ngClass",4,"ngIf"],[2,"z-index","90",3,"mousedown","ngClass"],[3,"mousedown","ngClass"],[3,"ngClass","id"],[3,"ngClass"],["rounded","","text","",3,"styleClass","tabindex","onClick","keydown.enter",4,"ngIf"],["rounded","","text","","severity","secondary",3,"styleClass","ariaLabel","onClick","keydown.enter",4,"ngIf"],["rounded","","text","",3,"onClick","keydown.enter","styleClass","tabindex"],["data-p-icon","window-maximize",4,"ngIf"],[4,"ngTemplateOutlet"],["data-p-icon","window-maximize"],["data-p-icon","window-minimize",4,"ngIf"],["data-p-icon","window-minimize"],["rounded","","text","","severity","secondary",3,"onClick","keydown.enter","styleClass","ariaLabel"],["data-p-icon","times",4,"ngIf"],["data-p-icon","times"],["pDynamicDialogContent",""]],template:function(n,i){n&1&&(m(0,"div",6,0),f(2,Pr,9,30,"div",7),p()),n&2&&(_(i.ddconfig.maskStyleClass),a("ngStyle",Lt(5,sr,i.position==="left"||i.position==="topleft"||i.position==="bottomleft"?"flex-start":i.position==="right"||i.position==="topright"||i.position==="bottomright"?"flex-end":"center",i.position==="top"||i.position==="topleft"||i.position==="topright"?"flex-start":i.position==="bottom"||i.position==="bottomleft"||i.position==="bottomright"?"flex-end":"center",i.ddconfig.modal?"auto":"none"))("ngClass",i.maskClass),l(2),a("ngIf",i.visible))},dependencies:[ae,Gn,Un,Te,Me,it,Y,Ri,Si,Vi,Mi,Dn,Pi],encapsulation:2,data:{animation:[ot("animation",[Pe("void => visible",[bt(zr)]),Pe("visible => void",[bt(Nr)])])]}})}return t})();var In=class{_parentInjector;_additionalTokens;constructor(o,e){this._parentInjector=o,this._additionalTokens=e}get(o,e,n){let i=this._additionalTokens.get(o);return i||this._parentInjector.get(o,e)}},En=(()=>{class t{appRef;injector;document;dialogComponentRefMap=new Map;constructor(e,n,i){this.appRef=e,this.injector=n,this.document=i}open(e,n){if(!this.duplicationPermission(e,n))return null;let i=this.appendDialogComponentToBody(n,e),r=this.dialogComponentRefMap.get(i);return r&&(r.instance.childComponentType=e,r.instance.inputValues=n.inputValues||{}),i}getInstance(e){return this.dialogComponentRefMap.get(e)?.instance}appendDialogComponentToBody(e,n){let i=new WeakMap;i.set(Ut,e);let r=new wt;i.set(wt,r);let s=r.onClose.subscribe(()=>{this.dialogComponentRefMap.get(r)?.instance.close()}),c=r.onDestroy.subscribe(()=>{this.removeDialogComponentFromBody(r),c.unsubscribe(),s.unsubscribe()}),h=Wn(Rr,{environmentInjector:this.appRef.injector,elementInjector:new In(this.injector,i)});this.appRef.attachView(h.hostView);let C=h.hostView.rootNodes[0];return!e.appendTo||e.appendTo==="body"?this.document.body.appendChild(C):yt(e.appendTo,C),this.dialogComponentRefMap.set(r,h),r}removeDialogComponentFromBody(e){if(!e||!this.dialogComponentRefMap.has(e))return;let n=this.dialogComponentRefMap.get(e);n&&(this.appRef.detachView(n.hostView),n.destroy(),n.changeDetectorRef.detectChanges()),this.dialogComponentRefMap.delete(e)}duplicationPermission(e,n){if(n.duplicate)return!0;let i=!0;for(let[r,s]of this.dialogComponentRefMap)if(s.instance.childComponentType===e){i=!1;break}return i}static \u0275fac=function(n){return new(n||t)(je(hn),je(ht),je(Ce))};static \u0275prov=T({token:t,factory:t.\u0275fac})}return t})();var Hi=`
    .p-tooltip {
        position: absolute;
        display: none;
        max-width: dt('tooltip.max.width');
    }

    .p-tooltip-right,
    .p-tooltip-left {
        padding: 0 dt('tooltip.gutter');
    }

    .p-tooltip-top,
    .p-tooltip-bottom {
        padding: dt('tooltip.gutter') 0;
    }

    .p-tooltip-text {
        white-space: pre-line;
        word-break: break-word;
        background: dt('tooltip.background');
        color: dt('tooltip.color');
        padding: dt('tooltip.padding');
        box-shadow: dt('tooltip.shadow');
        border-radius: dt('tooltip.border.radius');
    }

    .p-tooltip-arrow {
        position: absolute;
        width: 0;
        height: 0;
        border-color: transparent;
        border-style: solid;
    }

    .p-tooltip-right .p-tooltip-arrow {
        margin-top: calc(-1 * dt('tooltip.gutter'));
        border-width: dt('tooltip.gutter') dt('tooltip.gutter') dt('tooltip.gutter') 0;
        border-right-color: dt('tooltip.background');
    }

    .p-tooltip-left .p-tooltip-arrow {
        margin-top: calc(-1 * dt('tooltip.gutter'));
        border-width: dt('tooltip.gutter') 0 dt('tooltip.gutter') dt('tooltip.gutter');
        border-left-color: dt('tooltip.background');
    }

    .p-tooltip-top .p-tooltip-arrow {
        margin-left: calc(-1 * dt('tooltip.gutter'));
        border-width: dt('tooltip.gutter') dt('tooltip.gutter') 0 dt('tooltip.gutter');
        border-top-color: dt('tooltip.background');
        border-bottom-color: dt('tooltip.background');
    }

    .p-tooltip-bottom .p-tooltip-arrow {
        margin-left: calc(-1 * dt('tooltip.gutter'));
        border-width: 0 dt('tooltip.gutter') dt('tooltip.gutter') dt('tooltip.gutter');
        border-top-color: dt('tooltip.background');
        border-bottom-color: dt('tooltip.background');
    }
`;var Br={root:"p-tooltip p-component",arrow:"p-tooltip-arrow",text:"p-tooltip-text"},ji=(()=>{class t extends N{name="tooltip";theme=Hi;classes=Br;static \u0275fac=(()=>{let e;return function(i){return(e||(e=g(t)))(i||t)}})();static \u0275prov=T({token:t,factory:t.\u0275fac})}return t})();var $i=(()=>{class t extends R{zone;viewContainer;tooltipPosition;tooltipEvent="hover";positionStyle;tooltipStyleClass;tooltipZIndex;escape=!0;showDelay;hideDelay;life;positionTop;positionLeft;autoHide=!0;fitContent=!0;hideOnEscape=!0;content;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this.deactivate()}tooltipOptions;appendTo=S(void 0);$appendTo=H(()=>this.appendTo()||this.config.overlayAppendTo());_tooltipOptions={tooltipLabel:null,tooltipPosition:"right",tooltipEvent:"hover",appendTo:"body",positionStyle:null,tooltipStyleClass:null,tooltipZIndex:"auto",escape:!0,disabled:null,showDelay:null,hideDelay:null,positionTop:null,positionLeft:null,life:null,autoHide:!0,hideOnEscape:!0,id:te("pn_id_")+"_tooltip"};_disabled;container;styleClass;tooltipText;showTimeout;hideTimeout;active;mouseEnterListener;mouseLeaveListener;containerMouseleaveListener;clickListener;focusListener;blurListener;documentEscapeListener;scrollHandler;resizeListener;_componentStyle=u(ji);interactionInProgress=!1;constructor(e,n){super(),this.zone=e,this.viewContainer=n}ngAfterViewInit(){super.ngAfterViewInit(),U(this.platformId)&&this.zone.runOutsideAngular(()=>{let e=this.getOption("tooltipEvent");if((e==="hover"||e==="both")&&(this.mouseEnterListener=this.onMouseEnter.bind(this),this.mouseLeaveListener=this.onMouseLeave.bind(this),this.clickListener=this.onInputClick.bind(this),this.el.nativeElement.addEventListener("mouseenter",this.mouseEnterListener),this.el.nativeElement.addEventListener("click",this.clickListener),this.el.nativeElement.addEventListener("mouseleave",this.mouseLeaveListener)),e==="focus"||e==="both"){this.focusListener=this.onFocus.bind(this),this.blurListener=this.onBlur.bind(this);let n=this.el.nativeElement.querySelector(".p-component");n||(n=this.getTarget(this.el.nativeElement)),n.addEventListener("focus",this.focusListener),n.addEventListener("blur",this.blurListener)}})}ngOnChanges(e){super.ngOnChanges(e),e.tooltipPosition&&this.setOption({tooltipPosition:e.tooltipPosition.currentValue}),e.tooltipEvent&&this.setOption({tooltipEvent:e.tooltipEvent.currentValue}),e.appendTo&&this.setOption({appendTo:e.appendTo.currentValue}),e.positionStyle&&this.setOption({positionStyle:e.positionStyle.currentValue}),e.tooltipStyleClass&&this.setOption({tooltipStyleClass:e.tooltipStyleClass.currentValue}),e.tooltipZIndex&&this.setOption({tooltipZIndex:e.tooltipZIndex.currentValue}),e.escape&&this.setOption({escape:e.escape.currentValue}),e.showDelay&&this.setOption({showDelay:e.showDelay.currentValue}),e.hideDelay&&this.setOption({hideDelay:e.hideDelay.currentValue}),e.life&&this.setOption({life:e.life.currentValue}),e.positionTop&&this.setOption({positionTop:e.positionTop.currentValue}),e.positionLeft&&this.setOption({positionLeft:e.positionLeft.currentValue}),e.disabled&&this.setOption({disabled:e.disabled.currentValue}),e.content&&(this.setOption({tooltipLabel:e.content.currentValue}),this.active&&(e.content.currentValue?this.container&&this.container.offsetParent?(this.updateText(),this.align()):this.show():this.hide())),e.autoHide&&this.setOption({autoHide:e.autoHide.currentValue}),e.id&&this.setOption({id:e.id.currentValue}),e.tooltipOptions&&(this._tooltipOptions=x(x({},this._tooltipOptions),e.tooltipOptions.currentValue),this.deactivate(),this.active&&(this.getOption("tooltipLabel")?this.container&&this.container.offsetParent?(this.updateText(),this.align()):this.show():this.hide()))}isAutoHide(){return this.getOption("autoHide")}onMouseEnter(e){!this.container&&!this.showTimeout&&this.activate()}onMouseLeave(e){this.isAutoHide()?this.deactivate():!(Se(e.relatedTarget,"p-tooltip")||Se(e.relatedTarget,"p-tooltip-text")||Se(e.relatedTarget,"p-tooltip-arrow"))&&this.deactivate()}onFocus(e){this.activate()}onBlur(e){this.deactivate()}onInputClick(e){this.deactivate()}activate(){if(!this.interactionInProgress){if(this.active=!0,this.clearHideTimeout(),this.getOption("showDelay")?this.showTimeout=setTimeout(()=>{this.show()},this.getOption("showDelay")):this.show(),this.getOption("life")){let e=this.getOption("showDelay")?this.getOption("life")+this.getOption("showDelay"):this.getOption("life");this.hideTimeout=setTimeout(()=>{this.hide()},e)}this.getOption("hideOnEscape")&&(this.documentEscapeListener=this.renderer.listen("document","keydown.escape",()=>{this.deactivate(),this.documentEscapeListener?.()})),this.interactionInProgress=!0}}deactivate(){this.interactionInProgress=!1,this.active=!1,this.clearShowTimeout(),this.getOption("hideDelay")?(this.clearHideTimeout(),this.hideTimeout=setTimeout(()=>{this.hide()},this.getOption("hideDelay"))):this.hide(),this.documentEscapeListener&&this.documentEscapeListener()}create(){this.container&&(this.clearHideTimeout(),this.remove()),this.container=document.createElement("div"),this.container.setAttribute("id",this.getOption("id")),this.container.setAttribute("role","tooltip");let e=document.createElement("div");e.className="p-tooltip-arrow",e.setAttribute("data-pc-section","arrow"),this.container.appendChild(e),this.tooltipText=document.createElement("div"),this.tooltipText.className="p-tooltip-text",this.updateText(),this.getOption("positionStyle")&&(this.container.style.position=this.getOption("positionStyle")),this.container.appendChild(this.tooltipText),this.getOption("appendTo")==="body"?document.body.appendChild(this.container):this.getOption("appendTo")==="target"?yt(this.container,this.el.nativeElement):yt(this.getOption("appendTo"),this.container),this.container.style.display="none",this.fitContent&&(this.container.style.width="fit-content"),this.isAutoHide()?this.container.style.pointerEvents="none":(this.container.style.pointerEvents="unset",this.bindContainerMouseleaveListener())}bindContainerMouseleaveListener(){if(!this.containerMouseleaveListener){let e=this.container??this.container.nativeElement;this.containerMouseleaveListener=this.renderer.listen(e,"mouseleave",n=>{this.deactivate()})}}unbindContainerMouseleaveListener(){this.containerMouseleaveListener&&(this.bindContainerMouseleaveListener(),this.containerMouseleaveListener=null)}show(){if(!this.getOption("tooltipLabel")||this.getOption("disabled"))return;this.create(),this.el.nativeElement.closest("p-dialog")?setTimeout(()=>{this.container&&(this.container.style.display="inline-block"),this.container&&this.align()},100):(this.container.style.display="inline-block",this.align()),ai(this.container,250),this.getOption("tooltipZIndex")==="auto"?de.set("tooltip",this.container,this.config.zIndex.tooltip):this.container.style.zIndex=this.getOption("tooltipZIndex"),this.bindDocumentResizeListener(),this.bindScrollListener()}hide(){this.getOption("tooltipZIndex")==="auto"&&de.clear(this.container),this.remove()}updateText(){let e=this.getOption("tooltipLabel");if(e&&typeof e.createEmbeddedView=="function"){let n=this.viewContainer.createEmbeddedView(e);n.detectChanges(),n.rootNodes.forEach(i=>this.tooltipText.appendChild(i))}else this.getOption("escape")?(this.tooltipText.innerHTML="",this.tooltipText.appendChild(document.createTextNode(e))):this.tooltipText.innerHTML=e}align(){let e=this.getOption("tooltipPosition"),i={top:[this.alignTop,this.alignBottom,this.alignRight,this.alignLeft],bottom:[this.alignBottom,this.alignTop,this.alignRight,this.alignLeft],left:[this.alignLeft,this.alignRight,this.alignTop,this.alignBottom],right:[this.alignRight,this.alignLeft,this.alignTop,this.alignBottom]}[e]||[];for(let[r,s]of i.entries())if(r===0)s.call(this);else if(this.isOutOfBounds())s.call(this);else break}getHostOffset(){if(this.getOption("appendTo")==="body"||this.getOption("appendTo")==="target"){let e=this.el.nativeElement.getBoundingClientRect(),n=e.left+ni(),i=e.top+ii();return{left:n,top:i}}else return{left:0,top:0}}get activeElement(){return this.el.nativeElement.nodeName.startsWith("P-")?ze(this.el.nativeElement,".p-component"):this.el.nativeElement}alignRight(){this.preAlign("right");let e=this.activeElement,n=oe(e),i=(le(e)-le(this.container))/2;this.alignTooltip(n,i);let r=this.getArrowElement();r.style.top="50%",r.style.right=null,r.style.bottom=null,r.style.left="0"}alignLeft(){this.preAlign("left");let e=this.getArrowElement(),n=oe(this.container),i=(le(this.el.nativeElement)-le(this.container))/2;this.alignTooltip(-n,i),e.style.top="50%",e.style.right="0",e.style.bottom=null,e.style.left=null}alignTop(){this.preAlign("top");let e=this.getArrowElement(),n=this.getHostOffset(),i=oe(this.container),r=(oe(this.el.nativeElement)-oe(this.container))/2,s=le(this.container);this.alignTooltip(r,-s);let c=n.left-this.getHostOffset().left+i/2;e.style.top=null,e.style.right=null,e.style.bottom="0",e.style.left=c+"px"}getArrowElement(){return ze(this.container,'[data-pc-section="arrow"]')}alignBottom(){this.preAlign("bottom");let e=this.getArrowElement(),n=oe(this.container),i=this.getHostOffset(),r=(oe(this.el.nativeElement)-oe(this.container))/2,s=le(this.el.nativeElement);this.alignTooltip(r,s);let c=i.left-this.getHostOffset().left+n/2;e.style.top="0",e.style.right=null,e.style.bottom=null,e.style.left=c+"px"}alignTooltip(e,n){let i=this.getHostOffset(),r=i.left+e,s=i.top+n;this.container.style.left=r+this.getOption("positionLeft")+"px",this.container.style.top=s+this.getOption("positionTop")+"px"}setOption(e){this._tooltipOptions=x(x({},this._tooltipOptions),e)}getOption(e){return this._tooltipOptions[e]}getTarget(e){return Se(e,"p-inputwrapper")?ze(e,"input"):e}preAlign(e){this.container.style.left="-999px",this.container.style.top="-999px";let n="p-tooltip p-component p-tooltip-"+e;this.container.className=this.getOption("tooltipStyleClass")?n+" "+this.getOption("tooltipStyleClass"):n}isOutOfBounds(){let e=this.container.getBoundingClientRect(),n=e.top,i=e.left,r=oe(this.container),s=le(this.container),c=_t();return i+r>c.width||i<0||n<0||n+s>c.height}onWindowResize(e){this.hide()}bindDocumentResizeListener(){this.zone.runOutsideAngular(()=>{this.resizeListener=this.onWindowResize.bind(this),window.addEventListener("resize",this.resizeListener)})}unbindDocumentResizeListener(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)}bindScrollListener(){this.scrollHandler||(this.scrollHandler=new ct(this.el.nativeElement,()=>{this.container&&this.hide()})),this.scrollHandler.bindScrollListener()}unbindScrollListener(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()}unbindEvents(){let e=this.getOption("tooltipEvent");if((e==="hover"||e==="both")&&(this.el.nativeElement.removeEventListener("mouseenter",this.mouseEnterListener),this.el.nativeElement.removeEventListener("mouseleave",this.mouseLeaveListener),this.el.nativeElement.removeEventListener("click",this.clickListener)),e==="focus"||e==="both"){let n=this.el.nativeElement.querySelector(".p-component");n||(n=this.getTarget(this.el.nativeElement)),n.removeEventListener("focus",this.focusListener),n.removeEventListener("blur",this.blurListener)}this.unbindDocumentResizeListener()}remove(){this.container&&this.container.parentElement&&(this.getOption("appendTo")==="body"?document.body.removeChild(this.container):this.getOption("appendTo")==="target"?this.el.nativeElement.removeChild(this.container):mi(this.getOption("appendTo"),this.container)),this.unbindDocumentResizeListener(),this.unbindScrollListener(),this.unbindContainerMouseleaveListener(),this.clearTimeouts(),this.container=null,this.scrollHandler=null}clearShowTimeout(){this.showTimeout&&(clearTimeout(this.showTimeout),this.showTimeout=null)}clearHideTimeout(){this.hideTimeout&&(clearTimeout(this.hideTimeout),this.hideTimeout=null)}clearTimeouts(){this.clearShowTimeout(),this.clearHideTimeout()}ngOnDestroy(){this.unbindEvents(),super.ngOnDestroy(),this.container&&de.clear(this.container),this.remove(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.documentEscapeListener&&this.documentEscapeListener()}static \u0275fac=function(n){return new(n||t)(V(tt),V(Vt))};static \u0275dir=k({type:t,selectors:[["","pTooltip",""]],inputs:{tooltipPosition:"tooltipPosition",tooltipEvent:"tooltipEvent",positionStyle:"positionStyle",tooltipStyleClass:"tooltipStyleClass",tooltipZIndex:"tooltipZIndex",escape:[2,"escape","escape",y],showDelay:[2,"showDelay","showDelay",be],hideDelay:[2,"hideDelay","hideDelay",be],life:[2,"life","life",be],positionTop:[2,"positionTop","positionTop",be],positionLeft:[2,"positionLeft","positionLeft",be],autoHide:[2,"autoHide","autoHide",y],fitContent:[2,"fitContent","fitContent",y],hideOnEscape:[2,"hideOnEscape","hideOnEscape",y],content:[0,"pTooltip","content"],disabled:[0,"tooltipDisabled","disabled"],tooltipOptions:"tooltipOptions",appendTo:[1,"appendTo"]},features:[E([ji]),b,xe]})}return t})(),Tn=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=W({type:t});static \u0275inj=$({})}return t})();var Wi=`
    .p-menu {
        background: dt('menu.background');
        color: dt('menu.color');
        border: 1px solid dt('menu.border.color');
        border-radius: dt('menu.border.radius');
        min-width: 12.5rem;
    }

    .p-menu-list {
        margin: 0;
        padding: dt('menu.list.padding');
        outline: 0 none;
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: dt('menu.list.gap');
    }

    .p-menu-item-content {
        transition:
            background dt('menu.transition.duration'),
            color dt('menu.transition.duration');
        border-radius: dt('menu.item.border.radius');
        color: dt('menu.item.color');
        overflow: hidden;
    }

    .p-menu-item-link {
        cursor: pointer;
        display: flex;
        align-items: center;
        text-decoration: none;
        overflow: hidden;
        position: relative;
        color: inherit;
        padding: dt('menu.item.padding');
        gap: dt('menu.item.gap');
        user-select: none;
        outline: 0 none;
    }

    .p-menu-item-label {
        line-height: 1;
    }

    .p-menu-item-icon {
        color: dt('menu.item.icon.color');
    }

    .p-menu-item.p-focus .p-menu-item-content {
        color: dt('menu.item.focus.color');
        background: dt('menu.item.focus.background');
    }

    .p-menu-item.p-focus .p-menu-item-icon {
        color: dt('menu.item.icon.focus.color');
    }

    .p-menu-item:not(.p-disabled) .p-menu-item-content:hover {
        color: dt('menu.item.focus.color');
        background: dt('menu.item.focus.background');
    }

    .p-menu-item:not(.p-disabled) .p-menu-item-content:hover .p-menu-item-icon {
        color: dt('menu.item.icon.focus.color');
    }

    .p-menu-overlay {
        box-shadow: dt('menu.shadow');
    }

    .p-menu-submenu-label {
        background: dt('menu.submenu.label.background');
        padding: dt('menu.submenu.label.padding');
        color: dt('menu.submenu.label.color');
        font-weight: dt('menu.submenu.label.font.weight');
    }

    .p-menu-separator {
        border-block-start: 1px solid dt('menu.separator.border.color');
    }
`;var jr=["pMenuItemContent",""],Zt=t=>({$implicit:t}),$r=()=>({exact:!1}),Wr=t=>({item:t});function Gr(t,o){t&1&&ie(0)}function Ur(t,o){if(t&1&&(m(0,"a",6),f(1,Gr,1,0,"ng-container",7),p()),t&2){let e=d(2),n=Ae(4);_(e.cx("itemLink")),a("target",e.item.target),M("title",e.item.title)("href",e.item.url||null,Bn)("data-automationid",e.item.automationId)("tabindex",-1)("data-pc-section","action"),l(),a("ngTemplateOutlet",n)("ngTemplateOutletContext",se(10,Zt,e.item))}}function qr(t,o){t&1&&ie(0)}function Zr(t,o){if(t&1&&(m(0,"a",8),f(1,qr,1,0,"ng-container",7),p()),t&2){let e=d(2),n=Ae(4);_(e.cx("itemLink")),a("routerLink",e.item.routerLink)("queryParams",e.item.queryParams)("routerLinkActiveOptions",e.item.routerLinkActiveOptions||At(18,$r))("target",e.item.target)("fragment",e.item.fragment)("queryParamsHandling",e.item.queryParamsHandling)("preserveFragment",e.item.preserveFragment)("skipLocationChange",e.item.skipLocationChange)("replaceUrl",e.item.replaceUrl)("state",e.item.state),M("data-automationid",e.item.automationId)("tabindex",-1)("data-pc-section","action")("title",e.item.title),l(),a("ngTemplateOutlet",n)("ngTemplateOutletContext",se(19,Zt,e.item))}}function Qr(t,o){if(t&1&&(Z(0),f(1,Ur,2,12,"a",4)(2,Zr,2,21,"a",5),Q()),t&2){let e=d();l(),a("ngIf",!(e.item!=null&&e.item.routerLink)),l(),a("ngIf",e.item==null?null:e.item.routerLink)}}function Yr(t,o){}function Xr(t,o){t&1&&f(0,Yr,0,0,"ng-template")}function Kr(t,o){if(t&1&&(Z(0),f(1,Xr,1,0,null,7),Q()),t&2){let e=d();l(),a("ngTemplateOutlet",e.itemTemplate)("ngTemplateOutletContext",se(2,Zt,e.item))}}function Jr(t,o){if(t&1&&A(0,"span"),t&2){let e=d(2);qe(e.item.iconStyle),_(e.cx("itemIcon",se(4,Wr,e.item)))}}function es(t,o){if(t&1&&(m(0,"span"),O(1),p()),t&2){let e=d(2);_(e.cx("itemLabel")),l(),ce(e.item.label)}}function ts(t,o){if(t&1&&(A(0,"span",12),J(1,"safeHtml")),t&2){let e=d(2);a("innerHTML",ee(1,1,e.item.label),ft)}}function ns(t,o){if(t&1&&A(0,"p-badge",13),t&2){let e=d(2);a("styleClass",e.item.badgeStyleClass)("value",e.item.badge)}}function is(t,o){if(t&1&&f(0,Jr,1,6,"span",9)(1,es,2,3,"span",10)(2,ts,2,3,"ng-template",null,1,Le)(4,ns,1,2,"p-badge",11),t&2){let e=Ae(3),n=d();a("ngIf",n.item.icon),l(),a("ngIf",n.item.escape!==!1)("ngIfElse",e),l(3),a("ngIf",n.item.badge)}}var os=["start"],rs=["end"],ss=["header"],as=["item"],ls=["submenuheader"],ds=["list"],cs=["container"],us=(t,o)=>({showTransitionParams:t,hideTransitionParams:o}),ps=t=>({value:"visible",params:t}),Gi=(t,o)=>({item:t,id:o});function ms(t,o){t&1&&ie(0)}function hs(t,o){if(t&1&&(m(0,"div"),f(1,ms,1,0,"ng-container",8),p()),t&2){let e=d(2);_(e.cx("start")),M("data-pc-section","start"),l(),a("ngTemplateOutlet",e.startTemplate??e._startTemplate)}}function fs(t,o){if(t&1&&A(0,"li",12),t&2){let e=d(4);_(e.cx("separator"))}}function gs(t,o){if(t&1&&(m(0,"span"),O(1),p()),t&2){let e=d(3).$implicit;l(),ce(e.label)}}function bs(t,o){if(t&1&&(A(0,"span",16),J(1,"safeHtml")),t&2){let e=d(3).$implicit;a("innerHTML",ee(1,1,e.label),ft)}}function _s(t,o){if(t&1&&(Z(0),f(1,gs,2,1,"span",15)(2,bs,2,3,"ng-template",null,2,Le),Q()),t&2){let e=Ae(3),n=d(2).$implicit;l(),a("ngIf",n.escape!==!1)("ngIfElse",e)}}function ys(t,o){t&1&&ie(0)}function vs(t,o){if(t&1&&(m(0,"li",13),f(1,_s,4,2,"ng-container",7)(2,ys,1,0,"ng-container",14),p()),t&2){let e=d(),n=e.$implicit,i=e.index,r=d(3);_(r.cx("submenuLabel")),a("tooltipOptions",n.tooltipOptions),M("data-automationid",n.automationId)("id",r.menuitemId(n,r.id,i)),l(),a("ngIf",!r.submenuHeaderTemplate&&!r._submenuHeaderTemplate),l(),a("ngTemplateOutlet",r.submenuHeaderTemplate??r._submenuHeaderTemplate)("ngTemplateOutletContext",se(8,Zt,n))}}function Cs(t,o){if(t&1&&A(0,"li",12),t&2){let e=d(5);_(e.cx("separator"))}}function xs(t,o){if(t&1){let e=G();m(0,"li",18),I("onMenuItemClick",function(i){w(e);let r=d(),s=r.$implicit,c=r.index,h=d().index,C=d(3);return D(C.itemClick(i,C.menuitemId(s,C.id,h,c)))}),p()}if(t&2){let e=d(),n=e.$implicit,i=e.index,r=d().index,s=d(3);qe(n.style),_(s.cn(s.cx("item",Ze(13,Gi,n,s.menuitemId(n,s.id,r,i))),n==null?null:n.styleClass)),a("pMenuItemContent",n)("itemTemplate",s.itemTemplate??s._itemTemplate)("tooltipOptions",n.tooltipOptions),M("data-pc-section","menuitem")("aria-label",s.label(n.label))("data-p-focused",s.isItemFocused(s.menuitemId(n,s.id,r,i)))("data-p-disabled",s.disabled(n.disabled))("aria-disabled",s.disabled(n.disabled))("id",s.menuitemId(n,s.id,r,i))}}function ws(t,o){if(t&1&&f(0,Cs,1,2,"li",10)(1,xs,1,16,"li",17),t&2){let e=o.$implicit,n=d().$implicit;a("ngIf",e.separator&&(e.visible!==!1||n.visible!==!1)),l(),a("ngIf",!e.separator&&e.visible!==!1&&(e.visible!==void 0||n.visible!==!1))}}function Ds(t,o){if(t&1&&f(0,fs,1,2,"li",10)(1,vs,3,10,"li",11)(2,ws,2,2,"ng-template",9),t&2){let e=o.$implicit;a("ngIf",e.separator&&e.visible!==!1),l(),a("ngIf",!e.separator),l(),a("ngForOf",e.items)}}function Is(t,o){if(t&1&&f(0,Ds,3,3,"ng-template",9),t&2){let e=d(2);a("ngForOf",e.model)}}function Es(t,o){if(t&1&&A(0,"li",12),t&2){let e=d(4);_(e.cx("separator"))}}function Ts(t,o){if(t&1){let e=G();m(0,"li",20),I("onMenuItemClick",function(i){w(e);let r=d(),s=r.$implicit,c=r.index,h=d(3);return D(h.itemClick(i,h.menuitemId(s,h.id,c)))}),p()}if(t&2){let e=d(),n=e.$implicit,i=e.index,r=d(3);_(r.cn(r.cx("item",Ze(12,Gi,n,r.menuitemId(n,r.id,i))),n==null?null:n.styleClass)),a("pMenuItemContent",n)("itemTemplate",r.itemTemplate??r._itemTemplate)("ngStyle",n.style)("tooltipOptions",n.tooltipOptions),M("data-pc-section","menuitem")("aria-label",r.label(n.label))("data-p-focused",r.isItemFocused(r.menuitemId(n,r.id,i)))("data-p-disabled",r.disabled(n.disabled))("aria-disabled",r.disabled(n.disabled))("id",r.menuitemId(n,r.id,i))}}function Ms(t,o){if(t&1&&f(0,Es,1,2,"li",10)(1,Ts,1,15,"li",19),t&2){let e=o.$implicit;a("ngIf",e.separator&&e.visible!==!1),l(),a("ngIf",!e.separator&&e.visible!==!1)}}function Ss(t,o){if(t&1&&f(0,Ms,2,2,"ng-template",9),t&2){let e=d(2);a("ngForOf",e.model)}}function Vs(t,o){t&1&&ie(0)}function ks(t,o){if(t&1&&(m(0,"div"),f(1,Vs,1,0,"ng-container",8),p()),t&2){let e=d(2);_(e.cx("end")),M("data-pc-section","end"),l(),a("ngTemplateOutlet",e.endTemplate??e._endTemplate)}}function Os(t,o){if(t&1){let e=G();m(0,"div",4,0),I("click",function(i){w(e);let r=d();return D(r.onOverlayClick(i))})("@overlayAnimation.start",function(i){w(e);let r=d();return D(r.onOverlayAnimationStart(i))})("@overlayAnimation.done",function(i){w(e);let r=d();return D(r.onOverlayAnimationEnd(i))}),f(2,hs,2,4,"div",5),m(3,"ul",6,1),I("focus",function(i){w(e);let r=d();return D(r.onListFocus(i))})("blur",function(i){w(e);let r=d();return D(r.onListBlur(i))})("keydown",function(i){w(e);let r=d();return D(r.onListKeyDown(i))}),f(5,Is,1,1,null,7)(6,Ss,1,1,null,7),p(),f(7,ks,2,4,"div",5),p()}if(t&2){let e=d();qe(e.sx("root")),_(e.cn(e.cx("root"),e.styleClass)),a("ngStyle",e.style)("@overlayAnimation",se(24,ps,Ze(21,us,e.showTransitionOptions,e.hideTransitionOptions)))("@.disabled",e.popup!==!0),M("data-pc-name","menu")("id",e.id),l(2),a("ngIf",e.startTemplate??e._startTemplate),l(),_(e.cx("list")),M("id",e.id+"_list")("tabindex",e.getTabIndexValue())("data-pc-section","menu")("aria-activedescendant",e.activedescendant())("aria-label",e.ariaLabel)("aria-labelledBy",e.ariaLabelledBy),l(2),a("ngIf",e.hasSubMenu()),l(),a("ngIf",!e.hasSubMenu()),l(),a("ngIf",e.endTemplate??e._endTemplate)}}var Fs={root:({instance:t})=>({position:t.popup?"absolute":"relative"})},As={root:({instance:t})=>["p-menu p-component",{"p-menu-overlay":t.popup}],start:"p-menu-start",list:"p-menu-list",submenuLabel:"p-menu-submenu-label",separator:"p-menu-separator",end:"p-menu-end",item:({instance:t,item:o,id:e})=>["p-menu-item",{"p-focus":t.focusedOptionId()&&e===t.focusedOptionId(),"p-disabled":t.disabled(o.disabled)},o.styleClass],itemContent:"p-menu-item-content",itemLink:"p-menu-item-link",itemIcon:({item:t})=>["p-menu-item-icon",t.icon,t.iconClass],itemLabel:"p-menu-item-label"},qt=(()=>{class t extends N{name="menu";theme=Wi;classes=As;inlineStyles=Fs;static \u0275fac=(()=>{let e;return function(i){return(e||(e=g(t)))(i||t)}})();static \u0275prov=T({token:t,factory:t.\u0275fac})}return t})();var Ui=(()=>{class t{platformId;sanitizer;constructor(e,n){this.platformId=e,this.sanitizer=n}transform(e){return!e||!U(this.platformId)?e:this.sanitizer.bypassSecurityTrustHtml(e)}static \u0275fac=function(n){return new(n||t)(V(Fe,16),V(Zn,16))};static \u0275pipe=jn({name:"safeHtml",type:t,pure:!0})}return t})(),Ls=(()=>{class t extends R{item;itemTemplate;onMenuItemClick=new q;menu;_componentStyle=u(qt);constructor(e){super(),this.menu=e}onItemClick(e,n){this.onMenuItemClick.emit({originalEvent:e,item:n})}static \u0275fac=function(n){return new(n||t)(V(Oe(()=>Mn)))};static \u0275cmp=v({type:t,selectors:[["","pMenuItemContent",""]],inputs:{item:[0,"pMenuItemContent","item"],itemTemplate:"itemTemplate"},outputs:{onMenuItemClick:"onMenuItemClick"},features:[E([qt]),b],attrs:jr,decls:5,vars:5,consts:[["itemContent",""],["htmlLabel",""],[3,"click"],[4,"ngIf"],["pRipple","",3,"class","target",4,"ngIf"],["routerLinkActive","p-menu-item-link-active","pRipple","",3,"routerLink","queryParams","routerLinkActiveOptions","class","target","fragment","queryParamsHandling","preserveFragment","skipLocationChange","replaceUrl","state",4,"ngIf"],["pRipple","",3,"target"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["routerLinkActive","p-menu-item-link-active","pRipple","",3,"routerLink","queryParams","routerLinkActiveOptions","target","fragment","queryParamsHandling","preserveFragment","skipLocationChange","replaceUrl","state"],[3,"class","style",4,"ngIf"],[3,"class",4,"ngIf","ngIfElse"],[3,"styleClass","value",4,"ngIf"],[1,"p-menu-item-label",3,"innerHTML"],[3,"styleClass","value"]],template:function(n,i){if(n&1){let r=G();m(0,"div",2),I("click",function(c){return w(r),D(i.onItemClick(c,i.item))}),f(1,Qr,3,2,"ng-container",3)(2,Kr,2,4,"ng-container",3)(3,is,5,4,"ng-template",null,0,Le),p()}n&2&&(_(i.cx("itemContent")),M("data-pc-section","content"),l(),a("ngIf",!i.itemTemplate),l(),a("ngIf",i.itemTemplate))},dependencies:[ae,Te,Me,bn,Xn,Kn,Gt,Tn,xt,Ct,Y,Ui],encapsulation:2})}return t})(),Mn=(()=>{class t extends R{overlayService;model;popup;style;styleClass;autoZIndex=!0;baseZIndex=0;showTransitionOptions=".12s cubic-bezier(0, 0, 0.2, 1)";hideTransitionOptions=".1s linear";ariaLabel;ariaLabelledBy;id;tabindex=0;appendTo=S(void 0);onShow=new q;onHide=new q;onBlur=new q;onFocus=new q;listViewChild;containerViewChild;$appendTo=H(()=>this.appendTo()||this.config.overlayAppendTo());container;scrollHandler;documentClickListener;documentResizeListener;preventDocumentDefault;target;visible;focusedOptionId=H(()=>this.focusedOptionIndex()!==-1?this.focusedOptionIndex():null);focusedOptionIndex=fe(-1);selectedOptionIndex=fe(-1);focused=!1;overlayVisible=!1;relativeAlign;_componentStyle=u(qt);constructor(e){super(),this.overlayService=e,this.id=this.id||te("pn_id_")}toggle(e){this.visible?this.hide():this.show(e),this.preventDocumentDefault=!0}show(e){this.target=e.currentTarget,this.relativeAlign=e.relativeAlign,this.visible=!0,this.preventDocumentDefault=!0,this.overlayVisible=!0,this.cd.markForCheck()}ngOnInit(){super.ngOnInit(),this.popup||this.bindDocumentClickListener()}startTemplate;_startTemplate;endTemplate;_endTemplate;headerTemplate;_headerTemplate;itemTemplate;_itemTemplate;submenuHeaderTemplate;_submenuHeaderTemplate;templates;ngAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"start":this._startTemplate=e.template;break;case"end":this._endTemplate=e.template;break;case"item":this._itemTemplate=e.template;break;case"submenuheader":this._submenuHeaderTemplate=e.template;break;default:this._itemTemplate=e.template;break}})}getTabIndexValue(){return this.tabindex!==void 0?this.tabindex.toString():null}onOverlayAnimationStart(e){switch(e.toState){case"visible":this.popup&&(this.container=e.element,this.moveOnTop(),this.onShow.emit({}),this.attrSelector&&this.container?.setAttribute(this.attrSelector,""),this.appendOverlay(),this.alignOverlay(),this.bindDocumentClickListener(),this.bindDocumentResizeListener(),this.bindScrollListener(),Ne(this.listViewChild?.nativeElement));break;case"void":this.onOverlayHide(),this.onHide.emit({});break}}onOverlayAnimationEnd(e){switch(e.toState){case"void":this.autoZIndex&&de.clear(e.element);break}}alignOverlay(){this.relativeAlign?ri(this.container,this.target):oi(this.container,this.target)}appendOverlay(){Re.appendOverlay(this.container,this.$appendTo()==="body"?this.document.body:this.$appendTo(),this.$appendTo())}restoreOverlayAppend(){this.container&&this.$appendTo()!=="self"&&this.renderer.appendChild(this.el.nativeElement,this.container)}moveOnTop(){this.autoZIndex&&de.set("menu",this.container,this.baseZIndex+this.config.zIndex.menu)}hide(){this.visible=!1,this.relativeAlign=!1,this.cd.markForCheck()}onWindowResize(){this.visible&&!ui()&&this.hide()}menuitemId(e,n,i,r){return e?.id??`${n}_${i}${r!==void 0?"_"+r:""}`}isItemFocused(e){return this.focusedOptionId()===e}label(e){return typeof e=="function"?e():e}disabled(e){return typeof e=="function"?e():typeof e>"u"?!1:e}activedescendant(){return this.focused?this.focusedOptionId():void 0}onListFocus(e){this.focused||(this.focused=!0,!this.popup&&this.changeFocusedOptionIndex(0),this.onFocus.emit(e))}onListBlur(e){this.focused&&(this.focused=!1,this.changeFocusedOptionIndex(-1),this.selectedOptionIndex.set(-1),this.focusedOptionIndex.set(-1),this.onBlur.emit(e))}onListKeyDown(e){switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break;case"Enter":this.onEnterKey(e);break;case"NumpadEnter":this.onEnterKey(e);break;case"Space":this.onSpaceKey(e);break;case"Escape":case"Tab":this.popup&&(Ne(this.target),this.hide()),this.overlayVisible&&this.hide();break;default:break}}onArrowDownKey(e){let n=this.findNextOptionIndex(this.focusedOptionIndex());this.changeFocusedOptionIndex(n),e.preventDefault()}onArrowUpKey(e){if(e.altKey&&this.popup)Ne(this.target),this.hide(),e.preventDefault();else{let n=this.findPrevOptionIndex(this.focusedOptionIndex());this.changeFocusedOptionIndex(n),e.preventDefault()}}onHomeKey(e){this.changeFocusedOptionIndex(0),e.preventDefault()}onEndKey(e){this.changeFocusedOptionIndex(vt(this.containerViewChild?.nativeElement,'li[data-pc-section="menuitem"][data-p-disabled="false"]').length-1),e.preventDefault()}onEnterKey(e){let n=ze(this.containerViewChild?.nativeElement,`li[id="${`${this.focusedOptionIndex()}`}"]`),i=n&&(ze(n,'[data-pc-section="action"]')||ze(n,"a,button"));this.popup&&Ne(this.target),i?i.click():n&&n.click(),e.preventDefault()}onSpaceKey(e){this.onEnterKey(e)}findNextOptionIndex(e){let i=[...vt(this.containerViewChild?.nativeElement,'li[data-pc-section="menuitem"][data-p-disabled="false"]')].findIndex(r=>r.id===e);return i>-1?i+1:0}findPrevOptionIndex(e){let i=[...vt(this.containerViewChild?.nativeElement,'li[data-pc-section="menuitem"][data-p-disabled="false"]')].findIndex(r=>r.id===e);return i>-1?i-1:0}changeFocusedOptionIndex(e){let n=vt(this.containerViewChild?.nativeElement,'li[data-pc-section="menuitem"][data-p-disabled="false"]');if(n.length>0){let i=e>=n.length?n.length-1:e<0?0:e;i>-1&&this.focusedOptionIndex.set(n[i].getAttribute("id"))}}itemClick(e,n){let{originalEvent:i,item:r}=e;if(this.focused||(this.focused=!0,this.onFocus.emit()),r.disabled){i.preventDefault();return}!r.url&&!r.routerLink&&i.preventDefault(),r.command&&r.command({originalEvent:i,item:r}),this.popup&&this.hide(),!this.popup&&this.focusedOptionIndex()!==n&&this.focusedOptionIndex.set(n)}onOverlayClick(e){this.popup&&this.overlayService.add({originalEvent:e,target:this.el.nativeElement}),this.preventDocumentDefault=!0}bindDocumentClickListener(){if(!this.documentClickListener&&U(this.platformId)){let e=this.el?this.el.nativeElement.ownerDocument:"document";this.documentClickListener=this.renderer.listen(e,"click",n=>{let i=this.containerViewChild?.nativeElement&&!this.containerViewChild?.nativeElement.contains(n.target),r=!(this.target&&(this.target===n.target||this.target.contains(n.target)));!this.popup&&i&&r&&this.onListBlur(n),this.preventDocumentDefault&&this.overlayVisible&&i&&r&&(this.hide(),this.preventDocumentDefault=!1)})}}unbindDocumentClickListener(){this.documentClickListener&&(this.documentClickListener(),this.documentClickListener=null)}bindDocumentResizeListener(){if(!this.documentResizeListener&&U(this.platformId)){let e=this.document.defaultView;this.documentResizeListener=this.renderer.listen(e,"resize",this.onWindowResize.bind(this))}}unbindDocumentResizeListener(){this.documentResizeListener&&(this.documentResizeListener(),this.documentResizeListener=null)}bindScrollListener(){!this.scrollHandler&&U(this.platformId)&&(this.scrollHandler=new ct(this.target,()=>{this.visible&&this.hide()})),this.scrollHandler?.bindScrollListener()}unbindScrollListener(){this.scrollHandler&&(this.scrollHandler.unbindScrollListener(),this.scrollHandler=null)}onOverlayHide(){this.unbindDocumentClickListener(),this.unbindDocumentResizeListener(),this.unbindScrollListener(),this.preventDocumentDefault=!1,this.cd.destroyed||(this.target=null)}ngOnDestroy(){this.popup&&(this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.container&&this.autoZIndex&&de.clear(this.container),this.restoreOverlayAppend(),this.onOverlayHide()),this.popup||this.unbindDocumentClickListener(),super.ngOnDestroy()}hasSubMenu(){return this.model?.some(e=>e.items)??!1}isItemHidden(e){return e.separator?e.visible===!1||e.items&&e.items.some(n=>n.visible!==!1):e.visible===!1}static \u0275fac=function(n){return new(n||t)(V(bi))};static \u0275cmp=v({type:t,selectors:[["p-menu"]],contentQueries:function(n,i,r){if(n&1&&(X(r,os,4),X(r,rs,4),X(r,ss,4),X(r,as,4),X(r,ls,4),X(r,rt,4)),n&2){let s;P(s=z())&&(i.startTemplate=s.first),P(s=z())&&(i.endTemplate=s.first),P(s=z())&&(i.headerTemplate=s.first),P(s=z())&&(i.itemTemplate=s.first),P(s=z())&&(i.submenuHeaderTemplate=s.first),P(s=z())&&(i.templates=s)}},viewQuery:function(n,i){if(n&1&&(we(ds,5),we(cs,5)),n&2){let r;P(r=z())&&(i.listViewChild=r.first),P(r=z())&&(i.containerViewChild=r.first)}},inputs:{model:"model",popup:[2,"popup","popup",y],style:"style",styleClass:"styleClass",autoZIndex:[2,"autoZIndex","autoZIndex",y],baseZIndex:[2,"baseZIndex","baseZIndex",be],showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions",ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy",id:"id",tabindex:[2,"tabindex","tabindex",be],appendTo:[1,"appendTo"]},outputs:{onShow:"onShow",onHide:"onHide",onBlur:"onBlur",onFocus:"onFocus"},features:[E([qt]),b],decls:1,vars:1,consts:[["container",""],["list",""],["htmlSubmenuLabel",""],[3,"class","style","ngStyle","click",4,"ngIf"],[3,"click","ngStyle"],[3,"class",4,"ngIf"],["role","menu",3,"focus","blur","keydown"],[4,"ngIf"],[4,"ngTemplateOutlet"],["ngFor","",3,"ngForOf"],["role","separator",3,"class",4,"ngIf"],["pTooltip","","role","none",3,"class","tooltipOptions",4,"ngIf"],["role","separator"],["pTooltip","","role","none",3,"tooltipOptions"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[4,"ngIf","ngIfElse"],[3,"innerHTML"],["pTooltip","","role","menuitem",3,"class","pMenuItemContent","itemTemplate","style","tooltipOptions","onMenuItemClick",4,"ngIf"],["pTooltip","","role","menuitem",3,"onMenuItemClick","pMenuItemContent","itemTemplate","tooltipOptions"],["pTooltip","","role","menuitem",3,"class","pMenuItemContent","itemTemplate","ngStyle","tooltipOptions","onMenuItemClick",4,"ngIf"],["pTooltip","","role","menuitem",3,"onMenuItemClick","pMenuItemContent","itemTemplate","ngStyle","tooltipOptions"]],template:function(n,i){n&1&&f(0,Os,8,26,"div",3),n&2&&a("ngIf",!i.popup||i.visible)},dependencies:[ae,Rt,Te,Me,it,bn,Ls,Tn,$i,xt,Y,Ui],encapsulation:2,data:{animation:[ot("overlayAnimation",[Pe(":enter",[_e({opacity:0,transform:"scaleY(0.8)"}),De("{{showTransitionParams}}")]),Pe(":leave",[De("{{hideTransitionParams}}",_e({opacity:0}))])])]},changeDetection:0})}return t})();var eo=(()=>{class t{_renderer;_elementRef;onChange=e=>{};onTouched=()=>{};constructor(e,n){this._renderer=e,this._elementRef=n}setProperty(e,n){this._renderer.setProperty(this._elementRef.nativeElement,e,n)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty("disabled",e)}static \u0275fac=function(n){return new(n||t)(V(We),V($e))};static \u0275dir=k({type:t})}return t})(),Ps=(()=>{class t extends eo{static \u0275fac=(()=>{let e;return function(i){return(e||(e=g(t)))(i||t)}})();static \u0275dir=k({type:t,features:[b]})}return t})(),Jt=new et("");var zs={provide:Jt,useExisting:Oe(()=>en),multi:!0};function Ns(){let t=gn()?gn().getUserAgent():"";return/android (\d+)/.test(t.toLowerCase())}var Rs=new et(""),en=(()=>{class t extends eo{_compositionMode;_composing=!1;constructor(e,n,i){super(e,n),this._compositionMode=i,this._compositionMode==null&&(this._compositionMode=!Ns())}writeValue(e){let n=e??"";this.setProperty("value",n)}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}static \u0275fac=function(n){return new(n||t)(V(We),V($e),V(Rs,8))};static \u0275dir=k({type:t,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(n,i){n&1&&I("input",function(s){return i._handleInput(s.target.value)})("blur",function(){return i.onTouched()})("compositionstart",function(){return i._compositionStart()})("compositionend",function(s){return i._compositionEnd(s.target.value)})},standalone:!1,features:[E([zs]),b]})}return t})();function Bs(t){return t==null||Hs(t)===0}function Hs(t){return t==null?null:Array.isArray(t)||typeof t=="string"?t.length:t instanceof Set?t.size:null}var to=new et(""),js=new et("");function $s(t){if(!t)return Sn;let o,e;return typeof t=="string"?(e="",t.charAt(0)!=="^"&&(e+="^"),e+=t,t.charAt(t.length-1)!=="$"&&(e+="$"),o=new RegExp(e)):(e=t.toString(),o=t),n=>{if(Bs(n.value))return null;let i=n.value;return o.test(i)?null:{pattern:{requiredPattern:e,actualValue:i}}}}function Sn(t){return null}function no(t){return t!=null}function io(t){return $n(t)?zn(t):t}function oo(t){let o={};return t.forEach(e=>{o=e!=null?x(x({},o),e):o}),Object.keys(o).length===0?null:o}function ro(t,o){return o.map(e=>e(t))}function Ws(t){return!t.validate}function so(t){return t.map(o=>Ws(o)?o:e=>o.validate(e))}function Gs(t){if(!t)return null;let o=t.filter(no);return o.length==0?null:function(e){return oo(ro(e,o))}}function ao(t){return t!=null?Gs(so(t)):null}function Us(t){if(!t)return null;let o=t.filter(no);return o.length==0?null:function(e){let n=ro(e,o).map(io);return Rn(n).pipe(Nn(oo))}}function lo(t){return t!=null?Us(so(t)):null}function qi(t,o){return t===null?[o]:Array.isArray(t)?[...t,o]:[t,o]}function qs(t){return t._rawValidators}function Zs(t){return t._rawAsyncValidators}function Vn(t){return t?Array.isArray(t)?t:[t]:[]}function Yt(t,o){return Array.isArray(t)?t.includes(o):t===o}function Zi(t,o){let e=Vn(o);return Vn(t).forEach(i=>{Yt(e,i)||e.push(i)}),e}function Qi(t,o){return Vn(o).filter(e=>!Yt(t,e))}var Xt=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(o){this._rawValidators=o||[],this._composedValidatorFn=ao(this._rawValidators)}_setAsyncValidators(o){this._rawAsyncValidators=o||[],this._composedAsyncValidatorFn=lo(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(o){this._onDestroyCallbacks.push(o)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(o=>o()),this._onDestroyCallbacks=[]}reset(o=void 0){this.control&&this.control.reset(o)}hasError(o,e){return this.control?this.control.hasError(o,e):!1}getError(o,e){return this.control?this.control.getError(o,e):null}},kn=class extends Xt{name;get formDirective(){return null}get path(){return null}},Ke=class extends Xt{_parent=null;name=null;valueAccessor=null},On=class{_cd;constructor(o){this._cd=o}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}},Qs={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},qu=ve(x({},Qs),{"[class.ng-submitted]":"isSubmitted"}),tn=(()=>{class t extends On{constructor(e){super(e)}static \u0275fac=function(n){return new(n||t)(V(Ke,2))};static \u0275dir=k({type:t,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(n,i){n&2&&fn("ng-untouched",i.isUntouched)("ng-touched",i.isTouched)("ng-pristine",i.isPristine)("ng-dirty",i.isDirty)("ng-valid",i.isValid)("ng-invalid",i.isInvalid)("ng-pending",i.isPending)},standalone:!1,features:[b]})}return t})();var Dt="VALID",Qt="INVALID",ut="PENDING",It="DISABLED",Je=class{},Kt=class extends Je{value;source;constructor(o,e){super(),this.value=o,this.source=e}},Et=class extends Je{pristine;source;constructor(o,e){super(),this.pristine=o,this.source=e}},Tt=class extends Je{touched;source;constructor(o,e){super(),this.touched=o,this.source=e}},pt=class extends Je{status;source;constructor(o,e){super(),this.status=o,this.source=e}};var Fn=class extends Je{source;constructor(o){super(),this.source=o}};function Ys(t){return(nn(t)?t.validators:t)||null}function Xs(t){return Array.isArray(t)?ao(t):t||null}function Ks(t,o){return(nn(o)?o.asyncValidators:t)||null}function Js(t){return Array.isArray(t)?lo(t):t||null}function nn(t){return t!=null&&!Array.isArray(t)&&typeof t=="object"}var An=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(o,e){this._assignValidators(o),this._assignAsyncValidators(e)}get validator(){return this._composedValidatorFn}set validator(o){this._rawValidators=this._composedValidatorFn=o}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(o){this._rawAsyncValidators=this._composedAsyncValidatorFn=o}get parent(){return this._parent}get status(){return Qe(this.statusReactive)}set status(o){Qe(()=>this.statusReactive.set(o))}_status=H(()=>this.statusReactive());statusReactive=fe(void 0);get valid(){return this.status===Dt}get invalid(){return this.status===Qt}get pending(){return this.status==ut}get disabled(){return this.status===It}get enabled(){return this.status!==It}errors;get pristine(){return Qe(this.pristineReactive)}set pristine(o){Qe(()=>this.pristineReactive.set(o))}_pristine=H(()=>this.pristineReactive());pristineReactive=fe(!0);get dirty(){return!this.pristine}get touched(){return Qe(this.touchedReactive)}set touched(o){Qe(()=>this.touchedReactive.set(o))}_touched=H(()=>this.touchedReactive());touchedReactive=fe(!1);get untouched(){return!this.touched}_events=new he;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(o){this._assignValidators(o)}setAsyncValidators(o){this._assignAsyncValidators(o)}addValidators(o){this.setValidators(Zi(o,this._rawValidators))}addAsyncValidators(o){this.setAsyncValidators(Zi(o,this._rawAsyncValidators))}removeValidators(o){this.setValidators(Qi(o,this._rawValidators))}removeAsyncValidators(o){this.setAsyncValidators(Qi(o,this._rawAsyncValidators))}hasValidator(o){return Yt(this._rawValidators,o)}hasAsyncValidator(o){return Yt(this._rawAsyncValidators,o)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(o={}){let e=this.touched===!1;this.touched=!0;let n=o.sourceControl??this;this._parent&&!o.onlySelf&&this._parent.markAsTouched(ve(x({},o),{sourceControl:n})),e&&o.emitEvent!==!1&&this._events.next(new Tt(!0,n))}markAllAsDirty(o={}){this.markAsDirty({onlySelf:!0,emitEvent:o.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsDirty(o))}markAllAsTouched(o={}){this.markAsTouched({onlySelf:!0,emitEvent:o.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsTouched(o))}markAsUntouched(o={}){let e=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let n=o.sourceControl??this;this._forEachChild(i=>{i.markAsUntouched({onlySelf:!0,emitEvent:o.emitEvent,sourceControl:n})}),this._parent&&!o.onlySelf&&this._parent._updateTouched(o,n),e&&o.emitEvent!==!1&&this._events.next(new Tt(!1,n))}markAsDirty(o={}){let e=this.pristine===!0;this.pristine=!1;let n=o.sourceControl??this;this._parent&&!o.onlySelf&&this._parent.markAsDirty(ve(x({},o),{sourceControl:n})),e&&o.emitEvent!==!1&&this._events.next(new Et(!1,n))}markAsPristine(o={}){let e=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let n=o.sourceControl??this;this._forEachChild(i=>{i.markAsPristine({onlySelf:!0,emitEvent:o.emitEvent})}),this._parent&&!o.onlySelf&&this._parent._updatePristine(o,n),e&&o.emitEvent!==!1&&this._events.next(new Et(!0,n))}markAsPending(o={}){this.status=ut;let e=o.sourceControl??this;o.emitEvent!==!1&&(this._events.next(new pt(this.status,e)),this.statusChanges.emit(this.status)),this._parent&&!o.onlySelf&&this._parent.markAsPending(ve(x({},o),{sourceControl:e}))}disable(o={}){let e=this._parentMarkedDirty(o.onlySelf);this.status=It,this.errors=null,this._forEachChild(i=>{i.disable(ve(x({},o),{onlySelf:!0}))}),this._updateValue();let n=o.sourceControl??this;o.emitEvent!==!1&&(this._events.next(new Kt(this.value,n)),this._events.next(new pt(this.status,n)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(ve(x({},o),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(i=>i(!0))}enable(o={}){let e=this._parentMarkedDirty(o.onlySelf);this.status=Dt,this._forEachChild(n=>{n.enable(ve(x({},o),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:o.emitEvent}),this._updateAncestors(ve(x({},o),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(n=>n(!1))}_updateAncestors(o,e){this._parent&&!o.onlySelf&&(this._parent.updateValueAndValidity(o),o.skipPristineCheck||this._parent._updatePristine({},e),this._parent._updateTouched({},e))}setParent(o){this._parent=o}getRawValue(){return this.value}updateValueAndValidity(o={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let n=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===Dt||this.status===ut)&&this._runAsyncValidator(n,o.emitEvent)}let e=o.sourceControl??this;o.emitEvent!==!1&&(this._events.next(new Kt(this.value,e)),this._events.next(new pt(this.status,e)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!o.onlySelf&&this._parent.updateValueAndValidity(ve(x({},o),{sourceControl:e}))}_updateTreeValidity(o={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(o)),this.updateValueAndValidity({onlySelf:!0,emitEvent:o.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?It:Dt}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(o,e){if(this.asyncValidator){this.status=ut,this._hasOwnPendingAsyncValidator={emitEvent:e!==!1,shouldHaveEmitted:o!==!1};let n=io(this.asyncValidator(this));this._asyncValidationSubscription=n.subscribe(i=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(i,{emitEvent:e,shouldHaveEmitted:o})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let o=(this._hasOwnPendingAsyncValidator?.emitEvent||this._hasOwnPendingAsyncValidator?.shouldHaveEmitted)??!1;return this._hasOwnPendingAsyncValidator=null,o}return!1}setErrors(o,e={}){this.errors=o,this._updateControlsErrors(e.emitEvent!==!1,this,e.shouldHaveEmitted)}get(o){let e=o;return e==null||(Array.isArray(e)||(e=e.split(".")),e.length===0)?null:e.reduce((n,i)=>n&&n._find(i),this)}getError(o,e){let n=e?this.get(e):this;return n&&n.errors?n.errors[o]:null}hasError(o,e){return!!this.getError(o,e)}get root(){let o=this;for(;o._parent;)o=o._parent;return o}_updateControlsErrors(o,e,n){this.status=this._calculateStatus(),o&&this.statusChanges.emit(this.status),(o||n)&&this._events.next(new pt(this.status,e)),this._parent&&this._parent._updateControlsErrors(o,e,n)}_initObservables(){this.valueChanges=new q,this.statusChanges=new q}_calculateStatus(){return this._allControlsDisabled()?It:this.errors?Qt:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(ut)?ut:this._anyControlsHaveStatus(Qt)?Qt:Dt}_anyControlsHaveStatus(o){return this._anyControls(e=>e.status===o)}_anyControlsDirty(){return this._anyControls(o=>o.dirty)}_anyControlsTouched(){return this._anyControls(o=>o.touched)}_updatePristine(o,e){let n=!this._anyControlsDirty(),i=this.pristine!==n;this.pristine=n,this._parent&&!o.onlySelf&&this._parent._updatePristine(o,e),i&&this._events.next(new Et(this.pristine,e))}_updateTouched(o={},e){this.touched=this._anyControlsTouched(),this._events.next(new Tt(this.touched,e)),this._parent&&!o.onlySelf&&this._parent._updateTouched(o,e)}_onDisabledChange=[];_registerOnCollectionChange(o){this._onCollectionChange=o}_setUpdateStrategy(o){nn(o)&&o.updateOn!=null&&(this._updateOn=o.updateOn)}_parentMarkedDirty(o){let e=this._parent&&this._parent.dirty;return!o&&!!e&&!this._parent._anyControlsDirty()}_find(o){return null}_assignValidators(o){this._rawValidators=Array.isArray(o)?o.slice():o,this._composedValidatorFn=Xs(this._rawValidators)}_assignAsyncValidators(o){this._rawAsyncValidators=Array.isArray(o)?o.slice():o,this._composedAsyncValidatorFn=Js(this._rawAsyncValidators)}};var co=new et("",{providedIn:"root",factory:()=>Ln}),Ln="always";function ea(t,o){return[...o.path,t]}function ta(t,o,e=Ln){ia(t,o),o.valueAccessor.writeValue(t.value),(t.disabled||e==="always")&&o.valueAccessor.setDisabledState?.(t.disabled),oa(t,o),sa(t,o),ra(t,o),na(t,o)}function Yi(t,o){t.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(o)})}function na(t,o){if(o.valueAccessor.setDisabledState){let e=n=>{o.valueAccessor.setDisabledState(n)};t.registerOnDisabledChange(e),o._registerOnDestroy(()=>{t._unregisterOnDisabledChange(e)})}}function ia(t,o){let e=qs(t);o.validator!==null?t.setValidators(qi(e,o.validator)):typeof e=="function"&&t.setValidators([e]);let n=Zs(t);o.asyncValidator!==null?t.setAsyncValidators(qi(n,o.asyncValidator)):typeof n=="function"&&t.setAsyncValidators([n]);let i=()=>t.updateValueAndValidity();Yi(o._rawValidators,i),Yi(o._rawAsyncValidators,i)}function oa(t,o){o.valueAccessor.registerOnChange(e=>{t._pendingValue=e,t._pendingChange=!0,t._pendingDirty=!0,t.updateOn==="change"&&uo(t,o)})}function ra(t,o){o.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,t.updateOn==="blur"&&t._pendingChange&&uo(t,o),t.updateOn!=="submit"&&t.markAsTouched()})}function uo(t,o){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),o.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function sa(t,o){let e=(n,i)=>{o.valueAccessor.writeValue(n),i&&o.viewToModelUpdate(n)};t.registerOnChange(e),o._registerOnDestroy(()=>{t._unregisterOnChange(e)})}function aa(t,o){if(!t.hasOwnProperty("model"))return!1;let e=t.model;return e.isFirstChange()?!0:!Object.is(o,e.currentValue)}function la(t){return Object.getPrototypeOf(t.constructor)===Ps}function da(t,o){if(!o)return null;Array.isArray(o);let e,n,i;return o.forEach(r=>{r.constructor===en?e=r:la(r)?n=r:i=r}),i||n||e||null}function Xi(t,o){let e=t.indexOf(o);e>-1&&t.splice(e,1)}function Ki(t){return typeof t=="object"&&t!==null&&Object.keys(t).length===2&&"value"in t&&"disabled"in t}var ca=class extends An{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(o=null,e,n){super(Ys(e),Ks(n,e)),this._applyFormState(o),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),nn(e)&&(e.nonNullable||e.initialValueIsDefault)&&(Ki(o)?this.defaultValue=o.value:this.defaultValue=o)}setValue(o,e={}){this.value=this._pendingValue=o,this._onChange.length&&e.emitModelToViewChange!==!1&&this._onChange.forEach(n=>n(this.value,e.emitViewToModelChange!==!1)),this.updateValueAndValidity(e)}patchValue(o,e={}){this.setValue(o,e)}reset(o=this.defaultValue,e={}){this._applyFormState(o),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),this._pendingChange=!1,e?.emitEvent!==!1&&this._events.next(new Fn(this))}_updateValue(){}_anyControls(o){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(o){this._onChange.push(o)}_unregisterOnChange(o){Xi(this._onChange,o)}registerOnDisabledChange(o){this._onDisabledChange.push(o)}_unregisterOnDisabledChange(o){Xi(this._onDisabledChange,o)}_forEachChild(o){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(o){Ki(o)?(this.value=this._pendingValue=o.value,o.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=o}};var ua={provide:Ke,useExisting:Oe(()=>Mt)},Ji=Promise.resolve(),Mt=(()=>{class t extends Ke{_changeDetectorRef;callSetDisabledState;control=new ca;static ngAcceptInputType_isDisabled;_registered=!1;viewModel;name="";isDisabled;model;options;update=new q;constructor(e,n,i,r,s,c){super(),this._changeDetectorRef=s,this.callSetDisabledState=c,this._parent=e,this._setValidators(n),this._setAsyncValidators(i),this.valueAccessor=da(this,r)}ngOnChanges(e){if(this._checkForErrors(),!this._registered||"name"in e){if(this._registered&&(this._checkName(),this.formDirective)){let n=e.name.previousValue;this.formDirective.removeControl({name:n,path:this._getPath(n)})}this._setUpControl()}"isDisabled"in e&&this._updateDisabled(e),aa(e,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){ta(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._checkName()}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(e){Ji.then(()=>{this.control.setValue(e,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(e){let n=e.isDisabled.currentValue,i=n!==0&&y(n);Ji.then(()=>{i&&!this.control.disabled?this.control.disable():!i&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(e){return this._parent?ea(e,this._parent):[e]}static \u0275fac=function(n){return new(n||t)(V(kn,9),V(to,10),V(js,10),V(Jt,10),V(Nt,8),V(co,8))};static \u0275dir=k({type:t,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"],options:[0,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],standalone:!1,features:[E([ua]),b,xe]})}return t})();var pa=(()=>{class t{_validator=Sn;_onChange;_enabled;ngOnChanges(e){if(this.inputName in e){let n=this.normalizeInput(e[this.inputName].currentValue);this._enabled=this.enabled(n),this._validator=this._enabled?this.createValidator(n):Sn,this._onChange&&this._onChange()}}validate(e){return this._validator(e)}registerOnValidatorChange(e){this._onChange=e}enabled(e){return e!=null}static \u0275fac=function(n){return new(n||t)};static \u0275dir=k({type:t,features:[xe]})}return t})();var ma={provide:to,useExisting:Oe(()=>ha),multi:!0},ha=(()=>{class t extends pa{pattern;inputName="pattern";normalizeInput=e=>e;createValidator=e=>$s(e);static \u0275fac=(()=>{let e;return function(i){return(e||(e=g(t)))(i||t)}})();static \u0275dir=k({type:t,selectors:[["","pattern","","formControlName",""],["","pattern","","formControl",""],["","pattern","","ngModel",""]],hostVars:1,hostBindings:function(n,i){n&2&&M("pattern",i._enabled?i.pattern:null)},inputs:{pattern:"pattern"},standalone:!1,features:[E([ma]),b]})}return t})();var fa=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=W({type:t});static \u0275inj=$({})}return t})();var on=(()=>{class t{static withConfig(e){return{ngModule:t,providers:[{provide:co,useValue:e.callSetDisabledState??Ln}]}}static \u0275fac=function(n){return new(n||t)};static \u0275mod=W({type:t});static \u0275inj=$({imports:[fa]})}return t})();var mt=class t{title=S.required();subtitle=S.required();static \u0275fac=function(e){return new(e||t)};static \u0275cmp=v({type:t,selectors:[["phad-auth-header"]],inputs:{title:[1,"title"],subtitle:[1,"subtitle"]},decls:5,vars:2,consts:[[1,"flex","flex-col","px-2","mb-5"],[1,"text-dark","text-2xl","font-bold","text-center"],[1,"text-black","text-sm","text-center"]],template:function(e,n){e&1&&(pe(0,"div",0)(1,"h3",1),O(2),me(),pe(3,"p",2),O(4),me()()),e&2&&(l(2),K(" ",n.title()," "),l(2),K(" ",n.subtitle()," "))},encapsulation:2})};var mo=t=>/^[6-9]\d{9}$/.test(t);function ga(t,o){t&1&&(m(0,"small",5),O(1),J(2,"translate"),p()),t&2&&(l(),K(" ",ee(2,1,"message.invalidMobile")," "))}var sn=class t{error=!1;mobile="";loginEvent=zt();translate=u(at);title=this.translate.instant("auth.loginTitle");subtitle=this.translate.instant("auth.loginSubTitle");onLoginSubmit(){if(!mo(this.mobile)){this.error=!0;return}this.error=!1,this.loginEvent.emit({type:"otp",data:this.mobile})}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=v({type:t,selectors:[["phad-login-screen"]],outputs:{loginEvent:"loginEvent"},decls:17,vars:13,consts:[[3,"title","subtitle"],[1,"flex","flex-col","items-center","justify-center","gap-2"],["role","group","aria-label","Mobile number",1,"login-mobile-group"],["type","tel","name","user-mobile","inputmode","tel","placeholder","912****789",3,"ngModelChange","ngModel"],[1,"phad-login-button","mt-2",3,"click"],[1,"text-red-600"],[1,"flex","items-center","justify-center","gap-2"],[1,"text-sm","text-on-surface"],[1,"cursor-pointer","text-sm","text-primary","hover:underline"]],template:function(e,n){e&1&&(A(0,"phad-auth-header",0),m(1,"div",1)(2,"div",2)(3,"span"),O(4,"+91"),p(),m(5,"input",3),Ft("ngModelChange",function(r){return Ot(n.mobile,r)||(n.mobile=r),r}),p()(),m(6,"button",4),I("click",function(){return n.onLoginSubmit()}),O(7),J(8,"translate"),p(),Ie(9,ga,3,3,"small",5),m(10,"div",6)(11,"span",7),O(12),J(13,"translate"),p(),m(14,"a",8),O(15),J(16,"translate"),p()()()),e&2&&(a("title",n.title)("subtitle",n.subtitle),l(5),kt("ngModel",n.mobile),l(2),K(" ",ee(8,7,"auth.loginButtonText")," "),l(2),Ee(n.error?9:-1),l(3),K(" ",ee(13,9,"auth.loginFooter")," "),l(3),K(" ",ee(16,11,"general.signup")," "))},dependencies:[on,en,tn,Mt,mt,lt],styles:[".login-screen-form[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;gap:.875rem;width:100%;max-width:22rem}.login-mobile-group[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.6rem;background:var(--color-white);border:1px solid var(--color-border);border-radius:.75rem;padding:.4rem .75rem .4rem .65rem;transition:all .16s ease;width:100%}.login-mobile-group[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:.875rem;font-weight:500;color:var(--color-grey-700);letter-spacing:.5px;flex:0 0 auto}.login-mobile-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{border:none;color:var(--color-grey-800);font-size:.95rem;font-weight:400;line-height:1.3;outline:none;width:100%}.login-mobile-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder{color:var(--color-grey-400);font-weight:400}.login-mobile-group[_ngcontent-%COMP%]:focus-within{border-color:var(--color-light-blue-700);box-shadow:0 0 0 3px #0d6efd47}button.phad-login-button[_ngcontent-%COMP%]{width:100%;max-width:22rem;font-weight:500;letter-spacing:.3px}.login-footer-row[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.4rem;font-size:.75rem;color:var(--on-surface, #111827)}.login-footer-row[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:var(--color-primary-600);text-decoration:none;font-weight:500}.login-footer-row[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{text-decoration:underline}"]})};var an=(()=>{class t extends R{modelValue=fe(void 0);$filled=H(()=>Bt(this.modelValue()));writeModelValue(e){this.modelValue.set(e)}static \u0275fac=(()=>{let e;return function(i){return(e||(e=g(t)))(i||t)}})();static \u0275dir=k({type:t,features:[b]})}return t})();var ho=(()=>{class t extends an{required=S(void 0,{transform:y});invalid=S(void 0,{transform:y});disabled=S(void 0,{transform:y});name=S();_disabled=fe(!1);$disabled=H(()=>this.disabled()||this._disabled());onModelChange=()=>{};onModelTouched=()=>{};writeDisabledState(e){this._disabled.set(e)}writeControlValue(e,n){}writeValue(e){this.writeControlValue(e,this.writeModelValue.bind(this))}registerOnChange(e){this.onModelChange=e}registerOnTouched(e){this.onModelTouched=e}setDisabledState(e){this.writeDisabledState(e),this.cd.markForCheck()}static \u0275fac=(()=>{let e;return function(i){return(e||(e=g(t)))(i||t)}})();static \u0275dir=k({type:t,inputs:{required:[1,"required"],invalid:[1,"invalid"],disabled:[1,"disabled"],name:[1,"name"]},features:[b]})}return t})();var fo=`
    .p-inputtext {
        font-family: inherit;
        font-feature-settings: inherit;
        font-size: 1rem;
        color: dt('inputtext.color');
        background: dt('inputtext.background');
        padding-block: dt('inputtext.padding.y');
        padding-inline: dt('inputtext.padding.x');
        border: 1px solid dt('inputtext.border.color');
        transition:
            background dt('inputtext.transition.duration'),
            color dt('inputtext.transition.duration'),
            border-color dt('inputtext.transition.duration'),
            outline-color dt('inputtext.transition.duration'),
            box-shadow dt('inputtext.transition.duration');
        appearance: none;
        border-radius: dt('inputtext.border.radius');
        outline-color: transparent;
        box-shadow: dt('inputtext.shadow');
    }

    .p-inputtext:enabled:hover {
        border-color: dt('inputtext.hover.border.color');
    }

    .p-inputtext:enabled:focus {
        border-color: dt('inputtext.focus.border.color');
        box-shadow: dt('inputtext.focus.ring.shadow');
        outline: dt('inputtext.focus.ring.width') dt('inputtext.focus.ring.style') dt('inputtext.focus.ring.color');
        outline-offset: dt('inputtext.focus.ring.offset');
    }

    .p-inputtext.p-invalid {
        border-color: dt('inputtext.invalid.border.color');
    }

    .p-inputtext.p-variant-filled {
        background: dt('inputtext.filled.background');
    }

    .p-inputtext.p-variant-filled:enabled:hover {
        background: dt('inputtext.filled.hover.background');
    }

    .p-inputtext.p-variant-filled:enabled:focus {
        background: dt('inputtext.filled.focus.background');
    }

    .p-inputtext:disabled {
        opacity: 1;
        background: dt('inputtext.disabled.background');
        color: dt('inputtext.disabled.color');
    }

    .p-inputtext::placeholder {
        color: dt('inputtext.placeholder.color');
    }

    .p-inputtext.p-invalid::placeholder {
        color: dt('inputtext.invalid.placeholder.color');
    }

    .p-inputtext-sm {
        font-size: dt('inputtext.sm.font.size');
        padding-block: dt('inputtext.sm.padding.y');
        padding-inline: dt('inputtext.sm.padding.x');
    }

    .p-inputtext-lg {
        font-size: dt('inputtext.lg.font.size');
        padding-block: dt('inputtext.lg.padding.y');
        padding-inline: dt('inputtext.lg.padding.x');
    }

    .p-inputtext-fluid {
        width: 100%;
    }
`;var ba=`
    ${fo}

    /* For PrimeNG */
   .p-inputtext.ng-invalid.ng-dirty {
        border-color: dt('inputtext.invalid.border.color');
    }

    .p-inputtext.ng-invalid.ng-dirty::placeholder {
        color: dt('inputtext.invalid.placeholder.color');
    }
`,_a={root:({instance:t})=>["p-inputtext p-component",{"p-filled":t.$filled(),"p-inputtext-sm":t.pSize==="small","p-inputtext-lg":t.pSize==="large","p-invalid":t.invalid(),"p-variant-filled":t.$variant()==="filled","p-inputtext-fluid":t.hasFluid}]},go=(()=>{class t extends N{name="inputtext";theme=ba;classes=_a;static \u0275fac=(()=>{let e;return function(i){return(e||(e=g(t)))(i||t)}})();static \u0275prov=T({token:t,factory:t.\u0275fac})}return t})();var bo=(()=>{class t extends an{ngControl=u(Ke,{optional:!0,self:!0});pcFluid=u(Wt,{optional:!0,host:!0,skipSelf:!0});pSize;variant=S();fluid=S(void 0,{transform:y});invalid=S(void 0,{transform:y});$variant=H(()=>this.variant()||this.config.inputStyle()||this.config.inputVariant());_componentStyle=u(go);ngAfterViewInit(){super.ngAfterViewInit(),this.writeModelValue(this.ngControl?.value??this.el.nativeElement.value),this.cd.detectChanges()}ngDoCheck(){this.writeModelValue(this.ngControl?.value??this.el.nativeElement.value)}onInput(){this.writeModelValue(this.ngControl?.value??this.el.nativeElement.value)}get hasFluid(){return this.fluid()??!!this.pcFluid}static \u0275fac=(()=>{let e;return function(i){return(e||(e=g(t)))(i||t)}})();static \u0275dir=k({type:t,selectors:[["","pInputText",""]],hostVars:2,hostBindings:function(n,i){n&1&&I("input",function(s){return i.onInput(s)}),n&2&&_(i.cx("root"))},inputs:{pSize:"pSize",variant:[1,"variant"],fluid:[1,"fluid"],invalid:[1,"invalid"]},features:[E([go]),b]})}return t})();var _o=`
    .p-inputotp {
        display: flex;
        align-items: center;
        gap: dt('inputotp.gap');
    }

    .p-inputotp-input {
        text-align: center;
        width: dt('inputotp.input.width');
    }

    .p-inputotp-input.p-inputtext-sm {
        text-align: center;
        width: dt('inputotp.input.sm.width');
    }

    .p-inputotp-input.p-inputtext-lg {
        text-align: center;
        width: dt('inputotp.input.lg.width');
    }
`;var ya=["input"],va=(t,o,e)=>({$implicit:t,events:o,index:e});function Ca(t,o){if(t&1){let e=G();Z(0),m(1,"input",2),I("input",function(i){w(e);let r=d().$implicit,s=d();return D(s.onInput(i,r-1))})("focus",function(i){w(e);let r=d(2);return D(r.onInputFocus(i))})("blur",function(i){w(e);let r=d(2);return D(r.onInputBlur(i))})("paste",function(i){w(e);let r=d(2);return D(r.onPaste(i))})("keydown",function(i){w(e);let r=d(2);return D(r.onKeyDown(i))}),p(),Q()}if(t&2){let e=d().$implicit,n=d();l(),_(n.cn(n.cx("pcInputText"),n.styleClass)),a("value",n.getModelValue(e))("pSize",n.size())("variant",n.$variant())("invalid",n.invalid())("pAutoFocus",n.getAutofocus(e)),M("maxlength",e===1?n.length:1)("type",n.inputType)("name",n.name())("tabindex",n.tabindex)("required",n.required()?"":void 0)("readonly",n.readonly?"":void 0)("disabled",n.$disabled()?"":void 0)}}function xa(t,o){t&1&&ie(0)}function wa(t,o){if(t&1&&(Z(0),f(1,xa,1,0,"ng-container",3),Q()),t&2){let e=d().$implicit,n=d();l(),a("ngTemplateOutlet",n.inputTemplate||n._inputTemplate)("ngTemplateOutletContext",Lt(2,va,n.getToken(e-1),n.getTemplateEvents(e-1),e))}}function Da(t,o){if(t&1&&(Z(0),f(1,Ca,2,14,"ng-container",1)(2,wa,2,6,"ng-container",1),Q()),t&2){let e=d();l(),a("ngIf",!e.inputTemplate&&!e._inputTemplate),l(),a("ngIf",e.inputTemplate||e._inputTemplate)}}var Ia={root:"p-inputotp p-component",pcInputText:"p-inputotp-input"},yo=(()=>{class t extends N{name="inputotp";theme=_o;classes=Ia;static \u0275fac=(()=>{let e;return function(i){return(e||(e=g(t)))(i||t)}})();static \u0275prov=T({token:t,factory:t.\u0275fac})}return t})();var Ea={provide:Jt,useExisting:Oe(()=>ln),multi:!0},ln=(()=>{class t extends ho{readonly;tabindex=null;length=4;styleClass;mask=!1;integerOnly=!1;autofocus;variant=S();size=S();onChange=new q;onFocus=new q;onBlur=new q;inputTemplate;templates;_inputTemplate;tokens=[];value;$variant=H(()=>this.variant()||this.config.inputStyle()||this.config.inputVariant());get inputMode(){return this.integerOnly?"numeric":"text"}get inputType(){return this.mask?"password":"text"}_componentStyle=u(yo);ngAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"input":this._inputTemplate=e.template;break;default:this._inputTemplate=e.template;break}})}getToken(e){return this.tokens[e]}getTemplateEvents(e){return{input:n=>this.onInput(n,e),keydown:n=>this.onKeyDown(n),focus:n=>this.onFocus.emit(n),blur:n=>this.onBlur.emit(n),paste:n=>this.onPaste(n)}}onInput(e,n){let i=e.target.value;if(n===0&&i.length>1){this.handleOnPaste(i,e),e.stopPropagation();return}this.tokens[n]=i,this.updateModel(e),e.inputType==="deleteContentBackward"?this.moveToPrev(e):(e.inputType==="insertText"||e.inputType==="deleteContentForward")&&this.moveToNext(e)}updateModel(e){let n=this.tokens.join("");this.writeModelValue(n),this.onModelChange(n),this.onChange.emit({originalEvent:e,value:n})}updateTokens(){this.value!==null&&this.value!==void 0?Array.isArray(this.value)?this.tokens=[...this.value]:this.tokens=this.value.toString().split(""):this.tokens=[]}getModelValue(e){return this.tokens[e-1]||""}getAutofocus(e){return e===1&&this.autofocus||!1}moveToPrev(e){let n=this.findPrevInput(e.target);n&&(n.focus(),n.select())}moveToNext(e){let n=this.findNextInput(e.target);n&&(n.focus(),n.select())}findNextInput(e){let n=e.nextElementSibling;if(n)return n.nodeName==="INPUT"?n:this.findNextInput(n)}findPrevInput(e){let n=e.previousElementSibling;if(n)return n.nodeName==="INPUT"?n:this.findPrevInput(n)}onInputFocus(e){e.target.select(),this.onFocus.emit(e)}onInputBlur(e){this.onBlur.emit(e)}onKeyDown(e){if(!(e.altKey||e.ctrlKey||e.metaKey))switch(e.code){case"ArrowLeft":this.moveToPrev(e),e.preventDefault();break;case"ArrowUp":case"ArrowDown":e.preventDefault();break;case"Backspace":e.target.value.length===0&&(this.moveToPrev(e),e.preventDefault());break;case"ArrowRight":this.moveToNext(e),e.preventDefault();break;default:(this.integerOnly&&!(Number(e.key)>=0&&Number(e.key)<=9)||this.tokens.join("").length>=this.length&&e.code!=="Delete")&&e.preventDefault();break}}onPaste(e){if(!this.$disabled()&&!this.readonly){let n=e.clipboardData.getData("text");n.length&&this.handleOnPaste(n,e),e.preventDefault()}}handleOnPaste(e,n){let i=e.substring(0,this.length+1);(!this.integerOnly||!isNaN(i))&&(this.tokens=i.split(""),this.updateModel(n))}getRange(e){return Array.from({length:e},(n,i)=>i+1)}trackByFn(e){return e}writeControlValue(e,n){e?Array.isArray(e)&&e.length>0?this.value=e.slice(0,this.length):this.value=e.toString().split("").slice(0,this.length):this.value=e,n(this.value),this.updateTokens(),this.cd.markForCheck()}static \u0275fac=(()=>{let e;return function(i){return(e||(e=g(t)))(i||t)}})();static \u0275cmp=v({type:t,selectors:[["p-inputOtp"],["p-inputotp"],["p-input-otp"]],contentQueries:function(n,i,r){if(n&1&&(X(r,ya,4),X(r,rt,4)),n&2){let s;P(s=z())&&(i.inputTemplate=s.first),P(s=z())&&(i.templates=s)}},hostVars:2,hostBindings:function(n,i){n&2&&_(i.cx("root"))},inputs:{readonly:[2,"readonly","readonly",y],tabindex:"tabindex",length:"length",styleClass:"styleClass",mask:"mask",integerOnly:"integerOnly",autofocus:[2,"autofocus","autofocus",y],variant:[1,"variant"],size:[1,"size"]},outputs:{onChange:"onChange",onFocus:"onFocus",onBlur:"onBlur"},features:[E([Ea,yo]),b],decls:1,vars:2,consts:[[4,"ngFor","ngForOf","ngForTrackBy"],[4,"ngIf"],["type","text","pInputText","",3,"input","focus","blur","paste","keydown","value","pSize","variant","invalid","pAutoFocus"],[4,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(n,i){n&1&&f(0,Da,3,2,"ng-container",0),n&2&&a("ngForOf",i.getRange(i.length))("ngForTrackBy",i.trackByFn)},dependencies:[ae,Rt,Te,Me,bo,$t,Y],encapsulation:2,changeDetection:0})}return t})(),vo=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=W({type:t});static \u0275inj=$({imports:[ln,Y,Y]})}return t})();var dn=class t{#t=new gi;showSuccess(o,e="Success",n="tr",i=3e3){this.#e("success",o,e,n,i)}showInfo(o,e="Info",n="tr",i=3e3){this.#e("info",o,e,n,i)}showWarn(o,e="Warning",n="tr",i=3e3){this.#e("warn",o,e,n,i)}showError(o,e="Error",n="tr",i=3e3){this.#e("error",o,e,n,i)}#e(o,e,n,i,r=3e3){this.#t.add({severity:o,summary:n,detail:e,key:i,life:r})}static \u0275fac=function(e){return new(e||t)};static \u0275prov=T({token:t,factory:t.\u0275fac,providedIn:"root"})};function Ma(t,o){t&1&&(m(0,"small",4),O(1),J(2,"translate"),p()),t&2&&(l(),K(" ",ee(2,1,"message.invalidOTP")," "))}var cn=class t{error=!1;mobile=S.required();otpEvent=zt();maskedMobile=H(()=>this.mobile().replace(/.(?=.{4})/g,"*"));translate=u(at);title=this.translate.instant("auth.otpTitle");subtitle;otp;toast=u(dn);constructor(){Pt(()=>{let o=`+91 ${this.maskedMobile()}`;this.subtitle=this.translate.instant("auth.otpSubTitle",{value:o})})}onOtpSubmit(){this.error=!0}onEditNumber(){this.error=!1,this.otpEvent.emit({type:"login",data:this.mobile()})}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=v({type:t,selectors:[["phad-otp-screen"]],inputs:{mobile:[1,"mobile"]},outputs:{otpEvent:"otpEvent"},features:[E([])],decls:9,vars:12,consts:[[3,"title","subtitle"],[1,"flex","flex-col","items-center","justify-center","gap-2"],["size","small",3,"ngModelChange","ngModel","integerOnly","length"],[1,"phad-login-button","mt-2",3,"click"],[1,"text-red-600"],[1,"cursor-pointer","text-sm","text-highlight","hover:underline",3,"click","innerHTML"]],template:function(e,n){e&1&&(A(0,"phad-auth-header",0),m(1,"div",1)(2,"p-inputotp",2),Ft("ngModelChange",function(r){return Ot(n.otp,r)||(n.otp=r),r}),p(),m(3,"button",3),I("click",function(){return n.onOtpSubmit()}),O(4),J(5,"translate"),p(),Ie(6,Ma,3,3,"small",4),m(7,"button",5),J(8,"translate"),I("click",function(){return n.onEditNumber()}),p()()),e&2&&(a("title",n.title)("subtitle",n.subtitle),l(2),kt("ngModel",n.otp),a("integerOnly",!0)("length",6),l(2),K(" ",ee(5,8,"auth.otpButtonText")," "),l(2),Ee(n.error?6:-1),l(),a("innerHTML",ee(8,10,"auth.otpFooter"),ft))},dependencies:[on,tn,Mt,vo,ln,mt,lt],encapsulation:2})};function Sa(t,o){if(t&1){let e=G();m(0,"phad-login-screen",1),I("loginEvent",function(i){w(e);let r=d();return D(r.onLoginEmit(i))}),p()}}function Va(t,o){if(t&1){let e=G();m(0,"phad-otp-screen",2),I("otpEvent",function(i){w(e);let r=d();return D(r.onOtpEmit(i))}),p()}if(t&2){let e=d();a("mobile",e.mobile)}}var un=class t{dialogType="login";mobile="";onLoginEmit(o){this.dialogType=o.type,this.mobile=o.data}onOtpEmit(o){this.dialogType=o.type}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=v({type:t,selectors:[["phad-auth"]],decls:2,vars:1,consts:[[3,"mobile"],[3,"loginEvent"],[3,"otpEvent","mobile"]],template:function(e,n){e&1&&Ie(0,Sa,1,0,"phad-login-screen")(1,Va,1,1,"phad-otp-screen",0),e&2&&Ee(n.dialogType==="login"?0:1)},dependencies:[sn,cn],encapsulation:2,changeDetection:0})};var pn=class t{constructor(o,e){this.document=e;this.renderer=o.createRenderer(null,null)}translate=u(at);renderer;init=()=>{this.translate.addLangs(Ht.language.available),this.translate.setFallbackLang(Ht.language.default);let o=this.#i();this.setLanguage(o)};setLanguage=o=>{this.#t(o),this.#e(o),this.#n(o)};getCurrentLanguage=()=>this.translate.getCurrentLang();#t=o=>{this.translate.use(o)};#e=o=>{localStorage.setItem("site-lang",o)};#n=o=>{this.renderer.setAttribute(this.document.documentElement,"lang",o)};#i=()=>{let o=localStorage.getItem("site-lang");return o===null?Ht.language.default:o};static \u0275fac=function(e){return new(e||t)(je(Hn),je(Ce))};static \u0275prov=T({token:t,factory:t.\u0275fac,providedIn:"root"})};function ka(t,o){t&1&&(m(0,"div"),O(1),J(2,"translate"),p()),t&2&&(l(),ce(ee(2,1,"home.welcome")))}function Oa(t,o){t&1&&(m(0,"h1",10),O(1),J(2,"translate"),p(),m(3,"h2",11),O(4),J(5,"translate"),p()),t&2&&(l(),K(" ",ee(2,2,"home.title")," "),l(3),K(" ",ee(5,4,"home.subtitle")," "))}var Co=class t{content;router=u(Yn);dialogService=u(En);dialogRef;auth=u(vi).auth;translateService=u(pn);selectedLanguage="ENG";menuItems;initLoad=!0;queryParams=u(Qn).snapshot.queryParams;constructor(){mn(()=>{this.#t()})}ngOnInit(){this.#n(),this.#e()}ngOnDestroy(){this.dialogRef&&this.dialogRef.close()}#t=()=>{this.queryParams.action==="login"&&this.#o()};#e=()=>{this.menuItems=[{label:"English",command:()=>this.changeLanguage("en")},{label:"Malayalam",command:()=>this.changeLanguage("ml")}]};#n=()=>{let o=this.translateService.getCurrentLanguage();this.selectedLanguage=o==="en"?"ENG":"MAL"};changeLanguage(o){this.translateService.setLanguage(o),this.selectedLanguage=o==="en"?"ENG":"MAL"}onProfileClick=()=>{this.auth()?this.#i():this.#o()};#i(){this.router.navigate(["/user/dashboard"])}#o(){this.dialogRef=this.dialogService.open(un,{closable:!0,styleClass:"ngp-auth-modal",modal:!0,breakpoints:{"960px":"75vw","640px":"90vw"}}),this.initLoad&&(this.initLoad=!1,this.dialogRef?.onClose.subscribe(o=>{console.log("The dialog was closed",o)}))}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=v({type:t,selectors:[["phad-home-header"]],inputs:{content:"content"},features:[E([En])],decls:15,vars:4,consts:[["menu",""],[1,"home-header"],[1,"flex","justify-between","items-center","my-2"],[1,"home-welcome"],[1,"flex","items-center","gap-2"],["title","User Auth Button",1,"user-auth-button",3,"click"],["alt","User","src","/images/user.svg"],["aria-label","Change Language",1,"lang-button",3,"click"],[1,"fa-solid","fa-chevron-down"],["popup","true","appendTo","body","styleClass","ngp-end-aligned-menu",3,"model"],[1,"home-title","my-4"],[1,"home-subtitle"]],template:function(e,n){if(e&1){let i=G();m(0,"section",1)(1,"div",2)(2,"label",3),Ie(3,ka,3,3,"div"),p(),m(4,"div",4)(5,"button",5),I("click",function(){return w(i),D(n.onProfileClick())}),A(6,"img",6),p(),m(7,"button",7),I("click",function(s){w(i);let c=Ae(13);return D(c.toggle(s))}),m(8,"label"),O(9),p(),m(10,"span"),A(11,"i",8),p()(),A(12,"p-menu",9,0),p()(),Ie(14,Oa,6,6),p()}e&2&&(l(3),Ee(n.content?3:-1),l(6),ce(n.selectedLanguage),l(3),a("model",n.menuItems),l(2),Ee(n.content?14:-1))},dependencies:[Mn,lt],styles:[".home-header[_ngcontent-%COMP%]   .home-welcome[_ngcontent-%COMP%]{font-size:.875rem;font-weight:500;line-height:1rem;color:#090a0a99;margin-bottom:1.5rem}.home-header[_ngcontent-%COMP%]   .user-auth-button[_ngcontent-%COMP%]{cursor:pointer}.home-header[_ngcontent-%COMP%]   .user-auth-button[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:1.6rem;width:1.6rem}.home-header[_ngcontent-%COMP%]   .user-auth-button[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover{transform:scale(1.05)}.home-header[_ngcontent-%COMP%]   .lang-button[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.25rem;padding:.375rem;border-radius:.375rem;background-color:var(--color-white);color:var(--text-primary);border:none;cursor:pointer}.home-header[_ngcontent-%COMP%]   .lang-button[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-size:.625rem;font-weight:400;line-height:1rem;padding-inline:.25rem}.home-header[_ngcontent-%COMP%]   .lang-button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{background-color:var(--pink-surface);color:var(--pink-on-surface);border-radius:1rem;font-size:1rem;height:1rem;display:flex;align-items:center;justify-content:center}.home-header[_ngcontent-%COMP%]   .lang-button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:.75rem}.home-header[_ngcontent-%COMP%]   .home-title[_ngcontent-%COMP%]{color:var(--color-dark-500);font-size:2.125rem;font-weight:700;line-height:100%}.home-header[_ngcontent-%COMP%]   .home-subtitle[_ngcontent-%COMP%]{font-size:1.125rem;font-weight:500;line-height:1rem;color:#090a0a99;margin-bottom:1.5rem}"],changeDetection:0})};export{te as a,R as b,ll as c,dl as d,$t as e,Wt as f,Be as g,Mi as h,Dn as i,qd as j,de as k,Jt as l,en as m,Ke as n,tn as o,Mt as p,ha as q,on as r,ho as s,bo as t,pn as u,Co as v};
