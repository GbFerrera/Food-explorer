function Dg(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var Ii=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Mf(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function Mg(e){if(e.__esModule)return e;var t=e.default;if(typeof t=="function"){var n=function r(){return this instanceof r?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach(function(r){var i=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(n,r,i.get?i:{enumerable:!0,get:function(){return e[r]}})}),n}var Ff={exports:{}},fl={},Uf={exports:{}},H={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ei=Symbol.for("react.element"),Fg=Symbol.for("react.portal"),Ug=Symbol.for("react.fragment"),Bg=Symbol.for("react.strict_mode"),Hg=Symbol.for("react.profiler"),Wg=Symbol.for("react.provider"),Vg=Symbol.for("react.context"),qg=Symbol.for("react.forward_ref"),Qg=Symbol.for("react.suspense"),Kg=Symbol.for("react.memo"),Gg=Symbol.for("react.lazy"),Lc=Symbol.iterator;function Yg(e){return e===null||typeof e!="object"?null:(e=Lc&&e[Lc]||e["@@iterator"],typeof e=="function"?e:null)}var Bf={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Hf=Object.assign,Wf={};function Or(e,t,n){this.props=e,this.context=t,this.refs=Wf,this.updater=n||Bf}Or.prototype.isReactComponent={};Or.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Or.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Vf(){}Vf.prototype=Or.prototype;function hu(e,t,n){this.props=e,this.context=t,this.refs=Wf,this.updater=n||Bf}var mu=hu.prototype=new Vf;mu.constructor=hu;Hf(mu,Or.prototype);mu.isPureReactComponent=!0;var Nc=Array.isArray,qf=Object.prototype.hasOwnProperty,gu={current:null},Qf={key:!0,ref:!0,__self:!0,__source:!0};function Kf(e,t,n){var r,i={},o=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(o=""+t.key),t)qf.call(t,r)&&!Qf.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var s=Array(a),u=0;u<a;u++)s[u]=arguments[u+2];i.children=s}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Ei,type:e,key:o,ref:l,props:i,_owner:gu.current}}function Xg(e,t){return{$$typeof:Ei,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function vu(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ei}function Jg(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var zc=/\/+/g;function Xl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Jg(""+e.key):t.toString(36)}function ro(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(o){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case Ei:case Fg:l=!0}}if(l)return l=e,i=i(l),e=r===""?"."+Xl(l,0):r,Nc(i)?(n="",e!=null&&(n=e.replace(zc,"$&/")+"/"),ro(i,t,n,"",function(u){return u})):i!=null&&(vu(i)&&(i=Xg(i,n+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(zc,"$&/")+"/")+e)),t.push(i)),1;if(l=0,r=r===""?".":r+":",Nc(e))for(var a=0;a<e.length;a++){o=e[a];var s=r+Xl(o,a);l+=ro(o,t,n,s,i)}else if(s=Yg(e),typeof s=="function")for(e=s.call(e),a=0;!(o=e.next()).done;)o=o.value,s=r+Xl(o,a++),l+=ro(o,t,n,s,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function Ai(e,t,n){if(e==null)return e;var r=[],i=0;return ro(e,r,"","",function(o){return t.call(n,o,i++)}),r}function Zg(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ze={current:null},io={transition:null},ev={ReactCurrentDispatcher:ze,ReactCurrentBatchConfig:io,ReactCurrentOwner:gu};H.Children={map:Ai,forEach:function(e,t,n){Ai(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Ai(e,function(){t++}),t},toArray:function(e){return Ai(e,function(t){return t})||[]},only:function(e){if(!vu(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};H.Component=Or;H.Fragment=Ug;H.Profiler=Hg;H.PureComponent=hu;H.StrictMode=Bg;H.Suspense=Qg;H.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ev;H.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Hf({},e.props),i=e.key,o=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,l=gu.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(s in t)qf.call(t,s)&&!Qf.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&a!==void 0?a[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){a=Array(s);for(var u=0;u<s;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Ei,type:e.type,key:i,ref:o,props:r,_owner:l}};H.createContext=function(e){return e={$$typeof:Vg,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Wg,_context:e},e.Consumer=e};H.createElement=Kf;H.createFactory=function(e){var t=Kf.bind(null,e);return t.type=e,t};H.createRef=function(){return{current:null}};H.forwardRef=function(e){return{$$typeof:qg,render:e}};H.isValidElement=vu;H.lazy=function(e){return{$$typeof:Gg,_payload:{_status:-1,_result:e},_init:Zg}};H.memo=function(e,t){return{$$typeof:Kg,type:e,compare:t===void 0?null:t}};H.startTransition=function(e){var t=io.transition;io.transition={};try{e()}finally{io.transition=t}};H.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};H.useCallback=function(e,t){return ze.current.useCallback(e,t)};H.useContext=function(e){return ze.current.useContext(e)};H.useDebugValue=function(){};H.useDeferredValue=function(e){return ze.current.useDeferredValue(e)};H.useEffect=function(e,t){return ze.current.useEffect(e,t)};H.useId=function(){return ze.current.useId()};H.useImperativeHandle=function(e,t,n){return ze.current.useImperativeHandle(e,t,n)};H.useInsertionEffect=function(e,t){return ze.current.useInsertionEffect(e,t)};H.useLayoutEffect=function(e,t){return ze.current.useLayoutEffect(e,t)};H.useMemo=function(e,t){return ze.current.useMemo(e,t)};H.useReducer=function(e,t,n){return ze.current.useReducer(e,t,n)};H.useRef=function(e){return ze.current.useRef(e)};H.useState=function(e){return ze.current.useState(e)};H.useSyncExternalStore=function(e,t,n){return ze.current.useSyncExternalStore(e,t,n)};H.useTransition=function(){return ze.current.useTransition()};H.version="18.2.0";Uf.exports=H;var C=Uf.exports;const Ze=Mf(C),tv=Dg({__proto__:null,default:Ze},[C]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nv=C,rv=Symbol.for("react.element"),iv=Symbol.for("react.fragment"),ov=Object.prototype.hasOwnProperty,lv=nv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,av={key:!0,ref:!0,__self:!0,__source:!0};function Gf(e,t,n){var r,i={},o=null,l=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)ov.call(t,r)&&!av.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:rv,type:e,key:o,ref:l,props:i,_owner:lv.current}}fl.Fragment=iv;fl.jsx=Gf;fl.jsxs=Gf;Ff.exports=fl;var d=Ff.exports,Ba={},Yf={exports:{}},Qe={},Xf={exports:{}},Jf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(R,A){var I=R.length;R.push(A);e:for(;0<I;){var V=I-1>>>1,K=R[V];if(0<i(K,A))R[V]=A,R[I]=K,I=V;else break e}}function n(R){return R.length===0?null:R[0]}function r(R){if(R.length===0)return null;var A=R[0],I=R.pop();if(I!==A){R[0]=I;e:for(var V=0,K=R.length,mt=K>>>1;V<mt;){var ge=2*(V+1)-1,_t=R[ge],Ye=ge+1,gt=R[Ye];if(0>i(_t,I))Ye<K&&0>i(gt,_t)?(R[V]=gt,R[Ye]=I,V=Ye):(R[V]=_t,R[ge]=I,V=ge);else if(Ye<K&&0>i(gt,I))R[V]=gt,R[Ye]=I,V=Ye;else break e}}return A}function i(R,A){var I=R.sortIndex-A.sortIndex;return I!==0?I:R.id-A.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var l=Date,a=l.now();e.unstable_now=function(){return l.now()-a}}var s=[],u=[],f=1,c=null,v=3,w=!1,m=!1,y=!1,S=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(R){for(var A=n(u);A!==null;){if(A.callback===null)r(u);else if(A.startTime<=R)r(u),A.sortIndex=A.expirationTime,t(s,A);else break;A=n(u)}}function x(R){if(y=!1,g(R),!m)if(n(s)!==null)m=!0,Pe(O);else{var A=n(u);A!==null&&Ie(x,A.startTime-R)}}function O(R,A){m=!1,y&&(y=!1,h(_),_=-1),w=!0;var I=v;try{for(g(A),c=n(s);c!==null&&(!(c.expirationTime>A)||R&&!M());){var V=c.callback;if(typeof V=="function"){c.callback=null,v=c.priorityLevel;var K=V(c.expirationTime<=A);A=e.unstable_now(),typeof K=="function"?c.callback=K:c===n(s)&&r(s),g(A)}else r(s);c=n(s)}if(c!==null)var mt=!0;else{var ge=n(u);ge!==null&&Ie(x,ge.startTime-A),mt=!1}return mt}finally{c=null,v=I,w=!1}}var k=!1,E=null,_=-1,P=5,T=-1;function M(){return!(e.unstable_now()-T<P)}function $(){if(E!==null){var R=e.unstable_now();T=R;var A=!0;try{A=E(!0,R)}finally{A?z():(k=!1,E=null)}}else k=!1}var z;if(typeof p=="function")z=function(){p($)};else if(typeof MessageChannel<"u"){var Ge=new MessageChannel,ue=Ge.port2;Ge.port1.onmessage=$,z=function(){ue.postMessage(null)}}else z=function(){S($,0)};function Pe(R){E=R,k||(k=!0,z())}function Ie(R,A){_=S(function(){R(e.unstable_now())},A)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(R){R.callback=null},e.unstable_continueExecution=function(){m||w||(m=!0,Pe(O))},e.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<R?Math.floor(1e3/R):5},e.unstable_getCurrentPriorityLevel=function(){return v},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(R){switch(v){case 1:case 2:case 3:var A=3;break;default:A=v}var I=v;v=A;try{return R()}finally{v=I}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(R,A){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var I=v;v=R;try{return A()}finally{v=I}},e.unstable_scheduleCallback=function(R,A,I){var V=e.unstable_now();switch(typeof I=="object"&&I!==null?(I=I.delay,I=typeof I=="number"&&0<I?V+I:V):I=V,R){case 1:var K=-1;break;case 2:K=250;break;case 5:K=1073741823;break;case 4:K=1e4;break;default:K=5e3}return K=I+K,R={id:f++,callback:A,priorityLevel:R,startTime:I,expirationTime:K,sortIndex:-1},I>V?(R.sortIndex=I,t(u,R),n(s)===null&&R===n(u)&&(y?(h(_),_=-1):y=!0,Ie(x,I-V))):(R.sortIndex=K,t(s,R),m||w||(m=!0,Pe(O))),R},e.unstable_shouldYield=M,e.unstable_wrapCallback=function(R){var A=v;return function(){var I=v;v=A;try{return R.apply(this,arguments)}finally{v=I}}}})(Jf);Xf.exports=Jf;var sv=Xf.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zf=C,qe=sv;function b(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ep=new Set,ti={};function $n(e,t){ur(e,t),ur(e+"Capture",t)}function ur(e,t){for(ti[e]=t,e=0;e<t.length;e++)ep.add(t[e])}var Nt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ha=Object.prototype.hasOwnProperty,uv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,$c={},Ic={};function cv(e){return Ha.call(Ic,e)?!0:Ha.call($c,e)?!1:uv.test(e)?Ic[e]=!0:($c[e]=!0,!1)}function dv(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function fv(e,t,n,r){if(t===null||typeof t>"u"||dv(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function $e(e,t,n,r,i,o,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=l}var Ce={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ce[e]=new $e(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Ce[t]=new $e(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ce[e]=new $e(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ce[e]=new $e(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ce[e]=new $e(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ce[e]=new $e(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ce[e]=new $e(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ce[e]=new $e(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ce[e]=new $e(e,5,!1,e.toLowerCase(),null,!1,!1)});var yu=/[\-:]([a-z])/g;function xu(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(yu,xu);Ce[t]=new $e(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(yu,xu);Ce[t]=new $e(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(yu,xu);Ce[t]=new $e(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ce[e]=new $e(e,1,!1,e.toLowerCase(),null,!1,!1)});Ce.xlinkHref=new $e("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ce[e]=new $e(e,1,!1,e.toLowerCase(),null,!0,!0)});function wu(e,t,n,r){var i=Ce.hasOwnProperty(t)?Ce[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(fv(t,n,i,r)&&(n=null),r||i===null?cv(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Dt=Zf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Di=Symbol.for("react.element"),Bn=Symbol.for("react.portal"),Hn=Symbol.for("react.fragment"),Su=Symbol.for("react.strict_mode"),Wa=Symbol.for("react.profiler"),tp=Symbol.for("react.provider"),np=Symbol.for("react.context"),ku=Symbol.for("react.forward_ref"),Va=Symbol.for("react.suspense"),qa=Symbol.for("react.suspense_list"),Ou=Symbol.for("react.memo"),Ht=Symbol.for("react.lazy"),rp=Symbol.for("react.offscreen"),Ac=Symbol.iterator;function Rr(e){return e===null||typeof e!="object"?null:(e=Ac&&e[Ac]||e["@@iterator"],typeof e=="function"?e:null)}var oe=Object.assign,Jl;function Mr(e){if(Jl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Jl=t&&t[1]||""}return`
`+Jl+e}var Zl=!1;function ea(e,t){if(!e||Zl)return"";Zl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),l=i.length-1,a=o.length-1;1<=l&&0<=a&&i[l]!==o[a];)a--;for(;1<=l&&0<=a;l--,a--)if(i[l]!==o[a]){if(l!==1||a!==1)do if(l--,a--,0>a||i[l]!==o[a]){var s=`
`+i[l].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=l&&0<=a);break}}}finally{Zl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Mr(e):""}function pv(e){switch(e.tag){case 5:return Mr(e.type);case 16:return Mr("Lazy");case 13:return Mr("Suspense");case 19:return Mr("SuspenseList");case 0:case 2:case 15:return e=ea(e.type,!1),e;case 11:return e=ea(e.type.render,!1),e;case 1:return e=ea(e.type,!0),e;default:return""}}function Qa(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Hn:return"Fragment";case Bn:return"Portal";case Wa:return"Profiler";case Su:return"StrictMode";case Va:return"Suspense";case qa:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case np:return(e.displayName||"Context")+".Consumer";case tp:return(e._context.displayName||"Context")+".Provider";case ku:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ou:return t=e.displayName||null,t!==null?t:Qa(e.type)||"Memo";case Ht:t=e._payload,e=e._init;try{return Qa(e(t))}catch{}}return null}function hv(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Qa(t);case 8:return t===Su?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function un(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ip(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function mv(e){var t=ip(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(l){r=""+l,o.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Mi(e){e._valueTracker||(e._valueTracker=mv(e))}function op(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ip(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Co(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ka(e,t){var n=t.checked;return oe({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Dc(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=un(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function lp(e,t){t=t.checked,t!=null&&wu(e,"checked",t,!1)}function Ga(e,t){lp(e,t);var n=un(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ya(e,t.type,n):t.hasOwnProperty("defaultValue")&&Ya(e,t.type,un(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Mc(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Ya(e,t,n){(t!=="number"||Co(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Fr=Array.isArray;function tr(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+un(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Xa(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(b(91));return oe({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Fc(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(b(92));if(Fr(n)){if(1<n.length)throw Error(b(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:un(n)}}function ap(e,t){var n=un(t.value),r=un(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Uc(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function sp(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ja(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?sp(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Fi,up=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Fi=Fi||document.createElement("div"),Fi.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Fi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function ni(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Wr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},gv=["Webkit","ms","Moz","O"];Object.keys(Wr).forEach(function(e){gv.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Wr[t]=Wr[e]})});function cp(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Wr.hasOwnProperty(e)&&Wr[e]?(""+t).trim():t+"px"}function dp(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=cp(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var vv=oe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Za(e,t){if(t){if(vv[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(b(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(b(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(b(61))}if(t.style!=null&&typeof t.style!="object")throw Error(b(62))}}function es(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ts=null;function Cu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ns=null,nr=null,rr=null;function Bc(e){if(e=Pi(e)){if(typeof ns!="function")throw Error(b(280));var t=e.stateNode;t&&(t=vl(t),ns(e.stateNode,e.type,t))}}function fp(e){nr?rr?rr.push(e):rr=[e]:nr=e}function pp(){if(nr){var e=nr,t=rr;if(rr=nr=null,Bc(e),t)for(e=0;e<t.length;e++)Bc(t[e])}}function hp(e,t){return e(t)}function mp(){}var ta=!1;function gp(e,t,n){if(ta)return e(t,n);ta=!0;try{return hp(e,t,n)}finally{ta=!1,(nr!==null||rr!==null)&&(mp(),pp())}}function ri(e,t){var n=e.stateNode;if(n===null)return null;var r=vl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(b(231,t,typeof n));return n}var rs=!1;if(Nt)try{var Tr={};Object.defineProperty(Tr,"passive",{get:function(){rs=!0}}),window.addEventListener("test",Tr,Tr),window.removeEventListener("test",Tr,Tr)}catch{rs=!1}function yv(e,t,n,r,i,o,l,a,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(f){this.onError(f)}}var Vr=!1,_o=null,Eo=!1,is=null,xv={onError:function(e){Vr=!0,_o=e}};function wv(e,t,n,r,i,o,l,a,s){Vr=!1,_o=null,yv.apply(xv,arguments)}function Sv(e,t,n,r,i,o,l,a,s){if(wv.apply(this,arguments),Vr){if(Vr){var u=_o;Vr=!1,_o=null}else throw Error(b(198));Eo||(Eo=!0,is=u)}}function In(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function vp(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Hc(e){if(In(e)!==e)throw Error(b(188))}function kv(e){var t=e.alternate;if(!t){if(t=In(e),t===null)throw Error(b(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Hc(i),e;if(o===r)return Hc(i),t;o=o.sibling}throw Error(b(188))}if(n.return!==r.return)n=i,r=o;else{for(var l=!1,a=i.child;a;){if(a===n){l=!0,n=i,r=o;break}if(a===r){l=!0,r=i,n=o;break}a=a.sibling}if(!l){for(a=o.child;a;){if(a===n){l=!0,n=o,r=i;break}if(a===r){l=!0,r=o,n=i;break}a=a.sibling}if(!l)throw Error(b(189))}}if(n.alternate!==r)throw Error(b(190))}if(n.tag!==3)throw Error(b(188));return n.stateNode.current===n?e:t}function yp(e){return e=kv(e),e!==null?xp(e):null}function xp(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=xp(e);if(t!==null)return t;e=e.sibling}return null}var wp=qe.unstable_scheduleCallback,Wc=qe.unstable_cancelCallback,Ov=qe.unstable_shouldYield,Cv=qe.unstable_requestPaint,se=qe.unstable_now,_v=qe.unstable_getCurrentPriorityLevel,_u=qe.unstable_ImmediatePriority,Sp=qe.unstable_UserBlockingPriority,jo=qe.unstable_NormalPriority,Ev=qe.unstable_LowPriority,kp=qe.unstable_IdlePriority,pl=null,kt=null;function jv(e){if(kt&&typeof kt.onCommitFiberRoot=="function")try{kt.onCommitFiberRoot(pl,e,void 0,(e.current.flags&128)===128)}catch{}}var dt=Math.clz32?Math.clz32:Rv,bv=Math.log,Pv=Math.LN2;function Rv(e){return e>>>=0,e===0?32:31-(bv(e)/Pv|0)|0}var Ui=64,Bi=4194304;function Ur(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function bo(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,l=n&268435455;if(l!==0){var a=l&~i;a!==0?r=Ur(a):(o&=l,o!==0&&(r=Ur(o)))}else l=n&~i,l!==0?r=Ur(l):o!==0&&(r=Ur(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-dt(t),i=1<<n,r|=e[n],t&=~i;return r}function Tv(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Lv(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var l=31-dt(o),a=1<<l,s=i[l];s===-1?(!(a&n)||a&r)&&(i[l]=Tv(a,t)):s<=t&&(e.expiredLanes|=a),o&=~a}}function os(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Op(){var e=Ui;return Ui<<=1,!(Ui&4194240)&&(Ui=64),e}function na(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ji(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-dt(t),e[t]=n}function Nv(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-dt(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function Eu(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-dt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var G=0;function Cp(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var _p,ju,Ep,jp,bp,ls=!1,Hi=[],Xt=null,Jt=null,Zt=null,ii=new Map,oi=new Map,qt=[],zv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Vc(e,t){switch(e){case"focusin":case"focusout":Xt=null;break;case"dragenter":case"dragleave":Jt=null;break;case"mouseover":case"mouseout":Zt=null;break;case"pointerover":case"pointerout":ii.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":oi.delete(t.pointerId)}}function Lr(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Pi(t),t!==null&&ju(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function $v(e,t,n,r,i){switch(t){case"focusin":return Xt=Lr(Xt,e,t,n,r,i),!0;case"dragenter":return Jt=Lr(Jt,e,t,n,r,i),!0;case"mouseover":return Zt=Lr(Zt,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return ii.set(o,Lr(ii.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,oi.set(o,Lr(oi.get(o)||null,e,t,n,r,i)),!0}return!1}function Pp(e){var t=wn(e.target);if(t!==null){var n=In(t);if(n!==null){if(t=n.tag,t===13){if(t=vp(n),t!==null){e.blockedOn=t,bp(e.priority,function(){Ep(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function oo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=as(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);ts=r,n.target.dispatchEvent(r),ts=null}else return t=Pi(n),t!==null&&ju(t),e.blockedOn=n,!1;t.shift()}return!0}function qc(e,t,n){oo(e)&&n.delete(t)}function Iv(){ls=!1,Xt!==null&&oo(Xt)&&(Xt=null),Jt!==null&&oo(Jt)&&(Jt=null),Zt!==null&&oo(Zt)&&(Zt=null),ii.forEach(qc),oi.forEach(qc)}function Nr(e,t){e.blockedOn===t&&(e.blockedOn=null,ls||(ls=!0,qe.unstable_scheduleCallback(qe.unstable_NormalPriority,Iv)))}function li(e){function t(i){return Nr(i,e)}if(0<Hi.length){Nr(Hi[0],e);for(var n=1;n<Hi.length;n++){var r=Hi[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Xt!==null&&Nr(Xt,e),Jt!==null&&Nr(Jt,e),Zt!==null&&Nr(Zt,e),ii.forEach(t),oi.forEach(t),n=0;n<qt.length;n++)r=qt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<qt.length&&(n=qt[0],n.blockedOn===null);)Pp(n),n.blockedOn===null&&qt.shift()}var ir=Dt.ReactCurrentBatchConfig,Po=!0;function Av(e,t,n,r){var i=G,o=ir.transition;ir.transition=null;try{G=1,bu(e,t,n,r)}finally{G=i,ir.transition=o}}function Dv(e,t,n,r){var i=G,o=ir.transition;ir.transition=null;try{G=4,bu(e,t,n,r)}finally{G=i,ir.transition=o}}function bu(e,t,n,r){if(Po){var i=as(e,t,n,r);if(i===null)fa(e,t,r,Ro,n),Vc(e,r);else if($v(i,e,t,n,r))r.stopPropagation();else if(Vc(e,r),t&4&&-1<zv.indexOf(e)){for(;i!==null;){var o=Pi(i);if(o!==null&&_p(o),o=as(e,t,n,r),o===null&&fa(e,t,r,Ro,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else fa(e,t,r,null,n)}}var Ro=null;function as(e,t,n,r){if(Ro=null,e=Cu(r),e=wn(e),e!==null)if(t=In(e),t===null)e=null;else if(n=t.tag,n===13){if(e=vp(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ro=e,null}function Rp(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(_v()){case _u:return 1;case Sp:return 4;case jo:case Ev:return 16;case kp:return 536870912;default:return 16}default:return 16}}var Kt=null,Pu=null,lo=null;function Tp(){if(lo)return lo;var e,t=Pu,n=t.length,r,i="value"in Kt?Kt.value:Kt.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===i[o-r];r++);return lo=i.slice(e,1<r?1-r:void 0)}function ao(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Wi(){return!0}function Qc(){return!1}function Ke(e){function t(n,r,i,o,l){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=l,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Wi:Qc,this.isPropagationStopped=Qc,this}return oe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Wi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Wi)},persist:function(){},isPersistent:Wi}),t}var Cr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ru=Ke(Cr),bi=oe({},Cr,{view:0,detail:0}),Mv=Ke(bi),ra,ia,zr,hl=oe({},bi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Tu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==zr&&(zr&&e.type==="mousemove"?(ra=e.screenX-zr.screenX,ia=e.screenY-zr.screenY):ia=ra=0,zr=e),ra)},movementY:function(e){return"movementY"in e?e.movementY:ia}}),Kc=Ke(hl),Fv=oe({},hl,{dataTransfer:0}),Uv=Ke(Fv),Bv=oe({},bi,{relatedTarget:0}),oa=Ke(Bv),Hv=oe({},Cr,{animationName:0,elapsedTime:0,pseudoElement:0}),Wv=Ke(Hv),Vv=oe({},Cr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),qv=Ke(Vv),Qv=oe({},Cr,{data:0}),Gc=Ke(Qv),Kv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Gv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Yv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Xv(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Yv[e])?!!t[e]:!1}function Tu(){return Xv}var Jv=oe({},bi,{key:function(e){if(e.key){var t=Kv[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ao(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Gv[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Tu,charCode:function(e){return e.type==="keypress"?ao(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ao(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Zv=Ke(Jv),ey=oe({},hl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Yc=Ke(ey),ty=oe({},bi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Tu}),ny=Ke(ty),ry=oe({},Cr,{propertyName:0,elapsedTime:0,pseudoElement:0}),iy=Ke(ry),oy=oe({},hl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),ly=Ke(oy),ay=[9,13,27,32],Lu=Nt&&"CompositionEvent"in window,qr=null;Nt&&"documentMode"in document&&(qr=document.documentMode);var sy=Nt&&"TextEvent"in window&&!qr,Lp=Nt&&(!Lu||qr&&8<qr&&11>=qr),Xc=String.fromCharCode(32),Jc=!1;function Np(e,t){switch(e){case"keyup":return ay.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function zp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Wn=!1;function uy(e,t){switch(e){case"compositionend":return zp(t);case"keypress":return t.which!==32?null:(Jc=!0,Xc);case"textInput":return e=t.data,e===Xc&&Jc?null:e;default:return null}}function cy(e,t){if(Wn)return e==="compositionend"||!Lu&&Np(e,t)?(e=Tp(),lo=Pu=Kt=null,Wn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Lp&&t.locale!=="ko"?null:t.data;default:return null}}var dy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Zc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!dy[e.type]:t==="textarea"}function $p(e,t,n,r){fp(r),t=To(t,"onChange"),0<t.length&&(n=new Ru("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Qr=null,ai=null;function fy(e){qp(e,0)}function ml(e){var t=Qn(e);if(op(t))return e}function py(e,t){if(e==="change")return t}var Ip=!1;if(Nt){var la;if(Nt){var aa="oninput"in document;if(!aa){var ed=document.createElement("div");ed.setAttribute("oninput","return;"),aa=typeof ed.oninput=="function"}la=aa}else la=!1;Ip=la&&(!document.documentMode||9<document.documentMode)}function td(){Qr&&(Qr.detachEvent("onpropertychange",Ap),ai=Qr=null)}function Ap(e){if(e.propertyName==="value"&&ml(ai)){var t=[];$p(t,ai,e,Cu(e)),gp(fy,t)}}function hy(e,t,n){e==="focusin"?(td(),Qr=t,ai=n,Qr.attachEvent("onpropertychange",Ap)):e==="focusout"&&td()}function my(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ml(ai)}function gy(e,t){if(e==="click")return ml(t)}function vy(e,t){if(e==="input"||e==="change")return ml(t)}function yy(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ht=typeof Object.is=="function"?Object.is:yy;function si(e,t){if(ht(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Ha.call(t,i)||!ht(e[i],t[i]))return!1}return!0}function nd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function rd(e,t){var n=nd(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=nd(n)}}function Dp(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Dp(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Mp(){for(var e=window,t=Co();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Co(e.document)}return t}function Nu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function xy(e){var t=Mp(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Dp(n.ownerDocument.documentElement,n)){if(r!==null&&Nu(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=rd(n,o);var l=rd(n,r);i&&l&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var wy=Nt&&"documentMode"in document&&11>=document.documentMode,Vn=null,ss=null,Kr=null,us=!1;function id(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;us||Vn==null||Vn!==Co(r)||(r=Vn,"selectionStart"in r&&Nu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Kr&&si(Kr,r)||(Kr=r,r=To(ss,"onSelect"),0<r.length&&(t=new Ru("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Vn)))}function Vi(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var qn={animationend:Vi("Animation","AnimationEnd"),animationiteration:Vi("Animation","AnimationIteration"),animationstart:Vi("Animation","AnimationStart"),transitionend:Vi("Transition","TransitionEnd")},sa={},Fp={};Nt&&(Fp=document.createElement("div").style,"AnimationEvent"in window||(delete qn.animationend.animation,delete qn.animationiteration.animation,delete qn.animationstart.animation),"TransitionEvent"in window||delete qn.transitionend.transition);function gl(e){if(sa[e])return sa[e];if(!qn[e])return e;var t=qn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Fp)return sa[e]=t[n];return e}var Up=gl("animationend"),Bp=gl("animationiteration"),Hp=gl("animationstart"),Wp=gl("transitionend"),Vp=new Map,od="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function dn(e,t){Vp.set(e,t),$n(t,[e])}for(var ua=0;ua<od.length;ua++){var ca=od[ua],Sy=ca.toLowerCase(),ky=ca[0].toUpperCase()+ca.slice(1);dn(Sy,"on"+ky)}dn(Up,"onAnimationEnd");dn(Bp,"onAnimationIteration");dn(Hp,"onAnimationStart");dn("dblclick","onDoubleClick");dn("focusin","onFocus");dn("focusout","onBlur");dn(Wp,"onTransitionEnd");ur("onMouseEnter",["mouseout","mouseover"]);ur("onMouseLeave",["mouseout","mouseover"]);ur("onPointerEnter",["pointerout","pointerover"]);ur("onPointerLeave",["pointerout","pointerover"]);$n("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));$n("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));$n("onBeforeInput",["compositionend","keypress","textInput","paste"]);$n("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));$n("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));$n("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Br="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Oy=new Set("cancel close invalid load scroll toggle".split(" ").concat(Br));function ld(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Sv(r,t,void 0,e),e.currentTarget=null}function qp(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var l=r.length-1;0<=l;l--){var a=r[l],s=a.instance,u=a.currentTarget;if(a=a.listener,s!==o&&i.isPropagationStopped())break e;ld(i,a,u),o=s}else for(l=0;l<r.length;l++){if(a=r[l],s=a.instance,u=a.currentTarget,a=a.listener,s!==o&&i.isPropagationStopped())break e;ld(i,a,u),o=s}}}if(Eo)throw e=is,Eo=!1,is=null,e}function X(e,t){var n=t[hs];n===void 0&&(n=t[hs]=new Set);var r=e+"__bubble";n.has(r)||(Qp(t,e,2,!1),n.add(r))}function da(e,t,n){var r=0;t&&(r|=4),Qp(n,e,r,t)}var qi="_reactListening"+Math.random().toString(36).slice(2);function ui(e){if(!e[qi]){e[qi]=!0,ep.forEach(function(n){n!=="selectionchange"&&(Oy.has(n)||da(n,!1,e),da(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[qi]||(t[qi]=!0,da("selectionchange",!1,t))}}function Qp(e,t,n,r){switch(Rp(t)){case 1:var i=Av;break;case 4:i=Dv;break;default:i=bu}n=i.bind(null,t,n,e),i=void 0,!rs||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function fa(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(l===4)for(l=r.return;l!==null;){var s=l.tag;if((s===3||s===4)&&(s=l.stateNode.containerInfo,s===i||s.nodeType===8&&s.parentNode===i))return;l=l.return}for(;a!==null;){if(l=wn(a),l===null)return;if(s=l.tag,s===5||s===6){r=o=l;continue e}a=a.parentNode}}r=r.return}gp(function(){var u=o,f=Cu(n),c=[];e:{var v=Vp.get(e);if(v!==void 0){var w=Ru,m=e;switch(e){case"keypress":if(ao(n)===0)break e;case"keydown":case"keyup":w=Zv;break;case"focusin":m="focus",w=oa;break;case"focusout":m="blur",w=oa;break;case"beforeblur":case"afterblur":w=oa;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=Kc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=Uv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=ny;break;case Up:case Bp:case Hp:w=Wv;break;case Wp:w=iy;break;case"scroll":w=Mv;break;case"wheel":w=ly;break;case"copy":case"cut":case"paste":w=qv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=Yc}var y=(t&4)!==0,S=!y&&e==="scroll",h=y?v!==null?v+"Capture":null:v;y=[];for(var p=u,g;p!==null;){g=p;var x=g.stateNode;if(g.tag===5&&x!==null&&(g=x,h!==null&&(x=ri(p,h),x!=null&&y.push(ci(p,x,g)))),S)break;p=p.return}0<y.length&&(v=new w(v,m,null,n,f),c.push({event:v,listeners:y}))}}if(!(t&7)){e:{if(v=e==="mouseover"||e==="pointerover",w=e==="mouseout"||e==="pointerout",v&&n!==ts&&(m=n.relatedTarget||n.fromElement)&&(wn(m)||m[zt]))break e;if((w||v)&&(v=f.window===f?f:(v=f.ownerDocument)?v.defaultView||v.parentWindow:window,w?(m=n.relatedTarget||n.toElement,w=u,m=m?wn(m):null,m!==null&&(S=In(m),m!==S||m.tag!==5&&m.tag!==6)&&(m=null)):(w=null,m=u),w!==m)){if(y=Kc,x="onMouseLeave",h="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(y=Yc,x="onPointerLeave",h="onPointerEnter",p="pointer"),S=w==null?v:Qn(w),g=m==null?v:Qn(m),v=new y(x,p+"leave",w,n,f),v.target=S,v.relatedTarget=g,x=null,wn(f)===u&&(y=new y(h,p+"enter",m,n,f),y.target=g,y.relatedTarget=S,x=y),S=x,w&&m)t:{for(y=w,h=m,p=0,g=y;g;g=Dn(g))p++;for(g=0,x=h;x;x=Dn(x))g++;for(;0<p-g;)y=Dn(y),p--;for(;0<g-p;)h=Dn(h),g--;for(;p--;){if(y===h||h!==null&&y===h.alternate)break t;y=Dn(y),h=Dn(h)}y=null}else y=null;w!==null&&ad(c,v,w,y,!1),m!==null&&S!==null&&ad(c,S,m,y,!0)}}e:{if(v=u?Qn(u):window,w=v.nodeName&&v.nodeName.toLowerCase(),w==="select"||w==="input"&&v.type==="file")var O=py;else if(Zc(v))if(Ip)O=vy;else{O=my;var k=hy}else(w=v.nodeName)&&w.toLowerCase()==="input"&&(v.type==="checkbox"||v.type==="radio")&&(O=gy);if(O&&(O=O(e,u))){$p(c,O,n,f);break e}k&&k(e,v,u),e==="focusout"&&(k=v._wrapperState)&&k.controlled&&v.type==="number"&&Ya(v,"number",v.value)}switch(k=u?Qn(u):window,e){case"focusin":(Zc(k)||k.contentEditable==="true")&&(Vn=k,ss=u,Kr=null);break;case"focusout":Kr=ss=Vn=null;break;case"mousedown":us=!0;break;case"contextmenu":case"mouseup":case"dragend":us=!1,id(c,n,f);break;case"selectionchange":if(wy)break;case"keydown":case"keyup":id(c,n,f)}var E;if(Lu)e:{switch(e){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else Wn?Np(e,n)&&(_="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(_="onCompositionStart");_&&(Lp&&n.locale!=="ko"&&(Wn||_!=="onCompositionStart"?_==="onCompositionEnd"&&Wn&&(E=Tp()):(Kt=f,Pu="value"in Kt?Kt.value:Kt.textContent,Wn=!0)),k=To(u,_),0<k.length&&(_=new Gc(_,e,null,n,f),c.push({event:_,listeners:k}),E?_.data=E:(E=zp(n),E!==null&&(_.data=E)))),(E=sy?uy(e,n):cy(e,n))&&(u=To(u,"onBeforeInput"),0<u.length&&(f=new Gc("onBeforeInput","beforeinput",null,n,f),c.push({event:f,listeners:u}),f.data=E))}qp(c,t)})}function ci(e,t,n){return{instance:e,listener:t,currentTarget:n}}function To(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=ri(e,n),o!=null&&r.unshift(ci(e,o,i)),o=ri(e,t),o!=null&&r.push(ci(e,o,i))),e=e.return}return r}function Dn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function ad(e,t,n,r,i){for(var o=t._reactName,l=[];n!==null&&n!==r;){var a=n,s=a.alternate,u=a.stateNode;if(s!==null&&s===r)break;a.tag===5&&u!==null&&(a=u,i?(s=ri(n,o),s!=null&&l.unshift(ci(n,s,a))):i||(s=ri(n,o),s!=null&&l.push(ci(n,s,a)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var Cy=/\r\n?/g,_y=/\u0000|\uFFFD/g;function sd(e){return(typeof e=="string"?e:""+e).replace(Cy,`
`).replace(_y,"")}function Qi(e,t,n){if(t=sd(t),sd(e)!==t&&n)throw Error(b(425))}function Lo(){}var cs=null,ds=null;function fs(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ps=typeof setTimeout=="function"?setTimeout:void 0,Ey=typeof clearTimeout=="function"?clearTimeout:void 0,ud=typeof Promise=="function"?Promise:void 0,jy=typeof queueMicrotask=="function"?queueMicrotask:typeof ud<"u"?function(e){return ud.resolve(null).then(e).catch(by)}:ps;function by(e){setTimeout(function(){throw e})}function pa(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),li(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);li(t)}function en(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function cd(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var _r=Math.random().toString(36).slice(2),wt="__reactFiber$"+_r,di="__reactProps$"+_r,zt="__reactContainer$"+_r,hs="__reactEvents$"+_r,Py="__reactListeners$"+_r,Ry="__reactHandles$"+_r;function wn(e){var t=e[wt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[zt]||n[wt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=cd(e);e!==null;){if(n=e[wt])return n;e=cd(e)}return t}e=n,n=e.parentNode}return null}function Pi(e){return e=e[wt]||e[zt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Qn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(b(33))}function vl(e){return e[di]||null}var ms=[],Kn=-1;function fn(e){return{current:e}}function Z(e){0>Kn||(e.current=ms[Kn],ms[Kn]=null,Kn--)}function Y(e,t){Kn++,ms[Kn]=e.current,e.current=t}var cn={},be=fn(cn),Fe=fn(!1),bn=cn;function cr(e,t){var n=e.type.contextTypes;if(!n)return cn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Ue(e){return e=e.childContextTypes,e!=null}function No(){Z(Fe),Z(be)}function dd(e,t,n){if(be.current!==cn)throw Error(b(168));Y(be,t),Y(Fe,n)}function Kp(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(b(108,hv(e)||"Unknown",i));return oe({},n,r)}function zo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||cn,bn=be.current,Y(be,e),Y(Fe,Fe.current),!0}function fd(e,t,n){var r=e.stateNode;if(!r)throw Error(b(169));n?(e=Kp(e,t,bn),r.__reactInternalMemoizedMergedChildContext=e,Z(Fe),Z(be),Y(be,e)):Z(Fe),Y(Fe,n)}var bt=null,yl=!1,ha=!1;function Gp(e){bt===null?bt=[e]:bt.push(e)}function Ty(e){yl=!0,Gp(e)}function pn(){if(!ha&&bt!==null){ha=!0;var e=0,t=G;try{var n=bt;for(G=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}bt=null,yl=!1}catch(i){throw bt!==null&&(bt=bt.slice(e+1)),wp(_u,pn),i}finally{G=t,ha=!1}}return null}var Gn=[],Yn=0,$o=null,Io=0,Xe=[],Je=0,Pn=null,Pt=1,Rt="";function yn(e,t){Gn[Yn++]=Io,Gn[Yn++]=$o,$o=e,Io=t}function Yp(e,t,n){Xe[Je++]=Pt,Xe[Je++]=Rt,Xe[Je++]=Pn,Pn=e;var r=Pt;e=Rt;var i=32-dt(r)-1;r&=~(1<<i),n+=1;var o=32-dt(t)+i;if(30<o){var l=i-i%5;o=(r&(1<<l)-1).toString(32),r>>=l,i-=l,Pt=1<<32-dt(t)+i|n<<i|r,Rt=o+e}else Pt=1<<o|n<<i|r,Rt=e}function zu(e){e.return!==null&&(yn(e,1),Yp(e,1,0))}function $u(e){for(;e===$o;)$o=Gn[--Yn],Gn[Yn]=null,Io=Gn[--Yn],Gn[Yn]=null;for(;e===Pn;)Pn=Xe[--Je],Xe[Je]=null,Rt=Xe[--Je],Xe[Je]=null,Pt=Xe[--Je],Xe[Je]=null}var Ve=null,We=null,te=!1,ut=null;function Xp(e,t){var n=et(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function pd(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ve=e,We=en(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ve=e,We=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Pn!==null?{id:Pt,overflow:Rt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=et(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ve=e,We=null,!0):!1;default:return!1}}function gs(e){return(e.mode&1)!==0&&(e.flags&128)===0}function vs(e){if(te){var t=We;if(t){var n=t;if(!pd(e,t)){if(gs(e))throw Error(b(418));t=en(n.nextSibling);var r=Ve;t&&pd(e,t)?Xp(r,n):(e.flags=e.flags&-4097|2,te=!1,Ve=e)}}else{if(gs(e))throw Error(b(418));e.flags=e.flags&-4097|2,te=!1,Ve=e}}}function hd(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ve=e}function Ki(e){if(e!==Ve)return!1;if(!te)return hd(e),te=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!fs(e.type,e.memoizedProps)),t&&(t=We)){if(gs(e))throw Jp(),Error(b(418));for(;t;)Xp(e,t),t=en(t.nextSibling)}if(hd(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(b(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){We=en(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}We=null}}else We=Ve?en(e.stateNode.nextSibling):null;return!0}function Jp(){for(var e=We;e;)e=en(e.nextSibling)}function dr(){We=Ve=null,te=!1}function Iu(e){ut===null?ut=[e]:ut.push(e)}var Ly=Dt.ReactCurrentBatchConfig;function at(e,t){if(e&&e.defaultProps){t=oe({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Ao=fn(null),Do=null,Xn=null,Au=null;function Du(){Au=Xn=Do=null}function Mu(e){var t=Ao.current;Z(Ao),e._currentValue=t}function ys(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function or(e,t){Do=e,Au=Xn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Me=!0),e.firstContext=null)}function rt(e){var t=e._currentValue;if(Au!==e)if(e={context:e,memoizedValue:t,next:null},Xn===null){if(Do===null)throw Error(b(308));Xn=e,Do.dependencies={lanes:0,firstContext:e}}else Xn=Xn.next=e;return t}var Sn=null;function Fu(e){Sn===null?Sn=[e]:Sn.push(e)}function Zp(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Fu(t)):(n.next=i.next,i.next=n),t.interleaved=n,$t(e,r)}function $t(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Wt=!1;function Uu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function eh(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Tt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function tn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,q&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,$t(e,n)}return i=r.interleaved,i===null?(t.next=t,Fu(r)):(t.next=i.next,i.next=t),r.interleaved=t,$t(e,n)}function so(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Eu(e,n)}}function md(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=l:o=o.next=l,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Mo(e,t,n,r){var i=e.updateQueue;Wt=!1;var o=i.firstBaseUpdate,l=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var s=a,u=s.next;s.next=null,l===null?o=u:l.next=u,l=s;var f=e.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==l&&(a===null?f.firstBaseUpdate=u:a.next=u,f.lastBaseUpdate=s))}if(o!==null){var c=i.baseState;l=0,f=u=s=null,a=o;do{var v=a.lane,w=a.eventTime;if((r&v)===v){f!==null&&(f=f.next={eventTime:w,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var m=e,y=a;switch(v=t,w=n,y.tag){case 1:if(m=y.payload,typeof m=="function"){c=m.call(w,c,v);break e}c=m;break e;case 3:m.flags=m.flags&-65537|128;case 0:if(m=y.payload,v=typeof m=="function"?m.call(w,c,v):m,v==null)break e;c=oe({},c,v);break e;case 2:Wt=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,v=i.effects,v===null?i.effects=[a]:v.push(a))}else w={eventTime:w,lane:v,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(u=f=w,s=c):f=f.next=w,l|=v;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;v=a,a=v.next,v.next=null,i.lastBaseUpdate=v,i.shared.pending=null}}while(1);if(f===null&&(s=c),i.baseState=s,i.firstBaseUpdate=u,i.lastBaseUpdate=f,t=i.shared.interleaved,t!==null){i=t;do l|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);Tn|=l,e.lanes=l,e.memoizedState=c}}function gd(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(b(191,i));i.call(r)}}}var th=new Zf.Component().refs;function xs(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:oe({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var xl={isMounted:function(e){return(e=e._reactInternals)?In(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Le(),i=rn(e),o=Tt(r,i);o.payload=t,n!=null&&(o.callback=n),t=tn(e,o,i),t!==null&&(ft(t,e,i,r),so(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Le(),i=rn(e),o=Tt(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=tn(e,o,i),t!==null&&(ft(t,e,i,r),so(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Le(),r=rn(e),i=Tt(n,r);i.tag=2,t!=null&&(i.callback=t),t=tn(e,i,r),t!==null&&(ft(t,e,r,n),so(t,e,r))}};function vd(e,t,n,r,i,o,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,l):t.prototype&&t.prototype.isPureReactComponent?!si(n,r)||!si(i,o):!0}function nh(e,t,n){var r=!1,i=cn,o=t.contextType;return typeof o=="object"&&o!==null?o=rt(o):(i=Ue(t)?bn:be.current,r=t.contextTypes,o=(r=r!=null)?cr(e,i):cn),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=xl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function yd(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&xl.enqueueReplaceState(t,t.state,null)}function ws(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=th,Uu(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=rt(o):(o=Ue(t)?bn:be.current,i.context=cr(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(xs(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&xl.enqueueReplaceState(i,i.state,null),Mo(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function $r(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(b(309));var r=n.stateNode}if(!r)throw Error(b(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(l){var a=i.refs;a===th&&(a=i.refs={}),l===null?delete a[o]:a[o]=l},t._stringRef=o,t)}if(typeof e!="string")throw Error(b(284));if(!n._owner)throw Error(b(290,e))}return e}function Gi(e,t){throw e=Object.prototype.toString.call(t),Error(b(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function xd(e){var t=e._init;return t(e._payload)}function rh(e){function t(h,p){if(e){var g=h.deletions;g===null?(h.deletions=[p],h.flags|=16):g.push(p)}}function n(h,p){if(!e)return null;for(;p!==null;)t(h,p),p=p.sibling;return null}function r(h,p){for(h=new Map;p!==null;)p.key!==null?h.set(p.key,p):h.set(p.index,p),p=p.sibling;return h}function i(h,p){return h=on(h,p),h.index=0,h.sibling=null,h}function o(h,p,g){return h.index=g,e?(g=h.alternate,g!==null?(g=g.index,g<p?(h.flags|=2,p):g):(h.flags|=2,p)):(h.flags|=1048576,p)}function l(h){return e&&h.alternate===null&&(h.flags|=2),h}function a(h,p,g,x){return p===null||p.tag!==6?(p=Sa(g,h.mode,x),p.return=h,p):(p=i(p,g),p.return=h,p)}function s(h,p,g,x){var O=g.type;return O===Hn?f(h,p,g.props.children,x,g.key):p!==null&&(p.elementType===O||typeof O=="object"&&O!==null&&O.$$typeof===Ht&&xd(O)===p.type)?(x=i(p,g.props),x.ref=$r(h,p,g),x.return=h,x):(x=mo(g.type,g.key,g.props,null,h.mode,x),x.ref=$r(h,p,g),x.return=h,x)}function u(h,p,g,x){return p===null||p.tag!==4||p.stateNode.containerInfo!==g.containerInfo||p.stateNode.implementation!==g.implementation?(p=ka(g,h.mode,x),p.return=h,p):(p=i(p,g.children||[]),p.return=h,p)}function f(h,p,g,x,O){return p===null||p.tag!==7?(p=_n(g,h.mode,x,O),p.return=h,p):(p=i(p,g),p.return=h,p)}function c(h,p,g){if(typeof p=="string"&&p!==""||typeof p=="number")return p=Sa(""+p,h.mode,g),p.return=h,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Di:return g=mo(p.type,p.key,p.props,null,h.mode,g),g.ref=$r(h,null,p),g.return=h,g;case Bn:return p=ka(p,h.mode,g),p.return=h,p;case Ht:var x=p._init;return c(h,x(p._payload),g)}if(Fr(p)||Rr(p))return p=_n(p,h.mode,g,null),p.return=h,p;Gi(h,p)}return null}function v(h,p,g,x){var O=p!==null?p.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return O!==null?null:a(h,p,""+g,x);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Di:return g.key===O?s(h,p,g,x):null;case Bn:return g.key===O?u(h,p,g,x):null;case Ht:return O=g._init,v(h,p,O(g._payload),x)}if(Fr(g)||Rr(g))return O!==null?null:f(h,p,g,x,null);Gi(h,g)}return null}function w(h,p,g,x,O){if(typeof x=="string"&&x!==""||typeof x=="number")return h=h.get(g)||null,a(p,h,""+x,O);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Di:return h=h.get(x.key===null?g:x.key)||null,s(p,h,x,O);case Bn:return h=h.get(x.key===null?g:x.key)||null,u(p,h,x,O);case Ht:var k=x._init;return w(h,p,g,k(x._payload),O)}if(Fr(x)||Rr(x))return h=h.get(g)||null,f(p,h,x,O,null);Gi(p,x)}return null}function m(h,p,g,x){for(var O=null,k=null,E=p,_=p=0,P=null;E!==null&&_<g.length;_++){E.index>_?(P=E,E=null):P=E.sibling;var T=v(h,E,g[_],x);if(T===null){E===null&&(E=P);break}e&&E&&T.alternate===null&&t(h,E),p=o(T,p,_),k===null?O=T:k.sibling=T,k=T,E=P}if(_===g.length)return n(h,E),te&&yn(h,_),O;if(E===null){for(;_<g.length;_++)E=c(h,g[_],x),E!==null&&(p=o(E,p,_),k===null?O=E:k.sibling=E,k=E);return te&&yn(h,_),O}for(E=r(h,E);_<g.length;_++)P=w(E,h,_,g[_],x),P!==null&&(e&&P.alternate!==null&&E.delete(P.key===null?_:P.key),p=o(P,p,_),k===null?O=P:k.sibling=P,k=P);return e&&E.forEach(function(M){return t(h,M)}),te&&yn(h,_),O}function y(h,p,g,x){var O=Rr(g);if(typeof O!="function")throw Error(b(150));if(g=O.call(g),g==null)throw Error(b(151));for(var k=O=null,E=p,_=p=0,P=null,T=g.next();E!==null&&!T.done;_++,T=g.next()){E.index>_?(P=E,E=null):P=E.sibling;var M=v(h,E,T.value,x);if(M===null){E===null&&(E=P);break}e&&E&&M.alternate===null&&t(h,E),p=o(M,p,_),k===null?O=M:k.sibling=M,k=M,E=P}if(T.done)return n(h,E),te&&yn(h,_),O;if(E===null){for(;!T.done;_++,T=g.next())T=c(h,T.value,x),T!==null&&(p=o(T,p,_),k===null?O=T:k.sibling=T,k=T);return te&&yn(h,_),O}for(E=r(h,E);!T.done;_++,T=g.next())T=w(E,h,_,T.value,x),T!==null&&(e&&T.alternate!==null&&E.delete(T.key===null?_:T.key),p=o(T,p,_),k===null?O=T:k.sibling=T,k=T);return e&&E.forEach(function($){return t(h,$)}),te&&yn(h,_),O}function S(h,p,g,x){if(typeof g=="object"&&g!==null&&g.type===Hn&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Di:e:{for(var O=g.key,k=p;k!==null;){if(k.key===O){if(O=g.type,O===Hn){if(k.tag===7){n(h,k.sibling),p=i(k,g.props.children),p.return=h,h=p;break e}}else if(k.elementType===O||typeof O=="object"&&O!==null&&O.$$typeof===Ht&&xd(O)===k.type){n(h,k.sibling),p=i(k,g.props),p.ref=$r(h,k,g),p.return=h,h=p;break e}n(h,k);break}else t(h,k);k=k.sibling}g.type===Hn?(p=_n(g.props.children,h.mode,x,g.key),p.return=h,h=p):(x=mo(g.type,g.key,g.props,null,h.mode,x),x.ref=$r(h,p,g),x.return=h,h=x)}return l(h);case Bn:e:{for(k=g.key;p!==null;){if(p.key===k)if(p.tag===4&&p.stateNode.containerInfo===g.containerInfo&&p.stateNode.implementation===g.implementation){n(h,p.sibling),p=i(p,g.children||[]),p.return=h,h=p;break e}else{n(h,p);break}else t(h,p);p=p.sibling}p=ka(g,h.mode,x),p.return=h,h=p}return l(h);case Ht:return k=g._init,S(h,p,k(g._payload),x)}if(Fr(g))return m(h,p,g,x);if(Rr(g))return y(h,p,g,x);Gi(h,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,p!==null&&p.tag===6?(n(h,p.sibling),p=i(p,g),p.return=h,h=p):(n(h,p),p=Sa(g,h.mode,x),p.return=h,h=p),l(h)):n(h,p)}return S}var fr=rh(!0),ih=rh(!1),Ri={},Ot=fn(Ri),fi=fn(Ri),pi=fn(Ri);function kn(e){if(e===Ri)throw Error(b(174));return e}function Bu(e,t){switch(Y(pi,t),Y(fi,e),Y(Ot,Ri),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ja(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ja(t,e)}Z(Ot),Y(Ot,t)}function pr(){Z(Ot),Z(fi),Z(pi)}function oh(e){kn(pi.current);var t=kn(Ot.current),n=Ja(t,e.type);t!==n&&(Y(fi,e),Y(Ot,n))}function Hu(e){fi.current===e&&(Z(Ot),Z(fi))}var re=fn(0);function Fo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ma=[];function Wu(){for(var e=0;e<ma.length;e++)ma[e]._workInProgressVersionPrimary=null;ma.length=0}var uo=Dt.ReactCurrentDispatcher,ga=Dt.ReactCurrentBatchConfig,Rn=0,ie=null,he=null,ve=null,Uo=!1,Gr=!1,hi=0,Ny=0;function _e(){throw Error(b(321))}function Vu(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!ht(e[n],t[n]))return!1;return!0}function qu(e,t,n,r,i,o){if(Rn=o,ie=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,uo.current=e===null||e.memoizedState===null?Ay:Dy,e=n(r,i),Gr){o=0;do{if(Gr=!1,hi=0,25<=o)throw Error(b(301));o+=1,ve=he=null,t.updateQueue=null,uo.current=My,e=n(r,i)}while(Gr)}if(uo.current=Bo,t=he!==null&&he.next!==null,Rn=0,ve=he=ie=null,Uo=!1,t)throw Error(b(300));return e}function Qu(){var e=hi!==0;return hi=0,e}function yt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ve===null?ie.memoizedState=ve=e:ve=ve.next=e,ve}function it(){if(he===null){var e=ie.alternate;e=e!==null?e.memoizedState:null}else e=he.next;var t=ve===null?ie.memoizedState:ve.next;if(t!==null)ve=t,he=e;else{if(e===null)throw Error(b(310));he=e,e={memoizedState:he.memoizedState,baseState:he.baseState,baseQueue:he.baseQueue,queue:he.queue,next:null},ve===null?ie.memoizedState=ve=e:ve=ve.next=e}return ve}function mi(e,t){return typeof t=="function"?t(e):t}function va(e){var t=it(),n=t.queue;if(n===null)throw Error(b(311));n.lastRenderedReducer=e;var r=he,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var l=i.next;i.next=o.next,o.next=l}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=l=null,s=null,u=o;do{var f=u.lane;if((Rn&f)===f)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var c={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(a=s=c,l=r):s=s.next=c,ie.lanes|=f,Tn|=f}u=u.next}while(u!==null&&u!==o);s===null?l=r:s.next=a,ht(r,t.memoizedState)||(Me=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,ie.lanes|=o,Tn|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ya(e){var t=it(),n=t.queue;if(n===null)throw Error(b(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var l=i=i.next;do o=e(o,l.action),l=l.next;while(l!==i);ht(o,t.memoizedState)||(Me=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function lh(){}function ah(e,t){var n=ie,r=it(),i=t(),o=!ht(r.memoizedState,i);if(o&&(r.memoizedState=i,Me=!0),r=r.queue,Ku(ch.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||ve!==null&&ve.memoizedState.tag&1){if(n.flags|=2048,gi(9,uh.bind(null,n,r,i,t),void 0,null),Se===null)throw Error(b(349));Rn&30||sh(n,t,i)}return i}function sh(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ie.updateQueue,t===null?(t={lastEffect:null,stores:null},ie.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function uh(e,t,n,r){t.value=n,t.getSnapshot=r,dh(t)&&fh(e)}function ch(e,t,n){return n(function(){dh(t)&&fh(e)})}function dh(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!ht(e,n)}catch{return!0}}function fh(e){var t=$t(e,1);t!==null&&ft(t,e,1,-1)}function wd(e){var t=yt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:mi,lastRenderedState:e},t.queue=e,e=e.dispatch=Iy.bind(null,ie,e),[t.memoizedState,e]}function gi(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ie.updateQueue,t===null?(t={lastEffect:null,stores:null},ie.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function ph(){return it().memoizedState}function co(e,t,n,r){var i=yt();ie.flags|=e,i.memoizedState=gi(1|t,n,void 0,r===void 0?null:r)}function wl(e,t,n,r){var i=it();r=r===void 0?null:r;var o=void 0;if(he!==null){var l=he.memoizedState;if(o=l.destroy,r!==null&&Vu(r,l.deps)){i.memoizedState=gi(t,n,o,r);return}}ie.flags|=e,i.memoizedState=gi(1|t,n,o,r)}function Sd(e,t){return co(8390656,8,e,t)}function Ku(e,t){return wl(2048,8,e,t)}function hh(e,t){return wl(4,2,e,t)}function mh(e,t){return wl(4,4,e,t)}function gh(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function vh(e,t,n){return n=n!=null?n.concat([e]):null,wl(4,4,gh.bind(null,t,e),n)}function Gu(){}function yh(e,t){var n=it();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Vu(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function xh(e,t){var n=it();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Vu(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function wh(e,t,n){return Rn&21?(ht(n,t)||(n=Op(),ie.lanes|=n,Tn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Me=!0),e.memoizedState=n)}function zy(e,t){var n=G;G=n!==0&&4>n?n:4,e(!0);var r=ga.transition;ga.transition={};try{e(!1),t()}finally{G=n,ga.transition=r}}function Sh(){return it().memoizedState}function $y(e,t,n){var r=rn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},kh(e))Oh(t,n);else if(n=Zp(e,t,n,r),n!==null){var i=Le();ft(n,e,r,i),Ch(n,t,r)}}function Iy(e,t,n){var r=rn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(kh(e))Oh(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var l=t.lastRenderedState,a=o(l,n);if(i.hasEagerState=!0,i.eagerState=a,ht(a,l)){var s=t.interleaved;s===null?(i.next=i,Fu(t)):(i.next=s.next,s.next=i),t.interleaved=i;return}}catch{}finally{}n=Zp(e,t,i,r),n!==null&&(i=Le(),ft(n,e,r,i),Ch(n,t,r))}}function kh(e){var t=e.alternate;return e===ie||t!==null&&t===ie}function Oh(e,t){Gr=Uo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Ch(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Eu(e,n)}}var Bo={readContext:rt,useCallback:_e,useContext:_e,useEffect:_e,useImperativeHandle:_e,useInsertionEffect:_e,useLayoutEffect:_e,useMemo:_e,useReducer:_e,useRef:_e,useState:_e,useDebugValue:_e,useDeferredValue:_e,useTransition:_e,useMutableSource:_e,useSyncExternalStore:_e,useId:_e,unstable_isNewReconciler:!1},Ay={readContext:rt,useCallback:function(e,t){return yt().memoizedState=[e,t===void 0?null:t],e},useContext:rt,useEffect:Sd,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,co(4194308,4,gh.bind(null,t,e),n)},useLayoutEffect:function(e,t){return co(4194308,4,e,t)},useInsertionEffect:function(e,t){return co(4,2,e,t)},useMemo:function(e,t){var n=yt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=yt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=$y.bind(null,ie,e),[r.memoizedState,e]},useRef:function(e){var t=yt();return e={current:e},t.memoizedState=e},useState:wd,useDebugValue:Gu,useDeferredValue:function(e){return yt().memoizedState=e},useTransition:function(){var e=wd(!1),t=e[0];return e=zy.bind(null,e[1]),yt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ie,i=yt();if(te){if(n===void 0)throw Error(b(407));n=n()}else{if(n=t(),Se===null)throw Error(b(349));Rn&30||sh(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Sd(ch.bind(null,r,o,e),[e]),r.flags|=2048,gi(9,uh.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=yt(),t=Se.identifierPrefix;if(te){var n=Rt,r=Pt;n=(r&~(1<<32-dt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=hi++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Ny++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Dy={readContext:rt,useCallback:yh,useContext:rt,useEffect:Ku,useImperativeHandle:vh,useInsertionEffect:hh,useLayoutEffect:mh,useMemo:xh,useReducer:va,useRef:ph,useState:function(){return va(mi)},useDebugValue:Gu,useDeferredValue:function(e){var t=it();return wh(t,he.memoizedState,e)},useTransition:function(){var e=va(mi)[0],t=it().memoizedState;return[e,t]},useMutableSource:lh,useSyncExternalStore:ah,useId:Sh,unstable_isNewReconciler:!1},My={readContext:rt,useCallback:yh,useContext:rt,useEffect:Ku,useImperativeHandle:vh,useInsertionEffect:hh,useLayoutEffect:mh,useMemo:xh,useReducer:ya,useRef:ph,useState:function(){return ya(mi)},useDebugValue:Gu,useDeferredValue:function(e){var t=it();return he===null?t.memoizedState=e:wh(t,he.memoizedState,e)},useTransition:function(){var e=ya(mi)[0],t=it().memoizedState;return[e,t]},useMutableSource:lh,useSyncExternalStore:ah,useId:Sh,unstable_isNewReconciler:!1};function hr(e,t){try{var n="",r=t;do n+=pv(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function xa(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ss(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Fy=typeof WeakMap=="function"?WeakMap:Map;function _h(e,t,n){n=Tt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Wo||(Wo=!0,Ts=r),Ss(e,t)},n}function Eh(e,t,n){n=Tt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Ss(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Ss(e,t),typeof r!="function"&&(nn===null?nn=new Set([this]):nn.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function kd(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Fy;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=e0.bind(null,e,t,n),t.then(e,e))}function Od(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Cd(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Tt(-1,1),t.tag=2,tn(n,t,1))),n.lanes|=1),e)}var Uy=Dt.ReactCurrentOwner,Me=!1;function Te(e,t,n,r){t.child=e===null?ih(t,null,n,r):fr(t,e.child,n,r)}function _d(e,t,n,r,i){n=n.render;var o=t.ref;return or(t,i),r=qu(e,t,n,r,o,i),n=Qu(),e!==null&&!Me?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,It(e,t,i)):(te&&n&&zu(t),t.flags|=1,Te(e,t,r,i),t.child)}function Ed(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!rc(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,jh(e,t,o,r,i)):(e=mo(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var l=o.memoizedProps;if(n=n.compare,n=n!==null?n:si,n(l,r)&&e.ref===t.ref)return It(e,t,i)}return t.flags|=1,e=on(o,r),e.ref=t.ref,e.return=t,t.child=e}function jh(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(si(o,r)&&e.ref===t.ref)if(Me=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(Me=!0);else return t.lanes=e.lanes,It(e,t,i)}return ks(e,t,n,r,i)}function bh(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Y(Zn,He),He|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Y(Zn,He),He|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,Y(Zn,He),He|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,Y(Zn,He),He|=r;return Te(e,t,i,n),t.child}function Ph(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ks(e,t,n,r,i){var o=Ue(n)?bn:be.current;return o=cr(t,o),or(t,i),n=qu(e,t,n,r,o,i),r=Qu(),e!==null&&!Me?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,It(e,t,i)):(te&&r&&zu(t),t.flags|=1,Te(e,t,n,i),t.child)}function jd(e,t,n,r,i){if(Ue(n)){var o=!0;zo(t)}else o=!1;if(or(t,i),t.stateNode===null)fo(e,t),nh(t,n,r),ws(t,n,r,i),r=!0;else if(e===null){var l=t.stateNode,a=t.memoizedProps;l.props=a;var s=l.context,u=n.contextType;typeof u=="object"&&u!==null?u=rt(u):(u=Ue(n)?bn:be.current,u=cr(t,u));var f=n.getDerivedStateFromProps,c=typeof f=="function"||typeof l.getSnapshotBeforeUpdate=="function";c||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==r||s!==u)&&yd(t,l,r,u),Wt=!1;var v=t.memoizedState;l.state=v,Mo(t,r,l,i),s=t.memoizedState,a!==r||v!==s||Fe.current||Wt?(typeof f=="function"&&(xs(t,n,f,r),s=t.memoizedState),(a=Wt||vd(t,n,a,r,v,s,u))?(c||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),l.props=r,l.state=s,l.context=u,r=a):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,eh(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:at(t.type,a),l.props=u,c=t.pendingProps,v=l.context,s=n.contextType,typeof s=="object"&&s!==null?s=rt(s):(s=Ue(n)?bn:be.current,s=cr(t,s));var w=n.getDerivedStateFromProps;(f=typeof w=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==c||v!==s)&&yd(t,l,r,s),Wt=!1,v=t.memoizedState,l.state=v,Mo(t,r,l,i);var m=t.memoizedState;a!==c||v!==m||Fe.current||Wt?(typeof w=="function"&&(xs(t,n,w,r),m=t.memoizedState),(u=Wt||vd(t,n,u,r,v,m,s)||!1)?(f||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,m,s),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,m,s)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&v===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&v===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=m),l.props=r,l.state=m,l.context=s,r=u):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&v===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&v===e.memoizedState||(t.flags|=1024),r=!1)}return Os(e,t,n,r,o,i)}function Os(e,t,n,r,i,o){Ph(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return i&&fd(t,n,!1),It(e,t,o);r=t.stateNode,Uy.current=t;var a=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=fr(t,e.child,null,o),t.child=fr(t,null,a,o)):Te(e,t,a,o),t.memoizedState=r.state,i&&fd(t,n,!0),t.child}function Rh(e){var t=e.stateNode;t.pendingContext?dd(e,t.pendingContext,t.pendingContext!==t.context):t.context&&dd(e,t.context,!1),Bu(e,t.containerInfo)}function bd(e,t,n,r,i){return dr(),Iu(i),t.flags|=256,Te(e,t,n,r),t.child}var Cs={dehydrated:null,treeContext:null,retryLane:0};function _s(e){return{baseLanes:e,cachePool:null,transitions:null}}function Th(e,t,n){var r=t.pendingProps,i=re.current,o=!1,l=(t.flags&128)!==0,a;if((a=l)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),Y(re,i&1),e===null)return vs(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,o?(r=t.mode,o=t.child,l={mode:"hidden",children:l},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=l):o=Ol(l,r,0,null),e=_n(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=_s(n),t.memoizedState=Cs,e):Yu(t,l));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return By(e,t,l,r,a,i,n);if(o){o=r.fallback,l=t.mode,i=e.child,a=i.sibling;var s={mode:"hidden",children:r.children};return!(l&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=on(i,s),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=on(a,o):(o=_n(o,l,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,l=e.child.memoizedState,l=l===null?_s(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},o.memoizedState=l,o.childLanes=e.childLanes&~n,t.memoizedState=Cs,r}return o=e.child,e=o.sibling,r=on(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Yu(e,t){return t=Ol({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Yi(e,t,n,r){return r!==null&&Iu(r),fr(t,e.child,null,n),e=Yu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function By(e,t,n,r,i,o,l){if(n)return t.flags&256?(t.flags&=-257,r=xa(Error(b(422))),Yi(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Ol({mode:"visible",children:r.children},i,0,null),o=_n(o,i,l,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&fr(t,e.child,null,l),t.child.memoizedState=_s(l),t.memoizedState=Cs,o);if(!(t.mode&1))return Yi(e,t,l,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(b(419)),r=xa(o,r,void 0),Yi(e,t,l,r)}if(a=(l&e.childLanes)!==0,Me||a){if(r=Se,r!==null){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|l)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,$t(e,i),ft(r,e,i,-1))}return nc(),r=xa(Error(b(421))),Yi(e,t,l,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=t0.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,We=en(i.nextSibling),Ve=t,te=!0,ut=null,e!==null&&(Xe[Je++]=Pt,Xe[Je++]=Rt,Xe[Je++]=Pn,Pt=e.id,Rt=e.overflow,Pn=t),t=Yu(t,r.children),t.flags|=4096,t)}function Pd(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ys(e.return,t,n)}function wa(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Lh(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(Te(e,t,r.children,n),r=re.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Pd(e,n,t);else if(e.tag===19)Pd(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Y(re,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Fo(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),wa(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Fo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}wa(t,!0,n,null,o);break;case"together":wa(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function fo(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function It(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Tn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(b(153));if(t.child!==null){for(e=t.child,n=on(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=on(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Hy(e,t,n){switch(t.tag){case 3:Rh(t),dr();break;case 5:oh(t);break;case 1:Ue(t.type)&&zo(t);break;case 4:Bu(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;Y(Ao,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Y(re,re.current&1),t.flags|=128,null):n&t.child.childLanes?Th(e,t,n):(Y(re,re.current&1),e=It(e,t,n),e!==null?e.sibling:null);Y(re,re.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Lh(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Y(re,re.current),r)break;return null;case 22:case 23:return t.lanes=0,bh(e,t,n)}return It(e,t,n)}var Nh,Es,zh,$h;Nh=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Es=function(){};zh=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,kn(Ot.current);var o=null;switch(n){case"input":i=Ka(e,i),r=Ka(e,r),o=[];break;case"select":i=oe({},i,{value:void 0}),r=oe({},r,{value:void 0}),o=[];break;case"textarea":i=Xa(e,i),r=Xa(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Lo)}Za(n,r);var l;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(l in a)a.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ti.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var s=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&s!==a&&(s!=null||a!=null))if(u==="style")if(a){for(l in a)!a.hasOwnProperty(l)||s&&s.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in s)s.hasOwnProperty(l)&&a[l]!==s[l]&&(n||(n={}),n[l]=s[l])}else n||(o||(o=[]),o.push(u,n)),n=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,a=a?a.__html:void 0,s!=null&&a!==s&&(o=o||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(o=o||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ti.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&X("scroll",e),o||a===s||(o=[])):(o=o||[]).push(u,s))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};$h=function(e,t,n,r){n!==r&&(t.flags|=4)};function Ir(e,t){if(!te)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ee(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Wy(e,t,n){var r=t.pendingProps;switch($u(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ee(t),null;case 1:return Ue(t.type)&&No(),Ee(t),null;case 3:return r=t.stateNode,pr(),Z(Fe),Z(be),Wu(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Ki(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,ut!==null&&(zs(ut),ut=null))),Es(e,t),Ee(t),null;case 5:Hu(t);var i=kn(pi.current);if(n=t.type,e!==null&&t.stateNode!=null)zh(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(b(166));return Ee(t),null}if(e=kn(Ot.current),Ki(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[wt]=t,r[di]=o,e=(t.mode&1)!==0,n){case"dialog":X("cancel",r),X("close",r);break;case"iframe":case"object":case"embed":X("load",r);break;case"video":case"audio":for(i=0;i<Br.length;i++)X(Br[i],r);break;case"source":X("error",r);break;case"img":case"image":case"link":X("error",r),X("load",r);break;case"details":X("toggle",r);break;case"input":Dc(r,o),X("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},X("invalid",r);break;case"textarea":Fc(r,o),X("invalid",r)}Za(n,o),i=null;for(var l in o)if(o.hasOwnProperty(l)){var a=o[l];l==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&Qi(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&Qi(r.textContent,a,e),i=["children",""+a]):ti.hasOwnProperty(l)&&a!=null&&l==="onScroll"&&X("scroll",r)}switch(n){case"input":Mi(r),Mc(r,o,!0);break;case"textarea":Mi(r),Uc(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Lo)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=sp(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[wt]=t,e[di]=r,Nh(e,t,!1,!1),t.stateNode=e;e:{switch(l=es(n,r),n){case"dialog":X("cancel",e),X("close",e),i=r;break;case"iframe":case"object":case"embed":X("load",e),i=r;break;case"video":case"audio":for(i=0;i<Br.length;i++)X(Br[i],e);i=r;break;case"source":X("error",e),i=r;break;case"img":case"image":case"link":X("error",e),X("load",e),i=r;break;case"details":X("toggle",e),i=r;break;case"input":Dc(e,r),i=Ka(e,r),X("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=oe({},r,{value:void 0}),X("invalid",e);break;case"textarea":Fc(e,r),i=Xa(e,r),X("invalid",e);break;default:i=r}Za(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var s=a[o];o==="style"?dp(e,s):o==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&up(e,s)):o==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&ni(e,s):typeof s=="number"&&ni(e,""+s):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(ti.hasOwnProperty(o)?s!=null&&o==="onScroll"&&X("scroll",e):s!=null&&wu(e,o,s,l))}switch(n){case"input":Mi(e),Mc(e,r,!1);break;case"textarea":Mi(e),Uc(e);break;case"option":r.value!=null&&e.setAttribute("value",""+un(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?tr(e,!!r.multiple,o,!1):r.defaultValue!=null&&tr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Lo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ee(t),null;case 6:if(e&&t.stateNode!=null)$h(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(b(166));if(n=kn(pi.current),kn(Ot.current),Ki(t)){if(r=t.stateNode,n=t.memoizedProps,r[wt]=t,(o=r.nodeValue!==n)&&(e=Ve,e!==null))switch(e.tag){case 3:Qi(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Qi(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[wt]=t,t.stateNode=r}return Ee(t),null;case 13:if(Z(re),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(te&&We!==null&&t.mode&1&&!(t.flags&128))Jp(),dr(),t.flags|=98560,o=!1;else if(o=Ki(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(b(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(b(317));o[wt]=t}else dr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ee(t),o=!1}else ut!==null&&(zs(ut),ut=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||re.current&1?me===0&&(me=3):nc())),t.updateQueue!==null&&(t.flags|=4),Ee(t),null);case 4:return pr(),Es(e,t),e===null&&ui(t.stateNode.containerInfo),Ee(t),null;case 10:return Mu(t.type._context),Ee(t),null;case 17:return Ue(t.type)&&No(),Ee(t),null;case 19:if(Z(re),o=t.memoizedState,o===null)return Ee(t),null;if(r=(t.flags&128)!==0,l=o.rendering,l===null)if(r)Ir(o,!1);else{if(me!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=Fo(e),l!==null){for(t.flags|=128,Ir(o,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,l=o.alternate,l===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=l.childLanes,o.lanes=l.lanes,o.child=l.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=l.memoizedProps,o.memoizedState=l.memoizedState,o.updateQueue=l.updateQueue,o.type=l.type,e=l.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Y(re,re.current&1|2),t.child}e=e.sibling}o.tail!==null&&se()>mr&&(t.flags|=128,r=!0,Ir(o,!1),t.lanes=4194304)}else{if(!r)if(e=Fo(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Ir(o,!0),o.tail===null&&o.tailMode==="hidden"&&!l.alternate&&!te)return Ee(t),null}else 2*se()-o.renderingStartTime>mr&&n!==1073741824&&(t.flags|=128,r=!0,Ir(o,!1),t.lanes=4194304);o.isBackwards?(l.sibling=t.child,t.child=l):(n=o.last,n!==null?n.sibling=l:t.child=l,o.last=l)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=se(),t.sibling=null,n=re.current,Y(re,r?n&1|2:n&1),t):(Ee(t),null);case 22:case 23:return tc(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?He&1073741824&&(Ee(t),t.subtreeFlags&6&&(t.flags|=8192)):Ee(t),null;case 24:return null;case 25:return null}throw Error(b(156,t.tag))}function Vy(e,t){switch($u(t),t.tag){case 1:return Ue(t.type)&&No(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return pr(),Z(Fe),Z(be),Wu(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Hu(t),null;case 13:if(Z(re),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(b(340));dr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Z(re),null;case 4:return pr(),null;case 10:return Mu(t.type._context),null;case 22:case 23:return tc(),null;case 24:return null;default:return null}}var Xi=!1,je=!1,qy=typeof WeakSet=="function"?WeakSet:Set,N=null;function Jn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){le(e,t,r)}else n.current=null}function js(e,t,n){try{n()}catch(r){le(e,t,r)}}var Rd=!1;function Qy(e,t){if(cs=Po,e=Mp(),Nu(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var l=0,a=-1,s=-1,u=0,f=0,c=e,v=null;t:for(;;){for(var w;c!==n||i!==0&&c.nodeType!==3||(a=l+i),c!==o||r!==0&&c.nodeType!==3||(s=l+r),c.nodeType===3&&(l+=c.nodeValue.length),(w=c.firstChild)!==null;)v=c,c=w;for(;;){if(c===e)break t;if(v===n&&++u===i&&(a=l),v===o&&++f===r&&(s=l),(w=c.nextSibling)!==null)break;c=v,v=c.parentNode}c=w}n=a===-1||s===-1?null:{start:a,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(ds={focusedElem:e,selectionRange:n},Po=!1,N=t;N!==null;)if(t=N,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,N=e;else for(;N!==null;){t=N;try{var m=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(m!==null){var y=m.memoizedProps,S=m.memoizedState,h=t.stateNode,p=h.getSnapshotBeforeUpdate(t.elementType===t.type?y:at(t.type,y),S);h.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var g=t.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(b(163))}}catch(x){le(t,t.return,x)}if(e=t.sibling,e!==null){e.return=t.return,N=e;break}N=t.return}return m=Rd,Rd=!1,m}function Yr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&js(t,n,o)}i=i.next}while(i!==r)}}function Sl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function bs(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Ih(e){var t=e.alternate;t!==null&&(e.alternate=null,Ih(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[wt],delete t[di],delete t[hs],delete t[Py],delete t[Ry])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Ah(e){return e.tag===5||e.tag===3||e.tag===4}function Td(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ah(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ps(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Lo));else if(r!==4&&(e=e.child,e!==null))for(Ps(e,t,n),e=e.sibling;e!==null;)Ps(e,t,n),e=e.sibling}function Rs(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Rs(e,t,n),e=e.sibling;e!==null;)Rs(e,t,n),e=e.sibling}var ke=null,st=!1;function Ft(e,t,n){for(n=n.child;n!==null;)Dh(e,t,n),n=n.sibling}function Dh(e,t,n){if(kt&&typeof kt.onCommitFiberUnmount=="function")try{kt.onCommitFiberUnmount(pl,n)}catch{}switch(n.tag){case 5:je||Jn(n,t);case 6:var r=ke,i=st;ke=null,Ft(e,t,n),ke=r,st=i,ke!==null&&(st?(e=ke,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ke.removeChild(n.stateNode));break;case 18:ke!==null&&(st?(e=ke,n=n.stateNode,e.nodeType===8?pa(e.parentNode,n):e.nodeType===1&&pa(e,n),li(e)):pa(ke,n.stateNode));break;case 4:r=ke,i=st,ke=n.stateNode.containerInfo,st=!0,Ft(e,t,n),ke=r,st=i;break;case 0:case 11:case 14:case 15:if(!je&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,l=o.destroy;o=o.tag,l!==void 0&&(o&2||o&4)&&js(n,t,l),i=i.next}while(i!==r)}Ft(e,t,n);break;case 1:if(!je&&(Jn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){le(n,t,a)}Ft(e,t,n);break;case 21:Ft(e,t,n);break;case 22:n.mode&1?(je=(r=je)||n.memoizedState!==null,Ft(e,t,n),je=r):Ft(e,t,n);break;default:Ft(e,t,n)}}function Ld(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new qy),t.forEach(function(r){var i=n0.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function lt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,l=t,a=l;e:for(;a!==null;){switch(a.tag){case 5:ke=a.stateNode,st=!1;break e;case 3:ke=a.stateNode.containerInfo,st=!0;break e;case 4:ke=a.stateNode.containerInfo,st=!0;break e}a=a.return}if(ke===null)throw Error(b(160));Dh(o,l,i),ke=null,st=!1;var s=i.alternate;s!==null&&(s.return=null),i.return=null}catch(u){le(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Mh(t,e),t=t.sibling}function Mh(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(lt(t,e),vt(e),r&4){try{Yr(3,e,e.return),Sl(3,e)}catch(y){le(e,e.return,y)}try{Yr(5,e,e.return)}catch(y){le(e,e.return,y)}}break;case 1:lt(t,e),vt(e),r&512&&n!==null&&Jn(n,n.return);break;case 5:if(lt(t,e),vt(e),r&512&&n!==null&&Jn(n,n.return),e.flags&32){var i=e.stateNode;try{ni(i,"")}catch(y){le(e,e.return,y)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,l=n!==null?n.memoizedProps:o,a=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&lp(i,o),es(a,l);var u=es(a,o);for(l=0;l<s.length;l+=2){var f=s[l],c=s[l+1];f==="style"?dp(i,c):f==="dangerouslySetInnerHTML"?up(i,c):f==="children"?ni(i,c):wu(i,f,c,u)}switch(a){case"input":Ga(i,o);break;case"textarea":ap(i,o);break;case"select":var v=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var w=o.value;w!=null?tr(i,!!o.multiple,w,!1):v!==!!o.multiple&&(o.defaultValue!=null?tr(i,!!o.multiple,o.defaultValue,!0):tr(i,!!o.multiple,o.multiple?[]:"",!1))}i[di]=o}catch(y){le(e,e.return,y)}}break;case 6:if(lt(t,e),vt(e),r&4){if(e.stateNode===null)throw Error(b(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(y){le(e,e.return,y)}}break;case 3:if(lt(t,e),vt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{li(t.containerInfo)}catch(y){le(e,e.return,y)}break;case 4:lt(t,e),vt(e);break;case 13:lt(t,e),vt(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Zu=se())),r&4&&Ld(e);break;case 22:if(f=n!==null&&n.memoizedState!==null,e.mode&1?(je=(u=je)||f,lt(t,e),je=u):lt(t,e),vt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!f&&e.mode&1)for(N=e,f=e.child;f!==null;){for(c=N=f;N!==null;){switch(v=N,w=v.child,v.tag){case 0:case 11:case 14:case 15:Yr(4,v,v.return);break;case 1:Jn(v,v.return);var m=v.stateNode;if(typeof m.componentWillUnmount=="function"){r=v,n=v.return;try{t=r,m.props=t.memoizedProps,m.state=t.memoizedState,m.componentWillUnmount()}catch(y){le(r,n,y)}}break;case 5:Jn(v,v.return);break;case 22:if(v.memoizedState!==null){zd(c);continue}}w!==null?(w.return=v,N=w):zd(c)}f=f.sibling}e:for(f=null,c=e;;){if(c.tag===5){if(f===null){f=c;try{i=c.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=c.stateNode,s=c.memoizedProps.style,l=s!=null&&s.hasOwnProperty("display")?s.display:null,a.style.display=cp("display",l))}catch(y){le(e,e.return,y)}}}else if(c.tag===6){if(f===null)try{c.stateNode.nodeValue=u?"":c.memoizedProps}catch(y){le(e,e.return,y)}}else if((c.tag!==22&&c.tag!==23||c.memoizedState===null||c===e)&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===e)break e;for(;c.sibling===null;){if(c.return===null||c.return===e)break e;f===c&&(f=null),c=c.return}f===c&&(f=null),c.sibling.return=c.return,c=c.sibling}}break;case 19:lt(t,e),vt(e),r&4&&Ld(e);break;case 21:break;default:lt(t,e),vt(e)}}function vt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Ah(n)){var r=n;break e}n=n.return}throw Error(b(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ni(i,""),r.flags&=-33);var o=Td(e);Rs(e,o,i);break;case 3:case 4:var l=r.stateNode.containerInfo,a=Td(e);Ps(e,a,l);break;default:throw Error(b(161))}}catch(s){le(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Ky(e,t,n){N=e,Fh(e)}function Fh(e,t,n){for(var r=(e.mode&1)!==0;N!==null;){var i=N,o=i.child;if(i.tag===22&&r){var l=i.memoizedState!==null||Xi;if(!l){var a=i.alternate,s=a!==null&&a.memoizedState!==null||je;a=Xi;var u=je;if(Xi=l,(je=s)&&!u)for(N=i;N!==null;)l=N,s=l.child,l.tag===22&&l.memoizedState!==null?$d(i):s!==null?(s.return=l,N=s):$d(i);for(;o!==null;)N=o,Fh(o),o=o.sibling;N=i,Xi=a,je=u}Nd(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,N=o):Nd(e)}}function Nd(e){for(;N!==null;){var t=N;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:je||Sl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!je)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:at(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&gd(t,o,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}gd(t,l,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var c=f.dehydrated;c!==null&&li(c)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(b(163))}je||t.flags&512&&bs(t)}catch(v){le(t,t.return,v)}}if(t===e){N=null;break}if(n=t.sibling,n!==null){n.return=t.return,N=n;break}N=t.return}}function zd(e){for(;N!==null;){var t=N;if(t===e){N=null;break}var n=t.sibling;if(n!==null){n.return=t.return,N=n;break}N=t.return}}function $d(e){for(;N!==null;){var t=N;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Sl(4,t)}catch(s){le(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(s){le(t,i,s)}}var o=t.return;try{bs(t)}catch(s){le(t,o,s)}break;case 5:var l=t.return;try{bs(t)}catch(s){le(t,l,s)}}}catch(s){le(t,t.return,s)}if(t===e){N=null;break}var a=t.sibling;if(a!==null){a.return=t.return,N=a;break}N=t.return}}var Gy=Math.ceil,Ho=Dt.ReactCurrentDispatcher,Xu=Dt.ReactCurrentOwner,tt=Dt.ReactCurrentBatchConfig,q=0,Se=null,de=null,Oe=0,He=0,Zn=fn(0),me=0,vi=null,Tn=0,kl=0,Ju=0,Xr=null,De=null,Zu=0,mr=1/0,Et=null,Wo=!1,Ts=null,nn=null,Ji=!1,Gt=null,Vo=0,Jr=0,Ls=null,po=-1,ho=0;function Le(){return q&6?se():po!==-1?po:po=se()}function rn(e){return e.mode&1?q&2&&Oe!==0?Oe&-Oe:Ly.transition!==null?(ho===0&&(ho=Op()),ho):(e=G,e!==0||(e=window.event,e=e===void 0?16:Rp(e.type)),e):1}function ft(e,t,n,r){if(50<Jr)throw Jr=0,Ls=null,Error(b(185));ji(e,n,r),(!(q&2)||e!==Se)&&(e===Se&&(!(q&2)&&(kl|=n),me===4&&Qt(e,Oe)),Be(e,r),n===1&&q===0&&!(t.mode&1)&&(mr=se()+500,yl&&pn()))}function Be(e,t){var n=e.callbackNode;Lv(e,t);var r=bo(e,e===Se?Oe:0);if(r===0)n!==null&&Wc(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Wc(n),t===1)e.tag===0?Ty(Id.bind(null,e)):Gp(Id.bind(null,e)),jy(function(){!(q&6)&&pn()}),n=null;else{switch(Cp(r)){case 1:n=_u;break;case 4:n=Sp;break;case 16:n=jo;break;case 536870912:n=kp;break;default:n=jo}n=Kh(n,Uh.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Uh(e,t){if(po=-1,ho=0,q&6)throw Error(b(327));var n=e.callbackNode;if(lr()&&e.callbackNode!==n)return null;var r=bo(e,e===Se?Oe:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=qo(e,r);else{t=r;var i=q;q|=2;var o=Hh();(Se!==e||Oe!==t)&&(Et=null,mr=se()+500,Cn(e,t));do try{Jy();break}catch(a){Bh(e,a)}while(1);Du(),Ho.current=o,q=i,de!==null?t=0:(Se=null,Oe=0,t=me)}if(t!==0){if(t===2&&(i=os(e),i!==0&&(r=i,t=Ns(e,i))),t===1)throw n=vi,Cn(e,0),Qt(e,r),Be(e,se()),n;if(t===6)Qt(e,r);else{if(i=e.current.alternate,!(r&30)&&!Yy(i)&&(t=qo(e,r),t===2&&(o=os(e),o!==0&&(r=o,t=Ns(e,o))),t===1))throw n=vi,Cn(e,0),Qt(e,r),Be(e,se()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(b(345));case 2:xn(e,De,Et);break;case 3:if(Qt(e,r),(r&130023424)===r&&(t=Zu+500-se(),10<t)){if(bo(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Le(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=ps(xn.bind(null,e,De,Et),t);break}xn(e,De,Et);break;case 4:if(Qt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var l=31-dt(r);o=1<<l,l=t[l],l>i&&(i=l),r&=~o}if(r=i,r=se()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Gy(r/1960))-r,10<r){e.timeoutHandle=ps(xn.bind(null,e,De,Et),r);break}xn(e,De,Et);break;case 5:xn(e,De,Et);break;default:throw Error(b(329))}}}return Be(e,se()),e.callbackNode===n?Uh.bind(null,e):null}function Ns(e,t){var n=Xr;return e.current.memoizedState.isDehydrated&&(Cn(e,t).flags|=256),e=qo(e,t),e!==2&&(t=De,De=n,t!==null&&zs(t)),e}function zs(e){De===null?De=e:De.push.apply(De,e)}function Yy(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!ht(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Qt(e,t){for(t&=~Ju,t&=~kl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-dt(t),r=1<<n;e[n]=-1,t&=~r}}function Id(e){if(q&6)throw Error(b(327));lr();var t=bo(e,0);if(!(t&1))return Be(e,se()),null;var n=qo(e,t);if(e.tag!==0&&n===2){var r=os(e);r!==0&&(t=r,n=Ns(e,r))}if(n===1)throw n=vi,Cn(e,0),Qt(e,t),Be(e,se()),n;if(n===6)throw Error(b(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,xn(e,De,Et),Be(e,se()),null}function ec(e,t){var n=q;q|=1;try{return e(t)}finally{q=n,q===0&&(mr=se()+500,yl&&pn())}}function Ln(e){Gt!==null&&Gt.tag===0&&!(q&6)&&lr();var t=q;q|=1;var n=tt.transition,r=G;try{if(tt.transition=null,G=1,e)return e()}finally{G=r,tt.transition=n,q=t,!(q&6)&&pn()}}function tc(){He=Zn.current,Z(Zn)}function Cn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Ey(n)),de!==null)for(n=de.return;n!==null;){var r=n;switch($u(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&No();break;case 3:pr(),Z(Fe),Z(be),Wu();break;case 5:Hu(r);break;case 4:pr();break;case 13:Z(re);break;case 19:Z(re);break;case 10:Mu(r.type._context);break;case 22:case 23:tc()}n=n.return}if(Se=e,de=e=on(e.current,null),Oe=He=t,me=0,vi=null,Ju=kl=Tn=0,De=Xr=null,Sn!==null){for(t=0;t<Sn.length;t++)if(n=Sn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var l=o.next;o.next=i,r.next=l}n.pending=r}Sn=null}return e}function Bh(e,t){do{var n=de;try{if(Du(),uo.current=Bo,Uo){for(var r=ie.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Uo=!1}if(Rn=0,ve=he=ie=null,Gr=!1,hi=0,Xu.current=null,n===null||n.return===null){me=1,vi=t,de=null;break}e:{var o=e,l=n.return,a=n,s=t;if(t=Oe,a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,f=a,c=f.tag;if(!(f.mode&1)&&(c===0||c===11||c===15)){var v=f.alternate;v?(f.updateQueue=v.updateQueue,f.memoizedState=v.memoizedState,f.lanes=v.lanes):(f.updateQueue=null,f.memoizedState=null)}var w=Od(l);if(w!==null){w.flags&=-257,Cd(w,l,a,o,t),w.mode&1&&kd(o,u,t),t=w,s=u;var m=t.updateQueue;if(m===null){var y=new Set;y.add(s),t.updateQueue=y}else m.add(s);break e}else{if(!(t&1)){kd(o,u,t),nc();break e}s=Error(b(426))}}else if(te&&a.mode&1){var S=Od(l);if(S!==null){!(S.flags&65536)&&(S.flags|=256),Cd(S,l,a,o,t),Iu(hr(s,a));break e}}o=s=hr(s,a),me!==4&&(me=2),Xr===null?Xr=[o]:Xr.push(o),o=l;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var h=_h(o,s,t);md(o,h);break e;case 1:a=s;var p=o.type,g=o.stateNode;if(!(o.flags&128)&&(typeof p.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(nn===null||!nn.has(g)))){o.flags|=65536,t&=-t,o.lanes|=t;var x=Eh(o,a,t);md(o,x);break e}}o=o.return}while(o!==null)}Vh(n)}catch(O){t=O,de===n&&n!==null&&(de=n=n.return);continue}break}while(1)}function Hh(){var e=Ho.current;return Ho.current=Bo,e===null?Bo:e}function nc(){(me===0||me===3||me===2)&&(me=4),Se===null||!(Tn&268435455)&&!(kl&268435455)||Qt(Se,Oe)}function qo(e,t){var n=q;q|=2;var r=Hh();(Se!==e||Oe!==t)&&(Et=null,Cn(e,t));do try{Xy();break}catch(i){Bh(e,i)}while(1);if(Du(),q=n,Ho.current=r,de!==null)throw Error(b(261));return Se=null,Oe=0,me}function Xy(){for(;de!==null;)Wh(de)}function Jy(){for(;de!==null&&!Ov();)Wh(de)}function Wh(e){var t=Qh(e.alternate,e,He);e.memoizedProps=e.pendingProps,t===null?Vh(e):de=t,Xu.current=null}function Vh(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Vy(n,t),n!==null){n.flags&=32767,de=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{me=6,de=null;return}}else if(n=Wy(n,t,He),n!==null){de=n;return}if(t=t.sibling,t!==null){de=t;return}de=t=e}while(t!==null);me===0&&(me=5)}function xn(e,t,n){var r=G,i=tt.transition;try{tt.transition=null,G=1,Zy(e,t,n,r)}finally{tt.transition=i,G=r}return null}function Zy(e,t,n,r){do lr();while(Gt!==null);if(q&6)throw Error(b(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(b(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Nv(e,o),e===Se&&(de=Se=null,Oe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ji||(Ji=!0,Kh(jo,function(){return lr(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=tt.transition,tt.transition=null;var l=G;G=1;var a=q;q|=4,Xu.current=null,Qy(e,n),Mh(n,e),xy(ds),Po=!!cs,ds=cs=null,e.current=n,Ky(n),Cv(),q=a,G=l,tt.transition=o}else e.current=n;if(Ji&&(Ji=!1,Gt=e,Vo=i),o=e.pendingLanes,o===0&&(nn=null),jv(n.stateNode),Be(e,se()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Wo)throw Wo=!1,e=Ts,Ts=null,e;return Vo&1&&e.tag!==0&&lr(),o=e.pendingLanes,o&1?e===Ls?Jr++:(Jr=0,Ls=e):Jr=0,pn(),null}function lr(){if(Gt!==null){var e=Cp(Vo),t=tt.transition,n=G;try{if(tt.transition=null,G=16>e?16:e,Gt===null)var r=!1;else{if(e=Gt,Gt=null,Vo=0,q&6)throw Error(b(331));var i=q;for(q|=4,N=e.current;N!==null;){var o=N,l=o.child;if(N.flags&16){var a=o.deletions;if(a!==null){for(var s=0;s<a.length;s++){var u=a[s];for(N=u;N!==null;){var f=N;switch(f.tag){case 0:case 11:case 15:Yr(8,f,o)}var c=f.child;if(c!==null)c.return=f,N=c;else for(;N!==null;){f=N;var v=f.sibling,w=f.return;if(Ih(f),f===u){N=null;break}if(v!==null){v.return=w,N=v;break}N=w}}}var m=o.alternate;if(m!==null){var y=m.child;if(y!==null){m.child=null;do{var S=y.sibling;y.sibling=null,y=S}while(y!==null)}}N=o}}if(o.subtreeFlags&2064&&l!==null)l.return=o,N=l;else e:for(;N!==null;){if(o=N,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Yr(9,o,o.return)}var h=o.sibling;if(h!==null){h.return=o.return,N=h;break e}N=o.return}}var p=e.current;for(N=p;N!==null;){l=N;var g=l.child;if(l.subtreeFlags&2064&&g!==null)g.return=l,N=g;else e:for(l=p;N!==null;){if(a=N,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Sl(9,a)}}catch(O){le(a,a.return,O)}if(a===l){N=null;break e}var x=a.sibling;if(x!==null){x.return=a.return,N=x;break e}N=a.return}}if(q=i,pn(),kt&&typeof kt.onPostCommitFiberRoot=="function")try{kt.onPostCommitFiberRoot(pl,e)}catch{}r=!0}return r}finally{G=n,tt.transition=t}}return!1}function Ad(e,t,n){t=hr(n,t),t=_h(e,t,1),e=tn(e,t,1),t=Le(),e!==null&&(ji(e,1,t),Be(e,t))}function le(e,t,n){if(e.tag===3)Ad(e,e,n);else for(;t!==null;){if(t.tag===3){Ad(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(nn===null||!nn.has(r))){e=hr(n,e),e=Eh(t,e,1),t=tn(t,e,1),e=Le(),t!==null&&(ji(t,1,e),Be(t,e));break}}t=t.return}}function e0(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Le(),e.pingedLanes|=e.suspendedLanes&n,Se===e&&(Oe&n)===n&&(me===4||me===3&&(Oe&130023424)===Oe&&500>se()-Zu?Cn(e,0):Ju|=n),Be(e,t)}function qh(e,t){t===0&&(e.mode&1?(t=Bi,Bi<<=1,!(Bi&130023424)&&(Bi=4194304)):t=1);var n=Le();e=$t(e,t),e!==null&&(ji(e,t,n),Be(e,n))}function t0(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),qh(e,n)}function n0(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(b(314))}r!==null&&r.delete(t),qh(e,n)}var Qh;Qh=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Fe.current)Me=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Me=!1,Hy(e,t,n);Me=!!(e.flags&131072)}else Me=!1,te&&t.flags&1048576&&Yp(t,Io,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;fo(e,t),e=t.pendingProps;var i=cr(t,be.current);or(t,n),i=qu(null,t,r,e,i,n);var o=Qu();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ue(r)?(o=!0,zo(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Uu(t),i.updater=xl,t.stateNode=i,i._reactInternals=t,ws(t,r,e,n),t=Os(null,t,r,!0,o,n)):(t.tag=0,te&&o&&zu(t),Te(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(fo(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=i0(r),e=at(r,e),i){case 0:t=ks(null,t,r,e,n);break e;case 1:t=jd(null,t,r,e,n);break e;case 11:t=_d(null,t,r,e,n);break e;case 14:t=Ed(null,t,r,at(r.type,e),n);break e}throw Error(b(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:at(r,i),ks(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:at(r,i),jd(e,t,r,i,n);case 3:e:{if(Rh(t),e===null)throw Error(b(387));r=t.pendingProps,o=t.memoizedState,i=o.element,eh(e,t),Mo(t,r,null,n);var l=t.memoizedState;if(r=l.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=hr(Error(b(423)),t),t=bd(e,t,r,n,i);break e}else if(r!==i){i=hr(Error(b(424)),t),t=bd(e,t,r,n,i);break e}else for(We=en(t.stateNode.containerInfo.firstChild),Ve=t,te=!0,ut=null,n=ih(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(dr(),r===i){t=It(e,t,n);break e}Te(e,t,r,n)}t=t.child}return t;case 5:return oh(t),e===null&&vs(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,l=i.children,fs(r,i)?l=null:o!==null&&fs(r,o)&&(t.flags|=32),Ph(e,t),Te(e,t,l,n),t.child;case 6:return e===null&&vs(t),null;case 13:return Th(e,t,n);case 4:return Bu(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=fr(t,null,r,n):Te(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:at(r,i),_d(e,t,r,i,n);case 7:return Te(e,t,t.pendingProps,n),t.child;case 8:return Te(e,t,t.pendingProps.children,n),t.child;case 12:return Te(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,l=i.value,Y(Ao,r._currentValue),r._currentValue=l,o!==null)if(ht(o.value,l)){if(o.children===i.children&&!Fe.current){t=It(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var a=o.dependencies;if(a!==null){l=o.child;for(var s=a.firstContext;s!==null;){if(s.context===r){if(o.tag===1){s=Tt(-1,n&-n),s.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?s.next=s:(s.next=f.next,f.next=s),u.pending=s}}o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),ys(o.return,n,t),a.lanes|=n;break}s=s.next}}else if(o.tag===10)l=o.type===t.type?null:o.child;else if(o.tag===18){if(l=o.return,l===null)throw Error(b(341));l.lanes|=n,a=l.alternate,a!==null&&(a.lanes|=n),ys(l,n,t),l=o.sibling}else l=o.child;if(l!==null)l.return=o;else for(l=o;l!==null;){if(l===t){l=null;break}if(o=l.sibling,o!==null){o.return=l.return,l=o;break}l=l.return}o=l}Te(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,or(t,n),i=rt(i),r=r(i),t.flags|=1,Te(e,t,r,n),t.child;case 14:return r=t.type,i=at(r,t.pendingProps),i=at(r.type,i),Ed(e,t,r,i,n);case 15:return jh(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:at(r,i),fo(e,t),t.tag=1,Ue(r)?(e=!0,zo(t)):e=!1,or(t,n),nh(t,r,i),ws(t,r,i,n),Os(null,t,r,!0,e,n);case 19:return Lh(e,t,n);case 22:return bh(e,t,n)}throw Error(b(156,t.tag))};function Kh(e,t){return wp(e,t)}function r0(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function et(e,t,n,r){return new r0(e,t,n,r)}function rc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function i0(e){if(typeof e=="function")return rc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ku)return 11;if(e===Ou)return 14}return 2}function on(e,t){var n=e.alternate;return n===null?(n=et(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function mo(e,t,n,r,i,o){var l=2;if(r=e,typeof e=="function")rc(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case Hn:return _n(n.children,i,o,t);case Su:l=8,i|=8;break;case Wa:return e=et(12,n,t,i|2),e.elementType=Wa,e.lanes=o,e;case Va:return e=et(13,n,t,i),e.elementType=Va,e.lanes=o,e;case qa:return e=et(19,n,t,i),e.elementType=qa,e.lanes=o,e;case rp:return Ol(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case tp:l=10;break e;case np:l=9;break e;case ku:l=11;break e;case Ou:l=14;break e;case Ht:l=16,r=null;break e}throw Error(b(130,e==null?e:typeof e,""))}return t=et(l,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function _n(e,t,n,r){return e=et(7,e,r,t),e.lanes=n,e}function Ol(e,t,n,r){return e=et(22,e,r,t),e.elementType=rp,e.lanes=n,e.stateNode={isHidden:!1},e}function Sa(e,t,n){return e=et(6,e,null,t),e.lanes=n,e}function ka(e,t,n){return t=et(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function o0(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=na(0),this.expirationTimes=na(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=na(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function ic(e,t,n,r,i,o,l,a,s){return e=new o0(e,t,n,a,s),t===1?(t=1,o===!0&&(t|=8)):t=0,o=et(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Uu(o),e}function l0(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Bn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Gh(e){if(!e)return cn;e=e._reactInternals;e:{if(In(e)!==e||e.tag!==1)throw Error(b(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ue(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(b(171))}if(e.tag===1){var n=e.type;if(Ue(n))return Kp(e,n,t)}return t}function Yh(e,t,n,r,i,o,l,a,s){return e=ic(n,r,!0,e,i,o,l,a,s),e.context=Gh(null),n=e.current,r=Le(),i=rn(n),o=Tt(r,i),o.callback=t??null,tn(n,o,i),e.current.lanes=i,ji(e,i,r),Be(e,r),e}function Cl(e,t,n,r){var i=t.current,o=Le(),l=rn(i);return n=Gh(n),t.context===null?t.context=n:t.pendingContext=n,t=Tt(o,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=tn(i,t,l),e!==null&&(ft(e,i,l,o),so(e,i,l)),l}function Qo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Dd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function oc(e,t){Dd(e,t),(e=e.alternate)&&Dd(e,t)}function a0(){return null}var Xh=typeof reportError=="function"?reportError:function(e){console.error(e)};function lc(e){this._internalRoot=e}_l.prototype.render=lc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(b(409));Cl(e,t,null,null)};_l.prototype.unmount=lc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Ln(function(){Cl(null,e,null,null)}),t[zt]=null}};function _l(e){this._internalRoot=e}_l.prototype.unstable_scheduleHydration=function(e){if(e){var t=jp();e={blockedOn:null,target:e,priority:t};for(var n=0;n<qt.length&&t!==0&&t<qt[n].priority;n++);qt.splice(n,0,e),n===0&&Pp(e)}};function ac(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function El(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Md(){}function s0(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=Qo(l);o.call(u)}}var l=Yh(t,r,e,0,null,!1,!1,"",Md);return e._reactRootContainer=l,e[zt]=l.current,ui(e.nodeType===8?e.parentNode:e),Ln(),l}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Qo(s);a.call(u)}}var s=ic(e,0,!1,null,null,!1,!1,"",Md);return e._reactRootContainer=s,e[zt]=s.current,ui(e.nodeType===8?e.parentNode:e),Ln(function(){Cl(t,s,n,r)}),s}function jl(e,t,n,r,i){var o=n._reactRootContainer;if(o){var l=o;if(typeof i=="function"){var a=i;i=function(){var s=Qo(l);a.call(s)}}Cl(t,l,e,i)}else l=s0(n,t,e,i,r);return Qo(l)}_p=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Ur(t.pendingLanes);n!==0&&(Eu(t,n|1),Be(t,se()),!(q&6)&&(mr=se()+500,pn()))}break;case 13:Ln(function(){var r=$t(e,1);if(r!==null){var i=Le();ft(r,e,1,i)}}),oc(e,1)}};ju=function(e){if(e.tag===13){var t=$t(e,134217728);if(t!==null){var n=Le();ft(t,e,134217728,n)}oc(e,134217728)}};Ep=function(e){if(e.tag===13){var t=rn(e),n=$t(e,t);if(n!==null){var r=Le();ft(n,e,t,r)}oc(e,t)}};jp=function(){return G};bp=function(e,t){var n=G;try{return G=e,t()}finally{G=n}};ns=function(e,t,n){switch(t){case"input":if(Ga(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=vl(r);if(!i)throw Error(b(90));op(r),Ga(r,i)}}}break;case"textarea":ap(e,n);break;case"select":t=n.value,t!=null&&tr(e,!!n.multiple,t,!1)}};hp=ec;mp=Ln;var u0={usingClientEntryPoint:!1,Events:[Pi,Qn,vl,fp,pp,ec]},Ar={findFiberByHostInstance:wn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},c0={bundleType:Ar.bundleType,version:Ar.version,rendererPackageName:Ar.rendererPackageName,rendererConfig:Ar.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Dt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=yp(e),e===null?null:e.stateNode},findFiberByHostInstance:Ar.findFiberByHostInstance||a0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Zi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Zi.isDisabled&&Zi.supportsFiber)try{pl=Zi.inject(c0),kt=Zi}catch{}}Qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=u0;Qe.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ac(t))throw Error(b(200));return l0(e,t,null,n)};Qe.createRoot=function(e,t){if(!ac(e))throw Error(b(299));var n=!1,r="",i=Xh;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=ic(e,1,!1,null,null,n,!1,r,i),e[zt]=t.current,ui(e.nodeType===8?e.parentNode:e),new lc(t)};Qe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(b(188)):(e=Object.keys(e).join(","),Error(b(268,e)));return e=yp(t),e=e===null?null:e.stateNode,e};Qe.flushSync=function(e){return Ln(e)};Qe.hydrate=function(e,t,n){if(!El(t))throw Error(b(200));return jl(null,e,t,!0,n)};Qe.hydrateRoot=function(e,t,n){if(!ac(e))throw Error(b(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",l=Xh;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=Yh(t,null,e,1,n??null,i,!1,o,l),e[zt]=t.current,ui(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new _l(t)};Qe.render=function(e,t,n){if(!El(t))throw Error(b(200));return jl(null,e,t,!1,n)};Qe.unmountComponentAtNode=function(e){if(!El(e))throw Error(b(40));return e._reactRootContainer?(Ln(function(){jl(null,null,e,!1,function(){e._reactRootContainer=null,e[zt]=null})}),!0):!1};Qe.unstable_batchedUpdates=ec;Qe.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!El(n))throw Error(b(200));if(e==null||e._reactInternals===void 0)throw Error(b(38));return jl(e,t,n,!1,r)};Qe.version="18.2.0-next-9e3b772b8-20220608";function Jh(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Jh)}catch(e){console.error(e)}}Jh(),Yf.exports=Qe;var d0=Yf.exports,Fd=d0;Ba.createRoot=Fd.createRoot,Ba.hydrateRoot=Fd.hydrateRoot;const f0={COLORS:{Dark_Dark_400:"#000A0F",Dark_Dark_900:"#0D1D25",Dark_dark_700:"#001119",dark_dark_600:"#00111A",dark_dark_900:"#0D1D25",dark_dark_800:"#0D161B",Light_Light_100:"#FFFFFF",Light_Light_400:"#C4C4CC",light_light_300:" #E1E1E6",light_light_500:"#7C7C8A",light_light_600:"#76797B",light_light_700:"#4D585E",Tints_Tomato_100:"#750310",Tints_Tomato_400:"#AB4D55"}};var xe=function(){return xe=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},xe.apply(this,arguments)};function yi(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))}var J="-ms-",Zr="-moz-",Q="-webkit-",Zh="comm",bl="rule",sc="decl",p0="@import",em="@keyframes",h0="@layer",m0=Math.abs,uc=String.fromCharCode,$s=Object.assign;function g0(e,t){return ye(e,0)^45?(((t<<2^ye(e,0))<<2^ye(e,1))<<2^ye(e,2))<<2^ye(e,3):0}function tm(e){return e.trim()}function jt(e,t){return(e=t.exec(e))?e[0]:e}function F(e,t,n){return e.replace(t,n)}function go(e,t){return e.indexOf(t)}function ye(e,t){return e.charCodeAt(t)|0}function gr(e,t,n){return e.slice(t,n)}function xt(e){return e.length}function nm(e){return e.length}function Hr(e,t){return t.push(e),e}function v0(e,t){return e.map(t).join("")}function Ud(e,t){return e.filter(function(n){return!jt(n,t)})}var Pl=1,vr=1,rm=0,ot=0,ce=0,Er="";function Rl(e,t,n,r,i,o,l,a){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:Pl,column:vr,length:l,return:"",siblings:a}}function Bt(e,t){return $s(Rl("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Mn(e){for(;e.root;)e=Bt(e.root,{children:[e]});Hr(e,e.siblings)}function y0(){return ce}function x0(){return ce=ot>0?ye(Er,--ot):0,vr--,ce===10&&(vr=1,Pl--),ce}function pt(){return ce=ot<rm?ye(Er,ot++):0,vr++,ce===10&&(vr=1,Pl++),ce}function En(){return ye(Er,ot)}function vo(){return ot}function Tl(e,t){return gr(Er,e,t)}function Is(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function w0(e){return Pl=vr=1,rm=xt(Er=e),ot=0,[]}function S0(e){return Er="",e}function Oa(e){return tm(Tl(ot-1,As(e===91?e+2:e===40?e+1:e)))}function k0(e){for(;(ce=En())&&ce<33;)pt();return Is(e)>2||Is(ce)>3?"":" "}function O0(e,t){for(;--t&&pt()&&!(ce<48||ce>102||ce>57&&ce<65||ce>70&&ce<97););return Tl(e,vo()+(t<6&&En()==32&&pt()==32))}function As(e){for(;pt();)switch(ce){case e:return ot;case 34:case 39:e!==34&&e!==39&&As(ce);break;case 40:e===41&&As(e);break;case 92:pt();break}return ot}function C0(e,t){for(;pt()&&e+ce!==47+10;)if(e+ce===42+42&&En()===47)break;return"/*"+Tl(t,ot-1)+"*"+uc(e===47?e:pt())}function _0(e){for(;!Is(En());)pt();return Tl(e,ot)}function E0(e){return S0(yo("",null,null,null,[""],e=w0(e),0,[0],e))}function yo(e,t,n,r,i,o,l,a,s){for(var u=0,f=0,c=l,v=0,w=0,m=0,y=1,S=1,h=1,p=0,g="",x=i,O=o,k=r,E=g;S;)switch(m=p,p=pt()){case 40:if(m!=108&&ye(E,c-1)==58){go(E+=F(Oa(p),"&","&\f"),"&\f")!=-1&&(h=-1);break}case 34:case 39:case 91:E+=Oa(p);break;case 9:case 10:case 13:case 32:E+=k0(m);break;case 92:E+=O0(vo()-1,7);continue;case 47:switch(En()){case 42:case 47:Hr(j0(C0(pt(),vo()),t,n,s),s);break;default:E+="/"}break;case 123*y:a[u++]=xt(E)*h;case 125*y:case 59:case 0:switch(p){case 0:case 125:S=0;case 59+f:h==-1&&(E=F(E,/\f/g,"")),w>0&&xt(E)-c&&Hr(w>32?Hd(E+";",r,n,c-1,s):Hd(F(E," ","")+";",r,n,c-2,s),s);break;case 59:E+=";";default:if(Hr(k=Bd(E,t,n,u,f,i,a,g,x=[],O=[],c,o),o),p===123)if(f===0)yo(E,t,k,k,x,o,c,a,O);else switch(v===99&&ye(E,3)===110?100:v){case 100:case 108:case 109:case 115:yo(e,k,k,r&&Hr(Bd(e,k,k,0,0,i,a,g,i,x=[],c,O),O),i,O,c,a,r?x:O);break;default:yo(E,k,k,k,[""],O,0,a,O)}}u=f=w=0,y=h=1,g=E="",c=l;break;case 58:c=1+xt(E),w=m;default:if(y<1){if(p==123)--y;else if(p==125&&y++==0&&x0()==125)continue}switch(E+=uc(p),p*y){case 38:h=f>0?1:(E+="\f",-1);break;case 44:a[u++]=(xt(E)-1)*h,h=1;break;case 64:En()===45&&(E+=Oa(pt())),v=En(),f=c=xt(g=E+=_0(vo())),p++;break;case 45:m===45&&xt(E)==2&&(y=0)}}return o}function Bd(e,t,n,r,i,o,l,a,s,u,f,c){for(var v=i-1,w=i===0?o:[""],m=nm(w),y=0,S=0,h=0;y<r;++y)for(var p=0,g=gr(e,v+1,v=m0(S=l[y])),x=e;p<m;++p)(x=tm(S>0?w[p]+" "+g:F(g,/&\f/g,w[p])))&&(s[h++]=x);return Rl(e,t,n,i===0?bl:a,s,u,f,c)}function j0(e,t,n,r){return Rl(e,t,n,Zh,uc(y0()),gr(e,2,-2),0,r)}function Hd(e,t,n,r,i){return Rl(e,t,n,sc,gr(e,0,r),gr(e,r+1,-1),r,i)}function im(e,t,n){switch(g0(e,t)){case 5103:return Q+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Q+e+e;case 4789:return Zr+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return Q+e+Zr+e+J+e+e;case 5936:switch(ye(e,t+11)){case 114:return Q+e+J+F(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return Q+e+J+F(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return Q+e+J+F(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return Q+e+J+e+e;case 6165:return Q+e+J+"flex-"+e+e;case 5187:return Q+e+F(e,/(\w+).+(:[^]+)/,Q+"box-$1$2"+J+"flex-$1$2")+e;case 5443:return Q+e+J+"flex-item-"+F(e,/flex-|-self/g,"")+(jt(e,/flex-|baseline/)?"":J+"grid-row-"+F(e,/flex-|-self/g,""))+e;case 4675:return Q+e+J+"flex-line-pack"+F(e,/align-content|flex-|-self/g,"")+e;case 5548:return Q+e+J+F(e,"shrink","negative")+e;case 5292:return Q+e+J+F(e,"basis","preferred-size")+e;case 6060:return Q+"box-"+F(e,"-grow","")+Q+e+J+F(e,"grow","positive")+e;case 4554:return Q+F(e,/([^-])(transform)/g,"$1"+Q+"$2")+e;case 6187:return F(F(F(e,/(zoom-|grab)/,Q+"$1"),/(image-set)/,Q+"$1"),e,"")+e;case 5495:case 3959:return F(e,/(image-set\([^]*)/,Q+"$1$`$1");case 4968:return F(F(e,/(.+:)(flex-)?(.*)/,Q+"box-pack:$3"+J+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Q+e+e;case 4200:if(!jt(e,/flex-|baseline/))return J+"grid-column-align"+gr(e,t)+e;break;case 2592:case 3360:return J+F(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,jt(r.props,/grid-\w+-end/)})?~go(e+(n=n[t].value),"span")?e:J+F(e,"-start","")+e+J+"grid-row-span:"+(~go(n,"span")?jt(n,/\d+/):+jt(n,/\d+/)-+jt(e,/\d+/))+";":J+F(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return jt(r.props,/grid-\w+-start/)})?e:J+F(F(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return F(e,/(.+)-inline(.+)/,Q+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(xt(e)-1-t>6)switch(ye(e,t+1)){case 109:if(ye(e,t+4)!==45)break;case 102:return F(e,/(.+:)(.+)-([^]+)/,"$1"+Q+"$2-$3$1"+Zr+(ye(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~go(e,"stretch")?im(F(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return F(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,o,l,a,s,u){return J+i+":"+o+u+(l?J+i+"-span:"+(a?s:+s-+o)+u:"")+e});case 4949:if(ye(e,t+6)===121)return F(e,":",":"+Q)+e;break;case 6444:switch(ye(e,ye(e,14)===45?18:11)){case 120:return F(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Q+(ye(e,14)===45?"inline-":"")+"box$3$1"+Q+"$2$3$1"+J+"$2box$3")+e;case 100:return F(e,":",":"+J)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return F(e,"scroll-","scroll-snap-")+e}return e}function Ko(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function b0(e,t,n,r){switch(e.type){case h0:if(e.children.length)break;case p0:case sc:return e.return=e.return||e.value;case Zh:return"";case em:return e.return=e.value+"{"+Ko(e.children,r)+"}";case bl:if(!xt(e.value=e.props.join(",")))return""}return xt(n=Ko(e.children,r))?e.return=e.value+"{"+n+"}":""}function P0(e){var t=nm(e);return function(n,r,i,o){for(var l="",a=0;a<t;a++)l+=e[a](n,r,i,o)||"";return l}}function R0(e){return function(t){t.root||(t=t.return)&&e(t)}}function T0(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case sc:e.return=im(e.value,e.length,n);return;case em:return Ko([Bt(e,{value:F(e.value,"@","@"+Q)})],r);case bl:if(e.length)return v0(n=e.props,function(i){switch(jt(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Mn(Bt(e,{props:[F(i,/:(read-\w+)/,":"+Zr+"$1")]})),Mn(Bt(e,{props:[i]})),$s(e,{props:Ud(n,r)});break;case"::placeholder":Mn(Bt(e,{props:[F(i,/:(plac\w+)/,":"+Q+"input-$1")]})),Mn(Bt(e,{props:[F(i,/:(plac\w+)/,":"+Zr+"$1")]})),Mn(Bt(e,{props:[F(i,/:(plac\w+)/,J+"input-$1")]})),Mn(Bt(e,{props:[i]})),$s(e,{props:Ud(n,r)});break}return""})}}var L0={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},yr=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",om="active",lm="data-styled-version",Ll="6.1.3",cc=`/*!sc*/
`,dc=typeof window<"u"&&"HTMLElement"in window,N0=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY),z0={},Nl=Object.freeze([]),xr=Object.freeze({});function am(e,t,n){return n===void 0&&(n=xr),e.theme!==n.theme&&e.theme||t||n.theme}var sm=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),$0=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,I0=/(^-|-$)/g;function Wd(e){return e.replace($0,"-").replace(I0,"")}var A0=/(a)(d)/gi,eo=52,Vd=function(e){return String.fromCharCode(e+(e>25?39:97))};function Ds(e){var t,n="";for(t=Math.abs(e);t>eo;t=t/eo|0)n=Vd(t%eo)+n;return(Vd(t%eo)+n).replace(A0,"$1-$2")}var Ca,um=5381,er=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},cm=function(e){return er(um,e)};function dm(e){return Ds(cm(e)>>>0)}function D0(e){return e.displayName||e.name||"Component"}function _a(e){return typeof e=="string"&&!0}var fm=typeof Symbol=="function"&&Symbol.for,pm=fm?Symbol.for("react.memo"):60115,M0=fm?Symbol.for("react.forward_ref"):60112,F0={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},U0={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},hm={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},B0=((Ca={})[M0]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Ca[pm]=hm,Ca);function qd(e){return("type"in(t=e)&&t.type.$$typeof)===pm?hm:"$$typeof"in e?B0[e.$$typeof]:F0;var t}var H0=Object.defineProperty,W0=Object.getOwnPropertyNames,Qd=Object.getOwnPropertySymbols,V0=Object.getOwnPropertyDescriptor,q0=Object.getPrototypeOf,Kd=Object.prototype;function mm(e,t,n){if(typeof t!="string"){if(Kd){var r=q0(t);r&&r!==Kd&&mm(e,r,n)}var i=W0(t);Qd&&(i=i.concat(Qd(t)));for(var o=qd(e),l=qd(t),a=0;a<i.length;++a){var s=i[a];if(!(s in U0||n&&n[s]||l&&s in l||o&&s in o)){var u=V0(t,s);try{H0(e,s,u)}catch{}}}}return e}function Nn(e){return typeof e=="function"}function fc(e){return typeof e=="object"&&"styledComponentId"in e}function On(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Ms(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function xi(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Fs(e,t,n){if(n===void 0&&(n=!1),!n&&!xi(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Fs(e[r],t[r]);else if(xi(t))for(var r in t)e[r]=Fs(e[r],t[r]);return e}function pc(e,t){Object.defineProperty(e,"toString",{value:t})}function zn(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var Q0=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,o=i;t>=o;)if((o<<=1)<0)throw zn(16,"".concat(t));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var l=i;l<o;l++)this.groupSizes[l]=0}for(var a=this.indexOfGroup(t+1),s=(l=0,n.length);l<s;l++)this.tag.insertRule(a,n[l])&&(this.groupSizes[t]++,a++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var o=r;o<i;o++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),o=i+r,l=i;l<o;l++)n+="".concat(this.tag.getRule(l)).concat(cc);return n},e}(),xo=new Map,Go=new Map,wo=1,to=function(e){if(xo.has(e))return xo.get(e);for(;Go.has(wo);)wo++;var t=wo++;return xo.set(e,t),Go.set(t,e),t},K0=function(e,t){wo=t+1,xo.set(e,t),Go.set(t,e)},G0="style[".concat(yr,"][").concat(lm,'="').concat(Ll,'"]'),Y0=new RegExp("^".concat(yr,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),X0=function(e,t,n){for(var r,i=n.split(","),o=0,l=i.length;o<l;o++)(r=i[o])&&e.registerName(t,r)},J0=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(cc),i=[],o=0,l=r.length;o<l;o++){var a=r[o].trim();if(a){var s=a.match(Y0);if(s){var u=0|parseInt(s[1],10),f=s[2];u!==0&&(K0(f,u),X0(e,f,s[3]),e.getTag().insertRules(u,i)),i.length=0}else i.push(a)}}};function Z0(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var gm=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(a){var s=Array.from(a.querySelectorAll("style[".concat(yr,"]")));return s[s.length-1]}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(yr,om),r.setAttribute(lm,Ll);var l=Z0();return l&&r.setAttribute("nonce",l),n.insertBefore(r,o),r},e1=function(){function e(t){this.element=gm(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,o=r.length;i<o;i++){var l=r[i];if(l.ownerNode===n)return l}throw zn(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),t1=function(){function e(t){this.element=gm(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),n1=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),Gd=dc,r1={isServer:!dc,useCSSOMInjection:!N0},Yo=function(){function e(t,n,r){t===void 0&&(t=xr),n===void 0&&(n={});var i=this;this.options=xe(xe({},r1),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&dc&&Gd&&(Gd=!1,function(o){for(var l=document.querySelectorAll(G0),a=0,s=l.length;a<s;a++){var u=l[a];u&&u.getAttribute(yr)!==om&&(J0(o,u),u.parentNode&&u.parentNode.removeChild(u))}}(this)),pc(this,function(){return function(o){for(var l=o.getTag(),a=l.length,s="",u=function(c){var v=function(h){return Go.get(h)}(c);if(v===void 0)return"continue";var w=o.names.get(v),m=l.getGroup(c);if(w===void 0||m.length===0)return"continue";var y="".concat(yr,".g").concat(c,'[id="').concat(v,'"]'),S="";w!==void 0&&w.forEach(function(h){h.length>0&&(S+="".concat(h,","))}),s+="".concat(m).concat(y,'{content:"').concat(S,'"}').concat(cc)},f=0;f<a;f++)u(f);return s}(i)})}return e.registerId=function(t){return to(t)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(xe(xe({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new n1(i):r?new e1(i):new t1(i)}(this.options),new Q0(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(to(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(to(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(to(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),i1=/&/g,o1=/^\s*\/\/.*$/gm;function vm(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=vm(n.children,t)),n})}function l1(e){var t,n,r,i=e===void 0?xr:e,o=i.options,l=o===void 0?xr:o,a=i.plugins,s=a===void 0?Nl:a,u=function(v,w,m){return m===n||m.startsWith(n)&&m.endsWith(n)&&m.replaceAll(n,"").length>0?".".concat(t):v},f=s.slice();f.push(function(v){v.type===bl&&v.value.includes("&")&&(v.props[0]=v.props[0].replace(i1,n).replace(r,u))}),l.prefix&&f.push(T0),f.push(b0);var c=function(v,w,m,y){w===void 0&&(w=""),m===void 0&&(m=""),y===void 0&&(y="&"),t=y,n=w,r=new RegExp("\\".concat(n,"\\b"),"g");var S=v.replace(o1,""),h=E0(m||w?"".concat(m," ").concat(w," { ").concat(S," }"):S);l.namespace&&(h=vm(h,l.namespace));var p=[];return Ko(h,P0(f.concat(R0(function(g){return p.push(g)})))),p};return c.hash=s.length?s.reduce(function(v,w){return w.name||zn(15),er(v,w.name)},um).toString():"",c}var a1=new Yo,Us=l1(),ym=Ze.createContext({shouldForwardProp:void 0,styleSheet:a1,stylis:Us});ym.Consumer;Ze.createContext(void 0);function Bs(){return C.useContext(ym)}var s1=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=Us);var l=r.name+o.hash;i.hasNameForId(r.id,l)||i.insertRules(r.id,l,o(r.rules,l,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,pc(this,function(){throw zn(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=Us),this.name+t.hash},e}(),u1=function(e){return e>="A"&&e<="Z"};function Yd(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;u1(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var xm=function(e){return e==null||e===!1||e===""},wm=function(e){var t,n,r=[];for(var i in e){var o=e[i];e.hasOwnProperty(i)&&!xm(o)&&(Array.isArray(o)&&o.isCss||Nn(o)?r.push("".concat(Yd(i),":"),o,";"):xi(o)?r.push.apply(r,yi(yi(["".concat(i," {")],wm(o),!1),["}"],!1)):r.push("".concat(Yd(i),": ").concat((t=i,(n=o)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in L0||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function ln(e,t,n,r){if(xm(e))return[];if(fc(e))return[".".concat(e.styledComponentId)];if(Nn(e)){if(!Nn(o=e)||o.prototype&&o.prototype.isReactComponent||!t)return[e];var i=e(t);return ln(i,t,n,r)}var o;return e instanceof s1?n?(e.inject(n,r),[e.getName(r)]):[e]:xi(e)?wm(e):Array.isArray(e)?Array.prototype.concat.apply(Nl,e.map(function(l){return ln(l,t,n,r)})):[e.toString()]}function Sm(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Nn(n)&&!fc(n))return!1}return!0}var c1=cm(Ll),d1=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&Sm(t),this.componentId=n,this.baseHash=er(c1,n),this.baseStyle=r,Yo.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=On(i,this.staticRulesId);else{var o=Ms(ln(this.rules,t,n,r)),l=Ds(er(this.baseHash,o)>>>0);if(!n.hasNameForId(this.componentId,l)){var a=r(o,".".concat(l),void 0,this.componentId);n.insertRules(this.componentId,l,a)}i=On(i,l),this.staticRulesId=l}else{for(var s=er(this.baseHash,r.hash),u="",f=0;f<this.rules.length;f++){var c=this.rules[f];if(typeof c=="string")u+=c;else if(c){var v=Ms(ln(c,t,n,r));s=er(s,v+f),u+=v}}if(u){var w=Ds(s>>>0);n.hasNameForId(this.componentId,w)||n.insertRules(this.componentId,w,r(u,".".concat(w),void 0,this.componentId)),i=On(i,w)}}return i},e}(),wi=Ze.createContext(void 0);wi.Consumer;function f1(e){var t=Ze.useContext(wi),n=C.useMemo(function(){return function(r,i){if(!r)throw zn(14);if(Nn(r)){var o=r(i);return o}if(Array.isArray(r)||typeof r!="object")throw zn(8);return i?xe(xe({},i),r):r}(e.theme,t)},[e.theme,t]);return e.children?Ze.createElement(wi.Provider,{value:n},e.children):null}var Ea={};function p1(e,t,n){var r=fc(e),i=e,o=!_a(e),l=t.attrs,a=l===void 0?Nl:l,s=t.componentId,u=s===void 0?function(x,O){var k=typeof x!="string"?"sc":Wd(x);Ea[k]=(Ea[k]||0)+1;var E="".concat(k,"-").concat(dm(Ll+k+Ea[k]));return O?"".concat(O,"-").concat(E):E}(t.displayName,t.parentComponentId):s,f=t.displayName,c=f===void 0?function(x){return _a(x)?"styled.".concat(x):"Styled(".concat(D0(x),")")}(e):f,v=t.displayName&&t.componentId?"".concat(Wd(t.displayName),"-").concat(t.componentId):t.componentId||u,w=r&&i.attrs?i.attrs.concat(a).filter(Boolean):a,m=t.shouldForwardProp;if(r&&i.shouldForwardProp){var y=i.shouldForwardProp;if(t.shouldForwardProp){var S=t.shouldForwardProp;m=function(x,O){return y(x,O)&&S(x,O)}}else m=y}var h=new d1(n,v,r?i.componentStyle:void 0);function p(x,O){return function(k,E,_){var P=k.attrs,T=k.componentStyle,M=k.defaultProps,$=k.foldedComponentIds,z=k.styledComponentId,Ge=k.target,ue=Ze.useContext(wi),Pe=Bs(),Ie=k.shouldForwardProp||Pe.shouldForwardProp,R=function(ge,_t,Ye){for(var gt,vn=xe(xe({},_t),{className:void 0,theme:Ye}),Yl=0;Yl<ge.length;Yl+=1){var $i=Nn(gt=ge[Yl])?gt(vn):gt;for(var Mt in $i)vn[Mt]=Mt==="className"?On(vn[Mt],$i[Mt]):Mt==="style"?xe(xe({},vn[Mt]),$i[Mt]):$i[Mt]}return _t.className&&(vn.className=On(vn.className,_t.className)),vn}(P,E,am(E,ue,M)||xr),A=R.as||Ge,I={};for(var V in R)R[V]===void 0||V[0]==="$"||V==="as"||V==="theme"||(V==="forwardedAs"?I.as=R.forwardedAs:Ie&&!Ie(V,A)||(I[V]=R[V]));var K=function(ge,_t){var Ye=Bs(),gt=ge.generateAndInjectStyles(_t,Ye.styleSheet,Ye.stylis);return gt}(T,R),mt=On($,z);return K&&(mt+=" "+K),R.className&&(mt+=" "+R.className),I[_a(A)&&!sm.has(A)?"class":"className"]=mt,I.ref=_,C.createElement(A,I)}(g,x,O)}p.displayName=c;var g=Ze.forwardRef(p);return g.attrs=w,g.componentStyle=h,g.displayName=c,g.shouldForwardProp=m,g.foldedComponentIds=r?On(i.foldedComponentIds,i.styledComponentId):"",g.styledComponentId=v,g.target=r?i.target:e,Object.defineProperty(g,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(x){this._foldedDefaultProps=r?function(O){for(var k=[],E=1;E<arguments.length;E++)k[E-1]=arguments[E];for(var _=0,P=k;_<P.length;_++)Fs(O,P[_],!0);return O}({},i.defaultProps,x):x}}),pc(g,function(){return".".concat(g.styledComponentId)}),o&&mm(g,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),g}function Xd(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var Jd=function(e){return Object.assign(e,{isCss:!0})};function km(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Nn(e)||xi(e))return Jd(ln(Xd(Nl,yi([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?ln(r):Jd(ln(Xd(r,t)))}function Hs(e,t,n){if(n===void 0&&(n=xr),!t)throw zn(1,t);var r=function(i){for(var o=[],l=1;l<arguments.length;l++)o[l-1]=arguments[l];return e(t,n,km.apply(void 0,yi([i],o,!1)))};return r.attrs=function(i){return Hs(e,t,xe(xe({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return Hs(e,t,xe(xe({},n),i))},r}var Om=function(e){return Hs(p1,e)},ae=Om;sm.forEach(function(e){ae[e]=Om(e)});var h1=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=Sm(t),Yo.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,i){var o=i(Ms(ln(this.rules,n,r,i)),""),l=this.componentId+t;r.insertRules(l,l,o)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,i){t>2&&Yo.registerId(this.componentId+t),this.removeStyles(t,r),this.createStyles(t,n,r,i)},e}();function m1(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=km.apply(void 0,yi([e],t,!1)),i="sc-global-".concat(dm(JSON.stringify(r))),o=new h1(r,i),l=function(s){var u=Bs(),f=Ze.useContext(wi),c=Ze.useRef(u.styleSheet.allocateGSInstance(i)).current;return u.styleSheet.server&&a(c,s,u.styleSheet,f,u.stylis),Ze.useLayoutEffect(function(){if(!u.styleSheet.server)return a(c,s,u.styleSheet,f,u.stylis),function(){return o.removeStyles(c,u.styleSheet)}},[c,s,u.styleSheet,f,u.stylis]),null};function a(s,u,f,c,v){if(o.isStatic)o.renderStyles(s,z0,f,v);else{var w=xe(xe({},u),{theme:am(u,c,l.defaultProps)});o.renderStyles(s,w,f,v)}}return Ze.memo(l)}const g1=m1`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  
  background-color: ${({theme:e})=>e.COLORS.Dark_Dark_400};
  color: ${({theme:e})=>e.COLORS.Light_Light_100};

  -webkit-font-smoothing: antialiased;
}

body, input, button, textarea, select {
  font-family: 'Roboto', serif;
  font-size: 16px;
  outline: none;
  border:none;
 
}

button{
  cursor:pointer
}

a {
  text-decoration: none;
  color: ${({theme:e})=>e.COLORS.Light_Light_100};
}

button, a {
  cursor: pointer;
  transition: filter 0.2s;
}

button:hover, a:hover {
  filter: brightness(0.9);
}





`;function Cm(e,t){return function(){return e.apply(t,arguments)}}const{toString:v1}=Object.prototype,{getPrototypeOf:hc}=Object,zl=(e=>t=>{const n=v1.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),Ct=e=>(e=e.toLowerCase(),t=>zl(t)===e),$l=e=>t=>typeof t===e,{isArray:jr}=Array,Si=$l("undefined");function y1(e){return e!==null&&!Si(e)&&e.constructor!==null&&!Si(e.constructor)&&nt(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const _m=Ct("ArrayBuffer");function x1(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&_m(e.buffer),t}const w1=$l("string"),nt=$l("function"),Em=$l("number"),Il=e=>e!==null&&typeof e=="object",S1=e=>e===!0||e===!1,So=e=>{if(zl(e)!=="object")return!1;const t=hc(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},k1=Ct("Date"),O1=Ct("File"),C1=Ct("Blob"),_1=Ct("FileList"),E1=e=>Il(e)&&nt(e.pipe),j1=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||nt(e.append)&&((t=zl(e))==="formdata"||t==="object"&&nt(e.toString)&&e.toString()==="[object FormData]"))},b1=Ct("URLSearchParams"),P1=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Ti(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,i;if(typeof e!="object"&&(e=[e]),jr(e))for(r=0,i=e.length;r<i;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),l=o.length;let a;for(r=0;r<l;r++)a=o[r],t.call(null,e[a],a,e)}}function jm(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,i;for(;r-- >0;)if(i=n[r],t===i.toLowerCase())return i;return null}const bm=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),Pm=e=>!Si(e)&&e!==bm;function Ws(){const{caseless:e}=Pm(this)&&this||{},t={},n=(r,i)=>{const o=e&&jm(t,i)||i;So(t[o])&&So(r)?t[o]=Ws(t[o],r):So(r)?t[o]=Ws({},r):jr(r)?t[o]=r.slice():t[o]=r};for(let r=0,i=arguments.length;r<i;r++)arguments[r]&&Ti(arguments[r],n);return t}const R1=(e,t,n,{allOwnKeys:r}={})=>(Ti(t,(i,o)=>{n&&nt(i)?e[o]=Cm(i,n):e[o]=i},{allOwnKeys:r}),e),T1=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),L1=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},N1=(e,t,n,r)=>{let i,o,l;const a={};if(t=t||{},e==null)return t;do{for(i=Object.getOwnPropertyNames(e),o=i.length;o-- >0;)l=i[o],(!r||r(l,e,t))&&!a[l]&&(t[l]=e[l],a[l]=!0);e=n!==!1&&hc(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},z1=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},$1=e=>{if(!e)return null;if(jr(e))return e;let t=e.length;if(!Em(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},I1=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&hc(Uint8Array)),A1=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let i;for(;(i=r.next())&&!i.done;){const o=i.value;t.call(e,o[0],o[1])}},D1=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},M1=Ct("HTMLFormElement"),F1=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,i){return r.toUpperCase()+i}),Zd=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),U1=Ct("RegExp"),Rm=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};Ti(n,(i,o)=>{let l;(l=t(i,o,e))!==!1&&(r[o]=l||i)}),Object.defineProperties(e,r)},B1=e=>{Rm(e,(t,n)=>{if(nt(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(nt(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},H1=(e,t)=>{const n={},r=i=>{i.forEach(o=>{n[o]=!0})};return jr(e)?r(e):r(String(e).split(t)),n},W1=()=>{},V1=(e,t)=>(e=+e,Number.isFinite(e)?e:t),ja="abcdefghijklmnopqrstuvwxyz",ef="0123456789",Tm={DIGIT:ef,ALPHA:ja,ALPHA_DIGIT:ja+ja.toUpperCase()+ef},q1=(e=16,t=Tm.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function Q1(e){return!!(e&&nt(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const K1=e=>{const t=new Array(10),n=(r,i)=>{if(Il(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[i]=r;const o=jr(r)?[]:{};return Ti(r,(l,a)=>{const s=n(l,i+1);!Si(s)&&(o[a]=s)}),t[i]=void 0,o}}return r};return n(e,0)},G1=Ct("AsyncFunction"),Y1=e=>e&&(Il(e)||nt(e))&&nt(e.then)&&nt(e.catch),j={isArray:jr,isArrayBuffer:_m,isBuffer:y1,isFormData:j1,isArrayBufferView:x1,isString:w1,isNumber:Em,isBoolean:S1,isObject:Il,isPlainObject:So,isUndefined:Si,isDate:k1,isFile:O1,isBlob:C1,isRegExp:U1,isFunction:nt,isStream:E1,isURLSearchParams:b1,isTypedArray:I1,isFileList:_1,forEach:Ti,merge:Ws,extend:R1,trim:P1,stripBOM:T1,inherits:L1,toFlatObject:N1,kindOf:zl,kindOfTest:Ct,endsWith:z1,toArray:$1,forEachEntry:A1,matchAll:D1,isHTMLForm:M1,hasOwnProperty:Zd,hasOwnProp:Zd,reduceDescriptors:Rm,freezeMethods:B1,toObjectSet:H1,toCamelCase:F1,noop:W1,toFiniteNumber:V1,findKey:jm,global:bm,isContextDefined:Pm,ALPHABET:Tm,generateString:q1,isSpecCompliantForm:Q1,toJSONObject:K1,isAsyncFn:G1,isThenable:Y1};function W(e,t,n,r,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i)}j.inherits(W,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:j.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const Lm=W.prototype,Nm={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{Nm[e]={value:e}});Object.defineProperties(W,Nm);Object.defineProperty(Lm,"isAxiosError",{value:!0});W.from=(e,t,n,r,i,o)=>{const l=Object.create(Lm);return j.toFlatObject(e,l,function(s){return s!==Error.prototype},a=>a!=="isAxiosError"),W.call(l,e.message,t,n,r,i),l.cause=e,l.name=e.name,o&&Object.assign(l,o),l};const X1=null;function Vs(e){return j.isPlainObject(e)||j.isArray(e)}function zm(e){return j.endsWith(e,"[]")?e.slice(0,-2):e}function tf(e,t,n){return e?e.concat(t).map(function(i,o){return i=zm(i),!n&&o?"["+i+"]":i}).join(n?".":""):t}function J1(e){return j.isArray(e)&&!e.some(Vs)}const Z1=j.toFlatObject(j,{},null,function(t){return/^is[A-Z]/.test(t)});function Al(e,t,n){if(!j.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=j.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(y,S){return!j.isUndefined(S[y])});const r=n.metaTokens,i=n.visitor||f,o=n.dots,l=n.indexes,s=(n.Blob||typeof Blob<"u"&&Blob)&&j.isSpecCompliantForm(t);if(!j.isFunction(i))throw new TypeError("visitor must be a function");function u(m){if(m===null)return"";if(j.isDate(m))return m.toISOString();if(!s&&j.isBlob(m))throw new W("Blob is not supported. Use a Buffer instead.");return j.isArrayBuffer(m)||j.isTypedArray(m)?s&&typeof Blob=="function"?new Blob([m]):Buffer.from(m):m}function f(m,y,S){let h=m;if(m&&!S&&typeof m=="object"){if(j.endsWith(y,"{}"))y=r?y:y.slice(0,-2),m=JSON.stringify(m);else if(j.isArray(m)&&J1(m)||(j.isFileList(m)||j.endsWith(y,"[]"))&&(h=j.toArray(m)))return y=zm(y),h.forEach(function(g,x){!(j.isUndefined(g)||g===null)&&t.append(l===!0?tf([y],x,o):l===null?y:y+"[]",u(g))}),!1}return Vs(m)?!0:(t.append(tf(S,y,o),u(m)),!1)}const c=[],v=Object.assign(Z1,{defaultVisitor:f,convertValue:u,isVisitable:Vs});function w(m,y){if(!j.isUndefined(m)){if(c.indexOf(m)!==-1)throw Error("Circular reference detected in "+y.join("."));c.push(m),j.forEach(m,function(h,p){(!(j.isUndefined(h)||h===null)&&i.call(t,h,j.isString(p)?p.trim():p,y,v))===!0&&w(h,y?y.concat(p):[p])}),c.pop()}}if(!j.isObject(e))throw new TypeError("data must be an object");return w(e),t}function nf(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function mc(e,t){this._pairs=[],e&&Al(e,this,t)}const $m=mc.prototype;$m.append=function(t,n){this._pairs.push([t,n])};$m.toString=function(t){const n=t?function(r){return t.call(this,r,nf)}:nf;return this._pairs.map(function(i){return n(i[0])+"="+n(i[1])},"").join("&")};function ex(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Im(e,t,n){if(!t)return e;const r=n&&n.encode||ex,i=n&&n.serialize;let o;if(i?o=i(t,n):o=j.isURLSearchParams(t)?t.toString():new mc(t,n).toString(r),o){const l=e.indexOf("#");l!==-1&&(e=e.slice(0,l)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class tx{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){j.forEach(this.handlers,function(r){r!==null&&t(r)})}}const rf=tx,Am={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},nx=typeof URLSearchParams<"u"?URLSearchParams:mc,rx=typeof FormData<"u"?FormData:null,ix=typeof Blob<"u"?Blob:null,ox={isBrowser:!0,classes:{URLSearchParams:nx,FormData:rx,Blob:ix},protocols:["http","https","file","blob","url","data"]},Dm=typeof window<"u"&&typeof document<"u",lx=(e=>Dm&&["ReactNative","NativeScript","NS"].indexOf(e)<0)(typeof navigator<"u"&&navigator.product),ax=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),sx=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Dm,hasStandardBrowserEnv:lx,hasStandardBrowserWebWorkerEnv:ax},Symbol.toStringTag,{value:"Module"})),St={...sx,...ox};function ux(e,t){return Al(e,new St.classes.URLSearchParams,Object.assign({visitor:function(n,r,i,o){return St.isNode&&j.isBuffer(n)?(this.append(r,n.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},t))}function cx(e){return j.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function dx(e){const t={},n=Object.keys(e);let r;const i=n.length;let o;for(r=0;r<i;r++)o=n[r],t[o]=e[o];return t}function Mm(e){function t(n,r,i,o){let l=n[o++];const a=Number.isFinite(+l),s=o>=n.length;return l=!l&&j.isArray(i)?i.length:l,s?(j.hasOwnProp(i,l)?i[l]=[i[l],r]:i[l]=r,!a):((!i[l]||!j.isObject(i[l]))&&(i[l]=[]),t(n,r,i[l],o)&&j.isArray(i[l])&&(i[l]=dx(i[l])),!a)}if(j.isFormData(e)&&j.isFunction(e.entries)){const n={};return j.forEachEntry(e,(r,i)=>{t(cx(r),i,n,0)}),n}return null}function fx(e,t,n){if(j.isString(e))try{return(t||JSON.parse)(e),j.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const gc={transitional:Am,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",i=r.indexOf("application/json")>-1,o=j.isObject(t);if(o&&j.isHTMLForm(t)&&(t=new FormData(t)),j.isFormData(t))return i&&i?JSON.stringify(Mm(t)):t;if(j.isArrayBuffer(t)||j.isBuffer(t)||j.isStream(t)||j.isFile(t)||j.isBlob(t))return t;if(j.isArrayBufferView(t))return t.buffer;if(j.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let a;if(o){if(r.indexOf("application/x-www-form-urlencoded")>-1)return ux(t,this.formSerializer).toString();if((a=j.isFileList(t))||r.indexOf("multipart/form-data")>-1){const s=this.env&&this.env.FormData;return Al(a?{"files[]":t}:t,s&&new s,this.formSerializer)}}return o||i?(n.setContentType("application/json",!1),fx(t)):t}],transformResponse:[function(t){const n=this.transitional||gc.transitional,r=n&&n.forcedJSONParsing,i=this.responseType==="json";if(t&&j.isString(t)&&(r&&!this.responseType||i)){const l=!(n&&n.silentJSONParsing)&&i;try{return JSON.parse(t)}catch(a){if(l)throw a.name==="SyntaxError"?W.from(a,W.ERR_BAD_RESPONSE,this,null,this.response):a}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:St.classes.FormData,Blob:St.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};j.forEach(["delete","get","head","post","put","patch"],e=>{gc.headers[e]={}});const vc=gc,px=j.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),hx=e=>{const t={};let n,r,i;return e&&e.split(`
`).forEach(function(l){i=l.indexOf(":"),n=l.substring(0,i).trim().toLowerCase(),r=l.substring(i+1).trim(),!(!n||t[n]&&px[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},of=Symbol("internals");function Dr(e){return e&&String(e).trim().toLowerCase()}function ko(e){return e===!1||e==null?e:j.isArray(e)?e.map(ko):String(e)}function mx(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const gx=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function ba(e,t,n,r,i){if(j.isFunction(r))return r.call(this,t,n);if(i&&(t=n),!!j.isString(t)){if(j.isString(r))return t.indexOf(r)!==-1;if(j.isRegExp(r))return r.test(t)}}function vx(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function yx(e,t){const n=j.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(i,o,l){return this[r].call(this,t,i,o,l)},configurable:!0})})}class Dl{constructor(t){t&&this.set(t)}set(t,n,r){const i=this;function o(a,s,u){const f=Dr(s);if(!f)throw new Error("header name must be a non-empty string");const c=j.findKey(i,f);(!c||i[c]===void 0||u===!0||u===void 0&&i[c]!==!1)&&(i[c||s]=ko(a))}const l=(a,s)=>j.forEach(a,(u,f)=>o(u,f,s));return j.isPlainObject(t)||t instanceof this.constructor?l(t,n):j.isString(t)&&(t=t.trim())&&!gx(t)?l(hx(t),n):t!=null&&o(n,t,r),this}get(t,n){if(t=Dr(t),t){const r=j.findKey(this,t);if(r){const i=this[r];if(!n)return i;if(n===!0)return mx(i);if(j.isFunction(n))return n.call(this,i,r);if(j.isRegExp(n))return n.exec(i);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=Dr(t),t){const r=j.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||ba(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let i=!1;function o(l){if(l=Dr(l),l){const a=j.findKey(r,l);a&&(!n||ba(r,r[a],a,n))&&(delete r[a],i=!0)}}return j.isArray(t)?t.forEach(o):o(t),i}clear(t){const n=Object.keys(this);let r=n.length,i=!1;for(;r--;){const o=n[r];(!t||ba(this,this[o],o,t,!0))&&(delete this[o],i=!0)}return i}normalize(t){const n=this,r={};return j.forEach(this,(i,o)=>{const l=j.findKey(r,o);if(l){n[l]=ko(i),delete n[o];return}const a=t?vx(o):String(o).trim();a!==o&&delete n[o],n[a]=ko(i),r[a]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return j.forEach(this,(r,i)=>{r!=null&&r!==!1&&(n[i]=t&&j.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(i=>r.set(i)),r}static accessor(t){const r=(this[of]=this[of]={accessors:{}}).accessors,i=this.prototype;function o(l){const a=Dr(l);r[a]||(yx(i,l),r[a]=!0)}return j.isArray(t)?t.forEach(o):o(t),this}}Dl.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);j.reduceDescriptors(Dl.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});j.freezeMethods(Dl);const Lt=Dl;function Pa(e,t){const n=this||vc,r=t||n,i=Lt.from(r.headers);let o=r.data;return j.forEach(e,function(a){o=a.call(n,o,i.normalize(),t?t.status:void 0)}),i.normalize(),o}function Fm(e){return!!(e&&e.__CANCEL__)}function Li(e,t,n){W.call(this,e??"canceled",W.ERR_CANCELED,t,n),this.name="CanceledError"}j.inherits(Li,W,{__CANCEL__:!0});function xx(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new W("Request failed with status code "+n.status,[W.ERR_BAD_REQUEST,W.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const wx=St.hasStandardBrowserEnv?{write(e,t,n,r,i,o){const l=[e+"="+encodeURIComponent(t)];j.isNumber(n)&&l.push("expires="+new Date(n).toGMTString()),j.isString(r)&&l.push("path="+r),j.isString(i)&&l.push("domain="+i),o===!0&&l.push("secure"),document.cookie=l.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function Sx(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function kx(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function Um(e,t){return e&&!Sx(t)?kx(e,t):t}const Ox=St.hasStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function i(o){let l=o;return t&&(n.setAttribute("href",l),l=n.href),n.setAttribute("href",l),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=i(window.location.href),function(l){const a=j.isString(l)?i(l):l;return a.protocol===r.protocol&&a.host===r.host}}():function(){return function(){return!0}}();function Cx(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function _x(e,t){e=e||10;const n=new Array(e),r=new Array(e);let i=0,o=0,l;return t=t!==void 0?t:1e3,function(s){const u=Date.now(),f=r[o];l||(l=u),n[i]=s,r[i]=u;let c=o,v=0;for(;c!==i;)v+=n[c++],c=c%e;if(i=(i+1)%e,i===o&&(o=(o+1)%e),u-l<t)return;const w=f&&u-f;return w?Math.round(v*1e3/w):void 0}}function lf(e,t){let n=0;const r=_x(50,250);return i=>{const o=i.loaded,l=i.lengthComputable?i.total:void 0,a=o-n,s=r(a),u=o<=l;n=o;const f={loaded:o,total:l,progress:l?o/l:void 0,bytes:a,rate:s||void 0,estimated:s&&l&&u?(l-o)/s:void 0,event:i};f[t?"download":"upload"]=!0,e(f)}}const Ex=typeof XMLHttpRequest<"u",jx=Ex&&function(e){return new Promise(function(n,r){let i=e.data;const o=Lt.from(e.headers).normalize();let{responseType:l,withXSRFToken:a}=e,s;function u(){e.cancelToken&&e.cancelToken.unsubscribe(s),e.signal&&e.signal.removeEventListener("abort",s)}let f;if(j.isFormData(i)){if(St.hasStandardBrowserEnv||St.hasStandardBrowserWebWorkerEnv)o.setContentType(!1);else if((f=o.getContentType())!==!1){const[y,...S]=f?f.split(";").map(h=>h.trim()).filter(Boolean):[];o.setContentType([y||"multipart/form-data",...S].join("; "))}}let c=new XMLHttpRequest;if(e.auth){const y=e.auth.username||"",S=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.set("Authorization","Basic "+btoa(y+":"+S))}const v=Um(e.baseURL,e.url);c.open(e.method.toUpperCase(),Im(v,e.params,e.paramsSerializer),!0),c.timeout=e.timeout;function w(){if(!c)return;const y=Lt.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders()),h={data:!l||l==="text"||l==="json"?c.responseText:c.response,status:c.status,statusText:c.statusText,headers:y,config:e,request:c};xx(function(g){n(g),u()},function(g){r(g),u()},h),c=null}if("onloadend"in c?c.onloadend=w:c.onreadystatechange=function(){!c||c.readyState!==4||c.status===0&&!(c.responseURL&&c.responseURL.indexOf("file:")===0)||setTimeout(w)},c.onabort=function(){c&&(r(new W("Request aborted",W.ECONNABORTED,e,c)),c=null)},c.onerror=function(){r(new W("Network Error",W.ERR_NETWORK,e,c)),c=null},c.ontimeout=function(){let S=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const h=e.transitional||Am;e.timeoutErrorMessage&&(S=e.timeoutErrorMessage),r(new W(S,h.clarifyTimeoutError?W.ETIMEDOUT:W.ECONNABORTED,e,c)),c=null},St.hasStandardBrowserEnv&&(a&&j.isFunction(a)&&(a=a(e)),a||a!==!1&&Ox(v))){const y=e.xsrfHeaderName&&e.xsrfCookieName&&wx.read(e.xsrfCookieName);y&&o.set(e.xsrfHeaderName,y)}i===void 0&&o.setContentType(null),"setRequestHeader"in c&&j.forEach(o.toJSON(),function(S,h){c.setRequestHeader(h,S)}),j.isUndefined(e.withCredentials)||(c.withCredentials=!!e.withCredentials),l&&l!=="json"&&(c.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&c.addEventListener("progress",lf(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&c.upload&&c.upload.addEventListener("progress",lf(e.onUploadProgress)),(e.cancelToken||e.signal)&&(s=y=>{c&&(r(!y||y.type?new Li(null,e,c):y),c.abort(),c=null)},e.cancelToken&&e.cancelToken.subscribe(s),e.signal&&(e.signal.aborted?s():e.signal.addEventListener("abort",s)));const m=Cx(v);if(m&&St.protocols.indexOf(m)===-1){r(new W("Unsupported protocol "+m+":",W.ERR_BAD_REQUEST,e));return}c.send(i||null)})},qs={http:X1,xhr:jx};j.forEach(qs,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const af=e=>`- ${e}`,bx=e=>j.isFunction(e)||e===null||e===!1,Bm={getAdapter:e=>{e=j.isArray(e)?e:[e];const{length:t}=e;let n,r;const i={};for(let o=0;o<t;o++){n=e[o];let l;if(r=n,!bx(n)&&(r=qs[(l=String(n)).toLowerCase()],r===void 0))throw new W(`Unknown adapter '${l}'`);if(r)break;i[l||"#"+o]=r}if(!r){const o=Object.entries(i).map(([a,s])=>`adapter ${a} `+(s===!1?"is not supported by the environment":"is not available in the build"));let l=t?o.length>1?`since :
`+o.map(af).join(`
`):" "+af(o[0]):"as no adapter specified";throw new W("There is no suitable adapter to dispatch the request "+l,"ERR_NOT_SUPPORT")}return r},adapters:qs};function Ra(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new Li(null,e)}function sf(e){return Ra(e),e.headers=Lt.from(e.headers),e.data=Pa.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),Bm.getAdapter(e.adapter||vc.adapter)(e).then(function(r){return Ra(e),r.data=Pa.call(e,e.transformResponse,r),r.headers=Lt.from(r.headers),r},function(r){return Fm(r)||(Ra(e),r&&r.response&&(r.response.data=Pa.call(e,e.transformResponse,r.response),r.response.headers=Lt.from(r.response.headers))),Promise.reject(r)})}const uf=e=>e instanceof Lt?e.toJSON():e;function wr(e,t){t=t||{};const n={};function r(u,f,c){return j.isPlainObject(u)&&j.isPlainObject(f)?j.merge.call({caseless:c},u,f):j.isPlainObject(f)?j.merge({},f):j.isArray(f)?f.slice():f}function i(u,f,c){if(j.isUndefined(f)){if(!j.isUndefined(u))return r(void 0,u,c)}else return r(u,f,c)}function o(u,f){if(!j.isUndefined(f))return r(void 0,f)}function l(u,f){if(j.isUndefined(f)){if(!j.isUndefined(u))return r(void 0,u)}else return r(void 0,f)}function a(u,f,c){if(c in t)return r(u,f);if(c in e)return r(void 0,u)}const s={url:o,method:o,data:o,baseURL:l,transformRequest:l,transformResponse:l,paramsSerializer:l,timeout:l,timeoutMessage:l,withCredentials:l,withXSRFToken:l,adapter:l,responseType:l,xsrfCookieName:l,xsrfHeaderName:l,onUploadProgress:l,onDownloadProgress:l,decompress:l,maxContentLength:l,maxBodyLength:l,beforeRedirect:l,transport:l,httpAgent:l,httpsAgent:l,cancelToken:l,socketPath:l,responseEncoding:l,validateStatus:a,headers:(u,f)=>i(uf(u),uf(f),!0)};return j.forEach(Object.keys(Object.assign({},e,t)),function(f){const c=s[f]||i,v=c(e[f],t[f],f);j.isUndefined(v)&&c!==a||(n[f]=v)}),n}const Hm="1.6.2",yc={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{yc[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const cf={};yc.transitional=function(t,n,r){function i(o,l){return"[Axios v"+Hm+"] Transitional option '"+o+"'"+l+(r?". "+r:"")}return(o,l,a)=>{if(t===!1)throw new W(i(l," has been removed"+(n?" in "+n:"")),W.ERR_DEPRECATED);return n&&!cf[l]&&(cf[l]=!0,console.warn(i(l," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(o,l,a):!0}};function Px(e,t,n){if(typeof e!="object")throw new W("options must be an object",W.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let i=r.length;for(;i-- >0;){const o=r[i],l=t[o];if(l){const a=e[o],s=a===void 0||l(a,o,e);if(s!==!0)throw new W("option "+o+" must be "+s,W.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new W("Unknown option "+o,W.ERR_BAD_OPTION)}}const Qs={assertOptions:Px,validators:yc},Ut=Qs.validators;class Xo{constructor(t){this.defaults=t,this.interceptors={request:new rf,response:new rf}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=wr(this.defaults,n);const{transitional:r,paramsSerializer:i,headers:o}=n;r!==void 0&&Qs.assertOptions(r,{silentJSONParsing:Ut.transitional(Ut.boolean),forcedJSONParsing:Ut.transitional(Ut.boolean),clarifyTimeoutError:Ut.transitional(Ut.boolean)},!1),i!=null&&(j.isFunction(i)?n.paramsSerializer={serialize:i}:Qs.assertOptions(i,{encode:Ut.function,serialize:Ut.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let l=o&&j.merge(o.common,o[n.method]);o&&j.forEach(["delete","get","head","post","put","patch","common"],m=>{delete o[m]}),n.headers=Lt.concat(l,o);const a=[];let s=!0;this.interceptors.request.forEach(function(y){typeof y.runWhen=="function"&&y.runWhen(n)===!1||(s=s&&y.synchronous,a.unshift(y.fulfilled,y.rejected))});const u=[];this.interceptors.response.forEach(function(y){u.push(y.fulfilled,y.rejected)});let f,c=0,v;if(!s){const m=[sf.bind(this),void 0];for(m.unshift.apply(m,a),m.push.apply(m,u),v=m.length,f=Promise.resolve(n);c<v;)f=f.then(m[c++],m[c++]);return f}v=a.length;let w=n;for(c=0;c<v;){const m=a[c++],y=a[c++];try{w=m(w)}catch(S){y.call(this,S);break}}try{f=sf.call(this,w)}catch(m){return Promise.reject(m)}for(c=0,v=u.length;c<v;)f=f.then(u[c++],u[c++]);return f}getUri(t){t=wr(this.defaults,t);const n=Um(t.baseURL,t.url);return Im(n,t.params,t.paramsSerializer)}}j.forEach(["delete","get","head","options"],function(t){Xo.prototype[t]=function(n,r){return this.request(wr(r||{},{method:t,url:n,data:(r||{}).data}))}});j.forEach(["post","put","patch"],function(t){function n(r){return function(o,l,a){return this.request(wr(a||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:o,data:l}))}}Xo.prototype[t]=n(),Xo.prototype[t+"Form"]=n(!0)});const Oo=Xo;class xc{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(o){n=o});const r=this;this.promise.then(i=>{if(!r._listeners)return;let o=r._listeners.length;for(;o-- >0;)r._listeners[o](i);r._listeners=null}),this.promise.then=i=>{let o;const l=new Promise(a=>{r.subscribe(a),o=a}).then(i);return l.cancel=function(){r.unsubscribe(o)},l},t(function(o,l,a){r.reason||(r.reason=new Li(o,l,a),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new xc(function(i){t=i}),cancel:t}}}const Rx=xc;function Tx(e){return function(n){return e.apply(null,n)}}function Lx(e){return j.isObject(e)&&e.isAxiosError===!0}const Ks={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Ks).forEach(([e,t])=>{Ks[t]=e});const Nx=Ks;function Wm(e){const t=new Oo(e),n=Cm(Oo.prototype.request,t);return j.extend(n,Oo.prototype,t,{allOwnKeys:!0}),j.extend(n,t,null,{allOwnKeys:!0}),n.create=function(i){return Wm(wr(e,i))},n}const pe=Wm(vc);pe.Axios=Oo;pe.CanceledError=Li;pe.CancelToken=Rx;pe.isCancel=Fm;pe.VERSION=Hm;pe.toFormData=Al;pe.AxiosError=W;pe.Cancel=pe.CanceledError;pe.all=function(t){return Promise.all(t)};pe.spread=Tx;pe.isAxiosError=Lx;pe.mergeConfig=wr;pe.AxiosHeaders=Lt;pe.formToJSON=e=>Mm(j.isHTMLForm(e)?new FormData(e):e);pe.getAdapter=Bm.getAdapter;pe.HttpStatusCode=Nx;pe.default=pe;const zx=pe,Ne=zx.create({baseURL:"https://api-food-explorer-k28p.onrender.com"}),Vm=C.createContext({});function $x({children:e}){const[t,n]=C.useState({});async function r({email:o,password:l}){try{const a=await Ne.post("/sessions",{email:o,password:l}),{user:s,token:u}=a.data;localStorage.setItem("@foodEplorer:user",JSON.stringify(s)),localStorage.setItem("@foodEplorer:token",u),Ne.defaults.headers.common.Authorization=`Bearer ${u}`,n({user:s,token:u})}catch(a){a.response?alert(a.response.data.message):alert("Não foi possivel entrar")}}function i(){localStorage.removeItem("@foodEplorer:user"),localStorage.removeItem("@foodEplorer:token"),n({})}return C.useEffect(()=>{const o=localStorage.getItem("@foodEplorer:token"),l=localStorage.getItem("@foodEplorer:user");o&&l&&(Ne.defaults.headers.common.Authorization=`Bearer ${o}`,n({token:o,user:JSON.parse(l)}))},[]),d.jsx(Vm.Provider,{value:{signIn:r,singOut:i,user:t.user},children:e})}function br(){return C.useContext(Vm)}/**
 * @remix-run/router v1.14.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ki(){return ki=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ki.apply(this,arguments)}var Yt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Yt||(Yt={}));const df="popstate";function Ix(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:l,hash:a}=r.location;return Gs("",{pathname:o,search:l,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Jo(i)}return Dx(t,n,null,e)}function fe(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function wc(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Ax(){return Math.random().toString(36).substr(2,8)}function ff(e,t){return{usr:e.state,key:e.key,idx:t}}function Gs(e,t,n,r){return n===void 0&&(n=null),ki({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Pr(t):t,{state:n,key:t&&t.key||r||Ax()})}function Jo(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Pr(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Dx(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,l=i.history,a=Yt.Pop,s=null,u=f();u==null&&(u=0,l.replaceState(ki({},l.state,{idx:u}),""));function f(){return(l.state||{idx:null}).idx}function c(){a=Yt.Pop;let S=f(),h=S==null?null:S-u;u=S,s&&s({action:a,location:y.location,delta:h})}function v(S,h){a=Yt.Push;let p=Gs(y.location,S,h);n&&n(p,S),u=f()+1;let g=ff(p,u),x=y.createHref(p);try{l.pushState(g,"",x)}catch(O){if(O instanceof DOMException&&O.name==="DataCloneError")throw O;i.location.assign(x)}o&&s&&s({action:a,location:y.location,delta:1})}function w(S,h){a=Yt.Replace;let p=Gs(y.location,S,h);n&&n(p,S),u=f();let g=ff(p,u),x=y.createHref(p);l.replaceState(g,"",x),o&&s&&s({action:a,location:y.location,delta:0})}function m(S){let h=i.location.origin!=="null"?i.location.origin:i.location.href,p=typeof S=="string"?S:Jo(S);return fe(h,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,h)}let y={get action(){return a},get location(){return e(i,l)},listen(S){if(s)throw new Error("A history only accepts one active listener");return i.addEventListener(df,c),s=S,()=>{i.removeEventListener(df,c),s=null}},createHref(S){return t(i,S)},createURL:m,encodeLocation(S){let h=m(S);return{pathname:h.pathname,search:h.search,hash:h.hash}},push:v,replace:w,go(S){return l.go(S)}};return y}var pf;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(pf||(pf={}));function Mx(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?Pr(t):t,i=Sc(r.pathname||"/",n);if(i==null)return null;let o=qm(e);Fx(o);let l=null;for(let a=0;l==null&&a<o.length;++a)l=Gx(o[a],Jx(i));return l}function qm(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,l,a)=>{let s={relativePath:a===void 0?o.path||"":a,caseSensitive:o.caseSensitive===!0,childrenIndex:l,route:o};s.relativePath.startsWith("/")&&(fe(s.relativePath.startsWith(r),'Absolute route path "'+s.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),s.relativePath=s.relativePath.slice(r.length));let u=an([r,s.relativePath]),f=n.concat(s);o.children&&o.children.length>0&&(fe(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),qm(o.children,t,f,u)),!(o.path==null&&!o.index)&&t.push({path:u,score:Qx(u,o.index),routesMeta:f})};return e.forEach((o,l)=>{var a;if(o.path===""||!((a=o.path)!=null&&a.includes("?")))i(o,l);else for(let s of Qm(o.path))i(o,l,s)}),t}function Qm(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let l=Qm(r.join("/")),a=[];return a.push(...l.map(s=>s===""?o:[o,s].join("/"))),i&&a.push(...l),a.map(s=>e.startsWith("/")&&s===""?"/":s)}function Fx(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Kx(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Ux=/^:\w+$/,Bx=3,Hx=2,Wx=1,Vx=10,qx=-2,hf=e=>e==="*";function Qx(e,t){let n=e.split("/"),r=n.length;return n.some(hf)&&(r+=qx),t&&(r+=Hx),n.filter(i=>!hf(i)).reduce((i,o)=>i+(Ux.test(o)?Bx:o===""?Wx:Vx),r)}function Kx(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function Gx(e,t){let{routesMeta:n}=e,r={},i="/",o=[];for(let l=0;l<n.length;++l){let a=n[l],s=l===n.length-1,u=i==="/"?t:t.slice(i.length)||"/",f=Yx({path:a.relativePath,caseSensitive:a.caseSensitive,end:s},u);if(!f)return null;Object.assign(r,f.params);let c=a.route;o.push({params:r,pathname:an([i,f.pathname]),pathnameBase:rw(an([i,f.pathnameBase])),route:c}),f.pathnameBase!=="/"&&(i=an([i,f.pathnameBase]))}return o}function Yx(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Xx(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],l=o.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,f,c)=>{let{paramName:v,isOptional:w}=f;if(v==="*"){let y=a[c]||"";l=o.slice(0,o.length-y.length).replace(/(.)\/+$/,"$1")}const m=a[c];return w&&!m?u[v]=void 0:u[v]=Zx(m||"",v),u},{}),pathname:o,pathnameBase:l,pattern:e}}function Xx(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),wc(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:(\w+)(\?)?/g,(l,a,s)=>(r.push({paramName:a,isOptional:s!=null}),s?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function Jx(e){try{return decodeURI(e)}catch(t){return wc(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Zx(e,t){try{return decodeURIComponent(e)}catch(n){return wc(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function Sc(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function ew(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Pr(e):e;return{pathname:n?n.startsWith("/")?n:tw(n,t):t,search:iw(r),hash:ow(i)}}function tw(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Ta(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function nw(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Km(e,t){let n=nw(e);return t?n.map((r,i)=>i===e.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Gm(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=Pr(e):(i=ki({},e),fe(!i.pathname||!i.pathname.includes("?"),Ta("?","pathname","search",i)),fe(!i.pathname||!i.pathname.includes("#"),Ta("#","pathname","hash",i)),fe(!i.search||!i.search.includes("#"),Ta("#","search","hash",i)));let o=e===""||i.pathname==="",l=o?"/":i.pathname,a;if(l==null)a=n;else{let c=t.length-1;if(!r&&l.startsWith("..")){let v=l.split("/");for(;v[0]==="..";)v.shift(),c-=1;i.pathname=v.join("/")}a=c>=0?t[c]:"/"}let s=ew(i,a),u=l&&l!=="/"&&l.endsWith("/"),f=(o||l===".")&&n.endsWith("/");return!s.pathname.endsWith("/")&&(u||f)&&(s.pathname+="/"),s}const an=e=>e.join("/").replace(/\/\/+/g,"/"),rw=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),iw=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,ow=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function lw(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Ym=["post","put","patch","delete"];new Set(Ym);const aw=["get",...Ym];new Set(aw);/**
 * React Router v6.21.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Oi(){return Oi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Oi.apply(this,arguments)}const kc=C.createContext(null),sw=C.createContext(null),An=C.createContext(null),Ml=C.createContext(null),hn=C.createContext({outlet:null,matches:[],isDataRoute:!1}),Xm=C.createContext(null);function uw(e,t){let{relative:n}=t===void 0?{}:t;Ni()||fe(!1);let{basename:r,navigator:i}=C.useContext(An),{hash:o,pathname:l,search:a}=Zm(e,{relative:n}),s=l;return r!=="/"&&(s=l==="/"?r:an([r,l])),i.createHref({pathname:s,search:a,hash:o})}function Ni(){return C.useContext(Ml)!=null}function Fl(){return Ni()||fe(!1),C.useContext(Ml).location}function Jm(e){C.useContext(An).static||C.useLayoutEffect(e)}function mn(){let{isDataRoute:e}=C.useContext(hn);return e?kw():cw()}function cw(){Ni()||fe(!1);let e=C.useContext(kc),{basename:t,future:n,navigator:r}=C.useContext(An),{matches:i}=C.useContext(hn),{pathname:o}=Fl(),l=JSON.stringify(Km(i,n.v7_relativeSplatPath)),a=C.useRef(!1);return Jm(()=>{a.current=!0}),C.useCallback(function(u,f){if(f===void 0&&(f={}),!a.current)return;if(typeof u=="number"){r.go(u);return}let c=Gm(u,JSON.parse(l),o,f.relative==="path");e==null&&t!=="/"&&(c.pathname=c.pathname==="/"?t:an([t,c.pathname])),(f.replace?r.replace:r.push)(c,f.state,f)},[t,r,l,o,e])}function Oc(){let{matches:e}=C.useContext(hn),t=e[e.length-1];return t?t.params:{}}function Zm(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=C.useContext(An),{matches:i}=C.useContext(hn),{pathname:o}=Fl(),l=JSON.stringify(Km(i,r.v7_relativeSplatPath));return C.useMemo(()=>Gm(e,JSON.parse(l),o,n==="path"),[e,l,o,n])}function dw(e,t){return fw(e,t)}function fw(e,t,n,r){Ni()||fe(!1);let{navigator:i}=C.useContext(An),{matches:o}=C.useContext(hn),l=o[o.length-1],a=l?l.params:{};l&&l.pathname;let s=l?l.pathnameBase:"/";l&&l.route;let u=Fl(),f;if(t){var c;let S=typeof t=="string"?Pr(t):t;s==="/"||(c=S.pathname)!=null&&c.startsWith(s)||fe(!1),f=S}else f=u;let v=f.pathname||"/",w=s==="/"?v:v.slice(s.length)||"/",m=Mx(e,{pathname:w}),y=vw(m&&m.map(S=>Object.assign({},S,{params:Object.assign({},a,S.params),pathname:an([s,i.encodeLocation?i.encodeLocation(S.pathname).pathname:S.pathname]),pathnameBase:S.pathnameBase==="/"?s:an([s,i.encodeLocation?i.encodeLocation(S.pathnameBase).pathname:S.pathnameBase])})),o,n,r);return t&&y?C.createElement(Ml.Provider,{value:{location:Oi({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:Yt.Pop}},y):y}function pw(){let e=Sw(),t=lw(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},o=null;return C.createElement(C.Fragment,null,C.createElement("h2",null,"Unexpected Application Error!"),C.createElement("h3",{style:{fontStyle:"italic"}},t),n?C.createElement("pre",{style:i},n):null,o)}const hw=C.createElement(pw,null);class mw extends C.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?C.createElement(hn.Provider,{value:this.props.routeContext},C.createElement(Xm.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function gw(e){let{routeContext:t,match:n,children:r}=e,i=C.useContext(kc);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),C.createElement(hn.Provider,{value:t},r)}function vw(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var o;if((o=n)!=null&&o.errors)e=n.matches;else return null}let l=e,a=(i=n)==null?void 0:i.errors;if(a!=null){let f=l.findIndex(c=>c.route.id&&(a==null?void 0:a[c.route.id]));f>=0||fe(!1),l=l.slice(0,Math.min(l.length,f+1))}let s=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let f=0;f<l.length;f++){let c=l[f];if((c.route.HydrateFallback||c.route.hydrateFallbackElement)&&(u=f),c.route.id){let{loaderData:v,errors:w}=n,m=c.route.loader&&v[c.route.id]===void 0&&(!w||w[c.route.id]===void 0);if(c.route.lazy||m){s=!0,u>=0?l=l.slice(0,u+1):l=[l[0]];break}}}return l.reduceRight((f,c,v)=>{let w,m=!1,y=null,S=null;n&&(w=a&&c.route.id?a[c.route.id]:void 0,y=c.route.errorElement||hw,s&&(u<0&&v===0?(Ow("route-fallback",!1),m=!0,S=null):u===v&&(m=!0,S=c.route.hydrateFallbackElement||null)));let h=t.concat(l.slice(0,v+1)),p=()=>{let g;return w?g=y:m?g=S:c.route.Component?g=C.createElement(c.route.Component,null):c.route.element?g=c.route.element:g=f,C.createElement(gw,{match:c,routeContext:{outlet:f,matches:h,isDataRoute:n!=null},children:g})};return n&&(c.route.ErrorBoundary||c.route.errorElement||v===0)?C.createElement(mw,{location:n.location,revalidation:n.revalidation,component:y,error:w,children:p(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):p()},null)}var eg=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(eg||{}),Zo=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Zo||{});function yw(e){let t=C.useContext(kc);return t||fe(!1),t}function xw(e){let t=C.useContext(sw);return t||fe(!1),t}function ww(e){let t=C.useContext(hn);return t||fe(!1),t}function tg(e){let t=ww(),n=t.matches[t.matches.length-1];return n.route.id||fe(!1),n.route.id}function Sw(){var e;let t=C.useContext(Xm),n=xw(Zo.UseRouteError),r=tg(Zo.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function kw(){let{router:e}=yw(eg.UseNavigateStable),t=tg(Zo.UseNavigateStable),n=C.useRef(!1);return Jm(()=>{n.current=!0}),C.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,Oi({fromRouteId:t},o)))},[e,t])}const mf={};function Ow(e,t,n){!t&&!mf[e]&&(mf[e]=!0)}function ct(e){fe(!1)}function Cw(e){let{basename:t="/",children:n=null,location:r,navigationType:i=Yt.Pop,navigator:o,static:l=!1,future:a}=e;Ni()&&fe(!1);let s=t.replace(/^\/*/,"/"),u=C.useMemo(()=>({basename:s,navigator:o,static:l,future:Oi({v7_relativeSplatPath:!1},a)}),[s,a,o,l]);typeof r=="string"&&(r=Pr(r));let{pathname:f="/",search:c="",hash:v="",state:w=null,key:m="default"}=r,y=C.useMemo(()=>{let S=Sc(f,s);return S==null?null:{location:{pathname:S,search:c,hash:v,state:w,key:m},navigationType:i}},[s,f,c,v,w,m,i]);return y==null?null:C.createElement(An.Provider,{value:u},C.createElement(Ml.Provider,{children:n,value:y}))}function Cc(e){let{children:t,location:n}=e;return dw(Ys(t),n)}new Promise(()=>{});function Ys(e,t){t===void 0&&(t=[]);let n=[];return C.Children.forEach(e,(r,i)=>{if(!C.isValidElement(r))return;let o=[...t,i];if(r.type===C.Fragment){n.push.apply(n,Ys(r.props.children,o));return}r.type!==ct&&fe(!1),!r.props.index||!r.props.children||fe(!1);let l={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(l.children=Ys(r.props.children,o)),n.push(l)}),n}/**
 * React Router DOM v6.21.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Xs(){return Xs=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Xs.apply(this,arguments)}function _w(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function Ew(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function jw(e,t){return e.button===0&&(!t||t==="_self")&&!Ew(e)}const bw=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],Pw="startTransition",gf=tv[Pw];function Rw(e){let{basename:t,children:n,future:r,window:i}=e,o=C.useRef();o.current==null&&(o.current=Ix({window:i,v5Compat:!0}));let l=o.current,[a,s]=C.useState({action:l.action,location:l.location}),{v7_startTransition:u}=r||{},f=C.useCallback(c=>{u&&gf?gf(()=>s(c)):s(c)},[s,u]);return C.useLayoutEffect(()=>l.listen(f),[l,f]),C.createElement(Cw,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:l,future:r})}const Tw=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Lw=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,we=C.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:o,replace:l,state:a,target:s,to:u,preventScrollReset:f,unstable_viewTransition:c}=t,v=_w(t,bw),{basename:w}=C.useContext(An),m,y=!1;if(typeof u=="string"&&Lw.test(u)&&(m=u,Tw))try{let g=new URL(window.location.href),x=u.startsWith("//")?new URL(g.protocol+u):new URL(u),O=Sc(x.pathname,w);x.origin===g.origin&&O!=null?u=O+x.search+x.hash:y=!0}catch{}let S=uw(u,{relative:i}),h=Nw(u,{replace:l,state:a,target:s,preventScrollReset:f,relative:i,unstable_viewTransition:c});function p(g){r&&r(g),g.defaultPrevented||h(g)}return C.createElement("a",Xs({},v,{href:m||S,onClick:y||o?r:p,ref:n,target:s}))});var vf;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(vf||(vf={}));var yf;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(yf||(yf={}));function Nw(e,t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:l,unstable_viewTransition:a}=t===void 0?{}:t,s=mn(),u=Fl(),f=Zm(e,{relative:l});return C.useCallback(c=>{if(jw(c,n)){c.preventDefault();let v=r!==void 0?r:Jo(u)===Jo(f);s(e,{replace:v,state:i,preventScrollReset:o,relative:l,unstable_viewTransition:a})}},[u,s,f,r,i,n,e,o,l,a])}const zw=ae.div`
margin: auto;
height: 100%;
max-width: 425px ;
button {
background: none;
color: #E1E1E6;
}
header{
background: ${({theme:e})=>e.COLORS.Dark_dark_700};
display: flex;
align-items: center;
gap: 16px;
padding-left: 28px ;
overflow: hidden;
height: 144px ;
button{
height: 16px;
width: 16px;
}
}
main{
  margin: 0 28px;
  min-height: 600px;
  button{
 margin-top:36px ;
font-family: Poppins;
font-size: 24px;
  }

  p{
    margin-top: 40px;
  }
  ul li{
  margin: 40px 20px;
}

}
.search{
display: flex;
align-items: center;
padding: 0 14px;
border-radius: 5px;
background: ${({theme:e})=>e.COLORS.Dark_dark_700};
margin-top: 36px;
img{
  margin-top: 20px;
}



button{
margin-top: 5px;
height: 24px;
width: 24px;

}
input {
background: none;
}
}

.logOut{
  margin: 50px 0;

  a{
  
  font-size: 30px;
}
}
`,$w=ae.div`

width: 100%;
display: flex;

div{
    width: 100%;
}

input {

  
width: 100%;
background: ${({theme:e})=>e.COLORS.Dark_Dark_900};
padding: 16px 14px;
color: ${({theme:e})=>e.COLORS.Light_Light_100};


}


label {
    display: block;
margin-bottom:12px ;

color: ${({theme:e})=>e.COLORS.Light_Light_400};

}







`;function sn({id:e,label:t,title:n,...r}){return d.jsx($w,{children:d.jsxs("div",{children:[d.jsx("label",{htmlFor:e,children:t}),d.jsx("input",{id:e,...r})]})})}const Iw=ae.footer`

display: flex;
align-items: center;
justify-content: space-between;
padding: 0 28px;
background-color: ${({theme:e})=>e.COLORS.dark_dark_600};


width: 100%;
height: 77px;

div{

display: flex;
gap: 7px;
align-items: center;

 p{
  font-weight: 700;
color: ${({theme:e})=>e.COLORS.light_light_700};

}


}

a{

  font-size: 12px;

}






`,Aw="/Food_explorer-Front/assets/polygon-Footer-23283810.svg";function gn(){return d.jsxs(Iw,{children:[d.jsxs("div",{children:[d.jsx("img",{src:Aw,alt:"Imagem do poligono do footer"}),d.jsx("p",{children:"food explorer"})]}),d.jsx("a",{href:"#",children:"© 2023 - Todos os direitos reservados."})]})}const Ul="/Food_explorer-Front/assets/search-774109cb.svg";function Dw(){const{singOut:e}=br(),t=mn(),[n,r]=C.useState(""),[i,o]=C.useState([]),[l,a]=C.useState(null),s=async()=>{try{const f=await Ne.get(`/foods?term=${n}`);o(f.data),a(null)}catch(f){console.error("Erro ao realizar a pesquisa:",f),o([]),a("Nenhum resultado encontrado.")}},u=f=>{t(`/food/${f}`)};return C.useEffect(()=>{n.trim()!==""?s():(o([]),a(null))},[n]),d.jsxs(zw,{children:[d.jsxs("header",{children:[d.jsx(we,{to:"/",children:d.jsx("img",{src:"src/images/close.svg",alt:"Imagem para fechar Menu"})}),d.jsx("p",{children:"Menu"})]}),d.jsxs("main",{children:[d.jsxs("div",{className:"search",children:[d.jsx("img",{src:Ul,alt:"Imagem de lupa de pesquisa"}),d.jsx(sn,{placeholder:"Busque por pratos ou ingredientes",onChange:f=>r(f.target.value)})]}),i.length>0&&d.jsx("ul",{children:i.map(f=>d.jsx("li",{onClick:()=>u(f.id),children:f.title},f.id))}),i.length===0&&n.trim()!==""&&d.jsx("p",{children:l||"Nenhum resultado encontrado."}),d.jsx("div",{className:"logOut",children:d.jsx(we,{to:"/",onClick:e,children:"Sair"})})]}),d.jsx(gn,{})]})}const Mw=ae.div`

button{
  background: none;
  color: white;
}

@media (max-width: 430px) {

 main{

padding: 16px 56px  0 ;
text-align: center;
  #btnBack{

display: flex;
align-items: center;
font-size: 24px;
}
 }


.detailsFood{

margin-top : 16px;
display: flex;
flex-direction: column;
gap: 24px;


#imgFood{
  width: 264px;
 height: 264px;
 margin: auto;
 border-radius: 50%;
  object-fit: cover;
 }

 .recipe{
  display: flex;
    flex-direction: column;
    gap: 24px;

    .ingredients{
    display: flex;
    flex-wrap: wrap;
    gap: 28px ;
  }
 }

h2{
  font-size: 27.041px;
}

 p{
 font-size: 17px;
 }

section{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 24px;

  .rowOne,.rowTwo{
    display: flex;
    gap: 24px ;
  }
  
 #ingredient{
  background: #192227;
  padding: 4px 8px;
  font-size: 14px;
  border-radius: 5px;

 }

}
 

}


.order{

  margin: 48px 0 55px ;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;


.quantity{

display: flex;
align-items: center;
gap: 16px;

button{
  display: flex;
}

}

#request{
    padding: 8px 30px;
    display: flex;
    align-items: center;
    gap: 8px;
    border-radius: 3px;

    background:${({theme:e})=>e.COLORS.Tints_Tomato_100} ;
  
    font-size: 14px;
 
}




}



  footer{
padding: 24px 28px ;
}
  
}


@media (min-width: 431px) {



main{

  padding: 24px 120px 155px ;
  

  #btnBack {

 display: flex;
 align-items: center;
  font-size: 24px;




}

.detailsFood{


  margin-top: 42px ;
  display: flex;
  gap: 48px;

 .detailsRequest{
 display: flex;
 flex-direction: column;
 gap: 48px;
 margin-top: 45px;

 } 

#imgFood{

  border-radius: 50%;
  object-fit: cover;
  width: 390px;
  height: 389px;

}
 
 .recipe{
  display: flex;
  flex-direction: column;
  gap: 24px ;

  h2{
    font-size: 40px;

  }

  #description{
    font-size: 24px;
    line-height: 140%;
  }

section{
  display: flex;
  gap: 28px;
  flex-wrap: wrap;

  .ingredients{
    display: flex;
    flex-wrap: wrap;
    gap: 28px ;
  }


  #ingredient{
  background: #192227;
  padding: 4px 8px;
  font-size: 14px;
  border-radius: 5px;

 }


}



 }


}

}


.order{
display: flex;
align-items: center;
gap: 34px;

img{

}
}

.quantity{
display: flex;
gap: 14px;


span{
  font-size: 20px;
  font-weight: 700;
}


button{
  display: flex;
  align-items: center;
}
}

#request{

 display: flex;
 align-items: center;
 
 padding: 12px 24px;
 background:${({theme:e})=>e.COLORS.Tints_Tomato_100} ;
 border-radius: 5px;

img{
  margin-right: 18px;
}

}


footer{
  padding: 24px 123px;
}


  
}




`,Fw=ae.header`

width: 100%;
position: relative;
margin: auto;


background: ${({theme:e})=>e.COLORS.Dark_dark_700};



@media (max-width: 430px){

  min-width: 320px;

  .desktop{
    display: none;
  }

 .mobile{

  padding: 64px 28px 28px ;
  display: flex;
  justify-content: space-between;
  gap: 16px;
  

 .title{
  display: flex;
  align-items: center;
  gap: 10px;

  img{
    width: 24px;
    height: 24px;

  }

 }

 h1{
font-size: 21px;

 }


span{
  position: absolute;
  top: 56px;
  right: 28px ;
  padding: 2px 5px;

  border-radius: 99px;
  background: ${({theme:e})=>e.COLORS.Tints_Tomato_100};

}

button {
background: none;
}

 } 
 

}


@media (min-width: 431px){

  padding: 24px 123px;

 button{
  background: none;

 } 
 

.mobile {

  display: none;
}

.desktop{
  
  display: flex;
  gap: 36px;
}


.title {

  display: flex;
  align-items: center;
  gap: 10px;
  width: 197px;

  h1{

    font-size: 24px;
    width: 146px;
    display: flex;
  }
}


#search{

  img{
    margin-top: 8px;
  }

 display :flex ;
 align-items: center;
 justify-content: center;
 padding: 12px 14px;
 gap: 14px;
 width: 100%;
 background-color: ${({theme:e})=>e.COLORS.dark_dark_900};
 border-radius: 5px;

 .itensSearch{
  display: flex;
  gap: 16px;
  width: 300px;
 }

 input{
  padding: 0;
 }




}

#requests{

  background: ${({theme:e})=>e.COLORS.Tints_Tomato_100};
  padding: 12px 32px;
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border-radius: 5px;

  p{
    font-size: 14px;
   font-weight: 500;
   color: white;

  }

  
}

#LogOut{

display: flex;
}


 




}





`,Js="/Food_explorer-Front/assets/polygon-c1785d7c.svg",Zs="/Food_explorer-Front/assets/receipt-a766284f.svg",ng="/Food_explorer-Front/assets/logOut-aaa4d896.svg",rg="/Food_explorer-Front/assets/options-4323f487.svg";function ig({totalAmount:e,setTotalAmount:t,onSearch:n}){const{singOut:r}=br(),[i,o]=C.useState(""),[l,a]=C.useState([]),s=async()=>{try{if(i.trim()===""){a({refeicoes:[],sobremesas:[],bebidas:[]});return}const u=await Ne.get(`/foods?term=${i}`);a({refeicoes:u.data.filter(f=>f.category==="Refeições"),sobremesas:u.data.filter(f=>f.category==="Sobremesas"),bebidas:u.data.filter(f=>f.category==="Bebidas")}),n(i)}catch(u){console.error("Erro ao realizar a pesquisa:",u)}};return C.useEffect(()=>{s()},[i]),d.jsxs(Fw,{children:[d.jsxs("div",{className:"mobile",children:[d.jsx(we,{to:"/menu",children:d.jsx("img",{src:rg,alt:"Imagem de opções de menu da Home"})}),d.jsx(we,{to:"/",children:d.jsxs("div",{className:"title",children:[d.jsx("img",{src:Js,alt:"Logo do app"}),d.jsx("h1",{children:"food explorer"})]})}),d.jsx("button",{children:d.jsx("img",{src:Zs,alt:"Recibo de pedidos"})}),d.jsx("span",{children:e})]}),d.jsxs("div",{className:"desktop",children:[d.jsx(we,{to:"/",children:d.jsxs("div",{className:"title",children:[d.jsx("img",{src:Js,alt:"Logo do app"}),d.jsx("h1",{children:"food explorer"})]})}),d.jsx("div",{id:"search",children:d.jsxs("div",{className:"itensSearch",children:[d.jsx("img",{src:Ul,alt:"Imagem de lupa de pesquisa"}),d.jsx(sn,{placeholder:"Busque por pratos ou ingredientes",onChange:u=>o(u.target.value)})]})}),d.jsxs("button",{id:"requests",children:[d.jsx("img",{src:Zs,alt:"Recibo de pedidos"}),d.jsxs("p",{children:["Pedidos (",d.jsx("span",{children:e}),")"]})]}),d.jsx(we,{to:"/",onClick:r,id:"LogOut",children:d.jsx("img",{src:ng,alt:""})})]})]})}const Uw=ae(we)`

  display: flex;
  width: 100px;
  color: #E1E1E6 ;
  align-items: center;
  font-size: 24px;
  background: none;
  color: white;
  margin-bottom: 25px;

 

  `,Bw="/Food_explorer-Front/assets/btnBack-dfff9c68.svg";function Bl(){return d.jsxs(Uw,{to:"/",children:[d.jsx("img",{src:Bw,alt:""}),"voltar"]})}const Hw="/Food_explorer-Front/assets/less-eaae9b68.svg",Ww="/Food_explorer-Front/assets/more-1164edbe.svg";function Vw({onIncludeAmount:e}){const t=Oc(),[n,r]=C.useState({avatar:"",title:"",description:"",price:0,ingredients:[]}),[i,o]=C.useState(1);C.useEffect(()=>{Ne.get(`/foods/${t.id}`).then(f=>{const{avatar:c,title:v,description:w,price:m,ingredients:y}=f.data,S=`http://localhost:7777/files/${c}`,h=isNaN(parseFloat(m))?0:parseFloat(m);r({avatar:S,title:v,description:w,price:h,ingredients:y})}).catch(f=>{console.error("Erro ao obter dados do produto",f)})},[t.id]);const l=()=>{i>1&&o(f=>f-1)},a=()=>{o(f=>f+1)},s=()=>(n.price*i).toFixed(2),u=()=>{const f=parseFloat(s());e(f)};return d.jsxs(Mw,{children:[d.jsx(ig,{}),d.jsxs("main",{children:[d.jsx(Bl,{}),d.jsxs("div",{className:"detailsFood",children:[d.jsx("img",{id:"imgFood",src:n.avatar,alt:"Imagem do prato"}),d.jsxs("div",{className:"detailsRequest",children:[d.jsxs("div",{className:"recipe",children:[d.jsx("h2",{children:n.title}),d.jsx("p",{id:"description",children:n.description}),d.jsx("section",{children:n.ingredients.map((f,c)=>d.jsx("div",{id:"ingredient",children:f},c))})]}),d.jsxs("div",{className:"order",children:[d.jsxs("div",{className:"quantity",children:[d.jsx("button",{onClick:l,children:d.jsx("img",{src:Hw,alt:"Diminuir quantidade"})}),d.jsx("span",{children:String(i).padStart(2,"0")}),d.jsx("button",{onClick:a,children:d.jsx("img",{src:Ww,alt:"Aumentar quantidade"})})]}),d.jsxs("button",{id:"request",onClick:u,children:[d.jsx("img",{src:Zs,alt:""}),"Pedir R$ ",d.jsx("span",{children:s()})]})]})]})]})]}),d.jsx(gn,{})]})}var og={},lg={},Hl={},ag={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t={animating:!1,autoplaying:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,dragging:!1,edgeDragged:!1,initialized:!1,lazyLoadedList:[],listHeight:null,listWidth:null,scrolling:!1,slideCount:null,slideHeight:null,slideWidth:null,swipeLeft:null,swiped:!1,swiping:!1,touchObject:{startX:0,startY:0,curX:0,curY:0},trackStyle:{},trackWidth:0,targetSlide:0},n=t;e.default=n})(ag);var qw="Expected a function",xf=0/0,Qw="[object Symbol]",Kw=/^\s+|\s+$/g,Gw=/^[-+]0x[0-9a-f]+$/i,Yw=/^0b[01]+$/i,Xw=/^0o[0-7]+$/i,Jw=parseInt,Zw=typeof Ii=="object"&&Ii&&Ii.Object===Object&&Ii,eS=typeof self=="object"&&self&&self.Object===Object&&self,tS=Zw||eS||Function("return this")(),nS=Object.prototype,rS=nS.toString,iS=Math.max,oS=Math.min,La=function(){return tS.Date.now()};function lS(e,t,n){var r,i,o,l,a,s,u=0,f=!1,c=!1,v=!0;if(typeof e!="function")throw new TypeError(qw);t=wf(t)||0,eu(n)&&(f=!!n.leading,c="maxWait"in n,o=c?iS(wf(n.maxWait)||0,t):o,v="trailing"in n?!!n.trailing:v);function w(k){var E=r,_=i;return r=i=void 0,u=k,l=e.apply(_,E),l}function m(k){return u=k,a=setTimeout(h,t),f?w(k):l}function y(k){var E=k-s,_=k-u,P=t-E;return c?oS(P,o-_):P}function S(k){var E=k-s,_=k-u;return s===void 0||E>=t||E<0||c&&_>=o}function h(){var k=La();if(S(k))return p(k);a=setTimeout(h,y(k))}function p(k){return a=void 0,v&&r?w(k):(r=i=void 0,l)}function g(){a!==void 0&&clearTimeout(a),u=0,r=s=i=a=void 0}function x(){return a===void 0?l:p(La())}function O(){var k=La(),E=S(k);if(r=arguments,i=this,s=k,E){if(a===void 0)return m(s);if(c)return a=setTimeout(h,t),w(s)}return a===void 0&&(a=setTimeout(h,t)),l}return O.cancel=g,O.flush=x,O}function eu(e){var t=typeof e;return!!e&&(t=="object"||t=="function")}function aS(e){return!!e&&typeof e=="object"}function sS(e){return typeof e=="symbol"||aS(e)&&rS.call(e)==Qw}function wf(e){if(typeof e=="number")return e;if(sS(e))return xf;if(eu(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=eu(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=e.replace(Kw,"");var n=Yw.test(e);return n||Xw.test(e)?Jw(e.slice(2),n?2:8):Gw.test(e)?xf:+e}var uS=lS,sg={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var t={}.hasOwnProperty;function n(){for(var r=[],i=0;i<arguments.length;i++){var o=arguments[i];if(o){var l=typeof o;if(l==="string"||l==="number")r.push(o);else if(Array.isArray(o)){if(o.length){var a=n.apply(null,o);a&&r.push(a)}}else if(l==="object"){if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]")){r.push(o.toString());continue}for(var s in o)t.call(o,s)&&o[s]&&r.push(s)}}}return r.join(" ")}e.exports?(n.default=n,e.exports=n):window.classNames=n})()})(sg);var Wl=sg.exports,L={};Object.defineProperty(L,"__esModule",{value:!0});L.checkSpecKeys=L.checkNavigable=L.changeSlide=L.canUseDOM=L.canGoNext=void 0;L.clamp=ug;L.swipeStart=L.swipeMove=L.swipeEnd=L.slidesOnRight=L.slidesOnLeft=L.slideHandler=L.siblingDirection=L.safePreventDefault=L.lazyStartIndex=L.lazySlidesOnRight=L.lazySlidesOnLeft=L.lazyEndIndex=L.keyHandler=L.initializedState=L.getWidth=L.getTrackLeft=L.getTrackCSS=L.getTrackAnimateCSS=L.getTotalSlides=L.getSwipeDirection=L.getSlideCount=L.getRequiredLazySlides=L.getPreClones=L.getPostClones=L.getOnDemandLazySlides=L.getNavigableIndexes=L.getHeight=L.extractObject=void 0;var cS=dS(C);function dS(e){return e&&e.__esModule?e:{default:e}}function Sf(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function ee(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Sf(Object(n),!0).forEach(function(r){fS(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Sf(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function fS(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ug(e,t,n){return Math.max(t,Math.min(e,n))}var jn=function(t){var n=["onTouchStart","onTouchMove","onWheel"];n.includes(t._reactName)||t.preventDefault()};L.safePreventDefault=jn;var _c=function(t){for(var n=[],r=Ec(t),i=jc(t),o=r;o<i;o++)t.lazyLoadedList.indexOf(o)<0&&n.push(o);return n};L.getOnDemandLazySlides=_c;var pS=function(t){for(var n=[],r=Ec(t),i=jc(t),o=r;o<i;o++)n.push(o);return n};L.getRequiredLazySlides=pS;var Ec=function(t){return t.currentSlide-cg(t)};L.lazyStartIndex=Ec;var jc=function(t){return t.currentSlide+dg(t)};L.lazyEndIndex=jc;var cg=function(t){return t.centerMode?Math.floor(t.slidesToShow/2)+(parseInt(t.centerPadding)>0?1:0):0};L.lazySlidesOnLeft=cg;var dg=function(t){return t.centerMode?Math.floor((t.slidesToShow-1)/2)+1+(parseInt(t.centerPadding)>0?1:0):t.slidesToShow};L.lazySlidesOnRight=dg;var el=function(t){return t&&t.offsetWidth||0};L.getWidth=el;var bc=function(t){return t&&t.offsetHeight||0};L.getHeight=bc;var Pc=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,r,i,o,l;return r=t.startX-t.curX,i=t.startY-t.curY,o=Math.atan2(i,r),l=Math.round(o*180/Math.PI),l<0&&(l=360-Math.abs(l)),l<=45&&l>=0||l<=360&&l>=315?"left":l>=135&&l<=225?"right":n===!0?l>=35&&l<=135?"up":"down":"vertical"};L.getSwipeDirection=Pc;var Rc=function(t){var n=!0;return t.infinite||(t.centerMode&&t.currentSlide>=t.slideCount-1||t.slideCount<=t.slidesToShow||t.currentSlide>=t.slideCount-t.slidesToShow)&&(n=!1),n};L.canGoNext=Rc;var hS=function(t,n){var r={};return n.forEach(function(i){return r[i]=t[i]}),r};L.extractObject=hS;var mS=function(t){var n=cS.default.Children.count(t.children),r=t.listRef,i=Math.ceil(el(r)),o=t.trackRef&&t.trackRef.node,l=Math.ceil(el(o)),a;if(t.vertical)a=i;else{var s=t.centerMode&&parseInt(t.centerPadding)*2;typeof t.centerPadding=="string"&&t.centerPadding.slice(-1)==="%"&&(s*=i/100),a=Math.ceil((i-s)/t.slidesToShow)}var u=r&&bc(r.querySelector('[data-index="0"]')),f=u*t.slidesToShow,c=t.currentSlide===void 0?t.initialSlide:t.currentSlide;t.rtl&&t.currentSlide===void 0&&(c=n-1-t.initialSlide);var v=t.lazyLoadedList||[],w=_c(ee(ee({},t),{},{currentSlide:c,lazyLoadedList:v}));v=v.concat(w);var m={slideCount:n,slideWidth:a,listWidth:i,trackWidth:l,currentSlide:c,slideHeight:u,listHeight:f,lazyLoadedList:v};return t.autoplaying===null&&t.autoplay&&(m.autoplaying="playing"),m};L.initializedState=mS;var gS=function(t){var n=t.waitForAnimate,r=t.animating,i=t.fade,o=t.infinite,l=t.index,a=t.slideCount,s=t.lazyLoad,u=t.currentSlide,f=t.centerMode,c=t.slidesToScroll,v=t.slidesToShow,w=t.useCSS,m=t.lazyLoadedList;if(n&&r)return{};var y=l,S,h,p,g={},x={},O=o?l:ug(l,0,a-1);if(i){if(!o&&(l<0||l>=a))return{};l<0?y=l+a:l>=a&&(y=l-a),s&&m.indexOf(y)<0&&(m=m.concat(y)),g={animating:!0,currentSlide:y,lazyLoadedList:m,targetSlide:y},x={animating:!1,targetSlide:y}}else S=y,y<0?(S=y+a,o?a%c!==0&&(S=a-a%c):S=0):!Rc(t)&&y>u?y=S=u:f&&y>=a?(y=o?a:a-1,S=o?0:a-1):y>=a&&(S=y-a,o?a%c!==0&&(S=0):S=a-v),!o&&y+v>=a&&(S=a-v),h=_i(ee(ee({},t),{},{slideIndex:y})),p=_i(ee(ee({},t),{},{slideIndex:S})),o||(h===p&&(y=S),h=p),s&&(m=m.concat(_c(ee(ee({},t),{},{currentSlide:y})))),w?(g={animating:!0,currentSlide:S,trackStyle:Tc(ee(ee({},t),{},{left:h})),lazyLoadedList:m,targetSlide:O},x={animating:!1,currentSlide:S,trackStyle:Ci(ee(ee({},t),{},{left:p})),swipeLeft:null,targetSlide:O}):g={currentSlide:S,trackStyle:Ci(ee(ee({},t),{},{left:p})),lazyLoadedList:m,targetSlide:O};return{state:g,nextState:x}};L.slideHandler=gS;var vS=function(t,n){var r,i,o,l,a,s=t.slidesToScroll,u=t.slidesToShow,f=t.slideCount,c=t.currentSlide,v=t.targetSlide,w=t.lazyLoad,m=t.infinite;if(l=f%s!==0,r=l?0:(f-c)%s,n.message==="previous")o=r===0?s:u-r,a=c-o,w&&!m&&(i=c-o,a=i===-1?f-1:i),m||(a=v-s);else if(n.message==="next")o=r===0?s:r,a=c+o,w&&!m&&(a=(c+s)%f+r),m||(a=v+s);else if(n.message==="dots")a=n.index*n.slidesToScroll;else if(n.message==="children"){if(a=n.index,m){var y=mg(ee(ee({},t),{},{targetSlide:a}));a>n.currentSlide&&y==="left"?a=a-f:a<n.currentSlide&&y==="right"&&(a=a+f)}}else n.message==="index"&&(a=Number(n.index));return a};L.changeSlide=vS;var yS=function(t,n,r){return t.target.tagName.match("TEXTAREA|INPUT|SELECT")||!n?"":t.keyCode===37?r?"next":"previous":t.keyCode===39?r?"previous":"next":""};L.keyHandler=yS;var xS=function(t,n,r){return t.target.tagName==="IMG"&&jn(t),!n||!r&&t.type.indexOf("mouse")!==-1?"":{dragging:!0,touchObject:{startX:t.touches?t.touches[0].pageX:t.clientX,startY:t.touches?t.touches[0].pageY:t.clientY,curX:t.touches?t.touches[0].pageX:t.clientX,curY:t.touches?t.touches[0].pageY:t.clientY}}};L.swipeStart=xS;var wS=function(t,n){var r=n.scrolling,i=n.animating,o=n.vertical,l=n.swipeToSlide,a=n.verticalSwiping,s=n.rtl,u=n.currentSlide,f=n.edgeFriction,c=n.edgeDragged,v=n.onEdge,w=n.swiped,m=n.swiping,y=n.slideCount,S=n.slidesToScroll,h=n.infinite,p=n.touchObject,g=n.swipeEvent,x=n.listHeight,O=n.listWidth;if(!r){if(i)return jn(t);o&&l&&a&&jn(t);var k,E={},_=_i(n);p.curX=t.touches?t.touches[0].pageX:t.clientX,p.curY=t.touches?t.touches[0].pageY:t.clientY,p.swipeLength=Math.round(Math.sqrt(Math.pow(p.curX-p.startX,2)));var P=Math.round(Math.sqrt(Math.pow(p.curY-p.startY,2)));if(!a&&!m&&P>10)return{scrolling:!0};a&&(p.swipeLength=P);var T=(s?-1:1)*(p.curX>p.startX?1:-1);a&&(T=p.curY>p.startY?1:-1);var M=Math.ceil(y/S),$=Pc(n.touchObject,a),z=p.swipeLength;return h||(u===0&&($==="right"||$==="down")||u+1>=M&&($==="left"||$==="up")||!Rc(n)&&($==="left"||$==="up"))&&(z=p.swipeLength*f,c===!1&&v&&(v($),E.edgeDragged=!0)),!w&&g&&(g($),E.swiped=!0),o?k=_+z*(x/O)*T:s?k=_-z*T:k=_+z*T,a&&(k=_+z*T),E=ee(ee({},E),{},{touchObject:p,swipeLeft:k,trackStyle:Ci(ee(ee({},n),{},{left:k}))}),Math.abs(p.curX-p.startX)<Math.abs(p.curY-p.startY)*.8||p.swipeLength>10&&(E.swiping=!0,jn(t)),E}};L.swipeMove=wS;var SS=function(t,n){var r=n.dragging,i=n.swipe,o=n.touchObject,l=n.listWidth,a=n.touchThreshold,s=n.verticalSwiping,u=n.listHeight,f=n.swipeToSlide,c=n.scrolling,v=n.onSwipe,w=n.targetSlide,m=n.currentSlide,y=n.infinite;if(!r)return i&&jn(t),{};var S=s?u/a:l/a,h=Pc(o,s),p={dragging:!1,edgeDragged:!1,scrolling:!1,swiping:!1,swiped:!1,swipeLeft:null,touchObject:{}};if(c||!o.swipeLength)return p;if(o.swipeLength>S){jn(t),v&&v(h);var g,x,O=y?m:w;switch(h){case"left":case"up":x=O+nu(n),g=f?tu(n,x):x,p.currentDirection=0;break;case"right":case"down":x=O-nu(n),g=f?tu(n,x):x,p.currentDirection=1;break;default:g=O}p.triggerSlideHandler=g}else{var k=_i(n);p.trackStyle=Tc(ee(ee({},n),{},{left:k}))}return p};L.swipeEnd=SS;var fg=function(t){for(var n=t.infinite?t.slideCount*2:t.slideCount,r=t.infinite?t.slidesToShow*-1:0,i=t.infinite?t.slidesToShow*-1:0,o=[];r<n;)o.push(r),r=i+t.slidesToScroll,i+=Math.min(t.slidesToScroll,t.slidesToShow);return o};L.getNavigableIndexes=fg;var tu=function(t,n){var r=fg(t),i=0;if(n>r[r.length-1])n=r[r.length-1];else for(var o in r){if(n<r[o]){n=i;break}i=r[o]}return n};L.checkNavigable=tu;var nu=function(t){var n=t.centerMode?t.slideWidth*Math.floor(t.slidesToShow/2):0;if(t.swipeToSlide){var r,i=t.listRef,o=i.querySelectorAll&&i.querySelectorAll(".slick-slide")||[];if(Array.from(o).every(function(s){if(t.vertical){if(s.offsetTop+bc(s)/2>t.swipeLeft*-1)return r=s,!1}else if(s.offsetLeft-n+el(s)/2>t.swipeLeft*-1)return r=s,!1;return!0}),!r)return 0;var l=t.rtl===!0?t.slideCount-t.currentSlide:t.currentSlide,a=Math.abs(r.dataset.index-l)||1;return a}else return t.slidesToScroll};L.getSlideCount=nu;var Vl=function(t,n){return n.reduce(function(r,i){return r&&t.hasOwnProperty(i)},!0)?null:console.error("Keys Missing:",t)};L.checkSpecKeys=Vl;var Ci=function(t){Vl(t,["left","variableWidth","slideCount","slidesToShow","slideWidth"]);var n,r,i=t.slideCount+2*t.slidesToShow;t.vertical?r=i*t.slideHeight:n=hg(t)*t.slideWidth;var o={opacity:1,transition:"",WebkitTransition:""};if(t.useTransform){var l=t.vertical?"translate3d(0px, "+t.left+"px, 0px)":"translate3d("+t.left+"px, 0px, 0px)",a=t.vertical?"translate3d(0px, "+t.left+"px, 0px)":"translate3d("+t.left+"px, 0px, 0px)",s=t.vertical?"translateY("+t.left+"px)":"translateX("+t.left+"px)";o=ee(ee({},o),{},{WebkitTransform:l,transform:a,msTransform:s})}else t.vertical?o.top=t.left:o.left=t.left;return t.fade&&(o={opacity:1}),n&&(o.width=n),r&&(o.height=r),window&&!window.addEventListener&&window.attachEvent&&(t.vertical?o.marginTop=t.left+"px":o.marginLeft=t.left+"px"),o};L.getTrackCSS=Ci;var Tc=function(t){Vl(t,["left","variableWidth","slideCount","slidesToShow","slideWidth","speed","cssEase"]);var n=Ci(t);return t.useTransform?(n.WebkitTransition="-webkit-transform "+t.speed+"ms "+t.cssEase,n.transition="transform "+t.speed+"ms "+t.cssEase):t.vertical?n.transition="top "+t.speed+"ms "+t.cssEase:n.transition="left "+t.speed+"ms "+t.cssEase,n};L.getTrackAnimateCSS=Tc;var _i=function(t){if(t.unslick)return 0;Vl(t,["slideIndex","trackRef","infinite","centerMode","slideCount","slidesToShow","slidesToScroll","slideWidth","listWidth","variableWidth","slideHeight"]);var n=t.slideIndex,r=t.trackRef,i=t.infinite,o=t.centerMode,l=t.slideCount,a=t.slidesToShow,s=t.slidesToScroll,u=t.slideWidth,f=t.listWidth,c=t.variableWidth,v=t.slideHeight,w=t.fade,m=t.vertical,y=0,S,h,p=0;if(w||t.slideCount===1)return 0;var g=0;if(i?(g=-ei(t),l%s!==0&&n+s>l&&(g=-(n>l?a-(n-l):l%s)),o&&(g+=parseInt(a/2))):(l%s!==0&&n+s>l&&(g=a-l%s),o&&(g=parseInt(a/2))),y=g*u,p=g*v,m?S=n*v*-1+p:S=n*u*-1+y,c===!0){var x,O=r&&r.node;if(x=n+ei(t),h=O&&O.childNodes[x],S=h?h.offsetLeft*-1:0,o===!0){x=i?n+ei(t):n,h=O&&O.children[x],S=0;for(var k=0;k<x;k++)S-=O&&O.children[k]&&O.children[k].offsetWidth;S-=parseInt(t.centerPadding),S+=h&&(f-h.offsetWidth)/2}}return S};L.getTrackLeft=_i;var ei=function(t){return t.unslick||!t.infinite?0:t.variableWidth?t.slideCount:t.slidesToShow+(t.centerMode?1:0)};L.getPreClones=ei;var pg=function(t){return t.unslick||!t.infinite?0:t.slideCount};L.getPostClones=pg;var hg=function(t){return t.slideCount===1?1:ei(t)+t.slideCount+pg(t)};L.getTotalSlides=hg;var mg=function(t){return t.targetSlide>t.currentSlide?t.targetSlide>t.currentSlide+gg(t)?"left":"right":t.targetSlide<t.currentSlide-vg(t)?"right":"left"};L.siblingDirection=mg;var gg=function(t){var n=t.slidesToShow,r=t.centerMode,i=t.rtl,o=t.centerPadding;if(r){var l=(n-1)/2+1;return parseInt(o)>0&&(l+=1),i&&n%2===0&&(l+=1),l}return i?0:n-1};L.slidesOnRight=gg;var vg=function(t){var n=t.slidesToShow,r=t.centerMode,i=t.rtl,o=t.centerPadding;if(r){var l=(n-1)/2+1;return parseInt(o)>0&&(l+=1),!i&&n%2===0&&(l+=1),l}return i?n-1:0};L.slidesOnLeft=vg;var kS=function(){return!!(typeof window<"u"&&window.document&&window.document.createElement)};L.canUseDOM=kS;var ql={};function ru(e){"@babel/helpers - typeof";return ru=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ru(e)}Object.defineProperty(ql,"__esModule",{value:!0});ql.Track=void 0;var Vt=yg(C),Na=yg(Wl),za=L;function yg(e){return e&&e.__esModule?e:{default:e}}function iu(){return iu=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},iu.apply(this,arguments)}function OS(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function kf(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function CS(e,t,n){return t&&kf(e.prototype,t),n&&kf(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function _S(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&ou(e,t)}function ou(e,t){return ou=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},ou(e,t)}function ES(e){var t=bS();return function(){var r=tl(e),i;if(t){var o=tl(this).constructor;i=Reflect.construct(r,arguments,o)}else i=r.apply(this,arguments);return jS(this,i)}}function jS(e,t){if(t&&(ru(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return lu(e)}function lu(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function bS(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function tl(e){return tl=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},tl(e)}function Of(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Ae(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Of(Object(n),!0).forEach(function(r){au(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Of(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function au(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var $a=function(t){var n,r,i,o,l;t.rtl?l=t.slideCount-1-t.index:l=t.index,i=l<0||l>=t.slideCount,t.centerMode?(o=Math.floor(t.slidesToShow/2),r=(l-t.currentSlide)%t.slideCount===0,l>t.currentSlide-o-1&&l<=t.currentSlide+o&&(n=!0)):n=t.currentSlide<=l&&l<t.currentSlide+t.slidesToShow;var a;t.targetSlide<0?a=t.targetSlide+t.slideCount:t.targetSlide>=t.slideCount?a=t.targetSlide-t.slideCount:a=t.targetSlide;var s=l===a;return{"slick-slide":!0,"slick-active":n,"slick-center":r,"slick-cloned":i,"slick-current":s}},PS=function(t){var n={};return(t.variableWidth===void 0||t.variableWidth===!1)&&(n.width=t.slideWidth),t.fade&&(n.position="relative",t.vertical?n.top=-t.index*parseInt(t.slideHeight):n.left=-t.index*parseInt(t.slideWidth),n.opacity=t.currentSlide===t.index?1:0,t.useCSS&&(n.transition="opacity "+t.speed+"ms "+t.cssEase+", visibility "+t.speed+"ms "+t.cssEase)),n},Ia=function(t,n){return t.key||n},RS=function(t){var n,r=[],i=[],o=[],l=Vt.default.Children.count(t.children),a=(0,za.lazyStartIndex)(t),s=(0,za.lazyEndIndex)(t);return Vt.default.Children.forEach(t.children,function(u,f){var c,v={message:"children",index:f,slidesToScroll:t.slidesToScroll,currentSlide:t.currentSlide};!t.lazyLoad||t.lazyLoad&&t.lazyLoadedList.indexOf(f)>=0?c=u:c=Vt.default.createElement("div",null);var w=PS(Ae(Ae({},t),{},{index:f})),m=c.props.className||"",y=$a(Ae(Ae({},t),{},{index:f}));if(r.push(Vt.default.cloneElement(c,{key:"original"+Ia(c,f),"data-index":f,className:(0,Na.default)(y,m),tabIndex:"-1","aria-hidden":!y["slick-active"],style:Ae(Ae({outline:"none"},c.props.style||{}),w),onClick:function(p){c.props&&c.props.onClick&&c.props.onClick(p),t.focusOnSelect&&t.focusOnSelect(v)}})),t.infinite&&t.fade===!1){var S=l-f;S<=(0,za.getPreClones)(t)&&l!==t.slidesToShow&&(n=-S,n>=a&&(c=u),y=$a(Ae(Ae({},t),{},{index:n})),i.push(Vt.default.cloneElement(c,{key:"precloned"+Ia(c,n),"data-index":n,tabIndex:"-1",className:(0,Na.default)(y,m),"aria-hidden":!y["slick-active"],style:Ae(Ae({},c.props.style||{}),w),onClick:function(p){c.props&&c.props.onClick&&c.props.onClick(p),t.focusOnSelect&&t.focusOnSelect(v)}}))),l!==t.slidesToShow&&(n=l+f,n<s&&(c=u),y=$a(Ae(Ae({},t),{},{index:n})),o.push(Vt.default.cloneElement(c,{key:"postcloned"+Ia(c,n),"data-index":n,tabIndex:"-1",className:(0,Na.default)(y,m),"aria-hidden":!y["slick-active"],style:Ae(Ae({},c.props.style||{}),w),onClick:function(p){c.props&&c.props.onClick&&c.props.onClick(p),t.focusOnSelect&&t.focusOnSelect(v)}})))}}),t.rtl?i.concat(r,o).reverse():i.concat(r,o)},TS=function(e){_S(n,e);var t=ES(n);function n(){var r;OS(this,n);for(var i=arguments.length,o=new Array(i),l=0;l<i;l++)o[l]=arguments[l];return r=t.call.apply(t,[this].concat(o)),au(lu(r),"node",null),au(lu(r),"handleRef",function(a){r.node=a}),r}return CS(n,[{key:"render",value:function(){var i=RS(this.props),o=this.props,l=o.onMouseEnter,a=o.onMouseOver,s=o.onMouseLeave,u={onMouseEnter:l,onMouseOver:a,onMouseLeave:s};return Vt.default.createElement("div",iu({ref:this.handleRef,className:"slick-track",style:this.props.trackStyle},u),i)}}]),n}(Vt.default.PureComponent);ql.Track=TS;var Ql={};function su(e){"@babel/helpers - typeof";return su=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},su(e)}Object.defineProperty(Ql,"__esModule",{value:!0});Ql.Dots=void 0;var no=xg(C),LS=xg(Wl),Cf=L;function xg(e){return e&&e.__esModule?e:{default:e}}function _f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function NS(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?_f(Object(n),!0).forEach(function(r){zS(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_f(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function zS(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function $S(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Ef(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function IS(e,t,n){return t&&Ef(e.prototype,t),n&&Ef(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function AS(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&uu(e,t)}function uu(e,t){return uu=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},uu(e,t)}function DS(e){var t=US();return function(){var r=nl(e),i;if(t){var o=nl(this).constructor;i=Reflect.construct(r,arguments,o)}else i=r.apply(this,arguments);return MS(this,i)}}function MS(e,t){if(t&&(su(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return FS(e)}function FS(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function US(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function nl(e){return nl=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},nl(e)}var BS=function(t){var n;return t.infinite?n=Math.ceil(t.slideCount/t.slidesToScroll):n=Math.ceil((t.slideCount-t.slidesToShow)/t.slidesToScroll)+1,n},HS=function(e){AS(n,e);var t=DS(n);function n(){return $S(this,n),t.apply(this,arguments)}return IS(n,[{key:"clickHandler",value:function(i,o){o.preventDefault(),this.props.clickHandler(i)}},{key:"render",value:function(){for(var i=this.props,o=i.onMouseEnter,l=i.onMouseOver,a=i.onMouseLeave,s=i.infinite,u=i.slidesToScroll,f=i.slidesToShow,c=i.slideCount,v=i.currentSlide,w=BS({slideCount:c,slidesToScroll:u,slidesToShow:f,infinite:s}),m={onMouseEnter:o,onMouseOver:l,onMouseLeave:a},y=[],S=0;S<w;S++){var h=(S+1)*u-1,p=s?h:(0,Cf.clamp)(h,0,c-1),g=p-(u-1),x=s?g:(0,Cf.clamp)(g,0,c-1),O=(0,LS.default)({"slick-active":s?v>=x&&v<=p:v===x}),k={message:"dots",index:S,slidesToScroll:u,currentSlide:v},E=this.clickHandler.bind(this,k);y=y.concat(no.default.createElement("li",{key:S,className:O},no.default.cloneElement(this.props.customPaging(S),{onClick:E})))}return no.default.cloneElement(this.props.appendDots(y),NS({className:this.props.dotsClass},m))}}]),n}(no.default.PureComponent);Ql.Dots=HS;var Sr={};function cu(e){"@babel/helpers - typeof";return cu=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},cu(e)}Object.defineProperty(Sr,"__esModule",{value:!0});Sr.PrevArrow=Sr.NextArrow=void 0;var ar=Sg(C),wg=Sg(Wl),WS=L;function Sg(e){return e&&e.__esModule?e:{default:e}}function rl(){return rl=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},rl.apply(this,arguments)}function jf(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function il(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?jf(Object(n),!0).forEach(function(r){VS(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):jf(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function VS(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function kg(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function bf(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Og(e,t,n){return t&&bf(e.prototype,t),n&&bf(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function Cg(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&du(e,t)}function du(e,t){return du=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},du(e,t)}function _g(e){var t=KS();return function(){var r=ol(e),i;if(t){var o=ol(this).constructor;i=Reflect.construct(r,arguments,o)}else i=r.apply(this,arguments);return qS(this,i)}}function qS(e,t){if(t&&(cu(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return QS(e)}function QS(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function KS(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function ol(e){return ol=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},ol(e)}var GS=function(e){Cg(n,e);var t=_g(n);function n(){return kg(this,n),t.apply(this,arguments)}return Og(n,[{key:"clickHandler",value:function(i,o){o&&o.preventDefault(),this.props.clickHandler(i,o)}},{key:"render",value:function(){var i={"slick-arrow":!0,"slick-prev":!0},o=this.clickHandler.bind(this,{message:"previous"});!this.props.infinite&&(this.props.currentSlide===0||this.props.slideCount<=this.props.slidesToShow)&&(i["slick-disabled"]=!0,o=null);var l={key:"0","data-role":"none",className:(0,wg.default)(i),style:{display:"block"},onClick:o},a={currentSlide:this.props.currentSlide,slideCount:this.props.slideCount},s;return this.props.prevArrow?s=ar.default.cloneElement(this.props.prevArrow,il(il({},l),a)):s=ar.default.createElement("button",rl({key:"0",type:"button"},l)," ","Previous"),s}}]),n}(ar.default.PureComponent);Sr.PrevArrow=GS;var YS=function(e){Cg(n,e);var t=_g(n);function n(){return kg(this,n),t.apply(this,arguments)}return Og(n,[{key:"clickHandler",value:function(i,o){o&&o.preventDefault(),this.props.clickHandler(i,o)}},{key:"render",value:function(){var i={"slick-arrow":!0,"slick-next":!0},o=this.clickHandler.bind(this,{message:"next"});(0,WS.canGoNext)(this.props)||(i["slick-disabled"]=!0,o=null);var l={key:"1","data-role":"none",className:(0,wg.default)(i),style:{display:"block"},onClick:o},a={currentSlide:this.props.currentSlide,slideCount:this.props.slideCount},s;return this.props.nextArrow?s=ar.default.cloneElement(this.props.nextArrow,il(il({},l),a)):s=ar.default.createElement("button",rl({key:"1",type:"button"},l)," ","Next"),s}}]),n}(ar.default.PureComponent);Sr.NextArrow=YS;var Eg=function(){if(typeof Map<"u")return Map;function e(t,n){var r=-1;return t.some(function(i,o){return i[0]===n?(r=o,!0):!1}),r}return function(){function t(){this.__entries__=[]}return Object.defineProperty(t.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),t.prototype.get=function(n){var r=e(this.__entries__,n),i=this.__entries__[r];return i&&i[1]},t.prototype.set=function(n,r){var i=e(this.__entries__,n);~i?this.__entries__[i][1]=r:this.__entries__.push([n,r])},t.prototype.delete=function(n){var r=this.__entries__,i=e(r,n);~i&&r.splice(i,1)},t.prototype.has=function(n){return!!~e(this.__entries__,n)},t.prototype.clear=function(){this.__entries__.splice(0)},t.prototype.forEach=function(n,r){r===void 0&&(r=null);for(var i=0,o=this.__entries__;i<o.length;i++){var l=o[i];n.call(r,l[1],l[0])}},t}()}(),fu=typeof window<"u"&&typeof document<"u"&&window.document===document,ll=function(){return typeof global<"u"&&global.Math===Math?global:typeof self<"u"&&self.Math===Math?self:typeof window<"u"&&window.Math===Math?window:Function("return this")()}(),XS=function(){return typeof requestAnimationFrame=="function"?requestAnimationFrame.bind(ll):function(e){return setTimeout(function(){return e(Date.now())},1e3/60)}}(),JS=2;function ZS(e,t){var n=!1,r=!1,i=0;function o(){n&&(n=!1,e()),r&&a()}function l(){XS(o)}function a(){var s=Date.now();if(n){if(s-i<JS)return;r=!0}else n=!0,r=!1,setTimeout(l,t);i=s}return a}var e2=20,t2=["top","right","bottom","left","width","height","size","weight"],n2=typeof MutationObserver<"u",r2=function(){function e(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=ZS(this.refresh.bind(this),e2)}return e.prototype.addObserver=function(t){~this.observers_.indexOf(t)||this.observers_.push(t),this.connected_||this.connect_()},e.prototype.removeObserver=function(t){var n=this.observers_,r=n.indexOf(t);~r&&n.splice(r,1),!n.length&&this.connected_&&this.disconnect_()},e.prototype.refresh=function(){var t=this.updateObservers_();t&&this.refresh()},e.prototype.updateObservers_=function(){var t=this.observers_.filter(function(n){return n.gatherActive(),n.hasActive()});return t.forEach(function(n){return n.broadcastActive()}),t.length>0},e.prototype.connect_=function(){!fu||this.connected_||(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),n2?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},e.prototype.disconnect_=function(){!fu||!this.connected_||(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},e.prototype.onTransitionEnd_=function(t){var n=t.propertyName,r=n===void 0?"":n,i=t2.some(function(o){return!!~r.indexOf(o)});i&&this.refresh()},e.getInstance=function(){return this.instance_||(this.instance_=new e),this.instance_},e.instance_=null,e}(),jg=function(e,t){for(var n=0,r=Object.keys(t);n<r.length;n++){var i=r[n];Object.defineProperty(e,i,{value:t[i],enumerable:!1,writable:!1,configurable:!0})}return e},kr=function(e){var t=e&&e.ownerDocument&&e.ownerDocument.defaultView;return t||ll},bg=Kl(0,0,0,0);function al(e){return parseFloat(e)||0}function Pf(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return t.reduce(function(r,i){var o=e["border-"+i+"-width"];return r+al(o)},0)}function i2(e){for(var t=["top","right","bottom","left"],n={},r=0,i=t;r<i.length;r++){var o=i[r],l=e["padding-"+o];n[o]=al(l)}return n}function o2(e){var t=e.getBBox();return Kl(0,0,t.width,t.height)}function l2(e){var t=e.clientWidth,n=e.clientHeight;if(!t&&!n)return bg;var r=kr(e).getComputedStyle(e),i=i2(r),o=i.left+i.right,l=i.top+i.bottom,a=al(r.width),s=al(r.height);if(r.boxSizing==="border-box"&&(Math.round(a+o)!==t&&(a-=Pf(r,"left","right")+o),Math.round(s+l)!==n&&(s-=Pf(r,"top","bottom")+l)),!s2(e)){var u=Math.round(a+o)-t,f=Math.round(s+l)-n;Math.abs(u)!==1&&(a-=u),Math.abs(f)!==1&&(s-=f)}return Kl(i.left,i.top,a,s)}var a2=function(){return typeof SVGGraphicsElement<"u"?function(e){return e instanceof kr(e).SVGGraphicsElement}:function(e){return e instanceof kr(e).SVGElement&&typeof e.getBBox=="function"}}();function s2(e){return e===kr(e).document.documentElement}function u2(e){return fu?a2(e)?o2(e):l2(e):bg}function c2(e){var t=e.x,n=e.y,r=e.width,i=e.height,o=typeof DOMRectReadOnly<"u"?DOMRectReadOnly:Object,l=Object.create(o.prototype);return jg(l,{x:t,y:n,width:r,height:i,top:n,right:t+r,bottom:i+n,left:t}),l}function Kl(e,t,n,r){return{x:e,y:t,width:n,height:r}}var d2=function(){function e(t){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=Kl(0,0,0,0),this.target=t}return e.prototype.isActive=function(){var t=u2(this.target);return this.contentRect_=t,t.width!==this.broadcastWidth||t.height!==this.broadcastHeight},e.prototype.broadcastRect=function(){var t=this.contentRect_;return this.broadcastWidth=t.width,this.broadcastHeight=t.height,t},e}(),f2=function(){function e(t,n){var r=c2(n);jg(this,{target:t,contentRect:r})}return e}(),p2=function(){function e(t,n,r){if(this.activeObservations_=[],this.observations_=new Eg,typeof t!="function")throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=t,this.controller_=n,this.callbackCtx_=r}return e.prototype.observe=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(t instanceof kr(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var n=this.observations_;n.has(t)||(n.set(t,new d2(t)),this.controller_.addObserver(this),this.controller_.refresh())}},e.prototype.unobserve=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(t instanceof kr(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var n=this.observations_;n.has(t)&&(n.delete(t),n.size||this.controller_.removeObserver(this))}},e.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},e.prototype.gatherActive=function(){var t=this;this.clearActive(),this.observations_.forEach(function(n){n.isActive()&&t.activeObservations_.push(n)})},e.prototype.broadcastActive=function(){if(this.hasActive()){var t=this.callbackCtx_,n=this.activeObservations_.map(function(r){return new f2(r.target,r.broadcastRect())});this.callback_.call(t,n,t),this.clearActive()}},e.prototype.clearActive=function(){this.activeObservations_.splice(0)},e.prototype.hasActive=function(){return this.activeObservations_.length>0},e}(),Pg=typeof WeakMap<"u"?new WeakMap:new Eg,Rg=function(){function e(t){if(!(this instanceof e))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var n=r2.getInstance(),r=new p2(t,n,this);Pg.set(this,r)}return e}();["observe","unobserve","disconnect"].forEach(function(e){Rg.prototype[e]=function(){var t;return(t=Pg.get(this))[e].apply(t,arguments)}});var h2=function(){return typeof ll.ResizeObserver<"u"?ll.ResizeObserver:Rg}();const m2=Object.freeze(Object.defineProperty({__proto__:null,default:h2},Symbol.toStringTag,{value:"Module"})),g2=Mg(m2);Object.defineProperty(Hl,"__esModule",{value:!0});Hl.InnerSlider=void 0;var Re=zi(C),v2=zi(ag),y2=zi(uS),x2=zi(Wl),ne=L,w2=ql,S2=Ql,Rf=Sr,k2=zi(g2);function zi(e){return e&&e.__esModule?e:{default:e}}function sl(e){"@babel/helpers - typeof";return sl=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},sl(e)}function ul(){return ul=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ul.apply(this,arguments)}function O2(e,t){if(e==null)return{};var n=C2(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function C2(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function Tf(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function D(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Tf(Object(n),!0).forEach(function(r){B(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Tf(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function _2(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Lf(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function E2(e,t,n){return t&&Lf(e.prototype,t),n&&Lf(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function j2(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&pu(e,t)}function pu(e,t){return pu=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},pu(e,t)}function b2(e){var t=R2();return function(){var r=cl(e),i;if(t){var o=cl(this).constructor;i=Reflect.construct(r,arguments,o)}else i=r.apply(this,arguments);return P2(this,i)}}function P2(e,t){if(t&&(sl(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return U(e)}function U(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function R2(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function cl(e){return cl=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},cl(e)}function B(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var T2=function(e){j2(n,e);var t=b2(n);function n(r){var i;_2(this,n),i=t.call(this,r),B(U(i),"listRefHandler",function(l){return i.list=l}),B(U(i),"trackRefHandler",function(l){return i.track=l}),B(U(i),"adaptHeight",function(){if(i.props.adaptiveHeight&&i.list){var l=i.list.querySelector('[data-index="'.concat(i.state.currentSlide,'"]'));i.list.style.height=(0,ne.getHeight)(l)+"px"}}),B(U(i),"componentDidMount",function(){if(i.props.onInit&&i.props.onInit(),i.props.lazyLoad){var l=(0,ne.getOnDemandLazySlides)(D(D({},i.props),i.state));l.length>0&&(i.setState(function(s){return{lazyLoadedList:s.lazyLoadedList.concat(l)}}),i.props.onLazyLoad&&i.props.onLazyLoad(l))}var a=D({listRef:i.list,trackRef:i.track},i.props);i.updateState(a,!0,function(){i.adaptHeight(),i.props.autoplay&&i.autoPlay("update")}),i.props.lazyLoad==="progressive"&&(i.lazyLoadTimer=setInterval(i.progressiveLazyLoad,1e3)),i.ro=new k2.default(function(){i.state.animating?(i.onWindowResized(!1),i.callbackTimers.push(setTimeout(function(){return i.onWindowResized()},i.props.speed))):i.onWindowResized()}),i.ro.observe(i.list),document.querySelectorAll&&Array.prototype.forEach.call(document.querySelectorAll(".slick-slide"),function(s){s.onfocus=i.props.pauseOnFocus?i.onSlideFocus:null,s.onblur=i.props.pauseOnFocus?i.onSlideBlur:null}),window.addEventListener?window.addEventListener("resize",i.onWindowResized):window.attachEvent("onresize",i.onWindowResized)}),B(U(i),"componentWillUnmount",function(){i.animationEndCallback&&clearTimeout(i.animationEndCallback),i.lazyLoadTimer&&clearInterval(i.lazyLoadTimer),i.callbackTimers.length&&(i.callbackTimers.forEach(function(l){return clearTimeout(l)}),i.callbackTimers=[]),window.addEventListener?window.removeEventListener("resize",i.onWindowResized):window.detachEvent("onresize",i.onWindowResized),i.autoplayTimer&&clearInterval(i.autoplayTimer),i.ro.disconnect()}),B(U(i),"componentDidUpdate",function(l){if(i.checkImagesLoad(),i.props.onReInit&&i.props.onReInit(),i.props.lazyLoad){var a=(0,ne.getOnDemandLazySlides)(D(D({},i.props),i.state));a.length>0&&(i.setState(function(f){return{lazyLoadedList:f.lazyLoadedList.concat(a)}}),i.props.onLazyLoad&&i.props.onLazyLoad(a))}i.adaptHeight();var s=D(D({listRef:i.list,trackRef:i.track},i.props),i.state),u=i.didPropsChange(l);u&&i.updateState(s,u,function(){i.state.currentSlide>=Re.default.Children.count(i.props.children)&&i.changeSlide({message:"index",index:Re.default.Children.count(i.props.children)-i.props.slidesToShow,currentSlide:i.state.currentSlide}),i.props.autoplay?i.autoPlay("update"):i.pause("paused")})}),B(U(i),"onWindowResized",function(l){i.debouncedResize&&i.debouncedResize.cancel(),i.debouncedResize=(0,y2.default)(function(){return i.resizeWindow(l)},50),i.debouncedResize()}),B(U(i),"resizeWindow",function(){var l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0,a=!!(i.track&&i.track.node);if(a){var s=D(D({listRef:i.list,trackRef:i.track},i.props),i.state);i.updateState(s,l,function(){i.props.autoplay?i.autoPlay("update"):i.pause("paused")}),i.setState({animating:!1}),clearTimeout(i.animationEndCallback),delete i.animationEndCallback}}),B(U(i),"updateState",function(l,a,s){var u=(0,ne.initializedState)(l);l=D(D(D({},l),u),{},{slideIndex:u.currentSlide});var f=(0,ne.getTrackLeft)(l);l=D(D({},l),{},{left:f});var c=(0,ne.getTrackCSS)(l);(a||Re.default.Children.count(i.props.children)!==Re.default.Children.count(l.children))&&(u.trackStyle=c),i.setState(u,s)}),B(U(i),"ssrInit",function(){if(i.props.variableWidth){var l=0,a=0,s=[],u=(0,ne.getPreClones)(D(D(D({},i.props),i.state),{},{slideCount:i.props.children.length})),f=(0,ne.getPostClones)(D(D(D({},i.props),i.state),{},{slideCount:i.props.children.length}));i.props.children.forEach(function(E){s.push(E.props.style.width),l+=E.props.style.width});for(var c=0;c<u;c++)a+=s[s.length-1-c],l+=s[s.length-1-c];for(var v=0;v<f;v++)l+=s[v];for(var w=0;w<i.state.currentSlide;w++)a+=s[w];var m={width:l+"px",left:-a+"px"};if(i.props.centerMode){var y="".concat(s[i.state.currentSlide],"px");m.left="calc(".concat(m.left," + (100% - ").concat(y,") / 2 ) ")}return{trackStyle:m}}var S=Re.default.Children.count(i.props.children),h=D(D(D({},i.props),i.state),{},{slideCount:S}),p=(0,ne.getPreClones)(h)+(0,ne.getPostClones)(h)+S,g=100/i.props.slidesToShow*p,x=100/p,O=-x*((0,ne.getPreClones)(h)+i.state.currentSlide)*g/100;i.props.centerMode&&(O+=(100-x*g/100)/2);var k={width:g+"%",left:O+"%"};return{slideWidth:x+"%",trackStyle:k}}),B(U(i),"checkImagesLoad",function(){var l=i.list&&i.list.querySelectorAll&&i.list.querySelectorAll(".slick-slide img")||[],a=l.length,s=0;Array.prototype.forEach.call(l,function(u){var f=function(){return++s&&s>=a&&i.onWindowResized()};if(!u.onclick)u.onclick=function(){return u.parentNode.focus()};else{var c=u.onclick;u.onclick=function(){c(),u.parentNode.focus()}}u.onload||(i.props.lazyLoad?u.onload=function(){i.adaptHeight(),i.callbackTimers.push(setTimeout(i.onWindowResized,i.props.speed))}:(u.onload=f,u.onerror=function(){f(),i.props.onLazyLoadError&&i.props.onLazyLoadError()}))})}),B(U(i),"progressiveLazyLoad",function(){for(var l=[],a=D(D({},i.props),i.state),s=i.state.currentSlide;s<i.state.slideCount+(0,ne.getPostClones)(a);s++)if(i.state.lazyLoadedList.indexOf(s)<0){l.push(s);break}for(var u=i.state.currentSlide-1;u>=-(0,ne.getPreClones)(a);u--)if(i.state.lazyLoadedList.indexOf(u)<0){l.push(u);break}l.length>0?(i.setState(function(f){return{lazyLoadedList:f.lazyLoadedList.concat(l)}}),i.props.onLazyLoad&&i.props.onLazyLoad(l)):i.lazyLoadTimer&&(clearInterval(i.lazyLoadTimer),delete i.lazyLoadTimer)}),B(U(i),"slideHandler",function(l){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,s=i.props,u=s.asNavFor,f=s.beforeChange,c=s.onLazyLoad,v=s.speed,w=s.afterChange,m=i.state.currentSlide,y=(0,ne.slideHandler)(D(D(D({index:l},i.props),i.state),{},{trackRef:i.track,useCSS:i.props.useCSS&&!a})),S=y.state,h=y.nextState;if(S){f&&f(m,S.currentSlide);var p=S.lazyLoadedList.filter(function(g){return i.state.lazyLoadedList.indexOf(g)<0});c&&p.length>0&&c(p),!i.props.waitForAnimate&&i.animationEndCallback&&(clearTimeout(i.animationEndCallback),w&&w(m),delete i.animationEndCallback),i.setState(S,function(){u&&i.asNavForIndex!==l&&(i.asNavForIndex=l,u.innerSlider.slideHandler(l)),h&&(i.animationEndCallback=setTimeout(function(){var g=h.animating,x=O2(h,["animating"]);i.setState(x,function(){i.callbackTimers.push(setTimeout(function(){return i.setState({animating:g})},10)),w&&w(S.currentSlide),delete i.animationEndCallback})},v))})}}),B(U(i),"changeSlide",function(l){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,s=D(D({},i.props),i.state),u=(0,ne.changeSlide)(s,l);if(!(u!==0&&!u)&&(a===!0?i.slideHandler(u,a):i.slideHandler(u),i.props.autoplay&&i.autoPlay("update"),i.props.focusOnSelect)){var f=i.list.querySelectorAll(".slick-current");f[0]&&f[0].focus()}}),B(U(i),"clickHandler",function(l){i.clickable===!1&&(l.stopPropagation(),l.preventDefault()),i.clickable=!0}),B(U(i),"keyHandler",function(l){var a=(0,ne.keyHandler)(l,i.props.accessibility,i.props.rtl);a!==""&&i.changeSlide({message:a})}),B(U(i),"selectHandler",function(l){i.changeSlide(l)}),B(U(i),"disableBodyScroll",function(){var l=function(s){s=s||window.event,s.preventDefault&&s.preventDefault(),s.returnValue=!1};window.ontouchmove=l}),B(U(i),"enableBodyScroll",function(){window.ontouchmove=null}),B(U(i),"swipeStart",function(l){i.props.verticalSwiping&&i.disableBodyScroll();var a=(0,ne.swipeStart)(l,i.props.swipe,i.props.draggable);a!==""&&i.setState(a)}),B(U(i),"swipeMove",function(l){var a=(0,ne.swipeMove)(l,D(D(D({},i.props),i.state),{},{trackRef:i.track,listRef:i.list,slideIndex:i.state.currentSlide}));a&&(a.swiping&&(i.clickable=!1),i.setState(a))}),B(U(i),"swipeEnd",function(l){var a=(0,ne.swipeEnd)(l,D(D(D({},i.props),i.state),{},{trackRef:i.track,listRef:i.list,slideIndex:i.state.currentSlide}));if(a){var s=a.triggerSlideHandler;delete a.triggerSlideHandler,i.setState(a),s!==void 0&&(i.slideHandler(s),i.props.verticalSwiping&&i.enableBodyScroll())}}),B(U(i),"touchEnd",function(l){i.swipeEnd(l),i.clickable=!0}),B(U(i),"slickPrev",function(){i.callbackTimers.push(setTimeout(function(){return i.changeSlide({message:"previous"})},0))}),B(U(i),"slickNext",function(){i.callbackTimers.push(setTimeout(function(){return i.changeSlide({message:"next"})},0))}),B(U(i),"slickGoTo",function(l){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(l=Number(l),isNaN(l))return"";i.callbackTimers.push(setTimeout(function(){return i.changeSlide({message:"index",index:l,currentSlide:i.state.currentSlide},a)},0))}),B(U(i),"play",function(){var l;if(i.props.rtl)l=i.state.currentSlide-i.props.slidesToScroll;else if((0,ne.canGoNext)(D(D({},i.props),i.state)))l=i.state.currentSlide+i.props.slidesToScroll;else return!1;i.slideHandler(l)}),B(U(i),"autoPlay",function(l){i.autoplayTimer&&clearInterval(i.autoplayTimer);var a=i.state.autoplaying;if(l==="update"){if(a==="hovered"||a==="focused"||a==="paused")return}else if(l==="leave"){if(a==="paused"||a==="focused")return}else if(l==="blur"&&(a==="paused"||a==="hovered"))return;i.autoplayTimer=setInterval(i.play,i.props.autoplaySpeed+50),i.setState({autoplaying:"playing"})}),B(U(i),"pause",function(l){i.autoplayTimer&&(clearInterval(i.autoplayTimer),i.autoplayTimer=null);var a=i.state.autoplaying;l==="paused"?i.setState({autoplaying:"paused"}):l==="focused"?(a==="hovered"||a==="playing")&&i.setState({autoplaying:"focused"}):a==="playing"&&i.setState({autoplaying:"hovered"})}),B(U(i),"onDotsOver",function(){return i.props.autoplay&&i.pause("hovered")}),B(U(i),"onDotsLeave",function(){return i.props.autoplay&&i.state.autoplaying==="hovered"&&i.autoPlay("leave")}),B(U(i),"onTrackOver",function(){return i.props.autoplay&&i.pause("hovered")}),B(U(i),"onTrackLeave",function(){return i.props.autoplay&&i.state.autoplaying==="hovered"&&i.autoPlay("leave")}),B(U(i),"onSlideFocus",function(){return i.props.autoplay&&i.pause("focused")}),B(U(i),"onSlideBlur",function(){return i.props.autoplay&&i.state.autoplaying==="focused"&&i.autoPlay("blur")}),B(U(i),"render",function(){var l=(0,x2.default)("slick-slider",i.props.className,{"slick-vertical":i.props.vertical,"slick-initialized":!0}),a=D(D({},i.props),i.state),s=(0,ne.extractObject)(a,["fade","cssEase","speed","infinite","centerMode","focusOnSelect","currentSlide","lazyLoad","lazyLoadedList","rtl","slideWidth","slideHeight","listHeight","vertical","slidesToShow","slidesToScroll","slideCount","trackStyle","variableWidth","unslick","centerPadding","targetSlide","useCSS"]),u=i.props.pauseOnHover;s=D(D({},s),{},{onMouseEnter:u?i.onTrackOver:null,onMouseLeave:u?i.onTrackLeave:null,onMouseOver:u?i.onTrackOver:null,focusOnSelect:i.props.focusOnSelect&&i.clickable?i.selectHandler:null});var f;if(i.props.dots===!0&&i.state.slideCount>=i.props.slidesToShow){var c=(0,ne.extractObject)(a,["dotsClass","slideCount","slidesToShow","currentSlide","slidesToScroll","clickHandler","children","customPaging","infinite","appendDots"]),v=i.props.pauseOnDotsHover;c=D(D({},c),{},{clickHandler:i.changeSlide,onMouseEnter:v?i.onDotsLeave:null,onMouseOver:v?i.onDotsOver:null,onMouseLeave:v?i.onDotsLeave:null}),f=Re.default.createElement(S2.Dots,c)}var w,m,y=(0,ne.extractObject)(a,["infinite","centerMode","currentSlide","slideCount","slidesToShow","prevArrow","nextArrow"]);y.clickHandler=i.changeSlide,i.props.arrows&&(w=Re.default.createElement(Rf.PrevArrow,y),m=Re.default.createElement(Rf.NextArrow,y));var S=null;i.props.vertical&&(S={height:i.state.listHeight});var h=null;i.props.vertical===!1?i.props.centerMode===!0&&(h={padding:"0px "+i.props.centerPadding}):i.props.centerMode===!0&&(h={padding:i.props.centerPadding+" 0px"});var p=D(D({},S),h),g=i.props.touchMove,x={className:"slick-list",style:p,onClick:i.clickHandler,onMouseDown:g?i.swipeStart:null,onMouseMove:i.state.dragging&&g?i.swipeMove:null,onMouseUp:g?i.swipeEnd:null,onMouseLeave:i.state.dragging&&g?i.swipeEnd:null,onTouchStart:g?i.swipeStart:null,onTouchMove:i.state.dragging&&g?i.swipeMove:null,onTouchEnd:g?i.touchEnd:null,onTouchCancel:i.state.dragging&&g?i.swipeEnd:null,onKeyDown:i.props.accessibility?i.keyHandler:null},O={className:l,dir:"ltr",style:i.props.style};return i.props.unslick&&(x={className:"slick-list"},O={className:l}),Re.default.createElement("div",O,i.props.unslick?"":w,Re.default.createElement("div",ul({ref:i.listRefHandler},x),Re.default.createElement(w2.Track,ul({ref:i.trackRefHandler},s),i.props.children)),i.props.unslick?"":m,i.props.unslick?"":f)}),i.list=null,i.track=null,i.state=D(D({},v2.default),{},{currentSlide:i.props.initialSlide,slideCount:Re.default.Children.count(i.props.children)}),i.callbackTimers=[],i.clickable=!0,i.debouncedResize=null;var o=i.ssrInit();return i.state=D(D({},i.state),o),i}return E2(n,[{key:"didPropsChange",value:function(i){for(var o=!1,l=0,a=Object.keys(this.props);l<a.length;l++){var s=a[l];if(!i.hasOwnProperty(s)){o=!0;break}if(!(sl(i[s])==="object"||typeof i[s]=="function")&&i[s]!==this.props[s]){o=!0;break}}return o||Re.default.Children.count(this.props.children)!==Re.default.Children.count(i.children)}}]),n}(Re.default.Component);Hl.InnerSlider=T2;var L2=function(e){return e.replace(/[A-Z]/g,function(t){return"-"+t.toLowerCase()}).toLowerCase()},N2=L2,z2=N2,$2=function(e){var t=/[height|width]$/;return t.test(e)},Nf=function(e){var t="",n=Object.keys(e);return n.forEach(function(r,i){var o=e[r];r=z2(r),$2(r)&&typeof o=="number"&&(o=o+"px"),o===!0?t+=r:o===!1?t+="not "+r:t+="("+r+": "+o+")",i<n.length-1&&(t+=" and ")}),t},I2=function(e){var t="";return typeof e=="string"?e:e instanceof Array?(e.forEach(function(n,r){t+=Nf(n),r<e.length-1&&(t+=", ")}),t):Nf(e)},A2=I2,Tg={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=n(C);function n(o){return o&&o.__esModule?o:{default:o}}var r={accessibility:!0,adaptiveHeight:!1,afterChange:null,appendDots:function(l){return t.default.createElement("ul",{style:{display:"block"}},l)},arrows:!0,autoplay:!1,autoplaySpeed:3e3,beforeChange:null,centerMode:!1,centerPadding:"50px",className:"",cssEase:"ease",customPaging:function(l){return t.default.createElement("button",null,l+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,infinite:!0,initialSlide:0,lazyLoad:null,nextArrow:null,onEdge:null,onInit:null,onLazyLoadError:null,onReInit:null,pauseOnDotsHover:!1,pauseOnFocus:!1,pauseOnHover:!0,prevArrow:null,responsive:null,rows:1,rtl:!1,slide:"div",slidesPerRow:1,slidesToScroll:1,slidesToShow:1,speed:500,swipe:!0,swipeEvent:null,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,waitForAnimate:!0},i=r;e.default=i})(Tg);var Aa,zf;function D2(){if(zf)return Aa;zf=1;function e(t){this.options=t,!t.deferSetup&&this.setup()}return e.prototype={constructor:e,setup:function(){this.options.setup&&this.options.setup(),this.initialised=!0},on:function(){!this.initialised&&this.setup(),this.options.match&&this.options.match()},off:function(){this.options.unmatch&&this.options.unmatch()},destroy:function(){this.options.destroy?this.options.destroy():this.off()},equals:function(t){return this.options===t||this.options.match===t}},Aa=e,Aa}var Da,$f;function Lg(){if($f)return Da;$f=1;function e(r,i){var o=0,l=r.length,a;for(o;o<l&&(a=i(r[o],o),a!==!1);o++);}function t(r){return Object.prototype.toString.apply(r)==="[object Array]"}function n(r){return typeof r=="function"}return Da={isFunction:n,isArray:t,each:e},Da}var Ma,If;function M2(){if(If)return Ma;If=1;var e=D2(),t=Lg().each;function n(r,i){this.query=r,this.isUnconditional=i,this.handlers=[],this.mql=window.matchMedia(r);var o=this;this.listener=function(l){o.mql=l.currentTarget||l,o.assess()},this.mql.addListener(this.listener)}return n.prototype={constuctor:n,addHandler:function(r){var i=new e(r);this.handlers.push(i),this.matches()&&i.on()},removeHandler:function(r){var i=this.handlers;t(i,function(o,l){if(o.equals(r))return o.destroy(),!i.splice(l,1)})},matches:function(){return this.mql.matches||this.isUnconditional},clear:function(){t(this.handlers,function(r){r.destroy()}),this.mql.removeListener(this.listener),this.handlers.length=0},assess:function(){var r=this.matches()?"on":"off";t(this.handlers,function(i){i[r]()})}},Ma=n,Ma}var Fa,Af;function F2(){if(Af)return Fa;Af=1;var e=M2(),t=Lg(),n=t.each,r=t.isFunction,i=t.isArray;function o(){if(!window.matchMedia)throw new Error("matchMedia not present, legacy browsers require a polyfill");this.queries={},this.browserIsIncapable=!window.matchMedia("only all").matches}return o.prototype={constructor:o,register:function(l,a,s){var u=this.queries,f=s&&this.browserIsIncapable;return u[l]||(u[l]=new e(l,f)),r(a)&&(a={match:a}),i(a)||(a=[a]),n(a,function(c){r(c)&&(c={match:c}),u[l].addHandler(c)}),this},unregister:function(l,a){var s=this.queries[l];return s&&(a?s.removeHandler(a):(s.clear(),delete this.queries[l])),this}},Fa=o,Fa}var Ua,Df;function U2(){if(Df)return Ua;Df=1;var e=F2();return Ua=new e,Ua}(function(e){function t(_){"@babel/helpers - typeof";return t=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(P){return typeof P}:function(P){return P&&typeof Symbol=="function"&&P.constructor===Symbol&&P!==Symbol.prototype?"symbol":typeof P},t(_)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(C),r=Hl,i=a(A2),o=a(Tg),l=L;function a(_){return _&&_.__esModule?_:{default:_}}function s(){return s=Object.assign||function(_){for(var P=1;P<arguments.length;P++){var T=arguments[P];for(var M in T)Object.prototype.hasOwnProperty.call(T,M)&&(_[M]=T[M])}return _},s.apply(this,arguments)}function u(_,P){var T=Object.keys(_);if(Object.getOwnPropertySymbols){var M=Object.getOwnPropertySymbols(_);P&&(M=M.filter(function($){return Object.getOwnPropertyDescriptor(_,$).enumerable})),T.push.apply(T,M)}return T}function f(_){for(var P=1;P<arguments.length;P++){var T=arguments[P]!=null?arguments[P]:{};P%2?u(Object(T),!0).forEach(function(M){O(_,M,T[M])}):Object.getOwnPropertyDescriptors?Object.defineProperties(_,Object.getOwnPropertyDescriptors(T)):u(Object(T)).forEach(function(M){Object.defineProperty(_,M,Object.getOwnPropertyDescriptor(T,M))})}return _}function c(_,P){if(!(_ instanceof P))throw new TypeError("Cannot call a class as a function")}function v(_,P){for(var T=0;T<P.length;T++){var M=P[T];M.enumerable=M.enumerable||!1,M.configurable=!0,"value"in M&&(M.writable=!0),Object.defineProperty(_,M.key,M)}}function w(_,P,T){return P&&v(_.prototype,P),T&&v(_,T),Object.defineProperty(_,"prototype",{writable:!1}),_}function m(_,P){if(typeof P!="function"&&P!==null)throw new TypeError("Super expression must either be null or a function");_.prototype=Object.create(P&&P.prototype,{constructor:{value:_,writable:!0,configurable:!0}}),Object.defineProperty(_,"prototype",{writable:!1}),P&&y(_,P)}function y(_,P){return y=Object.setPrototypeOf||function(M,$){return M.__proto__=$,M},y(_,P)}function S(_){var P=g();return function(){var M=x(_),$;if(P){var z=x(this).constructor;$=Reflect.construct(M,arguments,z)}else $=M.apply(this,arguments);return h(this,$)}}function h(_,P){if(P&&(t(P)==="object"||typeof P=="function"))return P;if(P!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return p(_)}function p(_){if(_===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return _}function g(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function x(_){return x=Object.setPrototypeOf?Object.getPrototypeOf:function(T){return T.__proto__||Object.getPrototypeOf(T)},x(_)}function O(_,P,T){return P in _?Object.defineProperty(_,P,{value:T,enumerable:!0,configurable:!0,writable:!0}):_[P]=T,_}var k=(0,l.canUseDOM)()&&U2(),E=function(_){m(T,_);var P=S(T);function T(M){var $;return c(this,T),$=P.call(this,M),O(p($),"innerSliderRefHandler",function(z){return $.innerSlider=z}),O(p($),"slickPrev",function(){return $.innerSlider.slickPrev()}),O(p($),"slickNext",function(){return $.innerSlider.slickNext()}),O(p($),"slickGoTo",function(z){var Ge=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;return $.innerSlider.slickGoTo(z,Ge)}),O(p($),"slickPause",function(){return $.innerSlider.pause("paused")}),O(p($),"slickPlay",function(){return $.innerSlider.autoPlay("play")}),$.state={breakpoint:null},$._responsiveMediaHandlers=[],$}return w(T,[{key:"media",value:function($,z){k.register($,z),this._responsiveMediaHandlers.push({query:$,handler:z})}},{key:"componentDidMount",value:function(){var $=this;if(this.props.responsive){var z=this.props.responsive.map(function(ue){return ue.breakpoint});z.sort(function(ue,Pe){return ue-Pe}),z.forEach(function(ue,Pe){var Ie;Pe===0?Ie=(0,i.default)({minWidth:0,maxWidth:ue}):Ie=(0,i.default)({minWidth:z[Pe-1]+1,maxWidth:ue}),(0,l.canUseDOM)()&&$.media(Ie,function(){$.setState({breakpoint:ue})})});var Ge=(0,i.default)({minWidth:z.slice(-1)[0]});(0,l.canUseDOM)()&&this.media(Ge,function(){$.setState({breakpoint:null})})}}},{key:"componentWillUnmount",value:function(){this._responsiveMediaHandlers.forEach(function($){k.unregister($.query,$.handler)})}},{key:"render",value:function(){var $=this,z,Ge;this.state.breakpoint?(Ge=this.props.responsive.filter(function(ge){return ge.breakpoint===$.state.breakpoint}),z=Ge[0].settings==="unslick"?"unslick":f(f(f({},o.default),this.props),Ge[0].settings)):z=f(f({},o.default),this.props),z.centerMode&&(z.slidesToScroll>1,z.slidesToScroll=1),z.fade&&(z.slidesToShow>1,z.slidesToScroll>1,z.slidesToShow=1,z.slidesToScroll=1);var ue=n.default.Children.toArray(this.props.children);ue=ue.filter(function(ge){return typeof ge=="string"?!!ge.trim():!!ge}),z.variableWidth&&(z.rows>1||z.slidesPerRow>1)&&(console.warn("variableWidth is not supported in case of rows > 1 or slidesPerRow > 1"),z.variableWidth=!1);for(var Pe=[],Ie=null,R=0;R<ue.length;R+=z.rows*z.slidesPerRow){for(var A=[],I=R;I<R+z.rows*z.slidesPerRow;I+=z.slidesPerRow){for(var V=[],K=I;K<I+z.slidesPerRow&&(z.variableWidth&&ue[K].props.style&&(Ie=ue[K].props.style.width),!(K>=ue.length));K+=1)V.push(n.default.cloneElement(ue[K],{key:100*R+10*I+K,tabIndex:-1,style:{width:"".concat(100/z.slidesPerRow,"%"),display:"inline-block"}}));A.push(n.default.createElement("div",{key:10*R+I},V))}z.variableWidth?Pe.push(n.default.createElement("div",{key:R,style:{width:Ie}},A)):Pe.push(n.default.createElement("div",{key:R},A))}if(z==="unslick"){var mt="regular slider "+(this.props.className||"");return n.default.createElement("div",{className:mt},ue)}else Pe.length<=z.slidesToShow&&(z.unslick=!0);return n.default.createElement(r.InnerSlider,s({style:this.props.style,ref:this.innerSliderRefHandler},z),Pe)}}]),T}(n.default.Component);e.default=E})(lg);(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=n(lg);function n(i){return i&&i.__esModule?i:{default:i}}var r=t.default;e.default=r})(og);const sr=Mf(og);const B2=ae.div`
 

 width: 100%;
 margin: auto;

 .none{
  display: none;
 }


 .slick-track:hover>:not(:hover){

opacity: .4;
transform: scale(0.9);
transition: .85s;


}


@media (max-width: 430px){
  min-width: 425px;




section{
display: flex;
height: 110px;
background: linear-gradient(180deg, #091E26 0%, #00131C 100%);
border-radius: 3px;
margin: 44px 16px 0 36px;
position: relative;

img{

  width: 191px;
height: 149px;
position: absolute;
top: -20px;
left: -30px;
opacity: 0.8;
}
#text {
margin: 30px 0 0 160px;
font-family: Poppins;
p{
  margin-top: 6px;
  font-size: 12px;
}
h5 {
  font-weight: 600;
  font-size: 18px;
}
}
}
.category{
  margin: 62px 0 24px 24px;
  
}
.cards{
display: flex;
gap: 24px ;
overflow-x: auto;
margin: 24px;
padding: 0 24px;


.itens{
padding: 24px ;
display: flex;
gap: 12px;
justify-content: center;
align-items: center;
width: 210px;

 p{
  text-align: center;
 }
}

}

.cards:nth-child(7){
  margin-bottom: 60px;
}
}
@media(min-width: 431px) {


section{
position: relative;
display: flex;
justify-content: flex-end;
background: linear-gradient(180deg, #091E26 0%, #00131C 100%);
margin-top: 164px;
width: 100%;
border-radius: 8px;



 img{
  opacity: 0.8;
  width: 632px;
  height: 406px;
  position: absolute;
  top: -150px;
  left: -40px;
  

 }

 #text{
  padding: 90px 80px 90px 60px ;
  margin-left: 300px;

 }

h5{
  font-family: Poppins;
font-size: 40px;
font-weight: 500;
}
 } 
.cards{
padding :24px ;
display: flex;
gap: 55px ;
overflow-x: auto;
position: relative;


}
main{
width: 100%;
padding: 0 124px ;
margin: auto;

> p{
margin-top: 60px;
font-size: 32px;
font-style: normal;
font-weight: 500;
}
}

.slick-slider{

.slick-prev:before {
content: '';
}
.slick-next:before {
content: '';
}

}
footer {
padding: 24px 123px ;
}
}


@media (min-width: 1700px) {

  max-width: 2560px;
  section{
    justify-content: center;
    height: 260px;

    img{
      left: 20px;
    }

    #text{
      display: flex;
      gap: 80px;

      p{
        display: flex;
    align-items: center;
      }
    }
  }
}
`,H2=ae.div`

position: relative;




.BgNone{

background: none;
display: flex;
align-items: center;

}
#price{

color:  #82F3FF;


}


@media (max-width: 430px) {
  .hideInclud{
  display: none;
  
}

#descriptionCard{
  display: none;
}

.wrapperInclud{
  display: flex;
  flex-direction: column;
  gap: 16px ;
   #amountCard{
    display: flex;
    justify-content: center;
   }
   #include{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 162px;
    height: 32px;
    padding: 12px 24px;
   }
}

.itens {
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;


}
 
#favorite {

position: absolute;
right: 16px;
top: 16px;
}

#foodImg{
  width: 88px;
  height: 88px;
  object-fit: cover;
  border-radius: 50%;
  border: 1px solid wheat;
}

#amountCard{
display: flex;
align-items: center;
gap: 14px ;


}



}

@media (min-width: 431px) {


  padding: 24px;
  width: 305px;

  .wrapperInclud{
    display: none;


  }

  .flex{
      display: flex;
      align-items: center;
      gap: 16px ;
    }
  
#favorite{
  top: 16px;
  right: 16px;
  position: absolute;
}
.itens{
  display: grid;
  text-align: center;
  gap: 15px;

  #foodImg{
   margin: auto;
   width: 176px;
   height: 176px;
   object-fit: cover;
   border-radius: 50%;
   border: 1px white solid;
  }

  #foodName{
  font-size: 24px;
  font-weight: 700;
  min-width: 256px;
  }

  #price{
    font-size: 32px;
    font-weight: 400;
  }
  
}


#amountCard{
  display: flex;
  justify-content: center;
  gap: 14px;

  font-size: 20px;
  font-weight: 700;
}

  
}



`,W2=ae.button`
  width: 100%;
  height: 48px;
  padding: 0 32px;
  background: ${({theme:e})=>e.COLORS.Tints_Tomato_100};
  border-radius: 5px;
  border: none;
  color: ${({theme:e})=>e.COLORS.Light_Light_100};
  font-family: "Poppins", sans-serif;
  font-weight: 500;

   display: flex;
   align-items: center;
   place-content: center;



`;function At({to:e,title:t,...n}){return d.jsx(W2,{...n,children:t})}function Fn({id:e,img:t,food:n,description:r,price:i,onIncludeAmount:o,...l}){const[a,s]=C.useState(1),u=()=>{s(a+1)},f=()=>{a>1&&s(a-1)},[c,v]=C.useState(!1),w=()=>{v(!c)},m=()=>{o(a)};return d.jsx(H2,{children:d.jsxs("div",{className:"itens",children:[d.jsx("button",{className:"BgNone",id:"favorite",onClick:w,children:d.jsx("svg",{width:"26",height:"24",fill:"white",viewBox:"0 0 26 24",xmlns:"http://www.w3.org/2000/svg",children:d.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M16.431 0.547789C17.3245 0.160119 18.2845 -0.0261067 19.2515 0.00322722C20.2184 0.0325601 21.1665 0.276652 22.0374 0.71713C22.9076 1.15726 23.68 1.78296 24.3106 2.5511C26.8405 5.6197 26.4109 10.3056 23.8142 13.1522L23.8125 13.154L14.4368 23.38L13.6996 22.7041L14.4335 23.3835C14.0785 23.767 13.5797 24.0002 13.0399 24.0002C12.5001 24.0002 12.0013 23.767 11.6463 23.3835L11.6431 23.38L2.02427 12.8889L2.02403 12.8886C1.35437 12.1577 0.832743 11.2904 0.48681 10.342C0.140901 9.39356 -0.0232599 8.3808 0.00265199 7.36472C0.0285639 6.34864 0.244109 5.34672 0.638319 4.41957C1.03241 3.49272 1.59804 2.65724 2.30497 1.96679C5.18795 -0.860732 9.62203 -0.352917 12.259 2.50881L12.2632 2.51343L12.2632 2.51344L13.0403 3.36745L14.06 2.24794L14.0625 2.24526C14.7328 1.51465 15.5378 0.935316 16.431 0.547789ZM13.0399 21.9441L22.3366 11.8042C22.3369 11.8039 22.3373 11.8035 22.3376 11.8032C24.3465 9.60003 24.588 6.03087 22.7669 3.8227L22.7654 3.82087C22.3047 3.25957 21.7488 2.81242 21.1347 2.50182C20.5209 2.19139 19.8597 2.0226 19.1908 2.00231C18.5219 1.98202 17.8541 2.11046 17.227 2.38253C16.6001 2.65453 16.0243 3.06573 15.5373 3.59614C15.5369 3.59655 15.5365 3.59697 15.5361 3.59739L13.7792 5.52629C13.5896 5.7344 13.3211 5.85297 13.0396 5.8529C12.7582 5.85283 12.4897 5.73411 12.3003 5.5259L10.7861 3.86185C8.79329 1.70132 5.65945 1.47753 3.70476 3.39528L3.70304 3.39697L3.70304 3.39697C3.19108 3.89682 2.77308 4.51016 2.47886 5.20215C2.1846 5.89422 2.02159 6.64762 2.002 7.41571C1.98241 8.18381 2.10676 8.94661 2.36574 9.65666C2.62465 10.3665 3.0115 11.0057 3.49845 11.5373C3.49853 11.5374 3.49861 11.5375 3.49869 11.5376L13.0399 21.9441Z",fill:c?"red":"white"})})}),d.jsx("img",{id:"foodImg",src:t}),d.jsx(we,{to:`/food/${e}`,children:d.jsx("p",{id:"foodName",children:n})}),d.jsx("p",{id:"descriptionCard",children:r}),d.jsxs("p",{id:"price",children:[" R$ ",i," "]}),d.jsx("div",{className:"hideInclud",children:d.jsxs("div",{className:"flex",children:[d.jsxs("div",{id:"amountCard",children:[d.jsx("button",{className:"BgNone",onClick:f,children:d.jsx("img",{src:"src/images/card/less.svg",alt:""})}),d.jsx("p",{children:String(a).padStart(2,"0")}),d.jsx("button",{className:"BgNone",onClick:u,children:d.jsx("img",{src:"src/images/card/more.svg",alt:""})})]}),d.jsx(At,{onClick:m,id:"include",title:"incluir"})]})}),d.jsxs("div",{className:"wrapperInclud",children:[d.jsxs("div",{id:"amountCard",children:[d.jsx("button",{className:"BgNone",onClick:f,children:d.jsx("img",{src:"src/images/card/less.svg",alt:""})}),d.jsx("p",{children:String(a).padStart(2,"0")}),d.jsx("button",{className:"BgNone",onClick:u,children:d.jsx("img",{src:"src/images/card/more.svg",alt:""})})]}),d.jsx(At,{onClick:m,id:"include",title:"incluir"})]})]})})}const Ng="/Food_explorer-Front/assets/right-arrow-15f6c38c.svg",zg="/Food_explorer-Front/assets/left-arrow-83916914.svg",V2=e=>d.jsx("div",{...e,style:{...$g,left:"-20px"},children:d.jsx("img",{src:zg,alt:"Seta para a esquerda"})}),q2=e=>d.jsx("div",{...e,style:{...$g,right:"-20px"},children:d.jsx("img",{src:Ng,alt:"Seta para a direita"})}),$g={fontSize:0,lineHeight:0,position:"absolute",top:"50%",transform:"translate(0, -50%)",width:"20px",height:"20px",cursor:"pointer",opacity:.75,zIndex:1};function Q2(){const[e,t]=C.useState(0),n=h=>{t(p=>p+h)},[r,i]=C.useState([]),[o,l]=C.useState([]),[a,s]=C.useState([]),[u,f]=C.useState(""),[c,v]=C.useState([]),[w,m]=C.useState(window.innerWidth),y=h=>{f(h)};C.useEffect(()=>{Ne.get("/foods").then(h=>{const p=h.data,g=p.filter(k=>k.category==="Refeições"),x=p.filter(k=>k.category==="Sobremesas"),O=p.filter(k=>k.category==="Bebidas");i(g),l(x),s(O)}).catch(h=>{console.error("Erro ao obter dados das comidas:",h)})},[]),C.useEffect(()=>{const h=r.filter(x=>x.title.toLowerCase().includes(u.toLowerCase())),p=o.filter(x=>x.title.toLowerCase().includes(u.toLowerCase())),g=a.filter(x=>x.title.toLowerCase().includes(u.toLowerCase()));v(x=>({...x,refeicoes:h,sobremesas:p,bebidas:g}))},[u,r,o,a]),C.useEffect(()=>{const h=()=>{m(window.innerWidth)};return window.addEventListener("resize",h),()=>{window.removeEventListener("resize",h)}},[]);const S={dots:!0,infinite:!0,speed:500,slidesToShow:3,slidesToScroll:1,prevArrow:d.jsx(V2,{}),nextArrow:d.jsx(q2,{})};return d.jsxs(B2,{children:[d.jsx(ig,{totalAmount:e,setTotalAmount:t,onSearch:y}),d.jsxs("main",{children:[d.jsxs("section",{children:[d.jsx("img",{src:"src/images/home/fruits.svg",alt:"Frutas decorativas "}),d.jsxs("div",{id:"text",children:[d.jsx("h5",{children:"Sabores inigualáveis"}),d.jsx("p",{children:"Sinta o cuidado do preparo com ingredientes selecionados."})]})]}),d.jsx("p",{className:"category",children:"Refeições"}),w>=1080?d.jsxs(sr,{...S,children:[c.refeicoes&&c.refeicoes.map((h,p)=>d.jsx(Fn,{img:`http://localhost:7777/files/${h.avatar}`,id:h.id,food:h.title,description:h.description,price:h.price,onIncludeAmount:n},h.id)),c.refeicoes&&c.refeicoes.length<S.slidesToShow&&Array.from({length:S.slidesToShow-c.refeicoes.length}).map((h,p)=>d.jsx("div",{},`empty-${p}`))]}):d.jsxs("div",{className:"cards",children:[c.refeicoes&&c.refeicoes.map((h,p)=>d.jsx(Fn,{img:`http://localhost:7777/files/${h.avatar}`,id:h.id,food:h.title,description:h.description,price:h.price,onIncludeAmount:n},h.id)),c.refeicoes&&c.refeicoes.length<S.slidesToShow&&Array.from({length:S.slidesToShow-c.refeicoes.length}).map((h,p)=>d.jsx("div",{},`empty-${p}`))]}),d.jsx("p",{className:"category",children:"Sobremesas"}),w>=1080?d.jsxs(sr,{...S,children:[c.sobremesas&&c.sobremesas.map((h,p)=>d.jsx(Fn,{img:`http://localhost:7777/files/${h.avatar}`,id:h.id,food:h.title,description:h.description,price:h.price,onIncludeAmount:n},h.id)),c.sobremesas&&c.sobremesas.length<S.slidesToShow&&Array.from({length:S.slidesToShow-c.sobremesas.length}).map((h,p)=>d.jsx("div",{},`empty-${p}`))]}):d.jsxs("div",{className:"cards",children:[c.sobremesas&&c.sobremesas.map((h,p)=>d.jsx(Fn,{img:`http://localhost:7777/files/${h.avatar}`,id:h.id,food:h.title,description:h.description,price:h.price,onIncludeAmount:n},h.id)),c.sobremesas&&c.sobremesas.length<S.slidesToShow&&Array.from({length:S.slidesToShow-c.sobremesas.length}).map((h,p)=>d.jsx("div",{},`empty-${p}`))]}),d.jsx("p",{className:"category",children:"Bebidas"}),w>=1080?d.jsxs(sr,{...S,children:[c.bebidas&&c.bebidas.map((h,p)=>d.jsx(Fn,{img:`http://localhost:7777/files/${h.avatar}`,id:h.id,food:h.title,description:h.description,price:h.price,onIncludeAmount:n},h.id)),c.bebidas&&c.bebidas.length<S.slidesToShow&&Array.from({length:S.slidesToShow-c.bebidas.length}).map((h,p)=>d.jsx("div",{},`empty-${p}`))]}):d.jsxs("div",{className:"cards",children:[c.bebidas&&c.bebidas.map((h,p)=>d.jsx(Fn,{img:`http://localhost:7777/files/${h.avatar}`,id:h.id,food:h.title,description:h.description,price:h.price,onIncludeAmount:n},h.id)),c.bebidas&&c.bebidas.length<S.slidesToShow&&Array.from({length:S.slidesToShow-c.bebidas.length}).map((h,p)=>d.jsx("div",{},`empty-${p}`))]})]}),d.jsx(gn,{})]})}function K2(){return d.jsxs(Cc,{children:[d.jsx(ct,{path:"/",element:d.jsx(Q2,{})}),d.jsx(ct,{path:"/menu",element:d.jsx(Dw,{})}),d.jsx(ct,{path:"/Food/:id",element:d.jsx(Vw,{})})]})}const G2=ae.div`

margin: auto;

input:focus {
  
  border: 1px solid #fff;
  outline: none;
  

 }


@media(max-width: 425px){

min-width : 425px ;
margin-top: 30%;

padding: 0 65px ;


 h2{
display: none;

 } 

 header{

display: flex;
align-items: center;
gap: 10px ;

margin-bottom: 75px ;

 }

 form {

display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
gap: 32px;

 }

 a {

display: flex;
justify-content: center;

margin-top: 32px;


 }




}

@media(min-width: 426px){

 max-width: 1368px ;
 display: flex;

 justify-content: center;
 justify-content: space-between;
 align-items: center;
 padding: 0 128px;
 

 height: 90vh;


 header {

display: flex;
align-items: center;
gap: 20px ;


>img {

width: 50px;
height: 48px;
}

 }



 main {


 display :flex ;
 flex-direction: column;
 align-items: center;
 gap: 32px;

background: ${({theme:e})=>e.COLORS.Dark_dark_700};

padding: 64px;
border-radius: 16px;




>h2 {

  font-family: Poppins;
  font-weight: 500;
  font-size: 32px;


}
 }


 form{

width: 348px ;

display: flex;
flex-direction: column;
gap: 32px ;



  
}}



`;function Y2(){const[e,t]=C.useState(""),[n,r]=C.useState(""),[i,o]=C.useState(""),l=mn();function a(){if(!e||!n||!i)return alert("Preencha todos os campos !");Ne.post("/users",{name:e,email:n,password:i}).then(()=>{alert("Usuario cadastrado com sucesso"),l("/")}).catch(s=>{s.response?alert(s.response.data.message):alert("Não foi possivel cadastrar")})}return d.jsxs(G2,{children:[d.jsxs("header",{children:[d.jsx("img",{src:"src/images/polygon.svg",alt:"logo"}),d.jsx("h1",{children:"food explorer"})]}),d.jsxs("main",{children:[d.jsx("h2",{children:"Crie sua conta"}),d.jsxs("form",{action:"",children:[d.jsx(sn,{id:"name",label:"Seu nome",placeholder:"Exemplo: Maria da Silva",onChange:s=>t(s.target.value)}),d.jsx(sn,{id:"email",label:"Email",placeholder:"Exemplo: exemplo@exemplo.com.br",onChange:s=>r(s.target.value)}),d.jsx(sn,{type:"password",id:"senha",label:"Senha",placeholder:"No mínimo 6 caracteres",onChange:s=>o(s.target.value)}),d.jsx(At,{type:"button",title:"Entrar",onClick:a})]}),d.jsx(we,{to:"/",children:"Já tenho uma conta"})]})]})}const X2=ae.div`

margin: auto;

input:focus {
  
  border: 1px solid #fff;
  

 }


@media(max-width: 425px){

min-width : 425px ;
margin-top: 30%;

padding: 0 65px ;


 h2{
display: none;

 } 

 header{

display: flex;
align-items: center;
gap: 10px ;

margin-bottom: 75px ;

 }

 form {

display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
gap: 32px;

 }

 a {

display: flex;
justify-content: center;

margin-top: 32px;


 }




}

@media(min-width: 426px){

max-width: 1368px ;
 display: flex;

 justify-content: center;
 justify-content: space-between;
 align-items: center;
 padding: 0 128px;
 

 height: 90vh;


 header {

display: flex;
align-items: center;
gap: 20px ;


>img {

width: 50px;
height: 48px;
}

 }



 main {


 display :flex ;
 flex-direction: column;
 align-items: center;
 gap: 32px;

background: ${({theme:e})=>e.COLORS.Dark_dark_700};

padding: 64px;
border-radius: 16px;




>h2 {

  font-family: Poppins;
  font-weight: 500;
  font-size: 32px;


}
 }


 form{

width: 348px ;

display: flex;
flex-direction: column;
gap: 32px ;



  
}}



`;function J2(){const[e,t]=C.useState(""),[n,r]=C.useState(""),{signIn:i}=br();function o(){i({email:e,password:n})}return d.jsxs(X2,{children:[d.jsxs("header",{children:[d.jsx("img",{src:"src/images/polygon.svg",alt:"logo"}),d.jsx("h1",{children:"food explorer"})]}),d.jsxs("main",{children:[d.jsx("h2",{children:"Faça login"}),d.jsxs("form",{children:[d.jsx(sn,{id:"email",label:"Email",placeholder:"Exemplo: exemplo@exemplo.com.br",onChange:l=>t(l.target.value)}),d.jsx(sn,{type:"password",id:"senha",label:"Senha",placeholder:"No mínimo 6 caracteres",onChange:l=>r(l.target.value)}),d.jsx(At,{type:"button",title:"Entrar",onClick:o})]}),d.jsx(we,{to:"/register",children:"Criar uma conta"})]})]})}function Z2(){return d.jsxs(Cc,{children:[d.jsx(ct,{path:"/",element:d.jsx(J2,{})}),d.jsx(ct,{path:"/register",element:d.jsx(Y2,{})})]})}const ek=ae.header`

display: flex;
max-width: 100%;
background: ${({theme:e})=>e.COLORS.Dark_dark_700};

button{
background:none ;

}

div {
  display: flex;
  align-items: center;

  p{

    color: #82F3FF;
  }

}

@media (max-width: 767px) {

  .wrapper {
   display: none;
   max-width: 428px;
  }

  display: flex;
  gap: 80px;
  padding: 60px 28px 28px;
  margin: auto;

  h1{
    font-size: 21px;
  }
  img{
    width: 25px;
    height: 25px;
  }

 #titleMobile{
  display: flex;
  gap: 8px;
 }

 #adm{
  margin-left: 8px;
 }
  
}


@media (min-width: 768px) {

  display: flex;
  gap: 32px ;
  padding: 24px 123px;
  justify-content: space-between;


  .none {
   display: none;

  }
#btnOptions{
  display: none;
}
  #headerDetails {

    display: flex;
    gap: 32px;
    width: 100%;

    #btnNew{
      display: flex;
     justify-content: center;
     align-items: center;
      max-width: 216px;
     
    }
    
  }

  #headerSearch{
    display: flex;
    gap: 14px;
    background: ${({theme:e})=>e.COLORS.dark_dark_900};
    padding: 12px 130px;
    width: 100%;

    .searchItens{
      display: flex;
      margin: auto;
      gap: 16px;
      
    }

    input {
     width: 100%;
     min-width: 250px;
     background: ${({theme:e})=>e.COLORS.dark_dark_900};
     color: white;
    }
  }

  .title {
display: flex;
flex-direction: column;
align-items: center;

h1{
  font-size: 24px;

}

p{
font-size: 12px;
margin-left: 160px;
}



div {

  display: flex;
  gap: 10px;
}




  }

  #btnNew {

    padding: 12px 32px ;
    background: ${({theme:e})=>e.COLORS.Tints_Tomato_100};
  
  }

}


`;function Gl({onSearch:e}){const t=mn();function n(){t("/new")}const{singOut:r}=br(),[i,o]=C.useState(""),[l,a]=C.useState([]),s=async()=>{try{const u=await Ne.get(`/foods?term=${i}`);a(u.data),e(i)}catch(u){console.error("Erro ao realizar a pesquisa:",u)}};return C.useEffect(()=>{s()},[i]),d.jsxs(ek,{children:[d.jsx(we,{to:"/menu",id:"btnOptions",children:d.jsx("img",{src:rg,alt:"Imagem de opções de menu da Home"})}),d.jsxs("div",{className:"title",children:[d.jsx(we,{to:"/",children:d.jsxs("div",{id:"titleMobile",children:[d.jsx("img",{src:Js,alt:"Logo do app"}),d.jsx("h1",{children:"food explorer"})]})}),d.jsx("p",{id:"adm",children:"admin"})]}),d.jsxs("div",{className:"wrapper",id:"headerDetails",children:[d.jsx("div",{id:"headerSearch",children:d.jsxs("div",{className:"searchItens",children:[d.jsx("img",{src:Ul,alt:""}),d.jsx("input",{type:"text",placeholder:"Busque por pratos ou ingredientes",onChange:u=>o(u.target.value)})]})}),d.jsx(At,{id:"btnNew",title:"Novo prato",onClick:n}),d.jsx(we,{to:"/",id:"LogOut",children:d.jsx("img",{src:ng,alt:"",onClick:r})})]})]})}const tk=ae.form`
display: flex;
flex-direction: column;

#Buttons{
  width: 100%;
  display: flex;
  gap: 30px;

  button{
    padding: 12px 16px;
  }

  button:nth-child(1) {
    background: ${({theme:e})=>e.COLORS.dark_dark_800};
  }
}


textarea {
  resize: none;
  padding: 14px ;
  background-color: ${({theme:e})=>e.COLORS.Dark_dark_700};
  color: ${({theme:e})=>e.COLORS.Light_Light_100} ;

}


@media (max-width: 800px) {
  
  .flex{
    margin-top: 16px;
  }
  #labelUpdate{
    background: ${({theme:e})=>e.COLORS.dark_dark_800};
    border-radius: 8px;
    padding: 12px 32px;
    display: flex;
    gap: 8px ;

    input{
      display: none;
    }
  }

  #ingredients{
    padding: 4px 8px;
    border-radius: 8px ;
  }


  #Buttons{


  


  button{
    padding: 12px 24px;
    font-size: 14px;
    text-align: center;
    max-width: 172px ;
  }

  button:nth-child(1){
    max-width: 162px;
   
  }


  }


}


@media (min-width: 800px) {


  #labelUpdate{
   
    background: ${({theme:e})=>e.COLORS.dark_dark_800};
    border-radius: 8px;
    padding: 12px 32px;
    display: flex;
    align-items: center;
    gap: 8px;
    width: 230px;

    img{
      width: 24px;
      height: 24px;
    }

    input{
      display: none;
    }
  }

  .lineOne{
  display: flex;
  gap: 32px;
  width: 100%;

 .nameWidht{
  width: 100%;


 }




}


.lineTwo{
  display: flex;
  gap: 32px ;
  width: 100%;
  
  #ingredients{
  display: flex;
  height: 48px;
  

   input{
  padding: 0;
   }

  }

   img{
    height: 8px;
    width: 8px;
   }


 }

 #Buttons{
  padding-bottom: 120px;
  justify-content: end;

  button{
    width: 172px;
  }
  
  button:nth-child(1){
  width: 135px ;
  font-size: 12px;
  }

 }

#widhtIngredient{
  width: 100%;
}
  
}









`,nk=ae.div`


  display: flex;
  
  align-items: center;
  border-radius: 8px;
  padding: 10px 16px;
  width: 130px;

  background-color: ${({theme:e,isNew:t})=>t?"transparent":e.COLORS.light_light_600};
  color: ${({theme:e})=>e.COLORS.GRAY_300};

  border: ${({theme:e,isNew:t})=>t?`1px dashed ${e.COLORS.light_light_500}`:"none"};


  > button { 
    border: none;
    background: none;
  }

  .button-delete {
    color: ${({theme:e})=>e.COLORS.Light_Light_100};
  }

  .button-add {
    color: ${({theme:e})=>e.COLORS.light_light_500};
  }

  > input {
  

    color: ${({theme:e})=>e.COLORS.Light_Light_100};
    background: transparent;
    width: 100%;
    font-size: 16px;
    border: none;

    &::placeholder {
      color: ${({theme:e})=>e.light_light_500};
    }
  }











`,rk="/Food_explorer-Front/assets/close-ddbe68ba.svg",ik="/Food_explorer-Front/assets/open-ef805be0.svg";function dl({isNew:e,value:t,onClick:n,...r}){return d.jsxs(nk,{isNew:e,children:[d.jsx("input",{type:"text",value:t,readOnly:!e,...r}),d.jsx("button",{type:"button",onClick:n,className:e?"button-add":"button-delete",children:e?d.jsx("img",{src:ik,alt:""}):d.jsx("img",{src:rk})})]})}const Ig="/Food_explorer-Front/assets/update-7ba38ef5.svg";function ok(){const e=mn(),[t,n]=C.useState([]),[r,i]=C.useState(""),[o,l]=C.useState(""),[a,s]=C.useState(""),[u,f]=C.useState(""),[c,v]=C.useState(""),[w,m]=C.useState(null),y=Oc();function S(){n(x=>[...x,r]),i("")}function h(x){n(O=>O.filter(k=>k!==x))}async function p(){const x=new FormData;x.append("avatar",w),x.append("title",o),x.append("description",a),x.append("category",c),x.append("price",u),(Array.isArray(t)?t:[t]).forEach((k,E)=>{x.append(`ingredient[${E}]`,k)}),await Ne.put(`/foods/${y.id}`,x).then(alert("atualizado com sucesso")).catch(k=>{k.response?alert(k.response.data.message):alert("Erro ao atualizar o prato")})}async function g(){window.confirm("Deseja realmente deletar esse prato")&&(await Ne.delete(`/foods/${y.id}`),alert("Deletado com sucesso"),e("/"))}return d.jsxs(tk,{children:[d.jsx("section",{children:d.jsxs("div",{className:"lineOne",children:[d.jsxs("div",{className:"flex",children:[d.jsx("label",{htmlFor:"image",children:"Imagem do prato"}),d.jsxs("label",{htmlFor:"image",id:"labelUpdate",children:[d.jsx("input",{id:"image",type:"file",onChange:x=>m(x.target.files[0])}),d.jsx("img",{src:Ig,alt:""}),"Selecione imagem"]})]}),d.jsx("div",{className:"nameWidht",children:d.jsxs("div",{className:"flex",children:[d.jsx("label",{htmlFor:"name",children:"Nome"}),d.jsx("input",{id:"name",type:"text",placeholder:"Ex.: Salada Ceasar",onChange:x=>l(x.target.value)})]})}),d.jsxs("div",{className:"flex",children:[d.jsx("label",{htmlFor:"category",children:"Categoria"}),d.jsxs("select",{name:"opçoes",id:"category",onChange:x=>v(x.target.value),children:[d.jsx("option",{value:"Refeições",children:"Selecione a categoria"}),d.jsx("option",{value:"Refeições",children:"Refeições"}),d.jsx("option",{value:"Sobremesas",children:"Sobremesas"}),d.jsx("option",{value:"Bebidas",children:"Bebidas"})]})]})]})}),d.jsx("section",{children:d.jsxs("div",{className:"lineTwo",children:[d.jsxs("div",{id:"widhtIngredient",className:"flex",children:[d.jsx("label",{htmlFor:"ingredients",children:"Ingredientes"}),d.jsxs("div",{id:"ingredients",children:[t.map((x,O)=>d.jsx(dl,{value:x,onClick:()=>h(x)},String(O))),d.jsx(dl,{isNew:!0,placeholder:"Adicionar",value:r,onChange:x=>i(x.target.value),onClick:S})]})]}),d.jsxs("div",{className:"flex",children:[d.jsx("label",{htmlFor:"price",children:"Preço"}),d.jsx("input",{id:"price",placeholder:"R$ 00,00",type:"text",onChange:x=>f(x.target.value)})]})]})}),d.jsx("label",{htmlFor:"description",children:"Descrição"}),d.jsx("textarea",{name:"descrição",id:"description",cols:"30",rows:"7",placeholder:"A Salada César é uma opção refrescante para o verão.",onChange:x=>s(x.target.value)}),d.jsxs("div",{id:"Buttons",children:[d.jsx(At,{type:"button",title:"Excluir prato",onClick:g}),d.jsx(At,{type:"button",className:"btn",title:"Salvar alterações",onClick:p})]})]})}const lk=ae.div`
  button {
    background: none;
    color: ${({theme:e})=>e.COLORS.light_light_300};
  }

  label {
    color: ${({theme:e})=>e.COLORS.Light_Light_400};
  }

  input {
    background: ${({theme:e})=>e.COLORS.dark_dark_800};
    color: ${({theme:e})=>e.COLORS.Light_Light_100};
  }

  @media (max-width: 768px) {
    min-width: 375px;

    header {
      display: flex;
      gap: 60px;
      padding: 56px 28px 24px;

      img {
        width: 24px;
        height: 24px;
      }

      h1 {
        font-size: 21px;
      }

      p {
        font-size: 12px;
      }

      div {
        display: flex;
        align-items: center;
        gap: 8px;
      }
    }

    .edit {
      padding: 10px 32px 24px;

      button {
        margin-bottom: 35px;
      }
    }

    form {
      display: grid;
      gap: 24px;
      padding: 0 32px 53px;

      label {
        display: block;
        margin-bottom: 16px;
      }

      input {
        color: ${({theme:e})=>e.COLORS.Light_Light_100};
        padding: 12px 16px;
        border-radius: 8px;
        width: 100%;
      }

      select {
        padding: 16px;
        color: ${({theme:e})=>e.COLORS.Light_Light_400};
        background: ${({theme:e})=>e.COLORS.dark_dark_900};
        border: none;
        border-radius: 8px;
        width: 100%;
      }

      #ingredients {
        display: flex;
        align-items: center;
        gap: 16px;
        background-color: ${({theme:e})=>e.COLORS.dark_dark_800};

        div {
          margin: 0;
          padding: 10px 16px;
        }

        input {
          background: none;
          padding: 0;
        }

        button {
          padding: 0;
        }

        img {
          width: 8px;
          height: 8px;
        }
      }

      textarea {
        width: 100%;
      }

      .btn {
        background-color: ${({theme:e})=>e.COLORS.Tints_Tomato_400};
      }
    }
  }

  @media (min-width: 769px) {
    width: 100%;

    margin: auto;

    section {
      display: flex;
      gap: 20px;
      margin-top: 32px;

      .flex {
        display: grid;
        gap: 16px;
      }
    }

    .edit {
      padding: 46px 123px 0;

      button {
        margin-bottom: 24px;
      }
    }

    form {
      padding: 0 123px;

      input {
        padding: 12px 16px;
        border-radius: 8px;
      }

      #image {
        width: 230px;
      }
      #name {
        padding: 16px;
        width: 100%;
      }

      select {
        padding: 16px;
        color: ${({theme:e})=>e.COLORS.Light_Light_400};
        background: ${({theme:e})=>e.COLORS.dark_dark_900};
        border: none;
        border-radius: 8px;
        width: 295px;
      }

      #ingredients {
        width: 100%;
      }

      #price {
        width: 225px;
      }

      .flex {
        #ingredients {
          display: flex;
          gap: 16px;
          background: ${({theme:e})=>e.COLORS.dark_dark_800};
          padding: 4px 8px;
          border-radius: 8px;

          input {
            background: none;
          }

          button {
            font-size: 8px;
          }
        }
      }

      .lineTwo {
        margin-bottom: 32px;
      }

      textarea {
        margin: 16px 0 32px;
      }

      #btnSave {
        display: flex;
        justify-content: end;
      }

      .btn {
        background-color: ${({theme:e})=>e.COLORS.Tints_Tomato_400};
        width: 172px;

        font-size: 14px;
      }
    }

    footer {
      padding: 24px 123px;
    }
  }
`;function ak(){return d.jsxs(lk,{children:[d.jsx(Gl,{}),d.jsxs("div",{className:"edit",children:[d.jsx(Bl,{}),d.jsx("h1",{children:"Editar Prato"})]}),d.jsx(ok,{}),d.jsx(gn,{})]})}const sk=ae.div`



@media (max-width: 430px) {

 main{

padding: 16px 56px  0 ;
text-align: center;

 }


.detailsFood{

margin-top : 16px;
display: flex;
flex-direction: column;
gap: 24px;



#imgFood{
  width: 264px;
 height: 264px;
 margin: auto;
 border-radius: 50%;
 }

 .recipe{
  display: flex;

    flex-direction: column;
    gap: 24px;
 }

h2{
  font-size: 27.041px;
}

 p{
 font-size: 17px;
 }

section{
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 24px;

 
  
 #ingredient{
  background: #192227;
  padding: 4px 8px;
  font-size: 14px;
  border-radius: 5px;

 }

}
 

}


.order{

  margin: 48px 0 55px ;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;


.quantity{

display: flex;
align-items: center;
gap: 16px;

}

#request{
    padding: 8px 30px;
    display: flex;
    align-items: center;
    gap: 8px;
    border-radius: 3px;

    background:${({theme:e})=>e.COLORS.Tints_Tomato_100} ;
  
    font-size: 14px;
 
}





}

#editBtn{
  margin-top: 48px;
  margin-bottom: 50px;
 
}

  footer{
padding: 24px 28px ;
}
  
}


@media (min-width: 431px) {



main{

  padding: 24px 120px 155px ;
  

  #btnBack {

 display: flex;
 align-items: center;
  font-size: 24px;




}

.detailsFood{


  margin-top: 42px ;
  display: flex;
  gap: 48px;

 .detailsRequest{
 display: flex;
 flex-direction: column;
 gap: 48px;
 margin-top: 45px;

 } 

#imgFood{
  
  width: 390px;
  height: 389px;
  
  border-radius: 50%;
  object-fit: cover;
}

 .recipe{
  display: flex;
  flex-direction: column;
  gap: 24px ;

  h2{
    font-size: 40px;

  }

  #description{
    font-size: 24px;
    line-height: 140%;
  }

section{
  display: flex;
  flex-wrap: wrap;
  gap: 28px;


  #ingredient{
  background: #192227;
  padding: 4px 8px;
  font-size: 14px;
  border-radius: 5px;

 }

  .rowOne,.rowTwo{
  display: flex;
  gap: 28px;
 
  }
}



 }


}

}


.order{
display: flex;
align-items: center;
gap: 34px;

img{

}
}

.quantity{
display: flex;
gap: 14px;


span{
  font-size: 20px;
  font-weight: 700;
}


button{
  display: flex;
  align-items: center;
}
}

#editBtn{
  width: 130px;
  padding: 12px 24px;
  font-size: 14px;

}




footer{
  padding: 24px 123px;
}


  
}




`;function uk(){const e=mn(),t=Oc(),[n,r]=C.useState({id:"",avatar:"",title:"",description:"",ingredients:[]});function i(){e(`/edit/${t.id}`)}return C.useEffect(()=>{Ne.get(`/foods/${t.id}`).then(o=>{const{id:l,avatar:a,title:s,description:u,ingredients:f}=o.data,c=`http://localhost:7777/files/${a}`;r({id:l,avatar:c,title:s,description:u,ingredients:f})}).catch(o=>{console.error("erro ao obter dados do produto",o)})},[t.id]),d.jsxs(sk,{children:[d.jsx(Gl,{}),d.jsxs("main",{children:[d.jsx(Bl,{}),d.jsxs("div",{className:"detailsFood",children:[d.jsx("img",{id:"imgFood",src:n.avatar,alt:"imagem do prato"}),d.jsxs("div",{className:"detailsRequest",children:[d.jsxs("div",{className:"recipe",children:[d.jsx("h2",{children:n.title}),d.jsx("p",{id:"description",children:n.description}),d.jsx("section",{children:n.ingredients.map((o,l)=>d.jsx("div",{id:"ingredient",children:o},l))})]}),d.jsx(At,{id:"editBtn",title:"Editar Prato",onClick:i})]})]})]}),d.jsx(gn,{})]})}const ck=ae.div`
  width: 100%;
  margin: auto;

  .none {
    display: none;
  }


  .slick-track:hover>:not(:hover){

opacity: .4;
transform: scale(0.9);
transition: .85s;


}

  @media (max-width: 430px) {
    min-width: 425px;


    section {
      
      display: flex;
      height: 110px;
      background: linear-gradient(180deg, #091e26 0%, #00131c 100%);
      border-radius: 3px;
      margin-top: 40px;
      position: relative;

      img {
        width: 191px;
        height: 149px;
        position: absolute;
        top: -20px;
        left: -30px;
        opacity: 0.8;
      }
      #text {
        margin: 30px 0 0 160px;
        font-family: Poppins;
        p {
          margin-top: 6px;
          font-size: 12px;
        }
        h5 {
          font-weight: 600;
          font-size: 18px;
        }
      }
    }

    main{
      padding: 0 24px;
     
    }
    .category {
      margin: 62px 0 24px;
    }
    .cards {
    
     
      display: flex;
      overflow-x: auto;
      

      .itens {
        padding: 24px;
        display: flex;
        gap: 12px;
        justify-content: center;
        align-items: center;
        width: 210px;

        p{
          text-align: center;
        }
      }
    }

    .cards:nth-child(7){
     margin-bottom: 80px;
    }
  }
  @media (min-width: 431px) {
    section {
      position: relative;
      display: flex;
      justify-content: flex-end;
      background: linear-gradient(180deg, #091e26 0%, #00131c 100%);
      margin-top: 164px;
      width: 100%;
      border-radius: 8px;

      img {
        opacity: 0.8;
        width: 632px;
        height: 406px;
        position: absolute;
        top: -150px;
        left: -40px;
      }

      #text {
        padding: 90px 80px 90px 60px;
        margin-left: 300px;
      }

      h5 {
        font-family: Poppins;
        font-size: 40px;
        font-weight: 500;
      }
    }
    .cards {
      padding: 24px;
      display: flex;
      gap: 55px;
      overflow-x: auto;
      position: relative;
    }
    main {
      width: 100%;
      padding: 0 124px;
      margin: auto;

      > p {
        margin-top: 60px;
        font-size: 32px;
        font-style: normal;
        font-weight: 500;
      }

      .slick-slider{

        .slick-prev:before {
       content: '';
       }
       .slick-next:before {
    content: '';
}
      
      }
    }
    footer {
      padding: 24px 123px;
    }
  }

  @media (min-width: 1700px) {
    max-width: 2560px;
    section {
      justify-content: center;
      height: 260px;

      img {
        left: 20px;
      }

      #text {
        display: flex;
        gap: 80px;

        p {
          display: flex;
          align-items: center;
        }
      }
    }
  }
`,dk=ae.div`
  position: relative;

  .BgNone {
    background: none;
    display: flex;
    align-items: center;
  }
  #price {
    color: #82f3ff;
  }

  a{
    position: relative;
  }
  

  @media (max-width: 430px) {
    .hideInclud {
      display: none;
    }

    #descriptionCard {
      display: none;
    }
    .descriptionNone .wrapperInclud {
      display: flex;
      flex-direction: column;
      gap: 16px;
      #amountCard {
        display: flex;
        justify-content: center;
      }
      #include {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 162px;
        height: 32px;
        padding: 12px 24px;
      }
    }

    .itens {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    #penEdit {
      position: absolute;
      left: 45px;

      width: 24px;
      height: 24px;
    }

    #foodImg{
      width: 88px;
height: 88px;
      object-fit: cover;
        border-radius: 50%;
        border: 1px solid white;
    }

    #amountCard {
      display: flex;
      align-items: center;
      gap: 14px;
    }
  }

  @media (min-width: 431px) {
    padding: 24px;
    width: 305px;

    .wrapperInclud {
      display: none;
    }

    .flex {
      display: flex;
      align-items: center;
      gap: 16px;
    }

    #penEdit {
      right: 16px;
      position: absolute;
    }
    .itens {
      display: grid;
      text-align: center;
      gap: 15px;

      #foodImg {
        margin: auto;
        width: 176px;
        height: 176px;

        object-fit: cover;
        border-radius: 50%;
        border: 1px solid white;
      }

      #foodName {
        font-size: 24px;
        font-weight: 700;
        min-width: 256px;
      }

      #price {
        font-size: 32px;
        font-weight: 400;
      }
    }

    #amountCard {
      display: flex;
      justify-content: center;
      gap: 14px;

      font-size: 20px;
      font-weight: 700;
    }
  }
`;function Un({id:e,img:t,food:n,description:r,price:i}){return d.jsx(dk,{children:d.jsxs("div",{className:"itens",children:[d.jsx(we,{to:`/edit/${e}`,className:"BgNone",children:d.jsx("img",{id:"penEdit",src:"src/images/pen.svg",alt:"icone de editar comida"})}),d.jsx("img",{id:"foodImg",src:t}),d.jsx(we,{to:`/food/${e}`,children:d.jsx("p",{id:"foodName",children:n})}),d.jsx("p",{id:"descriptionCard",children:r}),d.jsxs("p",{id:"price",children:[" R$ ",i," "]})]})})}const fk=e=>d.jsx("div",{...e,style:{...Ag,left:"-20px"},children:d.jsx("img",{src:zg,alt:"Seta para a esquerda"})}),pk=e=>d.jsx("div",{...e,style:{...Ag,right:"-20px"},children:d.jsx("img",{src:Ng,alt:"Seta para a direita"})}),Ag={fontSize:0,lineHeight:0,position:"absolute",top:"50%",transform:"translate(0, -50%)",width:"20px",height:"20px",cursor:"pointer",opacity:.75,zIndex:1};function hk(){const[e,t]=C.useState([]),[n,r]=C.useState([]),[i,o]=C.useState([]),[l,a]=C.useState(""),[s,u]=C.useState([]),[f,c]=C.useState(window.innerWidth),v=m=>{a(m)};C.useEffect(()=>{Ne.get("/foods").then(m=>{const y=m.data,S=y.filter(g=>g.category==="Refeições"),h=y.filter(g=>g.category==="Sobremesas"),p=y.filter(g=>g.category==="Bebidas");t(S),r(h),o(p)}).catch(m=>{console.error("Erro ao obter dados das comidas:",m)})},[]),C.useEffect(()=>{const m=e.filter(h=>h.title.toLowerCase().includes(l.toLowerCase())),y=n.filter(h=>h.title.toLowerCase().includes(l.toLowerCase())),S=i.filter(h=>h.title.toLowerCase().includes(l.toLowerCase()));u({refeicoes:m,sobremesas:y,bebidas:S})},[l,e,n,i]),C.useEffect(()=>{const m=()=>{c(window.innerWidth)};return window.addEventListener("resize",m),()=>{window.removeEventListener("resize",m)}},[]);const w={dots:!0,infinite:!0,speed:500,slidesToShow:3,slidesToScroll:1,prevArrow:d.jsx(fk,{}),nextArrow:d.jsx(pk,{})};return d.jsxs(ck,{children:[d.jsx(Gl,{onSearch:v}),d.jsxs("main",{children:[d.jsxs("section",{children:[d.jsx("img",{src:"src/images/home/fruits.svg",alt:"Frutas decorativas "}),d.jsxs("div",{id:"text",children:[d.jsx("h5",{children:"Sabores inigualáveis"}),d.jsx("p",{children:"Sinta o cuidado do preparo com ingredientes selecionados."})]})]}),d.jsx("p",{className:"category",children:"Refeições"}),f>=1080?d.jsxs(sr,{...w,children:[s.refeicoes&&s.refeicoes.map((m,y)=>d.jsx(Un,{img:`http://localhost:7777/files/${m.avatar}`,id:m.id,food:m.title,description:m.description,price:m.price},m.id)),s.refeicoes&&s.refeicoes.length<w.slidesToShow&&Array.from({length:w.slidesToShow-s.refeicoes.length}).map((m,y)=>d.jsx("div",{},`empty-${y}`))]}):d.jsxs("div",{className:"cards",children:[s.refeicoes&&s.refeicoes.map((m,y)=>d.jsx(Un,{img:`http://localhost:7777/files/${m.avatar}`,id:m.id,food:m.title,description:m.description,price:m.price},m.id)),s.refeicoes&&s.refeicoes.length<w.slidesToShow&&Array.from({length:w.slidesToShow-s.refeicoes.length}).map((m,y)=>d.jsx("div",{},`empty-${y}`))]}),d.jsx("p",{className:"category",children:"Sobremesas"}),f>=1080?d.jsxs(sr,{...w,children:[s.sobremesas&&s.sobremesas.map((m,y)=>d.jsx(Un,{img:`http://localhost:7777/files/${m.avatar}`,id:m.id,food:m.title,description:m.description,price:m.price},m.id)),s.sobremesas&&s.sobremesas.length<w.slidesToShow&&Array.from({length:w.slidesToShow-s.sobremesas.length}).map((m,y)=>d.jsx("div",{},`empty-${y}`))]}):d.jsxs("div",{className:"cards",children:[s.sobremesas&&s.sobremesas.map((m,y)=>d.jsx(Un,{img:`http://localhost:7777/files/${m.avatar}`,id:m.id,food:m.title,description:m.description,price:m.price},m.id)),s.sobremesas&&s.sobremesas.length<w.slidesToShow&&Array.from({length:w.slidesToShow-s.sobremesas.length}).map((m,y)=>d.jsx("div",{},`empty-${y}`))]}),d.jsx("p",{className:"category",children:"Bebidas"}),f>=1080?d.jsxs(sr,{...w,children:[s.bebidas&&s.bebidas.map((m,y)=>d.jsx(Un,{img:`http://localhost:7777/files/${m.avatar}`,id:m.id,food:m.title,description:m.description,price:m.price},m.id)),s.bebidas&&s.bebidas.length<w.slidesToShow&&Array.from({length:w.slidesToShow-s.bebidas.length}).map((m,y)=>d.jsx("div",{},`empty-${y}`))]}):d.jsxs("div",{className:"cards",children:[s.bebidas&&s.bebidas.map((m,y)=>d.jsx(Un,{img:`http://localhost:7777/files/${m.avatar}`,id:m.id,food:m.title,description:m.description,price:m.price},m.id)),s.bebidas&&s.bebidas.length<w.slidesToShow&&Array.from({length:w.slidesToShow-s.bebidas.length}).map((m,y)=>d.jsx("div",{},`empty-${y}`))]})]}),d.jsx(gn,{})]})}const mk=ae.div`
margin: auto;
height: 100%;
max-width: 425px ;
button {
background: none;
color: #E1E1E6;
}
header{
background: ${({theme:e})=>e.COLORS.Dark_dark_700};
display: flex;
align-items: center;
gap: 16px;
padding-left: 28px ;
overflow: hidden;
height: 144px ;
button{
height: 16px;
width: 16px;
}
}

section {
display: grid;
gap: 20px ;
margin-top: 36px;
justify-content: start;

a{
  font-size: 24px ;
  color: #E1E1E6;
  font-family: "Poppins" , sans-serif;
}


}
main{
  max-width: 1110px;
  margin: 0 28px;
  min-height: 600px;
  button{
font-family: Poppins;
font-size: 24px;
  }
}

ul li{
  margin: 40px 20px;
}
#Error{
  margin-top: 40px;
}
.search{
display: flex;
align-items: center;
padding: 0 14px;
border-radius: 5px;
background: ${({theme:e})=>e.COLORS.Dark_dark_700};
margin-top: 36px;


img{
  margin-top: 10px;
}

input {
background: none;
}
}
`;function gk(){const{singOut:e}=br(),t=mn(),[n,r]=C.useState(""),[i,o]=C.useState([]),[l,a]=C.useState(null),s=async()=>{try{const f=await Ne.get(`/foods?term=${n}`);o(f.data),a(null)}catch(f){console.error("Erro ao realizar a pesquisa:",f),o([]),a("Nenhum resultado encontrado.")}},u=f=>{t(`/food/${f}`)};return C.useEffect(()=>{n.trim()!==""?s():(o([]),a(null))},[n]),d.jsxs(mk,{children:[d.jsxs("header",{children:[d.jsx(we,{to:"/",children:d.jsx("img",{src:"src/images/close.svg",alt:"Imagem para fechar Menu"})}),d.jsx("p",{children:"Menu"})]}),d.jsxs("main",{children:[d.jsxs("div",{className:"search",children:[d.jsx("img",{src:Ul,alt:"Imagem de lupa de pesquisa"}),d.jsx(sn,{placeholder:"Busque por pratos ou ingredientes",onChange:f=>r(f.target.value)})]}),i.length>0&&d.jsx("ul",{children:i.map(f=>d.jsx("li",{onClick:()=>u(f.id),children:f.title},f.id))}),i.length===0&&n.trim()!==""&&d.jsx("p",{id:"Error",children:l||"Nenhum resultado encontrado."}),d.jsxs("section",{children:[d.jsx(we,{to:"/new",children:"Novo prato"}),d.jsx(we,{to:"/",onClick:e,children:"Sair"})]})]}),d.jsx(gn,{})]})}const vk=ae.form`
display: flex;
flex-direction: column;




textarea {
  resize: none;
  padding: 14px ;
  background-color: ${({theme:e})=>e.COLORS.Dark_dark_700};
  color: ${({theme:e})=>e.COLORS.Light_Light_100} ;

}


@media (max-width: 800px) {
  
  
  #labelUpdate{
    background: ${({theme:e})=>e.COLORS.dark_dark_800};
    border-radius: 8px;
    padding: 12px 32px;
    display: flex;
    gap: 8px ;

    input{
      display: none;
    }
  }

}


@media (min-width: 800px) {


  #labelUpdate{
   
    background: ${({theme:e})=>e.COLORS.dark_dark_800};
    border-radius: 8px;
    padding: 12px 32px;
    display: flex;
    align-items: center;
    gap: 8px;
    width: 230px;

    img{
      width: 24px;
      height: 24px;
    }

    input{
      display: none;
    }
  }

  .lineOne{
  display: flex;
  gap: 32px;
  width: 100%;

 .nameWidht{
  width: 100%;


 }




}


.lineTwo{
  display: flex;
  gap: 32px ;
  width: 100%;
  
  #ingredients{

    flex-wrap: wrap;

   input{
  padding: 0;
   }

  }

   img{
    height: 8px;
    width: 8px;
   }


 }

#widhtIngredient{
  width: 100%;
  
}
  
}









`;function yk(){const[e,t]=C.useState(""),[n,r]=C.useState(""),[i,o]=C.useState(""),[l,a]=C.useState(""),[s,u]=C.useState(null),[f,c]=C.useState([]),[v,w]=C.useState(""),m=mn();function y(){c(p=>[...p,v]),w("")}function S(p){c(g=>g.filter(x=>x!==p))}async function h(){if(!s)return alert("Você não inseriu a imagem do prato");if(!e)return alert("Você não inseriu o titulo do prato");if(!l)return alert("Você não inseriu a categoria do prato");if(f.length<1)return alert("Você precisa pelo menos inserir um ingrediente");if(!i)return alert("Você não inseriu o valor do prato");if(!n)return alert("Você não inseriu a descrição do prato");const p=new FormData;p.append("avatar",s),p.append("title",e),p.append("description",n),p.append("category",l),p.append("price",i),(Array.isArray(f)?f:[f]).forEach((x,O)=>{p.append(`ingredient[${O}]`,x)}),await Ne.post("/foods",p).then(alert("Criado com sucesso"),m("/")).catch(x=>{x.response?alert(x.response.data.message):alert("Erro ao criar o prato")})}return d.jsxs(vk,{encType:"multipart/form-data",children:[d.jsx("section",{children:d.jsxs("div",{className:"lineOne",children:[d.jsxs("div",{className:"flex",children:[d.jsx("label",{htmlFor:"image",children:"Imagem do prato"}),d.jsxs("label",{htmlFor:"image",id:"labelUpdate",children:[d.jsx("input",{id:"image",type:"file",name:"avatar",accept:"image/*",onChange:p=>u(p.target.files[0])}),d.jsx("img",{src:Ig,alt:""}),"Selecione imagem"]})]}),d.jsx("div",{className:"nameWidht",children:d.jsxs("div",{className:"flex",children:[d.jsx("label",{htmlFor:"name",children:"Nome"}),d.jsx("input",{id:"name",type:"text",placeholder:"Ex.: Salada Ceasar",onChange:p=>t(p.target.value)})]})}),d.jsxs("div",{className:"flex",children:[d.jsx("label",{htmlFor:"category",children:"Categoria"}),d.jsxs("select",{name:"opçoes",id:"category",onChange:p=>a(p.target.value),children:[d.jsx("option",{value:"",children:"Selecione a categoria"}),d.jsx("option",{value:"Refeições",children:"Refeições"}),d.jsx("option",{value:"Sobremesas",children:"Sobremesas"}),d.jsx("option",{value:"Bebidas",children:"Bebidas"})]})]})]})}),d.jsx("section",{children:d.jsxs("div",{className:"lineTwo",children:[d.jsxs("div",{id:"widhtIngredient",className:"flex",children:[d.jsx("label",{htmlFor:"ingredients",children:"Ingredientes"}),d.jsxs("div",{id:"ingredients",children:[f.map((p,g)=>d.jsx(dl,{value:p,onClick:()=>S(p)},String(g))),d.jsx(dl,{isNew:!0,placeholder:"Adicionar",value:v,onChange:p=>w(p.target.value),onClick:y})]})]}),d.jsxs("div",{className:"flex",children:[d.jsx("label",{htmlFor:"price",children:"Preço"}),d.jsx("input",{id:"price",placeholder:"R$ 00,00",type:"text",onChange:p=>o(p.target.value)})]})]})}),d.jsx("label",{htmlFor:"description",children:"Descrição"}),d.jsx("textarea",{name:"descrição",id:"description",cols:"30",rows:"7",placeholder:"A Salada César é uma opção refrescante para o verão.",onChange:p=>r(p.target.value)}),d.jsx("div",{id:"btnSave",children:d.jsx(At,{onClick:h,className:"btn",title:"Salvar alterações",type:"button"})})]})}const xk=ae.div`



button {
    background: none;
    color: ${({theme:e})=>e.COLORS.light_light_300};
}

label{
    color: ${({theme:e})=>e.COLORS.Light_Light_400};

}

input {
    background: ${({theme:e})=>e.COLORS.dark_dark_800};
    color:${({theme:e})=>e.COLORS.Light_Light_100} ;

}



@media (max-width: 768px ) {

   min-width : 375px ;

   


header {

display: flex;
gap: 60px ;
padding: 56px 28px 24px;


img{

width: 24px;
height: 24px;

}

h1 {
font-size: 21px;

}

p{
    font-size: 12px;

}


div {

display: flex;
align-items: center;
gap: 8px;
}


}

.new {
    padding: 10px 32px 24px;

    button {
        margin-bottom: 35px ;
    }
    
}


form {

display: grid;
gap: 24px;
padding: 0 32px 53px;



label {

display: block;
margin-bottom: 16px;

}

input {

color:${({theme:e})=>e.COLORS.Light_Light_100} ;
padding: 12px 16px;
border-radius: 8px;
width: 100%;

}

.flex {
div {
    
    padding: 2px 8px;
    border-radius: 8px;
    margin-bottom: 24px ;
    
    button{

        padding: 10px 16px;
    }
}

}
select {

padding: 16px;
color: ${({theme:e})=>e.COLORS.Light_Light_400};
background: ${({theme:e})=>e.COLORS.dark_dark_900} ;
border: none;
border-radius: 8px;
width: 100%;
}

#ingredients{
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    padding: 4px 8px;
    gap: 16px;
    background-color: ${({theme:e})=>e.COLORS.dark_dark_800};

    div{

        margin: 0;
        padding: 10px 16px;
    }

    input{
        background: none;
        padding: 0;
    }
    
    button{
        padding: 0;
    }
  

    img{
        width: 8px;
        height: 8px;
    }
}

textarea{
 width: 100%;
}

.btn {
background-color: ${({theme:e})=>e.COLORS.Tints_Tomato_400};
margin-top: 36px;
}


}
 








    
}


@media (min-width: 769px) {

   width: 100%;

    margin: auto;



  section {

        display: flex;
        gap: 20px;
        margin-top:32px ;

      .flex {
        display: grid;
        gap: 16px ;

      }
       
    }


.new{
padding: 46px 123px 0 ;

 button{
    margin-bottom: 24px;
 }


}    

form{


padding: 0 123px ;


 input {
padding: 12px 16px ;
border-radius: 8px;

 }

 #image {

    width: 230px ;
    
 }
 #name {
   padding: 16px;
   width :100%;
 }


 select {

padding: 16px;
color: ${({theme:e})=>e.COLORS.Light_Light_400};
background: ${({theme:e})=>e.COLORS.dark_dark_900} ;
border: none;
border-radius: 8px;
width: 295px;
}



#price{
    width: 225px;
}

.flex {

 
   #ingredients  {
    width: 100%;
    display: flex;
    gap: 16px;
    background: ${({theme:e})=>e.COLORS.dark_dark_800} ;
    padding: 4px 8px;
    border-radius: 8px;

     input{
        background: none;
     }

    button{

        font-size: 8px;
        
    }
}
}

.lineTwo {
margin-bottom: 32px;

}

textarea {
margin: 16px 0 32px;

}

#btnSave{
    display: flex;
    justify-content: end;
}

.btn {
background-color: ${({theme:e})=>e.COLORS.Tints_Tomato_400};
width: 172px;

font-size: 14px;

padding: 12px 24px;

margin-bottom: 140px ;
}





      
}

footer {

padding: 24px 123px;

}
  



    
}





`;function wk(){return d.jsxs(xk,{children:[d.jsx(Gl,{}),d.jsxs("div",{className:"new",children:[d.jsx(Bl,{}),d.jsx("h1",{children:"Novo Prato"})]}),d.jsx(yk,{}),d.jsx(gn,{})]})}function Sk(){return d.jsxs(Cc,{children:[d.jsx(ct,{path:"/",element:d.jsx(hk,{})}),d.jsx(ct,{path:"/food/:id",element:d.jsx(uk,{})}),d.jsx(ct,{path:"/edit/:id",element:d.jsx(ak,{})}),d.jsx(ct,{path:"/menu",element:d.jsx(gk,{})}),d.jsx(ct,{path:"/new",element:d.jsx(wk,{})})]})}function kk(){const{user:e}=br(),t=e&&e.email==="gabriel@gmail.com";return d.jsx(Rw,{children:t?d.jsx(Sk,{}):e?d.jsx(K2,{}):d.jsx(Z2,{})})}Ba.createRoot(document.getElementById("root")).render(d.jsx(C.StrictMode,{children:d.jsxs(f1,{theme:f0,children:[d.jsx(g1,{}),d.jsx($x,{children:d.jsx(kk,{})})]})}));
