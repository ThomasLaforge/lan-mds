import { useEffect, useState } from "react";
import RankRow from "../rank-row/RankRow";
import "./Ranking.scss";

export interface Rank {
  équipe: string;
  acronym: string;
  win: number;
  loss: number;
}

function Ranking() {
  const [ranks, setRanks] = useState<Rank[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const API_URL = process.env.NEXT_PUBLIC_API_URL; // Récupération de l'URL via les variables d'environnement Next.js

  useEffect(() => {
    fetch(`${API_URL}/rankings`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            "Erreur lors de la récupération du classement."
          );
        }
        return response.json();
      })
      .then((data) => {
        setRanks(data.ranks);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [API_URL]);

  if (loading) {
    return <div>Chargement des équipes...</div>;
  }

  if (error) {
    return <div>Erreur : {error}</div>;
  }

  return (
    <table className="resultsTable">
      <thead>
        <tr>
          <td>Place</td>
          <td>Équipe</td>
          <td>V</td>
          <td>
            D <div></div>
          </td>
        </tr>
      </thead>
      <tbody>
        {ranks.map((rankItem, index) => (
          <RankRow
            key={rankItem.équipe} // ou une ID unique si tu as
            ranking={index + 1}
            team={
              rankItem.équipe +
              " (" +
              rankItem.acronym +
              ")"
            }
            win={rankItem.win}
            loss={rankItem.loss}
          />
        ))}
      </tbody>
    </table>
  );
}

export default Ranking;
