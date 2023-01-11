import { Request, Response } from "express";
export declare class NotificationController {
    private notificationService;
    constructor();
    show: (req: Request, res: Response) => Promise<void>;
    createNotification: (req: Request, res: Response) => Promise<void>;
}
declare const _default: NotificationController;
export default _default;
