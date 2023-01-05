import { Request, Response } from "express";
export declare class HomeController {
    private homeService;
    constructor();
    showHomes: (req: Request, res: Response) => Promise<void>;
    createHome: (req: Request, res: Response) => Promise<void>;
    findHomes: (req: Request, res: Response) => Promise<void>;
    findById: (req: Request, res: Response) => Promise<void>;
    findListHomeByUserId: (req: Request, res: Response) => Promise<void>;
    findByCategory: (req: Request, res: Response) => Promise<void>;
    remove: (req: Request, res: Response) => Promise<void>;
    changeStatus: (req: Request, res: Response) => Promise<void>;
    findTop4: (req: Request, res: Response) => Promise<void>;
}
declare const _default: HomeController;
export default _default;
