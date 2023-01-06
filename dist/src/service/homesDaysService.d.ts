export declare class HomesDaysService {
    private homesDaysService;
    constructor();
    createHomesDays: (time: any, homeId: any, idContract: any) => Promise<any>;
    findByHomesDays: (id: any) => Promise<any>;
    findByTime: (data: any) => Promise<any>;
    removeHomesDays: (idContract: any) => Promise<any>;
}
