webpackJsonp([7],{

/***/ 435:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LightPersonModule", function() { return LightPersonModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__light_person_component__ = __webpack_require__(447);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LightPersonModule = /** @class */ (function () {
    function LightPersonModule() {
    }
    LightPersonModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__light_person_component__["a" /* LightPersonComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__light_person_component__["a" /* LightPersonComponent */]),
            ],
        })
    ], LightPersonModule);
    return LightPersonModule;
}());

//# sourceMappingURL=light-person.component.module.js.map

/***/ }),

/***/ 447:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LightPersonComponent; });
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




var LightPersonComponent = /** @class */ (function () {
    /**
     * light用户的组件对象
     * @param {NavController} navCtrl
     * @param {NavParams} navParams
     * @param {LightUser} lightUser
     * @memberof LightPersonComponent
     */
    function LightPersonComponent(navCtrl, navParams, actionSheetCtrl, lightPop, lightCamera, lightImagePicker, lightUser) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.actionSheetCtrl = actionSheetCtrl;
        this.lightPop = lightPop;
        this.lightCamera = lightCamera;
        this.lightImagePicker = lightImagePicker;
        this.lightUser = lightUser;
        //默认头像
        this.memberPicture = "assets/img/no-user.png";
    }
    /**
     * 进入加载模式
     *
     * @memberof LightPersonComponent
     */
    LightPersonComponent.prototype.ionViewWillEnter = function () {
        var userInfo = this.lightUser.getUserInfo();
        if (!!userInfo) {
            this.userLoginName = userInfo.LoginName;
            this.userName = userInfo.UserName;
            this.userEmailAdress = userInfo.Email;
            this.userMobile = userInfo.Mobile;
            this.userOffcieTel = userInfo.OffcieTel;
        }
    };
    //修改邮箱
    LightPersonComponent.prototype.upstateEmailInfo = function () {
        this.navCtrl.push('EmailModifyComponent');
    };
    //修改密码
    LightPersonComponent.prototype.changePassword = function () {
        this.navCtrl.push('PasswordModifyComponent');
    };
    LightPersonComponent.prototype.changePhoto = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: '个人头像',
            buttons: [{
                    text: '拍照',
                    role: 'takePicture',
                    handler: function () {
                        //console.log("调用拍照");
                        _this.lightCamera.getPicture().then(function (data) {
                            _this.memberPicture = data;
                        }).catch(function (errText) {
                            _this.lightPop.message("拍照失败" + errText);
                        });
                    }
                }, {
                    text: '相册',
                    role: 'imagePicker',
                    handler: function () {
                        //console.log("手机相册");
                        _this.getImage();
                    }
                }, {
                    text: '取消',
                    role: 'cancel',
                    handler: function () {
                        console.log("取消");
                    }
                }]
        });
        actionSheet.present();
    };
    //调用相册
    LightPersonComponent.prototype.getImage = function () {
        var _this = this;
        this.lightImagePicker.getPicture().then(function (results) {
            for (var i = 0; i < results.length; i++) {
                _this.memberPicture = results[i];
            }
        });
    };
    LightPersonComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'light-person',template:/*ion-inline-start:"/Users/clark/Documents/personal/appFrame/src/light/light-pages/light-person/light-person.component.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>个人资料</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list margin-top>\n    <ion-item-divider no-lines>\n      <ion-icon name="person" color="primary" class="icon-divider"></ion-icon>\n      头像修改\n    </ion-item-divider>\n    <ion-item no-lines padding-left>\n      <ion-thumbnail item-end>\n        <img src="{{memberPicture}}" (click)=\'changePhoto()\' />\n      </ion-thumbnail>\n      <span>头像</span>\n    </ion-item>\n\n    <ion-item-divider no-lines margin-top>\n      <ion-icon name="md-phone-portrait" color="secondary" class="icon-divider"></ion-icon>\n      基础资料\n    </ion-item-divider>\n    <ion-item>\n      <span>账号</span>\n      <ion-note item-end>\n        {{userLoginName}}\n      </ion-note>\n    </ion-item>\n    <ion-item>\n      <span>昵称</span>\n      <ion-note item-end>\n        {{userName}}\n      </ion-note>\n    </ion-item>\n    <ion-item (click)=\'upstateEmailInfo()\'>\n      <span>邮箱</span>\n      <ion-note item-end>\n        {{userEmailAdress}}\n      </ion-note>\n      <ion-icon name="ios-arrow-forward-outline" class="icon-forward" item-right></ion-icon>\n    </ion-item>\n    <ion-item>\n      <span>手机号</span>\n      <ion-note item-end>\n        {{userMobile}}\n      </ion-note>\n      <ion-icon name="ios-arrow-forward-outline" class="icon-forward" item-right></ion-icon>\n    </ion-item>\n    <ion-item no-lines>\n      <span>座机</span>\n      <ion-note item-end>\n        {{userOffcieTel}}\n      </ion-note>\n      <ion-icon name="ios-arrow-forward-outline" class="icon-forward" item-right></ion-icon>\n    </ion-item>\n\n    <ion-item-divider no-lines margin-top>\n      <ion-icon name="ios-lock" color="danger" class="icon-divider"></ion-icon>\n      修改密码\n    </ion-item-divider>\n\n    <ion-item no-lines (click)=\'changePassword()\'>\n      <span>密码</span>\n      <ion-note item-end>\n        *******\n      </ion-note>\n      <ion-icon name="ios-arrow-forward-outline" class="icon-forward" item-right></ion-icon>\n    </ion-item>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/clark/Documents/personal/appFrame/src/light/light-pages/light-person/light-person.component.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_3__light_providers_light_providers_module__["c" /* LightPop */],
            __WEBPACK_IMPORTED_MODULE_2__light_nation_light_nation_index__["c" /* LightCamera */],
            __WEBPACK_IMPORTED_MODULE_2__light_nation_light_nation_index__["i" /* LightImagePicker */],
            __WEBPACK_IMPORTED_MODULE_3__light_providers_light_providers_module__["f" /* LightUser */]])
    ], LightPersonComponent);
    return LightPersonComponent;
}());

//# sourceMappingURL=light-person.component.js.map

/***/ })

});
//# sourceMappingURL=7.js.map