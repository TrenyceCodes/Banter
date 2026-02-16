"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const config_1 = __importDefault(require("../config/config"));
const sequelize = new sequelize_1.Sequelize(config_1.default.database, config_1.default.username, config_1.default.password, {
    host: config_1.default.host,
    dialect: config_1.default.dialect,
    dialectModule: config_1.default.dialectModule
});
exports.default = sequelize;
//# sourceMappingURL=index.js.map