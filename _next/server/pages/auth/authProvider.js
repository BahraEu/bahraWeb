module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/Tde":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "Raleway-Regular.ttf");

/***/ }),

/***/ "0cTh":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.lightTheme = void 0;
exports.lightTheme = {
  bg: {
    primary: '#3185FC',
    secondary: '#ff9500',
    inset: '#304d6d',
    inset1: '#9ac4f8',
    inset2: '#545e75',
    inset3: '#dcd7ca',
    input: 'rgba(65,67,78,0.12)'
  },
  border: {
    default: 'rgba(65,67,78,0.16)',
    opaque: '#BFC1C9'
  },
  text: {
    primary: '#052f5f',
    secondary: '#1b1725',
    tertiary: '#a9abb6',
    quarternary: '#9094A6',
    placeholder: 'rgba(145,148,161,0.5)',
    onPrimary: '#050505',
    link: '#FF9500'
  },
  icon: {
    primary: '#525560',
    secondary: '#9194a1',
    tertiary: '#bfc1c9'
  },
  accent: {
    blue: '#007AFF',
    green: '#34C759',
    orange: '#FF9500',
    red: '#FF3B30',
    yellow: '#FFCC00',
    purple: '#AF52DE',
    pink: '#FF2D55'
  }
};

/***/ }),

/***/ 12:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("665D");


/***/ }),

/***/ "1G7/":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _reactJsxRuntime = __webpack_require__("F5FC");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const react_1 = __importDefault(__webpack_require__("cDcd"));

const Box_1 = __importDefault(__webpack_require__("ZkBw"));

const spinner_style_1 = __webpack_require__("VyGx");

function CircularProgressWithLabel(props) {
  return /*#__PURE__*/_reactJsxRuntime.jsx(_reactJsxRuntime.Fragment, {
    children: /*#__PURE__*/_reactJsxRuntime.jsx("div", {
      children: /*#__PURE__*/_reactJsxRuntime.jsxs(Box_1.default, {
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        position: "absolute",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        children: [/*#__PURE__*/_reactJsxRuntime.jsx(spinner_style_1.Spinner, _objectSpread({}, props)), /*#__PURE__*/_reactJsxRuntime.jsx(spinner_style_1.SpinnerPrecent, {
          children: `${Math.round(props.value)}%`
        })]
      })
    })
  });
}

function CircularStatic() {
  const [progress, setProgress] = react_1.default.useState(30);
  react_1.default.useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prevProgress => prevProgress >= 100 ? 90 : prevProgress + 60);
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return /*#__PURE__*/_reactJsxRuntime.jsx(CircularProgressWithLabel, {
    value: progress
  });
}

exports.default = CircularStatic;

/***/ }),

/***/ "3O5c":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AuthContext = void 0;

const react_1 = __importDefault(__webpack_require__("cDcd"));

exports.AuthContext = react_1.default.createContext({
  user: null,
  logIn: () => {},
  logOut: () => {},
  signUp: () => {}
});

/***/ }),

/***/ "665D":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _reactJsxRuntime = __webpack_require__("F5FC");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function () {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);

  __setModuleDefault(result, mod);

  return result;
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const react_1 = __importStar(__webpack_require__("cDcd"));

const auth_functions_1 = __webpack_require__("lSxn");

const spinner_1 = __importDefault(__webpack_require__("1G7/"));

const context_1 = __webpack_require__("3O5c");

const cookie_1 = __importDefault(__webpack_require__("rlPI"));

const parseCookies_1 = __importDefault(__webpack_require__("FL+C"));

const utilty_1 = __webpack_require__("H8nO");

const bahraProviders_1 = __importDefault(__webpack_require__("Nx35"));

const index_1 = __webpack_require__("izHv");

