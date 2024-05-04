(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{2380:function(e,t,n){Promise.resolve().then(n.t.bind(n,4671,23)),Promise.resolve().then(n.bind(n,9877)),Promise.resolve().then(n.t.bind(n,3054,23))},9877:function(e,t,n){"use strict";let r,l,a,o,s,i;n.d(t,{default:function(){return el}});var u,c,f=n(7437),d=n(2265),m=n.t(d,2),p=Object.defineProperty,h=(e,t,n)=>t in e?p(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,g=(e,t,n)=>(h(e,"symbol"!=typeof t?t+"":t,n),n);class v{set(e){this.current!==e&&(this.handoffState="pending",this.currentId=0,this.current=e)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return"server"===this.current}get isClient(){return"client"===this.current}detect(){return"undefined"==typeof window||"undefined"==typeof document?"server":"client"}handoff(){"pending"===this.handoffState&&(this.handoffState="complete")}get isHandoffComplete(){return"complete"===this.handoffState}constructor(){g(this,"current",this.detect()),g(this,"handoffState","pending"),g(this,"currentId",0)}}let y=new v,b=(e,t)=>{y.isServer?(0,d.useEffect)(e,t):(0,d.useLayoutEffect)(e,t)},x=function(e){let t;let n=(t=(0,d.useRef)(e),b(()=>{t.current=e},[e]),t);return d.useCallback(function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return n.current(...t)},[n])},w=null!=(u=d.useId)?u:function(){let e=function(){let e;let t=(e="undefined"==typeof document,(0,m.useSyncExternalStore)(()=>()=>{},()=>!1,()=>!e)),[n,r]=d.useState(y.isHandoffComplete);return n&&!1===y.isHandoffComplete&&r(!1),d.useEffect(()=>{!0!==n&&r(!0)},[n]),d.useEffect(()=>y.handoff(),[]),!t&&n}(),[t,n]=d.useState(e?()=>y.nextId():null);return b(()=>{null===t&&n(y.nextId())},[t]),null!=t?""+t:void 0};function E(e){var t;if(e.type)return e.type;let n=null!=(t=e.as)?t:"button";if("string"==typeof n&&"button"===n.toLowerCase())return"button"}let j=Symbol();function k(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];let r=(0,d.useRef)(t);(0,d.useEffect)(()=>{r.current=t},[t]);let l=x(e=>{for(let t of r.current)null!=t&&("function"==typeof t?t(e):t.current=e)});return t.every(e=>null==e||(null==e?void 0:e[j]))?void 0:l}let N=(0,d.createContext)(null);N.displayName="OpenClosedContext";var S=((r=S||{})[r.Open=1]="Open",r[r.Closed=2]="Closed",r[r.Closing=4]="Closing",r[r.Opening=8]="Opening",r);function P(e){let{value:t,children:n}=e;return d.createElement(N.Provider,{value:t},n)}function C(e,t){for(var n=arguments.length,r=Array(n>2?n-2:0),l=2;l<n;l++)r[l-2]=arguments[l];if(e in t){let n=t[e];return"function"==typeof n?n(...r):n}let a=Error('Tried to handle "'.concat(e,'" but there is no handler defined. Only defined handlers are: ').concat(Object.keys(t).map(e=>'"'.concat(e,'"')).join(", "),"."));throw Error.captureStackTrace&&Error.captureStackTrace(a,C),a}function O(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return Array.from(new Set(t.flatMap(e=>"string"==typeof e?e.split(" "):[]))).filter(Boolean).join(" ")}var I=((l=I||{})[l.None=0]="None",l[l.RenderStrategy=1]="RenderStrategy",l[l.Static=2]="Static",l),D=((a=D||{})[a.Unmount=0]="Unmount",a[a.Hidden=1]="Hidden",a);function A(e){let{ourProps:t,theirProps:n,slot:r,defaultTag:l,features:a,visible:o=!0,name:s,mergeRefs:i}=e;i=null!=i?i:L;let u=_(n,t);if(o)return R(u,r,l,s,i);let c=null!=a?a:0;if(2&c){let{static:e=!1,...t}=u;if(e)return R(t,r,l,s,i)}if(1&c){let{unmount:e=!0,...t}=u;return C(e?0:1,{0:()=>null,1:()=>R({...t,hidden:!0,style:{display:"none"}},r,l,s,i)})}return R(u,r,l,s,i)}function R(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0,r=arguments.length>3?arguments[3]:void 0,l=arguments.length>4?arguments[4]:void 0,{as:a=n,children:o,refName:s="ref",...i}=M(e,["unmount","static"]),u=void 0!==e.ref?{[s]:e.ref}:{},c="function"==typeof o?o(t):o;"className"in i&&i.className&&"function"==typeof i.className&&(i.className=i.className(t));let f={};if(t){let e=!1,n=[];for(let[r,l]of Object.entries(t))"boolean"==typeof l&&(e=!0),!0===l&&n.push(r);e&&(f["data-headlessui-state"]=n.join(" "))}if(a===d.Fragment&&Object.keys(H(i)).length>0){if(!(0,d.isValidElement)(c)||Array.isArray(c)&&c.length>1)throw Error(['Passing props on "Fragment"!',"","The current component <".concat(r,' /> is rendering a "Fragment".'),"However we need to passthrough the following props:",Object.keys(i).map(e=>"  - ".concat(e)).join("\n"),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map(e=>"  - ".concat(e)).join("\n")].join("\n"));let e=c.props,t="function"==typeof(null==e?void 0:e.className)?function(){for(var t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r];return O(null==e?void 0:e.className(...n),i.className)}:O(null==e?void 0:e.className,i.className);return(0,d.cloneElement)(c,Object.assign({},_(c.props,H(M(i,["ref"]))),f,u,{ref:l(c.ref,u.ref)},t?{className:t}:{}))}return(0,d.createElement)(a,Object.assign({},M(i,["ref"]),a!==d.Fragment&&u,a!==d.Fragment&&f),c)}function T(){let e=(0,d.useRef)([]),t=(0,d.useCallback)(t=>{for(let n of e.current)null!=n&&("function"==typeof n?n(t):n.current=t)},[]);return function(){for(var n=arguments.length,r=Array(n),l=0;l<n;l++)r[l]=arguments[l];if(!r.every(e=>null==e))return e.current=r,t}}function L(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.every(e=>null==e)?void 0:e=>{for(let n of t)null!=n&&("function"==typeof n?n(e):n.current=e)}}function _(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];if(0===t.length)return{};if(1===t.length)return t[0];let r={},l={};for(let e of t)for(let t in e)t.startsWith("on")&&"function"==typeof e[t]?(null!=l[t]||(l[t]=[]),l[t].push(e[t])):r[t]=e[t];if(r.disabled||r["aria-disabled"])return Object.assign(r,Object.fromEntries(Object.keys(l).map(e=>[e,void 0])));for(let e in l)Object.assign(r,{[e](t){for(var n=arguments.length,r=Array(n>1?n-1:0),a=1;a<n;a++)r[a-1]=arguments[a];for(let n of l[e]){if((t instanceof Event||(null==t?void 0:t.nativeEvent)instanceof Event)&&t.defaultPrevented)return;n(t,...r)}}});return r}function B(e){var t;return Object.assign((0,d.forwardRef)(e),{displayName:null!=(t=e.displayName)?t:e.name})}function H(e){let t=Object.assign({},e);for(let e in t)void 0===t[e]&&delete t[e];return t}function M(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=Object.assign({},e);for(let e of t)e in n&&delete n[e];return n}let F=null!=(c=d.startTransition)?c:function(e){e()};var U=((o=U||{}).Space=" ",o.Enter="Enter",o.Escape="Escape",o.Backspace="Backspace",o.Delete="Delete",o.ArrowLeft="ArrowLeft",o.ArrowUp="ArrowUp",o.ArrowRight="ArrowRight",o.ArrowDown="ArrowDown",o.Home="Home",o.End="End",o.PageUp="PageUp",o.PageDown="PageDown",o.Tab="Tab",o),K=((s=K||{})[s.Open=0]="Open",s[s.Closed=1]="Closed",s),Q=((i=Q||{})[i.ToggleDisclosure=0]="ToggleDisclosure",i[i.CloseDisclosure=1]="CloseDisclosure",i[i.SetButtonId=2]="SetButtonId",i[i.SetPanelId=3]="SetPanelId",i[i.LinkPanel=4]="LinkPanel",i[i.UnlinkPanel=5]="UnlinkPanel",i);let V={0:e=>({...e,disclosureState:C(e.disclosureState,{0:1,1:0})}),1:e=>1===e.disclosureState?e:{...e,disclosureState:1},4:e=>!0===e.linkedPanel?e:{...e,linkedPanel:!0},5:e=>!1===e.linkedPanel?e:{...e,linkedPanel:!1},2:(e,t)=>e.buttonId===t.buttonId?e:{...e,buttonId:t.buttonId},3:(e,t)=>e.panelId===t.panelId?e:{...e,panelId:t.panelId}},W=(0,d.createContext)(null);function q(e){let t=(0,d.useContext)(W);if(null===t){let t=Error("<".concat(e," /> is missing a parent <Disclosure /> component."));throw Error.captureStackTrace&&Error.captureStackTrace(t,q),t}return t}W.displayName="DisclosureContext";let z=(0,d.createContext)(null);z.displayName="DisclosureAPIContext";let J=(0,d.createContext)(null);function X(e,t){return C(t.type,V,e,t)}J.displayName="DisclosurePanelContext";let Y=d.Fragment,Z=I.RenderStrategy|I.Static,G=Object.assign(B(function(e,t){let{defaultOpen:n=!1,...r}=e,l=(0,d.useRef)(null),a=k(t,function(e){let t=!(arguments.length>1)||void 0===arguments[1]||arguments[1];return Object.assign(e,{[j]:t})}(e=>{l.current=e},void 0===e.as||e.as===d.Fragment)),o=(0,d.useRef)(null),s=(0,d.useRef)(null),i=(0,d.useReducer)(X,{disclosureState:n?0:1,linkedPanel:!1,buttonRef:s,panelRef:o,buttonId:null,panelId:null}),[{disclosureState:u,buttonId:c},f]=i,m=x(e=>{f({type:1});let t=y.isServer?null:l instanceof Node?l.ownerDocument:null!=l&&l.hasOwnProperty("current")&&l.current instanceof Node?l.current.ownerDocument:document;if(!t||!c)return;let n=e?e instanceof HTMLElement?e:e.current instanceof HTMLElement?e.current:t.getElementById(c):t.getElementById(c);null==n||n.focus()}),p=(0,d.useMemo)(()=>({close:m}),[m]),h=(0,d.useMemo)(()=>({open:0===u,close:m}),[u,m]);return d.createElement(W.Provider,{value:i},d.createElement(z.Provider,{value:p},d.createElement(P,{value:C(u,{0:S.Open,1:S.Closed})},A({ourProps:{ref:a},theirProps:r,slot:h,defaultTag:Y,name:"Disclosure"}))))}),{Button:B(function(e,t){let n=w(),{id:r="headlessui-disclosure-button-".concat(n),...l}=e,[a,o]=q("Disclosure.Button"),s=(0,d.useContext)(J),i=null!==s&&s===a.panelId,u=(0,d.useRef)(null),c=k(u,t,i?null:a.buttonRef),f=T();(0,d.useEffect)(()=>{if(!i)return o({type:2,buttonId:r}),()=>{o({type:2,buttonId:null})}},[r,o,i]);let m=x(e=>{var t;if(i){if(1===a.disclosureState)return;switch(e.key){case U.Space:case U.Enter:e.preventDefault(),e.stopPropagation(),o({type:0}),null==(t=a.buttonRef.current)||t.focus()}}else switch(e.key){case U.Space:case U.Enter:e.preventDefault(),e.stopPropagation(),o({type:0})}}),p=x(e=>{e.key===U.Space&&e.preventDefault()}),h=x(t=>{var n;(function(e){let t=e.parentElement,n=null;for(;t&&!(t instanceof HTMLFieldSetElement);)t instanceof HTMLLegendElement&&(n=t),t=t.parentElement;let r=(null==t?void 0:t.getAttribute("disabled"))==="";return!(r&&function(e){if(!e)return!1;let t=e.previousElementSibling;for(;null!==t;){if(t instanceof HTMLLegendElement)return!1;t=t.previousElementSibling}return!0}(n))&&r})(t.currentTarget)||e.disabled||(i?(o({type:0}),null==(n=a.buttonRef.current)||n.focus()):o({type:0}))}),g=(0,d.useMemo)(()=>({open:0===a.disclosureState}),[a]),v=function(e,t){let[n,r]=(0,d.useState)(()=>E(e));return b(()=>{r(E(e))},[e.type,e.as]),b(()=>{n||t.current&&t.current instanceof HTMLButtonElement&&!t.current.hasAttribute("type")&&r("button")},[n,t]),n}(e,u);return A({mergeRefs:f,ourProps:i?{ref:c,type:v,onKeyDown:m,onClick:h}:{ref:c,id:r,type:v,"aria-expanded":0===a.disclosureState,"aria-controls":a.linkedPanel?a.panelId:void 0,onKeyDown:m,onKeyUp:p,onClick:h},theirProps:l,slot:g,defaultTag:"button",name:"Disclosure.Button"})}),Panel:B(function(e,t){let n=w(),{id:r="headlessui-disclosure-panel-".concat(n),...l}=e,[a,o]=q("Disclosure.Panel"),{close:s}=function e(t){let n=(0,d.useContext)(z);if(null===n){let n=Error("<".concat(t," /> is missing a parent <Disclosure /> component."));throw Error.captureStackTrace&&Error.captureStackTrace(n,e),n}return n}("Disclosure.Panel"),i=T(),u=k(t,a.panelRef,e=>{F(()=>o({type:e?4:5}))});(0,d.useEffect)(()=>(o({type:3,panelId:r}),()=>{o({type:3,panelId:null})}),[r,o]);let c=(0,d.useContext)(N),f=null!==c?(c&S.Open)===S.Open:0===a.disclosureState,m=(0,d.useMemo)(()=>({open:0===a.disclosureState,close:s}),[a,s]);return d.createElement(J.Provider,{value:a.panelId},A({mergeRefs:i,ourProps:{ref:u,id:r},theirProps:l,slot:m,defaultTag:"div",features:Z,visible:f,name:"Disclosure.Panel"}))})}),$=d.forwardRef(function(e,t){let{title:n,titleId:r,...l}=e;return d.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":r},l),n?d.createElement("title",{id:r},n):null,d.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18 18 6M6 6l12 12"}))}),ee=d.forwardRef(function(e,t){let{title:n,titleId:r,...l}=e;return d.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":r},l),n?d.createElement("title",{id:r},n):null,d.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"}))});var et=n(1169);let en=[{name:"Home",href:"/",current:!0},{name:"About",href:"/about",current:!1},{name:"Blog",href:"/blog",current:!1}];function er(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter(Boolean).join(" ")}function el(){let e=(0,et.useRouter)(),t=(0,et.usePathname)();return(0,f.jsx)(f.Fragment,{children:(0,f.jsx)(G,{as:"nav",className:"bg-gray-800",children:n=>{let{open:r}=n;return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("div",{className:"mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",children:(0,f.jsxs)("div",{className:"flex h-16 items-center justify-between",children:[(0,f.jsxs)("div",{className:"flex items-center",children:[(0,f.jsx)("div",{className:"flex-shrink-0"}),(0,f.jsx)("div",{className:"hidden md:block",children:(0,f.jsx)("div",{className:"ml-10 flex items-baseline space-x-4",children:en.map(n=>(0,f.jsx)("a",{onClick:()=>e.push(n.href),href:n.href,className:er(t===n.href?"bg-gray-900 text-white":"text-gray-300 hover:bg-gray-700 hover:text-white","rounded-md px-3 py-2 text-sm font-medium"),"aria-current":t===n.href?"page":void 0,children:n.name},n.name))})})]}),(0,f.jsx)("div",{className:"hidden md:block",children:(0,f.jsx)("div",{className:"ml-4 flex items-center md:ml-6",children:(0,f.jsx)("div",{className:"relative ml-3",children:(0,f.jsx)("div",{children:(0,f.jsxs)("div",{className:"relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800",children:[(0,f.jsx)("span",{className:"absolute -inset-1.5"}),(0,f.jsx)("img",{className:"h-8 w-8 rounded-full",src:"https://media.licdn.com/dms/image/C5603AQEQAeuKugEbKQ/profile-displayphoto-shrink_800_800/0/1520303954133?e=1720051200&v=beta&t=R5Dcmln0V_VCki0qlaXQZ-wUJlEyn-iPLsOi4SgNz2Q",alt:""})]})})})})}),(0,f.jsx)("div",{className:"-mr-2 flex md:hidden",children:(0,f.jsxs)(G.Button,{className:"relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800",children:[(0,f.jsx)("span",{className:"absolute -inset-0.5"}),(0,f.jsx)("span",{className:"sr-only",children:"Open main menu"}),r?(0,f.jsx)($,{className:"block h-6 w-6","aria-hidden":"true"}):(0,f.jsx)(ee,{className:"block h-6 w-6","aria-hidden":"true"})]})})]})}),(0,f.jsx)(G.Panel,{className:"md:hidden",children:(0,f.jsx)("div",{className:"space-y-1 px-2 pb-3 pt-2 sm:px-3",children:en.map(e=>(0,f.jsx)(G.Button,{as:"a",href:e.href,className:er(e.current?"bg-gray-900 text-white":"text-gray-300 hover:bg-gray-700 hover:text-white","block rounded-md px-3 py-2 text-base font-medium"),"aria-current":e.current?"page":void 0,children:e.name},e.name))})})]})}})})}},3054:function(){},4671:function(e){e.exports={style:{fontFamily:"'__Inter_aaf875', '__Inter_Fallback_aaf875'",fontStyle:"normal"},className:"__className_aaf875"}}},function(e){e.O(0,[93,971,23,744],function(){return e(e.s=2380)}),_N_E=e.O()}]);