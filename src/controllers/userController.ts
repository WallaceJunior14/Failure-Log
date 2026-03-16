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
        console.log(user)
        res.status(200).json({ token, user });
    } catch (error) {
        res.status(401).json({ error: 'Invalid Credentials' });
    }
};

export const showAllUser = async (_req: Request, res: Response) => {
    try {
        const users = await userService.findAllUser();
        res.status(200).json({ success: true, data: users });
    } catch (error) {
        res.status(500).json({ success: false, error: 'Error fetching users'});
    }
}