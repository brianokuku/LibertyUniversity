(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/Data-service/data.service.ts":
/*!**********************************************!*\
  !*** ./src/app/Data-service/data.service.ts ***!
  \**********************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
        this.LikesArray = [];
    }
    DataService.prototype.addValue = function (val) {
        this.LikesArray.push(val);
    };
    DataService.prototype.getArray = function () {
        return this.LikesArray;
    };
    //For getting the trending gifs
    DataService.prototype.getData = function () {
        var url = "http://api.giphy.com/v1/gifs/trending?api_key=4L2Jc6Tr11vq22F8zNmlnCE2mHo7F6lp&limit=10";
        return this.http.get(url);
    };
    //For getting only one specific gif by passing in an id of it
    DataService.prototype.getData2 = function (id) {
        var url = "http://api.giphy.com/v1/gifs/" + id + "?api_key=4L2Jc6Tr11vq22F8zNmlnCE2mHo7F6lp";
        return this.http.get(url);
    };
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n\tdiv, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video {\r\n\t\tmargin: 0;\r\n\t\tpadding: 0;\r\n\t\tborder: 0;\r\n\t\tfont-size: 100%;\r\n\t\tfont: inherit;\r\n\t\tvertical-align: baseline;\r\n\t}\r\n\r\n\tarticle, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {\r\n\t\tdisplay: block;\r\n\t}\r\n\r\n\tbody {\r\n\t\tline-height: 1;\r\n\t}\r\n\r\n\tol, ul {\r\n\t\tlist-style: none;\r\n\t}\r\n\r\n\tblockquote, q {\r\n\t\tquotes: none;\r\n\t}\r\n\r\n\tblockquote:before, blockquote:after, q:before, q:after {\r\n\t\tcontent: '';\r\n\t\tcontent: none;\r\n\t}\r\n\r\n\ttable {\r\n\t\tborder-collapse: collapse;\r\n\t\tborder-spacing: 0;\r\n\t}\r\n\r\n\tbody {\r\n\t\t-webkit-text-size-adjust: none;\r\n\t}\r\n\r\n\t/* Box Model */\r\n\r\n\t*, *:before, *:after {\r\n\t\tbox-sizing: border-box;\r\n\t}\r\n\r\n\t/* Containers */\r\n\r\n\t.container {\r\n\t\tmargin-left: auto;\r\n\t\tmargin-right: auto;\r\n\t}\r\n\r\n\t.container.\\31 25\\25 {\r\n\t\twidth: 100%;\r\n\t\tmax-width: 100em;\r\n\t\tmin-width: 80em;\r\n\t}\r\n\r\n\t.container.\\37 5\\25 {\r\n\t\twidth: 60em;\r\n\t}\r\n\r\n\t.container.\\35 0\\25 {\r\n\t\twidth: 40em;\r\n\t}\r\n\r\n\t.container.\\32 5\\25 {\r\n\t\twidth: 20em;\r\n\t}\r\n\r\n\t.container {\r\n\t\twidth: 80em;\r\n\t}\r\n\r\n\t@media screen and (max-width: 1680px) {\r\n\r\n\t\t.container.\\31 25\\25 {\r\n\t\t\twidth: 100%;\r\n\t\t\tmax-width: 100em;\r\n\t\t\tmin-width: 80em;\r\n\t\t}\r\n\r\n\t\t.container.\\37 5\\25 {\r\n\t\t\twidth: 60em;\r\n\t\t}\r\n\r\n\t\t.container.\\35 0\\25 {\r\n\t\t\twidth: 40em;\r\n\t\t}\r\n\r\n\t\t.container.\\32 5\\25 {\r\n\t\t\twidth: 20em;\r\n\t\t}\r\n\r\n\t\t.container {\r\n\t\t\twidth: 80em;\r\n\t\t}\r\n\r\n\t}\r\n\r\n\t@media screen and (max-width: 1280px) {\r\n\r\n\t\t.container.\\31 25\\25 {\r\n\t\t\twidth: 100%;\r\n\t\t\tmax-width: 81.25em;\r\n\t\t\tmin-width: 65em;\r\n\t\t}\r\n\r\n\t\t.container.\\37 5\\25 {\r\n\t\t\twidth: 48.75em;\r\n\t\t}\r\n\r\n\t\t.container.\\35 0\\25 {\r\n\t\t\twidth: 32.5em;\r\n\t\t}\r\n\r\n\t\t.container.\\32 5\\25 {\r\n\t\t\twidth: 16.25em;\r\n\t\t}\r\n\r\n\t\t.container {\r\n\t\t\twidth: 65em;\r\n\t\t}\r\n\r\n\t}\r\n\r\n\t@media screen and (max-width: 980px) {\r\n\r\n\t\t.container.\\31 25\\25 {\r\n\t\t\twidth: 100%;\r\n\t\t\tmax-width: 112.5%;\r\n\t\t\tmin-width: 90%;\r\n\t\t}\r\n\r\n\t\t.container.\\37 5\\25 {\r\n\t\t\twidth: 67.5%;\r\n\t\t}\r\n\r\n\t\t.container.\\35 0\\25 {\r\n\t\t\twidth: 45%;\r\n\t\t}\r\n\r\n\t\t.container.\\32 5\\25 {\r\n\t\t\twidth: 22.5%;\r\n\t\t}\r\n\r\n\t\t.container {\r\n\t\t\twidth: 90%;\r\n\t\t}\r\n\r\n\t}\r\n\r\n\t@media screen and (max-width: 736px) {\r\n\r\n\t\t.container.\\31 25\\25 {\r\n\t\t\twidth: 100%;\r\n\t\t\tmax-width: 112.5%;\r\n\t\t\tmin-width: 90%;\r\n\t\t}\r\n\r\n\t\t.container.\\37 5\\25 {\r\n\t\t\twidth: 67.5%;\r\n\t\t}\r\n\r\n\t\t.container.\\35 0\\25 {\r\n\t\t\twidth: 45%;\r\n\t\t}\r\n\r\n\t\t.container.\\32 5\\25 {\r\n\t\t\twidth: 22.5%;\r\n\t\t}\r\n\r\n\t\t.container {\r\n\t\t\twidth: 90% !important;\r\n\t\t}\r\n\r\n\t}\r\n\r\n\t@media screen and (max-width: 480px) {\r\n\r\n\t\t.container.\\31 25\\25 {\r\n\t\t\twidth: 100%;\r\n\t\t\tmax-width: 112.5%;\r\n\t\t\tmin-width: 90%;\r\n\t\t}\r\n\r\n\t\t.container.\\37 5\\25 {\r\n\t\t\twidth: 67.5%;\r\n\t\t}\r\n\r\n\t\t.container.\\35 0\\25 {\r\n\t\t\twidth: 45%;\r\n\t\t}\r\n\r\n\t\t.container.\\32 5\\25 {\r\n\t\t\twidth: 22.5%;\r\n\t\t}\r\n\r\n\t\t.container {\r\n\t\t\twidth: 90% !important;\r\n\t\t}\r\n\r\n\t}\r\n\r\n\t/* Grid */\r\n\r\n\t.row {\r\n\t\tborder-bottom: solid 1px transparent;\r\n\t\tbox-sizing: border-box;\r\n\t}\r\n\r\n\t.row > * {\r\n\t\tfloat: left;\r\n\t\tbox-sizing: border-box;\r\n\t}\r\n\r\n\t.row:after, .row:before {\r\n\t\tcontent: '';\r\n\t\tdisplay: block;\r\n\t\tclear: both;\r\n\t\theight: 0;\r\n\t}\r\n\r\n\t.row.uniform > * > :first-child {\r\n\t\tmargin-top: 0;\r\n\t}\r\n\r\n\t.row.uniform > * > :last-child {\r\n\t\tmargin-bottom: 0;\r\n\t}\r\n\r\n\t.row.\\30 \\25 > * {\r\n\t\tpadding: 0 0 0 0em;\r\n\t}\r\n\r\n\t.row.\\30 \\25 {\r\n\t\tmargin: 0 0 -1px 0em;\r\n\t}\r\n\r\n\t.row.uniform.\\30 \\25 > * {\r\n\t\tpadding: 0em 0 0 0em;\r\n\t}\r\n\r\n\t.row.uniform.\\30 \\25 {\r\n\t\tmargin: 0em 0 -1px 0em;\r\n\t}\r\n\r\n\t.row > * {\r\n\t\tpadding: 0 0 0 2em;\r\n\t}\r\n\r\n\t.row {\r\n\t\tmargin: 0 0 -1px -2em;\r\n\t}\r\n\r\n\t.row.uniform > * {\r\n\t\tpadding: 2em 0 0 2em;\r\n\t}\r\n\r\n\t.row.uniform {\r\n\t\tmargin: -2em 0 -1px -2em;\r\n\t}\r\n\r\n\t.row.\\32 00\\25 > * {\r\n\t\tpadding: 0 0 0 4em;\r\n\t}\r\n\r\n\t.row.\\32 00\\25 {\r\n\t\tmargin: 0 0 -1px -4em;\r\n\t}\r\n\r\n\t.row.uniform.\\32 00\\25 > * {\r\n\t\tpadding: 4em 0 0 4em;\r\n\t}\r\n\r\n\t.row.uniform.\\32 00\\25 {\r\n\t\tmargin: -4em 0 -1px -4em;\r\n\t}\r\n\r\n\t.row.\\31 50\\25 > * {\r\n\t\tpadding: 0 0 0 3em;\r\n\t}\r\n\r\n\t.row.\\31 50\\25 {\r\n\t\tmargin: 0 0 -1px -3em;\r\n\t}\r\n\r\n\t.row.uniform.\\31 50\\25 > * {\r\n\t\tpadding: 3em 0 0 3em;\r\n\t}\r\n\r\n\t.row.uniform.\\31 50\\25 {\r\n\t\tmargin: -3em 0 -1px -3em;\r\n\t}\r\n\r\n\t.row.\\35 0\\25 > * {\r\n\t\tpadding: 0 0 0 1em;\r\n\t}\r\n\r\n\t.row.\\35 0\\25 {\r\n\t\tmargin: 0 0 -1px -1em;\r\n\t}\r\n\r\n\t.row.uniform.\\35 0\\25 > * {\r\n\t\tpadding: 1em 0 0 1em;\r\n\t}\r\n\r\n\t.row.uniform.\\35 0\\25 {\r\n\t\tmargin: -1em 0 -1px -1em;\r\n\t}\r\n\r\n\t.row.\\32 5\\25 > * {\r\n\t\tpadding: 0 0 0 0.5em;\r\n\t}\r\n\r\n\t.row.\\32 5\\25 {\r\n\t\tmargin: 0 0 -1px -0.5em;\r\n\t}\r\n\r\n\t.row.uniform.\\32 5\\25 > * {\r\n\t\tpadding: 0.5em 0 0 0.5em;\r\n\t}\r\n\r\n\t.row.uniform.\\32 5\\25 {\r\n\t\tmargin: -0.5em 0 -1px -0.5em;\r\n\t}\r\n\r\n\t.\\31 2u, .\\31 2u\\24 {\r\n\t\twidth: 100%;\r\n\t\tclear: none;\r\n\t\tmargin-left: 0;\r\n\t}\r\n\r\n\t.\\31 1u, .\\31 1u\\24 {\r\n\t\twidth: 91.6666666667%;\r\n\t\tclear: none;\r\n\t\tmargin-left: 0;\r\n\t}\r\n\r\n\t.\\31 0u, .\\31 0u\\24 {\r\n\t\twidth: 83.3333333333%;\r\n\t\tclear: none;\r\n\t\tmargin-left: 0;\r\n\t}\r\n\r\n\t.\\39 u, .\\39 u\\24 {\r\n\t\twidth: 75%;\r\n\t\tclear: none;\r\n\t\tmargin-left: 0;\r\n\t}\r\n\r\n\t.\\38 u, .\\38 u\\24 {\r\n\t\twidth: 66.6666666667%;\r\n\t\tclear: none;\r\n\t\tmargin-left: 0;\r\n\t}\r\n\r\n\t.\\37 u, .\\37 u\\24 {\r\n\t\twidth: 58.3333333333%;\r\n\t\tclear: none;\r\n\t\tmargin-left: 0;\r\n\t}\r\n\r\n\t.\\36 u, .\\36 u\\24 {\r\n\t\twidth: 50%;\r\n\t\tclear: none;\r\n\t\tmargin-left: 0;\r\n\t}\r\n\r\n\t.\\35 u, .\\35 u\\24 {\r\n\t\twidth: 41.6666666667%;\r\n\t\tclear: none;\r\n\t\tmargin-left: 0;\r\n\t}\r\n\r\n\t.\\34 u, .\\34 u\\24 {\r\n\t\twidth: 33.3333333333%;\r\n\t\tclear: none;\r\n\t\tmargin-left: 0;\r\n\t}\r\n\r\n\t.\\33 u, .\\33 u\\24 {\r\n\t\twidth: 25%;\r\n\t\tclear: none;\r\n\t\tmargin-left: 0;\r\n\t}\r\n\r\n\t.\\32 u, .\\32 u\\24 {\r\n\t\twidth: 16.6666666667%;\r\n\t\tclear: none;\r\n\t\tmargin-left: 0;\r\n\t}\r\n\r\n\t.\\31 u, .\\31 u\\24 {\r\n\t\twidth: 8.3333333333%;\r\n\t\tclear: none;\r\n\t\tmargin-left: 0;\r\n\t}\r\n\r\n\t.\\31 2u\\24 + *,\r\n\t.\\31 1u\\24 + *,\r\n\t.\\31 0u\\24 + *,\r\n\t.\\39 u\\24 + *,\r\n\t.\\38 u\\24 + *,\r\n\t.\\37 u\\24 + *,\r\n\t.\\36 u\\24 + *,\r\n\t.\\35 u\\24 + *,\r\n\t.\\34 u\\24 + *,\r\n\t.\\33 u\\24 + *,\r\n\t.\\32 u\\24 + *,\r\n\t.\\31 u\\24 + * {\r\n\t\tclear: left;\r\n\t}\r\n\r\n\t.\\-11u {\r\n\t\tmargin-left: 91.66667%;\r\n\t}\r\n\r\n\t.\\-10u {\r\n\t\tmargin-left: 83.33333%;\r\n\t}\r\n\r\n\t.\\-9u {\r\n\t\tmargin-left: 75%;\r\n\t}\r\n\r\n\t.\\-8u {\r\n\t\tmargin-left: 66.66667%;\r\n\t}\r\n\r\n\t.\\-7u {\r\n\t\tmargin-left: 58.33333%;\r\n\t}\r\n\r\n\t.\\-6u {\r\n\t\tmargin-left: 50%;\r\n\t}\r\n\r\n\t.\\-5u {\r\n\t\tmargin-left: 41.66667%;\r\n\t}\r\n\r\n\t.\\-4u {\r\n\t\tmargin-left: 33.33333%;\r\n\t}\r\n\r\n\t.\\-3u {\r\n\t\tmargin-left: 25%;\r\n\t}\r\n\r\n\t.\\-2u {\r\n\t\tmargin-left: 16.66667%;\r\n\t}\r\n\r\n\t.\\-1u {\r\n\t\tmargin-left: 8.33333%;\r\n\t}\r\n\r\n\t@media screen and (max-width: 1680px) {\r\n\r\n\t\t.row > * {\r\n\t\t\tpadding: 0 0 0 2em;\r\n\t\t}\r\n\r\n\t\t.row {\r\n\t\t\tmargin: 0 0 -1px -2em;\r\n\t\t}\r\n\r\n\t\t.row.uniform > * {\r\n\t\t\tpadding: 2em 0 0 2em;\r\n\t\t}\r\n\r\n\t\t.row.uniform {\r\n\t\t\tmargin: -2em 0 -1px -2em;\r\n\t\t}\r\n\r\n\t\t.row.\\32 00\\25 > * {\r\n\t\t\tpadding: 0 0 0 4em;\r\n\t\t}\r\n\r\n\t\t.row.\\32 00\\25 {\r\n\t\t\tmargin: 0 0 -1px -4em;\r\n\t\t}\r\n\r\n\t\t.row.uniform.\\32 00\\25 > * {\r\n\t\t\tpadding: 4em 0 0 4em;\r\n\t\t}\r\n\r\n\t\t.row.uniform.\\32 00\\25 {\r\n\t\t\tmargin: -4em 0 -1px -4em;\r\n\t\t}\r\n\r\n\t\t.row.\\31 50\\25 > * {\r\n\t\t\tpadding: 0 0 0 3em;\r\n\t\t}\r\n\r\n\t\t.row.\\31 50\\25 {\r\n\t\t\tmargin: 0 0 -1px -3em;\r\n\t\t}\r\n\r\n\t\t.row.uniform.\\31 50\\25 > * {\r\n\t\t\tpadding: 3em 0 0 3em;\r\n\t\t}\r\n\r\n\t\t.row.uniform.\\31 50\\25 {\r\n\t\t\tmargin: -3em 0 -1px -3em;\r\n\t\t}\r\n\r\n\t\t.row.\\35 0\\25 > * {\r\n\t\t\tpadding: 0 0 0 1em;\r\n\t\t}\r\n\r\n\t\t.row.\\35 0\\25 {\r\n\t\t\tmargin: 0 0 -1px -1em;\r\n\t\t}\r\n\r\n\t\t.row.uniform.\\35 0\\25 > * {\r\n\t\t\tpadding: 1em 0 0 1em;\r\n\t\t}\r\n\r\n\t\t.row.uniform.\\35 0\\25 {\r\n\t\t\tmargin: -1em 0 -1px -1em;\r\n\t\t}\r\n\r\n\t\t.row.\\32 5\\25 > * {\r\n\t\t\tpadding: 0 0 0 0.5em;\r\n\t\t}\r\n\r\n\t\t.row.\\32 5\\25 {\r\n\t\t\tmargin: 0 0 -1px -0.5em;\r\n\t\t}\r\n\r\n\t\t.row.uniform.\\32 5\\25 > * {\r\n\t\t\tpadding: 0.5em 0 0 0.5em;\r\n\t\t}\r\n\r\n\t\t.row.uniform.\\32 5\\25 {\r\n\t\t\tmargin: -0.5em 0 -1px -0.5em;\r\n\t\t}\r\n\r\n\t\t.\\31 2u\\28xlarge\\29, .\\31 2u\\24\\28xlarge\\29 {\r\n\t\t\twidth: 100%;\r\n\t\t\tclear: none;\r\n\t\t\tmargin-left: 0;\r\n\t\t}\r\n\r\n\t\t.\\31 1u\\28xlarge\\29, .\\31 1u\\24\\28xlarge\\29 {\r\n\t\t\twidth: 91.6666666667%;\r\n\t\t\tclear: none;\r\n\t\t\tmargin-left: 0;\r\n\t\t}\r\n\r\n\t\t.\\31 0u\\28xlarge\\29, .\\31 0u\\24\\28xlarge\\29 {\r\n\t\t\twidth: 83.3333333333%;\r\n\t\t\tclear: none;\r\n\t\t\tmargin-left: 0;\r\n\t\t}\r\n\r\n\t\t.\\39 u\\28xlarge\\29, .\\39 u\\24\\28xlarge\\29 {\r\n\t\t\twidth: 75%;\r\n\t\t\tclear: none;\r\n\t\t\tmargin-left: 0;\r\n\t\t}\r\n\r\n\t\t.\\38 u\\28xlarge\\29, .\\38 u\\24\\28xlarge\\29 {\r\n\t\t\twidth: 66.6666666667%;\r\n\t\t\tclear: none;\r\n\t\t\tmargin-left: 0;\r\n\t\t}\r\n\r\n\t\t.\\37 u\\28xlarge\\29, .\\37 u\\24\\28xlarge\\29 {\r\n\t\t\twidth: 58.3333333333%;\r\n\t\t\tclear: none;\r\n\t\t\tmargin-left: 0;\r\n\t\t}\r\n\r\n\t\t.\\36 u\\28xlarge\\29, .\\36 u\\24\\28xlarge\\29 {\r\n\t\t\twidth: 50%;\r\n\t\t\tclear: none;\r\n\t\t\tmargin-left: 0;\r\n\t\t}\r\n\r\n\t\t.\\35 u\\28xlarge\\29, .\\35 u\\24\\28xlarge\\29 {\r\n\t\t\twidth: 41.6666666667%;\r\n\t\t\tclear: none;\r\n\t\t\tmargin-left: 0;\r\n\t\t}\r\n\r\n\t\t.\\34 u\\28xlarge\\29, .\\34 u\\24\\28xlarge\\29 {\r\n\t\t\twidth: 33.3333333333%;\r\n\t\t\tclear: none;\r\n\t\t\tmargin-left: 0;\r\n\t\t}\r\n\r\n\t\t.\\33 u\\28xlarge\\29, .\\33 u\\24\\28xlarge\\29 {\r\n\t\t\twidth: 25%;\r\n\t\t\tclear: none;\r\n\t\t\tmargin-left: 0;\r\n\t\t}\r\n\r\n\t\t.\\32 u\\28xlarge\\29, .\\32 u\\24\\28xlarge\\29 {\r\n\t\t\twidth: 16.6666666667%;\r\n\t\t\tclear: none;\r\n\t\t\tmargin-left: 0;\r\n\t\t}\r\n\r\n\t\t.\\31 u\\28xlarge\\29, .\\31 u\\24\\28xlarge\\29 {\r\n\t\t\twidth: 8.3333333333%;\r\n\t\t\tclear: none;\r\n\t\t\tmargin-left: 0;\r\n\t\t}\r\n\r\n\t\t.\\31 2u\\24\\28xlarge\\29 + *,\r\n\t\t.\\31 1u\\24\\28xlarge\\29 + *,\r\n\t\t.\\31 0u\\24\\28xlarge\\29 + *,\r\n\t\t.\\39 u\\24\\28xlarge\\29 + *,\r\n\t\t.\\38 u\\24\\28xlarge\\29 + *,\r\n\t\t.\\37 u\\24\\28xlarge\\29 + *,\r\n\t\t.\\36 u\\24\\28xlarge\\29 + *,\r\n\t\t.\\35 u\\24\\28xlarge\\29 + *,\r\n\t\t.\\34 u\\24\\28xlarge\\29 + *,\r\n\t\t.\\33 u\\24\\28xlarge\\29 + *,\r\n\t\t.\\32 u\\24\\28xlarge\\29 + *,\r\n\t\t.\\31 u\\24\\28xlarge\\29 + * {\r\n\t\t\tclear: left;\r\n\t\t}\r\n\r\n\t\t.\\-11u\\28xlarge\\29 {\r\n\t\t\tmargin-left: 91.66667%;\r\n\t\t}\r\n\r\n\t\t.\\-10u\\28xlarge\\29 {\r\n\t\t\tmargin-left: 83.33333%;\r\n\t\t}\r\n\r\n\t\t.\\-9u\\28xlarge\\29 {\r\n\t\t\tmargin-left: 75%;\r\n\t\t}\r\n\r\n\t\t.\\-8u\\28xlarge\\29 {\r\n\t\t\tmargin-left: 66.66667%;\r\n\t\t}\r\n\r\n\t\t.\\-7u\\28xlarge\\29 {\r\n\t\t\tmargin-left: 58.33333%;\r\n\t\t}\r\n\r\n\t\t.\\-6u\\28xlarge\\29 {\r\n\t\t\tmargin-left: 50%;\r\n\t\t}\r\n\r\n\t\t.\\-5u\\28xlarge\\29 {\r\n\t\t\tmargin-left: 41.66667%;\r\n\t\t}\r\n\r\n\t\t.\\-4u\\28xlarge\\29 {\r\n\t\t\tmargin-left: 33.33333%;\r\n\t\t}\r\n\r\n\t\t.\\-3u\\28xlarge\\29 {\r\n\t\t\tmargin-left: 25%;\r\n\t\t}\r\n\r\n\t\t.\\-2u\\28xlarge\\29 {\r\n\t\t\tmargin-left: 16.66667%;\r\n\t\t}\r\n\r\n\t\t.\\-1u\\28xlarge\\29 {\r\n\t\t\tmargin-left: 8.33333%;\r\n\t\t}\r\n\r\n\t}\r\n\r\n\t@media screen and (max-width: 1280px) {\r\n\r\n\t\t.row > * {\r\n\t\t\tpadding: 0 0 0 1.5em;\r\n\t\t}\r\n\r\n\t\t.row {\r\n\t\t\tmargin: 0 0 -1px -1.5em;\r\n\t\t}\r\n\r\n\t\t.row.uniform > * {\r\n\t\t\tpadding: 1.5em 0 0 1.5em;\r\n\t\t}\r\n\r\n\t\t.row.uniform {\r\n\t\t\tmargin: -1.5em 0 -1px -1.5em;\r\n\t\t}\r\n\r\n\t\t.row.\\32 00\\25 > * {\r\n\t\t\tpadding: 0 0 0 3em;\r\n\t\t}\r\n\r\n\t\t.row.\\32 00\\25 {\r\n\t\t\tmargin: 0 0 -1px -3em;\r\n\t\t}\r\n\r\n\t\t.row.uniform.\\32 00\\25 > * {\r\n\t\t\tpadding: 3em 0 0 3em;\r\n\t\t}\r\n\r\n\t\t.row.uniform.\\32 00\\25 {\r\n\t\t\tmargin: -3em 0 -1px -3em;\r\n\t\t}\r\n\r\n\t\t.row.\\31 50\\25 > * {\r\n\t\t\tpadding: 0 0 0 2.25em;\r\n\t\t}\r\n\r\n\t\t.row.\\31 50\\25 {\r\n\t\t\tmargin: 0 0 -1px -2.25em;\r\n\t\t}\r\n\r\n\t\t.row.uniform.\\31 50\\25 > * {\r\n\t\t\tpadding: 2.25em 0 0 2.25em;\r\n\t\t}\r\n\r\n\t\t.row.uniform.\\31 50\\25 {\r\n\t\t\tmargin: -2.25em 0 -1px -2.25em;\r\n\t\t}\r\n\r\n\t\t.row.\\35 0\\25 > * {\r\n\t\t\tpadding: 0 0 0 0.75em;\r\n\t\t}\r\n\r\n\t\t.row.\\35 0\\25 {\r\n\t\t\tmargin: 0 0 -1px -0.75em;\r\n\t\t}\r\n\r\n\t\t.row.uniform.\\35 0\\25 > * {\r\n\t\t\tpadding: 0.75em 0 0 0.75em;\r\n\t\t}\r\n\r\n\t\t.row.uniform.\\35 0\\25 {\r\n\t\t\tmargin: -0.75em 0 -1px -0.75em;\r\n\t\t}\r\n\r\n\t\t.row.\\32 5\\25 > * {\r\n\t\t\tpadding: 0 0 0 0.375em;\r\n\t\t}\r\n\r\n\t\t.row.\\32 5\\25 {\r\n\t\t\tmargin: 0 0 -1px -0.375em;\r\n\t\t}\r\n\r\n\t\t.row.uniform.\\32 5\\25 > * {\r\n\t\t\tpadding: 0.375em 0 0 0.375em;\r\n\t\t}\r\n\r\n\t\t.row.uniform.\\32 5\\25 {\r\n\t\t\tmargin: -0.375em 0 -1px -0.375em;\r\n\t\t}\r\n\r\n\t\t.\\31 2u\\28large\\29, .\\31 2u\\24\\28large\\29 {\r\n\t\t\twidth: 100%;\r\n\t\t\tclear: none;\r\n\t\t\tmargin-left: 0;\r\n\t\t}\r\n\r\n\t\t.\\31 1u\\28large\\29, .\\31 1u\\24\\28large\\29 {\r\n\t\t\twidth: 91.6666666667%;\r\n\t\t\tclear: none;\r\n\t\t\tmargin-left: 0;\r\n\t\t}\r\n\r\n\t\t.\\31 0u\\28large\\29, .\\31 0u\\24\\28large\\29 {\r\n\t\t\twidth: 83.3333333333%;\r\n\t\t\tclear: none;\r\n\t\t\tmargin-left: 0;\r\n\t\t}\r\n\r\n\t\t.\\39 u\\28large\\29, .\\39 u\\24\\28large\\29 {\r\n\t\t\twidth: 75%;\r\n\t\t\tclear: none;\r\n\t\t\tmargin-left: 0;\r\n\t\t}\r\n\r\n\t\t.\\38 u\\28large\\29, .\\38 u\\24\\28large\\29 {\r\n\t\t\twidth: 66.6666666667%;\r\n\t\t\tclear: none;\r\n\t\t\tmargin-left: 0;\r\n\t\t}\r\n\r\n\t\t.\\37 u\\28large\\29, .\\37 u\\24\\28large\\29 {\r\n\t\t\twidth: 58.3333333333%;\r\n\t\t\tclear: none;\r\n\t\t\tmargin-left: 0;\r\n\t\t}\r\n\r\n\t\t.\\36 u\\28large\\29, .\\36 u\\24\\28large\\29 {\r\n\t\t\twidth: 50%;\r\n\t\t\tclear: none;\r\n\t\t\tmargin-left: 0;\r\n\t\t}\r\n\r\n\t\t.\\35 u\\28large\\29, .\\35 u\\24\\28large\\29 {\r\n\t\t\twidth: 41.6666666667%;\r\n\t\t\tclear: none;\r\n\t\t\tmargin-left: 0;\r\n\t\t}\r\n\r\n\t\t.\\34 u\\28large\\29, .\\34 u\\24\\28large\\29 {\r\n\t\t\twidth: 33.3333333333%;\r\n\t\t\tclear: none;\r\n\t\t\tmargin-left: 0;\r\n\t\t}\r\n\r\n\t\t.\\33 u\\28large\\29, .\\33 u\\24\\28large\\29 {\r\n\t\t\twidth: 25%;\r\n\t\t\tclear: none;\r\n\t\t\tmargin-left: 0;\r\n\t\t}\r\n\r\n\t\t.\\32 u\\28large\\29, .\\32 u\\24\\28large\\29 {\r\n\t\t\twidth: 16.6666666667%;\r\n\t\t\tclear: none;\r\n\t\t\tmargin-left: 0;\r\n\t\t}\r\n\r\n\t\t.\\31 u\\28large\\29, .\\31 u\\24\\28large\\29 {\r\n\t\t\twidth: 8.3333333333%;\r\n\t\t\tclear: none;\r\n\t\t\tmargin-left: 0;\r\n\t\t}\r\n\r\n\t\t.\\31 2u\\24\\28large\\29 + *,\r\n\t\t.\\31 1u\\24\\28large\\29 + *,\r\n\t\t.\\31 0u\\24\\28large\\29 + *,\r\n\t\t.\\39 u\\24\\28large\\29 + *,\r\n\t\t.\\38 u\\24\\28large\\29 + *,\r\n\t\t.\\37 u\\24\\28large\\29 + *,\r\n\t\t.\\36 u\\24\\28large\\29 + *,\r\n\t\t.\\35 u\\24\\28large\\29 + *,\r\n\t\t.\\34 u\\24\\28large\\29 + *,\r\n\t\t.\\33 u\\24\\28large\\29 + *,\r\n\t\t.\\32 u\\24\\28large\\29 + *,\r\n\t\t.\\31 u\\24\\28large\\29 + * {\r\n\t\t\tclear: left;\r\n\t\t}\r\n\r\n\t\t.\\-11u\\28large\\29 {\r\n\t\t\tmargin-left: 91.66667%;\r\n\t\t}\r\n\r\n\t\t.\\-10u\\28large\\29 {\r\n\t\t\tmargin-left: 83.33333%;\r\n\t\t}\r\n\r\n\t\t.\\-9u\\28large\\29 {\r\n\t\t\tmargin-left: 75%;\r\n\t\t}\r\n\r\n\t\t.\\-8u\\28large\\29 {\r\n\t\t\tmargin-left: 66.66667%;\r\n\t\t}\r\n\r\n\t\t.\\-7u\\28large\\29 {\r\n\t\t\tmargin-left: 58.33333%;\r\n\t\t}\r\n\r\n\t\t.\\-6u\\28large\\29 {\r\n\t\t\tmargin-left: 50%;\r\n\t\t}\r\n\r\n\t\t.\\-5u\\28large\\29 {\r\n\t\t\tmargin-left: 41.66667%;\r\n\t\t}\r\n\r\n\t\t.\\-4u\\28large\\29 {\r\n\t\t\tmargin-left: 33.33333%;\r\n\t\t}\r\n\r\n\t\t.\\-3u\\28large\\29 {\r\n\t\t\tmargin-left: 25%;\r\n\t\t}\r\n\r\n\t\t.\\-2u\\28large\\29 {\r\n\t\t\tmargin-left: 16.66667%;\r\n\t\t}\r\n\r\n\t\t.\\-1u\\28large\\29 {\r\n\t\t\tmargin-left: 8.33333%;\r\n\t\t}\r\n\r\n\t}\r\n\r\n\t@media screen and (max-width: 980px) {\r\n\r\n\t\t.row > * {\r\n\t\t\tpadding: 0 0 0 1.5em;\r\n\t\t}\r\n\r\n\t\t.row {\r\n\t\t\tmargin: 0 0 -1px -1.5em;\r\n\t\t}\r\n\r\n\t\t.row.uniform > * {\r\n\t\t\tpadding: 1.5em 0 0 1.5em;\r\n\t\t}\r\n\r\n\t\t.row.uniform {\r\n\t\t\tmargin: -1.5em 0 -1px -1.5em;\r\n\t\t}\r\n\r\n\t\t.row.\\32 00\\25 > * {\r\n\t\t\tpadding: 0 0 0 3em;\r\n\t\t}\r\n\r\n\t\t.row.\\32 00\\25 {\r\n\t\t\tmargin: 0 0 -1px -3em;\r\n\t\t}\r\n\r\n\t\t.row.uniform.\\32 00\\25 > * {\r\n\t\t\tpadding: 3em 0 0 3em;\r\n\t\t}\r\n\r\n\t\t.row.uniform.\\32 00\\25 {\r\n\t\t\tmargin: -3em 0 -1px -3em;\r\n\t\t}\r\n\r\n\t\t.row.\\31 50\\25 > * {\r\n\t\t\tpadding: 0 0 0 2.25em;\r\n\t\t}\r\n\r\n\t\t.row.\\31 50\\25 {\r\n\t\t\tmargin: 0 0 -1px -2.25em;\r\n\t\t}\r\n\r\n\t\t.row.uniform.\\31 50\\25 > * {\r\n\t\t\tpadding: 2.25em 0 0 2.25em;\r\n\t\t}\r\n\r\n\t\t.row.uniform.\\31 50\\25 {\r\n\t\t\tmargin: -2.25em 0 -1px -2.25em;\r\n\t\t}\r\n\r\n\t\t.row.\\35 0\\25 > * {\r\n\t\t\tpadding: 0 0 0 0.75em;\r\n\t\t}\r\n\r\n\t\t.row.\\35 0\\25 {\r\n\t\t\tmargin: 0 0 -1px -0.75em;\r\n\t\t}\r\n\r\n\t\t.row.uniform.\\35 0\\25 > * {\r\n\t\t\tpadding: 0.75em 0 0 0.75em;\r\n\t\t}\r\n\r\n\t\t.row.uniform.\\35 0\\25 {\r\n\t\t\tmargin: -0.75em 0 -1px -0.75em;\r\n\t\t}\r\n\r\n\t\t.row.\\32 5\\25 > * {\r\n\t\t\tpadding: 0 0 0 0.375em;\r\n\t\t}\r\n\r\n\t\t.row.\\32 5\\25 {\r\n\t\t\tmargin: 0 0 -1px -0.375em;\r\n\t\t}\r\n\r\n\t\t.row.uniform.\\32 5\\25 > * {\r\n\t\t\tpadding: 0.375em 0 0 0.375em;\r\n\t\t}\r\n\r\n\t\t.row.uniform.\\32 5\\25 {\r\n\t\t\tmargin: -0.375em 0 -1px -0.375em;\r\n\t\t}\r\n\r\n\t\t.\\31 2u\\28medium\\29, .\\31 2u\\24\\28medium\\29 {\r\n\t\t\twidth: 100%;\r\n\t\t\tclear: none;\r\n\t\t\tmargin-left: 0;\r\n\t\t}\r\n\r\n\t\t.\\31 1u\\28medium\\29, .\\31 1u\\24\\28medium\\29 {\r\n\t\t\twidth: 91.6666666667%;\r\n\t\t\tclear: none;\r\n\t\t\tmargin-left: 0;\r\n\t\t}\r\n\r\n\t\t.\\31 0u\\28medium\\29, .\\31 0u\\24\\28medium\\29 {\r\n\t\t\twidth: 83.3333333333%;\r\n\t\t\tclear: none;\r\n\t\t\tmargin-left: 0;\r\n\t\t}\r\n\r\n\t\t.\\39 u\\28medium\\29, .\\39 u\\24\\28medium\\29 {\r\n\t\t\twidth: 75%;\r\n\t\t\tclear: none;\r\n\t\t\tmargin-left: 0;\r\n\t\t}\r\n\r\n\t\t.\\38 u\\28medium\\29, .\\38 u\\24\\28medium\\29 {\r\n\t\t\twidth: 66.6666666667%;\r\n\t\t\tclear: none;\r\n\t\t\tmargin-left: 0;\r\n\t\t}\r\n\r\n\t\t.\\37 u\\28medium\\29, .\\37 u\\24\\28medium\\29 {\r\n\t\t\twidth: 58.3333333333%;\r\n\t\t\tclear: none;\r\n\t\t\tmargin-left: 0;\r\n\t\t}\r\n\r\n\t\t.\\36 u\\28medium\\29, .\\36 u\\24\\28medium\\29 {\r\n\t\t\twidth: 50%;\r\n\t\t\tclear: none;\r\n\t\t\tmargin-left: 0;\r\n\t\t}\r\n\r\n\t\t.\\35 u\\28medium\\29, .\\35 u\\24\\28medium\\29 {\r\n\t\t\twidth: 41.6666666667%;\r\n\t\t\tclear: none;\r\n\t\t\tmargin-left: 0;\r\n\t\t}\r\n\r\n\t\t.\\34 u\\28medium\\29, .\\34 u\\24\\28medium\\29 {\r\n\t\t\twidth: 33.3333333333%;\r\n\t\t\tclear: none;\r\n\t\t\tmargin-left: 0;\r\n\t\t}\r\n\r\n\t\t.\\33 u\\28medium\\29, .\\33 u\\24\\28medium\\29 {\r\n\t\t\twidth: 25%;\r\n\t\t\tclear: none;\r\n\t\t\tmargin-left: 0;\r\n\t\t}\r\n\r\n\t\t.\\32 u\\28medium\\29, .\\32 u\\24\\28medium\\29 {\r\n\t\t\twidth: 16.6666666667%;\r\n\t\t\tclear: none;\r\n\t\t\tmargin-left: 0;\r\n\t\t}\r\n\r\n\t\t.\\31 u\\28medium\\29, .\\31 u\\24\\28medium\\29 {\r\n\t\t\twidth: 8.3333333333%;\r\n\t\t\tclear: none;\r\n\t\t\tmargin-left: 0;\r\n\t\t}\r\n\r\n\t\t.\\31 2u\\24\\28medium\\29 + *,\r\n\t\t.\\31 1u\\24\\28medium\\29 + *,\r\n\t\t.\\31 0u\\24\\28medium\\29 + *,\r\n\t\t.\\39 u\\24\\28medium\\29 + *,\r\n\t\t.\\38 u\\24\\28medium\\29 + *,\r\n\t\t.\\37 u\\24\\28medium\\29 + *,\r\n\t\t.\\36 u\\24\\28medium\\29 + *,\r\n\t\t.\\35 u\\24\\28medium\\29 + *,\r\n\t\t.\\34 u\\24\\28medium\\29 + *,\r\n\t\t.\\33 u\\24\\28medium\\29 + *,\r\n\t\t.\\32 u\\24\\28medium\\29 + *,\r\n\t\t.\\31 u\\24\\28medium\\29 + * {\r\n\t\t\tclear: left;\r\n\t\t}\r\n\r\n\t\t.\\-11u\\28medium\\29 {\r\n\t\t\tmargin-left: 91.66667%;\r\n\t\t}\r\n\r\n\t\t.\\-10u\\28medium\\29 {\r\n\t\t\tmargin-left: 83.33333%;\r\n\t\t}\r\n\r\n\t\t.\\-9u\\28medium\\29 {\r\n\t\t\tmargin-left: 75%;\r\n\t\t}\r\n\r\n\t\t.\\-8u\\28medium\\29 {\r\n\t\t\tmargin-left: 66.66667%;\r\n\t\t}\r\n\r\n\t\t.\\-7u\\28medium\\29 {\r\n\t\t\tmargin-left: 58.33333%;\r\n\t\t}\r\n\r\n\t\t.\\-6u\\28medium\\29 {\r\n\t\t\tmargin-left: 50%;\r\n\t\t}\r\n\r\n\t\t.\\-5u\\28medium\\29 {\r\n\t\t\tmargin-left: 41.66667%;\r\n\t\t}\r\n\r\n\t\t.\\-4u\\28medium\\29 {\r\n\t\t\tmargin-left: 33.33333%;\r\n\t\t}\r\n\r\n\t\t.\\-3u\\28medium\\29 {\r\n\t\t\tmargin-left: 25%;\r\n\t\t}\r\n\r\n\t\t.\\-2u\\28medium\\29 {\r\n\t\t\tmargin-left: 16.66667%;\r\n\t\t}\r\n\r\n\t\t.\\-1u\\28medium\\29 {\r\n\t\t\tmargin-left: 8.33333%;\r\n\t\t}\r\n\r\n\t}\r\n\r\n\t@media screen and (max-width: 736px) {\r\n\r\n\t\t.row > * {\r\n\t\t\tpadding: 0 0 0 1.25em;\r\n\t\t}\r\n\r\n\t\t.row {\r\n\t\t\tmargin: 0 0 -1px -1.25em;\r\n\t\t}\r\n\r\n\t\t.row.uniform > * {\r\n\t\t\tpadding: 1.25em 0 0 1.25em;\r\n\t\t}\r\n\r\n\t\t.row.uniform {\r\n\t\t\tmargin: -1.25em 0 -1px -1.25em;\r\n\t\t}\r\n\r\n\t\t.row.\\32 00\\25 > * {\r\n\t\t\tpadding: 0 0 0 2.5em;\r\n\t\t}\r\n\r\n\t\t.row.\\32 00\\25 {\r\n\t\t\tmargin: 0 0 -1px -2.5em;\r\n\t\t}\r\n\r\n\t\t.row.uniform.\\32 00\\25 > * {\r\n\t\t\tpadding: 2.5em 0 0 2.5em;\r\n\t\t}\r\n\r\n\t\t.row.uniform.\\32 00\\25 {\r\n\t\t\tmargin: -2.5em 0 -1px -2.5em;\r\n\t\t}\r\n\r\n\t\t.row.\\31 50\\25 > * {\r\n\t\t\tpadding: 0 0 0 1.875em;\r\n\t\t}\r\n\r\n\t\t.row.\\31 50\\25 {\r\n\t\t\tmargin: 0 0 -1px -1.875em;\r\n\t\t}\r\n\r\n\t\t.row.uniform.\\31 50\\25 > * {\r\n\t\t\tpadding: 1.875em 0 0 1.875em;\r\n\t\t}\r\n\r\n\t\t.row.uniform.\\31 50\\25 {\r\n\t\t\tmargin: -1.875em 0 -1px -1.875em;\r\n\t\t}\r\n\r\n\t\t.row.\\35 0\\25 > * {\r\n\t\t\tpadding: 0 0 0 0.625em;\r\n\t\t}\r\n\r\n\t\t.row.\\35 0\\25 {\r\n\t\t\tmargin: 0 0 -1px -0.625em;\r\n\t\t}\r\n\r\n\t\t.row.uniform.\\35 0\\25 > * {\r\n\t\t\tpadding: 0.625em 0 0 0.625em;\r\n\t\t}\r\n\r\n\t\t.row.uniform.\\35 0\\25 {\r\n\t\t\tmargin: -0.625em 0 -1px -0.625em;\r\n\t\t}\r\n\r\n\t\t.row.\\32 5\\25 > * {\r\n\t\t\tpadding: 0 0 0 0.3125em;\r\n\t\t}\r\n\r\n\t\t.row.\\32 5\\25 {\r\n\t\t\tmargin: 0 0 -1px -0.3125em;\r\n\t\t}\r\n\r\n\t\t.row.uniform.\\32 5\\25 > * {\r\n\t\t\tpadding: 0.3125em 0 0 0.3125em;\r\n\t\t}\r\n\r\n\t\t.row.uniform.\\32 5\\25 {\r\n\t\t\tmargin: -0.3125em 0 -1px -0.3125em;\r\n\t\t}\r\n\r\n\t\t.\\31 2u\\28small\\29, .\\31 2u\\24\\28small\\29 {\r\n\t\t\twidth: 100%;\r\n\t\t\tclear: none;\r\n\t\t\tmargin-left: 0;\r\n\t\t}\r\n\r\n\t\t.\\31 1u\\28small\\29, .\\31 1u\\24\\28small\\29 {\r\n\t\t\twidth: 91.6666666667%;\r\n\t\t\tclear: none;\r\n\t\t\tmargin-left: 0;\r\n\t\t}\r\n\r\n\t\t.\\31 0u\\28small\\29, .\\31 0u\\24\\28small\\29 {\r\n\t\t\twidth: 83.3333333333%;\r\n\t\t\tclear: none;\r\n\t\t\tmargin-left: 0;\r\n\t\t}\r\n\r\n\t\t.\\39 u\\28small\\29, .\\39 u\\24\\28small\\29 {\r\n\t\t\twidth: 75%;\r\n\t\t\tclear: none;\r\n\t\t\tmargin-left: 0;\r\n\t\t}\r\n\r\n\t\t.\\38 u\\28small\\29, .\\38 u\\24\\28small\\29 {\r\n\t\t\twidth: 66.6666666667%;\r\n\t\t\tclear: none;\r\n\t\t\tmargin-left: 0;\r\n\t\t}\r\n\r\n\t\t.\\37 u\\28small\\29, .\\37 u\\24\\28small\\29 {\r\n\t\t\twidth: 58.3333333333%;\r\n\t\t\tclear: none;\r\n\t\t\tmargin-left: 0;\r\n\t\t}\r\n\r\n\t\t.\\36 u\\28small\\29, .\\36 u\\24\\28small\\29 {\r\n\t\t\twidth: 50%;\r\n\t\t\tclear: none;\r\n\t\t\tmargin-left: 0;\r\n\t\t}\r\n\r\n\t\t.\\35 u\\28small\\29, .\\35 u\\24\\28small\\29 {\r\n\t\t\twidth: 41.6666666667%;\r\n\t\t\tclear: none;\r\n\t\t\tmargin-left: 0;\r\n\t\t}\r\n\r\n\t\t.\\34 u\\28small\\29, .\\34 u\\24\\28small\\29 {\r\n\t\t\twidth: 33.3333333333%;\r\n\t\t\tclear: none;\r\n\t\t\tmargin-left: 0;\r\n\t\t}\r\n\r\n\t\t.\\33 u\\28small\\29, .\\33 u\\24\\28small\\29 {\r\n\t\t\twidth: 25%;\r\n\t\t\tclear: none;\r\n\t\t\tmargin-left: 0;\r\n\t\t}\r\n\r\n\t\t.\\32 u\\28small\\29, .\\32 u\\24\\28small\\29 {\r\n\t\t\twidth: 16.6666666667%;\r\n\t\t\tclear: none;\r\n\t\t\tmargin-left: 0;\r\n\t\t}\r\n\r\n\t\t.\\31 u\\28small\\29, .\\31 u\\24\\28small\\29 {\r\n\t\t\twidth: 8.3333333333%;\r\n\t\t\tclear: none;\r\n\t\t\tmargin-left: 0;\r\n\t\t}\r\n\r\n\t\t.\\31 2u\\24\\28small\\29 + *,\r\n\t\t.\\31 1u\\24\\28small\\29 + *,\r\n\t\t.\\31 0u\\24\\28small\\29 + *,\r\n\t\t.\\39 u\\24\\28small\\29 + *,\r\n\t\t.\\38 u\\24\\28small\\29 + *,\r\n\t\t.\\37 u\\24\\28small\\29 + *,\r\n\t\t.\\36 u\\24\\28small\\29 + *,\r\n\t\t.\\35 u\\24\\28small\\29 + *,\r\n\t\t.\\34 u\\24\\28small\\29 + *,\r\n\t\t.\\33 u\\24\\28small\\29 + *,\r\n\t\t.\\32 u\\24\\28small\\29 + *,\r\n\t\t.\\31 u\\24\\28small\\29 + * {\r\n\t\t\tclear: left;\r\n\t\t}\r\n\r\n\t\t.\\-11u\\28small\\29 {\r\n\t\t\tmargin-left: 91.66667%;\r\n\t\t}\r\n\r\n\t\t.\\-10u\\28small\\29 {\r\n\t\t\tmargin-left: 83.33333%;\r\n\t\t}\r\n\r\n\t\t.\\-9u\\28small\\29 {\r\n\t\t\tmargin-left: 75%;\r\n\t\t}\r\n\r\n\t\t.\\-8u\\28small\\29 {\r\n\t\t\tmargin-left: 66.66667%;\r\n\t\t}\r\n\r\n\t\t.\\-7u\\28small\\29 {\r\n\t\t\tmargin-left: 58.33333%;\r\n\t\t}\r\n\r\n\t\t.\\-6u\\28small\\29 {\r\n\t\t\tmargin-left: 50%;\r\n\t\t}\r\n\r\n\t\t.\\-5u\\28small\\29 {\r\n\t\t\tmargin-left: 41.66667%;\r\n\t\t}\r\n\r\n\t\t.\\-4u\\28small\\29 {\r\n\t\t\tmargin-left: 33.33333%;\r\n\t\t}\r\n\r\n\t\t.\\-3u\\28small\\29 {\r\n\t\t\tmargin-left: 25%;\r\n\t\t}\r\n\r\n\t\t.\\-2u\\28small\\29 {\r\n\t\t\tmargin-left: 16.66667%;\r\n\t\t}\r\n\r\n\t\t.\\-1u\\28small\\29 {\r\n\t\t\tmargin-left: 8.33333%;\r\n\t\t}\r\n\r\n\t}\r\n\r\n\t@media screen and (max-width: 480px) {\r\n\r\n\t\t.row > * {\r\n\t\t\tpadding: 0 0 0 1.25em;\r\n\t\t}\r\n\r\n\t\t.row {\r\n\t\t\tmargin: 0 0 -1px -1.25em;\r\n\t\t}\r\n\r\n\t\t.row.uniform > * {\r\n\t\t\tpadding: 1.25em 0 0 1.25em;\r\n\t\t}\r\n\r\n\t\t.row.uniform {\r\n\t\t\tmargin: -1.25em 0 -1px -1.25em;\r\n\t\t}\r\n\r\n\t\t.row.\\32 00\\25 > * {\r\n\t\t\tpadding: 0 0 0 2.5em;\r\n\t\t}\r\n\r\n\t\t.row.\\32 00\\25 {\r\n\t\t\tmargin: 0 0 -1px -2.5em;\r\n\t\t}\r\n\r\n\t\t.row.uniform.\\32 00\\25 > * {\r\n\t\t\tpadding: 2.5em 0 0 2.5em;\r\n\t\t}\r\n\r\n\t\t.row.uniform.\\32 00\\25 {\r\n\t\t\tmargin: -2.5em 0 -1px -2.5em;\r\n\t\t}\r\n\r\n\t\t.row.\\31 50\\25 > * {\r\n\t\t\tpadding: 0 0 0 1.875em;\r\n\t\t}\r\n\r\n\t\t.row.\\31 50\\25 {\r\n\t\t\tmargin: 0 0 -1px -1.875em;\r\n\t\t}\r\n\r\n\t\t.row.uniform.\\31 50\\25 > * {\r\n\t\t\tpadding: 1.875em 0 0 1.875em;\r\n\t\t}\r\n\r\n\t\t.row.uniform.\\31 50\\25 {\r\n\t\t\tmargin: -1.875em 0 -1px -1.875em;\r\n\t\t}\r\n\r\n\t\t.row.\\35 0\\25 > * {\r\n\t\t\tpadding: 0 0 0 0.625em;\r\n\t\t}\r\n\r\n\t\t.row.\\35 0\\25 {\r\n\t\t\tmargin: 0 0 -1px -0.625em;\r\n\t\t}\r\n\r\n\t\t.row.uniform.\\35 0\\25 > * {\r\n\t\t\tpadding: 0.625em 0 0 0.625em;\r\n\t\t}\r\n\r\n\t\t.row.uniform.\\35 0\\25 {\r\n\t\t\tmargin: -0.625em 0 -1px -0.625em;\r\n\t\t}\r\n\r\n\t\t.row.\\32 5\\25 > * {\r\n\t\t\tpadding: 0 0 0 0.3125em;\r\n\t\t}\r\n\r\n\t\t.row.\\32 5\\25 {\r\n\t\t\tmargin: 0 0 -1px -0.3125em;\r\n\t\t}\r\n\r\n\t\t.row.uniform.\\32 5\\25 > * {\r\n\t\t\tpadding: 0.3125em 0 0 0.3125em;\r\n\t\t}\r\n\r\n\t\t.row.uniform.\\32 5\\25 {\r\n\t\t\tmargin: -0.3125em 0 -1px -0.3125em;\r\n\t\t}\r\n\r\n\t\t.\\31 2u\\28xsmall\\29, .\\31 2u\\24\\28xsmall\\29 {\r\n\t\t\twidth: 100%;\r\n\t\t\tclear: none;\r\n\t\t\tmargin-left: 0;\r\n\t\t}\r\n\r\n\t\t.\\31 1u\\28xsmall\\29, .\\31 1u\\24\\28xsmall\\29 {\r\n\t\t\twidth: 91.6666666667%;\r\n\t\t\tclear: none;\r\n\t\t\tmargin-left: 0;\r\n\t\t}\r\n\r\n\t\t.\\31 0u\\28xsmall\\29, .\\31 0u\\24\\28xsmall\\29 {\r\n\t\t\twidth: 83.3333333333%;\r\n\t\t\tclear: none;\r\n\t\t\tmargin-left: 0;\r\n\t\t}\r\n\r\n\t\t.\\39 u\\28xsmall\\29, .\\39 u\\24\\28xsmall\\29 {\r\n\t\t\twidth: 75%;\r\n\t\t\tclear: none;\r\n\t\t\tmargin-left: 0;\r\n\t\t}\r\n\r\n\t\t.\\38 u\\28xsmall\\29, .\\38 u\\24\\28xsmall\\29 {\r\n\t\t\twidth: 66.6666666667%;\r\n\t\t\tclear: none;\r\n\t\t\tmargin-left: 0;\r\n\t\t}\r\n\r\n\t\t.\\37 u\\28xsmall\\29, .\\37 u\\24\\28xsmall\\29 {\r\n\t\t\twidth: 58.3333333333%;\r\n\t\t\tclear: none;\r\n\t\t\tmargin-left: 0;\r\n\t\t}\r\n\r\n\t\t.\\36 u\\28xsmall\\29, .\\36 u\\24\\28xsmall\\29 {\r\n\t\t\twidth: 50%;\r\n\t\t\tclear: none;\r\n\t\t\tmargin-left: 0;\r\n\t\t}\r\n\r\n\t\t.\\35 u\\28xsmall\\29, .\\35 u\\24\\28xsmall\\29 {\r\n\t\t\twidth: 41.6666666667%;\r\n\t\t\tclear: none;\r\n\t\t\tmargin-left: 0;\r\n\t\t}\r\n\r\n\t\t.\\34 u\\28xsmall\\29, .\\34 u\\24\\28xsmall\\29 {\r\n\t\t\twidth: 33.3333333333%;\r\n\t\t\tclear: none;\r\n\t\t\tmargin-left: 0;\r\n\t\t}\r\n\r\n\t\t.\\33 u\\28xsmall\\29, .\\33 u\\24\\28xsmall\\29 {\r\n\t\t\twidth: 25%;\r\n\t\t\tclear: none;\r\n\t\t\tmargin-left: 0;\r\n\t\t}\r\n\r\n\t\t.\\32 u\\28xsmall\\29, .\\32 u\\24\\28xsmall\\29 {\r\n\t\t\twidth: 16.6666666667%;\r\n\t\t\tclear: none;\r\n\t\t\tmargin-left: 0;\r\n\t\t}\r\n\r\n\t\t.\\31 u\\28xsmall\\29, .\\31 u\\24\\28xsmall\\29 {\r\n\t\t\twidth: 8.3333333333%;\r\n\t\t\tclear: none;\r\n\t\t\tmargin-left: 0;\r\n\t\t}\r\n\r\n\t\t.\\31 2u\\24\\28xsmall\\29 + *,\r\n\t\t.\\31 1u\\24\\28xsmall\\29 + *,\r\n\t\t.\\31 0u\\24\\28xsmall\\29 + *,\r\n\t\t.\\39 u\\24\\28xsmall\\29 + *,\r\n\t\t.\\38 u\\24\\28xsmall\\29 + *,\r\n\t\t.\\37 u\\24\\28xsmall\\29 + *,\r\n\t\t.\\36 u\\24\\28xsmall\\29 + *,\r\n\t\t.\\35 u\\24\\28xsmall\\29 + *,\r\n\t\t.\\34 u\\24\\28xsmall\\29 + *,\r\n\t\t.\\33 u\\24\\28xsmall\\29 + *,\r\n\t\t.\\32 u\\24\\28xsmall\\29 + *,\r\n\t\t.\\31 u\\24\\28xsmall\\29 + * {\r\n\t\t\tclear: left;\r\n\t\t}\r\n\r\n\t\t.\\-11u\\28xsmall\\29 {\r\n\t\t\tmargin-left: 91.66667%;\r\n\t\t}\r\n\r\n\t\t.\\-10u\\28xsmall\\29 {\r\n\t\t\tmargin-left: 83.33333%;\r\n\t\t}\r\n\r\n\t\t.\\-9u\\28xsmall\\29 {\r\n\t\t\tmargin-left: 75%;\r\n\t\t}\r\n\r\n\t\t.\\-8u\\28xsmall\\29 {\r\n\t\t\tmargin-left: 66.66667%;\r\n\t\t}\r\n\r\n\t\t.\\-7u\\28xsmall\\29 {\r\n\t\t\tmargin-left: 58.33333%;\r\n\t\t}\r\n\r\n\t\t.\\-6u\\28xsmall\\29 {\r\n\t\t\tmargin-left: 50%;\r\n\t\t}\r\n\r\n\t\t.\\-5u\\28xsmall\\29 {\r\n\t\t\tmargin-left: 41.66667%;\r\n\t\t}\r\n\r\n\t\t.\\-4u\\28xsmall\\29 {\r\n\t\t\tmargin-left: 33.33333%;\r\n\t\t}\r\n\r\n\t\t.\\-3u\\28xsmall\\29 {\r\n\t\t\tmargin-left: 25%;\r\n\t\t}\r\n\r\n\t\t.\\-2u\\28xsmall\\29 {\r\n\t\t\tmargin-left: 16.66667%;\r\n\t\t}\r\n\r\n\t\t.\\-1u\\28xsmall\\29 {\r\n\t\t\tmargin-left: 8.33333%;\r\n\t\t}\r\n\r\n\t}\r\n\r\n\t/* Basic */\r\n\r\n\t@-ms-viewport {\r\n\t\twidth: device-width;\r\n\t}\r\n\r\n\tbody {\r\n\t\t-ms-overflow-style: scrollbar;\r\n\t}\r\n\r\n\t@media screen and (max-width: 480px) {\r\n\r\n\t\thtml, body {\r\n\t\t\tmin-width: 320px;\r\n\t\t}\r\n\r\n\t}\r\n\r\n\tbody {\r\n\t\tbackground: #fff;\r\n\t}\r\n\r\n\tbody.is-loading *, body.is-loading *:before, body.is-loading *:after {\r\n\t\t\t-webkit-animation: none !important;\r\n\t\t\tanimation: none !important;\r\n\t\t\ttransition: none !important;\r\n\t\t}\r\n\r\n\t/* Type */\r\n\r\n\tbody {\r\n\t\tbackground-color: #fff;\r\n\t\tcolor: #111111;\r\n\t}\r\n\r\n\tbody, input, select, textarea {\r\n\t\tfont-family: \"Lato\", sans-serif;\r\n\t\tfont-size: 15pt;\r\n\t\tfont-weight: 300;\r\n\t\tline-height: 2;\r\n\t}\r\n\r\n\t@media screen and (max-width: 1680px) {\r\n\r\n\t\t\tbody, input, select, textarea {\r\n\t\t\t\tfont-size: 13pt;\r\n\t\t\t}\r\n\r\n\t\t}\r\n\r\n\t@media screen and (max-width: 1280px) {\r\n\r\n\t\t\tbody, input, select, textarea {\r\n\t\t\t\tfont-size: 13pt;\r\n\t\t\t}\r\n\r\n\t\t}\r\n\r\n\t@media screen and (max-width: 980px) {\r\n\r\n\t\t\tbody, input, select, textarea {\r\n\t\t\t\tfont-size: 12pt;\r\n\t\t\t}\r\n\r\n\t\t}\r\n\r\n\t@media screen and (max-width: 736px) {\r\n\r\n\t\t\tbody, input, select, textarea {\r\n\t\t\t\tfont-size: 12pt;\r\n\t\t\t}\r\n\r\n\t\t}\r\n\r\n\t@media screen and (max-width: 480px) {\r\n\r\n\t\t\tbody, input, select, textarea {\r\n\t\t\t\tfont-size: 12pt;\r\n\t\t\t}\r\n\r\n\t\t}\r\n\r\n\ta {\r\n\t\ttransition: color 0.2s ease-in-out;\r\n\t\ttext-decoration: none;\r\n\t}\r\n\r\n\ta:hover {\r\n\t\t\ttext-decoration: underline;\r\n\t\t}\r\n\r\n\tstrong, b {\r\n\t\tfont-weight: 700;\r\n\t}\r\n\r\n\tem, i {\r\n\t\tfont-style: italic;\r\n\t}\r\n\r\n\tp {\r\n\t\tmargin: 0 0 2em 0;\r\n\t}\r\n\r\n\th1, h2, h3, h4, h5, h6 {\r\n\t\tfont-weight: 700;\r\n\t\tline-height: 1.5;\r\n\t\tmargin: 0 0 1em 0;\r\n\t\ttext-transform: uppercase;\r\n\t}\r\n\r\n\th1 a, h2 a, h3 a, h4 a, h5 a, h6 a {\r\n\t\t\tcolor: inherit;\r\n\t\t\ttext-decoration: none;\r\n\t\t}\r\n\r\n\th1 {\r\n\t\tfont-size: 2em;\r\n\t\tmargin: 0 0 0.25em 0;\r\n\t}\r\n\r\n\th2 {\r\n\t\tfont-size: 1.75em;\r\n\t}\r\n\r\n\th3 {\r\n\t\tfont-size: 1.35em;\r\n\t}\r\n\r\n\th4 {\r\n\t\tfont-size: 1.1em;\r\n\t}\r\n\r\n\th5 {\r\n\t\tfont-size: 0.9em;\r\n\t}\r\n\r\n\th6 {\r\n\t\tfont-size: 0.7em;\r\n\t}\r\n\r\n\t@media screen and (max-width: 736px) {\r\n\r\n\t\th1 {\r\n\t\t\tfont-size: 1.5em;\r\n\t\t}\r\n\r\n\t\th2 {\r\n\t\t\tfont-size: 1.25em;\r\n\t\t}\r\n\r\n\t\th3 {\r\n\t\t\tfont-size: 1.1em;\r\n\t\t}\r\n\r\n\t}\r\n\r\n\tsub {\r\n\t\tfont-size: 0.8em;\r\n\t\tposition: relative;\r\n\t\ttop: 0.5em;\r\n\t}\r\n\r\n\tsup {\r\n\t\tfont-size: 0.8em;\r\n\t\tposition: relative;\r\n\t\ttop: -0.5em;\r\n\t}\r\n\r\n\tblockquote {\r\n\t\tborder-left: solid 4px;\r\n\t\tfont-style: italic;\r\n\t\tmargin: 0 0 2em 0;\r\n\t\tpadding: 0.5em 0 0.5em 2em;\r\n\t}\r\n\r\n\tcode {\r\n\t\tborder-radius: 0;\r\n\t\tborder: solid 1px;\r\n\t\tfont-family: \"Courier New\", monospace;\r\n\t\tfont-size: 0.9em;\r\n\t\tmargin: 0 0.25em;\r\n\t\tpadding: 0.25em 0.65em;\r\n\t}\r\n\r\n\tpre {\r\n\t\t-webkit-overflow-scrolling: touch;\r\n\t\tfont-family: \"Courier New\", monospace;\r\n\t\tfont-size: 0.9em;\r\n\t\tmargin: 0 0 2em 0;\r\n\t}\r\n\r\n\tpre code {\r\n\t\t\tdisplay: block;\r\n\t\t\tline-height: 1.75;\r\n\t\t\tpadding: 1em 1.5em;\r\n\t\t\toverflow-x: auto;\r\n\t\t}\r\n\r\n\thr {\r\n\t\tborder: 0;\r\n\t\tborder-bottom: solid 1px;\r\n\t\tmargin: 2em 0;\r\n\t}\r\n\r\n\thr.major {\r\n\t\t\tmargin: 3em 0;\r\n\t\t}\r\n\r\n\t.align-left {\r\n\t\ttext-align: left;\r\n\t}\r\n\r\n\t.align-center {\r\n\t\ttext-align: center;\r\n\t}\r\n\r\n\t.align-right {\r\n\t\ttext-align: right;\r\n\t}\r\n\r\n\tinput, select, textarea {\r\n\t\tcolor: #e5474b;\r\n\t}\r\n\r\n\ta {\r\n\t\tcolor: #e5474b;\r\n\t}\r\n\r\n\tstrong, b {\r\n\t\tcolor: #e5474b;\r\n\t}\r\n\r\n\th1, h2, h3, h4, h5, h6 {\r\n\t\tcolor: #e5474b;\r\n\t}\r\n\r\n\tblockquote {\r\n\t\tborder-left-color: #e5474b;\r\n\t}\r\n\r\n\tcode {\r\n\t\tbackground: none;\r\n\t\tborder-color: #e5474b;\r\n\t}\r\n\r\n\thr {\r\n\t\tborder-bottom-color: #e5474b;\r\n\t}\r\n\r\n\t/* Box */\r\n\r\n\t.box {\r\n\t\tborder-radius: 0;\r\n\t\tborder: solid 1px;\r\n\t\tmargin-bottom: 2em;\r\n\t\tpadding: 1.5em;\r\n\t}\r\n\r\n\t.box > :last-child,\r\n\t\t.box > :last-child > :last-child,\r\n\t\t.box > :last-child > :last-child > :last-child {\r\n\t\t\tmargin-bottom: 0;\r\n\t\t}\r\n\r\n\t.box.alt {\r\n\t\t\tborder: 0;\r\n\t\t\tborder-radius: 0;\r\n\t\t\tpadding: 0;\r\n\t\t}\r\n\r\n\t.box {\r\n\t\tborder-color: #e5474b;\r\n\t}\r\n\r\n\t/* Button */\r\n\r\n\tinput[type=\"submit\"],\r\n\tinput[type=\"reset\"],\r\n\tinput[type=\"button\"],\r\n\tbutton,\r\n\t.button {\r\n\t\t-moz-appearance: none;\r\n\t\t-webkit-appearance: none;\r\n\t\t-ms-appearance: none;\r\n\t\tappearance: none;\r\n\t\ttransition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;\r\n\t\tborder-radius: 0;\r\n\t\tborder: 0;\r\n\t\tcursor: pointer;\r\n\t\tdisplay: inline-block;\r\n\t\tfont-size: .8em;\r\n\t\tfont-weight: 700;\r\n\t\theight: 3.5em;\r\n\t\tline-height: 3.65em;\r\n\t\tpadding: 0 2.25em;\r\n\t\ttext-align: center;\r\n\t\ttext-decoration: none;\r\n\t\ttext-transform: uppercase;\r\n\t\twhite-space: nowrap;\r\n\t}\r\n\r\n\tinput[type=\"submit\"]:hover,\r\n\t\tinput[type=\"reset\"]:hover,\r\n\t\tinput[type=\"button\"]:hover,\r\n\t\tbutton:hover,\r\n\t\t.button:hover {\r\n\t\t\ttext-decoration: none;\r\n\t\t}\r\n\r\n\tinput[type=\"submit\"].icon,\r\n\t\tinput[type=\"reset\"].icon,\r\n\t\tinput[type=\"button\"].icon,\r\n\t\tbutton.icon,\r\n\t\t.button.icon {\r\n\t\t\tpadding-left: 1.35em;\r\n\t\t}\r\n\r\n\tinput[type=\"submit\"].icon:before,\r\n\t\t\tinput[type=\"reset\"].icon:before,\r\n\t\t\tinput[type=\"button\"].icon:before,\r\n\t\t\tbutton.icon:before,\r\n\t\t\t.button.icon:before {\r\n\t\t\t\tmargin-right: 0.5em;\r\n\t\t\t}\r\n\r\n\tinput[type=\"submit\"].fit,\r\n\t\tinput[type=\"reset\"].fit,\r\n\t\tinput[type=\"button\"].fit,\r\n\t\tbutton.fit,\r\n\t\t.button.fit {\r\n\t\t\tdisplay: block;\r\n\t\t\tmargin: 0 0 1em 0;\r\n\t\t\twidth: 100%;\r\n\t\t}\r\n\r\n\tinput[type=\"submit\"].small,\r\n\t\tinput[type=\"reset\"].small,\r\n\t\tinput[type=\"button\"].small,\r\n\t\tbutton.small,\r\n\t\t.button.small {\r\n\t\t\tfont-size: 0.8em;\r\n\t\t}\r\n\r\n\tinput[type=\"submit\"].big,\r\n\t\tinput[type=\"reset\"].big,\r\n\t\tinput[type=\"button\"].big,\r\n\t\tbutton.big,\r\n\t\t.button.big {\r\n\t\t\tfont-size: 1.35em;\r\n\t\t}\r\n\r\n\tinput[type=\"submit\"].disabled, input[type=\"submit\"]:disabled,\r\n\t\tinput[type=\"reset\"].disabled,\r\n\t\tinput[type=\"reset\"]:disabled,\r\n\t\tinput[type=\"button\"].disabled,\r\n\t\tinput[type=\"button\"]:disabled,\r\n\t\tbutton.disabled,\r\n\t\tbutton:disabled,\r\n\t\t.button.disabled,\r\n\t\t.button:disabled {\r\n\t\t\t-moz-pointer-events: none;\r\n\t\t\t-webkit-pointer-events: none;\r\n\t\t\t-ms-pointer-events: none;\r\n\t\t\tpointer-events: none;\r\n\t\t\topacity: 0.25;\r\n\t\t}\r\n\r\n\tinput[type=\"submit\"],\r\n\tinput[type=\"reset\"],\r\n\tinput[type=\"button\"],\r\n\tbutton,\r\n\t.button {\r\n\t\tbackground-color: #5a5a5a;\r\n\t\tcolor: #ffffff !important;\r\n\t}\r\n\r\n\tinput[type=\"submit\"]:hover,\r\n\t\tinput[type=\"reset\"]:hover,\r\n\t\tinput[type=\"button\"]:hover,\r\n\t\tbutton:hover,\r\n\t\t.button:hover {\r\n\t\t\tbackground-color: #676767;\r\n\t\t}\r\n\r\n\tinput[type=\"submit\"]:active,\r\n\t\tinput[type=\"reset\"]:active,\r\n\t\tinput[type=\"button\"]:active,\r\n\t\tbutton:active,\r\n\t\t.button:active {\r\n\t\t\tbackground-color: #4d4d4d;\r\n\t\t}\r\n\r\n\tinput[type=\"submit\"].alt,\r\n\t\tinput[type=\"reset\"].alt,\r\n\t\tinput[type=\"button\"].alt,\r\n\t\tbutton.alt,\r\n\t\t.button.alt {\r\n\t\t\tbackground-color: transparent;\r\n\t\t\tbox-shadow: inset 0 0 0 2px #e5474b;\r\n\t\t\tcolor: #e5474b !important;\r\n\t\t}\r\n\r\n\tinput[type=\"submit\"].alt:hover,\r\n\t\t\tinput[type=\"reset\"].alt:hover,\r\n\t\t\tinput[type=\"button\"].alt:hover,\r\n\t\t\tbutton.alt:hover,\r\n\t\t\t.button.alt:hover {\r\n\t\t\t\tbackground: #fceced;\r\n\t\t\t}\r\n\r\n\tinput[type=\"submit\"].alt:active,\r\n\t\t\tinput[type=\"reset\"].alt:active,\r\n\t\t\tinput[type=\"button\"].alt:active,\r\n\t\t\tbutton.alt:active,\r\n\t\t\t.button.alt:active {\r\n\t\t\t\tbackground-color: #f9dadb;\r\n\t\t\t}\r\n\r\n\tinput[type=\"submit\"].alt.icon:before,\r\n\t\t\tinput[type=\"reset\"].alt.icon:before,\r\n\t\t\tinput[type=\"button\"].alt.icon:before,\r\n\t\t\tbutton.alt.icon:before,\r\n\t\t\t.button.alt.icon:before {\r\n\t\t\t\tcolor: #717171;\r\n\t\t\t}\r\n\r\n\tinput[type=\"submit\"].special,\r\n\t\tinput[type=\"reset\"].special,\r\n\t\tinput[type=\"button\"].special,\r\n\t\tbutton.special,\r\n\t\t.button.special {\r\n\t\t\tbackground-color: #e5474b;\r\n\t\t\tcolor: #ffffff !important;\r\n\t\t}\r\n\r\n\tinput[type=\"submit\"].special:hover,\r\n\t\t\tinput[type=\"reset\"].special:hover,\r\n\t\t\tinput[type=\"button\"].special:hover,\r\n\t\t\tbutton.special:hover,\r\n\t\t\t.button.special:hover {\r\n\t\t\t\tbackground-color: #e85d61;\r\n\t\t\t}\r\n\r\n\tinput[type=\"submit\"].special:active,\r\n\t\t\tinput[type=\"reset\"].special:active,\r\n\t\t\tinput[type=\"button\"].special:active,\r\n\t\t\tbutton.special:active,\r\n\t\t\t.button.special:active {\r\n\t\t\t\tbackground-color: #e23135;\r\n\t\t\t}\r\n\r\n\t/* Form */\r\n\r\n\tform {\r\n\t\tmargin: 0 0 2em 0;\r\n\t}\r\n\r\n\tform .field {\r\n\t\t\tmargin: 0 0 2em 0;\r\n\t\t}\r\n\r\n\tform .field.half {\r\n\t\t\t\twidth: 50%;\r\n\t\t\t\tfloat: left;\r\n\t\t\t\tpadding: 0 0 0 1em;\r\n\t\t\t}\r\n\r\n\tform .field.half.first {\r\n\t\t\t\t\tpadding: 0 1em 0 0;\r\n\t\t\t\t}\r\n\r\n\tform > .actions {\r\n\t\t\tmargin: 2.5em 0 0 0 !important;\r\n\t\t}\r\n\r\n\t@media screen and (max-width: 736px) {\r\n\r\n\t\t\tform .field {\r\n\t\t\t\tmargin: 0 0 1.5em 0;\r\n\t\t\t}\r\n\r\n\t\t\t\tform .field.half {\r\n\t\t\t\t\tpadding: 0 0 0 0.75em;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t\tform .field.half.first {\r\n\t\t\t\t\t\tpadding: 0 0.75em 0 0;\r\n\t\t\t\t\t}\r\n\r\n\t\t\tform > .actions {\r\n\t\t\t\tmargin: 2em 0 0 0 !important;\r\n\t\t\t}\r\n\r\n\t\t}\r\n\r\n\t@media screen and (max-width: 480px) {\r\n\r\n\t\t\tform .field.half {\r\n\t\t\t\twidth: 100%;\r\n\t\t\t\tfloat: none;\r\n\t\t\t\tpadding: 0;\r\n\t\t\t}\r\n\r\n\t\t\t\tform .field.half.first {\r\n\t\t\t\t\tpadding: 0;\r\n\t\t\t\t}\r\n\r\n\t\t}\r\n\r\n\tlabel {\r\n\t\tdisplay: block;\r\n\t\tfont-size: 0.9em;\r\n\t\ttext-transform: uppercase;\r\n\t\tfont-weight: 700;\r\n\t\tmargin: 0 0 1em 0;\r\n\t}\r\n\r\n\tinput[type=\"text\"],\r\n\tinput[type=\"password\"],\r\n\tinput[type=\"email\"],\r\n\tselect,\r\n\ttextarea {\r\n\t\t-moz-appearance: none;\r\n\t\t-webkit-appearance: none;\r\n\t\t-ms-appearance: none;\r\n\t\tappearance: none;\r\n\t\tborder-radius: 0;\r\n\t\tborder: none;\r\n\t\tborder: solid 3px;\r\n\t\tcolor: inherit;\r\n\t\tdisplay: block;\r\n\t\toutline: 0;\r\n\t\tpadding: 0 1em;\r\n\t\ttext-decoration: none;\r\n\t\twidth: 100%;\r\n\t}\r\n\r\n\tinput[type=\"text\"]:invalid,\r\n\t\tinput[type=\"password\"]:invalid,\r\n\t\tinput[type=\"email\"]:invalid,\r\n\t\tselect:invalid,\r\n\t\ttextarea:invalid {\r\n\t\t\tbox-shadow: none;\r\n\t\t}\r\n\r\n\t.select-wrapper {\r\n\t\ttext-decoration: none;\r\n\t\tdisplay: block;\r\n\t\tposition: relative;\r\n\t}\r\n\r\n\t.select-wrapper:before {\r\n\t\t\t-moz-osx-font-smoothing: grayscale;\r\n\t\t\t-webkit-font-smoothing: antialiased;\r\n\t\t\tfont-family: FontAwesome;\r\n\t\t\tfont-style: normal;\r\n\t\t\tfont-weight: normal;\r\n\t\t\ttext-transform: none !important;\r\n\t\t}\r\n\r\n\t.select-wrapper:before {\r\n\t\t\tcontent: '\\f078';\r\n\t\t\tdisplay: block;\r\n\t\t\theight: 2.75em;\r\n\t\t\tline-height: 2.75em;\r\n\t\t\tpointer-events: none;\r\n\t\t\tposition: absolute;\r\n\t\t\tright: 0;\r\n\t\t\ttext-align: center;\r\n\t\t\ttop: 0;\r\n\t\t\twidth: 2.75em;\r\n\t\t}\r\n\r\n\t.select-wrapper select::-ms-expand {\r\n\t\t\tdisplay: none;\r\n\t\t}\r\n\r\n\tinput[type=\"text\"],\r\n\tinput[type=\"password\"],\r\n\tinput[type=\"email\"],\r\n\tselect {\r\n\t\theight: 2.75em;\r\n\t}\r\n\r\n\ttextarea {\r\n\t\tpadding: 0.75em 1em;\r\n\t}\r\n\r\n\tinput[type=\"checkbox\"],\r\n\tinput[type=\"radio\"] {\r\n\t\t-moz-appearance: none;\r\n\t\t-webkit-appearance: none;\r\n\t\t-ms-appearance: none;\r\n\t\tappearance: none;\r\n\t\tdisplay: block;\r\n\t\tfloat: left;\r\n\t\tmargin-right: -2em;\r\n\t\topacity: 0;\r\n\t\twidth: 1em;\r\n\t\tz-index: -1;\r\n\t}\r\n\r\n\tinput[type=\"checkbox\"] + label,\r\n\t\tinput[type=\"radio\"] + label {\r\n\t\t\ttext-decoration: none;\r\n\t\t\tcursor: pointer;\r\n\t\t\tdisplay: inline-block;\r\n\t\t\tfont-size: 1em;\r\n\t\t\tfont-weight: 300;\r\n\t\t\tpadding-left: 2.4em;\r\n\t\t\tpadding-right: 0.75em;\r\n\t\t\tposition: relative;\r\n\t\t}\r\n\r\n\tinput[type=\"checkbox\"] + label:before,\r\n\t\t\tinput[type=\"radio\"] + label:before {\r\n\t\t\t\t-moz-osx-font-smoothing: grayscale;\r\n\t\t\t\t-webkit-font-smoothing: antialiased;\r\n\t\t\t\tfont-family: FontAwesome;\r\n\t\t\t\tfont-style: normal;\r\n\t\t\t\tfont-weight: normal;\r\n\t\t\t\ttext-transform: none !important;\r\n\t\t\t}\r\n\r\n\tinput[type=\"checkbox\"] + label:before,\r\n\t\t\tinput[type=\"radio\"] + label:before {\r\n\t\t\t\tborder-radius: 0;\r\n\t\t\t\tborder: solid 1px;\r\n\t\t\t\tcontent: '';\r\n\t\t\t\tdisplay: inline-block;\r\n\t\t\t\theight: 1.65em;\r\n\t\t\t\tleft: 0;\r\n\t\t\t\tline-height: 1.58125em;\r\n\t\t\t\tposition: absolute;\r\n\t\t\t\ttext-align: center;\r\n\t\t\t\ttop: 0;\r\n\t\t\t\twidth: 1.65em;\r\n\t\t\t}\r\n\r\n\tinput[type=\"checkbox\"]:checked + label:before,\r\n\t\tinput[type=\"radio\"]:checked + label:before {\r\n\t\t\tcontent: '\\f00c';\r\n\t\t}\r\n\r\n\tinput[type=\"checkbox\"] + label:before {\r\n\t\tborder-radius: 0;\r\n\t}\r\n\r\n\tinput[type=\"radio\"] + label:before {\r\n\t\tborder-radius: 100%;\r\n\t}\r\n\r\n\t::-webkit-input-placeholder {\r\n\t\topacity: 1.0;\r\n\t}\r\n\r\n\t:-moz-placeholder {\r\n\t\topacity: 1.0;\r\n\t}\r\n\r\n\t::-moz-placeholder {\r\n\t\topacity: 1.0;\r\n\t}\r\n\r\n\t:-ms-input-placeholder {\r\n\t\topacity: 1.0;\r\n\t}\r\n\r\n\t.formerize-placeholder {\r\n\t\topacity: 1.0;\r\n\t}\r\n\r\n\tlabel {\r\n\t\tcolor: #e5474b;\r\n\t}\r\n\r\n\tinput[type=\"text\"],\r\n\tinput[type=\"password\"],\r\n\tinput[type=\"email\"],\r\n\tselect,\r\n\ttextarea {\r\n\t\tbackground: none;\r\n\t\tborder-color: #fceced;\r\n\t}\r\n\r\n\tinput[type=\"text\"]:focus,\r\n\t\tinput[type=\"password\"]:focus,\r\n\t\tinput[type=\"email\"]:focus,\r\n\t\tselect:focus,\r\n\t\ttextarea:focus {\r\n\t\t\tborder-color: #e5474b;\r\n\t\t\tbox-shadow: 0 0 0 1px #e5474b;\r\n\t\t}\r\n\r\n\t.select-wrapper:before {\r\n\t\tcolor: #e5474b;\r\n\t}\r\n\r\n\tinput[type=\"checkbox\"] + label,\r\n\tinput[type=\"radio\"] + label {\r\n\t\tcolor: #111111;\r\n\t}\r\n\r\n\tinput[type=\"checkbox\"] + label:before,\r\n\t\tinput[type=\"radio\"] + label:before {\r\n\t\t\tbackground: none;\r\n\t\t\tborder-color: #e5474b;\r\n\t\t}\r\n\r\n\tinput[type=\"checkbox\"]:checked + label:before,\r\n\tinput[type=\"radio\"]:checked + label:before {\r\n\t\tbackground-color: #e5474b;\r\n\t\tborder-color: #e5474b;\r\n\t\tcolor: #ffffff;\r\n\t}\r\n\r\n\tinput[type=\"checkbox\"]:focus + label:before,\r\n\tinput[type=\"radio\"]:focus + label:before {\r\n\t\tborder-color: #e5474b;\r\n\t\tbox-shadow: 0 0 0 1px #e5474b;\r\n\t}\r\n\r\n\t::-webkit-input-placeholder {\r\n\t\tcolor: #717171 !important;\r\n\t}\r\n\r\n\t:-moz-placeholder {\r\n\t\tcolor: #717171 !important;\r\n\t}\r\n\r\n\t::-moz-placeholder {\r\n\t\tcolor: #717171 !important;\r\n\t}\r\n\r\n\t:-ms-input-placeholder {\r\n\t\tcolor: #717171 !important;\r\n\t}\r\n\r\n\t.formerize-placeholder {\r\n\t\tcolor: #717171 !important;\r\n\t}\r\n\r\n\t/* Icon */\r\n\r\n\t.icon {\r\n\t\ttext-decoration: none;\r\n\t\tborder-bottom: none;\r\n\t\tposition: relative;\r\n\t}\r\n\r\n\t.icon:before {\r\n\t\t\t-moz-osx-font-smoothing: grayscale;\r\n\t\t\t-webkit-font-smoothing: antialiased;\r\n\t\t\tfont-family: FontAwesome;\r\n\t\t\tfont-style: normal;\r\n\t\t\tfont-weight: normal;\r\n\t\t\ttext-transform: none !important;\r\n\t\t}\r\n\r\n\t.icon > .label {\r\n\t\t\tdisplay: none;\r\n\t\t}\r\n\r\n\t/* Image */\r\n\r\n\t.image {\r\n\t\tborder-radius: 0;\r\n\t\tborder: 0;\r\n\t\tdisplay: inline-block;\r\n\t\tposition: relative;\r\n\t}\r\n\r\n\t.image img {\r\n\t\t\tborder-radius: 0;\r\n\t\t\tdisplay: block;\r\n\t\t}\r\n\r\n\t.image.left, .image.right {\r\n\t\t\tmax-width: 40%;\r\n\t\t}\r\n\r\n\t.image.left img, .image.right img {\r\n\t\t\t\twidth: 100%;\r\n\t\t\t}\r\n\r\n\t.image.left {\r\n\t\t\tfloat: left;\r\n\t\t\tmargin: 0 1.5em 1em 0;\r\n\t\t\ttop: 0.25em;\r\n\t\t}\r\n\r\n\t.image.right {\r\n\t\t\tfloat: right;\r\n\t\t\tmargin: 0 0 1em 1.5em;\r\n\t\t\ttop: 0.25em;\r\n\t\t}\r\n\r\n\t.image.fit {\r\n\t\t\tdisplay: block;\r\n\t\t\tmargin: 0 0 2em 0;\r\n\t\t\twidth: 100%;\r\n\t\t}\r\n\r\n\t.image.fit img {\r\n\t\t\t\twidth: 100%;\r\n\t\t\t}\r\n\r\n\t.image.main {\r\n\t\t\tdisplay: block;\r\n\t\t\tmargin: 0 0 3em 0;\r\n\t\t\twidth: 100%;\r\n\t\t}\r\n\r\n\t.image.main img {\r\n\t\t\t\twidth: 100%;\r\n\t\t\t}\r\n\r\n\t/* List */\r\n\r\n\tol {\r\n\t\tlist-style: decimal;\r\n\t\tmargin: 0 0 2em 0;\r\n\t\tpadding-left: 1.25em;\r\n\t}\r\n\r\n\tol li {\r\n\t\t\tpadding-left: 0.25em;\r\n\t\t}\r\n\r\n\tul {\r\n\t\tlist-style: disc;\r\n\t\tmargin: 0 0 2em 0;\r\n\t\tpadding-left: 1em;\r\n\t}\r\n\r\n\tul li {\r\n\t\t\tpadding-left: 0.5em;\r\n\t\t}\r\n\r\n\tul.alt {\r\n\t\t\tlist-style: none;\r\n\t\t\tpadding-left: 0;\r\n\t\t}\r\n\r\n\tul.alt li {\r\n\t\t\t\tborder-top: solid 1px;\r\n\t\t\t\tpadding: 0.5em 0;\r\n\t\t\t}\r\n\r\n\tul.alt li:first-child {\r\n\t\t\t\t\tborder-top: 0;\r\n\t\t\t\t\tpadding-top: 0;\r\n\t\t\t\t}\r\n\r\n\tul.icons {\r\n\t\t\tcursor: default;\r\n\t\t\tlist-style: none;\r\n\t\t\tpadding-left: 0;\r\n\t\t}\r\n\r\n\tul.icons li {\r\n\t\t\t\tdisplay: inline-block;\r\n\t\t\t\tpadding: 0 1em 0 0;\r\n\t\t\t}\r\n\r\n\tul.icons li:last-child {\r\n\t\t\t\t\tpadding-right: 0;\r\n\t\t\t\t}\r\n\r\n\tul.icons li .icon:before {\r\n\t\t\t\t\tfont-size: 2em;\r\n\t\t\t\t}\r\n\r\n\tul.actions {\r\n\t\t\tcursor: default;\r\n\t\t\tlist-style: none;\r\n\t\t\tpadding-left: 0;\r\n\t\t}\r\n\r\n\tul.actions li {\r\n\t\t\t\tdisplay: inline-block;\r\n\t\t\t\tpadding: 0 1em 0 0;\r\n\t\t\t\tvertical-align: middle;\r\n\t\t\t}\r\n\r\n\tul.actions li:last-child {\r\n\t\t\t\t\tpadding-right: 0;\r\n\t\t\t\t}\r\n\r\n\tul.actions.small li {\r\n\t\t\t\tpadding: 0 0.5em 0 0;\r\n\t\t\t}\r\n\r\n\tul.actions.vertical li {\r\n\t\t\t\tdisplay: block;\r\n\t\t\t\tpadding: 1em 0 0 0;\r\n\t\t\t}\r\n\r\n\tul.actions.vertical li:first-child {\r\n\t\t\t\t\tpadding-top: 0;\r\n\t\t\t\t}\r\n\r\n\tul.actions.vertical li > * {\r\n\t\t\t\t\tmargin-bottom: 0;\r\n\t\t\t\t}\r\n\r\n\tul.actions.vertical.small li {\r\n\t\t\t\tpadding: 0.5em 0 0 0;\r\n\t\t\t}\r\n\r\n\tul.actions.vertical.small li:first-child {\r\n\t\t\t\t\tpadding-top: 0;\r\n\t\t\t\t}\r\n\r\n\tul.actions.fit {\r\n\t\t\t\tdisplay: table;\r\n\t\t\t\tmargin-left: -1em;\r\n\t\t\t\tpadding: 0;\r\n\t\t\t\ttable-layout: fixed;\r\n\t\t\t\twidth: calc(100% + 1em);\r\n\t\t\t}\r\n\r\n\tul.actions.fit li {\r\n\t\t\t\t\tdisplay: table-cell;\r\n\t\t\t\t\tpadding: 0 0 0 1em;\r\n\t\t\t\t}\r\n\r\n\tul.actions.fit li > * {\r\n\t\t\t\t\t\tmargin-bottom: 0;\r\n\t\t\t\t\t}\r\n\r\n\tul.actions.fit.small {\r\n\t\t\t\t\tmargin-left: -0.5em;\r\n\t\t\t\t\twidth: calc(100% + 0.5em);\r\n\t\t\t\t}\r\n\r\n\tul.actions.fit.small li {\r\n\t\t\t\t\t\tpadding: 0 0 0 0.5em;\r\n\t\t\t\t\t}\r\n\r\n\tdl {\r\n\t\tmargin: 0 0 2em 0;\r\n\t}\r\n\r\n\tdl dt {\r\n\t\t\tdisplay: block;\r\n\t\t\tfont-weight: 700;\r\n\t\t\tmargin: 0 0 1em 0;\r\n\t\t}\r\n\r\n\tdl dd {\r\n\t\t\tmargin-left: 2em;\r\n\t\t}\r\n\r\n\tul.alt li {\r\n\t\tborder-top-color: #e5474b;\r\n\t}\r\n\r\n\t/* Section/Article */\r\n\r\n\tsection.special, article.special {\r\n\t\ttext-align: center;\r\n\t}\r\n\r\n\tsection .inner {\r\n\t\tmax-width: 65em;\r\n\t\twidth: calc(100% - 6em);\r\n\t\tmargin: 0 auto;\r\n\t}\r\n\r\n\t@media screen and (max-width: 480px) {\r\n\r\n\t\t\tsection .inner {\r\n\t\t\t\tmax-width: 90%;\r\n\t\t\t\twidth: 90%;\r\n\t\t\t}\r\n\r\n\t\t}\r\n\r\n\theader p {\r\n\t\tposition: relative;\r\n\t\tmargin: 0 0 1.5em 0;\r\n\t}\r\n\r\n\theader h2 + p {\r\n\t\tfont-size: 1.25em;\r\n\t\tmargin-top: -1em;\r\n\t}\r\n\r\n\theader h3 + p {\r\n\t\tfont-size: 1.1em;\r\n\t\tmargin-top: -0.8em;\r\n\t}\r\n\r\n\theader h4 + p,\r\n\theader h5 + p,\r\n\theader h6 + p {\r\n\t\tfont-size: 0.9em;\r\n\t\tmargin-top: -0.6em;\r\n\t}\r\n\r\n\theader p {\r\n\t\tcolor: #717171;\r\n\t}\r\n\r\n\t/* Table */\r\n\r\n\t.table-wrapper {\r\n\t\t-webkit-overflow-scrolling: touch;\r\n\t\toverflow-x: auto;\r\n\t}\r\n\r\n\ttable {\r\n\t\tmargin: 0 0 2em 0;\r\n\t\twidth: 100%;\r\n\t}\r\n\r\n\ttable tbody tr {\r\n\t\t\tborder: solid 1px;\r\n\t\t\tborder-left: 0;\r\n\t\t\tborder-right: 0;\r\n\t\t}\r\n\r\n\ttable td {\r\n\t\t\tpadding: 0.75em 0.75em;\r\n\t\t}\r\n\r\n\ttable th {\r\n\t\t\tfont-size: 0.9em;\r\n\t\t\tfont-weight: 700;\r\n\t\t\tpadding: 0 0.75em 0.75em 0.75em;\r\n\t\t\ttext-align: left;\r\n\t\t}\r\n\r\n\ttable thead {\r\n\t\t\tborder-bottom: solid 2px;\r\n\t\t}\r\n\r\n\ttable tfoot {\r\n\t\t\tborder-top: solid 2px;\r\n\t\t}\r\n\r\n\ttable.alt {\r\n\t\t\tborder-collapse: separate;\r\n\t\t}\r\n\r\n\ttable.alt tbody tr td {\r\n\t\t\t\tborder: solid 1px;\r\n\t\t\t\tborder-left-width: 0;\r\n\t\t\t\tborder-top-width: 0;\r\n\t\t\t}\r\n\r\n\ttable.alt tbody tr td:first-child {\r\n\t\t\t\t\tborder-left-width: 1px;\r\n\t\t\t\t}\r\n\r\n\ttable.alt tbody tr:first-child td {\r\n\t\t\t\tborder-top-width: 1px;\r\n\t\t\t}\r\n\r\n\ttable.alt thead {\r\n\t\t\t\tborder-bottom: 0;\r\n\t\t\t}\r\n\r\n\ttable.alt tfoot {\r\n\t\t\t\tborder-top: 0;\r\n\t\t\t}\r\n\r\n\ttable tbody tr {\r\n\t\tborder-color: #e5474b;\r\n\t}\r\n\r\n\ttable tbody tr:nth-child(2n + 1) {\r\n\t\t\tbackground-color: none;\r\n\t\t}\r\n\r\n\ttable th {\r\n\t\tcolor: #e5474b;\r\n\t}\r\n\r\n\ttable thead {\r\n\t\tborder-bottom-color: #e5474b;\r\n\t}\r\n\r\n\ttable tfoot {\r\n\t\tborder-top-color: #e5474b;\r\n\t}\r\n\r\n\ttable.alt tbody tr td {\r\n\t\tborder-color: #e5474b;\r\n\t}\r\n\r\n\t/* Wrapper */\r\n\r\n\t.wrapper {\r\n\t\tposition: relative;\r\n\t}\r\n\r\n\t.wrapper > .inner {\r\n\t\t\tmargin: 0 auto;\r\n\t\t\twidth: 60em;\r\n\t\t}\r\n\r\n\t.wrapper.style1 {\r\n\t\t\tbackground-color: #e5474b;\r\n\t\t\tcolor: #f2a3a5;\r\n\t\t}\r\n\r\n\t.wrapper.style1 input, .wrapper.style1 select, .wrapper.style1 textarea {\r\n\t\t\t\tcolor: #ffffff;\r\n\t\t\t}\r\n\r\n\t.wrapper.style1 a {\r\n\t\t\t\tcolor: #ffffff;\r\n\t\t\t}\r\n\r\n\t.wrapper.style1 strong, .wrapper.style1 b {\r\n\t\t\t\tcolor: #ffffff;\r\n\t\t\t}\r\n\r\n\t.wrapper.style1 h1, .wrapper.style1 h2, .wrapper.style1 h3, .wrapper.style1 h4, .wrapper.style1 h5, .wrapper.style1 h6 {\r\n\t\t\t\tcolor: #fff;\r\n\t\t\t}\r\n\r\n\t.wrapper.style1 blockquote {\r\n\t\t\t\tborder-left-color: #fff;\r\n\t\t\t}\r\n\r\n\t.wrapper.style1 code {\r\n\t\t\t\tbackground: none;\r\n\t\t\t\tborder-color: #fff;\r\n\t\t\t}\r\n\r\n\t.wrapper.style1 hr {\r\n\t\t\t\tborder-bottom-color: #fff;\r\n\t\t\t}\r\n\r\n\t.wrapper.style1 .box {\r\n\t\t\t\tborder-color: #fff;\r\n\t\t\t}\r\n\r\n\t.wrapper.style1 input[type=\"submit\"],\r\n\t\t\t.wrapper.style1 input[type=\"reset\"],\r\n\t\t\t.wrapper.style1 input[type=\"button\"],\r\n\t\t\t.wrapper.style1 button,\r\n\t\t\t.wrapper.style1 .button {\r\n\t\t\t\tbackground-color: #5a5a5a;\r\n\t\t\t\tcolor: #ffffff !important;\r\n\t\t\t}\r\n\r\n\t.wrapper.style1 input[type=\"submit\"]:hover,\r\n\t\t\t\t.wrapper.style1 input[type=\"reset\"]:hover,\r\n\t\t\t\t.wrapper.style1 input[type=\"button\"]:hover,\r\n\t\t\t\t.wrapper.style1 button:hover,\r\n\t\t\t\t.wrapper.style1 .button:hover {\r\n\t\t\t\t\tbackground-color: #676767;\r\n\t\t\t\t}\r\n\r\n\t.wrapper.style1 input[type=\"submit\"]:active,\r\n\t\t\t\t.wrapper.style1 input[type=\"reset\"]:active,\r\n\t\t\t\t.wrapper.style1 input[type=\"button\"]:active,\r\n\t\t\t\t.wrapper.style1 button:active,\r\n\t\t\t\t.wrapper.style1 .button:active {\r\n\t\t\t\t\tbackground-color: #4d4d4d;\r\n\t\t\t\t}\r\n\r\n\t.wrapper.style1 input[type=\"submit\"].alt,\r\n\t\t\t\t.wrapper.style1 input[type=\"reset\"].alt,\r\n\t\t\t\t.wrapper.style1 input[type=\"button\"].alt,\r\n\t\t\t\t.wrapper.style1 button.alt,\r\n\t\t\t\t.wrapper.style1 .button.alt {\r\n\t\t\t\t\tbackground-color: transparent;\r\n\t\t\t\t\tbox-shadow: inset 0 0 0 2px #fff;\r\n\t\t\t\t\tcolor: #ffffff !important;\r\n\t\t\t\t}\r\n\r\n\t.wrapper.style1 input[type=\"submit\"].alt:hover,\r\n\t\t\t\t\t.wrapper.style1 input[type=\"reset\"].alt:hover,\r\n\t\t\t\t\t.wrapper.style1 input[type=\"button\"].alt:hover,\r\n\t\t\t\t\t.wrapper.style1 button.alt:hover,\r\n\t\t\t\t\t.wrapper.style1 .button.alt:hover {\r\n\t\t\t\t\t\tbackground: rgba(255, 255, 255, 0.25);\r\n\t\t\t\t\t}\r\n\r\n\t.wrapper.style1 input[type=\"submit\"].alt:active,\r\n\t\t\t\t\t.wrapper.style1 input[type=\"reset\"].alt:active,\r\n\t\t\t\t\t.wrapper.style1 input[type=\"button\"].alt:active,\r\n\t\t\t\t\t.wrapper.style1 button.alt:active,\r\n\t\t\t\t\t.wrapper.style1 .button.alt:active {\r\n\t\t\t\t\t\tbackground-color: rgba(255, 255, 255, 0.2);\r\n\t\t\t\t\t}\r\n\r\n\t.wrapper.style1 input[type=\"submit\"].alt.icon:before,\r\n\t\t\t\t\t.wrapper.style1 input[type=\"reset\"].alt.icon:before,\r\n\t\t\t\t\t.wrapper.style1 input[type=\"button\"].alt.icon:before,\r\n\t\t\t\t\t.wrapper.style1 button.alt.icon:before,\r\n\t\t\t\t\t.wrapper.style1 .button.alt.icon:before {\r\n\t\t\t\t\t\tcolor: #f8d1d2;\r\n\t\t\t\t\t}\r\n\r\n\t.wrapper.style1 input[type=\"submit\"].special,\r\n\t\t\t\t.wrapper.style1 input[type=\"reset\"].special,\r\n\t\t\t\t.wrapper.style1 input[type=\"button\"].special,\r\n\t\t\t\t.wrapper.style1 button.special,\r\n\t\t\t\t.wrapper.style1 .button.special {\r\n\t\t\t\t\tbackground-color: #ffffff;\r\n\t\t\t\t\tcolor: #e5474b !important;\r\n\t\t\t\t}\r\n\r\n\t.wrapper.style1 label {\r\n\t\t\t\tcolor: #ffffff;\r\n\t\t\t}\r\n\r\n\t.wrapper.style1 input[type=\"text\"],\r\n\t\t\t.wrapper.style1 input[type=\"password\"],\r\n\t\t\t.wrapper.style1 input[type=\"email\"],\r\n\t\t\t.wrapper.style1 select,\r\n\t\t\t.wrapper.style1 textarea {\r\n\t\t\t\tbackground: none;\r\n\t\t\t\tborder-color: rgba(255, 255, 255, 0.25);\r\n\t\t\t}\r\n\r\n\t.wrapper.style1 input[type=\"text\"]:focus,\r\n\t\t\t\t.wrapper.style1 input[type=\"password\"]:focus,\r\n\t\t\t\t.wrapper.style1 input[type=\"email\"]:focus,\r\n\t\t\t\t.wrapper.style1 select:focus,\r\n\t\t\t\t.wrapper.style1 textarea:focus {\r\n\t\t\t\t\tborder-color: #ffffff;\r\n\t\t\t\t\tbox-shadow: 0 0 0 1px #ffffff;\r\n\t\t\t\t}\r\n\r\n\t.wrapper.style1 .select-wrapper:before {\r\n\t\t\t\tcolor: #fff;\r\n\t\t\t}\r\n\r\n\t.wrapper.style1 input[type=\"checkbox\"] + label,\r\n\t\t\t.wrapper.style1 input[type=\"radio\"] + label {\r\n\t\t\t\tcolor: #f2a3a5;\r\n\t\t\t}\r\n\r\n\t.wrapper.style1 input[type=\"checkbox\"] + label:before,\r\n\t\t\t\t.wrapper.style1 input[type=\"radio\"] + label:before {\r\n\t\t\t\t\tbackground: none;\r\n\t\t\t\t\tborder-color: #fff;\r\n\t\t\t\t}\r\n\r\n\t.wrapper.style1 input[type=\"checkbox\"]:checked + label:before,\r\n\t\t\t.wrapper.style1 input[type=\"radio\"]:checked + label:before {\r\n\t\t\t\tbackground-color: #ffffff;\r\n\t\t\t\tborder-color: #ffffff;\r\n\t\t\t\tcolor: #e5474b;\r\n\t\t\t}\r\n\r\n\t.wrapper.style1 input[type=\"checkbox\"]:focus + label:before,\r\n\t\t\t.wrapper.style1 input[type=\"radio\"]:focus + label:before {\r\n\t\t\t\tborder-color: #ffffff;\r\n\t\t\t\tbox-shadow: 0 0 0 1px #ffffff;\r\n\t\t\t}\r\n\r\n\t.wrapper.style1 ::-webkit-input-placeholder {\r\n\t\t\t\tcolor: #f8d1d2 !important;\r\n\t\t\t}\r\n\r\n\t.wrapper.style1 :-moz-placeholder {\r\n\t\t\t\tcolor: #f8d1d2 !important;\r\n\t\t\t}\r\n\r\n\t.wrapper.style1 ::-moz-placeholder {\r\n\t\t\t\tcolor: #f8d1d2 !important;\r\n\t\t\t}\r\n\r\n\t.wrapper.style1 :-ms-input-placeholder {\r\n\t\t\t\tcolor: #f8d1d2 !important;\r\n\t\t\t}\r\n\r\n\t.wrapper.style1 .formerize-placeholder {\r\n\t\t\t\tcolor: #f8d1d2 !important;\r\n\t\t\t}\r\n\r\n\t.wrapper.style1 ul.alt li {\r\n\t\t\t\tborder-top-color: #fff;\r\n\t\t\t}\r\n\r\n\t.wrapper.style1 header p {\r\n\t\t\t\tcolor: #f8d1d2;\r\n\t\t\t}\r\n\r\n\t.wrapper.style1 table tbody tr {\r\n\t\t\t\tborder-color: #fff;\r\n\t\t\t}\r\n\r\n\t.wrapper.style1 table tbody tr:nth-child(2n + 1) {\r\n\t\t\t\t\tbackground-color: none;\r\n\t\t\t\t}\r\n\r\n\t.wrapper.style1 table th {\r\n\t\t\t\tcolor: #ffffff;\r\n\t\t\t}\r\n\r\n\t.wrapper.style1 table thead {\r\n\t\t\t\tborder-bottom-color: #fff;\r\n\t\t\t}\r\n\r\n\t.wrapper.style1 table tfoot {\r\n\t\t\t\tborder-top-color: #fff;\r\n\t\t\t}\r\n\r\n\t.wrapper.style1 table.alt tbody tr td {\r\n\t\t\t\tborder-color: #fff;\r\n\t\t\t}\r\n\r\n\t.wrapper.style2 {\r\n\t\t\tbackground-color: #5a5a5a;\r\n\t\t\tcolor: #d5d5d5;\r\n\t\t}\r\n\r\n\t.wrapper.style2 input, .wrapper.style2 select, .wrapper.style2 textarea {\r\n\t\t\t\tcolor: #ffffff;\r\n\t\t\t}\r\n\r\n\t.wrapper.style2 a {\r\n\t\t\t\tcolor: #e5474b;\r\n\t\t\t}\r\n\r\n\t.wrapper.style2 strong, .wrapper.style2 b {\r\n\t\t\t\tcolor: #ffffff;\r\n\t\t\t}\r\n\r\n\t.wrapper.style2 blockquote {\r\n\t\t\t\tborder-left-color: rgba(255, 255, 255, 0.15);\r\n\t\t\t}\r\n\r\n\t.wrapper.style2 code {\r\n\t\t\t\tbackground: rgba(255, 255, 255, 0.075);\r\n\t\t\t\tborder-color: rgba(255, 255, 255, 0.15);\r\n\t\t\t}\r\n\r\n\t.wrapper.style2 hr {\r\n\t\t\t\tborder-bottom-color: rgba(255, 255, 255, 0.15);\r\n\t\t\t}\r\n\r\n\t.wrapper.style2 .box {\r\n\t\t\t\tborder-color: rgba(255, 255, 255, 0.15);\r\n\t\t\t}\r\n\r\n\t.wrapper.style2 input[type=\"submit\"],\r\n\t\t\t.wrapper.style2 input[type=\"reset\"],\r\n\t\t\t.wrapper.style2 input[type=\"button\"],\r\n\t\t\t.wrapper.style2 button,\r\n\t\t\t.wrapper.style2 .button {\r\n\t\t\t\tbackground-color: #ffffff;\r\n\t\t\t\tcolor: #5a5a5a !important;\r\n\t\t\t}\r\n\r\n\t.wrapper.style2 input[type=\"submit\"].alt,\r\n\t\t\t\t.wrapper.style2 input[type=\"reset\"].alt,\r\n\t\t\t\t.wrapper.style2 input[type=\"button\"].alt,\r\n\t\t\t\t.wrapper.style2 button.alt,\r\n\t\t\t\t.wrapper.style2 .button.alt {\r\n\t\t\t\t\tbackground-color: transparent;\r\n\t\t\t\t\tbox-shadow: inset 0 0 0 2px rgba(255, 255, 255, 0.15);\r\n\t\t\t\t\tcolor: #ffffff !important;\r\n\t\t\t\t}\r\n\r\n\t.wrapper.style2 input[type=\"submit\"].alt:hover,\r\n\t\t\t\t\t.wrapper.style2 input[type=\"reset\"].alt:hover,\r\n\t\t\t\t\t.wrapper.style2 input[type=\"button\"].alt:hover,\r\n\t\t\t\t\t.wrapper.style2 button.alt:hover,\r\n\t\t\t\t\t.wrapper.style2 .button.alt:hover {\r\n\t\t\t\t\t\tbackground: rgba(255, 255, 255, 0.5);\r\n\t\t\t\t\t}\r\n\r\n\t.wrapper.style2 input[type=\"submit\"].alt:active,\r\n\t\t\t\t\t.wrapper.style2 input[type=\"reset\"].alt:active,\r\n\t\t\t\t\t.wrapper.style2 input[type=\"button\"].alt:active,\r\n\t\t\t\t\t.wrapper.style2 button.alt:active,\r\n\t\t\t\t\t.wrapper.style2 .button.alt:active {\r\n\t\t\t\t\t\tbackground-color: rgba(255, 255, 255, 0.2);\r\n\t\t\t\t\t}\r\n\r\n\t.wrapper.style2 input[type=\"submit\"].alt.icon:before,\r\n\t\t\t\t\t.wrapper.style2 input[type=\"reset\"].alt.icon:before,\r\n\t\t\t\t\t.wrapper.style2 input[type=\"button\"].alt.icon:before,\r\n\t\t\t\t\t.wrapper.style2 button.alt.icon:before,\r\n\t\t\t\t\t.wrapper.style2 .button.alt.icon:before {\r\n\t\t\t\t\t\tcolor: #bdbdbd;\r\n\t\t\t\t\t}\r\n\r\n\t.wrapper.style2 input[type=\"submit\"].special,\r\n\t\t\t\t.wrapper.style2 input[type=\"reset\"].special,\r\n\t\t\t\t.wrapper.style2 input[type=\"button\"].special,\r\n\t\t\t\t.wrapper.style2 button.special,\r\n\t\t\t\t.wrapper.style2 .button.special {\r\n\t\t\t\t\tbackground-color: #e5474b;\r\n\t\t\t\t\tcolor: #ffffff !important;\r\n\t\t\t\t}\r\n\r\n\t.wrapper.style2 input[type=\"submit\"].special:hover,\r\n\t\t\t\t\t.wrapper.style2 input[type=\"reset\"].special:hover,\r\n\t\t\t\t\t.wrapper.style2 input[type=\"button\"].special:hover,\r\n\t\t\t\t\t.wrapper.style2 button.special:hover,\r\n\t\t\t\t\t.wrapper.style2 .button.special:hover {\r\n\t\t\t\t\t\tbackground-color: #e85d61;\r\n\t\t\t\t\t}\r\n\r\n\t.wrapper.style2 input[type=\"submit\"].special:active,\r\n\t\t\t\t\t.wrapper.style2 input[type=\"reset\"].special:active,\r\n\t\t\t\t\t.wrapper.style2 input[type=\"button\"].special:active,\r\n\t\t\t\t\t.wrapper.style2 button.special:active,\r\n\t\t\t\t\t.wrapper.style2 .button.special:active {\r\n\t\t\t\t\t\tbackground-color: #e23135;\r\n\t\t\t\t\t}\r\n\r\n\t.wrapper.style2 label {\r\n\t\t\t\tcolor: #ffffff;\r\n\t\t\t}\r\n\r\n\t.wrapper.style2 input[type=\"text\"],\r\n\t\t\t.wrapper.style2 input[type=\"password\"],\r\n\t\t\t.wrapper.style2 input[type=\"email\"],\r\n\t\t\t.wrapper.style2 select,\r\n\t\t\t.wrapper.style2 textarea {\r\n\t\t\t\tbackground: rgba(255, 255, 255, 0.075);\r\n\t\t\t\tborder-color: rgba(255, 255, 255, 0.5);\r\n\t\t\t}\r\n\r\n\t.wrapper.style2 input[type=\"text\"]:focus,\r\n\t\t\t\t.wrapper.style2 input[type=\"password\"]:focus,\r\n\t\t\t\t.wrapper.style2 input[type=\"email\"]:focus,\r\n\t\t\t\t.wrapper.style2 select:focus,\r\n\t\t\t\t.wrapper.style2 textarea:focus {\r\n\t\t\t\t\tborder-color: #e5474b;\r\n\t\t\t\t\tbox-shadow: 0 0 0 1px #e5474b;\r\n\t\t\t\t}\r\n\r\n\t.wrapper.style2 .select-wrapper:before {\r\n\t\t\t\tcolor: rgba(255, 255, 255, 0.15);\r\n\t\t\t}\r\n\r\n\t.wrapper.style2 input[type=\"checkbox\"] + label,\r\n\t\t\t.wrapper.style2 input[type=\"radio\"] + label {\r\n\t\t\t\tcolor: #d5d5d5;\r\n\t\t\t}\r\n\r\n\t.wrapper.style2 input[type=\"checkbox\"] + label:before,\r\n\t\t\t\t.wrapper.style2 input[type=\"radio\"] + label:before {\r\n\t\t\t\t\tbackground: rgba(255, 255, 255, 0.075);\r\n\t\t\t\t\tborder-color: rgba(255, 255, 255, 0.15);\r\n\t\t\t\t}\r\n\r\n\t.wrapper.style2 input[type=\"checkbox\"]:checked + label:before,\r\n\t\t\t.wrapper.style2 input[type=\"radio\"]:checked + label:before {\r\n\t\t\t\tbackground-color: #e5474b;\r\n\t\t\t\tborder-color: #e5474b;\r\n\t\t\t\tcolor: #ffffff;\r\n\t\t\t}\r\n\r\n\t.wrapper.style2 input[type=\"checkbox\"]:focus + label:before,\r\n\t\t\t.wrapper.style2 input[type=\"radio\"]:focus + label:before {\r\n\t\t\t\tborder-color: #e5474b;\r\n\t\t\t\tbox-shadow: 0 0 0 1px #e5474b;\r\n\t\t\t}\r\n\r\n\t.wrapper.style2 ::-webkit-input-placeholder {\r\n\t\t\t\tcolor: #bdbdbd !important;\r\n\t\t\t}\r\n\r\n\t.wrapper.style2 :-moz-placeholder {\r\n\t\t\t\tcolor: #bdbdbd !important;\r\n\t\t\t}\r\n\r\n\t.wrapper.style2 ::-moz-placeholder {\r\n\t\t\t\tcolor: #bdbdbd !important;\r\n\t\t\t}\r\n\r\n\t.wrapper.style2 :-ms-input-placeholder {\r\n\t\t\t\tcolor: #bdbdbd !important;\r\n\t\t\t}\r\n\r\n\t.wrapper.style2 .formerize-placeholder {\r\n\t\t\t\tcolor: #bdbdbd !important;\r\n\t\t\t}\r\n\r\n\t.wrapper.style2 ul.alt li {\r\n\t\t\t\tborder-top-color: rgba(255, 255, 255, 0.15);\r\n\t\t\t}\r\n\r\n\t.wrapper.style2 header p {\r\n\t\t\t\tcolor: #bdbdbd;\r\n\t\t\t}\r\n\r\n\t.wrapper.style2 table tbody tr {\r\n\t\t\t\tborder-color: rgba(255, 255, 255, 0.15);\r\n\t\t\t}\r\n\r\n\t.wrapper.style2 table tbody tr:nth-child(2n + 1) {\r\n\t\t\t\t\tbackground-color: rgba(255, 255, 255, 0.075);\r\n\t\t\t\t}\r\n\r\n\t.wrapper.style2 table th {\r\n\t\t\t\tcolor: #ffffff;\r\n\t\t\t}\r\n\r\n\t.wrapper.style2 table thead {\r\n\t\t\t\tborder-bottom-color: rgba(255, 255, 255, 0.15);\r\n\t\t\t}\r\n\r\n\t.wrapper.style2 table tfoot {\r\n\t\t\t\tborder-top-color: rgba(255, 255, 255, 0.15);\r\n\t\t\t}\r\n\r\n\t.wrapper.style2 table.alt tbody tr td {\r\n\t\t\t\tborder-color: rgba(255, 255, 255, 0.15);\r\n\t\t\t}\r\n\r\n\t@media screen and (max-width: 1280px) {\r\n\r\n\t\t\t.wrapper > .inner {\r\n\t\t\t\twidth: 65em;\r\n\t\t\t}\r\n\r\n\t\t}\r\n\r\n\t@media screen and (max-width: 980px) {\r\n\r\n\t\t\t.wrapper > .inner {\r\n\t\t\t\twidth: 100%;\r\n\t\t\t}\r\n\r\n\t\t}\r\n\r\n\t/* Header */\r\n\r\n\tbody {\r\n\t\tposition: relative;\r\n\t\tpadding-top: 5em;\r\n\t}\r\n\r\n\t#header {\r\n\t\tbackground: #1c1c1c;\r\n\t\tcolor: #d5d5d5;\r\n\t\tcursor: default;\r\n\t\theight: 5em;\r\n\t\tleft: 0;\r\n\t\tline-height: 5em;\r\n\t\tposition: fixed;\r\n\t\ttext-align: right;\r\n\t\ttop: 0;\r\n\t\twidth: 100%;\r\n\t\tz-index: 10001;\r\n\t}\r\n\r\n\t#header .inner {\r\n\t\t\tmax-width: 65em;\r\n\t\t\twidth: calc(100% - 6em);\r\n\t\t\tmargin: 0 auto;\r\n\t\t\tposition: relative;\r\n\t\t}\r\n\r\n\t@media screen and (max-width: 480px) {\r\n\r\n\t\t\t\t#header .inner {\r\n\t\t\t\t\tmax-width: 90%;\r\n\t\t\t\t\twidth: 90%;\r\n\t\t\t\t}\r\n\r\n\t\t\t}\r\n\r\n\t#header .logo {\r\n\t\t\tfont-family: 'Pacifico', cursive;\r\n\t\t\tdisplay: inline-block;\r\n\t\t\theight: inherit;\r\n\t\t\tleft: 0;\r\n\t\t\tline-height: inherit;\r\n\t\t\tmargin: 0;\r\n\t\t\tpadding: 0;\r\n\t\t\tposition: absolute;\r\n\t\t\ttop: 0;\r\n\t\t\tcolor: #e5474b;\r\n\t\t\tfont-size: 1.75em;\r\n\t\t\ttext-transform: none;\r\n\t\t\tfont-weight: normal;\r\n\t\t\tpadding: 0;\r\n\t\t}\r\n\r\n\t#header .logo:hover {\r\n\t\t\t\tcolor: rgba(229, 71, 75, 0.75);\r\n\t\t\t}\r\n\r\n\t#header a {\r\n\t\t\ttransition: color 0.2s ease-in-out;\r\n\t\t\tdisplay: inline-block;\r\n\t\t\tpadding: 0 2em;\r\n\t\t\tcolor: #ffffff;\r\n\t\t\ttext-decoration: none;\r\n\t\t\ttext-transform: uppercase;\r\n\t\t\tfont-weight: 700;\r\n\t\t\tfont-size: .85em;\r\n\t\t}\r\n\r\n\t#header a:hover {\r\n\t\t\t\tcolor: rgba(255, 255, 255, 0.75);\r\n\t\t\t}\r\n\r\n\t#header a:last-child {\r\n\t\t\t\tpadding-right: 0em;\r\n\t\t\t}\r\n\r\n\t@media screen and (max-width: 736px) {\r\n\r\n\t\t\t\t#header a {\r\n\t\t\t\t\tpadding: 0 0.5em;\r\n\t\t\t\t}\r\n\r\n\t\t\t}\r\n\r\n\t@media screen and (max-width: 480px) {\r\n\r\n\t\t#header {\r\n\t\t\tmin-width: 320px;\r\n\t\t}\r\n\r\n\t}\r\n\r\n\t/* Menu */\r\n\r\n\t#nav {\r\n\t\tdisplay: inline-block;\r\n\t}\r\n\r\n\t@media screen and (max-width: 980px) {\r\n\r\n\t\t\t#nav {\r\n\t\t\t\tdisplay: none;\r\n\t\t\t}\r\n\r\n\t\t}\r\n\r\n\t.navPanelToggle {\r\n\t\tposition: fixed;\r\n\t\ttext-decoration: none;\r\n\t\theight: 4em;\r\n\t\tright: 3em;\r\n\t\ttop: .75em;\r\n\t\twidth: 4em;\r\n\t\tdisplay: none;\r\n\t\tz-index: 10002;\r\n\t}\r\n\r\n\t.navPanelToggle:before {\r\n\t\t\t-moz-osx-font-smoothing: grayscale;\r\n\t\t\t-webkit-font-smoothing: antialiased;\r\n\t\t\tfont-family: FontAwesome;\r\n\t\t\tfont-style: normal;\r\n\t\t\tfont-weight: normal;\r\n\t\t\ttext-transform: none !important;\r\n\t\t\tcolor: #fff;\r\n\t\t\tdisplay: block;\r\n\t\t\tfont-size: 16px;\r\n\t\t\theight: 2.25em;\r\n\t\t\tleft: 0.5em;\r\n\t\t\tline-height: 2.25em;\r\n\t\t\tposition: absolute;\r\n\t\t\ttext-align: center;\r\n\t\t\ttop: 0.5em;\r\n\t\t\twidth: 3.5em;\r\n\t\t}\r\n\r\n\t@media screen and (max-width: 980px) {\r\n\r\n\t\t\t.navPanelToggle {\r\n\t\t\t\tdisplay: block;\r\n\t\t\t}\r\n\r\n\t\t}\r\n\r\n\t@media screen and (max-width: 736px) {\r\n\r\n\t\t\t.navPanelToggle {\r\n\t\t\t\tright: 1em;\r\n\t\t\t}\r\n\r\n\t\t}\r\n\r\n\t.navPanelToggle *:before {\r\n\t\t\tcolor: #fff;\r\n\t\t\tdisplay: block;\r\n\t\t\tfont-size: 16px;\r\n\t\t\theight: 2.25em;\r\n\t\t\tleft: 0.5em;\r\n\t\t\tline-height: 2.25em;\r\n\t\t\tposition: absolute;\r\n\t\t\ttext-align: center;\r\n\t\t\ttop: 0.5em;\r\n\t\t\twidth: 3.5em;\r\n\t\t}\r\n\r\n\t#navPanel {\r\n\t\t-webkit-transform: translatex(20em);\r\n\t\ttransform: translatex(20em);\r\n\t\ttransition: visibility 0.2s ease-in-out, -webkit-transform 0.2s ease-in-out;\r\n\t\ttransition: transform 0.2s ease-in-out, visibility 0.2s ease-in-out;\r\n\t\ttransition: transform 0.2s ease-in-out, visibility 0.2s ease-in-out, -webkit-transform 0.2s ease-in-out;\r\n\t\t-webkit-overflow-scrolling: touch;\r\n\t\tvisibility: hidden;\r\n\t\toverflow-y: auto;\r\n\t\tposition: fixed;\r\n\t\tright: 0;\r\n\t\ttop: 0;\r\n\t\tbackground: #1c1c1c;\r\n\t\tcolor: #fff;\r\n\t\theight: 100%;\r\n\t\tmax-width: 80%;\r\n\t\twidth: 20em;\r\n\t\tpadding: 1.5em;\r\n\t\ttext-transform: uppercase;\r\n\t\tz-index: 10003;\r\n\t\tdisplay: none;\r\n\t}\r\n\r\n\t#navPanel.visible {\r\n\t\t\t-webkit-transform: translatex(0);\r\n\t\t\ttransform: translatex(0);\r\n\t\t\tbox-shadow: 0 0 1.5em 0 rgba(0, 0, 0, 0.2);\r\n\t\t\tvisibility: visible;\r\n\t\t}\r\n\r\n\t#navPanel a:not(.close) {\r\n\t\t\tborder-top: solid 1px rgba(255, 255, 255, 0.1);\r\n\t\t\tcolor: #fff;\r\n\t\t\tfont-weight: 700;\r\n\t\t\tdisplay: block;\r\n\t\t\tpadding: 0.75em 0;\r\n\t\t\ttext-decoration: none;\r\n\t\t}\r\n\r\n\t#navPanel a:not(.close):first-child {\r\n\t\t\t\tborder: none;\r\n\t\t\t}\r\n\r\n\t#navPanel .close {\r\n\t\t\ttext-decoration: none;\r\n\t\t\ttransition: color 0.2s ease-in-out;\r\n\t\t\t-webkit-tap-highlight-color: transparent;\r\n\t\t\tborder: 0;\r\n\t\t\tcolor: #484848;\r\n\t\t\tcursor: pointer;\r\n\t\t\tdisplay: block;\r\n\t\t\theight: 4em;\r\n\t\t\tpadding-right: 1.25em;\r\n\t\t\tposition: absolute;\r\n\t\t\tright: 0;\r\n\t\t\ttext-align: right;\r\n\t\t\ttop: 0;\r\n\t\t\tvertical-align: middle;\r\n\t\t\twidth: 5em;\r\n\t\t}\r\n\r\n\t#navPanel .close:before {\r\n\t\t\t\t-moz-osx-font-smoothing: grayscale;\r\n\t\t\t\t-webkit-font-smoothing: antialiased;\r\n\t\t\t\tfont-family: FontAwesome;\r\n\t\t\t\tfont-style: normal;\r\n\t\t\t\tfont-weight: normal;\r\n\t\t\t\ttext-transform: none !important;\r\n\t\t\t\tcontent: '\\f00d';\r\n\t\t\t\twidth: 3em;\r\n\t\t\t\theight: 3em;\r\n\t\t\t\tline-height: 3em;\r\n\t\t\t\tdisplay: block;\r\n\t\t\t\tposition: absolute;\r\n\t\t\t\tright: 0;\r\n\t\t\t\ttop: 0;\r\n\t\t\t\ttext-align: center;\r\n\t\t\t}\r\n\r\n\t#navPanel .close:hover {\r\n\t\t\t\tcolor: inherit;\r\n\t\t\t}\r\n\r\n\t@media screen and (max-width: 980px) {\r\n\r\n\t\t\t#navPanel {\r\n\t\t\t\tdisplay: block;\r\n\t\t\t}\r\n\r\n\t\t}\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header id=\"header\">\n  <div class=\"inner\">\n    <a href=\"#\" class=\"logo\">Brian's Mini App</a>\n    <nav id=\"nav\">\n      <a [routerLink]=\"['']\">Home</a>\n      <a [routerLink]=\"['favourites']\">Favourites <span style=\"background:#990000;color:#fff;border-radius:50px;padding:10px;\">{{this.data.LikesArray.length}}</span></a>\n      <a><input  type=\"text\"/></a>\n      <a href=\"\"><input value=\"Search\" type=\"button\"/></a>\n    </nav>\n  </div>\n</header>\n\n<router-outlet></router-outlet>\n\n\n\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Data_service_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Data-service/data.service */ "./src/app/Data-service/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    //title = 'app';
    function AppComponent(data) {
        this.data = data;
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_Data_service_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _favourite_favourite_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./favourite/favourite.component */ "./src/app/favourite/favourite.component.ts");
/* harmony import */ var _favourite_single_favourite_single_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./favourite-single/favourite-single.component */ "./src/app/favourite-single/favourite-single.component.ts");
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.routes */ "./src/app/app.routes.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _Data_service_data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Data-service/data.service */ "./src/app/Data-service/data.service.ts");
/* harmony import */ var _favourite_list_favourite_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./favourite-list/favourite-list.component */ "./src/app/favourite-list/favourite-list.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _favourite_favourite_component__WEBPACK_IMPORTED_MODULE_3__["FavouriteComponent"],
                _favourite_single_favourite_single_component__WEBPACK_IMPORTED_MODULE_4__["FavouriteSingleComponent"],
                _favourite_list_favourite_list_component__WEBPACK_IMPORTED_MODULE_8__["FavouriteListComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routes__WEBPACK_IMPORTED_MODULE_5__["myRoutes"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"]
            ],
            providers: [_Data_service_data_service__WEBPACK_IMPORTED_MODULE_7__["DataService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routes.ts":
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/*! exports provided: myRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "myRoutes", function() { return myRoutes; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _favourite_favourite_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./favourite/favourite.component */ "./src/app/favourite/favourite.component.ts");
/* harmony import */ var _favourite_single_favourite_single_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./favourite-single/favourite-single.component */ "./src/app/favourite-single/favourite-single.component.ts");
/* harmony import */ var _favourite_list_favourite_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./favourite-list/favourite-list.component */ "./src/app/favourite-list/favourite-list.component.ts");




