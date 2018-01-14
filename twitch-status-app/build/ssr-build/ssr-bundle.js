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
/******/ 	__webpack_require__.p = "https://axzerk.github.io/codecamp-projects/twitch-status-app/build/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "JkW7");
/******/ })
/************************************************************************/
/******/ ({

/***/ "6RSI":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"btn":"btn__2TFHI","active":"active__ul7ZH"};

/***/ }),

/***/ "9I7w":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"app":"app__2ibNG"};

/***/ }),

/***/ "9qb7":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2016 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				classes.push(classNames.apply(null, arg));
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if (typeof module !== 'undefined' && module.exports) {
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {
		window.classNames = classNames;
	}
})();

/***/ }),

/***/ "JkW7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./style/index.css
var style = __webpack_require__("rq4c");
var style_default = /*#__PURE__*/__webpack_require__.n(style);

// EXTERNAL MODULE: ../node_modules/preact/dist/preact.min.js
var preact_min = __webpack_require__("KM04");
var preact_min_default = /*#__PURE__*/__webpack_require__.n(preact_min);

// EXTERNAL MODULE: ./components/AppBar/styles.css
var styles = __webpack_require__("vfYn");
var styles_default = /*#__PURE__*/__webpack_require__.n(styles);

// CONCATENATED MODULE: ./components/AppBar/index.jsx




var AppBar_AppBar = function AppBar(props) {
  return Object(preact_min["h"])(
    'header',
    { className: styles_default.a.bar },
    props.children
  );
};

/* harmony default export */ var components_AppBar = (AppBar_AppBar);
// EXTERNAL MODULE: ./components/Logo/styles.css
var Logo_styles = __webpack_require__("Qsq8");
var Logo_styles_default = /*#__PURE__*/__webpack_require__.n(Logo_styles);

// CONCATENATED MODULE: ./components/Logo/index.jsx




var Logo_Logo = function Logo(_ref) {
  var text = _ref.text,
      link = _ref.link;
  return Object(preact_min["h"])(
    'h1',
    { className: Logo_styles_default.a.logo },
    Object(preact_min["h"])(
      'a',
      { href: link, className: Logo_styles_default.a.link },
      text
    )
  );
};

/* harmony default export */ var components_Logo = (Logo_Logo);
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
      onSubmit([inputRef.value]);
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
      placeholder: 'Search channels...',
      ref: function ref(x) {
        return inputRef = x;
      },
      autoFocus: true
    })
  );
};

/* harmony default export */ var components_SearchForm = (SearchForm_SearchForm);
// EXTERNAL MODULE: ../node_modules/classnames/index.js
var classnames = __webpack_require__("9qb7");
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// EXTERNAL MODULE: ./components/Controls/Button/styles.css
var Button_styles = __webpack_require__("6RSI");
var Button_styles_default = /*#__PURE__*/__webpack_require__.n(Button_styles);

// CONCATENATED MODULE: ./components/Controls/Button/index.jsx





var Button_Button = function Button(_ref) {
  var _classNames;

  var filter = _ref.filter,
      onClick = _ref.onClick,
      text = _ref.text,
      currentFilter = _ref.currentFilter;

  var btnClass = classnames_default()((_classNames = {}, _classNames[Button_styles_default.a.btn] = true, _classNames[Button_styles_default.a.active] = currentFilter === filter, _classNames));

  var handleClick = function handleClick() {
    onClick(filter);
  };

  return Object(preact_min["h"])(
    'button',
    { className: btnClass, onClick: handleClick },
    text
  );
};

/* harmony default export */ var Controls_Button = (Button_Button);
// EXTERNAL MODULE: ./components/Controls/styles.css
var Controls_styles = __webpack_require__("W6R2");
var Controls_styles_default = /*#__PURE__*/__webpack_require__.n(Controls_styles);

// CONCATENATED MODULE: ./components/Controls/index.jsx





var Controls_Controls = function Controls(_ref) {
  var onChangeFilter = _ref.onChangeFilter,
      currentFilter = _ref.currentFilter;
  return Object(preact_min["h"])(
    'div',
    { className: Controls_styles_default.a.controls },
    Object(preact_min["h"])(Controls_Button, {
      filter: 'all',
      onClick: onChangeFilter,
      text: 'all',
      currentFilter: currentFilter
    }),
    Object(preact_min["h"])(Controls_Button, {
      filter: 'online',
      onClick: onChangeFilter,
      text: 'online',
      currentFilter: currentFilter
    }),
    Object(preact_min["h"])(Controls_Button, {
      filter: 'offline',
      onClick: onChangeFilter,
      text: 'offline',
      currentFilter: currentFilter
    })
  );
};

/* harmony default export */ var components_Controls = (Controls_Controls);
// EXTERNAL MODULE: ./components/Card/styles.css
var Card_styles = __webpack_require__("t/YY");
var Card_styles_default = /*#__PURE__*/__webpack_require__.n(Card_styles);

// EXTERNAL MODULE: ./components/Card/img/online.svg
var online = __webpack_require__("mILp");
var online_default = /*#__PURE__*/__webpack_require__.n(online);

