"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_deprecated_1 = require('@angular/router-deprecated');
var http_1 = require('@angular/http');
var system_component_1 = require('./main/system/system.component');
var menu_tree_component_1 = require("./components/menuTree/menu-tree.component");
var AppComponent = (function () {
    function AppComponent() {
        this.menuInfo = [
            {
                name: "组件管理",
                children: [
                    {
                        name: "panel",
                        router: ['System/UserManage/UserAdd']
                    },
                    {
                        name: "button",
                        router: ['System/UserManage/UserAdd']
                    }
                ]
            }
        ];
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/app.html',
            directives: [router_deprecated_1.ROUTER_DIRECTIVES, menu_tree_component_1.MenuTreeComponent],
            providers: [http_1.HTTP_PROVIDERS]
        }),
        router_deprecated_1.RouteConfig([
            // 带有name属性的RouteDefinition，把一个URL映射到一个组件上。
            { path: '/system/...', name: 'System', component: system_component_1.SystemComponent }
        ]), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map