var MY_ROUTES = [
    { path: '', component: _favourite_favourite_component__WEBPACK_IMPORTED_MODULE_1__["FavouriteComponent"] },
    { path: 'favourites', component: _favourite_list_favourite_list_component__WEBPACK_IMPORTED_MODULE_3__["FavouriteListComponent"] },
    { path: 'profile/:id', component: _favourite_single_favourite_single_component__WEBPACK_IMPORTED_MODULE_2__["FavouriteSingleComponent"] },
    { path: '**', redirectTo: '/' },
];
var myRoutes = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(MY_ROUTES);


/***/ }),

/***/ "./src/app/favourite-list/favourite-list.component.css":
/*!*************************************************************!*\
  !*** ./src/app/favourite-list/favourite-list.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/favourite-list/favourite-list.component.html":
/*!**************************************************************!*\
  !*** ./src/app/favourite-list/favourite-list.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p style=\"margin-top:200px;\">\n  favourite-list works!\n  {{favouritesArray}}\n\n</p>\n"

/***/ }),

/***/ "./src/app/favourite-list/favourite-list.component.ts":
/*!************************************************************!*\
  !*** ./src/app/favourite-list/favourite-list.component.ts ***!
  \************************************************************/
/*! exports provided: FavouriteListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavouriteListComponent", function() { return FavouriteListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Data_service_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Data-service/data.service */ "./src/app/Data-service/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FavouriteListComponent = /** @class */ (function () {
    function FavouriteListComponent(data) {
        this.data = data;
        this.favouritesArray = [];
    }
    ;
    FavouriteListComponent.prototype.ngOnInit = function () {
        for (var i = 0; i < this.data.LikesArray.length; i++) {
            this.favouritesArray.push("8");
            console.log(this.data.LikesArray[i]);
        }
    };
    FavouriteListComponent.prototype.addLike = function () {
        //Loop through the array to check if it contains it
        for (var i = 0; i < this.data.LikesArray.length; i++) {
            this.favouritesArray.push(this.data.LikesArray[i]);
            console.log(this.data.LikesArray[i]);
        }
        //this.data.LikesArray.push(this.theId);
    };
    FavouriteListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-favourite-list',
            template: __webpack_require__(/*! ./favourite-list.component.html */ "./src/app/favourite-list/favourite-list.component.html"),
            styles: [__webpack_require__(/*! ./favourite-list.component.css */ "./src/app/favourite-list/favourite-list.component.css")]
        }),
        __metadata("design:paramtypes", [_Data_service_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], FavouriteListComponent);
    return FavouriteListComponent;
}());



