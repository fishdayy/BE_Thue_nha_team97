import {AppDataSource} from "../data-source";
import {Notification} from "../model/notification";

export class NotificationService {
    private notificationRepository: any;

    constructor() {
        AppDataSource.initialize().then(connection => {
            this.notificationRepository = AppDataSource.getRepository(Notification);
        })
    }

    getAll = async (id) => {
        return await this.notificationRepository.query(`select h.name, notification.content, notification.username
                                                        from notification
                                                                 join homes h on h.id = homeId
                                                        where h.userId = ${id}`)
    }

    createNotification = async (notification) => {
        await this.notificationRepository.save(notification);
    }
}