const AuthProvider = props => {
  const initialLoginState = {
    isLoading: true,
    userID: null,
    token: null,
    RefreshToken: null,
    user: props.user
  }; // const client = useApolloClient()

  const loginReducer = (prevState, action) => {
    switch (action.type) {
      case 'USER':
        return Object.assign(Object.assign({}, prevState), {
          user: action.setUser,
          isLoading: false
        });

      case 'RETRIEVE_TOKEN':
        return Object.assign(Object.assign({}, prevState), {
          token: action.token,
          RefreshToken: action.RefreshToken,
          userID: action.userID,
          isLoading: false
        });

      case 'LOGIN':
        return Object.assign(Object.assign({}, prevState), {
          userID: action.userID,
          token: action.token,
          RefreshToken: action.RefreshToken,
          isLoading: false
        });

      case 'LOGOUT':
        return Object.assign(Object.assign({}, prevState), {
          userID: null,
          authToken: null,
          RefreshToken: null,
          isLoading: false
        });

      case 'REGISTER':
        return Object.assign(Object.assign({}, prevState), {
          userID: action.userID,
          token: action.jwtAuthToken,
          RefreshToken: action.RefreshToken,
          isLoading: false
        });
    }
  };

  const [loginState, dispatch] = react_1.default.useReducer(loginReducer, initialLoginState);
  const [user, setUser] = react_1.useState(props.user);
  const authContext = react_1.default.useMemo(() => ({
    user,
    // setUser: async ( userID:string) => {
    //     if (!isEmpty(userID)) {
    //         async (userID)=>{
    //                 await props.apolloClient.query({ query:WP_USER,
    //                   variables:{id:userID},
    //                 }).then( async(data) => {
    //                   console.log('ddddddddddddddddddddddddddddd',data)
    //                   const wpUser = data.user;
    //                   console.log('wpUser', wpUser);
    //                   setUser({user:wpUser})
    //                   return wpUser
    //                 }).catch((err)=>console.error(err)
    //                 )
    //         }
    //     }
    //     dispatch({ type: 'USER', user: user });
    // },
    logIn: async user => {
      if (!auth_functions_1.isEmpty(user)) {
        try {
          await setUser;
          setUser(user);
          document.cookie = cookie_1.default.serialize('authToken', user.jwtAuthToken, {
            maxAge: 30 * 24 * 60 * 60
          });
          document.cookie = cookie_1.default.serialize('refreshToken', user.jwtRefreshToken, {
            maxAge: 30 * 24 * 60 * 60
          });
          document.cookie = cookie_1.default.serialize('userID', user.id, {
            maxAge: 30 * 24 * 60 * 60
          });
          document.cookie = cookie_1.default.serialize('username', user.username, {
            maxAge: 30 * 24 * 60 * 60
          });
          await localStorage.setItem('authToken', user.jwtAuthToken);
          await localStorage.setItem('refreshToken', user.jwtRefreshToken);
          await localStorage.setItem('userID', user.id);
        } catch (e) {
          console.log(e);
        }
      }

      dispatch({
        type: 'LOGIN',
        userID: user.id,
        token: user.jwtAuthToken
      });
    },
    logOut: async () => {
      try {
        await localStorage.removeItem('authToken');
        await localStorage.removeItem('refreshToken');
        await localStorage.removeItem('userID');
      } catch (e) {
        console.log(e);
      }

      dispatch({
        type: 'LOGOUT'
      });
    },
    signUp: async user => {
      if (!auth_functions_1.isEmpty(user)) {
        try {
          setUser(user);
          await localStorage.setItem('authToken', user.jwtAuthToken);
          await localStorage.setItem('refreshToken', user.jwtRefreshToken);
          await localStorage.setItem('userID', user.id);
        } catch (e) {
          console.log(e);
        }
      } // console.log('user token: ', authToken);


      dispatch({
        type: 'LOGIN',
        id: user.id,
        token: user.jwtAuthToken
      });
    }
  }), []);

  if (!auth_functions_1.isEmpty(props.user)) {} else {
    react_1.useEffect(() => {
      setTimeout(async () => {
        let authToken = null;
        let userID = null;
        let RToken = null;

        try {
          authToken = utilty_1.isServer ? parseCookies_1.default().authToken : await localStorage.getItem('authToken');
          RToken = await localStorage.getItem('refreshToken');
          userID = utilty_1.isServer ? parseCookies_1.default().userID : await localStorage.getItem('userID');
        } catch (e) {
          console.log(e);
        }

        console.log(authToken);
        dispatch({
          type: 'RETRIEVE_TOKEN',
          userID: userID,
          RefreshToken: RToken,
          token: authToken
        });
      }, 1000);
    }, []);
  }

  if (loginState.isLoading) {
    return /*#__PURE__*/_reactJsxRuntime.jsx("div", {
      style: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      },
      children: /*#__PURE__*/_reactJsxRuntime.jsx(spinner_1.default, {})
    });
  }

  const Component = props.Component;
  const pageProps = props.pageProps;
  return /*#__PURE__*/_reactJsxRuntime.jsx(context_1.AuthContext.Provider, {
    value: authContext,
    children: /*#__PURE__*/_reactJsxRuntime.jsxs(bahraProviders_1.default, _objectSpread(_objectSpread({}, props.children), {}, {
      children: [/*#__PURE__*/_reactJsxRuntime.jsx(index_1.GlobalStyle, {}), loginState.token && loginState.userID !== null ? /*#__PURE__*/_reactJsxRuntime.jsx(Component, _objectSpread(_objectSpread({}, pageProps), {}, {
        user: props.user
      })) : /*#__PURE__*/_reactJsxRuntime.jsx(Component, _objectSpread({}, pageProps))]
    }))
  });
};

exports.default = AuthProvider;

/***/ }),

/***/ "6f9I":
/***/ (function(module, exports) {

module.exports = require("next-i18next");

/***/ }),

/***/ "8Dq7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "Montserrat-Bold.ttf");

/***/ }),

/***/ "8IYF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "Montserrat-Italic.ttf");

/***/ }),

/***/ "90Kz":
/***/ (function(module, exports) {

module.exports = require("next-routes");

/***/ }),

/***/ "C/vM":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GlobalStyle = void 0;

const theme_1 = __webpack_require__("u0o6");

const utilty_1 = __webpack_require__("H8nO");

const styled_components_1 = __webpack_require__("Dtiu");

