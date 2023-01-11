"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.notificationRouter = void 0;
const express_1 = __importDefault(require("express"));
const notificationController_1 = __importDefault(require("../controller/notificationController"));
exports.notificationRouter = (0, express_1.default)();
exports.notificationRouter.post('/', notificationController_1.default.createNotification);
exports.notificationRouter.get('/:id', notificationController_1.default.show);
//# sourceMappingURL=notificationRouter.js.map