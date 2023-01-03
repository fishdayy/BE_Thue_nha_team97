import router from "express";
import categoryController from "../controller/categoryController";

export const categoryRouter = router();
categoryRouter.get('/', categoryController.showCategories)
categoryRouter.post('/', categoryController.createCategory)
