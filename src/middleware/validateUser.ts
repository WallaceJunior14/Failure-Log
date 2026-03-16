import { Request, Response, NextFunction } from 'express';
import { z } from 'zod';

const userSchema = z.object({
    name: z.string().min(3),
    email: z.string(),
    password: z.string().min(6)
});

const userUpdateSchema = userSchema.partial();

export const validateUser = (req: Request, res: Response, next: NextFunction) => {
    const schema = req.method === 'PUT' ? userUpdateSchema : userSchema;

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
