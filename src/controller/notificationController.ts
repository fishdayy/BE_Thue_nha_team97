import {Request, Response} from "express";
import {NotificationService} from "../service/notificationService";

export class NotificationController {
    private notificationService: NotificationService;

    constructor() {
        this.notificationService = new NotificationService();
    }

    show = async (req: Request, res: Response) => {
        try {
            let notifications = await this.notificationService.getAll(req.params.id)
            res.json(notifications)
        } catch (e) {
            res.json({
                mess: e.message
            })
        }
    }

    createNotification = async (req: Request, res: Response) => {
        try {
            await this.notificationService.createNotification(req.body);
            res.json({
                mess: "Tạo thành công"
            })
        } catch (e) {
            res.json({
                mess: e.message
            })
        }
    }
}

export default new NotificationController();