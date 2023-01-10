export declare class RepairTimesService {
    private repairTimesRepository;
    constructor();
    getAll: () => Promise<any>;
    create: (repairTime: any) => Promise<any>;
    remove: (idDelete: any) => Promise<void>;
    findByHomeId: (id: any) => Promise<any>;
}
