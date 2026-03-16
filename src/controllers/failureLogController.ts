import { Request, Response } from "express";
import * as failureLogService from '../services/failureLogService';
import { success } from "zod";

export const register = async (req: Request, res: Response) => {
    try {
        const failureLog = await failureLogService.createFailureLog(req.body);
        res.status(201).json(failureLog);
    } catch (error) {
        res.status(400).json({ error: 'Error creating user' });
    }
};

export const showAllFailureLogs = async (req: Request, res: Response) => {
    try {
        const failures = await failureLogService.findAllFailureLogs()
        res.status(200).json({ success: true, data: failures });
    } catch (error) {
        res.status(500).json({ success: false, error: 'Error fetching feilures logs'});
    }
};

export const editFailureLog = async (req: Request, res: Response) => {
    try {
        const id = req.params.id as string;
        
        const failure = await failureLogService.updateFailureLog(id, req.body);
        res.status(200).json({ success: true, data: failure });
    } catch (error) {
        res.status(400).json({ 
            success: false, 
            error: error instanceof Error ? error.message : 'Error updating failure log' 
        });
    }
};

export const destroyFailureLog = async (req: Request, res: Response) => {
    try {
        const id = req.params.id as string;

        await failureLogService.deleteFailureLog(id);
        res.status(200).json({ success: true, message: 'Failure og deleted successfully' });
    } catch (error) {
        res.status(400).json({ 
            success: false, 
            error: error instanceof Error ? error.message : 'Error deleting failure log' 
        });
    }
};