// EXTERNAL MODULE: ./components/Card/img/offline.svg
var offline = __webpack_require__("L34u");
var offline_default = /*#__PURE__*/__webpack_require__.n(offline);

// EXTERNAL MODULE: ./components/Card/img/default-logo.png
var default_logo = __webpack_require__("cBpo");
var default_logo_default = /*#__PURE__*/__webpack_require__.n(default_logo);

// CONCATENATED MODULE: ./components/Card/index.jsx







var Card_Card = function Card(_ref) {
  var id = _ref.id,
      title = _ref.title,
      logo = _ref.logo,
      url = _ref.url,
      name = _ref.name,
      isOnline = _ref.isOnline,
      onDelete = _ref.onDelete;

  var handleDelete = function handleDelete(e) {
    e.preventDefault();
    onDelete(id);
  };

  return Object(preact_min["h"])(
    'a',
    { className: Card_styles_default.a.card, href: url, target: '_blank' },
    Object(preact_min["h"])('button', { className: Card_styles_default.a.btn, onClick: handleDelete }),
    Object(preact_min["h"])('img', { src: logo || default_logo_default.a, className: Card_styles_default.a.img, alt: 'channel' }),
    Object(preact_min["h"])(
      'div',
      { className: Card_styles_default.a.info },
      Object(preact_min["h"])(
        'h2',
        { className: Card_styles_default.a.name },
        name
      ),
      Object(preact_min["h"])(
        'p',
        { className: Card_styles_default.a.descr },
        title || ''
      )
    ),
    Object(preact_min["h"])(
      'svg',
      { className: Card_styles_default.a.icon },
      Object(preact_min["h"])('use', { href: (isOnline ? online_default.a : offline_default.a) + '#root' }),
      ' : }'
    )
  );
};

/* harmony default export */ var components_Card = (Card_Card);
// EXTERNAL MODULE: ./components/ChannelList/styles.css
var ChannelList_styles = __webpack_require__("mW7B");
var ChannelList_styles_default = /*#__PURE__*/__webpack_require__.n(ChannelList_styles);

// CONCATENATED MODULE: ./components/ChannelList/index.jsx
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };






var ChannelList_ChannelList = function ChannelList(_ref) {
  var channels = _ref.channels,
      onDeleteCard = _ref.onDeleteCard;
  return Object(preact_min["h"])(
    'ul',
    { className: ChannelList_styles_default.a.list },
    channels.map(function (channel) {
      return Object(preact_min["h"])(
        'li',
        { key: channel.id, className: ChannelList_styles_default.a.item },
        Object(preact_min["h"])(components_Card, _extends({ onDelete: onDeleteCard }, channel))
      );
    })
  );
};

/* harmony default export */ var components_ChannelList = (ChannelList_ChannelList);
// CONCATENATED MODULE: ./defaultChannels.js
/* harmony default export */ var defaultChannels = (['freecodecamp', 'singsing', 'dreamhackcs', 'eslsc2', 'jacksofamerica', 'ogamingsc2', 'purgegamers', 'cretetion', 'habathcx', 'noobs2ninjas']);
// CONCATENATED MODULE: ./API.js
var API__extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var makeLoginList = function makeLoginList(arr) {
  return arr.reduce(function (acc, item) {
    return acc + ('login=' + item + '&');
  }, '');
};

var makeIdList = function makeIdList(arr) {
  return arr.reduce(function (acc, item) {
    return acc + ('user_id=' + item.id + '&');
  }, '');
};

var makeUserData = function makeUserData(_ref) {
  var id = _ref.id,
      _ref$title = _ref.title,
      title = _ref$title === undefined ? null : _ref$title,
      display_name = _ref.display_name,
      profile_image_url = _ref.profile_image_url,
      login = _ref.login;
  return {
    id: id,
    title: title,
    name: display_name,
    logo: profile_image_url,
    url: 'https://www.twitch.tv/' + login,
    isOnline: !!title
  };
};

var makeChannelCardData = function makeChannelCardData(streams, users) {
  var onlineIds = streams.map(function (stream) {
    return stream.user_id;
  });

  var onlineUsers = users.filter(function (user) {
    return onlineIds.includes(user.id);
  }).map(function (user) {
    return API__extends({}, user, streams.find(function (stream) {
      return stream.user_id === user.id;
    }));
  });

  var offlineUsers = users.filter(function (user) {
    return !onlineIds.includes(user.id);
  });

  var allUsers = [].concat(onlineUsers, offlineUsers);

  var cardData = allUsers.reduce(function (acc, user) {
    return [].concat(acc, [makeUserData(user)]);
  }, []);

  return cardData;
};

