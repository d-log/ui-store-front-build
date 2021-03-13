webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__component_content_home_home_component__ = __webpack_require__("./src/app/component/content/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__component_content_log_tile_archive_archive_component__ = __webpack_require__("./src/app/component/content/log-tile/archive/archive.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__component_content_page_not_found_page_not_found_component__ = __webpack_require__("./src/app/component/content/page-not-found/page-not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__component_content_log_page_page_id_log_page_id_component__ = __webpack_require__("./src/app/component/content/log-page/page-id/log-page-id.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__component_content_log_editor_log_create_component__ = __webpack_require__("./src/app/component/content/log-editor/log-create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__component_content_log_editor_log_update_component__ = __webpack_require__("./src/app/component/content/log-editor/log-update.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var appRoutes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_2__component_content_home_home_component__["a" /* HomeComponent */] },
    { path: 'file/create', component: __WEBPACK_IMPORTED_MODULE_6__component_content_log_editor_log_create_component__["a" /* LogCreateComponent */] },
    { path: 'file/update/:id', component: __WEBPACK_IMPORTED_MODULE_7__component_content_log_editor_log_update_component__["a" /* LogUpdateComponent */] },
    { path: 'log-tile/archive', component: __WEBPACK_IMPORTED_MODULE_3__component_content_log_tile_archive_archive_component__["a" /* ArchiveComponent */] },
    { path: 'log-page/:id', component: __WEBPACK_IMPORTED_MODULE_5__component_content_log_page_page_id_log_page_id_component__["a" /* LogPageIdComponent */] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_4__component_content_page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(appRoutes, {
                    enableTracing: false,
                })
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */]
            ],
            providers: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = "#the-container {\n  width: 100vw;\n  height: 100vh;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n\n#the-side-nav {\n  -webkit-transition: width 0.5s;\n  transition: width 0.5s;\n  float: left;\n  width: 250px;\n  height: 100vh;\n  overflow: hidden;\n\n  border-right: 2px solid var(--main-darker-2-color);\n}\n\n#the-side-nav.close {\n  width: 0;\n  border-right: 0;\n}\n\n#nav-top-and-the-content {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1; /* fit the rest of viewport */\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n\n#navigation-top {\n  height: 40px;\n  overflow: hidden;\n}\n\n#the-content {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1; /* fit the rest of viewport */\n  height: 100%;\n  overflow: scroll;\n}\n"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"the-container\">\n  <div id=\"the-side-nav\" [className]=\"navigationSideLeftState\">\n    <!--<app-navigation-side-left></app-navigation-side-left>-->\n  </div>\n  <div id=\"nav-top-and-the-content\">\n    <div id=\"navigation-top\">\n      <app-navigation-top (onToggleNavigationSideLeft)=\"toggleNavigationSideLeft($event)\"></app-navigation-top>\n    </div>\n    <div id=\"the-content\" (scroll)=\"onContentScroll($event)\">\n      <router-outlet><!-- content here (some contains footer)--></router-outlet>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_event_broker_shared_service_event_broker_service__ = __webpack_require__("./src/app/service/event-broker-shared-service/event-broker-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_event_broker_shared_service_broker_event__ = __webpack_require__("./src/app/service/event-broker-shared-service/broker-event.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = /** @class */ (function () {
    function AppComponent(_eventBroker, router) {
        this._eventBroker = _eventBroker;
        this.router = router;
        /**
         * when secretKeyCode is pressed within a second redirect to hidden /file/create
         * @type {number[]}
         */
        this.secretKeyCode = [67, 67, 67];
        this.keyCodes = [];
        this.closeNavigationSideLeft();
    }
    AppComponent.prototype.keyup = function (event) {
        var _this = this;
        this.keyCodes.push();
        if (event.keyCode === this.secretKeyCode[this.keyCodes.length]) {
            this.keyCodes.push(event.keyCode);
            if (this.keyCodes.length === this.secretKeyCode.length) {
                this.router.navigate(['/file/create']);
            }
        }
        setTimeout(function () {
            _this.keyCodes = [];
        }, 1000);
    };
    AppComponent.prototype.toggleNavigationSideLeft = function () {
        if (this.navigationSideLeftState === 'close') {
            this.openNavigationSideLeft();
        }
        else {
            this.closeNavigationSideLeft();
        }
    };
    AppComponent.prototype.closeNavigationSideLeft = function () {
        this.navigationSideLeftState = 'close';
        this.navigationSideLeftButtonState = '';
        // wait until animation is done with buffer, then send event
        this.broadcastEvent(__WEBPACK_IMPORTED_MODULE_2__service_event_broker_shared_service_broker_event__["a" /* BrokerEvent */].NAVIGATION_SIDE_LEFT_STATE_CLOSED, 505);
        this.broadcastEvent(__WEBPACK_IMPORTED_MODULE_2__service_event_broker_shared_service_broker_event__["a" /* BrokerEvent */].NAVIGATION_SIDE_LEFT_STATE_CHANGED, 505);
    };
    AppComponent.prototype.openNavigationSideLeft = function () {
        this.navigationSideLeftState = '';
        this.navigationSideLeftButtonState = 'close';
        // wait until animation is done with buffer, then send event
        this.broadcastEvent(__WEBPACK_IMPORTED_MODULE_2__service_event_broker_shared_service_broker_event__["a" /* BrokerEvent */].NAVIGATION_SIDE_LEFT_STATE_OPENED, 505);
        this.broadcastEvent(__WEBPACK_IMPORTED_MODULE_2__service_event_broker_shared_service_broker_event__["a" /* BrokerEvent */].NAVIGATION_SIDE_LEFT_STATE_CHANGED, 505);
    };
    AppComponent.prototype.broadcastEvent = function (brokerEvent, millisecondDelay) {
        var _this = this;
        setTimeout(function () {
            _this._eventBroker.emit(String(brokerEvent), true);
        }, millisecondDelay);
    };
    AppComponent.prototype.onContentScroll = function (event) {
        this._eventBroker.emit(String(__WEBPACK_IMPORTED_MODULE_2__service_event_broker_shared_service_broker_event__["a" /* BrokerEvent */].CONTENT_SCROLLED), true);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('window:keyup', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], AppComponent.prototype, "keyup", null);
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_event_broker_shared_service_event_broker_service__["a" /* EventBrokerService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular_sortablejs__ = __webpack_require__("./node_modules/angular-sortablejs/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular_sortablejs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular_sortablejs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_disqus__ = __webpack_require__("./node_modules/ngx-disqus/esm5/ngx-disqus.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__component_navigation_top_navigation_top_component__ = __webpack_require__("./src/app/component/navigation-top/navigation-top.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__component_navigation_side_left_navigation_side_left_component__ = __webpack_require__("./src/app/component/navigation-side-left/navigation-side-left.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__component_navigation_side_left_toolbar_navigation_side_left_toolbar_component__ = __webpack_require__("./src/app/component/navigation-side-left/toolbar/navigation-side-left-toolbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__component_widget_core_log_selector_column_toolbar_log_selector_column_toolbar_component__ = __webpack_require__("./src/app/component/widget/core/log/selector/column/toolbar/log-selector-column-toolbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__component_widget_core_log_selector_column_log_selector_column_component__ = __webpack_require__("./src/app/component/widget/core/log/selector/column/log-selector-column.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__component_widget_core_log_selector_log_selector_component__ = __webpack_require__("./src/app/component/widget/core/log/selector/log-selector.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__component_content_page_not_found_page_not_found_component__ = __webpack_require__("./src/app/component/content/page-not-found/page-not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__component_content_home_home_component__ = __webpack_require__("./src/app/component/content/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__component_content_home_home_top_home_top_component__ = __webpack_require__("./src/app/component/content/home/home-top/home-top.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__component_content_log_tile_archive_archive_component__ = __webpack_require__("./src/app/component/content/log-tile/archive/archive.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__component_content_log_tile_masonry_masonry_component__ = __webpack_require__("./src/app/component/content/log-tile/masonry/masonry.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__component_content_log_tile_masonry_tile_type_log_tile_log_component__ = __webpack_require__("./src/app/component/content/log-tile/masonry/tile/type/log/tile-log.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__component_content_log_tile_masonry_tile_type_log_tile_log_default_tile_log_default_component__ = __webpack_require__("./src/app/component/content/log-tile/masonry/tile/type/log/tile-log-default/tile-log-default.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__component_content_log_tile_masonry_tile_type_log_tile_log_extra_tile_log_extra_component__ = __webpack_require__("./src/app/component/content/log-tile/masonry/tile/type/log/tile-log-extra/tile-log-extra.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__component_content_log_page_page_id_log_page_id_component__ = __webpack_require__("./src/app/component/content/log-page/page-id/log-page-id.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__component_content_log_page_page_log_page_component__ = __webpack_require__("./src/app/component/content/log-page/page/log-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__component_content_log_page_page_log_content_section_log_content_descendant_logs_section_log_content_descendant_logs_section_component__ = __webpack_require__("./src/app/component/content/log-page/page/log-content/section/log-content-descendant-logs-section/log-content-descendant-logs-section.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__component_content_log_page_page_log_content_section_log_content_header_section_log_content_header_section_component__ = __webpack_require__("./src/app/component/content/log-page/page/log-content/section/log-content-header-section/log-content-header-section.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__component_content_log_page_page_log_content_section_log_content_comment_section_log_content_comment_section_component__ = __webpack_require__("./src/app/component/content/log-page/page/log-content/section/log-content-comment-section/log-content-comment-section.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__component_widget_core_log_log_content_video_youtube_default_log_content_video_youtube_default_component__ = __webpack_require__("./src/app/component/widget/core/log/log-content/video-youtube-default/log-content-video-youtube-default.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__component_widget_core_log_log_content_text_plain_default_log_content_text_plain_default_component__ = __webpack_require__("./src/app/component/widget/core/log/log-content/text-plain-default/log-content-text-plain-default.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__component_widget_core_log_log_content_image_default_log_content_image_default_component__ = __webpack_require__("./src/app/component/widget/core/log/log-content/image-default/log-content-image-default.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__component_widget_core_log_log_content_text_markdown_default_log_content_text_markdown_default_component__ = __webpack_require__("./src/app/component/widget/core/log/log-content/text-markdown-default/log-content-text-markdown-default.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__component_widget_core_log_log_content_text_quote_default_log_content_text_quote_default_component__ = __webpack_require__("./src/app/component/widget/core/log/log-content/text-quote-default/log-content-text-quote-default.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__component_widget_core_log_log_content_text_code_default_log_content_text_code_default_component__ = __webpack_require__("./src/app/component/widget/core/log/log-content/text-code-default/log-content-text-code-default.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__component_content_log_page_page_log_content_log_content_type_component__ = __webpack_require__("./src/app/component/content/log-page/page/log-content/log-content-type.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pipe_safe_pipe__ = __webpack_require__("./src/app/pipe/safe.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pipe_markdown_markdown_pipe__ = __webpack_require__("./src/app/pipe/markdown/markdown.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pipe_code_code_pipe__ = __webpack_require__("./src/app/pipe/code/code.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__pipe_date_date_pipe__ = __webpack_require__("./src/app/pipe/date/date.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__service_twitter_twitter_service__ = __webpack_require__("./src/app/service/twitter/twitter.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__service_core_endpoint_tag_tag_model_service__ = __webpack_require__("./src/app/service/core/endpoint/tag/tag-model.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__service_core_endpoint_image_image_model_service__ = __webpack_require__("./src/app/service/core/endpoint/image/image-model.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__service_core_endpoint_image_image_upload_service__ = __webpack_require__("./src/app/service/core/endpoint/image/image-upload.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__service_core_endpoint_log_log_model_service__ = __webpack_require__("./src/app/service/core/endpoint/log/log-model.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__service_event_broker_shared_service_event_broker_service__ = __webpack_require__("./src/app/service/event-broker-shared-service/event-broker-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__component_widget_util_script_hack_script_hack_component__ = __webpack_require__("./src/app/component/widget/util/script-hack/script-hack.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__component_widget_util_twitter_twitter_component__ = __webpack_require__("./src/app/component/widget/util/twitter/twitter.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__component_widget_core_tag_selector_toolbar_tag_selector_toolbar_component__ = __webpack_require__("./src/app/component/widget/core/tag/selector/toolbar/tag-selector-toolbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__component_widget_core_tag_selector_tag_selector_component__ = __webpack_require__("./src/app/component/widget/core/tag/selector/tag-selector.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__component_widget_core_tag_selector_content_tag_selector_content_component__ = __webpack_require__("./src/app/component/widget/core/tag/selector/content/tag-selector-content.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__component_widget_core_tag_create_tag_creator_component__ = __webpack_require__("./src/app/component/widget/core/tag/create/tag-creator.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__component_widget_core_tag_update_tag_updator_component__ = __webpack_require__("./src/app/component/widget/core/tag/update/tag-updator.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__component_widget_core_tag_tag_widget_component__ = __webpack_require__("./src/app/component/widget/core/tag/tag-widget.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__component_content_log_editor_log_create_component__ = __webpack_require__("./src/app/component/content/log-editor/log-create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__component_content_log_editor_log_update_component__ = __webpack_require__("./src/app/component/content/log-editor/log-update.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__component_content_log_editor_editor_log_editor_component__ = __webpack_require__("./src/app/component/content/log-editor/editor/log-editor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__component_content_log_editor_editor_metadata_log_editor_metadata_component__ = __webpack_require__("./src/app/component/content/log-editor/editor/metadata/log-editor-metadata.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__component_content_log_editor_editor_organization_log_editor_organization_component__ = __webpack_require__("./src/app/component/content/log-editor/editor/organization/log-editor-organization.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57__component_content_log_editor_editor_organization_tag_log_editor_organization_tag_component__ = __webpack_require__("./src/app/component/content/log-editor/editor/organization/tag/log-editor-organization-tag.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58__component_content_log_editor_editor_organization_directory_log_editor_organization_directory_component__ = __webpack_require__("./src/app/component/content/log-editor/editor/organization/directory/log-editor-organization-directory.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_59__component_content_log_editor_editor_content_log_editor_contents_component__ = __webpack_require__("./src/app/component/content/log-editor/editor/content/log-editor-contents.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_60__component_content_log_editor_editor_content_helper_text_log_editor_content_helper_text_component__ = __webpack_require__("./src/app/component/content/log-editor/editor/content/helper/text/log-editor-content-helper-text.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_61__component_content_log_editor_editor_content_helper_link_log_editor_content_helper_link_component__ = __webpack_require__("./src/app/component/content/log-editor/editor/content/helper/link/log-editor-content-helper-link.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_62__component_content_log_editor_editor_content_helper_image_log_editor_content_helper_image_component__ = __webpack_require__("./src/app/component/content/log-editor/editor/content/helper/image/log-editor-content-helper-image.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_63__component_content_log_editor_editor_content_helper_image_link_log_editor_content_helper_image_link_component__ = __webpack_require__("./src/app/component/content/log-editor/editor/content/helper/image/link/log-editor-content-helper-image-link.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_64__component_content_log_editor_editor_content_helper_image_existing_log_editor_content_helper_image_existing_component__ = __webpack_require__("./src/app/component/content/log-editor/editor/content/helper/image/existing/log-editor-content-helper-image-existing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_65__component_content_log_editor_editor_content_type_impl_text_code_log_editor_content_text_code_component__ = __webpack_require__("./src/app/component/content/log-editor/editor/content/type/impl/text-code/log-editor-content-text-code.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_66__component_content_log_editor_editor_content_type_impl_text_quote_log_editor_content_text_quote_component__ = __webpack_require__("./src/app/component/content/log-editor/editor/content/type/impl/text-quote/log-editor-content-text-quote.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_67__component_content_log_editor_editor_content_type_impl_video_youtube_log_editor_content_video_youtube_component__ = __webpack_require__("./src/app/component/content/log-editor/editor/content/type/impl/video-youtube/log-editor-content-video-youtube.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_68__component_content_log_editor_editor_content_type_impl_twitter_tweet_log_editor_content_twitter_tweet_component__ = __webpack_require__("./src/app/component/content/log-editor/editor/content/type/impl/twitter-tweet/log-editor-content-twitter-tweet.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_69__component_content_log_editor_editor_content_helper_image_upload_log_editor_content_helper_image_upload_component__ = __webpack_require__("./src/app/component/content/log-editor/editor/content/helper/image/upload/log-editor-content-helper-image-upload.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_70__component_content_log_editor_editor_content_type_css_log_editor_content_css_component__ = __webpack_require__("./src/app/component/content/log-editor/editor/content/type/css/log-editor-content-css.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_71__component_content_log_editor_editor_content_type_log_editor_content_container_component__ = __webpack_require__("./src/app/component/content/log-editor/editor/content/type/log-editor-content-container.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_72__component_content_log_editor_editor_content_type_impl_text_plain_log_editor_content_text_plain_component__ = __webpack_require__("./src/app/component/content/log-editor/editor/content/type/impl/text-plain/log-editor-content-text-plain.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_73__component_content_log_editor_editor_content_type_impl_text_markdown_log_editor_content_text_markdown_component__ = __webpack_require__("./src/app/component/content/log-editor/editor/content/type/impl/text-markdown/log-editor-content-text-markdown.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_74__component_content_log_editor_editor_content_type_impl_image_internal_log_editor_content_image_internal_component__ = __webpack_require__("./src/app/component/content/log-editor/editor/content/type/impl/image-internal/log-editor-content-image-internal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_75__component_content_log_editor_editor_content_type_impl_image_quote_log_editor_content_image_quote_component__ = __webpack_require__("./src/app/component/content/log-editor/editor/content/type/impl/image-quote/log-editor-content-image-quote.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_76__component_content_log_page_page_log_content_section_log_content_child_logs_section_log_content_child_logs_section_component__ = __webpack_require__("./src/app/component/content/log-page/page/log-content/section/log-content-child-logs-section/log-content-child-logs-section.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













































































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_51__component_widget_core_tag_tag_widget_component__["a" /* TagWidgetComponent */],
                __WEBPACK_IMPORTED_MODULE_47__component_widget_core_tag_selector_tag_selector_component__["a" /* TagSelectorComponent */],
                __WEBPACK_IMPORTED_MODULE_48__component_widget_core_tag_selector_content_tag_selector_content_component__["a" /* TagSelectorContentComponent */],
                __WEBPACK_IMPORTED_MODULE_49__component_widget_core_tag_create_tag_creator_component__["a" /* TagCreatorComponent */],
                __WEBPACK_IMPORTED_MODULE_50__component_widget_core_tag_update_tag_updator_component__["a" /* TagUpdatorComponent */],
                __WEBPACK_IMPORTED_MODULE_46__component_widget_core_tag_selector_toolbar_tag_selector_toolbar_component__["a" /* TagSelectorToolbarComponent */],
                __WEBPACK_IMPORTED_MODULE_45__component_widget_util_twitter_twitter_component__["a" /* TwitterComponent */],
                __WEBPACK_IMPORTED_MODULE_44__component_widget_util_script_hack_script_hack_component__["a" /* ScriptHackComponent */],
                __WEBPACK_IMPORTED_MODULE_8__component_navigation_top_navigation_top_component__["a" /* NavigationTopComponent */],
                __WEBPACK_IMPORTED_MODULE_9__component_navigation_side_left_navigation_side_left_component__["a" /* NavigationSideLeftComponent */],
                __WEBPACK_IMPORTED_MODULE_10__component_navigation_side_left_toolbar_navigation_side_left_toolbar_component__["a" /* NavigationSideLeftToolbarComponent */],
                __WEBPACK_IMPORTED_MODULE_12__component_widget_core_log_selector_column_log_selector_column_component__["a" /* LogSelectorColumnComponent */],
                __WEBPACK_IMPORTED_MODULE_13__component_widget_core_log_selector_log_selector_component__["a" /* LogSelectorComponent */],
                __WEBPACK_IMPORTED_MODULE_11__component_widget_core_log_selector_column_toolbar_log_selector_column_toolbar_component__["a" /* LogSelectorColumnToolbarComponent */],
                __WEBPACK_IMPORTED_MODULE_15__component_content_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_16__component_content_home_home_top_home_top_component__["a" /* HomeTopComponent */],
                __WEBPACK_IMPORTED_MODULE_14__component_content_page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */],
                __WEBPACK_IMPORTED_MODULE_52__component_content_log_editor_log_create_component__["a" /* LogCreateComponent */],
                __WEBPACK_IMPORTED_MODULE_53__component_content_log_editor_log_update_component__["a" /* LogUpdateComponent */],
                __WEBPACK_IMPORTED_MODULE_54__component_content_log_editor_editor_log_editor_component__["a" /* LogEditorComponent */],
                __WEBPACK_IMPORTED_MODULE_56__component_content_log_editor_editor_organization_log_editor_organization_component__["a" /* LogEditorOrganizationComponent */],
                __WEBPACK_IMPORTED_MODULE_57__component_content_log_editor_editor_organization_tag_log_editor_organization_tag_component__["a" /* LogEditorOrganizationTagComponent */],
                __WEBPACK_IMPORTED_MODULE_58__component_content_log_editor_editor_organization_directory_log_editor_organization_directory_component__["a" /* LogEditorOrganizationDirectoryComponent */],
                __WEBPACK_IMPORTED_MODULE_55__component_content_log_editor_editor_metadata_log_editor_metadata_component__["a" /* LogEditorMetadataComponent */],
                __WEBPACK_IMPORTED_MODULE_59__component_content_log_editor_editor_content_log_editor_contents_component__["a" /* LogEditorContentsComponent */],
                __WEBPACK_IMPORTED_MODULE_60__component_content_log_editor_editor_content_helper_text_log_editor_content_helper_text_component__["a" /* LogEditorContentHelperTextComponent */],
                __WEBPACK_IMPORTED_MODULE_61__component_content_log_editor_editor_content_helper_link_log_editor_content_helper_link_component__["a" /* LogEditorContentHelperLinkComponent */],
                __WEBPACK_IMPORTED_MODULE_62__component_content_log_editor_editor_content_helper_image_log_editor_content_helper_image_component__["a" /* LogEditorContentHelperImageComponent */],
                __WEBPACK_IMPORTED_MODULE_63__component_content_log_editor_editor_content_helper_image_link_log_editor_content_helper_image_link_component__["a" /* LogEditorContentHelperImageLinkComponent */],
                __WEBPACK_IMPORTED_MODULE_64__component_content_log_editor_editor_content_helper_image_existing_log_editor_content_helper_image_existing_component__["a" /* LogEditorContentHelperImageExistingComponent */],
                __WEBPACK_IMPORTED_MODULE_69__component_content_log_editor_editor_content_helper_image_upload_log_editor_content_helper_image_upload_component__["a" /* LogEditorContentHelperImageUploadComponent */],
                __WEBPACK_IMPORTED_MODULE_70__component_content_log_editor_editor_content_type_css_log_editor_content_css_component__["a" /* LogEditorContentCssComponent */],
                __WEBPACK_IMPORTED_MODULE_71__component_content_log_editor_editor_content_type_log_editor_content_container_component__["a" /* LogEditorContentContainerComponent */],
                __WEBPACK_IMPORTED_MODULE_72__component_content_log_editor_editor_content_type_impl_text_plain_log_editor_content_text_plain_component__["a" /* LogEditorContentTextPlainComponent */],
                __WEBPACK_IMPORTED_MODULE_65__component_content_log_editor_editor_content_type_impl_text_code_log_editor_content_text_code_component__["a" /* LogEditorContentTextCodeComponent */],
                __WEBPACK_IMPORTED_MODULE_75__component_content_log_editor_editor_content_type_impl_image_quote_log_editor_content_image_quote_component__["a" /* LogEditorContentImageQuoteComponent */],
                __WEBPACK_IMPORTED_MODULE_74__component_content_log_editor_editor_content_type_impl_image_internal_log_editor_content_image_internal_component__["a" /* LogEditorContentImageInternalComponent */],
                __WEBPACK_IMPORTED_MODULE_73__component_content_log_editor_editor_content_type_impl_text_markdown_log_editor_content_text_markdown_component__["a" /* LogEditorContentTextMarkdownComponent */],
                __WEBPACK_IMPORTED_MODULE_66__component_content_log_editor_editor_content_type_impl_text_quote_log_editor_content_text_quote_component__["a" /* LogEditorContentTextQuoteComponent */],
                __WEBPACK_IMPORTED_MODULE_68__component_content_log_editor_editor_content_type_impl_twitter_tweet_log_editor_content_twitter_tweet_component__["a" /* LogEditorContentTwitterTweetComponent */],
                __WEBPACK_IMPORTED_MODULE_67__component_content_log_editor_editor_content_type_impl_video_youtube_log_editor_content_video_youtube_component__["a" /* LogEditorContentVideoYoutubeComponent */],
                __WEBPACK_IMPORTED_MODULE_22__component_content_log_page_page_id_log_page_id_component__["a" /* LogPageIdComponent */],
                __WEBPACK_IMPORTED_MODULE_23__component_content_log_page_page_log_page_component__["a" /* LogPageComponent */],
                __WEBPACK_IMPORTED_MODULE_25__component_content_log_page_page_log_content_section_log_content_header_section_log_content_header_section_component__["a" /* LogContentHeaderSectionComponent */],
                __WEBPACK_IMPORTED_MODULE_26__component_content_log_page_page_log_content_section_log_content_comment_section_log_content_comment_section_component__["a" /* LogContentCommentSectionComponent */],
                __WEBPACK_IMPORTED_MODULE_76__component_content_log_page_page_log_content_section_log_content_child_logs_section_log_content_child_logs_section_component__["a" /* LogContentChildLogsSectionComponent */],
                __WEBPACK_IMPORTED_MODULE_24__component_content_log_page_page_log_content_section_log_content_descendant_logs_section_log_content_descendant_logs_section_component__["a" /* LogContentDescendantLogsSectionComponent */],
                __WEBPACK_IMPORTED_MODULE_33__component_content_log_page_page_log_content_log_content_type_component__["a" /* LogContentTypeComponent */],
                __WEBPACK_IMPORTED_MODULE_27__component_widget_core_log_log_content_video_youtube_default_log_content_video_youtube_default_component__["a" /* LogContentVideoYoutubeDefaultComponent */],
                __WEBPACK_IMPORTED_MODULE_28__component_widget_core_log_log_content_text_plain_default_log_content_text_plain_default_component__["a" /* LogContentTextPlainDefaultComponent */],
                __WEBPACK_IMPORTED_MODULE_29__component_widget_core_log_log_content_image_default_log_content_image_default_component__["a" /* LogContentImageDefaultComponent */],
                __WEBPACK_IMPORTED_MODULE_30__component_widget_core_log_log_content_text_markdown_default_log_content_text_markdown_default_component__["a" /* LogContentTextMarkdownDefaultComponent */],
                __WEBPACK_IMPORTED_MODULE_31__component_widget_core_log_log_content_text_quote_default_log_content_text_quote_default_component__["a" /* LogContentTextQuoteDefaultComponent */],
                __WEBPACK_IMPORTED_MODULE_32__component_widget_core_log_log_content_text_code_default_log_content_text_code_default_component__["a" /* LogContentTextCodeDefaultComponent */],
                __WEBPACK_IMPORTED_MODULE_17__component_content_log_tile_archive_archive_component__["a" /* ArchiveComponent */],
                __WEBPACK_IMPORTED_MODULE_18__component_content_log_tile_masonry_masonry_component__["a" /* MasonryComponent */],
                __WEBPACK_IMPORTED_MODULE_19__component_content_log_tile_masonry_tile_type_log_tile_log_component__["a" /* TileLogComponent */],
                __WEBPACK_IMPORTED_MODULE_21__component_content_log_tile_masonry_tile_type_log_tile_log_extra_tile_log_extra_component__["a" /* TileLogExtraComponent */],
                __WEBPACK_IMPORTED_MODULE_20__component_content_log_tile_masonry_tile_type_log_tile_log_default_tile_log_default_component__["a" /* TileLogDefaultComponent */],
                __WEBPACK_IMPORTED_MODULE_34__pipe_safe_pipe__["a" /* SafePipe */],
                __WEBPACK_IMPORTED_MODULE_35__pipe_markdown_markdown_pipe__["a" /* MarkdownPipe */],
                __WEBPACK_IMPORTED_MODULE_36__pipe_code_code_pipe__["a" /* CodePipe */],
                __WEBPACK_IMPORTED_MODULE_37__pipe_date_date_pipe__["a" /* DatePipe */],
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_19__component_content_log_tile_masonry_tile_type_log_tile_log_component__["a" /* TileLogComponent */],
                __WEBPACK_IMPORTED_MODULE_20__component_content_log_tile_masonry_tile_type_log_tile_log_default_tile_log_default_component__["a" /* TileLogDefaultComponent */],
                __WEBPACK_IMPORTED_MODULE_27__component_widget_core_log_log_content_video_youtube_default_log_content_video_youtube_default_component__["a" /* LogContentVideoYoutubeDefaultComponent */],
                __WEBPACK_IMPORTED_MODULE_28__component_widget_core_log_log_content_text_plain_default_log_content_text_plain_default_component__["a" /* LogContentTextPlainDefaultComponent */],
                __WEBPACK_IMPORTED_MODULE_29__component_widget_core_log_log_content_image_default_log_content_image_default_component__["a" /* LogContentImageDefaultComponent */],
                __WEBPACK_IMPORTED_MODULE_30__component_widget_core_log_log_content_text_markdown_default_log_content_text_markdown_default_component__["a" /* LogContentTextMarkdownDefaultComponent */],
                __WEBPACK_IMPORTED_MODULE_31__component_widget_core_log_log_content_text_quote_default_log_content_text_quote_default_component__["a" /* LogContentTextQuoteDefaultComponent */],
                __WEBPACK_IMPORTED_MODULE_32__component_widget_core_log_log_content_text_code_default_log_content_text_code_default_component__["a" /* LogContentTextCodeDefaultComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_angular_sortablejs__["SortablejsModule"].forRoot({ animation: 150 }),
                __WEBPACK_IMPORTED_MODULE_6_ngx_disqus__["a" /* DisqusModule */].forRoot('marcuschiu'),
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5__app_routing_module__["a" /* AppRoutingModule */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_38__service_twitter_twitter_service__["a" /* TwitterService */],
                __WEBPACK_IMPORTED_MODULE_42__service_core_endpoint_log_log_model_service__["a" /* LogModelService */],
                __WEBPACK_IMPORTED_MODULE_39__service_core_endpoint_tag_tag_model_service__["a" /* TagModelService */],
                __WEBPACK_IMPORTED_MODULE_40__service_core_endpoint_image_image_model_service__["a" /* ImageModelService */],
                __WEBPACK_IMPORTED_MODULE_41__service_core_endpoint_image_image_upload_service__["a" /* ImageUploadService */],
                __WEBPACK_IMPORTED_MODULE_43__service_event_broker_shared_service_event_broker_service__["a" /* EventBrokerService */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/component/content/home/home-top/home-top.component.css":
/***/ (function(module, exports) {

module.exports = ".top-file-container {\n  height: calc(200vh + 200px);\n  -ms-flex-item-align: center;\n      align-self: center;\n  text-align: center;\n  background: -webkit-gradient(linear, left top, left bottom, from(var(--main-darker-3-color)), to(rgba(0, 0, 0, 0)));\n  background: linear-gradient(to bottom, var(--main-darker-3-color), rgba(0, 0, 0, 0));\n  color: var(--main-color);\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n\n.first {\n  height: calc(100vh - 40px);\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n\n.bottom {\n  padding-bottom: 50px;\n}\n\n.second {\n  height: 50vh;\n}\n\n.third {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n}\n"

/***/ }),

/***/ "./src/app/component/content/home/home-top/home-top.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"top-file-container\">\n  <div class=\"first\">\n    <div>Welcome to Marcus Chiu's Website</div>\n    <div class=\"bottom\"></div>\n  </div>\n  <div class=\"second\">\n    <div>your ad here</div>\n  </div>\n  <div class=\"third\">\n    <img src=\"assets/images/me.png\">\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/component/content/home/home-top/home-top.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeTopComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeTopComponent = /** @class */ (function () {
    function HomeTopComponent() {
    }
    HomeTopComponent.prototype.ngOnInit = function () {
    };
    HomeTopComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home-top',
            template: __webpack_require__("./src/app/component/content/home/home-top/home-top.component.html"),
            styles: [__webpack_require__("./src/app/component/content/home/home-top/home-top.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeTopComponent);
    return HomeTopComponent;
}());



/***/ }),

/***/ "./src/app/component/content/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ".content-home {\n}\n"

/***/ }),

