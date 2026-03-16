import jwt from 'jsonwebtoken'
import "dotenv/config";

const JWT_SECRET = process.env.JWT_SECRET || 'secret';

export const generateToken = (payload: object): string => {
    return jwt.sign(payload, JWT_SECRET, { expiresIn: '24h' });
}

export const verifyToken = (token: string): any => {
    return jwt.verify(token, JWT_SECRET);
}