"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryController = void 0;
const categoryService_1 = require("../service/categoryService");
class CategoryController {
    constructor() {
        this.showCategories = async (req, res) => {
            try {
                let categories = await this.categoryService.getAll();
                res.json(categories);
            }
            catch (e) {
                res.json({
                    mess: e.message
                });
            }
        };
        this.createCategory = async (req, res) => {
            try {
                await this.categoryService.createCategory(req.body);
                res.json({
                    mess: "Tạo Category thành công"
                });
            }
            catch (e) {
                res.json({
                    mess: e.message
                });
            }
        };
        this.categoryService = new categoryService_1.CategoryService();
    }
}
exports.CategoryController = CategoryController;
exports.default = new CategoryController();
//# sourceMappingURL=categoryController.js.map