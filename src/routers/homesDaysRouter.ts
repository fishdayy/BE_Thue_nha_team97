import Router from "express";
import homesDaysController from "../controller/homesDaysController";

export const homesDaysRouter = Router()
homesDaysRouter.post('/',homesDaysController.createHomesDays);
homesDaysRouter.get('/check',homesDaysController.checkHomesDays)