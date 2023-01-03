"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Users = void 0;
const typeorm_1 = require("typeorm");
let Users = class Users {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'int' }),
    __metadata("design:type", Number)
], Users.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar' }),
    __metadata("design:type", String)
], Users.prototype, "username", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar' }),
    __metadata("design:type", String)
], Users.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', default: "Your Name" }),
    __metadata("design:type", String)
], Users.prototype, "fullName", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', default: "Your Address" }),
    __metadata("design:type", String)
], Users.prototype, "address", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', default: "Your Phone" }),
    __metadata("design:type", String)
], Users.prototype, "phone", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', default: "Your Job" }),
    __metadata("design:type", String)
], Users.prototype, "job", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', default: "Your Email" }),
    __metadata("design:type", String)
], Users.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', default: "https://i.pinimg.com/736x/c6/e5/65/c6e56503cfdd87da299f72dc416023d4.jpg" }),
    __metadata("design:type", String)
], Users.prototype, "avatar", void 0);
Users = __decorate([
    (0, typeorm_1.Entity)()
], Users);
exports.Users = Users;
//# sourceMappingURL=users.js.map