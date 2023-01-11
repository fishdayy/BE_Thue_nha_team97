"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationService = void 0;
const data_source_1 = require("../data-source");
const notification_1 = require("../model/notification");
class NotificationService {
    constructor() {
        this.getAll = async (id) => {
            return await this.notificationRepository.query(`select h.name, notification.content, notification.username
                                                        from notification
                                                                 join homes h on h.id = homeId
                                                        where h.userId = ${id}`);
        };
        this.createNotification = async (notification) => {
            await this.notificationRepository.save(notification);
        };
        data_source_1.AppDataSource.initialize().then(connection => {
            this.notificationRepository = data_source_1.AppDataSource.getRepository(notification_1.Notification);
        });
    }
}
exports.NotificationService = NotificationService;
//# sourceMappingURL=notificationService.js.map