/***/ }),

/***/ "./src/app/favourite-single/favourite-single.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/favourite-single/favourite-single.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper{\r\n    margin-top:50px;\r\n    width:800px;\r\n    height:auto;\r\n    background:#eee;\r\n    margin:auto;\r\n}\r\n\r\nul{\r\n    list-style:none;\r\n}\r\n\r\nli{\r\n    border:1px solid #ccc;\r\n    width: 720px;\r\n    background:#fff;\r\n    margin-top:10px;\r\n}\r\n\r\na {\r\n    color:#990000;\r\n    text-decoration: none;\r\n    text-transform: uppercase;\r\n    text-align: center;\r\n    font-family:arial;\r\n    padding:5px;\r\n  }\r\n\r\n.details{\r\n    width:100%;\r\n    background:#eee;\r\n    height:40px;\r\n  }\r\n\r\n.fav{\r\n    padding:10px;\r\n  }"

/***/ }),

/***/ "./src/app/favourite-single/favourite-single.component.html":
/*!******************************************************************!*\
  !*** ./src/app/favourite-single/favourite-single.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n \n\n  <ul style=\"margin-top:100px;\" class=\"list-group\">\n      <li class=\"list-group-item\">\n        <div class=\"details\">\n        <a>{{gifsArraySingle.data.title}}</a>\n        </div>\n  \n        <img src=\"{{gifsArraySingle.data.images.original.url}}\"/>\n        <div>{{gifsArraySingle.data.caption}}</div>\n      </li>\n      \n    </ul>\n    \n      <div ng-controller=\"ExampleController\">\n        \n        <button class=\"fav\" (click)=\"addLike()\" ng-click=\"doGreeting(message)\">Favourite Gif</button>\n        \n      </div>\n\n</div>\n\n<div class=\"feedback\">{{feedback}}</div>\n"

/***/ }),

