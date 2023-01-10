import router from "express";
import commentController from "../controller/commentController";

export const commentRouter=router();

commentRouter.get('/:id',commentController.showComment)
commentRouter.post('/',commentController.createComment)

