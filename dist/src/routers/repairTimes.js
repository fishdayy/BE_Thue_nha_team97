"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.repairTimesRouter = void 0;
const express_1 = __importDefault(require("express"));
const repairTimesController_1 = __importDefault(require("../controller/repairTimesController"));
exports.repairTimesRouter = (0, express_1.default)();
exports.repairTimesRouter.get('/', repairTimesController_1.default.show);
exports.repairTimesRouter.get('/:id', repairTimesController_1.default.findByHomeId);
exports.repairTimesRouter.post('/', repairTimesController_1.default.create);
exports.repairTimesRouter.delete('/:id', repairTimesController_1.default.remove);
//# sourceMappingURL=repairTimes.js.map