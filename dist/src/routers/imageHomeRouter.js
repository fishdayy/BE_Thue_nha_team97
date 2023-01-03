"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.imageHomeRouter = void 0;
const express_1 = __importDefault(require("express"));
const imageHomeController_1 = __importDefault(require("../controller/imageHomeController"));
exports.imageHomeRouter = (0, express_1.default)();
exports.imageHomeRouter.get('/', imageHomeController_1.default.showImages);
exports.imageHomeRouter.get('/:id', imageHomeController_1.default.showImagesById);
exports.imageHomeRouter.post('/', imageHomeController_1.default.createImage);
//# sourceMappingURL=imageHomeRouter.js.map