exports.GlobalStyle = styled_components_1.createGlobalStyle`
@font-face {
  font-family: 'Roboto-Regular';
  src: url(${__webpack_require__("bY5k")}) 
  font-family: 'Roboto-Bold';
  src: url(${__webpack_require__("K3Dc")}) 
   font-family: 'Roboto-Light';
   src: url(${__webpack_require__("oGfq")}) 
   font-family: 'Roboto-Thin';
   src: url(${__webpack_require__("hF96")}) 


   font-family: 'Almarai-Regular';
  src: url(${__webpack_require__("bBd3")}) format('ttf'); 
  
  font-family: 'Almarai-Bold';
  src: url(${__webpack_require__("xTSN")}) format('ttf'); 

  font-family: 'Almarai-Light';
  src: url(${__webpack_require__("tpaq")}) format('ttf'); 
  


  font-family:'Montserrat-Bold'
  src: url(${__webpack_require__("8Dq7")}) 
  format('ttf');  

  font-family:'Montserrat-Medium'
  src: url(${__webpack_require__("SV3h")}) format('ttf'); 

  font-family:'Montserrat-Thin'
  src: url(${__webpack_require__("zACJ")}) format('ttf'); 

  font-family:'Montserrat-Italic'
  src: url(${__webpack_require__("8IYF")}) format('ttf'); 

  font-family:'Montserrat-Light'
  src: url(${__webpack_require__("GRjh")}) format('ttf'); 
  
  
  font-family: 'Raleway-Regular';
  src: url(${__webpack_require__("/Tde")}) 
  format('ttf');

  font-family: 'Raleway-Bold';
  src: url(${__webpack_require__("xcTX")}) format('ttf'); 

  font-family: 'Raleway-Thin';
  src: url(${__webpack_require__("pD34")}) format('ttf');
  font-family:'Raleway-Italic'
  src: url(${__webpack_require__("vykz")}) format('ttf'); 

  font-family:'Raleway-Light'
  src: url(${__webpack_require__("r0Ct")}) format('ttf'); 

  font-family:'Raleway-Medium'
  src: url(${__webpack_require__("xLhg")}) format('ttf'); 


  Raleway-Medium
  font-style: normal;
  font-weight: 400;
  font-display: fallback; /* <- this can be added to each @font-face definition */
}
  body {
    margin: 0;
    padding: 0;
    background-color: ${utilty_1.hexa(theme_1.theme.bg.inset3, 0.2)} !important;
    font-family: Roboto,Montserrat-Bold;
  }
  h1,h2,h3,h4,h5,h6,a,strong {
    color: ${utilty_1.tint(theme_1.theme.text.primary, 30)};
  }
  main {
    position: relative;
    top: 0;
    left: 0;
    padding: 0;
    margin-top: calc("60px" + "35px");
  }
`;

/***/ }),

/***/ "Dtiu":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "FL+C":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function () {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);

  __setModuleDefault(result, mod);

  return result;
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeMapInCookie = exports.setMapInCookie = void 0;

const cookie = __importStar(__webpack_require__("rlPI"));

const parseCookies = (req, options = {}) => {
  let documentCookie = '';

  if (false) {}

  return cookie.parse(req ? req.headers.cookie || '' : documentCookie, options);
};

exports.default = parseCookies;

const forIn_1 = __importDefault(__webpack_require__("pYo7"));

function setMapInCookie(res, map) {
  let cookies = '';
  forIn_1.default(map, (value, key) => {
    cookies += `${key}=${value}; `;
  });
  res.setHeader('Set-Cookie', cookies + 'Path=/; Secure; HttpOnly;');
}

exports.setMapInCookie = setMapInCookie;

function removeMapInCookie(keys, res) {
  let cookies = '';
  keys.map(key => {
    cookies += `${key}=deleted; `;
  });
  res.setHeader('Set-Cookie', cookies + 'Path=/; Secure; HttpOnly;');
}

exports.removeMapInCookie = removeMapInCookie;

/***/ }),

/***/ "GRjh":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "Montserrat-Light.ttf");

/***/ }),

/***/ "H8nO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function () {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __exportStar = this && this.__exportStar || function (m, exports) {
  for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tint = exports.hexa = void 0;

__exportStar(__webpack_require__("xg0D"), exports);

const hexa = (hex, alpha) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);

  if (alpha >= 0) {
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }

  return `rgb(${r}, ${g}, ${b})`;
};

exports.hexa = hexa;

const tint = (hex, amount) => {
  let R = parseInt(hex.substring(1, 3), 16);
  let G = parseInt(hex.substring(3, 5), 16);
  let B = parseInt(hex.substring(5, 7), 16);

  const getSingle = number => // @ts-ignore
  parseInt(number * (100 + amount) / 100, 10);

  R = getSingle(R);
  G = getSingle(G);
  B = getSingle(B);
  R = R < 255 ? R : 255;
  G = G < 255 ? G : 255;
  B = B < 255 ? B : 255;

  const getDouble = number => number.toString(16).length === 1 ? `0${number.toString(16)}` : number.toString(16);

  const RR = getDouble(R);
  const GG = getDouble(G);
  const BB = getDouble(B);
  return `#${RR}${GG}${BB}`;
};

exports.tint = tint;

/***/ }),

/***/ "K3Dc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "Roboto-Bold.ttf");

/***/ }),

/***/ "KKbo":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "MD2z":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function () {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);

  __setModuleDefault(result, mod);

  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pre = exports.P = exports.H6 = exports.H5 = exports.H4 = exports.H3 = exports.H2 = exports.H1 = void 0;

const theme_1 = __webpack_require__("u0o6");

const _utilty_1 = __webpack_require__("H8nO");

const theme_2 = __importStar(__webpack_require__("izHv"));

const core_1 = __webpack_require__("KKbo");

