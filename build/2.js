webpackJsonp([2],{

/***/ 440:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LightPopListPageModule", function() { return LightPopListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__light_popList_page__ = __webpack_require__(452);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__light_light_out_light_out_module__ = __webpack_require__(35);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var LightPopListPageModule = /** @class */ (function () {
    function LightPopListPageModule() {
    }
    LightPopListPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__light_popList_page__["a" /* LightPopListPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__light_popList_page__["a" /* LightPopListPage */]),
                __WEBPACK_IMPORTED_MODULE_3__light_light_out_light_out_module__["i" /* LightOutModule */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2__light_popList_page__["a" /* LightPopListPage */]]
        })
    ], LightPopListPageModule);
    return LightPopListPageModule;
}());

//# sourceMappingURL=light-popList-page.module.js.map

/***/ }),

/***/ 452:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LightPopListPage; });
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



var LightPopListPage = /** @class */ (function () {
    function LightPopListPage(navCtrl, navParams, lightPop) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.lightPop = lightPop;
    }
    //提示
    LightPopListPage.prototype.toBasicUsage = function () {
        this.lightPop.message('我是一个提示弹窗', '提示');
    };
    //警告
    LightPopListPage.prototype.toErrMessage = function () {
        this.lightPop.errMessage('我是一个警告弹窗', '警告');
    };
    //确认
    LightPopListPage.prototype.toConfirmation = function () {
        this.lightPop.confirm('我是一个确认弹窗', '提示').then(function (data) {
            if (data) {
                console.log('确定');
            }
            else {
                console.log('关闭');
            }
        });
    };
    LightPopListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'light-popList-page',template:/*ion-inline-start:"/Users/clark/Documents/personal/appFrame/src/pages/examplePages/light-popList-page/light-popList-page.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>基础弹窗实例</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n\n  <ion-item (click)="toBasicUsage()">\n    <button ion-button block>提示弹窗</button>\n  </ion-item>\n  <ion-item (click)="toErrMessage()">\n    <button ion-button block>警告弹窗</button>\n  </ion-item>\n  <ion-item (click)="toConfirmation()">\n    <button ion-button block>确认弹窗</button>\n  </ion-item>\n\n</ion-content>\n'/*ion-inline-end:"/Users/clark/Documents/personal/appFrame/src/pages/examplePages/light-popList-page/light-popList-page.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__light_light_out_light_out_module__["j" /* LightPop */]])
    ], LightPopListPage);
    return LightPopListPage;
}());

//# sourceMappingURL=light-popList-page.js.map

/***/ })

});
//# sourceMappingURL=2.js.map