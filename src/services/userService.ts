import { prisma } from "../utils/prisma";
import bcrypt from 'bcrypt';
import { generateToken } from "../utils/jwt";

interface UserData {
    name: string;
    email: string;
    password: string;
}

export const createUser = async (userData: UserData) => {
    const hashedPasssoword = await bcrypt.hash(userData.password, 10);

    return await prisma.user.create({
        data: {
            ...userData,
            password:hashedPasssoword
        }
    });
};

export const loginUser = async (email: string, password: string) => {
    const user = await prisma.user.findFirst({ where: { email } });

    if (!user || !(await bcrypt.compare(password, user?.password))) {
        throw new Error('Invalid Credentials');
    }

    return generateToken({ id: user.id, email: user.email });
}

export const getUserByEmail = async (email: string) => {
    return prisma.user.findFirst({
        where: { email },
        select: { id: true, name: true, email: true, role: true }
    });
}