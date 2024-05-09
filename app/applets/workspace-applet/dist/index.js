
/*! *****************************************************************************************************************************
* Copyright (c) Tuvalsoft Corporation. All rights reserved.                                                                     *
*                                                                                                                               *
* ████████╗██╗   ██╗██╗   ██╗ █████╗ ██╗         ███████╗██████╗  █████╗ ███╗   ███╗███████╗██╗    ██╗ ██████╗ ██████╗ ██╗  ██╗ *
* ╚══██╔══╝██║   ██║██║   ██║██╔══██╗██║         ██╔════╝██╔══██╗██╔══██╗████╗ ████║██╔════╝██║    ██║██╔═══██╗██╔══██╗██║ ██╔╝ *
*    ██║   ██║   ██║██║   ██║███████║██║         █████╗  ██████╔╝███████║██╔████╔██║█████╗  ██║ █╗ ██║██║   ██║██████╔╝█████╔╝  *
*    ██║   ██║   ██║╚██╗ ██╔╝██╔══██║██║         ██╔══╝  ██╔══██╗██╔══██║██║╚██╔╝██║██╔══╝  ██║███╗██║██║   ██║██╔══██╗██╔═██╗  *
*    ██║   ╚██████╔╝ ╚████╔╝ ██║  ██║███████╗    ██║     ██║  ██║██║  ██║██║ ╚═╝ ██║███████╗╚███╔███╔╝╚██████╔╝██║  ██║██║  ██╗ *
*    ╚═╝    ╚═════╝   ╚═══╝  ╚═╝  ╚═╝╚══════╝    ╚═╝     ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝     ╚═╝╚══════╝ ╚══╝╚══╝  ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝ *
*                                                                                                                               *
*                                                                                                                               *
* This file is part of Tuval Framework.                                                                                         *
* Copyright (c) Tuvalsoft 2019 All rights reserved.                                                                             *
*                                                                                                                               *
* Licensed under the GNU General Public License v3.0.                                                                           *
* More info at: https://choosealicense.com/licenses/gpl-3.0/                                                                    *
* Tuval Framework Created By Tuvalsoft in 2019                                                                                  *
******************************************************************************************************************************@*/
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@uiw/color-convert/esm/index.js":
/*!******************************************************!*\
  !*** ./node_modules/@uiw/color-convert/esm/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   color: () => (/* binding */ color),
/* harmony export */   equalColorObjects: () => (/* binding */ equalColorObjects),
/* harmony export */   equalColorString: () => (/* binding */ equalColorString),
/* harmony export */   equalHex: () => (/* binding */ equalHex),
/* harmony export */   getContrastingColor: () => (/* binding */ getContrastingColor),
/* harmony export */   hexToHsva: () => (/* binding */ hexToHsva),
/* harmony export */   hexToRgba: () => (/* binding */ hexToRgba),
/* harmony export */   hslStringToHsla: () => (/* binding */ hslStringToHsla),
/* harmony export */   hslStringToHsva: () => (/* binding */ hslStringToHsva),
/* harmony export */   hslaStringToHsva: () => (/* binding */ hslaStringToHsva),
/* harmony export */   hslaToHsl: () => (/* binding */ hslaToHsl),
/* harmony export */   hslaToHsva: () => (/* binding */ hslaToHsva),
/* harmony export */   hsvStringToHsva: () => (/* binding */ hsvStringToHsva),
/* harmony export */   hsvaStringToHsva: () => (/* binding */ hsvaStringToHsva),
/* harmony export */   hsvaToHex: () => (/* binding */ hsvaToHex),
/* harmony export */   hsvaToHexa: () => (/* binding */ hsvaToHexa),
/* harmony export */   hsvaToHslString: () => (/* binding */ hsvaToHslString),
/* harmony export */   hsvaToHsla: () => (/* binding */ hsvaToHsla),
/* harmony export */   hsvaToHslaString: () => (/* binding */ hsvaToHslaString),
/* harmony export */   hsvaToHsv: () => (/* binding */ hsvaToHsv),
/* harmony export */   hsvaToHsvString: () => (/* binding */ hsvaToHsvString),
/* harmony export */   hsvaToHsvaString: () => (/* binding */ hsvaToHsvaString),
/* harmony export */   hsvaToRgbString: () => (/* binding */ hsvaToRgbString),
/* harmony export */   hsvaToRgba: () => (/* binding */ hsvaToRgba),
/* harmony export */   hsvaToRgbaString: () => (/* binding */ hsvaToRgbaString),
/* harmony export */   parseHue: () => (/* binding */ parseHue),
/* harmony export */   rgbStringToHsva: () => (/* binding */ rgbStringToHsva),
/* harmony export */   rgbaStringToHsva: () => (/* binding */ rgbaStringToHsva),
/* harmony export */   rgbaToHex: () => (/* binding */ rgbaToHex),
/* harmony export */   rgbaToHexa: () => (/* binding */ rgbaToHexa),
/* harmony export */   rgbaToHsva: () => (/* binding */ rgbaToHsva),
/* harmony export */   rgbaToRgb: () => (/* binding */ rgbaToRgb),
/* harmony export */   validHex: () => (/* binding */ validHex)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");

var RGB_MAX = 255;
var HUE_MAX = 360;
var SV_MAX = 100;
/**
 * ```js
 * rgbaToHsva({ r: 255, g: 255, b: 255, a: 1 }) //=> { h: 0, s: 0, v: 100, a: 1 }
 * ```
 */
var rgbaToHsva = _ref => {
  var {
    r,
    g,
    b,
    a
  } = _ref;
  var max = Math.max(r, g, b);
  var delta = max - Math.min(r, g, b);

  // prettier-ignore
  var hh = delta ? max === r ? (g - b) / delta : max === g ? 2 + (b - r) / delta : 4 + (r - g) / delta : 0;
  return {
    h: 60 * (hh < 0 ? hh + 6 : hh),
    s: max ? delta / max * SV_MAX : 0,
    v: max / RGB_MAX * SV_MAX,
    a
  };
};
var hsvaToHslString = hsva => {
  var {
    h,
    s,
    l
  } = hsvaToHsla(hsva);
  // return `hsl(${h}, ${s}%, ${l}%)`;
  return "hsl(" + h + ", " + Math.round(s) + "%, " + Math.round(l) + "%)";
};
var hsvaToHsvString = _ref2 => {
  var {
    h,
    s,
    v
  } = _ref2;
  return "hsv(" + h + ", " + s + "%, " + v + "%)";
};
var hsvaToHsvaString = _ref3 => {
  var {
    h,
    s,
    v,
    a
  } = _ref3;
  return "hsva(" + h + ", " + s + "%, " + v + "%, " + a + ")";
};
var hsvaToHslaString = hsva => {
  var {
    h,
    s,
    l,
    a
  } = hsvaToHsla(hsva);
  return "hsla(" + h + ", " + s + "%, " + l + "%, " + a + ")";
};
var hslStringToHsla = str => {
  var [h, s, l, a] = (str.match(/\d+/g) || []).map(Number);
  return {
    h,
    s,
    l,
    a
  };
};
var hslaStringToHsva = hslString => {
  var matcher = /hsla?\(?\s*(-?\d*\.?\d+)(deg|rad|grad|turn)?[,\s]+(-?\d*\.?\d+)%?[,\s]+(-?\d*\.?\d+)%?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i;
  var match = matcher.exec(hslString);
  if (!match) return {
    h: 0,
    s: 0,
    v: 0,
    a: 1
  };
  return hslaToHsva({
    h: parseHue(match[1], match[2]),
    s: Number(match[3]),
    l: Number(match[4]),
    a: match[5] === undefined ? 1 : Number(match[5]) / (match[6] ? 100 : 1)
  });
};
var hslStringToHsva = hslaStringToHsva;
var hslaToHsva = _ref4 => {
  var {
    h,
    s,
    l,
    a
  } = _ref4;
  s *= (l < 50 ? l : SV_MAX - l) / SV_MAX;
  return {
    h: h,
    s: s > 0 ? 2 * s / (l + s) * SV_MAX : 0,
    v: l + s,
    a
  };
};
var hsvaToHsla = _ref5 => {
  var {
    h,
    s,
    v,
    a
  } = _ref5;
  var hh = (200 - s) * v / SV_MAX;
  return {
    h,
    s: hh > 0 && hh < 200 ? s * v / SV_MAX / (hh <= SV_MAX ? hh : 200 - hh) * SV_MAX : 0,
    l: hh / 2,
    a
  };
};
var hsvaStringToHsva = hsvString => {
  var matcher = /hsva?\(?\s*(-?\d*\.?\d+)(deg|rad|grad|turn)?[,\s]+(-?\d*\.?\d+)%?[,\s]+(-?\d*\.?\d+)%?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i;
  var match = matcher.exec(hsvString);
  if (!match) return {
    h: 0,
    s: 0,
    v: 0,
    a: 1
  };
  return {
    h: parseHue(match[1], match[2]),
    s: Number(match[3]),
    v: Number(match[4]),
    a: match[5] === undefined ? 1 : Number(match[5]) / (match[6] ? SV_MAX : 1)
  };
};

/**
 * Valid CSS <angle> units.
 * https://developer.mozilla.org/en-US/docs/Web/CSS/angle
 */
var angleUnits = {
  grad: HUE_MAX / 400,
  turn: HUE_MAX,
  rad: HUE_MAX / (Math.PI * 2)
};
var parseHue = function parseHue(value, unit) {
  if (unit === void 0) {
    unit = 'deg';
  }
  return Number(value) * (angleUnits[unit] || 1);
};
var hsvStringToHsva = hsvaStringToHsva;
var rgbaStringToHsva = rgbaString => {
  var matcher = /rgba?\(?\s*(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i;
  var match = matcher.exec(rgbaString);
  if (!match) return {
    h: 0,
    s: 0,
    v: 0,
    a: 1
  };
  return rgbaToHsva({
    r: Number(match[1]) / (match[2] ? SV_MAX / RGB_MAX : 1),
    g: Number(match[3]) / (match[4] ? SV_MAX / RGB_MAX : 1),
    b: Number(match[5]) / (match[6] ? SV_MAX / RGB_MAX : 1),
    a: match[7] === undefined ? 1 : Number(match[7]) / (match[8] ? SV_MAX : 1)
  });
};
var rgbStringToHsva = rgbaStringToHsva;

/** Converts an RGBA color plus alpha transparency to hex */
var rgbaToHex = _ref6 => {
  var {
    r,
    g,
    b
  } = _ref6;
  var bin = r << 16 | g << 8 | b;
  return "#" + (h => new Array(7 - h.length).join('0') + h)(bin.toString(16));
};
var rgbaToHexa = _ref7 => {
  var {
    r,
    g,
    b,
    a
  } = _ref7;
  var alpha = typeof a === 'number' && (a * 255 | 1 << 8).toString(16).slice(1);
  return "" + rgbaToHex({
    r,
    g,
    b,
    a
  }) + (alpha ? alpha : '');
};
var hexToHsva = hex => rgbaToHsva(hexToRgba(hex));
var hexToRgba = hex => {
  var htemp = hex.replace('#', '');
  if (/^#?/.test(hex) && htemp.length === 3) {
    hex = "#" + htemp.charAt(0) + htemp.charAt(0) + htemp.charAt(1) + htemp.charAt(1) + htemp.charAt(2) + htemp.charAt(2);
  }
  var reg = new RegExp("[A-Za-z0-9]{2}", 'g');
  var [r, g, b = 0, a] = hex.match(reg).map(v => parseInt(v, 16));
  return {
    r,
    g,
    b,
    a: (a != null ? a : 255) / RGB_MAX
  };
};

/**
 * Converts HSVA to RGBA. Based on formula from https://en.wikipedia.org/wiki/HSL_and_HSV
 * @param color HSVA color as an array [0-360, 0-1, 0-1, 0-1]
 */
var hsvaToRgba = _ref8 => {
  var {
    h,
    s,
    v,
    a
  } = _ref8;
  var _h = h / 60,
    _s = s / SV_MAX,
    _v = v / SV_MAX,
    hi = Math.floor(_h) % 6;
  var f = _h - Math.floor(_h),
    _p = RGB_MAX * _v * (1 - _s),
    _q = RGB_MAX * _v * (1 - _s * f),
    _t = RGB_MAX * _v * (1 - _s * (1 - f));
  _v *= RGB_MAX;
  var rgba = {};
  switch (hi) {
    case 0:
      rgba.r = _v;
      rgba.g = _t;
      rgba.b = _p;
      break;
    case 1:
      rgba.r = _q;
      rgba.g = _v;
      rgba.b = _p;
      break;
    case 2:
      rgba.r = _p;
      rgba.g = _v;
      rgba.b = _t;
      break;
    case 3:
      rgba.r = _p;
      rgba.g = _q;
      rgba.b = _v;
      break;
    case 4:
      rgba.r = _t;
      rgba.g = _p;
      rgba.b = _v;
      break;
    case 5:
      rgba.r = _v;
      rgba.g = _p;
      rgba.b = _q;
      break;
  }
  rgba.r = Math.round(rgba.r);
  rgba.g = Math.round(rgba.g);
  rgba.b = Math.round(rgba.b);
  return (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, rgba, {
    a
  });
};
var hsvaToRgbString = hsva => {
  var {
    r,
    g,
    b
  } = hsvaToRgba(hsva);
  return "rgb(" + r + ", " + g + ", " + b + ")";
};
var hsvaToRgbaString = hsva => {
  var {
    r,
    g,
    b,
    a
  } = hsvaToRgba(hsva);
  return "rgba(" + r + ", " + g + ", " + b + ", " + a + ")";
};
var rgbaToRgb = _ref9 => {
  var {
    r,
    g,
    b
  } = _ref9;
  return {
    r,
    g,
    b
  };
};
var hslaToHsl = _ref10 => {
  var {
    h,
    s,
    l
  } = _ref10;
  return {
    h,
    s,
    l
  };
};
var hsvaToHex = hsva => rgbaToHex(hsvaToRgba(hsva));
var hsvaToHexa = hsva => rgbaToHexa(hsvaToRgba(hsva));
var hsvaToHsv = _ref11 => {
  var {
    h,
    s,
    v
  } = _ref11;
  return {
    h,
    s,
    v
  };
};
var color = str => {
  var rgb;
  var hsl;
  var hsv;
  var rgba;
  var hsla;
  var hsva;
  var hex;
  var hexa;
  if (typeof str === 'string' && validHex(str)) {
    hsva = hexToHsva(str);
    hex = str;
  } else if (typeof str !== 'string') {
    hsva = str;
  }
  if (hsva) {
    hsv = hsvaToHsv(hsva);
    hsla = hsvaToHsla(hsva);
    rgba = hsvaToRgba(hsva);
    hexa = rgbaToHexa(rgba);
    hex = hsvaToHex(hsva);
    hsl = hslaToHsl(hsla);
    rgb = rgbaToRgb(rgba);
  }
  return {
    rgb,
    hsl,
    hsv,
    rgba,
    hsla,
    hsva,
    hex,
    hexa
  };
};
var getContrastingColor = str => {
  if (!str) {
    return '#ffffff';
  }
  var col = color(str);
  var yiq = (col.rgb.r * 299 + col.rgb.g * 587 + col.rgb.b * 114) / 1000;
  return yiq >= 128 ? '#000000' : '#ffffff';
};
var equalColorObjects = (first, second) => {
  if (first === second) return true;
  for (var prop in first) {
    // The following allows for a type-safe calling of this function (first & second have to be HSL, HSV, or RGB)
    // with type-unsafe iterating over object keys. TS does not allow this without an index (`[key: string]: number`)
    // on an object to define how iteration is normally done. To ensure extra keys are not allowed on our types,
    // we must cast our object to unknown (as RGB demands `r` be a key, while `Record<string, x>` does not care if
    // there is or not), and then as a type TS can iterate over.
    if (first[prop] !== second[prop]) return false;
  }
  return true;
};
var equalColorString = (first, second) => {
  return first.replace(/\s/g, '') === second.replace(/\s/g, '');
};
var equalHex = (first, second) => {
  if (first.toLowerCase() === second.toLowerCase()) return true;

  // To compare colors like `#FFF` and `ffffff` we convert them into RGB objects
  return equalColorObjects(hexToRgba(first), hexToRgba(second));
};
var validHex = hex => /^#?([A-Fa-f0-9]{3,4}){1,2}$/.test(hex);

/***/ }),

/***/ "./node_modules/@uiw/react-color-circle/esm/Point.js":
/*!***********************************************************!*\
  !*** ./node_modules/@uiw/react-color-circle/esm/Point.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Point)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");




function Point(_ref) {
  var {
    style,
    className,
    title,
    checked,
    color,
    onClick,
    rectProps
  } = _ref;
  var btn = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  var handleMouseEnter = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => {
    btn.current.style['transform'] = 'scale(1.2)';
  }, []);
  var handleMouseLeave = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => {
    btn.current.style['transform'] = 'scale(1)';
  }, []);
  var styleWrapper = (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    '--circle-point-background-color': '#fff',
    height: checked ? '100%' : 0,
    width: checked ? '100%' : 0,
    borderRadius: '50%',
    backgroundColor: 'var(--circle-point-background-color)',
    boxSizing: 'border-box',
    transition: 'height 100ms ease 0s, width 100ms ease 0s'
  }, rectProps.style);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    ref: btn,
    onClick: onClick,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    title: title,
    className: className,
    style: (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, style, {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 28,
      height: 28,
      padding: 3,
      borderRadius: '50%',
      marginRight: 12,
      marginBottom: 12,
      boxSizing: 'border-box',
      transform: 'scale(1)',
      boxShadow: color + " 0px 0px " + (checked ? 5 : 0) + "px",
      transition: 'transform 100ms ease 0s, box-shadow 100ms ease 0s'
    }),
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, rectProps, {
      style: styleWrapper
    }))
  });
}

/***/ }),

/***/ "./node_modules/@uiw/react-color-circle/esm/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/@uiw/react-color-circle/esm/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectDestructuringEmpty */ "./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _uiw_color_convert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @uiw/color-convert */ "./node_modules/@uiw/color-convert/esm/index.js");
/* harmony import */ var _uiw_react_color_swatch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @uiw/react-color-swatch */ "./node_modules/@uiw/react-color-swatch/esm/index.js");
/* harmony import */ var _Point__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Point */ "./node_modules/@uiw/react-color-circle/esm/Point.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");



var _excluded = ["prefixCls", "className", "color", "colors", "rectProps", "pointProps", "onChange"];





var Circle = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().forwardRef((props, ref) => {
  var {
      prefixCls = 'w-color-circle',
      className,
      color,
      colors = [],
      rectProps = {},
      pointProps,
      onChange: _onChange
    } = props,
    other = (0,_babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(props, _excluded);
  var hsva = typeof color === 'string' && (0,_uiw_color_convert__WEBPACK_IMPORTED_MODULE_5__.validHex)(color) ? (0,_uiw_color_convert__WEBPACK_IMPORTED_MODULE_5__.hexToHsva)(color) : color || {};
  var hex = color ? (0,_uiw_color_convert__WEBPACK_IMPORTED_MODULE_5__.hsvaToHex)(hsva) : '';
  var cls = [prefixCls, className].filter(Boolean).join(' ');
  var clsPoint = [prefixCls + "-point", pointProps == null ? void 0 : pointProps.className].filter(Boolean).join(' ');
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_uiw_react_color_swatch__WEBPACK_IMPORTED_MODULE_6__["default"], (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    ref: ref,
    colors: colors,
    color: hex
  }, other, {
    className: cls,
    rectRender: _ref => {
      var props = (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, ((0,_babel_runtime_helpers_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref), _ref));
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Point__WEBPACK_IMPORTED_MODULE_7__["default"], (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, props, pointProps, {
        className: clsPoint,
        rectProps: rectProps
      }));
    },
    onChange: hsvColor => {
      _onChange && _onChange((0,_uiw_color_convert__WEBPACK_IMPORTED_MODULE_5__.color)(hsvColor));
    }
  }));
});
Circle.displayName = 'Circle';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Circle);

/***/ }),

/***/ "./node_modules/@uiw/react-color-swatch/esm/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/@uiw/react-color-swatch/esm/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _uiw_color_convert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @uiw/color-convert */ "./node_modules/@uiw/color-convert/esm/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");


var _excluded = ["prefixCls", "className", "color", "colors", "style", "rectProps", "onChange", "addonAfter", "addonBefore", "rectRender"];




var Swatch = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().forwardRef((props, ref) => {
  var {
      prefixCls = 'w-color-swatch',
      className,
      color,
      colors = [],
      style,
      rectProps = {},
      onChange,
      addonAfter,
      addonBefore,
      rectRender
    } = props,
    other = (0,_babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, _excluded);
  var rectStyle = (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    '--swatch-background-color': 'rgb(144, 19, 254)',
    background: 'var(--swatch-background-color)',
    height: 15,
    width: 15,
    marginRight: 5,
    marginBottom: 5,
    cursor: 'pointer',
    position: 'relative',
    outline: 'none',
    borderRadius: 2
  }, rectProps.style);
  var handleClick = (hex, evn) => {
    onChange && onChange((0,_uiw_color_convert__WEBPACK_IMPORTED_MODULE_4__.hexToHsva)(hex), (0,_uiw_color_convert__WEBPACK_IMPORTED_MODULE_4__.color)((0,_uiw_color_convert__WEBPACK_IMPORTED_MODULE_4__.hexToHsva)(hex)), evn);
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    ref: ref
  }, other, {
    className: [prefixCls, className || ''].filter(Boolean).join(' '),
    style: (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      display: 'flex',
      flexWrap: 'wrap',
      position: 'relative'
    }, style),
    children: [addonBefore && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().isValidElement(addonBefore) && addonBefore, colors && Array.isArray(colors) && colors.map((item, idx) => {
      var title = '';
      var background = '';
      if (typeof item === 'string') {
        title = item;
        background = item;
      }
      if (typeof item === 'object' && item.color) {
        title = item.title || item.color;
        background = item.color;
      }
      var checked = color && color.toLocaleLowerCase() === background.toLocaleLowerCase();
      var render = rectRender && rectRender({
        title,
        color: background,
        checked: !!checked,
        style: (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, rectStyle, {
          background
        }),
        onClick: evn => handleClick(background, evn)
      });
      if (render) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
          children: render
        }, idx);
      }
      var child = rectProps.children && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().isValidElement(rectProps.children) ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().cloneElement(rectProps.children, {
        color: background,
        checked
      }) : null;
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        tabIndex: 0,
        title: title,
        onClick: evn => handleClick(background, evn)
      }, rectProps, {
        children: child,
        style: (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, rectStyle, {
          background
        })
      }), idx);
    }), addonAfter && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().isValidElement(addonAfter) && addonAfter]
  }));
});
Swatch.displayName = 'Swatch';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Swatch);

/***/ }),

/***/ "./node_modules/react/cjs/react-jsx-runtime.development.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react/cjs/react-jsx-runtime.development.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (true) {
  (function() {
'use strict';

var React = __webpack_require__(/*! react */ "react");

// ATTENTION
// When adding new symbols to this file,
// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
// The Symbol used to tag the ReactElement-like types.
var REACT_ELEMENT_TYPE = Symbol.for('react.element');
var REACT_PORTAL_TYPE = Symbol.for('react.portal');
var REACT_FRAGMENT_TYPE = Symbol.for('react.fragment');
var REACT_STRICT_MODE_TYPE = Symbol.for('react.strict_mode');
var REACT_PROFILER_TYPE = Symbol.for('react.profiler');
var REACT_PROVIDER_TYPE = Symbol.for('react.provider');
var REACT_CONTEXT_TYPE = Symbol.for('react.context');
var REACT_FORWARD_REF_TYPE = Symbol.for('react.forward_ref');
var REACT_SUSPENSE_TYPE = Symbol.for('react.suspense');
var REACT_SUSPENSE_LIST_TYPE = Symbol.for('react.suspense_list');
var REACT_MEMO_TYPE = Symbol.for('react.memo');
var REACT_LAZY_TYPE = Symbol.for('react.lazy');
var REACT_OFFSCREEN_TYPE = Symbol.for('react.offscreen');
var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator';
function getIteratorFn(maybeIterable) {
  if (maybeIterable === null || typeof maybeIterable !== 'object') {
    return null;
  }

  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];

  if (typeof maybeIterator === 'function') {
    return maybeIterator;
  }

  return null;
}

var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;

function error(format) {
  {
    {
      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }

      printWarning('error', format, args);
    }
  }
}

function printWarning(level, format, args) {
  // When changing this logic, you might want to also
  // update consoleWithStackDev.www.js as well.
  {
    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
    var stack = ReactDebugCurrentFrame.getStackAddendum();

    if (stack !== '') {
      format += '%s';
      args = args.concat([stack]);
    } // eslint-disable-next-line react-internal/safe-string-coercion


    var argsWithFormat = args.map(function (item) {
      return String(item);
    }); // Careful: RN currently depends on this prefix

    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
    // breaks IE9: https://github.com/facebook/react/issues/13610
    // eslint-disable-next-line react-internal/no-production-logging

    Function.prototype.apply.call(console[level], console, argsWithFormat);
  }
}

// -----------------------------------------------------------------------------

var enableScopeAPI = false; // Experimental Create Event Handle API.
var enableCacheElement = false;
var enableTransitionTracing = false; // No known bugs, but needs performance testing

var enableLegacyHidden = false; // Enables unstable_avoidThisFallback feature in Fiber
// stuff. Intended to enable React core members to more easily debug scheduling
// issues in DEV builds.

var enableDebugTracing = false; // Track which Fiber(s) schedule render work.

var REACT_MODULE_REFERENCE;

{
  REACT_MODULE_REFERENCE = Symbol.for('react.module.reference');
}

function isValidElementType(type) {
  if (typeof type === 'string' || typeof type === 'function') {
    return true;
  } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


  if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing  || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden  || type === REACT_OFFSCREEN_TYPE || enableScopeAPI  || enableCacheElement  || enableTransitionTracing ) {
    return true;
  }

  if (typeof type === 'object' && type !== null) {
    if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || // This needs to include all possible module reference object
    // types supported by any Flight configuration anywhere since
    // we don't know which Flight build this will end up being used
    // with.
    type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== undefined) {
      return true;
    }
  }

  return false;
}

