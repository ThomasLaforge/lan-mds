import { Meta, StoryObj } from "@storybook/react";
import { SwissRoundElement } from "./SwissRoundElement";
import "./SwissRoundElement.scss";

const meta: Meta<typeof SwissRoundElement> = {
    title: "Components/SwissRoundElement",
    component: SwissRoundElement,
    tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof SwissRoundElement>;

export const Default: Story = {
    args: {
        nbWin: 2,
        nbLoose: 1,
        matches: [
            {
                team1: "Team Alpha",
                team2: "Team Beta",
                scoreTeam1: 3,
                scoreTeam2: 2,
            },
            {
                team1: "Team Alpha",
                team2: "Team Gamma",
                scoreTeam1: 1,
                scoreTeam2: 3,
            },
            {
                team1: "Team Alpha",
                team2: "Team Delta",
                scoreTeam1: 3,
                scoreTeam2: 0,
            },
        ],
    },
};

export const AllWins: Story = {
    args: {
        nbWin: 3,
        nbLoose: 0,
        matches: [
            {
                team1: "Team Omega",
                team2: "Team Sigma",
                scoreTeam1: 3,
                scoreTeam2: 1,
            },
            {
                team1: "Team Omega",
                team2: "Team Epsilon",
                scoreTeam1: 3,
                scoreTeam2: 2,
            },
            {
                team1: "Team Omega",
                team2: "Team Zeta",
                scoreTeam1: 3,
                scoreTeam2: 2,
            },
        ],
    },
};

export const AllLosses: Story = {
    args: {
        nbWin: 0,
        nbLoose: 3,
        matches: [
            {
                team1: "Team Mu",
                team2: "Team Nu",
                scoreTeam1: 1,
                scoreTeam2: 3,
            },
            {
                team1: "Team Mu",
                team2: "Team Xi",
                scoreTeam1: 2,
                scoreTeam2: 3,
            },
            {
                team1: "Team Mu",
                team2: "Team Omicron",
                scoreTeam1: 2,
                scoreTeam2: 3,
            },
        ],
    },
};
