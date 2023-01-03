"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = __importDefault(require("express"));
const userController_1 = __importDefault(require("../controller/userController"));
exports.userRouter = (0, express_1.default)();
exports.userRouter.post('/fb-login', userController_1.default.loginWithFb);
exports.userRouter.post('/register', userController_1.default.register);
exports.userRouter.post('/login', userController_1.default.login);
exports.userRouter.post('/change-password/:id', userController_1.default.changePassword);
exports.userRouter.post('/update-profile/:id', userController_1.default.updateProfile);
//# sourceMappingURL=userRouter.js.map