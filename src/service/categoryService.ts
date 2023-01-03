import {AppDataSource} from "../data-source";
import {Categories} from "../model/categories";

export class CategoryService {
    private categoryRepository: any;

    constructor() {
        AppDataSource.initialize().then(connection => {
            this.categoryRepository = AppDataSource.getRepository(Categories);
        })
    }

    getAll = async () => {
        return await this.categoryRepository.find()
    }

    createCategory = async (category) => {
        await this.categoryRepository.save(category);
    }
}