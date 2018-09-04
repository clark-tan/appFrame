webpackJsonp([11],{

/***/ 431:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LightFeedbackComponentModule", function() { return LightFeedbackComponentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__light_feedback_component__ = __webpack_require__(443);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LightFeedbackComponentModule = /** @class */ (function () {
    function LightFeedbackComponentModule() {
    }
    LightFeedbackComponentModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__light_feedback_component__["a" /* LightFeedbackComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__light_feedback_component__["a" /* LightFeedbackComponent */]),
            ],
        })
    ], LightFeedbackComponentModule);
    return LightFeedbackComponentModule;
}());

//# sourceMappingURL=light-feedback.component.module.js.map

/***/ }),

/***/ 443:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LightFeedbackComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LightFeedbackComponent = /** @class */ (function () {
    function LightFeedbackComponent(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    LightFeedbackComponent.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LightFeedbackComponent');
    };
    LightFeedbackComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-advisory',template:/*ion-inline-start:"/Users/clark/Documents/personal/appFrame/src/light/light-pages/light-feedback/light-feedback.component.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>\n      意见反馈\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n <ion-list>\n   <div margin-top></div>\n    <ion-item>\n        <span class="input-label">姓名</span>\n        <input class="input-text" type="text" name="" value="" placeholder="填写信息"/>\n    </ion-item>\n    <ion-item>\n        <span class="input-label">手机</span>\n        <input class="input-text" type="text" name="" value="" placeholder="填写信息"/>\n    </ion-item>\n    <ion-item>\n        <span class="input-label">邮箱</span>\n        <input class="input-text" type="text" name="" value="" placeholder="填写信息"/>\n    </ion-item>\n    <ion-item>\n        <span class="input-label">QQ</span>\n        <input class="input-text" type="text" name="" value="" placeholder="填写信息"/>\n    </ion-item>\n    <ion-item>\n      <span class="input-label">留意信息</span>\n      <div class="input-textarea" contenteditable="true" placeholder=\'输入内容\'></div>\n      <button ion-button class="phraseButton">惯用语</button>\n    </ion-item>\n   </ion-list>\n</ion-content>\n<div class="submitbar">\n  <a ion-button block color="secondary">提交</a>\n</div>'/*ion-inline-end:"/Users/clark/Documents/personal/appFrame/src/light/light-pages/light-feedback/light-feedback.component.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]])
    ], LightFeedbackComponent);
    return LightFeedbackComponent;
}());

//# sourceMappingURL=light-feedback.component.js.map

/***/ })

});
//# sourceMappingURL=11.js.map