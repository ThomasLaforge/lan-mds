// import "./RankingTabs.scss";

import Tabs, { TabItem } from "../tabs/Tabs";
import Ranking from "../ranking/Ranking";

import { SwissRoundBracket } from "../swissroundbracket/SwissRoundBracket";
import { SwissRoundElementsProps } from "../swissroundbracket/swissroundelement/SwissRoundElement";

interface Tournament {
  roundList: Round[];
}

interface Round {
  round: SwissRoundElementsProps[];
}

export interface RankingTabsProps {
  tournamentData: Tournament;
}

export default function RankingTabs({
  tournamentData
}: RankingTabsProps) {
  const tabItems: TabItem[] = [
    { label: "Classement", content:() => <Ranking /> },
    {
      label: "Bracket",
      content: () => (
        <SwissRoundBracket
          roundList={tournamentData.roundList}
        />
      )
    }
  ];

  return (
    <div className="ranking-tabs">
      <Tabs items={tabItems} />
    </div>
  );
}