/***/ "./src/app/component/content/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-home\">\n  <!--<app-home-top></app-home-top>-->\n  <app-log-page [logModel]=\"rootLogModel\"></app-log-page>\n</div>\n"

/***/ }),

/***/ "./src/app/component/content/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_core_endpoint_log_log_model_service__ = __webpack_require__("./src/app/service/core/endpoint/log/log-model.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_core_model_data_log_extra_log_display_type__ = __webpack_require__("./src/app/service/core/model/data/log/extra/log-display-type.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = /** @class */ (function () {
    function HomeComponent(logModelService) {
        this.logModelService = logModelService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.logModelService.getRoot(__WEBPACK_IMPORTED_MODULE_2__service_core_model_data_log_extra_log_display_type__["a" /* LogDisplayType */].PAGE, __WEBPACK_IMPORTED_MODULE_2__service_core_model_data_log_extra_log_display_type__["a" /* LogDisplayType */].TILE).subscribe(function (fileModel) {
            _this.rootLogModel = fileModel;
        });
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/component/content/home/home.component.html"),
            styles: [__webpack_require__("./src/app/component/content/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_core_endpoint_log_log_model_service__["a" /* LogModelService */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/component/content/log-editor/editor/content/helper/image/existing/log-editor-content-helper-image-existing.component.css":
/***/ (function(module, exports) {

module.exports = ".images {\n  height: 400px;\n  overflow: scroll;\n}\n\n.image {\n  margin-left: auto;\n  margin-right: auto;\n  width: 25%;\n}\n\n.image:hover {\n  cursor: pointer;\n}\n"

/***/ }),

/***/ "./src/app/component/content/log-editor/editor/content/helper/image/existing/log-editor-content-helper-image-existing.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"images\" (scroll)=\"onScroll()\">\n  <div class=\"image\" *ngFor=\"let logData of selectableImageLogContents; let i = index\">\n    <app-log-content-image-default (click)=\"onSelectImage(i)\" [data]=\"logData.data\"></app-log-content-image-default>\n  </div>\n  <div #bottom></div>\n</div>\n"

/***/ }),

/***/ "./src/app/component/content/log-editor/editor/content/helper/image/existing/log-editor-content-helper-image-existing.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogEditorContentHelperImageExistingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_core_model_request_sort__ = __webpack_require__("./src/app/service/core/model/request/sort.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_core_model_data_log_extra_log_content_log_content__ = __webpack_require__("./src/app/service/core/model/data/log/extra/log-content/log-content.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_core_model_request_pageable__ = __webpack_require__("./src/app/service/core/model/request/pageable.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_core_endpoint_image_image_model_service__ = __webpack_require__("./src/app/service/core/endpoint/image/image-model.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__service_core_model_request_sort_order__ = __webpack_require__("./src/app/service/core/model/request/sort-order.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__service_core_model_data_log_extra_log_content_type_image_internal_image_internal_log_content__ = __webpack_require__("./src/app/service/core/model/data/log/extra/log-content/type/image-internal/image-internal-log-content.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__service_core_endpoint_image_image_getter_request__ = __webpack_require__("./src/app/service/core/endpoint/image/image-getter-request.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var LogEditorContentHelperImageExistingComponent = /** @class */ (function () {
    function LogEditorContentHelperImageExistingComponent(imageModelService) {
        this.imageModelService = imageModelService;
        this.doubleClickedImageLogContent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.selectableImageLogContents = [];
        this.moreFilesExist = true;
        var getterRequest = new __WEBPACK_IMPORTED_MODULE_7__service_core_endpoint_image_image_getter_request__["a" /* ImageGetterRequest */]();
        getterRequest.pageable = new __WEBPACK_IMPORTED_MODULE_3__service_core_model_request_pageable__["a" /* Pageable */](-1, 20);
        getterRequest.sorts = [new __WEBPACK_IMPORTED_MODULE_1__service_core_model_request_sort__["a" /* Sort */]('metadata.created', __WEBPACK_IMPORTED_MODULE_5__service_core_model_request_sort_order__["a" /* SortOrder */].desc)];
        this.getterRequest = getterRequest;
    }
    LogEditorContentHelperImageExistingComponent.prototype.ngOnInit = function () {
        this.getImageModels();
    };
    LogEditorContentHelperImageExistingComponent.prototype.getImageModels = function () {
        var _this = this;
        this.getterRequest.pageable.page++;
        this.imageModelService.theGetter(this.getterRequest).subscribe(function (imageModels) {
            if (imageModels.length === 0) {
                _this.moreFilesExist = false;
            }
            else {
                var imageInternalLogContents = imageModels.map(function (imageModel) {
                    var imageInternalLogContent = new __WEBPACK_IMPORTED_MODULE_6__service_core_model_data_log_extra_log_content_type_image_internal_image_internal_log_content__["a" /* ImageInternalLogContent */]();
                    imageInternalLogContent.imageModelID = imageModel.id;
                    imageInternalLogContent.imageModel = imageModel;
                    return new __WEBPACK_IMPORTED_MODULE_2__service_core_model_data_log_extra_log_content_log_content__["a" /* LogContent */]('ImageInternalLogContent', null, imageInternalLogContent);
                });
                _this.selectableImageLogContents = _this.selectableImageLogContents.concat(imageInternalLogContents);
            }
        });
    };
    LogEditorContentHelperImageExistingComponent.prototype.onScroll = function () {
        this.loadModelsIfEmptySpace();
    };
    LogEditorContentHelperImageExistingComponent.prototype.loadModelsIfEmptySpace = function () {
        if (this.moreFilesExist) {
            if (this.isElementInViewport(this.bottom.nativeElement)) {
                this.getImageModels();
            }
        }
    };
    LogEditorContentHelperImageExistingComponent.prototype.isElementInViewport = function (el) {
        var viewportOffset = el.getBoundingClientRect();
        var top = viewportOffset.top;
        return top <= window.innerHeight;
    };
    LogEditorContentHelperImageExistingComponent.prototype.onSelectImage = function (index) {
        var selectedImageLogContent = this.selectableImageLogContents[index];
        if (this.selectedImageLogContent !== undefined && this.selectedImageLogContent.data.imageModel.id === selectedImageLogContent.data.imageModel.id) {
            this.doubleClickedImageLogContent.emit(this.selectableImageLogContents[index]);
        }
        else {
            this.selectedImageLogContent = selectedImageLogContent;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], LogEditorContentHelperImageExistingComponent.prototype, "doubleClickedImageLogContent", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('bottom'),
        __metadata("design:type", Object)
    ], LogEditorContentHelperImageExistingComponent.prototype, "bottom", void 0);
    LogEditorContentHelperImageExistingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-log-editor-content-helper-image-existing',
            template: __webpack_require__("./src/app/component/content/log-editor/editor/content/helper/image/existing/log-editor-content-helper-image-existing.component.html"),
            styles: [__webpack_require__("./src/app/component/content/log-editor/editor/content/helper/image/existing/log-editor-content-helper-image-existing.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__service_core_endpoint_image_image_model_service__["a" /* ImageModelService */]])
    ], LogEditorContentHelperImageExistingComponent);
    return LogEditorContentHelperImageExistingComponent;
}());



/***/ }),

/***/ "./src/app/component/content/log-editor/editor/content/helper/image/link/log-editor-content-helper-image-link.component.css":
/***/ (function(module, exports) {

module.exports = ".container {\n  color: var(--main-darker-2-color);\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: auto 50px;\n      grid-template-columns: auto 50px;\n  text-align: center;\n}\n\nspan:hover {\n  cursor: pointer;\n  color: var(--main-darker-3-color);\n}\n"

/***/ }),

/***/ "./src/app/component/content/log-editor/editor/content/helper/image/link/log-editor-content-helper-image-link.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <input #input type=\"text\" [(ngModel)]=\"link\" placeholder=\"image link\" (keypress)=\"onKeyPress($event)\">\n  <button (click)=\"submitLink()\">submit</button>\n</div>\n"

/***/ }),

/***/ "./src/app/component/content/log-editor/editor/content/helper/image/link/log-editor-content-helper-image-link.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogEditorContentHelperImageLinkComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_core_endpoint_image_image_upload_service__ = __webpack_require__("./src/app/service/core/endpoint/image/image-upload.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LogEditorContentHelperImageLinkComponent = /** @class */ (function () {
    function LogEditorContentHelperImageLinkComponent(imageUploadService) {
        this.imageUploadService = imageUploadService;
        this.receivedImageModel = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    LogEditorContentHelperImageLinkComponent.prototype.ngAfterViewInit = function () {
        this.inputElement.nativeElement.focus();
    };
    LogEditorContentHelperImageLinkComponent.prototype.onKeyPress = function (event) {
        if (event.keyCode === 13) {
            this.submitLink();
        }
    };
    LogEditorContentHelperImageLinkComponent.prototype.submitLink = function () {
        var _this = this;
        var observable = this.imageUploadService.uploadByURL(this.link);
        if (observable instanceof __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */]) {
            observable.subscribe(function (imageModel) {
                if (imageModel !== undefined && imageModel.id !== undefined) {
                    _this.receivedImageModel.emit(imageModel);
                }
                else {
                    alert(imageModel);
                }
            });
        }
        else {
            alert(observable);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], LogEditorContentHelperImageLinkComponent.prototype, "receivedImageModel", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('input'),
        __metadata("design:type", Object)
    ], LogEditorContentHelperImageLinkComponent.prototype, "inputElement", void 0);
    LogEditorContentHelperImageLinkComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-log-editor-content-helper-image-link',
            template: __webpack_require__("./src/app/component/content/log-editor/editor/content/helper/image/link/log-editor-content-helper-image-link.component.html"),
            styles: [__webpack_require__("./src/app/component/content/log-editor/editor/content/helper/image/link/log-editor-content-helper-image-link.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__service_core_endpoint_image_image_upload_service__["a" /* ImageUploadService */]])
    ], LogEditorContentHelperImageLinkComponent);
    return LogEditorContentHelperImageLinkComponent;
}());



/***/ }),

/***/ "./src/app/component/content/log-editor/editor/content/helper/image/log-editor-content-helper-image.component.css":
/***/ (function(module, exports) {

module.exports = ".container {\n  border-top: 1px solid var(--main-color);\n}\n\n.toolbar {\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: auto auto auto 20px;\n      grid-template-columns: auto auto auto 20px;\n  text-align: center;\n  white-space: nowrap;\n  overflow: hidden;\n  color: var(--main-darker-2-color);\n}\n\n.image-add-type:hover {\n  cursor: pointer;\n  background-color: var(--main-darker-color);\n  color: var(--main-darker-3-color);\n}\n\n.toolbar > i:hover {\n  cursor: pointer;\n  color: var(--main-darker-3-color);\n}\n\n.selected-type {\n  background-color: var(--main-darker-color);\n  color: var(--main-darker-3-color);\n}\n\n.selected-type:hover {\n  cursor: default;\n}\n"

/***/ }),

/***/ "./src/app/component/content/log-editor/editor/content/helper/image/log-editor-content-helper-image.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"toolbar\">\n    <div class=\"image-add-type\" (click)=\"changeImageAddType('link')\"\n         [ngClass]=\"{'selected-type': imageAddType === 'link'}\">link\n    </div>\n    <div class=\"image-add-type\" (click)=\"changeImageAddType('upload')\"\n         [ngClass]=\"{'selected-type': imageAddType === 'upload'}\">upload\n    </div>\n    <div class=\"image-add-type\" (click)=\"changeImageAddType('existing')\"\n         [ngClass]=\"{'selected-type': imageAddType === 'existing'}\">existing\n    </div>\n    <i class=\"fa fa-chevron-up\" (click)=\"onCloseHelper()\" aria-hidden=\"true\"></i>\n  </div>\n  <div *ngIf=\"imageAddType === 'link'\">\n    <app-log-editor-content-helper-image-link\n      (receivedImageModel)=\"uploadedImageModel($event)\"></app-log-editor-content-helper-image-link>\n  </div>\n  <div *ngIf=\"imageAddType === 'upload'\">\n    <app-file-editor-log-data-helper-image-upload\n      (receivedImageModel)=\"uploadedImageModel($event)\"></app-file-editor-log-data-helper-image-upload>\n  </div>\n  <div *ngIf=\"imageAddType === 'existing'\">\n    <app-log-editor-content-helper-image-existing\n      (doubleClickedImageLogContent)=\"selectedExistingImageLogData($event)\"></app-log-editor-content-helper-image-existing>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/component/content/log-editor/editor/content/helper/image/log-editor-content-helper-image.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogEditorContentHelperImageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_core_model_data_log_log_model__ = __webpack_require__("./src/app/service/core/model/data/log/log-model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_core_model_data_log_extra_log_content_log_content__ = __webpack_require__("./src/app/service/core/model/data/log/extra/log-content/log-content.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_core_model_data_log_extra_log_content_type_image_internal_image_internal_log_content__ = __webpack_require__("./src/app/service/core/model/data/log/extra/log-content/type/image-internal/image-internal-log-content.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LogEditorContentHelperImageComponent = /** @class */ (function () {
    function LogEditorContentHelperImageComponent() {
        this.closeHelper = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    LogEditorContentHelperImageComponent.prototype.ngOnInit = function () {
        this.imageAddType = 'upload';
    };
    LogEditorContentHelperImageComponent.prototype.changeImageAddType = function (imageAddType) {
        this.imageAddType = imageAddType;
    };
    LogEditorContentHelperImageComponent.prototype.onCloseHelper = function () {
        this.closeHelper.emit(true);
    };
    LogEditorContentHelperImageComponent.prototype.selectedExistingImageLogData = function (selectedImageLogData) {
        selectedImageLogData.logContentType = 'ImageInternalLogContent';
        selectedImageLogData.css = this.generateDefaultCSS();
        this.logModel.logContents.push(selectedImageLogData);
        this.onCloseHelper();
    };
    LogEditorContentHelperImageComponent.prototype.uploadedImageModel = function (imageModel) {
        this.addImageModel(imageModel);
    };
    LogEditorContentHelperImageComponent.prototype.addImageModel = function (imageModel) {
        var imageInternalLogData = new __WEBPACK_IMPORTED_MODULE_3__service_core_model_data_log_extra_log_content_type_image_internal_image_internal_log_content__["a" /* ImageInternalLogContent */]();
        imageInternalLogData.imageModelID = imageModel.id;
        imageInternalLogData.imageModel = imageModel;
        this.logModel.logContents.push(new __WEBPACK_IMPORTED_MODULE_2__service_core_model_data_log_extra_log_content_log_content__["a" /* LogContent */]('ImageInternalLogContent', this.generateDefaultCSS(), imageInternalLogData));
        this.onCloseHelper();
    };
    LogEditorContentHelperImageComponent.prototype.generateDefaultCSS = function () {
        return {
            'margin-top': '20px',
            'margin-left': 'auto',
            'margin-right': 'auto',
            'max-width': '800px'
        };
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__service_core_model_data_log_log_model__["a" /* LogModel */])
    ], LogEditorContentHelperImageComponent.prototype, "logModel", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], LogEditorContentHelperImageComponent.prototype, "closeHelper", void 0);
    LogEditorContentHelperImageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-log-editor-content-helper-image',
            template: __webpack_require__("./src/app/component/content/log-editor/editor/content/helper/image/log-editor-content-helper-image.component.html"),
            styles: [__webpack_require__("./src/app/component/content/log-editor/editor/content/helper/image/log-editor-content-helper-image.component.css")]
        })
    ], LogEditorContentHelperImageComponent);
    return LogEditorContentHelperImageComponent;
}());



/***/ }),

/***/ "./src/app/component/content/log-editor/editor/content/helper/image/upload/log-editor-content-helper-image-upload.component.css":
/***/ (function(module, exports) {

module.exports = ".container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n\nform {\n  max-width: 300px;\n}\n\nform > input:hover {\n  cursor: pointer;\n}\n"

/***/ }),

/***/ "./src/app/component/content/log-editor/editor/content/helper/image/upload/log-editor-content-helper-image-upload.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <form id=\"file-form\" method=\"POST\">\n    <input type=\"file\" id=\"file-select\" name=\"file\"/>\n    <button type=\"submit\" id=\"upload-button\">Upload</button>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/component/content/log-editor/editor/content/helper/image/upload/log-editor-content-helper-image-upload.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogEditorContentHelperImageUploadComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_core_endpoint_image_image_upload_service__ = __webpack_require__("./src/app/service/core/endpoint/image/image-upload.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LogEditorContentHelperImageUploadComponent = /** @class */ (function () {
    function LogEditorContentHelperImageUploadComponent(imageUploadService) {
        this.imageUploadService = imageUploadService;
        this.receivedImageModel = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    LogEditorContentHelperImageUploadComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        var form = document.getElementById('file-form');
        var fileSelect = document.getElementById('file-select');
        form.onsubmit = function () {
            event.preventDefault();
            var observable = _this.imageUploadService.uploadByFile(fileSelect.files);
            if (observable instanceof __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */]) {
                observable.subscribe(function (imageModel) {
                    if (imageModel !== undefined && imageModel.id !== undefined) {
                        _this.receivedImageModel.emit(imageModel);
                    }
                    else {
                        alert(imageModel);
                    }
                });
            }
            else {
                alert(observable);
            }
        };
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], LogEditorContentHelperImageUploadComponent.prototype, "receivedImageModel", void 0);
    LogEditorContentHelperImageUploadComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-file-editor-log-data-helper-image-upload',
            template: __webpack_require__("./src/app/component/content/log-editor/editor/content/helper/image/upload/log-editor-content-helper-image-upload.component.html"),
            styles: [__webpack_require__("./src/app/component/content/log-editor/editor/content/helper/image/upload/log-editor-content-helper-image-upload.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__service_core_endpoint_image_image_upload_service__["a" /* ImageUploadService */]])
    ], LogEditorContentHelperImageUploadComponent);
    return LogEditorContentHelperImageUploadComponent;
}());



/***/ }),

/***/ "./src/app/component/content/log-editor/editor/content/helper/link/log-editor-content-helper-link.component.css":
/***/ (function(module, exports) {

module.exports = ".toolbar {\n  border-top: 1px solid var(--main-color);\n  color: var(--main-darker-2-color);\n  text-align: center;\n\n  display: -ms-grid;\n\n  display: grid;\n  -ms-grid-columns: auto 50px 20px;\n      grid-template-columns: auto 50px 20px;\n}\n\n.toolbar > span:hover {\n  cursor: pointer;\n  color: var(--main-darker-3-color);\n  background-color: var(--main-darker-color);\n}\n\n.toolbar > i:hover {\n  cursor: pointer;\n  color: var(--main-darker-3-color);\n}\n"

/***/ }),

/***/ "./src/app/component/content/log-editor/editor/content/helper/link/log-editor-content-helper-link.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"toolbar\">\n  <input #input type=\"text\" [(ngModel)]=\"link\" placeholder=\"youtube or twitter\" (keypress)=\"onKeyPress($event)\">\n  <button (click)=\"submitLink()\">add</button>\n  <i class=\"fa fa-chevron-up\" (click)=\"onCloseHelper()\" aria-hidden=\"true\"></i>\n</div>\n"

/***/ }),

/***/ "./src/app/component/content/log-editor/editor/content/helper/link/log-editor-content-helper-link.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogEditorContentHelperLinkComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_twitter_twitter_service__ = __webpack_require__("./src/app/service/twitter/twitter.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_core_model_data_log_log_model__ = __webpack_require__("./src/app/service/core/model/data/log/log-model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_core_model_data_log_extra_log_content_type_video_youtube_video_youtube_log_content__ = __webpack_require__("./src/app/service/core/model/data/log/extra/log-content/type/video-youtube/video-youtube-log-content.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_core_model_data_log_extra_log_content_log_content__ = __webpack_require__("./src/app/service/core/model/data/log/extra/log-content/log-content.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__service_core_model_data_log_extra_log_content_type_twitter_tweet_twitter_tweet_log_content__ = __webpack_require__("./src/app/service/core/model/data/log/extra/log-content/type/twitter-tweet/twitter-tweet-log-content.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LogEditorContentHelperLinkComponent = /** @class */ (function () {
    function LogEditorContentHelperLinkComponent(twitterService) {
        this.twitterService = twitterService;
        this.closeHelper = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    LogEditorContentHelperLinkComponent.prototype.ngAfterViewInit = function () {
        this.inputElement.nativeElement.focus();
    };
    LogEditorContentHelperLinkComponent.prototype.onCloseHelper = function () {
        this.closeHelper.emit(true);
    };
    LogEditorContentHelperLinkComponent.prototype.onKeyPress = function (event) {
        if (event.keyCode === 13) {
            this.submitLink();
        }
    };
    LogEditorContentHelperLinkComponent.prototype.submitLink = function () {
        var hostname = this.extractRootDomain(this.link);
        switch (hostname) {
            case 'youtube.com':
                this.addVideoYouTube(this.link);
                break;
            case 'twitter.com':
                this.addTwitter(this.link);
                break;
            default:
                alert('we do not support: ' + hostname);
        }
    };
    // To address those who want the "root domain," use this function:
    LogEditorContentHelperLinkComponent.prototype.extractRootDomain = function (url) {
        var domain = this.extractHostname(url);
        var splitArr = domain.split('.');
        var arrLen = splitArr.length;
        // extracting the root domain here
        // if there is a subdomain
        if (arrLen > 2) {
            domain = splitArr[arrLen - 2] + '.' + splitArr[arrLen - 1];
            // check to see if it's using a Country Code Top Level Domain (ccTLD) (i.e. ".me.uk")
            if (splitArr[arrLen - 2].length === 2 && splitArr[arrLen - 1].length === 2) {
                // this is using a ccTLD
                domain = splitArr[arrLen - 3] + '.' + domain;
            }
        }
        return domain;
    };
    LogEditorContentHelperLinkComponent.prototype.extractHostname = function (url) {
        var hostname;
        // find & remove protocol (http, ftp, etc.) and get hostname
        if (url.indexOf('://') > -1) {
            hostname = url.split('/')[2];
        }
        else {
            hostname = url.split('/')[0];
        }
        // find & remove port number
        hostname = hostname.split(':')[0];
        // find & remove "?"
        hostname = hostname.split('?')[0];
        return hostname;
    };
    LogEditorContentHelperLinkComponent.prototype.addVideoYouTube = function (link) {
        var videoID = new URL(link).searchParams.get('v');
        if (videoID !== undefined) {
            var videoYouTubeLogData = new __WEBPACK_IMPORTED_MODULE_3__service_core_model_data_log_extra_log_content_type_video_youtube_video_youtube_log_content__["a" /* VideoYoutubeLogContent */]();
            videoYouTubeLogData.videoID = videoID;
            this.data.logContents.push(new __WEBPACK_IMPORTED_MODULE_4__service_core_model_data_log_extra_log_content_log_content__["a" /* LogContent */]('VideoYouTubeLogContent', this.generateDefaultCSS(), videoYouTubeLogData));
            this.onCloseHelper();
        }
        else {
            alert('youtube link missing URL parameter \'v\'');
        }
    };
    LogEditorContentHelperLinkComponent.prototype.addTwitter = function (link) {
        var id = this.twitterService.extractTweetIDFromURL(link);
        if (id !== undefined) {
            var twitterTweetLogData = new __WEBPACK_IMPORTED_MODULE_5__service_core_model_data_log_extra_log_content_type_twitter_tweet_twitter_tweet_log_content__["a" /* TwitterTweetLogContent */]();
            twitterTweetLogData.url = link;
            twitterTweetLogData.tweetID = id;
            this.data.logContents.push(new __WEBPACK_IMPORTED_MODULE_4__service_core_model_data_log_extra_log_content_log_content__["a" /* LogContent */]('TwitterTweetLogContent', this.generateDefaultCSS(), twitterTweetLogData));
            this.onCloseHelper();
        }
        else {
            alert('error twitter url');
        }
    };
    LogEditorContentHelperLinkComponent.prototype.generateDefaultCSS = function () {
        return {
            'margin-top': '20px',
            'margin-left': 'auto',
            'margin-right': 'auto',
            'max-width': '800px'
        };
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__service_core_model_data_log_log_model__["a" /* LogModel */])
    ], LogEditorContentHelperLinkComponent.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], LogEditorContentHelperLinkComponent.prototype, "closeHelper", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('input'),
        __metadata("design:type", Object)
    ], LogEditorContentHelperLinkComponent.prototype, "inputElement", void 0);
    LogEditorContentHelperLinkComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-log-editor-content-helper-link',
            template: __webpack_require__("./src/app/component/content/log-editor/editor/content/helper/link/log-editor-content-helper-link.component.html"),
            styles: [__webpack_require__("./src/app/component/content/log-editor/editor/content/helper/link/log-editor-content-helper-link.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_twitter_twitter_service__["a" /* TwitterService */]])
    ], LogEditorContentHelperLinkComponent);
    return LogEditorContentHelperLinkComponent;
}());



/***/ }),

/***/ "./src/app/component/content/log-editor/editor/content/helper/text/log-editor-content-helper-text.component.css":
/***/ (function(module, exports) {

module.exports = ".text-toolbar {\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: auto auto auto auto 20px;\n      grid-template-columns: auto auto auto auto 20px;\n  text-align: center;\n  color: var(--main-darker-2-color);\n}\n\n.fa-plus {\n  font-size: 10px;\n}\n\n.text-toolbar > div:hover {\n  cursor: pointer;\n  background-color: var(--main-darker-color);\n}\n\ni:hover {\n  cursor: pointer;\n  color: var(--main-darker-3-color);\n}\n"

/***/ }),

/***/ "./src/app/component/content/log-editor/editor/content/helper/text/log-editor-content-helper-text.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"text-toolbar\">\n  <div (click)=\"addTextPlain()\"><i class=\"fa fa-plus\" aria-hidden=\"true\"></i> plain</div>\n  <div (click)=\"addTextMarkdown()\"><i class=\"fa fa-plus\" aria-hidden=\"true\"></i> markdown</div>\n  <div (click)=\"addTextCode()\"><i class=\"fa fa-plus\" aria-hidden=\"true\"></i> code</div>\n  <div (click)=\"addTextQuote()\"><i class=\"fa fa-plus\" aria-hidden=\"true\"></i> quote</div>\n  <i class=\"fa fa-chevron-up\" (click)=\"onCloseHelper()\" aria-hidden=\"true\"></i>\n</div>\n"

/***/ }),

/***/ "./src/app/component/content/log-editor/editor/content/helper/text/log-editor-content-helper-text.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogEditorContentHelperTextComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_core_model_data_log_extra_log_content_type_text_code_text_code_log_content__ = __webpack_require__("./src/app/service/core/model/data/log/extra/log-content/type/text-code/text-code-log-content.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_core_model_data_log_log_model__ = __webpack_require__("./src/app/service/core/model/data/log/log-model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_core_model_data_log_extra_log_content_log_content__ = __webpack_require__("./src/app/service/core/model/data/log/extra/log-content/log-content.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_core_model_data_log_extra_log_content_type_text_markdown_text_markdown_log_content__ = __webpack_require__("./src/app/service/core/model/data/log/extra/log-content/type/text-markdown/text-markdown-log-content.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__service_core_model_data_log_extra_log_content_type_text_plain_text_plain_log_content__ = __webpack_require__("./src/app/service/core/model/data/log/extra/log-content/type/text-plain/text-plain-log-content.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__service_core_model_data_log_extra_log_content_type_text_quote_text_quote_log_content__ = __webpack_require__("./src/app/service/core/model/data/log/extra/log-content/type/text-quote/text-quote-log-content.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LogEditorContentHelperTextComponent = /** @class */ (function () {
    function LogEditorContentHelperTextComponent() {
        this.closeHelper = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    LogEditorContentHelperTextComponent.prototype.onCloseHelper = function () {
        this.closeHelper.emit(true);
    };
    LogEditorContentHelperTextComponent.prototype.addTextCode = function () {
        var textCodeLogData = new __WEBPACK_IMPORTED_MODULE_1__service_core_model_data_log_extra_log_content_type_text_code_text_code_log_content__["a" /* TextCodeLogContent */]();
        textCodeLogData.text = 'public static void main(String args[]) {\n    System.out.println("Hello World");\n}';
        textCodeLogData.language = 'java';
        textCodeLogData.showLineNumber = true;
        textCodeLogData.maxHeight = -1;
        textCodeLogData.startingLineNumber = 1;
        this.data.logContents.push(new __WEBPACK_IMPORTED_MODULE_3__service_core_model_data_log_extra_log_content_log_content__["a" /* LogContent */]('TextCodeLogContent', this.generateDefaultCSS(), textCodeLogData));
    };
    LogEditorContentHelperTextComponent.prototype.addTextMarkdown = function () {
        var textMarkdownLogData = new __WEBPACK_IMPORTED_MODULE_4__service_core_model_data_log_extra_log_content_type_text_markdown_text_markdown_log_content__["a" /* TextMarkdownLogContent */]();
        textMarkdownLogData.text = 'something';
        this.data.logContents.push(new __WEBPACK_IMPORTED_MODULE_3__service_core_model_data_log_extra_log_content_log_content__["a" /* LogContent */]('TextMarkdownLogContent', this.generateDefaultCSS(), textMarkdownLogData));
    };
    LogEditorContentHelperTextComponent.prototype.addTextPlain = function () {
        var textPlainLogData = new __WEBPACK_IMPORTED_MODULE_5__service_core_model_data_log_extra_log_content_type_text_plain_text_plain_log_content__["a" /* TextPlainLogContent */]();
        textPlainLogData.text = 'test text plain';
        this.data.logContents.push(new __WEBPACK_IMPORTED_MODULE_3__service_core_model_data_log_extra_log_content_log_content__["a" /* LogContent */]('TextPlainLogContent', this.generateDefaultCSS(), textPlainLogData));
    };
    LogEditorContentHelperTextComponent.prototype.addTextQuote = function () {
        var textQuoteLogData = new __WEBPACK_IMPORTED_MODULE_6__service_core_model_data_log_extra_log_content_type_text_quote_text_quote_log_content__["a" /* TextQuoteLogContent */]();
        textQuoteLogData.text = 'I am the way, the truth and life';
        textQuoteLogData.sourceName = 'Jesus Christ';
        this.data.logContents.push(new __WEBPACK_IMPORTED_MODULE_3__service_core_model_data_log_extra_log_content_log_content__["a" /* LogContent */]('TextQuoteLogContent', this.generateDefaultCSS(), textQuoteLogData));
    };
    LogEditorContentHelperTextComponent.prototype.generateDefaultCSS = function () {
        return {
            'margin-top': '20px',
            'margin-left': 'auto',
            'margin-right': 'auto',
            'max-width': '800px'
        };
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__service_core_model_data_log_log_model__["a" /* LogModel */])
    ], LogEditorContentHelperTextComponent.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], LogEditorContentHelperTextComponent.prototype, "closeHelper", void 0);
    LogEditorContentHelperTextComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-log-editor-content-helper-text',
            template: __webpack_require__("./src/app/component/content/log-editor/editor/content/helper/text/log-editor-content-helper-text.component.html"),
            styles: [__webpack_require__("./src/app/component/content/log-editor/editor/content/helper/text/log-editor-content-helper-text.component.css")]
        })
    ], LogEditorContentHelperTextComponent);
    return LogEditorContentHelperTextComponent;
}());