function getWrappedName(outerType, innerType, wrapperName) {
  var displayName = outerType.displayName;

  if (displayName) {
    return displayName;
  }

  var functionName = innerType.displayName || innerType.name || '';
  return functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName;
} // Keep in sync with react-reconciler/getComponentNameFromFiber


function getContextName(type) {
  return type.displayName || 'Context';
} // Note that the reconciler package should generally prefer to use getComponentNameFromFiber() instead.


function getComponentNameFromType(type) {
  if (type == null) {
    // Host root, text node or just invalid type.
    return null;
  }

  {
    if (typeof type.tag === 'number') {
      error('Received an unexpected object in getComponentNameFromType(). ' + 'This is likely a bug in React. Please file an issue.');
    }
  }

  if (typeof type === 'function') {
    return type.displayName || type.name || null;
  }

  if (typeof type === 'string') {
    return type;
  }

  switch (type) {
    case REACT_FRAGMENT_TYPE:
      return 'Fragment';

    case REACT_PORTAL_TYPE:
      return 'Portal';

    case REACT_PROFILER_TYPE:
      return 'Profiler';

    case REACT_STRICT_MODE_TYPE:
      return 'StrictMode';

    case REACT_SUSPENSE_TYPE:
      return 'Suspense';

    case REACT_SUSPENSE_LIST_TYPE:
      return 'SuspenseList';

  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_CONTEXT_TYPE:
        var context = type;
        return getContextName(context) + '.Consumer';

      case REACT_PROVIDER_TYPE:
        var provider = type;
        return getContextName(provider._context) + '.Provider';

      case REACT_FORWARD_REF_TYPE:
        return getWrappedName(type, type.render, 'ForwardRef');

      case REACT_MEMO_TYPE:
        var outerName = type.displayName || null;

        if (outerName !== null) {
          return outerName;
        }

        return getComponentNameFromType(type.type) || 'Memo';

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            return getComponentNameFromType(init(payload));
          } catch (x) {
            return null;
          }
        }

      // eslint-disable-next-line no-fallthrough
    }
  }

  return null;
}

var assign = Object.assign;

// Helpers to patch console.logs to avoid logging during side-effect free
// replaying on render function. This currently only patches the object
// lazily which won't cover if the log function was extracted eagerly.
// We could also eagerly patch the method.
var disabledDepth = 0;
var prevLog;
var prevInfo;
var prevWarn;
var prevError;
var prevGroup;
var prevGroupCollapsed;
var prevGroupEnd;

function disabledLog() {}

disabledLog.__reactDisabledLog = true;
function disableLogs() {
  {
    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      prevLog = console.log;
      prevInfo = console.info;
      prevWarn = console.warn;
      prevError = console.error;
      prevGroup = console.group;
      prevGroupCollapsed = console.groupCollapsed;
      prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099

      var props = {
        configurable: true,
        enumerable: true,
        value: disabledLog,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        info: props,
        log: props,
        warn: props,
        error: props,
        group: props,
        groupCollapsed: props,
        groupEnd: props
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    disabledDepth++;
  }
}
function reenableLogs() {
  {
    disabledDepth--;

    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      var props = {
        configurable: true,
        enumerable: true,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        log: assign({}, props, {
          value: prevLog
        }),
        info: assign({}, props, {
          value: prevInfo
        }),
        warn: assign({}, props, {
          value: prevWarn
        }),
        error: assign({}, props, {
          value: prevError
        }),
        group: assign({}, props, {
          value: prevGroup
        }),
        groupCollapsed: assign({}, props, {
          value: prevGroupCollapsed
        }),
        groupEnd: assign({}, props, {
          value: prevGroupEnd
        })
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    if (disabledDepth < 0) {
      error('disabledDepth fell below zero. ' + 'This is a bug in React. Please file an issue.');
    }
  }
}

var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
var prefix;
function describeBuiltInComponentFrame(name, source, ownerFn) {
  {
    if (prefix === undefined) {
      // Extract the VM specific prefix used by each line.
      try {
        throw Error();
      } catch (x) {
        var match = x.stack.trim().match(/\n( *(at )?)/);
        prefix = match && match[1] || '';
      }
    } // We use the prefix to ensure our stacks line up with native stack frames.


    return '\n' + prefix + name;
  }
}
var reentry = false;
var componentFrameCache;

{
  var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
  componentFrameCache = new PossiblyWeakMap();
}

function describeNativeComponentFrame(fn, construct) {
  // If something asked for a stack inside a fake render, it should get ignored.
  if ( !fn || reentry) {
    return '';
  }

  {
    var frame = componentFrameCache.get(fn);

    if (frame !== undefined) {
      return frame;
    }
  }

  var control;
  reentry = true;
  var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe It does accept undefined.

  Error.prepareStackTrace = undefined;
  var previousDispatcher;

  {
    previousDispatcher = ReactCurrentDispatcher.current; // Set the dispatcher in DEV because this might be call in the render function
    // for warnings.

    ReactCurrentDispatcher.current = null;
    disableLogs();
  }

  try {
    // This should throw.
    if (construct) {
      // Something should be setting the props in the constructor.
      var Fake = function () {
        throw Error();
      }; // $FlowFixMe


      Object.defineProperty(Fake.prototype, 'props', {
        set: function () {
          // We use a throwing setter instead of frozen or non-writable props
          // because that won't throw in a non-strict mode function.
          throw Error();
        }
      });

      if (typeof Reflect === 'object' && Reflect.construct) {
        // We construct a different control for this case to include any extra
        // frames added by the construct call.
        try {
          Reflect.construct(Fake, []);
        } catch (x) {
          control = x;
        }

        Reflect.construct(fn, [], Fake);
      } else {
        try {
          Fake.call();
        } catch (x) {
          control = x;
        }

        fn.call(Fake.prototype);
      }
    } else {
      try {
        throw Error();
      } catch (x) {
        control = x;
      }

      fn();
    }
  } catch (sample) {
    // This is inlined manually because closure doesn't do it for us.
    if (sample && control && typeof sample.stack === 'string') {
      // This extracts the first frame from the sample that isn't also in the control.
      // Skipping one frame that we assume is the frame that calls the two.
      var sampleLines = sample.stack.split('\n');
      var controlLines = control.stack.split('\n');
      var s = sampleLines.length - 1;
      var c = controlLines.length - 1;

      while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
        // We expect at least one stack frame to be shared.
        // Typically this will be the root most one. However, stack frames may be
        // cut off due to maximum stack limits. In this case, one maybe cut off
        // earlier than the other. We assume that the sample is longer or the same
        // and there for cut off earlier. So we should find the root most frame in
        // the sample somewhere in the control.
        c--;
      }

      for (; s >= 1 && c >= 0; s--, c--) {
        // Next we find the first one that isn't the same which should be the
        // frame that called our sample function and the control.
        if (sampleLines[s] !== controlLines[c]) {
          // In V8, the first line is describing the message but other VMs don't.
          // If we're about to return the first line, and the control is also on the same
          // line, that's a pretty good indicator that our sample threw at same line as
          // the control. I.e. before we entered the sample frame. So we ignore this result.
          // This can happen if you passed a class to function component, or non-function.
          if (s !== 1 || c !== 1) {
            do {
              s--;
              c--; // We may still have similar intermediate frames from the construct call.
              // The next one that isn't the same should be our match though.

              if (c < 0 || sampleLines[s] !== controlLines[c]) {
                // V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
                var _frame = '\n' + sampleLines[s].replace(' at new ', ' at '); // If our component frame is labeled "<anonymous>"
                // but we have a user-provided "displayName"
                // splice it in to make the stack more readable.


                if (fn.displayName && _frame.includes('<anonymous>')) {
                  _frame = _frame.replace('<anonymous>', fn.displayName);
                }

                {
                  if (typeof fn === 'function') {
                    componentFrameCache.set(fn, _frame);
                  }
                } // Return the line we found.


                return _frame;
              }
            } while (s >= 1 && c >= 0);
          }

          break;
        }
      }
    }
  } finally {
    reentry = false;

    {
      ReactCurrentDispatcher.current = previousDispatcher;
      reenableLogs();
    }

    Error.prepareStackTrace = previousPrepareStackTrace;
  } // Fallback to just using the name if we couldn't make it throw.


  var name = fn ? fn.displayName || fn.name : '';
  var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';

  {
    if (typeof fn === 'function') {
      componentFrameCache.set(fn, syntheticFrame);
    }
  }

  return syntheticFrame;
}
function describeFunctionComponentFrame(fn, source, ownerFn) {
  {
    return describeNativeComponentFrame(fn, false);
  }
}

function shouldConstruct(Component) {
  var prototype = Component.prototype;
  return !!(prototype && prototype.isReactComponent);
}

function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {

  if (type == null) {
    return '';
  }

  if (typeof type === 'function') {
    {
      return describeNativeComponentFrame(type, shouldConstruct(type));
    }
  }

  if (typeof type === 'string') {
    return describeBuiltInComponentFrame(type);
  }

  switch (type) {
    case REACT_SUSPENSE_TYPE:
      return describeBuiltInComponentFrame('Suspense');

    case REACT_SUSPENSE_LIST_TYPE:
      return describeBuiltInComponentFrame('SuspenseList');
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_FORWARD_REF_TYPE:
        return describeFunctionComponentFrame(type.render);

      case REACT_MEMO_TYPE:
        // Memo may contain any component type so we recursively resolve it.
        return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            // Lazy may contain any component type so we recursively resolve it.
            return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
          } catch (x) {}
        }
    }
  }

  return '';
}

var hasOwnProperty = Object.prototype.hasOwnProperty;

var loggedTypeFailures = {};
var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;

function setCurrentlyValidatingElement(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      ReactDebugCurrentFrame.setExtraStackFrame(stack);
    } else {
      ReactDebugCurrentFrame.setExtraStackFrame(null);
    }
  }
}

function checkPropTypes(typeSpecs, values, location, componentName, element) {
  {
    // $FlowFixMe This is okay but Flow doesn't know it.
    var has = Function.call.bind(hasOwnProperty);

    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.

        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            // eslint-disable-next-line react-internal/prod-error-codes
            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
            err.name = 'Invariant Violation';
            throw err;
          }

          error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
        } catch (ex) {
          error$1 = ex;
        }

        if (error$1 && !(error$1 instanceof Error)) {
          setCurrentlyValidatingElement(element);

          error('%s: type specification of %s' + ' `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error$1);

          setCurrentlyValidatingElement(null);
        }

        if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error$1.message] = true;
          setCurrentlyValidatingElement(element);

          error('Failed %s type: %s', location, error$1.message);

          setCurrentlyValidatingElement(null);
        }
      }
    }
  }
}

var isArrayImpl = Array.isArray; // eslint-disable-next-line no-redeclare

function isArray(a) {
  return isArrayImpl(a);
}

/*
 * The `'' + value` pattern (used in in perf-sensitive code) throws for Symbol
 * and Temporal.* types. See https://github.com/facebook/react/pull/22064.
 *
 * The functions in this module will throw an easier-to-understand,
 * easier-to-debug exception with a clear errors message message explaining the
 * problem. (Instead of a confusing exception thrown inside the implementation
 * of the `value` object).
 */
// $FlowFixMe only called in DEV, so void return is not possible.
function typeName(value) {
  {
    // toStringTag is needed for namespaced types like Temporal.Instant
    var hasToStringTag = typeof Symbol === 'function' && Symbol.toStringTag;
    var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || 'Object';
    return type;
  }
} // $FlowFixMe only called in DEV, so void return is not possible.


function willCoercionThrow(value) {
  {
    try {
      testStringCoercion(value);
      return false;
    } catch (e) {
      return true;
    }
  }
}

function testStringCoercion(value) {
  // If you ended up here by following an exception call stack, here's what's
  // happened: you supplied an object or symbol value to React (as a prop, key,
  // DOM attribute, CSS property, string ref, etc.) and when React tried to
  // coerce it to a string using `'' + value`, an exception was thrown.
  //
  // The most common types that will cause this exception are `Symbol` instances
  // and Temporal objects like `Temporal.Instant`. But any object that has a
  // `valueOf` or `[Symbol.toPrimitive]` method that throws will also cause this
  // exception. (Library authors do this to prevent users from using built-in
  // numeric operators like `+` or comparison operators like `>=` because custom
  // methods are needed to perform accurate arithmetic or comparison.)
  //
  // To fix the problem, coerce this object or symbol value to a string before
  // passing it to React. The most reliable way is usually `String(value)`.
  //
  // To find which value is throwing, check the browser or debugger console.
  // Before this exception was thrown, there should be `console.error` output
  // that shows the type (Symbol, Temporal.PlainDate, etc.) that caused the
  // problem and how that type was used: key, atrribute, input value prop, etc.
  // In most cases, this console output also shows the component and its
  // ancestor components where the exception happened.
  //
  // eslint-disable-next-line react-internal/safe-string-coercion
  return '' + value;
}
function checkKeyStringCoercion(value) {
  {
    if (willCoercionThrow(value)) {
      error('The provided key is an unsupported type %s.' + ' This value must be coerced to a string before before using it here.', typeName(value));

      return testStringCoercion(value); // throw (to help callers find troubleshooting comments)
    }
  }
}

var ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner;
var RESERVED_PROPS = {
  key: true,
  ref: true,
  __self: true,
  __source: true
};
var specialPropKeyWarningShown;
var specialPropRefWarningShown;
var didWarnAboutStringRefs;

{
  didWarnAboutStringRefs = {};
}

function hasValidRef(config) {
  {
    if (hasOwnProperty.call(config, 'ref')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.ref !== undefined;
}

function hasValidKey(config) {
  {
    if (hasOwnProperty.call(config, 'key')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.key !== undefined;
}

function warnIfStringRefCannotBeAutoConverted(config, self) {
  {
    if (typeof config.ref === 'string' && ReactCurrentOwner.current && self && ReactCurrentOwner.current.stateNode !== self) {
      var componentName = getComponentNameFromType(ReactCurrentOwner.current.type);

      if (!didWarnAboutStringRefs[componentName]) {
        error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://reactjs.org/link/strict-mode-string-ref', getComponentNameFromType(ReactCurrentOwner.current.type), config.ref);

        didWarnAboutStringRefs[componentName] = true;
      }
    }
  }
}

function defineKeyPropWarningGetter(props, displayName) {
  {
    var warnAboutAccessingKey = function () {
      if (!specialPropKeyWarningShown) {
        specialPropKeyWarningShown = true;

        error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    };

    warnAboutAccessingKey.isReactWarning = true;
    Object.defineProperty(props, 'key', {
      get: warnAboutAccessingKey,
      configurable: true
    });
  }
}

function defineRefPropWarningGetter(props, displayName) {
  {
    var warnAboutAccessingRef = function () {
      if (!specialPropRefWarningShown) {
        specialPropRefWarningShown = true;

        error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    };

    warnAboutAccessingRef.isReactWarning = true;
    Object.defineProperty(props, 'ref', {
      get: warnAboutAccessingRef,
      configurable: true
    });
  }
}
/**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, instanceof check
 * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} props
 * @param {*} key
 * @param {string|object} ref
 * @param {*} owner
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @internal
 */


var ReactElement = function (type, key, ref, self, source, owner, props) {
  var element = {
    // This tag allows us to uniquely identify this as a React Element
    $$typeof: REACT_ELEMENT_TYPE,
    // Built-in properties that belong on the element
    type: type,
    key: key,
    ref: ref,
    props: props,
    // Record the component responsible for creating this element.
    _owner: owner
  };

  {
    // The validation flag is currently mutative. We put it on
    // an external backing store so that we can freeze the whole object.
    // This can be replaced with a WeakMap once they are implemented in
    // commonly used development environments.
    element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
    // the validation flag non-enumerable (where possible, which should
    // include every environment we run tests in), so the test framework
    // ignores it.

    Object.defineProperty(element._store, 'validated', {
      configurable: false,
      enumerable: false,
      writable: true,
      value: false
    }); // self and source are DEV only properties.

    Object.defineProperty(element, '_self', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: self
    }); // Two elements created in two different places should be considered
    // equal for testing purposes and therefore we hide it from enumeration.

    Object.defineProperty(element, '_source', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: source
    });

    if (Object.freeze) {
      Object.freeze(element.props);
      Object.freeze(element);
    }
  }

  return element;
};
/**
 * https://github.com/reactjs/rfcs/pull/107
 * @param {*} type
 * @param {object} props
 * @param {string} key
 */

function jsxDEV(type, config, maybeKey, source, self) {
  {
    var propName; // Reserved names are extracted

    var props = {};
    var key = null;
    var ref = null; // Currently, key can be spread in as a prop. This causes a potential
    // issue if key is also explicitly declared (ie. <div {...props} key="Hi" />
    // or <div key="Hi" {...props} /> ). We want to deprecate key spread,
    // but as an intermediary step, we will use jsxDEV for everything except
    // <div {...props} key="Hi" />, because we aren't currently able to tell if
    // key is explicitly declared to be undefined or not.

    if (maybeKey !== undefined) {
      {
        checkKeyStringCoercion(maybeKey);
      }

      key = '' + maybeKey;
    }

    if (hasValidKey(config)) {
      {
        checkKeyStringCoercion(config.key);
      }

      key = '' + config.key;
    }

    if (hasValidRef(config)) {
      ref = config.ref;
      warnIfStringRefCannotBeAutoConverted(config, self);
    } // Remaining properties are added to a new props object


    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        props[propName] = config[propName];
      }
    } // Resolve default props


    if (type && type.defaultProps) {
      var defaultProps = type.defaultProps;

      for (propName in defaultProps) {
        if (props[propName] === undefined) {
          props[propName] = defaultProps[propName];
        }
      }
    }

    if (key || ref) {
      var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

      if (key) {
        defineKeyPropWarningGetter(props, displayName);
      }

      if (ref) {
        defineRefPropWarningGetter(props, displayName);
      }
    }

    return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
  }
}

var ReactCurrentOwner$1 = ReactSharedInternals.ReactCurrentOwner;
var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;

function setCurrentlyValidatingElement$1(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
    } else {
      ReactDebugCurrentFrame$1.setExtraStackFrame(null);
    }
  }
}

var propTypesMisspellWarningShown;

{
  propTypesMisspellWarningShown = false;
}
/**
 * Verifies the object is a ReactElement.
 * See https://reactjs.org/docs/react-api.html#isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a ReactElement.
 * @final
 */


function isValidElement(object) {
  {
    return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
  }
}

function getDeclarationErrorAddendum() {
  {
    if (ReactCurrentOwner$1.current) {
      var name = getComponentNameFromType(ReactCurrentOwner$1.current.type);

      if (name) {
        return '\n\nCheck the render method of `' + name + '`.';
      }
    }

    return '';
  }
}

function getSourceInfoErrorAddendum(source) {
  {
    if (source !== undefined) {
      var fileName = source.fileName.replace(/^.*[\\\/]/, '');
      var lineNumber = source.lineNumber;
      return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
    }

    return '';
  }
}
/**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */


var ownerHasKeyUseWarning = {};

function getCurrentComponentErrorInfo(parentType) {
  {
    var info = getDeclarationErrorAddendum();

    if (!info) {
      var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;

      if (parentName) {
        info = "\n\nCheck the top-level render call using <" + parentName + ">.";
      }
    }

    return info;
  }
}
/**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */


function validateExplicitKey(element, parentType) {
  {
    if (!element._store || element._store.validated || element.key != null) {
      return;
    }

    element._store.validated = true;
    var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);

    if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
      return;
    }

    ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
    // property, it may be the creator of the child that's responsible for
    // assigning it a key.

    var childOwner = '';

    if (element && element._owner && element._owner !== ReactCurrentOwner$1.current) {
      // Give the component that originally created this child.
      childOwner = " It was passed a child from " + getComponentNameFromType(element._owner.type) + ".";
    }

    setCurrentlyValidatingElement$1(element);

    error('Each child in a list should have a unique "key" prop.' + '%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);

    setCurrentlyValidatingElement$1(null);
  }
}
/**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */


function validateChildKeys(node, parentType) {
  {
    if (typeof node !== 'object') {
      return;
    }

    if (isArray(node)) {
      for (var i = 0; i < node.length; i++) {
        var child = node[i];

        if (isValidElement(child)) {
          validateExplicitKey(child, parentType);
        }
      }
    } else if (isValidElement(node)) {
      // This element was passed in a valid location.
      if (node._store) {
        node._store.validated = true;
      }
    } else if (node) {
      var iteratorFn = getIteratorFn(node);

      if (typeof iteratorFn === 'function') {
        // Entry iterators used to provide implicit keys,
        // but now we print a separate warning for them later.
        if (iteratorFn !== node.entries) {
          var iterator = iteratorFn.call(node);
          var step;

          while (!(step = iterator.next()).done) {
            if (isValidElement(step.value)) {
              validateExplicitKey(step.value, parentType);
            }
          }
        }
      }
    }
  }
}
/**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */


function validatePropTypes(element) {
  {
    var type = element.type;

    if (type === null || type === undefined || typeof type === 'string') {
      return;
    }

    var propTypes;

    if (typeof type === 'function') {
      propTypes = type.propTypes;
    } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
    // Inner props are checked in the reconciler.
    type.$$typeof === REACT_MEMO_TYPE)) {
      propTypes = type.propTypes;
    } else {
      return;
    }

    if (propTypes) {
      // Intentionally inside to avoid triggering lazy initializers:
      var name = getComponentNameFromType(type);
      checkPropTypes(propTypes, element.props, 'prop', name, element);
    } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
      propTypesMisspellWarningShown = true; // Intentionally inside to avoid triggering lazy initializers:

      var _name = getComponentNameFromType(type);

      error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', _name || 'Unknown');
    }

    if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
      error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
    }
  }
}
/**
 * Given a fragment, validate that it can only be provided with fragment props
 * @param {ReactElement} fragment
 */


function validateFragmentProps(fragment) {
  {
    var keys = Object.keys(fragment.props);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];

      if (key !== 'children' && key !== 'key') {
        setCurrentlyValidatingElement$1(fragment);

        error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);

        setCurrentlyValidatingElement$1(null);
        break;
      }
    }

    if (fragment.ref !== null) {
      setCurrentlyValidatingElement$1(fragment);

      error('Invalid attribute `ref` supplied to `React.Fragment`.');

      setCurrentlyValidatingElement$1(null);
    }
  }
}

function jsxWithValidation(type, props, key, isStaticChildren, source, self) {
  {
    var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
    // succeed and there will likely be errors in render.

    if (!validType) {
      var info = '';

      if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
        info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
      }

      var sourceInfo = getSourceInfoErrorAddendum(source);

      if (sourceInfo) {
        info += sourceInfo;
      } else {
        info += getDeclarationErrorAddendum();
      }

      var typeString;

      if (type === null) {
        typeString = 'null';
      } else if (isArray(type)) {
        typeString = 'array';
      } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
        typeString = "<" + (getComponentNameFromType(type.type) || 'Unknown') + " />";
        info = ' Did you accidentally export a JSX literal instead of a component?';
      } else {
        typeString = typeof type;
      }

      error('React.jsx: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
    }

    var element = jsxDEV(type, props, key, source, self); // The result can be nullish if a mock or a custom function is used.
    // TODO: Drop this when these are no longer allowed as the type argument.

    if (element == null) {
      return element;
    } // Skip key warning if the type isn't valid since our key validation logic
    // doesn't expect a non-string/function type and can throw confusing errors.
    // We don't want exception behavior to differ between dev and prod.
    // (Rendering will throw with a helpful message and as soon as the type is
    // fixed, the key warnings will appear.)


    if (validType) {
      var children = props.children;

      if (children !== undefined) {
        if (isStaticChildren) {
          if (isArray(children)) {
            for (var i = 0; i < children.length; i++) {
              validateChildKeys(children[i], type);
            }

            if (Object.freeze) {
              Object.freeze(children);
            }
          } else {
            error('React.jsx: Static children should always be an array. ' + 'You are likely explicitly calling React.jsxs or React.jsxDEV. ' + 'Use the Babel transform instead.');
          }
        } else {
          validateChildKeys(children, type);
        }
      }
    }

    if (type === REACT_FRAGMENT_TYPE) {
      validateFragmentProps(element);
    } else {
      validatePropTypes(element);
    }

    return element;
  }
} // These two functions exist to still get child warnings in dev
// even with the prod transform. This means that jsxDEV is purely
// opt-in behavior for better messages but that we won't stop
// giving you warnings if you use production apis.

function jsxWithValidationStatic(type, props, key) {
  {
    return jsxWithValidation(type, props, key, true);
  }
}
function jsxWithValidationDynamic(type, props, key) {
  {
    return jsxWithValidation(type, props, key, false);
  }
}

var jsx =  jsxWithValidationDynamic ; // we may want to special case jsxs internally to take advantage of static children.
// for now we can ship identical prod functions

var jsxs =  jsxWithValidationStatic ;

exports.Fragment = REACT_FRAGMENT_TYPE;
exports.jsx = jsx;
exports.jsxs = jsxs;
  })();
}


/***/ }),

/***/ "./node_modules/react/jsx-runtime.js":
/*!*******************************************!*\
  !*** ./node_modules/react/jsx-runtime.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-jsx-runtime.development.js */ "./node_modules/react/cjs/react-jsx-runtime.development.js");
}


/***/ }),

/***/ "./src/Icons.tsx":
/*!***********************!*\
  !*** ./src/Icons.tsx ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Icons: () => (/* binding */ Icons)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var Icons;
