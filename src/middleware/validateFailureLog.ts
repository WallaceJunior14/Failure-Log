import { Request, Response, NextFunction } from 'express';
import { z } from 'zod';

const failureLogSchema = z.object({
    title: z.string(),
    errorDetail: z.string(),
    solution: z.string().nullable(),
    lessonLearned: z.string().nullable(),
    isResolved: z.boolean(),
    userId: z.string()
});

const failureLogUpdateSchema = failureLogSchema.partial();

export const validateFailureLog = (req: Request, res: Response, next: NextFunction) => {
    const schema = req.method === 'PUT' ? failureLogUpdateSchema : failureLogSchema;

    try {
        schema.parse(req.body);
        next();
    } catch (error) {
        if (error instanceof z.ZodError) {
            res.status(400).json({ errors: error.message });
            return;
        }
        next(error);
    }
};
