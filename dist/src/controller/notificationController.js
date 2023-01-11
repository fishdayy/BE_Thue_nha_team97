"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationController = void 0;
const notificationService_1 = require("../service/notificationService");
class NotificationController {
    constructor() {
        this.show = async (req, res) => {
            try {
                let notifications = await this.notificationService.getAll(req.params.id);
                res.json(notifications);
            }
            catch (e) {
                res.json({
                    mess: e.message
                });
            }
        };
        this.createNotification = async (req, res) => {
            try {
                await this.notificationService.createNotification(req.body);
                res.json({
                    mess: "Tạo thành công"
                });
            }
            catch (e) {
                res.json({
                    mess: e.message
                });
            }
        };
        this.notificationService = new notificationService_1.NotificationService();
    }
}
exports.NotificationController = NotificationController;
exports.default = new NotificationController();
//# sourceMappingURL=notificationController.js.map