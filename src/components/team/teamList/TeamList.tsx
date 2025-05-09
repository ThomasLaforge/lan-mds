"use client";
import { useEffect, useState } from "react";
import TeamCard from "../teamCard/TeamCard";
import "./TeamList.scss";

type Player = {
  name: string;
  firstname: string;
  promoId: number;
  levelId: number;
};

type Promo = {
  id: number;
  name: string;
};

type Level = {
  id: number;
  name: string;
};

type Team = {
  name: string;
  players: Player[];
};

export function TeamList() {
  const [teams, setTeams] = useState<Team[]>([]);
  const [promos, setPromos] = useState<Promo[]>([]);
  const [levels, setLevels] = useState<Level[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    fetch(`${API_URL}/promos`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            "Erreur lors de la récupération des promotions."
          );
        }
        return response.json();
      })
      .then((data) => {
        setPromos(data);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });

    fetch(`${API_URL}/rl-ranks`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            "Erreur lors de la récupération des niveaux."
          );
        }
        return response.json();
      })
      .then((data) => {
        setLevels(data);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });

    fetch(`${API_URL}/teams`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            "Erreur lors de la récupération des équipes."
          );
        }
        return response.json();
      })
      .then((data) => {
        setTeams(data);
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

  const getPromoName = (promoId: number) => {
    const promo = promos.find(
      (promo) => promo.id === promoId
    );
    return promo ? promo.name : "Inconnu";
  };

  const getLevelName = (levelId: number) => {
    const level = levels.find(
      (level) => level.id === levelId
    );
    return level ? level.name : "Inconnu";
  };

  return (
    <div className="team-list">
      {teams.map((team) => (
        <TeamCard
          key={team.name}
          name={team.name}
          players={team.players.map((player) => ({
            ...player,
            promoName: getPromoName(player.promoId),
            levelName: getLevelName(player.levelId)
          }))}
        />
      ))}
    </div>
  );
}
