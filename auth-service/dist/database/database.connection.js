"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var DbConnection_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbConnection = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const path_1 = require("path");
const database_config_1 = require("./database.config");
let DbConnection = DbConnection_1 = class DbConnection {
    static forRoot() {
        return {
            module: DbConnection_1,
            imports: [
                typeorm_1.TypeOrmModule.forRoot({
                    type: 'mongodb',
                    url: database_config_1.default,
                    entities: [(0, path_1.join)(__dirname, '../entities', '*.entity.{ts,js}')],
                    synchronize: true,
                }),
            ],
        };
    }
};
exports.DbConnection = DbConnection;
exports.DbConnection = DbConnection = DbConnection_1 = __decorate([
    (0, common_1.Module)({})
], DbConnection);
//# sourceMappingURL=database.connection.js.map