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
var core_1 = require("@angular/core");
var PathTranslator_1 = require("../PathTranslator");
var item_1 = require("../item/item");
var IndexComponent = (function () {
    function IndexComponent() {
        this.items = [new item_1.Item('item1', 'some description'), new item_1.Item('item2', 'some description')];
    }

    IndexComponent.prototype.startNewItem = function () {
        this.items.push(new item_1.Item('test', 'some description'));
    };
    IndexComponent = __decorate([
        core_1.Component({
            templateUrl: PathTranslator_1.PathTranslator.templatePath('index'),
        }),
        __metadata('design:paramtypes', [])
    ], IndexComponent);
    return IndexComponent;
}());
exports.IndexComponent = IndexComponent;
//# sourceMappingURL=index.component.js.map