import {Request, Response} from "express";
import {CategoryService} from "../service/categoryService";

export class CategoryController {
    private categoryService: CategoryService;

    constructor() {
        this.categoryService = new CategoryService();
    }

    showCategories = async (req: Request, res: Response) => {
        try {
            let categories = await this.categoryService.getAll()
            res.json(categories)
        } catch (e) {
            res.json({
                mess: e.message
            })
        }
    }

    createCategory = async (req: Request, res: Response) => {
        try {
            await this.categoryService.createCategory(req.body);
            res.json({
                mess: "Tạo Category thành công"
            })
        } catch (e) {
            res.json({
                mess: e.message
            })
        }
    }
}

export default new CategoryController();