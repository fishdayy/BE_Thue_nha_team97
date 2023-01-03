export declare class CategoryService {
    private categoryRepository;
    constructor();
    getAll: () => Promise<any>;
    createCategory: (category: any) => Promise<void>;
}
