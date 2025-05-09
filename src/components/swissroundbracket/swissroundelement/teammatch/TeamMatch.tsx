import {Matches} from "../SwissRoundElement.tsx";
import "./TeamMatch.scss";

export default function TeamMatch(match: Matches) {
    return (
        <div className="teamMatch">
            <div className="team1">
                <span className="team1name">
                    {match.team1}
                </span>
                 <span className="team1score">
                     {match.scoreTeam1}
                 </span>
            </div>
            <div className="team2">
                <span className="team2score">
                    {match.scoreTeam2}
                </span>
                <span className="team2name">
                    {match.team2}
                </span>
            </div>
        </div>
    )
}