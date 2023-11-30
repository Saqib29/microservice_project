"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var LoaderModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoaderModule = void 0;
const common_1 = require("@nestjs/common");
const fast_glob_1 = require("fast-glob");
const path_1 = require("path");
let LoaderModule = LoaderModule_1 = class LoaderModule {
    static forRoot() {
        const modules = [];
        const moduleNames = (0, fast_glob_1.sync)((0, path_1.join)(__dirname, '../modules/**/*.module.js'));
        console.log(moduleNames);
        for (const moduleName of moduleNames) {
            modules.push(require(moduleName)?.default);
        }
        return {
            module: LoaderModule_1,
            imports: modules,
        };
    }
};
exports.LoaderModule = LoaderModule;
exports.LoaderModule = LoaderModule = LoaderModule_1 = __decorate([
    (0, common_1.Module)({})
], LoaderModule);
//# sourceMappingURL=loader.module.js.map