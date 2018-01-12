module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "https://axzerk.github.io/codecamp-projects/wiki-viewer/build/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "JkW7");
/******/ })
/************************************************************************/
/******/ ({

/***/ "3cVa":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"container":"container__3QBYP","text":"text__1gd9D","icon":"icon__2_Bo7"};

/***/ }),

/***/ "9I7w":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"app":"app__2ibNG"};

/***/ }),

/***/ "EBst":
/***/ (function(module, exports, __webpack_require__) {

!function () {
  "use strict";
  function e() {}function t(t, n) {
    var o,
        r,
        i,
        l,
        a = E;for (l = arguments.length; l-- > 2;) {
      W.push(arguments[l]);
    }n && null != n.children && (W.length || W.push(n.children), delete n.children);while (W.length) {
      if ((r = W.pop()) && void 0 !== r.pop) for (l = r.length; l--;) {
        W.push(r[l]);
      } else "boolean" == typeof r && (r = null), (i = "function" != typeof t) && (null == r ? r = "" : "number" == typeof r ? r += "" : "string" != typeof r && (i = !1)), i && o ? a[a.length - 1] += r : a === E ? a = [r] : a.push(r), o = i;
    }var u = new e();return u.nodeName = t, u.children = a, u.attributes = null == n ? void 0 : n, u.key = null == n ? void 0 : n.key, void 0 !== S.vnode && S.vnode(u), u;
  }function n(e, t) {
    for (var n in t) {
      e[n] = t[n];
    }return e;
  }function o(e, o) {
    return t(e.nodeName, n(n({}, e.attributes), o), arguments.length > 2 ? [].slice.call(arguments, 2) : e.children);
  }function r(e) {
    !e.__d && (e.__d = !0) && 1 == A.push(e) && (S.debounceRendering || P)(i);
  }function i() {
    var e,
        t = A;A = [];while (e = t.pop()) {
      e.__d && k(e);
    }
  }function l(e, t, n) {
    return "string" == typeof t || "number" == typeof t ? void 0 !== e.splitText : "string" == typeof t.nodeName ? !e._componentConstructor && a(e, t.nodeName) : n || e._componentConstructor === t.nodeName;
  }function a(e, t) {
    return e.__n === t || e.nodeName.toLowerCase() === t.toLowerCase();
  }function u(e) {
    var t = n({}, e.attributes);t.children = e.children;var o = e.nodeName.defaultProps;if (void 0 !== o) for (var r in o) {
      void 0 === t[r] && (t[r] = o[r]);
    }return t;
  }function _(e, t) {
    var n = t ? document.createElementNS("http://www.w3.org/2000/svg", e) : document.createElement(e);return n.__n = e, n;
  }function p(e) {
    var t = e.parentNode;t && t.removeChild(e);
  }function c(e, t, n, o, r) {
    if ("className" === t && (t = "class"), "key" === t) ;else if ("ref" === t) n && n(null), o && o(e);else if ("class" !== t || r) {
      if ("style" === t) {
        if (o && "string" != typeof o && "string" != typeof n || (e.style.cssText = o || ""), o && "object" == typeof o) {
          if ("string" != typeof n) for (var i in n) {
            i in o || (e.style[i] = "");
          }for (var i in o) {
            e.style[i] = "number" == typeof o[i] && !1 === V.test(i) ? o[i] + "px" : o[i];
          }
        }
      } else if ("dangerouslySetInnerHTML" === t) o && (e.innerHTML = o.__html || "");else if ("o" == t[0] && "n" == t[1]) {
        var l = t !== (t = t.replace(/Capture$/, ""));t = t.toLowerCase().substring(2), o ? n || e.addEventListener(t, f, l) : e.removeEventListener(t, f, l), (e.__l || (e.__l = {}))[t] = o;
      } else if ("list" !== t && "type" !== t && !r && t in e) s(e, t, null == o ? "" : o), null != o && !1 !== o || e.removeAttribute(t);else {
        var a = r && t !== (t = t.replace(/^xlink\:?/, ""));null == o || !1 === o ? a ? e.removeAttributeNS("http://www.w3.org/1999/xlink", t.toLowerCase()) : e.removeAttribute(t) : "function" != typeof o && (a ? e.setAttributeNS("http://www.w3.org/1999/xlink", t.toLowerCase(), o) : e.setAttribute(t, o));
      }
    } else e.className = o || "";
  }function s(e, t, n) {
    try {
      e[t] = n;
    } catch (e) {}
  }function f(e) {
    return this.__l[e.type](S.event && S.event(e) || e);
  }function d() {
    var e;while (e = D.pop()) {
      S.afterMount && S.afterMount(e), e.componentDidMount && e.componentDidMount();
    }
  }function h(e, t, n, o, r, i) {
    H++ || (R = null != r && void 0 !== r.ownerSVGElement, j = null != e && !("__preactattr_" in e));var l = m(e, t, n, o, i);return r && l.parentNode !== r && r.appendChild(l), --H || (j = !1, i || d()), l;
  }function m(e, t, n, o, r) {
    var i = e,
        l = R;if (null != t && "boolean" != typeof t || (t = ""), "string" == typeof t || "number" == typeof t) return e && void 0 !== e.splitText && e.parentNode && (!e._component || r) ? e.nodeValue != t && (e.nodeValue = t) : (i = document.createTextNode(t), e && (e.parentNode && e.parentNode.replaceChild(i, e), b(e, !0))), i.__preactattr_ = !0, i;var u = t.nodeName;if ("function" == typeof u) return U(e, t, n, o);if (R = "svg" === u || "foreignObject" !== u && R, u += "", (!e || !a(e, u)) && (i = _(u, R), e)) {
      while (e.firstChild) {
        i.appendChild(e.firstChild);
      }e.parentNode && e.parentNode.replaceChild(i, e), b(e, !0);
    }var p = i.firstChild,
        c = i.__preactattr_,
        s = t.children;if (null == c) {
      c = i.__preactattr_ = {};for (var f = i.attributes, d = f.length; d--;) {
        c[f[d].name] = f[d].value;
      }
    }return !j && s && 1 === s.length && "string" == typeof s[0] && null != p && void 0 !== p.splitText && null == p.nextSibling ? p.nodeValue != s[0] && (p.nodeValue = s[0]) : (s && s.length || null != p) && v(i, s, n, o, j || null != c.dangerouslySetInnerHTML), g(i, t.attributes, c), R = l, i;
  }function v(e, t, n, o, r) {
    var i,
        a,
        u,
        _,
        c,
        s = e.childNodes,
        f = [],
        d = {},
        h = 0,
        v = 0,
        y = s.length,
        g = 0,
        w = t ? t.length : 0;if (0 !== y) for (var C = 0; C < y; C++) {
      var x = s[C],
          N = x.__preactattr_,
          k = w && N ? x._component ? x._component.__k : N.key : null;null != k ? (h++, d[k] = x) : (N || (void 0 !== x.splitText ? !r || x.nodeValue.trim() : r)) && (f[g++] = x);
    }if (0 !== w) for (var C = 0; C < w; C++) {
      _ = t[C], c = null;var k = _.key;if (null != k) h && void 0 !== d[k] && (c = d[k], d[k] = void 0, h--);else if (!c && v < g) for (i = v; i < g; i++) {
        if (void 0 !== f[i] && l(a = f[i], _, r)) {
          c = a, f[i] = void 0, i === g - 1 && g--, i === v && v++;break;
        }
      }c = m(c, _, n, o), u = s[C], c && c !== e && c !== u && (null == u ? e.appendChild(c) : c === u.nextSibling ? p(u) : e.insertBefore(c, u));
    }if (h) for (var C in d) {
      void 0 !== d[C] && b(d[C], !1);
    }while (v <= g) {
      void 0 !== (c = f[g--]) && b(c, !1);
    }
  }function b(e, t) {
    var n = e._component;n ? L(n) : (null != e.__preactattr_ && e.__preactattr_.ref && e.__preactattr_.ref(null), !1 !== t && null != e.__preactattr_ || p(e), y(e));
  }function y(e) {
    e = e.lastChild;while (e) {
      var t = e.previousSibling;b(e, !0), e = t;
    }
  }function g(e, t, n) {
    var o;for (o in n) {
      t && null != t[o] || null == n[o] || c(e, o, n[o], n[o] = void 0, R);
    }for (o in t) {
      "children" === o || "innerHTML" === o || o in n && t[o] === ("value" === o || "checked" === o ? e[o] : n[o]) || c(e, o, n[o], n[o] = t[o], R);
    }
  }function w(e) {
    var t = e.constructor.name;(I[t] || (I[t] = [])).push(e);
  }function C(e, t, n) {
    var o,
        r = I[e.name];if (e.prototype && e.prototype.render ? (o = new e(t, n), T.call(o, t, n)) : (o = new T(t, n), o.constructor = e, o.render = x), r) for (var i = r.length; i--;) {
      if (r[i].constructor === e) {
        o.__b = r[i].__b, r.splice(i, 1);break;
      }
    }return o;
  }function x(e, t, n) {
    return this.constructor(e, n);
  }function N(e, t, n, o, i) {
    e.__x || (e.__x = !0, (e.__r = t.ref) && delete t.ref, (e.__k = t.key) && delete t.key, !e.base || i ? e.componentWillMount && e.componentWillMount() : e.componentWillReceiveProps && e.componentWillReceiveProps(t, o), o && o !== e.context && (e.__c || (e.__c = e.context), e.context = o), e.__p || (e.__p = e.props), e.props = t, e.__x = !1, 0 !== n && (1 !== n && !1 === S.syncComponentUpdates && e.base ? r(e) : k(e, 1, i)), e.__r && e.__r(e));
  }function k(e, t, o, r) {
    if (!e.__x) {
      var i,
          l,
          a,
          _ = e.props,
          p = e.state,
          c = e.context,
          s = e.__p || _,
          f = e.__s || p,
          m = e.__c || c,
          v = e.base,
          y = e.__b,
          g = v || y,
          w = e._component,
          x = !1;if (v && (e.props = s, e.state = f, e.context = m, 2 !== t && e.shouldComponentUpdate && !1 === e.shouldComponentUpdate(_, p, c) ? x = !0 : e.componentWillUpdate && e.componentWillUpdate(_, p, c), e.props = _, e.state = p, e.context = c), e.__p = e.__s = e.__c = e.__b = null, e.__d = !1, !x) {
        i = e.render(_, p, c), e.getChildContext && (c = n(n({}, c), e.getChildContext()));var U,
            T,
            M = i && i.nodeName;if ("function" == typeof M) {
          var W = u(i);l = w, l && l.constructor === M && W.key == l.__k ? N(l, W, 1, c, !1) : (U = l, e._component = l = C(M, W, c), l.__b = l.__b || y, l.__u = e, N(l, W, 0, c, !1), k(l, 1, o, !0)), T = l.base;
        } else a = g, U = w, U && (a = e._component = null), (g || 1 === t) && (a && (a._component = null), T = h(a, i, c, o || !v, g && g.parentNode, !0));if (g && T !== g && l !== w) {
          var E = g.parentNode;E && T !== E && (E.replaceChild(T, g), U || (g._component = null, b(g, !1)));
        }if (U && L(U), e.base = T, T && !r) {
          var P = e,
              V = e;while (V = V.__u) {
            (P = V).base = T;
          }T._component = P, T._componentConstructor = P.constructor;
        }
      }if (!v || o ? D.unshift(e) : x || (e.componentDidUpdate && e.componentDidUpdate(s, f, m), S.afterUpdate && S.afterUpdate(e)), null != e.__h) while (e.__h.length) {
        e.__h.pop().call(e);
      }H || r || d();
    }
  }function U(e, t, n, o) {
    var r = e && e._component,
        i = r,
        l = e,
        a = r && e._componentConstructor === t.nodeName,
        _ = a,
        p = u(t);while (r && !_ && (r = r.__u)) {
      _ = r.constructor === t.nodeName;
    }return r && _ && (!o || r._component) ? (N(r, p, 3, n, o), e = r.base) : (i && !a && (L(i), e = l = null), r = C(t.nodeName, p, n), e && !r.__b && (r.__b = e, l = null), N(r, p, 1, n, o), e = r.base, l && e !== l && (l._component = null, b(l, !1))), e;
  }function L(e) {
    S.beforeUnmount && S.beforeUnmount(e);var t = e.base;e.__x = !0, e.componentWillUnmount && e.componentWillUnmount(), e.base = null;var n = e._component;n ? L(n) : t && (t.__preactattr_ && t.__preactattr_.ref && t.__preactattr_.ref(null), e.__b = t, p(t), w(e), y(t)), e.__r && e.__r(null);
  }function T(e, t) {
    this.__d = !0, this.context = t, this.props = e, this.state = this.state || {};
  }function M(e, t, n) {
    return h(n, e, {}, !1, t, !1);
  }var S = {},
      W = [],
      E = [],
      P = "function" == typeof Promise ? Promise.resolve().then.bind(Promise.resolve()) : setTimeout,
      V = /acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,
      A = [],
      D = [],
      H = 0,
      R = !1,
      j = !1,
      I = {};n(T.prototype, { setState: function setState(e, t) {
      var o = this.state;this.__s || (this.__s = n({}, o)), n(o, "function" == typeof e ? e(o, this.props) : e), t && (this.__h = this.__h || []).push(t), r(this);
    }, forceUpdate: function forceUpdate(e) {
      e && (this.__h = this.__h || []).push(e), k(this, 2);
    }, render: function render() {} });var $ = { h: t, createElement: t, cloneElement: o, Component: T, render: M, rerender: i, options: S }; true ? module.exports = $ : self.preact = $;
}();
//# sourceMappingURL=preact.min.js.map

/***/ }),

