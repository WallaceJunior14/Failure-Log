import express from 'express';
import helmet from 'helmet';
import cors from 'cors';

const createApp = () => {
    const app = express();

    // Middlewares
    app.use(helmet());
    app.use(cors());
    app.use(express.json());
    
    // Error Handling
    app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    });

    return app;
};

export const app = createApp();