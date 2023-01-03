"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const data_source_1 = require("../data-source");
const users_1 = require("../model/users");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const auth_1 = require("../middleware/auth");
class UserService {
    constructor() {
        this.checkLogin = async (userLogin) => {
            let user = {
                check: false,
                token: '',
                userFind: []
            };
            let userFind = await this.userRepository.findBy({ username: userLogin.username });
            if (userFind.length === 0) {
                user.check = false;
            }
            else {
                let compare = await bcrypt_1.default.compare(userLogin.password, userFind[0].password);
                if (!compare) {
                    user.check = false;
                }
                if (compare) {
                    let payload = { username: userFind[0].username };
                    let token = await jsonwebtoken_1.default.sign(payload, auth_1.SECRET, {
                        expiresIn: 36000
                    });
                    user.token = token;
                    user.check = true;
                    user.userFind = userFind;
                }
            }
            return user;
        };
        this.checkRegister = async (userRegister) => {
            let userFind = await this.userRepository.findBy({ username: userRegister.username });
            let check;
            if (userFind.length !== 0) {
                check = true;
            }
            else {
                userRegister.password = await bcrypt_1.default.hash(userRegister.password, 10);
                check = false;
            }
            return check;
        };
        this.createUser = async (user) => {
            let newUser = await this.userRepository.save(user);
            return newUser;
        };
        this.checkLoginFb = async (userFb) => {
            let userFind = await this.userRepository.findBy({ username: userFb.username });
            let check;
            if (userFind.length !== 0) {
                check = true;
            }
            else {
                userFb.password = await bcrypt_1.default.hash(userFb.password, 10);
                check = false;
            }
            return check;
        };
        this.checkChangePassword = async (idUser, oldPassword, newPassword) => {
            let user = {
                check: false,
                userFind: []
            };
            let userFind = await this.userRepository.findBy({ id: idUser });
            if (userFind.length === 0) {
                user.check = false;
            }
            else {
                let compare = await bcrypt_1.default.compare(oldPassword, userFind[0].password);
                if (!compare) {
                    user.userFind = userFind;
                    user.check = false;
                }
                if (compare) {
                    newPassword = await bcrypt_1.default.hash(newPassword, 10);
                    await this.userRepository.update({ id: idUser }, { password: newPassword });
                    user.check = true;
                    user.userFind = userFind;
                }
            }
            return user;
        };
        this.updateProfile = async (idUser, newFullName, newJob, newAddress, newPhone, newEmail) => {
            let user = {
                userFind: []
            };
            await this.userRepository.update({ id: idUser }, {
                fullName: newFullName,
                job: newJob,
                address: newAddress,
                phone: newPhone,
                email: newEmail
            });
            let userFind = await this.userRepository.findBy({ id: idUser });
            user.userFind = userFind;
            return user;
        };
        data_source_1.AppDataSource.initialize().then(connection => {
            this.userRepository = data_source_1.AppDataSource.getRepository(users_1.Users);
        });
    }
}
exports.UserService = UserService;
//# sourceMappingURL=userService.js.map