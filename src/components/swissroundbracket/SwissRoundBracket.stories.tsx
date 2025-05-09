import { Meta, StoryObj } from "@storybook/react";
import { SwissRoundBracket } from "./SwissRoundBracket";

const meta: Meta<typeof SwissRoundBracket> = {
    title: "Components/SwissRoundBracket",
    component: SwissRoundBracket,
    tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof SwissRoundBracket>;

export const SwissBracketExample: Story = {
    args: {
        roundList: [
            // ROUND 1 — Tout le monde à 0-0
            {
                round: [
                    {
                        nbWin: 0,
                        nbLoose: 0,
                        matches: [
                            { team1: "Team Alpha", team2: "Team Beta", scoreTeam1: 3, scoreTeam2: 1 },
                            { team1: "Team Gamma", team2: "Team Delta", scoreTeam1: 2, scoreTeam2: 3 },
                            { team1: "Team Echo", team2: "Team Fox", scoreTeam1: 0, scoreTeam2: 3 },
                            { team1: "Team Hydra", team2: "Team Joker", scoreTeam1: 3, scoreTeam2: 2 },
                        ],
                    },
                ],
            },
            // ROUND 2 — 1-0 vs 1-0 et 0-1 vs 0-1
            {
                round: [
                    {
                        nbWin: 1,
                        nbLoose: 0,
                        matches: [
                            { team1: "Team Alpha", team2: "Team Delta", scoreTeam1: 3, scoreTeam2: 2 },
                            { team1: "Team Fox", team2: "Team Hydra", scoreTeam1: 1, scoreTeam2: 3 },
                        ],
                    },
                    {
                        nbWin: 0,
                        nbLoose: 1,
                        matches: [
                            { team1: "Team Beta", team2: "Team Gamma", scoreTeam1: 2, scoreTeam2: 3 },
                            { team1: "Team Echo", team2: "Team Joker", scoreTeam1: 3, scoreTeam2: 0 },
                        ],
                    },
                ],
            },
            // ROUND 3 — 2-0 vs 2-0, 1-1 vs 1-1, 0-2 vs 0-2
            {
                round: [
                    {
                        nbWin: 2,
                        nbLoose: 0,
                        matches: [
                            { team1: "Team Alpha", team2: "Team Hydra", scoreTeam1: 2, scoreTeam2: 3 },
                        ],
                    },
                    {
                        nbWin: 1,
                        nbLoose: 1,
                        matches: [
                            { team1: "Team Delta", team2: "Team Fox", scoreTeam1: 3, scoreTeam2: 1 },
                            { team1: "Team Gamma", team2: "Team Echo", scoreTeam1: 1, scoreTeam2: 3 },
                        ],
                    },
                    {
                        nbWin: 0,
                        nbLoose: 2,
                        matches: [
                            { team1: "Team Beta", team2: "Team Joker", scoreTeam1: 0, scoreTeam2: 3 },
                        ],
                    },
                ],
            },
        ],
    },
};
