import router from "express";
import notificationController from "../controller/notificationController";

export const notificationRouter = router();

notificationRouter.post('/', notificationController.createNotification)
notificationRouter.get('/:id', notificationController.show)