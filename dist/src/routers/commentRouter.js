"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.commentRouter = void 0;
const express_1 = __importDefault(require("express"));
const commentController_1 = __importDefault(require("../controller/commentController"));
exports.commentRouter = (0, express_1.default)();
exports.commentRouter.get('/:id', commentController_1.default.showComment);
exports.commentRouter.post('/', commentController_1.default.createComment);
//# sourceMappingURL=commentRouter.js.map