/***/ "FWi5":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "JkW7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/preact/dist/preact.min.js
var preact_min = __webpack_require__("EBst");
var preact_min_default = /*#__PURE__*/__webpack_require__.n(preact_min);

// EXTERNAL MODULE: ./components/Logo/styles.css
var styles = __webpack_require__("Qsq8");
var styles_default = /*#__PURE__*/__webpack_require__.n(styles);

// CONCATENATED MODULE: ./components/Logo/index.jsx




var Logo_Logo = function Logo(_ref) {
  var text = _ref.text,
      link = _ref.link;
  return Object(preact_min["h"])(
    'h1',
    { className: styles_default.a.logo },
    Object(preact_min["h"])(
      'a',
      { href: link, className: styles_default.a.link },
      'Wiki Viewer'
    )
  );
};

/* harmony default export */ var components_Logo = (Logo_Logo);
// EXTERNAL MODULE: ./components/AppBar/styles.css
var AppBar_styles = __webpack_require__("vfYn");
var AppBar_styles_default = /*#__PURE__*/__webpack_require__.n(AppBar_styles);

// CONCATENATED MODULE: ./components/AppBar/index.jsx





var AppBar__ref = Object(preact_min["h"])(components_Logo, {
  text: 'Viki Viewer',
  link: 'https://axzerk.github.io/codecamp-projects/wiki-viewer/build/'
});

