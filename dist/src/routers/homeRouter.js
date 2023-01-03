"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.homeRouter = void 0;
const express_1 = __importDefault(require("express"));
const homeController_1 = __importDefault(require("../controller/homeController"));
exports.homeRouter = (0, express_1.default)();
exports.homeRouter.get('/', homeController_1.default.showHomes);
exports.homeRouter.post('/', homeController_1.default.createHome);
exports.homeRouter.post('/find-homes', homeController_1.default.findHomes);
exports.homeRouter.get('/:id', homeController_1.default.findById);
exports.homeRouter.get('/list-home/:id', homeController_1.default.findListHomeByUserId);
exports.homeRouter.get('/find-by-category/:id', homeController_1.default.findByCategory);
exports.homeRouter.delete('/:id', homeController_1.default.remove);
//# sourceMappingURL=homeRouter.js.map