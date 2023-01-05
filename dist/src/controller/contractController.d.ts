import { Request, Response } from "express";
export declare class ContractController {
    private contractService;
    constructor();
    showContracts: (req: Request, res: Response) => Promise<void>;
    createContract: (req: Request, res: Response) => Promise<void>;
    findByUserId: (req: Request, res: Response) => Promise<void>;
    findByUserCreate: (req: Request, res: Response) => Promise<void>;
}
declare const _default: ContractController;
export default _default;
