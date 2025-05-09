import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export const GET = async () => {
  const rlRanks = await prisma.rLRank.findMany(
    {
      orderBy: {
        order: "asc"
      }
    }
  );

  return NextResponse.json(rlRanks);
};