/***/ }),

/***/ "./src/app/component/content/log-editor/editor/content/log-editor-contents.component.css":
/***/ (function(module, exports) {

module.exports = ".toolbar {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  background-color: var(--main-darker-color);\n  text-align: center;\n}\n\n.toolbar div {\n  white-space: nowrap;\n  overflow: hidden;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n}\n\n.toolbar div:hover {\n  cursor: pointer;\n  background-color: var(--main-darker-2-color);\n}\n\n.helper-container {\n  border-bottom: 1px solid var(--main-darker-color);\n}\n\n.helper-selected {\n  background-color: var(--main-darker-2-color);\n}\n"

/***/ }),

/***/ "./src/app/component/content/log-editor/editor/content/log-editor-contents.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"toolbar\">\n    <div *ngIf=\"displayAddHeader\" (click)=\"addHeaderSection()\">header</div>\n    <div *ngIf=\"displayAddComment\" (click)=\"addCommentSection()\">comment</div>\n    <div *ngIf=\"displayAddChildLogs\" (click)=\"addChildLogSection()\">child</div>\n    <div *ngIf=\"displayAddDescendantLogs\" (click)=\"addDescendantLogSection()\">descendant</div>\n    <div (click)=\"toggleHelper('text')\" [ngClass]=\"{'helper-selected': displayHelperType === 'text'}\">text</div>\n    <div (click)=\"toggleHelper('image')\" [ngClass]=\"{'helper-selected': displayHelperType === 'image'}\">image</div>\n    <div (click)=\"toggleHelper('link')\" [ngClass]=\"{'helper-selected': displayHelperType === 'link'}\">link</div>\n  </div>\n  <div class=\"helper-container\" *ngIf=\"displayHelperType !== undefined\">\n    <app-log-editor-content-helper-image *ngIf=\"displayHelperType === 'image'\" [logModel]=\"_logModel\"\n                                         (closeHelper)=\"closeHelper()\"></app-log-editor-content-helper-image>\n    <app-log-editor-content-helper-text *ngIf=\"displayHelperType === 'text'\" [data]=\"_logModel\"\n                                        (closeHelper)=\"closeHelper()\"></app-log-editor-content-helper-text>\n    <app-log-editor-content-helper-link *ngIf=\"displayHelperType === 'link'\" [data]=\"_logModel\"\n                                        (closeHelper)=\"closeHelper()\"></app-log-editor-content-helper-link>\n  </div>\n  <div [sortablejs]=\"_logModel.logContents\" [sortablejsOptions]=\"{}\">\n    <div class=\"log-data-type-container\" *ngFor=\"let logData of _logModel.logContents; let i = index\">\n      <app-log-editor-content-container [logContent]=\"logData\"\n                                        [logModel]=\"_logModel\"\n                                        [index]=\"i\"\n                                        (deleteThisLogContent)=\"deleteLogData($event)\">\n      </app-log-editor-content-container>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/component/content/log-editor/editor/content/log-editor-contents.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogEditorContentsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_core_model_data_log_log_model__ = __webpack_require__("./src/app/service/core/model/data/log/log-model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_core_model_data_log_extra_log_content_log_content__ = __webpack_require__("./src/app/service/core/model/data/log/extra/log-content/log-content.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LogEditorContentsComponent = /** @class */ (function () {
    function LogEditorContentsComponent() {
        this.displayAddHeader = false;
        this.displayAddComment = false;
        this.displayAddChildLogs = false;
        this.displayAddDescendantLogs = false;
        this.displayHelperType = undefined;
    }
    Object.defineProperty(LogEditorContentsComponent.prototype, "logModel", {
        set: function (logModel) {
            this._logModel = logModel;
            this.ngOnInit();
        },
        enumerable: true,
        configurable: true
    });
    LogEditorContentsComponent.prototype.ngOnInit = function () {
        if (this._logModel.logContents.filter(function (content) { return content.logContentType === 'HeaderSectionLogContent'; }).length === 0) {
            this.displayAddHeader = true;
        }
        if (this._logModel.logContents.filter(function (content) { return content.logContentType === 'CommentSectionLogContent'; }).length === 0) {
            this.displayAddComment = true;
        }
        if (this._logModel.logContents.filter(function (content) { return content.logContentType === 'ChildLogsSectionLogContent'; }).length === 0) {
            this.displayAddChildLogs = true;
        }
        if (this._logModel.logContents.filter(function (content) { return content.logContentType === 'DescendantLogsSectionLogContent'; }).length === 0) {
            this.displayAddDescendantLogs = true;
        }
    };
    LogEditorContentsComponent.prototype.closeHelper = function () {
        this.displayHelperType = undefined;
    };
    LogEditorContentsComponent.prototype.toggleHelper = function (type) {
        if (this.displayHelperType === type) {
            this.displayHelperType = undefined;
        }
        else {
            this.displayHelperType = type;
        }
    };
    LogEditorContentsComponent.prototype.addHeaderSection = function () {
        this._logModel.logContents.push(__WEBPACK_IMPORTED_MODULE_2__service_core_model_data_log_extra_log_content_log_content__["a" /* LogContent */].defaultHeader());
        this.displayAddHeader = false;
    };
    LogEditorContentsComponent.prototype.addCommentSection = function () {
        this._logModel.logContents.push(__WEBPACK_IMPORTED_MODULE_2__service_core_model_data_log_extra_log_content_log_content__["a" /* LogContent */].defaultComment());
        this.displayAddComment = false;
    };
    LogEditorContentsComponent.prototype.addChildLogSection = function () {
        this._logModel.logContents.push(__WEBPACK_IMPORTED_MODULE_2__service_core_model_data_log_extra_log_content_log_content__["a" /* LogContent */].defaultChildLogs());
        this.displayAddChildLogs = false;
    };
    LogEditorContentsComponent.prototype.addDescendantLogSection = function () {
        this._logModel.logContents.push(__WEBPACK_IMPORTED_MODULE_2__service_core_model_data_log_extra_log_content_log_content__["a" /* LogContent */].defaultDescendantLogs());
        this.displayAddChildLogs = false;
    };
    LogEditorContentsComponent.prototype.deleteLogData = function (index) {
        var logContentType = this._logModel.logContents[index].logContentType;
        if (logContentType === 'HeaderSectionLogContent') {
            this.displayAddHeader = true;
        }
        else if (logContentType === 'CommentSectionLogContent') {
            this.displayAddComment = true;
        }
        else if (logContentType === 'ChildLogsSectionLogContent') {
            this.displayAddChildLogs = true;
        }
        else if (logContentType === 'DescendantLogsSectionLogContent') {
            this.displayAddDescendantLogs = true;
        }
        this._logModel.logContents.splice(index, 1);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__service_core_model_data_log_log_model__["a" /* LogModel */]),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_core_model_data_log_log_model__["a" /* LogModel */]])
    ], LogEditorContentsComponent.prototype, "logModel", null);
    LogEditorContentsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-log-editor-contents',
            template: __webpack_require__("./src/app/component/content/log-editor/editor/content/log-editor-contents.component.html"),
            styles: [__webpack_require__("./src/app/component/content/log-editor/editor/content/log-editor-contents.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LogEditorContentsComponent);
    return LogEditorContentsComponent;
}());



/***/ }),

/***/ "./src/app/component/content/log-editor/editor/content/type/css/log-editor-content-css.component.css":
/***/ (function(module, exports) {

module.exports = ".container {\n  padding: 3px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: auto 20px;\n      grid-template-columns: auto 20px;\n}\n\n.css-key-value {\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: auto auto 20px;\n      grid-template-columns: auto auto 20px;\n}\n\n.delete {\n  text-align: center;\n  -ms-flex-item-align: center;\n      -ms-grid-row-align: center;\n      align-self: center;\n}\n\n.delete:hover {\n  cursor: pointer;\n  color: var(--main-darker-3-color);\n}\n\n.add {\n  text-align: center;\n}\n\n.add:hover {\n  cursor: pointer;\n  color: var(--main-darker-3-color);\n}\n"

/***/ }),

/***/ "./src/app/component/content/log-editor/editor/content/type/css/log-editor-content-css.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div>\n    <div class=\"css-key-value\" *ngFor=\"let key of keys let i = index\">\n      <input type=\"text\" value=\"{{key}}\" (change)=\"keyChanged($event, i)\">\n      <input type=\"text\" [(ngModel)]=\"values[i]\" (input)=\"valueChanged($event, i)\">\n      <i class=\"fa fa-times delete\" (click)=\"onDeleteCssDirective(i)\" aria-hidden=\"true\"></i>\n    </div>\n  </div>\n  <i class=\"fa fa-plus add\" aria-hidden=\"true\" (click)=\"add()\"></i>\n</div>\n"

/***/ }),

/***/ "./src/app/component/content/log-editor/editor/content/type/css/log-editor-content-css.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogEditorContentCssComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_core_model_data_log_extra_log_content_log_content__ = __webpack_require__("./src/app/service/core/model/data/log/extra/log-content/log-content.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LogEditorContentCssComponent = /** @class */ (function () {
    function LogEditorContentCssComponent() {
        this.keys = [];
        this.values = [];
    }
    LogEditorContentCssComponent.prototype.ngOnInit = function () {
        if (!this.logContent.css) {
            this.logContent.css = {};
        }
        for (var property in this.logContent.css) {
            this.keys.push(property);
            this.values.push(this.logContent.css[property]);
        }
    };
    LogEditorContentCssComponent.prototype.onDeleteCssDirective = function (index) {
        var key = this.keys[index];
        delete this.logContent.css[key];
        this.values.splice(index, 1);
        this.keys.splice(index, 1);
    };
    LogEditorContentCssComponent.prototype.keyChanged = function (event, index) {
        var newKey = event.srcElement.value;
        var oldKey = this.keys[index];
        var sameValue = this.values[index];
        delete this.logContent.css[oldKey];
        this.logContent.css[newKey] = sameValue;
        this.keys[index] = newKey;
    };
    LogEditorContentCssComponent.prototype.valueChanged = function (event, index) {
        var element = event.srcElement;
        var key = this.keys[index];
        this.logContent.css[key] = element.value;
    };
    LogEditorContentCssComponent.prototype.add = function () {
        this.logContent.css[''] = '';
        if (Object.keys(this.logContent.css).length > this.keys.length) {
            this.values.push('');
            this.keys.push('');
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__service_core_model_data_log_extra_log_content_log_content__["a" /* LogContent */])
    ], LogEditorContentCssComponent.prototype, "logContent", void 0);
    LogEditorContentCssComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-log-editor-content-css',
            template: __webpack_require__("./src/app/component/content/log-editor/editor/content/type/css/log-editor-content-css.component.html"),
            styles: [__webpack_require__("./src/app/component/content/log-editor/editor/content/type/css/log-editor-content-css.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LogEditorContentCssComponent);
    return LogEditorContentCssComponent;
}());



/***/ }),

/***/ "./src/app/component/content/log-editor/editor/content/type/impl/image-internal/log-editor-content-image-internal.component.css":
/***/ (function(module, exports) {

module.exports = ".selected {\n  border-top: 1px solid var(--main-color);\n}\n"

/***/ }),

/***/ "./src/app/component/content/log-editor/editor/content/type/impl/image-internal/log-editor-content-image-internal.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"selected\">ImageModel ID: {{imageInternalLogContent.imageModelID}}</div>\n<img src=\"{{imageInternalLogContent.imageModel.imageURL}}\">\n"

/***/ }),

/***/ "./src/app/component/content/log-editor/editor/content/type/impl/image-internal/log-editor-content-image-internal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogEditorContentImageInternalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_core_model_data_log_extra_log_content_type_image_internal_image_internal_log_content__ = __webpack_require__("./src/app/service/core/model/data/log/extra/log-content/type/image-internal/image-internal-log-content.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LogEditorContentImageInternalComponent = /** @class */ (function () {
    function LogEditorContentImageInternalComponent() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__service_core_model_data_log_extra_log_content_type_image_internal_image_internal_log_content__["a" /* ImageInternalLogContent */])
    ], LogEditorContentImageInternalComponent.prototype, "imageInternalLogContent", void 0);
    LogEditorContentImageInternalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-log-editor-content-image-internal',
            template: __webpack_require__("./src/app/component/content/log-editor/editor/content/type/impl/image-internal/log-editor-content-image-internal.component.html"),
            styles: [__webpack_require__("./src/app/component/content/log-editor/editor/content/type/impl/image-internal/log-editor-content-image-internal.component.css")]
        })
    ], LogEditorContentImageInternalComponent);
    return LogEditorContentImageInternalComponent;
}());



/***/ }),

/***/ "./src/app/component/content/log-editor/editor/content/type/impl/image-quote/log-editor-content-image-quote.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/component/content/log-editor/editor/content/type/impl/image-quote/log-editor-content-image-quote.component.html":
/***/ (function(module, exports) {

module.exports = "\n"

/***/ }),

/***/ "./src/app/component/content/log-editor/editor/content/type/impl/image-quote/log-editor-content-image-quote.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogEditorContentImageQuoteComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_core_model_data_log_extra_log_content_type_image_quote_image_quote_log_content__ = __webpack_require__("./src/app/service/core/model/data/log/extra/log-content/type/image-quote/image-quote-log-content.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LogEditorContentImageQuoteComponent = /** @class */ (function () {
    function LogEditorContentImageQuoteComponent() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__service_core_model_data_log_extra_log_content_type_image_quote_image_quote_log_content__["a" /* ImageQuoteLogContent */])
    ], LogEditorContentImageQuoteComponent.prototype, "imageQuoteLogData", void 0);
    LogEditorContentImageQuoteComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-log-editor-content-image-quote',
            template: __webpack_require__("./src/app/component/content/log-editor/editor/content/type/impl/image-quote/log-editor-content-image-quote.component.html"),
            styles: [__webpack_require__("./src/app/component/content/log-editor/editor/content/type/impl/image-quote/log-editor-content-image-quote.component.css")]
        })
    ], LogEditorContentImageQuoteComponent);
    return LogEditorContentImageQuoteComponent;
}());



/***/ }),

/***/ "./src/app/component/content/log-editor/editor/content/type/impl/text-code/log-editor-content-text-code.component.css":
/***/ (function(module, exports) {

module.exports = ".container {\n  border-top: 1px solid var(--main-color);\n}\n\ntextarea {\n  border-top: 1px solid var(--main-color);\n}\n"

/***/ }),

/***/ "./src/app/component/content/log-editor/editor/content/type/impl/text-code/log-editor-content-text-code.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <select #lang [(ngModel)]=\"textCodeLogData.language\">\n    <option value=\"\">unknown</option>\n    <option value=\"bsh\">Bash</option>\n    <option value=\"c\">C</option>\n    <option value=\"cc\">CC</option>\n    <option value=\"cpp\">C++</option>\n    <option value=\"cs\">C#</option>\n    <option value=\"csh\">C shell</option>\n    <option value=\"cyc\">CYC</option>\n    <option value=\"cv\">CV</option>\n    <option value=\"htm\">HTM</option>\n    <option value=\"html\">HTML</option>\n    <option value=\"java\">Java</option>\n    <option value=\"js\">Javascript</option>\n    <option value=\"m\">M</option>\n    <option value=\"mxml\">mXML</option>\n    <option value=\"perl\">Perl</option>\n    <option value=\"pl\">PL</option>\n    <option value=\"pm\">PM</option>\n    <option value=\"py\">Python</option>\n    <option value=\"rb\">Ruby</option>\n    <option value=\"sh\">Shell</option>\n    <option value=\"xhtml\">xHTML</option>\n    <option value=\"xml\">XML</option>\n    <option value=\"xsl\">XSL</option>\n  </select>\n  <input #lineNumbers type=\"checkbox\" [(ngModel)]=\"textCodeLogData.showLineNumber\"> show line numbers<br>\n  <textarea #text class=\"workspace-textarea\" [(ngModel)]=\"textCodeLogData.text\"></textarea>\n</div>\n"

/***/ }),

/***/ "./src/app/component/content/log-editor/editor/content/type/impl/text-code/log-editor-content-text-code.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogEditorContentTextCodeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_core_model_data_log_extra_log_content_type_text_code_text_code_log_content__ = __webpack_require__("./src/app/service/core/model/data/log/extra/log-content/type/text-code/text-code-log-content.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LogEditorContentTextCodeComponent = /** @class */ (function () {
    function LogEditorContentTextCodeComponent() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__service_core_model_data_log_extra_log_content_type_text_code_text_code_log_content__["a" /* TextCodeLogContent */])
    ], LogEditorContentTextCodeComponent.prototype, "textCodeLogData", void 0);
    LogEditorContentTextCodeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-log-editor-content-text-code',
            template: __webpack_require__("./src/app/component/content/log-editor/editor/content/type/impl/text-code/log-editor-content-text-code.component.html"),
            styles: [__webpack_require__("./src/app/component/content/log-editor/editor/content/type/impl/text-code/log-editor-content-text-code.component.css")]
        })
    ], LogEditorContentTextCodeComponent);
    return LogEditorContentTextCodeComponent;
}());



/***/ }),

/***/ "./src/app/component/content/log-editor/editor/content/type/impl/text-markdown/log-editor-content-text-markdown.component.css":
/***/ (function(module, exports) {

module.exports = "textarea {\n  border-top: 1px solid var(--main-color);\n}\n"

/***/ }),

/***/ "./src/app/component/content/log-editor/editor/content/type/impl/text-markdown/log-editor-content-text-markdown.component.html":
/***/ (function(module, exports) {

module.exports = "<textarea #text class=\"workspace-textarea\" [(ngModel)]=\"textMarkdownLogData.text\"></textarea>\n"

/***/ }),

/***/ "./src/app/component/content/log-editor/editor/content/type/impl/text-markdown/log-editor-content-text-markdown.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogEditorContentTextMarkdownComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_core_model_data_log_extra_log_content_type_text_markdown_text_markdown_log_content__ = __webpack_require__("./src/app/service/core/model/data/log/extra/log-content/type/text-markdown/text-markdown-log-content.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LogEditorContentTextMarkdownComponent = /** @class */ (function () {
    function LogEditorContentTextMarkdownComponent() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__service_core_model_data_log_extra_log_content_type_text_markdown_text_markdown_log_content__["a" /* TextMarkdownLogContent */])
    ], LogEditorContentTextMarkdownComponent.prototype, "textMarkdownLogData", void 0);
    LogEditorContentTextMarkdownComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-log-editor-content-text-markdown',
            template: __webpack_require__("./src/app/component/content/log-editor/editor/content/type/impl/text-markdown/log-editor-content-text-markdown.component.html"),
            styles: [__webpack_require__("./src/app/component/content/log-editor/editor/content/type/impl/text-markdown/log-editor-content-text-markdown.component.css")]
        })
    ], LogEditorContentTextMarkdownComponent);
    return LogEditorContentTextMarkdownComponent;
}());



/***/ }),

/***/ "./src/app/component/content/log-editor/editor/content/type/impl/text-plain/log-editor-content-text-plain.component.css":
/***/ (function(module, exports) {

module.exports = "textarea {\n  border-top: 1px solid var(--main-color);\n}\n"

/***/ }),

/***/ "./src/app/component/content/log-editor/editor/content/type/impl/text-plain/log-editor-content-text-plain.component.html":
/***/ (function(module, exports) {

module.exports = "<textarea #text class=\"workspace-textarea\" [(ngModel)]=\"textPlainLogData.text\"></textarea>\n"

/***/ }),

/***/ "./src/app/component/content/log-editor/editor/content/type/impl/text-plain/log-editor-content-text-plain.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogEditorContentTextPlainComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_core_model_data_log_extra_log_content_type_text_plain_text_plain_log_content__ = __webpack_require__("./src/app/service/core/model/data/log/extra/log-content/type/text-plain/text-plain-log-content.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LogEditorContentTextPlainComponent = /** @class */ (function () {
    function LogEditorContentTextPlainComponent() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__service_core_model_data_log_extra_log_content_type_text_plain_text_plain_log_content__["a" /* TextPlainLogContent */])
    ], LogEditorContentTextPlainComponent.prototype, "textPlainLogData", void 0);
    LogEditorContentTextPlainComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-log-editor-content-text-plain',
            template: __webpack_require__("./src/app/component/content/log-editor/editor/content/type/impl/text-plain/log-editor-content-text-plain.component.html"),
            styles: [__webpack_require__("./src/app/component/content/log-editor/editor/content/type/impl/text-plain/log-editor-content-text-plain.component.css")]
        })
    ], LogEditorContentTextPlainComponent);
    return LogEditorContentTextPlainComponent;
}());



/***/ }),

/***/ "./src/app/component/content/log-editor/editor/content/type/impl/text-quote/log-editor-content-text-quote.component.css":
/***/ (function(module, exports) {

module.exports = ".container {\n  border-top: 1px solid var(--main-color);\n}\n\ntextarea {\n  border-top: 1px solid var(--main-darker-color);\n}\n"

/***/ }),

/***/ "./src/app/component/content/log-editor/editor/content/type/impl/text-quote/log-editor-content-text-quote.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <input #input type=\"text\" [(ngModel)]=\"textQuoteLogData.sourceName\"><br>\n  <textarea #quote class=\"workspace-textarea\" [(ngModel)]=\"textQuoteLogData.text\"></textarea>\n</div>\n"

/***/ }),

/***/ "./src/app/component/content/log-editor/editor/content/type/impl/text-quote/log-editor-content-text-quote.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogEditorContentTextQuoteComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_core_model_data_log_extra_log_content_type_text_quote_text_quote_log_content__ = __webpack_require__("./src/app/service/core/model/data/log/extra/log-content/type/text-quote/text-quote-log-content.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LogEditorContentTextQuoteComponent = /** @class */ (function () {
    function LogEditorContentTextQuoteComponent() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__service_core_model_data_log_extra_log_content_type_text_quote_text_quote_log_content__["a" /* TextQuoteLogContent */])
    ], LogEditorContentTextQuoteComponent.prototype, "textQuoteLogData", void 0);
    LogEditorContentTextQuoteComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-log-editor-content-text-quote',
            template: __webpack_require__("./src/app/component/content/log-editor/editor/content/type/impl/text-quote/log-editor-content-text-quote.component.html"),
            styles: [__webpack_require__("./src/app/component/content/log-editor/editor/content/type/impl/text-quote/log-editor-content-text-quote.component.css")]
        })
    ], LogEditorContentTextQuoteComponent);
    return LogEditorContentTextQuoteComponent;
}());



/***/ }),

/***/ "./src/app/component/content/log-editor/editor/content/type/impl/twitter-tweet/log-editor-content-twitter-tweet.component.css":
/***/ (function(module, exports) {

module.exports = "input {\n  width: 100%;\n  height: 100%;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  border-top: 1px solid var(--main-color);\n}\n"

/***/ }),

/***/ "./src/app/component/content/log-editor/editor/content/type/impl/twitter-tweet/log-editor-content-twitter-tweet.component.html":
/***/ (function(module, exports) {

module.exports = "<input #input type=\"text\" (change)=\"onChange($event)\"><br>\n"

/***/ }),

/***/ "./src/app/component/content/log-editor/editor/content/type/impl/twitter-tweet/log-editor-content-twitter-tweet.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogEditorContentTwitterTweetComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_core_model_data_log_extra_log_content_type_twitter_tweet_twitter_tweet_log_content__ = __webpack_require__("./src/app/service/core/model/data/log/extra/log-content/type/twitter-tweet/twitter-tweet-log-content.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_twitter_twitter_service__ = __webpack_require__("./src/app/service/twitter/twitter.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LogEditorContentTwitterTweetComponent = /** @class */ (function () {
    function LogEditorContentTwitterTweetComponent(twitterService) {
        this.twitterService = twitterService;
    }
    LogEditorContentTwitterTweetComponent.prototype.ngAfterViewInit = function () {
        if (this.twitterTweetLogData) {
            this.input.nativeElement.value = this.twitterTweetLogData.url;
        }
    };
    LogEditorContentTwitterTweetComponent.prototype.onChange = function (event) {
        var url = event.srcElement.value;
        var id = this.twitterService.extractTweetIDFromURL(url);
        if (id !== undefined) {
            this.twitterTweetLogData.url = url;
            this.twitterTweetLogData.tweetID = id;
        }
        else {
            alert('invalid twitter url');
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__service_core_model_data_log_extra_log_content_type_twitter_tweet_twitter_tweet_log_content__["a" /* TwitterTweetLogContent */])
    ], LogEditorContentTwitterTweetComponent.prototype, "twitterTweetLogData", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('input'),
        __metadata("design:type", Object)
    ], LogEditorContentTwitterTweetComponent.prototype, "input", void 0);
    LogEditorContentTwitterTweetComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-log-editor-content-twitter-tweet',
            template: __webpack_require__("./src/app/component/content/log-editor/editor/content/type/impl/twitter-tweet/log-editor-content-twitter-tweet.component.html"),
            styles: [__webpack_require__("./src/app/component/content/log-editor/editor/content/type/impl/twitter-tweet/log-editor-content-twitter-tweet.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__service_twitter_twitter_service__["a" /* TwitterService */]])
    ], LogEditorContentTwitterTweetComponent);
    return LogEditorContentTwitterTweetComponent;
}());



/***/ }),

/***/ "./src/app/component/content/log-editor/editor/content/type/impl/video-youtube/log-editor-content-video-youtube.component.css":
/***/ (function(module, exports) {

module.exports = "input {\n  width: 100%;\n  height: 100%;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  border-top: 1px solid var(--main-color);\n}\n"

/***/ }),

/***/ "./src/app/component/content/log-editor/editor/content/type/impl/video-youtube/log-editor-content-video-youtube.component.html":
/***/ (function(module, exports) {

module.exports = "<input #input type=\"text\" (change)=\"onChange($event)\" placeholder=\"youtube video id\"><br>\n"

/***/ }),

/***/ "./src/app/component/content/log-editor/editor/content/type/impl/video-youtube/log-editor-content-video-youtube.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogEditorContentVideoYoutubeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_core_model_data_log_extra_log_content_type_video_youtube_video_youtube_log_content__ = __webpack_require__("./src/app/service/core/model/data/log/extra/log-content/type/video-youtube/video-youtube-log-content.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LogEditorContentVideoYoutubeComponent = /** @class */ (function () {
    function LogEditorContentVideoYoutubeComponent() {
    }
    LogEditorContentVideoYoutubeComponent.prototype.ngAfterViewInit = function () {
        if (this.videoYoutubeLogData) {
            this.input.nativeElement.value = 'https://www.youtube.com/watch?v=' + this.videoYoutubeLogData.videoID;
        }
    };
    LogEditorContentVideoYoutubeComponent.prototype.onChange = function (event) {
        var element = event.srcElement;
        this.videoYoutubeLogData.videoID = new URL(element.value).searchParams.get('v');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__service_core_model_data_log_extra_log_content_type_video_youtube_video_youtube_log_content__["a" /* VideoYoutubeLogContent */])
    ], LogEditorContentVideoYoutubeComponent.prototype, "videoYoutubeLogData", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('input'),
        __metadata("design:type", Object)
    ], LogEditorContentVideoYoutubeComponent.prototype, "input", void 0);
    LogEditorContentVideoYoutubeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-log-editor-content-video-youtube',
            template: __webpack_require__("./src/app/component/content/log-editor/editor/content/type/impl/video-youtube/log-editor-content-video-youtube.component.html"),
            styles: [__webpack_require__("./src/app/component/content/log-editor/editor/content/type/impl/video-youtube/log-editor-content-video-youtube.component.css")]
        })
    ], LogEditorContentVideoYoutubeComponent);
    return LogEditorContentVideoYoutubeComponent;
}());



/***/ }),

/***/ "./src/app/component/content/log-editor/editor/content/type/log-editor-content-container.component.css":
/***/ (function(module, exports) {

module.exports = ".container {\n  border-bottom: 1px solid var(--main-darker-color);\n  color: var(--main-darker-2-color);\n}\n\n.typed-log-data {\n  max-height: 1000px;\n  -webkit-transition: max-height 0.5s cubic-bezier(0, 1.05, 0, 1);\n  transition: max-height 0.5s cubic-bezier(0, 1.05, 0, 1);\n  height: auto;\n  overflow: hidden;\n  background-color: var(--main-lighter-color);\n}\n\n.typed-log-data-collapse {\n  max-height: 0;\n}\n\n.typed-log-data-none {\n  display: none;\n}\n\n.log-data-type-toolbar {\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: auto 90px 15px;\n      grid-template-columns: auto 90px 15px;\n  white-space: nowrap;\n  overflow: hidden;\n}\n\n.log-data-type-toolbar-name {\n  padding-left: 3px;\n}\n\n.log-data-type-toolbar-name:hover {\n  cursor: pointer;\n  color: var(--main-darker-3-color);\n}\n\n.fa-times {\n  font-size: 15px;\n  -ms-flex-item-align: center;\n      -ms-grid-row-align: center;\n      align-self: center;\n}\n\n.fa-times:hover {\n  color: var(--main-darker-3-color);\n}\n"

/***/ }),

