import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export const GET = async () => {
    const promos = await prisma.promo.findMany(
      {
        orderBy: {
          order: "asc"
        }
      }
    );

    return NextResponse.json(promos);
};