webpackJsonp([3],{

/***/ 439:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LightListPageModule", function() { return LightListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__light_list_page__ = __webpack_require__(451);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__light_light_out_light_out_module__ = __webpack_require__(35);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var LightListPageModule = /** @class */ (function () {
    function LightListPageModule() {
    }
    LightListPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__light_list_page__["a" /* LightListPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__light_list_page__["a" /* LightListPage */]),
                __WEBPACK_IMPORTED_MODULE_3__light_light_out_light_out_module__["i" /* LightOutModule */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2__light_list_page__["a" /* LightListPage */]]
        })
    ], LightListPageModule);
    return LightListPageModule;
}());

//# sourceMappingURL=light-list-page.module.js.map

/***/ }),

/***/ 451:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LightListPage; });
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



var LightListPage = /** @class */ (function () {
    /**
     * 项目的列表信息
     * @param {NavController} navCtrl
     * @param {NavParams} navParams
     * @memberof ProjectListPage
     */
    function LightListPage(navCtrl, navParams, lightUser) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.lightUser = lightUser;
        //标题名称
        this.titlename = "列表例子";
        //数据的列表
        this.datalist = [];
        //数据连接
        this.dataurl = "DelegateProject/GetDelegateProjectList";
        //id的列信息
        this.idcol = "CODE";
        //搜索的内容
        this.searchQuery = "";
        //显示的信息
        this.placeholder = "请输入项目名称、客户单位、地点";
        //数据的参数信息
        this.dataParam = {};
    }
    LightListPage.prototype.ngOnInit = function () {
        this._flush();
    };
    /**
      * 文本的搜索
      *
      * @param {*} searchbar
      * @memberof ProjectListPage
      */
    LightListPage.prototype.searchText = function (searchbar) {
        this._flush();
    };
    /**
     * 修改参数，刷新组件展示数据
     *
     * @private
     * @memberof SProjectListPage
     */
    LightListPage.prototype._flush = function () {
        var searchParam = {};
        if (!!this.searchQuery) {
            searchParam["search"] = this.searchQuery;
        }
        searchParam["userName"] = this.lightUser.getUserName();
        this.dataParam = searchParam;
    };
    LightListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'light-list-page',template:/*ion-inline-start:"/Users/clark/Documents/personal/appFrame/src/pages/examplePages/light-list-page/light-list-page.html"*/'<light-list [titleName]="titlename" [dataList]="datalist" [dataUrl]="dataurl" [idCol]="idcol" [dataParam]="dataParam">\n  <!-- <button ion-button icon-only (click)=goSunveyNotes() class="lightNavbar">\n          <ion-icon name="ios-funnel-outline"></ion-icon>\n        </button> -->\n  <ion-searchbar class="lightHeader" (ionInput)="searchText($event)" [(ngModel)]="searchQuery" [placeholder]="placeholder"\n    no-padding></ion-searchbar>\n\n  <ion-list class="tab-content">\n    <ion-item *ngFor="let item of datalist">\n      <p class="item-header">\n        <span>委托书编号 | </span>\n        <span>{{item.WTSBH}}</span>\n      </p>\n      <h2 class="item-title text-break">{{item.WTMC}}</h2>\n      <ion-grid no-padding>\n        <ion-row class="project-item">\n          <ion-col class="text-break">\n            <ion-icon name="ios-pin" color="light" class="item-start"></ion-icon>\n            <span>建设地址:</span>\n            <span>{{ item.JSDZ }}</span>\n          </ion-col>\n        </ion-row>\n\n        <ion-row class="project-item">\n          <ion-col>\n            <span class="item-start">起</span>\n            <span class="item-val">{{ item.RWXDSJ }}</span>\n          </ion-col>\n          <ion-col>\n            <span class="item-end">止</span>\n            <span class="item-val">{{ item.TQWCSJ }}</span>\n          </ion-col>\n        </ion-row>\n\n        <ion-row class="project-item">\n          <ion-col>\n            <span class="item-people">建设</span>\n            <span>{{ item.JSDWLXR }}</span>\n          </ion-col>\n        </ion-row>\n        <ion-row class="project-item">\n          <ion-col>\n            <span class="item-people">委托</span>\n            <span>{{ item.WTDWLXR }}</span>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n      <ion-icon name="ios-arrow-forward-outline" item-end class="btn-foward"></ion-icon>\n    </ion-item>\n  </ion-list>\n</light-list>\n'/*ion-inline-end:"/Users/clark/Documents/personal/appFrame/src/pages/examplePages/light-list-page/light-list-page.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__light_light_out_light_out_module__["l" /* LightUser */]])
    ], LightListPage);
    return LightListPage;
}());

//# sourceMappingURL=light-list-page.js.map

/***/ })

});
//# sourceMappingURL=3.js.map