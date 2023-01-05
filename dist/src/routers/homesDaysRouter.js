"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.homesDaysRouter = void 0;
const express_1 = __importDefault(require("express"));
const homesDaysController_1 = __importDefault(require("../controller/homesDaysController"));
exports.homesDaysRouter = (0, express_1.default)();
exports.homesDaysRouter.post('/', homesDaysController_1.default.createHomesDays);
exports.homesDaysRouter.post('/check', homesDaysController_1.default.checkHomesDays);
exports.homesDaysRouter.post('/check-time', homesDaysController_1.default.checkTimeHomesDays);
//# sourceMappingURL=homesDaysRouter.js.map