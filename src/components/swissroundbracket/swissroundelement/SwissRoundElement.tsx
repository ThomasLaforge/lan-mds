import TeamMatch from "./teammatch/TeamMatch.tsx";
import "./SwissRoundElement.scss";


export interface Matches {
    team1: string,
    team2: string,
    scoreTeam1: number,
    scoreTeam2: number,
}

export interface SwissRoundElementsProps {
    nbWin: number,
    nbLoose: number,
    matches: Matches[],
}


export function SwissRoundElement (props: SwissRoundElementsProps){
    const {nbWin, nbLoose, matches} = props

    return (
        <div className="swissRoundElement">
            <h2>{nbWin} - {nbLoose}</h2>
            <div className="matches">
                {matches.map((match) => (
                    <TeamMatch team1={match.team1} team2={match.team2} scoreTeam1={match.scoreTeam1} scoreTeam2={match.scoreTeam2}/>
                ))}
            </div>
        </div>
    )
}