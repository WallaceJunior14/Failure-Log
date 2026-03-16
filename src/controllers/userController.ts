import { Request, Response } from "express";
import * as userService from '../services/userService';

export const register = async (req: Request, res: Response) => {
    try {
        const user = await userService.createUser(req.body);
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ error: 'Error creating user' });
    }
}

export const login = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;
        const token = await userService.loginUser(email, password);
        const user = await userService.getUserByEmail(email);
        res.json({ token, user });
    } catch (error) {
        res.status(401).json({ error: 'Invalid Credentials' });
    }
};