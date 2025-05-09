import { Match, PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

interface IResultData {
    teamOneId: number;
    teamTwoId: number;
    score1: number;
    score2: number;
}

const prisma = new PrismaClient();

export const POST = async (req: NextRequest) => {
    const { teamOneId, teamTwoId, score1, score2 } = await req.json() as IResultData;
    const match = await prisma.match.create({
        data: {
            team1Id: teamOneId,
            team2Id: teamTwoId,
            score1,
            score2
        }
    });
    return NextResponse.json(match);
}

interface Tournament {
    rounds: Round[];
}

interface Round {
    parts: Part[];
}

interface Part {
    nbWin: number;
    nbLose: number;
    matchList: Match[];
}

export const GET = async () => {
    // Get all matches with team names
    // const matches = await prisma.match.findMany({
    //     include: {
    //         team1: {
    //             include: {
    //                 players: true,
    //             }
    //         },
    //         team2: {
    //             include: {
    //                 players: true,
    //             }
    //         }
    //     }
    // });

    // Transform the data to get a tournament structure
    // matches must be grouped by rounds
    const tournament: Tournament = {
        rounds: []
    };
    // const roundMap = new Map<number, Round>();
    // matches.forEach(match => {
    //     const roundNumber = match.round;
    //     if (!roundMap.has(roundNumber)) {
    //         roundMap.set(roundNumber, { parts: [] });
    //     }
    //     const round = roundMap.get(roundNumber);
    //     if (round) {
    //         const part: Part = {
    //             nbWin: 0,
    //             nbLose: 0,
    //             matchList: []
    //         };
    //         part.matchList.push(match);
    //         round.parts.push(part);
    //     }
    // });

    // Sort the rounds by number
    return NextResponse.json(tournament);
}