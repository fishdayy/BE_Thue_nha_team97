"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryService = void 0;
const data_source_1 = require("../data-source");
const categories_1 = require("../model/categories");
class CategoryService {
    constructor() {
        this.getAll = async () => {
            return await this.categoryRepository.find();
        };
        this.createCategory = async (category) => {
            await this.categoryRepository.save(category);
        };
        data_source_1.AppDataSource.initialize().then(connection => {
            this.categoryRepository = data_source_1.AppDataSource.getRepository(categories_1.Categories);
        });
    }
}
exports.CategoryService = CategoryService;
//# sourceMappingURL=categoryService.js.map