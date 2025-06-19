'use server'
import prisma from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { Prisma } from "@prisma/client";
import { revalidatePath } from "next/cache";

export const createCalmCompanion = async (companionData: Prisma.calmCompanionCreateInput) => {
  const user = await auth();
  const userId = user.userId;
  try {
    const response = await prisma.calmCompanion.create({
      data: {
        ...companionData,
        user_id: userId,
      },
    });

    revalidatePath("/companions")
    revalidatePath("/")
    
    return response
  } catch (error) {
    console.error("ERROR on creating calmMind companion: ", error);
  }
};


export const getCalmMindCompanion = async() => {
  try {
    const response = await prisma.calmCompanion.findMany()
    return response
  } catch (error) {
    console.error("ERROR fetching the calmMind Companion: ", error)
    
  }
}

export const getCalmMindCompanionById = async(companionId: string) => {
  try {
    const response = await prisma.calmCompanion.findFirst({
      where: {
        id: companionId
      }
    })

    return response
  } catch (error) {
    console.error("ERROR fetching the calm mind companion by id: ", error)
    
  }
}
