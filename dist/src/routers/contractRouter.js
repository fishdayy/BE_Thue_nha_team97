"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.contractRouter = void 0;
const express_1 = __importDefault(require("express"));
const contractController_1 = __importDefault(require("../controller/contractController"));
exports.contractRouter = (0, express_1.default)();
exports.contractRouter.get('/', contractController_1.default.showContracts);
exports.contractRouter.get('/:id', contractController_1.default.findByUserId);
exports.contractRouter.post('/', contractController_1.default.createContract);
//# sourceMappingURL=contractRouter.js.map