(function (Icons) {
    Icons.RightArrow = function () { return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg", width: "18", height: "18", fill: "currentColor", "aria-hidden": "true" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M7.434 14.566a.8.8 0 0 1 0-1.132L10.87 10 7.434 6.566a.8.8 0 1 1 1.132-1.132l4 4a.8.8 0 0 1 0 1.132l-4 4a.8.8 0 0 1-1.132 0Z" }))); };
    Icons.Plus = function () { return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg", width: "18", height: "18", fill: "currentColor", "aria-hidden": "true" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M10 4a.75.75 0 0 0-.75.75v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5A.75.75 0 0 0 10 4Z" }))); };
    Icons.TextAttribute = function () { return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", fill: "currentColor", "aria-hidden": "true" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M13.2 4.786a.779.779 0 0 0-.234-.556A.807.807 0 0 0 12.4 4H2.8a.807.807 0 0 0-.566.23.779.779 0 0 0 0 1.111c.15.148.354.23.566.23h4v8.643c0 .209.084.409.234.556a.808.808 0 0 0 1.132 0 .779.779 0 0 0 .234-.556V5.571h4a.807.807 0 0 0 .566-.23.779.779 0 0 0 .234-.555Zm4 3.928h-4.8a.807.807 0 0 0-.566.23.779.779 0 0 0 0 1.112c.15.147.354.23.566.23H14v3.928c0 .209.084.409.234.556a.808.808 0 0 0 1.132 0 .779.779 0 0 0 .234-.556v-3.928h1.6a.808.808 0 0 0 .566-.23.779.779 0 0 0 0-1.112.807.807 0 0 0-.566-.23Z" }))); };
    Icons.RichTextAttribute = function () { return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", fill: "currentColor" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", null,
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M10.7 6.571h5.6a.664.664 0 0 0 .495-.23.837.837 0 0 0 .205-.555.837.837 0 0 0-.205-.556A.664.664 0 0 0 16.3 5h-5.6a.664.664 0 0 0-.495.23.837.837 0 0 0-.205.556c0 .208.074.408.205.555.131.148.31.23.495.23Zm0 7.857h-7a.664.664 0 0 0-.495.23.837.837 0 0 0-.205.556c0 .209.074.409.205.556.131.147.31.23.495.23h7a.664.664 0 0 0 .495-.23.837.837 0 0 0 .205-.556.837.837 0 0 0-.205-.555.664.664 0 0 0-.495-.23Zm5.6-3.142H3.7a.663.663 0 0 0-.495.23.837.837 0 0 0-.205.555c0 .209.074.409.205.556.131.147.31.23.495.23h12.6a.664.664 0 0 0 .495-.23.837.837 0 0 0 .205-.556.837.837 0 0 0-.205-.555.663.663 0 0 0-.495-.23Zm0-3.143h-5.6a.664.664 0 0 0-.495.23.837.837 0 0 0-.205.556c0 .208.074.408.205.555.131.147.31.23.495.23h5.6a.664.664 0 0 0 .495-.23A.837.837 0 0 0 17 8.93a.837.837 0 0 0-.205-.556.664.664 0 0 0-.495-.23ZM8.6 3.314H3.8a.8.8 0 1 0 0 1.6h1.6v4a.8.8 0 1 0 1.6 0v-4h1.6a.8.8 0 0 0 0-1.6Z" })))); };
    Icons.NumberAttribute = function () { return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", fill: "currentColor", "aria-hidden": "true" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M8.75 3.255a.75.75 0 0 1 .662.828L9.06 7.25h2.49l.371-3.333a.75.75 0 1 1 1.491.166L13.06 7.25h2.273a.75.75 0 0 1 0 1.5h-2.44l-.277 2.5h2.717a.75.75 0 0 1 0 1.5H12.45l-.37 3.333a.75.75 0 1 1-1.491-.166l.352-3.167H8.45l-.371 3.333a.75.75 0 1 1-1.491-.166l.352-3.167H4.667a.75.75 0 0 1 0-1.5h2.44l.277-2.5H4.667a.75.75 0 0 1 0-1.5H7.55l.37-3.333a.75.75 0 0 1 .828-.662Zm2.357 7.995.277-2.5h-2.49l-.278 2.5h2.49Z" }))); };
    Icons.SingleSelectAttribute = function () { return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", fill: "currentColor", "aria-hidden": "true" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "m12.157 8.392-2.294 2.08-2.137-2.033a.8.8 0 1 0-1.128 1.128l2.697 2.6a.799.799 0 0 0 1.128 0l2.862-2.639a.8.8 0 1 0-1.128-1.136ZM10 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16Zm0 14.4a6.4 6.4 0 1 1 0-12.8 6.4 6.4 0 0 1 0 12.8Z" }))); };
    Icons.MultiSelectAttribute = function () { return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", fill: "currentColor", "aria-hidden": "true" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M4.444 4.59c-.364-.242-.888-.29-1.212.037a.783.783 0 0 0 .039 1.149L6.156 8.78a.894.894 0 0 0 1.13.037.853.853 0 0 0 .165-.127l7.308-7.312a.783.783 0 0 0-.02-1.15.891.891 0 0 0-1.213.02L6.728 6.252 4.444 4.59ZM3 15.2a.8.8 0 0 1 .8-.8h12.4a.8.8 0 0 1 0 1.6H3.8a.8.8 0 0 1-.8-.8ZM11.45 7a.8.8 0 0 1 .8-.8h4a.8.8 0 0 1 0 1.6h-4a.8.8 0 0 1-.8-.8ZM3 11.2a.8.8 0 0 1 .8-.8h12.4a.8.8 0 0 1 0 1.6H3.8a.8.8 0 0 1-.8-.8Z" }))); };
    Icons.WorkflowAttribute = function () { return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", fill: "currentColor", "aria-hidden": "true" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M3.688 11.438a.689.689 0 0 0 .697-.704V8.012c0-1.19.807-1.941 2.065-1.941h5.284v1.572c0 .328.198.52.526.52a.66.66 0 0 0 .404-.144l2.68-2.235c.252-.212.259-.547 0-.766l-2.68-2.235a.62.62 0 0 0-.404-.144c-.328 0-.526.185-.526.52v1.53H6.552c-2.174 0-3.568 1.21-3.568 3.186v2.859c0 .396.308.704.704.704Zm12.624-2.906a.689.689 0 0 0-.697.704v2.745c0 1.19-.807 1.941-2.065 1.941H8.266V12.35c0-.328-.198-.52-.526-.52a.66.66 0 0 0-.404.144l-2.68 2.242c-.259.212-.259.547 0 .76l2.68 2.241a.66.66 0 0 0 .404.144c.328 0 .526-.192.526-.52v-1.545h5.182c2.174 0 3.568-1.21 3.568-3.178V9.236a.695.695 0 0 0-.704-.704Z" }))); };
    Icons.AssignmentAttribute = function () { return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", fill: "currentColor", "aria-hidden": "true" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M10.37 11.149C9.323 10.672 8.104 10.5 7 10.5s-2.323.172-3.37.649c-1.06.483-1.983 1.302-2.351 2.587-.161.562-.152 1.244-.12 1.725.06.924.847 1.539 1.684 1.539h8.314c.837 0 1.625-.615 1.685-1.539.031-.48.04-1.163-.121-1.725-.368-1.285-1.29-2.104-2.351-2.587Zm.909 3c-.216-.755-.756-1.282-1.531-1.635C8.959 12.154 7.97 12 7 12c-.97 0-1.96.155-2.748.514-.775.353-1.315.88-1.531 1.635-.085.298-.096.761-.066 1.215a.12.12 0 0 0 .044.086c.03.027.08.05.144.05h8.314a.218.218 0 0 0 .144-.05.12.12 0 0 0 .044-.086c.03-.454.02-.917-.066-1.215ZM10.25 6.25a3.25 3.25 0 1 0-6.5 0 3.25 3.25 0 0 0 6.5 0Zm-1.5 0a1.75 1.75 0 1 0-3.5 0 1.75 1.75 0 0 0 3.5 0ZM13.818 5a2.75 2.75 0 1 1 0 5.5 2.75 2.75 0 0 1 0-5.5Zm0 1.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5Z" }),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M14.008 12.015a.75.75 0 0 0 .655.834c1.371.165 2.36.711 2.634 1.67.065.227.075.595.051.971a.07.07 0 0 1-.038.01h-2.06a.75.75 0 0 0 0 1.5h2.06c.759 0 1.48-.558 1.535-1.405.026-.406.035-.997-.106-1.49-.534-1.863-2.356-2.56-3.897-2.745a.75.75 0 0 0-.834.655Z" }))); };
    Icons.DateAttribute = function () { return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", fill: "currentColor", "aria-hidden": "true" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M15.6 3.6H14v-.8a.8.8 0 0 0-1.6 0v.8H7.6v-.8a.8.8 0 0 0-1.6 0v.8H4.4A2.4 2.4 0 0 0 2 6v9.6A2.4 2.4 0 0 0 4.4 18h11.2a2.4 2.4 0 0 0 2.4-2.4V6a2.4 2.4 0 0 0-2.4-2.4Zm.8 12a.8.8 0 0 1-.8.8H4.4a.8.8 0 0 1-.8-.8V10h12.8v5.6Zm0-7.2H3.6V6a.8.8 0 0 1 .8-.8H6V6a.8.8 0 0 0 1.6 0v-.8h4.8V6A.8.8 0 0 0 14 6v-.8h1.6a.8.8 0 0 1 .8.8v2.4Z" }))); };
    Icons.CheckboxAttribute = function () { return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", fill: "currentColor", "aria-hidden": "true" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", null,
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M8.508 12.292a.833.833 0 0 0 1.184 0l3.4-3.4a.837.837 0 0 0-1.184-1.184L9.1 10.525 8.092 9.508a.837.837 0 1 0-1.184 1.184l1.6 1.6Z" }),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M2 4.5A2.5 2.5 0 0 1 4.5 2h11A2.5 2.5 0 0 1 18 4.5v11a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 2 15.5v-11Zm1.714.214a1 1 0 0 1 1-1h10.572a1 1 0 0 1 1 1v10.572a1 1 0 0 1-1 1H4.714a1 1 0 0 1-1-1V4.714Z" })))); };
    Icons.URLAttribute = function () { return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", fill: "currentColor", "aria-hidden": "true" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M3.982 8.862a5.06 5.06 0 0 0 7.156 7.156l1.22-1.22a.746.746 0 1 0-1.056-1.056l-1.22 1.22a3.567 3.567 0 0 1-5.044-5.044l1.22-1.22a.747.747 0 0 0-1.056-1.056l-1.22 1.22Z" }),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M7.032 11.912a.747.747 0 0 0 1.056 1.056l4.88-4.88a.746.746 0 1 0-1.056-1.056l-4.88 4.88Z" }),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M7.642 5.202a.747.747 0 1 0 1.056 1.056l1.22-1.22a3.567 3.567 0 0 1 5.044 5.044l-1.22 1.22a.746.746 0 1 0 1.056 1.056l1.22-1.22a5.06 5.06 0 0 0-7.156-7.156l-1.22 1.22Z" }))); };
    Icons.EmailAttribute = function () { return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", fill: "currentColor", "aria-hidden": "true" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M13.55 7.2a.75.75 0 0 0-1.5 0h1.5Zm-.75 3.5h-.75.75Zm4.2 0h.75H17Zm0-.7h.75H17Zm-2.288 6.153a.75.75 0 1 0-.912-1.19l.912 1.19ZM12.05 9.999A2.05 2.05 0 0 1 10 12.05v1.5A3.55 3.55 0 0 0 13.55 10h-1.5ZM10 12.05A2.05 2.05 0 0 1 7.95 10h-1.5A3.55 3.55 0 0 0 10 13.55v-1.5ZM7.95 10A2.05 2.05 0 0 1 10 7.95v-1.5A3.55 3.55 0 0 0 6.45 10h1.5ZM10 7.95A2.05 2.05 0 0 1 12.05 10h1.5A3.55 3.55 0 0 0 10 6.45v1.5Zm2.05-.75v3.5h1.5V7.2h-1.5Zm0 3.5c0 .756.3 1.481.835 2.016l1.06-1.06a1.35 1.35 0 0 1-.395-.955h-1.5Zm.835 2.016a2.85 2.85 0 0 0 2.015.835v-1.5a1.35 1.35 0 0 1-.955-.396l-1.06 1.06Zm2.015.835c.756 0 1.48-.3 2.015-.835l-1.06-1.06a1.35 1.35 0 0 1-.955.395v1.5Zm2.015-.835a2.85 2.85 0 0 0 .835-2.015h-1.5c0 .358-.142.701-.395.954l1.06 1.06Zm.835-2.015V10h-1.5v.7h1.5Zm0-.7a7.75 7.75 0 0 0-1.68-4.817l-1.174.932A6.25 6.25 0 0 1 16.25 10h1.5Zm-1.68-4.817a7.75 7.75 0 0 0-4.309-2.73l-.34 1.46a6.25 6.25 0 0 1 3.475 2.202l1.175-.932Zm-4.309-2.73a7.75 7.75 0 0 0-5.072.54l.64 1.356a6.25 6.25 0 0 1 4.091-.435l.341-1.461Zm-5.072.54A7.75 7.75 0 0 0 3.05 6.569l1.345.664A6.25 6.25 0 0 1 7.33 4.35l-.641-1.356ZM3.05 6.569a7.75 7.75 0 0 0-.627 5.063l1.466-.316a6.25 6.25 0 0 1 .506-4.083L3.05 6.57Zm-.627 5.063a7.75 7.75 0 0 0 2.655 4.355l.953-1.159a6.25 6.25 0 0 1-2.142-3.512l-1.466.316Zm2.655 4.355a7.75 7.75 0 0 0 4.788 1.762l.026-1.5a6.25 6.25 0 0 1-3.861-1.42l-.953 1.158Zm4.788 1.762a7.75 7.75 0 0 0 4.845-1.596l-.912-1.19a6.25 6.25 0 0 1-3.907 1.286l-.026 1.5Z" }))); };
    Icons.PhoneAttribute = function () { return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", fill: "currentColor", "aria-hidden": "true" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M7.299 12.695c1.875 1.875 4.15 3.318 6.006 3.318.833 0 1.564-.286 2.148-.935.337-.381.547-.82.547-1.258 0-.337-.127-.661-.451-.89l-1.951-1.386c-.306-.216-.566-.317-.795-.317-.299 0-.56.165-.852.457l-.464.458a.335.335 0 0 1-.241.095.659.659 0 0 1-.267-.07c-.394-.216-1.08-.807-1.716-1.436-.63-.636-1.22-1.316-1.43-1.716a.57.57 0 0 1-.077-.26c0-.083.026-.172.102-.242l.451-.464c.293-.299.464-.56.464-.858 0-.23-.108-.483-.324-.795L7.076 4.464A1.1 1.1 0 0 0 6.148 4c-.426 0-.858.19-1.24.553C4.28 5.15 4 5.888 4 6.714c0 1.856 1.424 4.106 3.299 5.98Z" }))); };
    Icons.LocationAttribute = function () { return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", fill: "currentColor", "aria-hidden": "true" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M10 2.467a5.867 5.867 0 0 0-5.867 5.866c0 1.588.716 3.083 1.917 4.643 1.015 1.317 2.313 2.604 3.704 3.984l.246.244.246-.244c1.391-1.38 2.69-2.667 3.704-3.984 1.2-1.56 1.917-3.055 1.917-4.643A5.867 5.867 0 0 0 10 2.467ZM2.533 8.333a7.467 7.467 0 1 1 14.934 0c0 2.095-.951 3.933-2.25 5.62-1.085 1.409-2.475 2.786-3.864 4.164-.263.26-.526.521-.787.782a.8.8 0 0 1-1.132 0c-.26-.26-.524-.522-.787-.782-1.39-1.378-2.779-2.755-3.864-4.165-1.299-1.686-2.25-3.524-2.25-5.619ZM10 6.633a1.7 1.7 0 1 0 0 3.4 1.7 1.7 0 0 0 0-3.4Zm-3.3 1.7a3.3 3.3 0 1 1 6.6 0 3.3 3.3 0 0 1-6.6 0Z" }))); };
    Icons.AvatarAttribute = function () { return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", fill: "currentColor", "aria-hidden": "true" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", { "fill-rule": "evenodd", "clip-rule": "evenodd" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M6.904 8.585a3.071 3.071 0 1 1 6.143 0 3.071 3.071 0 0 1-6.143 0Zm3.072-1.57a1.571 1.571 0 1 0 0 3.141 1.571 1.571 0 0 0 0-3.142Z" }),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M5.555 3.348a8 8 0 1 1 8.89 13.304 8 8 0 0 1-8.89-13.304Zm.89 11.973a6.4 6.4 0 0 0 7.338-.159 1.571 1.571 0 0 0-1.486-1.06H7.654a1.571 1.571 0 0 0-1.475 1.032c.086.064.175.127.265.187Zm-1.4-1.27A6.402 6.402 0 0 1 8.752 3.724a6.4 6.4 0 0 1 6.175 10.363 3.07 3.07 0 0 0-2.63-1.484H7.655a3.07 3.07 0 0 0-2.608 1.45Z" })))); };
    Icons.IconAttribute = function () { return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", fill: "currentColor", "aria-hidden": "true" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M12.25 6.625a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25ZM7.75 6.625a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25Z" }),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M10 1.75a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5Zm0 1.5a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5Z" }),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M8.238 11.643a3.707 3.707 0 0 1-.491-.428l-.149-.168a.75.75 0 0 0-1.198.903l.078.097a5.21 5.21 0 0 0 .878.81c.598.435 1.5.893 2.644.893 1.144 0 2.046-.458 2.644-.893a5.21 5.21 0 0 0 .879-.81l.077-.097a.75.75 0 0 0-1.198-.903l-.149.168c-.11.116-.276.272-.491.428-.433.315-1.031.607-1.762.607-.73 0-1.33-.292-1.762-.607Z" }))); };
    Icons.FilesAttribute = function () { return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", fill: "currentColor", "aria-hidden": "true" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M16.824 9.897a.75.75 0 1 0-1.061-1.06l1.06 1.06Zm-6.657 5.596-.53-.53.53.53Zm-2.83 1.173v.75-.75Zm-4.003-4.003h-.75.75Zm1.173-2.83.53.53-.53-.53Zm6.126-6.126-.53-.53.53.53Zm1.887-.782v.75-.75Zm1.887 4.555.53.53-.53-.53Zm-6.134 6.127-.53-.53.53.53ZM6.387 11.72l-.53-.53.53.53Zm6.19-5.123a.75.75 0 0 0-1.06-1.06l1.06 1.06Zm3.186 2.24-6.127 6.126 1.061 1.06 6.127-6.126-1.061-1.06Zm-6.127 6.126c-.61.61-1.437.953-2.3.953v1.5c1.261 0 2.47-.501 3.361-1.392l-1.06-1.06Zm-2.3.953c-.862 0-1.69-.343-2.299-.953l-1.06 1.06a4.752 4.752 0 0 0 3.36 1.393v-1.5Zm-2.299-.953a3.252 3.252 0 0 1-.953-2.3h-1.5c0 1.26.501 2.47 1.392 3.36l1.061-1.06Zm-.953-2.3c0-.862.343-1.69.953-2.3l-1.06-1.06a4.752 4.752 0 0 0-1.393 3.36h1.5Zm.953-2.3 6.127-6.126-1.061-1.06-6.127 6.126 1.061 1.06Zm6.127-6.126c.36-.36.847-.562 1.356-.562v-1.5c-.906 0-1.776.36-2.417 1.001l1.06 1.061Zm1.356-.562c.509 0 .997.202 1.356.562l1.061-1.06a3.418 3.418 0 0 0-2.417-1.002v1.5Zm1.356.562c.36.36.562.848.562 1.356h1.5c0-.906-.36-1.776-1.001-2.417l-1.06 1.061Zm.562 1.356c0 .51-.202.997-.562 1.357l1.061 1.06a3.418 3.418 0 0 0 1.001-2.417h-1.5Zm-.561 1.356-6.134 6.127 1.06 1.061 6.134-6.126-1.06-1.062Zm-6.134 6.127a.584.584 0 0 1-.413.171v1.5c.553 0 1.083-.22 1.474-.61l-1.061-1.06Zm-.413.171a.584.584 0 0 1-.413-.17l-1.06 1.06c.39.39.92.61 1.473.61v-1.5Zm-.413-.17a.584.584 0 0 1-.171-.414h-1.5c0 .553.22 1.083.61 1.474l1.061-1.06Zm-.171-.414c0-.155.061-.303.171-.413l-1.06-1.06c-.392.39-.611.92-.611 1.473h1.5Zm.17-.412 5.66-5.654-1.06-1.06-5.66 5.653 1.06 1.06Z" }))); };
    Icons.CommentsAttribute = function () { return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", fill: "currentColor", "aria-hidden": "true" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M6 7.75A.75.75 0 0 1 6.75 7h6.5a.75.75 0 0 1 0 1.5h-6.5A.75.75 0 0 1 6 7.75ZM6.75 10a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5h-4.5Z" }),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M2 5.75A2.75 2.75 0 0 1 4.75 3h10.5A2.75 2.75 0 0 1 18 5.75v7.5A2.75 2.75 0 0 1 15.25 16h-.75v1.75a.75.75 0 0 1-1.13.646L9.296 16H4.75A2.75 2.75 0 0 1 2 13.25v-7.5ZM4.75 4.5c-.69 0-1.25.56-1.25 1.25v7.5c0 .69.56 1.25 1.25 1.25H9.5c.134 0 .265.036.38.104L13 16.439V15.25a.75.75 0 0 1 .75-.75h1.5c.69 0 1.25-.56 1.25-1.25v-7.5c0-.69-.56-1.25-1.25-1.25H4.75Z" }))); };
    Icons.RelationToAttribute = function () { return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", fill: "currentColor", "aria-hidden": "true" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", null,
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M7.303 7.774a.75.75 0 0 1 0-.577A.75.75 0 0 1 8 6.732h4.652a.75.75 0 0 1 .287.064.703.703 0 0 1 .402.402.75.75 0 0 1 .064.287v4.55a.753.753 0 0 1-1.505.001l.004-2.743-4.025 4.025a.75.75 0 0 1-1.06-1.06l4.025-4.025-2.845.005a.75.75 0 0 1-.696-.464Z" }),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M5.555 3.348a8 8 0 1 1 8.89 13.304 8 8 0 0 1-8.89-13.304Zm.89 11.973a6.4 6.4 0 1 0 7.11-10.643 6.4 6.4 0 0 0-7.11 10.643Z" })))); };
    Icons.LookupFromAttribute = function () { return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", fill: "currentColor", "aria-hidden": "true" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", null,
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M4.083 2a.75.75 0 0 0 0 1.5h12.5a.75.75 0 0 0 0-1.5h-12.5ZM4.083 6.751a.75.75 0 0 0 0 1.5h3.5a.75.75 0 1 0 0-1.5h-3.5ZM3.333 12.502a.75.75 0 0 1 .75-.75h3.5a.75.75 0 0 1 0 1.5h-3.5a.75.75 0 0 1-.75-.75ZM4.083 16.501a.75.75 0 0 0 0 1.5h12.5a.75.75 0 0 0 0-1.5h-12.5Z" }),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M15.747 11.44a3.5 3.5 0 1 0-1.08 1.042l2.136 2.135a.75.75 0 0 0 1.06-1.06l-2.116-2.116Zm-2.914.062a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" })))); };
    Icons.FormulaAttribute = function () { return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", fill: "currentColor", "aria-hidden": "true" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M7.098 17c1.857 0 3.092-1.07 3.395-3.172l.412-2.886h2.968c.552 0 .964-.403.964-.946 0-.535-.42-.939-.971-.939h-2.697l.226-1.567c.17-1.186.606-1.605 1.414-1.605.66 0 .994.085 1.297.085.529 0 .894-.357.894-.9C15 4.264 14.044 4 12.902 4c-1.857 0-3.085 1.07-3.388 3.172l-.272 1.885H6.71c-.551 0-.963.404-.963.939 0 .543.42.946.971.946h2.261l-.365 2.567c-.17 1.18-.606 1.606-1.414 1.606-.66 0-.987-.085-1.298-.085-.528 0-.901.349-.901.892C5 16.728 5.963 17 7.098 17Z" }))); };
    Icons.DocumentAttribute = function () { return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", fill: "currentColor", "aria-hidden": "true" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M7.098 17c1.857 0 3.092-1.07 3.395-3.172l.412-2.886h2.968c.552 0 .964-.403.964-.946 0-.535-.42-.939-.971-.939h-2.697l.226-1.567c.17-1.186.606-1.605 1.414-1.605.66 0 .994.085 1.297.085.529 0 .894-.357.894-.9C15 4.264 14.044 4 12.902 4c-1.857 0-3.085 1.07-3.388 3.172l-.272 1.885H6.71c-.551 0-.963.404-.963.939 0 .543.42.946.971.946h2.261l-.365 2.567c-.17 1.18-.606 1.606-1.414 1.606-.66 0-.987-.085-1.298-.085-.528 0-.901.349-.901.892C5 16.728 5.963 17 7.098 17Z" }))); };
    Icons.RelationAttribute = function () { return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", fill: "currentColor", "aria-hidden": "true" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", null,
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M7.303 7.774a.75.75 0 0 1 0-.577A.75.75 0 0 1 8 6.732h4.652a.75.75 0 0 1 .287.064.703.703 0 0 1 .402.402.75.75 0 0 1 .064.287v4.55a.753.753 0 0 1-1.505.001l.004-2.743-4.025 4.025a.75.75 0 0 1-1.06-1.06l4.025-4.025-2.845.005a.75.75 0 0 1-.696-.464Z" }),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M5.555 3.348a8 8 0 1 1 8.89 13.304 8 8 0 0 1-8.89-13.304Zm.89 11.973a6.4 6.4 0 1 0 7.11-10.643 6.4 6.4 0 0 0-7.11 10.643Z" })))); };
    Icons.Collection = function () { return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", fill: "currentColor", "aria-hidden": "true" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M16 6.4C16 3.973 13.314 3 10 3S4 4.002 4 6.4c0 2.4 2.686 3.401 6 3.401s6-.971 6-3.4Z" }),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M4.104 9.27a2.82 2.82 0 0 0-.104.774c0 2.399 2.686 3.4 6 3.4s6-.97 6-3.4a2.88 2.88 0 0 0-.1-.766 4.787 4.787 0 0 1-1.197.84c-1.289.648-2.972.898-4.703.898-1.735 0-3.418-.259-4.705-.911a4.831 4.831 0 0 1-1.19-.836Z" }),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M4.104 12.824c-.068.24-.104.499-.104.775C4 15.998 6.686 17 10 17s6-.972 6-3.4a2.88 2.88 0 0 0-.1-.767 4.786 4.786 0 0 1-1.197.84c-1.289.648-2.972.898-4.703.898-1.735 0-3.418-.259-4.705-.911a4.83 4.83 0 0 1-1.19-.836Z" }))); };
    Icons.Relation = function () { return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", fill: "currentColor", "aria-hidden": "true" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M14.998 11.998V6.912c0-.89-1.077-1.337-1.707-.707L6.205 13.29c-.63.63-.184 1.707.707 1.707h5.086c2 0 3-1 3-3Z" }))); };
})(Icons || (Icons = {}));


