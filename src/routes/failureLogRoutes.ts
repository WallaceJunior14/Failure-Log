import { Router } from "express";
import { authMiddleware } from "../middleware/auth";
import { validateFailureLog } from "../middleware/validateFailureLog";
import * as failureLogController from "../controllers/failureLogController";

const router = Router();

router.post('/register', authMiddleware, validateFailureLog, failureLogController.register);
router.get('/showAll', authMiddleware, failureLogController.showAllFailureLogs);
router.put('/edit/:id', authMiddleware, validateFailureLog, failureLogController.editFailureLog);
router.delete('/destroy/:id', authMiddleware, failureLogController.destroyFailureLog)

export const failureLogRoutes = router;