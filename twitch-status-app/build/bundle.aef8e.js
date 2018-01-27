!function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="https://axzerk.github.io/codecamp-projects/twitch-status-app/build/",e(e.s="pwNi")}({"6RSI":function(t){t.exports={btn:"btn__2TFHI",active:"active__ul7ZH"}},"9I7w":function(t){t.exports={app:"app__2ibNG"}},"9qb7":function(t,e){var n,r;!function(){"use strict";function o(){for(var t=[],e=0;e<arguments.length;e++){var n=arguments[e];if(n){var r=typeof n;if("string"===r||"number"===r)t.push(n);else if(Array.isArray(n))t.push(o.apply(null,n));else if("object"===r)for(var a in n)i.call(n,a)&&n[a]&&t.push(a)}}return t.join(" ")}var i={}.hasOwnProperty;void 0!==t&&t.exports?t.exports=o:(n=[],void 0!==(r=function(){return o}.apply(e,n))&&(t.exports=r))}()},JkW7:function(t,e,n){"use strict";function r(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var i=(n("rq4c"),n("KM04")),a=n("vfYn"),c=n.n(a),l=function(t){return Object(i.h)("header",{className:c.a.bar},t.children)},u=l,s=n("Qsq8"),f=n.n(s),p=function(t){var e=t.text,n=t.link;return Object(i.h)("h1",{className:f.a.logo},Object(i.h)("a",{href:n,className:f.a.link},e))},h=p,_=n("PqP/"),d=n.n(_),b=Object(i.h)("path",{d:"M55.146 51.887L41.588 37.786A22.926 22.926 0 0 0 46.984 23c0-12.682-10.318-23-23-23s-23 10.318-23 23 10.318 23 23 23c4.761 0 9.298-1.436 13.177-4.162l13.661 14.208c.571.593 1.339.92 2.162.92.779 0 1.518-.297 2.079-.837a3.004 3.004 0 0 0 .083-4.242zM23.984 6c9.374 0 17 7.626 17 17s-7.626 17-17 17-17-7.626-17-17 7.626-17 17-17z"}),v=function(t){var e=t.onSubmit,n=null,r=function(t){t.preventDefault(),""!==n.value&&(e([n.value]),n.value="")};return Object(i.h)("form",{className:d.a.form,onSubmit:r},Object(i.h)("button",{className:d.a.btn,type:"submit"},Object(i.h)("svg",{className:d.a.icon,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 56.966 56.966"},b)),Object(i.h)("input",{type:"text",className:d.a.input,placeholder:"Search channels...",ref:function(t){return n=t},autoFocus:!0}))},m=v,g=n("9qb7"),y=n.n(g),x=n("6RSI"),j=n.n(x),w=function(t){var e,n=t.filter,r=t.onClick,o=t.text,a=t.currentFilter,c=y()((e={},e[j.a.btn]=!0,e[j.a.active]=a===n,e)),l=function(){r(n)};return Object(i.h)("button",{className:c,onClick:l},o)},O=w,N=n("W6R2"),k=n.n(N),C=function(t){var e=t.onChangeFilter,n=t.currentFilter;return Object(i.h)("div",{className:k.a.controls},Object(i.h)(O,{filter:"all",onClick:e,text:"all",currentFilter:n}),Object(i.h)(O,{filter:"online",onClick:e,text:"online",currentFilter:n}),Object(i.h)(O,{filter:"offline",onClick:e,text:"offline",currentFilter:n}))},S=C,L=n("t/YY"),M=n.n(L),P=n("mILp"),D=n.n(P),W=n("L34u"),T=n.n(W),F=n("cBpo"),U=n.n(F),E=function(t){var e=t.id,n=t.title,r=t.logo,o=t.url,a=t.name,c=t.isOnline,l=t.onDelete,u=function(t){t.preventDefault(),l(e)};return Object(i.h)("a",{className:M.a.card,href:o,target:"_blank"},Object(i.h)("button",{className:M.a.btn,onClick:u}),Object(i.h)("img",{src:r||U.a,className:M.a.img,alt:"channel"}),Object(i.h)("div",{className:M.a.info},Object(i.h)("h2",{className:M.a.name},a),Object(i.h)("p",{className:M.a.descr},n||"")),Object(i.h)("svg",{className:M.a.icon},Object(i.h)("use",{href:(c?D.a:T.a)+"#root"})," : }"))},z=E,I=n("mW7B"),V=n.n(I),A=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},R=function(t){var e=t.channels,n=t.onDeleteCard;return Object(i.h)("ul",{className:V.a.list},e.map(function(t){return Object(i.h)("li",{key:t.id,className:V.a.item},Object(i.h)(z,A({onDelete:n},t)))}))},q=R,H=n("Sunz"),B=n.n(H),Y=function(){return Object(i.h)("div",{className:B.a.backdrop},Object(i.h)("div",{class:B.a.loader},Object(i.h)("div",{className:B.a.bar}),Object(i.h)("div",{className:B.a.bar}),Object(i.h)("div",{className:B.a.bar}),Object(i.h)("div",{className:B.a.bar}),Object(i.h)("div",{className:B.a.bar})))},J=Y,K=["freecodecamp","singsing","dreamhackcs","eslsc2","jacksofamerica","ogamingsc2","purgegamers","cretetion","habathcx","noobs2ninjas"],X=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Z=function(t){return t.reduce(function(t,e){return t+"login="+e+"&"},"")},G=function(t){return t.reduce(function(t,e){return t+"user_id="+e.id+"&"},"")},Q=function(t){var e=t.id,n=t.title,r=void 0===n?null:n;return{id:e,title:r,name:t.display_name,logo:t.profile_image_url,url:"https://www.twitch.tv/"+t.login,isOnline:!!r}},$=function(t,e){var n=t.map(function(t){return t.user_id});return[].concat(e.filter(function(t){return n.includes(t.id)}).map(function(e){return X({},e,t.find(function(t){return t.user_id===e.id}))}),e.filter(function(t){return!n.includes(t.id)})).reduce(function(t,e){return[].concat(t,[Q(e)])},[])},tt=function(t){var e=new Headers({"Client-ID":"zw4ez3387m23jod5tuzeebtdbknd0b"}),n="https://api.twitch.tv/helix",r=Z(t);return fetch(n+"/users?"+r,{headers:e}).then(function(t){if(t.ok)return t.json();throw Error(t.statusText)}).then(function(t){var r=G(t.data);return fetch(n+"/streams?"+r,{headers:e}).then(function(t){if(t.ok)return t.json();throw Error(t.statusText)}).then(function(e){return $(e.data,t.data)})}).catch(function(t){return console.log(t)})},et=function(){try{var t=localStorage.getItem("twitch-reporter-app");if(null===t)return;return JSON.parse(t)}catch(t){return}},nt=function(t){try{var e=JSON.stringify(t);localStorage.setItem("twitch-reporter-app",e)}catch(t){console.log("save state error: ",t)}},rt=(n("9I7w"),function(t,e){switch(e){case"all":return t;case"online":return t.filter(function(t){return t.isOnline});case"offline":return t.filter(function(t){return!t.isOnline});default:return t}}),ot=Object(i.h)(h,{text:"twitch.tv reporter",link:"https://axzerk.github.io/codecamp-projects/twitch-status-app/build/"}),it=Object(i.h)(J,null),at=function(t){function e(){for(var e,n,o,i=arguments.length,a=Array(i),c=0;c<i;c++)a[c]=arguments[c];return e=n=r(this,t.call.apply(t,[this].concat(a))),n.state={channels:[],visibilityFilter:"all",showLoader:!1},n.fetchData=function(){var t=n.state.channels.length>0?n.state.channels.map(function(t){return t.name}):K,e=n.state.channels;n.toggleLoader(),tt(t).then(function(t){if(e.length>0&&1===t.length){return e.map(function(t){return t.id}).includes(t[0].id)||n.setState(function(e){return{channels:[].concat(t,e.channels)}},function(){nt(n.state.channels)}),void n.toggleLoader()}if(t.length>1)return void n.setState({channels:t},function(){nt(n.state.channels),n.toggleLoader()});n.toggleLoader()})},n.onRemoveChannel=function(t){n.setState(function(e){return{channels:e.channels.filter(function(e){return e.id!==t})}},function(){return nt(n.state.channels)})},n.setVisibilityFilter=function(t){n.setState({visibilityFilter:t})},n.toggleLoader=function(){n.setState(function(t){return{showLoader:!t.showLoader}})},o=e,r(n,o)}return o(e,t),e.prototype.componentDidMount=function(){var t=this,e=et();e?this.setState({channels:e},function(){return t.fetchData()}):this.fetchData()},e.prototype.render=function(){var t=this.state,e=t.channels,n=t.visibilityFilter,r=t.showLoader;return Object(i.h)("div",{className:"app"},Object(i.h)(u,null,ot,Object(i.h)(S,{onChangeFilter:this.setVisibilityFilter,currentFilter:n}),Object(i.h)(m,{onSubmit:this.fetchData})),r&&it,e.length>0&&Object(i.h)(q,{channels:rt(e,n),onDeleteCard:this.onRemoveChannel}))},e}(i.Component);e.default=at},KM04:function(t){!function(){"use strict";function e(){}function n(t,n){var r,o,i,a,c=W;for(a=arguments.length;a-- >2;)D.push(arguments[a]);for(n&&null!=n.children&&(D.length||D.push(n.children),delete n.children);D.length;)if((o=D.pop())&&void 0!==o.pop)for(a=o.length;a--;)D.push(o[a]);else"boolean"==typeof o&&(o=null),(i="function"!=typeof t)&&(null==o?o="":"number"==typeof o?o+="":"string"!=typeof o&&(i=!1)),i&&r?c[c.length-1]+=o:c===W?c=[o]:c.push(o),r=i;var l=new e;return l.nodeName=t,l.children=c,l.attributes=null==n?void 0:n,l.key=null==n?void 0:n.key,void 0!==P.vnode&&P.vnode(l),l}function r(t,e){for(var n in e)t[n]=e[n];return t}function o(t,e){return n(t.nodeName,r(r({},t.attributes),e),arguments.length>2?[].slice.call(arguments,2):t.children)}function i(t){!t.__d&&(t.__d=!0)&&1==U.push(t)&&(P.debounceRendering||T)(a)}function a(){var t,e=U;for(U=[];t=e.pop();)t.__d&&k(t)}function c(t,e,n){return"string"==typeof e||"number"==typeof e?void 0!==t.splitText:"string"==typeof e.nodeName?!t._componentConstructor&&l(t,e.nodeName):n||t._componentConstructor===e.nodeName}function l(t,e){return t.__n===e||t.nodeName.toLowerCase()===e.toLowerCase()}function u(t){var e=r({},t.attributes);e.children=t.children;var n=t.nodeName.defaultProps;if(void 0!==n)for(var o in n)void 0===e[o]&&(e[o]=n[o]);return e}function s(t,e){var n=e?document.createElementNS("http://www.w3.org/2000/svg",t):document.createElement(t);return n.__n=t,n}function f(t){var e=t.parentNode;e&&e.removeChild(t)}function p(t,e,n,r,o){if("className"===e&&(e="class"),"key"===e);else if("ref"===e)n&&n(null),r&&r(t);else if("class"!==e||o)if("style"===e){if(r&&"string"!=typeof r&&"string"!=typeof n||(t.style.cssText=r||""),r&&"object"==typeof r){if("string"!=typeof n)for(var i in n)i in r||(t.style[i]="");for(var i in r)t.style[i]="number"==typeof r[i]&&!1===F.test(i)?r[i]+"px":r[i]}}else if("dangerouslySetInnerHTML"===e)r&&(t.innerHTML=r.__html||"");else if("o"==e[0]&&"n"==e[1]){var a=e!==(e=e.replace(/Capture$/,""));e=e.toLowerCase().substring(2),r?n||t.addEventListener(e,_,a):t.removeEventListener(e,_,a),(t.__l||(t.__l={}))[e]=r}else if("list"!==e&&"type"!==e&&!o&&e in t)h(t,e,null==r?"":r),null!=r&&!1!==r||t.removeAttribute(e);else{var c=o&&e!==(e=e.replace(/^xlink\:?/,""));null==r||!1===r?c?t.removeAttributeNS("http://www.w3.org/1999/xlink",e.toLowerCase()):t.removeAttribute(e):"function"!=typeof r&&(c?t.setAttributeNS("http://www.w3.org/1999/xlink",e.toLowerCase(),r):t.setAttribute(e,r))}else t.className=r||""}function h(t,e,n){try{t[e]=n}catch(t){}}function _(t){return this.__l[t.type](P.event&&P.event(t)||t)}function d(){for(var t;t=E.pop();)P.afterMount&&P.afterMount(t),t.componentDidMount&&t.componentDidMount()}function b(t,e,n,r,o,i){z++||(I=null!=o&&void 0!==o.ownerSVGElement,V=null!=t&&!("__preactattr_"in t));var a=v(t,e,n,r,i);return o&&a.parentNode!==o&&o.appendChild(a),--z||(V=!1,i||d()),a}function v(t,e,n,r,o){var i=t,a=I;if(null!=e&&"boolean"!=typeof e||(e=""),"string"==typeof e||"number"==typeof e)return t&&void 0!==t.splitText&&t.parentNode&&(!t._component||o)?t.nodeValue!=e&&(t.nodeValue=e):(i=document.createTextNode(e),t&&(t.parentNode&&t.parentNode.replaceChild(i,t),g(t,!0))),i.__preactattr_=!0,i;var c=e.nodeName;if("function"==typeof c)return C(t,e,n,r);if(I="svg"===c||"foreignObject"!==c&&I,c+="",(!t||!l(t,c))&&(i=s(c,I),t)){for(;t.firstChild;)i.appendChild(t.firstChild);t.parentNode&&t.parentNode.replaceChild(i,t),g(t,!0)}var u=i.firstChild,f=i.__preactattr_,p=e.children;if(null==f){f=i.__preactattr_={};for(var h=i.attributes,_=h.length;_--;)f[h[_].name]=h[_].value}return!V&&p&&1===p.length&&"string"==typeof p[0]&&null!=u&&void 0!==u.splitText&&null==u.nextSibling?u.nodeValue!=p[0]&&(u.nodeValue=p[0]):(p&&p.length||null!=u)&&m(i,p,n,r,V||null!=f.dangerouslySetInnerHTML),x(i,e.attributes,f),I=a,i}function m(t,e,n,r,o){var i,a,l,u,s,p=t.childNodes,h=[],_={},d=0,b=0,m=p.length,y=0,x=e?e.length:0;if(0!==m)for(var j=0;j<m;j++){var w=p[j],O=w.__preactattr_,N=x&&O?w._component?w._component.__k:O.key:null;null!=N?(d++,_[N]=w):(O||(void 0!==w.splitText?!o||w.nodeValue.trim():o))&&(h[y++]=w)}if(0!==x)for(var j=0;j<x;j++){u=e[j],s=null;var N=u.key;if(null!=N)d&&void 0!==_[N]&&(s=_[N],_[N]=void 0,d--);else if(!s&&b<y)for(i=b;i<y;i++)if(void 0!==h[i]&&c(a=h[i],u,o)){s=a,h[i]=void 0,i===y-1&&y--,i===b&&b++;break}s=v(s,u,n,r),l=p[j],s&&s!==t&&s!==l&&(null==l?t.appendChild(s):s===l.nextSibling?f(l):t.insertBefore(s,l))}if(d)for(var j in _)void 0!==_[j]&&g(_[j],!1);for(;b<=y;)void 0!==(s=h[y--])&&g(s,!1)}function g(t,e){var n=t._component;n?S(n):(null!=t.__preactattr_&&t.__preactattr_.ref&&t.__preactattr_.ref(null),!1!==e&&null!=t.__preactattr_||f(t),y(t))}function y(t){for(t=t.lastChild;t;){var e=t.previousSibling;g(t,!0),t=e}}function x(t,e,n){var r;for(r in n)e&&null!=e[r]||null==n[r]||p(t,r,n[r],n[r]=void 0,I);for(r in e)"children"===r||"innerHTML"===r||r in n&&e[r]===("value"===r||"checked"===r?t[r]:n[r])||p(t,r,n[r],n[r]=e[r],I)}function j(t){var e=t.constructor.name;(A[e]||(A[e]=[])).push(t)}function w(t,e,n){var r,o=A[t.name];if(t.prototype&&t.prototype.render?(r=new t(e,n),L.call(r,e,n)):(r=new L(e,n),r.constructor=t,r.render=O),o)for(var i=o.length;i--;)if(o[i].constructor===t){r.__b=o[i].__b,o.splice(i,1);break}return r}function O(t,e,n){return this.constructor(t,n)}function N(t,e,n,r,o){t.__x||(t.__x=!0,(t.__r=e.ref)&&delete e.ref,(t.__k=e.key)&&delete e.key,!t.base||o?t.componentWillMount&&t.componentWillMount():t.componentWillReceiveProps&&t.componentWillReceiveProps(e,r),r&&r!==t.context&&(t.__c||(t.__c=t.context),t.context=r),t.__p||(t.__p=t.props),t.props=e,t.__x=!1,0!==n&&(1!==n&&!1===P.syncComponentUpdates&&t.base?i(t):k(t,1,o)),t.__r&&t.__r(t))}function k(t,e,n,o){if(!t.__x){var i,a,c,l=t.props,s=t.state,f=t.context,p=t.__p||l,h=t.__s||s,_=t.__c||f,v=t.base,m=t.__b,y=v||m,x=t._component,j=!1;if(v&&(t.props=p,t.state=h,t.context=_,2!==e&&t.shouldComponentUpdate&&!1===t.shouldComponentUpdate(l,s,f)?j=!0:t.componentWillUpdate&&t.componentWillUpdate(l,s,f),t.props=l,t.state=s,t.context=f),t.__p=t.__s=t.__c=t.__b=null,t.__d=!1,!j){i=t.render(l,s,f),t.getChildContext&&(f=r(r({},f),t.getChildContext()));var O,C,L=i&&i.nodeName;if("function"==typeof L){var M=u(i);a=x,a&&a.constructor===L&&M.key==a.__k?N(a,M,1,f,!1):(O=a,t._component=a=w(L,M,f),a.__b=a.__b||m,a.__u=t,N(a,M,0,f,!1),k(a,1,n,!0)),C=a.base}else c=y,O=x,O&&(c=t._component=null),(y||1===e)&&(c&&(c._component=null),C=b(c,i,f,n||!v,y&&y.parentNode,!0));if(y&&C!==y&&a!==x){var D=y.parentNode;D&&C!==D&&(D.replaceChild(C,y),O||(y._component=null,g(y,!1)))}if(O&&S(O),t.base=C,C&&!o){for(var W=t,T=t;T=T.__u;)(W=T).base=C;C._component=W,C._componentConstructor=W.constructor}}if(!v||n?E.unshift(t):j||(t.componentDidUpdate&&t.componentDidUpdate(p,h,_),P.afterUpdate&&P.afterUpdate(t)),null!=t.__h)for(;t.__h.length;)t.__h.pop().call(t);z||o||d()}}function C(t,e,n,r){for(var o=t&&t._component,i=o,a=t,c=o&&t._componentConstructor===e.nodeName,l=c,s=u(e);o&&!l&&(o=o.__u);)l=o.constructor===e.nodeName;return o&&l&&(!r||o._component)?(N(o,s,3,n,r),t=o.base):(i&&!c&&(S(i),t=a=null),o=w(e.nodeName,s,n),t&&!o.__b&&(o.__b=t,a=null),N(o,s,1,n,r),t=o.base,a&&t!==a&&(a._component=null,g(a,!1))),t}function S(t){P.beforeUnmount&&P.beforeUnmount(t);var e=t.base;t.__x=!0,t.componentWillUnmount&&t.componentWillUnmount(),t.base=null;var n=t._component;n?S(n):e&&(e.__preactattr_&&e.__preactattr_.ref&&e.__preactattr_.ref(null),t.__b=e,f(e),j(t),y(e)),t.__r&&t.__r(null)}function L(t,e){this.__d=!0,this.context=e,this.props=t,this.state=this.state||{}}function M(t,e,n){return b(n,t,{},!1,e,!1)}var P={},D=[],W=[],T="function"==typeof Promise?Promise.resolve().then.bind(Promise.resolve()):setTimeout,F=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,U=[],E=[],z=0,I=!1,V=!1,A={};r(L.prototype,{setState:function(t,e){var n=this.state;this.__s||(this.__s=r({},n)),r(n,"function"==typeof t?t(n,this.props):t),e&&(this.__h=this.__h||[]).push(e),i(this)},forceUpdate:function(t){t&&(this.__h=this.__h||[]).push(t),k(this,2)},render:function(){}});var R={h:n,createElement:n,cloneElement:o,Component:L,render:M,rerender:a,options:P};t.exports=R}()},L34u:function(t,e,n){t.exports=n.p+"f1f3ef69355692b82dc2fbe6383b90b0.svg"},"PqP/":function(t){t.exports={form:"form__2BiXW",input:"input__wbg6F",btn:"btn__308E3",icon:"icon__f5Xvh"}},Qsq8:function(t){t.exports={logo:"logo__3i2KD",link:"link__1oVhZ"}},Sunz:function(t){t.exports={backdrop:"backdrop__34Pzo",loader:"loader__18eXh",bar:"bar___iT9w","sk-stretchdelay":"sk-stretchdelay__3Nb-0"}},W6R2:function(t){t.exports={controls:"controls__3VVx7"}},cBpo:function(t,e,n){t.exports=n.p+"fc627860df179d947b3ad29f651a9642.png"},mILp:function(t,e,n){t.exports=n.p+"d293bc8c3a99d515731fc6c532096b81.svg"},mW7B:function(t){t.exports={list:"list__3yAXc",item:"item__hd_ej"}},pwNi:function(t,e,n){"use strict";var r=n("KM04");"serviceWorker"in navigator&&"https:"===location.protocol&&navigator.serviceWorker.register(n.p+"sw.js");var o=function(t){return t&&t.default?t.default:t};if("function"==typeof o(n("JkW7"))){var i=document.body.firstElementChild,a=function(){var t=o(n("JkW7"));i=(0,r.render)((0,r.h)(t),document.body,i)};a()}},rq4c:function(){},"t/YY":function(t){t.exports={card:"card__2CihZ",btn:"btn__2naLG",img:"img__2cUeT",info:"info__1hDZ4",name:"name__2YCiu",descr:"descr__2c7jX",icon:"icon__MzQHm"}},vfYn:function(t){t.exports={bar:"bar__2KZdG"}}});
//# sourceMappingURL=bundle.aef8e.js.map