/***/ }),

/***/ "./src/TreeController.ts":
/*!*******************************!*\
  !*** ./src/TreeController.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TreeController: () => (/* binding */ TreeController)
/* harmony export */ });
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _realmocean_sdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @realmocean/sdk */ "@realmocean/sdk");
/* harmony import */ var _realmocean_sdk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_realmocean_sdk__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _resources_Icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resources/Icons */ "./src/resources/Icons.tsx");
/* harmony import */ var _tuval_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tuval/core */ "@tuval/core");
/* harmony import */ var _tuval_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_tuval_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _celmino_platform__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @celmino/platform */ "@celmino/platform");
/* harmony import */ var _celmino_platform__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_celmino_platform__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _dialogs_AddDocumentDialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dialogs/AddDocumentDialog */ "./src/dialogs/AddDocumentDialog.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();






var TreeController = /** @class */ (function (_super) {
    __extends(TreeController, _super);
    function TreeController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TreeController.prototype.LoadView = function () {
        var navigate = (0,_celmino_platform__WEBPACK_IMPORTED_MODULE_4__.useAppletNavigate)().navigate;
        var _a = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.useState)(false), isEditing = _a[0], setIsEditing = _a[1];
        var isLoading = false;
        var items = (this.props.data || {}).items;
        var item = (this.props.config || {}).item;
        var realm = (0,_celmino_platform__WEBPACK_IMPORTED_MODULE_4__.useRealm)().realm;
        var applet = (0,_celmino_platform__WEBPACK_IMPORTED_MODULE_4__.useApplet)().applet;
        var updateDocument = (0,_realmocean_sdk__WEBPACK_IMPORTED_MODULE_1__.useUpdateDocument)(realm.$id).updateDocument;
        return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIViewBuilder)(function () {
            return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIWidget)('com.celmino.widget.applet-tree')
                .config({
                node: item,
                workspaceId: realm.$id,
                appletId: item.appletId,
                appletName: item.name,
                iconName: item.iconName,
                iconCategory: item.iconCategory,
                //isSelected: isAppletSettings(appletId) || isAppletOnly(appletId),
                isEditing: isEditing,
                editingChanged: function (status) { return setIsEditing(status); },
                titleChanged: function (title) {
                    updateDocument({
                        databaseId: 'workspace',
                        collectionId: 'applets',
                        documentId: applet.$id,
                        data: {
                            name: title
                        }
                    }, function () {
                        updateDocument({
                            databaseId: 'workspace',
                            collectionId: 'ws_tree',
                            documentId: item.$id,
                            data: {
                                name: title
                            }
                        }, function () {
                            _tuval_core__WEBPACK_IMPORTED_MODULE_3__.EventBus.Default.fire('applet.added', { treeItem: item });
                        });
                    });
                },
                subNodes: function (TreeNode, level, nodeType, parentId, workspaceId, appletId) {
                    //  return subNodes(TreeNode, level, nodeType, parentId, workspaceId, appletId, onItemSelected)
                },
                requestMenu: function () {
                    return [
                        {
                            title: 'Add view',
                            type: 'Title'
                        },
                        {
                            title: 'Table',
                            icon: (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Icon)(_resources_Icons__WEBPACK_IMPORTED_MODULE_2__.TableIcon).foregroundColor('#7C828D'),
                            //onClick: () => DynoDialog.Show(AddDocumentDialog(workspaceId, appletId, item.$id, `${item.path}/${item.$id}`))
                        },
                        {
                            title: 'Board',
                            icon: (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Icon)(_resources_Icons__WEBPACK_IMPORTED_MODULE_2__.BoardIcon).foregroundColor('#7C828D'),
                            //onClick: () => DynoDialog.Show(AddBoardDialog(workspaceId, appletId, item.$id, `${item.path}/${item.$id}`))
                        },
                        {
                            title: 'List',
                            icon: (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Icon)(_resources_Icons__WEBPACK_IMPORTED_MODULE_2__.ListIcon).foregroundColor('#7C828D'),
                            //onClick: () => DynoDialog.Show(AddWhiteboardDialog(workspaceId, appletId, item.$id, `${item.path}/${item.$id}`))
                        },
                        {
                            title: 'Timeline',
                            icon: (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Icon)(_resources_Icons__WEBPACK_IMPORTED_MODULE_2__.TimelineIcon).foregroundColor('#7C828D'),
                            //onClick: () => DynoDialog.Show(AddWhiteboardDialog(workspaceId, appletId, item.$id, `${item.path}/${item.$id}`))
                        },
                        {
                            title: 'Calendar',
                            icon: (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Icon)(_resources_Icons__WEBPACK_IMPORTED_MODULE_2__.CalendarIcon).foregroundColor('#7C828D'),
                            //onClick: () => DynoDialog.Show(AddWhiteboardDialog(workspaceId, appletId, item.$id, `${item.path}/${item.$id}`))
                        },
                        {
                            title: 'Report',
                            icon: (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Icon)(_resources_Icons__WEBPACK_IMPORTED_MODULE_2__.ReportIcon).foregroundColor('#7C828D'),
                            //onClick: () => DynoDialog.Show(AddWhiteboardDialog(workspaceId, appletId, item.$id, `${item.path}/${item.$id}`))
                        },
                        {
                            title: 'Feed',
                            icon: (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Icon)(_resources_Icons__WEBPACK_IMPORTED_MODULE_2__.FeedIcon).foregroundColor('#7C828D'),
                            //onClick: () => DynoDialog.Show(AddWhiteboardDialog(workspaceId, appletId, item.$id, `${item.path}/${item.$id}`))
                        },
                        {
                            type: 'Divider'
                        },
                        {
                            title: 'Document',
                            icon: (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Icon)(_resources_Icons__WEBPACK_IMPORTED_MODULE_2__.DocumentIcon).foregroundColor('#7C828D'),
                            onClick: function () { return _celmino_platform__WEBPACK_IMPORTED_MODULE_4__.DynoDialog.Show((0,_dialogs_AddDocumentDialog__WEBPACK_IMPORTED_MODULE_5__.AddDocumentDialog)(realm.$id, applet.$id, item.$id, "".concat(item.path, "/").concat(item.$id))); }
                        },
                        {
                            title: 'Whiteboard',
                            icon: (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Icon)(_resources_Icons__WEBPACK_IMPORTED_MODULE_2__.ReportIcon).foregroundColor('#7C828D'),
                            //onClick: () => DynoDialog.Show(AddWhiteboardDialog(workspaceId, appletId, item.$id, `${item.path}/${item.$id}`))
                        },
                        {
                            title: 'Form',
                            icon: (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Icon)(_resources_Icons__WEBPACK_IMPORTED_MODULE_2__.FormIcon).foregroundColor('#7C828D'),
                            //onClick: () => DynoDialog.Show(AddWhiteboardDialog(workspaceId, appletId, item.$id, `${item.path}/${item.$id}`))
                        },
                        {
                            type: 'Divider'
                        },
                        {
                            title: 'Folder',
                            icon: (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.SvgIcon)('cu3-icon-sidebarFolderOpen', '#151719', '18px', '18px'),
                            //onClick: () => DynoDialog.Show(AddFolderDialog(workspaceId, appletId, item.$id, `${item.path}/${item.$id}`))
                        },
                        {
                            title: 'Applet',
                            icon: (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.SvgIcon)('cu3-icon-sidebarFolderOpen', '#151719', '18px', '18px'),
                            /*  onClick: () => {
                                 SelectAppletDialog.Show(workspaceId, appletId).then((applet) => {
                                     createTreeItem({
                                         documentId: applet.$id,
                                         data: {
                                             name: applet.name,
                                             path: "/",
                                             parent: '-1',
                                             type: 'applet'
                                         }
                                     }, () => void 0)
                                 });
                             } */
                        },
                    ];
                },
                requestNavigation: function () {
                    navigate("");
                },
                requestEditMenu: function () { return [
                    {
                        title: 'Rename',
                        icon: (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.SvgIcon)('svg-sprite-global__edit', '#151719', '18px', '18px'),
                        onClick: function () { return setIsEditing(true); }
                    },
                    {
                        title: 'Collections',
                        icon: (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.SvgIcon)('svg-sprite-global__settings', '#151719', '18px', '18px'),
                        onClick: function () { return navigate("collections"); }
                    },
                    {
                        title: 'Applet settings',
                        icon: (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.SvgIcon)('svg-sprite-global__settings', '#151719', '18px', '18px'),
                        onClick: function () { return navigate("settings/general"); }
                    }
                ]; }
            }));
        }));
    };
    return TreeController;
}(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIController));

//FormBuilder.injectAction('saveSpace', SaveSpaceAction);


/***/ }),

/***/ "./src/dialogs/AddCollection/AddCollectionDialog.ts":
/*!**********************************************************!*\
  !*** ./src/dialogs/AddCollection/AddCollectionDialog.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddCollectionDialog: () => (/* binding */ AddCollectionDialog)
/* harmony export */ });
/* harmony import */ var _actions_SaveCollectionAction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions/SaveCollectionAction */ "./src/dialogs/AddCollection/actions/SaveCollectionAction.ts");

var AddCollectionDialog = function (workspaceId, appletId) { return ({
    "title": 'Create collection',
    "workspaceId": workspaceId,
    "databaseId": appletId,
    "actions": [
        {
            "label": "Save",
            "type": _actions_SaveCollectionAction__WEBPACK_IMPORTED_MODULE_0__.SaveCollectionAction.Id
        }
    ],
    "fieldMap": {
        "name": {
            "label": "Name",
            "type": "text",
            "name": "name"
        },
    }
}); };


/***/ }),

/***/ "./src/dialogs/AddCollection/actions/SaveCollectionAction.ts":
/*!*******************************************************************!*\
  !*** ./src/dialogs/AddCollection/actions/SaveCollectionAction.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SaveCollectionAction: () => (/* binding */ SaveCollectionAction)
/* harmony export */ });
/* harmony import */ var _realmocean_atlaskit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @realmocean/atlaskit */ "@realmocean/atlaskit");
/* harmony import */ var _realmocean_atlaskit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_realmocean_atlaskit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _realmocean_sdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @realmocean/sdk */ "@realmocean/sdk");
/* harmony import */ var _realmocean_sdk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_realmocean_sdk__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_2__);



var SaveCollectionAction = function (formMeta, action) { return (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.UIViewBuilder)(function () {
    var _a;
    var label = action.label, successAction = action.successAction, successActions = action.successActions;
    var formController = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.useFormController)();
    var dialog = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.useDialog)();
    var invalidateResource = null;
    var formMutate = null;
    var createMutate = null;
    var updateMutate = null;
    var isFormMutateExcuting = false;
    var isFormLoading = false;
    var views = [];
    var _b = formMeta, workspaceId = _b.workspaceId, databaseId = _b.databaseId, protocol = _b.protocol, resource = _b.resource, method = _b.method;
    var _c = (0,_realmocean_sdk__WEBPACK_IMPORTED_MODULE_1__.useCreateCollection)(workspaceId), createCollection = _c.createCollection, isLoading = _c.isLoading;
    var createDocument = (0,_realmocean_sdk__WEBPACK_IMPORTED_MODULE_1__.useCreateDocument)(workspaceId, databaseId, 'collections').createDocument;
    var createField = (0,_realmocean_sdk__WEBPACK_IMPORTED_MODULE_1__.useCreateDocument)(workspaceId, databaseId, 'fields').createDocument;
    var formData = (0,_realmocean_atlaskit__WEBPACK_IMPORTED_MODULE_0__.useFormState)({
        values: true,
        errors: true
    });
    var _d = ((_a = formData === null || formData === void 0 ? void 0 : formData.values) !== null && _a !== void 0 ? _a : {}).name, name = _d === void 0 ? null : _d;
    return ((0,_realmocean_atlaskit__WEBPACK_IMPORTED_MODULE_0__.LoadingButton)().label('Save').appearance("primary")
        //.loading(isLoading)
        .onClick(function () {
        if (databaseId == null) {
            alert('Collection is null');
            return;
        }
        createCollection({
            databaseId: databaseId,
            name: name,
            permissions: [
                _realmocean_sdk__WEBPACK_IMPORTED_MODULE_1__.Permission.read(_realmocean_sdk__WEBPACK_IMPORTED_MODULE_1__.Role.any()),
                _realmocean_sdk__WEBPACK_IMPORTED_MODULE_1__.Permission.update(_realmocean_sdk__WEBPACK_IMPORTED_MODULE_1__.Role.any()),
                _realmocean_sdk__WEBPACK_IMPORTED_MODULE_1__.Permission.update(_realmocean_sdk__WEBPACK_IMPORTED_MODULE_1__.Role.any()),
                _realmocean_sdk__WEBPACK_IMPORTED_MODULE_1__.Permission.delete(_realmocean_sdk__WEBPACK_IMPORTED_MODULE_1__.Role.any()),
                _realmocean_sdk__WEBPACK_IMPORTED_MODULE_1__.Permission.delete(_realmocean_sdk__WEBPACK_IMPORTED_MODULE_1__.Role.any()),
            ],
            enabled: true
        }, function (collection) {
            Promise.all([
                _realmocean_sdk__WEBPACK_IMPORTED_MODULE_1__.Services.Databases.createStringAttribute(workspaceId, databaseId, collection.$id, 'name', 255, false),
                _realmocean_sdk__WEBPACK_IMPORTED_MODULE_1__.Services.Databases.createStringAttribute(workspaceId, databaseId, collection.$id, 'description', 1255, false)
            ]).then(function () {
                createDocument({
                    documentId: collection.$id,
                    data: {
                        name: collection.name,
                        type: 'userCollection'
                    }
                }, function () {
                    createField({
                        data: {
                            key: 'name',
                            name: 'Name',
                            type: 'text',
                            fieldInfo: JSON.stringify({
                                size: 255
                            }),
                            collectionId: collection.$id
                        }
                    }, function () {
                        createField({
                            data: {
                                key: 'description',
                                name: 'Description',
                                type: 'text',
                                fieldInfo: JSON.stringify({
                                    size: 1255
                                }),
                                collectionId: collection.$id
                            }
                        }, function () {
                            dialog.Hide();
                        });
                    });
                });
            });
        });
    }));
}); };
SaveCollectionAction.Id = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.nanoid)();


/***/ }),

/***/ "./src/dialogs/AddCollection/actions/SaveDocumentAction.ts":
/*!*****************************************************************!*\
  !*** ./src/dialogs/AddCollection/actions/SaveDocumentAction.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SaveDocumentAction: () => (/* binding */ SaveDocumentAction)
/* harmony export */ });
/* harmony import */ var _realmocean_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @realmocean/sdk */ "@realmocean/sdk");
/* harmony import */ var _realmocean_sdk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_realmocean_sdk__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_1__);
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};


var SaveDocumentAction = function (formMeta, action) { return (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.UIViewBuilder)(function () {
    var label = action.label, successAction = action.successAction, successActions = action.successActions;
    var formController = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.useFormController)();
    var dialog = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.useDialog)();
    var formBuilder = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.useFormBuilder)();
    var navigate = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.useNavigate)();
    var invalidateResource = null;
    var formMutate = null;
    var createMutate = null;
    var updateMutate = null;
    var isFormMutateExcuting = false;
    var isFormLoading = false;
    var views = [];
    var _a = formController.GetFormData(), databaseId = _a.databaseId, collectionId = _a.collectionId, workspaceId = _a.workspaceId;
    var _b = (0,_realmocean_sdk__WEBPACK_IMPORTED_MODULE_0__.useCreateDocument)(workspaceId, databaseId, collectionId), createDocument = _b.createDocument, isLoading = _b.isLoading;
    return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.Button)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.Text)('Save Document_'))
        .loading(isLoading)
        .onClick(function () {
        var data = __assign({}, formController.GetFormData());
        delete data.databaseId;
        delete data.collectionId;
        delete data.workspaceId;
        if (databaseId == null) {
            alert('Collection is null');
            return;
        }
        createDocument({
            data: __assign({}, data),
            permissions: [
                _realmocean_sdk__WEBPACK_IMPORTED_MODULE_0__.Permission.read(_realmocean_sdk__WEBPACK_IMPORTED_MODULE_0__.Role.any()),
                _realmocean_sdk__WEBPACK_IMPORTED_MODULE_0__.Permission.update(_realmocean_sdk__WEBPACK_IMPORTED_MODULE_0__.Role.any()),
                _realmocean_sdk__WEBPACK_IMPORTED_MODULE_0__.Permission.delete(_realmocean_sdk__WEBPACK_IMPORTED_MODULE_0__.Role.any())
            ]
        }, function () {
            dialog.Hide();
        });
    }));
}); };
SaveDocumentAction.Id = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.nanoid)();


/***/ }),

/***/ "./src/dialogs/AddDocumentDialog.ts":
/*!******************************************!*\
  !*** ./src/dialogs/AddDocumentDialog.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddDocumentDialog: () => (/* binding */ AddDocumentDialog),
/* harmony export */   SaveDocumentAction: () => (/* binding */ SaveDocumentAction)
/* harmony export */ });
/* harmony import */ var _realmocean_atlaskit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @realmocean/atlaskit */ "@realmocean/atlaskit");
/* harmony import */ var _realmocean_atlaskit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_realmocean_atlaskit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _realmocean_sdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @realmocean/sdk */ "@realmocean/sdk");
/* harmony import */ var _realmocean_sdk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_realmocean_sdk__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tuval_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tuval/core */ "@tuval/core");
/* harmony import */ var _tuval_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_tuval_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_3__);
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};




var SaveDocumentAction = function (formMeta, action) { return (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_3__.UIViewBuilder)(function () {
    var label = action.label, successAction = action.successAction, successActions = action.successActions;
    var formController = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_3__.useFormController)();
    var dialog = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_3__.useDialog)();
    var formBuilder = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_3__.useFormBuilder)();
    var navigate = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_3__.useNavigate)();
    var invalidateResource = null;
    var formMutate = null;
    var createMutate = null;
    var updateMutate = null;
    var isFormMutateExcuting = false;
    var isFormLoading = false;
    var views = [];
    var workspaceId = formMeta.workspaceId, appletId = formMeta.appletId;
    var createWorkspaceTreeItem = (0,_realmocean_sdk__WEBPACK_IMPORTED_MODULE_1__.useCreateDocument)(workspaceId, 'workspace', 'ws_tree').createDocument;
    var createTreeItem = (0,_realmocean_sdk__WEBPACK_IMPORTED_MODULE_1__.useCreateDocument)(workspaceId, appletId, 'dm_tree').createDocument;
    var _a = (0,_realmocean_sdk__WEBPACK_IMPORTED_MODULE_1__.useCreateDocument)(workspaceId, appletId, 'dm_documents'), createDocument = _a.createDocument, isLoading = _a.isLoading;
    var createDocumentContent = (0,_realmocean_sdk__WEBPACK_IMPORTED_MODULE_1__.useCreateDocument)(workspaceId, appletId, 'dm_document_contents').createDocument;
    var formData = (0,_realmocean_atlaskit__WEBPACK_IMPORTED_MODULE_0__.useFormState)({
        values: true,
        errors: true
    });
    return ((0,_realmocean_atlaskit__WEBPACK_IMPORTED_MODULE_0__.LoadingButton)().label('Save').appearance("primary")
        // .loading(isLoading)
        .onClick(function () {
        var _a;
        var data = (_a = formData === null || formData === void 0 ? void 0 : formData.values) !== null && _a !== void 0 ? _a : {};
        createDocument({
            data: __assign({}, data)
        }, function (document) {
            createDocumentContent({
                documentId: document.$id,
                data: {
                    content: ''
                }
            }, function (document) {
                createWorkspaceTreeItem({
                    documentId: document.$id,
                    data: {
                        name: data.name,
                        type: 'document',
                        parent: data.parent,
                        tree_widget: 'com.celmino.widget.document-management-tree',
                        appletId: appletId,
                        path: (new Date()).getTime().toString(),
                        iconName: 'document',
                        iconCategory: 'SystemIcons',
                        //viewer:'com.tuvalsoft.viewer.document'
                    }
                }, function (item) {
                    _tuval_core__WEBPACK_IMPORTED_MODULE_2__.EventBus.Default.fire('applet.added', { treeItem: item });
                });
                createTreeItem({
                    documentId: document.$id,
                    data: __assign(__assign({}, data), { type: 'document', viewer: 'com.tuvalsoft.viewer.document' })
                }, function () { return dialog.Hide(); });
            });
        });
    }));
}); };
SaveDocumentAction.Id = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_3__.nanoid)();
var AddDocumentDialog = function (workspaceId, appletId, parent, path) {
    if (workspaceId == null) {
        alert("spaceId is null");
    }
    else {
        return {
            "title": 'Create document',
            "workspaceId": workspaceId,
            "appletId": appletId,
            /*   "mutation":"_create_workspace", */
            "actions": [
                {
                    "label": "Save",
                    "type": "com.celmino.action.save-document",
                    /*  "successActions": [{
                         "type": "hide"
                     },
                     {
                         "type": "navigate",
                         "url": "/@/com.tuvalsoft.app.procetra/workspace/{{id}}"
                     }
                     ] */
                    /*  "successActions": [{
                     "type": "hide"
                 },
                 {
                     "type": "navigate",
                     "url": "/@/com.tuvalsoft.app.procetra/workspace/{{id}}"
                 }
                 ] */
                }
            ],
            "fieldMap": {
                "list_name": {
                    "label": "name",
                    "type": "text",
                    "name": "name"
                },
                /*   "type": {
                      "name": "type",
                      "type": "virtual",
                      "value": type
                  }, */
                "parent": {
                    "name": "parent",
                    "type": "virtual",
                    "value": parent
                },
                "path": {
                    "name": "path",
                    "type": "virtual",
                    "value": path
                },
                "viewer": {
                    "name": "viewer",
                    "type": "virtual",
                    "value": "com.tuvalsoft.widget.editorjs"
                },
                /*   "description": {
                      "label": "Description",
                      "type": "text",
                      "multiline": true,
                      "name": "description"
                  } */
            }
        };
    }
};


/***/ }),

/***/ "./src/dialogs/AddTextAttributeDialog.ts":
/*!***********************************************!*\
  !*** ./src/dialogs/AddTextAttributeDialog.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddTextFieldDialog: () => (/* binding */ AddTextFieldDialog),
/* harmony export */   SaveTextFieldAction: () => (/* binding */ SaveTextFieldAction)
/* harmony export */ });
/* harmony import */ var _realmocean_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @realmocean/sdk */ "@realmocean/sdk");
/* harmony import */ var _realmocean_sdk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_realmocean_sdk__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_1__);


var SaveTextFieldAction = function (formMeta, action) { return (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.UIViewBuilder)(function () {
    var label = action.label, successAction = action.successAction, successActions = action.successActions;
    var formController = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.useFormController)();
    var dialog = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.useDialog)();
    var formBuilder = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.useFormBuilder)();
    var navigate = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.useNavigate)();
    var _a = formController.GetFormData(), databaseId = _a.databaseId, collectionId = _a.collectionId, name = _a.name, workspaceId = _a.workspaceId;
    var _b = (0,_realmocean_sdk__WEBPACK_IMPORTED_MODULE_0__.useCreateStringAttribute)(workspaceId), createStringAttribute = _b.createStringAttribute, isLoading = _b.isLoading;
    return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.HStack)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.Text)('Save Field'))
        .padding(_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.cHorizontal, 11)
        .minWidth(28)
        .minHeight(28)
        .height()
        .width()
        .fontSize(14)
        .foregroundColor('white')
        .cornerRadius(6)
        .background('rgb(64, 101, 221)')
        // .loading(isLoading)
        .onClick(function () {
        if (databaseId == null) {
            alert('Collection is null');
            return;
        }
        createStringAttribute({
            databaseId: databaseId,
            collectionId: collectionId,
            key: name,
            required: false,
            size: 255
        }, function () {
            dialog.Hide();
        });
    }));
}); };
SaveTextFieldAction.Id = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.nanoid)();
var AddTextFieldDialog = function (workspaceId, databaseId, collectionId) { return ({
    "title": 'Add text field',
    "actions": [
        {
            "label": "Save",
            "type": "ca_saveTextField"
        }
    ],
    "fieldMap": {
        "workspaceId": {
            "name": "workspaceId",
            "type": "virtual",
            "value": workspaceId
        },
        "databaseId": {
            "name": "databaseId",
            "type": "virtual",
            "value": databaseId
        },
        "collectionId": {
            "name": "collectionId",
            "type": "virtual",
            "value": collectionId
        },
        "name": {
            "label": "NAME",
            "type": "text",
            "name": "name"
        },
        "description": {
            "label": "DESCRIPTION (OPTIONAL)",
            "type": "text",
            "multiline": true,
            "name": "description"
        },
    }
}); };


/***/ }),

/***/ "./src/resources/Icons.tsx":
/*!*********************************!*\
  !*** ./src/resources/Icons.tsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BoardIcon: () => (/* binding */ BoardIcon),