exports.H1 = theme_2.default(core_1.Typography)`
font-weight: ${theme_1.theme.fontSizes[0]};

`;
exports.H2 = theme_2.default(core_1.Typography)`
font-weight: ${theme_1.theme.fontSizes[1]};

`;
exports.H3 = theme_2.default(core_1.Typography)`
font-weight: ${theme_1.theme.fontSizes[2]};

`;
exports.H4 = theme_2.default(core_1.Typography)`
font-weight: ${theme_1.theme.fontSizes[3]};

`;
exports.H5 = theme_2.default(core_1.Typography)`
font-weight: ${theme_1.theme.fontSizes[4]};

`;
exports.H6 = theme_2.default(core_1.Typography)`
font-weight: ${theme_1.theme.fontSizes[5]};

   
`;
exports.P = theme_2.default(core_1.Typography)`
    font-size: ${theme_1.theme.fontSizes[6]};
    font-weight: ${theme_1.theme.fontWeights.body};
    line-height: ${theme_1.theme.lineHeights.body};
    letter-spacing: -0.1px;
    color: ${props => props.theme.text.secondary};

    a {
        color: ${props => props.theme.text.link};
        text-decoration: none;
        font-weight: 500;
        word-break: break-word;
        hyphens: auto;
    }

    a:hover {
        text-decoration: none;
        color: ${props => _utilty_1.tint(props.theme.text.link, -30)};
    }

    code {
        margin-top: 0;
        font-size: ${theme_1.theme.fontSizes[0]};
        box-shadow: inset 0 0 0 1px ${props => props.theme.border.default};
    }

    & + & {
        margin-top: ${theme_1.theme.space[4]};
    }

    code {
        margin-top: 0;
        font-size: ${theme_1.theme.fontSizes[0]};
    }

    a > code {
        padding: ${theme_1.theme.space[0]} ${theme_1.theme.space[1]};
        box-shadow: inset 0 0 0 1px ${props => _utilty_1.hexa(props.theme.text.link, 0.16)};
        border-radius: 4px;
        display: inline-block;
        background: ${props => _utilty_1.hexa(props.theme.text.link, 0.12)};
        color: ${props => props.theme.text.link};
    }

    a:hover > code {
        background: ${props => _utilty_1.hexa(props.theme.text.link, 0.16)};
    }
`;
exports.pre = theme_2.css`
    font-size: ${theme_1.theme.fontSizes[0]};
    padding: ${theme_1.theme.space[3]};
    background: ${props => props.theme.bg.inset};
    text-shadow: none;
    border-radius: 8px;
    margin: ${theme_1.theme.space[5]} 0;
    overflow-x: scroll;
    box-shadow: 0 0 0 1px ${props => props.theme.border.default},
        inset 0 1px 4px rgba(0, 0, 0, 0.04);

    &::-webkit-scrollbar {
        display: none;
    }

    @media (max-width: ${theme_1.theme.breakpoints[4]}) {
        font-size: ${theme_1.theme.fontSizes[0]};
    }
`;

/***/ }),

/***/ "Nx35":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _reactJsxRuntime = __webpack_require__("F5FC");

var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function () {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);

  __setModuleDefault(result, mod);

  return result;
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useStore = exports.StoreContext = void 0;

const react_1 = __importStar(__webpack_require__("cDcd"));

const use_dark_mode_1 = __importDefault(__webpack_require__("rsis")); // import { initializeStore } from '../../src/services/stores/store'


const theme_1 = __webpack_require__("izHv");

let store;
exports.StoreContext = react_1.createContext(store);

function useStore() {
  const context = react_1.useContext(exports.StoreContext);

  if (context === undefined) {
    throw new Error('useStore must be used within StoreProvider');
  }

  return context;
}

exports.useStore = useStore;

const BahraProvider = props => {
  // const store = initializeStore()
  const darkMode = use_dark_mode_1.default(true);
  const [theme, setTheme] = react_1.default.useState(theme_1.Light);
  const [mounted, setMounted] = react_1.default.useState(false);
  react_1.default.useEffect(() => {
    setTheme(darkMode.value ? theme_1.Dark : theme_1.Light);
    setMounted(true);
  }, []);

  const body = /*#__PURE__*/_reactJsxRuntime.jsx(theme_1.ThemeProvider, {
    theme: theme,
    children: props.children
  });

  if (!mounted) {
    return /*#__PURE__*/_reactJsxRuntime.jsx("div", {
      children: body
    });
  }

  return body;
};

exports.default = BahraProvider;

/***/ }),

/***/ "OcYQ":
/***/ (function(module, exports) {

// const { config } = require('dotenv');
// const path = require('path');
// const { NODE_ENV, CUSTOM_ENV } = process.env;
// const DIR = path.resolve(__dirname, NODE_ENV === 'production' ? '../' : '/');
// config({
//     path: `${DIR}/${NODE_ENV}-${CUSTOM_ENV}.env`,
// });
module.exports = {
  BUNDLE_ANALYZE: process.env.BUNDLE_ANALYZE,
  NODE_ENV: "production",
  PORT: process.env.PORT,
  HOST: process.env.HOST,
  IS_PROD: true,
  GA_TRACKING_ID: process.env.GA_TRACKING_ID || 'XXX-XXX-XXX',
  WP_BAHRA: process.env.WP_BAHRA,
  DEV: false,
  BASE_URL: process.env.BASE_URL,
  FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
  FIREBASE_AUTH_DOMAIN: process.env.FIREBASE_AUTH_DOMAIN,
  FIREBASE_DATABASE_URL: process.env.FIREBASE_DATABASE_URL,
  FIREBASE_PROJECT_ID: process.env.FIREBASE_PROJECT_ID,
  FIREBASE_STORAGE_BUCKET: process.env.FIREBASE_STORAGE_BUCKET,
  FIREBASE_MESSAGING_SENDER_ID: process.env.FIREBASE_MESSAGING_SENDER_ID,
  FIREBASE_APP_ID: process.env.FIREBASE_APP_ID,
  PAYPAL_CLIENT_ID: process.env.PAYPAL_CLIENT_ID,
  PAYPAL_CLIENT_SECRET: process.env.PAYPAL_CLIENT_SECRET,
  STRIPE_CLIENT_ID: process.env.STRIPE_CLIENT_ID,
  STRIPE_CLIENT_SECRET: process.env.STRIPE_CLIENT_SECRET,
  STRIPE_WEBHOOK_SECRET: process.env.STRIPE_WEBHOOK_SECRET,
  COUPON_SALT: process.env.COUPON_SALT,
  COUPON_URL: process.env.COUPON_URL,
  FIREBASE_ADMIN_UID: process.env.FIREBASE_ADMIN_UID,
  WP_authToken: process.env.WP_authToken,
  Language: process.env.Language,
  Theme: process.env.Theme,
  UserId: process.env.UserId,
  Username: process.env.username
};

/***/ }),

