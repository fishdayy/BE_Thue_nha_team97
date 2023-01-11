import Router from "express";
import {userRouter} from "./userRouter";
import {categoryRouter} from "./categoryRouter";
import {homeRouter} from "./homeRouter";
import {imageHomeRouter} from "./imageHomeRouter";
import {contractRouter} from "./contractRouter";
import {homesDaysRouter} from "./homesDaysRouter";
import {repairTimesRouter} from "./repairTimes";
import {commentRouter} from "./commentRouter";
import {notificationRouter} from "./notificationRouter";

export const router = Router()
router.use('/users', userRouter);
router.use('/categories', categoryRouter);
router.use('/homes', homeRouter);
router.use('/imageHomes', imageHomeRouter);
router.use('/contracts', contractRouter);
router.use('/homes-days', homesDaysRouter)
router.use('/repair-times', repairTimesRouter)
router.use('/homes-days', homesDaysRouter);
router.use('/comment', commentRouter)
router.use('/notifications', notificationRouter)