/* harmony export */   CalendarIcon: () => (/* binding */ CalendarIcon),
/* harmony export */   DocumentIcon: () => (/* binding */ DocumentIcon),
/* harmony export */   FeedIcon: () => (/* binding */ FeedIcon),
/* harmony export */   FormIcon: () => (/* binding */ FormIcon),
/* harmony export */   GridIcon: () => (/* binding */ GridIcon),
/* harmony export */   ListIcon: () => (/* binding */ ListIcon),
/* harmony export */   ReportIcon: () => (/* binding */ ReportIcon),
/* harmony export */   TableIcon: () => (/* binding */ TableIcon),
/* harmony export */   TimelineIcon: () => (/* binding */ TimelineIcon),
/* harmony export */   WhiteboardIcon: () => (/* binding */ WhiteboardIcon)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var TableIcon = function () { return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", fill: "currentColor" },
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M4 10a1.5 1.5 0 0 1 1.5-1.5H8a1.5 1.5 0 1 1 0 3H5.5A1.5 1.5 0 0 1 4 10ZM10.5 10A1.5 1.5 0 0 1 12 8.5h2.5a1.5 1.5 0 0 1 0 3H12a1.5 1.5 0 0 1-1.5-1.5ZM4 14.5A1.5 1.5 0 0 1 5.5 13H8a1.5 1.5 0 0 1 0 3H5.5A1.5 1.5 0 0 1 4 14.5ZM10.5 14.5A1.5 1.5 0 0 1 12 13h2.5a1.5 1.5 0 0 1 0 3H12a1.5 1.5 0 0 1-1.5-1.5ZM4 5.5A1.5 1.5 0 0 1 5.5 4H8a1.5 1.5 0 1 1 0 3H5.5A1.5 1.5 0 0 1 4 5.5ZM10.5 5.5A1.5 1.5 0 0 1 12 4h2.5a1.5 1.5 0 0 1 0 3H12a1.5 1.5 0 0 1-1.5-1.5Z" })))); };
var GridIcon = function () { return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", fill: "currentColor" },
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M4 10a1.5 1.5 0 0 1 1.5-1.5H8a1.5 1.5 0 1 1 0 3H5.5A1.5 1.5 0 0 1 4 10ZM10.5 10A1.5 1.5 0 0 1 12 8.5h2.5a1.5 1.5 0 0 1 0 3H12a1.5 1.5 0 0 1-1.5-1.5ZM4 14.5A1.5 1.5 0 0 1 5.5 13H8a1.5 1.5 0 0 1 0 3H5.5A1.5 1.5 0 0 1 4 14.5ZM10.5 14.5A1.5 1.5 0 0 1 12 13h2.5a1.5 1.5 0 0 1 0 3H12a1.5 1.5 0 0 1-1.5-1.5ZM4 5.5A1.5 1.5 0 0 1 5.5 4H8a1.5 1.5 0 1 1 0 3H5.5A1.5 1.5 0 0 1 4 5.5ZM10.5 5.5A1.5 1.5 0 0 1 12 4h2.5a1.5 1.5 0 0 1 0 3H12a1.5 1.5 0 0 1-1.5-1.5Z" })))); };
var BoardIcon = function () { return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", fill: "currentColor" },
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M4 5.5a1.5 1.5 0 1 1 3 0v5a1.5 1.5 0 0 1-3 0v-5ZM8.5 5.5a1.5 1.5 0 1 1 3 0v8a1.5 1.5 0 0 1-3 0v-8ZM14.5 4A1.5 1.5 0 0 0 13 5.5v6a1.5 1.5 0 0 0 3 0v-6A1.5 1.5 0 0 0 14.5 4Z" })))); };
var ListIcon = function () { return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", fill: "currentColor", "aria-hidden": "true" },
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M5.496 4C4.67 4 4 4.672 4 5.5S4.67 7 5.496 7h9.008C15.33 7 16 6.328 16 5.5S15.33 4 14.504 4H5.496ZM8.488 8.5c-.826 0-1.496.672-1.496 1.5s.67 1.5 1.496 1.5h6.016C15.33 11.5 16 10.828 16 10s-.67-1.5-1.496-1.5H8.488ZM9.984 14.5c0-.828.67-1.5 1.497-1.5h3.023c.826 0 1.496.672 1.496 1.5s-.67 1.5-1.496 1.5H11.48a1.498 1.498 0 0 1-1.497-1.5Z" })))); };
var TimelineIcon = function () { return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", fill: "currentColor", "aria-hidden": "true" },
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M9 5.5A1.5 1.5 0 0 1 10.5 4h4a1.5 1.5 0 0 1 0 3h-4A1.5 1.5 0 0 1 9 5.5ZM4 14.5A1.5 1.5 0 0 1 5.5 13h4a1.5 1.5 0 0 1 0 3h-4A1.5 1.5 0 0 1 4 14.5ZM5.5 8.5a1.5 1.5 0 1 0 0 3h9a1.5 1.5 0 0 0 0-3h-9Z" })))); };
var CalendarIcon = function () { return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", fill: "currentColor", "aria-hidden": "true" },
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M12.8 5.6a1.6 1.6 0 1 1 3.2 0 1.6 1.6 0 0 1-3.2 0ZM4 10a1.6 1.6 0 1 1 3.2 0A1.6 1.6 0 0 1 4 10ZM4 14.4a1.6 1.6 0 1 1 3.2 0 1.6 1.6 0 0 1-3.2 0ZM10 8.4a1.6 1.6 0 1 0 0 3.2 1.6 1.6 0 0 0 0-3.2ZM8.4 14.4a1.6 1.6 0 1 1 3.2 0 1.6 1.6 0 0 1-3.2 0ZM14.4 8.4a1.6 1.6 0 1 0 0 3.2 1.6 1.6 0 0 0 0-3.2ZM10 4a1.6 1.6 0 1 0 0 3.2A1.6 1.6 0 0 0 10 4Z" })))); };
var ReportIcon = function () { return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", fill: "currentColor", "aria-hidden": "true" },
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M15.65 5a1.65 1.65 0 0 0-1.613 2l-2.812 3.4c-.057 0-.113.005-.169.011L9.893 9.206a1.65 1.65 0 1 0-3.26.174l-1.875 1.923a1.65 1.65 0 1 0 1.51 1.317l1.875-1.924a1.737 1.737 0 0 0 .389-.02l1.087 1.126a1.65 1.65 0 1 0 3.217-.21l2.723-3.294.091.002a1.65 1.65 0 0 0 0-3.3Z" })))); };
var FeedIcon = function () { return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", fill: "currentColor", "aria-hidden": "true" },
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M16 12V9c0-2.047.466-3.163 1.08-3.665.426-.35.92-.783.92-1.335a1 1 0 0 0-1-1H9a4 4 0 0 0-4 4v3c0 2.047-.466 3.163-1.08 3.665-.426.35-.92.783-.92 1.335a1 1 0 0 0 1 1h8a4 4 0 0 0 4-4ZM7 7a1 1 0 0 1 1-1h5a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1Zm0 3a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1Z" }))); };
var DocumentIcon = function () { return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", fill: "currentColor", "aria-hidden": "true" },
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M6 4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h4.286v-4.286c0-.789.64-1.428 1.428-1.428H16V12h-4v4l4-4V6a2 2 0 0 0-2-2H6Z" }))); };
var WhiteboardIcon = function () { return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", fill: "currentColor", "aria-hidden": "true" },
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M4.56 6.66a1.5 1.5 0 0 1 2.122-2.12l1.06 1.06a1.5 1.5 0 1 1-2.12 2.121L4.56 6.661ZM13.339 4.56a1.5 1.5 0 1 1 2.121 2.122l-1.06 1.06a1.5 1.5 0 1 1-2.122-2.12L13.34 4.56ZM8.5 10a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM7.76 12.26a1.5 1.5 0 0 0-2.12 0l-1.061 1.061A1.5 1.5 0 1 0 6.7 15.443l1.06-1.061a1.5 1.5 0 0 0 0-2.121ZM12.26 12.24a1.5 1.5 0 0 0 0 2.12l1.061 1.061a1.5 1.5 0 1 0 2.122-2.121l-1.061-1.06a1.5 1.5 0 0 0-2.121 0Z" }))); };
var FormIcon = function () { return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", fill: "currentColor", "aria-hidden": "true" },
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M16 5.5A1.5 1.5 0 0 0 14.5 4h-9A1.5 1.5 0 0 0 4 5.5v4.25a1.5 1.5 0 0 0 1.5 1.5h9a1.5 1.5 0 0 0 1.5-1.5V5.5ZM15 14.5a1.5 1.5 0 0 0-1.5-1.5h-7a1.5 1.5 0 0 0 0 3h7a1.5 1.5 0 0 0 1.5-1.5Z" }),
    " ")); };


/***/ }),

/***/ "./src/routes/*/AAA.tsx":
/*!*******************************!*\
  !*** ./src/routes/*_/AAA.tsx ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomeController: () => (/* binding */ HomeController)
/* harmony export */ });
/* harmony import */ var _celmino_platform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @celmino/platform */ "@celmino/platform");
/* harmony import */ var _celmino_platform__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_celmino_platform__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _realmocean_sdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @realmocean/sdk */ "@realmocean/sdk");
/* harmony import */ var _realmocean_sdk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_realmocean_sdk__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tuval_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tuval/core */ "@tuval/core");
/* harmony import */ var _tuval_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_tuval_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _views_ActionPanel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../views/ActionPanel */ "./src/views/ActionPanel.tsx");
/* harmony import */ var _views_ViewHeader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../views/ViewHeader */ "./src/views/ViewHeader.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();







var docs = [
    { uri: "https://url-to-my-pdf.pdf" }, // Remote file
];
var HomeController = /** @class */ (function (_super) {
    __extends(HomeController, _super);
    function HomeController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HomeController.prototype.LoadView = function () {
        var realm = (0,_celmino_platform__WEBPACK_IMPORTED_MODULE_0__.useRealm)().realm;
        var applet = (0,_celmino_platform__WEBPACK_IMPORTED_MODULE_0__.useApplet)().applet;
        var workspaceId = realm.$id;
        var appletId = applet.$id;
        var _a = (0,_realmocean_sdk__WEBPACK_IMPORTED_MODULE_1__.useGetDocument)({
            projectId: realm.$id,
            databaseId: 'workspace',
            collectionId: 'ws_tree',
            documentId: applet.$id
        }), treeItem = _a.document, isTreeItemLoading = _a.isLoading;
        /*
                const { document: content, isLoading } = useGetDocument({
                    projectId: workspaceId,
                    databaseId: appletId,
                    collectionId: 'dm_document_contents',
                    documentId: documentId
                }) */
        var updateDocument = (0,_realmocean_sdk__WEBPACK_IMPORTED_MODULE_1__.useUpdateDocument)(workspaceId).updateDocument;
        return ((isTreeItemLoading) ? (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_3__.Fragment)() :
            (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_3__.ReactView)(
            //@ts-ignore
            react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_tuval_forms__WEBPACK_IMPORTED_MODULE_3__.DialogStack, null, (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_3__.VStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_3__.cTopLeading })((0,_views_ActionPanel__WEBPACK_IMPORTED_MODULE_5__.ActionPanel)(), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_3__.VStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_3__.cTopLeading })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_3__.UIWidget)("com.tuvalsoft.widget.icons")
                .config({
                onChange: function (value) {
                    updateDocument({
                        databaseId: 'workspace',
                        collectionId: 'applets',
                        documentId: appletId,
                        data: {
                            iconName: value.iconName,
                            iconCategory: value.iconCategory
                        }
                    }, function () {
                        updateDocument({
                            databaseId: 'workspace',
                            collectionId: 'ws_tree',
                            documentId: appletId,
                            data: {
                                iconName: value.iconName,
                                iconCategory: value.iconCategory
                            }
                        }, function () {
                            _tuval_core__WEBPACK_IMPORTED_MODULE_2__.EventBus.Default.fire('applet.added', { treeItem: value });
                        });
                    });
                },
                selectedIcon: treeItem === null || treeItem === void 0 ? void 0 : treeItem.iconName,
                color: treeItem === null || treeItem === void 0 ? void 0 : treeItem.bg_color,
                selectedCategory: treeItem === null || treeItem === void 0 ? void 0 : treeItem.iconCategory,
                width: 40,
                height: 40,
                padding: 1
            }), (0,_views_ViewHeader__WEBPACK_IMPORTED_MODULE_6__.DocumentHeader)(applet === null || applet === void 0 ? void 0 : applet.name, function (e) {
                updateDocument({
                    databaseId: 'workspace',
                    collectionId: 'applets',
                    documentId: appletId,
                    data: {
                        name: e
                    }
                }, function () {
                    updateDocument({
                        databaseId: 'workspace',
                        collectionId: 'ws_tree',
                        documentId: appletId,
                        data: {
                            name: e
                        }
                    }, function () {
                        _tuval_core__WEBPACK_IMPORTED_MODULE_2__.EventBus.Default.fire('applet.added', { treeItem: null });
                    });
                });
            }))
                .height()
                .paddingLeft('clamp(84px,50%,calc(50% - 380px))')
                .paddingRight('clamp(84px,50%,calc(50% - 380px))'), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_3__.UIViewBuilder)(function () {
                var openDialog = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_3__.useDialogStack)().openDialog;
                return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_3__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_3__.cTopLeading })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_3__.UIWidget)('com.tuvalsoft.widget.editor-tuval')
                    .config({}))
                    .paddingLeft('clamp(84px,50%,calc(50% - 420px))')
                    .paddingRight('clamp(84px,50%,calc(50% - 420px))'));
            }))
                .background('white')
                .render())));
    };
    return HomeController;
}(_tuval_forms__WEBPACK_IMPORTED_MODULE_3__.UIController));



/***/ }),

/***/ "./src/routes/+controller.ts":
/*!***********************************!*\
  !*** ./src/routes/+controller.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppletController: () => (/* binding */ AppletController)
/* harmony export */ });
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var AppletController = /** @class */ (function (_super) {
    __extends(AppletController, _super);
    function AppletController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AppletController.prototype.LoadView = function () {
        return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.VStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cTopLeading })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIRouteOutlet)().width('100%').height('100%')));
    };
    return AppletController;
}(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIFormController));



/***/ }),

/***/ "./src/routes/+routes.ts":
/*!*******************************!*\
  !*** ./src/routes/+routes.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RouteController: () => (/* binding */ RouteController)
/* harmony export */ });
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./+controller */ "./src/routes/+controller.ts");
/* harmony import */ var _collections_collection_collectionId_controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./collections/collection-[collectionId]/+controller */ "./src/routes/collections/collection-[collectionId]/+controller.tsx");
/* harmony import */ var _settings_controller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./settings/+controller */ "./src/routes/settings/+controller.ts");
/* harmony import */ var _AAA__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./* /AAA */ "./src/routes/*/AAA.tsx");
/* harmony import */ var _settings_general_controller__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./settings/general/+controller */ "./src/routes/settings/general/+controller.tsx");
/* harmony import */ var _collections_controller__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./collections/+controller */ "./src/routes/collections/+controller.tsx");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();







var RouteController = /** @class */ (function (_super) {
    __extends(RouteController, _super);
    function RouteController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RouteController.prototype.routeView = function () {
        return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIViewBuilder)(function () {
            return (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.VStack)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIRoutes)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIRoute)('/', _controller__WEBPACK_IMPORTED_MODULE_1__.AppletController).children((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIRoute)('', _AAA__WEBPACK_IMPORTED_MODULE_4__.HomeController)), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIRoute)('collections', _collections_controller__WEBPACK_IMPORTED_MODULE_6__.CollectionsController).children((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIRoute)(':collectionId', _collections_collection_collectionId_controller__WEBPACK_IMPORTED_MODULE_2__.CollectionController)), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIRoute)('/settings', _settings_controller__WEBPACK_IMPORTED_MODULE_3__.SettingsController).children(
            //UIRoute('features', FeatureSettingsController),
            (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIRoute)('general', _settings_general_controller__WEBPACK_IMPORTED_MODULE_5__.GeneralSettingsController))))
                .background('var(--primary-background-color)');
        }));
    };
    RouteController.prototype.LoadView = function () {
        return this.routeView();
    };
    return RouteController;
}(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIController));



/***/ }),

/***/ "./src/routes/collections/+controller.tsx":
/*!************************************************!*\
  !*** ./src/routes/collections/+controller.tsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CollectionsController: () => (/* binding */ CollectionsController)
/* harmony export */ });
/* harmony import */ var _realmocean_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @realmocean/sdk */ "@realmocean/sdk");
/* harmony import */ var _realmocean_sdk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_realmocean_sdk__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _celmino_platform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @celmino/platform */ "@celmino/platform");
/* harmony import */ var _celmino_platform__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_celmino_platform__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _tuval_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tuval/core */ "@tuval/core");
/* harmony import */ var _tuval_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_tuval_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _dialogs_AddCollection_AddCollectionDialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../dialogs/AddCollection/AddCollectionDialog */ "./src/dialogs/AddCollection/AddCollectionDialog.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();






var CollectionsController = /** @class */ (function (_super) {
    __extends(CollectionsController, _super);
    function CollectionsController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CollectionsController.prototype.LoadView = function () {
        var realm = (0,_celmino_platform__WEBPACK_IMPORTED_MODULE_2__.useRealm)().realm;
        var applet = (0,_celmino_platform__WEBPACK_IMPORTED_MODULE_2__.useApplet)().applet;
        var workspaceId = realm.$id;
        var appletId = applet.$id;
        var collections = (0,_realmocean_sdk__WEBPACK_IMPORTED_MODULE_0__.useListDocuments)(workspaceId, appletId, 'collections', [
            _realmocean_sdk__WEBPACK_IMPORTED_MODULE_0__.Query.equal('type', 'userCollection')
        ]).documents;
        var organization = (0,_celmino_platform__WEBPACK_IMPORTED_MODULE_2__.useOrganization)();
        var _a = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.useState)(null), selectedCollection = _a[0], setSelectedCollection = _a[1];
        var updateDocument = (0,_realmocean_sdk__WEBPACK_IMPORTED_MODULE_0__.useUpdateDocument)(workspaceId).updateDocument;
        var navigate = (0,_celmino_platform__WEBPACK_IMPORTED_MODULE_2__.useAppletNavigate)().navigate;
        return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.ReactView)(react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.DialogStack, null, (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.VStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_1__.cTopLeading, spacing: 10 })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.HStack)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.HStack)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.UIWidget)("com.tuvalsoft.widget.icons")
            .config({
            onChange: function (value) {
                updateDocument({
                    databaseId: 'workspace',
                    collectionId: 'applets',
                    documentId: appletId,
                    data: {
                        iconName: value.iconName,
                        iconCategory: value.iconCategory
                    }
                }, function () {
                    updateDocument({
                        databaseId: 'workspace',
                        collectionId: 'ws_tree',
                        documentId: appletId,
                        data: {
                            iconName: value.iconName,
                            iconCategory: value.iconCategory
                        }
                    }, function () {
                        _tuval_core__WEBPACK_IMPORTED_MODULE_3__.EventBus.Default.fire('applet.added', { treeItem: value });
                    });
                });
            },
            selectedIcon: applet === null || applet === void 0 ? void 0 : applet.iconName,
            color: applet === null || applet === void 0 ? void 0 : applet.themeColor,
            selectedCategory: applet === null || applet === void 0 ? void 0 : applet.iconCategory,
            width: 40,
            height: 40
        })).padding(5)
            .width(), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_1__.cLeading })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.Text)(applet === null || applet === void 0 ? void 0 : applet.name)
            .fontFamily("ui-sans-serif,-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol")
            .fontSize(24)
            .fontWeight("500"))
            .padding('6px 12px 6px 6px'))
            .paddingTop('12px')
            .paddingBottom('8px')
            .paddingRight('24px')
            .background('white')
            .height(), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_1__.cLeading })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.UIWidget)('com.celmino.widget.tab-view')
            .config({
            //  allViews: views,
            views: collections !== null && collections !== void 0 ? collections : [],
            menu: [
                {
                    title: 'Edit',
                    onClick: function () {
                        //DynoDialog.Show(AddTextFieldDialog(workspaceId, databaseId, collectionId))
                    }
                },
                {
                    title: 'Delete',
                    onClick: function () {
                    }
                }
            ],
            ////  isLoading: isTaskViewsLoading,
            //selectedIndex: taskViews?.findIndex(x => x.id === object_view_id),
            onChange: function (index) {
                setSelectedCollection(collections[index]);
                navigate("collections/".concat(collections[index].name, "-").concat(collections[index].$id));
                /*    setWidgetController({
                       controller: class extends WidgetController { }
                   });
                   setSelectedViewIndex(index) */
            },
            actions: [
                {
                    title: 'New Collection',
                    onClick: function () {
                        _celmino_platform__WEBPACK_IMPORTED_MODULE_2__.DynoDialog.Show((0,_dialogs_AddCollection_AddCollectionDialog__WEBPACK_IMPORTED_MODULE_5__.AddCollectionDialog)(workspaceId, appletId));
                    }
                }
            ]
        }))
            .background('white')
            .borderTop('1px solid rgba(0,0,0,.05)')
            .borderBottom('1px solid rgba(0,0,0,.05)')
            .height(50), 
        //Text(JSON.stringify(collections)),
        (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.UIRouteOutlet)().width('100%').height('100%'))
            .render())));
    };
    return CollectionsController;
}(_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.UIFormController));



/***/ }),

/***/ "./src/routes/collections/collection-[collectionId]/+controller.tsx":
/*!**************************************************************************!*\
  !*** ./src/routes/collections/collection-[collectionId]/+controller.tsx ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CollectionController: () => (/* binding */ CollectionController),
/* harmony export */   replaceNonMatchingCharacters: () => (/* binding */ replaceNonMatchingCharacters)
/* harmony export */ });
/* harmony import */ var _realmocean_antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @realmocean/antd */ "@realmocean/antd");
/* harmony import */ var _realmocean_antd__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_realmocean_antd__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _realmocean_sdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @realmocean/sdk */ "@realmocean/sdk");
/* harmony import */ var _realmocean_sdk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_realmocean_sdk__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _celmino_platform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @celmino/platform */ "@celmino/platform");
/* harmony import */ var _celmino_platform__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_celmino_platform__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _tuval_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tuval/core */ "@tuval/core");
/* harmony import */ var _tuval_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_tuval_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../Icons */ "./src/Icons.tsx");
/* harmony import */ var _dialogs_AddTextAttributeDialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../dialogs/AddTextAttributeDialog */ "./src/dialogs/AddTextAttributeDialog.ts");
/* harmony import */ var _views_ColorItemView__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./views/ColorItemView */ "./src/routes/collections/collection-[collectionId]/views/ColorItemView.ts");
/* harmony import */ var _views_FieldViews_MultiSelectView__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./views/FieldViews/MultiSelectView */ "./src/routes/collections/collection-[collectionId]/views/FieldViews/MultiSelectView.ts");
/* harmony import */ var _views_FieldViews_Richtext__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./views/FieldViews/Richtext */ "./src/routes/collections/collection-[collectionId]/views/FieldViews/Richtext.tsx");
/* harmony import */ var _views_FieldViews_Select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./views/FieldViews/Select */ "./src/routes/collections/collection-[collectionId]/views/FieldViews/Select.tsx");
/* harmony import */ var _views_FieldViews_Text__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./views/FieldViews/Text */ "./src/routes/collections/collection-[collectionId]/views/FieldViews/Text.ts");
var __makeTemplateObject = (undefined && undefined.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};


//import { ButtonRenderer as TestRenderer } from "@realmocean/elasticui";