/***/ "./src/app/favourite-single/favourite-single.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/favourite-single/favourite-single.component.ts ***!
  \****************************************************************/
/*! exports provided: FavouriteSingleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavouriteSingleComponent", function() { return FavouriteSingleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Data_service_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Data-service/data.service */ "./src/app/Data-service/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FavouriteSingleComponent = /** @class */ (function () {
    function FavouriteSingleComponent(data, route) {
        this.data = data;
        this.route = route;
    }
    FavouriteSingleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            console.log(params['id']); //log the value of id
            _this.theId = params['id'];
        });
        this.data.getData2(this.theId).subscribe(function (res) {
            _this.gifsArraySingle = res;
            console.log(res);
        });
    };
    FavouriteSingleComponent.prototype.addLike = function () {
        //Loop through the array to check if it contains it
        for (var i = 0; i < this.data.LikesArray.length; i++) {
            if (this.data.LikesArray[i] === this.theId) {
                //Run feedback method and then exit
                console.log(this.data.LikesArray[i]);
                console.log(this.theId);
                this.feedback = "Already Favourited :)";
                return;
            }
        }
        this.feedback = "Added to favourites";
        this.data.LikesArray.push(this.theId);
        //Add a method to show notification of added
    };
    FavouriteSingleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-favourite-single',
            template: __webpack_require__(/*! ./favourite-single.component.html */ "./src/app/favourite-single/favourite-single.component.html"),
            styles: [__webpack_require__(/*! ./favourite-single.component.css */ "./src/app/favourite-single/favourite-single.component.css")]
        }),
        __metadata("design:paramtypes", [_Data_service_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], FavouriteSingleComponent);
    return FavouriteSingleComponent;
}());



