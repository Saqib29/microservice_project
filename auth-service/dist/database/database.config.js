"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const db = {
    prefix: process.env.DB_PREFIX,
    user: process.env.DB_USERNAME,
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT, 10),
    name: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
};
const dbConnectinString = process.env.DB_URL ||
    `${db.prefix}://${db.user}:${db.password}@${db.host}:${db.port}/${db.name}`;
exports.default = dbConnectinString;
//# sourceMappingURL=database.config.js.map