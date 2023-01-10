export declare class HomesDaysService {
    private homesDaysService;
    constructor();
    createHomesDays: (time: any, homeId: any, idContract: any, idRepairTime: any) => Promise<any>;
    findByHomesDays: (id: any) => Promise<any>;
    findByTime: (data: any) => Promise<any>;
    removeHomesDays: (id: any) => Promise<any>;
    removeHomesDays2: (id: any) => Promise<any>;
}
