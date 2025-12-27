(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function t(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(s){if(s.ep)return;s.ep=!0;const o=t(s);fetch(s.href,o)}})();function ny(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var _d={exports:{}},ko={},yd={exports:{}},St={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ov;function WE(){if(Ov)return St;Ov=1;var r=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),n=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),o=Symbol.for("react.provider"),l=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),m=Symbol.iterator;function v(O){return O===null||typeof O!="object"?null:(O=m&&O[m]||O["@@iterator"],typeof O=="function"?O:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,M={};function S(O,ne,Oe){this.props=O,this.context=ne,this.refs=M,this.updater=Oe||y}S.prototype.isReactComponent={},S.prototype.setState=function(O,ne){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,ne,"setState")},S.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function _(){}_.prototype=S.prototype;function R(O,ne,Oe){this.props=O,this.context=ne,this.refs=M,this.updater=Oe||y}var C=R.prototype=new _;C.constructor=R,E(C,S.prototype),C.isPureReactComponent=!0;var b=Array.isArray,I=Object.prototype.hasOwnProperty,F={current:null},U={key:!0,ref:!0,__self:!0,__source:!0};function X(O,ne,Oe){var $e,Ve={},Q=null,ue=null;if(ne!=null)for($e in ne.ref!==void 0&&(ue=ne.ref),ne.key!==void 0&&(Q=""+ne.key),ne)I.call(ne,$e)&&!U.hasOwnProperty($e)&&(Ve[$e]=ne[$e]);var Ee=arguments.length-2;if(Ee===1)Ve.children=Oe;else if(1<Ee){for(var Ie=Array(Ee),Fe=0;Fe<Ee;Fe++)Ie[Fe]=arguments[Fe+2];Ve.children=Ie}if(O&&O.defaultProps)for($e in Ee=O.defaultProps,Ee)Ve[$e]===void 0&&(Ve[$e]=Ee[$e]);return{$$typeof:r,type:O,key:Q,ref:ue,props:Ve,_owner:F.current}}function P(O,ne){return{$$typeof:r,type:O.type,key:ne,ref:O.ref,props:O.props,_owner:O._owner}}function L(O){return typeof O=="object"&&O!==null&&O.$$typeof===r}function z(O){var ne={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(Oe){return ne[Oe]})}var Z=/\/+/g;function ie(O,ne){return typeof O=="object"&&O!==null&&O.key!=null?z(""+O.key):ne.toString(36)}function fe(O,ne,Oe,$e,Ve){var Q=typeof O;(Q==="undefined"||Q==="boolean")&&(O=null);var ue=!1;if(O===null)ue=!0;else switch(Q){case"string":case"number":ue=!0;break;case"object":switch(O.$$typeof){case r:case e:ue=!0}}if(ue)return ue=O,Ve=Ve(ue),O=$e===""?"."+ie(ue,0):$e,b(Ve)?(Oe="",O!=null&&(Oe=O.replace(Z,"$&/")+"/"),fe(Ve,ne,Oe,"",function(Fe){return Fe})):Ve!=null&&(L(Ve)&&(Ve=P(Ve,Oe+(!Ve.key||ue&&ue.key===Ve.key?"":(""+Ve.key).replace(Z,"$&/")+"/")+O)),ne.push(Ve)),1;if(ue=0,$e=$e===""?".":$e+":",b(O))for(var Ee=0;Ee<O.length;Ee++){Q=O[Ee];var Ie=$e+ie(Q,Ee);ue+=fe(Q,ne,Oe,Ie,Ve)}else if(Ie=v(O),typeof Ie=="function")for(O=Ie.call(O),Ee=0;!(Q=O.next()).done;)Q=Q.value,Ie=$e+ie(Q,Ee++),ue+=fe(Q,ne,Oe,Ie,Ve);else if(Q==="object")throw ne=String(O),Error("Objects are not valid as a React child (found: "+(ne==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":ne)+"). If you meant to render a collection of children, use an array instead.");return ue}function se(O,ne,Oe){if(O==null)return O;var $e=[],Ve=0;return fe(O,$e,"","",function(Q){return ne.call(Oe,Q,Ve++)}),$e}function oe(O){if(O._status===-1){var ne=O._result;ne=ne(),ne.then(function(Oe){(O._status===0||O._status===-1)&&(O._status=1,O._result=Oe)},function(Oe){(O._status===0||O._status===-1)&&(O._status=2,O._result=Oe)}),O._status===-1&&(O._status=0,O._result=ne)}if(O._status===1)return O._result.default;throw O._result}var de={current:null},H={transition:null},le={ReactCurrentDispatcher:de,ReactCurrentBatchConfig:H,ReactCurrentOwner:F};function re(){throw Error("act(...) is not supported in production builds of React.")}return St.Children={map:se,forEach:function(O,ne,Oe){se(O,function(){ne.apply(this,arguments)},Oe)},count:function(O){var ne=0;return se(O,function(){ne++}),ne},toArray:function(O){return se(O,function(ne){return ne})||[]},only:function(O){if(!L(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},St.Component=S,St.Fragment=t,St.Profiler=s,St.PureComponent=R,St.StrictMode=n,St.Suspense=f,St.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=le,St.act=re,St.cloneElement=function(O,ne,Oe){if(O==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+O+".");var $e=E({},O.props),Ve=O.key,Q=O.ref,ue=O._owner;if(ne!=null){if(ne.ref!==void 0&&(Q=ne.ref,ue=F.current),ne.key!==void 0&&(Ve=""+ne.key),O.type&&O.type.defaultProps)var Ee=O.type.defaultProps;for(Ie in ne)I.call(ne,Ie)&&!U.hasOwnProperty(Ie)&&($e[Ie]=ne[Ie]===void 0&&Ee!==void 0?Ee[Ie]:ne[Ie])}var Ie=arguments.length-2;if(Ie===1)$e.children=Oe;else if(1<Ie){Ee=Array(Ie);for(var Fe=0;Fe<Ie;Fe++)Ee[Fe]=arguments[Fe+2];$e.children=Ee}return{$$typeof:r,type:O.type,key:Ve,ref:Q,props:$e,_owner:ue}},St.createContext=function(O){return O={$$typeof:l,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},O.Provider={$$typeof:o,_context:O},O.Consumer=O},St.createElement=X,St.createFactory=function(O){var ne=X.bind(null,O);return ne.type=O,ne},St.createRef=function(){return{current:null}},St.forwardRef=function(O){return{$$typeof:c,render:O}},St.isValidElement=L,St.lazy=function(O){return{$$typeof:p,_payload:{_status:-1,_result:O},_init:oe}},St.memo=function(O,ne){return{$$typeof:d,type:O,compare:ne===void 0?null:ne}},St.startTransition=function(O){var ne=H.transition;H.transition={};try{O()}finally{H.transition=ne}},St.unstable_act=re,St.useCallback=function(O,ne){return de.current.useCallback(O,ne)},St.useContext=function(O){return de.current.useContext(O)},St.useDebugValue=function(){},St.useDeferredValue=function(O){return de.current.useDeferredValue(O)},St.useEffect=function(O,ne){return de.current.useEffect(O,ne)},St.useId=function(){return de.current.useId()},St.useImperativeHandle=function(O,ne,Oe){return de.current.useImperativeHandle(O,ne,Oe)},St.useInsertionEffect=function(O,ne){return de.current.useInsertionEffect(O,ne)},St.useLayoutEffect=function(O,ne){return de.current.useLayoutEffect(O,ne)},St.useMemo=function(O,ne){return de.current.useMemo(O,ne)},St.useReducer=function(O,ne,Oe){return de.current.useReducer(O,ne,Oe)},St.useRef=function(O){return de.current.useRef(O)},St.useState=function(O){return de.current.useState(O)},St.useSyncExternalStore=function(O,ne,Oe){return de.current.useSyncExternalStore(O,ne,Oe)},St.useTransition=function(){return de.current.useTransition()},St.version="18.3.1",St}var kv;function Ap(){return kv||(kv=1,yd.exports=WE()),yd.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bv;function jE(){if(Bv)return ko;Bv=1;var r=Ap(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),n=Object.prototype.hasOwnProperty,s=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function l(c,f,d){var p,m={},v=null,y=null;d!==void 0&&(v=""+d),f.key!==void 0&&(v=""+f.key),f.ref!==void 0&&(y=f.ref);for(p in f)n.call(f,p)&&!o.hasOwnProperty(p)&&(m[p]=f[p]);if(c&&c.defaultProps)for(p in f=c.defaultProps,f)m[p]===void 0&&(m[p]=f[p]);return{$$typeof:e,type:c,key:v,ref:y,props:m,_owner:s.current}}return ko.Fragment=t,ko.jsx=l,ko.jsxs=l,ko}var zv;function XE(){return zv||(zv=1,_d.exports=jE()),_d.exports}var Xe=XE(),ce=Ap();const Rc=ny(ce);var Cu={},xd={exports:{}},Yn={},Sd={exports:{}},Ed={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hv;function $E(){return Hv||(Hv=1,(function(r){function e(H,le){var re=H.length;H.push(le);e:for(;0<re;){var O=re-1>>>1,ne=H[O];if(0<s(ne,le))H[O]=le,H[re]=ne,re=O;else break e}}function t(H){return H.length===0?null:H[0]}function n(H){if(H.length===0)return null;var le=H[0],re=H.pop();if(re!==le){H[0]=re;e:for(var O=0,ne=H.length,Oe=ne>>>1;O<Oe;){var $e=2*(O+1)-1,Ve=H[$e],Q=$e+1,ue=H[Q];if(0>s(Ve,re))Q<ne&&0>s(ue,Ve)?(H[O]=ue,H[Q]=re,O=Q):(H[O]=Ve,H[$e]=re,O=$e);else if(Q<ne&&0>s(ue,re))H[O]=ue,H[Q]=re,O=Q;else break e}}return le}function s(H,le){var re=H.sortIndex-le.sortIndex;return re!==0?re:H.id-le.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;r.unstable_now=function(){return o.now()}}else{var l=Date,c=l.now();r.unstable_now=function(){return l.now()-c}}var f=[],d=[],p=1,m=null,v=3,y=!1,E=!1,M=!1,S=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,R=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function C(H){for(var le=t(d);le!==null;){if(le.callback===null)n(d);else if(le.startTime<=H)n(d),le.sortIndex=le.expirationTime,e(f,le);else break;le=t(d)}}function b(H){if(M=!1,C(H),!E)if(t(f)!==null)E=!0,oe(I);else{var le=t(d);le!==null&&de(b,le.startTime-H)}}function I(H,le){E=!1,M&&(M=!1,_(X),X=-1),y=!0;var re=v;try{for(C(le),m=t(f);m!==null&&(!(m.expirationTime>le)||H&&!z());){var O=m.callback;if(typeof O=="function"){m.callback=null,v=m.priorityLevel;var ne=O(m.expirationTime<=le);le=r.unstable_now(),typeof ne=="function"?m.callback=ne:m===t(f)&&n(f),C(le)}else n(f);m=t(f)}if(m!==null)var Oe=!0;else{var $e=t(d);$e!==null&&de(b,$e.startTime-le),Oe=!1}return Oe}finally{m=null,v=re,y=!1}}var F=!1,U=null,X=-1,P=5,L=-1;function z(){return!(r.unstable_now()-L<P)}function Z(){if(U!==null){var H=r.unstable_now();L=H;var le=!0;try{le=U(!0,H)}finally{le?ie():(F=!1,U=null)}}else F=!1}var ie;if(typeof R=="function")ie=function(){R(Z)};else if(typeof MessageChannel<"u"){var fe=new MessageChannel,se=fe.port2;fe.port1.onmessage=Z,ie=function(){se.postMessage(null)}}else ie=function(){S(Z,0)};function oe(H){U=H,F||(F=!0,ie())}function de(H,le){X=S(function(){H(r.unstable_now())},le)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(H){H.callback=null},r.unstable_continueExecution=function(){E||y||(E=!0,oe(I))},r.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<H?Math.floor(1e3/H):5},r.unstable_getCurrentPriorityLevel=function(){return v},r.unstable_getFirstCallbackNode=function(){return t(f)},r.unstable_next=function(H){switch(v){case 1:case 2:case 3:var le=3;break;default:le=v}var re=v;v=le;try{return H()}finally{v=re}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(H,le){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var re=v;v=H;try{return le()}finally{v=re}},r.unstable_scheduleCallback=function(H,le,re){var O=r.unstable_now();switch(typeof re=="object"&&re!==null?(re=re.delay,re=typeof re=="number"&&0<re?O+re:O):re=O,H){case 1:var ne=-1;break;case 2:ne=250;break;case 5:ne=1073741823;break;case 4:ne=1e4;break;default:ne=5e3}return ne=re+ne,H={id:p++,callback:le,priorityLevel:H,startTime:re,expirationTime:ne,sortIndex:-1},re>O?(H.sortIndex=re,e(d,H),t(f)===null&&H===t(d)&&(M?(_(X),X=-1):M=!0,de(b,re-O))):(H.sortIndex=ne,e(f,H),E||y||(E=!0,oe(I))),H},r.unstable_shouldYield=z,r.unstable_wrapCallback=function(H){var le=v;return function(){var re=v;v=le;try{return H.apply(this,arguments)}finally{v=re}}}})(Ed)),Ed}var Vv;function YE(){return Vv||(Vv=1,Sd.exports=$E()),Sd.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gv;function KE(){if(Gv)return Yn;Gv=1;var r=Ap(),e=YE();function t(i){for(var a="https://reactjs.org/docs/error-decoder.html?invariant="+i,u=1;u<arguments.length;u++)a+="&args[]="+encodeURIComponent(arguments[u]);return"Minified React error #"+i+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var n=new Set,s={};function o(i,a){l(i,a),l(i+"Capture",a)}function l(i,a){for(s[i]=a,i=0;i<a.length;i++)n.add(a[i])}var c=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),f=Object.prototype.hasOwnProperty,d=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,p={},m={};function v(i){return f.call(m,i)?!0:f.call(p,i)?!1:d.test(i)?m[i]=!0:(p[i]=!0,!1)}function y(i,a,u,h){if(u!==null&&u.type===0)return!1;switch(typeof a){case"function":case"symbol":return!0;case"boolean":return h?!1:u!==null?!u.acceptsBooleans:(i=i.toLowerCase().slice(0,5),i!=="data-"&&i!=="aria-");default:return!1}}function E(i,a,u,h){if(a===null||typeof a>"u"||y(i,a,u,h))return!0;if(h)return!1;if(u!==null)switch(u.type){case 3:return!a;case 4:return a===!1;case 5:return isNaN(a);case 6:return isNaN(a)||1>a}return!1}function M(i,a,u,h,g,x,T){this.acceptsBooleans=a===2||a===3||a===4,this.attributeName=h,this.attributeNamespace=g,this.mustUseProperty=u,this.propertyName=i,this.type=a,this.sanitizeURL=x,this.removeEmptyString=T}var S={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(i){S[i]=new M(i,0,!1,i,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(i){var a=i[0];S[a]=new M(a,1,!1,i[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(i){S[i]=new M(i,2,!1,i.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(i){S[i]=new M(i,2,!1,i,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(i){S[i]=new M(i,3,!1,i.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(i){S[i]=new M(i,3,!0,i,null,!1,!1)}),["capture","download"].forEach(function(i){S[i]=new M(i,4,!1,i,null,!1,!1)}),["cols","rows","size","span"].forEach(function(i){S[i]=new M(i,6,!1,i,null,!1,!1)}),["rowSpan","start"].forEach(function(i){S[i]=new M(i,5,!1,i.toLowerCase(),null,!1,!1)});var _=/[\-:]([a-z])/g;function R(i){return i[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(i){var a=i.replace(_,R);S[a]=new M(a,1,!1,i,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(i){var a=i.replace(_,R);S[a]=new M(a,1,!1,i,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(i){var a=i.replace(_,R);S[a]=new M(a,1,!1,i,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(i){S[i]=new M(i,1,!1,i.toLowerCase(),null,!1,!1)}),S.xlinkHref=new M("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(i){S[i]=new M(i,1,!1,i.toLowerCase(),null,!0,!0)});function C(i,a,u,h){var g=S.hasOwnProperty(a)?S[a]:null;(g!==null?g.type!==0:h||!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(E(a,u,g,h)&&(u=null),h||g===null?v(a)&&(u===null?i.removeAttribute(a):i.setAttribute(a,""+u)):g.mustUseProperty?i[g.propertyName]=u===null?g.type===3?!1:"":u:(a=g.attributeName,h=g.attributeNamespace,u===null?i.removeAttribute(a):(g=g.type,u=g===3||g===4&&u===!0?"":""+u,h?i.setAttributeNS(h,a,u):i.setAttribute(a,u))))}var b=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,I=Symbol.for("react.element"),F=Symbol.for("react.portal"),U=Symbol.for("react.fragment"),X=Symbol.for("react.strict_mode"),P=Symbol.for("react.profiler"),L=Symbol.for("react.provider"),z=Symbol.for("react.context"),Z=Symbol.for("react.forward_ref"),ie=Symbol.for("react.suspense"),fe=Symbol.for("react.suspense_list"),se=Symbol.for("react.memo"),oe=Symbol.for("react.lazy"),de=Symbol.for("react.offscreen"),H=Symbol.iterator;function le(i){return i===null||typeof i!="object"?null:(i=H&&i[H]||i["@@iterator"],typeof i=="function"?i:null)}var re=Object.assign,O;function ne(i){if(O===void 0)try{throw Error()}catch(u){var a=u.stack.trim().match(/\n( *(at )?)/);O=a&&a[1]||""}return`
`+O+i}var Oe=!1;function $e(i,a){if(!i||Oe)return"";Oe=!0;var u=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(a)if(a=function(){throw Error()},Object.defineProperty(a.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(a,[])}catch(J){var h=J}Reflect.construct(i,[],a)}else{try{a.call()}catch(J){h=J}i.call(a.prototype)}else{try{throw Error()}catch(J){h=J}i()}}catch(J){if(J&&h&&typeof J.stack=="string"){for(var g=J.stack.split(`
`),x=h.stack.split(`
`),T=g.length-1,N=x.length-1;1<=T&&0<=N&&g[T]!==x[N];)N--;for(;1<=T&&0<=N;T--,N--)if(g[T]!==x[N]){if(T!==1||N!==1)do if(T--,N--,0>N||g[T]!==x[N]){var B=`
`+g[T].replace(" at new "," at ");return i.displayName&&B.includes("<anonymous>")&&(B=B.replace("<anonymous>",i.displayName)),B}while(1<=T&&0<=N);break}}}finally{Oe=!1,Error.prepareStackTrace=u}return(i=i?i.displayName||i.name:"")?ne(i):""}function Ve(i){switch(i.tag){case 5:return ne(i.type);case 16:return ne("Lazy");case 13:return ne("Suspense");case 19:return ne("SuspenseList");case 0:case 2:case 15:return i=$e(i.type,!1),i;case 11:return i=$e(i.type.render,!1),i;case 1:return i=$e(i.type,!0),i;default:return""}}function Q(i){if(i==null)return null;if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i;switch(i){case U:return"Fragment";case F:return"Portal";case P:return"Profiler";case X:return"StrictMode";case ie:return"Suspense";case fe:return"SuspenseList"}if(typeof i=="object")switch(i.$$typeof){case z:return(i.displayName||"Context")+".Consumer";case L:return(i._context.displayName||"Context")+".Provider";case Z:var a=i.render;return i=i.displayName,i||(i=a.displayName||a.name||"",i=i!==""?"ForwardRef("+i+")":"ForwardRef"),i;case se:return a=i.displayName||null,a!==null?a:Q(i.type)||"Memo";case oe:a=i._payload,i=i._init;try{return Q(i(a))}catch{}}return null}function ue(i){var a=i.type;switch(i.tag){case 24:return"Cache";case 9:return(a.displayName||"Context")+".Consumer";case 10:return(a._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return i=a.render,i=i.displayName||i.name||"",a.displayName||(i!==""?"ForwardRef("+i+")":"ForwardRef");case 7:return"Fragment";case 5:return a;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Q(a);case 8:return a===X?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof a=="function")return a.displayName||a.name||null;if(typeof a=="string")return a}return null}function Ee(i){switch(typeof i){case"boolean":case"number":case"string":case"undefined":return i;case"object":return i;default:return""}}function Ie(i){var a=i.type;return(i=i.nodeName)&&i.toLowerCase()==="input"&&(a==="checkbox"||a==="radio")}function Fe(i){var a=Ie(i)?"checked":"value",u=Object.getOwnPropertyDescriptor(i.constructor.prototype,a),h=""+i[a];if(!i.hasOwnProperty(a)&&typeof u<"u"&&typeof u.get=="function"&&typeof u.set=="function"){var g=u.get,x=u.set;return Object.defineProperty(i,a,{configurable:!0,get:function(){return g.call(this)},set:function(T){h=""+T,x.call(this,T)}}),Object.defineProperty(i,a,{enumerable:u.enumerable}),{getValue:function(){return h},setValue:function(T){h=""+T},stopTracking:function(){i._valueTracker=null,delete i[a]}}}}function yt(i){i._valueTracker||(i._valueTracker=Fe(i))}function on(i){if(!i)return!1;var a=i._valueTracker;if(!a)return!0;var u=a.getValue(),h="";return i&&(h=Ie(i)?i.checked?"true":"false":i.value),i=h,i!==u?(a.setValue(i),!0):!1}function k(i){if(i=i||(typeof document<"u"?document:void 0),typeof i>"u")return null;try{return i.activeElement||i.body}catch{return i.body}}function Ot(i,a){var u=a.checked;return re({},a,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:u??i._wrapperState.initialChecked})}function ht(i,a){var u=a.defaultValue==null?"":a.defaultValue,h=a.checked!=null?a.checked:a.defaultChecked;u=Ee(a.value!=null?a.value:u),i._wrapperState={initialChecked:h,initialValue:u,controlled:a.type==="checkbox"||a.type==="radio"?a.checked!=null:a.value!=null}}function st(i,a){a=a.checked,a!=null&&C(i,"checked",a,!1)}function Ge(i,a){st(i,a);var u=Ee(a.value),h=a.type;if(u!=null)h==="number"?(u===0&&i.value===""||i.value!=u)&&(i.value=""+u):i.value!==""+u&&(i.value=""+u);else if(h==="submit"||h==="reset"){i.removeAttribute("value");return}a.hasOwnProperty("value")?We(i,a.type,u):a.hasOwnProperty("defaultValue")&&We(i,a.type,Ee(a.defaultValue)),a.checked==null&&a.defaultChecked!=null&&(i.defaultChecked=!!a.defaultChecked)}function Ht(i,a,u){if(a.hasOwnProperty("value")||a.hasOwnProperty("defaultValue")){var h=a.type;if(!(h!=="submit"&&h!=="reset"||a.value!==void 0&&a.value!==null))return;a=""+i._wrapperState.initialValue,u||a===i.value||(i.value=a),i.defaultValue=a}u=i.name,u!==""&&(i.name=""),i.defaultChecked=!!i._wrapperState.initialChecked,u!==""&&(i.name=u)}function We(i,a,u){(a!=="number"||k(i.ownerDocument)!==i)&&(u==null?i.defaultValue=""+i._wrapperState.initialValue:i.defaultValue!==""+u&&(i.defaultValue=""+u))}var ct=Array.isArray;function jt(i,a,u,h){if(i=i.options,a){a={};for(var g=0;g<u.length;g++)a["$"+u[g]]=!0;for(u=0;u<i.length;u++)g=a.hasOwnProperty("$"+i[u].value),i[u].selected!==g&&(i[u].selected=g),g&&h&&(i[u].defaultSelected=!0)}else{for(u=""+Ee(u),a=null,g=0;g<i.length;g++){if(i[g].value===u){i[g].selected=!0,h&&(i[g].defaultSelected=!0);return}a!==null||i[g].disabled||(a=i[g])}a!==null&&(a.selected=!0)}}function Xt(i,a){if(a.dangerouslySetInnerHTML!=null)throw Error(t(91));return re({},a,{value:void 0,defaultValue:void 0,children:""+i._wrapperState.initialValue})}function D(i,a){var u=a.value;if(u==null){if(u=a.children,a=a.defaultValue,u!=null){if(a!=null)throw Error(t(92));if(ct(u)){if(1<u.length)throw Error(t(93));u=u[0]}a=u}a==null&&(a=""),u=a}i._wrapperState={initialValue:Ee(u)}}function w(i,a){var u=Ee(a.value),h=Ee(a.defaultValue);u!=null&&(u=""+u,u!==i.value&&(i.value=u),a.defaultValue==null&&i.defaultValue!==u&&(i.defaultValue=u)),h!=null&&(i.defaultValue=""+h)}function K(i){var a=i.textContent;a===i._wrapperState.initialValue&&a!==""&&a!==null&&(i.value=a)}function he(i){switch(i){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ge(i,a){return i==null||i==="http://www.w3.org/1999/xhtml"?he(a):i==="http://www.w3.org/2000/svg"&&a==="foreignObject"?"http://www.w3.org/1999/xhtml":i}var ae,Ze=(function(i){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(a,u,h,g){MSApp.execUnsafeLocalFunction(function(){return i(a,u,h,g)})}:i})(function(i,a){if(i.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in i)i.innerHTML=a;else{for(ae=ae||document.createElement("div"),ae.innerHTML="<svg>"+a.valueOf().toString()+"</svg>",a=ae.firstChild;i.firstChild;)i.removeChild(i.firstChild);for(;a.firstChild;)i.appendChild(a.firstChild)}});function be(i,a){if(a){var u=i.firstChild;if(u&&u===i.lastChild&&u.nodeType===3){u.nodeValue=a;return}}i.textContent=a}var Be={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Je=["Webkit","ms","Moz","O"];Object.keys(Be).forEach(function(i){Je.forEach(function(a){a=a+i.charAt(0).toUpperCase()+i.substring(1),Be[a]=Be[i]})});function Me(i,a,u){return a==null||typeof a=="boolean"||a===""?"":u||typeof a!="number"||a===0||Be.hasOwnProperty(i)&&Be[i]?(""+a).trim():a+"px"}function Le(i,a){i=i.style;for(var u in a)if(a.hasOwnProperty(u)){var h=u.indexOf("--")===0,g=Me(u,a[u],h);u==="float"&&(u="cssFloat"),h?i.setProperty(u,g):i[u]=g}}var at=re({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ke(i,a){if(a){if(at[i]&&(a.children!=null||a.dangerouslySetInnerHTML!=null))throw Error(t(137,i));if(a.dangerouslySetInnerHTML!=null){if(a.children!=null)throw Error(t(60));if(typeof a.dangerouslySetInnerHTML!="object"||!("__html"in a.dangerouslySetInnerHTML))throw Error(t(61))}if(a.style!=null&&typeof a.style!="object")throw Error(t(62))}}function Re(i,a){if(i.indexOf("-")===-1)return typeof a.is=="string";switch(i){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var pt=null;function V(i){return i=i.target||i.srcElement||window,i.correspondingUseElement&&(i=i.correspondingUseElement),i.nodeType===3?i.parentNode:i}var xe=null,Ae=null,De=null;function ye(i){if(i=Mo(i)){if(typeof xe!="function")throw Error(t(280));var a=i.stateNode;a&&(a=Wl(a),xe(i.stateNode,i.type,a))}}function pe(i){Ae?De?De.push(i):De=[i]:Ae=i}function je(){if(Ae){var i=Ae,a=De;if(De=Ae=null,ye(i),a)for(i=0;i<a.length;i++)ye(a[i])}}function ft(i,a){return i(a)}function Dt(){}var bt=!1;function ai(i,a,u){if(bt)return i(a,u);bt=!0;try{return ft(i,a,u)}finally{bt=!1,(Ae!==null||De!==null)&&(Dt(),je())}}function Mn(i,a){var u=i.stateNode;if(u===null)return null;var h=Wl(u);if(h===null)return null;u=h[a];e:switch(a){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(h=!h.disabled)||(i=i.type,h=!(i==="button"||i==="input"||i==="select"||i==="textarea")),i=!h;break e;default:i=!1}if(i)return null;if(u&&typeof u!="function")throw Error(t(231,a,typeof u));return u}var Ws=!1;if(c)try{var Zn={};Object.defineProperty(Zn,"passive",{get:function(){Ws=!0}}),window.addEventListener("test",Zn,Zn),window.removeEventListener("test",Zn,Zn)}catch{Ws=!1}function so(i,a,u,h,g,x,T,N,B){var J=Array.prototype.slice.call(arguments,3);try{a.apply(u,J)}catch(ve){this.onError(ve)}}var Cr=!1,fs=null,Qi=!1,js=null,Xs={onError:function(i){Cr=!0,fs=i}};function Ml(i,a,u,h,g,x,T,N,B){Cr=!1,fs=null,so.apply(Xs,arguments)}function Tl(i,a,u,h,g,x,T,N,B){if(Ml.apply(this,arguments),Cr){if(Cr){var J=fs;Cr=!1,fs=null}else throw Error(t(198));Qi||(Qi=!0,js=J)}}function er(i){var a=i,u=i;if(i.alternate)for(;a.return;)a=a.return;else{i=a;do a=i,(a.flags&4098)!==0&&(u=a.return),i=a.return;while(i)}return a.tag===3?u:null}function wl(i){if(i.tag===13){var a=i.memoizedState;if(a===null&&(i=i.alternate,i!==null&&(a=i.memoizedState)),a!==null)return a.dehydrated}return null}function bl(i){if(er(i)!==i)throw Error(t(188))}function zc(i){var a=i.alternate;if(!a){if(a=er(i),a===null)throw Error(t(188));return a!==i?null:i}for(var u=i,h=a;;){var g=u.return;if(g===null)break;var x=g.alternate;if(x===null){if(h=g.return,h!==null){u=h;continue}break}if(g.child===x.child){for(x=g.child;x;){if(x===u)return bl(g),i;if(x===h)return bl(g),a;x=x.sibling}throw Error(t(188))}if(u.return!==h.return)u=g,h=x;else{for(var T=!1,N=g.child;N;){if(N===u){T=!0,u=g,h=x;break}if(N===h){T=!0,h=g,u=x;break}N=N.sibling}if(!T){for(N=x.child;N;){if(N===u){T=!0,u=x,h=g;break}if(N===h){T=!0,h=x,u=g;break}N=N.sibling}if(!T)throw Error(t(189))}}if(u.alternate!==h)throw Error(t(190))}if(u.tag!==3)throw Error(t(188));return u.stateNode.current===u?i:a}function Al(i){return i=zc(i),i!==null?Rl(i):null}function Rl(i){if(i.tag===5||i.tag===6)return i;for(i=i.child;i!==null;){var a=Rl(i);if(a!==null)return a;i=i.sibling}return null}var A=e.unstable_scheduleCallback,$=e.unstable_cancelCallback,ee=e.unstable_shouldYield,te=e.unstable_requestPaint,W=e.unstable_now,Se=e.unstable_getCurrentPriorityLevel,Ce=e.unstable_ImmediatePriority,ze=e.unstable_UserBlockingPriority,Ne=e.unstable_NormalPriority,rt=e.unstable_LowPriority,ot=e.unstable_IdlePriority,Qe=null,lt=null;function It(i){if(lt&&typeof lt.onCommitFiberRoot=="function")try{lt.onCommitFiberRoot(Qe,i,void 0,(i.current.flags&128)===128)}catch{}}var At=Math.clz32?Math.clz32:tt,Vt=Math.log,Nt=Math.LN2;function tt(i){return i>>>=0,i===0?32:31-(Vt(i)/Nt|0)|0}var kt=64,Et=4194304;function ln(i){switch(i&-i){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return i&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return i}}function _i(i,a){var u=i.pendingLanes;if(u===0)return 0;var h=0,g=i.suspendedLanes,x=i.pingedLanes,T=u&268435455;if(T!==0){var N=T&~g;N!==0?h=ln(N):(x&=T,x!==0&&(h=ln(x)))}else T=u&~g,T!==0?h=ln(T):x!==0&&(h=ln(x));if(h===0)return 0;if(a!==0&&a!==h&&(a&g)===0&&(g=h&-h,x=a&-a,g>=x||g===16&&(x&4194240)!==0))return a;if((h&4)!==0&&(h|=u&16),a=i.entangledLanes,a!==0)for(i=i.entanglements,a&=h;0<a;)u=31-At(a),g=1<<u,h|=i[u],a&=~g;return h}function Dn(i,a){switch(i){case 1:case 2:case 4:return a+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ds(i,a){for(var u=i.suspendedLanes,h=i.pingedLanes,g=i.expirationTimes,x=i.pendingLanes;0<x;){var T=31-At(x),N=1<<T,B=g[T];B===-1?((N&u)===0||(N&h)!==0)&&(g[T]=Dn(N,a)):B<=a&&(i.expiredLanes|=N),x&=~N}}function Gt(i){return i=i.pendingLanes&-1073741825,i!==0?i:i&1073741824?1073741824:0}function Nn(){var i=kt;return kt<<=1,(kt&4194240)===0&&(kt=64),i}function Tn(i){for(var a=[],u=0;31>u;u++)a.push(i);return a}function nn(i,a,u){i.pendingLanes|=a,a!==536870912&&(i.suspendedLanes=0,i.pingedLanes=0),i=i.eventTimes,a=31-At(a),i[a]=u}function wn(i,a){var u=i.pendingLanes&~a;i.pendingLanes=a,i.suspendedLanes=0,i.pingedLanes=0,i.expiredLanes&=a,i.mutableReadLanes&=a,i.entangledLanes&=a,a=i.entanglements;var h=i.eventTimes;for(i=i.expirationTimes;0<u;){var g=31-At(u),x=1<<g;a[g]=0,h[g]=-1,i[g]=-1,u&=~x}}function hs(i,a){var u=i.entangledLanes|=a;for(i=i.entanglements;u;){var h=31-At(u),g=1<<h;g&a|i[h]&a&&(i[h]|=a),u&=~g}}var Mt=0;function mm(i){return i&=-i,1<i?4<i?(i&268435455)!==0?16:536870912:4:1}var gm,Hc,vm,_m,ym,Vc=!1,Cl=[],Pr=null,Lr=null,Ir=null,ao=new Map,oo=new Map,Dr=[],dS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function xm(i,a){switch(i){case"focusin":case"focusout":Pr=null;break;case"dragenter":case"dragleave":Lr=null;break;case"mouseover":case"mouseout":Ir=null;break;case"pointerover":case"pointerout":ao.delete(a.pointerId);break;case"gotpointercapture":case"lostpointercapture":oo.delete(a.pointerId)}}function lo(i,a,u,h,g,x){return i===null||i.nativeEvent!==x?(i={blockedOn:a,domEventName:u,eventSystemFlags:h,nativeEvent:x,targetContainers:[g]},a!==null&&(a=Mo(a),a!==null&&Hc(a)),i):(i.eventSystemFlags|=h,a=i.targetContainers,g!==null&&a.indexOf(g)===-1&&a.push(g),i)}function hS(i,a,u,h,g){switch(a){case"focusin":return Pr=lo(Pr,i,a,u,h,g),!0;case"dragenter":return Lr=lo(Lr,i,a,u,h,g),!0;case"mouseover":return Ir=lo(Ir,i,a,u,h,g),!0;case"pointerover":var x=g.pointerId;return ao.set(x,lo(ao.get(x)||null,i,a,u,h,g)),!0;case"gotpointercapture":return x=g.pointerId,oo.set(x,lo(oo.get(x)||null,i,a,u,h,g)),!0}return!1}function Sm(i){var a=ps(i.target);if(a!==null){var u=er(a);if(u!==null){if(a=u.tag,a===13){if(a=wl(u),a!==null){i.blockedOn=a,ym(i.priority,function(){vm(u)});return}}else if(a===3&&u.stateNode.current.memoizedState.isDehydrated){i.blockedOn=u.tag===3?u.stateNode.containerInfo:null;return}}}i.blockedOn=null}function Pl(i){if(i.blockedOn!==null)return!1;for(var a=i.targetContainers;0<a.length;){var u=Wc(i.domEventName,i.eventSystemFlags,a[0],i.nativeEvent);if(u===null){u=i.nativeEvent;var h=new u.constructor(u.type,u);pt=h,u.target.dispatchEvent(h),pt=null}else return a=Mo(u),a!==null&&Hc(a),i.blockedOn=u,!1;a.shift()}return!0}function Em(i,a,u){Pl(i)&&u.delete(a)}function pS(){Vc=!1,Pr!==null&&Pl(Pr)&&(Pr=null),Lr!==null&&Pl(Lr)&&(Lr=null),Ir!==null&&Pl(Ir)&&(Ir=null),ao.forEach(Em),oo.forEach(Em)}function uo(i,a){i.blockedOn===a&&(i.blockedOn=null,Vc||(Vc=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,pS)))}function co(i){function a(g){return uo(g,i)}if(0<Cl.length){uo(Cl[0],i);for(var u=1;u<Cl.length;u++){var h=Cl[u];h.blockedOn===i&&(h.blockedOn=null)}}for(Pr!==null&&uo(Pr,i),Lr!==null&&uo(Lr,i),Ir!==null&&uo(Ir,i),ao.forEach(a),oo.forEach(a),u=0;u<Dr.length;u++)h=Dr[u],h.blockedOn===i&&(h.blockedOn=null);for(;0<Dr.length&&(u=Dr[0],u.blockedOn===null);)Sm(u),u.blockedOn===null&&Dr.shift()}var $s=b.ReactCurrentBatchConfig,Ll=!0;function mS(i,a,u,h){var g=Mt,x=$s.transition;$s.transition=null;try{Mt=1,Gc(i,a,u,h)}finally{Mt=g,$s.transition=x}}function gS(i,a,u,h){var g=Mt,x=$s.transition;$s.transition=null;try{Mt=4,Gc(i,a,u,h)}finally{Mt=g,$s.transition=x}}function Gc(i,a,u,h){if(Ll){var g=Wc(i,a,u,h);if(g===null)lf(i,a,h,Il,u),xm(i,h);else if(hS(g,i,a,u,h))h.stopPropagation();else if(xm(i,h),a&4&&-1<dS.indexOf(i)){for(;g!==null;){var x=Mo(g);if(x!==null&&gm(x),x=Wc(i,a,u,h),x===null&&lf(i,a,h,Il,u),x===g)break;g=x}g!==null&&h.stopPropagation()}else lf(i,a,h,null,u)}}var Il=null;function Wc(i,a,u,h){if(Il=null,i=V(h),i=ps(i),i!==null)if(a=er(i),a===null)i=null;else if(u=a.tag,u===13){if(i=wl(a),i!==null)return i;i=null}else if(u===3){if(a.stateNode.current.memoizedState.isDehydrated)return a.tag===3?a.stateNode.containerInfo:null;i=null}else a!==i&&(i=null);return Il=i,null}function Mm(i){switch(i){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Se()){case Ce:return 1;case ze:return 4;case Ne:case rt:return 16;case ot:return 536870912;default:return 16}default:return 16}}var Nr=null,jc=null,Dl=null;function Tm(){if(Dl)return Dl;var i,a=jc,u=a.length,h,g="value"in Nr?Nr.value:Nr.textContent,x=g.length;for(i=0;i<u&&a[i]===g[i];i++);var T=u-i;for(h=1;h<=T&&a[u-h]===g[x-h];h++);return Dl=g.slice(i,1<h?1-h:void 0)}function Nl(i){var a=i.keyCode;return"charCode"in i?(i=i.charCode,i===0&&a===13&&(i=13)):i=a,i===10&&(i=13),32<=i||i===13?i:0}function Ul(){return!0}function wm(){return!1}function Jn(i){function a(u,h,g,x,T){this._reactName=u,this._targetInst=g,this.type=h,this.nativeEvent=x,this.target=T,this.currentTarget=null;for(var N in i)i.hasOwnProperty(N)&&(u=i[N],this[N]=u?u(x):x[N]);return this.isDefaultPrevented=(x.defaultPrevented!=null?x.defaultPrevented:x.returnValue===!1)?Ul:wm,this.isPropagationStopped=wm,this}return re(a.prototype,{preventDefault:function(){this.defaultPrevented=!0;var u=this.nativeEvent;u&&(u.preventDefault?u.preventDefault():typeof u.returnValue!="unknown"&&(u.returnValue=!1),this.isDefaultPrevented=Ul)},stopPropagation:function(){var u=this.nativeEvent;u&&(u.stopPropagation?u.stopPropagation():typeof u.cancelBubble!="unknown"&&(u.cancelBubble=!0),this.isPropagationStopped=Ul)},persist:function(){},isPersistent:Ul}),a}var Ys={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(i){return i.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Xc=Jn(Ys),fo=re({},Ys,{view:0,detail:0}),vS=Jn(fo),$c,Yc,ho,Fl=re({},fo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:qc,button:0,buttons:0,relatedTarget:function(i){return i.relatedTarget===void 0?i.fromElement===i.srcElement?i.toElement:i.fromElement:i.relatedTarget},movementX:function(i){return"movementX"in i?i.movementX:(i!==ho&&(ho&&i.type==="mousemove"?($c=i.screenX-ho.screenX,Yc=i.screenY-ho.screenY):Yc=$c=0,ho=i),$c)},movementY:function(i){return"movementY"in i?i.movementY:Yc}}),bm=Jn(Fl),_S=re({},Fl,{dataTransfer:0}),yS=Jn(_S),xS=re({},fo,{relatedTarget:0}),Kc=Jn(xS),SS=re({},Ys,{animationName:0,elapsedTime:0,pseudoElement:0}),ES=Jn(SS),MS=re({},Ys,{clipboardData:function(i){return"clipboardData"in i?i.clipboardData:window.clipboardData}}),TS=Jn(MS),wS=re({},Ys,{data:0}),Am=Jn(wS),bS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},AS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},RS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function CS(i){var a=this.nativeEvent;return a.getModifierState?a.getModifierState(i):(i=RS[i])?!!a[i]:!1}function qc(){return CS}var PS=re({},fo,{key:function(i){if(i.key){var a=bS[i.key]||i.key;if(a!=="Unidentified")return a}return i.type==="keypress"?(i=Nl(i),i===13?"Enter":String.fromCharCode(i)):i.type==="keydown"||i.type==="keyup"?AS[i.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:qc,charCode:function(i){return i.type==="keypress"?Nl(i):0},keyCode:function(i){return i.type==="keydown"||i.type==="keyup"?i.keyCode:0},which:function(i){return i.type==="keypress"?Nl(i):i.type==="keydown"||i.type==="keyup"?i.keyCode:0}}),LS=Jn(PS),IS=re({},Fl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Rm=Jn(IS),DS=re({},fo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:qc}),NS=Jn(DS),US=re({},Ys,{propertyName:0,elapsedTime:0,pseudoElement:0}),FS=Jn(US),OS=re({},Fl,{deltaX:function(i){return"deltaX"in i?i.deltaX:"wheelDeltaX"in i?-i.wheelDeltaX:0},deltaY:function(i){return"deltaY"in i?i.deltaY:"wheelDeltaY"in i?-i.wheelDeltaY:"wheelDelta"in i?-i.wheelDelta:0},deltaZ:0,deltaMode:0}),kS=Jn(OS),BS=[9,13,27,32],Zc=c&&"CompositionEvent"in window,po=null;c&&"documentMode"in document&&(po=document.documentMode);var zS=c&&"TextEvent"in window&&!po,Cm=c&&(!Zc||po&&8<po&&11>=po),Pm=" ",Lm=!1;function Im(i,a){switch(i){case"keyup":return BS.indexOf(a.keyCode)!==-1;case"keydown":return a.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Dm(i){return i=i.detail,typeof i=="object"&&"data"in i?i.data:null}var Ks=!1;function HS(i,a){switch(i){case"compositionend":return Dm(a);case"keypress":return a.which!==32?null:(Lm=!0,Pm);case"textInput":return i=a.data,i===Pm&&Lm?null:i;default:return null}}function VS(i,a){if(Ks)return i==="compositionend"||!Zc&&Im(i,a)?(i=Tm(),Dl=jc=Nr=null,Ks=!1,i):null;switch(i){case"paste":return null;case"keypress":if(!(a.ctrlKey||a.altKey||a.metaKey)||a.ctrlKey&&a.altKey){if(a.char&&1<a.char.length)return a.char;if(a.which)return String.fromCharCode(a.which)}return null;case"compositionend":return Cm&&a.locale!=="ko"?null:a.data;default:return null}}var GS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Nm(i){var a=i&&i.nodeName&&i.nodeName.toLowerCase();return a==="input"?!!GS[i.type]:a==="textarea"}function Um(i,a,u,h){pe(h),a=Hl(a,"onChange"),0<a.length&&(u=new Xc("onChange","change",null,u,h),i.push({event:u,listeners:a}))}var mo=null,go=null;function WS(i){Qm(i,0)}function Ol(i){var a=ea(i);if(on(a))return i}function jS(i,a){if(i==="change")return a}var Fm=!1;if(c){var Jc;if(c){var Qc="oninput"in document;if(!Qc){var Om=document.createElement("div");Om.setAttribute("oninput","return;"),Qc=typeof Om.oninput=="function"}Jc=Qc}else Jc=!1;Fm=Jc&&(!document.documentMode||9<document.documentMode)}function km(){mo&&(mo.detachEvent("onpropertychange",Bm),go=mo=null)}function Bm(i){if(i.propertyName==="value"&&Ol(go)){var a=[];Um(a,go,i,V(i)),ai(WS,a)}}function XS(i,a,u){i==="focusin"?(km(),mo=a,go=u,mo.attachEvent("onpropertychange",Bm)):i==="focusout"&&km()}function $S(i){if(i==="selectionchange"||i==="keyup"||i==="keydown")return Ol(go)}function YS(i,a){if(i==="click")return Ol(a)}function KS(i,a){if(i==="input"||i==="change")return Ol(a)}function qS(i,a){return i===a&&(i!==0||1/i===1/a)||i!==i&&a!==a}var yi=typeof Object.is=="function"?Object.is:qS;function vo(i,a){if(yi(i,a))return!0;if(typeof i!="object"||i===null||typeof a!="object"||a===null)return!1;var u=Object.keys(i),h=Object.keys(a);if(u.length!==h.length)return!1;for(h=0;h<u.length;h++){var g=u[h];if(!f.call(a,g)||!yi(i[g],a[g]))return!1}return!0}function zm(i){for(;i&&i.firstChild;)i=i.firstChild;return i}function Hm(i,a){var u=zm(i);i=0;for(var h;u;){if(u.nodeType===3){if(h=i+u.textContent.length,i<=a&&h>=a)return{node:u,offset:a-i};i=h}e:{for(;u;){if(u.nextSibling){u=u.nextSibling;break e}u=u.parentNode}u=void 0}u=zm(u)}}function Vm(i,a){return i&&a?i===a?!0:i&&i.nodeType===3?!1:a&&a.nodeType===3?Vm(i,a.parentNode):"contains"in i?i.contains(a):i.compareDocumentPosition?!!(i.compareDocumentPosition(a)&16):!1:!1}function Gm(){for(var i=window,a=k();a instanceof i.HTMLIFrameElement;){try{var u=typeof a.contentWindow.location.href=="string"}catch{u=!1}if(u)i=a.contentWindow;else break;a=k(i.document)}return a}function ef(i){var a=i&&i.nodeName&&i.nodeName.toLowerCase();return a&&(a==="input"&&(i.type==="text"||i.type==="search"||i.type==="tel"||i.type==="url"||i.type==="password")||a==="textarea"||i.contentEditable==="true")}function ZS(i){var a=Gm(),u=i.focusedElem,h=i.selectionRange;if(a!==u&&u&&u.ownerDocument&&Vm(u.ownerDocument.documentElement,u)){if(h!==null&&ef(u)){if(a=h.start,i=h.end,i===void 0&&(i=a),"selectionStart"in u)u.selectionStart=a,u.selectionEnd=Math.min(i,u.value.length);else if(i=(a=u.ownerDocument||document)&&a.defaultView||window,i.getSelection){i=i.getSelection();var g=u.textContent.length,x=Math.min(h.start,g);h=h.end===void 0?x:Math.min(h.end,g),!i.extend&&x>h&&(g=h,h=x,x=g),g=Hm(u,x);var T=Hm(u,h);g&&T&&(i.rangeCount!==1||i.anchorNode!==g.node||i.anchorOffset!==g.offset||i.focusNode!==T.node||i.focusOffset!==T.offset)&&(a=a.createRange(),a.setStart(g.node,g.offset),i.removeAllRanges(),x>h?(i.addRange(a),i.extend(T.node,T.offset)):(a.setEnd(T.node,T.offset),i.addRange(a)))}}for(a=[],i=u;i=i.parentNode;)i.nodeType===1&&a.push({element:i,left:i.scrollLeft,top:i.scrollTop});for(typeof u.focus=="function"&&u.focus(),u=0;u<a.length;u++)i=a[u],i.element.scrollLeft=i.left,i.element.scrollTop=i.top}}var JS=c&&"documentMode"in document&&11>=document.documentMode,qs=null,tf=null,_o=null,nf=!1;function Wm(i,a,u){var h=u.window===u?u.document:u.nodeType===9?u:u.ownerDocument;nf||qs==null||qs!==k(h)||(h=qs,"selectionStart"in h&&ef(h)?h={start:h.selectionStart,end:h.selectionEnd}:(h=(h.ownerDocument&&h.ownerDocument.defaultView||window).getSelection(),h={anchorNode:h.anchorNode,anchorOffset:h.anchorOffset,focusNode:h.focusNode,focusOffset:h.focusOffset}),_o&&vo(_o,h)||(_o=h,h=Hl(tf,"onSelect"),0<h.length&&(a=new Xc("onSelect","select",null,a,u),i.push({event:a,listeners:h}),a.target=qs)))}function kl(i,a){var u={};return u[i.toLowerCase()]=a.toLowerCase(),u["Webkit"+i]="webkit"+a,u["Moz"+i]="moz"+a,u}var Zs={animationend:kl("Animation","AnimationEnd"),animationiteration:kl("Animation","AnimationIteration"),animationstart:kl("Animation","AnimationStart"),transitionend:kl("Transition","TransitionEnd")},rf={},jm={};c&&(jm=document.createElement("div").style,"AnimationEvent"in window||(delete Zs.animationend.animation,delete Zs.animationiteration.animation,delete Zs.animationstart.animation),"TransitionEvent"in window||delete Zs.transitionend.transition);function Bl(i){if(rf[i])return rf[i];if(!Zs[i])return i;var a=Zs[i],u;for(u in a)if(a.hasOwnProperty(u)&&u in jm)return rf[i]=a[u];return i}var Xm=Bl("animationend"),$m=Bl("animationiteration"),Ym=Bl("animationstart"),Km=Bl("transitionend"),qm=new Map,Zm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ur(i,a){qm.set(i,a),o(a,[i])}for(var sf=0;sf<Zm.length;sf++){var af=Zm[sf],QS=af.toLowerCase(),eE=af[0].toUpperCase()+af.slice(1);Ur(QS,"on"+eE)}Ur(Xm,"onAnimationEnd"),Ur($m,"onAnimationIteration"),Ur(Ym,"onAnimationStart"),Ur("dblclick","onDoubleClick"),Ur("focusin","onFocus"),Ur("focusout","onBlur"),Ur(Km,"onTransitionEnd"),l("onMouseEnter",["mouseout","mouseover"]),l("onMouseLeave",["mouseout","mouseover"]),l("onPointerEnter",["pointerout","pointerover"]),l("onPointerLeave",["pointerout","pointerover"]),o("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),o("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),o("onBeforeInput",["compositionend","keypress","textInput","paste"]),o("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),o("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),o("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var yo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),tE=new Set("cancel close invalid load scroll toggle".split(" ").concat(yo));function Jm(i,a,u){var h=i.type||"unknown-event";i.currentTarget=u,Tl(h,a,void 0,i),i.currentTarget=null}function Qm(i,a){a=(a&4)!==0;for(var u=0;u<i.length;u++){var h=i[u],g=h.event;h=h.listeners;e:{var x=void 0;if(a)for(var T=h.length-1;0<=T;T--){var N=h[T],B=N.instance,J=N.currentTarget;if(N=N.listener,B!==x&&g.isPropagationStopped())break e;Jm(g,N,J),x=B}else for(T=0;T<h.length;T++){if(N=h[T],B=N.instance,J=N.currentTarget,N=N.listener,B!==x&&g.isPropagationStopped())break e;Jm(g,N,J),x=B}}}if(Qi)throw i=js,Qi=!1,js=null,i}function $t(i,a){var u=a[pf];u===void 0&&(u=a[pf]=new Set);var h=i+"__bubble";u.has(h)||(eg(a,i,2,!1),u.add(h))}function of(i,a,u){var h=0;a&&(h|=4),eg(u,i,h,a)}var zl="_reactListening"+Math.random().toString(36).slice(2);function xo(i){if(!i[zl]){i[zl]=!0,n.forEach(function(u){u!=="selectionchange"&&(tE.has(u)||of(u,!1,i),of(u,!0,i))});var a=i.nodeType===9?i:i.ownerDocument;a===null||a[zl]||(a[zl]=!0,of("selectionchange",!1,a))}}function eg(i,a,u,h){switch(Mm(a)){case 1:var g=mS;break;case 4:g=gS;break;default:g=Gc}u=g.bind(null,a,u,i),g=void 0,!Ws||a!=="touchstart"&&a!=="touchmove"&&a!=="wheel"||(g=!0),h?g!==void 0?i.addEventListener(a,u,{capture:!0,passive:g}):i.addEventListener(a,u,!0):g!==void 0?i.addEventListener(a,u,{passive:g}):i.addEventListener(a,u,!1)}function lf(i,a,u,h,g){var x=h;if((a&1)===0&&(a&2)===0&&h!==null)e:for(;;){if(h===null)return;var T=h.tag;if(T===3||T===4){var N=h.stateNode.containerInfo;if(N===g||N.nodeType===8&&N.parentNode===g)break;if(T===4)for(T=h.return;T!==null;){var B=T.tag;if((B===3||B===4)&&(B=T.stateNode.containerInfo,B===g||B.nodeType===8&&B.parentNode===g))return;T=T.return}for(;N!==null;){if(T=ps(N),T===null)return;if(B=T.tag,B===5||B===6){h=x=T;continue e}N=N.parentNode}}h=h.return}ai(function(){var J=x,ve=V(u),_e=[];e:{var me=qm.get(i);if(me!==void 0){var Ue=Xc,He=i;switch(i){case"keypress":if(Nl(u)===0)break e;case"keydown":case"keyup":Ue=LS;break;case"focusin":He="focus",Ue=Kc;break;case"focusout":He="blur",Ue=Kc;break;case"beforeblur":case"afterblur":Ue=Kc;break;case"click":if(u.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ue=bm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ue=yS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ue=NS;break;case Xm:case $m:case Ym:Ue=ES;break;case Km:Ue=FS;break;case"scroll":Ue=vS;break;case"wheel":Ue=kS;break;case"copy":case"cut":case"paste":Ue=TS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ue=Rm}var Ye=(a&4)!==0,rn=!Ye&&i==="scroll",Y=Ye?me!==null?me+"Capture":null:me;Ye=[];for(var G=J,q;G!==null;){q=G;var we=q.stateNode;if(q.tag===5&&we!==null&&(q=we,Y!==null&&(we=Mn(G,Y),we!=null&&Ye.push(So(G,we,q)))),rn)break;G=G.return}0<Ye.length&&(me=new Ue(me,He,null,u,ve),_e.push({event:me,listeners:Ye}))}}if((a&7)===0){e:{if(me=i==="mouseover"||i==="pointerover",Ue=i==="mouseout"||i==="pointerout",me&&u!==pt&&(He=u.relatedTarget||u.fromElement)&&(ps(He)||He[tr]))break e;if((Ue||me)&&(me=ve.window===ve?ve:(me=ve.ownerDocument)?me.defaultView||me.parentWindow:window,Ue?(He=u.relatedTarget||u.toElement,Ue=J,He=He?ps(He):null,He!==null&&(rn=er(He),He!==rn||He.tag!==5&&He.tag!==6)&&(He=null)):(Ue=null,He=J),Ue!==He)){if(Ye=bm,we="onMouseLeave",Y="onMouseEnter",G="mouse",(i==="pointerout"||i==="pointerover")&&(Ye=Rm,we="onPointerLeave",Y="onPointerEnter",G="pointer"),rn=Ue==null?me:ea(Ue),q=He==null?me:ea(He),me=new Ye(we,G+"leave",Ue,u,ve),me.target=rn,me.relatedTarget=q,we=null,ps(ve)===J&&(Ye=new Ye(Y,G+"enter",He,u,ve),Ye.target=q,Ye.relatedTarget=rn,we=Ye),rn=we,Ue&&He)t:{for(Ye=Ue,Y=He,G=0,q=Ye;q;q=Js(q))G++;for(q=0,we=Y;we;we=Js(we))q++;for(;0<G-q;)Ye=Js(Ye),G--;for(;0<q-G;)Y=Js(Y),q--;for(;G--;){if(Ye===Y||Y!==null&&Ye===Y.alternate)break t;Ye=Js(Ye),Y=Js(Y)}Ye=null}else Ye=null;Ue!==null&&tg(_e,me,Ue,Ye,!1),He!==null&&rn!==null&&tg(_e,rn,He,Ye,!0)}}e:{if(me=J?ea(J):window,Ue=me.nodeName&&me.nodeName.toLowerCase(),Ue==="select"||Ue==="input"&&me.type==="file")var qe=jS;else if(Nm(me))if(Fm)qe=KS;else{qe=$S;var nt=XS}else(Ue=me.nodeName)&&Ue.toLowerCase()==="input"&&(me.type==="checkbox"||me.type==="radio")&&(qe=YS);if(qe&&(qe=qe(i,J))){Um(_e,qe,u,ve);break e}nt&&nt(i,me,J),i==="focusout"&&(nt=me._wrapperState)&&nt.controlled&&me.type==="number"&&We(me,"number",me.value)}switch(nt=J?ea(J):window,i){case"focusin":(Nm(nt)||nt.contentEditable==="true")&&(qs=nt,tf=J,_o=null);break;case"focusout":_o=tf=qs=null;break;case"mousedown":nf=!0;break;case"contextmenu":case"mouseup":case"dragend":nf=!1,Wm(_e,u,ve);break;case"selectionchange":if(JS)break;case"keydown":case"keyup":Wm(_e,u,ve)}var it;if(Zc)e:{switch(i){case"compositionstart":var ut="onCompositionStart";break e;case"compositionend":ut="onCompositionEnd";break e;case"compositionupdate":ut="onCompositionUpdate";break e}ut=void 0}else Ks?Im(i,u)&&(ut="onCompositionEnd"):i==="keydown"&&u.keyCode===229&&(ut="onCompositionStart");ut&&(Cm&&u.locale!=="ko"&&(Ks||ut!=="onCompositionStart"?ut==="onCompositionEnd"&&Ks&&(it=Tm()):(Nr=ve,jc="value"in Nr?Nr.value:Nr.textContent,Ks=!0)),nt=Hl(J,ut),0<nt.length&&(ut=new Am(ut,i,null,u,ve),_e.push({event:ut,listeners:nt}),it?ut.data=it:(it=Dm(u),it!==null&&(ut.data=it)))),(it=zS?HS(i,u):VS(i,u))&&(J=Hl(J,"onBeforeInput"),0<J.length&&(ve=new Am("onBeforeInput","beforeinput",null,u,ve),_e.push({event:ve,listeners:J}),ve.data=it))}Qm(_e,a)})}function So(i,a,u){return{instance:i,listener:a,currentTarget:u}}function Hl(i,a){for(var u=a+"Capture",h=[];i!==null;){var g=i,x=g.stateNode;g.tag===5&&x!==null&&(g=x,x=Mn(i,u),x!=null&&h.unshift(So(i,x,g)),x=Mn(i,a),x!=null&&h.push(So(i,x,g))),i=i.return}return h}function Js(i){if(i===null)return null;do i=i.return;while(i&&i.tag!==5);return i||null}function tg(i,a,u,h,g){for(var x=a._reactName,T=[];u!==null&&u!==h;){var N=u,B=N.alternate,J=N.stateNode;if(B!==null&&B===h)break;N.tag===5&&J!==null&&(N=J,g?(B=Mn(u,x),B!=null&&T.unshift(So(u,B,N))):g||(B=Mn(u,x),B!=null&&T.push(So(u,B,N)))),u=u.return}T.length!==0&&i.push({event:a,listeners:T})}var nE=/\r\n?/g,iE=/\u0000|\uFFFD/g;function ng(i){return(typeof i=="string"?i:""+i).replace(nE,`
`).replace(iE,"")}function Vl(i,a,u){if(a=ng(a),ng(i)!==a&&u)throw Error(t(425))}function Gl(){}var uf=null,cf=null;function ff(i,a){return i==="textarea"||i==="noscript"||typeof a.children=="string"||typeof a.children=="number"||typeof a.dangerouslySetInnerHTML=="object"&&a.dangerouslySetInnerHTML!==null&&a.dangerouslySetInnerHTML.__html!=null}var df=typeof setTimeout=="function"?setTimeout:void 0,rE=typeof clearTimeout=="function"?clearTimeout:void 0,ig=typeof Promise=="function"?Promise:void 0,sE=typeof queueMicrotask=="function"?queueMicrotask:typeof ig<"u"?function(i){return ig.resolve(null).then(i).catch(aE)}:df;function aE(i){setTimeout(function(){throw i})}function hf(i,a){var u=a,h=0;do{var g=u.nextSibling;if(i.removeChild(u),g&&g.nodeType===8)if(u=g.data,u==="/$"){if(h===0){i.removeChild(g),co(a);return}h--}else u!=="$"&&u!=="$?"&&u!=="$!"||h++;u=g}while(u);co(a)}function Fr(i){for(;i!=null;i=i.nextSibling){var a=i.nodeType;if(a===1||a===3)break;if(a===8){if(a=i.data,a==="$"||a==="$!"||a==="$?")break;if(a==="/$")return null}}return i}function rg(i){i=i.previousSibling;for(var a=0;i;){if(i.nodeType===8){var u=i.data;if(u==="$"||u==="$!"||u==="$?"){if(a===0)return i;a--}else u==="/$"&&a++}i=i.previousSibling}return null}var Qs=Math.random().toString(36).slice(2),Ui="__reactFiber$"+Qs,Eo="__reactProps$"+Qs,tr="__reactContainer$"+Qs,pf="__reactEvents$"+Qs,oE="__reactListeners$"+Qs,lE="__reactHandles$"+Qs;function ps(i){var a=i[Ui];if(a)return a;for(var u=i.parentNode;u;){if(a=u[tr]||u[Ui]){if(u=a.alternate,a.child!==null||u!==null&&u.child!==null)for(i=rg(i);i!==null;){if(u=i[Ui])return u;i=rg(i)}return a}i=u,u=i.parentNode}return null}function Mo(i){return i=i[Ui]||i[tr],!i||i.tag!==5&&i.tag!==6&&i.tag!==13&&i.tag!==3?null:i}function ea(i){if(i.tag===5||i.tag===6)return i.stateNode;throw Error(t(33))}function Wl(i){return i[Eo]||null}var mf=[],ta=-1;function Or(i){return{current:i}}function Yt(i){0>ta||(i.current=mf[ta],mf[ta]=null,ta--)}function Wt(i,a){ta++,mf[ta]=i.current,i.current=a}var kr={},bn=Or(kr),Gn=Or(!1),ms=kr;function na(i,a){var u=i.type.contextTypes;if(!u)return kr;var h=i.stateNode;if(h&&h.__reactInternalMemoizedUnmaskedChildContext===a)return h.__reactInternalMemoizedMaskedChildContext;var g={},x;for(x in u)g[x]=a[x];return h&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=a,i.__reactInternalMemoizedMaskedChildContext=g),g}function Wn(i){return i=i.childContextTypes,i!=null}function jl(){Yt(Gn),Yt(bn)}function sg(i,a,u){if(bn.current!==kr)throw Error(t(168));Wt(bn,a),Wt(Gn,u)}function ag(i,a,u){var h=i.stateNode;if(a=a.childContextTypes,typeof h.getChildContext!="function")return u;h=h.getChildContext();for(var g in h)if(!(g in a))throw Error(t(108,ue(i)||"Unknown",g));return re({},u,h)}function Xl(i){return i=(i=i.stateNode)&&i.__reactInternalMemoizedMergedChildContext||kr,ms=bn.current,Wt(bn,i),Wt(Gn,Gn.current),!0}function og(i,a,u){var h=i.stateNode;if(!h)throw Error(t(169));u?(i=ag(i,a,ms),h.__reactInternalMemoizedMergedChildContext=i,Yt(Gn),Yt(bn),Wt(bn,i)):Yt(Gn),Wt(Gn,u)}var nr=null,$l=!1,gf=!1;function lg(i){nr===null?nr=[i]:nr.push(i)}function uE(i){$l=!0,lg(i)}function Br(){if(!gf&&nr!==null){gf=!0;var i=0,a=Mt;try{var u=nr;for(Mt=1;i<u.length;i++){var h=u[i];do h=h(!0);while(h!==null)}nr=null,$l=!1}catch(g){throw nr!==null&&(nr=nr.slice(i+1)),A(Ce,Br),g}finally{Mt=a,gf=!1}}return null}var ia=[],ra=0,Yl=null,Kl=0,oi=[],li=0,gs=null,ir=1,rr="";function vs(i,a){ia[ra++]=Kl,ia[ra++]=Yl,Yl=i,Kl=a}function ug(i,a,u){oi[li++]=ir,oi[li++]=rr,oi[li++]=gs,gs=i;var h=ir;i=rr;var g=32-At(h)-1;h&=~(1<<g),u+=1;var x=32-At(a)+g;if(30<x){var T=g-g%5;x=(h&(1<<T)-1).toString(32),h>>=T,g-=T,ir=1<<32-At(a)+g|u<<g|h,rr=x+i}else ir=1<<x|u<<g|h,rr=i}function vf(i){i.return!==null&&(vs(i,1),ug(i,1,0))}function _f(i){for(;i===Yl;)Yl=ia[--ra],ia[ra]=null,Kl=ia[--ra],ia[ra]=null;for(;i===gs;)gs=oi[--li],oi[li]=null,rr=oi[--li],oi[li]=null,ir=oi[--li],oi[li]=null}var Qn=null,ei=null,qt=!1,xi=null;function cg(i,a){var u=di(5,null,null,0);u.elementType="DELETED",u.stateNode=a,u.return=i,a=i.deletions,a===null?(i.deletions=[u],i.flags|=16):a.push(u)}function fg(i,a){switch(i.tag){case 5:var u=i.type;return a=a.nodeType!==1||u.toLowerCase()!==a.nodeName.toLowerCase()?null:a,a!==null?(i.stateNode=a,Qn=i,ei=Fr(a.firstChild),!0):!1;case 6:return a=i.pendingProps===""||a.nodeType!==3?null:a,a!==null?(i.stateNode=a,Qn=i,ei=null,!0):!1;case 13:return a=a.nodeType!==8?null:a,a!==null?(u=gs!==null?{id:ir,overflow:rr}:null,i.memoizedState={dehydrated:a,treeContext:u,retryLane:1073741824},u=di(18,null,null,0),u.stateNode=a,u.return=i,i.child=u,Qn=i,ei=null,!0):!1;default:return!1}}function yf(i){return(i.mode&1)!==0&&(i.flags&128)===0}function xf(i){if(qt){var a=ei;if(a){var u=a;if(!fg(i,a)){if(yf(i))throw Error(t(418));a=Fr(u.nextSibling);var h=Qn;a&&fg(i,a)?cg(h,u):(i.flags=i.flags&-4097|2,qt=!1,Qn=i)}}else{if(yf(i))throw Error(t(418));i.flags=i.flags&-4097|2,qt=!1,Qn=i}}}function dg(i){for(i=i.return;i!==null&&i.tag!==5&&i.tag!==3&&i.tag!==13;)i=i.return;Qn=i}function ql(i){if(i!==Qn)return!1;if(!qt)return dg(i),qt=!0,!1;var a;if((a=i.tag!==3)&&!(a=i.tag!==5)&&(a=i.type,a=a!=="head"&&a!=="body"&&!ff(i.type,i.memoizedProps)),a&&(a=ei)){if(yf(i))throw hg(),Error(t(418));for(;a;)cg(i,a),a=Fr(a.nextSibling)}if(dg(i),i.tag===13){if(i=i.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(t(317));e:{for(i=i.nextSibling,a=0;i;){if(i.nodeType===8){var u=i.data;if(u==="/$"){if(a===0){ei=Fr(i.nextSibling);break e}a--}else u!=="$"&&u!=="$!"&&u!=="$?"||a++}i=i.nextSibling}ei=null}}else ei=Qn?Fr(i.stateNode.nextSibling):null;return!0}function hg(){for(var i=ei;i;)i=Fr(i.nextSibling)}function sa(){ei=Qn=null,qt=!1}function Sf(i){xi===null?xi=[i]:xi.push(i)}var cE=b.ReactCurrentBatchConfig;function To(i,a,u){if(i=u.ref,i!==null&&typeof i!="function"&&typeof i!="object"){if(u._owner){if(u=u._owner,u){if(u.tag!==1)throw Error(t(309));var h=u.stateNode}if(!h)throw Error(t(147,i));var g=h,x=""+i;return a!==null&&a.ref!==null&&typeof a.ref=="function"&&a.ref._stringRef===x?a.ref:(a=function(T){var N=g.refs;T===null?delete N[x]:N[x]=T},a._stringRef=x,a)}if(typeof i!="string")throw Error(t(284));if(!u._owner)throw Error(t(290,i))}return i}function Zl(i,a){throw i=Object.prototype.toString.call(a),Error(t(31,i==="[object Object]"?"object with keys {"+Object.keys(a).join(", ")+"}":i))}function pg(i){var a=i._init;return a(i._payload)}function mg(i){function a(Y,G){if(i){var q=Y.deletions;q===null?(Y.deletions=[G],Y.flags|=16):q.push(G)}}function u(Y,G){if(!i)return null;for(;G!==null;)a(Y,G),G=G.sibling;return null}function h(Y,G){for(Y=new Map;G!==null;)G.key!==null?Y.set(G.key,G):Y.set(G.index,G),G=G.sibling;return Y}function g(Y,G){return Y=$r(Y,G),Y.index=0,Y.sibling=null,Y}function x(Y,G,q){return Y.index=q,i?(q=Y.alternate,q!==null?(q=q.index,q<G?(Y.flags|=2,G):q):(Y.flags|=2,G)):(Y.flags|=1048576,G)}function T(Y){return i&&Y.alternate===null&&(Y.flags|=2),Y}function N(Y,G,q,we){return G===null||G.tag!==6?(G=dd(q,Y.mode,we),G.return=Y,G):(G=g(G,q),G.return=Y,G)}function B(Y,G,q,we){var qe=q.type;return qe===U?ve(Y,G,q.props.children,we,q.key):G!==null&&(G.elementType===qe||typeof qe=="object"&&qe!==null&&qe.$$typeof===oe&&pg(qe)===G.type)?(we=g(G,q.props),we.ref=To(Y,G,q),we.return=Y,we):(we=Su(q.type,q.key,q.props,null,Y.mode,we),we.ref=To(Y,G,q),we.return=Y,we)}function J(Y,G,q,we){return G===null||G.tag!==4||G.stateNode.containerInfo!==q.containerInfo||G.stateNode.implementation!==q.implementation?(G=hd(q,Y.mode,we),G.return=Y,G):(G=g(G,q.children||[]),G.return=Y,G)}function ve(Y,G,q,we,qe){return G===null||G.tag!==7?(G=ws(q,Y.mode,we,qe),G.return=Y,G):(G=g(G,q),G.return=Y,G)}function _e(Y,G,q){if(typeof G=="string"&&G!==""||typeof G=="number")return G=dd(""+G,Y.mode,q),G.return=Y,G;if(typeof G=="object"&&G!==null){switch(G.$$typeof){case I:return q=Su(G.type,G.key,G.props,null,Y.mode,q),q.ref=To(Y,null,G),q.return=Y,q;case F:return G=hd(G,Y.mode,q),G.return=Y,G;case oe:var we=G._init;return _e(Y,we(G._payload),q)}if(ct(G)||le(G))return G=ws(G,Y.mode,q,null),G.return=Y,G;Zl(Y,G)}return null}function me(Y,G,q,we){var qe=G!==null?G.key:null;if(typeof q=="string"&&q!==""||typeof q=="number")return qe!==null?null:N(Y,G,""+q,we);if(typeof q=="object"&&q!==null){switch(q.$$typeof){case I:return q.key===qe?B(Y,G,q,we):null;case F:return q.key===qe?J(Y,G,q,we):null;case oe:return qe=q._init,me(Y,G,qe(q._payload),we)}if(ct(q)||le(q))return qe!==null?null:ve(Y,G,q,we,null);Zl(Y,q)}return null}function Ue(Y,G,q,we,qe){if(typeof we=="string"&&we!==""||typeof we=="number")return Y=Y.get(q)||null,N(G,Y,""+we,qe);if(typeof we=="object"&&we!==null){switch(we.$$typeof){case I:return Y=Y.get(we.key===null?q:we.key)||null,B(G,Y,we,qe);case F:return Y=Y.get(we.key===null?q:we.key)||null,J(G,Y,we,qe);case oe:var nt=we._init;return Ue(Y,G,q,nt(we._payload),qe)}if(ct(we)||le(we))return Y=Y.get(q)||null,ve(G,Y,we,qe,null);Zl(G,we)}return null}function He(Y,G,q,we){for(var qe=null,nt=null,it=G,ut=G=0,gn=null;it!==null&&ut<q.length;ut++){it.index>ut?(gn=it,it=null):gn=it.sibling;var Pt=me(Y,it,q[ut],we);if(Pt===null){it===null&&(it=gn);break}i&&it&&Pt.alternate===null&&a(Y,it),G=x(Pt,G,ut),nt===null?qe=Pt:nt.sibling=Pt,nt=Pt,it=gn}if(ut===q.length)return u(Y,it),qt&&vs(Y,ut),qe;if(it===null){for(;ut<q.length;ut++)it=_e(Y,q[ut],we),it!==null&&(G=x(it,G,ut),nt===null?qe=it:nt.sibling=it,nt=it);return qt&&vs(Y,ut),qe}for(it=h(Y,it);ut<q.length;ut++)gn=Ue(it,Y,ut,q[ut],we),gn!==null&&(i&&gn.alternate!==null&&it.delete(gn.key===null?ut:gn.key),G=x(gn,G,ut),nt===null?qe=gn:nt.sibling=gn,nt=gn);return i&&it.forEach(function(Yr){return a(Y,Yr)}),qt&&vs(Y,ut),qe}function Ye(Y,G,q,we){var qe=le(q);if(typeof qe!="function")throw Error(t(150));if(q=qe.call(q),q==null)throw Error(t(151));for(var nt=qe=null,it=G,ut=G=0,gn=null,Pt=q.next();it!==null&&!Pt.done;ut++,Pt=q.next()){it.index>ut?(gn=it,it=null):gn=it.sibling;var Yr=me(Y,it,Pt.value,we);if(Yr===null){it===null&&(it=gn);break}i&&it&&Yr.alternate===null&&a(Y,it),G=x(Yr,G,ut),nt===null?qe=Yr:nt.sibling=Yr,nt=Yr,it=gn}if(Pt.done)return u(Y,it),qt&&vs(Y,ut),qe;if(it===null){for(;!Pt.done;ut++,Pt=q.next())Pt=_e(Y,Pt.value,we),Pt!==null&&(G=x(Pt,G,ut),nt===null?qe=Pt:nt.sibling=Pt,nt=Pt);return qt&&vs(Y,ut),qe}for(it=h(Y,it);!Pt.done;ut++,Pt=q.next())Pt=Ue(it,Y,ut,Pt.value,we),Pt!==null&&(i&&Pt.alternate!==null&&it.delete(Pt.key===null?ut:Pt.key),G=x(Pt,G,ut),nt===null?qe=Pt:nt.sibling=Pt,nt=Pt);return i&&it.forEach(function(GE){return a(Y,GE)}),qt&&vs(Y,ut),qe}function rn(Y,G,q,we){if(typeof q=="object"&&q!==null&&q.type===U&&q.key===null&&(q=q.props.children),typeof q=="object"&&q!==null){switch(q.$$typeof){case I:e:{for(var qe=q.key,nt=G;nt!==null;){if(nt.key===qe){if(qe=q.type,qe===U){if(nt.tag===7){u(Y,nt.sibling),G=g(nt,q.props.children),G.return=Y,Y=G;break e}}else if(nt.elementType===qe||typeof qe=="object"&&qe!==null&&qe.$$typeof===oe&&pg(qe)===nt.type){u(Y,nt.sibling),G=g(nt,q.props),G.ref=To(Y,nt,q),G.return=Y,Y=G;break e}u(Y,nt);break}else a(Y,nt);nt=nt.sibling}q.type===U?(G=ws(q.props.children,Y.mode,we,q.key),G.return=Y,Y=G):(we=Su(q.type,q.key,q.props,null,Y.mode,we),we.ref=To(Y,G,q),we.return=Y,Y=we)}return T(Y);case F:e:{for(nt=q.key;G!==null;){if(G.key===nt)if(G.tag===4&&G.stateNode.containerInfo===q.containerInfo&&G.stateNode.implementation===q.implementation){u(Y,G.sibling),G=g(G,q.children||[]),G.return=Y,Y=G;break e}else{u(Y,G);break}else a(Y,G);G=G.sibling}G=hd(q,Y.mode,we),G.return=Y,Y=G}return T(Y);case oe:return nt=q._init,rn(Y,G,nt(q._payload),we)}if(ct(q))return He(Y,G,q,we);if(le(q))return Ye(Y,G,q,we);Zl(Y,q)}return typeof q=="string"&&q!==""||typeof q=="number"?(q=""+q,G!==null&&G.tag===6?(u(Y,G.sibling),G=g(G,q),G.return=Y,Y=G):(u(Y,G),G=dd(q,Y.mode,we),G.return=Y,Y=G),T(Y)):u(Y,G)}return rn}var aa=mg(!0),gg=mg(!1),Jl=Or(null),Ql=null,oa=null,Ef=null;function Mf(){Ef=oa=Ql=null}function Tf(i){var a=Jl.current;Yt(Jl),i._currentValue=a}function wf(i,a,u){for(;i!==null;){var h=i.alternate;if((i.childLanes&a)!==a?(i.childLanes|=a,h!==null&&(h.childLanes|=a)):h!==null&&(h.childLanes&a)!==a&&(h.childLanes|=a),i===u)break;i=i.return}}function la(i,a){Ql=i,Ef=oa=null,i=i.dependencies,i!==null&&i.firstContext!==null&&((i.lanes&a)!==0&&(jn=!0),i.firstContext=null)}function ui(i){var a=i._currentValue;if(Ef!==i)if(i={context:i,memoizedValue:a,next:null},oa===null){if(Ql===null)throw Error(t(308));oa=i,Ql.dependencies={lanes:0,firstContext:i}}else oa=oa.next=i;return a}var _s=null;function bf(i){_s===null?_s=[i]:_s.push(i)}function vg(i,a,u,h){var g=a.interleaved;return g===null?(u.next=u,bf(a)):(u.next=g.next,g.next=u),a.interleaved=u,sr(i,h)}function sr(i,a){i.lanes|=a;var u=i.alternate;for(u!==null&&(u.lanes|=a),u=i,i=i.return;i!==null;)i.childLanes|=a,u=i.alternate,u!==null&&(u.childLanes|=a),u=i,i=i.return;return u.tag===3?u.stateNode:null}var zr=!1;function Af(i){i.updateQueue={baseState:i.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function _g(i,a){i=i.updateQueue,a.updateQueue===i&&(a.updateQueue={baseState:i.baseState,firstBaseUpdate:i.firstBaseUpdate,lastBaseUpdate:i.lastBaseUpdate,shared:i.shared,effects:i.effects})}function ar(i,a){return{eventTime:i,lane:a,tag:0,payload:null,callback:null,next:null}}function Hr(i,a,u){var h=i.updateQueue;if(h===null)return null;if(h=h.shared,(Ct&2)!==0){var g=h.pending;return g===null?a.next=a:(a.next=g.next,g.next=a),h.pending=a,sr(i,u)}return g=h.interleaved,g===null?(a.next=a,bf(h)):(a.next=g.next,g.next=a),h.interleaved=a,sr(i,u)}function eu(i,a,u){if(a=a.updateQueue,a!==null&&(a=a.shared,(u&4194240)!==0)){var h=a.lanes;h&=i.pendingLanes,u|=h,a.lanes=u,hs(i,u)}}function yg(i,a){var u=i.updateQueue,h=i.alternate;if(h!==null&&(h=h.updateQueue,u===h)){var g=null,x=null;if(u=u.firstBaseUpdate,u!==null){do{var T={eventTime:u.eventTime,lane:u.lane,tag:u.tag,payload:u.payload,callback:u.callback,next:null};x===null?g=x=T:x=x.next=T,u=u.next}while(u!==null);x===null?g=x=a:x=x.next=a}else g=x=a;u={baseState:h.baseState,firstBaseUpdate:g,lastBaseUpdate:x,shared:h.shared,effects:h.effects},i.updateQueue=u;return}i=u.lastBaseUpdate,i===null?u.firstBaseUpdate=a:i.next=a,u.lastBaseUpdate=a}function tu(i,a,u,h){var g=i.updateQueue;zr=!1;var x=g.firstBaseUpdate,T=g.lastBaseUpdate,N=g.shared.pending;if(N!==null){g.shared.pending=null;var B=N,J=B.next;B.next=null,T===null?x=J:T.next=J,T=B;var ve=i.alternate;ve!==null&&(ve=ve.updateQueue,N=ve.lastBaseUpdate,N!==T&&(N===null?ve.firstBaseUpdate=J:N.next=J,ve.lastBaseUpdate=B))}if(x!==null){var _e=g.baseState;T=0,ve=J=B=null,N=x;do{var me=N.lane,Ue=N.eventTime;if((h&me)===me){ve!==null&&(ve=ve.next={eventTime:Ue,lane:0,tag:N.tag,payload:N.payload,callback:N.callback,next:null});e:{var He=i,Ye=N;switch(me=a,Ue=u,Ye.tag){case 1:if(He=Ye.payload,typeof He=="function"){_e=He.call(Ue,_e,me);break e}_e=He;break e;case 3:He.flags=He.flags&-65537|128;case 0:if(He=Ye.payload,me=typeof He=="function"?He.call(Ue,_e,me):He,me==null)break e;_e=re({},_e,me);break e;case 2:zr=!0}}N.callback!==null&&N.lane!==0&&(i.flags|=64,me=g.effects,me===null?g.effects=[N]:me.push(N))}else Ue={eventTime:Ue,lane:me,tag:N.tag,payload:N.payload,callback:N.callback,next:null},ve===null?(J=ve=Ue,B=_e):ve=ve.next=Ue,T|=me;if(N=N.next,N===null){if(N=g.shared.pending,N===null)break;me=N,N=me.next,me.next=null,g.lastBaseUpdate=me,g.shared.pending=null}}while(!0);if(ve===null&&(B=_e),g.baseState=B,g.firstBaseUpdate=J,g.lastBaseUpdate=ve,a=g.shared.interleaved,a!==null){g=a;do T|=g.lane,g=g.next;while(g!==a)}else x===null&&(g.shared.lanes=0);Ss|=T,i.lanes=T,i.memoizedState=_e}}function xg(i,a,u){if(i=a.effects,a.effects=null,i!==null)for(a=0;a<i.length;a++){var h=i[a],g=h.callback;if(g!==null){if(h.callback=null,h=u,typeof g!="function")throw Error(t(191,g));g.call(h)}}}var wo={},Fi=Or(wo),bo=Or(wo),Ao=Or(wo);function ys(i){if(i===wo)throw Error(t(174));return i}function Rf(i,a){switch(Wt(Ao,a),Wt(bo,i),Wt(Fi,wo),i=a.nodeType,i){case 9:case 11:a=(a=a.documentElement)?a.namespaceURI:ge(null,"");break;default:i=i===8?a.parentNode:a,a=i.namespaceURI||null,i=i.tagName,a=ge(a,i)}Yt(Fi),Wt(Fi,a)}function ua(){Yt(Fi),Yt(bo),Yt(Ao)}function Sg(i){ys(Ao.current);var a=ys(Fi.current),u=ge(a,i.type);a!==u&&(Wt(bo,i),Wt(Fi,u))}function Cf(i){bo.current===i&&(Yt(Fi),Yt(bo))}var Zt=Or(0);function nu(i){for(var a=i;a!==null;){if(a.tag===13){var u=a.memoizedState;if(u!==null&&(u=u.dehydrated,u===null||u.data==="$?"||u.data==="$!"))return a}else if(a.tag===19&&a.memoizedProps.revealOrder!==void 0){if((a.flags&128)!==0)return a}else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return null;a=a.return}a.sibling.return=a.return,a=a.sibling}return null}var Pf=[];function Lf(){for(var i=0;i<Pf.length;i++)Pf[i]._workInProgressVersionPrimary=null;Pf.length=0}var iu=b.ReactCurrentDispatcher,If=b.ReactCurrentBatchConfig,xs=0,Jt=null,un=null,pn=null,ru=!1,Ro=!1,Co=0,fE=0;function An(){throw Error(t(321))}function Df(i,a){if(a===null)return!1;for(var u=0;u<a.length&&u<i.length;u++)if(!yi(i[u],a[u]))return!1;return!0}function Nf(i,a,u,h,g,x){if(xs=x,Jt=a,a.memoizedState=null,a.updateQueue=null,a.lanes=0,iu.current=i===null||i.memoizedState===null?mE:gE,i=u(h,g),Ro){x=0;do{if(Ro=!1,Co=0,25<=x)throw Error(t(301));x+=1,pn=un=null,a.updateQueue=null,iu.current=vE,i=u(h,g)}while(Ro)}if(iu.current=ou,a=un!==null&&un.next!==null,xs=0,pn=un=Jt=null,ru=!1,a)throw Error(t(300));return i}function Uf(){var i=Co!==0;return Co=0,i}function Oi(){var i={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return pn===null?Jt.memoizedState=pn=i:pn=pn.next=i,pn}function ci(){if(un===null){var i=Jt.alternate;i=i!==null?i.memoizedState:null}else i=un.next;var a=pn===null?Jt.memoizedState:pn.next;if(a!==null)pn=a,un=i;else{if(i===null)throw Error(t(310));un=i,i={memoizedState:un.memoizedState,baseState:un.baseState,baseQueue:un.baseQueue,queue:un.queue,next:null},pn===null?Jt.memoizedState=pn=i:pn=pn.next=i}return pn}function Po(i,a){return typeof a=="function"?a(i):a}function Ff(i){var a=ci(),u=a.queue;if(u===null)throw Error(t(311));u.lastRenderedReducer=i;var h=un,g=h.baseQueue,x=u.pending;if(x!==null){if(g!==null){var T=g.next;g.next=x.next,x.next=T}h.baseQueue=g=x,u.pending=null}if(g!==null){x=g.next,h=h.baseState;var N=T=null,B=null,J=x;do{var ve=J.lane;if((xs&ve)===ve)B!==null&&(B=B.next={lane:0,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null}),h=J.hasEagerState?J.eagerState:i(h,J.action);else{var _e={lane:ve,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null};B===null?(N=B=_e,T=h):B=B.next=_e,Jt.lanes|=ve,Ss|=ve}J=J.next}while(J!==null&&J!==x);B===null?T=h:B.next=N,yi(h,a.memoizedState)||(jn=!0),a.memoizedState=h,a.baseState=T,a.baseQueue=B,u.lastRenderedState=h}if(i=u.interleaved,i!==null){g=i;do x=g.lane,Jt.lanes|=x,Ss|=x,g=g.next;while(g!==i)}else g===null&&(u.lanes=0);return[a.memoizedState,u.dispatch]}function Of(i){var a=ci(),u=a.queue;if(u===null)throw Error(t(311));u.lastRenderedReducer=i;var h=u.dispatch,g=u.pending,x=a.memoizedState;if(g!==null){u.pending=null;var T=g=g.next;do x=i(x,T.action),T=T.next;while(T!==g);yi(x,a.memoizedState)||(jn=!0),a.memoizedState=x,a.baseQueue===null&&(a.baseState=x),u.lastRenderedState=x}return[x,h]}function Eg(){}function Mg(i,a){var u=Jt,h=ci(),g=a(),x=!yi(h.memoizedState,g);if(x&&(h.memoizedState=g,jn=!0),h=h.queue,kf(bg.bind(null,u,h,i),[i]),h.getSnapshot!==a||x||pn!==null&&pn.memoizedState.tag&1){if(u.flags|=2048,Lo(9,wg.bind(null,u,h,g,a),void 0,null),mn===null)throw Error(t(349));(xs&30)!==0||Tg(u,a,g)}return g}function Tg(i,a,u){i.flags|=16384,i={getSnapshot:a,value:u},a=Jt.updateQueue,a===null?(a={lastEffect:null,stores:null},Jt.updateQueue=a,a.stores=[i]):(u=a.stores,u===null?a.stores=[i]:u.push(i))}function wg(i,a,u,h){a.value=u,a.getSnapshot=h,Ag(a)&&Rg(i)}function bg(i,a,u){return u(function(){Ag(a)&&Rg(i)})}function Ag(i){var a=i.getSnapshot;i=i.value;try{var u=a();return!yi(i,u)}catch{return!0}}function Rg(i){var a=sr(i,1);a!==null&&Ti(a,i,1,-1)}function Cg(i){var a=Oi();return typeof i=="function"&&(i=i()),a.memoizedState=a.baseState=i,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Po,lastRenderedState:i},a.queue=i,i=i.dispatch=pE.bind(null,Jt,i),[a.memoizedState,i]}function Lo(i,a,u,h){return i={tag:i,create:a,destroy:u,deps:h,next:null},a=Jt.updateQueue,a===null?(a={lastEffect:null,stores:null},Jt.updateQueue=a,a.lastEffect=i.next=i):(u=a.lastEffect,u===null?a.lastEffect=i.next=i:(h=u.next,u.next=i,i.next=h,a.lastEffect=i)),i}function Pg(){return ci().memoizedState}function su(i,a,u,h){var g=Oi();Jt.flags|=i,g.memoizedState=Lo(1|a,u,void 0,h===void 0?null:h)}function au(i,a,u,h){var g=ci();h=h===void 0?null:h;var x=void 0;if(un!==null){var T=un.memoizedState;if(x=T.destroy,h!==null&&Df(h,T.deps)){g.memoizedState=Lo(a,u,x,h);return}}Jt.flags|=i,g.memoizedState=Lo(1|a,u,x,h)}function Lg(i,a){return su(8390656,8,i,a)}function kf(i,a){return au(2048,8,i,a)}function Ig(i,a){return au(4,2,i,a)}function Dg(i,a){return au(4,4,i,a)}function Ng(i,a){if(typeof a=="function")return i=i(),a(i),function(){a(null)};if(a!=null)return i=i(),a.current=i,function(){a.current=null}}function Ug(i,a,u){return u=u!=null?u.concat([i]):null,au(4,4,Ng.bind(null,a,i),u)}function Bf(){}function Fg(i,a){var u=ci();a=a===void 0?null:a;var h=u.memoizedState;return h!==null&&a!==null&&Df(a,h[1])?h[0]:(u.memoizedState=[i,a],i)}function Og(i,a){var u=ci();a=a===void 0?null:a;var h=u.memoizedState;return h!==null&&a!==null&&Df(a,h[1])?h[0]:(i=i(),u.memoizedState=[i,a],i)}function kg(i,a,u){return(xs&21)===0?(i.baseState&&(i.baseState=!1,jn=!0),i.memoizedState=u):(yi(u,a)||(u=Nn(),Jt.lanes|=u,Ss|=u,i.baseState=!0),a)}function dE(i,a){var u=Mt;Mt=u!==0&&4>u?u:4,i(!0);var h=If.transition;If.transition={};try{i(!1),a()}finally{Mt=u,If.transition=h}}function Bg(){return ci().memoizedState}function hE(i,a,u){var h=jr(i);if(u={lane:h,action:u,hasEagerState:!1,eagerState:null,next:null},zg(i))Hg(a,u);else if(u=vg(i,a,u,h),u!==null){var g=Fn();Ti(u,i,h,g),Vg(u,a,h)}}function pE(i,a,u){var h=jr(i),g={lane:h,action:u,hasEagerState:!1,eagerState:null,next:null};if(zg(i))Hg(a,g);else{var x=i.alternate;if(i.lanes===0&&(x===null||x.lanes===0)&&(x=a.lastRenderedReducer,x!==null))try{var T=a.lastRenderedState,N=x(T,u);if(g.hasEagerState=!0,g.eagerState=N,yi(N,T)){var B=a.interleaved;B===null?(g.next=g,bf(a)):(g.next=B.next,B.next=g),a.interleaved=g;return}}catch{}finally{}u=vg(i,a,g,h),u!==null&&(g=Fn(),Ti(u,i,h,g),Vg(u,a,h))}}function zg(i){var a=i.alternate;return i===Jt||a!==null&&a===Jt}function Hg(i,a){Ro=ru=!0;var u=i.pending;u===null?a.next=a:(a.next=u.next,u.next=a),i.pending=a}function Vg(i,a,u){if((u&4194240)!==0){var h=a.lanes;h&=i.pendingLanes,u|=h,a.lanes=u,hs(i,u)}}var ou={readContext:ui,useCallback:An,useContext:An,useEffect:An,useImperativeHandle:An,useInsertionEffect:An,useLayoutEffect:An,useMemo:An,useReducer:An,useRef:An,useState:An,useDebugValue:An,useDeferredValue:An,useTransition:An,useMutableSource:An,useSyncExternalStore:An,useId:An,unstable_isNewReconciler:!1},mE={readContext:ui,useCallback:function(i,a){return Oi().memoizedState=[i,a===void 0?null:a],i},useContext:ui,useEffect:Lg,useImperativeHandle:function(i,a,u){return u=u!=null?u.concat([i]):null,su(4194308,4,Ng.bind(null,a,i),u)},useLayoutEffect:function(i,a){return su(4194308,4,i,a)},useInsertionEffect:function(i,a){return su(4,2,i,a)},useMemo:function(i,a){var u=Oi();return a=a===void 0?null:a,i=i(),u.memoizedState=[i,a],i},useReducer:function(i,a,u){var h=Oi();return a=u!==void 0?u(a):a,h.memoizedState=h.baseState=a,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:i,lastRenderedState:a},h.queue=i,i=i.dispatch=hE.bind(null,Jt,i),[h.memoizedState,i]},useRef:function(i){var a=Oi();return i={current:i},a.memoizedState=i},useState:Cg,useDebugValue:Bf,useDeferredValue:function(i){return Oi().memoizedState=i},useTransition:function(){var i=Cg(!1),a=i[0];return i=dE.bind(null,i[1]),Oi().memoizedState=i,[a,i]},useMutableSource:function(){},useSyncExternalStore:function(i,a,u){var h=Jt,g=Oi();if(qt){if(u===void 0)throw Error(t(407));u=u()}else{if(u=a(),mn===null)throw Error(t(349));(xs&30)!==0||Tg(h,a,u)}g.memoizedState=u;var x={value:u,getSnapshot:a};return g.queue=x,Lg(bg.bind(null,h,x,i),[i]),h.flags|=2048,Lo(9,wg.bind(null,h,x,u,a),void 0,null),u},useId:function(){var i=Oi(),a=mn.identifierPrefix;if(qt){var u=rr,h=ir;u=(h&~(1<<32-At(h)-1)).toString(32)+u,a=":"+a+"R"+u,u=Co++,0<u&&(a+="H"+u.toString(32)),a+=":"}else u=fE++,a=":"+a+"r"+u.toString(32)+":";return i.memoizedState=a},unstable_isNewReconciler:!1},gE={readContext:ui,useCallback:Fg,useContext:ui,useEffect:kf,useImperativeHandle:Ug,useInsertionEffect:Ig,useLayoutEffect:Dg,useMemo:Og,useReducer:Ff,useRef:Pg,useState:function(){return Ff(Po)},useDebugValue:Bf,useDeferredValue:function(i){var a=ci();return kg(a,un.memoizedState,i)},useTransition:function(){var i=Ff(Po)[0],a=ci().memoizedState;return[i,a]},useMutableSource:Eg,useSyncExternalStore:Mg,useId:Bg,unstable_isNewReconciler:!1},vE={readContext:ui,useCallback:Fg,useContext:ui,useEffect:kf,useImperativeHandle:Ug,useInsertionEffect:Ig,useLayoutEffect:Dg,useMemo:Og,useReducer:Of,useRef:Pg,useState:function(){return Of(Po)},useDebugValue:Bf,useDeferredValue:function(i){var a=ci();return un===null?a.memoizedState=i:kg(a,un.memoizedState,i)},useTransition:function(){var i=Of(Po)[0],a=ci().memoizedState;return[i,a]},useMutableSource:Eg,useSyncExternalStore:Mg,useId:Bg,unstable_isNewReconciler:!1};function Si(i,a){if(i&&i.defaultProps){a=re({},a),i=i.defaultProps;for(var u in i)a[u]===void 0&&(a[u]=i[u]);return a}return a}function zf(i,a,u,h){a=i.memoizedState,u=u(h,a),u=u==null?a:re({},a,u),i.memoizedState=u,i.lanes===0&&(i.updateQueue.baseState=u)}var lu={isMounted:function(i){return(i=i._reactInternals)?er(i)===i:!1},enqueueSetState:function(i,a,u){i=i._reactInternals;var h=Fn(),g=jr(i),x=ar(h,g);x.payload=a,u!=null&&(x.callback=u),a=Hr(i,x,g),a!==null&&(Ti(a,i,g,h),eu(a,i,g))},enqueueReplaceState:function(i,a,u){i=i._reactInternals;var h=Fn(),g=jr(i),x=ar(h,g);x.tag=1,x.payload=a,u!=null&&(x.callback=u),a=Hr(i,x,g),a!==null&&(Ti(a,i,g,h),eu(a,i,g))},enqueueForceUpdate:function(i,a){i=i._reactInternals;var u=Fn(),h=jr(i),g=ar(u,h);g.tag=2,a!=null&&(g.callback=a),a=Hr(i,g,h),a!==null&&(Ti(a,i,h,u),eu(a,i,h))}};function Gg(i,a,u,h,g,x,T){return i=i.stateNode,typeof i.shouldComponentUpdate=="function"?i.shouldComponentUpdate(h,x,T):a.prototype&&a.prototype.isPureReactComponent?!vo(u,h)||!vo(g,x):!0}function Wg(i,a,u){var h=!1,g=kr,x=a.contextType;return typeof x=="object"&&x!==null?x=ui(x):(g=Wn(a)?ms:bn.current,h=a.contextTypes,x=(h=h!=null)?na(i,g):kr),a=new a(u,x),i.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=lu,i.stateNode=a,a._reactInternals=i,h&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=g,i.__reactInternalMemoizedMaskedChildContext=x),a}function jg(i,a,u,h){i=a.state,typeof a.componentWillReceiveProps=="function"&&a.componentWillReceiveProps(u,h),typeof a.UNSAFE_componentWillReceiveProps=="function"&&a.UNSAFE_componentWillReceiveProps(u,h),a.state!==i&&lu.enqueueReplaceState(a,a.state,null)}function Hf(i,a,u,h){var g=i.stateNode;g.props=u,g.state=i.memoizedState,g.refs={},Af(i);var x=a.contextType;typeof x=="object"&&x!==null?g.context=ui(x):(x=Wn(a)?ms:bn.current,g.context=na(i,x)),g.state=i.memoizedState,x=a.getDerivedStateFromProps,typeof x=="function"&&(zf(i,a,x,u),g.state=i.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof g.getSnapshotBeforeUpdate=="function"||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(a=g.state,typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount(),a!==g.state&&lu.enqueueReplaceState(g,g.state,null),tu(i,u,g,h),g.state=i.memoizedState),typeof g.componentDidMount=="function"&&(i.flags|=4194308)}function ca(i,a){try{var u="",h=a;do u+=Ve(h),h=h.return;while(h);var g=u}catch(x){g=`
Error generating stack: `+x.message+`
`+x.stack}return{value:i,source:a,stack:g,digest:null}}function Vf(i,a,u){return{value:i,source:null,stack:u??null,digest:a??null}}function Gf(i,a){try{console.error(a.value)}catch(u){setTimeout(function(){throw u})}}var _E=typeof WeakMap=="function"?WeakMap:Map;function Xg(i,a,u){u=ar(-1,u),u.tag=3,u.payload={element:null};var h=a.value;return u.callback=function(){mu||(mu=!0,rd=h),Gf(i,a)},u}function $g(i,a,u){u=ar(-1,u),u.tag=3;var h=i.type.getDerivedStateFromError;if(typeof h=="function"){var g=a.value;u.payload=function(){return h(g)},u.callback=function(){Gf(i,a)}}var x=i.stateNode;return x!==null&&typeof x.componentDidCatch=="function"&&(u.callback=function(){Gf(i,a),typeof h!="function"&&(Gr===null?Gr=new Set([this]):Gr.add(this));var T=a.stack;this.componentDidCatch(a.value,{componentStack:T!==null?T:""})}),u}function Yg(i,a,u){var h=i.pingCache;if(h===null){h=i.pingCache=new _E;var g=new Set;h.set(a,g)}else g=h.get(a),g===void 0&&(g=new Set,h.set(a,g));g.has(u)||(g.add(u),i=IE.bind(null,i,a,u),a.then(i,i))}function Kg(i){do{var a;if((a=i.tag===13)&&(a=i.memoizedState,a=a!==null?a.dehydrated!==null:!0),a)return i;i=i.return}while(i!==null);return null}function qg(i,a,u,h,g){return(i.mode&1)===0?(i===a?i.flags|=65536:(i.flags|=128,u.flags|=131072,u.flags&=-52805,u.tag===1&&(u.alternate===null?u.tag=17:(a=ar(-1,1),a.tag=2,Hr(u,a,1))),u.lanes|=1),i):(i.flags|=65536,i.lanes=g,i)}var yE=b.ReactCurrentOwner,jn=!1;function Un(i,a,u,h){a.child=i===null?gg(a,null,u,h):aa(a,i.child,u,h)}function Zg(i,a,u,h,g){u=u.render;var x=a.ref;return la(a,g),h=Nf(i,a,u,h,x,g),u=Uf(),i!==null&&!jn?(a.updateQueue=i.updateQueue,a.flags&=-2053,i.lanes&=~g,or(i,a,g)):(qt&&u&&vf(a),a.flags|=1,Un(i,a,h,g),a.child)}function Jg(i,a,u,h,g){if(i===null){var x=u.type;return typeof x=="function"&&!fd(x)&&x.defaultProps===void 0&&u.compare===null&&u.defaultProps===void 0?(a.tag=15,a.type=x,Qg(i,a,x,h,g)):(i=Su(u.type,null,h,a,a.mode,g),i.ref=a.ref,i.return=a,a.child=i)}if(x=i.child,(i.lanes&g)===0){var T=x.memoizedProps;if(u=u.compare,u=u!==null?u:vo,u(T,h)&&i.ref===a.ref)return or(i,a,g)}return a.flags|=1,i=$r(x,h),i.ref=a.ref,i.return=a,a.child=i}function Qg(i,a,u,h,g){if(i!==null){var x=i.memoizedProps;if(vo(x,h)&&i.ref===a.ref)if(jn=!1,a.pendingProps=h=x,(i.lanes&g)!==0)(i.flags&131072)!==0&&(jn=!0);else return a.lanes=i.lanes,or(i,a,g)}return Wf(i,a,u,h,g)}function ev(i,a,u){var h=a.pendingProps,g=h.children,x=i!==null?i.memoizedState:null;if(h.mode==="hidden")if((a.mode&1)===0)a.memoizedState={baseLanes:0,cachePool:null,transitions:null},Wt(da,ti),ti|=u;else{if((u&1073741824)===0)return i=x!==null?x.baseLanes|u:u,a.lanes=a.childLanes=1073741824,a.memoizedState={baseLanes:i,cachePool:null,transitions:null},a.updateQueue=null,Wt(da,ti),ti|=i,null;a.memoizedState={baseLanes:0,cachePool:null,transitions:null},h=x!==null?x.baseLanes:u,Wt(da,ti),ti|=h}else x!==null?(h=x.baseLanes|u,a.memoizedState=null):h=u,Wt(da,ti),ti|=h;return Un(i,a,g,u),a.child}function tv(i,a){var u=a.ref;(i===null&&u!==null||i!==null&&i.ref!==u)&&(a.flags|=512,a.flags|=2097152)}function Wf(i,a,u,h,g){var x=Wn(u)?ms:bn.current;return x=na(a,x),la(a,g),u=Nf(i,a,u,h,x,g),h=Uf(),i!==null&&!jn?(a.updateQueue=i.updateQueue,a.flags&=-2053,i.lanes&=~g,or(i,a,g)):(qt&&h&&vf(a),a.flags|=1,Un(i,a,u,g),a.child)}function nv(i,a,u,h,g){if(Wn(u)){var x=!0;Xl(a)}else x=!1;if(la(a,g),a.stateNode===null)cu(i,a),Wg(a,u,h),Hf(a,u,h,g),h=!0;else if(i===null){var T=a.stateNode,N=a.memoizedProps;T.props=N;var B=T.context,J=u.contextType;typeof J=="object"&&J!==null?J=ui(J):(J=Wn(u)?ms:bn.current,J=na(a,J));var ve=u.getDerivedStateFromProps,_e=typeof ve=="function"||typeof T.getSnapshotBeforeUpdate=="function";_e||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(N!==h||B!==J)&&jg(a,T,h,J),zr=!1;var me=a.memoizedState;T.state=me,tu(a,h,T,g),B=a.memoizedState,N!==h||me!==B||Gn.current||zr?(typeof ve=="function"&&(zf(a,u,ve,h),B=a.memoizedState),(N=zr||Gg(a,u,N,h,me,B,J))?(_e||typeof T.UNSAFE_componentWillMount!="function"&&typeof T.componentWillMount!="function"||(typeof T.componentWillMount=="function"&&T.componentWillMount(),typeof T.UNSAFE_componentWillMount=="function"&&T.UNSAFE_componentWillMount()),typeof T.componentDidMount=="function"&&(a.flags|=4194308)):(typeof T.componentDidMount=="function"&&(a.flags|=4194308),a.memoizedProps=h,a.memoizedState=B),T.props=h,T.state=B,T.context=J,h=N):(typeof T.componentDidMount=="function"&&(a.flags|=4194308),h=!1)}else{T=a.stateNode,_g(i,a),N=a.memoizedProps,J=a.type===a.elementType?N:Si(a.type,N),T.props=J,_e=a.pendingProps,me=T.context,B=u.contextType,typeof B=="object"&&B!==null?B=ui(B):(B=Wn(u)?ms:bn.current,B=na(a,B));var Ue=u.getDerivedStateFromProps;(ve=typeof Ue=="function"||typeof T.getSnapshotBeforeUpdate=="function")||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(N!==_e||me!==B)&&jg(a,T,h,B),zr=!1,me=a.memoizedState,T.state=me,tu(a,h,T,g);var He=a.memoizedState;N!==_e||me!==He||Gn.current||zr?(typeof Ue=="function"&&(zf(a,u,Ue,h),He=a.memoizedState),(J=zr||Gg(a,u,J,h,me,He,B)||!1)?(ve||typeof T.UNSAFE_componentWillUpdate!="function"&&typeof T.componentWillUpdate!="function"||(typeof T.componentWillUpdate=="function"&&T.componentWillUpdate(h,He,B),typeof T.UNSAFE_componentWillUpdate=="function"&&T.UNSAFE_componentWillUpdate(h,He,B)),typeof T.componentDidUpdate=="function"&&(a.flags|=4),typeof T.getSnapshotBeforeUpdate=="function"&&(a.flags|=1024)):(typeof T.componentDidUpdate!="function"||N===i.memoizedProps&&me===i.memoizedState||(a.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||N===i.memoizedProps&&me===i.memoizedState||(a.flags|=1024),a.memoizedProps=h,a.memoizedState=He),T.props=h,T.state=He,T.context=B,h=J):(typeof T.componentDidUpdate!="function"||N===i.memoizedProps&&me===i.memoizedState||(a.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||N===i.memoizedProps&&me===i.memoizedState||(a.flags|=1024),h=!1)}return jf(i,a,u,h,x,g)}function jf(i,a,u,h,g,x){tv(i,a);var T=(a.flags&128)!==0;if(!h&&!T)return g&&og(a,u,!1),or(i,a,x);h=a.stateNode,yE.current=a;var N=T&&typeof u.getDerivedStateFromError!="function"?null:h.render();return a.flags|=1,i!==null&&T?(a.child=aa(a,i.child,null,x),a.child=aa(a,null,N,x)):Un(i,a,N,x),a.memoizedState=h.state,g&&og(a,u,!0),a.child}function iv(i){var a=i.stateNode;a.pendingContext?sg(i,a.pendingContext,a.pendingContext!==a.context):a.context&&sg(i,a.context,!1),Rf(i,a.containerInfo)}function rv(i,a,u,h,g){return sa(),Sf(g),a.flags|=256,Un(i,a,u,h),a.child}var Xf={dehydrated:null,treeContext:null,retryLane:0};function $f(i){return{baseLanes:i,cachePool:null,transitions:null}}function sv(i,a,u){var h=a.pendingProps,g=Zt.current,x=!1,T=(a.flags&128)!==0,N;if((N=T)||(N=i!==null&&i.memoizedState===null?!1:(g&2)!==0),N?(x=!0,a.flags&=-129):(i===null||i.memoizedState!==null)&&(g|=1),Wt(Zt,g&1),i===null)return xf(a),i=a.memoizedState,i!==null&&(i=i.dehydrated,i!==null)?((a.mode&1)===0?a.lanes=1:i.data==="$!"?a.lanes=8:a.lanes=1073741824,null):(T=h.children,i=h.fallback,x?(h=a.mode,x=a.child,T={mode:"hidden",children:T},(h&1)===0&&x!==null?(x.childLanes=0,x.pendingProps=T):x=Eu(T,h,0,null),i=ws(i,h,u,null),x.return=a,i.return=a,x.sibling=i,a.child=x,a.child.memoizedState=$f(u),a.memoizedState=Xf,i):Yf(a,T));if(g=i.memoizedState,g!==null&&(N=g.dehydrated,N!==null))return xE(i,a,T,h,N,g,u);if(x){x=h.fallback,T=a.mode,g=i.child,N=g.sibling;var B={mode:"hidden",children:h.children};return(T&1)===0&&a.child!==g?(h=a.child,h.childLanes=0,h.pendingProps=B,a.deletions=null):(h=$r(g,B),h.subtreeFlags=g.subtreeFlags&14680064),N!==null?x=$r(N,x):(x=ws(x,T,u,null),x.flags|=2),x.return=a,h.return=a,h.sibling=x,a.child=h,h=x,x=a.child,T=i.child.memoizedState,T=T===null?$f(u):{baseLanes:T.baseLanes|u,cachePool:null,transitions:T.transitions},x.memoizedState=T,x.childLanes=i.childLanes&~u,a.memoizedState=Xf,h}return x=i.child,i=x.sibling,h=$r(x,{mode:"visible",children:h.children}),(a.mode&1)===0&&(h.lanes=u),h.return=a,h.sibling=null,i!==null&&(u=a.deletions,u===null?(a.deletions=[i],a.flags|=16):u.push(i)),a.child=h,a.memoizedState=null,h}function Yf(i,a){return a=Eu({mode:"visible",children:a},i.mode,0,null),a.return=i,i.child=a}function uu(i,a,u,h){return h!==null&&Sf(h),aa(a,i.child,null,u),i=Yf(a,a.pendingProps.children),i.flags|=2,a.memoizedState=null,i}function xE(i,a,u,h,g,x,T){if(u)return a.flags&256?(a.flags&=-257,h=Vf(Error(t(422))),uu(i,a,T,h)):a.memoizedState!==null?(a.child=i.child,a.flags|=128,null):(x=h.fallback,g=a.mode,h=Eu({mode:"visible",children:h.children},g,0,null),x=ws(x,g,T,null),x.flags|=2,h.return=a,x.return=a,h.sibling=x,a.child=h,(a.mode&1)!==0&&aa(a,i.child,null,T),a.child.memoizedState=$f(T),a.memoizedState=Xf,x);if((a.mode&1)===0)return uu(i,a,T,null);if(g.data==="$!"){if(h=g.nextSibling&&g.nextSibling.dataset,h)var N=h.dgst;return h=N,x=Error(t(419)),h=Vf(x,h,void 0),uu(i,a,T,h)}if(N=(T&i.childLanes)!==0,jn||N){if(h=mn,h!==null){switch(T&-T){case 4:g=2;break;case 16:g=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:g=32;break;case 536870912:g=268435456;break;default:g=0}g=(g&(h.suspendedLanes|T))!==0?0:g,g!==0&&g!==x.retryLane&&(x.retryLane=g,sr(i,g),Ti(h,i,g,-1))}return cd(),h=Vf(Error(t(421))),uu(i,a,T,h)}return g.data==="$?"?(a.flags|=128,a.child=i.child,a=DE.bind(null,i),g._reactRetry=a,null):(i=x.treeContext,ei=Fr(g.nextSibling),Qn=a,qt=!0,xi=null,i!==null&&(oi[li++]=ir,oi[li++]=rr,oi[li++]=gs,ir=i.id,rr=i.overflow,gs=a),a=Yf(a,h.children),a.flags|=4096,a)}function av(i,a,u){i.lanes|=a;var h=i.alternate;h!==null&&(h.lanes|=a),wf(i.return,a,u)}function Kf(i,a,u,h,g){var x=i.memoizedState;x===null?i.memoizedState={isBackwards:a,rendering:null,renderingStartTime:0,last:h,tail:u,tailMode:g}:(x.isBackwards=a,x.rendering=null,x.renderingStartTime=0,x.last=h,x.tail=u,x.tailMode=g)}function ov(i,a,u){var h=a.pendingProps,g=h.revealOrder,x=h.tail;if(Un(i,a,h.children,u),h=Zt.current,(h&2)!==0)h=h&1|2,a.flags|=128;else{if(i!==null&&(i.flags&128)!==0)e:for(i=a.child;i!==null;){if(i.tag===13)i.memoizedState!==null&&av(i,u,a);else if(i.tag===19)av(i,u,a);else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===a)break e;for(;i.sibling===null;){if(i.return===null||i.return===a)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}h&=1}if(Wt(Zt,h),(a.mode&1)===0)a.memoizedState=null;else switch(g){case"forwards":for(u=a.child,g=null;u!==null;)i=u.alternate,i!==null&&nu(i)===null&&(g=u),u=u.sibling;u=g,u===null?(g=a.child,a.child=null):(g=u.sibling,u.sibling=null),Kf(a,!1,g,u,x);break;case"backwards":for(u=null,g=a.child,a.child=null;g!==null;){if(i=g.alternate,i!==null&&nu(i)===null){a.child=g;break}i=g.sibling,g.sibling=u,u=g,g=i}Kf(a,!0,u,null,x);break;case"together":Kf(a,!1,null,null,void 0);break;default:a.memoizedState=null}return a.child}function cu(i,a){(a.mode&1)===0&&i!==null&&(i.alternate=null,a.alternate=null,a.flags|=2)}function or(i,a,u){if(i!==null&&(a.dependencies=i.dependencies),Ss|=a.lanes,(u&a.childLanes)===0)return null;if(i!==null&&a.child!==i.child)throw Error(t(153));if(a.child!==null){for(i=a.child,u=$r(i,i.pendingProps),a.child=u,u.return=a;i.sibling!==null;)i=i.sibling,u=u.sibling=$r(i,i.pendingProps),u.return=a;u.sibling=null}return a.child}function SE(i,a,u){switch(a.tag){case 3:iv(a),sa();break;case 5:Sg(a);break;case 1:Wn(a.type)&&Xl(a);break;case 4:Rf(a,a.stateNode.containerInfo);break;case 10:var h=a.type._context,g=a.memoizedProps.value;Wt(Jl,h._currentValue),h._currentValue=g;break;case 13:if(h=a.memoizedState,h!==null)return h.dehydrated!==null?(Wt(Zt,Zt.current&1),a.flags|=128,null):(u&a.child.childLanes)!==0?sv(i,a,u):(Wt(Zt,Zt.current&1),i=or(i,a,u),i!==null?i.sibling:null);Wt(Zt,Zt.current&1);break;case 19:if(h=(u&a.childLanes)!==0,(i.flags&128)!==0){if(h)return ov(i,a,u);a.flags|=128}if(g=a.memoizedState,g!==null&&(g.rendering=null,g.tail=null,g.lastEffect=null),Wt(Zt,Zt.current),h)break;return null;case 22:case 23:return a.lanes=0,ev(i,a,u)}return or(i,a,u)}var lv,qf,uv,cv;lv=function(i,a){for(var u=a.child;u!==null;){if(u.tag===5||u.tag===6)i.appendChild(u.stateNode);else if(u.tag!==4&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===a)break;for(;u.sibling===null;){if(u.return===null||u.return===a)return;u=u.return}u.sibling.return=u.return,u=u.sibling}},qf=function(){},uv=function(i,a,u,h){var g=i.memoizedProps;if(g!==h){i=a.stateNode,ys(Fi.current);var x=null;switch(u){case"input":g=Ot(i,g),h=Ot(i,h),x=[];break;case"select":g=re({},g,{value:void 0}),h=re({},h,{value:void 0}),x=[];break;case"textarea":g=Xt(i,g),h=Xt(i,h),x=[];break;default:typeof g.onClick!="function"&&typeof h.onClick=="function"&&(i.onclick=Gl)}Ke(u,h);var T;u=null;for(J in g)if(!h.hasOwnProperty(J)&&g.hasOwnProperty(J)&&g[J]!=null)if(J==="style"){var N=g[J];for(T in N)N.hasOwnProperty(T)&&(u||(u={}),u[T]="")}else J!=="dangerouslySetInnerHTML"&&J!=="children"&&J!=="suppressContentEditableWarning"&&J!=="suppressHydrationWarning"&&J!=="autoFocus"&&(s.hasOwnProperty(J)?x||(x=[]):(x=x||[]).push(J,null));for(J in h){var B=h[J];if(N=g?.[J],h.hasOwnProperty(J)&&B!==N&&(B!=null||N!=null))if(J==="style")if(N){for(T in N)!N.hasOwnProperty(T)||B&&B.hasOwnProperty(T)||(u||(u={}),u[T]="");for(T in B)B.hasOwnProperty(T)&&N[T]!==B[T]&&(u||(u={}),u[T]=B[T])}else u||(x||(x=[]),x.push(J,u)),u=B;else J==="dangerouslySetInnerHTML"?(B=B?B.__html:void 0,N=N?N.__html:void 0,B!=null&&N!==B&&(x=x||[]).push(J,B)):J==="children"?typeof B!="string"&&typeof B!="number"||(x=x||[]).push(J,""+B):J!=="suppressContentEditableWarning"&&J!=="suppressHydrationWarning"&&(s.hasOwnProperty(J)?(B!=null&&J==="onScroll"&&$t("scroll",i),x||N===B||(x=[])):(x=x||[]).push(J,B))}u&&(x=x||[]).push("style",u);var J=x;(a.updateQueue=J)&&(a.flags|=4)}},cv=function(i,a,u,h){u!==h&&(a.flags|=4)};function Io(i,a){if(!qt)switch(i.tailMode){case"hidden":a=i.tail;for(var u=null;a!==null;)a.alternate!==null&&(u=a),a=a.sibling;u===null?i.tail=null:u.sibling=null;break;case"collapsed":u=i.tail;for(var h=null;u!==null;)u.alternate!==null&&(h=u),u=u.sibling;h===null?a||i.tail===null?i.tail=null:i.tail.sibling=null:h.sibling=null}}function Rn(i){var a=i.alternate!==null&&i.alternate.child===i.child,u=0,h=0;if(a)for(var g=i.child;g!==null;)u|=g.lanes|g.childLanes,h|=g.subtreeFlags&14680064,h|=g.flags&14680064,g.return=i,g=g.sibling;else for(g=i.child;g!==null;)u|=g.lanes|g.childLanes,h|=g.subtreeFlags,h|=g.flags,g.return=i,g=g.sibling;return i.subtreeFlags|=h,i.childLanes=u,a}function EE(i,a,u){var h=a.pendingProps;switch(_f(a),a.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Rn(a),null;case 1:return Wn(a.type)&&jl(),Rn(a),null;case 3:return h=a.stateNode,ua(),Yt(Gn),Yt(bn),Lf(),h.pendingContext&&(h.context=h.pendingContext,h.pendingContext=null),(i===null||i.child===null)&&(ql(a)?a.flags|=4:i===null||i.memoizedState.isDehydrated&&(a.flags&256)===0||(a.flags|=1024,xi!==null&&(od(xi),xi=null))),qf(i,a),Rn(a),null;case 5:Cf(a);var g=ys(Ao.current);if(u=a.type,i!==null&&a.stateNode!=null)uv(i,a,u,h,g),i.ref!==a.ref&&(a.flags|=512,a.flags|=2097152);else{if(!h){if(a.stateNode===null)throw Error(t(166));return Rn(a),null}if(i=ys(Fi.current),ql(a)){h=a.stateNode,u=a.type;var x=a.memoizedProps;switch(h[Ui]=a,h[Eo]=x,i=(a.mode&1)!==0,u){case"dialog":$t("cancel",h),$t("close",h);break;case"iframe":case"object":case"embed":$t("load",h);break;case"video":case"audio":for(g=0;g<yo.length;g++)$t(yo[g],h);break;case"source":$t("error",h);break;case"img":case"image":case"link":$t("error",h),$t("load",h);break;case"details":$t("toggle",h);break;case"input":ht(h,x),$t("invalid",h);break;case"select":h._wrapperState={wasMultiple:!!x.multiple},$t("invalid",h);break;case"textarea":D(h,x),$t("invalid",h)}Ke(u,x),g=null;for(var T in x)if(x.hasOwnProperty(T)){var N=x[T];T==="children"?typeof N=="string"?h.textContent!==N&&(x.suppressHydrationWarning!==!0&&Vl(h.textContent,N,i),g=["children",N]):typeof N=="number"&&h.textContent!==""+N&&(x.suppressHydrationWarning!==!0&&Vl(h.textContent,N,i),g=["children",""+N]):s.hasOwnProperty(T)&&N!=null&&T==="onScroll"&&$t("scroll",h)}switch(u){case"input":yt(h),Ht(h,x,!0);break;case"textarea":yt(h),K(h);break;case"select":case"option":break;default:typeof x.onClick=="function"&&(h.onclick=Gl)}h=g,a.updateQueue=h,h!==null&&(a.flags|=4)}else{T=g.nodeType===9?g:g.ownerDocument,i==="http://www.w3.org/1999/xhtml"&&(i=he(u)),i==="http://www.w3.org/1999/xhtml"?u==="script"?(i=T.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild)):typeof h.is=="string"?i=T.createElement(u,{is:h.is}):(i=T.createElement(u),u==="select"&&(T=i,h.multiple?T.multiple=!0:h.size&&(T.size=h.size))):i=T.createElementNS(i,u),i[Ui]=a,i[Eo]=h,lv(i,a,!1,!1),a.stateNode=i;e:{switch(T=Re(u,h),u){case"dialog":$t("cancel",i),$t("close",i),g=h;break;case"iframe":case"object":case"embed":$t("load",i),g=h;break;case"video":case"audio":for(g=0;g<yo.length;g++)$t(yo[g],i);g=h;break;case"source":$t("error",i),g=h;break;case"img":case"image":case"link":$t("error",i),$t("load",i),g=h;break;case"details":$t("toggle",i),g=h;break;case"input":ht(i,h),g=Ot(i,h),$t("invalid",i);break;case"option":g=h;break;case"select":i._wrapperState={wasMultiple:!!h.multiple},g=re({},h,{value:void 0}),$t("invalid",i);break;case"textarea":D(i,h),g=Xt(i,h),$t("invalid",i);break;default:g=h}Ke(u,g),N=g;for(x in N)if(N.hasOwnProperty(x)){var B=N[x];x==="style"?Le(i,B):x==="dangerouslySetInnerHTML"?(B=B?B.__html:void 0,B!=null&&Ze(i,B)):x==="children"?typeof B=="string"?(u!=="textarea"||B!=="")&&be(i,B):typeof B=="number"&&be(i,""+B):x!=="suppressContentEditableWarning"&&x!=="suppressHydrationWarning"&&x!=="autoFocus"&&(s.hasOwnProperty(x)?B!=null&&x==="onScroll"&&$t("scroll",i):B!=null&&C(i,x,B,T))}switch(u){case"input":yt(i),Ht(i,h,!1);break;case"textarea":yt(i),K(i);break;case"option":h.value!=null&&i.setAttribute("value",""+Ee(h.value));break;case"select":i.multiple=!!h.multiple,x=h.value,x!=null?jt(i,!!h.multiple,x,!1):h.defaultValue!=null&&jt(i,!!h.multiple,h.defaultValue,!0);break;default:typeof g.onClick=="function"&&(i.onclick=Gl)}switch(u){case"button":case"input":case"select":case"textarea":h=!!h.autoFocus;break e;case"img":h=!0;break e;default:h=!1}}h&&(a.flags|=4)}a.ref!==null&&(a.flags|=512,a.flags|=2097152)}return Rn(a),null;case 6:if(i&&a.stateNode!=null)cv(i,a,i.memoizedProps,h);else{if(typeof h!="string"&&a.stateNode===null)throw Error(t(166));if(u=ys(Ao.current),ys(Fi.current),ql(a)){if(h=a.stateNode,u=a.memoizedProps,h[Ui]=a,(x=h.nodeValue!==u)&&(i=Qn,i!==null))switch(i.tag){case 3:Vl(h.nodeValue,u,(i.mode&1)!==0);break;case 5:i.memoizedProps.suppressHydrationWarning!==!0&&Vl(h.nodeValue,u,(i.mode&1)!==0)}x&&(a.flags|=4)}else h=(u.nodeType===9?u:u.ownerDocument).createTextNode(h),h[Ui]=a,a.stateNode=h}return Rn(a),null;case 13:if(Yt(Zt),h=a.memoizedState,i===null||i.memoizedState!==null&&i.memoizedState.dehydrated!==null){if(qt&&ei!==null&&(a.mode&1)!==0&&(a.flags&128)===0)hg(),sa(),a.flags|=98560,x=!1;else if(x=ql(a),h!==null&&h.dehydrated!==null){if(i===null){if(!x)throw Error(t(318));if(x=a.memoizedState,x=x!==null?x.dehydrated:null,!x)throw Error(t(317));x[Ui]=a}else sa(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;Rn(a),x=!1}else xi!==null&&(od(xi),xi=null),x=!0;if(!x)return a.flags&65536?a:null}return(a.flags&128)!==0?(a.lanes=u,a):(h=h!==null,h!==(i!==null&&i.memoizedState!==null)&&h&&(a.child.flags|=8192,(a.mode&1)!==0&&(i===null||(Zt.current&1)!==0?cn===0&&(cn=3):cd())),a.updateQueue!==null&&(a.flags|=4),Rn(a),null);case 4:return ua(),qf(i,a),i===null&&xo(a.stateNode.containerInfo),Rn(a),null;case 10:return Tf(a.type._context),Rn(a),null;case 17:return Wn(a.type)&&jl(),Rn(a),null;case 19:if(Yt(Zt),x=a.memoizedState,x===null)return Rn(a),null;if(h=(a.flags&128)!==0,T=x.rendering,T===null)if(h)Io(x,!1);else{if(cn!==0||i!==null&&(i.flags&128)!==0)for(i=a.child;i!==null;){if(T=nu(i),T!==null){for(a.flags|=128,Io(x,!1),h=T.updateQueue,h!==null&&(a.updateQueue=h,a.flags|=4),a.subtreeFlags=0,h=u,u=a.child;u!==null;)x=u,i=h,x.flags&=14680066,T=x.alternate,T===null?(x.childLanes=0,x.lanes=i,x.child=null,x.subtreeFlags=0,x.memoizedProps=null,x.memoizedState=null,x.updateQueue=null,x.dependencies=null,x.stateNode=null):(x.childLanes=T.childLanes,x.lanes=T.lanes,x.child=T.child,x.subtreeFlags=0,x.deletions=null,x.memoizedProps=T.memoizedProps,x.memoizedState=T.memoizedState,x.updateQueue=T.updateQueue,x.type=T.type,i=T.dependencies,x.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),u=u.sibling;return Wt(Zt,Zt.current&1|2),a.child}i=i.sibling}x.tail!==null&&W()>ha&&(a.flags|=128,h=!0,Io(x,!1),a.lanes=4194304)}else{if(!h)if(i=nu(T),i!==null){if(a.flags|=128,h=!0,u=i.updateQueue,u!==null&&(a.updateQueue=u,a.flags|=4),Io(x,!0),x.tail===null&&x.tailMode==="hidden"&&!T.alternate&&!qt)return Rn(a),null}else 2*W()-x.renderingStartTime>ha&&u!==1073741824&&(a.flags|=128,h=!0,Io(x,!1),a.lanes=4194304);x.isBackwards?(T.sibling=a.child,a.child=T):(u=x.last,u!==null?u.sibling=T:a.child=T,x.last=T)}return x.tail!==null?(a=x.tail,x.rendering=a,x.tail=a.sibling,x.renderingStartTime=W(),a.sibling=null,u=Zt.current,Wt(Zt,h?u&1|2:u&1),a):(Rn(a),null);case 22:case 23:return ud(),h=a.memoizedState!==null,i!==null&&i.memoizedState!==null!==h&&(a.flags|=8192),h&&(a.mode&1)!==0?(ti&1073741824)!==0&&(Rn(a),a.subtreeFlags&6&&(a.flags|=8192)):Rn(a),null;case 24:return null;case 25:return null}throw Error(t(156,a.tag))}function ME(i,a){switch(_f(a),a.tag){case 1:return Wn(a.type)&&jl(),i=a.flags,i&65536?(a.flags=i&-65537|128,a):null;case 3:return ua(),Yt(Gn),Yt(bn),Lf(),i=a.flags,(i&65536)!==0&&(i&128)===0?(a.flags=i&-65537|128,a):null;case 5:return Cf(a),null;case 13:if(Yt(Zt),i=a.memoizedState,i!==null&&i.dehydrated!==null){if(a.alternate===null)throw Error(t(340));sa()}return i=a.flags,i&65536?(a.flags=i&-65537|128,a):null;case 19:return Yt(Zt),null;case 4:return ua(),null;case 10:return Tf(a.type._context),null;case 22:case 23:return ud(),null;case 24:return null;default:return null}}var fu=!1,Cn=!1,TE=typeof WeakSet=="function"?WeakSet:Set,ke=null;function fa(i,a){var u=i.ref;if(u!==null)if(typeof u=="function")try{u(null)}catch(h){tn(i,a,h)}else u.current=null}function Zf(i,a,u){try{u()}catch(h){tn(i,a,h)}}var fv=!1;function wE(i,a){if(uf=Ll,i=Gm(),ef(i)){if("selectionStart"in i)var u={start:i.selectionStart,end:i.selectionEnd};else e:{u=(u=i.ownerDocument)&&u.defaultView||window;var h=u.getSelection&&u.getSelection();if(h&&h.rangeCount!==0){u=h.anchorNode;var g=h.anchorOffset,x=h.focusNode;h=h.focusOffset;try{u.nodeType,x.nodeType}catch{u=null;break e}var T=0,N=-1,B=-1,J=0,ve=0,_e=i,me=null;t:for(;;){for(var Ue;_e!==u||g!==0&&_e.nodeType!==3||(N=T+g),_e!==x||h!==0&&_e.nodeType!==3||(B=T+h),_e.nodeType===3&&(T+=_e.nodeValue.length),(Ue=_e.firstChild)!==null;)me=_e,_e=Ue;for(;;){if(_e===i)break t;if(me===u&&++J===g&&(N=T),me===x&&++ve===h&&(B=T),(Ue=_e.nextSibling)!==null)break;_e=me,me=_e.parentNode}_e=Ue}u=N===-1||B===-1?null:{start:N,end:B}}else u=null}u=u||{start:0,end:0}}else u=null;for(cf={focusedElem:i,selectionRange:u},Ll=!1,ke=a;ke!==null;)if(a=ke,i=a.child,(a.subtreeFlags&1028)!==0&&i!==null)i.return=a,ke=i;else for(;ke!==null;){a=ke;try{var He=a.alternate;if((a.flags&1024)!==0)switch(a.tag){case 0:case 11:case 15:break;case 1:if(He!==null){var Ye=He.memoizedProps,rn=He.memoizedState,Y=a.stateNode,G=Y.getSnapshotBeforeUpdate(a.elementType===a.type?Ye:Si(a.type,Ye),rn);Y.__reactInternalSnapshotBeforeUpdate=G}break;case 3:var q=a.stateNode.containerInfo;q.nodeType===1?q.textContent="":q.nodeType===9&&q.documentElement&&q.removeChild(q.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(we){tn(a,a.return,we)}if(i=a.sibling,i!==null){i.return=a.return,ke=i;break}ke=a.return}return He=fv,fv=!1,He}function Do(i,a,u){var h=a.updateQueue;if(h=h!==null?h.lastEffect:null,h!==null){var g=h=h.next;do{if((g.tag&i)===i){var x=g.destroy;g.destroy=void 0,x!==void 0&&Zf(a,u,x)}g=g.next}while(g!==h)}}function du(i,a){if(a=a.updateQueue,a=a!==null?a.lastEffect:null,a!==null){var u=a=a.next;do{if((u.tag&i)===i){var h=u.create;u.destroy=h()}u=u.next}while(u!==a)}}function Jf(i){var a=i.ref;if(a!==null){var u=i.stateNode;switch(i.tag){case 5:i=u;break;default:i=u}typeof a=="function"?a(i):a.current=i}}function dv(i){var a=i.alternate;a!==null&&(i.alternate=null,dv(a)),i.child=null,i.deletions=null,i.sibling=null,i.tag===5&&(a=i.stateNode,a!==null&&(delete a[Ui],delete a[Eo],delete a[pf],delete a[oE],delete a[lE])),i.stateNode=null,i.return=null,i.dependencies=null,i.memoizedProps=null,i.memoizedState=null,i.pendingProps=null,i.stateNode=null,i.updateQueue=null}function hv(i){return i.tag===5||i.tag===3||i.tag===4}function pv(i){e:for(;;){for(;i.sibling===null;){if(i.return===null||hv(i.return))return null;i=i.return}for(i.sibling.return=i.return,i=i.sibling;i.tag!==5&&i.tag!==6&&i.tag!==18;){if(i.flags&2||i.child===null||i.tag===4)continue e;i.child.return=i,i=i.child}if(!(i.flags&2))return i.stateNode}}function Qf(i,a,u){var h=i.tag;if(h===5||h===6)i=i.stateNode,a?u.nodeType===8?u.parentNode.insertBefore(i,a):u.insertBefore(i,a):(u.nodeType===8?(a=u.parentNode,a.insertBefore(i,u)):(a=u,a.appendChild(i)),u=u._reactRootContainer,u!=null||a.onclick!==null||(a.onclick=Gl));else if(h!==4&&(i=i.child,i!==null))for(Qf(i,a,u),i=i.sibling;i!==null;)Qf(i,a,u),i=i.sibling}function ed(i,a,u){var h=i.tag;if(h===5||h===6)i=i.stateNode,a?u.insertBefore(i,a):u.appendChild(i);else if(h!==4&&(i=i.child,i!==null))for(ed(i,a,u),i=i.sibling;i!==null;)ed(i,a,u),i=i.sibling}var yn=null,Ei=!1;function Vr(i,a,u){for(u=u.child;u!==null;)mv(i,a,u),u=u.sibling}function mv(i,a,u){if(lt&&typeof lt.onCommitFiberUnmount=="function")try{lt.onCommitFiberUnmount(Qe,u)}catch{}switch(u.tag){case 5:Cn||fa(u,a);case 6:var h=yn,g=Ei;yn=null,Vr(i,a,u),yn=h,Ei=g,yn!==null&&(Ei?(i=yn,u=u.stateNode,i.nodeType===8?i.parentNode.removeChild(u):i.removeChild(u)):yn.removeChild(u.stateNode));break;case 18:yn!==null&&(Ei?(i=yn,u=u.stateNode,i.nodeType===8?hf(i.parentNode,u):i.nodeType===1&&hf(i,u),co(i)):hf(yn,u.stateNode));break;case 4:h=yn,g=Ei,yn=u.stateNode.containerInfo,Ei=!0,Vr(i,a,u),yn=h,Ei=g;break;case 0:case 11:case 14:case 15:if(!Cn&&(h=u.updateQueue,h!==null&&(h=h.lastEffect,h!==null))){g=h=h.next;do{var x=g,T=x.destroy;x=x.tag,T!==void 0&&((x&2)!==0||(x&4)!==0)&&Zf(u,a,T),g=g.next}while(g!==h)}Vr(i,a,u);break;case 1:if(!Cn&&(fa(u,a),h=u.stateNode,typeof h.componentWillUnmount=="function"))try{h.props=u.memoizedProps,h.state=u.memoizedState,h.componentWillUnmount()}catch(N){tn(u,a,N)}Vr(i,a,u);break;case 21:Vr(i,a,u);break;case 22:u.mode&1?(Cn=(h=Cn)||u.memoizedState!==null,Vr(i,a,u),Cn=h):Vr(i,a,u);break;default:Vr(i,a,u)}}function gv(i){var a=i.updateQueue;if(a!==null){i.updateQueue=null;var u=i.stateNode;u===null&&(u=i.stateNode=new TE),a.forEach(function(h){var g=NE.bind(null,i,h);u.has(h)||(u.add(h),h.then(g,g))})}}function Mi(i,a){var u=a.deletions;if(u!==null)for(var h=0;h<u.length;h++){var g=u[h];try{var x=i,T=a,N=T;e:for(;N!==null;){switch(N.tag){case 5:yn=N.stateNode,Ei=!1;break e;case 3:yn=N.stateNode.containerInfo,Ei=!0;break e;case 4:yn=N.stateNode.containerInfo,Ei=!0;break e}N=N.return}if(yn===null)throw Error(t(160));mv(x,T,g),yn=null,Ei=!1;var B=g.alternate;B!==null&&(B.return=null),g.return=null}catch(J){tn(g,a,J)}}if(a.subtreeFlags&12854)for(a=a.child;a!==null;)vv(a,i),a=a.sibling}function vv(i,a){var u=i.alternate,h=i.flags;switch(i.tag){case 0:case 11:case 14:case 15:if(Mi(a,i),ki(i),h&4){try{Do(3,i,i.return),du(3,i)}catch(Ye){tn(i,i.return,Ye)}try{Do(5,i,i.return)}catch(Ye){tn(i,i.return,Ye)}}break;case 1:Mi(a,i),ki(i),h&512&&u!==null&&fa(u,u.return);break;case 5:if(Mi(a,i),ki(i),h&512&&u!==null&&fa(u,u.return),i.flags&32){var g=i.stateNode;try{be(g,"")}catch(Ye){tn(i,i.return,Ye)}}if(h&4&&(g=i.stateNode,g!=null)){var x=i.memoizedProps,T=u!==null?u.memoizedProps:x,N=i.type,B=i.updateQueue;if(i.updateQueue=null,B!==null)try{N==="input"&&x.type==="radio"&&x.name!=null&&st(g,x),Re(N,T);var J=Re(N,x);for(T=0;T<B.length;T+=2){var ve=B[T],_e=B[T+1];ve==="style"?Le(g,_e):ve==="dangerouslySetInnerHTML"?Ze(g,_e):ve==="children"?be(g,_e):C(g,ve,_e,J)}switch(N){case"input":Ge(g,x);break;case"textarea":w(g,x);break;case"select":var me=g._wrapperState.wasMultiple;g._wrapperState.wasMultiple=!!x.multiple;var Ue=x.value;Ue!=null?jt(g,!!x.multiple,Ue,!1):me!==!!x.multiple&&(x.defaultValue!=null?jt(g,!!x.multiple,x.defaultValue,!0):jt(g,!!x.multiple,x.multiple?[]:"",!1))}g[Eo]=x}catch(Ye){tn(i,i.return,Ye)}}break;case 6:if(Mi(a,i),ki(i),h&4){if(i.stateNode===null)throw Error(t(162));g=i.stateNode,x=i.memoizedProps;try{g.nodeValue=x}catch(Ye){tn(i,i.return,Ye)}}break;case 3:if(Mi(a,i),ki(i),h&4&&u!==null&&u.memoizedState.isDehydrated)try{co(a.containerInfo)}catch(Ye){tn(i,i.return,Ye)}break;case 4:Mi(a,i),ki(i);break;case 13:Mi(a,i),ki(i),g=i.child,g.flags&8192&&(x=g.memoizedState!==null,g.stateNode.isHidden=x,!x||g.alternate!==null&&g.alternate.memoizedState!==null||(id=W())),h&4&&gv(i);break;case 22:if(ve=u!==null&&u.memoizedState!==null,i.mode&1?(Cn=(J=Cn)||ve,Mi(a,i),Cn=J):Mi(a,i),ki(i),h&8192){if(J=i.memoizedState!==null,(i.stateNode.isHidden=J)&&!ve&&(i.mode&1)!==0)for(ke=i,ve=i.child;ve!==null;){for(_e=ke=ve;ke!==null;){switch(me=ke,Ue=me.child,me.tag){case 0:case 11:case 14:case 15:Do(4,me,me.return);break;case 1:fa(me,me.return);var He=me.stateNode;if(typeof He.componentWillUnmount=="function"){h=me,u=me.return;try{a=h,He.props=a.memoizedProps,He.state=a.memoizedState,He.componentWillUnmount()}catch(Ye){tn(h,u,Ye)}}break;case 5:fa(me,me.return);break;case 22:if(me.memoizedState!==null){xv(_e);continue}}Ue!==null?(Ue.return=me,ke=Ue):xv(_e)}ve=ve.sibling}e:for(ve=null,_e=i;;){if(_e.tag===5){if(ve===null){ve=_e;try{g=_e.stateNode,J?(x=g.style,typeof x.setProperty=="function"?x.setProperty("display","none","important"):x.display="none"):(N=_e.stateNode,B=_e.memoizedProps.style,T=B!=null&&B.hasOwnProperty("display")?B.display:null,N.style.display=Me("display",T))}catch(Ye){tn(i,i.return,Ye)}}}else if(_e.tag===6){if(ve===null)try{_e.stateNode.nodeValue=J?"":_e.memoizedProps}catch(Ye){tn(i,i.return,Ye)}}else if((_e.tag!==22&&_e.tag!==23||_e.memoizedState===null||_e===i)&&_e.child!==null){_e.child.return=_e,_e=_e.child;continue}if(_e===i)break e;for(;_e.sibling===null;){if(_e.return===null||_e.return===i)break e;ve===_e&&(ve=null),_e=_e.return}ve===_e&&(ve=null),_e.sibling.return=_e.return,_e=_e.sibling}}break;case 19:Mi(a,i),ki(i),h&4&&gv(i);break;case 21:break;default:Mi(a,i),ki(i)}}function ki(i){var a=i.flags;if(a&2){try{e:{for(var u=i.return;u!==null;){if(hv(u)){var h=u;break e}u=u.return}throw Error(t(160))}switch(h.tag){case 5:var g=h.stateNode;h.flags&32&&(be(g,""),h.flags&=-33);var x=pv(i);ed(i,x,g);break;case 3:case 4:var T=h.stateNode.containerInfo,N=pv(i);Qf(i,N,T);break;default:throw Error(t(161))}}catch(B){tn(i,i.return,B)}i.flags&=-3}a&4096&&(i.flags&=-4097)}function bE(i,a,u){ke=i,_v(i)}function _v(i,a,u){for(var h=(i.mode&1)!==0;ke!==null;){var g=ke,x=g.child;if(g.tag===22&&h){var T=g.memoizedState!==null||fu;if(!T){var N=g.alternate,B=N!==null&&N.memoizedState!==null||Cn;N=fu;var J=Cn;if(fu=T,(Cn=B)&&!J)for(ke=g;ke!==null;)T=ke,B=T.child,T.tag===22&&T.memoizedState!==null?Sv(g):B!==null?(B.return=T,ke=B):Sv(g);for(;x!==null;)ke=x,_v(x),x=x.sibling;ke=g,fu=N,Cn=J}yv(i)}else(g.subtreeFlags&8772)!==0&&x!==null?(x.return=g,ke=x):yv(i)}}function yv(i){for(;ke!==null;){var a=ke;if((a.flags&8772)!==0){var u=a.alternate;try{if((a.flags&8772)!==0)switch(a.tag){case 0:case 11:case 15:Cn||du(5,a);break;case 1:var h=a.stateNode;if(a.flags&4&&!Cn)if(u===null)h.componentDidMount();else{var g=a.elementType===a.type?u.memoizedProps:Si(a.type,u.memoizedProps);h.componentDidUpdate(g,u.memoizedState,h.__reactInternalSnapshotBeforeUpdate)}var x=a.updateQueue;x!==null&&xg(a,x,h);break;case 3:var T=a.updateQueue;if(T!==null){if(u=null,a.child!==null)switch(a.child.tag){case 5:u=a.child.stateNode;break;case 1:u=a.child.stateNode}xg(a,T,u)}break;case 5:var N=a.stateNode;if(u===null&&a.flags&4){u=N;var B=a.memoizedProps;switch(a.type){case"button":case"input":case"select":case"textarea":B.autoFocus&&u.focus();break;case"img":B.src&&(u.src=B.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(a.memoizedState===null){var J=a.alternate;if(J!==null){var ve=J.memoizedState;if(ve!==null){var _e=ve.dehydrated;_e!==null&&co(_e)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Cn||a.flags&512&&Jf(a)}catch(me){tn(a,a.return,me)}}if(a===i){ke=null;break}if(u=a.sibling,u!==null){u.return=a.return,ke=u;break}ke=a.return}}function xv(i){for(;ke!==null;){var a=ke;if(a===i){ke=null;break}var u=a.sibling;if(u!==null){u.return=a.return,ke=u;break}ke=a.return}}function Sv(i){for(;ke!==null;){var a=ke;try{switch(a.tag){case 0:case 11:case 15:var u=a.return;try{du(4,a)}catch(B){tn(a,u,B)}break;case 1:var h=a.stateNode;if(typeof h.componentDidMount=="function"){var g=a.return;try{h.componentDidMount()}catch(B){tn(a,g,B)}}var x=a.return;try{Jf(a)}catch(B){tn(a,x,B)}break;case 5:var T=a.return;try{Jf(a)}catch(B){tn(a,T,B)}}}catch(B){tn(a,a.return,B)}if(a===i){ke=null;break}var N=a.sibling;if(N!==null){N.return=a.return,ke=N;break}ke=a.return}}var AE=Math.ceil,hu=b.ReactCurrentDispatcher,td=b.ReactCurrentOwner,fi=b.ReactCurrentBatchConfig,Ct=0,mn=null,sn=null,xn=0,ti=0,da=Or(0),cn=0,No=null,Ss=0,pu=0,nd=0,Uo=null,Xn=null,id=0,ha=1/0,lr=null,mu=!1,rd=null,Gr=null,gu=!1,Wr=null,vu=0,Fo=0,sd=null,_u=-1,yu=0;function Fn(){return(Ct&6)!==0?W():_u!==-1?_u:_u=W()}function jr(i){return(i.mode&1)===0?1:(Ct&2)!==0&&xn!==0?xn&-xn:cE.transition!==null?(yu===0&&(yu=Nn()),yu):(i=Mt,i!==0||(i=window.event,i=i===void 0?16:Mm(i.type)),i)}function Ti(i,a,u,h){if(50<Fo)throw Fo=0,sd=null,Error(t(185));nn(i,u,h),((Ct&2)===0||i!==mn)&&(i===mn&&((Ct&2)===0&&(pu|=u),cn===4&&Xr(i,xn)),$n(i,h),u===1&&Ct===0&&(a.mode&1)===0&&(ha=W()+500,$l&&Br()))}function $n(i,a){var u=i.callbackNode;ds(i,a);var h=_i(i,i===mn?xn:0);if(h===0)u!==null&&$(u),i.callbackNode=null,i.callbackPriority=0;else if(a=h&-h,i.callbackPriority!==a){if(u!=null&&$(u),a===1)i.tag===0?uE(Mv.bind(null,i)):lg(Mv.bind(null,i)),sE(function(){(Ct&6)===0&&Br()}),u=null;else{switch(mm(h)){case 1:u=Ce;break;case 4:u=ze;break;case 16:u=Ne;break;case 536870912:u=ot;break;default:u=Ne}u=Lv(u,Ev.bind(null,i))}i.callbackPriority=a,i.callbackNode=u}}function Ev(i,a){if(_u=-1,yu=0,(Ct&6)!==0)throw Error(t(327));var u=i.callbackNode;if(pa()&&i.callbackNode!==u)return null;var h=_i(i,i===mn?xn:0);if(h===0)return null;if((h&30)!==0||(h&i.expiredLanes)!==0||a)a=xu(i,h);else{a=h;var g=Ct;Ct|=2;var x=wv();(mn!==i||xn!==a)&&(lr=null,ha=W()+500,Ms(i,a));do try{PE();break}catch(N){Tv(i,N)}while(!0);Mf(),hu.current=x,Ct=g,sn!==null?a=0:(mn=null,xn=0,a=cn)}if(a!==0){if(a===2&&(g=Gt(i),g!==0&&(h=g,a=ad(i,g))),a===1)throw u=No,Ms(i,0),Xr(i,h),$n(i,W()),u;if(a===6)Xr(i,h);else{if(g=i.current.alternate,(h&30)===0&&!RE(g)&&(a=xu(i,h),a===2&&(x=Gt(i),x!==0&&(h=x,a=ad(i,x))),a===1))throw u=No,Ms(i,0),Xr(i,h),$n(i,W()),u;switch(i.finishedWork=g,i.finishedLanes=h,a){case 0:case 1:throw Error(t(345));case 2:Ts(i,Xn,lr);break;case 3:if(Xr(i,h),(h&130023424)===h&&(a=id+500-W(),10<a)){if(_i(i,0)!==0)break;if(g=i.suspendedLanes,(g&h)!==h){Fn(),i.pingedLanes|=i.suspendedLanes&g;break}i.timeoutHandle=df(Ts.bind(null,i,Xn,lr),a);break}Ts(i,Xn,lr);break;case 4:if(Xr(i,h),(h&4194240)===h)break;for(a=i.eventTimes,g=-1;0<h;){var T=31-At(h);x=1<<T,T=a[T],T>g&&(g=T),h&=~x}if(h=g,h=W()-h,h=(120>h?120:480>h?480:1080>h?1080:1920>h?1920:3e3>h?3e3:4320>h?4320:1960*AE(h/1960))-h,10<h){i.timeoutHandle=df(Ts.bind(null,i,Xn,lr),h);break}Ts(i,Xn,lr);break;case 5:Ts(i,Xn,lr);break;default:throw Error(t(329))}}}return $n(i,W()),i.callbackNode===u?Ev.bind(null,i):null}function ad(i,a){var u=Uo;return i.current.memoizedState.isDehydrated&&(Ms(i,a).flags|=256),i=xu(i,a),i!==2&&(a=Xn,Xn=u,a!==null&&od(a)),i}function od(i){Xn===null?Xn=i:Xn.push.apply(Xn,i)}function RE(i){for(var a=i;;){if(a.flags&16384){var u=a.updateQueue;if(u!==null&&(u=u.stores,u!==null))for(var h=0;h<u.length;h++){var g=u[h],x=g.getSnapshot;g=g.value;try{if(!yi(x(),g))return!1}catch{return!1}}}if(u=a.child,a.subtreeFlags&16384&&u!==null)u.return=a,a=u;else{if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return!0;a=a.return}a.sibling.return=a.return,a=a.sibling}}return!0}function Xr(i,a){for(a&=~nd,a&=~pu,i.suspendedLanes|=a,i.pingedLanes&=~a,i=i.expirationTimes;0<a;){var u=31-At(a),h=1<<u;i[u]=-1,a&=~h}}function Mv(i){if((Ct&6)!==0)throw Error(t(327));pa();var a=_i(i,0);if((a&1)===0)return $n(i,W()),null;var u=xu(i,a);if(i.tag!==0&&u===2){var h=Gt(i);h!==0&&(a=h,u=ad(i,h))}if(u===1)throw u=No,Ms(i,0),Xr(i,a),$n(i,W()),u;if(u===6)throw Error(t(345));return i.finishedWork=i.current.alternate,i.finishedLanes=a,Ts(i,Xn,lr),$n(i,W()),null}function ld(i,a){var u=Ct;Ct|=1;try{return i(a)}finally{Ct=u,Ct===0&&(ha=W()+500,$l&&Br())}}function Es(i){Wr!==null&&Wr.tag===0&&(Ct&6)===0&&pa();var a=Ct;Ct|=1;var u=fi.transition,h=Mt;try{if(fi.transition=null,Mt=1,i)return i()}finally{Mt=h,fi.transition=u,Ct=a,(Ct&6)===0&&Br()}}function ud(){ti=da.current,Yt(da)}function Ms(i,a){i.finishedWork=null,i.finishedLanes=0;var u=i.timeoutHandle;if(u!==-1&&(i.timeoutHandle=-1,rE(u)),sn!==null)for(u=sn.return;u!==null;){var h=u;switch(_f(h),h.tag){case 1:h=h.type.childContextTypes,h!=null&&jl();break;case 3:ua(),Yt(Gn),Yt(bn),Lf();break;case 5:Cf(h);break;case 4:ua();break;case 13:Yt(Zt);break;case 19:Yt(Zt);break;case 10:Tf(h.type._context);break;case 22:case 23:ud()}u=u.return}if(mn=i,sn=i=$r(i.current,null),xn=ti=a,cn=0,No=null,nd=pu=Ss=0,Xn=Uo=null,_s!==null){for(a=0;a<_s.length;a++)if(u=_s[a],h=u.interleaved,h!==null){u.interleaved=null;var g=h.next,x=u.pending;if(x!==null){var T=x.next;x.next=g,h.next=T}u.pending=h}_s=null}return i}function Tv(i,a){do{var u=sn;try{if(Mf(),iu.current=ou,ru){for(var h=Jt.memoizedState;h!==null;){var g=h.queue;g!==null&&(g.pending=null),h=h.next}ru=!1}if(xs=0,pn=un=Jt=null,Ro=!1,Co=0,td.current=null,u===null||u.return===null){cn=1,No=a,sn=null;break}e:{var x=i,T=u.return,N=u,B=a;if(a=xn,N.flags|=32768,B!==null&&typeof B=="object"&&typeof B.then=="function"){var J=B,ve=N,_e=ve.tag;if((ve.mode&1)===0&&(_e===0||_e===11||_e===15)){var me=ve.alternate;me?(ve.updateQueue=me.updateQueue,ve.memoizedState=me.memoizedState,ve.lanes=me.lanes):(ve.updateQueue=null,ve.memoizedState=null)}var Ue=Kg(T);if(Ue!==null){Ue.flags&=-257,qg(Ue,T,N,x,a),Ue.mode&1&&Yg(x,J,a),a=Ue,B=J;var He=a.updateQueue;if(He===null){var Ye=new Set;Ye.add(B),a.updateQueue=Ye}else He.add(B);break e}else{if((a&1)===0){Yg(x,J,a),cd();break e}B=Error(t(426))}}else if(qt&&N.mode&1){var rn=Kg(T);if(rn!==null){(rn.flags&65536)===0&&(rn.flags|=256),qg(rn,T,N,x,a),Sf(ca(B,N));break e}}x=B=ca(B,N),cn!==4&&(cn=2),Uo===null?Uo=[x]:Uo.push(x),x=T;do{switch(x.tag){case 3:x.flags|=65536,a&=-a,x.lanes|=a;var Y=Xg(x,B,a);yg(x,Y);break e;case 1:N=B;var G=x.type,q=x.stateNode;if((x.flags&128)===0&&(typeof G.getDerivedStateFromError=="function"||q!==null&&typeof q.componentDidCatch=="function"&&(Gr===null||!Gr.has(q)))){x.flags|=65536,a&=-a,x.lanes|=a;var we=$g(x,N,a);yg(x,we);break e}}x=x.return}while(x!==null)}Av(u)}catch(qe){a=qe,sn===u&&u!==null&&(sn=u=u.return);continue}break}while(!0)}function wv(){var i=hu.current;return hu.current=ou,i===null?ou:i}function cd(){(cn===0||cn===3||cn===2)&&(cn=4),mn===null||(Ss&268435455)===0&&(pu&268435455)===0||Xr(mn,xn)}function xu(i,a){var u=Ct;Ct|=2;var h=wv();(mn!==i||xn!==a)&&(lr=null,Ms(i,a));do try{CE();break}catch(g){Tv(i,g)}while(!0);if(Mf(),Ct=u,hu.current=h,sn!==null)throw Error(t(261));return mn=null,xn=0,cn}function CE(){for(;sn!==null;)bv(sn)}function PE(){for(;sn!==null&&!ee();)bv(sn)}function bv(i){var a=Pv(i.alternate,i,ti);i.memoizedProps=i.pendingProps,a===null?Av(i):sn=a,td.current=null}function Av(i){var a=i;do{var u=a.alternate;if(i=a.return,(a.flags&32768)===0){if(u=EE(u,a,ti),u!==null){sn=u;return}}else{if(u=ME(u,a),u!==null){u.flags&=32767,sn=u;return}if(i!==null)i.flags|=32768,i.subtreeFlags=0,i.deletions=null;else{cn=6,sn=null;return}}if(a=a.sibling,a!==null){sn=a;return}sn=a=i}while(a!==null);cn===0&&(cn=5)}function Ts(i,a,u){var h=Mt,g=fi.transition;try{fi.transition=null,Mt=1,LE(i,a,u,h)}finally{fi.transition=g,Mt=h}return null}function LE(i,a,u,h){do pa();while(Wr!==null);if((Ct&6)!==0)throw Error(t(327));u=i.finishedWork;var g=i.finishedLanes;if(u===null)return null;if(i.finishedWork=null,i.finishedLanes=0,u===i.current)throw Error(t(177));i.callbackNode=null,i.callbackPriority=0;var x=u.lanes|u.childLanes;if(wn(i,x),i===mn&&(sn=mn=null,xn=0),(u.subtreeFlags&2064)===0&&(u.flags&2064)===0||gu||(gu=!0,Lv(Ne,function(){return pa(),null})),x=(u.flags&15990)!==0,(u.subtreeFlags&15990)!==0||x){x=fi.transition,fi.transition=null;var T=Mt;Mt=1;var N=Ct;Ct|=4,td.current=null,wE(i,u),vv(u,i),ZS(cf),Ll=!!uf,cf=uf=null,i.current=u,bE(u),te(),Ct=N,Mt=T,fi.transition=x}else i.current=u;if(gu&&(gu=!1,Wr=i,vu=g),x=i.pendingLanes,x===0&&(Gr=null),It(u.stateNode),$n(i,W()),a!==null)for(h=i.onRecoverableError,u=0;u<a.length;u++)g=a[u],h(g.value,{componentStack:g.stack,digest:g.digest});if(mu)throw mu=!1,i=rd,rd=null,i;return(vu&1)!==0&&i.tag!==0&&pa(),x=i.pendingLanes,(x&1)!==0?i===sd?Fo++:(Fo=0,sd=i):Fo=0,Br(),null}function pa(){if(Wr!==null){var i=mm(vu),a=fi.transition,u=Mt;try{if(fi.transition=null,Mt=16>i?16:i,Wr===null)var h=!1;else{if(i=Wr,Wr=null,vu=0,(Ct&6)!==0)throw Error(t(331));var g=Ct;for(Ct|=4,ke=i.current;ke!==null;){var x=ke,T=x.child;if((ke.flags&16)!==0){var N=x.deletions;if(N!==null){for(var B=0;B<N.length;B++){var J=N[B];for(ke=J;ke!==null;){var ve=ke;switch(ve.tag){case 0:case 11:case 15:Do(8,ve,x)}var _e=ve.child;if(_e!==null)_e.return=ve,ke=_e;else for(;ke!==null;){ve=ke;var me=ve.sibling,Ue=ve.return;if(dv(ve),ve===J){ke=null;break}if(me!==null){me.return=Ue,ke=me;break}ke=Ue}}}var He=x.alternate;if(He!==null){var Ye=He.child;if(Ye!==null){He.child=null;do{var rn=Ye.sibling;Ye.sibling=null,Ye=rn}while(Ye!==null)}}ke=x}}if((x.subtreeFlags&2064)!==0&&T!==null)T.return=x,ke=T;else e:for(;ke!==null;){if(x=ke,(x.flags&2048)!==0)switch(x.tag){case 0:case 11:case 15:Do(9,x,x.return)}var Y=x.sibling;if(Y!==null){Y.return=x.return,ke=Y;break e}ke=x.return}}var G=i.current;for(ke=G;ke!==null;){T=ke;var q=T.child;if((T.subtreeFlags&2064)!==0&&q!==null)q.return=T,ke=q;else e:for(T=G;ke!==null;){if(N=ke,(N.flags&2048)!==0)try{switch(N.tag){case 0:case 11:case 15:du(9,N)}}catch(qe){tn(N,N.return,qe)}if(N===T){ke=null;break e}var we=N.sibling;if(we!==null){we.return=N.return,ke=we;break e}ke=N.return}}if(Ct=g,Br(),lt&&typeof lt.onPostCommitFiberRoot=="function")try{lt.onPostCommitFiberRoot(Qe,i)}catch{}h=!0}return h}finally{Mt=u,fi.transition=a}}return!1}function Rv(i,a,u){a=ca(u,a),a=Xg(i,a,1),i=Hr(i,a,1),a=Fn(),i!==null&&(nn(i,1,a),$n(i,a))}function tn(i,a,u){if(i.tag===3)Rv(i,i,u);else for(;a!==null;){if(a.tag===3){Rv(a,i,u);break}else if(a.tag===1){var h=a.stateNode;if(typeof a.type.getDerivedStateFromError=="function"||typeof h.componentDidCatch=="function"&&(Gr===null||!Gr.has(h))){i=ca(u,i),i=$g(a,i,1),a=Hr(a,i,1),i=Fn(),a!==null&&(nn(a,1,i),$n(a,i));break}}a=a.return}}function IE(i,a,u){var h=i.pingCache;h!==null&&h.delete(a),a=Fn(),i.pingedLanes|=i.suspendedLanes&u,mn===i&&(xn&u)===u&&(cn===4||cn===3&&(xn&130023424)===xn&&500>W()-id?Ms(i,0):nd|=u),$n(i,a)}function Cv(i,a){a===0&&((i.mode&1)===0?a=1:(a=Et,Et<<=1,(Et&130023424)===0&&(Et=4194304)));var u=Fn();i=sr(i,a),i!==null&&(nn(i,a,u),$n(i,u))}function DE(i){var a=i.memoizedState,u=0;a!==null&&(u=a.retryLane),Cv(i,u)}function NE(i,a){var u=0;switch(i.tag){case 13:var h=i.stateNode,g=i.memoizedState;g!==null&&(u=g.retryLane);break;case 19:h=i.stateNode;break;default:throw Error(t(314))}h!==null&&h.delete(a),Cv(i,u)}var Pv;Pv=function(i,a,u){if(i!==null)if(i.memoizedProps!==a.pendingProps||Gn.current)jn=!0;else{if((i.lanes&u)===0&&(a.flags&128)===0)return jn=!1,SE(i,a,u);jn=(i.flags&131072)!==0}else jn=!1,qt&&(a.flags&1048576)!==0&&ug(a,Kl,a.index);switch(a.lanes=0,a.tag){case 2:var h=a.type;cu(i,a),i=a.pendingProps;var g=na(a,bn.current);la(a,u),g=Nf(null,a,h,i,g,u);var x=Uf();return a.flags|=1,typeof g=="object"&&g!==null&&typeof g.render=="function"&&g.$$typeof===void 0?(a.tag=1,a.memoizedState=null,a.updateQueue=null,Wn(h)?(x=!0,Xl(a)):x=!1,a.memoizedState=g.state!==null&&g.state!==void 0?g.state:null,Af(a),g.updater=lu,a.stateNode=g,g._reactInternals=a,Hf(a,h,i,u),a=jf(null,a,h,!0,x,u)):(a.tag=0,qt&&x&&vf(a),Un(null,a,g,u),a=a.child),a;case 16:h=a.elementType;e:{switch(cu(i,a),i=a.pendingProps,g=h._init,h=g(h._payload),a.type=h,g=a.tag=FE(h),i=Si(h,i),g){case 0:a=Wf(null,a,h,i,u);break e;case 1:a=nv(null,a,h,i,u);break e;case 11:a=Zg(null,a,h,i,u);break e;case 14:a=Jg(null,a,h,Si(h.type,i),u);break e}throw Error(t(306,h,""))}return a;case 0:return h=a.type,g=a.pendingProps,g=a.elementType===h?g:Si(h,g),Wf(i,a,h,g,u);case 1:return h=a.type,g=a.pendingProps,g=a.elementType===h?g:Si(h,g),nv(i,a,h,g,u);case 3:e:{if(iv(a),i===null)throw Error(t(387));h=a.pendingProps,x=a.memoizedState,g=x.element,_g(i,a),tu(a,h,null,u);var T=a.memoizedState;if(h=T.element,x.isDehydrated)if(x={element:h,isDehydrated:!1,cache:T.cache,pendingSuspenseBoundaries:T.pendingSuspenseBoundaries,transitions:T.transitions},a.updateQueue.baseState=x,a.memoizedState=x,a.flags&256){g=ca(Error(t(423)),a),a=rv(i,a,h,u,g);break e}else if(h!==g){g=ca(Error(t(424)),a),a=rv(i,a,h,u,g);break e}else for(ei=Fr(a.stateNode.containerInfo.firstChild),Qn=a,qt=!0,xi=null,u=gg(a,null,h,u),a.child=u;u;)u.flags=u.flags&-3|4096,u=u.sibling;else{if(sa(),h===g){a=or(i,a,u);break e}Un(i,a,h,u)}a=a.child}return a;case 5:return Sg(a),i===null&&xf(a),h=a.type,g=a.pendingProps,x=i!==null?i.memoizedProps:null,T=g.children,ff(h,g)?T=null:x!==null&&ff(h,x)&&(a.flags|=32),tv(i,a),Un(i,a,T,u),a.child;case 6:return i===null&&xf(a),null;case 13:return sv(i,a,u);case 4:return Rf(a,a.stateNode.containerInfo),h=a.pendingProps,i===null?a.child=aa(a,null,h,u):Un(i,a,h,u),a.child;case 11:return h=a.type,g=a.pendingProps,g=a.elementType===h?g:Si(h,g),Zg(i,a,h,g,u);case 7:return Un(i,a,a.pendingProps,u),a.child;case 8:return Un(i,a,a.pendingProps.children,u),a.child;case 12:return Un(i,a,a.pendingProps.children,u),a.child;case 10:e:{if(h=a.type._context,g=a.pendingProps,x=a.memoizedProps,T=g.value,Wt(Jl,h._currentValue),h._currentValue=T,x!==null)if(yi(x.value,T)){if(x.children===g.children&&!Gn.current){a=or(i,a,u);break e}}else for(x=a.child,x!==null&&(x.return=a);x!==null;){var N=x.dependencies;if(N!==null){T=x.child;for(var B=N.firstContext;B!==null;){if(B.context===h){if(x.tag===1){B=ar(-1,u&-u),B.tag=2;var J=x.updateQueue;if(J!==null){J=J.shared;var ve=J.pending;ve===null?B.next=B:(B.next=ve.next,ve.next=B),J.pending=B}}x.lanes|=u,B=x.alternate,B!==null&&(B.lanes|=u),wf(x.return,u,a),N.lanes|=u;break}B=B.next}}else if(x.tag===10)T=x.type===a.type?null:x.child;else if(x.tag===18){if(T=x.return,T===null)throw Error(t(341));T.lanes|=u,N=T.alternate,N!==null&&(N.lanes|=u),wf(T,u,a),T=x.sibling}else T=x.child;if(T!==null)T.return=x;else for(T=x;T!==null;){if(T===a){T=null;break}if(x=T.sibling,x!==null){x.return=T.return,T=x;break}T=T.return}x=T}Un(i,a,g.children,u),a=a.child}return a;case 9:return g=a.type,h=a.pendingProps.children,la(a,u),g=ui(g),h=h(g),a.flags|=1,Un(i,a,h,u),a.child;case 14:return h=a.type,g=Si(h,a.pendingProps),g=Si(h.type,g),Jg(i,a,h,g,u);case 15:return Qg(i,a,a.type,a.pendingProps,u);case 17:return h=a.type,g=a.pendingProps,g=a.elementType===h?g:Si(h,g),cu(i,a),a.tag=1,Wn(h)?(i=!0,Xl(a)):i=!1,la(a,u),Wg(a,h,g),Hf(a,h,g,u),jf(null,a,h,!0,i,u);case 19:return ov(i,a,u);case 22:return ev(i,a,u)}throw Error(t(156,a.tag))};function Lv(i,a){return A(i,a)}function UE(i,a,u,h){this.tag=i,this.key=u,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=a,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=h,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function di(i,a,u,h){return new UE(i,a,u,h)}function fd(i){return i=i.prototype,!(!i||!i.isReactComponent)}function FE(i){if(typeof i=="function")return fd(i)?1:0;if(i!=null){if(i=i.$$typeof,i===Z)return 11;if(i===se)return 14}return 2}function $r(i,a){var u=i.alternate;return u===null?(u=di(i.tag,a,i.key,i.mode),u.elementType=i.elementType,u.type=i.type,u.stateNode=i.stateNode,u.alternate=i,i.alternate=u):(u.pendingProps=a,u.type=i.type,u.flags=0,u.subtreeFlags=0,u.deletions=null),u.flags=i.flags&14680064,u.childLanes=i.childLanes,u.lanes=i.lanes,u.child=i.child,u.memoizedProps=i.memoizedProps,u.memoizedState=i.memoizedState,u.updateQueue=i.updateQueue,a=i.dependencies,u.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext},u.sibling=i.sibling,u.index=i.index,u.ref=i.ref,u}function Su(i,a,u,h,g,x){var T=2;if(h=i,typeof i=="function")fd(i)&&(T=1);else if(typeof i=="string")T=5;else e:switch(i){case U:return ws(u.children,g,x,a);case X:T=8,g|=8;break;case P:return i=di(12,u,a,g|2),i.elementType=P,i.lanes=x,i;case ie:return i=di(13,u,a,g),i.elementType=ie,i.lanes=x,i;case fe:return i=di(19,u,a,g),i.elementType=fe,i.lanes=x,i;case de:return Eu(u,g,x,a);default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case L:T=10;break e;case z:T=9;break e;case Z:T=11;break e;case se:T=14;break e;case oe:T=16,h=null;break e}throw Error(t(130,i==null?i:typeof i,""))}return a=di(T,u,a,g),a.elementType=i,a.type=h,a.lanes=x,a}function ws(i,a,u,h){return i=di(7,i,h,a),i.lanes=u,i}function Eu(i,a,u,h){return i=di(22,i,h,a),i.elementType=de,i.lanes=u,i.stateNode={isHidden:!1},i}function dd(i,a,u){return i=di(6,i,null,a),i.lanes=u,i}function hd(i,a,u){return a=di(4,i.children!==null?i.children:[],i.key,a),a.lanes=u,a.stateNode={containerInfo:i.containerInfo,pendingChildren:null,implementation:i.implementation},a}function OE(i,a,u,h,g){this.tag=a,this.containerInfo=i,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Tn(0),this.expirationTimes=Tn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Tn(0),this.identifierPrefix=h,this.onRecoverableError=g,this.mutableSourceEagerHydrationData=null}function pd(i,a,u,h,g,x,T,N,B){return i=new OE(i,a,u,N,B),a===1?(a=1,x===!0&&(a|=8)):a=0,x=di(3,null,null,a),i.current=x,x.stateNode=i,x.memoizedState={element:h,isDehydrated:u,cache:null,transitions:null,pendingSuspenseBoundaries:null},Af(x),i}function kE(i,a,u){var h=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:F,key:h==null?null:""+h,children:i,containerInfo:a,implementation:u}}function Iv(i){if(!i)return kr;i=i._reactInternals;e:{if(er(i)!==i||i.tag!==1)throw Error(t(170));var a=i;do{switch(a.tag){case 3:a=a.stateNode.context;break e;case 1:if(Wn(a.type)){a=a.stateNode.__reactInternalMemoizedMergedChildContext;break e}}a=a.return}while(a!==null);throw Error(t(171))}if(i.tag===1){var u=i.type;if(Wn(u))return ag(i,u,a)}return a}function Dv(i,a,u,h,g,x,T,N,B){return i=pd(u,h,!0,i,g,x,T,N,B),i.context=Iv(null),u=i.current,h=Fn(),g=jr(u),x=ar(h,g),x.callback=a??null,Hr(u,x,g),i.current.lanes=g,nn(i,g,h),$n(i,h),i}function Mu(i,a,u,h){var g=a.current,x=Fn(),T=jr(g);return u=Iv(u),a.context===null?a.context=u:a.pendingContext=u,a=ar(x,T),a.payload={element:i},h=h===void 0?null:h,h!==null&&(a.callback=h),i=Hr(g,a,T),i!==null&&(Ti(i,g,T,x),eu(i,g,T)),T}function Tu(i){if(i=i.current,!i.child)return null;switch(i.child.tag){case 5:return i.child.stateNode;default:return i.child.stateNode}}function Nv(i,a){if(i=i.memoizedState,i!==null&&i.dehydrated!==null){var u=i.retryLane;i.retryLane=u!==0&&u<a?u:a}}function md(i,a){Nv(i,a),(i=i.alternate)&&Nv(i,a)}function BE(){return null}var Uv=typeof reportError=="function"?reportError:function(i){console.error(i)};function gd(i){this._internalRoot=i}wu.prototype.render=gd.prototype.render=function(i){var a=this._internalRoot;if(a===null)throw Error(t(409));Mu(i,a,null,null)},wu.prototype.unmount=gd.prototype.unmount=function(){var i=this._internalRoot;if(i!==null){this._internalRoot=null;var a=i.containerInfo;Es(function(){Mu(null,i,null,null)}),a[tr]=null}};function wu(i){this._internalRoot=i}wu.prototype.unstable_scheduleHydration=function(i){if(i){var a=_m();i={blockedOn:null,target:i,priority:a};for(var u=0;u<Dr.length&&a!==0&&a<Dr[u].priority;u++);Dr.splice(u,0,i),u===0&&Sm(i)}};function vd(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11)}function bu(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11&&(i.nodeType!==8||i.nodeValue!==" react-mount-point-unstable "))}function Fv(){}function zE(i,a,u,h,g){if(g){if(typeof h=="function"){var x=h;h=function(){var J=Tu(T);x.call(J)}}var T=Dv(a,h,i,0,null,!1,!1,"",Fv);return i._reactRootContainer=T,i[tr]=T.current,xo(i.nodeType===8?i.parentNode:i),Es(),T}for(;g=i.lastChild;)i.removeChild(g);if(typeof h=="function"){var N=h;h=function(){var J=Tu(B);N.call(J)}}var B=pd(i,0,!1,null,null,!1,!1,"",Fv);return i._reactRootContainer=B,i[tr]=B.current,xo(i.nodeType===8?i.parentNode:i),Es(function(){Mu(a,B,u,h)}),B}function Au(i,a,u,h,g){var x=u._reactRootContainer;if(x){var T=x;if(typeof g=="function"){var N=g;g=function(){var B=Tu(T);N.call(B)}}Mu(a,T,i,g)}else T=zE(u,a,i,g,h);return Tu(T)}gm=function(i){switch(i.tag){case 3:var a=i.stateNode;if(a.current.memoizedState.isDehydrated){var u=ln(a.pendingLanes);u!==0&&(hs(a,u|1),$n(a,W()),(Ct&6)===0&&(ha=W()+500,Br()))}break;case 13:Es(function(){var h=sr(i,1);if(h!==null){var g=Fn();Ti(h,i,1,g)}}),md(i,1)}},Hc=function(i){if(i.tag===13){var a=sr(i,134217728);if(a!==null){var u=Fn();Ti(a,i,134217728,u)}md(i,134217728)}},vm=function(i){if(i.tag===13){var a=jr(i),u=sr(i,a);if(u!==null){var h=Fn();Ti(u,i,a,h)}md(i,a)}},_m=function(){return Mt},ym=function(i,a){var u=Mt;try{return Mt=i,a()}finally{Mt=u}},xe=function(i,a,u){switch(a){case"input":if(Ge(i,u),a=u.name,u.type==="radio"&&a!=null){for(u=i;u.parentNode;)u=u.parentNode;for(u=u.querySelectorAll("input[name="+JSON.stringify(""+a)+'][type="radio"]'),a=0;a<u.length;a++){var h=u[a];if(h!==i&&h.form===i.form){var g=Wl(h);if(!g)throw Error(t(90));on(h),Ge(h,g)}}}break;case"textarea":w(i,u);break;case"select":a=u.value,a!=null&&jt(i,!!u.multiple,a,!1)}},ft=ld,Dt=Es;var HE={usingClientEntryPoint:!1,Events:[Mo,ea,Wl,pe,je,ld]},Oo={findFiberByHostInstance:ps,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},VE={bundleType:Oo.bundleType,version:Oo.version,rendererPackageName:Oo.rendererPackageName,rendererConfig:Oo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:b.ReactCurrentDispatcher,findHostInstanceByFiber:function(i){return i=Al(i),i===null?null:i.stateNode},findFiberByHostInstance:Oo.findFiberByHostInstance||BE,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ru=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ru.isDisabled&&Ru.supportsFiber)try{Qe=Ru.inject(VE),lt=Ru}catch{}}return Yn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=HE,Yn.createPortal=function(i,a){var u=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!vd(a))throw Error(t(200));return kE(i,a,null,u)},Yn.createRoot=function(i,a){if(!vd(i))throw Error(t(299));var u=!1,h="",g=Uv;return a!=null&&(a.unstable_strictMode===!0&&(u=!0),a.identifierPrefix!==void 0&&(h=a.identifierPrefix),a.onRecoverableError!==void 0&&(g=a.onRecoverableError)),a=pd(i,1,!1,null,null,u,!1,h,g),i[tr]=a.current,xo(i.nodeType===8?i.parentNode:i),new gd(a)},Yn.findDOMNode=function(i){if(i==null)return null;if(i.nodeType===1)return i;var a=i._reactInternals;if(a===void 0)throw typeof i.render=="function"?Error(t(188)):(i=Object.keys(i).join(","),Error(t(268,i)));return i=Al(a),i=i===null?null:i.stateNode,i},Yn.flushSync=function(i){return Es(i)},Yn.hydrate=function(i,a,u){if(!bu(a))throw Error(t(200));return Au(null,i,a,!0,u)},Yn.hydrateRoot=function(i,a,u){if(!vd(i))throw Error(t(405));var h=u!=null&&u.hydratedSources||null,g=!1,x="",T=Uv;if(u!=null&&(u.unstable_strictMode===!0&&(g=!0),u.identifierPrefix!==void 0&&(x=u.identifierPrefix),u.onRecoverableError!==void 0&&(T=u.onRecoverableError)),a=Dv(a,null,i,1,u??null,g,!1,x,T),i[tr]=a.current,xo(i),h)for(i=0;i<h.length;i++)u=h[i],g=u._getVersion,g=g(u._source),a.mutableSourceEagerHydrationData==null?a.mutableSourceEagerHydrationData=[u,g]:a.mutableSourceEagerHydrationData.push(u,g);return new wu(a)},Yn.render=function(i,a,u){if(!bu(a))throw Error(t(200));return Au(null,i,a,!1,u)},Yn.unmountComponentAtNode=function(i){if(!bu(i))throw Error(t(40));return i._reactRootContainer?(Es(function(){Au(null,null,i,!1,function(){i._reactRootContainer=null,i[tr]=null})}),!0):!1},Yn.unstable_batchedUpdates=ld,Yn.unstable_renderSubtreeIntoContainer=function(i,a,u,h){if(!bu(u))throw Error(t(200));if(i==null||i._reactInternals===void 0)throw Error(t(38));return Au(i,a,u,!1,h)},Yn.version="18.3.1-next-f1338f8080-20240426",Yn}var Wv;function qE(){if(Wv)return xd.exports;Wv=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),xd.exports=KE(),xd.exports}var jv;function ZE(){if(jv)return Cu;jv=1;var r=qE();return Cu.createRoot=r.createRoot,Cu.hydrateRoot=r.hydrateRoot,Cu}var JE=ZE();const QE=ny(JE);/**
 * react-router v7.9.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Xv="popstate";function eM(r={}){function e(n,s){let{pathname:o,search:l,hash:c}=n.location;return vh("",{pathname:o,search:l,hash:c},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function t(n,s){return typeof s=="string"?s:il(s)}return nM(e,t,null,r)}function Qt(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}function ji(r,e){if(!r){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function tM(){return Math.random().toString(36).substring(2,10)}function $v(r,e){return{usr:r.state,key:r.key,idx:e}}function vh(r,e,t=null,n){return{pathname:typeof r=="string"?r:r.pathname,search:"",hash:"",...typeof e=="string"?Ja(e):e,state:t,key:e&&e.key||n||tM()}}function il({pathname:r="/",search:e="",hash:t=""}){return e&&e!=="?"&&(r+=e.charAt(0)==="?"?e:"?"+e),t&&t!=="#"&&(r+=t.charAt(0)==="#"?t:"#"+t),r}function Ja(r){let e={};if(r){let t=r.indexOf("#");t>=0&&(e.hash=r.substring(t),r=r.substring(0,t));let n=r.indexOf("?");n>=0&&(e.search=r.substring(n),r=r.substring(0,n)),r&&(e.pathname=r)}return e}function nM(r,e,t,n={}){let{window:s=document.defaultView,v5Compat:o=!1}=n,l=s.history,c="POP",f=null,d=p();d==null&&(d=0,l.replaceState({...l.state,idx:d},""));function p(){return(l.state||{idx:null}).idx}function m(){c="POP";let S=p(),_=S==null?null:S-d;d=S,f&&f({action:c,location:M.location,delta:_})}function v(S,_){c="PUSH";let R=vh(M.location,S,_);d=p()+1;let C=$v(R,d),b=M.createHref(R);try{l.pushState(C,"",b)}catch(I){if(I instanceof DOMException&&I.name==="DataCloneError")throw I;s.location.assign(b)}o&&f&&f({action:c,location:M.location,delta:1})}function y(S,_){c="REPLACE";let R=vh(M.location,S,_);d=p();let C=$v(R,d),b=M.createHref(R);l.replaceState(C,"",b),o&&f&&f({action:c,location:M.location,delta:0})}function E(S){return iM(S)}let M={get action(){return c},get location(){return r(s,l)},listen(S){if(f)throw new Error("A history only accepts one active listener");return s.addEventListener(Xv,m),f=S,()=>{s.removeEventListener(Xv,m),f=null}},createHref(S){return e(s,S)},createURL:E,encodeLocation(S){let _=E(S);return{pathname:_.pathname,search:_.search,hash:_.hash}},push:v,replace:y,go(S){return l.go(S)}};return M}function iM(r,e=!1){let t="http://localhost";typeof window<"u"&&(t=window.location.origin!=="null"?window.location.origin:window.location.href),Qt(t,"No window.location.(origin|href) available to create URL");let n=typeof r=="string"?r:il(r);return n=n.replace(/ $/,"%20"),!e&&n.startsWith("//")&&(n=t+n),new URL(n,t)}function iy(r,e,t="/"){return rM(r,e,t,!1)}function rM(r,e,t,n){let s=typeof e=="string"?Ja(e):e,o=Er(s.pathname||"/",t);if(o==null)return null;let l=ry(r);sM(l);let c=null;for(let f=0;c==null&&f<l.length;++f){let d=gM(o);c=pM(l[f],d,n)}return c}function ry(r,e=[],t=[],n="",s=!1){let o=(l,c,f=s,d)=>{let p={relativePath:d===void 0?l.path||"":d,caseSensitive:l.caseSensitive===!0,childrenIndex:c,route:l};if(p.relativePath.startsWith("/")){if(!p.relativePath.startsWith(n)&&f)return;Qt(p.relativePath.startsWith(n),`Absolute route path "${p.relativePath}" nested under path "${n}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),p.relativePath=p.relativePath.slice(n.length)}let m=xr([n,p.relativePath]),v=t.concat(p);l.children&&l.children.length>0&&(Qt(l.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${m}".`),ry(l.children,e,v,m,f)),!(l.path==null&&!l.index)&&e.push({path:m,score:dM(m,l.index),routesMeta:v})};return r.forEach((l,c)=>{if(l.path===""||!l.path?.includes("?"))o(l,c);else for(let f of sy(l.path))o(l,c,!0,f)}),e}function sy(r){let e=r.split("/");if(e.length===0)return[];let[t,...n]=e,s=t.endsWith("?"),o=t.replace(/\?$/,"");if(n.length===0)return s?[o,""]:[o];let l=sy(n.join("/")),c=[];return c.push(...l.map(f=>f===""?o:[o,f].join("/"))),s&&c.push(...l),c.map(f=>r.startsWith("/")&&f===""?"/":f)}function sM(r){r.sort((e,t)=>e.score!==t.score?t.score-e.score:hM(e.routesMeta.map(n=>n.childrenIndex),t.routesMeta.map(n=>n.childrenIndex)))}var aM=/^:[\w-]+$/,oM=3,lM=2,uM=1,cM=10,fM=-2,Yv=r=>r==="*";function dM(r,e){let t=r.split("/"),n=t.length;return t.some(Yv)&&(n+=fM),e&&(n+=lM),t.filter(s=>!Yv(s)).reduce((s,o)=>s+(aM.test(o)?oM:o===""?uM:cM),n)}function hM(r,e){return r.length===e.length&&r.slice(0,-1).every((n,s)=>n===e[s])?r[r.length-1]-e[e.length-1]:0}function pM(r,e,t=!1){let{routesMeta:n}=r,s={},o="/",l=[];for(let c=0;c<n.length;++c){let f=n[c],d=c===n.length-1,p=o==="/"?e:e.slice(o.length)||"/",m=yc({path:f.relativePath,caseSensitive:f.caseSensitive,end:d},p),v=f.route;if(!m&&d&&t&&!n[n.length-1].route.index&&(m=yc({path:f.relativePath,caseSensitive:f.caseSensitive,end:!1},p)),!m)return null;Object.assign(s,m.params),l.push({params:s,pathname:xr([o,m.pathname]),pathnameBase:xM(xr([o,m.pathnameBase])),route:v}),m.pathnameBase!=="/"&&(o=xr([o,m.pathnameBase]))}return l}function yc(r,e){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[t,n]=mM(r.path,r.caseSensitive,r.end),s=e.match(t);if(!s)return null;let o=s[0],l=o.replace(/(.)\/+$/,"$1"),c=s.slice(1);return{params:n.reduce((d,{paramName:p,isOptional:m},v)=>{if(p==="*"){let E=c[v]||"";l=o.slice(0,o.length-E.length).replace(/(.)\/+$/,"$1")}const y=c[v];return m&&!y?d[p]=void 0:d[p]=(y||"").replace(/%2F/g,"/"),d},{}),pathname:o,pathnameBase:l,pattern:r}}function mM(r,e=!1,t=!0){ji(r==="*"||!r.endsWith("*")||r.endsWith("/*"),`Route path "${r}" will be treated as if it were "${r.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${r.replace(/\*$/,"/*")}".`);let n=[],s="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(l,c,f)=>(n.push({paramName:c,isOptional:f!=null}),f?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return r.endsWith("*")?(n.push({paramName:"*"}),s+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?s+="\\/*$":r!==""&&r!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,e?void 0:"i"),n]}function gM(r){try{return r.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return ji(!1,`The URL path "${r}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),r}}function Er(r,e){if(e==="/")return r;if(!r.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,n=r.charAt(t);return n&&n!=="/"?null:r.slice(t)||"/"}function vM(r,e="/"){let{pathname:t,search:n="",hash:s=""}=typeof r=="string"?Ja(r):r;return{pathname:t?t.startsWith("/")?t:_M(t,e):e,search:SM(n),hash:EM(s)}}function _M(r,e){let t=e.replace(/\/+$/,"").split("/");return r.split("/").forEach(s=>{s===".."?t.length>1&&t.pop():s!=="."&&t.push(s)}),t.length>1?t.join("/"):"/"}function Md(r,e,t,n){return`Cannot include a '${r}' character in a manually specified \`to.${e}\` field [${JSON.stringify(n)}].  Please separate it out to the \`to.${t}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function yM(r){return r.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function ay(r){let e=yM(r);return e.map((t,n)=>n===e.length-1?t.pathname:t.pathnameBase)}function oy(r,e,t,n=!1){let s;typeof r=="string"?s=Ja(r):(s={...r},Qt(!s.pathname||!s.pathname.includes("?"),Md("?","pathname","search",s)),Qt(!s.pathname||!s.pathname.includes("#"),Md("#","pathname","hash",s)),Qt(!s.search||!s.search.includes("#"),Md("#","search","hash",s)));let o=r===""||s.pathname==="",l=o?"/":s.pathname,c;if(l==null)c=t;else{let m=e.length-1;if(!n&&l.startsWith("..")){let v=l.split("/");for(;v[0]==="..";)v.shift(),m-=1;s.pathname=v.join("/")}c=m>=0?e[m]:"/"}let f=vM(s,c),d=l&&l!=="/"&&l.endsWith("/"),p=(o||l===".")&&t.endsWith("/");return!f.pathname.endsWith("/")&&(d||p)&&(f.pathname+="/"),f}var xr=r=>r.join("/").replace(/\/\/+/g,"/"),xM=r=>r.replace(/\/+$/,"").replace(/^\/*/,"/"),SM=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,EM=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r;function MM(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}var ly=["POST","PUT","PATCH","DELETE"];new Set(ly);var TM=["GET",...ly];new Set(TM);var Qa=ce.createContext(null);Qa.displayName="DataRouter";var Cc=ce.createContext(null);Cc.displayName="DataRouterState";ce.createContext(!1);var uy=ce.createContext({isTransitioning:!1});uy.displayName="ViewTransition";var wM=ce.createContext(new Map);wM.displayName="Fetchers";var bM=ce.createContext(null);bM.displayName="Await";var Ki=ce.createContext(null);Ki.displayName="Navigation";var hl=ce.createContext(null);hl.displayName="Location";var Ar=ce.createContext({outlet:null,matches:[],isDataRoute:!1});Ar.displayName="Route";var Rp=ce.createContext(null);Rp.displayName="RouteError";function AM(r,{relative:e}={}){Qt(pl(),"useHref() may be used only in the context of a <Router> component.");let{basename:t,navigator:n}=ce.useContext(Ki),{hash:s,pathname:o,search:l}=ml(r,{relative:e}),c=o;return t!=="/"&&(c=o==="/"?t:xr([t,o])),n.createHref({pathname:c,search:l,hash:s})}function pl(){return ce.useContext(hl)!=null}function cs(){return Qt(pl(),"useLocation() may be used only in the context of a <Router> component."),ce.useContext(hl).location}var cy="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function fy(r){ce.useContext(Ki).static||ce.useLayoutEffect(r)}function dy(){let{isDataRoute:r}=ce.useContext(Ar);return r?zM():RM()}function RM(){Qt(pl(),"useNavigate() may be used only in the context of a <Router> component.");let r=ce.useContext(Qa),{basename:e,navigator:t}=ce.useContext(Ki),{matches:n}=ce.useContext(Ar),{pathname:s}=cs(),o=JSON.stringify(ay(n)),l=ce.useRef(!1);return fy(()=>{l.current=!0}),ce.useCallback((f,d={})=>{if(ji(l.current,cy),!l.current)return;if(typeof f=="number"){t.go(f);return}let p=oy(f,JSON.parse(o),s,d.relative==="path");r==null&&e!=="/"&&(p.pathname=p.pathname==="/"?e:xr([e,p.pathname])),(d.replace?t.replace:t.push)(p,d.state,d)},[e,t,o,s,r])}ce.createContext(null);function ml(r,{relative:e}={}){let{matches:t}=ce.useContext(Ar),{pathname:n}=cs(),s=JSON.stringify(ay(t));return ce.useMemo(()=>oy(r,JSON.parse(s),n,e==="path"),[r,s,n,e])}function CM(r,e){return hy(r,e)}function hy(r,e,t,n,s){Qt(pl(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:o}=ce.useContext(Ki),{matches:l}=ce.useContext(Ar),c=l[l.length-1],f=c?c.params:{},d=c?c.pathname:"/",p=c?c.pathnameBase:"/",m=c&&c.route;{let R=m&&m.path||"";py(d,!m||R.endsWith("*")||R.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${d}" (under <Route path="${R}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${R}"> to <Route path="${R==="/"?"*":`${R}/*`}">.`)}let v=cs(),y;if(e){let R=typeof e=="string"?Ja(e):e;Qt(p==="/"||R.pathname?.startsWith(p),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${p}" but pathname "${R.pathname}" was given in the \`location\` prop.`),y=R}else y=v;let E=y.pathname||"/",M=E;if(p!=="/"){let R=p.replace(/^\//,"").split("/");M="/"+E.replace(/^\//,"").split("/").slice(R.length).join("/")}let S=iy(r,{pathname:M});ji(m||S!=null,`No routes matched location "${y.pathname}${y.search}${y.hash}" `),ji(S==null||S[S.length-1].route.element!==void 0||S[S.length-1].route.Component!==void 0||S[S.length-1].route.lazy!==void 0,`Matched leaf route at location "${y.pathname}${y.search}${y.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let _=NM(S&&S.map(R=>Object.assign({},R,{params:Object.assign({},f,R.params),pathname:xr([p,o.encodeLocation?o.encodeLocation(R.pathname).pathname:R.pathname]),pathnameBase:R.pathnameBase==="/"?p:xr([p,o.encodeLocation?o.encodeLocation(R.pathnameBase).pathname:R.pathnameBase])})),l,t,n,s);return e&&_?ce.createElement(hl.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...y},navigationType:"POP"}},_):_}function PM(){let r=BM(),e=MM(r)?`${r.status} ${r.statusText}`:r instanceof Error?r.message:JSON.stringify(r),t=r instanceof Error?r.stack:null,n="rgba(200,200,200, 0.5)",s={padding:"0.5rem",backgroundColor:n},o={padding:"2px 4px",backgroundColor:n},l=null;return console.error("Error handled by React Router default ErrorBoundary:",r),l=ce.createElement(ce.Fragment,null,ce.createElement("p",null,"💿 Hey developer 👋"),ce.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",ce.createElement("code",{style:o},"ErrorBoundary")," or"," ",ce.createElement("code",{style:o},"errorElement")," prop on your route.")),ce.createElement(ce.Fragment,null,ce.createElement("h2",null,"Unexpected Application Error!"),ce.createElement("h3",{style:{fontStyle:"italic"}},e),t?ce.createElement("pre",{style:s},t):null,l)}var LM=ce.createElement(PM,null),IM=class extends ce.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,e){return e.location!==r.location||e.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error!==void 0?r.error:e.error,location:e.location,revalidation:r.revalidation||e.revalidation}}componentDidCatch(r,e){this.props.unstable_onError?this.props.unstable_onError(r,e):console.error("React Router caught the following error during render",r)}render(){return this.state.error!==void 0?ce.createElement(Ar.Provider,{value:this.props.routeContext},ce.createElement(Rp.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function DM({routeContext:r,match:e,children:t}){let n=ce.useContext(Qa);return n&&n.static&&n.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(n.staticContext._deepestRenderedBoundaryId=e.route.id),ce.createElement(Ar.Provider,{value:r},t)}function NM(r,e=[],t=null,n=null,s=null){if(r==null){if(!t)return null;if(t.errors)r=t.matches;else if(e.length===0&&!t.initialized&&t.matches.length>0)r=t.matches;else return null}let o=r,l=t?.errors;if(l!=null){let d=o.findIndex(p=>p.route.id&&l?.[p.route.id]!==void 0);Qt(d>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(l).join(",")}`),o=o.slice(0,Math.min(o.length,d+1))}let c=!1,f=-1;if(t)for(let d=0;d<o.length;d++){let p=o[d];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(f=d),p.route.id){let{loaderData:m,errors:v}=t,y=p.route.loader&&!m.hasOwnProperty(p.route.id)&&(!v||v[p.route.id]===void 0);if(p.route.lazy||y){c=!0,f>=0?o=o.slice(0,f+1):o=[o[0]];break}}}return o.reduceRight((d,p,m)=>{let v,y=!1,E=null,M=null;t&&(v=l&&p.route.id?l[p.route.id]:void 0,E=p.route.errorElement||LM,c&&(f<0&&m===0?(py("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),y=!0,M=null):f===m&&(y=!0,M=p.route.hydrateFallbackElement||null)));let S=e.concat(o.slice(0,m+1)),_=()=>{let R;return v?R=E:y?R=M:p.route.Component?R=ce.createElement(p.route.Component,null):p.route.element?R=p.route.element:R=d,ce.createElement(DM,{match:p,routeContext:{outlet:d,matches:S,isDataRoute:t!=null},children:R})};return t&&(p.route.ErrorBoundary||p.route.errorElement||m===0)?ce.createElement(IM,{location:t.location,revalidation:t.revalidation,component:E,error:v,children:_(),routeContext:{outlet:null,matches:S,isDataRoute:!0},unstable_onError:n}):_()},null)}function Cp(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function UM(r){let e=ce.useContext(Qa);return Qt(e,Cp(r)),e}function FM(r){let e=ce.useContext(Cc);return Qt(e,Cp(r)),e}function OM(r){let e=ce.useContext(Ar);return Qt(e,Cp(r)),e}function Pp(r){let e=OM(r),t=e.matches[e.matches.length-1];return Qt(t.route.id,`${r} can only be used on routes that contain a unique "id"`),t.route.id}function kM(){return Pp("useRouteId")}function BM(){let r=ce.useContext(Rp),e=FM("useRouteError"),t=Pp("useRouteError");return r!==void 0?r:e.errors?.[t]}function zM(){let{router:r}=UM("useNavigate"),e=Pp("useNavigate"),t=ce.useRef(!1);return fy(()=>{t.current=!0}),ce.useCallback(async(s,o={})=>{ji(t.current,cy),t.current&&(typeof s=="number"?r.navigate(s):await r.navigate(s,{fromRouteId:e,...o}))},[r,e])}var Kv={};function py(r,e,t){!e&&!Kv[r]&&(Kv[r]=!0,ji(!1,t))}ce.memo(HM);function HM({routes:r,future:e,state:t,unstable_onError:n}){return hy(r,void 0,t,n,e)}function Da(r){Qt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function VM({basename:r="/",children:e=null,location:t,navigationType:n="POP",navigator:s,static:o=!1}){Qt(!pl(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let l=r.replace(/^\/*/,"/"),c=ce.useMemo(()=>({basename:l,navigator:s,static:o,future:{}}),[l,s,o]);typeof t=="string"&&(t=Ja(t));let{pathname:f="/",search:d="",hash:p="",state:m=null,key:v="default"}=t,y=ce.useMemo(()=>{let E=Er(f,l);return E==null?null:{location:{pathname:E,search:d,hash:p,state:m,key:v},navigationType:n}},[l,f,d,p,m,v,n]);return ji(y!=null,`<Router basename="${l}"> is not able to match the URL "${f}${d}${p}" because it does not start with the basename, so the <Router> won't render anything.`),y==null?null:ce.createElement(Ki.Provider,{value:c},ce.createElement(hl.Provider,{children:e,value:y}))}function GM({children:r,location:e}){return CM(_h(r),e)}function _h(r,e=[]){let t=[];return ce.Children.forEach(r,(n,s)=>{if(!ce.isValidElement(n))return;let o=[...e,s];if(n.type===ce.Fragment){t.push.apply(t,_h(n.props.children,o));return}Qt(n.type===Da,`[${typeof n.type=="string"?n.type:n.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Qt(!n.props.index||!n.props.children,"An index route cannot have child routes.");let l={id:n.props.id||o.join("-"),caseSensitive:n.props.caseSensitive,element:n.props.element,Component:n.props.Component,index:n.props.index,path:n.props.path,loader:n.props.loader,action:n.props.action,hydrateFallbackElement:n.props.hydrateFallbackElement,HydrateFallback:n.props.HydrateFallback,errorElement:n.props.errorElement,ErrorBoundary:n.props.ErrorBoundary,hasErrorBoundary:n.props.hasErrorBoundary===!0||n.props.ErrorBoundary!=null||n.props.errorElement!=null,shouldRevalidate:n.props.shouldRevalidate,handle:n.props.handle,lazy:n.props.lazy};n.props.children&&(l.children=_h(n.props.children,o)),t.push(l)}),t}var lc="get",uc="application/x-www-form-urlencoded";function Pc(r){return r!=null&&typeof r.tagName=="string"}function WM(r){return Pc(r)&&r.tagName.toLowerCase()==="button"}function jM(r){return Pc(r)&&r.tagName.toLowerCase()==="form"}function XM(r){return Pc(r)&&r.tagName.toLowerCase()==="input"}function $M(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function YM(r,e){return r.button===0&&(!e||e==="_self")&&!$M(r)}var Pu=null;function KM(){if(Pu===null)try{new FormData(document.createElement("form"),0),Pu=!1}catch{Pu=!0}return Pu}var qM=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Td(r){return r!=null&&!qM.has(r)?(ji(!1,`"${r}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${uc}"`),null):r}function ZM(r,e){let t,n,s,o,l;if(jM(r)){let c=r.getAttribute("action");n=c?Er(c,e):null,t=r.getAttribute("method")||lc,s=Td(r.getAttribute("enctype"))||uc,o=new FormData(r)}else if(WM(r)||XM(r)&&(r.type==="submit"||r.type==="image")){let c=r.form;if(c==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let f=r.getAttribute("formaction")||c.getAttribute("action");if(n=f?Er(f,e):null,t=r.getAttribute("formmethod")||c.getAttribute("method")||lc,s=Td(r.getAttribute("formenctype"))||Td(c.getAttribute("enctype"))||uc,o=new FormData(c,r),!KM()){let{name:d,type:p,value:m}=r;if(p==="image"){let v=d?`${d}.`:"";o.append(`${v}x`,"0"),o.append(`${v}y`,"0")}else d&&o.append(d,m)}}else{if(Pc(r))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');t=lc,n=null,s=uc,l=r}return o&&s==="text/plain"&&(l=o,o=void 0),{action:n,method:t.toLowerCase(),encType:s,formData:o,body:l}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Lp(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}function JM(r,e,t){let n=typeof r=="string"?new URL(r,typeof window>"u"?"server://singlefetch/":window.location.origin):r;return n.pathname==="/"?n.pathname=`_root.${t}`:e&&Er(n.pathname,e)==="/"?n.pathname=`${e.replace(/\/$/,"")}/_root.${t}`:n.pathname=`${n.pathname.replace(/\/$/,"")}.${t}`,n}async function QM(r,e){if(r.id in e)return e[r.id];try{let t=await import(r.module);return e[r.id]=t,t}catch(t){return console.error(`Error loading route module \`${r.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function e1(r){return r==null?!1:r.href==null?r.rel==="preload"&&typeof r.imageSrcSet=="string"&&typeof r.imageSizes=="string":typeof r.rel=="string"&&typeof r.href=="string"}async function t1(r,e,t){let n=await Promise.all(r.map(async s=>{let o=e.routes[s.route.id];if(o){let l=await QM(o,t);return l.links?l.links():[]}return[]}));return s1(n.flat(1).filter(e1).filter(s=>s.rel==="stylesheet"||s.rel==="preload").map(s=>s.rel==="stylesheet"?{...s,rel:"prefetch",as:"style"}:{...s,rel:"prefetch"}))}function qv(r,e,t,n,s,o){let l=(f,d)=>t[d]?f.route.id!==t[d].route.id:!0,c=(f,d)=>t[d].pathname!==f.pathname||t[d].route.path?.endsWith("*")&&t[d].params["*"]!==f.params["*"];return o==="assets"?e.filter((f,d)=>l(f,d)||c(f,d)):o==="data"?e.filter((f,d)=>{let p=n.routes[f.route.id];if(!p||!p.hasLoader)return!1;if(l(f,d)||c(f,d))return!0;if(f.route.shouldRevalidate){let m=f.route.shouldRevalidate({currentUrl:new URL(s.pathname+s.search+s.hash,window.origin),currentParams:t[0]?.params||{},nextUrl:new URL(r,window.origin),nextParams:f.params,defaultShouldRevalidate:!0});if(typeof m=="boolean")return m}return!0}):[]}function n1(r,e,{includeHydrateFallback:t}={}){return i1(r.map(n=>{let s=e.routes[n.route.id];if(!s)return[];let o=[s.module];return s.clientActionModule&&(o=o.concat(s.clientActionModule)),s.clientLoaderModule&&(o=o.concat(s.clientLoaderModule)),t&&s.hydrateFallbackModule&&(o=o.concat(s.hydrateFallbackModule)),s.imports&&(o=o.concat(s.imports)),o}).flat(1))}function i1(r){return[...new Set(r)]}function r1(r){let e={},t=Object.keys(r).sort();for(let n of t)e[n]=r[n];return e}function s1(r,e){let t=new Set;return new Set(e),r.reduce((n,s)=>{let o=JSON.stringify(r1(s));return t.has(o)||(t.add(o),n.push({key:o,link:s})),n},[])}function my(){let r=ce.useContext(Qa);return Lp(r,"You must render this element inside a <DataRouterContext.Provider> element"),r}function a1(){let r=ce.useContext(Cc);return Lp(r,"You must render this element inside a <DataRouterStateContext.Provider> element"),r}var Ip=ce.createContext(void 0);Ip.displayName="FrameworkContext";function gy(){let r=ce.useContext(Ip);return Lp(r,"You must render this element inside a <HydratedRouter> element"),r}function o1(r,e){let t=ce.useContext(Ip),[n,s]=ce.useState(!1),[o,l]=ce.useState(!1),{onFocus:c,onBlur:f,onMouseEnter:d,onMouseLeave:p,onTouchStart:m}=e,v=ce.useRef(null);ce.useEffect(()=>{if(r==="render"&&l(!0),r==="viewport"){let M=_=>{_.forEach(R=>{l(R.isIntersecting)})},S=new IntersectionObserver(M,{threshold:.5});return v.current&&S.observe(v.current),()=>{S.disconnect()}}},[r]),ce.useEffect(()=>{if(n){let M=setTimeout(()=>{l(!0)},100);return()=>{clearTimeout(M)}}},[n]);let y=()=>{s(!0)},E=()=>{s(!1),l(!1)};return t?r!=="intent"?[o,v,{}]:[o,v,{onFocus:Bo(c,y),onBlur:Bo(f,E),onMouseEnter:Bo(d,y),onMouseLeave:Bo(p,E),onTouchStart:Bo(m,y)}]:[!1,v,{}]}function Bo(r,e){return t=>{r&&r(t),t.defaultPrevented||e(t)}}function l1({page:r,...e}){let{router:t}=my(),n=ce.useMemo(()=>iy(t.routes,r,t.basename),[t.routes,r,t.basename]);return n?ce.createElement(c1,{page:r,matches:n,...e}):null}function u1(r){let{manifest:e,routeModules:t}=gy(),[n,s]=ce.useState([]);return ce.useEffect(()=>{let o=!1;return t1(r,e,t).then(l=>{o||s(l)}),()=>{o=!0}},[r,e,t]),n}function c1({page:r,matches:e,...t}){let n=cs(),{manifest:s,routeModules:o}=gy(),{basename:l}=my(),{loaderData:c,matches:f}=a1(),d=ce.useMemo(()=>qv(r,e,f,s,n,"data"),[r,e,f,s,n]),p=ce.useMemo(()=>qv(r,e,f,s,n,"assets"),[r,e,f,s,n]),m=ce.useMemo(()=>{if(r===n.pathname+n.search+n.hash)return[];let E=new Set,M=!1;if(e.forEach(_=>{let R=s.routes[_.route.id];!R||!R.hasLoader||(!d.some(C=>C.route.id===_.route.id)&&_.route.id in c&&o[_.route.id]?.shouldRevalidate||R.hasClientLoader?M=!0:E.add(_.route.id))}),E.size===0)return[];let S=JM(r,l,"data");return M&&E.size>0&&S.searchParams.set("_routes",e.filter(_=>E.has(_.route.id)).map(_=>_.route.id).join(",")),[S.pathname+S.search]},[l,c,n,s,d,e,r,o]),v=ce.useMemo(()=>n1(p,s),[p,s]),y=u1(p);return ce.createElement(ce.Fragment,null,m.map(E=>ce.createElement("link",{key:E,rel:"prefetch",as:"fetch",href:E,...t})),v.map(E=>ce.createElement("link",{key:E,rel:"modulepreload",href:E,...t})),y.map(({key:E,link:M})=>ce.createElement("link",{key:E,nonce:t.nonce,...M})))}function f1(...r){return e=>{r.forEach(t=>{typeof t=="function"?t(e):t!=null&&(t.current=e)})}}var vy=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{vy&&(window.__reactRouterVersion="7.9.1")}catch{}function d1({basename:r,children:e,window:t}){let n=ce.useRef();n.current==null&&(n.current=eM({window:t,v5Compat:!0}));let s=n.current,[o,l]=ce.useState({action:s.action,location:s.location}),c=ce.useCallback(f=>{ce.startTransition(()=>l(f))},[l]);return ce.useLayoutEffect(()=>s.listen(c),[s,c]),ce.createElement(VM,{basename:r,children:e,location:o.location,navigationType:o.action,navigator:s})}var _y=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Dp=ce.forwardRef(function({onClick:e,discover:t="render",prefetch:n="none",relative:s,reloadDocument:o,replace:l,state:c,target:f,to:d,preventScrollReset:p,viewTransition:m,...v},y){let{basename:E}=ce.useContext(Ki),M=typeof d=="string"&&_y.test(d),S,_=!1;if(typeof d=="string"&&M&&(S=d,vy))try{let P=new URL(window.location.href),L=d.startsWith("//")?new URL(P.protocol+d):new URL(d),z=Er(L.pathname,E);L.origin===P.origin&&z!=null?d=z+L.search+L.hash:_=!0}catch{ji(!1,`<Link to="${d}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let R=AM(d,{relative:s}),[C,b,I]=o1(n,v),F=g1(d,{replace:l,state:c,target:f,preventScrollReset:p,relative:s,viewTransition:m});function U(P){e&&e(P),P.defaultPrevented||F(P)}let X=ce.createElement("a",{...v,...I,href:S||R,onClick:_||o?e:U,ref:f1(y,b),target:f,"data-discover":!M&&t==="render"?"true":void 0});return C&&!M?ce.createElement(ce.Fragment,null,X,ce.createElement(l1,{page:R})):X});Dp.displayName="Link";var h1=ce.forwardRef(function({"aria-current":e="page",caseSensitive:t=!1,className:n="",end:s=!1,style:o,to:l,viewTransition:c,children:f,...d},p){let m=ml(l,{relative:d.relative}),v=cs(),y=ce.useContext(Cc),{navigator:E,basename:M}=ce.useContext(Ki),S=y!=null&&S1(m)&&c===!0,_=E.encodeLocation?E.encodeLocation(m).pathname:m.pathname,R=v.pathname,C=y&&y.navigation&&y.navigation.location?y.navigation.location.pathname:null;t||(R=R.toLowerCase(),C=C?C.toLowerCase():null,_=_.toLowerCase()),C&&M&&(C=Er(C,M)||C);const b=_!=="/"&&_.endsWith("/")?_.length-1:_.length;let I=R===_||!s&&R.startsWith(_)&&R.charAt(b)==="/",F=C!=null&&(C===_||!s&&C.startsWith(_)&&C.charAt(_.length)==="/"),U={isActive:I,isPending:F,isTransitioning:S},X=I?e:void 0,P;typeof n=="function"?P=n(U):P=[n,I?"active":null,F?"pending":null,S?"transitioning":null].filter(Boolean).join(" ");let L=typeof o=="function"?o(U):o;return ce.createElement(Dp,{...d,"aria-current":X,className:P,ref:p,style:L,to:l,viewTransition:c},typeof f=="function"?f(U):f)});h1.displayName="NavLink";var p1=ce.forwardRef(({discover:r="render",fetcherKey:e,navigate:t,reloadDocument:n,replace:s,state:o,method:l=lc,action:c,onSubmit:f,relative:d,preventScrollReset:p,viewTransition:m,...v},y)=>{let E=y1(),M=x1(c,{relative:d}),S=l.toLowerCase()==="get"?"get":"post",_=typeof c=="string"&&_y.test(c),R=C=>{if(f&&f(C),C.defaultPrevented)return;C.preventDefault();let b=C.nativeEvent.submitter,I=b?.getAttribute("formmethod")||l;E(b||C.currentTarget,{fetcherKey:e,method:I,navigate:t,replace:s,state:o,relative:d,preventScrollReset:p,viewTransition:m})};return ce.createElement("form",{ref:y,method:S,action:M,onSubmit:n?f:R,...v,"data-discover":!_&&r==="render"?"true":void 0})});p1.displayName="Form";function m1(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function yy(r){let e=ce.useContext(Qa);return Qt(e,m1(r)),e}function g1(r,{target:e,replace:t,state:n,preventScrollReset:s,relative:o,viewTransition:l}={}){let c=dy(),f=cs(),d=ml(r,{relative:o});return ce.useCallback(p=>{if(YM(p,e)){p.preventDefault();let m=t!==void 0?t:il(f)===il(d);c(r,{replace:m,state:n,preventScrollReset:s,relative:o,viewTransition:l})}},[f,c,d,t,n,e,r,s,o,l])}var v1=0,_1=()=>`__${String(++v1)}__`;function y1(){let{router:r}=yy("useSubmit"),{basename:e}=ce.useContext(Ki),t=kM();return ce.useCallback(async(n,s={})=>{let{action:o,method:l,encType:c,formData:f,body:d}=ZM(n,e);if(s.navigate===!1){let p=s.fetcherKey||_1();await r.fetch(p,t,s.action||o,{preventScrollReset:s.preventScrollReset,formData:f,body:d,formMethod:s.method||l,formEncType:s.encType||c,flushSync:s.flushSync})}else await r.navigate(s.action||o,{preventScrollReset:s.preventScrollReset,formData:f,body:d,formMethod:s.method||l,formEncType:s.encType||c,replace:s.replace,state:s.state,fromRouteId:t,flushSync:s.flushSync,viewTransition:s.viewTransition})},[r,e,t])}function x1(r,{relative:e}={}){let{basename:t}=ce.useContext(Ki),n=ce.useContext(Ar);Qt(n,"useFormAction must be used inside a RouteContext");let[s]=n.matches.slice(-1),o={...ml(r||".",{relative:e})},l=cs();if(r==null){o.search=l.search;let c=new URLSearchParams(o.search),f=c.getAll("index");if(f.some(p=>p==="")){c.delete("index"),f.filter(m=>m).forEach(m=>c.append("index",m));let p=c.toString();o.search=p?`?${p}`:""}}return(!r||r===".")&&s.route.index&&(o.search=o.search?o.search.replace(/^\?/,"?index&"):"?index"),t!=="/"&&(o.pathname=o.pathname==="/"?t:xr([t,o.pathname])),il(o)}function S1(r,{relative:e}={}){let t=ce.useContext(uy);Qt(t!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:n}=yy("useViewTransitionState"),s=ml(r,{relative:e});if(!t.isTransitioning)return!1;let o=Er(t.currentLocation.pathname,n)||t.currentLocation.pathname,l=Er(t.nextLocation.pathname,n)||t.nextLocation.pathname;return yc(s.pathname,l)!=null||yc(s.pathname,o)!=null}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Np="180",Oa={ROTATE:0,DOLLY:1,PAN:2},Na={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},E1=0,Zv=1,M1=2,xy=1,T1=2,vr=3,Mr=0,zn=1,Hi=2,ss=0,ka=1,Jv=2,Qv=3,e_=4,w1=5,Ns=100,b1=101,A1=102,R1=103,C1=104,P1=200,L1=201,I1=202,D1=203,yh=204,xh=205,N1=206,U1=207,F1=208,O1=209,k1=210,B1=211,z1=212,H1=213,V1=214,Sh=0,Eh=1,Mh=2,Va=3,Th=4,wh=5,bh=6,Ah=7,Sy=0,G1=1,W1=2,as=0,j1=1,X1=2,$1=3,Y1=4,K1=5,q1=6,Z1=7,t_="attached",J1="detached",Ey=300,Ga=301,Wa=302,Rh=303,Ch=304,Lc=306,ja=1e3,rs=1001,xc=1002,Hn=1003,My=1004,Ko=1005,ri=1006,cc=1007,_r=1008,Xi=1009,Ty=1010,wy=1011,rl=1012,Up=1013,Bs=1014,Pi=1015,gl=1016,Fp=1017,Op=1018,sl=1020,by=35902,Ay=35899,Ry=1021,Cy=1022,mi=1023,al=1026,ol=1027,kp=1028,Bp=1029,Py=1030,zp=1031,Hp=1033,fc=33776,dc=33777,hc=33778,pc=33779,Ph=35840,Lh=35841,Ih=35842,Dh=35843,Nh=36196,Uh=37492,Fh=37496,Oh=37808,kh=37809,Bh=37810,zh=37811,Hh=37812,Vh=37813,Gh=37814,Wh=37815,jh=37816,Xh=37817,$h=37818,Yh=37819,Kh=37820,qh=37821,Zh=36492,Jh=36494,Qh=36495,ep=36283,tp=36284,np=36285,ip=36286,ll=2300,ul=2301,wd=2302,n_=2400,i_=2401,r_=2402,Q1=2500,eT=0,Ly=1,rp=2,tT=3200,nT=3201,Iy=0,iT=1,is="",Sn="srgb",Vn="srgb-linear",Sc="linear",Bt="srgb",ma=7680,s_=519,rT=512,sT=513,aT=514,Dy=515,oT=516,lT=517,uT=518,cT=519,sp=35044,a_="300 es",Vi=2e3,Ec=2001;class Gs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const o=s.indexOf(t);o!==-1&&s.splice(o,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let o=0,l=s.length;o<l;o++)s[o].call(this,e);e.target=null}}}const Pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let o_=1234567;const Jo=Math.PI/180,Xa=180/Math.PI;function Ii(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Pn[r&255]+Pn[r>>8&255]+Pn[r>>16&255]+Pn[r>>24&255]+"-"+Pn[e&255]+Pn[e>>8&255]+"-"+Pn[e>>16&15|64]+Pn[e>>24&255]+"-"+Pn[t&63|128]+Pn[t>>8&255]+"-"+Pn[t>>16&255]+Pn[t>>24&255]+Pn[n&255]+Pn[n>>8&255]+Pn[n>>16&255]+Pn[n>>24&255]).toLowerCase()}function xt(r,e,t){return Math.max(e,Math.min(t,r))}function Vp(r,e){return(r%e+e)%e}function fT(r,e,t,n,s){return n+(r-e)*(s-n)/(t-e)}function dT(r,e,t){return r!==e?(t-r)/(e-r):0}function Qo(r,e,t){return(1-t)*r+t*e}function hT(r,e,t,n){return Qo(r,e,1-Math.exp(-t*n))}function pT(r,e=1){return e-Math.abs(Vp(r,e*2)-e)}function mT(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function gT(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function vT(r,e){return r+Math.floor(Math.random()*(e-r+1))}function _T(r,e){return r+Math.random()*(e-r)}function yT(r){return r*(.5-Math.random())}function xT(r){r!==void 0&&(o_=r);let e=o_+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function ST(r){return r*Jo}function ET(r){return r*Xa}function MT(r){return(r&r-1)===0&&r!==0}function TT(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function wT(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function bT(r,e,t,n,s){const o=Math.cos,l=Math.sin,c=o(t/2),f=l(t/2),d=o((e+n)/2),p=l((e+n)/2),m=o((e-n)/2),v=l((e-n)/2),y=o((n-e)/2),E=l((n-e)/2);switch(s){case"XYX":r.set(c*p,f*m,f*v,c*d);break;case"YZY":r.set(f*v,c*p,f*m,c*d);break;case"ZXZ":r.set(f*m,f*v,c*p,c*d);break;case"XZX":r.set(c*p,f*E,f*y,c*d);break;case"YXY":r.set(f*y,c*p,f*E,c*d);break;case"ZYZ":r.set(f*E,f*y,c*p,c*d);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ri(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Ut(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Ny={DEG2RAD:Jo,RAD2DEG:Xa,generateUUID:Ii,clamp:xt,euclideanModulo:Vp,mapLinear:fT,inverseLerp:dT,lerp:Qo,damp:hT,pingpong:pT,smoothstep:mT,smootherstep:gT,randInt:vT,randFloat:_T,randFloatSpread:yT,seededRandom:xT,degToRad:ST,radToDeg:ET,isPowerOfTwo:MT,ceilPowerOfTwo:TT,floorPowerOfTwo:wT,setQuaternionFromProperEuler:bT,normalize:Ut,denormalize:Ri};class dt{constructor(e=0,t=0){dt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=xt(this.x,e.x,t.x),this.y=xt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=xt(this.x,e,t),this.y=xt(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(xt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(xt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),o=this.x-e.x,l=this.y-e.y;return this.x=o*n-l*s+e.x,this.y=o*s+l*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class $i{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,o,l,c){let f=n[s+0],d=n[s+1],p=n[s+2],m=n[s+3];const v=o[l+0],y=o[l+1],E=o[l+2],M=o[l+3];if(c===0){e[t+0]=f,e[t+1]=d,e[t+2]=p,e[t+3]=m;return}if(c===1){e[t+0]=v,e[t+1]=y,e[t+2]=E,e[t+3]=M;return}if(m!==M||f!==v||d!==y||p!==E){let S=1-c;const _=f*v+d*y+p*E+m*M,R=_>=0?1:-1,C=1-_*_;if(C>Number.EPSILON){const I=Math.sqrt(C),F=Math.atan2(I,_*R);S=Math.sin(S*F)/I,c=Math.sin(c*F)/I}const b=c*R;if(f=f*S+v*b,d=d*S+y*b,p=p*S+E*b,m=m*S+M*b,S===1-c){const I=1/Math.sqrt(f*f+d*d+p*p+m*m);f*=I,d*=I,p*=I,m*=I}}e[t]=f,e[t+1]=d,e[t+2]=p,e[t+3]=m}static multiplyQuaternionsFlat(e,t,n,s,o,l){const c=n[s],f=n[s+1],d=n[s+2],p=n[s+3],m=o[l],v=o[l+1],y=o[l+2],E=o[l+3];return e[t]=c*E+p*m+f*y-d*v,e[t+1]=f*E+p*v+d*m-c*y,e[t+2]=d*E+p*y+c*v-f*m,e[t+3]=p*E-c*m-f*v-d*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,o=e._z,l=e._order,c=Math.cos,f=Math.sin,d=c(n/2),p=c(s/2),m=c(o/2),v=f(n/2),y=f(s/2),E=f(o/2);switch(l){case"XYZ":this._x=v*p*m+d*y*E,this._y=d*y*m-v*p*E,this._z=d*p*E+v*y*m,this._w=d*p*m-v*y*E;break;case"YXZ":this._x=v*p*m+d*y*E,this._y=d*y*m-v*p*E,this._z=d*p*E-v*y*m,this._w=d*p*m+v*y*E;break;case"ZXY":this._x=v*p*m-d*y*E,this._y=d*y*m+v*p*E,this._z=d*p*E+v*y*m,this._w=d*p*m-v*y*E;break;case"ZYX":this._x=v*p*m-d*y*E,this._y=d*y*m+v*p*E,this._z=d*p*E-v*y*m,this._w=d*p*m+v*y*E;break;case"YZX":this._x=v*p*m+d*y*E,this._y=d*y*m+v*p*E,this._z=d*p*E-v*y*m,this._w=d*p*m-v*y*E;break;case"XZY":this._x=v*p*m-d*y*E,this._y=d*y*m-v*p*E,this._z=d*p*E+v*y*m,this._w=d*p*m+v*y*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+l)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],o=t[8],l=t[1],c=t[5],f=t[9],d=t[2],p=t[6],m=t[10],v=n+c+m;if(v>0){const y=.5/Math.sqrt(v+1);this._w=.25/y,this._x=(p-f)*y,this._y=(o-d)*y,this._z=(l-s)*y}else if(n>c&&n>m){const y=2*Math.sqrt(1+n-c-m);this._w=(p-f)/y,this._x=.25*y,this._y=(s+l)/y,this._z=(o+d)/y}else if(c>m){const y=2*Math.sqrt(1+c-n-m);this._w=(o-d)/y,this._x=(s+l)/y,this._y=.25*y,this._z=(f+p)/y}else{const y=2*Math.sqrt(1+m-n-c);this._w=(l-s)/y,this._x=(o+d)/y,this._y=(f+p)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(xt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,o=e._z,l=e._w,c=t._x,f=t._y,d=t._z,p=t._w;return this._x=n*p+l*c+s*d-o*f,this._y=s*p+l*f+o*c-n*d,this._z=o*p+l*d+n*f-s*c,this._w=l*p-n*c-s*f-o*d,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,o=this._z,l=this._w;let c=l*e._w+n*e._x+s*e._y+o*e._z;if(c<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,c=-c):this.copy(e),c>=1)return this._w=l,this._x=n,this._y=s,this._z=o,this;const f=1-c*c;if(f<=Number.EPSILON){const y=1-t;return this._w=y*l+t*this._w,this._x=y*n+t*this._x,this._y=y*s+t*this._y,this._z=y*o+t*this._z,this.normalize(),this}const d=Math.sqrt(f),p=Math.atan2(d,c),m=Math.sin((1-t)*p)/d,v=Math.sin(t*p)/d;return this._w=l*m+this._w*v,this._x=n*m+this._x*v,this._y=s*m+this._y*v,this._z=o*m+this._z*v,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),o=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),o*Math.sin(t),o*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class j{constructor(e=0,t=0,n=0){j.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(l_.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(l_.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,o=e.elements;return this.x=o[0]*t+o[3]*n+o[6]*s,this.y=o[1]*t+o[4]*n+o[7]*s,this.z=o[2]*t+o[5]*n+o[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,o=e.elements,l=1/(o[3]*t+o[7]*n+o[11]*s+o[15]);return this.x=(o[0]*t+o[4]*n+o[8]*s+o[12])*l,this.y=(o[1]*t+o[5]*n+o[9]*s+o[13])*l,this.z=(o[2]*t+o[6]*n+o[10]*s+o[14])*l,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,o=e.x,l=e.y,c=e.z,f=e.w,d=2*(l*s-c*n),p=2*(c*t-o*s),m=2*(o*n-l*t);return this.x=t+f*d+l*m-c*p,this.y=n+f*p+c*d-o*m,this.z=s+f*m+o*p-l*d,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s,this.y=o[1]*t+o[5]*n+o[9]*s,this.z=o[2]*t+o[6]*n+o[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=xt(this.x,e.x,t.x),this.y=xt(this.y,e.y,t.y),this.z=xt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=xt(this.x,e,t),this.y=xt(this.y,e,t),this.z=xt(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(xt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,o=e.z,l=t.x,c=t.y,f=t.z;return this.x=s*f-o*c,this.y=o*l-n*f,this.z=n*c-s*l,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return bd.copy(this).projectOnVector(e),this.sub(bd)}reflect(e){return this.sub(bd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(xt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const bd=new j,l_=new $i;class gt{constructor(e,t,n,s,o,l,c,f,d){gt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,o,l,c,f,d)}set(e,t,n,s,o,l,c,f,d){const p=this.elements;return p[0]=e,p[1]=s,p[2]=c,p[3]=t,p[4]=o,p[5]=f,p[6]=n,p[7]=l,p[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,o=this.elements,l=n[0],c=n[3],f=n[6],d=n[1],p=n[4],m=n[7],v=n[2],y=n[5],E=n[8],M=s[0],S=s[3],_=s[6],R=s[1],C=s[4],b=s[7],I=s[2],F=s[5],U=s[8];return o[0]=l*M+c*R+f*I,o[3]=l*S+c*C+f*F,o[6]=l*_+c*b+f*U,o[1]=d*M+p*R+m*I,o[4]=d*S+p*C+m*F,o[7]=d*_+p*b+m*U,o[2]=v*M+y*R+E*I,o[5]=v*S+y*C+E*F,o[8]=v*_+y*b+E*U,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],o=e[3],l=e[4],c=e[5],f=e[6],d=e[7],p=e[8];return t*l*p-t*c*d-n*o*p+n*c*f+s*o*d-s*l*f}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],o=e[3],l=e[4],c=e[5],f=e[6],d=e[7],p=e[8],m=p*l-c*d,v=c*f-p*o,y=d*o-l*f,E=t*m+n*v+s*y;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/E;return e[0]=m*M,e[1]=(s*d-p*n)*M,e[2]=(c*n-s*l)*M,e[3]=v*M,e[4]=(p*t-s*f)*M,e[5]=(s*o-c*t)*M,e[6]=y*M,e[7]=(n*f-d*t)*M,e[8]=(l*t-n*o)*M,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,o,l,c){const f=Math.cos(o),d=Math.sin(o);return this.set(n*f,n*d,-n*(f*l+d*c)+l+e,-s*d,s*f,-s*(-d*l+f*c)+c+t,0,0,1),this}scale(e,t){return this.premultiply(Ad.makeScale(e,t)),this}rotate(e){return this.premultiply(Ad.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ad.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ad=new gt;function Uy(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function cl(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function AT(){const r=cl("canvas");return r.style.display="block",r}const u_={};function fl(r){r in u_||(u_[r]=!0,console.warn(r))}function RT(r,e,t){return new Promise(function(n,s){function o(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:s();break;case r.TIMEOUT_EXPIRED:setTimeout(o,t);break;default:n()}}setTimeout(o,t)})}const c_=new gt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),f_=new gt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function CT(){const r={enabled:!0,workingColorSpace:Vn,spaces:{},convert:function(s,o,l){return this.enabled===!1||o===l||!o||!l||(this.spaces[o].transfer===Bt&&(s.r=Sr(s.r),s.g=Sr(s.g),s.b=Sr(s.b)),this.spaces[o].primaries!==this.spaces[l].primaries&&(s.applyMatrix3(this.spaces[o].toXYZ),s.applyMatrix3(this.spaces[l].fromXYZ)),this.spaces[l].transfer===Bt&&(s.r=Ba(s.r),s.g=Ba(s.g),s.b=Ba(s.b))),s},workingToColorSpace:function(s,o){return this.convert(s,this.workingColorSpace,o)},colorSpaceToWorking:function(s,o){return this.convert(s,o,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===is?Sc:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,o=this.workingColorSpace){return s.fromArray(this.spaces[o].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,o,l){return s.copy(this.spaces[o].toXYZ).multiply(this.spaces[l].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,o){return fl("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(s,o)},toWorkingColorSpace:function(s,o){return fl("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(s,o)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[Vn]:{primaries:e,whitePoint:n,transfer:Sc,toXYZ:c_,fromXYZ:f_,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Sn},outputColorSpaceConfig:{drawingBufferColorSpace:Sn}},[Sn]:{primaries:e,whitePoint:n,transfer:Bt,toXYZ:c_,fromXYZ:f_,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Sn}}}),r}const Rt=CT();function Sr(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Ba(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let ga;class PT{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ga===void 0&&(ga=cl("canvas")),ga.width=e.width,ga.height=e.height;const s=ga.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=ga}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=cl("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),o=s.data;for(let l=0;l<o.length;l++)o[l]=Sr(o[l]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Sr(t[n]/255)*255):t[n]=Sr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let LT=0;class Gp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:LT++}),this.uuid=Ii(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let o;if(Array.isArray(s)){o=[];for(let l=0,c=s.length;l<c;l++)s[l].isDataTexture?o.push(Rd(s[l].image)):o.push(Rd(s[l]))}else o=Rd(s);n.url=o}return t||(e.images[this.uuid]=n),n}}function Rd(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?PT.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let IT=0;const Cd=new j;class _n extends Gs{constructor(e=_n.DEFAULT_IMAGE,t=_n.DEFAULT_MAPPING,n=rs,s=rs,o=ri,l=_r,c=mi,f=Xi,d=_n.DEFAULT_ANISOTROPY,p=is){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:IT++}),this.uuid=Ii(),this.name="",this.source=new Gp(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=o,this.minFilter=l,this.anisotropy=d,this.format=c,this.internalFormat=null,this.type=f,this.offset=new dt(0,0),this.repeat=new dt(1,1),this.center=new dt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new gt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=p,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Cd).x}get height(){return this.source.getSize(Cd).y}get depth(){return this.source.getSize(Cd).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ey)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ja:e.x=e.x-Math.floor(e.x);break;case rs:e.x=e.x<0?0:1;break;case xc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ja:e.y=e.y-Math.floor(e.y);break;case rs:e.y=e.y<0?0:1;break;case xc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}_n.DEFAULT_IMAGE=null;_n.DEFAULT_MAPPING=Ey;_n.DEFAULT_ANISOTROPY=1;class Lt{constructor(e=0,t=0,n=0,s=1){Lt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,o=this.w,l=e.elements;return this.x=l[0]*t+l[4]*n+l[8]*s+l[12]*o,this.y=l[1]*t+l[5]*n+l[9]*s+l[13]*o,this.z=l[2]*t+l[6]*n+l[10]*s+l[14]*o,this.w=l[3]*t+l[7]*n+l[11]*s+l[15]*o,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,o;const f=e.elements,d=f[0],p=f[4],m=f[8],v=f[1],y=f[5],E=f[9],M=f[2],S=f[6],_=f[10];if(Math.abs(p-v)<.01&&Math.abs(m-M)<.01&&Math.abs(E-S)<.01){if(Math.abs(p+v)<.1&&Math.abs(m+M)<.1&&Math.abs(E+S)<.1&&Math.abs(d+y+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const C=(d+1)/2,b=(y+1)/2,I=(_+1)/2,F=(p+v)/4,U=(m+M)/4,X=(E+S)/4;return C>b&&C>I?C<.01?(n=0,s=.707106781,o=.707106781):(n=Math.sqrt(C),s=F/n,o=U/n):b>I?b<.01?(n=.707106781,s=0,o=.707106781):(s=Math.sqrt(b),n=F/s,o=X/s):I<.01?(n=.707106781,s=.707106781,o=0):(o=Math.sqrt(I),n=U/o,s=X/o),this.set(n,s,o,t),this}let R=Math.sqrt((S-E)*(S-E)+(m-M)*(m-M)+(v-p)*(v-p));return Math.abs(R)<.001&&(R=1),this.x=(S-E)/R,this.y=(m-M)/R,this.z=(v-p)/R,this.w=Math.acos((d+y+_-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=xt(this.x,e.x,t.x),this.y=xt(this.y,e.y,t.y),this.z=xt(this.z,e.z,t.z),this.w=xt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=xt(this.x,e,t),this.y=xt(this.y,e,t),this.z=xt(this.z,e,t),this.w=xt(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(xt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class DT extends Gs{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ri,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Lt(0,0,e,t),this.scissorTest=!1,this.viewport=new Lt(0,0,e,t);const s={width:e,height:t,depth:n.depth},o=new _n(s);this.textures=[];const l=n.count;for(let c=0;c<l;c++)this.textures[c]=o.clone(),this.textures[c].isRenderTargetTexture=!0,this.textures[c].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:ri,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,o=this.textures.length;s<o;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new Gp(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class zs extends DT{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Fy extends _n{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Hn,this.minFilter=Hn,this.wrapR=rs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class NT extends _n{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Hn,this.minFilter=Hn,this.wrapR=rs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class qi{constructor(e=new j(1/0,1/0,1/0),t=new j(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(wi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(wi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=wi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const o=n.getAttribute("position");if(t===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let l=0,c=o.count;l<c;l++)e.isMesh===!0?e.getVertexPosition(l,wi):wi.fromBufferAttribute(o,l),wi.applyMatrix4(e.matrixWorld),this.expandByPoint(wi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Lu.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Lu.copy(n.boundingBox)),Lu.applyMatrix4(e.matrixWorld),this.union(Lu)}const s=e.children;for(let o=0,l=s.length;o<l;o++)this.expandByObject(s[o],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,wi),wi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(zo),Iu.subVectors(this.max,zo),va.subVectors(e.a,zo),_a.subVectors(e.b,zo),ya.subVectors(e.c,zo),Kr.subVectors(_a,va),qr.subVectors(ya,_a),bs.subVectors(va,ya);let t=[0,-Kr.z,Kr.y,0,-qr.z,qr.y,0,-bs.z,bs.y,Kr.z,0,-Kr.x,qr.z,0,-qr.x,bs.z,0,-bs.x,-Kr.y,Kr.x,0,-qr.y,qr.x,0,-bs.y,bs.x,0];return!Pd(t,va,_a,ya,Iu)||(t=[1,0,0,0,1,0,0,0,1],!Pd(t,va,_a,ya,Iu))?!1:(Du.crossVectors(Kr,qr),t=[Du.x,Du.y,Du.z],Pd(t,va,_a,ya,Iu))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,wi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(wi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ur[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ur[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ur[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ur[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ur[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ur[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ur[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ur[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ur),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ur=[new j,new j,new j,new j,new j,new j,new j,new j],wi=new j,Lu=new qi,va=new j,_a=new j,ya=new j,Kr=new j,qr=new j,bs=new j,zo=new j,Iu=new j,Du=new j,As=new j;function Pd(r,e,t,n,s){for(let o=0,l=r.length-3;o<=l;o+=3){As.fromArray(r,o);const c=s.x*Math.abs(As.x)+s.y*Math.abs(As.y)+s.z*Math.abs(As.z),f=e.dot(As),d=t.dot(As),p=n.dot(As);if(Math.max(-Math.max(f,d,p),Math.min(f,d,p))>c)return!1}return!0}const UT=new qi,Ho=new j,Ld=new j;class Zi{constructor(e=new j,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):UT.setFromPoints(e).getCenter(n);let s=0;for(let o=0,l=e.length;o<l;o++)s=Math.max(s,n.distanceToSquared(e[o]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ho.subVectors(e,this.center);const t=Ho.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Ho,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ld.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ho.copy(e.center).add(Ld)),this.expandByPoint(Ho.copy(e.center).sub(Ld))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const cr=new j,Id=new j,Nu=new j,Zr=new j,Dd=new j,Uu=new j,Nd=new j;class vl{constructor(e=new j,t=new j(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,cr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=cr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(cr.copy(this.origin).addScaledVector(this.direction,t),cr.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Id.copy(e).add(t).multiplyScalar(.5),Nu.copy(t).sub(e).normalize(),Zr.copy(this.origin).sub(Id);const o=e.distanceTo(t)*.5,l=-this.direction.dot(Nu),c=Zr.dot(this.direction),f=-Zr.dot(Nu),d=Zr.lengthSq(),p=Math.abs(1-l*l);let m,v,y,E;if(p>0)if(m=l*f-c,v=l*c-f,E=o*p,m>=0)if(v>=-E)if(v<=E){const M=1/p;m*=M,v*=M,y=m*(m+l*v+2*c)+v*(l*m+v+2*f)+d}else v=o,m=Math.max(0,-(l*v+c)),y=-m*m+v*(v+2*f)+d;else v=-o,m=Math.max(0,-(l*v+c)),y=-m*m+v*(v+2*f)+d;else v<=-E?(m=Math.max(0,-(-l*o+c)),v=m>0?-o:Math.min(Math.max(-o,-f),o),y=-m*m+v*(v+2*f)+d):v<=E?(m=0,v=Math.min(Math.max(-o,-f),o),y=v*(v+2*f)+d):(m=Math.max(0,-(l*o+c)),v=m>0?o:Math.min(Math.max(-o,-f),o),y=-m*m+v*(v+2*f)+d);else v=l>0?-o:o,m=Math.max(0,-(l*v+c)),y=-m*m+v*(v+2*f)+d;return n&&n.copy(this.origin).addScaledVector(this.direction,m),s&&s.copy(Id).addScaledVector(Nu,v),y}intersectSphere(e,t){cr.subVectors(e.center,this.origin);const n=cr.dot(this.direction),s=cr.dot(cr)-n*n,o=e.radius*e.radius;if(s>o)return null;const l=Math.sqrt(o-s),c=n-l,f=n+l;return f<0?null:c<0?this.at(f,t):this.at(c,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,o,l,c,f;const d=1/this.direction.x,p=1/this.direction.y,m=1/this.direction.z,v=this.origin;return d>=0?(n=(e.min.x-v.x)*d,s=(e.max.x-v.x)*d):(n=(e.max.x-v.x)*d,s=(e.min.x-v.x)*d),p>=0?(o=(e.min.y-v.y)*p,l=(e.max.y-v.y)*p):(o=(e.max.y-v.y)*p,l=(e.min.y-v.y)*p),n>l||o>s||((o>n||isNaN(n))&&(n=o),(l<s||isNaN(s))&&(s=l),m>=0?(c=(e.min.z-v.z)*m,f=(e.max.z-v.z)*m):(c=(e.max.z-v.z)*m,f=(e.min.z-v.z)*m),n>f||c>s)||((c>n||n!==n)&&(n=c),(f<s||s!==s)&&(s=f),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,cr)!==null}intersectTriangle(e,t,n,s,o){Dd.subVectors(t,e),Uu.subVectors(n,e),Nd.crossVectors(Dd,Uu);let l=this.direction.dot(Nd),c;if(l>0){if(s)return null;c=1}else if(l<0)c=-1,l=-l;else return null;Zr.subVectors(this.origin,e);const f=c*this.direction.dot(Uu.crossVectors(Zr,Uu));if(f<0)return null;const d=c*this.direction.dot(Dd.cross(Zr));if(d<0||f+d>l)return null;const p=-c*Zr.dot(Nd);return p<0?null:this.at(p/l,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class _t{constructor(e,t,n,s,o,l,c,f,d,p,m,v,y,E,M,S){_t.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,o,l,c,f,d,p,m,v,y,E,M,S)}set(e,t,n,s,o,l,c,f,d,p,m,v,y,E,M,S){const _=this.elements;return _[0]=e,_[4]=t,_[8]=n,_[12]=s,_[1]=o,_[5]=l,_[9]=c,_[13]=f,_[2]=d,_[6]=p,_[10]=m,_[14]=v,_[3]=y,_[7]=E,_[11]=M,_[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new _t().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/xa.setFromMatrixColumn(e,0).length(),o=1/xa.setFromMatrixColumn(e,1).length(),l=1/xa.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*o,t[5]=n[5]*o,t[6]=n[6]*o,t[7]=0,t[8]=n[8]*l,t[9]=n[9]*l,t[10]=n[10]*l,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,o=e.z,l=Math.cos(n),c=Math.sin(n),f=Math.cos(s),d=Math.sin(s),p=Math.cos(o),m=Math.sin(o);if(e.order==="XYZ"){const v=l*p,y=l*m,E=c*p,M=c*m;t[0]=f*p,t[4]=-f*m,t[8]=d,t[1]=y+E*d,t[5]=v-M*d,t[9]=-c*f,t[2]=M-v*d,t[6]=E+y*d,t[10]=l*f}else if(e.order==="YXZ"){const v=f*p,y=f*m,E=d*p,M=d*m;t[0]=v+M*c,t[4]=E*c-y,t[8]=l*d,t[1]=l*m,t[5]=l*p,t[9]=-c,t[2]=y*c-E,t[6]=M+v*c,t[10]=l*f}else if(e.order==="ZXY"){const v=f*p,y=f*m,E=d*p,M=d*m;t[0]=v-M*c,t[4]=-l*m,t[8]=E+y*c,t[1]=y+E*c,t[5]=l*p,t[9]=M-v*c,t[2]=-l*d,t[6]=c,t[10]=l*f}else if(e.order==="ZYX"){const v=l*p,y=l*m,E=c*p,M=c*m;t[0]=f*p,t[4]=E*d-y,t[8]=v*d+M,t[1]=f*m,t[5]=M*d+v,t[9]=y*d-E,t[2]=-d,t[6]=c*f,t[10]=l*f}else if(e.order==="YZX"){const v=l*f,y=l*d,E=c*f,M=c*d;t[0]=f*p,t[4]=M-v*m,t[8]=E*m+y,t[1]=m,t[5]=l*p,t[9]=-c*p,t[2]=-d*p,t[6]=y*m+E,t[10]=v-M*m}else if(e.order==="XZY"){const v=l*f,y=l*d,E=c*f,M=c*d;t[0]=f*p,t[4]=-m,t[8]=d*p,t[1]=v*m+M,t[5]=l*p,t[9]=y*m-E,t[2]=E*m-y,t[6]=c*p,t[10]=M*m+v}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(FT,e,OT)}lookAt(e,t,n){const s=this.elements;return ni.subVectors(e,t),ni.lengthSq()===0&&(ni.z=1),ni.normalize(),Jr.crossVectors(n,ni),Jr.lengthSq()===0&&(Math.abs(n.z)===1?ni.x+=1e-4:ni.z+=1e-4,ni.normalize(),Jr.crossVectors(n,ni)),Jr.normalize(),Fu.crossVectors(ni,Jr),s[0]=Jr.x,s[4]=Fu.x,s[8]=ni.x,s[1]=Jr.y,s[5]=Fu.y,s[9]=ni.y,s[2]=Jr.z,s[6]=Fu.z,s[10]=ni.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,o=this.elements,l=n[0],c=n[4],f=n[8],d=n[12],p=n[1],m=n[5],v=n[9],y=n[13],E=n[2],M=n[6],S=n[10],_=n[14],R=n[3],C=n[7],b=n[11],I=n[15],F=s[0],U=s[4],X=s[8],P=s[12],L=s[1],z=s[5],Z=s[9],ie=s[13],fe=s[2],se=s[6],oe=s[10],de=s[14],H=s[3],le=s[7],re=s[11],O=s[15];return o[0]=l*F+c*L+f*fe+d*H,o[4]=l*U+c*z+f*se+d*le,o[8]=l*X+c*Z+f*oe+d*re,o[12]=l*P+c*ie+f*de+d*O,o[1]=p*F+m*L+v*fe+y*H,o[5]=p*U+m*z+v*se+y*le,o[9]=p*X+m*Z+v*oe+y*re,o[13]=p*P+m*ie+v*de+y*O,o[2]=E*F+M*L+S*fe+_*H,o[6]=E*U+M*z+S*se+_*le,o[10]=E*X+M*Z+S*oe+_*re,o[14]=E*P+M*ie+S*de+_*O,o[3]=R*F+C*L+b*fe+I*H,o[7]=R*U+C*z+b*se+I*le,o[11]=R*X+C*Z+b*oe+I*re,o[15]=R*P+C*ie+b*de+I*O,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],o=e[12],l=e[1],c=e[5],f=e[9],d=e[13],p=e[2],m=e[6],v=e[10],y=e[14],E=e[3],M=e[7],S=e[11],_=e[15];return E*(+o*f*m-s*d*m-o*c*v+n*d*v+s*c*y-n*f*y)+M*(+t*f*y-t*d*v+o*l*v-s*l*y+s*d*p-o*f*p)+S*(+t*d*m-t*c*y-o*l*m+n*l*y+o*c*p-n*d*p)+_*(-s*c*p-t*f*m+t*c*v+s*l*m-n*l*v+n*f*p)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],o=e[3],l=e[4],c=e[5],f=e[6],d=e[7],p=e[8],m=e[9],v=e[10],y=e[11],E=e[12],M=e[13],S=e[14],_=e[15],R=m*S*d-M*v*d+M*f*y-c*S*y-m*f*_+c*v*_,C=E*v*d-p*S*d-E*f*y+l*S*y+p*f*_-l*v*_,b=p*M*d-E*m*d+E*c*y-l*M*y-p*c*_+l*m*_,I=E*m*f-p*M*f-E*c*v+l*M*v+p*c*S-l*m*S,F=t*R+n*C+s*b+o*I;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const U=1/F;return e[0]=R*U,e[1]=(M*v*o-m*S*o-M*s*y+n*S*y+m*s*_-n*v*_)*U,e[2]=(c*S*o-M*f*o+M*s*d-n*S*d-c*s*_+n*f*_)*U,e[3]=(m*f*o-c*v*o-m*s*d+n*v*d+c*s*y-n*f*y)*U,e[4]=C*U,e[5]=(p*S*o-E*v*o+E*s*y-t*S*y-p*s*_+t*v*_)*U,e[6]=(E*f*o-l*S*o-E*s*d+t*S*d+l*s*_-t*f*_)*U,e[7]=(l*v*o-p*f*o+p*s*d-t*v*d-l*s*y+t*f*y)*U,e[8]=b*U,e[9]=(E*m*o-p*M*o-E*n*y+t*M*y+p*n*_-t*m*_)*U,e[10]=(l*M*o-E*c*o+E*n*d-t*M*d-l*n*_+t*c*_)*U,e[11]=(p*c*o-l*m*o-p*n*d+t*m*d+l*n*y-t*c*y)*U,e[12]=I*U,e[13]=(p*M*s-E*m*s+E*n*v-t*M*v-p*n*S+t*m*S)*U,e[14]=(E*c*s-l*M*s-E*n*f+t*M*f+l*n*S-t*c*S)*U,e[15]=(l*m*s-p*c*s+p*n*f-t*m*f-l*n*v+t*c*v)*U,this}scale(e){const t=this.elements,n=e.x,s=e.y,o=e.z;return t[0]*=n,t[4]*=s,t[8]*=o,t[1]*=n,t[5]*=s,t[9]*=o,t[2]*=n,t[6]*=s,t[10]*=o,t[3]*=n,t[7]*=s,t[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),o=1-n,l=e.x,c=e.y,f=e.z,d=o*l,p=o*c;return this.set(d*l+n,d*c-s*f,d*f+s*c,0,d*c+s*f,p*c+n,p*f-s*l,0,d*f-s*c,p*f+s*l,o*f*f+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,o,l){return this.set(1,n,o,0,e,1,l,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,o=t._x,l=t._y,c=t._z,f=t._w,d=o+o,p=l+l,m=c+c,v=o*d,y=o*p,E=o*m,M=l*p,S=l*m,_=c*m,R=f*d,C=f*p,b=f*m,I=n.x,F=n.y,U=n.z;return s[0]=(1-(M+_))*I,s[1]=(y+b)*I,s[2]=(E-C)*I,s[3]=0,s[4]=(y-b)*F,s[5]=(1-(v+_))*F,s[6]=(S+R)*F,s[7]=0,s[8]=(E+C)*U,s[9]=(S-R)*U,s[10]=(1-(v+M))*U,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let o=xa.set(s[0],s[1],s[2]).length();const l=xa.set(s[4],s[5],s[6]).length(),c=xa.set(s[8],s[9],s[10]).length();this.determinant()<0&&(o=-o),e.x=s[12],e.y=s[13],e.z=s[14],bi.copy(this);const d=1/o,p=1/l,m=1/c;return bi.elements[0]*=d,bi.elements[1]*=d,bi.elements[2]*=d,bi.elements[4]*=p,bi.elements[5]*=p,bi.elements[6]*=p,bi.elements[8]*=m,bi.elements[9]*=m,bi.elements[10]*=m,t.setFromRotationMatrix(bi),n.x=o,n.y=l,n.z=c,this}makePerspective(e,t,n,s,o,l,c=Vi,f=!1){const d=this.elements,p=2*o/(t-e),m=2*o/(n-s),v=(t+e)/(t-e),y=(n+s)/(n-s);let E,M;if(f)E=o/(l-o),M=l*o/(l-o);else if(c===Vi)E=-(l+o)/(l-o),M=-2*l*o/(l-o);else if(c===Ec)E=-l/(l-o),M=-l*o/(l-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+c);return d[0]=p,d[4]=0,d[8]=v,d[12]=0,d[1]=0,d[5]=m,d[9]=y,d[13]=0,d[2]=0,d[6]=0,d[10]=E,d[14]=M,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(e,t,n,s,o,l,c=Vi,f=!1){const d=this.elements,p=2/(t-e),m=2/(n-s),v=-(t+e)/(t-e),y=-(n+s)/(n-s);let E,M;if(f)E=1/(l-o),M=l/(l-o);else if(c===Vi)E=-2/(l-o),M=-(l+o)/(l-o);else if(c===Ec)E=-1/(l-o),M=-o/(l-o);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+c);return d[0]=p,d[4]=0,d[8]=0,d[12]=v,d[1]=0,d[5]=m,d[9]=0,d[13]=y,d[2]=0,d[6]=0,d[10]=E,d[14]=M,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const xa=new j,bi=new _t,FT=new j(0,0,0),OT=new j(1,1,1),Jr=new j,Fu=new j,ni=new j,d_=new _t,h_=new $i;class Yi{constructor(e=0,t=0,n=0,s=Yi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,o=s[0],l=s[4],c=s[8],f=s[1],d=s[5],p=s[9],m=s[2],v=s[6],y=s[10];switch(t){case"XYZ":this._y=Math.asin(xt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-p,y),this._z=Math.atan2(-l,o)):(this._x=Math.atan2(v,d),this._z=0);break;case"YXZ":this._x=Math.asin(-xt(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(c,y),this._z=Math.atan2(f,d)):(this._y=Math.atan2(-m,o),this._z=0);break;case"ZXY":this._x=Math.asin(xt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-m,y),this._z=Math.atan2(-l,d)):(this._y=0,this._z=Math.atan2(f,o));break;case"ZYX":this._y=Math.asin(-xt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(v,y),this._z=Math.atan2(f,o)):(this._x=0,this._z=Math.atan2(-l,d));break;case"YZX":this._z=Math.asin(xt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-p,d),this._y=Math.atan2(-m,o)):(this._x=0,this._y=Math.atan2(c,y));break;case"XZY":this._z=Math.asin(-xt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(v,d),this._y=Math.atan2(c,o)):(this._x=Math.atan2(-p,y),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return d_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(d_,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return h_.setFromEuler(this),this.setFromQuaternion(h_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Yi.DEFAULT_ORDER="XYZ";let Oy=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},kT=0;const p_=new j,Sa=new $i,fr=new _t,Ou=new j,Vo=new j,BT=new j,zT=new $i,m_=new j(1,0,0),g_=new j(0,1,0),v_=new j(0,0,1),__={type:"added"},HT={type:"removed"},Ea={type:"childadded",child:null},Ud={type:"childremoved",child:null};class en extends Gs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:kT++}),this.uuid=Ii(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=en.DEFAULT_UP.clone();const e=new j,t=new Yi,n=new $i,s=new j(1,1,1);function o(){n.setFromEuler(t,!1)}function l(){t.setFromQuaternion(n,void 0,!1)}t._onChange(o),n._onChange(l),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new _t},normalMatrix:{value:new gt}}),this.matrix=new _t,this.matrixWorld=new _t,this.matrixAutoUpdate=en.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=en.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Oy,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Sa.setFromAxisAngle(e,t),this.quaternion.multiply(Sa),this}rotateOnWorldAxis(e,t){return Sa.setFromAxisAngle(e,t),this.quaternion.premultiply(Sa),this}rotateX(e){return this.rotateOnAxis(m_,e)}rotateY(e){return this.rotateOnAxis(g_,e)}rotateZ(e){return this.rotateOnAxis(v_,e)}translateOnAxis(e,t){return p_.copy(e).applyQuaternion(this.quaternion),this.position.add(p_.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(m_,e)}translateY(e){return this.translateOnAxis(g_,e)}translateZ(e){return this.translateOnAxis(v_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(fr.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ou.copy(e):Ou.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Vo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?fr.lookAt(Vo,Ou,this.up):fr.lookAt(Ou,Vo,this.up),this.quaternion.setFromRotationMatrix(fr),s&&(fr.extractRotation(s.matrixWorld),Sa.setFromRotationMatrix(fr),this.quaternion.premultiply(Sa.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(__),Ea.child=e,this.dispatchEvent(Ea),Ea.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(HT),Ud.child=e,this.dispatchEvent(Ud),Ud.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),fr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),fr.multiply(e.parent.matrixWorld)),e.applyMatrix4(fr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(__),Ea.child=e,this.dispatchEvent(Ea),Ea.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const l=this.children[n].getObjectByProperty(e,t);if(l!==void 0)return l}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let o=0,l=s.length;o<l;o++)s[o].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vo,e,BT),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vo,zT,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let o=0,l=s.length;o<l;o++)s[o].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(c=>({...c,boundingBox:c.boundingBox?c.boundingBox.toJSON():void 0,boundingSphere:c.boundingSphere?c.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(c=>({...c})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function o(c,f){return c[f.uuid]===void 0&&(c[f.uuid]=f.toJSON(e)),f.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(e.geometries,this.geometry);const c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){const f=c.shapes;if(Array.isArray(f))for(let d=0,p=f.length;d<p;d++){const m=f[d];o(e.shapes,m)}else o(e.shapes,f)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const c=[];for(let f=0,d=this.material.length;f<d;f++)c.push(o(e.materials,this.material[f]));s.material=c}else s.material=o(e.materials,this.material);if(this.children.length>0){s.children=[];for(let c=0;c<this.children.length;c++)s.children.push(this.children[c].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let c=0;c<this.animations.length;c++){const f=this.animations[c];s.animations.push(o(e.animations,f))}}if(t){const c=l(e.geometries),f=l(e.materials),d=l(e.textures),p=l(e.images),m=l(e.shapes),v=l(e.skeletons),y=l(e.animations),E=l(e.nodes);c.length>0&&(n.geometries=c),f.length>0&&(n.materials=f),d.length>0&&(n.textures=d),p.length>0&&(n.images=p),m.length>0&&(n.shapes=m),v.length>0&&(n.skeletons=v),y.length>0&&(n.animations=y),E.length>0&&(n.nodes=E)}return n.object=s,n;function l(c){const f=[];for(const d in c){const p=c[d];delete p.metadata,f.push(p)}return f}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}en.DEFAULT_UP=new j(0,1,0);en.DEFAULT_MATRIX_AUTO_UPDATE=!0;en.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ai=new j,dr=new j,Fd=new j,hr=new j,Ma=new j,Ta=new j,y_=new j,Od=new j,kd=new j,Bd=new j,zd=new Lt,Hd=new Lt,Vd=new Lt;class Ci{constructor(e=new j,t=new j,n=new j){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Ai.subVectors(e,t),s.cross(Ai);const o=s.lengthSq();return o>0?s.multiplyScalar(1/Math.sqrt(o)):s.set(0,0,0)}static getBarycoord(e,t,n,s,o){Ai.subVectors(s,t),dr.subVectors(n,t),Fd.subVectors(e,t);const l=Ai.dot(Ai),c=Ai.dot(dr),f=Ai.dot(Fd),d=dr.dot(dr),p=dr.dot(Fd),m=l*d-c*c;if(m===0)return o.set(0,0,0),null;const v=1/m,y=(d*f-c*p)*v,E=(l*p-c*f)*v;return o.set(1-y-E,E,y)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,hr)===null?!1:hr.x>=0&&hr.y>=0&&hr.x+hr.y<=1}static getInterpolation(e,t,n,s,o,l,c,f){return this.getBarycoord(e,t,n,s,hr)===null?(f.x=0,f.y=0,"z"in f&&(f.z=0),"w"in f&&(f.w=0),null):(f.setScalar(0),f.addScaledVector(o,hr.x),f.addScaledVector(l,hr.y),f.addScaledVector(c,hr.z),f)}static getInterpolatedAttribute(e,t,n,s,o,l){return zd.setScalar(0),Hd.setScalar(0),Vd.setScalar(0),zd.fromBufferAttribute(e,t),Hd.fromBufferAttribute(e,n),Vd.fromBufferAttribute(e,s),l.setScalar(0),l.addScaledVector(zd,o.x),l.addScaledVector(Hd,o.y),l.addScaledVector(Vd,o.z),l}static isFrontFacing(e,t,n,s){return Ai.subVectors(n,t),dr.subVectors(e,t),Ai.cross(dr).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ai.subVectors(this.c,this.b),dr.subVectors(this.a,this.b),Ai.cross(dr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ci.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ci.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,o){return Ci.getInterpolation(e,this.a,this.b,this.c,t,n,s,o)}containsPoint(e){return Ci.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ci.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,o=this.c;let l,c;Ma.subVectors(s,n),Ta.subVectors(o,n),Od.subVectors(e,n);const f=Ma.dot(Od),d=Ta.dot(Od);if(f<=0&&d<=0)return t.copy(n);kd.subVectors(e,s);const p=Ma.dot(kd),m=Ta.dot(kd);if(p>=0&&m<=p)return t.copy(s);const v=f*m-p*d;if(v<=0&&f>=0&&p<=0)return l=f/(f-p),t.copy(n).addScaledVector(Ma,l);Bd.subVectors(e,o);const y=Ma.dot(Bd),E=Ta.dot(Bd);if(E>=0&&y<=E)return t.copy(o);const M=y*d-f*E;if(M<=0&&d>=0&&E<=0)return c=d/(d-E),t.copy(n).addScaledVector(Ta,c);const S=p*E-y*m;if(S<=0&&m-p>=0&&y-E>=0)return y_.subVectors(o,s),c=(m-p)/(m-p+(y-E)),t.copy(s).addScaledVector(y_,c);const _=1/(S+M+v);return l=M*_,c=v*_,t.copy(n).addScaledVector(Ma,l).addScaledVector(Ta,c)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const ky={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Qr={h:0,s:0,l:0},ku={h:0,s:0,l:0};function Gd(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class mt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Sn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Rt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=Rt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Rt.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=Rt.workingColorSpace){if(e=Vp(e,1),t=xt(t,0,1),n=xt(n,0,1),t===0)this.r=this.g=this.b=n;else{const o=n<=.5?n*(1+t):n+t-n*t,l=2*n-o;this.r=Gd(l,o,e+1/3),this.g=Gd(l,o,e),this.b=Gd(l,o,e-1/3)}return Rt.colorSpaceToWorking(this,s),this}setStyle(e,t=Sn){function n(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const l=s[1],c=s[2];switch(l){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,t);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,t);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=s[1],l=o.length;if(l===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,t);if(l===6)return this.setHex(parseInt(o,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Sn){const n=ky[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Sr(e.r),this.g=Sr(e.g),this.b=Sr(e.b),this}copyLinearToSRGB(e){return this.r=Ba(e.r),this.g=Ba(e.g),this.b=Ba(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Sn){return Rt.workingToColorSpace(Ln.copy(this),e),Math.round(xt(Ln.r*255,0,255))*65536+Math.round(xt(Ln.g*255,0,255))*256+Math.round(xt(Ln.b*255,0,255))}getHexString(e=Sn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Rt.workingColorSpace){Rt.workingToColorSpace(Ln.copy(this),t);const n=Ln.r,s=Ln.g,o=Ln.b,l=Math.max(n,s,o),c=Math.min(n,s,o);let f,d;const p=(c+l)/2;if(c===l)f=0,d=0;else{const m=l-c;switch(d=p<=.5?m/(l+c):m/(2-l-c),l){case n:f=(s-o)/m+(s<o?6:0);break;case s:f=(o-n)/m+2;break;case o:f=(n-s)/m+4;break}f/=6}return e.h=f,e.s=d,e.l=p,e}getRGB(e,t=Rt.workingColorSpace){return Rt.workingToColorSpace(Ln.copy(this),t),e.r=Ln.r,e.g=Ln.g,e.b=Ln.b,e}getStyle(e=Sn){Rt.workingToColorSpace(Ln.copy(this),e);const t=Ln.r,n=Ln.g,s=Ln.b;return e!==Sn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Qr),this.setHSL(Qr.h+e,Qr.s+t,Qr.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Qr),e.getHSL(ku);const n=Qo(Qr.h,ku.h,t),s=Qo(Qr.s,ku.s,t),o=Qo(Qr.l,ku.l,t);return this.setHSL(n,s,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,o=e.elements;return this.r=o[0]*t+o[3]*n+o[6]*s,this.g=o[1]*t+o[4]*n+o[7]*s,this.b=o[2]*t+o[5]*n+o[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ln=new mt;mt.NAMES=ky;let VT=0;class Wi extends Gs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:VT++}),this.uuid=Ii(),this.name="",this.type="Material",this.blending=ka,this.side=Mr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=yh,this.blendDst=xh,this.blendEquation=Ns,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new mt(0,0,0),this.blendAlpha=0,this.depthFunc=Va,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=s_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ma,this.stencilZFail=ma,this.stencilZPass=ma,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ka&&(n.blending=this.blending),this.side!==Mr&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==yh&&(n.blendSrc=this.blendSrc),this.blendDst!==xh&&(n.blendDst=this.blendDst),this.blendEquation!==Ns&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Va&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==s_&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ma&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ma&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ma&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(o){const l=[];for(const c in o){const f=o[c];delete f.metadata,l.push(f)}return l}if(t){const o=s(e.textures),l=s(e.images);o.length>0&&(n.textures=o),l.length>0&&(n.images=l)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let o=0;o!==s;++o)n[o]=t[o].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Fs extends Wi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new mt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yi,this.combine=Sy,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const an=new j,Bu=new dt;let GT=0;class In{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:GT++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=sp,this.updateRanges=[],this.gpuType=Pi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,o=this.itemSize;s<o;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Bu.fromBufferAttribute(this,t),Bu.applyMatrix3(e),this.setXY(t,Bu.x,Bu.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)an.fromBufferAttribute(this,t),an.applyMatrix3(e),this.setXYZ(t,an.x,an.y,an.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)an.fromBufferAttribute(this,t),an.applyMatrix4(e),this.setXYZ(t,an.x,an.y,an.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)an.fromBufferAttribute(this,t),an.applyNormalMatrix(e),this.setXYZ(t,an.x,an.y,an.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)an.fromBufferAttribute(this,t),an.transformDirection(e),this.setXYZ(t,an.x,an.y,an.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ri(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ut(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ri(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ri(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ri(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ri(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ut(t,this.array),n=Ut(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Ut(t,this.array),n=Ut(n,this.array),s=Ut(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,o){return e*=this.itemSize,this.normalized&&(t=Ut(t,this.array),n=Ut(n,this.array),s=Ut(s,this.array),o=Ut(o,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==sp&&(e.usage=this.usage),e}}class By extends In{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class zy extends In{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class gi extends In{constructor(e,t,n){super(new Float32Array(e),t,n)}}let WT=0;const hi=new _t,Wd=new en,wa=new j,ii=new qi,Go=new qi,vn=new j;class vi extends Gs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:WT++}),this.uuid=Ii(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Uy(e)?zy:By)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const o=new gt().getNormalMatrix(e);n.applyNormalMatrix(o),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return hi.makeRotationFromQuaternion(e),this.applyMatrix4(hi),this}rotateX(e){return hi.makeRotationX(e),this.applyMatrix4(hi),this}rotateY(e){return hi.makeRotationY(e),this.applyMatrix4(hi),this}rotateZ(e){return hi.makeRotationZ(e),this.applyMatrix4(hi),this}translate(e,t,n){return hi.makeTranslation(e,t,n),this.applyMatrix4(hi),this}scale(e,t,n){return hi.makeScale(e,t,n),this.applyMatrix4(hi),this}lookAt(e){return Wd.lookAt(e),Wd.updateMatrix(),this.applyMatrix4(Wd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(wa).negate(),this.translate(wa.x,wa.y,wa.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,o=e.length;s<o;s++){const l=e[s];n.push(l.x,l.y,l.z||0)}this.setAttribute("position",new gi(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const o=e[s];t.setXYZ(s,o.x,o.y,o.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new j(-1/0,-1/0,-1/0),new j(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const o=t[n];ii.setFromBufferAttribute(o),this.morphTargetsRelative?(vn.addVectors(this.boundingBox.min,ii.min),this.boundingBox.expandByPoint(vn),vn.addVectors(this.boundingBox.max,ii.max),this.boundingBox.expandByPoint(vn)):(this.boundingBox.expandByPoint(ii.min),this.boundingBox.expandByPoint(ii.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Zi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new j,1/0);return}if(e){const n=this.boundingSphere.center;if(ii.setFromBufferAttribute(e),t)for(let o=0,l=t.length;o<l;o++){const c=t[o];Go.setFromBufferAttribute(c),this.morphTargetsRelative?(vn.addVectors(ii.min,Go.min),ii.expandByPoint(vn),vn.addVectors(ii.max,Go.max),ii.expandByPoint(vn)):(ii.expandByPoint(Go.min),ii.expandByPoint(Go.max))}ii.getCenter(n);let s=0;for(let o=0,l=e.count;o<l;o++)vn.fromBufferAttribute(e,o),s=Math.max(s,n.distanceToSquared(vn));if(t)for(let o=0,l=t.length;o<l;o++){const c=t[o],f=this.morphTargetsRelative;for(let d=0,p=c.count;d<p;d++)vn.fromBufferAttribute(c,d),f&&(wa.fromBufferAttribute(e,d),vn.add(wa)),s=Math.max(s,n.distanceToSquared(vn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,o=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new In(new Float32Array(4*n.count),4));const l=this.getAttribute("tangent"),c=[],f=[];for(let X=0;X<n.count;X++)c[X]=new j,f[X]=new j;const d=new j,p=new j,m=new j,v=new dt,y=new dt,E=new dt,M=new j,S=new j;function _(X,P,L){d.fromBufferAttribute(n,X),p.fromBufferAttribute(n,P),m.fromBufferAttribute(n,L),v.fromBufferAttribute(o,X),y.fromBufferAttribute(o,P),E.fromBufferAttribute(o,L),p.sub(d),m.sub(d),y.sub(v),E.sub(v);const z=1/(y.x*E.y-E.x*y.y);isFinite(z)&&(M.copy(p).multiplyScalar(E.y).addScaledVector(m,-y.y).multiplyScalar(z),S.copy(m).multiplyScalar(y.x).addScaledVector(p,-E.x).multiplyScalar(z),c[X].add(M),c[P].add(M),c[L].add(M),f[X].add(S),f[P].add(S),f[L].add(S))}let R=this.groups;R.length===0&&(R=[{start:0,count:e.count}]);for(let X=0,P=R.length;X<P;++X){const L=R[X],z=L.start,Z=L.count;for(let ie=z,fe=z+Z;ie<fe;ie+=3)_(e.getX(ie+0),e.getX(ie+1),e.getX(ie+2))}const C=new j,b=new j,I=new j,F=new j;function U(X){I.fromBufferAttribute(s,X),F.copy(I);const P=c[X];C.copy(P),C.sub(I.multiplyScalar(I.dot(P))).normalize(),b.crossVectors(F,P);const z=b.dot(f[X])<0?-1:1;l.setXYZW(X,C.x,C.y,C.z,z)}for(let X=0,P=R.length;X<P;++X){const L=R[X],z=L.start,Z=L.count;for(let ie=z,fe=z+Z;ie<fe;ie+=3)U(e.getX(ie+0)),U(e.getX(ie+1)),U(e.getX(ie+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new In(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let v=0,y=n.count;v<y;v++)n.setXYZ(v,0,0,0);const s=new j,o=new j,l=new j,c=new j,f=new j,d=new j,p=new j,m=new j;if(e)for(let v=0,y=e.count;v<y;v+=3){const E=e.getX(v+0),M=e.getX(v+1),S=e.getX(v+2);s.fromBufferAttribute(t,E),o.fromBufferAttribute(t,M),l.fromBufferAttribute(t,S),p.subVectors(l,o),m.subVectors(s,o),p.cross(m),c.fromBufferAttribute(n,E),f.fromBufferAttribute(n,M),d.fromBufferAttribute(n,S),c.add(p),f.add(p),d.add(p),n.setXYZ(E,c.x,c.y,c.z),n.setXYZ(M,f.x,f.y,f.z),n.setXYZ(S,d.x,d.y,d.z)}else for(let v=0,y=t.count;v<y;v+=3)s.fromBufferAttribute(t,v+0),o.fromBufferAttribute(t,v+1),l.fromBufferAttribute(t,v+2),p.subVectors(l,o),m.subVectors(s,o),p.cross(m),n.setXYZ(v+0,p.x,p.y,p.z),n.setXYZ(v+1,p.x,p.y,p.z),n.setXYZ(v+2,p.x,p.y,p.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)vn.fromBufferAttribute(e,t),vn.normalize(),e.setXYZ(t,vn.x,vn.y,vn.z)}toNonIndexed(){function e(c,f){const d=c.array,p=c.itemSize,m=c.normalized,v=new d.constructor(f.length*p);let y=0,E=0;for(let M=0,S=f.length;M<S;M++){c.isInterleavedBufferAttribute?y=f[M]*c.data.stride+c.offset:y=f[M]*p;for(let _=0;_<p;_++)v[E++]=d[y++]}return new In(v,p,m)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new vi,n=this.index.array,s=this.attributes;for(const c in s){const f=s[c],d=e(f,n);t.setAttribute(c,d)}const o=this.morphAttributes;for(const c in o){const f=[],d=o[c];for(let p=0,m=d.length;p<m;p++){const v=d[p],y=e(v,n);f.push(y)}t.morphAttributes[c]=f}t.morphTargetsRelative=this.morphTargetsRelative;const l=this.groups;for(let c=0,f=l.length;c<f;c++){const d=l[c];t.addGroup(d.start,d.count,d.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const f=this.parameters;for(const d in f)f[d]!==void 0&&(e[d]=f[d]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const f in n){const d=n[f];e.data.attributes[f]=d.toJSON(e.data)}const s={};let o=!1;for(const f in this.morphAttributes){const d=this.morphAttributes[f],p=[];for(let m=0,v=d.length;m<v;m++){const y=d[m];p.push(y.toJSON(e.data))}p.length>0&&(s[f]=p,o=!0)}o&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const l=this.groups;l.length>0&&(e.data.groups=JSON.parse(JSON.stringify(l)));const c=this.boundingSphere;return c!==null&&(e.data.boundingSphere=c.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const d in s){const p=s[d];this.setAttribute(d,p.clone(t))}const o=e.morphAttributes;for(const d in o){const p=[],m=o[d];for(let v=0,y=m.length;v<y;v++)p.push(m[v].clone(t));this.morphAttributes[d]=p}this.morphTargetsRelative=e.morphTargetsRelative;const l=e.groups;for(let d=0,p=l.length;d<p;d++){const m=l[d];this.addGroup(m.start,m.count,m.materialIndex)}const c=e.boundingBox;c!==null&&(this.boundingBox=c.clone());const f=e.boundingSphere;return f!==null&&(this.boundingSphere=f.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const x_=new _t,Rs=new vl,zu=new Zi,S_=new j,Hu=new j,Vu=new j,Gu=new j,jd=new j,Wu=new j,E_=new j,ju=new j;class qn extends en{constructor(e=new vi,t=new Fs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,l=s.length;o<l;o++){const c=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=o}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,o=n.morphAttributes.position,l=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const c=this.morphTargetInfluences;if(o&&c){Wu.set(0,0,0);for(let f=0,d=o.length;f<d;f++){const p=c[f],m=o[f];p!==0&&(jd.fromBufferAttribute(m,e),l?Wu.addScaledVector(jd,p):Wu.addScaledVector(jd.sub(t),p))}t.add(Wu)}return t}raycast(e,t){const n=this.geometry,s=this.material,o=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),zu.copy(n.boundingSphere),zu.applyMatrix4(o),Rs.copy(e.ray).recast(e.near),!(zu.containsPoint(Rs.origin)===!1&&(Rs.intersectSphere(zu,S_)===null||Rs.origin.distanceToSquared(S_)>(e.far-e.near)**2))&&(x_.copy(o).invert(),Rs.copy(e.ray).applyMatrix4(x_),!(n.boundingBox!==null&&Rs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Rs)))}_computeIntersections(e,t,n){let s;const o=this.geometry,l=this.material,c=o.index,f=o.attributes.position,d=o.attributes.uv,p=o.attributes.uv1,m=o.attributes.normal,v=o.groups,y=o.drawRange;if(c!==null)if(Array.isArray(l))for(let E=0,M=v.length;E<M;E++){const S=v[E],_=l[S.materialIndex],R=Math.max(S.start,y.start),C=Math.min(c.count,Math.min(S.start+S.count,y.start+y.count));for(let b=R,I=C;b<I;b+=3){const F=c.getX(b),U=c.getX(b+1),X=c.getX(b+2);s=Xu(this,_,e,n,d,p,m,F,U,X),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=S.materialIndex,t.push(s))}}else{const E=Math.max(0,y.start),M=Math.min(c.count,y.start+y.count);for(let S=E,_=M;S<_;S+=3){const R=c.getX(S),C=c.getX(S+1),b=c.getX(S+2);s=Xu(this,l,e,n,d,p,m,R,C,b),s&&(s.faceIndex=Math.floor(S/3),t.push(s))}}else if(f!==void 0)if(Array.isArray(l))for(let E=0,M=v.length;E<M;E++){const S=v[E],_=l[S.materialIndex],R=Math.max(S.start,y.start),C=Math.min(f.count,Math.min(S.start+S.count,y.start+y.count));for(let b=R,I=C;b<I;b+=3){const F=b,U=b+1,X=b+2;s=Xu(this,_,e,n,d,p,m,F,U,X),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=S.materialIndex,t.push(s))}}else{const E=Math.max(0,y.start),M=Math.min(f.count,y.start+y.count);for(let S=E,_=M;S<_;S+=3){const R=S,C=S+1,b=S+2;s=Xu(this,l,e,n,d,p,m,R,C,b),s&&(s.faceIndex=Math.floor(S/3),t.push(s))}}}}function jT(r,e,t,n,s,o,l,c){let f;if(e.side===zn?f=n.intersectTriangle(l,o,s,!0,c):f=n.intersectTriangle(s,o,l,e.side===Mr,c),f===null)return null;ju.copy(c),ju.applyMatrix4(r.matrixWorld);const d=t.ray.origin.distanceTo(ju);return d<t.near||d>t.far?null:{distance:d,point:ju.clone(),object:r}}function Xu(r,e,t,n,s,o,l,c,f,d){r.getVertexPosition(c,Hu),r.getVertexPosition(f,Vu),r.getVertexPosition(d,Gu);const p=jT(r,e,t,n,Hu,Vu,Gu,E_);if(p){const m=new j;Ci.getBarycoord(E_,Hu,Vu,Gu,m),s&&(p.uv=Ci.getInterpolatedAttribute(s,c,f,d,m,new dt)),o&&(p.uv1=Ci.getInterpolatedAttribute(o,c,f,d,m,new dt)),l&&(p.normal=Ci.getInterpolatedAttribute(l,c,f,d,m,new j),p.normal.dot(n.direction)>0&&p.normal.multiplyScalar(-1));const v={a:c,b:f,c:d,normal:new j,materialIndex:0};Ci.getNormal(Hu,Vu,Gu,v.normal),p.face=v,p.barycoord=m}return p}class _l extends vi{constructor(e=1,t=1,n=1,s=1,o=1,l=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:o,depthSegments:l};const c=this;s=Math.floor(s),o=Math.floor(o),l=Math.floor(l);const f=[],d=[],p=[],m=[];let v=0,y=0;E("z","y","x",-1,-1,n,t,e,l,o,0),E("z","y","x",1,-1,n,t,-e,l,o,1),E("x","z","y",1,1,e,n,t,s,l,2),E("x","z","y",1,-1,e,n,-t,s,l,3),E("x","y","z",1,-1,e,t,n,s,o,4),E("x","y","z",-1,-1,e,t,-n,s,o,5),this.setIndex(f),this.setAttribute("position",new gi(d,3)),this.setAttribute("normal",new gi(p,3)),this.setAttribute("uv",new gi(m,2));function E(M,S,_,R,C,b,I,F,U,X,P){const L=b/U,z=I/X,Z=b/2,ie=I/2,fe=F/2,se=U+1,oe=X+1;let de=0,H=0;const le=new j;for(let re=0;re<oe;re++){const O=re*z-ie;for(let ne=0;ne<se;ne++){const Oe=ne*L-Z;le[M]=Oe*R,le[S]=O*C,le[_]=fe,d.push(le.x,le.y,le.z),le[M]=0,le[S]=0,le[_]=F>0?1:-1,p.push(le.x,le.y,le.z),m.push(ne/U),m.push(1-re/X),de+=1}}for(let re=0;re<X;re++)for(let O=0;O<U;O++){const ne=v+O+se*re,Oe=v+O+se*(re+1),$e=v+(O+1)+se*(re+1),Ve=v+(O+1)+se*re;f.push(ne,Oe,Ve),f.push(Oe,$e,Ve),H+=6}c.addGroup(y,H,P),y+=H,v+=de}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _l(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function $a(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const s=r[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function kn(r){const e={};for(let t=0;t<r.length;t++){const n=$a(r[t]);for(const s in n)e[s]=n[s]}return e}function XT(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Hy(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Rt.workingColorSpace}const $T={clone:$a,merge:kn};var YT=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,KT=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Tr extends Wi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=YT,this.fragmentShader=KT,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=$a(e.uniforms),this.uniformsGroups=XT(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const l=this.uniforms[s].value;l&&l.isTexture?t.uniforms[s]={type:"t",value:l.toJSON(e).uuid}:l&&l.isColor?t.uniforms[s]={type:"c",value:l.getHex()}:l&&l.isVector2?t.uniforms[s]={type:"v2",value:l.toArray()}:l&&l.isVector3?t.uniforms[s]={type:"v3",value:l.toArray()}:l&&l.isVector4?t.uniforms[s]={type:"v4",value:l.toArray()}:l&&l.isMatrix3?t.uniforms[s]={type:"m3",value:l.toArray()}:l&&l.isMatrix4?t.uniforms[s]={type:"m4",value:l.toArray()}:t.uniforms[s]={value:l}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Vy extends en{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _t,this.projectionMatrix=new _t,this.projectionMatrixInverse=new _t,this.coordinateSystem=Vi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const es=new j,M_=new dt,T_=new dt;class Bn extends Vy{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Xa*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Jo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Xa*2*Math.atan(Math.tan(Jo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){es.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(es.x,es.y).multiplyScalar(-e/es.z),es.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(es.x,es.y).multiplyScalar(-e/es.z)}getViewSize(e,t){return this.getViewBounds(e,M_,T_),t.subVectors(T_,M_)}setViewOffset(e,t,n,s,o,l){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=o,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Jo*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,o=-.5*s;const l=this.view;if(this.view!==null&&this.view.enabled){const f=l.fullWidth,d=l.fullHeight;o+=l.offsetX*s/f,t-=l.offsetY*n/d,s*=l.width/f,n*=l.height/d}const c=this.filmOffset;c!==0&&(o+=e*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ba=-90,Aa=1;class qT extends en{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Bn(ba,Aa,e,t);s.layers=this.layers,this.add(s);const o=new Bn(ba,Aa,e,t);o.layers=this.layers,this.add(o);const l=new Bn(ba,Aa,e,t);l.layers=this.layers,this.add(l);const c=new Bn(ba,Aa,e,t);c.layers=this.layers,this.add(c);const f=new Bn(ba,Aa,e,t);f.layers=this.layers,this.add(f);const d=new Bn(ba,Aa,e,t);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,o,l,c,f]=t;for(const d of t)this.remove(d);if(e===Vi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),l.up.set(0,0,1),l.lookAt(0,-1,0),c.up.set(0,1,0),c.lookAt(0,0,1),f.up.set(0,1,0),f.lookAt(0,0,-1);else if(e===Ec)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),l.up.set(0,0,-1),l.lookAt(0,-1,0),c.up.set(0,-1,0),c.lookAt(0,0,1),f.up.set(0,-1,0),f.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const d of t)this.add(d),d.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,l,c,f,d,p]=this.children,m=e.getRenderTarget(),v=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const M=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,o),e.setRenderTarget(n,1,s),e.render(t,l),e.setRenderTarget(n,2,s),e.render(t,c),e.setRenderTarget(n,3,s),e.render(t,f),e.setRenderTarget(n,4,s),e.render(t,d),n.texture.generateMipmaps=M,e.setRenderTarget(n,5,s),e.render(t,p),e.setRenderTarget(m,v,y),e.xr.enabled=E,n.texture.needsPMREMUpdate=!0}}class Gy extends _n{constructor(e=[],t=Ga,n,s,o,l,c,f,d,p){super(e,t,n,s,o,l,c,f,d,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ZT extends zs{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Gy(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new _l(5,5,5),o=new Tr({name:"CubemapFromEquirect",uniforms:$a(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:zn,blending:ss});o.uniforms.tEquirect.value=t;const l=new qn(s,o),c=t.minFilter;return t.minFilter===_r&&(t.minFilter=ri),new qT(1,10,this).update(e,l),t.minFilter=c,l.geometry.dispose(),l.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const o=e.getRenderTarget();for(let l=0;l<6;l++)e.setRenderTarget(this,l),e.clear(t,n,s);e.setRenderTarget(o)}}class Os extends en{constructor(){super(),this.isGroup=!0,this.type="Group"}}const JT={type:"move"};class Xd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Os,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Os,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new j,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new j),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Os,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new j,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new j),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,o=null,l=null;const c=this._targetRay,f=this._grip,d=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(d&&e.hand){l=!0;for(const M of e.hand.values()){const S=t.getJointPose(M,n),_=this._getHandJoint(d,M);S!==null&&(_.matrix.fromArray(S.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=S.radius),_.visible=S!==null}const p=d.joints["index-finger-tip"],m=d.joints["thumb-tip"],v=p.position.distanceTo(m.position),y=.02,E=.005;d.inputState.pinching&&v>y+E?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!d.inputState.pinching&&v<=y-E&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else f!==null&&e.gripSpace&&(o=t.getPose(e.gripSpace,n),o!==null&&(f.matrix.fromArray(o.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,o.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(o.linearVelocity)):f.hasLinearVelocity=!1,o.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(o.angularVelocity)):f.hasAngularVelocity=!1));c!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&o!==null&&(s=o),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(JT)))}return c!==null&&(c.visible=s!==null),f!==null&&(f.visible=o!==null),d!==null&&(d.visible=l!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Os;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class QT extends en{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Yi,this.environmentIntensity=1,this.environmentRotation=new Yi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class ew{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=sp,this.updateRanges=[],this.version=0,this.uuid=Ii()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,o=this.stride;s<o;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ii()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ii()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const On=new j;class Wp{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)On.fromBufferAttribute(this,t),On.applyMatrix4(e),this.setXYZ(t,On.x,On.y,On.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)On.fromBufferAttribute(this,t),On.applyNormalMatrix(e),this.setXYZ(t,On.x,On.y,On.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)On.fromBufferAttribute(this,t),On.transformDirection(e),this.setXYZ(t,On.x,On.y,On.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Ri(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ut(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Ut(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Ri(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Ri(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Ri(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Ri(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ut(t,this.array),n=Ut(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ut(t,this.array),n=Ut(n,this.array),s=Ut(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,o){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ut(t,this.array),n=Ut(n,this.array),s=Ut(s,this.array),o=Ut(o,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=o,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)t.push(this.data.array[s+o])}return new In(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Wp(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)t.push(this.data.array[s+o])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const w_=new j,b_=new Lt,A_=new Lt,tw=new j,R_=new _t,$u=new j,$d=new Zi,C_=new _t,Yd=new vl;class nw extends qn{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=t_,this.bindMatrix=new _t,this.bindMatrixInverse=new _t,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new qi),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,$u),this.boundingBox.expandByPoint($u)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Zi),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,$u),this.boundingSphere.expandByPoint($u)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),$d.copy(this.boundingSphere),$d.applyMatrix4(s),e.ray.intersectsSphere($d)!==!1&&(C_.copy(s).invert(),Yd.copy(e.ray).applyMatrix4(C_),!(this.boundingBox!==null&&Yd.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Yd)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Lt,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);const o=1/e.manhattanLength();o!==1/0?e.multiplyScalar(o):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===t_?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===J1?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,s=this.geometry;b_.fromBufferAttribute(s.attributes.skinIndex,e),A_.fromBufferAttribute(s.attributes.skinWeight,e),w_.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let o=0;o<4;o++){const l=A_.getComponent(o);if(l!==0){const c=b_.getComponent(o);R_.multiplyMatrices(n.bones[c].matrixWorld,n.boneInverses[c]),t.addScaledVector(tw.copy(w_).applyMatrix4(R_),l)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Wy extends en{constructor(){super(),this.isBone=!0,this.type="Bone"}}class jy extends _n{constructor(e=null,t=1,n=1,s,o,l,c,f,d=Hn,p=Hn,m,v){super(null,l,c,f,d,p,s,o,m,v),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const P_=new _t,iw=new _t;class jp{constructor(e=[],t=[]){this.uuid=Ii(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new _t)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new _t;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let o=0,l=e.length;o<l;o++){const c=e[o]?e[o].matrixWorld:iw;P_.multiplyMatrices(c,t[o]),P_.toArray(n,o*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new jp(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new jy(t,e,e,mi,Pi);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){const o=e.bones[n];let l=t[o];l===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",o),l=new Wy),this.bones.push(l),this.boneInverses.push(new _t().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let s=0,o=t.length;s<o;s++){const l=t[s];e.bones.push(l.uuid);const c=n[s];e.boneInverses.push(c.toArray())}return e}}class ap extends In{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Ra=new _t,L_=new _t,Yu=[],I_=new qi,rw=new _t,Wo=new qn,jo=new Zi;class sw extends qn{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ap(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,rw)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new qi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ra),I_.copy(e.boundingBox).applyMatrix4(Ra),this.boundingBox.union(I_)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Zi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ra),jo.copy(e.boundingSphere).applyMatrix4(Ra),this.boundingSphere.union(jo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,o=n.length+1,l=e*o+1;for(let c=0;c<n.length;c++)n[c]=s[l+c]}raycast(e,t){const n=this.matrixWorld,s=this.count;if(Wo.geometry=this.geometry,Wo.material=this.material,Wo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),jo.copy(this.boundingSphere),jo.applyMatrix4(n),e.ray.intersectsSphere(jo)!==!1))for(let o=0;o<s;o++){this.getMatrixAt(o,Ra),L_.multiplyMatrices(n,Ra),Wo.matrixWorld=L_,Wo.raycast(e,Yu);for(let l=0,c=Yu.length;l<c;l++){const f=Yu[l];f.instanceId=o,f.object=this,t.push(f)}Yu.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new ap(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new jy(new Float32Array(s*this.count),s,this.count,kp,Pi));const o=this.morphTexture.source.data.data;let l=0;for(let d=0;d<n.length;d++)l+=n[d];const c=this.geometry.morphTargetsRelative?1:1-l,f=s*e;o[f]=c,o.set(n,f+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Kd=new j,aw=new j,ow=new gt;class ns{constructor(e=new j(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=Kd.subVectors(n,t).cross(aw.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Kd),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/s;return o<0||o>1?null:t.copy(e.start).addScaledVector(n,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||ow.getNormalMatrix(e),s=this.coplanarPoint(Kd).applyMatrix4(e),o=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Cs=new Zi,lw=new dt(.5,.5),Ku=new j;class Xp{constructor(e=new ns,t=new ns,n=new ns,s=new ns,o=new ns,l=new ns){this.planes=[e,t,n,s,o,l]}set(e,t,n,s,o,l){const c=this.planes;return c[0].copy(e),c[1].copy(t),c[2].copy(n),c[3].copy(s),c[4].copy(o),c[5].copy(l),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Vi,n=!1){const s=this.planes,o=e.elements,l=o[0],c=o[1],f=o[2],d=o[3],p=o[4],m=o[5],v=o[6],y=o[7],E=o[8],M=o[9],S=o[10],_=o[11],R=o[12],C=o[13],b=o[14],I=o[15];if(s[0].setComponents(d-l,y-p,_-E,I-R).normalize(),s[1].setComponents(d+l,y+p,_+E,I+R).normalize(),s[2].setComponents(d+c,y+m,_+M,I+C).normalize(),s[3].setComponents(d-c,y-m,_-M,I-C).normalize(),n)s[4].setComponents(f,v,S,b).normalize(),s[5].setComponents(d-f,y-v,_-S,I-b).normalize();else if(s[4].setComponents(d-f,y-v,_-S,I-b).normalize(),t===Vi)s[5].setComponents(d+f,y+v,_+S,I+b).normalize();else if(t===Ec)s[5].setComponents(f,v,S,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Cs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Cs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Cs)}intersectsSprite(e){Cs.center.set(0,0,0);const t=lw.distanceTo(e.center);return Cs.radius=.7071067811865476+t,Cs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Cs)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let o=0;o<6;o++)if(t[o].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(Ku.x=s.normal.x>0?e.max.x:e.min.x,Ku.y=s.normal.y>0?e.max.y:e.min.y,Ku.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ku)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Xy extends Wi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new mt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Mc=new j,Tc=new j,D_=new _t,Xo=new vl,qu=new Zi,qd=new j,N_=new j;class $p extends en{constructor(e=new vi,t=new Xy){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,o=t.count;s<o;s++)Mc.fromBufferAttribute(t,s-1),Tc.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Mc.distanceTo(Tc);e.setAttribute("lineDistance",new gi(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,o=e.params.Line.threshold,l=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),qu.copy(n.boundingSphere),qu.applyMatrix4(s),qu.radius+=o,e.ray.intersectsSphere(qu)===!1)return;D_.copy(s).invert(),Xo.copy(e.ray).applyMatrix4(D_);const c=o/((this.scale.x+this.scale.y+this.scale.z)/3),f=c*c,d=this.isLineSegments?2:1,p=n.index,v=n.attributes.position;if(p!==null){const y=Math.max(0,l.start),E=Math.min(p.count,l.start+l.count);for(let M=y,S=E-1;M<S;M+=d){const _=p.getX(M),R=p.getX(M+1),C=Zu(this,e,Xo,f,_,R,M);C&&t.push(C)}if(this.isLineLoop){const M=p.getX(E-1),S=p.getX(y),_=Zu(this,e,Xo,f,M,S,E-1);_&&t.push(_)}}else{const y=Math.max(0,l.start),E=Math.min(v.count,l.start+l.count);for(let M=y,S=E-1;M<S;M+=d){const _=Zu(this,e,Xo,f,M,M+1,M);_&&t.push(_)}if(this.isLineLoop){const M=Zu(this,e,Xo,f,E-1,y,E-1);M&&t.push(M)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,l=s.length;o<l;o++){const c=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=o}}}}}function Zu(r,e,t,n,s,o,l){const c=r.geometry.attributes.position;if(Mc.fromBufferAttribute(c,s),Tc.fromBufferAttribute(c,o),t.distanceSqToSegment(Mc,Tc,qd,N_)>n)return;qd.applyMatrix4(r.matrixWorld);const d=e.ray.origin.distanceTo(qd);if(!(d<e.near||d>e.far))return{distance:d,point:N_.clone().applyMatrix4(r.matrixWorld),index:l,face:null,faceIndex:null,barycoord:null,object:r}}const U_=new j,F_=new j;class uw extends $p{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,o=t.count;s<o;s+=2)U_.fromBufferAttribute(t,s),F_.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+U_.distanceTo(F_);e.setAttribute("lineDistance",new gi(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class cw extends $p{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Yp extends Wi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new mt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const O_=new _t,op=new vl,Ju=new Zi,Qu=new j;class $y extends en{constructor(e=new vi,t=new Yp){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,o=e.params.Points.threshold,l=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ju.copy(n.boundingSphere),Ju.applyMatrix4(s),Ju.radius+=o,e.ray.intersectsSphere(Ju)===!1)return;O_.copy(s).invert(),op.copy(e.ray).applyMatrix4(O_);const c=o/((this.scale.x+this.scale.y+this.scale.z)/3),f=c*c,d=n.index,m=n.attributes.position;if(d!==null){const v=Math.max(0,l.start),y=Math.min(d.count,l.start+l.count);for(let E=v,M=y;E<M;E++){const S=d.getX(E);Qu.fromBufferAttribute(m,S),k_(Qu,S,f,s,e,t,this)}}else{const v=Math.max(0,l.start),y=Math.min(m.count,l.start+l.count);for(let E=v,M=y;E<M;E++)Qu.fromBufferAttribute(m,E),k_(Qu,E,f,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,l=s.length;o<l;o++){const c=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=o}}}}}function k_(r,e,t,n,s,o,l){const c=op.distanceSqToPoint(r);if(c<t){const f=new j;op.closestPointToPoint(r,f),f.applyMatrix4(n);const d=s.ray.origin.distanceTo(f);if(d<s.near||d>s.far)return;o.push({distance:d,distanceToRay:Math.sqrt(c),point:f,index:e,face:null,faceIndex:null,barycoord:null,object:l})}}class Yy extends _n{constructor(e,t,n=Bs,s,o,l,c=Hn,f=Hn,d,p=al,m=1){if(p!==al&&p!==ol)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:e,height:t,depth:m};super(v,s,o,l,c,f,p,n,d),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Gp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Ky extends _n{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ic extends vi{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const o=e/2,l=t/2,c=Math.floor(n),f=Math.floor(s),d=c+1,p=f+1,m=e/c,v=t/f,y=[],E=[],M=[],S=[];for(let _=0;_<p;_++){const R=_*v-l;for(let C=0;C<d;C++){const b=C*m-o;E.push(b,-R,0),M.push(0,0,1),S.push(C/c),S.push(1-_/f)}}for(let _=0;_<f;_++)for(let R=0;R<c;R++){const C=R+d*_,b=R+d*(_+1),I=R+1+d*(_+1),F=R+1+d*_;y.push(C,b,F),y.push(b,I,F)}this.setIndex(y),this.setAttribute("position",new gi(E,3)),this.setAttribute("normal",new gi(M,3)),this.setAttribute("uv",new gi(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ic(e.width,e.height,e.widthSegments,e.heightSegments)}}class Kp extends vi{constructor(e=1,t=32,n=16,s=0,o=Math.PI*2,l=0,c=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:o,thetaStart:l,thetaLength:c},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const f=Math.min(l+c,Math.PI);let d=0;const p=[],m=new j,v=new j,y=[],E=[],M=[],S=[];for(let _=0;_<=n;_++){const R=[],C=_/n;let b=0;_===0&&l===0?b=.5/t:_===n&&f===Math.PI&&(b=-.5/t);for(let I=0;I<=t;I++){const F=I/t;m.x=-e*Math.cos(s+F*o)*Math.sin(l+C*c),m.y=e*Math.cos(l+C*c),m.z=e*Math.sin(s+F*o)*Math.sin(l+C*c),E.push(m.x,m.y,m.z),v.copy(m).normalize(),M.push(v.x,v.y,v.z),S.push(F+b,1-C),R.push(d++)}p.push(R)}for(let _=0;_<n;_++)for(let R=0;R<t;R++){const C=p[_][R+1],b=p[_][R],I=p[_+1][R],F=p[_+1][R+1];(_!==0||l>0)&&y.push(C,b,F),(_!==n-1||f<Math.PI)&&y.push(b,I,F)}this.setIndex(y),this.setAttribute("position",new gi(E,3)),this.setAttribute("normal",new gi(M,3)),this.setAttribute("uv",new gi(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Kp(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class qp extends Wi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new mt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new mt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Iy,this.normalScale=new dt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ji extends qp{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new dt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return xt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new mt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new mt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new mt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class fw extends Wi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=tT,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class dw extends Wi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function ec(r,e){return!r||r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function hw(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function pw(r){function e(s,o){return r[s]-r[o]}const t=r.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function B_(r,e,t){const n=r.length,s=new r.constructor(n);for(let o=0,l=0;l!==n;++o){const c=t[o]*e;for(let f=0;f!==e;++f)s[l++]=r[c+f]}return s}function qy(r,e,t,n){let s=1,o=r[0];for(;o!==void 0&&o[n]===void 0;)o=r[s++];if(o===void 0)return;let l=o[n];if(l!==void 0)if(Array.isArray(l))do l=o[n],l!==void 0&&(e.push(o.time),t.push(...l)),o=r[s++];while(o!==void 0);else if(l.toArray!==void 0)do l=o[n],l!==void 0&&(e.push(o.time),l.toArray(t,t.length)),o=r[s++];while(o!==void 0);else do l=o[n],l!==void 0&&(e.push(o.time),t.push(l)),o=r[s++];while(o!==void 0)}class yl{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,s=t[n],o=t[n-1];e:{t:{let l;n:{i:if(!(e<s)){for(let c=n+2;;){if(s===void 0){if(e<o)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===c)break;if(o=s,s=t[++n],e<s)break t}l=t.length;break n}if(!(e>=o)){const c=t[1];e<c&&(n=2,o=c);for(let f=n-2;;){if(o===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===f)break;if(s=o,o=t[--n-1],e>=o)break t}l=n,n=0;break n}break e}for(;n<l;){const c=n+l>>>1;e<t[c]?l=c:n=c+1}if(s=t[n],o=t[n-1],o===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,o,s)}return this.interpolate_(n,o,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,o=e*s;for(let l=0;l!==s;++l)t[l]=n[o+l];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class mw extends yl{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:n_,endingEnd:n_}}intervalChanged_(e,t,n){const s=this.parameterPositions;let o=e-2,l=e+1,c=s[o],f=s[l];if(c===void 0)switch(this.getSettings_().endingStart){case i_:o=e,c=2*t-n;break;case r_:o=s.length-2,c=t+s[o]-s[o+1];break;default:o=e,c=n}if(f===void 0)switch(this.getSettings_().endingEnd){case i_:l=e,f=2*n-t;break;case r_:l=1,f=n+s[1]-s[0];break;default:l=e-1,f=t}const d=(n-t)*.5,p=this.valueSize;this._weightPrev=d/(t-c),this._weightNext=d/(f-n),this._offsetPrev=o*p,this._offsetNext=l*p}interpolate_(e,t,n,s){const o=this.resultBuffer,l=this.sampleValues,c=this.valueSize,f=e*c,d=f-c,p=this._offsetPrev,m=this._offsetNext,v=this._weightPrev,y=this._weightNext,E=(n-t)/(s-t),M=E*E,S=M*E,_=-v*S+2*v*M-v*E,R=(1+v)*S+(-1.5-2*v)*M+(-.5+v)*E+1,C=(-1-y)*S+(1.5+y)*M+.5*E,b=y*S-y*M;for(let I=0;I!==c;++I)o[I]=_*l[p+I]+R*l[d+I]+C*l[f+I]+b*l[m+I];return o}}class gw extends yl{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const o=this.resultBuffer,l=this.sampleValues,c=this.valueSize,f=e*c,d=f-c,p=(n-t)/(s-t),m=1-p;for(let v=0;v!==c;++v)o[v]=l[d+v]*m+l[f+v]*p;return o}}class vw extends yl{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class Ni{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ec(t,this.TimeBufferType),this.values=ec(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ec(e.times,Array),values:ec(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new vw(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new gw(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new mw(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ll:t=this.InterpolantFactoryMethodDiscrete;break;case ul:t=this.InterpolantFactoryMethodLinear;break;case wd:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ll;case this.InterpolantFactoryMethodLinear:return ul;case this.InterpolantFactoryMethodSmooth:return wd}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){const n=this.times,s=n.length;let o=0,l=s-1;for(;o!==s&&n[o]<e;)++o;for(;l!==-1&&n[l]>t;)--l;if(++l,o!==0||l!==s){o>=l&&(l=Math.max(l,1),o=l-1);const c=this.getValueSize();this.times=n.slice(o,l),this.values=this.values.slice(o*c,l*c)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,s=this.values,o=n.length;o===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let l=null;for(let c=0;c!==o;c++){const f=n[c];if(typeof f=="number"&&isNaN(f)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,c,f),e=!1;break}if(l!==null&&l>f){console.error("THREE.KeyframeTrack: Out of order keys.",this,c,f,l),e=!1;break}l=f}if(s!==void 0&&hw(s))for(let c=0,f=s.length;c!==f;++c){const d=s[c];if(isNaN(d)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,c,d),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===wd,o=e.length-1;let l=1;for(let c=1;c<o;++c){let f=!1;const d=e[c],p=e[c+1];if(d!==p&&(c!==1||d!==e[0]))if(s)f=!0;else{const m=c*n,v=m-n,y=m+n;for(let E=0;E!==n;++E){const M=t[m+E];if(M!==t[v+E]||M!==t[y+E]){f=!0;break}}}if(f){if(c!==l){e[l]=e[c];const m=c*n,v=l*n;for(let y=0;y!==n;++y)t[v+y]=t[m+y]}++l}}if(o>0){e[l]=e[o];for(let c=o*n,f=l*n,d=0;d!==n;++d)t[f+d]=t[c+d];++l}return l!==e.length?(this.times=e.slice(0,l),this.values=t.slice(0,l*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}Ni.prototype.ValueTypeName="";Ni.prototype.TimeBufferType=Float32Array;Ni.prototype.ValueBufferType=Float32Array;Ni.prototype.DefaultInterpolation=ul;class eo extends Ni{constructor(e,t,n){super(e,t,n)}}eo.prototype.ValueTypeName="bool";eo.prototype.ValueBufferType=Array;eo.prototype.DefaultInterpolation=ll;eo.prototype.InterpolantFactoryMethodLinear=void 0;eo.prototype.InterpolantFactoryMethodSmooth=void 0;class Zy extends Ni{constructor(e,t,n,s){super(e,t,n,s)}}Zy.prototype.ValueTypeName="color";class Ya extends Ni{constructor(e,t,n,s){super(e,t,n,s)}}Ya.prototype.ValueTypeName="number";class _w extends yl{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const o=this.resultBuffer,l=this.sampleValues,c=this.valueSize,f=(n-t)/(s-t);let d=e*c;for(let p=d+c;d!==p;d+=4)$i.slerpFlat(o,0,l,d-c,l,d,f);return o}}class Ka extends Ni{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new _w(this.times,this.values,this.getValueSize(),e)}}Ka.prototype.ValueTypeName="quaternion";Ka.prototype.InterpolantFactoryMethodSmooth=void 0;class to extends Ni{constructor(e,t,n){super(e,t,n)}}to.prototype.ValueTypeName="string";to.prototype.ValueBufferType=Array;to.prototype.DefaultInterpolation=ll;to.prototype.InterpolantFactoryMethodLinear=void 0;to.prototype.InterpolantFactoryMethodSmooth=void 0;class qa extends Ni{constructor(e,t,n,s){super(e,t,n,s)}}qa.prototype.ValueTypeName="vector";class yw{constructor(e="",t=-1,n=[],s=Q1){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=Ii(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,s=1/(e.fps||1);for(let l=0,c=n.length;l!==c;++l)t.push(Sw(n[l]).scale(s));const o=new this(e.name,e.duration,t,e.blendMode);return o.uuid=e.uuid,o.userData=JSON.parse(e.userData||"{}"),o}static toJSON(e){const t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let o=0,l=n.length;o!==l;++o)t.push(Ni.toJSON(n[o]));return s}static CreateFromMorphTargetSequence(e,t,n,s){const o=t.length,l=[];for(let c=0;c<o;c++){let f=[],d=[];f.push((c+o-1)%o,c,(c+1)%o),d.push(0,1,0);const p=pw(f);f=B_(f,1,p),d=B_(d,1,p),!s&&f[0]===0&&(f.push(o),d.push(d[0])),l.push(new Ya(".morphTargetInfluences["+t[c].name+"]",f,d).scale(1/n))}return new this(e,-1,l)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const s={},o=/^([\w-]*?)([\d]+)$/;for(let c=0,f=e.length;c<f;c++){const d=e[c],p=d.name.match(o);if(p&&p.length>1){const m=p[1];let v=s[m];v||(s[m]=v=[]),v.push(d)}}const l=[];for(const c in s)l.push(this.CreateFromMorphTargetSequence(c,s[c],t,n));return l}static parseAnimation(e,t){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(m,v,y,E,M){if(y.length!==0){const S=[],_=[];qy(y,S,_,E),S.length!==0&&M.push(new m(v,S,_))}},s=[],o=e.name||"default",l=e.fps||30,c=e.blendMode;let f=e.length||-1;const d=e.hierarchy||[];for(let m=0;m<d.length;m++){const v=d[m].keys;if(!(!v||v.length===0))if(v[0].morphTargets){const y={};let E;for(E=0;E<v.length;E++)if(v[E].morphTargets)for(let M=0;M<v[E].morphTargets.length;M++)y[v[E].morphTargets[M]]=-1;for(const M in y){const S=[],_=[];for(let R=0;R!==v[E].morphTargets.length;++R){const C=v[E];S.push(C.time),_.push(C.morphTarget===M?1:0)}s.push(new Ya(".morphTargetInfluence["+M+"]",S,_))}f=y.length*l}else{const y=".bones["+t[m].name+"]";n(qa,y+".position",v,"pos",s),n(Ka,y+".quaternion",v,"rot",s),n(qa,y+".scale",v,"scl",s)}}return s.length===0?null:new this(o,f,s,c)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,s=e.length;n!==s;++n){const o=this.tracks[n];t=Math.max(t,o.times[o.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function xw(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ya;case"vector":case"vector2":case"vector3":case"vector4":return qa;case"color":return Zy;case"quaternion":return Ka;case"bool":case"boolean":return eo;case"string":return to}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function Sw(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=xw(r.type);if(r.times===void 0){const t=[],n=[];qy(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const yr={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class Ew{constructor(e,t,n){const s=this;let o=!1,l=0,c=0,f;const d=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(p){c++,o===!1&&s.onStart!==void 0&&s.onStart(p,l,c),o=!0},this.itemEnd=function(p){l++,s.onProgress!==void 0&&s.onProgress(p,l,c),l===c&&(o=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(p){s.onError!==void 0&&s.onError(p)},this.resolveURL=function(p){return f?f(p):p},this.setURLModifier=function(p){return f=p,this},this.addHandler=function(p,m){return d.push(p,m),this},this.removeHandler=function(p){const m=d.indexOf(p);return m!==-1&&d.splice(m,2),this},this.getHandler=function(p){for(let m=0,v=d.length;m<v;m+=2){const y=d[m],E=d[m+1];if(y.global&&(y.lastIndex=0),y.test(p))return E}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const Mw=new Ew;class no{constructor(e){this.manager=e!==void 0?e:Mw,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,o){n.load(e,s,t,o)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}no.DEFAULT_MATERIAL_NAME="__DEFAULT";const pr={};class Tw extends Error{constructor(e,t){super(e),this.response=t}}class Jy extends no{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const o=yr.get(`file:${e}`);if(o!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(o),this.manager.itemEnd(e)},0),o;if(pr[e]!==void 0){pr[e].push({onLoad:t,onProgress:n,onError:s});return}pr[e]=[],pr[e].push({onLoad:t,onProgress:n,onError:s});const l=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),c=this.mimeType,f=this.responseType;fetch(l).then(d=>{if(d.status===200||d.status===0){if(d.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||d.body===void 0||d.body.getReader===void 0)return d;const p=pr[e],m=d.body.getReader(),v=d.headers.get("X-File-Size")||d.headers.get("Content-Length"),y=v?parseInt(v):0,E=y!==0;let M=0;const S=new ReadableStream({start(_){R();function R(){m.read().then(({done:C,value:b})=>{if(C)_.close();else{M+=b.byteLength;const I=new ProgressEvent("progress",{lengthComputable:E,loaded:M,total:y});for(let F=0,U=p.length;F<U;F++){const X=p[F];X.onProgress&&X.onProgress(I)}_.enqueue(b),R()}},C=>{_.error(C)})}}});return new Response(S)}else throw new Tw(`fetch for "${d.url}" responded with ${d.status}: ${d.statusText}`,d)}).then(d=>{switch(f){case"arraybuffer":return d.arrayBuffer();case"blob":return d.blob();case"document":return d.text().then(p=>new DOMParser().parseFromString(p,c));case"json":return d.json();default:if(c==="")return d.text();{const m=/charset="?([^;"\s]*)"?/i.exec(c),v=m&&m[1]?m[1].toLowerCase():void 0,y=new TextDecoder(v);return d.arrayBuffer().then(E=>y.decode(E))}}}).then(d=>{yr.add(`file:${e}`,d);const p=pr[e];delete pr[e];for(let m=0,v=p.length;m<v;m++){const y=p[m];y.onLoad&&y.onLoad(d)}}).catch(d=>{const p=pr[e];if(p===void 0)throw this.manager.itemError(e),d;delete pr[e];for(let m=0,v=p.length;m<v;m++){const y=p[m];y.onError&&y.onError(d)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Ca=new WeakMap;class ww extends no{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const o=this,l=yr.get(`image:${e}`);if(l!==void 0){if(l.complete===!0)o.manager.itemStart(e),setTimeout(function(){t&&t(l),o.manager.itemEnd(e)},0);else{let m=Ca.get(l);m===void 0&&(m=[],Ca.set(l,m)),m.push({onLoad:t,onError:s})}return l}const c=cl("img");function f(){p(),t&&t(this);const m=Ca.get(this)||[];for(let v=0;v<m.length;v++){const y=m[v];y.onLoad&&y.onLoad(this)}Ca.delete(this),o.manager.itemEnd(e)}function d(m){p(),s&&s(m),yr.remove(`image:${e}`);const v=Ca.get(this)||[];for(let y=0;y<v.length;y++){const E=v[y];E.onError&&E.onError(m)}Ca.delete(this),o.manager.itemError(e),o.manager.itemEnd(e)}function p(){c.removeEventListener("load",f,!1),c.removeEventListener("error",d,!1)}return c.addEventListener("load",f,!1),c.addEventListener("error",d,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(c.crossOrigin=this.crossOrigin),yr.add(`image:${e}`,c),o.manager.itemStart(e),c.src=e,c}}class bw extends no{constructor(e){super(e)}load(e,t,n,s){const o=new _n,l=new ww(this.manager);return l.setCrossOrigin(this.crossOrigin),l.setPath(this.path),l.load(e,function(c){o.image=c,o.needsUpdate=!0,t!==void 0&&t(o)},n,s),o}}class Dc extends en{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new mt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const Zd=new _t,z_=new j,H_=new j;class Zp{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new dt(512,512),this.mapType=Xi,this.map=null,this.mapPass=null,this.matrix=new _t,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Xp,this._frameExtents=new dt(1,1),this._viewportCount=1,this._viewports=[new Lt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;z_.setFromMatrixPosition(e.matrixWorld),t.position.copy(z_),H_.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(H_),t.updateMatrixWorld(),Zd.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Zd,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Zd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Aw extends Zp{constructor(){super(new Bn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=Xa*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,o=e.distance||t.far;(n!==t.fov||s!==t.aspect||o!==t.far)&&(t.fov=n,t.aspect=s,t.far=o,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Rw extends Dc{constructor(e,t,n=0,s=Math.PI/3,o=0,l=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(en.DEFAULT_UP),this.updateMatrix(),this.target=new en,this.distance=n,this.angle=s,this.penumbra=o,this.decay=l,this.map=null,this.shadow=new Aw}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const V_=new _t,$o=new j,Jd=new j;class Cw extends Zp{constructor(){super(new Bn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new dt(4,2),this._viewportCount=6,this._viewports=[new Lt(2,1,1,1),new Lt(0,1,1,1),new Lt(3,1,1,1),new Lt(1,1,1,1),new Lt(3,0,1,1),new Lt(1,0,1,1)],this._cubeDirections=[new j(1,0,0),new j(-1,0,0),new j(0,0,1),new j(0,0,-1),new j(0,1,0),new j(0,-1,0)],this._cubeUps=[new j(0,1,0),new j(0,1,0),new j(0,1,0),new j(0,1,0),new j(0,0,1),new j(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,s=this.matrix,o=e.distance||n.far;o!==n.far&&(n.far=o,n.updateProjectionMatrix()),$o.setFromMatrixPosition(e.matrixWorld),n.position.copy($o),Jd.copy(n.position),Jd.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Jd),n.updateMatrixWorld(),s.makeTranslation(-$o.x,-$o.y,-$o.z),V_.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(V_,n.coordinateSystem,n.reversedDepth)}}class Qy extends Dc{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Cw}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Jp extends Vy{constructor(e=-1,t=1,n=1,s=-1,o=.1,l=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=o,this.far=l,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,o,l){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=o,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let o=n-e,l=n+e,c=s+t,f=s-t;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=d*this.view.offsetX,l=o+d*this.view.width,c-=p*this.view.offsetY,f=c-p*this.view.height}this.projectionMatrix.makeOrthographic(o,l,c,f,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Pw extends Zp{constructor(){super(new Jp(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ex extends Dc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(en.DEFAULT_UP),this.updateMatrix(),this.target=new en,this.shadow=new Pw}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Lw extends Dc{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class el{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const Qd=new WeakMap;class Iw extends no{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const o=this,l=yr.get(`image-bitmap:${e}`);if(l!==void 0){if(o.manager.itemStart(e),l.then){l.then(d=>{if(Qd.has(l)===!0)s&&s(Qd.get(l)),o.manager.itemError(e),o.manager.itemEnd(e);else return t&&t(d),o.manager.itemEnd(e),d});return}return setTimeout(function(){t&&t(l),o.manager.itemEnd(e)},0),l}const c={};c.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",c.headers=this.requestHeader,c.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const f=fetch(e,c).then(function(d){return d.blob()}).then(function(d){return createImageBitmap(d,Object.assign(o.options,{colorSpaceConversion:"none"}))}).then(function(d){return yr.add(`image-bitmap:${e}`,d),t&&t(d),o.manager.itemEnd(e),d}).catch(function(d){s&&s(d),Qd.set(f,d),yr.remove(`image-bitmap:${e}`),o.manager.itemError(e),o.manager.itemEnd(e)});yr.add(`image-bitmap:${e}`,f),o.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class Dw extends Bn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Qp="\\[\\]\\.:\\/",Nw=new RegExp("["+Qp+"]","g"),em="[^"+Qp+"]",Uw="[^"+Qp.replace("\\.","")+"]",Fw=/((?:WC+[\/:])*)/.source.replace("WC",em),Ow=/(WCOD+)?/.source.replace("WCOD",Uw),kw=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",em),Bw=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",em),zw=new RegExp("^"+Fw+Ow+kw+Bw+"$"),Hw=["material","materials","bones","map"];class Vw{constructor(e,t,n){const s=n||Ft.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,o=n.length;s!==o;++s)n[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Ft{constructor(e,t,n){this.path=t,this.parsedPath=n||Ft.parseTrackName(t),this.node=Ft.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Ft.Composite(e,t,n):new Ft(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Nw,"")}static parseTrackName(e){const t=zw.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const o=n.nodeName.substring(s+1);Hw.indexOf(o)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=o)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(o){for(let l=0;l<o.length;l++){const c=o[l];if(c.name===t||c.uuid===t)return c;const f=n(c.children);if(f)return f}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let s=0,o=n.length;s!==o;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let s=0,o=n.length;s!==o;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,o=n.length;s!==o;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,o=n.length;s!==o;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,s=t.propertyName;let o=t.propertyIndex;if(e||(e=Ft.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let d=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let p=0;p<e.length;p++)if(e[p].name===d){d=p;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(d!==void 0){if(e[d]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[d]}}const l=e[s];if(l===void 0){const d=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+d+"."+s+" but it wasn't found.",e);return}let c=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?c=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(c=this.Versioning.MatrixWorldNeedsUpdate);let f=this.BindingType.Direct;if(o!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[o]!==void 0&&(o=e.morphTargetDictionary[o])}f=this.BindingType.ArrayElement,this.resolvedProperty=l,this.propertyIndex=o}else l.fromArray!==void 0&&l.toArray!==void 0?(f=this.BindingType.HasFromToArray,this.resolvedProperty=l):Array.isArray(l)?(f=this.BindingType.EntireArray,this.resolvedProperty=l):this.propertyName=s;this.getValue=this.GetterByBindingType[f],this.setValue=this.SetterByBindingTypeAndVersioning[f][c]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Ft.Composite=Vw;Ft.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ft.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ft.prototype.GetterByBindingType=[Ft.prototype._getValue_direct,Ft.prototype._getValue_array,Ft.prototype._getValue_arrayElement,Ft.prototype._getValue_toArray];Ft.prototype.SetterByBindingTypeAndVersioning=[[Ft.prototype._setValue_direct,Ft.prototype._setValue_direct_setNeedsUpdate,Ft.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ft.prototype._setValue_array,Ft.prototype._setValue_array_setNeedsUpdate,Ft.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ft.prototype._setValue_arrayElement,Ft.prototype._setValue_arrayElement_setNeedsUpdate,Ft.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ft.prototype._setValue_fromArray,Ft.prototype._setValue_fromArray_setNeedsUpdate,Ft.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class G_{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=xt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(xt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Gw extends Gs{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function W_(r,e,t,n){const s=Ww(n);switch(t){case Ry:return r*e;case kp:return r*e/s.components*s.byteLength;case Bp:return r*e/s.components*s.byteLength;case Py:return r*e*2/s.components*s.byteLength;case zp:return r*e*2/s.components*s.byteLength;case Cy:return r*e*3/s.components*s.byteLength;case mi:return r*e*4/s.components*s.byteLength;case Hp:return r*e*4/s.components*s.byteLength;case fc:case dc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case hc:case pc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Lh:case Dh:return Math.max(r,16)*Math.max(e,8)/4;case Ph:case Ih:return Math.max(r,8)*Math.max(e,8)/2;case Nh:case Uh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Fh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Oh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case kh:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Bh:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case zh:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Hh:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Vh:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Gh:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Wh:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case jh:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Xh:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case $h:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Yh:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Kh:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case qh:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Zh:case Jh:case Qh:return Math.ceil(r/4)*Math.ceil(e/4)*16;case ep:case tp:return Math.ceil(r/4)*Math.ceil(e/4)*8;case np:case ip:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Ww(r){switch(r){case Xi:case Ty:return{byteLength:1,components:1};case rl:case wy:case gl:return{byteLength:2,components:1};case Fp:case Op:return{byteLength:2,components:4};case Bs:case Up:case Pi:return{byteLength:4,components:1};case by:case Ay:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Np}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Np);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function tx(){let r=null,e=!1,t=null,n=null;function s(o,l){t(o,l),n=r.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(s),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(o){t=o},setContext:function(o){r=o}}}function jw(r){const e=new WeakMap;function t(c,f){const d=c.array,p=c.usage,m=d.byteLength,v=r.createBuffer();r.bindBuffer(f,v),r.bufferData(f,d,p),c.onUploadCallback();let y;if(d instanceof Float32Array)y=r.FLOAT;else if(typeof Float16Array<"u"&&d instanceof Float16Array)y=r.HALF_FLOAT;else if(d instanceof Uint16Array)c.isFloat16BufferAttribute?y=r.HALF_FLOAT:y=r.UNSIGNED_SHORT;else if(d instanceof Int16Array)y=r.SHORT;else if(d instanceof Uint32Array)y=r.UNSIGNED_INT;else if(d instanceof Int32Array)y=r.INT;else if(d instanceof Int8Array)y=r.BYTE;else if(d instanceof Uint8Array)y=r.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)y=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:v,type:y,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version,size:m}}function n(c,f,d){const p=f.array,m=f.updateRanges;if(r.bindBuffer(d,c),m.length===0)r.bufferSubData(d,0,p);else{m.sort((y,E)=>y.start-E.start);let v=0;for(let y=1;y<m.length;y++){const E=m[v],M=m[y];M.start<=E.start+E.count+1?E.count=Math.max(E.count,M.start+M.count-E.start):(++v,m[v]=M)}m.length=v+1;for(let y=0,E=m.length;y<E;y++){const M=m[y];r.bufferSubData(d,M.start*p.BYTES_PER_ELEMENT,p,M.start,M.count)}f.clearUpdateRanges()}f.onUploadCallback()}function s(c){return c.isInterleavedBufferAttribute&&(c=c.data),e.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const f=e.get(c);f&&(r.deleteBuffer(f.buffer),e.delete(c))}function l(c,f){if(c.isInterleavedBufferAttribute&&(c=c.data),c.isGLBufferAttribute){const p=e.get(c);(!p||p.version<c.version)&&e.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}const d=e.get(c);if(d===void 0)e.set(c,t(c,f));else if(d.version<c.version){if(d.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(d.buffer,c,f),d.version=c.version}}return{get:s,remove:o,update:l}}var Xw=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,$w=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Yw=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Kw=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qw=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Zw=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Jw=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Qw=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,eb=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,tb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,nb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ib=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,rb=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,sb=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,ab=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,ob=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,lb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ub=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,cb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,fb=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,db=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,hb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,pb=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,mb=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,gb=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,vb=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,_b=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,yb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,xb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Sb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Eb="gl_FragColor = linearToOutputTexel( gl_FragColor );",Mb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Tb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,wb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,bb=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Ab=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Rb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Cb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Pb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Lb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ib=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Db=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Nb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ub=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Fb=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ob=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,kb=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Bb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,zb=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Hb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Vb=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Gb=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Wb=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,jb=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Xb=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,$b=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Yb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Kb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Jb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Qb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,eA=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,tA=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,nA=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,iA=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,rA=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,sA=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,aA=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,oA=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,lA=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,uA=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,cA=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,fA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hA=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,pA=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,mA=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,gA=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,vA=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,_A=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,yA=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,xA=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,SA=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,EA=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,MA=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,TA=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,wA=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,bA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,AA=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,RA=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,CA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,PA=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,LA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,IA=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,DA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,NA=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,UA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,FA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,OA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,kA=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,BA=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,zA=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,HA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,VA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,GA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,WA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const jA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,XA=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$A=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,YA=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,KA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ZA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,JA=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,QA=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,eR=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,tR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,nR=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,iR=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,rR=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sR=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,aR=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,oR=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,lR=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uR=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,cR=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fR=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,dR=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,hR=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pR=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mR=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,gR=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vR=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_R=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yR=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,xR=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,SR=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ER=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,MR=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,TR=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,vt={alphahash_fragment:Xw,alphahash_pars_fragment:$w,alphamap_fragment:Yw,alphamap_pars_fragment:Kw,alphatest_fragment:qw,alphatest_pars_fragment:Zw,aomap_fragment:Jw,aomap_pars_fragment:Qw,batching_pars_vertex:eb,batching_vertex:tb,begin_vertex:nb,beginnormal_vertex:ib,bsdfs:rb,iridescence_fragment:sb,bumpmap_pars_fragment:ab,clipping_planes_fragment:ob,clipping_planes_pars_fragment:lb,clipping_planes_pars_vertex:ub,clipping_planes_vertex:cb,color_fragment:fb,color_pars_fragment:db,color_pars_vertex:hb,color_vertex:pb,common:mb,cube_uv_reflection_fragment:gb,defaultnormal_vertex:vb,displacementmap_pars_vertex:_b,displacementmap_vertex:yb,emissivemap_fragment:xb,emissivemap_pars_fragment:Sb,colorspace_fragment:Eb,colorspace_pars_fragment:Mb,envmap_fragment:Tb,envmap_common_pars_fragment:wb,envmap_pars_fragment:bb,envmap_pars_vertex:Ab,envmap_physical_pars_fragment:kb,envmap_vertex:Rb,fog_vertex:Cb,fog_pars_vertex:Pb,fog_fragment:Lb,fog_pars_fragment:Ib,gradientmap_pars_fragment:Db,lightmap_pars_fragment:Nb,lights_lambert_fragment:Ub,lights_lambert_pars_fragment:Fb,lights_pars_begin:Ob,lights_toon_fragment:Bb,lights_toon_pars_fragment:zb,lights_phong_fragment:Hb,lights_phong_pars_fragment:Vb,lights_physical_fragment:Gb,lights_physical_pars_fragment:Wb,lights_fragment_begin:jb,lights_fragment_maps:Xb,lights_fragment_end:$b,logdepthbuf_fragment:Yb,logdepthbuf_pars_fragment:Kb,logdepthbuf_pars_vertex:qb,logdepthbuf_vertex:Zb,map_fragment:Jb,map_pars_fragment:Qb,map_particle_fragment:eA,map_particle_pars_fragment:tA,metalnessmap_fragment:nA,metalnessmap_pars_fragment:iA,morphinstance_vertex:rA,morphcolor_vertex:sA,morphnormal_vertex:aA,morphtarget_pars_vertex:oA,morphtarget_vertex:lA,normal_fragment_begin:uA,normal_fragment_maps:cA,normal_pars_fragment:fA,normal_pars_vertex:dA,normal_vertex:hA,normalmap_pars_fragment:pA,clearcoat_normal_fragment_begin:mA,clearcoat_normal_fragment_maps:gA,clearcoat_pars_fragment:vA,iridescence_pars_fragment:_A,opaque_fragment:yA,packing:xA,premultiplied_alpha_fragment:SA,project_vertex:EA,dithering_fragment:MA,dithering_pars_fragment:TA,roughnessmap_fragment:wA,roughnessmap_pars_fragment:bA,shadowmap_pars_fragment:AA,shadowmap_pars_vertex:RA,shadowmap_vertex:CA,shadowmask_pars_fragment:PA,skinbase_vertex:LA,skinning_pars_vertex:IA,skinning_vertex:DA,skinnormal_vertex:NA,specularmap_fragment:UA,specularmap_pars_fragment:FA,tonemapping_fragment:OA,tonemapping_pars_fragment:kA,transmission_fragment:BA,transmission_pars_fragment:zA,uv_pars_fragment:HA,uv_pars_vertex:VA,uv_vertex:GA,worldpos_vertex:WA,background_vert:jA,background_frag:XA,backgroundCube_vert:$A,backgroundCube_frag:YA,cube_vert:KA,cube_frag:qA,depth_vert:ZA,depth_frag:JA,distanceRGBA_vert:QA,distanceRGBA_frag:eR,equirect_vert:tR,equirect_frag:nR,linedashed_vert:iR,linedashed_frag:rR,meshbasic_vert:sR,meshbasic_frag:aR,meshlambert_vert:oR,meshlambert_frag:lR,meshmatcap_vert:uR,meshmatcap_frag:cR,meshnormal_vert:fR,meshnormal_frag:dR,meshphong_vert:hR,meshphong_frag:pR,meshphysical_vert:mR,meshphysical_frag:gR,meshtoon_vert:vR,meshtoon_frag:_R,points_vert:yR,points_frag:xR,shadow_vert:SR,shadow_frag:ER,sprite_vert:MR,sprite_frag:TR},Pe={common:{diffuse:{value:new mt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new gt},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new gt}},envmap:{envMap:{value:null},envMapRotation:{value:new gt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new gt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new gt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new gt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new gt},normalScale:{value:new dt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new gt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new gt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new gt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new gt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new mt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new mt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0},uvTransform:{value:new gt}},sprite:{diffuse:{value:new mt(16777215)},opacity:{value:1},center:{value:new dt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new gt},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0}}},zi={basic:{uniforms:kn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.fog]),vertexShader:vt.meshbasic_vert,fragmentShader:vt.meshbasic_frag},lambert:{uniforms:kn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new mt(0)}}]),vertexShader:vt.meshlambert_vert,fragmentShader:vt.meshlambert_frag},phong:{uniforms:kn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new mt(0)},specular:{value:new mt(1118481)},shininess:{value:30}}]),vertexShader:vt.meshphong_vert,fragmentShader:vt.meshphong_frag},standard:{uniforms:kn([Pe.common,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.roughnessmap,Pe.metalnessmap,Pe.fog,Pe.lights,{emissive:{value:new mt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:vt.meshphysical_vert,fragmentShader:vt.meshphysical_frag},toon:{uniforms:kn([Pe.common,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.gradientmap,Pe.fog,Pe.lights,{emissive:{value:new mt(0)}}]),vertexShader:vt.meshtoon_vert,fragmentShader:vt.meshtoon_frag},matcap:{uniforms:kn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,{matcap:{value:null}}]),vertexShader:vt.meshmatcap_vert,fragmentShader:vt.meshmatcap_frag},points:{uniforms:kn([Pe.points,Pe.fog]),vertexShader:vt.points_vert,fragmentShader:vt.points_frag},dashed:{uniforms:kn([Pe.common,Pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:vt.linedashed_vert,fragmentShader:vt.linedashed_frag},depth:{uniforms:kn([Pe.common,Pe.displacementmap]),vertexShader:vt.depth_vert,fragmentShader:vt.depth_frag},normal:{uniforms:kn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,{opacity:{value:1}}]),vertexShader:vt.meshnormal_vert,fragmentShader:vt.meshnormal_frag},sprite:{uniforms:kn([Pe.sprite,Pe.fog]),vertexShader:vt.sprite_vert,fragmentShader:vt.sprite_frag},background:{uniforms:{uvTransform:{value:new gt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:vt.background_vert,fragmentShader:vt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new gt}},vertexShader:vt.backgroundCube_vert,fragmentShader:vt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:vt.cube_vert,fragmentShader:vt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:vt.equirect_vert,fragmentShader:vt.equirect_frag},distanceRGBA:{uniforms:kn([Pe.common,Pe.displacementmap,{referencePosition:{value:new j},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:vt.distanceRGBA_vert,fragmentShader:vt.distanceRGBA_frag},shadow:{uniforms:kn([Pe.lights,Pe.fog,{color:{value:new mt(0)},opacity:{value:1}}]),vertexShader:vt.shadow_vert,fragmentShader:vt.shadow_frag}};zi.physical={uniforms:kn([zi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new gt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new gt},clearcoatNormalScale:{value:new dt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new gt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new gt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new gt},sheen:{value:0},sheenColor:{value:new mt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new gt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new gt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new gt},transmissionSamplerSize:{value:new dt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new gt},attenuationDistance:{value:0},attenuationColor:{value:new mt(0)},specularColor:{value:new mt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new gt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new gt},anisotropyVector:{value:new dt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new gt}}]),vertexShader:vt.meshphysical_vert,fragmentShader:vt.meshphysical_frag};const tc={r:0,b:0,g:0},Ps=new Yi,wR=new _t;function bR(r,e,t,n,s,o,l){const c=new mt(0);let f=o===!0?0:1,d,p,m=null,v=0,y=null;function E(C){let b=C.isScene===!0?C.background:null;return b&&b.isTexture&&(b=(C.backgroundBlurriness>0?t:e).get(b)),b}function M(C){let b=!1;const I=E(C);I===null?_(c,f):I&&I.isColor&&(_(I,1),b=!0);const F=r.xr.getEnvironmentBlendMode();F==="additive"?n.buffers.color.setClear(0,0,0,1,l):F==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,l),(r.autoClear||b)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function S(C,b){const I=E(b);I&&(I.isCubeTexture||I.mapping===Lc)?(p===void 0&&(p=new qn(new _l(1,1,1),new Tr({name:"BackgroundCubeMaterial",uniforms:$a(zi.backgroundCube.uniforms),vertexShader:zi.backgroundCube.vertexShader,fragmentShader:zi.backgroundCube.fragmentShader,side:zn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(F,U,X){this.matrixWorld.copyPosition(X.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(p)),Ps.copy(b.backgroundRotation),Ps.x*=-1,Ps.y*=-1,Ps.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(Ps.y*=-1,Ps.z*=-1),p.material.uniforms.envMap.value=I,p.material.uniforms.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,p.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(wR.makeRotationFromEuler(Ps)),p.material.toneMapped=Rt.getTransfer(I.colorSpace)!==Bt,(m!==I||v!==I.version||y!==r.toneMapping)&&(p.material.needsUpdate=!0,m=I,v=I.version,y=r.toneMapping),p.layers.enableAll(),C.unshift(p,p.geometry,p.material,0,0,null)):I&&I.isTexture&&(d===void 0&&(d=new qn(new Ic(2,2),new Tr({name:"BackgroundMaterial",uniforms:$a(zi.background.uniforms),vertexShader:zi.background.vertexShader,fragmentShader:zi.background.fragmentShader,side:Mr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(d)),d.material.uniforms.t2D.value=I,d.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,d.material.toneMapped=Rt.getTransfer(I.colorSpace)!==Bt,I.matrixAutoUpdate===!0&&I.updateMatrix(),d.material.uniforms.uvTransform.value.copy(I.matrix),(m!==I||v!==I.version||y!==r.toneMapping)&&(d.material.needsUpdate=!0,m=I,v=I.version,y=r.toneMapping),d.layers.enableAll(),C.unshift(d,d.geometry,d.material,0,0,null))}function _(C,b){C.getRGB(tc,Hy(r)),n.buffers.color.setClear(tc.r,tc.g,tc.b,b,l)}function R(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0)}return{getClearColor:function(){return c},setClearColor:function(C,b=1){c.set(C),f=b,_(c,f)},getClearAlpha:function(){return f},setClearAlpha:function(C){f=C,_(c,f)},render:M,addToRenderList:S,dispose:R}}function AR(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},s=v(null);let o=s,l=!1;function c(L,z,Z,ie,fe){let se=!1;const oe=m(ie,Z,z);o!==oe&&(o=oe,d(o.object)),se=y(L,ie,Z,fe),se&&E(L,ie,Z,fe),fe!==null&&e.update(fe,r.ELEMENT_ARRAY_BUFFER),(se||l)&&(l=!1,b(L,z,Z,ie),fe!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(fe).buffer))}function f(){return r.createVertexArray()}function d(L){return r.bindVertexArray(L)}function p(L){return r.deleteVertexArray(L)}function m(L,z,Z){const ie=Z.wireframe===!0;let fe=n[L.id];fe===void 0&&(fe={},n[L.id]=fe);let se=fe[z.id];se===void 0&&(se={},fe[z.id]=se);let oe=se[ie];return oe===void 0&&(oe=v(f()),se[ie]=oe),oe}function v(L){const z=[],Z=[],ie=[];for(let fe=0;fe<t;fe++)z[fe]=0,Z[fe]=0,ie[fe]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:Z,attributeDivisors:ie,object:L,attributes:{},index:null}}function y(L,z,Z,ie){const fe=o.attributes,se=z.attributes;let oe=0;const de=Z.getAttributes();for(const H in de)if(de[H].location>=0){const re=fe[H];let O=se[H];if(O===void 0&&(H==="instanceMatrix"&&L.instanceMatrix&&(O=L.instanceMatrix),H==="instanceColor"&&L.instanceColor&&(O=L.instanceColor)),re===void 0||re.attribute!==O||O&&re.data!==O.data)return!0;oe++}return o.attributesNum!==oe||o.index!==ie}function E(L,z,Z,ie){const fe={},se=z.attributes;let oe=0;const de=Z.getAttributes();for(const H in de)if(de[H].location>=0){let re=se[H];re===void 0&&(H==="instanceMatrix"&&L.instanceMatrix&&(re=L.instanceMatrix),H==="instanceColor"&&L.instanceColor&&(re=L.instanceColor));const O={};O.attribute=re,re&&re.data&&(O.data=re.data),fe[H]=O,oe++}o.attributes=fe,o.attributesNum=oe,o.index=ie}function M(){const L=o.newAttributes;for(let z=0,Z=L.length;z<Z;z++)L[z]=0}function S(L){_(L,0)}function _(L,z){const Z=o.newAttributes,ie=o.enabledAttributes,fe=o.attributeDivisors;Z[L]=1,ie[L]===0&&(r.enableVertexAttribArray(L),ie[L]=1),fe[L]!==z&&(r.vertexAttribDivisor(L,z),fe[L]=z)}function R(){const L=o.newAttributes,z=o.enabledAttributes;for(let Z=0,ie=z.length;Z<ie;Z++)z[Z]!==L[Z]&&(r.disableVertexAttribArray(Z),z[Z]=0)}function C(L,z,Z,ie,fe,se,oe){oe===!0?r.vertexAttribIPointer(L,z,Z,fe,se):r.vertexAttribPointer(L,z,Z,ie,fe,se)}function b(L,z,Z,ie){M();const fe=ie.attributes,se=Z.getAttributes(),oe=z.defaultAttributeValues;for(const de in se){const H=se[de];if(H.location>=0){let le=fe[de];if(le===void 0&&(de==="instanceMatrix"&&L.instanceMatrix&&(le=L.instanceMatrix),de==="instanceColor"&&L.instanceColor&&(le=L.instanceColor)),le!==void 0){const re=le.normalized,O=le.itemSize,ne=e.get(le);if(ne===void 0)continue;const Oe=ne.buffer,$e=ne.type,Ve=ne.bytesPerElement,Q=$e===r.INT||$e===r.UNSIGNED_INT||le.gpuType===Up;if(le.isInterleavedBufferAttribute){const ue=le.data,Ee=ue.stride,Ie=le.offset;if(ue.isInstancedInterleavedBuffer){for(let Fe=0;Fe<H.locationSize;Fe++)_(H.location+Fe,ue.meshPerAttribute);L.isInstancedMesh!==!0&&ie._maxInstanceCount===void 0&&(ie._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let Fe=0;Fe<H.locationSize;Fe++)S(H.location+Fe);r.bindBuffer(r.ARRAY_BUFFER,Oe);for(let Fe=0;Fe<H.locationSize;Fe++)C(H.location+Fe,O/H.locationSize,$e,re,Ee*Ve,(Ie+O/H.locationSize*Fe)*Ve,Q)}else{if(le.isInstancedBufferAttribute){for(let ue=0;ue<H.locationSize;ue++)_(H.location+ue,le.meshPerAttribute);L.isInstancedMesh!==!0&&ie._maxInstanceCount===void 0&&(ie._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let ue=0;ue<H.locationSize;ue++)S(H.location+ue);r.bindBuffer(r.ARRAY_BUFFER,Oe);for(let ue=0;ue<H.locationSize;ue++)C(H.location+ue,O/H.locationSize,$e,re,O*Ve,O/H.locationSize*ue*Ve,Q)}}else if(oe!==void 0){const re=oe[de];if(re!==void 0)switch(re.length){case 2:r.vertexAttrib2fv(H.location,re);break;case 3:r.vertexAttrib3fv(H.location,re);break;case 4:r.vertexAttrib4fv(H.location,re);break;default:r.vertexAttrib1fv(H.location,re)}}}}R()}function I(){X();for(const L in n){const z=n[L];for(const Z in z){const ie=z[Z];for(const fe in ie)p(ie[fe].object),delete ie[fe];delete z[Z]}delete n[L]}}function F(L){if(n[L.id]===void 0)return;const z=n[L.id];for(const Z in z){const ie=z[Z];for(const fe in ie)p(ie[fe].object),delete ie[fe];delete z[Z]}delete n[L.id]}function U(L){for(const z in n){const Z=n[z];if(Z[L.id]===void 0)continue;const ie=Z[L.id];for(const fe in ie)p(ie[fe].object),delete ie[fe];delete Z[L.id]}}function X(){P(),l=!0,o!==s&&(o=s,d(o.object))}function P(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:c,reset:X,resetDefaultState:P,dispose:I,releaseStatesOfGeometry:F,releaseStatesOfProgram:U,initAttributes:M,enableAttribute:S,disableUnusedAttributes:R}}function RR(r,e,t){let n;function s(d){n=d}function o(d,p){r.drawArrays(n,d,p),t.update(p,n,1)}function l(d,p,m){m!==0&&(r.drawArraysInstanced(n,d,p,m),t.update(p,n,m))}function c(d,p,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,d,0,p,0,m);let y=0;for(let E=0;E<m;E++)y+=p[E];t.update(y,n,1)}function f(d,p,m,v){if(m===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let E=0;E<d.length;E++)l(d[E],p[E],v[E]);else{y.multiDrawArraysInstancedWEBGL(n,d,0,p,0,v,0,m);let E=0;for(let M=0;M<m;M++)E+=p[M]*v[M];t.update(E,n,1)}}this.setMode=s,this.render=o,this.renderInstances=l,this.renderMultiDraw=c,this.renderMultiDrawInstances=f}function CR(r,e,t,n){let s;function o(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const U=e.get("EXT_texture_filter_anisotropic");s=r.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function l(U){return!(U!==mi&&n.convert(U)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function c(U){const X=U===gl&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(U!==Xi&&n.convert(U)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&U!==Pi&&!X)}function f(U){if(U==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";U="mediump"}return U==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=t.precision!==void 0?t.precision:"highp";const p=f(d);p!==d&&(console.warn("THREE.WebGLRenderer:",d,"not supported, using",p,"instead."),d=p);const m=t.logarithmicDepthBuffer===!0,v=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),y=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),E=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=r.getParameter(r.MAX_TEXTURE_SIZE),S=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),_=r.getParameter(r.MAX_VERTEX_ATTRIBS),R=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),C=r.getParameter(r.MAX_VARYING_VECTORS),b=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),I=E>0,F=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:f,textureFormatReadable:l,textureTypeReadable:c,precision:d,logarithmicDepthBuffer:m,reversedDepthBuffer:v,maxTextures:y,maxVertexTextures:E,maxTextureSize:M,maxCubemapSize:S,maxAttributes:_,maxVertexUniforms:R,maxVaryings:C,maxFragmentUniforms:b,vertexTextures:I,maxSamples:F}}function PR(r){const e=this;let t=null,n=0,s=!1,o=!1;const l=new ns,c=new gt,f={value:null,needsUpdate:!1};this.uniform=f,this.numPlanes=0,this.numIntersection=0,this.init=function(m,v){const y=m.length!==0||v||n!==0||s;return s=v,n=m.length,y},this.beginShadows=function(){o=!0,p(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(m,v){t=p(m,v,0)},this.setState=function(m,v,y){const E=m.clippingPlanes,M=m.clipIntersection,S=m.clipShadows,_=r.get(m);if(!s||E===null||E.length===0||o&&!S)o?p(null):d();else{const R=o?0:n,C=R*4;let b=_.clippingState||null;f.value=b,b=p(E,v,C,y);for(let I=0;I!==C;++I)b[I]=t[I];_.clippingState=b,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=R}};function d(){f.value!==t&&(f.value=t,f.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function p(m,v,y,E){const M=m!==null?m.length:0;let S=null;if(M!==0){if(S=f.value,E!==!0||S===null){const _=y+M*4,R=v.matrixWorldInverse;c.getNormalMatrix(R),(S===null||S.length<_)&&(S=new Float32Array(_));for(let C=0,b=y;C!==M;++C,b+=4)l.copy(m[C]).applyMatrix4(R,c),l.normal.toArray(S,b),S[b+3]=l.constant}f.value=S,f.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,S}}function LR(r){let e=new WeakMap;function t(l,c){return c===Rh?l.mapping=Ga:c===Ch&&(l.mapping=Wa),l}function n(l){if(l&&l.isTexture){const c=l.mapping;if(c===Rh||c===Ch)if(e.has(l)){const f=e.get(l).texture;return t(f,l.mapping)}else{const f=l.image;if(f&&f.height>0){const d=new ZT(f.height);return d.fromEquirectangularTexture(r,l),e.set(l,d),l.addEventListener("dispose",s),t(d.texture,l.mapping)}else return null}}return l}function s(l){const c=l.target;c.removeEventListener("dispose",s);const f=e.get(c);f!==void 0&&(e.delete(c),f.dispose())}function o(){e=new WeakMap}return{get:n,dispose:o}}const Ua=4,j_=[.125,.215,.35,.446,.526,.582],Us=20,eh=new Jp,X_=new mt;let th=null,nh=0,ih=0,rh=!1;const Ds=(1+Math.sqrt(5))/2,Pa=1/Ds,$_=[new j(-Ds,Pa,0),new j(Ds,Pa,0),new j(-Pa,0,Ds),new j(Pa,0,Ds),new j(0,Ds,-Pa),new j(0,Ds,Pa),new j(-1,1,-1),new j(1,1,-1),new j(-1,1,1),new j(1,1,1)],IR=new j;class Y_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100,o={}){const{size:l=256,position:c=IR}=o;th=this._renderer.getRenderTarget(),nh=this._renderer.getActiveCubeFace(),ih=this._renderer.getActiveMipmapLevel(),rh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(l);const f=this._allocateTargets();return f.depthBuffer=!0,this._sceneToCubeUV(e,n,s,f,c),t>0&&this._blur(f,0,0,t),this._applyPMREM(f),this._cleanup(f),f}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Z_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=q_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(th,nh,ih),this._renderer.xr.enabled=rh,e.scissorTest=!1,nc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ga||e.mapping===Wa?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),th=this._renderer.getRenderTarget(),nh=this._renderer.getActiveCubeFace(),ih=this._renderer.getActiveMipmapLevel(),rh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:ri,minFilter:ri,generateMipmaps:!1,type:gl,format:mi,colorSpace:Vn,depthBuffer:!1},s=K_(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=K_(e,t,n);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=DR(o)),this._blurMaterial=NR(o,e,t)}return s}_compileMaterial(e){const t=new qn(this._lodPlanes[0],e);this._renderer.compile(t,eh)}_sceneToCubeUV(e,t,n,s,o){const f=new Bn(90,1,t,n),d=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],m=this._renderer,v=m.autoClear,y=m.toneMapping;m.getClearColor(X_),m.toneMapping=as,m.autoClear=!1,m.state.buffers.depth.getReversed()&&(m.setRenderTarget(s),m.clearDepth(),m.setRenderTarget(null));const M=new Fs({name:"PMREM.Background",side:zn,depthWrite:!1,depthTest:!1}),S=new qn(new _l,M);let _=!1;const R=e.background;R?R.isColor&&(M.color.copy(R),e.background=null,_=!0):(M.color.copy(X_),_=!0);for(let C=0;C<6;C++){const b=C%3;b===0?(f.up.set(0,d[C],0),f.position.set(o.x,o.y,o.z),f.lookAt(o.x+p[C],o.y,o.z)):b===1?(f.up.set(0,0,d[C]),f.position.set(o.x,o.y,o.z),f.lookAt(o.x,o.y+p[C],o.z)):(f.up.set(0,d[C],0),f.position.set(o.x,o.y,o.z),f.lookAt(o.x,o.y,o.z+p[C]));const I=this._cubeSize;nc(s,b*I,C>2?I:0,I,I),m.setRenderTarget(s),_&&m.render(S,f),m.render(e,f)}S.geometry.dispose(),S.material.dispose(),m.toneMapping=y,m.autoClear=v,e.background=R}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===Ga||e.mapping===Wa;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Z_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=q_());const o=s?this._cubemapMaterial:this._equirectMaterial,l=new qn(this._lodPlanes[0],o),c=o.uniforms;c.envMap.value=e;const f=this._cubeSize;nc(t,0,0,3*f,2*f),n.setRenderTarget(t),n.render(l,eh)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let o=1;o<s;o++){const l=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),c=$_[(s-o-1)%$_.length];this._blur(e,o-1,o,l,c)}t.autoClear=n}_blur(e,t,n,s,o){const l=this._pingPongRenderTarget;this._halfBlur(e,l,t,n,s,"latitudinal",o),this._halfBlur(l,e,n,n,s,"longitudinal",o)}_halfBlur(e,t,n,s,o,l,c){const f=this._renderer,d=this._blurMaterial;l!=="latitudinal"&&l!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const p=3,m=new qn(this._lodPlanes[s],d),v=d.uniforms,y=this._sizeLods[n]-1,E=isFinite(o)?Math.PI/(2*y):2*Math.PI/(2*Us-1),M=o/E,S=isFinite(o)?1+Math.floor(p*M):Us;S>Us&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${Us}`);const _=[];let R=0;for(let U=0;U<Us;++U){const X=U/M,P=Math.exp(-X*X/2);_.push(P),U===0?R+=P:U<S&&(R+=2*P)}for(let U=0;U<_.length;U++)_[U]=_[U]/R;v.envMap.value=e.texture,v.samples.value=S,v.weights.value=_,v.latitudinal.value=l==="latitudinal",c&&(v.poleAxis.value=c);const{_lodMax:C}=this;v.dTheta.value=E,v.mipInt.value=C-n;const b=this._sizeLods[s],I=3*b*(s>C-Ua?s-C+Ua:0),F=4*(this._cubeSize-b);nc(t,I,F,3*b,2*b),f.setRenderTarget(t),f.render(m,eh)}}function DR(r){const e=[],t=[],n=[];let s=r;const o=r-Ua+1+j_.length;for(let l=0;l<o;l++){const c=Math.pow(2,s);t.push(c);let f=1/c;l>r-Ua?f=j_[l-r+Ua-1]:l===0&&(f=0),n.push(f);const d=1/(c-2),p=-d,m=1+d,v=[p,p,m,p,m,m,p,p,m,m,p,m],y=6,E=6,M=3,S=2,_=1,R=new Float32Array(M*E*y),C=new Float32Array(S*E*y),b=new Float32Array(_*E*y);for(let F=0;F<y;F++){const U=F%3*2/3-1,X=F>2?0:-1,P=[U,X,0,U+2/3,X,0,U+2/3,X+1,0,U,X,0,U+2/3,X+1,0,U,X+1,0];R.set(P,M*E*F),C.set(v,S*E*F);const L=[F,F,F,F,F,F];b.set(L,_*E*F)}const I=new vi;I.setAttribute("position",new In(R,M)),I.setAttribute("uv",new In(C,S)),I.setAttribute("faceIndex",new In(b,_)),e.push(I),s>Ua&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function K_(r,e,t){const n=new zs(r,e,t);return n.texture.mapping=Lc,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function nc(r,e,t,n,s){r.viewport.set(e,t,n,s),r.scissor.set(e,t,n,s)}function NR(r,e,t){const n=new Float32Array(Us),s=new j(0,1,0);return new Tr({name:"SphericalGaussianBlur",defines:{n:Us,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:tm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ss,depthTest:!1,depthWrite:!1})}function q_(){return new Tr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:tm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ss,depthTest:!1,depthWrite:!1})}function Z_(){return new Tr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:tm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ss,depthTest:!1,depthWrite:!1})}function tm(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function UR(r){let e=new WeakMap,t=null;function n(c){if(c&&c.isTexture){const f=c.mapping,d=f===Rh||f===Ch,p=f===Ga||f===Wa;if(d||p){let m=e.get(c);const v=m!==void 0?m.texture.pmremVersion:0;if(c.isRenderTargetTexture&&c.pmremVersion!==v)return t===null&&(t=new Y_(r)),m=d?t.fromEquirectangular(c,m):t.fromCubemap(c,m),m.texture.pmremVersion=c.pmremVersion,e.set(c,m),m.texture;if(m!==void 0)return m.texture;{const y=c.image;return d&&y&&y.height>0||p&&y&&s(y)?(t===null&&(t=new Y_(r)),m=d?t.fromEquirectangular(c):t.fromCubemap(c),m.texture.pmremVersion=c.pmremVersion,e.set(c,m),c.addEventListener("dispose",o),m.texture):null}}}return c}function s(c){let f=0;const d=6;for(let p=0;p<d;p++)c[p]!==void 0&&f++;return f===d}function o(c){const f=c.target;f.removeEventListener("dispose",o);const d=e.get(f);d!==void 0&&(e.delete(f),d.dispose())}function l(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:l}}function FR(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=r.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&fl("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function OR(r,e,t,n){const s={},o=new WeakMap;function l(m){const v=m.target;v.index!==null&&e.remove(v.index);for(const E in v.attributes)e.remove(v.attributes[E]);v.removeEventListener("dispose",l),delete s[v.id];const y=o.get(v);y&&(e.remove(y),o.delete(v)),n.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,t.memory.geometries--}function c(m,v){return s[v.id]===!0||(v.addEventListener("dispose",l),s[v.id]=!0,t.memory.geometries++),v}function f(m){const v=m.attributes;for(const y in v)e.update(v[y],r.ARRAY_BUFFER)}function d(m){const v=[],y=m.index,E=m.attributes.position;let M=0;if(y!==null){const R=y.array;M=y.version;for(let C=0,b=R.length;C<b;C+=3){const I=R[C+0],F=R[C+1],U=R[C+2];v.push(I,F,F,U,U,I)}}else if(E!==void 0){const R=E.array;M=E.version;for(let C=0,b=R.length/3-1;C<b;C+=3){const I=C+0,F=C+1,U=C+2;v.push(I,F,F,U,U,I)}}else return;const S=new(Uy(v)?zy:By)(v,1);S.version=M;const _=o.get(m);_&&e.remove(_),o.set(m,S)}function p(m){const v=o.get(m);if(v){const y=m.index;y!==null&&v.version<y.version&&d(m)}else d(m);return o.get(m)}return{get:c,update:f,getWireframeAttribute:p}}function kR(r,e,t){let n;function s(v){n=v}let o,l;function c(v){o=v.type,l=v.bytesPerElement}function f(v,y){r.drawElements(n,y,o,v*l),t.update(y,n,1)}function d(v,y,E){E!==0&&(r.drawElementsInstanced(n,y,o,v*l,E),t.update(y,n,E))}function p(v,y,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,y,0,o,v,0,E);let S=0;for(let _=0;_<E;_++)S+=y[_];t.update(S,n,1)}function m(v,y,E,M){if(E===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let _=0;_<v.length;_++)d(v[_]/l,y[_],M[_]);else{S.multiDrawElementsInstancedWEBGL(n,y,0,o,v,0,M,0,E);let _=0;for(let R=0;R<E;R++)_+=y[R]*M[R];t.update(_,n,1)}}this.setMode=s,this.setIndex=c,this.render=f,this.renderInstances=d,this.renderMultiDraw=p,this.renderMultiDrawInstances=m}function BR(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,l,c){switch(t.calls++,l){case r.TRIANGLES:t.triangles+=c*(o/3);break;case r.LINES:t.lines+=c*(o/2);break;case r.LINE_STRIP:t.lines+=c*(o-1);break;case r.LINE_LOOP:t.lines+=c*o;break;case r.POINTS:t.points+=c*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",l);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function zR(r,e,t){const n=new WeakMap,s=new Lt;function o(l,c,f){const d=l.morphTargetInfluences,p=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,m=p!==void 0?p.length:0;let v=n.get(c);if(v===void 0||v.count!==m){let L=function(){X.dispose(),n.delete(c),c.removeEventListener("dispose",L)};var y=L;v!==void 0&&v.texture.dispose();const E=c.morphAttributes.position!==void 0,M=c.morphAttributes.normal!==void 0,S=c.morphAttributes.color!==void 0,_=c.morphAttributes.position||[],R=c.morphAttributes.normal||[],C=c.morphAttributes.color||[];let b=0;E===!0&&(b=1),M===!0&&(b=2),S===!0&&(b=3);let I=c.attributes.position.count*b,F=1;I>e.maxTextureSize&&(F=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const U=new Float32Array(I*F*4*m),X=new Fy(U,I,F,m);X.type=Pi,X.needsUpdate=!0;const P=b*4;for(let z=0;z<m;z++){const Z=_[z],ie=R[z],fe=C[z],se=I*F*4*z;for(let oe=0;oe<Z.count;oe++){const de=oe*P;E===!0&&(s.fromBufferAttribute(Z,oe),U[se+de+0]=s.x,U[se+de+1]=s.y,U[se+de+2]=s.z,U[se+de+3]=0),M===!0&&(s.fromBufferAttribute(ie,oe),U[se+de+4]=s.x,U[se+de+5]=s.y,U[se+de+6]=s.z,U[se+de+7]=0),S===!0&&(s.fromBufferAttribute(fe,oe),U[se+de+8]=s.x,U[se+de+9]=s.y,U[se+de+10]=s.z,U[se+de+11]=fe.itemSize===4?s.w:1)}}v={count:m,texture:X,size:new dt(I,F)},n.set(c,v),c.addEventListener("dispose",L)}if(l.isInstancedMesh===!0&&l.morphTexture!==null)f.getUniforms().setValue(r,"morphTexture",l.morphTexture,t);else{let E=0;for(let S=0;S<d.length;S++)E+=d[S];const M=c.morphTargetsRelative?1:1-E;f.getUniforms().setValue(r,"morphTargetBaseInfluence",M),f.getUniforms().setValue(r,"morphTargetInfluences",d)}f.getUniforms().setValue(r,"morphTargetsTexture",v.texture,t),f.getUniforms().setValue(r,"morphTargetsTextureSize",v.size)}return{update:o}}function HR(r,e,t,n){let s=new WeakMap;function o(f){const d=n.render.frame,p=f.geometry,m=e.get(f,p);if(s.get(m)!==d&&(e.update(m),s.set(m,d)),f.isInstancedMesh&&(f.hasEventListener("dispose",c)===!1&&f.addEventListener("dispose",c),s.get(f)!==d&&(t.update(f.instanceMatrix,r.ARRAY_BUFFER),f.instanceColor!==null&&t.update(f.instanceColor,r.ARRAY_BUFFER),s.set(f,d))),f.isSkinnedMesh){const v=f.skeleton;s.get(v)!==d&&(v.update(),s.set(v,d))}return m}function l(){s=new WeakMap}function c(f){const d=f.target;d.removeEventListener("dispose",c),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:o,dispose:l}}const nx=new _n,J_=new Yy(1,1),ix=new Fy,rx=new NT,sx=new Gy,Q_=[],e0=[],t0=new Float32Array(16),n0=new Float32Array(9),i0=new Float32Array(4);function io(r,e,t){const n=r[0];if(n<=0||n>0)return r;const s=e*t;let o=Q_[s];if(o===void 0&&(o=new Float32Array(s),Q_[s]=o),e!==0){n.toArray(o,0);for(let l=1,c=0;l!==e;++l)c+=t,r[l].toArray(o,c)}return o}function dn(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function hn(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Nc(r,e){let t=e0[e];t===void 0&&(t=new Int32Array(e),e0[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function VR(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function GR(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dn(t,e))return;r.uniform2fv(this.addr,e),hn(t,e)}}function WR(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(dn(t,e))return;r.uniform3fv(this.addr,e),hn(t,e)}}function jR(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dn(t,e))return;r.uniform4fv(this.addr,e),hn(t,e)}}function XR(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(dn(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),hn(t,e)}else{if(dn(t,n))return;i0.set(n),r.uniformMatrix2fv(this.addr,!1,i0),hn(t,n)}}function $R(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(dn(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),hn(t,e)}else{if(dn(t,n))return;n0.set(n),r.uniformMatrix3fv(this.addr,!1,n0),hn(t,n)}}function YR(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(dn(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),hn(t,e)}else{if(dn(t,n))return;t0.set(n),r.uniformMatrix4fv(this.addr,!1,t0),hn(t,n)}}function KR(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function qR(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dn(t,e))return;r.uniform2iv(this.addr,e),hn(t,e)}}function ZR(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dn(t,e))return;r.uniform3iv(this.addr,e),hn(t,e)}}function JR(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dn(t,e))return;r.uniform4iv(this.addr,e),hn(t,e)}}function QR(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function eC(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dn(t,e))return;r.uniform2uiv(this.addr,e),hn(t,e)}}function tC(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dn(t,e))return;r.uniform3uiv(this.addr,e),hn(t,e)}}function nC(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dn(t,e))return;r.uniform4uiv(this.addr,e),hn(t,e)}}function iC(r,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(r.uniform1i(this.addr,s),n[0]=s);let o;this.type===r.SAMPLER_2D_SHADOW?(J_.compareFunction=Dy,o=J_):o=nx,t.setTexture2D(e||o,s)}function rC(r,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(r.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||rx,s)}function sC(r,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(r.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||sx,s)}function aC(r,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(r.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||ix,s)}function oC(r){switch(r){case 5126:return VR;case 35664:return GR;case 35665:return WR;case 35666:return jR;case 35674:return XR;case 35675:return $R;case 35676:return YR;case 5124:case 35670:return KR;case 35667:case 35671:return qR;case 35668:case 35672:return ZR;case 35669:case 35673:return JR;case 5125:return QR;case 36294:return eC;case 36295:return tC;case 36296:return nC;case 35678:case 36198:case 36298:case 36306:case 35682:return iC;case 35679:case 36299:case 36307:return rC;case 35680:case 36300:case 36308:case 36293:return sC;case 36289:case 36303:case 36311:case 36292:return aC}}function lC(r,e){r.uniform1fv(this.addr,e)}function uC(r,e){const t=io(e,this.size,2);r.uniform2fv(this.addr,t)}function cC(r,e){const t=io(e,this.size,3);r.uniform3fv(this.addr,t)}function fC(r,e){const t=io(e,this.size,4);r.uniform4fv(this.addr,t)}function dC(r,e){const t=io(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function hC(r,e){const t=io(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function pC(r,e){const t=io(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function mC(r,e){r.uniform1iv(this.addr,e)}function gC(r,e){r.uniform2iv(this.addr,e)}function vC(r,e){r.uniform3iv(this.addr,e)}function _C(r,e){r.uniform4iv(this.addr,e)}function yC(r,e){r.uniform1uiv(this.addr,e)}function xC(r,e){r.uniform2uiv(this.addr,e)}function SC(r,e){r.uniform3uiv(this.addr,e)}function EC(r,e){r.uniform4uiv(this.addr,e)}function MC(r,e,t){const n=this.cache,s=e.length,o=Nc(t,s);dn(n,o)||(r.uniform1iv(this.addr,o),hn(n,o));for(let l=0;l!==s;++l)t.setTexture2D(e[l]||nx,o[l])}function TC(r,e,t){const n=this.cache,s=e.length,o=Nc(t,s);dn(n,o)||(r.uniform1iv(this.addr,o),hn(n,o));for(let l=0;l!==s;++l)t.setTexture3D(e[l]||rx,o[l])}function wC(r,e,t){const n=this.cache,s=e.length,o=Nc(t,s);dn(n,o)||(r.uniform1iv(this.addr,o),hn(n,o));for(let l=0;l!==s;++l)t.setTextureCube(e[l]||sx,o[l])}function bC(r,e,t){const n=this.cache,s=e.length,o=Nc(t,s);dn(n,o)||(r.uniform1iv(this.addr,o),hn(n,o));for(let l=0;l!==s;++l)t.setTexture2DArray(e[l]||ix,o[l])}function AC(r){switch(r){case 5126:return lC;case 35664:return uC;case 35665:return cC;case 35666:return fC;case 35674:return dC;case 35675:return hC;case 35676:return pC;case 5124:case 35670:return mC;case 35667:case 35671:return gC;case 35668:case 35672:return vC;case 35669:case 35673:return _C;case 5125:return yC;case 36294:return xC;case 36295:return SC;case 36296:return EC;case 35678:case 36198:case 36298:case 36306:case 35682:return MC;case 35679:case 36299:case 36307:return TC;case 35680:case 36300:case 36308:case 36293:return wC;case 36289:case 36303:case 36311:case 36292:return bC}}class RC{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=oC(t.type)}}class CC{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=AC(t.type)}}class PC{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let o=0,l=s.length;o!==l;++o){const c=s[o];c.setValue(e,t[c.id],n)}}}const sh=/(\w+)(\])?(\[|\.)?/g;function r0(r,e){r.seq.push(e),r.map[e.id]=e}function LC(r,e,t){const n=r.name,s=n.length;for(sh.lastIndex=0;;){const o=sh.exec(n),l=sh.lastIndex;let c=o[1];const f=o[2]==="]",d=o[3];if(f&&(c=c|0),d===void 0||d==="["&&l+2===s){r0(t,d===void 0?new RC(c,r,e):new CC(c,r,e));break}else{let m=t.map[c];m===void 0&&(m=new PC(c),r0(t,m)),t=m}}}class mc{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const o=e.getActiveUniform(t,s),l=e.getUniformLocation(t,o.name);LC(o,l,this)}}setValue(e,t,n,s){const o=this.map[t];o!==void 0&&o.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let o=0,l=t.length;o!==l;++o){const c=t[o],f=n[c.id];f.needsUpdate!==!1&&c.setValue(e,f.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,o=e.length;s!==o;++s){const l=e[s];l.id in t&&n.push(l)}return n}}function s0(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const IC=37297;let DC=0;function NC(r,e){const t=r.split(`
`),n=[],s=Math.max(e-6,0),o=Math.min(e+6,t.length);for(let l=s;l<o;l++){const c=l+1;n.push(`${c===e?">":" "} ${c}: ${t[l]}`)}return n.join(`
`)}const a0=new gt;function UC(r){Rt._getMatrix(a0,Rt.workingColorSpace,r);const e=`mat3( ${a0.elements.map(t=>t.toFixed(4))} )`;switch(Rt.getTransfer(r)){case Sc:return[e,"LinearTransferOETF"];case Bt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function o0(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),o=(r.getShaderInfoLog(e)||"").trim();if(n&&o==="")return"";const l=/ERROR: 0:(\d+)/.exec(o);if(l){const c=parseInt(l[1]);return t.toUpperCase()+`

`+o+`

`+NC(r.getShaderSource(e),c)}else return o}function FC(r,e){const t=UC(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function OC(r,e){let t;switch(e){case j1:t="Linear";break;case X1:t="Reinhard";break;case $1:t="Cineon";break;case Y1:t="ACESFilmic";break;case q1:t="AgX";break;case Z1:t="Neutral";break;case K1:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ic=new j;function kC(){Rt.getLuminanceCoefficients(ic);const r=ic.x.toFixed(4),e=ic.y.toFixed(4),t=ic.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function BC(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(qo).join(`
`)}function zC(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function HC(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const o=r.getActiveAttrib(e,s),l=o.name;let c=1;o.type===r.FLOAT_MAT2&&(c=2),o.type===r.FLOAT_MAT3&&(c=3),o.type===r.FLOAT_MAT4&&(c=4),t[l]={type:o.type,location:r.getAttribLocation(e,l),locationSize:c}}return t}function qo(r){return r!==""}function l0(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function u0(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const VC=/^[ \t]*#include +<([\w\d./]+)>/gm;function lp(r){return r.replace(VC,WC)}const GC=new Map;function WC(r,e){let t=vt[e];if(t===void 0){const n=GC.get(e);if(n!==void 0)t=vt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return lp(t)}const jC=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function c0(r){return r.replace(jC,XC)}function XC(r,e,t,n){let s="";for(let o=parseInt(e);o<parseInt(t);o++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return s}function f0(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function $C(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===xy?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===T1?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===vr&&(e="SHADOWMAP_TYPE_VSM"),e}function YC(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Ga:case Wa:e="ENVMAP_TYPE_CUBE";break;case Lc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function KC(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Wa:e="ENVMAP_MODE_REFRACTION";break}return e}function qC(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Sy:e="ENVMAP_BLENDING_MULTIPLY";break;case G1:e="ENVMAP_BLENDING_MIX";break;case W1:e="ENVMAP_BLENDING_ADD";break}return e}function ZC(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function JC(r,e,t,n){const s=r.getContext(),o=t.defines;let l=t.vertexShader,c=t.fragmentShader;const f=$C(t),d=YC(t),p=KC(t),m=qC(t),v=ZC(t),y=BC(t),E=zC(o),M=s.createProgram();let S,_,R=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(qo).join(`
`),S.length>0&&(S+=`
`),_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(qo).join(`
`),_.length>0&&(_+=`
`)):(S=[f0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(qo).join(`
`),_=[f0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.envMap?"#define "+p:"",t.envMap?"#define "+m:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==as?"#define TONE_MAPPING":"",t.toneMapping!==as?vt.tonemapping_pars_fragment:"",t.toneMapping!==as?OC("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",vt.colorspace_pars_fragment,FC("linearToOutputTexel",t.outputColorSpace),kC(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(qo).join(`
`)),l=lp(l),l=l0(l,t),l=u0(l,t),c=lp(c),c=l0(c,t),c=u0(c,t),l=c0(l),c=c0(c),t.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,S=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,_=["#define varying in",t.glslVersion===a_?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===a_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const C=R+S+l,b=R+_+c,I=s0(s,s.VERTEX_SHADER,C),F=s0(s,s.FRAGMENT_SHADER,b);s.attachShader(M,I),s.attachShader(M,F),t.index0AttributeName!==void 0?s.bindAttribLocation(M,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(M,0,"position"),s.linkProgram(M);function U(z){if(r.debug.checkShaderErrors){const Z=s.getProgramInfoLog(M)||"",ie=s.getShaderInfoLog(I)||"",fe=s.getShaderInfoLog(F)||"",se=Z.trim(),oe=ie.trim(),de=fe.trim();let H=!0,le=!0;if(s.getProgramParameter(M,s.LINK_STATUS)===!1)if(H=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(s,M,I,F);else{const re=o0(s,I,"vertex"),O=o0(s,F,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(M,s.VALIDATE_STATUS)+`

Material Name: `+z.name+`
Material Type: `+z.type+`

Program Info Log: `+se+`
`+re+`
`+O)}else se!==""?console.warn("THREE.WebGLProgram: Program Info Log:",se):(oe===""||de==="")&&(le=!1);le&&(z.diagnostics={runnable:H,programLog:se,vertexShader:{log:oe,prefix:S},fragmentShader:{log:de,prefix:_}})}s.deleteShader(I),s.deleteShader(F),X=new mc(s,M),P=HC(s,M)}let X;this.getUniforms=function(){return X===void 0&&U(this),X};let P;this.getAttributes=function(){return P===void 0&&U(this),P};let L=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=s.getProgramParameter(M,IC)),L},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(M),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=DC++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=I,this.fragmentShader=F,this}let QC=0;class e2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),o=this._getShaderStage(n),l=this._getShaderCacheForMaterial(e);return l.has(s)===!1&&(l.add(s),s.usedTimes++),l.has(o)===!1&&(l.add(o),o.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new t2(e),t.set(e,n)),n}}class t2{constructor(e){this.id=QC++,this.code=e,this.usedTimes=0}}function n2(r,e,t,n,s,o,l){const c=new Oy,f=new e2,d=new Set,p=[],m=s.logarithmicDepthBuffer,v=s.vertexTextures;let y=s.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(P){return d.add(P),P===0?"uv":`uv${P}`}function S(P,L,z,Z,ie){const fe=Z.fog,se=ie.geometry,oe=P.isMeshStandardMaterial?Z.environment:null,de=(P.isMeshStandardMaterial?t:e).get(P.envMap||oe),H=de&&de.mapping===Lc?de.image.height:null,le=E[P.type];P.precision!==null&&(y=s.getMaxPrecision(P.precision),y!==P.precision&&console.warn("THREE.WebGLProgram.getParameters:",P.precision,"not supported, using",y,"instead."));const re=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,O=re!==void 0?re.length:0;let ne=0;se.morphAttributes.position!==void 0&&(ne=1),se.morphAttributes.normal!==void 0&&(ne=2),se.morphAttributes.color!==void 0&&(ne=3);let Oe,$e,Ve,Q;if(le){const bt=zi[le];Oe=bt.vertexShader,$e=bt.fragmentShader}else Oe=P.vertexShader,$e=P.fragmentShader,f.update(P),Ve=f.getVertexShaderID(P),Q=f.getFragmentShaderID(P);const ue=r.getRenderTarget(),Ee=r.state.buffers.depth.getReversed(),Ie=ie.isInstancedMesh===!0,Fe=ie.isBatchedMesh===!0,yt=!!P.map,on=!!P.matcap,k=!!de,Ot=!!P.aoMap,ht=!!P.lightMap,st=!!P.bumpMap,Ge=!!P.normalMap,Ht=!!P.displacementMap,We=!!P.emissiveMap,ct=!!P.metalnessMap,jt=!!P.roughnessMap,Xt=P.anisotropy>0,D=P.clearcoat>0,w=P.dispersion>0,K=P.iridescence>0,he=P.sheen>0,ge=P.transmission>0,ae=Xt&&!!P.anisotropyMap,Ze=D&&!!P.clearcoatMap,be=D&&!!P.clearcoatNormalMap,Be=D&&!!P.clearcoatRoughnessMap,Je=K&&!!P.iridescenceMap,Me=K&&!!P.iridescenceThicknessMap,Le=he&&!!P.sheenColorMap,at=he&&!!P.sheenRoughnessMap,Ke=!!P.specularMap,Re=!!P.specularColorMap,pt=!!P.specularIntensityMap,V=ge&&!!P.transmissionMap,xe=ge&&!!P.thicknessMap,Ae=!!P.gradientMap,De=!!P.alphaMap,ye=P.alphaTest>0,pe=!!P.alphaHash,je=!!P.extensions;let ft=as;P.toneMapped&&(ue===null||ue.isXRRenderTarget===!0)&&(ft=r.toneMapping);const Dt={shaderID:le,shaderType:P.type,shaderName:P.name,vertexShader:Oe,fragmentShader:$e,defines:P.defines,customVertexShaderID:Ve,customFragmentShaderID:Q,isRawShaderMaterial:P.isRawShaderMaterial===!0,glslVersion:P.glslVersion,precision:y,batching:Fe,batchingColor:Fe&&ie._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&ie.instanceColor!==null,instancingMorph:Ie&&ie.morphTexture!==null,supportsVertexTextures:v,outputColorSpace:ue===null?r.outputColorSpace:ue.isXRRenderTarget===!0?ue.texture.colorSpace:Vn,alphaToCoverage:!!P.alphaToCoverage,map:yt,matcap:on,envMap:k,envMapMode:k&&de.mapping,envMapCubeUVHeight:H,aoMap:Ot,lightMap:ht,bumpMap:st,normalMap:Ge,displacementMap:v&&Ht,emissiveMap:We,normalMapObjectSpace:Ge&&P.normalMapType===iT,normalMapTangentSpace:Ge&&P.normalMapType===Iy,metalnessMap:ct,roughnessMap:jt,anisotropy:Xt,anisotropyMap:ae,clearcoat:D,clearcoatMap:Ze,clearcoatNormalMap:be,clearcoatRoughnessMap:Be,dispersion:w,iridescence:K,iridescenceMap:Je,iridescenceThicknessMap:Me,sheen:he,sheenColorMap:Le,sheenRoughnessMap:at,specularMap:Ke,specularColorMap:Re,specularIntensityMap:pt,transmission:ge,transmissionMap:V,thicknessMap:xe,gradientMap:Ae,opaque:P.transparent===!1&&P.blending===ka&&P.alphaToCoverage===!1,alphaMap:De,alphaTest:ye,alphaHash:pe,combine:P.combine,mapUv:yt&&M(P.map.channel),aoMapUv:Ot&&M(P.aoMap.channel),lightMapUv:ht&&M(P.lightMap.channel),bumpMapUv:st&&M(P.bumpMap.channel),normalMapUv:Ge&&M(P.normalMap.channel),displacementMapUv:Ht&&M(P.displacementMap.channel),emissiveMapUv:We&&M(P.emissiveMap.channel),metalnessMapUv:ct&&M(P.metalnessMap.channel),roughnessMapUv:jt&&M(P.roughnessMap.channel),anisotropyMapUv:ae&&M(P.anisotropyMap.channel),clearcoatMapUv:Ze&&M(P.clearcoatMap.channel),clearcoatNormalMapUv:be&&M(P.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Be&&M(P.clearcoatRoughnessMap.channel),iridescenceMapUv:Je&&M(P.iridescenceMap.channel),iridescenceThicknessMapUv:Me&&M(P.iridescenceThicknessMap.channel),sheenColorMapUv:Le&&M(P.sheenColorMap.channel),sheenRoughnessMapUv:at&&M(P.sheenRoughnessMap.channel),specularMapUv:Ke&&M(P.specularMap.channel),specularColorMapUv:Re&&M(P.specularColorMap.channel),specularIntensityMapUv:pt&&M(P.specularIntensityMap.channel),transmissionMapUv:V&&M(P.transmissionMap.channel),thicknessMapUv:xe&&M(P.thicknessMap.channel),alphaMapUv:De&&M(P.alphaMap.channel),vertexTangents:!!se.attributes.tangent&&(Ge||Xt),vertexColors:P.vertexColors,vertexAlphas:P.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,pointsUvs:ie.isPoints===!0&&!!se.attributes.uv&&(yt||De),fog:!!fe,useFog:P.fog===!0,fogExp2:!!fe&&fe.isFogExp2,flatShading:P.flatShading===!0&&P.wireframe===!1,sizeAttenuation:P.sizeAttenuation===!0,logarithmicDepthBuffer:m,reversedDepthBuffer:Ee,skinning:ie.isSkinnedMesh===!0,morphTargets:se.morphAttributes.position!==void 0,morphNormals:se.morphAttributes.normal!==void 0,morphColors:se.morphAttributes.color!==void 0,morphTargetsCount:O,morphTextureStride:ne,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numSpotLightMaps:L.spotLightMap.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numSpotLightShadowsWithMaps:L.numSpotLightShadowsWithMaps,numLightProbes:L.numLightProbes,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:P.dithering,shadowMapEnabled:r.shadowMap.enabled&&z.length>0,shadowMapType:r.shadowMap.type,toneMapping:ft,decodeVideoTexture:yt&&P.map.isVideoTexture===!0&&Rt.getTransfer(P.map.colorSpace)===Bt,decodeVideoTextureEmissive:We&&P.emissiveMap.isVideoTexture===!0&&Rt.getTransfer(P.emissiveMap.colorSpace)===Bt,premultipliedAlpha:P.premultipliedAlpha,doubleSided:P.side===Hi,flipSided:P.side===zn,useDepthPacking:P.depthPacking>=0,depthPacking:P.depthPacking||0,index0AttributeName:P.index0AttributeName,extensionClipCullDistance:je&&P.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(je&&P.extensions.multiDraw===!0||Fe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:P.customProgramCacheKey()};return Dt.vertexUv1s=d.has(1),Dt.vertexUv2s=d.has(2),Dt.vertexUv3s=d.has(3),d.clear(),Dt}function _(P){const L=[];if(P.shaderID?L.push(P.shaderID):(L.push(P.customVertexShaderID),L.push(P.customFragmentShaderID)),P.defines!==void 0)for(const z in P.defines)L.push(z),L.push(P.defines[z]);return P.isRawShaderMaterial===!1&&(R(L,P),C(L,P),L.push(r.outputColorSpace)),L.push(P.customProgramCacheKey),L.join()}function R(P,L){P.push(L.precision),P.push(L.outputColorSpace),P.push(L.envMapMode),P.push(L.envMapCubeUVHeight),P.push(L.mapUv),P.push(L.alphaMapUv),P.push(L.lightMapUv),P.push(L.aoMapUv),P.push(L.bumpMapUv),P.push(L.normalMapUv),P.push(L.displacementMapUv),P.push(L.emissiveMapUv),P.push(L.metalnessMapUv),P.push(L.roughnessMapUv),P.push(L.anisotropyMapUv),P.push(L.clearcoatMapUv),P.push(L.clearcoatNormalMapUv),P.push(L.clearcoatRoughnessMapUv),P.push(L.iridescenceMapUv),P.push(L.iridescenceThicknessMapUv),P.push(L.sheenColorMapUv),P.push(L.sheenRoughnessMapUv),P.push(L.specularMapUv),P.push(L.specularColorMapUv),P.push(L.specularIntensityMapUv),P.push(L.transmissionMapUv),P.push(L.thicknessMapUv),P.push(L.combine),P.push(L.fogExp2),P.push(L.sizeAttenuation),P.push(L.morphTargetsCount),P.push(L.morphAttributeCount),P.push(L.numDirLights),P.push(L.numPointLights),P.push(L.numSpotLights),P.push(L.numSpotLightMaps),P.push(L.numHemiLights),P.push(L.numRectAreaLights),P.push(L.numDirLightShadows),P.push(L.numPointLightShadows),P.push(L.numSpotLightShadows),P.push(L.numSpotLightShadowsWithMaps),P.push(L.numLightProbes),P.push(L.shadowMapType),P.push(L.toneMapping),P.push(L.numClippingPlanes),P.push(L.numClipIntersection),P.push(L.depthPacking)}function C(P,L){c.disableAll(),L.supportsVertexTextures&&c.enable(0),L.instancing&&c.enable(1),L.instancingColor&&c.enable(2),L.instancingMorph&&c.enable(3),L.matcap&&c.enable(4),L.envMap&&c.enable(5),L.normalMapObjectSpace&&c.enable(6),L.normalMapTangentSpace&&c.enable(7),L.clearcoat&&c.enable(8),L.iridescence&&c.enable(9),L.alphaTest&&c.enable(10),L.vertexColors&&c.enable(11),L.vertexAlphas&&c.enable(12),L.vertexUv1s&&c.enable(13),L.vertexUv2s&&c.enable(14),L.vertexUv3s&&c.enable(15),L.vertexTangents&&c.enable(16),L.anisotropy&&c.enable(17),L.alphaHash&&c.enable(18),L.batching&&c.enable(19),L.dispersion&&c.enable(20),L.batchingColor&&c.enable(21),L.gradientMap&&c.enable(22),P.push(c.mask),c.disableAll(),L.fog&&c.enable(0),L.useFog&&c.enable(1),L.flatShading&&c.enable(2),L.logarithmicDepthBuffer&&c.enable(3),L.reversedDepthBuffer&&c.enable(4),L.skinning&&c.enable(5),L.morphTargets&&c.enable(6),L.morphNormals&&c.enable(7),L.morphColors&&c.enable(8),L.premultipliedAlpha&&c.enable(9),L.shadowMapEnabled&&c.enable(10),L.doubleSided&&c.enable(11),L.flipSided&&c.enable(12),L.useDepthPacking&&c.enable(13),L.dithering&&c.enable(14),L.transmission&&c.enable(15),L.sheen&&c.enable(16),L.opaque&&c.enable(17),L.pointsUvs&&c.enable(18),L.decodeVideoTexture&&c.enable(19),L.decodeVideoTextureEmissive&&c.enable(20),L.alphaToCoverage&&c.enable(21),P.push(c.mask)}function b(P){const L=E[P.type];let z;if(L){const Z=zi[L];z=$T.clone(Z.uniforms)}else z=P.uniforms;return z}function I(P,L){let z;for(let Z=0,ie=p.length;Z<ie;Z++){const fe=p[Z];if(fe.cacheKey===L){z=fe,++z.usedTimes;break}}return z===void 0&&(z=new JC(r,L,P,o),p.push(z)),z}function F(P){if(--P.usedTimes===0){const L=p.indexOf(P);p[L]=p[p.length-1],p.pop(),P.destroy()}}function U(P){f.remove(P)}function X(){f.dispose()}return{getParameters:S,getProgramCacheKey:_,getUniforms:b,acquireProgram:I,releaseProgram:F,releaseShaderCache:U,programs:p,dispose:X}}function i2(){let r=new WeakMap;function e(l){return r.has(l)}function t(l){let c=r.get(l);return c===void 0&&(c={},r.set(l,c)),c}function n(l){r.delete(l)}function s(l,c,f){r.get(l)[c]=f}function o(){r=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:o}}function r2(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function d0(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function h0(){const r=[];let e=0;const t=[],n=[],s=[];function o(){e=0,t.length=0,n.length=0,s.length=0}function l(m,v,y,E,M,S){let _=r[e];return _===void 0?(_={id:m.id,object:m,geometry:v,material:y,groupOrder:E,renderOrder:m.renderOrder,z:M,group:S},r[e]=_):(_.id=m.id,_.object=m,_.geometry=v,_.material=y,_.groupOrder=E,_.renderOrder=m.renderOrder,_.z=M,_.group=S),e++,_}function c(m,v,y,E,M,S){const _=l(m,v,y,E,M,S);y.transmission>0?n.push(_):y.transparent===!0?s.push(_):t.push(_)}function f(m,v,y,E,M,S){const _=l(m,v,y,E,M,S);y.transmission>0?n.unshift(_):y.transparent===!0?s.unshift(_):t.unshift(_)}function d(m,v){t.length>1&&t.sort(m||r2),n.length>1&&n.sort(v||d0),s.length>1&&s.sort(v||d0)}function p(){for(let m=e,v=r.length;m<v;m++){const y=r[m];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:t,transmissive:n,transparent:s,init:o,push:c,unshift:f,finish:p,sort:d}}function s2(){let r=new WeakMap;function e(n,s){const o=r.get(n);let l;return o===void 0?(l=new h0,r.set(n,[l])):s>=o.length?(l=new h0,o.push(l)):l=o[s],l}function t(){r=new WeakMap}return{get:e,dispose:t}}function a2(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new j,color:new mt};break;case"SpotLight":t={position:new j,direction:new j,color:new mt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new j,color:new mt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new j,skyColor:new mt,groundColor:new mt};break;case"RectAreaLight":t={color:new mt,position:new j,halfWidth:new j,halfHeight:new j};break}return r[e.id]=t,t}}}function o2(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let l2=0;function u2(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function c2(r){const e=new a2,t=o2(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)n.probe.push(new j);const s=new j,o=new _t,l=new _t;function c(d){let p=0,m=0,v=0;for(let P=0;P<9;P++)n.probe[P].set(0,0,0);let y=0,E=0,M=0,S=0,_=0,R=0,C=0,b=0,I=0,F=0,U=0;d.sort(u2);for(let P=0,L=d.length;P<L;P++){const z=d[P],Z=z.color,ie=z.intensity,fe=z.distance,se=z.shadow&&z.shadow.map?z.shadow.map.texture:null;if(z.isAmbientLight)p+=Z.r*ie,m+=Z.g*ie,v+=Z.b*ie;else if(z.isLightProbe){for(let oe=0;oe<9;oe++)n.probe[oe].addScaledVector(z.sh.coefficients[oe],ie);U++}else if(z.isDirectionalLight){const oe=e.get(z);if(oe.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){const de=z.shadow,H=t.get(z);H.shadowIntensity=de.intensity,H.shadowBias=de.bias,H.shadowNormalBias=de.normalBias,H.shadowRadius=de.radius,H.shadowMapSize=de.mapSize,n.directionalShadow[y]=H,n.directionalShadowMap[y]=se,n.directionalShadowMatrix[y]=z.shadow.matrix,R++}n.directional[y]=oe,y++}else if(z.isSpotLight){const oe=e.get(z);oe.position.setFromMatrixPosition(z.matrixWorld),oe.color.copy(Z).multiplyScalar(ie),oe.distance=fe,oe.coneCos=Math.cos(z.angle),oe.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),oe.decay=z.decay,n.spot[M]=oe;const de=z.shadow;if(z.map&&(n.spotLightMap[I]=z.map,I++,de.updateMatrices(z),z.castShadow&&F++),n.spotLightMatrix[M]=de.matrix,z.castShadow){const H=t.get(z);H.shadowIntensity=de.intensity,H.shadowBias=de.bias,H.shadowNormalBias=de.normalBias,H.shadowRadius=de.radius,H.shadowMapSize=de.mapSize,n.spotShadow[M]=H,n.spotShadowMap[M]=se,b++}M++}else if(z.isRectAreaLight){const oe=e.get(z);oe.color.copy(Z).multiplyScalar(ie),oe.halfWidth.set(z.width*.5,0,0),oe.halfHeight.set(0,z.height*.5,0),n.rectArea[S]=oe,S++}else if(z.isPointLight){const oe=e.get(z);if(oe.color.copy(z.color).multiplyScalar(z.intensity),oe.distance=z.distance,oe.decay=z.decay,z.castShadow){const de=z.shadow,H=t.get(z);H.shadowIntensity=de.intensity,H.shadowBias=de.bias,H.shadowNormalBias=de.normalBias,H.shadowRadius=de.radius,H.shadowMapSize=de.mapSize,H.shadowCameraNear=de.camera.near,H.shadowCameraFar=de.camera.far,n.pointShadow[E]=H,n.pointShadowMap[E]=se,n.pointShadowMatrix[E]=z.shadow.matrix,C++}n.point[E]=oe,E++}else if(z.isHemisphereLight){const oe=e.get(z);oe.skyColor.copy(z.color).multiplyScalar(ie),oe.groundColor.copy(z.groundColor).multiplyScalar(ie),n.hemi[_]=oe,_++}}S>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Pe.LTC_FLOAT_1,n.rectAreaLTC2=Pe.LTC_FLOAT_2):(n.rectAreaLTC1=Pe.LTC_HALF_1,n.rectAreaLTC2=Pe.LTC_HALF_2)),n.ambient[0]=p,n.ambient[1]=m,n.ambient[2]=v;const X=n.hash;(X.directionalLength!==y||X.pointLength!==E||X.spotLength!==M||X.rectAreaLength!==S||X.hemiLength!==_||X.numDirectionalShadows!==R||X.numPointShadows!==C||X.numSpotShadows!==b||X.numSpotMaps!==I||X.numLightProbes!==U)&&(n.directional.length=y,n.spot.length=M,n.rectArea.length=S,n.point.length=E,n.hemi.length=_,n.directionalShadow.length=R,n.directionalShadowMap.length=R,n.pointShadow.length=C,n.pointShadowMap.length=C,n.spotShadow.length=b,n.spotShadowMap.length=b,n.directionalShadowMatrix.length=R,n.pointShadowMatrix.length=C,n.spotLightMatrix.length=b+I-F,n.spotLightMap.length=I,n.numSpotLightShadowsWithMaps=F,n.numLightProbes=U,X.directionalLength=y,X.pointLength=E,X.spotLength=M,X.rectAreaLength=S,X.hemiLength=_,X.numDirectionalShadows=R,X.numPointShadows=C,X.numSpotShadows=b,X.numSpotMaps=I,X.numLightProbes=U,n.version=l2++)}function f(d,p){let m=0,v=0,y=0,E=0,M=0;const S=p.matrixWorldInverse;for(let _=0,R=d.length;_<R;_++){const C=d[_];if(C.isDirectionalLight){const b=n.directional[m];b.direction.setFromMatrixPosition(C.matrixWorld),s.setFromMatrixPosition(C.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(S),m++}else if(C.isSpotLight){const b=n.spot[y];b.position.setFromMatrixPosition(C.matrixWorld),b.position.applyMatrix4(S),b.direction.setFromMatrixPosition(C.matrixWorld),s.setFromMatrixPosition(C.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(S),y++}else if(C.isRectAreaLight){const b=n.rectArea[E];b.position.setFromMatrixPosition(C.matrixWorld),b.position.applyMatrix4(S),l.identity(),o.copy(C.matrixWorld),o.premultiply(S),l.extractRotation(o),b.halfWidth.set(C.width*.5,0,0),b.halfHeight.set(0,C.height*.5,0),b.halfWidth.applyMatrix4(l),b.halfHeight.applyMatrix4(l),E++}else if(C.isPointLight){const b=n.point[v];b.position.setFromMatrixPosition(C.matrixWorld),b.position.applyMatrix4(S),v++}else if(C.isHemisphereLight){const b=n.hemi[M];b.direction.setFromMatrixPosition(C.matrixWorld),b.direction.transformDirection(S),M++}}}return{setup:c,setupView:f,state:n}}function p0(r){const e=new c2(r),t=[],n=[];function s(p){d.camera=p,t.length=0,n.length=0}function o(p){t.push(p)}function l(p){n.push(p)}function c(){e.setup(t)}function f(p){e.setupView(t,p)}const d={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:d,setupLights:c,setupLightsView:f,pushLight:o,pushShadow:l}}function f2(r){let e=new WeakMap;function t(s,o=0){const l=e.get(s);let c;return l===void 0?(c=new p0(r),e.set(s,[c])):o>=l.length?(c=new p0(r),l.push(c)):c=l[o],c}function n(){e=new WeakMap}return{get:t,dispose:n}}const d2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,h2=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function p2(r,e,t){let n=new Xp;const s=new dt,o=new dt,l=new Lt,c=new fw({depthPacking:nT}),f=new dw,d={},p=t.maxTextureSize,m={[Mr]:zn,[zn]:Mr,[Hi]:Hi},v=new Tr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new dt},radius:{value:4}},vertexShader:d2,fragmentShader:h2}),y=v.clone();y.defines.HORIZONTAL_PASS=1;const E=new vi;E.setAttribute("position",new In(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new qn(E,v),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=xy;let _=this.type;this.render=function(F,U,X){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||F.length===0)return;const P=r.getRenderTarget(),L=r.getActiveCubeFace(),z=r.getActiveMipmapLevel(),Z=r.state;Z.setBlending(ss),Z.buffers.depth.getReversed()===!0?Z.buffers.color.setClear(0,0,0,0):Z.buffers.color.setClear(1,1,1,1),Z.buffers.depth.setTest(!0),Z.setScissorTest(!1);const ie=_!==vr&&this.type===vr,fe=_===vr&&this.type!==vr;for(let se=0,oe=F.length;se<oe;se++){const de=F[se],H=de.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",de,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);const le=H.getFrameExtents();if(s.multiply(le),o.copy(H.mapSize),(s.x>p||s.y>p)&&(s.x>p&&(o.x=Math.floor(p/le.x),s.x=o.x*le.x,H.mapSize.x=o.x),s.y>p&&(o.y=Math.floor(p/le.y),s.y=o.y*le.y,H.mapSize.y=o.y)),H.map===null||ie===!0||fe===!0){const O=this.type!==vr?{minFilter:Hn,magFilter:Hn}:{};H.map!==null&&H.map.dispose(),H.map=new zs(s.x,s.y,O),H.map.texture.name=de.name+".shadowMap",H.camera.updateProjectionMatrix()}r.setRenderTarget(H.map),r.clear();const re=H.getViewportCount();for(let O=0;O<re;O++){const ne=H.getViewport(O);l.set(o.x*ne.x,o.y*ne.y,o.x*ne.z,o.y*ne.w),Z.viewport(l),H.updateMatrices(de,O),n=H.getFrustum(),b(U,X,H.camera,de,this.type)}H.isPointLightShadow!==!0&&this.type===vr&&R(H,X),H.needsUpdate=!1}_=this.type,S.needsUpdate=!1,r.setRenderTarget(P,L,z)};function R(F,U){const X=e.update(M);v.defines.VSM_SAMPLES!==F.blurSamples&&(v.defines.VSM_SAMPLES=F.blurSamples,y.defines.VSM_SAMPLES=F.blurSamples,v.needsUpdate=!0,y.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new zs(s.x,s.y)),v.uniforms.shadow_pass.value=F.map.texture,v.uniforms.resolution.value=F.mapSize,v.uniforms.radius.value=F.radius,r.setRenderTarget(F.mapPass),r.clear(),r.renderBufferDirect(U,null,X,v,M,null),y.uniforms.shadow_pass.value=F.mapPass.texture,y.uniforms.resolution.value=F.mapSize,y.uniforms.radius.value=F.radius,r.setRenderTarget(F.map),r.clear(),r.renderBufferDirect(U,null,X,y,M,null)}function C(F,U,X,P){let L=null;const z=X.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(z!==void 0)L=z;else if(L=X.isPointLight===!0?f:c,r.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0||U.alphaToCoverage===!0){const Z=L.uuid,ie=U.uuid;let fe=d[Z];fe===void 0&&(fe={},d[Z]=fe);let se=fe[ie];se===void 0&&(se=L.clone(),fe[ie]=se,U.addEventListener("dispose",I)),L=se}if(L.visible=U.visible,L.wireframe=U.wireframe,P===vr?L.side=U.shadowSide!==null?U.shadowSide:U.side:L.side=U.shadowSide!==null?U.shadowSide:m[U.side],L.alphaMap=U.alphaMap,L.alphaTest=U.alphaToCoverage===!0?.5:U.alphaTest,L.map=U.map,L.clipShadows=U.clipShadows,L.clippingPlanes=U.clippingPlanes,L.clipIntersection=U.clipIntersection,L.displacementMap=U.displacementMap,L.displacementScale=U.displacementScale,L.displacementBias=U.displacementBias,L.wireframeLinewidth=U.wireframeLinewidth,L.linewidth=U.linewidth,X.isPointLight===!0&&L.isMeshDistanceMaterial===!0){const Z=r.properties.get(L);Z.light=X}return L}function b(F,U,X,P,L){if(F.visible===!1)return;if(F.layers.test(U.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&L===vr)&&(!F.frustumCulled||n.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,F.matrixWorld);const ie=e.update(F),fe=F.material;if(Array.isArray(fe)){const se=ie.groups;for(let oe=0,de=se.length;oe<de;oe++){const H=se[oe],le=fe[H.materialIndex];if(le&&le.visible){const re=C(F,le,P,L);F.onBeforeShadow(r,F,U,X,ie,re,H),r.renderBufferDirect(X,null,ie,re,F,H),F.onAfterShadow(r,F,U,X,ie,re,H)}}}else if(fe.visible){const se=C(F,fe,P,L);F.onBeforeShadow(r,F,U,X,ie,se,null),r.renderBufferDirect(X,null,ie,se,F,null),F.onAfterShadow(r,F,U,X,ie,se,null)}}const Z=F.children;for(let ie=0,fe=Z.length;ie<fe;ie++)b(Z[ie],U,X,P,L)}function I(F){F.target.removeEventListener("dispose",I);for(const X in d){const P=d[X],L=F.target.uuid;L in P&&(P[L].dispose(),delete P[L])}}}const m2={[Sh]:Eh,[Mh]:bh,[Th]:Ah,[Va]:wh,[Eh]:Sh,[bh]:Mh,[Ah]:Th,[wh]:Va};function g2(r,e){function t(){let V=!1;const xe=new Lt;let Ae=null;const De=new Lt(0,0,0,0);return{setMask:function(ye){Ae!==ye&&!V&&(r.colorMask(ye,ye,ye,ye),Ae=ye)},setLocked:function(ye){V=ye},setClear:function(ye,pe,je,ft,Dt){Dt===!0&&(ye*=ft,pe*=ft,je*=ft),xe.set(ye,pe,je,ft),De.equals(xe)===!1&&(r.clearColor(ye,pe,je,ft),De.copy(xe))},reset:function(){V=!1,Ae=null,De.set(-1,0,0,0)}}}function n(){let V=!1,xe=!1,Ae=null,De=null,ye=null;return{setReversed:function(pe){if(xe!==pe){const je=e.get("EXT_clip_control");pe?je.clipControlEXT(je.LOWER_LEFT_EXT,je.ZERO_TO_ONE_EXT):je.clipControlEXT(je.LOWER_LEFT_EXT,je.NEGATIVE_ONE_TO_ONE_EXT),xe=pe;const ft=ye;ye=null,this.setClear(ft)}},getReversed:function(){return xe},setTest:function(pe){pe?ue(r.DEPTH_TEST):Ee(r.DEPTH_TEST)},setMask:function(pe){Ae!==pe&&!V&&(r.depthMask(pe),Ae=pe)},setFunc:function(pe){if(xe&&(pe=m2[pe]),De!==pe){switch(pe){case Sh:r.depthFunc(r.NEVER);break;case Eh:r.depthFunc(r.ALWAYS);break;case Mh:r.depthFunc(r.LESS);break;case Va:r.depthFunc(r.LEQUAL);break;case Th:r.depthFunc(r.EQUAL);break;case wh:r.depthFunc(r.GEQUAL);break;case bh:r.depthFunc(r.GREATER);break;case Ah:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}De=pe}},setLocked:function(pe){V=pe},setClear:function(pe){ye!==pe&&(xe&&(pe=1-pe),r.clearDepth(pe),ye=pe)},reset:function(){V=!1,Ae=null,De=null,ye=null,xe=!1}}}function s(){let V=!1,xe=null,Ae=null,De=null,ye=null,pe=null,je=null,ft=null,Dt=null;return{setTest:function(bt){V||(bt?ue(r.STENCIL_TEST):Ee(r.STENCIL_TEST))},setMask:function(bt){xe!==bt&&!V&&(r.stencilMask(bt),xe=bt)},setFunc:function(bt,ai,Mn){(Ae!==bt||De!==ai||ye!==Mn)&&(r.stencilFunc(bt,ai,Mn),Ae=bt,De=ai,ye=Mn)},setOp:function(bt,ai,Mn){(pe!==bt||je!==ai||ft!==Mn)&&(r.stencilOp(bt,ai,Mn),pe=bt,je=ai,ft=Mn)},setLocked:function(bt){V=bt},setClear:function(bt){Dt!==bt&&(r.clearStencil(bt),Dt=bt)},reset:function(){V=!1,xe=null,Ae=null,De=null,ye=null,pe=null,je=null,ft=null,Dt=null}}}const o=new t,l=new n,c=new s,f=new WeakMap,d=new WeakMap;let p={},m={},v=new WeakMap,y=[],E=null,M=!1,S=null,_=null,R=null,C=null,b=null,I=null,F=null,U=new mt(0,0,0),X=0,P=!1,L=null,z=null,Z=null,ie=null,fe=null;const se=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let oe=!1,de=0;const H=r.getParameter(r.VERSION);H.indexOf("WebGL")!==-1?(de=parseFloat(/^WebGL (\d)/.exec(H)[1]),oe=de>=1):H.indexOf("OpenGL ES")!==-1&&(de=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),oe=de>=2);let le=null,re={};const O=r.getParameter(r.SCISSOR_BOX),ne=r.getParameter(r.VIEWPORT),Oe=new Lt().fromArray(O),$e=new Lt().fromArray(ne);function Ve(V,xe,Ae,De){const ye=new Uint8Array(4),pe=r.createTexture();r.bindTexture(V,pe),r.texParameteri(V,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(V,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let je=0;je<Ae;je++)V===r.TEXTURE_3D||V===r.TEXTURE_2D_ARRAY?r.texImage3D(xe,0,r.RGBA,1,1,De,0,r.RGBA,r.UNSIGNED_BYTE,ye):r.texImage2D(xe+je,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,ye);return pe}const Q={};Q[r.TEXTURE_2D]=Ve(r.TEXTURE_2D,r.TEXTURE_2D,1),Q[r.TEXTURE_CUBE_MAP]=Ve(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[r.TEXTURE_2D_ARRAY]=Ve(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Q[r.TEXTURE_3D]=Ve(r.TEXTURE_3D,r.TEXTURE_3D,1,1),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),ue(r.DEPTH_TEST),l.setFunc(Va),st(!1),Ge(Zv),ue(r.CULL_FACE),Ot(ss);function ue(V){p[V]!==!0&&(r.enable(V),p[V]=!0)}function Ee(V){p[V]!==!1&&(r.disable(V),p[V]=!1)}function Ie(V,xe){return m[V]!==xe?(r.bindFramebuffer(V,xe),m[V]=xe,V===r.DRAW_FRAMEBUFFER&&(m[r.FRAMEBUFFER]=xe),V===r.FRAMEBUFFER&&(m[r.DRAW_FRAMEBUFFER]=xe),!0):!1}function Fe(V,xe){let Ae=y,De=!1;if(V){Ae=v.get(xe),Ae===void 0&&(Ae=[],v.set(xe,Ae));const ye=V.textures;if(Ae.length!==ye.length||Ae[0]!==r.COLOR_ATTACHMENT0){for(let pe=0,je=ye.length;pe<je;pe++)Ae[pe]=r.COLOR_ATTACHMENT0+pe;Ae.length=ye.length,De=!0}}else Ae[0]!==r.BACK&&(Ae[0]=r.BACK,De=!0);De&&r.drawBuffers(Ae)}function yt(V){return E!==V?(r.useProgram(V),E=V,!0):!1}const on={[Ns]:r.FUNC_ADD,[b1]:r.FUNC_SUBTRACT,[A1]:r.FUNC_REVERSE_SUBTRACT};on[R1]=r.MIN,on[C1]=r.MAX;const k={[P1]:r.ZERO,[L1]:r.ONE,[I1]:r.SRC_COLOR,[yh]:r.SRC_ALPHA,[k1]:r.SRC_ALPHA_SATURATE,[F1]:r.DST_COLOR,[N1]:r.DST_ALPHA,[D1]:r.ONE_MINUS_SRC_COLOR,[xh]:r.ONE_MINUS_SRC_ALPHA,[O1]:r.ONE_MINUS_DST_COLOR,[U1]:r.ONE_MINUS_DST_ALPHA,[B1]:r.CONSTANT_COLOR,[z1]:r.ONE_MINUS_CONSTANT_COLOR,[H1]:r.CONSTANT_ALPHA,[V1]:r.ONE_MINUS_CONSTANT_ALPHA};function Ot(V,xe,Ae,De,ye,pe,je,ft,Dt,bt){if(V===ss){M===!0&&(Ee(r.BLEND),M=!1);return}if(M===!1&&(ue(r.BLEND),M=!0),V!==w1){if(V!==S||bt!==P){if((_!==Ns||b!==Ns)&&(r.blendEquation(r.FUNC_ADD),_=Ns,b=Ns),bt)switch(V){case ka:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Jv:r.blendFunc(r.ONE,r.ONE);break;case Qv:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case e_:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case ka:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Jv:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Qv:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case e_:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}R=null,C=null,I=null,F=null,U.set(0,0,0),X=0,S=V,P=bt}return}ye=ye||xe,pe=pe||Ae,je=je||De,(xe!==_||ye!==b)&&(r.blendEquationSeparate(on[xe],on[ye]),_=xe,b=ye),(Ae!==R||De!==C||pe!==I||je!==F)&&(r.blendFuncSeparate(k[Ae],k[De],k[pe],k[je]),R=Ae,C=De,I=pe,F=je),(ft.equals(U)===!1||Dt!==X)&&(r.blendColor(ft.r,ft.g,ft.b,Dt),U.copy(ft),X=Dt),S=V,P=!1}function ht(V,xe){V.side===Hi?Ee(r.CULL_FACE):ue(r.CULL_FACE);let Ae=V.side===zn;xe&&(Ae=!Ae),st(Ae),V.blending===ka&&V.transparent===!1?Ot(ss):Ot(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),l.setFunc(V.depthFunc),l.setTest(V.depthTest),l.setMask(V.depthWrite),o.setMask(V.colorWrite);const De=V.stencilWrite;c.setTest(De),De&&(c.setMask(V.stencilWriteMask),c.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),c.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),We(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?ue(r.SAMPLE_ALPHA_TO_COVERAGE):Ee(r.SAMPLE_ALPHA_TO_COVERAGE)}function st(V){L!==V&&(V?r.frontFace(r.CW):r.frontFace(r.CCW),L=V)}function Ge(V){V!==E1?(ue(r.CULL_FACE),V!==z&&(V===Zv?r.cullFace(r.BACK):V===M1?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Ee(r.CULL_FACE),z=V}function Ht(V){V!==Z&&(oe&&r.lineWidth(V),Z=V)}function We(V,xe,Ae){V?(ue(r.POLYGON_OFFSET_FILL),(ie!==xe||fe!==Ae)&&(r.polygonOffset(xe,Ae),ie=xe,fe=Ae)):Ee(r.POLYGON_OFFSET_FILL)}function ct(V){V?ue(r.SCISSOR_TEST):Ee(r.SCISSOR_TEST)}function jt(V){V===void 0&&(V=r.TEXTURE0+se-1),le!==V&&(r.activeTexture(V),le=V)}function Xt(V,xe,Ae){Ae===void 0&&(le===null?Ae=r.TEXTURE0+se-1:Ae=le);let De=re[Ae];De===void 0&&(De={type:void 0,texture:void 0},re[Ae]=De),(De.type!==V||De.texture!==xe)&&(le!==Ae&&(r.activeTexture(Ae),le=Ae),r.bindTexture(V,xe||Q[V]),De.type=V,De.texture=xe)}function D(){const V=re[le];V!==void 0&&V.type!==void 0&&(r.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function w(){try{r.compressedTexImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function K(){try{r.compressedTexImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function he(){try{r.texSubImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ge(){try{r.texSubImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ae(){try{r.compressedTexSubImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ze(){try{r.compressedTexSubImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function be(){try{r.texStorage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Be(){try{r.texStorage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Je(){try{r.texImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Me(){try{r.texImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Le(V){Oe.equals(V)===!1&&(r.scissor(V.x,V.y,V.z,V.w),Oe.copy(V))}function at(V){$e.equals(V)===!1&&(r.viewport(V.x,V.y,V.z,V.w),$e.copy(V))}function Ke(V,xe){let Ae=d.get(xe);Ae===void 0&&(Ae=new WeakMap,d.set(xe,Ae));let De=Ae.get(V);De===void 0&&(De=r.getUniformBlockIndex(xe,V.name),Ae.set(V,De))}function Re(V,xe){const De=d.get(xe).get(V);f.get(xe)!==De&&(r.uniformBlockBinding(xe,De,V.__bindingPointIndex),f.set(xe,De))}function pt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),l.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),p={},le=null,re={},m={},v=new WeakMap,y=[],E=null,M=!1,S=null,_=null,R=null,C=null,b=null,I=null,F=null,U=new mt(0,0,0),X=0,P=!1,L=null,z=null,Z=null,ie=null,fe=null,Oe.set(0,0,r.canvas.width,r.canvas.height),$e.set(0,0,r.canvas.width,r.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:ue,disable:Ee,bindFramebuffer:Ie,drawBuffers:Fe,useProgram:yt,setBlending:Ot,setMaterial:ht,setFlipSided:st,setCullFace:Ge,setLineWidth:Ht,setPolygonOffset:We,setScissorTest:ct,activeTexture:jt,bindTexture:Xt,unbindTexture:D,compressedTexImage2D:w,compressedTexImage3D:K,texImage2D:Je,texImage3D:Me,updateUBOMapping:Ke,uniformBlockBinding:Re,texStorage2D:be,texStorage3D:Be,texSubImage2D:he,texSubImage3D:ge,compressedTexSubImage2D:ae,compressedTexSubImage3D:Ze,scissor:Le,viewport:at,reset:pt}}function v2(r,e,t,n,s,o,l){const c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new dt,p=new WeakMap;let m;const v=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(D,w){return y?new OffscreenCanvas(D,w):cl("canvas")}function M(D,w,K){let he=1;const ge=Xt(D);if((ge.width>K||ge.height>K)&&(he=K/Math.max(ge.width,ge.height)),he<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const ae=Math.floor(he*ge.width),Ze=Math.floor(he*ge.height);m===void 0&&(m=E(ae,Ze));const be=w?E(ae,Ze):m;return be.width=ae,be.height=Ze,be.getContext("2d").drawImage(D,0,0,ae,Ze),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ge.width+"x"+ge.height+") to ("+ae+"x"+Ze+")."),be}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ge.width+"x"+ge.height+")."),D;return D}function S(D){return D.generateMipmaps}function _(D){r.generateMipmap(D)}function R(D){return D.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?r.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function C(D,w,K,he,ge=!1){if(D!==null){if(r[D]!==void 0)return r[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let ae=w;if(w===r.RED&&(K===r.FLOAT&&(ae=r.R32F),K===r.HALF_FLOAT&&(ae=r.R16F),K===r.UNSIGNED_BYTE&&(ae=r.R8)),w===r.RED_INTEGER&&(K===r.UNSIGNED_BYTE&&(ae=r.R8UI),K===r.UNSIGNED_SHORT&&(ae=r.R16UI),K===r.UNSIGNED_INT&&(ae=r.R32UI),K===r.BYTE&&(ae=r.R8I),K===r.SHORT&&(ae=r.R16I),K===r.INT&&(ae=r.R32I)),w===r.RG&&(K===r.FLOAT&&(ae=r.RG32F),K===r.HALF_FLOAT&&(ae=r.RG16F),K===r.UNSIGNED_BYTE&&(ae=r.RG8)),w===r.RG_INTEGER&&(K===r.UNSIGNED_BYTE&&(ae=r.RG8UI),K===r.UNSIGNED_SHORT&&(ae=r.RG16UI),K===r.UNSIGNED_INT&&(ae=r.RG32UI),K===r.BYTE&&(ae=r.RG8I),K===r.SHORT&&(ae=r.RG16I),K===r.INT&&(ae=r.RG32I)),w===r.RGB_INTEGER&&(K===r.UNSIGNED_BYTE&&(ae=r.RGB8UI),K===r.UNSIGNED_SHORT&&(ae=r.RGB16UI),K===r.UNSIGNED_INT&&(ae=r.RGB32UI),K===r.BYTE&&(ae=r.RGB8I),K===r.SHORT&&(ae=r.RGB16I),K===r.INT&&(ae=r.RGB32I)),w===r.RGBA_INTEGER&&(K===r.UNSIGNED_BYTE&&(ae=r.RGBA8UI),K===r.UNSIGNED_SHORT&&(ae=r.RGBA16UI),K===r.UNSIGNED_INT&&(ae=r.RGBA32UI),K===r.BYTE&&(ae=r.RGBA8I),K===r.SHORT&&(ae=r.RGBA16I),K===r.INT&&(ae=r.RGBA32I)),w===r.RGB&&(K===r.UNSIGNED_INT_5_9_9_9_REV&&(ae=r.RGB9_E5),K===r.UNSIGNED_INT_10F_11F_11F_REV&&(ae=r.R11F_G11F_B10F)),w===r.RGBA){const Ze=ge?Sc:Rt.getTransfer(he);K===r.FLOAT&&(ae=r.RGBA32F),K===r.HALF_FLOAT&&(ae=r.RGBA16F),K===r.UNSIGNED_BYTE&&(ae=Ze===Bt?r.SRGB8_ALPHA8:r.RGBA8),K===r.UNSIGNED_SHORT_4_4_4_4&&(ae=r.RGBA4),K===r.UNSIGNED_SHORT_5_5_5_1&&(ae=r.RGB5_A1)}return(ae===r.R16F||ae===r.R32F||ae===r.RG16F||ae===r.RG32F||ae===r.RGBA16F||ae===r.RGBA32F)&&e.get("EXT_color_buffer_float"),ae}function b(D,w){let K;return D?w===null||w===Bs||w===sl?K=r.DEPTH24_STENCIL8:w===Pi?K=r.DEPTH32F_STENCIL8:w===rl&&(K=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Bs||w===sl?K=r.DEPTH_COMPONENT24:w===Pi?K=r.DEPTH_COMPONENT32F:w===rl&&(K=r.DEPTH_COMPONENT16),K}function I(D,w){return S(D)===!0||D.isFramebufferTexture&&D.minFilter!==Hn&&D.minFilter!==ri?Math.log2(Math.max(w.width,w.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?w.mipmaps.length:1}function F(D){const w=D.target;w.removeEventListener("dispose",F),X(w),w.isVideoTexture&&p.delete(w)}function U(D){const w=D.target;w.removeEventListener("dispose",U),L(w)}function X(D){const w=n.get(D);if(w.__webglInit===void 0)return;const K=D.source,he=v.get(K);if(he){const ge=he[w.__cacheKey];ge.usedTimes--,ge.usedTimes===0&&P(D),Object.keys(he).length===0&&v.delete(K)}n.remove(D)}function P(D){const w=n.get(D);r.deleteTexture(w.__webglTexture);const K=D.source,he=v.get(K);delete he[w.__cacheKey],l.memory.textures--}function L(D){const w=n.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),n.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let he=0;he<6;he++){if(Array.isArray(w.__webglFramebuffer[he]))for(let ge=0;ge<w.__webglFramebuffer[he].length;ge++)r.deleteFramebuffer(w.__webglFramebuffer[he][ge]);else r.deleteFramebuffer(w.__webglFramebuffer[he]);w.__webglDepthbuffer&&r.deleteRenderbuffer(w.__webglDepthbuffer[he])}else{if(Array.isArray(w.__webglFramebuffer))for(let he=0;he<w.__webglFramebuffer.length;he++)r.deleteFramebuffer(w.__webglFramebuffer[he]);else r.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&r.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&r.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let he=0;he<w.__webglColorRenderbuffer.length;he++)w.__webglColorRenderbuffer[he]&&r.deleteRenderbuffer(w.__webglColorRenderbuffer[he]);w.__webglDepthRenderbuffer&&r.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const K=D.textures;for(let he=0,ge=K.length;he<ge;he++){const ae=n.get(K[he]);ae.__webglTexture&&(r.deleteTexture(ae.__webglTexture),l.memory.textures--),n.remove(K[he])}n.remove(D)}let z=0;function Z(){z=0}function ie(){const D=z;return D>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+s.maxTextures),z+=1,D}function fe(D){const w=[];return w.push(D.wrapS),w.push(D.wrapT),w.push(D.wrapR||0),w.push(D.magFilter),w.push(D.minFilter),w.push(D.anisotropy),w.push(D.internalFormat),w.push(D.format),w.push(D.type),w.push(D.generateMipmaps),w.push(D.premultiplyAlpha),w.push(D.flipY),w.push(D.unpackAlignment),w.push(D.colorSpace),w.join()}function se(D,w){const K=n.get(D);if(D.isVideoTexture&&ct(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&K.__version!==D.version){const he=D.image;if(he===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(he.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Q(K,D,w);return}}else D.isExternalTexture&&(K.__webglTexture=D.sourceTexture?D.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,K.__webglTexture,r.TEXTURE0+w)}function oe(D,w){const K=n.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&K.__version!==D.version){Q(K,D,w);return}t.bindTexture(r.TEXTURE_2D_ARRAY,K.__webglTexture,r.TEXTURE0+w)}function de(D,w){const K=n.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&K.__version!==D.version){Q(K,D,w);return}t.bindTexture(r.TEXTURE_3D,K.__webglTexture,r.TEXTURE0+w)}function H(D,w){const K=n.get(D);if(D.version>0&&K.__version!==D.version){ue(K,D,w);return}t.bindTexture(r.TEXTURE_CUBE_MAP,K.__webglTexture,r.TEXTURE0+w)}const le={[ja]:r.REPEAT,[rs]:r.CLAMP_TO_EDGE,[xc]:r.MIRRORED_REPEAT},re={[Hn]:r.NEAREST,[My]:r.NEAREST_MIPMAP_NEAREST,[Ko]:r.NEAREST_MIPMAP_LINEAR,[ri]:r.LINEAR,[cc]:r.LINEAR_MIPMAP_NEAREST,[_r]:r.LINEAR_MIPMAP_LINEAR},O={[rT]:r.NEVER,[cT]:r.ALWAYS,[sT]:r.LESS,[Dy]:r.LEQUAL,[aT]:r.EQUAL,[uT]:r.GEQUAL,[oT]:r.GREATER,[lT]:r.NOTEQUAL};function ne(D,w){if(w.type===Pi&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===ri||w.magFilter===cc||w.magFilter===Ko||w.magFilter===_r||w.minFilter===ri||w.minFilter===cc||w.minFilter===Ko||w.minFilter===_r)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(D,r.TEXTURE_WRAP_S,le[w.wrapS]),r.texParameteri(D,r.TEXTURE_WRAP_T,le[w.wrapT]),(D===r.TEXTURE_3D||D===r.TEXTURE_2D_ARRAY)&&r.texParameteri(D,r.TEXTURE_WRAP_R,le[w.wrapR]),r.texParameteri(D,r.TEXTURE_MAG_FILTER,re[w.magFilter]),r.texParameteri(D,r.TEXTURE_MIN_FILTER,re[w.minFilter]),w.compareFunction&&(r.texParameteri(D,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(D,r.TEXTURE_COMPARE_FUNC,O[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Hn||w.minFilter!==Ko&&w.minFilter!==_r||w.type===Pi&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){const K=e.get("EXT_texture_filter_anisotropic");r.texParameterf(D,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,s.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function Oe(D,w){let K=!1;D.__webglInit===void 0&&(D.__webglInit=!0,w.addEventListener("dispose",F));const he=w.source;let ge=v.get(he);ge===void 0&&(ge={},v.set(he,ge));const ae=fe(w);if(ae!==D.__cacheKey){ge[ae]===void 0&&(ge[ae]={texture:r.createTexture(),usedTimes:0},l.memory.textures++,K=!0),ge[ae].usedTimes++;const Ze=ge[D.__cacheKey];Ze!==void 0&&(ge[D.__cacheKey].usedTimes--,Ze.usedTimes===0&&P(w)),D.__cacheKey=ae,D.__webglTexture=ge[ae].texture}return K}function $e(D,w,K){return Math.floor(Math.floor(D/K)/w)}function Ve(D,w,K,he){const ae=D.updateRanges;if(ae.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,w.width,w.height,K,he,w.data);else{ae.sort((Me,Le)=>Me.start-Le.start);let Ze=0;for(let Me=1;Me<ae.length;Me++){const Le=ae[Ze],at=ae[Me],Ke=Le.start+Le.count,Re=$e(at.start,w.width,4),pt=$e(Le.start,w.width,4);at.start<=Ke+1&&Re===pt&&$e(at.start+at.count-1,w.width,4)===Re?Le.count=Math.max(Le.count,at.start+at.count-Le.start):(++Ze,ae[Ze]=at)}ae.length=Ze+1;const be=r.getParameter(r.UNPACK_ROW_LENGTH),Be=r.getParameter(r.UNPACK_SKIP_PIXELS),Je=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,w.width);for(let Me=0,Le=ae.length;Me<Le;Me++){const at=ae[Me],Ke=Math.floor(at.start/4),Re=Math.ceil(at.count/4),pt=Ke%w.width,V=Math.floor(Ke/w.width),xe=Re,Ae=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,pt),r.pixelStorei(r.UNPACK_SKIP_ROWS,V),t.texSubImage2D(r.TEXTURE_2D,0,pt,V,xe,Ae,K,he,w.data)}D.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,be),r.pixelStorei(r.UNPACK_SKIP_PIXELS,Be),r.pixelStorei(r.UNPACK_SKIP_ROWS,Je)}}function Q(D,w,K){let he=r.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(he=r.TEXTURE_2D_ARRAY),w.isData3DTexture&&(he=r.TEXTURE_3D);const ge=Oe(D,w),ae=w.source;t.bindTexture(he,D.__webglTexture,r.TEXTURE0+K);const Ze=n.get(ae);if(ae.version!==Ze.__version||ge===!0){t.activeTexture(r.TEXTURE0+K);const be=Rt.getPrimaries(Rt.workingColorSpace),Be=w.colorSpace===is?null:Rt.getPrimaries(w.colorSpace),Je=w.colorSpace===is||be===Be?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,w.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,w.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Je);let Me=M(w.image,!1,s.maxTextureSize);Me=jt(w,Me);const Le=o.convert(w.format,w.colorSpace),at=o.convert(w.type);let Ke=C(w.internalFormat,Le,at,w.colorSpace,w.isVideoTexture);ne(he,w);let Re;const pt=w.mipmaps,V=w.isVideoTexture!==!0,xe=Ze.__version===void 0||ge===!0,Ae=ae.dataReady,De=I(w,Me);if(w.isDepthTexture)Ke=b(w.format===ol,w.type),xe&&(V?t.texStorage2D(r.TEXTURE_2D,1,Ke,Me.width,Me.height):t.texImage2D(r.TEXTURE_2D,0,Ke,Me.width,Me.height,0,Le,at,null));else if(w.isDataTexture)if(pt.length>0){V&&xe&&t.texStorage2D(r.TEXTURE_2D,De,Ke,pt[0].width,pt[0].height);for(let ye=0,pe=pt.length;ye<pe;ye++)Re=pt[ye],V?Ae&&t.texSubImage2D(r.TEXTURE_2D,ye,0,0,Re.width,Re.height,Le,at,Re.data):t.texImage2D(r.TEXTURE_2D,ye,Ke,Re.width,Re.height,0,Le,at,Re.data);w.generateMipmaps=!1}else V?(xe&&t.texStorage2D(r.TEXTURE_2D,De,Ke,Me.width,Me.height),Ae&&Ve(w,Me,Le,at)):t.texImage2D(r.TEXTURE_2D,0,Ke,Me.width,Me.height,0,Le,at,Me.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){V&&xe&&t.texStorage3D(r.TEXTURE_2D_ARRAY,De,Ke,pt[0].width,pt[0].height,Me.depth);for(let ye=0,pe=pt.length;ye<pe;ye++)if(Re=pt[ye],w.format!==mi)if(Le!==null)if(V){if(Ae)if(w.layerUpdates.size>0){const je=W_(Re.width,Re.height,w.format,w.type);for(const ft of w.layerUpdates){const Dt=Re.data.subarray(ft*je/Re.data.BYTES_PER_ELEMENT,(ft+1)*je/Re.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ye,0,0,ft,Re.width,Re.height,1,Le,Dt)}w.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ye,0,0,0,Re.width,Re.height,Me.depth,Le,Re.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ye,Ke,Re.width,Re.height,Me.depth,0,Re.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else V?Ae&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,ye,0,0,0,Re.width,Re.height,Me.depth,Le,at,Re.data):t.texImage3D(r.TEXTURE_2D_ARRAY,ye,Ke,Re.width,Re.height,Me.depth,0,Le,at,Re.data)}else{V&&xe&&t.texStorage2D(r.TEXTURE_2D,De,Ke,pt[0].width,pt[0].height);for(let ye=0,pe=pt.length;ye<pe;ye++)Re=pt[ye],w.format!==mi?Le!==null?V?Ae&&t.compressedTexSubImage2D(r.TEXTURE_2D,ye,0,0,Re.width,Re.height,Le,Re.data):t.compressedTexImage2D(r.TEXTURE_2D,ye,Ke,Re.width,Re.height,0,Re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):V?Ae&&t.texSubImage2D(r.TEXTURE_2D,ye,0,0,Re.width,Re.height,Le,at,Re.data):t.texImage2D(r.TEXTURE_2D,ye,Ke,Re.width,Re.height,0,Le,at,Re.data)}else if(w.isDataArrayTexture)if(V){if(xe&&t.texStorage3D(r.TEXTURE_2D_ARRAY,De,Ke,Me.width,Me.height,Me.depth),Ae)if(w.layerUpdates.size>0){const ye=W_(Me.width,Me.height,w.format,w.type);for(const pe of w.layerUpdates){const je=Me.data.subarray(pe*ye/Me.data.BYTES_PER_ELEMENT,(pe+1)*ye/Me.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,pe,Me.width,Me.height,1,Le,at,je)}w.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Me.width,Me.height,Me.depth,Le,at,Me.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,Ke,Me.width,Me.height,Me.depth,0,Le,at,Me.data);else if(w.isData3DTexture)V?(xe&&t.texStorage3D(r.TEXTURE_3D,De,Ke,Me.width,Me.height,Me.depth),Ae&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Me.width,Me.height,Me.depth,Le,at,Me.data)):t.texImage3D(r.TEXTURE_3D,0,Ke,Me.width,Me.height,Me.depth,0,Le,at,Me.data);else if(w.isFramebufferTexture){if(xe)if(V)t.texStorage2D(r.TEXTURE_2D,De,Ke,Me.width,Me.height);else{let ye=Me.width,pe=Me.height;for(let je=0;je<De;je++)t.texImage2D(r.TEXTURE_2D,je,Ke,ye,pe,0,Le,at,null),ye>>=1,pe>>=1}}else if(pt.length>0){if(V&&xe){const ye=Xt(pt[0]);t.texStorage2D(r.TEXTURE_2D,De,Ke,ye.width,ye.height)}for(let ye=0,pe=pt.length;ye<pe;ye++)Re=pt[ye],V?Ae&&t.texSubImage2D(r.TEXTURE_2D,ye,0,0,Le,at,Re):t.texImage2D(r.TEXTURE_2D,ye,Ke,Le,at,Re);w.generateMipmaps=!1}else if(V){if(xe){const ye=Xt(Me);t.texStorage2D(r.TEXTURE_2D,De,Ke,ye.width,ye.height)}Ae&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,Le,at,Me)}else t.texImage2D(r.TEXTURE_2D,0,Ke,Le,at,Me);S(w)&&_(he),Ze.__version=ae.version,w.onUpdate&&w.onUpdate(w)}D.__version=w.version}function ue(D,w,K){if(w.image.length!==6)return;const he=Oe(D,w),ge=w.source;t.bindTexture(r.TEXTURE_CUBE_MAP,D.__webglTexture,r.TEXTURE0+K);const ae=n.get(ge);if(ge.version!==ae.__version||he===!0){t.activeTexture(r.TEXTURE0+K);const Ze=Rt.getPrimaries(Rt.workingColorSpace),be=w.colorSpace===is?null:Rt.getPrimaries(w.colorSpace),Be=w.colorSpace===is||Ze===be?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,w.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,w.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Be);const Je=w.isCompressedTexture||w.image[0].isCompressedTexture,Me=w.image[0]&&w.image[0].isDataTexture,Le=[];for(let pe=0;pe<6;pe++)!Je&&!Me?Le[pe]=M(w.image[pe],!0,s.maxCubemapSize):Le[pe]=Me?w.image[pe].image:w.image[pe],Le[pe]=jt(w,Le[pe]);const at=Le[0],Ke=o.convert(w.format,w.colorSpace),Re=o.convert(w.type),pt=C(w.internalFormat,Ke,Re,w.colorSpace),V=w.isVideoTexture!==!0,xe=ae.__version===void 0||he===!0,Ae=ge.dataReady;let De=I(w,at);ne(r.TEXTURE_CUBE_MAP,w);let ye;if(Je){V&&xe&&t.texStorage2D(r.TEXTURE_CUBE_MAP,De,pt,at.width,at.height);for(let pe=0;pe<6;pe++){ye=Le[pe].mipmaps;for(let je=0;je<ye.length;je++){const ft=ye[je];w.format!==mi?Ke!==null?V?Ae&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,je,0,0,ft.width,ft.height,Ke,ft.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,je,pt,ft.width,ft.height,0,ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):V?Ae&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,je,0,0,ft.width,ft.height,Ke,Re,ft.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,je,pt,ft.width,ft.height,0,Ke,Re,ft.data)}}}else{if(ye=w.mipmaps,V&&xe){ye.length>0&&De++;const pe=Xt(Le[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,De,pt,pe.width,pe.height)}for(let pe=0;pe<6;pe++)if(Me){V?Ae&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,Le[pe].width,Le[pe].height,Ke,Re,Le[pe].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,pt,Le[pe].width,Le[pe].height,0,Ke,Re,Le[pe].data);for(let je=0;je<ye.length;je++){const Dt=ye[je].image[pe].image;V?Ae&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,je+1,0,0,Dt.width,Dt.height,Ke,Re,Dt.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,je+1,pt,Dt.width,Dt.height,0,Ke,Re,Dt.data)}}else{V?Ae&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,Ke,Re,Le[pe]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,pt,Ke,Re,Le[pe]);for(let je=0;je<ye.length;je++){const ft=ye[je];V?Ae&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,je+1,0,0,Ke,Re,ft.image[pe]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,je+1,pt,Ke,Re,ft.image[pe])}}}S(w)&&_(r.TEXTURE_CUBE_MAP),ae.__version=ge.version,w.onUpdate&&w.onUpdate(w)}D.__version=w.version}function Ee(D,w,K,he,ge,ae){const Ze=o.convert(K.format,K.colorSpace),be=o.convert(K.type),Be=C(K.internalFormat,Ze,be,K.colorSpace),Je=n.get(w),Me=n.get(K);if(Me.__renderTarget=w,!Je.__hasExternalTextures){const Le=Math.max(1,w.width>>ae),at=Math.max(1,w.height>>ae);ge===r.TEXTURE_3D||ge===r.TEXTURE_2D_ARRAY?t.texImage3D(ge,ae,Be,Le,at,w.depth,0,Ze,be,null):t.texImage2D(ge,ae,Be,Le,at,0,Ze,be,null)}t.bindFramebuffer(r.FRAMEBUFFER,D),We(w)?c.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,he,ge,Me.__webglTexture,0,Ht(w)):(ge===r.TEXTURE_2D||ge>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&ge<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,he,ge,Me.__webglTexture,ae),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Ie(D,w,K){if(r.bindRenderbuffer(r.RENDERBUFFER,D),w.depthBuffer){const he=w.depthTexture,ge=he&&he.isDepthTexture?he.type:null,ae=b(w.stencilBuffer,ge),Ze=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,be=Ht(w);We(w)?c.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,be,ae,w.width,w.height):K?r.renderbufferStorageMultisample(r.RENDERBUFFER,be,ae,w.width,w.height):r.renderbufferStorage(r.RENDERBUFFER,ae,w.width,w.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Ze,r.RENDERBUFFER,D)}else{const he=w.textures;for(let ge=0;ge<he.length;ge++){const ae=he[ge],Ze=o.convert(ae.format,ae.colorSpace),be=o.convert(ae.type),Be=C(ae.internalFormat,Ze,be,ae.colorSpace),Je=Ht(w);K&&We(w)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Je,Be,w.width,w.height):We(w)?c.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Je,Be,w.width,w.height):r.renderbufferStorage(r.RENDERBUFFER,Be,w.width,w.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Fe(D,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,D),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const he=n.get(w.depthTexture);he.__renderTarget=w,(!he.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),se(w.depthTexture,0);const ge=he.__webglTexture,ae=Ht(w);if(w.depthTexture.format===al)We(w)?c.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ge,0,ae):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ge,0);else if(w.depthTexture.format===ol)We(w)?c.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ge,0,ae):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ge,0);else throw new Error("Unknown depthTexture format")}function yt(D){const w=n.get(D),K=D.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==D.depthTexture){const he=D.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),he){const ge=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,he.removeEventListener("dispose",ge)};he.addEventListener("dispose",ge),w.__depthDisposeCallback=ge}w.__boundDepthTexture=he}if(D.depthTexture&&!w.__autoAllocateDepthBuffer){if(K)throw new Error("target.depthTexture not supported in Cube render targets");const he=D.texture.mipmaps;he&&he.length>0?Fe(w.__webglFramebuffer[0],D):Fe(w.__webglFramebuffer,D)}else if(K){w.__webglDepthbuffer=[];for(let he=0;he<6;he++)if(t.bindFramebuffer(r.FRAMEBUFFER,w.__webglFramebuffer[he]),w.__webglDepthbuffer[he]===void 0)w.__webglDepthbuffer[he]=r.createRenderbuffer(),Ie(w.__webglDepthbuffer[he],D,!1);else{const ge=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ae=w.__webglDepthbuffer[he];r.bindRenderbuffer(r.RENDERBUFFER,ae),r.framebufferRenderbuffer(r.FRAMEBUFFER,ge,r.RENDERBUFFER,ae)}}else{const he=D.texture.mipmaps;if(he&&he.length>0?t.bindFramebuffer(r.FRAMEBUFFER,w.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=r.createRenderbuffer(),Ie(w.__webglDepthbuffer,D,!1);else{const ge=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ae=w.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ae),r.framebufferRenderbuffer(r.FRAMEBUFFER,ge,r.RENDERBUFFER,ae)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function on(D,w,K){const he=n.get(D);w!==void 0&&Ee(he.__webglFramebuffer,D,D.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),K!==void 0&&yt(D)}function k(D){const w=D.texture,K=n.get(D),he=n.get(w);D.addEventListener("dispose",U);const ge=D.textures,ae=D.isWebGLCubeRenderTarget===!0,Ze=ge.length>1;if(Ze||(he.__webglTexture===void 0&&(he.__webglTexture=r.createTexture()),he.__version=w.version,l.memory.textures++),ae){K.__webglFramebuffer=[];for(let be=0;be<6;be++)if(w.mipmaps&&w.mipmaps.length>0){K.__webglFramebuffer[be]=[];for(let Be=0;Be<w.mipmaps.length;Be++)K.__webglFramebuffer[be][Be]=r.createFramebuffer()}else K.__webglFramebuffer[be]=r.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){K.__webglFramebuffer=[];for(let be=0;be<w.mipmaps.length;be++)K.__webglFramebuffer[be]=r.createFramebuffer()}else K.__webglFramebuffer=r.createFramebuffer();if(Ze)for(let be=0,Be=ge.length;be<Be;be++){const Je=n.get(ge[be]);Je.__webglTexture===void 0&&(Je.__webglTexture=r.createTexture(),l.memory.textures++)}if(D.samples>0&&We(D)===!1){K.__webglMultisampledFramebuffer=r.createFramebuffer(),K.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let be=0;be<ge.length;be++){const Be=ge[be];K.__webglColorRenderbuffer[be]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,K.__webglColorRenderbuffer[be]);const Je=o.convert(Be.format,Be.colorSpace),Me=o.convert(Be.type),Le=C(Be.internalFormat,Je,Me,Be.colorSpace,D.isXRRenderTarget===!0),at=Ht(D);r.renderbufferStorageMultisample(r.RENDERBUFFER,at,Le,D.width,D.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+be,r.RENDERBUFFER,K.__webglColorRenderbuffer[be])}r.bindRenderbuffer(r.RENDERBUFFER,null),D.depthBuffer&&(K.__webglDepthRenderbuffer=r.createRenderbuffer(),Ie(K.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ae){t.bindTexture(r.TEXTURE_CUBE_MAP,he.__webglTexture),ne(r.TEXTURE_CUBE_MAP,w);for(let be=0;be<6;be++)if(w.mipmaps&&w.mipmaps.length>0)for(let Be=0;Be<w.mipmaps.length;Be++)Ee(K.__webglFramebuffer[be][Be],D,w,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+be,Be);else Ee(K.__webglFramebuffer[be],D,w,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+be,0);S(w)&&_(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ze){for(let be=0,Be=ge.length;be<Be;be++){const Je=ge[be],Me=n.get(Je);let Le=r.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Le=D.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(Le,Me.__webglTexture),ne(Le,Je),Ee(K.__webglFramebuffer,D,Je,r.COLOR_ATTACHMENT0+be,Le,0),S(Je)&&_(Le)}t.unbindTexture()}else{let be=r.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(be=D.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(be,he.__webglTexture),ne(be,w),w.mipmaps&&w.mipmaps.length>0)for(let Be=0;Be<w.mipmaps.length;Be++)Ee(K.__webglFramebuffer[Be],D,w,r.COLOR_ATTACHMENT0,be,Be);else Ee(K.__webglFramebuffer,D,w,r.COLOR_ATTACHMENT0,be,0);S(w)&&_(be),t.unbindTexture()}D.depthBuffer&&yt(D)}function Ot(D){const w=D.textures;for(let K=0,he=w.length;K<he;K++){const ge=w[K];if(S(ge)){const ae=R(D),Ze=n.get(ge).__webglTexture;t.bindTexture(ae,Ze),_(ae),t.unbindTexture()}}}const ht=[],st=[];function Ge(D){if(D.samples>0){if(We(D)===!1){const w=D.textures,K=D.width,he=D.height;let ge=r.COLOR_BUFFER_BIT;const ae=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ze=n.get(D),be=w.length>1;if(be)for(let Je=0;Je<w.length;Je++)t.bindFramebuffer(r.FRAMEBUFFER,Ze.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Je,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,Ze.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Je,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,Ze.__webglMultisampledFramebuffer);const Be=D.texture.mipmaps;Be&&Be.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ze.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ze.__webglFramebuffer);for(let Je=0;Je<w.length;Je++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(ge|=r.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(ge|=r.STENCIL_BUFFER_BIT)),be){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Ze.__webglColorRenderbuffer[Je]);const Me=n.get(w[Je]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Me,0)}r.blitFramebuffer(0,0,K,he,0,0,K,he,ge,r.NEAREST),f===!0&&(ht.length=0,st.length=0,ht.push(r.COLOR_ATTACHMENT0+Je),D.depthBuffer&&D.resolveDepthBuffer===!1&&(ht.push(ae),st.push(ae),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,st)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,ht))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),be)for(let Je=0;Je<w.length;Je++){t.bindFramebuffer(r.FRAMEBUFFER,Ze.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Je,r.RENDERBUFFER,Ze.__webglColorRenderbuffer[Je]);const Me=n.get(w[Je]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,Ze.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Je,r.TEXTURE_2D,Me,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ze.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&f){const w=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[w])}}}function Ht(D){return Math.min(s.maxSamples,D.samples)}function We(D){const w=n.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function ct(D){const w=l.render.frame;p.get(D)!==w&&(p.set(D,w),D.update())}function jt(D,w){const K=D.colorSpace,he=D.format,ge=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||K!==Vn&&K!==is&&(Rt.getTransfer(K)===Bt?(he!==mi||ge!==Xi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",K)),w}function Xt(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(d.width=D.naturalWidth||D.width,d.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(d.width=D.displayWidth,d.height=D.displayHeight):(d.width=D.width,d.height=D.height),d}this.allocateTextureUnit=ie,this.resetTextureUnits=Z,this.setTexture2D=se,this.setTexture2DArray=oe,this.setTexture3D=de,this.setTextureCube=H,this.rebindTextures=on,this.setupRenderTarget=k,this.updateRenderTargetMipmap=Ot,this.updateMultisampleRenderTarget=Ge,this.setupDepthRenderbuffer=yt,this.setupFrameBufferTexture=Ee,this.useMultisampledRTT=We}function _2(r,e){function t(n,s=is){let o;const l=Rt.getTransfer(s);if(n===Xi)return r.UNSIGNED_BYTE;if(n===Fp)return r.UNSIGNED_SHORT_4_4_4_4;if(n===Op)return r.UNSIGNED_SHORT_5_5_5_1;if(n===by)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Ay)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===Ty)return r.BYTE;if(n===wy)return r.SHORT;if(n===rl)return r.UNSIGNED_SHORT;if(n===Up)return r.INT;if(n===Bs)return r.UNSIGNED_INT;if(n===Pi)return r.FLOAT;if(n===gl)return r.HALF_FLOAT;if(n===Ry)return r.ALPHA;if(n===Cy)return r.RGB;if(n===mi)return r.RGBA;if(n===al)return r.DEPTH_COMPONENT;if(n===ol)return r.DEPTH_STENCIL;if(n===kp)return r.RED;if(n===Bp)return r.RED_INTEGER;if(n===Py)return r.RG;if(n===zp)return r.RG_INTEGER;if(n===Hp)return r.RGBA_INTEGER;if(n===fc||n===dc||n===hc||n===pc)if(l===Bt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(n===fc)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===dc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===hc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===pc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(n===fc)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===dc)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===hc)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===pc)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ph||n===Lh||n===Ih||n===Dh)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(n===Ph)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Lh)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ih)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Dh)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Nh||n===Uh||n===Fh)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(n===Nh||n===Uh)return l===Bt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(n===Fh)return l===Bt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Oh||n===kh||n===Bh||n===zh||n===Hh||n===Vh||n===Gh||n===Wh||n===jh||n===Xh||n===$h||n===Yh||n===Kh||n===qh)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(n===Oh)return l===Bt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===kh)return l===Bt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Bh)return l===Bt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===zh)return l===Bt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Hh)return l===Bt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Vh)return l===Bt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Gh)return l===Bt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Wh)return l===Bt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===jh)return l===Bt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Xh)return l===Bt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===$h)return l===Bt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Yh)return l===Bt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Kh)return l===Bt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===qh)return l===Bt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Zh||n===Jh||n===Qh)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(n===Zh)return l===Bt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Jh)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Qh)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ep||n===tp||n===np||n===ip)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(n===ep)return o.COMPRESSED_RED_RGTC1_EXT;if(n===tp)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===np)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ip)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===sl?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}const y2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,x2=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class S2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Ky(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Tr({vertexShader:y2,fragmentShader:x2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new qn(new Ic(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class E2 extends Gs{constructor(e,t){super();const n=this;let s=null,o=1,l=null,c="local-floor",f=1,d=null,p=null,m=null,v=null,y=null,E=null;const M=typeof XRWebGLBinding<"u",S=new S2,_={},R=t.getContextAttributes();let C=null,b=null;const I=[],F=[],U=new dt;let X=null;const P=new Bn;P.viewport=new Lt;const L=new Bn;L.viewport=new Lt;const z=[P,L],Z=new Dw;let ie=null,fe=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let ue=I[Q];return ue===void 0&&(ue=new Xd,I[Q]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function(Q){let ue=I[Q];return ue===void 0&&(ue=new Xd,I[Q]=ue),ue.getGripSpace()},this.getHand=function(Q){let ue=I[Q];return ue===void 0&&(ue=new Xd,I[Q]=ue),ue.getHandSpace()};function se(Q){const ue=F.indexOf(Q.inputSource);if(ue===-1)return;const Ee=I[ue];Ee!==void 0&&(Ee.update(Q.inputSource,Q.frame,d||l),Ee.dispatchEvent({type:Q.type,data:Q.inputSource}))}function oe(){s.removeEventListener("select",se),s.removeEventListener("selectstart",se),s.removeEventListener("selectend",se),s.removeEventListener("squeeze",se),s.removeEventListener("squeezestart",se),s.removeEventListener("squeezeend",se),s.removeEventListener("end",oe),s.removeEventListener("inputsourceschange",de);for(let Q=0;Q<I.length;Q++){const ue=F[Q];ue!==null&&(F[Q]=null,I[Q].disconnect(ue))}ie=null,fe=null,S.reset();for(const Q in _)delete _[Q];e.setRenderTarget(C),y=null,v=null,m=null,s=null,b=null,Ve.stop(),n.isPresenting=!1,e.setPixelRatio(X),e.setSize(U.width,U.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){o=Q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){c=Q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||l},this.setReferenceSpace=function(Q){d=Q},this.getBaseLayer=function(){return v!==null?v:y},this.getBinding=function(){return m===null&&M&&(m=new XRWebGLBinding(s,t)),m},this.getFrame=function(){return E},this.getSession=function(){return s},this.setSession=async function(Q){if(s=Q,s!==null){if(C=e.getRenderTarget(),s.addEventListener("select",se),s.addEventListener("selectstart",se),s.addEventListener("selectend",se),s.addEventListener("squeeze",se),s.addEventListener("squeezestart",se),s.addEventListener("squeezeend",se),s.addEventListener("end",oe),s.addEventListener("inputsourceschange",de),R.xrCompatible!==!0&&await t.makeXRCompatible(),X=e.getPixelRatio(),e.getSize(U),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ee=null,Ie=null,Fe=null;R.depth&&(Fe=R.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Ee=R.stencil?ol:al,Ie=R.stencil?sl:Bs);const yt={colorFormat:t.RGBA8,depthFormat:Fe,scaleFactor:o};m=this.getBinding(),v=m.createProjectionLayer(yt),s.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),b=new zs(v.textureWidth,v.textureHeight,{format:mi,type:Xi,depthTexture:new Yy(v.textureWidth,v.textureHeight,Ie,void 0,void 0,void 0,void 0,void 0,void 0,Ee),stencilBuffer:R.stencil,colorSpace:e.outputColorSpace,samples:R.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}else{const Ee={antialias:R.antialias,alpha:!0,depth:R.depth,stencil:R.stencil,framebufferScaleFactor:o};y=new XRWebGLLayer(s,t,Ee),s.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),b=new zs(y.framebufferWidth,y.framebufferHeight,{format:mi,type:Xi,colorSpace:e.outputColorSpace,stencilBuffer:R.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(f),d=null,l=await s.requestReferenceSpace(c),Ve.setContext(s),Ve.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function de(Q){for(let ue=0;ue<Q.removed.length;ue++){const Ee=Q.removed[ue],Ie=F.indexOf(Ee);Ie>=0&&(F[Ie]=null,I[Ie].disconnect(Ee))}for(let ue=0;ue<Q.added.length;ue++){const Ee=Q.added[ue];let Ie=F.indexOf(Ee);if(Ie===-1){for(let yt=0;yt<I.length;yt++)if(yt>=F.length){F.push(Ee),Ie=yt;break}else if(F[yt]===null){F[yt]=Ee,Ie=yt;break}if(Ie===-1)break}const Fe=I[Ie];Fe&&Fe.connect(Ee)}}const H=new j,le=new j;function re(Q,ue,Ee){H.setFromMatrixPosition(ue.matrixWorld),le.setFromMatrixPosition(Ee.matrixWorld);const Ie=H.distanceTo(le),Fe=ue.projectionMatrix.elements,yt=Ee.projectionMatrix.elements,on=Fe[14]/(Fe[10]-1),k=Fe[14]/(Fe[10]+1),Ot=(Fe[9]+1)/Fe[5],ht=(Fe[9]-1)/Fe[5],st=(Fe[8]-1)/Fe[0],Ge=(yt[8]+1)/yt[0],Ht=on*st,We=on*Ge,ct=Ie/(-st+Ge),jt=ct*-st;if(ue.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(jt),Q.translateZ(ct),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),Fe[10]===-1)Q.projectionMatrix.copy(ue.projectionMatrix),Q.projectionMatrixInverse.copy(ue.projectionMatrixInverse);else{const Xt=on+ct,D=k+ct,w=Ht-jt,K=We+(Ie-jt),he=Ot*k/D*Xt,ge=ht*k/D*Xt;Q.projectionMatrix.makePerspective(w,K,he,ge,Xt,D),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function O(Q,ue){ue===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(ue.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(s===null)return;let ue=Q.near,Ee=Q.far;S.texture!==null&&(S.depthNear>0&&(ue=S.depthNear),S.depthFar>0&&(Ee=S.depthFar)),Z.near=L.near=P.near=ue,Z.far=L.far=P.far=Ee,(ie!==Z.near||fe!==Z.far)&&(s.updateRenderState({depthNear:Z.near,depthFar:Z.far}),ie=Z.near,fe=Z.far),Z.layers.mask=Q.layers.mask|6,P.layers.mask=Z.layers.mask&3,L.layers.mask=Z.layers.mask&5;const Ie=Q.parent,Fe=Z.cameras;O(Z,Ie);for(let yt=0;yt<Fe.length;yt++)O(Fe[yt],Ie);Fe.length===2?re(Z,P,L):Z.projectionMatrix.copy(P.projectionMatrix),ne(Q,Z,Ie)};function ne(Q,ue,Ee){Ee===null?Q.matrix.copy(ue.matrixWorld):(Q.matrix.copy(Ee.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(ue.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(ue.projectionMatrix),Q.projectionMatrixInverse.copy(ue.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Xa*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return Z},this.getFoveation=function(){if(!(v===null&&y===null))return f},this.setFoveation=function(Q){f=Q,v!==null&&(v.fixedFoveation=Q),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=Q)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(Z)},this.getCameraTexture=function(Q){return _[Q]};let Oe=null;function $e(Q,ue){if(p=ue.getViewerPose(d||l),E=ue,p!==null){const Ee=p.views;y!==null&&(e.setRenderTargetFramebuffer(b,y.framebuffer),e.setRenderTarget(b));let Ie=!1;Ee.length!==Z.cameras.length&&(Z.cameras.length=0,Ie=!0);for(let k=0;k<Ee.length;k++){const Ot=Ee[k];let ht=null;if(y!==null)ht=y.getViewport(Ot);else{const Ge=m.getViewSubImage(v,Ot);ht=Ge.viewport,k===0&&(e.setRenderTargetTextures(b,Ge.colorTexture,Ge.depthStencilTexture),e.setRenderTarget(b))}let st=z[k];st===void 0&&(st=new Bn,st.layers.enable(k),st.viewport=new Lt,z[k]=st),st.matrix.fromArray(Ot.transform.matrix),st.matrix.decompose(st.position,st.quaternion,st.scale),st.projectionMatrix.fromArray(Ot.projectionMatrix),st.projectionMatrixInverse.copy(st.projectionMatrix).invert(),st.viewport.set(ht.x,ht.y,ht.width,ht.height),k===0&&(Z.matrix.copy(st.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale)),Ie===!0&&Z.cameras.push(st)}const Fe=s.enabledFeatures;if(Fe&&Fe.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&M){m=n.getBinding();const k=m.getDepthInformation(Ee[0]);k&&k.isValid&&k.texture&&S.init(k,s.renderState)}if(Fe&&Fe.includes("camera-access")&&M){e.state.unbindTexture(),m=n.getBinding();for(let k=0;k<Ee.length;k++){const Ot=Ee[k].camera;if(Ot){let ht=_[Ot];ht||(ht=new Ky,_[Ot]=ht);const st=m.getCameraImage(Ot);ht.sourceTexture=st}}}}for(let Ee=0;Ee<I.length;Ee++){const Ie=F[Ee],Fe=I[Ee];Ie!==null&&Fe!==void 0&&Fe.update(Ie,ue,d||l)}Oe&&Oe(Q,ue),ue.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ue}),E=null}const Ve=new tx;Ve.setAnimationLoop($e),this.setAnimationLoop=function(Q){Oe=Q},this.dispose=function(){}}}const Ls=new Yi,M2=new _t;function T2(r,e){function t(S,_){S.matrixAutoUpdate===!0&&S.updateMatrix(),_.value.copy(S.matrix)}function n(S,_){_.color.getRGB(S.fogColor.value,Hy(r)),_.isFog?(S.fogNear.value=_.near,S.fogFar.value=_.far):_.isFogExp2&&(S.fogDensity.value=_.density)}function s(S,_,R,C,b){_.isMeshBasicMaterial||_.isMeshLambertMaterial?o(S,_):_.isMeshToonMaterial?(o(S,_),m(S,_)):_.isMeshPhongMaterial?(o(S,_),p(S,_)):_.isMeshStandardMaterial?(o(S,_),v(S,_),_.isMeshPhysicalMaterial&&y(S,_,b)):_.isMeshMatcapMaterial?(o(S,_),E(S,_)):_.isMeshDepthMaterial?o(S,_):_.isMeshDistanceMaterial?(o(S,_),M(S,_)):_.isMeshNormalMaterial?o(S,_):_.isLineBasicMaterial?(l(S,_),_.isLineDashedMaterial&&c(S,_)):_.isPointsMaterial?f(S,_,R,C):_.isSpriteMaterial?d(S,_):_.isShadowMaterial?(S.color.value.copy(_.color),S.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function o(S,_){S.opacity.value=_.opacity,_.color&&S.diffuse.value.copy(_.color),_.emissive&&S.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(S.map.value=_.map,t(_.map,S.mapTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,t(_.alphaMap,S.alphaMapTransform)),_.bumpMap&&(S.bumpMap.value=_.bumpMap,t(_.bumpMap,S.bumpMapTransform),S.bumpScale.value=_.bumpScale,_.side===zn&&(S.bumpScale.value*=-1)),_.normalMap&&(S.normalMap.value=_.normalMap,t(_.normalMap,S.normalMapTransform),S.normalScale.value.copy(_.normalScale),_.side===zn&&S.normalScale.value.negate()),_.displacementMap&&(S.displacementMap.value=_.displacementMap,t(_.displacementMap,S.displacementMapTransform),S.displacementScale.value=_.displacementScale,S.displacementBias.value=_.displacementBias),_.emissiveMap&&(S.emissiveMap.value=_.emissiveMap,t(_.emissiveMap,S.emissiveMapTransform)),_.specularMap&&(S.specularMap.value=_.specularMap,t(_.specularMap,S.specularMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest);const R=e.get(_),C=R.envMap,b=R.envMapRotation;C&&(S.envMap.value=C,Ls.copy(b),Ls.x*=-1,Ls.y*=-1,Ls.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(Ls.y*=-1,Ls.z*=-1),S.envMapRotation.value.setFromMatrix4(M2.makeRotationFromEuler(Ls)),S.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=_.reflectivity,S.ior.value=_.ior,S.refractionRatio.value=_.refractionRatio),_.lightMap&&(S.lightMap.value=_.lightMap,S.lightMapIntensity.value=_.lightMapIntensity,t(_.lightMap,S.lightMapTransform)),_.aoMap&&(S.aoMap.value=_.aoMap,S.aoMapIntensity.value=_.aoMapIntensity,t(_.aoMap,S.aoMapTransform))}function l(S,_){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,_.map&&(S.map.value=_.map,t(_.map,S.mapTransform))}function c(S,_){S.dashSize.value=_.dashSize,S.totalSize.value=_.dashSize+_.gapSize,S.scale.value=_.scale}function f(S,_,R,C){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,S.size.value=_.size*R,S.scale.value=C*.5,_.map&&(S.map.value=_.map,t(_.map,S.uvTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,t(_.alphaMap,S.alphaMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest)}function d(S,_){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,S.rotation.value=_.rotation,_.map&&(S.map.value=_.map,t(_.map,S.mapTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,t(_.alphaMap,S.alphaMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest)}function p(S,_){S.specular.value.copy(_.specular),S.shininess.value=Math.max(_.shininess,1e-4)}function m(S,_){_.gradientMap&&(S.gradientMap.value=_.gradientMap)}function v(S,_){S.metalness.value=_.metalness,_.metalnessMap&&(S.metalnessMap.value=_.metalnessMap,t(_.metalnessMap,S.metalnessMapTransform)),S.roughness.value=_.roughness,_.roughnessMap&&(S.roughnessMap.value=_.roughnessMap,t(_.roughnessMap,S.roughnessMapTransform)),_.envMap&&(S.envMapIntensity.value=_.envMapIntensity)}function y(S,_,R){S.ior.value=_.ior,_.sheen>0&&(S.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),S.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(S.sheenColorMap.value=_.sheenColorMap,t(_.sheenColorMap,S.sheenColorMapTransform)),_.sheenRoughnessMap&&(S.sheenRoughnessMap.value=_.sheenRoughnessMap,t(_.sheenRoughnessMap,S.sheenRoughnessMapTransform))),_.clearcoat>0&&(S.clearcoat.value=_.clearcoat,S.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(S.clearcoatMap.value=_.clearcoatMap,t(_.clearcoatMap,S.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,t(_.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(S.clearcoatNormalMap.value=_.clearcoatNormalMap,t(_.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===zn&&S.clearcoatNormalScale.value.negate())),_.dispersion>0&&(S.dispersion.value=_.dispersion),_.iridescence>0&&(S.iridescence.value=_.iridescence,S.iridescenceIOR.value=_.iridescenceIOR,S.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(S.iridescenceMap.value=_.iridescenceMap,t(_.iridescenceMap,S.iridescenceMapTransform)),_.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=_.iridescenceThicknessMap,t(_.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),_.transmission>0&&(S.transmission.value=_.transmission,S.transmissionSamplerMap.value=R.texture,S.transmissionSamplerSize.value.set(R.width,R.height),_.transmissionMap&&(S.transmissionMap.value=_.transmissionMap,t(_.transmissionMap,S.transmissionMapTransform)),S.thickness.value=_.thickness,_.thicknessMap&&(S.thicknessMap.value=_.thicknessMap,t(_.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=_.attenuationDistance,S.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(S.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(S.anisotropyMap.value=_.anisotropyMap,t(_.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=_.specularIntensity,S.specularColor.value.copy(_.specularColor),_.specularColorMap&&(S.specularColorMap.value=_.specularColorMap,t(_.specularColorMap,S.specularColorMapTransform)),_.specularIntensityMap&&(S.specularIntensityMap.value=_.specularIntensityMap,t(_.specularIntensityMap,S.specularIntensityMapTransform))}function E(S,_){_.matcap&&(S.matcap.value=_.matcap)}function M(S,_){const R=e.get(_).light;S.referencePosition.value.setFromMatrixPosition(R.matrixWorld),S.nearDistance.value=R.shadow.camera.near,S.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function w2(r,e,t,n){let s={},o={},l=[];const c=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function f(R,C){const b=C.program;n.uniformBlockBinding(R,b)}function d(R,C){let b=s[R.id];b===void 0&&(E(R),b=p(R),s[R.id]=b,R.addEventListener("dispose",S));const I=C.program;n.updateUBOMapping(R,I);const F=e.render.frame;o[R.id]!==F&&(v(R),o[R.id]=F)}function p(R){const C=m();R.__bindingPointIndex=C;const b=r.createBuffer(),I=R.__size,F=R.usage;return r.bindBuffer(r.UNIFORM_BUFFER,b),r.bufferData(r.UNIFORM_BUFFER,I,F),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,C,b),b}function m(){for(let R=0;R<c;R++)if(l.indexOf(R)===-1)return l.push(R),R;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(R){const C=s[R.id],b=R.uniforms,I=R.__cache;r.bindBuffer(r.UNIFORM_BUFFER,C);for(let F=0,U=b.length;F<U;F++){const X=Array.isArray(b[F])?b[F]:[b[F]];for(let P=0,L=X.length;P<L;P++){const z=X[P];if(y(z,F,P,I)===!0){const Z=z.__offset,ie=Array.isArray(z.value)?z.value:[z.value];let fe=0;for(let se=0;se<ie.length;se++){const oe=ie[se],de=M(oe);typeof oe=="number"||typeof oe=="boolean"?(z.__data[0]=oe,r.bufferSubData(r.UNIFORM_BUFFER,Z+fe,z.__data)):oe.isMatrix3?(z.__data[0]=oe.elements[0],z.__data[1]=oe.elements[1],z.__data[2]=oe.elements[2],z.__data[3]=0,z.__data[4]=oe.elements[3],z.__data[5]=oe.elements[4],z.__data[6]=oe.elements[5],z.__data[7]=0,z.__data[8]=oe.elements[6],z.__data[9]=oe.elements[7],z.__data[10]=oe.elements[8],z.__data[11]=0):(oe.toArray(z.__data,fe),fe+=de.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,Z,z.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function y(R,C,b,I){const F=R.value,U=C+"_"+b;if(I[U]===void 0)return typeof F=="number"||typeof F=="boolean"?I[U]=F:I[U]=F.clone(),!0;{const X=I[U];if(typeof F=="number"||typeof F=="boolean"){if(X!==F)return I[U]=F,!0}else if(X.equals(F)===!1)return X.copy(F),!0}return!1}function E(R){const C=R.uniforms;let b=0;const I=16;for(let U=0,X=C.length;U<X;U++){const P=Array.isArray(C[U])?C[U]:[C[U]];for(let L=0,z=P.length;L<z;L++){const Z=P[L],ie=Array.isArray(Z.value)?Z.value:[Z.value];for(let fe=0,se=ie.length;fe<se;fe++){const oe=ie[fe],de=M(oe),H=b%I,le=H%de.boundary,re=H+le;b+=le,re!==0&&I-re<de.storage&&(b+=I-re),Z.__data=new Float32Array(de.storage/Float32Array.BYTES_PER_ELEMENT),Z.__offset=b,b+=de.storage}}}const F=b%I;return F>0&&(b+=I-F),R.__size=b,R.__cache={},this}function M(R){const C={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(C.boundary=4,C.storage=4):R.isVector2?(C.boundary=8,C.storage=8):R.isVector3||R.isColor?(C.boundary=16,C.storage=12):R.isVector4?(C.boundary=16,C.storage=16):R.isMatrix3?(C.boundary=48,C.storage=48):R.isMatrix4?(C.boundary=64,C.storage=64):R.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",R),C}function S(R){const C=R.target;C.removeEventListener("dispose",S);const b=l.indexOf(C.__bindingPointIndex);l.splice(b,1),r.deleteBuffer(s[C.id]),delete s[C.id],delete o[C.id]}function _(){for(const R in s)r.deleteBuffer(s[R]);l=[],s={},o={}}return{bind:f,update:d,dispose:_}}class b2{constructor(e={}){const{canvas:t=AT(),context:n=null,depth:s=!0,stencil:o=!1,alpha:l=!1,antialias:c=!1,premultipliedAlpha:f=!0,preserveDrawingBuffer:d=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:m=!1,reversedDepthBuffer:v=!1}=e;this.isWebGLRenderer=!0;let y;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=n.getContextAttributes().alpha}else y=l;const E=new Uint32Array(4),M=new Int32Array(4);let S=null,_=null;const R=[],C=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=as,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const b=this;let I=!1;this._outputColorSpace=Sn;let F=0,U=0,X=null,P=-1,L=null;const z=new Lt,Z=new Lt;let ie=null;const fe=new mt(0);let se=0,oe=t.width,de=t.height,H=1,le=null,re=null;const O=new Lt(0,0,oe,de),ne=new Lt(0,0,oe,de);let Oe=!1;const $e=new Xp;let Ve=!1,Q=!1;const ue=new _t,Ee=new j,Ie=new Lt,Fe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let yt=!1;function on(){return X===null?H:1}let k=n;function Ot(A,$){return t.getContext(A,$)}try{const A={alpha:!0,depth:s,stencil:o,antialias:c,premultipliedAlpha:f,preserveDrawingBuffer:d,powerPreference:p,failIfMajorPerformanceCaveat:m};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Np}`),t.addEventListener("webglcontextlost",Ae,!1),t.addEventListener("webglcontextrestored",De,!1),t.addEventListener("webglcontextcreationerror",ye,!1),k===null){const $="webgl2";if(k=Ot($,A),k===null)throw Ot($)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let ht,st,Ge,Ht,We,ct,jt,Xt,D,w,K,he,ge,ae,Ze,be,Be,Je,Me,Le,at,Ke,Re,pt;function V(){ht=new FR(k),ht.init(),Ke=new _2(k,ht),st=new CR(k,ht,e,Ke),Ge=new g2(k,ht),st.reversedDepthBuffer&&v&&Ge.buffers.depth.setReversed(!0),Ht=new BR(k),We=new i2,ct=new v2(k,ht,Ge,We,st,Ke,Ht),jt=new LR(b),Xt=new UR(b),D=new jw(k),Re=new AR(k,D),w=new OR(k,D,Ht,Re),K=new HR(k,w,D,Ht),Me=new zR(k,st,ct),be=new PR(We),he=new n2(b,jt,Xt,ht,st,Re,be),ge=new T2(b,We),ae=new s2,Ze=new f2(ht),Je=new bR(b,jt,Xt,Ge,K,y,f),Be=new p2(b,K,st),pt=new w2(k,Ht,st,Ge),Le=new RR(k,ht,Ht),at=new kR(k,ht,Ht),Ht.programs=he.programs,b.capabilities=st,b.extensions=ht,b.properties=We,b.renderLists=ae,b.shadowMap=Be,b.state=Ge,b.info=Ht}V();const xe=new E2(b,k);this.xr=xe,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const A=ht.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=ht.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(A){A!==void 0&&(H=A,this.setSize(oe,de,!1))},this.getSize=function(A){return A.set(oe,de)},this.setSize=function(A,$,ee=!0){if(xe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}oe=A,de=$,t.width=Math.floor(A*H),t.height=Math.floor($*H),ee===!0&&(t.style.width=A+"px",t.style.height=$+"px"),this.setViewport(0,0,A,$)},this.getDrawingBufferSize=function(A){return A.set(oe*H,de*H).floor()},this.setDrawingBufferSize=function(A,$,ee){oe=A,de=$,H=ee,t.width=Math.floor(A*ee),t.height=Math.floor($*ee),this.setViewport(0,0,A,$)},this.getCurrentViewport=function(A){return A.copy(z)},this.getViewport=function(A){return A.copy(O)},this.setViewport=function(A,$,ee,te){A.isVector4?O.set(A.x,A.y,A.z,A.w):O.set(A,$,ee,te),Ge.viewport(z.copy(O).multiplyScalar(H).round())},this.getScissor=function(A){return A.copy(ne)},this.setScissor=function(A,$,ee,te){A.isVector4?ne.set(A.x,A.y,A.z,A.w):ne.set(A,$,ee,te),Ge.scissor(Z.copy(ne).multiplyScalar(H).round())},this.getScissorTest=function(){return Oe},this.setScissorTest=function(A){Ge.setScissorTest(Oe=A)},this.setOpaqueSort=function(A){le=A},this.setTransparentSort=function(A){re=A},this.getClearColor=function(A){return A.copy(Je.getClearColor())},this.setClearColor=function(){Je.setClearColor(...arguments)},this.getClearAlpha=function(){return Je.getClearAlpha()},this.setClearAlpha=function(){Je.setClearAlpha(...arguments)},this.clear=function(A=!0,$=!0,ee=!0){let te=0;if(A){let W=!1;if(X!==null){const Se=X.texture.format;W=Se===Hp||Se===zp||Se===Bp}if(W){const Se=X.texture.type,Ce=Se===Xi||Se===Bs||Se===rl||Se===sl||Se===Fp||Se===Op,ze=Je.getClearColor(),Ne=Je.getClearAlpha(),rt=ze.r,ot=ze.g,Qe=ze.b;Ce?(E[0]=rt,E[1]=ot,E[2]=Qe,E[3]=Ne,k.clearBufferuiv(k.COLOR,0,E)):(M[0]=rt,M[1]=ot,M[2]=Qe,M[3]=Ne,k.clearBufferiv(k.COLOR,0,M))}else te|=k.COLOR_BUFFER_BIT}$&&(te|=k.DEPTH_BUFFER_BIT),ee&&(te|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(te)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ae,!1),t.removeEventListener("webglcontextrestored",De,!1),t.removeEventListener("webglcontextcreationerror",ye,!1),Je.dispose(),ae.dispose(),Ze.dispose(),We.dispose(),jt.dispose(),Xt.dispose(),K.dispose(),Re.dispose(),pt.dispose(),he.dispose(),xe.dispose(),xe.removeEventListener("sessionstart",Mn),xe.removeEventListener("sessionend",Ws),Zn.stop()};function Ae(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function De(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;const A=Ht.autoReset,$=Be.enabled,ee=Be.autoUpdate,te=Be.needsUpdate,W=Be.type;V(),Ht.autoReset=A,Be.enabled=$,Be.autoUpdate=ee,Be.needsUpdate=te,Be.type=W}function ye(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function pe(A){const $=A.target;$.removeEventListener("dispose",pe),je($)}function je(A){ft(A),We.remove(A)}function ft(A){const $=We.get(A).programs;$!==void 0&&($.forEach(function(ee){he.releaseProgram(ee)}),A.isShaderMaterial&&he.releaseShaderCache(A))}this.renderBufferDirect=function(A,$,ee,te,W,Se){$===null&&($=Fe);const Ce=W.isMesh&&W.matrixWorld.determinant()<0,ze=er(A,$,ee,te,W);Ge.setMaterial(te,Ce);let Ne=ee.index,rt=1;if(te.wireframe===!0){if(Ne=w.getWireframeAttribute(ee),Ne===void 0)return;rt=2}const ot=ee.drawRange,Qe=ee.attributes.position;let lt=ot.start*rt,It=(ot.start+ot.count)*rt;Se!==null&&(lt=Math.max(lt,Se.start*rt),It=Math.min(It,(Se.start+Se.count)*rt)),Ne!==null?(lt=Math.max(lt,0),It=Math.min(It,Ne.count)):Qe!=null&&(lt=Math.max(lt,0),It=Math.min(It,Qe.count));const At=It-lt;if(At<0||At===1/0)return;Re.setup(W,te,ze,ee,Ne);let Vt,Nt=Le;if(Ne!==null&&(Vt=D.get(Ne),Nt=at,Nt.setIndex(Vt)),W.isMesh)te.wireframe===!0?(Ge.setLineWidth(te.wireframeLinewidth*on()),Nt.setMode(k.LINES)):Nt.setMode(k.TRIANGLES);else if(W.isLine){let tt=te.linewidth;tt===void 0&&(tt=1),Ge.setLineWidth(tt*on()),W.isLineSegments?Nt.setMode(k.LINES):W.isLineLoop?Nt.setMode(k.LINE_LOOP):Nt.setMode(k.LINE_STRIP)}else W.isPoints?Nt.setMode(k.POINTS):W.isSprite&&Nt.setMode(k.TRIANGLES);if(W.isBatchedMesh)if(W._multiDrawInstances!==null)fl("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Nt.renderMultiDrawInstances(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount,W._multiDrawInstances);else if(ht.get("WEBGL_multi_draw"))Nt.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{const tt=W._multiDrawStarts,kt=W._multiDrawCounts,Et=W._multiDrawCount,ln=Ne?D.get(Ne).bytesPerElement:1,_i=We.get(te).currentProgram.getUniforms();for(let Dn=0;Dn<Et;Dn++)_i.setValue(k,"_gl_DrawID",Dn),Nt.render(tt[Dn]/ln,kt[Dn])}else if(W.isInstancedMesh)Nt.renderInstances(lt,At,W.count);else if(ee.isInstancedBufferGeometry){const tt=ee._maxInstanceCount!==void 0?ee._maxInstanceCount:1/0,kt=Math.min(ee.instanceCount,tt);Nt.renderInstances(lt,At,kt)}else Nt.render(lt,At)};function Dt(A,$,ee){A.transparent===!0&&A.side===Hi&&A.forceSinglePass===!1?(A.side=zn,A.needsUpdate=!0,Xs(A,$,ee),A.side=Mr,A.needsUpdate=!0,Xs(A,$,ee),A.side=Hi):Xs(A,$,ee)}this.compile=function(A,$,ee=null){ee===null&&(ee=A),_=Ze.get(ee),_.init($),C.push(_),ee.traverseVisible(function(W){W.isLight&&W.layers.test($.layers)&&(_.pushLight(W),W.castShadow&&_.pushShadow(W))}),A!==ee&&A.traverseVisible(function(W){W.isLight&&W.layers.test($.layers)&&(_.pushLight(W),W.castShadow&&_.pushShadow(W))}),_.setupLights();const te=new Set;return A.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;const Se=W.material;if(Se)if(Array.isArray(Se))for(let Ce=0;Ce<Se.length;Ce++){const ze=Se[Ce];Dt(ze,ee,W),te.add(ze)}else Dt(Se,ee,W),te.add(Se)}),_=C.pop(),te},this.compileAsync=function(A,$,ee=null){const te=this.compile(A,$,ee);return new Promise(W=>{function Se(){if(te.forEach(function(Ce){We.get(Ce).currentProgram.isReady()&&te.delete(Ce)}),te.size===0){W(A);return}setTimeout(Se,10)}ht.get("KHR_parallel_shader_compile")!==null?Se():setTimeout(Se,10)})};let bt=null;function ai(A){bt&&bt(A)}function Mn(){Zn.stop()}function Ws(){Zn.start()}const Zn=new tx;Zn.setAnimationLoop(ai),typeof self<"u"&&Zn.setContext(self),this.setAnimationLoop=function(A){bt=A,xe.setAnimationLoop(A),A===null?Zn.stop():Zn.start()},xe.addEventListener("sessionstart",Mn),xe.addEventListener("sessionend",Ws),this.render=function(A,$){if($!==void 0&&$.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),$.parent===null&&$.matrixWorldAutoUpdate===!0&&$.updateMatrixWorld(),xe.enabled===!0&&xe.isPresenting===!0&&(xe.cameraAutoUpdate===!0&&xe.updateCamera($),$=xe.getCamera()),A.isScene===!0&&A.onBeforeRender(b,A,$,X),_=Ze.get(A,C.length),_.init($),C.push(_),ue.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),$e.setFromProjectionMatrix(ue,Vi,$.reversedDepth),Q=this.localClippingEnabled,Ve=be.init(this.clippingPlanes,Q),S=ae.get(A,R.length),S.init(),R.push(S),xe.enabled===!0&&xe.isPresenting===!0){const Se=b.xr.getDepthSensingMesh();Se!==null&&so(Se,$,-1/0,b.sortObjects)}so(A,$,0,b.sortObjects),S.finish(),b.sortObjects===!0&&S.sort(le,re),yt=xe.enabled===!1||xe.isPresenting===!1||xe.hasDepthSensing()===!1,yt&&Je.addToRenderList(S,A),this.info.render.frame++,Ve===!0&&be.beginShadows();const ee=_.state.shadowsArray;Be.render(ee,A,$),Ve===!0&&be.endShadows(),this.info.autoReset===!0&&this.info.reset();const te=S.opaque,W=S.transmissive;if(_.setupLights(),$.isArrayCamera){const Se=$.cameras;if(W.length>0)for(let Ce=0,ze=Se.length;Ce<ze;Ce++){const Ne=Se[Ce];fs(te,W,A,Ne)}yt&&Je.render(A);for(let Ce=0,ze=Se.length;Ce<ze;Ce++){const Ne=Se[Ce];Cr(S,A,Ne,Ne.viewport)}}else W.length>0&&fs(te,W,A,$),yt&&Je.render(A),Cr(S,A,$);X!==null&&U===0&&(ct.updateMultisampleRenderTarget(X),ct.updateRenderTargetMipmap(X)),A.isScene===!0&&A.onAfterRender(b,A,$),Re.resetDefaultState(),P=-1,L=null,C.pop(),C.length>0?(_=C[C.length-1],Ve===!0&&be.setGlobalState(b.clippingPlanes,_.state.camera)):_=null,R.pop(),R.length>0?S=R[R.length-1]:S=null};function so(A,$,ee,te){if(A.visible===!1)return;if(A.layers.test($.layers)){if(A.isGroup)ee=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update($);else if(A.isLight)_.pushLight(A),A.castShadow&&_.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||$e.intersectsSprite(A)){te&&Ie.setFromMatrixPosition(A.matrixWorld).applyMatrix4(ue);const Ce=K.update(A),ze=A.material;ze.visible&&S.push(A,Ce,ze,ee,Ie.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||$e.intersectsObject(A))){const Ce=K.update(A),ze=A.material;if(te&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Ie.copy(A.boundingSphere.center)):(Ce.boundingSphere===null&&Ce.computeBoundingSphere(),Ie.copy(Ce.boundingSphere.center)),Ie.applyMatrix4(A.matrixWorld).applyMatrix4(ue)),Array.isArray(ze)){const Ne=Ce.groups;for(let rt=0,ot=Ne.length;rt<ot;rt++){const Qe=Ne[rt],lt=ze[Qe.materialIndex];lt&&lt.visible&&S.push(A,Ce,lt,ee,Ie.z,Qe)}}else ze.visible&&S.push(A,Ce,ze,ee,Ie.z,null)}}const Se=A.children;for(let Ce=0,ze=Se.length;Ce<ze;Ce++)so(Se[Ce],$,ee,te)}function Cr(A,$,ee,te){const W=A.opaque,Se=A.transmissive,Ce=A.transparent;_.setupLightsView(ee),Ve===!0&&be.setGlobalState(b.clippingPlanes,ee),te&&Ge.viewport(z.copy(te)),W.length>0&&Qi(W,$,ee),Se.length>0&&Qi(Se,$,ee),Ce.length>0&&Qi(Ce,$,ee),Ge.buffers.depth.setTest(!0),Ge.buffers.depth.setMask(!0),Ge.buffers.color.setMask(!0),Ge.setPolygonOffset(!1)}function fs(A,$,ee,te){if((ee.isScene===!0?ee.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[te.id]===void 0&&(_.state.transmissionRenderTarget[te.id]=new zs(1,1,{generateMipmaps:!0,type:ht.has("EXT_color_buffer_half_float")||ht.has("EXT_color_buffer_float")?gl:Xi,minFilter:_r,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Rt.workingColorSpace}));const Se=_.state.transmissionRenderTarget[te.id],Ce=te.viewport||z;Se.setSize(Ce.z*b.transmissionResolutionScale,Ce.w*b.transmissionResolutionScale);const ze=b.getRenderTarget(),Ne=b.getActiveCubeFace(),rt=b.getActiveMipmapLevel();b.setRenderTarget(Se),b.getClearColor(fe),se=b.getClearAlpha(),se<1&&b.setClearColor(16777215,.5),b.clear(),yt&&Je.render(ee);const ot=b.toneMapping;b.toneMapping=as;const Qe=te.viewport;if(te.viewport!==void 0&&(te.viewport=void 0),_.setupLightsView(te),Ve===!0&&be.setGlobalState(b.clippingPlanes,te),Qi(A,ee,te),ct.updateMultisampleRenderTarget(Se),ct.updateRenderTargetMipmap(Se),ht.has("WEBGL_multisampled_render_to_texture")===!1){let lt=!1;for(let It=0,At=$.length;It<At;It++){const Vt=$[It],Nt=Vt.object,tt=Vt.geometry,kt=Vt.material,Et=Vt.group;if(kt.side===Hi&&Nt.layers.test(te.layers)){const ln=kt.side;kt.side=zn,kt.needsUpdate=!0,js(Nt,ee,te,tt,kt,Et),kt.side=ln,kt.needsUpdate=!0,lt=!0}}lt===!0&&(ct.updateMultisampleRenderTarget(Se),ct.updateRenderTargetMipmap(Se))}b.setRenderTarget(ze,Ne,rt),b.setClearColor(fe,se),Qe!==void 0&&(te.viewport=Qe),b.toneMapping=ot}function Qi(A,$,ee){const te=$.isScene===!0?$.overrideMaterial:null;for(let W=0,Se=A.length;W<Se;W++){const Ce=A[W],ze=Ce.object,Ne=Ce.geometry,rt=Ce.group;let ot=Ce.material;ot.allowOverride===!0&&te!==null&&(ot=te),ze.layers.test(ee.layers)&&js(ze,$,ee,Ne,ot,rt)}}function js(A,$,ee,te,W,Se){A.onBeforeRender(b,$,ee,te,W,Se),A.modelViewMatrix.multiplyMatrices(ee.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),W.onBeforeRender(b,$,ee,te,A,Se),W.transparent===!0&&W.side===Hi&&W.forceSinglePass===!1?(W.side=zn,W.needsUpdate=!0,b.renderBufferDirect(ee,$,te,W,A,Se),W.side=Mr,W.needsUpdate=!0,b.renderBufferDirect(ee,$,te,W,A,Se),W.side=Hi):b.renderBufferDirect(ee,$,te,W,A,Se),A.onAfterRender(b,$,ee,te,W,Se)}function Xs(A,$,ee){$.isScene!==!0&&($=Fe);const te=We.get(A),W=_.state.lights,Se=_.state.shadowsArray,Ce=W.state.version,ze=he.getParameters(A,W.state,Se,$,ee),Ne=he.getProgramCacheKey(ze);let rt=te.programs;te.environment=A.isMeshStandardMaterial?$.environment:null,te.fog=$.fog,te.envMap=(A.isMeshStandardMaterial?Xt:jt).get(A.envMap||te.environment),te.envMapRotation=te.environment!==null&&A.envMap===null?$.environmentRotation:A.envMapRotation,rt===void 0&&(A.addEventListener("dispose",pe),rt=new Map,te.programs=rt);let ot=rt.get(Ne);if(ot!==void 0){if(te.currentProgram===ot&&te.lightsStateVersion===Ce)return Tl(A,ze),ot}else ze.uniforms=he.getUniforms(A),A.onBeforeCompile(ze,b),ot=he.acquireProgram(ze,Ne),rt.set(Ne,ot),te.uniforms=ze.uniforms;const Qe=te.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Qe.clippingPlanes=be.uniform),Tl(A,ze),te.needsLights=bl(A),te.lightsStateVersion=Ce,te.needsLights&&(Qe.ambientLightColor.value=W.state.ambient,Qe.lightProbe.value=W.state.probe,Qe.directionalLights.value=W.state.directional,Qe.directionalLightShadows.value=W.state.directionalShadow,Qe.spotLights.value=W.state.spot,Qe.spotLightShadows.value=W.state.spotShadow,Qe.rectAreaLights.value=W.state.rectArea,Qe.ltc_1.value=W.state.rectAreaLTC1,Qe.ltc_2.value=W.state.rectAreaLTC2,Qe.pointLights.value=W.state.point,Qe.pointLightShadows.value=W.state.pointShadow,Qe.hemisphereLights.value=W.state.hemi,Qe.directionalShadowMap.value=W.state.directionalShadowMap,Qe.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Qe.spotShadowMap.value=W.state.spotShadowMap,Qe.spotLightMatrix.value=W.state.spotLightMatrix,Qe.spotLightMap.value=W.state.spotLightMap,Qe.pointShadowMap.value=W.state.pointShadowMap,Qe.pointShadowMatrix.value=W.state.pointShadowMatrix),te.currentProgram=ot,te.uniformsList=null,ot}function Ml(A){if(A.uniformsList===null){const $=A.currentProgram.getUniforms();A.uniformsList=mc.seqWithValue($.seq,A.uniforms)}return A.uniformsList}function Tl(A,$){const ee=We.get(A);ee.outputColorSpace=$.outputColorSpace,ee.batching=$.batching,ee.batchingColor=$.batchingColor,ee.instancing=$.instancing,ee.instancingColor=$.instancingColor,ee.instancingMorph=$.instancingMorph,ee.skinning=$.skinning,ee.morphTargets=$.morphTargets,ee.morphNormals=$.morphNormals,ee.morphColors=$.morphColors,ee.morphTargetsCount=$.morphTargetsCount,ee.numClippingPlanes=$.numClippingPlanes,ee.numIntersection=$.numClipIntersection,ee.vertexAlphas=$.vertexAlphas,ee.vertexTangents=$.vertexTangents,ee.toneMapping=$.toneMapping}function er(A,$,ee,te,W){$.isScene!==!0&&($=Fe),ct.resetTextureUnits();const Se=$.fog,Ce=te.isMeshStandardMaterial?$.environment:null,ze=X===null?b.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:Vn,Ne=(te.isMeshStandardMaterial?Xt:jt).get(te.envMap||Ce),rt=te.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,ot=!!ee.attributes.tangent&&(!!te.normalMap||te.anisotropy>0),Qe=!!ee.morphAttributes.position,lt=!!ee.morphAttributes.normal,It=!!ee.morphAttributes.color;let At=as;te.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(At=b.toneMapping);const Vt=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,Nt=Vt!==void 0?Vt.length:0,tt=We.get(te),kt=_.state.lights;if(Ve===!0&&(Q===!0||A!==L)){const nn=A===L&&te.id===P;be.setState(te,A,nn)}let Et=!1;te.version===tt.__version?(tt.needsLights&&tt.lightsStateVersion!==kt.state.version||tt.outputColorSpace!==ze||W.isBatchedMesh&&tt.batching===!1||!W.isBatchedMesh&&tt.batching===!0||W.isBatchedMesh&&tt.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&tt.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&tt.instancing===!1||!W.isInstancedMesh&&tt.instancing===!0||W.isSkinnedMesh&&tt.skinning===!1||!W.isSkinnedMesh&&tt.skinning===!0||W.isInstancedMesh&&tt.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&tt.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&tt.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&tt.instancingMorph===!1&&W.morphTexture!==null||tt.envMap!==Ne||te.fog===!0&&tt.fog!==Se||tt.numClippingPlanes!==void 0&&(tt.numClippingPlanes!==be.numPlanes||tt.numIntersection!==be.numIntersection)||tt.vertexAlphas!==rt||tt.vertexTangents!==ot||tt.morphTargets!==Qe||tt.morphNormals!==lt||tt.morphColors!==It||tt.toneMapping!==At||tt.morphTargetsCount!==Nt)&&(Et=!0):(Et=!0,tt.__version=te.version);let ln=tt.currentProgram;Et===!0&&(ln=Xs(te,$,W));let _i=!1,Dn=!1,ds=!1;const Gt=ln.getUniforms(),Nn=tt.uniforms;if(Ge.useProgram(ln.program)&&(_i=!0,Dn=!0,ds=!0),te.id!==P&&(P=te.id,Dn=!0),_i||L!==A){Ge.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Gt.setValue(k,"projectionMatrix",A.projectionMatrix),Gt.setValue(k,"viewMatrix",A.matrixWorldInverse);const wn=Gt.map.cameraPosition;wn!==void 0&&wn.setValue(k,Ee.setFromMatrixPosition(A.matrixWorld)),st.logarithmicDepthBuffer&&Gt.setValue(k,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(te.isMeshPhongMaterial||te.isMeshToonMaterial||te.isMeshLambertMaterial||te.isMeshBasicMaterial||te.isMeshStandardMaterial||te.isShaderMaterial)&&Gt.setValue(k,"isOrthographic",A.isOrthographicCamera===!0),L!==A&&(L=A,Dn=!0,ds=!0)}if(W.isSkinnedMesh){Gt.setOptional(k,W,"bindMatrix"),Gt.setOptional(k,W,"bindMatrixInverse");const nn=W.skeleton;nn&&(nn.boneTexture===null&&nn.computeBoneTexture(),Gt.setValue(k,"boneTexture",nn.boneTexture,ct))}W.isBatchedMesh&&(Gt.setOptional(k,W,"batchingTexture"),Gt.setValue(k,"batchingTexture",W._matricesTexture,ct),Gt.setOptional(k,W,"batchingIdTexture"),Gt.setValue(k,"batchingIdTexture",W._indirectTexture,ct),Gt.setOptional(k,W,"batchingColorTexture"),W._colorsTexture!==null&&Gt.setValue(k,"batchingColorTexture",W._colorsTexture,ct));const Tn=ee.morphAttributes;if((Tn.position!==void 0||Tn.normal!==void 0||Tn.color!==void 0)&&Me.update(W,ee,ln),(Dn||tt.receiveShadow!==W.receiveShadow)&&(tt.receiveShadow=W.receiveShadow,Gt.setValue(k,"receiveShadow",W.receiveShadow)),te.isMeshGouraudMaterial&&te.envMap!==null&&(Nn.envMap.value=Ne,Nn.flipEnvMap.value=Ne.isCubeTexture&&Ne.isRenderTargetTexture===!1?-1:1),te.isMeshStandardMaterial&&te.envMap===null&&$.environment!==null&&(Nn.envMapIntensity.value=$.environmentIntensity),Dn&&(Gt.setValue(k,"toneMappingExposure",b.toneMappingExposure),tt.needsLights&&wl(Nn,ds),Se&&te.fog===!0&&ge.refreshFogUniforms(Nn,Se),ge.refreshMaterialUniforms(Nn,te,H,de,_.state.transmissionRenderTarget[A.id]),mc.upload(k,Ml(tt),Nn,ct)),te.isShaderMaterial&&te.uniformsNeedUpdate===!0&&(mc.upload(k,Ml(tt),Nn,ct),te.uniformsNeedUpdate=!1),te.isSpriteMaterial&&Gt.setValue(k,"center",W.center),Gt.setValue(k,"modelViewMatrix",W.modelViewMatrix),Gt.setValue(k,"normalMatrix",W.normalMatrix),Gt.setValue(k,"modelMatrix",W.matrixWorld),te.isShaderMaterial||te.isRawShaderMaterial){const nn=te.uniformsGroups;for(let wn=0,hs=nn.length;wn<hs;wn++){const Mt=nn[wn];pt.update(Mt,ln),pt.bind(Mt,ln)}}return ln}function wl(A,$){A.ambientLightColor.needsUpdate=$,A.lightProbe.needsUpdate=$,A.directionalLights.needsUpdate=$,A.directionalLightShadows.needsUpdate=$,A.pointLights.needsUpdate=$,A.pointLightShadows.needsUpdate=$,A.spotLights.needsUpdate=$,A.spotLightShadows.needsUpdate=$,A.rectAreaLights.needsUpdate=$,A.hemisphereLights.needsUpdate=$}function bl(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return X},this.setRenderTargetTextures=function(A,$,ee){const te=We.get(A);te.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,te.__autoAllocateDepthBuffer===!1&&(te.__useRenderToTexture=!1),We.get(A.texture).__webglTexture=$,We.get(A.depthTexture).__webglTexture=te.__autoAllocateDepthBuffer?void 0:ee,te.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,$){const ee=We.get(A);ee.__webglFramebuffer=$,ee.__useDefaultFramebuffer=$===void 0};const zc=k.createFramebuffer();this.setRenderTarget=function(A,$=0,ee=0){X=A,F=$,U=ee;let te=!0,W=null,Se=!1,Ce=!1;if(A){const Ne=We.get(A);if(Ne.__useDefaultFramebuffer!==void 0)Ge.bindFramebuffer(k.FRAMEBUFFER,null),te=!1;else if(Ne.__webglFramebuffer===void 0)ct.setupRenderTarget(A);else if(Ne.__hasExternalTextures)ct.rebindTextures(A,We.get(A.texture).__webglTexture,We.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Qe=A.depthTexture;if(Ne.__boundDepthTexture!==Qe){if(Qe!==null&&We.has(Qe)&&(A.width!==Qe.image.width||A.height!==Qe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ct.setupDepthRenderbuffer(A)}}const rt=A.texture;(rt.isData3DTexture||rt.isDataArrayTexture||rt.isCompressedArrayTexture)&&(Ce=!0);const ot=We.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(ot[$])?W=ot[$][ee]:W=ot[$],Se=!0):A.samples>0&&ct.useMultisampledRTT(A)===!1?W=We.get(A).__webglMultisampledFramebuffer:Array.isArray(ot)?W=ot[ee]:W=ot,z.copy(A.viewport),Z.copy(A.scissor),ie=A.scissorTest}else z.copy(O).multiplyScalar(H).floor(),Z.copy(ne).multiplyScalar(H).floor(),ie=Oe;if(ee!==0&&(W=zc),Ge.bindFramebuffer(k.FRAMEBUFFER,W)&&te&&Ge.drawBuffers(A,W),Ge.viewport(z),Ge.scissor(Z),Ge.setScissorTest(ie),Se){const Ne=We.get(A.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+$,Ne.__webglTexture,ee)}else if(Ce){const Ne=$;for(let rt=0;rt<A.textures.length;rt++){const ot=We.get(A.textures[rt]);k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0+rt,ot.__webglTexture,ee,Ne)}}else if(A!==null&&ee!==0){const Ne=We.get(A.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Ne.__webglTexture,ee)}P=-1},this.readRenderTargetPixels=function(A,$,ee,te,W,Se,Ce,ze=0){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=We.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ce!==void 0&&(Ne=Ne[Ce]),Ne){Ge.bindFramebuffer(k.FRAMEBUFFER,Ne);try{const rt=A.textures[ze],ot=rt.format,Qe=rt.type;if(!st.textureFormatReadable(ot)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!st.textureTypeReadable(Qe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}$>=0&&$<=A.width-te&&ee>=0&&ee<=A.height-W&&(A.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+ze),k.readPixels($,ee,te,W,Ke.convert(ot),Ke.convert(Qe),Se))}finally{const rt=X!==null?We.get(X).__webglFramebuffer:null;Ge.bindFramebuffer(k.FRAMEBUFFER,rt)}}},this.readRenderTargetPixelsAsync=async function(A,$,ee,te,W,Se,Ce,ze=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ne=We.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ce!==void 0&&(Ne=Ne[Ce]),Ne)if($>=0&&$<=A.width-te&&ee>=0&&ee<=A.height-W){Ge.bindFramebuffer(k.FRAMEBUFFER,Ne);const rt=A.textures[ze],ot=rt.format,Qe=rt.type;if(!st.textureFormatReadable(ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!st.textureTypeReadable(Qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const lt=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,lt),k.bufferData(k.PIXEL_PACK_BUFFER,Se.byteLength,k.STREAM_READ),A.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+ze),k.readPixels($,ee,te,W,Ke.convert(ot),Ke.convert(Qe),0);const It=X!==null?We.get(X).__webglFramebuffer:null;Ge.bindFramebuffer(k.FRAMEBUFFER,It);const At=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await RT(k,At,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,lt),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,Se),k.deleteBuffer(lt),k.deleteSync(At),Se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,$=null,ee=0){const te=Math.pow(2,-ee),W=Math.floor(A.image.width*te),Se=Math.floor(A.image.height*te),Ce=$!==null?$.x:0,ze=$!==null?$.y:0;ct.setTexture2D(A,0),k.copyTexSubImage2D(k.TEXTURE_2D,ee,0,0,Ce,ze,W,Se),Ge.unbindTexture()};const Al=k.createFramebuffer(),Rl=k.createFramebuffer();this.copyTextureToTexture=function(A,$,ee=null,te=null,W=0,Se=null){Se===null&&(W!==0?(fl("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Se=W,W=0):Se=0);let Ce,ze,Ne,rt,ot,Qe,lt,It,At;const Vt=A.isCompressedTexture?A.mipmaps[Se]:A.image;if(ee!==null)Ce=ee.max.x-ee.min.x,ze=ee.max.y-ee.min.y,Ne=ee.isBox3?ee.max.z-ee.min.z:1,rt=ee.min.x,ot=ee.min.y,Qe=ee.isBox3?ee.min.z:0;else{const Tn=Math.pow(2,-W);Ce=Math.floor(Vt.width*Tn),ze=Math.floor(Vt.height*Tn),A.isDataArrayTexture?Ne=Vt.depth:A.isData3DTexture?Ne=Math.floor(Vt.depth*Tn):Ne=1,rt=0,ot=0,Qe=0}te!==null?(lt=te.x,It=te.y,At=te.z):(lt=0,It=0,At=0);const Nt=Ke.convert($.format),tt=Ke.convert($.type);let kt;$.isData3DTexture?(ct.setTexture3D($,0),kt=k.TEXTURE_3D):$.isDataArrayTexture||$.isCompressedArrayTexture?(ct.setTexture2DArray($,0),kt=k.TEXTURE_2D_ARRAY):(ct.setTexture2D($,0),kt=k.TEXTURE_2D),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,$.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,$.unpackAlignment);const Et=k.getParameter(k.UNPACK_ROW_LENGTH),ln=k.getParameter(k.UNPACK_IMAGE_HEIGHT),_i=k.getParameter(k.UNPACK_SKIP_PIXELS),Dn=k.getParameter(k.UNPACK_SKIP_ROWS),ds=k.getParameter(k.UNPACK_SKIP_IMAGES);k.pixelStorei(k.UNPACK_ROW_LENGTH,Vt.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Vt.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,rt),k.pixelStorei(k.UNPACK_SKIP_ROWS,ot),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Qe);const Gt=A.isDataArrayTexture||A.isData3DTexture,Nn=$.isDataArrayTexture||$.isData3DTexture;if(A.isDepthTexture){const Tn=We.get(A),nn=We.get($),wn=We.get(Tn.__renderTarget),hs=We.get(nn.__renderTarget);Ge.bindFramebuffer(k.READ_FRAMEBUFFER,wn.__webglFramebuffer),Ge.bindFramebuffer(k.DRAW_FRAMEBUFFER,hs.__webglFramebuffer);for(let Mt=0;Mt<Ne;Mt++)Gt&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,We.get(A).__webglTexture,W,Qe+Mt),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,We.get($).__webglTexture,Se,At+Mt)),k.blitFramebuffer(rt,ot,Ce,ze,lt,It,Ce,ze,k.DEPTH_BUFFER_BIT,k.NEAREST);Ge.bindFramebuffer(k.READ_FRAMEBUFFER,null),Ge.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(W!==0||A.isRenderTargetTexture||We.has(A)){const Tn=We.get(A),nn=We.get($);Ge.bindFramebuffer(k.READ_FRAMEBUFFER,Al),Ge.bindFramebuffer(k.DRAW_FRAMEBUFFER,Rl);for(let wn=0;wn<Ne;wn++)Gt?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Tn.__webglTexture,W,Qe+wn):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Tn.__webglTexture,W),Nn?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,nn.__webglTexture,Se,At+wn):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,nn.__webglTexture,Se),W!==0?k.blitFramebuffer(rt,ot,Ce,ze,lt,It,Ce,ze,k.COLOR_BUFFER_BIT,k.NEAREST):Nn?k.copyTexSubImage3D(kt,Se,lt,It,At+wn,rt,ot,Ce,ze):k.copyTexSubImage2D(kt,Se,lt,It,rt,ot,Ce,ze);Ge.bindFramebuffer(k.READ_FRAMEBUFFER,null),Ge.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else Nn?A.isDataTexture||A.isData3DTexture?k.texSubImage3D(kt,Se,lt,It,At,Ce,ze,Ne,Nt,tt,Vt.data):$.isCompressedArrayTexture?k.compressedTexSubImage3D(kt,Se,lt,It,At,Ce,ze,Ne,Nt,Vt.data):k.texSubImage3D(kt,Se,lt,It,At,Ce,ze,Ne,Nt,tt,Vt):A.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,Se,lt,It,Ce,ze,Nt,tt,Vt.data):A.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,Se,lt,It,Vt.width,Vt.height,Nt,Vt.data):k.texSubImage2D(k.TEXTURE_2D,Se,lt,It,Ce,ze,Nt,tt,Vt);k.pixelStorei(k.UNPACK_ROW_LENGTH,Et),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,ln),k.pixelStorei(k.UNPACK_SKIP_PIXELS,_i),k.pixelStorei(k.UNPACK_SKIP_ROWS,Dn),k.pixelStorei(k.UNPACK_SKIP_IMAGES,ds),Se===0&&$.generateMipmaps&&k.generateMipmap(kt),Ge.unbindTexture()},this.initRenderTarget=function(A){We.get(A).__webglFramebuffer===void 0&&ct.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?ct.setTextureCube(A,0):A.isData3DTexture?ct.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?ct.setTexture2DArray(A,0):ct.setTexture2D(A,0),Ge.unbindTexture()},this.resetState=function(){F=0,U=0,X=null,Ge.reset(),Re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Rt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Rt._getUnpackColorSpace()}}const A2=()=>{const r=dy();return Xe.jsx("div",{className:"flex flex-col items-center justify-center h-screen",children:Xe.jsx("button",{className:"w-44 h-10 rounded-full border border-[var(--color-border)] bg-[var(--color-btn-bg)]",onClick:()=>r("/wish"),children:"Touch"})})},ax=ce.createContext(),R2=({children:r})=>{const[e,t]=ce.useState(()=>localStorage.getItem("theme")||"dark");return ce.useEffect(()=>{document.documentElement.setAttribute("data-theme",e),localStorage.setItem("theme",e)},[e]),Xe.jsx(ax.Provider,{value:{theme:e,setTheme:t},children:r})};/*!
 * Font Awesome Free 7.0.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2025 Fonticons, Inc.
 */function up(r,e){(e==null||e>r.length)&&(e=r.length);for(var t=0,n=Array(e);t<e;t++)n[t]=r[t];return n}function C2(r){if(Array.isArray(r))return r}function P2(r){if(Array.isArray(r))return up(r)}function L2(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}function I2(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,ox(n.key),n)}}function D2(r,e,t){return e&&I2(r.prototype,e),Object.defineProperty(r,"prototype",{writable:!1}),r}function gc(r,e){var t=typeof Symbol<"u"&&r[Symbol.iterator]||r["@@iterator"];if(!t){if(Array.isArray(r)||(t=nm(r))||e){t&&(r=t);var n=0,s=function(){};return{s,n:function(){return n>=r.length?{done:!0}:{done:!1,value:r[n++]}},e:function(f){throw f},f:s}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var o,l=!0,c=!1;return{s:function(){t=t.call(r)},n:function(){var f=t.next();return l=f.done,f},e:function(f){c=!0,o=f},f:function(){try{l||t.return==null||t.return()}finally{if(c)throw o}}}}function wt(r,e,t){return(e=ox(e))in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}function N2(r){if(typeof Symbol<"u"&&r[Symbol.iterator]!=null||r["@@iterator"]!=null)return Array.from(r)}function U2(r,e){var t=r==null?null:typeof Symbol<"u"&&r[Symbol.iterator]||r["@@iterator"];if(t!=null){var n,s,o,l,c=[],f=!0,d=!1;try{if(o=(t=t.call(r)).next,e===0){if(Object(t)!==t)return;f=!1}else for(;!(f=(n=o.call(t)).done)&&(c.push(n.value),c.length!==e);f=!0);}catch(p){d=!0,s=p}finally{try{if(!f&&t.return!=null&&(l=t.return(),Object(l)!==l))return}finally{if(d)throw s}}return c}}function F2(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function O2(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function m0(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);e&&(n=n.filter(function(s){return Object.getOwnPropertyDescriptor(r,s).enumerable})),t.push.apply(t,n)}return t}function Te(r){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?m0(Object(t),!0).forEach(function(n){wt(r,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):m0(Object(t)).forEach(function(n){Object.defineProperty(r,n,Object.getOwnPropertyDescriptor(t,n))})}return r}function Uc(r,e){return C2(r)||U2(r,e)||nm(r,e)||F2()}function Di(r){return P2(r)||N2(r)||nm(r)||O2()}function k2(r,e){if(typeof r!="object"||!r)return r;var t=r[Symbol.toPrimitive];if(t!==void 0){var n=t.call(r,e);if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(r)}function ox(r){var e=k2(r,"string");return typeof e=="symbol"?e:e+""}function wc(r){"@babel/helpers - typeof";return wc=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},wc(r)}function nm(r,e){if(r){if(typeof r=="string")return up(r,e);var t={}.toString.call(r).slice(8,-1);return t==="Object"&&r.constructor&&(t=r.constructor.name),t==="Map"||t==="Set"?Array.from(r):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?up(r,e):void 0}}var g0=function(){},im={},lx={},ux=null,cx={mark:g0,measure:g0};try{typeof window<"u"&&(im=window),typeof document<"u"&&(lx=document),typeof MutationObserver<"u"&&(ux=MutationObserver),typeof performance<"u"&&(cx=performance)}catch{}var B2=im.navigator||{},v0=B2.userAgent,_0=v0===void 0?"":v0,os=im,Kt=lx,y0=ux,rc=cx;os.document;var Rr=!!Kt.documentElement&&!!Kt.head&&typeof Kt.addEventListener=="function"&&typeof Kt.createElement=="function",fx=~_0.indexOf("MSIE")||~_0.indexOf("Trident/"),ah,z2=/fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|jr|jfr|jdr|cr|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,H2=/Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Slab Press|Slab|Whiteboard)?.*/i,dx={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"},slab:{"fa-regular":"regular",faslr:"regular"},"slab-press":{"fa-regular":"regular",faslpr:"regular"},thumbprint:{"fa-light":"light",fatl:"light"},whiteboard:{"fa-semibold":"semibold",fawsb:"semibold"},notdog:{"fa-solid":"solid",fans:"solid"},"notdog-duo":{"fa-solid":"solid",fands:"solid"},etch:{"fa-solid":"solid",faes:"solid"},jelly:{"fa-regular":"regular",fajr:"regular"},"jelly-fill":{"fa-regular":"regular",fajfr:"regular"},"jelly-duo":{"fa-regular":"regular",fajdr:"regular"},chisel:{"fa-regular":"regular",facr:"regular"}},V2={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},hx=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press"],En="classic",xl="duotone",px="sharp",mx="sharp-duotone",gx="chisel",vx="etch",_x="jelly",yx="jelly-duo",xx="jelly-fill",Sx="notdog",Ex="notdog-duo",Mx="slab",Tx="slab-press",wx="thumbprint",bx="whiteboard",G2="Classic",W2="Duotone",j2="Sharp",X2="Sharp Duotone",$2="Chisel",Y2="Etch",K2="Jelly",q2="Jelly Duo",Z2="Jelly Fill",J2="Notdog",Q2="Notdog Duo",eP="Slab",tP="Slab Press",nP="Thumbprint",iP="Whiteboard",Ax=[En,xl,px,mx,gx,vx,_x,yx,xx,Sx,Ex,Mx,Tx,wx,bx];ah={},wt(wt(wt(wt(wt(wt(wt(wt(wt(wt(ah,En,G2),xl,W2),px,j2),mx,X2),gx,$2),vx,Y2),_x,K2),yx,q2),xx,Z2),Sx,J2),wt(wt(wt(wt(wt(ah,Ex,Q2),Mx,eP),Tx,tP),wx,nP),bx,iP);var rP={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"},slab:{400:"faslr"},"slab-press":{400:"faslpr"},whiteboard:{600:"fawsb"},thumbprint:{300:"fatl"},notdog:{900:"fans"},"notdog-duo":{900:"fands"},etch:{900:"faes"},chisel:{400:"facr"},jelly:{400:"fajr"},"jelly-fill":{400:"fajfr"},"jelly-duo":{400:"fajdr"}},sP={"Font Awesome 7 Free":{900:"fas",400:"far"},"Font Awesome 7 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 7 Brands":{400:"fab",normal:"fab"},"Font Awesome 7 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 7 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 7 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"},"Font Awesome 7 Jelly":{400:"fajr",normal:"fajr"},"Font Awesome 7 Jelly Fill":{400:"fajfr",normal:"fajfr"},"Font Awesome 7 Jelly Duo":{400:"fajdr",normal:"fajdr"},"Font Awesome 7 Slab":{400:"faslr",normal:"faslr"},"Font Awesome 7 Slab Press":{400:"faslpr",normal:"faslpr"},"Font Awesome 7 Thumbprint":{300:"fatl",normal:"fatl"},"Font Awesome 7 Notdog":{900:"fans",normal:"fans"},"Font Awesome 7 Notdog Duo":{900:"fands",normal:"fands"},"Font Awesome 7 Etch":{900:"faes",normal:"faes"},"Font Awesome 7 Chisel":{400:"facr",normal:"facr"},"Font Awesome 7 Whiteboard":{600:"fawsb",normal:"fawsb"}},aP=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["chisel",{defaultShortPrefixId:"facr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["etch",{defaultShortPrefixId:"faes",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["jelly",{defaultShortPrefixId:"fajr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-duo",{defaultShortPrefixId:"fajdr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-fill",{defaultShortPrefixId:"fajfr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["notdog",{defaultShortPrefixId:"fans",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["notdog-duo",{defaultShortPrefixId:"fands",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["slab",{defaultShortPrefixId:"faslr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-press",{defaultShortPrefixId:"faslpr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["thumbprint",{defaultShortPrefixId:"fatl",defaultStyleId:"light",styleIds:["light"],futureStyleIds:[],defaultFontWeight:300}],["whiteboard",{defaultShortPrefixId:"fawsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}]]),oP={chisel:{regular:"facr"},classic:{brands:"fab",light:"fal",regular:"far",solid:"fas",thin:"fat"},duotone:{light:"fadl",regular:"fadr",solid:"fad",thin:"fadt"},etch:{solid:"faes"},jelly:{regular:"fajr"},"jelly-duo":{regular:"fajdr"},"jelly-fill":{regular:"fajfr"},notdog:{solid:"fans"},"notdog-duo":{solid:"fands"},sharp:{light:"fasl",regular:"fasr",solid:"fass",thin:"fast"},"sharp-duotone":{light:"fasdl",regular:"fasdr",solid:"fasds",thin:"fasdt"},slab:{regular:"faslr"},"slab-press":{regular:"faslpr"},thumbprint:{light:"fatl"},whiteboard:{semibold:"fawsb"}},Rx=["fak","fa-kit","fakd","fa-kit-duotone"],x0={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},lP=["kit"],uP="kit",cP="kit-duotone",fP="Kit",dP="Kit Duotone";wt(wt({},uP,fP),cP,dP);var hP={kit:{"fa-kit":"fak"}},pP={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},mP={kit:{fak:"fa-kit"}},S0={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},oh,sc={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},gP=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press"],vP="classic",_P="duotone",yP="sharp",xP="sharp-duotone",SP="chisel",EP="etch",MP="jelly",TP="jelly-duo",wP="jelly-fill",bP="notdog",AP="notdog-duo",RP="slab",CP="slab-press",PP="thumbprint",LP="whiteboard",IP="Classic",DP="Duotone",NP="Sharp",UP="Sharp Duotone",FP="Chisel",OP="Etch",kP="Jelly",BP="Jelly Duo",zP="Jelly Fill",HP="Notdog",VP="Notdog Duo",GP="Slab",WP="Slab Press",jP="Thumbprint",XP="Whiteboard";oh={},wt(wt(wt(wt(wt(wt(wt(wt(wt(wt(oh,vP,IP),_P,DP),yP,NP),xP,UP),SP,FP),EP,OP),MP,kP),TP,BP),wP,zP),bP,HP),wt(wt(wt(wt(wt(oh,AP,VP),RP,GP),CP,WP),PP,jP),LP,XP);var $P="kit",YP="kit-duotone",KP="Kit",qP="Kit Duotone";wt(wt({},$P,KP),YP,qP);var ZP={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"},slab:{"fa-regular":"faslr"},"slab-press":{"fa-regular":"faslpr"},whiteboard:{"fa-semibold":"fawsb"},thumbprint:{"fa-light":"fatl"},notdog:{"fa-solid":"fans"},"notdog-duo":{"fa-solid":"fands"},etch:{"fa-solid":"faes"},jelly:{"fa-regular":"fajr"},"jelly-fill":{"fa-regular":"fajfr"},"jelly-duo":{"fa-regular":"fajdr"},chisel:{"fa-regular":"facr"}},JP={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"],slab:["faslr"],"slab-press":["faslpr"],whiteboard:["fawsb"],thumbprint:["fatl"],notdog:["fans"],"notdog-duo":["fands"],etch:["faes"],jelly:["fajr"],"jelly-fill":["fajfr"],"jelly-duo":["fajdr"],chisel:["facr"]},cp={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"},slab:{faslr:"fa-regular"},"slab-press":{faslpr:"fa-regular"},whiteboard:{fawsb:"fa-semibold"},thumbprint:{fatl:"fa-light"},notdog:{fans:"fa-solid"},"notdog-duo":{fands:"fa-solid"},etch:{faes:"fa-solid"},jelly:{fajr:"fa-regular"},"jelly-fill":{fajfr:"fa-regular"},"jelly-duo":{fajdr:"fa-regular"},chisel:{facr:"fa-regular"}},QP=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands","fa-semibold"],Cx=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt","faslr","faslpr","fawsb","fatl","fans","fands","faes","fajr","fajfr","fajdr","facr"].concat(gP,QP),eL=["solid","regular","light","thin","duotone","brands","semibold"],Px=[1,2,3,4,5,6,7,8,9,10],tL=Px.concat([11,12,13,14,15,16,17,18,19,20]),nL=["aw","fw","pull-left","pull-right"],iL=[].concat(Di(Object.keys(JP)),eL,nL,["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","inverse","layers","layers-bottom-left","layers-bottom-right","layers-counter","layers-text","layers-top-left","layers-top-right","li","pull-end","pull-start","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul","width-auto","width-fixed",sc.GROUP,sc.SWAP_OPACITY,sc.PRIMARY,sc.SECONDARY]).concat(Px.map(function(r){return"".concat(r,"x")})).concat(tL.map(function(r){return"w-".concat(r)})),rL={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},wr="___FONT_AWESOME___",fp=16,Lx="fa",Ix="svg-inline--fa",Hs="data-fa-i2svg",dp="data-fa-pseudo-element",sL="data-fa-pseudo-element-pending",rm="data-prefix",sm="data-icon",E0="fontawesome-i2svg",aL="async",oL=["HTML","HEAD","STYLE","SCRIPT"],Dx=["::before","::after",":before",":after"],Nx=(function(){try{return!0}catch{return!1}})();function Sl(r){return new Proxy(r,{get:function(t,n){return n in t?t[n]:t[En]}})}var Ux=Te({},dx);Ux[En]=Te(Te(Te(Te({},{"fa-duotone":"duotone"}),dx[En]),x0.kit),x0["kit-duotone"]);var lL=Sl(Ux),hp=Te({},oP);hp[En]=Te(Te(Te(Te({},{duotone:"fad"}),hp[En]),S0.kit),S0["kit-duotone"]);var M0=Sl(hp),pp=Te({},cp);pp[En]=Te(Te({},pp[En]),mP.kit);var am=Sl(pp),mp=Te({},ZP);mp[En]=Te(Te({},mp[En]),hP.kit);Sl(mp);var uL=z2,Fx="fa-layers-text",cL=H2,fL=Te({},rP);Sl(fL);var dL=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],lh=V2,hL=[].concat(Di(lP),Di(iL)),tl=os.FontAwesomeConfig||{};function pL(r){var e=Kt.querySelector("script["+r+"]");if(e)return e.getAttribute(r)}function mL(r){return r===""?!0:r==="false"?!1:r==="true"?!0:r}if(Kt&&typeof Kt.querySelector=="function"){var gL=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-search-pseudo-elements","searchPseudoElements"],["data-search-pseudo-elements-warnings","searchPseudoElementsWarnings"],["data-search-pseudo-elements-full-scan","searchPseudoElementsFullScan"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];gL.forEach(function(r){var e=Uc(r,2),t=e[0],n=e[1],s=mL(pL(t));s!=null&&(tl[n]=s)})}var Ox={styleDefault:"solid",familyDefault:En,cssPrefix:Lx,replacementClass:Ix,autoReplaceSvg:!0,autoAddCss:!0,searchPseudoElements:!1,searchPseudoElementsWarnings:!0,searchPseudoElementsFullScan:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};tl.familyPrefix&&(tl.cssPrefix=tl.familyPrefix);var Za=Te(Te({},Ox),tl);Za.autoReplaceSvg||(Za.observeMutations=!1);var et={};Object.keys(Ox).forEach(function(r){Object.defineProperty(et,r,{enumerable:!0,set:function(t){Za[r]=t,nl.forEach(function(n){return n(et)})},get:function(){return Za[r]}})});Object.defineProperty(et,"familyPrefix",{enumerable:!0,set:function(e){Za.cssPrefix=e,nl.forEach(function(t){return t(et)})},get:function(){return Za.cssPrefix}});os.FontAwesomeConfig=et;var nl=[];function vL(r){return nl.push(r),function(){nl.splice(nl.indexOf(r),1)}}var La=fp,Gi={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function _L(r){if(!(!r||!Rr)){var e=Kt.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=r;for(var t=Kt.head.childNodes,n=null,s=t.length-1;s>-1;s--){var o=t[s],l=(o.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(l)>-1&&(n=o)}return Kt.head.insertBefore(e,n),r}}var yL="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function T0(){for(var r=12,e="";r-- >0;)e+=yL[Math.random()*62|0];return e}function ro(r){for(var e=[],t=(r||[]).length>>>0;t--;)e[t]=r[t];return e}function om(r){return r.classList?ro(r.classList):(r.getAttribute("class")||"").split(" ").filter(function(e){return e})}function kx(r){return"".concat(r).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function xL(r){return Object.keys(r||{}).reduce(function(e,t){return e+"".concat(t,'="').concat(kx(r[t]),'" ')},"").trim()}function Fc(r){return Object.keys(r||{}).reduce(function(e,t){return e+"".concat(t,": ").concat(r[t].trim(),";")},"")}function lm(r){return r.size!==Gi.size||r.x!==Gi.x||r.y!==Gi.y||r.rotate!==Gi.rotate||r.flipX||r.flipY}function SL(r){var e=r.transform,t=r.containerWidth,n=r.iconWidth,s={transform:"translate(".concat(t/2," 256)")},o="translate(".concat(e.x*32,", ").concat(e.y*32,") "),l="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),c="rotate(".concat(e.rotate," 0 0)"),f={transform:"".concat(o," ").concat(l," ").concat(c)},d={transform:"translate(".concat(n/2*-1," -256)")};return{outer:s,inner:f,path:d}}function EL(r){var e=r.transform,t=r.width,n=t===void 0?fp:t,s=r.height,o=s===void 0?fp:s,l="";return fx?l+="translate(".concat(e.x/La-n/2,"em, ").concat(e.y/La-o/2,"em) "):l+="translate(calc(-50% + ".concat(e.x/La,"em), calc(-50% + ").concat(e.y/La,"em)) "),l+="scale(".concat(e.size/La*(e.flipX?-1:1),", ").concat(e.size/La*(e.flipY?-1:1),") "),l+="rotate(".concat(e.rotate,"deg) "),l}var ML=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 7 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 7 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 7 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 7 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 7 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 7 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 7 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 7 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 7 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-slab-regular: normal 400 1em/1 "Font Awesome 7 Slab";
  --fa-font-slab-press-regular: normal 400 1em/1 "Font Awesome 7 Slab Press";
  --fa-font-whiteboard-semibold: normal 600 1em/1 "Font Awesome 7 Whiteboard";
  --fa-font-thumbprint-light: normal 300 1em/1 "Font Awesome 7 Thumbprint";
  --fa-font-notdog-solid: normal 900 1em/1 "Font Awesome 7 Notdog";
  --fa-font-notdog-duo-solid: normal 900 1em/1 "Font Awesome 7 Notdog Duo";
  --fa-font-etch-solid: normal 900 1em/1 "Font Awesome 7 Etch";
  --fa-font-jelly-regular: normal 400 1em/1 "Font Awesome 7 Jelly";
  --fa-font-jelly-fill-regular: normal 400 1em/1 "Font Awesome 7 Jelly Fill";
  --fa-font-jelly-duo-regular: normal 400 1em/1 "Font Awesome 7 Jelly Duo";
  --fa-font-chisel-regular: normal 400 1em/1 "Font Awesome 7 Chisel";
}

.svg-inline--fa {
  box-sizing: content-box;
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285714em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left,
.svg-inline--fa .fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-pull-right,
.svg-inline--fa .fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  inset-block-start: 0.25em; /* syncing vertical alignment with Web Font rendering */
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.fa-layers .svg-inline--fa {
  inset: 0;
  margin: auto;
  position: absolute;
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: calc(10 / 16 * 1em); /* converts a 10px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 10 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 10 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xs {
  font-size: calc(12 / 16 * 1em); /* converts a 12px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 12 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 12 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-sm {
  font-size: calc(14 / 16 * 1em); /* converts a 14px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 14 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 14 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-lg {
  font-size: calc(20 / 16 * 1em); /* converts a 20px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 20 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 20 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xl {
  font-size: calc(24 / 16 * 1em); /* converts a 24px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 24 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 24 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-2xl {
  font-size: calc(32 / 16 * 1em); /* converts a 32px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 32 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 32 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-width-auto {
  --fa-width: auto;
}

.fa-fw,
.fa-width-fixed {
  --fa-width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-inline-start: var(--fa-li-margin, 2.5em);
  padding-inline-start: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

/* Heads Up: Bordered Icons will not be supported in the future!
  - This feature will be deprecated in the next major release of Font Awesome (v8)!
  - You may continue to use it in this version *v7), but it will not be supported in Font Awesome v8.
*/
/* Notes:
* --@{v.$css-prefix}-border-width = 1/16 by default (to render as ~1px based on a 16px default font-size)
* --@{v.$css-prefix}-border-padding =
  ** 3/16 for vertical padding (to give ~2px of vertical whitespace around an icon considering it's vertical alignment)
  ** 4/16 for horizontal padding (to give ~4px of horizontal whitespace around an icon)
*/
.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.0625em);
  box-sizing: var(--fa-border-box-sizing, content-box);
  padding: var(--fa-border-padding, 0.1875em 0.25em);
}

.fa-pull-left,
.fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right,
.fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
  .fa-bounce,
  .fa-fade,
  .fa-beat-fade,
  .fa-flip,
  .fa-pulse,
  .fa-shake,
  .fa-spin,
  .fa-spin-pulse {
    animation: none !important;
    transition: none !important;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.svg-inline--fa.fa-inverse {
  fill: var(--fa-inverse, #fff);
}

.fa-stack {
  display: inline-block;
  height: 2em;
  line-height: 2em;
  position: relative;
  vertical-align: middle;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.svg-inline--fa.fa-stack-1x {
  --fa-width: 1.25em;
  height: 1em;
  width: var(--fa-width);
}
.svg-inline--fa.fa-stack-2x {
  --fa-width: 2.5em;
  height: 2em;
  width: var(--fa-width);
}

.fa-stack-1x,
.fa-stack-2x {
  inset: 0;
  margin: auto;
  position: absolute;
  z-index: var(--fa-stack-z-index, auto);
}`;function Bx(){var r=Lx,e=Ix,t=et.cssPrefix,n=et.replacementClass,s=ML;if(t!==r||n!==e){var o=new RegExp("\\.".concat(r,"\\-"),"g"),l=new RegExp("\\--".concat(r,"\\-"),"g"),c=new RegExp("\\.".concat(e),"g");s=s.replace(o,".".concat(t,"-")).replace(l,"--".concat(t,"-")).replace(c,".".concat(n))}return s}var w0=!1;function uh(){et.autoAddCss&&!w0&&(_L(Bx()),w0=!0)}var TL={mixout:function(){return{dom:{css:Bx,insertCss:uh}}},hooks:function(){return{beforeDOMElementCreation:function(){uh()},beforeI2svg:function(){uh()}}}},br=os||{};br[wr]||(br[wr]={});br[wr].styles||(br[wr].styles={});br[wr].hooks||(br[wr].hooks={});br[wr].shims||(br[wr].shims=[]);var Li=br[wr],zx=[],Hx=function(){Kt.removeEventListener("DOMContentLoaded",Hx),bc=1,zx.map(function(e){return e()})},bc=!1;Rr&&(bc=(Kt.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Kt.readyState),bc||Kt.addEventListener("DOMContentLoaded",Hx));function wL(r){Rr&&(bc?setTimeout(r,0):zx.push(r))}function El(r){var e=r.tag,t=r.attributes,n=t===void 0?{}:t,s=r.children,o=s===void 0?[]:s;return typeof r=="string"?kx(r):"<".concat(e," ").concat(xL(n),">").concat(o.map(El).join(""),"</").concat(e,">")}function b0(r,e,t){if(r&&r[e]&&r[e][t])return{prefix:e,iconName:t,icon:r[e][t]}}var ch=function(e,t,n,s){var o=Object.keys(e),l=o.length,c=t,f,d,p;for(n===void 0?(f=1,p=e[o[0]]):(f=0,p=n);f<l;f++)d=o[f],p=c(p,e[d],d,e);return p};function Vx(r){return Di(r).length!==1?null:r.codePointAt(0).toString(16)}function A0(r){return Object.keys(r).reduce(function(e,t){var n=r[t],s=!!n.icon;return s?e[n.iconName]=n.icon:e[t]=n,e},{})}function gp(r,e){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},n=t.skipHooks,s=n===void 0?!1:n,o=A0(e);typeof Li.hooks.addPack=="function"&&!s?Li.hooks.addPack(r,A0(e)):Li.styles[r]=Te(Te({},Li.styles[r]||{}),o),r==="fas"&&gp("fa",e)}var dl=Li.styles,bL=Li.shims,Gx=Object.keys(am),AL=Gx.reduce(function(r,e){return r[e]=Object.keys(am[e]),r},{}),um=null,Wx={},jx={},Xx={},$x={},Yx={};function RL(r){return~hL.indexOf(r)}function CL(r,e){var t=e.split("-"),n=t[0],s=t.slice(1).join("-");return n===r&&s!==""&&!RL(s)?s:null}var Kx=function(){var e=function(o){return ch(dl,function(l,c,f){return l[f]=ch(c,o,{}),l},{})};Wx=e(function(s,o,l){if(o[3]&&(s[o[3]]=l),o[2]){var c=o[2].filter(function(f){return typeof f=="number"});c.forEach(function(f){s[f.toString(16)]=l})}return s}),jx=e(function(s,o,l){if(s[l]=l,o[2]){var c=o[2].filter(function(f){return typeof f=="string"});c.forEach(function(f){s[f]=l})}return s}),Yx=e(function(s,o,l){var c=o[2];return s[l]=l,c.forEach(function(f){s[f]=l}),s});var t="far"in dl||et.autoFetchSvg,n=ch(bL,function(s,o){var l=o[0],c=o[1],f=o[2];return c==="far"&&!t&&(c="fas"),typeof l=="string"&&(s.names[l]={prefix:c,iconName:f}),typeof l=="number"&&(s.unicodes[l.toString(16)]={prefix:c,iconName:f}),s},{names:{},unicodes:{}});Xx=n.names,$x=n.unicodes,um=Oc(et.styleDefault,{family:et.familyDefault})};vL(function(r){um=Oc(r.styleDefault,{family:et.familyDefault})});Kx();function cm(r,e){return(Wx[r]||{})[e]}function PL(r,e){return(jx[r]||{})[e]}function ks(r,e){return(Yx[r]||{})[e]}function qx(r){return Xx[r]||{prefix:null,iconName:null}}function LL(r){var e=$x[r],t=cm("fas",r);return e||(t?{prefix:"fas",iconName:t}:null)||{prefix:null,iconName:null}}function ls(){return um}var Zx=function(){return{prefix:null,iconName:null,rest:[]}};function IL(r){var e=En,t=Gx.reduce(function(n,s){return n[s]="".concat(et.cssPrefix,"-").concat(s),n},{});return Ax.forEach(function(n){(r.includes(t[n])||r.some(function(s){return AL[n].includes(s)}))&&(e=n)}),e}function Oc(r){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=e.family,n=t===void 0?En:t,s=lL[n][r];if(n===xl&&!r)return"fad";var o=M0[n][r]||M0[n][s],l=r in Li.styles?r:null,c=o||l||null;return c}function DL(r){var e=[],t=null;return r.forEach(function(n){var s=CL(et.cssPrefix,n);s?t=s:n&&e.push(n)}),{iconName:t,rest:e}}function R0(r){return r.sort().filter(function(e,t,n){return n.indexOf(e)===t})}var C0=Cx.concat(Rx);function kc(r){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=e.skipLookups,n=t===void 0?!1:t,s=null,o=R0(r.filter(function(y){return C0.includes(y)})),l=R0(r.filter(function(y){return!C0.includes(y)})),c=o.filter(function(y){return s=y,!hx.includes(y)}),f=Uc(c,1),d=f[0],p=d===void 0?null:d,m=IL(o),v=Te(Te({},DL(l)),{},{prefix:Oc(p,{family:m})});return Te(Te(Te({},v),OL({values:r,family:m,styles:dl,config:et,canonical:v,givenPrefix:s})),NL(n,s,v))}function NL(r,e,t){var n=t.prefix,s=t.iconName;if(r||!n||!s)return{prefix:n,iconName:s};var o=e==="fa"?qx(s):{},l=ks(n,s);return s=o.iconName||l||s,n=o.prefix||n,n==="far"&&!dl.far&&dl.fas&&!et.autoFetchSvg&&(n="fas"),{prefix:n,iconName:s}}var UL=Ax.filter(function(r){return r!==En||r!==xl}),FL=Object.keys(cp).filter(function(r){return r!==En}).map(function(r){return Object.keys(cp[r])}).flat();function OL(r){var e=r.values,t=r.family,n=r.canonical,s=r.givenPrefix,o=s===void 0?"":s,l=r.styles,c=l===void 0?{}:l,f=r.config,d=f===void 0?{}:f,p=t===xl,m=e.includes("fa-duotone")||e.includes("fad"),v=d.familyDefault==="duotone",y=n.prefix==="fad"||n.prefix==="fa-duotone";if(!p&&(m||v||y)&&(n.prefix="fad"),(e.includes("fa-brands")||e.includes("fab"))&&(n.prefix="fab"),!n.prefix&&UL.includes(t)){var E=Object.keys(c).find(function(S){return FL.includes(S)});if(E||d.autoFetchSvg){var M=aP.get(t).defaultShortPrefixId;n.prefix=M,n.iconName=ks(n.prefix,n.iconName)||n.iconName}}return(n.prefix==="fa"||o==="fa")&&(n.prefix=ls()||"fas"),n}var kL=(function(){function r(){L2(this,r),this.definitions={}}return D2(r,[{key:"add",value:function(){for(var t=this,n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];var l=s.reduce(this._pullDefinitions,{});Object.keys(l).forEach(function(c){t.definitions[c]=Te(Te({},t.definitions[c]||{}),l[c]),gp(c,l[c]);var f=am[En][c];f&&gp(f,l[c]),Kx()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(t,n){var s=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(s).map(function(o){var l=s[o],c=l.prefix,f=l.iconName,d=l.icon,p=d[2];t[c]||(t[c]={}),p.length>0&&p.forEach(function(m){typeof m=="string"&&(t[c][m]=d)}),t[c][f]=d}),t}}])})(),P0=[],Fa={},za={},BL=Object.keys(za);function zL(r,e){var t=e.mixoutsTo;return P0=r,Fa={},Object.keys(za).forEach(function(n){BL.indexOf(n)===-1&&delete za[n]}),P0.forEach(function(n){var s=n.mixout?n.mixout():{};if(Object.keys(s).forEach(function(l){typeof s[l]=="function"&&(t[l]=s[l]),wc(s[l])==="object"&&Object.keys(s[l]).forEach(function(c){t[l]||(t[l]={}),t[l][c]=s[l][c]})}),n.hooks){var o=n.hooks();Object.keys(o).forEach(function(l){Fa[l]||(Fa[l]=[]),Fa[l].push(o[l])})}n.provides&&n.provides(za)}),t}function vp(r,e){for(var t=arguments.length,n=new Array(t>2?t-2:0),s=2;s<t;s++)n[s-2]=arguments[s];var o=Fa[r]||[];return o.forEach(function(l){e=l.apply(null,[e].concat(n))}),e}function Vs(r){for(var e=arguments.length,t=new Array(e>1?e-1:0),n=1;n<e;n++)t[n-1]=arguments[n];var s=Fa[r]||[];s.forEach(function(o){o.apply(null,t)})}function us(){var r=arguments[0],e=Array.prototype.slice.call(arguments,1);return za[r]?za[r].apply(null,e):void 0}function _p(r){r.prefix==="fa"&&(r.prefix="fas");var e=r.iconName,t=r.prefix||ls();if(e)return e=ks(t,e)||e,b0(Jx.definitions,t,e)||b0(Li.styles,t,e)}var Jx=new kL,HL=function(){et.autoReplaceSvg=!1,et.observeMutations=!1,Vs("noAuto")},VL={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Rr?(Vs("beforeI2svg",e),us("pseudoElements2svg",e),us("i2svg",e)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=e.autoReplaceSvgRoot;et.autoReplaceSvg===!1&&(et.autoReplaceSvg=!0),et.observeMutations=!0,wL(function(){WL({autoReplaceSvgRoot:t}),Vs("watch",e)})}},GL={icon:function(e){if(e===null)return null;if(wc(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:ks(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var t=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],n=Oc(e[0]);return{prefix:n,iconName:ks(n,t)||t}}if(typeof e=="string"&&(e.indexOf("".concat(et.cssPrefix,"-"))>-1||e.match(uL))){var s=kc(e.split(" "),{skipLookups:!0});return{prefix:s.prefix||ls(),iconName:ks(s.prefix,s.iconName)||s.iconName}}if(typeof e=="string"){var o=ls();return{prefix:o,iconName:ks(o,e)||e}}}},si={noAuto:HL,config:et,dom:VL,parse:GL,library:Jx,findIconDefinition:_p,toHtml:El},WL=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=e.autoReplaceSvgRoot,n=t===void 0?Kt:t;(Object.keys(Li.styles).length>0||et.autoFetchSvg)&&Rr&&et.autoReplaceSvg&&si.dom.i2svg({node:n})};function Bc(r,e){return Object.defineProperty(r,"abstract",{get:e}),Object.defineProperty(r,"html",{get:function(){return r.abstract.map(function(n){return El(n)})}}),Object.defineProperty(r,"node",{get:function(){if(Rr){var n=Kt.createElement("div");return n.innerHTML=r.html,n.children}}}),r}function jL(r){var e=r.children,t=r.main,n=r.mask,s=r.attributes,o=r.styles,l=r.transform;if(lm(l)&&t.found&&!n.found){var c=t.width,f=t.height,d={x:c/f/2,y:.5};s.style=Fc(Te(Te({},o),{},{"transform-origin":"".concat(d.x+l.x/16,"em ").concat(d.y+l.y/16,"em")}))}return[{tag:"svg",attributes:s,children:e}]}function XL(r){var e=r.prefix,t=r.iconName,n=r.children,s=r.attributes,o=r.symbol,l=o===!0?"".concat(e,"-").concat(et.cssPrefix,"-").concat(t):o;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:Te(Te({},s),{},{id:l}),children:n}]}]}function $L(r){var e=["aria-label","aria-labelledby","title","role"];return e.some(function(t){return t in r})}function fm(r){var e=r.icons,t=e.main,n=e.mask,s=r.prefix,o=r.iconName,l=r.transform,c=r.symbol,f=r.maskId,d=r.extra,p=r.watchable,m=p===void 0?!1:p,v=n.found?n:t,y=v.width,E=v.height,M=[et.replacementClass,o?"".concat(et.cssPrefix,"-").concat(o):""].filter(function(I){return d.classes.indexOf(I)===-1}).filter(function(I){return I!==""||!!I}).concat(d.classes).join(" "),S={children:[],attributes:Te(Te({},d.attributes),{},{"data-prefix":s,"data-icon":o,class:M,role:d.attributes.role||"img",viewBox:"0 0 ".concat(y," ").concat(E)})};!$L(d.attributes)&&!d.attributes["aria-hidden"]&&(S.attributes["aria-hidden"]="true"),m&&(S.attributes[Hs]="");var _=Te(Te({},S),{},{prefix:s,iconName:o,main:t,mask:n,maskId:f,transform:l,symbol:c,styles:Te({},d.styles)}),R=n.found&&t.found?us("generateAbstractMask",_)||{children:[],attributes:{}}:us("generateAbstractIcon",_)||{children:[],attributes:{}},C=R.children,b=R.attributes;return _.children=C,_.attributes=b,c?XL(_):jL(_)}function L0(r){var e=r.content,t=r.width,n=r.height,s=r.transform,o=r.extra,l=r.watchable,c=l===void 0?!1:l,f=Te(Te({},o.attributes),{},{class:o.classes.join(" ")});c&&(f[Hs]="");var d=Te({},o.styles);lm(s)&&(d.transform=EL({transform:s,width:t,height:n}),d["-webkit-transform"]=d.transform);var p=Fc(d);p.length>0&&(f.style=p);var m=[];return m.push({tag:"span",attributes:f,children:[e]}),m}function YL(r){var e=r.content,t=r.extra,n=Te(Te({},t.attributes),{},{class:t.classes.join(" ")}),s=Fc(t.styles);s.length>0&&(n.style=s);var o=[];return o.push({tag:"span",attributes:n,children:[e]}),o}var fh=Li.styles;function yp(r){var e=r[0],t=r[1],n=r.slice(4),s=Uc(n,1),o=s[0],l=null;return Array.isArray(o)?l={tag:"g",attributes:{class:"".concat(et.cssPrefix,"-").concat(lh.GROUP)},children:[{tag:"path",attributes:{class:"".concat(et.cssPrefix,"-").concat(lh.SECONDARY),fill:"currentColor",d:o[0]}},{tag:"path",attributes:{class:"".concat(et.cssPrefix,"-").concat(lh.PRIMARY),fill:"currentColor",d:o[1]}}]}:l={tag:"path",attributes:{fill:"currentColor",d:o}},{found:!0,width:e,height:t,icon:l}}var KL={found:!1,width:512,height:512};function qL(r,e){!Nx&&!et.showMissingIcons&&r&&console.error('Icon with name "'.concat(r,'" and prefix "').concat(e,'" is missing.'))}function xp(r,e){var t=e;return e==="fa"&&et.styleDefault!==null&&(e=ls()),new Promise(function(n,s){if(t==="fa"){var o=qx(r)||{};r=o.iconName||r,e=o.prefix||e}if(r&&e&&fh[e]&&fh[e][r]){var l=fh[e][r];return n(yp(l))}qL(r,e),n(Te(Te({},KL),{},{icon:et.showMissingIcons&&r?us("missingIconAbstract")||{}:{}}))})}var I0=function(){},Sp=et.measurePerformance&&rc&&rc.mark&&rc.measure?rc:{mark:I0,measure:I0},Zo='FA "7.0.1"',ZL=function(e){return Sp.mark("".concat(Zo," ").concat(e," begins")),function(){return Qx(e)}},Qx=function(e){Sp.mark("".concat(Zo," ").concat(e," ends")),Sp.measure("".concat(Zo," ").concat(e),"".concat(Zo," ").concat(e," begins"),"".concat(Zo," ").concat(e," ends"))},dm={begin:ZL,end:Qx},vc=function(){};function D0(r){var e=r.getAttribute?r.getAttribute(Hs):null;return typeof e=="string"}function JL(r){var e=r.getAttribute?r.getAttribute(rm):null,t=r.getAttribute?r.getAttribute(sm):null;return e&&t}function QL(r){return r&&r.classList&&r.classList.contains&&r.classList.contains(et.replacementClass)}function eI(){if(et.autoReplaceSvg===!0)return _c.replace;var r=_c[et.autoReplaceSvg];return r||_c.replace}function tI(r){return Kt.createElementNS("http://www.w3.org/2000/svg",r)}function nI(r){return Kt.createElement(r)}function eS(r){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=e.ceFn,n=t===void 0?r.tag==="svg"?tI:nI:t;if(typeof r=="string")return Kt.createTextNode(r);var s=n(r.tag);Object.keys(r.attributes||[]).forEach(function(l){s.setAttribute(l,r.attributes[l])});var o=r.children||[];return o.forEach(function(l){s.appendChild(eS(l,{ceFn:n}))}),s}function iI(r){var e=" ".concat(r.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var _c={replace:function(e){var t=e[0];if(t.parentNode)if(e[1].forEach(function(s){t.parentNode.insertBefore(eS(s),t)}),t.getAttribute(Hs)===null&&et.keepOriginalSource){var n=Kt.createComment(iI(t));t.parentNode.replaceChild(n,t)}else t.remove()},nest:function(e){var t=e[0],n=e[1];if(~om(t).indexOf(et.replacementClass))return _c.replace(e);var s=new RegExp("".concat(et.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){var o=n[0].attributes.class.split(" ").reduce(function(c,f){return f===et.replacementClass||f.match(s)?c.toSvg.push(f):c.toNode.push(f),c},{toNode:[],toSvg:[]});n[0].attributes.class=o.toSvg.join(" "),o.toNode.length===0?t.removeAttribute("class"):t.setAttribute("class",o.toNode.join(" "))}var l=n.map(function(c){return El(c)}).join(`
`);t.setAttribute(Hs,""),t.innerHTML=l}};function N0(r){r()}function tS(r,e){var t=typeof e=="function"?e:vc;if(r.length===0)t();else{var n=N0;et.mutateApproach===aL&&(n=os.requestAnimationFrame||N0),n(function(){var s=eI(),o=dm.begin("mutate");r.map(s),o(),t()})}}var hm=!1;function nS(){hm=!0}function Ep(){hm=!1}var Ac=null;function U0(r){if(y0&&et.observeMutations){var e=r.treeCallback,t=e===void 0?vc:e,n=r.nodeCallback,s=n===void 0?vc:n,o=r.pseudoElementsCallback,l=o===void 0?vc:o,c=r.observeMutationsRoot,f=c===void 0?Kt:c;Ac=new y0(function(d){if(!hm){var p=ls();ro(d).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!D0(m.addedNodes[0])&&(et.searchPseudoElements&&l(m.target),t(m.target)),m.type==="attributes"&&m.target.parentNode&&et.searchPseudoElements&&l([m.target],!0),m.type==="attributes"&&D0(m.target)&&~dL.indexOf(m.attributeName))if(m.attributeName==="class"&&JL(m.target)){var v=kc(om(m.target)),y=v.prefix,E=v.iconName;m.target.setAttribute(rm,y||p),E&&m.target.setAttribute(sm,E)}else QL(m.target)&&s(m.target)})}}),Rr&&Ac.observe(f,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function rI(){Ac&&Ac.disconnect()}function sI(r){var e=r.getAttribute("style"),t=[];return e&&(t=e.split(";").reduce(function(n,s){var o=s.split(":"),l=o[0],c=o.slice(1);return l&&c.length>0&&(n[l]=c.join(":").trim()),n},{})),t}function aI(r){var e=r.getAttribute("data-prefix"),t=r.getAttribute("data-icon"),n=r.innerText!==void 0?r.innerText.trim():"",s=kc(om(r));return s.prefix||(s.prefix=ls()),e&&t&&(s.prefix=e,s.iconName=t),s.iconName&&s.prefix||(s.prefix&&n.length>0&&(s.iconName=PL(s.prefix,r.innerText)||cm(s.prefix,Vx(r.innerText))),!s.iconName&&et.autoFetchSvg&&r.firstChild&&r.firstChild.nodeType===Node.TEXT_NODE&&(s.iconName=r.firstChild.data)),s}function oI(r){var e=ro(r.attributes).reduce(function(t,n){return t.name!=="class"&&t.name!=="style"&&(t[n.name]=n.value),t},{});return e}function lI(){return{iconName:null,prefix:null,transform:Gi,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function F0(r){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},t=aI(r),n=t.iconName,s=t.prefix,o=t.rest,l=oI(r),c=vp("parseNodeAttributes",{},r),f=e.styleParser?sI(r):[];return Te({iconName:n,prefix:s,transform:Gi,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:o,styles:f,attributes:l}},c)}var uI=Li.styles;function iS(r){var e=et.autoReplaceSvg==="nest"?F0(r,{styleParser:!1}):F0(r);return~e.extra.classes.indexOf(Fx)?us("generateLayersText",r,e):us("generateSvgReplacementMutation",r,e)}function cI(){return[].concat(Di(Rx),Di(Cx))}function O0(r){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Rr)return Promise.resolve();var t=Kt.documentElement.classList,n=function(m){return t.add("".concat(E0,"-").concat(m))},s=function(m){return t.remove("".concat(E0,"-").concat(m))},o=et.autoFetchSvg?cI():hx.concat(Object.keys(uI));o.includes("fa")||o.push("fa");var l=[".".concat(Fx,":not([").concat(Hs,"])")].concat(o.map(function(p){return".".concat(p,":not([").concat(Hs,"])")})).join(", ");if(l.length===0)return Promise.resolve();var c=[];try{c=ro(r.querySelectorAll(l))}catch{}if(c.length>0)n("pending"),s("complete");else return Promise.resolve();var f=dm.begin("onTree"),d=c.reduce(function(p,m){try{var v=iS(m);v&&p.push(v)}catch(y){Nx||y.name==="MissingIcon"&&console.error(y)}return p},[]);return new Promise(function(p,m){Promise.all(d).then(function(v){tS(v,function(){n("active"),n("complete"),s("pending"),typeof e=="function"&&e(),f(),p()})}).catch(function(v){f(),m(v)})})}function fI(r){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;iS(r).then(function(t){t&&tS([t],e)})}function dI(r){return function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=(e||{}).icon?e:_p(e||{}),s=t.mask;return s&&(s=(s||{}).icon?s:_p(s||{})),r(n,Te(Te({},t),{},{mask:s}))}}var hI=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.transform,s=n===void 0?Gi:n,o=t.symbol,l=o===void 0?!1:o,c=t.mask,f=c===void 0?null:c,d=t.maskId,p=d===void 0?null:d,m=t.classes,v=m===void 0?[]:m,y=t.attributes,E=y===void 0?{}:y,M=t.styles,S=M===void 0?{}:M;if(e){var _=e.prefix,R=e.iconName,C=e.icon;return Bc(Te({type:"icon"},e),function(){return Vs("beforeDOMElementCreation",{iconDefinition:e,params:t}),fm({icons:{main:yp(C),mask:f?yp(f.icon):{found:!1,width:null,height:null,icon:{}}},prefix:_,iconName:R,transform:Te(Te({},Gi),s),symbol:l,maskId:p,extra:{attributes:E,styles:S,classes:v}})})}},pI={mixout:function(){return{icon:dI(hI)}},hooks:function(){return{mutationObserverCallbacks:function(t){return t.treeCallback=O0,t.nodeCallback=fI,t}}},provides:function(e){e.i2svg=function(t){var n=t.node,s=n===void 0?Kt:n,o=t.callback,l=o===void 0?function(){}:o;return O0(s,l)},e.generateSvgReplacementMutation=function(t,n){var s=n.iconName,o=n.prefix,l=n.transform,c=n.symbol,f=n.mask,d=n.maskId,p=n.extra;return new Promise(function(m,v){Promise.all([xp(s,o),f.iconName?xp(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(y){var E=Uc(y,2),M=E[0],S=E[1];m([t,fm({icons:{main:M,mask:S},prefix:o,iconName:s,transform:l,symbol:c,maskId:d,extra:p,watchable:!0})])}).catch(v)})},e.generateAbstractIcon=function(t){var n=t.children,s=t.attributes,o=t.main,l=t.transform,c=t.styles,f=Fc(c);f.length>0&&(s.style=f);var d;return lm(l)&&(d=us("generateAbstractTransformGrouping",{main:o,transform:l,containerWidth:o.width,iconWidth:o.width})),n.push(d||o.icon),{children:n,attributes:s}}}},mI={mixout:function(){return{layer:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=n.classes,o=s===void 0?[]:s;return Bc({type:"layer"},function(){Vs("beforeDOMElementCreation",{assembler:t,params:n});var l=[];return t(function(c){Array.isArray(c)?c.map(function(f){l=l.concat(f.abstract)}):l=l.concat(c.abstract)}),[{tag:"span",attributes:{class:["".concat(et.cssPrefix,"-layers")].concat(Di(o)).join(" ")},children:l}]})}}}},gI={mixout:function(){return{counter:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};n.title;var s=n.classes,o=s===void 0?[]:s,l=n.attributes,c=l===void 0?{}:l,f=n.styles,d=f===void 0?{}:f;return Bc({type:"counter",content:t},function(){return Vs("beforeDOMElementCreation",{content:t,params:n}),YL({content:t.toString(),extra:{attributes:c,styles:d,classes:["".concat(et.cssPrefix,"-layers-counter")].concat(Di(o))}})})}}}},vI={mixout:function(){return{text:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=n.transform,o=s===void 0?Gi:s,l=n.classes,c=l===void 0?[]:l,f=n.attributes,d=f===void 0?{}:f,p=n.styles,m=p===void 0?{}:p;return Bc({type:"text",content:t},function(){return Vs("beforeDOMElementCreation",{content:t,params:n}),L0({content:t,transform:Te(Te({},Gi),o),extra:{attributes:d,styles:m,classes:["".concat(et.cssPrefix,"-layers-text")].concat(Di(c))}})})}}},provides:function(e){e.generateLayersText=function(t,n){var s=n.transform,o=n.extra,l=null,c=null;if(fx){var f=parseInt(getComputedStyle(t).fontSize,10),d=t.getBoundingClientRect();l=d.width/f,c=d.height/f}return Promise.resolve([t,L0({content:t.innerHTML,width:l,height:c,transform:s,extra:o,watchable:!0})])}}},rS=new RegExp('"',"ug"),k0=[1105920,1112319],B0=Te(Te(Te(Te({},{FontAwesome:{normal:"fas",400:"fas"}}),sP),rL),pP),Mp=Object.keys(B0).reduce(function(r,e){return r[e.toLowerCase()]=B0[e],r},{}),_I=Object.keys(Mp).reduce(function(r,e){var t=Mp[e];return r[e]=t[900]||Di(Object.entries(t))[0][1],r},{});function yI(r){var e=r.replace(rS,"");return Vx(Di(e)[0]||"")}function xI(r){var e=r.getPropertyValue("font-feature-settings").includes("ss01"),t=r.getPropertyValue("content"),n=t.replace(rS,""),s=n.codePointAt(0),o=s>=k0[0]&&s<=k0[1],l=n.length===2?n[0]===n[1]:!1;return o||l||e}function SI(r,e){var t=r.replace(/^['"]|['"]$/g,"").toLowerCase(),n=parseInt(e),s=isNaN(n)?"normal":n;return(Mp[t]||{})[s]||_I[t]}function z0(r,e){var t="".concat(sL).concat(e.replace(":","-"));return new Promise(function(n,s){if(r.getAttribute(t)!==null)return n();var o=ro(r.children),l=o.filter(function(F){return F.getAttribute(dp)===e})[0],c=os.getComputedStyle(r,e),f=c.getPropertyValue("font-family"),d=f.match(cL),p=c.getPropertyValue("font-weight"),m=c.getPropertyValue("content");if(l&&!d)return r.removeChild(l),n();if(d&&m!=="none"&&m!==""){var v=c.getPropertyValue("content"),y=SI(f,p),E=yI(v),M=d[0].startsWith("FontAwesome"),S=xI(c),_=cm(y,E),R=_;if(M){var C=LL(E);C.iconName&&C.prefix&&(_=C.iconName,y=C.prefix)}if(_&&!S&&(!l||l.getAttribute(rm)!==y||l.getAttribute(sm)!==R)){r.setAttribute(t,R),l&&r.removeChild(l);var b=lI(),I=b.extra;I.attributes[dp]=e,xp(_,y).then(function(F){var U=fm(Te(Te({},b),{},{icons:{main:F,mask:Zx()},prefix:y,iconName:R,extra:I,watchable:!0})),X=Kt.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?r.insertBefore(X,r.firstChild):r.appendChild(X),X.outerHTML=U.map(function(P){return El(P)}).join(`
`),r.removeAttribute(t),n()}).catch(s)}else n()}else n()})}function EI(r){return Promise.all([z0(r,"::before"),z0(r,"::after")])}function MI(r){return r.parentNode!==document.head&&!~oL.indexOf(r.tagName.toUpperCase())&&!r.getAttribute(dp)&&(!r.parentNode||r.parentNode.tagName!=="svg")}var TI=function(e){return!!e&&Dx.some(function(t){return e.includes(t)})},wI=function(e){if(!e)return[];var t=new Set,n=e.split(/,(?![^()]*\))/).map(function(f){return f.trim()});n=n.flatMap(function(f){return f.includes("(")?f:f.split(",").map(function(d){return d.trim()})});var s=gc(n),o;try{for(s.s();!(o=s.n()).done;){var l=o.value;if(TI(l)){var c=Dx.reduce(function(f,d){return f.replace(d,"")},l);c!==""&&c!=="*"&&t.add(c)}}}catch(f){s.e(f)}finally{s.f()}return t};function H0(r){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(Rr){var t;if(e)t=r;else if(et.searchPseudoElementsFullScan)t=r.querySelectorAll("*");else{var n=new Set,s=gc(document.styleSheets),o;try{for(s.s();!(o=s.n()).done;){var l=o.value;try{var c=gc(l.cssRules),f;try{for(c.s();!(f=c.n()).done;){var d=f.value,p=wI(d.selectorText),m=gc(p),v;try{for(m.s();!(v=m.n()).done;){var y=v.value;n.add(y)}}catch(M){m.e(M)}finally{m.f()}}}catch(M){c.e(M)}finally{c.f()}}catch(M){et.searchPseudoElementsWarnings&&console.warn("Font Awesome: cannot parse stylesheet: ".concat(l.href," (").concat(M.message,`)
If it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.`))}}}catch(M){s.e(M)}finally{s.f()}if(!n.size)return;var E=Array.from(n).join(", ");try{t=r.querySelectorAll(E)}catch{}}return new Promise(function(M,S){var _=ro(t).filter(MI).map(EI),R=dm.begin("searchPseudoElements");nS(),Promise.all(_).then(function(){R(),Ep(),M()}).catch(function(){R(),Ep(),S()})})}}var bI={hooks:function(){return{mutationObserverCallbacks:function(t){return t.pseudoElementsCallback=H0,t}}},provides:function(e){e.pseudoElements2svg=function(t){var n=t.node,s=n===void 0?Kt:n;et.searchPseudoElements&&H0(s)}}},V0=!1,AI={mixout:function(){return{dom:{unwatch:function(){nS(),V0=!0}}}},hooks:function(){return{bootstrap:function(){U0(vp("mutationObserverCallbacks",{}))},noAuto:function(){rI()},watch:function(t){var n=t.observeMutationsRoot;V0?Ep():U0(vp("mutationObserverCallbacks",{observeMutationsRoot:n}))}}}},G0=function(e){var t={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(n,s){var o=s.toLowerCase().split("-"),l=o[0],c=o.slice(1).join("-");if(l&&c==="h")return n.flipX=!0,n;if(l&&c==="v")return n.flipY=!0,n;if(c=parseFloat(c),isNaN(c))return n;switch(l){case"grow":n.size=n.size+c;break;case"shrink":n.size=n.size-c;break;case"left":n.x=n.x-c;break;case"right":n.x=n.x+c;break;case"up":n.y=n.y-c;break;case"down":n.y=n.y+c;break;case"rotate":n.rotate=n.rotate+c;break}return n},t)},RI={mixout:function(){return{parse:{transform:function(t){return G0(t)}}}},hooks:function(){return{parseNodeAttributes:function(t,n){var s=n.getAttribute("data-fa-transform");return s&&(t.transform=G0(s)),t}}},provides:function(e){e.generateAbstractTransformGrouping=function(t){var n=t.main,s=t.transform,o=t.containerWidth,l=t.iconWidth,c={transform:"translate(".concat(o/2," 256)")},f="translate(".concat(s.x*32,", ").concat(s.y*32,") "),d="scale(".concat(s.size/16*(s.flipX?-1:1),", ").concat(s.size/16*(s.flipY?-1:1),") "),p="rotate(".concat(s.rotate," 0 0)"),m={transform:"".concat(f," ").concat(d," ").concat(p)},v={transform:"translate(".concat(l/2*-1," -256)")},y={outer:c,inner:m,path:v};return{tag:"g",attributes:Te({},y.outer),children:[{tag:"g",attributes:Te({},y.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:Te(Te({},n.icon.attributes),y.path)}]}]}}}},dh={x:0,y:0,width:"100%",height:"100%"};function W0(r){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return r.attributes&&(r.attributes.fill||e)&&(r.attributes.fill="black"),r}function CI(r){return r.tag==="g"?r.children:[r]}var PI={hooks:function(){return{parseNodeAttributes:function(t,n){var s=n.getAttribute("data-fa-mask"),o=s?kc(s.split(" ").map(function(l){return l.trim()})):Zx();return o.prefix||(o.prefix=ls()),t.mask=o,t.maskId=n.getAttribute("data-fa-mask-id"),t}}},provides:function(e){e.generateAbstractMask=function(t){var n=t.children,s=t.attributes,o=t.main,l=t.mask,c=t.maskId,f=t.transform,d=o.width,p=o.icon,m=l.width,v=l.icon,y=SL({transform:f,containerWidth:m,iconWidth:d}),E={tag:"rect",attributes:Te(Te({},dh),{},{fill:"white"})},M=p.children?{children:p.children.map(W0)}:{},S={tag:"g",attributes:Te({},y.inner),children:[W0(Te({tag:p.tag,attributes:Te(Te({},p.attributes),y.path)},M))]},_={tag:"g",attributes:Te({},y.outer),children:[S]},R="mask-".concat(c||T0()),C="clip-".concat(c||T0()),b={tag:"mask",attributes:Te(Te({},dh),{},{id:R,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[E,_]},I={tag:"defs",children:[{tag:"clipPath",attributes:{id:C},children:CI(v)},b]};return n.push(I,{tag:"rect",attributes:Te({fill:"currentColor","clip-path":"url(#".concat(C,")"),mask:"url(#".concat(R,")")},dh)}),{children:n,attributes:s}}}},LI={provides:function(e){var t=!1;os.matchMedia&&(t=os.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var n=[],s={fill:"currentColor"},o={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:Te(Te({},s),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var l=Te(Te({},o),{},{attributeName:"opacity"}),c={tag:"circle",attributes:Te(Te({},s),{},{cx:"256",cy:"364",r:"28"}),children:[]};return t||c.children.push({tag:"animate",attributes:Te(Te({},o),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:Te(Te({},l),{},{values:"1;0;1;1;0;1;"})}),n.push(c),n.push({tag:"path",attributes:Te(Te({},s),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:t?[]:[{tag:"animate",attributes:Te(Te({},l),{},{values:"1;0;0;0;0;1;"})}]}),t||n.push({tag:"path",attributes:Te(Te({},s),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:Te(Te({},l),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},II={hooks:function(){return{parseNodeAttributes:function(t,n){var s=n.getAttribute("data-fa-symbol"),o=s===null?!1:s===""?!0:s;return t.symbol=o,t}}}},DI=[TL,pI,mI,gI,vI,bI,AI,RI,PI,LI,II];zL(DI,{mixoutsTo:si});si.noAuto;var NI=si.config;si.library;si.dom;var sS=si.parse;si.findIconDefinition;si.toHtml;var UI=si.icon;si.layer;si.text;si.counter;function FI(r){return r=r-0,r===r}function aS(r){return FI(r)?r:(r=r.replaceAll(/[_-]+(.)?/g,(e,t)=>t?t.toUpperCase():""),r.charAt(0).toLowerCase()+r.slice(1))}function OI(r){return r.charAt(0).toUpperCase()+r.slice(1)}var Ia=new Map,kI=1e3;function BI(r){if(Ia.has(r))return Ia.get(r);const e={};let t=0;const n=r.length;for(;t<n;){const s=r.indexOf(";",t),o=s===-1?n:s,l=r.slice(t,o).trim();if(l){const c=l.indexOf(":");if(c>0){const f=l.slice(0,c).trim(),d=l.slice(c+1).trim();if(f&&d){const p=aS(f);e[p.startsWith("webkit")?OI(p):p]=d}}}t=o+1}if(Ia.size===kI){const s=Ia.keys().next().value;s&&Ia.delete(s)}return Ia.set(r,e),e}function oS(r,e,t={}){if(typeof e=="string")return e;const n=(e.children||[]).map(d=>oS(r,d)),s=e.attributes||{},o={};for(const[d,p]of Object.entries(s))switch(!0){case d==="class":{o.className=p,delete s.class;break}case d==="style":{o.style=BI(String(p));break}case d.startsWith("aria-"):case d.startsWith("data-"):{o[d.toLowerCase()]=p;break}default:o[aS(d)]=p}const{style:l,"aria-label":c,...f}=t;return l&&(o.style=o.style?{...o.style,...l}:l),c&&(o["aria-label"]=c,o["aria-hidden"]="false"),r(e.tag,{...f,...o},...n)}var j0=(r,e)=>{const t=ce.useId();return r||(e?t:void 0)},zI=class{constructor(r="react-fontawesome"){this.enabled=!1;let e=!1;try{e=typeof process<"u"&&!1}catch{}this.scope=r,this.enabled=e}log(...r){this.enabled&&console.log(`[${this.scope}]`,...r)}warn(...r){this.enabled&&console.warn(`[${this.scope}]`,...r)}error(...r){this.enabled&&console.error(`[${this.scope}]`,...r)}},HI="searchPseudoElementsFullScan"in NI?"7.0.0":"6.0.0",VI=Number.parseInt(HI)>=7,mr={beat:"fa-beat",fade:"fa-fade",beatFade:"fa-beat-fade",bounce:"fa-bounce",shake:"fa-shake",spin:"fa-spin",spinPulse:"fa-spin-pulse",spinReverse:"fa-spin-reverse",pulse:"fa-pulse"},GI={left:"fa-pull-left",right:"fa-pull-right"},WI={90:"fa-rotate-90",180:"fa-rotate-180",270:"fa-rotate-270"},jI={"2xs":"fa-2xs",xs:"fa-xs",sm:"fa-sm",lg:"fa-lg",xl:"fa-xl","2xl":"fa-2xl","1x":"fa-1x","2x":"fa-2x","3x":"fa-3x","4x":"fa-4x","5x":"fa-5x","6x":"fa-6x","7x":"fa-7x","8x":"fa-8x","9x":"fa-9x","10x":"fa-10x"},gr={border:"fa-border",fixedWidth:"fa-fw",flip:"fa-flip",flipHorizontal:"fa-flip-horizontal",flipVertical:"fa-flip-vertical",inverse:"fa-inverse",rotateBy:"fa-rotate-by",swapOpacity:"fa-swap-opacity",widthAuto:"fa-width-auto"};function XI(r){const{beat:e,fade:t,beatFade:n,bounce:s,shake:o,spin:l,spinPulse:c,spinReverse:f,pulse:d,fixedWidth:p,inverse:m,border:v,flip:y,size:E,rotation:M,pull:S,swapOpacity:_,rotateBy:R,widthAuto:C,className:b}=r,I=[];return b&&I.push(...b.split(" ")),e&&I.push(mr.beat),t&&I.push(mr.fade),n&&I.push(mr.beatFade),s&&I.push(mr.bounce),o&&I.push(mr.shake),l&&I.push(mr.spin),f&&I.push(mr.spinReverse),c&&I.push(mr.spinPulse),d&&I.push(mr.pulse),p&&I.push(gr.fixedWidth),m&&I.push(gr.inverse),v&&I.push(gr.border),y===!0&&I.push(gr.flip),(y==="horizontal"||y==="both")&&I.push(gr.flipHorizontal),(y==="vertical"||y==="both")&&I.push(gr.flipVertical),E!=null&&I.push(jI[E]),M!=null&&M!==0&&I.push(WI[M]),S!=null&&I.push(GI[S]),_&&I.push(gr.swapOpacity),VI&&(R&&I.push(gr.rotateBy),C&&I.push(gr.widthAuto)),I}var $I=r=>typeof r=="object"&&"icon"in r&&!!r.icon;function X0(r){if(r)return $I(r)?r:sS.icon(r)}function YI(r){return Object.keys(r)}var $0=new zI("FontAwesomeIcon"),lS={border:!1,className:"",mask:void 0,maskId:void 0,fixedWidth:!1,inverse:!1,flip:!1,icon:void 0,listItem:!1,pull:void 0,pulse:!1,rotation:void 0,rotateBy:!1,size:void 0,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:void 0,transform:void 0,swapOpacity:!1,widthAuto:!1},KI=new Set(Object.keys(lS)),Tp=Rc.forwardRef((r,e)=>{const t={...lS,...r},{icon:n,mask:s,symbol:o,title:l,titleId:c,maskId:f,transform:d}=t,p=j0(f,!!s),m=j0(c,!!l),v=X0(n);if(!v)return $0.error("Icon lookup is undefined",n),null;const y=XI(t),E=typeof d=="string"?sS.transform(d):d,M=X0(s),S=UI(v,{...y.length>0&&{classes:y},...E&&{transform:E},...M&&{mask:M},symbol:o,title:l,titleId:m,maskId:p});if(!S)return $0.error("Could not find icon",v),null;const{abstract:_}=S,R={ref:e};for(const C of YI(t))KI.has(C)||(R[C]=t[C]);return qI(_[0],R)});Tp.displayName="FontAwesomeIcon";var qI=oS.bind(null,Rc.createElement);/*!
 * Font Awesome Free 7.0.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2025 Fonticons, Inc.
 */var ZI={prefix:"fas",iconName:"camera",icon:[512,512,[62258,"camera-alt"],"f030","M149.1 64.8L138.7 96 64 96C28.7 96 0 124.7 0 160L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-256c0-35.3-28.7-64-64-64l-74.7 0-10.4-31.2C356.4 45.2 338.1 32 317.4 32L194.6 32c-20.7 0-39 13.2-45.5 32.8zM256 192a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"]},JI={prefix:"fas",iconName:"arrow-left",icon:[512,512,[8592],"f060","M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288 480 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-370.7 0 105.4-105.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"]};const QI=()=>Xe.jsx("h1",{children:"Games"}),eD=()=>Xe.jsx("div",{className:"m-1 h-40 w-40 bg-[var(--love-theme)]",children:Xe.jsx("div",{className:""})}),tD=()=>{const r=[{name:"gift",url:"memory"},{name:"gift",url:"memory"}];return Xe.jsx("div",{className:"flex flex-wrap justify-center h-screen overflow-y-scroll",children:r.map((e,t)=>Xe.jsx(Rc.Fragment,{children:Xe.jsx(Dp,{to:"/gift/"+e?.url,children:Xe.jsx(eD,{})})},t))})},nD="/birthday/assets/angry_devil-C9vWryCs.png",iD=Object.freeze(Object.defineProperty({__proto__:null,default:nD},Symbol.toStringTag,{value:"Module"})),rD="/birthday/assets/angry_ghost-DR-LFie4.png",sD=Object.freeze(Object.defineProperty({__proto__:null,default:rD},Symbol.toStringTag,{value:"Module"})),aD="/birthday/assets/evil_ghost-BPPzUyJ6.png",oD=Object.freeze(Object.defineProperty({__proto__:null,default:aD},Symbol.toStringTag,{value:"Module"})),lD="/birthday/assets/silent_goust-xmP59ofH.png",uD=Object.freeze(Object.defineProperty({__proto__:null,default:lD},Symbol.toStringTag,{value:"Module"})),cD="/birthday/assets/sleepy_ghost-x-2UssXA.png",fD=Object.freeze(Object.defineProperty({__proto__:null,default:cD},Symbol.toStringTag,{value:"Module"})),dD="/birthday/assets/yarn_devil-BttPndVd.png",hD=Object.freeze(Object.defineProperty({__proto__:null,default:dD},Symbol.toStringTag,{value:"Module"})),Y0="/birthday/assets/kesav_dp-CaHQgkT6.jpg",ac=[{text:"oii",dp:!0,position:""},{text:"sollungaa",dp:!1,position:"justify-end"},{text:"oii",dp:!0,position:""},{text:"👿",dp:!1,position:"justify-end"},{text:"oii",dp:!0,position:""},{text:"😏",dp:!1,position:"justify-end"},{text:"oii",dp:!0,position:""},{text:"🫣",dp:!1,position:"justify-end"},{text:"oii",dp:!0,position:""},{text:"🤫",dp:!1,position:"justify-end"},{text:"oii",dp:!0,position:""},{text:"🫡",dp:!1,position:"justify-end"},{text:"😤",dp:!1,position:"justify-end"},{text:"🙄",dp:!1,position:"justify-end"},{text:"👻",dp:!1,position:"justify-end"},{text:"👊👊👊👊👊",dp:!1,position:"justify-end"},{text:"🤕",dp:!1,position:"justify-end"},{emoji:"angry_devil",dp:!1,position:"justify-end"},{emoji:"angry_devil",dp:!1,position:"justify-end"},{emoji:"evil_ghost",dp:!1,position:"justify-end"}],pD="data:image/svg+xml,%3csvg%20width='23'%20height='22'%20viewBox='0%200%2023%2022'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M21.6948%2014.5099L16.2315%2012.2226C15.984%2012.1234%2015.7139%2012.0836%2015.4457%2012.1066C15.1775%2012.1297%2014.9197%2012.2148%2014.6956%2012.3544C14.6729%2012.368%2014.6513%2012.3832%2014.6309%2012.3998L11.7755%2014.6688C11.7459%2014.6838%2011.7129%2014.6922%2011.6792%2014.6934C11.6455%2014.6945%2011.6119%2014.6883%2011.5812%2014.6753C9.74584%2013.8476%207.84456%2012.082%206.95521%2010.3912C6.9404%2010.3629%206.9327%2010.3319%206.9327%2010.3004C6.9327%2010.269%206.9404%2010.2379%206.95521%2010.2097L9.39195%207.50847C9.40945%207.48848%209.42566%207.46757%209.44053%207.44581C9.58785%207.23566%209.67684%206.99455%209.69945%206.74422C9.72207%206.4939%209.67759%206.24226%209.57006%206.01202L7.1391%200.916535C7.00104%200.615744%206.76229%200.364892%206.45868%200.201639C6.15506%200.038382%205.80296%20-0.0284745%205.45523%200.0111031C3.94394%200.196724%202.5567%200.8901%201.55276%201.96168C0.548809%203.03324%20-0.00315514%204.40967%201.35677e-05%205.83375C1.35677e-05%2014.2939%207.36693%2021.1765%2016.4223%2021.1765C17.9465%2021.1791%2019.4197%2020.6633%2020.5666%2019.7254C21.7135%2018.7876%2022.4558%2017.4917%2022.6547%2016.0798C22.697%2015.7565%2022.6264%2015.4291%2022.4534%2015.1461C22.2805%2014.8633%2022.0144%2014.6401%2021.6948%2014.5099ZM16.4223%2019.8798C8.13252%2019.8798%201.38782%2013.5785%201.38782%205.83375C1.38394%204.72511%201.81225%203.65308%202.59271%202.81796C3.37316%201.98282%204.45238%201.44174%205.6287%201.29577H5.6553C5.70191%201.29659%205.74716%201.31054%205.78513%201.3358C5.82311%201.36105%205.85202%201.39644%205.8681%201.43732L8.30832%206.52741C8.32223%206.5557%208.32943%206.58648%208.32943%206.61763C8.32943%206.64878%208.32223%206.67954%208.30832%206.70785L5.86694%209.4155C5.84872%209.43483%205.83211%209.45543%205.81721%209.4771C5.66445%209.69498%205.57449%209.94602%205.55605%2010.2059C5.53762%2010.4658%205.59132%2010.7258%205.71197%2010.9606C6.73779%2012.9227%208.85419%2014.8848%2010.9775%2015.8432C11.2303%2015.9553%2011.5099%2016.0043%2011.789%2015.9854C12.0681%2015.9664%2012.3372%2015.8802%2012.57%2015.7352C12.592%2015.7211%2012.614%2015.706%2012.6348%2015.6898L15.489%2013.4208C15.5172%2013.4067%2015.5483%2013.3984%2015.5803%2013.3965C15.6122%2013.3946%2015.6442%2013.3993%2015.6741%2013.41L21.1385%2015.6974C21.1832%2015.7151%2021.2206%2015.7455%2021.2458%2015.7842C21.2709%2015.8231%2021.2823%2015.8683%2021.2784%2015.9134C21.123%2017.013%2020.5445%2018.0219%2019.6507%2018.7519C18.7571%2019.4819%2017.6094%2019.8828%2016.4223%2019.8798Z'%20fill='black'/%3e%3c/svg%3e",mD="/birthday/assets/video-CDYPFdDi.svg",gD="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M22.7155%203.89403C22.6708%203.80519%2022.6022%203.73059%2022.5174%203.67865C22.4326%203.6267%2022.335%203.59947%2022.2355%203.60003H1.73952C1.62903%203.59888%201.52098%203.63242%201.43056%203.69593C1.34015%203.75944%201.27192%203.84971%201.23552%203.95403C1.19606%204.05736%201.1893%204.17032%201.21613%204.27763C1.24295%204.38494%201.30208%204.48142%201.38552%204.55403L8.58552%2010.716V21.63C8.58619%2021.7433%208.62249%2021.8535%208.68925%2021.945C8.75601%2022.0366%208.84985%2022.1048%208.95751%2022.14C9.01319%2022.1486%209.06984%2022.1486%209.12551%2022.14C9.20935%2022.14%209.29203%2022.1205%209.36701%2022.083C9.44199%2022.0455%209.50722%2021.9911%209.55751%2021.924L22.6495%204.44003C22.7078%204.363%2022.7447%204.27187%2022.7563%204.17594C22.7679%204.08002%2022.7538%203.98274%2022.7155%203.89403V3.89403ZM3.19753%204.68603H19.8775L9.21553%209.82803L3.19753%204.68603ZM9.67752%2010.8L20.4775%205.58603L9.67752%2019.986V10.8Z'%20fill='black'/%3e%3c/svg%3e",vD=Object.assign({"../../assets/images/chats/angry_devil.png":iD,"../../assets/images/chats/angry_ghost.png":sD,"../../assets/images/chats/evil_ghost.png":oD,"../../assets/images/chats/silent_goust.png":uD,"../../assets/images/chats/sleepy_ghost.png":fD,"../../assets/images/chats/yarn_devil.png":hD}),_D=Object.fromEntries(Object.entries(vD).map(([r,e])=>[r.split("/").pop().split(".")[0],e.default])),yD=()=>{const[r,e]=ce.useState(0),t=ce.useRef(null);return ce.useEffect(()=>{if(r<ac.length){const n=setTimeout(()=>{e(s=>s+1)},3e3);return()=>clearTimeout(n)}},[r,ac.length]),ce.useEffect(()=>{t.current&&(t.current.scrollTop=t.current.scrollHeight)},[r]),Xe.jsxs("div",{className:"h-screen",children:[Xe.jsxs("div",{className:"flex justify-between items-center h-14 bg-white-500 border border-white-700",children:[Xe.jsxs("div",{className:"flex",children:[Xe.jsx(Tp,{className:"my-auto",icon:JI,size:"1x"}),Xe.jsxs("div",{className:"h-10 w-10 m-2 rounded-full bg-green-500 border border-black-500 relative",children:[Xe.jsx("img",{className:"rounded-full",src:Y0}),Xe.jsx("div",{className:"absolute bottom-0 -right-0.5 h-2.5 w-2.5 m-auto mr-1 bg-green-500 rounded-full border border-[black]"})]}),Xe.jsxs("div",{className:"flex flex-col",children:[Xe.jsx("div",{className:"text-lg font-bold mt-1",children:"Kesav"}),Xe.jsx("div",{className:"text-sm",children:"active"})]})]}),Xe.jsxs("div",{className:"flex",children:[Xe.jsx("img",{src:pD,className:"font-bold px-1"}),Xe.jsx("img",{src:mD,className:"font-bold px-1"})]})]}),Xe.jsx("div",{className:"h-[83vh] overflow-y-scroll",ref:t,children:Xe.jsx("div",{className:"flex flex-col min-h-[83.5vh] overflow-y-auto p-4 bg-gray-100 justify-end",children:ac.slice(0,r).map((n,s)=>Xe.jsxs("div",{className:"flex relative w-full my-1 "+n.position,children:[n.dp&&Xe.jsx("div",{className:"h-12 w-12 rounded-full overflow-hidden border border-black-500 shadow-md mx-1",children:Xe.jsx("img",{className:"w-12 h-12 object-cover rounded-lg",src:Y0})}),n?.text&&Xe.jsx("div",{className:"showChat max-w-1/2 min-w-6 bg-blue-500 text-white border border-black-500 shadow rounded-3xl h-10 p-2",children:n.text}),n?.emoji&&Xe.jsx("img",{src:_D[n.emoji],className:"h-44 w-44 border border-black-500 shadow rounded-lg"}),n.dp&&Xe.jsxs("div",{className:"text-loader hideLoader absolute left-14 top-2 w-14 h-8 rounded-3xl bg-gray-500",children:[Xe.jsx("span",{className:"absolute left-2 w-3 h-3 rounded-full top-1/2 -translate-y-1/2 bg-gray-700"}),Xe.jsx("span",{className:"absolute right-5 -translate-x-1/2 w-3 h-3 rounded-full top-1/2 -translate-y-1/2 bg-gray-700"}),Xe.jsx("span",{className:"absolute right-1 w-3 h-3 rounded-full top-1/2 -translate-y-1/2 bg-gray-700"})]})]}))})}),Xe.jsx("div",{className:"h-[8vh] mb-5 mx-2",children:Xe.jsxs("div",{className:"flex justify-between h-full rounded-full border bordre-black-700 shadow",children:[Xe.jsx("div",{className:"flex justify-center items-center h-12 w-12 rounded-full my-auto mx-2 bg-violet-500",children:Xe.jsx(Tp,{icon:ZI,style:{color:"white",fontSize:"25px"}})}),Xe.jsx("div",{className:"flex w-44 items-center",children:ac[r]?.text}),Xe.jsx("div",{className:"flex justify-center items-center h-12 w-14 rounded-full my-auto mx-2 bg-violet-500",children:Xe.jsx("img",{src:gD})})]})})]})},K0={type:"change"},pm={type:"start"},uS={type:"end"},oc=new vl,q0=new ns,xD=Math.cos(70*Ny.DEG2RAD),fn=new j,Kn=2*Math.PI,zt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},hh=1e-6;class SD extends Gw{constructor(e,t=null){super(e,t),this.state=zt.NONE,this.target=new j,this.cursor=new j,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Oa.ROTATE,MIDDLE:Oa.DOLLY,RIGHT:Oa.PAN},this.touches={ONE:Na.ROTATE,TWO:Na.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new j,this._lastQuaternion=new $i,this._lastTargetPosition=new j,this._quat=new $i().setFromUnitVectors(e.up,new j(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new G_,this._sphericalDelta=new G_,this._scale=1,this._panOffset=new j,this._rotateStart=new dt,this._rotateEnd=new dt,this._rotateDelta=new dt,this._panStart=new dt,this._panEnd=new dt,this._panDelta=new dt,this._dollyStart=new dt,this._dollyEnd=new dt,this._dollyDelta=new dt,this._dollyDirection=new j,this._mouse=new dt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=MD.bind(this),this._onPointerDown=ED.bind(this),this._onPointerUp=TD.bind(this),this._onContextMenu=LD.bind(this),this._onMouseWheel=AD.bind(this),this._onKeyDown=RD.bind(this),this._onTouchStart=CD.bind(this),this._onTouchMove=PD.bind(this),this._onMouseDown=wD.bind(this),this._onMouseMove=bD.bind(this),this._interceptControlDown=ID.bind(this),this._interceptControlUp=DD.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(K0),this.update(),this.state=zt.NONE}update(e=null){const t=this.object.position;fn.copy(t).sub(this.target),fn.applyQuaternion(this._quat),this._spherical.setFromVector3(fn),this.autoRotate&&this.state===zt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Kn:n>Math.PI&&(n-=Kn),s<-Math.PI?s+=Kn:s>Math.PI&&(s-=Kn),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let o=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const l=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),o=l!=this._spherical.radius}if(fn.setFromSpherical(this._spherical),fn.applyQuaternion(this._quatInverse),t.copy(this.target).add(fn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let l=null;if(this.object.isPerspectiveCamera){const c=fn.length();l=this._clampDistance(c*this._scale);const f=c-l;this.object.position.addScaledVector(this._dollyDirection,f),this.object.updateMatrixWorld(),o=!!f}else if(this.object.isOrthographicCamera){const c=new j(this._mouse.x,this._mouse.y,0);c.unproject(this.object);const f=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),o=f!==this.object.zoom;const d=new j(this._mouse.x,this._mouse.y,0);d.unproject(this.object),this.object.position.sub(d).add(c),this.object.updateMatrixWorld(),l=fn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;l!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(l).add(this.object.position):(oc.origin.copy(this.object.position),oc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(oc.direction))<xD?this.object.lookAt(this.target):(q0.setFromNormalAndCoplanarPoint(this.object.up,this.target),oc.intersectPlane(q0,this.target))))}else if(this.object.isOrthographicCamera){const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),l!==this.object.zoom&&(this.object.updateProjectionMatrix(),o=!0)}return this._scale=1,this._performCursorZoom=!1,o||this._lastPosition.distanceToSquared(this.object.position)>hh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>hh||this._lastTargetPosition.distanceToSquared(this.target)>hh?(this.dispatchEvent(K0),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Kn/60*this.autoRotateSpeed*e:Kn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){fn.setFromMatrixColumn(t,0),fn.multiplyScalar(-e),this._panOffset.add(fn)}_panUp(e,t){this.screenSpacePanning===!0?fn.setFromMatrixColumn(t,1):(fn.setFromMatrixColumn(t,0),fn.crossVectors(this.object.up,fn)),fn.multiplyScalar(e),this._panOffset.add(fn)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;fn.copy(s).sub(this.target);let o=fn.length();o*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*o/n.clientHeight,this.object.matrix),this._panUp(2*t*o/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=e-n.left,o=t-n.top,l=n.width,c=n.height;this._mouse.x=s/l*2-1,this._mouse.y=-(o/c)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Kn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Kn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Kn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Kn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Kn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Kn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(n,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,o=Math.sqrt(n*n+s*s);this._dollyStart.set(0,o)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),s=.5*(e.pageX+n.x),o=.5*(e.pageY+n.y);this._rotateEnd.set(s,o)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Kn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Kn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,o=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,o),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const l=(e.pageX+t.x)*.5,c=(e.pageY+t.y)*.5;this._updateZoomParameters(l,c)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new dt,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function ED(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(r)&&(this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r)))}function MD(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function TD(r){switch(this._removePointer(r),this._pointers.length){case 0:this.domElement.releasePointerCapture(r.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(uS),this.state=zt.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function wD(r){let e;switch(r.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Oa.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(r),this.state=zt.DOLLY;break;case Oa.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=zt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=zt.ROTATE}break;case Oa.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=zt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=zt.PAN}break;default:this.state=zt.NONE}this.state!==zt.NONE&&this.dispatchEvent(pm)}function bD(r){switch(this.state){case zt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(r);break;case zt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(r);break;case zt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(r);break}}function AD(r){this.enabled===!1||this.enableZoom===!1||this.state!==zt.NONE||(r.preventDefault(),this.dispatchEvent(pm),this._handleMouseWheel(this._customWheelEvent(r)),this.dispatchEvent(uS))}function RD(r){this.enabled!==!1&&this._handleKeyDown(r)}function CD(r){switch(this._trackPointer(r),this._pointers.length){case 1:switch(this.touches.ONE){case Na.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(r),this.state=zt.TOUCH_ROTATE;break;case Na.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(r),this.state=zt.TOUCH_PAN;break;default:this.state=zt.NONE}break;case 2:switch(this.touches.TWO){case Na.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(r),this.state=zt.TOUCH_DOLLY_PAN;break;case Na.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(r),this.state=zt.TOUCH_DOLLY_ROTATE;break;default:this.state=zt.NONE}break;default:this.state=zt.NONE}this.state!==zt.NONE&&this.dispatchEvent(pm)}function PD(r){switch(this._trackPointer(r),this.state){case zt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(r),this.update();break;case zt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(r),this.update();break;case zt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(r),this.update();break;case zt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(r),this.update();break;default:this.state=zt.NONE}}function LD(r){this.enabled!==!1&&r.preventDefault()}function ID(r){r.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function DD(r){r.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Z0(r,e){if(e===eT)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(e===rp||e===Ly){let t=r.getIndex();if(t===null){const l=[],c=r.getAttribute("position");if(c!==void 0){for(let f=0;f<c.count;f++)l.push(f);r.setIndex(l),t=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}const n=t.count-2,s=[];if(e===rp)for(let l=1;l<=n;l++)s.push(t.getX(0)),s.push(t.getX(l)),s.push(t.getX(l+1));else for(let l=0;l<n;l++)l%2===0?(s.push(t.getX(l)),s.push(t.getX(l+1)),s.push(t.getX(l+2))):(s.push(t.getX(l+2)),s.push(t.getX(l+1)),s.push(t.getX(l)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const o=r.clone();return o.setIndex(s),o.clearGroups(),o}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),r}class ND extends no{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new BD(t)}),this.register(function(t){return new zD(t)}),this.register(function(t){return new KD(t)}),this.register(function(t){return new qD(t)}),this.register(function(t){return new ZD(t)}),this.register(function(t){return new VD(t)}),this.register(function(t){return new GD(t)}),this.register(function(t){return new WD(t)}),this.register(function(t){return new jD(t)}),this.register(function(t){return new kD(t)}),this.register(function(t){return new XD(t)}),this.register(function(t){return new HD(t)}),this.register(function(t){return new YD(t)}),this.register(function(t){return new $D(t)}),this.register(function(t){return new FD(t)}),this.register(function(t){return new JD(t)}),this.register(function(t){return new QD(t)})}load(e,t,n,s){const o=this;let l;if(this.resourcePath!=="")l=this.resourcePath;else if(this.path!==""){const d=el.extractUrlBase(e);l=el.resolveURL(d,this.path)}else l=el.extractUrlBase(e);this.manager.itemStart(e);const c=function(d){s?s(d):console.error(d),o.manager.itemError(e),o.manager.itemEnd(e)},f=new Jy(this.manager);f.setPath(this.path),f.setResponseType("arraybuffer"),f.setRequestHeader(this.requestHeader),f.setWithCredentials(this.withCredentials),f.load(e,function(d){try{o.parse(d,l,function(p){t(p),o.manager.itemEnd(e)},c)}catch(p){c(p)}},n,c)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let o;const l={},c={},f=new TextDecoder;if(typeof e=="string")o=JSON.parse(e);else if(e instanceof ArrayBuffer)if(f.decode(new Uint8Array(e,0,4))===cS){try{l[Tt.KHR_BINARY_GLTF]=new eN(e)}catch(m){s&&s(m);return}o=JSON.parse(l[Tt.KHR_BINARY_GLTF].content)}else o=JSON.parse(f.decode(e));else o=e;if(o.asset===void 0||o.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const d=new hN(o,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});d.fileLoader.setRequestHeader(this.requestHeader);for(let p=0;p<this.pluginCallbacks.length;p++){const m=this.pluginCallbacks[p](d);m.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),c[m.name]=m,l[m.name]=!0}if(o.extensionsUsed)for(let p=0;p<o.extensionsUsed.length;++p){const m=o.extensionsUsed[p],v=o.extensionsRequired||[];switch(m){case Tt.KHR_MATERIALS_UNLIT:l[m]=new OD;break;case Tt.KHR_DRACO_MESH_COMPRESSION:l[m]=new tN(o,this.dracoLoader);break;case Tt.KHR_TEXTURE_TRANSFORM:l[m]=new nN;break;case Tt.KHR_MESH_QUANTIZATION:l[m]=new iN;break;default:v.indexOf(m)>=0&&c[m]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+m+'".')}}d.setExtensions(l),d.setPlugins(c),d.parse(n,s)}parseAsync(e,t){const n=this;return new Promise(function(s,o){n.parse(e,t,s,o)})}}function UD(){let r={};return{get:function(e){return r[e]},add:function(e,t){r[e]=t},remove:function(e){delete r[e]},removeAll:function(){r={}}}}const Tt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class FD{constructor(e){this.parser=e,this.name=Tt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){const o=t[n];o.extensions&&o.extensions[this.name]&&o.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,o.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let s=t.cache.get(n);if(s)return s;const o=t.json,f=((o.extensions&&o.extensions[this.name]||{}).lights||[])[e];let d;const p=new mt(16777215);f.color!==void 0&&p.setRGB(f.color[0],f.color[1],f.color[2],Vn);const m=f.range!==void 0?f.range:0;switch(f.type){case"directional":d=new ex(p),d.target.position.set(0,0,-1),d.add(d.target);break;case"point":d=new Qy(p),d.distance=m;break;case"spot":d=new Rw(p),d.distance=m,f.spot=f.spot||{},f.spot.innerConeAngle=f.spot.innerConeAngle!==void 0?f.spot.innerConeAngle:0,f.spot.outerConeAngle=f.spot.outerConeAngle!==void 0?f.spot.outerConeAngle:Math.PI/4,d.angle=f.spot.outerConeAngle,d.penumbra=1-f.spot.innerConeAngle/f.spot.outerConeAngle,d.target.position.set(0,0,-1),d.add(d.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+f.type)}return d.position.set(0,0,0),Bi(d,f),f.intensity!==void 0&&(d.intensity=f.intensity),d.name=t.createUniqueName(f.name||"light_"+e),s=Promise.resolve(d),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,o=n.json.nodes[e],c=(o.extensions&&o.extensions[this.name]||{}).light;return c===void 0?null:this._loadLight(c).then(function(f){return n._getNodeRef(t.cache,c,f)})}}class OD{constructor(){this.name=Tt.KHR_MATERIALS_UNLIT}getMaterialType(){return Fs}extendParams(e,t,n){const s=[];e.color=new mt(1,1,1),e.opacity=1;const o=t.pbrMetallicRoughness;if(o){if(Array.isArray(o.baseColorFactor)){const l=o.baseColorFactor;e.color.setRGB(l[0],l[1],l[2],Vn),e.opacity=l[3]}o.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",o.baseColorTexture,Sn))}return Promise.all(s)}}class kD{constructor(e){this.parser=e,this.name=Tt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const o=s.extensions[this.name].emissiveStrength;return o!==void 0&&(t.emissiveIntensity=o),Promise.resolve()}}class BD{constructor(e){this.parser=e,this.name=Tt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ji}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const o=[],l=s.extensions[this.name];if(l.clearcoatFactor!==void 0&&(t.clearcoat=l.clearcoatFactor),l.clearcoatTexture!==void 0&&o.push(n.assignTexture(t,"clearcoatMap",l.clearcoatTexture)),l.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=l.clearcoatRoughnessFactor),l.clearcoatRoughnessTexture!==void 0&&o.push(n.assignTexture(t,"clearcoatRoughnessMap",l.clearcoatRoughnessTexture)),l.clearcoatNormalTexture!==void 0&&(o.push(n.assignTexture(t,"clearcoatNormalMap",l.clearcoatNormalTexture)),l.clearcoatNormalTexture.scale!==void 0)){const c=l.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new dt(c,c)}return Promise.all(o)}}class zD{constructor(e){this.parser=e,this.name=Tt.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ji}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const o=s.extensions[this.name];return t.dispersion=o.dispersion!==void 0?o.dispersion:0,Promise.resolve()}}class HD{constructor(e){this.parser=e,this.name=Tt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ji}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const o=[],l=s.extensions[this.name];return l.iridescenceFactor!==void 0&&(t.iridescence=l.iridescenceFactor),l.iridescenceTexture!==void 0&&o.push(n.assignTexture(t,"iridescenceMap",l.iridescenceTexture)),l.iridescenceIor!==void 0&&(t.iridescenceIOR=l.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),l.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=l.iridescenceThicknessMinimum),l.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=l.iridescenceThicknessMaximum),l.iridescenceThicknessTexture!==void 0&&o.push(n.assignTexture(t,"iridescenceThicknessMap",l.iridescenceThicknessTexture)),Promise.all(o)}}class VD{constructor(e){this.parser=e,this.name=Tt.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ji}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const o=[];t.sheenColor=new mt(0,0,0),t.sheenRoughness=0,t.sheen=1;const l=s.extensions[this.name];if(l.sheenColorFactor!==void 0){const c=l.sheenColorFactor;t.sheenColor.setRGB(c[0],c[1],c[2],Vn)}return l.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=l.sheenRoughnessFactor),l.sheenColorTexture!==void 0&&o.push(n.assignTexture(t,"sheenColorMap",l.sheenColorTexture,Sn)),l.sheenRoughnessTexture!==void 0&&o.push(n.assignTexture(t,"sheenRoughnessMap",l.sheenRoughnessTexture)),Promise.all(o)}}class GD{constructor(e){this.parser=e,this.name=Tt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ji}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const o=[],l=s.extensions[this.name];return l.transmissionFactor!==void 0&&(t.transmission=l.transmissionFactor),l.transmissionTexture!==void 0&&o.push(n.assignTexture(t,"transmissionMap",l.transmissionTexture)),Promise.all(o)}}class WD{constructor(e){this.parser=e,this.name=Tt.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ji}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const o=[],l=s.extensions[this.name];t.thickness=l.thicknessFactor!==void 0?l.thicknessFactor:0,l.thicknessTexture!==void 0&&o.push(n.assignTexture(t,"thicknessMap",l.thicknessTexture)),t.attenuationDistance=l.attenuationDistance||1/0;const c=l.attenuationColor||[1,1,1];return t.attenuationColor=new mt().setRGB(c[0],c[1],c[2],Vn),Promise.all(o)}}class jD{constructor(e){this.parser=e,this.name=Tt.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ji}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const o=s.extensions[this.name];return t.ior=o.ior!==void 0?o.ior:1.5,Promise.resolve()}}class XD{constructor(e){this.parser=e,this.name=Tt.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ji}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const o=[],l=s.extensions[this.name];t.specularIntensity=l.specularFactor!==void 0?l.specularFactor:1,l.specularTexture!==void 0&&o.push(n.assignTexture(t,"specularIntensityMap",l.specularTexture));const c=l.specularColorFactor||[1,1,1];return t.specularColor=new mt().setRGB(c[0],c[1],c[2],Vn),l.specularColorTexture!==void 0&&o.push(n.assignTexture(t,"specularColorMap",l.specularColorTexture,Sn)),Promise.all(o)}}class $D{constructor(e){this.parser=e,this.name=Tt.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ji}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const o=[],l=s.extensions[this.name];return t.bumpScale=l.bumpFactor!==void 0?l.bumpFactor:1,l.bumpTexture!==void 0&&o.push(n.assignTexture(t,"bumpMap",l.bumpTexture)),Promise.all(o)}}class YD{constructor(e){this.parser=e,this.name=Tt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ji}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const o=[],l=s.extensions[this.name];return l.anisotropyStrength!==void 0&&(t.anisotropy=l.anisotropyStrength),l.anisotropyRotation!==void 0&&(t.anisotropyRotation=l.anisotropyRotation),l.anisotropyTexture!==void 0&&o.push(n.assignTexture(t,"anisotropyMap",l.anisotropyTexture)),Promise.all(o)}}class KD{constructor(e){this.parser=e,this.name=Tt.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const o=s.extensions[this.name],l=t.options.ktx2Loader;if(!l){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,o.source,l)}}class qD{constructor(e){this.parser=e,this.name=Tt.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,n=this.parser,s=n.json,o=s.textures[e];if(!o.extensions||!o.extensions[t])return null;const l=o.extensions[t],c=s.images[l.source];let f=n.textureLoader;if(c.uri){const d=n.options.manager.getHandler(c.uri);d!==null&&(f=d)}return n.loadTextureImage(e,l.source,f)}}class ZD{constructor(e){this.parser=e,this.name=Tt.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,n=this.parser,s=n.json,o=s.textures[e];if(!o.extensions||!o.extensions[t])return null;const l=o.extensions[t],c=s.images[l.source];let f=n.textureLoader;if(c.uri){const d=n.options.manager.getHandler(c.uri);d!==null&&(f=d)}return n.loadTextureImage(e,l.source,f)}}class JD{constructor(e){this.name=Tt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const s=n.extensions[this.name],o=this.parser.getDependency("buffer",s.buffer),l=this.parser.options.meshoptDecoder;if(!l||!l.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return o.then(function(c){const f=s.byteOffset||0,d=s.byteLength||0,p=s.count,m=s.byteStride,v=new Uint8Array(c,f,d);return l.decodeGltfBufferAsync?l.decodeGltfBufferAsync(p,m,v,s.mode,s.filter).then(function(y){return y.buffer}):l.ready.then(function(){const y=new ArrayBuffer(p*m);return l.decodeGltfBuffer(new Uint8Array(y),p,m,v,s.mode,s.filter),y})})}else return null}}class QD{constructor(e){this.name=Tt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const s=t.meshes[n.mesh];for(const d of s.primitives)if(d.mode!==pi.TRIANGLES&&d.mode!==pi.TRIANGLE_STRIP&&d.mode!==pi.TRIANGLE_FAN&&d.mode!==void 0)return null;const l=n.extensions[this.name].attributes,c=[],f={};for(const d in l)c.push(this.parser.getDependency("accessor",l[d]).then(p=>(f[d]=p,f[d])));return c.length<1?null:(c.push(this.parser.createNodeMesh(e)),Promise.all(c).then(d=>{const p=d.pop(),m=p.isGroup?p.children:[p],v=d[0].count,y=[];for(const E of m){const M=new _t,S=new j,_=new $i,R=new j(1,1,1),C=new sw(E.geometry,E.material,v);for(let b=0;b<v;b++)f.TRANSLATION&&S.fromBufferAttribute(f.TRANSLATION,b),f.ROTATION&&_.fromBufferAttribute(f.ROTATION,b),f.SCALE&&R.fromBufferAttribute(f.SCALE,b),C.setMatrixAt(b,M.compose(S,_,R));for(const b in f)if(b==="_COLOR_0"){const I=f[b];C.instanceColor=new ap(I.array,I.itemSize,I.normalized)}else b!=="TRANSLATION"&&b!=="ROTATION"&&b!=="SCALE"&&E.geometry.setAttribute(b,f[b]);en.prototype.copy.call(C,E),this.parser.assignFinalMaterial(C),y.push(C)}return p.isGroup?(p.clear(),p.add(...y),p):y[0]}))}}const cS="glTF",Yo=12,J0={JSON:1313821514,BIN:5130562};class eN{constructor(e){this.name=Tt.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Yo),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==cS)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-Yo,o=new DataView(e,Yo);let l=0;for(;l<s;){const c=o.getUint32(l,!0);l+=4;const f=o.getUint32(l,!0);if(l+=4,f===J0.JSON){const d=new Uint8Array(e,Yo+l,c);this.content=n.decode(d)}else if(f===J0.BIN){const d=Yo+l;this.body=e.slice(d,d+c)}l+=c}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class tN{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Tt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,s=this.dracoLoader,o=e.extensions[this.name].bufferView,l=e.extensions[this.name].attributes,c={},f={},d={};for(const p in l){const m=wp[p]||p.toLowerCase();c[m]=l[p]}for(const p in e.attributes){const m=wp[p]||p.toLowerCase();if(l[p]!==void 0){const v=n.accessors[e.attributes[p]],y=Ha[v.componentType];d[m]=y.name,f[m]=v.normalized===!0}}return t.getDependency("bufferView",o).then(function(p){return new Promise(function(m,v){s.decodeDracoFile(p,function(y){for(const E in y.attributes){const M=y.attributes[E],S=f[E];S!==void 0&&(M.normalized=S)}m(y)},c,d,Vn,v)})})}}class nN{constructor(){this.name=Tt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class iN{constructor(){this.name=Tt.KHR_MESH_QUANTIZATION}}class fS extends yl{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,o=e*s*3+s;for(let l=0;l!==s;l++)t[l]=n[o+l];return t}interpolate_(e,t,n,s){const o=this.resultBuffer,l=this.sampleValues,c=this.valueSize,f=c*2,d=c*3,p=s-t,m=(n-t)/p,v=m*m,y=v*m,E=e*d,M=E-d,S=-2*y+3*v,_=y-v,R=1-S,C=_-v+m;for(let b=0;b!==c;b++){const I=l[M+b+c],F=l[M+b+f]*p,U=l[E+b+c],X=l[E+b]*p;o[b]=R*I+C*F+S*U+_*X}return o}}const rN=new $i;class sN extends fS{interpolate_(e,t,n,s){const o=super.interpolate_(e,t,n,s);return rN.fromArray(o).normalize().toArray(o),o}}const pi={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Ha={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Q0={9728:Hn,9729:ri,9984:My,9985:cc,9986:Ko,9987:_r},ey={33071:rs,33648:xc,10497:ja},ph={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},wp={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ts={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},aN={CUBICSPLINE:void 0,LINEAR:ul,STEP:ll},mh={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function oN(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new qp({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Mr})),r.DefaultMaterial}function Is(r,e,t){for(const n in t.extensions)r[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Bi(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function lN(r,e,t){let n=!1,s=!1,o=!1;for(let d=0,p=e.length;d<p;d++){const m=e[d];if(m.POSITION!==void 0&&(n=!0),m.NORMAL!==void 0&&(s=!0),m.COLOR_0!==void 0&&(o=!0),n&&s&&o)break}if(!n&&!s&&!o)return Promise.resolve(r);const l=[],c=[],f=[];for(let d=0,p=e.length;d<p;d++){const m=e[d];if(n){const v=m.POSITION!==void 0?t.getDependency("accessor",m.POSITION):r.attributes.position;l.push(v)}if(s){const v=m.NORMAL!==void 0?t.getDependency("accessor",m.NORMAL):r.attributes.normal;c.push(v)}if(o){const v=m.COLOR_0!==void 0?t.getDependency("accessor",m.COLOR_0):r.attributes.color;f.push(v)}}return Promise.all([Promise.all(l),Promise.all(c),Promise.all(f)]).then(function(d){const p=d[0],m=d[1],v=d[2];return n&&(r.morphAttributes.position=p),s&&(r.morphAttributes.normal=m),o&&(r.morphAttributes.color=v),r.morphTargetsRelative=!0,r})}function uN(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)r.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(r.morphTargetInfluences.length===t.length){r.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)r.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function cN(r){let e;const t=r.extensions&&r.extensions[Tt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+gh(t.attributes):e=r.indices+":"+gh(r.attributes)+":"+r.mode,r.targets!==void 0)for(let n=0,s=r.targets.length;n<s;n++)e+=":"+gh(r.targets[n]);return e}function gh(r){let e="";const t=Object.keys(r).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+r[t[n]]+";";return e}function bp(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function fN(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":r.search(/\.ktx2($|\?)/i)>0||r.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const dN=new _t;class hN{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new UD,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,o=!1,l=-1;if(typeof navigator<"u"){const c=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(c)===!0;const f=c.match(/Version\/(\d+)/);s=n&&f?parseInt(f[1],10):-1,o=c.indexOf("Firefox")>-1,l=o?c.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||o&&l<98?this.textureLoader=new bw(this.options.manager):this.textureLoader=new Iw(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Jy(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,s=this.json,o=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(l){return l._markDefs&&l._markDefs()}),Promise.all(this._invokeAll(function(l){return l.beforeRoot&&l.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(l){const c={scene:l[0][s.scene||0],scenes:l[0],animations:l[1],cameras:l[2],asset:s.asset,parser:n,userData:{}};return Is(o,c,s),Bi(c,s),Promise.all(n._invokeAll(function(f){return f.afterRoot&&f.afterRoot(c)})).then(function(){for(const f of c.scenes)f.updateMatrixWorld();e(c)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,o=t.length;s<o;s++){const l=t[s].joints;for(let c=0,f=l.length;c<f;c++)e[l[c]].isBone=!0}for(let s=0,o=e.length;s<o;s++){const l=e[s];l.mesh!==void 0&&(this._addNodeRef(this.meshCache,l.mesh),l.skin!==void 0&&(n[l.mesh].isSkinnedMesh=!0)),l.camera!==void 0&&this._addNodeRef(this.cameraCache,l.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const s=n.clone(),o=(l,c)=>{const f=this.associations.get(l);f!=null&&this.associations.set(c,f);for(const[d,p]of l.children.entries())o(p,c.children[d])};return o(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const s=e(t[n]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let s=0;s<t.length;s++){const o=e(t[s]);o&&n.push(o)}return n}getDependency(e,t){const n=e+":"+t;let s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(o){return o.loadNode&&o.loadNode(t)});break;case"mesh":s=this._invokeOne(function(o){return o.loadMesh&&o.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(o){return o.loadBufferView&&o.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(o){return o.loadMaterial&&o.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(o){return o.loadTexture&&o.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(o){return o.loadAnimation&&o.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(o){return o!=this&&o.getDependency&&o.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(o,l){return n.getDependency(e,l)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Tt.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(o,l){n.load(el.resolveURL(t.uri,s.path),o,void 0,function(){l(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const s=t.byteLength||0,o=t.byteOffset||0;return n.slice(o,o+s)})}loadAccessor(e){const t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){const l=ph[s.type],c=Ha[s.componentType],f=s.normalized===!0,d=new c(s.count*l);return Promise.resolve(new In(d,l,f))}const o=[];return s.bufferView!==void 0?o.push(this.getDependency("bufferView",s.bufferView)):o.push(null),s.sparse!==void 0&&(o.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),o.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(o).then(function(l){const c=l[0],f=ph[s.type],d=Ha[s.componentType],p=d.BYTES_PER_ELEMENT,m=p*f,v=s.byteOffset||0,y=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,E=s.normalized===!0;let M,S;if(y&&y!==m){const _=Math.floor(v/y),R="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+_+":"+s.count;let C=t.cache.get(R);C||(M=new d(c,_*y,s.count*y/p),C=new ew(M,y/p),t.cache.add(R,C)),S=new Wp(C,f,v%y/p,E)}else c===null?M=new d(s.count*f):M=new d(c,v,s.count*f),S=new In(M,f,E);if(s.sparse!==void 0){const _=ph.SCALAR,R=Ha[s.sparse.indices.componentType],C=s.sparse.indices.byteOffset||0,b=s.sparse.values.byteOffset||0,I=new R(l[1],C,s.sparse.count*_),F=new d(l[2],b,s.sparse.count*f);c!==null&&(S=new In(S.array.slice(),S.itemSize,S.normalized)),S.normalized=!1;for(let U=0,X=I.length;U<X;U++){const P=I[U];if(S.setX(P,F[U*f]),f>=2&&S.setY(P,F[U*f+1]),f>=3&&S.setZ(P,F[U*f+2]),f>=4&&S.setW(P,F[U*f+3]),f>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}S.normalized=E}return S})}loadTexture(e){const t=this.json,n=this.options,o=t.textures[e].source,l=t.images[o];let c=this.textureLoader;if(l.uri){const f=n.manager.getHandler(l.uri);f!==null&&(c=f)}return this.loadTextureImage(e,o,c)}loadTextureImage(e,t,n){const s=this,o=this.json,l=o.textures[e],c=o.images[t],f=(c.uri||c.bufferView)+":"+l.sampler;if(this.textureCache[f])return this.textureCache[f];const d=this.loadImageSource(t,n).then(function(p){p.flipY=!1,p.name=l.name||c.name||"",p.name===""&&typeof c.uri=="string"&&c.uri.startsWith("data:image/")===!1&&(p.name=c.uri);const v=(o.samplers||{})[l.sampler]||{};return p.magFilter=Q0[v.magFilter]||ri,p.minFilter=Q0[v.minFilter]||_r,p.wrapS=ey[v.wrapS]||ja,p.wrapT=ey[v.wrapT]||ja,p.generateMipmaps=!p.isCompressedTexture&&p.minFilter!==Hn&&p.minFilter!==ri,s.associations.set(p,{textures:e}),p}).catch(function(){return null});return this.textureCache[f]=d,d}loadImageSource(e,t){const n=this,s=this.json,o=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(m=>m.clone());const l=s.images[e],c=self.URL||self.webkitURL;let f=l.uri||"",d=!1;if(l.bufferView!==void 0)f=n.getDependency("bufferView",l.bufferView).then(function(m){d=!0;const v=new Blob([m],{type:l.mimeType});return f=c.createObjectURL(v),f});else if(l.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const p=Promise.resolve(f).then(function(m){return new Promise(function(v,y){let E=v;t.isImageBitmapLoader===!0&&(E=function(M){const S=new _n(M);S.needsUpdate=!0,v(S)}),t.load(el.resolveURL(m,o.path),E,void 0,y)})}).then(function(m){return d===!0&&c.revokeObjectURL(f),Bi(m,l),m.userData.mimeType=l.mimeType||fN(l.uri),m}).catch(function(m){throw console.error("THREE.GLTFLoader: Couldn't load texture",f),m});return this.sourceCache[e]=p,p}assignTexture(e,t,n,s){const o=this;return this.getDependency("texture",n.index).then(function(l){if(!l)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(l=l.clone(),l.channel=n.texCoord),o.extensions[Tt.KHR_TEXTURE_TRANSFORM]){const c=n.extensions!==void 0?n.extensions[Tt.KHR_TEXTURE_TRANSFORM]:void 0;if(c){const f=o.associations.get(l);l=o.extensions[Tt.KHR_TEXTURE_TRANSFORM].extendTexture(l,c),o.associations.set(l,f)}}return s!==void 0&&(l.colorSpace=s),e[t]=l,l})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const s=t.attributes.tangent===void 0,o=t.attributes.color!==void 0,l=t.attributes.normal===void 0;if(e.isPoints){const c="PointsMaterial:"+n.uuid;let f=this.cache.get(c);f||(f=new Yp,Wi.prototype.copy.call(f,n),f.color.copy(n.color),f.map=n.map,f.sizeAttenuation=!1,this.cache.add(c,f)),n=f}else if(e.isLine){const c="LineBasicMaterial:"+n.uuid;let f=this.cache.get(c);f||(f=new Xy,Wi.prototype.copy.call(f,n),f.color.copy(n.color),f.map=n.map,this.cache.add(c,f)),n=f}if(s||o||l){let c="ClonedMaterial:"+n.uuid+":";s&&(c+="derivative-tangents:"),o&&(c+="vertex-colors:"),l&&(c+="flat-shading:");let f=this.cache.get(c);f||(f=n.clone(),o&&(f.vertexColors=!0),l&&(f.flatShading=!0),s&&(f.normalScale&&(f.normalScale.y*=-1),f.clearcoatNormalScale&&(f.clearcoatNormalScale.y*=-1)),this.cache.add(c,f),this.associations.set(f,this.associations.get(n))),n=f}e.material=n}getMaterialType(){return qp}loadMaterial(e){const t=this,n=this.json,s=this.extensions,o=n.materials[e];let l;const c={},f=o.extensions||{},d=[];if(f[Tt.KHR_MATERIALS_UNLIT]){const m=s[Tt.KHR_MATERIALS_UNLIT];l=m.getMaterialType(),d.push(m.extendParams(c,o,t))}else{const m=o.pbrMetallicRoughness||{};if(c.color=new mt(1,1,1),c.opacity=1,Array.isArray(m.baseColorFactor)){const v=m.baseColorFactor;c.color.setRGB(v[0],v[1],v[2],Vn),c.opacity=v[3]}m.baseColorTexture!==void 0&&d.push(t.assignTexture(c,"map",m.baseColorTexture,Sn)),c.metalness=m.metallicFactor!==void 0?m.metallicFactor:1,c.roughness=m.roughnessFactor!==void 0?m.roughnessFactor:1,m.metallicRoughnessTexture!==void 0&&(d.push(t.assignTexture(c,"metalnessMap",m.metallicRoughnessTexture)),d.push(t.assignTexture(c,"roughnessMap",m.metallicRoughnessTexture))),l=this._invokeOne(function(v){return v.getMaterialType&&v.getMaterialType(e)}),d.push(Promise.all(this._invokeAll(function(v){return v.extendMaterialParams&&v.extendMaterialParams(e,c)})))}o.doubleSided===!0&&(c.side=Hi);const p=o.alphaMode||mh.OPAQUE;if(p===mh.BLEND?(c.transparent=!0,c.depthWrite=!1):(c.transparent=!1,p===mh.MASK&&(c.alphaTest=o.alphaCutoff!==void 0?o.alphaCutoff:.5)),o.normalTexture!==void 0&&l!==Fs&&(d.push(t.assignTexture(c,"normalMap",o.normalTexture)),c.normalScale=new dt(1,1),o.normalTexture.scale!==void 0)){const m=o.normalTexture.scale;c.normalScale.set(m,m)}if(o.occlusionTexture!==void 0&&l!==Fs&&(d.push(t.assignTexture(c,"aoMap",o.occlusionTexture)),o.occlusionTexture.strength!==void 0&&(c.aoMapIntensity=o.occlusionTexture.strength)),o.emissiveFactor!==void 0&&l!==Fs){const m=o.emissiveFactor;c.emissive=new mt().setRGB(m[0],m[1],m[2],Vn)}return o.emissiveTexture!==void 0&&l!==Fs&&d.push(t.assignTexture(c,"emissiveMap",o.emissiveTexture,Sn)),Promise.all(d).then(function(){const m=new l(c);return o.name&&(m.name=o.name),Bi(m,o),t.associations.set(m,{materials:e}),o.extensions&&Is(s,m,o),m})}createUniqueName(e){const t=Ft.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,s=this.primitiveCache;function o(c){return n[Tt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(c,t).then(function(f){return ty(f,c,t)})}const l=[];for(let c=0,f=e.length;c<f;c++){const d=e[c],p=cN(d),m=s[p];if(m)l.push(m.promise);else{let v;d.extensions&&d.extensions[Tt.KHR_DRACO_MESH_COMPRESSION]?v=o(d):v=ty(new vi,d,t),s[p]={primitive:d,promise:v},l.push(v)}}return Promise.all(l)}loadMesh(e){const t=this,n=this.json,s=this.extensions,o=n.meshes[e],l=o.primitives,c=[];for(let f=0,d=l.length;f<d;f++){const p=l[f].material===void 0?oN(this.cache):this.getDependency("material",l[f].material);c.push(p)}return c.push(t.loadGeometries(l)),Promise.all(c).then(function(f){const d=f.slice(0,f.length-1),p=f[f.length-1],m=[];for(let y=0,E=p.length;y<E;y++){const M=p[y],S=l[y];let _;const R=d[y];if(S.mode===pi.TRIANGLES||S.mode===pi.TRIANGLE_STRIP||S.mode===pi.TRIANGLE_FAN||S.mode===void 0)_=o.isSkinnedMesh===!0?new nw(M,R):new qn(M,R),_.isSkinnedMesh===!0&&_.normalizeSkinWeights(),S.mode===pi.TRIANGLE_STRIP?_.geometry=Z0(_.geometry,Ly):S.mode===pi.TRIANGLE_FAN&&(_.geometry=Z0(_.geometry,rp));else if(S.mode===pi.LINES)_=new uw(M,R);else if(S.mode===pi.LINE_STRIP)_=new $p(M,R);else if(S.mode===pi.LINE_LOOP)_=new cw(M,R);else if(S.mode===pi.POINTS)_=new $y(M,R);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+S.mode);Object.keys(_.geometry.morphAttributes).length>0&&uN(_,o),_.name=t.createUniqueName(o.name||"mesh_"+e),Bi(_,o),S.extensions&&Is(s,_,S),t.assignFinalMaterial(_),m.push(_)}for(let y=0,E=m.length;y<E;y++)t.associations.set(m[y],{meshes:e,primitives:y});if(m.length===1)return o.extensions&&Is(s,m[0],o),m[0];const v=new Os;o.extensions&&Is(s,v,o),t.associations.set(v,{meshes:e});for(let y=0,E=m.length;y<E;y++)v.add(m[y]);return v})}loadCamera(e){let t;const n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Bn(Ny.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new Jp(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Bi(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let s=0,o=t.joints.length;s<o;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){const o=s.pop(),l=s,c=[],f=[];for(let d=0,p=l.length;d<p;d++){const m=l[d];if(m){c.push(m);const v=new _t;o!==null&&v.fromArray(o.array,d*16),f.push(v)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[d])}return new jp(c,f)})}loadAnimation(e){const t=this.json,n=this,s=t.animations[e],o=s.name?s.name:"animation_"+e,l=[],c=[],f=[],d=[],p=[];for(let m=0,v=s.channels.length;m<v;m++){const y=s.channels[m],E=s.samplers[y.sampler],M=y.target,S=M.node,_=s.parameters!==void 0?s.parameters[E.input]:E.input,R=s.parameters!==void 0?s.parameters[E.output]:E.output;M.node!==void 0&&(l.push(this.getDependency("node",S)),c.push(this.getDependency("accessor",_)),f.push(this.getDependency("accessor",R)),d.push(E),p.push(M))}return Promise.all([Promise.all(l),Promise.all(c),Promise.all(f),Promise.all(d),Promise.all(p)]).then(function(m){const v=m[0],y=m[1],E=m[2],M=m[3],S=m[4],_=[];for(let C=0,b=v.length;C<b;C++){const I=v[C],F=y[C],U=E[C],X=M[C],P=S[C];if(I===void 0)continue;I.updateMatrix&&I.updateMatrix();const L=n._createAnimationTracks(I,F,U,X,P);if(L)for(let z=0;z<L.length;z++)_.push(L[z])}const R=new yw(o,void 0,_);return Bi(R,s),R})}createNodeMesh(e){const t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(o){const l=n._getNodeRef(n.meshCache,s.mesh,o);return s.weights!==void 0&&l.traverse(function(c){if(c.isMesh)for(let f=0,d=s.weights.length;f<d;f++)c.morphTargetInfluences[f]=s.weights[f]}),l})}loadNode(e){const t=this.json,n=this,s=t.nodes[e],o=n._loadNodeShallow(e),l=[],c=s.children||[];for(let d=0,p=c.length;d<p;d++)l.push(n.getDependency("node",c[d]));const f=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([o,Promise.all(l),f]).then(function(d){const p=d[0],m=d[1],v=d[2];v!==null&&p.traverse(function(y){y.isSkinnedMesh&&y.bind(v,dN)});for(let y=0,E=m.length;y<E;y++)p.add(m[y]);return p})}_loadNodeShallow(e){const t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const o=t.nodes[e],l=o.name?s.createUniqueName(o.name):"",c=[],f=s._invokeOne(function(d){return d.createNodeMesh&&d.createNodeMesh(e)});return f&&c.push(f),o.camera!==void 0&&c.push(s.getDependency("camera",o.camera).then(function(d){return s._getNodeRef(s.cameraCache,o.camera,d)})),s._invokeAll(function(d){return d.createNodeAttachment&&d.createNodeAttachment(e)}).forEach(function(d){c.push(d)}),this.nodeCache[e]=Promise.all(c).then(function(d){let p;if(o.isBone===!0?p=new Wy:d.length>1?p=new Os:d.length===1?p=d[0]:p=new en,p!==d[0])for(let m=0,v=d.length;m<v;m++)p.add(d[m]);if(o.name&&(p.userData.name=o.name,p.name=l),Bi(p,o),o.extensions&&Is(n,p,o),o.matrix!==void 0){const m=new _t;m.fromArray(o.matrix),p.applyMatrix4(m)}else o.translation!==void 0&&p.position.fromArray(o.translation),o.rotation!==void 0&&p.quaternion.fromArray(o.rotation),o.scale!==void 0&&p.scale.fromArray(o.scale);if(!s.associations.has(p))s.associations.set(p,{});else if(o.mesh!==void 0&&s.meshCache.refs[o.mesh]>1){const m=s.associations.get(p);s.associations.set(p,{...m})}return s.associations.get(p).nodes=e,p}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],s=this,o=new Os;n.name&&(o.name=s.createUniqueName(n.name)),Bi(o,n),n.extensions&&Is(t,o,n);const l=n.nodes||[],c=[];for(let f=0,d=l.length;f<d;f++)c.push(s.getDependency("node",l[f]));return Promise.all(c).then(function(f){for(let p=0,m=f.length;p<m;p++)o.add(f[p]);const d=p=>{const m=new Map;for(const[v,y]of s.associations)(v instanceof Wi||v instanceof _n)&&m.set(v,y);return p.traverse(v=>{const y=s.associations.get(v);y!=null&&m.set(v,y)}),m};return s.associations=d(o),o})}_createAnimationTracks(e,t,n,s,o){const l=[],c=e.name?e.name:e.uuid,f=[];ts[o.path]===ts.weights?e.traverse(function(v){v.morphTargetInfluences&&f.push(v.name?v.name:v.uuid)}):f.push(c);let d;switch(ts[o.path]){case ts.weights:d=Ya;break;case ts.rotation:d=Ka;break;case ts.translation:case ts.scale:d=qa;break;default:switch(n.itemSize){case 1:d=Ya;break;case 2:case 3:default:d=qa;break}break}const p=s.interpolation!==void 0?aN[s.interpolation]:ul,m=this._getArrayFromAccessor(n);for(let v=0,y=f.length;v<y;v++){const E=new d(f[v]+"."+ts[o.path],t.array,m,p);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(E),l.push(E)}return l}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=bp(t.constructor),s=new Float32Array(t.length);for(let o=0,l=t.length;o<l;o++)s[o]=t[o]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const s=this instanceof Ka?sN:fS;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function pN(r,e,t){const n=e.attributes,s=new qi;if(n.POSITION!==void 0){const c=t.json.accessors[n.POSITION],f=c.min,d=c.max;if(f!==void 0&&d!==void 0){if(s.set(new j(f[0],f[1],f[2]),new j(d[0],d[1],d[2])),c.normalized){const p=bp(Ha[c.componentType]);s.min.multiplyScalar(p),s.max.multiplyScalar(p)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const o=e.targets;if(o!==void 0){const c=new j,f=new j;for(let d=0,p=o.length;d<p;d++){const m=o[d];if(m.POSITION!==void 0){const v=t.json.accessors[m.POSITION],y=v.min,E=v.max;if(y!==void 0&&E!==void 0){if(f.setX(Math.max(Math.abs(y[0]),Math.abs(E[0]))),f.setY(Math.max(Math.abs(y[1]),Math.abs(E[1]))),f.setZ(Math.max(Math.abs(y[2]),Math.abs(E[2]))),v.normalized){const M=bp(Ha[v.componentType]);f.multiplyScalar(M)}c.max(f)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(c)}r.boundingBox=s;const l=new Zi;s.getCenter(l.center),l.radius=s.min.distanceTo(s.max)/2,r.boundingSphere=l}function ty(r,e,t){const n=e.attributes,s=[];function o(l,c){return t.getDependency("accessor",l).then(function(f){r.setAttribute(c,f)})}for(const l in n){const c=wp[l]||l.toLowerCase();c in r.attributes||s.push(o(n[l],c))}if(e.indices!==void 0&&!r.index){const l=t.getDependency("accessor",e.indices).then(function(c){r.setIndex(c)});s.push(l)}return Rt.workingColorSpace!==Vn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Rt.workingColorSpace}" not supported.`),Bi(r,e),pN(r,e,t),Promise.all(s).then(function(){return e.targets!==void 0?lN(r,e.targets,t):r})}const mN="/birthday/assets/cake1-nsvjp1IU.glb",gN="/birthday/assets/hbd-CJPPODw7.mp3",vN=()=>{const r=ce.useRef(null),e=ce.useRef(null),t=ce.useRef(null);return ce.useEffect(()=>{const n=new Audio(gN);return n.loop=!0,n.volume=.4,n.muted=!0,e.current=n,n.play().then(()=>{t.current=setTimeout(()=>{e.current&&(e.current.muted=!1)},100)}).catch(()=>{}),()=>{t.current&&clearTimeout(t.current),e.current&&(e.current.pause(),e.current.currentTime=0,e.current=null)}},[]),ce.useEffect(()=>{if(!r.current)return;const n=r.current,s=new QT,o=n.clientWidth,l=n.clientHeight,c=new Bn(75,o/l,.1,1e3);c.position.set(3,3,3);const f=new b2({antialias:!0});f.setSize(o,l),f.setPixelRatio(window.devicePixelRatio),n.appendChild(f.domElement);const d=new Kp(50,32,32),p=new Tr({side:zn,uniforms:{topColor:{value:new mt("#ffd6e0")},bottomColor:{value:new mt("#fff1f2")},offset:{value:33},exponent:{value:.6}},vertexShader:`
        varying vec3 vWorldPosition;
        void main() {
          vec4 worldPosition = modelMatrix * vec4(position, 1.0);
          vWorldPosition = worldPosition.xyz;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        uniform vec3 topColor;
        uniform vec3 bottomColor;
        uniform float offset;
        uniform float exponent;
        varying vec3 vWorldPosition;
        void main() {
          float h = normalize(vWorldPosition + offset).y;
          float mixValue = max(pow(max(h, 0.0), exponent), 0.0);
          gl_FragColor = vec4(mix(bottomColor, topColor, mixValue), 1.0);
        }
      `}),m=new qn(d,p);s.add(m);const v=[{top:"#ffd6e0",bottom:"#fff1f2"},{top:"#cdb4db",bottom:"#e0f2fe"},{top:"#bbf7d0",bottom:"#ecfeff"},{top:"#fde68a",bottom:"#fff7ed"}];let y=0,E=0;s.add(new Lw(16777215,.9));const M=new ex(16777215,1.5);M.position.set(5,10,5),s.add(M);const S=new Qy(16762967,1.4,10);S.position.set(0,2.5,0),s.add(S);const _=new SD(c,f.domElement);_.enableZoom=!1,_.enableDamping=!0,_.target.set(0,1,0);const R=new vi,C=300,b=new Float32Array(C*3);for(let fe=0;fe<b.length;fe++)b[fe]=(Math.random()-.5)*10;R.setAttribute("position",new In(b,3));const I=new Yp({color:16758531,size:.03,transparent:!0,opacity:.8}),F=new $y(R,I);s.add(F);let U=null,X=0,P=0;new ND().load(mN,fe=>{U=fe.scene,U.scale.set(.4,.8,.4);const se=new qi().setFromObject(U),oe=se.getCenter(new j);U.position.sub(oe),X=se.getSize(new j).y/2,U.position.y=X,s.add(U)});let z;const Z=()=>{z=requestAnimationFrame(Z),U&&(P+=.01,U.position.y=X+Math.sin(P)*.08,U.rotation.y+=.003),F.rotation.y+=5e-4,S.intensity=1.2+Math.sin(Date.now()*.01)*.2,c.position.x=3+Math.sin(Date.now()*5e-4)*.2,c.lookAt(0,1,0),E+=.05,E>5&&(E=0,y=(y+1)%v.length,m.material.uniforms.topColor.value.set(v[y].top),m.material.uniforms.bottomColor.value.set(v[y].bottom)),_.update(),f.render(s,c)};Z();const ie=()=>{if(!n)return;const fe=n.clientWidth,se=n.clientHeight;c.aspect=fe/se,c.updateProjectionMatrix(),f.setSize(fe,se)};return window.addEventListener("resize",ie),()=>{window.removeEventListener("resize",ie),cancelAnimationFrame(z),_.dispose(),f.dispose(),n&&f.domElement&&n.contains(f.domElement)&&n.removeChild(f.domElement)}},[]),Xe.jsxs("div",{style:{position:"relative",width:"100%",height:"100vh"},children:[Xe.jsxs("div",{style:{position:"absolute",top:"8%",width:"100%",textAlign:"center",fontSize:"1.6rem",fontWeight:"bold",color:"#ff4d6d",textShadow:"0 0 20px rgba(255,77,109,0.6)",zIndex:10,animation:"pulse 2s infinite",pointerEvents:"none"},children:["🎉 Happy Birthday 🎉",Xe.jsx("div",{children:"Suganthi"})]}),Xe.jsx("div",{ref:r,style:{width:"100%",height:"100%"}})]})},_N=()=>Xe.jsx(vN,{});function yN(){const{theme:r,setTheme:e}=ce.useContext(ax);return cs().pathname.startsWith("/gift/"),Xe.jsx("div",{className:"h-full bg-[var(--color-bg)]",children:Xe.jsxs(GM,{children:[Xe.jsx(Da,{path:"/",element:Xe.jsx(A2,{})}),Xe.jsx(Da,{path:"/game",element:Xe.jsx(QI,{})}),Xe.jsx(Da,{path:"/gift",element:Xe.jsx(tD,{})}),Xe.jsx(Da,{path:"/gift/memory",element:Xe.jsx(yD,{})}),Xe.jsx(Da,{path:"/wish",element:Xe.jsx(_N,{})})]})})}function xN(){return Xe.jsx(R2,{children:Xe.jsx(yN,{})})}QE.createRoot(document.getElementById("root")).render(Xe.jsx(Rc.StrictMode,{children:Xe.jsxs(d1,{basename:"/birthday",children:[console.log("Router OK"),Xe.jsx(xN,{})]})}));
