import{I as p,al as L,ai as B,aB as M,aC as N,W as S,an as j,A as m,a8 as U,aa as $,D as x,ad as O,aD as K,aE as z,P as f,N as D,J as F,aF as I,aG as Q,at as X,aH as A,O as w,am as Z,aI as ee,aJ as re,ae as te,aK as ne,G as ae,p as se,b as ie,h as oe,a4 as ue,n as H,s as fe,y as ce,j as le}from"./utils.DY47F48y.js";function Ee(e){p&&L(e)!==null&&B(e)}let V=!1;function de(){V||(V=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{var r;if(!e.defaultPrevented)for(const t of e.target.elements)(r=t.__on_r)==null||r.call(t)})},{capture:!0}))}function we(e,r,t,s=!0){s&&t();for(var a of r)e.addEventListener(a,t);M(()=>{for(var n of r)e.removeEventListener(n,t)})}function G(e){var r=j,t=m;N(null),S(null);try{return e()}finally{N(r),S(t)}}function Te(e,r,t,s=t){e.addEventListener(r,()=>G(t));const a=e.__on_r;a?e.__on_r=()=>{a(),s()}:e.__on_r=s,de()}const _e=new Set,W=new Set;function ve(e,r,t,s){function a(n){if(s.capture||b.call(r,n),!n.cancelBubble)return G(()=>t.call(this,n))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?U(()=>{r.addEventListener(e,a,s)}):r.addEventListener(e,a,s),a}function Le(e,r,t,s,a){var n={capture:s,passive:a},i=ve(e,r,t,n);(r===document.body||r===window||r===document)&&M(()=>{r.removeEventListener(e,i,n)})}function b(e){var C;var r=this,t=r.ownerDocument,s=e.type,a=((C=e.composedPath)==null?void 0:C.call(e))||[],n=a[0]||e.target,i=0,_=e.__root;if(_){var l=a.indexOf(_);if(l!==-1&&(r===document||r===window)){e.__root=r;return}var h=a.indexOf(r);if(h===-1)return;l<=h&&(i=l)}if(n=a[i]||e.target,n!==r){$(e,"currentTarget",{configurable:!0,get(){return n||t}});var R=j,c=m;N(null),S(null);try{for(var o,u=[];n!==null;){var d=n.assignedSlot||n.parentNode||n.host||null;try{var g=n["__"+s];if(g!==void 0&&!n.disabled)if(x(g)){var[q,...J]=g;q.apply(n,[e,...J])}else g.call(n,e)}catch(E){o?u.push(E):o=E}if(e.cancelBubble||d===r||d===null)break;n=d}if(o){for(let E of u)queueMicrotask(()=>{throw E});throw o}}finally{e.__root=r,delete e.currentTarget,N(R),S(c)}}}function pe(e){var r=document.createElement("template");return r.innerHTML=e,r.content}function v(e,r){var t=m;t.nodes_start===null&&(t.nodes_start=e,t.nodes_end=r)}function Ne(e,r){var t=(r&K)!==0,s=(r&z)!==0,a,n=!e.startsWith("<!>");return()=>{if(p)return v(f,null),f;a===void 0&&(a=pe(n?e:"<!>"+e),t||(a=L(a)));var i=s?document.importNode(a,!0):a.cloneNode(!0);if(t){var _=L(i),l=i.lastChild;v(_,l)}else v(i,i);return i}}function Se(e=""){if(!p){var r=O(e+"");return v(r,r),r}var t=f;return t.nodeType!==3&&(t.before(t=O()),D(t)),v(t,t),t}function Oe(){if(p)return v(f,null),f;var e=document.createDocumentFragment(),r=document.createComment(""),t=O();return e.append(r,t),v(r,t),e}function Re(e,r){if(p){m.nodes_end=f,F();return}e!==null&&e.before(r)}const he=["touchstart","touchmove"];function ge(e){return he.includes(e)}let k=!0;function Ae(e,r){var t=r==null?"":typeof r=="object"?r+"":r;t!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=t,e.nodeValue=t==null?"":t+"")}function ye(e,r){return Y(e,r)}function De(e,r){I(),r.intro=r.intro??!1;const t=r.target,s=p,a=f;try{for(var n=L(t);n&&(n.nodeType!==8||n.data!==Q);)n=X(n);if(!n)throw A;w(!0),D(n),F();const i=Y(e,{...r,anchor:n});if(f===null||f.nodeType!==8||f.data!==Z)throw ee(),A;return w(!1),i}catch(i){if(i===A)return r.recover===!1&&re(),I(),B(t),w(!1),ye(e,r);throw i}finally{w(s),D(a)}}const y=new Map;function Y(e,{target:r,anchor:t,props:s={},events:a,context:n,intro:i=!0}){I();var _=new Set,l=c=>{for(var o=0;o<c.length;o++){var u=c[o];if(!_.has(u)){_.add(u);var d=ge(u);r.addEventListener(u,b,{passive:d});var g=y.get(u);g===void 0?(document.addEventListener(u,b,{passive:d}),y.set(u,1)):y.set(u,g+1)}}};l(te(_e)),W.add(l);var h=void 0,R=ne(()=>{var c=t??r.appendChild(O());return ae(()=>{if(n){se({});var o=oe;o.c=n}a&&(s.$$events=a),p&&v(c,null),k=i,h=e(c,s)||{},k=!0,p&&(m.nodes_end=f),n&&ie()}),()=>{var d;for(var o of _){r.removeEventListener(o,b);var u=y.get(o);--u===0?(document.removeEventListener(o,b),y.delete(o)):y.set(o,u)}W.delete(l),P.delete(h),c!==t&&((d=c.parentNode)==null||d.removeChild(c))}});return P.set(h,R),h}let P=new WeakMap;function Ie(e){const r=P.get(e);r&&r()}let T=!1;function Pe(e,r,t){const s=t[r]??(t[r]={store:null,source:ue(void 0),unsubscribe:H});if(s.store!==e)if(s.unsubscribe(),s.store=e??null,e==null)s.source.v=void 0,s.unsubscribe=H;else{var a=!0;s.unsubscribe=fe(e,n=>{a?s.source.v=n:ce(s.source,n)}),a=!1}return le(s.source)}function Me(){const e={};return M(()=>{for(var r in e)e[r].unsubscribe()}),e}function Ce(e){var r=T;try{return T=!1,[e(),T]}finally{T=r}}const be="5";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(be);export{Re as a,Ae as b,Pe as c,Ce as d,Oe as e,Se as f,de as g,De as h,Le as i,k as j,we as k,Te as l,ye as m,Ee as r,Me as s,Ne as t,Ie as u,G as w};