/***/ "SV3h":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "Montserrat-Medium.ttf");

/***/ }),

/***/ "VyGx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SpinnerContainer = exports.SpinnerOverlay = exports.SpinnerPrecent = exports.Spinner = void 0;

const core_1 = __webpack_require__("KKbo");

const utilty_1 = __webpack_require__("H8nO");

const index_1 = __importDefault(__webpack_require__("izHv"));

const index_2 = __webpack_require__("MD2z");

exports.Spinner = index_1.default(core_1.CircularProgress)`
height:4.6em !important;
  width: 4.6em !important;
  display: flex;
  justify-content: center;
  color:   #3185FC !important;
  align-items: center;`;
exports.SpinnerPrecent = index_1.default(index_2.H2)`
  height:2em !important;
  width: 2em !important;
  position: absolute;
  margin-left: 0;
  display: inline-flex;
  justify-content: center;
  color:${utilty_1.hexa('#9094A6', 0.9)}; !important;
  align-items: center;`;
exports.SpinnerOverlay = index_1.default.div`
  height:4em;
  width: 4em;
  display: flex;
  justify-content: center;
  align-items: center;
`;
exports.SpinnerContainer = index_1.default(core_1.Box)`
  display: inline-flex;
  width: 50px;
  height: 50px;
  border: 3px solid rgba(195, 195, 195, 0.6);
  border-radius: 50%;
  animation: spin 1s ease-in-out infinite;
  -webkit-animation: spin 1s ease-in-out infinite;

  @keyframes spin {
    to {
      -webkit-transform: scale(360deg);
    }
  }
  @-webkit-keyframes spin {
    to {
      -webkit-transform: scale(360deg);
    }
  }
`;

/***/ }),

/***/ "ZkBw":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Box");

/***/ }),

/***/ "bBd3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "Almarai-Regular.ttf");

/***/ }),

/***/ "bY5k":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "Roboto-Regular.ttf");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "hF96":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "Roboto-Thin.ttf");

/***/ }),

/***/ "izHv":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function () {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});

var __exportStar = this && this.__exportStar || function (m, exports) {
  for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);

  __setModuleDefault(result, mod);

  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ThemeProvider = exports.keyframes = exports.createGlobalStyle = exports.css = exports.GlobalStyle = void 0;

__exportStar(__webpack_require__("u0o6"), exports);

const styledComponents = __importStar(__webpack_require__("Dtiu"));

var GlobalStyle_1 = __webpack_require__("C/vM");

Object.defineProperty(exports, "GlobalStyle", {
  enumerable: true,
  get: function () {
    return GlobalStyle_1.GlobalStyle;
  }
});
const {
  default: styled,
  css,
  createGlobalStyle,
  keyframes,
  ThemeProvider
} = styledComponents;
exports.css = css;
exports.createGlobalStyle = createGlobalStyle;
exports.keyframes = keyframes;
exports.ThemeProvider = ThemeProvider;
exports.default = styled;

/***/ }),

/***/ "k7Sn":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const NextI18Next = __webpack_require__("6f9I").default;

const options = {
  defaultLanguage: 'English',
  otherLanguages: ['Arabic'],
  fallbackLng: 'English',
  ignoreRoutes: ['/service-worker.js'],
  interpolation: {
    format: function (value, format, lng) {
      if (format === 'uppercase') {
        return value.toUpperCase();
      }

      if (format === 'currency') {
        return new Intl.NumberFormat(lng).format(Number(value)); // under node 11, only formats in US currency
      }

      if (value instanceof Date) {
        return __webpack_require__("wy2R")(value).format(format); // @todo use lighter lib than moment
      }

      return value;
    }
  }
};
const nextI18NextInstance = new NextI18Next(options);
module.exports = nextI18NextInstance;

/***/ }),

/***/ "lSxn":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getUser = exports.isUserValidated = exports.isEmpty = void 0;

const config_1 = __importDefault(__webpack_require__("OcYQ"));

const parseCookies_1 = __importDefault(__webpack_require__("FL+C"));

const _1 = __webpack_require__("H8nO");

const wp_user_1 = __webpack_require__("mwnj"); // import { User } from '../types/User';

/**
 * Returns true if the value is undefined/null/empty object/empty string.
 *
 * @param value
 * @return {boolean}
 */


const isEmpty = value => value === undefined || value === null || typeof value === 'object' && Object.keys(value).length === 0 || typeof value === 'string' && value.trim().length === 0;

exports.isEmpty = isEmpty;
/**
 * Check if user is logged in.
 *
 * @return {object} Auth Object containing token and user data, false on failure.
 */

