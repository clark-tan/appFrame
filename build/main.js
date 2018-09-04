webpackJsonp([12],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return LightUtilModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_index__ = __webpack_require__(178);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__util_index__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__util_index__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__util_index__["c"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_1__util_index__["d"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_1__util_index__["e"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_1__util_index__["f"]; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var LightUtilModule = /** @class */ (function () {
    function LightUtilModule() {
    }
    LightUtilModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [],
            declarations: [],
            exports: []
        })
    ], LightUtilModule);
    return LightUtilModule;
}());


//# sourceMappingURL=light-util.module.js.map

/***/ }),
/* 8 */,
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return LightProvidersModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__light_util_light_util_module__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_index__ = __webpack_require__(91);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_3__providers_index__["c"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_3__providers_index__["g"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_3__providers_index__["l"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_3__providers_index__["m"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_3__providers_index__["n"]; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// import { IonicModule } from 'ionic-angular';


var LightProvidersModule = /** @class */ (function () {
    function LightProvidersModule() {
    }
    LightProvidersModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* HttpModule */],
                // IonicModule,
                __WEBPACK_IMPORTED_MODULE_2__light_util_light_util_module__["f" /* LightUtilModule */]
            ],
            declarations: [],
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__providers_index__["c" /* LightHttp */], __WEBPACK_IMPORTED_MODULE_3__providers_index__["a" /* LightConfig */], __WEBPACK_IMPORTED_MODULE_3__providers_index__["o" /* LightUserConfig */],
                __WEBPACK_IMPORTED_MODULE_3__providers_index__["f" /* LightLocalCache */], __WEBPACK_IMPORTED_MODULE_3__providers_index__["k" /* LightPlatform */], __WEBPACK_IMPORTED_MODULE_3__providers_index__["l" /* LightPop */],
                __WEBPACK_IMPORTED_MODULE_3__providers_index__["e" /* LightLoading */], __WEBPACK_IMPORTED_MODULE_3__providers_index__["d" /* LightLoad */], __WEBPACK_IMPORTED_MODULE_3__providers_index__["n" /* LightUser */],
                __WEBPACK_IMPORTED_MODULE_3__providers_index__["g" /* LightMemberImage */], __WEBPACK_IMPORTED_MODULE_3__providers_index__["b" /* LightExit */], __WEBPACK_IMPORTED_MODULE_3__providers_index__["h" /* LightMethods */],
                __WEBPACK_IMPORTED_MODULE_3__providers_index__["j" /* LightNav */], __WEBPACK_IMPORTED_MODULE_3__providers_index__["m" /* LightProviders */], __WEBPACK_IMPORTED_MODULE_3__providers_index__["i" /* LightModal */]
            ],
            exports: []
        })
    ], LightProvidersModule);
    return LightProvidersModule;
}());


//# sourceMappingURL=light-providers.module.js.map

/***/ }),
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LightNation; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__light_util_light_util_module__ = __webpack_require__(7);

/**
 * 本地插件的抽象类
 * @export
 * @abstract
 * @class LightNation
 */
var LightNation = /** @class */ (function () {
    /**
     * 平台的对象信息
     * @memberof LightNation
     */
    function LightNation() {
    }
    LightNation.prototype._isWeb = function () {
        var result = false;
        var ua = window.navigator.userAgent.toLowerCase();
        if (__WEBPACK_IMPORTED_MODULE_0__light_util_light_util_module__["e" /* LightStringUtil */].contain(ua, "windows") || __WEBPACK_IMPORTED_MODULE_0__light_util_light_util_module__["e" /* LightStringUtil */].contain(ua, "sm-g900p") || __WEBPACK_IMPORTED_MODULE_0__light_util_light_util_module__["e" /* LightStringUtil */].contain(ua, "nexus 5")) {
            result = true;
        }
        return result;
    };
    /**
     * 得到默认的结果信息
     *
     * @param {Promise<any>} defaultResult
     * @returns {Promise<any>}
     * @memberof LightNation
     */
    LightNation.prototype._getDefaultResult = function (defaultResult) {
        var result = new Promise(function (resolve, reject) {
            resolve(defaultResult);
        });
        return result;
    };
    return LightNation;
}());

//# sourceMappingURL=lightNation.js.map

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lightWriterSimpleAppend__ = __webpack_require__(374);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lightWriterType__ = __webpack_require__(375);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lightWriterTypeUtil__ = __webpack_require__(376);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lightWriterCommon__ = __webpack_require__(377);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_3__lightWriterCommon__["a"]; });




//# sourceMappingURL=index.js.map

/***/ }),
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return LightOutModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__light_components_light_components_module__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__light_providers_light_providers_module__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__light_util_light_util_module__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__light_util_light_util_index__ = __webpack_require__(410);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_4__light_util_light_util_index__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__light_providers_light_providers_index__ = __webpack_require__(411);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_5__light_providers_light_providers_index__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_5__light_providers_light_providers_index__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_5__light_providers_light_providers_index__["c"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_5__light_providers_light_providers_index__["d"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_5__light_providers_light_providers_index__["e"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "l", function() { return __WEBPACK_IMPORTED_MODULE_5__light_providers_light_providers_index__["f"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__light_components_light_components_index__ = __webpack_require__(96);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_6__light_components_light_components_index__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_6__light_components_light_components_index__["c"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__light_nation_light_nation_index__ = __webpack_require__(61);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_7__light_nation_light_nation_index__["h"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_7__light_nation_light_nation_index__["j"]; });
/*
 *此模块用于操作所需要的light模块集合调用
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

// import { IonicModule } from 'ionic-angular';
//基础模块


//以下按需加载
var lightComponentsList = [
    //公共基础组件
    __WEBPACK_IMPORTED_MODULE_1__light_components_light_components_module__["c" /* LightContentComponent */], __WEBPACK_IMPORTED_MODULE_1__light_components_light_components_module__["d" /* LightListComponent */],
    //读取写入表单组件
    __WEBPACK_IMPORTED_MODULE_1__light_components_light_components_module__["e" /* LightReadComponent */], __WEBPACK_IMPORTED_MODULE_1__light_components_light_components_module__["f" /* LightWriterComponent */],
    //附件的组件信息
    __WEBPACK_IMPORTED_MODULE_1__light_components_light_components_module__["a" /* LightAttachComponent */]
];
//地图模块
//基础地图控件的导出
// import { TileLayerComponent, TileLayerWmsComponent, TileLayerWmtsComponent, ArcgisLayerDynamicComponent } from '../light-map/light-map.module';
//地图控件的导出
// import { LightPageComponent, LightMapModule, LightPageUrlComponent, LightMapComponent, LightMapUrlComponent, LightPageArcgisComponent } from '../light-map/light-map.module';
//地图矢量图层组件的导出
// import { GroupLayerComponent, GraphicsLayerComponent, GeoPointComponent, GeoLineComponent, GeoPolygonComponent } from '../light-map/light-map.module';
//地图矢量图层组件的导出
// import { LegendPointIconComponent, LegendPointCircleComponent, LegendLineComponent, LegendLineDottedComponent, LegendLineSolidComponent } from '../light-map/light-map.module';
//以下按需加载
var lightMapList = [];
//基础配置模块

//数据处理转换模块

var importsList = [
    // IonicModule,
    __WEBPACK_IMPORTED_MODULE_1__light_components_light_components_module__["b" /* LightComponentsModule */],
    // LightMapModule,
    __WEBPACK_IMPORTED_MODULE_2__light_providers_light_providers_module__["e" /* LightProvidersModule */],
    __WEBPACK_IMPORTED_MODULE_3__light_util_light_util_module__["f" /* LightUtilModule */]
];
///数据的字节数组
var exportsList = new Array();
var entryComponentsList = new Array();
var LightOutModule = /** @class */ (function () {
    function LightOutModule() {
    }
    LightOutModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: importsList,
            declarations: [],
            exports: exportsList.concat([], lightComponentsList),
            entryComponents: entryComponentsList.concat([], lightMapList)
        })
    ], LightOutModule);
    return LightOutModule;
}());





// export * from '../light-map/light-map.index';
//# sourceMappingURL=light-out.module.js.map

/***/ }),
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LightLocalCache; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//用户对象的信息
var LightLocalCache = /** @class */ (function () {
    //构造函数 
    function LightLocalCache() {
        if (!localStorage) {
            throw new Error("当前的浏览器不支持localStorage存储");
        }
        else {
            console.log(localStorage);
            this._localStorage = localStorage;
        }
    }
    /**
     * 是否包含Key值得信息
     * @param {string} key
     * @returns {boolean}
     *
     * @memberof LightLocalCache
     */
    LightLocalCache.prototype.contain = function (key) {
        var result = false;
        if (this._isValidate(key)) {
            for (var i = 0; i < this._localStorage.length; i++) {
                var keyTemp = this._localStorage.key(i);
                if (!!keyTemp && keyTemp == key) {
                    result = true;
                    break;
                }
            }
        }
        return result;
    };
    /**
     * 设置键值对
     * @param {string} Key信息
     * @param {string} 值信息
     *
     * @memberof LightLocalCache
     */
    LightLocalCache.prototype.set = function (key, value) {
        if (this._isValidate(key)) {
            this._localStorage[key] = value;
        }
    };
    /**
     * 设置键值对
     * @param {string} key信息
     * @param {object} 值信息
     * @memberof LightLocalCache
     */
    LightLocalCache.prototype.setObject = function (key, value) {
        if (this._isValidate(key)) {
            if (!!value) {
                this._localStorage[key] = JSON.stringify(value);
            }
        }
    };
    //获取键值对的信息
    LightLocalCache.prototype.get = function (key) {
        var result = "";
        if (this._isValidate(key)) {
            result = this._localStorage[key];
        }
        return result;
    };
    /**
     * 获取对象信息
     * @param {string} key信息
     * @returns {object}
     *
     * @memberof LightLocalCache
     */
    LightLocalCache.prototype.getObject = function (key) {
        var result = null;
        if (this._isValidate(key)) {
            result = JSON.parse(this._localStorage[key] || '{}');
        }
        return result;
    };
    /**
     * 移除Key值信息
     *
     * @param {string} key
     *
     * @memberof LightLocalCache
     */
    LightLocalCache.prototype.remove = function (key) {
        if (this._isValidate(key)) {
            this._localStorage.removeItem(key);
        }
    };
    /**
     * 清空的操作
     * @memberof LightLocalCache
     */
    LightLocalCache.prototype.clear = function () {
        if (!!this._localStorage) {
            this._localStorage.clear();
        }
    };
    //判断是否有效
    LightLocalCache.prototype._isValidate = function (key) {
        var result = false;
        if (!!this._localStorage && !!key) {
            result = true;
        }
        return result;
    };
    LightLocalCache = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], LightLocalCache);
    return LightLocalCache;
}());

//# sourceMappingURL=lightLocalCache.js.map

/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return LightNationModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__light_util_light_util_module__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__light_nation_index__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_zbar__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_file_transfer__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_file__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_camera__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_image_picker__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_diagnostic__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_device_motion__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_native_audio__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_file_opener__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_app_version__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_android_permissions__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__jiguang_ionic_jpush__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_hot_code_push__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_app_minimize__ = __webpack_require__(194);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_4__light_nation_index__["d"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_4__light_nation_index__["e"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_4__light_nation_index__["f"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_4__light_nation_index__["g"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_4__light_nation_index__["l"]; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var LightNationModule = /** @class */ (function () {
    function LightNationModule() {
    }
    LightNationModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* IonicModule */],
                __WEBPACK_IMPORTED_MODULE_3__light_util_light_util_module__["f" /* LightUtilModule */]
            ],
            declarations: [],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__light_nation_index__["d" /* LightFile */], __WEBPACK_IMPORTED_MODULE_4__light_nation_index__["f" /* LightFileTransfer */],
                __WEBPACK_IMPORTED_MODULE_4__light_nation_index__["a" /* LightAppVersion */], __WEBPACK_IMPORTED_MODULE_4__light_nation_index__["c" /* LightCamera */], __WEBPACK_IMPORTED_MODULE_4__light_nation_index__["e" /* LightFileOpen */],
                __WEBPACK_IMPORTED_MODULE_4__light_nation_index__["o" /* LightScan */], __WEBPACK_IMPORTED_MODULE_4__light_nation_index__["b" /* LightAudio */], __WEBPACK_IMPORTED_MODULE_4__light_nation_index__["m" /* LightMotion */],
                __WEBPACK_IMPORTED_MODULE_4__light_nation_index__["k" /* LightLocationService */], __WEBPACK_IMPORTED_MODULE_4__light_nation_index__["n" /* LightPermissisons */], __WEBPACK_IMPORTED_MODULE_14__ionic_native_app_version__["a" /* AppVersion */],
                __WEBPACK_IMPORTED_MODULE_4__light_nation_index__["l" /* LightMinimize */], __WEBPACK_IMPORTED_MODULE_4__light_nation_index__["j" /* LightJPush */], __WEBPACK_IMPORTED_MODULE_4__light_nation_index__["h" /* LightHotCodePush */],
                __WEBPACK_IMPORTED_MODULE_16__jiguang_ionic_jpush__["a" /* JPush */], __WEBPACK_IMPORTED_MODULE_15__ionic_native_android_permissions__["a" /* AndroidPermissions */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_zbar__["a" /* ZBar */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_file_transfer__["a" /* FileTransfer */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_8__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_image_picker__["a" /* ImagePicker */], __WEBPACK_IMPORTED_MODULE_10__ionic_native_diagnostic__["a" /* Diagnostic */], __WEBPACK_IMPORTED_MODULE_11__ionic_native_device_motion__["a" /* DeviceMotion */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_native_audio__["a" /* NativeAudio */], __WEBPACK_IMPORTED_MODULE_13__ionic_native_file_opener__["a" /* FileOpener */], __WEBPACK_IMPORTED_MODULE_4__light_nation_index__["i" /* LightImagePicker */],
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_hot_code_push__["a" /* HotCodePush */], __WEBPACK_IMPORTED_MODULE_18__ionic_native_app_minimize__["a" /* AppMinimize */]
            ],
            exports: []
        })
    ], LightNationModule);
    return LightNationModule;
}());


//# sourceMappingURL=light-nation.module.js.map

/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__light_writer_component__ = __webpack_require__(209);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__light_writer_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__light_writer_data_index__ = __webpack_require__(372);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__light_writer_data_index__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "m", function() { return __WEBPACK_IMPORTED_MODULE_1__light_writer_data_index__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "n", function() { return __WEBPACK_IMPORTED_MODULE_1__light_writer_data_index__["c"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "q", function() { return __WEBPACK_IMPORTED_MODULE_1__light_writer_data_index__["d"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__light_writer_date_light_writer_date_component__ = __webpack_require__(381);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__light_writer_date_light_writer_date_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__light_writer_text_index__ = __webpack_require__(382);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_3__light_writer_text_index__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "o", function() { return __WEBPACK_IMPORTED_MODULE_3__light_writer_text_index__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "p", function() { return __WEBPACK_IMPORTED_MODULE_3__light_writer_text_index__["c"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__light_writer_textarea_light_writer_textarea_component__ = __webpack_require__(386);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_4__light_writer_textarea_light_writer_textarea_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__light_writer_user_light_writer_user_component__ = __webpack_require__(387);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "l", function() { return __WEBPACK_IMPORTED_MODULE_5__light_writer_user_light_writer_user_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__light_writer_group_light_writer_group_component__ = __webpack_require__(388);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_6__light_writer_group_light_writer_group_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__light_writer_div_light_writer_div_component__ = __webpack_require__(389);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_7__light_writer_div_light_writer_div_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__light_writer_image_light_writer_image_component__ = __webpack_require__(390);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_8__light_writer_image_light_writer_image_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__common_index__ = __webpack_require__(17);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__light_writer_service__ = __webpack_require__(212);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_10__light_writer_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__light_writer_flow__ = __webpack_require__(101);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__light_writer_table_light_writer_table_component__ = __webpack_require__(391);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_12__light_writer_table_light_writer_table_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__light_writer_row_light_writer_row_component__ = __webpack_require__(392);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_13__light_writer_row_light_writer_row_component__["a"]; });














//# sourceMappingURL=index.js.map

/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LightFlowService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__light_writer_index__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__light_providers_light_providers_module__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__light_util_light_util_module__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__handle_muti_contact_handle_muti_contact_component__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__handle_muti_people_handle_muti_people_component__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__handle_single_contact_handle_single_contact_component__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__handle_single_people_handle_single_people_component__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__handle_step_handle_step_component__ = __webpack_require__(220);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









/**
 * 流程的服务器
 *
 * @export
 * @class LightFlowService
 */
var LightFlowService = /** @class */ (function () {
    /**
     * 流程的服务对象
     * @param {LightWriterService} writerService
     * @memberof LightFlowService
     */
    function LightFlowService(writerService, lightProvider) {
        this.writerService = writerService;
        this.lightProvider = lightProvider;
    }
    LightFlowService_1 = LightFlowService;
    /**
     * 获取开始流程的列表
     * @returns {Promise<any>}
     * @memberof LightFlowService
     */
    LightFlowService.prototype.getStartFlowList = function () {
        return this.lightProvider.lightHttp.get("Flow/GetStartFlowList");
    };
    /**
     * 得到开始流程的信息
     * @param {string} sCode
     * @returns {Promise<LightWriterFlow>}
     * @memberof LightFlowService
     */
    LightFlowService.prototype.getStartFlow = function (sCode) {
        var that = this;
        var result = new Promise(function (resolve, reject) {
            that.lightProvider.lightHttp.get("Flow/StartFlow", { objectID: sCode }).then(function (value) {
                var dataStartFlow = __WEBPACK_IMPORTED_MODULE_3__light_util_light_util_module__["d" /* LightJsonUtil */].toObject(value);
                that.getWriterFlow(dataStartFlow.sDocCode).then(function (content) {
                    resolve(content);
                }).catch(function (errText) {
                    that.lightProvider.popMessage("流程创建出错");
                });
            });
        });
        return result;
    };
    /**
     * 获取流程的信息
     * @param {string} objectID
     * @returns {Promise<LightWriterFlow>}
     * @memberof LightFlowService
     */
    LightFlowService.prototype.getWriterFlow = function (objectID) {
        return this.writerService.getWriterFlow(objectID);
    };
    /**
     * 获取写入的表格
     *
     * @param {LightWriterFlow} writerFlow
     * @returns {Promise<any>}
     * @memberof LightFlowService
     */
    LightFlowService.prototype.getWriterForm = function (writerFlow) {
        return this.writerService.getWriterForm(writerFlow);
    };
    /**
     * 提交流程的信息
     * @param {LightWriterFlow} writerFlow
     * @param {string} writerData
     * @memberof LightFlowService
     */
    LightFlowService.prototype.submitFlow = function (navCtrl, writerFlow, writerData) {
        var _this = this;
        this.writerService.saveWriterForm(writerFlow, __WEBPACK_IMPORTED_MODULE_3__light_util_light_util_module__["d" /* LightJsonUtil */].toJson(writerData)).then(function (value) {
            var result = false;
            //下一步是否为单步的操作
            if (writerFlow.isNextStepSingle()) {
                var userList = writerFlow.getNextStepUserList();
                if (!!userList && userList.length == 1) {
                    result = true;
                }
            }
            ///判断标识信息--一次性提交信息
            if (result) {
                _this._submitFlow(navCtrl, writerFlow, userList, writerFlow.getNextStepFristID());
            }
            else {
                if (!writerFlow.isNextStepSingle()) {
                    //判断选择环节信息
                    _this._submitFlowStep(navCtrl, writerFlow, value);
                }
                else {
                    _this._submitUserFlow(navCtrl, writerFlow);
                }
            }
        });
    };
    /**
     * 提交用户的流程信息
     * @param navCtrl
     * @param writerFlow
     */
    LightFlowService.prototype._submitUserFlow = function (navCtrl, writerFlow) {
        var userList = writerFlow.getNextStepUserList();
        if (!!userList && userList.length == 1) {
            this._submitFlow(navCtrl, writerFlow, userList, writerFlow.selectStepID);
        }
        else {
            ///下一步的用户信息
            if (writerFlow.isNextStepUserSingle()) {
                this._submitSingleFlow(navCtrl, writerFlow);
            }
            else {
                this._submitMutiFlow(navCtrl, writerFlow);
            }
        }
    };
    /**
     * 提交单人的流程
     *
     * @private
     * @param {LightWriterFlow} writerFlow
     * @memberof LightFlowService
     */
    LightFlowService.prototype._submitSingleFlow = function (navCtrl, writerFlow) {
        var userList = writerFlow.getNextStepUserList();
        if (!!userList && userList.length > 0) {
            this._submitSinglePeopleFlow(navCtrl, writerFlow);
        }
        else {
            this._submitSingleEmptyFlow(navCtrl, writerFlow);
        }
    };
    /**
     * 提交单选多人的流程
     *
     * @private
     * @memberof LightFlowService
     */
    LightFlowService.prototype._submitSinglePeopleFlow = function (navCtrl, writerFlow) {
        var _this = this;
        this.lightProvider.lightModal.push(__WEBPACK_IMPORTED_MODULE_7__handle_single_people_handle_single_people_component__["a" /* HandleSinglePeopleComponent */], { data: writerFlow.getNextStepUserList() }, function (value) {
            if (!!value) {
                _this._submitFlow(navCtrl, writerFlow, value, writerFlow.getSelectStepID());
            }
        });
    };
    /**
     * 提交单选多人的流程
     *
     * @private
     * @memberof LightFlowService
     */
    LightFlowService.prototype._submitSingleEmptyFlow = function (navCtrl, writerFlow) {
        var _this = this;
        this.lightProvider.lightModal.push(__WEBPACK_IMPORTED_MODULE_6__handle_single_contact_handle_single_contact_component__["a" /* HandleSingleContactComponent */], { data: writerFlow.getNextStepUserList() }, function (value) {
            if (!!value) {
                _this._submitFlow(navCtrl, writerFlow, value, writerFlow.getSelectStepID());
            }
        });
    };
    /**
     * 提交单人的流程
     *
     * @private
     * @param {LightWriterFlow} writerFlow
     * @memberof LightFlowService
     */
    LightFlowService.prototype._submitMutiFlow = function (navCtrl, writerFlow) {
        var userList = writerFlow.getNextStepUserList();
        if (!!userList && userList.length > 0) {
            this._submitMutiPeopleFlow(navCtrl, writerFlow);
        }
        else {
            this._submitMutiEmptyFlow(navCtrl, writerFlow);
        }
    };
    /**
     * 提交单选多人的流程
     *
     * @private
     * @memberof LightFlowService
     */
    LightFlowService.prototype._submitMutiPeopleFlow = function (navCtrl, writerFlow) {
        var _this = this;
        this.lightProvider.lightModal.push(__WEBPACK_IMPORTED_MODULE_5__handle_muti_people_handle_muti_people_component__["a" /* HandleMutiPeopleComponent */], { data: writerFlow.getNextStepUserList() }, function (value) {
            if (!!value) {
                _this._submitFlow(navCtrl, writerFlow, value, writerFlow.getSelectStepID());
            }
        });
    };
    /**
     * 提交单选多人的流程
     *
     * @private
     * @memberof LightFlowService
     */
    LightFlowService.prototype._submitMutiEmptyFlow = function (navCtrl, writerFlow) {
        var _this = this;
        this.lightProvider.lightModal.push(__WEBPACK_IMPORTED_MODULE_4__handle_muti_contact_handle_muti_contact_component__["a" /* HandleMutiContactComponent */], { data: writerFlow.getNextStepUserList() }, function (value) {
            if (!!value) {
                _this._submitFlow(navCtrl, writerFlow, value, writerFlow.getSelectStepID());
            }
        });
    };
    /**
     * 提交流程环节信息
     * @private
     * @param {LightWriterFlow} writerFlow
     * @param {*} userList
     * @param {string} nextStepID
     * @memberof LightFlowService
     */
    LightFlowService.prototype._submitFlowStep = function (navCtrl, writerFlow, userList) {
        var _this = this;
        this.lightProvider.lightModal.push(__WEBPACK_IMPORTED_MODULE_8__handle_step_handle_step_component__["a" /* HandleStepComponent */], { data: writerFlow.getNextStepList() }, function (value) {
            if (!!value) {
                writerFlow.selectStepID = value;
                _this.writerService.getNextWriterUserFlow(writerFlow, value).then(function (result) {
                    _this._submitUserFlow(navCtrl, result);
                }).catch(function (errText) {
                    _this.lightProvider.popMessage("流程提交失败");
                });
            }
        });
    };
    /**
     * 提交流程的信息
     * @private
     * @param {LightWriterFlow} writerFlow
     * @param {*} userList
     * @param {string} nextStepID
     * @memberof LightFlowService
     */
    LightFlowService.prototype._submitFlow = function (navCtrl, writerFlow, userList, nextStepID) {
        var _this = this;
        this.writerService.submitForm(writerFlow, userList, nextStepID).then(function (value) {
            _this.lightProvider.popMessage("成功提交流程");
            LightFlowService_1.flowDoneFlag = true;
            _this.lightProvider.lightNav.backToRoot(navCtrl);
        }).catch(function (errText) {
            _this.lightProvider.popMessage("流程提交失败");
        });
    };
    /**
     *
     * 归档信息
     * @memberof LightFlowHandleComponent
     */
    LightFlowService.prototype.archiveFlow = function (navCtrl, writerFlow) {
        var _this = this;
        this.writerService.archiveFlow(writerFlow).then(function (value) {
            _this.lightProvider.popMessage("归档成功");
            LightFlowService_1.flowDoneFlag = true;
            _this.lightProvider.lightNav.backToRoot(navCtrl);
        });
    };
    /**
     * 转交流程信息
     * @param navCtrl
     * @param writerFlow
     */
    LightFlowService.prototype.transferFlow = function (navCtrl, writerFlow, delivePeople, reason) {
        var _this = this;
        this.lightProvider.lightHttp.get("Flow/TransferFlow", { objectID: writerFlow.objectID, curStepID: writerFlow.getCurStepID(), user: delivePeople, reason: reason }).then(function (value) {
            _this.lightProvider.popMessage("转交成功");
            LightFlowService_1.flowDoneFlag = true;
            _this.lightProvider.lightNav.backToRoot(navCtrl);
        }).catch(function (errText) {
            _this.lightProvider.popMessage(errText);
        });
    };
    /**
     * 流程处理标识
     */
    LightFlowService.flowDoneFlag = false;
    LightFlowService = LightFlowService_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__light_writer_index__["h" /* LightWriterService */],
            __WEBPACK_IMPORTED_MODULE_2__light_providers_light_providers_module__["d" /* LightProviders */]])
    ], LightFlowService);
    return LightFlowService;
    var LightFlowService_1;
}());

//# sourceMappingURL=light-flow.service.js.map

/***/ }),
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__light_camera_lightCamera__ = __webpack_require__(321);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__light_camera_lightCamera__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__light_imagePicker_light_imagePicker__ = __webpack_require__(341);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_1__light_imagePicker_light_imagePicker__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__light_scan_lightScan__ = __webpack_require__(342);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "o", function() { return __WEBPACK_IMPORTED_MODULE_2__light_scan_lightScan__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__light_file_index__ = __webpack_require__(182);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_3__light_file_index__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_3__light_file_index__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__light_fileOpen_lightFileOpen__ = __webpack_require__(345);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_4__light_fileOpen_lightFileOpen__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__light_fileTransfer_lightFileTransfer__ = __webpack_require__(346);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_5__light_fileTransfer_lightFileTransfer__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__light_appVersion_lightAppVersion__ = __webpack_require__(347);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_6__light_appVersion_lightAppVersion__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__light_location_lightLocationSerive__ = __webpack_require__(348);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_7__light_location_lightLocationSerive__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__light_audio_lightAudio__ = __webpack_require__(350);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_8__light_audio_lightAudio__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__light_motion_lightMotion__ = __webpack_require__(351);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "m", function() { return __WEBPACK_IMPORTED_MODULE_9__light_motion_lightMotion__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__light_permissions_lightPermissions__ = __webpack_require__(352);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "n", function() { return __WEBPACK_IMPORTED_MODULE_10__light_permissions_lightPermissions__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__light_jPush_lightJPush__ = __webpack_require__(353);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_11__light_jPush_lightJPush__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__light_hotCodePush_lightHotCodePush__ = __webpack_require__(354);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_12__light_hotCodePush_lightHotCodePush__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__light_minimize_lightMinimize__ = __webpack_require__(355);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "l", function() { return __WEBPACK_IMPORTED_MODULE_13__light_minimize_lightMinimize__["a"]; });














//# sourceMappingURL=light-nation.index.js.map

/***/ }),
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lightConfig__ = __webpack_require__(92);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__lightConfig__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lightHttp__ = __webpack_require__(93);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__lightHttp__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lightUserConfig__ = __webpack_require__(196);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "o", function() { return __WEBPACK_IMPORTED_MODULE_2__lightUserConfig__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lightUser__ = __webpack_require__(197);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "n", function() { return __WEBPACK_IMPORTED_MODULE_3__lightUser__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lightPop__ = __webpack_require__(95);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "l", function() { return __WEBPACK_IMPORTED_MODULE_4__lightPop__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__lightMemoryCache__ = __webpack_require__(358);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__lightLocalCache__ = __webpack_require__(53);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_6__lightLocalCache__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__lightPlatform__ = __webpack_require__(359);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_7__lightPlatform__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__lightLoading__ = __webpack_require__(360);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_8__lightLoading__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__lightLoad__ = __webpack_require__(361);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_9__lightLoad__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__lightMemberImage__ = __webpack_require__(362);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_10__lightMemberImage__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__lightExit__ = __webpack_require__(198);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_11__lightExit__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__lightMethods__ = __webpack_require__(363);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_12__lightMethods__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__lightNav__ = __webpack_require__(199);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_13__lightNav__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__lightModal__ = __webpack_require__(200);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_14__lightModal__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__lightProviders__ = __webpack_require__(364);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "m", function() { return __WEBPACK_IMPORTED_MODULE_15__lightProviders__["a"]; });
















//# sourceMappingURL=index.js.map

/***/ }),
/* 92 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LightConfig; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lightLocalCache__ = __webpack_require__(53);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LightConfig = /** @class */ (function () {
    /**
     * 配置环境初始化
     * @param {LightLocalCache} localCache
     * @memberof LightConfig
     */
    function LightConfig(localCache) {
        this.localCache = localCache;
        //基础的Url对象
        this._baseUrl = "";
        //基础url的key值
        this._baseUrlKey = "baseUrl";
        //时间延迟
        this.timeOut = 10000;
    }
    Object.defineProperty(LightConfig.prototype, "baseUrl", {
        /**
         * 获取基础的url对象信息
         *
         * @type {string}
         * @memberof LightConfig
         */
        get: function () {
            var result = "";
            if (!!this._baseUrl) {
                result = this._baseUrl;
            }
            else {
                result = this.localCache.get(this._baseUrlKey);
            }
            return result;
        },
        /**
         * 设置基础的Url信息
         * @memberof LightConfig
         */
        set: function (value) {
            if (!!value) {
                this._baseUrl = value;
                this.localCache.set(this._baseUrlKey, value);
            }
        },
        enumerable: true,
        configurable: true
    });
    LightConfig = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__lightLocalCache__["a" /* LightLocalCache */]])
    ], LightConfig);
    return LightConfig;
}());

//# sourceMappingURL=lightConfig.js.map

/***/ }),
/* 93 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LightHttp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__lightConfig__ = __webpack_require__(92);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






//返回错误的标识
var failureFlag = "Failure:";
//返回旧版的OK的标识
var successFlag = "OK:";
//url的http的标识
var httpUrlFlag = "http://";
var LightHttp = /** @class */ (function () {
    /**
     * 底层的请求的信息
     * @param {Http} http
     * @param {LightConfig} lightConfig
     * @memberof LightHttp
     */
    function LightHttp(http, lightConfig) {
        this.http = http;
        this.lightConfig = lightConfig;
    }
    LightHttp_1 = LightHttp;
    //通过get的方法获取信息
    LightHttp.prototype.get = function (url, opt) {
        var that = this;
        url = this._httpUrlFilter(url);
        var result = new Promise(function (resolve, reject) {
            that._get(url, opt).then(function (value) {
                var resultFlag = that._isErr(value);
                if (!resultFlag[0]) {
                    resolve(resultFlag[1]);
                }
                else {
                    reject(resultFlag[1]);
                }
            }).catch(function (errText) {
                that._httpUrlErr();
                reject("网络服务异常");
            });
        });
        return result;
    };
    //通过Post方法获取信息
    LightHttp.prototype.post = function (url, opt) {
        //return this.get(url,opt);
        var that = this;
        url = this._httpUrlFilter(url);
        // console.log("url",url);
        var result = new Promise(function (resolve, reject) {
            that._post(url, opt).then(function (value) {
                var resultFlag = that._isErr(value);
                if (!resultFlag[0]) {
                    resolve(resultFlag[1]);
                }
                else {
                    reject(resultFlag[1]);
                }
            }).catch(function (errText) {
                that._httpUrlErr();
                reject("网络服务异常");
            });
        });
        return result;
    };
    /**
     * 得到Url的链接对象信息
     * @param {string} url
     * @returns {string}
     * @memberof LightHttp
     */
    LightHttp.prototype.getUrl = function (url) {
        return this._httpUrlFilter(url);
    };
    /**
     * 设置默认的参数信息
     * @param {string} key
     * @param {*} value
     * @memberof LightHttp
     */
    LightHttp.prototype.setDefaultParam = function (key, value) {
        if (!!key) {
            if (!!!LightHttp_1.defaultParam) {
                LightHttp_1.defaultParam = {};
            }
            LightHttp_1.defaultParam[key] = value;
        }
    };
    //网站的错误的操作
    LightHttp.prototype._httpUrlErr = function () {
        console.log("网络请求服务异常");
    };
    //网站的url过滤操作
    LightHttp.prototype._httpUrlFilter = function (urlText) {
        var result = urlText;
        if (!!result && !!this.lightConfig.baseUrl) {
            if (result.indexOf(httpUrlFlag) < 0) {
                result = this.lightConfig.baseUrl + result;
            }
        }
        return result;
    };
    //判断是否错误
    LightHttp.prototype._isErr = function (resultText) {
        var result = [false, resultText];
        if (!!resultText) {
            if (resultText.indexOf(failureFlag) >= 0) {
                result[0] = true;
            }
            if (resultText.indexOf(successFlag) >= 0) {
                result[1] = resultText.substr(successFlag.length, resultText.length - successFlag.length);
            }
        }
        return result;
    };
    //get获取方式信息
    LightHttp.prototype._get = function (url, opt) {
        var params = this._getSearchParams(opt);
        return this.http.get(url, { search: params }).map(function (res) {
            var targetText = res.text();
            //console.log(targetText);
            return targetText;
        }).toPromise();
    };
    //获取参数信息
    LightHttp.prototype._getSearchParams = function (opt) {
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* URLSearchParams */]();
        opt = this._checkFilterParams(opt);
        if (!!opt) {
            for (var key in opt) {
                params.set(key, opt[key]);
            }
        }
        return params;
    };
    //post获取信息
    LightHttp.prototype._post = function (url, opt) {
        //let body = JSON.stringify(opt);
        var body = this._getFromParams(opt);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", "application/x-www-form-urlencoded");
        //headers.append("Access-Control-Allow-Origin","*");
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({ headers: headers, method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Post });
        return this.http.post(url, body, options).map(function (res) {
            var targetText = res.text();
            return targetText;
        }).toPromise();
    };
    /**
     * 得到获取表单的参数
     *
     * @private
     * @param {object} [opt]
     * @returns {string}
     *
     * @memberof LightHttp
     */
    LightHttp.prototype._getFromParams = function (opt) {
        var result = "";
        opt = this._checkFilterParams(opt);
        if (!!opt) {
            for (var key in opt) {
                result = result + key + "=" + opt[key] + "&";
            }
        }
        return result;
    };
    LightHttp.prototype._checkFilterParams = function (opt) {
        var result = null;
        if (!!opt) {
            if (!!!result) {
                result = {};
            }
            for (var key in opt) {
                result[key] = opt[key];
            }
        }
        if (!!LightHttp_1.defaultParam) {
            if (!!!result) {
                result = {};
            }
            for (var param in LightHttp_1.defaultParam) {
                result[param] = LightHttp_1.defaultParam[param];
            }
        }
        return result;
    };
    /**
     * 默认的参数信息
     * @memberof LightHttp
     */
    LightHttp.defaultParam = null;
    LightHttp = LightHttp_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_5__lightConfig__["a" /* LightConfig */]])
    ], LightHttp);
    return LightHttp;
    var LightHttp_1;
}());

//# sourceMappingURL=lightHttp.js.map

/***/ }),
/* 94 */,
/* 95 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LightPop; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//用户对象的信息
var LightPop = /** @class */ (function () {
    //弹出控制器
    function LightPop(alertCtrl) {
        this.alertCtrl = alertCtrl;
        //自动时间关闭
        this.autoTimeClose = 2500;
    }
    /**
     * 弹出消息的对象
     * @param {string} 消息
     * @param {string} 标题
     *
     * @memberof LightPop
     */
    LightPop.prototype.message = function (message, title, autoClose) {
        if (autoClose === void 0) { autoClose = true; }
        title = this._checkTitle(title);
        var that = this;
        var result = new Promise(function (resolve, reject) {
            var alert = that.alertCtrl.create({
                title: title,
                subTitle: message,
                buttons: [{
                        text: '确定',
                        handler: function () {
                            resolve(true);
                        }
                    }]
            });
            alert.present();
            if (autoClose) {
                setTimeout(function () {
                    alert.dismiss();
                }, that.autoTimeClose);
            }
            ;
        });
        return result;
    };
    /**
     * 错误消息提示
     * @param {string} message
     * @param {string} [title]
     * @memberof LightPop
     */
    LightPop.prototype.errMessage = function (message, title) {
        this.message(message, title, false);
    };
    /**
     * 确认消息的对象
     *
     * @param {string} 消息
     * @param {string} 标题
     *
     * @memberof LightPop
     */
    LightPop.prototype.confirm = function (message, title) {
        title = this._checkTitle(title);
        var that = this;
        var result = new Promise(function (resolve, reject) {
            var alert = that.alertCtrl.create({
                title: title,
                subTitle: message,
                buttons: [{
                        text: '确定',
                        handler: function () {
                            resolve(true);
                        }
                    }, {
                        text: '关闭',
                        handler: function () {
                            resolve(false);
                        }
                    }]
            });
            alert.present();
        });
        return result;
    };
    /**
     *
     * 过滤相关的标题信息
     * @private
     * @param {string} title
     * @returns {string}
     *
     * @memberof LightPop
     */
    LightPop.prototype._checkTitle = function (title) {
        var result = title;
        if (!!!title) {
            title = "提示信息";
        }
        return result;
    };
    LightPop = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], LightPop);
    return LightPop;
}());

//# sourceMappingURL=lightPop.js.map

/***/ }),
/* 96 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__light_content_light_content__ = __webpack_require__(365);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_0__light_content_light_content__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__light_list_light_list_component__ = __webpack_require__(366);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_1__light_list_light_list_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__light_read_light_read_component__ = __webpack_require__(202);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_2__light_read_light_read_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__light_writer_light_writer_component__ = __webpack_require__(209);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_3__light_writer_light_writer_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__light_contact_light_contact_component__ = __webpack_require__(211);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_4__light_contact_light_contact_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__light_date_light_date_component__ = __webpack_require__(370);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_5__light_date_light_date_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__light_contact_light_member_detail_component__ = __webpack_require__(100);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__light_writer_light_writer_flow__ = __webpack_require__(101);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__light_writer_light_writer_service__ = __webpack_require__(212);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__light_read_light_read_service__ = __webpack_require__(213);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__light_flow_index__ = __webpack_require__(214);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__light_app_lightApp__ = __webpack_require__(401);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_11__light_app_lightApp__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__light_attach_index__ = __webpack_require__(225);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_12__light_attach_index__["a"]; });













//# sourceMappingURL=light-components.index.js.map

/***/ }),
/* 97 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__FormNodeAction__ = __webpack_require__(203);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__FormActionBase__ = __webpack_require__(98);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__FormListAction__ = __webpack_require__(204);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__FormList__ = __webpack_require__(205);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__FormNode__ = __webpack_require__(207);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_4__FormNode__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__FormRowUtil__ = __webpack_require__(368);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_5__FormRowUtil__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__FormActionMap__ = __webpack_require__(208);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_6__FormActionMap__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__FormEvent__ = __webpack_require__(369);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_7__FormEvent__["a"]; });








//# sourceMappingURL=index.js.map

/***/ }),
/* 98 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormActionBase; });
/**
 * 表单的动作信息
 * @export
 * @interface IFormAction
 */
var FormActionBase = /** @class */ (function () {
    /**
     * Creates an instance of FormActionBase.
     * @param {*} dataObject
     * @memberof FormActionBase
     */
    function FormActionBase(dataObject) {
        ///类型的Key值信息
        this._typeKey = "type";
        ///可视化的类型
        this._visiableType = "visiable";
        this.actionData = dataObject;
        if (!!this.actionData) {
            this.type = this.actionData[this._typeKey];
            this.visiable = this.actionData[this._visiableType];
        }
    }
    return FormActionBase;
}());

//# sourceMappingURL=FormActionBase.js.map

/***/ }),
/* 99 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormRowBase; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__FormRowBaseUtil__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__FormListAction__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__FormNodeAction__ = __webpack_require__(203);



/**
 * 表单的行对象
 * @export
 * @interface IFormRow
 */
var FormRowBase = /** @class */ (function () {
    ///控制器初始化
    function FormRowBase(dataOject, formEvent) {
        if (formEvent === void 0) { formEvent = null; }
        ///标题的Key值
        this._titleKey = "txt";
        ///类型的Key值
        this._typeKey = "type";
        ///类型的Key值
        this._detailTypeKey = "detailtype";
        ///配置对象的Key值
        this._etendObjectKey = "extend";
        ///动作对象的Key值
        this._actionObjectKey = "action";
        ///动作对象类型的Key值
        this._actionObjectTypeKey = "type";
        //内部的数据对象
        this.dataObject = null;
        this.dataObject = dataOject;
        this.formEvent = formEvent;
        if (!!this.dataObject) {
            this.type = this.dataObject[this._typeKey];
            this.extendObject = this.dataObject[this._etendObjectKey];
            this.title = this.dataObject[this._titleKey];
            this.detailType = this.dataObject[this._detailTypeKey];
            this.isNode = __WEBPACK_IMPORTED_MODULE_0__FormRowBaseUtil__["a" /* FormRowBaseUtil */].isNode(this.type);
            var actionObject = this.dataObject[this._actionObjectKey];
            if (!!actionObject) {
                var actionType = actionObject[this._actionObjectTypeKey];
                if (!!actionType) {
                    if (actionType == "list") {
                        this.activeData = new __WEBPACK_IMPORTED_MODULE_1__FormListAction__["a" /* FormListAction */](actionObject);
                    }
                    else if (actionType == "node") {
                        this.activeData = new __WEBPACK_IMPORTED_MODULE_2__FormNodeAction__["a" /* FormNodeAction */](actionObject);
                    }
                    else {
                    }
                }
            }
        }
    }
    return FormRowBase;
}());

//# sourceMappingURL=FormRowBase.js.map

/***/ }),
/* 100 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LightMemberDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__light_util_light_util_module__ = __webpack_require__(7);
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




var LightMemberDetailComponent = /** @class */ (function () {
    function LightMemberDetailComponent(navCtrl, navParams, lightHttp) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.lightHttp = lightHttp;
        //用户的名称
        this.userName = "";
        //组织机构的名称
        this.organzieName = "";
        //职位的名称
        this.title = "";
        //手机号码
        this.mobilePhone = "";
        //手机号码
        this.mobilePhoneEx = "";
        //邮箱地址
        this.emailAddress = "";
        //固定电话
        this.fixedPhone = "";
        //号码归属地
        this.mobileData = {};
        this.iphoneFlag = true;
        this.userName = navParams.get("userName");
        this.organzieName = navParams.get("organzieName");
        this.title = navParams.get("title");
    }
    ///初始化的信息
    LightMemberDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.lightHttp.post("User/GetUserInfo", { userAcount: this.userName }).then(function (value) {
            var itemObject = __WEBPACK_IMPORTED_MODULE_2__light_util_light_util_module__["d" /* LightJsonUtil */].toObject(value);
            _this.mobilePhone = itemObject['Mobile'];
            _this.mobilePhoneEx = _this._getPhoneNumber(_this.mobilePhone);
            _this.fixedPhone = itemObject['OffcieTel'];
            _this.emailAddress = itemObject['Email'];
            _this.belonging(_this.mobilePhone);
        });
    };
    LightMemberDetailComponent.prototype._getPhoneNumber = function (mobileNumber) {
        var result = "";
        if (!!mobileNumber) {
            result += mobileNumber.substr(0, 3);
            result += " ";
            result += mobileNumber.substr(3, 4);
            result += " ";
            result += mobileNumber.substr(7, 4);
            result += " ";
        }
        return result;
    };
    //号码归属地查询
    LightMemberDetailComponent.prototype.belonging = function (mobileNumber) {
        var _this = this;
        if (!!mobileNumber) {
            this.lightHttp.get("Belonging/Search", { phoneNumber: mobileNumber })
                .then(function (data) {
                if (__WEBPACK_IMPORTED_MODULE_2__light_util_light_util_module__["d" /* LightJsonUtil */].isJsonText(data)) {
                    _this.mobileData = __WEBPACK_IMPORTED_MODULE_2__light_util_light_util_module__["d" /* LightJsonUtil */].toObject(data);
                }
            });
            this.iphoneFlag = true;
        }
        else {
            this.iphoneFlag = false;
        }
    };
    LightMemberDetailComponent.prototype.callPhone = function () {
        if (!!this.mobilePhone) {
            window.location.href = "tel:" + this.mobilePhone;
            console.log("phone");
        }
    };
    LightMemberDetailComponent.prototype.callSms = function () {
        if (!!this.mobilePhone) {
            window.location.href = "sms:" + this.mobilePhone;
            console.log("callSms");
        }
    };
    LightMemberDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            // moduleId: module.id,
            selector: 'light-member-detail',template:/*ion-inline-start:"/Users/clark/Documents/personal/appFrame/src/light/light-components/light-contact/light-member-detail.component.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title text-center>\n      详细资料\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <div margin-top></div>\n    <ion-item no-lines>\n      <member-image [detailName]=\'userName\' item-start></member-image>\n      <h2>{{ userName }}</h2>\n      <p>\n        <span>昵称：</span>{{ userName }}</p>\n      <p>\n        <span></span>{{ organzieName }}/{{title}}</p>\n    </ion-item>\n    <div margin-top></div>\n    <ion-item no-lines class="member-iphone" *ngIf="iphoneFlag">\n      <h2> {{mobilePhoneEx}} </h2>\n      <p>{{mobileData.Province}} {{mobileData.ISP}}</p>\n      <ion-icon item-end name="ios-call-outline" color="secondary" (click)="callPhone()"></ion-icon>\n      <ion-icon item-end name="ios-mail-outline" (click)="callSms()"></ion-icon>\n    </ion-item>\n    <div margin-top></div>\n    <ion-list-header>\n      基础资料\n    </ion-list-header>\n    <ion-item class="baseInfo">\n      <ion-icon name="ios-mail-outline" item-left></ion-icon>\n      邮箱\n      <ion-note item-end>\n        {{emailAddress}}\n      </ion-note>\n    </ion-item>\n    <ion-item class="baseInfo">\n      <ion-icon name="ios-call-outline" item-left></ion-icon>\n      手机号\n      <ion-note item-end>\n        {{mobilePhone}}\n      </ion-note>\n    </ion-item>\n    <ion-item no-lines class="baseInfo">\n      <ion-icon name="ios-tablet-portrait-outline" item-left></ion-icon>\n      座机\n      <ion-note item-end>\n        {{fixedPhone}}\n      </ion-note>\n    </ion-item>\n\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/clark/Documents/personal/appFrame/src/light/light-components/light-contact/light-member-detail.component.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__light_providers_light_providers_module__["a" /* LightHttp */]])
    ], LightMemberDetailComponent);
    return LightMemberDetailComponent;
}());

//# sourceMappingURL=light-member-detail.component.js.map

/***/ }),
/* 101 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LightWriterFlow; });
/**
 * 写入流程信息
 *
 * @export
 * @class LightWriterFlow
 */
var LightWriterFlow = /** @class */ (function () {
    /**
     *
     * @param {LightHttp} lightHttp
     * @memberof LightWriterFlow
     */
    function LightWriterFlow(lightHttp) {
        this.lightHttp = lightHttp;
        /**
         * 对象的ID信息
         * @type {string}
         * @memberof LightWriterFlow
         */
        this.objectID = null;
        /**
         * 表单的内容
         * @type {*}
         * @memberof LightWriterFlow
         */
        this.formContent = null;
        /**
         * 当前的阶段信息对象
         *
         * @type {string}
         * @memberof LightWriterFlow
         */
        this.curStepObject = null;
        /**
         * 下一个阶段信息对象
         * @type {string}
         * @memberof LightWriterFlow
         */
        this.nextStepObject = null;
        /**
         * 下一步阶段用户对象
         *
         * @type {*}
         * @memberof LightWriterFlow
         */
        this.nextStepUserObject = null;
        /**
         * 上一个环节的对象信息
         */
        this.preStepObject = null;
        /**
         * 选择阶段的ID
         * @type {string}
         * @memberof LightWriterFlow
         */
        this.selectStepID = null;
    }
    /**
     * 得到当前环节的ID
     *
     * @returns {string}
     * @memberof LightWriterFlow
     */
    LightWriterFlow.prototype.getCurStepID = function () {
        var result = null;
        if (!!this.curStepObject) {
            result = this.curStepObject.ID;
        }
        return result;
    };
    /**
     * 得到当前环节的标题
     *
     * @returns {string}
     * @memberof LightWriterFlow
     */
    LightWriterFlow.prototype.getCurStepTitle = function () {
        var result = null;
        if (!!this.curStepObject) {
            result = this.curStepObject.Title;
        }
        return result;
    };
    /**
     * 得到当前环节的ID
     *
     * @returns {string}
     * @memberof LightWriterFlow
     */
    LightWriterFlow.prototype.getNextStepList = function () {
        return this.nextStepObject;
    };
    /**
     * 是否单个阶段信息
     *
     * @returns {boolean}
     * @memberof LightWriterFlow
     */
    LightWriterFlow.prototype.isNextStepSingle = function () {
        var result = false;
        if (!!this.nextStepObject && this.nextStepObject.length == 1) {
            result = true;
        }
        return result;
    };
    /**
     * 得到当前环节的ID
     *
     * @returns {string}
     * @memberof LightWriterFlow
     */
    LightWriterFlow.prototype.getNextStepFristID = function () {
        var result = "";
        if (!!this.nextStepObject && this.nextStepObject.length > 0) {
            result = this.nextStepObject[0].ID;
        }
        return result;
    };
    /**
     * 得到选择的阶段ID
     *
     * @returns {string}
     * @memberof LightWriterFlow
     */
    LightWriterFlow.prototype.getSelectStepID = function () {
        var result = "";
        if (!!!this.selectStepID) {
            result = this.getNextStepFristID();
        }
        else {
            result = this.selectStepID;
        }
        return result;
    };
    /**
     * 得到下一步用户类型
     *
     * @returns {string}
     * @memberof LightWriterFlow
     */
    LightWriterFlow.prototype.getNextStepUserType = function () {
        var result = null;
        if (!!this.nextStepUserObject) {
            result = this.nextStepUserObject.UserType;
        }
        return result;
    };
    /**
     * 判断是否单个类型
     *
     * @returns {boolean}
     * @memberof LightWriterFlow
     */
    LightWriterFlow.prototype.isNextStepUserSingle = function () {
        var result = false;
        var userType = this.getNextStepUserType();
        if (!!userType && userType == "single") {
            result = true;
        }
        return result;
    };
    /**
     * 得到下一步用户类型
     *
     * @returns {string}
     * @memberof LightWriterFlow
     */
    LightWriterFlow.prototype.getNextStepUserList = function () {
        var result = null;
        if (!!this.nextStepUserObject) {
            result = this.nextStepUserObject.UserList;
        }
        return result;
    };
    /**
     * 是否归档流程
     * @returns {boolean}
     * @memberof LightWriterFlow
     */
    LightWriterFlow.prototype.isArchiveFlow = function () {
        var result = true;
        if (!!this.getNextStepFristID()) {
            result = false;
        }
        return result;
    };
    /**
     * 自动提交
     */
    LightWriterFlow.prototype.isAutoSubmit = function () {
        var result = false;
        if (this.isNextStepUserSingle()) {
            var userList = this.getNextStepUserList();
            if (!!userList && userList.length == 1) {
                result = true;
            }
        }
        return result;
    };
    /**
     * 是否是第一个环节信息
     *
     * @returns {boolean}
     * @memberof LightWriterFlow
     */
    LightWriterFlow.prototype.isFristStep = function () {
        var result = false;
        if (!!!this.preStepObject) {
            result = true;
        }
        return result;
    };
    return LightWriterFlow;
}());

//# sourceMappingURL=light-writer.flow.js.map

/***/ }),
/* 102 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HandleSingleContactComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__light_providers_light_providers_module__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HandleSingleContactComponent = /** @class */ (function () {
    /**
     * 联系人单选的组件操作
     * @param {LightProviders} lightProvider
     * @param {ViewController} viewCtrl
     * @memberof HandleSingleContactComponent
     */
    function HandleSingleContactComponent(lightProvider, viewCtrl) {
        this.lightProvider = lightProvider;
        this.viewCtrl = viewCtrl;
        //用户列表
        this.userList = [];
    }
    /**
     * 回退的操作
     * @memberof HandleMutiContactComponent
     */
    HandleSingleContactComponent.prototype.goBack = function () {
        this.lightProvider.lightModal.dismiss(this.viewCtrl);
    };
    /**
     * 通讯录选择
     * @param {UserObject} userObject
     * @memberof HandleMutiContactComponent
     */
    HandleSingleContactComponent.prototype.contactSelect = function (userObject) {
        this.userList.push(userObject.Name);
        this.lightProvider.lightModal.dismiss(this.viewCtrl, this.userList);
    };
    HandleSingleContactComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            //moduleId: module.id,
            selector: 'handle-single-contact',template:/*ion-inline-start:"/Users/clark/Documents/personal/appFrame/src/light/light-components/light-flow/handle-single-contact/handle-single-contact.component.html"*/'<ion-header>\n  <ion-toolbar>\n    <ion-buttons left>\n      <button ion-button icon-only (click)="goBack()">\n        <ion-icon name="ios-close-circle-outline"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>单选人</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <contact-all (selectEvent)="contactSelect($event)"></contact-all>\n</ion-content>\n'/*ion-inline-end:"/Users/clark/Documents/personal/appFrame/src/light/light-components/light-flow/handle-single-contact/handle-single-contact.component.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__light_providers_light_providers_module__["d" /* LightProviders */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ViewController */]])
    ], HandleSingleContactComponent);
    return HandleSingleContactComponent;
}());

//# sourceMappingURL=handle-single-contact.component.js.map

/***/ }),
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 133;

/***/ }),
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../light/light-pages/light-feedback/light-feedback.component.module": [
		431,
		11
	],
	"../light/light-pages/light-message/light-message-content/light-message-content.component.module": [
		432,
		10
	],
	"../light/light-pages/light-message/light-message.component.module": [
		433,
		9
	],
	"../light/light-pages/light-person/email-modify/email-modify.component.module": [
		434,
		8
	],
	"../light/light-pages/light-person/light-person.component.module": [
		435,
		7
	],
	"../light/light-pages/light-person/password-modify/password-modify.component.module": [
		436,
		6
	],
	"../pages/examplePages/light-attach-page/light-attach-page.module": [
		437,
		5
	],
	"../pages/examplePages/light-http-page/light-http-page.module": [
		438,
		4
	],
	"../pages/examplePages/light-list-page/light-list-page.module": [
		439,
		3
	],
	"../pages/examplePages/light-popList-page/light-popList-page.module": [
		440,
		2
	],
	"../pages/examplePages/light-read-page/light-read-page.module": [
		441,
		1
	],
	"../pages/examplePages/light-writer-page/light-writer-page.module": [
		442,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 175;
module.exports = webpackAsyncContext;

/***/ }),
/* 176 */,
/* 177 */,
/* 178 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lightJsonUtil__ = __webpack_require__(329);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_0__lightJsonUtil__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lightStringAppend__ = __webpack_require__(330);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lightStringUtil__ = __webpack_require__(331);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_2__lightStringUtil__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lightArrayUtil__ = __webpack_require__(179);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_3__lightArrayUtil__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lightMapList__ = __webpack_require__(332);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_4__lightMapList__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__lightTimeUtil__ = __webpack_require__(333);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__lightMd5Util__ = __webpack_require__(334);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__lightObjectUtil__ = __webpack_require__(335);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__lightBrowserUtil__ = __webpack_require__(336);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_8__lightBrowserUtil__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__lightNumberUtil__ = __webpack_require__(337);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__lightStringRegexUtil__ = __webpack_require__(338);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__lightFunctionUtil__ = __webpack_require__(339);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_11__lightFunctionUtil__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__lightGuidUtil__ = __webpack_require__(340);
/* unused harmony namespace reexport */













//# sourceMappingURL=index.js.map

/***/ }),
/* 179 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LightArrayUtil; });
/*
     * 数据的工具类
     * @export
     * @class LightUtil
     */
var LightArrayUtil = /** @class */ (function () {
    function LightArrayUtil() {
    }
    /**
     * 判断是否为空
     * @static
     * @param {Array<any>} 数组信息
     * @returns {boolean}
     * @memberof LightArrayUtil
     */
    LightArrayUtil.isEmpty = function (array) {
        var result = false;
        if (!!!array || array.length == 0) {
            result = true;
        }
        return result;
    };
    /**
    * 获取索引的值信息
    * @static
    * @param {Array<any>} array
    * @param {*} value
    * @returns {number}
    *
    * @memberof LightArrayUtil
    */
    LightArrayUtil.getIndexOf = function (array, value) {
        var result = -1;
        if (!LightArrayUtil.isEmpty(array)) {
            for (var i = 0; i < array.length; i++) {
                if (array[i] == value) {
                    result = i;
                    break;
                }
            }
        }
        return result;
    };
    /**
     *
     *
     * @static
     * @param {Array<any>} array
     * @param {*} value
     * @returns {number}
     *
     * @memberof LightArrayUtil
     */
    LightArrayUtil.getLastIndexOf = function (array, value) {
        var result = -1;
        if (!!array && array.length >= 0) {
            for (var i = array.length - 1; i >= 0; i--) {
                if (array[i] == value) {
                    result = i;
                    break;
                }
            }
        }
        return result;
    };
    /**
     *
     * 判断是否包含值信息
     * @static
     * @param {Array<any>} 数组信息
     * @param {*} 值信息
     * @returns {boolean}
     *
     * @memberof LightArrayUtil
     */
    LightArrayUtil.contain = function (array, value) {
        var result = false;
        if (!LightArrayUtil.isEmpty(array)) {
            var index = LightArrayUtil.getIndexOf(array, value);
            if (index >= 0) {
                result = true;
            }
        }
        return result;
    };
    /**
     *var dataArray:Array<any>= [{Name:"a"},{Name:"b"},{Name:"c"}]
     * var index=LightArrayUtil.getFieldIndexOf(dataArray,"Name","c");
     * 获取字段索引信息
     *
     * @static
     * @param {Array<any>} array
     * @param {string} fieldName
     * @param {*} value
     * @returns {number}
     *
     * @memberof LightArrayUtil
     */
    LightArrayUtil.getFieldIndexOf = function (array, fieldName, value) {
        var result = -1;
        if (!LightArrayUtil.isEmpty(array) && !!fieldName) {
            for (var i = 0; i < array.length; i++) {
                var tempObject = array[i];
                if (!!tempObject && tempObject[fieldName] == value) {
                    result = i;
                    break;
                }
            }
        }
        return result;
    };
    /**
     * 包含字段的对象信息
     * @static
     * @param {Array<any>} 数组对象
     * @param {string} 字段名称
     * @param {*} 值信息
     * @returns {boolean}
     *
     * @memberof LightArrayUtil
     */
    LightArrayUtil.containField = function (array, fieldName, value) {
        var result = false;
        if (!LightArrayUtil.isEmpty(array) && !!fieldName) {
            var index = LightArrayUtil.getFieldIndexOf(array, fieldName, value);
            if (index >= 0) {
                result = true;
            }
        }
        return result;
    };
    /**
     * 清空数组的对象
     *
     * @static
     * @param {Array<any>} 数组的对象
     *
     * @memberof LightArrayUtil
     */
    LightArrayUtil.clear = function (array) {
        if (!!array) {
            array.splice(0, array.length);
        }
    };
    /**
     * 移除对应索引的数组值信息
     *
     * @static
     * @param {Array<any>} 数组的个数
     * @param {number} 索引值信息
     * @returns {boolean}
     *
     * @memberof LightArrayUtil
     */
    LightArrayUtil.removeIndex = function (array, index) {
        var result = false;
        if (!!array && index >= 0) {
            array.splice(index, 1);
        }
        return result;
    };
    /**
     * 移除对应的信息
     *
     * @static
     * @param {Array<any>} 数组
     * @param {*} 值信息
     * @returns {boolean}
     *
     * @memberof LightArrayUtil
     */
    LightArrayUtil.remove = function (array, value) {
        var result = false;
        var index = LightArrayUtil.getIndexOf(array, value);
        if (index >= 0) {
            array.splice(index, 1);
            result = true;
        }
        return result;
    };
    /**
     *
     * 添加Array数组信息
     * @static
     * @param {Array<any>} source
     * @param {Array<any>} target
     *
     * @memberof LightArrayUtil
     */
    LightArrayUtil.joinArray = function (source, target) {
        if (!!source && !!target && target.length > 0) {
            target.forEach(function (element) {
                source.push(element);
            });
        }
    };
    /**
     * 链接字节数组的列表
     * @static
     * @param {...Array<any>} args
     * @returns {Array<any>}
     *
     * @memberof LightArrayUtil
     */
    LightArrayUtil.joinArrayList = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var result = [];
        if (!!args && args.length > 0) {
            for (var index = 0; index < args.length; index++) {
                var element = args[index];
                element.forEach(function (item) {
                    result.push(item);
                });
            }
        }
        return result;
    };
    return LightArrayUtil;
}());

//# sourceMappingURL=lightArrayUtil.js.map

/***/ }),
/* 180 */,
/* 181 */,
/* 182 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lightFile__ = __webpack_require__(343);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__lightFile__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lightFileType__ = __webpack_require__(344);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__lightFileType__["a"]; });


//# sourceMappingURL=index.js.map

/***/ }),
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return WebSpatialReference; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LatLng; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__CoordinateUtil__ = __webpack_require__(349);

var WebSpatialReference;
(function (WebSpatialReference) {
    WebSpatialReference[WebSpatialReference["WGS84"] = 1] = "WGS84";
    WebSpatialReference[WebSpatialReference["GCJ02"] = 2] = "GCJ02";
    WebSpatialReference[WebSpatialReference["BD_09"] = 3] = "BD_09";
})(WebSpatialReference || (WebSpatialReference = {}));
var LatLng = /** @class */ (function () {
    function LatLng(latitude, longitude, spatialreference) {
        this.spatialReference = null;
        this.latitude = latitude;
        this.longitude = longitude;
        this.spatialReference = spatialreference;
    }
    LatLng.prototype.toBD_09 = function () {
        var result = null;
        switch (this.spatialReference) {
            case WebSpatialReference.BD_09:
                break;
            case WebSpatialReference.GCJ02:
                result = __WEBPACK_IMPORTED_MODULE_0__CoordinateUtil__["a" /* CoordinateUtil */].transformFromGCJToBD(this);
                this.latitude = result.latitude;
                this.longitude = result.longitude;
                this.spatialReference = WebSpatialReference.BD_09;
                break;
            case WebSpatialReference.WGS84:
                result = __WEBPACK_IMPORTED_MODULE_0__CoordinateUtil__["a" /* CoordinateUtil */].transformFromWGSToGCJ(this);
                result = __WEBPACK_IMPORTED_MODULE_0__CoordinateUtil__["a" /* CoordinateUtil */].transformFromGCJToBD(result);
                this.latitude = result.latitude;
                this.longitude = result.longitude;
                this.spatialReference = WebSpatialReference.BD_09;
                break;
            default:
                throw new Error("Latlng's 空间参考未定义");
        }
        return this;
    };
    LatLng.prototype.toGCJ_02 = function () {
        var result = null;
        switch (this.spatialReference) {
            case WebSpatialReference.BD_09:
                result = __WEBPACK_IMPORTED_MODULE_0__CoordinateUtil__["a" /* CoordinateUtil */].transformFromBDToGCJ(this);
                this.latitude = result.latitude;
                this.longitude = result.longitude;
                this.spatialReference = WebSpatialReference.GCJ02;
                break;
            case WebSpatialReference.GCJ02:
                break;
            case WebSpatialReference.WGS84:
                result = __WEBPACK_IMPORTED_MODULE_0__CoordinateUtil__["a" /* CoordinateUtil */].transformFromWGSToGCJ(this);
                this.latitude = result.latitude;
                this.longitude = result.longitude;
                this.spatialReference = WebSpatialReference.GCJ02;
                break;
            default:
                throw new Error("Latlng's 空间参考未定义");
        }
        return this;
    };
    LatLng.prototype.toWGS_84 = function () {
        var result = null;
        switch (this.spatialReference) {
            case WebSpatialReference.BD_09:
                result = __WEBPACK_IMPORTED_MODULE_0__CoordinateUtil__["a" /* CoordinateUtil */].transformFromBDToGCJ(this);
                result = __WEBPACK_IMPORTED_MODULE_0__CoordinateUtil__["a" /* CoordinateUtil */].transformFromGCJToWGS(result);
                this.latitude = result.latitude;
                this.longitude = result.longitude;
                this.spatialReference = WebSpatialReference.WGS84;
                break;
            case WebSpatialReference.GCJ02:
                result = __WEBPACK_IMPORTED_MODULE_0__CoordinateUtil__["a" /* CoordinateUtil */].transformFromGCJToWGS(this);
                this.latitude = result.latitude;
                this.longitude = result.longitude;
                this.spatialReference = WebSpatialReference.WGS84;
                break;
            case WebSpatialReference.WGS84:
                break;
            default:
                throw new Error("Latlng's 空间参考未定义");
        }
        return this;
    };
    return LatLng;
}());

//# sourceMappingURL=LatlngUtil.js.map

/***/ }),
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */,
/* 195 */,
/* 196 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LightUserConfig; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//用户对象的信息
var LightUserConfig = /** @class */ (function () {
    //用户的配置信息
    function LightUserConfig() {
        //是否登录标识
        this._loginFlag = false;
        //登录名称
        this._loginName = "";
        //登录密码
        this._loginPassword = "";
    }
    /**
     * 得到登录的名称
     * @returns {string} 获取登录名称
     * @memberof LightUser
     */
    LightUserConfig.prototype.getLoginName = function () {
        return this._loginName;
    };
    //判断是否登录信息
    LightUserConfig.prototype.equalLoginName = function (loginName) {
        var result = false;
        if (!!loginName && !!this._loginName) {
            if (this._loginName == loginName) {
                result = true;
            }
        }
        return result;
    };
    /**
     * 判断是否相等
     * @param {string} password
     * @returns {boolean}
     *
     * @memberof LightUser
     */
    LightUserConfig.prototype.equalLoginPassword = function (password) {
        var result = false;
        if (!!password && !!this._loginPassword) {
            if (this._loginPassword == password) {
                result = true;
            }
        }
        return result;
    };
    /**
     * 登录的方法信息
     * @param {string} 用户的名称
     * @param {string} 用户的密码
     *
     * @memberof LightUser
     */
    LightUserConfig.prototype.login = function (userName, loginPassword) {
        this._loginName = userName;
        this._loginPassword = loginPassword;
        this._loginFlag = true;
    };
    //清空的操作
    LightUserConfig.prototype.clear = function () {
        this._loginFlag = false;
        this._loginName = "";
        this._loginPassword = "";
    };
    LightUserConfig = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], LightUserConfig);
    return LightUserConfig;
}());

//# sourceMappingURL=lightUserConfig.js.map

/***/ }),
/* 197 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LightUser; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lightUserConfig__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lightHttp__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lightLocalCache__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__light_util_light_util_module__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__light_nation_light_nation_module__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_filter__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_toPromise__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










//用户对象的信息
var LightUser = /** @class */ (function () {
    //用户的配置信息
    function LightUser(platform, events, keyboard, lightMinimize, userConfig, lightHttp, localCache) {
        this.platform = platform;
        this.events = events;
        this.keyboard = keyboard;
        this.lightMinimize = lightMinimize;
        this.userConfig = userConfig;
        this.lightHttp = lightHttp;
        this.localCache = localCache;
        //获取用户登录的Url
        this._userLoginUrl = "User/CheckUser";
        //获取用户信息的Url
        this._userInfoUrl = "User/GetUserInfo";
        //用户更新密码的Url
        this._userUpdatePasswordUrl = "User/ModifyUserPass";
        //系统用户名称的key
        this._userNameKey = "SysUserName";
        //系统用户密码的Key
        this._userPasswordKey = "SysUserPassword";
        //用户信息的key
        this._userInfoKey = "SysUserInfo";
        //用户的默认参数信息
        this._defaultKey = "_sysName";
    }
    LightUser_1 = LightUser;
    /**
     * 用户的登录信息
     *
     * @param {string} 用户名称
     * @param {string} 用户密码
     * @returns {Promise<any>}
     * @memberof LightUser
     */
    LightUser.prototype.userLogin = function (userName, userPassword) {
        var that = this;
        var result = new Promise(function (resolve, reject) {
            if (!!userName) {
                that.lightHttp.post(that._userLoginUrl, { userAcount: userName, userPass: userPassword })
                    .then(function () {
                    that._userLogin(userName, userPassword).then(function (data) {
                        resolve(data);
                    }).catch(function (errText) {
                        reject(errText);
                    });
                }).catch(function (errText) {
                    reject(errText);
                });
            }
            else {
                reject();
            }
        });
        return result;
    };
    /**
     * 自动登录的操作
     *
     *
     * @memberof LightUserService
     */
    LightUser.prototype.autoLoginCheck = function () {
        var that = this;
        var result = new Promise(function (resolve, reject) {
            if (that.localCache.contain(that._userNameKey)
                && that.localCache.contain(that._userPasswordKey)) {
                that.userLogin(that.localCache.get(that._userNameKey), that.localCache.get(that._userPasswordKey)).then(function () {
                    resolve();
                }).catch(function (errText) {
                    reject(errText);
                });
            }
            else {
                reject("用户缓存不存在");
            }
        });
        return result;
    };
    /**
     * 更新账户信息
     *
     * @param {any} newPassword
     * @param {any} oldPassword
     *
     * @memberof LightUserService
     */
    LightUser.prototype.updatePassword = function (newPassword, oldPassword) {
        var that = this;
        var result = new Promise(function (resolve, reject) {
            if (that.userConfig.equalLoginPassword(oldPassword)) {
                that.lightHttp.post(that._userUpdatePasswordUrl, {
                    userAcount: that.userConfig.getLoginName(),
                    userPass: oldPassword,
                    userNewPass: newPassword
                }).then(function () {
                    that._userCacheInit(that.userConfig.getLoginName(), newPassword);
                    resolve();
                }).catch(function () {
                    reject();
                });
            }
        });
        return result;
    };
    /**
     * 用户退出
     * @memberof LightUserService
     */
    LightUser.prototype.userExit = function () {
        // this.localCache.remove(this._userNameKey);
        this.localCache.remove(this._userPasswordKey);
        this.userConfig.clear();
        LightUser_1._userInfo = null;
        //this._userInfo=null;
    };
    /**
     * 得到用户的名称
     * @returns {string}
     *
     * @memberof LightUserService
     */
    LightUser.prototype.getUserName = function () {
        var result = "";
        var userInfo = this.getUserInfo();
        if (!!userInfo) {
            result = userInfo['UserName'];
        }
        return result;
    };
    /**
     * 获取用户的基本信息
     * @returns {*}
     * @memberof LightUser
     */
    LightUser.prototype.getUserInfo = function () {
        var result;
        if (!!LightUser_1._userInfo) {
            result = LightUser_1._userInfo;
        }
        else {
            if (this.localCache.contain(this._userInfoKey)) {
                result = LightUser_1._userInfo = __WEBPACK_IMPORTED_MODULE_5__light_util_light_util_module__["d" /* LightJsonUtil */].toObject(this.localCache.get(this._userInfoKey));
            }
        }
        return result;
    };
    /**
     * 用户登录的信息
     *
     * @private
     * @param {string} 用户名称
     * @param {string} 用户密码
     * @returns {Promise<any>}
     *
     * @memberof LightUserService
     */
    LightUser.prototype._userLogin = function (userName, userPassword) {
        var that = this;
        this._userCacheInit(userName, userPassword);
        var result = new Promise(function (resolve, reject) {
            that.lightHttp.post(that._userInfoUrl, { userAcount: userName }).then(function (data) {
                LightUser_1._userInfo = __WEBPACK_IMPORTED_MODULE_5__light_util_light_util_module__["d" /* LightJsonUtil */].toObject(data);
                that.lightHttp.setDefaultParam(that._defaultKey, LightUser_1._userInfo["UserName"]);
                that.localCache.set(that._userInfoKey, data);
                resolve(data);
            }).catch(function (errText) {
                reject(errText);
            });
        });
        return result;
    };
    /**
     * 用户缓存初始化
     * @private
     * @param {string} 用户名称
     * @param {string} 用户密码
     *
     * @memberof LightUserService
     */
    LightUser.prototype._userCacheInit = function (userName, userPassword) {
        this.userConfig.login(userName, userPassword);
        this.localCache.set(this._userNameKey, userName);
        this.localCache.set(this._userPasswordKey, userPassword);
    };
    /**
     * 安卓物理返回按键处理
     */
    LightUser.prototype.registerBackButtonAction = function (ionicApp, navCtrl) {
        var _this = this;
        if (this.platform.is('ios')) {
            return;
        }
        this.platform.registerBackButtonAction(function () {
            _this.events.publish('android:backButtonAction');
            if (_this.keyboard.isOpen()) {
                _this.keyboard.close();
                return;
            }
            // 如果想点击返回按钮隐藏toast或loading或Overlay就把下面加上
            // this.ionicApp._toastPortal.getActive() ||this.ionicApp._loadingPortal.getActive()|| this.ionicApp._overlayPortal.getActive()
            var activePortal = ionicApp._modalPortal.getActive() || ionicApp._toastPortal.getActive() || ionicApp._overlayPortal.getActive();
            if (activePortal) {
                activePortal.dismiss();
                return;
            }
            var childNav = navCtrl.getActiveChildNavs()[0]; // 获取tabs导航,this.nav是总导航,tabs是子导航
            if (!childNav) {
                _this.lightMinimize.minimize();
                return;
            }
            var tab = childNav.getSelected(); // 获取选中的tab
            var activeVC = tab.getActive(); // 通过当前选中的tab获取ViewController
            var activeNav = activeVC.getNav(); // 通过当前视图的ViewController获取的NavController
            return activeNav.canGoBack() ? activeNav.pop() : _this.lightMinimize.minimize();
        }, 1);
    };
    //用户信息
    LightUser._userInfo = null;
    LightUser = LightUser_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Keyboard */],
            __WEBPACK_IMPORTED_MODULE_6__light_nation_light_nation_module__["e" /* LightMinimize */],
            __WEBPACK_IMPORTED_MODULE_2__lightUserConfig__["a" /* LightUserConfig */],
            __WEBPACK_IMPORTED_MODULE_3__lightHttp__["a" /* LightHttp */],
            __WEBPACK_IMPORTED_MODULE_4__lightLocalCache__["a" /* LightLocalCache */]])
    ], LightUser);
    return LightUser;
    var LightUser_1;
}());

//# sourceMappingURL=lightUser.js.map

/***/ }),
/* 198 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LightExit; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lightPop__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//退出对象的信息
var LightExit = /** @class */ (function () {
    /**
     * 退出的操作信息
     * @param {Platform} platform
     * @param {LightPop} lightPop
     * @memberof LightExit
     */
    function LightExit(platform, lightPop) {
        this.platform = platform;
        this.lightPop = lightPop;
    }
    /**
     * app的退出操作
     *
     * @memberof LightExit
     */
    LightExit.prototype.appExit = function () {
        var _this = this;
        this.lightPop.confirm("是否退出程序", "退出").then(function (result) {
            _this.platform.exitApp();
        }).catch(function (errText) {
        });
    };
    LightExit = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1__lightPop__["a" /* LightPop */]])
    ], LightExit);
    return LightExit;
}());

//# sourceMappingURL=lightExit.js.map

/***/ }),
/* 199 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LightNav; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__light_util_light_util_module__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//用户对象的信息
var LightNav = /** @class */ (function () {
    /**
     * 地图的导航操作
     * @param {LightNav} nav
     * @memberof LightNav
     */
    function LightNav() {
    }
    /**
     * 设置根目录页面
     * @memberof LightNav
     */
    LightNav.prototype.setRootPage = function (rootPage) {
        this._rootPage = rootPage;
    };
    /**
     * 返回根目录页面信息
     */
    LightNav.prototype.getRootPage = function () {
        return this._rootPage;
    };
    /**
     *
     *
     * @param {*} page
     * @param {*} data
     * @memberof LightNav
     */
    LightNav.prototype.push = function (navCtrl, page, data) {
        if (data === void 0) { data = null; }
        if (__WEBPACK_IMPORTED_MODULE_1__light_util_light_util_module__["e" /* LightStringUtil */].isString(page)) {
            this._pushStringView(navCtrl, page, data);
        }
        else if (__WEBPACK_IMPORTED_MODULE_1__light_util_light_util_module__["c" /* LightFunctionUtil */].isFunction(page)) {
            this._pushFunctionView(navCtrl, page, data);
        }
        else {
        }
    };
    /**
     * 载入字符串视图信息
     *
     * @private
     * @param {*} page
     * @param {*} [data=null]
     * @memberof LightNav
     */
    LightNav.prototype._pushStringView = function (navCtrl, page, data) {
        if (data === void 0) { data = null; }
        var lastView = this._getLastView(navCtrl);
        var flag = false;
        if (!!lastView && lastView.name == page) {
            flag = true;
        }
        if (!flag) {
            navCtrl.push(page, data);
        }
    };
    /**
     * 载入类信息视图信息
     *
     * @private
     * @param {*} page
     * @param {*} [data=null]
     * @memberof LightNav
     */
    LightNav.prototype._pushFunctionView = function (navCtrl, page, data) {
        if (data === void 0) { data = null; }
        var lastView = this._getLastView(navCtrl);
        var flag = false;
        if (!!lastView && lastView.name == __WEBPACK_IMPORTED_MODULE_1__light_util_light_util_module__["c" /* LightFunctionUtil */].getFunctionName(page)) {
            flag = true;
        }
        if (!flag) {
            navCtrl.push(page, data);
        }
    };
    /**
     * 得到最后一个View的信息
     *
     * @private
     * @returns {*}
     * @memberof LightNav
     */
    LightNav.prototype._getLastView = function (navCtrl) {
        var result = null;
        var viewArray = navCtrl.getViews();
        if (!!viewArray && viewArray.length > 0) {
            result = viewArray[viewArray.length - 1];
        }
        return result;
    };
    /**
     * 返回Back的方法
     * @param {*} page
     * @param {*} [data=null]
     * @memberof LightNav
     */
    LightNav.prototype.back = function (navCtrl, page, data) {
        if (data === void 0) { data = null; }
        if (__WEBPACK_IMPORTED_MODULE_1__light_util_light_util_module__["e" /* LightStringUtil */].isString(page)) {
            this._backStringView(page, data);
        }
        else if (__WEBPACK_IMPORTED_MODULE_1__light_util_light_util_module__["c" /* LightFunctionUtil */].isFunction(page)) {
            this._backFunctionView(page, data);
        }
        else {
        }
    };
    /**
     * 返回字符串视图信息
     *
     * @private
     * @param {*} page
     * @param {*} [data=null]
     * @memberof LightNav
     */
    LightNav.prototype._backStringView = function (navCtrl, page, data) {
        if (data === void 0) { data = null; }
        navCtrl.popTo(page, data);
    };
    /**
     * 返回方法视图信息
     *
     * @private
     * @param {*} page
     * @param {*} [data=null]
     * @memberof LightNav
     */
    LightNav.prototype._backFunctionView = function (navCtrl, page, data) {
        if (data === void 0) { data = null; }
        navCtrl.popTo(page, data);
    };
    /**
     * 回退到根目录
     * @memberof LightNav
     */
    LightNav.prototype.backToRoot = function (navCtrl) {
        if (!!navCtrl) {
            navCtrl.popToRoot();
        }
    };
    LightNav = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], LightNav);
    return LightNav;
}());

//# sourceMappingURL=lightNav.js.map

/***/ }),
/* 200 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LightModal; });
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


//用户对象的信息
var LightModal = /** @class */ (function () {
    // private _viewController:ViewController=null;
    /**
     *
     * 模态窗口控制器
     * @param {ModalController} modal
     * @memberof LightModal
     */
    function LightModal(modalCtrl) {
        this.modalCtrl = modalCtrl;
    }
    /**
     * 参数的初始化
     * @param {NavController} navCtrl
     * @memberof LightNav
     */
    LightModal.prototype.paramInit = function (navCtrl) {
    };
    /**
     * 弹出模态窗口信息
     * @param {*} page
     * @param {*} data
     * @memberof LightModal
     */
    LightModal.prototype.push = function (page, data, callback) {
        if (callback === void 0) { callback = null; }
        var profileModal = this.modalCtrl.create(page, data);
        profileModal.onDidDismiss(function (data) {
            if (!!callback) {
                callback(data);
            }
        });
        profileModal.present();
    };
    /**
     * 弹出模态窗口信息
     * @param {*} page
     * @param {*} data
     * @memberof LightModal
     */
    LightModal.prototype.push2 = function (page, callback) {
        if (callback === void 0) { callback = null; }
        var profileModal = this.modalCtrl.create(page);
        profileModal.onDidDismiss(function (data) {
            if (!!callback) {
                callback(data);
            }
        });
        profileModal.present();
    };
    /**
     * 释放模态窗口
     */
    LightModal.prototype.dismiss = function (navCtrl, data) {
        if (data === void 0) { data = null; }
        navCtrl.dismiss(data);
    };
    LightModal = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ModalController */]])
    ], LightModal);
    return LightModal;
}());

//# sourceMappingURL=lightModal.js.map

/***/ }),
/* 201 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return LightComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__light_providers_light_providers_module__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__light_util_light_util_module__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__light_nation_light_nation_module__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__light_components_index__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__light_contact_index__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__light_read_index__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__light_writer_index__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__light_flow_index__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__light_attach_index__ = __webpack_require__(225);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_5__light_components_index__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_5__light_components_index__["d"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_5__light_components_index__["f"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_5__light_components_index__["g"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_5__light_components_index__["h"]; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












///导出的列表信息
var dataList = [
    //公共基础组件
    __WEBPACK_IMPORTED_MODULE_5__light_components_index__["d" /* LightContentComponent */], __WEBPACK_IMPORTED_MODULE_5__light_components_index__["f" /* LightListComponent */], __WEBPACK_IMPORTED_MODULE_5__light_components_index__["e" /* LightDateComponent */],
    //通讯录组件
    __WEBPACK_IMPORTED_MODULE_6__light_contact_index__["f" /* MemberImageComponent */], __WEBPACK_IMPORTED_MODULE_6__light_contact_index__["b" /* ContactContentComponent */], __WEBPACK_IMPORTED_MODULE_6__light_contact_index__["c" /* ContactMenuComponent */], __WEBPACK_IMPORTED_MODULE_6__light_contact_index__["d" /* LightContactComponent */], __WEBPACK_IMPORTED_MODULE_6__light_contact_index__["e" /* LightMemberDetailComponent */], __WEBPACK_IMPORTED_MODULE_6__light_contact_index__["a" /* ContactComponent */],
    //读取表单组件
    __WEBPACK_IMPORTED_MODULE_7__light_read_index__["a" /* LightReadComponent */], __WEBPACK_IMPORTED_MODULE_7__light_read_index__["b" /* LightReadDivComponent */], __WEBPACK_IMPORTED_MODULE_7__light_read_index__["c" /* LightReadGroupComponent */], __WEBPACK_IMPORTED_MODULE_7__light_read_index__["h" /* LightReadTextComponent */], __WEBPACK_IMPORTED_MODULE_7__light_read_index__["i" /* LightReadTextNormalComponent */], __WEBPACK_IMPORTED_MODULE_7__light_read_index__["j" /* LightReadTextPhoneComponent */], __WEBPACK_IMPORTED_MODULE_7__light_read_index__["d" /* LightReadImageComponent */], __WEBPACK_IMPORTED_MODULE_7__light_read_index__["g" /* LightReadTableComponent */], __WEBPACK_IMPORTED_MODULE_7__light_read_index__["e" /* LightReadRowComponent */],
    //写入表单组件
    __WEBPACK_IMPORTED_MODULE_8__light_writer_index__["j" /* LightWriterTextComponent */], __WEBPACK_IMPORTED_MODULE_8__light_writer_index__["k" /* LightWriterTextareaComponent */], __WEBPACK_IMPORTED_MODULE_8__light_writer_index__["a" /* LightWriterComponent */], __WEBPACK_IMPORTED_MODULE_8__light_writer_index__["b" /* LightWriterDataComponent */], __WEBPACK_IMPORTED_MODULE_8__light_writer_index__["c" /* LightWriterDateComponent */], __WEBPACK_IMPORTED_MODULE_8__light_writer_index__["l" /* LightWriterUserComponent */], __WEBPACK_IMPORTED_MODULE_8__light_writer_index__["d" /* LightWriterDivComponent */], __WEBPACK_IMPORTED_MODULE_8__light_writer_index__["e" /* LightWriterGroupComponent */], __WEBPACK_IMPORTED_MODULE_8__light_writer_index__["f" /* LightWriterImageComponent */], __WEBPACK_IMPORTED_MODULE_8__light_writer_index__["i" /* LightWriterTableComponent */], __WEBPACK_IMPORTED_MODULE_8__light_writer_index__["g" /* LightWriterRowComponent */],
    //写入表单组件
    __WEBPACK_IMPORTED_MODULE_8__light_writer_index__["p" /* WriterTextComponent */], __WEBPACK_IMPORTED_MODULE_8__light_writer_index__["o" /* WriterNumberComponent */], __WEBPACK_IMPORTED_MODULE_8__light_writer_index__["q" /* WriterToggleComponent */], __WEBPACK_IMPORTED_MODULE_8__light_writer_index__["m" /* WriterCheckComponent */], __WEBPACK_IMPORTED_MODULE_8__light_writer_index__["n" /* WriterMutiComponent */],
    //流程表单组件
    __WEBPACK_IMPORTED_MODULE_9__light_flow_index__["i" /* LightFlowComponent */], __WEBPACK_IMPORTED_MODULE_9__light_flow_index__["k" /* LightFlowHandleComponent */], __WEBPACK_IMPORTED_MODULE_9__light_flow_index__["h" /* LightFlowBackComponent */], __WEBPACK_IMPORTED_MODULE_9__light_flow_index__["j" /* LightFlowDeliverComponent */], __WEBPACK_IMPORTED_MODULE_9__light_flow_index__["c" /* HandleMutiContactComponent */], __WEBPACK_IMPORTED_MODULE_9__light_flow_index__["d" /* HandleMutiPeopleComponent */], __WEBPACK_IMPORTED_MODULE_9__light_flow_index__["e" /* HandleSingleContactComponent */], __WEBPACK_IMPORTED_MODULE_9__light_flow_index__["f" /* HandleSinglePeopleComponent */], __WEBPACK_IMPORTED_MODULE_9__light_flow_index__["g" /* HandleStepComponent */], __WEBPACK_IMPORTED_MODULE_9__light_flow_index__["a" /* BackShowStepComponent */], __WEBPACK_IMPORTED_MODULE_9__light_flow_index__["b" /* BackSubmitStepComponent */],
    //附件的组件信息
    __WEBPACK_IMPORTED_MODULE_10__light_attach_index__["a" /* LightAttachComponent */],
];
var providerList = [
    __WEBPACK_IMPORTED_MODULE_7__light_read_index__["f" /* LightReadService */],
    __WEBPACK_IMPORTED_MODULE_8__light_writer_index__["h" /* LightWriterService */],
    __WEBPACK_IMPORTED_MODULE_9__light_flow_index__["l" /* LightFlowService */]
];
var LightComponentsModule = /** @class */ (function () {
    function LightComponentsModule() {
    }
    LightComponentsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicModule */],
                __WEBPACK_IMPORTED_MODULE_3__light_util_light_util_module__["f" /* LightUtilModule */],
                __WEBPACK_IMPORTED_MODULE_2__light_providers_light_providers_module__["e" /* LightProvidersModule */],
                __WEBPACK_IMPORTED_MODULE_4__light_nation_light_nation_module__["f" /* LightNationModule */]
            ],
            declarations: dataList,
            exports: dataList,
            providers: providerList,
            entryComponents: [
                //公共基础组件
                __WEBPACK_IMPORTED_MODULE_6__light_contact_index__["d" /* LightContactComponent */], __WEBPACK_IMPORTED_MODULE_6__light_contact_index__["e" /* LightMemberDetailComponent */]
            ]
        })
    ], LightComponentsModule);
    return LightComponentsModule;
}());


//# sourceMappingURL=light-components.module.js.map

/***/ }),
/* 202 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LightReadComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__light_common_index__ = __webpack_require__(97);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LightReadComponent = /** @class */ (function () {
    //构造信息
    function LightReadComponent() {
        //读取数据的信息
        this.readData = {};
        //表单的列表对象信息
        this.formListArray = [];
        //表单动作映射
        this.formActionMap = null;
        //表单事件信息
        this.formEvent = null;
    }
    /**
     * 内部的初始化信息
     * @memberof LightReadComponent
     */
    LightReadComponent.prototype.ngOnInit = function () {
        this.formListArray = [];
        this.formActionMap = new __WEBPACK_IMPORTED_MODULE_1__light_common_index__["a" /* FormActionMap */]();
        this.formEvent = new __WEBPACK_IMPORTED_MODULE_1__light_common_index__["b" /* FormEvent */]();
        this._flush();
    };
    LightReadComponent.prototype.ngOnChanges = function (changes) {
        this.ngOnInit();
    };
    /**
     * 内部的数据刷新操作
     * @private
     * @memberof LightReadComponent
     */
    LightReadComponent.prototype._flush = function () {
        if (!!this.readData) {
            this.formListArray = __WEBPACK_IMPORTED_MODULE_1__light_common_index__["d" /* FormRowUtil */].getFormDta(this.readData, this.formEvent);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], LightReadComponent.prototype, "readData", void 0);
    LightReadComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'light-read',template:/*ion-inline-start:"/Users/clark/Documents/personal/appFrame/src/light/light-components/light-read/light-read.component.html"*/'<div *ngFor="let rowlist of formListArray">\n  <light-read-group [rowList]="rowlist"></light-read-group>\n</div>\n'/*ion-inline-end:"/Users/clark/Documents/personal/appFrame/src/light/light-components/light-read/light-read.component.html"*/
            // styleUrls: ['light-read.component.scss']
        }),
        __metadata("design:paramtypes", [])
    ], LightReadComponent);
    return LightReadComponent;
}());

//# sourceMappingURL=light-read.component.js.map

/***/ }),
/* 203 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormNodeAction; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__FormActionBase__ = __webpack_require__(98);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

/**
 * 表单的动作信息
 * @export
 * @interface IFormAction
 */
var FormNodeAction = /** @class */ (function (_super) {
    __extends(FormNodeAction, _super);
    ///表单节点动作
    function FormNodeAction(dataObject) {
        var _this = _super.call(this, dataObject) || this;
        ///动作列表的Key值信息
        _this._actionListKey = "list";
        ///动作状态的Key值信息
        _this._actionStatusKey = "status";
        ///动作状态的key值信息
        _this._actionDetailKey = "detail";
        if (!!dataObject) {
            _this.actionList = dataObject[_this._actionListKey];
            _this.actionStatus = dataObject[_this._actionStatusKey];
            _this.actionDetail = dataObject[_this._actionDetailKey];
        }
        return _this;
    }
    return FormNodeAction;
}(__WEBPACK_IMPORTED_MODULE_0__FormActionBase__["a" /* FormActionBase */]));

//# sourceMappingURL=FormNodeAction.js.map

/***/ }),
/* 204 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormListAction; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__FormActionBase__ = __webpack_require__(98);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

/**
 * 表单的动作信息
 * @export
 * @interface IFormAction
 */
var FormListAction = /** @class */ (function (_super) {
    __extends(FormListAction, _super);
    function FormListAction(dataObject) {
        var _this = _super.call(this, dataObject) || this;
        ///头部可视化的标识
        _this._headVisableKey = "headvisiable";
        ///展现的可视化的标识
        _this._displayVisableKey = "displayvisiable";
        ///头部的可是标识
        _this.headVisable = false;
        ///展现的标识
        _this.displayVisable = false;
        if (!!dataObject) {
            _this.headVisable = dataObject[_this._headVisableKey];
            _this.displayVisable = dataObject[_this._displayVisableKey];
        }
        return _this;
    }
    return FormListAction;
}(__WEBPACK_IMPORTED_MODULE_0__FormActionBase__["a" /* FormActionBase */]));

//# sourceMappingURL=FormListAction.js.map

/***/ }),
/* 205 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormList; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__FormRowBase__ = __webpack_require__(99);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

/**
 * 表单的行对象
 * @export
 * @interface IFormRow
 */
var FormList = /** @class */ (function (_super) {
    __extends(FormList, _super);
    //表单的行对象初始化
    function FormList(dataOject, formEvent) {
        if (formEvent === void 0) { formEvent = null; }
        var _this = _super.call(this, dataOject, formEvent) || this;
        _this.childData = [];
        return _this;
    }
    /**
     * 增加行数据
     *
     * @param {IFormRow} formRow
     * @memberof FormList
     */
    FormList.prototype.addRowData = function (formRow) {
        this.childData.push(formRow);
    };
    /**
     * 得到行数据信息
     *
     * @returns {Array<IFormRow>}
     * @memberof FormList
     */
    FormList.prototype.getRowData = function () {
        var result = [];
        return result;
    };
    return FormList;
}(__WEBPACK_IMPORTED_MODULE_0__FormRowBase__["a" /* FormRowBase */]));

//# sourceMappingURL=FormList.js.map

/***/ }),
/* 206 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormRowBaseUtil; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__FormFomat__ = __webpack_require__(367);

/**
 * 表格行的工具类
 *
 * @export
 * @class FormRowUtil
 */
var FormRowBaseUtil = /** @class */ (function () {
    function FormRowBaseUtil() {
    }
    /**
    * 判断是否为节点信息
    * @static
    * @param {string} type
    * @returns {boolean}
    *
    * @memberof FormRowUtil
    */
    FormRowBaseUtil.isNode = function (type) {
        var result = false;
        if (FormRowBaseUtil.isStartNode(type) || FormRowBaseUtil.isEndNode(type)) {
            result = true;
        }
        return result;
    };
    /**
    * 判断是否为组件对象
    * @returns {boolean}
    * @memberof FormRowObject
    */
    FormRowBaseUtil.isStartNode = function (type) {
        var result = false;
        if (!!type) {
            if (type == __WEBPACK_IMPORTED_MODULE_0__FormFomat__["a" /* FormFomat */].GroupStartType || type == __WEBPACK_IMPORTED_MODULE_0__FormFomat__["a" /* FormFomat */].TableStartType || type == __WEBPACK_IMPORTED_MODULE_0__FormFomat__["a" /* FormFomat */].GroupStartType) {
                result = true;
            }
        }
        return result;
    };
    /**
     * 判断是否为结束节点信息
     *
     * @returns {boolean}
     *
     * @memberof FormRowObject
     */
    FormRowBaseUtil.isEndNode = function (type) {
        var result = false;
        if (!!type) {
            if (type == __WEBPACK_IMPORTED_MODULE_0__FormFomat__["a" /* FormFomat */].GroupEndType || type == __WEBPACK_IMPORTED_MODULE_0__FormFomat__["a" /* FormFomat */].TableEndType || type == __WEBPACK_IMPORTED_MODULE_0__FormFomat__["a" /* FormFomat */].GroupEndType) {
                result = true;
            }
        }
        return result;
    };
    return FormRowBaseUtil;
}());

//# sourceMappingURL=FormRowBaseUtil.js.map

/***/ }),
/* 207 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormNode; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__FormRowBase__ = __webpack_require__(99);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

/**
 * 表单的行对象
 * @export
 * @interface IFormRow
 */
var FormNode = /** @class */ (function (_super) {
    __extends(FormNode, _super);
    //节点的值信息
    //value: any="";
    function FormNode(dataOject, formEvent) {
        if (formEvent === void 0) { formEvent = null; }
        var _this = _super.call(this, dataOject, formEvent) || this;
        //值类型的key值
        _this._valueKey = "value";
        return _this;
        // if (!!dataOject) {
        //     this.value = dataOject[this._valueKey];
        // }
    }
    Object.defineProperty(FormNode.prototype, "value", {
        /**
         * 返回value的值信息
         *
         * @readonly
         * @type {*}
         * @memberof FormNode
         */
        get: function () {
            var result = "";
            if (!!this.dataObject) {
                result = this.dataObject[this._valueKey];
            }
            return result;
        },
        /**
         * 设置value的值信息
         *
         * @memberof FormNode
         */
        set: function (temp) {
            if (!!this.dataObject) {
                this.dataObject[this._valueKey] = temp;
            }
        },
        enumerable: true,
        configurable: true
    });
    return FormNode;
}(__WEBPACK_IMPORTED_MODULE_0__FormRowBase__["a" /* FormRowBase */]));

//# sourceMappingURL=FormNode.js.map

/***/ }),
/* 208 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormActionMap; });
// import { IFormAction } from './IFormActive';
/**
 * 表单的动作信息
 * @export
 * @interface IFormAction
 */
var FormActionMap = /** @class */ (function () {
    function FormActionMap() {
    }
    return FormActionMap;
}());

//# sourceMappingURL=FormActionMap.js.map

/***/ }),
/* 209 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LightWriterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__light_common_index__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__light_writer_config__ = __webpack_require__(210);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LightWriterComponent = /** @class */ (function () {
    /**
     * 写入的组织控件的信息
     * @memberof LightWriterComponent
     */
    function LightWriterComponent() {
        //读取数据的信息
        this.writerData = {};
        //表单的列表对象信息
        this.formListArray = [];
        //表单动作映射
        this.formActionMap = null;
        //表单事件信息
        this.formEvent = null;
        //表单的配置信息
        this.formConfig = new __WEBPACK_IMPORTED_MODULE_2__light_writer_config__["a" /* LightWriterConfig */]();
        //读取数据的信息
        this.headFlag = true;
    }
    /**
     * 内部的初始化信息
     * @memberof LightReadComponent
     */
    LightWriterComponent.prototype.ngOnInit = function () {
        this.formListArray = [];
        this.formActionMap = new __WEBPACK_IMPORTED_MODULE_1__light_common_index__["a" /* FormActionMap */]();
        this.formEvent = new __WEBPACK_IMPORTED_MODULE_1__light_common_index__["b" /* FormEvent */]();
        this.formConfig.headFlag = this.headFlag;
        this._flush();
    };
    //改变的状态信息
    LightWriterComponent.prototype.ngOnChanges = function (changes) {
        this.ngOnInit();
    };
    /**
     * 内部的数据刷新操作
     * @private
     * @memberof LightReadComponent
     */
    LightWriterComponent.prototype._flush = function () {
        if (!!this.writerData) {
            this.formListArray = __WEBPACK_IMPORTED_MODULE_1__light_common_index__["d" /* FormRowUtil */].getFormDta(this.writerData, this.formEvent);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], LightWriterComponent.prototype, "writerData", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Boolean)
    ], LightWriterComponent.prototype, "headFlag", void 0);
    LightWriterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'light-writer',template:/*ion-inline-start:"/Users/clark/Documents/personal/appFrame/src/light/light-components/light-writer/light-writer.component.html"*/'<div *ngFor="let rowlist of formListArray">\n  <light-writer-group [rowList]="rowlist" [writerData]="writerData" [writerConfig]="formConfig"></light-writer-group>\n</div>\n'/*ion-inline-end:"/Users/clark/Documents/personal/appFrame/src/light/light-components/light-writer/light-writer.component.html"*/,
        }),
        __metadata("design:paramtypes", [])
    ], LightWriterComponent);
    return LightWriterComponent;
}());

//# sourceMappingURL=light-writer.component.js.map

/***/ }),
/* 210 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LightWriterConfig; });
/**
 * 写入流程信息
 *
 * @export
 * @class LightWriterFlow
 */
var LightWriterConfig = /** @class */ (function () {
    /**
     * 写入的配置信息
     * @memberof LightWriterConfig
     */
    function LightWriterConfig() {
        /**
         * 头部信息
         */
        this.headFlag = true;
    }
    return LightWriterConfig;
}());

//# sourceMappingURL=light-writer.config.js.map

/***/ }),
/* 211 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LightContactComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__light_member_detail_component__ = __webpack_require__(100);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LightContactComponent = /** @class */ (function () {
    /**
     * 联系人的组件
     * @memberof LightContactComponent
     */
    function LightContactComponent(navCtrl) {
        this.navCtrl = navCtrl;
    }
    /**
     *
     * 联系人选择
     * @memberof LightContactComponent
     */
    LightContactComponent.prototype.contactSelect = function (userObject) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__light_member_detail_component__["a" /* LightMemberDetailComponent */], {
            userName: userObject.Name,
            organzieName: userObject.organizeName,
            title: userObject.Title
        });
    };
    LightContactComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'light-contact',template:/*ion-inline-start:"/Users/clark/Documents/personal/appFrame/src/light/light-components/light-contact/light-contact.component.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title text-center>\n      通讯录\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content class="page-contact">\n  <contact-all (selectEvent)="contactSelect($event)"></contact-all>\n</ion-content>\n'/*ion-inline-end:"/Users/clark/Documents/personal/appFrame/src/light/light-components/light-contact/light-contact.component.html"*/
        })
        //contact的控件
        ,
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */]])
    ], LightContactComponent);
    return LightContactComponent;
}());

//# sourceMappingURL=light-contact.component.js.map

/***/ }),
/* 212 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LightWriterService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__light_providers_light_providers_module__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__light_util_light_util_module__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__light_writer_flow__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * 写入表格服务操作
 *
 * @export
 * @class LightWriterService
 */
var LightWriterService = /** @class */ (function () {
    /**
     * 写入的服务对象信息
     * @memberof LightWriterService
     */
    function LightWriterService(lightHttp) {
        this.lightHttp = lightHttp;
        /**
         * 得到流程表单信息
         *
         * @private
         * @type {string}
         * @memberof LightWriterService
         */
        this._getEditFormUrl = "Flow/GetEditForm";
        /**
         * 得到当前环节链接
         * @private
         * @type {string}
         * @memberof LightWriterService
         */
        this._getCurStepUrl = "Flow/GetCurStep";
        /**
         * 得到下一步阶段环节信息
         */
        this._getNextStepUrl = "Flow/GetSubNextStep";
        /**
         * 得到下一步阶段用户信息
         * @private
         * @type {string}
         * @memberof LightWriterService
         */
        this._getNextStepUser = "Flow/GetNextStepUser";
        /**
         * 上一个环节链接信息
         */
        this._preStepUrl = "Flow/GetPreStep";
        /**
         * 归档的流程链接
         * @private
         * @type {string}
         * @memberof LightWriterService
         */
        this._archiveFlowUrl = "Flow/ArchiveFlow";
        /**
         * 保存编辑表单链接
         * @private
         * @type {string}
         * @memberof LightWriterService
         */
        this._saveEditFormUrl = "Flow/SaveEditForm";
    }
    /**
     * 得到编辑的流程信息
     * @param {string} objectID
     * @param {string} step
     * @returns
     * @memberof LightWriterService
     */
    LightWriterService.prototype.getWriterFlow = function (objectID) {
        var result = null;
        if (!!objectID) {
            var resultObject = new __WEBPACK_IMPORTED_MODULE_3__light_writer_flow__["a" /* LightWriterFlow */](this.lightHttp);
            resultObject.objectID = objectID;
            var that = this;
            result = new Promise(function (resolve, reject) {
                that.lightHttp.get(that._getCurStepUrl, { objectID: objectID }).then(function (value) {
                    resultObject.curStepObject = __WEBPACK_IMPORTED_MODULE_2__light_util_light_util_module__["d" /* LightJsonUtil */].toObject(value);
                    that.lightHttp.get(that._preStepUrl, { objectID: objectID, curStepID: resultObject.getCurStepID() }).then(function (value) {
                        resultObject.preStepObject = __WEBPACK_IMPORTED_MODULE_2__light_util_light_util_module__["d" /* LightJsonUtil */].toObject(value);
                        that._getWriterFlowInfo(that, objectID, resultObject, resolve, reject);
                    }).catch(function (errText) {
                        that._getWriterFlowInfo(that, objectID, resultObject, resolve, reject);
                        //reject(errText);
                    });
                }).catch(function (errText) {
                    reject(errText);
                });
            });
        }
        return result;
    };
    /**
     * 获取写入流程的信息
     * @param that
     * @param objectID
     * @param resultObject
     * @param resolve
     * @param reject
     */
    LightWriterService.prototype._getWriterFlowInfo = function (that, objectID, resultObject, resolve, reject) {
        that.lightHttp.get(that._getNextStepUrl, { objectID: objectID, curStepID: resultObject.getCurStepID() }).then(function (value) {
            resultObject.nextStepObject = __WEBPACK_IMPORTED_MODULE_2__light_util_light_util_module__["d" /* LightJsonUtil */].toObject(value);
            if (resultObject.isNextStepSingle()) {
                that.lightHttp.get(that._getNextStepUser, { stepID: resultObject.getNextStepFristID() }).then(function (value) {
                    resultObject.nextStepUserObject = __WEBPACK_IMPORTED_MODULE_2__light_util_light_util_module__["d" /* LightJsonUtil */].toObject(value);
                    resolve(resultObject);
                }).catch(function (errText) {
                    reject(errText);
                });
            }
            else {
                resolve(resultObject);
            }
        }).catch(function (errText) {
            reject(errText);
        });
    };
    /**
     * 得到下一步用户的流程信息
     *
     * @param {LightWriterFlow} writerFlow
     * @returns {Promise<LightWriterFlow>}
     * @memberof LightWriterService
     */
    LightWriterService.prototype.getNextWriterUserFlow = function (resultObject, stepID) {
        var that = this;
        var result = new Promise(function (resolve, reject) {
            that.lightHttp.get(that._getNextStepUser, { stepID: stepID }).then(function (value) {
                resultObject.nextStepUserObject = __WEBPACK_IMPORTED_MODULE_2__light_util_light_util_module__["d" /* LightJsonUtil */].toObject(value);
                resolve(resultObject);
            }).catch(function (errText) {
                reject(errText);
            });
        });
        return result;
    };
    /**
     * 获取写入的表单信息
     * @param {LightWriterFlow} writerFlow
     * @returns {Promise<LightWriterFlow>}
     * @memberof LightWriterService
     */
    LightWriterService.prototype.getWriterForm = function (writerFlow) {
        return this.lightHttp.get(this._getEditFormUrl, { objectID: writerFlow.objectID, curStepID: writerFlow.getCurStepID() });
    };
    /**
     * 保存流程 表单信息
     * @param {LightWriterFlow} writerFlow
     * @param {*} formContent
     * @param {boolean} checkMustFields
     * @returns {Promise<any>}
     * @memberof LightWriterService
     */
    LightWriterService.prototype.saveWriterForm = function (writerFlow, formContent, checkMustFields) {
        if (checkMustFields === void 0) { checkMustFields = false; }
        return this.lightHttp.post(this._saveEditFormUrl, { objectID: writerFlow.objectID, curStepID: writerFlow.getCurStepID(), content: formContent, checkMustFields: checkMustFields });
    };
    /**
     * 提交表单对象
     * @param {LightWriterFlow} writerFlow
     * @param {*} userList
     * @returns {Promise<any>}
     * @memberof LightWriterService
     */
    LightWriterService.prototype.submitForm = function (writerFlow, userList, nextStepID) {
        var userText = "";
        if (!!userList) {
            userText = userList.join(";");
        }
        return this.lightHttp.get("Flow/Submit", { objectID: writerFlow.objectID, curStepID: writerFlow.getCurStepID(), user: userText, stepID: nextStepID });
    };
    /**
     * 转交流程信息
     * @param {LightWriterFlow} writerFlow
     * @param {Array<any>} userList
     * @returns {Promise<any>}
     * @memberof LightWriterService
     */
    LightWriterService.prototype.transferFlow = function (writerFlow, user, reason) {
        return this.lightHttp.get("Flow/TransferFlow", { objectID: writerFlow.objectID, curStepID: writerFlow.getCurStepID(), user: user, reason: reason });
    };
    /**
     * 流程的归档信息
     * @param {LightWriterFlow} writerFlow
     * @returns {Promise<any>}
     * @memberof LightWriterService
     */
    LightWriterService.prototype.archiveFlow = function (writerFlow) {
        return this.lightHttp.get(this._archiveFlowUrl, { objectID: writerFlow.objectID, curStepID: writerFlow.getCurStepID() });
    };
    /**
     * 打回流程信息
     *
     * @param {LightWriterFlow} writerFlow
     * @param {string} backToStepID
     * @param {string} submitToStepID
     * @param {string} reason
     * @returns {Promise<any>}
     * @memberof LightWriterService
     */
    LightWriterService.prototype.backToFlow = function (writerFlow, backToStepID, submitToStepID, reason) {
        return this.lightHttp.get("Flow/BackToFlow", { objectID: writerFlow.objectID, curStepID: writerFlow.getCurStepID(), backToStepID: backToStepID, submitToStepID: submitToStepID, reason: reason });
    };
    /**
     * 得到流程的日志信息
     * @param {LightWriterFlow} writerFlow
     * @returns {Promise<any>}
     * @memberof LightWriterService
     */
    LightWriterService.prototype.getFlowLog = function (writerFlow) {
        return this.lightHttp.get("Flow/GetFlowStepLog", { code: writerFlow.objectID });
    };
    LightWriterService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__light_providers_light_providers_module__["a" /* LightHttp */]])
    ], LightWriterService);
    return LightWriterService;
}());

//# sourceMappingURL=light-writer.service.js.map

/***/ }),
/* 213 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LightReadService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__light_providers_light_providers_module__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * 写入表格服务操作
 *
 * @export
 * @class LightWriterService
 */
var LightReadService = /** @class */ (function () {
    /**
     * 写入的服务对象信息
     * @memberof LightWriterService
     */
    function LightReadService(lightHttp) {
        this.lightHttp = lightHttp;
    }
    /**
     * 得到编辑的流程信息
     * @param {string} objectID
     * @param {string} step
     * @returns
     * @memberof LightWriterService
     */
    LightReadService.prototype.getReadForm = function (objectID) {
        return this.lightHttp.get("/Flow/GetFlowForm", { objectID: objectID });
    };
    LightReadService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__light_providers_light_providers_module__["a" /* LightHttp */]])
    ], LightReadService);
    return LightReadService;
}());

//# sourceMappingURL=light-read.service.js.map

/***/ }),
/* 214 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__light_flow_light_flow_component__ = __webpack_require__(371);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_0__light_flow_light_flow_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__light_flow_handle_light_flow_handle_component__ = __webpack_require__(216);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_1__light_flow_handle_light_flow_handle_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__light_flow_back_light_flow_back_component__ = __webpack_require__(221);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_2__light_flow_back_light_flow_back_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__light_flow_deliver_light_flow_deliver_component__ = __webpack_require__(224);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_3__light_flow_deliver_light_flow_deliver_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__handle_muti_contact_handle_muti_contact_component__ = __webpack_require__(217);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_4__handle_muti_contact_handle_muti_contact_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__handle_muti_people_handle_muti_people_component__ = __webpack_require__(218);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_5__handle_muti_people_handle_muti_people_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__handle_single_contact_handle_single_contact_component__ = __webpack_require__(102);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_6__handle_single_contact_handle_single_contact_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__handle_single_people_handle_single_people_component__ = __webpack_require__(219);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_7__handle_single_people_handle_single_people_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__handle_step_handle_step_component__ = __webpack_require__(220);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_8__handle_step_handle_step_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__back_show_step_back_show_step_component__ = __webpack_require__(222);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_9__back_show_step_back_show_step_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__back_submit_step_back_submit_step_component__ = __webpack_require__(223);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_10__back_submit_step_back_submit_step_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__light_flow_service__ = __webpack_require__(56);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "l", function() { return __WEBPACK_IMPORTED_MODULE_11__light_flow_service__["a"]; });












//# sourceMappingURL=index.js.map

/***/ }),
/* 215 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__light_read_component__ = __webpack_require__(202);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__light_read_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__light_read_div_light_read_div_component__ = __webpack_require__(393);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__light_read_div_light_read_div_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__light_read_group_light_read_group_component__ = __webpack_require__(394);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__light_read_group_light_read_group_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__light_read_text_light_read_text_component__ = __webpack_require__(395);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_3__light_read_text_light_read_text_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__light_read_text_light_read_text_normal_light_read_text_normal_component__ = __webpack_require__(396);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_4__light_read_text_light_read_text_normal_light_read_text_normal_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__light_read_text_light_read_text_phone_light_read_text_phone_component__ = __webpack_require__(397);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_5__light_read_text_light_read_text_phone_light_read_text_phone_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__light_read_image_light_read_image_component__ = __webpack_require__(398);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_6__light_read_image_light_read_image_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__light_read_service__ = __webpack_require__(213);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_7__light_read_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__light_read_row_light_read_row_component__ = __webpack_require__(399);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_8__light_read_row_light_read_row_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__light_read_table_light_read_table_component__ = __webpack_require__(400);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_9__light_read_table_light_read_table_component__["a"]; });










//# sourceMappingURL=index.js.map

/***/ }),
/* 216 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LightFlowHandleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__light_util_light_util_module__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__light_flow_service__ = __webpack_require__(56);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LightFlowHandleComponent = /** @class */ (function () {
    /**
     * Creates an instance of LightFlowHandleComponent.
     * @param {LightWriterService} LightWriterFlow
     * @param {NavParams} navParam
     * @memberof LightFlowHandleComponent
     */
    function LightFlowHandleComponent(navCtrl, navParam, flowService) {
        this.navCtrl = navCtrl;
        this.navParam = navParam;
        this.flowService = flowService;
        ///流程的操作
        this.lightFlow = null;
        //是否归档流程信息
        this.isArchiveFlow = false;
        this.lightFlow = this.navParam.get("flow");
        this._Init();
    }
    /**
     * 内部初始化
     */
    LightFlowHandleComponent.prototype._Init = function () {
        this.isArchiveFlow = this.lightFlow.isArchiveFlow();
    };
    /**
      * 组件初始化
      * @memberof LightContentComponent
      */
    LightFlowHandleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.flowService.getWriterForm(this.lightFlow).then(function (value) {
            _this.writerData = __WEBPACK_IMPORTED_MODULE_1__light_util_light_util_module__["d" /* LightJsonUtil */].toObject(value);
        });
    };
    /**
     * 提交任务的详情
     *
     * @memberof LightFlowHandleComponent
     */
    LightFlowHandleComponent.prototype.submitTaskDetail = function () {
        this.flowService.submitFlow(this.navCtrl, this.lightFlow, this.writerData);
    };
    /**
     *
     * 归档信息
     * @memberof LightFlowHandleComponent
     */
    LightFlowHandleComponent.prototype.archiveFlow = function () {
        this.flowService.archiveFlow(this.navCtrl, this.lightFlow);
    };
    LightFlowHandleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            //moduleId: module.id,
            selector: 'light-flow-handle',template:/*ion-inline-start:"/Users/clark/Documents/personal/appFrame/src/light/light-components/light-flow/light-flow-handle/light-flow-handle.component.html"*/'<light-content [titleName]="\'流程办理\'">\n  <ion-grid class="list-grid">\n    <light-writer [writerData]="writerData"></light-writer>\n  </ion-grid>\n</light-content>\n<div class="submitbar">\n  <a ion-button *ngIf="!isArchiveFlow" color="secondary" full class="task-button" (click)=\'submitTaskDetail()\'>提交</a>\n  <a ion-button *ngIf="isArchiveFlow" color="secondary" full class="task-button" (click)=\'archiveFlow()\'>归档</a>\n</div>\n'/*ion-inline-end:"/Users/clark/Documents/personal/appFrame/src/light/light-components/light-flow/light-flow-handle/light-flow-handle.component.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__light_flow_service__["a" /* LightFlowService */]])
    ], LightFlowHandleComponent);
    return LightFlowHandleComponent;
}());

//# sourceMappingURL=light-flow-handle.component.js.map

/***/ }),
/* 217 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HandleMutiContactComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__light_util_light_util_module__ = __webpack_require__(7);
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




var HandleMutiContactComponent = /** @class */ (function () {
    function HandleMutiContactComponent(lightProvider, viewCtrl) {
        this.lightProvider = lightProvider;
        this.viewCtrl = viewCtrl;
        //用户列表
        this.userList = [];
    }
    /**
     * 通讯录选择
     * @param {UserObject} userObject
     * @memberof HandleMutiContactComponent
     */
    HandleMutiContactComponent.prototype.contactSelect = function (userObject) {
        if (!__WEBPACK_IMPORTED_MODULE_2__light_util_light_util_module__["a" /* LightArrayUtil */].contain(this.userList, userObject.Name)) {
            this.userList.push(userObject.Name);
        }
    };
    /**
     * 回退的操作
     * @memberof HandleMutiContactComponent
     */
    HandleMutiContactComponent.prototype.goBack = function () {
        this.lightProvider.lightModal.dismiss(this.viewCtrl);
    };
    /**
     * 提交的操作
     * @memberof HandleMutiContactComponent
     */
    HandleMutiContactComponent.prototype.submit = function () {
        if (this.userList.length == 0) {
            this.lightProvider.popMessage("请至少选择一个人员");
        }
        else {
            this.lightProvider.lightModal.dismiss(this.viewCtrl, this.userList);
        }
    };
    /**
     * 移除用户信息
     *
     * @param {string} userName
     * @memberof HandleMutiContactComponent
     */
    HandleMutiContactComponent.prototype.remove = function (index) {
        this.userList.splice(index, 1);
    };
    HandleMutiContactComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            //moduleId: module.id,
            selector: 'handle-muti-contact',template:/*ion-inline-start:"/Users/clark/Documents/personal/appFrame/src/light/light-components/light-flow/handle-muti-contact/handle-muti-contact.component.html"*/'<ion-header>\n  <ion-toolbar>\n    <ion-buttons left>\n      <button ion-button icon-only (click)="goBack()">\n        <ion-icon name="ios-close-circle-outline"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>多选人</ion-title>\n    <ion-buttons end>\n      <button ion-button (click)="submit()">\n        提交\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <div>\n    <div>选择人:</div>\n    <div *ngFor="let user of userList;let i = index">\n      {{user}}\n      <ion-icon name="ios-close-circle-outline" (click)="remove(i)"></ion-icon>\n    </div>\n  </div>\n  <contact-all (selectEvent)="contactSelect($event)"></contact-all>\n</ion-content>\n'/*ion-inline-end:"/Users/clark/Documents/personal/appFrame/src/light/light-components/light-flow/handle-muti-contact/handle-muti-contact.component.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__light_providers_light_providers_module__["d" /* LightProviders */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ViewController */]])
    ], HandleMutiContactComponent);
    return HandleMutiContactComponent;
}());

//# sourceMappingURL=handle-muti-contact.component.js.map

/***/ }),
/* 218 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HandleMutiPeopleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__light_providers_light_providers_module__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HandleMutiPeopleComponent = /** @class */ (function () {
    /**
     * 人员多选组件
     * @param {LightProviders} lightProvider
     * @param {ViewController} viewCtrl
     * @memberof HandleMutiPeopleComponent
     */
    function HandleMutiPeopleComponent(lightProvider, viewCtrl, navParams) {
        var _this = this;
        this.lightProvider = lightProvider;
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        /**
         * 用户列表
         * @type {Array<any>}
         * @memberof HandleMutiPeopleComponent
         */
        this.userList = [];
        var dataList = navParams.data.data;
        if (!!dataList && dataList.length > 0) {
            dataList.forEach(function (element) {
                _this.userList.push({ UserName: element, Select: false });
            });
        }
    }
    /**
     * 回退的操作
     * @memberof HandleMutiContactComponent
     */
    HandleMutiPeopleComponent.prototype.goBack = function () {
        this.lightProvider.lightModal.dismiss(this.viewCtrl);
    };
    /**
     * 提交的操作
     * @memberof HandleMutiContactComponent
     */
    HandleMutiPeopleComponent.prototype.submit = function () {
        var selectUser = this._getUserList();
        if (selectUser.length == 0) {
            this.lightProvider.popMessage("请至少选择一个人员");
        }
        else {
            this.lightProvider.lightModal.dismiss(this.viewCtrl, selectUser);
        }
    };
    /**
     * 得到用户列表
     * @private
     * @returns {Array<any>}
     * @memberof HandleMutiPeopleComponent
     */
    HandleMutiPeopleComponent.prototype._getUserList = function () {
        var result = [];
        this.userList.forEach(function (element) {
            if (element.Select) {
                result.push(element.UserName);
            }
        });
        return result;
    };
    HandleMutiPeopleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            //moduleId: module.id,
            selector: 'handle-muti-people',template:/*ion-inline-start:"/Users/clark/Documents/personal/appFrame/src/light/light-components/light-flow/handle-muti-people/handle-muti-people.component.html"*/'<ion-header>\n  <ion-toolbar>\n    <ion-buttons left>\n      <button ion-button icon-only (click)="goBack()">\n        <ion-icon name="ios-close-circle-outline"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>多选人</ion-title>\n    <ion-buttons end>\n      <button ion-button (click)="submit()">\n        提交\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-list>\n    <ion-item *ngFor="let user of userList">\n      <ion-label>{{user.UserName}}</ion-label>\n      <ion-checkbox [(ngModel)]="user.Select"></ion-checkbox>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/clark/Documents/personal/appFrame/src/light/light-components/light-flow/handle-muti-people/handle-muti-people.component.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__light_providers_light_providers_module__["d" /* LightProviders */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]])
    ], HandleMutiPeopleComponent);
    return HandleMutiPeopleComponent;
}());

//# sourceMappingURL=handle-muti-people.component.js.map

/***/ }),
/* 219 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HandleSinglePeopleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__light_providers_light_providers_module__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HandleSinglePeopleComponent = /** @class */ (function () {
    /**
     * 提交单个人员组件
     * @param {LightProviders} lightProvider
     * @param {ViewController} viewCtrl
     * @param {NavController} navCtrl
     * @param {NavParams} navParams
     * @memberof HandleSinglePeopleComponent
     */
    function HandleSinglePeopleComponent(lightProvider, viewCtrl, navCtrl, navParams) {
        var _this = this;
        this.lightProvider = lightProvider;
        this.viewCtrl = viewCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        /**
         * 用户列表
         * @type {Array<any>}
         * @memberof HandleMutiPeopleComponent
         */
        this.userList = [];
        /**
         * 用户选择
         * @type {string}
         * @memberof HandleSinglePeopleComponent
         */
        this.selectUser = null;
        var dataList = navParams.data.data;
        if (!!dataList && dataList.length > 0) {
            dataList.forEach(function (element) {
                _this.userList.push({ UserName: element, Select: false });
            });
        }
    }
    /**
     * 回退的操作
     * @memberof HandleMutiContactComponent
     */
    HandleSinglePeopleComponent.prototype.goBack = function () {
        this.lightProvider.lightModal.dismiss(this.viewCtrl);
    };
    /**
     * 用户选择事件
     * @memberof HandleSinglePeopleComponent
     */
    HandleSinglePeopleComponent.prototype.userSelect = function () {
        var userList = [];
        userList.push(this.selectUser);
        this.lightProvider.lightModal.dismiss(this.viewCtrl, userList);
    };
    HandleSinglePeopleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            // moduleId: module.id,
            selector: 'handle-single-people',template:/*ion-inline-start:"/Users/clark/Documents/personal/appFrame/src/light/light-components/light-flow/handle-single-people/handle-single-people.component.html"*/'<ion-header>\n  <ion-toolbar>\n    <ion-buttons left>\n      <button ion-button icon-only (click)="goBack()">\n        <ion-icon name="ios-close-circle-outline"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>单选人</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list radio-group [(ngModel)]="selectUser">\n    <ion-item *ngFor="let user of userList">\n      <ion-label>{{user.UserName}}</ion-label>\n      <ion-radio value="{{user.UserName}}" (ionSelect)="userSelect()"></ion-radio>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/clark/Documents/personal/appFrame/src/light/light-components/light-flow/handle-single-people/handle-single-people.component.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__light_providers_light_providers_module__["d" /* LightProviders */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]])
    ], HandleSinglePeopleComponent);
    return HandleSinglePeopleComponent;
}());

//# sourceMappingURL=handle-single-people.component.js.map

/***/ }),
/* 220 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HandleStepComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__light_providers_light_providers_module__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HandleStepComponent = /** @class */ (function () {
    /**
     * 提交的环节信息
     * @param {LightProviders} lightProvider
     * @param {ViewController} viewCtrl
     * @param {NavController} navCtrl
     * @param {NavParams} navParams
     * @memberof HandleStepComponent
     */
    function HandleStepComponent(lightProvider, viewCtrl, navCtrl, navParams) {
        this.lightProvider = lightProvider;
        this.viewCtrl = viewCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        /**
         * 选择环节的ID
         * @type {string}
         * @memberof HandleStepComponent
         */
        this.selectStepID = null;
        /**
         * 选择的列表
         */
        this.selectList = null;
        this.selectList = navParams.data.data;
    }
    /**
     * 回退的操作
     * @memberof HandleMutiContactComponent
     */
    HandleStepComponent.prototype.goBack = function () {
        this.lightProvider.lightModal.dismiss(this.viewCtrl);
    };
    /**
     * 用户选择事件
     * @memberof HandleSinglePeopleComponent
     */
    HandleStepComponent.prototype.userSelect = function () {
        this.lightProvider.lightModal.dismiss(this.viewCtrl, this.selectStepID);
    };
    HandleStepComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            //moduleId: module.id,
            selector: 'handle-step',template:/*ion-inline-start:"/Users/clark/Documents/personal/appFrame/src/light/light-components/light-flow/handle-step/handle-step.component.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-buttons left>\n      <button ion-button icon-only (click)="goBack()">\n        <ion-icon name="ios-close-circle-outline"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>环节选择</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <ion-list radio-group [(ngModel)]="selectStepID">\n    <ion-item *ngFor="let user of selectList">\n      <ion-label>{{user.Name}}</ion-label>\n      <ion-radio value="{{user.ID}}" (ionSelect)="userSelect()"></ion-radio>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/clark/Documents/personal/appFrame/src/light/light-components/light-flow/handle-step/handle-step.component.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__light_providers_light_providers_module__["d" /* LightProviders */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]])
    ], HandleStepComponent);
    return HandleStepComponent;
}());

//# sourceMappingURL=handle-step.component.js.map

/***/ }),
/* 221 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LightFlowBackComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__light_providers_light_providers_module__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__light_util_light_util_module__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__back_show_step_back_show_step_component__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__back_submit_step_back_submit_step_component__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__light_flow_service__ = __webpack_require__(56);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LightFlowBackComponent = /** @class */ (function () {
    /**
     * 流程回退的组件信息
     * @param navCtrl
     * @param navParam
     * @param lightProviders
     * @param lightHttp
     */
    function LightFlowBackComponent(navCtrl, navParam, lightProviders, lightHttp) {
        this.navCtrl = navCtrl;
        this.navParam = navParam;
        this.lightProviders = lightProviders;
        this.lightHttp = lightHttp;
        /**
         * 写入流程信息
         * @type {LightWriterFlow}
         * @memberof LightFlowBackComponent
         */
        this.writerFlow = null;
        /**
         * 上一个环境的对象内容
         * @type {*}
         * @memberof LightFlowBackComponent
         */
        this.preStepObject = null;
        //发回流程ID
        this.backToStepID = "(上一个环节)";
        //回退的列表
        this.backList = [];
        //回退的完整列表
        this.backListResult = [];
        //提交的流程的ID
        this.submitToStepID = "按正常流程重新流转";
        //原因的信息
        this.reason = "";
        //提交的列表信息
        this.submitList = [];
        //提交完整的列表信息
        this.submitListResult = [];
        this.writerFlow = this.navParam.data.flow;
    }
    /**
     * 内部初始化
     *
     * @memberof LightFlowBackComponent
     */
    LightFlowBackComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!!this.writerFlow) {
            //获取上一个节点的列表
            this.lightHttp.get("flow/GetPreStep", { objectID: this.writerFlow.objectID, curStepID: this.writerFlow.getCurStepID() }).then(function (value) {
                _this.preStepObject = __WEBPACK_IMPORTED_MODULE_3__light_util_light_util_module__["d" /* LightJsonUtil */].toObject(value);
                _this.backToStepID = _this.preStepObject.Title + "(上一个环节)";
                _this.backList.push(_this.backToStepID);
                _this.lightHttp.get("Flow/GetBackToStepList", { objectID: _this.writerFlow.objectID, curStepID: _this.writerFlow.getCurStepID() }).then(function (result) {
                    _this.backListResult = __WEBPACK_IMPORTED_MODULE_3__light_util_light_util_module__["d" /* LightJsonUtil */].toObject(result);
                    _this.backListResult.forEach(function (element) {
                        if (element["ID"] != _this.preStepObject["ID"]) {
                            _this.backList.push(element["Title"]);
                        }
                    });
                });
            }).catch(function (errText) {
                _this.lightProviders.popMessage(errText);
                _this.navCtrl.pop();
            });
        }
    };
    /**
     * 展现回退的阶段信息
     *
     * @memberof LightFlowBackComponent
     */
    LightFlowBackComponent.prototype.showBackStepModal = function () {
        var _this = this;
        this.lightProviders.lightModal.push(__WEBPACK_IMPORTED_MODULE_4__back_show_step_back_show_step_component__["a" /* BackShowStepComponent */], { data: this.backList }, function (value) {
            if (!!value) {
                _this.backToStepID = value;
            }
        });
    };
    /**
     *
     * 提交的操作
     *
     * @memberof LightFlowBackComponent
     */
    LightFlowBackComponent.prototype.showSubimitModal = function () {
        var _this = this;
        this.lightProviders.lightHttp.get("Flow/GetSubmitToStepList", { stepID: this._getSelectStepID(this.backToStepID) }).then(function (value) {
            _this.submitList = [];
            _this.submitListResult = __WEBPACK_IMPORTED_MODULE_3__light_util_light_util_module__["d" /* LightJsonUtil */].toObject(value);
            _this.submitList.push({ ID: _this.submitToStepID, Title: _this.submitToStepID });
            _this.submitListResult.forEach(function (element) {
                _this.submitList.push(element);
            });
            _this.lightProviders.lightModal.push(__WEBPACK_IMPORTED_MODULE_5__back_submit_step_back_submit_step_component__["a" /* BackSubmitStepComponent */], { data: _this.submitList }, function (value) {
                if (!!value) {
                    _this.submitToStepID = value;
                }
            });
        });
    };
    /**
     * 得到选择的阶段名称
     * @private
     * @returns {string}
     * @memberof LightFlowBackComponent
     */
    LightFlowBackComponent.prototype._getSelectStepID = function (select) {
        var result = "";
        if (__WEBPACK_IMPORTED_MODULE_3__light_util_light_util_module__["e" /* LightStringUtil */].contain(select, "(上一个环节)")) {
            result = this.preStepObject.ID;
        }
        else {
            this.backListResult.forEach(function (element) {
                if (element["Title"] == select) {
                    result = element["ID"];
                }
            });
        }
        return result;
    };
    /**
    * 得到选择的阶段名称
    * @private
    * @returns {string}
    * @memberof LightFlowBackComponent
    */
    LightFlowBackComponent.prototype._getSubmitStepID = function () {
        var result = "";
        if (this.submitToStepID == "按正常流程重新流转") {
            result = "";
        }
        else {
            result = this.submitToStepID;
        }
        return result;
    };
    /**
     * 提交任务的详细信息
     * @memberof LightFlowBackComponent
     */
    LightFlowBackComponent.prototype.submitTaskDetail = function () {
        var _this = this;
        this.lightProviders.lightHttp.get("Flow/BackToFlow", { objectID: this.writerFlow.objectID, backToStepID: this._getSelectStepID(this.backToStepID), submitToStepID: this._getSubmitStepID(), curStepID: this.writerFlow.getCurStepID(), reason: this.reason }).then(function (value) {
            _this.lightProviders.popMessage("回退成功");
            __WEBPACK_IMPORTED_MODULE_6__light_flow_service__["a" /* LightFlowService */].flowDoneFlag = true;
            _this.lightProviders.lightNav.backToRoot(_this.navCtrl);
        }).catch(function (errText) {
            _this.lightProviders.popMessage(errText);
        });
    };
    LightFlowBackComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            //moduleId: module.id,
            selector: 'light-flow-back',template:/*ion-inline-start:"/Users/clark/Documents/personal/appFrame/src/light/light-components/light-flow/light-flow-back/light-flow-back.component.html"*/'<light-content [titleName]="\'打回流程\'">\n  <ion-list>\n    <div margin-top></div>\n    <ion-item>\n      <span class="input-label">将流程发回</span>\n      <span class="input-value">{{backToStepID}}</span>\n      <button ion-button icon-only clear item-end color="d-gray" (click)="showBackStepModal()">\n        <ion-icon name="ios-add-circle-outline"></ion-icon>\n      </button>\n    </ion-item>\n    <ion-item>\n      <span class="input-label">重办后的处理</span>\n      <span class="input-value">{{submitToStepID}}</span>\n      <button ion-button icon-only clear item-end color="d-gray" (click)="showSubimitModal()">\n        <ion-icon name="ios-add-circle-outline"></ion-icon>\n      </button>\n    </ion-item>\n    <div margin-top></div>\n    <ion-item>\n      <div class="input-textarea" contenteditable="true" placeholder=\'输入内容\'>{{reason}}</div>\n      <button ion-button class="phraseButton">惯用语</button>\n    </ion-item>\n  </ion-list>\n</light-content>\n<div class="submitbar">\n  <a ion-button color="secondary" full class="task-button" (click)=submitTaskDetail()>提交</a>\n</div>\n'/*ion-inline-end:"/Users/clark/Documents/personal/appFrame/src/light/light-components/light-flow/light-flow-back/light-flow-back.component.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__light_providers_light_providers_module__["d" /* LightProviders */],
            __WEBPACK_IMPORTED_MODULE_2__light_providers_light_providers_module__["a" /* LightHttp */]])
    ], LightFlowBackComponent);
    return LightFlowBackComponent;
}());

//# sourceMappingURL=light-flow-back.component.js.map

/***/ }),
/* 222 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BackShowStepComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__light_providers_light_providers_module__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BackShowStepComponent = /** @class */ (function () {
    /**
     * 回退的阶段列表信息
     * @param {NavController} navCtrl
     * @param {NavParams} navParam
     * @memberof BackShowStepComponent
     */
    function BackShowStepComponent(navCtrl, navParam, viewCtrl, lightProviders) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParam = navParam;
        this.viewCtrl = viewCtrl;
        this.lightProviders = lightProviders;
        ///阶段列表
        this.stepList = [];
        ///
        this.selectStep = "";
        var arrayList = this.navParam.data.data;
        if (!!arrayList && arrayList.length > 0) {
            this.selectStep = arrayList[0];
            arrayList.forEach(function (element) {
                if (_this.selectStep == element) {
                    _this.stepList.push({ UserName: element, Select: true });
                }
                else {
                    _this.stepList.push({ UserName: element, Select: false });
                }
            });
        }
    }
    /**
     * 回退的操作
     * @memberof HandleMutiContactComponent
     */
    BackShowStepComponent.prototype.goBack = function () {
        this.lightProviders.lightModal.dismiss(this.viewCtrl);
    };
    //选择单击
    BackShowStepComponent.prototype.selectClick = function (value) {
        this.lightProviders.lightModal.dismiss(this.viewCtrl, value);
    };
    BackShowStepComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            //moduleId: module.id,
            selector: 'back-show-step',template:/*ion-inline-start:"/Users/clark/Documents/personal/appFrame/src/light/light-components/light-flow/back-show-step/back-show-step.component.html"*/'<ion-header>\n  <ion-toolbar>\n    <ion-buttons left>\n      <button ion-button icon-only (click)="goBack()">\n        <ion-icon name="ios-close-circle-outline"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>环节选择</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-list radio-group>\n    <ion-item *ngFor="let user of stepList">\n      <ion-label>{{user.UserName}}</ion-label>\n      <ion-radio *ngIf="user.Select" checked="true" value="user.UserName" (ionSelect)="selectClick(user.UserName)"></ion-radio>\n      <ion-radio *ngIf="!user.Select" value="user.UserName" (ionSelect)="selectClick(user.UserName)"></ion-radio>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/clark/Documents/personal/appFrame/src/light/light-components/light-flow/back-show-step/back-show-step.component.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__light_providers_light_providers_module__["d" /* LightProviders */]])
    ], BackShowStepComponent);
    return BackShowStepComponent;
}());

//# sourceMappingURL=back-show-step.component.js.map

/***/ }),
/* 223 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BackSubmitStepComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__light_providers_light_providers_module__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BackSubmitStepComponent = /** @class */ (function () {
    /**
     * 回退阶段的组件信息
     * @param {NavController} navCtrl
     * @param {NavParams} navParam
     * @param {ViewController} viewCtrl
     * @param {LightProviders} lightProviders
     * @memberof BackSubmitStepComponent
     */
    function BackSubmitStepComponent(navCtrl, navParam, viewCtrl, lightProviders) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParam = navParam;
        this.viewCtrl = viewCtrl;
        this.lightProviders = lightProviders;
        //阶段列表
        this.stepList = [];
        this.selectStep = "";
        var arrayList = this.navParam.data.data;
        if (!!arrayList && arrayList.length > 0) {
            this.selectStep = arrayList[0];
            arrayList.forEach(function (element) {
                if (_this.selectStep == element) {
                    _this.stepList.push({ UserName: element.Title, ID: element.ID, Select: true });
                }
                else {
                    _this.stepList.push({ UserName: element.Title, ID: element.ID, Select: false });
                }
            });
        }
    }
    /**
     * 回退的操作
     * @memberof HandleMutiContactComponent
     */
    BackSubmitStepComponent.prototype.goBack = function () {
        this.lightProviders.lightModal.dismiss(this.viewCtrl);
    };
    //选择单击
    BackSubmitStepComponent.prototype.selectClick = function (value) {
        this.lightProviders.lightModal.dismiss(this.viewCtrl, value);
    };
    BackSubmitStepComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            //moduleId: module.id,
            selector: 'back-submit-step',template:/*ion-inline-start:"/Users/clark/Documents/personal/appFrame/src/light/light-components/light-flow/back-submit-step/back-submit-step.component.html"*/'<ion-header>\n  <ion-toolbar>\n    <ion-buttons left>\n      <button ion-button icon-only (click)="goBack()">\n        <ion-icon name="ios-close-circle-outline"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>环节选择</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-list radio-group>\n    <ion-item *ngFor="let user of stepList">\n      <ion-label>{{user.UserName}}</ion-label>\n      <ion-radio *ngIf="user.Select" checked="true" value="user.ID" (ionSelect)="selectClick(user.UserName)"></ion-radio>\n      <ion-radio *ngIf="!user.Select" value="user.ID" (ionSelect)="selectClick(user.UserName)"></ion-radio>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/clark/Documents/personal/appFrame/src/light/light-components/light-flow/back-submit-step/back-submit-step.component.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__light_providers_light_providers_module__["d" /* LightProviders */]])
    ], BackSubmitStepComponent);
    return BackSubmitStepComponent;
}());

//# sourceMappingURL=back-submit-step.component.js.map

/***/ }),
/* 224 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LightFlowDeliverComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__light_providers_light_providers_module__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__handle_single_contact_handle_single_contact_component__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__light_flow_service__ = __webpack_require__(56);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LightFlowDeliverComponent = /** @class */ (function () {
    /**
     * 流程转交的组件对象
     * @param {NavController} navCtrl
     * @param {NavParams} navParam
     * @memberof LightFlowDeliverComponent
     */
    function LightFlowDeliverComponent(navCtrl, viewCtrl, navParam, lightProvider, flowService) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.navParam = navParam;
        this.lightProvider = lightProvider;
        this.flowService = flowService;
        //原因信息
        this.reason = "";
        //转交人信息
        this.deliverPeople = "";
        //写入流程信息
        this.writerFlow = null;
        this.writerFlow = navParam.data.flow;
    }
    /**
     *
     * @memberof LightFlowDeliverComponent
     */
    LightFlowDeliverComponent.prototype.showContactSingleModal = function () {
        var _this = this;
        this.lightProvider.lightModal.push2(__WEBPACK_IMPORTED_MODULE_3__handle_single_contact_handle_single_contact_component__["a" /* HandleSingleContactComponent */], function (value) {
            if (!!value && value.length > 0) {
                _this.deliverPeople = value[0];
            }
        });
    };
    /**
     * 提交任务的详细
     */
    LightFlowDeliverComponent.prototype.submitTaskDetail = function () {
        if (!!this.deliverPeople) {
            //this.lightProvider.lightModal.dismiss(this.viewCtrl);
            this.flowService.transferFlow(this.navCtrl, this.writerFlow, this.deliverPeople, this.reason);
        }
        else {
            this.lightProvider.popMessage("转交人不能为空");
        }
    };
    LightFlowDeliverComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            //moduleId: module.id,
            selector: 'light-flow-deliver',template:/*ion-inline-start:"/Users/clark/Documents/personal/appFrame/src/light/light-components/light-flow/light-flow-deliver/light-flow-deliver.component.html"*/'<light-content [titleName]="\'转交流程\'">\n  <ion-list>\n    <div margin-top></div>\n    <ion-item>\n      <span class="input-label">转交人</span>\n      <span class="input-value">{{deliverPeople}}</span>\n      <button ion-button icon-only clear item-end color="d-gray" (click)="showContactSingleModal()">\n        <ion-icon name="ios-add-circle-outline"></ion-icon>\n      </button>\n    </ion-item>\n    <div margin-top></div>\n    <ion-item>\n      <div class="input-textarea" contenteditable="true" placeholder=\'转交原因\'>{{reason}}</div>\n      <button ion-button class="phraseButton">惯用语</button>\n    </ion-item>\n  </ion-list>\n</light-content>\n<div class="submitbar">\n  <a ion-button color="secondary" full class="task-button" (click)=\'submitTaskDetail()\'>提交</a>\n</div>\n'/*ion-inline-end:"/Users/clark/Documents/personal/appFrame/src/light/light-components/light-flow/light-flow-deliver/light-flow-deliver.component.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__light_providers_light_providers_module__["d" /* LightProviders */],
            __WEBPACK_IMPORTED_MODULE_4__light_flow_service__["a" /* LightFlowService */]])
    ], LightFlowDeliverComponent);
    return LightFlowDeliverComponent;
}());

//# sourceMappingURL=light-flow-deliver.component.js.map

/***/ }),
/* 225 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__light_attach_component__ = __webpack_require__(402);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__light_attach_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),
/* 226 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserObject; });
///用户对象信息
var UserObject = /** @class */ (function () {
    function UserObject(data, organizeName, organizeID) {
        //数据的对象
        this.data = null;
        //组织的ID信息
        this.organizeID = null;
        //组织机构的名称
        this.organizeName = null;
        this.data = data;
        this.organizeName = organizeName;
        this.organizeID = organizeID;
    }
    Object.defineProperty(UserObject.prototype, "OrganizeName", {
        //组织机构名称
        get: function () {
            return this.organizeName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserObject.prototype, "ID", {
        //获取ID的对象
        get: function () {
            var result = "-1";
            if (!!this.data) {
                result = this.data["ID"];
            }
            return result;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserObject.prototype, "PID", {
        //获取父节点的ID对象
        get: function () {
            var result = "-1";
            if (!!this.data) {
                result = this.data["PID"];
            }
            return result;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserObject.prototype, "Name", {
        //名称对象信息
        get: function () {
            var result = "";
            if (!!this.data) {
                result = this.data["Name"];
            }
            return result;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserObject.prototype, "Title", {
        //职位对象信息
        get: function () {
            var result = "";
            if (!!this.data) {
                result = this.data["Title"];
            }
            return result;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserObject.prototype, "Extend", {
        //扩展的自定义对象
        get: function () {
            var result = null;
            if (!!this.data) {
                result = this.data["Extend"];
            }
            return result;
        },
        enumerable: true,
        configurable: true
    });
    return UserObject;
}());

//# sourceMappingURL=UserObject.js.map

/***/ }),
/* 227 */,
/* 228 */,
/* 229 */,
/* 230 */,
/* 231 */,
/* 232 */,
/* 233 */,
/* 234 */,
/* 235 */,
/* 236 */,
/* 237 */,
/* 238 */,
/* 239 */,
/* 240 */,
/* 241 */,
/* 242 */,
/* 243 */,
/* 244 */,
/* 245 */,
/* 246 */,
/* 247 */,
/* 248 */,
/* 249 */,
/* 250 */,
/* 251 */,
/* 252 */,
/* 253 */,
/* 254 */,
/* 255 */,
/* 256 */,
/* 257 */,
/* 258 */,
/* 259 */,
/* 260 */,
/* 261 */,
/* 262 */,
/* 263 */,
/* 264 */,
/* 265 */,
/* 266 */,
/* 267 */,
/* 268 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__login_login__ = __webpack_require__(269);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__login_login__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tabs_tabs__ = __webpack_require__(270);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__tabs_tabs__["a"]; });


//# sourceMappingURL=index.js.map

/***/ }),
/* 269 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__light_light_out_light_out_module__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__ = __webpack_require__(270);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginPage = /** @class */ (function (_super) {
    __extends(LoginPage, _super);
    /**
     * 登录页面的初始化
     * @param {NavController} navCtrl
     * @param {NavParams} navParams
     * @param {LightProviders} lightProvider
     * @memberof LoginPage
     */
    function LoginPage(navCtrl, navParams, lightProvider, lightLocalCache) {
        var _this = _super.call(this, navCtrl, lightProvider) || this;
        _this.navCtrl = navCtrl;
        _this.navParams = navParams;
        _this.lightProvider = lightProvider;
        _this.lightLocalCache = lightLocalCache;
        //用户名称
        _this.userName = "";
        //用户密码
        _this.userpassword = "";
        //是否选中
        _this.isRemenber = false;
        _this.isRemenber = _this.lightLocalCache.get('isRemenber') ? true : false;
        if (!!_this.isRemenber) {
            _this.userName = _this.lightLocalCache.get('SysUserName');
        }
        else {
            _this.userName = '';
        }
        return _this;
    }
    /**
     *
     * 登录的操作
     * @memberof LoginPage
     */
    LoginPage.prototype.login = function () {
        this.loginToPage(this.userName, this.userpassword, __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */]);
    };
    /**
     *
     * 是否记住账号
     * @memberof LoginPage
     */
    LoginPage.prototype.isRemenberFn = function () {
        if (this.isRemenber) {
            this.lightLocalCache.set('isRemenber', 'true');
        }
        else {
            this.lightLocalCache.set('isRemenber', '');
        }
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/clark/Documents/personal/appFrame/src/pages/common/login/login.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title text-center>\n      登陆页面\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <img class="login-bg" src="assets/img/login_bg.jpg" />\n  <div class="login-img">\n    <img src="assets/img/login_logo.png" />\n  </div>\n  <ion-list>\n    <ion-item>\n      <ion-label>\n        <ion-icon name="ios-person-outline"></ion-icon>\n      </ion-label>\n      <ion-input type="text" value="" placeholder="请输入账号" [(ngModel)]="userName"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>\n        <ion-icon name="ios-lock-outline"></ion-icon>\n      </ion-label>\n      <ion-input type="password" value="" placeholder="请输入密码" [(ngModel)]="userpassword"></ion-input>\n    </ion-item>\n  </ion-list>\n  <ion-grid>\n    <ion-row>\n      <ion-col offset-8>\n        <ion-item>\n          <ion-label>记住账号</ion-label>\n          <ion-checkbox [(ngModel)]="isRemenber" (ionChange)="isRemenberFn()"></ion-checkbox>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <div padding-left padding-right>\n    <button ion-button color="primary" block (click)=\'login()\'>登录</button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/clark/Documents/personal/appFrame/src/pages/common/login/login.html"*/,
        })
        //登录的页面信息
        ,
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__light_light_out_light_out_module__["k" /* LightProviders */],
            __WEBPACK_IMPORTED_MODULE_2__light_light_out_light_out_module__["h" /* LightLocalCache */]])
    ], LoginPage);
    return LoginPage;
}(__WEBPACK_IMPORTED_MODULE_2__light_light_out_light_out_module__["a" /* LightApp */]));

//# sourceMappingURL=login.js.map

/***/ }),
/* 270 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__light_light_out_light_out_module__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__homePage_homePage__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__personalPage_personalPage__ = __webpack_require__(272);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__homePage_homePage__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__light_light_out_light_out_module__["c" /* LightContactComponent */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__personalPage_personalPage__["a" /* PersonalPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/clark/Documents/personal/appFrame/src/pages/common/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="首页" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="通讯录" tabIcon="contacts"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="个人中心" tabIcon="person"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Users/clark/Documents/personal/appFrame/src/pages/common/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),
/* 271 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
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



var HomePage = /** @class */ (function () {
    function HomePage(toastCtrl, navCtrl) {
        this.toastCtrl = toastCtrl;
        this.navCtrl = navCtrl;
    }
    HomePage.prototype.toLightList = function () {
        this.navCtrl.push('LightListPage');
    };
    HomePage.prototype.toLightWriter = function () {
        this.navCtrl.push('LightWriterPage');
    };
    HomePage.prototype.toLightRead = function () {
        this.navCtrl.push('LightReadPage');
    };
    HomePage.prototype.toLightPopList = function () {
        this.navCtrl.push('LightPopListPage');
    };
    HomePage.prototype.toLightContent = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__light_light_out_light_out_module__["c" /* LightContactComponent */]);
    };
    HomePage.prototype.toLightAttach = function () {
        this.navCtrl.push('LightAttachPage');
    };
    HomePage.prototype.toLightHttp = function () {
        this.navCtrl.push('LightHttpPage');
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/clark/Documents/personal/appFrame/src/pages/homePage/homePage.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>首页</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <ion-item (click)="toLightList()">\n    <button ion-button block>列表例子</button>\n  </ion-item>\n  <ion-item (click)="toLightWriter()">\n    <button ion-button block>sInfo读写表单</button>\n  </ion-item>\n  <ion-item (click)="toLightRead()">\n    <button ion-button block>sInfo只读表单</button>\n  </ion-item>\n  <ion-item (click)="toLightContent()">\n    <button ion-button block>页面内容例子</button>\n  </ion-item>\n  <ion-item (click)="toLightPopList()">\n    <button ion-button block>弹窗实例</button>\n  </ion-item>\n  <ion-item (click)="toLightAttach()">\n    <button ion-button block>附件例子</button>\n  </ion-item>\n\n  <ion-item (click)="toLightHttp()">\n    <button ion-button block>测试http</button>\n  </ion-item>\n  <!-- <ion-item (click)="test()">\n    <button ion-button block>测试http</button>\n  </ion-item> -->\n\n</ion-content>\n'/*ion-inline-end:"/Users/clark/Documents/personal/appFrame/src/pages/homePage/homePage.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=homePage.js.map

/***/ }),
/* 272 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__light_light_out_light_out_module__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_login_login__ = __webpack_require__(269);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PersonalPage = /** @class */ (function (_super) {
    __extends(PersonalPage, _super);
    function PersonalPage(navCtrl, lightProviders) {
        var _this = _super.call(this, navCtrl, lightProviders) || this;
        _this.navCtrl = navCtrl;
        _this.lightProviders = lightProviders;
        return _this;
    }
    PersonalPage.prototype.showMessage = function () {
        this.navCtrl.push('LightMessageComponent');
    };
    //二维码分享
    PersonalPage.prototype.showShare = function () {
        var baseUrl = this.lightProviders.lightHttp.getUrl("MobileHtml/WriterDimensionalImage");
        var contentData = "<div><img src='" + baseUrl + "'></div>";
        var alert = this.lightProviders.lightPop.alertCtrl.create({
            //title: '二维码分享',
            message: contentData,
            buttons: [
                {
                    text: '关闭',
                    role: 'cancel',
                    handler: function () {
                        //console.log('不进行更新');
                    }
                }
            ]
        });
        alert.present();
    };
    //意见反馈
    PersonalPage.prototype.showAdvisory = function () {
        this.navCtrl.push('LightFeedbackComponent');
    };
    //个人信息
    PersonalPage.prototype.showPersonInfo = function () {
        this.navCtrl.push('LightPersonComponent');
    };
    //退出登录
    PersonalPage.prototype.logout = function () {
        this.logoutPage(__WEBPACK_IMPORTED_MODULE_3__common_login_login__["a" /* LoginPage */]);
    };
    PersonalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-personal',template:/*ion-inline-start:"/Users/clark/Documents/personal/appFrame/src/pages/personalPage/personalPage.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>个人中心</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only color="light" (click)="showMessage()">\n        <ion-icon name="ios-chatbubbles-outline"></ion-icon>\n        <span class="tipNumCss">{{tipNum || 0}}</span>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <ion-item class="person-header" text-center>\n    <img class="person-img" src="../assets/img/no-user.png">\n    <p>Marty McFly</p>\n    <div class="hotStatusCss"></div>\n  </ion-item>\n  <ion-list>\n    <ion-item (click)="showPersonInfo()">\n      <ion-icon name="ios-person-outline" item-left></ion-icon>\n      个人信息\n      <ion-icon name="ios-arrow-forward" color="gray" item-right></ion-icon>\n    </ion-item>\n    <ion-item (click)="showShare()">\n      <ion-icon name="ios-qr-scanner-outline" item-left></ion-icon>\n      二维码分享\n      <ion-icon name="ios-arrow-forward" color="gray" item-right></ion-icon>\n    </ion-item>\n    <ion-item (click)="showAdvisory()">\n      <ion-icon name="ios-alert-outline" item-left></ion-icon>\n      意见反馈\n      <ion-icon name="ios-arrow-forward" color="gray" item-right></ion-icon>\n    </ion-item>\n    <ion-item>\n      <ion-icon name="ios-cloud-upload-outline" item-left></ion-icon>\n      检查更新\n      <span float-right>\n        v0.03\n      </span>\n    </ion-item>\n  </ion-list>\n\n  <ion-item class="exitAppCss" (click)="logout()">\n    <ion-icon name="ios-exit-outline" item-left></ion-icon>\n    退出登陆\n  </ion-item>\n\n</ion-content>\n'/*ion-inline-end:"/Users/clark/Documents/personal/appFrame/src/pages/personalPage/personalPage.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__light_light_out_light_out_module__["k" /* LightProviders */]])
    ], PersonalPage);
    return PersonalPage;
}(__WEBPACK_IMPORTED_MODULE_2__light_light_out_light_out_module__["a" /* LightApp */]));

//# sourceMappingURL=personalPage.js.map

/***/ }),
/* 273 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(296);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),
/* 274 */,
/* 275 */,
/* 276 */,
/* 277 */,
/* 278 */,
/* 279 */,
/* 280 */,
/* 281 */,
/* 282 */,
/* 283 */,
/* 284 */,
/* 285 */,
/* 286 */,
/* 287 */,
/* 288 */,
/* 289 */,
/* 290 */,
/* 291 */,
/* 292 */,
/* 293 */,
/* 294 */,
/* 295 */,
/* 296 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(429);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modal_transition__ = __webpack_require__(430);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_common_index__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_homePage_homePage__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_personalPage_personalPage__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__light_light_out_light_out_module__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__ = __webpack_require__(267);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//动画库


//基础页面



//框架引入

//基础插件


var AppModule = /** @class */ (function () {
    function AppModule(config) {
        this.config = config;
        this.setCustomTransitions();
    }
    AppModule.prototype.setCustomTransitions = function () {
        this.config.setTransition('modal-from-bottom-enter', __WEBPACK_IMPORTED_MODULE_4__modal_transition__["a" /* ModalFromBottomEnter */]);
        this.config.setTransition('modal-from-bottom-leave', __WEBPACK_IMPORTED_MODULE_4__modal_transition__["b" /* ModalFromBottomLeave */]);
    };
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_common_index__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_common_index__["b" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_homePage_homePage__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_personalPage_personalPage__["a" /* PersonalPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_8__light_light_out_light_out_module__["i" /* LightOutModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {
                    backButtonIcon: 'ios-arrow-back-outline',
                    backButtonText: '返回',
                    tabsHideOnSubPages: 'true',
                    iconMode: 'ios'
                    // mode: "ios"
                }, {
                    links: [
                        { loadChildren: '../light/light-pages/light-feedback/light-feedback.component.module#LightFeedbackComponentModule', name: 'LightFeedbackComponent', segment: 'light-feedback.component', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../light/light-pages/light-message/light-message-content/light-message-content.component.module#LightMessageContentModule', name: 'LightMessageContentComponent', segment: 'light-message-content.component', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../light/light-pages/light-message/light-message.component.module#LightMessageModule', name: 'LightMessageComponent', segment: 'light-message.component', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../light/light-pages/light-person/email-modify/email-modify.component.module#EmailModifyModule', name: 'EmailModifyComponent', segment: 'email-modify.component', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../light/light-pages/light-person/light-person.component.module#LightPersonModule', name: 'LightPersonComponent', segment: 'light-person.component', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../light/light-pages/light-person/password-modify/password-modify.component.module#PasswordModifyModule', name: 'PasswordModifyComponent', segment: 'password-modify.component', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/examplePages/light-attach-page/light-attach-page.module#LightAttachPageModule', name: 'LightAttachPage', segment: 'light-attach-page', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/examplePages/light-http-page/light-http-page.module#LightHttpPageModule', name: 'LightHttpPage', segment: 'light-http-page', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/examplePages/light-list-page/light-list-page.module#LightListPageModule', name: 'LightListPage', segment: 'light-list-page', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/examplePages/light-popList-page/light-popList-page.module#LightPopListPageModule', name: 'LightPopListPage', segment: 'light-popList-page', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/examplePages/light-read-page/light-read-page.module#LightReadPageModule', name: 'LightReadPage', segment: 'light-read-page', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/examplePages/light-writer-page/light-writer-page.module#LightWriterPageModule', name: 'LightWriterPage', segment: 'light-writer-page', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_common_index__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_common_index__["b" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_homePage_homePage__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_personalPage_personalPage__["a" /* PersonalPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicErrorHandler */] }
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* Config */]])
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),
/* 297 */,
/* 298 */,
/* 299 */,
/* 300 */,
/* 301 */,
/* 302 */,
/* 303 */,
/* 304 */,
/* 305 */,
/* 306 */,
/* 307 */,
/* 308 */,
/* 309 */,
/* 310 */,
/* 311 */,
/* 312 */,
/* 313 */,
/* 314 */,
/* 315 */,
/* 316 */,
/* 317 */,
/* 318 */,
/* 319 */,
/* 320 */,
/* 321 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LightCamera; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_camera__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_lightNation__ = __webpack_require__(16);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LightCamera = /** @class */ (function (_super) {
    __extends(LightCamera, _super);
    /**
     * 加载nation插件命令: npm install --save @ionic-native/camera
     * 加载ionic插件:ionic cordova plugin add cordova-plugin-camera
     * @param {Camera} camera
     * @memberof LightCamera
     */
    function LightCamera(camera) {
        var _this = _super.call(this) || this;
        _this.camera = camera;
        _this._options = {
            quality: 100,
            destinationType: _this.camera.DestinationType.FILE_URI,
            sourceType: _this.camera.PictureSourceType.CAMERA,
            allowEdit: true,
            encodingType: _this.camera.EncodingType.JPEG,
            mediaType: _this.camera.MediaType.PICTURE,
            saveToPhotoAlbum: true //是否在拍照后保存到相册 };
        };
        return _this;
    }
    /**
     * 得到图片的对象信息
     *
     * @param {*} [resultDefault=null]
     * @returns {Promise<any>}
     * @memberof LightCamera
     */
    LightCamera.prototype.getPicture = function (resultDefault) {
        if (resultDefault === void 0) { resultDefault = null; }
        var that = this;
        if (!!!resultDefault) {
            resultDefault = "https://www.baidu.com/img/bd_logo1.png";
        }
        var result = this._getDefaultResult(resultDefault);
        if (!this._isWeb()) {
            if (!!that.camera) {
                result = new Promise(function (resolve, reject) {
                    that.camera.getPicture(that._options).then(function (imageURI) {
                        resolve(imageURI);
                    }).catch(function (errText) {
                        reject(errText);
                    });
                });
            }
            else {
                alert("扫描插件未安装");
            }
        }
        return result;
    };
    LightCamera = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_camera__["a" /* Camera */]])
    ], LightCamera);
    return LightCamera;
}(__WEBPACK_IMPORTED_MODULE_2__common_lightNation__["a" /* LightNation */]));

//# sourceMappingURL=lightCamera.js.map

/***/ }),
/* 322 */,
/* 323 */,
/* 324 */,
/* 325 */,
/* 326 */,
/* 327 */,
/* 328 */,
/* 329 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LightJsonUtil; });
///Light的Json的工具类
var LightJsonUtil = /** @class */ (function () {
    function LightJsonUtil() {
    }
    ///准备修改思路，可以判断字符串开始的头字母不是{,或是[。
    /**
     *
     * 判断是否为文本对象
     * @static
     * @param {string} jsonText
     * @returns {boolean}
     *
     * @memberof LightJsonUtil
     */
    LightJsonUtil.isJsonText = function (jsonText) {
        var result = true;
        if (!!jsonText) {
            try {
                JSON.parse(jsonText);
            }
            catch (err) {
                result = false;
            }
        }
        else {
            result = false;
        }
        return result;
    };
    /**
     * 转化为Json的对象
     * @static
     * @param {object} 转化为对象相关
     * @returns {string}  返回字符串信息
     *
     * @memberof LightJsonUtil
     */
    LightJsonUtil.toJson = function (objectTarget) {
        return JSON.stringify(objectTarget);
    };
    /**
     * 字符串转化为对象
     * @static
     * @param {string} objectText
     * @returns {object}
     *
     * @memberof LightJsonUtil
     */
    LightJsonUtil.toObject = function (objectText) {
        var result = null;
        if (!!objectText) {
            result = JSON.parse(objectText);
        }
        return result;
    };
    return LightJsonUtil;
}());

//# sourceMappingURL=lightJsonUtil.js.map

/***/ }),
/* 330 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export LightStringAppend */
/**
* 字符串的添加类
*
* @export
* @class LightStringAppend
*/
var LightStringAppend = /** @class */ (function () {
    function LightStringAppend() {
        this.stringArray = new Array();
    }
    /**
     * 追加到字符串
     *
     * @param {string} value
     * @memberof LightStringAppend
     */
    LightStringAppend.prototype.appendString = function (value) {
        if (!!value) {
            this.stringArray.push(value);
        }
    };
    /**
     * 追加数字
     *
     * @param {number} 数字对象
     * @memberof LightStringAppend
     */
    LightStringAppend.prototype.appendNumber = function (value) {
        this.stringArray.push(value + "");
    };
    /**
    * 追加数字
    *
    * @param {number} 数字对象
    * @memberof LightStringAppend
    */
    LightStringAppend.prototype.appendBoolean = function (value) {
        this.stringArray.push(value + "");
    };
    /**
     * 转换为字符串
     * @returns {string}
     *
     * @memberof LightStringAppend
     */
    LightStringAppend.prototype.toString = function (joinString) {
        if (!!!joinString) {
            return this.stringArray.join("");
        }
        else {
            return this.stringArray.join(joinString);
        }
    };
    /**
     * 清空的操作
     * @memberof LightStringAppend
     */
    LightStringAppend.prototype.clear = function () {
        this.stringArray = [];
    };
    return LightStringAppend;
}());

//# sourceMappingURL=lightStringAppend.js.map

/***/ }),
/* 331 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LightStringUtil; });
///Light的Json的工具类
var LightStringUtil = /** @class */ (function () {
    function LightStringUtil() {
    }
    /**
        * 字符串格式信息
        * @static
        * @param {string} 字符串内容
        * @param {string} 参数信息
        * @returns {string}
        *
        * @memberof LightStringUtil
        */
    LightStringUtil.format = function (content, paramTemp) {
        if (!!paramTemp) {
            var reg = /{{\d+}}/gm;
            return content.replace(reg, function (match, name) {
                return paramTemp[name];
            });
        }
        else {
            return content;
        }
    };
    /**
       *
       * 包含的相关信息
       * @static
       * @param {string} 源字符串信息
       * @param {string} 目标信息
       * @returns {boolean}
       *
       * @memberof LightStringUtil
       */
    LightStringUtil.contain = function (sourceString, targetString) {
        var result = false;
        if (!!sourceString && !!targetString) {
            var index = sourceString.indexOf(targetString);
            if (index >= 0) {
                result = true;
            }
        }
        return result;
    };
    /**
     * 判断是否为字符串信息
     * @param source
     */
    LightStringUtil.isString = function (source) {
        var result = false;
        if (!!source && typeof source === 'string') {
            result = true;
        }
        return result;
    };
    /**
     * 替代所有的内容信息
     * @static
     * @param {string} 内容
     * @param {string} 源字符串信息
     * @param {string} 目标字符串信息
     * @returns {string}
     *
     * @memberof LightStringUtil
     */
    LightStringUtil.replaceAll = function (content, source, target) {
        var result = content;
        if (!!source && LightStringUtil.contain(content, source)) {
            result = result.split(source).join(target);
        }
        return result;
    };
    /**
     * 看是否like子字符串
     * @static
     * @param {string} 内容
     * @param {string} 比对的字符串
     * @returns {boolean}
     *
     * @memberof LightStringUtil
     */
    LightStringUtil.like = function (content, source) {
        var result = false;
        if (!!content && !!source) {
            var index = content.search(source);
            if (index >= 0) {
                result = true;
            }
        }
        return result;
    };
    return LightStringUtil;
}());

//# sourceMappingURL=lightStringUtil.js.map

/***/ }),
/* 332 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapList; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lightArrayUtil__ = __webpack_require__(179);

/**
    * 数据映射列表
    * @export
    * @class MapList
    */
var MapList = /** @class */ (function () {
    function MapList() {
        this.keyList = new Array();
        this.list = {};
    }
    /**
     * 判断Key的信息
     * @param {string} name
     * @returns {boolean}
     *
     * @memberof MapList
     */
    MapList.prototype.containkey = function (name) {
        var result = false;
        if (!!name && this.list.hasOwnProperty(name.toUpperCase())) {
            result = true;
        }
        return result;
    };
    /**
     * 放置映射信息对象
     *
     * @param {string} key的字符串信息
     * @param {*} 值对象信息
     *
     * @memberof MapList
     */
    MapList.prototype.put = function (name, value) {
        if (!this.containkey(name)) {
            this.keyList.push(name.toUpperCase());
        }
        this.list[name.toUpperCase()] = value;
    };
    /**
     * 得到值信息
     * @param {string} key字符串信息
     * @returns {*}
     *
     * @memberof MapList
     */
    MapList.prototype.getValue = function (key) {
        var result = null;
        if (!!key && this.containkey(key)) {
            result = this.list[key.toUpperCase()];
        }
        return result;
    };
    /**
     * 容量的大小
     * @returns {number}
     * @memberof MapList
     */
    MapList.prototype.size = function () {
        return this.keyList.length;
    };
    /**
     * 得到key的列表信息
     * @returns
     * @memberof MapList
     */
    MapList.prototype.getkeylist = function () {
        return this.keyList;
    };
    /**
     * 添加地图映射列表
     * @param {MapList} 映射列表对象
     *
     * @memberof MapList
     */
    MapList.prototype.addMapList = function (data) {
        if (!!data) {
            var dataList = data.getkeylist();
            for (var i = 0; i < dataList.length; i++) {
                this.put(dataList[i], data.getValue(dataList[i]));
            }
        }
    };
    /**
     * 溢出的操作
     *
     * @param {string} 名称的信息
     *
     * @memberof MapList
     */
    MapList.prototype.remove = function (name) {
        if (!!name && this.containkey(name)) {
            delete this.list[name.toUpperCase()];
            __WEBPACK_IMPORTED_MODULE_0__lightArrayUtil__["a" /* LightArrayUtil */].remove(this.keyList, name.toUpperCase());
        }
    };
    /**
     * 清除的操作
     * @memberof MapList
     */
    MapList.prototype.clear = function () {
        this.keyList = new Array();
        this.list = {};
    };
    return MapList;
}());

//# sourceMappingURL=lightMapList.js.map

/***/ }),
/* 333 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export LightTimeUtil */
/**
 * 时间格式的工具类
 *
 * @export
 * @class LightTimeUtil
 */
var LightTimeUtil = /** @class */ (function () {
    function LightTimeUtil() {
    }
    /**
     * 得到时间的格式对象
     *
     * @static
     * @param {Date} 时间对象
     * @param {string} 字符串格式信息
     * @returns {string}
     *
     * @memberof LightTimeUtil
     */
    LightTimeUtil.getTimeFormat = function (date, format) {
        var result = format;
        if (!!!result) {
            result = "yyyy-MM-dd hh:mm:ss";
        }
        var o = {
            "M+": date.getMonth() + 1,
            "d+": date.getDate(),
            "h+": date.getHours(),
            "m+": date.getMinutes(),
            "s+": date.getSeconds(),
            "q+": Math.floor((date.getMonth() + 3) / 3),
            "S": date.getMilliseconds() //毫秒
        };
        if (/(y+)/.test(result))
            result = result.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
        for (var k in o)
            if (new RegExp("(" + k + ")").test(result))
                result = result.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        return result;
    };
    /**
     * 创建时间对象
     * @static
     * @param {number} 年
     * @param {number} 月
     * @param {number} 天
     * @returns {Date}
     *
     * @memberof LightTimeUtil
     */
    LightTimeUtil.createDateTime = function (year, mouth, day) {
        return new Date(year, mouth, day);
    };
    return LightTimeUtil;
}());

//# sourceMappingURL=lightTimeUtil.js.map

/***/ }),
/* 334 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export LightMd5Util */
// import { LightMd5 } from './lightMd5';
//Light的Json的工具类
var LightMd5Util = /** @class */ (function () {
    function LightMd5Util() {
    }
    /**
     * Md5值的变化
     * @static
     * @param {string} value
     * @returns {string}
     *
     * @memberof LightMd5Util
     */
    LightMd5Util.Md5 = function (value) {
        var result;
        if (!!value) {
            //    result=new LightMd5().hex_md5(value);
        }
        return result;
    };
    return LightMd5Util;
}());

//# sourceMappingURL=lightMd5Util.js.map

/***/ }),
/* 335 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export LightObjectUtil */
/**
 * 对象的工具类
 *
 * @export
 * @class LightObjectUtil
 */
var LightObjectUtil = /** @class */ (function () {
    function LightObjectUtil() {
    }
    /**
     * 获取对象值信息
     *
     * @static
     * @param {*} 目标的对象
     * @param {string} 属性的名称
     * @param {string} 默认的值信息
     * @returns {string}
     *
     * @memberof LightObjectUtil
     */
    LightObjectUtil.GetValue = function (target, propereName, defaultValue) {
        var result = defaultValue;
        if (!!target && !!propereName && !!target[propereName]) {
            result = target[propereName];
        }
        return result;
    };
    /**
     * 得到对象索引字符串对象信息
     * @static
     * @param {*} target
     * @returns {string}
     * @memberof LightObjectUtil
     */
    LightObjectUtil.GetObjectIndexString = function (target) {
        var result = "";
        if (!!target) {
            var listArray = [];
            for (var key in target) {
                if (target.hasOwnProperty(key)) {
                    var element = target[key];
                    listArray.push(element);
                }
            }
            result = listArray.join("_");
        }
        return result;
    };
    return LightObjectUtil;
}());

//# sourceMappingURL=lightObjectUtil.js.map

/***/ }),
/* 336 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LightBrowserUtil; });
var LightBrowserUtil = /** @class */ (function () {
    function LightBrowserUtil() {
    }
    /**
     * 判断是否微信访问的浏览器
     * @static
     * @returns {boolean}
     * @memberof LightBrowserUtil
     */
    LightBrowserUtil.isWeixinBrowser = function () {
        var result = false;
        var ua = window.navigator.userAgent.toLowerCase();
        var regex = /micromessenger/g;
        if (regex.test(ua)) {
            return true;
        }
        else {
            return false;
        }
    };
    return LightBrowserUtil;
}());

//# sourceMappingURL=lightBrowserUtil.js.map

/***/ }),
/* 337 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export LightNumberUtil */
///用户的数字工具类
var LightNumberUtil = /** @class */ (function () {
    function LightNumberUtil() {
    }
    /**
     * 转化为文本百分比
     * @static
     * @param {number} value
     * @returns {string}
     *
     * @memberof LightNumberUtil
     */
    LightNumberUtil.toPercentText = function (value) {
        return value.toFixed(2) + '%';
    };
    /**
     * 判断是否为数字信息
     * @param target
     */
    LightNumberUtil.isNumber = function (target) {
        var result = false;
        if (!!target && typeof target === 'number') {
            result = true;
        }
        return result;
    };
    return LightNumberUtil;
}());

//# sourceMappingURL=lightNumberUtil.js.map

/***/ }),
/* 338 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export LightStringRegexUtil */
///字符串的工具类
var LightStringRegexUtil = /** @class */ (function () {
    function LightStringRegexUtil() {
    }
    /**
     * 检查是否为手机号码
     * 验证规则：11位数字，以1开头。
     * @static
     * @param {string} 手机的文本信息
     * @returns {boolean}
     *
     * @memberof LightStringRegexUtil
     */
    LightStringRegexUtil.checkMobileNumber = function (mobileText) {
        var result = false;
        var re = /^1\d{10}$/;
        if (!!mobileText && re.test(mobileText)) {
            result = true;
        }
        return result;
    };
    /**
     * 验证电话号码
     * 验证规则：区号+号码，区号以0开头，3位或4位
     * 号码由7位或8位数字组成
     * 区号与号码之间可以无连接符，也可以“-”连接
     * 如01088888888,010-88888888,0955-7777777
     * @static
     * @param {string} mobileText
     * @returns {boolean}
     *
     * @memberof LightStringRegexUtil
     */
    LightStringRegexUtil.checkPhone = function (mobileText) {
        var result = false;
        var re = /^0\d{2,3}-?\d{7,8}$/;
        if (!!mobileText && re.test(mobileText)) {
            result = true;
        }
        return result;
    };
    /**
     * 验证邮件的操作
     *
     * @static
     * @param {string} mobileText
     * @returns {boolean}
     *
     * @memberof LightStringRegexUtil
     */
    LightStringRegexUtil.checkEmail = function (mobileText) {
        var result = false;
        var re = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;
        if (!!mobileText && re.test(mobileText)) {
            result = true;
        }
        return result;
    };
    return LightStringRegexUtil;
}());

//# sourceMappingURL=lightStringRegexUtil.js.map

/***/ }),
/* 339 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LightFunctionUtil; });
/**
 *
 *
 * @export
 * @class LightFunctionUtil
 */
var LightFunctionUtil = /** @class */ (function () {
    function LightFunctionUtil() {
    }
    /**
     * 得到方法的名称
     * @static
     * @returns {string}
     * @memberof LightFunctionUtil
     */
    LightFunctionUtil.getFunctionName = function (target) {
        var result = "";
        if (LightFunctionUtil.isFunction(target)) {
            result = target.name;
        }
        return result;
    };
    /**
     * 判断是否为方法
     *
     * @static
     * @param {*} target
     * @returns {boolean}
     * @memberof LightFunctionUtil
     */
    LightFunctionUtil.isFunction = function (target) {
        var result = false;
        if (!!target && typeof target === 'function') {
            result = true;
        }
        return result;
    };
    return LightFunctionUtil;
}());

//# sourceMappingURL=lightFunctionUtil.js.map

/***/ }),
/* 340 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export LightGuidUtil */
///GUID的工具类
var LightGuidUtil = /** @class */ (function () {
    function LightGuidUtil() {
    }
    /**
     * 获取UUID2的字符串
     *
     * @static
     * @param {any} len
     * @param {any} radix
     * @returns {string}
     * @memberof LightGuidUtil
     */
    LightGuidUtil.generateUUID2 = function (len, radix) {
        var uuid = [], i;
        radix = radix || LightGuidUtil.chars.length;
        if (len) {
            // Compact form
            for (i = 0; i < len; i++)
                uuid[i] = LightGuidUtil.chars[0 | Math.random() * radix];
        }
        else {
            // rfc4122, version 4 form
            var r;
            // rfc4122 requires these characters
            uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
            uuid[14] = '4';
            // Fill in random data. At i==19 set the high bits of clock sequence as
            // per rfc4122, sec. 4.1.5
            for (i = 0; i < 36; i++) {
                if (!uuid[i]) {
                    r = 0 | Math.random() * 16;
                    uuid[i] = LightGuidUtil.chars[(i == 19) ? (r & 0x3) | 0x8 : r];
                }
            }
        }
        return uuid.join('');
    };
    /**
     * 获取Guid的信息
     * @static
     * @returns
     * @memberof LightGuidUtil
     */
    LightGuidUtil.generateUUID = function () {
        return LightGuidUtil.generateUUID2(8, 10);
    };
    LightGuidUtil.chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
    return LightGuidUtil;
}());

//# sourceMappingURL=lightGuidUtil.js.map

/***/ }),
/* 341 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LightImagePicker; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_lightNation__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_image_picker__ = __webpack_require__(180);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LightImagePicker = /** @class */ (function (_super) {
    __extends(LightImagePicker, _super);
    /**
     * ionic cordova plugin add cordova-plugin-telerik-imagepicker --variable PHOTO_LIBRARY_USAGE_DESCRIPTION="your usage message"
     * $ npm install --save @ionic-native/image-picker
     * 加载ionic插件:cordova plugin add cordova-plugin-image-picker
     * @param {ImagePicker} imagePicker
     * @memberof LightImagePicker
     */
    function LightImagePicker(imagePicker) {
        var _this = _super.call(this) || this;
        _this.imagePicker = imagePicker;
        _this._options = {
            maximumImagesCount: 6,
        };
        return _this;
    }
    LightImagePicker.prototype.getPicture = function (resultDefault) {
        var _this = this;
        if (resultDefault === void 0) { resultDefault = null; }
        if (!!!resultDefault) {
            resultDefault = "https://www.baidu.com/img/bd_logo1.png";
        }
        var result = this._getDefaultResult(resultDefault);
        if (!this._isWeb()) {
            result = new Promise(function (resolve, reject) {
                _this.imagePicker.getPictures(_this._options).then(function (results) {
                    resolve(results); //返回选中多张图片数组
                }).catch(function (errText) {
                    reject(errText);
                });
            });
        }
        return result;
    };
    LightImagePicker = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_image_picker__["a" /* ImagePicker */]])
    ], LightImagePicker);
    return LightImagePicker;
}(__WEBPACK_IMPORTED_MODULE_1__common_lightNation__["a" /* LightNation */]));

//# sourceMappingURL=light-imagePicker.js.map

/***/ }),
/* 342 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LightScan; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_zbar__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_lightNation__ = __webpack_require__(16);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LightScan = /** @class */ (function (_super) {
    __extends(LightScan, _super);
    /**
     * 加载nation插件命令: npm install --save @ionic-native/zbar
     * 加载ionic插件: ionic cordova plugin add cordova-plugin-cszbar
     * Creates an instance of LightScan.
     * @param {ZBar} zbar
     * @memberof LightScan
     */
    function LightScan(zbar) {
        var _this = _super.call(this) || this;
        _this.zbar = zbar;
        ///zbar参数信息
        _this.options = null;
        _this.options = { flash: 'off', text_title: '扫码', text_instructions: '请把摄像头对准二维码进行扫描', drawSight: false };
        return _this;
    }
    ///扫描二维码信息
    LightScan.prototype.scan = function (resultDefault) {
        if (resultDefault === void 0) { resultDefault = null; }
        var that = this;
        if (!!!resultDefault) {
            resultDefault = "http://localhost:8225/Projects/SCYK/MyForms/ASSETCOMMON/PrintCard2.aspx?AssetDocUNID=05BEE97B2A354677B0B5C97D926D2359";
        }
        var result = this._getDefaultResult(resultDefault);
        if (!this._isWeb()) {
            if (!!that.zbar) {
                result = new Promise(function (resolve, reject) {
                    that.zbar.scan(that.options).then(function (result) {
                        resolve(result);
                    }).catch(function (errText) {
                        reject(errText);
                    });
                });
            }
            else {
                alert("zbar插件未安装");
            }
        }
        return result;
    };
    LightScan = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_zbar__["a" /* ZBar */]])
    ], LightScan);
    return LightScan;
}(__WEBPACK_IMPORTED_MODULE_2__common_lightNation__["a" /* LightNation */]));

//# sourceMappingURL=lightScan.js.map

/***/ }),
/* 343 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LightFile; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_lightNation__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_file__ = __webpack_require__(183);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * light的本地的对象
 * @export
 * @class LightOpen
 * @extends {LightNation}
 */
var LightFile = /** @class */ (function (_super) {
    __extends(LightFile, _super);
    /**
     * npm install --save @ionic-native/file;
;
     * 文件工具操作
     * @param {File} file
     * @memberof LightFile
     */
    function LightFile(file) {
        var _this = _super.call(this) || this;
        _this.file = file;
        /**
         * 根目录底下的文件夹
         * 用来存储要查找的对外数据路径,加上1为了排序
         * @private
         * @type {string}
         * @memberof LightFile
         */
        _this._rootFilePath = "1_lightFile";
        /**
         * 数据的路径
         *
         * @private
         * @type {string}
         * @memberof LightFile
         */
        _this._dataPath = "light";
        /**
         *
         * 路径文件信息
         * @private
         * @type {string}
         * @memberof LightFile
         */
        _this._dataPathFile = "light/file/";
        /**
         * 图片文件信息
         * @private
         * @type {string}
         * @memberof LightFile
         */
        _this._dataPathPicture = "light/picture/";
        /**
         * 缓存文件信息
         *
         * @private
         * @type {string}
         * @memberof LightFile
         */
        _this._dataPathCache = "light/cache/";
        return _this;
    }
    /**
     *  得到图片的路径信息
     * @returns {Promise<any>}
     * @memberof LightFile
     */
    LightFile.prototype.getRootFilePath = function () {
        var result = this._getDefaultResult("");
        if (!this._isWeb()) {
            result = this._getCurrentPath(this.file.externalRootDirectory, this._rootFilePath);
        }
        return result;
    };
    /**
     * 得到根目录的路径名称
     * @returns {string}
     * @memberof LightFile
     */
    LightFile.prototype.getRootFilePathName = function () {
        return this._rootFilePath;
    };
    /**
     * 设置图片的路径名称
     * @param {string} value
     * @memberof LightFile
     */
    LightFile.prototype.setRootFilePathName = function (value) {
        this._rootFilePath = value;
    };
    ///得到当前的路径信息
    LightFile.prototype._getCurrentPath = function (directory, pathName) {
        var that = this;
        var result = new Promise(function (resolve, reject) {
            that.file.checkDir(directory, pathName).then(function (pictureResult) {
                resolve(directory + pathName + "/");
            }).catch(function (errText) {
                that.file.createDir(directory, pathName, false).then(function (createResult) {
                    resolve(createResult.toURL());
                }).catch(function (createErrText) {
                    reject("储存权限未打开，请打开系统设置-应用管理-对应程序-权限，打开");
                });
            });
        });
        return result;
    };
    //得到文件的路径信息
    LightFile.prototype.getFilePath = function () {
        var result = this._getDefaultResult("");
        if (!this._isWeb()) {
            result = this._getCurrentPath(this.file.dataDirectory, this._dataPathFile);
        }
        return result;
    };
    //得到图片的路径信息
    LightFile.prototype.getPicturePath = function () {
        var result = this._getDefaultResult("");
        if (!this._isWeb()) {
            result = this._getCurrentPath(this.file.dataDirectory, this._dataPathPicture);
        }
        return result;
    };
    /**
     * 得到缓存路径信息
     *
     * @returns {Promise<any>}
     * @memberof LightFile
     */
    LightFile.prototype.getCachePath = function () {
        var result = this._getDefaultResult("");
        if (!this._isWeb()) {
            result = this._getCurrentPath(this.file.dataDirectory, this._dataPathCache);
        }
        return result;
    };
    /**
     * 检查是否存在该文件并返回值
     * byjiaxin
     *
     * @param {string} fileName
     * @returns {Promise<any>}
     * @memberof LightFile
     */
    LightFile.prototype.checkFile = function (fileName) {
        var that = this;
        var name = encodeURI(fileName);
        var result = new Promise(function (resolve, reject) {
            that.getRootFilePath()
                .then(function (path) {
                that.file.checkFile(path, name)
                    .then(function (checkResult) {
                    resolve(checkResult);
                })
                    .catch(function (err) {
                    reject(err);
                });
            })
                .catch(function (err) {
                reject(err);
            });
        });
        return result;
    };
    LightFile = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_file__["a" /* File */]])
    ], LightFile);
    return LightFile;
}(__WEBPACK_IMPORTED_MODULE_1__common_lightNation__["a" /* LightNation */]));

//# sourceMappingURL=lightFile.js.map

/***/ }),
/* 344 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LightFileType; });
///文件的类型信息
var LightFileType;
(function (LightFileType) {
    ///根目录文件信息
    LightFileType[LightFileType["RootFile"] = 0] = "RootFile";
    ///数据文件信息
    LightFileType[LightFileType["DataFile"] = 1] = "DataFile";
    ///数据图片信息
    LightFileType[LightFileType["DataPicture"] = 2] = "DataPicture";
    ///数据缓存
    LightFileType[LightFileType["DataCache"] = 3] = "DataCache";
})(LightFileType || (LightFileType = {}));
//# sourceMappingURL=lightFileType.js.map

/***/ }),
/* 345 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LightFileOpen; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_lightNation__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_file_opener__ = __webpack_require__(184);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * light的本地的对象
 * @export
 * @class LightOpen
 * @extends {LightNation}
 */
var LightFileOpen = /** @class */ (function (_super) {
    __extends(LightFileOpen, _super);
    /**
     * 本地的安装： npm install --save @ionic-native/file-opener
     * 插件的安装:  ionic cordova plugin add cordova-plugin-file-opener2
     * 本地打开对象信息
     * @memberof LightOpen
     */
    function LightFileOpen(fileOpener) {
        var _this = _super.call(this) || this;
        _this.fileOpener = fileOpener;
        return _this;
    }
    /**
     * 打开文件对象
     *
     * @param {string} path
     * @memberof LightOpen
     */
    LightFileOpen.prototype.openFile = function (path, defaultResult) {
        if (defaultResult === void 0) { defaultResult = null; }
        var that = this;
        if (!!!defaultResult) {
        }
        var result = this._getDefaultResult(defaultResult);
        if (!!path) {
            if (!this._isWeb()) {
                result = new Promise(function (resolve, reject) {
                    var ext = that._getFileExt(path);
                    var type = that._getFileType(ext);
                    that.fileOpener.open(path, type).then(function (result) {
                        resolve(result);
                    }).catch(function (errText) {
                        reject(errText);
                    });
                });
            }
        }
        return result;
    };
    /**
     * 得到文件的扩展名称
     * @private
     * @param {string} str
     * @returns {string}
     * @memberof LightOpen
     */
    LightFileOpen.prototype._getFileExt = function (str) {
        var d = /\.[^\.]+$/.exec(str);
        return d.toString();
    };
    /**
     * 得到文件类型
     * @private
     * @param {string} path
     * @returns {string}
     * @memberof LightOpen
     */
    LightFileOpen.prototype._getFileType = function (ext) {
        var result = "";
        if (!!ext) {
            switch (ext) {
                case '.txt':
                    result = 'text/plain';
                    break;
                case '.jpg':
                case '.png':
                case '.gif':
                case '.bmp':
                case '.jpeg':
                    result = 'image/*';
                    break;
                case '.pdf':
                    result = 'application/pdf';
                    break;
                case '.doc':
                case '.docx':
                    result = 'application/msword';
                    break;
                case '.xls':
                case '.xlsx':
                    result = 'application/vnd.ms-excel';
                    break;
                case '.ppt':
                case '.pptx':
                    result = 'application/vnd.ms-powerpoint';
                    break;
                case '.apk':
                    result = 'application/vnd.android.package-archive';
                    break;
                case '.dwg':
                    result = 'application/x-autocad';
                    break;
                default:
                    result = 'application/octet-stream';
            }
        }
        return result;
    };
    LightFileOpen = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_file_opener__["a" /* FileOpener */]])
    ], LightFileOpen);
    return LightFileOpen;
}(__WEBPACK_IMPORTED_MODULE_1__common_lightNation__["a" /* LightNation */]));

//# sourceMappingURL=lightFileOpen.js.map

/***/ }),
/* 346 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LightFileTransfer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_lightNation__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_file_transfer__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__light_file_index__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__light_util_light_util_module__ = __webpack_require__(7);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * 文件的传输对象
 *
 * @export
 * @class lightFileTransfer
 */
var LightFileTransfer = /** @class */ (function (_super) {
    __extends(LightFileTransfer, _super);
    /**
     * 文件传输对象初始化
     * npm install --save @ionic-native/file-transfer
     * ionic cordova plugin add cordova-plugin-file-transfer
     * 文件的传输对象
     * @memberof lightFileTransfer
     */
    function LightFileTransfer(fileTransfer, lightFile) {
        var _this = _super.call(this) || this;
        _this.fileTransfer = fileTransfer;
        _this.lightFile = lightFile;
        /**
         * 下载的地图列表
         * @private
         * @type {MapList}
         * @memberof lightFileTransfer
         */
        _this.downMapList = null;
        /**
         * 上传文件的列表
         * @private
         * @type {MapList}
         * @memberof lightFileTransfer
         */
        _this.upLoadList = null;
        _this.downMapList = new __WEBPACK_IMPORTED_MODULE_4__light_util_light_util_module__["g" /* MapList */]();
        _this.upLoadList = new __WEBPACK_IMPORTED_MODULE_4__light_util_light_util_module__["g" /* MapList */]();
        return _this;
    }
    /**
     * 文件的上传
     *
     * @param {string} filePath
     * @param {string} upLoadUrl
     * @returns {Promise<any>}
     * @memberof lightFileTransfer
     */
    LightFileTransfer.prototype.upLoad = function (filePath, upLoadUrl, listener, targetElement) {
        if (listener === void 0) { listener = null; }
        if (targetElement === void 0) { targetElement = null; }
        var result = null;
        if (!!filePath && !!upLoadUrl) {
            var that = this;
            result = this._getDefaultResult("");
            if (!this._isWeb()) {
                result = new Promise(function (resolve, reject) {
                    if (!that.upLoadList.containkey(filePath)) {
                        var fileTransferObject = that.fileTransfer.create();
                        that.upLoadList.put(filePath, fileTransferObject);
                        if (!!listener) {
                            fileTransferObject.onProgress(listener);
                        }
                        fileTransferObject.upload(filePath, upLoadUrl).then(function (uploadResult) {
                            that.upLoadList.remove(filePath);
                            resolve({ message: uploadResult.response, target: targetElement });
                        }).catch(function (uploadErrText) {
                            that.upLoadList.remove(filePath);
                            reject(uploadErrText);
                        });
                    }
                    else {
                        reject("已经正在上传中");
                    }
                });
            }
        }
        return result;
    };
    /**
     * 忽略上传的操作
     *
     * @memberof lightFileTransfer
     */
    LightFileTransfer.prototype.abortUpload = function (url) {
        if (!!url) {
            if (this.upLoadList.containkey(url)) {
                var fileTransferObject = this.upLoadList.getValue(url);
                if (!!fileTransferObject) {
                    fileTransferObject.abort();
                }
                this.upLoadList.remove(url);
            }
        }
    };
    /**
     * 下载文件对象
     *
     * @param {string} 链接信息
     * @param {string} [fileName=null] 保存的文件名称
     * @param {LightFileType} [fileType=LightFileType.RootFile]  保存文件路径类型
     * @param {(event: ProgressEvent) => any} [listener=null] 监听的对象信息
     * @returns {Promise<any>}
     * @memberof LightFileTransfer
     */
    LightFileTransfer.prototype.download = function (url, fileName, fileType, listener) {
        if (fileName === void 0) { fileName = null; }
        if (fileType === void 0) { fileType = __WEBPACK_IMPORTED_MODULE_3__light_file_index__["b" /* LightFileType */].RootFile; }
        if (listener === void 0) { listener = null; }
        if (!!!fileName) {
            fileName = this._getFileExtentName(url);
        }
        var that = this;
        var result = null;
        if (!!url) {
            result = this._getDefaultResult("");
            if (!this._isWeb()) {
                var filePromise = that._getFilePath(fileType);
                result = new Promise(function (resolve, reject) {
                    filePromise.then(function (path) {
                        if (!that.downMapList.containkey(url)) {
                            var fileTransferObject = that.fileTransfer.create();
                            that.downMapList.put(url, fileTransferObject);
                            if (!!listener) {
                                fileTransferObject.onProgress(listener);
                            }
                            //alert( path +" "+ fileName+" "+ url);
                            fileTransferObject.download(url, path + fileName).then(function (downFileResult) {
                                that.downMapList.remove(url);
                                resolve(downFileResult.toURL());
                            }).catch(function (downFileErrText) {
                                that.downMapList.remove(url);
                                reject(downFileErrText);
                            });
                        }
                        else {
                            reject("已经正在下载中");
                        }
                    }).catch(function (errText) {
                        reject(errText);
                    });
                });
            }
        }
        return result;
    };
    /**
     * 取消下载操作
     *
     * @param {string} url
     * @memberof lightFileTransfer
     */
    LightFileTransfer.prototype.abortDownload = function (url) {
        if (!!url) {
            if (this.downMapList.containkey(url)) {
                var fileTransferObject = this.downMapList.getValue(url);
                if (!!fileTransferObject) {
                    fileTransferObject.abort();
                }
                this.downMapList.remove(url);
            }
        }
    };
    /**
     * 得到文件的路径
     *
     * @private
     * @param {LightFileType} fileType
     * @returns {Promise<any>}
     * @memberof LightFileTransfer
     */
    LightFileTransfer.prototype._getFilePath = function (fileType) {
        if (fileType === void 0) { fileType = __WEBPACK_IMPORTED_MODULE_3__light_file_index__["b" /* LightFileType */].RootFile; }
        var result = null;
        switch (fileType) {
            case __WEBPACK_IMPORTED_MODULE_3__light_file_index__["b" /* LightFileType */].RootFile:
                result = this.lightFile.getRootFilePath();
                break;
            case __WEBPACK_IMPORTED_MODULE_3__light_file_index__["b" /* LightFileType */].DataFile:
                result = this.lightFile.getFilePath();
                break;
            case __WEBPACK_IMPORTED_MODULE_3__light_file_index__["b" /* LightFileType */].DataCache:
                result = this.lightFile.getCachePath();
                break;
            case __WEBPACK_IMPORTED_MODULE_3__light_file_index__["b" /* LightFileType */].DataPicture:
                result = this.lightFile.getPicturePath();
                break;
            default:
                result = this.lightFile.getRootFilePath();
                break;
        }
        return result;
    };
    /**
     * 得到文件的扩展名称
     * @private
     * @returns {string}
     * @memberof lightFileTransfer
     */
    LightFileTransfer.prototype._getFileExtentName = function (url) {
        var result = "";
        var target = "/";
        if (__WEBPACK_IMPORTED_MODULE_4__light_util_light_util_module__["e" /* LightStringUtil */].contain(url, target)) {
            var index = url.indexOf(target);
            result = url.substr(index + target.length, url.length - index - target.length);
        }
        return result;
    };
    LightFileTransfer = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_file_transfer__["a" /* FileTransfer */], __WEBPACK_IMPORTED_MODULE_3__light_file_index__["a" /* LightFile */]])
    ], LightFileTransfer);
    return LightFileTransfer;
}(__WEBPACK_IMPORTED_MODULE_1__common_lightNation__["a" /* LightNation */]));

//# sourceMappingURL=lightFileTransfer.js.map

/***/ }),
/* 347 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LightAppVersion; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_lightNation__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_app_version__ = __webpack_require__(186);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * light的本地的对象
 * @export
 * @class LightOpen
 * @extends {LightNation}
 */
var LightAppVersion = /** @class */ (function (_super) {
    __extends(LightAppVersion, _super);
    /**
     * 本地的安装:npm install --save @ionic-native/app-version
     * 插件的安装:ionic cordova plugin add cordova-plugin-app-version
     * App版本的对象信息
     * @memberof LightAppVersion
     */
    function LightAppVersion(appVersion) {
        var _this = _super.call(this) || this;
        _this.appVersion = appVersion;
        return _this;
    }
    /**
     * 得到App的名称
     *
     * @returns {string}
     * @memberof LightAppVersion
     */
    LightAppVersion.prototype.getAppName = function () {
        var result = this._getDefaultResult("aaa");
        if (!this._isWeb()) {
            result = this.appVersion.getAppName();
        }
        return result;
    };
    /**
     * 得到包的名称
     * @returns {string}
     * @memberof LightAppVersion
     */
    LightAppVersion.prototype.getPackageName = function () {
        var result = this._getDefaultResult("aaa");
        if (!this._isWeb()) {
            result = this.appVersion.getPackageName();
        }
        return result;
    };
    /**
     * 得到版本编码
     * @returns {Promise<any>}
     * @memberof LightAppVersion
     */
    LightAppVersion.prototype.getVersionCode = function () {
        var result = this._getDefaultResult("0.0.0");
        if (!this._isWeb()) {
            result = this.appVersion.getVersionCode();
        }
        return result;
    };
    /**
     * 得到版本编码
     * @returns {Promise<any>}
     * @memberof LightAppVersion
     */
    LightAppVersion.prototype.getVersionNumber = function () {
        var result = this._getDefaultResult("0.0.0");
        if (!this._isWeb()) {
            result = this.appVersion.getVersionNumber();
        }
        console.log(result);
        return result;
    };
    LightAppVersion = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_app_version__["a" /* AppVersion */]])
    ], LightAppVersion);
    return LightAppVersion;
}(__WEBPACK_IMPORTED_MODULE_1__common_lightNation__["a" /* LightNation */]));

//# sourceMappingURL=lightAppVersion.js.map

/***/ }),
/* 348 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LightLocationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_diagnostic__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__LatlngUtil__ = __webpack_require__(188);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LightLocationService = /** @class */ (function () {
    function LightLocationService(diagnostic, platform, alertCtrl) {
        var _this = this;
        this.diagnostic = diagnostic;
        this.platform = platform;
        this.alertCtrl = alertCtrl;
        this.enabledLocationService = false; //手机是否开启位置服务
        this.locationAuthorization = false; //手机是否有定位权限
        //检测app位置服务是否开启
        this.assertLocationService = (function () {
            return function () {
                return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].create(function (observer) {
                    if (_this.enabledLocationService) {
                        observer.next(true);
                    }
                    else {
                        _this.diagnostic.isLocationEnabled().then(function (enabled) {
                            if (enabled) {
                                _this.enabledLocationService = true;
                                observer.next(true);
                            }
                            else {
                                _this.enabledLocationService = false;
                                _this.alertCtrl.create({
                                    title: '您未开启位置服务',
                                    subTitle: '正在获取位置信息',
                                    buttons: [{ text: '取消' },
                                        {
                                            text: '去开启',
                                            handler: function () {
                                                _this.diagnostic.switchToLocationSettings();
                                            }
                                        }
                                    ]
                                }).present();
                                observer.error(false);
                            }
                        }).catch(function (err) {
                            console.warn(err, '调用diagnostic.isLocationEnabled方法失败');
                            observer.error(false);
                        });
                    }
                });
            };
        })();
        //检测app是否有定位权限
        this.assertLocationAuthorization = (function () {
            return function () {
                return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].create(function (observer) {
                    if (_this.locationAuthorization) {
                        observer.next(true);
                    }
                    else {
                        _this.diagnostic.isLocationAuthorized().then(function (res) {
                            if (res) {
                                _this.locationAuthorization = true;
                                observer.next(true);
                            }
                            else {
                                _this.locationAuthorization = false;
                                _this.diagnostic.requestLocationAuthorization('always').then(function (res) {
                                    if (res == 'DENIED_ALWAYS') {
                                        _this.locationAuthorization = false;
                                        _this.alertCtrl.create({
                                            title: '缺少定位权限',
                                            subTitle: '请在手机设置或app权限管理中开启',
                                            buttons: [{ text: '取消' },
                                                {
                                                    text: '去开启',
                                                    handler: function () {
                                                        _this.diagnostic.switchToSettings();
                                                    }
                                                }
                                            ]
                                        }).present();
                                        observer.error(false);
                                    }
                                    else {
                                        _this.locationAuthorization = true;
                                        observer.next(true);
                                    }
                                }).catch(function (err) {
                                    console.warn(err, '调用diagnostic.requestLocationAuthorization方法失败');
                                    observer.error(false);
                                });
                            }
                        }).catch(function (err) {
                            console.warn(err, '调用diagnostic.isLocationAvailable方法失败');
                            observer.error(false);
                        });
                    }
                });
            };
        })();
        console.log('Hello LightLocationServiceProvider Provider');
    }
    /**
     * 是否是真机环境
     *
     * @returns {boolean}
     * @memberof LightLocationService
     */
    LightLocationService.prototype.isMobile = function () {
        return this.platform.is('mobile') && !this.platform.is('mobileweb');
    };
    /**
     * 获得用户当前坐标
     */
    LightLocationService.prototype.getUserLocation = function () {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].create(function (observer) {
            if (_this.isMobile()) {
                _this.assertLocationService().subscribe(function (res) {
                    if (res) {
                        _this.assertLocationAuthorization().subscribe(function (res) {
                            if (res) {
                                return _this.getLocation(observer);
                            }
                        }, function (err) {
                            observer.error(err);
                        });
                    }
                }, function (err) {
                    observer.error(err);
                });
            }
            else {
                console.log('非手机环境,即测试环境返回固定坐标');
                observer.next(new __WEBPACK_IMPORTED_MODULE_4__LatlngUtil__["a" /* LatLng */](41.786438059549, 123.362592840223));
            }
        });
    };
    /**
     * 获取位置信息
     *
     * @private
     * @param {any} observer
     * @memberof LightLocationService
     */
    LightLocationService.prototype.getLocation = function (observer) {
        var _this = this;
        baidumap_location && baidumap_location.getCurrentPosition(function (data) {
            observer.next(new __WEBPACK_IMPORTED_MODULE_4__LatlngUtil__["a" /* LatLng */](data.latitude, data.longitude, __WEBPACK_IMPORTED_MODULE_4__LatlngUtil__["b" /* WebSpatialReference */].BD_09)
                .toWGS_84());
        }, function (errMsg) {
            if (errMsg.code === errMsg.PERMISSION_DENIED) {
                _this.openRequestPremission();
            }
            else if (errMsg.code === errMsg.POSITION_UNAVAILABLE) {
                alert('定位失败,请确保连上WIFI或者关掉WIFI只开流量数据');
            }
            else if (errMsg.code === errMsg.TIMEOUT) {
                alert('网络连接异常,请检查您的网络是否畅通');
            }
            observer.error('获取位置失败');
        });
    };
    /**
     * 打开请求权限的对话框
     *
     * @private
     * @memberof LightLocationService
     */
    LightLocationService.prototype.openRequestPremission = function () {
        var _this = this;
        this.alertCtrl.create({
            title: '缺少定位权限',
            subTitle: '请在手机设置或app权限管理中开启',
            buttons: [
                {
                    text: '取消'
                },
                {
                    text: '去开启',
                    handler: function () {
                        _this.diagnostic.switchToSettings();
                    }
                }
            ]
        }).present();
    };
    LightLocationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_diagnostic__["a" /* Diagnostic */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["p" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* AlertController */]])
    ], LightLocationService);
    return LightLocationService;
}());

//# sourceMappingURL=lightLocationSerive.js.map

/***/ }),
/* 349 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoordinateUtil; });
/* unused harmony export CoordinateDistUtil */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__LatlngUtil__ = __webpack_require__(188);

var CoordinateUtil = /** @class */ (function () {
    function CoordinateUtil() {
    }
    /**
    * 手机GPS坐标转火星坐标
    *
    * @param wgLoc
    * @return
    */
    CoordinateUtil.transformFromWGSToGCJ = function (wgLoc) {
        //如果在国外，则默认不进行转换 
        if (this.outOfChina(wgLoc.latitude, wgLoc.longitude)) {
            return new __WEBPACK_IMPORTED_MODULE_0__LatlngUtil__["a" /* LatLng */](wgLoc.latitude, wgLoc.longitude);
        }
        var dLat = this.transformLat(wgLoc.longitude - 105.0, wgLoc.latitude - 35.0);
        var dLon = this.transformLon(wgLoc.longitude - 105.0, wgLoc.latitude - 35.0);
        var radLat = wgLoc.latitude / 180.0 * Math.PI;
        var magic = Math.sin(radLat);
        magic = 1 - this.ee * magic * magic;
        var sqrtMagic = Math.sqrt(magic);
        dLat = (dLat * 180.0) / ((this.a * (1 - this.ee)) / (magic * sqrtMagic) * Math.PI);
        dLon = (dLon * 180.0) / (this.a / sqrtMagic * Math.cos(radLat) * Math.PI);
        return new __WEBPACK_IMPORTED_MODULE_0__LatlngUtil__["a" /* LatLng */](wgLoc.latitude + dLat, wgLoc.longitude + dLon);
    };
    /**
     * 火星坐标系转WGS84坐标
     *
     * @static
     * @param {LatLng} wgLoc
     * @returns {LatLng}
     * @memberof CoordinateUtil
     */
    CoordinateUtil.transformFromGCJToWGS = function (wgLoc) {
        var gps = this.transform(wgLoc);
        var lontitude = wgLoc.longitude * 2 - gps.longitude;
        var latitude = wgLoc.latitude * 2 - gps.latitude;
        return new __WEBPACK_IMPORTED_MODULE_0__LatlngUtil__["a" /* LatLng */](latitude, lontitude);
    };
    /**
     * 将 BD-09 坐标转换成GCJ-02 坐标
     *
     * @static
     * @param {LatLng} wgLoc
     * @returns {LatLng}
     * @memberof CoordinateUtil
     */
    CoordinateUtil.transformFromBDToGCJ = function (wgLoc) {
        var x = wgLoc.longitude - 0.0065, y = wgLoc.latitude - 0.006;
        var z = Math.sqrt(x * x + y * y) - 0.00002 * Math.sin(y * this.x_pi);
        var theta = Math.atan2(y, x) - 0.000003 * Math.cos(x * this.x_pi);
        var tempLon = z * Math.cos(theta);
        var tempLat = z * Math.sin(theta);
        var gps = new __WEBPACK_IMPORTED_MODULE_0__LatlngUtil__["a" /* LatLng */](tempLat, tempLon);
        return gps;
    };
    /**
     * GCJ-02 坐标转换到 BD-09 坐标
     *
     * @static
     * @param {LatLng} wgLoc
     * @returns {LatLng}
     * @memberof CoordinateUtil
     */
    CoordinateUtil.transformFromGCJToBD = function (wgLoc) {
        var x = wgLoc.longitude, y = wgLoc.latitude;
        var z = Math.sqrt(x * x + y * y) + 0.00002 * Math.sin(y * this.x_pi);
        var theta = Math.atan2(y, x) + 0.000003 * Math.cos(x * this.x_pi);
        var tempLon = z * Math.cos(theta) + 0.0065;
        var tempLat = z * Math.sin(theta) + 0.006;
        var gps = new __WEBPACK_IMPORTED_MODULE_0__LatlngUtil__["a" /* LatLng */](tempLat, tempLon);
        return gps;
    };
    CoordinateUtil.transform = function (wgLoc) {
        if (this.outOfChina(wgLoc.latitude, wgLoc.longitude)) {
            return new __WEBPACK_IMPORTED_MODULE_0__LatlngUtil__["a" /* LatLng */](wgLoc.latitude, wgLoc.longitude);
        }
        var dLat = this.transformLat(wgLoc.longitude - 105.0, wgLoc.latitude - 35.0);
        var dLon = this.transformLon(wgLoc.longitude - 105.0, wgLoc.latitude - 35.0);
        var radLat = wgLoc.latitude / 180.0 * this.pi;
        var magic = Math.sin(radLat);
        magic = 1 - this.ee * magic * magic;
        var sqrtMagic = Math.sqrt(magic);
        dLat = (dLat * 180.0) / ((this.a * (1 - this.ee)) / (magic * sqrtMagic) * this.pi);
        dLon = (dLon * 180.0) / (this.a / sqrtMagic * Math.cos(radLat) * this.pi);
        var mgLat = wgLoc.latitude + dLat;
        var mgLon = wgLoc.longitude + dLon;
        return new __WEBPACK_IMPORTED_MODULE_0__LatlngUtil__["a" /* LatLng */](mgLat, mgLon);
    };
    CoordinateUtil.transformLat = function (x, y) {
        var ret = -100.0 + 2.0 * x + 3.0 * y + 0.2 * y * y + 0.1 * x * y + 0.2 * Math.sqrt(x > 0 ? x : -x);
        ret += (20.0 * Math.sin(6.0 * x * Math.PI) + 20.0 * Math.sin(2.0 * x * Math.PI)) * 2.0 / 3.0;
        ret += (20.0 * Math.sin(y * Math.PI) + 40.0 * Math.sin(y / 3.0 * Math.PI)) * 2.0 / 3.0;
        ret += (160.0 * Math.sin(y / 12.0 * Math.PI) + 320 * Math.sin(y * Math.PI / 30.0)) * 2.0 / 3.0;
        return ret;
    };
    CoordinateUtil.transformLon = function (x, y) {
        var ret = 300.0 + x + 2.0 * y + 0.1 * x * x + 0.1 * x * y + 0.1 * Math.sqrt(x > 0 ? x : -x);
        ret += (20.0 * Math.sin(6.0 * x * Math.PI) + 20.0 * Math.sin(2.0 * x * Math.PI)) * 2.0 / 3.0;
        ret += (20.0 * Math.sin(x * Math.PI) + 40.0 * Math.sin(x / 3.0 * Math.PI)) * 2.0 / 3.0;
        ret += (150.0 * Math.sin(x / 12.0 * Math.PI) + 300.0 * Math.sin(x / 30.0 * Math.PI)) * 2.0 / 3.0;
        return ret;
    };
    CoordinateUtil.outOfChina = function (lat, lon) {
        if (lon < 72.004 || lon > 137.8347) {
            return true;
        }
        if (lat < 0.8293 || lat > 55.8271) {
            return true;
        }
        return false;
    };
    CoordinateUtil.pi = 3.1415926535897932384626;
    CoordinateUtil.x_pi = 3.14159265358979324 * 3000.0 / 180.0;
    CoordinateUtil.a = 6378245.0;
    CoordinateUtil.ee = 0.00669342162296594323;
    return CoordinateUtil;
}());

var CoordinateDistUtil = /** @class */ (function () {
    function CoordinateDistUtil() {
    }
    /**
     * 转化为弧度(rad)
     * */
    CoordinateDistUtil.rad = function (d) {
        return d * Math.PI / 180.0;
    };
    /**
     * 基于余弦定理求两经纬度距离
     * @param lon1 第一点的精度
     * @param lat1 第一点的纬度
     * @param lon2 第二点的精度
     * @param lat3 第二点的纬度
     * @return 返回的距离，单位km
     **/
    CoordinateDistUtil.LantitudeLongitudeDist = function (lon1, lat1, lon2, lat2) {
        var radLat1 = this.rad(lat1);
        var radLat2 = this.rad(lat2);
        var radLon1 = this.rad(lon1);
        var radLon2 = this.rad(lon2);
        if (radLat1 < 0)
            radLat1 = Math.PI / 2 + Math.abs(radLat1); // south  
        if (radLat1 > 0)
            radLat1 = Math.PI / 2 - Math.abs(radLat1); // north  
        if (radLon1 < 0)
            radLon1 = Math.PI * 2 - Math.abs(radLon1); // west  
        if (radLat2 < 0)
            radLat2 = Math.PI / 2 + Math.abs(radLat2); // south  
        if (radLat2 > 0)
            radLat2 = Math.PI / 2 - Math.abs(radLat2); // north  
        if (radLon2 < 0)
            radLon2 = Math.PI * 2 - Math.abs(radLon2); // west  
        var x1 = this.EARTH_RADIUS * Math.cos(radLon1) * Math.sin(radLat1);
        var y1 = this.EARTH_RADIUS * Math.sin(radLon1) * Math.sin(radLat1);
        var z1 = this.EARTH_RADIUS * Math.cos(radLat1);
        var x2 = this.EARTH_RADIUS * Math.cos(radLon2) * Math.sin(radLat2);
        var y2 = this.EARTH_RADIUS * Math.sin(radLon2) * Math.sin(radLat2);
        var z2 = this.EARTH_RADIUS * Math.cos(radLat2);
        var d = Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2) + (z1 - z2) * (z1 - z2));
        //余弦定理求夹角  
        var theta = Math.acos((this.EARTH_RADIUS * this.EARTH_RADIUS + this.EARTH_RADIUS * this.EARTH_RADIUS - d * d) / (2 * this.EARTH_RADIUS * this.EARTH_RADIUS));
        var dist = theta * this.EARTH_RADIUS;
        return dist;
    };
    /**
     * 谷歌的方法计算距离
     * @param lat1
     * @param lon1
     * @param lat2
     * @param lon2
     */
    CoordinateDistUtil.LantitudeLongitudeDist2 = function (lat1, lon1, lat2, lon2) {
        var radLat1 = this.rad(lat1);
        var radLat2 = this.rad(lat2);
        var a = radLat1 - radLat2;
        var b = this.rad(lon1) - this.rad(lon2);
        var s = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(a / 2), 2) + Math.cos(radLat1) * Math.cos(radLat2) * Math.pow(Math.sin(b / 2), 2)));
        s = s * this.EARTH_RADIUS;
        s = Math.round(s * 10000) / 10000;
        return s;
    };
    CoordinateDistUtil.EARTH_RADIUS = 6378137; //赤道半径(单位m) 
    return CoordinateDistUtil;
}());

//# sourceMappingURL=CoordinateUtil.js.map

/***/ }),
/* 350 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LightAudio; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_native_audio__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_lightNation__ = __webpack_require__(16);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LightAudio = /** @class */ (function (_super) {
    __extends(LightAudio, _super);
    /**
     * @memberof LightMotion
     */
    function LightAudio(nativeAudio) {
        var _this = _super.call(this) || this;
        _this.nativeAudio = nativeAudio;
        _this.musicList = null;
        _this.musicList = [];
        return _this;
    }
    Object.defineProperty(LightAudio.prototype, "MusicList", {
        get: function () {
            return this.musicList;
        },
        enumerable: true,
        configurable: true
    });
    //预加载音乐
    LightAudio.prototype.preloadSimple = function (id, path) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (!_this._isWeb()) {
                _this.nativeAudio.preloadSimple(id, path)
                    .then(function () {
                    _this.musicList.push(id);
                    resolve(id);
                })
                    .catch(function (err) {
                    reject(err);
                });
            }
            else {
                reject("非手机环境");
            }
        });
    };
    //从内存中卸载音乐
    LightAudio.prototype.unloadAudios = function (id) {
        var index = this.musicList.indexOf(id);
        if (index != -1) {
            this.nativeAudio.unload(id);
            this.musicList.splice(this.musicList[index], 1);
        }
    };
    //播放音乐
    LightAudio.prototype.playAudio = function (id, handler) {
        var index = this.musicList.indexOf(id);
        if (index != -1) {
            this.nativeAudio.play(id, handler);
        }
    };
    //暂停音乐
    LightAudio.prototype.stopAudio = function (id) {
        var index = this.musicList.indexOf(id);
        if (index != -1) {
            this.nativeAudio.stop(id);
        }
    };
    LightAudio = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_native_audio__["a" /* NativeAudio */]])
    ], LightAudio);
    return LightAudio;
}(__WEBPACK_IMPORTED_MODULE_2__common_lightNation__["a" /* LightNation */]));

//# sourceMappingURL=lightAudio.js.map

/***/ }),
/* 351 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LightMotion; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_device_motion__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_lightNation__ = __webpack_require__(16);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LightMotion = /** @class */ (function (_super) {
    __extends(LightMotion, _super);
    /**
     * @memberof LightMotion
     */
    function LightMotion(deviceMotion) {
        var _this = _super.call(this) || this;
        _this.deviceMotion = deviceMotion;
        ///motion参数信息
        _this.options = null;
        _this.options = { frequency: 1000 };
        return _this;
    }
    //开启摇一摇监听
    LightMotion.prototype.watchAcceleration = function (handler) {
        this.clearAcceleration();
        if (!this._isWeb()) {
            return this._MotionSubscription = this.deviceMotion.watchAcceleration(this.options).subscribe(function (acceleration) { return handler(acceleration); });
        }
        else {
            return;
        }
    };
    //关闭监听
    LightMotion.prototype.clearAcceleration = function () {
        !!this._MotionSubscription && this._MotionSubscription.unsubscribe();
    };
    LightMotion = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_device_motion__["a" /* DeviceMotion */]])
    ], LightMotion);
    return LightMotion;
}(__WEBPACK_IMPORTED_MODULE_2__common_lightNation__["a" /* LightNation */]));

//# sourceMappingURL=lightMotion.js.map

/***/ }),
/* 352 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LightPermissisons; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_lightNation__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_android_permissions__ = __webpack_require__(191);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * 轻量级的权限对象
 * @export
 * @class LightPermissisons
 * @extends {LightNation}
 */
var LightPermissisons = /** @class */ (function (_super) {
    __extends(LightPermissisons, _super);
    /**
     * 轻量级的权限对象初始化
     * @memberof LightMotion
     */
    function LightPermissisons(androidPermissions) {
        var _this = _super.call(this) || this;
        _this.androidPermissions = androidPermissions;
        return _this;
    }
    /**
     * 请求文件权限的操作
     *
     * @memberof LightPermissisons
     */
    LightPermissisons.prototype.requestFilePermission = function () {
        var that = this;
        var result = new Promise(function (resolve, reject) {
            if (that._isWeb()) {
                resolve();
            }
            else {
                that.androidPermissions.requestPermissions(that._getFilePermissionList()).then(function (value) {
                    resolve();
                }).catch(function (errText) {
                    reject("储存权限打开失败" + errText);
                });
                // that._isFilePermissionList().then(value=>{
                //     alert("已经有相关权限");
                //     resolve();
                // }).catch(errValue=>{
                //     alert("权限不足"+errValue);
                //     that.androidPermissions.requestPermissions(this._getPermissionList()).then(value => {
                //         alert("申请成功有相关权限");
                //         resolve();
                //     }).catch(errText => {
                //         reject("储存权限打开失败"+errText);
                //     });
                // });
            }
        });
        return result;
    };
    /**
    * 请求文件权限的操作
    *
    * @memberof LightPermissisons
    */
    LightPermissisons.prototype.requestCameraPermission = function () {
        var that = this;
        var result = new Promise(function (resolve, reject) {
            if (that._isWeb()) {
                resolve();
            }
            else {
                that.androidPermissions.checkPermission(that._getCameraPermissionValue()).then(function (value) {
                    resolve();
                }).catch(function (errText) {
                    that.androidPermissions.requestPermission(that._getCameraPermissionValue()).then(function (value) {
                        resolve();
                    }).catch(function (errText) {
                        reject("摄像头权限打开失败");
                    });
                });
            }
        });
        return result;
    };
    /**
     * 获取摄像头权限信息
     * @private
     * @returns {string}
     * @memberof LightPermissisons
     */
    LightPermissisons.prototype._getCameraPermissionValue = function () {
        return this.androidPermissions.PERMISSION.CAMERA;
    };
    /**
     * 判断文件的权限列表
     * @private
     * @returns {Promise<any>}
     * @memberof LightPermissisons
     */
    LightPermissisons.prototype._isFilePermissionList = function () {
        var that = this;
        var resultList = this._getFilePermissionList();
        var resultText = resultList[0];
        var result = new Promise(function (resolve, reject) {
            that.androidPermissions.checkPermission(resultText).then(function (value) {
                resolve();
            }).catch(function (errText) {
                reject("存储权限没有授权" + errText);
            });
        });
        return result;
    };
    /**
     * 获取许可的列表操作
     * @private
     * @returns {Array<string>}
     * @memberof LightPermissisons
     */
    LightPermissisons.prototype._getFilePermissionList = function () {
        var result = [];
        //添加读取权限信息
        result.push(this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE);
        result.push(this.androidPermissions.PERMISSION.READ_EXTERNAL_STORAGE);
        return result;
    };
    LightPermissisons = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_android_permissions__["a" /* AndroidPermissions */]])
    ], LightPermissisons);
    return LightPermissisons;
}(__WEBPACK_IMPORTED_MODULE_1__common_lightNation__["a" /* LightNation */]));

//# sourceMappingURL=lightPermissions.js.map

/***/ }),
/* 353 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LightJPush; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__jiguang_ionic_jpush__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_lightNation__ = __webpack_require__(16);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LightJPush = /** @class */ (function (_super) {
    __extends(LightJPush, _super);
    /**
     * 加载nation插件命令: npm install --save @jiguang-ionic/jpush
     * 加载ionic插件: ionic cordova plugin add jpush-phonegap-plugin --variable APP_KEY=your_jpush_appkey
     * Creates an instance of LightJPush.
     * @param {JPush} jPush
     * @memberof LightJPush
     */
    function LightJPush(platform, jPush, toastCtrl) {
        var _this = _super.call(this) || this;
        _this.platform = platform;
        _this.jPush = jPush;
        _this.toastCtrl = toastCtrl;
        return _this;
    }
    //添加本地推送的方法
    LightJPush.prototype.addLocalNotification = function () {
        if (!this.platform.is('ios')) {
            this.jPush.addLocalNotification(0, "Hello jPush", "jPush", 1, 5000);
        }
        else {
            this.jPush.addLocalNotificationForIOS(5, "Hello jPush", 1, "localNoti1");
        }
    };
    //推送初始化
    LightJPush.prototype.initJpush = function (navCtrl, messagePage, lightProviders) {
        if (!this._isWeb()) {
            // window['plugins'].jPushPlugin.init();
            // if (this.platform.is('ios')) {
            //     window['plugins'].jPushPlugin.setDebugModeFromIos();
            //     window['plugins'].jPushPlugin.setApplicationIconBadgeNumber(0);
            // } else {
            //     window['plugins'].jPushPlugin.setDebugMode(true);
            //     window['plugins'].jPushPlugin.setStatisticsOpen(true);
            // }
            this.jPush.init();
            this.getRegistrationID(lightProviders);
            this.jPushAddEventListener(navCtrl, messagePage);
        }
    };
    LightJPush.prototype.getRegistrationID = function (lightProviders) {
        var _this = this;
        this.jPush.getRegistrationID().then(function (regId) {
            if (regId == '') {
                console.log('重新获取');
                setTimeout(function () {
                    _this.getRegistrationID(lightProviders);
                }, 1000);
            }
            else {
                console.log(regId);
                lightProviders.lightLocalCache.set('registrationID', regId);
            }
        });
    };
    ;
    LightJPush.prototype.jPushAddEventListener = function (navCtrl, messagePage) {
        var _this = this;
        //判断系统设置中是否允许当前应用推送
        this.jPush.getUserNotificationSettings().then(function (result) {
            if (result == 0) {
                console.log('系统设置中已关闭应用推送');
            }
            else if (result > 0) {
                console.log('系统设置中打开了应用推送');
            }
        });
        //点击通知进入应用程序时会触发的事件
        document.addEventListener("jpush.openNotification", function (event) {
            var content = _this.platform.is('ios') ? event['aps'].alert : event['alert'];
            _this.toPages(navCtrl, messagePage);
            console.log("jpush.openNotification" + content);
        }, false);
        //收到通知时会触发该事件
        document.addEventListener("jpush.receiveNotification", function (event) {
            var content = _this.platform.is('ios') ? event['aps'].alert : event['alert'];
            var toast = _this.toastCtrl.create({
                message: content,
                duration: 1500,
                position: 'top'
            });
            toast.onDidDismiss(function () {
                console.log('Dismissed toast');
                // if(){
                // }
            });
            setTimeout(function () {
            }, 1400);
            toast.present();
            console.log("jpush.receiveNotification" + content);
        }, false);
        //收到自定义消息时触发这个事件
        document.addEventListener("jpush.receiveMessage", function (event) {
            var message = _this.platform.is('ios') ? event['content'] : event['message'];
            console.log("jpush.receiveMessage" + message);
        }, false);
    };
    //设置别名,一个用户只有一个别名
    LightJPush.prototype.addAlias = function (jPushData, lightProviders) {
        if (!this._isWeb()) {
            lightProviders.lightHttp.post(jPushData.url, {
                registrationId: jPushData.registrationId,
                alias: jPushData.alias
            });
        }
    };
    //删除别名,一个用户只有一个别名
    LightJPush.prototype.delAlias = function (jPushData, lightProviders) {
        if (!this._isWeb()) {
            lightProviders.lightHttp.post(jPushData.url, {
                alias: jPushData.alias
            }).then(function (res) {
                console.log('删除别名成功！');
            });
        }
    };
    // 极光推送
    LightJPush.prototype.jPushOpenNotification = function (events) {
        // 当点击极光推送消息跳转到指定页面
        events.subscribe('jpush.openNotification', function (content) {
            // const childNav = this.nav.getActiveChildNav();
            // if (childNav) {
            //     const tab = childNav.getSelected();
            //     const activeVC = tab.getActive();
            //     // if (activeVC.component == AboutPage) {//如果当前所在页面就是将要跳转到的页面则不处理
            //     //   return;
            //     // }
            //     const activeNav = activeVC.getNav();
            //     activeNav.popToRoot({}).then(() => { // 导航跳到最顶层
            //         childNav.select(3); // 选中第四个tab
            //         const t = childNav.getSelected(); // 获取选中的tab
            //         const v = t.getActive(); // 通过当前选中的tab获取ViewController
            //         const n = v.getNav(); // 通过当前视图的ViewController获取的NavController
            //         n.push(AboutPage); // 跳转到指定页面
            //     });
            // }
        });
    };
    //跳转消息页面
    LightJPush.prototype.toPages = function (navCtrl, messagePage) {
        var childNav = navCtrl.getActiveChildNav();
        if (childNav) {
            var tab = childNav.getSelected();
            var activeVC = tab.getActive();
            // if (activeVC.component == messagePage) {//如果当前所在页面就是将要跳转到的页面则不处理
            //   return;
            // }
            var activeNav = activeVC.getNav();
            activeNav.popToRoot({}).then(function () {
                childNav.select(3); // 选中第四个tab
                var t = childNav.getSelected(); // 获取选中的tab
                var v = t.getActive(); // 通过当前选中的tab获取ViewController
                var n = v.getNav(); // 通过当前视图的ViewController获取的NavController
                n.push(messagePage); // 跳转到指定页面
            });
        }
    };
    LightJPush = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__jiguang_ionic_jpush__["a" /* JPush */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ToastController */]])
    ], LightJPush);
    return LightJPush;
}(__WEBPACK_IMPORTED_MODULE_3__common_lightNation__["a" /* LightNation */]));

//# sourceMappingURL=lightJPush.js.map

/***/ }),
/* 354 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LightHotCodePush; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_hot_code_push__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_lightNation__ = __webpack_require__(16);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LightHotCodePush = /** @class */ (function (_super) {
    __extends(LightHotCodePush, _super);
    /**
     * 加载nation插件命令: npm install --save @ionic-native/hot-code-push
     * 加载nation插件CLI: npm install -g cordova-hot-code-push-cli
     * 加载ionic插件: ionic cordova plugin add cordova-hot-code-push-plugin
     * Creates an instance of LightHotCodePush.
     * @param {HotCodePush} hotCodePush
     * @memberof LightHotCodePush
     */
    function LightHotCodePush(platform, hotCodePush, toastCtrl) {
        var _this = _super.call(this) || this;
        _this.platform = platform;
        _this.hotCodePush = hotCodePush;
        _this.toastCtrl = toastCtrl;
        return _this;
    }
    /**
     * 热更新显示规则
     *
     * 。。。
     *
     * 三点全绿     表示不需要更新
     * 颜色轮转     表示正在更新
     * 三点全红     表示等待重进更新
     * 三点全黄     表示更新失败
     *
    */
    //初始化热更新监听事件
    LightHotCodePush.prototype.initCodePush = function () {
        //即将安装更新时发送
        document.addEventListener("chcp_beforeInstall", function (event) {
            console.log("即将安装更新时发送");
            alert('即将安装更新时发送');
        }, false);
        //成功安装更新后发送
        document.addEventListener("chcp_updateInstalled", function (event) {
            console.log("成功安装更新后发送");
            alert('成功安装更新后发送');
        }, false);
        //更新安装失败时发送
        document.addEventListener("chcp_updateInstallFailed", function (event) {
            console.log("更新安装失败时发送");
            alert('更新安装失败时发送');
        }, false);
        //无任何安装时发送
        document.addEventListener("chcp_nothingToInstall", function (event) {
            console.log("无任何安装时发送");
            alert('无任何安装时发送');
        }, false);
    };
    LightHotCodePush.prototype.messageTip = function (content) {
        var toast = this.toastCtrl.create({
            message: content,
            duration: 3000,
            position: 'top'
        });
        toast.present();
    };
    // chcp_updateIsReadyToInstall - 成功加载新版本并准备安装时发送。
    // chcp_updateLoadFailed - 当插件无法从服务器加载更新时发送。错误详细信息附加到事件中。
    // chcp_nothingToUpdate - 当我们从服务器成功加载应用程序配置时发送，但没有新的可用。
    // chcp_beforeInstall - 即将安装更新时发送。
    // chcp_updateInstalled - 成功安装更新后发送。
    // chcp_updateInstallFailed - 更新安装失败时发送。错误详细信息附加到事件中。
    // chcp_nothingToInstall - 无任何安装时发送。可能之前没有任何东西被加载。
    // chcp_beforeAssetsInstalledOnExternalStorage - 当插件即将开始在外部存储上安装捆绑内容时发送。
    // chcp_assetsInstalledOnExternalStorage - 插件成功从外部存储上的bundle中复制Web项目文件时发送。您很可能只会将其用于调试目的。甚至从来没有。
    // chcp_assetsInstallationError - 当插件无法从外部存储上的bundle复制文件时发送。如果发生这种情况 - 插件将无法正常工作。当设备上没有足够的可用空间时可能会发生。错误详细信息附加到事件中。
    // document.addEventListener('chcp_updateIsReadyToInstall', this.onUpdateReady, false);
    /**
     * requestApplicationUpdate(message)
     * 显示包含通过商店（App Store或Google Play）更新应用程序的请求的对话框。
     * 信息 string 要在对话框中显示的消息
     * 返回： Promise<any>当用户重定向到商店时解析，如果用户拒绝则拒绝。
     */
    LightHotCodePush.prototype.requestApplicationUpdate = function (message) {
        return this.hotCodePush.requestApplicationUpdate(message);
    };
    /**
     * fetchUpdate(options)
     * 从服务器端下载更新。
     * 选项 HotCodePushRequestOptions 请求的其他选项。如果未设置 - 使用config.xml的首选项。
     * 返回： Promise < any > 如果有可用更新，则解析，否则拒绝。
     */
    LightHotCodePush.prototype.fetchUpdate = function (options) {
        return this.hotCodePush.fetchUpdate(options);
    };
    /**
     * installUpdate()
     * 如果有任何要安装的东西，请安装更新。
     * 返回： Promise<any>安装更新时解析。
     */
    LightHotCodePush.prototype.installUpdate = function () {
        return this.hotCodePush.installUpdate();
    };
    /**
     * isUpdateAvailableForInstallation()
     * 检查是否已加载更新并准备安装。
     * 返回： Promise<HotCodePushUpdate>如果更新准备就绪，则解析，如果没有更新，则拒绝。
     */
    LightHotCodePush.prototype.isUpdateAvailableForInstallation = function () {
        return this.hotCodePush.isUpdateAvailableForInstallation();
    };
    /**
     * getVersionInfo()
     * 获取有关应用程序版本的信息。
     * 返回： Promise<HotCodePushVersion>解析有关版本的信息
     */
    LightHotCodePush.prototype.getVersionInfo = function () {
        return this.hotCodePush.getVersionInfo();
    };
    /**
     * onUpdateIsReadyToInstall()
     * 成功加载新版本并准备安装时发送的事件。
     * 返回： Observable<HotCodePushEventData>
     */
    LightHotCodePush.prototype.onUpdateIsReadyToInstall = function () {
        return this.hotCodePush.onUpdateIsReadyToInstall().subscribe();
    };
    /**
     * onUpdateLoadFailed()
     * 插件无法从服务器加载更新时发送的事件。错误详细信息附加到事件中。
     * 返回： Observable<HotCodePushEventData>
     */
    LightHotCodePush.prototype.onUpdateLoadFailed = function () {
        return this.hotCodePush.onUpdateLoadFailed();
    };
    /**
     * onNothingToUpdate()
     * 当我们从服务器成功加载应用程序配置时发送的事件，但没有新的可用。
     * 返回： Observable<HotCodePushEventData>
     */
    LightHotCodePush.prototype.onNothingToUpdate = function () {
        return this.hotCodePush.onNothingToUpdate();
    };
    /**
     * onBeforeInstall()
     * 即将安装更新时发送的事件。
     * 返回： Observable<HotCodePushEventData>
     */
    LightHotCodePush.prototype.onBeforeInstall = function () {
        return this.hotCodePush.onBeforeInstall();
    };
    /**
     * onUpdateInstalled()
     * 成功安装更新后发送的事件。
     * 返回： Observable<HotCodePushEventData>
     */
    LightHotCodePush.prototype.onUpdateInstalled = function () {
        return this.hotCodePush.onUpdateInstalled();
    };
    /**
     * onUpdateInstallFailed()
     * 更新安装失败时发送的事件。错误详细信息附加到事件中。
     * 返回： Observable<HotCodePushEventData>
     */
    LightHotCodePush.prototype.onUpdateInstallFailed = function () {
        return this.hotCodePush.onUpdateInstallFailed();
    };
    /**
     * onNothingToInstall()
     * 无任何安装时发送的事件。可能之前没有任何东西被加载。
     * 返回： Observable<HotCodePushEventData>
     */
    LightHotCodePush.prototype.onNothingToInstall = function () {
        return this.hotCodePush.onNothingToInstall();
    };
    /**
     * onBeforeAssetsInstalledOnExternalStorage()
     * 当插件即将开始在外部存储上安装捆绑包内容时发送的事件。
     * 返回： Observable<HotCodePushEventData>
     */
    LightHotCodePush.prototype.onBeforeAssetsInstalledOnExternalStorage = function () {
        return this.hotCodePush.onBeforeAssetsInstalledOnExternalStorage();
    };
    /**
     * onAssetsInstalledOnExternalStorage()
     * 插件成功从外部存储上的bundle中复制Web项目文件时发送的事件。您很可能只会将其用于调试目的。甚至从来没有。
     * 返回： Observable<HotCodePushEventData>
     */
    LightHotCodePush.prototype.onAssetsInstalledOnExternalStorage = function () {
        return this.hotCodePush.onAssetsInstalledOnExternalStorage();
    };
    /**
     * onAssetsInstallationError()
     * 当插件无法从外部存储上的bundle复制文件时发送的事件。如果发生这种情况 - 插件将无法正常工作。当设备上没有足够的可用空间时可能会发生。
     * 返回： Observable<HotCodePushEventData>
     */
    LightHotCodePush.prototype.onAssetsInstallationError = function () {
        return this.hotCodePush.onAssetsInstallationError();
    };
    LightHotCodePush = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_hot_code_push__["a" /* HotCodePush */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ToastController */]])
    ], LightHotCodePush);
    return LightHotCodePush;
}(__WEBPACK_IMPORTED_MODULE_3__common_lightNation__["a" /* LightNation */]));

//# sourceMappingURL=lightHotCodePush.js.map

/***/ }),
/* 355 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LightMinimize; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_lightNation__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_app_minimize__ = __webpack_require__(194);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * 轻量级的权限对象
 * @export
 * @class LightPermissisons
 * @extends {LightNation}
 */
var LightMinimize = /** @class */ (function (_super) {
    __extends(LightMinimize, _super);
    /**
     * 轻量级的权限对象初始化
     * ionic cordova plugin add cordova-plugin-appminimize
     * npm install --save @ionic-native/app-minimize
     * @memberof LightMotion
     */
    function LightMinimize(appMinimize) {
        var _this = _super.call(this) || this;
        _this.appMinimize = appMinimize;
        return _this;
    }
    /**
     * 调用最小化app插件
     */
    LightMinimize.prototype.minimize = function () {
        this.appMinimize.minimize();
    };
    LightMinimize = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_app_minimize__["a" /* AppMinimize */]])
    ], LightMinimize);
    return LightMinimize;
}(__WEBPACK_IMPORTED_MODULE_1__common_lightNation__["a" /* LightNation */]));

//# sourceMappingURL=lightMinimize.js.map

/***/ }),
/* 356 */,
/* 357 */,
/* 358 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export LightMemoryCache */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//用户对象的信息
var LightMemoryCache = /** @class */ (function () {
    function LightMemoryCache() {
        /**
         * 内部的数据对象
         *
         * @private
         * @type {object}
         * @memberof LightMemoryCache
         */
        this._data = {};
    }
    /**
     * 放置缓存的信息
     * @param {string} key
     * @param {*} value
     *
     * @memberof LightMemoryCache
     */
    LightMemoryCache.prototype.put = function (key, value) {
        this._data[key] = value;
    };
    /**
     * 获取缓存的信息
     *
     * @param {string} 对应的关键字
     * @returns {*}
     *
     * @memberof LightMemoryCache
     */
    LightMemoryCache.prototype.get = function (key) {
        return this._data[key];
    };
    /**
     * 包含的操作
     * @param {string} 对应的关键字
     * @returns {boolean}
     *
     * @memberof LightMemoryCache
     */
    LightMemoryCache.prototype.contain = function (key) {
        var result = false;
        if (!!key && this._data.hasOwnProperty(key)) {
            result = true;
        }
        return result;
    };
    /**
     * 清空的操作
     * @param {string} key
     *
     * @memberof LightMemoryCache
     */
    LightMemoryCache.prototype.remove = function (key) {
        if (!!key) {
            delete this._data[key];
        }
    };
    /**
     * 清空的操作
     * @memberof LightMemoryCache
     */
    LightMemoryCache.prototype.clear = function () {
        this._data = {};
    };
    LightMemoryCache = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], LightMemoryCache);
    return LightMemoryCache;
}());

//# sourceMappingURL=lightMemoryCache.js.map

/***/ }),
/* 359 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LightPlatform; });
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


//用户对象的信息
var LightPlatform = /** @class */ (function () {
    /**
     * 平台的对象信息
     * @param {Platform} platform
     *
     * @memberof LightPlatform
     */
    function LightPlatform(platform) {
        this.platform = platform;
    }
    /**
     * 判断是否为IOS的系统
     * @returns {boolean}
     * @memberof LightPlatform
     */
    LightPlatform.prototype.isIOS = function () {
        var result = false;
        if (this.platform.is('ios')) {
            result = true;
        }
        return result;
    };
    /**
     * 判断是否为Android的系统
     *
     * @returns {boolean}
     *
     * @memberof LightPlatform
     */
    LightPlatform.prototype.isIPad = function () {
        var result = false;
        if (this.platform.is('ipad')) {
            result = true;
        }
        return result;
    };
    /**
     * 判断是否为Android的系统
     *
     * @returns {boolean}
     *
     * @memberof LightPlatform
     */
    LightPlatform.prototype.isIPhone = function () {
        var result = false;
        if (this.platform.is('iphone')) {
            result = true;
        }
        return result;
    };
    /**
     * 判断是否为Android的系统
     *
     * @returns {boolean}
     *
     * @memberof LightPlatform
     */
    LightPlatform.prototype.isAndroid = function () {
        var result = false;
        if (this.platform.is('android')) {
            result = true;
        }
        return result;
    };
    /**
     * 判断是否为Window的浏览器
     *
     * @returns {boolean}
     *
     * @memberof LightPlatform
     */
    LightPlatform.prototype.isWindows = function () {
        var result = false;
        //console.log(this.platform.platforms);
        if (this.platform.is('windows')) {
            result = true;
        }
        return result;
    };
    /**
     * 判断是否为web的界面
     * @returns {boolean}
     *
     * @memberof LightPlatform
     */
    LightPlatform.prototype.isMobileWeb = function () {
        var result = false;
        if (this.platform.is('mobileweb')) {
            result = true;
        }
        return result;
    };
    LightPlatform = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* Platform */]])
    ], LightPlatform);
    return LightPlatform;
}());

//# sourceMappingURL=lightPlatform.js.map

/***/ }),
/* 360 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LightLoading; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LightLoading = /** @class */ (function () {
    function LightLoading(loadingCtrl) {
        this.loadingCtrl = loadingCtrl;
        this.autoTimeClose = 100000; //自动关闭的时间
        this.loader = null; //加载条
    }
    /**
     * 显示加载条
     *
     * @param {*} func 显示加载条的回调函数
     * @memberof LightLoading
     */
    LightLoading.prototype.presentLoading = function (title, completeHandler) {
        this.loader = this.loadingCtrl.create({
            content: title,
            duration: this.autoTimeClose,
        });
        if (!!completeHandler) {
            this.loader.onDidDismiss(function () {
                completeHandler();
            });
        }
        return this.loader.present();
    };
    /**
     * 停止加载条
     *
     * @param {any}
     * @memberof LightLoading
     */
    LightLoading.prototype.stopLoading = function () {
        this.loader.dismiss();
    };
    LightLoading = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["k" /* LoadingController */]])
    ], LightLoading);
    return LightLoading;
}());

//# sourceMappingURL=lightLoading.js.map

/***/ }),
/* 361 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LightLoad; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LightLoad = /** @class */ (function () {
    //加载的方法信息
    function LightLoad(loadingCtrl) {
        this.loadingCtrl = loadingCtrl;
        //自动关闭的时间
        this.autoTimeClose = 100000;
    }
    /**
     * 展现加载的操作
     * 关闭加载的页面选用loader.dismiss()的方法
     * @param {string} 文本内容
     *
     * @memberof LightLoad
     */
    LightLoad.prototype.showLoading = function (content) {
        if (content === void 0) { content = "正在加载中..."; }
        var loading = this.loadingCtrl.create({ spinner: 'circles', content: content, duration: this.autoTimeClose });
        loading.present();
        return loading;
    };
    LightLoad = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["k" /* LoadingController */]])
    ], LightLoad);
    return LightLoad;
}());

//# sourceMappingURL=lightLoad.js.map

/***/ }),
/* 362 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LightMemberImage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__light_util_light_util_module__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


///用户对象的信息
var LightMemberImage = /** @class */ (function () {
    function LightMemberImage() {
        //颜色列表
        this.colorArray = ['#3ab9ff', '#30d2e9', '#f4c600', '#13c7a9'];
        //地图映射
        this.mapList = new __WEBPACK_IMPORTED_MODULE_1__light_util_light_util_module__["g" /* MapList */]();
    }
    //得到随机的颜色信息
    LightMemberImage.prototype.getRandomColor = function (key) {
        var result = null;
        if (!!key) {
            if (!this.mapList.containkey(key)) {
                this.mapList.put(key, this.colorArray[this._getRandomIndex()]);
            }
            result = this.mapList.getValue(key);
        }
        return result;
    };
    //得到随机的索引信息
    LightMemberImage.prototype._getRandomIndex = function () {
        return Math.floor(Math.random() * 4);
    };
    LightMemberImage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], LightMemberImage);
    return LightMemberImage;
}());

//# sourceMappingURL=lightMemberImage.js.map

/***/ }),
/* 363 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LightMethods; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LightMethods = /** @class */ (function () {
    function LightMethods() {
        this.lastTime = 0;
        this.timer = null;
    }
    /**
     * 节流，处理多次点击多次弹出页面的情况
     *
     * @param {Function} handler
     * @param {number} wait
     * @memberof LightMethods
     */
    LightMethods.prototype.doThrottle = function (handler, wait) {
        var nowTime = new Date().getTime();
        if (nowTime - this.lastTime > 1000) {
            console.log('true');
            handler();
            this.lastTime = nowTime;
        }
    };
    /**
     * 防抖，处理搜索输入触发搜索返回的频率
     *
     * @param {Function} handler
     * @param {number} deley
     * @memberof LightMethods
     */
    LightMethods.prototype.doDebounce = function (handler, deley) {
        clearTimeout(this.timer);
        this.timer = setTimeout(function () {
            handler();
        }, deley);
    };
    LightMethods = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
        /**
         * 一些用于优化的方法
         *
         * @export
         * @class LightMethods
         */
        ,
        __metadata("design:paramtypes", [])
    ], LightMethods);
    return LightMethods;
}());

//# sourceMappingURL=lightMethods.js.map

/***/ }),
/* 364 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LightProviders; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lightHttp__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lightPop__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lightLocalCache__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lightUser__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__lightNav__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__lightExit__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__lightModal__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__lightConfig__ = __webpack_require__(92);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









//用户对象的信息
var LightProviders = /** @class */ (function () {
    /**
     * 提供器列表
     * @param {LightHttp} lightHttp
     * @param {LightPop} lightPop
     * @param {LightLocalCache} lightLocalCache
     * @memberof LightProviders
     */
    function LightProviders(lightConfig, lightHttp, lightExit, lightNav, lightModal, lightPop, lightLocalCache, lightUser) {
        this.lightConfig = lightConfig;
        this.lightHttp = lightHttp;
        this.lightExit = lightExit;
        this.lightNav = lightNav;
        this.lightModal = lightModal;
        this.lightPop = lightPop;
        this.lightLocalCache = lightLocalCache;
        this.lightUser = lightUser;
    }
    /**
     * 模板初始化
     * @param {NavController} nav
     * @memberof LightProviders
     */
    LightProviders.prototype.templateInit = function () {
    };
    /**
     * 页面的跳转
     * @param page
     * @param data
     */
    LightProviders.prototype.push = function (page, data) {
        this.lightNav.push(page, data);
    };
    /**
     * 页面的跳转
     * @param page
     * @param data
     */
    LightProviders.prototype.back = function (page, data) {
        this.lightNav.back(page, data);
    };
    /**
     * 弹出消息对象
     * @param message
     * @param title
     */
    LightProviders.prototype.popMessage = function (message, title) {
        if (title === void 0) { title = null; }
        this.lightPop.message(message, title);
    };
    /**
     * 设置基础的url消息
     * @param baseUrlTemp
     */
    LightProviders.prototype.setBaseUrl = function (baseUrlTemp) {
        this.lightConfig.baseUrl = baseUrlTemp;
    };
    LightProviders = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_8__lightConfig__["a" /* LightConfig */],
            __WEBPACK_IMPORTED_MODULE_1__lightHttp__["a" /* LightHttp */],
            __WEBPACK_IMPORTED_MODULE_6__lightExit__["a" /* LightExit */],
            __WEBPACK_IMPORTED_MODULE_5__lightNav__["a" /* LightNav */],
            __WEBPACK_IMPORTED_MODULE_7__lightModal__["a" /* LightModal */],
            __WEBPACK_IMPORTED_MODULE_2__lightPop__["a" /* LightPop */],
            __WEBPACK_IMPORTED_MODULE_3__lightLocalCache__["a" /* LightLocalCache */],
            __WEBPACK_IMPORTED_MODULE_4__lightUser__["a" /* LightUser */]])
    ], LightProviders);
    return LightProviders;
}());

//# sourceMappingURL=lightProviders.js.map

/***/ }),
/* 365 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LightContentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__light_util_light_util_module__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LightContentComponent = /** @class */ (function () {
    function LightContentComponent() {
        //标题的名称
        this.titleName = "";
        /**
         * 展现的标识
         * @type {boolean}
         * @memberof LightContentComponent
         */
        this.showFlag = true;
    }
    /**
     * 组件初始化
     * @memberof LightContentComponent
     */
    LightContentComponent.prototype.ngOnInit = function () {
        if (__WEBPACK_IMPORTED_MODULE_1__light_util_light_util_module__["b" /* LightBrowserUtil */].isWeixinBrowser()) {
            this.showFlag = false;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], LightContentComponent.prototype, "titleName", void 0);
    LightContentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'light-content',template:/*ion-inline-start:"/Users/clark/Documents/personal/appFrame/src/light/light-components/light-content/light-content.html"*/'<ion-header *ngIf="showFlag">\n  <ion-navbar color="primary">\n    <ion-title>\n      {{titleName}}\n    </ion-title>\n    <ion-buttons end>\n      <ng-content select=".lightNavbar"></ng-content>\n    </ion-buttons>\n  </ion-navbar>\n  <ng-content select=".lightHeader"></ng-content>\n</ion-header>\n<ion-content>\n  <ng-content></ng-content>\n</ion-content>\n<ng-content select=".footerContent"></ng-content>\n<ion-footer>\n  <ng-content select=".lightFooter"></ng-content>\n</ion-footer>\n'/*ion-inline-end:"/Users/clark/Documents/personal/appFrame/src/light/light-components/light-content/light-content.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], LightContentComponent);
    return LightContentComponent;
}());

//# sourceMappingURL=light-content.js.map

/***/ }),
/* 366 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LightListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__light_util_light_util_module__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__light_providers_light_providers_module__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LightListComponent = /** @class */ (function () {
    ///构造函数初始化
    function LightListComponent(lightHttp) {
        this.lightHttp = lightHttp;
        //标题的名称
        this.titleName = "";
        //题目的信息
        this.dataList = [];
        //数据的链接
        this.dataUrl = "";
        //数据的参数
        this.dataParam = {};
        //数据的链接
        this.idCol = "";
        //尺寸信息
        this.limit = 10;
        //偏移量
        this.offset = 0;
        //行的总数
        this.rowCount = 0;
        //加载的
        this.loadFlag = true;
        ///空的信息
        this.emptyFlag = false;
        this.infiniteFlag = false;
        this.keepScroll = null;
        /**
         * 展现的标识
         * @type {boolean}
         * @memberof LightContentComponent
         */
        this.showFlag = true;
    }
    LightListComponent.prototype.ngOnInit = function () {
    };
    LightListComponent.prototype.ngOnChanges = function (changes) {
        __WEBPACK_IMPORTED_MODULE_1__light_util_light_util_module__["a" /* LightArrayUtil */].clear(this.dataList);
        this.infiniteFlag = false;
        if (!!this.keepScroll) {
            this.keepScroll.enable(true);
        }
        if (!!!this.idCol) {
            this.idCol = "ObjectID";
        }
        if (!!this.dataUrl) {
            this._loadList(this.offset, this.limit);
        }
        if (__WEBPACK_IMPORTED_MODULE_1__light_util_light_util_module__["b" /* LightBrowserUtil */].isWeixinBrowser()) {
            this.showFlag = false;
        }
    };
    /**
     * 加载列表
     * @param {Number} 偏移
     * @param {Number} 尺寸
     *
     * @memberof MessageList
     */
    LightListComponent.prototype._loadList = function (offset, limit, flag) {
        if (flag === void 0) { flag = true; }
        var that = this;
        var result = new Promise(function (resolve, reject) {
            var urlParams = {};
            if (!!that.dataParam) {
                for (var key in that.dataParam) {
                    if (that.dataParam.hasOwnProperty(key)) {
                        urlParams[key] = that.dataParam[key];
                    }
                }
            }
            urlParams["offset"] = offset;
            urlParams["limit"] = limit;
            that.lightHttp.post(that.dataUrl, urlParams).then(function (value) {
                if (value) {
                    var objectTemp = __WEBPACK_IMPORTED_MODULE_1__light_util_light_util_module__["d" /* LightJsonUtil */].toObject(value);
                    if (objectTemp["total"] == 0) {
                        that.emptyFlag = true;
                        that.loadFlag = false;
                        that.infiniteFlag = false;
                        return;
                    }
                    var objectList = objectTemp['rows'];
                    if (objectList.length > 0) {
                        for (var index = 0; index < objectList.length; index++) {
                            var element = objectList[index];
                            if (!that._containData(element[that.idCol])) {
                                if (flag) {
                                    that.dataList.push(element);
                                }
                                else {
                                    that.dataList.push(element);
                                }
                            }
                        }
                        that.rowCount = objectList.length;
                    }
                    else {
                        that.infiniteFlag = true;
                    }
                    that.loadFlag = false;
                    that.emptyFlag = false;
                }
                resolve();
            }).catch(function (errText) {
                reject();
            });
        }).catch(function (err) {
            console.log(err);
        });
        return result;
    };
    /**
     * 判断数据是否存在
     * @private
     * @param {string} ID的标识信息
     * @returns {boolean}
     *
     * @memberof MessageList
     */
    LightListComponent.prototype._containData = function (id) {
        var result = false;
        if (!!id) {
            for (var index = 0; index < this.dataList.length; index++) {
                var element = this.dataList[index];
                if (element[this.idCol] == id) {
                    result = true;
                }
            }
        }
        return result;
    };
    //上拉刷新
    LightListComponent.prototype.doRefresh = function (refresher) {
        this.infiniteFlag = false;
        if (!!this.keepScroll) {
            this.keepScroll.enable(true);
        }
        __WEBPACK_IMPORTED_MODULE_1__light_util_light_util_module__["a" /* LightArrayUtil */].clear(this.dataList);
        if (!!this.dataUrl) {
            this._loadList(this.offset, this.limit).then(function (value) {
                refresher.complete();
            }).catch(function (value) {
                refresher.complete();
            });
        }
        else {
            setTimeout(function () {
                refresher.complete();
            }, 500);
        }
    };
    //下拉刷新
    LightListComponent.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        if (!!this.dataUrl) {
            if (this.dataList.length == this.rowCount) {
                infiniteScroll.enable(false);
                this.keepScroll = infiniteScroll;
                this.infiniteFlag = true;
                return;
            }
            this._loadList(this.dataList.length, this.limit, false).then(function (value) {
                infiniteScroll.complete();
                if (_this.rowCount < _this.limit) {
                    infiniteScroll.enable(false);
                    _this.keepScroll = infiniteScroll;
                    _this.infiniteFlag = true;
                }
            }).catch(function (value) {
                infiniteScroll.complete();
            });
        }
        else {
            setTimeout(function () {
                infiniteScroll.complete();
            }, 1000);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], LightListComponent.prototype, "titleName", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], LightListComponent.prototype, "dataList", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], LightListComponent.prototype, "dataUrl", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], LightListComponent.prototype, "dataParam", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], LightListComponent.prototype, "idCol", void 0);
    LightListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'light-list',template:/*ion-inline-start:"/Users/clark/Documents/personal/appFrame/src/light/light-components/light-list/light-list.component.html"*/'<ion-header *ngIf="showFlag">\n  <ion-navbar color="primary">\n    <ion-title>{{titleName}}</ion-title>\n    <ion-buttons end>\n      <ng-content select=".lightNavbar"></ng-content>\n    </ion-buttons>\n  </ion-navbar>\n  <ng-content select=".lightHeader"></ng-content>\n</ion-header>\n\n<ion-content>\n  <!-- 下拉刷新 -->\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content pullingIcon="ios-arrow-round-up-outline" pullingText="下拉刷新" refreshingSpinner="circles" refreshingText="刷新..."></ion-refresher-content>\n  </ion-refresher>\n\n  <ng-content></ng-content>\n\n  <div *ngIf="loadFlag" class="list-tip">数据正在加载中...</div>\n  <div *ngIf="emptyFlag" class="list-tip">无数据结果</div>\n\n  <!-- 上拉加载 -->\n  <ion-infinite-scroll (ionInfinite)="doInfinite($event)" threshold="50px">\n    <ion-infinite-scroll-content loadingSpinner="bubbles" loadingText="加载更多..."></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n\n  <div *ngIf="infiniteFlag" class="list-tip">------ 我也是有底线的 ------</div>\n\n</ion-content>\n\n<ion-footer>\n  <ng-content select=".lightFooter"></ng-content>\n</ion-footer>\n'/*ion-inline-end:"/Users/clark/Documents/personal/appFrame/src/light/light-components/light-list/light-list.component.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__light_providers_light_providers_module__["a" /* LightHttp */]])
    ], LightListComponent);
    return LightListComponent;
}());

//# sourceMappingURL=light-list.component.js.map

/***/ }),
/* 367 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormFomat; });
/**
 * 表单的动作信息
 * @export
 * @interface IFormAction
 */
var FormFomat = /** @class */ (function () {
    function FormFomat() {
    }
    ///组件的开始标识
    FormFomat.GroupStartType = "groupbegin";
    //组件的结束标识
    FormFomat.GroupEndType = "groupend";
    ///表格的开始标识
    FormFomat.TableStartType = "tablebegin";
    ///表格的结束标识
    FormFomat.TableEndType = "tableend";
    ///行的开始标识
    FormFomat.RowStartType = "rowbegin";
    ///行的结束标识
    FormFomat.RowEndType = "rowend";
    return FormFomat;
}());

//# sourceMappingURL=FormFomat.js.map

/***/ }),
/* 368 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormRowUtil; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__FormActionMap__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__FormRowBase__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__FormRowBaseUtil__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__FormList__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__FormNode__ = __webpack_require__(207);





/**
 * 表格行的工具类
 *
 * @export
 * @class FormRowUtil
 */
var FormRowUtil = /** @class */ (function () {
    function FormRowUtil() {
    }
    /**
     * 得到表单的数据信息
     * @static
     * @param {Array<any>} dataList
     * @param {FormEvent} formEvent
     * @returns {Array<IFormList>}
     * @memberof FormRowUtil
     */
    FormRowUtil.getFormDta = function (dataList, formEvent) {
        if (formEvent === void 0) { formEvent = null; }
        var result = [];
        var tempRowList = null;
        var list = [];
        if (!!dataList && dataList.length > 0) {
            for (var index = 0; index < dataList.length; index++) {
                var element = dataList[index];
                if (element != null) {
                    var rowBaseType = FormRowUtil._getRowBase(element);
                    if (__WEBPACK_IMPORTED_MODULE_2__FormRowBaseUtil__["a" /* FormRowBaseUtil */].isStartNode(rowBaseType.type)) {
                        if (rowBaseType.type == "groupbegin") {
                            tempRowList = new __WEBPACK_IMPORTED_MODULE_3__FormList__["a" /* FormList */](element, formEvent);
                            result.push(tempRowList);
                        }
                        else {
                            list.push(tempRowList);
                            var next = new __WEBPACK_IMPORTED_MODULE_3__FormList__["a" /* FormList */](element, formEvent);
                            tempRowList.addRowData(next);
                            tempRowList = next;
                        }
                    }
                    else if (__WEBPACK_IMPORTED_MODULE_2__FormRowBaseUtil__["a" /* FormRowBaseUtil */].isEndNode(rowBaseType.type)) {
                        tempRowList.endRow = new __WEBPACK_IMPORTED_MODULE_4__FormNode__["a" /* FormNode */](element, formEvent);
                        tempRowList = list.pop();
                    }
                    else {
                        var node = new __WEBPACK_IMPORTED_MODULE_4__FormNode__["a" /* FormNode */](element, formEvent);
                        tempRowList.addRowData(node);
                    }
                }
            }
        }
        return result;
    };
    /**
     *
     * 得到基本的行信息
     * @private
     * @static
     * @param {*} element
     * @returns {FormRowBase}
     * @memberof FormRowUtil
     */
    FormRowUtil._getRowBase = function (element) {
        return new __WEBPACK_IMPORTED_MODULE_1__FormRowBase__["a" /* FormRowBase */](element);
    };
    /**
     * 得到动作的映射列表
     *
     * @static
     * @param {Array<IFormList>} dataList
     * @memberof FormRowUtil
     */
    FormRowUtil.getActiveMapList = function (dataList) {
        return new __WEBPACK_IMPORTED_MODULE_0__FormActionMap__["a" /* FormActionMap */]();
    };
    return FormRowUtil;
}());

//# sourceMappingURL=FormRowUtil.js.map

/***/ }),
/* 369 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormEvent; });
/**
 * 表单的事件对象
 * @export
 * @interface IFormAction
 */
var FormEvent = /** @class */ (function () {
    /**
     * 表单的事件对象初始化
     * @param {FormActionMap} formActionMap
     * @memberof FormEvent
     */
    function FormEvent() {
    }
    return FormEvent;
}());

//# sourceMappingURL=FormEvent.js.map

/***/ }),
/* 370 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LightDateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var LightDateComponent = /** @class */ (function () {
    function LightDateComponent() {
    }
    LightDateComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            //moduleId: module.id,
            selector: 'light-date',template:/*ion-inline-start:"/Users/clark/Documents/personal/appFrame/src/light/light-components/light-date/light-date.component.html"*/'<!--component html goes here -->\n'/*ion-inline-end:"/Users/clark/Documents/personal/appFrame/src/light/light-components/light-date/light-date.component.html"*/,
        })
    ], LightDateComponent);
    return LightDateComponent;
}());

//# sourceMappingURL=light-date.component.js.map

/***/ }),
/* 371 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LightFlowComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__light_writer_index__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__light_read_index__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__light_util_light_util_module__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__light_flow_handle_light_flow_handle_component__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__light_flow_back_light_flow_back_component__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__light_flow_deliver_light_flow_deliver_component__ = __webpack_require__(224);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var LightFlowComponent = /** @class */ (function () {
    /**
     * 流程控制器初始化
     * @param {LightWriterService} lightWriterService
     * @param {LightReadService} lightReadService
     * @param {NavController} navCtrl
     * @memberof LightFlowComponent
     */
    function LightFlowComponent(lightWriterService, lightReadService, navCtrl) {
        this.lightWriterService = lightWriterService;
        this.lightReadService = lightReadService;
        this.navCtrl = navCtrl;
        ///流程的对象ID
        this.flowObjectID = "";
        ///展现菜单的标识
        this.showMenuFlag = false;
        //控制开头
        this.showFlag = false;
        ///是否第一个环节展现
        this.fristStepShow = false;
        ///表单读取的数据信息
        this.readFormData = null;
        ///写入流程的操作
        this.writerFlow = null;
    }
    /**
     * 组件初始化
     * @memberof LightContentComponent
     */
    LightFlowComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!!this.flowObjectID) {
            this.lightReadService.getReadForm(this.flowObjectID).then(function (value) {
                _this.readFormData = __WEBPACK_IMPORTED_MODULE_4__light_util_light_util_module__["d" /* LightJsonUtil */].toObject(value);
            });
        }
        if (!!this.showMenuFlag) {
            this.lightWriterService.getWriterFlow(this.flowObjectID).then(function (value) {
                _this.writerFlow = value;
                if (_this.writerFlow.isFristStep()) {
                    _this.fristStepShow = true;
                }
                else {
                    _this.showFlag = true;
                }
            }).catch(function (errText) {
            });
        }
    };
    //流程办理
    LightFlowComponent.prototype.workHandle = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__light_flow_handle_light_flow_handle_component__["a" /* LightFlowHandleComponent */], { flow: this.writerFlow });
    };
    //流程打回
    LightFlowComponent.prototype.workCallBack = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__light_flow_back_light_flow_back_component__["a" /* LightFlowBackComponent */], { flow: this.writerFlow });
    };
    //流程转交
    LightFlowComponent.prototype.workDeliver = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__light_flow_deliver_light_flow_deliver_component__["a" /* LightFlowDeliverComponent */], { flow: this.writerFlow });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], LightFlowComponent.prototype, "flowObjectID", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Boolean)
    ], LightFlowComponent.prototype, "showMenuFlag", void 0);
    LightFlowComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            //moduleId: module.id,
            selector: 'light-flow',template:/*ion-inline-start:"/Users/clark/Documents/personal/appFrame/src/light/light-components/light-flow/light-flow/light-flow.component.html"*/'<light-read [readData]="readFormData"></light-read>\n<div class="lightFooter">\n  <div class="processbar" *ngIf="showFlag">\n    <a ion-button clear>表单</a>\n    <a ion-button clear (click)=\'workHandle()\'>办理</a>\n    <a ion-button clear (click)=\'workCallBack()\'>打回</a>\n    <a ion-button clear (click)=\'workDeliver()\'>转交</a>\n  </div>\n  <div class="processbar" *ngIf="fristStepShow">\n    <a ion-button clear (click)=\'workHandle()\'>办理</a>\n    <a ion-button clear (click)=\'workDeliver()\'>转交</a>\n  </div>\n</div>\n'/*ion-inline-end:"/Users/clark/Documents/personal/appFrame/src/light/light-components/light-flow/light-flow/light-flow.component.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__light_writer_index__["h" /* LightWriterService */],
            __WEBPACK_IMPORTED_MODULE_3__light_read_index__["f" /* LightReadService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */]])
    ], LightFlowComponent);
    return LightFlowComponent;
}());

//# sourceMappingURL=light-flow.component.js.map

/***/ }),
/* 372 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__light_writer_data_component__ = __webpack_require__(373);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__light_writer_data_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__writer_check_writer_check_component__ = __webpack_require__(378);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__writer_check_writer_check_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__writer_muti_writer_muti_component__ = __webpack_require__(379);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__writer_muti_writer_muti_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__writer_toggle_writer_toggle_component__ = __webpack_require__(380);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_3__writer_toggle_writer_toggle_component__["a"]; });




//# sourceMappingURL=index.js.map

/***/ }),
/* 373 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LightWriterDataComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_index__ = __webpack_require__(17);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LightWriterDataComponent = /** @class */ (function (_super) {
    __extends(LightWriterDataComponent, _super);
    /**
     * 数据组件对象
     * @memberof LightWriterDataComponent
     */
    function LightWriterDataComponent() {
        return _super.call(this) || this;
    }
    /**
     *
     * 内部初始化
     * @memberof LightReadDivComponent
     */
    LightWriterDataComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
    };
    LightWriterDataComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'light-writer-data',template:/*ion-inline-start:"/Users/clark/Documents/personal/appFrame/src/light/light-components/light-writer/light-writer-data/light-writer-data.component.html"*/'<div [ngSwitch]=\'rowType\'>\n  <writer-check *ngSwitchCase="\'select\'" [formRow]=\'formRow\'></writer-check>\n  <writer-muti *ngSwitchCase="\'multiselect\'" [formRow]=\'formRow\'></writer-muti>\n  <writer-muti *ngSwitchCase="\'checkbox\'" [formRow]=\'formRow\'></writer-muti>\n  <writer-toggle *ngSwitchCase="\'radio\'" [formRow]=\'formRow\'></writer-toggle>\n</div>\n'/*ion-inline-end:"/Users/clark/Documents/personal/appFrame/src/light/light-components/light-writer/light-writer-data/light-writer-data.component.html"*/,
        }),
        __metadata("design:paramtypes", [])
    ], LightWriterDataComponent);
    return LightWriterDataComponent;
}(__WEBPACK_IMPORTED_MODULE_1__common_index__["a" /* LightWriterCommon */]));

//# sourceMappingURL=light-writer-data.component.js.map

/***/ }),
/* 374 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export LightWriterSimpleAppend */
/**
 * 写入的的对象信息
 *
 * @export
 * @class LightWriterAppend
 */
var LightWriterSimpleAppend = /** @class */ (function () {
    /**
     * 写入的基本接口信息
     * @param {string} [titleName=null]
     * @memberof LightWriterSimpleAppend
     */
    function LightWriterSimpleAppend(titleName) {
        if (titleName === void 0) { titleName = ""; }
        /**
         * 标题名称
         *
         * @private
         * @type {string}
         * @memberof LightWriterSimpleAppend
         */
        this._titleName = "";
        /**
         * 表单的列表
         * @private
         * @type {IFormList}
         * @memberof LightWriterSimpleAppend
         */
        this._formList = null;
        //group的开始的对象
        this._groupBegin = null;
        //group的结束的对象
        this._groupEnd = null;
        //数据的列表
        this._dataList = [];
        this._titleName = titleName;
        this._groupBegin = this._createGroupBeginObject(this._titleName);
        this._groupEnd = this._createGroupEndObject();
    }
    /**
     * 增加标签的对象
     *
     * @param {string} txt
     * @param {*} value
     * @memberof LightWriterSimpleAppend
     */
    LightWriterSimpleAppend.prototype.addLabelObject = function (txt, value) {
        this._dataList.push(this._createLabelObject(txt, value));
    };
    /**
     * 增加标签的对象
     *
     * @param {string} txt
     * @param {*} value
     * @memberof LightWriterSimpleAppend
     */
    LightWriterSimpleAppend.prototype.addTextObject = function (txt, value) {
        this._dataList.push(this._createTextObject(txt, value));
    };
    /**
     * 转换为数据的列表
     *
     * @returns {Array<any>}
     * @memberof LightWriterSimpleAppend
     */
    LightWriterSimpleAppend.prototype.toDataList = function () {
        var result = [];
        result.push(this._groupBegin);
        this._dataList.forEach(function (element) {
            result.push(element);
        });
        result.push(this._groupEnd);
        return result;
    };
    /**
     * 创建标签对象
     *
     * @private
     * @param {string} txt
     * @param {*} value
     * @returns {*}
     * @memberof LightWriterSimpleAppend
     */
    LightWriterSimpleAppend.prototype._createLabelObject = function (txt, value) {
        return this._createRowObject(txt, "label", "");
    };
    /**
     * 创建文本对象
     *
     * @private
     * @param {string} txt
     * @param {*} value
     * @returns {*}
     * @memberof LightWriterSimpleAppend
     */
    LightWriterSimpleAppend.prototype._createTextObject = function (txt, value) {
        return this._createRowObject(txt, "text", "");
    };
    /**
     * 创建Group的开始对象
     *
     * @private
     * @param {string} txt
     * @returns {*}
     * @memberof LightWriterSimpleAppend
     */
    LightWriterSimpleAppend.prototype._createGroupBeginObject = function (txt) {
        return this._createRowObject(txt, "groupbegin", "");
    };
    /**
     * 创建Group的结束对象
     *
     * @private
     * @returns {*}
     * @memberof LightWriterSimpleAppend
     */
    LightWriterSimpleAppend.prototype._createGroupEndObject = function () {
        return this._createRowObject("", "groupend", "");
    };
    /**
     * 创建行的对象信息
     *
     * @private
     * @param {string} txt
     * @param {string} type
     * @param {string} value
     * @memberof LightWriterSimpleAppend
     */
    LightWriterSimpleAppend.prototype._createRowObject = function (txt, type, value) {
        return { txt: txt, type: type, value: value, extend: {} };
    };
    return LightWriterSimpleAppend;
}());

//# sourceMappingURL=lightWriterSimpleAppend.js.map

/***/ }),
/* 375 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export LightWriterType */
/**
 * light写入的类型
 * @export
 * @enum {number}
 */
var LightWriterType;
(function (LightWriterType) {
    LightWriterType[LightWriterType["DataSelect"] = 0] = "DataSelect";
    LightWriterType[LightWriterType["Image"] = 1] = "Image";
    LightWriterType[LightWriterType["Text"] = 2] = "Text";
    LightWriterType[LightWriterType["Textarea"] = 3] = "Textarea";
    LightWriterType[LightWriterType["UserSelect"] = 4] = "UserSelect";
})(LightWriterType || (LightWriterType = {}));
//# sourceMappingURL=lightWriterType.js.map

/***/ }),
/* 376 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export LightWriterTypeUtil */
/**
 * @export
 * @class LightWriterTypeUtil
 */
var LightWriterTypeUtil = /** @class */ (function () {
    function LightWriterTypeUtil() {
    }
    return LightWriterTypeUtil;
}());

//# sourceMappingURL=lightWriterTypeUtil.js.map

/***/ }),
/* 377 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LightWriterCommon; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * 写入组件的公共对象信息
 *
 * @export
 * @class LightWriterComponent
 */
var LightWriterCommon = /** @class */ (function () {
    function LightWriterCommon() {
        //表单的行对象
        this.formRow = null;
        //标题信息
        this.key = "";
        //行的类型
        this.rowType = "";
        //详细的类型
        this.detailType = "";
    }
    /**
     * 组件初始化操作
     *
     * @memberof WriterCheckComponent
     */
    LightWriterCommon.prototype.ngOnInit = function () {
        this.key = this.formRow.title;
        this.value = this.formRow.value;
        this.rowType = this.getRowType();
        this.detailType = this.getDetailType();
    };
    /**
     * 得到行类型信息
     */
    LightWriterCommon.prototype.getRowType = function () {
        var result = null;
        if (!!this.formRow) {
            result = this.formRow.type;
        }
        return result;
    };
    /**
     * 得到具体的类型信息
     *
     * @returns {string}
     * @memberof LightWriterComponent
     */
    LightWriterCommon.prototype.getDetailType = function () {
        var result = null;
        if (!!this.formRow) {
            result = this.formRow.detailType;
        }
        return result;
    };
    /**
     * 获取扩展的对象信息
     * @returns {*}
     * @memberof LightWriterComponent
     */
    LightWriterCommon.prototype.getExtendObject = function () {
        var result = null;
        if (!!this.formRow) {
            result = this.formRow.extendObject;
        }
        return result;
    };
    /**
     *
     * 获取扩展对象的属性值信息
     * @param {string} propertyName
     * @returns {*}
     * @memberof LightWriterComponent
     */
    LightWriterCommon.prototype.getExtendObjectValue = function (propertyName) {
        var result = null;
        var extendObject = this.getExtendObject();
        if (!!extendObject) {
            result = extendObject[propertyName];
        }
        return result;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], LightWriterCommon.prototype, "formRow", void 0);
    return LightWriterCommon;
}());

//# sourceMappingURL=lightWriterCommon.js.map

/***/ }),
/* 378 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WriterCheckComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_index__ = __webpack_require__(17);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var WriterCheckComponent = /** @class */ (function (_super) {
    __extends(WriterCheckComponent, _super);
    function WriterCheckComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        //数据的列表
        _this.dataList = [];
        return _this;
    }
    /**
     * 组件初始化操作
     *
     * @memberof WriterCheckComponent
     */
    WriterCheckComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
        this.dataList = this.getExtendObjectValue("enumeration");
    };
    WriterCheckComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            //moduleId: module.id,
            selector: 'writer-check',template:/*ion-inline-start:"/Users/clark/Documents/personal/appFrame/src/light/light-components/light-writer/light-writer-data/writer-check/writer-check.component.html"*/'<ion-item>\n  <ion-label class="select-label">{{key}}</ion-label>\n  <ion-select [(ngModel)]="formRow.value" okText="确定" cancelText="取消">\n    <ion-option *ngFor="let o of dataList" [value]="o.value">{{o.value}}</ion-option>\n  </ion-select>\n</ion-item>\n'/*ion-inline-end:"/Users/clark/Documents/personal/appFrame/src/light/light-components/light-writer/light-writer-data/writer-check/writer-check.component.html"*/,
        })
    ], WriterCheckComponent);
    return WriterCheckComponent;
}(__WEBPACK_IMPORTED_MODULE_1__common_index__["a" /* LightWriterCommon */]));

//# sourceMappingURL=writer-check.component.js.map

/***/ }),
/* 379 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WriterMutiComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_index__ = __webpack_require__(17);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var WriterMutiComponent = /** @class */ (function (_super) {
    __extends(WriterMutiComponent, _super);
    function WriterMutiComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        //数据的列表
        _this.dataList = [];
        _this._content = null;
        return _this;
    }
    Object.defineProperty(WriterMutiComponent.prototype, "content", {
        get: function () {
            return this._content;
        },
        set: function (value) {
            var arrayList = value;
            this.formRow.value = arrayList.join(",");
            this._content = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * 组件初始化操作
     *
     * @memberof WriterCheckComponent
     */
    WriterMutiComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
        this.dataList = this.getExtendObjectValue("enumeration");
        this.oldContent = this.formRow.value;
    };
    /**
     * 数据提交
     * @memberof WriterMutiComponent
     */
    WriterMutiComponent.prototype.dataSelect = function () {
        // console.log("多选",this.content,this.dataList);
        //var arrayList=this.content.split(",");
        //this.formRow.value=arrayList.join('');
    };
    /**
     * 取消的操作
     *
     * @memberof WriterMutiComponent
     */
    WriterMutiComponent.prototype.ionCancel = function () {
        this.formRow.value = this.oldContent;
    };
    WriterMutiComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            //moduleId: module.id,
            selector: 'writer-muti',template:/*ion-inline-start:"/Users/clark/Documents/personal/appFrame/src/light/light-components/light-writer/light-writer-data/writer-muti/writer-muti.component.html"*/'<ion-item>\n  <ion-label class="select-label">{{key}}</ion-label>\n  <ion-select [(ngModel)]="content" multiple="true" okText="确定" cancelText="取消" (ionCancel)="ionCancel()">\n    <ion-option *ngFor="let o of dataList" [value]="o.value" [selected]="o.selected" (ionSelect)="dataSelect()">{{o.value}}</ion-option>\n  </ion-select>\n</ion-item>\n'/*ion-inline-end:"/Users/clark/Documents/personal/appFrame/src/light/light-components/light-writer/light-writer-data/writer-muti/writer-muti.component.html"*/,
        })
    ], WriterMutiComponent);
    return WriterMutiComponent;
}(__WEBPACK_IMPORTED_MODULE_1__common_index__["a" /* LightWriterCommon */]));

//# sourceMappingURL=writer-muti.component.js.map

/***/ }),
/* 380 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WriterToggleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_index__ = __webpack_require__(17);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WriterToggleComponent = /** @class */ (function (_super) {
    __extends(WriterToggleComponent, _super);
    /**
     * 开关组件操作
     * @memberof WriterToggleComponent
     */
    function WriterToggleComponent() {
        return _super.call(this) || this;
    }
    WriterToggleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            //moduleId: module.id,
            selector: 'writer-toggle',template:/*ion-inline-start:"/Users/clark/Documents/personal/appFrame/src/light/light-components/light-writer/light-writer-data/writer-toggle/writer-toggle.component.html"*/'<!--component html goes here -->\n'/*ion-inline-end:"/Users/clark/Documents/personal/appFrame/src/light/light-components/light-writer/light-writer-data/writer-toggle/writer-toggle.component.html"*/,
        }),
        __metadata("design:paramtypes", [])
    ], WriterToggleComponent);
    return WriterToggleComponent;
}(__WEBPACK_IMPORTED_MODULE_1__common_index__["a" /* LightWriterCommon */]));

//# sourceMappingURL=writer-toggle.component.js.map

/***/ }),
/* 381 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LightWriterDateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_index__ = __webpack_require__(17);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LightWriterDateComponent = /** @class */ (function (_super) {
    __extends(LightWriterDateComponent, _super);
    /**
     * 时间组件对象
     * @memberof LightWriterDateComponent
     */
    function LightWriterDateComponent() {
        var _this = _super.call(this) || this;
        /**
         * 时间类型
         * @type {string}
         * @memberof LightWriterDateComponent
         */
        _this.dateType = "";
        return _this;
    }
    /**
     * 初始化信息
     */
    LightWriterDateComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
        if (this.rowType == "dateyymmdd") {
            this.dateType = "date";
        }
        else if (this.rowType == "datetime") {
            this.dateType = "datetime-local";
        }
        else if (this.rowType == "dateyymm") {
            this.dateType = "month";
        }
        else {
        }
    };
    LightWriterDateComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'light-writer-date',template:/*ion-inline-start:"/Users/clark/Documents/personal/appFrame/src/light/light-components/light-writer/light-writer-date/light-writer-date.component.html"*/'<ion-item>\n  <span class="input-label">{{key}}</span>\n  <input class="input-text" type="{{dateType}}" [(ngModel)]="formRow.value" placeholder="填写信息" />\n</ion-item>\n'/*ion-inline-end:"/Users/clark/Documents/personal/appFrame/src/light/light-components/light-writer/light-writer-date/light-writer-date.component.html"*/,
        }),
        __metadata("design:paramtypes", [])
    ], LightWriterDateComponent);
    return LightWriterDateComponent;
}(__WEBPACK_IMPORTED_MODULE_1__common_index__["a" /* LightWriterCommon */]));

//# sourceMappingURL=light-writer-date.component.js.map

/***/ }),
/* 382 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__writer_text_writer_text_component__ = __webpack_require__(383);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__writer_text_writer_text_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__writer_number_writer_number_component__ = __webpack_require__(384);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__writer_number_writer_number_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__light_writer_text_component__ = __webpack_require__(385);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__light_writer_text_component__["a"]; });



//# sourceMappingURL=index.js.map

/***/ }),
/* 383 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WriterTextComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_index__ = __webpack_require__(17);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WriterTextComponent = /** @class */ (function (_super) {
    __extends(WriterTextComponent, _super);
    /**
     * 写入的文本组件
     * @memberof LightWriterTextComponent
     */
    function WriterTextComponent() {
        return _super.call(this) || this;
    }
    /**
     *
     * 内部初始化
     * @memberof LightReadDivComponent
     */
    WriterTextComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
        // this.rowType = this.formRow.detailType;
        // if (!!!this.rowType) {
        //     this.rowType = "";
        // }
        // this.key = this.formRow.title;
        //this.value = this.formRow.value;
    };
    WriterTextComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            //moduleId: module.id,
            selector: 'writer-text',template:/*ion-inline-start:"/Users/clark/Documents/personal/appFrame/src/light/light-components/light-writer/light-writer-text/writer-text/writer-text.component.html"*/'<ion-item>\n  <span class="input-label">{{key}}</span>\n  <input class="input-text" type="text" [(ngModel)]="formRow.value" placeholder="填写信息" />\n</ion-item>\n'/*ion-inline-end:"/Users/clark/Documents/personal/appFrame/src/light/light-components/light-writer/light-writer-text/writer-text/writer-text.component.html"*/,
        }),
        __metadata("design:paramtypes", [])
    ], WriterTextComponent);
    return WriterTextComponent;
}(__WEBPACK_IMPORTED_MODULE_1__common_index__["a" /* LightWriterCommon */]));

//# sourceMappingURL=writer-text.component.js.map

/***/ }),
/* 384 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WriterNumberComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_index__ = __webpack_require__(17);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WriterNumberComponent = /** @class */ (function (_super) {
    __extends(WriterNumberComponent, _super);
    /**
     * 写入的文本组件
     * @memberof LightWriterTextComponent
     */
    function WriterNumberComponent() {
        return _super.call(this) || this;
    }
    //内部初始化 
    WriterNumberComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
        // this.rowType = this.formRow.detailType;
        // if (!!!this.rowType) {
        //     this.rowType = "";
        // }
        // this.key = this.formRow.title;
        //this.value = this.formRow.value;
    };
    WriterNumberComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            //moduleId: module.id,
            selector: 'writer-number',template:/*ion-inline-start:"/Users/clark/Documents/personal/appFrame/src/light/light-components/light-writer/light-writer-text/writer-number/writer-number.component.html"*/'<ion-item>\n  <span class="input-label">{{key}}</span>\n  <input class="input-text" type="number" [(ngModel)]="formRow.value" placeholder="填写数字" />\n</ion-item>\n'/*ion-inline-end:"/Users/clark/Documents/personal/appFrame/src/light/light-components/light-writer/light-writer-text/writer-number/writer-number.component.html"*/,
        }),
        __metadata("design:paramtypes", [])
    ], WriterNumberComponent);
    return WriterNumberComponent;
}(__WEBPACK_IMPORTED_MODULE_1__common_index__["a" /* LightWriterCommon */]));

//# sourceMappingURL=writer-number.component.js.map

/***/ }),
/* 385 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LightWriterTextComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_index__ = __webpack_require__(17);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LightWriterTextComponent = /** @class */ (function (_super) {
    __extends(LightWriterTextComponent, _super);
    /**
     * 写入的文本组件
     * @memberof LightWriterTextComponent
     */
    function LightWriterTextComponent() {
        var _this = _super.call(this) || this;
        //字段的类型
        _this.fieldType = "default";
        return _this;
    }
    /**
     *
     * 内部初始化
     * @memberof LightReadDivComponent
     */
    LightWriterTextComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
        // this.rowType = this.formRow.type;
        // if(!!this.formRow.extendObject){
        //     this.fieldType=this.formRow.extendObject["fieldType"];
        //     //console.log(this.formRow.extendObject,this.fieldType);
        //     if(!!!this.fieldType){
        //         this.fieldType="default";
        //     }
        // }
    };
    LightWriterTextComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'light-writer-text',template:/*ion-inline-start:"/Users/clark/Documents/personal/appFrame/src/light/light-components/light-writer/light-writer-text/light-writer-text.component.html"*/'<div [ngSwitch]="fieldType">\n  <writer-number *ngSwitchCase="\'float\'" [formRow]=\'formRow\'></writer-number>\n  <writer-text *ngSwitchCase="\'default\'" [formRow]=\'formRow\'></writer-text>\n</div>\n'/*ion-inline-end:"/Users/clark/Documents/personal/appFrame/src/light/light-components/light-writer/light-writer-text/light-writer-text.component.html"*/,
        }),
        __metadata("design:paramtypes", [])
    ], LightWriterTextComponent);
    return LightWriterTextComponent;
}(__WEBPACK_IMPORTED_MODULE_1__common_index__["a" /* LightWriterCommon */]));

//# sourceMappingURL=light-writer-text.component.js.map

/***/ }),
/* 386 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LightWriterTextareaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_index__ = __webpack_require__(17);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LightWriterTextareaComponent = /** @class */ (function (_super) {
    __extends(LightWriterTextareaComponent, _super);
    /**
     * 写入的组件信息
     * @memberof LightWriterTextareaComponent
     */
    function LightWriterTextareaComponent() {
        return _super.call(this) || this;
    }
    LightWriterTextareaComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
        //this.key = this.formRow.title;
        //this.value=this.rowInfo.value+"";
    };
    ///键盘向上事件
    LightWriterTextareaComponent.prototype.onblur = function (event) {
        var changeText = event.target.innerText;
        this.formRow.value = changeText;
    };
    LightWriterTextareaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            //moduleId: module.id,
            selector: 'light-writer-textarea',template:/*ion-inline-start:"/Users/clark/Documents/personal/appFrame/src/light/light-components/light-writer/light-writer-textarea/light-writer-textarea.component.html"*/'<ion-item>\n  <span class="input-label">{{key}}</span>\n  <div class="input-textarea" (blur)="onblur($event)" contenteditable="true" placeholder=\'输入内容\' [innerHTML]=\'formRow.value\'></div>\n</ion-item>\n'/*ion-inline-end:"/Users/clark/Documents/personal/appFrame/src/light/light-components/light-writer/light-writer-textarea/light-writer-textarea.component.html"*/,
        })
        ///文本多行的组件对象
        ,
        __metadata("design:paramtypes", [])
    ], LightWriterTextareaComponent);
    return LightWriterTextareaComponent;
}(__WEBPACK_IMPORTED_MODULE_1__common_index__["a" /* LightWriterCommon */]));

//# sourceMappingURL=light-writer-textarea.component.js.map

/***/ }),
/* 387 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LightWriterUserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_index__ = __webpack_require__(17);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LightWriterUserComponent = /** @class */ (function (_super) {
    __extends(LightWriterUserComponent, _super);
    function LightWriterUserComponent() {
        return _super.call(this) || this;
    }
    LightWriterUserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'light-writer-user',template:/*ion-inline-start:"/Users/clark/Documents/personal/appFrame/src/light/light-components/light-writer/light-writer-user/light-writer-user.component.html"*/'<div>\n</div>\n'/*ion-inline-end:"/Users/clark/Documents/personal/appFrame/src/light/light-components/light-writer/light-writer-user/light-writer-user.component.html"*/,
        }),
        __metadata("design:paramtypes", [])
    ], LightWriterUserComponent);
    return LightWriterUserComponent;
}(__WEBPACK_IMPORTED_MODULE_1__common_index__["a" /* LightWriterCommon */]));

//# sourceMappingURL=light-writer-user.component.js.map

/***/ }),
/* 388 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LightWriterGroupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__light_writer_config__ = __webpack_require__(210);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LightWriterGroupComponent = /** @class */ (function () {
    function LightWriterGroupComponent() {
        //展现的标识
        this.showFlag = true;
        //展现的状态信息
        this.showStatus = "";
        //头部的显示标识
        this.headFlag = true;
        //读取数据的信息
        this.writerData = {};
        //写入的配置信息
        this.writerConfig = null;
    }
    //内部初始化
    LightWriterGroupComponent.prototype.ngOnInit = function () {
        this.title = this.rowList.title;
        var actionList = this.rowList.activeData;
        if (!!actionList) {
            this.headFlag = actionList.headVisable;
            this.showFlag = actionList.displayVisable;
        }
        this.headFlag = this.writerConfig.headFlag;
        this._showStatusInit(this.showFlag);
    };
    //展现的鼠标事件
    LightWriterGroupComponent.prototype.showClick = function () {
        if (this.showFlag) {
            this.showFlag = false;
        }
        else {
            this.showFlag = true;
        }
        this._showStatusInit(this.showFlag);
    };
    //展现状态初始化
    LightWriterGroupComponent.prototype._showStatusInit = function (flag) {
        if (!flag) {
            this.showStatus = "点击展开";
        }
        else {
            this.showStatus = "点击折叠";
        }
    };
    LightWriterGroupComponent.prototype.showEvent = function () {
        if (this.showFlag) {
            this.showFlag = false;
        }
        else {
            this.showFlag = true;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], LightWriterGroupComponent.prototype, "rowList", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], LightWriterGroupComponent.prototype, "writerData", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__light_writer_config__["a" /* LightWriterConfig */])
    ], LightWriterGroupComponent.prototype, "writerConfig", void 0);
    LightWriterGroupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            //moduleId: module.id,
            selector: 'light-writer-group',template:/*ion-inline-start:"/Users/clark/Documents/personal/appFrame/src/light/light-components/light-writer/light-writer-group/light-writer-group.component.html"*/'<div *ngIf="headFlag">\n  <ion-list-header (click)=\'showClick()\' no-margin>\n    <h2 class="item-header">{{title}}</h2>\n    <ion-note item-end (click)="showEvent()">\n      <ion-icon *ngIf="showFlag" name="ios-arrow-dropup-outline" item-right></ion-icon>\n      <ion-icon *ngIf="!showFlag" name="ios-arrow-dropdown-outline" item-right></ion-icon>\n    </ion-note>\n    <!-- <ion-note item-end>{{showStatus}}</ion-note> -->\n  </ion-list-header>\n</div>\n<div *ngIf="showFlag">\n  <div *ngFor="let row of rowList.childData">\n    <light-writer-div *ngIf="row.isNode==false" [formRow]=\'row\'></light-writer-div>\n    <light-writer-table *ngIf="row.isNode==true" [rowList]=\'row\' [writerData]="writerData"></light-writer-table>\n  </div>\n</div>\n'/*ion-inline-end:"/Users/clark/Documents/personal/appFrame/src/light/light-components/light-writer/light-writer-group/light-writer-group.component.html"*/,
        })
    ], LightWriterGroupComponent);
    return LightWriterGroupComponent;
}());

//# sourceMappingURL=light-writer-group.component.js.map

/***/ }),
/* 389 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LightWriterDivComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_index__ = __webpack_require__(17);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LightWriterDivComponent = /** @class */ (function (_super) {
    __extends(LightWriterDivComponent, _super);
    /**
     * Creates an instance of LightWriterDivComponent.
     * @memberof LightWriterDivComponent
     */
    function LightWriterDivComponent() {
        return _super.call(this) || this;
    }
    /**
     *
     * 内部初始化
     * @memberof LightReadDivComponent
     */
    LightWriterDivComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
    };
    LightWriterDivComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            //moduleId: module.id,
            selector: 'light-writer-div',template:/*ion-inline-start:"/Users/clark/Documents/personal/appFrame/src/light/light-components/light-writer/light-writer-div/light-writer-div.component.html"*/'<div [ngSwitch]=\'rowType\'>\n  <light-writer-text *ngSwitchCase="\'txt\'" [formRow]=\'formRow\'></light-writer-text>\n  <light-writer-textarea *ngSwitchCase="\'textarea\'" [formRow]=\'formRow\'></light-writer-textarea>\n  <light-writer-text *ngSwitchCase="\'text\'" [formRow]=\'formRow\'></light-writer-text>\n  <light-writer-image *ngSwitchCase="\'image\'" [formRow]=\'formRow\'></light-writer-image>\n  <light-writer-data *ngSwitchCase="\'radio\'" [formRow]=\'formRow\'></light-writer-data>\n  <light-writer-data *ngSwitchCase="\'select\'" [formRow]=\'formRow\'></light-writer-data>\n  <light-writer-data *ngSwitchCase="\'multiselect\'" [formRow]=\'formRow\'></light-writer-data>\n  <light-writer-data *ngSwitchCase="\'checkbox\'" [formRow]=\'formRow\'></light-writer-data>\n  <light-writer-date *ngSwitchCase="\'dateyymmdd\'" [formRow]=\'formRow\'></light-writer-date>\n  <light-writer-date *ngSwitchCase="\'datetime\'" [formRow]=\'formRow\'></light-writer-date>\n  <light-writer-date *ngSwitchCase="\'dateyymm\'" [formRow]=\'formRow\'></light-writer-date>\n</div>\n'/*ion-inline-end:"/Users/clark/Documents/personal/appFrame/src/light/light-components/light-writer/light-writer-div/light-writer-div.component.html"*/,
        }),
        __metadata("design:paramtypes", [])
    ], LightWriterDivComponent);
    return LightWriterDivComponent;
}(__WEBPACK_IMPORTED_MODULE_1__common_index__["a" /* LightWriterCommon */]));

//# sourceMappingURL=light-writer-div.component.js.map

/***/ }),
/* 390 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LightWriterImageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_index__ = __webpack_require__(17);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var LightWriterImageComponent = /** @class */ (function (_super) {
    __extends(LightWriterImageComponent, _super);
    function LightWriterImageComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     *
     * 内部初始化
     * @memberof LightReadDivComponent
     */
    LightWriterImageComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
    };
    LightWriterImageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            //moduleId: module.id,
            selector: 'light-writer-image',template:/*ion-inline-start:"/Users/clark/Documents/personal/appFrame/src/light/light-components/light-writer/light-writer-image/light-writer-image.component.html"*/'<!--component html goes here -->\n'/*ion-inline-end:"/Users/clark/Documents/personal/appFrame/src/light/light-components/light-writer/light-writer-image/light-writer-image.component.html"*/,
        })
    ], LightWriterImageComponent);
    return LightWriterImageComponent;
}(__WEBPACK_IMPORTED_MODULE_1__common_index__["a" /* LightWriterCommon */]));

//# sourceMappingURL=light-writer-image.component.js.map

/***/ }),
/* 391 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LightWriterTableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__light_common_index__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__light_util_light_util_module__ = __webpack_require__(7);
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




var LightWriterTableComponent = /** @class */ (function () {
    /**
     * 写入表格组件信息
     *
     * @memberof LightWriterTableComponent
     */
    function LightWriterTableComponent(lightProviders) {
        this.lightProviders = lightProviders;
        //读取数据的信息
        this.writerData = [];
        /**
         * 标题的名称
         *
         * @type {String}
         * @memberof LightWriterTableComponent
         */
        this.title = null;
        /**
         * 表格行列表
         * @type {Array<any>}
         * @memberof LightWriterTableComponent
         */
        this.tableRowList = null;
    }
    //内部初始化
    LightWriterTableComponent.prototype.ngOnInit = function () {
        this.tableRowList = this._getRowList();
        this.title = this.rowList.title;
    };
    /**
     *
     * 得到行的列表新
     * @private
     * @returns {Array<any>}
     * @memberof LightWriterTableComponent
     */
    LightWriterTableComponent.prototype._getRowList = function () {
        var result = [];
        var rowInfoList = this.rowList.childData;
        var groupList = null;
        for (var i = 0; i < rowInfoList.length; i++) {
            var rowInfo = rowInfoList[i];
            if (rowInfo.type == "rowbegin") {
                groupList = [];
                result.push(groupList);
            }
            groupList.push(rowInfo);
        }
        return result;
    };
    /**
     * 删除行
     *
     * @private
     * @memberof LightWriterTableComponent
     */
    LightWriterTableComponent.prototype.deleteRow = function (objectList) {
        var _this = this;
        if (objectList != null) {
            if (this.tableRowList.length > 1) {
                objectList.forEach(function (element) {
                    __WEBPACK_IMPORTED_MODULE_2__light_util_light_util_module__["a" /* LightArrayUtil */].remove(_this.writerData, element.dataObject);
                });
                __WEBPACK_IMPORTED_MODULE_2__light_util_light_util_module__["a" /* LightArrayUtil */].remove(this.tableRowList, objectList);
            }
            else {
                this.lightProviders.popMessage("只有一行不能删除");
            }
        }
    };
    /**
     * 增加行对象信息
     * @memberof LightWriterTableComponent
     */
    LightWriterTableComponent.prototype.addRow = function () {
        var fristRow = this.tableRowList[0];
        var jsonText = __WEBPACK_IMPORTED_MODULE_2__light_util_light_util_module__["d" /* LightJsonUtil */].toJson(fristRow);
        var objectList = __WEBPACK_IMPORTED_MODULE_2__light_util_light_util_module__["d" /* LightJsonUtil */].toObject(jsonText);
        var dataList = [];
        objectList.forEach(function (element) {
            var formNode = new __WEBPACK_IMPORTED_MODULE_1__light_common_index__["c" /* FormNode */](element.dataObject);
            formNode.value = "";
            dataList.push(formNode);
        });
        this._addDataLast(dataList);
        this.tableRowList.push(dataList);
    };
    /**
     * 增加数据的最后一列
     *
     * @private
     * @param {IFormRow[]} objectList
     * @memberof LightWriterTableComponent
     */
    LightWriterTableComponent.prototype._addDataLast = function (objectList) {
        var lastRow = this.tableRowList[this.tableRowList.length - 1];
        var lastRowInfo = lastRow[lastRow.length - 1];
        var index = __WEBPACK_IMPORTED_MODULE_2__light_util_light_util_module__["a" /* LightArrayUtil */].getIndexOf(this.writerData, lastRowInfo.dataObject);
        for (var i = 0; i < objectList.length; i++) {
            this.writerData.splice(index + 1 + i, 0, objectList[i].dataObject);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], LightWriterTableComponent.prototype, "rowList", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Array)
    ], LightWriterTableComponent.prototype, "writerData", void 0);
    LightWriterTableComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            //moduleId: module.id,
            selector: 'light-writer-table',template:/*ion-inline-start:"/Users/clark/Documents/personal/appFrame/src/light/light-components/light-writer/light-writer-table/light-writer-table.component.html"*/'<div>\n  <ion-list-header no-margin>\n    <h2 class="item-header">{{title}}</h2>\n  </ion-list-header>\n</div>\n<div>\n  <div *ngFor="let rowList of tableRowList">\n    <light-writer-row [rowList]="rowList" (deleteClick)="deleteRow(rowList)"></light-writer-row>\n  </div>\n  <a ion-button color="primary" full class="task-button" (click)="addRow()">\n    <ion-icon name="add"></ion-icon>新增行</a>\n</div>\n'/*ion-inline-end:"/Users/clark/Documents/personal/appFrame/src/light/light-components/light-writer/light-writer-table/light-writer-table.component.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__light_providers_light_providers_module__["d" /* LightProviders */]])
    ], LightWriterTableComponent);
    return LightWriterTableComponent;
}());

//# sourceMappingURL=light-writer-table.component.js.map

/***/ }),
/* 392 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LightWriterRowComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__light_providers_light_providers_module__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LightWriterRowComponent = /** @class */ (function () {
    /**
     * 行的组件信息
     */
    function LightWriterRowComponent(lightProviders) {
        this.lightProviders = lightProviders;
        /**
         * 地图的单击事件
         * @type {EventEmitter<any>}
         * @memberof GeoComponent
         */
        this.deleteClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        //标题的名称
        this.title = null;
        this.showFlag = true;
    }
    /**
     * 删除事件信息
     *
     * @memberof LightWriterRowComponent
     */
    LightWriterRowComponent.prototype.deleteEvent = function () {
        var _this = this;
        this.lightProviders.lightPop.confirm("是否删除该列").then(function (value) {
            _this.deleteClick.emit(_this.rowList);
        }).catch(function (errText) {
        });
    };
    /**
     * 内部初始化
     *
     * @memberof LightWriterRowComponent
     */
    LightWriterRowComponent.prototype.ngOnInit = function () {
        if (this.rowList.length > 1) {
            this.title = this.rowList[0].title;
        }
    };
    LightWriterRowComponent.prototype.showEvent = function () {
        if (this.showFlag) {
            this.showFlag = false;
        }
        else {
            this.showFlag = true;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Array)
    ], LightWriterRowComponent.prototype, "rowList", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], LightWriterRowComponent.prototype, "deleteClick", void 0);
    LightWriterRowComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            //moduleId: module.id,
            selector: 'light-writer-row',template:/*ion-inline-start:"/Users/clark/Documents/personal/appFrame/src/light/light-components/light-writer/light-writer-row/light-writer-row.component.html"*/'<ion-item>{{title}}\n  <ion-icon *ngIf="showFlag" name="ios-arrow-dropup-outline" item-right (click)="showEvent()"></ion-icon>\n  <ion-icon *ngIf="!showFlag" name="ios-arrow-dropdown-outline" item-right (click)="showEvent()"></ion-icon>\n  <ion-icon name="ios-trash-outline" item-right (click)="deleteEvent()"></ion-icon>\n</ion-item>\n<div *ngIf="showFlag">\n  <div *ngFor="let row of rowList">\n    <light-writer-div *ngIf="row.isNode==false" [formRow]=\'row\'></light-writer-div>\n  </div>\n</div>\n'/*ion-inline-end:"/Users/clark/Documents/personal/appFrame/src/light/light-components/light-writer/light-writer-row/light-writer-row.component.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__light_providers_light_providers_module__["d" /* LightProviders */]])
    ], LightWriterRowComponent);
    return LightWriterRowComponent;
}());

//# sourceMappingURL=light-writer-row.component.js.map

/***/ }),
/* 393 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LightReadDivComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LightReadDivComponent = /** @class */ (function () {
    function LightReadDivComponent() {
        //表单的行对象
        this.formRow = null;
        //行的类型
        this.rowType = "";
    }
    /**
     *
     * 内部初始化
     * @memberof LightReadDivComponent
     */
    LightReadDivComponent.prototype.ngOnInit = function () {
        this.rowType = this.formRow.type;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], LightReadDivComponent.prototype, "formRow", void 0);
    LightReadDivComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'light-read-div',template:/*ion-inline-start:"/Users/clark/Documents/personal/appFrame/src/light/light-components/light-read/light-read-div/light-read-div.component.html"*/'<div [ngSwitch]=\'rowType\'>\n  <light-read-text *ngSwitchCase="\'label\'" [formRow]=\'formRow\'></light-read-text>\n  <light-read-image *ngSwitchCase="\'image\'" [formRow]=\'formRow\'></light-read-image>\n</div>\n'/*ion-inline-end:"/Users/clark/Documents/personal/appFrame/src/light/light-components/light-read/light-read-div/light-read-div.component.html"*/,
        })
    ], LightReadDivComponent);
    return LightReadDivComponent;
}());

//# sourceMappingURL=light-read-div.component.js.map

/***/ }),
/* 394 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LightReadGroupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LightReadGroupComponent = /** @class */ (function () {
    function LightReadGroupComponent() {
        //展现的标识
        this.showFlag = true;
        //展现的状态信息
        this.showStatus = "";
        //头部的显示标识
        this.headFlag = true;
    }
    //内部初始化
    LightReadGroupComponent.prototype.ngOnInit = function () {
        this.title = this.rowList.title;
        var actionList = this.rowList.activeData;
        if (!!actionList) {
            this.headFlag = actionList.headVisable;
            this.showFlag = actionList.displayVisable;
        }
        this._showStatusInit(this.showFlag);
    };
    //展现的鼠标事件
    LightReadGroupComponent.prototype.showClick = function () {
        if (this.showFlag) {
            this.showFlag = false;
        }
        else {
            this.showFlag = true;
        }
        this._showStatusInit(this.showFlag);
    };
    ///展现状态初始化
    LightReadGroupComponent.prototype._showStatusInit = function (flag) {
        if (!flag) {
            this.showStatus = "点击展开";
        }
        else {
            this.showStatus = "点击折叠";
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], LightReadGroupComponent.prototype, "rowList", void 0);
    LightReadGroupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'light-read-group',template:/*ion-inline-start:"/Users/clark/Documents/personal/appFrame/src/light/light-components/light-read/light-read-group/light-read-group.component.html"*/'<div *ngIf="headFlag">\n  <ion-list-header (click)=\'showClick()\' no-margin>\n    <h2 class="item-header">{{title}}</h2>\n    <ion-note item-end>{{showStatus}}</ion-note>\n  </ion-list-header>\n</div>\n<div *ngIf="showFlag">\n  <div *ngFor="let row of rowList.childData">\n    <light-read-div *ngIf="row.isNode==false" [formRow]=\'row\'></light-read-div>\n    <light-read-table *ngIf="row.isNode==true" [rowList]=\'row\'></light-read-table>\n  </div>\n</div>\n'/*ion-inline-end:"/Users/clark/Documents/personal/appFrame/src/light/light-components/light-read/light-read-group/light-read-group.component.html"*/,
        })
        //
    ], LightReadGroupComponent);
    return LightReadGroupComponent;
}());

//# sourceMappingURL=light-read-group.component.js.map

/***/ }),
/* 395 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LightReadTextComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LightReadTextComponent = /** @class */ (function () {
    function LightReadTextComponent() {
        //表单的行对象
        this.formRow = null;
        //行的类型
        this.rowType = "";
        //标题信息
        this.title = "";
        //值信息
        this.value = "";
    }
    /**
     *
     * 内部初始化
     * @memberof LightReadDivComponent
     */
    LightReadTextComponent.prototype.ngOnInit = function () {
        this.rowType = this.formRow.detailType;
        if (!!!this.rowType) {
            this.rowType = "";
        }
        this.title = this.formRow.title;
        this.value = this.formRow.value;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], LightReadTextComponent.prototype, "formRow", void 0);
    LightReadTextComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'light-read-text',template:/*ion-inline-start:"/Users/clark/Documents/personal/appFrame/src/light/light-components/light-read/light-read-text/light-read-text.component.html"*/'<div [ngSwitch]=\'rowType\'>\n  <light-read-text-phone *ngSwitchCase="\'phonetext\'" [key]=\'title\' [value]=\'value\'></light-read-text-phone>\n  <light-read-text-normal *ngSwitchCase="\'\'" [key]=\'title\' [value]=\'value\'></light-read-text-normal>\n</div>\n'/*ion-inline-end:"/Users/clark/Documents/personal/appFrame/src/light/light-components/light-read/light-read-text/light-read-text.component.html"*/
            // styleUrls: ['light-read-text.component.scss']
        })
    ], LightReadTextComponent);
    return LightReadTextComponent;
}());

//# sourceMappingURL=light-read-text.component.js.map

/***/ }),
/* 396 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LightReadTextNormalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LightReadTextNormalComponent = /** @class */ (function () {
    function LightReadTextNormalComponent() {
        this.key = "";
        this.value = "";
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], LightReadTextNormalComponent.prototype, "key", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], LightReadTextNormalComponent.prototype, "value", void 0);
    LightReadTextNormalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'light-read-text-normal',template:/*ion-inline-start:"/Users/clark/Documents/personal/appFrame/src/light/light-components/light-read/light-read-text/light-read-text-normal/light-read-text-normal.component.html"*/'<ion-item text-wrap>\n  <ion-row>\n    <ion-col col-5>\n      <span class="input-label">{{key}}</span>\n    </ion-col>\n    <ion-col col-6>\n      <span class="input-value">{{value}}</span>\n    </ion-col>\n  </ion-row>\n</ion-item>\n'/*ion-inline-end:"/Users/clark/Documents/personal/appFrame/src/light/light-components/light-read/light-read-text/light-read-text-normal/light-read-text-normal.component.html"*/,
        })
    ], LightReadTextNormalComponent);
    return LightReadTextNormalComponent;
}());

//# sourceMappingURL=light-read-text-normal.component.js.map

/***/ }),
/* 397 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LightReadTextPhoneComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LightReadTextPhoneComponent = /** @class */ (function () {
    function LightReadTextPhoneComponent() {
        this.key = "";
        this.value = "";
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], LightReadTextPhoneComponent.prototype, "key", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], LightReadTextPhoneComponent.prototype, "value", void 0);
    LightReadTextPhoneComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'light-read-text-phone',template:/*ion-inline-start:"/Users/clark/Documents/personal/appFrame/src/light/light-components/light-read/light-read-text/light-read-text-phone/light-read-text-phone.component.html"*/'<ion-item>\n  <ion-row>\n    <ion-col col-5>\n      <span class="input-label">{{key}}</span>\n    </ion-col>\n    <ion-col col-6 text-wrap>\n      <span class="input-value">{{value}}</span>\n    </ion-col>\n    <ion-col col-1>\n      <ion-icon name="ios-call-outline" color="secondary" class="item-icon"></ion-icon>\n    </ion-col>\n  </ion-row>\n</ion-item>\n'/*ion-inline-end:"/Users/clark/Documents/personal/appFrame/src/light/light-components/light-read/light-read-text/light-read-text-phone/light-read-text-phone.component.html"*/,
        })
    ], LightReadTextPhoneComponent);
    return LightReadTextPhoneComponent;
}());

//# sourceMappingURL=light-read-text-phone.component.js.map

/***/ }),
/* 398 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LightReadImageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LightReadImageComponent = /** @class */ (function () {
    function LightReadImageComponent() {
        //表单的行对象
        this.formRow = null;
        //标题信息
        this.title = "";
        //值信息
        this.imageUrl = "";
    }
    /**
     *
     * 内部初始化
     * @memberof
     */
    LightReadImageComponent.prototype.ngOnInit = function () {
        this.title = this.formRow.title;
        this.imageUrl = this.formRow.value;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], LightReadImageComponent.prototype, "formRow", void 0);
    LightReadImageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'light-read-image',template:/*ion-inline-start:"/Users/clark/Documents/personal/appFrame/src/light/light-components/light-read/light-read-image/light-read-image.component.html"*/'<ion-item>\n  <span class="input-label">{{title}}</span>\n  <span class="input-image">\n    <img src="{{imageUrl}}" onerror="this.src=\'assets/img/mark-name.png\';this.onerror=null">\n  </span>\n</ion-item>\n'/*ion-inline-end:"/Users/clark/Documents/personal/appFrame/src/light/light-components/light-read/light-read-image/light-read-image.component.html"*/,
        })
    ], LightReadImageComponent);
    return LightReadImageComponent;
}());

//# sourceMappingURL=light-read-image.component.js.map

/***/ }),
/* 399 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LightReadRowComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LightReadRowComponent = /** @class */ (function () {
    function LightReadRowComponent() {
        this.showFlag = true;
        this.title = null;
    }
    LightReadRowComponent.prototype.showEvent = function () {
        if (this.showFlag) {
            this.showFlag = false;
        }
        else {
            this.showFlag = true;
        }
    };
    LightReadRowComponent.prototype.ngOnInit = function () {
        if (!!this.rowList && this.rowList.length > 1) {
            this.title = this.rowList[0].title;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Array)
    ], LightReadRowComponent.prototype, "rowList", void 0);
    LightReadRowComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            //moduleId: module.id,
            selector: 'light-read-row',template:/*ion-inline-start:"/Users/clark/Documents/personal/appFrame/src/light/light-components/light-read/light-read-row/light-read-row.component.html"*/'<ion-item>{{title}}\n  <ion-icon *ngIf="showFlag" name="ios-arrow-dropup-outline" item-right (click)="showEvent()"></ion-icon>\n  <ion-icon *ngIf="!showFlag" name="ios-arrow-dropdown-outline" item-right (click)="showEvent()"></ion-icon>\n  <!-- <ion-icon name="ios-trash-outline" item-right (click)="deleteEvent()"></ion-icon> -->\n</ion-item>\n<div *ngIf="showFlag">\n  <div *ngFor="let row of rowList">\n    <light-read-div *ngIf="row.isNode==false" [formRow]=\'row\'></light-read-div>\n  </div>\n</div>\n'/*ion-inline-end:"/Users/clark/Documents/personal/appFrame/src/light/light-components/light-read/light-read-row/light-read-row.component.html"*/,
        })
    ], LightReadRowComponent);
    return LightReadRowComponent;
}());

//# sourceMappingURL=light-read-row.component.js.map

/***/ }),
/* 400 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LightReadTableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LightReadTableComponent = /** @class */ (function () {
    function LightReadTableComponent() {
        /**
         * 表格行列表
         * @type {Array<any>}
         * @memberof LightWriterTableComponent
         */
        this.tableRowList = null;
        /**
         * 标题的名称
         *
         * @type {String}
         * @memberof LightWriterTableComponent
         */
        this.title = null;
    }
    LightReadTableComponent.prototype.ngOnInit = function () {
        this.title = this.rowList.title;
        this.tableRowList = this._getRowList();
    };
    /**
    *
    * 得到行的列表新
    * @private
    * @returns {Array<any>}
    * @memberof LightWriterTableComponent
    */
    LightReadTableComponent.prototype._getRowList = function () {
        var result = [];
        var rowInfoList = this.rowList.childData;
        var groupList = null;
        for (var i = 0; i < rowInfoList.length; i++) {
            var rowInfo = rowInfoList[i];
            if (rowInfo.type == "rowbegin") {
                groupList = [];
                result.push(groupList);
            }
            groupList.push(rowInfo);
        }
        return result;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], LightReadTableComponent.prototype, "rowList", void 0);
    LightReadTableComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            //moduleId: module.id,
            selector: 'light-read-table',template:/*ion-inline-start:"/Users/clark/Documents/personal/appFrame/src/light/light-components/light-read/light-read-table/light-read-table.component.html"*/'<div>\n  <ion-list-header no-margin>\n    <h2 class="item-header">{{title}}</h2>\n  </ion-list-header>\n</div>\n<div>\n  <div *ngFor="let rowList of tableRowList">\n    <light-read-row [rowList]="rowList"></light-read-row>\n  </div>\n</div>\n'/*ion-inline-end:"/Users/clark/Documents/personal/appFrame/src/light/light-components/light-read/light-read-table/light-read-table.component.html"*/,
        }),
        __metadata("design:paramtypes", [])
    ], LightReadTableComponent);
    return LightReadTableComponent;
}());

//# sourceMappingURL=light-read-table.component.js.map

/***/ }),
/* 401 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LightApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__light_util_light_util_module__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__light_nation_light_nation_module__ = __webpack_require__(54);


/**
 * 用户的登录操作
 *
 * @export
 * @class LightLogin
 */
var LightApp = /** @class */ (function () {
    /**
     * 登录的模块操作
     * @param {NavController} navCtrl
     * @param {LightProviders} lightProviders
     * @memberof LightLogin
     */
    function LightApp(navCtrl, lightProviders) {
        this.navCtrl = navCtrl;
        this.lightProviders = lightProviders;
        //版本是否升级红色标记
        this.updateFlag = false;
        //版本号
        this.appVersion = "0.0.2";
        ///更新的Url链接
        this.upgradeURL = "";
    }
    /**
     * 自动登录的判断
     */
    LightApp.prototype.autoLoginCheck = function () {
        return this.lightProviders.lightUser.autoLoginCheck();
    };
    /**
     * 登录到页面操作
     *
     * @param {string} userName  用户名称
     * @param {string} userPassword 用户密码
     * @param {*} page 页面操作
     * @memberof LightLogin
     */
    LightApp.prototype.loginToPage = function (userName, userPassword, page) {
        var _this = this;
        if (!!userName && !!userPassword) {
            this.lightProviders.lightUser.userLogin(userName, userPassword).then(function (value) {
                if (!!page) {
                    _this.lightProviders.lightNav.setRootPage(page);
                    _this.lightProviders.lightNav.push(_this.navCtrl, page);
                }
            }).catch(function (errText) {
                if (__WEBPACK_IMPORTED_MODULE_0__light_util_light_util_module__["e" /* LightStringUtil */].contain(errText, "网络服务")) {
                    _this.lightProviders.lightPop.message(errText);
                }
                else {
                    _this.lightProviders.lightPop.message("账户与密码不匹配");
                }
            });
        }
        else {
            this.lightProviders.lightPop.message("账户与密码不能为空");
        }
    };
    /**
     * 更新文件的APP对象
     * @param {LightAppVersion} lightAppVersion
     * @param {LightFileTransfer} lightFileTransfer
     * @param {LightFileOpen} lightFileOpen
     * @memberof LightApp
     */
    LightApp.prototype.UpdataAppInfo = function (lightAppVersion) {
        //获取当前版本号
        var that = this;
        lightAppVersion.getVersionNumber().then(function (versionData) {
            that.appVersion = versionData;
            console.log("当前版本号 " + versionData);
            that.lightProviders.lightHttp.get("Upgrade/UpgradeApp", { version: that.appVersion }).then(function (value) {
                var data = __WEBPACK_IMPORTED_MODULE_0__light_util_light_util_module__["d" /* LightJsonUtil */].toObject(value);
                if (!!data.VersionNumber) {
                    if (that.appVersion == data.VersionNumber) {
                        //that.lightProviders.lightPop.errMessage("已经是最新版本");
                    }
                    else {
                        //that.appVersion = data;
                        that.updateFlag = true;
                        that.upgradeURL = data.UpgradeURL;
                    }
                }
                else {
                    that.lightProviders.lightPop.errMessage("获取版本号不存在");
                }
            });
        });
    };
    /**
     * 更新的APP信息
     * @param {LightFileTransfer} lightFileTransfer
     * @param {LightFileOpen} lightFileOpen
     * @memberof LightApp
     */
    LightApp.prototype.UpdataApp = function (lightFileTransfer, lightFileOpen, listener) {
        var _this = this;
        if (listener === void 0) { listener = null; }
        if (this.updateFlag) {
            var alert_1 = this.lightProviders.lightPop.alertCtrl.create({
                title: '版本更新',
                message: '检查到最新版本，是否进行更新',
                buttons: [{
                        text: '否',
                        role: 'cancel',
                        handler: function () {
                            //console.log('不进行更新');
                        }
                    }, {
                        text: '是',
                        handler: function () {
                            //console.log('进行更新');
                            _this._downUpdataApp(_this.upgradeURL, lightFileTransfer, lightFileOpen, listener);
                        }
                    }]
            });
            alert_1.present();
        }
    };
    //下载更新文件
    LightApp.prototype._downUpdataApp = function (downUrl, lightFileTransfer, lightFileOpen, listener) {
        var _this = this;
        if (listener === void 0) { listener = null; }
        if (!!this.updateFlag && !!downUrl) {
            var appFileName = "LightOA_" + this.appVersion + ".apk";
            //下载新app 
            lightFileTransfer.download(downUrl, appFileName, __WEBPACK_IMPORTED_MODULE_1__light_nation_light_nation_module__["d" /* LightFileType */].RootFile, listener).then(function (value) {
                //console.log("下载成功");
                lightFileOpen.openFile(value).then(function (data) {
                    console.log('打开apk包成功！');
                })
                    .catch(function (err) {
                    _this.lightProviders.popMessage("打开apk包失败！" + err);
                    //console.log('打开apk包失败！')
                });
            }).catch(function (errText) {
                _this.lightProviders.popMessage("下载失败!" + errText);
            });
        }
    };
    /**
     * 用户退出
     */
    LightApp.prototype.exitApp = function () {
        this.lightProviders.lightExit.appExit();
    };
    /**
     * 退出登录
     */
    LightApp.prototype.logoutPage = function (page) {
        var _this = this;
        console.log(page);
        this.lightProviders.lightPop.confirm("是否退出").then(function (resultText) {
            console.log(resultText);
            _this.lightProviders.lightUser.userExit();
            _this.navCtrl.push(page);
        }).catch(function (errText) {
            console.log(errText);
        });
    };
    return LightApp;
}());

//# sourceMappingURL=lightApp.js.map

/***/ }),
/* 402 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LightAttachComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__light_providers_light_providers_module__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__light_util_light_util_module__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__light_nation_light_nation_module__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LightAttachComponent = /** @class */ (function () {
    /**
     * 附件的操作
     * @memberof LightAttachComponent
     */
    function LightAttachComponent(navCtrl, navParams, alertCtrl, lightHttp, lightPop, lightFileOpen, lightFileTransfer, lightFile) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.lightHttp = lightHttp;
        this.lightPop = lightPop;
        this.lightFileOpen = lightFileOpen;
        this.lightFileTransfer = lightFileTransfer;
        this.lightFile = lightFile;
        /**
         * 附件列表
         * @type {Array<any>}
         * @memberof LightAttachComponent
         */
        this.attachList = null;
        /**
         * 设置的对应的编码ID
         * @type {string}
         * @memberof LightAttachComponent
         */
        this.code = null;
    }
    /**
     *
     * 内部初始化
     */
    LightAttachComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!!this.code) {
            //附件
            this.lightHttp.get("Attachment/GetAttachments", { objectID: this.code }).then(function (data) {
                _this.attachList = __WEBPACK_IMPORTED_MODULE_3__light_util_light_util_module__["d" /* LightJsonUtil */].toObject(data);
                var _loop_1 = function (i) {
                    _this.attachList[i].Status = '下载';
                    _this.lightFile.checkFile(_this.attachList[i].Name).then(function (data) {
                        console.log(data);
                        _this.attachList[i].Status = data == true ? '打开' : '下载';
                    }).catch(function (err) {
                        console.log(err);
                    });
                };
                for (var i = 0; i < _this.attachList.length; i++) {
                    _loop_1(i);
                }
            }).catch(function (errText) {
                console.log(errText);
            });
        }
    };
    /**
     * 下载的操作
     *
     * @param {any} item
     * @param {any} indx
     * @memberof LightAttachComponent
     */
    LightAttachComponent.prototype.downloadFile = function (item, indx) {
        var _this = this;
        if (this.attachList[indx].Status == "打开") {
            var path = ('file:///storage/emulated/0/1_lightFile/' + item.Name);
            this.lightFileOpen.openFile(path)
                .then(function (data) {
                console.log('打开成功');
            })
                .catch(function (err) {
                _this.lightPop.errMessage(err.message);
            });
        }
        else {
            var url = item.Path;
            this.attachList[indx].Status = "下载中...";
            this.lightFileTransfer.download(url, item.Name)
                .then(function (data) {
                var alertSuccess = _this.alertCtrl.create({
                    title: "\u4E0B\u8F7D\u6210\u529F",
                    subTitle: item.Name + " \u4E0B\u8F7D\u5230\u4EE5\u4E0B\u8DEF\u5F84\uFF1A" + data,
                    buttons: [
                        {
                            text: '确定',
                            role: 'ok',
                            handler: function () {
                                console.log("ok clicked");
                            }
                        },
                        {
                            text: '打开',
                            handler: function () {
                                _this.lightFileOpen.openFile('file:///storage/emulated/0/1_lightFile/' + item.Name)
                                    .then(function (data) {
                                    console.log('open', data);
                                })
                                    .catch(function (err) {
                                    _this.lightPop.errMessage(err.message);
                                    console.log(err);
                                });
                            }
                        }
                    ]
                });
                alertSuccess.present();
                _this.attachList[indx].Status = "打开";
            })
                .catch(function (errText) {
                _this.attachList[indx].Status = "重新下载";
                console.log("下载失败" + errText);
            });
        }
    };
    /**
    * 判断文件类型，显示对应图片
    *
    * @param {any} input
    * @returns {*}
    * @memberof NewDetailPage
    */
    LightAttachComponent.prototype.fileTypeImage = function (input) {
        var out = "";
        if (__WEBPACK_IMPORTED_MODULE_3__light_util_light_util_module__["e" /* LightStringUtil */].contain(input, "jpg") || __WEBPACK_IMPORTED_MODULE_3__light_util_light_util_module__["e" /* LightStringUtil */].contain(input, "png") || __WEBPACK_IMPORTED_MODULE_3__light_util_light_util_module__["e" /* LightStringUtil */].contain(input, "gif")) {
            out = "jpg";
        }
        else if (__WEBPACK_IMPORTED_MODULE_3__light_util_light_util_module__["e" /* LightStringUtil */].contain(input, "ppt") || __WEBPACK_IMPORTED_MODULE_3__light_util_light_util_module__["e" /* LightStringUtil */].contain(input, "pptx")) {
            out = "ppt";
        }
        else if (__WEBPACK_IMPORTED_MODULE_3__light_util_light_util_module__["e" /* LightStringUtil */].contain(input, "txt")) {
            out = "txt";
        }
        else if (__WEBPACK_IMPORTED_MODULE_3__light_util_light_util_module__["e" /* LightStringUtil */].contain(input, "doc") || __WEBPACK_IMPORTED_MODULE_3__light_util_light_util_module__["e" /* LightStringUtil */].contain(input, "docx") || __WEBPACK_IMPORTED_MODULE_3__light_util_light_util_module__["e" /* LightStringUtil */].contain(input, "wps")) {
            out = "word";
        }
        else if (__WEBPACK_IMPORTED_MODULE_3__light_util_light_util_module__["e" /* LightStringUtil */].contain(input, "xls") || __WEBPACK_IMPORTED_MODULE_3__light_util_light_util_module__["e" /* LightStringUtil */].contain(input, "xlsx")) {
            out = "xls";
        }
        else if (__WEBPACK_IMPORTED_MODULE_3__light_util_light_util_module__["e" /* LightStringUtil */].contain(input, "zip") || __WEBPACK_IMPORTED_MODULE_3__light_util_light_util_module__["e" /* LightStringUtil */].contain(input, "7z")) {
            out = "zip";
        }
        else if (__WEBPACK_IMPORTED_MODULE_3__light_util_light_util_module__["e" /* LightStringUtil */].contain(input, "pdf")) {
            out = "pdf";
        }
        else {
            out = "unknown";
        }
        out = "assets/img/attach/" + out + "_128.png";
        return out;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], LightAttachComponent.prototype, "code", void 0);
    LightAttachComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'light-attach',template:/*ion-inline-start:"/Users/clark/Documents/personal/appFrame/src/light/light-components/light-attach/light-attach.component.html"*/'<!--附件-->\n<div class="new-attach">\n  <ion-item *ngFor="let item of attachList;let indx =index">\n    <img item-start src="{{fileTypeImage(item.Name)}}">\n    <h2>{{item.Name}}</h2>\n    <p>{{item.FilesLength}}</p>\n    <button ion-button clear item-end (click)="downloadFile(item,indx)">{{item.Status}}</button>\n  </ion-item>\n</div>\n'/*ion-inline-end:"/Users/clark/Documents/personal/appFrame/src/light/light-components/light-attach/light-attach.component.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__light_providers_light_providers_module__["a" /* LightHttp */],
            __WEBPACK_IMPORTED_MODULE_2__light_providers_light_providers_module__["c" /* LightPop */],
            __WEBPACK_IMPORTED_MODULE_4__light_nation_light_nation_module__["b" /* LightFileOpen */],
            __WEBPACK_IMPORTED_MODULE_4__light_nation_light_nation_module__["c" /* LightFileTransfer */],
            __WEBPACK_IMPORTED_MODULE_4__light_nation_light_nation_module__["a" /* LightFile */]])
    ], LightAttachComponent);
    return LightAttachComponent;
}());

//# sourceMappingURL=light-attach.component.js.map

/***/ }),
/* 403 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__light_contact_component__ = __webpack_require__(211);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_0__light_contact_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__light_member_detail_component__ = __webpack_require__(100);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_1__light_member_detail_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__member_image_member_image_component__ = __webpack_require__(404);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_2__member_image_member_image_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__contact_menu_contact_menu_component__ = __webpack_require__(405);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_3__contact_menu_contact_menu_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__contact_content_contact_content_component__ = __webpack_require__(406);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_4__contact_content_contact_content_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__contact_contact_component__ = __webpack_require__(407);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_5__contact_contact_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common_UserObject__ = __webpack_require__(226);
/* unused harmony namespace reexport */







//# sourceMappingURL=index.js.map

/***/ }),
/* 404 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MemberImageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__light_providers_light_providers_module__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MemberImageComponent = /** @class */ (function () {
    ///图片的服务对象
    function MemberImageComponent(lightMemberImage) {
        this.lightMemberImage = lightMemberImage;
        ///样式对象
        this.styleObject = {};
    }
    //视图的初始化
    MemberImageComponent.prototype.ngOnInit = function () {
        if (!!this.detailName) {
            this.imageName = this._getImageName(this.detailName);
            this.styleObject = { 'background-color': this.lightMemberImage.getRandomColor(this.detailName) };
        }
    };
    /**
     * 获取图片的名称
     *
     * @private
     * @param {string} 用户的名称
     * @returns {string}
     *
     * @memberof MemberImage
     */
    MemberImageComponent.prototype._getImageName = function (userName) {
        var result = "";
        if (!!userName) {
            if (userName.length >= 3) {
                result = userName.substr(userName.length - 2, 2);
            }
            else {
                result = userName;
            }
        }
        return result;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], MemberImageComponent.prototype, "detailName", void 0);
    MemberImageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            //moduleId: module.id,
            selector: 'member-image',template:/*ion-inline-start:"/Users/clark/Documents/personal/appFrame/src/light/light-components/light-contact/member-image/member-image.component.html"*/'<div class="memberphoto" [ngStyle]=\'styleObject\'>\n  {{imageName}}\n</div>\n'/*ion-inline-end:"/Users/clark/Documents/personal/appFrame/src/light/light-components/light-contact/member-image/member-image.component.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__light_providers_light_providers_module__["b" /* LightMemberImage */]])
    ], MemberImageComponent);
    return MemberImageComponent;
}());

//# sourceMappingURL=member-image.component.js.map

/***/ }),
/* 405 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactMenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactMenuComponent = /** @class */ (function () {
    function ContactMenuComponent() {
        //选择事件信息
        this.selectEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
    }
    //内部初始化
    ContactMenuComponent.prototype.ngOnInit = function () {
    };
    //跳转到选择的组织机构事件
    ContactMenuComponent.prototype.goSelect = function (organzieObject) {
        this.selectEvent.emit(organzieObject);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Array)
    ], ContactMenuComponent.prototype, "organizeList", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", Object)
    ], ContactMenuComponent.prototype, "selectEvent", void 0);
    ContactMenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            //moduleId: module.id,
            selector: 'contact-menu',template:/*ion-inline-start:"/Users/clark/Documents/personal/appFrame/src/light/light-components/light-contact/contact-menu/contact-menu.component.html"*/'<div class="contactMenu">\n  <span *ngFor="let organize of organizeList">\n    <a (click)="goSelect(organize)">{{organize.Name}}</a>\n    <ion-icon name="ios-arrow-forward-outline" color="gray"></ion-icon>\n  </span>\n</div>\n'/*ion-inline-end:"/Users/clark/Documents/personal/appFrame/src/light/light-components/light-contact/contact-menu/contact-menu.component.html"*/,
        })
    ], ContactMenuComponent);
    return ContactMenuComponent;
}());

//# sourceMappingURL=contact-menu.component.js.map

/***/ }),
/* 406 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactContentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactContentComponent = /** @class */ (function () {
    ///构造函数初始化
    function ContactContentComponent() {
        ///子组织机构的列表
        this.childOrganizeList = [];
        ///子用户的列表
        this.childUserList = [];
        ///选择事件信息
        this.selectOrganizeEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        ///选择事件信息
        this.selectUserEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
    }
    ContactContentComponent.prototype.ngOnInit = function () {
    };
    /**
     * 选择组织机构信息
     * @param {OrganizeObject} 组织机构内容
     * @memberof ContactContent
     */
    ContactContentComponent.prototype.selectOrganize = function (organzieObject) {
        this.selectOrganizeEvent.emit(organzieObject);
    };
    /**
     * 选择组织机构信息
     * @param {organzieObject} 组织机构用户
     * @memberof ContactContent
     */
    ContactContentComponent.prototype.selectUser = function (organzieObject) {
        this.selectUserEvent.emit(organzieObject);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Array)
    ], ContactContentComponent.prototype, "childOrganizeList", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Array)
    ], ContactContentComponent.prototype, "childUserList", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", Object)
    ], ContactContentComponent.prototype, "selectOrganizeEvent", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", Object)
    ], ContactContentComponent.prototype, "selectUserEvent", void 0);
    ContactContentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            //moduleId: module.id,
            selector: 'contact-content',template:/*ion-inline-start:"/Users/clark/Documents/personal/appFrame/src/light/light-components/light-contact/contact-content/contact-content.component.html"*/'<div>\n  <ion-item *ngFor="let item of childOrganizeList" (click)=\'selectOrganize(item)\'>\n    {{ item.Name }}\n    <ion-icon name="ios-arrow-forward-outline" color="gray" item-right></ion-icon>\n  </ion-item>\n  <ion-item *ngFor="let item of childUserList" (click)=\'selectUser(item)\'>\n    <member-image [detailName]=\'item.Name\' item-start></member-image>\n    <h2>{{ item.Name }}</h2>\n    <p>{{ item.department }}</p>\n    <ion-icon name="ios-arrow-forward-outline" color="gray" item-right></ion-icon>\n  </ion-item>\n</div>\n'/*ion-inline-end:"/Users/clark/Documents/personal/appFrame/src/light/light-components/light-contact/contact-content/contact-content.component.html"*/,
        }),
        __metadata("design:paramtypes", [])
    ], ContactContentComponent);
    return ContactContentComponent;
}());

//# sourceMappingURL=contact-content.component.js.map

/***/ }),
/* 407 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_LightContactUtil__ = __webpack_require__(408);
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




var ContactComponent = /** @class */ (function () {
    function ContactComponent(navCtrl, navParams, lightHttp) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.lightHttp = lightHttp;
        //搜索的标识信息
        this.searchplaceholder = '搜索';
        this.searchText = "";
        //跟目录的组织机构节点
        this._rootOrganize = null;
        //选择的目录的机构信息
        this.selectOrganize = null;
        //上一级的组织列表
        this.preOrganzieList = [];
        //子一级的组织列表
        this.childOrganizeList = [];
        //子一级的组织列表
        this.childUserList = [];
        //contact的工具类
        this._lightContactUtil = null;
        //选择事件信息
        this.selectEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
    }
    //初始化的信息
    ContactComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._lightContactUtil = new __WEBPACK_IMPORTED_MODULE_2__common_LightContactUtil__["a" /* LightContactUtil */](this.lightHttp);
        this._lightContactUtil.getRootOrganizeObject('User/GetUserList').then(function (value) {
            _this._rootOrganize = value;
            _this._setSelectOrganzie(_this._rootOrganize);
        });
    };
    /**
     * 设置上一级的组织机构列表
     *
     * @private
     * @param {OrganizeObject} selectOrganize
     *
     * @memberof LightContact
     */
    ContactComponent.prototype._setSelectOrganzie = function (selectOrganize) {
        this.selectOrganize = selectOrganize;
        this.preOrganzieList = selectOrganize.getPreOrganizeList();
        this.childOrganizeList = selectOrganize.childOrganize;
        this.childUserList = selectOrganize.childUser;
    };
    /**
     * 选择组织机构的事件信息
     *
     * @param {OrganizeObject} selectOrganize
     *
     * @memberof LightContact
     */
    ContactComponent.prototype.selectOrganizeEvent = function (selectOrganize) {
        this._setSelectOrganzie(selectOrganize);
    };
    /**
     * 选择用户的事件信息
     * @param {UserObject} userObject
     *
     * @memberof LightContact
     */
    ContactComponent.prototype.selectUserEvent = function (userObject) {
        this.selectEvent.emit(userObject);
    };
    /**
     * 搜索的方法
     * @param {string} 搜索内容
     *
     * @memberof LightContact
     */
    ContactComponent.prototype.search = function (content) {
        if (!!this.searchText) {
            this.childOrganizeList = this._rootOrganize.getSearchOrganizeList(this.searchText);
            this.childUserList = this._rootOrganize.getSearchUserList(this.searchText);
            this.preOrganzieList = this._rootOrganize.getPreOrganizeList();
        }
        else {
            this._setSelectOrganzie(this._rootOrganize);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", Object)
    ], ContactComponent.prototype, "selectEvent", void 0);
    ContactComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'contact-all',template:/*ion-inline-start:"/Users/clark/Documents/personal/appFrame/src/light/light-components/light-contact/contact/contact.component.html"*/'<ion-searchbar [(ngModel)]=\'searchText\' [placeholder]=\'searchplaceholder\' (ionInput)="search($event)"></ion-searchbar>\n<ion-list>\n  <contact-menu [organizeList]=\'preOrganzieList\' (selectEvent)="selectOrganizeEvent($event)"></contact-menu>\n  <contact-content [childOrganizeList]=\'childOrganizeList\' [childUserList]=\'childUserList\' (selectUserEvent)="selectUserEvent($event)"\n    (selectOrganizeEvent)="selectOrganizeEvent($event)"></contact-content>\n</ion-list>\n'/*ion-inline-end:"/Users/clark/Documents/personal/appFrame/src/light/light-components/light-contact/contact/contact.component.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__light_providers_light_providers_module__["a" /* LightHttp */]])
    ], ContactComponent);
    return ContactComponent;
}());

//# sourceMappingURL=contact.component.js.map

/***/ }),
/* 408 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LightContactUtil; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__OrganizeObject__ = __webpack_require__(409);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__UserObject__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__light_util_light_util_module__ = __webpack_require__(7);



///通讯工具类
var LightContactUtil = /** @class */ (function () {
    function LightContactUtil(lightHttp) {
        /**
         * 根目录节点
         * @type {OrganizeObject}
         * @memberof LightContactService
         */
        this._rootOrganizeObject = null;
        this.lightHttp = null;
        this.lightHttp = lightHttp;
    }
    /**
     * 得到根目录节点
     * @param {string} 资源链接信息
     * @returns {OrganizeObject}
     *
     * @memberof LightContactService
     */
    LightContactUtil.prototype.getRootOrganizeObject = function (url, opts) {
        var result = null;
        if (!!url) {
            var that = this;
            result = new Promise(function (resolve, reject) {
                if (!!that._rootOrganizeObject) {
                    resolve(that._rootOrganizeObject);
                }
                else {
                    that.lightHttp.post(url, opts).then(function (value) {
                        value = __WEBPACK_IMPORTED_MODULE_2__light_util_light_util_module__["d" /* LightJsonUtil */].isJsonText(value) ? __WEBPACK_IMPORTED_MODULE_2__light_util_light_util_module__["d" /* LightJsonUtil */].toObject(value) : value;
                        that._rootOrganizeObject = that._getDataList(value);
                        resolve(that._rootOrganizeObject);
                    }).catch(function (errText) {
                        reject(errText);
                    });
                }
            });
        }
        return result;
    };
    /**
     * 得到数据的列表
     *
     * @private
     * @param {Array<object>} 表格数据列表
     * @returns {OrganizeObject}
     *
     * @memberof LightContactService
     */
    LightContactUtil.prototype._getDataList = function (formList) {
        var result = new __WEBPACK_IMPORTED_MODULE_0__OrganizeObject__["a" /* OrganizeObject */]();
        if (!!formList && formList.length > 0) {
            formList.forEach(function (element) {
                if (!!element) {
                    var type = element["Type"];
                    var id = element["ID"];
                    var pid = element["PID"];
                    if (!!type) {
                        if (type == "organize") {
                            var temp = result.getOrganizeObject(id);
                            if (!!!temp) {
                                result.childOrganize.push(new __WEBPACK_IMPORTED_MODULE_0__OrganizeObject__["a" /* OrganizeObject */](element, result));
                            }
                        }
                        else if (type == "user") {
                            var temp = result.getOrganizeObject(pid);
                            if (!!!temp) {
                                result.childUser.push(new __WEBPACK_IMPORTED_MODULE_1__UserObject__["a" /* UserObject */](element, result.Name, pid));
                            }
                            else {
                                temp.childUser.push(new __WEBPACK_IMPORTED_MODULE_1__UserObject__["a" /* UserObject */](element, temp.Name, pid));
                            }
                        }
                        else {
                        }
                    }
                }
            });
        }
        return result;
    };
    /**
     * 清空操作
     *
     * @memberof LightContactService
     */
    LightContactUtil.prototype.clear = function () {
        this._rootOrganizeObject = null;
    };
    return LightContactUtil;
}());

//# sourceMappingURL=LightContactUtil.js.map

/***/ }),
/* 409 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrganizeObject; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__light_util_light_util_module__ = __webpack_require__(7);

///组织对象的初始化
var OrganizeObject = /** @class */ (function () {
    function OrganizeObject(data, organizeObject) {
        ///数据的对象
        this.data = null;
        //之前的组织对象
        this.preOrganize = null;
        ///子组织的对象列表
        this.childOrganize = [];
        ///子用户的对象信息
        this.childUser = [];
        this.data = data;
        this.preOrganize = organizeObject;
    }
    Object.defineProperty(OrganizeObject.prototype, "ID", {
        ///ID的对象
        get: function () {
            var result = "-1";
            if (!!this.data) {
                result = this.data["ID"];
            }
            return result;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OrganizeObject.prototype, "PID", {
        ///父节点的ID
        get: function () {
            var result = "-1";
            if (!!this.data) {
                result = this.data["PID"];
            }
            return result;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OrganizeObject.prototype, "Name", {
        ///名称的信息
        get: function () {
            var result = "单位";
            if (!!this.data) {
                result = this.data["Name"];
            }
            return result;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * 判断是否为根节点
     * @returns {boolean}
     *
     * @memberof OrganizeObject
     */
    OrganizeObject.prototype.isRoot = function () {
        var result = false;
        if (this.ID == "-1") {
            result = true;
        }
        return result;
    };
    /**
     * 得到组织机构的对象
     *
     * @param {string} ID
     * @returns {OrganizeObject}
     *
     * @memberof OrganizeObject
     */
    OrganizeObject.prototype.getOrganizeObject = function (ID) {
        var result = null;
        if (!!ID) {
            if (this.childOrganize.length > 0) {
                for (var index = 0; index < this.childOrganize.length; index++) {
                    var element = this.childOrganize[index];
                    if (element.ID == ID) {
                        result = element;
                        break;
                    }
                    else {
                        result = element.getOrganizeObject(ID);
                        if (!!result) {
                            break;
                        }
                    }
                }
            }
        }
        return result;
    };
    /**
    * @param {String} ID的字符串
    */
    OrganizeObject.prototype.getPreOrganizeList = function () {
        var result = [];
        result.push(this);
        var organzieTemp = this.preOrganize;
        while (!!organzieTemp) {
            result.unshift(organzieTemp);
            organzieTemp = organzieTemp.preOrganize;
        }
        return result;
    };
    /**
     * 得到搜索的用户列表
     *
     * @param {string} 用户名称
     * @returns {Array<UserObject>}
     *
     * @memberof OrganizeObject
     */
    OrganizeObject.prototype.getSearchUserList = function (userName) {
        var result = [];
        if (!!userName) {
            if (this.childUser.length > 0) {
                for (var m = 0; m < this.childUser.length; m++) {
                    var userTemp = this.childUser[m];
                    if (__WEBPACK_IMPORTED_MODULE_0__light_util_light_util_module__["e" /* LightStringUtil */].like(userTemp.Name, userName)) {
                        result.push(userTemp);
                    }
                }
            }
            if (this.childOrganize.length > 0) {
                for (var i = 0; i < this.childOrganize.length; i++) {
                    var organizeTemp = this.childOrganize[i];
                    var userList = organizeTemp.getSearchUserList(userName);
                    if (!!userList && userList.length > 0) {
                        userList.forEach(function (element) {
                            result.push(element);
                        });
                    }
                }
            }
        }
        return result;
    };
    /**
     * 搜索的机构名称列表
     *
     * @param {string} 机构名称
     * @returns {Array<OrganizeObject>}
     *
     * @memberof OrganizeObject
     */
    OrganizeObject.prototype.getSearchOrganizeList = function (userName) {
        var result = [];
        if (!!userName) {
            if (this.childOrganize.length > 0) {
                for (var i = 0; i < this.childOrganize.length; i++) {
                    var organizeTemp = this.childOrganize[i];
                    if (__WEBPACK_IMPORTED_MODULE_0__light_util_light_util_module__["e" /* LightStringUtil */].like(organizeTemp.Name, userName)) {
                        result.push(organizeTemp);
                    }
                    var organizeList = organizeTemp.getSearchOrganizeList(userName);
                    if (!!organizeList && organizeList.length > 0) {
                        organizeList.forEach(function (element) {
                            result.push(element);
                        });
                    }
                }
            }
        }
        return result;
    };
    return OrganizeObject;
}());

//# sourceMappingURL=OrganizeObject.js.map

/***/ }),
/* 410 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_index__ = __webpack_require__(178);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__util_index__["d"]; });

//# sourceMappingURL=light-util.index.js.map

/***/ }),
/* 411 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_index__ = __webpack_require__(91);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__providers_index__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__providers_index__["c"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__providers_index__["f"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_0__providers_index__["l"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_0__providers_index__["m"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_0__providers_index__["n"]; });

//# sourceMappingURL=light-providers.index.js.map

/***/ }),
/* 412 */,
/* 413 */,
/* 414 */,
/* 415 */,
/* 416 */,
/* 417 */,
/* 418 */,
/* 419 */,
/* 420 */,
/* 421 */,
/* 422 */,
/* 423 */,
/* 424 */,
/* 425 */,
/* 426 */,
/* 427 */,
/* 428 */,
/* 429 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_common_index__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__light_light_out_light_out_module__ = __webpack_require__(35);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, lightConfig, lightJPush, lightHotCodePush, lightProviders, lightUser, ionicApp) {
        var _this = this;
        this.lightConfig = lightConfig;
        this.lightJPush = lightJPush;
        this.lightHotCodePush = lightHotCodePush;
        this.lightProviders = lightProviders;
        this.lightUser = lightUser;
        this.ionicApp = ionicApp;
        this.rootPage = null;
        platform.ready().then(function () {
            statusBar.styleDefault();
            splashScreen.hide();
            _this._init();
            _this._cacheInit();
            _this.lightJPush.initJpush(_this.nav, 'LightMessageComponent', _this.lightProviders);
            // this.lightHotCodePush.initCodePush();
        });
    }
    /**
     * 项目初始化配置信息
     * @private
     * @memberof MyApp
     */
    MyApp.prototype._init = function () {
        var _this = this;
        this.lightConfig.baseUrl = "http://61.136.243.46:8092/"; //公司外网IP     
        // this.lightConfig.baseUrl = "./";
        this.lightConfig.timeOut = 2000;
        this.lightUser.autoLoginCheck().then(function () {
            _this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_common_index__["b" /* TabsPage */];
        }).catch(function () {
            _this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_common_index__["a" /* LoginPage */];
        });
        this.lightUser.registerBackButtonAction(this.ionicApp, this.nav);
    };
    /**
     * 项目缓存的配置信息
     * @private
     * @memberof MyApp
     */
    MyApp.prototype._cacheInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('myNav'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/clark/Documents/personal/appFrame/src/app/app.html"*/'<ion-nav [root]="rootPage" #myNav></ion-nav>\n'/*ion-inline-end:"/Users/clark/Documents/personal/appFrame/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_5__light_light_out_light_out_module__["b" /* LightConfig */],
            __WEBPACK_IMPORTED_MODULE_5__light_light_out_light_out_module__["f" /* LightJPush */],
            __WEBPACK_IMPORTED_MODULE_5__light_light_out_light_out_module__["d" /* LightHotCodePush */],
            __WEBPACK_IMPORTED_MODULE_5__light_light_out_light_out_module__["k" /* LightProviders */],
            __WEBPACK_IMPORTED_MODULE_5__light_light_out_light_out_module__["l" /* LightUser */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicApp */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),
/* 430 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalFromBottomEnter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ModalFromBottomLeave; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(4);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var ModalFromBottomEnter = /** @class */ (function (_super) {
    __extends(ModalFromBottomEnter, _super);
    function ModalFromBottomEnter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ModalFromBottomEnter.prototype.init = function () {
        _super.prototype.init.call(this);
        var ele = this.enteringView.pageRef().nativeElement;
        var backdropEle = ele.querySelector('ion-backdrop');
        var backdrop = new __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["c" /* Animation */](this.plt, backdropEle);
        // 背景样式
        backdrop.beforeStyles({ 'z-index': 0, 'opacity': 0.3, 'visibility': 'visible' });
        var wrapper = new __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["c" /* Animation */](this.plt, ele.querySelector('.modal-wrapper'));
        var contentWrapper = new __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["c" /* Animation */](this.plt, ele.querySelector('ion-content.content'));
        // 内容区样式
        contentWrapper.beforeStyles({ 'width': '100%', 'height': '100%' });
        // 模态窗口样式
        wrapper.beforeStyles({ 'opacity': 1, 'width': '70%', 'height': '50%' });
        // translateY是Y轴位置，从0-1上到下
        wrapper.fromTo('translateY', '-50%', '50%');
        wrapper.fromTo('translateX', '50%', '20%');
        // 背景透明度
        backdrop.fromTo('opacity', 0.3, 0.3);
        this
            .element(this.enteringView.pageRef())
            .duration(200)
            .add(backdrop)
            .add(wrapper)
            .add(contentWrapper);
    };
    return ModalFromBottomEnter;
}(__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["o" /* PageTransition */]));

var ModalFromBottomLeave = /** @class */ (function (_super) {
    __extends(ModalFromBottomLeave, _super);
    function ModalFromBottomLeave() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ModalFromBottomLeave.prototype.init = function () {
        _super.prototype.init.call(this);
        var ele = this.leavingView.pageRef().nativeElement;
        var backdrop = new __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["c" /* Animation */](this.plt, ele.querySelector('ion-backdrop'));
        var wrapperEle = ele.querySelector('.modal-wrapper');
        var wrapperEleRect = wrapperEle.getBoundingClientRect();
        var wrapper = new __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["c" /* Animation */](this.plt, wrapperEle);
        backdrop.beforeStyles({ 'visibility': 'hidden' });
        // height of the screen - top of the container tells us how much to scoot it down
        // so it's off-screen
        wrapper.fromTo('translateY', '50%', '0%');
        wrapper.fromTo('translateX', '20%', '50%');
        backdrop.fromTo('opacity', 0.3, 0);
        this
            .element(this.leavingView.pageRef())
            .easing('ease-out')
            .duration(250)
            .add(backdrop)
            .add(wrapper);
    };
    return ModalFromBottomLeave;
}(__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["o" /* PageTransition */]));

//# sourceMappingURL=modal-transition.js.map

/***/ })
],[273]);
//# sourceMappingURL=main.js.map