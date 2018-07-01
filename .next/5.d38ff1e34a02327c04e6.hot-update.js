webpackHotUpdate(5,{

/***/ "./node_modules/css-loader/index.js?{\"modules\":false,\"minimize\":false,\"sourceMap\":true,\"importLoaders\":1}!./node_modules/sass-loader/lib/loader.js?{}!./node_modules/sanitize.css/sanitize.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "/*! sanitize.css v6.0.0 | CC0 License | github.com/csstools/sanitize.css */\n/* Document\n * ========================================================================== */\n/**\n * 1. Remove repeating backgrounds in all browsers (opinionated).\n * 2. Add border box sizing in all browsers (opinionated).\n */\n*,\n::before,\n::after {\n  background-repeat: no-repeat;\n  /* 1 */\n  box-sizing: border-box;\n  /* 2 */ }\n\n/**\n * 1. Add text decoration inheritance in all browsers (opinionated).\n * 2. Add vertical alignment inheritance in all browsers (opinionated).\n */\n::before,\n::after {\n  text-decoration: inherit;\n  /* 1 */\n  vertical-align: inherit;\n  /* 2 */ }\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Add the default cursor in all browsers (opinionated).\n * 3. Prevent adjustments of font size after orientation changes in\n *    IE on Windows Phone and in iOS.\n * 4. Breaks words to prevent prevent overflow in all browsers (opinionated).\n */\nhtml {\n  line-height: 1.15;\n  /* 1 */\n  cursor: default;\n  /* 2 */\n  -ms-text-size-adjust: 100%;\n  /* 3 */\n  -webkit-text-size-adjust: 100%;\n  /* 3 */\n  word-break: break-word;\n  /* 4 */ }\n\n/* Sections\n * ========================================================================== */\n/**\n * Remove the margin in all browsers (opinionated).\n */\nbody {\n  margin: 0; }\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0; }\n\n/* Grouping content\n * ========================================================================== */\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\nhr {\n  box-sizing: content-box;\n  /* 1 */\n  height: 0;\n  /* 1 */\n  overflow: visible;\n  /* 2 */ }\n\n/**\n * Add the correct display in IE.\n */\nmain {\n  display: block; }\n\n/**\n * Remove the list style on navigation lists in all browsers (opinionated).\n */\nnav ol,\nnav ul {\n  list-style: none; }\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\npre {\n  font-family: monospace, monospace;\n  /* 1 */\n  font-size: 1em;\n  /* 2 */ }\n\n/* Text-level semantics\n * ========================================================================== */\n/**\n * Remove the gray background on active links in IE 10.\n */\na {\n  background-color: transparent; }\n\n/**\n * Add the correct text decoration in Edge, IE, Opera, and Safari.\n */\nabbr[title] {\n  text-decoration: underline;\n  text-decoration: underline dotted; }\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\nb,\nstrong {\n  font-weight: bolder; }\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace;\n  /* 1 */\n  font-size: 1em;\n  /* 2 */ }\n\n/**\n * Add the correct font size in all browsers.\n */\nsmall {\n  font-size: 80%; }\n\n/*\n * Remove the text shadow on text selections in Firefox 61- (opinionated).\n * 1. Restore the coloring undone by defining the text shadow\n *    in all browsers (opinionated).\n */\n::-moz-selection {\n  background-color: #b3d4fc;\n  /* 1 */\n  color: #000;\n  /* 1 */\n  text-shadow: none; }\n\n::selection {\n  background-color: #b3d4fc;\n  /* 1 */\n  color: #000;\n  /* 1 */\n  text-shadow: none; }\n\n/* Embedded content\n * ========================================================================== */\n/*\n * Change the alignment on media elements in all browers (opinionated).\n */\naudio,\ncanvas,\niframe,\nimg,\nsvg,\nvideo {\n  vertical-align: middle; }\n\n/**\n * Add the correct display in IE 9-.\n */\naudio,\nvideo {\n  display: inline-block; }\n\n/**\n * Add the correct display in iOS 4-7.\n */\naudio:not([controls]) {\n  display: none;\n  height: 0; }\n\n/**\n * Remove the border on images inside links in IE 10-.\n */\nimg {\n  border-style: none; }\n\n/**\n * Change the fill color to match the text color in all browsers (opinionated).\n */\nsvg {\n  fill: currentColor; }\n\n/**\n * Hide the overflow in IE.\n */\nsvg:not(:root) {\n  overflow: hidden; }\n\n/* Tabular data\n * ========================================================================== */\n/**\n * Collapse border spacing in all browsers (opinionated).\n */\ntable {\n  border-collapse: collapse; }\n\n/* Forms\n * ========================================================================== */\n/**\n * Remove the margin in Firefox and Safari.\n */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  margin: 0; }\n\n/**\n * Inherit styling in all browsers (opinionated).\n */\nbutton,\ninput,\nselect,\ntextarea {\n  font-family: inherit;\n  font-size: inherit;\n  line-height: inherit; }\n\n/**\n * 1. Show the overflow in IE.\n * 2. Remove the inheritance of text transform in Edge, Firefox, and IE.\n */\nbutton {\n  overflow: visible;\n  /* 1 */\n  text-transform: none;\n  /* 2 */ }\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button; }\n\n/**\n * Restore the focus styles unset by the previous rule in Firefox.\n */\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText; }\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n::-moz-focus-inner {\n  border-style: none;\n  padding: 0; }\n\n/**\n * Correct the padding in Firefox.\n */\nfieldset {\n  padding: 0.35em 0.75em 0.625em; }\n\n/**\n * Show the overflow in Edge and IE.\n */\ninput {\n  overflow: visible; }\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\nlegend {\n  box-sizing: border-box;\n  /* 1 */\n  color: inherit;\n  /* 2 */\n  display: table;\n  /* 1 */\n  max-width: 100%;\n  /* 1 */\n  padding: 0;\n  /* 3 */\n  white-space: normal;\n  /* 1 */ }\n\n/**\n * 1. Add the correct display in Edge and IE.\n * 2. Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\nprogress {\n  display: inline-block;\n  /* 1 */\n  vertical-align: baseline;\n  /* 2 */ }\n\n/**\n * Remove the inheritance of text transform in Firefox.\n */\nselect {\n  text-transform: none; }\n\n/**\n * 1. Remove the default vertical scrollbar in IE.\n * 2. Change the resize direction on textareas in all browsers (opinionated).\n */\ntextarea {\n  overflow: auto;\n  /* 1 */\n  resize: vertical;\n  /* 2 */ }\n\n/**\n * 1. Add the correct box sizing in IE 10-.\n * 2. Remove the padding in IE 10-.\n */\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box;\n  /* 1 */\n  padding: 0;\n  /* 2 */ }\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto; }\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n[type=\"search\"] {\n  -webkit-appearance: textfield;\n  /* 1 */\n  outline-offset: -2px;\n  /* 2 */ }\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n::-webkit-search-decoration {\n  -webkit-appearance: none; }\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n::-webkit-file-upload-button {\n  -webkit-appearance: button;\n  /* 1 */\n  font: inherit;\n  /* 2 */ }\n\n/* Interactive\n * ========================================================================== */\n/*\n * Add the correct display in Edge and IE.\n */\ndetails {\n  display: block; }\n\n/*\n * Add the correct styles in Edge, IE, and Safari.\n */\ndialog {\n  background-color: white;\n  border: solid;\n  color: black;\n  display: block;\n  height: -moz-fit-content;\n  height: -webkit-fit-content;\n  height: fit-content;\n  left: 0;\n  margin: auto;\n  padding: 1em;\n  position: absolute;\n  right: 0;\n  width: -moz-fit-content;\n  width: -webkit-fit-content;\n  width: fit-content; }\n\ndialog:not([open]) {\n  display: none; }\n\n/*\n * Add the correct display in all browsers.\n */\nsummary {\n  display: list-item; }\n\n/* Scripting\n * ========================================================================== */\n/**\n * Add the correct display in IE 9-.\n */\ncanvas {\n  display: inline-block; }\n\n/**\n * Add the correct display in IE.\n */\ntemplate {\n  display: none; }\n\n/* User interaction\n * ========================================================================== */\n/*\n * 1. Remove the tapping delay on clickable elements in all browsers (opinionated).\n * 2. Remove the tapping delay in IE 10.\n */\na,\narea,\nbutton,\ninput,\nlabel,\nselect,\nsummary,\ntextarea,\n[tabindex] {\n  -ms-touch-action: manipulation;\n  /* 1 */\n  touch-action: manipulation;\n  /* 2 */ }\n\n/**\n * Add the correct display in IE 10-.\n */\n[hidden] {\n  display: none; }\n\n/* Accessibility\n * ========================================================================== */\n/**\n * Change the cursor on busy elements in all browsers (opinionated).\n */\n[aria-busy=\"true\"] {\n  cursor: progress; }\n\n/*\n * Change the cursor on control elements in all browsers (opinionated).\n */\n[aria-controls] {\n  cursor: pointer; }\n\n/*\n * Change the cursor on disabled, not-editable, or otherwise\n * inoperable elements in all browsers (opinionated).\n */\n[aria-disabled],\n[disabled] {\n  cursor: disabled; }\n\n/*\n * Change the display on visually hidden accessible elements\n * in all browsers (opinionated).\n */\n[aria-hidden=\"false\"][hidden]:not(:focus) {\n  clip: rect(0, 0, 0, 0);\n  display: inherit;\n  position: absolute; }\n", "", {"version":3,"sources":["C:/Users/eina/Desktop/Sites/gw2-dye-channels/node_modules/sanitize.css/sanitize.css"],"names":[],"mappings":"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","file":"sanitize.css","sourcesContent":["/*! sanitize.css v6.0.0 | CC0 License | github.com/csstools/sanitize.css */\n/* Document\n * ========================================================================== */\n/**\n * 1. Remove repeating backgrounds in all browsers (opinionated).\n * 2. Add border box sizing in all browsers (opinionated).\n */\n*,\n::before,\n::after {\n  background-repeat: no-repeat;\n  /* 1 */\n  box-sizing: border-box;\n  /* 2 */ }\n\n/**\n * 1. Add text decoration inheritance in all browsers (opinionated).\n * 2. Add vertical alignment inheritance in all browsers (opinionated).\n */\n::before,\n::after {\n  text-decoration: inherit;\n  /* 1 */\n  vertical-align: inherit;\n  /* 2 */ }\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Add the default cursor in all browsers (opinionated).\n * 3. Prevent adjustments of font size after orientation changes in\n *    IE on Windows Phone and in iOS.\n * 4. Breaks words to prevent prevent overflow in all browsers (opinionated).\n */\nhtml {\n  line-height: 1.15;\n  /* 1 */\n  cursor: default;\n  /* 2 */\n  -ms-text-size-adjust: 100%;\n  /* 3 */\n  -webkit-text-size-adjust: 100%;\n  /* 3 */\n  word-break: break-word;\n  /* 4 */ }\n\n/* Sections\n * ========================================================================== */\n/**\n * Remove the margin in all browsers (opinionated).\n */\nbody {\n  margin: 0; }\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0; }\n\n/* Grouping content\n * ========================================================================== */\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\nhr {\n  box-sizing: content-box;\n  /* 1 */\n  height: 0;\n  /* 1 */\n  overflow: visible;\n  /* 2 */ }\n\n/**\n * Add the correct display in IE.\n */\nmain {\n  display: block; }\n\n/**\n * Remove the list style on navigation lists in all browsers (opinionated).\n */\nnav ol,\nnav ul {\n  list-style: none; }\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\npre {\n  font-family: monospace, monospace;\n  /* 1 */\n  font-size: 1em;\n  /* 2 */ }\n\n/* Text-level semantics\n * ========================================================================== */\n/**\n * Remove the gray background on active links in IE 10.\n */\na {\n  background-color: transparent; }\n\n/**\n * Add the correct text decoration in Edge, IE, Opera, and Safari.\n */\nabbr[title] {\n  text-decoration: underline;\n  text-decoration: underline dotted; }\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\nb,\nstrong {\n  font-weight: bolder; }\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace;\n  /* 1 */\n  font-size: 1em;\n  /* 2 */ }\n\n/**\n * Add the correct font size in all browsers.\n */\nsmall {\n  font-size: 80%; }\n\n/*\n * Remove the text shadow on text selections in Firefox 61- (opinionated).\n * 1. Restore the coloring undone by defining the text shadow\n *    in all browsers (opinionated).\n */\n::-moz-selection {\n  background-color: #b3d4fc;\n  /* 1 */\n  color: #000;\n  /* 1 */\n  text-shadow: none; }\n\n::selection {\n  background-color: #b3d4fc;\n  /* 1 */\n  color: #000;\n  /* 1 */\n  text-shadow: none; }\n\n/* Embedded content\n * ========================================================================== */\n/*\n * Change the alignment on media elements in all browers (opinionated).\n */\naudio,\ncanvas,\niframe,\nimg,\nsvg,\nvideo {\n  vertical-align: middle; }\n\n/**\n * Add the correct display in IE 9-.\n */\naudio,\nvideo {\n  display: inline-block; }\n\n/**\n * Add the correct display in iOS 4-7.\n */\naudio:not([controls]) {\n  display: none;\n  height: 0; }\n\n/**\n * Remove the border on images inside links in IE 10-.\n */\nimg {\n  border-style: none; }\n\n/**\n * Change the fill color to match the text color in all browsers (opinionated).\n */\nsvg {\n  fill: currentColor; }\n\n/**\n * Hide the overflow in IE.\n */\nsvg:not(:root) {\n  overflow: hidden; }\n\n/* Tabular data\n * ========================================================================== */\n/**\n * Collapse border spacing in all browsers (opinionated).\n */\ntable {\n  border-collapse: collapse; }\n\n/* Forms\n * ========================================================================== */\n/**\n * Remove the margin in Firefox and Safari.\n */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  margin: 0; }\n\n/**\n * Inherit styling in all browsers (opinionated).\n */\nbutton,\ninput,\nselect,\ntextarea {\n  font-family: inherit;\n  font-size: inherit;\n  line-height: inherit; }\n\n/**\n * 1. Show the overflow in IE.\n * 2. Remove the inheritance of text transform in Edge, Firefox, and IE.\n */\nbutton {\n  overflow: visible;\n  /* 1 */\n  text-transform: none;\n  /* 2 */ }\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button; }\n\n/**\n * Restore the focus styles unset by the previous rule in Firefox.\n */\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText; }\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n::-moz-focus-inner {\n  border-style: none;\n  padding: 0; }\n\n/**\n * Correct the padding in Firefox.\n */\nfieldset {\n  padding: 0.35em 0.75em 0.625em; }\n\n/**\n * Show the overflow in Edge and IE.\n */\ninput {\n  overflow: visible; }\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\nlegend {\n  box-sizing: border-box;\n  /* 1 */\n  color: inherit;\n  /* 2 */\n  display: table;\n  /* 1 */\n  max-width: 100%;\n  /* 1 */\n  padding: 0;\n  /* 3 */\n  white-space: normal;\n  /* 1 */ }\n\n/**\n * 1. Add the correct display in Edge and IE.\n * 2. Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\nprogress {\n  display: inline-block;\n  /* 1 */\n  vertical-align: baseline;\n  /* 2 */ }\n\n/**\n * Remove the inheritance of text transform in Firefox.\n */\nselect {\n  text-transform: none; }\n\n/**\n * 1. Remove the default vertical scrollbar in IE.\n * 2. Change the resize direction on textareas in all browsers (opinionated).\n */\ntextarea {\n  overflow: auto;\n  /* 1 */\n  resize: vertical;\n  /* 2 */ }\n\n/**\n * 1. Add the correct box sizing in IE 10-.\n * 2. Remove the padding in IE 10-.\n */\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box;\n  /* 1 */\n  padding: 0;\n  /* 2 */ }\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto; }\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n[type=\"search\"] {\n  -webkit-appearance: textfield;\n  /* 1 */\n  outline-offset: -2px;\n  /* 2 */ }\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n::-webkit-search-decoration {\n  -webkit-appearance: none; }\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n::-webkit-file-upload-button {\n  -webkit-appearance: button;\n  /* 1 */\n  font: inherit;\n  /* 2 */ }\n\n/* Interactive\n * ========================================================================== */\n/*\n * Add the correct display in Edge and IE.\n */\ndetails {\n  display: block; }\n\n/*\n * Add the correct styles in Edge, IE, and Safari.\n */\ndialog {\n  background-color: white;\n  border: solid;\n  color: black;\n  display: block;\n  height: -moz-fit-content;\n  height: -webkit-fit-content;\n  height: fit-content;\n  left: 0;\n  margin: auto;\n  padding: 1em;\n  position: absolute;\n  right: 0;\n  width: -moz-fit-content;\n  width: -webkit-fit-content;\n  width: fit-content; }\n\ndialog:not([open]) {\n  display: none; }\n\n/*\n * Add the correct display in all browsers.\n */\nsummary {\n  display: list-item; }\n\n/* Scripting\n * ========================================================================== */\n/**\n * Add the correct display in IE 9-.\n */\ncanvas {\n  display: inline-block; }\n\n/**\n * Add the correct display in IE.\n */\ntemplate {\n  display: none; }\n\n/* User interaction\n * ========================================================================== */\n/*\n * 1. Remove the tapping delay on clickable elements in all browsers (opinionated).\n * 2. Remove the tapping delay in IE 10.\n */\na,\narea,\nbutton,\ninput,\nlabel,\nselect,\nsummary,\ntextarea,\n[tabindex] {\n  -ms-touch-action: manipulation;\n  /* 1 */\n  touch-action: manipulation;\n  /* 2 */ }\n\n/**\n * Add the correct display in IE 10-.\n */\n[hidden] {\n  display: none; }\n\n/* Accessibility\n * ========================================================================== */\n/**\n * Change the cursor on busy elements in all browsers (opinionated).\n */\n[aria-busy=\"true\"] {\n  cursor: progress; }\n\n/*\n * Change the cursor on control elements in all browsers (opinionated).\n */\n[aria-controls] {\n  cursor: pointer; }\n\n/*\n * Change the cursor on disabled, not-editable, or otherwise\n * inoperable elements in all browsers (opinionated).\n */\n[aria-disabled],\n[disabled] {\n  cursor: disabled; }\n\n/*\n * Change the display on visually hidden accessible elements\n * in all browsers (opinionated).\n */\n[aria-hidden=\"false\"][hidden]:not(:focus) {\n  clip: rect(0, 0, 0, 0);\n  display: inherit;\n  position: absolute; }\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_app_scss__ = __webpack_require__("./style/app.scss");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_app_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__style_app_scss__);
var _jsxFileName = "C:\\Users\\eina\\Desktop\\Sites\\gw2-dye-channels\\pages\\index.js";



var Index = function Index() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "l-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("header", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, "GW2 Dye Channels")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("main", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=5.d38ff1e34a02327c04e6.hot-update.js.map