/***/ }),

/***/ "./src/app/favourite/favourite.component.css":
/*!***************************************************!*\
  !*** ./src/app/favourite/favourite.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper{\r\n    margin-top:50px;\r\n    width:800px;\r\n    height:auto;\r\n    background:#eee;\r\n    margin:auto;\r\n}\r\n\r\nul{\r\n    list-style:none;\r\n}\r\n\r\nli{\r\n    border:1px solid #ccc;\r\n    width: 720px;\r\n    background:#fff;\r\n    margin-top:10px;\r\n    height:130px;\r\n}\r\n\r\na {\r\n    color:#990000;\r\n    text-decoration: none;\r\n    text-transform: uppercase;\r\n    text-align: center;\r\n    font-family:arial;\r\n    padding:5px;\r\n  }\r\n\r\n.details{\r\n    width:500px;\r\n    background:#eee;\r\n    float:right;\r\n    height:40px;\r\n    padding:5px;\r\n    border:1px solid #ccc;\r\n  }"

/***/ }),

/***/ "./src/app/favourite/favourite.component.html":
/*!****************************************************!*\
  !*** ./src/app/favourite/favourite.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n  \n  <ul style=\"margin-top:100px;\" class=\"list-group\">\n    <li *ngFor=\"let gf of gifsArray.data\" class=\"list-group-item\">\n      \n      <div class=\"details\">\n      <a [routerLink]=\"['profile', gf.id]\" >{{gf.title}}<br/>Click here to like and view detials</a>\n      </div>\n\n      <img src=\"{{gf.images.fixed_width.url}}\"/>\n      \n    </li>\n  </ul>\n</div>\n"

/***/ }),

/***/ "./src/app/favourite/favourite.component.ts":
/*!**************************************************!*\
  !*** ./src/app/favourite/favourite.component.ts ***!
  \**************************************************/
/*! exports provided: FavouriteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavouriteComponent", function() { return FavouriteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Data_service_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Data-service/data.service */ "./src/app/Data-service/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import {HttpClient, Response, RequestOptions, Headers} from '@angular/common/http';

//import {IFavourite} from './IFavourite.model';
var FavouriteComponent = /** @class */ (function () {
    function FavouriteComponent(data) {
        this.data = data;
    }
    FavouriteComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data.getData().subscribe(function (res) {
            _this.gifsArray = res;
            console.log(res);
        });
    };
    FavouriteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-favourite',
            template: __webpack_require__(/*! ./favourite.component.html */ "./src/app/favourite/favourite.component.html"),
            styles: [__webpack_require__(/*! ./favourite.component.css */ "./src/app/favourite/favourite.component.css")]
        }),
        __metadata("design:paramtypes", [_Data_service_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], FavouriteComponent);
    return FavouriteComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\986044\Desktop\GifApp\myApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map