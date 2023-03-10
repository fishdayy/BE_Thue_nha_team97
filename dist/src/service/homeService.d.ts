export declare class HomeService {
    private homeRepository;
    constructor();
    getAll: () => Promise<any>;
    createHome: (home: any) => Promise<any>;
    findHomes: (addressFind: any, quantityBedroom: any, quantityBathroom: any, price: any) => Promise<any>;
    findById: (id: any) => Promise<any>;
    findListHome: (id: any) => Promise<any>;
    findByCategory: (id: any) => Promise<any>;
    remove: (idDelete: any) => Promise<void>;
}