/* import { AddBooleanFieldDialog } from "../dialogs/AddBooleanFieldDialog";
import { AddDatetimeFieldDialog } from "../dialogs/AddDatetimeField";
import { AddNumberFieldDialog } from "../dialogs/AddNumberFieldDialog";
import { AddRelationFieldDialog } from "../dialogs/AddRelationDialog";
import { AddTextFieldDialog } from "../dialogs/AddTextFieldDialog"; */
function replaceNonMatchingCharacters(originalText) {
    var replacementTable = {
        'ı': 'i',
        'ç': 'c',
        ' ': '_'
    };
    originalText = originalText.toLocaleLowerCase();
    // Replacement table'ı kullanarak metindeki kriterlere uymayan karakterleri değiştir
    var replacedText = originalText.replace(/[^a-zA-Z0-9._-]/g, function (match) {
        return replacementTable[match] || match; // Eğer replacement table'da varsa değiştir, yoksa aynı karakteri koru
    });
    return replacedText;
}
var colors = [
    '#4A4A4A',
    '#6A849B',
    '#BEC5CC',
    '#D40915',
    '#E72065',
    '#9C2BAF',
    '#673DB6',
    '#3E53B4',
    '#2978FB',
    '#199EE3',
    '#1FBED3',
    '#159789',
    '#4FAF54',
    '#8EC351',
    '#FBA32F',
    '#FC551F',
    '#B04E31'
];
var root = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_4__.css)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    height: 100%;\n"], ["\n    height: 100%;\n"])));
var wrapper = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_4__.css)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    height: 100%;\n"], ["\n    height: 100%;\n"])));
var tableStyle = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_4__.css)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    border-spacing: 0px;\n    width: 100%;\n"], ["\n    border-spacing: 0px;\n    width: 100%;\n"])));
var headerCell = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_4__.css)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    font-family:\"Inter var\", sans-serif;\n    font-feature-settings: \"cv02\", \"cv03\", \"cv04\", \"cv11\";\n    text-align: left;\n    box-shadow:rgba(193, 200, 205, 0.5) -1px 0px 0px 0px inset, rgba(193, 200, 205, 0.5) 0px -1px 0px 0px inset;\n    font-weight: 700;\n    color: rgb(109, 122, 131);\n    background: #F9FAFB;\n    transition: box-shadow 0.2s;\n"], ["\n    font-family:\"Inter var\", sans-serif;\n    font-feature-settings: \"cv02\", \"cv03\", \"cv04\", \"cv11\";\n    text-align: left;\n    box-shadow:rgba(193, 200, 205, 0.5) -1px 0px 0px 0px inset, rgba(193, 200, 205, 0.5) 0px -1px 0px 0px inset;\n    font-weight: 700;\n    color: rgb(109, 122, 131);\n    background: #F9FAFB;\n    transition: box-shadow 0.2s;\n"])));
var bodyRow = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_4__.css)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n    background: #ffffff;\n    color: #4b5563;\n    transition: box-shadow 0.2s;\n"], ["\n    background: #ffffff;\n    color: #4b5563;\n    transition: box-shadow 0.2s;\n"])));
var bodyCell = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_4__.css)(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n    box-shadow:rgba(193, 200, 205, 0.5) -1px 0px 0px 0px inset, rgba(193, 200, 205, 0.5) 0px -1px 0px 0px inset;\n"], ["\n    box-shadow:rgba(193, 200, 205, 0.5) -1px 0px 0px 0px inset, rgba(193, 200, 205, 0.5) 0px -1px 0px 0px inset;\n"])));
var paginator = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_4__.css)(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-wrap: wrap;\n    border-width: 0 0 1px 0;\n    border-radius: 0;\n\n    & .p-paginator-first {\n        background-color: transparent;\n        border: 0 none;\n        color: #6b7280;\n        min-width: 3rem;\n        height: 3rem;\n        margin: 0.143rem;\n        transition: box-shadow 0.2s;\n        border-radius: 50%;\n    }\n\n"], ["\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-wrap: wrap;\n    border-width: 0 0 1px 0;\n    border-radius: 0;\n\n    & .p-paginator-first {\n        background-color: transparent;\n        border: 0 none;\n        color: #6b7280;\n        min-width: 3rem;\n        height: 3rem;\n        margin: 0.143rem;\n        transition: box-shadow 0.2s;\n        border-radius: 50%;\n    }\n\n"])));
function getAttributeIcon(type) {
    switch (type) {
        case 'text':
            return _Icons__WEBPACK_IMPORTED_MODULE_6__.Icons.TextAttribute;
        case 'integer':
            return _Icons__WEBPACK_IMPORTED_MODULE_6__.Icons.NumberAttribute;
        case 'boolean':
            return _Icons__WEBPACK_IMPORTED_MODULE_6__.Icons.CheckboxAttribute;
        case 'datetime':
            return _Icons__WEBPACK_IMPORTED_MODULE_6__.Icons.DateAttribute;
        default:
            return _Icons__WEBPACK_IMPORTED_MODULE_6__.Icons.TextAttribute;
    }
}
var _hideHandle = null;
var CollectionController = /** @class */ (function (_super) {
    __extends(CollectionController, _super);
    function CollectionController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CollectionController.prototype.LoadView = function () {
        var _a;
        var collectionId = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_4__.useParams)().collectionId;
        var realm = (0,_celmino_platform__WEBPACK_IMPORTED_MODULE_2__.useRealm)().realm;
        var applet = (0,_celmino_platform__WEBPACK_IMPORTED_MODULE_2__.useApplet)().applet;
        var workspaceId = realm.$id;
        var databaseId = applet.$id;
        var database = (0,_realmocean_sdk__WEBPACK_IMPORTED_MODULE_1__.useGetDatabase)(workspaceId, databaseId).database;
        var deleteAttribute = (0,_realmocean_sdk__WEBPACK_IMPORTED_MODULE_1__.useDeleteAttribute)(workspaceId).deleteAttribute;
        var updateCollection = (0,_realmocean_sdk__WEBPACK_IMPORTED_MODULE_1__.useUpdateCollection)(workspaceId).updateCollection;
        var createDocument = (0,_realmocean_sdk__WEBPACK_IMPORTED_MODULE_1__.useCreateDocument)(workspaceId, databaseId, collectionId).createDocument;
        var updateDocument = (0,_realmocean_sdk__WEBPACK_IMPORTED_MODULE_1__.useUpdateDocument)(workspaceId).updateDocument;
        //const { createDocument } = useCreateDocument(workspaceId);
        var _b = (0,_realmocean_sdk__WEBPACK_IMPORTED_MODULE_1__.useListDocuments)(workspaceId, databaseId, collectionId, [
            _realmocean_sdk__WEBPACK_IMPORTED_MODULE_1__.Query.limit(1000)
        ]), documents = _b.documents, isLoading = _b.isLoading;
        var fields = (0,_realmocean_sdk__WEBPACK_IMPORTED_MODULE_1__.useListDocuments)(workspaceId, databaseId, 'fields', [
            _realmocean_sdk__WEBPACK_IMPORTED_MODULE_1__.Query.equal('collectionId', collectionId)
        ]).documents;
        var createStringAttribute = (0,_realmocean_sdk__WEBPACK_IMPORTED_MODULE_1__.useCreateStringAttribute)(workspaceId).createStringAttribute;
        var createField = (0,_realmocean_sdk__WEBPACK_IMPORTED_MODULE_1__.useCreateDocument)(workspaceId, databaseId, 'fields', [
            _realmocean_sdk__WEBPACK_IMPORTED_MODULE_1__.Query.equal('collectionId', collectionId)
        ]).createDocument;
        var collection = (0,_realmocean_sdk__WEBPACK_IMPORTED_MODULE_1__.useGetCollection)(workspaceId, databaseId, collectionId).collection;
        var _c = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)((_a = collection === null || collection === void 0 ? void 0 : collection.name) !== null && _a !== void 0 ? _a : 'New Collection'), collectionName = _c[0], setCollectionName = _c[1];
        var _d = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false), showDialog = _d[0], setShowDialog = _d[1];
        /* let documents = [];
        if (_documents != null) {
            documents = [..._documents];
            documents.push({
                indexNo: _documents.length + 1,
                type: 'addRow'
            })
        } */
        var index = 1;
        return (isLoading ? (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_4__.Fragment)() :
            (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_4__.ReactView)(react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_tuval_forms__WEBPACK_IMPORTED_MODULE_4__.DialogStack, null, (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_4__.VStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_4__.cTopLeading })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_4__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_4__.cLeading })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_4__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_4__.cLeading })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_4__.Geometry)(function (_a) {
                var x = _a.x, y = _a.y;
                return (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_4__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_4__.cLeading, spacing: 5 })(showDialog ?
                    (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_4__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_4__.cTopLeading })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_4__.VStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_4__.cTopLeading, spacing: 10 })(
                    //Text(JSON.stringify(params))
                    (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_4__.Input)()
                        .autoFocus(true)
                        .renderer(_realmocean_antd__WEBPACK_IMPORTED_MODULE_0__.InputRenderer)
                        .value(collection === null || collection === void 0 ? void 0 : collection.name)
                        .fontSize(18)
                        .prefix((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_4__.Icon)(_Icons__WEBPACK_IMPORTED_MODULE_6__.Icons.Collection))
                        .onChange(function (e) { return setCollectionName(e.target.value); })
                        .onBlur(function (value) {
                        if (collectionName !== '' && collectionName !== (collection === null || collection === void 0 ? void 0 : collection.name)) {
                            updateCollection({
                                databaseId: databaseId,
                                collectionId: collectionId,
                                name: collectionName
                            });
                        }
                    }), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_4__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_4__.cTopLeading, spacing: 2 }).apply(void 0, (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_4__.ForEach)(colors)(function (color) { return ((0,_views_ColorItemView__WEBPACK_IMPORTED_MODULE_8__.ColorItemView)(color)); })).wrap('wrap')))
                        .onClickAway(function () {
                        if (collectionName !== '' && collectionName !== (collection === null || collection === void 0 ? void 0 : collection.name)) {
                            updateCollection({
                                databaseId: databaseId,
                                collectionId: collectionId,
                                name: collectionName
                            });
                        }
                        setShowDialog(false);
                    })
                        .zIndex(10)
                        .transform("translate3d(".concat(x, "px, ").concat(y, "px, 0px)"))
                        .position('fixed')
                        .inset('0px auto auto 0px')
                        .background('white')
                        .shadow('0 0 0 1px hsla(205,9%,47%,.1),0 12px 16px -4px hsla(205,9%,47%,.3)')
                        .width(330)
                        .height(200)
                        .cornerRadius(8)
                        .padding(12)
                    : (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_4__.Fragment)(), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_4__.HStack)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_4__.Icon)(_Icons__WEBPACK_IMPORTED_MODULE_6__.Icons.Collection))
                    // .background('#FCE8E8')
                    .width(32)
                    .height(32)
                    .cornerRadius(5), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_4__.Text)(collection === null || collection === void 0 ? void 0 : collection.name)
                    .fontSize(18)
                    .fontWeight('500')
                    .foregroundColor('#212526')
                    .fontFamily('ui-sans-serif,-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol')
                    .onClick(function () {
                    setCollectionName(collection === null || collection === void 0 ? void 0 : collection.name);
                    setShowDialog(true);
                }))
                    .width();
            })).width(300), 
            /*    HStack({ alignment: cTopLeading })(

                   UIWidget('com.tuvalsoft.widget.editorjs')
                       .config({
                           scrollable: false
                       })
               )

               , */
            (0,_celmino_platform__WEBPACK_IMPORTED_MODULE_2__.NewFieldMenuView)({
                view: function (menuIsOpen) { return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_4__.HStack)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_4__.Icon)(_Icons__WEBPACK_IMPORTED_MODULE_6__.Icons.Plus).foregroundColor(menuIsOpen ? 'white' : ''), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_4__.Text)('New Field')
                    .foregroundColor(menuIsOpen ? 'white' : '')
                    .fontFamily("ui-sans-serif,-apple-system,BlinkMacSystemFont,'Segoe UI','Helvetica','Arial',sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol'")
                    .fontSize(14)
                    .fontWeight('500'))); }, onNewFieldAdded: function (field) {
                    if (field.type === 'text') {
                        createStringAttribute({
                            databaseId: databaseId,
                            collectionId: collectionId,
                            key: replaceNonMatchingCharacters(field.name),
                            required: false,
                            size: 255
                        }, function (attribute) {
                            createField({
                                data: __assign(__assign({}, field), { collectionId: collectionId })
                            }, function () { return void 0; });
                        });
                    }
                }
            }))
                .height()
                .background('#F9FAFB')
                .minHeight(60)
                .paddingLeft('10px')
                .paddingTop('12px')
                .paddingRight('24px')
                .paddingBottom('8px')
                .borderBottom('1px solid rgba(0,0,0,.05)'), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_4__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_4__.cTopLeading })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_4__.ScrollView)({ axes: _tuval_forms__WEBPACK_IMPORTED_MODULE_4__.cAll, alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_4__.cTopLeading })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_4__.UIDataTable)()
                .dataTablePT({
                root: root,
                wrapper: wrapper,
                table: tableStyle,
                bodyRow: bodyRow,
                paginator: paginator
            })
                .columnPT({
                headerCell: headerCell,
                bodyCell: bodyCell
            })
                .columns(__spreadArray([{
                    field: 'indexNo',
                    width: '80px',
                    header: '',
                    align: 'right',
                    body: function (row) {
                        return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_4__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_4__.cTrailing })(row['type'] === 'addRow' ?
                            (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_4__.Icon)(_Icons__WEBPACK_IMPORTED_MODULE_6__.Icons.Plus) :
                            (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_4__.Text)(row['indexNo']))
                            .paddingRight('8px')
                            .height(38));
                    },
                    editor: function (row) {
                        return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_4__.Text)(row['indexNo']));
                    }
                }], (fields !== null && fields !== void 0 ? fields : []).map(function (column, index) {
                return {
                    field: column.key,
                    dataType: column.type,
                    width: '220px',
                    header: function (data) { return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_4__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_4__.cLeading, spacing: 5 })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_4__.Icon)(getAttributeIcon(column.type))
                        .width(20)
                        .height(20), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_4__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_4__.cLeading })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_4__.Text)(column.name)
                        .fontFamily('ui-sans-serif,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"!important')
                        .foregroundColor('rgb(109, 122, 131)')
                        .fontSize(14)), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_4__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_4__.cTrailing })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_4__.MenuButton)()
                        .model([
                        {
                            title: 'Edit',
                            onClick: function () {
                                _celmino_platform__WEBPACK_IMPORTED_MODULE_2__.DynoDialog.Show((0,_dialogs_AddTextAttributeDialog__WEBPACK_IMPORTED_MODULE_7__.AddTextFieldDialog)(workspaceId, databaseId, collectionId));
                            }
                        },
                        {
                            title: 'Delete',
                            onClick: function () {
                                deleteAttribute({
                                    databaseId: databaseId,
                                    collectionId: collectionId,
                                    key: column.key
                                });
                                //  DynoDialog.Show(AddTextFieldDialog(databaseId, collectionId))
                            }
                        }
                    ])
                        .icon(_tuval_forms__WEBPACK_IMPORTED_MODULE_4__.Icons.Menu))
                        .width()
                        .opacity('var(--hoverOpacity)'))
                        .padding(8)
                        .variable('--hoverOpacity', {
                        default: '0',
                        hover: '1'
                    })); },
                    body: function (row) {
                        if (column.type === 'richtext') {
                            return (0,_views_FieldViews_Richtext__WEBPACK_IMPORTED_MODULE_10__.RichTextFieldView)();
                        }
                        else if (column.type === 'select') {
                            return (0,_views_FieldViews_Select__WEBPACK_IMPORTED_MODULE_11__.SelectFieldView)(workspaceId, databaseId, collectionId, fields, column, index, row);
                        }
                        else if (column.type === 'multiselect') {
                            return (0,_views_FieldViews_MultiSelectView__WEBPACK_IMPORTED_MODULE_9__.MultiSelectFieldView)(workspaceId, databaseId, collectionId, fields, column, index, row);
                        }
                        else if (column.type === 'boolean') {
                            var values = row[column.key];
                            return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_4__.CheckBox)().checked(row[column.key]));
                        }
                        else if (column.type === 'relationship') {
                            var values = row[column.key];
                            return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_4__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_4__.cLeading }).apply(void 0, (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_4__.ForEach)(values)(function (value) { return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_4__.HStack)({ spacing: 5 })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_4__.HStack)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_4__.Icon)(_Icons__WEBPACK_IMPORTED_MODULE_6__.Icons.Relation))
                                .width()
                                .height()
                                .foregroundColor('rgb(79, 175, 84)'), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_4__.Text)(value.Name), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_4__.Icon)(_Icons__WEBPACK_IMPORTED_MODULE_6__.Icons.RightArrow))
                                .width()
                                .height()
                                .border('solid 1px #E9EBED')
                                .cornerRadius(6)
                                .padding(2)); })));
                        }
                        else {
                            return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_4__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_4__.cLeading })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_4__.UIViewBuilder)(function () {
                                if (row.type === 'addRow' && column.key === 'name') {
                                    return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_4__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_4__.cLeading })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_4__.Text)('To add a new row, press Shift+Enter')).onClick(function () {
                                        createDocument({
                                            documentId: (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_4__.nanoid)(),
                                            data: {
                                                name: ''
                                            }
                                        }, function (document) {
                                            _tuval_core__WEBPACK_IMPORTED_MODULE_3__.EventBus.Default.fire('editCell', { editingCell: column.$id, editingRow: document.$id });
                                            /* setEditingCell(column.$id);
                                            setEditingRow(document.$id); */
                                        });
                                    }));
                                }
                                else {
                                    return (0,_views_FieldViews_Text__WEBPACK_IMPORTED_MODULE_12__.TextFieldView)(workspaceId, databaseId, collectionId, fields, column, index, row);
                                }
                            })));
                        }
                    }
                };
            }), true))
                .model(documents.map(function (document, index) {
                var _a, _b;
                return __assign({ indexNo: index + 1, nextRowId: (_a = documents[index + 1]) === null || _a === void 0 ? void 0 : _a.$id, prevRowId: (_b = documents[index - 1]) === null || _b === void 0 ? void 0 : _b.$id }, document);
            })))), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_4__.Button)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_4__.Text)('Create Document'))
                //.renderer(TestRenderer)
                .onClick(function () {
                /*   createDatabase({
                      name:'dasf',
                      category:'sdf'
                  }) */
                createDocument({
                    documentId: (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_4__.nanoid)(),
                    data: {
                        name: ''
                    }
                }, function (document) {
                    _tuval_core__WEBPACK_IMPORTED_MODULE_3__.EventBus.Default.fire('editCell', { editingCell: fields[0].$id, editingRow: document.$id });
                });
            })).render())));
    };
    return CollectionController;
}(_tuval_forms__WEBPACK_IMPORTED_MODULE_4__.UIFormController));

var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;


/***/ }),

/***/ "./src/routes/collections/collection-[collectionId]/views/ColorItemView.ts":
/*!*********************************************************************************!*\
  !*** ./src/routes/collections/collection-[collectionId]/views/ColorItemView.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ColorItemView: () => (/* binding */ ColorItemView)
/* harmony export */ });
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__);

var ColorItemView = function (color) {
    return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)()
        .cursor('pointer')
        .width(20)
        .height(20)
        .background(color)
        .cornerRadius('100%')
        .border('1px solid rgba(0, 0, 0, 0.14)'))
        .width(32)
        .height(32)
        .cornerRadius(6)
        .background({ hover: 'rgba(109, 122, 131, 0.2)' }));
};


/***/ }),

/***/ "./src/routes/collections/collection-[collectionId]/views/FieldViews/MultiSelectView.ts":
/*!**********************************************************************************************!*\
  !*** ./src/routes/collections/collection-[collectionId]/views/FieldViews/MultiSelectView.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MultiSelectFieldView: () => (/* binding */ MultiSelectFieldView)
/* harmony export */ });
/* harmony import */ var _realmocean_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @realmocean/sdk */ "@realmocean/sdk");
/* harmony import */ var _realmocean_sdk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_realmocean_sdk__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tuval_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tuval/core */ "@tuval/core");
/* harmony import */ var _tuval_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tuval_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Text */ "./src/routes/collections/collection-[collectionId]/views/FieldViews/Text.ts");





var MultiSelectFieldView = function (workspaceId, databaseId, collectionId, fields, field, index, row) { return (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.UIViewBuilder)(function () {
    return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_2__.cLeading })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.UIViewBuilder)(function () {
        var _a, _b;
        var createDocument = (0,_realmocean_sdk__WEBPACK_IMPORTED_MODULE_0__.useCreateDocument)(workspaceId, databaseId, collectionId).createDocument;
        var updateDocument = (0,_realmocean_sdk__WEBPACK_IMPORTED_MODULE_0__.useUpdateDocument)(workspaceId).updateDocument;
        var _c = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.useState)(null), isEdit = _c[0], setIsEdit = _c[1];
        if (_tuval_core__WEBPACK_IMPORTED_MODULE_1__.is.string(field.fieldInfo)) {
            field.fieldInfo = (_a = JSON.parse(field.fieldInfo)) !== null && _a !== void 0 ? _a : {};
            field.fieldInfo.options = (_b = field.fieldInfo.options) === null || _b === void 0 ? void 0 : _b.map(function (option) {
                return {
                    label: option.key,
                    value: option.value
                };
            });
        }
        //const [editingRow, setEditingRow] = useState(null);
        var turnOnEditMode = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(function (_a) {
            var editingCell = _a.editingCell, editingRow = _a.editingRow;
            // alert(field.name + '  --  ' + editInfo.lastEditCell + ' : ' + editInfo.lastEditRow)
            if (field.$id === editingCell && row.$id === editingRow) {
                //  alert(editInfo.lastEditCell + ' : ' + editInfo.lastEditRow)
                _tuval_core__WEBPACK_IMPORTED_MODULE_1__.EventBus.Default.fire('editCellOff', { editingCell: _Text__WEBPACK_IMPORTED_MODULE_4__.editInfo.lastEditCell, editingRow: _Text__WEBPACK_IMPORTED_MODULE_4__.editInfo.lastEditRow });
                _Text__WEBPACK_IMPORTED_MODULE_4__.editInfo.lastEditCell = editingCell;
                _Text__WEBPACK_IMPORTED_MODULE_4__.editInfo.lastEditRow = editingRow;
                setIsEdit(true);
            }
        }, []);
        var turnOffEditMode = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(function (_a) {
            var editingCell = _a.editingCell, editingRow = _a.editingRow;
            if (field.$id === editingCell && row.$id === editingRow) {
                setIsEdit(false);
            }
        }, []);
        (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
            _tuval_core__WEBPACK_IMPORTED_MODULE_1__.EventBus.Default.on('editCell', turnOnEditMode);
            _tuval_core__WEBPACK_IMPORTED_MODULE_1__.EventBus.Default.on('editCellOff', turnOffEditMode);
            return function () {
                _tuval_core__WEBPACK_IMPORTED_MODULE_1__.EventBus.Default.off('editCell', turnOnEditMode);
                _tuval_core__WEBPACK_IMPORTED_MODULE_1__.EventBus.Default.on('editCellOff', turnOffEditMode);
            };
        }, []);
        if (row.type === 'addRow' && field.key === 'name') {
            return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_2__.cLeading })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.Text)('To add a new row, press Shift+Enter')).onClick(function () {
                createDocument({
                    documentId: (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.nanoid)(),
                    data: {
                        name: ''
                    }
                }, function (document) {
                    _tuval_core__WEBPACK_IMPORTED_MODULE_1__.EventBus.Default.fire('editCell', { editingCell: field.$id, editingRow: document.$id });
                });
            }));
        }
        else {
            return (isEdit ?
                (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.Text)('Dropdown')
                /*  Dropdown().width('100%')
                     .padding(0)
                      .options(field.fieldInfo.options ?? [])
                     .onChange((values: { label: string, value: string }[]) => {
                         const valuesForSave = values.map((value) => value.value).join(',');


                         if (valuesForSave !== row[field.key]) {

                             updateDocument({
                                 databaseId,
                                 collectionId,
                                 documentId: row.$id,
                                 data: {
                                     [field.key]: valuesForSave
                                 }
                             }, () => {

                             })

                             // setIsEdit(false);
                         } else {
                         }
                     }) as any */
                :
                    (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_2__.cLeading })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.UIViewBuilder)(function () {
                        var list = [];
                        if (row[field.key] !== null && _tuval_core__WEBPACK_IMPORTED_MODULE_1__.is.string(row[field.key])) {
                            list = row[field.key].split(',');
                        }
                        return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_2__.cLeading }).apply(void 0, (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.ForEach)(list)(function (item) { var _a, _b; return (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.Text)(((_b = (_a = field.fieldInfo.options) === null || _a === void 0 ? void 0 : _a.find(function (option) { return option.value === item; })) === null || _b === void 0 ? void 0 : _b.label) || ''); })));
                    }))
                        .onClick(function () {
                        // alert(JSON.stringify(editInfo) + ' ----- ' + field.$id + ' : ' + row.$id);
                        _tuval_core__WEBPACK_IMPORTED_MODULE_1__.EventBus.Default.fire('editCell', { editingCell: field.$id, editingRow: row.$id });
                    })
                        .paddingLeft('8px')
                        .height(38));
        }
    })));
}); };


/***/ }),

/***/ "./src/routes/collections/collection-[collectionId]/views/FieldViews/Richtext.tsx":
/*!****************************************************************************************!*\
  !*** ./src/routes/collections/collection-[collectionId]/views/FieldViews/Richtext.tsx ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RichTextFieldView: () => (/* binding */ RichTextFieldView)
/* harmony export */ });
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var DocumentIcon = function () { return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement("svg", { viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", fill: "currentColor", "aria-hidden": "true" },
    react__WEBPACK_IMPORTED_MODULE_1___default().createElement("g", null,
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement("path", { d: "M6 4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h4.286v-4.286c0-.789.64-1.428 1.428-1.428H16V12h-4v4l4-4V6a2 2 0 0 0-2-2H6Z" })))); };
var RichTextFieldView = function () { return (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIViewBuilder)(function () {
    /*  const { createDocument } = useCreateDocument(workspaceId, databaseId, collectionId);
     const { updateDocument } = useUpdateDocument(workspaceId); */
    var openDialog = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.useDialogStack)().openDialog;
    return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cLeading })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIViewBuilder)(function () {
        return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Icon)(DocumentIcon));
    }))
        .onClick(function () {
        openDialog({
            title: '',
            view: (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIViewBuilder)(function () {
                return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)('asdasdasd'));
            })
        });
    }));
}); };


/***/ }),

/***/ "./src/routes/collections/collection-[collectionId]/views/FieldViews/Select.tsx":
/*!**************************************************************************************!*\
  !*** ./src/routes/collections/collection-[collectionId]/views/FieldViews/Select.tsx ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SelectFieldView: () => (/* binding */ SelectFieldView)
/* harmony export */ });
/* harmony import */ var _realmocean_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @realmocean/sdk */ "@realmocean/sdk");
/* harmony import */ var _realmocean_sdk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_realmocean_sdk__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tuval_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tuval/core */ "@tuval/core");
/* harmony import */ var _tuval_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tuval_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Text */ "./src/routes/collections/collection-[collectionId]/views/FieldViews/Text.ts");