var AppBar_AppBar = function AppBar(props) {
  return Object(preact_min["h"])(
    'header',
    { className: AppBar_styles_default.a.bar },
    Object(preact_min["h"])(
      'div',
      { className: AppBar_styles_default.a.logo },
      AppBar__ref
    ),
    Object(preact_min["h"])(
      'div',
      { className: AppBar_styles_default.a.form },
      props.children
    )
  );
};

/* harmony default export */ var components_AppBar = (AppBar_AppBar);
// EXTERNAL MODULE: ./components/SearchForm/styles.css
var SearchForm_styles = __webpack_require__("PqP/");
var SearchForm_styles_default = /*#__PURE__*/__webpack_require__.n(SearchForm_styles);

// CONCATENATED MODULE: ./components/SearchForm/index.jsx




var _ref2 = Object(preact_min["h"])('path', { d: 'M55.146 51.887L41.588 37.786A22.926 22.926 0 0 0 46.984 23c0-12.682-10.318-23-23-23s-23 10.318-23 23 10.318 23 23 23c4.761 0 9.298-1.436 13.177-4.162l13.661 14.208c.571.593 1.339.92 2.162.92.779 0 1.518-.297 2.079-.837a3.004 3.004 0 0 0 .083-4.242zM23.984 6c9.374 0 17 7.626 17 17s-7.626 17-17 17-17-7.626-17-17 7.626-17 17-17z' });

