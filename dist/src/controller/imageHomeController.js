"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const imageHomeService_1 = require("../service/imageHomeService");
class ImageHomeController {
    constructor() {
        this.showImages = async (req, res) => {
            try {
                let images = await this.imageHomeService.getAll();
                res.json(images);
            }
            catch (e) {
                res.json({
                    mess: e.message
                });
            }
        };
        this.showImagesById = async (req, res) => {
            try {
                let images = await this.imageHomeService.getImagesByHomeId(req.params.id);
                res.json(images);
            }
            catch (e) {
                res.json({
                    mess: e.message
                });
            }
        };
        this.createImage = async (req, res) => {
            try {
                let { idImage } = await this.imageHomeService.createImageHome(req.body);
                res.json({
                    mess: "Tạo ImageHome thành công",
                    idImage: idImage
                });
            }
            catch (e) {
                res.json({
                    mess: e.message
                });
            }
        };
        this.imageHomeService = new imageHomeService_1.ImageHomeService();
    }
}
exports.default = new ImageHomeController();
//# sourceMappingURL=imageHomeController.js.map