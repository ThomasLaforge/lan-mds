import "./SwissRoundBracket.scss";

import {SwissRoundElement, SwissRoundElementsProps} from "./swissroundelement/SwissRoundElement.tsx";

interface Round {
    round: SwissRoundElementsProps[];
}

interface Tournament {
    roundList: Round[];
}

export function SwissRoundBracket(props: Tournament) {
    const {roundList} = props
    return (
        <div className="swissRoundBracket">
            {roundList.map((roundList) => (
                <div className="roundListContainer">
                    {roundList.round.map((round) => (
                        <SwissRoundElement nbWin={round.nbWin} nbLoose={round.nbLoose} matches={round.matches}/>
                    ))}
                </div>
            ))}
        </div>
    )
}