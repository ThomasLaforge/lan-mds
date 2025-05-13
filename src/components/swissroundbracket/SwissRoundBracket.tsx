import "./SwissRoundBracket.scss";

import { SwissRoundElement, SwissRoundElementsProps } from "./swissroundelement/SwissRoundElement";

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
            {roundList.map((roundList, key) => (
                <div className="roundListContainer" key={key}>
                    {roundList.round.map((round, j) => (
                        <SwissRoundElement
                            key={key + "-" + j}
                            nbWin={round.nbWin}
                            nbLoose={round.nbLoose}
                            matches={round.matches}
                        />
                    ))}
                </div>
            ))}
        </div>
    )
}