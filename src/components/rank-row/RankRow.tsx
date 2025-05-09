import IconText from "../icon-text/IconText";
import TrophyBronze from "../icons/TrophyBronze";
import TrophyGold from "../icons/TrophyGold";
import TrophySilver from "../icons/TrophySilver";

export interface RankRowProps {
  ranking: number;
  team: string;
  win: number;
  loss: number;
}

function RankRow({
  ranking,
  team,
  win,
  loss
}: RankRowProps) {
  var rankContent: React.ReactElement = <>{ranking}</>;
  if (ranking <= 3) {
    var trophy = TrophyGold;
    if (ranking == 2) {
      trophy = TrophySilver;
    } else if (ranking == 3) {
      trophy = TrophyBronze;
    }
    rankContent = IconText({
      Icon: trophy,
      label: String(ranking)
    });
  }
  return (
    <tr>
      <td>{rankContent}</td>
      <td>{team}</td>
      <td>{String(win)}</td>
      <td>
        {String(loss)}
        <div></div>
      </td>
    </tr>
  );
}

export default RankRow;
