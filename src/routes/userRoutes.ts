import { Router } from "express";
import * as userController from '../controllers/userController';
import { validateUser } from "../middleware/validateUser";
import { authMiddleware } from "../middleware/auth";

const router = Router();

// Users Login
router.post('/register', validateUser, userController.register);
router.post('/login', userController.login);

// Users
router.get('/showAll', userController.showAllUser);
router.put('/edit/:id', authMiddleware, validateUser, userController.editUser);
router.delete('/destroy/:id', authMiddleware, userController.destroyUser)


export const userRoutes = router;