var SelectFieldView = function (workspaceId, databaseId, collectionId, fields, field, index, row) { return (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.UIViewBuilder)(function () {
    return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_2__.cLeading })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.UIViewBuilder)(function () {
        var _a, _b, _c, _d;
        var createDocument = (0,_realmocean_sdk__WEBPACK_IMPORTED_MODULE_0__.useCreateDocument)(workspaceId, databaseId, collectionId).createDocument;
        var updateDocument = (0,_realmocean_sdk__WEBPACK_IMPORTED_MODULE_0__.useUpdateDocument)(workspaceId).updateDocument;
        var _e = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.useState)(null), isEdit = _e[0], setIsEdit = _e[1];
        var _f = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.useState)(row[field.key]), value = _f[0], setValue = _f[1];
        if (_tuval_core__WEBPACK_IMPORTED_MODULE_1__.is.string(field.fieldInfo)) {
            field.fieldInfo = (_a = JSON.parse(field.fieldInfo)) !== null && _a !== void 0 ? _a : {};
            field.fieldInfo.options = (_b = field.fieldInfo.options) === null || _b === void 0 ? void 0 : _b.map(function (option) {
                return {
                    label: option.key,
                    value: option.value
                };
            });
        }
        //const [editingRow, setEditingRow] = useState(null);
        var turnOnEditMode = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(function (_a) {
            var editingCell = _a.editingCell, editingRow = _a.editingRow;
            // alert(field.name + '  --  ' + editInfo.lastEditCell + ' : ' + editInfo.lastEditRow)
            if (field.$id === editingCell && row.$id === editingRow) {
                //  alert(editInfo.lastEditCell + ' : ' + editInfo.lastEditRow)
                _tuval_core__WEBPACK_IMPORTED_MODULE_1__.EventBus.Default.fire('editCellOff', { editingCell: _Text__WEBPACK_IMPORTED_MODULE_4__.editInfo.lastEditCell, editingRow: _Text__WEBPACK_IMPORTED_MODULE_4__.editInfo.lastEditRow });
                _Text__WEBPACK_IMPORTED_MODULE_4__.editInfo.lastEditCell = editingCell;
                _Text__WEBPACK_IMPORTED_MODULE_4__.editInfo.lastEditRow = editingRow;
                setIsEdit(true);
            }
        }, []);
        var turnOffEditMode = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(function (_a) {
            var editingCell = _a.editingCell, editingRow = _a.editingRow;
            if (field.$id === editingCell && row.$id === editingRow) {
                setIsEdit(false);
            }
        }, []);
        (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
            _tuval_core__WEBPACK_IMPORTED_MODULE_1__.EventBus.Default.on('editCell', turnOnEditMode);
            _tuval_core__WEBPACK_IMPORTED_MODULE_1__.EventBus.Default.on('editCellOff', turnOffEditMode);
            return function () {
                _tuval_core__WEBPACK_IMPORTED_MODULE_1__.EventBus.Default.off('editCell', turnOnEditMode);
                _tuval_core__WEBPACK_IMPORTED_MODULE_1__.EventBus.Default.on('editCellOff', turnOffEditMode);
            };
        }, []);
        var _hideHandle = null;
        return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_2__.cLeading })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_2__.cLeading })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.PopupButton)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_2__.cLeading })(row[field.key] == null ?
            (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.Text)('Select ' + field.name) :
            (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.Text)(((_d = (_c = field.fieldInfo.options) === null || _c === void 0 ? void 0 : _c.find(function (option) { return option.value === row[field.key]; })) === null || _d === void 0 ? void 0 : _d.label) || ''))
            .width()
            .cornerRadius(6)
            .padding()
            .border('1px solid #e0e0e0')
            .height(30))((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.VStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_2__.cTopLeading, spacing: 5 }).apply(void 0, (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.ForEach)(field.fieldInfo.options)(function (item) {
            return (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_2__.cLeading })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.Text)(item.label))
                .width()
                .cornerRadius(6)
                .padding()
                .border('1px solid #e0e0e0')
                .height(30)
                .onClick(function () {
                var _a;
                if (item.value !== row[field.key]) {
                    updateDocument({
                        databaseId: databaseId,
                        collectionId: collectionId,
                        documentId: row.$id,
                        data: (_a = {},
                            _a[field.key] = item.value,
                            _a)
                    }, function () {
                        _hideHandle();
                        setIsEdit(false);
                    });
                }
                else {
                    _hideHandle();
                    setIsEdit(false);
                }
            });
        })).width(200)
            .height(_tuval_core__WEBPACK_IMPORTED_MODULE_1__.TMath.max(field.fieldInfo.options.length * 40, 100))
            .padding())
            .hideHandle(function (hideHandle) { return _hideHandle = hideHandle; })
            .dialogPosition(_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.DialogPosition.BOTTOM_START)))
            .cornerRadius(6)
            .border(isEdit ? '2px solid #e0e0e0' : '')
            .height(38)
            .onClick(function () {
            isEdit ? void 0 :
                _tuval_core__WEBPACK_IMPORTED_MODULE_1__.EventBus.Default.fire('editCell', { editingCell: field.$id, editingRow: row.$id });
        })
        /* :
        HStack({ alignment: cLeading })(
            Text(field.fieldInfo.options?.find((option) => option.value === row[field.key])?.label || '')

        )

            .onClick(() => {
             
                EventBus.Default.fire('editCell', { editingCell: field.$id, editingRow: row.$id });

            })
            .paddingLeft('8px')
            .height(38)) */
        );
    })));
}); };


/***/ }),

/***/ "./src/routes/collections/collection-[collectionId]/views/FieldViews/Text.ts":
/*!***********************************************************************************!*\
  !*** ./src/routes/collections/collection-[collectionId]/views/FieldViews/Text.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TextFieldView: () => (/* binding */ TextFieldView),
/* harmony export */   editInfo: () => (/* binding */ editInfo)
/* harmony export */ });
/* harmony import */ var _realmocean_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @realmocean/sdk */ "@realmocean/sdk");
/* harmony import */ var _realmocean_sdk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_realmocean_sdk__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _realmocean_atlaskit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @realmocean/atlaskit */ "@realmocean/atlaskit");
/* harmony import */ var _realmocean_atlaskit__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_realmocean_atlaskit__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _tuval_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @tuval/core */ "@tuval/core");
/* harmony import */ var _tuval_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_tuval_core__WEBPACK_IMPORTED_MODULE_4__);





var editInfo = {
    lastEditCell: null,
    lastEditRow: null
};
/* export let lastEditCell = null;
export let lastEditRow = null; */
var TextFieldView = function (workspaceId, databaseId, collectionId, fields, field, index, row) { return (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.UIViewBuilder)(function () {
    return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_1__.cLeading })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.UIViewBuilder)(function () {
        var createDocument = (0,_realmocean_sdk__WEBPACK_IMPORTED_MODULE_0__.useCreateDocument)(workspaceId, databaseId, collectionId).createDocument;
        var updateDocument = (0,_realmocean_sdk__WEBPACK_IMPORTED_MODULE_0__.useUpdateDocument)(workspaceId).updateDocument;
        var _a = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.useState)(null), isEdit = _a[0], setIsEdit = _a[1];
        var _b = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.useState)(row[field.key]), value = _b[0], setValue = _b[1];
        //const [editingRow, setEditingRow] = useState(null);
        var turnOnEditMode = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(function (_a) {
            var editingCell = _a.editingCell, editingRow = _a.editingRow;
            //alert( 'fieldId : ' + field.$id + '----- rowId : ' + JSON.stringify(row)  + '-----' +   editingCell + ' : ' + editingRow)
            if (field.$id === editingCell && row.$id === editingRow) {
                //alert(editingCell + ' : ' + editingRow +  '------' + 'girdi')
                _tuval_core__WEBPACK_IMPORTED_MODULE_4__.EventBus.Default.fire('editCellOff', { editingCell: editInfo.lastEditCell, editingRow: editInfo.lastEditRow });
                editInfo.lastEditCell = editingCell;
                editInfo.lastEditRow = editingRow;
                setIsEdit(true);
            }
        }, []);
        var turnOffEditMode = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(function (_a) {
            var editingCell = _a.editingCell, editingRow = _a.editingRow;
            // alert(editingCell + ' : ' + editingRow)
            if (field.$id === editingCell && row.$id === editingRow) {
                setIsEdit(false);
            }
        }, []);
        (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
            _tuval_core__WEBPACK_IMPORTED_MODULE_4__.EventBus.Default.on('editCell', turnOnEditMode);
            _tuval_core__WEBPACK_IMPORTED_MODULE_4__.EventBus.Default.on('editCellOff', turnOffEditMode);
            return function () {
                _tuval_core__WEBPACK_IMPORTED_MODULE_4__.EventBus.Default.off('editCell', turnOnEditMode);
                _tuval_core__WEBPACK_IMPORTED_MODULE_4__.EventBus.Default.on('editCellOff', turnOffEditMode);
            };
        }, []);
        if (row.type === 'addRow' && field.key === 'name') {
            return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_1__.cLeading })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.Text)('To add a new row, press Shift+Enter')).onClick(function () {
                createDocument({
                    documentId: (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.nanoid)(),
                    data: {
                        name: ''
                    }
                }, function (document) {
                    _tuval_core__WEBPACK_IMPORTED_MODULE_4__.EventBus.Default.fire('editCell', { editingCell: field.$id, editingRow: document.$id });
                });
            }));
        }
        else {
            return (isEdit ?
                (0,_realmocean_atlaskit__WEBPACK_IMPORTED_MODULE_2__.TextField)()
                    // .placeHolder(field.name)
                    .autoFocus(true)
                    .value(row[field.key])
                    .onKeyDown(function (e) {
                    var _a, _b;
                    var _c, _d, _e, _f;
                    if (e.code === 'Enter' && row.nextRowId == null) {
                        //setEditingCell(null);
                        updateDocument({
                            databaseId: databaseId,
                            collectionId: collectionId,
                            documentId: row.$id,
                            data: (_a = {},
                                _a[field.key] = e.target.value,
                                _a)
                        }, function () {
                        });
                        var id_1 = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.nanoid)();
                        createDocument({
                            documentId: id_1,
                            data: {
                                name: ''
                            }
                        }, function (document) {
                            _tuval_core__WEBPACK_IMPORTED_MODULE_4__.EventBus.Default.fire('editCell', { editingCell: field.$id, editingRow: id_1 });
                        });
                        // setValue(e.target.value);
                        e.preventDefault();
                        e.stopPropagation();
                    }
                    else if ((e.code === 'Enter' || e.code === 'ArrowDown') && row.nextRowId != null) {
                        //setEditingCell(null);
                        console.log(row[field.key], e.target.value);
                        if (row[field.key] !== e.target.value) {
                            updateDocument({
                                databaseId: databaseId,
                                collectionId: collectionId,
                                documentId: row.$id,
                                data: (_b = {},
                                    _b[field.key] = e.target.value,
                                    _b)
                            });
                        }
                        _tuval_core__WEBPACK_IMPORTED_MODULE_4__.EventBus.Default.fire('editCell', { editingCell: field.$id, editingRow: row.nextRowId });
                        setValue(e.target.value);
                        e.preventDefault();
                        e.stopPropagation();
                    }
                    else if (e.code === 'ArrowUp' && row.prevRowId != null) {
                        _tuval_core__WEBPACK_IMPORTED_MODULE_4__.EventBus.Default.fire('editCell', { editingCell: field.$id, editingRow: row.prevRowId });
                        setValue(e.target.value);
                        e.preventDefault();
                        e.stopPropagation();
                    }
                    else if (e.code === 'ArrowLeft' && ((_c = fields[index - 1]) === null || _c === void 0 ? void 0 : _c.$id) != null) {
                        _tuval_core__WEBPACK_IMPORTED_MODULE_4__.EventBus.Default.fire('editCell', { editingCell: (_d = fields[index - 1]) === null || _d === void 0 ? void 0 : _d.$id, editingRow: row.$id });
                        e.preventDefault();
                        e.stopPropagation();
                    }
                    else if (e.code === 'ArrowRight' && ((_e = fields[index + 1]) === null || _e === void 0 ? void 0 : _e.$id) != null) {
                        _tuval_core__WEBPACK_IMPORTED_MODULE_4__.EventBus.Default.fire('editCell', { editingCell: (_f = fields[index + 1]) === null || _f === void 0 ? void 0 : _f.$id, editingRow: row.$id });
                        e.preventDefault();
                        e.stopPropagation();
                    }
                })
                    .onBlur(function (e) {
                    var _a;
                    if (e.target.value !== row[field.key]) {
                        updateDocument({
                            databaseId: databaseId,
                            collectionId: collectionId,
                            documentId: row.$id,
                            data: (_a = {},
                                _a[field.key] = e.target.value,
                                _a)
                        }, function () {
                            //setEditingCell(null);
                            //setEditingRow(null);
                        });
                    }
                    else {
                        //setEditingCell(null);
                        //setEditingRow(null);
                    }
                }) :
                (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_1__.cLeading })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.Text)(row[field.key]))
                    .onClick(function () {
                    //  alert(JSON.stringify(row))
                    // alert('click' + '----' + field.$id + '----' + row.$id)
                    _tuval_core__WEBPACK_IMPORTED_MODULE_4__.EventBus.Default.fire('editCell', { editingCell: field.$id, editingRow: row.$id });
                })
                    .paddingLeft('8px')
                    .height(38));
        }
    })));
}); };


/***/ }),

/***/ "./src/routes/settings/+controller.ts":
/*!********************************************!*\
  !*** ./src/routes/settings/+controller.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SettingsController: () => (/* binding */ SettingsController),
/* harmony export */   getSettingsName: () => (/* binding */ getSettingsName)
/* harmony export */ });
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};

function getSettingsName() {
    var url = window.location.href;
    // Regex deseni
    var regexPattern = /\/settings\/([^\/]+)/;
    // Regex eşleşmesi
    var matches = url.match(regexPattern);
    // Eğer eşleşme varsa, list parametresini al
    if (matches && matches.length > 1) {
        return matches[1];
    }
    else {
        return;
    }
}
var SettingsController = /** @class */ (function (_super) {
    __extends(SettingsController, _super);
    function SettingsController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SettingsController.prototype.LoadView = function () {
        var _a = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.useParams)(), workspaceId = _a.workspaceId, appletId = _a.appletId;
        var menu = [
            {
                id: 'general',
                title: 'General',
                url: "/@/workspace/".concat(workspaceId, "/applet/").concat(appletId, "/settings/general"),
                icon: (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.SvgIcon)('cu3-icon-settings')
            },
            {
                id: 'import',
                title: 'Document Types',
                url: "/@/workspace/".concat(workspaceId, "/applet/").concat(appletId, "/settings/import"),
                icon: (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.SvgIcon)('cu3-icon-importIcon')
            },
            {
                id: 'features',
                title: 'Features',
                url: "/@/workspace/".concat(workspaceId, "/applet/").concat(appletId, "/settings/features"),
                icon: (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.SvgIcon)('cu3-icon-settings')
            },
            {
                id: 'collections',
                title: 'Collections',
                url: "/@/workspace/".concat(workspaceId, "/applet/").concat(appletId, "/settings/collections"),
                icon: (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.SvgIcon)('cu3-icon-settings')
            },
            {
                id: 'import',
                title: 'Integrations',
                url: "/@/workspace/".concat(workspaceId, "/applet/").concat(appletId, "/settings/import"),
                icon: (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.SvgIcon)('cu3-icon-importIcon')
            },
            {
                id: 'security',
                title: 'Security & Permissions ',
                url: "/@/workspace/".concat(workspaceId, "/applet/").concat(appletId, "/settings/security"),
                icon: (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.SvgIcon)('cu3-icon-protectedAlt')
            },
            {
                id: 'import',
                title: 'Imports / Exports',
                url: "/@/workspace/".concat(workspaceId, "/applet/").concat(appletId, "/settings/import"),
                icon: (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.SvgIcon)('cu3-icon-importIcon')
            },
        ];
        var navigate = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.useNavigate)();
        // 
        return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.VStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cTopLeading }).apply(void 0, __spreadArray([(0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cLeading })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Heading)('DOCUMENT APPLET').h3().foregroundColor('rgb(101, 111, 125)')
                .fontSize(11).fontWeight('600')).padding('16px 8px 8px').height()], (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.ForEach)(menu)(function (item) {
            return (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cLeading, spacing: 8 })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Icon)(item.icon).foregroundColor(item.id === getSettingsName() ? 'rgb(84, 77, 201)' : 'rgb(42, 46, 52)'), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)(item.title).fontSize(14).foregroundColor(item.id === getSettingsName() ? 'rgb(84, 77, 201)' : 'rgb(42, 46, 52)')
                .fontFamily('-apple-system, "system-ui", "Segoe UI", roboto, "Helvetica Neue", helvetica, arial, sans-serif')
                .lineHeight(16)).height(32)
                .cornerRadius(6)
                .background({ default: item.id === getSettingsName() ? '#E5E4FC' : '', hover: '#E8EAED' })
                .padding(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cHorizontal, 8)
                .cursor('pointer')
                .onClick(function () {
                navigate(item.url);
            });
        }), false)).padding()
            .background('#F7F8F9')
            .allWidth(240)
            .margin('0 8px'), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIRouteOutlet)().width('100%').height('100%')));
    };
    return SettingsController;
}(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIFormController));



/***/ }),

/***/ "./src/routes/settings/general/+controller.tsx":
/*!*****************************************************!*\
  !*** ./src/routes/settings/general/+controller.tsx ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GeneralSettingsController: () => (/* binding */ GeneralSettingsController)
/* harmony export */ });
/* harmony import */ var _celmino_platform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @celmino/platform */ "@celmino/platform");
/* harmony import */ var _celmino_platform__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_celmino_platform__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _realmocean_sdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @realmocean/sdk */ "@realmocean/sdk");
/* harmony import */ var _realmocean_sdk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_realmocean_sdk__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tuval_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tuval/core */ "@tuval/core");
/* harmony import */ var _tuval_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_tuval_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _uiw_react_color_circle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @uiw/react-color-circle */ "./node_modules/@uiw/react-color-circle/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();






var GeneralSettingsController = /** @class */ (function (_super) {
    __extends(GeneralSettingsController, _super);
    function GeneralSettingsController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GeneralSettingsController.prototype.LoadView = function () {
        var realm = (0,_celmino_platform__WEBPACK_IMPORTED_MODULE_0__.useRealm)().realm;
        var applet = (0,_celmino_platform__WEBPACK_IMPORTED_MODULE_0__.useApplet)().applet;
        //  const { workspaceId, appletId } = useParams();
        //  const { document: applet } = useGetDocument({ projectId: workspaceId, databaseId: 'workspace', collectionId: 'applets', documentId: appletId });
        var updateDocument = (0,_realmocean_sdk__WEBPACK_IMPORTED_MODULE_1__.useUpdateDocument)(realm.$id).updateDocument;
        return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_3__.VStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_3__.cTopLeading })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_3__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_3__.cLeading })(Text('General').fontSize(24).fontWeight('600')
            .foregroundColor('rgb(42, 46, 52)')
            .lineHeight(32))
            .height()
            .margin('0 0 30px'), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_3__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_3__.cLeading })(Text('Applet').fontSize(20).fontWeight('600')
            .foregroundColor('rgb(42, 46, 52)')
            .lineHeight(32))
            .height()
            .margin('0 0 30px'), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_3__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_3__.cLeading, spacing: 10 })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_3__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_3__.cLeading })(Text('Name').fontSize(16).fontWeight('600')
            .foregroundColor('rgb(42, 46, 52)')
            .lineHeight(32)).height().width(300), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_3__.HStack)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_3__.TextField)()
            .value(applet === null || applet === void 0 ? void 0 : applet.name)
            .border('0')
            .outline({ focus: 'none' })
            .shadow('rgba(224, 227, 230, 0.7) 0px 0px 0px 1px')
            .padding(12)
            .cornerRadius(6)).height().width(400))
            .height()
            .margin('0 0 30px'), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_3__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_3__.cLeading, spacing: 10 })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_3__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_3__.cLeading })(Text('Icon').fontSize(16).fontWeight('600')
            .foregroundColor('rgb(42, 46, 52)')
            .lineHeight(32)).height().width(300), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_3__.HStack)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_3__.UIWidget)("com.tuvalsoft.widget.icons")
            .config({
            onChange: function (value) {
                updateDocument({
                    databaseId: 'workspace',
                    collectionId: 'applets',
                    documentId: applet.$id,
                    data: {
                        iconName: value.iconName,
                        iconCategory: value.iconCategory
                    }
                }, function () {
                    updateDocument({
                        databaseId: 'workspace',
                        collectionId: 'ws_tree',
                        documentId: applet.$id,
                        data: {
                            iconName: value.iconName,
                            iconCategory: value.iconCategory
                        }
                    }, function () {
                        _tuval_core__WEBPACK_IMPORTED_MODULE_2__.EventBus.Default.fire('applet.added', { treeItem: value });
                    });
                });
            },
            selectedIcon: applet === null || applet === void 0 ? void 0 : applet.iconName,
            color: applet === null || applet === void 0 ? void 0 : applet.themeColor,
            selectedCategory: applet === null || applet === void 0 ? void 0 : applet.iconCategory,
            width: 32,
            height: 32
        }))
            .border('1px dashed rgba(69,104,251,.3)')
            .transition('border-color .12s ease-in-out')
            .cornerRadius(6)
            .padding(4)
            //.background('#FCE8E8')
            .width(44).height(44).cornerRadius(5))
            .height()
            .margin('0 0 30px'), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_3__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_3__.cTopLeading, spacing: 10 })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_3__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_3__.cLeading })(Text('Theme Color')
            .fontSize(16).fontWeight('600')
            .foregroundColor('rgb(42, 46, 52)')
            .lineHeight(32)).height().width(300), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_3__.HStack)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_3__.ReactView)(react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_uiw_react_color_circle__WEBPACK_IMPORTED_MODULE_5__["default"], { colors: ['#4A4A4A',
                '#6A849B',
                '#BEC5CC',
                '#D40915',
                '#E72065',
                '#9C2BAF',
                '#673DB6',
                '#3E53B4',
                '#2978FB',
                '#199EE3',
                '#1FBED3',
                '#159789',
                '#4FAF54',
                '#8EC351',
                '#FBA32F',
                '#FC551F',
                '#B04E31',
                '#8077F1',
                '#6A85FF',
                '#40A6E5',
                '#3FB1B2',
                '#64C6A2',
                '#F9BE34',
                '#E78845',
                '#DC646A',
                '#F17EAD',
                '#C580E6',
                '#BBA399',
                '#595D66'], color: applet.themeColor, onChange: function (color) {
                updateDocument({
                    databaseId: 'workspace',
                    collectionId: 'applets',
                    documentId: applet.$id,
                    data: {
                        themeColor: color.hex
                    }
                }, function () {
                    updateDocument({
                        databaseId: 'workspace',
                        collectionId: 'ws_tree',
                        documentId: applet.$id,
                        data: {
                            iconColor: color.hex
                        }
                    }, function (item) {
                        _tuval_core__WEBPACK_IMPORTED_MODULE_2__.EventBus.Default.fire('applet.added', { treeItem: item });
                    });
                });
            } }))).maxWidth(500))
            .height()
            .margin('0 0 30px'))
            .padding('24px 48px'));
    };
    return GeneralSettingsController;
}(_tuval_forms__WEBPACK_IMPORTED_MODULE_3__.UIFormController));



/***/ }),

/***/ "./src/views/ActionPanel.tsx":
/*!***********************************!*\
  !*** ./src/views/ActionPanel.tsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ActionPanel: () => (/* binding */ ActionPanel),
/* harmony export */   ActionsPanelButton: () => (/* binding */ ActionsPanelButton)
/* harmony export */ });
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var fullSize = function () { return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement("svg", { viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg", width: "18", height: "18", fill: "currentColor", "aria-hidden": "true" },
    react__WEBPACK_IMPORTED_MODULE_1___default().createElement("path", { d: "M16.25 3H12a.75.75 0 0 0 0 1.5h2.44l-3.47 3.47a.75.75 0 0 0 1.06 1.06l3.47-3.47V8A.75.75 0 0 0 17 8V3.75a.75.75 0 0 0-.75-.75ZM3.75 17H8a.75.75 0 0 0 0-1.5H5.56l3.47-3.47a.75.75 0 1 0-1.06-1.06L4.5 14.44V12A.75.75 0 0 0 3 12v4.25a.75.75 0 0 0 .75.75Z" }))); };
var activity = function () { return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement("svg", { viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg", width: "18", height: "18", fill: "currentColor", "aria-hidden": "true" },
    react__WEBPACK_IMPORTED_MODULE_1___default().createElement("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M5.545 4.07A7.417 7.417 0 1 1 2.583 10a.75.75 0 0 1 1.5 0 5.917 5.917 0 1 0 2.62-4.913h.592a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1-.75-.75v-2.5a.75.75 0 0 1 1.5 0v.733ZM10 5.917a.75.75 0 0 1 .75.75v3.022l1.864 1.864a.75.75 0 0 1-1.061 1.06L9.47 10.53a.75.75 0 0 1-.22-.53V6.667a.75.75 0 0 1 .75-.75Z" }))); };
var share = function () { return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement("svg", { viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg", width: "18", height: "18", fill: "currentColor", "aria-hidden": "true" },
    react__WEBPACK_IMPORTED_MODULE_1___default().createElement("path", { d: "M10.53 2.22a.75.75 0 0 0-1.06 0L6.97 4.72a.75.75 0 0 0 1.06 1.06l1.22-1.22v6.69a.75.75 0 1 0 1.499 0V4.56l1.219 1.22a.75.75 0 1 0 1.06-1.06l-2.499-2.5Z" }),
    react__WEBPACK_IMPORTED_MODULE_1___default().createElement("path", { d: "M5.416 7A2.415 2.415 0 0 0 3 9.417v5.166c0 .225.078.538.17.797.096.267.264.638.537.912.046.046.063.065.085.09.02.022.044.05.099.106.08.085.197.196.363.29.326.182.709.222 1.162.222h9.169c.64 0 1.254-.255 1.707-.708.274-.274.442-.645.537-.912.093-.26.171-.572.171-.797V9.417A2.417 2.417 0 0 0 14.585 7h-.837a.75.75 0 0 0 0 1.5h.837a.916.916 0 0 1 .916.917v5.149c-.001.006-.004.03-.014.074a2.011 2.011 0 0 1-.174.472.57.57 0 0 1-.08.12.916.916 0 0 1-.649.268H5.417c-.282 0-.393-.023-.425-.031a.616.616 0 0 1-.017-.017l-.051-.056-.027-.03a3.96 3.96 0 0 0-.128-.134.569.569 0 0 1-.081-.12 2.039 2.039 0 0 1-.173-.472c-.01-.04-.013-.064-.014-.072V9.416a.917.917 0 0 1 .916-.916h.836a.75.75 0 0 0 0-1.5h-.836Z" }))); };
var showAttributesPanelIcon = function () { return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement("svg", { width: "18", height: "18", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", "aria-hidden": "true" },
    react__WEBPACK_IMPORTED_MODULE_1___default().createElement("path", { d: "M15 12.25a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1 0-1.5h1ZM15.75 10a.75.75 0 0 0-.75-.75h-1a.75.75 0 0 0 0 1.5h1a.75.75 0 0 0 .75-.75ZM15 6.25a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1 0-1.5h1Z" }),
    react__WEBPACK_IMPORTED_MODULE_1___default().createElement("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M4.25 3A2.25 2.25 0 0 0 2 5.25v9.5A2.25 2.25 0 0 0 4.25 17h11.5A2.25 2.25 0 0 0 18 14.75v-9.5A2.25 2.25 0 0 0 15.75 3H4.25ZM3.5 5.25a.75.75 0 0 1 .75-.75H11v11H4.25a.75.75 0 0 1-.75-.75v-9.5Zm9 10.25v-11h3.25a.75.75 0 0 1 .75.75v9.5a.75.75 0 0 1-.75.75H12.5Z" }))); };
