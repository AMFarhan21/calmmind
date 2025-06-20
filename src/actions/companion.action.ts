"use server";
import prisma from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { Prisma } from "@prisma/client";
import { revalidatePath } from "next/cache";

export const createCalmCompanion = async (
  companionData: Prisma.calmCompanionCreateInput
) => {
  const user = await auth();
  const userId = user.userId;
  try {
    const response = await prisma.calmCompanion.create({
      data: {
        ...companionData,
        user_id: userId,
      },
    });

    revalidatePath("/companions");
    revalidatePath("/home");

    return response;
  } catch (error) {
    console.error("ERROR on creating calmMind companion: ", error);
  }
};

export const getAllCalmMindCompanion = async () => {
  try {
    const response = await prisma.calmCompanion.findMany();
    return response;
  } catch (error) {
    console.error("ERROR fetching all CalmMind Companion: ", error);
  }
};

export const getCalmMindCompanionByUser = async (userId: string) => {
  try {
    const response = await prisma.calmCompanion.findMany({
      where: {
        user_id: userId,
      },
    });
    return response;
  } catch (error) {
    console.error("ERROR fetching the calmMind Companion by User: ", error);
  }
};

export const getCalmMindCompanionById = async (companionId: string) => {
  try {
    const response = await prisma.calmCompanion.findFirst({
      where: {
        id: companionId,
      },
    });

    return response;
  } catch (error) {
    console.error("ERROR fetching the calm mind companion by id: ", error);
  }
};

export const deleteCompanion = async (companionId: string) => {
  try {
    await prisma.calmCompanion.delete({
      where: {
        id: companionId,
      },
    });

    revalidatePath("/home");
    revalidatePath("/companions");
  } catch (error) {
    console.error("ERROR deleting companion: ", error);
  }
};

export const getSessionHistory = async (userId: string) => {
  try {
    const response = await prisma.session_history.findMany({
      where: {
        user_id: userId,
      },
      include: {
        calmCompanion: true,
      },
    });

    return response;
  } catch (error) {
    console.error("ERROR fetching the session history: ", error);
  }
};

export const createSessionHistory = async (calmCompanionId: string) => {
  const user = await auth();
  const userId = user.userId;
  try {
    const existingHistory = await prisma.session_history.findFirst({
      where: {
        calmCompanion_id: calmCompanionId,
      },
    });

    if (existingHistory) {
      await prisma.session_history.delete({
        where: {
          id: existingHistory.id,
        },
      });
    }

    const response = await prisma.session_history.create({
      data: {
        calmCompanion_id: calmCompanionId,
        user_id: userId,
      },
    });

    revalidatePath("/companions");
    revalidatePath("/home");
    return response;
  } catch (error) {
    console.error("ERROR creating session history: ", error);
  }
};