/***/ "./src/app/component/content/log-editor/editor/content/type/log-editor-content-container.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"log-data-type-toolbar\">\n    <div class=\"log-data-type-toolbar-name\" (click)=\"toggle()\">\n      {{logContent.logContentType}}\n      <i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i>\n    </div>\n    <div>\n      tile display<input type=\"checkbox\" [ngModel]=\"logModel.logDisplayOverride.tile.logContentToDisplayIndex === index\"\n                         (change)=\"onChangeThisLogContentAsTileDisplay($event)\">\n    </div>\n    <i class=\"fa fa-times\" (click)=\"onDeleteThisLogContent()\" aria-hidden=\"true\"></i>\n  </div>\n  <div class=\"typed-log-data\" [ngClass]=\"{'typed-log-data-collapse': collapse, 'typed-log-data-none': displayNone}\">\n    <app-log-editor-content-css [logContent]=\"logContent\"></app-log-editor-content-css>\n    <app-log-editor-content-image-internal *ngIf=\"logContent.logContentType === 'ImageInternalLogContent'\"\n                                           [imageInternalLogContent]=\"logContent.data\"></app-log-editor-content-image-internal>\n    <app-log-editor-content-image-quote *ngIf=\"logContent.logContentType === 'ImageQuoteLogContent'\"\n                                        [imageQuoteLogData]=\"logContent.data\"></app-log-editor-content-image-quote>\n    <app-log-editor-content-text-code *ngIf=\"logContent.logContentType === 'TextCodeLogContent'\"\n                                      [textCodeLogData]=\"logContent.data\"></app-log-editor-content-text-code>\n    <app-log-editor-content-text-markdown *ngIf=\"logContent.logContentType === 'TextMarkdownLogContent'\"\n                                          [textMarkdownLogData]=\"logContent.data\"></app-log-editor-content-text-markdown>\n    <app-log-editor-content-text-plain *ngIf=\"logContent.logContentType === 'TextPlainLogContent'\"\n                                       [textPlainLogData]=\"logContent.data\"></app-log-editor-content-text-plain>\n    <app-log-editor-content-text-quote *ngIf=\"logContent.logContentType === 'TextQuoteLogContent'\"\n                                       [textQuoteLogData]=\"logContent.data\"></app-log-editor-content-text-quote>\n    <app-log-editor-content-video-youtube *ngIf=\"logContent.logContentType === 'VideoYouTubeLogData'\"\n                                          [videoYoutubeLogData]=\"logContent.data\"></app-log-editor-content-video-youtube>\n    <app-log-editor-content-twitter-tweet *ngIf=\"logContent.logContentType === 'TwitterTweetLogContent'\"\n                                          [twitterTweetLogData]=\"logContent.data\"></app-log-editor-content-twitter-tweet>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/component/content/log-editor/editor/content/type/log-editor-content-container.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogEditorContentContainerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_core_model_data_log_log_model__ = __webpack_require__("./src/app/service/core/model/data/log/log-model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_core_model_data_log_extra_log_content_log_content__ = __webpack_require__("./src/app/service/core/model/data/log/extra/log-content/log-content.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LogEditorContentContainerComponent = /** @class */ (function () {
    function LogEditorContentContainerComponent() {
        this.deleteThisLogContent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.collapse = true;
        this.displayNone = true;
    }
    // animate collapse then set css `display: none;` so sortable.js
    // doesn't ghost animate elements below the selected element
    LogEditorContentContainerComponent.prototype.toggle = function () {
        var _this = this;
        if (this.collapse) {
            clearTimeout(this.timeout);
            this.displayNone = false;
            this.collapse = false;
        }
        else {
            this.collapse = true;
            this.timeout = setTimeout(function () {
                _this.displayNone = true;
            }, 500);
        }
    };
    LogEditorContentContainerComponent.prototype.onDeleteThisLogContent = function () {
        this.updateLogContentTileDisplayIndex();
        this.deleteThisLogContent.emit(this.index);
    };
    LogEditorContentContainerComponent.prototype.updateLogContentTileDisplayIndex = function () {
        var tileDisplayIndex = this.logModel.logDisplayOverride.tile.logContentToDisplayIndex;
        if (tileDisplayIndex !== undefined) {
            if (tileDisplayIndex === this.index) {
                this.logModel.logDisplayOverride.tile.logContentToDisplayIndex = undefined;
            }
            else if (tileDisplayIndex > this.index) {
                this.logModel.logDisplayOverride.tile.logContentToDisplayIndex--;
            } // else no need to update logContentToDisplayIndex
        }
    };
    LogEditorContentContainerComponent.prototype.onChangeThisLogContentAsTileDisplay = function (event) {
        var checked = event.srcElement.checked;
        if (checked) {
            this.logModel.logDisplayOverride.tile.logContentToDisplayIndex = this.index;
        }
        else {
            this.logModel.logDisplayOverride.tile.logContentToDisplayIndex = undefined;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], LogEditorContentContainerComponent.prototype, "deleteThisLogContent", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], LogEditorContentContainerComponent.prototype, "index", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__service_core_model_data_log_extra_log_content_log_content__["a" /* LogContent */])
    ], LogEditorContentContainerComponent.prototype, "logContent", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__service_core_model_data_log_log_model__["a" /* LogModel */])
    ], LogEditorContentContainerComponent.prototype, "logModel", void 0);
    LogEditorContentContainerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-log-editor-content-container',
            template: __webpack_require__("./src/app/component/content/log-editor/editor/content/type/log-editor-content-container.component.html"),
            styles: [__webpack_require__("./src/app/component/content/log-editor/editor/content/type/log-editor-content-container.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LogEditorContentContainerComponent);
    return LogEditorContentContainerComponent;
}());



/***/ }),

/***/ "./src/app/component/content/log-editor/editor/log-editor.component.css":
/***/ (function(module, exports) {

module.exports = ".container {\n  width: 100%;\n  height: 100%;\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: 50% 50%;\n      grid-template-columns: 50% 50%;\n}\n\n.workspace {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; /* places border inside box */\n  border-right: 1px solid var(--main-darker-color);\n  overflow: scroll;\n  padding-bottom: 100px;\n}\n\n.result {\n  overflow: scroll;\n}\n"

/***/ }),

/***/ "./src/app/component/content/log-editor/editor/log-editor.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"workspace\">\n    <button class=\"print-raw\" (click)=\"consoleFileModelJSON()\">\n      <i class=\"fa fa-code\" aria-hidden=\"true\"></i>\n      Console Log Raw\n    </button>\n    <button class=\"print-raw\" (click)=\"onDoneEditing()\">\n      <i class=\"fa fa-floppy-o\" aria-hidden=\"true\"></i> save\n    </button>\n    <div class=\"metadata\">\n      <app-log-editor-metadata [(metadata)]=\"_logModel.metadata\"></app-log-editor-metadata>\n    </div>\n    <div class=\"data\">\n      <app-log-editor-organization [logModel]=\"_logModel\"></app-log-editor-organization>\n      <br>\n      <app-log-editor-contents [logModel]=\"_logModel\"></app-log-editor-contents>\n    </div>\n  </div>\n  <div class=\"result\">\n    <app-log-page [logModel]=\"_logModel\"></app-log-page>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/component/content/log-editor/editor/log-editor.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogEditorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_core_model_data_log_log_model__ = __webpack_require__("./src/app/service/core/model/data/log/log-model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_core_model_data_log_extra_log_type_override_extra_tile_log_model_override__ = __webpack_require__("./src/app/service/core/model/data/log/extra/log-type-override/extra/tile-log-model-override.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_core_model_data_log_extra_log_type_override_log_display_override__ = __webpack_require__("./src/app/service/core/model/data/log/extra/log-type-override/log-display-override.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_core_model_data_log_extra_log_content_log_content__ = __webpack_require__("./src/app/service/core/model/data/log/extra/log-content/log-content.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__service_core_model_data_log_extra_log_organization__ = __webpack_require__("./src/app/service/core/model/data/log/extra/log-organization.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__service_core_model_data_metadata__ = __webpack_require__("./src/app/service/core/model/data/metadata.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LogEditorComponent = /** @class */ (function () {
    function LogEditorComponent() {
        this.doneEditing = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    Object.defineProperty(LogEditorComponent.prototype, "logModel", {
        set: function (logModel) {
            this.updateLogModel(logModel);
        },
        enumerable: true,
        configurable: true
    });
    LogEditorComponent.prototype.ngOnInit = function () {
        this.updateLogModel(undefined);
    };
    LogEditorComponent.prototype.updateLogModel = function (logModel) {
        if (logModel != null) {
            this._logModel = this.scrubLogModel(logModel);
        }
        else {
            this._logModel = this.generateDefaultLogFileModel();
        }
    };
    LogEditorComponent.prototype.scrubLogModel = function (logModel) {
        var defaultLogModel = this.generateDefaultLogFileModel();
        if (logModel == null) {
            logModel = defaultLogModel;
        }
        else {
            if (logModel.metadata == null) {
                logModel.metadata = defaultLogModel.metadata;
            }
            if (logModel.logOrganization == null) {
                logModel.logOrganization = defaultLogModel.logOrganization;
            }
            else {
                if (logModel.logOrganization.parentLogIDs == null) {
                    logModel.logOrganization.parentLogIDs = defaultLogModel.logOrganization.parentLogIDs;
                }
                if (logModel.logOrganization.tagIDs == null) {
                    logModel.logOrganization.tagIDs = defaultLogModel.logOrganization.tagIDs;
                }
                if (logModel.logOrganization.childLogIDs == null) {
                    logModel.logOrganization.childLogIDs = defaultLogModel.logOrganization.childLogIDs;
                }
            }
            if (logModel.logContents == null) {
                logModel.logContents = defaultLogModel.logContents;
            }
            if (logModel.logDisplayOverride == null) {
                logModel.logDisplayOverride = defaultLogModel.logDisplayOverride;
            }
            else {
                if (logModel.logDisplayOverride.tile == null) {
                    logModel.logDisplayOverride.tile = defaultLogModel.logDisplayOverride.tile;
                }
            }
            if (logModel.ancestryLogModels == null) {
                logModel.ancestryLogModels = defaultLogModel.ancestryLogModels;
            }
        }
        return logModel;
    };
    LogEditorComponent.prototype.generateDefaultLogFileModel = function () {
        var logModel = new __WEBPACK_IMPORTED_MODULE_1__service_core_model_data_log_log_model__["a" /* LogModel */]();
        var metadata = new __WEBPACK_IMPORTED_MODULE_6__service_core_model_data_metadata__["a" /* Metadata */]();
        metadata.name = 'Name';
        metadata.description = 'description';
        metadata.created = +new Date();
        logModel.metadata = metadata;
        logModel.logOrganization = new __WEBPACK_IMPORTED_MODULE_5__service_core_model_data_log_extra_log_organization__["a" /* LogOrganization */]();
        logModel.logOrganization.tagIDs = [];
        logModel.logOrganization.parentLogIDs = [];
        logModel.logOrganization.childLogIDs = [];
        logModel.logContents = [
            __WEBPACK_IMPORTED_MODULE_4__service_core_model_data_log_extra_log_content_log_content__["a" /* LogContent */].defaultHeader(),
            __WEBPACK_IMPORTED_MODULE_4__service_core_model_data_log_extra_log_content_log_content__["a" /* LogContent */].defaultChildLogs(),
            __WEBPACK_IMPORTED_MODULE_4__service_core_model_data_log_extra_log_content_log_content__["a" /* LogContent */].defaultComment(),
        ];
        logModel.logDisplayOverride = new __WEBPACK_IMPORTED_MODULE_3__service_core_model_data_log_extra_log_type_override_log_display_override__["a" /* LogDisplayOverride */]();
        logModel.logDisplayOverride.tile = new __WEBPACK_IMPORTED_MODULE_2__service_core_model_data_log_extra_log_type_override_extra_tile_log_model_override__["a" /* TileLogModelOverride */]();
        logModel.ancestryLogModels = [];
        return logModel;
    };
    LogEditorComponent.prototype.onDoneEditing = function () {
        this.doneEditing.emit(this._logModel);
    };
    LogEditorComponent.prototype.consoleFileModelJSON = function () {
        // this would be a deep clone (const clone = this.tagModel) wont work
        // bc setting clone undefined would actually undefine this.tagModel
        var clone = JSON.parse(JSON.stringify(this._logModel));
        // cleanup unnecessary fields
        clone.metadata.created = undefined;
        clone.tagModels = undefined;
        clone.parentLogModels = undefined;
        clone.numLogContents = undefined;
        clone.logContents.map(function (logContent) {
            if (logContent.logContentType === 'ImageInternalLogContent') {
                logContent.data.imageModel = undefined;
            }
        });
        console.log(JSON.stringify(clone, null, '\t'));
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__service_core_model_data_log_log_model__["a" /* LogModel */]),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_core_model_data_log_log_model__["a" /* LogModel */]])
    ], LogEditorComponent.prototype, "logModel", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], LogEditorComponent.prototype, "doneEditing", void 0);
    LogEditorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-log-editor',
            template: __webpack_require__("./src/app/component/content/log-editor/editor/log-editor.component.html"),
            styles: [__webpack_require__("./src/app/component/content/log-editor/editor/log-editor.component.css")]
        })
    ], LogEditorComponent);
    return LogEditorComponent;
}());



/***/ }),

/***/ "./src/app/component/content/log-editor/editor/metadata/log-editor-metadata.component.css":
/***/ (function(module, exports) {

module.exports = ".container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n\ninput {\n  text-align: center;\n}\n\n.input-description {\n  width: calc(100% - 10px);\n}\n"

/***/ }),

/***/ "./src/app/component/content/log-editor/editor/metadata/log-editor-metadata.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <input type=\"text\" [(ngModel)]=\"metadata.name\" placeholder=\"name\">\n  <input class=\"input-description\" type=\"text\" [(ngModel)]=\"metadata.description\" placeholder=\"description\">\n</div>\n"

/***/ }),

/***/ "./src/app/component/content/log-editor/editor/metadata/log-editor-metadata.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogEditorMetadataComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_core_model_data_metadata__ = __webpack_require__("./src/app/service/core/model/data/metadata.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LogEditorMetadataComponent = /** @class */ (function () {
    function LogEditorMetadataComponent() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__service_core_model_data_metadata__["a" /* Metadata */])
    ], LogEditorMetadataComponent.prototype, "metadata", void 0);
    LogEditorMetadataComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-log-editor-metadata',
            template: __webpack_require__("./src/app/component/content/log-editor/editor/metadata/log-editor-metadata.component.html"),
            styles: [__webpack_require__("./src/app/component/content/log-editor/editor/metadata/log-editor-metadata.component.css")]
        })
    ], LogEditorMetadataComponent);
    return LogEditorMetadataComponent;
}());



/***/ }),

/***/ "./src/app/component/content/log-editor/editor/organization/directory/log-editor-organization-directory.component.css":
/***/ (function(module, exports) {

module.exports = ".fa-folder-open {\n  color: var(--main-darker-2-color);\n}\n\n.fa-folder-open:hover {\n  cursor: pointer;\n  color: var(--main-darker-3-color);\n}\n\n.selected-directories {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n\n.unselected-directories {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  overflow: scroll;\n}\n\n.directory {\n  display: inline-block;\n  color: var(--main-lighter-color);\n  background-color: var(--main-darker-color);\n  border-radius: 3px;\n  padding-left: 3px;\n  padding-right: 3px;\n  margin: 3px;\n}\n\n.directory > i {\n  /* text font border */\n  -webkit-text-fill-color: var(--main-lighter-color); /* Will override color (regardless of order) */\n  -webkit-text-stroke-width: 1px;\n  -webkit-text-stroke-color: var(--main-darker-2-color);\n}\n\n.directory > i:hover {\n  cursor: pointer;\n  -webkit-text-fill-color: var(--main-darker-2-color);\n}\n\n.directory-select-container {\n  height: 100px;\n  border-bottom: 1px solid var(--main-darker-color);\n}\n\n.directory-select-container-close {\n  height: 15px;\n  background-color: var(--main-darker-color);\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: auto 15px;\n      grid-template-columns: auto 15px;\n}\n\n.directory-select-container-close > i {\n  color: var(--main-darker-2-color);\n}\n\n.directory-select-container-close > i:hover {\n  cursor: pointer;\n  color: var(--main-darker-3-color);\n}\n\n.directory-select-container-content {\n  height: calc(100% - 15px);\n}\n"

/***/ }),

/***/ "./src/app/component/content/log-editor/editor/organization/directory/log-editor-organization-directory.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"selected-directories\">\n  <i class=\"fa fa-folder-open\" aria-hidden=\"true\" (click)=\"toggleDirectorySelector()\"></i>\n  <div class=\"directory\" *ngFor=\"let directoryModel of logModel.parentLogModels; let i = index\">\n    {{directoryModel.metadata.name}}\n    <i class=\"fa fa-times\" aria-hidden=\"true\" (click)=\"onParentLogModelUnSelect(i)\"></i>\n  </div>\n</div>\n<div *ngIf=\"showSelector\" class=\"directory-select-container\">\n  <div class=\"directory-select-container-close\">\n    <div></div>\n    <i class=\"fa fa-times\" aria-hidden=\"true\" (click)=\"closeDirectorySelector()\"></i>\n  </div>\n  <div class=\"directory-select-container-content\">\n    <app-log-selector [logModelIDsToHide]=\"[logModel.id]\" (logModelSelectedAgain)=\"selectedParentLogModel($event)\">\n    </app-log-selector>\n  </div>\n</div>\n\n\n\n"

/***/ }),

/***/ "./src/app/component/content/log-editor/editor/organization/directory/log-editor-organization-directory.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogEditorOrganizationDirectoryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_core_model_data_log_log_model__ = __webpack_require__("./src/app/service/core/model/data/log/log-model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__widget_core_log_selector_log_selector_component__ = __webpack_require__("./src/app/component/widget/core/log/selector/log-selector.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LogEditorOrganizationDirectoryComponent = /** @class */ (function () {
    function LogEditorOrganizationDirectoryComponent() {
    }
    LogEditorOrganizationDirectoryComponent.prototype.ngOnInit = function () {
        this.showSelector = false;
        if (this.logModel.logOrganization.parentLogIDs === undefined) {
            this.logModel.logOrganization.parentLogIDs = [];
        }
        if (this.logModel.parentLogModels === undefined) {
            this.logModel.parentLogModels = [];
        }
    };
    LogEditorOrganizationDirectoryComponent.prototype.toggleDirectorySelector = function () {
        this.showSelector = !this.showSelector;
    };
    LogEditorOrganizationDirectoryComponent.prototype.closeDirectorySelector = function () {
        this.showSelector = false;
    };
    LogEditorOrganizationDirectoryComponent.prototype.selectedParentLogModel = function (parentLogModel) {
        this.onParentLogModelUnSelect(0);
        if (!this.logModel.logOrganization.parentLogIDs.includes(parentLogModel.id)) {
            this.logModel.parentLogModels.push(parentLogModel);
            this.logModel.logOrganization.parentLogIDs.push(parentLogModel.id);
            this.logModel.ancestryLogModels = this.logSelectorComponent.getPathLogModels();
        }
    };
    LogEditorOrganizationDirectoryComponent.prototype.onParentLogModelUnSelect = function (index) {
        this.logModel.parentLogModels.splice(index, 1);
        this.logModel.logOrganization.parentLogIDs = Array.from(this.logModel.parentLogModels, function (logModel) { return logModel.id; });
        this.logModel.ancestryLogModels.splice(0, this.logModel.ancestryLogModels.length);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__service_core_model_data_log_log_model__["a" /* LogModel */])
    ], LogEditorOrganizationDirectoryComponent.prototype, "logModel", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2__widget_core_log_selector_log_selector_component__["a" /* LogSelectorComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__widget_core_log_selector_log_selector_component__["a" /* LogSelectorComponent */])
    ], LogEditorOrganizationDirectoryComponent.prototype, "logSelectorComponent", void 0);
    LogEditorOrganizationDirectoryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-log-editor-organization-directory',
            template: __webpack_require__("./src/app/component/content/log-editor/editor/organization/directory/log-editor-organization-directory.component.html"),
            styles: [__webpack_require__("./src/app/component/content/log-editor/editor/organization/directory/log-editor-organization-directory.component.css")]
        })
    ], LogEditorOrganizationDirectoryComponent);
    return LogEditorOrganizationDirectoryComponent;
}());



/***/ }),

/***/ "./src/app/component/content/log-editor/editor/organization/log-editor-organization.component.css":
/***/ (function(module, exports) {

module.exports = ".label {\n  text-align: center;\n}\n"

/***/ }),

/***/ "./src/app/component/content/log-editor/editor/organization/log-editor-organization.component.html":
/***/ (function(module, exports) {

module.exports = "<app-log-editor-organization-directory [logModel]=\"logModel\"></app-log-editor-organization-directory>\n<app-log-editor-organization-tag [logModel]=\"logModel\"></app-log-editor-organization-tag>\n"

/***/ }),

/***/ "./src/app/component/content/log-editor/editor/organization/log-editor-organization.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogEditorOrganizationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_core_model_data_log_log_model__ = __webpack_require__("./src/app/service/core/model/data/log/log-model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LogEditorOrganizationComponent = /** @class */ (function () {
    function LogEditorOrganizationComponent() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__service_core_model_data_log_log_model__["a" /* LogModel */])
    ], LogEditorOrganizationComponent.prototype, "logModel", void 0);
    LogEditorOrganizationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-log-editor-organization',
            template: __webpack_require__("./src/app/component/content/log-editor/editor/organization/log-editor-organization.component.html"),
            styles: [__webpack_require__("./src/app/component/content/log-editor/editor/organization/log-editor-organization.component.css")]
        })
    ], LogEditorOrganizationComponent);
    return LogEditorOrganizationComponent;
}());



/***/ }),

/***/ "./src/app/component/content/log-editor/editor/organization/tag/log-editor-organization-tag.component.css":
/***/ (function(module, exports) {

module.exports = ".selected-tags {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n\n.tag {\n  display: inline-block;\n  color: var(--main-lighter-color);\n  background-color: var(--main-darker-color);\n  border-radius: 3px;\n  padding-left: 3px;\n  padding-right: 3px;\n  margin: 3px;\n}\n\n.tag > i {\n  /* text font border */\n  -webkit-text-fill-color: var(--main-lighter-color); /* Will override color (regardless of order) */\n  -webkit-text-stroke-width: 1px;\n  -webkit-text-stroke-color: var(--main-darker-2-color);\n}\n\n.tag > i:hover {\n  cursor: pointer;\n  -webkit-text-fill-color: var(--main-darker-2-color);\n}\n\n.tag-select-container {\n  height: 100px;\n}\n\n.fa-tags {\n  color: var(--main-darker-2-color);\n}\n\n.fa-tags:hover {\n  cursor: pointer;\n  color: var(--main-darker-3-color);\n}\n\n"

/***/ }),

/***/ "./src/app/component/content/log-editor/editor/organization/tag/log-editor-organization-tag.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"selected-tags\">\n  <i class=\"fa fa-tags\" aria-hidden=\"true\" (click)=\"toggleTagSelector()\"></i>\n  <div class=\"tag no_selection\" *ngFor=\"let selectedTagModel of logModel.tagModels; let i = index\">\n    {{selectedTagModel.metadata.name}}\n    <i class=\"fa fa-times\" aria-hidden=\"true\" (click)=\"onTagModelUnSelect(i)\"></i>\n  </div>\n</div>\n<div *ngIf=\"showTagSelector\" class=\"tag-select-container\">\n  <app-tag-widget (tagModelSelected)=\"onTagModelSelected($event)\"\n                  (close)=\"closeTagSelector()\"\n                  [hideTagModelIDs]=\"logModel.logOrganization.tagIDs\"></app-tag-widget>\n</div>\n"

/***/ }),

/***/ "./src/app/component/content/log-editor/editor/organization/tag/log-editor-organization-tag.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogEditorOrganizationTagComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_core_model_data_log_log_model__ = __webpack_require__("./src/app/service/core/model/data/log/log-model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LogEditorOrganizationTagComponent = /** @class */ (function () {
    function LogEditorOrganizationTagComponent() {
    }
    LogEditorOrganizationTagComponent.prototype.ngOnInit = function () {
        if (this.logModel.logOrganization.tagIDs === undefined) {
            this.logModel.logOrganization.tagIDs = [];
        }
        if (this.logModel.tagModels === undefined) {
            this.logModel.tagModels = [];
        }
        this.showTagSelector = false;
    };
    LogEditorOrganizationTagComponent.prototype.toggleTagSelector = function () {
        this.showTagSelector = !this.showTagSelector;
    };
    LogEditorOrganizationTagComponent.prototype.closeTagSelector = function () {
        this.showTagSelector = false;
    };
    LogEditorOrganizationTagComponent.prototype.onTagModelSelected = function (selectedTagModel) {
        this.logModel.tagModels.push(selectedTagModel);
        this.logModel.tagModels.sort(function (a, b) {
            return a.metadata.name.localeCompare(b.metadata.name);
        });
        this.logModel.logOrganization.tagIDs = Array.from(this.logModel.tagModels, function (tagModel) { return tagModel.id; });
    };
    LogEditorOrganizationTagComponent.prototype.onTagModelUnSelect = function (index) {
        this.logModel.tagModels.splice(index, 1);
        this.logModel.logOrganization.tagIDs.splice(index, 1);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__service_core_model_data_log_log_model__["a" /* LogModel */])
    ], LogEditorOrganizationTagComponent.prototype, "logModel", void 0);
    LogEditorOrganizationTagComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-log-editor-organization-tag',
            template: __webpack_require__("./src/app/component/content/log-editor/editor/organization/tag/log-editor-organization-tag.component.html"),
            styles: [__webpack_require__("./src/app/component/content/log-editor/editor/organization/tag/log-editor-organization-tag.component.css")]
        })
    ], LogEditorOrganizationTagComponent);
    return LogEditorOrganizationTagComponent;
}());



/***/ }),

/***/ "./src/app/component/content/log-editor/log-create.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/component/content/log-editor/log-create.component.html":
/***/ (function(module, exports) {

module.exports = "<app-log-editor (doneEditing)=\"doneEditing($event)\"></app-log-editor>\n"

/***/ }),

/***/ "./src/app/component/content/log-editor/log-create.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogCreateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_core_endpoint_log_log_model_service__ = __webpack_require__("./src/app/service/core/endpoint/log/log-model.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LogCreateComponent = /** @class */ (function () {
    function LogCreateComponent(router, logModelService) {
        this.router = router;
        this.logModelService = logModelService;
    }
    LogCreateComponent.prototype.doneEditing = function (fileModel) {
        var _this = this;
        this.logModelService.create(fileModel).subscribe(function (savedModel) {
            _this.router.navigate(['/log-page/' + savedModel.id]);
        });
    };
    LogCreateComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("./src/app/component/content/log-editor/log-create.component.html"),
            styles: [__webpack_require__("./src/app/component/content/log-editor/log-create.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__service_core_endpoint_log_log_model_service__["a" /* LogModelService */]])
    ], LogCreateComponent);
    return LogCreateComponent;
}());



/***/ }),

/***/ "./src/app/component/content/log-editor/log-update.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/component/content/log-editor/log-update.component.html":
/***/ (function(module, exports) {

module.exports = "<app-log-editor [logModel]=\"fileModel\" (doneEditing)=\"doneEditing($event)\"></app-log-editor>\n"

/***/ }),

/***/ "./src/app/component/content/log-editor/log-update.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogUpdateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_core_endpoint_log_log_model_service__ = __webpack_require__("./src/app/service/core/endpoint/log/log-model.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_core_model_data_log_extra_log_display_type__ = __webpack_require__("./src/app/service/core/model/data/log/extra/log-display-type.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LogUpdateComponent = /** @class */ (function () {
    function LogUpdateComponent(router, activatedRoute, logModelService) {
        var _this = this;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.logModelService = logModelService;
        activatedRoute.params.subscribe(function (params) { return _this.initialize(params); });
    }
    LogUpdateComponent.prototype.initialize = function (params) {
        var _this = this;
        // grab value of url param `id` in `localhost:4200/file/update/:id
        var id = params['id'];
        if (!!id) {
            this.logModelService.findOne(id, __WEBPACK_IMPORTED_MODULE_3__service_core_model_data_log_extra_log_display_type__["a" /* LogDisplayType */].FORUPDATE, __WEBPACK_IMPORTED_MODULE_3__service_core_model_data_log_extra_log_display_type__["a" /* LogDisplayType */].TILE).subscribe(function (fileModel) {
                _this.fileModel = fileModel;
            });
        }
    };
    LogUpdateComponent.prototype.doneEditing = function (fileModel) {
        var _this = this;
        this.logModelService.update(fileModel).subscribe(function (savedModel) {
            _this.router.navigate(['/log-page/' + savedModel.id]);
        });
    };
    LogUpdateComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("./src/app/component/content/log-editor/log-update.component.html"),
            styles: [__webpack_require__("./src/app/component/content/log-editor/log-update.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__service_core_endpoint_log_log_model_service__["a" /* LogModelService */]])
    ], LogUpdateComponent);
    return LogUpdateComponent;
}());



/***/ }),

/***/ "./src/app/component/content/log-page/page-id/log-page-id.component.css":
/***/ (function(module, exports) {

module.exports = "\n"

/***/ }),

/***/ "./src/app/component/content/log-page/page-id/log-page-id.component.html":
/***/ (function(module, exports) {

module.exports = "<app-log-page [logModel]=\"logModel\"></app-log-page>\n"

/***/ }),

/***/ "./src/app/component/content/log-page/page-id/log-page-id.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogPageIdComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_core_endpoint_log_log_model_service__ = __webpack_require__("./src/app/service/core/endpoint/log/log-model.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_core_model_data_log_extra_log_display_type__ = __webpack_require__("./src/app/service/core/model/data/log/extra/log-display-type.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LogPageIdComponent = /** @class */ (function () {
    function LogPageIdComponent(logFileService, activatedRoute) {
        var _this = this;
        this.logFileService = logFileService;
        this.activatedRoute = activatedRoute;
        activatedRoute.params.subscribe(function (params) { return _this.initialize(params); });
    }
    LogPageIdComponent.prototype.initialize = function (params) {
        var _this = this;
        // grab value of url param `id` in `localhost:4200/log-page/:id
        var id = params['id'];
        if (!!id) {
            this.logFileService.findOne(id, __WEBPACK_IMPORTED_MODULE_4__service_core_model_data_log_extra_log_display_type__["a" /* LogDisplayType */].PAGE, __WEBPACK_IMPORTED_MODULE_4__service_core_model_data_log_extra_log_display_type__["a" /* LogDisplayType */].TILE).subscribe(function (fileModel) {
                _this.logModel = fileModel;
            });
        }
    };
    LogPageIdComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-log-page-id',
            template: __webpack_require__("./src/app/component/content/log-page/page-id/log-page-id.component.html"),
            styles: [__webpack_require__("./src/app/component/content/log-page/page-id/log-page-id.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__service_core_endpoint_log_log_model_service__["a" /* LogModelService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], LogPageIdComponent);
    return LogPageIdComponent;
}());



/***/ }),

