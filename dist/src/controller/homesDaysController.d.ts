import { Request, Response } from "express";
export declare class HomesDaysController {
    private homesDaysService;
    constructor();
    createHomesDays: (req: Request, res: Response) => Promise<void>;
    checkHomesDays: (req: Request, res: Response) => Promise<void>;
    checkTimeHomesDays: (req: Request, res: Response) => Promise<void>;
    deleteHomesDays: (req: Request, res: Response) => Promise<void>;
    deleteHomesDays2: (req: Request, res: Response) => Promise<void>;
}
declare const _default: HomesDaysController;
export default _default;
