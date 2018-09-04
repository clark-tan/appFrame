webpackJsonp([9],{

/***/ 433:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LightMessageModule", function() { return LightMessageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__light_message_component__ = __webpack_require__(445);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__light_light_out_light_out_module__ = __webpack_require__(35);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var LightMessageModule = /** @class */ (function () {
    function LightMessageModule() {
    }
    LightMessageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__light_message_component__["a" /* LightMessageComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__light_message_component__["a" /* LightMessageComponent */]),
                __WEBPACK_IMPORTED_MODULE_3__light_light_out_light_out_module__["i" /* LightOutModule */]
            ],
        })
    ], LightMessageModule);
    return LightMessageModule;
}());

//# sourceMappingURL=light-message.component.module.js.map

/***/ }),

/***/ 445:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LightMessageComponent; });
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



var LightMessageComponent = /** @class */ (function () {
    function LightMessageComponent(navCtrl, navParams, lightHttp) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        /**
         * light消息的组件对象
         * @param {NavController} navCtrl
         * @param {NavParams} navParams
         * @memberof LightMessageComponent
         */
        //标题名称
        this.titlename = "消息中心";
        //数据的列表
        this.datalist = [];
        //数据连接
        this.dataurl = "Message/GetMessageList";
        //id的列信息
        this.idcol = "CODE";
        //搜索的内容
        this.searchQuery = "";
        //
        this.placeholder = '请输入';
        //数据的参数信息
        this.dataParam = { "limit": 10, "offset": 0, "fiter": "true" };
    }
    LightMessageComponent.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MessageListPage');
    };
    /**
     * 判断文件类型，显示对应图片
     *
     * @param {any} input
     * @returns {*}
     * @memberof NewDetailPage
     */
    LightMessageComponent.prototype.fileType = function (input) {
        var out = "";
        switch (input) {
            case "1":
                out = "新闻";
                break;
            case "2":
                out = "公告";
                break;
            case "3":
                out = "内部邮件";
                break;
            case "4":
                out = "待办流程";
                break;
            case "5":
                out = "日程提醒";
                break;
            default:
                out = "消息";
                break;
        }
        return out;
    };
    //消息跳转指定页面
    LightMessageComponent.prototype.goTargetPage = function () {
    };
    LightMessageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'light-message',template:/*ion-inline-start:"/Users/clark/Documents/personal/appFrame/src/light/light-pages/light-message/light-message.component.html"*/'<light-list [titleName]="titlename" [dataList]="datalist" [dataUrl]="dataurl" [idCol]="idcol" [dataParam]="dataParam">\n  <ion-searchbar class="lightHeader" (ionInput)="searchText($event)" [(ngModel)]="searchQuery" [placeholder]="placeholder"\n    no-padding></ion-searchbar>\n\n  <div class="message" *ngFor="let item of datalist">\n    <p class="message-time">{{item.Sendtime}}</p>\n    <div class="message-main">\n      <div class="message-title">{{\'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\' + item.Content}}</div>\n      <div class="message-sendUser">{{item.SendUser}}</div>\n      <div class="message-type">\n        <button ion-button clear small (click)=\'goTargetPage()\'>{{ fileType(item.Type) }}\n          <ion-icon name="ios-arrow-forward-outline" class="icon-forward" item-right></ion-icon>\n          <ion-icon name="ios-arrow-forward-outline" class="icon-forward" item-right></ion-icon>\n          <ion-icon name="ios-arrow-forward-outline" class="icon-forward" item-right></ion-icon>\n        </button>\n      </div>\n    </div>\n  </div>\n</light-list>\n'/*ion-inline-end:"/Users/clark/Documents/personal/appFrame/src/light/light-pages/light-message/light-message.component.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__light_light_out_light_out_module__["e" /* LightHttp */]])
    ], LightMessageComponent);
    return LightMessageComponent;
}());

//# sourceMappingURL=light-message.component.js.map

/***/ })

});
//# sourceMappingURL=9.js.map