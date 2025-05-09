"use client";
import Tabs, { TabItem } from "../../components/tabs/Tabs";

import InfoTournament from "../../components/info-tournament/InfoTournament";
import { SwissRoundBracket } from "../../components/swissroundbracket/SwissRoundBracket";
import { SwissRoundElementsProps } from "../../components/swissroundbracket/swissroundelement/SwissRoundElement";
import { TeamList } from "../../components/team/teamList/TeamList";
import "./Tournament.scss";

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
          ] as SwissRoundElementsProps["matches"]
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
          ] as SwissRoundElementsProps["matches"]
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
          ] as SwissRoundElementsProps["matches"]
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
          ] as SwissRoundElementsProps["matches"]
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
          ] as SwissRoundElementsProps["matches"]
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
          ] as SwissRoundElementsProps["matches"]
        }
      ]
    }
  ]
};

export default function TournamentPage() {
  const tabItems: TabItem[] = [
    {
      label: "A propos",
      content: () => (
        <div style={{ padding: "1rem" }}>
          <InfoTournament isRegistration={false} />
        </div>
      )
    },
    {
      label: "Format",
      content: () => (
        <div style={{ padding: "1rem" }}>
          <SwissRoundBracket
            roundList={sampleTournamentData.roundList}
          />
        </div>
      )
    },
    {
      label: "Équipes",
      content: () => (
        <div style={{ padding: "1rem" }}>
          <TeamList />
        </div>
      )
    }
  ];

  return (
    <div className="tournamentPage">
      <h1>Tournoi</h1>
      <Tabs items={tabItems} />
    </div>
  );
}