const isUserValidated = () => {
  if (!exports.isEmpty) {
    let authTokenData = _1.isServer ? parseCookies_1.default().authToken : localStorage.getItem(config_1.default.WP_authToken);
    let userID = _1.isServer ? parseCookies_1.default().userID : localStorage.getItem(config_1.default.userID);
    let userLoggedInData = {};

    if (!exports.isEmpty(authTokenData)) {
      authTokenData = JSON.parse(authTokenData);
      userID = JSON.parse(userID);

      if (!exports.isEmpty(authTokenData)) {
        userLoggedInData = {
          authTokenData,
          userID
        };
      }
    }

    return userLoggedInData;
  } else {
    let userLoggedInData = {};
    let authTokenData = _1.isServer ? parseCookies_1.default().authToken : parseCookies_1.default().authToken;
    let userID = _1.isServer ? parseCookies_1.default().userID : parseCookies_1.default().userID;

    if (!exports.isEmpty(authTokenData)) {
      authTokenData = JSON.parse(authTokenData);
      userID = JSON.parse(userID);

      if (!exports.isEmpty(authTokenData)) {
        userLoggedInData = {
          authTokenData,
          userID
        };
      }

      return userLoggedInData;
    }
  }
};

exports.isUserValidated = isUserValidated;
/**
 * Logout the user.
 *
 * @param {string} urlToRedirect URL where user needs to be redirected after logout.
 *
 * @return {void}
 */

const getUser = async (client, userID) => {
  await client.query({
    query: wp_user_1.WP_USER,
    variables: {
      id: userID
    }
  }).then(async data => {
    console.log('ddddddddddddddddddddddddddddd', data);
    const wpUser = data.data.user;
    const loading = data.loading;
    console.log('wpUser', wpUser, loading);

    if (!exports.isEmpty(wpUser)) {//   await userStore.createUser(wpUser)
    }

    return {
      wpUser,
      loading
    };
  }).catch(err => console.error(err));
};

exports.getUser = getUser; // export const getUsers = async(client)=>
//  await client.query({query:GET_ALL_WP_USERS}).then( async(data) => {
//    const wpUsers=!isEmpty(data.users) ?data.users.nodes:null
//    console.log('ddddddddddddddddddddddddddddd wpUsers',data.data.users.nodes,wpUsers)
// return wpUsers
//  }).catch((err)=>console.error(err)
//  )

/***/ }),

/***/ "mlct":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Router = exports.Link = void 0;

const routes = __webpack_require__("90Kz");

module.exports = routes().add('index', '/').add('register', '/signup').add('forgetPassword', '/forget_pass').add('resetPassword', '/reset_pass').add('login', '/login').add('about', '/about').add('contact', '/contact').add('security', '/security').add('guide', '/guide').add('addProduct', '/products/add_product').add('addEvent', '/events/add_event').add('product', '/products/:id').add('blog', '/blogs/:slug').add('artist', '/artists/:slug').add('event', '/events/:id').add('team', '/team/:id').add('AddBlog', '/blogs/addBlog/:id').add('AddEvent', '/events/addEvent/:id').add('blogsPage', '/blogs', 'blogs').add('artistsPage', '/artists', 'artists').add('eventsPage', '/events', 'events').add('shop', '/shop').add('productsPage', '/products', 'products').add('teamPage', '/team', 'team').add('cart', '/cart').add('checkout', '/checkout').add('account', '/account');
exports.Link = routes.Link;
exports.Router = routes.Router;

/***/ }),

/***/ "mwnj":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GET_ALL_WP_USERS = exports.WP_USER = void 0;

const graphql_tag_1 = __importDefault(__webpack_require__("txk1"));

exports.WP_USER = graphql_tag_1.default`
query user($id: ID!) {
    user(id: $id) {
        username
        userId
        roles {
          nodes {
            capabilities
            id
            name
            isRestricted
            displayName
          }
        }
        id
        lastName
        locale
        name
        nicename
        nickname
        posts {
          nodes {
            id
            excerpt
          }
        }
        firstName
        extraCapabilities
        mediaItems {
          nodes {
            title
            sourceUrl
            date
            id
          }
        }
        avatar {
          rating
          size
          url
          width
          default
        }
        capabilities
        comments {
          nodes {
            commentId
            date
            databaseId
            content
            id
            dateGmt
            replies {
              nodes {
                id
                dateGmt
                date
                commentId
              }
            }
          }
        }
        email
        description
      }
      users {
        nodes {
          id
        }
      }
    }
`;
exports.GET_ALL_WP_USERS = graphql_tag_1.default`
{
  users {
    nodes {
      id
      databaseId
      description
      mediaItems {
        nodes {

            id

        }
      }
      name
      email
      roles {
        nodes {
          id
          name
          displayName
        }
      }
      avatar {
        url
      }
      username
      posts {
        nodes {
          id
          title
          content
        }
      }
      events {
        nodes {
          id
          title
          content
        }
      }
      userId
      slug
    }
  }
}
`;

/***/ }),

/***/ "oGfq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "Roboto-Light.ttf");

/***/ }),

/***/ "pD34":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "Raleway-Thin.ttf");

/***/ }),

/***/ "pYo7":
/***/ (function(module, exports) {

module.exports = require("lodash/forIn");

/***/ }),

/***/ "r0Ct":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "Raleway-Light.ttf");

/***/ }),

/***/ "rlPI":
/***/ (function(module, exports) {

module.exports = require("cookie");

/***/ }),

/***/ "rsis":
/***/ (function(module, exports) {

module.exports = require("use-dark-mode");

/***/ }),

/***/ "tMJi":
/***/ (function(module, exports) {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "tpaq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "Almarai-Light.ttf");

/***/ }),

/***/ "txk1":
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

/***/ }),