var fetchData = function fetchData(channels) {
  var headers = new Headers({
    'Client-ID': 'zw4ez3387m23jod5tuzeebtdbknd0b'
  });

  var endpoint = 'https://api.twitch.tv/helix';
  var queryString = makeLoginList(channels);

  return fetch(endpoint + '/users?' + queryString, { headers: headers }).then(function (response) {
    if (response.ok) return response.json();

    throw Error(response.statusText);
  }).then(function (users) {
    var idList = makeIdList(users.data);

    return fetch(endpoint + '/streams?' + idList, { headers: headers }).then(function (response) {
      if (response.ok) return response.json();

      throw Error(response.statusText);
    }).then(function (streams) {
      return makeChannelCardData(streams.data, users.data);
    });
  }).catch(function (err) {
    return console.log(err);
  });
};
// CONCATENATED MODULE: ./localStorage.js
var loadState = function loadState() {
  try {
    var serializedState = localStorage.getItem('twitch-reporter-app');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

var saveState = function saveState(state) {
  try {
    var serializedState = JSON.stringify(state);
    localStorage.setItem('twitch-reporter-app', serializedState);
  } catch (err) {
    console.log('save state error: ', err);
  }
};
// EXTERNAL MODULE: ./components/App/styles.css
var App_styles = __webpack_require__("9I7w");
var App_styles_default = /*#__PURE__*/__webpack_require__.n(App_styles);

// CONCATENATED MODULE: ./components/App/index.jsx


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }












var getVisibleChannels = function getVisibleChannels(channels, filter) {
  console.log(channels);
  switch (filter) {
    case 'all':
      return channels;
    case 'online':
      return channels.filter(function (channel) {
        return channel.isOnline;
      });
    case 'offline':
      return channels.filter(function (channel) {
        return !channel.isOnline;
      });
    default:
      return channels;
  }
};

var App__ref = Object(preact_min["h"])(components_Logo, {
  text: 'twitch.tv reporter',
  link: 'https://axzerk.github.io/codecamp-projects/twitch-status-app/build/'
});

var App_App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    var _temp, _this, _ret;

    _classCallCheck(this, App);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
      channels: [],
      visibilityFilter: 'all'
    }, _this.fetchData = function (channels) {
      var state = _this.state.channels;

      fetchData(channels).then(function (data) {
        if (state.length > 0 && data.length === 1) {
          var idList = state.map(function (channel) {
            return channel.id;
          });
          var channelID = data[0].id;

          if (!idList.includes(channelID)) {
            _this.setState(function (prevState) {
              return {
                channels: [].concat(data, prevState.channels)
              };
            }, function () {
              saveState(_this.state.channels);
            });
          }

          return;
        } else if (data.length > 1) {
          _this.setState({
            channels: data
          }, function () {
            saveState(_this.state.channels);
          });
        }
      });
    }, _this.onRemoveChannel = function (id) {
      _this.setState(function (prevState) {
        return {
          channels: prevState.channels.filter(function (channel) {
            return channel.id !== id;
          })
        };
      }, function () {
        saveState(_this.state.channels);
      });
    }, _this.setVisibilityFilter = function (filter) {
      _this.setState({
        visibilityFilter: filter
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  App.prototype.componentDidMount = function componentDidMount() {
    var persistedState = loadState();

    if (persistedState) {
      this.setState({
        channels: persistedState
      });
    } else {
      var channelsList = this.state.channels.length > 0 ? this.state.channels.map(function (channel) {
        return channel.name;
      }) : defaultChannels;

      this.fetchData(channelsList);
    }
  };

  App.prototype.render = function render() {
    var _state = this.state,
        channels = _state.channels,
        visibilityFilter = _state.visibilityFilter;

    return Object(preact_min["h"])(
      'div',
      { className: 'app' },
      Object(preact_min["h"])(
        components_AppBar,
        null,
        App__ref,
        Object(preact_min["h"])(components_Controls, {
          onChangeFilter: this.setVisibilityFilter,
          currentFilter: visibilityFilter
        }),
        Object(preact_min["h"])(components_SearchForm, { onSubmit: this.fetchData })
      ),
      channels.length > 0 && Object(preact_min["h"])(components_ChannelList, {
        channels: getVisibleChannels(channels, visibilityFilter),
        onDeleteCard: this.onRemoveChannel
      })
    );
  };

  return App;
}(preact_min["Component"]);


// CONCATENATED MODULE: ./index.js



/* harmony default export */ var index = __webpack_exports__["default"] = (App_App);

/***/ }),

/***/ "KM04":
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

/***/ "L34u":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "f1f3ef69355692b82dc2fbe6383b90b0.svg";

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

/***/ "W6R2":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"controls":"controls__3VVx7"};

/***/ }),

/***/ "cBpo":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fc627860df179d947b3ad29f651a9642.png";

/***/ }),

/***/ "mILp":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "d293bc8c3a99d515731fc6c532096b81.svg";

/***/ }),

/***/ "mW7B":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"list":"list__3yAXc","item":"item__hd_ej"};

/***/ }),

/***/ "rq4c":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "t/YY":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"card":"card__2CihZ","btn":"btn__2naLG","img":"img__2cUeT","info":"info__1hDZ4","name":"name__2YCiu","descr":"descr__2c7jX","icon":"icon__MzQHm"};

/***/ }),

/***/ "vfYn":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"bar":"bar__2KZdG"};

/***/ })

/******/ });
//# sourceMappingURL=ssr-bundle.js.map