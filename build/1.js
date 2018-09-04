webpackJsonp([1],{

/***/ 441:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LightReadPageModule", function() { return LightReadPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__light_read_page__ = __webpack_require__(453);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__light_light_out_light_out_module__ = __webpack_require__(35);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var LightReadPageModule = /** @class */ (function () {
    function LightReadPageModule() {
    }
    LightReadPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__light_read_page__["a" /* LightReadPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__light_read_page__["a" /* LightReadPage */]),
                __WEBPACK_IMPORTED_MODULE_3__light_light_out_light_out_module__["i" /* LightOutModule */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2__light_read_page__["a" /* LightReadPage */]]
        })
    ], LightReadPageModule);
    return LightReadPageModule;
}());

//# sourceMappingURL=light-read-page.module.js.map

/***/ }),

/***/ 453:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LightReadPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__light_light_out_light_out_module__ = __webpack_require__(35);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LightReadPage = /** @class */ (function () {
    function LightReadPage(navCtrl, navParams, lightHttp, lightUser) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.lightHttp = lightHttp;
        this.lightUser = lightUser;
    }
    LightReadPage.prototype.ionViewDidLoad = function () {
        //初始化业务数据
        this._initData();
    };
    /**
    * 通过经纬度设置当前的地名地址
    *
    * @private
    * @param {number} lat
    * @param {number} lng
    * @memberof PointAddModalPage
    */
    LightReadPage.prototype._initData = function () {
        var _this = this;
        this.lightHttp.post("DelegateTaskNote/GetTaskNoteForm", {
            userName: "超级管理员",
            code: '104EEBBF98994C8BBAD0162106F3671D'
        }).then(function (data) {
            _this.readData = __WEBPACK_IMPORTED_MODULE_2__light_light_out_light_out_module__["g" /* LightJsonUtil */].toObject(data);
        }).catch(function (err) { return console.log(err); });
    };
    /**
     * 点击确定按钮，提交数据
     *
     * @memberof TransferboxAddModalPage
     */
    LightReadPage.prototype.submit = function () {
        console.log(this);
    };
    LightReadPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'light-read-page',template:/*ion-inline-start:"/Users/clark/Documents/personal/appFrame/src/pages/examplePages/light-read-page/light-read-page.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>sInfo只读表单</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <light-read [readData]="readData"></light-read>\n\n</ion-content>\n'/*ion-inline-end:"/Users/clark/Documents/personal/appFrame/src/pages/examplePages/light-read-page/light-read-page.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__light_light_out_light_out_module__["e" /* LightHttp */],
            __WEBPACK_IMPORTED_MODULE_2__light_light_out_light_out_module__["l" /* LightUser */]])
    ], LightReadPage);
    return LightReadPage;
}());

//# sourceMappingURL=light-read-page.js.map

/***/ })

});
//# sourceMappingURL=1.js.map