import router from "express";
import repairTimesController from "../controller/repairTimesController";

export const repairTimesRouter = router();

repairTimesRouter.get('/', repairTimesController.show);
repairTimesRouter.get('/:id', repairTimesController.findByHomeId);
repairTimesRouter.post('/', repairTimesController.create);
repairTimesRouter.delete('/:id', repairTimesController.remove)