/***/ "u0o6":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Dark = exports.Light = exports.theme = void 0;

const darkTheme_1 = __webpack_require__("wU6e");

const lightTheme_1 = __webpack_require__("0cTh");

exports.theme = Object.assign(Object.assign(Object.assign({}, lightTheme_1.lightTheme), darkTheme_1.darkTheme), {
  fonts: {
    Roboto: ['Roboto-Regular ', 'Roboto-Thin', 'Roboto-Bold', 'Roboto-Light'],
    Montserrat: ['Roboto-Regular ', 'Montserrat-Thin', 'Montserrat-Bold', 'Montserrat-Light'],
    Almarai: ['Roboto-Regular ', 'Almarai-Thin', 'Almarai-Bold', 'Almarai-Light'],
    Raleway: ['Raleway-Regular ', 'Raleway-Thin', 'Raleway-Bold', 'Raleway-Light']
  },
  social: {
    facebook: '#1877f2',
    twitter: '#00ACED'
  },
  lineHeights: {
    body: 1.6,
    heading: 1.2,
    code: 1.6
  },
  fontWeights: {
    body: 400,
    subheading: 500,
    link: 600,
    bold: 700,
    heading: 800
  },
  fontSizes: ['0.4rem', '0.6rem', '0.8rem', '1rem', '1.2rem', '1.5rem', '1.875rem', '2.25rem'],
  errors: ['#7A1414', '#BE0A0A', '#FF4F4F', '#FFC6C6', '#FFF3F3'],
  warnings: ['#684B00', '#CC9C23', '#FFCB44', '#FFE6A6', '#FFF8E7'],
  success: ['#07822A', '#49B267', '#67D987', '#AEF1C1', '#E1FFE9'],
  radii: ['3px', '.4rem', '.5rem', '.6rem'],
  space: ['0.4em', '0.6em', '.8em', '1em', '1.6em'],
  shadows: {
    default: '0 4px 8px rgba(0,0,0,0.08)',
    hover: '0 8px 24px rgba(0,0,0,0.10)',
    active: '0 6px 20px rgba(0,0,0,0.09)',
    button: '0 4px 12px rgba(0,0,0,0.08)',
    largeHover: '0 1px 0.4px rgba(0, 0, 0, 0),0 1.7px 0.8px rgba(0, 0, 0, 0.001),0 2.3px 1.3px rgba(0, 0, 0, 0.002),0 2.8px 2px rgba(0, 0, 0, 0.004),0 3.3px 2.9px rgba(0, 0, 0, 0.007),0 4px 4.1px rgba(0, 0, 0, 0.012),0 4.9px 5.8px rgba(0, 0, 0, 0.018),0 6.3px 8.4px rgba(0, 0, 0, 0.029),0 8.8px 12.9px rgba(0, 0, 0, 0.05),0 15px 23px rgba(0, 0, 0, 0.11)'
  },
  animations: {
    default: '0.15s ease-out',
    hover: '0.15s ease-in',
    active: '0.15s ease-in-out'
  },
  borders: {
    basic: 'solid .125rem'
  },
  breakpoints: ['1440px', '1256px', '1080px', '968px', '768px', '512px', '420px'],
  buttons: {
    primary: {
      backgroundColor: '#6DC1FD',
      color: '#ffffff',
      margin: '0 1rem',
      fontSize: '1.4rem',
      padding: '.8rem 1rem',
      textTransform: 'uppercase',
      borderRadius: '.4rem'
    },
    topic: {
      backgroundColor: '#E2F3FF',
      color: '#3290D4',
      borderRadius: '.3rem',
      fontSize: '.8rem',
      padding: '.3rem',
      paddingRight: '.5rem',
      paddingLeft: '.5rem',
      letterSpacing: 0.5,
      fontWeight: 'normal',
      cursor: 'pointer',
      '&:hover': {
        backgroundColor: '#F3FAFF'
      },
      '&:not(:last-child)': {
        marginRight: '1rem'
      }
    },
    direction: ['ltr', 'rtl']
  }
});
exports.Light = Object.assign(Object.assign({}, exports.theme), lightTheme_1.lightTheme);
exports.Dark = Object.assign(Object.assign({}, exports.theme), darkTheme_1.darkTheme);

/***/ }),

/***/ "vykz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "Raleway-Italic.ttf");

/***/ }),

/***/ "wU6e":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.darkTheme = void 0;
exports.darkTheme = {
  bg: {
    primary: '#052f5f',
    secondary: '#dcd7ca',
    inset: '#534b62',
    inset1: '#3185fc',
    inset2: '#CA7600',
    inset3: '#1b1725',
    input: 'rgba(191,193,201,0.12)'
  },
  border: {
    default: 'rgba(255,255,255,0.16)',
    opaque: '#41434e'
  },
  text: {
    primary: '#304d6d',
    secondary: '#545e75',
    tertiary: '#525560',
    quarternary: '#686B78',
    placeholder: 'rgba(82,85,96,0.5)',
    onPrimary: '#ffffff',
    link: '#007AFF'
  },
  icon: {
    primary: '#9194a1',
    secondary: '#5e616e',
    tertiary: '#41434e'
  },
  accent: {
    blue: '#0A84FF',
    green: '#32D74B',
    orange: '#FF9F0A',
    red: '#FF453A',
    yellow: '#FFD60A',
    purple: '#BF5AF2',
    pink: '#FF375F'
  }
};

/***/ }),

/***/ "wy2R":
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "xLhg":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "Raleway-Medium.ttf");

/***/ }),

/***/ "xTSN":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "Almarai-Bold.ttf");

