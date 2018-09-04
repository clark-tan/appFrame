webpackJsonp([4],{

/***/ 438:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LightHttpPageModule", function() { return LightHttpPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__light_http_page__ = __webpack_require__(450);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__light_light_out_light_out_module__ = __webpack_require__(35);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var LightHttpPageModule = /** @class */ (function () {
    function LightHttpPageModule() {
    }
    LightHttpPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__light_http_page__["a" /* LightHttpPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__light_http_page__["a" /* LightHttpPage */]),
                __WEBPACK_IMPORTED_MODULE_3__light_light_out_light_out_module__["i" /* LightOutModule */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2__light_http_page__["a" /* LightHttpPage */]]
        })
    ], LightHttpPageModule);
    return LightHttpPageModule;
}());

//# sourceMappingURL=light-http-page.module.js.map

/***/ }),

/***/ 450:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LightHttpPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LightHttpPage = /** @class */ (function () {
    function LightHttpPage(navCtrl, navParams, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
    }
    /**
     * 统一发送请求
     * @param params
     * @returns {Promise<{success: boolean, msg: string}>|Promise<R>}
     */
    LightHttpPage.prototype.request = function (params) {
        // POST请求（参数、返回值类型都是任意类型）
        if (params['method'] == 'post' || params['method'] == 'POST') {
            return this.post(params['url'], params['data']);
        }
        else {
            return this.get(params['url'], params['data']);
        }
    };
    /**
     * get请求
     * @param url 接口地址
     * @param params 参数
     * @returns {Promise<R>|Promise<U>}
     */
    LightHttpPage.prototype.get = function (url, params) {
        var _this = this;
        return this.http.get(url, { search: params })
            .toPromise()
            .then(this.handleSuccess)
            .catch(function (res) { return _this.handleError(res); });
    };
    /**
     * post请求
     * @param url 接口地址
     * @param params 参数
     * @returns {Promise<R>|Promise<U>}
     */
    LightHttpPage.prototype.post = function (url, params) {
        var _this = this;
        return this.http.post(url, params)
            .toPromise()
            .then(this.handleSuccess)
            .catch(function (res) { return _this.handleError(res); });
    };
    /**
     * 处理请求成功
     * @param res
     * @returns {{data: (string|null|((node:any)=>any)}}
     */
    LightHttpPage.prototype.handleSuccess = function (res) {
        var body = res["_body"];
        // console.log("接口返回的成功信息：" + body)
        if (body) {
            return {
                data: res.json().data || {},
                code: res.json().code || {},
                message: res.json().message || {},
                statusText: res.statusText,
                status: res.status,
                success: true
            };
        }
        else {
            return {
                data: res.json().data || {},
                code: res.json().code || {},
                message: res.json().message || {},
                statusText: res.statusText,
                status: res.status,
                success: true
            };
        }
    };
    /**
     * 处理请求错误
     * @param error
     * @returns {void|Promise<string>|Promise<T>|any}
     */
    LightHttpPage.prototype.handleError = function (error) {
        console.log(error);
        var msg = '请求失败';
        if (error.status == 400) {
            console.log('请求参数正确');
        }
        if (error.status == 404) {
            console.error('请检查路径是否正确');
        }
        if (error.status == 500) {
            console.error('请求的服务器错误');
        }
        console.log(error);
        return { success: false, msg: msg };
    };
    /**
     * 注册
     * @param user
     * @returns {any}
     */
    LightHttpPage.prototype.reguster = function () {
        return this.request({
            method: 'get',
            url: 'http://218.25.36.152:10003/Map_DelegateTaskInfo/GetTaskRegionInfo',
            data: {
                taskID: '908FC567E91A448D9A0F4CC9DCA29AF6',
                _sysName: '超级管理员'
            },
        }).then(function (data) {
            console.log(data);
        });
    };
    LightHttpPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'light-http-page',template:/*ion-inline-start:"/Users/clark/Documents/personal/appFrame/src/pages/examplePages/light-http-page/light-http-page.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>测试http</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-item>\n    <button (click)="reguster()">testHttp</button>\n  </ion-item>\n</ion-content>\n'/*ion-inline-end:"/Users/clark/Documents/personal/appFrame/src/pages/examplePages/light-http-page/light-http-page.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
    ], LightHttpPage);
    return LightHttpPage;
}());

//# sourceMappingURL=light-http-page.js.map

/***/ })

});
//# sourceMappingURL=4.js.map