var SearchForm_SearchForm = function SearchForm(_ref) {
  var onSubmit = _ref.onSubmit;

  var inputRef = null;

  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    if (inputRef.value !== '') {
      onSubmit(inputRef.value);
      inputRef.value = '';
    }
  };

  return Object(preact_min["h"])(
    'form',
    { className: SearchForm_styles_default.a.form, onSubmit: handleSubmit },
    Object(preact_min["h"])(
      'button',
      { className: SearchForm_styles_default.a.btn, type: 'submit' },
      Object(preact_min["h"])(
        'svg',
        {
          className: SearchForm_styles_default.a.icon,
          xmlns: 'http://www.w3.org/2000/svg',
          viewBox: '0 0 56.966 56.966'
        },
        _ref2
      )
    ),
    Object(preact_min["h"])('input', {
      type: 'text',
      className: SearchForm_styles_default.a.input,
      placeholder: 'Search wiki...',
      ref: function ref(x) {
        return inputRef = x;
      },
      autoFocus: true
    })
  );
};

/* harmony default export */ var components_SearchForm = (SearchForm_SearchForm);
// EXTERNAL MODULE: ./components/Gallery/GalleryCard/styles.css
var GalleryCard_styles = __webpack_require__("eRcf");
var GalleryCard_styles_default = /*#__PURE__*/__webpack_require__.n(GalleryCard_styles);