/***/ "./src/app/component/content/log-page/page/log-content/log-content-type.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/component/content/log-page/page/log-content/log-content-type.component.html":
/***/ (function(module, exports) {

module.exports = "<div [ngStyle]=\"logContent.css\">\n  <app-log-content-descendant-logs-section *ngIf=\"logContent.logContentType === 'DescendantLogsSectionLogContent'\"\n                                           [logModel]=\"logModel\"></app-log-content-descendant-logs-section>\n  <app-log-content-child-logs-section *ngIf=\"logContent.logContentType === 'ChildLogsSectionLogContent'\"\n                                      [logModel]=\"logModel\"></app-log-content-child-logs-section>\n  <app-log-content-header-section *ngIf=\"logContent.logContentType === 'HeaderSectionLogContent'\"\n                                  [logModel]=\"logModel\"></app-log-content-header-section>\n  <app-log-content-comment-section *ngIf=\"logContent.logContentType === 'CommentSectionLogContent'\"\n                                   [logModel]=\"logModel\"></app-log-content-comment-section>\n  <app-log-content-image-default *ngIf=\"logContent.logContentType === 'ImageInternalLogContent'\"\n                                 [data]=\"logContent.data\"></app-log-content-image-default>\n  <app-log-content-text-code-default *ngIf=\"logContent.logContentType === 'TextCodeLogContent'\"\n                                     [data]=\"logContent.data\"></app-log-content-text-code-default>\n  <app-log-content-text-markdown-default *ngIf=\"logContent.logContentType === 'TextMarkdownLogContent'\"\n                                         [data]=\"logContent.data\"></app-log-content-text-markdown-default>\n  <app-log-content-text-plain-default *ngIf=\"logContent.logContentType === 'TextPlainLogContent'\"\n                                      [data]=\"logContent.data\"></app-log-content-text-plain-default>\n  <app-log-content-text-quote-default *ngIf=\"logContent.logContentType === 'TextQuoteLogContent'\"\n                                      [data]=\"logContent.data\"></app-log-content-text-quote-default>\n  <app-log-content-video-youtube-default *ngIf=\"logContent.logContentType === 'VideoYouTubeLogContent'\"\n                                         [data]=\"logContent.data\"></app-log-content-video-youtube-default>\n  <app-twitter *ngIf=\"logContent.logContentType === 'TwitterTweetLogContent'\"\n               [tweetID]=\"logContent.data.tweetID\"></app-twitter>\n</div>\n"

/***/ }),

/***/ "./src/app/component/content/log-page/page/log-content/log-content-type.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogContentTypeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_switchMap__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_core_model_data_log_log_model__ = __webpack_require__("./src/app/service/core/model/data/log/log-model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_core_model_data_log_extra_log_content_log_content__ = __webpack_require__("./src/app/service/core/model/data/log/extra/log-content/log-content.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LogContentTypeComponent = /** @class */ (function () {
    function LogContentTypeComponent() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__service_core_model_data_log_log_model__["a" /* LogModel */])
    ], LogContentTypeComponent.prototype, "logModel", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__service_core_model_data_log_extra_log_content_log_content__["a" /* LogContent */])
    ], LogContentTypeComponent.prototype, "logContent", void 0);
    LogContentTypeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-log-content-type',
            template: __webpack_require__("./src/app/component/content/log-page/page/log-content/log-content-type.component.html"),
            styles: [__webpack_require__("./src/app/component/content/log-page/page/log-content/log-content-type.component.css")]
        })
    ], LogContentTypeComponent);
    return LogContentTypeComponent;
}());



/***/ }),

/***/ "./src/app/component/content/log-page/page/log-content/section/log-content-child-logs-section/log-content-child-logs-section.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/component/content/log-page/page/log-content/section/log-content-child-logs-section/log-content-child-logs-section.component.html":
/***/ (function(module, exports) {

module.exports = "<app-masonry *ngIf=\"displayChildLogs\" [logModelsObservable]=\"logModelsObservable\" [showSpinner]=\"false\"></app-masonry>\n"

/***/ }),

/***/ "./src/app/component/content/log-page/page/log-content/section/log-content-child-logs-section/log-content-child-logs-section.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogContentChildLogsSectionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_core_model_data_log_log_model__ = __webpack_require__("./src/app/service/core/model/data/log/log-model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__log_tile_masonry_masonry_component__ = __webpack_require__("./src/app/component/content/log-tile/masonry/masonry.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LogContentChildLogsSectionComponent = /** @class */ (function () {
    function LogContentChildLogsSectionComponent() {
        this.displayChildLogs = false;
    }
    Object.defineProperty(LogContentChildLogsSectionComponent.prototype, "logModel", {
        set: function (logModel) {
            this.initialize(logModel);
        },
        enumerable: true,
        configurable: true
    });
    LogContentChildLogsSectionComponent.prototype.initialize = function (logModel) {
        // reset masonry
        if (!!this.masonryComponent) {
            this.masonryComponent.initialize();
        }
        if (!!logModel) {
            this.displayChildLogs = logModel.logOrganization.childLogIDs != null && logModel.logOrganization.childLogIDs.length > 0;
            if (this.displayChildLogs) {
                this.logModelsObservable = Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__["a" /* of */])(logModel.childLogModels);
            }
        }
        else {
            this.displayChildLogs = false;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_3__log_tile_masonry_masonry_component__["a" /* MasonryComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__log_tile_masonry_masonry_component__["a" /* MasonryComponent */])
    ], LogContentChildLogsSectionComponent.prototype, "masonryComponent", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__service_core_model_data_log_log_model__["a" /* LogModel */]),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__service_core_model_data_log_log_model__["a" /* LogModel */]])
    ], LogContentChildLogsSectionComponent.prototype, "logModel", null);
    LogContentChildLogsSectionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-log-content-child-logs-section',
            template: __webpack_require__("./src/app/component/content/log-page/page/log-content/section/log-content-child-logs-section/log-content-child-logs-section.component.html"),
            styles: [__webpack_require__("./src/app/component/content/log-page/page/log-content/section/log-content-child-logs-section/log-content-child-logs-section.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LogContentChildLogsSectionComponent);
    return LogContentChildLogsSectionComponent;
}());



/***/ }),

/***/ "./src/app/component/content/log-page/page/log-content/section/log-content-comment-section/log-content-comment-section.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/component/content/log-page/page/log-content/section/log-content-comment-section/log-content-comment-section.component.html":
/***/ (function(module, exports) {

module.exports = "<disqus [identifier]=\"logModel.id\"></disqus>\n"

/***/ }),

/***/ "./src/app/component/content/log-page/page/log-content/section/log-content-comment-section/log-content-comment-section.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogContentCommentSectionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_core_model_data_log_log_model__ = __webpack_require__("./src/app/service/core/model/data/log/log-model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LogContentCommentSectionComponent = /** @class */ (function () {
    function LogContentCommentSectionComponent() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__service_core_model_data_log_log_model__["a" /* LogModel */])
    ], LogContentCommentSectionComponent.prototype, "logModel", void 0);
    LogContentCommentSectionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-log-content-comment-section',
            template: __webpack_require__("./src/app/component/content/log-page/page/log-content/section/log-content-comment-section/log-content-comment-section.component.html"),
            styles: [__webpack_require__("./src/app/component/content/log-page/page/log-content/section/log-content-comment-section/log-content-comment-section.component.css")]
        })
    ], LogContentCommentSectionComponent);
    return LogContentCommentSectionComponent;
}());



/***/ }),

/***/ "./src/app/component/content/log-page/page/log-content/section/log-content-descendant-logs-section/log-content-descendant-logs-section.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/component/content/log-page/page/log-content/section/log-content-descendant-logs-section/log-content-descendant-logs-section.component.html":
/***/ (function(module, exports) {

module.exports = "<app-masonry [logModelsObservable]=\"logModelsObservable\" (getMoreFiles)=\"getMoreFiles()\"></app-masonry>\n"

/***/ }),

/***/ "./src/app/component/content/log-page/page/log-content/section/log-content-descendant-logs-section/log-content-descendant-logs-section.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogContentDescendantLogsSectionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_core_model_data_log_log_model__ = __webpack_require__("./src/app/service/core/model/data/log/log-model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_core_model_request_pageable__ = __webpack_require__("./src/app/service/core/model/request/pageable.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_core_model_request_sort__ = __webpack_require__("./src/app/service/core/model/request/sort.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_core_endpoint_log_log_getter_request__ = __webpack_require__("./src/app/service/core/endpoint/log/log-getter-request.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__service_core_model_data_log_extra_log_display_type__ = __webpack_require__("./src/app/service/core/model/data/log/extra/log-display-type.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__service_core_endpoint_log_log_model_service__ = __webpack_require__("./src/app/service/core/endpoint/log/log-model.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__service_core_model_request_sort_order__ = __webpack_require__("./src/app/service/core/model/request/sort-order.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__log_tile_masonry_masonry_component__ = __webpack_require__("./src/app/component/content/log-tile/masonry/masonry.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var LogContentDescendantLogsSectionComponent = /** @class */ (function () {
    function LogContentDescendantLogsSectionComponent(logModelService) {
        this.logModelService = logModelService;
    }
    Object.defineProperty(LogContentDescendantLogsSectionComponent.prototype, "logModel", {
        set: function (logModel) {
            this.initialize(logModel);
        },
        enumerable: true,
        configurable: true
    });
    LogContentDescendantLogsSectionComponent.prototype.initialize = function (logModel) {
        var _this = this;
        // reset masonry
        if (!!this.masonryComponent) {
            this.masonryComponent.initialize();
        }
        this.moreFilesExist = true;
        this.isEmptyResponse = false;
        this.getterRequest = this.generateGetterRequest(logModel);
        this.getMoreFiles();
        this.logModelsObservable.subscribe(function (logModels) {
            if (logModels.length === 0) {
                _this.isEmptyResponse = true;
            }
        });
    };
    LogContentDescendantLogsSectionComponent.prototype.generateGetterRequest = function (logModel) {
        var getterRequest = new __WEBPACK_IMPORTED_MODULE_4__service_core_endpoint_log_log_getter_request__["a" /* LogGetterRequest */]();
        getterRequest.createdBefore = new Date().getTime();
        getterRequest.pageable = new __WEBPACK_IMPORTED_MODULE_2__service_core_model_request_pageable__["a" /* Pageable */](-1, 10);
        getterRequest.sorts = [new __WEBPACK_IMPORTED_MODULE_3__service_core_model_request_sort__["a" /* Sort */]('metadata.created', __WEBPACK_IMPORTED_MODULE_7__service_core_model_request_sort_order__["a" /* SortOrder */].desc)];
        getterRequest.logDisplayType = __WEBPACK_IMPORTED_MODULE_5__service_core_model_data_log_extra_log_display_type__["a" /* LogDisplayType */].TILE;
        getterRequest.ancestryLogID = logModel.id;
        return getterRequest;
    };
    /**
     * called from MasonryComponent child
     */
    LogContentDescendantLogsSectionComponent.prototype.getMoreFiles = function () {
        this.getterRequest.pageable.page++;
        this.logModelsObservable = this.logModelService.theGetter(this.getterRequest);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__service_core_model_data_log_log_model__["a" /* LogModel */]),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_core_model_data_log_log_model__["a" /* LogModel */]])
    ], LogContentDescendantLogsSectionComponent.prototype, "logModel", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_8__log_tile_masonry_masonry_component__["a" /* MasonryComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_8__log_tile_masonry_masonry_component__["a" /* MasonryComponent */])
    ], LogContentDescendantLogsSectionComponent.prototype, "masonryComponent", void 0);
    LogContentDescendantLogsSectionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-log-content-descendant-logs-section',
            template: __webpack_require__("./src/app/component/content/log-page/page/log-content/section/log-content-descendant-logs-section/log-content-descendant-logs-section.component.html"),
            styles: [__webpack_require__("./src/app/component/content/log-page/page/log-content/section/log-content-descendant-logs-section/log-content-descendant-logs-section.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__service_core_endpoint_log_log_model_service__["a" /* LogModelService */]])
    ], LogContentDescendantLogsSectionComponent);
    return LogContentDescendantLogsSectionComponent;
}());



/***/ }),

/***/ "./src/app/component/content/log-page/page/log-content/section/log-content-header-section/log-content-header-section.component.css":
/***/ (function(module, exports) {

module.exports = ".meta-data-container {\n  color: var(--text-light-2-color);\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  text-align: center;\n}\n\n.views-created-updated {\n  font-size: 13px;\n  margin-bottom: 10px;\n}\n\n.border-left {\n  border-left: 1px solid;\n  padding-left: 13px;\n  margin-left: 10px;\n}\n\n.name {\n  color: var(--main-darker-3-color);\n  font: 400 60px/1.12em \"maiola\", serif;\n}\n\n.description {\n  color: var(--main-darker-3-color);\n  font-size: 20px;\n  margin-bottom: 20px;\n}\n\n.directory-container {\n  margin-bottom: 20px;\n}\n\n.tag-or-directory {\n  padding-left: 2px;\n  padding-right: 2px;\n  border-radius: 2px;\n}\n\n.tag-or-directory:hover {\n  text-decoration: underline;\n}\n\n.current-directory {\n  color: var(--main-darker-color);\n}\n\na {\n  text-decoration: none; /* no underline */\n}\n\na:visited {\n  color: var(--main-darker-2-color);\n}\n\na:link {\n  color: var(--main-darker-2-color);\n}\n"

/***/ }),

/***/ "./src/app/component/content/log-page/page/log-content/section/log-content-header-section/log-content-header-section.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"meta-data-container\">\n  <div class=\"directory-container\">\n    <span *ngFor=\"let model of logModel.ancestryLogModels\">\n        / <a class=\"tag-or-directory\" routerLink=\"/log-page/{{model.id}}\" routerLinkActive=\"active\">{{model.metadata.name}}</a>\n    </span>\n    <span class=\"current-directory\">/ {{logModel.metadata.name}}</span>\n  </div>\n  <div class=\"views-created-updated\">\n    <span class=\"views\">views 13</span>\n    <span class=\"created border-left\">{{logModel.metadata.created | date}}</span>\n    <span *ngIf=\"logModel.metadata.lastUpdated\" class=\"updated border-left\">updated {{logModel.metadata.lastUpdated | date}}</span>\n  </div>\n  <div class=\"name dont-break-out\">{{logModel.metadata.name}}</div>\n  <div class=\"description dont-break-out\">{{logModel.metadata.description}}</div>\n  <div class=\"tag-container\">\n    <i class=\"fa fa-tags\" aria-hidden=\"true\"></i>\n    <span *ngFor=\"let model of logModel.tagModels\">\n      · <a class=\"tag-or-directory\" (click)=\"viewLogsWithTagIDInContent(model.id)\">{{model.metadata.name}}</a>\n    </span>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/component/content/log-page/page/log-content/section/log-content-header-section/log-content-header-section.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogContentHeaderSectionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_core_model_data_log_log_model__ = __webpack_require__("./src/app/service/core/model/data/log/log-model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LogContentHeaderSectionComponent = /** @class */ (function () {
    function LogContentHeaderSectionComponent(router) {
        this.router = router;
    }
    LogContentHeaderSectionComponent.prototype.viewLogsWithTagIDInContent = function (tagID) {
        this.router.navigate(['log-tile/archive', { 'tag-id': tagID }]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__service_core_model_data_log_log_model__["a" /* LogModel */])
    ], LogContentHeaderSectionComponent.prototype, "logModel", void 0);
    LogContentHeaderSectionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-log-content-header-section',
            template: __webpack_require__("./src/app/component/content/log-page/page/log-content/section/log-content-header-section/log-content-header-section.component.html"),
            styles: [__webpack_require__("./src/app/component/content/log-page/page/log-content/section/log-content-header-section/log-content-header-section.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], LogContentHeaderSectionComponent);
    return LogContentHeaderSectionComponent;
}());



/***/ }),

/***/ "./src/app/component/content/log-page/page/log-page.component.css":
/***/ (function(module, exports) {

module.exports = ".vc_container {\n  width: 100%;\n}\n"

/***/ }),

/***/ "./src/app/component/content/log-page/page/log-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"vc_container\">\n  <app-log-content-type *ngFor=\"let logContent of logContents\" [logContent]=\"logContent\"\n                        [logModel]=\"_logModel\"></app-log-content-type>\n</div>\n"

/***/ }),

/***/ "./src/app/component/content/log-page/page/log-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_switchMap__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_core_model_data_log_log_model__ = __webpack_require__("./src/app/service/core/model/data/log/log-model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LogPageComponent = /** @class */ (function () {
    function LogPageComponent(router) {
        this.router = router;
        /**
         * when secretKeyCode is pressed within a second redirect to hidden /file/update
         * @type {number[]}
         */
        this.secretKeyCode = [70, 70, 70];
        this.keyCodes = [];
    }
    Object.defineProperty(LogPageComponent.prototype, "logModel", {
        set: function (logModel) {
            this.initialize(logModel);
        },
        enumerable: true,
        configurable: true
    });
    LogPageComponent.prototype.keyup = function (event) {
        var _this = this;
        this.keyCodes.push();
        if (event.keyCode === this.secretKeyCode[this.keyCodes.length]) {
            this.keyCodes.push(event.keyCode);
            if (this.keyCodes.length === this.secretKeyCode.length) {
                this.router.navigate(['/file/update/' + this._logModel.id]);
            }
        }
        setTimeout(function () {
            _this.keyCodes = [];
        }, 1000);
    };
    LogPageComponent.prototype.initialize = function (logModel) {
        this._logModel = logModel;
        this.logContents = [];
        if (!!logModel) {
            if (!!logModel.logContents) {
                this.logContents = logModel.logContents;
            }
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__service_core_model_data_log_log_model__["a" /* LogModel */]),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__service_core_model_data_log_log_model__["a" /* LogModel */]])
    ], LogPageComponent.prototype, "logModel", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('window:keyup', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], LogPageComponent.prototype, "keyup", null);
    LogPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-log-page',
            template: __webpack_require__("./src/app/component/content/log-page/page/log-page.component.html"),
            styles: [__webpack_require__("./src/app/component/content/log-page/page/log-page.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], LogPageComponent);
    return LogPageComponent;
}());



/***/ }),

/***/ "./src/app/component/content/log-tile/archive/archive.component.css":
/***/ (function(module, exports) {

module.exports = ".no-results-found-container {\n  width: 100%;\n  height: 100%;\n}\n\n.no-results-found {\n  -ms-flex-item-align: center;\n      -ms-grid-row-align: center;\n      align-self: center;\n  text-align: center;\n  font-size: 100px;\n  color: var(--text-light-3-color);\n}\n"

/***/ }),

/***/ "./src/app/component/content/log-tile/archive/archive.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"isEmptyResponse; else templateName\">\n  <div class=\"no-results-found-container\">\n    <div class=\"no-results-found\">\n      EMPTY\n    </div>\n  </div>\n</div>\n<ng-template #templateName>\n  <app-masonry [logModelsObservable]=\"fileModelsObservable\" (getMoreFiles)=\"getMoreFiles()\"></app-masonry>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/component/content/log-tile/archive/archive.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArchiveComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_switchMap__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__masonry_masonry_component__ = __webpack_require__("./src/app/component/content/log-tile/masonry/masonry.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_core_endpoint_log_log_getter_request__ = __webpack_require__("./src/app/service/core/endpoint/log/log-getter-request.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__service_core_endpoint_log_log_model_service__ = __webpack_require__("./src/app/service/core/endpoint/log/log-model.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__service_core_model_request_pageable__ = __webpack_require__("./src/app/service/core/model/request/pageable.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__service_core_model_request_sort__ = __webpack_require__("./src/app/service/core/model/request/sort.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__service_core_model_request_sort_order__ = __webpack_require__("./src/app/service/core/model/request/sort-order.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__service_core_model_data_log_extra_log_display_type__ = __webpack_require__("./src/app/service/core/model/data/log/extra/log-display-type.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var ArchiveComponent = /** @class */ (function () {
    function ArchiveComponent(logModelService, activatedRoute) {
        var _this = this;
        this.logModelService = logModelService;
        this.activatedRoute = activatedRoute;
        this.activatedRoute.params.subscribe(function (params) {
            _this.initialize(params);
        });
    }
    ArchiveComponent.prototype.initialize = function (params) {
        var _this = this;
        // reset masonry
        if (!!this.masonryComponent) {
            this.masonryComponent.initialize();
        }
        this.moreFilesExist = true;
        this.isEmptyResponse = false;
        this.getterRequest = this.generateGetterRequest(params);
        this.getMoreFiles();
        this.fileModelsObservable.subscribe(function (logModels) {
            if (logModels.length === 0) {
                _this.isEmptyResponse = true;
            }
        });
    };
    ArchiveComponent.prototype.generateGetterRequest = function (params) {
        var getterRequest = new __WEBPACK_IMPORTED_MODULE_4__service_core_endpoint_log_log_getter_request__["a" /* LogGetterRequest */]();
        getterRequest.createdBefore = new Date().getTime();
        getterRequest.pageable = new __WEBPACK_IMPORTED_MODULE_6__service_core_model_request_pageable__["a" /* Pageable */](-1, 10);
        getterRequest.sorts = [new __WEBPACK_IMPORTED_MODULE_7__service_core_model_request_sort__["a" /* Sort */]('metadata.created', __WEBPACK_IMPORTED_MODULE_8__service_core_model_request_sort_order__["a" /* SortOrder */].desc)];
        getterRequest.logDisplayType = __WEBPACK_IMPORTED_MODULE_9__service_core_model_data_log_extra_log_display_type__["a" /* LogDisplayType */].TILE;
        // grab value of URL parameters (example `q` in `localhost:4200/search?q=something`)
        // getterRequest.searchString = this.activatedRoute.snapshot.queryParams['q'];
        // getterRequest.parentLogID = this.activatedRoute.snapshot.queryParams['directory-id'];
        // getterRequest.tagID = this.activatedRoute.snapshot.queryParams['tag-id'];
        // grab the matrix URL values (example `q` in `localhost:4200/log-page/archive;q=something;r=something/more/url`)
        getterRequest.searchString = params['q'];
        getterRequest.parentLogID = params['parent-log-id'];
        getterRequest.tagID = params['tag-id'];
        return getterRequest;
    };
    /**
     * called from MasonryComponent child
     */
    ArchiveComponent.prototype.getMoreFiles = function () {
        this.getterRequest.pageable.page++;
        this.fileModelsObservable = this.logModelService.theGetter(this.getterRequest);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_3__masonry_masonry_component__["a" /* MasonryComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__masonry_masonry_component__["a" /* MasonryComponent */])
    ], ArchiveComponent.prototype, "masonryComponent", void 0);
    ArchiveComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-archive',
            template: __webpack_require__("./src/app/component/content/log-tile/archive/archive.component.html"),
            styles: [__webpack_require__("./src/app/component/content/log-tile/archive/archive.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__service_core_endpoint_log_log_model_service__["a" /* LogModelService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], ArchiveComponent);
    return ArchiveComponent;
}());



/***/ }),

/***/ "./src/app/component/content/log-tile/masonry/masonry.component.css":
/***/ (function(module, exports) {

module.exports = "@media only screen and (max-width: 750px) {\n  .masonry-item,\n  .masonry-item-sizer {\n    width: 100%;\n  }\n}\n\n@media (min-width: 750px) and (max-width: 1250px) {\n  .masonry-item,\n  .masonry-item-sizer {\n    width: calc(50% - 6px);\n  }\n}\n\n@media (min-width: 1250px) and (max-width: 1750px) {\n  .masonry-item,\n  .masonry-item-sizer {\n    width: calc(33.333333333333333% - 8px);\n  }\n}\n\n@media (min-width: 1750px) {\n  .masonry-item,\n  .masonry-item-sizer {\n    width: calc(25% - 9px);\n  }\n}\n\n.masonry {\n  width: calc(100% - 24px);\n  margin-top: 12px;\n  margin-left: 12px;\n  margin-right: 12px;\n}\n\n.masonry-item {\n  margin-bottom: 12px;\n}\n\n.end {\n  width: 100%;\n  text-align: center;\n  font-size: 100px;\n  -ms-flex-item-align: center;\n      -ms-grid-row-align: center;\n      align-self: center;\n  color: var(--main-darker-color);\n}\n\n.spinner-container {\n  width: 100px;\n  margin: 0 auto;\n}\n\n.fa-spinner {\n  font-size: 100px;\n  border-radius: 50px;\n  color: var(--main-darker-color);\n  -webkit-animation: spinner 1s linear infinite;\n          animation: spinner 1s linear infinite;\n}\n\n@-webkit-keyframes spinner {\n  to {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n@keyframes spinner {\n  to {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n"

/***/ }),

/***/ "./src/app/component/content/log-tile/masonry/masonry.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"{{uniqueID}}\" class=\"masonry\">\n  <div class=\"masonry-item-sizer\"></div>\n  <div class=\"masonry-item\" *ngFor=\"let logModel of logModels\">\n    <app-tile-log [logModel]=\"logModel\"></app-tile-log>\n  </div>\n</div>\n<div id=\"bottom-{{uniqueID}}\"></div>\n<div *ngIf=\"showSpinner\" style=\"min-height: 120px\">\n  <div class=\"end\" *ngIf=\"!moreExist; else spinner\">END</div>\n  <ng-template #spinner>\n    <div class=\"spinner-container\">\n      <i class=\"fa fa-spinner\" aria-hidden=\"true\"></i>\n    </div>\n  </ng-template>\n</div>\n"

/***/ }),

/***/ "./src/app/component/content/log-tile/masonry/masonry.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MasonryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_event_broker_shared_service_event_broker_service__ = __webpack_require__("./src/app/service/event-broker-shared-service/event-broker-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_event_broker_shared_service_broker_event__ = __webpack_require__("./src/app/service/event-broker-shared-service/broker-event.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// declare var imagesLoaded: any;
var MasonryComponent = /** @class */ (function () {
    function MasonryComponent(_eventBroker) {
        var _this = this;
        this._eventBroker = _eventBroker;
        this.getMoreFiles = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this._masonry = null;
        this.bottom = null;
        this.uniqueID = this.guidGenerator();
        this.showSpinner = true;
        this.initialize();
        this._masonry = null;
        this._eventBroker.listen(String(__WEBPACK_IMPORTED_MODULE_3__service_event_broker_shared_service_broker_event__["a" /* BrokerEvent */].NAVIGATION_SIDE_LEFT_STATE_CHANGED), function (data) {
            _this.viewportResize();
        });
        this._eventBroker.listen(String(__WEBPACK_IMPORTED_MODULE_3__service_event_broker_shared_service_broker_event__["a" /* BrokerEvent */].CONTENT_SCROLLED), function (data) {
            _this.loadModelsIfEmptySpace();
        });
    }
    Object.defineProperty(MasonryComponent.prototype, "logModelsObservable", {
        set: function (logModelsObservable) {
            this._logModelsObservable = logModelsObservable;
            this.getLogModels();
        },
        enumerable: true,
        configurable: true
    });
    MasonryComponent.prototype.ngAfterViewInit = function () {
        this.bottom = document.getElementById('bottom-' + this.uniqueID);
    };
    MasonryComponent.prototype.guidGenerator = function () {
        var S4 = function () {
            return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
        };
        return (S4() + S4() + '-' + S4() + '-' + S4() + '-' + S4() + '-' + S4() + S4() + S4());
    };
    MasonryComponent.prototype.viewportResize = function () {
        var _this = this;
        if (this._masonry !== null) {
            // wait for other resizing (font-size) to be complete
            setTimeout(function () {
                _this._masonry.layout();
                // wait for layoutComplete
                setTimeout(function () {
                    _this.loadModelsIfEmptySpace();
                }, 250);
            }, 25);
        }
    };
    MasonryComponent.prototype.onResize = function (event) {
        var _this = this;
        // Even though layout() is called automatically "sometimes"
        // However it fails in one edge case:
        //  Layout is not called when masonry container is within a
        //  fixed width/max-width container and there are css media
        //  queries that modify the masonry-items width
        // So here we are calling it every time on window resize
        this._masonry.layout();
        // wait for masonry layoutComplete
        setTimeout(function () {
            _this.loadModelsIfEmptySpace();
        }, 500);
    };
    /**
     * also called from ArchiveComponent :/
     */
    MasonryComponent.prototype.initialize = function () {
        this.logModels = [];
        this.moreExist = true;
    };
    /**
     * checks if more logs exist if so check if there is space in viewport
     */
    MasonryComponent.prototype.loadModelsIfEmptySpace = function () {
        if (this.moreExist) {
            if (this.bottom != null) {
                if (this.isElementInViewport(this.bottom)) {
                    this.getMoreFiles.emit(true);
                }
            }
        }
    };
    MasonryComponent.prototype.generateMasonry = function () {
        var _this = this;
        setTimeout(function () {
            var grid = document.getElementById(_this.uniqueID);
            // imagesLoaded(grid, () => {
            _this._masonry = new Masonry(grid, {
                itemSelector: '.masonry-item',
                columnWidth: '.masonry-item-sizer',
                percentPosition: true,
                gutter: 12,
            });
            // setTimeout(() => {
            _this.loadModelsIfEmptySpace();
            //   }, 1000); // wait imagesLoaded and layoutComplete
            // });
        }, 5); // delay for dom update
    };
    MasonryComponent.prototype.isElementInViewport = function (el) {
        var viewportOffset = el.getBoundingClientRect();
        var top = viewportOffset.top;
        return top <= window.innerHeight;
    };
    MasonryComponent.prototype.getLogModels = function () {
        var _this = this;
        this._logModelsObservable.subscribe(function (fileModels) {
            if (fileModels.length === 0) {
                _this.moreExist = false;
            }
            else {
                _this.logModels = _this.logModels.concat(fileModels);
                _this.generateMasonry();
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], MasonryComponent.prototype, "showSpinner", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */]),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */]])
    ], MasonryComponent.prototype, "logModelsObservable", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], MasonryComponent.prototype, "getMoreFiles", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], MasonryComponent.prototype, "onResize", null);
    MasonryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-masonry',
            template: __webpack_require__("./src/app/component/content/log-tile/masonry/masonry.component.html"),
            styles: [__webpack_require__("./src/app/component/content/log-tile/masonry/masonry.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__service_event_broker_shared_service_event_broker_service__["a" /* EventBrokerService */]])
    ], MasonryComponent);
    return MasonryComponent;
}());



