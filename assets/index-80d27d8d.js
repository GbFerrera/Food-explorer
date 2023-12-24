function Bg(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var Ai=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Bf(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function Hg(e){if(e.__esModule)return e;var t=e.default;if(typeof t=="function"){var n=function r(){return this instanceof r?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach(function(r){var i=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(n,r,i.get?i:{enumerable:!0,get:function(){return e[r]}})}),n}var Hf={exports:{}},pl={},Wf={exports:{}},H={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ji=Symbol.for("react.element"),Wg=Symbol.for("react.portal"),Vg=Symbol.for("react.fragment"),qg=Symbol.for("react.strict_mode"),Qg=Symbol.for("react.profiler"),Kg=Symbol.for("react.provider"),Gg=Symbol.for("react.context"),Yg=Symbol.for("react.forward_ref"),Xg=Symbol.for("react.suspense"),Jg=Symbol.for("react.memo"),Zg=Symbol.for("react.lazy"),$c=Symbol.iterator;function ev(e){return e===null||typeof e!="object"?null:(e=$c&&e[$c]||e["@@iterator"],typeof e=="function"?e:null)}var Vf={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},qf=Object.assign,Qf={};function Cr(e,t,n){this.props=e,this.context=t,this.refs=Qf,this.updater=n||Vf}Cr.prototype.isReactComponent={};Cr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Cr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Kf(){}Kf.prototype=Cr.prototype;function vu(e,t,n){this.props=e,this.context=t,this.refs=Qf,this.updater=n||Vf}var yu=vu.prototype=new Kf;yu.constructor=vu;qf(yu,Cr.prototype);yu.isPureReactComponent=!0;var Ic=Array.isArray,Gf=Object.prototype.hasOwnProperty,xu={current:null},Yf={key:!0,ref:!0,__self:!0,__source:!0};function Xf(e,t,n){var r,i={},o=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(o=""+t.key),t)Gf.call(t,r)&&!Yf.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var s=Array(a),u=0;u<a;u++)s[u]=arguments[u+2];i.children=s}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:ji,type:e,key:o,ref:l,props:i,_owner:xu.current}}function tv(e,t){return{$$typeof:ji,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function wu(e){return typeof e=="object"&&e!==null&&e.$$typeof===ji}function nv(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Ac=/\/+/g;function Zl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?nv(""+e.key):t.toString(36)}function io(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(o){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case ji:case Wg:l=!0}}if(l)return l=e,i=i(l),e=r===""?"."+Zl(l,0):r,Ic(i)?(n="",e!=null&&(n=e.replace(Ac,"$&/")+"/"),io(i,t,n,"",function(u){return u})):i!=null&&(wu(i)&&(i=tv(i,n+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(Ac,"$&/")+"/")+e)),t.push(i)),1;if(l=0,r=r===""?".":r+":",Ic(e))for(var a=0;a<e.length;a++){o=e[a];var s=r+Zl(o,a);l+=io(o,t,n,s,i)}else if(s=ev(e),typeof s=="function")for(e=s.call(e),a=0;!(o=e.next()).done;)o=o.value,s=r+Zl(o,a++),l+=io(o,t,n,s,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function Di(e,t,n){if(e==null)return e;var r=[],i=0;return io(e,r,"","",function(o){return t.call(n,o,i++)}),r}function rv(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ze={current:null},oo={transition:null},iv={ReactCurrentDispatcher:ze,ReactCurrentBatchConfig:oo,ReactCurrentOwner:xu};H.Children={map:Di,forEach:function(e,t,n){Di(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Di(e,function(){t++}),t},toArray:function(e){return Di(e,function(t){return t})||[]},only:function(e){if(!wu(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};H.Component=Cr;H.Fragment=Vg;H.Profiler=Qg;H.PureComponent=vu;H.StrictMode=qg;H.Suspense=Xg;H.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=iv;H.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=qf({},e.props),i=e.key,o=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,l=xu.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(s in t)Gf.call(t,s)&&!Yf.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&a!==void 0?a[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){a=Array(s);for(var u=0;u<s;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:ji,type:e.type,key:i,ref:o,props:r,_owner:l}};H.createContext=function(e){return e={$$typeof:Gg,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Kg,_context:e},e.Consumer=e};H.createElement=Xf;H.createFactory=function(e){var t=Xf.bind(null,e);return t.type=e,t};H.createRef=function(){return{current:null}};H.forwardRef=function(e){return{$$typeof:Yg,render:e}};H.isValidElement=wu;H.lazy=function(e){return{$$typeof:Zg,_payload:{_status:-1,_result:e},_init:rv}};H.memo=function(e,t){return{$$typeof:Jg,type:e,compare:t===void 0?null:t}};H.startTransition=function(e){var t=oo.transition;oo.transition={};try{e()}finally{oo.transition=t}};H.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};H.useCallback=function(e,t){return ze.current.useCallback(e,t)};H.useContext=function(e){return ze.current.useContext(e)};H.useDebugValue=function(){};H.useDeferredValue=function(e){return ze.current.useDeferredValue(e)};H.useEffect=function(e,t){return ze.current.useEffect(e,t)};H.useId=function(){return ze.current.useId()};H.useImperativeHandle=function(e,t,n){return ze.current.useImperativeHandle(e,t,n)};H.useInsertionEffect=function(e,t){return ze.current.useInsertionEffect(e,t)};H.useLayoutEffect=function(e,t){return ze.current.useLayoutEffect(e,t)};H.useMemo=function(e,t){return ze.current.useMemo(e,t)};H.useReducer=function(e,t,n){return ze.current.useReducer(e,t,n)};H.useRef=function(e){return ze.current.useRef(e)};H.useState=function(e){return ze.current.useState(e)};H.useSyncExternalStore=function(e,t,n){return ze.current.useSyncExternalStore(e,t,n)};H.useTransition=function(){return ze.current.useTransition()};H.version="18.2.0";Wf.exports=H;var C=Wf.exports;const Ze=Bf(C),ov=Bg({__proto__:null,default:Ze},[C]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lv=C,av=Symbol.for("react.element"),sv=Symbol.for("react.fragment"),uv=Object.prototype.hasOwnProperty,cv=lv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,dv={key:!0,ref:!0,__self:!0,__source:!0};function Jf(e,t,n){var r,i={},o=null,l=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)uv.call(t,r)&&!dv.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:av,type:e,key:o,ref:l,props:i,_owner:cv.current}}pl.Fragment=sv;pl.jsx=Jf;pl.jsxs=Jf;Hf.exports=pl;var d=Hf.exports,Wa={},Zf={exports:{}},Qe={},ep={exports:{}},tp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(R,A){var I=R.length;R.push(A);e:for(;0<I;){var V=I-1>>>1,K=R[V];if(0<i(K,A))R[V]=A,R[I]=K,I=V;else break e}}function n(R){return R.length===0?null:R[0]}function r(R){if(R.length===0)return null;var A=R[0],I=R.pop();if(I!==A){R[0]=I;e:for(var V=0,K=R.length,mt=K>>>1;V<mt;){var ge=2*(V+1)-1,_t=R[ge],Ye=ge+1,gt=R[Ye];if(0>i(_t,I))Ye<K&&0>i(gt,_t)?(R[V]=gt,R[Ye]=I,V=Ye):(R[V]=_t,R[ge]=I,V=ge);else if(Ye<K&&0>i(gt,I))R[V]=gt,R[Ye]=I,V=Ye;else break e}}return A}function i(R,A){var I=R.sortIndex-A.sortIndex;return I!==0?I:R.id-A.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var l=Date,a=l.now();e.unstable_now=function(){return l.now()-a}}var s=[],u=[],f=1,c=null,v=3,w=!1,m=!1,y=!1,S=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(R){for(var A=n(u);A!==null;){if(A.callback===null)r(u);else if(A.startTime<=R)r(u),A.sortIndex=A.expirationTime,t(s,A);else break;A=n(u)}}function x(R){if(y=!1,g(R),!m)if(n(s)!==null)m=!0,Pe(O);else{var A=n(u);A!==null&&Ie(x,A.startTime-R)}}function O(R,A){m=!1,y&&(y=!1,h(_),_=-1),w=!0;var I=v;try{for(g(A),c=n(s);c!==null&&(!(c.expirationTime>A)||R&&!M());){var V=c.callback;if(typeof V=="function"){c.callback=null,v=c.priorityLevel;var K=V(c.expirationTime<=A);A=e.unstable_now(),typeof K=="function"?c.callback=K:c===n(s)&&r(s),g(A)}else r(s);c=n(s)}if(c!==null)var mt=!0;else{var ge=n(u);ge!==null&&Ie(x,ge.startTime-A),mt=!1}return mt}finally{c=null,v=I,w=!1}}var k=!1,E=null,_=-1,P=5,T=-1;function M(){return!(e.unstable_now()-T<P)}function $(){if(E!==null){var R=e.unstable_now();T=R;var A=!0;try{A=E(!0,R)}finally{A?z():(k=!1,E=null)}}else k=!1}var z;if(typeof p=="function")z=function(){p($)};else if(typeof MessageChannel<"u"){var Ge=new MessageChannel,ue=Ge.port2;Ge.port1.onmessage=$,z=function(){ue.postMessage(null)}}else z=function(){S($,0)};function Pe(R){E=R,k||(k=!0,z())}function Ie(R,A){_=S(function(){R(e.unstable_now())},A)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(R){R.callback=null},e.unstable_continueExecution=function(){m||w||(m=!0,Pe(O))},e.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<R?Math.floor(1e3/R):5},e.unstable_getCurrentPriorityLevel=function(){return v},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(R){switch(v){case 1:case 2:case 3:var A=3;break;default:A=v}var I=v;v=A;try{return R()}finally{v=I}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(R,A){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var I=v;v=R;try{return A()}finally{v=I}},e.unstable_scheduleCallback=function(R,A,I){var V=e.unstable_now();switch(typeof I=="object"&&I!==null?(I=I.delay,I=typeof I=="number"&&0<I?V+I:V):I=V,R){case 1:var K=-1;break;case 2:K=250;break;case 5:K=1073741823;break;case 4:K=1e4;break;default:K=5e3}return K=I+K,R={id:f++,callback:A,priorityLevel:R,startTime:I,expirationTime:K,sortIndex:-1},I>V?(R.sortIndex=I,t(u,R),n(s)===null&&R===n(u)&&(y?(h(_),_=-1):y=!0,Ie(x,I-V))):(R.sortIndex=K,t(s,R),m||w||(m=!0,Pe(O))),R},e.unstable_shouldYield=M,e.unstable_wrapCallback=function(R){var A=v;return function(){var I=v;v=A;try{return R.apply(this,arguments)}finally{v=I}}}})(tp);ep.exports=tp;var fv=ep.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var np=C,qe=fv;function b(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var rp=new Set,ti={};function $n(e,t){cr(e,t),cr(e+"Capture",t)}function cr(e,t){for(ti[e]=t,e=0;e<t.length;e++)rp.add(t[e])}var Nt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Va=Object.prototype.hasOwnProperty,pv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Dc={},Mc={};function hv(e){return Va.call(Mc,e)?!0:Va.call(Dc,e)?!1:pv.test(e)?Mc[e]=!0:(Dc[e]=!0,!1)}function mv(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function gv(e,t,n,r){if(t===null||typeof t>"u"||mv(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function $e(e,t,n,r,i,o,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=l}var Ce={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ce[e]=new $e(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Ce[t]=new $e(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ce[e]=new $e(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ce[e]=new $e(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ce[e]=new $e(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ce[e]=new $e(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ce[e]=new $e(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ce[e]=new $e(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ce[e]=new $e(e,5,!1,e.toLowerCase(),null,!1,!1)});var Su=/[\-:]([a-z])/g;function ku(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Su,ku);Ce[t]=new $e(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Su,ku);Ce[t]=new $e(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Su,ku);Ce[t]=new $e(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ce[e]=new $e(e,1,!1,e.toLowerCase(),null,!1,!1)});Ce.xlinkHref=new $e("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ce[e]=new $e(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ou(e,t,n,r){var i=Ce.hasOwnProperty(t)?Ce[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(gv(t,n,i,r)&&(n=null),r||i===null?hv(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Dt=np.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Mi=Symbol.for("react.element"),Hn=Symbol.for("react.portal"),Wn=Symbol.for("react.fragment"),Cu=Symbol.for("react.strict_mode"),qa=Symbol.for("react.profiler"),ip=Symbol.for("react.provider"),op=Symbol.for("react.context"),_u=Symbol.for("react.forward_ref"),Qa=Symbol.for("react.suspense"),Ka=Symbol.for("react.suspense_list"),Eu=Symbol.for("react.memo"),Ht=Symbol.for("react.lazy"),lp=Symbol.for("react.offscreen"),Fc=Symbol.iterator;function Rr(e){return e===null||typeof e!="object"?null:(e=Fc&&e[Fc]||e["@@iterator"],typeof e=="function"?e:null)}var oe=Object.assign,ea;function Mr(e){if(ea===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);ea=t&&t[1]||""}return`
`+ea+e}var ta=!1;function na(e,t){if(!e||ta)return"";ta=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),l=i.length-1,a=o.length-1;1<=l&&0<=a&&i[l]!==o[a];)a--;for(;1<=l&&0<=a;l--,a--)if(i[l]!==o[a]){if(l!==1||a!==1)do if(l--,a--,0>a||i[l]!==o[a]){var s=`
`+i[l].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=l&&0<=a);break}}}finally{ta=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Mr(e):""}function vv(e){switch(e.tag){case 5:return Mr(e.type);case 16:return Mr("Lazy");case 13:return Mr("Suspense");case 19:return Mr("SuspenseList");case 0:case 2:case 15:return e=na(e.type,!1),e;case 11:return e=na(e.type.render,!1),e;case 1:return e=na(e.type,!0),e;default:return""}}function Ga(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Wn:return"Fragment";case Hn:return"Portal";case qa:return"Profiler";case Cu:return"StrictMode";case Qa:return"Suspense";case Ka:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case op:return(e.displayName||"Context")+".Consumer";case ip:return(e._context.displayName||"Context")+".Provider";case _u:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Eu:return t=e.displayName||null,t!==null?t:Ga(e.type)||"Memo";case Ht:t=e._payload,e=e._init;try{return Ga(e(t))}catch{}}return null}function yv(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ga(t);case 8:return t===Cu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function un(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ap(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function xv(e){var t=ap(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(l){r=""+l,o.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Fi(e){e._valueTracker||(e._valueTracker=xv(e))}function sp(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ap(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function _o(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ya(e,t){var n=t.checked;return oe({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Uc(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=un(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function up(e,t){t=t.checked,t!=null&&Ou(e,"checked",t,!1)}function Xa(e,t){up(e,t);var n=un(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ja(e,t.type,n):t.hasOwnProperty("defaultValue")&&Ja(e,t.type,un(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Bc(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Ja(e,t,n){(t!=="number"||_o(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Fr=Array.isArray;function nr(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+un(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Za(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(b(91));return oe({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Hc(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(b(92));if(Fr(n)){if(1<n.length)throw Error(b(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:un(n)}}function cp(e,t){var n=un(t.value),r=un(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Wc(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function dp(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function es(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?dp(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Ui,fp=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Ui=Ui||document.createElement("div"),Ui.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Ui.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function ni(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Wr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},wv=["Webkit","ms","Moz","O"];Object.keys(Wr).forEach(function(e){wv.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Wr[t]=Wr[e]})});function pp(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Wr.hasOwnProperty(e)&&Wr[e]?(""+t).trim():t+"px"}function hp(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=pp(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Sv=oe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ts(e,t){if(t){if(Sv[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(b(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(b(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(b(61))}if(t.style!=null&&typeof t.style!="object")throw Error(b(62))}}function ns(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var rs=null;function ju(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var is=null,rr=null,ir=null;function Vc(e){if(e=Ri(e)){if(typeof is!="function")throw Error(b(280));var t=e.stateNode;t&&(t=yl(t),is(e.stateNode,e.type,t))}}function mp(e){rr?ir?ir.push(e):ir=[e]:rr=e}function gp(){if(rr){var e=rr,t=ir;if(ir=rr=null,Vc(e),t)for(e=0;e<t.length;e++)Vc(t[e])}}function vp(e,t){return e(t)}function yp(){}var ra=!1;function xp(e,t,n){if(ra)return e(t,n);ra=!0;try{return vp(e,t,n)}finally{ra=!1,(rr!==null||ir!==null)&&(yp(),gp())}}function ri(e,t){var n=e.stateNode;if(n===null)return null;var r=yl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(b(231,t,typeof n));return n}var os=!1;if(Nt)try{var Tr={};Object.defineProperty(Tr,"passive",{get:function(){os=!0}}),window.addEventListener("test",Tr,Tr),window.removeEventListener("test",Tr,Tr)}catch{os=!1}function kv(e,t,n,r,i,o,l,a,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(f){this.onError(f)}}var Vr=!1,Eo=null,jo=!1,ls=null,Ov={onError:function(e){Vr=!0,Eo=e}};function Cv(e,t,n,r,i,o,l,a,s){Vr=!1,Eo=null,kv.apply(Ov,arguments)}function _v(e,t,n,r,i,o,l,a,s){if(Cv.apply(this,arguments),Vr){if(Vr){var u=Eo;Vr=!1,Eo=null}else throw Error(b(198));jo||(jo=!0,ls=u)}}function In(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function wp(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function qc(e){if(In(e)!==e)throw Error(b(188))}function Ev(e){var t=e.alternate;if(!t){if(t=In(e),t===null)throw Error(b(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return qc(i),e;if(o===r)return qc(i),t;o=o.sibling}throw Error(b(188))}if(n.return!==r.return)n=i,r=o;else{for(var l=!1,a=i.child;a;){if(a===n){l=!0,n=i,r=o;break}if(a===r){l=!0,r=i,n=o;break}a=a.sibling}if(!l){for(a=o.child;a;){if(a===n){l=!0,n=o,r=i;break}if(a===r){l=!0,r=o,n=i;break}a=a.sibling}if(!l)throw Error(b(189))}}if(n.alternate!==r)throw Error(b(190))}if(n.tag!==3)throw Error(b(188));return n.stateNode.current===n?e:t}function Sp(e){return e=Ev(e),e!==null?kp(e):null}function kp(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=kp(e);if(t!==null)return t;e=e.sibling}return null}var Op=qe.unstable_scheduleCallback,Qc=qe.unstable_cancelCallback,jv=qe.unstable_shouldYield,bv=qe.unstable_requestPaint,se=qe.unstable_now,Pv=qe.unstable_getCurrentPriorityLevel,bu=qe.unstable_ImmediatePriority,Cp=qe.unstable_UserBlockingPriority,bo=qe.unstable_NormalPriority,Rv=qe.unstable_LowPriority,_p=qe.unstable_IdlePriority,hl=null,kt=null;function Tv(e){if(kt&&typeof kt.onCommitFiberRoot=="function")try{kt.onCommitFiberRoot(hl,e,void 0,(e.current.flags&128)===128)}catch{}}var dt=Math.clz32?Math.clz32:zv,Lv=Math.log,Nv=Math.LN2;function zv(e){return e>>>=0,e===0?32:31-(Lv(e)/Nv|0)|0}var Bi=64,Hi=4194304;function Ur(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Po(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,l=n&268435455;if(l!==0){var a=l&~i;a!==0?r=Ur(a):(o&=l,o!==0&&(r=Ur(o)))}else l=n&~i,l!==0?r=Ur(l):o!==0&&(r=Ur(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-dt(t),i=1<<n,r|=e[n],t&=~i;return r}function $v(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Iv(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var l=31-dt(o),a=1<<l,s=i[l];s===-1?(!(a&n)||a&r)&&(i[l]=$v(a,t)):s<=t&&(e.expiredLanes|=a),o&=~a}}function as(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Ep(){var e=Bi;return Bi<<=1,!(Bi&4194240)&&(Bi=64),e}function ia(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function bi(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-dt(t),e[t]=n}function Av(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-dt(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function Pu(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-dt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var G=0;function jp(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var bp,Ru,Pp,Rp,Tp,ss=!1,Wi=[],Xt=null,Jt=null,Zt=null,ii=new Map,oi=new Map,qt=[],Dv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Kc(e,t){switch(e){case"focusin":case"focusout":Xt=null;break;case"dragenter":case"dragleave":Jt=null;break;case"mouseover":case"mouseout":Zt=null;break;case"pointerover":case"pointerout":ii.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":oi.delete(t.pointerId)}}function Lr(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Ri(t),t!==null&&Ru(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Mv(e,t,n,r,i){switch(t){case"focusin":return Xt=Lr(Xt,e,t,n,r,i),!0;case"dragenter":return Jt=Lr(Jt,e,t,n,r,i),!0;case"mouseover":return Zt=Lr(Zt,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return ii.set(o,Lr(ii.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,oi.set(o,Lr(oi.get(o)||null,e,t,n,r,i)),!0}return!1}function Lp(e){var t=wn(e.target);if(t!==null){var n=In(t);if(n!==null){if(t=n.tag,t===13){if(t=wp(n),t!==null){e.blockedOn=t,Tp(e.priority,function(){Pp(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function lo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=us(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);rs=r,n.target.dispatchEvent(r),rs=null}else return t=Ri(n),t!==null&&Ru(t),e.blockedOn=n,!1;t.shift()}return!0}function Gc(e,t,n){lo(e)&&n.delete(t)}function Fv(){ss=!1,Xt!==null&&lo(Xt)&&(Xt=null),Jt!==null&&lo(Jt)&&(Jt=null),Zt!==null&&lo(Zt)&&(Zt=null),ii.forEach(Gc),oi.forEach(Gc)}function Nr(e,t){e.blockedOn===t&&(e.blockedOn=null,ss||(ss=!0,qe.unstable_scheduleCallback(qe.unstable_NormalPriority,Fv)))}function li(e){function t(i){return Nr(i,e)}if(0<Wi.length){Nr(Wi[0],e);for(var n=1;n<Wi.length;n++){var r=Wi[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Xt!==null&&Nr(Xt,e),Jt!==null&&Nr(Jt,e),Zt!==null&&Nr(Zt,e),ii.forEach(t),oi.forEach(t),n=0;n<qt.length;n++)r=qt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<qt.length&&(n=qt[0],n.blockedOn===null);)Lp(n),n.blockedOn===null&&qt.shift()}var or=Dt.ReactCurrentBatchConfig,Ro=!0;function Uv(e,t,n,r){var i=G,o=or.transition;or.transition=null;try{G=1,Tu(e,t,n,r)}finally{G=i,or.transition=o}}function Bv(e,t,n,r){var i=G,o=or.transition;or.transition=null;try{G=4,Tu(e,t,n,r)}finally{G=i,or.transition=o}}function Tu(e,t,n,r){if(Ro){var i=us(e,t,n,r);if(i===null)ha(e,t,r,To,n),Kc(e,r);else if(Mv(i,e,t,n,r))r.stopPropagation();else if(Kc(e,r),t&4&&-1<Dv.indexOf(e)){for(;i!==null;){var o=Ri(i);if(o!==null&&bp(o),o=us(e,t,n,r),o===null&&ha(e,t,r,To,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else ha(e,t,r,null,n)}}var To=null;function us(e,t,n,r){if(To=null,e=ju(r),e=wn(e),e!==null)if(t=In(e),t===null)e=null;else if(n=t.tag,n===13){if(e=wp(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return To=e,null}function Np(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Pv()){case bu:return 1;case Cp:return 4;case bo:case Rv:return 16;case _p:return 536870912;default:return 16}default:return 16}}var Kt=null,Lu=null,ao=null;function zp(){if(ao)return ao;var e,t=Lu,n=t.length,r,i="value"in Kt?Kt.value:Kt.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===i[o-r];r++);return ao=i.slice(e,1<r?1-r:void 0)}function so(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Vi(){return!0}function Yc(){return!1}function Ke(e){function t(n,r,i,o,l){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=l,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Vi:Yc,this.isPropagationStopped=Yc,this}return oe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Vi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Vi)},persist:function(){},isPersistent:Vi}),t}var _r={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Nu=Ke(_r),Pi=oe({},_r,{view:0,detail:0}),Hv=Ke(Pi),oa,la,zr,ml=oe({},Pi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:zu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==zr&&(zr&&e.type==="mousemove"?(oa=e.screenX-zr.screenX,la=e.screenY-zr.screenY):la=oa=0,zr=e),oa)},movementY:function(e){return"movementY"in e?e.movementY:la}}),Xc=Ke(ml),Wv=oe({},ml,{dataTransfer:0}),Vv=Ke(Wv),qv=oe({},Pi,{relatedTarget:0}),aa=Ke(qv),Qv=oe({},_r,{animationName:0,elapsedTime:0,pseudoElement:0}),Kv=Ke(Qv),Gv=oe({},_r,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Yv=Ke(Gv),Xv=oe({},_r,{data:0}),Jc=Ke(Xv),Jv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Zv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ey={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ty(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=ey[e])?!!t[e]:!1}function zu(){return ty}var ny=oe({},Pi,{key:function(e){if(e.key){var t=Jv[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=so(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Zv[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:zu,charCode:function(e){return e.type==="keypress"?so(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?so(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ry=Ke(ny),iy=oe({},ml,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Zc=Ke(iy),oy=oe({},Pi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:zu}),ly=Ke(oy),ay=oe({},_r,{propertyName:0,elapsedTime:0,pseudoElement:0}),sy=Ke(ay),uy=oe({},ml,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),cy=Ke(uy),dy=[9,13,27,32],$u=Nt&&"CompositionEvent"in window,qr=null;Nt&&"documentMode"in document&&(qr=document.documentMode);var fy=Nt&&"TextEvent"in window&&!qr,$p=Nt&&(!$u||qr&&8<qr&&11>=qr),ed=String.fromCharCode(32),td=!1;function Ip(e,t){switch(e){case"keyup":return dy.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ap(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Vn=!1;function py(e,t){switch(e){case"compositionend":return Ap(t);case"keypress":return t.which!==32?null:(td=!0,ed);case"textInput":return e=t.data,e===ed&&td?null:e;default:return null}}function hy(e,t){if(Vn)return e==="compositionend"||!$u&&Ip(e,t)?(e=zp(),ao=Lu=Kt=null,Vn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return $p&&t.locale!=="ko"?null:t.data;default:return null}}var my={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function nd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!my[e.type]:t==="textarea"}function Dp(e,t,n,r){mp(r),t=Lo(t,"onChange"),0<t.length&&(n=new Nu("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Qr=null,ai=null;function gy(e){Gp(e,0)}function gl(e){var t=Kn(e);if(sp(t))return e}function vy(e,t){if(e==="change")return t}var Mp=!1;if(Nt){var sa;if(Nt){var ua="oninput"in document;if(!ua){var rd=document.createElement("div");rd.setAttribute("oninput","return;"),ua=typeof rd.oninput=="function"}sa=ua}else sa=!1;Mp=sa&&(!document.documentMode||9<document.documentMode)}function id(){Qr&&(Qr.detachEvent("onpropertychange",Fp),ai=Qr=null)}function Fp(e){if(e.propertyName==="value"&&gl(ai)){var t=[];Dp(t,ai,e,ju(e)),xp(gy,t)}}function yy(e,t,n){e==="focusin"?(id(),Qr=t,ai=n,Qr.attachEvent("onpropertychange",Fp)):e==="focusout"&&id()}function xy(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return gl(ai)}function wy(e,t){if(e==="click")return gl(t)}function Sy(e,t){if(e==="input"||e==="change")return gl(t)}function ky(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ht=typeof Object.is=="function"?Object.is:ky;function si(e,t){if(ht(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Va.call(t,i)||!ht(e[i],t[i]))return!1}return!0}function od(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ld(e,t){var n=od(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=od(n)}}function Up(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Up(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Bp(){for(var e=window,t=_o();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=_o(e.document)}return t}function Iu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Oy(e){var t=Bp(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Up(n.ownerDocument.documentElement,n)){if(r!==null&&Iu(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=ld(n,o);var l=ld(n,r);i&&l&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Cy=Nt&&"documentMode"in document&&11>=document.documentMode,qn=null,cs=null,Kr=null,ds=!1;function ad(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ds||qn==null||qn!==_o(r)||(r=qn,"selectionStart"in r&&Iu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Kr&&si(Kr,r)||(Kr=r,r=Lo(cs,"onSelect"),0<r.length&&(t=new Nu("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=qn)))}function qi(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Qn={animationend:qi("Animation","AnimationEnd"),animationiteration:qi("Animation","AnimationIteration"),animationstart:qi("Animation","AnimationStart"),transitionend:qi("Transition","TransitionEnd")},ca={},Hp={};Nt&&(Hp=document.createElement("div").style,"AnimationEvent"in window||(delete Qn.animationend.animation,delete Qn.animationiteration.animation,delete Qn.animationstart.animation),"TransitionEvent"in window||delete Qn.transitionend.transition);function vl(e){if(ca[e])return ca[e];if(!Qn[e])return e;var t=Qn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Hp)return ca[e]=t[n];return e}var Wp=vl("animationend"),Vp=vl("animationiteration"),qp=vl("animationstart"),Qp=vl("transitionend"),Kp=new Map,sd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function dn(e,t){Kp.set(e,t),$n(t,[e])}for(var da=0;da<sd.length;da++){var fa=sd[da],_y=fa.toLowerCase(),Ey=fa[0].toUpperCase()+fa.slice(1);dn(_y,"on"+Ey)}dn(Wp,"onAnimationEnd");dn(Vp,"onAnimationIteration");dn(qp,"onAnimationStart");dn("dblclick","onDoubleClick");dn("focusin","onFocus");dn("focusout","onBlur");dn(Qp,"onTransitionEnd");cr("onMouseEnter",["mouseout","mouseover"]);cr("onMouseLeave",["mouseout","mouseover"]);cr("onPointerEnter",["pointerout","pointerover"]);cr("onPointerLeave",["pointerout","pointerover"]);$n("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));$n("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));$n("onBeforeInput",["compositionend","keypress","textInput","paste"]);$n("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));$n("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));$n("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Br="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),jy=new Set("cancel close invalid load scroll toggle".split(" ").concat(Br));function ud(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,_v(r,t,void 0,e),e.currentTarget=null}function Gp(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var l=r.length-1;0<=l;l--){var a=r[l],s=a.instance,u=a.currentTarget;if(a=a.listener,s!==o&&i.isPropagationStopped())break e;ud(i,a,u),o=s}else for(l=0;l<r.length;l++){if(a=r[l],s=a.instance,u=a.currentTarget,a=a.listener,s!==o&&i.isPropagationStopped())break e;ud(i,a,u),o=s}}}if(jo)throw e=ls,jo=!1,ls=null,e}function X(e,t){var n=t[gs];n===void 0&&(n=t[gs]=new Set);var r=e+"__bubble";n.has(r)||(Yp(t,e,2,!1),n.add(r))}function pa(e,t,n){var r=0;t&&(r|=4),Yp(n,e,r,t)}var Qi="_reactListening"+Math.random().toString(36).slice(2);function ui(e){if(!e[Qi]){e[Qi]=!0,rp.forEach(function(n){n!=="selectionchange"&&(jy.has(n)||pa(n,!1,e),pa(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Qi]||(t[Qi]=!0,pa("selectionchange",!1,t))}}function Yp(e,t,n,r){switch(Np(t)){case 1:var i=Uv;break;case 4:i=Bv;break;default:i=Tu}n=i.bind(null,t,n,e),i=void 0,!os||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function ha(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(l===4)for(l=r.return;l!==null;){var s=l.tag;if((s===3||s===4)&&(s=l.stateNode.containerInfo,s===i||s.nodeType===8&&s.parentNode===i))return;l=l.return}for(;a!==null;){if(l=wn(a),l===null)return;if(s=l.tag,s===5||s===6){r=o=l;continue e}a=a.parentNode}}r=r.return}xp(function(){var u=o,f=ju(n),c=[];e:{var v=Kp.get(e);if(v!==void 0){var w=Nu,m=e;switch(e){case"keypress":if(so(n)===0)break e;case"keydown":case"keyup":w=ry;break;case"focusin":m="focus",w=aa;break;case"focusout":m="blur",w=aa;break;case"beforeblur":case"afterblur":w=aa;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=Xc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=Vv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=ly;break;case Wp:case Vp:case qp:w=Kv;break;case Qp:w=sy;break;case"scroll":w=Hv;break;case"wheel":w=cy;break;case"copy":case"cut":case"paste":w=Yv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=Zc}var y=(t&4)!==0,S=!y&&e==="scroll",h=y?v!==null?v+"Capture":null:v;y=[];for(var p=u,g;p!==null;){g=p;var x=g.stateNode;if(g.tag===5&&x!==null&&(g=x,h!==null&&(x=ri(p,h),x!=null&&y.push(ci(p,x,g)))),S)break;p=p.return}0<y.length&&(v=new w(v,m,null,n,f),c.push({event:v,listeners:y}))}}if(!(t&7)){e:{if(v=e==="mouseover"||e==="pointerover",w=e==="mouseout"||e==="pointerout",v&&n!==rs&&(m=n.relatedTarget||n.fromElement)&&(wn(m)||m[zt]))break e;if((w||v)&&(v=f.window===f?f:(v=f.ownerDocument)?v.defaultView||v.parentWindow:window,w?(m=n.relatedTarget||n.toElement,w=u,m=m?wn(m):null,m!==null&&(S=In(m),m!==S||m.tag!==5&&m.tag!==6)&&(m=null)):(w=null,m=u),w!==m)){if(y=Xc,x="onMouseLeave",h="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(y=Zc,x="onPointerLeave",h="onPointerEnter",p="pointer"),S=w==null?v:Kn(w),g=m==null?v:Kn(m),v=new y(x,p+"leave",w,n,f),v.target=S,v.relatedTarget=g,x=null,wn(f)===u&&(y=new y(h,p+"enter",m,n,f),y.target=g,y.relatedTarget=S,x=y),S=x,w&&m)t:{for(y=w,h=m,p=0,g=y;g;g=Mn(g))p++;for(g=0,x=h;x;x=Mn(x))g++;for(;0<p-g;)y=Mn(y),p--;for(;0<g-p;)h=Mn(h),g--;for(;p--;){if(y===h||h!==null&&y===h.alternate)break t;y=Mn(y),h=Mn(h)}y=null}else y=null;w!==null&&cd(c,v,w,y,!1),m!==null&&S!==null&&cd(c,S,m,y,!0)}}e:{if(v=u?Kn(u):window,w=v.nodeName&&v.nodeName.toLowerCase(),w==="select"||w==="input"&&v.type==="file")var O=vy;else if(nd(v))if(Mp)O=Sy;else{O=xy;var k=yy}else(w=v.nodeName)&&w.toLowerCase()==="input"&&(v.type==="checkbox"||v.type==="radio")&&(O=wy);if(O&&(O=O(e,u))){Dp(c,O,n,f);break e}k&&k(e,v,u),e==="focusout"&&(k=v._wrapperState)&&k.controlled&&v.type==="number"&&Ja(v,"number",v.value)}switch(k=u?Kn(u):window,e){case"focusin":(nd(k)||k.contentEditable==="true")&&(qn=k,cs=u,Kr=null);break;case"focusout":Kr=cs=qn=null;break;case"mousedown":ds=!0;break;case"contextmenu":case"mouseup":case"dragend":ds=!1,ad(c,n,f);break;case"selectionchange":if(Cy)break;case"keydown":case"keyup":ad(c,n,f)}var E;if($u)e:{switch(e){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else Vn?Ip(e,n)&&(_="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(_="onCompositionStart");_&&($p&&n.locale!=="ko"&&(Vn||_!=="onCompositionStart"?_==="onCompositionEnd"&&Vn&&(E=zp()):(Kt=f,Lu="value"in Kt?Kt.value:Kt.textContent,Vn=!0)),k=Lo(u,_),0<k.length&&(_=new Jc(_,e,null,n,f),c.push({event:_,listeners:k}),E?_.data=E:(E=Ap(n),E!==null&&(_.data=E)))),(E=fy?py(e,n):hy(e,n))&&(u=Lo(u,"onBeforeInput"),0<u.length&&(f=new Jc("onBeforeInput","beforeinput",null,n,f),c.push({event:f,listeners:u}),f.data=E))}Gp(c,t)})}function ci(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Lo(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=ri(e,n),o!=null&&r.unshift(ci(e,o,i)),o=ri(e,t),o!=null&&r.push(ci(e,o,i))),e=e.return}return r}function Mn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function cd(e,t,n,r,i){for(var o=t._reactName,l=[];n!==null&&n!==r;){var a=n,s=a.alternate,u=a.stateNode;if(s!==null&&s===r)break;a.tag===5&&u!==null&&(a=u,i?(s=ri(n,o),s!=null&&l.unshift(ci(n,s,a))):i||(s=ri(n,o),s!=null&&l.push(ci(n,s,a)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var by=/\r\n?/g,Py=/\u0000|\uFFFD/g;function dd(e){return(typeof e=="string"?e:""+e).replace(by,`
`).replace(Py,"")}function Ki(e,t,n){if(t=dd(t),dd(e)!==t&&n)throw Error(b(425))}function No(){}var fs=null,ps=null;function hs(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ms=typeof setTimeout=="function"?setTimeout:void 0,Ry=typeof clearTimeout=="function"?clearTimeout:void 0,fd=typeof Promise=="function"?Promise:void 0,Ty=typeof queueMicrotask=="function"?queueMicrotask:typeof fd<"u"?function(e){return fd.resolve(null).then(e).catch(Ly)}:ms;function Ly(e){setTimeout(function(){throw e})}function ma(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),li(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);li(t)}function en(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function pd(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Er=Math.random().toString(36).slice(2),wt="__reactFiber$"+Er,di="__reactProps$"+Er,zt="__reactContainer$"+Er,gs="__reactEvents$"+Er,Ny="__reactListeners$"+Er,zy="__reactHandles$"+Er;function wn(e){var t=e[wt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[zt]||n[wt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=pd(e);e!==null;){if(n=e[wt])return n;e=pd(e)}return t}e=n,n=e.parentNode}return null}function Ri(e){return e=e[wt]||e[zt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Kn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(b(33))}function yl(e){return e[di]||null}var vs=[],Gn=-1;function fn(e){return{current:e}}function Z(e){0>Gn||(e.current=vs[Gn],vs[Gn]=null,Gn--)}function Y(e,t){Gn++,vs[Gn]=e.current,e.current=t}var cn={},be=fn(cn),Fe=fn(!1),bn=cn;function dr(e,t){var n=e.type.contextTypes;if(!n)return cn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Ue(e){return e=e.childContextTypes,e!=null}function zo(){Z(Fe),Z(be)}function hd(e,t,n){if(be.current!==cn)throw Error(b(168));Y(be,t),Y(Fe,n)}function Xp(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(b(108,yv(e)||"Unknown",i));return oe({},n,r)}function $o(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||cn,bn=be.current,Y(be,e),Y(Fe,Fe.current),!0}function md(e,t,n){var r=e.stateNode;if(!r)throw Error(b(169));n?(e=Xp(e,t,bn),r.__reactInternalMemoizedMergedChildContext=e,Z(Fe),Z(be),Y(be,e)):Z(Fe),Y(Fe,n)}var bt=null,xl=!1,ga=!1;function Jp(e){bt===null?bt=[e]:bt.push(e)}function $y(e){xl=!0,Jp(e)}function pn(){if(!ga&&bt!==null){ga=!0;var e=0,t=G;try{var n=bt;for(G=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}bt=null,xl=!1}catch(i){throw bt!==null&&(bt=bt.slice(e+1)),Op(bu,pn),i}finally{G=t,ga=!1}}return null}var Yn=[],Xn=0,Io=null,Ao=0,Xe=[],Je=0,Pn=null,Pt=1,Rt="";function yn(e,t){Yn[Xn++]=Ao,Yn[Xn++]=Io,Io=e,Ao=t}function Zp(e,t,n){Xe[Je++]=Pt,Xe[Je++]=Rt,Xe[Je++]=Pn,Pn=e;var r=Pt;e=Rt;var i=32-dt(r)-1;r&=~(1<<i),n+=1;var o=32-dt(t)+i;if(30<o){var l=i-i%5;o=(r&(1<<l)-1).toString(32),r>>=l,i-=l,Pt=1<<32-dt(t)+i|n<<i|r,Rt=o+e}else Pt=1<<o|n<<i|r,Rt=e}function Au(e){e.return!==null&&(yn(e,1),Zp(e,1,0))}function Du(e){for(;e===Io;)Io=Yn[--Xn],Yn[Xn]=null,Ao=Yn[--Xn],Yn[Xn]=null;for(;e===Pn;)Pn=Xe[--Je],Xe[Je]=null,Rt=Xe[--Je],Xe[Je]=null,Pt=Xe[--Je],Xe[Je]=null}var Ve=null,We=null,te=!1,ut=null;function eh(e,t){var n=et(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function gd(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ve=e,We=en(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ve=e,We=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Pn!==null?{id:Pt,overflow:Rt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=et(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ve=e,We=null,!0):!1;default:return!1}}function ys(e){return(e.mode&1)!==0&&(e.flags&128)===0}function xs(e){if(te){var t=We;if(t){var n=t;if(!gd(e,t)){if(ys(e))throw Error(b(418));t=en(n.nextSibling);var r=Ve;t&&gd(e,t)?eh(r,n):(e.flags=e.flags&-4097|2,te=!1,Ve=e)}}else{if(ys(e))throw Error(b(418));e.flags=e.flags&-4097|2,te=!1,Ve=e}}}function vd(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ve=e}function Gi(e){if(e!==Ve)return!1;if(!te)return vd(e),te=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!hs(e.type,e.memoizedProps)),t&&(t=We)){if(ys(e))throw th(),Error(b(418));for(;t;)eh(e,t),t=en(t.nextSibling)}if(vd(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(b(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){We=en(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}We=null}}else We=Ve?en(e.stateNode.nextSibling):null;return!0}function th(){for(var e=We;e;)e=en(e.nextSibling)}function fr(){We=Ve=null,te=!1}function Mu(e){ut===null?ut=[e]:ut.push(e)}var Iy=Dt.ReactCurrentBatchConfig;function at(e,t){if(e&&e.defaultProps){t=oe({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Do=fn(null),Mo=null,Jn=null,Fu=null;function Uu(){Fu=Jn=Mo=null}function Bu(e){var t=Do.current;Z(Do),e._currentValue=t}function ws(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function lr(e,t){Mo=e,Fu=Jn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Me=!0),e.firstContext=null)}function rt(e){var t=e._currentValue;if(Fu!==e)if(e={context:e,memoizedValue:t,next:null},Jn===null){if(Mo===null)throw Error(b(308));Jn=e,Mo.dependencies={lanes:0,firstContext:e}}else Jn=Jn.next=e;return t}var Sn=null;function Hu(e){Sn===null?Sn=[e]:Sn.push(e)}function nh(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Hu(t)):(n.next=i.next,i.next=n),t.interleaved=n,$t(e,r)}function $t(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Wt=!1;function Wu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function rh(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Tt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function tn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,q&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,$t(e,n)}return i=r.interleaved,i===null?(t.next=t,Hu(r)):(t.next=i.next,i.next=t),r.interleaved=t,$t(e,n)}function uo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Pu(e,n)}}function yd(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=l:o=o.next=l,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Fo(e,t,n,r){var i=e.updateQueue;Wt=!1;var o=i.firstBaseUpdate,l=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var s=a,u=s.next;s.next=null,l===null?o=u:l.next=u,l=s;var f=e.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==l&&(a===null?f.firstBaseUpdate=u:a.next=u,f.lastBaseUpdate=s))}if(o!==null){var c=i.baseState;l=0,f=u=s=null,a=o;do{var v=a.lane,w=a.eventTime;if((r&v)===v){f!==null&&(f=f.next={eventTime:w,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var m=e,y=a;switch(v=t,w=n,y.tag){case 1:if(m=y.payload,typeof m=="function"){c=m.call(w,c,v);break e}c=m;break e;case 3:m.flags=m.flags&-65537|128;case 0:if(m=y.payload,v=typeof m=="function"?m.call(w,c,v):m,v==null)break e;c=oe({},c,v);break e;case 2:Wt=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,v=i.effects,v===null?i.effects=[a]:v.push(a))}else w={eventTime:w,lane:v,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(u=f=w,s=c):f=f.next=w,l|=v;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;v=a,a=v.next,v.next=null,i.lastBaseUpdate=v,i.shared.pending=null}}while(1);if(f===null&&(s=c),i.baseState=s,i.firstBaseUpdate=u,i.lastBaseUpdate=f,t=i.shared.interleaved,t!==null){i=t;do l|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);Tn|=l,e.lanes=l,e.memoizedState=c}}function xd(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(b(191,i));i.call(r)}}}var ih=new np.Component().refs;function Ss(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:oe({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var wl={isMounted:function(e){return(e=e._reactInternals)?In(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Le(),i=rn(e),o=Tt(r,i);o.payload=t,n!=null&&(o.callback=n),t=tn(e,o,i),t!==null&&(ft(t,e,i,r),uo(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Le(),i=rn(e),o=Tt(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=tn(e,o,i),t!==null&&(ft(t,e,i,r),uo(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Le(),r=rn(e),i=Tt(n,r);i.tag=2,t!=null&&(i.callback=t),t=tn(e,i,r),t!==null&&(ft(t,e,r,n),uo(t,e,r))}};function wd(e,t,n,r,i,o,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,l):t.prototype&&t.prototype.isPureReactComponent?!si(n,r)||!si(i,o):!0}function oh(e,t,n){var r=!1,i=cn,o=t.contextType;return typeof o=="object"&&o!==null?o=rt(o):(i=Ue(t)?bn:be.current,r=t.contextTypes,o=(r=r!=null)?dr(e,i):cn),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=wl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Sd(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&wl.enqueueReplaceState(t,t.state,null)}function ks(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=ih,Wu(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=rt(o):(o=Ue(t)?bn:be.current,i.context=dr(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Ss(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&wl.enqueueReplaceState(i,i.state,null),Fo(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function $r(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(b(309));var r=n.stateNode}if(!r)throw Error(b(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(l){var a=i.refs;a===ih&&(a=i.refs={}),l===null?delete a[o]:a[o]=l},t._stringRef=o,t)}if(typeof e!="string")throw Error(b(284));if(!n._owner)throw Error(b(290,e))}return e}function Yi(e,t){throw e=Object.prototype.toString.call(t),Error(b(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function kd(e){var t=e._init;return t(e._payload)}function lh(e){function t(h,p){if(e){var g=h.deletions;g===null?(h.deletions=[p],h.flags|=16):g.push(p)}}function n(h,p){if(!e)return null;for(;p!==null;)t(h,p),p=p.sibling;return null}function r(h,p){for(h=new Map;p!==null;)p.key!==null?h.set(p.key,p):h.set(p.index,p),p=p.sibling;return h}function i(h,p){return h=on(h,p),h.index=0,h.sibling=null,h}function o(h,p,g){return h.index=g,e?(g=h.alternate,g!==null?(g=g.index,g<p?(h.flags|=2,p):g):(h.flags|=2,p)):(h.flags|=1048576,p)}function l(h){return e&&h.alternate===null&&(h.flags|=2),h}function a(h,p,g,x){return p===null||p.tag!==6?(p=Oa(g,h.mode,x),p.return=h,p):(p=i(p,g),p.return=h,p)}function s(h,p,g,x){var O=g.type;return O===Wn?f(h,p,g.props.children,x,g.key):p!==null&&(p.elementType===O||typeof O=="object"&&O!==null&&O.$$typeof===Ht&&kd(O)===p.type)?(x=i(p,g.props),x.ref=$r(h,p,g),x.return=h,x):(x=go(g.type,g.key,g.props,null,h.mode,x),x.ref=$r(h,p,g),x.return=h,x)}function u(h,p,g,x){return p===null||p.tag!==4||p.stateNode.containerInfo!==g.containerInfo||p.stateNode.implementation!==g.implementation?(p=Ca(g,h.mode,x),p.return=h,p):(p=i(p,g.children||[]),p.return=h,p)}function f(h,p,g,x,O){return p===null||p.tag!==7?(p=_n(g,h.mode,x,O),p.return=h,p):(p=i(p,g),p.return=h,p)}function c(h,p,g){if(typeof p=="string"&&p!==""||typeof p=="number")return p=Oa(""+p,h.mode,g),p.return=h,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Mi:return g=go(p.type,p.key,p.props,null,h.mode,g),g.ref=$r(h,null,p),g.return=h,g;case Hn:return p=Ca(p,h.mode,g),p.return=h,p;case Ht:var x=p._init;return c(h,x(p._payload),g)}if(Fr(p)||Rr(p))return p=_n(p,h.mode,g,null),p.return=h,p;Yi(h,p)}return null}function v(h,p,g,x){var O=p!==null?p.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return O!==null?null:a(h,p,""+g,x);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Mi:return g.key===O?s(h,p,g,x):null;case Hn:return g.key===O?u(h,p,g,x):null;case Ht:return O=g._init,v(h,p,O(g._payload),x)}if(Fr(g)||Rr(g))return O!==null?null:f(h,p,g,x,null);Yi(h,g)}return null}function w(h,p,g,x,O){if(typeof x=="string"&&x!==""||typeof x=="number")return h=h.get(g)||null,a(p,h,""+x,O);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Mi:return h=h.get(x.key===null?g:x.key)||null,s(p,h,x,O);case Hn:return h=h.get(x.key===null?g:x.key)||null,u(p,h,x,O);case Ht:var k=x._init;return w(h,p,g,k(x._payload),O)}if(Fr(x)||Rr(x))return h=h.get(g)||null,f(p,h,x,O,null);Yi(p,x)}return null}function m(h,p,g,x){for(var O=null,k=null,E=p,_=p=0,P=null;E!==null&&_<g.length;_++){E.index>_?(P=E,E=null):P=E.sibling;var T=v(h,E,g[_],x);if(T===null){E===null&&(E=P);break}e&&E&&T.alternate===null&&t(h,E),p=o(T,p,_),k===null?O=T:k.sibling=T,k=T,E=P}if(_===g.length)return n(h,E),te&&yn(h,_),O;if(E===null){for(;_<g.length;_++)E=c(h,g[_],x),E!==null&&(p=o(E,p,_),k===null?O=E:k.sibling=E,k=E);return te&&yn(h,_),O}for(E=r(h,E);_<g.length;_++)P=w(E,h,_,g[_],x),P!==null&&(e&&P.alternate!==null&&E.delete(P.key===null?_:P.key),p=o(P,p,_),k===null?O=P:k.sibling=P,k=P);return e&&E.forEach(function(M){return t(h,M)}),te&&yn(h,_),O}function y(h,p,g,x){var O=Rr(g);if(typeof O!="function")throw Error(b(150));if(g=O.call(g),g==null)throw Error(b(151));for(var k=O=null,E=p,_=p=0,P=null,T=g.next();E!==null&&!T.done;_++,T=g.next()){E.index>_?(P=E,E=null):P=E.sibling;var M=v(h,E,T.value,x);if(M===null){E===null&&(E=P);break}e&&E&&M.alternate===null&&t(h,E),p=o(M,p,_),k===null?O=M:k.sibling=M,k=M,E=P}if(T.done)return n(h,E),te&&yn(h,_),O;if(E===null){for(;!T.done;_++,T=g.next())T=c(h,T.value,x),T!==null&&(p=o(T,p,_),k===null?O=T:k.sibling=T,k=T);return te&&yn(h,_),O}for(E=r(h,E);!T.done;_++,T=g.next())T=w(E,h,_,T.value,x),T!==null&&(e&&T.alternate!==null&&E.delete(T.key===null?_:T.key),p=o(T,p,_),k===null?O=T:k.sibling=T,k=T);return e&&E.forEach(function($){return t(h,$)}),te&&yn(h,_),O}function S(h,p,g,x){if(typeof g=="object"&&g!==null&&g.type===Wn&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Mi:e:{for(var O=g.key,k=p;k!==null;){if(k.key===O){if(O=g.type,O===Wn){if(k.tag===7){n(h,k.sibling),p=i(k,g.props.children),p.return=h,h=p;break e}}else if(k.elementType===O||typeof O=="object"&&O!==null&&O.$$typeof===Ht&&kd(O)===k.type){n(h,k.sibling),p=i(k,g.props),p.ref=$r(h,k,g),p.return=h,h=p;break e}n(h,k);break}else t(h,k);k=k.sibling}g.type===Wn?(p=_n(g.props.children,h.mode,x,g.key),p.return=h,h=p):(x=go(g.type,g.key,g.props,null,h.mode,x),x.ref=$r(h,p,g),x.return=h,h=x)}return l(h);case Hn:e:{for(k=g.key;p!==null;){if(p.key===k)if(p.tag===4&&p.stateNode.containerInfo===g.containerInfo&&p.stateNode.implementation===g.implementation){n(h,p.sibling),p=i(p,g.children||[]),p.return=h,h=p;break e}else{n(h,p);break}else t(h,p);p=p.sibling}p=Ca(g,h.mode,x),p.return=h,h=p}return l(h);case Ht:return k=g._init,S(h,p,k(g._payload),x)}if(Fr(g))return m(h,p,g,x);if(Rr(g))return y(h,p,g,x);Yi(h,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,p!==null&&p.tag===6?(n(h,p.sibling),p=i(p,g),p.return=h,h=p):(n(h,p),p=Oa(g,h.mode,x),p.return=h,h=p),l(h)):n(h,p)}return S}var pr=lh(!0),ah=lh(!1),Ti={},Ot=fn(Ti),fi=fn(Ti),pi=fn(Ti);function kn(e){if(e===Ti)throw Error(b(174));return e}function Vu(e,t){switch(Y(pi,t),Y(fi,e),Y(Ot,Ti),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:es(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=es(t,e)}Z(Ot),Y(Ot,t)}function hr(){Z(Ot),Z(fi),Z(pi)}function sh(e){kn(pi.current);var t=kn(Ot.current),n=es(t,e.type);t!==n&&(Y(fi,e),Y(Ot,n))}function qu(e){fi.current===e&&(Z(Ot),Z(fi))}var re=fn(0);function Uo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var va=[];function Qu(){for(var e=0;e<va.length;e++)va[e]._workInProgressVersionPrimary=null;va.length=0}var co=Dt.ReactCurrentDispatcher,ya=Dt.ReactCurrentBatchConfig,Rn=0,ie=null,he=null,ve=null,Bo=!1,Gr=!1,hi=0,Ay=0;function _e(){throw Error(b(321))}function Ku(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!ht(e[n],t[n]))return!1;return!0}function Gu(e,t,n,r,i,o){if(Rn=o,ie=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,co.current=e===null||e.memoizedState===null?Uy:By,e=n(r,i),Gr){o=0;do{if(Gr=!1,hi=0,25<=o)throw Error(b(301));o+=1,ve=he=null,t.updateQueue=null,co.current=Hy,e=n(r,i)}while(Gr)}if(co.current=Ho,t=he!==null&&he.next!==null,Rn=0,ve=he=ie=null,Bo=!1,t)throw Error(b(300));return e}function Yu(){var e=hi!==0;return hi=0,e}function yt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ve===null?ie.memoizedState=ve=e:ve=ve.next=e,ve}function it(){if(he===null){var e=ie.alternate;e=e!==null?e.memoizedState:null}else e=he.next;var t=ve===null?ie.memoizedState:ve.next;if(t!==null)ve=t,he=e;else{if(e===null)throw Error(b(310));he=e,e={memoizedState:he.memoizedState,baseState:he.baseState,baseQueue:he.baseQueue,queue:he.queue,next:null},ve===null?ie.memoizedState=ve=e:ve=ve.next=e}return ve}function mi(e,t){return typeof t=="function"?t(e):t}function xa(e){var t=it(),n=t.queue;if(n===null)throw Error(b(311));n.lastRenderedReducer=e;var r=he,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var l=i.next;i.next=o.next,o.next=l}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=l=null,s=null,u=o;do{var f=u.lane;if((Rn&f)===f)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var c={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(a=s=c,l=r):s=s.next=c,ie.lanes|=f,Tn|=f}u=u.next}while(u!==null&&u!==o);s===null?l=r:s.next=a,ht(r,t.memoizedState)||(Me=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,ie.lanes|=o,Tn|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function wa(e){var t=it(),n=t.queue;if(n===null)throw Error(b(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var l=i=i.next;do o=e(o,l.action),l=l.next;while(l!==i);ht(o,t.memoizedState)||(Me=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function uh(){}function ch(e,t){var n=ie,r=it(),i=t(),o=!ht(r.memoizedState,i);if(o&&(r.memoizedState=i,Me=!0),r=r.queue,Xu(ph.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||ve!==null&&ve.memoizedState.tag&1){if(n.flags|=2048,gi(9,fh.bind(null,n,r,i,t),void 0,null),Se===null)throw Error(b(349));Rn&30||dh(n,t,i)}return i}function dh(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ie.updateQueue,t===null?(t={lastEffect:null,stores:null},ie.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function fh(e,t,n,r){t.value=n,t.getSnapshot=r,hh(t)&&mh(e)}function ph(e,t,n){return n(function(){hh(t)&&mh(e)})}function hh(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!ht(e,n)}catch{return!0}}function mh(e){var t=$t(e,1);t!==null&&ft(t,e,1,-1)}function Od(e){var t=yt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:mi,lastRenderedState:e},t.queue=e,e=e.dispatch=Fy.bind(null,ie,e),[t.memoizedState,e]}function gi(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ie.updateQueue,t===null?(t={lastEffect:null,stores:null},ie.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function gh(){return it().memoizedState}function fo(e,t,n,r){var i=yt();ie.flags|=e,i.memoizedState=gi(1|t,n,void 0,r===void 0?null:r)}function Sl(e,t,n,r){var i=it();r=r===void 0?null:r;var o=void 0;if(he!==null){var l=he.memoizedState;if(o=l.destroy,r!==null&&Ku(r,l.deps)){i.memoizedState=gi(t,n,o,r);return}}ie.flags|=e,i.memoizedState=gi(1|t,n,o,r)}function Cd(e,t){return fo(8390656,8,e,t)}function Xu(e,t){return Sl(2048,8,e,t)}function vh(e,t){return Sl(4,2,e,t)}function yh(e,t){return Sl(4,4,e,t)}function xh(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function wh(e,t,n){return n=n!=null?n.concat([e]):null,Sl(4,4,xh.bind(null,t,e),n)}function Ju(){}function Sh(e,t){var n=it();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ku(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function kh(e,t){var n=it();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ku(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Oh(e,t,n){return Rn&21?(ht(n,t)||(n=Ep(),ie.lanes|=n,Tn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Me=!0),e.memoizedState=n)}function Dy(e,t){var n=G;G=n!==0&&4>n?n:4,e(!0);var r=ya.transition;ya.transition={};try{e(!1),t()}finally{G=n,ya.transition=r}}function Ch(){return it().memoizedState}function My(e,t,n){var r=rn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},_h(e))Eh(t,n);else if(n=nh(e,t,n,r),n!==null){var i=Le();ft(n,e,r,i),jh(n,t,r)}}function Fy(e,t,n){var r=rn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(_h(e))Eh(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var l=t.lastRenderedState,a=o(l,n);if(i.hasEagerState=!0,i.eagerState=a,ht(a,l)){var s=t.interleaved;s===null?(i.next=i,Hu(t)):(i.next=s.next,s.next=i),t.interleaved=i;return}}catch{}finally{}n=nh(e,t,i,r),n!==null&&(i=Le(),ft(n,e,r,i),jh(n,t,r))}}function _h(e){var t=e.alternate;return e===ie||t!==null&&t===ie}function Eh(e,t){Gr=Bo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function jh(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Pu(e,n)}}var Ho={readContext:rt,useCallback:_e,useContext:_e,useEffect:_e,useImperativeHandle:_e,useInsertionEffect:_e,useLayoutEffect:_e,useMemo:_e,useReducer:_e,useRef:_e,useState:_e,useDebugValue:_e,useDeferredValue:_e,useTransition:_e,useMutableSource:_e,useSyncExternalStore:_e,useId:_e,unstable_isNewReconciler:!1},Uy={readContext:rt,useCallback:function(e,t){return yt().memoizedState=[e,t===void 0?null:t],e},useContext:rt,useEffect:Cd,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,fo(4194308,4,xh.bind(null,t,e),n)},useLayoutEffect:function(e,t){return fo(4194308,4,e,t)},useInsertionEffect:function(e,t){return fo(4,2,e,t)},useMemo:function(e,t){var n=yt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=yt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=My.bind(null,ie,e),[r.memoizedState,e]},useRef:function(e){var t=yt();return e={current:e},t.memoizedState=e},useState:Od,useDebugValue:Ju,useDeferredValue:function(e){return yt().memoizedState=e},useTransition:function(){var e=Od(!1),t=e[0];return e=Dy.bind(null,e[1]),yt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ie,i=yt();if(te){if(n===void 0)throw Error(b(407));n=n()}else{if(n=t(),Se===null)throw Error(b(349));Rn&30||dh(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Cd(ph.bind(null,r,o,e),[e]),r.flags|=2048,gi(9,fh.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=yt(),t=Se.identifierPrefix;if(te){var n=Rt,r=Pt;n=(r&~(1<<32-dt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=hi++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Ay++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},By={readContext:rt,useCallback:Sh,useContext:rt,useEffect:Xu,useImperativeHandle:wh,useInsertionEffect:vh,useLayoutEffect:yh,useMemo:kh,useReducer:xa,useRef:gh,useState:function(){return xa(mi)},useDebugValue:Ju,useDeferredValue:function(e){var t=it();return Oh(t,he.memoizedState,e)},useTransition:function(){var e=xa(mi)[0],t=it().memoizedState;return[e,t]},useMutableSource:uh,useSyncExternalStore:ch,useId:Ch,unstable_isNewReconciler:!1},Hy={readContext:rt,useCallback:Sh,useContext:rt,useEffect:Xu,useImperativeHandle:wh,useInsertionEffect:vh,useLayoutEffect:yh,useMemo:kh,useReducer:wa,useRef:gh,useState:function(){return wa(mi)},useDebugValue:Ju,useDeferredValue:function(e){var t=it();return he===null?t.memoizedState=e:Oh(t,he.memoizedState,e)},useTransition:function(){var e=wa(mi)[0],t=it().memoizedState;return[e,t]},useMutableSource:uh,useSyncExternalStore:ch,useId:Ch,unstable_isNewReconciler:!1};function mr(e,t){try{var n="",r=t;do n+=vv(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function Sa(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Os(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Wy=typeof WeakMap=="function"?WeakMap:Map;function bh(e,t,n){n=Tt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Vo||(Vo=!0,Ns=r),Os(e,t)},n}function Ph(e,t,n){n=Tt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Os(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Os(e,t),typeof r!="function"&&(nn===null?nn=new Set([this]):nn.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function _d(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Wy;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=i0.bind(null,e,t,n),t.then(e,e))}function Ed(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function jd(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Tt(-1,1),t.tag=2,tn(n,t,1))),n.lanes|=1),e)}var Vy=Dt.ReactCurrentOwner,Me=!1;function Te(e,t,n,r){t.child=e===null?ah(t,null,n,r):pr(t,e.child,n,r)}function bd(e,t,n,r,i){n=n.render;var o=t.ref;return lr(t,i),r=Gu(e,t,n,r,o,i),n=Yu(),e!==null&&!Me?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,It(e,t,i)):(te&&n&&Au(t),t.flags|=1,Te(e,t,r,i),t.child)}function Pd(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!lc(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Rh(e,t,o,r,i)):(e=go(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var l=o.memoizedProps;if(n=n.compare,n=n!==null?n:si,n(l,r)&&e.ref===t.ref)return It(e,t,i)}return t.flags|=1,e=on(o,r),e.ref=t.ref,e.return=t,t.child=e}function Rh(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(si(o,r)&&e.ref===t.ref)if(Me=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(Me=!0);else return t.lanes=e.lanes,It(e,t,i)}return Cs(e,t,n,r,i)}function Th(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Y(er,He),He|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Y(er,He),He|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,Y(er,He),He|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,Y(er,He),He|=r;return Te(e,t,i,n),t.child}function Lh(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Cs(e,t,n,r,i){var o=Ue(n)?bn:be.current;return o=dr(t,o),lr(t,i),n=Gu(e,t,n,r,o,i),r=Yu(),e!==null&&!Me?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,It(e,t,i)):(te&&r&&Au(t),t.flags|=1,Te(e,t,n,i),t.child)}function Rd(e,t,n,r,i){if(Ue(n)){var o=!0;$o(t)}else o=!1;if(lr(t,i),t.stateNode===null)po(e,t),oh(t,n,r),ks(t,n,r,i),r=!0;else if(e===null){var l=t.stateNode,a=t.memoizedProps;l.props=a;var s=l.context,u=n.contextType;typeof u=="object"&&u!==null?u=rt(u):(u=Ue(n)?bn:be.current,u=dr(t,u));var f=n.getDerivedStateFromProps,c=typeof f=="function"||typeof l.getSnapshotBeforeUpdate=="function";c||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==r||s!==u)&&Sd(t,l,r,u),Wt=!1;var v=t.memoizedState;l.state=v,Fo(t,r,l,i),s=t.memoizedState,a!==r||v!==s||Fe.current||Wt?(typeof f=="function"&&(Ss(t,n,f,r),s=t.memoizedState),(a=Wt||wd(t,n,a,r,v,s,u))?(c||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),l.props=r,l.state=s,l.context=u,r=a):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,rh(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:at(t.type,a),l.props=u,c=t.pendingProps,v=l.context,s=n.contextType,typeof s=="object"&&s!==null?s=rt(s):(s=Ue(n)?bn:be.current,s=dr(t,s));var w=n.getDerivedStateFromProps;(f=typeof w=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==c||v!==s)&&Sd(t,l,r,s),Wt=!1,v=t.memoizedState,l.state=v,Fo(t,r,l,i);var m=t.memoizedState;a!==c||v!==m||Fe.current||Wt?(typeof w=="function"&&(Ss(t,n,w,r),m=t.memoizedState),(u=Wt||wd(t,n,u,r,v,m,s)||!1)?(f||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,m,s),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,m,s)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&v===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&v===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=m),l.props=r,l.state=m,l.context=s,r=u):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&v===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&v===e.memoizedState||(t.flags|=1024),r=!1)}return _s(e,t,n,r,o,i)}function _s(e,t,n,r,i,o){Lh(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return i&&md(t,n,!1),It(e,t,o);r=t.stateNode,Vy.current=t;var a=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=pr(t,e.child,null,o),t.child=pr(t,null,a,o)):Te(e,t,a,o),t.memoizedState=r.state,i&&md(t,n,!0),t.child}function Nh(e){var t=e.stateNode;t.pendingContext?hd(e,t.pendingContext,t.pendingContext!==t.context):t.context&&hd(e,t.context,!1),Vu(e,t.containerInfo)}function Td(e,t,n,r,i){return fr(),Mu(i),t.flags|=256,Te(e,t,n,r),t.child}var Es={dehydrated:null,treeContext:null,retryLane:0};function js(e){return{baseLanes:e,cachePool:null,transitions:null}}function zh(e,t,n){var r=t.pendingProps,i=re.current,o=!1,l=(t.flags&128)!==0,a;if((a=l)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),Y(re,i&1),e===null)return xs(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,o?(r=t.mode,o=t.child,l={mode:"hidden",children:l},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=l):o=Cl(l,r,0,null),e=_n(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=js(n),t.memoizedState=Es,e):Zu(t,l));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return qy(e,t,l,r,a,i,n);if(o){o=r.fallback,l=t.mode,i=e.child,a=i.sibling;var s={mode:"hidden",children:r.children};return!(l&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=on(i,s),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=on(a,o):(o=_n(o,l,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,l=e.child.memoizedState,l=l===null?js(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},o.memoizedState=l,o.childLanes=e.childLanes&~n,t.memoizedState=Es,r}return o=e.child,e=o.sibling,r=on(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Zu(e,t){return t=Cl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Xi(e,t,n,r){return r!==null&&Mu(r),pr(t,e.child,null,n),e=Zu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function qy(e,t,n,r,i,o,l){if(n)return t.flags&256?(t.flags&=-257,r=Sa(Error(b(422))),Xi(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Cl({mode:"visible",children:r.children},i,0,null),o=_n(o,i,l,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&pr(t,e.child,null,l),t.child.memoizedState=js(l),t.memoizedState=Es,o);if(!(t.mode&1))return Xi(e,t,l,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(b(419)),r=Sa(o,r,void 0),Xi(e,t,l,r)}if(a=(l&e.childLanes)!==0,Me||a){if(r=Se,r!==null){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|l)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,$t(e,i),ft(r,e,i,-1))}return oc(),r=Sa(Error(b(421))),Xi(e,t,l,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=o0.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,We=en(i.nextSibling),Ve=t,te=!0,ut=null,e!==null&&(Xe[Je++]=Pt,Xe[Je++]=Rt,Xe[Je++]=Pn,Pt=e.id,Rt=e.overflow,Pn=t),t=Zu(t,r.children),t.flags|=4096,t)}function Ld(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ws(e.return,t,n)}function ka(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function $h(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(Te(e,t,r.children,n),r=re.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ld(e,n,t);else if(e.tag===19)Ld(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Y(re,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Uo(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),ka(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Uo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}ka(t,!0,n,null,o);break;case"together":ka(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function po(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function It(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Tn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(b(153));if(t.child!==null){for(e=t.child,n=on(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=on(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Qy(e,t,n){switch(t.tag){case 3:Nh(t),fr();break;case 5:sh(t);break;case 1:Ue(t.type)&&$o(t);break;case 4:Vu(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;Y(Do,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Y(re,re.current&1),t.flags|=128,null):n&t.child.childLanes?zh(e,t,n):(Y(re,re.current&1),e=It(e,t,n),e!==null?e.sibling:null);Y(re,re.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return $h(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Y(re,re.current),r)break;return null;case 22:case 23:return t.lanes=0,Th(e,t,n)}return It(e,t,n)}var Ih,bs,Ah,Dh;Ih=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};bs=function(){};Ah=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,kn(Ot.current);var o=null;switch(n){case"input":i=Ya(e,i),r=Ya(e,r),o=[];break;case"select":i=oe({},i,{value:void 0}),r=oe({},r,{value:void 0}),o=[];break;case"textarea":i=Za(e,i),r=Za(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=No)}ts(n,r);var l;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(l in a)a.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ti.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var s=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&s!==a&&(s!=null||a!=null))if(u==="style")if(a){for(l in a)!a.hasOwnProperty(l)||s&&s.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in s)s.hasOwnProperty(l)&&a[l]!==s[l]&&(n||(n={}),n[l]=s[l])}else n||(o||(o=[]),o.push(u,n)),n=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,a=a?a.__html:void 0,s!=null&&a!==s&&(o=o||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(o=o||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ti.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&X("scroll",e),o||a===s||(o=[])):(o=o||[]).push(u,s))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};Dh=function(e,t,n,r){n!==r&&(t.flags|=4)};function Ir(e,t){if(!te)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ee(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Ky(e,t,n){var r=t.pendingProps;switch(Du(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ee(t),null;case 1:return Ue(t.type)&&zo(),Ee(t),null;case 3:return r=t.stateNode,hr(),Z(Fe),Z(be),Qu(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Gi(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,ut!==null&&(Is(ut),ut=null))),bs(e,t),Ee(t),null;case 5:qu(t);var i=kn(pi.current);if(n=t.type,e!==null&&t.stateNode!=null)Ah(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(b(166));return Ee(t),null}if(e=kn(Ot.current),Gi(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[wt]=t,r[di]=o,e=(t.mode&1)!==0,n){case"dialog":X("cancel",r),X("close",r);break;case"iframe":case"object":case"embed":X("load",r);break;case"video":case"audio":for(i=0;i<Br.length;i++)X(Br[i],r);break;case"source":X("error",r);break;case"img":case"image":case"link":X("error",r),X("load",r);break;case"details":X("toggle",r);break;case"input":Uc(r,o),X("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},X("invalid",r);break;case"textarea":Hc(r,o),X("invalid",r)}ts(n,o),i=null;for(var l in o)if(o.hasOwnProperty(l)){var a=o[l];l==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&Ki(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&Ki(r.textContent,a,e),i=["children",""+a]):ti.hasOwnProperty(l)&&a!=null&&l==="onScroll"&&X("scroll",r)}switch(n){case"input":Fi(r),Bc(r,o,!0);break;case"textarea":Fi(r),Wc(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=No)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=dp(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[wt]=t,e[di]=r,Ih(e,t,!1,!1),t.stateNode=e;e:{switch(l=ns(n,r),n){case"dialog":X("cancel",e),X("close",e),i=r;break;case"iframe":case"object":case"embed":X("load",e),i=r;break;case"video":case"audio":for(i=0;i<Br.length;i++)X(Br[i],e);i=r;break;case"source":X("error",e),i=r;break;case"img":case"image":case"link":X("error",e),X("load",e),i=r;break;case"details":X("toggle",e),i=r;break;case"input":Uc(e,r),i=Ya(e,r),X("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=oe({},r,{value:void 0}),X("invalid",e);break;case"textarea":Hc(e,r),i=Za(e,r),X("invalid",e);break;default:i=r}ts(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var s=a[o];o==="style"?hp(e,s):o==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&fp(e,s)):o==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&ni(e,s):typeof s=="number"&&ni(e,""+s):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(ti.hasOwnProperty(o)?s!=null&&o==="onScroll"&&X("scroll",e):s!=null&&Ou(e,o,s,l))}switch(n){case"input":Fi(e),Bc(e,r,!1);break;case"textarea":Fi(e),Wc(e);break;case"option":r.value!=null&&e.setAttribute("value",""+un(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?nr(e,!!r.multiple,o,!1):r.defaultValue!=null&&nr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=No)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ee(t),null;case 6:if(e&&t.stateNode!=null)Dh(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(b(166));if(n=kn(pi.current),kn(Ot.current),Gi(t)){if(r=t.stateNode,n=t.memoizedProps,r[wt]=t,(o=r.nodeValue!==n)&&(e=Ve,e!==null))switch(e.tag){case 3:Ki(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ki(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[wt]=t,t.stateNode=r}return Ee(t),null;case 13:if(Z(re),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(te&&We!==null&&t.mode&1&&!(t.flags&128))th(),fr(),t.flags|=98560,o=!1;else if(o=Gi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(b(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(b(317));o[wt]=t}else fr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ee(t),o=!1}else ut!==null&&(Is(ut),ut=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||re.current&1?me===0&&(me=3):oc())),t.updateQueue!==null&&(t.flags|=4),Ee(t),null);case 4:return hr(),bs(e,t),e===null&&ui(t.stateNode.containerInfo),Ee(t),null;case 10:return Bu(t.type._context),Ee(t),null;case 17:return Ue(t.type)&&zo(),Ee(t),null;case 19:if(Z(re),o=t.memoizedState,o===null)return Ee(t),null;if(r=(t.flags&128)!==0,l=o.rendering,l===null)if(r)Ir(o,!1);else{if(me!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=Uo(e),l!==null){for(t.flags|=128,Ir(o,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,l=o.alternate,l===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=l.childLanes,o.lanes=l.lanes,o.child=l.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=l.memoizedProps,o.memoizedState=l.memoizedState,o.updateQueue=l.updateQueue,o.type=l.type,e=l.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Y(re,re.current&1|2),t.child}e=e.sibling}o.tail!==null&&se()>gr&&(t.flags|=128,r=!0,Ir(o,!1),t.lanes=4194304)}else{if(!r)if(e=Uo(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Ir(o,!0),o.tail===null&&o.tailMode==="hidden"&&!l.alternate&&!te)return Ee(t),null}else 2*se()-o.renderingStartTime>gr&&n!==1073741824&&(t.flags|=128,r=!0,Ir(o,!1),t.lanes=4194304);o.isBackwards?(l.sibling=t.child,t.child=l):(n=o.last,n!==null?n.sibling=l:t.child=l,o.last=l)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=se(),t.sibling=null,n=re.current,Y(re,r?n&1|2:n&1),t):(Ee(t),null);case 22:case 23:return ic(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?He&1073741824&&(Ee(t),t.subtreeFlags&6&&(t.flags|=8192)):Ee(t),null;case 24:return null;case 25:return null}throw Error(b(156,t.tag))}function Gy(e,t){switch(Du(t),t.tag){case 1:return Ue(t.type)&&zo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return hr(),Z(Fe),Z(be),Qu(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return qu(t),null;case 13:if(Z(re),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(b(340));fr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Z(re),null;case 4:return hr(),null;case 10:return Bu(t.type._context),null;case 22:case 23:return ic(),null;case 24:return null;default:return null}}var Ji=!1,je=!1,Yy=typeof WeakSet=="function"?WeakSet:Set,N=null;function Zn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){le(e,t,r)}else n.current=null}function Ps(e,t,n){try{n()}catch(r){le(e,t,r)}}var Nd=!1;function Xy(e,t){if(fs=Ro,e=Bp(),Iu(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var l=0,a=-1,s=-1,u=0,f=0,c=e,v=null;t:for(;;){for(var w;c!==n||i!==0&&c.nodeType!==3||(a=l+i),c!==o||r!==0&&c.nodeType!==3||(s=l+r),c.nodeType===3&&(l+=c.nodeValue.length),(w=c.firstChild)!==null;)v=c,c=w;for(;;){if(c===e)break t;if(v===n&&++u===i&&(a=l),v===o&&++f===r&&(s=l),(w=c.nextSibling)!==null)break;c=v,v=c.parentNode}c=w}n=a===-1||s===-1?null:{start:a,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(ps={focusedElem:e,selectionRange:n},Ro=!1,N=t;N!==null;)if(t=N,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,N=e;else for(;N!==null;){t=N;try{var m=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(m!==null){var y=m.memoizedProps,S=m.memoizedState,h=t.stateNode,p=h.getSnapshotBeforeUpdate(t.elementType===t.type?y:at(t.type,y),S);h.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var g=t.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(b(163))}}catch(x){le(t,t.return,x)}if(e=t.sibling,e!==null){e.return=t.return,N=e;break}N=t.return}return m=Nd,Nd=!1,m}function Yr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Ps(t,n,o)}i=i.next}while(i!==r)}}function kl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Rs(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Mh(e){var t=e.alternate;t!==null&&(e.alternate=null,Mh(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[wt],delete t[di],delete t[gs],delete t[Ny],delete t[zy])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Fh(e){return e.tag===5||e.tag===3||e.tag===4}function zd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Fh(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ts(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=No));else if(r!==4&&(e=e.child,e!==null))for(Ts(e,t,n),e=e.sibling;e!==null;)Ts(e,t,n),e=e.sibling}function Ls(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ls(e,t,n),e=e.sibling;e!==null;)Ls(e,t,n),e=e.sibling}var ke=null,st=!1;function Ft(e,t,n){for(n=n.child;n!==null;)Uh(e,t,n),n=n.sibling}function Uh(e,t,n){if(kt&&typeof kt.onCommitFiberUnmount=="function")try{kt.onCommitFiberUnmount(hl,n)}catch{}switch(n.tag){case 5:je||Zn(n,t);case 6:var r=ke,i=st;ke=null,Ft(e,t,n),ke=r,st=i,ke!==null&&(st?(e=ke,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ke.removeChild(n.stateNode));break;case 18:ke!==null&&(st?(e=ke,n=n.stateNode,e.nodeType===8?ma(e.parentNode,n):e.nodeType===1&&ma(e,n),li(e)):ma(ke,n.stateNode));break;case 4:r=ke,i=st,ke=n.stateNode.containerInfo,st=!0,Ft(e,t,n),ke=r,st=i;break;case 0:case 11:case 14:case 15:if(!je&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,l=o.destroy;o=o.tag,l!==void 0&&(o&2||o&4)&&Ps(n,t,l),i=i.next}while(i!==r)}Ft(e,t,n);break;case 1:if(!je&&(Zn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){le(n,t,a)}Ft(e,t,n);break;case 21:Ft(e,t,n);break;case 22:n.mode&1?(je=(r=je)||n.memoizedState!==null,Ft(e,t,n),je=r):Ft(e,t,n);break;default:Ft(e,t,n)}}function $d(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Yy),t.forEach(function(r){var i=l0.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function lt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,l=t,a=l;e:for(;a!==null;){switch(a.tag){case 5:ke=a.stateNode,st=!1;break e;case 3:ke=a.stateNode.containerInfo,st=!0;break e;case 4:ke=a.stateNode.containerInfo,st=!0;break e}a=a.return}if(ke===null)throw Error(b(160));Uh(o,l,i),ke=null,st=!1;var s=i.alternate;s!==null&&(s.return=null),i.return=null}catch(u){le(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Bh(t,e),t=t.sibling}function Bh(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(lt(t,e),vt(e),r&4){try{Yr(3,e,e.return),kl(3,e)}catch(y){le(e,e.return,y)}try{Yr(5,e,e.return)}catch(y){le(e,e.return,y)}}break;case 1:lt(t,e),vt(e),r&512&&n!==null&&Zn(n,n.return);break;case 5:if(lt(t,e),vt(e),r&512&&n!==null&&Zn(n,n.return),e.flags&32){var i=e.stateNode;try{ni(i,"")}catch(y){le(e,e.return,y)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,l=n!==null?n.memoizedProps:o,a=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&up(i,o),ns(a,l);var u=ns(a,o);for(l=0;l<s.length;l+=2){var f=s[l],c=s[l+1];f==="style"?hp(i,c):f==="dangerouslySetInnerHTML"?fp(i,c):f==="children"?ni(i,c):Ou(i,f,c,u)}switch(a){case"input":Xa(i,o);break;case"textarea":cp(i,o);break;case"select":var v=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var w=o.value;w!=null?nr(i,!!o.multiple,w,!1):v!==!!o.multiple&&(o.defaultValue!=null?nr(i,!!o.multiple,o.defaultValue,!0):nr(i,!!o.multiple,o.multiple?[]:"",!1))}i[di]=o}catch(y){le(e,e.return,y)}}break;case 6:if(lt(t,e),vt(e),r&4){if(e.stateNode===null)throw Error(b(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(y){le(e,e.return,y)}}break;case 3:if(lt(t,e),vt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{li(t.containerInfo)}catch(y){le(e,e.return,y)}break;case 4:lt(t,e),vt(e);break;case 13:lt(t,e),vt(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(nc=se())),r&4&&$d(e);break;case 22:if(f=n!==null&&n.memoizedState!==null,e.mode&1?(je=(u=je)||f,lt(t,e),je=u):lt(t,e),vt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!f&&e.mode&1)for(N=e,f=e.child;f!==null;){for(c=N=f;N!==null;){switch(v=N,w=v.child,v.tag){case 0:case 11:case 14:case 15:Yr(4,v,v.return);break;case 1:Zn(v,v.return);var m=v.stateNode;if(typeof m.componentWillUnmount=="function"){r=v,n=v.return;try{t=r,m.props=t.memoizedProps,m.state=t.memoizedState,m.componentWillUnmount()}catch(y){le(r,n,y)}}break;case 5:Zn(v,v.return);break;case 22:if(v.memoizedState!==null){Ad(c);continue}}w!==null?(w.return=v,N=w):Ad(c)}f=f.sibling}e:for(f=null,c=e;;){if(c.tag===5){if(f===null){f=c;try{i=c.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=c.stateNode,s=c.memoizedProps.style,l=s!=null&&s.hasOwnProperty("display")?s.display:null,a.style.display=pp("display",l))}catch(y){le(e,e.return,y)}}}else if(c.tag===6){if(f===null)try{c.stateNode.nodeValue=u?"":c.memoizedProps}catch(y){le(e,e.return,y)}}else if((c.tag!==22&&c.tag!==23||c.memoizedState===null||c===e)&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===e)break e;for(;c.sibling===null;){if(c.return===null||c.return===e)break e;f===c&&(f=null),c=c.return}f===c&&(f=null),c.sibling.return=c.return,c=c.sibling}}break;case 19:lt(t,e),vt(e),r&4&&$d(e);break;case 21:break;default:lt(t,e),vt(e)}}function vt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Fh(n)){var r=n;break e}n=n.return}throw Error(b(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ni(i,""),r.flags&=-33);var o=zd(e);Ls(e,o,i);break;case 3:case 4:var l=r.stateNode.containerInfo,a=zd(e);Ts(e,a,l);break;default:throw Error(b(161))}}catch(s){le(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Jy(e,t,n){N=e,Hh(e)}function Hh(e,t,n){for(var r=(e.mode&1)!==0;N!==null;){var i=N,o=i.child;if(i.tag===22&&r){var l=i.memoizedState!==null||Ji;if(!l){var a=i.alternate,s=a!==null&&a.memoizedState!==null||je;a=Ji;var u=je;if(Ji=l,(je=s)&&!u)for(N=i;N!==null;)l=N,s=l.child,l.tag===22&&l.memoizedState!==null?Dd(i):s!==null?(s.return=l,N=s):Dd(i);for(;o!==null;)N=o,Hh(o),o=o.sibling;N=i,Ji=a,je=u}Id(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,N=o):Id(e)}}function Id(e){for(;N!==null;){var t=N;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:je||kl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!je)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:at(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&xd(t,o,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}xd(t,l,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var c=f.dehydrated;c!==null&&li(c)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(b(163))}je||t.flags&512&&Rs(t)}catch(v){le(t,t.return,v)}}if(t===e){N=null;break}if(n=t.sibling,n!==null){n.return=t.return,N=n;break}N=t.return}}function Ad(e){for(;N!==null;){var t=N;if(t===e){N=null;break}var n=t.sibling;if(n!==null){n.return=t.return,N=n;break}N=t.return}}function Dd(e){for(;N!==null;){var t=N;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{kl(4,t)}catch(s){le(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(s){le(t,i,s)}}var o=t.return;try{Rs(t)}catch(s){le(t,o,s)}break;case 5:var l=t.return;try{Rs(t)}catch(s){le(t,l,s)}}}catch(s){le(t,t.return,s)}if(t===e){N=null;break}var a=t.sibling;if(a!==null){a.return=t.return,N=a;break}N=t.return}}var Zy=Math.ceil,Wo=Dt.ReactCurrentDispatcher,ec=Dt.ReactCurrentOwner,tt=Dt.ReactCurrentBatchConfig,q=0,Se=null,de=null,Oe=0,He=0,er=fn(0),me=0,vi=null,Tn=0,Ol=0,tc=0,Xr=null,De=null,nc=0,gr=1/0,Et=null,Vo=!1,Ns=null,nn=null,Zi=!1,Gt=null,qo=0,Jr=0,zs=null,ho=-1,mo=0;function Le(){return q&6?se():ho!==-1?ho:ho=se()}function rn(e){return e.mode&1?q&2&&Oe!==0?Oe&-Oe:Iy.transition!==null?(mo===0&&(mo=Ep()),mo):(e=G,e!==0||(e=window.event,e=e===void 0?16:Np(e.type)),e):1}function ft(e,t,n,r){if(50<Jr)throw Jr=0,zs=null,Error(b(185));bi(e,n,r),(!(q&2)||e!==Se)&&(e===Se&&(!(q&2)&&(Ol|=n),me===4&&Qt(e,Oe)),Be(e,r),n===1&&q===0&&!(t.mode&1)&&(gr=se()+500,xl&&pn()))}function Be(e,t){var n=e.callbackNode;Iv(e,t);var r=Po(e,e===Se?Oe:0);if(r===0)n!==null&&Qc(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Qc(n),t===1)e.tag===0?$y(Md.bind(null,e)):Jp(Md.bind(null,e)),Ty(function(){!(q&6)&&pn()}),n=null;else{switch(jp(r)){case 1:n=bu;break;case 4:n=Cp;break;case 16:n=bo;break;case 536870912:n=_p;break;default:n=bo}n=Xh(n,Wh.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Wh(e,t){if(ho=-1,mo=0,q&6)throw Error(b(327));var n=e.callbackNode;if(ar()&&e.callbackNode!==n)return null;var r=Po(e,e===Se?Oe:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Qo(e,r);else{t=r;var i=q;q|=2;var o=qh();(Se!==e||Oe!==t)&&(Et=null,gr=se()+500,Cn(e,t));do try{n0();break}catch(a){Vh(e,a)}while(1);Uu(),Wo.current=o,q=i,de!==null?t=0:(Se=null,Oe=0,t=me)}if(t!==0){if(t===2&&(i=as(e),i!==0&&(r=i,t=$s(e,i))),t===1)throw n=vi,Cn(e,0),Qt(e,r),Be(e,se()),n;if(t===6)Qt(e,r);else{if(i=e.current.alternate,!(r&30)&&!e0(i)&&(t=Qo(e,r),t===2&&(o=as(e),o!==0&&(r=o,t=$s(e,o))),t===1))throw n=vi,Cn(e,0),Qt(e,r),Be(e,se()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(b(345));case 2:xn(e,De,Et);break;case 3:if(Qt(e,r),(r&130023424)===r&&(t=nc+500-se(),10<t)){if(Po(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Le(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=ms(xn.bind(null,e,De,Et),t);break}xn(e,De,Et);break;case 4:if(Qt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var l=31-dt(r);o=1<<l,l=t[l],l>i&&(i=l),r&=~o}if(r=i,r=se()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Zy(r/1960))-r,10<r){e.timeoutHandle=ms(xn.bind(null,e,De,Et),r);break}xn(e,De,Et);break;case 5:xn(e,De,Et);break;default:throw Error(b(329))}}}return Be(e,se()),e.callbackNode===n?Wh.bind(null,e):null}function $s(e,t){var n=Xr;return e.current.memoizedState.isDehydrated&&(Cn(e,t).flags|=256),e=Qo(e,t),e!==2&&(t=De,De=n,t!==null&&Is(t)),e}function Is(e){De===null?De=e:De.push.apply(De,e)}function e0(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!ht(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Qt(e,t){for(t&=~tc,t&=~Ol,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-dt(t),r=1<<n;e[n]=-1,t&=~r}}function Md(e){if(q&6)throw Error(b(327));ar();var t=Po(e,0);if(!(t&1))return Be(e,se()),null;var n=Qo(e,t);if(e.tag!==0&&n===2){var r=as(e);r!==0&&(t=r,n=$s(e,r))}if(n===1)throw n=vi,Cn(e,0),Qt(e,t),Be(e,se()),n;if(n===6)throw Error(b(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,xn(e,De,Et),Be(e,se()),null}function rc(e,t){var n=q;q|=1;try{return e(t)}finally{q=n,q===0&&(gr=se()+500,xl&&pn())}}function Ln(e){Gt!==null&&Gt.tag===0&&!(q&6)&&ar();var t=q;q|=1;var n=tt.transition,r=G;try{if(tt.transition=null,G=1,e)return e()}finally{G=r,tt.transition=n,q=t,!(q&6)&&pn()}}function ic(){He=er.current,Z(er)}function Cn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Ry(n)),de!==null)for(n=de.return;n!==null;){var r=n;switch(Du(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&zo();break;case 3:hr(),Z(Fe),Z(be),Qu();break;case 5:qu(r);break;case 4:hr();break;case 13:Z(re);break;case 19:Z(re);break;case 10:Bu(r.type._context);break;case 22:case 23:ic()}n=n.return}if(Se=e,de=e=on(e.current,null),Oe=He=t,me=0,vi=null,tc=Ol=Tn=0,De=Xr=null,Sn!==null){for(t=0;t<Sn.length;t++)if(n=Sn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var l=o.next;o.next=i,r.next=l}n.pending=r}Sn=null}return e}function Vh(e,t){do{var n=de;try{if(Uu(),co.current=Ho,Bo){for(var r=ie.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Bo=!1}if(Rn=0,ve=he=ie=null,Gr=!1,hi=0,ec.current=null,n===null||n.return===null){me=1,vi=t,de=null;break}e:{var o=e,l=n.return,a=n,s=t;if(t=Oe,a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,f=a,c=f.tag;if(!(f.mode&1)&&(c===0||c===11||c===15)){var v=f.alternate;v?(f.updateQueue=v.updateQueue,f.memoizedState=v.memoizedState,f.lanes=v.lanes):(f.updateQueue=null,f.memoizedState=null)}var w=Ed(l);if(w!==null){w.flags&=-257,jd(w,l,a,o,t),w.mode&1&&_d(o,u,t),t=w,s=u;var m=t.updateQueue;if(m===null){var y=new Set;y.add(s),t.updateQueue=y}else m.add(s);break e}else{if(!(t&1)){_d(o,u,t),oc();break e}s=Error(b(426))}}else if(te&&a.mode&1){var S=Ed(l);if(S!==null){!(S.flags&65536)&&(S.flags|=256),jd(S,l,a,o,t),Mu(mr(s,a));break e}}o=s=mr(s,a),me!==4&&(me=2),Xr===null?Xr=[o]:Xr.push(o),o=l;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var h=bh(o,s,t);yd(o,h);break e;case 1:a=s;var p=o.type,g=o.stateNode;if(!(o.flags&128)&&(typeof p.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(nn===null||!nn.has(g)))){o.flags|=65536,t&=-t,o.lanes|=t;var x=Ph(o,a,t);yd(o,x);break e}}o=o.return}while(o!==null)}Kh(n)}catch(O){t=O,de===n&&n!==null&&(de=n=n.return);continue}break}while(1)}function qh(){var e=Wo.current;return Wo.current=Ho,e===null?Ho:e}function oc(){(me===0||me===3||me===2)&&(me=4),Se===null||!(Tn&268435455)&&!(Ol&268435455)||Qt(Se,Oe)}function Qo(e,t){var n=q;q|=2;var r=qh();(Se!==e||Oe!==t)&&(Et=null,Cn(e,t));do try{t0();break}catch(i){Vh(e,i)}while(1);if(Uu(),q=n,Wo.current=r,de!==null)throw Error(b(261));return Se=null,Oe=0,me}function t0(){for(;de!==null;)Qh(de)}function n0(){for(;de!==null&&!jv();)Qh(de)}function Qh(e){var t=Yh(e.alternate,e,He);e.memoizedProps=e.pendingProps,t===null?Kh(e):de=t,ec.current=null}function Kh(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Gy(n,t),n!==null){n.flags&=32767,de=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{me=6,de=null;return}}else if(n=Ky(n,t,He),n!==null){de=n;return}if(t=t.sibling,t!==null){de=t;return}de=t=e}while(t!==null);me===0&&(me=5)}function xn(e,t,n){var r=G,i=tt.transition;try{tt.transition=null,G=1,r0(e,t,n,r)}finally{tt.transition=i,G=r}return null}function r0(e,t,n,r){do ar();while(Gt!==null);if(q&6)throw Error(b(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(b(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Av(e,o),e===Se&&(de=Se=null,Oe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Zi||(Zi=!0,Xh(bo,function(){return ar(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=tt.transition,tt.transition=null;var l=G;G=1;var a=q;q|=4,ec.current=null,Xy(e,n),Bh(n,e),Oy(ps),Ro=!!fs,ps=fs=null,e.current=n,Jy(n),bv(),q=a,G=l,tt.transition=o}else e.current=n;if(Zi&&(Zi=!1,Gt=e,qo=i),o=e.pendingLanes,o===0&&(nn=null),Tv(n.stateNode),Be(e,se()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Vo)throw Vo=!1,e=Ns,Ns=null,e;return qo&1&&e.tag!==0&&ar(),o=e.pendingLanes,o&1?e===zs?Jr++:(Jr=0,zs=e):Jr=0,pn(),null}function ar(){if(Gt!==null){var e=jp(qo),t=tt.transition,n=G;try{if(tt.transition=null,G=16>e?16:e,Gt===null)var r=!1;else{if(e=Gt,Gt=null,qo=0,q&6)throw Error(b(331));var i=q;for(q|=4,N=e.current;N!==null;){var o=N,l=o.child;if(N.flags&16){var a=o.deletions;if(a!==null){for(var s=0;s<a.length;s++){var u=a[s];for(N=u;N!==null;){var f=N;switch(f.tag){case 0:case 11:case 15:Yr(8,f,o)}var c=f.child;if(c!==null)c.return=f,N=c;else for(;N!==null;){f=N;var v=f.sibling,w=f.return;if(Mh(f),f===u){N=null;break}if(v!==null){v.return=w,N=v;break}N=w}}}var m=o.alternate;if(m!==null){var y=m.child;if(y!==null){m.child=null;do{var S=y.sibling;y.sibling=null,y=S}while(y!==null)}}N=o}}if(o.subtreeFlags&2064&&l!==null)l.return=o,N=l;else e:for(;N!==null;){if(o=N,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Yr(9,o,o.return)}var h=o.sibling;if(h!==null){h.return=o.return,N=h;break e}N=o.return}}var p=e.current;for(N=p;N!==null;){l=N;var g=l.child;if(l.subtreeFlags&2064&&g!==null)g.return=l,N=g;else e:for(l=p;N!==null;){if(a=N,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:kl(9,a)}}catch(O){le(a,a.return,O)}if(a===l){N=null;break e}var x=a.sibling;if(x!==null){x.return=a.return,N=x;break e}N=a.return}}if(q=i,pn(),kt&&typeof kt.onPostCommitFiberRoot=="function")try{kt.onPostCommitFiberRoot(hl,e)}catch{}r=!0}return r}finally{G=n,tt.transition=t}}return!1}function Fd(e,t,n){t=mr(n,t),t=bh(e,t,1),e=tn(e,t,1),t=Le(),e!==null&&(bi(e,1,t),Be(e,t))}function le(e,t,n){if(e.tag===3)Fd(e,e,n);else for(;t!==null;){if(t.tag===3){Fd(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(nn===null||!nn.has(r))){e=mr(n,e),e=Ph(t,e,1),t=tn(t,e,1),e=Le(),t!==null&&(bi(t,1,e),Be(t,e));break}}t=t.return}}function i0(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Le(),e.pingedLanes|=e.suspendedLanes&n,Se===e&&(Oe&n)===n&&(me===4||me===3&&(Oe&130023424)===Oe&&500>se()-nc?Cn(e,0):tc|=n),Be(e,t)}function Gh(e,t){t===0&&(e.mode&1?(t=Hi,Hi<<=1,!(Hi&130023424)&&(Hi=4194304)):t=1);var n=Le();e=$t(e,t),e!==null&&(bi(e,t,n),Be(e,n))}function o0(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Gh(e,n)}function l0(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(b(314))}r!==null&&r.delete(t),Gh(e,n)}var Yh;Yh=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Fe.current)Me=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Me=!1,Qy(e,t,n);Me=!!(e.flags&131072)}else Me=!1,te&&t.flags&1048576&&Zp(t,Ao,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;po(e,t),e=t.pendingProps;var i=dr(t,be.current);lr(t,n),i=Gu(null,t,r,e,i,n);var o=Yu();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ue(r)?(o=!0,$o(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Wu(t),i.updater=wl,t.stateNode=i,i._reactInternals=t,ks(t,r,e,n),t=_s(null,t,r,!0,o,n)):(t.tag=0,te&&o&&Au(t),Te(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(po(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=s0(r),e=at(r,e),i){case 0:t=Cs(null,t,r,e,n);break e;case 1:t=Rd(null,t,r,e,n);break e;case 11:t=bd(null,t,r,e,n);break e;case 14:t=Pd(null,t,r,at(r.type,e),n);break e}throw Error(b(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:at(r,i),Cs(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:at(r,i),Rd(e,t,r,i,n);case 3:e:{if(Nh(t),e===null)throw Error(b(387));r=t.pendingProps,o=t.memoizedState,i=o.element,rh(e,t),Fo(t,r,null,n);var l=t.memoizedState;if(r=l.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=mr(Error(b(423)),t),t=Td(e,t,r,n,i);break e}else if(r!==i){i=mr(Error(b(424)),t),t=Td(e,t,r,n,i);break e}else for(We=en(t.stateNode.containerInfo.firstChild),Ve=t,te=!0,ut=null,n=ah(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(fr(),r===i){t=It(e,t,n);break e}Te(e,t,r,n)}t=t.child}return t;case 5:return sh(t),e===null&&xs(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,l=i.children,hs(r,i)?l=null:o!==null&&hs(r,o)&&(t.flags|=32),Lh(e,t),Te(e,t,l,n),t.child;case 6:return e===null&&xs(t),null;case 13:return zh(e,t,n);case 4:return Vu(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=pr(t,null,r,n):Te(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:at(r,i),bd(e,t,r,i,n);case 7:return Te(e,t,t.pendingProps,n),t.child;case 8:return Te(e,t,t.pendingProps.children,n),t.child;case 12:return Te(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,l=i.value,Y(Do,r._currentValue),r._currentValue=l,o!==null)if(ht(o.value,l)){if(o.children===i.children&&!Fe.current){t=It(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var a=o.dependencies;if(a!==null){l=o.child;for(var s=a.firstContext;s!==null;){if(s.context===r){if(o.tag===1){s=Tt(-1,n&-n),s.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?s.next=s:(s.next=f.next,f.next=s),u.pending=s}}o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),ws(o.return,n,t),a.lanes|=n;break}s=s.next}}else if(o.tag===10)l=o.type===t.type?null:o.child;else if(o.tag===18){if(l=o.return,l===null)throw Error(b(341));l.lanes|=n,a=l.alternate,a!==null&&(a.lanes|=n),ws(l,n,t),l=o.sibling}else l=o.child;if(l!==null)l.return=o;else for(l=o;l!==null;){if(l===t){l=null;break}if(o=l.sibling,o!==null){o.return=l.return,l=o;break}l=l.return}o=l}Te(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,lr(t,n),i=rt(i),r=r(i),t.flags|=1,Te(e,t,r,n),t.child;case 14:return r=t.type,i=at(r,t.pendingProps),i=at(r.type,i),Pd(e,t,r,i,n);case 15:return Rh(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:at(r,i),po(e,t),t.tag=1,Ue(r)?(e=!0,$o(t)):e=!1,lr(t,n),oh(t,r,i),ks(t,r,i,n),_s(null,t,r,!0,e,n);case 19:return $h(e,t,n);case 22:return Th(e,t,n)}throw Error(b(156,t.tag))};function Xh(e,t){return Op(e,t)}function a0(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function et(e,t,n,r){return new a0(e,t,n,r)}function lc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function s0(e){if(typeof e=="function")return lc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===_u)return 11;if(e===Eu)return 14}return 2}function on(e,t){var n=e.alternate;return n===null?(n=et(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function go(e,t,n,r,i,o){var l=2;if(r=e,typeof e=="function")lc(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case Wn:return _n(n.children,i,o,t);case Cu:l=8,i|=8;break;case qa:return e=et(12,n,t,i|2),e.elementType=qa,e.lanes=o,e;case Qa:return e=et(13,n,t,i),e.elementType=Qa,e.lanes=o,e;case Ka:return e=et(19,n,t,i),e.elementType=Ka,e.lanes=o,e;case lp:return Cl(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ip:l=10;break e;case op:l=9;break e;case _u:l=11;break e;case Eu:l=14;break e;case Ht:l=16,r=null;break e}throw Error(b(130,e==null?e:typeof e,""))}return t=et(l,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function _n(e,t,n,r){return e=et(7,e,r,t),e.lanes=n,e}function Cl(e,t,n,r){return e=et(22,e,r,t),e.elementType=lp,e.lanes=n,e.stateNode={isHidden:!1},e}function Oa(e,t,n){return e=et(6,e,null,t),e.lanes=n,e}function Ca(e,t,n){return t=et(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function u0(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ia(0),this.expirationTimes=ia(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ia(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function ac(e,t,n,r,i,o,l,a,s){return e=new u0(e,t,n,a,s),t===1?(t=1,o===!0&&(t|=8)):t=0,o=et(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Wu(o),e}function c0(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Hn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Jh(e){if(!e)return cn;e=e._reactInternals;e:{if(In(e)!==e||e.tag!==1)throw Error(b(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ue(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(b(171))}if(e.tag===1){var n=e.type;if(Ue(n))return Xp(e,n,t)}return t}function Zh(e,t,n,r,i,o,l,a,s){return e=ac(n,r,!0,e,i,o,l,a,s),e.context=Jh(null),n=e.current,r=Le(),i=rn(n),o=Tt(r,i),o.callback=t??null,tn(n,o,i),e.current.lanes=i,bi(e,i,r),Be(e,r),e}function _l(e,t,n,r){var i=t.current,o=Le(),l=rn(i);return n=Jh(n),t.context===null?t.context=n:t.pendingContext=n,t=Tt(o,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=tn(i,t,l),e!==null&&(ft(e,i,l,o),uo(e,i,l)),l}function Ko(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Ud(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function sc(e,t){Ud(e,t),(e=e.alternate)&&Ud(e,t)}function d0(){return null}var em=typeof reportError=="function"?reportError:function(e){console.error(e)};function uc(e){this._internalRoot=e}El.prototype.render=uc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(b(409));_l(e,t,null,null)};El.prototype.unmount=uc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Ln(function(){_l(null,e,null,null)}),t[zt]=null}};function El(e){this._internalRoot=e}El.prototype.unstable_scheduleHydration=function(e){if(e){var t=Rp();e={blockedOn:null,target:e,priority:t};for(var n=0;n<qt.length&&t!==0&&t<qt[n].priority;n++);qt.splice(n,0,e),n===0&&Lp(e)}};function cc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function jl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Bd(){}function f0(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=Ko(l);o.call(u)}}var l=Zh(t,r,e,0,null,!1,!1,"",Bd);return e._reactRootContainer=l,e[zt]=l.current,ui(e.nodeType===8?e.parentNode:e),Ln(),l}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Ko(s);a.call(u)}}var s=ac(e,0,!1,null,null,!1,!1,"",Bd);return e._reactRootContainer=s,e[zt]=s.current,ui(e.nodeType===8?e.parentNode:e),Ln(function(){_l(t,s,n,r)}),s}function bl(e,t,n,r,i){var o=n._reactRootContainer;if(o){var l=o;if(typeof i=="function"){var a=i;i=function(){var s=Ko(l);a.call(s)}}_l(t,l,e,i)}else l=f0(n,t,e,i,r);return Ko(l)}bp=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Ur(t.pendingLanes);n!==0&&(Pu(t,n|1),Be(t,se()),!(q&6)&&(gr=se()+500,pn()))}break;case 13:Ln(function(){var r=$t(e,1);if(r!==null){var i=Le();ft(r,e,1,i)}}),sc(e,1)}};Ru=function(e){if(e.tag===13){var t=$t(e,134217728);if(t!==null){var n=Le();ft(t,e,134217728,n)}sc(e,134217728)}};Pp=function(e){if(e.tag===13){var t=rn(e),n=$t(e,t);if(n!==null){var r=Le();ft(n,e,t,r)}sc(e,t)}};Rp=function(){return G};Tp=function(e,t){var n=G;try{return G=e,t()}finally{G=n}};is=function(e,t,n){switch(t){case"input":if(Xa(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=yl(r);if(!i)throw Error(b(90));sp(r),Xa(r,i)}}}break;case"textarea":cp(e,n);break;case"select":t=n.value,t!=null&&nr(e,!!n.multiple,t,!1)}};vp=rc;yp=Ln;var p0={usingClientEntryPoint:!1,Events:[Ri,Kn,yl,mp,gp,rc]},Ar={findFiberByHostInstance:wn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},h0={bundleType:Ar.bundleType,version:Ar.version,rendererPackageName:Ar.rendererPackageName,rendererConfig:Ar.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Dt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Sp(e),e===null?null:e.stateNode},findFiberByHostInstance:Ar.findFiberByHostInstance||d0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var eo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!eo.isDisabled&&eo.supportsFiber)try{hl=eo.inject(h0),kt=eo}catch{}}Qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=p0;Qe.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!cc(t))throw Error(b(200));return c0(e,t,null,n)};Qe.createRoot=function(e,t){if(!cc(e))throw Error(b(299));var n=!1,r="",i=em;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=ac(e,1,!1,null,null,n,!1,r,i),e[zt]=t.current,ui(e.nodeType===8?e.parentNode:e),new uc(t)};Qe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(b(188)):(e=Object.keys(e).join(","),Error(b(268,e)));return e=Sp(t),e=e===null?null:e.stateNode,e};Qe.flushSync=function(e){return Ln(e)};Qe.hydrate=function(e,t,n){if(!jl(t))throw Error(b(200));return bl(null,e,t,!0,n)};Qe.hydrateRoot=function(e,t,n){if(!cc(e))throw Error(b(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",l=em;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=Zh(t,null,e,1,n??null,i,!1,o,l),e[zt]=t.current,ui(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new El(t)};Qe.render=function(e,t,n){if(!jl(t))throw Error(b(200));return bl(null,e,t,!1,n)};Qe.unmountComponentAtNode=function(e){if(!jl(e))throw Error(b(40));return e._reactRootContainer?(Ln(function(){bl(null,null,e,!1,function(){e._reactRootContainer=null,e[zt]=null})}),!0):!1};Qe.unstable_batchedUpdates=rc;Qe.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!jl(n))throw Error(b(200));if(e==null||e._reactInternals===void 0)throw Error(b(38));return bl(e,t,n,!1,r)};Qe.version="18.2.0-next-9e3b772b8-20220608";function tm(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(tm)}catch(e){console.error(e)}}tm(),Zf.exports=Qe;var m0=Zf.exports,Hd=m0;Wa.createRoot=Hd.createRoot,Wa.hydrateRoot=Hd.hydrateRoot;const g0={COLORS:{Dark_Dark_400:"#000A0F",Dark_Dark_900:"#0D1D25",Dark_dark_700:"#001119",dark_dark_600:"#00111A",dark_dark_900:"#0D1D25",dark_dark_800:"#0D161B",Light_Light_100:"#FFFFFF",Light_Light_400:"#C4C4CC",light_light_300:" #E1E1E6",light_light_500:"#7C7C8A",light_light_600:"#76797B",light_light_700:"#4D585E",Tints_Tomato_100:"#750310",Tints_Tomato_400:"#AB4D55"}};var xe=function(){return xe=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},xe.apply(this,arguments)};function yi(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))}var J="-ms-",Zr="-moz-",Q="-webkit-",nm="comm",Pl="rule",dc="decl",v0="@import",rm="@keyframes",y0="@layer",x0=Math.abs,fc=String.fromCharCode,As=Object.assign;function w0(e,t){return ye(e,0)^45?(((t<<2^ye(e,0))<<2^ye(e,1))<<2^ye(e,2))<<2^ye(e,3):0}function im(e){return e.trim()}function jt(e,t){return(e=t.exec(e))?e[0]:e}function F(e,t,n){return e.replace(t,n)}function vo(e,t){return e.indexOf(t)}function ye(e,t){return e.charCodeAt(t)|0}function vr(e,t,n){return e.slice(t,n)}function xt(e){return e.length}function om(e){return e.length}function Hr(e,t){return t.push(e),e}function S0(e,t){return e.map(t).join("")}function Wd(e,t){return e.filter(function(n){return!jt(n,t)})}var Rl=1,yr=1,lm=0,ot=0,ce=0,jr="";function Tl(e,t,n,r,i,o,l,a){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:Rl,column:yr,length:l,return:"",siblings:a}}function Bt(e,t){return As(Tl("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Fn(e){for(;e.root;)e=Bt(e.root,{children:[e]});Hr(e,e.siblings)}function k0(){return ce}function O0(){return ce=ot>0?ye(jr,--ot):0,yr--,ce===10&&(yr=1,Rl--),ce}function pt(){return ce=ot<lm?ye(jr,ot++):0,yr++,ce===10&&(yr=1,Rl++),ce}function En(){return ye(jr,ot)}function yo(){return ot}function Ll(e,t){return vr(jr,e,t)}function Ds(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function C0(e){return Rl=yr=1,lm=xt(jr=e),ot=0,[]}function _0(e){return jr="",e}function _a(e){return im(Ll(ot-1,Ms(e===91?e+2:e===40?e+1:e)))}function E0(e){for(;(ce=En())&&ce<33;)pt();return Ds(e)>2||Ds(ce)>3?"":" "}function j0(e,t){for(;--t&&pt()&&!(ce<48||ce>102||ce>57&&ce<65||ce>70&&ce<97););return Ll(e,yo()+(t<6&&En()==32&&pt()==32))}function Ms(e){for(;pt();)switch(ce){case e:return ot;case 34:case 39:e!==34&&e!==39&&Ms(ce);break;case 40:e===41&&Ms(e);break;case 92:pt();break}return ot}function b0(e,t){for(;pt()&&e+ce!==47+10;)if(e+ce===42+42&&En()===47)break;return"/*"+Ll(t,ot-1)+"*"+fc(e===47?e:pt())}function P0(e){for(;!Ds(En());)pt();return Ll(e,ot)}function R0(e){return _0(xo("",null,null,null,[""],e=C0(e),0,[0],e))}function xo(e,t,n,r,i,o,l,a,s){for(var u=0,f=0,c=l,v=0,w=0,m=0,y=1,S=1,h=1,p=0,g="",x=i,O=o,k=r,E=g;S;)switch(m=p,p=pt()){case 40:if(m!=108&&ye(E,c-1)==58){vo(E+=F(_a(p),"&","&\f"),"&\f")!=-1&&(h=-1);break}case 34:case 39:case 91:E+=_a(p);break;case 9:case 10:case 13:case 32:E+=E0(m);break;case 92:E+=j0(yo()-1,7);continue;case 47:switch(En()){case 42:case 47:Hr(T0(b0(pt(),yo()),t,n,s),s);break;default:E+="/"}break;case 123*y:a[u++]=xt(E)*h;case 125*y:case 59:case 0:switch(p){case 0:case 125:S=0;case 59+f:h==-1&&(E=F(E,/\f/g,"")),w>0&&xt(E)-c&&Hr(w>32?qd(E+";",r,n,c-1,s):qd(F(E," ","")+";",r,n,c-2,s),s);break;case 59:E+=";";default:if(Hr(k=Vd(E,t,n,u,f,i,a,g,x=[],O=[],c,o),o),p===123)if(f===0)xo(E,t,k,k,x,o,c,a,O);else switch(v===99&&ye(E,3)===110?100:v){case 100:case 108:case 109:case 115:xo(e,k,k,r&&Hr(Vd(e,k,k,0,0,i,a,g,i,x=[],c,O),O),i,O,c,a,r?x:O);break;default:xo(E,k,k,k,[""],O,0,a,O)}}u=f=w=0,y=h=1,g=E="",c=l;break;case 58:c=1+xt(E),w=m;default:if(y<1){if(p==123)--y;else if(p==125&&y++==0&&O0()==125)continue}switch(E+=fc(p),p*y){case 38:h=f>0?1:(E+="\f",-1);break;case 44:a[u++]=(xt(E)-1)*h,h=1;break;case 64:En()===45&&(E+=_a(pt())),v=En(),f=c=xt(g=E+=P0(yo())),p++;break;case 45:m===45&&xt(E)==2&&(y=0)}}return o}function Vd(e,t,n,r,i,o,l,a,s,u,f,c){for(var v=i-1,w=i===0?o:[""],m=om(w),y=0,S=0,h=0;y<r;++y)for(var p=0,g=vr(e,v+1,v=x0(S=l[y])),x=e;p<m;++p)(x=im(S>0?w[p]+" "+g:F(g,/&\f/g,w[p])))&&(s[h++]=x);return Tl(e,t,n,i===0?Pl:a,s,u,f,c)}function T0(e,t,n,r){return Tl(e,t,n,nm,fc(k0()),vr(e,2,-2),0,r)}function qd(e,t,n,r,i){return Tl(e,t,n,dc,vr(e,0,r),vr(e,r+1,-1),r,i)}function am(e,t,n){switch(w0(e,t)){case 5103:return Q+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Q+e+e;case 4789:return Zr+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return Q+e+Zr+e+J+e+e;case 5936:switch(ye(e,t+11)){case 114:return Q+e+J+F(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return Q+e+J+F(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return Q+e+J+F(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return Q+e+J+e+e;case 6165:return Q+e+J+"flex-"+e+e;case 5187:return Q+e+F(e,/(\w+).+(:[^]+)/,Q+"box-$1$2"+J+"flex-$1$2")+e;case 5443:return Q+e+J+"flex-item-"+F(e,/flex-|-self/g,"")+(jt(e,/flex-|baseline/)?"":J+"grid-row-"+F(e,/flex-|-self/g,""))+e;case 4675:return Q+e+J+"flex-line-pack"+F(e,/align-content|flex-|-self/g,"")+e;case 5548:return Q+e+J+F(e,"shrink","negative")+e;case 5292:return Q+e+J+F(e,"basis","preferred-size")+e;case 6060:return Q+"box-"+F(e,"-grow","")+Q+e+J+F(e,"grow","positive")+e;case 4554:return Q+F(e,/([^-])(transform)/g,"$1"+Q+"$2")+e;case 6187:return F(F(F(e,/(zoom-|grab)/,Q+"$1"),/(image-set)/,Q+"$1"),e,"")+e;case 5495:case 3959:return F(e,/(image-set\([^]*)/,Q+"$1$`$1");case 4968:return F(F(e,/(.+:)(flex-)?(.*)/,Q+"box-pack:$3"+J+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Q+e+e;case 4200:if(!jt(e,/flex-|baseline/))return J+"grid-column-align"+vr(e,t)+e;break;case 2592:case 3360:return J+F(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,jt(r.props,/grid-\w+-end/)})?~vo(e+(n=n[t].value),"span")?e:J+F(e,"-start","")+e+J+"grid-row-span:"+(~vo(n,"span")?jt(n,/\d+/):+jt(n,/\d+/)-+jt(e,/\d+/))+";":J+F(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return jt(r.props,/grid-\w+-start/)})?e:J+F(F(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return F(e,/(.+)-inline(.+)/,Q+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(xt(e)-1-t>6)switch(ye(e,t+1)){case 109:if(ye(e,t+4)!==45)break;case 102:return F(e,/(.+:)(.+)-([^]+)/,"$1"+Q+"$2-$3$1"+Zr+(ye(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~vo(e,"stretch")?am(F(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return F(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,o,l,a,s,u){return J+i+":"+o+u+(l?J+i+"-span:"+(a?s:+s-+o)+u:"")+e});case 4949:if(ye(e,t+6)===121)return F(e,":",":"+Q)+e;break;case 6444:switch(ye(e,ye(e,14)===45?18:11)){case 120:return F(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Q+(ye(e,14)===45?"inline-":"")+"box$3$1"+Q+"$2$3$1"+J+"$2box$3")+e;case 100:return F(e,":",":"+J)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return F(e,"scroll-","scroll-snap-")+e}return e}function Go(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function L0(e,t,n,r){switch(e.type){case y0:if(e.children.length)break;case v0:case dc:return e.return=e.return||e.value;case nm:return"";case rm:return e.return=e.value+"{"+Go(e.children,r)+"}";case Pl:if(!xt(e.value=e.props.join(",")))return""}return xt(n=Go(e.children,r))?e.return=e.value+"{"+n+"}":""}function N0(e){var t=om(e);return function(n,r,i,o){for(var l="",a=0;a<t;a++)l+=e[a](n,r,i,o)||"";return l}}function z0(e){return function(t){t.root||(t=t.return)&&e(t)}}function $0(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case dc:e.return=am(e.value,e.length,n);return;case rm:return Go([Bt(e,{value:F(e.value,"@","@"+Q)})],r);case Pl:if(e.length)return S0(n=e.props,function(i){switch(jt(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Fn(Bt(e,{props:[F(i,/:(read-\w+)/,":"+Zr+"$1")]})),Fn(Bt(e,{props:[i]})),As(e,{props:Wd(n,r)});break;case"::placeholder":Fn(Bt(e,{props:[F(i,/:(plac\w+)/,":"+Q+"input-$1")]})),Fn(Bt(e,{props:[F(i,/:(plac\w+)/,":"+Zr+"$1")]})),Fn(Bt(e,{props:[F(i,/:(plac\w+)/,J+"input-$1")]})),Fn(Bt(e,{props:[i]})),As(e,{props:Wd(n,r)});break}return""})}}var I0={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},xr=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",sm="active",um="data-styled-version",Nl="6.1.3",pc=`/*!sc*/
`,hc=typeof window<"u"&&"HTMLElement"in window,A0=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY),D0={},zl=Object.freeze([]),wr=Object.freeze({});function cm(e,t,n){return n===void 0&&(n=wr),e.theme!==n.theme&&e.theme||t||n.theme}var dm=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),M0=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,F0=/(^-|-$)/g;function Qd(e){return e.replace(M0,"-").replace(F0,"")}var U0=/(a)(d)/gi,to=52,Kd=function(e){return String.fromCharCode(e+(e>25?39:97))};function Fs(e){var t,n="";for(t=Math.abs(e);t>to;t=t/to|0)n=Kd(t%to)+n;return(Kd(t%to)+n).replace(U0,"$1-$2")}var Ea,fm=5381,tr=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},pm=function(e){return tr(fm,e)};function hm(e){return Fs(pm(e)>>>0)}function B0(e){return e.displayName||e.name||"Component"}function ja(e){return typeof e=="string"&&!0}var mm=typeof Symbol=="function"&&Symbol.for,gm=mm?Symbol.for("react.memo"):60115,H0=mm?Symbol.for("react.forward_ref"):60112,W0={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},V0={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},vm={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},q0=((Ea={})[H0]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Ea[gm]=vm,Ea);function Gd(e){return("type"in(t=e)&&t.type.$$typeof)===gm?vm:"$$typeof"in e?q0[e.$$typeof]:W0;var t}var Q0=Object.defineProperty,K0=Object.getOwnPropertyNames,Yd=Object.getOwnPropertySymbols,G0=Object.getOwnPropertyDescriptor,Y0=Object.getPrototypeOf,Xd=Object.prototype;function ym(e,t,n){if(typeof t!="string"){if(Xd){var r=Y0(t);r&&r!==Xd&&ym(e,r,n)}var i=K0(t);Yd&&(i=i.concat(Yd(t)));for(var o=Gd(e),l=Gd(t),a=0;a<i.length;++a){var s=i[a];if(!(s in V0||n&&n[s]||l&&s in l||o&&s in o)){var u=G0(t,s);try{Q0(e,s,u)}catch{}}}}return e}function Nn(e){return typeof e=="function"}function mc(e){return typeof e=="object"&&"styledComponentId"in e}function On(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Us(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function xi(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Bs(e,t,n){if(n===void 0&&(n=!1),!n&&!xi(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Bs(e[r],t[r]);else if(xi(t))for(var r in t)e[r]=Bs(e[r],t[r]);return e}function gc(e,t){Object.defineProperty(e,"toString",{value:t})}function zn(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var X0=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,o=i;t>=o;)if((o<<=1)<0)throw zn(16,"".concat(t));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var l=i;l<o;l++)this.groupSizes[l]=0}for(var a=this.indexOfGroup(t+1),s=(l=0,n.length);l<s;l++)this.tag.insertRule(a,n[l])&&(this.groupSizes[t]++,a++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var o=r;o<i;o++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),o=i+r,l=i;l<o;l++)n+="".concat(this.tag.getRule(l)).concat(pc);return n},e}(),wo=new Map,Yo=new Map,So=1,no=function(e){if(wo.has(e))return wo.get(e);for(;Yo.has(So);)So++;var t=So++;return wo.set(e,t),Yo.set(t,e),t},J0=function(e,t){So=t+1,wo.set(e,t),Yo.set(t,e)},Z0="style[".concat(xr,"][").concat(um,'="').concat(Nl,'"]'),e1=new RegExp("^".concat(xr,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),t1=function(e,t,n){for(var r,i=n.split(","),o=0,l=i.length;o<l;o++)(r=i[o])&&e.registerName(t,r)},n1=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(pc),i=[],o=0,l=r.length;o<l;o++){var a=r[o].trim();if(a){var s=a.match(e1);if(s){var u=0|parseInt(s[1],10),f=s[2];u!==0&&(J0(f,u),t1(e,f,s[3]),e.getTag().insertRules(u,i)),i.length=0}else i.push(a)}}};function r1(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var xm=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(a){var s=Array.from(a.querySelectorAll("style[".concat(xr,"]")));return s[s.length-1]}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(xr,sm),r.setAttribute(um,Nl);var l=r1();return l&&r.setAttribute("nonce",l),n.insertBefore(r,o),r},i1=function(){function e(t){this.element=xm(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,o=r.length;i<o;i++){var l=r[i];if(l.ownerNode===n)return l}throw zn(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),o1=function(){function e(t){this.element=xm(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),l1=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),Jd=hc,a1={isServer:!hc,useCSSOMInjection:!A0},Xo=function(){function e(t,n,r){t===void 0&&(t=wr),n===void 0&&(n={});var i=this;this.options=xe(xe({},a1),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&hc&&Jd&&(Jd=!1,function(o){for(var l=document.querySelectorAll(Z0),a=0,s=l.length;a<s;a++){var u=l[a];u&&u.getAttribute(xr)!==sm&&(n1(o,u),u.parentNode&&u.parentNode.removeChild(u))}}(this)),gc(this,function(){return function(o){for(var l=o.getTag(),a=l.length,s="",u=function(c){var v=function(h){return Yo.get(h)}(c);if(v===void 0)return"continue";var w=o.names.get(v),m=l.getGroup(c);if(w===void 0||m.length===0)return"continue";var y="".concat(xr,".g").concat(c,'[id="').concat(v,'"]'),S="";w!==void 0&&w.forEach(function(h){h.length>0&&(S+="".concat(h,","))}),s+="".concat(m).concat(y,'{content:"').concat(S,'"}').concat(pc)},f=0;f<a;f++)u(f);return s}(i)})}return e.registerId=function(t){return no(t)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(xe(xe({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new l1(i):r?new i1(i):new o1(i)}(this.options),new X0(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(no(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(no(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(no(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),s1=/&/g,u1=/^\s*\/\/.*$/gm;function wm(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=wm(n.children,t)),n})}function c1(e){var t,n,r,i=e===void 0?wr:e,o=i.options,l=o===void 0?wr:o,a=i.plugins,s=a===void 0?zl:a,u=function(v,w,m){return m===n||m.startsWith(n)&&m.endsWith(n)&&m.replaceAll(n,"").length>0?".".concat(t):v},f=s.slice();f.push(function(v){v.type===Pl&&v.value.includes("&")&&(v.props[0]=v.props[0].replace(s1,n).replace(r,u))}),l.prefix&&f.push($0),f.push(L0);var c=function(v,w,m,y){w===void 0&&(w=""),m===void 0&&(m=""),y===void 0&&(y="&"),t=y,n=w,r=new RegExp("\\".concat(n,"\\b"),"g");var S=v.replace(u1,""),h=R0(m||w?"".concat(m," ").concat(w," { ").concat(S," }"):S);l.namespace&&(h=wm(h,l.namespace));var p=[];return Go(h,N0(f.concat(z0(function(g){return p.push(g)})))),p};return c.hash=s.length?s.reduce(function(v,w){return w.name||zn(15),tr(v,w.name)},fm).toString():"",c}var d1=new Xo,Hs=c1(),Sm=Ze.createContext({shouldForwardProp:void 0,styleSheet:d1,stylis:Hs});Sm.Consumer;Ze.createContext(void 0);function Ws(){return C.useContext(Sm)}var f1=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=Hs);var l=r.name+o.hash;i.hasNameForId(r.id,l)||i.insertRules(r.id,l,o(r.rules,l,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,gc(this,function(){throw zn(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=Hs),this.name+t.hash},e}(),p1=function(e){return e>="A"&&e<="Z"};function Zd(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;p1(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var km=function(e){return e==null||e===!1||e===""},Om=function(e){var t,n,r=[];for(var i in e){var o=e[i];e.hasOwnProperty(i)&&!km(o)&&(Array.isArray(o)&&o.isCss||Nn(o)?r.push("".concat(Zd(i),":"),o,";"):xi(o)?r.push.apply(r,yi(yi(["".concat(i," {")],Om(o),!1),["}"],!1)):r.push("".concat(Zd(i),": ").concat((t=i,(n=o)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in I0||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function ln(e,t,n,r){if(km(e))return[];if(mc(e))return[".".concat(e.styledComponentId)];if(Nn(e)){if(!Nn(o=e)||o.prototype&&o.prototype.isReactComponent||!t)return[e];var i=e(t);return ln(i,t,n,r)}var o;return e instanceof f1?n?(e.inject(n,r),[e.getName(r)]):[e]:xi(e)?Om(e):Array.isArray(e)?Array.prototype.concat.apply(zl,e.map(function(l){return ln(l,t,n,r)})):[e.toString()]}function Cm(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Nn(n)&&!mc(n))return!1}return!0}var h1=pm(Nl),m1=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&Cm(t),this.componentId=n,this.baseHash=tr(h1,n),this.baseStyle=r,Xo.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=On(i,this.staticRulesId);else{var o=Us(ln(this.rules,t,n,r)),l=Fs(tr(this.baseHash,o)>>>0);if(!n.hasNameForId(this.componentId,l)){var a=r(o,".".concat(l),void 0,this.componentId);n.insertRules(this.componentId,l,a)}i=On(i,l),this.staticRulesId=l}else{for(var s=tr(this.baseHash,r.hash),u="",f=0;f<this.rules.length;f++){var c=this.rules[f];if(typeof c=="string")u+=c;else if(c){var v=Us(ln(c,t,n,r));s=tr(s,v+f),u+=v}}if(u){var w=Fs(s>>>0);n.hasNameForId(this.componentId,w)||n.insertRules(this.componentId,w,r(u,".".concat(w),void 0,this.componentId)),i=On(i,w)}}return i},e}(),wi=Ze.createContext(void 0);wi.Consumer;function g1(e){var t=Ze.useContext(wi),n=C.useMemo(function(){return function(r,i){if(!r)throw zn(14);if(Nn(r)){var o=r(i);return o}if(Array.isArray(r)||typeof r!="object")throw zn(8);return i?xe(xe({},i),r):r}(e.theme,t)},[e.theme,t]);return e.children?Ze.createElement(wi.Provider,{value:n},e.children):null}var ba={};function v1(e,t,n){var r=mc(e),i=e,o=!ja(e),l=t.attrs,a=l===void 0?zl:l,s=t.componentId,u=s===void 0?function(x,O){var k=typeof x!="string"?"sc":Qd(x);ba[k]=(ba[k]||0)+1;var E="".concat(k,"-").concat(hm(Nl+k+ba[k]));return O?"".concat(O,"-").concat(E):E}(t.displayName,t.parentComponentId):s,f=t.displayName,c=f===void 0?function(x){return ja(x)?"styled.".concat(x):"Styled(".concat(B0(x),")")}(e):f,v=t.displayName&&t.componentId?"".concat(Qd(t.displayName),"-").concat(t.componentId):t.componentId||u,w=r&&i.attrs?i.attrs.concat(a).filter(Boolean):a,m=t.shouldForwardProp;if(r&&i.shouldForwardProp){var y=i.shouldForwardProp;if(t.shouldForwardProp){var S=t.shouldForwardProp;m=function(x,O){return y(x,O)&&S(x,O)}}else m=y}var h=new m1(n,v,r?i.componentStyle:void 0);function p(x,O){return function(k,E,_){var P=k.attrs,T=k.componentStyle,M=k.defaultProps,$=k.foldedComponentIds,z=k.styledComponentId,Ge=k.target,ue=Ze.useContext(wi),Pe=Ws(),Ie=k.shouldForwardProp||Pe.shouldForwardProp,R=function(ge,_t,Ye){for(var gt,vn=xe(xe({},_t),{className:void 0,theme:Ye}),Jl=0;Jl<ge.length;Jl+=1){var Ii=Nn(gt=ge[Jl])?gt(vn):gt;for(var Mt in Ii)vn[Mt]=Mt==="className"?On(vn[Mt],Ii[Mt]):Mt==="style"?xe(xe({},vn[Mt]),Ii[Mt]):Ii[Mt]}return _t.className&&(vn.className=On(vn.className,_t.className)),vn}(P,E,cm(E,ue,M)||wr),A=R.as||Ge,I={};for(var V in R)R[V]===void 0||V[0]==="$"||V==="as"||V==="theme"||(V==="forwardedAs"?I.as=R.forwardedAs:Ie&&!Ie(V,A)||(I[V]=R[V]));var K=function(ge,_t){var Ye=Ws(),gt=ge.generateAndInjectStyles(_t,Ye.styleSheet,Ye.stylis);return gt}(T,R),mt=On($,z);return K&&(mt+=" "+K),R.className&&(mt+=" "+R.className),I[ja(A)&&!dm.has(A)?"class":"className"]=mt,I.ref=_,C.createElement(A,I)}(g,x,O)}p.displayName=c;var g=Ze.forwardRef(p);return g.attrs=w,g.componentStyle=h,g.displayName=c,g.shouldForwardProp=m,g.foldedComponentIds=r?On(i.foldedComponentIds,i.styledComponentId):"",g.styledComponentId=v,g.target=r?i.target:e,Object.defineProperty(g,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(x){this._foldedDefaultProps=r?function(O){for(var k=[],E=1;E<arguments.length;E++)k[E-1]=arguments[E];for(var _=0,P=k;_<P.length;_++)Bs(O,P[_],!0);return O}({},i.defaultProps,x):x}}),gc(g,function(){return".".concat(g.styledComponentId)}),o&&ym(g,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),g}function ef(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var tf=function(e){return Object.assign(e,{isCss:!0})};function _m(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Nn(e)||xi(e))return tf(ln(ef(zl,yi([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?ln(r):tf(ln(ef(r,t)))}function Vs(e,t,n){if(n===void 0&&(n=wr),!t)throw zn(1,t);var r=function(i){for(var o=[],l=1;l<arguments.length;l++)o[l-1]=arguments[l];return e(t,n,_m.apply(void 0,yi([i],o,!1)))};return r.attrs=function(i){return Vs(e,t,xe(xe({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return Vs(e,t,xe(xe({},n),i))},r}var Em=function(e){return Vs(v1,e)},ae=Em;dm.forEach(function(e){ae[e]=Em(e)});var y1=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=Cm(t),Xo.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,i){var o=i(Us(ln(this.rules,n,r,i)),""),l=this.componentId+t;r.insertRules(l,l,o)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,i){t>2&&Xo.registerId(this.componentId+t),this.removeStyles(t,r),this.createStyles(t,n,r,i)},e}();function x1(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=_m.apply(void 0,yi([e],t,!1)),i="sc-global-".concat(hm(JSON.stringify(r))),o=new y1(r,i),l=function(s){var u=Ws(),f=Ze.useContext(wi),c=Ze.useRef(u.styleSheet.allocateGSInstance(i)).current;return u.styleSheet.server&&a(c,s,u.styleSheet,f,u.stylis),Ze.useLayoutEffect(function(){if(!u.styleSheet.server)return a(c,s,u.styleSheet,f,u.stylis),function(){return o.removeStyles(c,u.styleSheet)}},[c,s,u.styleSheet,f,u.stylis]),null};function a(s,u,f,c,v){if(o.isStatic)o.renderStyles(s,D0,f,v);else{var w=xe(xe({},u),{theme:cm(u,c,l.defaultProps)});o.renderStyles(s,w,f,v)}}return Ze.memo(l)}const w1=x1`

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





`;function jm(e,t){return function(){return e.apply(t,arguments)}}const{toString:S1}=Object.prototype,{getPrototypeOf:vc}=Object,$l=(e=>t=>{const n=S1.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),Ct=e=>(e=e.toLowerCase(),t=>$l(t)===e),Il=e=>t=>typeof t===e,{isArray:br}=Array,Si=Il("undefined");function k1(e){return e!==null&&!Si(e)&&e.constructor!==null&&!Si(e.constructor)&&nt(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const bm=Ct("ArrayBuffer");function O1(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&bm(e.buffer),t}const C1=Il("string"),nt=Il("function"),Pm=Il("number"),Al=e=>e!==null&&typeof e=="object",_1=e=>e===!0||e===!1,ko=e=>{if($l(e)!=="object")return!1;const t=vc(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},E1=Ct("Date"),j1=Ct("File"),b1=Ct("Blob"),P1=Ct("FileList"),R1=e=>Al(e)&&nt(e.pipe),T1=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||nt(e.append)&&((t=$l(e))==="formdata"||t==="object"&&nt(e.toString)&&e.toString()==="[object FormData]"))},L1=Ct("URLSearchParams"),N1=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Li(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,i;if(typeof e!="object"&&(e=[e]),br(e))for(r=0,i=e.length;r<i;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),l=o.length;let a;for(r=0;r<l;r++)a=o[r],t.call(null,e[a],a,e)}}function Rm(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,i;for(;r-- >0;)if(i=n[r],t===i.toLowerCase())return i;return null}const Tm=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),Lm=e=>!Si(e)&&e!==Tm;function qs(){const{caseless:e}=Lm(this)&&this||{},t={},n=(r,i)=>{const o=e&&Rm(t,i)||i;ko(t[o])&&ko(r)?t[o]=qs(t[o],r):ko(r)?t[o]=qs({},r):br(r)?t[o]=r.slice():t[o]=r};for(let r=0,i=arguments.length;r<i;r++)arguments[r]&&Li(arguments[r],n);return t}const z1=(e,t,n,{allOwnKeys:r}={})=>(Li(t,(i,o)=>{n&&nt(i)?e[o]=jm(i,n):e[o]=i},{allOwnKeys:r}),e),$1=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),I1=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},A1=(e,t,n,r)=>{let i,o,l;const a={};if(t=t||{},e==null)return t;do{for(i=Object.getOwnPropertyNames(e),o=i.length;o-- >0;)l=i[o],(!r||r(l,e,t))&&!a[l]&&(t[l]=e[l],a[l]=!0);e=n!==!1&&vc(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},D1=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},M1=e=>{if(!e)return null;if(br(e))return e;let t=e.length;if(!Pm(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},F1=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&vc(Uint8Array)),U1=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let i;for(;(i=r.next())&&!i.done;){const o=i.value;t.call(e,o[0],o[1])}},B1=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},H1=Ct("HTMLFormElement"),W1=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,i){return r.toUpperCase()+i}),nf=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),V1=Ct("RegExp"),Nm=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};Li(n,(i,o)=>{let l;(l=t(i,o,e))!==!1&&(r[o]=l||i)}),Object.defineProperties(e,r)},q1=e=>{Nm(e,(t,n)=>{if(nt(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(nt(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},Q1=(e,t)=>{const n={},r=i=>{i.forEach(o=>{n[o]=!0})};return br(e)?r(e):r(String(e).split(t)),n},K1=()=>{},G1=(e,t)=>(e=+e,Number.isFinite(e)?e:t),Pa="abcdefghijklmnopqrstuvwxyz",rf="0123456789",zm={DIGIT:rf,ALPHA:Pa,ALPHA_DIGIT:Pa+Pa.toUpperCase()+rf},Y1=(e=16,t=zm.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function X1(e){return!!(e&&nt(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const J1=e=>{const t=new Array(10),n=(r,i)=>{if(Al(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[i]=r;const o=br(r)?[]:{};return Li(r,(l,a)=>{const s=n(l,i+1);!Si(s)&&(o[a]=s)}),t[i]=void 0,o}}return r};return n(e,0)},Z1=Ct("AsyncFunction"),ex=e=>e&&(Al(e)||nt(e))&&nt(e.then)&&nt(e.catch),j={isArray:br,isArrayBuffer:bm,isBuffer:k1,isFormData:T1,isArrayBufferView:O1,isString:C1,isNumber:Pm,isBoolean:_1,isObject:Al,isPlainObject:ko,isUndefined:Si,isDate:E1,isFile:j1,isBlob:b1,isRegExp:V1,isFunction:nt,isStream:R1,isURLSearchParams:L1,isTypedArray:F1,isFileList:P1,forEach:Li,merge:qs,extend:z1,trim:N1,stripBOM:$1,inherits:I1,toFlatObject:A1,kindOf:$l,kindOfTest:Ct,endsWith:D1,toArray:M1,forEachEntry:U1,matchAll:B1,isHTMLForm:H1,hasOwnProperty:nf,hasOwnProp:nf,reduceDescriptors:Nm,freezeMethods:q1,toObjectSet:Q1,toCamelCase:W1,noop:K1,toFiniteNumber:G1,findKey:Rm,global:Tm,isContextDefined:Lm,ALPHABET:zm,generateString:Y1,isSpecCompliantForm:X1,toJSONObject:J1,isAsyncFn:Z1,isThenable:ex};function W(e,t,n,r,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i)}j.inherits(W,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:j.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const $m=W.prototype,Im={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{Im[e]={value:e}});Object.defineProperties(W,Im);Object.defineProperty($m,"isAxiosError",{value:!0});W.from=(e,t,n,r,i,o)=>{const l=Object.create($m);return j.toFlatObject(e,l,function(s){return s!==Error.prototype},a=>a!=="isAxiosError"),W.call(l,e.message,t,n,r,i),l.cause=e,l.name=e.name,o&&Object.assign(l,o),l};const tx=null;function Qs(e){return j.isPlainObject(e)||j.isArray(e)}function Am(e){return j.endsWith(e,"[]")?e.slice(0,-2):e}function of(e,t,n){return e?e.concat(t).map(function(i,o){return i=Am(i),!n&&o?"["+i+"]":i}).join(n?".":""):t}function nx(e){return j.isArray(e)&&!e.some(Qs)}const rx=j.toFlatObject(j,{},null,function(t){return/^is[A-Z]/.test(t)});function Dl(e,t,n){if(!j.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=j.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(y,S){return!j.isUndefined(S[y])});const r=n.metaTokens,i=n.visitor||f,o=n.dots,l=n.indexes,s=(n.Blob||typeof Blob<"u"&&Blob)&&j.isSpecCompliantForm(t);if(!j.isFunction(i))throw new TypeError("visitor must be a function");function u(m){if(m===null)return"";if(j.isDate(m))return m.toISOString();if(!s&&j.isBlob(m))throw new W("Blob is not supported. Use a Buffer instead.");return j.isArrayBuffer(m)||j.isTypedArray(m)?s&&typeof Blob=="function"?new Blob([m]):Buffer.from(m):m}function f(m,y,S){let h=m;if(m&&!S&&typeof m=="object"){if(j.endsWith(y,"{}"))y=r?y:y.slice(0,-2),m=JSON.stringify(m);else if(j.isArray(m)&&nx(m)||(j.isFileList(m)||j.endsWith(y,"[]"))&&(h=j.toArray(m)))return y=Am(y),h.forEach(function(g,x){!(j.isUndefined(g)||g===null)&&t.append(l===!0?of([y],x,o):l===null?y:y+"[]",u(g))}),!1}return Qs(m)?!0:(t.append(of(S,y,o),u(m)),!1)}const c=[],v=Object.assign(rx,{defaultVisitor:f,convertValue:u,isVisitable:Qs});function w(m,y){if(!j.isUndefined(m)){if(c.indexOf(m)!==-1)throw Error("Circular reference detected in "+y.join("."));c.push(m),j.forEach(m,function(h,p){(!(j.isUndefined(h)||h===null)&&i.call(t,h,j.isString(p)?p.trim():p,y,v))===!0&&w(h,y?y.concat(p):[p])}),c.pop()}}if(!j.isObject(e))throw new TypeError("data must be an object");return w(e),t}function lf(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function yc(e,t){this._pairs=[],e&&Dl(e,this,t)}const Dm=yc.prototype;Dm.append=function(t,n){this._pairs.push([t,n])};Dm.toString=function(t){const n=t?function(r){return t.call(this,r,lf)}:lf;return this._pairs.map(function(i){return n(i[0])+"="+n(i[1])},"").join("&")};function ix(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Mm(e,t,n){if(!t)return e;const r=n&&n.encode||ix,i=n&&n.serialize;let o;if(i?o=i(t,n):o=j.isURLSearchParams(t)?t.toString():new yc(t,n).toString(r),o){const l=e.indexOf("#");l!==-1&&(e=e.slice(0,l)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class ox{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){j.forEach(this.handlers,function(r){r!==null&&t(r)})}}const af=ox,Fm={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},lx=typeof URLSearchParams<"u"?URLSearchParams:yc,ax=typeof FormData<"u"?FormData:null,sx=typeof Blob<"u"?Blob:null,ux={isBrowser:!0,classes:{URLSearchParams:lx,FormData:ax,Blob:sx},protocols:["http","https","file","blob","url","data"]},Um=typeof window<"u"&&typeof document<"u",cx=(e=>Um&&["ReactNative","NativeScript","NS"].indexOf(e)<0)(typeof navigator<"u"&&navigator.product),dx=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),fx=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Um,hasStandardBrowserEnv:cx,hasStandardBrowserWebWorkerEnv:dx},Symbol.toStringTag,{value:"Module"})),St={...fx,...ux};function px(e,t){return Dl(e,new St.classes.URLSearchParams,Object.assign({visitor:function(n,r,i,o){return St.isNode&&j.isBuffer(n)?(this.append(r,n.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},t))}function hx(e){return j.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function mx(e){const t={},n=Object.keys(e);let r;const i=n.length;let o;for(r=0;r<i;r++)o=n[r],t[o]=e[o];return t}function Bm(e){function t(n,r,i,o){let l=n[o++];const a=Number.isFinite(+l),s=o>=n.length;return l=!l&&j.isArray(i)?i.length:l,s?(j.hasOwnProp(i,l)?i[l]=[i[l],r]:i[l]=r,!a):((!i[l]||!j.isObject(i[l]))&&(i[l]=[]),t(n,r,i[l],o)&&j.isArray(i[l])&&(i[l]=mx(i[l])),!a)}if(j.isFormData(e)&&j.isFunction(e.entries)){const n={};return j.forEachEntry(e,(r,i)=>{t(hx(r),i,n,0)}),n}return null}function gx(e,t,n){if(j.isString(e))try{return(t||JSON.parse)(e),j.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const xc={transitional:Fm,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",i=r.indexOf("application/json")>-1,o=j.isObject(t);if(o&&j.isHTMLForm(t)&&(t=new FormData(t)),j.isFormData(t))return i&&i?JSON.stringify(Bm(t)):t;if(j.isArrayBuffer(t)||j.isBuffer(t)||j.isStream(t)||j.isFile(t)||j.isBlob(t))return t;if(j.isArrayBufferView(t))return t.buffer;if(j.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let a;if(o){if(r.indexOf("application/x-www-form-urlencoded")>-1)return px(t,this.formSerializer).toString();if((a=j.isFileList(t))||r.indexOf("multipart/form-data")>-1){const s=this.env&&this.env.FormData;return Dl(a?{"files[]":t}:t,s&&new s,this.formSerializer)}}return o||i?(n.setContentType("application/json",!1),gx(t)):t}],transformResponse:[function(t){const n=this.transitional||xc.transitional,r=n&&n.forcedJSONParsing,i=this.responseType==="json";if(t&&j.isString(t)&&(r&&!this.responseType||i)){const l=!(n&&n.silentJSONParsing)&&i;try{return JSON.parse(t)}catch(a){if(l)throw a.name==="SyntaxError"?W.from(a,W.ERR_BAD_RESPONSE,this,null,this.response):a}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:St.classes.FormData,Blob:St.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};j.forEach(["delete","get","head","post","put","patch"],e=>{xc.headers[e]={}});const wc=xc,vx=j.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),yx=e=>{const t={};let n,r,i;return e&&e.split(`
`).forEach(function(l){i=l.indexOf(":"),n=l.substring(0,i).trim().toLowerCase(),r=l.substring(i+1).trim(),!(!n||t[n]&&vx[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},sf=Symbol("internals");function Dr(e){return e&&String(e).trim().toLowerCase()}function Oo(e){return e===!1||e==null?e:j.isArray(e)?e.map(Oo):String(e)}function xx(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const wx=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function Ra(e,t,n,r,i){if(j.isFunction(r))return r.call(this,t,n);if(i&&(t=n),!!j.isString(t)){if(j.isString(r))return t.indexOf(r)!==-1;if(j.isRegExp(r))return r.test(t)}}function Sx(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function kx(e,t){const n=j.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(i,o,l){return this[r].call(this,t,i,o,l)},configurable:!0})})}class Ml{constructor(t){t&&this.set(t)}set(t,n,r){const i=this;function o(a,s,u){const f=Dr(s);if(!f)throw new Error("header name must be a non-empty string");const c=j.findKey(i,f);(!c||i[c]===void 0||u===!0||u===void 0&&i[c]!==!1)&&(i[c||s]=Oo(a))}const l=(a,s)=>j.forEach(a,(u,f)=>o(u,f,s));return j.isPlainObject(t)||t instanceof this.constructor?l(t,n):j.isString(t)&&(t=t.trim())&&!wx(t)?l(yx(t),n):t!=null&&o(n,t,r),this}get(t,n){if(t=Dr(t),t){const r=j.findKey(this,t);if(r){const i=this[r];if(!n)return i;if(n===!0)return xx(i);if(j.isFunction(n))return n.call(this,i,r);if(j.isRegExp(n))return n.exec(i);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=Dr(t),t){const r=j.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||Ra(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let i=!1;function o(l){if(l=Dr(l),l){const a=j.findKey(r,l);a&&(!n||Ra(r,r[a],a,n))&&(delete r[a],i=!0)}}return j.isArray(t)?t.forEach(o):o(t),i}clear(t){const n=Object.keys(this);let r=n.length,i=!1;for(;r--;){const o=n[r];(!t||Ra(this,this[o],o,t,!0))&&(delete this[o],i=!0)}return i}normalize(t){const n=this,r={};return j.forEach(this,(i,o)=>{const l=j.findKey(r,o);if(l){n[l]=Oo(i),delete n[o];return}const a=t?Sx(o):String(o).trim();a!==o&&delete n[o],n[a]=Oo(i),r[a]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return j.forEach(this,(r,i)=>{r!=null&&r!==!1&&(n[i]=t&&j.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(i=>r.set(i)),r}static accessor(t){const r=(this[sf]=this[sf]={accessors:{}}).accessors,i=this.prototype;function o(l){const a=Dr(l);r[a]||(kx(i,l),r[a]=!0)}return j.isArray(t)?t.forEach(o):o(t),this}}Ml.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);j.reduceDescriptors(Ml.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});j.freezeMethods(Ml);const Lt=Ml;function Ta(e,t){const n=this||wc,r=t||n,i=Lt.from(r.headers);let o=r.data;return j.forEach(e,function(a){o=a.call(n,o,i.normalize(),t?t.status:void 0)}),i.normalize(),o}function Hm(e){return!!(e&&e.__CANCEL__)}function Ni(e,t,n){W.call(this,e??"canceled",W.ERR_CANCELED,t,n),this.name="CanceledError"}j.inherits(Ni,W,{__CANCEL__:!0});function Ox(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new W("Request failed with status code "+n.status,[W.ERR_BAD_REQUEST,W.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const Cx=St.hasStandardBrowserEnv?{write(e,t,n,r,i,o){const l=[e+"="+encodeURIComponent(t)];j.isNumber(n)&&l.push("expires="+new Date(n).toGMTString()),j.isString(r)&&l.push("path="+r),j.isString(i)&&l.push("domain="+i),o===!0&&l.push("secure"),document.cookie=l.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function _x(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function Ex(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function Wm(e,t){return e&&!_x(t)?Ex(e,t):t}const jx=St.hasStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function i(o){let l=o;return t&&(n.setAttribute("href",l),l=n.href),n.setAttribute("href",l),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=i(window.location.href),function(l){const a=j.isString(l)?i(l):l;return a.protocol===r.protocol&&a.host===r.host}}():function(){return function(){return!0}}();function bx(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function Px(e,t){e=e||10;const n=new Array(e),r=new Array(e);let i=0,o=0,l;return t=t!==void 0?t:1e3,function(s){const u=Date.now(),f=r[o];l||(l=u),n[i]=s,r[i]=u;let c=o,v=0;for(;c!==i;)v+=n[c++],c=c%e;if(i=(i+1)%e,i===o&&(o=(o+1)%e),u-l<t)return;const w=f&&u-f;return w?Math.round(v*1e3/w):void 0}}function uf(e,t){let n=0;const r=Px(50,250);return i=>{const o=i.loaded,l=i.lengthComputable?i.total:void 0,a=o-n,s=r(a),u=o<=l;n=o;const f={loaded:o,total:l,progress:l?o/l:void 0,bytes:a,rate:s||void 0,estimated:s&&l&&u?(l-o)/s:void 0,event:i};f[t?"download":"upload"]=!0,e(f)}}const Rx=typeof XMLHttpRequest<"u",Tx=Rx&&function(e){return new Promise(function(n,r){let i=e.data;const o=Lt.from(e.headers).normalize();let{responseType:l,withXSRFToken:a}=e,s;function u(){e.cancelToken&&e.cancelToken.unsubscribe(s),e.signal&&e.signal.removeEventListener("abort",s)}let f;if(j.isFormData(i)){if(St.hasStandardBrowserEnv||St.hasStandardBrowserWebWorkerEnv)o.setContentType(!1);else if((f=o.getContentType())!==!1){const[y,...S]=f?f.split(";").map(h=>h.trim()).filter(Boolean):[];o.setContentType([y||"multipart/form-data",...S].join("; "))}}let c=new XMLHttpRequest;if(e.auth){const y=e.auth.username||"",S=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.set("Authorization","Basic "+btoa(y+":"+S))}const v=Wm(e.baseURL,e.url);c.open(e.method.toUpperCase(),Mm(v,e.params,e.paramsSerializer),!0),c.timeout=e.timeout;function w(){if(!c)return;const y=Lt.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders()),h={data:!l||l==="text"||l==="json"?c.responseText:c.response,status:c.status,statusText:c.statusText,headers:y,config:e,request:c};Ox(function(g){n(g),u()},function(g){r(g),u()},h),c=null}if("onloadend"in c?c.onloadend=w:c.onreadystatechange=function(){!c||c.readyState!==4||c.status===0&&!(c.responseURL&&c.responseURL.indexOf("file:")===0)||setTimeout(w)},c.onabort=function(){c&&(r(new W("Request aborted",W.ECONNABORTED,e,c)),c=null)},c.onerror=function(){r(new W("Network Error",W.ERR_NETWORK,e,c)),c=null},c.ontimeout=function(){let S=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const h=e.transitional||Fm;e.timeoutErrorMessage&&(S=e.timeoutErrorMessage),r(new W(S,h.clarifyTimeoutError?W.ETIMEDOUT:W.ECONNABORTED,e,c)),c=null},St.hasStandardBrowserEnv&&(a&&j.isFunction(a)&&(a=a(e)),a||a!==!1&&jx(v))){const y=e.xsrfHeaderName&&e.xsrfCookieName&&Cx.read(e.xsrfCookieName);y&&o.set(e.xsrfHeaderName,y)}i===void 0&&o.setContentType(null),"setRequestHeader"in c&&j.forEach(o.toJSON(),function(S,h){c.setRequestHeader(h,S)}),j.isUndefined(e.withCredentials)||(c.withCredentials=!!e.withCredentials),l&&l!=="json"&&(c.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&c.addEventListener("progress",uf(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&c.upload&&c.upload.addEventListener("progress",uf(e.onUploadProgress)),(e.cancelToken||e.signal)&&(s=y=>{c&&(r(!y||y.type?new Ni(null,e,c):y),c.abort(),c=null)},e.cancelToken&&e.cancelToken.subscribe(s),e.signal&&(e.signal.aborted?s():e.signal.addEventListener("abort",s)));const m=bx(v);if(m&&St.protocols.indexOf(m)===-1){r(new W("Unsupported protocol "+m+":",W.ERR_BAD_REQUEST,e));return}c.send(i||null)})},Ks={http:tx,xhr:Tx};j.forEach(Ks,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const cf=e=>`- ${e}`,Lx=e=>j.isFunction(e)||e===null||e===!1,Vm={getAdapter:e=>{e=j.isArray(e)?e:[e];const{length:t}=e;let n,r;const i={};for(let o=0;o<t;o++){n=e[o];let l;if(r=n,!Lx(n)&&(r=Ks[(l=String(n)).toLowerCase()],r===void 0))throw new W(`Unknown adapter '${l}'`);if(r)break;i[l||"#"+o]=r}if(!r){const o=Object.entries(i).map(([a,s])=>`adapter ${a} `+(s===!1?"is not supported by the environment":"is not available in the build"));let l=t?o.length>1?`since :
`+o.map(cf).join(`
`):" "+cf(o[0]):"as no adapter specified";throw new W("There is no suitable adapter to dispatch the request "+l,"ERR_NOT_SUPPORT")}return r},adapters:Ks};function La(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new Ni(null,e)}function df(e){return La(e),e.headers=Lt.from(e.headers),e.data=Ta.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),Vm.getAdapter(e.adapter||wc.adapter)(e).then(function(r){return La(e),r.data=Ta.call(e,e.transformResponse,r),r.headers=Lt.from(r.headers),r},function(r){return Hm(r)||(La(e),r&&r.response&&(r.response.data=Ta.call(e,e.transformResponse,r.response),r.response.headers=Lt.from(r.response.headers))),Promise.reject(r)})}const ff=e=>e instanceof Lt?e.toJSON():e;function Sr(e,t){t=t||{};const n={};function r(u,f,c){return j.isPlainObject(u)&&j.isPlainObject(f)?j.merge.call({caseless:c},u,f):j.isPlainObject(f)?j.merge({},f):j.isArray(f)?f.slice():f}function i(u,f,c){if(j.isUndefined(f)){if(!j.isUndefined(u))return r(void 0,u,c)}else return r(u,f,c)}function o(u,f){if(!j.isUndefined(f))return r(void 0,f)}function l(u,f){if(j.isUndefined(f)){if(!j.isUndefined(u))return r(void 0,u)}else return r(void 0,f)}function a(u,f,c){if(c in t)return r(u,f);if(c in e)return r(void 0,u)}const s={url:o,method:o,data:o,baseURL:l,transformRequest:l,transformResponse:l,paramsSerializer:l,timeout:l,timeoutMessage:l,withCredentials:l,withXSRFToken:l,adapter:l,responseType:l,xsrfCookieName:l,xsrfHeaderName:l,onUploadProgress:l,onDownloadProgress:l,decompress:l,maxContentLength:l,maxBodyLength:l,beforeRedirect:l,transport:l,httpAgent:l,httpsAgent:l,cancelToken:l,socketPath:l,responseEncoding:l,validateStatus:a,headers:(u,f)=>i(ff(u),ff(f),!0)};return j.forEach(Object.keys(Object.assign({},e,t)),function(f){const c=s[f]||i,v=c(e[f],t[f],f);j.isUndefined(v)&&c!==a||(n[f]=v)}),n}const qm="1.6.2",Sc={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{Sc[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const pf={};Sc.transitional=function(t,n,r){function i(o,l){return"[Axios v"+qm+"] Transitional option '"+o+"'"+l+(r?". "+r:"")}return(o,l,a)=>{if(t===!1)throw new W(i(l," has been removed"+(n?" in "+n:"")),W.ERR_DEPRECATED);return n&&!pf[l]&&(pf[l]=!0,console.warn(i(l," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(o,l,a):!0}};function Nx(e,t,n){if(typeof e!="object")throw new W("options must be an object",W.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let i=r.length;for(;i-- >0;){const o=r[i],l=t[o];if(l){const a=e[o],s=a===void 0||l(a,o,e);if(s!==!0)throw new W("option "+o+" must be "+s,W.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new W("Unknown option "+o,W.ERR_BAD_OPTION)}}const Gs={assertOptions:Nx,validators:Sc},Ut=Gs.validators;class Jo{constructor(t){this.defaults=t,this.interceptors={request:new af,response:new af}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=Sr(this.defaults,n);const{transitional:r,paramsSerializer:i,headers:o}=n;r!==void 0&&Gs.assertOptions(r,{silentJSONParsing:Ut.transitional(Ut.boolean),forcedJSONParsing:Ut.transitional(Ut.boolean),clarifyTimeoutError:Ut.transitional(Ut.boolean)},!1),i!=null&&(j.isFunction(i)?n.paramsSerializer={serialize:i}:Gs.assertOptions(i,{encode:Ut.function,serialize:Ut.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let l=o&&j.merge(o.common,o[n.method]);o&&j.forEach(["delete","get","head","post","put","patch","common"],m=>{delete o[m]}),n.headers=Lt.concat(l,o);const a=[];let s=!0;this.interceptors.request.forEach(function(y){typeof y.runWhen=="function"&&y.runWhen(n)===!1||(s=s&&y.synchronous,a.unshift(y.fulfilled,y.rejected))});const u=[];this.interceptors.response.forEach(function(y){u.push(y.fulfilled,y.rejected)});let f,c=0,v;if(!s){const m=[df.bind(this),void 0];for(m.unshift.apply(m,a),m.push.apply(m,u),v=m.length,f=Promise.resolve(n);c<v;)f=f.then(m[c++],m[c++]);return f}v=a.length;let w=n;for(c=0;c<v;){const m=a[c++],y=a[c++];try{w=m(w)}catch(S){y.call(this,S);break}}try{f=df.call(this,w)}catch(m){return Promise.reject(m)}for(c=0,v=u.length;c<v;)f=f.then(u[c++],u[c++]);return f}getUri(t){t=Sr(this.defaults,t);const n=Wm(t.baseURL,t.url);return Mm(n,t.params,t.paramsSerializer)}}j.forEach(["delete","get","head","options"],function(t){Jo.prototype[t]=function(n,r){return this.request(Sr(r||{},{method:t,url:n,data:(r||{}).data}))}});j.forEach(["post","put","patch"],function(t){function n(r){return function(o,l,a){return this.request(Sr(a||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:o,data:l}))}}Jo.prototype[t]=n(),Jo.prototype[t+"Form"]=n(!0)});const Co=Jo;class kc{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(o){n=o});const r=this;this.promise.then(i=>{if(!r._listeners)return;let o=r._listeners.length;for(;o-- >0;)r._listeners[o](i);r._listeners=null}),this.promise.then=i=>{let o;const l=new Promise(a=>{r.subscribe(a),o=a}).then(i);return l.cancel=function(){r.unsubscribe(o)},l},t(function(o,l,a){r.reason||(r.reason=new Ni(o,l,a),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new kc(function(i){t=i}),cancel:t}}}const zx=kc;function $x(e){return function(n){return e.apply(null,n)}}function Ix(e){return j.isObject(e)&&e.isAxiosError===!0}const Ys={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Ys).forEach(([e,t])=>{Ys[t]=e});const Ax=Ys;function Qm(e){const t=new Co(e),n=jm(Co.prototype.request,t);return j.extend(n,Co.prototype,t,{allOwnKeys:!0}),j.extend(n,t,null,{allOwnKeys:!0}),n.create=function(i){return Qm(Sr(e,i))},n}const pe=Qm(wc);pe.Axios=Co;pe.CanceledError=Ni;pe.CancelToken=zx;pe.isCancel=Hm;pe.VERSION=qm;pe.toFormData=Dl;pe.AxiosError=W;pe.Cancel=pe.CanceledError;pe.all=function(t){return Promise.all(t)};pe.spread=$x;pe.isAxiosError=Ix;pe.mergeConfig=Sr;pe.AxiosHeaders=Lt;pe.formToJSON=e=>Bm(j.isHTMLForm(e)?new FormData(e):e);pe.getAdapter=Vm.getAdapter;pe.HttpStatusCode=Ax;pe.default=pe;const Dx=pe,Ne=Dx.create({baseURL:"https://api-food-explorer-k28p.onrender.com"}),Km=C.createContext({});function Mx({children:e}){const[t,n]=C.useState({});async function r({email:o,password:l}){try{const a=await Ne.post("/sessions",{email:o,password:l}),{user:s,token:u}=a.data;localStorage.setItem("@foodEplorer:user",JSON.stringify(s)),localStorage.setItem("@foodEplorer:token",u),Ne.defaults.headers.common.Authorization=`Bearer ${u}`,n({user:s,token:u})}catch(a){a.response?alert(a.response.data.message):alert("Não foi possivel entrar")}}function i(){localStorage.removeItem("@foodEplorer:user"),localStorage.removeItem("@foodEplorer:token"),n({})}return C.useEffect(()=>{const o=localStorage.getItem("@foodEplorer:token"),l=localStorage.getItem("@foodEplorer:user");o&&l&&(Ne.defaults.headers.common.Authorization=`Bearer ${o}`,n({token:o,user:JSON.parse(l)}))},[]),d.jsx(Km.Provider,{value:{signIn:r,singOut:i,user:t.user},children:e})}function Pr(){return C.useContext(Km)}/**
 * @remix-run/router v1.14.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ki(){return ki=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ki.apply(this,arguments)}var Yt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Yt||(Yt={}));const hf="popstate";function Fx(e){e===void 0&&(e={});function t(i,o){let{pathname:l="/",search:a="",hash:s=""}=An(i.location.hash.substr(1));return!l.startsWith("/")&&!l.startsWith(".")&&(l="/"+l),Xs("",{pathname:l,search:a,hash:s},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(i,o){let l=i.document.querySelector("base"),a="";if(l&&l.getAttribute("href")){let s=i.location.href,u=s.indexOf("#");a=u===-1?s:s.slice(0,u)}return a+"#"+(typeof o=="string"?o:Zo(o))}function r(i,o){Fl(i.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(o)+")")}return Bx(t,n,r,e)}function fe(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Fl(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Ux(){return Math.random().toString(36).substr(2,8)}function mf(e,t){return{usr:e.state,key:e.key,idx:t}}function Xs(e,t,n,r){return n===void 0&&(n=null),ki({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?An(t):t,{state:n,key:t&&t.key||r||Ux()})}function Zo(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function An(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Bx(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,l=i.history,a=Yt.Pop,s=null,u=f();u==null&&(u=0,l.replaceState(ki({},l.state,{idx:u}),""));function f(){return(l.state||{idx:null}).idx}function c(){a=Yt.Pop;let S=f(),h=S==null?null:S-u;u=S,s&&s({action:a,location:y.location,delta:h})}function v(S,h){a=Yt.Push;let p=Xs(y.location,S,h);n&&n(p,S),u=f()+1;let g=mf(p,u),x=y.createHref(p);try{l.pushState(g,"",x)}catch(O){if(O instanceof DOMException&&O.name==="DataCloneError")throw O;i.location.assign(x)}o&&s&&s({action:a,location:y.location,delta:1})}function w(S,h){a=Yt.Replace;let p=Xs(y.location,S,h);n&&n(p,S),u=f();let g=mf(p,u),x=y.createHref(p);l.replaceState(g,"",x),o&&s&&s({action:a,location:y.location,delta:0})}function m(S){let h=i.location.origin!=="null"?i.location.origin:i.location.href,p=typeof S=="string"?S:Zo(S);return fe(h,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,h)}let y={get action(){return a},get location(){return e(i,l)},listen(S){if(s)throw new Error("A history only accepts one active listener");return i.addEventListener(hf,c),s=S,()=>{i.removeEventListener(hf,c),s=null}},createHref(S){return t(i,S)},createURL:m,encodeLocation(S){let h=m(S);return{pathname:h.pathname,search:h.search,hash:h.hash}},push:v,replace:w,go(S){return l.go(S)}};return y}var gf;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(gf||(gf={}));function Hx(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?An(t):t,i=Oc(r.pathname||"/",n);if(i==null)return null;let o=Gm(e);Wx(o);let l=null;for(let a=0;l==null&&a<o.length;++a)l=Zx(o[a],nw(i));return l}function Gm(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,l,a)=>{let s={relativePath:a===void 0?o.path||"":a,caseSensitive:o.caseSensitive===!0,childrenIndex:l,route:o};s.relativePath.startsWith("/")&&(fe(s.relativePath.startsWith(r),'Absolute route path "'+s.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),s.relativePath=s.relativePath.slice(r.length));let u=an([r,s.relativePath]),f=n.concat(s);o.children&&o.children.length>0&&(fe(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Gm(o.children,t,f,u)),!(o.path==null&&!o.index)&&t.push({path:u,score:Xx(u,o.index),routesMeta:f})};return e.forEach((o,l)=>{var a;if(o.path===""||!((a=o.path)!=null&&a.includes("?")))i(o,l);else for(let s of Ym(o.path))i(o,l,s)}),t}function Ym(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let l=Ym(r.join("/")),a=[];return a.push(...l.map(s=>s===""?o:[o,s].join("/"))),i&&a.push(...l),a.map(s=>e.startsWith("/")&&s===""?"/":s)}function Wx(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Jx(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Vx=/^:\w+$/,qx=3,Qx=2,Kx=1,Gx=10,Yx=-2,vf=e=>e==="*";function Xx(e,t){let n=e.split("/"),r=n.length;return n.some(vf)&&(r+=Yx),t&&(r+=Qx),n.filter(i=>!vf(i)).reduce((i,o)=>i+(Vx.test(o)?qx:o===""?Kx:Gx),r)}function Jx(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function Zx(e,t){let{routesMeta:n}=e,r={},i="/",o=[];for(let l=0;l<n.length;++l){let a=n[l],s=l===n.length-1,u=i==="/"?t:t.slice(i.length)||"/",f=ew({path:a.relativePath,caseSensitive:a.caseSensitive,end:s},u);if(!f)return null;Object.assign(r,f.params);let c=a.route;o.push({params:r,pathname:an([i,f.pathname]),pathnameBase:aw(an([i,f.pathnameBase])),route:c}),f.pathnameBase!=="/"&&(i=an([i,f.pathnameBase]))}return o}function ew(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=tw(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],l=o.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,f,c)=>{let{paramName:v,isOptional:w}=f;if(v==="*"){let y=a[c]||"";l=o.slice(0,o.length-y.length).replace(/(.)\/+$/,"$1")}const m=a[c];return w&&!m?u[v]=void 0:u[v]=rw(m||"",v),u},{}),pathname:o,pathnameBase:l,pattern:e}}function tw(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Fl(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:(\w+)(\?)?/g,(l,a,s)=>(r.push({paramName:a,isOptional:s!=null}),s?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function nw(e){try{return decodeURI(e)}catch(t){return Fl(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function rw(e,t){try{return decodeURIComponent(e)}catch(n){return Fl(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function Oc(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function iw(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?An(e):e;return{pathname:n?n.startsWith("/")?n:ow(n,t):t,search:sw(r),hash:uw(i)}}function ow(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Na(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function lw(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Xm(e,t){let n=lw(e);return t?n.map((r,i)=>i===e.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Jm(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=An(e):(i=ki({},e),fe(!i.pathname||!i.pathname.includes("?"),Na("?","pathname","search",i)),fe(!i.pathname||!i.pathname.includes("#"),Na("#","pathname","hash",i)),fe(!i.search||!i.search.includes("#"),Na("#","search","hash",i)));let o=e===""||i.pathname==="",l=o?"/":i.pathname,a;if(l==null)a=n;else{let c=t.length-1;if(!r&&l.startsWith("..")){let v=l.split("/");for(;v[0]==="..";)v.shift(),c-=1;i.pathname=v.join("/")}a=c>=0?t[c]:"/"}let s=iw(i,a),u=l&&l!=="/"&&l.endsWith("/"),f=(o||l===".")&&n.endsWith("/");return!s.pathname.endsWith("/")&&(u||f)&&(s.pathname+="/"),s}const an=e=>e.join("/").replace(/\/\/+/g,"/"),aw=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),sw=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,uw=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function cw(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Zm=["post","put","patch","delete"];new Set(Zm);const dw=["get",...Zm];new Set(dw);/**
 * React Router v6.21.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Oi(){return Oi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Oi.apply(this,arguments)}const Cc=C.createContext(null),fw=C.createContext(null),Dn=C.createContext(null),Ul=C.createContext(null),hn=C.createContext({outlet:null,matches:[],isDataRoute:!1}),eg=C.createContext(null);function pw(e,t){let{relative:n}=t===void 0?{}:t;zi()||fe(!1);let{basename:r,navigator:i}=C.useContext(Dn),{hash:o,pathname:l,search:a}=ng(e,{relative:n}),s=l;return r!=="/"&&(s=l==="/"?r:an([r,l])),i.createHref({pathname:s,search:a,hash:o})}function zi(){return C.useContext(Ul)!=null}function Bl(){return zi()||fe(!1),C.useContext(Ul).location}function tg(e){C.useContext(Dn).static||C.useLayoutEffect(e)}function mn(){let{isDataRoute:e}=C.useContext(hn);return e?Ew():hw()}function hw(){zi()||fe(!1);let e=C.useContext(Cc),{basename:t,future:n,navigator:r}=C.useContext(Dn),{matches:i}=C.useContext(hn),{pathname:o}=Bl(),l=JSON.stringify(Xm(i,n.v7_relativeSplatPath)),a=C.useRef(!1);return tg(()=>{a.current=!0}),C.useCallback(function(u,f){if(f===void 0&&(f={}),!a.current)return;if(typeof u=="number"){r.go(u);return}let c=Jm(u,JSON.parse(l),o,f.relative==="path");e==null&&t!=="/"&&(c.pathname=c.pathname==="/"?t:an([t,c.pathname])),(f.replace?r.replace:r.push)(c,f.state,f)},[t,r,l,o,e])}function _c(){let{matches:e}=C.useContext(hn),t=e[e.length-1];return t?t.params:{}}function ng(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=C.useContext(Dn),{matches:i}=C.useContext(hn),{pathname:o}=Bl(),l=JSON.stringify(Xm(i,r.v7_relativeSplatPath));return C.useMemo(()=>Jm(e,JSON.parse(l),o,n==="path"),[e,l,o,n])}function mw(e,t){return gw(e,t)}function gw(e,t,n,r){zi()||fe(!1);let{navigator:i}=C.useContext(Dn),{matches:o}=C.useContext(hn),l=o[o.length-1],a=l?l.params:{};l&&l.pathname;let s=l?l.pathnameBase:"/";l&&l.route;let u=Bl(),f;if(t){var c;let S=typeof t=="string"?An(t):t;s==="/"||(c=S.pathname)!=null&&c.startsWith(s)||fe(!1),f=S}else f=u;let v=f.pathname||"/",w=s==="/"?v:v.slice(s.length)||"/",m=Hx(e,{pathname:w}),y=Sw(m&&m.map(S=>Object.assign({},S,{params:Object.assign({},a,S.params),pathname:an([s,i.encodeLocation?i.encodeLocation(S.pathname).pathname:S.pathname]),pathnameBase:S.pathnameBase==="/"?s:an([s,i.encodeLocation?i.encodeLocation(S.pathnameBase).pathname:S.pathnameBase])})),o,n,r);return t&&y?C.createElement(Ul.Provider,{value:{location:Oi({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:Yt.Pop}},y):y}function vw(){let e=_w(),t=cw(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},o=null;return C.createElement(C.Fragment,null,C.createElement("h2",null,"Unexpected Application Error!"),C.createElement("h3",{style:{fontStyle:"italic"}},t),n?C.createElement("pre",{style:i},n):null,o)}const yw=C.createElement(vw,null);class xw extends C.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?C.createElement(hn.Provider,{value:this.props.routeContext},C.createElement(eg.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function ww(e){let{routeContext:t,match:n,children:r}=e,i=C.useContext(Cc);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),C.createElement(hn.Provider,{value:t},r)}function Sw(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var o;if((o=n)!=null&&o.errors)e=n.matches;else return null}let l=e,a=(i=n)==null?void 0:i.errors;if(a!=null){let f=l.findIndex(c=>c.route.id&&(a==null?void 0:a[c.route.id]));f>=0||fe(!1),l=l.slice(0,Math.min(l.length,f+1))}let s=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let f=0;f<l.length;f++){let c=l[f];if((c.route.HydrateFallback||c.route.hydrateFallbackElement)&&(u=f),c.route.id){let{loaderData:v,errors:w}=n,m=c.route.loader&&v[c.route.id]===void 0&&(!w||w[c.route.id]===void 0);if(c.route.lazy||m){s=!0,u>=0?l=l.slice(0,u+1):l=[l[0]];break}}}return l.reduceRight((f,c,v)=>{let w,m=!1,y=null,S=null;n&&(w=a&&c.route.id?a[c.route.id]:void 0,y=c.route.errorElement||yw,s&&(u<0&&v===0?(jw("route-fallback",!1),m=!0,S=null):u===v&&(m=!0,S=c.route.hydrateFallbackElement||null)));let h=t.concat(l.slice(0,v+1)),p=()=>{let g;return w?g=y:m?g=S:c.route.Component?g=C.createElement(c.route.Component,null):c.route.element?g=c.route.element:g=f,C.createElement(ww,{match:c,routeContext:{outlet:f,matches:h,isDataRoute:n!=null},children:g})};return n&&(c.route.ErrorBoundary||c.route.errorElement||v===0)?C.createElement(xw,{location:n.location,revalidation:n.revalidation,component:y,error:w,children:p(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):p()},null)}var rg=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(rg||{}),el=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(el||{});function kw(e){let t=C.useContext(Cc);return t||fe(!1),t}function Ow(e){let t=C.useContext(fw);return t||fe(!1),t}function Cw(e){let t=C.useContext(hn);return t||fe(!1),t}function ig(e){let t=Cw(),n=t.matches[t.matches.length-1];return n.route.id||fe(!1),n.route.id}function _w(){var e;let t=C.useContext(eg),n=Ow(el.UseRouteError),r=ig(el.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function Ew(){let{router:e}=kw(rg.UseNavigateStable),t=ig(el.UseNavigateStable),n=C.useRef(!1);return tg(()=>{n.current=!0}),C.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,Oi({fromRouteId:t},o)))},[e,t])}const yf={};function jw(e,t,n){!t&&!yf[e]&&(yf[e]=!0)}function ct(e){fe(!1)}function bw(e){let{basename:t="/",children:n=null,location:r,navigationType:i=Yt.Pop,navigator:o,static:l=!1,future:a}=e;zi()&&fe(!1);let s=t.replace(/^\/*/,"/"),u=C.useMemo(()=>({basename:s,navigator:o,static:l,future:Oi({v7_relativeSplatPath:!1},a)}),[s,a,o,l]);typeof r=="string"&&(r=An(r));let{pathname:f="/",search:c="",hash:v="",state:w=null,key:m="default"}=r,y=C.useMemo(()=>{let S=Oc(f,s);return S==null?null:{location:{pathname:S,search:c,hash:v,state:w,key:m},navigationType:i}},[s,f,c,v,w,m,i]);return y==null?null:C.createElement(Dn.Provider,{value:u},C.createElement(Ul.Provider,{children:n,value:y}))}function Ec(e){let{children:t,location:n}=e;return mw(Js(t),n)}new Promise(()=>{});function Js(e,t){t===void 0&&(t=[]);let n=[];return C.Children.forEach(e,(r,i)=>{if(!C.isValidElement(r))return;let o=[...t,i];if(r.type===C.Fragment){n.push.apply(n,Js(r.props.children,o));return}r.type!==ct&&fe(!1),!r.props.index||!r.props.children||fe(!1);let l={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(l.children=Js(r.props.children,o)),n.push(l)}),n}/**
 * React Router DOM v6.21.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Zs(){return Zs=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Zs.apply(this,arguments)}function Pw(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function Rw(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Tw(e,t){return e.button===0&&(!t||t==="_self")&&!Rw(e)}const Lw=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],Nw="startTransition",xf=ov[Nw];function zw(e){let{basename:t,children:n,future:r,window:i}=e,o=C.useRef();o.current==null&&(o.current=Fx({window:i,v5Compat:!0}));let l=o.current,[a,s]=C.useState({action:l.action,location:l.location}),{v7_startTransition:u}=r||{},f=C.useCallback(c=>{u&&xf?xf(()=>s(c)):s(c)},[s,u]);return C.useLayoutEffect(()=>l.listen(f),[l,f]),C.createElement(bw,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:l,future:r})}const $w=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Iw=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,we=C.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:o,replace:l,state:a,target:s,to:u,preventScrollReset:f,unstable_viewTransition:c}=t,v=Pw(t,Lw),{basename:w}=C.useContext(Dn),m,y=!1;if(typeof u=="string"&&Iw.test(u)&&(m=u,$w))try{let g=new URL(window.location.href),x=u.startsWith("//")?new URL(g.protocol+u):new URL(u),O=Oc(x.pathname,w);x.origin===g.origin&&O!=null?u=O+x.search+x.hash:y=!0}catch{}let S=pw(u,{relative:i}),h=Aw(u,{replace:l,state:a,target:s,preventScrollReset:f,relative:i,unstable_viewTransition:c});function p(g){r&&r(g),g.defaultPrevented||h(g)}return C.createElement("a",Zs({},v,{href:m||S,onClick:y||o?r:p,ref:n,target:s}))});var wf;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(wf||(wf={}));var Sf;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Sf||(Sf={}));function Aw(e,t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:l,unstable_viewTransition:a}=t===void 0?{}:t,s=mn(),u=Bl(),f=ng(e,{relative:l});return C.useCallback(c=>{if(Tw(c,n)){c.preventDefault();let v=r!==void 0?r:Zo(u)===Zo(f);s(e,{replace:v,state:i,preventScrollReset:o,relative:l,unstable_viewTransition:a})}},[u,s,f,r,i,n,e,o,l,a])}const Dw=ae.div`
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
`,Mw=ae.div`

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







`;function sn({id:e,label:t,title:n,...r}){return d.jsx(Mw,{children:d.jsxs("div",{children:[d.jsx("label",{htmlFor:e,children:t}),d.jsx("input",{id:e,...r})]})})}const Fw=ae.footer`

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






`,Uw="/Food_explorer-Front/assets/polygon-Footer-23283810.svg";function gn(){return d.jsxs(Fw,{children:[d.jsxs("div",{children:[d.jsx("img",{src:Uw,alt:"Imagem do poligono do footer"}),d.jsx("p",{children:"food explorer"})]}),d.jsx("a",{href:"#",children:"© 2023 - Todos os direitos reservados."})]})}const Hl="/Food_explorer-Front/assets/search-774109cb.svg",jc="/Food_explorer-Front/assets/close-ddbe68ba.svg";function Bw(){const{singOut:e}=Pr(),t=mn(),[n,r]=C.useState(""),[i,o]=C.useState([]),[l,a]=C.useState(null),s=async()=>{try{const f=await Ne.get(`/foods?term=${n}`);o(f.data),a(null)}catch(f){console.error("Erro ao realizar a pesquisa:",f),o([]),a("Nenhum resultado encontrado.")}},u=f=>{t(`/food/${f}`)};return C.useEffect(()=>{n.trim()!==""?s():(o([]),a(null))},[n]),d.jsxs(Dw,{children:[d.jsxs("header",{children:[d.jsx(we,{to:"/",children:d.jsx("img",{src:jc,alt:"Imagem para fechar Menu"})}),d.jsx("p",{children:"Menu"})]}),d.jsxs("main",{children:[d.jsxs("div",{className:"search",children:[d.jsx("img",{src:Hl,alt:"Imagem de lupa de pesquisa"}),d.jsx(sn,{placeholder:"Busque por pratos ou ingredientes",onChange:f=>r(f.target.value)})]}),i.length>0&&d.jsx("ul",{children:i.map(f=>d.jsx("li",{onClick:()=>u(f.id),children:f.title},f.id))}),i.length===0&&n.trim()!==""&&d.jsx("p",{children:l||"Nenhum resultado encontrado."}),d.jsx("div",{className:"logOut",children:d.jsx(we,{to:"/",onClick:e,children:"Sair"})})]}),d.jsx(gn,{})]})}const Hw=ae.div`

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




`,Ww=ae.header`

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





`,Ci="/Food_explorer-Front/assets/polygon-c1785d7c.svg",eu="/Food_explorer-Front/assets/receipt-a766284f.svg",og="/Food_explorer-Front/assets/logOut-aaa4d896.svg",lg="/Food_explorer-Front/assets/options-4323f487.svg";function ag({totalAmount:e,setTotalAmount:t,onSearch:n}){const{singOut:r}=Pr(),[i,o]=C.useState(""),[l,a]=C.useState([]),s=async()=>{try{if(i.trim()===""){a({refeicoes:[],sobremesas:[],bebidas:[]});return}const u=await Ne.get(`/foods?term=${i}`);a({refeicoes:u.data.filter(f=>f.category==="Refeições"),sobremesas:u.data.filter(f=>f.category==="Sobremesas"),bebidas:u.data.filter(f=>f.category==="Bebidas")}),n(i)}catch(u){console.error("Erro ao realizar a pesquisa:",u)}};return C.useEffect(()=>{s()},[i]),d.jsxs(Ww,{children:[d.jsxs("div",{className:"mobile",children:[d.jsx(we,{to:"/menu",children:d.jsx("img",{src:lg,alt:"Imagem de opções de menu da Home"})}),d.jsx(we,{to:"/",children:d.jsxs("div",{className:"title",children:[d.jsx("img",{src:Ci,alt:"Logo do app"}),d.jsx("h1",{children:"food explorer"})]})}),d.jsx("button",{children:d.jsx("img",{src:eu,alt:"Recibo de pedidos"})}),d.jsx("span",{children:e})]}),d.jsxs("div",{className:"desktop",children:[d.jsx(we,{to:"/",children:d.jsxs("div",{className:"title",children:[d.jsx("img",{src:Ci,alt:"Logo do app"}),d.jsx("h1",{children:"food explorer"})]})}),d.jsx("div",{id:"search",children:d.jsxs("div",{className:"itensSearch",children:[d.jsx("img",{src:Hl,alt:"Imagem de lupa de pesquisa"}),d.jsx(sn,{placeholder:"Busque por pratos ou ingredientes",onChange:u=>o(u.target.value)})]})}),d.jsxs("button",{id:"requests",children:[d.jsx("img",{src:eu,alt:"Recibo de pedidos"}),d.jsxs("p",{children:["Pedidos (",d.jsx("span",{children:e}),")"]})]}),d.jsx(we,{to:"/",onClick:r,id:"LogOut",children:d.jsx("img",{src:og,alt:""})})]})]})}const Vw=ae(we)`

  display: flex;
  width: 100px;
  color: #E1E1E6 ;
  align-items: center;
  font-size: 24px;
  background: none;
  color: white;
  margin-bottom: 25px;

 

  `,qw="/Food_explorer-Front/assets/btnBack-dfff9c68.svg";function Wl(){return d.jsxs(Vw,{to:"/",children:[d.jsx("img",{src:qw,alt:""}),"voltar"]})}const tu="/Food_explorer-Front/assets/less-eaae9b68.svg",nu="/Food_explorer-Front/assets/more-1164edbe.svg";function Qw({onIncludeAmount:e}){const t=_c(),[n,r]=C.useState({avatar:"",title:"",description:"",price:0,ingredients:[]}),[i,o]=C.useState(1);C.useEffect(()=>{Ne.get(`/foods/${t.id}`).then(f=>{const{avatar:c,title:v,description:w,price:m,ingredients:y}=f.data,S=`https://api-food-explorer-k28p.onrender.com/files/${c}`,h=isNaN(parseFloat(m))?0:parseFloat(m);r({avatar:S,title:v,description:w,price:h,ingredients:y})}).catch(f=>{console.error("Erro ao obter dados do produto",f)})},[t.id]);const l=()=>{i>1&&o(f=>f-1)},a=()=>{o(f=>f+1)},s=()=>(n.price*i).toFixed(2),u=()=>{const f=parseFloat(s());e(f)};return d.jsxs(Hw,{children:[d.jsx(ag,{}),d.jsxs("main",{children:[d.jsx(Wl,{}),d.jsxs("div",{className:"detailsFood",children:[d.jsx("img",{id:"imgFood",src:n.avatar,alt:"Imagem do prato"}),d.jsxs("div",{className:"detailsRequest",children:[d.jsxs("div",{className:"recipe",children:[d.jsx("h2",{children:n.title}),d.jsx("p",{id:"description",children:n.description}),d.jsx("section",{children:n.ingredients.map((f,c)=>d.jsx("div",{id:"ingredient",children:f},c))})]}),d.jsxs("div",{className:"order",children:[d.jsxs("div",{className:"quantity",children:[d.jsx("button",{onClick:l,children:d.jsx("img",{src:tu,alt:"Diminuir quantidade"})}),d.jsx("span",{children:String(i).padStart(2,"0")}),d.jsx("button",{onClick:a,children:d.jsx("img",{src:nu,alt:"Aumentar quantidade"})})]}),d.jsxs("button",{id:"request",onClick:u,children:[d.jsx("img",{src:eu,alt:""}),"Pedir R$ ",d.jsx("span",{children:s()})]})]})]})]})]}),d.jsx(gn,{})]})}var sg={},ug={},Vl={},cg={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t={animating:!1,autoplaying:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,dragging:!1,edgeDragged:!1,initialized:!1,lazyLoadedList:[],listHeight:null,listWidth:null,scrolling:!1,slideCount:null,slideHeight:null,slideWidth:null,swipeLeft:null,swiped:!1,swiping:!1,touchObject:{startX:0,startY:0,curX:0,curY:0},trackStyle:{},trackWidth:0,targetSlide:0},n=t;e.default=n})(cg);var Kw="Expected a function",kf=0/0,Gw="[object Symbol]",Yw=/^\s+|\s+$/g,Xw=/^[-+]0x[0-9a-f]+$/i,Jw=/^0b[01]+$/i,Zw=/^0o[0-7]+$/i,eS=parseInt,tS=typeof Ai=="object"&&Ai&&Ai.Object===Object&&Ai,nS=typeof self=="object"&&self&&self.Object===Object&&self,rS=tS||nS||Function("return this")(),iS=Object.prototype,oS=iS.toString,lS=Math.max,aS=Math.min,za=function(){return rS.Date.now()};function sS(e,t,n){var r,i,o,l,a,s,u=0,f=!1,c=!1,v=!0;if(typeof e!="function")throw new TypeError(Kw);t=Of(t)||0,ru(n)&&(f=!!n.leading,c="maxWait"in n,o=c?lS(Of(n.maxWait)||0,t):o,v="trailing"in n?!!n.trailing:v);function w(k){var E=r,_=i;return r=i=void 0,u=k,l=e.apply(_,E),l}function m(k){return u=k,a=setTimeout(h,t),f?w(k):l}function y(k){var E=k-s,_=k-u,P=t-E;return c?aS(P,o-_):P}function S(k){var E=k-s,_=k-u;return s===void 0||E>=t||E<0||c&&_>=o}function h(){var k=za();if(S(k))return p(k);a=setTimeout(h,y(k))}function p(k){return a=void 0,v&&r?w(k):(r=i=void 0,l)}function g(){a!==void 0&&clearTimeout(a),u=0,r=s=i=a=void 0}function x(){return a===void 0?l:p(za())}function O(){var k=za(),E=S(k);if(r=arguments,i=this,s=k,E){if(a===void 0)return m(s);if(c)return a=setTimeout(h,t),w(s)}return a===void 0&&(a=setTimeout(h,t)),l}return O.cancel=g,O.flush=x,O}function ru(e){var t=typeof e;return!!e&&(t=="object"||t=="function")}function uS(e){return!!e&&typeof e=="object"}function cS(e){return typeof e=="symbol"||uS(e)&&oS.call(e)==Gw}function Of(e){if(typeof e=="number")return e;if(cS(e))return kf;if(ru(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=ru(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=e.replace(Yw,"");var n=Jw.test(e);return n||Zw.test(e)?eS(e.slice(2),n?2:8):Xw.test(e)?kf:+e}var dS=sS,dg={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var t={}.hasOwnProperty;function n(){for(var r=[],i=0;i<arguments.length;i++){var o=arguments[i];if(o){var l=typeof o;if(l==="string"||l==="number")r.push(o);else if(Array.isArray(o)){if(o.length){var a=n.apply(null,o);a&&r.push(a)}}else if(l==="object"){if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]")){r.push(o.toString());continue}for(var s in o)t.call(o,s)&&o[s]&&r.push(s)}}}return r.join(" ")}e.exports?(n.default=n,e.exports=n):window.classNames=n})()})(dg);var ql=dg.exports,L={};Object.defineProperty(L,"__esModule",{value:!0});L.checkSpecKeys=L.checkNavigable=L.changeSlide=L.canUseDOM=L.canGoNext=void 0;L.clamp=fg;L.swipeStart=L.swipeMove=L.swipeEnd=L.slidesOnRight=L.slidesOnLeft=L.slideHandler=L.siblingDirection=L.safePreventDefault=L.lazyStartIndex=L.lazySlidesOnRight=L.lazySlidesOnLeft=L.lazyEndIndex=L.keyHandler=L.initializedState=L.getWidth=L.getTrackLeft=L.getTrackCSS=L.getTrackAnimateCSS=L.getTotalSlides=L.getSwipeDirection=L.getSlideCount=L.getRequiredLazySlides=L.getPreClones=L.getPostClones=L.getOnDemandLazySlides=L.getNavigableIndexes=L.getHeight=L.extractObject=void 0;var fS=pS(C);function pS(e){return e&&e.__esModule?e:{default:e}}function Cf(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function ee(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Cf(Object(n),!0).forEach(function(r){hS(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Cf(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function hS(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function fg(e,t,n){return Math.max(t,Math.min(e,n))}var jn=function(t){var n=["onTouchStart","onTouchMove","onWheel"];n.includes(t._reactName)||t.preventDefault()};L.safePreventDefault=jn;var bc=function(t){for(var n=[],r=Pc(t),i=Rc(t),o=r;o<i;o++)t.lazyLoadedList.indexOf(o)<0&&n.push(o);return n};L.getOnDemandLazySlides=bc;var mS=function(t){for(var n=[],r=Pc(t),i=Rc(t),o=r;o<i;o++)n.push(o);return n};L.getRequiredLazySlides=mS;var Pc=function(t){return t.currentSlide-pg(t)};L.lazyStartIndex=Pc;var Rc=function(t){return t.currentSlide+hg(t)};L.lazyEndIndex=Rc;var pg=function(t){return t.centerMode?Math.floor(t.slidesToShow/2)+(parseInt(t.centerPadding)>0?1:0):0};L.lazySlidesOnLeft=pg;var hg=function(t){return t.centerMode?Math.floor((t.slidesToShow-1)/2)+1+(parseInt(t.centerPadding)>0?1:0):t.slidesToShow};L.lazySlidesOnRight=hg;var tl=function(t){return t&&t.offsetWidth||0};L.getWidth=tl;var Tc=function(t){return t&&t.offsetHeight||0};L.getHeight=Tc;var Lc=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,r,i,o,l;return r=t.startX-t.curX,i=t.startY-t.curY,o=Math.atan2(i,r),l=Math.round(o*180/Math.PI),l<0&&(l=360-Math.abs(l)),l<=45&&l>=0||l<=360&&l>=315?"left":l>=135&&l<=225?"right":n===!0?l>=35&&l<=135?"up":"down":"vertical"};L.getSwipeDirection=Lc;var Nc=function(t){var n=!0;return t.infinite||(t.centerMode&&t.currentSlide>=t.slideCount-1||t.slideCount<=t.slidesToShow||t.currentSlide>=t.slideCount-t.slidesToShow)&&(n=!1),n};L.canGoNext=Nc;var gS=function(t,n){var r={};return n.forEach(function(i){return r[i]=t[i]}),r};L.extractObject=gS;var vS=function(t){var n=fS.default.Children.count(t.children),r=t.listRef,i=Math.ceil(tl(r)),o=t.trackRef&&t.trackRef.node,l=Math.ceil(tl(o)),a;if(t.vertical)a=i;else{var s=t.centerMode&&parseInt(t.centerPadding)*2;typeof t.centerPadding=="string"&&t.centerPadding.slice(-1)==="%"&&(s*=i/100),a=Math.ceil((i-s)/t.slidesToShow)}var u=r&&Tc(r.querySelector('[data-index="0"]')),f=u*t.slidesToShow,c=t.currentSlide===void 0?t.initialSlide:t.currentSlide;t.rtl&&t.currentSlide===void 0&&(c=n-1-t.initialSlide);var v=t.lazyLoadedList||[],w=bc(ee(ee({},t),{},{currentSlide:c,lazyLoadedList:v}));v=v.concat(w);var m={slideCount:n,slideWidth:a,listWidth:i,trackWidth:l,currentSlide:c,slideHeight:u,listHeight:f,lazyLoadedList:v};return t.autoplaying===null&&t.autoplay&&(m.autoplaying="playing"),m};L.initializedState=vS;var yS=function(t){var n=t.waitForAnimate,r=t.animating,i=t.fade,o=t.infinite,l=t.index,a=t.slideCount,s=t.lazyLoad,u=t.currentSlide,f=t.centerMode,c=t.slidesToScroll,v=t.slidesToShow,w=t.useCSS,m=t.lazyLoadedList;if(n&&r)return{};var y=l,S,h,p,g={},x={},O=o?l:fg(l,0,a-1);if(i){if(!o&&(l<0||l>=a))return{};l<0?y=l+a:l>=a&&(y=l-a),s&&m.indexOf(y)<0&&(m=m.concat(y)),g={animating:!0,currentSlide:y,lazyLoadedList:m,targetSlide:y},x={animating:!1,targetSlide:y}}else S=y,y<0?(S=y+a,o?a%c!==0&&(S=a-a%c):S=0):!Nc(t)&&y>u?y=S=u:f&&y>=a?(y=o?a:a-1,S=o?0:a-1):y>=a&&(S=y-a,o?a%c!==0&&(S=0):S=a-v),!o&&y+v>=a&&(S=a-v),h=Ei(ee(ee({},t),{},{slideIndex:y})),p=Ei(ee(ee({},t),{},{slideIndex:S})),o||(h===p&&(y=S),h=p),s&&(m=m.concat(bc(ee(ee({},t),{},{currentSlide:y})))),w?(g={animating:!0,currentSlide:S,trackStyle:zc(ee(ee({},t),{},{left:h})),lazyLoadedList:m,targetSlide:O},x={animating:!1,currentSlide:S,trackStyle:_i(ee(ee({},t),{},{left:p})),swipeLeft:null,targetSlide:O}):g={currentSlide:S,trackStyle:_i(ee(ee({},t),{},{left:p})),lazyLoadedList:m,targetSlide:O};return{state:g,nextState:x}};L.slideHandler=yS;var xS=function(t,n){var r,i,o,l,a,s=t.slidesToScroll,u=t.slidesToShow,f=t.slideCount,c=t.currentSlide,v=t.targetSlide,w=t.lazyLoad,m=t.infinite;if(l=f%s!==0,r=l?0:(f-c)%s,n.message==="previous")o=r===0?s:u-r,a=c-o,w&&!m&&(i=c-o,a=i===-1?f-1:i),m||(a=v-s);else if(n.message==="next")o=r===0?s:r,a=c+o,w&&!m&&(a=(c+s)%f+r),m||(a=v+s);else if(n.message==="dots")a=n.index*n.slidesToScroll;else if(n.message==="children"){if(a=n.index,m){var y=yg(ee(ee({},t),{},{targetSlide:a}));a>n.currentSlide&&y==="left"?a=a-f:a<n.currentSlide&&y==="right"&&(a=a+f)}}else n.message==="index"&&(a=Number(n.index));return a};L.changeSlide=xS;var wS=function(t,n,r){return t.target.tagName.match("TEXTAREA|INPUT|SELECT")||!n?"":t.keyCode===37?r?"next":"previous":t.keyCode===39?r?"previous":"next":""};L.keyHandler=wS;var SS=function(t,n,r){return t.target.tagName==="IMG"&&jn(t),!n||!r&&t.type.indexOf("mouse")!==-1?"":{dragging:!0,touchObject:{startX:t.touches?t.touches[0].pageX:t.clientX,startY:t.touches?t.touches[0].pageY:t.clientY,curX:t.touches?t.touches[0].pageX:t.clientX,curY:t.touches?t.touches[0].pageY:t.clientY}}};L.swipeStart=SS;var kS=function(t,n){var r=n.scrolling,i=n.animating,o=n.vertical,l=n.swipeToSlide,a=n.verticalSwiping,s=n.rtl,u=n.currentSlide,f=n.edgeFriction,c=n.edgeDragged,v=n.onEdge,w=n.swiped,m=n.swiping,y=n.slideCount,S=n.slidesToScroll,h=n.infinite,p=n.touchObject,g=n.swipeEvent,x=n.listHeight,O=n.listWidth;if(!r){if(i)return jn(t);o&&l&&a&&jn(t);var k,E={},_=Ei(n);p.curX=t.touches?t.touches[0].pageX:t.clientX,p.curY=t.touches?t.touches[0].pageY:t.clientY,p.swipeLength=Math.round(Math.sqrt(Math.pow(p.curX-p.startX,2)));var P=Math.round(Math.sqrt(Math.pow(p.curY-p.startY,2)));if(!a&&!m&&P>10)return{scrolling:!0};a&&(p.swipeLength=P);var T=(s?-1:1)*(p.curX>p.startX?1:-1);a&&(T=p.curY>p.startY?1:-1);var M=Math.ceil(y/S),$=Lc(n.touchObject,a),z=p.swipeLength;return h||(u===0&&($==="right"||$==="down")||u+1>=M&&($==="left"||$==="up")||!Nc(n)&&($==="left"||$==="up"))&&(z=p.swipeLength*f,c===!1&&v&&(v($),E.edgeDragged=!0)),!w&&g&&(g($),E.swiped=!0),o?k=_+z*(x/O)*T:s?k=_-z*T:k=_+z*T,a&&(k=_+z*T),E=ee(ee({},E),{},{touchObject:p,swipeLeft:k,trackStyle:_i(ee(ee({},n),{},{left:k}))}),Math.abs(p.curX-p.startX)<Math.abs(p.curY-p.startY)*.8||p.swipeLength>10&&(E.swiping=!0,jn(t)),E}};L.swipeMove=kS;var OS=function(t,n){var r=n.dragging,i=n.swipe,o=n.touchObject,l=n.listWidth,a=n.touchThreshold,s=n.verticalSwiping,u=n.listHeight,f=n.swipeToSlide,c=n.scrolling,v=n.onSwipe,w=n.targetSlide,m=n.currentSlide,y=n.infinite;if(!r)return i&&jn(t),{};var S=s?u/a:l/a,h=Lc(o,s),p={dragging:!1,edgeDragged:!1,scrolling:!1,swiping:!1,swiped:!1,swipeLeft:null,touchObject:{}};if(c||!o.swipeLength)return p;if(o.swipeLength>S){jn(t),v&&v(h);var g,x,O=y?m:w;switch(h){case"left":case"up":x=O+ou(n),g=f?iu(n,x):x,p.currentDirection=0;break;case"right":case"down":x=O-ou(n),g=f?iu(n,x):x,p.currentDirection=1;break;default:g=O}p.triggerSlideHandler=g}else{var k=Ei(n);p.trackStyle=zc(ee(ee({},n),{},{left:k}))}return p};L.swipeEnd=OS;var mg=function(t){for(var n=t.infinite?t.slideCount*2:t.slideCount,r=t.infinite?t.slidesToShow*-1:0,i=t.infinite?t.slidesToShow*-1:0,o=[];r<n;)o.push(r),r=i+t.slidesToScroll,i+=Math.min(t.slidesToScroll,t.slidesToShow);return o};L.getNavigableIndexes=mg;var iu=function(t,n){var r=mg(t),i=0;if(n>r[r.length-1])n=r[r.length-1];else for(var o in r){if(n<r[o]){n=i;break}i=r[o]}return n};L.checkNavigable=iu;var ou=function(t){var n=t.centerMode?t.slideWidth*Math.floor(t.slidesToShow/2):0;if(t.swipeToSlide){var r,i=t.listRef,o=i.querySelectorAll&&i.querySelectorAll(".slick-slide")||[];if(Array.from(o).every(function(s){if(t.vertical){if(s.offsetTop+Tc(s)/2>t.swipeLeft*-1)return r=s,!1}else if(s.offsetLeft-n+tl(s)/2>t.swipeLeft*-1)return r=s,!1;return!0}),!r)return 0;var l=t.rtl===!0?t.slideCount-t.currentSlide:t.currentSlide,a=Math.abs(r.dataset.index-l)||1;return a}else return t.slidesToScroll};L.getSlideCount=ou;var Ql=function(t,n){return n.reduce(function(r,i){return r&&t.hasOwnProperty(i)},!0)?null:console.error("Keys Missing:",t)};L.checkSpecKeys=Ql;var _i=function(t){Ql(t,["left","variableWidth","slideCount","slidesToShow","slideWidth"]);var n,r,i=t.slideCount+2*t.slidesToShow;t.vertical?r=i*t.slideHeight:n=vg(t)*t.slideWidth;var o={opacity:1,transition:"",WebkitTransition:""};if(t.useTransform){var l=t.vertical?"translate3d(0px, "+t.left+"px, 0px)":"translate3d("+t.left+"px, 0px, 0px)",a=t.vertical?"translate3d(0px, "+t.left+"px, 0px)":"translate3d("+t.left+"px, 0px, 0px)",s=t.vertical?"translateY("+t.left+"px)":"translateX("+t.left+"px)";o=ee(ee({},o),{},{WebkitTransform:l,transform:a,msTransform:s})}else t.vertical?o.top=t.left:o.left=t.left;return t.fade&&(o={opacity:1}),n&&(o.width=n),r&&(o.height=r),window&&!window.addEventListener&&window.attachEvent&&(t.vertical?o.marginTop=t.left+"px":o.marginLeft=t.left+"px"),o};L.getTrackCSS=_i;var zc=function(t){Ql(t,["left","variableWidth","slideCount","slidesToShow","slideWidth","speed","cssEase"]);var n=_i(t);return t.useTransform?(n.WebkitTransition="-webkit-transform "+t.speed+"ms "+t.cssEase,n.transition="transform "+t.speed+"ms "+t.cssEase):t.vertical?n.transition="top "+t.speed+"ms "+t.cssEase:n.transition="left "+t.speed+"ms "+t.cssEase,n};L.getTrackAnimateCSS=zc;var Ei=function(t){if(t.unslick)return 0;Ql(t,["slideIndex","trackRef","infinite","centerMode","slideCount","slidesToShow","slidesToScroll","slideWidth","listWidth","variableWidth","slideHeight"]);var n=t.slideIndex,r=t.trackRef,i=t.infinite,o=t.centerMode,l=t.slideCount,a=t.slidesToShow,s=t.slidesToScroll,u=t.slideWidth,f=t.listWidth,c=t.variableWidth,v=t.slideHeight,w=t.fade,m=t.vertical,y=0,S,h,p=0;if(w||t.slideCount===1)return 0;var g=0;if(i?(g=-ei(t),l%s!==0&&n+s>l&&(g=-(n>l?a-(n-l):l%s)),o&&(g+=parseInt(a/2))):(l%s!==0&&n+s>l&&(g=a-l%s),o&&(g=parseInt(a/2))),y=g*u,p=g*v,m?S=n*v*-1+p:S=n*u*-1+y,c===!0){var x,O=r&&r.node;if(x=n+ei(t),h=O&&O.childNodes[x],S=h?h.offsetLeft*-1:0,o===!0){x=i?n+ei(t):n,h=O&&O.children[x],S=0;for(var k=0;k<x;k++)S-=O&&O.children[k]&&O.children[k].offsetWidth;S-=parseInt(t.centerPadding),S+=h&&(f-h.offsetWidth)/2}}return S};L.getTrackLeft=Ei;var ei=function(t){return t.unslick||!t.infinite?0:t.variableWidth?t.slideCount:t.slidesToShow+(t.centerMode?1:0)};L.getPreClones=ei;var gg=function(t){return t.unslick||!t.infinite?0:t.slideCount};L.getPostClones=gg;var vg=function(t){return t.slideCount===1?1:ei(t)+t.slideCount+gg(t)};L.getTotalSlides=vg;var yg=function(t){return t.targetSlide>t.currentSlide?t.targetSlide>t.currentSlide+xg(t)?"left":"right":t.targetSlide<t.currentSlide-wg(t)?"right":"left"};L.siblingDirection=yg;var xg=function(t){var n=t.slidesToShow,r=t.centerMode,i=t.rtl,o=t.centerPadding;if(r){var l=(n-1)/2+1;return parseInt(o)>0&&(l+=1),i&&n%2===0&&(l+=1),l}return i?0:n-1};L.slidesOnRight=xg;var wg=function(t){var n=t.slidesToShow,r=t.centerMode,i=t.rtl,o=t.centerPadding;if(r){var l=(n-1)/2+1;return parseInt(o)>0&&(l+=1),!i&&n%2===0&&(l+=1),l}return i?n-1:0};L.slidesOnLeft=wg;var CS=function(){return!!(typeof window<"u"&&window.document&&window.document.createElement)};L.canUseDOM=CS;var Kl={};function lu(e){"@babel/helpers - typeof";return lu=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},lu(e)}Object.defineProperty(Kl,"__esModule",{value:!0});Kl.Track=void 0;var Vt=Sg(C),$a=Sg(ql),Ia=L;function Sg(e){return e&&e.__esModule?e:{default:e}}function au(){return au=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},au.apply(this,arguments)}function _S(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function ES(e,t,n){return t&&_f(e.prototype,t),n&&_f(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function jS(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&su(e,t)}function su(e,t){return su=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},su(e,t)}function bS(e){var t=RS();return function(){var r=nl(e),i;if(t){var o=nl(this).constructor;i=Reflect.construct(r,arguments,o)}else i=r.apply(this,arguments);return PS(this,i)}}function PS(e,t){if(t&&(lu(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return uu(e)}function uu(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function RS(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function nl(e){return nl=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},nl(e)}function Ef(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Ae(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Ef(Object(n),!0).forEach(function(r){cu(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ef(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function cu(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Aa=function(t){var n,r,i,o,l;t.rtl?l=t.slideCount-1-t.index:l=t.index,i=l<0||l>=t.slideCount,t.centerMode?(o=Math.floor(t.slidesToShow/2),r=(l-t.currentSlide)%t.slideCount===0,l>t.currentSlide-o-1&&l<=t.currentSlide+o&&(n=!0)):n=t.currentSlide<=l&&l<t.currentSlide+t.slidesToShow;var a;t.targetSlide<0?a=t.targetSlide+t.slideCount:t.targetSlide>=t.slideCount?a=t.targetSlide-t.slideCount:a=t.targetSlide;var s=l===a;return{"slick-slide":!0,"slick-active":n,"slick-center":r,"slick-cloned":i,"slick-current":s}},TS=function(t){var n={};return(t.variableWidth===void 0||t.variableWidth===!1)&&(n.width=t.slideWidth),t.fade&&(n.position="relative",t.vertical?n.top=-t.index*parseInt(t.slideHeight):n.left=-t.index*parseInt(t.slideWidth),n.opacity=t.currentSlide===t.index?1:0,t.useCSS&&(n.transition="opacity "+t.speed+"ms "+t.cssEase+", visibility "+t.speed+"ms "+t.cssEase)),n},Da=function(t,n){return t.key||n},LS=function(t){var n,r=[],i=[],o=[],l=Vt.default.Children.count(t.children),a=(0,Ia.lazyStartIndex)(t),s=(0,Ia.lazyEndIndex)(t);return Vt.default.Children.forEach(t.children,function(u,f){var c,v={message:"children",index:f,slidesToScroll:t.slidesToScroll,currentSlide:t.currentSlide};!t.lazyLoad||t.lazyLoad&&t.lazyLoadedList.indexOf(f)>=0?c=u:c=Vt.default.createElement("div",null);var w=TS(Ae(Ae({},t),{},{index:f})),m=c.props.className||"",y=Aa(Ae(Ae({},t),{},{index:f}));if(r.push(Vt.default.cloneElement(c,{key:"original"+Da(c,f),"data-index":f,className:(0,$a.default)(y,m),tabIndex:"-1","aria-hidden":!y["slick-active"],style:Ae(Ae({outline:"none"},c.props.style||{}),w),onClick:function(p){c.props&&c.props.onClick&&c.props.onClick(p),t.focusOnSelect&&t.focusOnSelect(v)}})),t.infinite&&t.fade===!1){var S=l-f;S<=(0,Ia.getPreClones)(t)&&l!==t.slidesToShow&&(n=-S,n>=a&&(c=u),y=Aa(Ae(Ae({},t),{},{index:n})),i.push(Vt.default.cloneElement(c,{key:"precloned"+Da(c,n),"data-index":n,tabIndex:"-1",className:(0,$a.default)(y,m),"aria-hidden":!y["slick-active"],style:Ae(Ae({},c.props.style||{}),w),onClick:function(p){c.props&&c.props.onClick&&c.props.onClick(p),t.focusOnSelect&&t.focusOnSelect(v)}}))),l!==t.slidesToShow&&(n=l+f,n<s&&(c=u),y=Aa(Ae(Ae({},t),{},{index:n})),o.push(Vt.default.cloneElement(c,{key:"postcloned"+Da(c,n),"data-index":n,tabIndex:"-1",className:(0,$a.default)(y,m),"aria-hidden":!y["slick-active"],style:Ae(Ae({},c.props.style||{}),w),onClick:function(p){c.props&&c.props.onClick&&c.props.onClick(p),t.focusOnSelect&&t.focusOnSelect(v)}})))}}),t.rtl?i.concat(r,o).reverse():i.concat(r,o)},NS=function(e){jS(n,e);var t=bS(n);function n(){var r;_S(this,n);for(var i=arguments.length,o=new Array(i),l=0;l<i;l++)o[l]=arguments[l];return r=t.call.apply(t,[this].concat(o)),cu(uu(r),"node",null),cu(uu(r),"handleRef",function(a){r.node=a}),r}return ES(n,[{key:"render",value:function(){var i=LS(this.props),o=this.props,l=o.onMouseEnter,a=o.onMouseOver,s=o.onMouseLeave,u={onMouseEnter:l,onMouseOver:a,onMouseLeave:s};return Vt.default.createElement("div",au({ref:this.handleRef,className:"slick-track",style:this.props.trackStyle},u),i)}}]),n}(Vt.default.PureComponent);Kl.Track=NS;var Gl={};function du(e){"@babel/helpers - typeof";return du=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},du(e)}Object.defineProperty(Gl,"__esModule",{value:!0});Gl.Dots=void 0;var ro=kg(C),zS=kg(ql),jf=L;function kg(e){return e&&e.__esModule?e:{default:e}}function bf(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function $S(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?bf(Object(n),!0).forEach(function(r){IS(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):bf(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function IS(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function AS(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Pf(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function DS(e,t,n){return t&&Pf(e.prototype,t),n&&Pf(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function MS(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&fu(e,t)}function fu(e,t){return fu=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},fu(e,t)}function FS(e){var t=HS();return function(){var r=rl(e),i;if(t){var o=rl(this).constructor;i=Reflect.construct(r,arguments,o)}else i=r.apply(this,arguments);return US(this,i)}}function US(e,t){if(t&&(du(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return BS(e)}function BS(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function HS(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function rl(e){return rl=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},rl(e)}var WS=function(t){var n;return t.infinite?n=Math.ceil(t.slideCount/t.slidesToScroll):n=Math.ceil((t.slideCount-t.slidesToShow)/t.slidesToScroll)+1,n},VS=function(e){MS(n,e);var t=FS(n);function n(){return AS(this,n),t.apply(this,arguments)}return DS(n,[{key:"clickHandler",value:function(i,o){o.preventDefault(),this.props.clickHandler(i)}},{key:"render",value:function(){for(var i=this.props,o=i.onMouseEnter,l=i.onMouseOver,a=i.onMouseLeave,s=i.infinite,u=i.slidesToScroll,f=i.slidesToShow,c=i.slideCount,v=i.currentSlide,w=WS({slideCount:c,slidesToScroll:u,slidesToShow:f,infinite:s}),m={onMouseEnter:o,onMouseOver:l,onMouseLeave:a},y=[],S=0;S<w;S++){var h=(S+1)*u-1,p=s?h:(0,jf.clamp)(h,0,c-1),g=p-(u-1),x=s?g:(0,jf.clamp)(g,0,c-1),O=(0,zS.default)({"slick-active":s?v>=x&&v<=p:v===x}),k={message:"dots",index:S,slidesToScroll:u,currentSlide:v},E=this.clickHandler.bind(this,k);y=y.concat(ro.default.createElement("li",{key:S,className:O},ro.default.cloneElement(this.props.customPaging(S),{onClick:E})))}return ro.default.cloneElement(this.props.appendDots(y),$S({className:this.props.dotsClass},m))}}]),n}(ro.default.PureComponent);Gl.Dots=VS;var kr={};function pu(e){"@babel/helpers - typeof";return pu=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},pu(e)}Object.defineProperty(kr,"__esModule",{value:!0});kr.PrevArrow=kr.NextArrow=void 0;var sr=Cg(C),Og=Cg(ql),qS=L;function Cg(e){return e&&e.__esModule?e:{default:e}}function il(){return il=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},il.apply(this,arguments)}function Rf(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function ol(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Rf(Object(n),!0).forEach(function(r){QS(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Rf(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function QS(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function _g(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Tf(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Eg(e,t,n){return t&&Tf(e.prototype,t),n&&Tf(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function jg(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&hu(e,t)}function hu(e,t){return hu=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},hu(e,t)}function bg(e){var t=YS();return function(){var r=ll(e),i;if(t){var o=ll(this).constructor;i=Reflect.construct(r,arguments,o)}else i=r.apply(this,arguments);return KS(this,i)}}function KS(e,t){if(t&&(pu(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return GS(e)}function GS(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function YS(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function ll(e){return ll=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},ll(e)}var XS=function(e){jg(n,e);var t=bg(n);function n(){return _g(this,n),t.apply(this,arguments)}return Eg(n,[{key:"clickHandler",value:function(i,o){o&&o.preventDefault(),this.props.clickHandler(i,o)}},{key:"render",value:function(){var i={"slick-arrow":!0,"slick-prev":!0},o=this.clickHandler.bind(this,{message:"previous"});!this.props.infinite&&(this.props.currentSlide===0||this.props.slideCount<=this.props.slidesToShow)&&(i["slick-disabled"]=!0,o=null);var l={key:"0","data-role":"none",className:(0,Og.default)(i),style:{display:"block"},onClick:o},a={currentSlide:this.props.currentSlide,slideCount:this.props.slideCount},s;return this.props.prevArrow?s=sr.default.cloneElement(this.props.prevArrow,ol(ol({},l),a)):s=sr.default.createElement("button",il({key:"0",type:"button"},l)," ","Previous"),s}}]),n}(sr.default.PureComponent);kr.PrevArrow=XS;var JS=function(e){jg(n,e);var t=bg(n);function n(){return _g(this,n),t.apply(this,arguments)}return Eg(n,[{key:"clickHandler",value:function(i,o){o&&o.preventDefault(),this.props.clickHandler(i,o)}},{key:"render",value:function(){var i={"slick-arrow":!0,"slick-next":!0},o=this.clickHandler.bind(this,{message:"next"});(0,qS.canGoNext)(this.props)||(i["slick-disabled"]=!0,o=null);var l={key:"1","data-role":"none",className:(0,Og.default)(i),style:{display:"block"},onClick:o},a={currentSlide:this.props.currentSlide,slideCount:this.props.slideCount},s;return this.props.nextArrow?s=sr.default.cloneElement(this.props.nextArrow,ol(ol({},l),a)):s=sr.default.createElement("button",il({key:"1",type:"button"},l)," ","Next"),s}}]),n}(sr.default.PureComponent);kr.NextArrow=JS;var Pg=function(){if(typeof Map<"u")return Map;function e(t,n){var r=-1;return t.some(function(i,o){return i[0]===n?(r=o,!0):!1}),r}return function(){function t(){this.__entries__=[]}return Object.defineProperty(t.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),t.prototype.get=function(n){var r=e(this.__entries__,n),i=this.__entries__[r];return i&&i[1]},t.prototype.set=function(n,r){var i=e(this.__entries__,n);~i?this.__entries__[i][1]=r:this.__entries__.push([n,r])},t.prototype.delete=function(n){var r=this.__entries__,i=e(r,n);~i&&r.splice(i,1)},t.prototype.has=function(n){return!!~e(this.__entries__,n)},t.prototype.clear=function(){this.__entries__.splice(0)},t.prototype.forEach=function(n,r){r===void 0&&(r=null);for(var i=0,o=this.__entries__;i<o.length;i++){var l=o[i];n.call(r,l[1],l[0])}},t}()}(),mu=typeof window<"u"&&typeof document<"u"&&window.document===document,al=function(){return typeof global<"u"&&global.Math===Math?global:typeof self<"u"&&self.Math===Math?self:typeof window<"u"&&window.Math===Math?window:Function("return this")()}(),ZS=function(){return typeof requestAnimationFrame=="function"?requestAnimationFrame.bind(al):function(e){return setTimeout(function(){return e(Date.now())},1e3/60)}}(),e2=2;function t2(e,t){var n=!1,r=!1,i=0;function o(){n&&(n=!1,e()),r&&a()}function l(){ZS(o)}function a(){var s=Date.now();if(n){if(s-i<e2)return;r=!0}else n=!0,r=!1,setTimeout(l,t);i=s}return a}var n2=20,r2=["top","right","bottom","left","width","height","size","weight"],i2=typeof MutationObserver<"u",o2=function(){function e(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=t2(this.refresh.bind(this),n2)}return e.prototype.addObserver=function(t){~this.observers_.indexOf(t)||this.observers_.push(t),this.connected_||this.connect_()},e.prototype.removeObserver=function(t){var n=this.observers_,r=n.indexOf(t);~r&&n.splice(r,1),!n.length&&this.connected_&&this.disconnect_()},e.prototype.refresh=function(){var t=this.updateObservers_();t&&this.refresh()},e.prototype.updateObservers_=function(){var t=this.observers_.filter(function(n){return n.gatherActive(),n.hasActive()});return t.forEach(function(n){return n.broadcastActive()}),t.length>0},e.prototype.connect_=function(){!mu||this.connected_||(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),i2?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},e.prototype.disconnect_=function(){!mu||!this.connected_||(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},e.prototype.onTransitionEnd_=function(t){var n=t.propertyName,r=n===void 0?"":n,i=r2.some(function(o){return!!~r.indexOf(o)});i&&this.refresh()},e.getInstance=function(){return this.instance_||(this.instance_=new e),this.instance_},e.instance_=null,e}(),Rg=function(e,t){for(var n=0,r=Object.keys(t);n<r.length;n++){var i=r[n];Object.defineProperty(e,i,{value:t[i],enumerable:!1,writable:!1,configurable:!0})}return e},Or=function(e){var t=e&&e.ownerDocument&&e.ownerDocument.defaultView;return t||al},Tg=Yl(0,0,0,0);function sl(e){return parseFloat(e)||0}function Lf(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return t.reduce(function(r,i){var o=e["border-"+i+"-width"];return r+sl(o)},0)}function l2(e){for(var t=["top","right","bottom","left"],n={},r=0,i=t;r<i.length;r++){var o=i[r],l=e["padding-"+o];n[o]=sl(l)}return n}function a2(e){var t=e.getBBox();return Yl(0,0,t.width,t.height)}function s2(e){var t=e.clientWidth,n=e.clientHeight;if(!t&&!n)return Tg;var r=Or(e).getComputedStyle(e),i=l2(r),o=i.left+i.right,l=i.top+i.bottom,a=sl(r.width),s=sl(r.height);if(r.boxSizing==="border-box"&&(Math.round(a+o)!==t&&(a-=Lf(r,"left","right")+o),Math.round(s+l)!==n&&(s-=Lf(r,"top","bottom")+l)),!c2(e)){var u=Math.round(a+o)-t,f=Math.round(s+l)-n;Math.abs(u)!==1&&(a-=u),Math.abs(f)!==1&&(s-=f)}return Yl(i.left,i.top,a,s)}var u2=function(){return typeof SVGGraphicsElement<"u"?function(e){return e instanceof Or(e).SVGGraphicsElement}:function(e){return e instanceof Or(e).SVGElement&&typeof e.getBBox=="function"}}();function c2(e){return e===Or(e).document.documentElement}function d2(e){return mu?u2(e)?a2(e):s2(e):Tg}function f2(e){var t=e.x,n=e.y,r=e.width,i=e.height,o=typeof DOMRectReadOnly<"u"?DOMRectReadOnly:Object,l=Object.create(o.prototype);return Rg(l,{x:t,y:n,width:r,height:i,top:n,right:t+r,bottom:i+n,left:t}),l}function Yl(e,t,n,r){return{x:e,y:t,width:n,height:r}}var p2=function(){function e(t){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=Yl(0,0,0,0),this.target=t}return e.prototype.isActive=function(){var t=d2(this.target);return this.contentRect_=t,t.width!==this.broadcastWidth||t.height!==this.broadcastHeight},e.prototype.broadcastRect=function(){var t=this.contentRect_;return this.broadcastWidth=t.width,this.broadcastHeight=t.height,t},e}(),h2=function(){function e(t,n){var r=f2(n);Rg(this,{target:t,contentRect:r})}return e}(),m2=function(){function e(t,n,r){if(this.activeObservations_=[],this.observations_=new Pg,typeof t!="function")throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=t,this.controller_=n,this.callbackCtx_=r}return e.prototype.observe=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(t instanceof Or(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var n=this.observations_;n.has(t)||(n.set(t,new p2(t)),this.controller_.addObserver(this),this.controller_.refresh())}},e.prototype.unobserve=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(t instanceof Or(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var n=this.observations_;n.has(t)&&(n.delete(t),n.size||this.controller_.removeObserver(this))}},e.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},e.prototype.gatherActive=function(){var t=this;this.clearActive(),this.observations_.forEach(function(n){n.isActive()&&t.activeObservations_.push(n)})},e.prototype.broadcastActive=function(){if(this.hasActive()){var t=this.callbackCtx_,n=this.activeObservations_.map(function(r){return new h2(r.target,r.broadcastRect())});this.callback_.call(t,n,t),this.clearActive()}},e.prototype.clearActive=function(){this.activeObservations_.splice(0)},e.prototype.hasActive=function(){return this.activeObservations_.length>0},e}(),Lg=typeof WeakMap<"u"?new WeakMap:new Pg,Ng=function(){function e(t){if(!(this instanceof e))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var n=o2.getInstance(),r=new m2(t,n,this);Lg.set(this,r)}return e}();["observe","unobserve","disconnect"].forEach(function(e){Ng.prototype[e]=function(){var t;return(t=Lg.get(this))[e].apply(t,arguments)}});var g2=function(){return typeof al.ResizeObserver<"u"?al.ResizeObserver:Ng}();const v2=Object.freeze(Object.defineProperty({__proto__:null,default:g2},Symbol.toStringTag,{value:"Module"})),y2=Hg(v2);Object.defineProperty(Vl,"__esModule",{value:!0});Vl.InnerSlider=void 0;var Re=$i(C),x2=$i(cg),w2=$i(dS),S2=$i(ql),ne=L,k2=Kl,O2=Gl,Nf=kr,C2=$i(y2);function $i(e){return e&&e.__esModule?e:{default:e}}function ul(e){"@babel/helpers - typeof";return ul=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ul(e)}function cl(){return cl=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},cl.apply(this,arguments)}function _2(e,t){if(e==null)return{};var n=E2(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function E2(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function zf(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function D(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?zf(Object(n),!0).forEach(function(r){B(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):zf(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function j2(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function $f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function b2(e,t,n){return t&&$f(e.prototype,t),n&&$f(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function P2(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&gu(e,t)}function gu(e,t){return gu=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},gu(e,t)}function R2(e){var t=L2();return function(){var r=dl(e),i;if(t){var o=dl(this).constructor;i=Reflect.construct(r,arguments,o)}else i=r.apply(this,arguments);return T2(this,i)}}function T2(e,t){if(t&&(ul(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return U(e)}function U(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function L2(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function dl(e){return dl=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},dl(e)}function B(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var N2=function(e){P2(n,e);var t=R2(n);function n(r){var i;j2(this,n),i=t.call(this,r),B(U(i),"listRefHandler",function(l){return i.list=l}),B(U(i),"trackRefHandler",function(l){return i.track=l}),B(U(i),"adaptHeight",function(){if(i.props.adaptiveHeight&&i.list){var l=i.list.querySelector('[data-index="'.concat(i.state.currentSlide,'"]'));i.list.style.height=(0,ne.getHeight)(l)+"px"}}),B(U(i),"componentDidMount",function(){if(i.props.onInit&&i.props.onInit(),i.props.lazyLoad){var l=(0,ne.getOnDemandLazySlides)(D(D({},i.props),i.state));l.length>0&&(i.setState(function(s){return{lazyLoadedList:s.lazyLoadedList.concat(l)}}),i.props.onLazyLoad&&i.props.onLazyLoad(l))}var a=D({listRef:i.list,trackRef:i.track},i.props);i.updateState(a,!0,function(){i.adaptHeight(),i.props.autoplay&&i.autoPlay("update")}),i.props.lazyLoad==="progressive"&&(i.lazyLoadTimer=setInterval(i.progressiveLazyLoad,1e3)),i.ro=new C2.default(function(){i.state.animating?(i.onWindowResized(!1),i.callbackTimers.push(setTimeout(function(){return i.onWindowResized()},i.props.speed))):i.onWindowResized()}),i.ro.observe(i.list),document.querySelectorAll&&Array.prototype.forEach.call(document.querySelectorAll(".slick-slide"),function(s){s.onfocus=i.props.pauseOnFocus?i.onSlideFocus:null,s.onblur=i.props.pauseOnFocus?i.onSlideBlur:null}),window.addEventListener?window.addEventListener("resize",i.onWindowResized):window.attachEvent("onresize",i.onWindowResized)}),B(U(i),"componentWillUnmount",function(){i.animationEndCallback&&clearTimeout(i.animationEndCallback),i.lazyLoadTimer&&clearInterval(i.lazyLoadTimer),i.callbackTimers.length&&(i.callbackTimers.forEach(function(l){return clearTimeout(l)}),i.callbackTimers=[]),window.addEventListener?window.removeEventListener("resize",i.onWindowResized):window.detachEvent("onresize",i.onWindowResized),i.autoplayTimer&&clearInterval(i.autoplayTimer),i.ro.disconnect()}),B(U(i),"componentDidUpdate",function(l){if(i.checkImagesLoad(),i.props.onReInit&&i.props.onReInit(),i.props.lazyLoad){var a=(0,ne.getOnDemandLazySlides)(D(D({},i.props),i.state));a.length>0&&(i.setState(function(f){return{lazyLoadedList:f.lazyLoadedList.concat(a)}}),i.props.onLazyLoad&&i.props.onLazyLoad(a))}i.adaptHeight();var s=D(D({listRef:i.list,trackRef:i.track},i.props),i.state),u=i.didPropsChange(l);u&&i.updateState(s,u,function(){i.state.currentSlide>=Re.default.Children.count(i.props.children)&&i.changeSlide({message:"index",index:Re.default.Children.count(i.props.children)-i.props.slidesToShow,currentSlide:i.state.currentSlide}),i.props.autoplay?i.autoPlay("update"):i.pause("paused")})}),B(U(i),"onWindowResized",function(l){i.debouncedResize&&i.debouncedResize.cancel(),i.debouncedResize=(0,w2.default)(function(){return i.resizeWindow(l)},50),i.debouncedResize()}),B(U(i),"resizeWindow",function(){var l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0,a=!!(i.track&&i.track.node);if(a){var s=D(D({listRef:i.list,trackRef:i.track},i.props),i.state);i.updateState(s,l,function(){i.props.autoplay?i.autoPlay("update"):i.pause("paused")}),i.setState({animating:!1}),clearTimeout(i.animationEndCallback),delete i.animationEndCallback}}),B(U(i),"updateState",function(l,a,s){var u=(0,ne.initializedState)(l);l=D(D(D({},l),u),{},{slideIndex:u.currentSlide});var f=(0,ne.getTrackLeft)(l);l=D(D({},l),{},{left:f});var c=(0,ne.getTrackCSS)(l);(a||Re.default.Children.count(i.props.children)!==Re.default.Children.count(l.children))&&(u.trackStyle=c),i.setState(u,s)}),B(U(i),"ssrInit",function(){if(i.props.variableWidth){var l=0,a=0,s=[],u=(0,ne.getPreClones)(D(D(D({},i.props),i.state),{},{slideCount:i.props.children.length})),f=(0,ne.getPostClones)(D(D(D({},i.props),i.state),{},{slideCount:i.props.children.length}));i.props.children.forEach(function(E){s.push(E.props.style.width),l+=E.props.style.width});for(var c=0;c<u;c++)a+=s[s.length-1-c],l+=s[s.length-1-c];for(var v=0;v<f;v++)l+=s[v];for(var w=0;w<i.state.currentSlide;w++)a+=s[w];var m={width:l+"px",left:-a+"px"};if(i.props.centerMode){var y="".concat(s[i.state.currentSlide],"px");m.left="calc(".concat(m.left," + (100% - ").concat(y,") / 2 ) ")}return{trackStyle:m}}var S=Re.default.Children.count(i.props.children),h=D(D(D({},i.props),i.state),{},{slideCount:S}),p=(0,ne.getPreClones)(h)+(0,ne.getPostClones)(h)+S,g=100/i.props.slidesToShow*p,x=100/p,O=-x*((0,ne.getPreClones)(h)+i.state.currentSlide)*g/100;i.props.centerMode&&(O+=(100-x*g/100)/2);var k={width:g+"%",left:O+"%"};return{slideWidth:x+"%",trackStyle:k}}),B(U(i),"checkImagesLoad",function(){var l=i.list&&i.list.querySelectorAll&&i.list.querySelectorAll(".slick-slide img")||[],a=l.length,s=0;Array.prototype.forEach.call(l,function(u){var f=function(){return++s&&s>=a&&i.onWindowResized()};if(!u.onclick)u.onclick=function(){return u.parentNode.focus()};else{var c=u.onclick;u.onclick=function(){c(),u.parentNode.focus()}}u.onload||(i.props.lazyLoad?u.onload=function(){i.adaptHeight(),i.callbackTimers.push(setTimeout(i.onWindowResized,i.props.speed))}:(u.onload=f,u.onerror=function(){f(),i.props.onLazyLoadError&&i.props.onLazyLoadError()}))})}),B(U(i),"progressiveLazyLoad",function(){for(var l=[],a=D(D({},i.props),i.state),s=i.state.currentSlide;s<i.state.slideCount+(0,ne.getPostClones)(a);s++)if(i.state.lazyLoadedList.indexOf(s)<0){l.push(s);break}for(var u=i.state.currentSlide-1;u>=-(0,ne.getPreClones)(a);u--)if(i.state.lazyLoadedList.indexOf(u)<0){l.push(u);break}l.length>0?(i.setState(function(f){return{lazyLoadedList:f.lazyLoadedList.concat(l)}}),i.props.onLazyLoad&&i.props.onLazyLoad(l)):i.lazyLoadTimer&&(clearInterval(i.lazyLoadTimer),delete i.lazyLoadTimer)}),B(U(i),"slideHandler",function(l){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,s=i.props,u=s.asNavFor,f=s.beforeChange,c=s.onLazyLoad,v=s.speed,w=s.afterChange,m=i.state.currentSlide,y=(0,ne.slideHandler)(D(D(D({index:l},i.props),i.state),{},{trackRef:i.track,useCSS:i.props.useCSS&&!a})),S=y.state,h=y.nextState;if(S){f&&f(m,S.currentSlide);var p=S.lazyLoadedList.filter(function(g){return i.state.lazyLoadedList.indexOf(g)<0});c&&p.length>0&&c(p),!i.props.waitForAnimate&&i.animationEndCallback&&(clearTimeout(i.animationEndCallback),w&&w(m),delete i.animationEndCallback),i.setState(S,function(){u&&i.asNavForIndex!==l&&(i.asNavForIndex=l,u.innerSlider.slideHandler(l)),h&&(i.animationEndCallback=setTimeout(function(){var g=h.animating,x=_2(h,["animating"]);i.setState(x,function(){i.callbackTimers.push(setTimeout(function(){return i.setState({animating:g})},10)),w&&w(S.currentSlide),delete i.animationEndCallback})},v))})}}),B(U(i),"changeSlide",function(l){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,s=D(D({},i.props),i.state),u=(0,ne.changeSlide)(s,l);if(!(u!==0&&!u)&&(a===!0?i.slideHandler(u,a):i.slideHandler(u),i.props.autoplay&&i.autoPlay("update"),i.props.focusOnSelect)){var f=i.list.querySelectorAll(".slick-current");f[0]&&f[0].focus()}}),B(U(i),"clickHandler",function(l){i.clickable===!1&&(l.stopPropagation(),l.preventDefault()),i.clickable=!0}),B(U(i),"keyHandler",function(l){var a=(0,ne.keyHandler)(l,i.props.accessibility,i.props.rtl);a!==""&&i.changeSlide({message:a})}),B(U(i),"selectHandler",function(l){i.changeSlide(l)}),B(U(i),"disableBodyScroll",function(){var l=function(s){s=s||window.event,s.preventDefault&&s.preventDefault(),s.returnValue=!1};window.ontouchmove=l}),B(U(i),"enableBodyScroll",function(){window.ontouchmove=null}),B(U(i),"swipeStart",function(l){i.props.verticalSwiping&&i.disableBodyScroll();var a=(0,ne.swipeStart)(l,i.props.swipe,i.props.draggable);a!==""&&i.setState(a)}),B(U(i),"swipeMove",function(l){var a=(0,ne.swipeMove)(l,D(D(D({},i.props),i.state),{},{trackRef:i.track,listRef:i.list,slideIndex:i.state.currentSlide}));a&&(a.swiping&&(i.clickable=!1),i.setState(a))}),B(U(i),"swipeEnd",function(l){var a=(0,ne.swipeEnd)(l,D(D(D({},i.props),i.state),{},{trackRef:i.track,listRef:i.list,slideIndex:i.state.currentSlide}));if(a){var s=a.triggerSlideHandler;delete a.triggerSlideHandler,i.setState(a),s!==void 0&&(i.slideHandler(s),i.props.verticalSwiping&&i.enableBodyScroll())}}),B(U(i),"touchEnd",function(l){i.swipeEnd(l),i.clickable=!0}),B(U(i),"slickPrev",function(){i.callbackTimers.push(setTimeout(function(){return i.changeSlide({message:"previous"})},0))}),B(U(i),"slickNext",function(){i.callbackTimers.push(setTimeout(function(){return i.changeSlide({message:"next"})},0))}),B(U(i),"slickGoTo",function(l){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(l=Number(l),isNaN(l))return"";i.callbackTimers.push(setTimeout(function(){return i.changeSlide({message:"index",index:l,currentSlide:i.state.currentSlide},a)},0))}),B(U(i),"play",function(){var l;if(i.props.rtl)l=i.state.currentSlide-i.props.slidesToScroll;else if((0,ne.canGoNext)(D(D({},i.props),i.state)))l=i.state.currentSlide+i.props.slidesToScroll;else return!1;i.slideHandler(l)}),B(U(i),"autoPlay",function(l){i.autoplayTimer&&clearInterval(i.autoplayTimer);var a=i.state.autoplaying;if(l==="update"){if(a==="hovered"||a==="focused"||a==="paused")return}else if(l==="leave"){if(a==="paused"||a==="focused")return}else if(l==="blur"&&(a==="paused"||a==="hovered"))return;i.autoplayTimer=setInterval(i.play,i.props.autoplaySpeed+50),i.setState({autoplaying:"playing"})}),B(U(i),"pause",function(l){i.autoplayTimer&&(clearInterval(i.autoplayTimer),i.autoplayTimer=null);var a=i.state.autoplaying;l==="paused"?i.setState({autoplaying:"paused"}):l==="focused"?(a==="hovered"||a==="playing")&&i.setState({autoplaying:"focused"}):a==="playing"&&i.setState({autoplaying:"hovered"})}),B(U(i),"onDotsOver",function(){return i.props.autoplay&&i.pause("hovered")}),B(U(i),"onDotsLeave",function(){return i.props.autoplay&&i.state.autoplaying==="hovered"&&i.autoPlay("leave")}),B(U(i),"onTrackOver",function(){return i.props.autoplay&&i.pause("hovered")}),B(U(i),"onTrackLeave",function(){return i.props.autoplay&&i.state.autoplaying==="hovered"&&i.autoPlay("leave")}),B(U(i),"onSlideFocus",function(){return i.props.autoplay&&i.pause("focused")}),B(U(i),"onSlideBlur",function(){return i.props.autoplay&&i.state.autoplaying==="focused"&&i.autoPlay("blur")}),B(U(i),"render",function(){var l=(0,S2.default)("slick-slider",i.props.className,{"slick-vertical":i.props.vertical,"slick-initialized":!0}),a=D(D({},i.props),i.state),s=(0,ne.extractObject)(a,["fade","cssEase","speed","infinite","centerMode","focusOnSelect","currentSlide","lazyLoad","lazyLoadedList","rtl","slideWidth","slideHeight","listHeight","vertical","slidesToShow","slidesToScroll","slideCount","trackStyle","variableWidth","unslick","centerPadding","targetSlide","useCSS"]),u=i.props.pauseOnHover;s=D(D({},s),{},{onMouseEnter:u?i.onTrackOver:null,onMouseLeave:u?i.onTrackLeave:null,onMouseOver:u?i.onTrackOver:null,focusOnSelect:i.props.focusOnSelect&&i.clickable?i.selectHandler:null});var f;if(i.props.dots===!0&&i.state.slideCount>=i.props.slidesToShow){var c=(0,ne.extractObject)(a,["dotsClass","slideCount","slidesToShow","currentSlide","slidesToScroll","clickHandler","children","customPaging","infinite","appendDots"]),v=i.props.pauseOnDotsHover;c=D(D({},c),{},{clickHandler:i.changeSlide,onMouseEnter:v?i.onDotsLeave:null,onMouseOver:v?i.onDotsOver:null,onMouseLeave:v?i.onDotsLeave:null}),f=Re.default.createElement(O2.Dots,c)}var w,m,y=(0,ne.extractObject)(a,["infinite","centerMode","currentSlide","slideCount","slidesToShow","prevArrow","nextArrow"]);y.clickHandler=i.changeSlide,i.props.arrows&&(w=Re.default.createElement(Nf.PrevArrow,y),m=Re.default.createElement(Nf.NextArrow,y));var S=null;i.props.vertical&&(S={height:i.state.listHeight});var h=null;i.props.vertical===!1?i.props.centerMode===!0&&(h={padding:"0px "+i.props.centerPadding}):i.props.centerMode===!0&&(h={padding:i.props.centerPadding+" 0px"});var p=D(D({},S),h),g=i.props.touchMove,x={className:"slick-list",style:p,onClick:i.clickHandler,onMouseDown:g?i.swipeStart:null,onMouseMove:i.state.dragging&&g?i.swipeMove:null,onMouseUp:g?i.swipeEnd:null,onMouseLeave:i.state.dragging&&g?i.swipeEnd:null,onTouchStart:g?i.swipeStart:null,onTouchMove:i.state.dragging&&g?i.swipeMove:null,onTouchEnd:g?i.touchEnd:null,onTouchCancel:i.state.dragging&&g?i.swipeEnd:null,onKeyDown:i.props.accessibility?i.keyHandler:null},O={className:l,dir:"ltr",style:i.props.style};return i.props.unslick&&(x={className:"slick-list"},O={className:l}),Re.default.createElement("div",O,i.props.unslick?"":w,Re.default.createElement("div",cl({ref:i.listRefHandler},x),Re.default.createElement(k2.Track,cl({ref:i.trackRefHandler},s),i.props.children)),i.props.unslick?"":m,i.props.unslick?"":f)}),i.list=null,i.track=null,i.state=D(D({},x2.default),{},{currentSlide:i.props.initialSlide,slideCount:Re.default.Children.count(i.props.children)}),i.callbackTimers=[],i.clickable=!0,i.debouncedResize=null;var o=i.ssrInit();return i.state=D(D({},i.state),o),i}return b2(n,[{key:"didPropsChange",value:function(i){for(var o=!1,l=0,a=Object.keys(this.props);l<a.length;l++){var s=a[l];if(!i.hasOwnProperty(s)){o=!0;break}if(!(ul(i[s])==="object"||typeof i[s]=="function")&&i[s]!==this.props[s]){o=!0;break}}return o||Re.default.Children.count(this.props.children)!==Re.default.Children.count(i.children)}}]),n}(Re.default.Component);Vl.InnerSlider=N2;var z2=function(e){return e.replace(/[A-Z]/g,function(t){return"-"+t.toLowerCase()}).toLowerCase()},$2=z2,I2=$2,A2=function(e){var t=/[height|width]$/;return t.test(e)},If=function(e){var t="",n=Object.keys(e);return n.forEach(function(r,i){var o=e[r];r=I2(r),A2(r)&&typeof o=="number"&&(o=o+"px"),o===!0?t+=r:o===!1?t+="not "+r:t+="("+r+": "+o+")",i<n.length-1&&(t+=" and ")}),t},D2=function(e){var t="";return typeof e=="string"?e:e instanceof Array?(e.forEach(function(n,r){t+=If(n),r<e.length-1&&(t+=", ")}),t):If(e)},M2=D2,zg={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=n(C);function n(o){return o&&o.__esModule?o:{default:o}}var r={accessibility:!0,adaptiveHeight:!1,afterChange:null,appendDots:function(l){return t.default.createElement("ul",{style:{display:"block"}},l)},arrows:!0,autoplay:!1,autoplaySpeed:3e3,beforeChange:null,centerMode:!1,centerPadding:"50px",className:"",cssEase:"ease",customPaging:function(l){return t.default.createElement("button",null,l+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,infinite:!0,initialSlide:0,lazyLoad:null,nextArrow:null,onEdge:null,onInit:null,onLazyLoadError:null,onReInit:null,pauseOnDotsHover:!1,pauseOnFocus:!1,pauseOnHover:!0,prevArrow:null,responsive:null,rows:1,rtl:!1,slide:"div",slidesPerRow:1,slidesToScroll:1,slidesToShow:1,speed:500,swipe:!0,swipeEvent:null,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,waitForAnimate:!0},i=r;e.default=i})(zg);var Ma,Af;function F2(){if(Af)return Ma;Af=1;function e(t){this.options=t,!t.deferSetup&&this.setup()}return e.prototype={constructor:e,setup:function(){this.options.setup&&this.options.setup(),this.initialised=!0},on:function(){!this.initialised&&this.setup(),this.options.match&&this.options.match()},off:function(){this.options.unmatch&&this.options.unmatch()},destroy:function(){this.options.destroy?this.options.destroy():this.off()},equals:function(t){return this.options===t||this.options.match===t}},Ma=e,Ma}var Fa,Df;function $g(){if(Df)return Fa;Df=1;function e(r,i){var o=0,l=r.length,a;for(o;o<l&&(a=i(r[o],o),a!==!1);o++);}function t(r){return Object.prototype.toString.apply(r)==="[object Array]"}function n(r){return typeof r=="function"}return Fa={isFunction:n,isArray:t,each:e},Fa}var Ua,Mf;function U2(){if(Mf)return Ua;Mf=1;var e=F2(),t=$g().each;function n(r,i){this.query=r,this.isUnconditional=i,this.handlers=[],this.mql=window.matchMedia(r);var o=this;this.listener=function(l){o.mql=l.currentTarget||l,o.assess()},this.mql.addListener(this.listener)}return n.prototype={constuctor:n,addHandler:function(r){var i=new e(r);this.handlers.push(i),this.matches()&&i.on()},removeHandler:function(r){var i=this.handlers;t(i,function(o,l){if(o.equals(r))return o.destroy(),!i.splice(l,1)})},matches:function(){return this.mql.matches||this.isUnconditional},clear:function(){t(this.handlers,function(r){r.destroy()}),this.mql.removeListener(this.listener),this.handlers.length=0},assess:function(){var r=this.matches()?"on":"off";t(this.handlers,function(i){i[r]()})}},Ua=n,Ua}var Ba,Ff;function B2(){if(Ff)return Ba;Ff=1;var e=U2(),t=$g(),n=t.each,r=t.isFunction,i=t.isArray;function o(){if(!window.matchMedia)throw new Error("matchMedia not present, legacy browsers require a polyfill");this.queries={},this.browserIsIncapable=!window.matchMedia("only all").matches}return o.prototype={constructor:o,register:function(l,a,s){var u=this.queries,f=s&&this.browserIsIncapable;return u[l]||(u[l]=new e(l,f)),r(a)&&(a={match:a}),i(a)||(a=[a]),n(a,function(c){r(c)&&(c={match:c}),u[l].addHandler(c)}),this},unregister:function(l,a){var s=this.queries[l];return s&&(a?s.removeHandler(a):(s.clear(),delete this.queries[l])),this}},Ba=o,Ba}var Ha,Uf;function H2(){if(Uf)return Ha;Uf=1;var e=B2();return Ha=new e,Ha}(function(e){function t(_){"@babel/helpers - typeof";return t=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(P){return typeof P}:function(P){return P&&typeof Symbol=="function"&&P.constructor===Symbol&&P!==Symbol.prototype?"symbol":typeof P},t(_)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(C),r=Vl,i=a(M2),o=a(zg),l=L;function a(_){return _&&_.__esModule?_:{default:_}}function s(){return s=Object.assign||function(_){for(var P=1;P<arguments.length;P++){var T=arguments[P];for(var M in T)Object.prototype.hasOwnProperty.call(T,M)&&(_[M]=T[M])}return _},s.apply(this,arguments)}function u(_,P){var T=Object.keys(_);if(Object.getOwnPropertySymbols){var M=Object.getOwnPropertySymbols(_);P&&(M=M.filter(function($){return Object.getOwnPropertyDescriptor(_,$).enumerable})),T.push.apply(T,M)}return T}function f(_){for(var P=1;P<arguments.length;P++){var T=arguments[P]!=null?arguments[P]:{};P%2?u(Object(T),!0).forEach(function(M){O(_,M,T[M])}):Object.getOwnPropertyDescriptors?Object.defineProperties(_,Object.getOwnPropertyDescriptors(T)):u(Object(T)).forEach(function(M){Object.defineProperty(_,M,Object.getOwnPropertyDescriptor(T,M))})}return _}function c(_,P){if(!(_ instanceof P))throw new TypeError("Cannot call a class as a function")}function v(_,P){for(var T=0;T<P.length;T++){var M=P[T];M.enumerable=M.enumerable||!1,M.configurable=!0,"value"in M&&(M.writable=!0),Object.defineProperty(_,M.key,M)}}function w(_,P,T){return P&&v(_.prototype,P),T&&v(_,T),Object.defineProperty(_,"prototype",{writable:!1}),_}function m(_,P){if(typeof P!="function"&&P!==null)throw new TypeError("Super expression must either be null or a function");_.prototype=Object.create(P&&P.prototype,{constructor:{value:_,writable:!0,configurable:!0}}),Object.defineProperty(_,"prototype",{writable:!1}),P&&y(_,P)}function y(_,P){return y=Object.setPrototypeOf||function(M,$){return M.__proto__=$,M},y(_,P)}function S(_){var P=g();return function(){var M=x(_),$;if(P){var z=x(this).constructor;$=Reflect.construct(M,arguments,z)}else $=M.apply(this,arguments);return h(this,$)}}function h(_,P){if(P&&(t(P)==="object"||typeof P=="function"))return P;if(P!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return p(_)}function p(_){if(_===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return _}function g(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function x(_){return x=Object.setPrototypeOf?Object.getPrototypeOf:function(T){return T.__proto__||Object.getPrototypeOf(T)},x(_)}function O(_,P,T){return P in _?Object.defineProperty(_,P,{value:T,enumerable:!0,configurable:!0,writable:!0}):_[P]=T,_}var k=(0,l.canUseDOM)()&&H2(),E=function(_){m(T,_);var P=S(T);function T(M){var $;return c(this,T),$=P.call(this,M),O(p($),"innerSliderRefHandler",function(z){return $.innerSlider=z}),O(p($),"slickPrev",function(){return $.innerSlider.slickPrev()}),O(p($),"slickNext",function(){return $.innerSlider.slickNext()}),O(p($),"slickGoTo",function(z){var Ge=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;return $.innerSlider.slickGoTo(z,Ge)}),O(p($),"slickPause",function(){return $.innerSlider.pause("paused")}),O(p($),"slickPlay",function(){return $.innerSlider.autoPlay("play")}),$.state={breakpoint:null},$._responsiveMediaHandlers=[],$}return w(T,[{key:"media",value:function($,z){k.register($,z),this._responsiveMediaHandlers.push({query:$,handler:z})}},{key:"componentDidMount",value:function(){var $=this;if(this.props.responsive){var z=this.props.responsive.map(function(ue){return ue.breakpoint});z.sort(function(ue,Pe){return ue-Pe}),z.forEach(function(ue,Pe){var Ie;Pe===0?Ie=(0,i.default)({minWidth:0,maxWidth:ue}):Ie=(0,i.default)({minWidth:z[Pe-1]+1,maxWidth:ue}),(0,l.canUseDOM)()&&$.media(Ie,function(){$.setState({breakpoint:ue})})});var Ge=(0,i.default)({minWidth:z.slice(-1)[0]});(0,l.canUseDOM)()&&this.media(Ge,function(){$.setState({breakpoint:null})})}}},{key:"componentWillUnmount",value:function(){this._responsiveMediaHandlers.forEach(function($){k.unregister($.query,$.handler)})}},{key:"render",value:function(){var $=this,z,Ge;this.state.breakpoint?(Ge=this.props.responsive.filter(function(ge){return ge.breakpoint===$.state.breakpoint}),z=Ge[0].settings==="unslick"?"unslick":f(f(f({},o.default),this.props),Ge[0].settings)):z=f(f({},o.default),this.props),z.centerMode&&(z.slidesToScroll>1,z.slidesToScroll=1),z.fade&&(z.slidesToShow>1,z.slidesToScroll>1,z.slidesToShow=1,z.slidesToScroll=1);var ue=n.default.Children.toArray(this.props.children);ue=ue.filter(function(ge){return typeof ge=="string"?!!ge.trim():!!ge}),z.variableWidth&&(z.rows>1||z.slidesPerRow>1)&&(console.warn("variableWidth is not supported in case of rows > 1 or slidesPerRow > 1"),z.variableWidth=!1);for(var Pe=[],Ie=null,R=0;R<ue.length;R+=z.rows*z.slidesPerRow){for(var A=[],I=R;I<R+z.rows*z.slidesPerRow;I+=z.slidesPerRow){for(var V=[],K=I;K<I+z.slidesPerRow&&(z.variableWidth&&ue[K].props.style&&(Ie=ue[K].props.style.width),!(K>=ue.length));K+=1)V.push(n.default.cloneElement(ue[K],{key:100*R+10*I+K,tabIndex:-1,style:{width:"".concat(100/z.slidesPerRow,"%"),display:"inline-block"}}));A.push(n.default.createElement("div",{key:10*R+I},V))}z.variableWidth?Pe.push(n.default.createElement("div",{key:R,style:{width:Ie}},A)):Pe.push(n.default.createElement("div",{key:R},A))}if(z==="unslick"){var mt="regular slider "+(this.props.className||"");return n.default.createElement("div",{className:mt},ue)}else Pe.length<=z.slidesToShow&&(z.unslick=!0);return n.default.createElement(r.InnerSlider,s({style:this.props.style,ref:this.innerSliderRefHandler},z),Pe)}}]),T}(n.default.Component);e.default=E})(ug);(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=n(ug);function n(i){return i&&i.__esModule?i:{default:i}}var r=t.default;e.default=r})(sg);const ur=Bf(sg);const W2=ae.div`
 

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
`,V2=ae.div`

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



`,q2=ae.button`
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



`;function At({to:e,title:t,...n}){return d.jsx(q2,{...n,children:t})}function Un({id:e,img:t,food:n,description:r,price:i,onIncludeAmount:o,...l}){const[a,s]=C.useState(1),u=()=>{s(a+1)},f=()=>{a>1&&s(a-1)},[c,v]=C.useState(!1),w=()=>{v(!c)},m=()=>{o(a)};return d.jsx(V2,{children:d.jsxs("div",{className:"itens",children:[d.jsx("button",{className:"BgNone",id:"favorite",onClick:w,children:d.jsx("svg",{width:"26",height:"24",fill:"white",viewBox:"0 0 26 24",xmlns:"http://www.w3.org/2000/svg",children:d.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M16.431 0.547789C17.3245 0.160119 18.2845 -0.0261067 19.2515 0.00322722C20.2184 0.0325601 21.1665 0.276652 22.0374 0.71713C22.9076 1.15726 23.68 1.78296 24.3106 2.5511C26.8405 5.6197 26.4109 10.3056 23.8142 13.1522L23.8125 13.154L14.4368 23.38L13.6996 22.7041L14.4335 23.3835C14.0785 23.767 13.5797 24.0002 13.0399 24.0002C12.5001 24.0002 12.0013 23.767 11.6463 23.3835L11.6431 23.38L2.02427 12.8889L2.02403 12.8886C1.35437 12.1577 0.832743 11.2904 0.48681 10.342C0.140901 9.39356 -0.0232599 8.3808 0.00265199 7.36472C0.0285639 6.34864 0.244109 5.34672 0.638319 4.41957C1.03241 3.49272 1.59804 2.65724 2.30497 1.96679C5.18795 -0.860732 9.62203 -0.352917 12.259 2.50881L12.2632 2.51343L12.2632 2.51344L13.0403 3.36745L14.06 2.24794L14.0625 2.24526C14.7328 1.51465 15.5378 0.935316 16.431 0.547789ZM13.0399 21.9441L22.3366 11.8042C22.3369 11.8039 22.3373 11.8035 22.3376 11.8032C24.3465 9.60003 24.588 6.03087 22.7669 3.8227L22.7654 3.82087C22.3047 3.25957 21.7488 2.81242 21.1347 2.50182C20.5209 2.19139 19.8597 2.0226 19.1908 2.00231C18.5219 1.98202 17.8541 2.11046 17.227 2.38253C16.6001 2.65453 16.0243 3.06573 15.5373 3.59614C15.5369 3.59655 15.5365 3.59697 15.5361 3.59739L13.7792 5.52629C13.5896 5.7344 13.3211 5.85297 13.0396 5.8529C12.7582 5.85283 12.4897 5.73411 12.3003 5.5259L10.7861 3.86185C8.79329 1.70132 5.65945 1.47753 3.70476 3.39528L3.70304 3.39697L3.70304 3.39697C3.19108 3.89682 2.77308 4.51016 2.47886 5.20215C2.1846 5.89422 2.02159 6.64762 2.002 7.41571C1.98241 8.18381 2.10676 8.94661 2.36574 9.65666C2.62465 10.3665 3.0115 11.0057 3.49845 11.5373C3.49853 11.5374 3.49861 11.5375 3.49869 11.5376L13.0399 21.9441Z",fill:c?"red":"white"})})}),d.jsx("img",{id:"foodImg",src:t}),d.jsx(we,{to:`/food/${e}`,children:d.jsx("p",{id:"foodName",children:n})}),d.jsx("p",{id:"descriptionCard",children:r}),d.jsxs("p",{id:"price",children:[" R$ ",i," "]}),d.jsx("div",{className:"hideInclud",children:d.jsxs("div",{className:"flex",children:[d.jsxs("div",{id:"amountCard",children:[d.jsx("button",{className:"BgNone",onClick:f,children:d.jsx("img",{src:tu,alt:""})}),d.jsx("p",{children:String(a).padStart(2,"0")}),d.jsx("button",{className:"BgNone",onClick:u,children:d.jsx("img",{src:nu,alt:""})})]}),d.jsx(At,{onClick:m,id:"include",title:"incluir"})]})}),d.jsxs("div",{className:"wrapperInclud",children:[d.jsxs("div",{id:"amountCard",children:[d.jsx("button",{className:"BgNone",onClick:f,children:d.jsx("img",{src:tu,alt:""})}),d.jsx("p",{children:String(a).padStart(2,"0")}),d.jsx("button",{className:"BgNone",onClick:u,children:d.jsx("img",{src:nu,alt:""})})]}),d.jsx(At,{onClick:m,id:"include",title:"incluir"})]})]})})}const Ig="/Food_explorer-Front/assets/right-arrow-15f6c38c.svg",Ag="/Food_explorer-Front/assets/left-arrow-83916914.svg",Dg="/Food_explorer-Front/assets/fruits-85ea2fcf.svg",Q2=e=>d.jsx("div",{...e,style:{...Mg,left:"-20px"},children:d.jsx("img",{src:Ag,alt:"Seta para a esquerda"})}),K2=e=>d.jsx("div",{...e,style:{...Mg,right:"-20px"},children:d.jsx("img",{src:Ig,alt:"Seta para a direita"})}),Mg={fontSize:0,lineHeight:0,position:"absolute",top:"50%",transform:"translate(0, -50%)",width:"20px",height:"20px",cursor:"pointer",opacity:.75,zIndex:1};function G2(){const[e,t]=C.useState(0),n=h=>{t(p=>p+h)},[r,i]=C.useState([]),[o,l]=C.useState([]),[a,s]=C.useState([]),[u,f]=C.useState(""),[c,v]=C.useState([]),[w,m]=C.useState(window.innerWidth),y=h=>{f(h)};C.useEffect(()=>{Ne.get("/foods").then(h=>{const p=h.data,g=p.filter(k=>k.category==="Refeições"),x=p.filter(k=>k.category==="Sobremesas"),O=p.filter(k=>k.category==="Bebidas");i(g),l(x),s(O)}).catch(h=>{console.error("Erro ao obter dados das comidas:",h)})},[]),C.useEffect(()=>{const h=r.filter(x=>x.title.toLowerCase().includes(u.toLowerCase())),p=o.filter(x=>x.title.toLowerCase().includes(u.toLowerCase())),g=a.filter(x=>x.title.toLowerCase().includes(u.toLowerCase()));v(x=>({...x,refeicoes:h,sobremesas:p,bebidas:g}))},[u,r,o,a]),C.useEffect(()=>{const h=()=>{m(window.innerWidth)};return window.addEventListener("resize",h),()=>{window.removeEventListener("resize",h)}},[]);const S={dots:!0,infinite:!0,speed:500,slidesToShow:3,slidesToScroll:1,prevArrow:d.jsx(Q2,{}),nextArrow:d.jsx(K2,{})};return d.jsxs(W2,{children:[d.jsx(ag,{totalAmount:e,setTotalAmount:t,onSearch:y}),d.jsxs("main",{children:[d.jsxs("section",{children:[d.jsx("img",{src:Dg,alt:"Frutas decorativas "}),d.jsxs("div",{id:"text",children:[d.jsx("h5",{children:"Sabores inigualáveis"}),d.jsx("p",{children:"Sinta o cuidado do preparo com ingredientes selecionados."})]})]}),d.jsx("p",{className:"category",children:"Refeições"}),w>=1080?d.jsxs(ur,{...S,children:[c.refeicoes&&c.refeicoes.map((h,p)=>d.jsx(Un,{img:`https://api-food-explorer-k28p.onrender.com/files/${h.avatar}`,id:h.id,food:h.title,description:h.description,price:h.price,onIncludeAmount:n},h.id)),c.refeicoes&&c.refeicoes.length<S.slidesToShow&&Array.from({length:S.slidesToShow-c.refeicoes.length}).map((h,p)=>d.jsx("div",{},`empty-${p}`))]}):d.jsxs("div",{className:"cards",children:[c.refeicoes&&c.refeicoes.map((h,p)=>d.jsx(Un,{img:`https://api-food-explorer-k28p.onrender.com/files/${h.avatar}`,id:h.id,food:h.title,description:h.description,price:h.price,onIncludeAmount:n},h.id)),c.refeicoes&&c.refeicoes.length<S.slidesToShow&&Array.from({length:S.slidesToShow-c.refeicoes.length}).map((h,p)=>d.jsx("div",{},`empty-${p}`))]}),d.jsx("p",{className:"category",children:"Sobremesas"}),w>=1080?d.jsxs(ur,{...S,children:[c.sobremesas&&c.sobremesas.map((h,p)=>d.jsx(Un,{img:`https://api-food-explorer-k28p.onrender.com/files/${h.avatar}`,id:h.id,food:h.title,description:h.description,price:h.price,onIncludeAmount:n},h.id)),c.sobremesas&&c.sobremesas.length<S.slidesToShow&&Array.from({length:S.slidesToShow-c.sobremesas.length}).map((h,p)=>d.jsx("div",{},`empty-${p}`))]}):d.jsxs("div",{className:"cards",children:[c.sobremesas&&c.sobremesas.map((h,p)=>d.jsx(Un,{img:`https://api-food-explorer-k28p.onrender.com/files/${h.avatar}`,id:h.id,food:h.title,description:h.description,price:h.price,onIncludeAmount:n},h.id)),c.sobremesas&&c.sobremesas.length<S.slidesToShow&&Array.from({length:S.slidesToShow-c.sobremesas.length}).map((h,p)=>d.jsx("div",{},`empty-${p}`))]}),d.jsx("p",{className:"category",children:"Bebidas"}),w>=1080?d.jsxs(ur,{...S,children:[c.bebidas&&c.bebidas.map((h,p)=>d.jsx(Un,{img:`https://api-food-explorer-k28p.onrender.com/files/${h.avatar}`,id:h.id,food:h.title,description:h.description,price:h.price,onIncludeAmount:n},h.id)),c.bebidas&&c.bebidas.length<S.slidesToShow&&Array.from({length:S.slidesToShow-c.bebidas.length}).map((h,p)=>d.jsx("div",{},`empty-${p}`))]}):d.jsxs("div",{className:"cards",children:[c.bebidas&&c.bebidas.map((h,p)=>d.jsx(Un,{img:`https://api-food-explorer-k28p.onrender.com/files/${h.avatar}`,id:h.id,food:h.title,description:h.description,price:h.price,onIncludeAmount:n},h.id)),c.bebidas&&c.bebidas.length<S.slidesToShow&&Array.from({length:S.slidesToShow-c.bebidas.length}).map((h,p)=>d.jsx("div",{},`empty-${p}`))]})]}),d.jsx(gn,{})]})}function Y2(){return d.jsxs(Ec,{children:[d.jsx(ct,{path:"/",element:d.jsx(G2,{})}),d.jsx(ct,{path:"/menu",element:d.jsx(Bw,{})}),d.jsx(ct,{path:"/Food/:id",element:d.jsx(Qw,{})})]})}const X2=ae.div`

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



`;function J2(){const[e,t]=C.useState(""),[n,r]=C.useState(""),[i,o]=C.useState(""),l=mn();function a(){if(!e||!n||!i)return alert("Preencha todos os campos !");Ne.post("/users",{name:e,email:n,password:i}).then(()=>{alert("Usuario cadastrado com sucesso"),l("/")}).catch(s=>{s.response?alert(s.response.data.message):alert("Não foi possivel cadastrar")})}return d.jsxs(X2,{children:[d.jsxs("header",{children:[d.jsx("img",{src:Ci,alt:"logo"}),d.jsx("h1",{children:"food explorer"})]}),d.jsxs("main",{children:[d.jsx("h2",{children:"Crie sua conta"}),d.jsxs("form",{action:"",children:[d.jsx(sn,{id:"name",label:"Seu nome",placeholder:"Exemplo: Maria da Silva",onChange:s=>t(s.target.value)}),d.jsx(sn,{id:"email",label:"Email",placeholder:"Exemplo: exemplo@exemplo.com.br",onChange:s=>r(s.target.value)}),d.jsx(sn,{type:"password",id:"senha",label:"Senha",placeholder:"No mínimo 6 caracteres",onChange:s=>o(s.target.value)}),d.jsx(At,{type:"button",title:"Entrar",onClick:a})]}),d.jsx(we,{to:"/",children:"Já tenho uma conta"})]})]})}const Z2=ae.div`

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



`;function ek(){const[e,t]=C.useState(""),[n,r]=C.useState(""),{signIn:i}=Pr();function o(){i({email:e,password:n})}return d.jsxs(Z2,{children:[d.jsxs("header",{children:[d.jsx("img",{src:Ci,alt:"logo"}),d.jsx("h1",{children:"food explorer"})]}),d.jsxs("main",{children:[d.jsx("h2",{children:"Faça login"}),d.jsxs("form",{children:[d.jsx(sn,{id:"email",label:"Email",placeholder:"Exemplo: exemplo@exemplo.com.br",onChange:l=>t(l.target.value)}),d.jsx(sn,{type:"password",id:"senha",label:"Senha",placeholder:"No mínimo 6 caracteres",onChange:l=>r(l.target.value)}),d.jsx(At,{type:"button",title:"Entrar",onClick:o})]}),d.jsx(we,{to:"/register",children:"Criar uma conta"})]})]})}function tk(){return d.jsxs(Ec,{children:[d.jsx(ct,{path:"/",element:d.jsx(ek,{})}),d.jsx(ct,{path:"/register",element:d.jsx(J2,{})})]})}const nk=ae.header`

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


`;function Xl({onSearch:e}){const t=mn();function n(){t("/new")}const{singOut:r}=Pr(),[i,o]=C.useState(""),[l,a]=C.useState([]),s=async()=>{try{const u=await Ne.get(`/foods?term=${i}`);a(u.data),e(i)}catch(u){console.error("Erro ao realizar a pesquisa:",u)}};return C.useEffect(()=>{s()},[i]),d.jsxs(nk,{children:[d.jsx(we,{to:"/menu",id:"btnOptions",children:d.jsx("img",{src:lg,alt:"Imagem de opções de menu da Home"})}),d.jsxs("div",{className:"title",children:[d.jsx(we,{to:"/",children:d.jsxs("div",{id:"titleMobile",children:[d.jsx("img",{src:Ci,alt:"Logo do app"}),d.jsx("h1",{children:"food explorer"})]})}),d.jsx("p",{id:"adm",children:"admin"})]}),d.jsxs("div",{className:"wrapper",id:"headerDetails",children:[d.jsx("div",{id:"headerSearch",children:d.jsxs("div",{className:"searchItens",children:[d.jsx("img",{src:Hl,alt:""}),d.jsx("input",{type:"text",placeholder:"Busque por pratos ou ingredientes",onChange:u=>o(u.target.value)})]})}),d.jsx(At,{id:"btnNew",title:"Novo prato",onClick:n}),d.jsx(we,{to:"/",id:"LogOut",children:d.jsx("img",{src:og,alt:"",onClick:r})})]})]})}const rk=ae.form`
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









`,ik=ae.div`


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











`,ok="/Food_explorer-Front/assets/open-ef805be0.svg";function fl({isNew:e,value:t,onClick:n,...r}){return d.jsxs(ik,{isNew:e,children:[d.jsx("input",{type:"text",value:t,readOnly:!e,...r}),d.jsx("button",{type:"button",onClick:n,className:e?"button-add":"button-delete",children:e?d.jsx("img",{src:ok,alt:""}):d.jsx("img",{src:jc})})]})}const Fg="/Food_explorer-Front/assets/update-7ba38ef5.svg";function lk(){const e=mn(),[t,n]=C.useState([]),[r,i]=C.useState(""),[o,l]=C.useState(""),[a,s]=C.useState(""),[u,f]=C.useState(""),[c,v]=C.useState(""),[w,m]=C.useState(null),y=_c();function S(){n(x=>[...x,r]),i("")}function h(x){n(O=>O.filter(k=>k!==x))}async function p(){const x=new FormData;x.append("avatar",w),x.append("title",o),x.append("description",a),x.append("category",c),x.append("price",u),(Array.isArray(t)?t:[t]).forEach((k,E)=>{x.append(`ingredient[${E}]`,k)}),await Ne.put(`/foods/${y.id}`,x).then(alert("atualizado com sucesso")).catch(k=>{k.response?alert(k.response.data.message):alert("Erro ao atualizar o prato")})}async function g(){window.confirm("Deseja realmente deletar esse prato")&&(await Ne.delete(`/foods/${y.id}`),alert("Deletado com sucesso"),e("/"))}return d.jsxs(rk,{children:[d.jsx("section",{children:d.jsxs("div",{className:"lineOne",children:[d.jsxs("div",{className:"flex",children:[d.jsx("label",{htmlFor:"image",children:"Imagem do prato"}),d.jsxs("label",{htmlFor:"image",id:"labelUpdate",children:[d.jsx("input",{id:"image",type:"file",onChange:x=>m(x.target.files[0])}),d.jsx("img",{src:Fg,alt:""}),"Selecione imagem"]})]}),d.jsx("div",{className:"nameWidht",children:d.jsxs("div",{className:"flex",children:[d.jsx("label",{htmlFor:"name",children:"Nome"}),d.jsx("input",{id:"name",type:"text",placeholder:"Ex.: Salada Ceasar",onChange:x=>l(x.target.value)})]})}),d.jsxs("div",{className:"flex",children:[d.jsx("label",{htmlFor:"category",children:"Categoria"}),d.jsxs("select",{name:"opçoes",id:"category",onChange:x=>v(x.target.value),children:[d.jsx("option",{value:"Refeições",children:"Selecione a categoria"}),d.jsx("option",{value:"Refeições",children:"Refeições"}),d.jsx("option",{value:"Sobremesas",children:"Sobremesas"}),d.jsx("option",{value:"Bebidas",children:"Bebidas"})]})]})]})}),d.jsx("section",{children:d.jsxs("div",{className:"lineTwo",children:[d.jsxs("div",{id:"widhtIngredient",className:"flex",children:[d.jsx("label",{htmlFor:"ingredients",children:"Ingredientes"}),d.jsxs("div",{id:"ingredients",children:[t.map((x,O)=>d.jsx(fl,{value:x,onClick:()=>h(x)},String(O))),d.jsx(fl,{isNew:!0,placeholder:"Adicionar",value:r,onChange:x=>i(x.target.value),onClick:S})]})]}),d.jsxs("div",{className:"flex",children:[d.jsx("label",{htmlFor:"price",children:"Preço"}),d.jsx("input",{id:"price",placeholder:"R$ 00,00",type:"text",onChange:x=>f(x.target.value)})]})]})}),d.jsx("label",{htmlFor:"description",children:"Descrição"}),d.jsx("textarea",{name:"descrição",id:"description",cols:"30",rows:"7",placeholder:"A Salada César é uma opção refrescante para o verão.",onChange:x=>s(x.target.value)}),d.jsxs("div",{id:"Buttons",children:[d.jsx(At,{type:"button",title:"Excluir prato",onClick:g}),d.jsx(At,{type:"button",className:"btn",title:"Salvar alterações",onClick:p})]})]})}const ak=ae.div`
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
`;function sk(){return d.jsxs(ak,{children:[d.jsx(Xl,{}),d.jsxs("div",{className:"edit",children:[d.jsx(Wl,{}),d.jsx("h1",{children:"Editar Prato"})]}),d.jsx(lk,{}),d.jsx(gn,{})]})}const uk=ae.div`



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




`;function ck(){const e=mn(),t=_c(),[n,r]=C.useState({id:"",avatar:"",title:"",description:"",ingredients:[]});function i(){e(`/edit/${t.id}`)}return C.useEffect(()=>{Ne.get(`/foods/${t.id}`).then(o=>{const{id:l,avatar:a,title:s,description:u,ingredients:f}=o.data,c=`https://api-food-explorer-k28p.onrender.com/files/${a}`;r({id:l,avatar:c,title:s,description:u,ingredients:f})}).catch(o=>{console.error("erro ao obter dados do produto",o)})},[t.id]),d.jsxs(uk,{children:[d.jsx(Xl,{}),d.jsxs("main",{children:[d.jsx(Wl,{}),d.jsxs("div",{className:"detailsFood",children:[d.jsx("img",{id:"imgFood",src:n.avatar,alt:"imagem do prato"}),d.jsxs("div",{className:"detailsRequest",children:[d.jsxs("div",{className:"recipe",children:[d.jsx("h2",{children:n.title}),d.jsx("p",{id:"description",children:n.description}),d.jsx("section",{children:n.ingredients.map((o,l)=>d.jsx("div",{id:"ingredient",children:o},l))})]}),d.jsx(At,{id:"editBtn",title:"Editar Prato",onClick:i})]})]})]}),d.jsx(gn,{})]})}const dk=ae.div`
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
`,fk=ae.div`
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
`,pk="/Food_explorer-Front/assets/pen-f9401275.svg";function Bn({id:e,img:t,food:n,description:r,price:i}){return d.jsx(fk,{children:d.jsxs("div",{className:"itens",children:[d.jsx(we,{to:`/edit/${e}`,className:"BgNone",children:d.jsx("img",{id:"penEdit",src:pk,alt:"icone de editar comida"})}),d.jsx("img",{id:"foodImg",src:t}),d.jsx(we,{to:`/food/${e}`,children:d.jsx("p",{id:"foodName",children:n})}),d.jsx("p",{id:"descriptionCard",children:r}),d.jsxs("p",{id:"price",children:[" R$ ",i," "]})]})})}const hk=e=>d.jsx("div",{...e,style:{...Ug,left:"-20px"},children:d.jsx("img",{src:Ag,alt:"Seta para a esquerda"})}),mk=e=>d.jsx("div",{...e,style:{...Ug,right:"-20px"},children:d.jsx("img",{src:Ig,alt:"Seta para a direita"})}),Ug={fontSize:0,lineHeight:0,position:"absolute",top:"50%",transform:"translate(0, -50%)",width:"20px",height:"20px",cursor:"pointer",opacity:.75,zIndex:1};function gk(){const[e,t]=C.useState([]),[n,r]=C.useState([]),[i,o]=C.useState([]),[l,a]=C.useState(""),[s,u]=C.useState([]),[f,c]=C.useState(window.innerWidth),v=m=>{a(m)};C.useEffect(()=>{Ne.get("/foods").then(m=>{const y=m.data,S=y.filter(g=>g.category==="Refeições"),h=y.filter(g=>g.category==="Sobremesas"),p=y.filter(g=>g.category==="Bebidas");t(S),r(h),o(p)}).catch(m=>{console.error("Erro ao obter dados das comidas:",m)})},[]),C.useEffect(()=>{const m=e.filter(h=>h.title.toLowerCase().includes(l.toLowerCase())),y=n.filter(h=>h.title.toLowerCase().includes(l.toLowerCase())),S=i.filter(h=>h.title.toLowerCase().includes(l.toLowerCase()));u({refeicoes:m,sobremesas:y,bebidas:S})},[l,e,n,i]),C.useEffect(()=>{const m=()=>{c(window.innerWidth)};return window.addEventListener("resize",m),()=>{window.removeEventListener("resize",m)}},[]);const w={dots:!0,infinite:!0,speed:500,slidesToShow:3,slidesToScroll:1,prevArrow:d.jsx(hk,{}),nextArrow:d.jsx(mk,{})};return d.jsxs(dk,{children:[d.jsx(Xl,{onSearch:v}),d.jsxs("main",{children:[d.jsxs("section",{children:[d.jsx("img",{src:Dg,alt:"Frutas decorativas "}),d.jsxs("div",{id:"text",children:[d.jsx("h5",{children:"Sabores inigualáveis"}),d.jsx("p",{children:"Sinta o cuidado do preparo com ingredientes selecionados."})]})]}),d.jsx("p",{className:"category",children:"Refeições"}),f>=1080?d.jsxs(ur,{...w,children:[s.refeicoes&&s.refeicoes.map((m,y)=>d.jsx(Bn,{img:`https://api-food-explorer-k28p.onrender.com/files/${m.avatar}`,id:m.id,food:m.title,description:m.description,price:m.price},m.id)),s.refeicoes&&s.refeicoes.length<w.slidesToShow&&Array.from({length:w.slidesToShow-s.refeicoes.length}).map((m,y)=>d.jsx("div",{},`empty-${y}`))]}):d.jsxs("div",{className:"cards",children:[s.refeicoes&&s.refeicoes.map((m,y)=>d.jsx(Bn,{img:`https://api-food-explorer-k28p.onrender.com/files/${m.avatar}`,id:m.id,food:m.title,description:m.description,price:m.price},m.id)),s.refeicoes&&s.refeicoes.length<w.slidesToShow&&Array.from({length:w.slidesToShow-s.refeicoes.length}).map((m,y)=>d.jsx("div",{},`empty-${y}`))]}),d.jsx("p",{className:"category",children:"Sobremesas"}),f>=1080?d.jsxs(ur,{...w,children:[s.sobremesas&&s.sobremesas.map((m,y)=>d.jsx(Bn,{img:`https://api-food-explorer-k28p.onrender.com/files/${m.avatar}`,id:m.id,food:m.title,description:m.description,price:m.price},m.id)),s.sobremesas&&s.sobremesas.length<w.slidesToShow&&Array.from({length:w.slidesToShow-s.sobremesas.length}).map((m,y)=>d.jsx("div",{},`empty-${y}`))]}):d.jsxs("div",{className:"cards",children:[s.sobremesas&&s.sobremesas.map((m,y)=>d.jsx(Bn,{img:`https://api-food-explorer-k28p.onrender.com/files/${m.avatar}`,id:m.id,food:m.title,description:m.description,price:m.price},m.id)),s.sobremesas&&s.sobremesas.length<w.slidesToShow&&Array.from({length:w.slidesToShow-s.sobremesas.length}).map((m,y)=>d.jsx("div",{},`empty-${y}`))]}),d.jsx("p",{className:"category",children:"Bebidas"}),f>=1080?d.jsxs(ur,{...w,children:[s.bebidas&&s.bebidas.map((m,y)=>d.jsx(Bn,{img:`https://api-food-explorer-k28p.onrender.com/files/${m.avatar}`,id:m.id,food:m.title,description:m.description,price:m.price},m.id)),s.bebidas&&s.bebidas.length<w.slidesToShow&&Array.from({length:w.slidesToShow-s.bebidas.length}).map((m,y)=>d.jsx("div",{},`empty-${y}`))]}):d.jsxs("div",{className:"cards",children:[s.bebidas&&s.bebidas.map((m,y)=>d.jsx(Bn,{img:`https://api-food-explorer-k28p.onrender.com/files/${m.avatar}`,id:m.id,food:m.title,description:m.description,price:m.price},m.id)),s.bebidas&&s.bebidas.length<w.slidesToShow&&Array.from({length:w.slidesToShow-s.bebidas.length}).map((m,y)=>d.jsx("div",{},`empty-${y}`))]})]}),d.jsx(gn,{})]})}const vk=ae.div`
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
`;function yk(){const{singOut:e}=Pr(),t=mn(),[n,r]=C.useState(""),[i,o]=C.useState([]),[l,a]=C.useState(null),s=async()=>{try{const f=await Ne.get(`/foods?term=${n}`);o(f.data),a(null)}catch(f){console.error("Erro ao realizar a pesquisa:",f),o([]),a("Nenhum resultado encontrado.")}},u=f=>{t(`/food/${f}`)};return C.useEffect(()=>{n.trim()!==""?s():(o([]),a(null))},[n]),d.jsxs(vk,{children:[d.jsxs("header",{children:[d.jsx(we,{to:"/",children:d.jsx("img",{src:jc,alt:"Imagem para fechar Menu"})}),d.jsx("p",{children:"Menu"})]}),d.jsxs("main",{children:[d.jsxs("div",{className:"search",children:[d.jsx("img",{src:Hl,alt:"Imagem de lupa de pesquisa"}),d.jsx(sn,{placeholder:"Busque por pratos ou ingredientes",onChange:f=>r(f.target.value)})]}),i.length>0&&d.jsx("ul",{children:i.map(f=>d.jsx("li",{onClick:()=>u(f.id),children:f.title},f.id))}),i.length===0&&n.trim()!==""&&d.jsx("p",{id:"Error",children:l||"Nenhum resultado encontrado."}),d.jsxs("section",{children:[d.jsx(we,{to:"/new",children:"Novo prato"}),d.jsx(we,{to:"/",onClick:e,children:"Sair"})]})]}),d.jsx(gn,{})]})}const xk=ae.form`
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









`;function wk(){const[e,t]=C.useState(""),[n,r]=C.useState(""),[i,o]=C.useState(""),[l,a]=C.useState(""),[s,u]=C.useState(null),[f,c]=C.useState([]),[v,w]=C.useState(""),m=mn();function y(){c(p=>[...p,v]),w("")}function S(p){c(g=>g.filter(x=>x!==p))}async function h(){if(!s)return alert("Você não inseriu a imagem do prato");if(!e)return alert("Você não inseriu o titulo do prato");if(!l)return alert("Você não inseriu a categoria do prato");if(f.length<1)return alert("Você precisa pelo menos inserir um ingrediente");if(!i)return alert("Você não inseriu o valor do prato");if(!n)return alert("Você não inseriu a descrição do prato");const p=new FormData;p.append("avatar",s),p.append("title",e),p.append("description",n),p.append("category",l),p.append("price",i),(Array.isArray(f)?f:[f]).forEach((x,O)=>{p.append(`ingredient[${O}]`,x)}),await Ne.post("/foods",p).then(alert("Criado com sucesso"),m("/")).catch(x=>{x.response?alert(x.response.data.message):alert("Erro ao criar o prato")})}return d.jsxs(xk,{encType:"multipart/form-data",children:[d.jsx("section",{children:d.jsxs("div",{className:"lineOne",children:[d.jsxs("div",{className:"flex",children:[d.jsx("label",{htmlFor:"image",children:"Imagem do prato"}),d.jsxs("label",{htmlFor:"image",id:"labelUpdate",children:[d.jsx("input",{id:"image",type:"file",name:"avatar",accept:"image/*",onChange:p=>u(p.target.files[0])}),d.jsx("img",{src:Fg,alt:""}),"Selecione imagem"]})]}),d.jsx("div",{className:"nameWidht",children:d.jsxs("div",{className:"flex",children:[d.jsx("label",{htmlFor:"name",children:"Nome"}),d.jsx("input",{id:"name",type:"text",placeholder:"Ex.: Salada Ceasar",onChange:p=>t(p.target.value)})]})}),d.jsxs("div",{className:"flex",children:[d.jsx("label",{htmlFor:"category",children:"Categoria"}),d.jsxs("select",{name:"opçoes",id:"category",onChange:p=>a(p.target.value),children:[d.jsx("option",{value:"",children:"Selecione a categoria"}),d.jsx("option",{value:"Refeições",children:"Refeições"}),d.jsx("option",{value:"Sobremesas",children:"Sobremesas"}),d.jsx("option",{value:"Bebidas",children:"Bebidas"})]})]})]})}),d.jsx("section",{children:d.jsxs("div",{className:"lineTwo",children:[d.jsxs("div",{id:"widhtIngredient",className:"flex",children:[d.jsx("label",{htmlFor:"ingredients",children:"Ingredientes"}),d.jsxs("div",{id:"ingredients",children:[f.map((p,g)=>d.jsx(fl,{value:p,onClick:()=>S(p)},String(g))),d.jsx(fl,{isNew:!0,placeholder:"Adicionar",value:v,onChange:p=>w(p.target.value),onClick:y})]})]}),d.jsxs("div",{className:"flex",children:[d.jsx("label",{htmlFor:"price",children:"Preço"}),d.jsx("input",{id:"price",placeholder:"R$ 00,00",type:"text",onChange:p=>o(p.target.value)})]})]})}),d.jsx("label",{htmlFor:"description",children:"Descrição"}),d.jsx("textarea",{name:"descrição",id:"description",cols:"30",rows:"7",placeholder:"A Salada César é uma opção refrescante para o verão.",onChange:p=>r(p.target.value)}),d.jsx("div",{id:"btnSave",children:d.jsx(At,{onClick:h,className:"btn",title:"Salvar alterações",type:"button"})})]})}const Sk=ae.div`



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





`;function kk(){return d.jsxs(Sk,{children:[d.jsx(Xl,{}),d.jsxs("div",{className:"new",children:[d.jsx(Wl,{}),d.jsx("h1",{children:"Novo Prato"})]}),d.jsx(wk,{}),d.jsx(gn,{})]})}function Ok(){return d.jsxs(Ec,{children:[d.jsx(ct,{path:"/",element:d.jsx(gk,{})}),d.jsx(ct,{path:"/food/:id",element:d.jsx(ck,{})}),d.jsx(ct,{path:"/edit/:id",element:d.jsx(sk,{})}),d.jsx(ct,{path:"/menu",element:d.jsx(yk,{})}),d.jsx(ct,{path:"/new",element:d.jsx(kk,{})})]})}function Ck(){const{user:e}=Pr(),t=e&&e.email==="gabriel@gmail.com";return d.jsx(zw,{children:t?d.jsx(Ok,{}):e?d.jsx(Y2,{}):d.jsx(tk,{})})}Wa.createRoot(document.getElementById("root")).render(d.jsx(C.StrictMode,{children:d.jsxs(g1,{theme:g0,children:[d.jsx(w1,{}),d.jsx(Mx,{children:d.jsx(Ck,{})})]})}));
