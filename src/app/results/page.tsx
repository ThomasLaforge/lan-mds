"use client";

import Ranking from "../../components/ranking/Ranking";
import { SwissRoundBracket } from "../../components/swissroundbracket/SwissRoundBracket";
import Tabs from "../../components/tabs/Tabs";
import "./Result.scss";

function Result() {
  const roundList = [
    // ROUND 1 — Tout le monde à 0-0
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
    // ROUND 2 — 1-0 vs 1-0 et 0-1 vs 0-1
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
    // ROUND 3 — 2-0 vs 2-0, 1-1 vs 1-1, 0-2 vs 0-2
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
    },
    {
      round: [
        {
          nbWin: 3,
          nbLoose: 0,
          matches: [
            {
              team1: "Team Hydra",
              team2: "PERSONNE",
              scoreTeam1: 0,
              scoreTeam2: 0
            }
          ]
        },
        {
          nbWin: 2,
          nbLoose: 1,
          matches: [
            {
              team1: "Team Alpha",
              team2: "Team Delta",
              scoreTeam1: 3,
              scoreTeam2: 0
            },
            {
              team1: "Team Echo",
              team2: "PERSONNE",
              scoreTeam1: 0,
              scoreTeam2: 0
            }
          ]
        },
        {
          nbWin: 1,
          nbLoose: 2,
          matches: [
            {
              team1: "Team Joker",
              team2: "Team Fox",
              scoreTeam1: 3,
              scoreTeam2: 0
            },
            {
              team1: "Team Gamma",
              team2: "PERSONNE",
              scoreTeam1: 0,
              scoreTeam2: 0
            }
          ]
        },
        {
          nbWin: 0,
          nbLoose: 3,
          matches: [
            {
              team1: "Team Beta",
              team2: "PERSONNE",
              scoreTeam1: 0,
              scoreTeam2: 0
            }
          ]
        }
      ]
    }
  ];
  const tabsItems: { label: string; content: React.FC }[] =
    [
      { label: "Classement", content: () => <Ranking /> },
      {
        label: "Bracket",
        content: () => (
          <SwissRoundBracket roundList={roundList} />
        )
      }
    ];

  return (
    <div className="resultContainer">
      <h1>Résultats</h1>
      <Tabs items={tabsItems} />
    </div>
  );
}

export default Result;