/***/ }),

/***/ "./src/app/component/content/log-tile/masonry/tile/type/log/tile-log-default/tile-log-default.component.css":
/***/ (function(module, exports) {

module.exports = ".container {\n  padding: 50px;\n  text-overflow: ellipsis;\n  text-align: center;\n}\n"

/***/ }),

/***/ "./src/app/component/content/log-tile/masonry/tile/type/log/tile-log-default/tile-log-default.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"name\">{{name}}</div>\n</div>\n"

/***/ }),

/***/ "./src/app/component/content/log-tile/masonry/tile/type/log/tile-log-default/tile-log-default.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TileLogDefaultComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_core_model_data_log_log_model__ = __webpack_require__("./src/app/service/core/model/data/log/log-model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TileLogDefaultComponent = /** @class */ (function () {
    function TileLogDefaultComponent() {
    }
    TileLogDefaultComponent.prototype.ngOnInit = function () {
        this.name = this.logModel.metadata.name;
        if (!this.name) {
            this.name = 'I DIDN\'T PUT A NAME ON THIS...';
        }
        this.description = this.logModel.metadata.description;
        if (!this.description) {
            this.description = 'sadness :( there\'s no description';
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__service_core_model_data_log_log_model__["a" /* LogModel */])
    ], TileLogDefaultComponent.prototype, "logModel", void 0);
    TileLogDefaultComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-tile-log-default',
            template: __webpack_require__("./src/app/component/content/log-tile/masonry/tile/type/log/tile-log-default/tile-log-default.component.html"),
            styles: [__webpack_require__("./src/app/component/content/log-tile/masonry/tile/type/log/tile-log-default/tile-log-default.component.css")]
        })
    ], TileLogDefaultComponent);
    return TileLogDefaultComponent;
}());



/***/ }),

/***/ "./src/app/component/content/log-tile/masonry/tile/type/log/tile-log-extra/tile-log-extra.component.css":
/***/ (function(module, exports) {

module.exports = ".container {\n  border-top: 1px solid var(--main-darker-color);\n  padding: 10px;\n}\n\n.name {\n  font-weight: bold;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  font-size: 20px;\n}\n\n.description {\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  font-size: 15px;\n}\n"

/***/ }),

/***/ "./src/app/component/content/log-tile/masonry/tile/type/log/tile-log-extra/tile-log-extra.component.html":
/***/ (function(module, exports) {

module.exports = "<div #container class=\"container\">\n  <div class=\"name\">{{name}}</div>\n  <div class=\"description\">{{description}}</div>\n</div>\n"

/***/ }),

/***/ "./src/app/component/content/log-tile/masonry/tile/type/log/tile-log-extra/tile-log-extra.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TileLogExtraComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_core_model_data_log_log_model__ = __webpack_require__("./src/app/service/core/model/data/log/log-model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TileLogExtraComponent = /** @class */ (function () {
    function TileLogExtraComponent() {
    }
    TileLogExtraComponent.prototype.ngOnInit = function () {
        this.name = this.logModel.metadata.name;
        if (!this.name) {
            this.name = 'I DIDN\'T PUT A NAME ON THIS...';
        }
        this.description = this.logModel.metadata.description;
        if (!this.description) {
            this.description = 'sadness :( there\'s no description';
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__service_core_model_data_log_log_model__["a" /* LogModel */])
    ], TileLogExtraComponent.prototype, "logModel", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('container'),
        __metadata("design:type", Object)
    ], TileLogExtraComponent.prototype, "containerElement", void 0);
    TileLogExtraComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-tile-log-extra',
            template: __webpack_require__("./src/app/component/content/log-tile/masonry/tile/type/log/tile-log-extra/tile-log-extra.component.html"),
            styles: [__webpack_require__("./src/app/component/content/log-tile/masonry/tile/type/log/tile-log-extra/tile-log-extra.component.css")]
        })
    ], TileLogExtraComponent);
    return TileLogExtraComponent;
}());



/***/ }),

/***/ "./src/app/component/content/log-tile/masonry/tile/type/log/tile-log.component.css":
/***/ (function(module, exports) {

module.exports = ".vc_container {\n  width: 100%;\n  height: auto;\n  border-radius: 5px;\n  overflow: hidden;\n  cursor: pointer;\n  pointer-events: auto;\n  background-color: var(--main-lighter-color);\n}\n\n.vc_container {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  border: 1px solid var(--main-darker-color);\n}\n"

/***/ }),

/***/ "./src/app/component/content/log-tile/masonry/tile/type/log/tile-log.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"vc_container\" (click)=\"route2FilePage()\">\n  <div #vc></div>\n  <div *ngIf=\"showBottom\">\n    <app-tile-log-extra [logModel]=\"logModel\"></app-tile-log-extra>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/component/content/log-tile/masonry/tile/type/log/tile-log.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TileLogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_core_model_data_log_log_model__ = __webpack_require__("./src/app/service/core/model/data/log/log-model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tile_log_default_tile_log_default_component__ = __webpack_require__("./src/app/component/content/log-tile/masonry/tile/type/log/tile-log-default/tile-log-default.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__widget_core_log_log_content_image_default_log_content_image_default_component__ = __webpack_require__("./src/app/component/widget/core/log/log-content/image-default/log-content-image-default.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__widget_core_log_log_content_text_code_default_log_content_text_code_default_component__ = __webpack_require__("./src/app/component/widget/core/log/log-content/text-code-default/log-content-text-code-default.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__widget_core_log_log_content_text_markdown_default_log_content_text_markdown_default_component__ = __webpack_require__("./src/app/component/widget/core/log/log-content/text-markdown-default/log-content-text-markdown-default.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__widget_core_log_log_content_text_plain_default_log_content_text_plain_default_component__ = __webpack_require__("./src/app/component/widget/core/log/log-content/text-plain-default/log-content-text-plain-default.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__widget_core_log_log_content_text_quote_default_log_content_text_quote_default_component__ = __webpack_require__("./src/app/component/widget/core/log/log-content/text-quote-default/log-content-text-quote-default.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__widget_core_log_log_content_video_youtube_default_log_content_video_youtube_default_component__ = __webpack_require__("./src/app/component/widget/core/log/log-content/video-youtube-default/log-content-video-youtube-default.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var TileLogComponent = /** @class */ (function () {
    function TileLogComponent(router, componentFactoryResolver) {
        this.router = router;
        this.componentFactoryResolver = componentFactoryResolver;
    }
    TileLogComponent.prototype.ngOnInit = function () {
        this.showBottom = false;
        this.loadComponent(this.logModel.logContents[0]);
    };
    TileLogComponent.prototype.loadComponent = function (logContent) {
        var component = this.getComponent(logContent.logContentType);
        if (component != null) {
            var componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);
            var componentRef = this.vc.createComponent(componentFactory);
            componentRef.instance.data = logContent.data;
        }
        else {
            var componentFactory = this.componentFactoryResolver.resolveComponentFactory(__WEBPACK_IMPORTED_MODULE_3__tile_log_default_tile_log_default_component__["a" /* TileLogDefaultComponent */]);
            var componentRef = this.vc.createComponent(componentFactory);
            componentRef.instance.logModel = this.logModel;
        }
    };
    // TODO turn into service to map logData types to Masonry Tile Components
    TileLogComponent.prototype.getComponent = function (logContentType) {
        switch (logContentType) {
            case 'ImageInternalLogContent': {
                return __WEBPACK_IMPORTED_MODULE_4__widget_core_log_log_content_image_default_log_content_image_default_component__["a" /* LogContentImageDefaultComponent */];
            }
            case 'TextCodeLogContent': {
                return __WEBPACK_IMPORTED_MODULE_5__widget_core_log_log_content_text_code_default_log_content_text_code_default_component__["a" /* LogContentTextCodeDefaultComponent */];
            }
            case 'TextMarkdownLogContent': {
                return __WEBPACK_IMPORTED_MODULE_6__widget_core_log_log_content_text_markdown_default_log_content_text_markdown_default_component__["a" /* LogContentTextMarkdownDefaultComponent */];
            }
            case 'TextPlainLogContent': {
                return __WEBPACK_IMPORTED_MODULE_7__widget_core_log_log_content_text_plain_default_log_content_text_plain_default_component__["a" /* LogContentTextPlainDefaultComponent */];
            }
            case 'TextQuoteLogContent': {
                return __WEBPACK_IMPORTED_MODULE_8__widget_core_log_log_content_text_quote_default_log_content_text_quote_default_component__["a" /* LogContentTextQuoteDefaultComponent */];
            }
            case 'VideoYouTubeLogContent': {
                return __WEBPACK_IMPORTED_MODULE_9__widget_core_log_log_content_video_youtube_default_log_content_video_youtube_default_component__["a" /* LogContentVideoYoutubeDefaultComponent */];
            }
        }
    };
    TileLogComponent.prototype.route2FilePage = function () {
        // window.location.href = '/log-page/' + this.fileModel.id;
        // passing directory id as matrix parameter
        this.router.navigate(['/log-page/' + this.logModel.id]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__service_core_model_data_log_log_model__["a" /* LogModel */])
    ], TileLogComponent.prototype, "logModel", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('vc', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"])
    ], TileLogComponent.prototype, "vc", void 0);
    TileLogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-tile-log',
            template: __webpack_require__("./src/app/component/content/log-tile/masonry/tile/type/log/tile-log.component.html"),
            styles: [__webpack_require__("./src/app/component/content/log-tile/masonry/tile/type/log/tile-log.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"]])
    ], TileLogComponent);
    return TileLogComponent;
}());



/***/ }),

/***/ "./src/app/component/content/page-not-found/page-not-found.component.css":
/***/ (function(module, exports) {

module.exports = ".container {\n  width: 100%;\n  height: 100%;\n  display: -ms-grid;\n  display: grid;\n}\n\n.placeholder {\n  -ms-flex-item-align: center;\n      -ms-grid-row-align: center;\n      align-self: center;\n  text-align: center;\n  color: var(--main-darker-color);\n}\n"

/***/ }),

/***/ "./src/app/component/content/page-not-found/page-not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<div #container class=\"container\">\n  <div class=\"placeholder\" [ngStyle]=\"{'font-size': fontSize + 'px'}\">PAGE NOT FOUND</div>\n</div>\n"

/***/ }),

/***/ "./src/app/component/content/page-not-found/page-not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNotFoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    /**
     * ngAfterViewChecked() will be called every time change detection runs
     * https://angular.io/guide/lifecycle-hooks
     */
    PageNotFoundComponent.prototype.ngAfterViewChecked = function () {
        this.adjustFontSize();
    };
    PageNotFoundComponent.prototype.adjustFontSize = function () {
        var width = this.containerElement.nativeElement.offsetWidth;
        this.fontSize = width / 6;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('container'),
        __metadata("design:type", Object)
    ], PageNotFoundComponent.prototype, "containerElement", void 0);
    PageNotFoundComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("./src/app/component/content/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__("./src/app/component/content/page-not-found/page-not-found.component.css")]
        })
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/component/navigation-side-left/navigation-side-left.component.css":
/***/ (function(module, exports) {

module.exports = ".toolbar-container {\n  height: 40px;\n  width: 100%;\n}\n\n.container {\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n}\n"

/***/ }),

/***/ "./src/app/component/navigation-side-left/navigation-side-left.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"toolbar-container\">\n  <app-navigation-side-left-toolbar></app-navigation-side-left-toolbar>\n</div>\n<section class=\"container\">\n  <app-log-selector [showColumnToolbar]=\"true\"\n                    (logModelSelectedOnce)=\"navigateToLogPage($event)\"></app-log-selector>\n</section>\n"

/***/ }),

/***/ "./src/app/component/navigation-side-left/navigation-side-left.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationSideLeftComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavigationSideLeftComponent = /** @class */ (function () {
    function NavigationSideLeftComponent(router) {
        this.router = router;
    }
    NavigationSideLeftComponent.prototype.navigateToLogPage = function (logModel) {
        // passing directory id as URL parameters <-- this does not refresh the Angular Route route-outlet's Component
        // this.router.navigate(['/log-tile/archive'], {queryParams: {'directory-id': this.parentLogModel.id}});
        // passing directory id as matrix parameter
        this.router.navigate(['/log-page/' + logModel.id]);
    };
    NavigationSideLeftComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navigation-side-left',
            template: __webpack_require__("./src/app/component/navigation-side-left/navigation-side-left.component.html"),
            styles: [__webpack_require__("./src/app/component/navigation-side-left/navigation-side-left.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], NavigationSideLeftComponent);
    return NavigationSideLeftComponent;
}());



/***/ }),

/***/ "./src/app/component/navigation-side-left/toolbar/navigation-side-left-toolbar.component.css":
/***/ (function(module, exports) {

module.exports = "#navigation-side-left-toolbar {\n  height: 100%;\n  width: 100%;\n  overflow: hidden;\n  background-color: var(--main-darker-3-color);\n  color: var(--text-color);\n  text-align: center;\n}\n"

/***/ }),

/***/ "./src/app/component/navigation-side-left/toolbar/navigation-side-left-toolbar.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"navigation-side-left-toolbar\">\n</div>\n"

/***/ }),

/***/ "./src/app/component/navigation-side-left/toolbar/navigation-side-left-toolbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationSideLeftToolbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NavigationSideLeftToolbarComponent = /** @class */ (function () {
    function NavigationSideLeftToolbarComponent() {
    }
    NavigationSideLeftToolbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navigation-side-left-toolbar',
            template: __webpack_require__("./src/app/component/navigation-side-left/toolbar/navigation-side-left-toolbar.component.html"),
            styles: [__webpack_require__("./src/app/component/navigation-side-left/toolbar/navigation-side-left-toolbar.component.css")]
        })
    ], NavigationSideLeftToolbarComponent);
    return NavigationSideLeftToolbarComponent;
}());



/***/ }),

/***/ "./src/app/component/navigation-top/navigation-top.component.css":
/***/ (function(module, exports) {

module.exports = "#navigation-top {\n  padding-left: 10px;\n  height: 100%;\n  width: 100%;\n  background-color: var(--main-darker-3-color);\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n\n.migration-message {\n  padding-left: 50px;\n  color: var(--main-lighter-color);\n}\n\n/* unvisited link */\n\n.migration-link:link {\n  color: rgb(255, 165, 0);\n}\n\n/* visited link */\n\n.migration-link:visited {\n  color: rgb(255, 165, 0);\n}\n\n/* mouse over link */\n\n.migration-link:hover {\n  color: rgb(188, 122, 1);\n}\n\n/* selected link */\n\n.migration-link:active {\n  color: rgb(188, 122, 1);\n}\n\n.link {\n  text-align: center;\n  -ms-flex-item-align: center;\n      -ms-grid-row-align: center;\n      align-self: center;\n  color: var(--main-color);\n  overflow: hidden;\n}\n\n.link:hover {\n  color: var(--main-darker-2-color);\n}\n\n.link-home {\n  font-size: 25px;\n  font-style: normal;\n}\n\n.fa-search {\n  margin-left: 15px;\n  font-size: 15px;\n}\n"

/***/ }),

/***/ "./src/app/component/navigation-top/navigation-top.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"navigation-top\">\n  <i class=\"link link-home\" (click)=\"home()\">Marcus</i>\n  <i class=\"link fa fa-search\" (click)=\"search()\"></i>\n  <span class=\"migration-message\">This site has been migrated to <a class=\"migration-link\" href=\"http://confluence.marcuschiu.com\">confluence.marcuschiu.com</a></span>\n</div>\n"

/***/ }),

/***/ "./src/app/component/navigation-top/navigation-top.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationTopComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavigationTopComponent = /** @class */ (function () {
    function NavigationTopComponent(router) {
        this.router = router;
        this.onToggleNavigationSideLeft = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    NavigationTopComponent.prototype.home = function () {
        // this.router.navigateByUrl('home');
        window.location.href = '/home';
    };
    NavigationTopComponent.prototype.search = function () {
        alert('coming soon');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], NavigationTopComponent.prototype, "onToggleNavigationSideLeft", void 0);
    NavigationTopComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navigation-top',
            template: __webpack_require__("./src/app/component/navigation-top/navigation-top.component.html"),
            styles: [__webpack_require__("./src/app/component/navigation-top/navigation-top.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], NavigationTopComponent);
    return NavigationTopComponent;
}());



/***/ }),

/***/ "./src/app/component/widget/core/log/log-content/image-default/log-content-image-default.component.css":
/***/ (function(module, exports) {

module.exports = "div {\n  overflow: hidden;\n  position: relative;\n  width: 100%;\n  height: 0;\n  padding-bottom: 75%;\n}\n\ndiv img {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  top: 0;\n}\n"

/***/ }),

/***/ "./src/app/component/widget/core/log/log-content/image-default/log-content-image-default.component.html":
/***/ (function(module, exports) {

module.exports = "<div [ngStyle]=\"{'padding-bottom': data.imageModel.heightDividedByWidth * 100 + '%'}\">\n  <img [src]=\"data.imageModel.imageURL\">\n</div>\n"

/***/ }),

/***/ "./src/app/component/widget/core/log/log-content/image-default/log-content-image-default.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogContentImageDefaultComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_core_model_data_image_image_model__ = __webpack_require__("./src/app/service/core/model/data/image/image-model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_core_model_data_log_extra_log_content_type_image_internal_image_internal_log_content__ = __webpack_require__("./src/app/service/core/model/data/log/extra/log-content/type/image-internal/image-internal-log-content.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LogContentImageDefaultComponent = /** @class */ (function () {
    function LogContentImageDefaultComponent() {
    }
    LogContentImageDefaultComponent.prototype.ngOnInit = function () {
        if (!this.data) {
            this.data = new __WEBPACK_IMPORTED_MODULE_2__service_core_model_data_log_extra_log_content_type_image_internal_image_internal_log_content__["a" /* ImageInternalLogContent */]();
        }
        if (!this.data.imageModel) {
            var imageFileData = new __WEBPACK_IMPORTED_MODULE_1__service_core_model_data_image_image_model__["a" /* ImageModel */]();
            imageFileData.imageURL = '';
            imageFileData.heightDividedByWidth = 1;
            this.data.imageModel = imageFileData;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__service_core_model_data_log_extra_log_content_type_image_internal_image_internal_log_content__["a" /* ImageInternalLogContent */])
    ], LogContentImageDefaultComponent.prototype, "data", void 0);
    LogContentImageDefaultComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-log-content-image-default',
            template: __webpack_require__("./src/app/component/widget/core/log/log-content/image-default/log-content-image-default.component.html"),
            styles: [__webpack_require__("./src/app/component/widget/core/log/log-content/image-default/log-content-image-default.component.css")]
        })
    ], LogContentImageDefaultComponent);
    return LogContentImageDefaultComponent;
}());



/***/ }),

/***/ "./src/app/component/widget/core/log/log-content/text-code-default/log-content-text-code-default.component.css":
/***/ (function(module, exports) {

module.exports = "/* TODO trying to allow horizontal scroll to obey parent max-width, however, we may need to resort to own media queries at this level like below */\n/*@media only screen and (max-width: 800px) {*/\n/*pre {*/\n/*width: 100vw;*/\n/*}*/\n/*}*/\n/*@media (min-width: 800px) {*/\n/*pre {*/\n/*width: 800px;*/\n/*}*/\n/*}*/\nfigure {\n  margin: 0;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  border: 1px solid var(--main-darker-color);\n  padding-left: 6px;\n  padding-bottom: 3px;\n}\npre {\n  margin: 0;\n}\ncode {\n  white-space: pre-wrap;\n}\n"

/***/ }),

/***/ "./src/app/component/widget/core/log/log-content/text-code-default/log-content-text-code-default.component.html":
/***/ (function(module, exports) {

module.exports = "<figure>\n  <!-- https://github.com/google/code-prettify -->\n  <!-- prettyprint - tells google's prettyprint to prettify it, when done it would append class prettified -->\n  <!-- linenums - tells google's prettify which line number to start -->\n  <!-- lang-{{language}} - tells google prettyprint which style to syntax highlight, if not found it will guess -->\n  <!-- passing json string instead of object so pipe will pick up changes within object -->\n  <pre><code [innerHtml]=\"JSON.stringify(data) | code\"></code></pre>\n  <figcaption></figcaption>\n</figure>\n\n"

/***/ }),

/***/ "./src/app/component/widget/core/log/log-content/text-code-default/log-content-text-code-default.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogContentTextCodeDefaultComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_core_model_data_log_extra_log_content_type_text_code_text_code_log_content__ = __webpack_require__("./src/app/service/core/model/data/log/extra/log-content/type/text-code/text-code-log-content.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LogContentTextCodeDefaultComponent = /** @class */ (function () {
    function LogContentTextCodeDefaultComponent() {
        this.JSON = JSON;
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__service_core_model_data_log_extra_log_content_type_text_code_text_code_log_content__["a" /* TextCodeLogContent */])
    ], LogContentTextCodeDefaultComponent.prototype, "data", void 0);
    LogContentTextCodeDefaultComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-log-content-text-code-default',
            template: __webpack_require__("./src/app/component/widget/core/log/log-content/text-code-default/log-content-text-code-default.component.html"),
            styles: [__webpack_require__("./src/app/component/widget/core/log/log-content/text-code-default/log-content-text-code-default.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LogContentTextCodeDefaultComponent);
    return LogContentTextCodeDefaultComponent;
}());



/***/ }),

/***/ "./src/app/component/widget/core/log/log-content/text-markdown-default/log-content-text-markdown-default.component.css":
/***/ (function(module, exports) {

module.exports = ".markdown-container {\n  width: 100%;\n  overflow: auto; /* too account for any possible margin-bottom */\n}\n"

/***/ }),

/***/ "./src/app/component/widget/core/log/log-content/text-markdown-default/log-content-text-markdown-default.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"markdown-container\" [innerHtml]=\"data.text | markdown\"></div>\n"

/***/ }),

/***/ "./src/app/component/widget/core/log/log-content/text-markdown-default/log-content-text-markdown-default.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogContentTextMarkdownDefaultComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_core_model_data_log_extra_log_content_type_text_markdown_text_markdown_log_content__ = __webpack_require__("./src/app/service/core/model/data/log/extra/log-content/type/text-markdown/text-markdown-log-content.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LogContentTextMarkdownDefaultComponent = /** @class */ (function () {
    function LogContentTextMarkdownDefaultComponent() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__service_core_model_data_log_extra_log_content_type_text_markdown_text_markdown_log_content__["a" /* TextMarkdownLogContent */])
    ], LogContentTextMarkdownDefaultComponent.prototype, "data", void 0);
    LogContentTextMarkdownDefaultComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-log-content-text-markdown-default',
            template: __webpack_require__("./src/app/component/widget/core/log/log-content/text-markdown-default/log-content-text-markdown-default.component.html"),
            styles: [__webpack_require__("./src/app/component/widget/core/log/log-content/text-markdown-default/log-content-text-markdown-default.component.css")]
        })
    ], LogContentTextMarkdownDefaultComponent);
    return LogContentTextMarkdownDefaultComponent;
}());



/***/ }),

/***/ "./src/app/component/widget/core/log/log-content/text-plain-default/log-content-text-plain-default.component.css":
/***/ (function(module, exports) {

module.exports = ".text {\n  width: 100%;\n  text-overflow: ellipsis;\n  white-space: pre-line; /* value `pre` does not obey parent max-width, luckily pre-line does */\n  color: var(--main-darker-3-color);\n}\n"

/***/ }),

/***/ "./src/app/component/widget/core/log/log-content/text-plain-default/log-content-text-plain-default.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"text\">{{data.text}}</div>\n"

/***/ }),

/***/ "./src/app/component/widget/core/log/log-content/text-plain-default/log-content-text-plain-default.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogContentTextPlainDefaultComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_core_model_data_log_extra_log_content_type_text_plain_text_plain_log_content__ = __webpack_require__("./src/app/service/core/model/data/log/extra/log-content/type/text-plain/text-plain-log-content.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LogContentTextPlainDefaultComponent = /** @class */ (function () {
    function LogContentTextPlainDefaultComponent() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__service_core_model_data_log_extra_log_content_type_text_plain_text_plain_log_content__["a" /* TextPlainLogContent */])
    ], LogContentTextPlainDefaultComponent.prototype, "data", void 0);
    LogContentTextPlainDefaultComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-log-content-text-plain-default',
            template: __webpack_require__("./src/app/component/widget/core/log/log-content/text-plain-default/log-content-text-plain-default.component.html"),
            styles: [__webpack_require__("./src/app/component/widget/core/log/log-content/text-plain-default/log-content-text-plain-default.component.css")]
        })
    ], LogContentTextPlainDefaultComponent);
    return LogContentTextPlainDefaultComponent;
}());



/***/ }),

/***/ "./src/app/component/widget/core/log/log-content/text-quote-default/log-content-text-quote-default.component.css":
/***/ (function(module, exports) {

module.exports = ".container {\n  overflow: hidden;\n  width: 100%;\n  background-color: var(--main-darker-color);\n  text-align: center;\n  text-overflow: ellipsis;\n  color: var(--main-darker-3-color);\n}\n\n.quote {\n  padding-top: 50px;\n  padding-left: 50px;\n  padding-right: 50px;\n}\n\n.source-name {\n  padding-left: 50px;\n  padding-right: 50px;\n  padding-bottom: 50px;\n}\n"

/***/ }),

/***/ "./src/app/component/widget/core/log/log-content/text-quote-default/log-content-text-quote-default.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"quote\">{{data.text}}</div>\n  <div class=\"source-name\">~ {{data.sourceName}}</div>\n</div>\n"

/***/ }),

/***/ "./src/app/component/widget/core/log/log-content/text-quote-default/log-content-text-quote-default.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogContentTextQuoteDefaultComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_core_model_data_log_extra_log_content_type_text_quote_text_quote_log_content__ = __webpack_require__("./src/app/service/core/model/data/log/extra/log-content/type/text-quote/text-quote-log-content.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LogContentTextQuoteDefaultComponent = /** @class */ (function () {
    function LogContentTextQuoteDefaultComponent() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__service_core_model_data_log_extra_log_content_type_text_quote_text_quote_log_content__["a" /* TextQuoteLogContent */])
    ], LogContentTextQuoteDefaultComponent.prototype, "data", void 0);
    LogContentTextQuoteDefaultComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-log-content-text-quote-default',
            template: __webpack_require__("./src/app/component/widget/core/log/log-content/text-quote-default/log-content-text-quote-default.component.html"),
            styles: [__webpack_require__("./src/app/component/widget/core/log/log-content/text-quote-default/log-content-text-quote-default.component.css")]
        })
    ], LogContentTextQuoteDefaultComponent);
    return LogContentTextQuoteDefaultComponent;
}());



/***/ }),

/***/ "./src/app/component/widget/core/log/log-content/video-youtube-default/log-content-video-youtube-default.component.css":
/***/ (function(module, exports) {

module.exports = ".container {\n  position: relative;\n  width: 100%;\n  height: 0;\n  padding-bottom: 59%; /* default size of youtube video */\n  background-color: var(--main-darker-color);\n}\n\n.loading {\n  position: absolute;\n  color: var(--main-darker-2-color);\n  font-size: 30px;\n  top: calc(50% - 15px);\n  width: 100%;\n  text-align: center;\n}\n\ndiv iframe {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  top: 0;\n}\n\n"

/***/ }),

/***/ "./src/app/component/widget/core/log/log-content/video-youtube-default/log-content-video-youtube-default.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"loading\">LOADING YOUTUBE</div>\n  <iframe class='content' [src]=\"'https://www.youtube.com/embed/' + data.videoID | safe\" frameborder=\"0\"\n          allowfullscreen></iframe>\n</div>\n"

/***/ }),

/***/ "./src/app/component/widget/core/log/log-content/video-youtube-default/log-content-video-youtube-default.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogContentVideoYoutubeDefaultComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_core_model_data_log_extra_log_content_type_video_youtube_video_youtube_log_content__ = __webpack_require__("./src/app/service/core/model/data/log/extra/log-content/type/video-youtube/video-youtube-log-content.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LogContentVideoYoutubeDefaultComponent = /** @class */ (function () {
    function LogContentVideoYoutubeDefaultComponent() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__service_core_model_data_log_extra_log_content_type_video_youtube_video_youtube_log_content__["a" /* VideoYoutubeLogContent */])
    ], LogContentVideoYoutubeDefaultComponent.prototype, "data", void 0);
    LogContentVideoYoutubeDefaultComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-log-content-video-youtube-default',
            template: __webpack_require__("./src/app/component/widget/core/log/log-content/video-youtube-default/log-content-video-youtube-default.component.html"),
            styles: [__webpack_require__("./src/app/component/widget/core/log/log-content/video-youtube-default/log-content-video-youtube-default.component.css")]
        })
    ], LogContentVideoYoutubeDefaultComponent);
    return LogContentVideoYoutubeDefaultComponent;
}());



/***/ }),

/***/ "./src/app/component/widget/core/log/selector/column/log-selector-column.component.css":
/***/ (function(module, exports) {

module.exports = ".column-container {\n  height: 100%;\n  overflow: scroll;\n}\n\napp-log-selector-column-toolbar {\n  width: 100%;\n  overflow: hidden;\n}\n\n.empty {\n  text-align: center;\n  color: var(--text-light-3-color);\n}\n\n.item {\n  max-width: 100%;\n  overflow: hidden;\n  padding-top: 2px;\n  padding-bottom: 2px;\n  color: var(--main-darker-2-color);\n}\n\n.item:hover {\n  color: var(--main-lighter-color);\n  background-color: var(--main-darker-color);\n}\n\n.item-path {\n  background-color: var(--main-darker-color);\n}\n\n.item-selected {\n  color: var(--main-lighter-color);\n  background-color: var(--selected-color);\n}\n\n.item-selected:hover {\n  color: var(--main-color);\n  background-color: var(--selected-color);\n}\n\n.log-container {\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: auto 15px;\n      grid-template-columns: auto 15px;\n}\n\n.item-name {\n  padding-left: 3px;\n  overflow-x: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n\n.bottom {\n  height: 70px;\n}\n\n.fa-play {\n  font-size: 10px;\n  -ms-flex-item-align: center;\n      -ms-grid-row-align: center;\n      align-self: center;\n}\n"

/***/ }),

