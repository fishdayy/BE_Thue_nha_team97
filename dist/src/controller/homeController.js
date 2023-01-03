"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeController = void 0;
const homeService_1 = require("../service/homeService");
class HomeController {
    constructor() {
        this.showHomes = async (req, res) => {
            try {
                let homes = await this.homeService.getAll();
                res.json(homes);
            }
            catch (e) {
                res.json({
                    mess: e.message
                });
            }
        };
        this.createHome = async (req, res) => {
            try {
                let { id } = await this.homeService.createHome(req.body);
                res.json({
                    mess: "Tạo Home thành công",
                    idHome: id
                });
            }
            catch (e) {
                res.json({
                    mess: e.message
                });
            }
        };
        this.findHomes = async (req, res) => {
            try {
                let homes = await this.homeService.findHomes(req.body.address, req.body.bedroom, req.body.bathroom, req.body.price);
                res.json(homes);
            }
            catch (e) {
                res.json({
                    mess: e.message
                });
            }
        };
        this.findById = async (req, res) => {
            try {
                let home = await this.homeService.findById(req.params.id);
                res.json(home);
            }
            catch (e) {
                res.json({
                    mess: e.message
                });
            }
        };
        this.findListHomeByUserId = async (req, res) => {
            try {
                let homes = await this.homeService.findListHome(req.params.id);
                res.json(homes);
            }
            catch (e) {
                res.json({
                    mess: e.message
                });
            }
        };
        this.findByCategory = async (req, res) => {
            try {
                let homes = await this.homeService.findByCategory(req.params.id);
                res.json(homes);
            }
            catch (e) {
                res.json({
                    mess: e.message
                });
            }
        };
        this.remove = async (req, res) => {
            try {
                await this.homeService.remove(req.params.id);
                res.json({
                    mess: "Xóa Home thành công"
                });
            }
            catch (e) {
                res.json({
                    mess: e.message
                });
            }
        };
        this.homeService = new homeService_1.HomeService();
    }
}
exports.HomeController = HomeController;
exports.default = new HomeController();
//# sourceMappingURL=homeController.js.map