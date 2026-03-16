import { prisma } from "../utils/prisma";

interface FailureLog {
    title: string;
    errorDetail: string;
    solution: string | null | any;
    lessonLearned: string | null | any;
    isResolved: boolean;
    userId: string;
}

export const createFailureLog = async (failureLogData: FailureLog) => {
    console.log("Payload para o Prisma:", JSON.stringify(failureLogData, null, 2));
    
    return await prisma.failureLog.create({
        data: failureLogData
    });
};

export const findAllFailureLogs = async () => {
    return await prisma.failureLog.findMany();
}

export const updateFailureLog = async (id: string, data: Partial<FailureLog>) => {
    return prisma.failureLog.update({
        where: { id },
        data
    });
};

export const deleteFailureLog = async (id: string) => {
    return prisma.failureLog.delete({
        where: { id }
    });
};