/***/ "./src/app/component/widget/core/log/selector/column/log-selector-column.component.html":
/***/ (function(module, exports) {

module.exports = "<app-log-selector-column-toolbar *ngIf=\"showColumnToolbar\"\n                                 [logModel]=\"parentLogModel\"></app-log-selector-column-toolbar>\n<div class=\"column-container\" (scroll)=\"onScroll()\" (dragover)=\"onDragOver($event)\" (dragleave)=\"onDragLeave($event)\"\n     (drop)=\"onDrop($event, parentLogModel.id)\">\n  <div *ngIf=\"isEmpty && isEmpty; else templateName\">\n    <div class=\"empty\">\n      EMPTY\n    </div>\n  </div>\n  <ng-template #templateName>\n    <div *ngFor=\"let logModel of childLogModels, let i = index;\">\n      <div *ngIf=\"logModelIDsToHide.indexOf(logModel.id) === -1\" draggable=\"true\"\n           (dragstart)=\"onDragStart($event, logModel.id)\" (dragover)=\"onDragOver($event)\"\n           (dragleave)=\"onDragLeave($event)\" (drop)=\"onDrop($event, logModel.id)\">\n        <div class=\"item\"\n             [ngClass]=\"{'item-path': logModel.id === logPathID, 'item-selected': logModel.id === selectedLogModelID}\">\n          <div class=\"log-container\" (click)=\"selectLogModel(i)\">\n            <div class=\"item-name\">{{logModel.metadata.name}}</div>\n            <i class=\"fa fa-play\"></i>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div #bottom class=\"bottom\"></div>\n  </ng-template>\n</div>\n"

/***/ }),

/***/ "./src/app/component/widget/core/log/selector/column/log-selector-column.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogSelectorColumnComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_core_model_data_log_log_model__ = __webpack_require__("./src/app/service/core/model/data/log/log-model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_core_endpoint_log_log_getter_request__ = __webpack_require__("./src/app/service/core/endpoint/log/log-getter-request.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_core_endpoint_log_log_model_service__ = __webpack_require__("./src/app/service/core/endpoint/log/log-model.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_core_model_request_pageable__ = __webpack_require__("./src/app/service/core/model/request/pageable.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__service_core_model_request_sort__ = __webpack_require__("./src/app/service/core/model/request/sort.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__service_core_model_request_sort_order__ = __webpack_require__("./src/app/service/core/model/request/sort-order.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__on_log_model_drop__ = __webpack_require__("./src/app/component/widget/core/log/selector/on-log-model-drop.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var LogSelectorColumnComponent = /** @class */ (function () {
    function LogSelectorColumnComponent(logModelService) {
        this.logModelService = logModelService;
        this.logModelSelected = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.logModelDropped = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    Object.defineProperty(LogSelectorColumnComponent.prototype, "pathLogModels", {
        set: function (pathLogModels) {
            if (pathLogModels.length > (this.logLevel + 1)) {
                this.logPathID = pathLogModels[this.logLevel + 1].id;
            }
            else {
                this.logPathID = undefined;
            }
        },
        enumerable: true,
        configurable: true
    });
    LogSelectorColumnComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.showColumnToolbar === undefined) {
            this.showColumnToolbar = false;
        }
        this.childLogModels = [];
        this.isEmpty = false;
        this.moreExist = true;
        if (this.logModelIDsToHide == null) {
            this.logModelIDsToHide = [];
        }
        var getterRequest = new __WEBPACK_IMPORTED_MODULE_2__service_core_endpoint_log_log_getter_request__["a" /* LogGetterRequest */]();
        getterRequest.parentLogID = this.parentLogModel.id;
        getterRequest.pageable = new __WEBPACK_IMPORTED_MODULE_4__service_core_model_request_pageable__["a" /* Pageable */](-1, 20);
        getterRequest.sorts = [new __WEBPACK_IMPORTED_MODULE_5__service_core_model_request_sort__["a" /* Sort */]('metadata.created', __WEBPACK_IMPORTED_MODULE_6__service_core_model_request_sort_order__["a" /* SortOrder */].desc)];
        this.getterRequest = getterRequest;
        this.getFileModels();
        this.logModelsObservable.subscribe(function (logModels) {
            if (logModels.length === 0) {
                _this.isEmpty = true;
            }
            else {
                _this.loadModelsIfEmptySpace();
            }
        });
    };
    LogSelectorColumnComponent.prototype.selectLogModel = function (index) {
        this.logModelSelected.emit([this.logLevel, this.childLogModels[index]]);
    };
    LogSelectorColumnComponent.prototype.onScroll = function () {
        this.loadModelsIfEmptySpace();
    };
    /**
     * checks if more logs exist if so check if there is space in viewport
     */
    LogSelectorColumnComponent.prototype.loadModelsIfEmptySpace = function () {
        if (this.moreExist) {
            if (this.isElementInViewport(this.bottom.nativeElement)) {
                this.getFileModels();
            }
        }
    };
    LogSelectorColumnComponent.prototype.isElementInViewport = function (el) {
        var viewportOffset = el.getBoundingClientRect();
        var top = viewportOffset.top;
        return top <= window.innerHeight;
    };
    LogSelectorColumnComponent.prototype.getFileModels = function () {
        var _this = this;
        this.getterRequest.pageable.page++;
        this.logModelsObservable = this.logModelService.theGetter(this.getterRequest);
        this.logModelsObservable.subscribe(function (logModels) {
            if (logModels.length === 0) {
                _this.moreExist = false;
            }
            else {
                _this.childLogModels = _this.childLogModels.concat(logModels);
            }
        });
    };
    LogSelectorColumnComponent.prototype.onResize = function (event) {
        var _this = this;
        setTimeout(function () {
            _this.loadModelsIfEmptySpace();
        }, 500);
    };
    LogSelectorColumnComponent.prototype.onDragStart = function (event, logModelID) {
        event.dataTransfer.setData('id', logModelID);
    };
    LogSelectorColumnComponent.prototype.onDrop = function (event, logModelID) {
        event.preventDefault();
        event.stopPropagation();
        var onLogModelDrop = new __WEBPACK_IMPORTED_MODULE_7__on_log_model_drop__["a" /* OnLogModelDrop */]();
        onLogModelDrop.id = event.dataTransfer.getData('id');
        onLogModelDrop.parentID = logModelID;
        this.logModelDropped.emit(onLogModelDrop);
    };
    LogSelectorColumnComponent.prototype.onDragOver = function (evt) {
        evt.preventDefault();
        evt.stopPropagation();
    };
    LogSelectorColumnComponent.prototype.onDragLeave = function (evt) {
        evt.preventDefault();
        evt.stopPropagation();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], LogSelectorColumnComponent.prototype, "showColumnToolbar", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], LogSelectorColumnComponent.prototype, "logLevel", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__service_core_model_data_log_log_model__["a" /* LogModel */])
    ], LogSelectorColumnComponent.prototype, "parentLogModel", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], LogSelectorColumnComponent.prototype, "logModelSelected", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], LogSelectorColumnComponent.prototype, "logModelDropped", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('bottom'),
        __metadata("design:type", Object)
    ], LogSelectorColumnComponent.prototype, "bottom", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], LogSelectorColumnComponent.prototype, "logModelIDsToHide", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], LogSelectorColumnComponent.prototype, "selectedLogModelID", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array),
        __metadata("design:paramtypes", [Array])
    ], LogSelectorColumnComponent.prototype, "pathLogModels", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], LogSelectorColumnComponent.prototype, "onResize", null);
    LogSelectorColumnComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-log-selector-column',
            template: __webpack_require__("./src/app/component/widget/core/log/selector/column/log-selector-column.component.html"),
            styles: [__webpack_require__("./src/app/component/widget/core/log/selector/column/log-selector-column.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__service_core_endpoint_log_log_model_service__["a" /* LogModelService */]])
    ], LogSelectorColumnComponent);
    return LogSelectorColumnComponent;
}());



/***/ }),

/***/ "./src/app/component/widget/core/log/selector/column/toolbar/log-selector-column-toolbar.component.css":
/***/ (function(module, exports) {

module.exports = ".item-top {\n  color: var(--main-lighter-color);\n  background-color: var(--main-darker-color);\n  text-align: center;\n}\n\n.item-top:hover {\n  background-color: var(--main-darker-2-color);\n}\n"

/***/ }),

/***/ "./src/app/component/widget/core/log/selector/column/toolbar/log-selector-column-toolbar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"item-top\">column toolbar</div>\n"

/***/ }),

/***/ "./src/app/component/widget/core/log/selector/column/toolbar/log-selector-column-toolbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogSelectorColumnToolbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_core_model_data_log_log_model__ = __webpack_require__("./src/app/service/core/model/data/log/log-model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LogSelectorColumnToolbarComponent = /** @class */ (function () {
    function LogSelectorColumnToolbarComponent() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__service_core_model_data_log_log_model__["a" /* LogModel */])
    ], LogSelectorColumnToolbarComponent.prototype, "logModel", void 0);
    LogSelectorColumnToolbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-log-selector-column-toolbar',
            template: __webpack_require__("./src/app/component/widget/core/log/selector/column/toolbar/log-selector-column-toolbar.component.html"),
            styles: [__webpack_require__("./src/app/component/widget/core/log/selector/column/toolbar/log-selector-column-toolbar.component.css")]
        })
    ], LogSelectorColumnToolbarComponent);
    return LogSelectorColumnToolbarComponent;
}());



/***/ }),

/***/ "./src/app/component/widget/core/log/selector/log-selector.component.css":
/***/ (function(module, exports) {

module.exports = ".container {\n  width: 100%;\n  height: 100%;\n  overflow-x: scroll;\n  overflow-y: hidden;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  color: var(--text-light-color);\n}\n\n.column {\n  min-width: 180px;\n  max-width: 180px;\n\n  height: 100%;\n  overflow: hidden;\n  border-right: 1px solid var(--main-darker-2-color);\n}\n"

/***/ }),

/***/ "./src/app/component/widget/core/log/selector/log-selector.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"column\" *ngFor=\"let logModel of pathLogModels, let i = index\">\n    <app-log-selector-column [logLevel]=\"i\"\n                             [pathLogModels]=\"pathLogModels\"\n                             [selectedLogModelID]=\"selectedLogModel.id\"\n                             [parentLogModel]=\"logModel\"\n                             [showColumnToolbar]=\"showColumnToolbar\"\n                             [logModelIDsToHide]=\"logModelIDsToHide\"\n                             (logModelDropped)=\"onLogModelDropped($event)\"\n                             (logModelSelected)=\"onSelectedFileModel($event)\"></app-log-selector-column>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/component/widget/core/log/selector/log-selector.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogSelectorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_core_model_data_log_log_model__ = __webpack_require__("./src/app/service/core/model/data/log/log-model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_core_endpoint_log_log_model_service__ = __webpack_require__("./src/app/service/core/endpoint/log/log-model.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__column_log_selector_column_component__ = __webpack_require__("./src/app/component/widget/core/log/selector/column/log-selector-column.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_core_model_data_log_extra_log_display_type__ = __webpack_require__("./src/app/service/core/model/data/log/extra/log-display-type.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LogSelectorComponent = /** @class */ (function () {
    function LogSelectorComponent(logModelService) {
        this.logModelService = logModelService;
        this.logModelSelectedAgain = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.logModelSelectedOnce = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.showColumnToolbar = false;
        this.pathLogModels = [];
        this.selectedLogModel = new __WEBPACK_IMPORTED_MODULE_1__service_core_model_data_log_log_model__["a" /* LogModel */]();
    }
    LogSelectorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.logModelService.getRoot(__WEBPACK_IMPORTED_MODULE_4__service_core_model_data_log_extra_log_display_type__["a" /* LogDisplayType */].DEFAULT, null).subscribe(function (rootLogModel) {
            _this.pathLogModels = [rootLogModel];
        });
    };
    LogSelectorComponent.prototype.onSelectedFileModel = function (event) {
        var oldSelectedFileModel = this.selectedLogModel;
        this.selectedLogModel = event[1];
        if (oldSelectedFileModel !== undefined && this.selectedLogModel.id === oldSelectedFileModel.id) {
            this.logModelSelectedAgain.emit(this.selectedLogModel);
        }
        else {
            this.pathLogModels = this.pathLogModels.slice(0, event[0] + 1);
            this.pathLogModels.push(event[1]);
            this.logModelSelectedOnce.emit(this.selectedLogModel);
        }
    };
    LogSelectorComponent.prototype.onLogModelDropped = function (event) {
        var _this = this;
        this.logModelService.assignNewParent(event.id, event.parentID).subscribe(function (logModel) {
            _this.columns.forEach(function (column) {
                column.ngOnInit();
            });
        });
    };
    LogSelectorComponent.prototype.getPathLogModels = function () {
        return this.pathLogModels;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], LogSelectorComponent.prototype, "logModelIDsToHide", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], LogSelectorComponent.prototype, "showColumnToolbar", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], LogSelectorComponent.prototype, "logModelSelectedAgain", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], LogSelectorComponent.prototype, "logModelSelectedOnce", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChildren"])(__WEBPACK_IMPORTED_MODULE_3__column_log_selector_column_component__["a" /* LogSelectorColumnComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"])
    ], LogSelectorComponent.prototype, "columns", void 0);
    LogSelectorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-log-selector',
            template: __webpack_require__("./src/app/component/widget/core/log/selector/log-selector.component.html"),
            styles: [__webpack_require__("./src/app/component/widget/core/log/selector/log-selector.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__service_core_endpoint_log_log_model_service__["a" /* LogModelService */]])
    ], LogSelectorComponent);
    return LogSelectorComponent;
}());



/***/ }),

/***/ "./src/app/component/widget/core/log/selector/on-log-model-drop.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OnLogModelDrop; });
var OnLogModelDrop = /** @class */ (function () {
    function OnLogModelDrop() {
    }
    return OnLogModelDrop;
}());



/***/ }),

/***/ "./src/app/component/widget/core/tag/create/tag-creator.component.css":
/***/ (function(module, exports) {

module.exports = ".toolbar {\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: auto 15px;\n      grid-template-columns: auto 15px;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  text-align: center;\n}\n\n.fa-times {\n  color: var(--main-darker-2-color);\n}\n\n.fa-times:hover {\n  cursor: pointer;\n  color: var(--main-darker-3-color);\n}\n\nbutton:hover {\n  cursor: pointer;\n}\n\ninput {\n  text-align: center;\n}\n\n.container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n"

/***/ }),

/***/ "./src/app/component/widget/core/tag/create/tag-creator.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"toolbar\">\n  <div></div>\n  <i class=\"fa fa-times\" aria-hidden=\"true\" (click)=\"onClose()\"></i>\n</div>\n<div class=\"container\">\n  <input type=\"text\" [(ngModel)]=\"tagModel.metadata.name\" placeholder=\"name\">\n  <input type=\"text\" [(ngModel)]=\"tagModel.metadata.description\" placeholder=\"description\">\n  <button (click)=\"createTagFileModel()\">save</button>\n</div>\n\n"

/***/ }),

/***/ "./src/app/component/widget/core/tag/create/tag-creator.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TagCreatorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_core_model_data_tag_tag_model__ = __webpack_require__("./src/app/service/core/model/data/tag/tag-model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_core_endpoint_tag_tag_model_service__ = __webpack_require__("./src/app/service/core/endpoint/tag/tag-model.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_core_model_data_metadata__ = __webpack_require__("./src/app/service/core/model/data/metadata.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TagCreatorComponent = /** @class */ (function () {
    function TagCreatorComponent(tagModelService) {
        this.tagModelService = tagModelService;
        this.close = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.createdTagFileModel = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    TagCreatorComponent.prototype.ngOnInit = function () {
        if (this.tagModel === undefined) {
            this.tagModel = new __WEBPACK_IMPORTED_MODULE_1__service_core_model_data_tag_tag_model__["a" /* TagModel */]();
        }
        if (this.tagModel.metadata === undefined) {
            this.tagModel.metadata = new __WEBPACK_IMPORTED_MODULE_3__service_core_model_data_metadata__["a" /* Metadata */]();
        }
        if (this.tagModel.logIDs === undefined) {
            this.tagModel.logIDs = [];
        }
    };
    TagCreatorComponent.prototype.createTagFileModel = function () {
        var _this = this;
        this.tagModelService.create(this.tagModel)
            .subscribe(function (tagModel) {
            _this.createdTagFileModel.emit(tagModel);
        });
    };
    TagCreatorComponent.prototype.onClose = function () {
        this.close.emit(true);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], TagCreatorComponent.prototype, "close", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], TagCreatorComponent.prototype, "createdTagFileModel", void 0);
    TagCreatorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-tag-creator',
            template: __webpack_require__("./src/app/component/widget/core/tag/create/tag-creator.component.html"),
            styles: [__webpack_require__("./src/app/component/widget/core/tag/create/tag-creator.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__service_core_endpoint_tag_tag_model_service__["a" /* TagModelService */]])
    ], TagCreatorComponent);
    return TagCreatorComponent;
}());



/***/ }),

/***/ "./src/app/component/widget/core/tag/selector/content/tag-selector-content.component.css":
/***/ (function(module, exports) {

module.exports = ".container {\n  overflow: scroll;\n  height: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n\n.selectable-tags-container {\n  overflow: scroll;\n  height: 100%;\n}\n\n.tag {\n  display: inline-block;\n  color: var(--main-lighter-color);\n  background-color: var(--main-darker-color);\n  border-radius: 3px;\n  padding-left: 3px;\n  padding-right: 3px;\n  margin: 3px;\n}\n\n.tag:hover {\n  cursor: pointer;\n  background-color: var(--main-darker-2-color);\n}\n\n.fa-pencil-square-o {\n  font-size: 13px;\n}\n\n.fa-pencil-square-o:hover {\n  color: var(--main-darker-3-color);\n}\n"

/***/ }),

/***/ "./src/app/component/widget/core/tag/selector/content/tag-selector-content.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" (scroll)=\"onScroll()\">\n  <span *ngFor=\"let model of tagModels; let i = index\">\n    <div class=\"tag no_selection\" *ngIf=\"hideTagModelIDs.indexOf(model.id) === -1\">\n      <span (click)=\"onSelectTagModel(i)\">{{model.metadata.name}}</span>\n      <i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\" (click)=\"onUpdateTagFileModel(i)\"></i>\n    </div>\n  </span>\n  <div #bottom></div>\n</div>\n"

/***/ }),

/***/ "./src/app/component/widget/core/tag/selector/content/tag-selector-content.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TagSelectorContentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_core_endpoint_tag_tag_getter_request__ = __webpack_require__("./src/app/service/core/endpoint/tag/tag-getter-request.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_core_endpoint_tag_tag_model_service__ = __webpack_require__("./src/app/service/core/endpoint/tag/tag-model.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_core_model_request_sort_order__ = __webpack_require__("./src/app/service/core/model/request/sort-order.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_core_model_request_sort__ = __webpack_require__("./src/app/service/core/model/request/sort.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__service_core_model_request_pageable__ = __webpack_require__("./src/app/service/core/model/request/pageable.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TagSelectorContentComponent = /** @class */ (function () {
    function TagSelectorContentComponent(tagModelService) {
        this.tagModelService = tagModelService;
        this.selectTagFileModel = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.updateTagFileModel = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    Object.defineProperty(TagSelectorContentComponent.prototype, "tagNameLikeString", {
        set: function (tagNameLikeString) {
            this._tagNameLikeString = tagNameLikeString;
            this.initialize();
        },
        enumerable: true,
        configurable: true
    });
    TagSelectorContentComponent.prototype.initialize = function () {
        var getterRequest = new __WEBPACK_IMPORTED_MODULE_1__service_core_endpoint_tag_tag_getter_request__["a" /* TagGetterRequest */]();
        getterRequest.metadataNameLike = this._tagNameLikeString;
        getterRequest.pageable = new __WEBPACK_IMPORTED_MODULE_5__service_core_model_request_pageable__["a" /* Pageable */](-1, 20);
        getterRequest.sorts = [new __WEBPACK_IMPORTED_MODULE_4__service_core_model_request_sort__["a" /* Sort */]('metadata.name', __WEBPACK_IMPORTED_MODULE_3__service_core_model_request_sort_order__["a" /* SortOrder */].asc)];
        if (this.hideTagModelIDs == null) {
            this.hideTagModelIDs = [];
        }
        this.getterRequest = getterRequest;
        this.tagModels = [];
        this.moreFilesExist = true;
        this.getTagModels();
    };
    TagSelectorContentComponent.prototype.onSelectTagModel = function (index) {
        this.selectTagFileModel.emit(this.tagModels[index]);
        this.loadModelsIfEmptySpace();
    };
    TagSelectorContentComponent.prototype.onUpdateTagFileModel = function (index) {
        this.updateTagFileModel.emit(this.tagModels[index]);
    };
    TagSelectorContentComponent.prototype.getTagModels = function () {
        var _this = this;
        this.getterRequest.pageable.page++;
        this.tagModelService.theGetter(this.getterRequest).subscribe(function (tagModels) {
            if (tagModels.length === 0) {
                _this.moreFilesExist = false;
            }
            else {
                _this.tagModels = _this.tagModels.concat(tagModels);
                _this.loadModelsIfEmptySpace();
            }
        });
    };
    TagSelectorContentComponent.prototype.onScroll = function () {
        this.loadModelsIfEmptySpace();
    };
    TagSelectorContentComponent.prototype.loadModelsIfEmptySpace = function () {
        if (this.moreFilesExist) {
            if (this.isElementInViewport(this.bottom.nativeElement)) {
                this.getTagModels();
            }
        }
    };
    TagSelectorContentComponent.prototype.isElementInViewport = function (el) {
        var viewportOffset = el.getBoundingClientRect();
        var top = viewportOffset.top;
        return top <= window.innerHeight;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], TagSelectorContentComponent.prototype, "selectTagFileModel", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], TagSelectorContentComponent.prototype, "updateTagFileModel", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], TagSelectorContentComponent.prototype, "hideTagModelIDs", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], TagSelectorContentComponent.prototype, "tagNameLikeString", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('bottom'),
        __metadata("design:type", Object)
    ], TagSelectorContentComponent.prototype, "bottom", void 0);
    TagSelectorContentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-tag-selector-content',
            template: __webpack_require__("./src/app/component/widget/core/tag/selector/content/tag-selector-content.component.html"),
            styles: [__webpack_require__("./src/app/component/widget/core/tag/selector/content/tag-selector-content.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__service_core_endpoint_tag_tag_model_service__["a" /* TagModelService */]])
    ], TagSelectorContentComponent);
    return TagSelectorContentComponent;
}());



/***/ }),

/***/ "./src/app/component/widget/core/tag/selector/tag-selector.component.css":
/***/ (function(module, exports) {

module.exports = ".toolbar {\n  height: 20px;\n  overflow: hidden;\n}\n\n.content {\n  height: calc(100% - 20px);\n}\n"

/***/ }),

/***/ "./src/app/component/widget/core/tag/selector/tag-selector.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"toolbar\">\n  <app-selector-toolbar [tagNameLikeString]=\"tagNameLikeString\"\n                        (tagNameLikeStringChange)=\"onTagNameLikeStringChange($event)\"\n                        (new)=\"onNew()\"\n                        (close)=\"onClose()\"></app-selector-toolbar>\n</div>\n<div class=\"content\">\n  <app-tag-selector-content [hideTagModelIDs]=\"hideTagModelIDs\"\n                            [tagNameLikeString]=\"tagNameLikeString\"\n                            (updateTagFileModel)=\"onUpdateTagFileModel($event)\"\n                            (selectTagFileModel)=\"onSelectTagModel($event)\"></app-tag-selector-content>\n</div>\n"

/***/ }),

/***/ "./src/app/component/widget/core/tag/selector/tag-selector.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TagSelectorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TagSelectorComponent = /** @class */ (function () {
    function TagSelectorComponent() {
        this.selectTagFileModel = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.updateTagFileModel = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.close = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.new = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    TagSelectorComponent.prototype.onTagNameLikeStringChange = function (tagName) {
        this.tagNameLikeString = tagName;
    };
    TagSelectorComponent.prototype.onClose = function () {
        this.close.emit(true);
    };
    TagSelectorComponent.prototype.onNew = function () {
        this.new.emit(true);
    };
    TagSelectorComponent.prototype.onSelectTagModel = function (tagModel) {
        this.selectTagFileModel.emit(tagModel);
    };
    TagSelectorComponent.prototype.onUpdateTagFileModel = function (tagModel) {
        this.updateTagFileModel.emit(tagModel);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], TagSelectorComponent.prototype, "hideTagModelIDs", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], TagSelectorComponent.prototype, "tagNameLikeString", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], TagSelectorComponent.prototype, "selectTagFileModel", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], TagSelectorComponent.prototype, "updateTagFileModel", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], TagSelectorComponent.prototype, "close", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], TagSelectorComponent.prototype, "new", void 0);
    TagSelectorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-tag-selector',
            template: __webpack_require__("./src/app/component/widget/core/tag/selector/tag-selector.component.html"),
            styles: [__webpack_require__("./src/app/component/widget/core/tag/selector/tag-selector.component.css")]
        })
    ], TagSelectorComponent);
    return TagSelectorComponent;
}());



/***/ }),

/***/ "./src/app/component/widget/core/tag/selector/toolbar/tag-selector-toolbar.component.css":
/***/ (function(module, exports) {

module.exports = ".toolbar {\n  color: var(--main-darker-2-color);\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: auto 40px 15px;\n      grid-template-columns: auto 40px 15px;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  text-align: center;\n}\n\n.new:hover {\n  cursor: pointer;\n}\n\n.fa-times:hover {\n  cursor: pointer;\n  color: var(--main-darker-3-color);\n}\n"

/***/ }),

/***/ "./src/app/component/widget/core/tag/selector/toolbar/tag-selector-toolbar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"toolbar\">\n  <input #input type=\"text\" [(ngModel)]=\"tagNameLikeString\" (input)=\"onTagNameLikeStringChange($event)\"\n         placeholder=\"search tags\">\n  <button class=\"new\" (click)=\"onNew()\">new</button>\n  <i class=\"fa fa-times\" aria-hidden=\"true\" (click)=\"onClose()\"></i>\n</div>\n"

/***/ }),

/***/ "./src/app/component/widget/core/tag/selector/toolbar/tag-selector-toolbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TagSelectorToolbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TagSelectorToolbarComponent = /** @class */ (function () {
    function TagSelectorToolbarComponent() {
        this.tagNameLikeStringChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.close = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.new = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    TagSelectorToolbarComponent.prototype.ngAfterViewInit = function () {
        this.inputElement.nativeElement.focus();
    };
    TagSelectorToolbarComponent.prototype.onTagNameLikeStringChange = function () {
        this.tagNameLikeStringChange.emit(this.tagNameLikeString);
    };
    TagSelectorToolbarComponent.prototype.onClose = function () {
        this.close.emit(true);
    };
    TagSelectorToolbarComponent.prototype.onNew = function () {
        this.new.emit(true);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], TagSelectorToolbarComponent.prototype, "tagNameLikeString", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], TagSelectorToolbarComponent.prototype, "tagNameLikeStringChange", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], TagSelectorToolbarComponent.prototype, "close", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], TagSelectorToolbarComponent.prototype, "new", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('input'),
        __metadata("design:type", Object)
    ], TagSelectorToolbarComponent.prototype, "inputElement", void 0);
    TagSelectorToolbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-selector-toolbar',
            template: __webpack_require__("./src/app/component/widget/core/tag/selector/toolbar/tag-selector-toolbar.component.html"),
            styles: [__webpack_require__("./src/app/component/widget/core/tag/selector/toolbar/tag-selector-toolbar.component.css")]
        })
    ], TagSelectorToolbarComponent);
    return TagSelectorToolbarComponent;
}());



/***/ }),

/***/ "./src/app/component/widget/core/tag/tag-widget.component.css":
/***/ (function(module, exports) {

module.exports = ".container {\n  height: 100%;\n  width: 100%;\n  overflow: hidden;\n}\n"

/***/ }),

/***/ "./src/app/component/widget/core/tag/tag-widget.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <app-tag-selector *ngIf=\"displayType ==='select'\"\n                    [hideTagModelIDs]=\"hideTagModelIDs\"\n                    [(tagNameLikeString)]=\"tagNameLikeString\"\n                    (close)=\"onClose()\"\n                    (new)=\"onNew()\"\n                    (updateTagFileModel)=\"onUpdateTagFileModel($event)\"\n                    (selectTagFileModel)=\"onTagModelSelected($event)\"></app-tag-selector>\n  <app-tag-creator *ngIf=\"displayType === 'create'\"\n                   (close)=\"onClose()\"\n                   (createdTagFileModel)=\"onCreatedTagFileModel($event)\"></app-tag-creator>\n  <app-tag-updator *ngIf=\"displayType === 'update'\"\n                   [tagModel]=\"selectedTagModel\"\n                   (close)=\"onClose()\"\n                   (updatedTagFileModel)=\"onUpdatedTagFileModel($event)\"></app-tag-updator>\n</div>\n"

/***/ }),

/***/ "./src/app/component/widget/core/tag/tag-widget.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TagWidgetComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TagWidgetComponent = /** @class */ (function () {
    function TagWidgetComponent() {
        this.tagModelSelected = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.createdTagFileModel = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.close = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    TagWidgetComponent.prototype.ngOnInit = function () {
        if (this.hideTagModelIDs === undefined) {
            this.hideTagModelIDs = [];
        }
        this.displayType = 'select';
    };
    TagWidgetComponent.prototype.onNew = function () {
        this.displayType = 'create';
    };
    TagWidgetComponent.prototype.onClose = function () {
        if (this.displayType === 'select') {
            this.close.emit(true);
        }
        else {
            this.displayType = 'select';
        }
    };
    TagWidgetComponent.prototype.onUpdateTagFileModel = function (tagModel) {
        this.selectedTagModel = tagModel;
        this.displayType = 'update';
    };
    TagWidgetComponent.prototype.onTagModelSelected = function (tagModel) {
        this.selectedTagModel = tagModel;
        this.tagModelSelected.emit(this.selectedTagModel);
    };
    TagWidgetComponent.prototype.onCreatedTagFileModel = function (tagModel) {
        this.tagNameLikeString = tagModel.metadata.name;
        this.createdTagFileModel.emit(tagModel);
        this.displayType = 'select';
    };
    TagWidgetComponent.prototype.onUpdatedTagFileModel = function (tagModel) {
        this.tagNameLikeString = tagModel.metadata.name;
        this.displayType = 'select';
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], TagWidgetComponent.prototype, "hideTagModelIDs", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], TagWidgetComponent.prototype, "tagNameLikeString", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], TagWidgetComponent.prototype, "tagModelSelected", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], TagWidgetComponent.prototype, "createdTagFileModel", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], TagWidgetComponent.prototype, "close", void 0);
    TagWidgetComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-tag-widget',
            template: __webpack_require__("./src/app/component/widget/core/tag/tag-widget.component.html"),
            styles: [__webpack_require__("./src/app/component/widget/core/tag/tag-widget.component.css")]
        })
    ], TagWidgetComponent);
    return TagWidgetComponent;
}());



/***/ }),

/***/ "./src/app/component/widget/core/tag/update/tag-updator.component.css":
/***/ (function(module, exports) {

module.exports = ".toolbar {\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: auto 15px;\n      grid-template-columns: auto 15px;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  text-align: center;\n}\n\n.fa-times {\n  color: var(--main-darker-2-color);\n}\n\n.fa-times:hover {\n  cursor: pointer;\n  color: var(--main-darker-3-color);\n}\n\n.container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n\n.name {\n  text-align: center;\n}\n"

/***/ }),

