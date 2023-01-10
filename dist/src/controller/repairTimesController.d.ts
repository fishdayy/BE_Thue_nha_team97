import { Request, Response } from "express";
export declare class RepairTimesController {
    private repairTimesService;
    constructor();
    show: (req: Request, res: Response) => Promise<void>;
    create: (req: Request, res: Response) => Promise<void>;
    remove: (req: Request, res: Response) => Promise<void>;
    findByHomeId: (req: Request, res: Response) => Promise<void>;
}
declare const _default: RepairTimesController;
export default _default;