// CONCATENATED MODULE: ./components/Gallery/GalleryCard/index.jsx




var GalleryCard_GalleryCard = function GalleryCard(_ref) {
  var title = _ref.title,
      text = _ref.text,
      img = _ref.img,
      url = _ref.url,
      alt = _ref.alt;
  return Object(preact_min["h"])(
    'div',
    { className: GalleryCard_styles_default.a.card },
    Object(preact_min["h"])(
      'a',
      { className: GalleryCard_styles_default.a.link, href: url, target: '_blank' },
      Object(preact_min["h"])('img', { className: GalleryCard_styles_default.a.img, src: img, alt: alt }),
      Object(preact_min["h"])(
        'h2',
        { className: GalleryCard_styles_default.a.title },
        title
      ),
      Object(preact_min["h"])(
        'p',
        { className: GalleryCard_styles_default.a.text },
        text
      )
    )
  );
};

/* harmony default export */ var Gallery_GalleryCard = (GalleryCard_GalleryCard);
// EXTERNAL MODULE: ./components/Gallery/styles.css
var Gallery_styles = __webpack_require__("q/C4");
var Gallery_styles_default = /*#__PURE__*/__webpack_require__.n(Gallery_styles);

// CONCATENATED MODULE: ./components/Gallery/index.jsx





var Gallery_Gallery = function Gallery(_ref) {
  var articles = _ref.articles;
  return Object(preact_min["h"])(
    'ul',
    { className: Gallery_styles_default.a.gallery },
    articles.map(function (item) {
      return Object(preact_min["h"])(
        'li',
        { key: item.title, className: Gallery_styles_default.a.item },
        Object(preact_min["h"])(Gallery_GalleryCard, item)
      );
    })
  );
};

/* harmony default export */ var components_Gallery = (Gallery_Gallery);
// EXTERNAL MODULE: ./components/NotFound/styles.css
var NotFound_styles = __webpack_require__("3cVa");
var NotFound_styles_default = /*#__PURE__*/__webpack_require__.n(NotFound_styles);

// CONCATENATED MODULE: ./components/NotFound/index.jsx




var NotFound_NotFound = function NotFound() {
  return Object(preact_min["h"])(
    'div',
    { className: NotFound_styles_default.a.container },
    Object(preact_min["h"])(
      'p',
      { className: NotFound_styles_default.a.text },
      'Sorry, we couldn\'t find anything'
    ),
    Object(preact_min["h"])(
      'span',
      { className: NotFound_styles_default.a.icon },
      '(\u2323\u0301_\u2323\u0300)'
    )
  );
};

/* harmony default export */ var components_NotFound = (NotFound_NotFound);
// CONCATENATED MODULE: ./api.js
var endpoint = 'https://en.wikipedia.org/w/api.php?';
var origin = 'origin=*';
var format = '&format=json&formatversion=2';
var action = '&action=query&generator=search';
var api_props = '&prop=extracts|pageimages&exchars=300&exintro&explaintext&piprop=thumbnail&pithumbsize=600';
var limit = '&gsrlimit=10';

