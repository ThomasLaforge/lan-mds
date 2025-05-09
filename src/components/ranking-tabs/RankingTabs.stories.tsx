import type { Meta, StoryObj } from "@storybook/react";

import RankingTabs from "./RankingTabs";

const sampleTournamentData = {
  roundList: [
    {
      round: [
        {
          nbWin: 0,
          nbLoose: 0,
          matches: [
            {
              team1: "Team Alpha",
              team2: "Team Beta",
              scoreTeam1: 3,
              scoreTeam2: 1
            },
            {
              team1: "Team Gamma",
              team2: "Team Delta",
              scoreTeam1: 2,
              scoreTeam2: 3
            },
            {
              team1: "Team Echo",
              team2: "Team Fox",
              scoreTeam1: 0,
              scoreTeam2: 3
            },
            {
              team1: "Team Hydra",
              team2: "Team Joker",
              scoreTeam1: 3,
              scoreTeam2: 2
            }
          ]
        }
      ]
    },
    {
      round: [
        {
          nbWin: 1,
          nbLoose: 0,
          matches: [
            {
              team1: "Team Alpha",
              team2: "Team Delta",
              scoreTeam1: 3,
              scoreTeam2: 2
            },
            {
              team1: "Team Fox",
              team2: "Team Hydra",
              scoreTeam1: 1,
              scoreTeam2: 3
            }
          ]
        },
        {
          nbWin: 0,
          nbLoose: 1,
          matches: [
            {
              team1: "Team Beta",
              team2: "Team Gamma",
              scoreTeam1: 2,
              scoreTeam2: 3
            },
            {
              team1: "Team Echo",
              team2: "Team Joker",
              scoreTeam1: 3,
              scoreTeam2: 0
            }
          ]
        }
      ]
    },
    {
      round: [
        {
          nbWin: 2,
          nbLoose: 0,
          matches: [
            {
              team1: "Team Alpha",
              team2: "Team Hydra",
              scoreTeam1: 2,
              scoreTeam2: 3
            }
          ]
        },
        {
          nbWin: 1,
          nbLoose: 1,
          matches: [
            {
              team1: "Team Delta",
              team2: "Team Fox",
              scoreTeam1: 3,
              scoreTeam2: 1
            },
            {
              team1: "Team Gamma",
              team2: "Team Echo",
              scoreTeam1: 1,
              scoreTeam2: 3
            }
          ]
        },
        {
          nbWin: 0,
          nbLoose: 2,
          matches: [
            {
              team1: "Team Beta",
              team2: "Team Joker",
              scoreTeam1: 0,
              scoreTeam2: 3
            }
          ]
        }
      ]
    }
  ]
};

const meta: Meta<typeof RankingTabs> = {
  title: "Components/RankingTabs",
  component: RankingTabs
};

export default meta;
type Story = StoryObj<typeof RankingTabs>;

export const Default: Story = {
  args: {
    tournamentData: sampleTournamentData
  }
};
