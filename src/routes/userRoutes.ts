import { Router } from "express";
import * as userController from '../controllers/userController';
import { validateUser } from "../middleware/validateUser";

const router = Router();

// Login
router.post('/register', validateUser, userController.register);
router.post('/login', userController.login);

export const userRoutes = router;