/***/ }),

/***/ "xcTX":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "Raleway-Bold.ttf");

/***/ }),

/***/ "xg0D":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function () {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);

  __setModuleDefault(result, mod);

  return result;
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getuserID = exports.isServer = exports.setDirection = exports.changeLanguage = exports.isRtl = exports.redirect = exports.checkTokenIsExpired = exports.filterHtmlProps = exports.debounce = exports.normalizeString = exports.sum = void 0;

const jsonwebtoken_1 = __importDefault(__webpack_require__("tMJi"));

const routes_1 = __webpack_require__("mlct");

const cookie = __importStar(__webpack_require__("rlPI"));

const i18n_1 = __webpack_require__("k7Sn");

const parseCookies_1 = __importDefault(__webpack_require__("FL+C"));

const sum = (a, b) => a + b;

exports.sum = sum;
/**
 * Based on:
 * - https://stackoverflow.com/questions/20856197/remove-non-ascii-character-in-string
 * - https://gist.github.com/alisterlf/3490957
 *
 * TODO: if necessary, use a package that supports arabic, cyrillic, etc ...
 */

function normalizeString(str) {
  const accents = 'ÀÁÂÃÄÅĄĀāàáâãäåąßÒÓÔÕÕÖØŐòóôőõöøĎďDŽdžÈÉÊËĘèéêëęðÇçČčĆćÐÌÍÎÏĪìíîïīÙÚÛÜŰùűúûüĽĹŁľĺłÑŇŃňñńŔŕŠŚŞšśşŤťŸÝÿýŽŻŹžżźđĢĞģğ';
  const out = 'AAAAAAAAaaaaaaaasOOOOOOOOoooooooDdDZdzEEEEEeeeeeeCcCcCcDIIIIIiiiiiUUUUUuuuuuLLLlllNNNnnnRrSSSsssTtYYyyZZZzzzdGGgg';
  return (str || '').toLowerCase().split('').map(letter => {
    const index = accents.indexOf(letter);
    return index !== -1 ? out[index] : letter;
  }) // remove accents
  .join('').replace(/[^\x00-\x7F]/g, '') // remove non ascii chars
  .replace(/[^\w\s]/gi, '').replace(/ /g, '-');
}

exports.normalizeString = normalizeString; // Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.
// based on https://github.com/topheman/npm-registry-browser/blob/master/src/utils/helpers.js

function debounce(func, wait, immediate) {
  let timeout;
  return function debounced(...args) {
    // @ts-ignore
    const context = this;

    const later = function laterFn() {
      timeout = null;

      if (!immediate) {
        func.apply(context, args);
      }
    };

    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);

    if (callNow) {
      func.apply(context, args);
    }
  };
}

exports.debounce = debounce;

function filterHtmlProps(props) {
  const disallow = ['i18n', 'i18nOptions', 'defaultNS', 'reportNS', 'tReady', 'innerRef', 'translationLanguageFullCode', 'defaultLanguageShortCode', 'defaultLanguageFullCode', 'switchDefaultLanguage', 'switchTranslationLanguage', 'resetTranslationLanguage'];
  const filteredProps = {};
  Object.entries(props).forEach(([key, value]) => {
    if (!disallow.includes(key)) {
      filteredProps[key] = value;
    }
  });
  return filteredProps;
}

exports.filterHtmlProps = filterHtmlProps;

function checkTokenIsExpired(token) {
  const decodedToken = jsonwebtoken_1.default.decode(token);
  return decodedToken === null || typeof decodedToken === 'string' || new Date(decodedToken.exp * 1000) < new Date();
}

exports.checkTokenIsExpired = checkTokenIsExpired;

const redirect = (context, target) => {
  if (context.res) {
    // server
    // 303: "See other"
    context.res.writeHead(303, {
      Location: target
    });
    context.res.end();
  } else {
    // In the browser, we just pretend like this never even happened ;)
    routes_1.Router.replace(target);
  }
};

exports.redirect = redirect;
exports.isRtl = i18n_1.i18n.dir() === 'rtl' ? true : false;

const changeLanguage = ({
  lang,
  currentLanguage
}) => {
  i18n_1.i18n.changeLanguage(lang);

  if (lang !== currentLanguage && lang.includes('Ar')) {
    exports.setDirection(lang);
    document.cookie = cookie.serialize('language', lang, {
      maxAge: 30 * 24 * 60 * 60
    });
    localStorage.setItem('language', JSON.stringify(lang));
  } else {
    exports.setDirection(lang);
    document.cookie = cookie.serialize('language', lang, {
      maxAge: 30 * 24 * 60 * 60
    });
    localStorage.setItem('language', JSON.stringify(lang));
  }
};

exports.changeLanguage = changeLanguage;

const setDirection = language => document.getElementsByTagName('html')[0].setAttribute('dir', language === 'Arabic' ? 'rtl' : 'ltr');

exports.setDirection = setDirection;
exports.isServer = true;

const getuserID = async () => {
  let authToken = null;
  let userID = null;
  let RToken = null;

  try {
    authToken = exports.isServer ? parseCookies_1.default().authToken : await localStorage.getItem('authToken');
    RToken = await localStorage.getItem('refreshToken');
    console.log(authToken, userID, RToken);
    userID = exports.isServer ? parseCookies_1.default().userID : await localStorage.getItem('userID');
  } catch (e) {
    console.log(e);
  }
};

exports.getuserID = getuserID;

/***/ }),

/***/ "zACJ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "Montserrat-Thin.ttf");

/***/ })

/******/ });