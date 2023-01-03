import router from "express";
import userController from "../controller/userController";

export const userRouter = router();
userRouter.post('/fb-login', userController.loginWithFb)
userRouter.post('/register', userController.register);
userRouter.post('/login', userController.login);
userRouter.post('/change-password/:id' ,userController.changePassword);
userRouter.post('/update-profile/:id' ,userController.updateProfile);