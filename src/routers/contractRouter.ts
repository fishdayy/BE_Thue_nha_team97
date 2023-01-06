import router from "express";
import contractController from "../controller/contractController";

export const contractRouter = router();

contractRouter.get('/', contractController.showContracts);
contractRouter.get('/:id', contractController.findByUserId);
contractRouter.post('/', contractController.createContract);
contractRouter.get('/show/:id', contractController.findByUserCreate);
contractRouter.post('/income', contractController.getIncome)