/***/ "./src/app/component/widget/core/tag/update/tag-updator.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"toolbar\">\n  <div>\n    <button (click)=\"updateTagFileModel()\">\n      <i class=\"fa fa-floppy-o\" aria-hidden=\"true\"></i>\n      save\n    </button>\n  </div>\n  <i class=\"fa fa-times\" aria-hidden=\"true\" (click)=\"onClose()\"></i>\n</div>\n<div class=\"container\">\n  <div>\n    <input class=\"name\" type=\"text\" [(ngModel)]=\"tagModel.metadata.name\" placeholder=\"name\">\n  </div>\n  <div>\n    description: <input type=\"text\" [(ngModel)]=\"tagModel.metadata.description\" placeholder=\"description\">\n  </div>\n  <div>created: {{tagModel.metadata.created | date}}</div>\n  <div>updated: {{tagModel.metadata.lastUpdated | date}}</div>\n</div>\n"

/***/ }),

/***/ "./src/app/component/widget/core/tag/update/tag-updator.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TagUpdatorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_core_endpoint_tag_tag_model_service__ = __webpack_require__("./src/app/service/core/endpoint/tag/tag-model.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_core_model_data_tag_tag_model__ = __webpack_require__("./src/app/service/core/model/data/tag/tag-model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TagUpdatorComponent = /** @class */ (function () {
    function TagUpdatorComponent(tagModelService) {
        this.tagModelService = tagModelService;
        this.close = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.updatedTagFileModel = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    TagUpdatorComponent.prototype.onClose = function () {
        this.close.emit(true);
    };
    TagUpdatorComponent.prototype.updateTagFileModel = function () {
        var _this = this;
        this.tagModelService.update(this.tagModel)
            .subscribe(function (model) {
            _this.updatedTagFileModel.emit(model);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__service_core_model_data_tag_tag_model__["a" /* TagModel */])
    ], TagUpdatorComponent.prototype, "tagModel", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], TagUpdatorComponent.prototype, "close", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], TagUpdatorComponent.prototype, "updatedTagFileModel", void 0);
    TagUpdatorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-tag-updator',
            template: __webpack_require__("./src/app/component/widget/core/tag/update/tag-updator.component.html"),
            styles: [__webpack_require__("./src/app/component/widget/core/tag/update/tag-updator.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_core_endpoint_tag_tag_model_service__["a" /* TagModelService */]])
    ], TagUpdatorComponent);
    return TagUpdatorComponent;
}());



/***/ }),

/***/ "./src/app/component/widget/util/script-hack/script-hack.component.html":
/***/ (function(module, exports) {

module.exports = "<div #script style=\"{display: none}\">\n  <ng-content></ng-content>\n</div>\n"

/***/ }),

/***/ "./src/app/component/widget/util/script-hack/script-hack.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScriptHackComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
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
 * Angular strips out <script> tags
 * Here's a hack to add them back
 * https://stackoverflow.com/questions/42458346/need-to-insert-script-tag-in-angular-2/44904601#44904601
 */
var ScriptHackComponent = /** @class */ (function () {
    function ScriptHackComponent() {
    }
    ScriptHackComponent.prototype.convertToScript = function () {
        var element = this.script.nativeElement;
        var script = document.createElement('script');
        script.type = this.type ? this.type : 'text/javascript';
        if (this.src) {
            script.src = this.src;
        }
        if (element.innerHTML) {
            script.innerHTML = element.innerHTML;
        }
        var parent = element.parentElement;
        parent.parentElement.replaceChild(script, parent);
    };
    ScriptHackComponent.prototype.ngAfterViewInit = function () {
        this.convertToScript();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], ScriptHackComponent.prototype, "src", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], ScriptHackComponent.prototype, "type", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('script'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], ScriptHackComponent.prototype, "script", void 0);
    ScriptHackComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-script-hack',
            template: __webpack_require__("./src/app/component/widget/util/script-hack/script-hack.component.html")
        })
    ], ScriptHackComponent);
    return ScriptHackComponent;
}());



/***/ }),

/***/ "./src/app/component/widget/util/twitter/twitter.component.css":
/***/ (function(module, exports) {

module.exports = ".container {\n  width: 100%;\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: 100%;\n      grid-template-columns: 100%;\n}\n\n.t {\n  overflow: scroll;\n}\n\n.tweet {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n"

/***/ }),

/***/ "./src/app/component/widget/util/twitter/twitter.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- div container and t are needed for tweet responsiveness when window is resized to smaller width than tweet -->\n<div class=\"container\">\n  <div class=\"t\">\n    <div #tweet class=\"tweet\"></div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/component/widget/util/twitter/twitter.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TwitterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TwitterComponent = /** @class */ (function () {
    function TwitterComponent() {
    }
    TwitterComponent.prototype.ngOnInit = function () {
        twttr.widgets.createTweet(this.tweetID, this.tweetElement.nativeElement, {
            theme: 'default' // default | dark
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], TwitterComponent.prototype, "tweetID", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('tweet'),
        __metadata("design:type", Object)
    ], TwitterComponent.prototype, "tweetElement", void 0);
    TwitterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-twitter',
            template: __webpack_require__("./src/app/component/widget/util/twitter/twitter.component.html"),
            styles: [__webpack_require__("./src/app/component/widget/util/twitter/twitter.component.css")]
        })
    ], TwitterComponent);
    return TwitterComponent;
}());



/***/ }),

/***/ "./src/app/pipe/code/code.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CodePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CodePipe = /** @class */ (function () {
    function CodePipe() {
    }
    CodePipe.prototype.transform = function (dataString) {
        var data = JSON.parse(dataString);
        return PR.prettyPrintOne(data.text, data.language, data.showLineNumber);
    };
    CodePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'code'
        })
    ], CodePipe);
    return CodePipe;
}());



/***/ }),

/***/ "./src/app/pipe/date/date.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DatePipe = /** @class */ (function () {
    function DatePipe() {
    }
    DatePipe.prototype.transform = function (unixTime) {
        if (unixTime != null) {
            return new Date(unixTime).toDateString();
        }
        else {
            return 'undefined';
        }
    };
    DatePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'date'
        })
    ], DatePipe);
    return DatePipe;
}());



/***/ }),

/***/ "./src/app/pipe/markdown/markdown.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MarkdownPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MarkdownPipe = /** @class */ (function () {
    function MarkdownPipe() {
    }
    MarkdownPipe.prototype.transform = function (markdown) {
        return marked(markdown);
    };
    MarkdownPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'markdown'
        })
    ], MarkdownPipe);
    return MarkdownPipe;
}());



/***/ }),

/***/ "./src/app/pipe/safe.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SafePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SafePipe = /** @class */ (function () {
    function SafePipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SafePipe.prototype.transform = function (url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    };
    SafePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'safe'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* DomSanitizer */]])
    ], SafePipe);
    return SafePipe;
}());



/***/ }),

/***/ "./src/app/service/core/endpoint/image/image-getter-request.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageGetterRequest; });
var ImageGetterRequest = /** @class */ (function () {
    function ImageGetterRequest() {
    }
    return ImageGetterRequest;
}());



/***/ }),

/***/ "./src/app/service/core/endpoint/image/image-model.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageModelService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__model_request_sort_order__ = __webpack_require__("./src/app/service/core/model/request/sort-order.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ImageModelService = /** @class */ (function () {
    function ImageModelService(http) {
        this.http = http;
        this.URL = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].coreEndPoint + '/api/image';
    }
    ImageModelService.prototype.theGetter = function (getterRequest) {
        return this.http
            .get(this.generateGetterRequestURL(getterRequest))
            .map(function (response) {
            var hateoasResponse = response.json();
            return hateoasResponse._embedded.collection;
        });
    };
    ImageModelService.prototype.generateGetterRequestURL = function (getterRequest) {
        var urlParameters = [];
        if (getterRequest.sorts !== undefined) {
            for (var _i = 0, _a = getterRequest.sorts; _i < _a.length; _i++) {
                var s = _a[_i];
                if (!!s) {
                    urlParameters.push('sort=' + s.parameter + ',' + __WEBPACK_IMPORTED_MODULE_4__model_request_sort_order__["a" /* SortOrder */][s.order]);
                }
            }
        }
        if (getterRequest.pageable !== undefined) {
            urlParameters.push('page=' + getterRequest.pageable.page + '&size=' + getterRequest.pageable.size);
        }
        if (getterRequest.createdBefore !== undefined) {
            urlParameters.push('createdBefore=' + getterRequest.createdBefore);
        }
        var url = this.URL;
        if (urlParameters.length > 0) {
            url += '?' + urlParameters.join('&');
        }
        return url;
    };
    ImageModelService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], ImageModelService);
    return ImageModelService;
}());



/***/ }),

/***/ "./src/app/service/core/endpoint/image/image-upload.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageUploadService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ImageUploadService = /** @class */ (function () {
    function ImageUploadService(http) {
        this.http = http;
        this.URL = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].coreEndPoint + '/api/image-upload';
    }
    ImageUploadService.prototype.uploadByURL = function (imageURL) {
        if (this.validURL(imageURL)) {
            var url = this.URL + '/url';
            return this.http
                .post(url, { url: imageURL })
                .map(function (response) {
                var hateoasResponse = response.json();
                return hateoasResponse._embedded.collection[0];
            });
        }
        else {
            return 'url not valid';
        }
    };
    ImageUploadService.prototype.uploadByFile = function (files) {
        var formData = new FormData();
        for (var i = 0; i < files.length; i++) {
            var file = files[i];
            // Check the file type.
            if (!file.type.match('image.*')) {
                continue;
            }
            // Add the file to the request.
            formData.append('file', file, file.name);
        }
        return this.http
            .post(this.URL + '/file', formData)
            .map(function (response) {
            var hateoasResponse = response.json();
            return hateoasResponse._embedded.collection[0];
        });
    };
    ImageUploadService.prototype.validURL = function (str) {
        try {
            new URL(str);
            return true;
        }
        catch (_) {
            return false;
        }
    };
    ImageUploadService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], ImageUploadService);
    return ImageUploadService;
}());



/***/ }),

/***/ "./src/app/service/core/endpoint/log/log-getter-request.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogGetterRequest; });
var LogGetterRequest = /** @class */ (function () {
    function LogGetterRequest() {
    }
    return LogGetterRequest;
}());



/***/ }),

/***/ "./src/app/service/core/endpoint/log/log-model.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogModelService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__model_request_sort_order__ = __webpack_require__("./src/app/service/core/model/request/sort-order.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__model_data_log_extra_log_display_type__ = __webpack_require__("./src/app/service/core/model/data/log/extra/log-display-type.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LogModelService = /** @class */ (function () {
    function LogModelService(http) {
        this.http = http;
        this.URL = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].coreEndPoint + '/api/log';
    }
    /**
     * `?page=0&size=10`
     * @returns {Observable<LogModel[]>}
     */
    LogModelService.prototype.theGetter = function (getterRequest) {
        return this.http
            .get(this.generateGetterRequestURL(getterRequest))
            .map(function (response) {
            var hateoasResponse = response.json();
            return hateoasResponse._embedded.collection;
        });
    };
    LogModelService.prototype.generateGetterRequestURL = function (getterRequest) {
        var urlParameters = [];
        if (getterRequest.sorts !== undefined) {
            for (var _i = 0, _a = getterRequest.sorts; _i < _a.length; _i++) {
                var s = _a[_i];
                if (!!s) {
                    urlParameters.push('sort=' + s.parameter + ',' + __WEBPACK_IMPORTED_MODULE_4__model_request_sort_order__["a" /* SortOrder */][s.order]);
                }
            }
        }
        if (getterRequest.metadataNameLike !== undefined) {
            urlParameters.push('metadataNameLike=' + getterRequest.metadataNameLike);
        }
        if (getterRequest.logDisplayType !== undefined) {
            urlParameters.push('logDisplayType=' + __WEBPACK_IMPORTED_MODULE_5__model_data_log_extra_log_display_type__["a" /* LogDisplayType */][getterRequest.logDisplayType]);
        }
        if (getterRequest.pageable !== undefined) {
            urlParameters.push('page=' + getterRequest.pageable.page + '&size=' + getterRequest.pageable.size);
        }
        if (getterRequest.ancestryLogID !== undefined) {
            urlParameters.push('ancestryLogID=' + getterRequest.ancestryLogID);
        }
        if (getterRequest.parentLogID !== undefined) {
            urlParameters.push('parentLogID=' + getterRequest.parentLogID);
        }
        if (getterRequest.tagID !== undefined) {
            urlParameters.push('tagID=' + getterRequest.tagID);
        }
        if (getterRequest.createdBefore !== undefined) {
            urlParameters.push('createdBefore=' + getterRequest.createdBefore);
        }
        if (getterRequest.searchString !== undefined) {
            urlParameters.push('searchString=' + encodeURIComponent(getterRequest.searchString));
        }
        var url = this.URL + '/the-getter';
        if (urlParameters.length > 0) {
            url += '?' + urlParameters.join('&');
        }
        return url;
    };
    LogModelService.prototype.findOne = function (id, logDisplayType, childLogDisplayType) {
        if (!!id) {
            return this.http
                .get(this.URL + '/' + id + '/' + __WEBPACK_IMPORTED_MODULE_5__model_data_log_extra_log_display_type__["a" /* LogDisplayType */][logDisplayType], {
                params: {
                    'child-log-display-type': __WEBPACK_IMPORTED_MODULE_5__model_data_log_extra_log_display_type__["a" /* LogDisplayType */][childLogDisplayType]
                }
            })
                .map(function (response) {
                var hateoasResponse = response.json();
                return hateoasResponse._embedded.collection[0];
            });
        }
        else {
            return null;
        }
    };
    LogModelService.prototype.ancestry = function (id) {
        return this.http
            .get(this.URL + '/' + id + '/ancestry')
            .map(function (response) {
            var hateoasResponse = response.json();
            return hateoasResponse._embedded.collection;
        });
    };
    LogModelService.prototype.getRoot = function (logDisplayType, childLogDisplayType) {
        return this.http
            .get(this.URL + '/root' + '/' + __WEBPACK_IMPORTED_MODULE_5__model_data_log_extra_log_display_type__["a" /* LogDisplayType */][logDisplayType], {
            params: {
                'child-log-display-type': __WEBPACK_IMPORTED_MODULE_5__model_data_log_extra_log_display_type__["a" /* LogDisplayType */][childLogDisplayType]
            }
        })
            .map(function (response) {
            var hateoasResponse = response.json();
            return hateoasResponse._embedded.collection[0];
        });
    };
    LogModelService.prototype.findChildren = function (id) {
        if (!!id) {
            return this.http
                .get(this.URL + '/' + id + '/children/1')
                .map(function (response) {
                var hateoasResponse = response.json();
                return hateoasResponse._embedded.collection;
            });
        }
        else {
            return null;
        }
    };
    LogModelService.prototype.findChildrenOfRoot = function () {
        return this.http
            .get(this.URL + '/root/children/1')
            .map(function (response) {
            var hateoasResponse = response.json();
            return hateoasResponse._embedded.collection;
        });
    };
    LogModelService.prototype.assignNewParent = function (id, parentID) {
        return this.http
            .put(this.URL + '/' + id + '/parent/' + parentID, null)
            .map(function (response) {
            var hateoasResponse = response.json();
            return hateoasResponse._embedded.collection[0];
        });
    };
    LogModelService.prototype.create = function (logFileModel) {
        logFileModel.id = undefined;
        return this.http
            .post(this.URL, logFileModel)
            .map(function (response) {
            var hateoasResponse = response.json();
            return hateoasResponse._embedded.collection[0];
        });
    };
    LogModelService.prototype.update = function (logFileModel) {
        return this.http
            .put(this.URL, logFileModel)
            .map(function (response) {
            var hateoasResponse = response.json();
            return hateoasResponse._embedded.collection[0];
        });
    };
    LogModelService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], LogModelService);
    return LogModelService;
}());



/***/ }),

/***/ "./src/app/service/core/endpoint/tag/tag-getter-request.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TagGetterRequest; });
var TagGetterRequest = /** @class */ (function () {
    function TagGetterRequest() {
    }
    return TagGetterRequest;
}());



/***/ }),

/***/ "./src/app/service/core/endpoint/tag/tag-model.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TagModelService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__model_request_sort_order__ = __webpack_require__("./src/app/service/core/model/request/sort-order.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TagModelService = /** @class */ (function () {
    function TagModelService(http) {
        this.http = http;
        this.URL = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].coreEndPoint + '/api/tag';
    }
    TagModelService.prototype.theGetter = function (getterRequest) {
        return this.http
            .get(this.generateGetterRequestURL(getterRequest))
            .map(function (response) {
            var hateoasResponse = response.json();
            return hateoasResponse._embedded.collection;
        });
    };
    TagModelService.prototype.generateGetterRequestURL = function (getterRequest) {
        var urlParameters = [];
        if (getterRequest.sorts !== undefined) {
            for (var _i = 0, _a = getterRequest.sorts; _i < _a.length; _i++) {
                var s = _a[_i];
                if (!!s) {
                    urlParameters.push('sort=' + s.parameter + ',' + __WEBPACK_IMPORTED_MODULE_4__model_request_sort_order__["a" /* SortOrder */][s.order]);
                }
            }
        }
        if (getterRequest.metadataNameLike !== undefined) {
            urlParameters.push('metadataNameLike=' + getterRequest.metadataNameLike);
        }
        if (getterRequest.pageable !== undefined) {
            urlParameters.push('page=' + getterRequest.pageable.page + '&size=' + getterRequest.pageable.size);
        }
        if (getterRequest.createdBefore !== undefined) {
            urlParameters.push('createdBefore=' + getterRequest.createdBefore);
        }
        var url = this.URL;
        if (urlParameters.length > 0) {
            url += '?' + urlParameters.join('&');
        }
        return url;
    };
    TagModelService.prototype.findAll = function () {
        return this.http
            .get(this.URL + '/all')
            .map(function (response) {
            var hateoasResponse = response.json();
            return hateoasResponse._embedded.collection;
        });
    };
    TagModelService.prototype.create = function (tagModel) {
        tagModel.id = undefined;
        return this.http
            .post(this.URL, tagModel)
            .map(function (response) {
            var hateoasResponse = response.json();
            return hateoasResponse._embedded.collection[0];
        });
    };
    TagModelService.prototype.update = function (tagModel) {
        return this.http
            .put(this.URL, tagModel)
            .map(function (response) {
            var hateoasResponse = response.json();
            return hateoasResponse._embedded.collection[0];
        });
    };
    TagModelService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], TagModelService);
    return TagModelService;
}());



/***/ }),

/***/ "./src/app/service/core/model/data/image/image-model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageModel; });
var ImageModel = /** @class */ (function () {
    function ImageModel() {
    }
    return ImageModel;
}());



/***/ }),

/***/ "./src/app/service/core/model/data/log/extra/log-content/log-content.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogContent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__type_section_comment_section_log_content__ = __webpack_require__("./src/app/service/core/model/data/log/extra/log-content/type/_section/comment-section-log-content.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__type_section_header_section_log_content__ = __webpack_require__("./src/app/service/core/model/data/log/extra/log-content/type/_section/header-section-log-content.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__type_section_child_logs_section_log_content__ = __webpack_require__("./src/app/service/core/model/data/log/extra/log-content/type/_section/child-logs-section-log-content.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__type_section_descendant_logs_section_log_content__ = __webpack_require__("./src/app/service/core/model/data/log/extra/log-content/type/_section/descendant-logs-section-log-content.ts");




var LogContent = /** @class */ (function () {
    function LogContent(logContentType, css, data) {
        this.logContentType = logContentType;
        this.css = css;
        this.data = data;
    }
    LogContent.defaultHeader = function () {
        return new LogContent('HeaderSectionLogContent', this.generateDefaultCSS(), new __WEBPACK_IMPORTED_MODULE_1__type_section_header_section_log_content__["a" /* HeaderSectionLogContent */]());
    };
    LogContent.defaultComment = function () {
        return new LogContent('CommentSectionLogContent', this.generateDefaultCSS(), new __WEBPACK_IMPORTED_MODULE_0__type_section_comment_section_log_content__["a" /* CommentSectionLogContent */]());
    };
    LogContent.defaultChildLogs = function () {
        return new LogContent('ChildLogsSectionLogContent', this.generateDefaultCSS(), new __WEBPACK_IMPORTED_MODULE_2__type_section_child_logs_section_log_content__["a" /* ChildLogsSectionLogContent */]());
    };
    LogContent.defaultDescendantLogs = function () {
        return new LogContent('DescendantLogsSectionLogContent', this.generateDefaultCSS(), new __WEBPACK_IMPORTED_MODULE_3__type_section_descendant_logs_section_log_content__["a" /* DescendantLogsSectionLogContent */]());
    };
    LogContent.generateDefaultCSS = function () {
        return {
            'margin-top': '20px',
            'margin-left': 'auto',
            'margin-right': 'auto',
            'max-width': '800px'
        };
    };
    return LogContent;
}());



/***/ }),

/***/ "./src/app/service/core/model/data/log/extra/log-content/type/_section/child-logs-section-log-content.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChildLogsSectionLogContent; });
var ChildLogsSectionLogContent = /** @class */ (function () {
    function ChildLogsSectionLogContent() {
    }
    return ChildLogsSectionLogContent;
}());



/***/ }),

/***/ "./src/app/service/core/model/data/log/extra/log-content/type/_section/comment-section-log-content.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentSectionLogContent; });
var CommentSectionLogContent = /** @class */ (function () {
    function CommentSectionLogContent() {
    }
    return CommentSectionLogContent;
}());



/***/ }),

/***/ "./src/app/service/core/model/data/log/extra/log-content/type/_section/descendant-logs-section-log-content.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DescendantLogsSectionLogContent; });
var DescendantLogsSectionLogContent = /** @class */ (function () {
    function DescendantLogsSectionLogContent() {
    }
    return DescendantLogsSectionLogContent;
}());



/***/ }),

/***/ "./src/app/service/core/model/data/log/extra/log-content/type/_section/header-section-log-content.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderSectionLogContent; });
var HeaderSectionLogContent = /** @class */ (function () {
    function HeaderSectionLogContent() {
    }
    return HeaderSectionLogContent;
}());



/***/ }),

/***/ "./src/app/service/core/model/data/log/extra/log-content/type/image-internal/image-internal-log-content.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageInternalLogContent; });
var ImageInternalLogContent = /** @class */ (function () {
    function ImageInternalLogContent() {
    }
    return ImageInternalLogContent;
}());



/***/ }),

/***/ "./src/app/service/core/model/data/log/extra/log-content/type/image-quote/image-quote-log-content.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageQuoteLogContent; });
var ImageQuoteLogContent = /** @class */ (function () {
    function ImageQuoteLogContent() {
    }
    return ImageQuoteLogContent;
}());



/***/ }),

/***/ "./src/app/service/core/model/data/log/extra/log-content/type/text-code/text-code-log-content.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TextCodeLogContent; });
var TextCodeLogContent = /** @class */ (function () {
    function TextCodeLogContent() {
    }
    return TextCodeLogContent;
}());



/***/ }),

/***/ "./src/app/service/core/model/data/log/extra/log-content/type/text-markdown/text-markdown-log-content.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TextMarkdownLogContent; });
var TextMarkdownLogContent = /** @class */ (function () {
    function TextMarkdownLogContent() {
    }
    return TextMarkdownLogContent;
}());



/***/ }),

/***/ "./src/app/service/core/model/data/log/extra/log-content/type/text-plain/text-plain-log-content.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TextPlainLogContent; });
var TextPlainLogContent = /** @class */ (function () {
    function TextPlainLogContent() {
    }
    return TextPlainLogContent;
}());



/***/ }),

/***/ "./src/app/service/core/model/data/log/extra/log-content/type/text-quote/text-quote-log-content.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TextQuoteLogContent; });
var TextQuoteLogContent = /** @class */ (function () {
    function TextQuoteLogContent() {
    }
    return TextQuoteLogContent;
}());



/***/ }),

/***/ "./src/app/service/core/model/data/log/extra/log-content/type/twitter-tweet/twitter-tweet-log-content.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TwitterTweetLogContent; });
var TwitterTweetLogContent = /** @class */ (function () {
    function TwitterTweetLogContent() {
    }
    return TwitterTweetLogContent;
}());



/***/ }),

/***/ "./src/app/service/core/model/data/log/extra/log-content/type/video-youtube/video-youtube-log-content.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideoYoutubeLogContent; });
var VideoYoutubeLogContent = /** @class */ (function () {
    function VideoYoutubeLogContent() {
    }
    return VideoYoutubeLogContent;
}());



/***/ }),

/***/ "./src/app/service/core/model/data/log/extra/log-display-type.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogDisplayType; });
var LogDisplayType;
(function (LogDisplayType) {
    LogDisplayType[LogDisplayType["TILE"] = 0] = "TILE";
    LogDisplayType[LogDisplayType["PAGE"] = 1] = "PAGE";
    LogDisplayType[LogDisplayType["POPUP"] = 2] = "POPUP";
    LogDisplayType[LogDisplayType["DEFAULT"] = 3] = "DEFAULT";
    LogDisplayType[LogDisplayType["FORUPDATE"] = 4] = "FORUPDATE";
})(LogDisplayType || (LogDisplayType = {}));


/***/ }),

/***/ "./src/app/service/core/model/data/log/extra/log-organization.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogOrganization; });
var LogOrganization = /** @class */ (function () {
    function LogOrganization() {
    }
    return LogOrganization;
}());



/***/ }),

/***/ "./src/app/service/core/model/data/log/extra/log-type-override/extra/tile-log-model-override.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TileLogModelOverride; });
var TileLogModelOverride = /** @class */ (function () {
    function TileLogModelOverride() {
    }
    return TileLogModelOverride;
}());



/***/ }),

/***/ "./src/app/service/core/model/data/log/extra/log-type-override/log-display-override.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogDisplayOverride; });
var LogDisplayOverride = /** @class */ (function () {
    function LogDisplayOverride() {
    }
    return LogDisplayOverride;
}());



/***/ }),

/***/ "./src/app/service/core/model/data/log/log-model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogModel; });
var LogModel = /** @class */ (function () {
    function LogModel() {
    }
    return LogModel;
}());



/***/ }),

/***/ "./src/app/service/core/model/data/metadata.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Metadata; });
var Metadata = /** @class */ (function () {
    function Metadata() {
    }
    return Metadata;
}());



/***/ }),

/***/ "./src/app/service/core/model/data/tag/tag-model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TagModel; });
var TagModel = /** @class */ (function () {
    function TagModel() {
    }
    return TagModel;
}());



/***/ }),

/***/ "./src/app/service/core/model/request/pageable.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Pageable; });
var Pageable = /** @class */ (function () {
    function Pageable(page, size) {
        this.page = page;
        this.size = size;
    }
    return Pageable;
}());



/***/ }),

/***/ "./src/app/service/core/model/request/sort-order.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SortOrder; });
var SortOrder;
(function (SortOrder) {
    SortOrder[SortOrder["desc"] = 0] = "desc";
    SortOrder[SortOrder["asc"] = 1] = "asc";
})(SortOrder || (SortOrder = {}));


/***/ }),

/***/ "./src/app/service/core/model/request/sort.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Sort; });
var Sort = /** @class */ (function () {
    function Sort(parameter, order) {
        this.parameter = parameter;
        this.order = order;
    }
    return Sort;
}());



/***/ }),

/***/ "./src/app/service/event-broker-shared-service/broker-event.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrokerEvent; });
var BrokerEvent;
(function (BrokerEvent) {
    BrokerEvent[BrokerEvent["NAVIGATION_SIDE_LEFT_STATE_CLOSED"] = 0] = "NAVIGATION_SIDE_LEFT_STATE_CLOSED";
    BrokerEvent[BrokerEvent["NAVIGATION_SIDE_LEFT_STATE_OPENED"] = 1] = "NAVIGATION_SIDE_LEFT_STATE_OPENED";
    BrokerEvent[BrokerEvent["NAVIGATION_SIDE_LEFT_STATE_CHANGED"] = 2] = "NAVIGATION_SIDE_LEFT_STATE_CHANGED";
    BrokerEvent[BrokerEvent["CONTENT_SCROLLED"] = 3] = "CONTENT_SCROLLED";
})(BrokerEvent || (BrokerEvent = {}));


/***/ }),

/***/ "./src/app/service/event-broker-shared-service/event-broker-service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventBrokerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__extra__ = __webpack_require__("./src/app/service/event-broker-shared-service/extra.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EventBrokerService = /** @class */ (function () {
    function EventBrokerService() {
        this._events = {};
    }
    EventBrokerService.prototype.register = function (eventName) {
        var event = this._events[eventName];
        if (typeof event === 'undefined') {
            event = this._events[eventName] = new __WEBPACK_IMPORTED_MODULE_1__extra__["a" /* BrokeredEvent */](eventName);
        }
        return event;
    };
    EventBrokerService.prototype.listen = function (eventName, next) {
        return this.register(eventName).listen(next);
    };
    EventBrokerService.prototype.emit = function (eventName, data) {
        return this.register(eventName).emit(data);
    };
    EventBrokerService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], EventBrokerService);
    return EventBrokerService;
}());



/***/ }),

/***/ "./src/app/service/event-broker-shared-service/extra.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export EventListener */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrokeredEvent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");

var EventListener = /** @class */ (function () {
    function EventListener(_subscription) {
        this._subscription = _subscription;
    }
    EventListener.prototype.ignore = function () {
        this._subscription.unsubscribe();
    };
    return EventListener;
}());

var BrokeredEvent = /** @class */ (function () {
    function BrokeredEvent(name) {
        this.name = name;
        this._subject = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__["a" /* Subject */]();
    }
    BrokeredEvent.prototype.emit = function (data) {
        this._subject.next(data);
    };
    BrokeredEvent.prototype.listen = function (next) {
        return new EventListener(this._subject.subscribe(next));
    };
    return BrokeredEvent;
}());



/***/ }),

/***/ "./src/app/service/twitter/twitter.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TwitterService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TwitterService = /** @class */ (function () {
    function TwitterService(http) {
        this.http = http;
    }
    TwitterService.prototype.getEmbeddedHTML = function (twitterURL) {
        var url = 'https://publish.twitter.com/oembed';
        return this.http
            .get(url, { url: twitterURL })
            .map(function (response) {
            var oEmbedResponse = response.json();
            return oEmbedResponse.html;
        });
    };
    TwitterService.prototype.extractTweetIDFromURL = function (url) {
        return url.substr(url.lastIndexOf('/') + 1);
    };
    TwitterService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], TwitterService);
    return TwitterService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true,
    coreEndPoint: 'http://core.marcuschiu.com',
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map