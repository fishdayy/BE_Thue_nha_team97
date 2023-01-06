import Router from "express";
import homesDaysController from "../controller/homesDaysController";

export const homesDaysRouter = Router()
homesDaysRouter.post('/',homesDaysController.createHomesDays);
homesDaysRouter.post('/check',homesDaysController.checkHomesDays);
homesDaysRouter.post('/check-time',homesDaysController.checkTimeHomesDays);
homesDaysRouter.delete("/:id",homesDaysController.deleteHomesDays)