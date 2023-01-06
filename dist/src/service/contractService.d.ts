export declare class ContractService {
    private contractRepository;
    private homeRepository;
    constructor();
    getAll: () => Promise<any>;
    createContract: (contract: any) => Promise<any>;
    findByUserId: (id: any) => Promise<any>;
    findByUserCreate: (id: any) => Promise<any>;
    getIncome: (time: any) => Promise<any>;
    remove: (idDelete: any) => Promise<void>;
}
