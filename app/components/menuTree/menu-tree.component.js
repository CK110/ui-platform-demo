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
var MenuTreeComponent = (function () {
    function MenuTreeComponent(_router) {
        this._router = _router;
    }
    MenuTreeComponent.prototype.ngOnInit = function () {
        for (var i = 0, length_1 = this.dataSource.length; i < length_1; i++) {
            if (this.dataSource[i].children) {
                this.dataSource[i].isLeaf = false;
                this.dataSource[i].fold = !!this.dataSource[i].fold;
            }
            else {
                this.dataSource[i].isLeaf = true;
            }
        }
    };
    MenuTreeComponent.prototype.doNavigate = function (param) {
        console.log("11");
        console.log(param);
        this._router.navigate(param);
    };
    __decorate([
        core_1.Input('dataSource'), 
        __metadata('design:type', Array)
    ], MenuTreeComponent.prototype, "dataSource", void 0);
    MenuTreeComponent = __decorate([
        core_1.Component({
            selector: 'zijin-menu-tree',
            directives: [router_deprecated_1.ROUTER_DIRECTIVES, MenuTreeComponent],
            templateUrl: "./app/components/menuTree/template.html"
        }), 
        __metadata('design:paramtypes', [router_deprecated_1.Router])
    ], MenuTreeComponent);
    return MenuTreeComponent;
}());
exports.MenuTreeComponent = MenuTreeComponent;
//# sourceMappingURL=menu-tree.component.js.map