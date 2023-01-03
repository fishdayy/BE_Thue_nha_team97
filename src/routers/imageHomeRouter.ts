import router from "express";
import imageHomeController from "../controller/imageHomeController";

export const imageHomeRouter = router();

imageHomeRouter.get('/', imageHomeController.showImages)
imageHomeRouter.get('/:id', imageHomeController.showImagesById)
imageHomeRouter.post('/', imageHomeController.createImage)