var selectAttributesIcon = function () { return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement("svg", { viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg", width: "18", height: "18", fill: "currentColor", "aria-hidden": "true" },
    react__WEBPACK_IMPORTED_MODULE_1___default().createElement("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M1 10a6 6 0 0 1 6-6h6a6 6 0 0 1 0 12H7a6 6 0 0 1-6-6Zm1.5 0A4.5 4.5 0 0 1 7 5.5h6a4.5 4.5 0 1 1 0 9H7A4.5 4.5 0 0 1 2.5 10Z" }),
    react__WEBPACK_IMPORTED_MODULE_1___default().createElement("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M13 12.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z" }))); };
var menuIcon = function () { return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement("svg", { viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg", width: "18", height: "18", fill: "currentColor", "aria-hidden": "true" },
    react__WEBPACK_IMPORTED_MODULE_1___default().createElement("path", { d: "M6.5 10a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm5 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm3.5 1.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z" }))); };
var closeIcon = function () { return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement("svg", { viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg", width: "18", height: "18", fill: "currentColor", "aria-hidden": "true" },
    react__WEBPACK_IMPORTED_MODULE_1___default().createElement("path", { d: "M3.728 15.172a.778.778 0 1 0 1.1 1.1L10 11.1l5.172 5.172a.778.778 0 0 0 1.1-1.1L11.1 10l5.172-5.172a.778.778 0 0 0-1.1-1.1L10 8.9 4.828 3.728a.778.778 0 1 0-1.1 1.1L8.9 10l-5.172 5.172Z" }))); };
var favoriteIcon = function () { return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement("svg", { viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg", width: "18", height: "18", fill: "currentColor", "aria-hidden": "true" },
    react__WEBPACK_IMPORTED_MODULE_1___default().createElement("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M9.469 1.532a1.195 1.195 0 0 1 1.062 0c.289.143.444.397.524.542.086.154.175.354.268.562l1.643 3.685 4.013.424c.226.024.444.047.617.08.162.033.452.101.677.332.262.267.383.64.329 1.01-.047.32-.242.545-.354.666-.12.13-.283.276-.452.429l-2.997 2.7.837 3.948c.047.223.093.437.114.613.02.163.044.46-.106.746-.173.33-.49.562-.859.624-.318.054-.593-.06-.743-.13-.16-.074-.35-.184-.547-.297L10 15.45l-3.496 2.016c-.197.113-.386.223-.547.297-.15.07-.424.184-.742.13a1.195 1.195 0 0 1-.86-.624c-.15-.286-.125-.582-.105-.746.02-.176.066-.39.114-.613l.837-3.947-2.998-2.701c-.169-.153-.331-.3-.452-.429-.112-.121-.306-.347-.353-.666-.054-.37.067-.743.328-1.01.226-.23.516-.3.678-.331.173-.034.39-.057.617-.081l.029-.003 3.984-.42 1.63-3.66.013-.026c.092-.208.181-.408.268-.562.08-.145.235-.399.524-.542Zm.53 1.82-1.604 3.6-.012.029c-.044.1-.122.279-.254.425a1.195 1.195 0 0 1-.402.292c-.18.08-.375.1-.483.11-.011 0-.021.002-.03.003l-3.92.414 2.928 2.639.023.02c.08.072.227.202.326.373.083.145.136.306.153.472a1.56 1.56 0 0 1-.045.493l-.006.03-.818 3.857 3.415-1.97.026-.015c.094-.055.263-.155.456-.196.163-.034.332-.034.496 0 .193.041.362.14.455.196l.027.015 3.415 1.97-.818-3.857a1.56 1.56 0 0 1-.051-.524c.017-.165.07-.326.153-.471.098-.17.245-.3.326-.373a1.87 1.87 0 0 0 .023-.02l2.928-2.64-3.92-.413-.03-.003a1.56 1.56 0 0 1-.483-.11 1.195 1.195 0 0 1-.402-.292 1.558 1.558 0 0 1-.266-.454L10 3.352Z" }))); };
var findIcon = function () { return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement("svg", { viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg", width: "18", height: "18", fill: "currentColor", "aria-hidden": "true" },
    react__WEBPACK_IMPORTED_MODULE_1___default().createElement("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M8.75 15.835a7.055 7.055 0 0 0 4.378-1.515l3.782 3.771a.835.835 0 0 0 1.18-1.182l-3.78-3.768a7.085 7.085 0 1 0-5.56 2.694ZM3.335 8.75a5.415 5.415 0 1 1 10.83 0 5.415 5.415 0 0 1-10.83 0Z" }))); };
var copyLinkIcon = function () { return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement("svg", { viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg", width: "18", height: "18", fill: "currentColor", "aria-hidden": "true" },
    react__WEBPACK_IMPORTED_MODULE_1___default().createElement("path", { d: "m10.063 10.808 2.06-.03c.55-.001 1.075-.218 1.463-.604a2.054 2.054 0 0 0 .001-2.909 2.07 2.07 0 0 0-1.461-.602L6.757 6.66c-.527 0-1.034.2-1.417.562A2.043 2.043 0 0 0 4.7 8.6l-.011.129a.839.839 0 0 1-1.433.574.829.829 0 0 1-.238-.591A2.276 2.276 0 0 1 3 8.483a3.704 3.704 0 0 1 1.18-2.457 3.739 3.739 0 0 1 2.549-.994L12.133 5c.964.04 1.875.45 2.542 1.142a3.71 3.71 0 0 1-.003 5.154 3.754 3.754 0 0 1-2.543 1.145l-2.02.024a.836.836 0 0 1-.798-.806.83.83 0 0 1 .752-.851Zm-5.024.932a3.726 3.726 0 0 1 1.1-2.628c.7-.697 1.65-1.09 2.64-1.094l2.02-.025a.836.836 0 0 1 .799.807.83.83 0 0 1-.752.85l-2.038.007c-.548 0-1.074.218-1.462.604a2.054 2.054 0 0 0-.001 2.909 2.07 2.07 0 0 0 1.461.601l5.369.004c.527 0 1.035-.201 1.417-.562.383-.361.612-.855.64-1.379l.011-.13a.83.83 0 0 1 .845-.822.837.837 0 0 1 .826.84 3.712 3.712 0 0 1-1.194 2.714 3.747 3.747 0 0 1-2.546.996l-5.375.003a3.756 3.756 0 0 1-2.646-1.075 3.72 3.72 0 0 1-1.114-2.62Z" }))); };
var smileIcon = function () { return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement("svg", { viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg", width: "18", height: "18", fill: "currentColor", "aria-hidden": "true" },
    react__WEBPACK_IMPORTED_MODULE_1___default().createElement("path", { d: "M12.25 6.625a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25ZM7.75 6.625a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25Z" }),
    react__WEBPACK_IMPORTED_MODULE_1___default().createElement("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M10 1.75a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5Zm0 1.5a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5Z" }),
    react__WEBPACK_IMPORTED_MODULE_1___default().createElement("path", { d: "M8.238 11.643a3.707 3.707 0 0 1-.491-.428l-.149-.168a.75.75 0 0 0-1.198.903l.078.097a5.21 5.21 0 0 0 .878.81c.598.435 1.5.893 2.644.893 1.144 0 2.046-.458 2.644-.893a5.21 5.21 0 0 0 .879-.81l.077-.097a.75.75 0 0 0-1.198-.903l-.149.168c-.11.116-.276.272-.491.428-.433.315-1.031.607-1.762.607-.73 0-1.33-.292-1.762-.607Z" }))); };
var filterIcon = function () { return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement("svg", { viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg", width: "18", height: "18", fill: "currentColor", "aria-hidden": "true" },
    react__WEBPACK_IMPORTED_MODULE_1___default().createElement("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M15.676 2c.258 0 .494 0 .692.016.213.018.446.057.677.175.329.168.596.435.764.765.118.23.157.463.175.676.016.198.016.434.016.692V5.287c0 .225.001.465-.063.697a1.749 1.749 0 0 1-.27.562c-.141.195-.33.345-.505.485l-.044.035-3.799 3.04a6.505 6.505 0 0 0-.228.187.477.477 0 0 0-.043.041.25.25 0 0 0-.039.08.44.44 0 0 0-.005.06 6.424 6.424 0 0 0-.004.295v3.586c0 .286.002.591-.097.874-.085.247-.224.47-.407.656-.21.213-.484.348-.74.474l-.066.031-2.478 1.224c-.17.084-.34.169-.488.226-.154.059-.389.133-.661.091a1.25 1.25 0 0 1-.838-.52 1.288 1.288 0 0 1-.21-.634A6.281 6.281 0 0 1 7 16.239V10.5l-.025-.11a.233.233 0 0 0-.066-.098 6.422 6.422 0 0 0-.228-.187L2.882 7.066l-.044-.035c-.176-.14-.364-.29-.505-.485a1.75 1.75 0 0 1-.27-.562c-.064-.232-.064-.472-.063-.697V4.324c0-.258 0-.494.016-.692.018-.213.057-.446.175-.676a1.75 1.75 0 0 1 .765-.765c.23-.118.463-.157.676-.175C3.83 2 4.092 2 4.35 2h11.326ZM3.633 3.529a.627.627 0 0 1 .121-.018c.13-.01.304-.011.596-.011h11.3c.292 0 .467 0 .596.011a.625.625 0 0 1 .12.018.25.25 0 0 1 .105.104.638.638 0 0 1 .018.121c.01.13.011.304.011.596v.881c0 .149 0 .232-.003.295a.456.456 0 0 1-.006.06.252.252 0 0 1-.03.066c.004-.004-.002.005 0 0-.002.004-.022.03-.052.056a6.58 6.58 0 0 1-.228.187l-3.799 3.039-.044.035c-.176.14-.364.29-.505.485-.123.17-.215.36-.27.562-.064.232-.064.472-.063.697v3.57c0 .19 0 .298-.005.38a.516.516 0 0 1-.009.076.249.249 0 0 1-.058.092.51.51 0 0 1-.064.042c-.07.04-.168.089-.338.173l-2.454 1.212-.072.035v-5.58c0-.225.001-.465-.063-.697a1.75 1.75 0 0 0-.27-.562c-.141-.195-.33-.345-.505-.485l-.044-.035-3.799-3.04a6.484 6.484 0 0 1-.228-.186l-.02-.017a.127.127 0 0 1-.024-.025c-.035-.045-.04-.077-.044-.14a6.488 6.488 0 0 1-.003-.295V4.35c0-.292 0-.467.011-.596a.628.628 0 0 1 .018-.12.25.25 0 0 1 .104-.105Z" }))); };
var colorIcon = function () { return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement("svg", { viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg", width: "18", height: "18", fill: "currentColor", "aria-hidden": "true" },
    react__WEBPACK_IMPORTED_MODULE_1___default().createElement("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M10 3.55a6.45 6.45 0 1 0 0 12.9 1.65 1.65 0 0 0 1.65-1.65v-.532c0-.246 0-.451.029-.636a2.35 2.35 0 0 1 1.953-1.953c.185-.03.39-.03.636-.029h.532A1.65 1.65 0 0 0 16.45 10 6.45 6.45 0 0 0 10 3.55ZM2.05 10a7.95 7.95 0 1 1 15.9 0 3.15 3.15 0 0 1-3.15 3.15h-.48c-.326 0-.402.002-.453.01a.85.85 0 0 0-.707.707c-.008.051-.01.127-.01.453v.48A3.15 3.15 0 0 1 10 17.95 7.95 7.95 0 0 1 2.05 10Zm5.6-3.6a1.15 1.15 0 1 1 2.3 0 1.15 1.15 0 0 1-2.3 0Zm4 .8a1.15 1.15 0 1 1 2.3 0 1.15 1.15 0 0 1-2.3 0Zm-6.4 2.4a1.15 1.15 0 1 1 2.3 0 1.15 1.15 0 0 1-2.3 0Z" }))); };
var sortIcon = function () { return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement("svg", { viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg", width: "18", height: "18", fill: "currentColor", "aria-hidden": "true" },
    react__WEBPACK_IMPORTED_MODULE_1___default().createElement("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M13.386 16.777a.75.75 0 0 0 1.061 0l3.333-3.333a.75.75 0 0 0-1.06-1.061l-2.053 2.053V3.75a.75.75 0 0 0-1.5 0v10.686l-2.053-2.053a.75.75 0 0 0-1.061 1.06l3.333 3.334ZM6.083 17a.75.75 0 0 0 .75-.75V5.564l2.053 2.053a.75.75 0 0 0 1.061-1.06L6.614 3.222a.75.75 0 0 0-1.061 0L2.22 6.556a.75.75 0 0 0 1.06 1.061l2.053-2.053V16.25c0 .414.336.75.75.75Z" }))); };
var ActionsPanelButton = function (icon, action, label) {
    if (action === void 0) { action = void 0; }
    if (label === void 0) { label = null; }
    return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)({ spacing: 5 })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Icon)(icon), label ?
        (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)(label)
            .fontSize(14)
            .fontFamily('ui-sans-serif,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"!important')
            .fontSmoothing('auto')
            .foregroundColor('#212526') : (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Fragment)())
        .foregroundColor('rgb(109, 122, 131)')
        .cursor('pointer')
        .cornerRadius(6)
        .padding(10)
        .background({ hover: 'rgba(109, 122, 131, 0.15)' })
        .transition('all .15s ease-out')
        .width(label ? '' : '28px')
        .height('28px')
        .onClick(function () {
        action();
    }));
};
var ActionPanel = function () { return (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIViewBuilder)(function () {
    var closeDialog = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.useDialogStack)().closeDialog;
    return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)({ spacing: 5 })(
    /*   _StatusMarker(task?.stage_id),
         EditableHeader(task?.title).size(EditableHeadingSizes.MEDIUM), */
    ActionsPanelButton(findIcon), ActionsPanelButton(smileIcon), ActionsPanelButton(favoriteIcon), ActionsPanelButton(copyLinkIcon), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Spacer)(), ActionsPanelButton(fullSize), ActionsPanelButton(filterIcon, void 0, 'Filter'), ActionsPanelButton(sortIcon, void 0, 'Sort'), ActionsPanelButton(colorIcon, void 0, 'Color'), 
    /*   ActionsPanelButton(activity),
      ActionsPanelButton(share),
      ActionsPanelButton(showAttributesPanelIcon),
      ActionsPanelButton(selectAttributesIcon), */
    ActionsPanelButton(menuIcon), ActionsPanelButton(closeIcon, function () {
        closeDialog();
    }))
        .background('white')
        .height().padding(8));
}); };


/***/ }),

/***/ "./src/views/ViewHeader.ts":
/*!*********************************!*\
  !*** ./src/views/ViewHeader.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DocumentHeader: () => (/* binding */ DocumentHeader)
/* harmony export */ });
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tuval_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tuval/core */ "@tuval/core");
/* harmony import */ var _tuval_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tuval_core__WEBPACK_IMPORTED_MODULE_1__);


var fontFamily = '-apple-system, BlinkMacSystemFont, "Segoe UI", roboto, "Helvetica Neue", helvetica, arial, sans-serif';
var DocumentHeader = function (header, onHeaderChange) {
    if (onHeaderChange === void 0) { onHeaderChange = void 0; }
    return (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIViewBuilder)(function () {
        var openDialog = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.useDialogStack)().openDialog;
        /*  const { access_type, team_id, applet_id, view_id } = useParams();
     
         const navigate = useNavigate(); */
        return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.VStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cTopLeading })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.VStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cTopLeading })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cLeading, spacing: 5 })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Icon)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.SvgIcon)('svg-sprite-global__comment', '#87909e')), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)('Add comment').fontFamily('-apple-system, "system-ui", "Segoe UI", roboto, "Helvetica Neue", helvetica, arial, sans-serif')).foregroundColor('#87909e')
            .height(28).width().padding('0 15px').cornerRadius(4).background({ hover: 'rgb(240, 241, 243)' })
            .onClick(function () {
            openDialog({
                title: 'Open',
                view: (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)('Hans')
            });
        }), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cLeading, spacing: 5 })(
        //  _StatusMarker(task?.stage_id),
        _tuval_core__WEBPACK_IMPORTED_MODULE_1__.is.string(header) ?
            (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.EditableHeader)(header).size(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.EditableHeadingSizes.SMALL)
                .onChange(function (e) { return onHeaderChange(e); })
                .fontSmoothing('auto')
                .foregroundColor('#212526')
                .fontSize(32)
                //.fontFamily(fontFamily)
                .fontWeight('500')
                .lineHeight('1.25')
                .kerning('-0.003em')
            :
                _tuval_core__WEBPACK_IMPORTED_MODULE_1__.is.function(header) ? header() : (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Fragment)())
            .background('white')
            .height().paddingBottom('20px')).height()
            .paddingBottom('10px')
        // .borderBottom('1px solid #F2F2F2')
        )
            .paddingBottom('0px')
            .height());
    });
};


/***/ }),

/***/ "./src/manifest.js":
/*!*************************!*\
  !*** ./src/manifest.js ***!
  \*************************/
/***/ ((module) => {

module.exports = {
    application: {
        name: 'com.celmino.applet.workspace',
        path: './src/Application.ts',
        displayName: "Procetra",
        icon: "data:image/svg+xml;base64,PHN2ZyBpZD0iZjc4ZjUxMTUtYmU4OC00ZDQ0LWIzNGUtM2Y2ZWE3NDMxMjVjIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDE4IDE4Ij48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImI2YzQzYmQ5LWUzN2YtNDE5MS05M2MyLWQzYTdhODRjNTA1ZSIgeDE9IjkiIHkxPSIxOS4xMyIgeDI9IjkiIHkyPSItMC4yOSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iIzAwNzhkNCIgLz48c3RvcCBvZmZzZXQ9IjAuMTYiIHN0b3AtY29sb3I9IiMxMzgwZGEiIC8+PHN0b3Agb2Zmc2V0PSIwLjUzIiBzdG9wLWNvbG9yPSIjM2M5MWU1IiAvPjxzdG9wIG9mZnNldD0iMC44MiIgc3RvcC1jb2xvcj0iIzU1OWNlYyIgLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM1ZWEwZWYiIC8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PHRpdGxlPkljb24tbWFjaGluZWxlYXJuaW5nLTE2MjwvdGl0bGU+PHBhdGggZD0iTTE4LDExLjM4QTQsNCwwLDAsMCwxNC40OSw3LjUsNS4xLDUuMSwwLDAsMCw5LjI0LDIuNjIsNS4yNSw1LjI1LDAsMCwwLDQuMjIsNiw0LjgsNC44LDAsMCwwLDAsMTAuNjdhNC45LDQuOSwwLDAsMCw1LjA3LDQuNzFsLjQ0LDBoOC4yMWEuNzguNzgsMCwwLDAsLjIyLDBBNC4xLDQuMSwwLDAsMCwxOCwxMS4zOFoiIGZpbGw9InVybCgjYjZjNDNiZDktZTM3Zi00MTkxLTkzYzItZDNhN2E4NGM1MDVlKSIgLz48cGF0aCBkPSJNNS40MiwxMC4zOUg0LjU0YTEuMDksMS4wOSwwLDEsMCwwLC40OWguODhhLjIuMiwwLDAsMSwuMi4ydjQuM2guNDl2LTQuM0EuNjkuNjksMCwwLDAsNS40MiwxMC4zOVptLTEuOTUuODhhLjY0LjY0LDAsMSwxLC42NC0uNjRBLjY0LjY0LDAsMCwxLDMuNDcsMTEuMjdaIiBmaWxsPSIjOWNlYmZmIiAvPjxwYXRoIGQ9Ik04Ljk0LDEwLjYxdi0xYS43LjcsMCwwLDAtLjctLjdINi42OWEuMi4yLDAsMCwxLS4yLS4yVjMuNGwtLjIzLjEyTDYsMy42NnY1YS42OS42OSwwLDAsMCwuNjkuNjlIOC4yNGEuMjEuMjEsMCwwLDEsLjIxLjIxdjFhMS4wOCwxLjA4LDAsMCwwLS44NSwxLjA2LDEuMDksMS4wOSwwLDEsMCwxLjM0LTEuMDZabS0uMjUsMS43aDBhLjY0LjY0LDAsMSwxLC42NC0uNjRBLjY0LjY0LDAsMCwxLDguNjksMTIuMzFaIiBmaWxsPSIjZjJmMmYyIiAvPjxwYXRoIGQ9Ik0xNC41Myw4LjVhMS4wOSwxLjA5LDAsMCwwLS4yNSwyLjE1di4yYS4yMS4yMSwwLDAsMS0uMjEuMjFoLTJWNy41NGEuNjkuNjksMCwwLDAtLjY5LS42OUgxMC4zNUExLjA4LDEuMDgsMCwwLDAsOS4yOSw2YTEuMDksMS4wOSwwLDEsMCwxLjA2LDEuMzRoMS4wN2EuMi4yLDAsMCwxLC4yLjJ2Ny44NGguNDlWMTEuNTVoMmEuNy43LDAsMCwwLC43LS43di0uMmExLjA5LDEuMDksMCwwLDAsLjg1LTEuMDZoMEExLjA5LDEuMDksMCwwLDAsMTQuNTMsOC41Wk05LjI5LDcuNzNoMGEuNjQuNjQsMCwxLDEsLjY0LS42NEEuNjQuNjQsMCwwLDEsOS4yOSw3LjczWm01LjI0LDIuNWgwYS42NC42NCwwLDEsMSwuNjMtLjY0QS42NC42NCwwLDAsMSwxNC41MywxMC4yM1oiIGZpbGw9IiM5Y2ViZmYiIC8+PC9zdmc+"

    }
    /* threads: {
        'PMThreadWorker': 'ThreadWorker.ts'
    } */
}

/***/ }),

/***/ "@celmino/platform":
/*!***********************************!*\
  !*** external "celmino$platform" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = celmino$platform;

/***/ }),

/***/ "@realmocean/antd":
/*!**********************************!*\
  !*** external "realmocean$antd" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = realmocean$antd;

/***/ }),

/***/ "@realmocean/atlaskit":
/*!**************************************!*\
  !*** external "realmocean$atlaskit" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = realmocean$atlaskit;

/***/ }),

/***/ "@realmocean/sdk":
/*!*********************************!*\
  !*** external "realmocean$sdk" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = realmocean$sdk;

/***/ }),

/***/ "@tuval/core":
/*!*****************************!*\
  !*** external "tuval$core" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = tuval$core;

/***/ }),

/***/ "@tuval/forms":
/*!******************************!*\
  !*** external "tuval$forms" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = tuval$forms;

/***/ }),

/***/ "react":
/*!******************************!*\
  !*** external "tuval$react" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = tuval$react;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _extends)
/* harmony export */ });
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _objectDestructuringEmpty)
/* harmony export */ });
function _objectDestructuringEmpty(obj) {
  if (obj == null) throw new TypeError("Cannot destructure " + obj);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _objectWithoutPropertiesLoose)
/* harmony export */ });
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!****************************!*\
  !*** ./src/Application.ts ***!
  \****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProcessMining: () => (/* binding */ ProcessMining)
/* harmony export */ });
/* harmony import */ var _celmino_platform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @celmino/platform */ "@celmino/platform");
/* harmony import */ var _celmino_platform__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_celmino_platform__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _TreeController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TreeController */ "./src/TreeController.ts");
/* harmony import */ var _dialogs_AddCollection_actions_SaveCollectionAction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dialogs/AddCollection/actions/SaveCollectionAction */ "./src/dialogs/AddCollection/actions/SaveCollectionAction.ts");
/* harmony import */ var _dialogs_AddCollection_actions_SaveDocumentAction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dialogs/AddCollection/actions/SaveDocumentAction */ "./src/dialogs/AddCollection/actions/SaveDocumentAction.ts");
/* harmony import */ var _dialogs_AddTextAttributeDialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dialogs/AddTextAttributeDialog */ "./src/dialogs/AddTextAttributeDialog.ts");
/* harmony import */ var _routes_routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./routes/+routes */ "./src/routes/+routes.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var manifest = __webpack_require__(/*! ./manifest */ "./src/manifest.js");
function App(manifest) {
    return function (constructor) {
        if (tuval$core['__APPS__'] == null) {
            tuval$core['__APPS__'] = {};
        }
        tuval$core['__APPS__'][manifest.application.name] = constructor;
    };
}
var ProcessMining = /** @class */ (function () {
    function ProcessMining() {
    }
    ProcessMining.prototype.GetMainController = function () {
        return {
            tree: _TreeController__WEBPACK_IMPORTED_MODULE_1__.TreeController,
            applet: _routes_routes__WEBPACK_IMPORTED_MODULE_5__.RouteController
        };
    };
    ProcessMining = __decorate([
        App(manifest)
    ], ProcessMining);
    return ProcessMining;
}());

//FormBuilder.injectView('liststatus', ListStatusWidget)
_celmino_platform__WEBPACK_IMPORTED_MODULE_0__.FormBuilder.injectAction(_dialogs_AddCollection_actions_SaveCollectionAction__WEBPACK_IMPORTED_MODULE_2__.SaveCollectionAction);
_celmino_platform__WEBPACK_IMPORTED_MODULE_0__.FormBuilder.injectAction(_dialogs_AddCollection_actions_SaveDocumentAction__WEBPACK_IMPORTED_MODULE_3__.SaveDocumentAction);
_celmino_platform__WEBPACK_IMPORTED_MODULE_0__.FormBuilder.injectAction(_dialogs_AddTextAttributeDialog__WEBPACK_IMPORTED_MODULE_4__.SaveTextFieldAction);

})();

/******/ })()
;
//# sourceMappingURL=index.js.map
                    tuval$core.ModuleLoader.FireModuleLoadedEvent('com.celmino.applet.workspace', tuval$core['__APPS__']['com.celmino.applet.workspace']);
                    