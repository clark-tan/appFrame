webpackJsonp([6],{

/***/ 436:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordModifyModule", function() { return PasswordModifyModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__password_modify_component__ = __webpack_require__(448);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PasswordModifyModule = /** @class */ (function () {
    function PasswordModifyModule() {
    }
    PasswordModifyModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__password_modify_component__["a" /* PasswordModifyComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__password_modify_component__["a" /* PasswordModifyComponent */]),
            ],
        })
    ], PasswordModifyModule);
    return PasswordModifyModule;
}());

//# sourceMappingURL=password-modify.component.module.js.map

/***/ }),

/***/ 448:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PasswordModifyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PasswordModifyComponent = /** @class */ (function () {
    function PasswordModifyComponent() {
    }
    PasswordModifyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'password-modify',template:/*ion-inline-start:"/Users/clark/Documents/personal/appFrame/src/light/light-pages/light-person/password-modify/password-modify.component.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title text-center>修改密码</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <div ion-row class="password-tip">定期更换密码可以让您的账号更加安全！！</div>\n  <ion-item-group>\n    <ion-item>\n      <ion-input type="password" placeholder="填写原来密码" [(ngModel)]="oldPassword"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-input type="password" placeholder="填写新密码" [(ngModel)]="newPassword"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-input type="password" placeholder="确认密码" [(ngModel)]="confirmPassword"></ion-input>\n    </ion-item>\n  </ion-item-group>\n  <div margin-top></div>\n  <button ion-button full color="secondary" (click)="submit()">提交</button>\n</ion-content>\n'/*ion-inline-end:"/Users/clark/Documents/personal/appFrame/src/light/light-pages/light-person/password-modify/password-modify.component.html"*/
        })
    ], PasswordModifyComponent);
    return PasswordModifyComponent;
}());

//# sourceMappingURL=password-modify.component.js.map

/***/ })

});
//# sourceMappingURL=6.js.map