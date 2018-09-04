webpackJsonp([10],{

/***/ 432:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LightMessageContentModule", function() { return LightMessageContentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__light_message_content_component__ = __webpack_require__(444);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LightMessageContentModule = /** @class */ (function () {
    function LightMessageContentModule() {
    }
    LightMessageContentModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__light_message_content_component__["a" /* LightMessageContentComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__light_message_content_component__["a" /* LightMessageContentComponent */]),
            ],
        })
    ], LightMessageContentModule);
    return LightMessageContentModule;
}());

//# sourceMappingURL=light-message-content.component.module.js.map

/***/ }),

/***/ 444:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LightMessageContentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__light_nation_light_nation_index__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__light_providers_light_providers_module__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LightMessageContentComponent = /** @class */ (function () {
    /**
     * light消息的组件对象
     * @param {NavController} navCtrl
     * @param {NavParams} navParams
     * @param {LightUser} lightUser
     * @memberof LightMessageContentComponent
     */
    function LightMessageContentComponent(navCtrl, navParams, actionSheetCtrl, lightPop, lightCamera, lightImagePicker, lightUser) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.actionSheetCtrl = actionSheetCtrl;
        this.lightPop = lightPop;
        this.lightCamera = lightCamera;
        this.lightImagePicker = lightImagePicker;
        this.lightUser = lightUser;
    }
    /**
     * 进入加载模式
     *
     * @memberof LightPersonComponent
     */
    LightMessageContentComponent.prototype.ionViewWillEnter = function () {
    };
    LightMessageContentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'light-message-content',template:/*ion-inline-start:"/Users/clark/Documents/personal/appFrame/src/light/light-pages/light-message/light-message-content/light-message-content.component.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>个人资料</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-list margin-top>\n\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/clark/Documents/personal/appFrame/src/light/light-pages/light-message/light-message-content/light-message-content.component.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_3__light_providers_light_providers_module__["c" /* LightPop */],
            __WEBPACK_IMPORTED_MODULE_2__light_nation_light_nation_index__["c" /* LightCamera */],
            __WEBPACK_IMPORTED_MODULE_2__light_nation_light_nation_index__["i" /* LightImagePicker */],
            __WEBPACK_IMPORTED_MODULE_3__light_providers_light_providers_module__["f" /* LightUser */]])
    ], LightMessageContentComponent);
    return LightMessageContentComponent;
}());

//# sourceMappingURL=light-message-content.component.js.map

/***/ })

});
//# sourceMappingURL=10.js.map