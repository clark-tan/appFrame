webpackJsonp([8],{

/***/ 434:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailModifyModule", function() { return EmailModifyModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__email_modify_component__ = __webpack_require__(446);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EmailModifyModule = /** @class */ (function () {
    function EmailModifyModule() {
    }
    EmailModifyModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__email_modify_component__["a" /* EmailModifyComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__email_modify_component__["a" /* EmailModifyComponent */]),
            ],
        })
    ], EmailModifyModule);
    return EmailModifyModule;
}());

//# sourceMappingURL=email-modify.component.module.js.map

/***/ }),

/***/ 446:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailModifyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var EmailModifyComponent = /** @class */ (function () {
    function EmailModifyComponent() {
    }
    EmailModifyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'email-modify',template:/*ion-inline-start:"/Users/clark/Documents/personal/appFrame/src/light/light-pages/light-person/email-modify/email-modify.component.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title text-center>修改邮箱</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item>\n      <ion-input type="text" placeholder="修改邮箱"></ion-input>\n    </ion-item>\n  </ion-list>\n  <div margin-top></div>\n  <button ion-button full color="secondary">提交</button>\n</ion-content>\n'/*ion-inline-end:"/Users/clark/Documents/personal/appFrame/src/light/light-pages/light-person/email-modify/email-modify.component.html"*/,
        })
    ], EmailModifyComponent);
    return EmailModifyComponent;
}());

//# sourceMappingURL=email-modify.component.js.map

/***/ })

});
//# sourceMappingURL=8.js.map