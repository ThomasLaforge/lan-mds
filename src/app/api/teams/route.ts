import { Player, PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();


export const GET = async () => {
    const inscriptions = await prisma.team.findMany({
        include: {
            players: true
        }
    });
    return NextResponse.json(inscriptions);
};

export const POST = async (req: NextRequest) => {
    const { name, acronym, players } = await req.json();
    if(!name || !players) {
      return NextResponse.json({
        message: "Missing required information"
      }, { status: 400 });
    }
    else {
        const newTeam = await prisma.team.create({
            data: {
                name,
                acronym: acronym,
                players: {
                    createMany: {
                        data: players.map((player: Player) => ({
                            name: player.name,
                            firstname: player.firstname,
                            pseudo: player.pseudo,
                            promoId: player.promoId,
                            levelId: player.levelId
                        }))
                    }
                }  
            }
        });
        return NextResponse.json(newTeam);
    }
}