var fetchArticles = function fetchArticles(searchQuery) {
  var search = '&gsrsearch=' + searchQuery;
  var apiUrl = endpoint + origin + format + action + limit + api_props + search;

  return fetch(apiUrl).then(function (response) {
    if (response.ok) return response.json();
    throw Error(response.statusText);
  }).then(function (data) {
    return data.query.pages;
  }).catch(function (err) {
    return console.error(err);
  });
};

var extractArticles = function extractArticles(articles) {
  return articles.map(function (article) {
    var img = article.thumbnail ? article.thumbnail.source : 'http://via.placeholder.com/640x480?text=image not found';

    return {
      title: article.title,
      text: article.extract,
      img: img,
      url: 'https://en.wikipedia.org/?curid=' + article.pageid,
      alt: article.title
    };
  });
};
// CONCATENATED MODULE: ./localStorage.js
var loadState = function loadState(tag) {
  try {
    var serializedState = localStorage.getItem(tag);
    if (serializedState === null) {
      return undefined;
    }

    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

var saveState = function saveState(tag, state) {
  try {
    var serializedState = JSON.stringify(state);
    localStorage.setItem(tag, serializedState);
  } catch (err) {
    console.err('Save state error: ', err);
  }
};
// EXTERNAL MODULE: ./components/App/styles.css
var App_styles = __webpack_require__("9I7w");
var App_styles_default = /*#__PURE__*/__webpack_require__.n(App_styles);

// CONCATENATED MODULE: ./components/App/index.jsx


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }










var App__ref = Object(preact_min["h"])(components_NotFound, null);

var App_App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    var _temp, _this, _ret;

    _classCallCheck(this, App);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
      articles: [],
      requestErrored: false
    }, _this.handleFormSubmit = function (searchQuery) {
      fetchArticles(searchQuery).then(function (data) {
        if (data) {
          _this.setState({
            articles: extractArticles(data)
          }, function () {
            saveState('wiki-articles', _this.state.articles);
          });
        } else {
          _this.setState(function (prevState) {
            return {
              requestErrored: !prevState.requestErrored
            };
          });
        }
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  App.prototype.componentDidMount = function componentDidMount() {
    var data = loadState('wiki-articles');

    if (data) {
      this.setState({
        articles: data
      });
    }
  };

  App.prototype.render = function render() {
    var _state = this.state,
        articles = _state.articles,
        requestErrored = _state.requestErrored;


    return Object(preact_min["h"])(
      'div',
      { className: App_styles_default.a.app },
      Object(preact_min["h"])(
        components_AppBar,
        null,
        Object(preact_min["h"])(components_SearchForm, { onSubmit: this.handleFormSubmit })
      ),
      requestErrored ? App__ref : Object(preact_min["h"])(components_Gallery, { articles: articles })
    );
  };

  return App;
}(preact_min["Component"]);


// EXTERNAL MODULE: ./style.css
var style = __webpack_require__("FWi5");
var style_default = /*#__PURE__*/__webpack_require__.n(style);

// CONCATENATED MODULE: ./index.js





var index__ref = Object(preact_min["h"])(App_App, null);

var Root = function Root() {
  return index__ref;
};

/* harmony default export */ var index = __webpack_exports__["default"] = (Root);

/***/ }),

/***/ "PqP/":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"form":"form__2BiXW","input":"input__wbg6F","btn":"btn__308E3","icon":"icon__f5Xvh"};

/***/ }),

/***/ "Qsq8":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"logo":"logo__3i2KD","link":"link__1oVhZ"};

/***/ }),

/***/ "eRcf":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"card":"card__J08On","link":"link__1J5nx","img":"img__2hPUW","title":"title__31t1K","text":"text__6k0yU"};

/***/ }),

/***/ "q/C4":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"gallery":"gallery__19jXU","item":"item__37IQZ"};

/***/ }),

/***/ "vfYn":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"bar":"bar__2KZdG","logo":"logo__3061V","form":"form__3r3p0"};

/***/ })

/******/ });
//# sourceMappingURL=ssr-bundle.js.map