"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const userRouter_1 = require("./userRouter");
const categoryRouter_1 = require("./categoryRouter");
const homeRouter_1 = require("./homeRouter");
const imageHomeRouter_1 = require("./imageHomeRouter");
const contractRouter_1 = require("./contractRouter");
const homesDaysRouter_1 = require("./homesDaysRouter");
exports.router = (0, express_1.default)();
exports.router.use('/users', userRouter_1.userRouter);
exports.router.use('/categories', categoryRouter_1.categoryRouter);
exports.router.use('/homes', homeRouter_1.homeRouter);
exports.router.use('/imageHomes', imageHomeRouter_1.imageHomeRouter);
exports.router.use('/contracts', contractRouter_1.contractRouter);
exports.router.use('/homes-days', homesDaysRouter_1.homesDaysRouter);
//# sourceMappingURL=router.js.map