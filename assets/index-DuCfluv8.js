(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function t(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(s){if(s.ep)return;s.ep=!0;const o=t(s);fetch(s.href,o)}})();function ay(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var xd={exports:{}},ko={},Sd={exports:{}},Et={};var zv;function tM(){if(zv)return Et;zv=1;var r=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),n=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),o=Symbol.for("react.provider"),l=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),m=Symbol.iterator;function v(O){return O===null||typeof O!="object"?null:(O=m&&O[m]||O["@@iterator"],typeof O=="function"?O:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,M={};function S(O,ne,ke){this.props=O,this.context=ne,this.refs=M,this.updater=ke||y}S.prototype.isReactComponent={},S.prototype.setState=function(O,ne){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,ne,"setState")},S.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function _(){}_.prototype=S.prototype;function R(O,ne,ke){this.props=O,this.context=ne,this.refs=M,this.updater=ke||y}var C=R.prototype=new _;C.constructor=R,E(C,S.prototype),C.isPureReactComponent=!0;var b=Array.isArray,I=Object.prototype.hasOwnProperty,U={current:null},F={key:!0,ref:!0,__self:!0,__source:!0};function X(O,ne,ke){var Ye,Ge={},Q=null,fe=null;if(ne!=null)for(Ye in ne.ref!==void 0&&(fe=ne.ref),ne.key!==void 0&&(Q=""+ne.key),ne)I.call(ne,Ye)&&!F.hasOwnProperty(Ye)&&(Ge[Ye]=ne[Ye]);var Ee=arguments.length-2;if(Ee===1)Ge.children=ke;else if(1<Ee){for(var De=Array(Ee),Oe=0;Oe<Ee;Oe++)De[Oe]=arguments[Oe+2];Ge.children=De}if(O&&O.defaultProps)for(Ye in Ee=O.defaultProps,Ee)Ge[Ye]===void 0&&(Ge[Ye]=Ee[Ye]);return{$$typeof:r,type:O,key:Q,ref:fe,props:Ge,_owner:U.current}}function P(O,ne){return{$$typeof:r,type:O.type,key:ne,ref:O.ref,props:O.props,_owner:O._owner}}function L(O){return typeof O=="object"&&O!==null&&O.$$typeof===r}function H(O){var ne={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(ke){return ne[ke]})}var J=/\/+/g;function ie(O,ne){return typeof O=="object"&&O!==null&&O.key!=null?H(""+O.key):ne.toString(36)}function he(O,ne,ke,Ye,Ge){var Q=typeof O;(Q==="undefined"||Q==="boolean")&&(O=null);var fe=!1;if(O===null)fe=!0;else switch(Q){case"string":case"number":fe=!0;break;case"object":switch(O.$$typeof){case r:case e:fe=!0}}if(fe)return fe=O,Ge=Ge(fe),O=Ye===""?"."+ie(fe,0):Ye,b(Ge)?(ke="",O!=null&&(ke=O.replace(J,"$&/")+"/"),he(Ge,ne,ke,"",function(Oe){return Oe})):Ge!=null&&(L(Ge)&&(Ge=P(Ge,ke+(!Ge.key||fe&&fe.key===Ge.key?"":(""+Ge.key).replace(J,"$&/")+"/")+O)),ne.push(Ge)),1;if(fe=0,Ye=Ye===""?".":Ye+":",b(O))for(var Ee=0;Ee<O.length;Ee++){Q=O[Ee];var De=Ye+ie(Q,Ee);fe+=he(Q,ne,ke,De,Ge)}else if(De=v(O),typeof De=="function")for(O=De.call(O),Ee=0;!(Q=O.next()).done;)Q=Q.value,De=Ye+ie(Q,Ee++),fe+=he(Q,ne,ke,De,Ge);else if(Q==="object")throw ne=String(O),Error("Objects are not valid as a React child (found: "+(ne==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":ne)+"). If you meant to render a collection of children, use an array instead.");return fe}function ue(O,ne,ke){if(O==null)return O;var Ye=[],Ge=0;return he(O,Ye,"","",function(Q){return ne.call(ke,Q,Ge++)}),Ye}function re(O){if(O._status===-1){var ne=O._result;ne=ne(),ne.then(function(ke){(O._status===0||O._status===-1)&&(O._status=1,O._result=ke)},function(ke){(O._status===0||O._status===-1)&&(O._status=2,O._result=ke)}),O._status===-1&&(O._status=0,O._result=ne)}if(O._status===1)return O._result.default;throw O._result}var le={current:null},z={transition:null},ce={ReactCurrentDispatcher:le,ReactCurrentBatchConfig:z,ReactCurrentOwner:U};function se(){throw Error("act(...) is not supported in production builds of React.")}return Et.Children={map:ue,forEach:function(O,ne,ke){ue(O,function(){ne.apply(this,arguments)},ke)},count:function(O){var ne=0;return ue(O,function(){ne++}),ne},toArray:function(O){return ue(O,function(ne){return ne})||[]},only:function(O){if(!L(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},Et.Component=S,Et.Fragment=t,Et.Profiler=s,Et.PureComponent=R,Et.StrictMode=n,Et.Suspense=f,Et.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ce,Et.act=se,Et.cloneElement=function(O,ne,ke){if(O==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+O+".");var Ye=E({},O.props),Ge=O.key,Q=O.ref,fe=O._owner;if(ne!=null){if(ne.ref!==void 0&&(Q=ne.ref,fe=U.current),ne.key!==void 0&&(Ge=""+ne.key),O.type&&O.type.defaultProps)var Ee=O.type.defaultProps;for(De in ne)I.call(ne,De)&&!F.hasOwnProperty(De)&&(Ye[De]=ne[De]===void 0&&Ee!==void 0?Ee[De]:ne[De])}var De=arguments.length-2;if(De===1)Ye.children=ke;else if(1<De){Ee=Array(De);for(var Oe=0;Oe<De;Oe++)Ee[Oe]=arguments[Oe+2];Ye.children=Ee}return{$$typeof:r,type:O.type,key:Ge,ref:Q,props:Ye,_owner:fe}},Et.createContext=function(O){return O={$$typeof:l,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},O.Provider={$$typeof:o,_context:O},O.Consumer=O},Et.createElement=X,Et.createFactory=function(O){var ne=X.bind(null,O);return ne.type=O,ne},Et.createRef=function(){return{current:null}},Et.forwardRef=function(O){return{$$typeof:c,render:O}},Et.isValidElement=L,Et.lazy=function(O){return{$$typeof:p,_payload:{_status:-1,_result:O},_init:re}},Et.memo=function(O,ne){return{$$typeof:d,type:O,compare:ne===void 0?null:ne}},Et.startTransition=function(O){var ne=z.transition;z.transition={};try{O()}finally{z.transition=ne}},Et.unstable_act=se,Et.useCallback=function(O,ne){return le.current.useCallback(O,ne)},Et.useContext=function(O){return le.current.useContext(O)},Et.useDebugValue=function(){},Et.useDeferredValue=function(O){return le.current.useDeferredValue(O)},Et.useEffect=function(O,ne){return le.current.useEffect(O,ne)},Et.useId=function(){return le.current.useId()},Et.useImperativeHandle=function(O,ne,ke){return le.current.useImperativeHandle(O,ne,ke)},Et.useInsertionEffect=function(O,ne){return le.current.useInsertionEffect(O,ne)},Et.useLayoutEffect=function(O,ne){return le.current.useLayoutEffect(O,ne)},Et.useMemo=function(O,ne){return le.current.useMemo(O,ne)},Et.useReducer=function(O,ne,ke){return le.current.useReducer(O,ne,ke)},Et.useRef=function(O){return le.current.useRef(O)},Et.useState=function(O){return le.current.useState(O)},Et.useSyncExternalStore=function(O,ne,ke){return le.current.useSyncExternalStore(O,ne,ke)},Et.useTransition=function(){return le.current.useTransition()},Et.version="18.3.1",Et}var Hv;function Pp(){return Hv||(Hv=1,Sd.exports=tM()),Sd.exports}var Vv;function nM(){if(Vv)return ko;Vv=1;var r=Pp(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),n=Object.prototype.hasOwnProperty,s=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function l(c,f,d){var p,m={},v=null,y=null;d!==void 0&&(v=""+d),f.key!==void 0&&(v=""+f.key),f.ref!==void 0&&(y=f.ref);for(p in f)n.call(f,p)&&!o.hasOwnProperty(p)&&(m[p]=f[p]);if(c&&c.defaultProps)for(p in f=c.defaultProps,f)m[p]===void 0&&(m[p]=f[p]);return{$$typeof:e,type:c,key:v,ref:y,props:m,_owner:s.current}}return ko.Fragment=t,ko.jsx=l,ko.jsxs=l,ko}var Gv;function iM(){return Gv||(Gv=1,xd.exports=nM()),xd.exports}var Re=iM(),ae=Pp();const Pc=ay(ae);var Lu={},Ed={exports:{}},$n={},Md={exports:{}},Td={};var Wv;function rM(){return Wv||(Wv=1,(function(r){function e(z,ce){var se=z.length;z.push(ce);e:for(;0<se;){var O=se-1>>>1,ne=z[O];if(0<s(ne,ce))z[O]=ce,z[se]=ne,se=O;else break e}}function t(z){return z.length===0?null:z[0]}function n(z){if(z.length===0)return null;var ce=z[0],se=z.pop();if(se!==ce){z[0]=se;e:for(var O=0,ne=z.length,ke=ne>>>1;O<ke;){var Ye=2*(O+1)-1,Ge=z[Ye],Q=Ye+1,fe=z[Q];if(0>s(Ge,se))Q<ne&&0>s(fe,Ge)?(z[O]=fe,z[Q]=se,O=Q):(z[O]=Ge,z[Ye]=se,O=Ye);else if(Q<ne&&0>s(fe,se))z[O]=fe,z[Q]=se,O=Q;else break e}}return ce}function s(z,ce){var se=z.sortIndex-ce.sortIndex;return se!==0?se:z.id-ce.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;r.unstable_now=function(){return o.now()}}else{var l=Date,c=l.now();r.unstable_now=function(){return l.now()-c}}var f=[],d=[],p=1,m=null,v=3,y=!1,E=!1,M=!1,S=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,R=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function C(z){for(var ce=t(d);ce!==null;){if(ce.callback===null)n(d);else if(ce.startTime<=z)n(d),ce.sortIndex=ce.expirationTime,e(f,ce);else break;ce=t(d)}}function b(z){if(M=!1,C(z),!E)if(t(f)!==null)E=!0,re(I);else{var ce=t(d);ce!==null&&le(b,ce.startTime-z)}}function I(z,ce){E=!1,M&&(M=!1,_(X),X=-1),y=!0;var se=v;try{for(C(ce),m=t(f);m!==null&&(!(m.expirationTime>ce)||z&&!H());){var O=m.callback;if(typeof O=="function"){m.callback=null,v=m.priorityLevel;var ne=O(m.expirationTime<=ce);ce=r.unstable_now(),typeof ne=="function"?m.callback=ne:m===t(f)&&n(f),C(ce)}else n(f);m=t(f)}if(m!==null)var ke=!0;else{var Ye=t(d);Ye!==null&&le(b,Ye.startTime-ce),ke=!1}return ke}finally{m=null,v=se,y=!1}}var U=!1,F=null,X=-1,P=5,L=-1;function H(){return!(r.unstable_now()-L<P)}function J(){if(F!==null){var z=r.unstable_now();L=z;var ce=!0;try{ce=F(!0,z)}finally{ce?ie():(U=!1,F=null)}}else U=!1}var ie;if(typeof R=="function")ie=function(){R(J)};else if(typeof MessageChannel<"u"){var he=new MessageChannel,ue=he.port2;he.port1.onmessage=J,ie=function(){ue.postMessage(null)}}else ie=function(){S(J,0)};function re(z){F=z,U||(U=!0,ie())}function le(z,ce){X=S(function(){z(r.unstable_now())},ce)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(z){z.callback=null},r.unstable_continueExecution=function(){E||y||(E=!0,re(I))},r.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<z?Math.floor(1e3/z):5},r.unstable_getCurrentPriorityLevel=function(){return v},r.unstable_getFirstCallbackNode=function(){return t(f)},r.unstable_next=function(z){switch(v){case 1:case 2:case 3:var ce=3;break;default:ce=v}var se=v;v=ce;try{return z()}finally{v=se}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(z,ce){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var se=v;v=z;try{return ce()}finally{v=se}},r.unstable_scheduleCallback=function(z,ce,se){var O=r.unstable_now();switch(typeof se=="object"&&se!==null?(se=se.delay,se=typeof se=="number"&&0<se?O+se:O):se=O,z){case 1:var ne=-1;break;case 2:ne=250;break;case 5:ne=1073741823;break;case 4:ne=1e4;break;default:ne=5e3}return ne=se+ne,z={id:p++,callback:ce,priorityLevel:z,startTime:se,expirationTime:ne,sortIndex:-1},se>O?(z.sortIndex=se,e(d,z),t(f)===null&&z===t(d)&&(M?(_(X),X=-1):M=!0,le(b,se-O))):(z.sortIndex=ne,e(f,z),E||y||(E=!0,re(I))),z},r.unstable_shouldYield=H,r.unstable_wrapCallback=function(z){var ce=v;return function(){var se=v;v=ce;try{return z.apply(this,arguments)}finally{v=se}}}})(Td)),Td}var jv;function sM(){return jv||(jv=1,Md.exports=rM()),Md.exports}var Xv;function aM(){if(Xv)return $n;Xv=1;var r=Pp(),e=sM();function t(i){for(var a="https://reactjs.org/docs/error-decoder.html?invariant="+i,u=1;u<arguments.length;u++)a+="&args[]="+encodeURIComponent(arguments[u]);return"Minified React error #"+i+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var n=new Set,s={};function o(i,a){l(i,a),l(i+"Capture",a)}function l(i,a){for(s[i]=a,i=0;i<a.length;i++)n.add(a[i])}var c=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),f=Object.prototype.hasOwnProperty,d=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,p={},m={};function v(i){return f.call(m,i)?!0:f.call(p,i)?!1:d.test(i)?m[i]=!0:(p[i]=!0,!1)}function y(i,a,u,h){if(u!==null&&u.type===0)return!1;switch(typeof a){case"function":case"symbol":return!0;case"boolean":return h?!1:u!==null?!u.acceptsBooleans:(i=i.toLowerCase().slice(0,5),i!=="data-"&&i!=="aria-");default:return!1}}function E(i,a,u,h){if(a===null||typeof a>"u"||y(i,a,u,h))return!0;if(h)return!1;if(u!==null)switch(u.type){case 3:return!a;case 4:return a===!1;case 5:return isNaN(a);case 6:return isNaN(a)||1>a}return!1}function M(i,a,u,h,g,x,T){this.acceptsBooleans=a===2||a===3||a===4,this.attributeName=h,this.attributeNamespace=g,this.mustUseProperty=u,this.propertyName=i,this.type=a,this.sanitizeURL=x,this.removeEmptyString=T}var S={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(i){S[i]=new M(i,0,!1,i,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(i){var a=i[0];S[a]=new M(a,1,!1,i[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(i){S[i]=new M(i,2,!1,i.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(i){S[i]=new M(i,2,!1,i,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(i){S[i]=new M(i,3,!1,i.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(i){S[i]=new M(i,3,!0,i,null,!1,!1)}),["capture","download"].forEach(function(i){S[i]=new M(i,4,!1,i,null,!1,!1)}),["cols","rows","size","span"].forEach(function(i){S[i]=new M(i,6,!1,i,null,!1,!1)}),["rowSpan","start"].forEach(function(i){S[i]=new M(i,5,!1,i.toLowerCase(),null,!1,!1)});var _=/[\-:]([a-z])/g;function R(i){return i[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(i){var a=i.replace(_,R);S[a]=new M(a,1,!1,i,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(i){var a=i.replace(_,R);S[a]=new M(a,1,!1,i,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(i){var a=i.replace(_,R);S[a]=new M(a,1,!1,i,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(i){S[i]=new M(i,1,!1,i.toLowerCase(),null,!1,!1)}),S.xlinkHref=new M("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(i){S[i]=new M(i,1,!1,i.toLowerCase(),null,!0,!0)});function C(i,a,u,h){var g=S.hasOwnProperty(a)?S[a]:null;(g!==null?g.type!==0:h||!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(E(a,u,g,h)&&(u=null),h||g===null?v(a)&&(u===null?i.removeAttribute(a):i.setAttribute(a,""+u)):g.mustUseProperty?i[g.propertyName]=u===null?g.type===3?!1:"":u:(a=g.attributeName,h=g.attributeNamespace,u===null?i.removeAttribute(a):(g=g.type,u=g===3||g===4&&u===!0?"":""+u,h?i.setAttributeNS(h,a,u):i.setAttribute(a,u))))}var b=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,I=Symbol.for("react.element"),U=Symbol.for("react.portal"),F=Symbol.for("react.fragment"),X=Symbol.for("react.strict_mode"),P=Symbol.for("react.profiler"),L=Symbol.for("react.provider"),H=Symbol.for("react.context"),J=Symbol.for("react.forward_ref"),ie=Symbol.for("react.suspense"),he=Symbol.for("react.suspense_list"),ue=Symbol.for("react.memo"),re=Symbol.for("react.lazy"),le=Symbol.for("react.offscreen"),z=Symbol.iterator;function ce(i){return i===null||typeof i!="object"?null:(i=z&&i[z]||i["@@iterator"],typeof i=="function"?i:null)}var se=Object.assign,O;function ne(i){if(O===void 0)try{throw Error()}catch(u){var a=u.stack.trim().match(/\n( *(at )?)/);O=a&&a[1]||""}return`
`+O+i}var ke=!1;function Ye(i,a){if(!i||ke)return"";ke=!0;var u=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(a)if(a=function(){throw Error()},Object.defineProperty(a.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(a,[])}catch(Z){var h=Z}Reflect.construct(i,[],a)}else{try{a.call()}catch(Z){h=Z}i.call(a.prototype)}else{try{throw Error()}catch(Z){h=Z}i()}}catch(Z){if(Z&&h&&typeof Z.stack=="string"){for(var g=Z.stack.split(`
`),x=h.stack.split(`
`),T=g.length-1,N=x.length-1;1<=T&&0<=N&&g[T]!==x[N];)N--;for(;1<=T&&0<=N;T--,N--)if(g[T]!==x[N]){if(T!==1||N!==1)do if(T--,N--,0>N||g[T]!==x[N]){var B=`
`+g[T].replace(" at new "," at ");return i.displayName&&B.includes("<anonymous>")&&(B=B.replace("<anonymous>",i.displayName)),B}while(1<=T&&0<=N);break}}}finally{ke=!1,Error.prepareStackTrace=u}return(i=i?i.displayName||i.name:"")?ne(i):""}function Ge(i){switch(i.tag){case 5:return ne(i.type);case 16:return ne("Lazy");case 13:return ne("Suspense");case 19:return ne("SuspenseList");case 0:case 2:case 15:return i=Ye(i.type,!1),i;case 11:return i=Ye(i.type.render,!1),i;case 1:return i=Ye(i.type,!0),i;default:return""}}function Q(i){if(i==null)return null;if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i;switch(i){case F:return"Fragment";case U:return"Portal";case P:return"Profiler";case X:return"StrictMode";case ie:return"Suspense";case he:return"SuspenseList"}if(typeof i=="object")switch(i.$$typeof){case H:return(i.displayName||"Context")+".Consumer";case L:return(i._context.displayName||"Context")+".Provider";case J:var a=i.render;return i=i.displayName,i||(i=a.displayName||a.name||"",i=i!==""?"ForwardRef("+i+")":"ForwardRef"),i;case ue:return a=i.displayName||null,a!==null?a:Q(i.type)||"Memo";case re:a=i._payload,i=i._init;try{return Q(i(a))}catch{}}return null}function fe(i){var a=i.type;switch(i.tag){case 24:return"Cache";case 9:return(a.displayName||"Context")+".Consumer";case 10:return(a._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return i=a.render,i=i.displayName||i.name||"",a.displayName||(i!==""?"ForwardRef("+i+")":"ForwardRef");case 7:return"Fragment";case 5:return a;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Q(a);case 8:return a===X?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof a=="function")return a.displayName||a.name||null;if(typeof a=="string")return a}return null}function Ee(i){switch(typeof i){case"boolean":case"number":case"string":case"undefined":return i;case"object":return i;default:return""}}function De(i){var a=i.type;return(i=i.nodeName)&&i.toLowerCase()==="input"&&(a==="checkbox"||a==="radio")}function Oe(i){var a=De(i)?"checked":"value",u=Object.getOwnPropertyDescriptor(i.constructor.prototype,a),h=""+i[a];if(!i.hasOwnProperty(a)&&typeof u<"u"&&typeof u.get=="function"&&typeof u.set=="function"){var g=u.get,x=u.set;return Object.defineProperty(i,a,{configurable:!0,get:function(){return g.call(this)},set:function(T){h=""+T,x.call(this,T)}}),Object.defineProperty(i,a,{enumerable:u.enumerable}),{getValue:function(){return h},setValue:function(T){h=""+T},stopTracking:function(){i._valueTracker=null,delete i[a]}}}}function xt(i){i._valueTracker||(i._valueTracker=Oe(i))}function on(i){if(!i)return!1;var a=i._valueTracker;if(!a)return!0;var u=a.getValue(),h="";return i&&(h=De(i)?i.checked?"true":"false":i.value),i=h,i!==u?(a.setValue(i),!0):!1}function k(i){if(i=i||(typeof document<"u"?document:void 0),typeof i>"u")return null;try{return i.activeElement||i.body}catch{return i.body}}function Ot(i,a){var u=a.checked;return se({},a,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:u??i._wrapperState.initialChecked})}function ht(i,a){var u=a.defaultValue==null?"":a.defaultValue,h=a.checked!=null?a.checked:a.defaultChecked;u=Ee(a.value!=null?a.value:u),i._wrapperState={initialChecked:h,initialValue:u,controlled:a.type==="checkbox"||a.type==="radio"?a.checked!=null:a.value!=null}}function st(i,a){a=a.checked,a!=null&&C(i,"checked",a,!1)}function We(i,a){st(i,a);var u=Ee(a.value),h=a.type;if(u!=null)h==="number"?(u===0&&i.value===""||i.value!=u)&&(i.value=""+u):i.value!==""+u&&(i.value=""+u);else if(h==="submit"||h==="reset"){i.removeAttribute("value");return}a.hasOwnProperty("value")?je(i,a.type,u):a.hasOwnProperty("defaultValue")&&je(i,a.type,Ee(a.defaultValue)),a.checked==null&&a.defaultChecked!=null&&(i.defaultChecked=!!a.defaultChecked)}function Ht(i,a,u){if(a.hasOwnProperty("value")||a.hasOwnProperty("defaultValue")){var h=a.type;if(!(h!=="submit"&&h!=="reset"||a.value!==void 0&&a.value!==null))return;a=""+i._wrapperState.initialValue,u||a===i.value||(i.value=a),i.defaultValue=a}u=i.name,u!==""&&(i.name=""),i.defaultChecked=!!i._wrapperState.initialChecked,u!==""&&(i.name=u)}function je(i,a,u){(a!=="number"||k(i.ownerDocument)!==i)&&(u==null?i.defaultValue=""+i._wrapperState.initialValue:i.defaultValue!==""+u&&(i.defaultValue=""+u))}var ct=Array.isArray;function jt(i,a,u,h){if(i=i.options,a){a={};for(var g=0;g<u.length;g++)a["$"+u[g]]=!0;for(u=0;u<i.length;u++)g=a.hasOwnProperty("$"+i[u].value),i[u].selected!==g&&(i[u].selected=g),g&&h&&(i[u].defaultSelected=!0)}else{for(u=""+Ee(u),a=null,g=0;g<i.length;g++){if(i[g].value===u){i[g].selected=!0,h&&(i[g].defaultSelected=!0);return}a!==null||i[g].disabled||(a=i[g])}a!==null&&(a.selected=!0)}}function Xt(i,a){if(a.dangerouslySetInnerHTML!=null)throw Error(t(91));return se({},a,{value:void 0,defaultValue:void 0,children:""+i._wrapperState.initialValue})}function D(i,a){var u=a.value;if(u==null){if(u=a.children,a=a.defaultValue,u!=null){if(a!=null)throw Error(t(92));if(ct(u)){if(1<u.length)throw Error(t(93));u=u[0]}a=u}a==null&&(a=""),u=a}i._wrapperState={initialValue:Ee(u)}}function w(i,a){var u=Ee(a.value),h=Ee(a.defaultValue);u!=null&&(u=""+u,u!==i.value&&(i.value=u),a.defaultValue==null&&i.defaultValue!==u&&(i.defaultValue=u)),h!=null&&(i.defaultValue=""+h)}function K(i){var a=i.textContent;a===i._wrapperState.initialValue&&a!==""&&a!==null&&(i.value=a)}function de(i){switch(i){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ge(i,a){return i==null||i==="http://www.w3.org/1999/xhtml"?de(a):i==="http://www.w3.org/2000/svg"&&a==="foreignObject"?"http://www.w3.org/1999/xhtml":i}var oe,Ze=(function(i){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(a,u,h,g){MSApp.execUnsafeLocalFunction(function(){return i(a,u,h,g)})}:i})(function(i,a){if(i.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in i)i.innerHTML=a;else{for(oe=oe||document.createElement("div"),oe.innerHTML="<svg>"+a.valueOf().toString()+"</svg>",a=oe.firstChild;i.firstChild;)i.removeChild(i.firstChild);for(;a.firstChild;)i.appendChild(a.firstChild)}});function be(i,a){if(a){var u=i.firstChild;if(u&&u===i.lastChild&&u.nodeType===3){u.nodeValue=a;return}}i.textContent=a}var ze={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Je=["Webkit","ms","Moz","O"];Object.keys(ze).forEach(function(i){Je.forEach(function(a){a=a+i.charAt(0).toUpperCase()+i.substring(1),ze[a]=ze[i]})});function Me(i,a,u){return a==null||typeof a=="boolean"||a===""?"":u||typeof a!="number"||a===0||ze.hasOwnProperty(i)&&ze[i]?(""+a).trim():a+"px"}function Ie(i,a){i=i.style;for(var u in a)if(a.hasOwnProperty(u)){var h=u.indexOf("--")===0,g=Me(u,a[u],h);u==="float"&&(u="cssFloat"),h?i.setProperty(u,g):i[u]=g}}var at=se({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ke(i,a){if(a){if(at[i]&&(a.children!=null||a.dangerouslySetInnerHTML!=null))throw Error(t(137,i));if(a.dangerouslySetInnerHTML!=null){if(a.children!=null)throw Error(t(60));if(typeof a.dangerouslySetInnerHTML!="object"||!("__html"in a.dangerouslySetInnerHTML))throw Error(t(61))}if(a.style!=null&&typeof a.style!="object")throw Error(t(62))}}function Ce(i,a){if(i.indexOf("-")===-1)return typeof a.is=="string";switch(i){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var pt=null;function V(i){return i=i.target||i.srcElement||window,i.correspondingUseElement&&(i=i.correspondingUseElement),i.nodeType===3?i.parentNode:i}var xe=null,Ae=null,Ne=null;function ye(i){if(i=Mo(i)){if(typeof xe!="function")throw Error(t(280));var a=i.stateNode;a&&(a=Xl(a),xe(i.stateNode,i.type,a))}}function pe(i){Ae?Ne?Ne.push(i):Ne=[i]:Ae=i}function Xe(){if(Ae){var i=Ae,a=Ne;if(Ne=Ae=null,ye(i),a)for(i=0;i<a.length;i++)ye(a[i])}}function ft(i,a){return i(a)}function Dt(){}var bt=!1;function ai(i,a,u){if(bt)return i(a,u);bt=!0;try{return ft(i,a,u)}finally{bt=!1,(Ae!==null||Ne!==null)&&(Dt(),Xe())}}function Mn(i,a){var u=i.stateNode;if(u===null)return null;var h=Xl(u);if(h===null)return null;u=h[a];e:switch(a){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(h=!h.disabled)||(i=i.type,h=!(i==="button"||i==="input"||i==="select"||i==="textarea")),i=!h;break e;default:i=!1}if(i)return null;if(u&&typeof u!="function")throw Error(t(231,a,typeof u));return u}var Ws=!1;if(c)try{var Zn={};Object.defineProperty(Zn,"passive",{get:function(){Ws=!0}}),window.addEventListener("test",Zn,Zn),window.removeEventListener("test",Zn,Zn)}catch{Ws=!1}function so(i,a,u,h,g,x,T,N,B){var Z=Array.prototype.slice.call(arguments,3);try{a.apply(u,Z)}catch(ve){this.onError(ve)}}var Cr=!1,fs=null,Qi=!1,js=null,Xs={onError:function(i){Cr=!0,fs=i}};function wl(i,a,u,h,g,x,T,N,B){Cr=!1,fs=null,so.apply(Xs,arguments)}function bl(i,a,u,h,g,x,T,N,B){if(wl.apply(this,arguments),Cr){if(Cr){var Z=fs;Cr=!1,fs=null}else throw Error(t(198));Qi||(Qi=!0,js=Z)}}function er(i){var a=i,u=i;if(i.alternate)for(;a.return;)a=a.return;else{i=a;do a=i,(a.flags&4098)!==0&&(u=a.return),i=a.return;while(i)}return a.tag===3?u:null}function Al(i){if(i.tag===13){var a=i.memoizedState;if(a===null&&(i=i.alternate,i!==null&&(a=i.memoizedState)),a!==null)return a.dehydrated}return null}function Rl(i){if(er(i)!==i)throw Error(t(188))}function Vc(i){var a=i.alternate;if(!a){if(a=er(i),a===null)throw Error(t(188));return a!==i?null:i}for(var u=i,h=a;;){var g=u.return;if(g===null)break;var x=g.alternate;if(x===null){if(h=g.return,h!==null){u=h;continue}break}if(g.child===x.child){for(x=g.child;x;){if(x===u)return Rl(g),i;if(x===h)return Rl(g),a;x=x.sibling}throw Error(t(188))}if(u.return!==h.return)u=g,h=x;else{for(var T=!1,N=g.child;N;){if(N===u){T=!0,u=g,h=x;break}if(N===h){T=!0,h=g,u=x;break}N=N.sibling}if(!T){for(N=x.child;N;){if(N===u){T=!0,u=x,h=g;break}if(N===h){T=!0,h=x,u=g;break}N=N.sibling}if(!T)throw Error(t(189))}}if(u.alternate!==h)throw Error(t(190))}if(u.tag!==3)throw Error(t(188));return u.stateNode.current===u?i:a}function Cl(i){return i=Vc(i),i!==null?Pl(i):null}function Pl(i){if(i.tag===5||i.tag===6)return i;for(i=i.child;i!==null;){var a=Pl(i);if(a!==null)return a;i=i.sibling}return null}var A=e.unstable_scheduleCallback,Y=e.unstable_cancelCallback,ee=e.unstable_shouldYield,te=e.unstable_requestPaint,W=e.unstable_now,Se=e.unstable_getCurrentPriorityLevel,Pe=e.unstable_ImmediatePriority,He=e.unstable_UserBlockingPriority,Ue=e.unstable_NormalPriority,rt=e.unstable_LowPriority,ot=e.unstable_IdlePriority,Qe=null,lt=null;function It(i){if(lt&&typeof lt.onCommitFiberRoot=="function")try{lt.onCommitFiberRoot(Qe,i,void 0,(i.current.flags&128)===128)}catch{}}var At=Math.clz32?Math.clz32:tt,Vt=Math.log,Nt=Math.LN2;function tt(i){return i>>>=0,i===0?32:31-(Vt(i)/Nt|0)|0}var kt=64,Mt=4194304;function ln(i){switch(i&-i){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return i&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return i}}function yi(i,a){var u=i.pendingLanes;if(u===0)return 0;var h=0,g=i.suspendedLanes,x=i.pingedLanes,T=u&268435455;if(T!==0){var N=T&~g;N!==0?h=ln(N):(x&=T,x!==0&&(h=ln(x)))}else T=u&~g,T!==0?h=ln(T):x!==0&&(h=ln(x));if(h===0)return 0;if(a!==0&&a!==h&&(a&g)===0&&(g=h&-h,x=a&-a,g>=x||g===16&&(x&4194240)!==0))return a;if((h&4)!==0&&(h|=u&16),a=i.entangledLanes,a!==0)for(i=i.entanglements,a&=h;0<a;)u=31-At(a),g=1<<u,h|=i[u],a&=~g;return h}function Dn(i,a){switch(i){case 1:case 2:case 4:return a+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ds(i,a){for(var u=i.suspendedLanes,h=i.pingedLanes,g=i.expirationTimes,x=i.pendingLanes;0<x;){var T=31-At(x),N=1<<T,B=g[T];B===-1?((N&u)===0||(N&h)!==0)&&(g[T]=Dn(N,a)):B<=a&&(i.expiredLanes|=N),x&=~N}}function Gt(i){return i=i.pendingLanes&-1073741825,i!==0?i:i&1073741824?1073741824:0}function Nn(){var i=kt;return kt<<=1,(kt&4194240)===0&&(kt=64),i}function Tn(i){for(var a=[],u=0;31>u;u++)a.push(i);return a}function nn(i,a,u){i.pendingLanes|=a,a!==536870912&&(i.suspendedLanes=0,i.pingedLanes=0),i=i.eventTimes,a=31-At(a),i[a]=u}function wn(i,a){var u=i.pendingLanes&~a;i.pendingLanes=a,i.suspendedLanes=0,i.pingedLanes=0,i.expiredLanes&=a,i.mutableReadLanes&=a,i.entangledLanes&=a,a=i.entanglements;var h=i.eventTimes;for(i=i.expirationTimes;0<u;){var g=31-At(u),x=1<<g;a[g]=0,h[g]=-1,i[g]=-1,u&=~x}}function hs(i,a){var u=i.entangledLanes|=a;for(i=i.entanglements;u;){var h=31-At(u),g=1<<h;g&a|i[h]&a&&(i[h]|=a),u&=~g}}var Tt=0;function _m(i){return i&=-i,1<i?4<i?(i&268435455)!==0?16:536870912:4:1}var ym,Gc,xm,Sm,Em,Wc=!1,Ll=[],Pr=null,Lr=null,Ir=null,ao=new Map,oo=new Map,Dr=[],MS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Mm(i,a){switch(i){case"focusin":case"focusout":Pr=null;break;case"dragenter":case"dragleave":Lr=null;break;case"mouseover":case"mouseout":Ir=null;break;case"pointerover":case"pointerout":ao.delete(a.pointerId);break;case"gotpointercapture":case"lostpointercapture":oo.delete(a.pointerId)}}function lo(i,a,u,h,g,x){return i===null||i.nativeEvent!==x?(i={blockedOn:a,domEventName:u,eventSystemFlags:h,nativeEvent:x,targetContainers:[g]},a!==null&&(a=Mo(a),a!==null&&Gc(a)),i):(i.eventSystemFlags|=h,a=i.targetContainers,g!==null&&a.indexOf(g)===-1&&a.push(g),i)}function TS(i,a,u,h,g){switch(a){case"focusin":return Pr=lo(Pr,i,a,u,h,g),!0;case"dragenter":return Lr=lo(Lr,i,a,u,h,g),!0;case"mouseover":return Ir=lo(Ir,i,a,u,h,g),!0;case"pointerover":var x=g.pointerId;return ao.set(x,lo(ao.get(x)||null,i,a,u,h,g)),!0;case"gotpointercapture":return x=g.pointerId,oo.set(x,lo(oo.get(x)||null,i,a,u,h,g)),!0}return!1}function Tm(i){var a=ps(i.target);if(a!==null){var u=er(a);if(u!==null){if(a=u.tag,a===13){if(a=Al(u),a!==null){i.blockedOn=a,Em(i.priority,function(){xm(u)});return}}else if(a===3&&u.stateNode.current.memoizedState.isDehydrated){i.blockedOn=u.tag===3?u.stateNode.containerInfo:null;return}}}i.blockedOn=null}function Il(i){if(i.blockedOn!==null)return!1;for(var a=i.targetContainers;0<a.length;){var u=Xc(i.domEventName,i.eventSystemFlags,a[0],i.nativeEvent);if(u===null){u=i.nativeEvent;var h=new u.constructor(u.type,u);pt=h,u.target.dispatchEvent(h),pt=null}else return a=Mo(u),a!==null&&Gc(a),i.blockedOn=u,!1;a.shift()}return!0}function wm(i,a,u){Il(i)&&u.delete(a)}function wS(){Wc=!1,Pr!==null&&Il(Pr)&&(Pr=null),Lr!==null&&Il(Lr)&&(Lr=null),Ir!==null&&Il(Ir)&&(Ir=null),ao.forEach(wm),oo.forEach(wm)}function uo(i,a){i.blockedOn===a&&(i.blockedOn=null,Wc||(Wc=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,wS)))}function co(i){function a(g){return uo(g,i)}if(0<Ll.length){uo(Ll[0],i);for(var u=1;u<Ll.length;u++){var h=Ll[u];h.blockedOn===i&&(h.blockedOn=null)}}for(Pr!==null&&uo(Pr,i),Lr!==null&&uo(Lr,i),Ir!==null&&uo(Ir,i),ao.forEach(a),oo.forEach(a),u=0;u<Dr.length;u++)h=Dr[u],h.blockedOn===i&&(h.blockedOn=null);for(;0<Dr.length&&(u=Dr[0],u.blockedOn===null);)Tm(u),u.blockedOn===null&&Dr.shift()}var Ys=b.ReactCurrentBatchConfig,Dl=!0;function bS(i,a,u,h){var g=Tt,x=Ys.transition;Ys.transition=null;try{Tt=1,jc(i,a,u,h)}finally{Tt=g,Ys.transition=x}}function AS(i,a,u,h){var g=Tt,x=Ys.transition;Ys.transition=null;try{Tt=4,jc(i,a,u,h)}finally{Tt=g,Ys.transition=x}}function jc(i,a,u,h){if(Dl){var g=Xc(i,a,u,h);if(g===null)cf(i,a,h,Nl,u),Mm(i,h);else if(TS(g,i,a,u,h))h.stopPropagation();else if(Mm(i,h),a&4&&-1<MS.indexOf(i)){for(;g!==null;){var x=Mo(g);if(x!==null&&ym(x),x=Xc(i,a,u,h),x===null&&cf(i,a,h,Nl,u),x===g)break;g=x}g!==null&&h.stopPropagation()}else cf(i,a,h,null,u)}}var Nl=null;function Xc(i,a,u,h){if(Nl=null,i=V(h),i=ps(i),i!==null)if(a=er(i),a===null)i=null;else if(u=a.tag,u===13){if(i=Al(a),i!==null)return i;i=null}else if(u===3){if(a.stateNode.current.memoizedState.isDehydrated)return a.tag===3?a.stateNode.containerInfo:null;i=null}else a!==i&&(i=null);return Nl=i,null}function bm(i){switch(i){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Se()){case Pe:return 1;case He:return 4;case Ue:case rt:return 16;case ot:return 536870912;default:return 16}default:return 16}}var Nr=null,Yc=null,Ul=null;function Am(){if(Ul)return Ul;var i,a=Yc,u=a.length,h,g="value"in Nr?Nr.value:Nr.textContent,x=g.length;for(i=0;i<u&&a[i]===g[i];i++);var T=u-i;for(h=1;h<=T&&a[u-h]===g[x-h];h++);return Ul=g.slice(i,1<h?1-h:void 0)}function Fl(i){var a=i.keyCode;return"charCode"in i?(i=i.charCode,i===0&&a===13&&(i=13)):i=a,i===10&&(i=13),32<=i||i===13?i:0}function Ol(){return!0}function Rm(){return!1}function Jn(i){function a(u,h,g,x,T){this._reactName=u,this._targetInst=g,this.type=h,this.nativeEvent=x,this.target=T,this.currentTarget=null;for(var N in i)i.hasOwnProperty(N)&&(u=i[N],this[N]=u?u(x):x[N]);return this.isDefaultPrevented=(x.defaultPrevented!=null?x.defaultPrevented:x.returnValue===!1)?Ol:Rm,this.isPropagationStopped=Rm,this}return se(a.prototype,{preventDefault:function(){this.defaultPrevented=!0;var u=this.nativeEvent;u&&(u.preventDefault?u.preventDefault():typeof u.returnValue!="unknown"&&(u.returnValue=!1),this.isDefaultPrevented=Ol)},stopPropagation:function(){var u=this.nativeEvent;u&&(u.stopPropagation?u.stopPropagation():typeof u.cancelBubble!="unknown"&&(u.cancelBubble=!0),this.isPropagationStopped=Ol)},persist:function(){},isPersistent:Ol}),a}var $s={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(i){return i.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},$c=Jn($s),fo=se({},$s,{view:0,detail:0}),RS=Jn(fo),Kc,qc,ho,kl=se({},fo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Jc,button:0,buttons:0,relatedTarget:function(i){return i.relatedTarget===void 0?i.fromElement===i.srcElement?i.toElement:i.fromElement:i.relatedTarget},movementX:function(i){return"movementX"in i?i.movementX:(i!==ho&&(ho&&i.type==="mousemove"?(Kc=i.screenX-ho.screenX,qc=i.screenY-ho.screenY):qc=Kc=0,ho=i),Kc)},movementY:function(i){return"movementY"in i?i.movementY:qc}}),Cm=Jn(kl),CS=se({},kl,{dataTransfer:0}),PS=Jn(CS),LS=se({},fo,{relatedTarget:0}),Zc=Jn(LS),IS=se({},$s,{animationName:0,elapsedTime:0,pseudoElement:0}),DS=Jn(IS),NS=se({},$s,{clipboardData:function(i){return"clipboardData"in i?i.clipboardData:window.clipboardData}}),US=Jn(NS),FS=se({},$s,{data:0}),Pm=Jn(FS),OS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},kS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},BS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function zS(i){var a=this.nativeEvent;return a.getModifierState?a.getModifierState(i):(i=BS[i])?!!a[i]:!1}function Jc(){return zS}var HS=se({},fo,{key:function(i){if(i.key){var a=OS[i.key]||i.key;if(a!=="Unidentified")return a}return i.type==="keypress"?(i=Fl(i),i===13?"Enter":String.fromCharCode(i)):i.type==="keydown"||i.type==="keyup"?kS[i.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Jc,charCode:function(i){return i.type==="keypress"?Fl(i):0},keyCode:function(i){return i.type==="keydown"||i.type==="keyup"?i.keyCode:0},which:function(i){return i.type==="keypress"?Fl(i):i.type==="keydown"||i.type==="keyup"?i.keyCode:0}}),VS=Jn(HS),GS=se({},kl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Lm=Jn(GS),WS=se({},fo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Jc}),jS=Jn(WS),XS=se({},$s,{propertyName:0,elapsedTime:0,pseudoElement:0}),YS=Jn(XS),$S=se({},kl,{deltaX:function(i){return"deltaX"in i?i.deltaX:"wheelDeltaX"in i?-i.wheelDeltaX:0},deltaY:function(i){return"deltaY"in i?i.deltaY:"wheelDeltaY"in i?-i.wheelDeltaY:"wheelDelta"in i?-i.wheelDelta:0},deltaZ:0,deltaMode:0}),KS=Jn($S),qS=[9,13,27,32],Qc=c&&"CompositionEvent"in window,po=null;c&&"documentMode"in document&&(po=document.documentMode);var ZS=c&&"TextEvent"in window&&!po,Im=c&&(!Qc||po&&8<po&&11>=po),Dm=" ",Nm=!1;function Um(i,a){switch(i){case"keyup":return qS.indexOf(a.keyCode)!==-1;case"keydown":return a.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Fm(i){return i=i.detail,typeof i=="object"&&"data"in i?i.data:null}var Ks=!1;function JS(i,a){switch(i){case"compositionend":return Fm(a);case"keypress":return a.which!==32?null:(Nm=!0,Dm);case"textInput":return i=a.data,i===Dm&&Nm?null:i;default:return null}}function QS(i,a){if(Ks)return i==="compositionend"||!Qc&&Um(i,a)?(i=Am(),Ul=Yc=Nr=null,Ks=!1,i):null;switch(i){case"paste":return null;case"keypress":if(!(a.ctrlKey||a.altKey||a.metaKey)||a.ctrlKey&&a.altKey){if(a.char&&1<a.char.length)return a.char;if(a.which)return String.fromCharCode(a.which)}return null;case"compositionend":return Im&&a.locale!=="ko"?null:a.data;default:return null}}var eE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Om(i){var a=i&&i.nodeName&&i.nodeName.toLowerCase();return a==="input"?!!eE[i.type]:a==="textarea"}function km(i,a,u,h){pe(h),a=Gl(a,"onChange"),0<a.length&&(u=new $c("onChange","change",null,u,h),i.push({event:u,listeners:a}))}var mo=null,go=null;function tE(i){ng(i,0)}function Bl(i){var a=ea(i);if(on(a))return i}function nE(i,a){if(i==="change")return a}var Bm=!1;if(c){var ef;if(c){var tf="oninput"in document;if(!tf){var zm=document.createElement("div");zm.setAttribute("oninput","return;"),tf=typeof zm.oninput=="function"}ef=tf}else ef=!1;Bm=ef&&(!document.documentMode||9<document.documentMode)}function Hm(){mo&&(mo.detachEvent("onpropertychange",Vm),go=mo=null)}function Vm(i){if(i.propertyName==="value"&&Bl(go)){var a=[];km(a,go,i,V(i)),ai(tE,a)}}function iE(i,a,u){i==="focusin"?(Hm(),mo=a,go=u,mo.attachEvent("onpropertychange",Vm)):i==="focusout"&&Hm()}function rE(i){if(i==="selectionchange"||i==="keyup"||i==="keydown")return Bl(go)}function sE(i,a){if(i==="click")return Bl(a)}function aE(i,a){if(i==="input"||i==="change")return Bl(a)}function oE(i,a){return i===a&&(i!==0||1/i===1/a)||i!==i&&a!==a}var xi=typeof Object.is=="function"?Object.is:oE;function vo(i,a){if(xi(i,a))return!0;if(typeof i!="object"||i===null||typeof a!="object"||a===null)return!1;var u=Object.keys(i),h=Object.keys(a);if(u.length!==h.length)return!1;for(h=0;h<u.length;h++){var g=u[h];if(!f.call(a,g)||!xi(i[g],a[g]))return!1}return!0}function Gm(i){for(;i&&i.firstChild;)i=i.firstChild;return i}function Wm(i,a){var u=Gm(i);i=0;for(var h;u;){if(u.nodeType===3){if(h=i+u.textContent.length,i<=a&&h>=a)return{node:u,offset:a-i};i=h}e:{for(;u;){if(u.nextSibling){u=u.nextSibling;break e}u=u.parentNode}u=void 0}u=Gm(u)}}function jm(i,a){return i&&a?i===a?!0:i&&i.nodeType===3?!1:a&&a.nodeType===3?jm(i,a.parentNode):"contains"in i?i.contains(a):i.compareDocumentPosition?!!(i.compareDocumentPosition(a)&16):!1:!1}function Xm(){for(var i=window,a=k();a instanceof i.HTMLIFrameElement;){try{var u=typeof a.contentWindow.location.href=="string"}catch{u=!1}if(u)i=a.contentWindow;else break;a=k(i.document)}return a}function nf(i){var a=i&&i.nodeName&&i.nodeName.toLowerCase();return a&&(a==="input"&&(i.type==="text"||i.type==="search"||i.type==="tel"||i.type==="url"||i.type==="password")||a==="textarea"||i.contentEditable==="true")}function lE(i){var a=Xm(),u=i.focusedElem,h=i.selectionRange;if(a!==u&&u&&u.ownerDocument&&jm(u.ownerDocument.documentElement,u)){if(h!==null&&nf(u)){if(a=h.start,i=h.end,i===void 0&&(i=a),"selectionStart"in u)u.selectionStart=a,u.selectionEnd=Math.min(i,u.value.length);else if(i=(a=u.ownerDocument||document)&&a.defaultView||window,i.getSelection){i=i.getSelection();var g=u.textContent.length,x=Math.min(h.start,g);h=h.end===void 0?x:Math.min(h.end,g),!i.extend&&x>h&&(g=h,h=x,x=g),g=Wm(u,x);var T=Wm(u,h);g&&T&&(i.rangeCount!==1||i.anchorNode!==g.node||i.anchorOffset!==g.offset||i.focusNode!==T.node||i.focusOffset!==T.offset)&&(a=a.createRange(),a.setStart(g.node,g.offset),i.removeAllRanges(),x>h?(i.addRange(a),i.extend(T.node,T.offset)):(a.setEnd(T.node,T.offset),i.addRange(a)))}}for(a=[],i=u;i=i.parentNode;)i.nodeType===1&&a.push({element:i,left:i.scrollLeft,top:i.scrollTop});for(typeof u.focus=="function"&&u.focus(),u=0;u<a.length;u++)i=a[u],i.element.scrollLeft=i.left,i.element.scrollTop=i.top}}var uE=c&&"documentMode"in document&&11>=document.documentMode,qs=null,rf=null,_o=null,sf=!1;function Ym(i,a,u){var h=u.window===u?u.document:u.nodeType===9?u:u.ownerDocument;sf||qs==null||qs!==k(h)||(h=qs,"selectionStart"in h&&nf(h)?h={start:h.selectionStart,end:h.selectionEnd}:(h=(h.ownerDocument&&h.ownerDocument.defaultView||window).getSelection(),h={anchorNode:h.anchorNode,anchorOffset:h.anchorOffset,focusNode:h.focusNode,focusOffset:h.focusOffset}),_o&&vo(_o,h)||(_o=h,h=Gl(rf,"onSelect"),0<h.length&&(a=new $c("onSelect","select",null,a,u),i.push({event:a,listeners:h}),a.target=qs)))}function zl(i,a){var u={};return u[i.toLowerCase()]=a.toLowerCase(),u["Webkit"+i]="webkit"+a,u["Moz"+i]="moz"+a,u}var Zs={animationend:zl("Animation","AnimationEnd"),animationiteration:zl("Animation","AnimationIteration"),animationstart:zl("Animation","AnimationStart"),transitionend:zl("Transition","TransitionEnd")},af={},$m={};c&&($m=document.createElement("div").style,"AnimationEvent"in window||(delete Zs.animationend.animation,delete Zs.animationiteration.animation,delete Zs.animationstart.animation),"TransitionEvent"in window||delete Zs.transitionend.transition);function Hl(i){if(af[i])return af[i];if(!Zs[i])return i;var a=Zs[i],u;for(u in a)if(a.hasOwnProperty(u)&&u in $m)return af[i]=a[u];return i}var Km=Hl("animationend"),qm=Hl("animationiteration"),Zm=Hl("animationstart"),Jm=Hl("transitionend"),Qm=new Map,eg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ur(i,a){Qm.set(i,a),o(a,[i])}for(var of=0;of<eg.length;of++){var lf=eg[of],cE=lf.toLowerCase(),fE=lf[0].toUpperCase()+lf.slice(1);Ur(cE,"on"+fE)}Ur(Km,"onAnimationEnd"),Ur(qm,"onAnimationIteration"),Ur(Zm,"onAnimationStart"),Ur("dblclick","onDoubleClick"),Ur("focusin","onFocus"),Ur("focusout","onBlur"),Ur(Jm,"onTransitionEnd"),l("onMouseEnter",["mouseout","mouseover"]),l("onMouseLeave",["mouseout","mouseover"]),l("onPointerEnter",["pointerout","pointerover"]),l("onPointerLeave",["pointerout","pointerover"]),o("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),o("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),o("onBeforeInput",["compositionend","keypress","textInput","paste"]),o("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),o("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),o("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var yo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),dE=new Set("cancel close invalid load scroll toggle".split(" ").concat(yo));function tg(i,a,u){var h=i.type||"unknown-event";i.currentTarget=u,bl(h,a,void 0,i),i.currentTarget=null}function ng(i,a){a=(a&4)!==0;for(var u=0;u<i.length;u++){var h=i[u],g=h.event;h=h.listeners;e:{var x=void 0;if(a)for(var T=h.length-1;0<=T;T--){var N=h[T],B=N.instance,Z=N.currentTarget;if(N=N.listener,B!==x&&g.isPropagationStopped())break e;tg(g,N,Z),x=B}else for(T=0;T<h.length;T++){if(N=h[T],B=N.instance,Z=N.currentTarget,N=N.listener,B!==x&&g.isPropagationStopped())break e;tg(g,N,Z),x=B}}}if(Qi)throw i=js,Qi=!1,js=null,i}function Yt(i,a){var u=a[gf];u===void 0&&(u=a[gf]=new Set);var h=i+"__bubble";u.has(h)||(ig(a,i,2,!1),u.add(h))}function uf(i,a,u){var h=0;a&&(h|=4),ig(u,i,h,a)}var Vl="_reactListening"+Math.random().toString(36).slice(2);function xo(i){if(!i[Vl]){i[Vl]=!0,n.forEach(function(u){u!=="selectionchange"&&(dE.has(u)||uf(u,!1,i),uf(u,!0,i))});var a=i.nodeType===9?i:i.ownerDocument;a===null||a[Vl]||(a[Vl]=!0,uf("selectionchange",!1,a))}}function ig(i,a,u,h){switch(bm(a)){case 1:var g=bS;break;case 4:g=AS;break;default:g=jc}u=g.bind(null,a,u,i),g=void 0,!Ws||a!=="touchstart"&&a!=="touchmove"&&a!=="wheel"||(g=!0),h?g!==void 0?i.addEventListener(a,u,{capture:!0,passive:g}):i.addEventListener(a,u,!0):g!==void 0?i.addEventListener(a,u,{passive:g}):i.addEventListener(a,u,!1)}function cf(i,a,u,h,g){var x=h;if((a&1)===0&&(a&2)===0&&h!==null)e:for(;;){if(h===null)return;var T=h.tag;if(T===3||T===4){var N=h.stateNode.containerInfo;if(N===g||N.nodeType===8&&N.parentNode===g)break;if(T===4)for(T=h.return;T!==null;){var B=T.tag;if((B===3||B===4)&&(B=T.stateNode.containerInfo,B===g||B.nodeType===8&&B.parentNode===g))return;T=T.return}for(;N!==null;){if(T=ps(N),T===null)return;if(B=T.tag,B===5||B===6){h=x=T;continue e}N=N.parentNode}}h=h.return}ai(function(){var Z=x,ve=V(u),_e=[];e:{var me=Qm.get(i);if(me!==void 0){var Fe=$c,Ve=i;switch(i){case"keypress":if(Fl(u)===0)break e;case"keydown":case"keyup":Fe=VS;break;case"focusin":Ve="focus",Fe=Zc;break;case"focusout":Ve="blur",Fe=Zc;break;case"beforeblur":case"afterblur":Fe=Zc;break;case"click":if(u.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Fe=Cm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Fe=PS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Fe=jS;break;case Km:case qm:case Zm:Fe=DS;break;case Jm:Fe=YS;break;case"scroll":Fe=RS;break;case"wheel":Fe=KS;break;case"copy":case"cut":case"paste":Fe=US;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Fe=Lm}var $e=(a&4)!==0,rn=!$e&&i==="scroll",$=$e?me!==null?me+"Capture":null:me;$e=[];for(var G=Z,q;G!==null;){q=G;var we=q.stateNode;if(q.tag===5&&we!==null&&(q=we,$!==null&&(we=Mn(G,$),we!=null&&$e.push(So(G,we,q)))),rn)break;G=G.return}0<$e.length&&(me=new Fe(me,Ve,null,u,ve),_e.push({event:me,listeners:$e}))}}if((a&7)===0){e:{if(me=i==="mouseover"||i==="pointerover",Fe=i==="mouseout"||i==="pointerout",me&&u!==pt&&(Ve=u.relatedTarget||u.fromElement)&&(ps(Ve)||Ve[tr]))break e;if((Fe||me)&&(me=ve.window===ve?ve:(me=ve.ownerDocument)?me.defaultView||me.parentWindow:window,Fe?(Ve=u.relatedTarget||u.toElement,Fe=Z,Ve=Ve?ps(Ve):null,Ve!==null&&(rn=er(Ve),Ve!==rn||Ve.tag!==5&&Ve.tag!==6)&&(Ve=null)):(Fe=null,Ve=Z),Fe!==Ve)){if($e=Cm,we="onMouseLeave",$="onMouseEnter",G="mouse",(i==="pointerout"||i==="pointerover")&&($e=Lm,we="onPointerLeave",$="onPointerEnter",G="pointer"),rn=Fe==null?me:ea(Fe),q=Ve==null?me:ea(Ve),me=new $e(we,G+"leave",Fe,u,ve),me.target=rn,me.relatedTarget=q,we=null,ps(ve)===Z&&($e=new $e($,G+"enter",Ve,u,ve),$e.target=q,$e.relatedTarget=rn,we=$e),rn=we,Fe&&Ve)t:{for($e=Fe,$=Ve,G=0,q=$e;q;q=Js(q))G++;for(q=0,we=$;we;we=Js(we))q++;for(;0<G-q;)$e=Js($e),G--;for(;0<q-G;)$=Js($),q--;for(;G--;){if($e===$||$!==null&&$e===$.alternate)break t;$e=Js($e),$=Js($)}$e=null}else $e=null;Fe!==null&&rg(_e,me,Fe,$e,!1),Ve!==null&&rn!==null&&rg(_e,rn,Ve,$e,!0)}}e:{if(me=Z?ea(Z):window,Fe=me.nodeName&&me.nodeName.toLowerCase(),Fe==="select"||Fe==="input"&&me.type==="file")var qe=nE;else if(Om(me))if(Bm)qe=aE;else{qe=rE;var nt=iE}else(Fe=me.nodeName)&&Fe.toLowerCase()==="input"&&(me.type==="checkbox"||me.type==="radio")&&(qe=sE);if(qe&&(qe=qe(i,Z))){km(_e,qe,u,ve);break e}nt&&nt(i,me,Z),i==="focusout"&&(nt=me._wrapperState)&&nt.controlled&&me.type==="number"&&je(me,"number",me.value)}switch(nt=Z?ea(Z):window,i){case"focusin":(Om(nt)||nt.contentEditable==="true")&&(qs=nt,rf=Z,_o=null);break;case"focusout":_o=rf=qs=null;break;case"mousedown":sf=!0;break;case"contextmenu":case"mouseup":case"dragend":sf=!1,Ym(_e,u,ve);break;case"selectionchange":if(uE)break;case"keydown":case"keyup":Ym(_e,u,ve)}var it;if(Qc)e:{switch(i){case"compositionstart":var ut="onCompositionStart";break e;case"compositionend":ut="onCompositionEnd";break e;case"compositionupdate":ut="onCompositionUpdate";break e}ut=void 0}else Ks?Um(i,u)&&(ut="onCompositionEnd"):i==="keydown"&&u.keyCode===229&&(ut="onCompositionStart");ut&&(Im&&u.locale!=="ko"&&(Ks||ut!=="onCompositionStart"?ut==="onCompositionEnd"&&Ks&&(it=Am()):(Nr=ve,Yc="value"in Nr?Nr.value:Nr.textContent,Ks=!0)),nt=Gl(Z,ut),0<nt.length&&(ut=new Pm(ut,i,null,u,ve),_e.push({event:ut,listeners:nt}),it?ut.data=it:(it=Fm(u),it!==null&&(ut.data=it)))),(it=ZS?JS(i,u):QS(i,u))&&(Z=Gl(Z,"onBeforeInput"),0<Z.length&&(ve=new Pm("onBeforeInput","beforeinput",null,u,ve),_e.push({event:ve,listeners:Z}),ve.data=it))}ng(_e,a)})}function So(i,a,u){return{instance:i,listener:a,currentTarget:u}}function Gl(i,a){for(var u=a+"Capture",h=[];i!==null;){var g=i,x=g.stateNode;g.tag===5&&x!==null&&(g=x,x=Mn(i,u),x!=null&&h.unshift(So(i,x,g)),x=Mn(i,a),x!=null&&h.push(So(i,x,g))),i=i.return}return h}function Js(i){if(i===null)return null;do i=i.return;while(i&&i.tag!==5);return i||null}function rg(i,a,u,h,g){for(var x=a._reactName,T=[];u!==null&&u!==h;){var N=u,B=N.alternate,Z=N.stateNode;if(B!==null&&B===h)break;N.tag===5&&Z!==null&&(N=Z,g?(B=Mn(u,x),B!=null&&T.unshift(So(u,B,N))):g||(B=Mn(u,x),B!=null&&T.push(So(u,B,N)))),u=u.return}T.length!==0&&i.push({event:a,listeners:T})}var hE=/\r\n?/g,pE=/\u0000|\uFFFD/g;function sg(i){return(typeof i=="string"?i:""+i).replace(hE,`
`).replace(pE,"")}function Wl(i,a,u){if(a=sg(a),sg(i)!==a&&u)throw Error(t(425))}function jl(){}var ff=null,df=null;function hf(i,a){return i==="textarea"||i==="noscript"||typeof a.children=="string"||typeof a.children=="number"||typeof a.dangerouslySetInnerHTML=="object"&&a.dangerouslySetInnerHTML!==null&&a.dangerouslySetInnerHTML.__html!=null}var pf=typeof setTimeout=="function"?setTimeout:void 0,mE=typeof clearTimeout=="function"?clearTimeout:void 0,ag=typeof Promise=="function"?Promise:void 0,gE=typeof queueMicrotask=="function"?queueMicrotask:typeof ag<"u"?function(i){return ag.resolve(null).then(i).catch(vE)}:pf;function vE(i){setTimeout(function(){throw i})}function mf(i,a){var u=a,h=0;do{var g=u.nextSibling;if(i.removeChild(u),g&&g.nodeType===8)if(u=g.data,u==="/$"){if(h===0){i.removeChild(g),co(a);return}h--}else u!=="$"&&u!=="$?"&&u!=="$!"||h++;u=g}while(u);co(a)}function Fr(i){for(;i!=null;i=i.nextSibling){var a=i.nodeType;if(a===1||a===3)break;if(a===8){if(a=i.data,a==="$"||a==="$!"||a==="$?")break;if(a==="/$")return null}}return i}function og(i){i=i.previousSibling;for(var a=0;i;){if(i.nodeType===8){var u=i.data;if(u==="$"||u==="$!"||u==="$?"){if(a===0)return i;a--}else u==="/$"&&a++}i=i.previousSibling}return null}var Qs=Math.random().toString(36).slice(2),Oi="__reactFiber$"+Qs,Eo="__reactProps$"+Qs,tr="__reactContainer$"+Qs,gf="__reactEvents$"+Qs,_E="__reactListeners$"+Qs,yE="__reactHandles$"+Qs;function ps(i){var a=i[Oi];if(a)return a;for(var u=i.parentNode;u;){if(a=u[tr]||u[Oi]){if(u=a.alternate,a.child!==null||u!==null&&u.child!==null)for(i=og(i);i!==null;){if(u=i[Oi])return u;i=og(i)}return a}i=u,u=i.parentNode}return null}function Mo(i){return i=i[Oi]||i[tr],!i||i.tag!==5&&i.tag!==6&&i.tag!==13&&i.tag!==3?null:i}function ea(i){if(i.tag===5||i.tag===6)return i.stateNode;throw Error(t(33))}function Xl(i){return i[Eo]||null}var vf=[],ta=-1;function Or(i){return{current:i}}function $t(i){0>ta||(i.current=vf[ta],vf[ta]=null,ta--)}function Wt(i,a){ta++,vf[ta]=i.current,i.current=a}var kr={},bn=Or(kr),Gn=Or(!1),ms=kr;function na(i,a){var u=i.type.contextTypes;if(!u)return kr;var h=i.stateNode;if(h&&h.__reactInternalMemoizedUnmaskedChildContext===a)return h.__reactInternalMemoizedMaskedChildContext;var g={},x;for(x in u)g[x]=a[x];return h&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=a,i.__reactInternalMemoizedMaskedChildContext=g),g}function Wn(i){return i=i.childContextTypes,i!=null}function Yl(){$t(Gn),$t(bn)}function lg(i,a,u){if(bn.current!==kr)throw Error(t(168));Wt(bn,a),Wt(Gn,u)}function ug(i,a,u){var h=i.stateNode;if(a=a.childContextTypes,typeof h.getChildContext!="function")return u;h=h.getChildContext();for(var g in h)if(!(g in a))throw Error(t(108,fe(i)||"Unknown",g));return se({},u,h)}function $l(i){return i=(i=i.stateNode)&&i.__reactInternalMemoizedMergedChildContext||kr,ms=bn.current,Wt(bn,i),Wt(Gn,Gn.current),!0}function cg(i,a,u){var h=i.stateNode;if(!h)throw Error(t(169));u?(i=ug(i,a,ms),h.__reactInternalMemoizedMergedChildContext=i,$t(Gn),$t(bn),Wt(bn,i)):$t(Gn),Wt(Gn,u)}var nr=null,Kl=!1,_f=!1;function fg(i){nr===null?nr=[i]:nr.push(i)}function xE(i){Kl=!0,fg(i)}function Br(){if(!_f&&nr!==null){_f=!0;var i=0,a=Tt;try{var u=nr;for(Tt=1;i<u.length;i++){var h=u[i];do h=h(!0);while(h!==null)}nr=null,Kl=!1}catch(g){throw nr!==null&&(nr=nr.slice(i+1)),A(Pe,Br),g}finally{Tt=a,_f=!1}}return null}var ia=[],ra=0,ql=null,Zl=0,oi=[],li=0,gs=null,ir=1,rr="";function vs(i,a){ia[ra++]=Zl,ia[ra++]=ql,ql=i,Zl=a}function dg(i,a,u){oi[li++]=ir,oi[li++]=rr,oi[li++]=gs,gs=i;var h=ir;i=rr;var g=32-At(h)-1;h&=~(1<<g),u+=1;var x=32-At(a)+g;if(30<x){var T=g-g%5;x=(h&(1<<T)-1).toString(32),h>>=T,g-=T,ir=1<<32-At(a)+g|u<<g|h,rr=x+i}else ir=1<<x|u<<g|h,rr=i}function yf(i){i.return!==null&&(vs(i,1),dg(i,1,0))}function xf(i){for(;i===ql;)ql=ia[--ra],ia[ra]=null,Zl=ia[--ra],ia[ra]=null;for(;i===gs;)gs=oi[--li],oi[li]=null,rr=oi[--li],oi[li]=null,ir=oi[--li],oi[li]=null}var Qn=null,ei=null,qt=!1,Si=null;function hg(i,a){var u=di(5,null,null,0);u.elementType="DELETED",u.stateNode=a,u.return=i,a=i.deletions,a===null?(i.deletions=[u],i.flags|=16):a.push(u)}function pg(i,a){switch(i.tag){case 5:var u=i.type;return a=a.nodeType!==1||u.toLowerCase()!==a.nodeName.toLowerCase()?null:a,a!==null?(i.stateNode=a,Qn=i,ei=Fr(a.firstChild),!0):!1;case 6:return a=i.pendingProps===""||a.nodeType!==3?null:a,a!==null?(i.stateNode=a,Qn=i,ei=null,!0):!1;case 13:return a=a.nodeType!==8?null:a,a!==null?(u=gs!==null?{id:ir,overflow:rr}:null,i.memoizedState={dehydrated:a,treeContext:u,retryLane:1073741824},u=di(18,null,null,0),u.stateNode=a,u.return=i,i.child=u,Qn=i,ei=null,!0):!1;default:return!1}}function Sf(i){return(i.mode&1)!==0&&(i.flags&128)===0}function Ef(i){if(qt){var a=ei;if(a){var u=a;if(!pg(i,a)){if(Sf(i))throw Error(t(418));a=Fr(u.nextSibling);var h=Qn;a&&pg(i,a)?hg(h,u):(i.flags=i.flags&-4097|2,qt=!1,Qn=i)}}else{if(Sf(i))throw Error(t(418));i.flags=i.flags&-4097|2,qt=!1,Qn=i}}}function mg(i){for(i=i.return;i!==null&&i.tag!==5&&i.tag!==3&&i.tag!==13;)i=i.return;Qn=i}function Jl(i){if(i!==Qn)return!1;if(!qt)return mg(i),qt=!0,!1;var a;if((a=i.tag!==3)&&!(a=i.tag!==5)&&(a=i.type,a=a!=="head"&&a!=="body"&&!hf(i.type,i.memoizedProps)),a&&(a=ei)){if(Sf(i))throw gg(),Error(t(418));for(;a;)hg(i,a),a=Fr(a.nextSibling)}if(mg(i),i.tag===13){if(i=i.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(t(317));e:{for(i=i.nextSibling,a=0;i;){if(i.nodeType===8){var u=i.data;if(u==="/$"){if(a===0){ei=Fr(i.nextSibling);break e}a--}else u!=="$"&&u!=="$!"&&u!=="$?"||a++}i=i.nextSibling}ei=null}}else ei=Qn?Fr(i.stateNode.nextSibling):null;return!0}function gg(){for(var i=ei;i;)i=Fr(i.nextSibling)}function sa(){ei=Qn=null,qt=!1}function Mf(i){Si===null?Si=[i]:Si.push(i)}var SE=b.ReactCurrentBatchConfig;function To(i,a,u){if(i=u.ref,i!==null&&typeof i!="function"&&typeof i!="object"){if(u._owner){if(u=u._owner,u){if(u.tag!==1)throw Error(t(309));var h=u.stateNode}if(!h)throw Error(t(147,i));var g=h,x=""+i;return a!==null&&a.ref!==null&&typeof a.ref=="function"&&a.ref._stringRef===x?a.ref:(a=function(T){var N=g.refs;T===null?delete N[x]:N[x]=T},a._stringRef=x,a)}if(typeof i!="string")throw Error(t(284));if(!u._owner)throw Error(t(290,i))}return i}function Ql(i,a){throw i=Object.prototype.toString.call(a),Error(t(31,i==="[object Object]"?"object with keys {"+Object.keys(a).join(", ")+"}":i))}function vg(i){var a=i._init;return a(i._payload)}function _g(i){function a($,G){if(i){var q=$.deletions;q===null?($.deletions=[G],$.flags|=16):q.push(G)}}function u($,G){if(!i)return null;for(;G!==null;)a($,G),G=G.sibling;return null}function h($,G){for($=new Map;G!==null;)G.key!==null?$.set(G.key,G):$.set(G.index,G),G=G.sibling;return $}function g($,G){return $=Yr($,G),$.index=0,$.sibling=null,$}function x($,G,q){return $.index=q,i?(q=$.alternate,q!==null?(q=q.index,q<G?($.flags|=2,G):q):($.flags|=2,G)):($.flags|=1048576,G)}function T($){return i&&$.alternate===null&&($.flags|=2),$}function N($,G,q,we){return G===null||G.tag!==6?(G=pd(q,$.mode,we),G.return=$,G):(G=g(G,q),G.return=$,G)}function B($,G,q,we){var qe=q.type;return qe===F?ve($,G,q.props.children,we,q.key):G!==null&&(G.elementType===qe||typeof qe=="object"&&qe!==null&&qe.$$typeof===re&&vg(qe)===G.type)?(we=g(G,q.props),we.ref=To($,G,q),we.return=$,we):(we=Mu(q.type,q.key,q.props,null,$.mode,we),we.ref=To($,G,q),we.return=$,we)}function Z($,G,q,we){return G===null||G.tag!==4||G.stateNode.containerInfo!==q.containerInfo||G.stateNode.implementation!==q.implementation?(G=md(q,$.mode,we),G.return=$,G):(G=g(G,q.children||[]),G.return=$,G)}function ve($,G,q,we,qe){return G===null||G.tag!==7?(G=ws(q,$.mode,we,qe),G.return=$,G):(G=g(G,q),G.return=$,G)}function _e($,G,q){if(typeof G=="string"&&G!==""||typeof G=="number")return G=pd(""+G,$.mode,q),G.return=$,G;if(typeof G=="object"&&G!==null){switch(G.$$typeof){case I:return q=Mu(G.type,G.key,G.props,null,$.mode,q),q.ref=To($,null,G),q.return=$,q;case U:return G=md(G,$.mode,q),G.return=$,G;case re:var we=G._init;return _e($,we(G._payload),q)}if(ct(G)||ce(G))return G=ws(G,$.mode,q,null),G.return=$,G;Ql($,G)}return null}function me($,G,q,we){var qe=G!==null?G.key:null;if(typeof q=="string"&&q!==""||typeof q=="number")return qe!==null?null:N($,G,""+q,we);if(typeof q=="object"&&q!==null){switch(q.$$typeof){case I:return q.key===qe?B($,G,q,we):null;case U:return q.key===qe?Z($,G,q,we):null;case re:return qe=q._init,me($,G,qe(q._payload),we)}if(ct(q)||ce(q))return qe!==null?null:ve($,G,q,we,null);Ql($,q)}return null}function Fe($,G,q,we,qe){if(typeof we=="string"&&we!==""||typeof we=="number")return $=$.get(q)||null,N(G,$,""+we,qe);if(typeof we=="object"&&we!==null){switch(we.$$typeof){case I:return $=$.get(we.key===null?q:we.key)||null,B(G,$,we,qe);case U:return $=$.get(we.key===null?q:we.key)||null,Z(G,$,we,qe);case re:var nt=we._init;return Fe($,G,q,nt(we._payload),qe)}if(ct(we)||ce(we))return $=$.get(q)||null,ve(G,$,we,qe,null);Ql(G,we)}return null}function Ve($,G,q,we){for(var qe=null,nt=null,it=G,ut=G=0,gn=null;it!==null&&ut<q.length;ut++){it.index>ut?(gn=it,it=null):gn=it.sibling;var Pt=me($,it,q[ut],we);if(Pt===null){it===null&&(it=gn);break}i&&it&&Pt.alternate===null&&a($,it),G=x(Pt,G,ut),nt===null?qe=Pt:nt.sibling=Pt,nt=Pt,it=gn}if(ut===q.length)return u($,it),qt&&vs($,ut),qe;if(it===null){for(;ut<q.length;ut++)it=_e($,q[ut],we),it!==null&&(G=x(it,G,ut),nt===null?qe=it:nt.sibling=it,nt=it);return qt&&vs($,ut),qe}for(it=h($,it);ut<q.length;ut++)gn=Fe(it,$,ut,q[ut],we),gn!==null&&(i&&gn.alternate!==null&&it.delete(gn.key===null?ut:gn.key),G=x(gn,G,ut),nt===null?qe=gn:nt.sibling=gn,nt=gn);return i&&it.forEach(function($r){return a($,$r)}),qt&&vs($,ut),qe}function $e($,G,q,we){var qe=ce(q);if(typeof qe!="function")throw Error(t(150));if(q=qe.call(q),q==null)throw Error(t(151));for(var nt=qe=null,it=G,ut=G=0,gn=null,Pt=q.next();it!==null&&!Pt.done;ut++,Pt=q.next()){it.index>ut?(gn=it,it=null):gn=it.sibling;var $r=me($,it,Pt.value,we);if($r===null){it===null&&(it=gn);break}i&&it&&$r.alternate===null&&a($,it),G=x($r,G,ut),nt===null?qe=$r:nt.sibling=$r,nt=$r,it=gn}if(Pt.done)return u($,it),qt&&vs($,ut),qe;if(it===null){for(;!Pt.done;ut++,Pt=q.next())Pt=_e($,Pt.value,we),Pt!==null&&(G=x(Pt,G,ut),nt===null?qe=Pt:nt.sibling=Pt,nt=Pt);return qt&&vs($,ut),qe}for(it=h($,it);!Pt.done;ut++,Pt=q.next())Pt=Fe(it,$,ut,Pt.value,we),Pt!==null&&(i&&Pt.alternate!==null&&it.delete(Pt.key===null?ut:Pt.key),G=x(Pt,G,ut),nt===null?qe=Pt:nt.sibling=Pt,nt=Pt);return i&&it.forEach(function(eM){return a($,eM)}),qt&&vs($,ut),qe}function rn($,G,q,we){if(typeof q=="object"&&q!==null&&q.type===F&&q.key===null&&(q=q.props.children),typeof q=="object"&&q!==null){switch(q.$$typeof){case I:e:{for(var qe=q.key,nt=G;nt!==null;){if(nt.key===qe){if(qe=q.type,qe===F){if(nt.tag===7){u($,nt.sibling),G=g(nt,q.props.children),G.return=$,$=G;break e}}else if(nt.elementType===qe||typeof qe=="object"&&qe!==null&&qe.$$typeof===re&&vg(qe)===nt.type){u($,nt.sibling),G=g(nt,q.props),G.ref=To($,nt,q),G.return=$,$=G;break e}u($,nt);break}else a($,nt);nt=nt.sibling}q.type===F?(G=ws(q.props.children,$.mode,we,q.key),G.return=$,$=G):(we=Mu(q.type,q.key,q.props,null,$.mode,we),we.ref=To($,G,q),we.return=$,$=we)}return T($);case U:e:{for(nt=q.key;G!==null;){if(G.key===nt)if(G.tag===4&&G.stateNode.containerInfo===q.containerInfo&&G.stateNode.implementation===q.implementation){u($,G.sibling),G=g(G,q.children||[]),G.return=$,$=G;break e}else{u($,G);break}else a($,G);G=G.sibling}G=md(q,$.mode,we),G.return=$,$=G}return T($);case re:return nt=q._init,rn($,G,nt(q._payload),we)}if(ct(q))return Ve($,G,q,we);if(ce(q))return $e($,G,q,we);Ql($,q)}return typeof q=="string"&&q!==""||typeof q=="number"?(q=""+q,G!==null&&G.tag===6?(u($,G.sibling),G=g(G,q),G.return=$,$=G):(u($,G),G=pd(q,$.mode,we),G.return=$,$=G),T($)):u($,G)}return rn}var aa=_g(!0),yg=_g(!1),eu=Or(null),tu=null,oa=null,Tf=null;function wf(){Tf=oa=tu=null}function bf(i){var a=eu.current;$t(eu),i._currentValue=a}function Af(i,a,u){for(;i!==null;){var h=i.alternate;if((i.childLanes&a)!==a?(i.childLanes|=a,h!==null&&(h.childLanes|=a)):h!==null&&(h.childLanes&a)!==a&&(h.childLanes|=a),i===u)break;i=i.return}}function la(i,a){tu=i,Tf=oa=null,i=i.dependencies,i!==null&&i.firstContext!==null&&((i.lanes&a)!==0&&(jn=!0),i.firstContext=null)}function ui(i){var a=i._currentValue;if(Tf!==i)if(i={context:i,memoizedValue:a,next:null},oa===null){if(tu===null)throw Error(t(308));oa=i,tu.dependencies={lanes:0,firstContext:i}}else oa=oa.next=i;return a}var _s=null;function Rf(i){_s===null?_s=[i]:_s.push(i)}function xg(i,a,u,h){var g=a.interleaved;return g===null?(u.next=u,Rf(a)):(u.next=g.next,g.next=u),a.interleaved=u,sr(i,h)}function sr(i,a){i.lanes|=a;var u=i.alternate;for(u!==null&&(u.lanes|=a),u=i,i=i.return;i!==null;)i.childLanes|=a,u=i.alternate,u!==null&&(u.childLanes|=a),u=i,i=i.return;return u.tag===3?u.stateNode:null}var zr=!1;function Cf(i){i.updateQueue={baseState:i.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Sg(i,a){i=i.updateQueue,a.updateQueue===i&&(a.updateQueue={baseState:i.baseState,firstBaseUpdate:i.firstBaseUpdate,lastBaseUpdate:i.lastBaseUpdate,shared:i.shared,effects:i.effects})}function ar(i,a){return{eventTime:i,lane:a,tag:0,payload:null,callback:null,next:null}}function Hr(i,a,u){var h=i.updateQueue;if(h===null)return null;if(h=h.shared,(Ct&2)!==0){var g=h.pending;return g===null?a.next=a:(a.next=g.next,g.next=a),h.pending=a,sr(i,u)}return g=h.interleaved,g===null?(a.next=a,Rf(h)):(a.next=g.next,g.next=a),h.interleaved=a,sr(i,u)}function nu(i,a,u){if(a=a.updateQueue,a!==null&&(a=a.shared,(u&4194240)!==0)){var h=a.lanes;h&=i.pendingLanes,u|=h,a.lanes=u,hs(i,u)}}function Eg(i,a){var u=i.updateQueue,h=i.alternate;if(h!==null&&(h=h.updateQueue,u===h)){var g=null,x=null;if(u=u.firstBaseUpdate,u!==null){do{var T={eventTime:u.eventTime,lane:u.lane,tag:u.tag,payload:u.payload,callback:u.callback,next:null};x===null?g=x=T:x=x.next=T,u=u.next}while(u!==null);x===null?g=x=a:x=x.next=a}else g=x=a;u={baseState:h.baseState,firstBaseUpdate:g,lastBaseUpdate:x,shared:h.shared,effects:h.effects},i.updateQueue=u;return}i=u.lastBaseUpdate,i===null?u.firstBaseUpdate=a:i.next=a,u.lastBaseUpdate=a}function iu(i,a,u,h){var g=i.updateQueue;zr=!1;var x=g.firstBaseUpdate,T=g.lastBaseUpdate,N=g.shared.pending;if(N!==null){g.shared.pending=null;var B=N,Z=B.next;B.next=null,T===null?x=Z:T.next=Z,T=B;var ve=i.alternate;ve!==null&&(ve=ve.updateQueue,N=ve.lastBaseUpdate,N!==T&&(N===null?ve.firstBaseUpdate=Z:N.next=Z,ve.lastBaseUpdate=B))}if(x!==null){var _e=g.baseState;T=0,ve=Z=B=null,N=x;do{var me=N.lane,Fe=N.eventTime;if((h&me)===me){ve!==null&&(ve=ve.next={eventTime:Fe,lane:0,tag:N.tag,payload:N.payload,callback:N.callback,next:null});e:{var Ve=i,$e=N;switch(me=a,Fe=u,$e.tag){case 1:if(Ve=$e.payload,typeof Ve=="function"){_e=Ve.call(Fe,_e,me);break e}_e=Ve;break e;case 3:Ve.flags=Ve.flags&-65537|128;case 0:if(Ve=$e.payload,me=typeof Ve=="function"?Ve.call(Fe,_e,me):Ve,me==null)break e;_e=se({},_e,me);break e;case 2:zr=!0}}N.callback!==null&&N.lane!==0&&(i.flags|=64,me=g.effects,me===null?g.effects=[N]:me.push(N))}else Fe={eventTime:Fe,lane:me,tag:N.tag,payload:N.payload,callback:N.callback,next:null},ve===null?(Z=ve=Fe,B=_e):ve=ve.next=Fe,T|=me;if(N=N.next,N===null){if(N=g.shared.pending,N===null)break;me=N,N=me.next,me.next=null,g.lastBaseUpdate=me,g.shared.pending=null}}while(!0);if(ve===null&&(B=_e),g.baseState=B,g.firstBaseUpdate=Z,g.lastBaseUpdate=ve,a=g.shared.interleaved,a!==null){g=a;do T|=g.lane,g=g.next;while(g!==a)}else x===null&&(g.shared.lanes=0);Ss|=T,i.lanes=T,i.memoizedState=_e}}function Mg(i,a,u){if(i=a.effects,a.effects=null,i!==null)for(a=0;a<i.length;a++){var h=i[a],g=h.callback;if(g!==null){if(h.callback=null,h=u,typeof g!="function")throw Error(t(191,g));g.call(h)}}}var wo={},ki=Or(wo),bo=Or(wo),Ao=Or(wo);function ys(i){if(i===wo)throw Error(t(174));return i}function Pf(i,a){switch(Wt(Ao,a),Wt(bo,i),Wt(ki,wo),i=a.nodeType,i){case 9:case 11:a=(a=a.documentElement)?a.namespaceURI:ge(null,"");break;default:i=i===8?a.parentNode:a,a=i.namespaceURI||null,i=i.tagName,a=ge(a,i)}$t(ki),Wt(ki,a)}function ua(){$t(ki),$t(bo),$t(Ao)}function Tg(i){ys(Ao.current);var a=ys(ki.current),u=ge(a,i.type);a!==u&&(Wt(bo,i),Wt(ki,u))}function Lf(i){bo.current===i&&($t(ki),$t(bo))}var Zt=Or(0);function ru(i){for(var a=i;a!==null;){if(a.tag===13){var u=a.memoizedState;if(u!==null&&(u=u.dehydrated,u===null||u.data==="$?"||u.data==="$!"))return a}else if(a.tag===19&&a.memoizedProps.revealOrder!==void 0){if((a.flags&128)!==0)return a}else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return null;a=a.return}a.sibling.return=a.return,a=a.sibling}return null}var If=[];function Df(){for(var i=0;i<If.length;i++)If[i]._workInProgressVersionPrimary=null;If.length=0}var su=b.ReactCurrentDispatcher,Nf=b.ReactCurrentBatchConfig,xs=0,Jt=null,un=null,pn=null,au=!1,Ro=!1,Co=0,EE=0;function An(){throw Error(t(321))}function Uf(i,a){if(a===null)return!1;for(var u=0;u<a.length&&u<i.length;u++)if(!xi(i[u],a[u]))return!1;return!0}function Ff(i,a,u,h,g,x){if(xs=x,Jt=a,a.memoizedState=null,a.updateQueue=null,a.lanes=0,su.current=i===null||i.memoizedState===null?bE:AE,i=u(h,g),Ro){x=0;do{if(Ro=!1,Co=0,25<=x)throw Error(t(301));x+=1,pn=un=null,a.updateQueue=null,su.current=RE,i=u(h,g)}while(Ro)}if(su.current=uu,a=un!==null&&un.next!==null,xs=0,pn=un=Jt=null,au=!1,a)throw Error(t(300));return i}function Of(){var i=Co!==0;return Co=0,i}function Bi(){var i={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return pn===null?Jt.memoizedState=pn=i:pn=pn.next=i,pn}function ci(){if(un===null){var i=Jt.alternate;i=i!==null?i.memoizedState:null}else i=un.next;var a=pn===null?Jt.memoizedState:pn.next;if(a!==null)pn=a,un=i;else{if(i===null)throw Error(t(310));un=i,i={memoizedState:un.memoizedState,baseState:un.baseState,baseQueue:un.baseQueue,queue:un.queue,next:null},pn===null?Jt.memoizedState=pn=i:pn=pn.next=i}return pn}function Po(i,a){return typeof a=="function"?a(i):a}function kf(i){var a=ci(),u=a.queue;if(u===null)throw Error(t(311));u.lastRenderedReducer=i;var h=un,g=h.baseQueue,x=u.pending;if(x!==null){if(g!==null){var T=g.next;g.next=x.next,x.next=T}h.baseQueue=g=x,u.pending=null}if(g!==null){x=g.next,h=h.baseState;var N=T=null,B=null,Z=x;do{var ve=Z.lane;if((xs&ve)===ve)B!==null&&(B=B.next={lane:0,action:Z.action,hasEagerState:Z.hasEagerState,eagerState:Z.eagerState,next:null}),h=Z.hasEagerState?Z.eagerState:i(h,Z.action);else{var _e={lane:ve,action:Z.action,hasEagerState:Z.hasEagerState,eagerState:Z.eagerState,next:null};B===null?(N=B=_e,T=h):B=B.next=_e,Jt.lanes|=ve,Ss|=ve}Z=Z.next}while(Z!==null&&Z!==x);B===null?T=h:B.next=N,xi(h,a.memoizedState)||(jn=!0),a.memoizedState=h,a.baseState=T,a.baseQueue=B,u.lastRenderedState=h}if(i=u.interleaved,i!==null){g=i;do x=g.lane,Jt.lanes|=x,Ss|=x,g=g.next;while(g!==i)}else g===null&&(u.lanes=0);return[a.memoizedState,u.dispatch]}function Bf(i){var a=ci(),u=a.queue;if(u===null)throw Error(t(311));u.lastRenderedReducer=i;var h=u.dispatch,g=u.pending,x=a.memoizedState;if(g!==null){u.pending=null;var T=g=g.next;do x=i(x,T.action),T=T.next;while(T!==g);xi(x,a.memoizedState)||(jn=!0),a.memoizedState=x,a.baseQueue===null&&(a.baseState=x),u.lastRenderedState=x}return[x,h]}function wg(){}function bg(i,a){var u=Jt,h=ci(),g=a(),x=!xi(h.memoizedState,g);if(x&&(h.memoizedState=g,jn=!0),h=h.queue,zf(Cg.bind(null,u,h,i),[i]),h.getSnapshot!==a||x||pn!==null&&pn.memoizedState.tag&1){if(u.flags|=2048,Lo(9,Rg.bind(null,u,h,g,a),void 0,null),mn===null)throw Error(t(349));(xs&30)!==0||Ag(u,a,g)}return g}function Ag(i,a,u){i.flags|=16384,i={getSnapshot:a,value:u},a=Jt.updateQueue,a===null?(a={lastEffect:null,stores:null},Jt.updateQueue=a,a.stores=[i]):(u=a.stores,u===null?a.stores=[i]:u.push(i))}function Rg(i,a,u,h){a.value=u,a.getSnapshot=h,Pg(a)&&Lg(i)}function Cg(i,a,u){return u(function(){Pg(a)&&Lg(i)})}function Pg(i){var a=i.getSnapshot;i=i.value;try{var u=a();return!xi(i,u)}catch{return!0}}function Lg(i){var a=sr(i,1);a!==null&&wi(a,i,1,-1)}function Ig(i){var a=Bi();return typeof i=="function"&&(i=i()),a.memoizedState=a.baseState=i,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Po,lastRenderedState:i},a.queue=i,i=i.dispatch=wE.bind(null,Jt,i),[a.memoizedState,i]}function Lo(i,a,u,h){return i={tag:i,create:a,destroy:u,deps:h,next:null},a=Jt.updateQueue,a===null?(a={lastEffect:null,stores:null},Jt.updateQueue=a,a.lastEffect=i.next=i):(u=a.lastEffect,u===null?a.lastEffect=i.next=i:(h=u.next,u.next=i,i.next=h,a.lastEffect=i)),i}function Dg(){return ci().memoizedState}function ou(i,a,u,h){var g=Bi();Jt.flags|=i,g.memoizedState=Lo(1|a,u,void 0,h===void 0?null:h)}function lu(i,a,u,h){var g=ci();h=h===void 0?null:h;var x=void 0;if(un!==null){var T=un.memoizedState;if(x=T.destroy,h!==null&&Uf(h,T.deps)){g.memoizedState=Lo(a,u,x,h);return}}Jt.flags|=i,g.memoizedState=Lo(1|a,u,x,h)}function Ng(i,a){return ou(8390656,8,i,a)}function zf(i,a){return lu(2048,8,i,a)}function Ug(i,a){return lu(4,2,i,a)}function Fg(i,a){return lu(4,4,i,a)}function Og(i,a){if(typeof a=="function")return i=i(),a(i),function(){a(null)};if(a!=null)return i=i(),a.current=i,function(){a.current=null}}function kg(i,a,u){return u=u!=null?u.concat([i]):null,lu(4,4,Og.bind(null,a,i),u)}function Hf(){}function Bg(i,a){var u=ci();a=a===void 0?null:a;var h=u.memoizedState;return h!==null&&a!==null&&Uf(a,h[1])?h[0]:(u.memoizedState=[i,a],i)}function zg(i,a){var u=ci();a=a===void 0?null:a;var h=u.memoizedState;return h!==null&&a!==null&&Uf(a,h[1])?h[0]:(i=i(),u.memoizedState=[i,a],i)}function Hg(i,a,u){return(xs&21)===0?(i.baseState&&(i.baseState=!1,jn=!0),i.memoizedState=u):(xi(u,a)||(u=Nn(),Jt.lanes|=u,Ss|=u,i.baseState=!0),a)}function ME(i,a){var u=Tt;Tt=u!==0&&4>u?u:4,i(!0);var h=Nf.transition;Nf.transition={};try{i(!1),a()}finally{Tt=u,Nf.transition=h}}function Vg(){return ci().memoizedState}function TE(i,a,u){var h=jr(i);if(u={lane:h,action:u,hasEagerState:!1,eagerState:null,next:null},Gg(i))Wg(a,u);else if(u=xg(i,a,u,h),u!==null){var g=Fn();wi(u,i,h,g),jg(u,a,h)}}function wE(i,a,u){var h=jr(i),g={lane:h,action:u,hasEagerState:!1,eagerState:null,next:null};if(Gg(i))Wg(a,g);else{var x=i.alternate;if(i.lanes===0&&(x===null||x.lanes===0)&&(x=a.lastRenderedReducer,x!==null))try{var T=a.lastRenderedState,N=x(T,u);if(g.hasEagerState=!0,g.eagerState=N,xi(N,T)){var B=a.interleaved;B===null?(g.next=g,Rf(a)):(g.next=B.next,B.next=g),a.interleaved=g;return}}catch{}u=xg(i,a,g,h),u!==null&&(g=Fn(),wi(u,i,h,g),jg(u,a,h))}}function Gg(i){var a=i.alternate;return i===Jt||a!==null&&a===Jt}function Wg(i,a){Ro=au=!0;var u=i.pending;u===null?a.next=a:(a.next=u.next,u.next=a),i.pending=a}function jg(i,a,u){if((u&4194240)!==0){var h=a.lanes;h&=i.pendingLanes,u|=h,a.lanes=u,hs(i,u)}}var uu={readContext:ui,useCallback:An,useContext:An,useEffect:An,useImperativeHandle:An,useInsertionEffect:An,useLayoutEffect:An,useMemo:An,useReducer:An,useRef:An,useState:An,useDebugValue:An,useDeferredValue:An,useTransition:An,useMutableSource:An,useSyncExternalStore:An,useId:An,unstable_isNewReconciler:!1},bE={readContext:ui,useCallback:function(i,a){return Bi().memoizedState=[i,a===void 0?null:a],i},useContext:ui,useEffect:Ng,useImperativeHandle:function(i,a,u){return u=u!=null?u.concat([i]):null,ou(4194308,4,Og.bind(null,a,i),u)},useLayoutEffect:function(i,a){return ou(4194308,4,i,a)},useInsertionEffect:function(i,a){return ou(4,2,i,a)},useMemo:function(i,a){var u=Bi();return a=a===void 0?null:a,i=i(),u.memoizedState=[i,a],i},useReducer:function(i,a,u){var h=Bi();return a=u!==void 0?u(a):a,h.memoizedState=h.baseState=a,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:i,lastRenderedState:a},h.queue=i,i=i.dispatch=TE.bind(null,Jt,i),[h.memoizedState,i]},useRef:function(i){var a=Bi();return i={current:i},a.memoizedState=i},useState:Ig,useDebugValue:Hf,useDeferredValue:function(i){return Bi().memoizedState=i},useTransition:function(){var i=Ig(!1),a=i[0];return i=ME.bind(null,i[1]),Bi().memoizedState=i,[a,i]},useMutableSource:function(){},useSyncExternalStore:function(i,a,u){var h=Jt,g=Bi();if(qt){if(u===void 0)throw Error(t(407));u=u()}else{if(u=a(),mn===null)throw Error(t(349));(xs&30)!==0||Ag(h,a,u)}g.memoizedState=u;var x={value:u,getSnapshot:a};return g.queue=x,Ng(Cg.bind(null,h,x,i),[i]),h.flags|=2048,Lo(9,Rg.bind(null,h,x,u,a),void 0,null),u},useId:function(){var i=Bi(),a=mn.identifierPrefix;if(qt){var u=rr,h=ir;u=(h&~(1<<32-At(h)-1)).toString(32)+u,a=":"+a+"R"+u,u=Co++,0<u&&(a+="H"+u.toString(32)),a+=":"}else u=EE++,a=":"+a+"r"+u.toString(32)+":";return i.memoizedState=a},unstable_isNewReconciler:!1},AE={readContext:ui,useCallback:Bg,useContext:ui,useEffect:zf,useImperativeHandle:kg,useInsertionEffect:Ug,useLayoutEffect:Fg,useMemo:zg,useReducer:kf,useRef:Dg,useState:function(){return kf(Po)},useDebugValue:Hf,useDeferredValue:function(i){var a=ci();return Hg(a,un.memoizedState,i)},useTransition:function(){var i=kf(Po)[0],a=ci().memoizedState;return[i,a]},useMutableSource:wg,useSyncExternalStore:bg,useId:Vg,unstable_isNewReconciler:!1},RE={readContext:ui,useCallback:Bg,useContext:ui,useEffect:zf,useImperativeHandle:kg,useInsertionEffect:Ug,useLayoutEffect:Fg,useMemo:zg,useReducer:Bf,useRef:Dg,useState:function(){return Bf(Po)},useDebugValue:Hf,useDeferredValue:function(i){var a=ci();return un===null?a.memoizedState=i:Hg(a,un.memoizedState,i)},useTransition:function(){var i=Bf(Po)[0],a=ci().memoizedState;return[i,a]},useMutableSource:wg,useSyncExternalStore:bg,useId:Vg,unstable_isNewReconciler:!1};function Ei(i,a){if(i&&i.defaultProps){a=se({},a),i=i.defaultProps;for(var u in i)a[u]===void 0&&(a[u]=i[u]);return a}return a}function Vf(i,a,u,h){a=i.memoizedState,u=u(h,a),u=u==null?a:se({},a,u),i.memoizedState=u,i.lanes===0&&(i.updateQueue.baseState=u)}var cu={isMounted:function(i){return(i=i._reactInternals)?er(i)===i:!1},enqueueSetState:function(i,a,u){i=i._reactInternals;var h=Fn(),g=jr(i),x=ar(h,g);x.payload=a,u!=null&&(x.callback=u),a=Hr(i,x,g),a!==null&&(wi(a,i,g,h),nu(a,i,g))},enqueueReplaceState:function(i,a,u){i=i._reactInternals;var h=Fn(),g=jr(i),x=ar(h,g);x.tag=1,x.payload=a,u!=null&&(x.callback=u),a=Hr(i,x,g),a!==null&&(wi(a,i,g,h),nu(a,i,g))},enqueueForceUpdate:function(i,a){i=i._reactInternals;var u=Fn(),h=jr(i),g=ar(u,h);g.tag=2,a!=null&&(g.callback=a),a=Hr(i,g,h),a!==null&&(wi(a,i,h,u),nu(a,i,h))}};function Xg(i,a,u,h,g,x,T){return i=i.stateNode,typeof i.shouldComponentUpdate=="function"?i.shouldComponentUpdate(h,x,T):a.prototype&&a.prototype.isPureReactComponent?!vo(u,h)||!vo(g,x):!0}function Yg(i,a,u){var h=!1,g=kr,x=a.contextType;return typeof x=="object"&&x!==null?x=ui(x):(g=Wn(a)?ms:bn.current,h=a.contextTypes,x=(h=h!=null)?na(i,g):kr),a=new a(u,x),i.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=cu,i.stateNode=a,a._reactInternals=i,h&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=g,i.__reactInternalMemoizedMaskedChildContext=x),a}function $g(i,a,u,h){i=a.state,typeof a.componentWillReceiveProps=="function"&&a.componentWillReceiveProps(u,h),typeof a.UNSAFE_componentWillReceiveProps=="function"&&a.UNSAFE_componentWillReceiveProps(u,h),a.state!==i&&cu.enqueueReplaceState(a,a.state,null)}function Gf(i,a,u,h){var g=i.stateNode;g.props=u,g.state=i.memoizedState,g.refs={},Cf(i);var x=a.contextType;typeof x=="object"&&x!==null?g.context=ui(x):(x=Wn(a)?ms:bn.current,g.context=na(i,x)),g.state=i.memoizedState,x=a.getDerivedStateFromProps,typeof x=="function"&&(Vf(i,a,x,u),g.state=i.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof g.getSnapshotBeforeUpdate=="function"||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(a=g.state,typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount(),a!==g.state&&cu.enqueueReplaceState(g,g.state,null),iu(i,u,g,h),g.state=i.memoizedState),typeof g.componentDidMount=="function"&&(i.flags|=4194308)}function ca(i,a){try{var u="",h=a;do u+=Ge(h),h=h.return;while(h);var g=u}catch(x){g=`
Error generating stack: `+x.message+`
`+x.stack}return{value:i,source:a,stack:g,digest:null}}function Wf(i,a,u){return{value:i,source:null,stack:u??null,digest:a??null}}function jf(i,a){try{console.error(a.value)}catch(u){setTimeout(function(){throw u})}}var CE=typeof WeakMap=="function"?WeakMap:Map;function Kg(i,a,u){u=ar(-1,u),u.tag=3,u.payload={element:null};var h=a.value;return u.callback=function(){vu||(vu=!0,ad=h),jf(i,a)},u}function qg(i,a,u){u=ar(-1,u),u.tag=3;var h=i.type.getDerivedStateFromError;if(typeof h=="function"){var g=a.value;u.payload=function(){return h(g)},u.callback=function(){jf(i,a)}}var x=i.stateNode;return x!==null&&typeof x.componentDidCatch=="function"&&(u.callback=function(){jf(i,a),typeof h!="function"&&(Gr===null?Gr=new Set([this]):Gr.add(this));var T=a.stack;this.componentDidCatch(a.value,{componentStack:T!==null?T:""})}),u}function Zg(i,a,u){var h=i.pingCache;if(h===null){h=i.pingCache=new CE;var g=new Set;h.set(a,g)}else g=h.get(a),g===void 0&&(g=new Set,h.set(a,g));g.has(u)||(g.add(u),i=GE.bind(null,i,a,u),a.then(i,i))}function Jg(i){do{var a;if((a=i.tag===13)&&(a=i.memoizedState,a=a!==null?a.dehydrated!==null:!0),a)return i;i=i.return}while(i!==null);return null}function Qg(i,a,u,h,g){return(i.mode&1)===0?(i===a?i.flags|=65536:(i.flags|=128,u.flags|=131072,u.flags&=-52805,u.tag===1&&(u.alternate===null?u.tag=17:(a=ar(-1,1),a.tag=2,Hr(u,a,1))),u.lanes|=1),i):(i.flags|=65536,i.lanes=g,i)}var PE=b.ReactCurrentOwner,jn=!1;function Un(i,a,u,h){a.child=i===null?yg(a,null,u,h):aa(a,i.child,u,h)}function ev(i,a,u,h,g){u=u.render;var x=a.ref;return la(a,g),h=Ff(i,a,u,h,x,g),u=Of(),i!==null&&!jn?(a.updateQueue=i.updateQueue,a.flags&=-2053,i.lanes&=~g,or(i,a,g)):(qt&&u&&yf(a),a.flags|=1,Un(i,a,h,g),a.child)}function tv(i,a,u,h,g){if(i===null){var x=u.type;return typeof x=="function"&&!hd(x)&&x.defaultProps===void 0&&u.compare===null&&u.defaultProps===void 0?(a.tag=15,a.type=x,nv(i,a,x,h,g)):(i=Mu(u.type,null,h,a,a.mode,g),i.ref=a.ref,i.return=a,a.child=i)}if(x=i.child,(i.lanes&g)===0){var T=x.memoizedProps;if(u=u.compare,u=u!==null?u:vo,u(T,h)&&i.ref===a.ref)return or(i,a,g)}return a.flags|=1,i=Yr(x,h),i.ref=a.ref,i.return=a,a.child=i}function nv(i,a,u,h,g){if(i!==null){var x=i.memoizedProps;if(vo(x,h)&&i.ref===a.ref)if(jn=!1,a.pendingProps=h=x,(i.lanes&g)!==0)(i.flags&131072)!==0&&(jn=!0);else return a.lanes=i.lanes,or(i,a,g)}return Xf(i,a,u,h,g)}function iv(i,a,u){var h=a.pendingProps,g=h.children,x=i!==null?i.memoizedState:null;if(h.mode==="hidden")if((a.mode&1)===0)a.memoizedState={baseLanes:0,cachePool:null,transitions:null},Wt(da,ti),ti|=u;else{if((u&1073741824)===0)return i=x!==null?x.baseLanes|u:u,a.lanes=a.childLanes=1073741824,a.memoizedState={baseLanes:i,cachePool:null,transitions:null},a.updateQueue=null,Wt(da,ti),ti|=i,null;a.memoizedState={baseLanes:0,cachePool:null,transitions:null},h=x!==null?x.baseLanes:u,Wt(da,ti),ti|=h}else x!==null?(h=x.baseLanes|u,a.memoizedState=null):h=u,Wt(da,ti),ti|=h;return Un(i,a,g,u),a.child}function rv(i,a){var u=a.ref;(i===null&&u!==null||i!==null&&i.ref!==u)&&(a.flags|=512,a.flags|=2097152)}function Xf(i,a,u,h,g){var x=Wn(u)?ms:bn.current;return x=na(a,x),la(a,g),u=Ff(i,a,u,h,x,g),h=Of(),i!==null&&!jn?(a.updateQueue=i.updateQueue,a.flags&=-2053,i.lanes&=~g,or(i,a,g)):(qt&&h&&yf(a),a.flags|=1,Un(i,a,u,g),a.child)}function sv(i,a,u,h,g){if(Wn(u)){var x=!0;$l(a)}else x=!1;if(la(a,g),a.stateNode===null)du(i,a),Yg(a,u,h),Gf(a,u,h,g),h=!0;else if(i===null){var T=a.stateNode,N=a.memoizedProps;T.props=N;var B=T.context,Z=u.contextType;typeof Z=="object"&&Z!==null?Z=ui(Z):(Z=Wn(u)?ms:bn.current,Z=na(a,Z));var ve=u.getDerivedStateFromProps,_e=typeof ve=="function"||typeof T.getSnapshotBeforeUpdate=="function";_e||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(N!==h||B!==Z)&&$g(a,T,h,Z),zr=!1;var me=a.memoizedState;T.state=me,iu(a,h,T,g),B=a.memoizedState,N!==h||me!==B||Gn.current||zr?(typeof ve=="function"&&(Vf(a,u,ve,h),B=a.memoizedState),(N=zr||Xg(a,u,N,h,me,B,Z))?(_e||typeof T.UNSAFE_componentWillMount!="function"&&typeof T.componentWillMount!="function"||(typeof T.componentWillMount=="function"&&T.componentWillMount(),typeof T.UNSAFE_componentWillMount=="function"&&T.UNSAFE_componentWillMount()),typeof T.componentDidMount=="function"&&(a.flags|=4194308)):(typeof T.componentDidMount=="function"&&(a.flags|=4194308),a.memoizedProps=h,a.memoizedState=B),T.props=h,T.state=B,T.context=Z,h=N):(typeof T.componentDidMount=="function"&&(a.flags|=4194308),h=!1)}else{T=a.stateNode,Sg(i,a),N=a.memoizedProps,Z=a.type===a.elementType?N:Ei(a.type,N),T.props=Z,_e=a.pendingProps,me=T.context,B=u.contextType,typeof B=="object"&&B!==null?B=ui(B):(B=Wn(u)?ms:bn.current,B=na(a,B));var Fe=u.getDerivedStateFromProps;(ve=typeof Fe=="function"||typeof T.getSnapshotBeforeUpdate=="function")||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(N!==_e||me!==B)&&$g(a,T,h,B),zr=!1,me=a.memoizedState,T.state=me,iu(a,h,T,g);var Ve=a.memoizedState;N!==_e||me!==Ve||Gn.current||zr?(typeof Fe=="function"&&(Vf(a,u,Fe,h),Ve=a.memoizedState),(Z=zr||Xg(a,u,Z,h,me,Ve,B)||!1)?(ve||typeof T.UNSAFE_componentWillUpdate!="function"&&typeof T.componentWillUpdate!="function"||(typeof T.componentWillUpdate=="function"&&T.componentWillUpdate(h,Ve,B),typeof T.UNSAFE_componentWillUpdate=="function"&&T.UNSAFE_componentWillUpdate(h,Ve,B)),typeof T.componentDidUpdate=="function"&&(a.flags|=4),typeof T.getSnapshotBeforeUpdate=="function"&&(a.flags|=1024)):(typeof T.componentDidUpdate!="function"||N===i.memoizedProps&&me===i.memoizedState||(a.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||N===i.memoizedProps&&me===i.memoizedState||(a.flags|=1024),a.memoizedProps=h,a.memoizedState=Ve),T.props=h,T.state=Ve,T.context=B,h=Z):(typeof T.componentDidUpdate!="function"||N===i.memoizedProps&&me===i.memoizedState||(a.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||N===i.memoizedProps&&me===i.memoizedState||(a.flags|=1024),h=!1)}return Yf(i,a,u,h,x,g)}function Yf(i,a,u,h,g,x){rv(i,a);var T=(a.flags&128)!==0;if(!h&&!T)return g&&cg(a,u,!1),or(i,a,x);h=a.stateNode,PE.current=a;var N=T&&typeof u.getDerivedStateFromError!="function"?null:h.render();return a.flags|=1,i!==null&&T?(a.child=aa(a,i.child,null,x),a.child=aa(a,null,N,x)):Un(i,a,N,x),a.memoizedState=h.state,g&&cg(a,u,!0),a.child}function av(i){var a=i.stateNode;a.pendingContext?lg(i,a.pendingContext,a.pendingContext!==a.context):a.context&&lg(i,a.context,!1),Pf(i,a.containerInfo)}function ov(i,a,u,h,g){return sa(),Mf(g),a.flags|=256,Un(i,a,u,h),a.child}var $f={dehydrated:null,treeContext:null,retryLane:0};function Kf(i){return{baseLanes:i,cachePool:null,transitions:null}}function lv(i,a,u){var h=a.pendingProps,g=Zt.current,x=!1,T=(a.flags&128)!==0,N;if((N=T)||(N=i!==null&&i.memoizedState===null?!1:(g&2)!==0),N?(x=!0,a.flags&=-129):(i===null||i.memoizedState!==null)&&(g|=1),Wt(Zt,g&1),i===null)return Ef(a),i=a.memoizedState,i!==null&&(i=i.dehydrated,i!==null)?((a.mode&1)===0?a.lanes=1:i.data==="$!"?a.lanes=8:a.lanes=1073741824,null):(T=h.children,i=h.fallback,x?(h=a.mode,x=a.child,T={mode:"hidden",children:T},(h&1)===0&&x!==null?(x.childLanes=0,x.pendingProps=T):x=Tu(T,h,0,null),i=ws(i,h,u,null),x.return=a,i.return=a,x.sibling=i,a.child=x,a.child.memoizedState=Kf(u),a.memoizedState=$f,i):qf(a,T));if(g=i.memoizedState,g!==null&&(N=g.dehydrated,N!==null))return LE(i,a,T,h,N,g,u);if(x){x=h.fallback,T=a.mode,g=i.child,N=g.sibling;var B={mode:"hidden",children:h.children};return(T&1)===0&&a.child!==g?(h=a.child,h.childLanes=0,h.pendingProps=B,a.deletions=null):(h=Yr(g,B),h.subtreeFlags=g.subtreeFlags&14680064),N!==null?x=Yr(N,x):(x=ws(x,T,u,null),x.flags|=2),x.return=a,h.return=a,h.sibling=x,a.child=h,h=x,x=a.child,T=i.child.memoizedState,T=T===null?Kf(u):{baseLanes:T.baseLanes|u,cachePool:null,transitions:T.transitions},x.memoizedState=T,x.childLanes=i.childLanes&~u,a.memoizedState=$f,h}return x=i.child,i=x.sibling,h=Yr(x,{mode:"visible",children:h.children}),(a.mode&1)===0&&(h.lanes=u),h.return=a,h.sibling=null,i!==null&&(u=a.deletions,u===null?(a.deletions=[i],a.flags|=16):u.push(i)),a.child=h,a.memoizedState=null,h}function qf(i,a){return a=Tu({mode:"visible",children:a},i.mode,0,null),a.return=i,i.child=a}function fu(i,a,u,h){return h!==null&&Mf(h),aa(a,i.child,null,u),i=qf(a,a.pendingProps.children),i.flags|=2,a.memoizedState=null,i}function LE(i,a,u,h,g,x,T){if(u)return a.flags&256?(a.flags&=-257,h=Wf(Error(t(422))),fu(i,a,T,h)):a.memoizedState!==null?(a.child=i.child,a.flags|=128,null):(x=h.fallback,g=a.mode,h=Tu({mode:"visible",children:h.children},g,0,null),x=ws(x,g,T,null),x.flags|=2,h.return=a,x.return=a,h.sibling=x,a.child=h,(a.mode&1)!==0&&aa(a,i.child,null,T),a.child.memoizedState=Kf(T),a.memoizedState=$f,x);if((a.mode&1)===0)return fu(i,a,T,null);if(g.data==="$!"){if(h=g.nextSibling&&g.nextSibling.dataset,h)var N=h.dgst;return h=N,x=Error(t(419)),h=Wf(x,h,void 0),fu(i,a,T,h)}if(N=(T&i.childLanes)!==0,jn||N){if(h=mn,h!==null){switch(T&-T){case 4:g=2;break;case 16:g=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:g=32;break;case 536870912:g=268435456;break;default:g=0}g=(g&(h.suspendedLanes|T))!==0?0:g,g!==0&&g!==x.retryLane&&(x.retryLane=g,sr(i,g),wi(h,i,g,-1))}return dd(),h=Wf(Error(t(421))),fu(i,a,T,h)}return g.data==="$?"?(a.flags|=128,a.child=i.child,a=WE.bind(null,i),g._reactRetry=a,null):(i=x.treeContext,ei=Fr(g.nextSibling),Qn=a,qt=!0,Si=null,i!==null&&(oi[li++]=ir,oi[li++]=rr,oi[li++]=gs,ir=i.id,rr=i.overflow,gs=a),a=qf(a,h.children),a.flags|=4096,a)}function uv(i,a,u){i.lanes|=a;var h=i.alternate;h!==null&&(h.lanes|=a),Af(i.return,a,u)}function Zf(i,a,u,h,g){var x=i.memoizedState;x===null?i.memoizedState={isBackwards:a,rendering:null,renderingStartTime:0,last:h,tail:u,tailMode:g}:(x.isBackwards=a,x.rendering=null,x.renderingStartTime=0,x.last=h,x.tail=u,x.tailMode=g)}function cv(i,a,u){var h=a.pendingProps,g=h.revealOrder,x=h.tail;if(Un(i,a,h.children,u),h=Zt.current,(h&2)!==0)h=h&1|2,a.flags|=128;else{if(i!==null&&(i.flags&128)!==0)e:for(i=a.child;i!==null;){if(i.tag===13)i.memoizedState!==null&&uv(i,u,a);else if(i.tag===19)uv(i,u,a);else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===a)break e;for(;i.sibling===null;){if(i.return===null||i.return===a)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}h&=1}if(Wt(Zt,h),(a.mode&1)===0)a.memoizedState=null;else switch(g){case"forwards":for(u=a.child,g=null;u!==null;)i=u.alternate,i!==null&&ru(i)===null&&(g=u),u=u.sibling;u=g,u===null?(g=a.child,a.child=null):(g=u.sibling,u.sibling=null),Zf(a,!1,g,u,x);break;case"backwards":for(u=null,g=a.child,a.child=null;g!==null;){if(i=g.alternate,i!==null&&ru(i)===null){a.child=g;break}i=g.sibling,g.sibling=u,u=g,g=i}Zf(a,!0,u,null,x);break;case"together":Zf(a,!1,null,null,void 0);break;default:a.memoizedState=null}return a.child}function du(i,a){(a.mode&1)===0&&i!==null&&(i.alternate=null,a.alternate=null,a.flags|=2)}function or(i,a,u){if(i!==null&&(a.dependencies=i.dependencies),Ss|=a.lanes,(u&a.childLanes)===0)return null;if(i!==null&&a.child!==i.child)throw Error(t(153));if(a.child!==null){for(i=a.child,u=Yr(i,i.pendingProps),a.child=u,u.return=a;i.sibling!==null;)i=i.sibling,u=u.sibling=Yr(i,i.pendingProps),u.return=a;u.sibling=null}return a.child}function IE(i,a,u){switch(a.tag){case 3:av(a),sa();break;case 5:Tg(a);break;case 1:Wn(a.type)&&$l(a);break;case 4:Pf(a,a.stateNode.containerInfo);break;case 10:var h=a.type._context,g=a.memoizedProps.value;Wt(eu,h._currentValue),h._currentValue=g;break;case 13:if(h=a.memoizedState,h!==null)return h.dehydrated!==null?(Wt(Zt,Zt.current&1),a.flags|=128,null):(u&a.child.childLanes)!==0?lv(i,a,u):(Wt(Zt,Zt.current&1),i=or(i,a,u),i!==null?i.sibling:null);Wt(Zt,Zt.current&1);break;case 19:if(h=(u&a.childLanes)!==0,(i.flags&128)!==0){if(h)return cv(i,a,u);a.flags|=128}if(g=a.memoizedState,g!==null&&(g.rendering=null,g.tail=null,g.lastEffect=null),Wt(Zt,Zt.current),h)break;return null;case 22:case 23:return a.lanes=0,iv(i,a,u)}return or(i,a,u)}var fv,Jf,dv,hv;fv=function(i,a){for(var u=a.child;u!==null;){if(u.tag===5||u.tag===6)i.appendChild(u.stateNode);else if(u.tag!==4&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===a)break;for(;u.sibling===null;){if(u.return===null||u.return===a)return;u=u.return}u.sibling.return=u.return,u=u.sibling}},Jf=function(){},dv=function(i,a,u,h){var g=i.memoizedProps;if(g!==h){i=a.stateNode,ys(ki.current);var x=null;switch(u){case"input":g=Ot(i,g),h=Ot(i,h),x=[];break;case"select":g=se({},g,{value:void 0}),h=se({},h,{value:void 0}),x=[];break;case"textarea":g=Xt(i,g),h=Xt(i,h),x=[];break;default:typeof g.onClick!="function"&&typeof h.onClick=="function"&&(i.onclick=jl)}Ke(u,h);var T;u=null;for(Z in g)if(!h.hasOwnProperty(Z)&&g.hasOwnProperty(Z)&&g[Z]!=null)if(Z==="style"){var N=g[Z];for(T in N)N.hasOwnProperty(T)&&(u||(u={}),u[T]="")}else Z!=="dangerouslySetInnerHTML"&&Z!=="children"&&Z!=="suppressContentEditableWarning"&&Z!=="suppressHydrationWarning"&&Z!=="autoFocus"&&(s.hasOwnProperty(Z)?x||(x=[]):(x=x||[]).push(Z,null));for(Z in h){var B=h[Z];if(N=g?.[Z],h.hasOwnProperty(Z)&&B!==N&&(B!=null||N!=null))if(Z==="style")if(N){for(T in N)!N.hasOwnProperty(T)||B&&B.hasOwnProperty(T)||(u||(u={}),u[T]="");for(T in B)B.hasOwnProperty(T)&&N[T]!==B[T]&&(u||(u={}),u[T]=B[T])}else u||(x||(x=[]),x.push(Z,u)),u=B;else Z==="dangerouslySetInnerHTML"?(B=B?B.__html:void 0,N=N?N.__html:void 0,B!=null&&N!==B&&(x=x||[]).push(Z,B)):Z==="children"?typeof B!="string"&&typeof B!="number"||(x=x||[]).push(Z,""+B):Z!=="suppressContentEditableWarning"&&Z!=="suppressHydrationWarning"&&(s.hasOwnProperty(Z)?(B!=null&&Z==="onScroll"&&Yt("scroll",i),x||N===B||(x=[])):(x=x||[]).push(Z,B))}u&&(x=x||[]).push("style",u);var Z=x;(a.updateQueue=Z)&&(a.flags|=4)}},hv=function(i,a,u,h){u!==h&&(a.flags|=4)};function Io(i,a){if(!qt)switch(i.tailMode){case"hidden":a=i.tail;for(var u=null;a!==null;)a.alternate!==null&&(u=a),a=a.sibling;u===null?i.tail=null:u.sibling=null;break;case"collapsed":u=i.tail;for(var h=null;u!==null;)u.alternate!==null&&(h=u),u=u.sibling;h===null?a||i.tail===null?i.tail=null:i.tail.sibling=null:h.sibling=null}}function Rn(i){var a=i.alternate!==null&&i.alternate.child===i.child,u=0,h=0;if(a)for(var g=i.child;g!==null;)u|=g.lanes|g.childLanes,h|=g.subtreeFlags&14680064,h|=g.flags&14680064,g.return=i,g=g.sibling;else for(g=i.child;g!==null;)u|=g.lanes|g.childLanes,h|=g.subtreeFlags,h|=g.flags,g.return=i,g=g.sibling;return i.subtreeFlags|=h,i.childLanes=u,a}function DE(i,a,u){var h=a.pendingProps;switch(xf(a),a.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Rn(a),null;case 1:return Wn(a.type)&&Yl(),Rn(a),null;case 3:return h=a.stateNode,ua(),$t(Gn),$t(bn),Df(),h.pendingContext&&(h.context=h.pendingContext,h.pendingContext=null),(i===null||i.child===null)&&(Jl(a)?a.flags|=4:i===null||i.memoizedState.isDehydrated&&(a.flags&256)===0||(a.flags|=1024,Si!==null&&(ud(Si),Si=null))),Jf(i,a),Rn(a),null;case 5:Lf(a);var g=ys(Ao.current);if(u=a.type,i!==null&&a.stateNode!=null)dv(i,a,u,h,g),i.ref!==a.ref&&(a.flags|=512,a.flags|=2097152);else{if(!h){if(a.stateNode===null)throw Error(t(166));return Rn(a),null}if(i=ys(ki.current),Jl(a)){h=a.stateNode,u=a.type;var x=a.memoizedProps;switch(h[Oi]=a,h[Eo]=x,i=(a.mode&1)!==0,u){case"dialog":Yt("cancel",h),Yt("close",h);break;case"iframe":case"object":case"embed":Yt("load",h);break;case"video":case"audio":for(g=0;g<yo.length;g++)Yt(yo[g],h);break;case"source":Yt("error",h);break;case"img":case"image":case"link":Yt("error",h),Yt("load",h);break;case"details":Yt("toggle",h);break;case"input":ht(h,x),Yt("invalid",h);break;case"select":h._wrapperState={wasMultiple:!!x.multiple},Yt("invalid",h);break;case"textarea":D(h,x),Yt("invalid",h)}Ke(u,x),g=null;for(var T in x)if(x.hasOwnProperty(T)){var N=x[T];T==="children"?typeof N=="string"?h.textContent!==N&&(x.suppressHydrationWarning!==!0&&Wl(h.textContent,N,i),g=["children",N]):typeof N=="number"&&h.textContent!==""+N&&(x.suppressHydrationWarning!==!0&&Wl(h.textContent,N,i),g=["children",""+N]):s.hasOwnProperty(T)&&N!=null&&T==="onScroll"&&Yt("scroll",h)}switch(u){case"input":xt(h),Ht(h,x,!0);break;case"textarea":xt(h),K(h);break;case"select":case"option":break;default:typeof x.onClick=="function"&&(h.onclick=jl)}h=g,a.updateQueue=h,h!==null&&(a.flags|=4)}else{T=g.nodeType===9?g:g.ownerDocument,i==="http://www.w3.org/1999/xhtml"&&(i=de(u)),i==="http://www.w3.org/1999/xhtml"?u==="script"?(i=T.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild)):typeof h.is=="string"?i=T.createElement(u,{is:h.is}):(i=T.createElement(u),u==="select"&&(T=i,h.multiple?T.multiple=!0:h.size&&(T.size=h.size))):i=T.createElementNS(i,u),i[Oi]=a,i[Eo]=h,fv(i,a,!1,!1),a.stateNode=i;e:{switch(T=Ce(u,h),u){case"dialog":Yt("cancel",i),Yt("close",i),g=h;break;case"iframe":case"object":case"embed":Yt("load",i),g=h;break;case"video":case"audio":for(g=0;g<yo.length;g++)Yt(yo[g],i);g=h;break;case"source":Yt("error",i),g=h;break;case"img":case"image":case"link":Yt("error",i),Yt("load",i),g=h;break;case"details":Yt("toggle",i),g=h;break;case"input":ht(i,h),g=Ot(i,h),Yt("invalid",i);break;case"option":g=h;break;case"select":i._wrapperState={wasMultiple:!!h.multiple},g=se({},h,{value:void 0}),Yt("invalid",i);break;case"textarea":D(i,h),g=Xt(i,h),Yt("invalid",i);break;default:g=h}Ke(u,g),N=g;for(x in N)if(N.hasOwnProperty(x)){var B=N[x];x==="style"?Ie(i,B):x==="dangerouslySetInnerHTML"?(B=B?B.__html:void 0,B!=null&&Ze(i,B)):x==="children"?typeof B=="string"?(u!=="textarea"||B!=="")&&be(i,B):typeof B=="number"&&be(i,""+B):x!=="suppressContentEditableWarning"&&x!=="suppressHydrationWarning"&&x!=="autoFocus"&&(s.hasOwnProperty(x)?B!=null&&x==="onScroll"&&Yt("scroll",i):B!=null&&C(i,x,B,T))}switch(u){case"input":xt(i),Ht(i,h,!1);break;case"textarea":xt(i),K(i);break;case"option":h.value!=null&&i.setAttribute("value",""+Ee(h.value));break;case"select":i.multiple=!!h.multiple,x=h.value,x!=null?jt(i,!!h.multiple,x,!1):h.defaultValue!=null&&jt(i,!!h.multiple,h.defaultValue,!0);break;default:typeof g.onClick=="function"&&(i.onclick=jl)}switch(u){case"button":case"input":case"select":case"textarea":h=!!h.autoFocus;break e;case"img":h=!0;break e;default:h=!1}}h&&(a.flags|=4)}a.ref!==null&&(a.flags|=512,a.flags|=2097152)}return Rn(a),null;case 6:if(i&&a.stateNode!=null)hv(i,a,i.memoizedProps,h);else{if(typeof h!="string"&&a.stateNode===null)throw Error(t(166));if(u=ys(Ao.current),ys(ki.current),Jl(a)){if(h=a.stateNode,u=a.memoizedProps,h[Oi]=a,(x=h.nodeValue!==u)&&(i=Qn,i!==null))switch(i.tag){case 3:Wl(h.nodeValue,u,(i.mode&1)!==0);break;case 5:i.memoizedProps.suppressHydrationWarning!==!0&&Wl(h.nodeValue,u,(i.mode&1)!==0)}x&&(a.flags|=4)}else h=(u.nodeType===9?u:u.ownerDocument).createTextNode(h),h[Oi]=a,a.stateNode=h}return Rn(a),null;case 13:if($t(Zt),h=a.memoizedState,i===null||i.memoizedState!==null&&i.memoizedState.dehydrated!==null){if(qt&&ei!==null&&(a.mode&1)!==0&&(a.flags&128)===0)gg(),sa(),a.flags|=98560,x=!1;else if(x=Jl(a),h!==null&&h.dehydrated!==null){if(i===null){if(!x)throw Error(t(318));if(x=a.memoizedState,x=x!==null?x.dehydrated:null,!x)throw Error(t(317));x[Oi]=a}else sa(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;Rn(a),x=!1}else Si!==null&&(ud(Si),Si=null),x=!0;if(!x)return a.flags&65536?a:null}return(a.flags&128)!==0?(a.lanes=u,a):(h=h!==null,h!==(i!==null&&i.memoizedState!==null)&&h&&(a.child.flags|=8192,(a.mode&1)!==0&&(i===null||(Zt.current&1)!==0?cn===0&&(cn=3):dd())),a.updateQueue!==null&&(a.flags|=4),Rn(a),null);case 4:return ua(),Jf(i,a),i===null&&xo(a.stateNode.containerInfo),Rn(a),null;case 10:return bf(a.type._context),Rn(a),null;case 17:return Wn(a.type)&&Yl(),Rn(a),null;case 19:if($t(Zt),x=a.memoizedState,x===null)return Rn(a),null;if(h=(a.flags&128)!==0,T=x.rendering,T===null)if(h)Io(x,!1);else{if(cn!==0||i!==null&&(i.flags&128)!==0)for(i=a.child;i!==null;){if(T=ru(i),T!==null){for(a.flags|=128,Io(x,!1),h=T.updateQueue,h!==null&&(a.updateQueue=h,a.flags|=4),a.subtreeFlags=0,h=u,u=a.child;u!==null;)x=u,i=h,x.flags&=14680066,T=x.alternate,T===null?(x.childLanes=0,x.lanes=i,x.child=null,x.subtreeFlags=0,x.memoizedProps=null,x.memoizedState=null,x.updateQueue=null,x.dependencies=null,x.stateNode=null):(x.childLanes=T.childLanes,x.lanes=T.lanes,x.child=T.child,x.subtreeFlags=0,x.deletions=null,x.memoizedProps=T.memoizedProps,x.memoizedState=T.memoizedState,x.updateQueue=T.updateQueue,x.type=T.type,i=T.dependencies,x.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),u=u.sibling;return Wt(Zt,Zt.current&1|2),a.child}i=i.sibling}x.tail!==null&&W()>ha&&(a.flags|=128,h=!0,Io(x,!1),a.lanes=4194304)}else{if(!h)if(i=ru(T),i!==null){if(a.flags|=128,h=!0,u=i.updateQueue,u!==null&&(a.updateQueue=u,a.flags|=4),Io(x,!0),x.tail===null&&x.tailMode==="hidden"&&!T.alternate&&!qt)return Rn(a),null}else 2*W()-x.renderingStartTime>ha&&u!==1073741824&&(a.flags|=128,h=!0,Io(x,!1),a.lanes=4194304);x.isBackwards?(T.sibling=a.child,a.child=T):(u=x.last,u!==null?u.sibling=T:a.child=T,x.last=T)}return x.tail!==null?(a=x.tail,x.rendering=a,x.tail=a.sibling,x.renderingStartTime=W(),a.sibling=null,u=Zt.current,Wt(Zt,h?u&1|2:u&1),a):(Rn(a),null);case 22:case 23:return fd(),h=a.memoizedState!==null,i!==null&&i.memoizedState!==null!==h&&(a.flags|=8192),h&&(a.mode&1)!==0?(ti&1073741824)!==0&&(Rn(a),a.subtreeFlags&6&&(a.flags|=8192)):Rn(a),null;case 24:return null;case 25:return null}throw Error(t(156,a.tag))}function NE(i,a){switch(xf(a),a.tag){case 1:return Wn(a.type)&&Yl(),i=a.flags,i&65536?(a.flags=i&-65537|128,a):null;case 3:return ua(),$t(Gn),$t(bn),Df(),i=a.flags,(i&65536)!==0&&(i&128)===0?(a.flags=i&-65537|128,a):null;case 5:return Lf(a),null;case 13:if($t(Zt),i=a.memoizedState,i!==null&&i.dehydrated!==null){if(a.alternate===null)throw Error(t(340));sa()}return i=a.flags,i&65536?(a.flags=i&-65537|128,a):null;case 19:return $t(Zt),null;case 4:return ua(),null;case 10:return bf(a.type._context),null;case 22:case 23:return fd(),null;case 24:return null;default:return null}}var hu=!1,Cn=!1,UE=typeof WeakSet=="function"?WeakSet:Set,Be=null;function fa(i,a){var u=i.ref;if(u!==null)if(typeof u=="function")try{u(null)}catch(h){tn(i,a,h)}else u.current=null}function Qf(i,a,u){try{u()}catch(h){tn(i,a,h)}}var pv=!1;function FE(i,a){if(ff=Dl,i=Xm(),nf(i)){if("selectionStart"in i)var u={start:i.selectionStart,end:i.selectionEnd};else e:{u=(u=i.ownerDocument)&&u.defaultView||window;var h=u.getSelection&&u.getSelection();if(h&&h.rangeCount!==0){u=h.anchorNode;var g=h.anchorOffset,x=h.focusNode;h=h.focusOffset;try{u.nodeType,x.nodeType}catch{u=null;break e}var T=0,N=-1,B=-1,Z=0,ve=0,_e=i,me=null;t:for(;;){for(var Fe;_e!==u||g!==0&&_e.nodeType!==3||(N=T+g),_e!==x||h!==0&&_e.nodeType!==3||(B=T+h),_e.nodeType===3&&(T+=_e.nodeValue.length),(Fe=_e.firstChild)!==null;)me=_e,_e=Fe;for(;;){if(_e===i)break t;if(me===u&&++Z===g&&(N=T),me===x&&++ve===h&&(B=T),(Fe=_e.nextSibling)!==null)break;_e=me,me=_e.parentNode}_e=Fe}u=N===-1||B===-1?null:{start:N,end:B}}else u=null}u=u||{start:0,end:0}}else u=null;for(df={focusedElem:i,selectionRange:u},Dl=!1,Be=a;Be!==null;)if(a=Be,i=a.child,(a.subtreeFlags&1028)!==0&&i!==null)i.return=a,Be=i;else for(;Be!==null;){a=Be;try{var Ve=a.alternate;if((a.flags&1024)!==0)switch(a.tag){case 0:case 11:case 15:break;case 1:if(Ve!==null){var $e=Ve.memoizedProps,rn=Ve.memoizedState,$=a.stateNode,G=$.getSnapshotBeforeUpdate(a.elementType===a.type?$e:Ei(a.type,$e),rn);$.__reactInternalSnapshotBeforeUpdate=G}break;case 3:var q=a.stateNode.containerInfo;q.nodeType===1?q.textContent="":q.nodeType===9&&q.documentElement&&q.removeChild(q.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(we){tn(a,a.return,we)}if(i=a.sibling,i!==null){i.return=a.return,Be=i;break}Be=a.return}return Ve=pv,pv=!1,Ve}function Do(i,a,u){var h=a.updateQueue;if(h=h!==null?h.lastEffect:null,h!==null){var g=h=h.next;do{if((g.tag&i)===i){var x=g.destroy;g.destroy=void 0,x!==void 0&&Qf(a,u,x)}g=g.next}while(g!==h)}}function pu(i,a){if(a=a.updateQueue,a=a!==null?a.lastEffect:null,a!==null){var u=a=a.next;do{if((u.tag&i)===i){var h=u.create;u.destroy=h()}u=u.next}while(u!==a)}}function ed(i){var a=i.ref;if(a!==null){var u=i.stateNode;i.tag,i=u,typeof a=="function"?a(i):a.current=i}}function mv(i){var a=i.alternate;a!==null&&(i.alternate=null,mv(a)),i.child=null,i.deletions=null,i.sibling=null,i.tag===5&&(a=i.stateNode,a!==null&&(delete a[Oi],delete a[Eo],delete a[gf],delete a[_E],delete a[yE])),i.stateNode=null,i.return=null,i.dependencies=null,i.memoizedProps=null,i.memoizedState=null,i.pendingProps=null,i.stateNode=null,i.updateQueue=null}function gv(i){return i.tag===5||i.tag===3||i.tag===4}function vv(i){e:for(;;){for(;i.sibling===null;){if(i.return===null||gv(i.return))return null;i=i.return}for(i.sibling.return=i.return,i=i.sibling;i.tag!==5&&i.tag!==6&&i.tag!==18;){if(i.flags&2||i.child===null||i.tag===4)continue e;i.child.return=i,i=i.child}if(!(i.flags&2))return i.stateNode}}function td(i,a,u){var h=i.tag;if(h===5||h===6)i=i.stateNode,a?u.nodeType===8?u.parentNode.insertBefore(i,a):u.insertBefore(i,a):(u.nodeType===8?(a=u.parentNode,a.insertBefore(i,u)):(a=u,a.appendChild(i)),u=u._reactRootContainer,u!=null||a.onclick!==null||(a.onclick=jl));else if(h!==4&&(i=i.child,i!==null))for(td(i,a,u),i=i.sibling;i!==null;)td(i,a,u),i=i.sibling}function nd(i,a,u){var h=i.tag;if(h===5||h===6)i=i.stateNode,a?u.insertBefore(i,a):u.appendChild(i);else if(h!==4&&(i=i.child,i!==null))for(nd(i,a,u),i=i.sibling;i!==null;)nd(i,a,u),i=i.sibling}var yn=null,Mi=!1;function Vr(i,a,u){for(u=u.child;u!==null;)_v(i,a,u),u=u.sibling}function _v(i,a,u){if(lt&&typeof lt.onCommitFiberUnmount=="function")try{lt.onCommitFiberUnmount(Qe,u)}catch{}switch(u.tag){case 5:Cn||fa(u,a);case 6:var h=yn,g=Mi;yn=null,Vr(i,a,u),yn=h,Mi=g,yn!==null&&(Mi?(i=yn,u=u.stateNode,i.nodeType===8?i.parentNode.removeChild(u):i.removeChild(u)):yn.removeChild(u.stateNode));break;case 18:yn!==null&&(Mi?(i=yn,u=u.stateNode,i.nodeType===8?mf(i.parentNode,u):i.nodeType===1&&mf(i,u),co(i)):mf(yn,u.stateNode));break;case 4:h=yn,g=Mi,yn=u.stateNode.containerInfo,Mi=!0,Vr(i,a,u),yn=h,Mi=g;break;case 0:case 11:case 14:case 15:if(!Cn&&(h=u.updateQueue,h!==null&&(h=h.lastEffect,h!==null))){g=h=h.next;do{var x=g,T=x.destroy;x=x.tag,T!==void 0&&((x&2)!==0||(x&4)!==0)&&Qf(u,a,T),g=g.next}while(g!==h)}Vr(i,a,u);break;case 1:if(!Cn&&(fa(u,a),h=u.stateNode,typeof h.componentWillUnmount=="function"))try{h.props=u.memoizedProps,h.state=u.memoizedState,h.componentWillUnmount()}catch(N){tn(u,a,N)}Vr(i,a,u);break;case 21:Vr(i,a,u);break;case 22:u.mode&1?(Cn=(h=Cn)||u.memoizedState!==null,Vr(i,a,u),Cn=h):Vr(i,a,u);break;default:Vr(i,a,u)}}function yv(i){var a=i.updateQueue;if(a!==null){i.updateQueue=null;var u=i.stateNode;u===null&&(u=i.stateNode=new UE),a.forEach(function(h){var g=jE.bind(null,i,h);u.has(h)||(u.add(h),h.then(g,g))})}}function Ti(i,a){var u=a.deletions;if(u!==null)for(var h=0;h<u.length;h++){var g=u[h];try{var x=i,T=a,N=T;e:for(;N!==null;){switch(N.tag){case 5:yn=N.stateNode,Mi=!1;break e;case 3:yn=N.stateNode.containerInfo,Mi=!0;break e;case 4:yn=N.stateNode.containerInfo,Mi=!0;break e}N=N.return}if(yn===null)throw Error(t(160));_v(x,T,g),yn=null,Mi=!1;var B=g.alternate;B!==null&&(B.return=null),g.return=null}catch(Z){tn(g,a,Z)}}if(a.subtreeFlags&12854)for(a=a.child;a!==null;)xv(a,i),a=a.sibling}function xv(i,a){var u=i.alternate,h=i.flags;switch(i.tag){case 0:case 11:case 14:case 15:if(Ti(a,i),zi(i),h&4){try{Do(3,i,i.return),pu(3,i)}catch($e){tn(i,i.return,$e)}try{Do(5,i,i.return)}catch($e){tn(i,i.return,$e)}}break;case 1:Ti(a,i),zi(i),h&512&&u!==null&&fa(u,u.return);break;case 5:if(Ti(a,i),zi(i),h&512&&u!==null&&fa(u,u.return),i.flags&32){var g=i.stateNode;try{be(g,"")}catch($e){tn(i,i.return,$e)}}if(h&4&&(g=i.stateNode,g!=null)){var x=i.memoizedProps,T=u!==null?u.memoizedProps:x,N=i.type,B=i.updateQueue;if(i.updateQueue=null,B!==null)try{N==="input"&&x.type==="radio"&&x.name!=null&&st(g,x),Ce(N,T);var Z=Ce(N,x);for(T=0;T<B.length;T+=2){var ve=B[T],_e=B[T+1];ve==="style"?Ie(g,_e):ve==="dangerouslySetInnerHTML"?Ze(g,_e):ve==="children"?be(g,_e):C(g,ve,_e,Z)}switch(N){case"input":We(g,x);break;case"textarea":w(g,x);break;case"select":var me=g._wrapperState.wasMultiple;g._wrapperState.wasMultiple=!!x.multiple;var Fe=x.value;Fe!=null?jt(g,!!x.multiple,Fe,!1):me!==!!x.multiple&&(x.defaultValue!=null?jt(g,!!x.multiple,x.defaultValue,!0):jt(g,!!x.multiple,x.multiple?[]:"",!1))}g[Eo]=x}catch($e){tn(i,i.return,$e)}}break;case 6:if(Ti(a,i),zi(i),h&4){if(i.stateNode===null)throw Error(t(162));g=i.stateNode,x=i.memoizedProps;try{g.nodeValue=x}catch($e){tn(i,i.return,$e)}}break;case 3:if(Ti(a,i),zi(i),h&4&&u!==null&&u.memoizedState.isDehydrated)try{co(a.containerInfo)}catch($e){tn(i,i.return,$e)}break;case 4:Ti(a,i),zi(i);break;case 13:Ti(a,i),zi(i),g=i.child,g.flags&8192&&(x=g.memoizedState!==null,g.stateNode.isHidden=x,!x||g.alternate!==null&&g.alternate.memoizedState!==null||(sd=W())),h&4&&yv(i);break;case 22:if(ve=u!==null&&u.memoizedState!==null,i.mode&1?(Cn=(Z=Cn)||ve,Ti(a,i),Cn=Z):Ti(a,i),zi(i),h&8192){if(Z=i.memoizedState!==null,(i.stateNode.isHidden=Z)&&!ve&&(i.mode&1)!==0)for(Be=i,ve=i.child;ve!==null;){for(_e=Be=ve;Be!==null;){switch(me=Be,Fe=me.child,me.tag){case 0:case 11:case 14:case 15:Do(4,me,me.return);break;case 1:fa(me,me.return);var Ve=me.stateNode;if(typeof Ve.componentWillUnmount=="function"){h=me,u=me.return;try{a=h,Ve.props=a.memoizedProps,Ve.state=a.memoizedState,Ve.componentWillUnmount()}catch($e){tn(h,u,$e)}}break;case 5:fa(me,me.return);break;case 22:if(me.memoizedState!==null){Mv(_e);continue}}Fe!==null?(Fe.return=me,Be=Fe):Mv(_e)}ve=ve.sibling}e:for(ve=null,_e=i;;){if(_e.tag===5){if(ve===null){ve=_e;try{g=_e.stateNode,Z?(x=g.style,typeof x.setProperty=="function"?x.setProperty("display","none","important"):x.display="none"):(N=_e.stateNode,B=_e.memoizedProps.style,T=B!=null&&B.hasOwnProperty("display")?B.display:null,N.style.display=Me("display",T))}catch($e){tn(i,i.return,$e)}}}else if(_e.tag===6){if(ve===null)try{_e.stateNode.nodeValue=Z?"":_e.memoizedProps}catch($e){tn(i,i.return,$e)}}else if((_e.tag!==22&&_e.tag!==23||_e.memoizedState===null||_e===i)&&_e.child!==null){_e.child.return=_e,_e=_e.child;continue}if(_e===i)break e;for(;_e.sibling===null;){if(_e.return===null||_e.return===i)break e;ve===_e&&(ve=null),_e=_e.return}ve===_e&&(ve=null),_e.sibling.return=_e.return,_e=_e.sibling}}break;case 19:Ti(a,i),zi(i),h&4&&yv(i);break;case 21:break;default:Ti(a,i),zi(i)}}function zi(i){var a=i.flags;if(a&2){try{e:{for(var u=i.return;u!==null;){if(gv(u)){var h=u;break e}u=u.return}throw Error(t(160))}switch(h.tag){case 5:var g=h.stateNode;h.flags&32&&(be(g,""),h.flags&=-33);var x=vv(i);nd(i,x,g);break;case 3:case 4:var T=h.stateNode.containerInfo,N=vv(i);td(i,N,T);break;default:throw Error(t(161))}}catch(B){tn(i,i.return,B)}i.flags&=-3}a&4096&&(i.flags&=-4097)}function OE(i,a,u){Be=i,Sv(i)}function Sv(i,a,u){for(var h=(i.mode&1)!==0;Be!==null;){var g=Be,x=g.child;if(g.tag===22&&h){var T=g.memoizedState!==null||hu;if(!T){var N=g.alternate,B=N!==null&&N.memoizedState!==null||Cn;N=hu;var Z=Cn;if(hu=T,(Cn=B)&&!Z)for(Be=g;Be!==null;)T=Be,B=T.child,T.tag===22&&T.memoizedState!==null?Tv(g):B!==null?(B.return=T,Be=B):Tv(g);for(;x!==null;)Be=x,Sv(x),x=x.sibling;Be=g,hu=N,Cn=Z}Ev(i)}else(g.subtreeFlags&8772)!==0&&x!==null?(x.return=g,Be=x):Ev(i)}}function Ev(i){for(;Be!==null;){var a=Be;if((a.flags&8772)!==0){var u=a.alternate;try{if((a.flags&8772)!==0)switch(a.tag){case 0:case 11:case 15:Cn||pu(5,a);break;case 1:var h=a.stateNode;if(a.flags&4&&!Cn)if(u===null)h.componentDidMount();else{var g=a.elementType===a.type?u.memoizedProps:Ei(a.type,u.memoizedProps);h.componentDidUpdate(g,u.memoizedState,h.__reactInternalSnapshotBeforeUpdate)}var x=a.updateQueue;x!==null&&Mg(a,x,h);break;case 3:var T=a.updateQueue;if(T!==null){if(u=null,a.child!==null)switch(a.child.tag){case 5:u=a.child.stateNode;break;case 1:u=a.child.stateNode}Mg(a,T,u)}break;case 5:var N=a.stateNode;if(u===null&&a.flags&4){u=N;var B=a.memoizedProps;switch(a.type){case"button":case"input":case"select":case"textarea":B.autoFocus&&u.focus();break;case"img":B.src&&(u.src=B.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(a.memoizedState===null){var Z=a.alternate;if(Z!==null){var ve=Z.memoizedState;if(ve!==null){var _e=ve.dehydrated;_e!==null&&co(_e)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Cn||a.flags&512&&ed(a)}catch(me){tn(a,a.return,me)}}if(a===i){Be=null;break}if(u=a.sibling,u!==null){u.return=a.return,Be=u;break}Be=a.return}}function Mv(i){for(;Be!==null;){var a=Be;if(a===i){Be=null;break}var u=a.sibling;if(u!==null){u.return=a.return,Be=u;break}Be=a.return}}function Tv(i){for(;Be!==null;){var a=Be;try{switch(a.tag){case 0:case 11:case 15:var u=a.return;try{pu(4,a)}catch(B){tn(a,u,B)}break;case 1:var h=a.stateNode;if(typeof h.componentDidMount=="function"){var g=a.return;try{h.componentDidMount()}catch(B){tn(a,g,B)}}var x=a.return;try{ed(a)}catch(B){tn(a,x,B)}break;case 5:var T=a.return;try{ed(a)}catch(B){tn(a,T,B)}}}catch(B){tn(a,a.return,B)}if(a===i){Be=null;break}var N=a.sibling;if(N!==null){N.return=a.return,Be=N;break}Be=a.return}}var kE=Math.ceil,mu=b.ReactCurrentDispatcher,id=b.ReactCurrentOwner,fi=b.ReactCurrentBatchConfig,Ct=0,mn=null,sn=null,xn=0,ti=0,da=Or(0),cn=0,No=null,Ss=0,gu=0,rd=0,Uo=null,Xn=null,sd=0,ha=1/0,lr=null,vu=!1,ad=null,Gr=null,_u=!1,Wr=null,yu=0,Fo=0,od=null,xu=-1,Su=0;function Fn(){return(Ct&6)!==0?W():xu!==-1?xu:xu=W()}function jr(i){return(i.mode&1)===0?1:(Ct&2)!==0&&xn!==0?xn&-xn:SE.transition!==null?(Su===0&&(Su=Nn()),Su):(i=Tt,i!==0||(i=window.event,i=i===void 0?16:bm(i.type)),i)}function wi(i,a,u,h){if(50<Fo)throw Fo=0,od=null,Error(t(185));nn(i,u,h),((Ct&2)===0||i!==mn)&&(i===mn&&((Ct&2)===0&&(gu|=u),cn===4&&Xr(i,xn)),Yn(i,h),u===1&&Ct===0&&(a.mode&1)===0&&(ha=W()+500,Kl&&Br()))}function Yn(i,a){var u=i.callbackNode;ds(i,a);var h=yi(i,i===mn?xn:0);if(h===0)u!==null&&Y(u),i.callbackNode=null,i.callbackPriority=0;else if(a=h&-h,i.callbackPriority!==a){if(u!=null&&Y(u),a===1)i.tag===0?xE(bv.bind(null,i)):fg(bv.bind(null,i)),gE(function(){(Ct&6)===0&&Br()}),u=null;else{switch(_m(h)){case 1:u=Pe;break;case 4:u=He;break;case 16:u=Ue;break;case 536870912:u=ot;break;default:u=Ue}u=Nv(u,wv.bind(null,i))}i.callbackPriority=a,i.callbackNode=u}}function wv(i,a){if(xu=-1,Su=0,(Ct&6)!==0)throw Error(t(327));var u=i.callbackNode;if(pa()&&i.callbackNode!==u)return null;var h=yi(i,i===mn?xn:0);if(h===0)return null;if((h&30)!==0||(h&i.expiredLanes)!==0||a)a=Eu(i,h);else{a=h;var g=Ct;Ct|=2;var x=Rv();(mn!==i||xn!==a)&&(lr=null,ha=W()+500,Ms(i,a));do try{HE();break}catch(N){Av(i,N)}while(!0);wf(),mu.current=x,Ct=g,sn!==null?a=0:(mn=null,xn=0,a=cn)}if(a!==0){if(a===2&&(g=Gt(i),g!==0&&(h=g,a=ld(i,g))),a===1)throw u=No,Ms(i,0),Xr(i,h),Yn(i,W()),u;if(a===6)Xr(i,h);else{if(g=i.current.alternate,(h&30)===0&&!BE(g)&&(a=Eu(i,h),a===2&&(x=Gt(i),x!==0&&(h=x,a=ld(i,x))),a===1))throw u=No,Ms(i,0),Xr(i,h),Yn(i,W()),u;switch(i.finishedWork=g,i.finishedLanes=h,a){case 0:case 1:throw Error(t(345));case 2:Ts(i,Xn,lr);break;case 3:if(Xr(i,h),(h&130023424)===h&&(a=sd+500-W(),10<a)){if(yi(i,0)!==0)break;if(g=i.suspendedLanes,(g&h)!==h){Fn(),i.pingedLanes|=i.suspendedLanes&g;break}i.timeoutHandle=pf(Ts.bind(null,i,Xn,lr),a);break}Ts(i,Xn,lr);break;case 4:if(Xr(i,h),(h&4194240)===h)break;for(a=i.eventTimes,g=-1;0<h;){var T=31-At(h);x=1<<T,T=a[T],T>g&&(g=T),h&=~x}if(h=g,h=W()-h,h=(120>h?120:480>h?480:1080>h?1080:1920>h?1920:3e3>h?3e3:4320>h?4320:1960*kE(h/1960))-h,10<h){i.timeoutHandle=pf(Ts.bind(null,i,Xn,lr),h);break}Ts(i,Xn,lr);break;case 5:Ts(i,Xn,lr);break;default:throw Error(t(329))}}}return Yn(i,W()),i.callbackNode===u?wv.bind(null,i):null}function ld(i,a){var u=Uo;return i.current.memoizedState.isDehydrated&&(Ms(i,a).flags|=256),i=Eu(i,a),i!==2&&(a=Xn,Xn=u,a!==null&&ud(a)),i}function ud(i){Xn===null?Xn=i:Xn.push.apply(Xn,i)}function BE(i){for(var a=i;;){if(a.flags&16384){var u=a.updateQueue;if(u!==null&&(u=u.stores,u!==null))for(var h=0;h<u.length;h++){var g=u[h],x=g.getSnapshot;g=g.value;try{if(!xi(x(),g))return!1}catch{return!1}}}if(u=a.child,a.subtreeFlags&16384&&u!==null)u.return=a,a=u;else{if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return!0;a=a.return}a.sibling.return=a.return,a=a.sibling}}return!0}function Xr(i,a){for(a&=~rd,a&=~gu,i.suspendedLanes|=a,i.pingedLanes&=~a,i=i.expirationTimes;0<a;){var u=31-At(a),h=1<<u;i[u]=-1,a&=~h}}function bv(i){if((Ct&6)!==0)throw Error(t(327));pa();var a=yi(i,0);if((a&1)===0)return Yn(i,W()),null;var u=Eu(i,a);if(i.tag!==0&&u===2){var h=Gt(i);h!==0&&(a=h,u=ld(i,h))}if(u===1)throw u=No,Ms(i,0),Xr(i,a),Yn(i,W()),u;if(u===6)throw Error(t(345));return i.finishedWork=i.current.alternate,i.finishedLanes=a,Ts(i,Xn,lr),Yn(i,W()),null}function cd(i,a){var u=Ct;Ct|=1;try{return i(a)}finally{Ct=u,Ct===0&&(ha=W()+500,Kl&&Br())}}function Es(i){Wr!==null&&Wr.tag===0&&(Ct&6)===0&&pa();var a=Ct;Ct|=1;var u=fi.transition,h=Tt;try{if(fi.transition=null,Tt=1,i)return i()}finally{Tt=h,fi.transition=u,Ct=a,(Ct&6)===0&&Br()}}function fd(){ti=da.current,$t(da)}function Ms(i,a){i.finishedWork=null,i.finishedLanes=0;var u=i.timeoutHandle;if(u!==-1&&(i.timeoutHandle=-1,mE(u)),sn!==null)for(u=sn.return;u!==null;){var h=u;switch(xf(h),h.tag){case 1:h=h.type.childContextTypes,h!=null&&Yl();break;case 3:ua(),$t(Gn),$t(bn),Df();break;case 5:Lf(h);break;case 4:ua();break;case 13:$t(Zt);break;case 19:$t(Zt);break;case 10:bf(h.type._context);break;case 22:case 23:fd()}u=u.return}if(mn=i,sn=i=Yr(i.current,null),xn=ti=a,cn=0,No=null,rd=gu=Ss=0,Xn=Uo=null,_s!==null){for(a=0;a<_s.length;a++)if(u=_s[a],h=u.interleaved,h!==null){u.interleaved=null;var g=h.next,x=u.pending;if(x!==null){var T=x.next;x.next=g,h.next=T}u.pending=h}_s=null}return i}function Av(i,a){do{var u=sn;try{if(wf(),su.current=uu,au){for(var h=Jt.memoizedState;h!==null;){var g=h.queue;g!==null&&(g.pending=null),h=h.next}au=!1}if(xs=0,pn=un=Jt=null,Ro=!1,Co=0,id.current=null,u===null||u.return===null){cn=1,No=a,sn=null;break}e:{var x=i,T=u.return,N=u,B=a;if(a=xn,N.flags|=32768,B!==null&&typeof B=="object"&&typeof B.then=="function"){var Z=B,ve=N,_e=ve.tag;if((ve.mode&1)===0&&(_e===0||_e===11||_e===15)){var me=ve.alternate;me?(ve.updateQueue=me.updateQueue,ve.memoizedState=me.memoizedState,ve.lanes=me.lanes):(ve.updateQueue=null,ve.memoizedState=null)}var Fe=Jg(T);if(Fe!==null){Fe.flags&=-257,Qg(Fe,T,N,x,a),Fe.mode&1&&Zg(x,Z,a),a=Fe,B=Z;var Ve=a.updateQueue;if(Ve===null){var $e=new Set;$e.add(B),a.updateQueue=$e}else Ve.add(B);break e}else{if((a&1)===0){Zg(x,Z,a),dd();break e}B=Error(t(426))}}else if(qt&&N.mode&1){var rn=Jg(T);if(rn!==null){(rn.flags&65536)===0&&(rn.flags|=256),Qg(rn,T,N,x,a),Mf(ca(B,N));break e}}x=B=ca(B,N),cn!==4&&(cn=2),Uo===null?Uo=[x]:Uo.push(x),x=T;do{switch(x.tag){case 3:x.flags|=65536,a&=-a,x.lanes|=a;var $=Kg(x,B,a);Eg(x,$);break e;case 1:N=B;var G=x.type,q=x.stateNode;if((x.flags&128)===0&&(typeof G.getDerivedStateFromError=="function"||q!==null&&typeof q.componentDidCatch=="function"&&(Gr===null||!Gr.has(q)))){x.flags|=65536,a&=-a,x.lanes|=a;var we=qg(x,N,a);Eg(x,we);break e}}x=x.return}while(x!==null)}Pv(u)}catch(qe){a=qe,sn===u&&u!==null&&(sn=u=u.return);continue}break}while(!0)}function Rv(){var i=mu.current;return mu.current=uu,i===null?uu:i}function dd(){(cn===0||cn===3||cn===2)&&(cn=4),mn===null||(Ss&268435455)===0&&(gu&268435455)===0||Xr(mn,xn)}function Eu(i,a){var u=Ct;Ct|=2;var h=Rv();(mn!==i||xn!==a)&&(lr=null,Ms(i,a));do try{zE();break}catch(g){Av(i,g)}while(!0);if(wf(),Ct=u,mu.current=h,sn!==null)throw Error(t(261));return mn=null,xn=0,cn}function zE(){for(;sn!==null;)Cv(sn)}function HE(){for(;sn!==null&&!ee();)Cv(sn)}function Cv(i){var a=Dv(i.alternate,i,ti);i.memoizedProps=i.pendingProps,a===null?Pv(i):sn=a,id.current=null}function Pv(i){var a=i;do{var u=a.alternate;if(i=a.return,(a.flags&32768)===0){if(u=DE(u,a,ti),u!==null){sn=u;return}}else{if(u=NE(u,a),u!==null){u.flags&=32767,sn=u;return}if(i!==null)i.flags|=32768,i.subtreeFlags=0,i.deletions=null;else{cn=6,sn=null;return}}if(a=a.sibling,a!==null){sn=a;return}sn=a=i}while(a!==null);cn===0&&(cn=5)}function Ts(i,a,u){var h=Tt,g=fi.transition;try{fi.transition=null,Tt=1,VE(i,a,u,h)}finally{fi.transition=g,Tt=h}return null}function VE(i,a,u,h){do pa();while(Wr!==null);if((Ct&6)!==0)throw Error(t(327));u=i.finishedWork;var g=i.finishedLanes;if(u===null)return null;if(i.finishedWork=null,i.finishedLanes=0,u===i.current)throw Error(t(177));i.callbackNode=null,i.callbackPriority=0;var x=u.lanes|u.childLanes;if(wn(i,x),i===mn&&(sn=mn=null,xn=0),(u.subtreeFlags&2064)===0&&(u.flags&2064)===0||_u||(_u=!0,Nv(Ue,function(){return pa(),null})),x=(u.flags&15990)!==0,(u.subtreeFlags&15990)!==0||x){x=fi.transition,fi.transition=null;var T=Tt;Tt=1;var N=Ct;Ct|=4,id.current=null,FE(i,u),xv(u,i),lE(df),Dl=!!ff,df=ff=null,i.current=u,OE(u),te(),Ct=N,Tt=T,fi.transition=x}else i.current=u;if(_u&&(_u=!1,Wr=i,yu=g),x=i.pendingLanes,x===0&&(Gr=null),It(u.stateNode),Yn(i,W()),a!==null)for(h=i.onRecoverableError,u=0;u<a.length;u++)g=a[u],h(g.value,{componentStack:g.stack,digest:g.digest});if(vu)throw vu=!1,i=ad,ad=null,i;return(yu&1)!==0&&i.tag!==0&&pa(),x=i.pendingLanes,(x&1)!==0?i===od?Fo++:(Fo=0,od=i):Fo=0,Br(),null}function pa(){if(Wr!==null){var i=_m(yu),a=fi.transition,u=Tt;try{if(fi.transition=null,Tt=16>i?16:i,Wr===null)var h=!1;else{if(i=Wr,Wr=null,yu=0,(Ct&6)!==0)throw Error(t(331));var g=Ct;for(Ct|=4,Be=i.current;Be!==null;){var x=Be,T=x.child;if((Be.flags&16)!==0){var N=x.deletions;if(N!==null){for(var B=0;B<N.length;B++){var Z=N[B];for(Be=Z;Be!==null;){var ve=Be;switch(ve.tag){case 0:case 11:case 15:Do(8,ve,x)}var _e=ve.child;if(_e!==null)_e.return=ve,Be=_e;else for(;Be!==null;){ve=Be;var me=ve.sibling,Fe=ve.return;if(mv(ve),ve===Z){Be=null;break}if(me!==null){me.return=Fe,Be=me;break}Be=Fe}}}var Ve=x.alternate;if(Ve!==null){var $e=Ve.child;if($e!==null){Ve.child=null;do{var rn=$e.sibling;$e.sibling=null,$e=rn}while($e!==null)}}Be=x}}if((x.subtreeFlags&2064)!==0&&T!==null)T.return=x,Be=T;else e:for(;Be!==null;){if(x=Be,(x.flags&2048)!==0)switch(x.tag){case 0:case 11:case 15:Do(9,x,x.return)}var $=x.sibling;if($!==null){$.return=x.return,Be=$;break e}Be=x.return}}var G=i.current;for(Be=G;Be!==null;){T=Be;var q=T.child;if((T.subtreeFlags&2064)!==0&&q!==null)q.return=T,Be=q;else e:for(T=G;Be!==null;){if(N=Be,(N.flags&2048)!==0)try{switch(N.tag){case 0:case 11:case 15:pu(9,N)}}catch(qe){tn(N,N.return,qe)}if(N===T){Be=null;break e}var we=N.sibling;if(we!==null){we.return=N.return,Be=we;break e}Be=N.return}}if(Ct=g,Br(),lt&&typeof lt.onPostCommitFiberRoot=="function")try{lt.onPostCommitFiberRoot(Qe,i)}catch{}h=!0}return h}finally{Tt=u,fi.transition=a}}return!1}function Lv(i,a,u){a=ca(u,a),a=Kg(i,a,1),i=Hr(i,a,1),a=Fn(),i!==null&&(nn(i,1,a),Yn(i,a))}function tn(i,a,u){if(i.tag===3)Lv(i,i,u);else for(;a!==null;){if(a.tag===3){Lv(a,i,u);break}else if(a.tag===1){var h=a.stateNode;if(typeof a.type.getDerivedStateFromError=="function"||typeof h.componentDidCatch=="function"&&(Gr===null||!Gr.has(h))){i=ca(u,i),i=qg(a,i,1),a=Hr(a,i,1),i=Fn(),a!==null&&(nn(a,1,i),Yn(a,i));break}}a=a.return}}function GE(i,a,u){var h=i.pingCache;h!==null&&h.delete(a),a=Fn(),i.pingedLanes|=i.suspendedLanes&u,mn===i&&(xn&u)===u&&(cn===4||cn===3&&(xn&130023424)===xn&&500>W()-sd?Ms(i,0):rd|=u),Yn(i,a)}function Iv(i,a){a===0&&((i.mode&1)===0?a=1:(a=Mt,Mt<<=1,(Mt&130023424)===0&&(Mt=4194304)));var u=Fn();i=sr(i,a),i!==null&&(nn(i,a,u),Yn(i,u))}function WE(i){var a=i.memoizedState,u=0;a!==null&&(u=a.retryLane),Iv(i,u)}function jE(i,a){var u=0;switch(i.tag){case 13:var h=i.stateNode,g=i.memoizedState;g!==null&&(u=g.retryLane);break;case 19:h=i.stateNode;break;default:throw Error(t(314))}h!==null&&h.delete(a),Iv(i,u)}var Dv;Dv=function(i,a,u){if(i!==null)if(i.memoizedProps!==a.pendingProps||Gn.current)jn=!0;else{if((i.lanes&u)===0&&(a.flags&128)===0)return jn=!1,IE(i,a,u);jn=(i.flags&131072)!==0}else jn=!1,qt&&(a.flags&1048576)!==0&&dg(a,Zl,a.index);switch(a.lanes=0,a.tag){case 2:var h=a.type;du(i,a),i=a.pendingProps;var g=na(a,bn.current);la(a,u),g=Ff(null,a,h,i,g,u);var x=Of();return a.flags|=1,typeof g=="object"&&g!==null&&typeof g.render=="function"&&g.$$typeof===void 0?(a.tag=1,a.memoizedState=null,a.updateQueue=null,Wn(h)?(x=!0,$l(a)):x=!1,a.memoizedState=g.state!==null&&g.state!==void 0?g.state:null,Cf(a),g.updater=cu,a.stateNode=g,g._reactInternals=a,Gf(a,h,i,u),a=Yf(null,a,h,!0,x,u)):(a.tag=0,qt&&x&&yf(a),Un(null,a,g,u),a=a.child),a;case 16:h=a.elementType;e:{switch(du(i,a),i=a.pendingProps,g=h._init,h=g(h._payload),a.type=h,g=a.tag=YE(h),i=Ei(h,i),g){case 0:a=Xf(null,a,h,i,u);break e;case 1:a=sv(null,a,h,i,u);break e;case 11:a=ev(null,a,h,i,u);break e;case 14:a=tv(null,a,h,Ei(h.type,i),u);break e}throw Error(t(306,h,""))}return a;case 0:return h=a.type,g=a.pendingProps,g=a.elementType===h?g:Ei(h,g),Xf(i,a,h,g,u);case 1:return h=a.type,g=a.pendingProps,g=a.elementType===h?g:Ei(h,g),sv(i,a,h,g,u);case 3:e:{if(av(a),i===null)throw Error(t(387));h=a.pendingProps,x=a.memoizedState,g=x.element,Sg(i,a),iu(a,h,null,u);var T=a.memoizedState;if(h=T.element,x.isDehydrated)if(x={element:h,isDehydrated:!1,cache:T.cache,pendingSuspenseBoundaries:T.pendingSuspenseBoundaries,transitions:T.transitions},a.updateQueue.baseState=x,a.memoizedState=x,a.flags&256){g=ca(Error(t(423)),a),a=ov(i,a,h,u,g);break e}else if(h!==g){g=ca(Error(t(424)),a),a=ov(i,a,h,u,g);break e}else for(ei=Fr(a.stateNode.containerInfo.firstChild),Qn=a,qt=!0,Si=null,u=yg(a,null,h,u),a.child=u;u;)u.flags=u.flags&-3|4096,u=u.sibling;else{if(sa(),h===g){a=or(i,a,u);break e}Un(i,a,h,u)}a=a.child}return a;case 5:return Tg(a),i===null&&Ef(a),h=a.type,g=a.pendingProps,x=i!==null?i.memoizedProps:null,T=g.children,hf(h,g)?T=null:x!==null&&hf(h,x)&&(a.flags|=32),rv(i,a),Un(i,a,T,u),a.child;case 6:return i===null&&Ef(a),null;case 13:return lv(i,a,u);case 4:return Pf(a,a.stateNode.containerInfo),h=a.pendingProps,i===null?a.child=aa(a,null,h,u):Un(i,a,h,u),a.child;case 11:return h=a.type,g=a.pendingProps,g=a.elementType===h?g:Ei(h,g),ev(i,a,h,g,u);case 7:return Un(i,a,a.pendingProps,u),a.child;case 8:return Un(i,a,a.pendingProps.children,u),a.child;case 12:return Un(i,a,a.pendingProps.children,u),a.child;case 10:e:{if(h=a.type._context,g=a.pendingProps,x=a.memoizedProps,T=g.value,Wt(eu,h._currentValue),h._currentValue=T,x!==null)if(xi(x.value,T)){if(x.children===g.children&&!Gn.current){a=or(i,a,u);break e}}else for(x=a.child,x!==null&&(x.return=a);x!==null;){var N=x.dependencies;if(N!==null){T=x.child;for(var B=N.firstContext;B!==null;){if(B.context===h){if(x.tag===1){B=ar(-1,u&-u),B.tag=2;var Z=x.updateQueue;if(Z!==null){Z=Z.shared;var ve=Z.pending;ve===null?B.next=B:(B.next=ve.next,ve.next=B),Z.pending=B}}x.lanes|=u,B=x.alternate,B!==null&&(B.lanes|=u),Af(x.return,u,a),N.lanes|=u;break}B=B.next}}else if(x.tag===10)T=x.type===a.type?null:x.child;else if(x.tag===18){if(T=x.return,T===null)throw Error(t(341));T.lanes|=u,N=T.alternate,N!==null&&(N.lanes|=u),Af(T,u,a),T=x.sibling}else T=x.child;if(T!==null)T.return=x;else for(T=x;T!==null;){if(T===a){T=null;break}if(x=T.sibling,x!==null){x.return=T.return,T=x;break}T=T.return}x=T}Un(i,a,g.children,u),a=a.child}return a;case 9:return g=a.type,h=a.pendingProps.children,la(a,u),g=ui(g),h=h(g),a.flags|=1,Un(i,a,h,u),a.child;case 14:return h=a.type,g=Ei(h,a.pendingProps),g=Ei(h.type,g),tv(i,a,h,g,u);case 15:return nv(i,a,a.type,a.pendingProps,u);case 17:return h=a.type,g=a.pendingProps,g=a.elementType===h?g:Ei(h,g),du(i,a),a.tag=1,Wn(h)?(i=!0,$l(a)):i=!1,la(a,u),Yg(a,h,g),Gf(a,h,g,u),Yf(null,a,h,!0,i,u);case 19:return cv(i,a,u);case 22:return iv(i,a,u)}throw Error(t(156,a.tag))};function Nv(i,a){return A(i,a)}function XE(i,a,u,h){this.tag=i,this.key=u,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=a,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=h,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function di(i,a,u,h){return new XE(i,a,u,h)}function hd(i){return i=i.prototype,!(!i||!i.isReactComponent)}function YE(i){if(typeof i=="function")return hd(i)?1:0;if(i!=null){if(i=i.$$typeof,i===J)return 11;if(i===ue)return 14}return 2}function Yr(i,a){var u=i.alternate;return u===null?(u=di(i.tag,a,i.key,i.mode),u.elementType=i.elementType,u.type=i.type,u.stateNode=i.stateNode,u.alternate=i,i.alternate=u):(u.pendingProps=a,u.type=i.type,u.flags=0,u.subtreeFlags=0,u.deletions=null),u.flags=i.flags&14680064,u.childLanes=i.childLanes,u.lanes=i.lanes,u.child=i.child,u.memoizedProps=i.memoizedProps,u.memoizedState=i.memoizedState,u.updateQueue=i.updateQueue,a=i.dependencies,u.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext},u.sibling=i.sibling,u.index=i.index,u.ref=i.ref,u}function Mu(i,a,u,h,g,x){var T=2;if(h=i,typeof i=="function")hd(i)&&(T=1);else if(typeof i=="string")T=5;else e:switch(i){case F:return ws(u.children,g,x,a);case X:T=8,g|=8;break;case P:return i=di(12,u,a,g|2),i.elementType=P,i.lanes=x,i;case ie:return i=di(13,u,a,g),i.elementType=ie,i.lanes=x,i;case he:return i=di(19,u,a,g),i.elementType=he,i.lanes=x,i;case le:return Tu(u,g,x,a);default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case L:T=10;break e;case H:T=9;break e;case J:T=11;break e;case ue:T=14;break e;case re:T=16,h=null;break e}throw Error(t(130,i==null?i:typeof i,""))}return a=di(T,u,a,g),a.elementType=i,a.type=h,a.lanes=x,a}function ws(i,a,u,h){return i=di(7,i,h,a),i.lanes=u,i}function Tu(i,a,u,h){return i=di(22,i,h,a),i.elementType=le,i.lanes=u,i.stateNode={isHidden:!1},i}function pd(i,a,u){return i=di(6,i,null,a),i.lanes=u,i}function md(i,a,u){return a=di(4,i.children!==null?i.children:[],i.key,a),a.lanes=u,a.stateNode={containerInfo:i.containerInfo,pendingChildren:null,implementation:i.implementation},a}function $E(i,a,u,h,g){this.tag=a,this.containerInfo=i,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Tn(0),this.expirationTimes=Tn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Tn(0),this.identifierPrefix=h,this.onRecoverableError=g,this.mutableSourceEagerHydrationData=null}function gd(i,a,u,h,g,x,T,N,B){return i=new $E(i,a,u,N,B),a===1?(a=1,x===!0&&(a|=8)):a=0,x=di(3,null,null,a),i.current=x,x.stateNode=i,x.memoizedState={element:h,isDehydrated:u,cache:null,transitions:null,pendingSuspenseBoundaries:null},Cf(x),i}function KE(i,a,u){var h=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:U,key:h==null?null:""+h,children:i,containerInfo:a,implementation:u}}function Uv(i){if(!i)return kr;i=i._reactInternals;e:{if(er(i)!==i||i.tag!==1)throw Error(t(170));var a=i;do{switch(a.tag){case 3:a=a.stateNode.context;break e;case 1:if(Wn(a.type)){a=a.stateNode.__reactInternalMemoizedMergedChildContext;break e}}a=a.return}while(a!==null);throw Error(t(171))}if(i.tag===1){var u=i.type;if(Wn(u))return ug(i,u,a)}return a}function Fv(i,a,u,h,g,x,T,N,B){return i=gd(u,h,!0,i,g,x,T,N,B),i.context=Uv(null),u=i.current,h=Fn(),g=jr(u),x=ar(h,g),x.callback=a??null,Hr(u,x,g),i.current.lanes=g,nn(i,g,h),Yn(i,h),i}function wu(i,a,u,h){var g=a.current,x=Fn(),T=jr(g);return u=Uv(u),a.context===null?a.context=u:a.pendingContext=u,a=ar(x,T),a.payload={element:i},h=h===void 0?null:h,h!==null&&(a.callback=h),i=Hr(g,a,T),i!==null&&(wi(i,g,T,x),nu(i,g,T)),T}function bu(i){return i=i.current,i.child?(i.child.tag===5,i.child.stateNode):null}function Ov(i,a){if(i=i.memoizedState,i!==null&&i.dehydrated!==null){var u=i.retryLane;i.retryLane=u!==0&&u<a?u:a}}function vd(i,a){Ov(i,a),(i=i.alternate)&&Ov(i,a)}function qE(){return null}var kv=typeof reportError=="function"?reportError:function(i){console.error(i)};function _d(i){this._internalRoot=i}Au.prototype.render=_d.prototype.render=function(i){var a=this._internalRoot;if(a===null)throw Error(t(409));wu(i,a,null,null)},Au.prototype.unmount=_d.prototype.unmount=function(){var i=this._internalRoot;if(i!==null){this._internalRoot=null;var a=i.containerInfo;Es(function(){wu(null,i,null,null)}),a[tr]=null}};function Au(i){this._internalRoot=i}Au.prototype.unstable_scheduleHydration=function(i){if(i){var a=Sm();i={blockedOn:null,target:i,priority:a};for(var u=0;u<Dr.length&&a!==0&&a<Dr[u].priority;u++);Dr.splice(u,0,i),u===0&&Tm(i)}};function yd(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11)}function Ru(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11&&(i.nodeType!==8||i.nodeValue!==" react-mount-point-unstable "))}function Bv(){}function ZE(i,a,u,h,g){if(g){if(typeof h=="function"){var x=h;h=function(){var Z=bu(T);x.call(Z)}}var T=Fv(a,h,i,0,null,!1,!1,"",Bv);return i._reactRootContainer=T,i[tr]=T.current,xo(i.nodeType===8?i.parentNode:i),Es(),T}for(;g=i.lastChild;)i.removeChild(g);if(typeof h=="function"){var N=h;h=function(){var Z=bu(B);N.call(Z)}}var B=gd(i,0,!1,null,null,!1,!1,"",Bv);return i._reactRootContainer=B,i[tr]=B.current,xo(i.nodeType===8?i.parentNode:i),Es(function(){wu(a,B,u,h)}),B}function Cu(i,a,u,h,g){var x=u._reactRootContainer;if(x){var T=x;if(typeof g=="function"){var N=g;g=function(){var B=bu(T);N.call(B)}}wu(a,T,i,g)}else T=ZE(u,a,i,g,h);return bu(T)}ym=function(i){switch(i.tag){case 3:var a=i.stateNode;if(a.current.memoizedState.isDehydrated){var u=ln(a.pendingLanes);u!==0&&(hs(a,u|1),Yn(a,W()),(Ct&6)===0&&(ha=W()+500,Br()))}break;case 13:Es(function(){var h=sr(i,1);if(h!==null){var g=Fn();wi(h,i,1,g)}}),vd(i,1)}},Gc=function(i){if(i.tag===13){var a=sr(i,134217728);if(a!==null){var u=Fn();wi(a,i,134217728,u)}vd(i,134217728)}},xm=function(i){if(i.tag===13){var a=jr(i),u=sr(i,a);if(u!==null){var h=Fn();wi(u,i,a,h)}vd(i,a)}},Sm=function(){return Tt},Em=function(i,a){var u=Tt;try{return Tt=i,a()}finally{Tt=u}},xe=function(i,a,u){switch(a){case"input":if(We(i,u),a=u.name,u.type==="radio"&&a!=null){for(u=i;u.parentNode;)u=u.parentNode;for(u=u.querySelectorAll("input[name="+JSON.stringify(""+a)+'][type="radio"]'),a=0;a<u.length;a++){var h=u[a];if(h!==i&&h.form===i.form){var g=Xl(h);if(!g)throw Error(t(90));on(h),We(h,g)}}}break;case"textarea":w(i,u);break;case"select":a=u.value,a!=null&&jt(i,!!u.multiple,a,!1)}},ft=cd,Dt=Es;var JE={usingClientEntryPoint:!1,Events:[Mo,ea,Xl,pe,Xe,cd]},Oo={findFiberByHostInstance:ps,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},QE={bundleType:Oo.bundleType,version:Oo.version,rendererPackageName:Oo.rendererPackageName,rendererConfig:Oo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:b.ReactCurrentDispatcher,findHostInstanceByFiber:function(i){return i=Cl(i),i===null?null:i.stateNode},findFiberByHostInstance:Oo.findFiberByHostInstance||qE,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Pu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Pu.isDisabled&&Pu.supportsFiber)try{Qe=Pu.inject(QE),lt=Pu}catch{}}return $n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=JE,$n.createPortal=function(i,a){var u=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!yd(a))throw Error(t(200));return KE(i,a,null,u)},$n.createRoot=function(i,a){if(!yd(i))throw Error(t(299));var u=!1,h="",g=kv;return a!=null&&(a.unstable_strictMode===!0&&(u=!0),a.identifierPrefix!==void 0&&(h=a.identifierPrefix),a.onRecoverableError!==void 0&&(g=a.onRecoverableError)),a=gd(i,1,!1,null,null,u,!1,h,g),i[tr]=a.current,xo(i.nodeType===8?i.parentNode:i),new _d(a)},$n.findDOMNode=function(i){if(i==null)return null;if(i.nodeType===1)return i;var a=i._reactInternals;if(a===void 0)throw typeof i.render=="function"?Error(t(188)):(i=Object.keys(i).join(","),Error(t(268,i)));return i=Cl(a),i=i===null?null:i.stateNode,i},$n.flushSync=function(i){return Es(i)},$n.hydrate=function(i,a,u){if(!Ru(a))throw Error(t(200));return Cu(null,i,a,!0,u)},$n.hydrateRoot=function(i,a,u){if(!yd(i))throw Error(t(405));var h=u!=null&&u.hydratedSources||null,g=!1,x="",T=kv;if(u!=null&&(u.unstable_strictMode===!0&&(g=!0),u.identifierPrefix!==void 0&&(x=u.identifierPrefix),u.onRecoverableError!==void 0&&(T=u.onRecoverableError)),a=Fv(a,null,i,1,u??null,g,!1,x,T),i[tr]=a.current,xo(i),h)for(i=0;i<h.length;i++)u=h[i],g=u._getVersion,g=g(u._source),a.mutableSourceEagerHydrationData==null?a.mutableSourceEagerHydrationData=[u,g]:a.mutableSourceEagerHydrationData.push(u,g);return new Au(a)},$n.render=function(i,a,u){if(!Ru(a))throw Error(t(200));return Cu(null,i,a,!1,u)},$n.unmountComponentAtNode=function(i){if(!Ru(i))throw Error(t(40));return i._reactRootContainer?(Es(function(){Cu(null,null,i,!1,function(){i._reactRootContainer=null,i[tr]=null})}),!0):!1},$n.unstable_batchedUpdates=cd,$n.unstable_renderSubtreeIntoContainer=function(i,a,u,h){if(!Ru(u))throw Error(t(200));if(i==null||i._reactInternals===void 0)throw Error(t(38));return Cu(i,a,u,!1,h)},$n.version="18.3.1-next-f1338f8080-20240426",$n}var Yv;function oM(){if(Yv)return Ed.exports;Yv=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Ed.exports=aM(),Ed.exports}var $v;function lM(){if($v)return Lu;$v=1;var r=oM();return Lu.createRoot=r.createRoot,Lu.hydrateRoot=r.hydrateRoot,Lu}var uM=lM();const cM=ay(uM);var Kv="popstate";function fM(r={}){function e(n,s){let{pathname:o,search:l,hash:c}=n.location;return xh("",{pathname:o,search:l,hash:c},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function t(n,s){return typeof s=="string"?s:rl(s)}return hM(e,t,null,r)}function Qt(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}function Ni(r,e){if(!r){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function dM(){return Math.random().toString(36).substring(2,10)}function qv(r,e){return{usr:r.state,key:r.key,idx:e}}function xh(r,e,t=null,n){return{pathname:typeof r=="string"?r:r.pathname,search:"",hash:"",...typeof e=="string"?Ja(e):e,state:t,key:e&&e.key||n||dM()}}function rl({pathname:r="/",search:e="",hash:t=""}){return e&&e!=="?"&&(r+=e.charAt(0)==="?"?e:"?"+e),t&&t!=="#"&&(r+=t.charAt(0)==="#"?t:"#"+t),r}function Ja(r){let e={};if(r){let t=r.indexOf("#");t>=0&&(e.hash=r.substring(t),r=r.substring(0,t));let n=r.indexOf("?");n>=0&&(e.search=r.substring(n),r=r.substring(0,n)),r&&(e.pathname=r)}return e}function hM(r,e,t,n={}){let{window:s=document.defaultView,v5Compat:o=!1}=n,l=s.history,c="POP",f=null,d=p();d==null&&(d=0,l.replaceState({...l.state,idx:d},""));function p(){return(l.state||{idx:null}).idx}function m(){c="POP";let S=p(),_=S==null?null:S-d;d=S,f&&f({action:c,location:M.location,delta:_})}function v(S,_){c="PUSH";let R=xh(M.location,S,_);d=p()+1;let C=qv(R,d),b=M.createHref(R);try{l.pushState(C,"",b)}catch(I){if(I instanceof DOMException&&I.name==="DataCloneError")throw I;s.location.assign(b)}o&&f&&f({action:c,location:M.location,delta:1})}function y(S,_){c="REPLACE";let R=xh(M.location,S,_);d=p();let C=qv(R,d),b=M.createHref(R);l.replaceState(C,"",b),o&&f&&f({action:c,location:M.location,delta:0})}function E(S){return pM(S)}let M={get action(){return c},get location(){return r(s,l)},listen(S){if(f)throw new Error("A history only accepts one active listener");return s.addEventListener(Kv,m),f=S,()=>{s.removeEventListener(Kv,m),f=null}},createHref(S){return e(s,S)},createURL:E,encodeLocation(S){let _=E(S);return{pathname:_.pathname,search:_.search,hash:_.hash}},push:v,replace:y,go(S){return l.go(S)}};return M}function pM(r,e=!1){let t="http://localhost";typeof window<"u"&&(t=window.location.origin!=="null"?window.location.origin:window.location.href),Qt(t,"No window.location.(origin|href) available to create URL");let n=typeof r=="string"?r:rl(r);return n=n.replace(/ $/,"%20"),!e&&n.startsWith("//")&&(n=t+n),new URL(n,t)}function oy(r,e,t="/"){return mM(r,e,t,!1)}function mM(r,e,t,n){let s=typeof e=="string"?Ja(e):e,o=Er(s.pathname||"/",t);if(o==null)return null;let l=ly(r);gM(l);let c=null;for(let f=0;c==null&&f<l.length;++f){let d=AM(o);c=wM(l[f],d,n)}return c}function ly(r,e=[],t=[],n="",s=!1){let o=(l,c,f=s,d)=>{let p={relativePath:d===void 0?l.path||"":d,caseSensitive:l.caseSensitive===!0,childrenIndex:c,route:l};if(p.relativePath.startsWith("/")){if(!p.relativePath.startsWith(n)&&f)return;Qt(p.relativePath.startsWith(n),`Absolute route path "${p.relativePath}" nested under path "${n}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),p.relativePath=p.relativePath.slice(n.length)}let m=xr([n,p.relativePath]),v=t.concat(p);l.children&&l.children.length>0&&(Qt(l.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${m}".`),ly(l.children,e,v,m,f)),!(l.path==null&&!l.index)&&e.push({path:m,score:MM(m,l.index),routesMeta:v})};return r.forEach((l,c)=>{if(l.path===""||!l.path?.includes("?"))o(l,c);else for(let f of uy(l.path))o(l,c,!0,f)}),e}function uy(r){let e=r.split("/");if(e.length===0)return[];let[t,...n]=e,s=t.endsWith("?"),o=t.replace(/\?$/,"");if(n.length===0)return s?[o,""]:[o];let l=uy(n.join("/")),c=[];return c.push(...l.map(f=>f===""?o:[o,f].join("/"))),s&&c.push(...l),c.map(f=>r.startsWith("/")&&f===""?"/":f)}function gM(r){r.sort((e,t)=>e.score!==t.score?t.score-e.score:TM(e.routesMeta.map(n=>n.childrenIndex),t.routesMeta.map(n=>n.childrenIndex)))}var vM=/^:[\w-]+$/,_M=3,yM=2,xM=1,SM=10,EM=-2,Zv=r=>r==="*";function MM(r,e){let t=r.split("/"),n=t.length;return t.some(Zv)&&(n+=EM),e&&(n+=yM),t.filter(s=>!Zv(s)).reduce((s,o)=>s+(vM.test(o)?_M:o===""?xM:SM),n)}function TM(r,e){return r.length===e.length&&r.slice(0,-1).every((n,s)=>n===e[s])?r[r.length-1]-e[e.length-1]:0}function wM(r,e,t=!1){let{routesMeta:n}=r,s={},o="/",l=[];for(let c=0;c<n.length;++c){let f=n[c],d=c===n.length-1,p=o==="/"?e:e.slice(o.length)||"/",m=Sc({path:f.relativePath,caseSensitive:f.caseSensitive,end:d},p),v=f.route;if(!m&&d&&t&&!n[n.length-1].route.index&&(m=Sc({path:f.relativePath,caseSensitive:f.caseSensitive,end:!1},p)),!m)return null;Object.assign(s,m.params),l.push({params:s,pathname:xr([o,m.pathname]),pathnameBase:LM(xr([o,m.pathnameBase])),route:v}),m.pathnameBase!=="/"&&(o=xr([o,m.pathnameBase]))}return l}function Sc(r,e){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[t,n]=bM(r.path,r.caseSensitive,r.end),s=e.match(t);if(!s)return null;let o=s[0],l=o.replace(/(.)\/+$/,"$1"),c=s.slice(1);return{params:n.reduce((d,{paramName:p,isOptional:m},v)=>{if(p==="*"){let E=c[v]||"";l=o.slice(0,o.length-E.length).replace(/(.)\/+$/,"$1")}const y=c[v];return m&&!y?d[p]=void 0:d[p]=(y||"").replace(/%2F/g,"/"),d},{}),pathname:o,pathnameBase:l,pattern:r}}function bM(r,e=!1,t=!0){Ni(r==="*"||!r.endsWith("*")||r.endsWith("/*"),`Route path "${r}" will be treated as if it were "${r.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${r.replace(/\*$/,"/*")}".`);let n=[],s="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(l,c,f)=>(n.push({paramName:c,isOptional:f!=null}),f?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return r.endsWith("*")?(n.push({paramName:"*"}),s+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?s+="\\/*$":r!==""&&r!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,e?void 0:"i"),n]}function AM(r){try{return r.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Ni(!1,`The URL path "${r}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),r}}function Er(r,e){if(e==="/")return r;if(!r.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,n=r.charAt(t);return n&&n!=="/"?null:r.slice(t)||"/"}var cy=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,RM=r=>cy.test(r);function CM(r,e="/"){let{pathname:t,search:n="",hash:s=""}=typeof r=="string"?Ja(r):r,o;if(t)if(RM(t))o=t;else{if(t.includes("//")){let l=t;t=t.replace(/\/\/+/g,"/"),Ni(!1,`Pathnames cannot have embedded double slashes - normalizing ${l} -> ${t}`)}t.startsWith("/")?o=Jv(t.substring(1),"/"):o=Jv(t,e)}else o=e;return{pathname:o,search:IM(n),hash:DM(s)}}function Jv(r,e){let t=e.replace(/\/+$/,"").split("/");return r.split("/").forEach(s=>{s===".."?t.length>1&&t.pop():s!=="."&&t.push(s)}),t.length>1?t.join("/"):"/"}function wd(r,e,t,n){return`Cannot include a '${r}' character in a manually specified \`to.${e}\` field [${JSON.stringify(n)}].  Please separate it out to the \`to.${t}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function PM(r){return r.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function fy(r){let e=PM(r);return e.map((t,n)=>n===e.length-1?t.pathname:t.pathnameBase)}function dy(r,e,t,n=!1){let s;typeof r=="string"?s=Ja(r):(s={...r},Qt(!s.pathname||!s.pathname.includes("?"),wd("?","pathname","search",s)),Qt(!s.pathname||!s.pathname.includes("#"),wd("#","pathname","hash",s)),Qt(!s.search||!s.search.includes("#"),wd("#","search","hash",s)));let o=r===""||s.pathname==="",l=o?"/":s.pathname,c;if(l==null)c=t;else{let m=e.length-1;if(!n&&l.startsWith("..")){let v=l.split("/");for(;v[0]==="..";)v.shift(),m-=1;s.pathname=v.join("/")}c=m>=0?e[m]:"/"}let f=CM(s,c),d=l&&l!=="/"&&l.endsWith("/"),p=(o||l===".")&&t.endsWith("/");return!f.pathname.endsWith("/")&&(d||p)&&(f.pathname+="/"),f}var xr=r=>r.join("/").replace(/\/\/+/g,"/"),LM=r=>r.replace(/\/+$/,"").replace(/^\/*/,"/"),IM=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,DM=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r,NM=class{constructor(r,e,t,n=!1){this.status=r,this.statusText=e||"",this.internal=n,t instanceof Error?(this.data=t.toString(),this.error=t):this.data=t}};function UM(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}function FM(r){return r.map(e=>e.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var hy=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function py(r,e){let t=r;if(typeof t!="string"||!cy.test(t))return{absoluteURL:void 0,isExternal:!1,to:t};let n=t,s=!1;if(hy)try{let o=new URL(window.location.href),l=t.startsWith("//")?new URL(o.protocol+t):new URL(t),c=Er(l.pathname,e);l.origin===o.origin&&c!=null?t=c+l.search+l.hash:s=!0}catch{Ni(!1,`<Link to="${t}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:n,isExternal:s,to:t}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var my=["POST","PUT","PATCH","DELETE"];new Set(my);var OM=["GET",...my];new Set(OM);var Qa=ae.createContext(null);Qa.displayName="DataRouter";var Lc=ae.createContext(null);Lc.displayName="DataRouterState";var kM=ae.createContext(!1),gy=ae.createContext({isTransitioning:!1});gy.displayName="ViewTransition";var BM=ae.createContext(new Map);BM.displayName="Fetchers";var zM=ae.createContext(null);zM.displayName="Await";var vi=ae.createContext(null);vi.displayName="Navigation";var ml=ae.createContext(null);ml.displayName="Location";var Ar=ae.createContext({outlet:null,matches:[],isDataRoute:!1});Ar.displayName="Route";var Lp=ae.createContext(null);Lp.displayName="RouteError";var vy="REACT_ROUTER_ERROR",HM="REDIRECT",VM="ROUTE_ERROR_RESPONSE";function GM(r){if(r.startsWith(`${vy}:${HM}:{`))try{let e=JSON.parse(r.slice(28));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.location=="string"&&typeof e.reloadDocument=="boolean"&&typeof e.replace=="boolean")return e}catch{}}function WM(r){if(r.startsWith(`${vy}:${VM}:{`))try{let e=JSON.parse(r.slice(40));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string")return new NM(e.status,e.statusText,e.data)}catch{}}function jM(r,{relative:e}={}){Qt(gl(),"useHref() may be used only in the context of a <Router> component.");let{basename:t,navigator:n}=ae.useContext(vi),{hash:s,pathname:o,search:l}=vl(r,{relative:e}),c=o;return t!=="/"&&(c=o==="/"?t:xr([t,o])),n.createHref({pathname:c,search:l,hash:s})}function gl(){return ae.useContext(ml)!=null}function cs(){return Qt(gl(),"useLocation() may be used only in the context of a <Router> component."),ae.useContext(ml).location}var _y="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function yy(r){ae.useContext(vi).static||ae.useLayoutEffect(r)}function xy(){let{isDataRoute:r}=ae.useContext(Ar);return r?r1():XM()}function XM(){Qt(gl(),"useNavigate() may be used only in the context of a <Router> component.");let r=ae.useContext(Qa),{basename:e,navigator:t}=ae.useContext(vi),{matches:n}=ae.useContext(Ar),{pathname:s}=cs(),o=JSON.stringify(fy(n)),l=ae.useRef(!1);return yy(()=>{l.current=!0}),ae.useCallback((f,d={})=>{if(Ni(l.current,_y),!l.current)return;if(typeof f=="number"){t.go(f);return}let p=dy(f,JSON.parse(o),s,d.relative==="path");r==null&&e!=="/"&&(p.pathname=p.pathname==="/"?e:xr([e,p.pathname])),(d.replace?t.replace:t.push)(p,d.state,d)},[e,t,o,s,r])}ae.createContext(null);function vl(r,{relative:e}={}){let{matches:t}=ae.useContext(Ar),{pathname:n}=cs(),s=JSON.stringify(fy(t));return ae.useMemo(()=>dy(r,JSON.parse(s),n,e==="path"),[r,s,n,e])}function YM(r,e){return Sy(r,e)}function Sy(r,e,t,n,s){Qt(gl(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:o}=ae.useContext(vi),{matches:l}=ae.useContext(Ar),c=l[l.length-1],f=c?c.params:{},d=c?c.pathname:"/",p=c?c.pathnameBase:"/",m=c&&c.route;{let R=m&&m.path||"";My(d,!m||R.endsWith("*")||R.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${d}" (under <Route path="${R}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${R}"> to <Route path="${R==="/"?"*":`${R}/*`}">.`)}let v=cs(),y;if(e){let R=typeof e=="string"?Ja(e):e;Qt(p==="/"||R.pathname?.startsWith(p),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${p}" but pathname "${R.pathname}" was given in the \`location\` prop.`),y=R}else y=v;let E=y.pathname||"/",M=E;if(p!=="/"){let R=p.replace(/^\//,"").split("/");M="/"+E.replace(/^\//,"").split("/").slice(R.length).join("/")}let S=oy(r,{pathname:M});Ni(m||S!=null,`No routes matched location "${y.pathname}${y.search}${y.hash}" `),Ni(S==null||S[S.length-1].route.element!==void 0||S[S.length-1].route.Component!==void 0||S[S.length-1].route.lazy!==void 0,`Matched leaf route at location "${y.pathname}${y.search}${y.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let _=JM(S&&S.map(R=>Object.assign({},R,{params:Object.assign({},f,R.params),pathname:xr([p,o.encodeLocation?o.encodeLocation(R.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:R.pathname]),pathnameBase:R.pathnameBase==="/"?p:xr([p,o.encodeLocation?o.encodeLocation(R.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:R.pathnameBase])})),l,t,n,s);return e&&_?ae.createElement(ml.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...y},navigationType:"POP"}},_):_}function $M(){let r=i1(),e=UM(r)?`${r.status} ${r.statusText}`:r instanceof Error?r.message:JSON.stringify(r),t=r instanceof Error?r.stack:null,n="rgba(200,200,200, 0.5)",s={padding:"0.5rem",backgroundColor:n},o={padding:"2px 4px",backgroundColor:n},l=null;return console.error("Error handled by React Router default ErrorBoundary:",r),l=ae.createElement(ae.Fragment,null,ae.createElement("p",null,"💿 Hey developer 👋"),ae.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",ae.createElement("code",{style:o},"ErrorBoundary")," or"," ",ae.createElement("code",{style:o},"errorElement")," prop on your route.")),ae.createElement(ae.Fragment,null,ae.createElement("h2",null,"Unexpected Application Error!"),ae.createElement("h3",{style:{fontStyle:"italic"}},e),t?ae.createElement("pre",{style:s},t):null,l)}var KM=ae.createElement($M,null),Ey=class extends ae.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,e){return e.location!==r.location||e.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error!==void 0?r.error:e.error,location:e.location,revalidation:r.revalidation||e.revalidation}}componentDidCatch(r,e){this.props.onError?this.props.onError(r,e):console.error("React Router caught the following error during render",r)}render(){let r=this.state.error;if(this.context&&typeof r=="object"&&r&&"digest"in r&&typeof r.digest=="string"){const t=WM(r.digest);t&&(r=t)}let e=r!==void 0?ae.createElement(Ar.Provider,{value:this.props.routeContext},ae.createElement(Lp.Provider,{value:r,children:this.props.component})):this.props.children;return this.context?ae.createElement(qM,{error:r},e):e}};Ey.contextType=kM;var bd=new WeakMap;function qM({children:r,error:e}){let{basename:t}=ae.useContext(vi);if(typeof e=="object"&&e&&"digest"in e&&typeof e.digest=="string"){let n=GM(e.digest);if(n){let s=bd.get(e);if(s)throw s;let o=py(n.location,t);if(hy&&!bd.get(e))if(o.isExternal||n.reloadDocument)window.location.href=o.absoluteURL||o.to;else{const l=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(o.to,{replace:n.replace}));throw bd.set(e,l),l}return ae.createElement("meta",{httpEquiv:"refresh",content:`0;url=${o.absoluteURL||o.to}`})}}return r}function ZM({routeContext:r,match:e,children:t}){let n=ae.useContext(Qa);return n&&n.static&&n.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(n.staticContext._deepestRenderedBoundaryId=e.route.id),ae.createElement(Ar.Provider,{value:r},t)}function JM(r,e=[],t=null,n=null,s=null){if(r==null){if(!t)return null;if(t.errors)r=t.matches;else if(e.length===0&&!t.initialized&&t.matches.length>0)r=t.matches;else return null}let o=r,l=t?.errors;if(l!=null){let p=o.findIndex(m=>m.route.id&&l?.[m.route.id]!==void 0);Qt(p>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(l).join(",")}`),o=o.slice(0,Math.min(o.length,p+1))}let c=!1,f=-1;if(t)for(let p=0;p<o.length;p++){let m=o[p];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(f=p),m.route.id){let{loaderData:v,errors:y}=t,E=m.route.loader&&!v.hasOwnProperty(m.route.id)&&(!y||y[m.route.id]===void 0);if(m.route.lazy||E){c=!0,f>=0?o=o.slice(0,f+1):o=[o[0]];break}}}let d=t&&n?(p,m)=>{n(p,{location:t.location,params:t.matches?.[0]?.params??{},unstable_pattern:FM(t.matches),errorInfo:m})}:void 0;return o.reduceRight((p,m,v)=>{let y,E=!1,M=null,S=null;t&&(y=l&&m.route.id?l[m.route.id]:void 0,M=m.route.errorElement||KM,c&&(f<0&&v===0?(My("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),E=!0,S=null):f===v&&(E=!0,S=m.route.hydrateFallbackElement||null)));let _=e.concat(o.slice(0,v+1)),R=()=>{let C;return y?C=M:E?C=S:m.route.Component?C=ae.createElement(m.route.Component,null):m.route.element?C=m.route.element:C=p,ae.createElement(ZM,{match:m,routeContext:{outlet:p,matches:_,isDataRoute:t!=null},children:C})};return t&&(m.route.ErrorBoundary||m.route.errorElement||v===0)?ae.createElement(Ey,{location:t.location,revalidation:t.revalidation,component:M,error:y,children:R(),routeContext:{outlet:null,matches:_,isDataRoute:!0},onError:d}):R()},null)}function Ip(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function QM(r){let e=ae.useContext(Qa);return Qt(e,Ip(r)),e}function e1(r){let e=ae.useContext(Lc);return Qt(e,Ip(r)),e}function t1(r){let e=ae.useContext(Ar);return Qt(e,Ip(r)),e}function Dp(r){let e=t1(r),t=e.matches[e.matches.length-1];return Qt(t.route.id,`${r} can only be used on routes that contain a unique "id"`),t.route.id}function n1(){return Dp("useRouteId")}function i1(){let r=ae.useContext(Lp),e=e1("useRouteError"),t=Dp("useRouteError");return r!==void 0?r:e.errors?.[t]}function r1(){let{router:r}=QM("useNavigate"),e=Dp("useNavigate"),t=ae.useRef(!1);return yy(()=>{t.current=!0}),ae.useCallback(async(s,o={})=>{Ni(t.current,_y),t.current&&(typeof s=="number"?await r.navigate(s):await r.navigate(s,{fromRouteId:e,...o}))},[r,e])}var Qv={};function My(r,e,t){!e&&!Qv[r]&&(Qv[r]=!0,Ni(!1,t))}ae.memo(s1);function s1({routes:r,future:e,state:t,onError:n}){return Sy(r,void 0,t,n,e)}function Da(r){Qt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function a1({basename:r="/",children:e=null,location:t,navigationType:n="POP",navigator:s,static:o=!1,unstable_useTransitions:l}){Qt(!gl(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let c=r.replace(/^\/*/,"/"),f=ae.useMemo(()=>({basename:c,navigator:s,static:o,unstable_useTransitions:l,future:{}}),[c,s,o,l]);typeof t=="string"&&(t=Ja(t));let{pathname:d="/",search:p="",hash:m="",state:v=null,key:y="default"}=t,E=ae.useMemo(()=>{let M=Er(d,c);return M==null?null:{location:{pathname:M,search:p,hash:m,state:v,key:y},navigationType:n}},[c,d,p,m,v,y,n]);return Ni(E!=null,`<Router basename="${c}"> is not able to match the URL "${d}${p}${m}" because it does not start with the basename, so the <Router> won't render anything.`),E==null?null:ae.createElement(vi.Provider,{value:f},ae.createElement(ml.Provider,{children:e,value:E}))}function o1({children:r,location:e}){return YM(Sh(r),e)}function Sh(r,e=[]){let t=[];return ae.Children.forEach(r,(n,s)=>{if(!ae.isValidElement(n))return;let o=[...e,s];if(n.type===ae.Fragment){t.push.apply(t,Sh(n.props.children,o));return}Qt(n.type===Da,`[${typeof n.type=="string"?n.type:n.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Qt(!n.props.index||!n.props.children,"An index route cannot have child routes.");let l={id:n.props.id||o.join("-"),caseSensitive:n.props.caseSensitive,element:n.props.element,Component:n.props.Component,index:n.props.index,path:n.props.path,middleware:n.props.middleware,loader:n.props.loader,action:n.props.action,hydrateFallbackElement:n.props.hydrateFallbackElement,HydrateFallback:n.props.HydrateFallback,errorElement:n.props.errorElement,ErrorBoundary:n.props.ErrorBoundary,hasErrorBoundary:n.props.hasErrorBoundary===!0||n.props.ErrorBoundary!=null||n.props.errorElement!=null,shouldRevalidate:n.props.shouldRevalidate,handle:n.props.handle,lazy:n.props.lazy};n.props.children&&(l.children=Sh(n.props.children,o)),t.push(l)}),t}var cc="get",fc="application/x-www-form-urlencoded";function Ic(r){return typeof HTMLElement<"u"&&r instanceof HTMLElement}function l1(r){return Ic(r)&&r.tagName.toLowerCase()==="button"}function u1(r){return Ic(r)&&r.tagName.toLowerCase()==="form"}function c1(r){return Ic(r)&&r.tagName.toLowerCase()==="input"}function f1(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function d1(r,e){return r.button===0&&(!e||e==="_self")&&!f1(r)}var Iu=null;function h1(){if(Iu===null)try{new FormData(document.createElement("form"),0),Iu=!1}catch{Iu=!0}return Iu}var p1=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Ad(r){return r!=null&&!p1.has(r)?(Ni(!1,`"${r}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${fc}"`),null):r}function m1(r,e){let t,n,s,o,l;if(u1(r)){let c=r.getAttribute("action");n=c?Er(c,e):null,t=r.getAttribute("method")||cc,s=Ad(r.getAttribute("enctype"))||fc,o=new FormData(r)}else if(l1(r)||c1(r)&&(r.type==="submit"||r.type==="image")){let c=r.form;if(c==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let f=r.getAttribute("formaction")||c.getAttribute("action");if(n=f?Er(f,e):null,t=r.getAttribute("formmethod")||c.getAttribute("method")||cc,s=Ad(r.getAttribute("formenctype"))||Ad(c.getAttribute("enctype"))||fc,o=new FormData(c,r),!h1()){let{name:d,type:p,value:m}=r;if(p==="image"){let v=d?`${d}.`:"";o.append(`${v}x`,"0"),o.append(`${v}y`,"0")}else d&&o.append(d,m)}}else{if(Ic(r))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');t=cc,n=null,s=fc,l=r}return o&&s==="text/plain"&&(l=o,o=void 0),{action:n,method:t.toLowerCase(),encType:s,formData:o,body:l}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Np(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}function g1(r,e,t){let n=typeof r=="string"?new URL(r,typeof window>"u"?"server://singlefetch/":window.location.origin):r;return n.pathname==="/"?n.pathname=`_root.${t}`:e&&Er(n.pathname,e)==="/"?n.pathname=`${e.replace(/\/$/,"")}/_root.${t}`:n.pathname=`${n.pathname.replace(/\/$/,"")}.${t}`,n}async function v1(r,e){if(r.id in e)return e[r.id];try{let t=await import(r.module);return e[r.id]=t,t}catch(t){return console.error(`Error loading route module \`${r.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function _1(r){return r==null?!1:r.href==null?r.rel==="preload"&&typeof r.imageSrcSet=="string"&&typeof r.imageSizes=="string":typeof r.rel=="string"&&typeof r.href=="string"}async function y1(r,e,t){let n=await Promise.all(r.map(async s=>{let o=e.routes[s.route.id];if(o){let l=await v1(o,t);return l.links?l.links():[]}return[]}));return M1(n.flat(1).filter(_1).filter(s=>s.rel==="stylesheet"||s.rel==="preload").map(s=>s.rel==="stylesheet"?{...s,rel:"prefetch",as:"style"}:{...s,rel:"prefetch"}))}function e0(r,e,t,n,s,o){let l=(f,d)=>t[d]?f.route.id!==t[d].route.id:!0,c=(f,d)=>t[d].pathname!==f.pathname||t[d].route.path?.endsWith("*")&&t[d].params["*"]!==f.params["*"];return o==="assets"?e.filter((f,d)=>l(f,d)||c(f,d)):o==="data"?e.filter((f,d)=>{let p=n.routes[f.route.id];if(!p||!p.hasLoader)return!1;if(l(f,d)||c(f,d))return!0;if(f.route.shouldRevalidate){let m=f.route.shouldRevalidate({currentUrl:new URL(s.pathname+s.search+s.hash,window.origin),currentParams:t[0]?.params||{},nextUrl:new URL(r,window.origin),nextParams:f.params,defaultShouldRevalidate:!0});if(typeof m=="boolean")return m}return!0}):[]}function x1(r,e,{includeHydrateFallback:t}={}){return S1(r.map(n=>{let s=e.routes[n.route.id];if(!s)return[];let o=[s.module];return s.clientActionModule&&(o=o.concat(s.clientActionModule)),s.clientLoaderModule&&(o=o.concat(s.clientLoaderModule)),t&&s.hydrateFallbackModule&&(o=o.concat(s.hydrateFallbackModule)),s.imports&&(o=o.concat(s.imports)),o}).flat(1))}function S1(r){return[...new Set(r)]}function E1(r){let e={},t=Object.keys(r).sort();for(let n of t)e[n]=r[n];return e}function M1(r,e){let t=new Set;return new Set(e),r.reduce((n,s)=>{let o=JSON.stringify(E1(s));return t.has(o)||(t.add(o),n.push({key:o,link:s})),n},[])}function Ty(){let r=ae.useContext(Qa);return Np(r,"You must render this element inside a <DataRouterContext.Provider> element"),r}function T1(){let r=ae.useContext(Lc);return Np(r,"You must render this element inside a <DataRouterStateContext.Provider> element"),r}var Up=ae.createContext(void 0);Up.displayName="FrameworkContext";function wy(){let r=ae.useContext(Up);return Np(r,"You must render this element inside a <HydratedRouter> element"),r}function w1(r,e){let t=ae.useContext(Up),[n,s]=ae.useState(!1),[o,l]=ae.useState(!1),{onFocus:c,onBlur:f,onMouseEnter:d,onMouseLeave:p,onTouchStart:m}=e,v=ae.useRef(null);ae.useEffect(()=>{if(r==="render"&&l(!0),r==="viewport"){let M=_=>{_.forEach(R=>{l(R.isIntersecting)})},S=new IntersectionObserver(M,{threshold:.5});return v.current&&S.observe(v.current),()=>{S.disconnect()}}},[r]),ae.useEffect(()=>{if(n){let M=setTimeout(()=>{l(!0)},100);return()=>{clearTimeout(M)}}},[n]);let y=()=>{s(!0)},E=()=>{s(!1),l(!1)};return t?r!=="intent"?[o,v,{}]:[o,v,{onFocus:Bo(c,y),onBlur:Bo(f,E),onMouseEnter:Bo(d,y),onMouseLeave:Bo(p,E),onTouchStart:Bo(m,y)}]:[!1,v,{}]}function Bo(r,e){return t=>{r&&r(t),t.defaultPrevented||e(t)}}function b1({page:r,...e}){let{router:t}=Ty(),n=ae.useMemo(()=>oy(t.routes,r,t.basename),[t.routes,r,t.basename]);return n?ae.createElement(R1,{page:r,matches:n,...e}):null}function A1(r){let{manifest:e,routeModules:t}=wy(),[n,s]=ae.useState([]);return ae.useEffect(()=>{let o=!1;return y1(r,e,t).then(l=>{o||s(l)}),()=>{o=!0}},[r,e,t]),n}function R1({page:r,matches:e,...t}){let n=cs(),{manifest:s,routeModules:o}=wy(),{basename:l}=Ty(),{loaderData:c,matches:f}=T1(),d=ae.useMemo(()=>e0(r,e,f,s,n,"data"),[r,e,f,s,n]),p=ae.useMemo(()=>e0(r,e,f,s,n,"assets"),[r,e,f,s,n]),m=ae.useMemo(()=>{if(r===n.pathname+n.search+n.hash)return[];let E=new Set,M=!1;if(e.forEach(_=>{let R=s.routes[_.route.id];!R||!R.hasLoader||(!d.some(C=>C.route.id===_.route.id)&&_.route.id in c&&o[_.route.id]?.shouldRevalidate||R.hasClientLoader?M=!0:E.add(_.route.id))}),E.size===0)return[];let S=g1(r,l,"data");return M&&E.size>0&&S.searchParams.set("_routes",e.filter(_=>E.has(_.route.id)).map(_=>_.route.id).join(",")),[S.pathname+S.search]},[l,c,n,s,d,e,r,o]),v=ae.useMemo(()=>x1(p,s),[p,s]),y=A1(p);return ae.createElement(ae.Fragment,null,m.map(E=>ae.createElement("link",{key:E,rel:"prefetch",as:"fetch",href:E,...t})),v.map(E=>ae.createElement("link",{key:E,rel:"modulepreload",href:E,...t})),y.map(({key:E,link:M})=>ae.createElement("link",{key:E,nonce:t.nonce,...M})))}function C1(...r){return e=>{r.forEach(t=>{typeof t=="function"?t(e):t!=null&&(t.current=e)})}}var P1=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{P1&&(window.__reactRouterVersion="7.11.0")}catch{}function L1({basename:r,children:e,unstable_useTransitions:t,window:n}){let s=ae.useRef();s.current==null&&(s.current=fM({window:n,v5Compat:!0}));let o=s.current,[l,c]=ae.useState({action:o.action,location:o.location}),f=ae.useCallback(d=>{t===!1?c(d):ae.startTransition(()=>c(d))},[t]);return ae.useLayoutEffect(()=>o.listen(f),[o,f]),ae.createElement(a1,{basename:r,children:e,location:l.location,navigationType:l.action,navigator:o,unstable_useTransitions:t})}var by=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Fp=ae.forwardRef(function({onClick:e,discover:t="render",prefetch:n="none",relative:s,reloadDocument:o,replace:l,state:c,target:f,to:d,preventScrollReset:p,viewTransition:m,unstable_defaultShouldRevalidate:v,...y},E){let{basename:M,unstable_useTransitions:S}=ae.useContext(vi),_=typeof d=="string"&&by.test(d),R=py(d,M);d=R.to;let C=jM(d,{relative:s}),[b,I,U]=w1(n,y),F=U1(d,{replace:l,state:c,target:f,preventScrollReset:p,relative:s,viewTransition:m,unstable_defaultShouldRevalidate:v,unstable_useTransitions:S});function X(L){e&&e(L),L.defaultPrevented||F(L)}let P=ae.createElement("a",{...y,...U,href:R.absoluteURL||C,onClick:R.isExternal||o?e:X,ref:C1(E,I),target:f,"data-discover":!_&&t==="render"?"true":void 0});return b&&!_?ae.createElement(ae.Fragment,null,P,ae.createElement(b1,{page:C})):P});Fp.displayName="Link";var I1=ae.forwardRef(function({"aria-current":e="page",caseSensitive:t=!1,className:n="",end:s=!1,style:o,to:l,viewTransition:c,children:f,...d},p){let m=vl(l,{relative:d.relative}),v=cs(),y=ae.useContext(Lc),{navigator:E,basename:M}=ae.useContext(vi),S=y!=null&&z1(m)&&c===!0,_=E.encodeLocation?E.encodeLocation(m).pathname:m.pathname,R=v.pathname,C=y&&y.navigation&&y.navigation.location?y.navigation.location.pathname:null;t||(R=R.toLowerCase(),C=C?C.toLowerCase():null,_=_.toLowerCase()),C&&M&&(C=Er(C,M)||C);const b=_!=="/"&&_.endsWith("/")?_.length-1:_.length;let I=R===_||!s&&R.startsWith(_)&&R.charAt(b)==="/",U=C!=null&&(C===_||!s&&C.startsWith(_)&&C.charAt(_.length)==="/"),F={isActive:I,isPending:U,isTransitioning:S},X=I?e:void 0,P;typeof n=="function"?P=n(F):P=[n,I?"active":null,U?"pending":null,S?"transitioning":null].filter(Boolean).join(" ");let L=typeof o=="function"?o(F):o;return ae.createElement(Fp,{...d,"aria-current":X,className:P,ref:p,style:L,to:l,viewTransition:c},typeof f=="function"?f(F):f)});I1.displayName="NavLink";var D1=ae.forwardRef(({discover:r="render",fetcherKey:e,navigate:t,reloadDocument:n,replace:s,state:o,method:l=cc,action:c,onSubmit:f,relative:d,preventScrollReset:p,viewTransition:m,unstable_defaultShouldRevalidate:v,...y},E)=>{let{unstable_useTransitions:M}=ae.useContext(vi),S=k1(),_=B1(c,{relative:d}),R=l.toLowerCase()==="get"?"get":"post",C=typeof c=="string"&&by.test(c),b=I=>{if(f&&f(I),I.defaultPrevented)return;I.preventDefault();let U=I.nativeEvent.submitter,F=U?.getAttribute("formmethod")||l,X=()=>S(U||I.currentTarget,{fetcherKey:e,method:F,navigate:t,replace:s,state:o,relative:d,preventScrollReset:p,viewTransition:m,unstable_defaultShouldRevalidate:v});M&&t!==!1?ae.startTransition(()=>X()):X()};return ae.createElement("form",{ref:E,method:R,action:_,onSubmit:n?f:b,...y,"data-discover":!C&&r==="render"?"true":void 0})});D1.displayName="Form";function N1(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Ay(r){let e=ae.useContext(Qa);return Qt(e,N1(r)),e}function U1(r,{target:e,replace:t,state:n,preventScrollReset:s,relative:o,viewTransition:l,unstable_defaultShouldRevalidate:c,unstable_useTransitions:f}={}){let d=xy(),p=cs(),m=vl(r,{relative:o});return ae.useCallback(v=>{if(d1(v,e)){v.preventDefault();let y=t!==void 0?t:rl(p)===rl(m),E=()=>d(r,{replace:y,state:n,preventScrollReset:s,relative:o,viewTransition:l,unstable_defaultShouldRevalidate:c});f?ae.startTransition(()=>E()):E()}},[p,d,m,t,n,e,r,s,o,l,c,f])}var F1=0,O1=()=>`__${String(++F1)}__`;function k1(){let{router:r}=Ay("useSubmit"),{basename:e}=ae.useContext(vi),t=n1(),n=r.fetch,s=r.navigate;return ae.useCallback(async(o,l={})=>{let{action:c,method:f,encType:d,formData:p,body:m}=m1(o,e);if(l.navigate===!1){let v=l.fetcherKey||O1();await n(v,t,l.action||c,{unstable_defaultShouldRevalidate:l.unstable_defaultShouldRevalidate,preventScrollReset:l.preventScrollReset,formData:p,body:m,formMethod:l.method||f,formEncType:l.encType||d,flushSync:l.flushSync})}else await s(l.action||c,{unstable_defaultShouldRevalidate:l.unstable_defaultShouldRevalidate,preventScrollReset:l.preventScrollReset,formData:p,body:m,formMethod:l.method||f,formEncType:l.encType||d,replace:l.replace,state:l.state,fromRouteId:t,flushSync:l.flushSync,viewTransition:l.viewTransition})},[n,s,e,t])}function B1(r,{relative:e}={}){let{basename:t}=ae.useContext(vi),n=ae.useContext(Ar);Qt(n,"useFormAction must be used inside a RouteContext");let[s]=n.matches.slice(-1),o={...vl(r||".",{relative:e})},l=cs();if(r==null){o.search=l.search;let c=new URLSearchParams(o.search),f=c.getAll("index");if(f.some(p=>p==="")){c.delete("index"),f.filter(m=>m).forEach(m=>c.append("index",m));let p=c.toString();o.search=p?`?${p}`:""}}return(!r||r===".")&&s.route.index&&(o.search=o.search?o.search.replace(/^\?/,"?index&"):"?index"),t!=="/"&&(o.pathname=o.pathname==="/"?t:xr([t,o.pathname])),rl(o)}function z1(r,{relative:e}={}){let t=ae.useContext(gy);Qt(t!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:n}=Ay("useViewTransitionState"),s=vl(r,{relative:e});if(!t.isTransitioning)return!1;let o=Er(t.currentLocation.pathname,n)||t.currentLocation.pathname,l=Er(t.nextLocation.pathname,n)||t.nextLocation.pathname;return Sc(s.pathname,l)!=null||Sc(s.pathname,o)!=null}const Op="180",Oa={ROTATE:0,DOLLY:1,PAN:2},Na={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},H1=0,t0=1,V1=2,Ry=1,G1=2,vr=3,Mr=0,zn=1,Gi=2,ss=0,ka=1,n0=2,i0=3,r0=4,W1=5,Ns=100,j1=101,X1=102,Y1=103,$1=104,K1=200,q1=201,Z1=202,J1=203,Eh=204,Mh=205,Q1=206,eT=207,tT=208,nT=209,iT=210,rT=211,sT=212,aT=213,oT=214,Th=0,wh=1,bh=2,Va=3,Ah=4,Rh=5,Ch=6,Ph=7,Cy=0,lT=1,uT=2,as=0,cT=1,fT=2,dT=3,hT=4,pT=5,mT=6,gT=7,s0="attached",vT="detached",Py=300,Ga=301,Wa=302,Lh=303,Ih=304,Dc=306,ja=1e3,rs=1001,Ec=1002,Hn=1003,Ly=1004,Ko=1005,ri=1006,dc=1007,_r=1008,Yi=1009,Iy=1010,Dy=1011,sl=1012,kp=1013,Bs=1014,Li=1015,_l=1016,Bp=1017,zp=1018,al=1020,Ny=35902,Uy=35899,Fy=1021,Oy=1022,mi=1023,ol=1026,ll=1027,Hp=1028,Vp=1029,ky=1030,Gp=1031,Wp=1033,hc=33776,pc=33777,mc=33778,gc=33779,Dh=35840,Nh=35841,Uh=35842,Fh=35843,Oh=36196,kh=37492,Bh=37496,zh=37808,Hh=37809,Vh=37810,Gh=37811,Wh=37812,jh=37813,Xh=37814,Yh=37815,$h=37816,Kh=37817,qh=37818,Zh=37819,Jh=37820,Qh=37821,ep=36492,tp=36494,np=36495,ip=36283,rp=36284,sp=36285,ap=36286,ul=2300,cl=2301,Rd=2302,a0=2400,o0=2401,l0=2402,_T=2500,yT=0,By=1,op=2,xT=3200,ST=3201,zy=0,ET=1,is="",Sn="srgb",Vn="srgb-linear",Mc="linear",Bt="srgb",ma=7680,u0=519,MT=512,TT=513,wT=514,Hy=515,bT=516,AT=517,RT=518,CT=519,lp=35044,c0="300 es",Wi=2e3,Tc=2001;class Gs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const o=s.indexOf(t);o!==-1&&s.splice(o,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let o=0,l=s.length;o<l;o++)s[o].call(this,e);e.target=null}}}const Pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let f0=1234567;const Jo=Math.PI/180,Xa=180/Math.PI;function Di(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Pn[r&255]+Pn[r>>8&255]+Pn[r>>16&255]+Pn[r>>24&255]+"-"+Pn[e&255]+Pn[e>>8&255]+"-"+Pn[e>>16&15|64]+Pn[e>>24&255]+"-"+Pn[t&63|128]+Pn[t>>8&255]+"-"+Pn[t>>16&255]+Pn[t>>24&255]+Pn[n&255]+Pn[n>>8&255]+Pn[n>>16&255]+Pn[n>>24&255]).toLowerCase()}function St(r,e,t){return Math.max(e,Math.min(t,r))}function jp(r,e){return(r%e+e)%e}function PT(r,e,t,n,s){return n+(r-e)*(s-n)/(t-e)}function LT(r,e,t){return r!==e?(t-r)/(e-r):0}function Qo(r,e,t){return(1-t)*r+t*e}function IT(r,e,t,n){return Qo(r,e,1-Math.exp(-t*n))}function DT(r,e=1){return e-Math.abs(jp(r,e*2)-e)}function NT(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function UT(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function FT(r,e){return r+Math.floor(Math.random()*(e-r+1))}function OT(r,e){return r+Math.random()*(e-r)}function kT(r){return r*(.5-Math.random())}function BT(r){r!==void 0&&(f0=r);let e=f0+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function zT(r){return r*Jo}function HT(r){return r*Xa}function VT(r){return(r&r-1)===0&&r!==0}function GT(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function WT(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function jT(r,e,t,n,s){const o=Math.cos,l=Math.sin,c=o(t/2),f=l(t/2),d=o((e+n)/2),p=l((e+n)/2),m=o((e-n)/2),v=l((e-n)/2),y=o((n-e)/2),E=l((n-e)/2);switch(s){case"XYX":r.set(c*p,f*m,f*v,c*d);break;case"YZY":r.set(f*v,c*p,f*m,c*d);break;case"ZXZ":r.set(f*m,f*v,c*p,c*d);break;case"XZX":r.set(c*p,f*E,f*y,c*d);break;case"YXY":r.set(f*y,c*p,f*E,c*d);break;case"ZYZ":r.set(f*E,f*y,c*p,c*d);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ci(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Ut(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Vy={DEG2RAD:Jo,RAD2DEG:Xa,generateUUID:Di,clamp:St,euclideanModulo:jp,mapLinear:PT,inverseLerp:LT,lerp:Qo,damp:IT,pingpong:DT,smoothstep:NT,smootherstep:UT,randInt:FT,randFloat:OT,randFloatSpread:kT,seededRandom:BT,degToRad:zT,radToDeg:HT,isPowerOfTwo:VT,ceilPowerOfTwo:GT,floorPowerOfTwo:WT,setQuaternionFromProperEuler:jT,normalize:Ut,denormalize:Ci};class dt{constructor(e=0,t=0){dt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=St(this.x,e.x,t.x),this.y=St(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=St(this.x,e,t),this.y=St(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(St(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(St(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),o=this.x-e.x,l=this.y-e.y;return this.x=o*n-l*s+e.x,this.y=o*s+l*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class $i{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,o,l,c){let f=n[s+0],d=n[s+1],p=n[s+2],m=n[s+3];const v=o[l+0],y=o[l+1],E=o[l+2],M=o[l+3];if(c===0){e[t+0]=f,e[t+1]=d,e[t+2]=p,e[t+3]=m;return}if(c===1){e[t+0]=v,e[t+1]=y,e[t+2]=E,e[t+3]=M;return}if(m!==M||f!==v||d!==y||p!==E){let S=1-c;const _=f*v+d*y+p*E+m*M,R=_>=0?1:-1,C=1-_*_;if(C>Number.EPSILON){const I=Math.sqrt(C),U=Math.atan2(I,_*R);S=Math.sin(S*U)/I,c=Math.sin(c*U)/I}const b=c*R;if(f=f*S+v*b,d=d*S+y*b,p=p*S+E*b,m=m*S+M*b,S===1-c){const I=1/Math.sqrt(f*f+d*d+p*p+m*m);f*=I,d*=I,p*=I,m*=I}}e[t]=f,e[t+1]=d,e[t+2]=p,e[t+3]=m}static multiplyQuaternionsFlat(e,t,n,s,o,l){const c=n[s],f=n[s+1],d=n[s+2],p=n[s+3],m=o[l],v=o[l+1],y=o[l+2],E=o[l+3];return e[t]=c*E+p*m+f*y-d*v,e[t+1]=f*E+p*v+d*m-c*y,e[t+2]=d*E+p*y+c*v-f*m,e[t+3]=p*E-c*m-f*v-d*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,o=e._z,l=e._order,c=Math.cos,f=Math.sin,d=c(n/2),p=c(s/2),m=c(o/2),v=f(n/2),y=f(s/2),E=f(o/2);switch(l){case"XYZ":this._x=v*p*m+d*y*E,this._y=d*y*m-v*p*E,this._z=d*p*E+v*y*m,this._w=d*p*m-v*y*E;break;case"YXZ":this._x=v*p*m+d*y*E,this._y=d*y*m-v*p*E,this._z=d*p*E-v*y*m,this._w=d*p*m+v*y*E;break;case"ZXY":this._x=v*p*m-d*y*E,this._y=d*y*m+v*p*E,this._z=d*p*E+v*y*m,this._w=d*p*m-v*y*E;break;case"ZYX":this._x=v*p*m-d*y*E,this._y=d*y*m+v*p*E,this._z=d*p*E-v*y*m,this._w=d*p*m+v*y*E;break;case"YZX":this._x=v*p*m+d*y*E,this._y=d*y*m+v*p*E,this._z=d*p*E-v*y*m,this._w=d*p*m-v*y*E;break;case"XZY":this._x=v*p*m-d*y*E,this._y=d*y*m-v*p*E,this._z=d*p*E+v*y*m,this._w=d*p*m+v*y*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+l)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],o=t[8],l=t[1],c=t[5],f=t[9],d=t[2],p=t[6],m=t[10],v=n+c+m;if(v>0){const y=.5/Math.sqrt(v+1);this._w=.25/y,this._x=(p-f)*y,this._y=(o-d)*y,this._z=(l-s)*y}else if(n>c&&n>m){const y=2*Math.sqrt(1+n-c-m);this._w=(p-f)/y,this._x=.25*y,this._y=(s+l)/y,this._z=(o+d)/y}else if(c>m){const y=2*Math.sqrt(1+c-n-m);this._w=(o-d)/y,this._x=(s+l)/y,this._y=.25*y,this._z=(f+p)/y}else{const y=2*Math.sqrt(1+m-n-c);this._w=(l-s)/y,this._x=(o+d)/y,this._y=(f+p)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(St(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,o=e._z,l=e._w,c=t._x,f=t._y,d=t._z,p=t._w;return this._x=n*p+l*c+s*d-o*f,this._y=s*p+l*f+o*c-n*d,this._z=o*p+l*d+n*f-s*c,this._w=l*p-n*c-s*f-o*d,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,o=this._z,l=this._w;let c=l*e._w+n*e._x+s*e._y+o*e._z;if(c<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,c=-c):this.copy(e),c>=1)return this._w=l,this._x=n,this._y=s,this._z=o,this;const f=1-c*c;if(f<=Number.EPSILON){const y=1-t;return this._w=y*l+t*this._w,this._x=y*n+t*this._x,this._y=y*s+t*this._y,this._z=y*o+t*this._z,this.normalize(),this}const d=Math.sqrt(f),p=Math.atan2(d,c),m=Math.sin((1-t)*p)/d,v=Math.sin(t*p)/d;return this._w=l*m+this._w*v,this._x=n*m+this._x*v,this._y=s*m+this._y*v,this._z=o*m+this._z*v,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),o=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),o*Math.sin(t),o*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class j{constructor(e=0,t=0,n=0){j.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(d0.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(d0.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,o=e.elements;return this.x=o[0]*t+o[3]*n+o[6]*s,this.y=o[1]*t+o[4]*n+o[7]*s,this.z=o[2]*t+o[5]*n+o[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,o=e.elements,l=1/(o[3]*t+o[7]*n+o[11]*s+o[15]);return this.x=(o[0]*t+o[4]*n+o[8]*s+o[12])*l,this.y=(o[1]*t+o[5]*n+o[9]*s+o[13])*l,this.z=(o[2]*t+o[6]*n+o[10]*s+o[14])*l,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,o=e.x,l=e.y,c=e.z,f=e.w,d=2*(l*s-c*n),p=2*(c*t-o*s),m=2*(o*n-l*t);return this.x=t+f*d+l*m-c*p,this.y=n+f*p+c*d-o*m,this.z=s+f*m+o*p-l*d,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s,this.y=o[1]*t+o[5]*n+o[9]*s,this.z=o[2]*t+o[6]*n+o[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=St(this.x,e.x,t.x),this.y=St(this.y,e.y,t.y),this.z=St(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=St(this.x,e,t),this.y=St(this.y,e,t),this.z=St(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(St(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,o=e.z,l=t.x,c=t.y,f=t.z;return this.x=s*f-o*c,this.y=o*l-n*f,this.z=n*c-s*l,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Cd.copy(this).projectOnVector(e),this.sub(Cd)}reflect(e){return this.sub(Cd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(St(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Cd=new j,d0=new $i;class vt{constructor(e,t,n,s,o,l,c,f,d){vt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,o,l,c,f,d)}set(e,t,n,s,o,l,c,f,d){const p=this.elements;return p[0]=e,p[1]=s,p[2]=c,p[3]=t,p[4]=o,p[5]=f,p[6]=n,p[7]=l,p[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,o=this.elements,l=n[0],c=n[3],f=n[6],d=n[1],p=n[4],m=n[7],v=n[2],y=n[5],E=n[8],M=s[0],S=s[3],_=s[6],R=s[1],C=s[4],b=s[7],I=s[2],U=s[5],F=s[8];return o[0]=l*M+c*R+f*I,o[3]=l*S+c*C+f*U,o[6]=l*_+c*b+f*F,o[1]=d*M+p*R+m*I,o[4]=d*S+p*C+m*U,o[7]=d*_+p*b+m*F,o[2]=v*M+y*R+E*I,o[5]=v*S+y*C+E*U,o[8]=v*_+y*b+E*F,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],o=e[3],l=e[4],c=e[5],f=e[6],d=e[7],p=e[8];return t*l*p-t*c*d-n*o*p+n*c*f+s*o*d-s*l*f}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],o=e[3],l=e[4],c=e[5],f=e[6],d=e[7],p=e[8],m=p*l-c*d,v=c*f-p*o,y=d*o-l*f,E=t*m+n*v+s*y;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/E;return e[0]=m*M,e[1]=(s*d-p*n)*M,e[2]=(c*n-s*l)*M,e[3]=v*M,e[4]=(p*t-s*f)*M,e[5]=(s*o-c*t)*M,e[6]=y*M,e[7]=(n*f-d*t)*M,e[8]=(l*t-n*o)*M,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,o,l,c){const f=Math.cos(o),d=Math.sin(o);return this.set(n*f,n*d,-n*(f*l+d*c)+l+e,-s*d,s*f,-s*(-d*l+f*c)+c+t,0,0,1),this}scale(e,t){return this.premultiply(Pd.makeScale(e,t)),this}rotate(e){return this.premultiply(Pd.makeRotation(-e)),this}translate(e,t){return this.premultiply(Pd.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Pd=new vt;function Gy(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function fl(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function XT(){const r=fl("canvas");return r.style.display="block",r}const h0={};function dl(r){r in h0||(h0[r]=!0,console.warn(r))}function YT(r,e,t){return new Promise(function(n,s){function o(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:s();break;case r.TIMEOUT_EXPIRED:setTimeout(o,t);break;default:n()}}setTimeout(o,t)})}const p0=new vt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),m0=new vt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function $T(){const r={enabled:!0,workingColorSpace:Vn,spaces:{},convert:function(s,o,l){return this.enabled===!1||o===l||!o||!l||(this.spaces[o].transfer===Bt&&(s.r=Sr(s.r),s.g=Sr(s.g),s.b=Sr(s.b)),this.spaces[o].primaries!==this.spaces[l].primaries&&(s.applyMatrix3(this.spaces[o].toXYZ),s.applyMatrix3(this.spaces[l].fromXYZ)),this.spaces[l].transfer===Bt&&(s.r=Ba(s.r),s.g=Ba(s.g),s.b=Ba(s.b))),s},workingToColorSpace:function(s,o){return this.convert(s,this.workingColorSpace,o)},colorSpaceToWorking:function(s,o){return this.convert(s,o,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===is?Mc:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,o=this.workingColorSpace){return s.fromArray(this.spaces[o].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,o,l){return s.copy(this.spaces[o].toXYZ).multiply(this.spaces[l].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,o){return dl("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(s,o)},toWorkingColorSpace:function(s,o){return dl("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(s,o)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[Vn]:{primaries:e,whitePoint:n,transfer:Mc,toXYZ:p0,fromXYZ:m0,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Sn},outputColorSpaceConfig:{drawingBufferColorSpace:Sn}},[Sn]:{primaries:e,whitePoint:n,transfer:Bt,toXYZ:p0,fromXYZ:m0,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Sn}}}),r}const Rt=$T();function Sr(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Ba(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let ga;class KT{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ga===void 0&&(ga=fl("canvas")),ga.width=e.width,ga.height=e.height;const s=ga.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=ga}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=fl("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),o=s.data;for(let l=0;l<o.length;l++)o[l]=Sr(o[l]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Sr(t[n]/255)*255):t[n]=Sr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let qT=0;class Xp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:qT++}),this.uuid=Di(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let o;if(Array.isArray(s)){o=[];for(let l=0,c=s.length;l<c;l++)s[l].isDataTexture?o.push(Ld(s[l].image)):o.push(Ld(s[l]))}else o=Ld(s);n.url=o}return t||(e.images[this.uuid]=n),n}}function Ld(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?KT.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ZT=0;const Id=new j;class _n extends Gs{constructor(e=_n.DEFAULT_IMAGE,t=_n.DEFAULT_MAPPING,n=rs,s=rs,o=ri,l=_r,c=mi,f=Yi,d=_n.DEFAULT_ANISOTROPY,p=is){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ZT++}),this.uuid=Di(),this.name="",this.source=new Xp(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=o,this.minFilter=l,this.anisotropy=d,this.format=c,this.internalFormat=null,this.type=f,this.offset=new dt(0,0),this.repeat=new dt(1,1),this.center=new dt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new vt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=p,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Id).x}get height(){return this.source.getSize(Id).y}get depth(){return this.source.getSize(Id).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Py)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ja:e.x=e.x-Math.floor(e.x);break;case rs:e.x=e.x<0?0:1;break;case Ec:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ja:e.y=e.y-Math.floor(e.y);break;case rs:e.y=e.y<0?0:1;break;case Ec:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}_n.DEFAULT_IMAGE=null;_n.DEFAULT_MAPPING=Py;_n.DEFAULT_ANISOTROPY=1;class Lt{constructor(e=0,t=0,n=0,s=1){Lt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,o=this.w,l=e.elements;return this.x=l[0]*t+l[4]*n+l[8]*s+l[12]*o,this.y=l[1]*t+l[5]*n+l[9]*s+l[13]*o,this.z=l[2]*t+l[6]*n+l[10]*s+l[14]*o,this.w=l[3]*t+l[7]*n+l[11]*s+l[15]*o,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,o;const f=e.elements,d=f[0],p=f[4],m=f[8],v=f[1],y=f[5],E=f[9],M=f[2],S=f[6],_=f[10];if(Math.abs(p-v)<.01&&Math.abs(m-M)<.01&&Math.abs(E-S)<.01){if(Math.abs(p+v)<.1&&Math.abs(m+M)<.1&&Math.abs(E+S)<.1&&Math.abs(d+y+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const C=(d+1)/2,b=(y+1)/2,I=(_+1)/2,U=(p+v)/4,F=(m+M)/4,X=(E+S)/4;return C>b&&C>I?C<.01?(n=0,s=.707106781,o=.707106781):(n=Math.sqrt(C),s=U/n,o=F/n):b>I?b<.01?(n=.707106781,s=0,o=.707106781):(s=Math.sqrt(b),n=U/s,o=X/s):I<.01?(n=.707106781,s=.707106781,o=0):(o=Math.sqrt(I),n=F/o,s=X/o),this.set(n,s,o,t),this}let R=Math.sqrt((S-E)*(S-E)+(m-M)*(m-M)+(v-p)*(v-p));return Math.abs(R)<.001&&(R=1),this.x=(S-E)/R,this.y=(m-M)/R,this.z=(v-p)/R,this.w=Math.acos((d+y+_-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=St(this.x,e.x,t.x),this.y=St(this.y,e.y,t.y),this.z=St(this.z,e.z,t.z),this.w=St(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=St(this.x,e,t),this.y=St(this.y,e,t),this.z=St(this.z,e,t),this.w=St(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(St(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class JT extends Gs{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ri,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Lt(0,0,e,t),this.scissorTest=!1,this.viewport=new Lt(0,0,e,t);const s={width:e,height:t,depth:n.depth},o=new _n(s);this.textures=[];const l=n.count;for(let c=0;c<l;c++)this.textures[c]=o.clone(),this.textures[c].isRenderTargetTexture=!0,this.textures[c].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:ri,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,o=this.textures.length;s<o;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new Xp(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class zs extends JT{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Wy extends _n{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Hn,this.minFilter=Hn,this.wrapR=rs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class QT extends _n{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Hn,this.minFilter=Hn,this.wrapR=rs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class qi{constructor(e=new j(1/0,1/0,1/0),t=new j(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(bi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(bi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=bi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const o=n.getAttribute("position");if(t===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let l=0,c=o.count;l<c;l++)e.isMesh===!0?e.getVertexPosition(l,bi):bi.fromBufferAttribute(o,l),bi.applyMatrix4(e.matrixWorld),this.expandByPoint(bi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Du.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Du.copy(n.boundingBox)),Du.applyMatrix4(e.matrixWorld),this.union(Du)}const s=e.children;for(let o=0,l=s.length;o<l;o++)this.expandByObject(s[o],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,bi),bi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(zo),Nu.subVectors(this.max,zo),va.subVectors(e.a,zo),_a.subVectors(e.b,zo),ya.subVectors(e.c,zo),Kr.subVectors(_a,va),qr.subVectors(ya,_a),bs.subVectors(va,ya);let t=[0,-Kr.z,Kr.y,0,-qr.z,qr.y,0,-bs.z,bs.y,Kr.z,0,-Kr.x,qr.z,0,-qr.x,bs.z,0,-bs.x,-Kr.y,Kr.x,0,-qr.y,qr.x,0,-bs.y,bs.x,0];return!Dd(t,va,_a,ya,Nu)||(t=[1,0,0,0,1,0,0,0,1],!Dd(t,va,_a,ya,Nu))?!1:(Uu.crossVectors(Kr,qr),t=[Uu.x,Uu.y,Uu.z],Dd(t,va,_a,ya,Nu))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,bi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(bi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ur[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ur[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ur[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ur[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ur[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ur[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ur[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ur[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ur),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ur=[new j,new j,new j,new j,new j,new j,new j,new j],bi=new j,Du=new qi,va=new j,_a=new j,ya=new j,Kr=new j,qr=new j,bs=new j,zo=new j,Nu=new j,Uu=new j,As=new j;function Dd(r,e,t,n,s){for(let o=0,l=r.length-3;o<=l;o+=3){As.fromArray(r,o);const c=s.x*Math.abs(As.x)+s.y*Math.abs(As.y)+s.z*Math.abs(As.z),f=e.dot(As),d=t.dot(As),p=n.dot(As);if(Math.max(-Math.max(f,d,p),Math.min(f,d,p))>c)return!1}return!0}const ew=new qi,Ho=new j,Nd=new j;class Zi{constructor(e=new j,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):ew.setFromPoints(e).getCenter(n);let s=0;for(let o=0,l=e.length;o<l;o++)s=Math.max(s,n.distanceToSquared(e[o]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ho.subVectors(e,this.center);const t=Ho.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Ho,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Nd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ho.copy(e.center).add(Nd)),this.expandByPoint(Ho.copy(e.center).sub(Nd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const cr=new j,Ud=new j,Fu=new j,Zr=new j,Fd=new j,Ou=new j,Od=new j;class yl{constructor(e=new j,t=new j(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,cr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=cr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(cr.copy(this.origin).addScaledVector(this.direction,t),cr.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Ud.copy(e).add(t).multiplyScalar(.5),Fu.copy(t).sub(e).normalize(),Zr.copy(this.origin).sub(Ud);const o=e.distanceTo(t)*.5,l=-this.direction.dot(Fu),c=Zr.dot(this.direction),f=-Zr.dot(Fu),d=Zr.lengthSq(),p=Math.abs(1-l*l);let m,v,y,E;if(p>0)if(m=l*f-c,v=l*c-f,E=o*p,m>=0)if(v>=-E)if(v<=E){const M=1/p;m*=M,v*=M,y=m*(m+l*v+2*c)+v*(l*m+v+2*f)+d}else v=o,m=Math.max(0,-(l*v+c)),y=-m*m+v*(v+2*f)+d;else v=-o,m=Math.max(0,-(l*v+c)),y=-m*m+v*(v+2*f)+d;else v<=-E?(m=Math.max(0,-(-l*o+c)),v=m>0?-o:Math.min(Math.max(-o,-f),o),y=-m*m+v*(v+2*f)+d):v<=E?(m=0,v=Math.min(Math.max(-o,-f),o),y=v*(v+2*f)+d):(m=Math.max(0,-(l*o+c)),v=m>0?o:Math.min(Math.max(-o,-f),o),y=-m*m+v*(v+2*f)+d);else v=l>0?-o:o,m=Math.max(0,-(l*v+c)),y=-m*m+v*(v+2*f)+d;return n&&n.copy(this.origin).addScaledVector(this.direction,m),s&&s.copy(Ud).addScaledVector(Fu,v),y}intersectSphere(e,t){cr.subVectors(e.center,this.origin);const n=cr.dot(this.direction),s=cr.dot(cr)-n*n,o=e.radius*e.radius;if(s>o)return null;const l=Math.sqrt(o-s),c=n-l,f=n+l;return f<0?null:c<0?this.at(f,t):this.at(c,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,o,l,c,f;const d=1/this.direction.x,p=1/this.direction.y,m=1/this.direction.z,v=this.origin;return d>=0?(n=(e.min.x-v.x)*d,s=(e.max.x-v.x)*d):(n=(e.max.x-v.x)*d,s=(e.min.x-v.x)*d),p>=0?(o=(e.min.y-v.y)*p,l=(e.max.y-v.y)*p):(o=(e.max.y-v.y)*p,l=(e.min.y-v.y)*p),n>l||o>s||((o>n||isNaN(n))&&(n=o),(l<s||isNaN(s))&&(s=l),m>=0?(c=(e.min.z-v.z)*m,f=(e.max.z-v.z)*m):(c=(e.max.z-v.z)*m,f=(e.min.z-v.z)*m),n>f||c>s)||((c>n||n!==n)&&(n=c),(f<s||s!==s)&&(s=f),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,cr)!==null}intersectTriangle(e,t,n,s,o){Fd.subVectors(t,e),Ou.subVectors(n,e),Od.crossVectors(Fd,Ou);let l=this.direction.dot(Od),c;if(l>0){if(s)return null;c=1}else if(l<0)c=-1,l=-l;else return null;Zr.subVectors(this.origin,e);const f=c*this.direction.dot(Ou.crossVectors(Zr,Ou));if(f<0)return null;const d=c*this.direction.dot(Fd.cross(Zr));if(d<0||f+d>l)return null;const p=-c*Zr.dot(Od);return p<0?null:this.at(p/l,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class yt{constructor(e,t,n,s,o,l,c,f,d,p,m,v,y,E,M,S){yt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,o,l,c,f,d,p,m,v,y,E,M,S)}set(e,t,n,s,o,l,c,f,d,p,m,v,y,E,M,S){const _=this.elements;return _[0]=e,_[4]=t,_[8]=n,_[12]=s,_[1]=o,_[5]=l,_[9]=c,_[13]=f,_[2]=d,_[6]=p,_[10]=m,_[14]=v,_[3]=y,_[7]=E,_[11]=M,_[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new yt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/xa.setFromMatrixColumn(e,0).length(),o=1/xa.setFromMatrixColumn(e,1).length(),l=1/xa.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*o,t[5]=n[5]*o,t[6]=n[6]*o,t[7]=0,t[8]=n[8]*l,t[9]=n[9]*l,t[10]=n[10]*l,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,o=e.z,l=Math.cos(n),c=Math.sin(n),f=Math.cos(s),d=Math.sin(s),p=Math.cos(o),m=Math.sin(o);if(e.order==="XYZ"){const v=l*p,y=l*m,E=c*p,M=c*m;t[0]=f*p,t[4]=-f*m,t[8]=d,t[1]=y+E*d,t[5]=v-M*d,t[9]=-c*f,t[2]=M-v*d,t[6]=E+y*d,t[10]=l*f}else if(e.order==="YXZ"){const v=f*p,y=f*m,E=d*p,M=d*m;t[0]=v+M*c,t[4]=E*c-y,t[8]=l*d,t[1]=l*m,t[5]=l*p,t[9]=-c,t[2]=y*c-E,t[6]=M+v*c,t[10]=l*f}else if(e.order==="ZXY"){const v=f*p,y=f*m,E=d*p,M=d*m;t[0]=v-M*c,t[4]=-l*m,t[8]=E+y*c,t[1]=y+E*c,t[5]=l*p,t[9]=M-v*c,t[2]=-l*d,t[6]=c,t[10]=l*f}else if(e.order==="ZYX"){const v=l*p,y=l*m,E=c*p,M=c*m;t[0]=f*p,t[4]=E*d-y,t[8]=v*d+M,t[1]=f*m,t[5]=M*d+v,t[9]=y*d-E,t[2]=-d,t[6]=c*f,t[10]=l*f}else if(e.order==="YZX"){const v=l*f,y=l*d,E=c*f,M=c*d;t[0]=f*p,t[4]=M-v*m,t[8]=E*m+y,t[1]=m,t[5]=l*p,t[9]=-c*p,t[2]=-d*p,t[6]=y*m+E,t[10]=v-M*m}else if(e.order==="XZY"){const v=l*f,y=l*d,E=c*f,M=c*d;t[0]=f*p,t[4]=-m,t[8]=d*p,t[1]=v*m+M,t[5]=l*p,t[9]=y*m-E,t[2]=E*m-y,t[6]=c*p,t[10]=M*m+v}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(tw,e,nw)}lookAt(e,t,n){const s=this.elements;return ni.subVectors(e,t),ni.lengthSq()===0&&(ni.z=1),ni.normalize(),Jr.crossVectors(n,ni),Jr.lengthSq()===0&&(Math.abs(n.z)===1?ni.x+=1e-4:ni.z+=1e-4,ni.normalize(),Jr.crossVectors(n,ni)),Jr.normalize(),ku.crossVectors(ni,Jr),s[0]=Jr.x,s[4]=ku.x,s[8]=ni.x,s[1]=Jr.y,s[5]=ku.y,s[9]=ni.y,s[2]=Jr.z,s[6]=ku.z,s[10]=ni.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,o=this.elements,l=n[0],c=n[4],f=n[8],d=n[12],p=n[1],m=n[5],v=n[9],y=n[13],E=n[2],M=n[6],S=n[10],_=n[14],R=n[3],C=n[7],b=n[11],I=n[15],U=s[0],F=s[4],X=s[8],P=s[12],L=s[1],H=s[5],J=s[9],ie=s[13],he=s[2],ue=s[6],re=s[10],le=s[14],z=s[3],ce=s[7],se=s[11],O=s[15];return o[0]=l*U+c*L+f*he+d*z,o[4]=l*F+c*H+f*ue+d*ce,o[8]=l*X+c*J+f*re+d*se,o[12]=l*P+c*ie+f*le+d*O,o[1]=p*U+m*L+v*he+y*z,o[5]=p*F+m*H+v*ue+y*ce,o[9]=p*X+m*J+v*re+y*se,o[13]=p*P+m*ie+v*le+y*O,o[2]=E*U+M*L+S*he+_*z,o[6]=E*F+M*H+S*ue+_*ce,o[10]=E*X+M*J+S*re+_*se,o[14]=E*P+M*ie+S*le+_*O,o[3]=R*U+C*L+b*he+I*z,o[7]=R*F+C*H+b*ue+I*ce,o[11]=R*X+C*J+b*re+I*se,o[15]=R*P+C*ie+b*le+I*O,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],o=e[12],l=e[1],c=e[5],f=e[9],d=e[13],p=e[2],m=e[6],v=e[10],y=e[14],E=e[3],M=e[7],S=e[11],_=e[15];return E*(+o*f*m-s*d*m-o*c*v+n*d*v+s*c*y-n*f*y)+M*(+t*f*y-t*d*v+o*l*v-s*l*y+s*d*p-o*f*p)+S*(+t*d*m-t*c*y-o*l*m+n*l*y+o*c*p-n*d*p)+_*(-s*c*p-t*f*m+t*c*v+s*l*m-n*l*v+n*f*p)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],o=e[3],l=e[4],c=e[5],f=e[6],d=e[7],p=e[8],m=e[9],v=e[10],y=e[11],E=e[12],M=e[13],S=e[14],_=e[15],R=m*S*d-M*v*d+M*f*y-c*S*y-m*f*_+c*v*_,C=E*v*d-p*S*d-E*f*y+l*S*y+p*f*_-l*v*_,b=p*M*d-E*m*d+E*c*y-l*M*y-p*c*_+l*m*_,I=E*m*f-p*M*f-E*c*v+l*M*v+p*c*S-l*m*S,U=t*R+n*C+s*b+o*I;if(U===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/U;return e[0]=R*F,e[1]=(M*v*o-m*S*o-M*s*y+n*S*y+m*s*_-n*v*_)*F,e[2]=(c*S*o-M*f*o+M*s*d-n*S*d-c*s*_+n*f*_)*F,e[3]=(m*f*o-c*v*o-m*s*d+n*v*d+c*s*y-n*f*y)*F,e[4]=C*F,e[5]=(p*S*o-E*v*o+E*s*y-t*S*y-p*s*_+t*v*_)*F,e[6]=(E*f*o-l*S*o-E*s*d+t*S*d+l*s*_-t*f*_)*F,e[7]=(l*v*o-p*f*o+p*s*d-t*v*d-l*s*y+t*f*y)*F,e[8]=b*F,e[9]=(E*m*o-p*M*o-E*n*y+t*M*y+p*n*_-t*m*_)*F,e[10]=(l*M*o-E*c*o+E*n*d-t*M*d-l*n*_+t*c*_)*F,e[11]=(p*c*o-l*m*o-p*n*d+t*m*d+l*n*y-t*c*y)*F,e[12]=I*F,e[13]=(p*M*s-E*m*s+E*n*v-t*M*v-p*n*S+t*m*S)*F,e[14]=(E*c*s-l*M*s-E*n*f+t*M*f+l*n*S-t*c*S)*F,e[15]=(l*m*s-p*c*s+p*n*f-t*m*f-l*n*v+t*c*v)*F,this}scale(e){const t=this.elements,n=e.x,s=e.y,o=e.z;return t[0]*=n,t[4]*=s,t[8]*=o,t[1]*=n,t[5]*=s,t[9]*=o,t[2]*=n,t[6]*=s,t[10]*=o,t[3]*=n,t[7]*=s,t[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),o=1-n,l=e.x,c=e.y,f=e.z,d=o*l,p=o*c;return this.set(d*l+n,d*c-s*f,d*f+s*c,0,d*c+s*f,p*c+n,p*f-s*l,0,d*f-s*c,p*f+s*l,o*f*f+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,o,l){return this.set(1,n,o,0,e,1,l,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,o=t._x,l=t._y,c=t._z,f=t._w,d=o+o,p=l+l,m=c+c,v=o*d,y=o*p,E=o*m,M=l*p,S=l*m,_=c*m,R=f*d,C=f*p,b=f*m,I=n.x,U=n.y,F=n.z;return s[0]=(1-(M+_))*I,s[1]=(y+b)*I,s[2]=(E-C)*I,s[3]=0,s[4]=(y-b)*U,s[5]=(1-(v+_))*U,s[6]=(S+R)*U,s[7]=0,s[8]=(E+C)*F,s[9]=(S-R)*F,s[10]=(1-(v+M))*F,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let o=xa.set(s[0],s[1],s[2]).length();const l=xa.set(s[4],s[5],s[6]).length(),c=xa.set(s[8],s[9],s[10]).length();this.determinant()<0&&(o=-o),e.x=s[12],e.y=s[13],e.z=s[14],Ai.copy(this);const d=1/o,p=1/l,m=1/c;return Ai.elements[0]*=d,Ai.elements[1]*=d,Ai.elements[2]*=d,Ai.elements[4]*=p,Ai.elements[5]*=p,Ai.elements[6]*=p,Ai.elements[8]*=m,Ai.elements[9]*=m,Ai.elements[10]*=m,t.setFromRotationMatrix(Ai),n.x=o,n.y=l,n.z=c,this}makePerspective(e,t,n,s,o,l,c=Wi,f=!1){const d=this.elements,p=2*o/(t-e),m=2*o/(n-s),v=(t+e)/(t-e),y=(n+s)/(n-s);let E,M;if(f)E=o/(l-o),M=l*o/(l-o);else if(c===Wi)E=-(l+o)/(l-o),M=-2*l*o/(l-o);else if(c===Tc)E=-l/(l-o),M=-l*o/(l-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+c);return d[0]=p,d[4]=0,d[8]=v,d[12]=0,d[1]=0,d[5]=m,d[9]=y,d[13]=0,d[2]=0,d[6]=0,d[10]=E,d[14]=M,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(e,t,n,s,o,l,c=Wi,f=!1){const d=this.elements,p=2/(t-e),m=2/(n-s),v=-(t+e)/(t-e),y=-(n+s)/(n-s);let E,M;if(f)E=1/(l-o),M=l/(l-o);else if(c===Wi)E=-2/(l-o),M=-(l+o)/(l-o);else if(c===Tc)E=-1/(l-o),M=-o/(l-o);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+c);return d[0]=p,d[4]=0,d[8]=0,d[12]=v,d[1]=0,d[5]=m,d[9]=0,d[13]=y,d[2]=0,d[6]=0,d[10]=E,d[14]=M,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const xa=new j,Ai=new yt,tw=new j(0,0,0),nw=new j(1,1,1),Jr=new j,ku=new j,ni=new j,g0=new yt,v0=new $i;class Ki{constructor(e=0,t=0,n=0,s=Ki.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,o=s[0],l=s[4],c=s[8],f=s[1],d=s[5],p=s[9],m=s[2],v=s[6],y=s[10];switch(t){case"XYZ":this._y=Math.asin(St(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-p,y),this._z=Math.atan2(-l,o)):(this._x=Math.atan2(v,d),this._z=0);break;case"YXZ":this._x=Math.asin(-St(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(c,y),this._z=Math.atan2(f,d)):(this._y=Math.atan2(-m,o),this._z=0);break;case"ZXY":this._x=Math.asin(St(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-m,y),this._z=Math.atan2(-l,d)):(this._y=0,this._z=Math.atan2(f,o));break;case"ZYX":this._y=Math.asin(-St(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(v,y),this._z=Math.atan2(f,o)):(this._x=0,this._z=Math.atan2(-l,d));break;case"YZX":this._z=Math.asin(St(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-p,d),this._y=Math.atan2(-m,o)):(this._x=0,this._y=Math.atan2(c,y));break;case"XZY":this._z=Math.asin(-St(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(v,d),this._y=Math.atan2(c,o)):(this._x=Math.atan2(-p,y),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return g0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(g0,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return v0.setFromEuler(this),this.setFromQuaternion(v0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ki.DEFAULT_ORDER="XYZ";let jy=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},iw=0;const _0=new j,Sa=new $i,fr=new yt,Bu=new j,Vo=new j,rw=new j,sw=new $i,y0=new j(1,0,0),x0=new j(0,1,0),S0=new j(0,0,1),E0={type:"added"},aw={type:"removed"},Ea={type:"childadded",child:null},kd={type:"childremoved",child:null};class en extends Gs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:iw++}),this.uuid=Di(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=en.DEFAULT_UP.clone();const e=new j,t=new Ki,n=new $i,s=new j(1,1,1);function o(){n.setFromEuler(t,!1)}function l(){t.setFromQuaternion(n,void 0,!1)}t._onChange(o),n._onChange(l),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new yt},normalMatrix:{value:new vt}}),this.matrix=new yt,this.matrixWorld=new yt,this.matrixAutoUpdate=en.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=en.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new jy,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Sa.setFromAxisAngle(e,t),this.quaternion.multiply(Sa),this}rotateOnWorldAxis(e,t){return Sa.setFromAxisAngle(e,t),this.quaternion.premultiply(Sa),this}rotateX(e){return this.rotateOnAxis(y0,e)}rotateY(e){return this.rotateOnAxis(x0,e)}rotateZ(e){return this.rotateOnAxis(S0,e)}translateOnAxis(e,t){return _0.copy(e).applyQuaternion(this.quaternion),this.position.add(_0.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(y0,e)}translateY(e){return this.translateOnAxis(x0,e)}translateZ(e){return this.translateOnAxis(S0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(fr.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Bu.copy(e):Bu.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Vo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?fr.lookAt(Vo,Bu,this.up):fr.lookAt(Bu,Vo,this.up),this.quaternion.setFromRotationMatrix(fr),s&&(fr.extractRotation(s.matrixWorld),Sa.setFromRotationMatrix(fr),this.quaternion.premultiply(Sa.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(E0),Ea.child=e,this.dispatchEvent(Ea),Ea.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(aw),kd.child=e,this.dispatchEvent(kd),kd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),fr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),fr.multiply(e.parent.matrixWorld)),e.applyMatrix4(fr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(E0),Ea.child=e,this.dispatchEvent(Ea),Ea.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const l=this.children[n].getObjectByProperty(e,t);if(l!==void 0)return l}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let o=0,l=s.length;o<l;o++)s[o].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vo,e,rw),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vo,sw,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let o=0,l=s.length;o<l;o++)s[o].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(c=>({...c,boundingBox:c.boundingBox?c.boundingBox.toJSON():void 0,boundingSphere:c.boundingSphere?c.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(c=>({...c})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function o(c,f){return c[f.uuid]===void 0&&(c[f.uuid]=f.toJSON(e)),f.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(e.geometries,this.geometry);const c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){const f=c.shapes;if(Array.isArray(f))for(let d=0,p=f.length;d<p;d++){const m=f[d];o(e.shapes,m)}else o(e.shapes,f)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const c=[];for(let f=0,d=this.material.length;f<d;f++)c.push(o(e.materials,this.material[f]));s.material=c}else s.material=o(e.materials,this.material);if(this.children.length>0){s.children=[];for(let c=0;c<this.children.length;c++)s.children.push(this.children[c].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let c=0;c<this.animations.length;c++){const f=this.animations[c];s.animations.push(o(e.animations,f))}}if(t){const c=l(e.geometries),f=l(e.materials),d=l(e.textures),p=l(e.images),m=l(e.shapes),v=l(e.skeletons),y=l(e.animations),E=l(e.nodes);c.length>0&&(n.geometries=c),f.length>0&&(n.materials=f),d.length>0&&(n.textures=d),p.length>0&&(n.images=p),m.length>0&&(n.shapes=m),v.length>0&&(n.skeletons=v),y.length>0&&(n.animations=y),E.length>0&&(n.nodes=E)}return n.object=s,n;function l(c){const f=[];for(const d in c){const p=c[d];delete p.metadata,f.push(p)}return f}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}en.DEFAULT_UP=new j(0,1,0);en.DEFAULT_MATRIX_AUTO_UPDATE=!0;en.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ri=new j,dr=new j,Bd=new j,hr=new j,Ma=new j,Ta=new j,M0=new j,zd=new j,Hd=new j,Vd=new j,Gd=new Lt,Wd=new Lt,jd=new Lt;class Pi{constructor(e=new j,t=new j,n=new j){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Ri.subVectors(e,t),s.cross(Ri);const o=s.lengthSq();return o>0?s.multiplyScalar(1/Math.sqrt(o)):s.set(0,0,0)}static getBarycoord(e,t,n,s,o){Ri.subVectors(s,t),dr.subVectors(n,t),Bd.subVectors(e,t);const l=Ri.dot(Ri),c=Ri.dot(dr),f=Ri.dot(Bd),d=dr.dot(dr),p=dr.dot(Bd),m=l*d-c*c;if(m===0)return o.set(0,0,0),null;const v=1/m,y=(d*f-c*p)*v,E=(l*p-c*f)*v;return o.set(1-y-E,E,y)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,hr)===null?!1:hr.x>=0&&hr.y>=0&&hr.x+hr.y<=1}static getInterpolation(e,t,n,s,o,l,c,f){return this.getBarycoord(e,t,n,s,hr)===null?(f.x=0,f.y=0,"z"in f&&(f.z=0),"w"in f&&(f.w=0),null):(f.setScalar(0),f.addScaledVector(o,hr.x),f.addScaledVector(l,hr.y),f.addScaledVector(c,hr.z),f)}static getInterpolatedAttribute(e,t,n,s,o,l){return Gd.setScalar(0),Wd.setScalar(0),jd.setScalar(0),Gd.fromBufferAttribute(e,t),Wd.fromBufferAttribute(e,n),jd.fromBufferAttribute(e,s),l.setScalar(0),l.addScaledVector(Gd,o.x),l.addScaledVector(Wd,o.y),l.addScaledVector(jd,o.z),l}static isFrontFacing(e,t,n,s){return Ri.subVectors(n,t),dr.subVectors(e,t),Ri.cross(dr).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ri.subVectors(this.c,this.b),dr.subVectors(this.a,this.b),Ri.cross(dr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Pi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Pi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,o){return Pi.getInterpolation(e,this.a,this.b,this.c,t,n,s,o)}containsPoint(e){return Pi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Pi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,o=this.c;let l,c;Ma.subVectors(s,n),Ta.subVectors(o,n),zd.subVectors(e,n);const f=Ma.dot(zd),d=Ta.dot(zd);if(f<=0&&d<=0)return t.copy(n);Hd.subVectors(e,s);const p=Ma.dot(Hd),m=Ta.dot(Hd);if(p>=0&&m<=p)return t.copy(s);const v=f*m-p*d;if(v<=0&&f>=0&&p<=0)return l=f/(f-p),t.copy(n).addScaledVector(Ma,l);Vd.subVectors(e,o);const y=Ma.dot(Vd),E=Ta.dot(Vd);if(E>=0&&y<=E)return t.copy(o);const M=y*d-f*E;if(M<=0&&d>=0&&E<=0)return c=d/(d-E),t.copy(n).addScaledVector(Ta,c);const S=p*E-y*m;if(S<=0&&m-p>=0&&y-E>=0)return M0.subVectors(o,s),c=(m-p)/(m-p+(y-E)),t.copy(s).addScaledVector(M0,c);const _=1/(S+M+v);return l=M*_,c=v*_,t.copy(n).addScaledVector(Ma,l).addScaledVector(Ta,c)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Xy={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Qr={h:0,s:0,l:0},zu={h:0,s:0,l:0};function Xd(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class mt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Sn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Rt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=Rt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Rt.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=Rt.workingColorSpace){if(e=jp(e,1),t=St(t,0,1),n=St(n,0,1),t===0)this.r=this.g=this.b=n;else{const o=n<=.5?n*(1+t):n+t-n*t,l=2*n-o;this.r=Xd(l,o,e+1/3),this.g=Xd(l,o,e),this.b=Xd(l,o,e-1/3)}return Rt.colorSpaceToWorking(this,s),this}setStyle(e,t=Sn){function n(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const l=s[1],c=s[2];switch(l){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,t);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,t);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=s[1],l=o.length;if(l===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,t);if(l===6)return this.setHex(parseInt(o,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Sn){const n=Xy[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Sr(e.r),this.g=Sr(e.g),this.b=Sr(e.b),this}copyLinearToSRGB(e){return this.r=Ba(e.r),this.g=Ba(e.g),this.b=Ba(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Sn){return Rt.workingToColorSpace(Ln.copy(this),e),Math.round(St(Ln.r*255,0,255))*65536+Math.round(St(Ln.g*255,0,255))*256+Math.round(St(Ln.b*255,0,255))}getHexString(e=Sn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Rt.workingColorSpace){Rt.workingToColorSpace(Ln.copy(this),t);const n=Ln.r,s=Ln.g,o=Ln.b,l=Math.max(n,s,o),c=Math.min(n,s,o);let f,d;const p=(c+l)/2;if(c===l)f=0,d=0;else{const m=l-c;switch(d=p<=.5?m/(l+c):m/(2-l-c),l){case n:f=(s-o)/m+(s<o?6:0);break;case s:f=(o-n)/m+2;break;case o:f=(n-s)/m+4;break}f/=6}return e.h=f,e.s=d,e.l=p,e}getRGB(e,t=Rt.workingColorSpace){return Rt.workingToColorSpace(Ln.copy(this),t),e.r=Ln.r,e.g=Ln.g,e.b=Ln.b,e}getStyle(e=Sn){Rt.workingToColorSpace(Ln.copy(this),e);const t=Ln.r,n=Ln.g,s=Ln.b;return e!==Sn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Qr),this.setHSL(Qr.h+e,Qr.s+t,Qr.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Qr),e.getHSL(zu);const n=Qo(Qr.h,zu.h,t),s=Qo(Qr.s,zu.s,t),o=Qo(Qr.l,zu.l,t);return this.setHSL(n,s,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,o=e.elements;return this.r=o[0]*t+o[3]*n+o[6]*s,this.g=o[1]*t+o[4]*n+o[7]*s,this.b=o[2]*t+o[5]*n+o[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ln=new mt;mt.NAMES=Xy;let ow=0;class Xi extends Gs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ow++}),this.uuid=Di(),this.name="",this.type="Material",this.blending=ka,this.side=Mr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Eh,this.blendDst=Mh,this.blendEquation=Ns,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new mt(0,0,0),this.blendAlpha=0,this.depthFunc=Va,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=u0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ma,this.stencilZFail=ma,this.stencilZPass=ma,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ka&&(n.blending=this.blending),this.side!==Mr&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Eh&&(n.blendSrc=this.blendSrc),this.blendDst!==Mh&&(n.blendDst=this.blendDst),this.blendEquation!==Ns&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Va&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==u0&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ma&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ma&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ma&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(o){const l=[];for(const c in o){const f=o[c];delete f.metadata,l.push(f)}return l}if(t){const o=s(e.textures),l=s(e.images);o.length>0&&(n.textures=o),l.length>0&&(n.images=l)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let o=0;o!==s;++o)n[o]=t[o].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Fs extends Xi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new mt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ki,this.combine=Cy,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const an=new j,Hu=new dt;let lw=0;class In{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:lw++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=lp,this.updateRanges=[],this.gpuType=Li,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,o=this.itemSize;s<o;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Hu.fromBufferAttribute(this,t),Hu.applyMatrix3(e),this.setXY(t,Hu.x,Hu.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)an.fromBufferAttribute(this,t),an.applyMatrix3(e),this.setXYZ(t,an.x,an.y,an.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)an.fromBufferAttribute(this,t),an.applyMatrix4(e),this.setXYZ(t,an.x,an.y,an.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)an.fromBufferAttribute(this,t),an.applyNormalMatrix(e),this.setXYZ(t,an.x,an.y,an.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)an.fromBufferAttribute(this,t),an.transformDirection(e),this.setXYZ(t,an.x,an.y,an.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ci(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ut(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ci(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ci(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ci(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ci(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ut(t,this.array),n=Ut(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Ut(t,this.array),n=Ut(n,this.array),s=Ut(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,o){return e*=this.itemSize,this.normalized&&(t=Ut(t,this.array),n=Ut(n,this.array),s=Ut(s,this.array),o=Ut(o,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==lp&&(e.usage=this.usage),e}}class Yy extends In{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class $y extends In{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class gi extends In{constructor(e,t,n){super(new Float32Array(e),t,n)}}let uw=0;const hi=new yt,Yd=new en,wa=new j,ii=new qi,Go=new qi,vn=new j;class _i extends Gs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:uw++}),this.uuid=Di(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Gy(e)?$y:Yy)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const o=new vt().getNormalMatrix(e);n.applyNormalMatrix(o),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return hi.makeRotationFromQuaternion(e),this.applyMatrix4(hi),this}rotateX(e){return hi.makeRotationX(e),this.applyMatrix4(hi),this}rotateY(e){return hi.makeRotationY(e),this.applyMatrix4(hi),this}rotateZ(e){return hi.makeRotationZ(e),this.applyMatrix4(hi),this}translate(e,t,n){return hi.makeTranslation(e,t,n),this.applyMatrix4(hi),this}scale(e,t,n){return hi.makeScale(e,t,n),this.applyMatrix4(hi),this}lookAt(e){return Yd.lookAt(e),Yd.updateMatrix(),this.applyMatrix4(Yd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(wa).negate(),this.translate(wa.x,wa.y,wa.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,o=e.length;s<o;s++){const l=e[s];n.push(l.x,l.y,l.z||0)}this.setAttribute("position",new gi(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const o=e[s];t.setXYZ(s,o.x,o.y,o.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new j(-1/0,-1/0,-1/0),new j(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const o=t[n];ii.setFromBufferAttribute(o),this.morphTargetsRelative?(vn.addVectors(this.boundingBox.min,ii.min),this.boundingBox.expandByPoint(vn),vn.addVectors(this.boundingBox.max,ii.max),this.boundingBox.expandByPoint(vn)):(this.boundingBox.expandByPoint(ii.min),this.boundingBox.expandByPoint(ii.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Zi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new j,1/0);return}if(e){const n=this.boundingSphere.center;if(ii.setFromBufferAttribute(e),t)for(let o=0,l=t.length;o<l;o++){const c=t[o];Go.setFromBufferAttribute(c),this.morphTargetsRelative?(vn.addVectors(ii.min,Go.min),ii.expandByPoint(vn),vn.addVectors(ii.max,Go.max),ii.expandByPoint(vn)):(ii.expandByPoint(Go.min),ii.expandByPoint(Go.max))}ii.getCenter(n);let s=0;for(let o=0,l=e.count;o<l;o++)vn.fromBufferAttribute(e,o),s=Math.max(s,n.distanceToSquared(vn));if(t)for(let o=0,l=t.length;o<l;o++){const c=t[o],f=this.morphTargetsRelative;for(let d=0,p=c.count;d<p;d++)vn.fromBufferAttribute(c,d),f&&(wa.fromBufferAttribute(e,d),vn.add(wa)),s=Math.max(s,n.distanceToSquared(vn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,o=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new In(new Float32Array(4*n.count),4));const l=this.getAttribute("tangent"),c=[],f=[];for(let X=0;X<n.count;X++)c[X]=new j,f[X]=new j;const d=new j,p=new j,m=new j,v=new dt,y=new dt,E=new dt,M=new j,S=new j;function _(X,P,L){d.fromBufferAttribute(n,X),p.fromBufferAttribute(n,P),m.fromBufferAttribute(n,L),v.fromBufferAttribute(o,X),y.fromBufferAttribute(o,P),E.fromBufferAttribute(o,L),p.sub(d),m.sub(d),y.sub(v),E.sub(v);const H=1/(y.x*E.y-E.x*y.y);isFinite(H)&&(M.copy(p).multiplyScalar(E.y).addScaledVector(m,-y.y).multiplyScalar(H),S.copy(m).multiplyScalar(y.x).addScaledVector(p,-E.x).multiplyScalar(H),c[X].add(M),c[P].add(M),c[L].add(M),f[X].add(S),f[P].add(S),f[L].add(S))}let R=this.groups;R.length===0&&(R=[{start:0,count:e.count}]);for(let X=0,P=R.length;X<P;++X){const L=R[X],H=L.start,J=L.count;for(let ie=H,he=H+J;ie<he;ie+=3)_(e.getX(ie+0),e.getX(ie+1),e.getX(ie+2))}const C=new j,b=new j,I=new j,U=new j;function F(X){I.fromBufferAttribute(s,X),U.copy(I);const P=c[X];C.copy(P),C.sub(I.multiplyScalar(I.dot(P))).normalize(),b.crossVectors(U,P);const H=b.dot(f[X])<0?-1:1;l.setXYZW(X,C.x,C.y,C.z,H)}for(let X=0,P=R.length;X<P;++X){const L=R[X],H=L.start,J=L.count;for(let ie=H,he=H+J;ie<he;ie+=3)F(e.getX(ie+0)),F(e.getX(ie+1)),F(e.getX(ie+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new In(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let v=0,y=n.count;v<y;v++)n.setXYZ(v,0,0,0);const s=new j,o=new j,l=new j,c=new j,f=new j,d=new j,p=new j,m=new j;if(e)for(let v=0,y=e.count;v<y;v+=3){const E=e.getX(v+0),M=e.getX(v+1),S=e.getX(v+2);s.fromBufferAttribute(t,E),o.fromBufferAttribute(t,M),l.fromBufferAttribute(t,S),p.subVectors(l,o),m.subVectors(s,o),p.cross(m),c.fromBufferAttribute(n,E),f.fromBufferAttribute(n,M),d.fromBufferAttribute(n,S),c.add(p),f.add(p),d.add(p),n.setXYZ(E,c.x,c.y,c.z),n.setXYZ(M,f.x,f.y,f.z),n.setXYZ(S,d.x,d.y,d.z)}else for(let v=0,y=t.count;v<y;v+=3)s.fromBufferAttribute(t,v+0),o.fromBufferAttribute(t,v+1),l.fromBufferAttribute(t,v+2),p.subVectors(l,o),m.subVectors(s,o),p.cross(m),n.setXYZ(v+0,p.x,p.y,p.z),n.setXYZ(v+1,p.x,p.y,p.z),n.setXYZ(v+2,p.x,p.y,p.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)vn.fromBufferAttribute(e,t),vn.normalize(),e.setXYZ(t,vn.x,vn.y,vn.z)}toNonIndexed(){function e(c,f){const d=c.array,p=c.itemSize,m=c.normalized,v=new d.constructor(f.length*p);let y=0,E=0;for(let M=0,S=f.length;M<S;M++){c.isInterleavedBufferAttribute?y=f[M]*c.data.stride+c.offset:y=f[M]*p;for(let _=0;_<p;_++)v[E++]=d[y++]}return new In(v,p,m)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new _i,n=this.index.array,s=this.attributes;for(const c in s){const f=s[c],d=e(f,n);t.setAttribute(c,d)}const o=this.morphAttributes;for(const c in o){const f=[],d=o[c];for(let p=0,m=d.length;p<m;p++){const v=d[p],y=e(v,n);f.push(y)}t.morphAttributes[c]=f}t.morphTargetsRelative=this.morphTargetsRelative;const l=this.groups;for(let c=0,f=l.length;c<f;c++){const d=l[c];t.addGroup(d.start,d.count,d.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const f=this.parameters;for(const d in f)f[d]!==void 0&&(e[d]=f[d]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const f in n){const d=n[f];e.data.attributes[f]=d.toJSON(e.data)}const s={};let o=!1;for(const f in this.morphAttributes){const d=this.morphAttributes[f],p=[];for(let m=0,v=d.length;m<v;m++){const y=d[m];p.push(y.toJSON(e.data))}p.length>0&&(s[f]=p,o=!0)}o&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const l=this.groups;l.length>0&&(e.data.groups=JSON.parse(JSON.stringify(l)));const c=this.boundingSphere;return c!==null&&(e.data.boundingSphere=c.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const d in s){const p=s[d];this.setAttribute(d,p.clone(t))}const o=e.morphAttributes;for(const d in o){const p=[],m=o[d];for(let v=0,y=m.length;v<y;v++)p.push(m[v].clone(t));this.morphAttributes[d]=p}this.morphTargetsRelative=e.morphTargetsRelative;const l=e.groups;for(let d=0,p=l.length;d<p;d++){const m=l[d];this.addGroup(m.start,m.count,m.materialIndex)}const c=e.boundingBox;c!==null&&(this.boundingBox=c.clone());const f=e.boundingSphere;return f!==null&&(this.boundingSphere=f.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const T0=new yt,Rs=new yl,Vu=new Zi,w0=new j,Gu=new j,Wu=new j,ju=new j,$d=new j,Xu=new j,b0=new j,Yu=new j;class qn extends en{constructor(e=new _i,t=new Fs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,l=s.length;o<l;o++){const c=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=o}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,o=n.morphAttributes.position,l=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const c=this.morphTargetInfluences;if(o&&c){Xu.set(0,0,0);for(let f=0,d=o.length;f<d;f++){const p=c[f],m=o[f];p!==0&&($d.fromBufferAttribute(m,e),l?Xu.addScaledVector($d,p):Xu.addScaledVector($d.sub(t),p))}t.add(Xu)}return t}raycast(e,t){const n=this.geometry,s=this.material,o=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Vu.copy(n.boundingSphere),Vu.applyMatrix4(o),Rs.copy(e.ray).recast(e.near),!(Vu.containsPoint(Rs.origin)===!1&&(Rs.intersectSphere(Vu,w0)===null||Rs.origin.distanceToSquared(w0)>(e.far-e.near)**2))&&(T0.copy(o).invert(),Rs.copy(e.ray).applyMatrix4(T0),!(n.boundingBox!==null&&Rs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Rs)))}_computeIntersections(e,t,n){let s;const o=this.geometry,l=this.material,c=o.index,f=o.attributes.position,d=o.attributes.uv,p=o.attributes.uv1,m=o.attributes.normal,v=o.groups,y=o.drawRange;if(c!==null)if(Array.isArray(l))for(let E=0,M=v.length;E<M;E++){const S=v[E],_=l[S.materialIndex],R=Math.max(S.start,y.start),C=Math.min(c.count,Math.min(S.start+S.count,y.start+y.count));for(let b=R,I=C;b<I;b+=3){const U=c.getX(b),F=c.getX(b+1),X=c.getX(b+2);s=$u(this,_,e,n,d,p,m,U,F,X),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=S.materialIndex,t.push(s))}}else{const E=Math.max(0,y.start),M=Math.min(c.count,y.start+y.count);for(let S=E,_=M;S<_;S+=3){const R=c.getX(S),C=c.getX(S+1),b=c.getX(S+2);s=$u(this,l,e,n,d,p,m,R,C,b),s&&(s.faceIndex=Math.floor(S/3),t.push(s))}}else if(f!==void 0)if(Array.isArray(l))for(let E=0,M=v.length;E<M;E++){const S=v[E],_=l[S.materialIndex],R=Math.max(S.start,y.start),C=Math.min(f.count,Math.min(S.start+S.count,y.start+y.count));for(let b=R,I=C;b<I;b+=3){const U=b,F=b+1,X=b+2;s=$u(this,_,e,n,d,p,m,U,F,X),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=S.materialIndex,t.push(s))}}else{const E=Math.max(0,y.start),M=Math.min(f.count,y.start+y.count);for(let S=E,_=M;S<_;S+=3){const R=S,C=S+1,b=S+2;s=$u(this,l,e,n,d,p,m,R,C,b),s&&(s.faceIndex=Math.floor(S/3),t.push(s))}}}}function cw(r,e,t,n,s,o,l,c){let f;if(e.side===zn?f=n.intersectTriangle(l,o,s,!0,c):f=n.intersectTriangle(s,o,l,e.side===Mr,c),f===null)return null;Yu.copy(c),Yu.applyMatrix4(r.matrixWorld);const d=t.ray.origin.distanceTo(Yu);return d<t.near||d>t.far?null:{distance:d,point:Yu.clone(),object:r}}function $u(r,e,t,n,s,o,l,c,f,d){r.getVertexPosition(c,Gu),r.getVertexPosition(f,Wu),r.getVertexPosition(d,ju);const p=cw(r,e,t,n,Gu,Wu,ju,b0);if(p){const m=new j;Pi.getBarycoord(b0,Gu,Wu,ju,m),s&&(p.uv=Pi.getInterpolatedAttribute(s,c,f,d,m,new dt)),o&&(p.uv1=Pi.getInterpolatedAttribute(o,c,f,d,m,new dt)),l&&(p.normal=Pi.getInterpolatedAttribute(l,c,f,d,m,new j),p.normal.dot(n.direction)>0&&p.normal.multiplyScalar(-1));const v={a:c,b:f,c:d,normal:new j,materialIndex:0};Pi.getNormal(Gu,Wu,ju,v.normal),p.face=v,p.barycoord=m}return p}class xl extends _i{constructor(e=1,t=1,n=1,s=1,o=1,l=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:o,depthSegments:l};const c=this;s=Math.floor(s),o=Math.floor(o),l=Math.floor(l);const f=[],d=[],p=[],m=[];let v=0,y=0;E("z","y","x",-1,-1,n,t,e,l,o,0),E("z","y","x",1,-1,n,t,-e,l,o,1),E("x","z","y",1,1,e,n,t,s,l,2),E("x","z","y",1,-1,e,n,-t,s,l,3),E("x","y","z",1,-1,e,t,n,s,o,4),E("x","y","z",-1,-1,e,t,-n,s,o,5),this.setIndex(f),this.setAttribute("position",new gi(d,3)),this.setAttribute("normal",new gi(p,3)),this.setAttribute("uv",new gi(m,2));function E(M,S,_,R,C,b,I,U,F,X,P){const L=b/F,H=I/X,J=b/2,ie=I/2,he=U/2,ue=F+1,re=X+1;let le=0,z=0;const ce=new j;for(let se=0;se<re;se++){const O=se*H-ie;for(let ne=0;ne<ue;ne++){const ke=ne*L-J;ce[M]=ke*R,ce[S]=O*C,ce[_]=he,d.push(ce.x,ce.y,ce.z),ce[M]=0,ce[S]=0,ce[_]=U>0?1:-1,p.push(ce.x,ce.y,ce.z),m.push(ne/F),m.push(1-se/X),le+=1}}for(let se=0;se<X;se++)for(let O=0;O<F;O++){const ne=v+O+ue*se,ke=v+O+ue*(se+1),Ye=v+(O+1)+ue*(se+1),Ge=v+(O+1)+ue*se;f.push(ne,ke,Ge),f.push(ke,Ye,Ge),z+=6}c.addGroup(y,z,P),y+=z,v+=le}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ya(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const s=r[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function kn(r){const e={};for(let t=0;t<r.length;t++){const n=Ya(r[t]);for(const s in n)e[s]=n[s]}return e}function fw(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Ky(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Rt.workingColorSpace}const dw={clone:Ya,merge:kn};var hw=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,pw=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Tr extends Xi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=hw,this.fragmentShader=pw,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ya(e.uniforms),this.uniformsGroups=fw(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const l=this.uniforms[s].value;l&&l.isTexture?t.uniforms[s]={type:"t",value:l.toJSON(e).uuid}:l&&l.isColor?t.uniforms[s]={type:"c",value:l.getHex()}:l&&l.isVector2?t.uniforms[s]={type:"v2",value:l.toArray()}:l&&l.isVector3?t.uniforms[s]={type:"v3",value:l.toArray()}:l&&l.isVector4?t.uniforms[s]={type:"v4",value:l.toArray()}:l&&l.isMatrix3?t.uniforms[s]={type:"m3",value:l.toArray()}:l&&l.isMatrix4?t.uniforms[s]={type:"m4",value:l.toArray()}:t.uniforms[s]={value:l}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class qy extends en{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new yt,this.projectionMatrix=new yt,this.projectionMatrixInverse=new yt,this.coordinateSystem=Wi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const es=new j,A0=new dt,R0=new dt;class Bn extends qy{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Xa*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Jo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Xa*2*Math.atan(Math.tan(Jo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){es.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(es.x,es.y).multiplyScalar(-e/es.z),es.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(es.x,es.y).multiplyScalar(-e/es.z)}getViewSize(e,t){return this.getViewBounds(e,A0,R0),t.subVectors(R0,A0)}setViewOffset(e,t,n,s,o,l){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=o,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Jo*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,o=-.5*s;const l=this.view;if(this.view!==null&&this.view.enabled){const f=l.fullWidth,d=l.fullHeight;o+=l.offsetX*s/f,t-=l.offsetY*n/d,s*=l.width/f,n*=l.height/d}const c=this.filmOffset;c!==0&&(o+=e*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ba=-90,Aa=1;class mw extends en{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Bn(ba,Aa,e,t);s.layers=this.layers,this.add(s);const o=new Bn(ba,Aa,e,t);o.layers=this.layers,this.add(o);const l=new Bn(ba,Aa,e,t);l.layers=this.layers,this.add(l);const c=new Bn(ba,Aa,e,t);c.layers=this.layers,this.add(c);const f=new Bn(ba,Aa,e,t);f.layers=this.layers,this.add(f);const d=new Bn(ba,Aa,e,t);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,o,l,c,f]=t;for(const d of t)this.remove(d);if(e===Wi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),l.up.set(0,0,1),l.lookAt(0,-1,0),c.up.set(0,1,0),c.lookAt(0,0,1),f.up.set(0,1,0),f.lookAt(0,0,-1);else if(e===Tc)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),l.up.set(0,0,-1),l.lookAt(0,-1,0),c.up.set(0,-1,0),c.lookAt(0,0,1),f.up.set(0,-1,0),f.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const d of t)this.add(d),d.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,l,c,f,d,p]=this.children,m=e.getRenderTarget(),v=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const M=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,o),e.setRenderTarget(n,1,s),e.render(t,l),e.setRenderTarget(n,2,s),e.render(t,c),e.setRenderTarget(n,3,s),e.render(t,f),e.setRenderTarget(n,4,s),e.render(t,d),n.texture.generateMipmaps=M,e.setRenderTarget(n,5,s),e.render(t,p),e.setRenderTarget(m,v,y),e.xr.enabled=E,n.texture.needsPMREMUpdate=!0}}class Zy extends _n{constructor(e=[],t=Ga,n,s,o,l,c,f,d,p){super(e,t,n,s,o,l,c,f,d,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class gw extends zs{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Zy(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new xl(5,5,5),o=new Tr({name:"CubemapFromEquirect",uniforms:Ya(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:zn,blending:ss});o.uniforms.tEquirect.value=t;const l=new qn(s,o),c=t.minFilter;return t.minFilter===_r&&(t.minFilter=ri),new mw(1,10,this).update(e,l),t.minFilter=c,l.geometry.dispose(),l.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const o=e.getRenderTarget();for(let l=0;l<6;l++)e.setRenderTarget(this,l),e.clear(t,n,s);e.setRenderTarget(o)}}class Os extends en{constructor(){super(),this.isGroup=!0,this.type="Group"}}const vw={type:"move"};class Kd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Os,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Os,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new j,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new j),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Os,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new j,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new j),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,o=null,l=null;const c=this._targetRay,f=this._grip,d=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(d&&e.hand){l=!0;for(const M of e.hand.values()){const S=t.getJointPose(M,n),_=this._getHandJoint(d,M);S!==null&&(_.matrix.fromArray(S.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=S.radius),_.visible=S!==null}const p=d.joints["index-finger-tip"],m=d.joints["thumb-tip"],v=p.position.distanceTo(m.position),y=.02,E=.005;d.inputState.pinching&&v>y+E?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!d.inputState.pinching&&v<=y-E&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else f!==null&&e.gripSpace&&(o=t.getPose(e.gripSpace,n),o!==null&&(f.matrix.fromArray(o.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,o.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(o.linearVelocity)):f.hasLinearVelocity=!1,o.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(o.angularVelocity)):f.hasAngularVelocity=!1));c!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&o!==null&&(s=o),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(vw)))}return c!==null&&(c.visible=s!==null),f!==null&&(f.visible=o!==null),d!==null&&(d.visible=l!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Os;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class _w extends en{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ki,this.environmentIntensity=1,this.environmentRotation=new Ki,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class yw{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=lp,this.updateRanges=[],this.version=0,this.uuid=Di()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,o=this.stride;s<o;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Di()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Di()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const On=new j;class Yp{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)On.fromBufferAttribute(this,t),On.applyMatrix4(e),this.setXYZ(t,On.x,On.y,On.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)On.fromBufferAttribute(this,t),On.applyNormalMatrix(e),this.setXYZ(t,On.x,On.y,On.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)On.fromBufferAttribute(this,t),On.transformDirection(e),this.setXYZ(t,On.x,On.y,On.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Ci(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ut(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Ut(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Ci(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Ci(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Ci(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Ci(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ut(t,this.array),n=Ut(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ut(t,this.array),n=Ut(n,this.array),s=Ut(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,o){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ut(t,this.array),n=Ut(n,this.array),s=Ut(s,this.array),o=Ut(o,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=o,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)t.push(this.data.array[s+o])}return new In(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Yp(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)t.push(this.data.array[s+o])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const C0=new j,P0=new Lt,L0=new Lt,xw=new j,I0=new yt,Ku=new j,qd=new Zi,D0=new yt,Zd=new yl;class Sw extends qn{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=s0,this.bindMatrix=new yt,this.bindMatrixInverse=new yt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new qi),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ku),this.boundingBox.expandByPoint(Ku)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Zi),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ku),this.boundingSphere.expandByPoint(Ku)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),qd.copy(this.boundingSphere),qd.applyMatrix4(s),e.ray.intersectsSphere(qd)!==!1&&(D0.copy(s).invert(),Zd.copy(e.ray).applyMatrix4(D0),!(this.boundingBox!==null&&Zd.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Zd)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Lt,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);const o=1/e.manhattanLength();o!==1/0?e.multiplyScalar(o):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===s0?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===vT?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,s=this.geometry;P0.fromBufferAttribute(s.attributes.skinIndex,e),L0.fromBufferAttribute(s.attributes.skinWeight,e),C0.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let o=0;o<4;o++){const l=L0.getComponent(o);if(l!==0){const c=P0.getComponent(o);I0.multiplyMatrices(n.bones[c].matrixWorld,n.boneInverses[c]),t.addScaledVector(xw.copy(C0).applyMatrix4(I0),l)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Jy extends en{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Qy extends _n{constructor(e=null,t=1,n=1,s,o,l,c,f,d=Hn,p=Hn,m,v){super(null,l,c,f,d,p,s,o,m,v),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const N0=new yt,Ew=new yt;class $p{constructor(e=[],t=[]){this.uuid=Di(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new yt)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new yt;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let o=0,l=e.length;o<l;o++){const c=e[o]?e[o].matrixWorld:Ew;N0.multiplyMatrices(c,t[o]),N0.toArray(n,o*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new $p(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Qy(t,e,e,mi,Li);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){const o=e.bones[n];let l=t[o];l===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",o),l=new Jy),this.bones.push(l),this.boneInverses.push(new yt().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let s=0,o=t.length;s<o;s++){const l=t[s];e.bones.push(l.uuid);const c=n[s];e.boneInverses.push(c.toArray())}return e}}class up extends In{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Ra=new yt,U0=new yt,qu=[],F0=new qi,Mw=new yt,Wo=new qn,jo=new Zi;class Tw extends qn{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new up(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Mw)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new qi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ra),F0.copy(e.boundingBox).applyMatrix4(Ra),this.boundingBox.union(F0)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Zi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ra),jo.copy(e.boundingSphere).applyMatrix4(Ra),this.boundingSphere.union(jo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,o=n.length+1,l=e*o+1;for(let c=0;c<n.length;c++)n[c]=s[l+c]}raycast(e,t){const n=this.matrixWorld,s=this.count;if(Wo.geometry=this.geometry,Wo.material=this.material,Wo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),jo.copy(this.boundingSphere),jo.applyMatrix4(n),e.ray.intersectsSphere(jo)!==!1))for(let o=0;o<s;o++){this.getMatrixAt(o,Ra),U0.multiplyMatrices(n,Ra),Wo.matrixWorld=U0,Wo.raycast(e,qu);for(let l=0,c=qu.length;l<c;l++){const f=qu[l];f.instanceId=o,f.object=this,t.push(f)}qu.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new up(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Qy(new Float32Array(s*this.count),s,this.count,Hp,Li));const o=this.morphTexture.source.data.data;let l=0;for(let d=0;d<n.length;d++)l+=n[d];const c=this.geometry.morphTargetsRelative?1:1-l,f=s*e;o[f]=c,o.set(n,f+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Jd=new j,ww=new j,bw=new vt;class ns{constructor(e=new j(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=Jd.subVectors(n,t).cross(ww.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Jd),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/s;return o<0||o>1?null:t.copy(e.start).addScaledVector(n,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||bw.getNormalMatrix(e),s=this.coplanarPoint(Jd).applyMatrix4(e),o=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Cs=new Zi,Aw=new dt(.5,.5),Zu=new j;class Kp{constructor(e=new ns,t=new ns,n=new ns,s=new ns,o=new ns,l=new ns){this.planes=[e,t,n,s,o,l]}set(e,t,n,s,o,l){const c=this.planes;return c[0].copy(e),c[1].copy(t),c[2].copy(n),c[3].copy(s),c[4].copy(o),c[5].copy(l),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Wi,n=!1){const s=this.planes,o=e.elements,l=o[0],c=o[1],f=o[2],d=o[3],p=o[4],m=o[5],v=o[6],y=o[7],E=o[8],M=o[9],S=o[10],_=o[11],R=o[12],C=o[13],b=o[14],I=o[15];if(s[0].setComponents(d-l,y-p,_-E,I-R).normalize(),s[1].setComponents(d+l,y+p,_+E,I+R).normalize(),s[2].setComponents(d+c,y+m,_+M,I+C).normalize(),s[3].setComponents(d-c,y-m,_-M,I-C).normalize(),n)s[4].setComponents(f,v,S,b).normalize(),s[5].setComponents(d-f,y-v,_-S,I-b).normalize();else if(s[4].setComponents(d-f,y-v,_-S,I-b).normalize(),t===Wi)s[5].setComponents(d+f,y+v,_+S,I+b).normalize();else if(t===Tc)s[5].setComponents(f,v,S,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Cs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Cs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Cs)}intersectsSprite(e){Cs.center.set(0,0,0);const t=Aw.distanceTo(e.center);return Cs.radius=.7071067811865476+t,Cs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Cs)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let o=0;o<6;o++)if(t[o].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(Zu.x=s.normal.x>0?e.max.x:e.min.x,Zu.y=s.normal.y>0?e.max.y:e.min.y,Zu.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Zu)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ex extends Xi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new mt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const wc=new j,bc=new j,O0=new yt,Xo=new yl,Ju=new Zi,Qd=new j,k0=new j;class qp extends en{constructor(e=new _i,t=new ex){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,o=t.count;s<o;s++)wc.fromBufferAttribute(t,s-1),bc.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=wc.distanceTo(bc);e.setAttribute("lineDistance",new gi(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,o=e.params.Line.threshold,l=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ju.copy(n.boundingSphere),Ju.applyMatrix4(s),Ju.radius+=o,e.ray.intersectsSphere(Ju)===!1)return;O0.copy(s).invert(),Xo.copy(e.ray).applyMatrix4(O0);const c=o/((this.scale.x+this.scale.y+this.scale.z)/3),f=c*c,d=this.isLineSegments?2:1,p=n.index,v=n.attributes.position;if(p!==null){const y=Math.max(0,l.start),E=Math.min(p.count,l.start+l.count);for(let M=y,S=E-1;M<S;M+=d){const _=p.getX(M),R=p.getX(M+1),C=Qu(this,e,Xo,f,_,R,M);C&&t.push(C)}if(this.isLineLoop){const M=p.getX(E-1),S=p.getX(y),_=Qu(this,e,Xo,f,M,S,E-1);_&&t.push(_)}}else{const y=Math.max(0,l.start),E=Math.min(v.count,l.start+l.count);for(let M=y,S=E-1;M<S;M+=d){const _=Qu(this,e,Xo,f,M,M+1,M);_&&t.push(_)}if(this.isLineLoop){const M=Qu(this,e,Xo,f,E-1,y,E-1);M&&t.push(M)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,l=s.length;o<l;o++){const c=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=o}}}}}function Qu(r,e,t,n,s,o,l){const c=r.geometry.attributes.position;if(wc.fromBufferAttribute(c,s),bc.fromBufferAttribute(c,o),t.distanceSqToSegment(wc,bc,Qd,k0)>n)return;Qd.applyMatrix4(r.matrixWorld);const d=e.ray.origin.distanceTo(Qd);if(!(d<e.near||d>e.far))return{distance:d,point:k0.clone().applyMatrix4(r.matrixWorld),index:l,face:null,faceIndex:null,barycoord:null,object:r}}const B0=new j,z0=new j;class Rw extends qp{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,o=t.count;s<o;s+=2)B0.fromBufferAttribute(t,s),z0.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+B0.distanceTo(z0);e.setAttribute("lineDistance",new gi(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Cw extends qp{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Zp extends Xi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new mt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const H0=new yt,cp=new yl,ec=new Zi,tc=new j;class tx extends en{constructor(e=new _i,t=new Zp){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,o=e.params.Points.threshold,l=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ec.copy(n.boundingSphere),ec.applyMatrix4(s),ec.radius+=o,e.ray.intersectsSphere(ec)===!1)return;H0.copy(s).invert(),cp.copy(e.ray).applyMatrix4(H0);const c=o/((this.scale.x+this.scale.y+this.scale.z)/3),f=c*c,d=n.index,m=n.attributes.position;if(d!==null){const v=Math.max(0,l.start),y=Math.min(d.count,l.start+l.count);for(let E=v,M=y;E<M;E++){const S=d.getX(E);tc.fromBufferAttribute(m,S),V0(tc,S,f,s,e,t,this)}}else{const v=Math.max(0,l.start),y=Math.min(m.count,l.start+l.count);for(let E=v,M=y;E<M;E++)tc.fromBufferAttribute(m,E),V0(tc,E,f,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,l=s.length;o<l;o++){const c=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=o}}}}}function V0(r,e,t,n,s,o,l){const c=cp.distanceSqToPoint(r);if(c<t){const f=new j;cp.closestPointToPoint(r,f),f.applyMatrix4(n);const d=s.ray.origin.distanceTo(f);if(d<s.near||d>s.far)return;o.push({distance:d,distanceToRay:Math.sqrt(c),point:f,index:e,face:null,faceIndex:null,barycoord:null,object:l})}}class nx extends _n{constructor(e,t,n=Bs,s,o,l,c=Hn,f=Hn,d,p=ol,m=1){if(p!==ol&&p!==ll)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:e,height:t,depth:m};super(v,s,o,l,c,f,p,n,d),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Xp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class ix extends _n{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Nc extends _i{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const o=e/2,l=t/2,c=Math.floor(n),f=Math.floor(s),d=c+1,p=f+1,m=e/c,v=t/f,y=[],E=[],M=[],S=[];for(let _=0;_<p;_++){const R=_*v-l;for(let C=0;C<d;C++){const b=C*m-o;E.push(b,-R,0),M.push(0,0,1),S.push(C/c),S.push(1-_/f)}}for(let _=0;_<f;_++)for(let R=0;R<c;R++){const C=R+d*_,b=R+d*(_+1),I=R+1+d*(_+1),U=R+1+d*_;y.push(C,b,U),y.push(b,I,U)}this.setIndex(y),this.setAttribute("position",new gi(E,3)),this.setAttribute("normal",new gi(M,3)),this.setAttribute("uv",new gi(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Nc(e.width,e.height,e.widthSegments,e.heightSegments)}}class Jp extends _i{constructor(e=1,t=32,n=16,s=0,o=Math.PI*2,l=0,c=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:o,thetaStart:l,thetaLength:c},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const f=Math.min(l+c,Math.PI);let d=0;const p=[],m=new j,v=new j,y=[],E=[],M=[],S=[];for(let _=0;_<=n;_++){const R=[],C=_/n;let b=0;_===0&&l===0?b=.5/t:_===n&&f===Math.PI&&(b=-.5/t);for(let I=0;I<=t;I++){const U=I/t;m.x=-e*Math.cos(s+U*o)*Math.sin(l+C*c),m.y=e*Math.cos(l+C*c),m.z=e*Math.sin(s+U*o)*Math.sin(l+C*c),E.push(m.x,m.y,m.z),v.copy(m).normalize(),M.push(v.x,v.y,v.z),S.push(U+b,1-C),R.push(d++)}p.push(R)}for(let _=0;_<n;_++)for(let R=0;R<t;R++){const C=p[_][R+1],b=p[_][R],I=p[_+1][R],U=p[_+1][R+1];(_!==0||l>0)&&y.push(C,b,U),(_!==n-1||f<Math.PI)&&y.push(b,I,U)}this.setIndex(y),this.setAttribute("position",new gi(E,3)),this.setAttribute("normal",new gi(M,3)),this.setAttribute("uv",new gi(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jp(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Qp extends Xi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new mt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new mt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=zy,this.normalScale=new dt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ki,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ji extends Qp{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new dt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return St(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new mt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new mt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new mt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Pw extends Xi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=xT,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Lw extends Xi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function nc(r,e){return!r||r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function Iw(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function Dw(r){function e(s,o){return r[s]-r[o]}const t=r.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function G0(r,e,t){const n=r.length,s=new r.constructor(n);for(let o=0,l=0;l!==n;++o){const c=t[o]*e;for(let f=0;f!==e;++f)s[l++]=r[c+f]}return s}function rx(r,e,t,n){let s=1,o=r[0];for(;o!==void 0&&o[n]===void 0;)o=r[s++];if(o===void 0)return;let l=o[n];if(l!==void 0)if(Array.isArray(l))do l=o[n],l!==void 0&&(e.push(o.time),t.push(...l)),o=r[s++];while(o!==void 0);else if(l.toArray!==void 0)do l=o[n],l!==void 0&&(e.push(o.time),l.toArray(t,t.length)),o=r[s++];while(o!==void 0);else do l=o[n],l!==void 0&&(e.push(o.time),t.push(l)),o=r[s++];while(o!==void 0)}class Sl{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,s=t[n],o=t[n-1];e:{t:{let l;n:{i:if(!(e<s)){for(let c=n+2;;){if(s===void 0){if(e<o)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===c)break;if(o=s,s=t[++n],e<s)break t}l=t.length;break n}if(!(e>=o)){const c=t[1];e<c&&(n=2,o=c);for(let f=n-2;;){if(o===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===f)break;if(s=o,o=t[--n-1],e>=o)break t}l=n,n=0;break n}break e}for(;n<l;){const c=n+l>>>1;e<t[c]?l=c:n=c+1}if(s=t[n],o=t[n-1],o===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,o,s)}return this.interpolate_(n,o,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,o=e*s;for(let l=0;l!==s;++l)t[l]=n[o+l];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Nw extends Sl{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:a0,endingEnd:a0}}intervalChanged_(e,t,n){const s=this.parameterPositions;let o=e-2,l=e+1,c=s[o],f=s[l];if(c===void 0)switch(this.getSettings_().endingStart){case o0:o=e,c=2*t-n;break;case l0:o=s.length-2,c=t+s[o]-s[o+1];break;default:o=e,c=n}if(f===void 0)switch(this.getSettings_().endingEnd){case o0:l=e,f=2*n-t;break;case l0:l=1,f=n+s[1]-s[0];break;default:l=e-1,f=t}const d=(n-t)*.5,p=this.valueSize;this._weightPrev=d/(t-c),this._weightNext=d/(f-n),this._offsetPrev=o*p,this._offsetNext=l*p}interpolate_(e,t,n,s){const o=this.resultBuffer,l=this.sampleValues,c=this.valueSize,f=e*c,d=f-c,p=this._offsetPrev,m=this._offsetNext,v=this._weightPrev,y=this._weightNext,E=(n-t)/(s-t),M=E*E,S=M*E,_=-v*S+2*v*M-v*E,R=(1+v)*S+(-1.5-2*v)*M+(-.5+v)*E+1,C=(-1-y)*S+(1.5+y)*M+.5*E,b=y*S-y*M;for(let I=0;I!==c;++I)o[I]=_*l[p+I]+R*l[d+I]+C*l[f+I]+b*l[m+I];return o}}class Uw extends Sl{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const o=this.resultBuffer,l=this.sampleValues,c=this.valueSize,f=e*c,d=f-c,p=(n-t)/(s-t),m=1-p;for(let v=0;v!==c;++v)o[v]=l[d+v]*m+l[f+v]*p;return o}}class Fw extends Sl{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class Fi{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=nc(t,this.TimeBufferType),this.values=nc(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:nc(e.times,Array),values:nc(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Fw(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Uw(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Nw(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ul:t=this.InterpolantFactoryMethodDiscrete;break;case cl:t=this.InterpolantFactoryMethodLinear;break;case Rd:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ul;case this.InterpolantFactoryMethodLinear:return cl;case this.InterpolantFactoryMethodSmooth:return Rd}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){const n=this.times,s=n.length;let o=0,l=s-1;for(;o!==s&&n[o]<e;)++o;for(;l!==-1&&n[l]>t;)--l;if(++l,o!==0||l!==s){o>=l&&(l=Math.max(l,1),o=l-1);const c=this.getValueSize();this.times=n.slice(o,l),this.values=this.values.slice(o*c,l*c)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,s=this.values,o=n.length;o===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let l=null;for(let c=0;c!==o;c++){const f=n[c];if(typeof f=="number"&&isNaN(f)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,c,f),e=!1;break}if(l!==null&&l>f){console.error("THREE.KeyframeTrack: Out of order keys.",this,c,f,l),e=!1;break}l=f}if(s!==void 0&&Iw(s))for(let c=0,f=s.length;c!==f;++c){const d=s[c];if(isNaN(d)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,c,d),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Rd,o=e.length-1;let l=1;for(let c=1;c<o;++c){let f=!1;const d=e[c],p=e[c+1];if(d!==p&&(c!==1||d!==e[0]))if(s)f=!0;else{const m=c*n,v=m-n,y=m+n;for(let E=0;E!==n;++E){const M=t[m+E];if(M!==t[v+E]||M!==t[y+E]){f=!0;break}}}if(f){if(c!==l){e[l]=e[c];const m=c*n,v=l*n;for(let y=0;y!==n;++y)t[v+y]=t[m+y]}++l}}if(o>0){e[l]=e[o];for(let c=o*n,f=l*n,d=0;d!==n;++d)t[f+d]=t[c+d];++l}return l!==e.length?(this.times=e.slice(0,l),this.values=t.slice(0,l*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}Fi.prototype.ValueTypeName="";Fi.prototype.TimeBufferType=Float32Array;Fi.prototype.ValueBufferType=Float32Array;Fi.prototype.DefaultInterpolation=cl;class eo extends Fi{constructor(e,t,n){super(e,t,n)}}eo.prototype.ValueTypeName="bool";eo.prototype.ValueBufferType=Array;eo.prototype.DefaultInterpolation=ul;eo.prototype.InterpolantFactoryMethodLinear=void 0;eo.prototype.InterpolantFactoryMethodSmooth=void 0;class sx extends Fi{constructor(e,t,n,s){super(e,t,n,s)}}sx.prototype.ValueTypeName="color";class $a extends Fi{constructor(e,t,n,s){super(e,t,n,s)}}$a.prototype.ValueTypeName="number";class Ow extends Sl{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const o=this.resultBuffer,l=this.sampleValues,c=this.valueSize,f=(n-t)/(s-t);let d=e*c;for(let p=d+c;d!==p;d+=4)$i.slerpFlat(o,0,l,d-c,l,d,f);return o}}class Ka extends Fi{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Ow(this.times,this.values,this.getValueSize(),e)}}Ka.prototype.ValueTypeName="quaternion";Ka.prototype.InterpolantFactoryMethodSmooth=void 0;class to extends Fi{constructor(e,t,n){super(e,t,n)}}to.prototype.ValueTypeName="string";to.prototype.ValueBufferType=Array;to.prototype.DefaultInterpolation=ul;to.prototype.InterpolantFactoryMethodLinear=void 0;to.prototype.InterpolantFactoryMethodSmooth=void 0;class qa extends Fi{constructor(e,t,n,s){super(e,t,n,s)}}qa.prototype.ValueTypeName="vector";class kw{constructor(e="",t=-1,n=[],s=_T){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=Di(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,s=1/(e.fps||1);for(let l=0,c=n.length;l!==c;++l)t.push(zw(n[l]).scale(s));const o=new this(e.name,e.duration,t,e.blendMode);return o.uuid=e.uuid,o.userData=JSON.parse(e.userData||"{}"),o}static toJSON(e){const t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let o=0,l=n.length;o!==l;++o)t.push(Fi.toJSON(n[o]));return s}static CreateFromMorphTargetSequence(e,t,n,s){const o=t.length,l=[];for(let c=0;c<o;c++){let f=[],d=[];f.push((c+o-1)%o,c,(c+1)%o),d.push(0,1,0);const p=Dw(f);f=G0(f,1,p),d=G0(d,1,p),!s&&f[0]===0&&(f.push(o),d.push(d[0])),l.push(new $a(".morphTargetInfluences["+t[c].name+"]",f,d).scale(1/n))}return new this(e,-1,l)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const s={},o=/^([\w-]*?)([\d]+)$/;for(let c=0,f=e.length;c<f;c++){const d=e[c],p=d.name.match(o);if(p&&p.length>1){const m=p[1];let v=s[m];v||(s[m]=v=[]),v.push(d)}}const l=[];for(const c in s)l.push(this.CreateFromMorphTargetSequence(c,s[c],t,n));return l}static parseAnimation(e,t){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(m,v,y,E,M){if(y.length!==0){const S=[],_=[];rx(y,S,_,E),S.length!==0&&M.push(new m(v,S,_))}},s=[],o=e.name||"default",l=e.fps||30,c=e.blendMode;let f=e.length||-1;const d=e.hierarchy||[];for(let m=0;m<d.length;m++){const v=d[m].keys;if(!(!v||v.length===0))if(v[0].morphTargets){const y={};let E;for(E=0;E<v.length;E++)if(v[E].morphTargets)for(let M=0;M<v[E].morphTargets.length;M++)y[v[E].morphTargets[M]]=-1;for(const M in y){const S=[],_=[];for(let R=0;R!==v[E].morphTargets.length;++R){const C=v[E];S.push(C.time),_.push(C.morphTarget===M?1:0)}s.push(new $a(".morphTargetInfluence["+M+"]",S,_))}f=y.length*l}else{const y=".bones["+t[m].name+"]";n(qa,y+".position",v,"pos",s),n(Ka,y+".quaternion",v,"rot",s),n(qa,y+".scale",v,"scl",s)}}return s.length===0?null:new this(o,f,s,c)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,s=e.length;n!==s;++n){const o=this.tracks[n];t=Math.max(t,o.times[o.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function Bw(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return $a;case"vector":case"vector2":case"vector3":case"vector4":return qa;case"color":return sx;case"quaternion":return Ka;case"bool":case"boolean":return eo;case"string":return to}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function zw(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Bw(r.type);if(r.times===void 0){const t=[],n=[];rx(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const yr={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class Hw{constructor(e,t,n){const s=this;let o=!1,l=0,c=0,f;const d=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(p){c++,o===!1&&s.onStart!==void 0&&s.onStart(p,l,c),o=!0},this.itemEnd=function(p){l++,s.onProgress!==void 0&&s.onProgress(p,l,c),l===c&&(o=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(p){s.onError!==void 0&&s.onError(p)},this.resolveURL=function(p){return f?f(p):p},this.setURLModifier=function(p){return f=p,this},this.addHandler=function(p,m){return d.push(p,m),this},this.removeHandler=function(p){const m=d.indexOf(p);return m!==-1&&d.splice(m,2),this},this.getHandler=function(p){for(let m=0,v=d.length;m<v;m+=2){const y=d[m],E=d[m+1];if(y.global&&(y.lastIndex=0),y.test(p))return E}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const Vw=new Hw;class no{constructor(e){this.manager=e!==void 0?e:Vw,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,o){n.load(e,s,t,o)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}no.DEFAULT_MATERIAL_NAME="__DEFAULT";const pr={};class Gw extends Error{constructor(e,t){super(e),this.response=t}}class ax extends no{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const o=yr.get(`file:${e}`);if(o!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(o),this.manager.itemEnd(e)},0),o;if(pr[e]!==void 0){pr[e].push({onLoad:t,onProgress:n,onError:s});return}pr[e]=[],pr[e].push({onLoad:t,onProgress:n,onError:s});const l=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),c=this.mimeType,f=this.responseType;fetch(l).then(d=>{if(d.status===200||d.status===0){if(d.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||d.body===void 0||d.body.getReader===void 0)return d;const p=pr[e],m=d.body.getReader(),v=d.headers.get("X-File-Size")||d.headers.get("Content-Length"),y=v?parseInt(v):0,E=y!==0;let M=0;const S=new ReadableStream({start(_){R();function R(){m.read().then(({done:C,value:b})=>{if(C)_.close();else{M+=b.byteLength;const I=new ProgressEvent("progress",{lengthComputable:E,loaded:M,total:y});for(let U=0,F=p.length;U<F;U++){const X=p[U];X.onProgress&&X.onProgress(I)}_.enqueue(b),R()}},C=>{_.error(C)})}}});return new Response(S)}else throw new Gw(`fetch for "${d.url}" responded with ${d.status}: ${d.statusText}`,d)}).then(d=>{switch(f){case"arraybuffer":return d.arrayBuffer();case"blob":return d.blob();case"document":return d.text().then(p=>new DOMParser().parseFromString(p,c));case"json":return d.json();default:if(c==="")return d.text();{const m=/charset="?([^;"\s]*)"?/i.exec(c),v=m&&m[1]?m[1].toLowerCase():void 0,y=new TextDecoder(v);return d.arrayBuffer().then(E=>y.decode(E))}}}).then(d=>{yr.add(`file:${e}`,d);const p=pr[e];delete pr[e];for(let m=0,v=p.length;m<v;m++){const y=p[m];y.onLoad&&y.onLoad(d)}}).catch(d=>{const p=pr[e];if(p===void 0)throw this.manager.itemError(e),d;delete pr[e];for(let m=0,v=p.length;m<v;m++){const y=p[m];y.onError&&y.onError(d)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Ca=new WeakMap;class Ww extends no{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const o=this,l=yr.get(`image:${e}`);if(l!==void 0){if(l.complete===!0)o.manager.itemStart(e),setTimeout(function(){t&&t(l),o.manager.itemEnd(e)},0);else{let m=Ca.get(l);m===void 0&&(m=[],Ca.set(l,m)),m.push({onLoad:t,onError:s})}return l}const c=fl("img");function f(){p(),t&&t(this);const m=Ca.get(this)||[];for(let v=0;v<m.length;v++){const y=m[v];y.onLoad&&y.onLoad(this)}Ca.delete(this),o.manager.itemEnd(e)}function d(m){p(),s&&s(m),yr.remove(`image:${e}`);const v=Ca.get(this)||[];for(let y=0;y<v.length;y++){const E=v[y];E.onError&&E.onError(m)}Ca.delete(this),o.manager.itemError(e),o.manager.itemEnd(e)}function p(){c.removeEventListener("load",f,!1),c.removeEventListener("error",d,!1)}return c.addEventListener("load",f,!1),c.addEventListener("error",d,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(c.crossOrigin=this.crossOrigin),yr.add(`image:${e}`,c),o.manager.itemStart(e),c.src=e,c}}class jw extends no{constructor(e){super(e)}load(e,t,n,s){const o=new _n,l=new Ww(this.manager);return l.setCrossOrigin(this.crossOrigin),l.setPath(this.path),l.load(e,function(c){o.image=c,o.needsUpdate=!0,t!==void 0&&t(o)},n,s),o}}class Uc extends en{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new mt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const eh=new yt,W0=new j,j0=new j;class em{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new dt(512,512),this.mapType=Yi,this.map=null,this.mapPass=null,this.matrix=new yt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Kp,this._frameExtents=new dt(1,1),this._viewportCount=1,this._viewports=[new Lt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;W0.setFromMatrixPosition(e.matrixWorld),t.position.copy(W0),j0.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(j0),t.updateMatrixWorld(),eh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(eh,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(eh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Xw extends em{constructor(){super(new Bn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=Xa*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,o=e.distance||t.far;(n!==t.fov||s!==t.aspect||o!==t.far)&&(t.fov=n,t.aspect=s,t.far=o,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Yw extends Uc{constructor(e,t,n=0,s=Math.PI/3,o=0,l=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(en.DEFAULT_UP),this.updateMatrix(),this.target=new en,this.distance=n,this.angle=s,this.penumbra=o,this.decay=l,this.map=null,this.shadow=new Xw}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const X0=new yt,Yo=new j,th=new j;class $w extends em{constructor(){super(new Bn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new dt(4,2),this._viewportCount=6,this._viewports=[new Lt(2,1,1,1),new Lt(0,1,1,1),new Lt(3,1,1,1),new Lt(1,1,1,1),new Lt(3,0,1,1),new Lt(1,0,1,1)],this._cubeDirections=[new j(1,0,0),new j(-1,0,0),new j(0,0,1),new j(0,0,-1),new j(0,1,0),new j(0,-1,0)],this._cubeUps=[new j(0,1,0),new j(0,1,0),new j(0,1,0),new j(0,1,0),new j(0,0,1),new j(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,s=this.matrix,o=e.distance||n.far;o!==n.far&&(n.far=o,n.updateProjectionMatrix()),Yo.setFromMatrixPosition(e.matrixWorld),n.position.copy(Yo),th.copy(n.position),th.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(th),n.updateMatrixWorld(),s.makeTranslation(-Yo.x,-Yo.y,-Yo.z),X0.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(X0,n.coordinateSystem,n.reversedDepth)}}class ox extends Uc{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new $w}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class tm extends qy{constructor(e=-1,t=1,n=1,s=-1,o=.1,l=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=o,this.far=l,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,o,l){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=o,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let o=n-e,l=n+e,c=s+t,f=s-t;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=d*this.view.offsetX,l=o+d*this.view.width,c-=p*this.view.offsetY,f=c-p*this.view.height}this.projectionMatrix.makeOrthographic(o,l,c,f,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Kw extends em{constructor(){super(new tm(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class lx extends Uc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(en.DEFAULT_UP),this.updateMatrix(),this.target=new en,this.shadow=new Kw}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class qw extends Uc{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class el{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const nh=new WeakMap;class Zw extends no{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const o=this,l=yr.get(`image-bitmap:${e}`);if(l!==void 0){if(o.manager.itemStart(e),l.then){l.then(d=>{if(nh.has(l)===!0)s&&s(nh.get(l)),o.manager.itemError(e),o.manager.itemEnd(e);else return t&&t(d),o.manager.itemEnd(e),d});return}return setTimeout(function(){t&&t(l),o.manager.itemEnd(e)},0),l}const c={};c.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",c.headers=this.requestHeader,c.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const f=fetch(e,c).then(function(d){return d.blob()}).then(function(d){return createImageBitmap(d,Object.assign(o.options,{colorSpaceConversion:"none"}))}).then(function(d){return yr.add(`image-bitmap:${e}`,d),t&&t(d),o.manager.itemEnd(e),d}).catch(function(d){s&&s(d),nh.set(f,d),yr.remove(`image-bitmap:${e}`),o.manager.itemError(e),o.manager.itemEnd(e)});yr.add(`image-bitmap:${e}`,f),o.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class Jw extends Bn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const nm="\\[\\]\\.:\\/",Qw=new RegExp("["+nm+"]","g"),im="[^"+nm+"]",eb="[^"+nm.replace("\\.","")+"]",tb=/((?:WC+[\/:])*)/.source.replace("WC",im),nb=/(WCOD+)?/.source.replace("WCOD",eb),ib=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",im),rb=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",im),sb=new RegExp("^"+tb+nb+ib+rb+"$"),ab=["material","materials","bones","map"];class ob{constructor(e,t,n){const s=n||Ft.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,o=n.length;s!==o;++s)n[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Ft{constructor(e,t,n){this.path=t,this.parsedPath=n||Ft.parseTrackName(t),this.node=Ft.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Ft.Composite(e,t,n):new Ft(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Qw,"")}static parseTrackName(e){const t=sb.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const o=n.nodeName.substring(s+1);ab.indexOf(o)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=o)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(o){for(let l=0;l<o.length;l++){const c=o[l];if(c.name===t||c.uuid===t)return c;const f=n(c.children);if(f)return f}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let s=0,o=n.length;s!==o;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let s=0,o=n.length;s!==o;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,o=n.length;s!==o;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,o=n.length;s!==o;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,s=t.propertyName;let o=t.propertyIndex;if(e||(e=Ft.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let d=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let p=0;p<e.length;p++)if(e[p].name===d){d=p;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(d!==void 0){if(e[d]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[d]}}const l=e[s];if(l===void 0){const d=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+d+"."+s+" but it wasn't found.",e);return}let c=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?c=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(c=this.Versioning.MatrixWorldNeedsUpdate);let f=this.BindingType.Direct;if(o!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[o]!==void 0&&(o=e.morphTargetDictionary[o])}f=this.BindingType.ArrayElement,this.resolvedProperty=l,this.propertyIndex=o}else l.fromArray!==void 0&&l.toArray!==void 0?(f=this.BindingType.HasFromToArray,this.resolvedProperty=l):Array.isArray(l)?(f=this.BindingType.EntireArray,this.resolvedProperty=l):this.propertyName=s;this.getValue=this.GetterByBindingType[f],this.setValue=this.SetterByBindingTypeAndVersioning[f][c]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Ft.Composite=ob;Ft.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ft.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ft.prototype.GetterByBindingType=[Ft.prototype._getValue_direct,Ft.prototype._getValue_array,Ft.prototype._getValue_arrayElement,Ft.prototype._getValue_toArray];Ft.prototype.SetterByBindingTypeAndVersioning=[[Ft.prototype._setValue_direct,Ft.prototype._setValue_direct_setNeedsUpdate,Ft.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ft.prototype._setValue_array,Ft.prototype._setValue_array_setNeedsUpdate,Ft.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ft.prototype._setValue_arrayElement,Ft.prototype._setValue_arrayElement_setNeedsUpdate,Ft.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ft.prototype._setValue_fromArray,Ft.prototype._setValue_fromArray_setNeedsUpdate,Ft.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Y0{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=St(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(St(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class lb extends Gs{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function $0(r,e,t,n){const s=ub(n);switch(t){case Fy:return r*e;case Hp:return r*e/s.components*s.byteLength;case Vp:return r*e/s.components*s.byteLength;case ky:return r*e*2/s.components*s.byteLength;case Gp:return r*e*2/s.components*s.byteLength;case Oy:return r*e*3/s.components*s.byteLength;case mi:return r*e*4/s.components*s.byteLength;case Wp:return r*e*4/s.components*s.byteLength;case hc:case pc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case mc:case gc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Nh:case Fh:return Math.max(r,16)*Math.max(e,8)/4;case Dh:case Uh:return Math.max(r,8)*Math.max(e,8)/2;case Oh:case kh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Bh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case zh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Hh:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Vh:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Gh:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Wh:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case jh:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Xh:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Yh:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case $h:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Kh:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case qh:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Zh:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Jh:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Qh:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case ep:case tp:case np:return Math.ceil(r/4)*Math.ceil(e/4)*16;case ip:case rp:return Math.ceil(r/4)*Math.ceil(e/4)*8;case sp:case ap:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function ub(r){switch(r){case Yi:case Iy:return{byteLength:1,components:1};case sl:case Dy:case _l:return{byteLength:2,components:1};case Bp:case zp:return{byteLength:2,components:4};case Bs:case kp:case Li:return{byteLength:4,components:1};case Ny:case Uy:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Op}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Op);function ux(){let r=null,e=!1,t=null,n=null;function s(o,l){t(o,l),n=r.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(s),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(o){t=o},setContext:function(o){r=o}}}function cb(r){const e=new WeakMap;function t(c,f){const d=c.array,p=c.usage,m=d.byteLength,v=r.createBuffer();r.bindBuffer(f,v),r.bufferData(f,d,p),c.onUploadCallback();let y;if(d instanceof Float32Array)y=r.FLOAT;else if(typeof Float16Array<"u"&&d instanceof Float16Array)y=r.HALF_FLOAT;else if(d instanceof Uint16Array)c.isFloat16BufferAttribute?y=r.HALF_FLOAT:y=r.UNSIGNED_SHORT;else if(d instanceof Int16Array)y=r.SHORT;else if(d instanceof Uint32Array)y=r.UNSIGNED_INT;else if(d instanceof Int32Array)y=r.INT;else if(d instanceof Int8Array)y=r.BYTE;else if(d instanceof Uint8Array)y=r.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)y=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:v,type:y,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version,size:m}}function n(c,f,d){const p=f.array,m=f.updateRanges;if(r.bindBuffer(d,c),m.length===0)r.bufferSubData(d,0,p);else{m.sort((y,E)=>y.start-E.start);let v=0;for(let y=1;y<m.length;y++){const E=m[v],M=m[y];M.start<=E.start+E.count+1?E.count=Math.max(E.count,M.start+M.count-E.start):(++v,m[v]=M)}m.length=v+1;for(let y=0,E=m.length;y<E;y++){const M=m[y];r.bufferSubData(d,M.start*p.BYTES_PER_ELEMENT,p,M.start,M.count)}f.clearUpdateRanges()}f.onUploadCallback()}function s(c){return c.isInterleavedBufferAttribute&&(c=c.data),e.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const f=e.get(c);f&&(r.deleteBuffer(f.buffer),e.delete(c))}function l(c,f){if(c.isInterleavedBufferAttribute&&(c=c.data),c.isGLBufferAttribute){const p=e.get(c);(!p||p.version<c.version)&&e.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}const d=e.get(c);if(d===void 0)e.set(c,t(c,f));else if(d.version<c.version){if(d.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(d.buffer,c,f),d.version=c.version}}return{get:s,remove:o,update:l}}var fb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,db=`#ifdef USE_ALPHAHASH
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
#endif`,hb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,pb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,mb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,gb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,vb=`#ifdef USE_AOMAP
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
#endif`,_b=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,yb=`#ifdef USE_BATCHING
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
#endif`,xb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Sb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Eb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Mb=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Tb=`#ifdef USE_IRIDESCENCE
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
#endif`,wb=`#ifdef USE_BUMPMAP
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
#endif`,bb=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ab=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Rb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Cb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Pb=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Lb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ib=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Db=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Nb=`#define PI 3.141592653589793
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
} // validated`,Ub=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Fb=`vec3 transformedNormal = objectNormal;
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
#endif`,Ob=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,kb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Bb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,zb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Hb="gl_FragColor = linearToOutputTexel( gl_FragColor );",Vb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Gb=`#ifdef USE_ENVMAP
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
#endif`,Wb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,jb=`#ifdef USE_ENVMAP
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
#endif`,Xb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Yb=`#ifdef USE_ENVMAP
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
#endif`,$b=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Kb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,qb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Zb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Jb=`#ifdef USE_GRADIENTMAP
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
}`,Qb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,eA=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,tA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,nA=`uniform bool receiveShadow;
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
#endif`,iA=`#ifdef USE_ENVMAP
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
#endif`,rA=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,sA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,aA=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,oA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lA=`PhysicalMaterial material;
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
#endif`,uA=`struct PhysicalMaterial {
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
}`,cA=`
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
#endif`,fA=`#if defined( RE_IndirectDiffuse )
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
#endif`,dA=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,hA=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,pA=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mA=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gA=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,vA=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,_A=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,yA=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,xA=`#if defined( USE_POINTS_UV )
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
#endif`,SA=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,EA=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,MA=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,TA=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,wA=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bA=`#ifdef USE_MORPHTARGETS
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
#endif`,AA=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,RA=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,CA=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,PA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,LA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,IA=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,DA=`#ifdef USE_NORMALMAP
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
#endif`,NA=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,UA=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,FA=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,OA=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,kA=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,BA=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,zA=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,HA=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,VA=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,GA=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,WA=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,jA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,XA=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,YA=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,$A=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,KA=`float getShadowMask() {
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
}`,qA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ZA=`#ifdef USE_SKINNING
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
#endif`,JA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,QA=`#ifdef USE_SKINNING
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
#endif`,eR=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,tR=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,nR=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,iR=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,rR=`#ifdef USE_TRANSMISSION
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
#endif`,sR=`#ifdef USE_TRANSMISSION
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
#endif`,aR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,oR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uR=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const cR=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,fR=`uniform sampler2D t2D;
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
}`,dR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hR=`#ifdef ENVMAP_TYPE_CUBE
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
}`,pR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mR=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gR=`#include <common>
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
}`,vR=`#if DEPTH_PACKING == 3200
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
}`,_R=`#define DISTANCE
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
}`,yR=`#define DISTANCE
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
}`,xR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,SR=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ER=`uniform float scale;
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
}`,MR=`uniform vec3 diffuse;
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
}`,TR=`#include <common>
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
}`,wR=`uniform vec3 diffuse;
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
}`,bR=`#define LAMBERT
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
}`,AR=`#define LAMBERT
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
}`,RR=`#define MATCAP
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
}`,CR=`#define MATCAP
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
}`,PR=`#define NORMAL
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
}`,LR=`#define NORMAL
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
}`,IR=`#define PHONG
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
}`,DR=`#define PHONG
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
}`,NR=`#define STANDARD
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
}`,UR=`#define STANDARD
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
}`,FR=`#define TOON
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
}`,OR=`#define TOON
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
}`,kR=`uniform float size;
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
}`,BR=`uniform vec3 diffuse;
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
}`,zR=`#include <common>
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
}`,HR=`uniform vec3 color;
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
}`,VR=`uniform float rotation;
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
}`,GR=`uniform vec3 diffuse;
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
}`,_t={alphahash_fragment:fb,alphahash_pars_fragment:db,alphamap_fragment:hb,alphamap_pars_fragment:pb,alphatest_fragment:mb,alphatest_pars_fragment:gb,aomap_fragment:vb,aomap_pars_fragment:_b,batching_pars_vertex:yb,batching_vertex:xb,begin_vertex:Sb,beginnormal_vertex:Eb,bsdfs:Mb,iridescence_fragment:Tb,bumpmap_pars_fragment:wb,clipping_planes_fragment:bb,clipping_planes_pars_fragment:Ab,clipping_planes_pars_vertex:Rb,clipping_planes_vertex:Cb,color_fragment:Pb,color_pars_fragment:Lb,color_pars_vertex:Ib,color_vertex:Db,common:Nb,cube_uv_reflection_fragment:Ub,defaultnormal_vertex:Fb,displacementmap_pars_vertex:Ob,displacementmap_vertex:kb,emissivemap_fragment:Bb,emissivemap_pars_fragment:zb,colorspace_fragment:Hb,colorspace_pars_fragment:Vb,envmap_fragment:Gb,envmap_common_pars_fragment:Wb,envmap_pars_fragment:jb,envmap_pars_vertex:Xb,envmap_physical_pars_fragment:iA,envmap_vertex:Yb,fog_vertex:$b,fog_pars_vertex:Kb,fog_fragment:qb,fog_pars_fragment:Zb,gradientmap_pars_fragment:Jb,lightmap_pars_fragment:Qb,lights_lambert_fragment:eA,lights_lambert_pars_fragment:tA,lights_pars_begin:nA,lights_toon_fragment:rA,lights_toon_pars_fragment:sA,lights_phong_fragment:aA,lights_phong_pars_fragment:oA,lights_physical_fragment:lA,lights_physical_pars_fragment:uA,lights_fragment_begin:cA,lights_fragment_maps:fA,lights_fragment_end:dA,logdepthbuf_fragment:hA,logdepthbuf_pars_fragment:pA,logdepthbuf_pars_vertex:mA,logdepthbuf_vertex:gA,map_fragment:vA,map_pars_fragment:_A,map_particle_fragment:yA,map_particle_pars_fragment:xA,metalnessmap_fragment:SA,metalnessmap_pars_fragment:EA,morphinstance_vertex:MA,morphcolor_vertex:TA,morphnormal_vertex:wA,morphtarget_pars_vertex:bA,morphtarget_vertex:AA,normal_fragment_begin:RA,normal_fragment_maps:CA,normal_pars_fragment:PA,normal_pars_vertex:LA,normal_vertex:IA,normalmap_pars_fragment:DA,clearcoat_normal_fragment_begin:NA,clearcoat_normal_fragment_maps:UA,clearcoat_pars_fragment:FA,iridescence_pars_fragment:OA,opaque_fragment:kA,packing:BA,premultiplied_alpha_fragment:zA,project_vertex:HA,dithering_fragment:VA,dithering_pars_fragment:GA,roughnessmap_fragment:WA,roughnessmap_pars_fragment:jA,shadowmap_pars_fragment:XA,shadowmap_pars_vertex:YA,shadowmap_vertex:$A,shadowmask_pars_fragment:KA,skinbase_vertex:qA,skinning_pars_vertex:ZA,skinning_vertex:JA,skinnormal_vertex:QA,specularmap_fragment:eR,specularmap_pars_fragment:tR,tonemapping_fragment:nR,tonemapping_pars_fragment:iR,transmission_fragment:rR,transmission_pars_fragment:sR,uv_pars_fragment:aR,uv_pars_vertex:oR,uv_vertex:lR,worldpos_vertex:uR,background_vert:cR,background_frag:fR,backgroundCube_vert:dR,backgroundCube_frag:hR,cube_vert:pR,cube_frag:mR,depth_vert:gR,depth_frag:vR,distanceRGBA_vert:_R,distanceRGBA_frag:yR,equirect_vert:xR,equirect_frag:SR,linedashed_vert:ER,linedashed_frag:MR,meshbasic_vert:TR,meshbasic_frag:wR,meshlambert_vert:bR,meshlambert_frag:AR,meshmatcap_vert:RR,meshmatcap_frag:CR,meshnormal_vert:PR,meshnormal_frag:LR,meshphong_vert:IR,meshphong_frag:DR,meshphysical_vert:NR,meshphysical_frag:UR,meshtoon_vert:FR,meshtoon_frag:OR,points_vert:kR,points_frag:BR,shadow_vert:zR,shadow_frag:HR,sprite_vert:VR,sprite_frag:GR},Le={common:{diffuse:{value:new mt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new vt},alphaMap:{value:null},alphaMapTransform:{value:new vt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new vt}},envmap:{envMap:{value:null},envMapRotation:{value:new vt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new vt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new vt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new vt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new vt},normalScale:{value:new dt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new vt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new vt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new vt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new vt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new mt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new mt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new vt},alphaTest:{value:0},uvTransform:{value:new vt}},sprite:{diffuse:{value:new mt(16777215)},opacity:{value:1},center:{value:new dt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new vt},alphaMap:{value:null},alphaMapTransform:{value:new vt},alphaTest:{value:0}}},Vi={basic:{uniforms:kn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.fog]),vertexShader:_t.meshbasic_vert,fragmentShader:_t.meshbasic_frag},lambert:{uniforms:kn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new mt(0)}}]),vertexShader:_t.meshlambert_vert,fragmentShader:_t.meshlambert_frag},phong:{uniforms:kn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new mt(0)},specular:{value:new mt(1118481)},shininess:{value:30}}]),vertexShader:_t.meshphong_vert,fragmentShader:_t.meshphong_frag},standard:{uniforms:kn([Le.common,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.roughnessmap,Le.metalnessmap,Le.fog,Le.lights,{emissive:{value:new mt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:_t.meshphysical_vert,fragmentShader:_t.meshphysical_frag},toon:{uniforms:kn([Le.common,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.gradientmap,Le.fog,Le.lights,{emissive:{value:new mt(0)}}]),vertexShader:_t.meshtoon_vert,fragmentShader:_t.meshtoon_frag},matcap:{uniforms:kn([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,{matcap:{value:null}}]),vertexShader:_t.meshmatcap_vert,fragmentShader:_t.meshmatcap_frag},points:{uniforms:kn([Le.points,Le.fog]),vertexShader:_t.points_vert,fragmentShader:_t.points_frag},dashed:{uniforms:kn([Le.common,Le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:_t.linedashed_vert,fragmentShader:_t.linedashed_frag},depth:{uniforms:kn([Le.common,Le.displacementmap]),vertexShader:_t.depth_vert,fragmentShader:_t.depth_frag},normal:{uniforms:kn([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,{opacity:{value:1}}]),vertexShader:_t.meshnormal_vert,fragmentShader:_t.meshnormal_frag},sprite:{uniforms:kn([Le.sprite,Le.fog]),vertexShader:_t.sprite_vert,fragmentShader:_t.sprite_frag},background:{uniforms:{uvTransform:{value:new vt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:_t.background_vert,fragmentShader:_t.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new vt}},vertexShader:_t.backgroundCube_vert,fragmentShader:_t.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:_t.cube_vert,fragmentShader:_t.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:_t.equirect_vert,fragmentShader:_t.equirect_frag},distanceRGBA:{uniforms:kn([Le.common,Le.displacementmap,{referencePosition:{value:new j},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:_t.distanceRGBA_vert,fragmentShader:_t.distanceRGBA_frag},shadow:{uniforms:kn([Le.lights,Le.fog,{color:{value:new mt(0)},opacity:{value:1}}]),vertexShader:_t.shadow_vert,fragmentShader:_t.shadow_frag}};Vi.physical={uniforms:kn([Vi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new vt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new vt},clearcoatNormalScale:{value:new dt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new vt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new vt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new vt},sheen:{value:0},sheenColor:{value:new mt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new vt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new vt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new vt},transmissionSamplerSize:{value:new dt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new vt},attenuationDistance:{value:0},attenuationColor:{value:new mt(0)},specularColor:{value:new mt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new vt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new vt},anisotropyVector:{value:new dt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new vt}}]),vertexShader:_t.meshphysical_vert,fragmentShader:_t.meshphysical_frag};const ic={r:0,b:0,g:0},Ps=new Ki,WR=new yt;function jR(r,e,t,n,s,o,l){const c=new mt(0);let f=o===!0?0:1,d,p,m=null,v=0,y=null;function E(C){let b=C.isScene===!0?C.background:null;return b&&b.isTexture&&(b=(C.backgroundBlurriness>0?t:e).get(b)),b}function M(C){let b=!1;const I=E(C);I===null?_(c,f):I&&I.isColor&&(_(I,1),b=!0);const U=r.xr.getEnvironmentBlendMode();U==="additive"?n.buffers.color.setClear(0,0,0,1,l):U==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,l),(r.autoClear||b)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function S(C,b){const I=E(b);I&&(I.isCubeTexture||I.mapping===Dc)?(p===void 0&&(p=new qn(new xl(1,1,1),new Tr({name:"BackgroundCubeMaterial",uniforms:Ya(Vi.backgroundCube.uniforms),vertexShader:Vi.backgroundCube.vertexShader,fragmentShader:Vi.backgroundCube.fragmentShader,side:zn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(U,F,X){this.matrixWorld.copyPosition(X.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(p)),Ps.copy(b.backgroundRotation),Ps.x*=-1,Ps.y*=-1,Ps.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(Ps.y*=-1,Ps.z*=-1),p.material.uniforms.envMap.value=I,p.material.uniforms.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,p.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(WR.makeRotationFromEuler(Ps)),p.material.toneMapped=Rt.getTransfer(I.colorSpace)!==Bt,(m!==I||v!==I.version||y!==r.toneMapping)&&(p.material.needsUpdate=!0,m=I,v=I.version,y=r.toneMapping),p.layers.enableAll(),C.unshift(p,p.geometry,p.material,0,0,null)):I&&I.isTexture&&(d===void 0&&(d=new qn(new Nc(2,2),new Tr({name:"BackgroundMaterial",uniforms:Ya(Vi.background.uniforms),vertexShader:Vi.background.vertexShader,fragmentShader:Vi.background.fragmentShader,side:Mr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(d)),d.material.uniforms.t2D.value=I,d.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,d.material.toneMapped=Rt.getTransfer(I.colorSpace)!==Bt,I.matrixAutoUpdate===!0&&I.updateMatrix(),d.material.uniforms.uvTransform.value.copy(I.matrix),(m!==I||v!==I.version||y!==r.toneMapping)&&(d.material.needsUpdate=!0,m=I,v=I.version,y=r.toneMapping),d.layers.enableAll(),C.unshift(d,d.geometry,d.material,0,0,null))}function _(C,b){C.getRGB(ic,Ky(r)),n.buffers.color.setClear(ic.r,ic.g,ic.b,b,l)}function R(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0)}return{getClearColor:function(){return c},setClearColor:function(C,b=1){c.set(C),f=b,_(c,f)},getClearAlpha:function(){return f},setClearAlpha:function(C){f=C,_(c,f)},render:M,addToRenderList:S,dispose:R}}function XR(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},s=v(null);let o=s,l=!1;function c(L,H,J,ie,he){let ue=!1;const re=m(ie,J,H);o!==re&&(o=re,d(o.object)),ue=y(L,ie,J,he),ue&&E(L,ie,J,he),he!==null&&e.update(he,r.ELEMENT_ARRAY_BUFFER),(ue||l)&&(l=!1,b(L,H,J,ie),he!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(he).buffer))}function f(){return r.createVertexArray()}function d(L){return r.bindVertexArray(L)}function p(L){return r.deleteVertexArray(L)}function m(L,H,J){const ie=J.wireframe===!0;let he=n[L.id];he===void 0&&(he={},n[L.id]=he);let ue=he[H.id];ue===void 0&&(ue={},he[H.id]=ue);let re=ue[ie];return re===void 0&&(re=v(f()),ue[ie]=re),re}function v(L){const H=[],J=[],ie=[];for(let he=0;he<t;he++)H[he]=0,J[he]=0,ie[he]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:J,attributeDivisors:ie,object:L,attributes:{},index:null}}function y(L,H,J,ie){const he=o.attributes,ue=H.attributes;let re=0;const le=J.getAttributes();for(const z in le)if(le[z].location>=0){const se=he[z];let O=ue[z];if(O===void 0&&(z==="instanceMatrix"&&L.instanceMatrix&&(O=L.instanceMatrix),z==="instanceColor"&&L.instanceColor&&(O=L.instanceColor)),se===void 0||se.attribute!==O||O&&se.data!==O.data)return!0;re++}return o.attributesNum!==re||o.index!==ie}function E(L,H,J,ie){const he={},ue=H.attributes;let re=0;const le=J.getAttributes();for(const z in le)if(le[z].location>=0){let se=ue[z];se===void 0&&(z==="instanceMatrix"&&L.instanceMatrix&&(se=L.instanceMatrix),z==="instanceColor"&&L.instanceColor&&(se=L.instanceColor));const O={};O.attribute=se,se&&se.data&&(O.data=se.data),he[z]=O,re++}o.attributes=he,o.attributesNum=re,o.index=ie}function M(){const L=o.newAttributes;for(let H=0,J=L.length;H<J;H++)L[H]=0}function S(L){_(L,0)}function _(L,H){const J=o.newAttributes,ie=o.enabledAttributes,he=o.attributeDivisors;J[L]=1,ie[L]===0&&(r.enableVertexAttribArray(L),ie[L]=1),he[L]!==H&&(r.vertexAttribDivisor(L,H),he[L]=H)}function R(){const L=o.newAttributes,H=o.enabledAttributes;for(let J=0,ie=H.length;J<ie;J++)H[J]!==L[J]&&(r.disableVertexAttribArray(J),H[J]=0)}function C(L,H,J,ie,he,ue,re){re===!0?r.vertexAttribIPointer(L,H,J,he,ue):r.vertexAttribPointer(L,H,J,ie,he,ue)}function b(L,H,J,ie){M();const he=ie.attributes,ue=J.getAttributes(),re=H.defaultAttributeValues;for(const le in ue){const z=ue[le];if(z.location>=0){let ce=he[le];if(ce===void 0&&(le==="instanceMatrix"&&L.instanceMatrix&&(ce=L.instanceMatrix),le==="instanceColor"&&L.instanceColor&&(ce=L.instanceColor)),ce!==void 0){const se=ce.normalized,O=ce.itemSize,ne=e.get(ce);if(ne===void 0)continue;const ke=ne.buffer,Ye=ne.type,Ge=ne.bytesPerElement,Q=Ye===r.INT||Ye===r.UNSIGNED_INT||ce.gpuType===kp;if(ce.isInterleavedBufferAttribute){const fe=ce.data,Ee=fe.stride,De=ce.offset;if(fe.isInstancedInterleavedBuffer){for(let Oe=0;Oe<z.locationSize;Oe++)_(z.location+Oe,fe.meshPerAttribute);L.isInstancedMesh!==!0&&ie._maxInstanceCount===void 0&&(ie._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let Oe=0;Oe<z.locationSize;Oe++)S(z.location+Oe);r.bindBuffer(r.ARRAY_BUFFER,ke);for(let Oe=0;Oe<z.locationSize;Oe++)C(z.location+Oe,O/z.locationSize,Ye,se,Ee*Ge,(De+O/z.locationSize*Oe)*Ge,Q)}else{if(ce.isInstancedBufferAttribute){for(let fe=0;fe<z.locationSize;fe++)_(z.location+fe,ce.meshPerAttribute);L.isInstancedMesh!==!0&&ie._maxInstanceCount===void 0&&(ie._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let fe=0;fe<z.locationSize;fe++)S(z.location+fe);r.bindBuffer(r.ARRAY_BUFFER,ke);for(let fe=0;fe<z.locationSize;fe++)C(z.location+fe,O/z.locationSize,Ye,se,O*Ge,O/z.locationSize*fe*Ge,Q)}}else if(re!==void 0){const se=re[le];if(se!==void 0)switch(se.length){case 2:r.vertexAttrib2fv(z.location,se);break;case 3:r.vertexAttrib3fv(z.location,se);break;case 4:r.vertexAttrib4fv(z.location,se);break;default:r.vertexAttrib1fv(z.location,se)}}}}R()}function I(){X();for(const L in n){const H=n[L];for(const J in H){const ie=H[J];for(const he in ie)p(ie[he].object),delete ie[he];delete H[J]}delete n[L]}}function U(L){if(n[L.id]===void 0)return;const H=n[L.id];for(const J in H){const ie=H[J];for(const he in ie)p(ie[he].object),delete ie[he];delete H[J]}delete n[L.id]}function F(L){for(const H in n){const J=n[H];if(J[L.id]===void 0)continue;const ie=J[L.id];for(const he in ie)p(ie[he].object),delete ie[he];delete J[L.id]}}function X(){P(),l=!0,o!==s&&(o=s,d(o.object))}function P(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:c,reset:X,resetDefaultState:P,dispose:I,releaseStatesOfGeometry:U,releaseStatesOfProgram:F,initAttributes:M,enableAttribute:S,disableUnusedAttributes:R}}function YR(r,e,t){let n;function s(d){n=d}function o(d,p){r.drawArrays(n,d,p),t.update(p,n,1)}function l(d,p,m){m!==0&&(r.drawArraysInstanced(n,d,p,m),t.update(p,n,m))}function c(d,p,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,d,0,p,0,m);let y=0;for(let E=0;E<m;E++)y+=p[E];t.update(y,n,1)}function f(d,p,m,v){if(m===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let E=0;E<d.length;E++)l(d[E],p[E],v[E]);else{y.multiDrawArraysInstancedWEBGL(n,d,0,p,0,v,0,m);let E=0;for(let M=0;M<m;M++)E+=p[M]*v[M];t.update(E,n,1)}}this.setMode=s,this.render=o,this.renderInstances=l,this.renderMultiDraw=c,this.renderMultiDrawInstances=f}function $R(r,e,t,n){let s;function o(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");s=r.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function l(F){return!(F!==mi&&n.convert(F)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function c(F){const X=F===_l&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(F!==Yi&&n.convert(F)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==Li&&!X)}function f(F){if(F==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=t.precision!==void 0?t.precision:"highp";const p=f(d);p!==d&&(console.warn("THREE.WebGLRenderer:",d,"not supported, using",p,"instead."),d=p);const m=t.logarithmicDepthBuffer===!0,v=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),y=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),E=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=r.getParameter(r.MAX_TEXTURE_SIZE),S=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),_=r.getParameter(r.MAX_VERTEX_ATTRIBS),R=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),C=r.getParameter(r.MAX_VARYING_VECTORS),b=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),I=E>0,U=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:f,textureFormatReadable:l,textureTypeReadable:c,precision:d,logarithmicDepthBuffer:m,reversedDepthBuffer:v,maxTextures:y,maxVertexTextures:E,maxTextureSize:M,maxCubemapSize:S,maxAttributes:_,maxVertexUniforms:R,maxVaryings:C,maxFragmentUniforms:b,vertexTextures:I,maxSamples:U}}function KR(r){const e=this;let t=null,n=0,s=!1,o=!1;const l=new ns,c=new vt,f={value:null,needsUpdate:!1};this.uniform=f,this.numPlanes=0,this.numIntersection=0,this.init=function(m,v){const y=m.length!==0||v||n!==0||s;return s=v,n=m.length,y},this.beginShadows=function(){o=!0,p(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(m,v){t=p(m,v,0)},this.setState=function(m,v,y){const E=m.clippingPlanes,M=m.clipIntersection,S=m.clipShadows,_=r.get(m);if(!s||E===null||E.length===0||o&&!S)o?p(null):d();else{const R=o?0:n,C=R*4;let b=_.clippingState||null;f.value=b,b=p(E,v,C,y);for(let I=0;I!==C;++I)b[I]=t[I];_.clippingState=b,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=R}};function d(){f.value!==t&&(f.value=t,f.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function p(m,v,y,E){const M=m!==null?m.length:0;let S=null;if(M!==0){if(S=f.value,E!==!0||S===null){const _=y+M*4,R=v.matrixWorldInverse;c.getNormalMatrix(R),(S===null||S.length<_)&&(S=new Float32Array(_));for(let C=0,b=y;C!==M;++C,b+=4)l.copy(m[C]).applyMatrix4(R,c),l.normal.toArray(S,b),S[b+3]=l.constant}f.value=S,f.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,S}}function qR(r){let e=new WeakMap;function t(l,c){return c===Lh?l.mapping=Ga:c===Ih&&(l.mapping=Wa),l}function n(l){if(l&&l.isTexture){const c=l.mapping;if(c===Lh||c===Ih)if(e.has(l)){const f=e.get(l).texture;return t(f,l.mapping)}else{const f=l.image;if(f&&f.height>0){const d=new gw(f.height);return d.fromEquirectangularTexture(r,l),e.set(l,d),l.addEventListener("dispose",s),t(d.texture,l.mapping)}else return null}}return l}function s(l){const c=l.target;c.removeEventListener("dispose",s);const f=e.get(c);f!==void 0&&(e.delete(c),f.dispose())}function o(){e=new WeakMap}return{get:n,dispose:o}}const Ua=4,K0=[.125,.215,.35,.446,.526,.582],Us=20,ih=new tm,q0=new mt;let rh=null,sh=0,ah=0,oh=!1;const Ds=(1+Math.sqrt(5))/2,Pa=1/Ds,Z0=[new j(-Ds,Pa,0),new j(Ds,Pa,0),new j(-Pa,0,Ds),new j(Pa,0,Ds),new j(0,Ds,-Pa),new j(0,Ds,Pa),new j(-1,1,-1),new j(1,1,-1),new j(-1,1,1),new j(1,1,1)],ZR=new j;class J0{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100,o={}){const{size:l=256,position:c=ZR}=o;rh=this._renderer.getRenderTarget(),sh=this._renderer.getActiveCubeFace(),ah=this._renderer.getActiveMipmapLevel(),oh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(l);const f=this._allocateTargets();return f.depthBuffer=!0,this._sceneToCubeUV(e,n,s,f,c),t>0&&this._blur(f,0,0,t),this._applyPMREM(f),this._cleanup(f),f}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=t_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=e_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(rh,sh,ah),this._renderer.xr.enabled=oh,e.scissorTest=!1,rc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ga||e.mapping===Wa?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),rh=this._renderer.getRenderTarget(),sh=this._renderer.getActiveCubeFace(),ah=this._renderer.getActiveMipmapLevel(),oh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:ri,minFilter:ri,generateMipmaps:!1,type:_l,format:mi,colorSpace:Vn,depthBuffer:!1},s=Q0(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Q0(e,t,n);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=JR(o)),this._blurMaterial=QR(o,e,t)}return s}_compileMaterial(e){const t=new qn(this._lodPlanes[0],e);this._renderer.compile(t,ih)}_sceneToCubeUV(e,t,n,s,o){const f=new Bn(90,1,t,n),d=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],m=this._renderer,v=m.autoClear,y=m.toneMapping;m.getClearColor(q0),m.toneMapping=as,m.autoClear=!1,m.state.buffers.depth.getReversed()&&(m.setRenderTarget(s),m.clearDepth(),m.setRenderTarget(null));const M=new Fs({name:"PMREM.Background",side:zn,depthWrite:!1,depthTest:!1}),S=new qn(new xl,M);let _=!1;const R=e.background;R?R.isColor&&(M.color.copy(R),e.background=null,_=!0):(M.color.copy(q0),_=!0);for(let C=0;C<6;C++){const b=C%3;b===0?(f.up.set(0,d[C],0),f.position.set(o.x,o.y,o.z),f.lookAt(o.x+p[C],o.y,o.z)):b===1?(f.up.set(0,0,d[C]),f.position.set(o.x,o.y,o.z),f.lookAt(o.x,o.y+p[C],o.z)):(f.up.set(0,d[C],0),f.position.set(o.x,o.y,o.z),f.lookAt(o.x,o.y,o.z+p[C]));const I=this._cubeSize;rc(s,b*I,C>2?I:0,I,I),m.setRenderTarget(s),_&&m.render(S,f),m.render(e,f)}S.geometry.dispose(),S.material.dispose(),m.toneMapping=y,m.autoClear=v,e.background=R}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===Ga||e.mapping===Wa;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=t_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=e_());const o=s?this._cubemapMaterial:this._equirectMaterial,l=new qn(this._lodPlanes[0],o),c=o.uniforms;c.envMap.value=e;const f=this._cubeSize;rc(t,0,0,3*f,2*f),n.setRenderTarget(t),n.render(l,ih)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let o=1;o<s;o++){const l=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),c=Z0[(s-o-1)%Z0.length];this._blur(e,o-1,o,l,c)}t.autoClear=n}_blur(e,t,n,s,o){const l=this._pingPongRenderTarget;this._halfBlur(e,l,t,n,s,"latitudinal",o),this._halfBlur(l,e,n,n,s,"longitudinal",o)}_halfBlur(e,t,n,s,o,l,c){const f=this._renderer,d=this._blurMaterial;l!=="latitudinal"&&l!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const p=3,m=new qn(this._lodPlanes[s],d),v=d.uniforms,y=this._sizeLods[n]-1,E=isFinite(o)?Math.PI/(2*y):2*Math.PI/(2*Us-1),M=o/E,S=isFinite(o)?1+Math.floor(p*M):Us;S>Us&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${Us}`);const _=[];let R=0;for(let F=0;F<Us;++F){const X=F/M,P=Math.exp(-X*X/2);_.push(P),F===0?R+=P:F<S&&(R+=2*P)}for(let F=0;F<_.length;F++)_[F]=_[F]/R;v.envMap.value=e.texture,v.samples.value=S,v.weights.value=_,v.latitudinal.value=l==="latitudinal",c&&(v.poleAxis.value=c);const{_lodMax:C}=this;v.dTheta.value=E,v.mipInt.value=C-n;const b=this._sizeLods[s],I=3*b*(s>C-Ua?s-C+Ua:0),U=4*(this._cubeSize-b);rc(t,I,U,3*b,2*b),f.setRenderTarget(t),f.render(m,ih)}}function JR(r){const e=[],t=[],n=[];let s=r;const o=r-Ua+1+K0.length;for(let l=0;l<o;l++){const c=Math.pow(2,s);t.push(c);let f=1/c;l>r-Ua?f=K0[l-r+Ua-1]:l===0&&(f=0),n.push(f);const d=1/(c-2),p=-d,m=1+d,v=[p,p,m,p,m,m,p,p,m,m,p,m],y=6,E=6,M=3,S=2,_=1,R=new Float32Array(M*E*y),C=new Float32Array(S*E*y),b=new Float32Array(_*E*y);for(let U=0;U<y;U++){const F=U%3*2/3-1,X=U>2?0:-1,P=[F,X,0,F+2/3,X,0,F+2/3,X+1,0,F,X,0,F+2/3,X+1,0,F,X+1,0];R.set(P,M*E*U),C.set(v,S*E*U);const L=[U,U,U,U,U,U];b.set(L,_*E*U)}const I=new _i;I.setAttribute("position",new In(R,M)),I.setAttribute("uv",new In(C,S)),I.setAttribute("faceIndex",new In(b,_)),e.push(I),s>Ua&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Q0(r,e,t){const n=new zs(r,e,t);return n.texture.mapping=Dc,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function rc(r,e,t,n,s){r.viewport.set(e,t,n,s),r.scissor.set(e,t,n,s)}function QR(r,e,t){const n=new Float32Array(Us),s=new j(0,1,0);return new Tr({name:"SphericalGaussianBlur",defines:{n:Us,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:rm(),fragmentShader:`

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
		`,blending:ss,depthTest:!1,depthWrite:!1})}function e_(){return new Tr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:rm(),fragmentShader:`

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
		`,blending:ss,depthTest:!1,depthWrite:!1})}function t_(){return new Tr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:rm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ss,depthTest:!1,depthWrite:!1})}function rm(){return`

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
	`}function eC(r){let e=new WeakMap,t=null;function n(c){if(c&&c.isTexture){const f=c.mapping,d=f===Lh||f===Ih,p=f===Ga||f===Wa;if(d||p){let m=e.get(c);const v=m!==void 0?m.texture.pmremVersion:0;if(c.isRenderTargetTexture&&c.pmremVersion!==v)return t===null&&(t=new J0(r)),m=d?t.fromEquirectangular(c,m):t.fromCubemap(c,m),m.texture.pmremVersion=c.pmremVersion,e.set(c,m),m.texture;if(m!==void 0)return m.texture;{const y=c.image;return d&&y&&y.height>0||p&&y&&s(y)?(t===null&&(t=new J0(r)),m=d?t.fromEquirectangular(c):t.fromCubemap(c),m.texture.pmremVersion=c.pmremVersion,e.set(c,m),c.addEventListener("dispose",o),m.texture):null}}}return c}function s(c){let f=0;const d=6;for(let p=0;p<d;p++)c[p]!==void 0&&f++;return f===d}function o(c){const f=c.target;f.removeEventListener("dispose",o);const d=e.get(f);d!==void 0&&(e.delete(f),d.dispose())}function l(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:l}}function tC(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=r.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&dl("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function nC(r,e,t,n){const s={},o=new WeakMap;function l(m){const v=m.target;v.index!==null&&e.remove(v.index);for(const E in v.attributes)e.remove(v.attributes[E]);v.removeEventListener("dispose",l),delete s[v.id];const y=o.get(v);y&&(e.remove(y),o.delete(v)),n.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,t.memory.geometries--}function c(m,v){return s[v.id]===!0||(v.addEventListener("dispose",l),s[v.id]=!0,t.memory.geometries++),v}function f(m){const v=m.attributes;for(const y in v)e.update(v[y],r.ARRAY_BUFFER)}function d(m){const v=[],y=m.index,E=m.attributes.position;let M=0;if(y!==null){const R=y.array;M=y.version;for(let C=0,b=R.length;C<b;C+=3){const I=R[C+0],U=R[C+1],F=R[C+2];v.push(I,U,U,F,F,I)}}else if(E!==void 0){const R=E.array;M=E.version;for(let C=0,b=R.length/3-1;C<b;C+=3){const I=C+0,U=C+1,F=C+2;v.push(I,U,U,F,F,I)}}else return;const S=new(Gy(v)?$y:Yy)(v,1);S.version=M;const _=o.get(m);_&&e.remove(_),o.set(m,S)}function p(m){const v=o.get(m);if(v){const y=m.index;y!==null&&v.version<y.version&&d(m)}else d(m);return o.get(m)}return{get:c,update:f,getWireframeAttribute:p}}function iC(r,e,t){let n;function s(v){n=v}let o,l;function c(v){o=v.type,l=v.bytesPerElement}function f(v,y){r.drawElements(n,y,o,v*l),t.update(y,n,1)}function d(v,y,E){E!==0&&(r.drawElementsInstanced(n,y,o,v*l,E),t.update(y,n,E))}function p(v,y,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,y,0,o,v,0,E);let S=0;for(let _=0;_<E;_++)S+=y[_];t.update(S,n,1)}function m(v,y,E,M){if(E===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let _=0;_<v.length;_++)d(v[_]/l,y[_],M[_]);else{S.multiDrawElementsInstancedWEBGL(n,y,0,o,v,0,M,0,E);let _=0;for(let R=0;R<E;R++)_+=y[R]*M[R];t.update(_,n,1)}}this.setMode=s,this.setIndex=c,this.render=f,this.renderInstances=d,this.renderMultiDraw=p,this.renderMultiDrawInstances=m}function rC(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,l,c){switch(t.calls++,l){case r.TRIANGLES:t.triangles+=c*(o/3);break;case r.LINES:t.lines+=c*(o/2);break;case r.LINE_STRIP:t.lines+=c*(o-1);break;case r.LINE_LOOP:t.lines+=c*o;break;case r.POINTS:t.points+=c*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",l);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function sC(r,e,t){const n=new WeakMap,s=new Lt;function o(l,c,f){const d=l.morphTargetInfluences,p=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,m=p!==void 0?p.length:0;let v=n.get(c);if(v===void 0||v.count!==m){let L=function(){X.dispose(),n.delete(c),c.removeEventListener("dispose",L)};var y=L;v!==void 0&&v.texture.dispose();const E=c.morphAttributes.position!==void 0,M=c.morphAttributes.normal!==void 0,S=c.morphAttributes.color!==void 0,_=c.morphAttributes.position||[],R=c.morphAttributes.normal||[],C=c.morphAttributes.color||[];let b=0;E===!0&&(b=1),M===!0&&(b=2),S===!0&&(b=3);let I=c.attributes.position.count*b,U=1;I>e.maxTextureSize&&(U=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const F=new Float32Array(I*U*4*m),X=new Wy(F,I,U,m);X.type=Li,X.needsUpdate=!0;const P=b*4;for(let H=0;H<m;H++){const J=_[H],ie=R[H],he=C[H],ue=I*U*4*H;for(let re=0;re<J.count;re++){const le=re*P;E===!0&&(s.fromBufferAttribute(J,re),F[ue+le+0]=s.x,F[ue+le+1]=s.y,F[ue+le+2]=s.z,F[ue+le+3]=0),M===!0&&(s.fromBufferAttribute(ie,re),F[ue+le+4]=s.x,F[ue+le+5]=s.y,F[ue+le+6]=s.z,F[ue+le+7]=0),S===!0&&(s.fromBufferAttribute(he,re),F[ue+le+8]=s.x,F[ue+le+9]=s.y,F[ue+le+10]=s.z,F[ue+le+11]=he.itemSize===4?s.w:1)}}v={count:m,texture:X,size:new dt(I,U)},n.set(c,v),c.addEventListener("dispose",L)}if(l.isInstancedMesh===!0&&l.morphTexture!==null)f.getUniforms().setValue(r,"morphTexture",l.morphTexture,t);else{let E=0;for(let S=0;S<d.length;S++)E+=d[S];const M=c.morphTargetsRelative?1:1-E;f.getUniforms().setValue(r,"morphTargetBaseInfluence",M),f.getUniforms().setValue(r,"morphTargetInfluences",d)}f.getUniforms().setValue(r,"morphTargetsTexture",v.texture,t),f.getUniforms().setValue(r,"morphTargetsTextureSize",v.size)}return{update:o}}function aC(r,e,t,n){let s=new WeakMap;function o(f){const d=n.render.frame,p=f.geometry,m=e.get(f,p);if(s.get(m)!==d&&(e.update(m),s.set(m,d)),f.isInstancedMesh&&(f.hasEventListener("dispose",c)===!1&&f.addEventListener("dispose",c),s.get(f)!==d&&(t.update(f.instanceMatrix,r.ARRAY_BUFFER),f.instanceColor!==null&&t.update(f.instanceColor,r.ARRAY_BUFFER),s.set(f,d))),f.isSkinnedMesh){const v=f.skeleton;s.get(v)!==d&&(v.update(),s.set(v,d))}return m}function l(){s=new WeakMap}function c(f){const d=f.target;d.removeEventListener("dispose",c),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:o,dispose:l}}const cx=new _n,n_=new nx(1,1),fx=new Wy,dx=new QT,hx=new Zy,i_=[],r_=[],s_=new Float32Array(16),a_=new Float32Array(9),o_=new Float32Array(4);function io(r,e,t){const n=r[0];if(n<=0||n>0)return r;const s=e*t;let o=i_[s];if(o===void 0&&(o=new Float32Array(s),i_[s]=o),e!==0){n.toArray(o,0);for(let l=1,c=0;l!==e;++l)c+=t,r[l].toArray(o,c)}return o}function dn(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function hn(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Fc(r,e){let t=r_[e];t===void 0&&(t=new Int32Array(e),r_[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function oC(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function lC(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dn(t,e))return;r.uniform2fv(this.addr,e),hn(t,e)}}function uC(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(dn(t,e))return;r.uniform3fv(this.addr,e),hn(t,e)}}function cC(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dn(t,e))return;r.uniform4fv(this.addr,e),hn(t,e)}}function fC(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(dn(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),hn(t,e)}else{if(dn(t,n))return;o_.set(n),r.uniformMatrix2fv(this.addr,!1,o_),hn(t,n)}}function dC(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(dn(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),hn(t,e)}else{if(dn(t,n))return;a_.set(n),r.uniformMatrix3fv(this.addr,!1,a_),hn(t,n)}}function hC(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(dn(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),hn(t,e)}else{if(dn(t,n))return;s_.set(n),r.uniformMatrix4fv(this.addr,!1,s_),hn(t,n)}}function pC(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function mC(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dn(t,e))return;r.uniform2iv(this.addr,e),hn(t,e)}}function gC(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dn(t,e))return;r.uniform3iv(this.addr,e),hn(t,e)}}function vC(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dn(t,e))return;r.uniform4iv(this.addr,e),hn(t,e)}}function _C(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function yC(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dn(t,e))return;r.uniform2uiv(this.addr,e),hn(t,e)}}function xC(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dn(t,e))return;r.uniform3uiv(this.addr,e),hn(t,e)}}function SC(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dn(t,e))return;r.uniform4uiv(this.addr,e),hn(t,e)}}function EC(r,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(r.uniform1i(this.addr,s),n[0]=s);let o;this.type===r.SAMPLER_2D_SHADOW?(n_.compareFunction=Hy,o=n_):o=cx,t.setTexture2D(e||o,s)}function MC(r,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(r.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||dx,s)}function TC(r,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(r.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||hx,s)}function wC(r,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(r.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||fx,s)}function bC(r){switch(r){case 5126:return oC;case 35664:return lC;case 35665:return uC;case 35666:return cC;case 35674:return fC;case 35675:return dC;case 35676:return hC;case 5124:case 35670:return pC;case 35667:case 35671:return mC;case 35668:case 35672:return gC;case 35669:case 35673:return vC;case 5125:return _C;case 36294:return yC;case 36295:return xC;case 36296:return SC;case 35678:case 36198:case 36298:case 36306:case 35682:return EC;case 35679:case 36299:case 36307:return MC;case 35680:case 36300:case 36308:case 36293:return TC;case 36289:case 36303:case 36311:case 36292:return wC}}function AC(r,e){r.uniform1fv(this.addr,e)}function RC(r,e){const t=io(e,this.size,2);r.uniform2fv(this.addr,t)}function CC(r,e){const t=io(e,this.size,3);r.uniform3fv(this.addr,t)}function PC(r,e){const t=io(e,this.size,4);r.uniform4fv(this.addr,t)}function LC(r,e){const t=io(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function IC(r,e){const t=io(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function DC(r,e){const t=io(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function NC(r,e){r.uniform1iv(this.addr,e)}function UC(r,e){r.uniform2iv(this.addr,e)}function FC(r,e){r.uniform3iv(this.addr,e)}function OC(r,e){r.uniform4iv(this.addr,e)}function kC(r,e){r.uniform1uiv(this.addr,e)}function BC(r,e){r.uniform2uiv(this.addr,e)}function zC(r,e){r.uniform3uiv(this.addr,e)}function HC(r,e){r.uniform4uiv(this.addr,e)}function VC(r,e,t){const n=this.cache,s=e.length,o=Fc(t,s);dn(n,o)||(r.uniform1iv(this.addr,o),hn(n,o));for(let l=0;l!==s;++l)t.setTexture2D(e[l]||cx,o[l])}function GC(r,e,t){const n=this.cache,s=e.length,o=Fc(t,s);dn(n,o)||(r.uniform1iv(this.addr,o),hn(n,o));for(let l=0;l!==s;++l)t.setTexture3D(e[l]||dx,o[l])}function WC(r,e,t){const n=this.cache,s=e.length,o=Fc(t,s);dn(n,o)||(r.uniform1iv(this.addr,o),hn(n,o));for(let l=0;l!==s;++l)t.setTextureCube(e[l]||hx,o[l])}function jC(r,e,t){const n=this.cache,s=e.length,o=Fc(t,s);dn(n,o)||(r.uniform1iv(this.addr,o),hn(n,o));for(let l=0;l!==s;++l)t.setTexture2DArray(e[l]||fx,o[l])}function XC(r){switch(r){case 5126:return AC;case 35664:return RC;case 35665:return CC;case 35666:return PC;case 35674:return LC;case 35675:return IC;case 35676:return DC;case 5124:case 35670:return NC;case 35667:case 35671:return UC;case 35668:case 35672:return FC;case 35669:case 35673:return OC;case 5125:return kC;case 36294:return BC;case 36295:return zC;case 36296:return HC;case 35678:case 36198:case 36298:case 36306:case 35682:return VC;case 35679:case 36299:case 36307:return GC;case 35680:case 36300:case 36308:case 36293:return WC;case 36289:case 36303:case 36311:case 36292:return jC}}class YC{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=bC(t.type)}}class $C{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=XC(t.type)}}class KC{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let o=0,l=s.length;o!==l;++o){const c=s[o];c.setValue(e,t[c.id],n)}}}const lh=/(\w+)(\])?(\[|\.)?/g;function l_(r,e){r.seq.push(e),r.map[e.id]=e}function qC(r,e,t){const n=r.name,s=n.length;for(lh.lastIndex=0;;){const o=lh.exec(n),l=lh.lastIndex;let c=o[1];const f=o[2]==="]",d=o[3];if(f&&(c=c|0),d===void 0||d==="["&&l+2===s){l_(t,d===void 0?new YC(c,r,e):new $C(c,r,e));break}else{let m=t.map[c];m===void 0&&(m=new KC(c),l_(t,m)),t=m}}}class vc{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const o=e.getActiveUniform(t,s),l=e.getUniformLocation(t,o.name);qC(o,l,this)}}setValue(e,t,n,s){const o=this.map[t];o!==void 0&&o.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let o=0,l=t.length;o!==l;++o){const c=t[o],f=n[c.id];f.needsUpdate!==!1&&c.setValue(e,f.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,o=e.length;s!==o;++s){const l=e[s];l.id in t&&n.push(l)}return n}}function u_(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const ZC=37297;let JC=0;function QC(r,e){const t=r.split(`
`),n=[],s=Math.max(e-6,0),o=Math.min(e+6,t.length);for(let l=s;l<o;l++){const c=l+1;n.push(`${c===e?">":" "} ${c}: ${t[l]}`)}return n.join(`
`)}const c_=new vt;function e2(r){Rt._getMatrix(c_,Rt.workingColorSpace,r);const e=`mat3( ${c_.elements.map(t=>t.toFixed(4))} )`;switch(Rt.getTransfer(r)){case Mc:return[e,"LinearTransferOETF"];case Bt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function f_(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),o=(r.getShaderInfoLog(e)||"").trim();if(n&&o==="")return"";const l=/ERROR: 0:(\d+)/.exec(o);if(l){const c=parseInt(l[1]);return t.toUpperCase()+`

`+o+`

`+QC(r.getShaderSource(e),c)}else return o}function t2(r,e){const t=e2(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function n2(r,e){let t;switch(e){case cT:t="Linear";break;case fT:t="Reinhard";break;case dT:t="Cineon";break;case hT:t="ACESFilmic";break;case mT:t="AgX";break;case gT:t="Neutral";break;case pT:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const sc=new j;function i2(){Rt.getLuminanceCoefficients(sc);const r=sc.x.toFixed(4),e=sc.y.toFixed(4),t=sc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function r2(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(qo).join(`
`)}function s2(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function a2(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const o=r.getActiveAttrib(e,s),l=o.name;let c=1;o.type===r.FLOAT_MAT2&&(c=2),o.type===r.FLOAT_MAT3&&(c=3),o.type===r.FLOAT_MAT4&&(c=4),t[l]={type:o.type,location:r.getAttribLocation(e,l),locationSize:c}}return t}function qo(r){return r!==""}function d_(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function h_(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const o2=/^[ \t]*#include +<([\w\d./]+)>/gm;function fp(r){return r.replace(o2,u2)}const l2=new Map;function u2(r,e){let t=_t[e];if(t===void 0){const n=l2.get(e);if(n!==void 0)t=_t[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return fp(t)}const c2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function p_(r){return r.replace(c2,f2)}function f2(r,e,t,n){let s="";for(let o=parseInt(e);o<parseInt(t);o++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return s}function m_(r){let e=`precision ${r.precision} float;
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
#define LOW_PRECISION`),e}function d2(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Ry?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===G1?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===vr&&(e="SHADOWMAP_TYPE_VSM"),e}function h2(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Ga:case Wa:e="ENVMAP_TYPE_CUBE";break;case Dc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function p2(r){let e="ENVMAP_MODE_REFLECTION";return r.envMap&&r.envMapMode===Wa&&(e="ENVMAP_MODE_REFRACTION"),e}function m2(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Cy:e="ENVMAP_BLENDING_MULTIPLY";break;case lT:e="ENVMAP_BLENDING_MIX";break;case uT:e="ENVMAP_BLENDING_ADD";break}return e}function g2(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function v2(r,e,t,n){const s=r.getContext(),o=t.defines;let l=t.vertexShader,c=t.fragmentShader;const f=d2(t),d=h2(t),p=p2(t),m=m2(t),v=g2(t),y=r2(t),E=s2(o),M=s.createProgram();let S,_,R=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(qo).join(`
`),S.length>0&&(S+=`
`),_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(qo).join(`
`),_.length>0&&(_+=`
`)):(S=[m_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(qo).join(`
`),_=[m_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.envMap?"#define "+p:"",t.envMap?"#define "+m:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==as?"#define TONE_MAPPING":"",t.toneMapping!==as?_t.tonemapping_pars_fragment:"",t.toneMapping!==as?n2("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",_t.colorspace_pars_fragment,t2("linearToOutputTexel",t.outputColorSpace),i2(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(qo).join(`
`)),l=fp(l),l=d_(l,t),l=h_(l,t),c=fp(c),c=d_(c,t),c=h_(c,t),l=p_(l),c=p_(c),t.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,S=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,_=["#define varying in",t.glslVersion===c0?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===c0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const C=R+S+l,b=R+_+c,I=u_(s,s.VERTEX_SHADER,C),U=u_(s,s.FRAGMENT_SHADER,b);s.attachShader(M,I),s.attachShader(M,U),t.index0AttributeName!==void 0?s.bindAttribLocation(M,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(M,0,"position"),s.linkProgram(M);function F(H){if(r.debug.checkShaderErrors){const J=s.getProgramInfoLog(M)||"",ie=s.getShaderInfoLog(I)||"",he=s.getShaderInfoLog(U)||"",ue=J.trim(),re=ie.trim(),le=he.trim();let z=!0,ce=!0;if(s.getProgramParameter(M,s.LINK_STATUS)===!1)if(z=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(s,M,I,U);else{const se=f_(s,I,"vertex"),O=f_(s,U,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(M,s.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+ue+`
`+se+`
`+O)}else ue!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ue):(re===""||le==="")&&(ce=!1);ce&&(H.diagnostics={runnable:z,programLog:ue,vertexShader:{log:re,prefix:S},fragmentShader:{log:le,prefix:_}})}s.deleteShader(I),s.deleteShader(U),X=new vc(s,M),P=a2(s,M)}let X;this.getUniforms=function(){return X===void 0&&F(this),X};let P;this.getAttributes=function(){return P===void 0&&F(this),P};let L=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=s.getProgramParameter(M,ZC)),L},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(M),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=JC++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=I,this.fragmentShader=U,this}let _2=0;class y2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),o=this._getShaderStage(n),l=this._getShaderCacheForMaterial(e);return l.has(s)===!1&&(l.add(s),s.usedTimes++),l.has(o)===!1&&(l.add(o),o.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new x2(e),t.set(e,n)),n}}class x2{constructor(e){this.id=_2++,this.code=e,this.usedTimes=0}}function S2(r,e,t,n,s,o,l){const c=new jy,f=new y2,d=new Set,p=[],m=s.logarithmicDepthBuffer,v=s.vertexTextures;let y=s.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(P){return d.add(P),P===0?"uv":`uv${P}`}function S(P,L,H,J,ie){const he=J.fog,ue=ie.geometry,re=P.isMeshStandardMaterial?J.environment:null,le=(P.isMeshStandardMaterial?t:e).get(P.envMap||re),z=le&&le.mapping===Dc?le.image.height:null,ce=E[P.type];P.precision!==null&&(y=s.getMaxPrecision(P.precision),y!==P.precision&&console.warn("THREE.WebGLProgram.getParameters:",P.precision,"not supported, using",y,"instead."));const se=ue.morphAttributes.position||ue.morphAttributes.normal||ue.morphAttributes.color,O=se!==void 0?se.length:0;let ne=0;ue.morphAttributes.position!==void 0&&(ne=1),ue.morphAttributes.normal!==void 0&&(ne=2),ue.morphAttributes.color!==void 0&&(ne=3);let ke,Ye,Ge,Q;if(ce){const bt=Vi[ce];ke=bt.vertexShader,Ye=bt.fragmentShader}else ke=P.vertexShader,Ye=P.fragmentShader,f.update(P),Ge=f.getVertexShaderID(P),Q=f.getFragmentShaderID(P);const fe=r.getRenderTarget(),Ee=r.state.buffers.depth.getReversed(),De=ie.isInstancedMesh===!0,Oe=ie.isBatchedMesh===!0,xt=!!P.map,on=!!P.matcap,k=!!le,Ot=!!P.aoMap,ht=!!P.lightMap,st=!!P.bumpMap,We=!!P.normalMap,Ht=!!P.displacementMap,je=!!P.emissiveMap,ct=!!P.metalnessMap,jt=!!P.roughnessMap,Xt=P.anisotropy>0,D=P.clearcoat>0,w=P.dispersion>0,K=P.iridescence>0,de=P.sheen>0,ge=P.transmission>0,oe=Xt&&!!P.anisotropyMap,Ze=D&&!!P.clearcoatMap,be=D&&!!P.clearcoatNormalMap,ze=D&&!!P.clearcoatRoughnessMap,Je=K&&!!P.iridescenceMap,Me=K&&!!P.iridescenceThicknessMap,Ie=de&&!!P.sheenColorMap,at=de&&!!P.sheenRoughnessMap,Ke=!!P.specularMap,Ce=!!P.specularColorMap,pt=!!P.specularIntensityMap,V=ge&&!!P.transmissionMap,xe=ge&&!!P.thicknessMap,Ae=!!P.gradientMap,Ne=!!P.alphaMap,ye=P.alphaTest>0,pe=!!P.alphaHash,Xe=!!P.extensions;let ft=as;P.toneMapped&&(fe===null||fe.isXRRenderTarget===!0)&&(ft=r.toneMapping);const Dt={shaderID:ce,shaderType:P.type,shaderName:P.name,vertexShader:ke,fragmentShader:Ye,defines:P.defines,customVertexShaderID:Ge,customFragmentShaderID:Q,isRawShaderMaterial:P.isRawShaderMaterial===!0,glslVersion:P.glslVersion,precision:y,batching:Oe,batchingColor:Oe&&ie._colorsTexture!==null,instancing:De,instancingColor:De&&ie.instanceColor!==null,instancingMorph:De&&ie.morphTexture!==null,supportsVertexTextures:v,outputColorSpace:fe===null?r.outputColorSpace:fe.isXRRenderTarget===!0?fe.texture.colorSpace:Vn,alphaToCoverage:!!P.alphaToCoverage,map:xt,matcap:on,envMap:k,envMapMode:k&&le.mapping,envMapCubeUVHeight:z,aoMap:Ot,lightMap:ht,bumpMap:st,normalMap:We,displacementMap:v&&Ht,emissiveMap:je,normalMapObjectSpace:We&&P.normalMapType===ET,normalMapTangentSpace:We&&P.normalMapType===zy,metalnessMap:ct,roughnessMap:jt,anisotropy:Xt,anisotropyMap:oe,clearcoat:D,clearcoatMap:Ze,clearcoatNormalMap:be,clearcoatRoughnessMap:ze,dispersion:w,iridescence:K,iridescenceMap:Je,iridescenceThicknessMap:Me,sheen:de,sheenColorMap:Ie,sheenRoughnessMap:at,specularMap:Ke,specularColorMap:Ce,specularIntensityMap:pt,transmission:ge,transmissionMap:V,thicknessMap:xe,gradientMap:Ae,opaque:P.transparent===!1&&P.blending===ka&&P.alphaToCoverage===!1,alphaMap:Ne,alphaTest:ye,alphaHash:pe,combine:P.combine,mapUv:xt&&M(P.map.channel),aoMapUv:Ot&&M(P.aoMap.channel),lightMapUv:ht&&M(P.lightMap.channel),bumpMapUv:st&&M(P.bumpMap.channel),normalMapUv:We&&M(P.normalMap.channel),displacementMapUv:Ht&&M(P.displacementMap.channel),emissiveMapUv:je&&M(P.emissiveMap.channel),metalnessMapUv:ct&&M(P.metalnessMap.channel),roughnessMapUv:jt&&M(P.roughnessMap.channel),anisotropyMapUv:oe&&M(P.anisotropyMap.channel),clearcoatMapUv:Ze&&M(P.clearcoatMap.channel),clearcoatNormalMapUv:be&&M(P.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ze&&M(P.clearcoatRoughnessMap.channel),iridescenceMapUv:Je&&M(P.iridescenceMap.channel),iridescenceThicknessMapUv:Me&&M(P.iridescenceThicknessMap.channel),sheenColorMapUv:Ie&&M(P.sheenColorMap.channel),sheenRoughnessMapUv:at&&M(P.sheenRoughnessMap.channel),specularMapUv:Ke&&M(P.specularMap.channel),specularColorMapUv:Ce&&M(P.specularColorMap.channel),specularIntensityMapUv:pt&&M(P.specularIntensityMap.channel),transmissionMapUv:V&&M(P.transmissionMap.channel),thicknessMapUv:xe&&M(P.thicknessMap.channel),alphaMapUv:Ne&&M(P.alphaMap.channel),vertexTangents:!!ue.attributes.tangent&&(We||Xt),vertexColors:P.vertexColors,vertexAlphas:P.vertexColors===!0&&!!ue.attributes.color&&ue.attributes.color.itemSize===4,pointsUvs:ie.isPoints===!0&&!!ue.attributes.uv&&(xt||Ne),fog:!!he,useFog:P.fog===!0,fogExp2:!!he&&he.isFogExp2,flatShading:P.flatShading===!0&&P.wireframe===!1,sizeAttenuation:P.sizeAttenuation===!0,logarithmicDepthBuffer:m,reversedDepthBuffer:Ee,skinning:ie.isSkinnedMesh===!0,morphTargets:ue.morphAttributes.position!==void 0,morphNormals:ue.morphAttributes.normal!==void 0,morphColors:ue.morphAttributes.color!==void 0,morphTargetsCount:O,morphTextureStride:ne,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numSpotLightMaps:L.spotLightMap.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numSpotLightShadowsWithMaps:L.numSpotLightShadowsWithMaps,numLightProbes:L.numLightProbes,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:P.dithering,shadowMapEnabled:r.shadowMap.enabled&&H.length>0,shadowMapType:r.shadowMap.type,toneMapping:ft,decodeVideoTexture:xt&&P.map.isVideoTexture===!0&&Rt.getTransfer(P.map.colorSpace)===Bt,decodeVideoTextureEmissive:je&&P.emissiveMap.isVideoTexture===!0&&Rt.getTransfer(P.emissiveMap.colorSpace)===Bt,premultipliedAlpha:P.premultipliedAlpha,doubleSided:P.side===Gi,flipSided:P.side===zn,useDepthPacking:P.depthPacking>=0,depthPacking:P.depthPacking||0,index0AttributeName:P.index0AttributeName,extensionClipCullDistance:Xe&&P.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Xe&&P.extensions.multiDraw===!0||Oe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:P.customProgramCacheKey()};return Dt.vertexUv1s=d.has(1),Dt.vertexUv2s=d.has(2),Dt.vertexUv3s=d.has(3),d.clear(),Dt}function _(P){const L=[];if(P.shaderID?L.push(P.shaderID):(L.push(P.customVertexShaderID),L.push(P.customFragmentShaderID)),P.defines!==void 0)for(const H in P.defines)L.push(H),L.push(P.defines[H]);return P.isRawShaderMaterial===!1&&(R(L,P),C(L,P),L.push(r.outputColorSpace)),L.push(P.customProgramCacheKey),L.join()}function R(P,L){P.push(L.precision),P.push(L.outputColorSpace),P.push(L.envMapMode),P.push(L.envMapCubeUVHeight),P.push(L.mapUv),P.push(L.alphaMapUv),P.push(L.lightMapUv),P.push(L.aoMapUv),P.push(L.bumpMapUv),P.push(L.normalMapUv),P.push(L.displacementMapUv),P.push(L.emissiveMapUv),P.push(L.metalnessMapUv),P.push(L.roughnessMapUv),P.push(L.anisotropyMapUv),P.push(L.clearcoatMapUv),P.push(L.clearcoatNormalMapUv),P.push(L.clearcoatRoughnessMapUv),P.push(L.iridescenceMapUv),P.push(L.iridescenceThicknessMapUv),P.push(L.sheenColorMapUv),P.push(L.sheenRoughnessMapUv),P.push(L.specularMapUv),P.push(L.specularColorMapUv),P.push(L.specularIntensityMapUv),P.push(L.transmissionMapUv),P.push(L.thicknessMapUv),P.push(L.combine),P.push(L.fogExp2),P.push(L.sizeAttenuation),P.push(L.morphTargetsCount),P.push(L.morphAttributeCount),P.push(L.numDirLights),P.push(L.numPointLights),P.push(L.numSpotLights),P.push(L.numSpotLightMaps),P.push(L.numHemiLights),P.push(L.numRectAreaLights),P.push(L.numDirLightShadows),P.push(L.numPointLightShadows),P.push(L.numSpotLightShadows),P.push(L.numSpotLightShadowsWithMaps),P.push(L.numLightProbes),P.push(L.shadowMapType),P.push(L.toneMapping),P.push(L.numClippingPlanes),P.push(L.numClipIntersection),P.push(L.depthPacking)}function C(P,L){c.disableAll(),L.supportsVertexTextures&&c.enable(0),L.instancing&&c.enable(1),L.instancingColor&&c.enable(2),L.instancingMorph&&c.enable(3),L.matcap&&c.enable(4),L.envMap&&c.enable(5),L.normalMapObjectSpace&&c.enable(6),L.normalMapTangentSpace&&c.enable(7),L.clearcoat&&c.enable(8),L.iridescence&&c.enable(9),L.alphaTest&&c.enable(10),L.vertexColors&&c.enable(11),L.vertexAlphas&&c.enable(12),L.vertexUv1s&&c.enable(13),L.vertexUv2s&&c.enable(14),L.vertexUv3s&&c.enable(15),L.vertexTangents&&c.enable(16),L.anisotropy&&c.enable(17),L.alphaHash&&c.enable(18),L.batching&&c.enable(19),L.dispersion&&c.enable(20),L.batchingColor&&c.enable(21),L.gradientMap&&c.enable(22),P.push(c.mask),c.disableAll(),L.fog&&c.enable(0),L.useFog&&c.enable(1),L.flatShading&&c.enable(2),L.logarithmicDepthBuffer&&c.enable(3),L.reversedDepthBuffer&&c.enable(4),L.skinning&&c.enable(5),L.morphTargets&&c.enable(6),L.morphNormals&&c.enable(7),L.morphColors&&c.enable(8),L.premultipliedAlpha&&c.enable(9),L.shadowMapEnabled&&c.enable(10),L.doubleSided&&c.enable(11),L.flipSided&&c.enable(12),L.useDepthPacking&&c.enable(13),L.dithering&&c.enable(14),L.transmission&&c.enable(15),L.sheen&&c.enable(16),L.opaque&&c.enable(17),L.pointsUvs&&c.enable(18),L.decodeVideoTexture&&c.enable(19),L.decodeVideoTextureEmissive&&c.enable(20),L.alphaToCoverage&&c.enable(21),P.push(c.mask)}function b(P){const L=E[P.type];let H;if(L){const J=Vi[L];H=dw.clone(J.uniforms)}else H=P.uniforms;return H}function I(P,L){let H;for(let J=0,ie=p.length;J<ie;J++){const he=p[J];if(he.cacheKey===L){H=he,++H.usedTimes;break}}return H===void 0&&(H=new v2(r,L,P,o),p.push(H)),H}function U(P){if(--P.usedTimes===0){const L=p.indexOf(P);p[L]=p[p.length-1],p.pop(),P.destroy()}}function F(P){f.remove(P)}function X(){f.dispose()}return{getParameters:S,getProgramCacheKey:_,getUniforms:b,acquireProgram:I,releaseProgram:U,releaseShaderCache:F,programs:p,dispose:X}}function E2(){let r=new WeakMap;function e(l){return r.has(l)}function t(l){let c=r.get(l);return c===void 0&&(c={},r.set(l,c)),c}function n(l){r.delete(l)}function s(l,c,f){r.get(l)[c]=f}function o(){r=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:o}}function M2(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function g_(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function v_(){const r=[];let e=0;const t=[],n=[],s=[];function o(){e=0,t.length=0,n.length=0,s.length=0}function l(m,v,y,E,M,S){let _=r[e];return _===void 0?(_={id:m.id,object:m,geometry:v,material:y,groupOrder:E,renderOrder:m.renderOrder,z:M,group:S},r[e]=_):(_.id=m.id,_.object=m,_.geometry=v,_.material=y,_.groupOrder=E,_.renderOrder=m.renderOrder,_.z=M,_.group=S),e++,_}function c(m,v,y,E,M,S){const _=l(m,v,y,E,M,S);y.transmission>0?n.push(_):y.transparent===!0?s.push(_):t.push(_)}function f(m,v,y,E,M,S){const _=l(m,v,y,E,M,S);y.transmission>0?n.unshift(_):y.transparent===!0?s.unshift(_):t.unshift(_)}function d(m,v){t.length>1&&t.sort(m||M2),n.length>1&&n.sort(v||g_),s.length>1&&s.sort(v||g_)}function p(){for(let m=e,v=r.length;m<v;m++){const y=r[m];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:t,transmissive:n,transparent:s,init:o,push:c,unshift:f,finish:p,sort:d}}function T2(){let r=new WeakMap;function e(n,s){const o=r.get(n);let l;return o===void 0?(l=new v_,r.set(n,[l])):s>=o.length?(l=new v_,o.push(l)):l=o[s],l}function t(){r=new WeakMap}return{get:e,dispose:t}}function w2(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new j,color:new mt};break;case"SpotLight":t={position:new j,direction:new j,color:new mt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new j,color:new mt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new j,skyColor:new mt,groundColor:new mt};break;case"RectAreaLight":t={color:new mt,position:new j,halfWidth:new j,halfHeight:new j};break}return r[e.id]=t,t}}}function b2(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let A2=0;function R2(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function C2(r){const e=new w2,t=b2(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)n.probe.push(new j);const s=new j,o=new yt,l=new yt;function c(d){let p=0,m=0,v=0;for(let P=0;P<9;P++)n.probe[P].set(0,0,0);let y=0,E=0,M=0,S=0,_=0,R=0,C=0,b=0,I=0,U=0,F=0;d.sort(R2);for(let P=0,L=d.length;P<L;P++){const H=d[P],J=H.color,ie=H.intensity,he=H.distance,ue=H.shadow&&H.shadow.map?H.shadow.map.texture:null;if(H.isAmbientLight)p+=J.r*ie,m+=J.g*ie,v+=J.b*ie;else if(H.isLightProbe){for(let re=0;re<9;re++)n.probe[re].addScaledVector(H.sh.coefficients[re],ie);F++}else if(H.isDirectionalLight){const re=e.get(H);if(re.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const le=H.shadow,z=t.get(H);z.shadowIntensity=le.intensity,z.shadowBias=le.bias,z.shadowNormalBias=le.normalBias,z.shadowRadius=le.radius,z.shadowMapSize=le.mapSize,n.directionalShadow[y]=z,n.directionalShadowMap[y]=ue,n.directionalShadowMatrix[y]=H.shadow.matrix,R++}n.directional[y]=re,y++}else if(H.isSpotLight){const re=e.get(H);re.position.setFromMatrixPosition(H.matrixWorld),re.color.copy(J).multiplyScalar(ie),re.distance=he,re.coneCos=Math.cos(H.angle),re.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),re.decay=H.decay,n.spot[M]=re;const le=H.shadow;if(H.map&&(n.spotLightMap[I]=H.map,I++,le.updateMatrices(H),H.castShadow&&U++),n.spotLightMatrix[M]=le.matrix,H.castShadow){const z=t.get(H);z.shadowIntensity=le.intensity,z.shadowBias=le.bias,z.shadowNormalBias=le.normalBias,z.shadowRadius=le.radius,z.shadowMapSize=le.mapSize,n.spotShadow[M]=z,n.spotShadowMap[M]=ue,b++}M++}else if(H.isRectAreaLight){const re=e.get(H);re.color.copy(J).multiplyScalar(ie),re.halfWidth.set(H.width*.5,0,0),re.halfHeight.set(0,H.height*.5,0),n.rectArea[S]=re,S++}else if(H.isPointLight){const re=e.get(H);if(re.color.copy(H.color).multiplyScalar(H.intensity),re.distance=H.distance,re.decay=H.decay,H.castShadow){const le=H.shadow,z=t.get(H);z.shadowIntensity=le.intensity,z.shadowBias=le.bias,z.shadowNormalBias=le.normalBias,z.shadowRadius=le.radius,z.shadowMapSize=le.mapSize,z.shadowCameraNear=le.camera.near,z.shadowCameraFar=le.camera.far,n.pointShadow[E]=z,n.pointShadowMap[E]=ue,n.pointShadowMatrix[E]=H.shadow.matrix,C++}n.point[E]=re,E++}else if(H.isHemisphereLight){const re=e.get(H);re.skyColor.copy(H.color).multiplyScalar(ie),re.groundColor.copy(H.groundColor).multiplyScalar(ie),n.hemi[_]=re,_++}}S>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Le.LTC_FLOAT_1,n.rectAreaLTC2=Le.LTC_FLOAT_2):(n.rectAreaLTC1=Le.LTC_HALF_1,n.rectAreaLTC2=Le.LTC_HALF_2)),n.ambient[0]=p,n.ambient[1]=m,n.ambient[2]=v;const X=n.hash;(X.directionalLength!==y||X.pointLength!==E||X.spotLength!==M||X.rectAreaLength!==S||X.hemiLength!==_||X.numDirectionalShadows!==R||X.numPointShadows!==C||X.numSpotShadows!==b||X.numSpotMaps!==I||X.numLightProbes!==F)&&(n.directional.length=y,n.spot.length=M,n.rectArea.length=S,n.point.length=E,n.hemi.length=_,n.directionalShadow.length=R,n.directionalShadowMap.length=R,n.pointShadow.length=C,n.pointShadowMap.length=C,n.spotShadow.length=b,n.spotShadowMap.length=b,n.directionalShadowMatrix.length=R,n.pointShadowMatrix.length=C,n.spotLightMatrix.length=b+I-U,n.spotLightMap.length=I,n.numSpotLightShadowsWithMaps=U,n.numLightProbes=F,X.directionalLength=y,X.pointLength=E,X.spotLength=M,X.rectAreaLength=S,X.hemiLength=_,X.numDirectionalShadows=R,X.numPointShadows=C,X.numSpotShadows=b,X.numSpotMaps=I,X.numLightProbes=F,n.version=A2++)}function f(d,p){let m=0,v=0,y=0,E=0,M=0;const S=p.matrixWorldInverse;for(let _=0,R=d.length;_<R;_++){const C=d[_];if(C.isDirectionalLight){const b=n.directional[m];b.direction.setFromMatrixPosition(C.matrixWorld),s.setFromMatrixPosition(C.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(S),m++}else if(C.isSpotLight){const b=n.spot[y];b.position.setFromMatrixPosition(C.matrixWorld),b.position.applyMatrix4(S),b.direction.setFromMatrixPosition(C.matrixWorld),s.setFromMatrixPosition(C.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(S),y++}else if(C.isRectAreaLight){const b=n.rectArea[E];b.position.setFromMatrixPosition(C.matrixWorld),b.position.applyMatrix4(S),l.identity(),o.copy(C.matrixWorld),o.premultiply(S),l.extractRotation(o),b.halfWidth.set(C.width*.5,0,0),b.halfHeight.set(0,C.height*.5,0),b.halfWidth.applyMatrix4(l),b.halfHeight.applyMatrix4(l),E++}else if(C.isPointLight){const b=n.point[v];b.position.setFromMatrixPosition(C.matrixWorld),b.position.applyMatrix4(S),v++}else if(C.isHemisphereLight){const b=n.hemi[M];b.direction.setFromMatrixPosition(C.matrixWorld),b.direction.transformDirection(S),M++}}}return{setup:c,setupView:f,state:n}}function __(r){const e=new C2(r),t=[],n=[];function s(p){d.camera=p,t.length=0,n.length=0}function o(p){t.push(p)}function l(p){n.push(p)}function c(){e.setup(t)}function f(p){e.setupView(t,p)}const d={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:d,setupLights:c,setupLightsView:f,pushLight:o,pushShadow:l}}function P2(r){let e=new WeakMap;function t(s,o=0){const l=e.get(s);let c;return l===void 0?(c=new __(r),e.set(s,[c])):o>=l.length?(c=new __(r),l.push(c)):c=l[o],c}function n(){e=new WeakMap}return{get:t,dispose:n}}const L2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,I2=`uniform sampler2D shadow_pass;
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
}`;function D2(r,e,t){let n=new Kp;const s=new dt,o=new dt,l=new Lt,c=new Pw({depthPacking:ST}),f=new Lw,d={},p=t.maxTextureSize,m={[Mr]:zn,[zn]:Mr,[Gi]:Gi},v=new Tr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new dt},radius:{value:4}},vertexShader:L2,fragmentShader:I2}),y=v.clone();y.defines.HORIZONTAL_PASS=1;const E=new _i;E.setAttribute("position",new In(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new qn(E,v),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ry;let _=this.type;this.render=function(U,F,X){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||U.length===0)return;const P=r.getRenderTarget(),L=r.getActiveCubeFace(),H=r.getActiveMipmapLevel(),J=r.state;J.setBlending(ss),J.buffers.depth.getReversed()===!0?J.buffers.color.setClear(0,0,0,0):J.buffers.color.setClear(1,1,1,1),J.buffers.depth.setTest(!0),J.setScissorTest(!1);const ie=_!==vr&&this.type===vr,he=_===vr&&this.type!==vr;for(let ue=0,re=U.length;ue<re;ue++){const le=U[ue],z=le.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",le,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;s.copy(z.mapSize);const ce=z.getFrameExtents();if(s.multiply(ce),o.copy(z.mapSize),(s.x>p||s.y>p)&&(s.x>p&&(o.x=Math.floor(p/ce.x),s.x=o.x*ce.x,z.mapSize.x=o.x),s.y>p&&(o.y=Math.floor(p/ce.y),s.y=o.y*ce.y,z.mapSize.y=o.y)),z.map===null||ie===!0||he===!0){const O=this.type!==vr?{minFilter:Hn,magFilter:Hn}:{};z.map!==null&&z.map.dispose(),z.map=new zs(s.x,s.y,O),z.map.texture.name=le.name+".shadowMap",z.camera.updateProjectionMatrix()}r.setRenderTarget(z.map),r.clear();const se=z.getViewportCount();for(let O=0;O<se;O++){const ne=z.getViewport(O);l.set(o.x*ne.x,o.y*ne.y,o.x*ne.z,o.y*ne.w),J.viewport(l),z.updateMatrices(le,O),n=z.getFrustum(),b(F,X,z.camera,le,this.type)}z.isPointLightShadow!==!0&&this.type===vr&&R(z,X),z.needsUpdate=!1}_=this.type,S.needsUpdate=!1,r.setRenderTarget(P,L,H)};function R(U,F){const X=e.update(M);v.defines.VSM_SAMPLES!==U.blurSamples&&(v.defines.VSM_SAMPLES=U.blurSamples,y.defines.VSM_SAMPLES=U.blurSamples,v.needsUpdate=!0,y.needsUpdate=!0),U.mapPass===null&&(U.mapPass=new zs(s.x,s.y)),v.uniforms.shadow_pass.value=U.map.texture,v.uniforms.resolution.value=U.mapSize,v.uniforms.radius.value=U.radius,r.setRenderTarget(U.mapPass),r.clear(),r.renderBufferDirect(F,null,X,v,M,null),y.uniforms.shadow_pass.value=U.mapPass.texture,y.uniforms.resolution.value=U.mapSize,y.uniforms.radius.value=U.radius,r.setRenderTarget(U.map),r.clear(),r.renderBufferDirect(F,null,X,y,M,null)}function C(U,F,X,P){let L=null;const H=X.isPointLight===!0?U.customDistanceMaterial:U.customDepthMaterial;if(H!==void 0)L=H;else if(L=X.isPointLight===!0?f:c,r.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0||F.alphaToCoverage===!0){const J=L.uuid,ie=F.uuid;let he=d[J];he===void 0&&(he={},d[J]=he);let ue=he[ie];ue===void 0&&(ue=L.clone(),he[ie]=ue,F.addEventListener("dispose",I)),L=ue}if(L.visible=F.visible,L.wireframe=F.wireframe,P===vr?L.side=F.shadowSide!==null?F.shadowSide:F.side:L.side=F.shadowSide!==null?F.shadowSide:m[F.side],L.alphaMap=F.alphaMap,L.alphaTest=F.alphaToCoverage===!0?.5:F.alphaTest,L.map=F.map,L.clipShadows=F.clipShadows,L.clippingPlanes=F.clippingPlanes,L.clipIntersection=F.clipIntersection,L.displacementMap=F.displacementMap,L.displacementScale=F.displacementScale,L.displacementBias=F.displacementBias,L.wireframeLinewidth=F.wireframeLinewidth,L.linewidth=F.linewidth,X.isPointLight===!0&&L.isMeshDistanceMaterial===!0){const J=r.properties.get(L);J.light=X}return L}function b(U,F,X,P,L){if(U.visible===!1)return;if(U.layers.test(F.layers)&&(U.isMesh||U.isLine||U.isPoints)&&(U.castShadow||U.receiveShadow&&L===vr)&&(!U.frustumCulled||n.intersectsObject(U))){U.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,U.matrixWorld);const ie=e.update(U),he=U.material;if(Array.isArray(he)){const ue=ie.groups;for(let re=0,le=ue.length;re<le;re++){const z=ue[re],ce=he[z.materialIndex];if(ce&&ce.visible){const se=C(U,ce,P,L);U.onBeforeShadow(r,U,F,X,ie,se,z),r.renderBufferDirect(X,null,ie,se,U,z),U.onAfterShadow(r,U,F,X,ie,se,z)}}}else if(he.visible){const ue=C(U,he,P,L);U.onBeforeShadow(r,U,F,X,ie,ue,null),r.renderBufferDirect(X,null,ie,ue,U,null),U.onAfterShadow(r,U,F,X,ie,ue,null)}}const J=U.children;for(let ie=0,he=J.length;ie<he;ie++)b(J[ie],F,X,P,L)}function I(U){U.target.removeEventListener("dispose",I);for(const X in d){const P=d[X],L=U.target.uuid;L in P&&(P[L].dispose(),delete P[L])}}}const N2={[Th]:wh,[bh]:Ch,[Ah]:Ph,[Va]:Rh,[wh]:Th,[Ch]:bh,[Ph]:Ah,[Rh]:Va};function U2(r,e){function t(){let V=!1;const xe=new Lt;let Ae=null;const Ne=new Lt(0,0,0,0);return{setMask:function(ye){Ae!==ye&&!V&&(r.colorMask(ye,ye,ye,ye),Ae=ye)},setLocked:function(ye){V=ye},setClear:function(ye,pe,Xe,ft,Dt){Dt===!0&&(ye*=ft,pe*=ft,Xe*=ft),xe.set(ye,pe,Xe,ft),Ne.equals(xe)===!1&&(r.clearColor(ye,pe,Xe,ft),Ne.copy(xe))},reset:function(){V=!1,Ae=null,Ne.set(-1,0,0,0)}}}function n(){let V=!1,xe=!1,Ae=null,Ne=null,ye=null;return{setReversed:function(pe){if(xe!==pe){const Xe=e.get("EXT_clip_control");pe?Xe.clipControlEXT(Xe.LOWER_LEFT_EXT,Xe.ZERO_TO_ONE_EXT):Xe.clipControlEXT(Xe.LOWER_LEFT_EXT,Xe.NEGATIVE_ONE_TO_ONE_EXT),xe=pe;const ft=ye;ye=null,this.setClear(ft)}},getReversed:function(){return xe},setTest:function(pe){pe?fe(r.DEPTH_TEST):Ee(r.DEPTH_TEST)},setMask:function(pe){Ae!==pe&&!V&&(r.depthMask(pe),Ae=pe)},setFunc:function(pe){if(xe&&(pe=N2[pe]),Ne!==pe){switch(pe){case Th:r.depthFunc(r.NEVER);break;case wh:r.depthFunc(r.ALWAYS);break;case bh:r.depthFunc(r.LESS);break;case Va:r.depthFunc(r.LEQUAL);break;case Ah:r.depthFunc(r.EQUAL);break;case Rh:r.depthFunc(r.GEQUAL);break;case Ch:r.depthFunc(r.GREATER);break;case Ph:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Ne=pe}},setLocked:function(pe){V=pe},setClear:function(pe){ye!==pe&&(xe&&(pe=1-pe),r.clearDepth(pe),ye=pe)},reset:function(){V=!1,Ae=null,Ne=null,ye=null,xe=!1}}}function s(){let V=!1,xe=null,Ae=null,Ne=null,ye=null,pe=null,Xe=null,ft=null,Dt=null;return{setTest:function(bt){V||(bt?fe(r.STENCIL_TEST):Ee(r.STENCIL_TEST))},setMask:function(bt){xe!==bt&&!V&&(r.stencilMask(bt),xe=bt)},setFunc:function(bt,ai,Mn){(Ae!==bt||Ne!==ai||ye!==Mn)&&(r.stencilFunc(bt,ai,Mn),Ae=bt,Ne=ai,ye=Mn)},setOp:function(bt,ai,Mn){(pe!==bt||Xe!==ai||ft!==Mn)&&(r.stencilOp(bt,ai,Mn),pe=bt,Xe=ai,ft=Mn)},setLocked:function(bt){V=bt},setClear:function(bt){Dt!==bt&&(r.clearStencil(bt),Dt=bt)},reset:function(){V=!1,xe=null,Ae=null,Ne=null,ye=null,pe=null,Xe=null,ft=null,Dt=null}}}const o=new t,l=new n,c=new s,f=new WeakMap,d=new WeakMap;let p={},m={},v=new WeakMap,y=[],E=null,M=!1,S=null,_=null,R=null,C=null,b=null,I=null,U=null,F=new mt(0,0,0),X=0,P=!1,L=null,H=null,J=null,ie=null,he=null;const ue=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let re=!1,le=0;const z=r.getParameter(r.VERSION);z.indexOf("WebGL")!==-1?(le=parseFloat(/^WebGL (\d)/.exec(z)[1]),re=le>=1):z.indexOf("OpenGL ES")!==-1&&(le=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),re=le>=2);let ce=null,se={};const O=r.getParameter(r.SCISSOR_BOX),ne=r.getParameter(r.VIEWPORT),ke=new Lt().fromArray(O),Ye=new Lt().fromArray(ne);function Ge(V,xe,Ae,Ne){const ye=new Uint8Array(4),pe=r.createTexture();r.bindTexture(V,pe),r.texParameteri(V,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(V,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Xe=0;Xe<Ae;Xe++)V===r.TEXTURE_3D||V===r.TEXTURE_2D_ARRAY?r.texImage3D(xe,0,r.RGBA,1,1,Ne,0,r.RGBA,r.UNSIGNED_BYTE,ye):r.texImage2D(xe+Xe,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,ye);return pe}const Q={};Q[r.TEXTURE_2D]=Ge(r.TEXTURE_2D,r.TEXTURE_2D,1),Q[r.TEXTURE_CUBE_MAP]=Ge(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[r.TEXTURE_2D_ARRAY]=Ge(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Q[r.TEXTURE_3D]=Ge(r.TEXTURE_3D,r.TEXTURE_3D,1,1),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),fe(r.DEPTH_TEST),l.setFunc(Va),st(!1),We(t0),fe(r.CULL_FACE),Ot(ss);function fe(V){p[V]!==!0&&(r.enable(V),p[V]=!0)}function Ee(V){p[V]!==!1&&(r.disable(V),p[V]=!1)}function De(V,xe){return m[V]!==xe?(r.bindFramebuffer(V,xe),m[V]=xe,V===r.DRAW_FRAMEBUFFER&&(m[r.FRAMEBUFFER]=xe),V===r.FRAMEBUFFER&&(m[r.DRAW_FRAMEBUFFER]=xe),!0):!1}function Oe(V,xe){let Ae=y,Ne=!1;if(V){Ae=v.get(xe),Ae===void 0&&(Ae=[],v.set(xe,Ae));const ye=V.textures;if(Ae.length!==ye.length||Ae[0]!==r.COLOR_ATTACHMENT0){for(let pe=0,Xe=ye.length;pe<Xe;pe++)Ae[pe]=r.COLOR_ATTACHMENT0+pe;Ae.length=ye.length,Ne=!0}}else Ae[0]!==r.BACK&&(Ae[0]=r.BACK,Ne=!0);Ne&&r.drawBuffers(Ae)}function xt(V){return E!==V?(r.useProgram(V),E=V,!0):!1}const on={[Ns]:r.FUNC_ADD,[j1]:r.FUNC_SUBTRACT,[X1]:r.FUNC_REVERSE_SUBTRACT};on[Y1]=r.MIN,on[$1]=r.MAX;const k={[K1]:r.ZERO,[q1]:r.ONE,[Z1]:r.SRC_COLOR,[Eh]:r.SRC_ALPHA,[iT]:r.SRC_ALPHA_SATURATE,[tT]:r.DST_COLOR,[Q1]:r.DST_ALPHA,[J1]:r.ONE_MINUS_SRC_COLOR,[Mh]:r.ONE_MINUS_SRC_ALPHA,[nT]:r.ONE_MINUS_DST_COLOR,[eT]:r.ONE_MINUS_DST_ALPHA,[rT]:r.CONSTANT_COLOR,[sT]:r.ONE_MINUS_CONSTANT_COLOR,[aT]:r.CONSTANT_ALPHA,[oT]:r.ONE_MINUS_CONSTANT_ALPHA};function Ot(V,xe,Ae,Ne,ye,pe,Xe,ft,Dt,bt){if(V===ss){M===!0&&(Ee(r.BLEND),M=!1);return}if(M===!1&&(fe(r.BLEND),M=!0),V!==W1){if(V!==S||bt!==P){if((_!==Ns||b!==Ns)&&(r.blendEquation(r.FUNC_ADD),_=Ns,b=Ns),bt)switch(V){case ka:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case n0:r.blendFunc(r.ONE,r.ONE);break;case i0:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case r0:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case ka:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case n0:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case i0:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case r0:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}R=null,C=null,I=null,U=null,F.set(0,0,0),X=0,S=V,P=bt}return}ye=ye||xe,pe=pe||Ae,Xe=Xe||Ne,(xe!==_||ye!==b)&&(r.blendEquationSeparate(on[xe],on[ye]),_=xe,b=ye),(Ae!==R||Ne!==C||pe!==I||Xe!==U)&&(r.blendFuncSeparate(k[Ae],k[Ne],k[pe],k[Xe]),R=Ae,C=Ne,I=pe,U=Xe),(ft.equals(F)===!1||Dt!==X)&&(r.blendColor(ft.r,ft.g,ft.b,Dt),F.copy(ft),X=Dt),S=V,P=!1}function ht(V,xe){V.side===Gi?Ee(r.CULL_FACE):fe(r.CULL_FACE);let Ae=V.side===zn;xe&&(Ae=!Ae),st(Ae),V.blending===ka&&V.transparent===!1?Ot(ss):Ot(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),l.setFunc(V.depthFunc),l.setTest(V.depthTest),l.setMask(V.depthWrite),o.setMask(V.colorWrite);const Ne=V.stencilWrite;c.setTest(Ne),Ne&&(c.setMask(V.stencilWriteMask),c.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),c.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),je(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?fe(r.SAMPLE_ALPHA_TO_COVERAGE):Ee(r.SAMPLE_ALPHA_TO_COVERAGE)}function st(V){L!==V&&(V?r.frontFace(r.CW):r.frontFace(r.CCW),L=V)}function We(V){V!==H1?(fe(r.CULL_FACE),V!==H&&(V===t0?r.cullFace(r.BACK):V===V1?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Ee(r.CULL_FACE),H=V}function Ht(V){V!==J&&(re&&r.lineWidth(V),J=V)}function je(V,xe,Ae){V?(fe(r.POLYGON_OFFSET_FILL),(ie!==xe||he!==Ae)&&(r.polygonOffset(xe,Ae),ie=xe,he=Ae)):Ee(r.POLYGON_OFFSET_FILL)}function ct(V){V?fe(r.SCISSOR_TEST):Ee(r.SCISSOR_TEST)}function jt(V){V===void 0&&(V=r.TEXTURE0+ue-1),ce!==V&&(r.activeTexture(V),ce=V)}function Xt(V,xe,Ae){Ae===void 0&&(ce===null?Ae=r.TEXTURE0+ue-1:Ae=ce);let Ne=se[Ae];Ne===void 0&&(Ne={type:void 0,texture:void 0},se[Ae]=Ne),(Ne.type!==V||Ne.texture!==xe)&&(ce!==Ae&&(r.activeTexture(Ae),ce=Ae),r.bindTexture(V,xe||Q[V]),Ne.type=V,Ne.texture=xe)}function D(){const V=se[ce];V!==void 0&&V.type!==void 0&&(r.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function w(){try{r.compressedTexImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function K(){try{r.compressedTexImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function de(){try{r.texSubImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ge(){try{r.texSubImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function oe(){try{r.compressedTexSubImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ze(){try{r.compressedTexSubImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function be(){try{r.texStorage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ze(){try{r.texStorage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Je(){try{r.texImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Me(){try{r.texImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ie(V){ke.equals(V)===!1&&(r.scissor(V.x,V.y,V.z,V.w),ke.copy(V))}function at(V){Ye.equals(V)===!1&&(r.viewport(V.x,V.y,V.z,V.w),Ye.copy(V))}function Ke(V,xe){let Ae=d.get(xe);Ae===void 0&&(Ae=new WeakMap,d.set(xe,Ae));let Ne=Ae.get(V);Ne===void 0&&(Ne=r.getUniformBlockIndex(xe,V.name),Ae.set(V,Ne))}function Ce(V,xe){const Ne=d.get(xe).get(V);f.get(xe)!==Ne&&(r.uniformBlockBinding(xe,Ne,V.__bindingPointIndex),f.set(xe,Ne))}function pt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),l.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),p={},ce=null,se={},m={},v=new WeakMap,y=[],E=null,M=!1,S=null,_=null,R=null,C=null,b=null,I=null,U=null,F=new mt(0,0,0),X=0,P=!1,L=null,H=null,J=null,ie=null,he=null,ke.set(0,0,r.canvas.width,r.canvas.height),Ye.set(0,0,r.canvas.width,r.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:fe,disable:Ee,bindFramebuffer:De,drawBuffers:Oe,useProgram:xt,setBlending:Ot,setMaterial:ht,setFlipSided:st,setCullFace:We,setLineWidth:Ht,setPolygonOffset:je,setScissorTest:ct,activeTexture:jt,bindTexture:Xt,unbindTexture:D,compressedTexImage2D:w,compressedTexImage3D:K,texImage2D:Je,texImage3D:Me,updateUBOMapping:Ke,uniformBlockBinding:Ce,texStorage2D:be,texStorage3D:ze,texSubImage2D:de,texSubImage3D:ge,compressedTexSubImage2D:oe,compressedTexSubImage3D:Ze,scissor:Ie,viewport:at,reset:pt}}function F2(r,e,t,n,s,o,l){const c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new dt,p=new WeakMap;let m;const v=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(D,w){return y?new OffscreenCanvas(D,w):fl("canvas")}function M(D,w,K){let de=1;const ge=Xt(D);if((ge.width>K||ge.height>K)&&(de=K/Math.max(ge.width,ge.height)),de<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const oe=Math.floor(de*ge.width),Ze=Math.floor(de*ge.height);m===void 0&&(m=E(oe,Ze));const be=w?E(oe,Ze):m;return be.width=oe,be.height=Ze,be.getContext("2d").drawImage(D,0,0,oe,Ze),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ge.width+"x"+ge.height+") to ("+oe+"x"+Ze+")."),be}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ge.width+"x"+ge.height+")."),D;return D}function S(D){return D.generateMipmaps}function _(D){r.generateMipmap(D)}function R(D){return D.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?r.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function C(D,w,K,de,ge=!1){if(D!==null){if(r[D]!==void 0)return r[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let oe=w;if(w===r.RED&&(K===r.FLOAT&&(oe=r.R32F),K===r.HALF_FLOAT&&(oe=r.R16F),K===r.UNSIGNED_BYTE&&(oe=r.R8)),w===r.RED_INTEGER&&(K===r.UNSIGNED_BYTE&&(oe=r.R8UI),K===r.UNSIGNED_SHORT&&(oe=r.R16UI),K===r.UNSIGNED_INT&&(oe=r.R32UI),K===r.BYTE&&(oe=r.R8I),K===r.SHORT&&(oe=r.R16I),K===r.INT&&(oe=r.R32I)),w===r.RG&&(K===r.FLOAT&&(oe=r.RG32F),K===r.HALF_FLOAT&&(oe=r.RG16F),K===r.UNSIGNED_BYTE&&(oe=r.RG8)),w===r.RG_INTEGER&&(K===r.UNSIGNED_BYTE&&(oe=r.RG8UI),K===r.UNSIGNED_SHORT&&(oe=r.RG16UI),K===r.UNSIGNED_INT&&(oe=r.RG32UI),K===r.BYTE&&(oe=r.RG8I),K===r.SHORT&&(oe=r.RG16I),K===r.INT&&(oe=r.RG32I)),w===r.RGB_INTEGER&&(K===r.UNSIGNED_BYTE&&(oe=r.RGB8UI),K===r.UNSIGNED_SHORT&&(oe=r.RGB16UI),K===r.UNSIGNED_INT&&(oe=r.RGB32UI),K===r.BYTE&&(oe=r.RGB8I),K===r.SHORT&&(oe=r.RGB16I),K===r.INT&&(oe=r.RGB32I)),w===r.RGBA_INTEGER&&(K===r.UNSIGNED_BYTE&&(oe=r.RGBA8UI),K===r.UNSIGNED_SHORT&&(oe=r.RGBA16UI),K===r.UNSIGNED_INT&&(oe=r.RGBA32UI),K===r.BYTE&&(oe=r.RGBA8I),K===r.SHORT&&(oe=r.RGBA16I),K===r.INT&&(oe=r.RGBA32I)),w===r.RGB&&(K===r.UNSIGNED_INT_5_9_9_9_REV&&(oe=r.RGB9_E5),K===r.UNSIGNED_INT_10F_11F_11F_REV&&(oe=r.R11F_G11F_B10F)),w===r.RGBA){const Ze=ge?Mc:Rt.getTransfer(de);K===r.FLOAT&&(oe=r.RGBA32F),K===r.HALF_FLOAT&&(oe=r.RGBA16F),K===r.UNSIGNED_BYTE&&(oe=Ze===Bt?r.SRGB8_ALPHA8:r.RGBA8),K===r.UNSIGNED_SHORT_4_4_4_4&&(oe=r.RGBA4),K===r.UNSIGNED_SHORT_5_5_5_1&&(oe=r.RGB5_A1)}return(oe===r.R16F||oe===r.R32F||oe===r.RG16F||oe===r.RG32F||oe===r.RGBA16F||oe===r.RGBA32F)&&e.get("EXT_color_buffer_float"),oe}function b(D,w){let K;return D?w===null||w===Bs||w===al?K=r.DEPTH24_STENCIL8:w===Li?K=r.DEPTH32F_STENCIL8:w===sl&&(K=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Bs||w===al?K=r.DEPTH_COMPONENT24:w===Li?K=r.DEPTH_COMPONENT32F:w===sl&&(K=r.DEPTH_COMPONENT16),K}function I(D,w){return S(D)===!0||D.isFramebufferTexture&&D.minFilter!==Hn&&D.minFilter!==ri?Math.log2(Math.max(w.width,w.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?w.mipmaps.length:1}function U(D){const w=D.target;w.removeEventListener("dispose",U),X(w),w.isVideoTexture&&p.delete(w)}function F(D){const w=D.target;w.removeEventListener("dispose",F),L(w)}function X(D){const w=n.get(D);if(w.__webglInit===void 0)return;const K=D.source,de=v.get(K);if(de){const ge=de[w.__cacheKey];ge.usedTimes--,ge.usedTimes===0&&P(D),Object.keys(de).length===0&&v.delete(K)}n.remove(D)}function P(D){const w=n.get(D);r.deleteTexture(w.__webglTexture);const K=D.source,de=v.get(K);delete de[w.__cacheKey],l.memory.textures--}function L(D){const w=n.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),n.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let de=0;de<6;de++){if(Array.isArray(w.__webglFramebuffer[de]))for(let ge=0;ge<w.__webglFramebuffer[de].length;ge++)r.deleteFramebuffer(w.__webglFramebuffer[de][ge]);else r.deleteFramebuffer(w.__webglFramebuffer[de]);w.__webglDepthbuffer&&r.deleteRenderbuffer(w.__webglDepthbuffer[de])}else{if(Array.isArray(w.__webglFramebuffer))for(let de=0;de<w.__webglFramebuffer.length;de++)r.deleteFramebuffer(w.__webglFramebuffer[de]);else r.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&r.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&r.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let de=0;de<w.__webglColorRenderbuffer.length;de++)w.__webglColorRenderbuffer[de]&&r.deleteRenderbuffer(w.__webglColorRenderbuffer[de]);w.__webglDepthRenderbuffer&&r.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const K=D.textures;for(let de=0,ge=K.length;de<ge;de++){const oe=n.get(K[de]);oe.__webglTexture&&(r.deleteTexture(oe.__webglTexture),l.memory.textures--),n.remove(K[de])}n.remove(D)}let H=0;function J(){H=0}function ie(){const D=H;return D>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+s.maxTextures),H+=1,D}function he(D){const w=[];return w.push(D.wrapS),w.push(D.wrapT),w.push(D.wrapR||0),w.push(D.magFilter),w.push(D.minFilter),w.push(D.anisotropy),w.push(D.internalFormat),w.push(D.format),w.push(D.type),w.push(D.generateMipmaps),w.push(D.premultiplyAlpha),w.push(D.flipY),w.push(D.unpackAlignment),w.push(D.colorSpace),w.join()}function ue(D,w){const K=n.get(D);if(D.isVideoTexture&&ct(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&K.__version!==D.version){const de=D.image;if(de===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(de.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Q(K,D,w);return}}else D.isExternalTexture&&(K.__webglTexture=D.sourceTexture?D.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,K.__webglTexture,r.TEXTURE0+w)}function re(D,w){const K=n.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&K.__version!==D.version){Q(K,D,w);return}t.bindTexture(r.TEXTURE_2D_ARRAY,K.__webglTexture,r.TEXTURE0+w)}function le(D,w){const K=n.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&K.__version!==D.version){Q(K,D,w);return}t.bindTexture(r.TEXTURE_3D,K.__webglTexture,r.TEXTURE0+w)}function z(D,w){const K=n.get(D);if(D.version>0&&K.__version!==D.version){fe(K,D,w);return}t.bindTexture(r.TEXTURE_CUBE_MAP,K.__webglTexture,r.TEXTURE0+w)}const ce={[ja]:r.REPEAT,[rs]:r.CLAMP_TO_EDGE,[Ec]:r.MIRRORED_REPEAT},se={[Hn]:r.NEAREST,[Ly]:r.NEAREST_MIPMAP_NEAREST,[Ko]:r.NEAREST_MIPMAP_LINEAR,[ri]:r.LINEAR,[dc]:r.LINEAR_MIPMAP_NEAREST,[_r]:r.LINEAR_MIPMAP_LINEAR},O={[MT]:r.NEVER,[CT]:r.ALWAYS,[TT]:r.LESS,[Hy]:r.LEQUAL,[wT]:r.EQUAL,[RT]:r.GEQUAL,[bT]:r.GREATER,[AT]:r.NOTEQUAL};function ne(D,w){if(w.type===Li&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===ri||w.magFilter===dc||w.magFilter===Ko||w.magFilter===_r||w.minFilter===ri||w.minFilter===dc||w.minFilter===Ko||w.minFilter===_r)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(D,r.TEXTURE_WRAP_S,ce[w.wrapS]),r.texParameteri(D,r.TEXTURE_WRAP_T,ce[w.wrapT]),(D===r.TEXTURE_3D||D===r.TEXTURE_2D_ARRAY)&&r.texParameteri(D,r.TEXTURE_WRAP_R,ce[w.wrapR]),r.texParameteri(D,r.TEXTURE_MAG_FILTER,se[w.magFilter]),r.texParameteri(D,r.TEXTURE_MIN_FILTER,se[w.minFilter]),w.compareFunction&&(r.texParameteri(D,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(D,r.TEXTURE_COMPARE_FUNC,O[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Hn||w.minFilter!==Ko&&w.minFilter!==_r||w.type===Li&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){const K=e.get("EXT_texture_filter_anisotropic");r.texParameterf(D,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,s.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function ke(D,w){let K=!1;D.__webglInit===void 0&&(D.__webglInit=!0,w.addEventListener("dispose",U));const de=w.source;let ge=v.get(de);ge===void 0&&(ge={},v.set(de,ge));const oe=he(w);if(oe!==D.__cacheKey){ge[oe]===void 0&&(ge[oe]={texture:r.createTexture(),usedTimes:0},l.memory.textures++,K=!0),ge[oe].usedTimes++;const Ze=ge[D.__cacheKey];Ze!==void 0&&(ge[D.__cacheKey].usedTimes--,Ze.usedTimes===0&&P(w)),D.__cacheKey=oe,D.__webglTexture=ge[oe].texture}return K}function Ye(D,w,K){return Math.floor(Math.floor(D/K)/w)}function Ge(D,w,K,de){const oe=D.updateRanges;if(oe.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,w.width,w.height,K,de,w.data);else{oe.sort((Me,Ie)=>Me.start-Ie.start);let Ze=0;for(let Me=1;Me<oe.length;Me++){const Ie=oe[Ze],at=oe[Me],Ke=Ie.start+Ie.count,Ce=Ye(at.start,w.width,4),pt=Ye(Ie.start,w.width,4);at.start<=Ke+1&&Ce===pt&&Ye(at.start+at.count-1,w.width,4)===Ce?Ie.count=Math.max(Ie.count,at.start+at.count-Ie.start):(++Ze,oe[Ze]=at)}oe.length=Ze+1;const be=r.getParameter(r.UNPACK_ROW_LENGTH),ze=r.getParameter(r.UNPACK_SKIP_PIXELS),Je=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,w.width);for(let Me=0,Ie=oe.length;Me<Ie;Me++){const at=oe[Me],Ke=Math.floor(at.start/4),Ce=Math.ceil(at.count/4),pt=Ke%w.width,V=Math.floor(Ke/w.width),xe=Ce,Ae=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,pt),r.pixelStorei(r.UNPACK_SKIP_ROWS,V),t.texSubImage2D(r.TEXTURE_2D,0,pt,V,xe,Ae,K,de,w.data)}D.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,be),r.pixelStorei(r.UNPACK_SKIP_PIXELS,ze),r.pixelStorei(r.UNPACK_SKIP_ROWS,Je)}}function Q(D,w,K){let de=r.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(de=r.TEXTURE_2D_ARRAY),w.isData3DTexture&&(de=r.TEXTURE_3D);const ge=ke(D,w),oe=w.source;t.bindTexture(de,D.__webglTexture,r.TEXTURE0+K);const Ze=n.get(oe);if(oe.version!==Ze.__version||ge===!0){t.activeTexture(r.TEXTURE0+K);const be=Rt.getPrimaries(Rt.workingColorSpace),ze=w.colorSpace===is?null:Rt.getPrimaries(w.colorSpace),Je=w.colorSpace===is||be===ze?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,w.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,w.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Je);let Me=M(w.image,!1,s.maxTextureSize);Me=jt(w,Me);const Ie=o.convert(w.format,w.colorSpace),at=o.convert(w.type);let Ke=C(w.internalFormat,Ie,at,w.colorSpace,w.isVideoTexture);ne(de,w);let Ce;const pt=w.mipmaps,V=w.isVideoTexture!==!0,xe=Ze.__version===void 0||ge===!0,Ae=oe.dataReady,Ne=I(w,Me);if(w.isDepthTexture)Ke=b(w.format===ll,w.type),xe&&(V?t.texStorage2D(r.TEXTURE_2D,1,Ke,Me.width,Me.height):t.texImage2D(r.TEXTURE_2D,0,Ke,Me.width,Me.height,0,Ie,at,null));else if(w.isDataTexture)if(pt.length>0){V&&xe&&t.texStorage2D(r.TEXTURE_2D,Ne,Ke,pt[0].width,pt[0].height);for(let ye=0,pe=pt.length;ye<pe;ye++)Ce=pt[ye],V?Ae&&t.texSubImage2D(r.TEXTURE_2D,ye,0,0,Ce.width,Ce.height,Ie,at,Ce.data):t.texImage2D(r.TEXTURE_2D,ye,Ke,Ce.width,Ce.height,0,Ie,at,Ce.data);w.generateMipmaps=!1}else V?(xe&&t.texStorage2D(r.TEXTURE_2D,Ne,Ke,Me.width,Me.height),Ae&&Ge(w,Me,Ie,at)):t.texImage2D(r.TEXTURE_2D,0,Ke,Me.width,Me.height,0,Ie,at,Me.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){V&&xe&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Ne,Ke,pt[0].width,pt[0].height,Me.depth);for(let ye=0,pe=pt.length;ye<pe;ye++)if(Ce=pt[ye],w.format!==mi)if(Ie!==null)if(V){if(Ae)if(w.layerUpdates.size>0){const Xe=$0(Ce.width,Ce.height,w.format,w.type);for(const ft of w.layerUpdates){const Dt=Ce.data.subarray(ft*Xe/Ce.data.BYTES_PER_ELEMENT,(ft+1)*Xe/Ce.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ye,0,0,ft,Ce.width,Ce.height,1,Ie,Dt)}w.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ye,0,0,0,Ce.width,Ce.height,Me.depth,Ie,Ce.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ye,Ke,Ce.width,Ce.height,Me.depth,0,Ce.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else V?Ae&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,ye,0,0,0,Ce.width,Ce.height,Me.depth,Ie,at,Ce.data):t.texImage3D(r.TEXTURE_2D_ARRAY,ye,Ke,Ce.width,Ce.height,Me.depth,0,Ie,at,Ce.data)}else{V&&xe&&t.texStorage2D(r.TEXTURE_2D,Ne,Ke,pt[0].width,pt[0].height);for(let ye=0,pe=pt.length;ye<pe;ye++)Ce=pt[ye],w.format!==mi?Ie!==null?V?Ae&&t.compressedTexSubImage2D(r.TEXTURE_2D,ye,0,0,Ce.width,Ce.height,Ie,Ce.data):t.compressedTexImage2D(r.TEXTURE_2D,ye,Ke,Ce.width,Ce.height,0,Ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):V?Ae&&t.texSubImage2D(r.TEXTURE_2D,ye,0,0,Ce.width,Ce.height,Ie,at,Ce.data):t.texImage2D(r.TEXTURE_2D,ye,Ke,Ce.width,Ce.height,0,Ie,at,Ce.data)}else if(w.isDataArrayTexture)if(V){if(xe&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Ne,Ke,Me.width,Me.height,Me.depth),Ae)if(w.layerUpdates.size>0){const ye=$0(Me.width,Me.height,w.format,w.type);for(const pe of w.layerUpdates){const Xe=Me.data.subarray(pe*ye/Me.data.BYTES_PER_ELEMENT,(pe+1)*ye/Me.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,pe,Me.width,Me.height,1,Ie,at,Xe)}w.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Me.width,Me.height,Me.depth,Ie,at,Me.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,Ke,Me.width,Me.height,Me.depth,0,Ie,at,Me.data);else if(w.isData3DTexture)V?(xe&&t.texStorage3D(r.TEXTURE_3D,Ne,Ke,Me.width,Me.height,Me.depth),Ae&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Me.width,Me.height,Me.depth,Ie,at,Me.data)):t.texImage3D(r.TEXTURE_3D,0,Ke,Me.width,Me.height,Me.depth,0,Ie,at,Me.data);else if(w.isFramebufferTexture){if(xe)if(V)t.texStorage2D(r.TEXTURE_2D,Ne,Ke,Me.width,Me.height);else{let ye=Me.width,pe=Me.height;for(let Xe=0;Xe<Ne;Xe++)t.texImage2D(r.TEXTURE_2D,Xe,Ke,ye,pe,0,Ie,at,null),ye>>=1,pe>>=1}}else if(pt.length>0){if(V&&xe){const ye=Xt(pt[0]);t.texStorage2D(r.TEXTURE_2D,Ne,Ke,ye.width,ye.height)}for(let ye=0,pe=pt.length;ye<pe;ye++)Ce=pt[ye],V?Ae&&t.texSubImage2D(r.TEXTURE_2D,ye,0,0,Ie,at,Ce):t.texImage2D(r.TEXTURE_2D,ye,Ke,Ie,at,Ce);w.generateMipmaps=!1}else if(V){if(xe){const ye=Xt(Me);t.texStorage2D(r.TEXTURE_2D,Ne,Ke,ye.width,ye.height)}Ae&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,Ie,at,Me)}else t.texImage2D(r.TEXTURE_2D,0,Ke,Ie,at,Me);S(w)&&_(de),Ze.__version=oe.version,w.onUpdate&&w.onUpdate(w)}D.__version=w.version}function fe(D,w,K){if(w.image.length!==6)return;const de=ke(D,w),ge=w.source;t.bindTexture(r.TEXTURE_CUBE_MAP,D.__webglTexture,r.TEXTURE0+K);const oe=n.get(ge);if(ge.version!==oe.__version||de===!0){t.activeTexture(r.TEXTURE0+K);const Ze=Rt.getPrimaries(Rt.workingColorSpace),be=w.colorSpace===is?null:Rt.getPrimaries(w.colorSpace),ze=w.colorSpace===is||Ze===be?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,w.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,w.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ze);const Je=w.isCompressedTexture||w.image[0].isCompressedTexture,Me=w.image[0]&&w.image[0].isDataTexture,Ie=[];for(let pe=0;pe<6;pe++)!Je&&!Me?Ie[pe]=M(w.image[pe],!0,s.maxCubemapSize):Ie[pe]=Me?w.image[pe].image:w.image[pe],Ie[pe]=jt(w,Ie[pe]);const at=Ie[0],Ke=o.convert(w.format,w.colorSpace),Ce=o.convert(w.type),pt=C(w.internalFormat,Ke,Ce,w.colorSpace),V=w.isVideoTexture!==!0,xe=oe.__version===void 0||de===!0,Ae=ge.dataReady;let Ne=I(w,at);ne(r.TEXTURE_CUBE_MAP,w);let ye;if(Je){V&&xe&&t.texStorage2D(r.TEXTURE_CUBE_MAP,Ne,pt,at.width,at.height);for(let pe=0;pe<6;pe++){ye=Ie[pe].mipmaps;for(let Xe=0;Xe<ye.length;Xe++){const ft=ye[Xe];w.format!==mi?Ke!==null?V?Ae&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Xe,0,0,ft.width,ft.height,Ke,ft.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Xe,pt,ft.width,ft.height,0,ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):V?Ae&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Xe,0,0,ft.width,ft.height,Ke,Ce,ft.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Xe,pt,ft.width,ft.height,0,Ke,Ce,ft.data)}}}else{if(ye=w.mipmaps,V&&xe){ye.length>0&&Ne++;const pe=Xt(Ie[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,Ne,pt,pe.width,pe.height)}for(let pe=0;pe<6;pe++)if(Me){V?Ae&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,Ie[pe].width,Ie[pe].height,Ke,Ce,Ie[pe].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,pt,Ie[pe].width,Ie[pe].height,0,Ke,Ce,Ie[pe].data);for(let Xe=0;Xe<ye.length;Xe++){const Dt=ye[Xe].image[pe].image;V?Ae&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Xe+1,0,0,Dt.width,Dt.height,Ke,Ce,Dt.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Xe+1,pt,Dt.width,Dt.height,0,Ke,Ce,Dt.data)}}else{V?Ae&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,Ke,Ce,Ie[pe]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,pt,Ke,Ce,Ie[pe]);for(let Xe=0;Xe<ye.length;Xe++){const ft=ye[Xe];V?Ae&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Xe+1,0,0,Ke,Ce,ft.image[pe]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Xe+1,pt,Ke,Ce,ft.image[pe])}}}S(w)&&_(r.TEXTURE_CUBE_MAP),oe.__version=ge.version,w.onUpdate&&w.onUpdate(w)}D.__version=w.version}function Ee(D,w,K,de,ge,oe){const Ze=o.convert(K.format,K.colorSpace),be=o.convert(K.type),ze=C(K.internalFormat,Ze,be,K.colorSpace),Je=n.get(w),Me=n.get(K);if(Me.__renderTarget=w,!Je.__hasExternalTextures){const Ie=Math.max(1,w.width>>oe),at=Math.max(1,w.height>>oe);ge===r.TEXTURE_3D||ge===r.TEXTURE_2D_ARRAY?t.texImage3D(ge,oe,ze,Ie,at,w.depth,0,Ze,be,null):t.texImage2D(ge,oe,ze,Ie,at,0,Ze,be,null)}t.bindFramebuffer(r.FRAMEBUFFER,D),je(w)?c.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,de,ge,Me.__webglTexture,0,Ht(w)):(ge===r.TEXTURE_2D||ge>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&ge<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,de,ge,Me.__webglTexture,oe),t.bindFramebuffer(r.FRAMEBUFFER,null)}function De(D,w,K){if(r.bindRenderbuffer(r.RENDERBUFFER,D),w.depthBuffer){const de=w.depthTexture,ge=de&&de.isDepthTexture?de.type:null,oe=b(w.stencilBuffer,ge),Ze=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,be=Ht(w);je(w)?c.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,be,oe,w.width,w.height):K?r.renderbufferStorageMultisample(r.RENDERBUFFER,be,oe,w.width,w.height):r.renderbufferStorage(r.RENDERBUFFER,oe,w.width,w.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Ze,r.RENDERBUFFER,D)}else{const de=w.textures;for(let ge=0;ge<de.length;ge++){const oe=de[ge],Ze=o.convert(oe.format,oe.colorSpace),be=o.convert(oe.type),ze=C(oe.internalFormat,Ze,be,oe.colorSpace),Je=Ht(w);K&&je(w)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Je,ze,w.width,w.height):je(w)?c.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Je,ze,w.width,w.height):r.renderbufferStorage(r.RENDERBUFFER,ze,w.width,w.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Oe(D,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,D),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const de=n.get(w.depthTexture);de.__renderTarget=w,(!de.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),ue(w.depthTexture,0);const ge=de.__webglTexture,oe=Ht(w);if(w.depthTexture.format===ol)je(w)?c.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ge,0,oe):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ge,0);else if(w.depthTexture.format===ll)je(w)?c.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ge,0,oe):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ge,0);else throw new Error("Unknown depthTexture format")}function xt(D){const w=n.get(D),K=D.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==D.depthTexture){const de=D.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),de){const ge=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,de.removeEventListener("dispose",ge)};de.addEventListener("dispose",ge),w.__depthDisposeCallback=ge}w.__boundDepthTexture=de}if(D.depthTexture&&!w.__autoAllocateDepthBuffer){if(K)throw new Error("target.depthTexture not supported in Cube render targets");const de=D.texture.mipmaps;de&&de.length>0?Oe(w.__webglFramebuffer[0],D):Oe(w.__webglFramebuffer,D)}else if(K){w.__webglDepthbuffer=[];for(let de=0;de<6;de++)if(t.bindFramebuffer(r.FRAMEBUFFER,w.__webglFramebuffer[de]),w.__webglDepthbuffer[de]===void 0)w.__webglDepthbuffer[de]=r.createRenderbuffer(),De(w.__webglDepthbuffer[de],D,!1);else{const ge=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,oe=w.__webglDepthbuffer[de];r.bindRenderbuffer(r.RENDERBUFFER,oe),r.framebufferRenderbuffer(r.FRAMEBUFFER,ge,r.RENDERBUFFER,oe)}}else{const de=D.texture.mipmaps;if(de&&de.length>0?t.bindFramebuffer(r.FRAMEBUFFER,w.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=r.createRenderbuffer(),De(w.__webglDepthbuffer,D,!1);else{const ge=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,oe=w.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,oe),r.framebufferRenderbuffer(r.FRAMEBUFFER,ge,r.RENDERBUFFER,oe)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function on(D,w,K){const de=n.get(D);w!==void 0&&Ee(de.__webglFramebuffer,D,D.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),K!==void 0&&xt(D)}function k(D){const w=D.texture,K=n.get(D),de=n.get(w);D.addEventListener("dispose",F);const ge=D.textures,oe=D.isWebGLCubeRenderTarget===!0,Ze=ge.length>1;if(Ze||(de.__webglTexture===void 0&&(de.__webglTexture=r.createTexture()),de.__version=w.version,l.memory.textures++),oe){K.__webglFramebuffer=[];for(let be=0;be<6;be++)if(w.mipmaps&&w.mipmaps.length>0){K.__webglFramebuffer[be]=[];for(let ze=0;ze<w.mipmaps.length;ze++)K.__webglFramebuffer[be][ze]=r.createFramebuffer()}else K.__webglFramebuffer[be]=r.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){K.__webglFramebuffer=[];for(let be=0;be<w.mipmaps.length;be++)K.__webglFramebuffer[be]=r.createFramebuffer()}else K.__webglFramebuffer=r.createFramebuffer();if(Ze)for(let be=0,ze=ge.length;be<ze;be++){const Je=n.get(ge[be]);Je.__webglTexture===void 0&&(Je.__webglTexture=r.createTexture(),l.memory.textures++)}if(D.samples>0&&je(D)===!1){K.__webglMultisampledFramebuffer=r.createFramebuffer(),K.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let be=0;be<ge.length;be++){const ze=ge[be];K.__webglColorRenderbuffer[be]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,K.__webglColorRenderbuffer[be]);const Je=o.convert(ze.format,ze.colorSpace),Me=o.convert(ze.type),Ie=C(ze.internalFormat,Je,Me,ze.colorSpace,D.isXRRenderTarget===!0),at=Ht(D);r.renderbufferStorageMultisample(r.RENDERBUFFER,at,Ie,D.width,D.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+be,r.RENDERBUFFER,K.__webglColorRenderbuffer[be])}r.bindRenderbuffer(r.RENDERBUFFER,null),D.depthBuffer&&(K.__webglDepthRenderbuffer=r.createRenderbuffer(),De(K.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(oe){t.bindTexture(r.TEXTURE_CUBE_MAP,de.__webglTexture),ne(r.TEXTURE_CUBE_MAP,w);for(let be=0;be<6;be++)if(w.mipmaps&&w.mipmaps.length>0)for(let ze=0;ze<w.mipmaps.length;ze++)Ee(K.__webglFramebuffer[be][ze],D,w,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+be,ze);else Ee(K.__webglFramebuffer[be],D,w,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+be,0);S(w)&&_(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ze){for(let be=0,ze=ge.length;be<ze;be++){const Je=ge[be],Me=n.get(Je);let Ie=r.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Ie=D.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(Ie,Me.__webglTexture),ne(Ie,Je),Ee(K.__webglFramebuffer,D,Je,r.COLOR_ATTACHMENT0+be,Ie,0),S(Je)&&_(Ie)}t.unbindTexture()}else{let be=r.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(be=D.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(be,de.__webglTexture),ne(be,w),w.mipmaps&&w.mipmaps.length>0)for(let ze=0;ze<w.mipmaps.length;ze++)Ee(K.__webglFramebuffer[ze],D,w,r.COLOR_ATTACHMENT0,be,ze);else Ee(K.__webglFramebuffer,D,w,r.COLOR_ATTACHMENT0,be,0);S(w)&&_(be),t.unbindTexture()}D.depthBuffer&&xt(D)}function Ot(D){const w=D.textures;for(let K=0,de=w.length;K<de;K++){const ge=w[K];if(S(ge)){const oe=R(D),Ze=n.get(ge).__webglTexture;t.bindTexture(oe,Ze),_(oe),t.unbindTexture()}}}const ht=[],st=[];function We(D){if(D.samples>0){if(je(D)===!1){const w=D.textures,K=D.width,de=D.height;let ge=r.COLOR_BUFFER_BIT;const oe=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ze=n.get(D),be=w.length>1;if(be)for(let Je=0;Je<w.length;Je++)t.bindFramebuffer(r.FRAMEBUFFER,Ze.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Je,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,Ze.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Je,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,Ze.__webglMultisampledFramebuffer);const ze=D.texture.mipmaps;ze&&ze.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ze.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ze.__webglFramebuffer);for(let Je=0;Je<w.length;Je++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(ge|=r.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(ge|=r.STENCIL_BUFFER_BIT)),be){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Ze.__webglColorRenderbuffer[Je]);const Me=n.get(w[Je]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Me,0)}r.blitFramebuffer(0,0,K,de,0,0,K,de,ge,r.NEAREST),f===!0&&(ht.length=0,st.length=0,ht.push(r.COLOR_ATTACHMENT0+Je),D.depthBuffer&&D.resolveDepthBuffer===!1&&(ht.push(oe),st.push(oe),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,st)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,ht))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),be)for(let Je=0;Je<w.length;Je++){t.bindFramebuffer(r.FRAMEBUFFER,Ze.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Je,r.RENDERBUFFER,Ze.__webglColorRenderbuffer[Je]);const Me=n.get(w[Je]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,Ze.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Je,r.TEXTURE_2D,Me,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ze.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&f){const w=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[w])}}}function Ht(D){return Math.min(s.maxSamples,D.samples)}function je(D){const w=n.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function ct(D){const w=l.render.frame;p.get(D)!==w&&(p.set(D,w),D.update())}function jt(D,w){const K=D.colorSpace,de=D.format,ge=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||K!==Vn&&K!==is&&(Rt.getTransfer(K)===Bt?(de!==mi||ge!==Yi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",K)),w}function Xt(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(d.width=D.naturalWidth||D.width,d.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(d.width=D.displayWidth,d.height=D.displayHeight):(d.width=D.width,d.height=D.height),d}this.allocateTextureUnit=ie,this.resetTextureUnits=J,this.setTexture2D=ue,this.setTexture2DArray=re,this.setTexture3D=le,this.setTextureCube=z,this.rebindTextures=on,this.setupRenderTarget=k,this.updateRenderTargetMipmap=Ot,this.updateMultisampleRenderTarget=We,this.setupDepthRenderbuffer=xt,this.setupFrameBufferTexture=Ee,this.useMultisampledRTT=je}function O2(r,e){function t(n,s=is){let o;const l=Rt.getTransfer(s);if(n===Yi)return r.UNSIGNED_BYTE;if(n===Bp)return r.UNSIGNED_SHORT_4_4_4_4;if(n===zp)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Ny)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Uy)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===Iy)return r.BYTE;if(n===Dy)return r.SHORT;if(n===sl)return r.UNSIGNED_SHORT;if(n===kp)return r.INT;if(n===Bs)return r.UNSIGNED_INT;if(n===Li)return r.FLOAT;if(n===_l)return r.HALF_FLOAT;if(n===Fy)return r.ALPHA;if(n===Oy)return r.RGB;if(n===mi)return r.RGBA;if(n===ol)return r.DEPTH_COMPONENT;if(n===ll)return r.DEPTH_STENCIL;if(n===Hp)return r.RED;if(n===Vp)return r.RED_INTEGER;if(n===ky)return r.RG;if(n===Gp)return r.RG_INTEGER;if(n===Wp)return r.RGBA_INTEGER;if(n===hc||n===pc||n===mc||n===gc)if(l===Bt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(n===hc)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===pc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===mc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===gc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(n===hc)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===pc)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===mc)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===gc)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Dh||n===Nh||n===Uh||n===Fh)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(n===Dh)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Nh)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Uh)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Fh)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Oh||n===kh||n===Bh)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(n===Oh||n===kh)return l===Bt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(n===Bh)return l===Bt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===zh||n===Hh||n===Vh||n===Gh||n===Wh||n===jh||n===Xh||n===Yh||n===$h||n===Kh||n===qh||n===Zh||n===Jh||n===Qh)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(n===zh)return l===Bt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Hh)return l===Bt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Vh)return l===Bt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Gh)return l===Bt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Wh)return l===Bt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===jh)return l===Bt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Xh)return l===Bt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Yh)return l===Bt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===$h)return l===Bt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Kh)return l===Bt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===qh)return l===Bt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Zh)return l===Bt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Jh)return l===Bt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Qh)return l===Bt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ep||n===tp||n===np)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(n===ep)return l===Bt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===tp)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===np)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ip||n===rp||n===sp||n===ap)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(n===ip)return o.COMPRESSED_RED_RGTC1_EXT;if(n===rp)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===sp)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ap)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===al?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}const k2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,B2=`
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

}`;class z2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new ix(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Tr({vertexShader:k2,fragmentShader:B2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new qn(new Nc(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class H2 extends Gs{constructor(e,t){super();const n=this;let s=null,o=1,l=null,c="local-floor",f=1,d=null,p=null,m=null,v=null,y=null,E=null;const M=typeof XRWebGLBinding<"u",S=new z2,_={},R=t.getContextAttributes();let C=null,b=null;const I=[],U=[],F=new dt;let X=null;const P=new Bn;P.viewport=new Lt;const L=new Bn;L.viewport=new Lt;const H=[P,L],J=new Jw;let ie=null,he=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let fe=I[Q];return fe===void 0&&(fe=new Kd,I[Q]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(Q){let fe=I[Q];return fe===void 0&&(fe=new Kd,I[Q]=fe),fe.getGripSpace()},this.getHand=function(Q){let fe=I[Q];return fe===void 0&&(fe=new Kd,I[Q]=fe),fe.getHandSpace()};function ue(Q){const fe=U.indexOf(Q.inputSource);if(fe===-1)return;const Ee=I[fe];Ee!==void 0&&(Ee.update(Q.inputSource,Q.frame,d||l),Ee.dispatchEvent({type:Q.type,data:Q.inputSource}))}function re(){s.removeEventListener("select",ue),s.removeEventListener("selectstart",ue),s.removeEventListener("selectend",ue),s.removeEventListener("squeeze",ue),s.removeEventListener("squeezestart",ue),s.removeEventListener("squeezeend",ue),s.removeEventListener("end",re),s.removeEventListener("inputsourceschange",le);for(let Q=0;Q<I.length;Q++){const fe=U[Q];fe!==null&&(U[Q]=null,I[Q].disconnect(fe))}ie=null,he=null,S.reset();for(const Q in _)delete _[Q];e.setRenderTarget(C),y=null,v=null,m=null,s=null,b=null,Ge.stop(),n.isPresenting=!1,e.setPixelRatio(X),e.setSize(F.width,F.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){o=Q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){c=Q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||l},this.setReferenceSpace=function(Q){d=Q},this.getBaseLayer=function(){return v!==null?v:y},this.getBinding=function(){return m===null&&M&&(m=new XRWebGLBinding(s,t)),m},this.getFrame=function(){return E},this.getSession=function(){return s},this.setSession=async function(Q){if(s=Q,s!==null){if(C=e.getRenderTarget(),s.addEventListener("select",ue),s.addEventListener("selectstart",ue),s.addEventListener("selectend",ue),s.addEventListener("squeeze",ue),s.addEventListener("squeezestart",ue),s.addEventListener("squeezeend",ue),s.addEventListener("end",re),s.addEventListener("inputsourceschange",le),R.xrCompatible!==!0&&await t.makeXRCompatible(),X=e.getPixelRatio(),e.getSize(F),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ee=null,De=null,Oe=null;R.depth&&(Oe=R.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Ee=R.stencil?ll:ol,De=R.stencil?al:Bs);const xt={colorFormat:t.RGBA8,depthFormat:Oe,scaleFactor:o};m=this.getBinding(),v=m.createProjectionLayer(xt),s.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),b=new zs(v.textureWidth,v.textureHeight,{format:mi,type:Yi,depthTexture:new nx(v.textureWidth,v.textureHeight,De,void 0,void 0,void 0,void 0,void 0,void 0,Ee),stencilBuffer:R.stencil,colorSpace:e.outputColorSpace,samples:R.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}else{const Ee={antialias:R.antialias,alpha:!0,depth:R.depth,stencil:R.stencil,framebufferScaleFactor:o};y=new XRWebGLLayer(s,t,Ee),s.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),b=new zs(y.framebufferWidth,y.framebufferHeight,{format:mi,type:Yi,colorSpace:e.outputColorSpace,stencilBuffer:R.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(f),d=null,l=await s.requestReferenceSpace(c),Ge.setContext(s),Ge.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function le(Q){for(let fe=0;fe<Q.removed.length;fe++){const Ee=Q.removed[fe],De=U.indexOf(Ee);De>=0&&(U[De]=null,I[De].disconnect(Ee))}for(let fe=0;fe<Q.added.length;fe++){const Ee=Q.added[fe];let De=U.indexOf(Ee);if(De===-1){for(let xt=0;xt<I.length;xt++)if(xt>=U.length){U.push(Ee),De=xt;break}else if(U[xt]===null){U[xt]=Ee,De=xt;break}if(De===-1)break}const Oe=I[De];Oe&&Oe.connect(Ee)}}const z=new j,ce=new j;function se(Q,fe,Ee){z.setFromMatrixPosition(fe.matrixWorld),ce.setFromMatrixPosition(Ee.matrixWorld);const De=z.distanceTo(ce),Oe=fe.projectionMatrix.elements,xt=Ee.projectionMatrix.elements,on=Oe[14]/(Oe[10]-1),k=Oe[14]/(Oe[10]+1),Ot=(Oe[9]+1)/Oe[5],ht=(Oe[9]-1)/Oe[5],st=(Oe[8]-1)/Oe[0],We=(xt[8]+1)/xt[0],Ht=on*st,je=on*We,ct=De/(-st+We),jt=ct*-st;if(fe.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(jt),Q.translateZ(ct),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),Oe[10]===-1)Q.projectionMatrix.copy(fe.projectionMatrix),Q.projectionMatrixInverse.copy(fe.projectionMatrixInverse);else{const Xt=on+ct,D=k+ct,w=Ht-jt,K=je+(De-jt),de=Ot*k/D*Xt,ge=ht*k/D*Xt;Q.projectionMatrix.makePerspective(w,K,de,ge,Xt,D),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function O(Q,fe){fe===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(fe.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(s===null)return;let fe=Q.near,Ee=Q.far;S.texture!==null&&(S.depthNear>0&&(fe=S.depthNear),S.depthFar>0&&(Ee=S.depthFar)),J.near=L.near=P.near=fe,J.far=L.far=P.far=Ee,(ie!==J.near||he!==J.far)&&(s.updateRenderState({depthNear:J.near,depthFar:J.far}),ie=J.near,he=J.far),J.layers.mask=Q.layers.mask|6,P.layers.mask=J.layers.mask&3,L.layers.mask=J.layers.mask&5;const De=Q.parent,Oe=J.cameras;O(J,De);for(let xt=0;xt<Oe.length;xt++)O(Oe[xt],De);Oe.length===2?se(J,P,L):J.projectionMatrix.copy(P.projectionMatrix),ne(Q,J,De)};function ne(Q,fe,Ee){Ee===null?Q.matrix.copy(fe.matrixWorld):(Q.matrix.copy(Ee.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(fe.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(fe.projectionMatrix),Q.projectionMatrixInverse.copy(fe.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Xa*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return J},this.getFoveation=function(){if(!(v===null&&y===null))return f},this.setFoveation=function(Q){f=Q,v!==null&&(v.fixedFoveation=Q),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=Q)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(J)},this.getCameraTexture=function(Q){return _[Q]};let ke=null;function Ye(Q,fe){if(p=fe.getViewerPose(d||l),E=fe,p!==null){const Ee=p.views;y!==null&&(e.setRenderTargetFramebuffer(b,y.framebuffer),e.setRenderTarget(b));let De=!1;Ee.length!==J.cameras.length&&(J.cameras.length=0,De=!0);for(let k=0;k<Ee.length;k++){const Ot=Ee[k];let ht=null;if(y!==null)ht=y.getViewport(Ot);else{const We=m.getViewSubImage(v,Ot);ht=We.viewport,k===0&&(e.setRenderTargetTextures(b,We.colorTexture,We.depthStencilTexture),e.setRenderTarget(b))}let st=H[k];st===void 0&&(st=new Bn,st.layers.enable(k),st.viewport=new Lt,H[k]=st),st.matrix.fromArray(Ot.transform.matrix),st.matrix.decompose(st.position,st.quaternion,st.scale),st.projectionMatrix.fromArray(Ot.projectionMatrix),st.projectionMatrixInverse.copy(st.projectionMatrix).invert(),st.viewport.set(ht.x,ht.y,ht.width,ht.height),k===0&&(J.matrix.copy(st.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale)),De===!0&&J.cameras.push(st)}const Oe=s.enabledFeatures;if(Oe&&Oe.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&M){m=n.getBinding();const k=m.getDepthInformation(Ee[0]);k&&k.isValid&&k.texture&&S.init(k,s.renderState)}if(Oe&&Oe.includes("camera-access")&&M){e.state.unbindTexture(),m=n.getBinding();for(let k=0;k<Ee.length;k++){const Ot=Ee[k].camera;if(Ot){let ht=_[Ot];ht||(ht=new ix,_[Ot]=ht);const st=m.getCameraImage(Ot);ht.sourceTexture=st}}}}for(let Ee=0;Ee<I.length;Ee++){const De=U[Ee],Oe=I[Ee];De!==null&&Oe!==void 0&&Oe.update(De,fe,d||l)}ke&&ke(Q,fe),fe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:fe}),E=null}const Ge=new ux;Ge.setAnimationLoop(Ye),this.setAnimationLoop=function(Q){ke=Q},this.dispose=function(){}}}const Ls=new Ki,V2=new yt;function G2(r,e){function t(S,_){S.matrixAutoUpdate===!0&&S.updateMatrix(),_.value.copy(S.matrix)}function n(S,_){_.color.getRGB(S.fogColor.value,Ky(r)),_.isFog?(S.fogNear.value=_.near,S.fogFar.value=_.far):_.isFogExp2&&(S.fogDensity.value=_.density)}function s(S,_,R,C,b){_.isMeshBasicMaterial||_.isMeshLambertMaterial?o(S,_):_.isMeshToonMaterial?(o(S,_),m(S,_)):_.isMeshPhongMaterial?(o(S,_),p(S,_)):_.isMeshStandardMaterial?(o(S,_),v(S,_),_.isMeshPhysicalMaterial&&y(S,_,b)):_.isMeshMatcapMaterial?(o(S,_),E(S,_)):_.isMeshDepthMaterial?o(S,_):_.isMeshDistanceMaterial?(o(S,_),M(S,_)):_.isMeshNormalMaterial?o(S,_):_.isLineBasicMaterial?(l(S,_),_.isLineDashedMaterial&&c(S,_)):_.isPointsMaterial?f(S,_,R,C):_.isSpriteMaterial?d(S,_):_.isShadowMaterial?(S.color.value.copy(_.color),S.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function o(S,_){S.opacity.value=_.opacity,_.color&&S.diffuse.value.copy(_.color),_.emissive&&S.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(S.map.value=_.map,t(_.map,S.mapTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,t(_.alphaMap,S.alphaMapTransform)),_.bumpMap&&(S.bumpMap.value=_.bumpMap,t(_.bumpMap,S.bumpMapTransform),S.bumpScale.value=_.bumpScale,_.side===zn&&(S.bumpScale.value*=-1)),_.normalMap&&(S.normalMap.value=_.normalMap,t(_.normalMap,S.normalMapTransform),S.normalScale.value.copy(_.normalScale),_.side===zn&&S.normalScale.value.negate()),_.displacementMap&&(S.displacementMap.value=_.displacementMap,t(_.displacementMap,S.displacementMapTransform),S.displacementScale.value=_.displacementScale,S.displacementBias.value=_.displacementBias),_.emissiveMap&&(S.emissiveMap.value=_.emissiveMap,t(_.emissiveMap,S.emissiveMapTransform)),_.specularMap&&(S.specularMap.value=_.specularMap,t(_.specularMap,S.specularMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest);const R=e.get(_),C=R.envMap,b=R.envMapRotation;C&&(S.envMap.value=C,Ls.copy(b),Ls.x*=-1,Ls.y*=-1,Ls.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(Ls.y*=-1,Ls.z*=-1),S.envMapRotation.value.setFromMatrix4(V2.makeRotationFromEuler(Ls)),S.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=_.reflectivity,S.ior.value=_.ior,S.refractionRatio.value=_.refractionRatio),_.lightMap&&(S.lightMap.value=_.lightMap,S.lightMapIntensity.value=_.lightMapIntensity,t(_.lightMap,S.lightMapTransform)),_.aoMap&&(S.aoMap.value=_.aoMap,S.aoMapIntensity.value=_.aoMapIntensity,t(_.aoMap,S.aoMapTransform))}function l(S,_){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,_.map&&(S.map.value=_.map,t(_.map,S.mapTransform))}function c(S,_){S.dashSize.value=_.dashSize,S.totalSize.value=_.dashSize+_.gapSize,S.scale.value=_.scale}function f(S,_,R,C){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,S.size.value=_.size*R,S.scale.value=C*.5,_.map&&(S.map.value=_.map,t(_.map,S.uvTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,t(_.alphaMap,S.alphaMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest)}function d(S,_){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,S.rotation.value=_.rotation,_.map&&(S.map.value=_.map,t(_.map,S.mapTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,t(_.alphaMap,S.alphaMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest)}function p(S,_){S.specular.value.copy(_.specular),S.shininess.value=Math.max(_.shininess,1e-4)}function m(S,_){_.gradientMap&&(S.gradientMap.value=_.gradientMap)}function v(S,_){S.metalness.value=_.metalness,_.metalnessMap&&(S.metalnessMap.value=_.metalnessMap,t(_.metalnessMap,S.metalnessMapTransform)),S.roughness.value=_.roughness,_.roughnessMap&&(S.roughnessMap.value=_.roughnessMap,t(_.roughnessMap,S.roughnessMapTransform)),_.envMap&&(S.envMapIntensity.value=_.envMapIntensity)}function y(S,_,R){S.ior.value=_.ior,_.sheen>0&&(S.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),S.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(S.sheenColorMap.value=_.sheenColorMap,t(_.sheenColorMap,S.sheenColorMapTransform)),_.sheenRoughnessMap&&(S.sheenRoughnessMap.value=_.sheenRoughnessMap,t(_.sheenRoughnessMap,S.sheenRoughnessMapTransform))),_.clearcoat>0&&(S.clearcoat.value=_.clearcoat,S.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(S.clearcoatMap.value=_.clearcoatMap,t(_.clearcoatMap,S.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,t(_.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(S.clearcoatNormalMap.value=_.clearcoatNormalMap,t(_.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===zn&&S.clearcoatNormalScale.value.negate())),_.dispersion>0&&(S.dispersion.value=_.dispersion),_.iridescence>0&&(S.iridescence.value=_.iridescence,S.iridescenceIOR.value=_.iridescenceIOR,S.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(S.iridescenceMap.value=_.iridescenceMap,t(_.iridescenceMap,S.iridescenceMapTransform)),_.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=_.iridescenceThicknessMap,t(_.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),_.transmission>0&&(S.transmission.value=_.transmission,S.transmissionSamplerMap.value=R.texture,S.transmissionSamplerSize.value.set(R.width,R.height),_.transmissionMap&&(S.transmissionMap.value=_.transmissionMap,t(_.transmissionMap,S.transmissionMapTransform)),S.thickness.value=_.thickness,_.thicknessMap&&(S.thicknessMap.value=_.thicknessMap,t(_.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=_.attenuationDistance,S.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(S.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(S.anisotropyMap.value=_.anisotropyMap,t(_.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=_.specularIntensity,S.specularColor.value.copy(_.specularColor),_.specularColorMap&&(S.specularColorMap.value=_.specularColorMap,t(_.specularColorMap,S.specularColorMapTransform)),_.specularIntensityMap&&(S.specularIntensityMap.value=_.specularIntensityMap,t(_.specularIntensityMap,S.specularIntensityMapTransform))}function E(S,_){_.matcap&&(S.matcap.value=_.matcap)}function M(S,_){const R=e.get(_).light;S.referencePosition.value.setFromMatrixPosition(R.matrixWorld),S.nearDistance.value=R.shadow.camera.near,S.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function W2(r,e,t,n){let s={},o={},l=[];const c=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function f(R,C){const b=C.program;n.uniformBlockBinding(R,b)}function d(R,C){let b=s[R.id];b===void 0&&(E(R),b=p(R),s[R.id]=b,R.addEventListener("dispose",S));const I=C.program;n.updateUBOMapping(R,I);const U=e.render.frame;o[R.id]!==U&&(v(R),o[R.id]=U)}function p(R){const C=m();R.__bindingPointIndex=C;const b=r.createBuffer(),I=R.__size,U=R.usage;return r.bindBuffer(r.UNIFORM_BUFFER,b),r.bufferData(r.UNIFORM_BUFFER,I,U),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,C,b),b}function m(){for(let R=0;R<c;R++)if(l.indexOf(R)===-1)return l.push(R),R;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(R){const C=s[R.id],b=R.uniforms,I=R.__cache;r.bindBuffer(r.UNIFORM_BUFFER,C);for(let U=0,F=b.length;U<F;U++){const X=Array.isArray(b[U])?b[U]:[b[U]];for(let P=0,L=X.length;P<L;P++){const H=X[P];if(y(H,U,P,I)===!0){const J=H.__offset,ie=Array.isArray(H.value)?H.value:[H.value];let he=0;for(let ue=0;ue<ie.length;ue++){const re=ie[ue],le=M(re);typeof re=="number"||typeof re=="boolean"?(H.__data[0]=re,r.bufferSubData(r.UNIFORM_BUFFER,J+he,H.__data)):re.isMatrix3?(H.__data[0]=re.elements[0],H.__data[1]=re.elements[1],H.__data[2]=re.elements[2],H.__data[3]=0,H.__data[4]=re.elements[3],H.__data[5]=re.elements[4],H.__data[6]=re.elements[5],H.__data[7]=0,H.__data[8]=re.elements[6],H.__data[9]=re.elements[7],H.__data[10]=re.elements[8],H.__data[11]=0):(re.toArray(H.__data,he),he+=le.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,J,H.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function y(R,C,b,I){const U=R.value,F=C+"_"+b;if(I[F]===void 0)return typeof U=="number"||typeof U=="boolean"?I[F]=U:I[F]=U.clone(),!0;{const X=I[F];if(typeof U=="number"||typeof U=="boolean"){if(X!==U)return I[F]=U,!0}else if(X.equals(U)===!1)return X.copy(U),!0}return!1}function E(R){const C=R.uniforms;let b=0;const I=16;for(let F=0,X=C.length;F<X;F++){const P=Array.isArray(C[F])?C[F]:[C[F]];for(let L=0,H=P.length;L<H;L++){const J=P[L],ie=Array.isArray(J.value)?J.value:[J.value];for(let he=0,ue=ie.length;he<ue;he++){const re=ie[he],le=M(re),z=b%I,ce=z%le.boundary,se=z+ce;b+=ce,se!==0&&I-se<le.storage&&(b+=I-se),J.__data=new Float32Array(le.storage/Float32Array.BYTES_PER_ELEMENT),J.__offset=b,b+=le.storage}}}const U=b%I;return U>0&&(b+=I-U),R.__size=b,R.__cache={},this}function M(R){const C={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(C.boundary=4,C.storage=4):R.isVector2?(C.boundary=8,C.storage=8):R.isVector3||R.isColor?(C.boundary=16,C.storage=12):R.isVector4?(C.boundary=16,C.storage=16):R.isMatrix3?(C.boundary=48,C.storage=48):R.isMatrix4?(C.boundary=64,C.storage=64):R.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",R),C}function S(R){const C=R.target;C.removeEventListener("dispose",S);const b=l.indexOf(C.__bindingPointIndex);l.splice(b,1),r.deleteBuffer(s[C.id]),delete s[C.id],delete o[C.id]}function _(){for(const R in s)r.deleteBuffer(s[R]);l=[],s={},o={}}return{bind:f,update:d,dispose:_}}class j2{constructor(e={}){const{canvas:t=XT(),context:n=null,depth:s=!0,stencil:o=!1,alpha:l=!1,antialias:c=!1,premultipliedAlpha:f=!0,preserveDrawingBuffer:d=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:m=!1,reversedDepthBuffer:v=!1}=e;this.isWebGLRenderer=!0;let y;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=n.getContextAttributes().alpha}else y=l;const E=new Uint32Array(4),M=new Int32Array(4);let S=null,_=null;const R=[],C=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=as,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const b=this;let I=!1;this._outputColorSpace=Sn;let U=0,F=0,X=null,P=-1,L=null;const H=new Lt,J=new Lt;let ie=null;const he=new mt(0);let ue=0,re=t.width,le=t.height,z=1,ce=null,se=null;const O=new Lt(0,0,re,le),ne=new Lt(0,0,re,le);let ke=!1;const Ye=new Kp;let Ge=!1,Q=!1;const fe=new yt,Ee=new j,De=new Lt,Oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let xt=!1;function on(){return X===null?z:1}let k=n;function Ot(A,Y){return t.getContext(A,Y)}try{const A={alpha:!0,depth:s,stencil:o,antialias:c,premultipliedAlpha:f,preserveDrawingBuffer:d,powerPreference:p,failIfMajorPerformanceCaveat:m};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Op}`),t.addEventListener("webglcontextlost",Ae,!1),t.addEventListener("webglcontextrestored",Ne,!1),t.addEventListener("webglcontextcreationerror",ye,!1),k===null){const Y="webgl2";if(k=Ot(Y,A),k===null)throw Ot(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let ht,st,We,Ht,je,ct,jt,Xt,D,w,K,de,ge,oe,Ze,be,ze,Je,Me,Ie,at,Ke,Ce,pt;function V(){ht=new tC(k),ht.init(),Ke=new O2(k,ht),st=new $R(k,ht,e,Ke),We=new U2(k,ht),st.reversedDepthBuffer&&v&&We.buffers.depth.setReversed(!0),Ht=new rC(k),je=new E2,ct=new F2(k,ht,We,je,st,Ke,Ht),jt=new qR(b),Xt=new eC(b),D=new cb(k),Ce=new XR(k,D),w=new nC(k,D,Ht,Ce),K=new aC(k,w,D,Ht),Me=new sC(k,st,ct),be=new KR(je),de=new S2(b,jt,Xt,ht,st,Ce,be),ge=new G2(b,je),oe=new T2,Ze=new P2(ht),Je=new jR(b,jt,Xt,We,K,y,f),ze=new D2(b,K,st),pt=new W2(k,Ht,st,We),Ie=new YR(k,ht,Ht),at=new iC(k,ht,Ht),Ht.programs=de.programs,b.capabilities=st,b.extensions=ht,b.properties=je,b.renderLists=oe,b.shadowMap=ze,b.state=We,b.info=Ht}V();const xe=new H2(b,k);this.xr=xe,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const A=ht.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=ht.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(A){A!==void 0&&(z=A,this.setSize(re,le,!1))},this.getSize=function(A){return A.set(re,le)},this.setSize=function(A,Y,ee=!0){if(xe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}re=A,le=Y,t.width=Math.floor(A*z),t.height=Math.floor(Y*z),ee===!0&&(t.style.width=A+"px",t.style.height=Y+"px"),this.setViewport(0,0,A,Y)},this.getDrawingBufferSize=function(A){return A.set(re*z,le*z).floor()},this.setDrawingBufferSize=function(A,Y,ee){re=A,le=Y,z=ee,t.width=Math.floor(A*ee),t.height=Math.floor(Y*ee),this.setViewport(0,0,A,Y)},this.getCurrentViewport=function(A){return A.copy(H)},this.getViewport=function(A){return A.copy(O)},this.setViewport=function(A,Y,ee,te){A.isVector4?O.set(A.x,A.y,A.z,A.w):O.set(A,Y,ee,te),We.viewport(H.copy(O).multiplyScalar(z).round())},this.getScissor=function(A){return A.copy(ne)},this.setScissor=function(A,Y,ee,te){A.isVector4?ne.set(A.x,A.y,A.z,A.w):ne.set(A,Y,ee,te),We.scissor(J.copy(ne).multiplyScalar(z).round())},this.getScissorTest=function(){return ke},this.setScissorTest=function(A){We.setScissorTest(ke=A)},this.setOpaqueSort=function(A){ce=A},this.setTransparentSort=function(A){se=A},this.getClearColor=function(A){return A.copy(Je.getClearColor())},this.setClearColor=function(){Je.setClearColor(...arguments)},this.getClearAlpha=function(){return Je.getClearAlpha()},this.setClearAlpha=function(){Je.setClearAlpha(...arguments)},this.clear=function(A=!0,Y=!0,ee=!0){let te=0;if(A){let W=!1;if(X!==null){const Se=X.texture.format;W=Se===Wp||Se===Gp||Se===Vp}if(W){const Se=X.texture.type,Pe=Se===Yi||Se===Bs||Se===sl||Se===al||Se===Bp||Se===zp,He=Je.getClearColor(),Ue=Je.getClearAlpha(),rt=He.r,ot=He.g,Qe=He.b;Pe?(E[0]=rt,E[1]=ot,E[2]=Qe,E[3]=Ue,k.clearBufferuiv(k.COLOR,0,E)):(M[0]=rt,M[1]=ot,M[2]=Qe,M[3]=Ue,k.clearBufferiv(k.COLOR,0,M))}else te|=k.COLOR_BUFFER_BIT}Y&&(te|=k.DEPTH_BUFFER_BIT),ee&&(te|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(te)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ae,!1),t.removeEventListener("webglcontextrestored",Ne,!1),t.removeEventListener("webglcontextcreationerror",ye,!1),Je.dispose(),oe.dispose(),Ze.dispose(),je.dispose(),jt.dispose(),Xt.dispose(),K.dispose(),Ce.dispose(),pt.dispose(),de.dispose(),xe.dispose(),xe.removeEventListener("sessionstart",Mn),xe.removeEventListener("sessionend",Ws),Zn.stop()};function Ae(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function Ne(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;const A=Ht.autoReset,Y=ze.enabled,ee=ze.autoUpdate,te=ze.needsUpdate,W=ze.type;V(),Ht.autoReset=A,ze.enabled=Y,ze.autoUpdate=ee,ze.needsUpdate=te,ze.type=W}function ye(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function pe(A){const Y=A.target;Y.removeEventListener("dispose",pe),Xe(Y)}function Xe(A){ft(A),je.remove(A)}function ft(A){const Y=je.get(A).programs;Y!==void 0&&(Y.forEach(function(ee){de.releaseProgram(ee)}),A.isShaderMaterial&&de.releaseShaderCache(A))}this.renderBufferDirect=function(A,Y,ee,te,W,Se){Y===null&&(Y=Oe);const Pe=W.isMesh&&W.matrixWorld.determinant()<0,He=er(A,Y,ee,te,W);We.setMaterial(te,Pe);let Ue=ee.index,rt=1;if(te.wireframe===!0){if(Ue=w.getWireframeAttribute(ee),Ue===void 0)return;rt=2}const ot=ee.drawRange,Qe=ee.attributes.position;let lt=ot.start*rt,It=(ot.start+ot.count)*rt;Se!==null&&(lt=Math.max(lt,Se.start*rt),It=Math.min(It,(Se.start+Se.count)*rt)),Ue!==null?(lt=Math.max(lt,0),It=Math.min(It,Ue.count)):Qe!=null&&(lt=Math.max(lt,0),It=Math.min(It,Qe.count));const At=It-lt;if(At<0||At===1/0)return;Ce.setup(W,te,He,ee,Ue);let Vt,Nt=Ie;if(Ue!==null&&(Vt=D.get(Ue),Nt=at,Nt.setIndex(Vt)),W.isMesh)te.wireframe===!0?(We.setLineWidth(te.wireframeLinewidth*on()),Nt.setMode(k.LINES)):Nt.setMode(k.TRIANGLES);else if(W.isLine){let tt=te.linewidth;tt===void 0&&(tt=1),We.setLineWidth(tt*on()),W.isLineSegments?Nt.setMode(k.LINES):W.isLineLoop?Nt.setMode(k.LINE_LOOP):Nt.setMode(k.LINE_STRIP)}else W.isPoints?Nt.setMode(k.POINTS):W.isSprite&&Nt.setMode(k.TRIANGLES);if(W.isBatchedMesh)if(W._multiDrawInstances!==null)dl("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Nt.renderMultiDrawInstances(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount,W._multiDrawInstances);else if(ht.get("WEBGL_multi_draw"))Nt.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{const tt=W._multiDrawStarts,kt=W._multiDrawCounts,Mt=W._multiDrawCount,ln=Ue?D.get(Ue).bytesPerElement:1,yi=je.get(te).currentProgram.getUniforms();for(let Dn=0;Dn<Mt;Dn++)yi.setValue(k,"_gl_DrawID",Dn),Nt.render(tt[Dn]/ln,kt[Dn])}else if(W.isInstancedMesh)Nt.renderInstances(lt,At,W.count);else if(ee.isInstancedBufferGeometry){const tt=ee._maxInstanceCount!==void 0?ee._maxInstanceCount:1/0,kt=Math.min(ee.instanceCount,tt);Nt.renderInstances(lt,At,kt)}else Nt.render(lt,At)};function Dt(A,Y,ee){A.transparent===!0&&A.side===Gi&&A.forceSinglePass===!1?(A.side=zn,A.needsUpdate=!0,Xs(A,Y,ee),A.side=Mr,A.needsUpdate=!0,Xs(A,Y,ee),A.side=Gi):Xs(A,Y,ee)}this.compile=function(A,Y,ee=null){ee===null&&(ee=A),_=Ze.get(ee),_.init(Y),C.push(_),ee.traverseVisible(function(W){W.isLight&&W.layers.test(Y.layers)&&(_.pushLight(W),W.castShadow&&_.pushShadow(W))}),A!==ee&&A.traverseVisible(function(W){W.isLight&&W.layers.test(Y.layers)&&(_.pushLight(W),W.castShadow&&_.pushShadow(W))}),_.setupLights();const te=new Set;return A.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;const Se=W.material;if(Se)if(Array.isArray(Se))for(let Pe=0;Pe<Se.length;Pe++){const He=Se[Pe];Dt(He,ee,W),te.add(He)}else Dt(Se,ee,W),te.add(Se)}),_=C.pop(),te},this.compileAsync=function(A,Y,ee=null){const te=this.compile(A,Y,ee);return new Promise(W=>{function Se(){if(te.forEach(function(Pe){je.get(Pe).currentProgram.isReady()&&te.delete(Pe)}),te.size===0){W(A);return}setTimeout(Se,10)}ht.get("KHR_parallel_shader_compile")!==null?Se():setTimeout(Se,10)})};let bt=null;function ai(A){bt&&bt(A)}function Mn(){Zn.stop()}function Ws(){Zn.start()}const Zn=new ux;Zn.setAnimationLoop(ai),typeof self<"u"&&Zn.setContext(self),this.setAnimationLoop=function(A){bt=A,xe.setAnimationLoop(A),A===null?Zn.stop():Zn.start()},xe.addEventListener("sessionstart",Mn),xe.addEventListener("sessionend",Ws),this.render=function(A,Y){if(Y!==void 0&&Y.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),xe.enabled===!0&&xe.isPresenting===!0&&(xe.cameraAutoUpdate===!0&&xe.updateCamera(Y),Y=xe.getCamera()),A.isScene===!0&&A.onBeforeRender(b,A,Y,X),_=Ze.get(A,C.length),_.init(Y),C.push(_),fe.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),Ye.setFromProjectionMatrix(fe,Wi,Y.reversedDepth),Q=this.localClippingEnabled,Ge=be.init(this.clippingPlanes,Q),S=oe.get(A,R.length),S.init(),R.push(S),xe.enabled===!0&&xe.isPresenting===!0){const Se=b.xr.getDepthSensingMesh();Se!==null&&so(Se,Y,-1/0,b.sortObjects)}so(A,Y,0,b.sortObjects),S.finish(),b.sortObjects===!0&&S.sort(ce,se),xt=xe.enabled===!1||xe.isPresenting===!1||xe.hasDepthSensing()===!1,xt&&Je.addToRenderList(S,A),this.info.render.frame++,Ge===!0&&be.beginShadows();const ee=_.state.shadowsArray;ze.render(ee,A,Y),Ge===!0&&be.endShadows(),this.info.autoReset===!0&&this.info.reset();const te=S.opaque,W=S.transmissive;if(_.setupLights(),Y.isArrayCamera){const Se=Y.cameras;if(W.length>0)for(let Pe=0,He=Se.length;Pe<He;Pe++){const Ue=Se[Pe];fs(te,W,A,Ue)}xt&&Je.render(A);for(let Pe=0,He=Se.length;Pe<He;Pe++){const Ue=Se[Pe];Cr(S,A,Ue,Ue.viewport)}}else W.length>0&&fs(te,W,A,Y),xt&&Je.render(A),Cr(S,A,Y);X!==null&&F===0&&(ct.updateMultisampleRenderTarget(X),ct.updateRenderTargetMipmap(X)),A.isScene===!0&&A.onAfterRender(b,A,Y),Ce.resetDefaultState(),P=-1,L=null,C.pop(),C.length>0?(_=C[C.length-1],Ge===!0&&be.setGlobalState(b.clippingPlanes,_.state.camera)):_=null,R.pop(),R.length>0?S=R[R.length-1]:S=null};function so(A,Y,ee,te){if(A.visible===!1)return;if(A.layers.test(Y.layers)){if(A.isGroup)ee=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(Y);else if(A.isLight)_.pushLight(A),A.castShadow&&_.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Ye.intersectsSprite(A)){te&&De.setFromMatrixPosition(A.matrixWorld).applyMatrix4(fe);const Pe=K.update(A),He=A.material;He.visible&&S.push(A,Pe,He,ee,De.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Ye.intersectsObject(A))){const Pe=K.update(A),He=A.material;if(te&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),De.copy(A.boundingSphere.center)):(Pe.boundingSphere===null&&Pe.computeBoundingSphere(),De.copy(Pe.boundingSphere.center)),De.applyMatrix4(A.matrixWorld).applyMatrix4(fe)),Array.isArray(He)){const Ue=Pe.groups;for(let rt=0,ot=Ue.length;rt<ot;rt++){const Qe=Ue[rt],lt=He[Qe.materialIndex];lt&&lt.visible&&S.push(A,Pe,lt,ee,De.z,Qe)}}else He.visible&&S.push(A,Pe,He,ee,De.z,null)}}const Se=A.children;for(let Pe=0,He=Se.length;Pe<He;Pe++)so(Se[Pe],Y,ee,te)}function Cr(A,Y,ee,te){const W=A.opaque,Se=A.transmissive,Pe=A.transparent;_.setupLightsView(ee),Ge===!0&&be.setGlobalState(b.clippingPlanes,ee),te&&We.viewport(H.copy(te)),W.length>0&&Qi(W,Y,ee),Se.length>0&&Qi(Se,Y,ee),Pe.length>0&&Qi(Pe,Y,ee),We.buffers.depth.setTest(!0),We.buffers.depth.setMask(!0),We.buffers.color.setMask(!0),We.setPolygonOffset(!1)}function fs(A,Y,ee,te){if((ee.isScene===!0?ee.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[te.id]===void 0&&(_.state.transmissionRenderTarget[te.id]=new zs(1,1,{generateMipmaps:!0,type:ht.has("EXT_color_buffer_half_float")||ht.has("EXT_color_buffer_float")?_l:Yi,minFilter:_r,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Rt.workingColorSpace}));const Se=_.state.transmissionRenderTarget[te.id],Pe=te.viewport||H;Se.setSize(Pe.z*b.transmissionResolutionScale,Pe.w*b.transmissionResolutionScale);const He=b.getRenderTarget(),Ue=b.getActiveCubeFace(),rt=b.getActiveMipmapLevel();b.setRenderTarget(Se),b.getClearColor(he),ue=b.getClearAlpha(),ue<1&&b.setClearColor(16777215,.5),b.clear(),xt&&Je.render(ee);const ot=b.toneMapping;b.toneMapping=as;const Qe=te.viewport;if(te.viewport!==void 0&&(te.viewport=void 0),_.setupLightsView(te),Ge===!0&&be.setGlobalState(b.clippingPlanes,te),Qi(A,ee,te),ct.updateMultisampleRenderTarget(Se),ct.updateRenderTargetMipmap(Se),ht.has("WEBGL_multisampled_render_to_texture")===!1){let lt=!1;for(let It=0,At=Y.length;It<At;It++){const Vt=Y[It],Nt=Vt.object,tt=Vt.geometry,kt=Vt.material,Mt=Vt.group;if(kt.side===Gi&&Nt.layers.test(te.layers)){const ln=kt.side;kt.side=zn,kt.needsUpdate=!0,js(Nt,ee,te,tt,kt,Mt),kt.side=ln,kt.needsUpdate=!0,lt=!0}}lt===!0&&(ct.updateMultisampleRenderTarget(Se),ct.updateRenderTargetMipmap(Se))}b.setRenderTarget(He,Ue,rt),b.setClearColor(he,ue),Qe!==void 0&&(te.viewport=Qe),b.toneMapping=ot}function Qi(A,Y,ee){const te=Y.isScene===!0?Y.overrideMaterial:null;for(let W=0,Se=A.length;W<Se;W++){const Pe=A[W],He=Pe.object,Ue=Pe.geometry,rt=Pe.group;let ot=Pe.material;ot.allowOverride===!0&&te!==null&&(ot=te),He.layers.test(ee.layers)&&js(He,Y,ee,Ue,ot,rt)}}function js(A,Y,ee,te,W,Se){A.onBeforeRender(b,Y,ee,te,W,Se),A.modelViewMatrix.multiplyMatrices(ee.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),W.onBeforeRender(b,Y,ee,te,A,Se),W.transparent===!0&&W.side===Gi&&W.forceSinglePass===!1?(W.side=zn,W.needsUpdate=!0,b.renderBufferDirect(ee,Y,te,W,A,Se),W.side=Mr,W.needsUpdate=!0,b.renderBufferDirect(ee,Y,te,W,A,Se),W.side=Gi):b.renderBufferDirect(ee,Y,te,W,A,Se),A.onAfterRender(b,Y,ee,te,W,Se)}function Xs(A,Y,ee){Y.isScene!==!0&&(Y=Oe);const te=je.get(A),W=_.state.lights,Se=_.state.shadowsArray,Pe=W.state.version,He=de.getParameters(A,W.state,Se,Y,ee),Ue=de.getProgramCacheKey(He);let rt=te.programs;te.environment=A.isMeshStandardMaterial?Y.environment:null,te.fog=Y.fog,te.envMap=(A.isMeshStandardMaterial?Xt:jt).get(A.envMap||te.environment),te.envMapRotation=te.environment!==null&&A.envMap===null?Y.environmentRotation:A.envMapRotation,rt===void 0&&(A.addEventListener("dispose",pe),rt=new Map,te.programs=rt);let ot=rt.get(Ue);if(ot!==void 0){if(te.currentProgram===ot&&te.lightsStateVersion===Pe)return bl(A,He),ot}else He.uniforms=de.getUniforms(A),A.onBeforeCompile(He,b),ot=de.acquireProgram(He,Ue),rt.set(Ue,ot),te.uniforms=He.uniforms;const Qe=te.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Qe.clippingPlanes=be.uniform),bl(A,He),te.needsLights=Rl(A),te.lightsStateVersion=Pe,te.needsLights&&(Qe.ambientLightColor.value=W.state.ambient,Qe.lightProbe.value=W.state.probe,Qe.directionalLights.value=W.state.directional,Qe.directionalLightShadows.value=W.state.directionalShadow,Qe.spotLights.value=W.state.spot,Qe.spotLightShadows.value=W.state.spotShadow,Qe.rectAreaLights.value=W.state.rectArea,Qe.ltc_1.value=W.state.rectAreaLTC1,Qe.ltc_2.value=W.state.rectAreaLTC2,Qe.pointLights.value=W.state.point,Qe.pointLightShadows.value=W.state.pointShadow,Qe.hemisphereLights.value=W.state.hemi,Qe.directionalShadowMap.value=W.state.directionalShadowMap,Qe.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Qe.spotShadowMap.value=W.state.spotShadowMap,Qe.spotLightMatrix.value=W.state.spotLightMatrix,Qe.spotLightMap.value=W.state.spotLightMap,Qe.pointShadowMap.value=W.state.pointShadowMap,Qe.pointShadowMatrix.value=W.state.pointShadowMatrix),te.currentProgram=ot,te.uniformsList=null,ot}function wl(A){if(A.uniformsList===null){const Y=A.currentProgram.getUniforms();A.uniformsList=vc.seqWithValue(Y.seq,A.uniforms)}return A.uniformsList}function bl(A,Y){const ee=je.get(A);ee.outputColorSpace=Y.outputColorSpace,ee.batching=Y.batching,ee.batchingColor=Y.batchingColor,ee.instancing=Y.instancing,ee.instancingColor=Y.instancingColor,ee.instancingMorph=Y.instancingMorph,ee.skinning=Y.skinning,ee.morphTargets=Y.morphTargets,ee.morphNormals=Y.morphNormals,ee.morphColors=Y.morphColors,ee.morphTargetsCount=Y.morphTargetsCount,ee.numClippingPlanes=Y.numClippingPlanes,ee.numIntersection=Y.numClipIntersection,ee.vertexAlphas=Y.vertexAlphas,ee.vertexTangents=Y.vertexTangents,ee.toneMapping=Y.toneMapping}function er(A,Y,ee,te,W){Y.isScene!==!0&&(Y=Oe),ct.resetTextureUnits();const Se=Y.fog,Pe=te.isMeshStandardMaterial?Y.environment:null,He=X===null?b.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:Vn,Ue=(te.isMeshStandardMaterial?Xt:jt).get(te.envMap||Pe),rt=te.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,ot=!!ee.attributes.tangent&&(!!te.normalMap||te.anisotropy>0),Qe=!!ee.morphAttributes.position,lt=!!ee.morphAttributes.normal,It=!!ee.morphAttributes.color;let At=as;te.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(At=b.toneMapping);const Vt=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,Nt=Vt!==void 0?Vt.length:0,tt=je.get(te),kt=_.state.lights;if(Ge===!0&&(Q===!0||A!==L)){const nn=A===L&&te.id===P;be.setState(te,A,nn)}let Mt=!1;te.version===tt.__version?(tt.needsLights&&tt.lightsStateVersion!==kt.state.version||tt.outputColorSpace!==He||W.isBatchedMesh&&tt.batching===!1||!W.isBatchedMesh&&tt.batching===!0||W.isBatchedMesh&&tt.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&tt.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&tt.instancing===!1||!W.isInstancedMesh&&tt.instancing===!0||W.isSkinnedMesh&&tt.skinning===!1||!W.isSkinnedMesh&&tt.skinning===!0||W.isInstancedMesh&&tt.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&tt.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&tt.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&tt.instancingMorph===!1&&W.morphTexture!==null||tt.envMap!==Ue||te.fog===!0&&tt.fog!==Se||tt.numClippingPlanes!==void 0&&(tt.numClippingPlanes!==be.numPlanes||tt.numIntersection!==be.numIntersection)||tt.vertexAlphas!==rt||tt.vertexTangents!==ot||tt.morphTargets!==Qe||tt.morphNormals!==lt||tt.morphColors!==It||tt.toneMapping!==At||tt.morphTargetsCount!==Nt)&&(Mt=!0):(Mt=!0,tt.__version=te.version);let ln=tt.currentProgram;Mt===!0&&(ln=Xs(te,Y,W));let yi=!1,Dn=!1,ds=!1;const Gt=ln.getUniforms(),Nn=tt.uniforms;if(We.useProgram(ln.program)&&(yi=!0,Dn=!0,ds=!0),te.id!==P&&(P=te.id,Dn=!0),yi||L!==A){We.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Gt.setValue(k,"projectionMatrix",A.projectionMatrix),Gt.setValue(k,"viewMatrix",A.matrixWorldInverse);const wn=Gt.map.cameraPosition;wn!==void 0&&wn.setValue(k,Ee.setFromMatrixPosition(A.matrixWorld)),st.logarithmicDepthBuffer&&Gt.setValue(k,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(te.isMeshPhongMaterial||te.isMeshToonMaterial||te.isMeshLambertMaterial||te.isMeshBasicMaterial||te.isMeshStandardMaterial||te.isShaderMaterial)&&Gt.setValue(k,"isOrthographic",A.isOrthographicCamera===!0),L!==A&&(L=A,Dn=!0,ds=!0)}if(W.isSkinnedMesh){Gt.setOptional(k,W,"bindMatrix"),Gt.setOptional(k,W,"bindMatrixInverse");const nn=W.skeleton;nn&&(nn.boneTexture===null&&nn.computeBoneTexture(),Gt.setValue(k,"boneTexture",nn.boneTexture,ct))}W.isBatchedMesh&&(Gt.setOptional(k,W,"batchingTexture"),Gt.setValue(k,"batchingTexture",W._matricesTexture,ct),Gt.setOptional(k,W,"batchingIdTexture"),Gt.setValue(k,"batchingIdTexture",W._indirectTexture,ct),Gt.setOptional(k,W,"batchingColorTexture"),W._colorsTexture!==null&&Gt.setValue(k,"batchingColorTexture",W._colorsTexture,ct));const Tn=ee.morphAttributes;if((Tn.position!==void 0||Tn.normal!==void 0||Tn.color!==void 0)&&Me.update(W,ee,ln),(Dn||tt.receiveShadow!==W.receiveShadow)&&(tt.receiveShadow=W.receiveShadow,Gt.setValue(k,"receiveShadow",W.receiveShadow)),te.isMeshGouraudMaterial&&te.envMap!==null&&(Nn.envMap.value=Ue,Nn.flipEnvMap.value=Ue.isCubeTexture&&Ue.isRenderTargetTexture===!1?-1:1),te.isMeshStandardMaterial&&te.envMap===null&&Y.environment!==null&&(Nn.envMapIntensity.value=Y.environmentIntensity),Dn&&(Gt.setValue(k,"toneMappingExposure",b.toneMappingExposure),tt.needsLights&&Al(Nn,ds),Se&&te.fog===!0&&ge.refreshFogUniforms(Nn,Se),ge.refreshMaterialUniforms(Nn,te,z,le,_.state.transmissionRenderTarget[A.id]),vc.upload(k,wl(tt),Nn,ct)),te.isShaderMaterial&&te.uniformsNeedUpdate===!0&&(vc.upload(k,wl(tt),Nn,ct),te.uniformsNeedUpdate=!1),te.isSpriteMaterial&&Gt.setValue(k,"center",W.center),Gt.setValue(k,"modelViewMatrix",W.modelViewMatrix),Gt.setValue(k,"normalMatrix",W.normalMatrix),Gt.setValue(k,"modelMatrix",W.matrixWorld),te.isShaderMaterial||te.isRawShaderMaterial){const nn=te.uniformsGroups;for(let wn=0,hs=nn.length;wn<hs;wn++){const Tt=nn[wn];pt.update(Tt,ln),pt.bind(Tt,ln)}}return ln}function Al(A,Y){A.ambientLightColor.needsUpdate=Y,A.lightProbe.needsUpdate=Y,A.directionalLights.needsUpdate=Y,A.directionalLightShadows.needsUpdate=Y,A.pointLights.needsUpdate=Y,A.pointLightShadows.needsUpdate=Y,A.spotLights.needsUpdate=Y,A.spotLightShadows.needsUpdate=Y,A.rectAreaLights.needsUpdate=Y,A.hemisphereLights.needsUpdate=Y}function Rl(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return X},this.setRenderTargetTextures=function(A,Y,ee){const te=je.get(A);te.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,te.__autoAllocateDepthBuffer===!1&&(te.__useRenderToTexture=!1),je.get(A.texture).__webglTexture=Y,je.get(A.depthTexture).__webglTexture=te.__autoAllocateDepthBuffer?void 0:ee,te.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,Y){const ee=je.get(A);ee.__webglFramebuffer=Y,ee.__useDefaultFramebuffer=Y===void 0};const Vc=k.createFramebuffer();this.setRenderTarget=function(A,Y=0,ee=0){X=A,U=Y,F=ee;let te=!0,W=null,Se=!1,Pe=!1;if(A){const Ue=je.get(A);if(Ue.__useDefaultFramebuffer!==void 0)We.bindFramebuffer(k.FRAMEBUFFER,null),te=!1;else if(Ue.__webglFramebuffer===void 0)ct.setupRenderTarget(A);else if(Ue.__hasExternalTextures)ct.rebindTextures(A,je.get(A.texture).__webglTexture,je.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Qe=A.depthTexture;if(Ue.__boundDepthTexture!==Qe){if(Qe!==null&&je.has(Qe)&&(A.width!==Qe.image.width||A.height!==Qe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ct.setupDepthRenderbuffer(A)}}const rt=A.texture;(rt.isData3DTexture||rt.isDataArrayTexture||rt.isCompressedArrayTexture)&&(Pe=!0);const ot=je.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(ot[Y])?W=ot[Y][ee]:W=ot[Y],Se=!0):A.samples>0&&ct.useMultisampledRTT(A)===!1?W=je.get(A).__webglMultisampledFramebuffer:Array.isArray(ot)?W=ot[ee]:W=ot,H.copy(A.viewport),J.copy(A.scissor),ie=A.scissorTest}else H.copy(O).multiplyScalar(z).floor(),J.copy(ne).multiplyScalar(z).floor(),ie=ke;if(ee!==0&&(W=Vc),We.bindFramebuffer(k.FRAMEBUFFER,W)&&te&&We.drawBuffers(A,W),We.viewport(H),We.scissor(J),We.setScissorTest(ie),Se){const Ue=je.get(A.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Ue.__webglTexture,ee)}else if(Pe){const Ue=Y;for(let rt=0;rt<A.textures.length;rt++){const ot=je.get(A.textures[rt]);k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0+rt,ot.__webglTexture,ee,Ue)}}else if(A!==null&&ee!==0){const Ue=je.get(A.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Ue.__webglTexture,ee)}P=-1},this.readRenderTargetPixels=function(A,Y,ee,te,W,Se,Pe,He=0){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ue=je.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Pe!==void 0&&(Ue=Ue[Pe]),Ue){We.bindFramebuffer(k.FRAMEBUFFER,Ue);try{const rt=A.textures[He],ot=rt.format,Qe=rt.type;if(!st.textureFormatReadable(ot)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!st.textureTypeReadable(Qe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=A.width-te&&ee>=0&&ee<=A.height-W&&(A.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+He),k.readPixels(Y,ee,te,W,Ke.convert(ot),Ke.convert(Qe),Se))}finally{const rt=X!==null?je.get(X).__webglFramebuffer:null;We.bindFramebuffer(k.FRAMEBUFFER,rt)}}},this.readRenderTargetPixelsAsync=async function(A,Y,ee,te,W,Se,Pe,He=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ue=je.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Pe!==void 0&&(Ue=Ue[Pe]),Ue)if(Y>=0&&Y<=A.width-te&&ee>=0&&ee<=A.height-W){We.bindFramebuffer(k.FRAMEBUFFER,Ue);const rt=A.textures[He],ot=rt.format,Qe=rt.type;if(!st.textureFormatReadable(ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!st.textureTypeReadable(Qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const lt=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,lt),k.bufferData(k.PIXEL_PACK_BUFFER,Se.byteLength,k.STREAM_READ),A.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+He),k.readPixels(Y,ee,te,W,Ke.convert(ot),Ke.convert(Qe),0);const It=X!==null?je.get(X).__webglFramebuffer:null;We.bindFramebuffer(k.FRAMEBUFFER,It);const At=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await YT(k,At,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,lt),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,Se),k.deleteBuffer(lt),k.deleteSync(At),Se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,Y=null,ee=0){const te=Math.pow(2,-ee),W=Math.floor(A.image.width*te),Se=Math.floor(A.image.height*te),Pe=Y!==null?Y.x:0,He=Y!==null?Y.y:0;ct.setTexture2D(A,0),k.copyTexSubImage2D(k.TEXTURE_2D,ee,0,0,Pe,He,W,Se),We.unbindTexture()};const Cl=k.createFramebuffer(),Pl=k.createFramebuffer();this.copyTextureToTexture=function(A,Y,ee=null,te=null,W=0,Se=null){Se===null&&(W!==0?(dl("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Se=W,W=0):Se=0);let Pe,He,Ue,rt,ot,Qe,lt,It,At;const Vt=A.isCompressedTexture?A.mipmaps[Se]:A.image;if(ee!==null)Pe=ee.max.x-ee.min.x,He=ee.max.y-ee.min.y,Ue=ee.isBox3?ee.max.z-ee.min.z:1,rt=ee.min.x,ot=ee.min.y,Qe=ee.isBox3?ee.min.z:0;else{const Tn=Math.pow(2,-W);Pe=Math.floor(Vt.width*Tn),He=Math.floor(Vt.height*Tn),A.isDataArrayTexture?Ue=Vt.depth:A.isData3DTexture?Ue=Math.floor(Vt.depth*Tn):Ue=1,rt=0,ot=0,Qe=0}te!==null?(lt=te.x,It=te.y,At=te.z):(lt=0,It=0,At=0);const Nt=Ke.convert(Y.format),tt=Ke.convert(Y.type);let kt;Y.isData3DTexture?(ct.setTexture3D(Y,0),kt=k.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(ct.setTexture2DArray(Y,0),kt=k.TEXTURE_2D_ARRAY):(ct.setTexture2D(Y,0),kt=k.TEXTURE_2D),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,Y.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,Y.unpackAlignment);const Mt=k.getParameter(k.UNPACK_ROW_LENGTH),ln=k.getParameter(k.UNPACK_IMAGE_HEIGHT),yi=k.getParameter(k.UNPACK_SKIP_PIXELS),Dn=k.getParameter(k.UNPACK_SKIP_ROWS),ds=k.getParameter(k.UNPACK_SKIP_IMAGES);k.pixelStorei(k.UNPACK_ROW_LENGTH,Vt.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Vt.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,rt),k.pixelStorei(k.UNPACK_SKIP_ROWS,ot),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Qe);const Gt=A.isDataArrayTexture||A.isData3DTexture,Nn=Y.isDataArrayTexture||Y.isData3DTexture;if(A.isDepthTexture){const Tn=je.get(A),nn=je.get(Y),wn=je.get(Tn.__renderTarget),hs=je.get(nn.__renderTarget);We.bindFramebuffer(k.READ_FRAMEBUFFER,wn.__webglFramebuffer),We.bindFramebuffer(k.DRAW_FRAMEBUFFER,hs.__webglFramebuffer);for(let Tt=0;Tt<Ue;Tt++)Gt&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,je.get(A).__webglTexture,W,Qe+Tt),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,je.get(Y).__webglTexture,Se,At+Tt)),k.blitFramebuffer(rt,ot,Pe,He,lt,It,Pe,He,k.DEPTH_BUFFER_BIT,k.NEAREST);We.bindFramebuffer(k.READ_FRAMEBUFFER,null),We.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(W!==0||A.isRenderTargetTexture||je.has(A)){const Tn=je.get(A),nn=je.get(Y);We.bindFramebuffer(k.READ_FRAMEBUFFER,Cl),We.bindFramebuffer(k.DRAW_FRAMEBUFFER,Pl);for(let wn=0;wn<Ue;wn++)Gt?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Tn.__webglTexture,W,Qe+wn):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Tn.__webglTexture,W),Nn?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,nn.__webglTexture,Se,At+wn):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,nn.__webglTexture,Se),W!==0?k.blitFramebuffer(rt,ot,Pe,He,lt,It,Pe,He,k.COLOR_BUFFER_BIT,k.NEAREST):Nn?k.copyTexSubImage3D(kt,Se,lt,It,At+wn,rt,ot,Pe,He):k.copyTexSubImage2D(kt,Se,lt,It,rt,ot,Pe,He);We.bindFramebuffer(k.READ_FRAMEBUFFER,null),We.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else Nn?A.isDataTexture||A.isData3DTexture?k.texSubImage3D(kt,Se,lt,It,At,Pe,He,Ue,Nt,tt,Vt.data):Y.isCompressedArrayTexture?k.compressedTexSubImage3D(kt,Se,lt,It,At,Pe,He,Ue,Nt,Vt.data):k.texSubImage3D(kt,Se,lt,It,At,Pe,He,Ue,Nt,tt,Vt):A.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,Se,lt,It,Pe,He,Nt,tt,Vt.data):A.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,Se,lt,It,Vt.width,Vt.height,Nt,Vt.data):k.texSubImage2D(k.TEXTURE_2D,Se,lt,It,Pe,He,Nt,tt,Vt);k.pixelStorei(k.UNPACK_ROW_LENGTH,Mt),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,ln),k.pixelStorei(k.UNPACK_SKIP_PIXELS,yi),k.pixelStorei(k.UNPACK_SKIP_ROWS,Dn),k.pixelStorei(k.UNPACK_SKIP_IMAGES,ds),Se===0&&Y.generateMipmaps&&k.generateMipmap(kt),We.unbindTexture()},this.initRenderTarget=function(A){je.get(A).__webglFramebuffer===void 0&&ct.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?ct.setTextureCube(A,0):A.isData3DTexture?ct.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?ct.setTexture2DArray(A,0):ct.setTexture2D(A,0),We.unbindTexture()},this.resetState=function(){U=0,F=0,X=null,We.reset(),Ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Wi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Rt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Rt._getUnpackColorSpace()}}const X2=()=>{const r=xy();return Re.jsxs("div",{className:"flex flex-col items-center justify-c h-screen bg-pink-200",children:[Re.jsxs("div",{className:"relative h-52 w-52 my-12 z-0",children:[Re.jsx("img",{className:"h-52 w-52 relative z-0 rounded-full border border-black p-1",src:"https://lh3.googleusercontent.com/aida-public/AB6AXuDFC3uIys7XJNUauBEKMySIQemNaLf0A1IHfV_ByPBSUtuZT9hIMvbS2pc6MasYAIWtOit48kdJW2kqxtMRVTGe4WbfgGqkWozE5egRzlL0PFBCUAHEiTLCuCsBHKMxExTWKRYGNNFI-GFVGAo8lMHkKylkolpE8bcAcH08H6gsUDHLFivvC2MCiM_p0EQAo1WJ11gnYCUcTI-9F_ISW0X2zSJM-AnulvYQ7Je0ZEMbnp1m0laTnsrax50gWyJOQ_nC9pnTdfmNmBPv",alt:""}),Re.jsx("div",{className:"absolute -bottom-2 right-4 -rotate-6 z-10 bg-white rounded-full shadow p-2 text-pink-600",children:"🎂 make a wish"})]}),Re.jsxs("div",{className:"flex justify-center items-center flex-col p-2",children:[Re.jsx("h1",{className:"text-yellow-600 text-5xl font-serif",children:"Happy"}),Re.jsx("h1",{className:"text-yellow-600 text-5xl font-serif",children:"Birthday"}),Re.jsx("h1",{className:"text-red-500 text-5xl font-serif",children:"Suganthi"}),Re.jsx("p",{className:"text-center w-[60%] pt-3",children:"Here a little something to make your  day extra special."}),Re.jsx("div",{className:"py-2 text-blue-600",children:"from me😉"}),Re.jsx("button",{className:"w-44 h-10 rounded-full text-white border border-[var(--color-border)] bg-pink-600 m-1",onClick:()=>r("/wish"),children:"Unwrap"}),Re.jsx("div",{className:"text-center",children:"tap to open"})]})]})},px=ae.createContext(),Y2=({children:r})=>{const[e,t]=ae.useState(()=>localStorage.getItem("theme")||"dark");return ae.useEffect(()=>{document.documentElement.setAttribute("data-theme",e),localStorage.setItem("theme",e)},[e]),Re.jsx(px.Provider,{value:{theme:e,setTheme:t},children:r})};function dp(r,e){(e==null||e>r.length)&&(e=r.length);for(var t=0,n=Array(e);t<e;t++)n[t]=r[t];return n}function $2(r){if(Array.isArray(r))return r}function K2(r){if(Array.isArray(r))return dp(r)}function q2(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}function Z2(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,mx(n.key),n)}}function J2(r,e,t){return e&&Z2(r.prototype,e),Object.defineProperty(r,"prototype",{writable:!1}),r}function _c(r,e){var t=typeof Symbol<"u"&&r[Symbol.iterator]||r["@@iterator"];if(!t){if(Array.isArray(r)||(t=sm(r))||e){t&&(r=t);var n=0,s=function(){};return{s,n:function(){return n>=r.length?{done:!0}:{done:!1,value:r[n++]}},e:function(f){throw f},f:s}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var o,l=!0,c=!1;return{s:function(){t=t.call(r)},n:function(){var f=t.next();return l=f.done,f},e:function(f){c=!0,o=f},f:function(){try{l||t.return==null||t.return()}finally{if(c)throw o}}}}function gt(r,e,t){return(e=mx(e))in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}function Q2(r){if(typeof Symbol<"u"&&r[Symbol.iterator]!=null||r["@@iterator"]!=null)return Array.from(r)}function eP(r,e){var t=r==null?null:typeof Symbol<"u"&&r[Symbol.iterator]||r["@@iterator"];if(t!=null){var n,s,o,l,c=[],f=!0,d=!1;try{if(o=(t=t.call(r)).next,e===0){if(Object(t)!==t)return;f=!1}else for(;!(f=(n=o.call(t)).done)&&(c.push(n.value),c.length!==e);f=!0);}catch(p){d=!0,s=p}finally{try{if(!f&&t.return!=null&&(l=t.return(),Object(l)!==l))return}finally{if(d)throw s}}return c}}function tP(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function nP(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function y_(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);e&&(n=n.filter(function(s){return Object.getOwnPropertyDescriptor(r,s).enumerable})),t.push.apply(t,n)}return t}function Te(r){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?y_(Object(t),!0).forEach(function(n){gt(r,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):y_(Object(t)).forEach(function(n){Object.defineProperty(r,n,Object.getOwnPropertyDescriptor(t,n))})}return r}function Oc(r,e){return $2(r)||eP(r,e)||sm(r,e)||tP()}function Ui(r){return K2(r)||Q2(r)||sm(r)||nP()}function iP(r,e){if(typeof r!="object"||!r)return r;var t=r[Symbol.toPrimitive];if(t!==void 0){var n=t.call(r,e);if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(r)}function mx(r){var e=iP(r,"string");return typeof e=="symbol"?e:e+""}function Ac(r){"@babel/helpers - typeof";return Ac=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ac(r)}function sm(r,e){if(r){if(typeof r=="string")return dp(r,e);var t={}.toString.call(r).slice(8,-1);return t==="Object"&&r.constructor&&(t=r.constructor.name),t==="Map"||t==="Set"?Array.from(r):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?dp(r,e):void 0}}var x_=function(){},am={},gx={},vx=null,_x={mark:x_,measure:x_};try{typeof window<"u"&&(am=window),typeof document<"u"&&(gx=document),typeof MutationObserver<"u"&&(vx=MutationObserver),typeof performance<"u"&&(_x=performance)}catch{}var rP=am.navigator||{},S_=rP.userAgent,E_=S_===void 0?"":S_,os=am,Kt=gx,M_=vx,ac=_x;os.document;var Rr=!!Kt.documentElement&&!!Kt.head&&typeof Kt.addEventListener=="function"&&typeof Kt.createElement=="function",yx=~E_.indexOf("MSIE")||~E_.indexOf("Trident/"),uh,sP=/fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,aP=/Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Whiteboard)?.*/i,xx={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"},slab:{"fa-regular":"regular",faslr:"regular"},"slab-press":{"fa-regular":"regular",faslpr:"regular"},thumbprint:{"fa-light":"light",fatl:"light"},whiteboard:{"fa-semibold":"semibold",fawsb:"semibold"},notdog:{"fa-solid":"solid",fans:"solid"},"notdog-duo":{"fa-solid":"solid",fands:"solid"},etch:{"fa-solid":"solid",faes:"solid"},jelly:{"fa-regular":"regular",fajr:"regular"},"jelly-fill":{"fa-regular":"regular",fajfr:"regular"},"jelly-duo":{"fa-regular":"regular",fajdr:"regular"},chisel:{"fa-regular":"regular",facr:"regular"},utility:{"fa-semibold":"semibold",fausb:"semibold"},"utility-duo":{"fa-semibold":"semibold",faudsb:"semibold"},"utility-fill":{"fa-semibold":"semibold",faufsb:"semibold"}},oP={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},Sx=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-utility","fa-utility-duo","fa-utility-fill"],En="classic",El="duotone",Ex="sharp",Mx="sharp-duotone",Tx="chisel",wx="etch",bx="jelly",Ax="jelly-duo",Rx="jelly-fill",Cx="notdog",Px="notdog-duo",Lx="slab",Ix="slab-press",Dx="thumbprint",Nx="utility",Ux="utility-duo",Fx="utility-fill",Ox="whiteboard",lP="Classic",uP="Duotone",cP="Sharp",fP="Sharp Duotone",dP="Chisel",hP="Etch",pP="Jelly",mP="Jelly Duo",gP="Jelly Fill",vP="Notdog",_P="Notdog Duo",yP="Slab",xP="Slab Press",SP="Thumbprint",EP="Utility",MP="Utility Duo",TP="Utility Fill",wP="Whiteboard",kx=[En,El,Ex,Mx,Tx,wx,bx,Ax,Rx,Cx,Px,Lx,Ix,Dx,Nx,Ux,Fx,Ox];uh={},gt(gt(gt(gt(gt(gt(gt(gt(gt(gt(uh,En,lP),El,uP),Ex,cP),Mx,fP),Tx,dP),wx,hP),bx,pP),Ax,mP),Rx,gP),Cx,vP),gt(gt(gt(gt(gt(gt(gt(gt(uh,Px,_P),Lx,yP),Ix,xP),Dx,SP),Nx,EP),Ux,MP),Fx,TP),Ox,wP);var bP={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"},slab:{400:"faslr"},"slab-press":{400:"faslpr"},whiteboard:{600:"fawsb"},thumbprint:{300:"fatl"},notdog:{900:"fans"},"notdog-duo":{900:"fands"},etch:{900:"faes"},chisel:{400:"facr"},jelly:{400:"fajr"},"jelly-fill":{400:"fajfr"},"jelly-duo":{400:"fajdr"},utility:{600:"fausb"},"utility-duo":{600:"faudsb"},"utility-fill":{600:"faufsb"}},AP={"Font Awesome 7 Free":{900:"fas",400:"far"},"Font Awesome 7 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 7 Brands":{400:"fab",normal:"fab"},"Font Awesome 7 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 7 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 7 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"},"Font Awesome 7 Jelly":{400:"fajr",normal:"fajr"},"Font Awesome 7 Jelly Fill":{400:"fajfr",normal:"fajfr"},"Font Awesome 7 Jelly Duo":{400:"fajdr",normal:"fajdr"},"Font Awesome 7 Slab":{400:"faslr",normal:"faslr"},"Font Awesome 7 Slab Press":{400:"faslpr",normal:"faslpr"},"Font Awesome 7 Thumbprint":{300:"fatl",normal:"fatl"},"Font Awesome 7 Notdog":{900:"fans",normal:"fans"},"Font Awesome 7 Notdog Duo":{900:"fands",normal:"fands"},"Font Awesome 7 Etch":{900:"faes",normal:"faes"},"Font Awesome 7 Chisel":{400:"facr",normal:"facr"},"Font Awesome 7 Whiteboard":{600:"fawsb",normal:"fawsb"},"Font Awesome 7 Utility":{600:"fausb",normal:"fausb"},"Font Awesome 7 Utility Duo":{600:"faudsb",normal:"faudsb"},"Font Awesome 7 Utility Fill":{600:"faufsb",normal:"faufsb"}},RP=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["chisel",{defaultShortPrefixId:"facr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["etch",{defaultShortPrefixId:"faes",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["jelly",{defaultShortPrefixId:"fajr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-duo",{defaultShortPrefixId:"fajdr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-fill",{defaultShortPrefixId:"fajfr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["notdog",{defaultShortPrefixId:"fans",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["notdog-duo",{defaultShortPrefixId:"fands",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["slab",{defaultShortPrefixId:"faslr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-press",{defaultShortPrefixId:"faslpr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["thumbprint",{defaultShortPrefixId:"fatl",defaultStyleId:"light",styleIds:["light"],futureStyleIds:[],defaultFontWeight:300}],["utility",{defaultShortPrefixId:"fausb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-duo",{defaultShortPrefixId:"faudsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-fill",{defaultShortPrefixId:"faufsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["whiteboard",{defaultShortPrefixId:"fawsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}]]),CP={chisel:{regular:"facr"},classic:{brands:"fab",light:"fal",regular:"far",solid:"fas",thin:"fat"},duotone:{light:"fadl",regular:"fadr",solid:"fad",thin:"fadt"},etch:{solid:"faes"},jelly:{regular:"fajr"},"jelly-duo":{regular:"fajdr"},"jelly-fill":{regular:"fajfr"},notdog:{solid:"fans"},"notdog-duo":{solid:"fands"},sharp:{light:"fasl",regular:"fasr",solid:"fass",thin:"fast"},"sharp-duotone":{light:"fasdl",regular:"fasdr",solid:"fasds",thin:"fasdt"},slab:{regular:"faslr"},"slab-press":{regular:"faslpr"},thumbprint:{light:"fatl"},utility:{semibold:"fausb"},"utility-duo":{semibold:"faudsb"},"utility-fill":{semibold:"faufsb"},whiteboard:{semibold:"fawsb"}},Bx=["fak","fa-kit","fakd","fa-kit-duotone"],T_={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},PP=["kit"],LP="kit",IP="kit-duotone",DP="Kit",NP="Kit Duotone";gt(gt({},LP,DP),IP,NP);var UP={kit:{"fa-kit":"fak"}},FP={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},OP={kit:{fak:"fa-kit"}},w_={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},ch,oc={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},kP=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-utility","fa-utility-duo","fa-utility-fill"],BP="classic",zP="duotone",HP="sharp",VP="sharp-duotone",GP="chisel",WP="etch",jP="jelly",XP="jelly-duo",YP="jelly-fill",$P="notdog",KP="notdog-duo",qP="slab",ZP="slab-press",JP="thumbprint",QP="utility",eL="utility-duo",tL="utility-fill",nL="whiteboard",iL="Classic",rL="Duotone",sL="Sharp",aL="Sharp Duotone",oL="Chisel",lL="Etch",uL="Jelly",cL="Jelly Duo",fL="Jelly Fill",dL="Notdog",hL="Notdog Duo",pL="Slab",mL="Slab Press",gL="Thumbprint",vL="Utility",_L="Utility Duo",yL="Utility Fill",xL="Whiteboard";ch={},gt(gt(gt(gt(gt(gt(gt(gt(gt(gt(ch,BP,iL),zP,rL),HP,sL),VP,aL),GP,oL),WP,lL),jP,uL),XP,cL),YP,fL),$P,dL),gt(gt(gt(gt(gt(gt(gt(gt(ch,KP,hL),qP,pL),ZP,mL),JP,gL),QP,vL),eL,_L),tL,yL),nL,xL);var SL="kit",EL="kit-duotone",ML="Kit",TL="Kit Duotone";gt(gt({},SL,ML),EL,TL);var wL={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"},slab:{"fa-regular":"faslr"},"slab-press":{"fa-regular":"faslpr"},whiteboard:{"fa-semibold":"fawsb"},thumbprint:{"fa-light":"fatl"},notdog:{"fa-solid":"fans"},"notdog-duo":{"fa-solid":"fands"},etch:{"fa-solid":"faes"},jelly:{"fa-regular":"fajr"},"jelly-fill":{"fa-regular":"fajfr"},"jelly-duo":{"fa-regular":"fajdr"},chisel:{"fa-regular":"facr"},utility:{"fa-semibold":"fausb"},"utility-duo":{"fa-semibold":"faudsb"},"utility-fill":{"fa-semibold":"faufsb"}},bL={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"],slab:["faslr"],"slab-press":["faslpr"],whiteboard:["fawsb"],thumbprint:["fatl"],notdog:["fans"],"notdog-duo":["fands"],etch:["faes"],jelly:["fajr"],"jelly-fill":["fajfr"],"jelly-duo":["fajdr"],chisel:["facr"],utility:["fausb"],"utility-duo":["faudsb"],"utility-fill":["faufsb"]},hp={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"},slab:{faslr:"fa-regular"},"slab-press":{faslpr:"fa-regular"},whiteboard:{fawsb:"fa-semibold"},thumbprint:{fatl:"fa-light"},notdog:{fans:"fa-solid"},"notdog-duo":{fands:"fa-solid"},etch:{faes:"fa-solid"},jelly:{fajr:"fa-regular"},"jelly-fill":{fajfr:"fa-regular"},"jelly-duo":{fajdr:"fa-regular"},chisel:{facr:"fa-regular"},utility:{fausb:"fa-semibold"},"utility-duo":{faudsb:"fa-semibold"},"utility-fill":{faufsb:"fa-semibold"}},AL=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands","fa-semibold"],zx=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt","faslr","faslpr","fawsb","fatl","fans","fands","faes","fajr","fajfr","fajdr","facr","fausb","faudsb","faufsb"].concat(kP,AL),RL=["solid","regular","light","thin","duotone","brands","semibold"],Hx=[1,2,3,4,5,6,7,8,9,10],CL=Hx.concat([11,12,13,14,15,16,17,18,19,20]),PL=["aw","fw","pull-left","pull-right"],LL=[].concat(Ui(Object.keys(bL)),RL,PL,["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","inverse","layers","layers-bottom-left","layers-bottom-right","layers-counter","layers-text","layers-top-left","layers-top-right","li","pull-end","pull-start","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul","width-auto","width-fixed",oc.GROUP,oc.SWAP_OPACITY,oc.PRIMARY,oc.SECONDARY]).concat(Hx.map(function(r){return"".concat(r,"x")})).concat(CL.map(function(r){return"w-".concat(r)})),IL={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},wr="___FONT_AWESOME___",pp=16,Vx="fa",Gx="svg-inline--fa",Hs="data-fa-i2svg",mp="data-fa-pseudo-element",DL="data-fa-pseudo-element-pending",om="data-prefix",lm="data-icon",b_="fontawesome-i2svg",NL="async",UL=["HTML","HEAD","STYLE","SCRIPT"],Wx=["::before","::after",":before",":after"],jx=(function(){try{return!0}catch{return!1}})();function Ml(r){return new Proxy(r,{get:function(t,n){return n in t?t[n]:t[En]}})}var Xx=Te({},xx);Xx[En]=Te(Te(Te(Te({},{"fa-duotone":"duotone"}),xx[En]),T_.kit),T_["kit-duotone"]);var FL=Ml(Xx),gp=Te({},CP);gp[En]=Te(Te(Te(Te({},{duotone:"fad"}),gp[En]),w_.kit),w_["kit-duotone"]);var A_=Ml(gp),vp=Te({},hp);vp[En]=Te(Te({},vp[En]),OP.kit);var um=Ml(vp),_p=Te({},wL);_p[En]=Te(Te({},_p[En]),UP.kit);Ml(_p);var OL=sP,Yx="fa-layers-text",kL=aP,BL=Te({},bP);Ml(BL);var zL=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],fh=oP,HL=[].concat(Ui(PP),Ui(LL)),tl=os.FontAwesomeConfig||{};function VL(r){var e=Kt.querySelector("script["+r+"]");if(e)return e.getAttribute(r)}function GL(r){return r===""?!0:r==="false"?!1:r==="true"?!0:r}if(Kt&&typeof Kt.querySelector=="function"){var WL=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-search-pseudo-elements","searchPseudoElements"],["data-search-pseudo-elements-warnings","searchPseudoElementsWarnings"],["data-search-pseudo-elements-full-scan","searchPseudoElementsFullScan"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];WL.forEach(function(r){var e=Oc(r,2),t=e[0],n=e[1],s=GL(VL(t));s!=null&&(tl[n]=s)})}var $x={styleDefault:"solid",familyDefault:En,cssPrefix:Vx,replacementClass:Gx,autoReplaceSvg:!0,autoAddCss:!0,searchPseudoElements:!1,searchPseudoElementsWarnings:!0,searchPseudoElementsFullScan:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};tl.familyPrefix&&(tl.cssPrefix=tl.familyPrefix);var Za=Te(Te({},$x),tl);Za.autoReplaceSvg||(Za.observeMutations=!1);var et={};Object.keys($x).forEach(function(r){Object.defineProperty(et,r,{enumerable:!0,set:function(t){Za[r]=t,nl.forEach(function(n){return n(et)})},get:function(){return Za[r]}})});Object.defineProperty(et,"familyPrefix",{enumerable:!0,set:function(e){Za.cssPrefix=e,nl.forEach(function(t){return t(et)})},get:function(){return Za.cssPrefix}});os.FontAwesomeConfig=et;var nl=[];function jL(r){return nl.push(r),function(){nl.splice(nl.indexOf(r),1)}}var La=pp,ji={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function XL(r){if(!(!r||!Rr)){var e=Kt.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=r;for(var t=Kt.head.childNodes,n=null,s=t.length-1;s>-1;s--){var o=t[s],l=(o.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(l)>-1&&(n=o)}return Kt.head.insertBefore(e,n),r}}var YL="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function R_(){for(var r=12,e="";r-- >0;)e+=YL[Math.random()*62|0];return e}function ro(r){for(var e=[],t=(r||[]).length>>>0;t--;)e[t]=r[t];return e}function cm(r){return r.classList?ro(r.classList):(r.getAttribute("class")||"").split(" ").filter(function(e){return e})}function Kx(r){return"".concat(r).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function $L(r){return Object.keys(r||{}).reduce(function(e,t){return e+"".concat(t,'="').concat(Kx(r[t]),'" ')},"").trim()}function kc(r){return Object.keys(r||{}).reduce(function(e,t){return e+"".concat(t,": ").concat(r[t].trim(),";")},"")}function fm(r){return r.size!==ji.size||r.x!==ji.x||r.y!==ji.y||r.rotate!==ji.rotate||r.flipX||r.flipY}function KL(r){var e=r.transform,t=r.containerWidth,n=r.iconWidth,s={transform:"translate(".concat(t/2," 256)")},o="translate(".concat(e.x*32,", ").concat(e.y*32,") "),l="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),c="rotate(".concat(e.rotate," 0 0)"),f={transform:"".concat(o," ").concat(l," ").concat(c)},d={transform:"translate(".concat(n/2*-1," -256)")};return{outer:s,inner:f,path:d}}function qL(r){var e=r.transform,t=r.width,n=t===void 0?pp:t,s=r.height,o=s===void 0?pp:s,l="";return yx?l+="translate(".concat(e.x/La-n/2,"em, ").concat(e.y/La-o/2,"em) "):l+="translate(calc(-50% + ".concat(e.x/La,"em), calc(-50% + ").concat(e.y/La,"em)) "),l+="scale(".concat(e.size/La*(e.flipX?-1:1),", ").concat(e.size/La*(e.flipY?-1:1),") "),l+="rotate(".concat(e.rotate,"deg) "),l}var ZL=`:root, :host {
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
  --fa-font-utility-semibold: normal 600 1em/1 "Font Awesome 7 Utility";
  --fa-font-utility-duo-semibold: normal 600 1em/1 "Font Awesome 7 Utility Duo";
  --fa-font-utility-fill-semibold: normal 600 1em/1 "Font Awesome 7 Utility Fill";
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
}`;function qx(){var r=Vx,e=Gx,t=et.cssPrefix,n=et.replacementClass,s=ZL;if(t!==r||n!==e){var o=new RegExp("\\.".concat(r,"\\-"),"g"),l=new RegExp("\\--".concat(r,"\\-"),"g"),c=new RegExp("\\.".concat(e),"g");s=s.replace(o,".".concat(t,"-")).replace(l,"--".concat(t,"-")).replace(c,".".concat(n))}return s}var C_=!1;function dh(){et.autoAddCss&&!C_&&(XL(qx()),C_=!0)}var JL={mixout:function(){return{dom:{css:qx,insertCss:dh}}},hooks:function(){return{beforeDOMElementCreation:function(){dh()},beforeI2svg:function(){dh()}}}},br=os||{};br[wr]||(br[wr]={});br[wr].styles||(br[wr].styles={});br[wr].hooks||(br[wr].hooks={});br[wr].shims||(br[wr].shims=[]);var Ii=br[wr],Zx=[],Jx=function(){Kt.removeEventListener("DOMContentLoaded",Jx),Rc=1,Zx.map(function(e){return e()})},Rc=!1;Rr&&(Rc=(Kt.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Kt.readyState),Rc||Kt.addEventListener("DOMContentLoaded",Jx));function QL(r){Rr&&(Rc?setTimeout(r,0):Zx.push(r))}function Tl(r){var e=r.tag,t=r.attributes,n=t===void 0?{}:t,s=r.children,o=s===void 0?[]:s;return typeof r=="string"?Kx(r):"<".concat(e," ").concat($L(n),">").concat(o.map(Tl).join(""),"</").concat(e,">")}function P_(r,e,t){if(r&&r[e]&&r[e][t])return{prefix:e,iconName:t,icon:r[e][t]}}var hh=function(e,t,n,s){var o=Object.keys(e),l=o.length,c=t,f,d,p;for(n===void 0?(f=1,p=e[o[0]]):(f=0,p=n);f<l;f++)d=o[f],p=c(p,e[d],d,e);return p};function Qx(r){return Ui(r).length!==1?null:r.codePointAt(0).toString(16)}function L_(r){return Object.keys(r).reduce(function(e,t){var n=r[t],s=!!n.icon;return s?e[n.iconName]=n.icon:e[t]=n,e},{})}function yp(r,e){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},n=t.skipHooks,s=n===void 0?!1:n,o=L_(e);typeof Ii.hooks.addPack=="function"&&!s?Ii.hooks.addPack(r,L_(e)):Ii.styles[r]=Te(Te({},Ii.styles[r]||{}),o),r==="fas"&&yp("fa",e)}var hl=Ii.styles,eI=Ii.shims,eS=Object.keys(um),tI=eS.reduce(function(r,e){return r[e]=Object.keys(um[e]),r},{}),dm=null,tS={},nS={},iS={},rS={},sS={};function nI(r){return~HL.indexOf(r)}function iI(r,e){var t=e.split("-"),n=t[0],s=t.slice(1).join("-");return n===r&&s!==""&&!nI(s)?s:null}var aS=function(){var e=function(o){return hh(hl,function(l,c,f){return l[f]=hh(c,o,{}),l},{})};tS=e(function(s,o,l){if(o[3]&&(s[o[3]]=l),o[2]){var c=o[2].filter(function(f){return typeof f=="number"});c.forEach(function(f){s[f.toString(16)]=l})}return s}),nS=e(function(s,o,l){if(s[l]=l,o[2]){var c=o[2].filter(function(f){return typeof f=="string"});c.forEach(function(f){s[f]=l})}return s}),sS=e(function(s,o,l){var c=o[2];return s[l]=l,c.forEach(function(f){s[f]=l}),s});var t="far"in hl||et.autoFetchSvg,n=hh(eI,function(s,o){var l=o[0],c=o[1],f=o[2];return c==="far"&&!t&&(c="fas"),typeof l=="string"&&(s.names[l]={prefix:c,iconName:f}),typeof l=="number"&&(s.unicodes[l.toString(16)]={prefix:c,iconName:f}),s},{names:{},unicodes:{}});iS=n.names,rS=n.unicodes,dm=Bc(et.styleDefault,{family:et.familyDefault})};jL(function(r){dm=Bc(r.styleDefault,{family:et.familyDefault})});aS();function hm(r,e){return(tS[r]||{})[e]}function rI(r,e){return(nS[r]||{})[e]}function ks(r,e){return(sS[r]||{})[e]}function oS(r){return iS[r]||{prefix:null,iconName:null}}function sI(r){var e=rS[r],t=hm("fas",r);return e||(t?{prefix:"fas",iconName:t}:null)||{prefix:null,iconName:null}}function ls(){return dm}var lS=function(){return{prefix:null,iconName:null,rest:[]}};function aI(r){var e=En,t=eS.reduce(function(n,s){return n[s]="".concat(et.cssPrefix,"-").concat(s),n},{});return kx.forEach(function(n){(r.includes(t[n])||r.some(function(s){return tI[n].includes(s)}))&&(e=n)}),e}function Bc(r){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=e.family,n=t===void 0?En:t,s=FL[n][r];if(n===El&&!r)return"fad";var o=A_[n][r]||A_[n][s],l=r in Ii.styles?r:null,c=o||l||null;return c}function oI(r){var e=[],t=null;return r.forEach(function(n){var s=iI(et.cssPrefix,n);s?t=s:n&&e.push(n)}),{iconName:t,rest:e}}function I_(r){return r.sort().filter(function(e,t,n){return n.indexOf(e)===t})}var D_=zx.concat(Bx);function zc(r){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=e.skipLookups,n=t===void 0?!1:t,s=null,o=I_(r.filter(function(y){return D_.includes(y)})),l=I_(r.filter(function(y){return!D_.includes(y)})),c=o.filter(function(y){return s=y,!Sx.includes(y)}),f=Oc(c,1),d=f[0],p=d===void 0?null:d,m=aI(o),v=Te(Te({},oI(l)),{},{prefix:Bc(p,{family:m})});return Te(Te(Te({},v),fI({values:r,family:m,styles:hl,config:et,canonical:v,givenPrefix:s})),lI(n,s,v))}function lI(r,e,t){var n=t.prefix,s=t.iconName;if(r||!n||!s)return{prefix:n,iconName:s};var o=e==="fa"?oS(s):{},l=ks(n,s);return s=o.iconName||l||s,n=o.prefix||n,n==="far"&&!hl.far&&hl.fas&&!et.autoFetchSvg&&(n="fas"),{prefix:n,iconName:s}}var uI=kx.filter(function(r){return r!==En||r!==El}),cI=Object.keys(hp).filter(function(r){return r!==En}).map(function(r){return Object.keys(hp[r])}).flat();function fI(r){var e=r.values,t=r.family,n=r.canonical,s=r.givenPrefix,o=s===void 0?"":s,l=r.styles,c=l===void 0?{}:l,f=r.config,d=f===void 0?{}:f,p=t===El,m=e.includes("fa-duotone")||e.includes("fad"),v=d.familyDefault==="duotone",y=n.prefix==="fad"||n.prefix==="fa-duotone";if(!p&&(m||v||y)&&(n.prefix="fad"),(e.includes("fa-brands")||e.includes("fab"))&&(n.prefix="fab"),!n.prefix&&uI.includes(t)){var E=Object.keys(c).find(function(S){return cI.includes(S)});if(E||d.autoFetchSvg){var M=RP.get(t).defaultShortPrefixId;n.prefix=M,n.iconName=ks(n.prefix,n.iconName)||n.iconName}}return(n.prefix==="fa"||o==="fa")&&(n.prefix=ls()||"fas"),n}var dI=(function(){function r(){q2(this,r),this.definitions={}}return J2(r,[{key:"add",value:function(){for(var t=this,n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];var l=s.reduce(this._pullDefinitions,{});Object.keys(l).forEach(function(c){t.definitions[c]=Te(Te({},t.definitions[c]||{}),l[c]),yp(c,l[c]);var f=um[En][c];f&&yp(f,l[c]),aS()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(t,n){var s=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(s).map(function(o){var l=s[o],c=l.prefix,f=l.iconName,d=l.icon,p=d[2];t[c]||(t[c]={}),p.length>0&&p.forEach(function(m){typeof m=="string"&&(t[c][m]=d)}),t[c][f]=d}),t}}])})(),N_=[],Fa={},za={},hI=Object.keys(za);function pI(r,e){var t=e.mixoutsTo;return N_=r,Fa={},Object.keys(za).forEach(function(n){hI.indexOf(n)===-1&&delete za[n]}),N_.forEach(function(n){var s=n.mixout?n.mixout():{};if(Object.keys(s).forEach(function(l){typeof s[l]=="function"&&(t[l]=s[l]),Ac(s[l])==="object"&&Object.keys(s[l]).forEach(function(c){t[l]||(t[l]={}),t[l][c]=s[l][c]})}),n.hooks){var o=n.hooks();Object.keys(o).forEach(function(l){Fa[l]||(Fa[l]=[]),Fa[l].push(o[l])})}n.provides&&n.provides(za)}),t}function xp(r,e){for(var t=arguments.length,n=new Array(t>2?t-2:0),s=2;s<t;s++)n[s-2]=arguments[s];var o=Fa[r]||[];return o.forEach(function(l){e=l.apply(null,[e].concat(n))}),e}function Vs(r){for(var e=arguments.length,t=new Array(e>1?e-1:0),n=1;n<e;n++)t[n-1]=arguments[n];var s=Fa[r]||[];s.forEach(function(o){o.apply(null,t)})}function us(){var r=arguments[0],e=Array.prototype.slice.call(arguments,1);return za[r]?za[r].apply(null,e):void 0}function Sp(r){r.prefix==="fa"&&(r.prefix="fas");var e=r.iconName,t=r.prefix||ls();if(e)return e=ks(t,e)||e,P_(uS.definitions,t,e)||P_(Ii.styles,t,e)}var uS=new dI,mI=function(){et.autoReplaceSvg=!1,et.observeMutations=!1,Vs("noAuto")},gI={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Rr?(Vs("beforeI2svg",e),us("pseudoElements2svg",e),us("i2svg",e)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=e.autoReplaceSvgRoot;et.autoReplaceSvg===!1&&(et.autoReplaceSvg=!0),et.observeMutations=!0,QL(function(){_I({autoReplaceSvgRoot:t}),Vs("watch",e)})}},vI={icon:function(e){if(e===null)return null;if(Ac(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:ks(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var t=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],n=Bc(e[0]);return{prefix:n,iconName:ks(n,t)||t}}if(typeof e=="string"&&(e.indexOf("".concat(et.cssPrefix,"-"))>-1||e.match(OL))){var s=zc(e.split(" "),{skipLookups:!0});return{prefix:s.prefix||ls(),iconName:ks(s.prefix,s.iconName)||s.iconName}}if(typeof e=="string"){var o=ls();return{prefix:o,iconName:ks(o,e)||e}}}},si={noAuto:mI,config:et,dom:gI,parse:vI,library:uS,findIconDefinition:Sp,toHtml:Tl},_I=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=e.autoReplaceSvgRoot,n=t===void 0?Kt:t;(Object.keys(Ii.styles).length>0||et.autoFetchSvg)&&Rr&&et.autoReplaceSvg&&si.dom.i2svg({node:n})};function Hc(r,e){return Object.defineProperty(r,"abstract",{get:e}),Object.defineProperty(r,"html",{get:function(){return r.abstract.map(function(n){return Tl(n)})}}),Object.defineProperty(r,"node",{get:function(){if(Rr){var n=Kt.createElement("div");return n.innerHTML=r.html,n.children}}}),r}function yI(r){var e=r.children,t=r.main,n=r.mask,s=r.attributes,o=r.styles,l=r.transform;if(fm(l)&&t.found&&!n.found){var c=t.width,f=t.height,d={x:c/f/2,y:.5};s.style=kc(Te(Te({},o),{},{"transform-origin":"".concat(d.x+l.x/16,"em ").concat(d.y+l.y/16,"em")}))}return[{tag:"svg",attributes:s,children:e}]}function xI(r){var e=r.prefix,t=r.iconName,n=r.children,s=r.attributes,o=r.symbol,l=o===!0?"".concat(e,"-").concat(et.cssPrefix,"-").concat(t):o;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:Te(Te({},s),{},{id:l}),children:n}]}]}function SI(r){var e=["aria-label","aria-labelledby","title","role"];return e.some(function(t){return t in r})}function pm(r){var e=r.icons,t=e.main,n=e.mask,s=r.prefix,o=r.iconName,l=r.transform,c=r.symbol,f=r.maskId,d=r.extra,p=r.watchable,m=p===void 0?!1:p,v=n.found?n:t,y=v.width,E=v.height,M=[et.replacementClass,o?"".concat(et.cssPrefix,"-").concat(o):""].filter(function(I){return d.classes.indexOf(I)===-1}).filter(function(I){return I!==""||!!I}).concat(d.classes).join(" "),S={children:[],attributes:Te(Te({},d.attributes),{},{"data-prefix":s,"data-icon":o,class:M,role:d.attributes.role||"img",viewBox:"0 0 ".concat(y," ").concat(E)})};!SI(d.attributes)&&!d.attributes["aria-hidden"]&&(S.attributes["aria-hidden"]="true"),m&&(S.attributes[Hs]="");var _=Te(Te({},S),{},{prefix:s,iconName:o,main:t,mask:n,maskId:f,transform:l,symbol:c,styles:Te({},d.styles)}),R=n.found&&t.found?us("generateAbstractMask",_)||{children:[],attributes:{}}:us("generateAbstractIcon",_)||{children:[],attributes:{}},C=R.children,b=R.attributes;return _.children=C,_.attributes=b,c?xI(_):yI(_)}function U_(r){var e=r.content,t=r.width,n=r.height,s=r.transform,o=r.extra,l=r.watchable,c=l===void 0?!1:l,f=Te(Te({},o.attributes),{},{class:o.classes.join(" ")});c&&(f[Hs]="");var d=Te({},o.styles);fm(s)&&(d.transform=qL({transform:s,width:t,height:n}),d["-webkit-transform"]=d.transform);var p=kc(d);p.length>0&&(f.style=p);var m=[];return m.push({tag:"span",attributes:f,children:[e]}),m}function EI(r){var e=r.content,t=r.extra,n=Te(Te({},t.attributes),{},{class:t.classes.join(" ")}),s=kc(t.styles);s.length>0&&(n.style=s);var o=[];return o.push({tag:"span",attributes:n,children:[e]}),o}var ph=Ii.styles;function Ep(r){var e=r[0],t=r[1],n=r.slice(4),s=Oc(n,1),o=s[0],l=null;return Array.isArray(o)?l={tag:"g",attributes:{class:"".concat(et.cssPrefix,"-").concat(fh.GROUP)},children:[{tag:"path",attributes:{class:"".concat(et.cssPrefix,"-").concat(fh.SECONDARY),fill:"currentColor",d:o[0]}},{tag:"path",attributes:{class:"".concat(et.cssPrefix,"-").concat(fh.PRIMARY),fill:"currentColor",d:o[1]}}]}:l={tag:"path",attributes:{fill:"currentColor",d:o}},{found:!0,width:e,height:t,icon:l}}var MI={found:!1,width:512,height:512};function TI(r,e){!jx&&!et.showMissingIcons&&r&&console.error('Icon with name "'.concat(r,'" and prefix "').concat(e,'" is missing.'))}function Mp(r,e){var t=e;return e==="fa"&&et.styleDefault!==null&&(e=ls()),new Promise(function(n,s){if(t==="fa"){var o=oS(r)||{};r=o.iconName||r,e=o.prefix||e}if(r&&e&&ph[e]&&ph[e][r]){var l=ph[e][r];return n(Ep(l))}TI(r,e),n(Te(Te({},MI),{},{icon:et.showMissingIcons&&r?us("missingIconAbstract")||{}:{}}))})}var F_=function(){},Tp=et.measurePerformance&&ac&&ac.mark&&ac.measure?ac:{mark:F_,measure:F_},Zo='FA "7.1.0"',wI=function(e){return Tp.mark("".concat(Zo," ").concat(e," begins")),function(){return cS(e)}},cS=function(e){Tp.mark("".concat(Zo," ").concat(e," ends")),Tp.measure("".concat(Zo," ").concat(e),"".concat(Zo," ").concat(e," begins"),"".concat(Zo," ").concat(e," ends"))},mm={begin:wI,end:cS},yc=function(){};function O_(r){var e=r.getAttribute?r.getAttribute(Hs):null;return typeof e=="string"}function bI(r){var e=r.getAttribute?r.getAttribute(om):null,t=r.getAttribute?r.getAttribute(lm):null;return e&&t}function AI(r){return r&&r.classList&&r.classList.contains&&r.classList.contains(et.replacementClass)}function RI(){if(et.autoReplaceSvg===!0)return xc.replace;var r=xc[et.autoReplaceSvg];return r||xc.replace}function CI(r){return Kt.createElementNS("http://www.w3.org/2000/svg",r)}function PI(r){return Kt.createElement(r)}function fS(r){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=e.ceFn,n=t===void 0?r.tag==="svg"?CI:PI:t;if(typeof r=="string")return Kt.createTextNode(r);var s=n(r.tag);Object.keys(r.attributes||[]).forEach(function(l){s.setAttribute(l,r.attributes[l])});var o=r.children||[];return o.forEach(function(l){s.appendChild(fS(l,{ceFn:n}))}),s}function LI(r){var e=" ".concat(r.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var xc={replace:function(e){var t=e[0];if(t.parentNode)if(e[1].forEach(function(s){t.parentNode.insertBefore(fS(s),t)}),t.getAttribute(Hs)===null&&et.keepOriginalSource){var n=Kt.createComment(LI(t));t.parentNode.replaceChild(n,t)}else t.remove()},nest:function(e){var t=e[0],n=e[1];if(~cm(t).indexOf(et.replacementClass))return xc.replace(e);var s=new RegExp("".concat(et.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){var o=n[0].attributes.class.split(" ").reduce(function(c,f){return f===et.replacementClass||f.match(s)?c.toSvg.push(f):c.toNode.push(f),c},{toNode:[],toSvg:[]});n[0].attributes.class=o.toSvg.join(" "),o.toNode.length===0?t.removeAttribute("class"):t.setAttribute("class",o.toNode.join(" "))}var l=n.map(function(c){return Tl(c)}).join(`
`);t.setAttribute(Hs,""),t.innerHTML=l}};function k_(r){r()}function dS(r,e){var t=typeof e=="function"?e:yc;if(r.length===0)t();else{var n=k_;et.mutateApproach===NL&&(n=os.requestAnimationFrame||k_),n(function(){var s=RI(),o=mm.begin("mutate");r.map(s),o(),t()})}}var gm=!1;function hS(){gm=!0}function wp(){gm=!1}var Cc=null;function B_(r){if(M_&&et.observeMutations){var e=r.treeCallback,t=e===void 0?yc:e,n=r.nodeCallback,s=n===void 0?yc:n,o=r.pseudoElementsCallback,l=o===void 0?yc:o,c=r.observeMutationsRoot,f=c===void 0?Kt:c;Cc=new M_(function(d){if(!gm){var p=ls();ro(d).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!O_(m.addedNodes[0])&&(et.searchPseudoElements&&l(m.target),t(m.target)),m.type==="attributes"&&m.target.parentNode&&et.searchPseudoElements&&l([m.target],!0),m.type==="attributes"&&O_(m.target)&&~zL.indexOf(m.attributeName))if(m.attributeName==="class"&&bI(m.target)){var v=zc(cm(m.target)),y=v.prefix,E=v.iconName;m.target.setAttribute(om,y||p),E&&m.target.setAttribute(lm,E)}else AI(m.target)&&s(m.target)})}}),Rr&&Cc.observe(f,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function II(){Cc&&Cc.disconnect()}function DI(r){var e=r.getAttribute("style"),t=[];return e&&(t=e.split(";").reduce(function(n,s){var o=s.split(":"),l=o[0],c=o.slice(1);return l&&c.length>0&&(n[l]=c.join(":").trim()),n},{})),t}function NI(r){var e=r.getAttribute("data-prefix"),t=r.getAttribute("data-icon"),n=r.innerText!==void 0?r.innerText.trim():"",s=zc(cm(r));return s.prefix||(s.prefix=ls()),e&&t&&(s.prefix=e,s.iconName=t),s.iconName&&s.prefix||(s.prefix&&n.length>0&&(s.iconName=rI(s.prefix,r.innerText)||hm(s.prefix,Qx(r.innerText))),!s.iconName&&et.autoFetchSvg&&r.firstChild&&r.firstChild.nodeType===Node.TEXT_NODE&&(s.iconName=r.firstChild.data)),s}function UI(r){var e=ro(r.attributes).reduce(function(t,n){return t.name!=="class"&&t.name!=="style"&&(t[n.name]=n.value),t},{});return e}function FI(){return{iconName:null,prefix:null,transform:ji,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function z_(r){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},t=NI(r),n=t.iconName,s=t.prefix,o=t.rest,l=UI(r),c=xp("parseNodeAttributes",{},r),f=e.styleParser?DI(r):[];return Te({iconName:n,prefix:s,transform:ji,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:o,styles:f,attributes:l}},c)}var OI=Ii.styles;function pS(r){var e=et.autoReplaceSvg==="nest"?z_(r,{styleParser:!1}):z_(r);return~e.extra.classes.indexOf(Yx)?us("generateLayersText",r,e):us("generateSvgReplacementMutation",r,e)}function kI(){return[].concat(Ui(Bx),Ui(zx))}function H_(r){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Rr)return Promise.resolve();var t=Kt.documentElement.classList,n=function(m){return t.add("".concat(b_,"-").concat(m))},s=function(m){return t.remove("".concat(b_,"-").concat(m))},o=et.autoFetchSvg?kI():Sx.concat(Object.keys(OI));o.includes("fa")||o.push("fa");var l=[".".concat(Yx,":not([").concat(Hs,"])")].concat(o.map(function(p){return".".concat(p,":not([").concat(Hs,"])")})).join(", ");if(l.length===0)return Promise.resolve();var c=[];try{c=ro(r.querySelectorAll(l))}catch{}if(c.length>0)n("pending"),s("complete");else return Promise.resolve();var f=mm.begin("onTree"),d=c.reduce(function(p,m){try{var v=pS(m);v&&p.push(v)}catch(y){jx||y.name==="MissingIcon"&&console.error(y)}return p},[]);return new Promise(function(p,m){Promise.all(d).then(function(v){dS(v,function(){n("active"),n("complete"),s("pending"),typeof e=="function"&&e(),f(),p()})}).catch(function(v){f(),m(v)})})}function BI(r){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;pS(r).then(function(t){t&&dS([t],e)})}function zI(r){return function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=(e||{}).icon?e:Sp(e||{}),s=t.mask;return s&&(s=(s||{}).icon?s:Sp(s||{})),r(n,Te(Te({},t),{},{mask:s}))}}var HI=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.transform,s=n===void 0?ji:n,o=t.symbol,l=o===void 0?!1:o,c=t.mask,f=c===void 0?null:c,d=t.maskId,p=d===void 0?null:d,m=t.classes,v=m===void 0?[]:m,y=t.attributes,E=y===void 0?{}:y,M=t.styles,S=M===void 0?{}:M;if(e){var _=e.prefix,R=e.iconName,C=e.icon;return Hc(Te({type:"icon"},e),function(){return Vs("beforeDOMElementCreation",{iconDefinition:e,params:t}),pm({icons:{main:Ep(C),mask:f?Ep(f.icon):{found:!1,width:null,height:null,icon:{}}},prefix:_,iconName:R,transform:Te(Te({},ji),s),symbol:l,maskId:p,extra:{attributes:E,styles:S,classes:v}})})}},VI={mixout:function(){return{icon:zI(HI)}},hooks:function(){return{mutationObserverCallbacks:function(t){return t.treeCallback=H_,t.nodeCallback=BI,t}}},provides:function(e){e.i2svg=function(t){var n=t.node,s=n===void 0?Kt:n,o=t.callback,l=o===void 0?function(){}:o;return H_(s,l)},e.generateSvgReplacementMutation=function(t,n){var s=n.iconName,o=n.prefix,l=n.transform,c=n.symbol,f=n.mask,d=n.maskId,p=n.extra;return new Promise(function(m,v){Promise.all([Mp(s,o),f.iconName?Mp(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(y){var E=Oc(y,2),M=E[0],S=E[1];m([t,pm({icons:{main:M,mask:S},prefix:o,iconName:s,transform:l,symbol:c,maskId:d,extra:p,watchable:!0})])}).catch(v)})},e.generateAbstractIcon=function(t){var n=t.children,s=t.attributes,o=t.main,l=t.transform,c=t.styles,f=kc(c);f.length>0&&(s.style=f);var d;return fm(l)&&(d=us("generateAbstractTransformGrouping",{main:o,transform:l,containerWidth:o.width,iconWidth:o.width})),n.push(d||o.icon),{children:n,attributes:s}}}},GI={mixout:function(){return{layer:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=n.classes,o=s===void 0?[]:s;return Hc({type:"layer"},function(){Vs("beforeDOMElementCreation",{assembler:t,params:n});var l=[];return t(function(c){Array.isArray(c)?c.map(function(f){l=l.concat(f.abstract)}):l=l.concat(c.abstract)}),[{tag:"span",attributes:{class:["".concat(et.cssPrefix,"-layers")].concat(Ui(o)).join(" ")},children:l}]})}}}},WI={mixout:function(){return{counter:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};n.title;var s=n.classes,o=s===void 0?[]:s,l=n.attributes,c=l===void 0?{}:l,f=n.styles,d=f===void 0?{}:f;return Hc({type:"counter",content:t},function(){return Vs("beforeDOMElementCreation",{content:t,params:n}),EI({content:t.toString(),extra:{attributes:c,styles:d,classes:["".concat(et.cssPrefix,"-layers-counter")].concat(Ui(o))}})})}}}},jI={mixout:function(){return{text:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=n.transform,o=s===void 0?ji:s,l=n.classes,c=l===void 0?[]:l,f=n.attributes,d=f===void 0?{}:f,p=n.styles,m=p===void 0?{}:p;return Hc({type:"text",content:t},function(){return Vs("beforeDOMElementCreation",{content:t,params:n}),U_({content:t,transform:Te(Te({},ji),o),extra:{attributes:d,styles:m,classes:["".concat(et.cssPrefix,"-layers-text")].concat(Ui(c))}})})}}},provides:function(e){e.generateLayersText=function(t,n){var s=n.transform,o=n.extra,l=null,c=null;if(yx){var f=parseInt(getComputedStyle(t).fontSize,10),d=t.getBoundingClientRect();l=d.width/f,c=d.height/f}return Promise.resolve([t,U_({content:t.innerHTML,width:l,height:c,transform:s,extra:o,watchable:!0})])}}},mS=new RegExp('"',"ug"),V_=[1105920,1112319],G_=Te(Te(Te(Te({},{FontAwesome:{normal:"fas",400:"fas"}}),AP),IL),FP),bp=Object.keys(G_).reduce(function(r,e){return r[e.toLowerCase()]=G_[e],r},{}),XI=Object.keys(bp).reduce(function(r,e){var t=bp[e];return r[e]=t[900]||Ui(Object.entries(t))[0][1],r},{});function YI(r){var e=r.replace(mS,"");return Qx(Ui(e)[0]||"")}function $I(r){var e=r.getPropertyValue("font-feature-settings").includes("ss01"),t=r.getPropertyValue("content"),n=t.replace(mS,""),s=n.codePointAt(0),o=s>=V_[0]&&s<=V_[1],l=n.length===2?n[0]===n[1]:!1;return o||l||e}function KI(r,e){var t=r.replace(/^['"]|['"]$/g,"").toLowerCase(),n=parseInt(e),s=isNaN(n)?"normal":n;return(bp[t]||{})[s]||XI[t]}function W_(r,e){var t="".concat(DL).concat(e.replace(":","-"));return new Promise(function(n,s){if(r.getAttribute(t)!==null)return n();var o=ro(r.children),l=o.filter(function(U){return U.getAttribute(mp)===e})[0],c=os.getComputedStyle(r,e),f=c.getPropertyValue("font-family"),d=f.match(kL),p=c.getPropertyValue("font-weight"),m=c.getPropertyValue("content");if(l&&!d)return r.removeChild(l),n();if(d&&m!=="none"&&m!==""){var v=c.getPropertyValue("content"),y=KI(f,p),E=YI(v),M=d[0].startsWith("FontAwesome"),S=$I(c),_=hm(y,E),R=_;if(M){var C=sI(E);C.iconName&&C.prefix&&(_=C.iconName,y=C.prefix)}if(_&&!S&&(!l||l.getAttribute(om)!==y||l.getAttribute(lm)!==R)){r.setAttribute(t,R),l&&r.removeChild(l);var b=FI(),I=b.extra;I.attributes[mp]=e,Mp(_,y).then(function(U){var F=pm(Te(Te({},b),{},{icons:{main:U,mask:lS()},prefix:y,iconName:R,extra:I,watchable:!0})),X=Kt.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?r.insertBefore(X,r.firstChild):r.appendChild(X),X.outerHTML=F.map(function(P){return Tl(P)}).join(`
`),r.removeAttribute(t),n()}).catch(s)}else n()}else n()})}function qI(r){return Promise.all([W_(r,"::before"),W_(r,"::after")])}function ZI(r){return r.parentNode!==document.head&&!~UL.indexOf(r.tagName.toUpperCase())&&!r.getAttribute(mp)&&(!r.parentNode||r.parentNode.tagName!=="svg")}var JI=function(e){return!!e&&Wx.some(function(t){return e.includes(t)})},QI=function(e){if(!e)return[];var t=new Set,n=e.split(/,(?![^()]*\))/).map(function(f){return f.trim()});n=n.flatMap(function(f){return f.includes("(")?f:f.split(",").map(function(d){return d.trim()})});var s=_c(n),o;try{for(s.s();!(o=s.n()).done;){var l=o.value;if(JI(l)){var c=Wx.reduce(function(f,d){return f.replace(d,"")},l);c!==""&&c!=="*"&&t.add(c)}}}catch(f){s.e(f)}finally{s.f()}return t};function j_(r){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(Rr){var t;if(e)t=r;else if(et.searchPseudoElementsFullScan)t=r.querySelectorAll("*");else{var n=new Set,s=_c(document.styleSheets),o;try{for(s.s();!(o=s.n()).done;){var l=o.value;try{var c=_c(l.cssRules),f;try{for(c.s();!(f=c.n()).done;){var d=f.value,p=QI(d.selectorText),m=_c(p),v;try{for(m.s();!(v=m.n()).done;){var y=v.value;n.add(y)}}catch(M){m.e(M)}finally{m.f()}}}catch(M){c.e(M)}finally{c.f()}}catch(M){et.searchPseudoElementsWarnings&&console.warn("Font Awesome: cannot parse stylesheet: ".concat(l.href," (").concat(M.message,`)
If it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.`))}}}catch(M){s.e(M)}finally{s.f()}if(!n.size)return;var E=Array.from(n).join(", ");try{t=r.querySelectorAll(E)}catch{}}return new Promise(function(M,S){var _=ro(t).filter(ZI).map(qI),R=mm.begin("searchPseudoElements");hS(),Promise.all(_).then(function(){R(),wp(),M()}).catch(function(){R(),wp(),S()})})}}var eD={hooks:function(){return{mutationObserverCallbacks:function(t){return t.pseudoElementsCallback=j_,t}}},provides:function(e){e.pseudoElements2svg=function(t){var n=t.node,s=n===void 0?Kt:n;et.searchPseudoElements&&j_(s)}}},X_=!1,tD={mixout:function(){return{dom:{unwatch:function(){hS(),X_=!0}}}},hooks:function(){return{bootstrap:function(){B_(xp("mutationObserverCallbacks",{}))},noAuto:function(){II()},watch:function(t){var n=t.observeMutationsRoot;X_?wp():B_(xp("mutationObserverCallbacks",{observeMutationsRoot:n}))}}}},Y_=function(e){var t={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(n,s){var o=s.toLowerCase().split("-"),l=o[0],c=o.slice(1).join("-");if(l&&c==="h")return n.flipX=!0,n;if(l&&c==="v")return n.flipY=!0,n;if(c=parseFloat(c),isNaN(c))return n;switch(l){case"grow":n.size=n.size+c;break;case"shrink":n.size=n.size-c;break;case"left":n.x=n.x-c;break;case"right":n.x=n.x+c;break;case"up":n.y=n.y-c;break;case"down":n.y=n.y+c;break;case"rotate":n.rotate=n.rotate+c;break}return n},t)},nD={mixout:function(){return{parse:{transform:function(t){return Y_(t)}}}},hooks:function(){return{parseNodeAttributes:function(t,n){var s=n.getAttribute("data-fa-transform");return s&&(t.transform=Y_(s)),t}}},provides:function(e){e.generateAbstractTransformGrouping=function(t){var n=t.main,s=t.transform,o=t.containerWidth,l=t.iconWidth,c={transform:"translate(".concat(o/2," 256)")},f="translate(".concat(s.x*32,", ").concat(s.y*32,") "),d="scale(".concat(s.size/16*(s.flipX?-1:1),", ").concat(s.size/16*(s.flipY?-1:1),") "),p="rotate(".concat(s.rotate," 0 0)"),m={transform:"".concat(f," ").concat(d," ").concat(p)},v={transform:"translate(".concat(l/2*-1," -256)")},y={outer:c,inner:m,path:v};return{tag:"g",attributes:Te({},y.outer),children:[{tag:"g",attributes:Te({},y.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:Te(Te({},n.icon.attributes),y.path)}]}]}}}},mh={x:0,y:0,width:"100%",height:"100%"};function $_(r){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return r.attributes&&(r.attributes.fill||e)&&(r.attributes.fill="black"),r}function iD(r){return r.tag==="g"?r.children:[r]}var rD={hooks:function(){return{parseNodeAttributes:function(t,n){var s=n.getAttribute("data-fa-mask"),o=s?zc(s.split(" ").map(function(l){return l.trim()})):lS();return o.prefix||(o.prefix=ls()),t.mask=o,t.maskId=n.getAttribute("data-fa-mask-id"),t}}},provides:function(e){e.generateAbstractMask=function(t){var n=t.children,s=t.attributes,o=t.main,l=t.mask,c=t.maskId,f=t.transform,d=o.width,p=o.icon,m=l.width,v=l.icon,y=KL({transform:f,containerWidth:m,iconWidth:d}),E={tag:"rect",attributes:Te(Te({},mh),{},{fill:"white"})},M=p.children?{children:p.children.map($_)}:{},S={tag:"g",attributes:Te({},y.inner),children:[$_(Te({tag:p.tag,attributes:Te(Te({},p.attributes),y.path)},M))]},_={tag:"g",attributes:Te({},y.outer),children:[S]},R="mask-".concat(c||R_()),C="clip-".concat(c||R_()),b={tag:"mask",attributes:Te(Te({},mh),{},{id:R,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[E,_]},I={tag:"defs",children:[{tag:"clipPath",attributes:{id:C},children:iD(v)},b]};return n.push(I,{tag:"rect",attributes:Te({fill:"currentColor","clip-path":"url(#".concat(C,")"),mask:"url(#".concat(R,")")},mh)}),{children:n,attributes:s}}}},sD={provides:function(e){var t=!1;os.matchMedia&&(t=os.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var n=[],s={fill:"currentColor"},o={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:Te(Te({},s),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var l=Te(Te({},o),{},{attributeName:"opacity"}),c={tag:"circle",attributes:Te(Te({},s),{},{cx:"256",cy:"364",r:"28"}),children:[]};return t||c.children.push({tag:"animate",attributes:Te(Te({},o),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:Te(Te({},l),{},{values:"1;0;1;1;0;1;"})}),n.push(c),n.push({tag:"path",attributes:Te(Te({},s),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:t?[]:[{tag:"animate",attributes:Te(Te({},l),{},{values:"1;0;0;0;0;1;"})}]}),t||n.push({tag:"path",attributes:Te(Te({},s),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:Te(Te({},l),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},aD={hooks:function(){return{parseNodeAttributes:function(t,n){var s=n.getAttribute("data-fa-symbol"),o=s===null?!1:s===""?!0:s;return t.symbol=o,t}}}},oD=[JL,VI,GI,WI,jI,eD,tD,nD,rD,sD,aD];pI(oD,{mixoutsTo:si});si.noAuto;var pl=si.config;si.library;si.dom;var gS=si.parse;si.findIconDefinition;si.toHtml;var lD=si.icon;si.layer;si.text;si.counter;function uD(r){return r=r-0,r===r}function vS(r){return uD(r)?r:(r=r.replace(/[_-]+(.)?/g,(e,t)=>t?t.toUpperCase():""),r.charAt(0).toLowerCase()+r.slice(1))}function cD(r){return r.charAt(0).toUpperCase()+r.slice(1)}var Ia=new Map,fD=1e3;function dD(r){if(Ia.has(r))return Ia.get(r);const e={};let t=0;const n=r.length;for(;t<n;){const s=r.indexOf(";",t),o=s===-1?n:s,l=r.slice(t,o).trim();if(l){const c=l.indexOf(":");if(c>0){const f=l.slice(0,c).trim(),d=l.slice(c+1).trim();if(f&&d){const p=vS(f);e[p.startsWith("webkit")?cD(p):p]=d}}}t=o+1}if(Ia.size===fD){const s=Ia.keys().next().value;s&&Ia.delete(s)}return Ia.set(r,e),e}function _S(r,e,t={}){if(typeof e=="string")return e;const n=(e.children||[]).map(p=>_S(r,p)),s=e.attributes||{},o={};for(const[p,m]of Object.entries(s))switch(!0){case p==="class":{o.className=m;break}case p==="style":{o.style=dD(String(m));break}case p.startsWith("aria-"):case p.startsWith("data-"):{o[p.toLowerCase()]=m;break}default:o[vS(p)]=m}const{style:l,role:c,"aria-label":f,...d}=t;return l&&(o.style=o.style?{...o.style,...l}:l),c&&(o.role=c),f&&(o["aria-label"]=f,o["aria-hidden"]="false"),r(e.tag,{...d,...o},...n)}var hD=_S.bind(null,Pc.createElement),K_=(r,e)=>{const t=ae.useId();return r||(e?t:void 0)},pD=class{constructor(r="react-fontawesome"){this.enabled=!1;let e=!1;try{e=typeof process<"u"&&!1}catch{}this.scope=r,this.enabled=e}log(...r){this.enabled&&console.log(`[${this.scope}]`,...r)}warn(...r){this.enabled&&console.warn(`[${this.scope}]`,...r)}error(...r){this.enabled&&console.error(`[${this.scope}]`,...r)}},mD="searchPseudoElementsFullScan"in pl?"7.0.0":"6.0.0",gD=Number.parseInt(mD)>=7,il="fa",mr={beat:"fa-beat",fade:"fa-fade",beatFade:"fa-beat-fade",bounce:"fa-bounce",shake:"fa-shake",spin:"fa-spin",spinPulse:"fa-spin-pulse",spinReverse:"fa-spin-reverse",pulse:"fa-pulse"},vD={left:"fa-pull-left",right:"fa-pull-right"},_D={90:"fa-rotate-90",180:"fa-rotate-180",270:"fa-rotate-270"},yD={"2xs":"fa-2xs",xs:"fa-xs",sm:"fa-sm",lg:"fa-lg",xl:"fa-xl","2xl":"fa-2xl","1x":"fa-1x","2x":"fa-2x","3x":"fa-3x","4x":"fa-4x","5x":"fa-5x","6x":"fa-6x","7x":"fa-7x","8x":"fa-8x","9x":"fa-9x","10x":"fa-10x"},gr={border:"fa-border",fixedWidth:"fa-fw",flip:"fa-flip",flipHorizontal:"fa-flip-horizontal",flipVertical:"fa-flip-vertical",inverse:"fa-inverse",rotateBy:"fa-rotate-by",swapOpacity:"fa-swap-opacity",widthAuto:"fa-width-auto"};function xD(r){const e=pl.cssPrefix||pl.familyPrefix||il;return e===il?r:r.replace(new RegExp(String.raw`(?<=^|\s)${il}-`,"g"),`${e}-`)}function SD(r){const{beat:e,fade:t,beatFade:n,bounce:s,shake:o,spin:l,spinPulse:c,spinReverse:f,pulse:d,fixedWidth:p,inverse:m,border:v,flip:y,size:E,rotation:M,pull:S,swapOpacity:_,rotateBy:R,widthAuto:C,className:b}=r,I=[];return b&&I.push(...b.split(" ")),e&&I.push(mr.beat),t&&I.push(mr.fade),n&&I.push(mr.beatFade),s&&I.push(mr.bounce),o&&I.push(mr.shake),l&&I.push(mr.spin),f&&I.push(mr.spinReverse),c&&I.push(mr.spinPulse),d&&I.push(mr.pulse),p&&I.push(gr.fixedWidth),m&&I.push(gr.inverse),v&&I.push(gr.border),y===!0&&I.push(gr.flip),(y==="horizontal"||y==="both")&&I.push(gr.flipHorizontal),(y==="vertical"||y==="both")&&I.push(gr.flipVertical),E!=null&&I.push(yD[E]),M!=null&&M!==0&&I.push(_D[M]),S!=null&&I.push(vD[S]),_&&I.push(gr.swapOpacity),gD?(R&&I.push(gr.rotateBy),C&&I.push(gr.widthAuto),(pl.cssPrefix||pl.familyPrefix||il)===il?I:I.map(xD)):I}var ED=r=>typeof r=="object"&&"icon"in r&&!!r.icon;function q_(r){if(r)return ED(r)?r:gS.icon(r)}function MD(r){return Object.keys(r)}var Z_=new pD("FontAwesomeIcon"),yS={border:!1,className:"",mask:void 0,maskId:void 0,fixedWidth:!1,inverse:!1,flip:!1,icon:void 0,listItem:!1,pull:void 0,pulse:!1,rotation:void 0,rotateBy:!1,size:void 0,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:void 0,transform:void 0,swapOpacity:!1,widthAuto:!1},TD=new Set(Object.keys(yS)),Ap=Pc.forwardRef((r,e)=>{const t={...yS,...r},{icon:n,mask:s,symbol:o,title:l,titleId:c,maskId:f,transform:d}=t,p=K_(f,!!s),m=K_(c,!!l),v=q_(n);if(!v)return Z_.error("Icon lookup is undefined",n),null;const y=SD(t),E=typeof d=="string"?gS.transform(d):d,M=q_(s),S=lD(v,{...y.length>0&&{classes:y},...E&&{transform:E},...M&&{mask:M},symbol:o,title:l,titleId:m,maskId:p});if(!S)return Z_.error("Could not find icon",v),null;const{abstract:_}=S,R={ref:e};for(const C of MD(t))TD.has(C)||(R[C]=t[C]);return hD(_[0],R)});Ap.displayName="FontAwesomeIcon";var wD={prefix:"fas",iconName:"camera",icon:[512,512,[62258,"camera-alt"],"f030","M149.1 64.8L138.7 96 64 96C28.7 96 0 124.7 0 160L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-256c0-35.3-28.7-64-64-64l-74.7 0-10.4-31.2C356.4 45.2 338.1 32 317.4 32L194.6 32c-20.7 0-39 13.2-45.5 32.8zM256 192a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"]},bD={prefix:"fas",iconName:"arrow-left",icon:[512,512,[8592],"f060","M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288 480 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-370.7 0 105.4-105.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"]};const AD=()=>Re.jsx("h1",{children:"Games"}),RD=()=>Re.jsx("div",{className:"m-1 h-40 w-40 bg-[var(--love-theme)]",children:Re.jsx("div",{className:""})}),CD=()=>{const r=[{name:"gift",url:"memory"},{name:"gift",url:"memory"}];return Re.jsx("div",{className:"flex flex-wrap justify-center h-screen overflow-y-scroll",children:r.map((e,t)=>Re.jsx(Pc.Fragment,{children:Re.jsx(Fp,{to:"/gift/"+e?.url,children:Re.jsx(RD,{})})},t))})},PD="/birthday/assets/angry_devil-C9vWryCs.png",LD=Object.freeze(Object.defineProperty({__proto__:null,default:PD},Symbol.toStringTag,{value:"Module"})),ID="/birthday/assets/angry_ghost-DR-LFie4.png",DD=Object.freeze(Object.defineProperty({__proto__:null,default:ID},Symbol.toStringTag,{value:"Module"})),ND="/birthday/assets/evil_ghost-BPPzUyJ6.png",UD=Object.freeze(Object.defineProperty({__proto__:null,default:ND},Symbol.toStringTag,{value:"Module"})),FD="/birthday/assets/silent_goust-xmP59ofH.png",OD=Object.freeze(Object.defineProperty({__proto__:null,default:FD},Symbol.toStringTag,{value:"Module"})),kD="/birthday/assets/sleepy_ghost-x-2UssXA.png",BD=Object.freeze(Object.defineProperty({__proto__:null,default:kD},Symbol.toStringTag,{value:"Module"})),zD="/birthday/assets/yarn_devil-BttPndVd.png",HD=Object.freeze(Object.defineProperty({__proto__:null,default:zD},Symbol.toStringTag,{value:"Module"})),J_="/birthday/assets/kesav_dp-CaHQgkT6.jpg",lc=[{text:"oii",dp:!0,position:""},{text:"sollungaa",dp:!1,position:"justify-end"},{text:"oii",dp:!0,position:""},{text:"👿",dp:!1,position:"justify-end"},{text:"oii",dp:!0,position:""},{text:"😏",dp:!1,position:"justify-end"},{text:"oii",dp:!0,position:""},{text:"🫣",dp:!1,position:"justify-end"},{text:"oii",dp:!0,position:""},{text:"🤫",dp:!1,position:"justify-end"},{text:"oii",dp:!0,position:""},{text:"🫡",dp:!1,position:"justify-end"},{text:"😤",dp:!1,position:"justify-end"},{text:"🙄",dp:!1,position:"justify-end"},{text:"👻",dp:!1,position:"justify-end"},{text:"👊👊👊👊👊",dp:!1,position:"justify-end"},{text:"🤕",dp:!1,position:"justify-end"},{emoji:"angry_devil",dp:!1,position:"justify-end"},{emoji:"angry_devil",dp:!1,position:"justify-end"},{emoji:"evil_ghost",dp:!1,position:"justify-end"}],VD="data:image/svg+xml,%3csvg%20width='23'%20height='22'%20viewBox='0%200%2023%2022'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M21.6948%2014.5099L16.2315%2012.2226C15.984%2012.1234%2015.7139%2012.0836%2015.4457%2012.1066C15.1775%2012.1297%2014.9197%2012.2148%2014.6956%2012.3544C14.6729%2012.368%2014.6513%2012.3832%2014.6309%2012.3998L11.7755%2014.6688C11.7459%2014.6838%2011.7129%2014.6922%2011.6792%2014.6934C11.6455%2014.6945%2011.6119%2014.6883%2011.5812%2014.6753C9.74584%2013.8476%207.84456%2012.082%206.95521%2010.3912C6.9404%2010.3629%206.9327%2010.3319%206.9327%2010.3004C6.9327%2010.269%206.9404%2010.2379%206.95521%2010.2097L9.39195%207.50847C9.40945%207.48848%209.42566%207.46757%209.44053%207.44581C9.58785%207.23566%209.67684%206.99455%209.69945%206.74422C9.72207%206.4939%209.67759%206.24226%209.57006%206.01202L7.1391%200.916535C7.00104%200.615744%206.76229%200.364892%206.45868%200.201639C6.15506%200.038382%205.80296%20-0.0284745%205.45523%200.0111031C3.94394%200.196724%202.5567%200.8901%201.55276%201.96168C0.548809%203.03324%20-0.00315514%204.40967%201.35677e-05%205.83375C1.35677e-05%2014.2939%207.36693%2021.1765%2016.4223%2021.1765C17.9465%2021.1791%2019.4197%2020.6633%2020.5666%2019.7254C21.7135%2018.7876%2022.4558%2017.4917%2022.6547%2016.0798C22.697%2015.7565%2022.6264%2015.4291%2022.4534%2015.1461C22.2805%2014.8633%2022.0144%2014.6401%2021.6948%2014.5099ZM16.4223%2019.8798C8.13252%2019.8798%201.38782%2013.5785%201.38782%205.83375C1.38394%204.72511%201.81225%203.65308%202.59271%202.81796C3.37316%201.98282%204.45238%201.44174%205.6287%201.29577H5.6553C5.70191%201.29659%205.74716%201.31054%205.78513%201.3358C5.82311%201.36105%205.85202%201.39644%205.8681%201.43732L8.30832%206.52741C8.32223%206.5557%208.32943%206.58648%208.32943%206.61763C8.32943%206.64878%208.32223%206.67954%208.30832%206.70785L5.86694%209.4155C5.84872%209.43483%205.83211%209.45543%205.81721%209.4771C5.66445%209.69498%205.57449%209.94602%205.55605%2010.2059C5.53762%2010.4658%205.59132%2010.7258%205.71197%2010.9606C6.73779%2012.9227%208.85419%2014.8848%2010.9775%2015.8432C11.2303%2015.9553%2011.5099%2016.0043%2011.789%2015.9854C12.0681%2015.9664%2012.3372%2015.8802%2012.57%2015.7352C12.592%2015.7211%2012.614%2015.706%2012.6348%2015.6898L15.489%2013.4208C15.5172%2013.4067%2015.5483%2013.3984%2015.5803%2013.3965C15.6122%2013.3946%2015.6442%2013.3993%2015.6741%2013.41L21.1385%2015.6974C21.1832%2015.7151%2021.2206%2015.7455%2021.2458%2015.7842C21.2709%2015.8231%2021.2823%2015.8683%2021.2784%2015.9134C21.123%2017.013%2020.5445%2018.0219%2019.6507%2018.7519C18.7571%2019.4819%2017.6094%2019.8828%2016.4223%2019.8798Z'%20fill='black'/%3e%3c/svg%3e",GD="/birthday/assets/video-CDYPFdDi.svg",WD="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M22.7155%203.89403C22.6708%203.80519%2022.6022%203.73059%2022.5174%203.67865C22.4326%203.6267%2022.335%203.59947%2022.2355%203.60003H1.73952C1.62903%203.59888%201.52098%203.63242%201.43056%203.69593C1.34015%203.75944%201.27192%203.84971%201.23552%203.95403C1.19606%204.05736%201.1893%204.17032%201.21613%204.27763C1.24295%204.38494%201.30208%204.48142%201.38552%204.55403L8.58552%2010.716V21.63C8.58619%2021.7433%208.62249%2021.8535%208.68925%2021.945C8.75601%2022.0366%208.84985%2022.1048%208.95751%2022.14C9.01319%2022.1486%209.06984%2022.1486%209.12551%2022.14C9.20935%2022.14%209.29203%2022.1205%209.36701%2022.083C9.44199%2022.0455%209.50722%2021.9911%209.55751%2021.924L22.6495%204.44003C22.7078%204.363%2022.7447%204.27187%2022.7563%204.17594C22.7679%204.08002%2022.7538%203.98274%2022.7155%203.89403V3.89403ZM3.19753%204.68603H19.8775L9.21553%209.82803L3.19753%204.68603ZM9.67752%2010.8L20.4775%205.58603L9.67752%2019.986V10.8Z'%20fill='black'/%3e%3c/svg%3e",jD=Object.assign({"../../assets/images/chats/angry_devil.png":LD,"../../assets/images/chats/angry_ghost.png":DD,"../../assets/images/chats/evil_ghost.png":UD,"../../assets/images/chats/silent_goust.png":OD,"../../assets/images/chats/sleepy_ghost.png":BD,"../../assets/images/chats/yarn_devil.png":HD}),XD=Object.fromEntries(Object.entries(jD).map(([r,e])=>[r.split("/").pop().split(".")[0],e.default])),YD=()=>{const[r,e]=ae.useState(0),t=ae.useRef(null);return ae.useEffect(()=>{if(r<lc.length){const n=setTimeout(()=>{e(s=>s+1)},3e3);return()=>clearTimeout(n)}},[r,lc.length]),ae.useEffect(()=>{t.current&&(t.current.scrollTop=t.current.scrollHeight)},[r]),Re.jsxs("div",{className:"h-screen",children:[Re.jsxs("div",{className:"flex justify-between items-center h-14 bg-white-500 border border-white-700",children:[Re.jsxs("div",{className:"flex",children:[Re.jsx(Ap,{className:"my-auto",icon:bD,size:"1x"}),Re.jsxs("div",{className:"h-10 w-10 m-2 rounded-full bg-green-500 border border-black-500 relative",children:[Re.jsx("img",{className:"rounded-full",src:J_}),Re.jsx("div",{className:"absolute bottom-0 -right-0.5 h-2.5 w-2.5 m-auto mr-1 bg-green-500 rounded-full border border-[black]"})]}),Re.jsxs("div",{className:"flex flex-col",children:[Re.jsx("div",{className:"text-lg font-bold mt-1",children:"Kesav"}),Re.jsx("div",{className:"text-sm",children:"active"})]})]}),Re.jsxs("div",{className:"flex",children:[Re.jsx("img",{src:VD,className:"font-bold px-1"}),Re.jsx("img",{src:GD,className:"font-bold px-1"})]})]}),Re.jsx("div",{className:"h-[83vh] overflow-y-scroll",ref:t,children:Re.jsx("div",{className:"flex flex-col min-h-[83.5vh] overflow-y-auto p-4 bg-gray-100 justify-end",children:lc.slice(0,r).map((n,s)=>Re.jsxs("div",{className:"flex relative w-full my-1 "+n.position,children:[n.dp&&Re.jsx("div",{className:"h-12 w-12 rounded-full overflow-hidden border border-black-500 shadow-md mx-1",children:Re.jsx("img",{className:"w-12 h-12 object-cover rounded-lg",src:J_})}),n?.text&&Re.jsx("div",{className:"showChat max-w-1/2 min-w-6 bg-blue-500 text-white border border-black-500 shadow rounded-3xl h-10 p-2",children:n.text}),n?.emoji&&Re.jsx("img",{src:XD[n.emoji],className:"h-44 w-44 border border-black-500 shadow rounded-lg"}),n.dp&&Re.jsxs("div",{className:"text-loader hideLoader absolute left-14 top-2 w-14 h-8 rounded-3xl bg-gray-500",children:[Re.jsx("span",{className:"absolute left-2 w-3 h-3 rounded-full top-1/2 -translate-y-1/2 bg-gray-700"}),Re.jsx("span",{className:"absolute right-5 -translate-x-1/2 w-3 h-3 rounded-full top-1/2 -translate-y-1/2 bg-gray-700"}),Re.jsx("span",{className:"absolute right-1 w-3 h-3 rounded-full top-1/2 -translate-y-1/2 bg-gray-700"})]})]}))})}),Re.jsx("div",{className:"h-[8vh] mb-5 mx-2",children:Re.jsxs("div",{className:"flex justify-between h-full rounded-full border bordre-black-700 shadow",children:[Re.jsx("div",{className:"flex justify-center items-center h-12 w-12 rounded-full my-auto mx-2 bg-violet-500",children:Re.jsx(Ap,{icon:wD,style:{color:"white",fontSize:"25px"}})}),Re.jsx("div",{className:"flex w-44 items-center",children:lc[r]?.text}),Re.jsx("div",{className:"flex justify-center items-center h-12 w-14 rounded-full my-auto mx-2 bg-violet-500",children:Re.jsx("img",{src:WD})})]})})]})},Q_={type:"change"},vm={type:"start"},xS={type:"end"},uc=new yl,ey=new ns,$D=Math.cos(70*Vy.DEG2RAD),fn=new j,Kn=2*Math.PI,zt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},gh=1e-6;class KD extends lb{constructor(e,t=null){super(e,t),this.state=zt.NONE,this.target=new j,this.cursor=new j,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Oa.ROTATE,MIDDLE:Oa.DOLLY,RIGHT:Oa.PAN},this.touches={ONE:Na.ROTATE,TWO:Na.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new j,this._lastQuaternion=new $i,this._lastTargetPosition=new j,this._quat=new $i().setFromUnitVectors(e.up,new j(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Y0,this._sphericalDelta=new Y0,this._scale=1,this._panOffset=new j,this._rotateStart=new dt,this._rotateEnd=new dt,this._rotateDelta=new dt,this._panStart=new dt,this._panEnd=new dt,this._panDelta=new dt,this._dollyStart=new dt,this._dollyEnd=new dt,this._dollyDelta=new dt,this._dollyDirection=new j,this._mouse=new dt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=ZD.bind(this),this._onPointerDown=qD.bind(this),this._onPointerUp=JD.bind(this),this._onContextMenu=sN.bind(this),this._onMouseWheel=tN.bind(this),this._onKeyDown=nN.bind(this),this._onTouchStart=iN.bind(this),this._onTouchMove=rN.bind(this),this._onMouseDown=QD.bind(this),this._onMouseMove=eN.bind(this),this._interceptControlDown=aN.bind(this),this._interceptControlUp=oN.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Q_),this.update(),this.state=zt.NONE}update(e=null){const t=this.object.position;fn.copy(t).sub(this.target),fn.applyQuaternion(this._quat),this._spherical.setFromVector3(fn),this.autoRotate&&this.state===zt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Kn:n>Math.PI&&(n-=Kn),s<-Math.PI?s+=Kn:s>Math.PI&&(s-=Kn),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let o=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const l=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),o=l!=this._spherical.radius}if(fn.setFromSpherical(this._spherical),fn.applyQuaternion(this._quatInverse),t.copy(this.target).add(fn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let l=null;if(this.object.isPerspectiveCamera){const c=fn.length();l=this._clampDistance(c*this._scale);const f=c-l;this.object.position.addScaledVector(this._dollyDirection,f),this.object.updateMatrixWorld(),o=!!f}else if(this.object.isOrthographicCamera){const c=new j(this._mouse.x,this._mouse.y,0);c.unproject(this.object);const f=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),o=f!==this.object.zoom;const d=new j(this._mouse.x,this._mouse.y,0);d.unproject(this.object),this.object.position.sub(d).add(c),this.object.updateMatrixWorld(),l=fn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;l!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(l).add(this.object.position):(uc.origin.copy(this.object.position),uc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(uc.direction))<$D?this.object.lookAt(this.target):(ey.setFromNormalAndCoplanarPoint(this.object.up,this.target),uc.intersectPlane(ey,this.target))))}else if(this.object.isOrthographicCamera){const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),l!==this.object.zoom&&(this.object.updateProjectionMatrix(),o=!0)}return this._scale=1,this._performCursorZoom=!1,o||this._lastPosition.distanceToSquared(this.object.position)>gh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>gh||this._lastTargetPosition.distanceToSquared(this.target)>gh?(this.dispatchEvent(Q_),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Kn/60*this.autoRotateSpeed*e:Kn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){fn.setFromMatrixColumn(t,0),fn.multiplyScalar(-e),this._panOffset.add(fn)}_panUp(e,t){this.screenSpacePanning===!0?fn.setFromMatrixColumn(t,1):(fn.setFromMatrixColumn(t,0),fn.crossVectors(this.object.up,fn)),fn.multiplyScalar(e),this._panOffset.add(fn)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;fn.copy(s).sub(this.target);let o=fn.length();o*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*o/n.clientHeight,this.object.matrix),this._panUp(2*t*o/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=e-n.left,o=t-n.top,l=n.width,c=n.height;this._mouse.x=s/l*2-1,this._mouse.y=-(o/c)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Kn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Kn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Kn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Kn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Kn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Kn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(n,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,o=Math.sqrt(n*n+s*s);this._dollyStart.set(0,o)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),s=.5*(e.pageX+n.x),o=.5*(e.pageY+n.y);this._rotateEnd.set(s,o)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Kn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Kn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,o=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,o),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const l=(e.pageX+t.x)*.5,c=(e.pageY+t.y)*.5;this._updateZoomParameters(l,c)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new dt,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function qD(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(r)&&(this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r)))}function ZD(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function JD(r){switch(this._removePointer(r),this._pointers.length){case 0:this.domElement.releasePointerCapture(r.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(xS),this.state=zt.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function QD(r){let e;switch(r.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Oa.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(r),this.state=zt.DOLLY;break;case Oa.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=zt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=zt.ROTATE}break;case Oa.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=zt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=zt.PAN}break;default:this.state=zt.NONE}this.state!==zt.NONE&&this.dispatchEvent(vm)}function eN(r){switch(this.state){case zt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(r);break;case zt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(r);break;case zt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(r);break}}function tN(r){this.enabled===!1||this.enableZoom===!1||this.state!==zt.NONE||(r.preventDefault(),this.dispatchEvent(vm),this._handleMouseWheel(this._customWheelEvent(r)),this.dispatchEvent(xS))}function nN(r){this.enabled!==!1&&this._handleKeyDown(r)}function iN(r){switch(this._trackPointer(r),this._pointers.length){case 1:switch(this.touches.ONE){case Na.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(r),this.state=zt.TOUCH_ROTATE;break;case Na.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(r),this.state=zt.TOUCH_PAN;break;default:this.state=zt.NONE}break;case 2:switch(this.touches.TWO){case Na.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(r),this.state=zt.TOUCH_DOLLY_PAN;break;case Na.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(r),this.state=zt.TOUCH_DOLLY_ROTATE;break;default:this.state=zt.NONE}break;default:this.state=zt.NONE}this.state!==zt.NONE&&this.dispatchEvent(vm)}function rN(r){switch(this._trackPointer(r),this.state){case zt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(r),this.update();break;case zt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(r),this.update();break;case zt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(r),this.update();break;case zt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(r),this.update();break;default:this.state=zt.NONE}}function sN(r){this.enabled!==!1&&r.preventDefault()}function aN(r){r.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function oN(r){r.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function ty(r,e){if(e===yT)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(e===op||e===By){let t=r.getIndex();if(t===null){const l=[],c=r.getAttribute("position");if(c!==void 0){for(let f=0;f<c.count;f++)l.push(f);r.setIndex(l),t=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}const n=t.count-2,s=[];if(e===op)for(let l=1;l<=n;l++)s.push(t.getX(0)),s.push(t.getX(l)),s.push(t.getX(l+1));else for(let l=0;l<n;l++)l%2===0?(s.push(t.getX(l)),s.push(t.getX(l+1)),s.push(t.getX(l+2))):(s.push(t.getX(l+2)),s.push(t.getX(l+1)),s.push(t.getX(l)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const o=r.clone();return o.setIndex(s),o.clearGroups(),o}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),r}class lN extends no{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new hN(t)}),this.register(function(t){return new pN(t)}),this.register(function(t){return new MN(t)}),this.register(function(t){return new TN(t)}),this.register(function(t){return new wN(t)}),this.register(function(t){return new gN(t)}),this.register(function(t){return new vN(t)}),this.register(function(t){return new _N(t)}),this.register(function(t){return new yN(t)}),this.register(function(t){return new dN(t)}),this.register(function(t){return new xN(t)}),this.register(function(t){return new mN(t)}),this.register(function(t){return new EN(t)}),this.register(function(t){return new SN(t)}),this.register(function(t){return new cN(t)}),this.register(function(t){return new bN(t)}),this.register(function(t){return new AN(t)})}load(e,t,n,s){const o=this;let l;if(this.resourcePath!=="")l=this.resourcePath;else if(this.path!==""){const d=el.extractUrlBase(e);l=el.resolveURL(d,this.path)}else l=el.extractUrlBase(e);this.manager.itemStart(e);const c=function(d){s?s(d):console.error(d),o.manager.itemError(e),o.manager.itemEnd(e)},f=new ax(this.manager);f.setPath(this.path),f.setResponseType("arraybuffer"),f.setRequestHeader(this.requestHeader),f.setWithCredentials(this.withCredentials),f.load(e,function(d){try{o.parse(d,l,function(p){t(p),o.manager.itemEnd(e)},c)}catch(p){c(p)}},n,c)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let o;const l={},c={},f=new TextDecoder;if(typeof e=="string")o=JSON.parse(e);else if(e instanceof ArrayBuffer)if(f.decode(new Uint8Array(e,0,4))===SS){try{l[wt.KHR_BINARY_GLTF]=new RN(e)}catch(m){s&&s(m);return}o=JSON.parse(l[wt.KHR_BINARY_GLTF].content)}else o=JSON.parse(f.decode(e));else o=e;if(o.asset===void 0||o.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const d=new HN(o,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});d.fileLoader.setRequestHeader(this.requestHeader);for(let p=0;p<this.pluginCallbacks.length;p++){const m=this.pluginCallbacks[p](d);m.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),c[m.name]=m,l[m.name]=!0}if(o.extensionsUsed)for(let p=0;p<o.extensionsUsed.length;++p){const m=o.extensionsUsed[p],v=o.extensionsRequired||[];switch(m){case wt.KHR_MATERIALS_UNLIT:l[m]=new fN;break;case wt.KHR_DRACO_MESH_COMPRESSION:l[m]=new CN(o,this.dracoLoader);break;case wt.KHR_TEXTURE_TRANSFORM:l[m]=new PN;break;case wt.KHR_MESH_QUANTIZATION:l[m]=new LN;break;default:v.indexOf(m)>=0&&c[m]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+m+'".')}}d.setExtensions(l),d.setPlugins(c),d.parse(n,s)}parseAsync(e,t){const n=this;return new Promise(function(s,o){n.parse(e,t,s,o)})}}function uN(){let r={};return{get:function(e){return r[e]},add:function(e,t){r[e]=t},remove:function(e){delete r[e]},removeAll:function(){r={}}}}const wt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class cN{constructor(e){this.parser=e,this.name=wt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){const o=t[n];o.extensions&&o.extensions[this.name]&&o.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,o.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let s=t.cache.get(n);if(s)return s;const o=t.json,f=((o.extensions&&o.extensions[this.name]||{}).lights||[])[e];let d;const p=new mt(16777215);f.color!==void 0&&p.setRGB(f.color[0],f.color[1],f.color[2],Vn);const m=f.range!==void 0?f.range:0;switch(f.type){case"directional":d=new lx(p),d.target.position.set(0,0,-1),d.add(d.target);break;case"point":d=new ox(p),d.distance=m;break;case"spot":d=new Yw(p),d.distance=m,f.spot=f.spot||{},f.spot.innerConeAngle=f.spot.innerConeAngle!==void 0?f.spot.innerConeAngle:0,f.spot.outerConeAngle=f.spot.outerConeAngle!==void 0?f.spot.outerConeAngle:Math.PI/4,d.angle=f.spot.outerConeAngle,d.penumbra=1-f.spot.innerConeAngle/f.spot.outerConeAngle,d.target.position.set(0,0,-1),d.add(d.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+f.type)}return d.position.set(0,0,0),Hi(d,f),f.intensity!==void 0&&(d.intensity=f.intensity),d.name=t.createUniqueName(f.name||"light_"+e),s=Promise.resolve(d),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,o=n.json.nodes[e],c=(o.extensions&&o.extensions[this.name]||{}).light;return c===void 0?null:this._loadLight(c).then(function(f){return n._getNodeRef(t.cache,c,f)})}}class fN{constructor(){this.name=wt.KHR_MATERIALS_UNLIT}getMaterialType(){return Fs}extendParams(e,t,n){const s=[];e.color=new mt(1,1,1),e.opacity=1;const o=t.pbrMetallicRoughness;if(o){if(Array.isArray(o.baseColorFactor)){const l=o.baseColorFactor;e.color.setRGB(l[0],l[1],l[2],Vn),e.opacity=l[3]}o.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",o.baseColorTexture,Sn))}return Promise.all(s)}}class dN{constructor(e){this.parser=e,this.name=wt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const o=s.extensions[this.name].emissiveStrength;return o!==void 0&&(t.emissiveIntensity=o),Promise.resolve()}}class hN{constructor(e){this.parser=e,this.name=wt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ji}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const o=[],l=s.extensions[this.name];if(l.clearcoatFactor!==void 0&&(t.clearcoat=l.clearcoatFactor),l.clearcoatTexture!==void 0&&o.push(n.assignTexture(t,"clearcoatMap",l.clearcoatTexture)),l.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=l.clearcoatRoughnessFactor),l.clearcoatRoughnessTexture!==void 0&&o.push(n.assignTexture(t,"clearcoatRoughnessMap",l.clearcoatRoughnessTexture)),l.clearcoatNormalTexture!==void 0&&(o.push(n.assignTexture(t,"clearcoatNormalMap",l.clearcoatNormalTexture)),l.clearcoatNormalTexture.scale!==void 0)){const c=l.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new dt(c,c)}return Promise.all(o)}}class pN{constructor(e){this.parser=e,this.name=wt.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ji}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const o=s.extensions[this.name];return t.dispersion=o.dispersion!==void 0?o.dispersion:0,Promise.resolve()}}class mN{constructor(e){this.parser=e,this.name=wt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ji}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const o=[],l=s.extensions[this.name];return l.iridescenceFactor!==void 0&&(t.iridescence=l.iridescenceFactor),l.iridescenceTexture!==void 0&&o.push(n.assignTexture(t,"iridescenceMap",l.iridescenceTexture)),l.iridescenceIor!==void 0&&(t.iridescenceIOR=l.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),l.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=l.iridescenceThicknessMinimum),l.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=l.iridescenceThicknessMaximum),l.iridescenceThicknessTexture!==void 0&&o.push(n.assignTexture(t,"iridescenceThicknessMap",l.iridescenceThicknessTexture)),Promise.all(o)}}class gN{constructor(e){this.parser=e,this.name=wt.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ji}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const o=[];t.sheenColor=new mt(0,0,0),t.sheenRoughness=0,t.sheen=1;const l=s.extensions[this.name];if(l.sheenColorFactor!==void 0){const c=l.sheenColorFactor;t.sheenColor.setRGB(c[0],c[1],c[2],Vn)}return l.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=l.sheenRoughnessFactor),l.sheenColorTexture!==void 0&&o.push(n.assignTexture(t,"sheenColorMap",l.sheenColorTexture,Sn)),l.sheenRoughnessTexture!==void 0&&o.push(n.assignTexture(t,"sheenRoughnessMap",l.sheenRoughnessTexture)),Promise.all(o)}}class vN{constructor(e){this.parser=e,this.name=wt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ji}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const o=[],l=s.extensions[this.name];return l.transmissionFactor!==void 0&&(t.transmission=l.transmissionFactor),l.transmissionTexture!==void 0&&o.push(n.assignTexture(t,"transmissionMap",l.transmissionTexture)),Promise.all(o)}}class _N{constructor(e){this.parser=e,this.name=wt.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ji}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const o=[],l=s.extensions[this.name];t.thickness=l.thicknessFactor!==void 0?l.thicknessFactor:0,l.thicknessTexture!==void 0&&o.push(n.assignTexture(t,"thicknessMap",l.thicknessTexture)),t.attenuationDistance=l.attenuationDistance||1/0;const c=l.attenuationColor||[1,1,1];return t.attenuationColor=new mt().setRGB(c[0],c[1],c[2],Vn),Promise.all(o)}}class yN{constructor(e){this.parser=e,this.name=wt.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ji}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const o=s.extensions[this.name];return t.ior=o.ior!==void 0?o.ior:1.5,Promise.resolve()}}class xN{constructor(e){this.parser=e,this.name=wt.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ji}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const o=[],l=s.extensions[this.name];t.specularIntensity=l.specularFactor!==void 0?l.specularFactor:1,l.specularTexture!==void 0&&o.push(n.assignTexture(t,"specularIntensityMap",l.specularTexture));const c=l.specularColorFactor||[1,1,1];return t.specularColor=new mt().setRGB(c[0],c[1],c[2],Vn),l.specularColorTexture!==void 0&&o.push(n.assignTexture(t,"specularColorMap",l.specularColorTexture,Sn)),Promise.all(o)}}class SN{constructor(e){this.parser=e,this.name=wt.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ji}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const o=[],l=s.extensions[this.name];return t.bumpScale=l.bumpFactor!==void 0?l.bumpFactor:1,l.bumpTexture!==void 0&&o.push(n.assignTexture(t,"bumpMap",l.bumpTexture)),Promise.all(o)}}class EN{constructor(e){this.parser=e,this.name=wt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ji}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const o=[],l=s.extensions[this.name];return l.anisotropyStrength!==void 0&&(t.anisotropy=l.anisotropyStrength),l.anisotropyRotation!==void 0&&(t.anisotropyRotation=l.anisotropyRotation),l.anisotropyTexture!==void 0&&o.push(n.assignTexture(t,"anisotropyMap",l.anisotropyTexture)),Promise.all(o)}}class MN{constructor(e){this.parser=e,this.name=wt.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const o=s.extensions[this.name],l=t.options.ktx2Loader;if(!l){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,o.source,l)}}class TN{constructor(e){this.parser=e,this.name=wt.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,n=this.parser,s=n.json,o=s.textures[e];if(!o.extensions||!o.extensions[t])return null;const l=o.extensions[t],c=s.images[l.source];let f=n.textureLoader;if(c.uri){const d=n.options.manager.getHandler(c.uri);d!==null&&(f=d)}return n.loadTextureImage(e,l.source,f)}}class wN{constructor(e){this.parser=e,this.name=wt.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,n=this.parser,s=n.json,o=s.textures[e];if(!o.extensions||!o.extensions[t])return null;const l=o.extensions[t],c=s.images[l.source];let f=n.textureLoader;if(c.uri){const d=n.options.manager.getHandler(c.uri);d!==null&&(f=d)}return n.loadTextureImage(e,l.source,f)}}class bN{constructor(e){this.name=wt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const s=n.extensions[this.name],o=this.parser.getDependency("buffer",s.buffer),l=this.parser.options.meshoptDecoder;if(!l||!l.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return o.then(function(c){const f=s.byteOffset||0,d=s.byteLength||0,p=s.count,m=s.byteStride,v=new Uint8Array(c,f,d);return l.decodeGltfBufferAsync?l.decodeGltfBufferAsync(p,m,v,s.mode,s.filter).then(function(y){return y.buffer}):l.ready.then(function(){const y=new ArrayBuffer(p*m);return l.decodeGltfBuffer(new Uint8Array(y),p,m,v,s.mode,s.filter),y})})}else return null}}class AN{constructor(e){this.name=wt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const s=t.meshes[n.mesh];for(const d of s.primitives)if(d.mode!==pi.TRIANGLES&&d.mode!==pi.TRIANGLE_STRIP&&d.mode!==pi.TRIANGLE_FAN&&d.mode!==void 0)return null;const l=n.extensions[this.name].attributes,c=[],f={};for(const d in l)c.push(this.parser.getDependency("accessor",l[d]).then(p=>(f[d]=p,f[d])));return c.length<1?null:(c.push(this.parser.createNodeMesh(e)),Promise.all(c).then(d=>{const p=d.pop(),m=p.isGroup?p.children:[p],v=d[0].count,y=[];for(const E of m){const M=new yt,S=new j,_=new $i,R=new j(1,1,1),C=new Tw(E.geometry,E.material,v);for(let b=0;b<v;b++)f.TRANSLATION&&S.fromBufferAttribute(f.TRANSLATION,b),f.ROTATION&&_.fromBufferAttribute(f.ROTATION,b),f.SCALE&&R.fromBufferAttribute(f.SCALE,b),C.setMatrixAt(b,M.compose(S,_,R));for(const b in f)if(b==="_COLOR_0"){const I=f[b];C.instanceColor=new up(I.array,I.itemSize,I.normalized)}else b!=="TRANSLATION"&&b!=="ROTATION"&&b!=="SCALE"&&E.geometry.setAttribute(b,f[b]);en.prototype.copy.call(C,E),this.parser.assignFinalMaterial(C),y.push(C)}return p.isGroup?(p.clear(),p.add(...y),p):y[0]}))}}const SS="glTF",$o=12,ny={JSON:1313821514,BIN:5130562};class RN{constructor(e){this.name=wt.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,$o),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==SS)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-$o,o=new DataView(e,$o);let l=0;for(;l<s;){const c=o.getUint32(l,!0);l+=4;const f=o.getUint32(l,!0);if(l+=4,f===ny.JSON){const d=new Uint8Array(e,$o+l,c);this.content=n.decode(d)}else if(f===ny.BIN){const d=$o+l;this.body=e.slice(d,d+c)}l+=c}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class CN{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=wt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,s=this.dracoLoader,o=e.extensions[this.name].bufferView,l=e.extensions[this.name].attributes,c={},f={},d={};for(const p in l){const m=Rp[p]||p.toLowerCase();c[m]=l[p]}for(const p in e.attributes){const m=Rp[p]||p.toLowerCase();if(l[p]!==void 0){const v=n.accessors[e.attributes[p]],y=Ha[v.componentType];d[m]=y.name,f[m]=v.normalized===!0}}return t.getDependency("bufferView",o).then(function(p){return new Promise(function(m,v){s.decodeDracoFile(p,function(y){for(const E in y.attributes){const M=y.attributes[E],S=f[E];S!==void 0&&(M.normalized=S)}m(y)},c,d,Vn,v)})})}}class PN{constructor(){this.name=wt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class LN{constructor(){this.name=wt.KHR_MESH_QUANTIZATION}}class ES extends Sl{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,o=e*s*3+s;for(let l=0;l!==s;l++)t[l]=n[o+l];return t}interpolate_(e,t,n,s){const o=this.resultBuffer,l=this.sampleValues,c=this.valueSize,f=c*2,d=c*3,p=s-t,m=(n-t)/p,v=m*m,y=v*m,E=e*d,M=E-d,S=-2*y+3*v,_=y-v,R=1-S,C=_-v+m;for(let b=0;b!==c;b++){const I=l[M+b+c],U=l[M+b+f]*p,F=l[E+b+c],X=l[E+b]*p;o[b]=R*I+C*U+S*F+_*X}return o}}const IN=new $i;class DN extends ES{interpolate_(e,t,n,s){const o=super.interpolate_(e,t,n,s);return IN.fromArray(o).normalize().toArray(o),o}}const pi={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Ha={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},iy={9728:Hn,9729:ri,9984:Ly,9985:dc,9986:Ko,9987:_r},ry={33071:rs,33648:Ec,10497:ja},vh={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Rp={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ts={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},NN={CUBICSPLINE:void 0,LINEAR:cl,STEP:ul},_h={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function UN(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new Qp({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Mr})),r.DefaultMaterial}function Is(r,e,t){for(const n in t.extensions)r[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Hi(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function FN(r,e,t){let n=!1,s=!1,o=!1;for(let d=0,p=e.length;d<p;d++){const m=e[d];if(m.POSITION!==void 0&&(n=!0),m.NORMAL!==void 0&&(s=!0),m.COLOR_0!==void 0&&(o=!0),n&&s&&o)break}if(!n&&!s&&!o)return Promise.resolve(r);const l=[],c=[],f=[];for(let d=0,p=e.length;d<p;d++){const m=e[d];if(n){const v=m.POSITION!==void 0?t.getDependency("accessor",m.POSITION):r.attributes.position;l.push(v)}if(s){const v=m.NORMAL!==void 0?t.getDependency("accessor",m.NORMAL):r.attributes.normal;c.push(v)}if(o){const v=m.COLOR_0!==void 0?t.getDependency("accessor",m.COLOR_0):r.attributes.color;f.push(v)}}return Promise.all([Promise.all(l),Promise.all(c),Promise.all(f)]).then(function(d){const p=d[0],m=d[1],v=d[2];return n&&(r.morphAttributes.position=p),s&&(r.morphAttributes.normal=m),o&&(r.morphAttributes.color=v),r.morphTargetsRelative=!0,r})}function ON(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)r.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(r.morphTargetInfluences.length===t.length){r.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)r.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function kN(r){let e;const t=r.extensions&&r.extensions[wt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+yh(t.attributes):e=r.indices+":"+yh(r.attributes)+":"+r.mode,r.targets!==void 0)for(let n=0,s=r.targets.length;n<s;n++)e+=":"+yh(r.targets[n]);return e}function yh(r){let e="";const t=Object.keys(r).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+r[t[n]]+";";return e}function Cp(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function BN(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":r.search(/\.ktx2($|\?)/i)>0||r.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const zN=new yt;class HN{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new uN,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,o=!1,l=-1;if(typeof navigator<"u"){const c=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(c)===!0;const f=c.match(/Version\/(\d+)/);s=n&&f?parseInt(f[1],10):-1,o=c.indexOf("Firefox")>-1,l=o?c.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||o&&l<98?this.textureLoader=new jw(this.options.manager):this.textureLoader=new Zw(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new ax(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,s=this.json,o=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(l){return l._markDefs&&l._markDefs()}),Promise.all(this._invokeAll(function(l){return l.beforeRoot&&l.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(l){const c={scene:l[0][s.scene||0],scenes:l[0],animations:l[1],cameras:l[2],asset:s.asset,parser:n,userData:{}};return Is(o,c,s),Hi(c,s),Promise.all(n._invokeAll(function(f){return f.afterRoot&&f.afterRoot(c)})).then(function(){for(const f of c.scenes)f.updateMatrixWorld();e(c)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,o=t.length;s<o;s++){const l=t[s].joints;for(let c=0,f=l.length;c<f;c++)e[l[c]].isBone=!0}for(let s=0,o=e.length;s<o;s++){const l=e[s];l.mesh!==void 0&&(this._addNodeRef(this.meshCache,l.mesh),l.skin!==void 0&&(n[l.mesh].isSkinnedMesh=!0)),l.camera!==void 0&&this._addNodeRef(this.cameraCache,l.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const s=n.clone(),o=(l,c)=>{const f=this.associations.get(l);f!=null&&this.associations.set(c,f);for(const[d,p]of l.children.entries())o(p,c.children[d])};return o(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const s=e(t[n]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let s=0;s<t.length;s++){const o=e(t[s]);o&&n.push(o)}return n}getDependency(e,t){const n=e+":"+t;let s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(o){return o.loadNode&&o.loadNode(t)});break;case"mesh":s=this._invokeOne(function(o){return o.loadMesh&&o.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(o){return o.loadBufferView&&o.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(o){return o.loadMaterial&&o.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(o){return o.loadTexture&&o.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(o){return o.loadAnimation&&o.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(o){return o!=this&&o.getDependency&&o.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(o,l){return n.getDependency(e,l)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[wt.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(o,l){n.load(el.resolveURL(t.uri,s.path),o,void 0,function(){l(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const s=t.byteLength||0,o=t.byteOffset||0;return n.slice(o,o+s)})}loadAccessor(e){const t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){const l=vh[s.type],c=Ha[s.componentType],f=s.normalized===!0,d=new c(s.count*l);return Promise.resolve(new In(d,l,f))}const o=[];return s.bufferView!==void 0?o.push(this.getDependency("bufferView",s.bufferView)):o.push(null),s.sparse!==void 0&&(o.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),o.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(o).then(function(l){const c=l[0],f=vh[s.type],d=Ha[s.componentType],p=d.BYTES_PER_ELEMENT,m=p*f,v=s.byteOffset||0,y=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,E=s.normalized===!0;let M,S;if(y&&y!==m){const _=Math.floor(v/y),R="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+_+":"+s.count;let C=t.cache.get(R);C||(M=new d(c,_*y,s.count*y/p),C=new yw(M,y/p),t.cache.add(R,C)),S=new Yp(C,f,v%y/p,E)}else c===null?M=new d(s.count*f):M=new d(c,v,s.count*f),S=new In(M,f,E);if(s.sparse!==void 0){const _=vh.SCALAR,R=Ha[s.sparse.indices.componentType],C=s.sparse.indices.byteOffset||0,b=s.sparse.values.byteOffset||0,I=new R(l[1],C,s.sparse.count*_),U=new d(l[2],b,s.sparse.count*f);c!==null&&(S=new In(S.array.slice(),S.itemSize,S.normalized)),S.normalized=!1;for(let F=0,X=I.length;F<X;F++){const P=I[F];if(S.setX(P,U[F*f]),f>=2&&S.setY(P,U[F*f+1]),f>=3&&S.setZ(P,U[F*f+2]),f>=4&&S.setW(P,U[F*f+3]),f>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}S.normalized=E}return S})}loadTexture(e){const t=this.json,n=this.options,o=t.textures[e].source,l=t.images[o];let c=this.textureLoader;if(l.uri){const f=n.manager.getHandler(l.uri);f!==null&&(c=f)}return this.loadTextureImage(e,o,c)}loadTextureImage(e,t,n){const s=this,o=this.json,l=o.textures[e],c=o.images[t],f=(c.uri||c.bufferView)+":"+l.sampler;if(this.textureCache[f])return this.textureCache[f];const d=this.loadImageSource(t,n).then(function(p){p.flipY=!1,p.name=l.name||c.name||"",p.name===""&&typeof c.uri=="string"&&c.uri.startsWith("data:image/")===!1&&(p.name=c.uri);const v=(o.samplers||{})[l.sampler]||{};return p.magFilter=iy[v.magFilter]||ri,p.minFilter=iy[v.minFilter]||_r,p.wrapS=ry[v.wrapS]||ja,p.wrapT=ry[v.wrapT]||ja,p.generateMipmaps=!p.isCompressedTexture&&p.minFilter!==Hn&&p.minFilter!==ri,s.associations.set(p,{textures:e}),p}).catch(function(){return null});return this.textureCache[f]=d,d}loadImageSource(e,t){const n=this,s=this.json,o=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(m=>m.clone());const l=s.images[e],c=self.URL||self.webkitURL;let f=l.uri||"",d=!1;if(l.bufferView!==void 0)f=n.getDependency("bufferView",l.bufferView).then(function(m){d=!0;const v=new Blob([m],{type:l.mimeType});return f=c.createObjectURL(v),f});else if(l.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const p=Promise.resolve(f).then(function(m){return new Promise(function(v,y){let E=v;t.isImageBitmapLoader===!0&&(E=function(M){const S=new _n(M);S.needsUpdate=!0,v(S)}),t.load(el.resolveURL(m,o.path),E,void 0,y)})}).then(function(m){return d===!0&&c.revokeObjectURL(f),Hi(m,l),m.userData.mimeType=l.mimeType||BN(l.uri),m}).catch(function(m){throw console.error("THREE.GLTFLoader: Couldn't load texture",f),m});return this.sourceCache[e]=p,p}assignTexture(e,t,n,s){const o=this;return this.getDependency("texture",n.index).then(function(l){if(!l)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(l=l.clone(),l.channel=n.texCoord),o.extensions[wt.KHR_TEXTURE_TRANSFORM]){const c=n.extensions!==void 0?n.extensions[wt.KHR_TEXTURE_TRANSFORM]:void 0;if(c){const f=o.associations.get(l);l=o.extensions[wt.KHR_TEXTURE_TRANSFORM].extendTexture(l,c),o.associations.set(l,f)}}return s!==void 0&&(l.colorSpace=s),e[t]=l,l})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const s=t.attributes.tangent===void 0,o=t.attributes.color!==void 0,l=t.attributes.normal===void 0;if(e.isPoints){const c="PointsMaterial:"+n.uuid;let f=this.cache.get(c);f||(f=new Zp,Xi.prototype.copy.call(f,n),f.color.copy(n.color),f.map=n.map,f.sizeAttenuation=!1,this.cache.add(c,f)),n=f}else if(e.isLine){const c="LineBasicMaterial:"+n.uuid;let f=this.cache.get(c);f||(f=new ex,Xi.prototype.copy.call(f,n),f.color.copy(n.color),f.map=n.map,this.cache.add(c,f)),n=f}if(s||o||l){let c="ClonedMaterial:"+n.uuid+":";s&&(c+="derivative-tangents:"),o&&(c+="vertex-colors:"),l&&(c+="flat-shading:");let f=this.cache.get(c);f||(f=n.clone(),o&&(f.vertexColors=!0),l&&(f.flatShading=!0),s&&(f.normalScale&&(f.normalScale.y*=-1),f.clearcoatNormalScale&&(f.clearcoatNormalScale.y*=-1)),this.cache.add(c,f),this.associations.set(f,this.associations.get(n))),n=f}e.material=n}getMaterialType(){return Qp}loadMaterial(e){const t=this,n=this.json,s=this.extensions,o=n.materials[e];let l;const c={},f=o.extensions||{},d=[];if(f[wt.KHR_MATERIALS_UNLIT]){const m=s[wt.KHR_MATERIALS_UNLIT];l=m.getMaterialType(),d.push(m.extendParams(c,o,t))}else{const m=o.pbrMetallicRoughness||{};if(c.color=new mt(1,1,1),c.opacity=1,Array.isArray(m.baseColorFactor)){const v=m.baseColorFactor;c.color.setRGB(v[0],v[1],v[2],Vn),c.opacity=v[3]}m.baseColorTexture!==void 0&&d.push(t.assignTexture(c,"map",m.baseColorTexture,Sn)),c.metalness=m.metallicFactor!==void 0?m.metallicFactor:1,c.roughness=m.roughnessFactor!==void 0?m.roughnessFactor:1,m.metallicRoughnessTexture!==void 0&&(d.push(t.assignTexture(c,"metalnessMap",m.metallicRoughnessTexture)),d.push(t.assignTexture(c,"roughnessMap",m.metallicRoughnessTexture))),l=this._invokeOne(function(v){return v.getMaterialType&&v.getMaterialType(e)}),d.push(Promise.all(this._invokeAll(function(v){return v.extendMaterialParams&&v.extendMaterialParams(e,c)})))}o.doubleSided===!0&&(c.side=Gi);const p=o.alphaMode||_h.OPAQUE;if(p===_h.BLEND?(c.transparent=!0,c.depthWrite=!1):(c.transparent=!1,p===_h.MASK&&(c.alphaTest=o.alphaCutoff!==void 0?o.alphaCutoff:.5)),o.normalTexture!==void 0&&l!==Fs&&(d.push(t.assignTexture(c,"normalMap",o.normalTexture)),c.normalScale=new dt(1,1),o.normalTexture.scale!==void 0)){const m=o.normalTexture.scale;c.normalScale.set(m,m)}if(o.occlusionTexture!==void 0&&l!==Fs&&(d.push(t.assignTexture(c,"aoMap",o.occlusionTexture)),o.occlusionTexture.strength!==void 0&&(c.aoMapIntensity=o.occlusionTexture.strength)),o.emissiveFactor!==void 0&&l!==Fs){const m=o.emissiveFactor;c.emissive=new mt().setRGB(m[0],m[1],m[2],Vn)}return o.emissiveTexture!==void 0&&l!==Fs&&d.push(t.assignTexture(c,"emissiveMap",o.emissiveTexture,Sn)),Promise.all(d).then(function(){const m=new l(c);return o.name&&(m.name=o.name),Hi(m,o),t.associations.set(m,{materials:e}),o.extensions&&Is(s,m,o),m})}createUniqueName(e){const t=Ft.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,s=this.primitiveCache;function o(c){return n[wt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(c,t).then(function(f){return sy(f,c,t)})}const l=[];for(let c=0,f=e.length;c<f;c++){const d=e[c],p=kN(d),m=s[p];if(m)l.push(m.promise);else{let v;d.extensions&&d.extensions[wt.KHR_DRACO_MESH_COMPRESSION]?v=o(d):v=sy(new _i,d,t),s[p]={primitive:d,promise:v},l.push(v)}}return Promise.all(l)}loadMesh(e){const t=this,n=this.json,s=this.extensions,o=n.meshes[e],l=o.primitives,c=[];for(let f=0,d=l.length;f<d;f++){const p=l[f].material===void 0?UN(this.cache):this.getDependency("material",l[f].material);c.push(p)}return c.push(t.loadGeometries(l)),Promise.all(c).then(function(f){const d=f.slice(0,f.length-1),p=f[f.length-1],m=[];for(let y=0,E=p.length;y<E;y++){const M=p[y],S=l[y];let _;const R=d[y];if(S.mode===pi.TRIANGLES||S.mode===pi.TRIANGLE_STRIP||S.mode===pi.TRIANGLE_FAN||S.mode===void 0)_=o.isSkinnedMesh===!0?new Sw(M,R):new qn(M,R),_.isSkinnedMesh===!0&&_.normalizeSkinWeights(),S.mode===pi.TRIANGLE_STRIP?_.geometry=ty(_.geometry,By):S.mode===pi.TRIANGLE_FAN&&(_.geometry=ty(_.geometry,op));else if(S.mode===pi.LINES)_=new Rw(M,R);else if(S.mode===pi.LINE_STRIP)_=new qp(M,R);else if(S.mode===pi.LINE_LOOP)_=new Cw(M,R);else if(S.mode===pi.POINTS)_=new tx(M,R);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+S.mode);Object.keys(_.geometry.morphAttributes).length>0&&ON(_,o),_.name=t.createUniqueName(o.name||"mesh_"+e),Hi(_,o),S.extensions&&Is(s,_,S),t.assignFinalMaterial(_),m.push(_)}for(let y=0,E=m.length;y<E;y++)t.associations.set(m[y],{meshes:e,primitives:y});if(m.length===1)return o.extensions&&Is(s,m[0],o),m[0];const v=new Os;o.extensions&&Is(s,v,o),t.associations.set(v,{meshes:e});for(let y=0,E=m.length;y<E;y++)v.add(m[y]);return v})}loadCamera(e){let t;const n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Bn(Vy.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new tm(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Hi(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let s=0,o=t.joints.length;s<o;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){const o=s.pop(),l=s,c=[],f=[];for(let d=0,p=l.length;d<p;d++){const m=l[d];if(m){c.push(m);const v=new yt;o!==null&&v.fromArray(o.array,d*16),f.push(v)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[d])}return new $p(c,f)})}loadAnimation(e){const t=this.json,n=this,s=t.animations[e],o=s.name?s.name:"animation_"+e,l=[],c=[],f=[],d=[],p=[];for(let m=0,v=s.channels.length;m<v;m++){const y=s.channels[m],E=s.samplers[y.sampler],M=y.target,S=M.node,_=s.parameters!==void 0?s.parameters[E.input]:E.input,R=s.parameters!==void 0?s.parameters[E.output]:E.output;M.node!==void 0&&(l.push(this.getDependency("node",S)),c.push(this.getDependency("accessor",_)),f.push(this.getDependency("accessor",R)),d.push(E),p.push(M))}return Promise.all([Promise.all(l),Promise.all(c),Promise.all(f),Promise.all(d),Promise.all(p)]).then(function(m){const v=m[0],y=m[1],E=m[2],M=m[3],S=m[4],_=[];for(let C=0,b=v.length;C<b;C++){const I=v[C],U=y[C],F=E[C],X=M[C],P=S[C];if(I===void 0)continue;I.updateMatrix&&I.updateMatrix();const L=n._createAnimationTracks(I,U,F,X,P);if(L)for(let H=0;H<L.length;H++)_.push(L[H])}const R=new kw(o,void 0,_);return Hi(R,s),R})}createNodeMesh(e){const t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(o){const l=n._getNodeRef(n.meshCache,s.mesh,o);return s.weights!==void 0&&l.traverse(function(c){if(c.isMesh)for(let f=0,d=s.weights.length;f<d;f++)c.morphTargetInfluences[f]=s.weights[f]}),l})}loadNode(e){const t=this.json,n=this,s=t.nodes[e],o=n._loadNodeShallow(e),l=[],c=s.children||[];for(let d=0,p=c.length;d<p;d++)l.push(n.getDependency("node",c[d]));const f=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([o,Promise.all(l),f]).then(function(d){const p=d[0],m=d[1],v=d[2];v!==null&&p.traverse(function(y){y.isSkinnedMesh&&y.bind(v,zN)});for(let y=0,E=m.length;y<E;y++)p.add(m[y]);return p})}_loadNodeShallow(e){const t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const o=t.nodes[e],l=o.name?s.createUniqueName(o.name):"",c=[],f=s._invokeOne(function(d){return d.createNodeMesh&&d.createNodeMesh(e)});return f&&c.push(f),o.camera!==void 0&&c.push(s.getDependency("camera",o.camera).then(function(d){return s._getNodeRef(s.cameraCache,o.camera,d)})),s._invokeAll(function(d){return d.createNodeAttachment&&d.createNodeAttachment(e)}).forEach(function(d){c.push(d)}),this.nodeCache[e]=Promise.all(c).then(function(d){let p;if(o.isBone===!0?p=new Jy:d.length>1?p=new Os:d.length===1?p=d[0]:p=new en,p!==d[0])for(let m=0,v=d.length;m<v;m++)p.add(d[m]);if(o.name&&(p.userData.name=o.name,p.name=l),Hi(p,o),o.extensions&&Is(n,p,o),o.matrix!==void 0){const m=new yt;m.fromArray(o.matrix),p.applyMatrix4(m)}else o.translation!==void 0&&p.position.fromArray(o.translation),o.rotation!==void 0&&p.quaternion.fromArray(o.rotation),o.scale!==void 0&&p.scale.fromArray(o.scale);if(!s.associations.has(p))s.associations.set(p,{});else if(o.mesh!==void 0&&s.meshCache.refs[o.mesh]>1){const m=s.associations.get(p);s.associations.set(p,{...m})}return s.associations.get(p).nodes=e,p}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],s=this,o=new Os;n.name&&(o.name=s.createUniqueName(n.name)),Hi(o,n),n.extensions&&Is(t,o,n);const l=n.nodes||[],c=[];for(let f=0,d=l.length;f<d;f++)c.push(s.getDependency("node",l[f]));return Promise.all(c).then(function(f){for(let p=0,m=f.length;p<m;p++)o.add(f[p]);const d=p=>{const m=new Map;for(const[v,y]of s.associations)(v instanceof Xi||v instanceof _n)&&m.set(v,y);return p.traverse(v=>{const y=s.associations.get(v);y!=null&&m.set(v,y)}),m};return s.associations=d(o),o})}_createAnimationTracks(e,t,n,s,o){const l=[],c=e.name?e.name:e.uuid,f=[];ts[o.path]===ts.weights?e.traverse(function(v){v.morphTargetInfluences&&f.push(v.name?v.name:v.uuid)}):f.push(c);let d;switch(ts[o.path]){case ts.weights:d=$a;break;case ts.rotation:d=Ka;break;case ts.translation:case ts.scale:d=qa;break;default:n.itemSize===1?d=$a:d=qa;break}const p=s.interpolation!==void 0?NN[s.interpolation]:cl,m=this._getArrayFromAccessor(n);for(let v=0,y=f.length;v<y;v++){const E=new d(f[v]+"."+ts[o.path],t.array,m,p);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(E),l.push(E)}return l}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Cp(t.constructor),s=new Float32Array(t.length);for(let o=0,l=t.length;o<l;o++)s[o]=t[o]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const s=this instanceof Ka?DN:ES;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function VN(r,e,t){const n=e.attributes,s=new qi;if(n.POSITION!==void 0){const c=t.json.accessors[n.POSITION],f=c.min,d=c.max;if(f!==void 0&&d!==void 0){if(s.set(new j(f[0],f[1],f[2]),new j(d[0],d[1],d[2])),c.normalized){const p=Cp(Ha[c.componentType]);s.min.multiplyScalar(p),s.max.multiplyScalar(p)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const o=e.targets;if(o!==void 0){const c=new j,f=new j;for(let d=0,p=o.length;d<p;d++){const m=o[d];if(m.POSITION!==void 0){const v=t.json.accessors[m.POSITION],y=v.min,E=v.max;if(y!==void 0&&E!==void 0){if(f.setX(Math.max(Math.abs(y[0]),Math.abs(E[0]))),f.setY(Math.max(Math.abs(y[1]),Math.abs(E[1]))),f.setZ(Math.max(Math.abs(y[2]),Math.abs(E[2]))),v.normalized){const M=Cp(Ha[v.componentType]);f.multiplyScalar(M)}c.max(f)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(c)}r.boundingBox=s;const l=new Zi;s.getCenter(l.center),l.radius=s.min.distanceTo(s.max)/2,r.boundingSphere=l}function sy(r,e,t){const n=e.attributes,s=[];function o(l,c){return t.getDependency("accessor",l).then(function(f){r.setAttribute(c,f)})}for(const l in n){const c=Rp[l]||l.toLowerCase();c in r.attributes||s.push(o(n[l],c))}if(e.indices!==void 0&&!r.index){const l=t.getDependency("accessor",e.indices).then(function(c){r.setIndex(c)});s.push(l)}return Rt.workingColorSpace!==Vn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Rt.workingColorSpace}" not supported.`),Hi(r,e),VN(r,e,t),Promise.all(s).then(function(){return e.targets!==void 0?FN(r,e.targets,t):r})}const GN="/birthday/assets/cake2-QbHuqy3S.glb",WN="/birthday/assets/hbd-CJPPODw7.mp3",jN="/birthday/assets/cakegirl-C3nyhpJS.png",XN=()=>{const r=ae.useRef(null),e=ae.useRef(null),t=ae.useRef(null),[n,s]=ae.useState(!1);return ae.useEffect(()=>{const o=new Audio(WN);return o.loop=!0,o.volume=.4,o.muted=!0,e.current=o,o.play().then(()=>{t.current=setTimeout(()=>{e.current&&(e.current.muted=!1)},100)}).catch(()=>{}),()=>{t.current&&clearTimeout(t.current),e.current&&(e.current.pause(),e.current.currentTime=0,e.current=null)}},[]),ae.useEffect(()=>{if(!r.current)return;const o=r.current,l=new _w,c=o.clientWidth,f=o.clientHeight,d=new Bn(75,c/f,.1,1e3);d.position.set(3,3,3);const p=new j2({antialias:!0});p.setSize(c,f),p.setPixelRatio(window.devicePixelRatio),o.appendChild(p.domElement);const m=new Jp(50,32,32),v=new Tr({side:zn,uniforms:{topColor:{value:new mt("#ffd6e0")},bottomColor:{value:new mt("#fff1f2")},offset:{value:33},exponent:{value:.6}},vertexShader:`
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
      `}),y=new qn(m,v);l.add(y);const E=[{top:"#ffd6e0",bottom:"#fff1f2"},{top:"#cdb4db",bottom:"#e0f2fe"},{top:"#bbf7d0",bottom:"#ecfeff"},{top:"#fde68a",bottom:"#fff7ed"}];let M=0,S=0;l.add(new qw(16777215,.9));const _=new lx(16777215,1.5);_.position.set(5,10,5),l.add(_);const R=new ox(16762967,1.4,10);R.position.set(0,2.5,0),l.add(R);const C=new KD(d,p.domElement);C.enableZoom=!1,C.enableDamping=!0,C.target.set(0,1,0);const b=new _i,I=300,U=new Float32Array(I*3);for(let re=0;re<U.length;re++)U[re]=(Math.random()-.5)*10;b.setAttribute("position",new In(U,3));const F=new Zp({color:16758531,size:.03,transparent:!0,opacity:.8}),X=new tx(b,F);l.add(X);let P=null,L=0,H=0;new lN().load(GN,re=>{P=re.scene,P.scale.set(.4,.55,.4);const le=new qi().setFromObject(P),z=le.getCenter(new j);P.position.sub(z),L=le.getSize(new j).y/2,P.position.y=L,l.add(P)});let ie;const he=()=>{ie=requestAnimationFrame(he),P&&(H+=.01,P.position.y=L+Math.sin(H)*.08,P.rotation.y+=.003),X.rotation.y+=5e-4,R.intensity=1.2+Math.sin(Date.now()*.01)*.2,d.position.x=3+Math.sin(Date.now()*5e-4)*.2,d.lookAt(0,1,0),S+=.05,S>5&&(S=0,M=(M+1)%E.length,y.material.uniforms.topColor.value.set(E[M].top),y.material.uniforms.bottomColor.value.set(E[M].bottom)),C.update(),p.render(l,d)};he();const ue=()=>{if(!o)return;const re=o.clientWidth,le=o.clientHeight;d.aspect=re/le,d.updateProjectionMatrix(),p.setSize(re,le)};return window.addEventListener("resize",ue),()=>{window.removeEventListener("resize",ue),cancelAnimationFrame(ie),C.dispose(),p.dispose(),o&&p.domElement&&o.contains(p.domElement)&&o.removeChild(p.domElement)}},[]),ae.useEffect(()=>{setTimeout(()=>{s(!0)},1e4)},[]),Re.jsxs("div",{style:{position:"relative",width:"100%",height:"100vh"},children:[Re.jsxs("div",{style:{position:"absolute",top:"8%",width:"100%",textAlign:"center",fontSize:"1.6rem",fontWeight:"bold",color:"#ff4d6d",textShadow:"0 0 20px rgba(255,77,109,0.6)",zIndex:10,animation:"pulse 2s infinite",pointerEvents:"none"},children:["🎉 Happy Birthday 🎉",Re.jsx("div",{children:"Suganthi"})]}),n&&Re.jsx("div",{className:"absolute bottom-20 right-2 ",children:Re.jsx("button",{className:"bg-orange-600 text-white rounded-full shadow p-3",children:Re.jsx("a",{href:"tel:+919384591394",children:"Tap here"})})}),Re.jsxs("div",{className:"flex flex-col absolute bottom-32 left-0 h-24 w-24 m-1",children:[Re.jsx("img",{className:"",src:jN,alt:""}),Re.jsx("p",{className:"w-36 text-orange-500 border text-center bg-white rounded-full p-2 shadow",children:"This is for you, let’s eat."})]}),Re.jsx("div",{ref:r,style:{width:"100%",height:"100%"}})]})},YN=()=>Re.jsx(XN,{});function $N(){const{theme:r,setTheme:e}=ae.useContext(px);return cs().pathname.startsWith("/gift/"),Re.jsx("div",{className:"h-full bg-[var(--color-bg)]",children:Re.jsxs(o1,{children:[Re.jsx(Da,{path:"/",element:Re.jsx(X2,{})}),Re.jsx(Da,{path:"/game",element:Re.jsx(AD,{})}),Re.jsx(Da,{path:"/gift",element:Re.jsx(CD,{})}),Re.jsx(Da,{path:"/gift/memory",element:Re.jsx(YD,{})}),Re.jsx(Da,{path:"/wish",element:Re.jsx(YN,{})})]})})}function KN(){return Re.jsx(Y2,{children:Re.jsx($N,{})})}cM.createRoot(document.getElementById("root")).render(Re.jsx(Pc.StrictMode,{children:Re.jsxs(L1,{basename:"/birthday",children:[console.log("Router OK"),Re.jsx(KN,{})]})}));
