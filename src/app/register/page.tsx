"use client";
import "./Register.scss";

import {
  useCallback,
  useEffect,
  useMemo,
  useState
} from "react";

import { useRouter } from "next/navigation";
import PrimaryButton from "../../components/buttons/primaryButton/PrimaryButton";
import { Card } from "../../components/card/Card";
import InfoTournament from "../../components/info-tournament/InfoTournament";
import InputText from "../../components/inputs/InputText";
import PlayerForm from "../../components/player-form/PlayerForm";

export interface Player {
  [key: string]: string;
  lastName: string;
  firstName: string;
  username: string;
  email: string;
  class: string;
  level: string;
}

interface Level {
  id: number;
  name: string;
  order: number;
}

interface Promo {
  id: number;
  name: string;
  order: number;
}

function Register() {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  const router = useRouter();

  const [teamName, setTeamName] = useState("");
  const [teamAcronyme, setTeamAcronyme] = useState("");
  const [errorMessageAcronyme, setErrorMessageAcronyme] =
    useState("");
  const [players, setPlayers] = useState<Player[]>(
    Array.from({ length: 2 }, () => ({
      lastName: "",
      firstName: "",
      username: "",
      email: "",
      class: "",
      level: ""
    }))
  );
  const [levels, setLevels] = useState<string[]>([]);
  const [promos, setPromos] = useState<string[]>([]);
  const [, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchLevels = async () => {
      try {
        const response = await fetch(
          `${API_URL}/rl-ranks`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json"
            }
          }
        );

        if (!response.ok) {
          throw new Error(
            "Erreur lors de la récupération des niveaux."
          );
        }

        const data: Level[] = await response.json();
        const levelNames = data.map((level) => level.name);
        setLevels(levelNames);
      } catch (error) {
        console.error("Erreur :", error);
        setError("Impossible de récupérer les niveaux.");
      }
    };

    fetchLevels();
  }, [API_URL]);

  useEffect(() => {
    const fetchPromos = async () => {
      try {
        const response = await fetch(`${API_URL}/promos`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json"
          }
        });

        if (!response.ok) {
          throw new Error(
            "Erreur lors de la récupération des promotions."
          );
        }

        const data: Promo[] = await response.json();
        const promoNames = data.map((promo) => promo.name);
        setPromos(promoNames);
      } catch (error) {
        console.error("Erreur :", error);
        setError("Impossible de récupérer les promotions.");
      }
    };

    fetchPromos();
  }, [API_URL]);

  const levelsOptions = useMemo(() => {
    return levels.reduce((options, levelName, index) => {
      options[index.toString()] = levelName;
      return options;
    }, {} as { [key: string]: string });
  }, [levels]);

  const promosOptions = useMemo(() => {
    return promos.reduce((options, promoName, index) => {
      options[index.toString()] = promoName;
      return options;
    }, {} as { [key: string]: string });
  }, [promos]);

  const handlePlayerChange = useCallback(
    (index: number, field: string, value: string) => {
      setPlayers((prevPlayers) => {
        const updatedPlayers = [...prevPlayers];
        updatedPlayers[index][field] = value;
        return updatedPlayers;
      });
    },
    []
  );

  const handleSetTeamName = useCallback(
    (value: string) => {
      setTeamName(value);
      if (teamAcronyme.length !== 3) {
        const acronym = value
          .trim()
          .slice(0, 3)
          .toUpperCase();
        setTeamAcronyme(acronym);
      }
      if (!value) {
        setTeamAcronyme("");
      }
    },
    [teamAcronyme]
  );

  const handleSetTeamAcronyme = useCallback(
    (value: string) => {
      setTeamAcronyme(value.toUpperCase());
    },
    []
  );

  useEffect(() => {
    if (
      teamAcronyme.length > 0 &&
      teamAcronyme.length !== 3
    ) {
      setErrorMessageAcronyme(
        "L'acronyme de l'équipe doit contenir exactement 3 caractères."
      );
    } else {
      setErrorMessageAcronyme("");
    }
  }, [teamName, teamAcronyme]);

  const submitRegister = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();

      console.log("teamName", teamName);
      console.log("teamAcronyme", teamAcronyme);
      if (!teamName.trim() || !teamAcronyme.trim()) {
        setError(
          "Le nom de l'équipe et l'acronyme sont obligatoires."
        );
        return;
      }
      const invalidPlayer = players.find(
        (player) =>
          !player.lastName.trim() ||
          !player.firstName.trim() ||
          !player.username.trim() ||
          !player.class.trim() ||
          !player.level.trim()
      );

      if (invalidPlayer) {
        setError(
          "Tous les joueurs doivent avoir un nom, un prénom, un pseudo, une promotion et un niveau."
        );
        return;
      }
      setError(null);
      const payload = {
        name: teamName,
        acronym: teamAcronyme,
        players: players.map((player) => ({
          name: player.lastName,
          firstname: player.firstName,
          pseudo: player.username,
          promoId: parseInt(player.class, 10),
          levelId: parseInt(player.level, 10)
        }))
      };

      try {
        const response = await fetch(`${API_URL}/teams`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(payload)
        });

        if (!response.ok) {
          throw new Error(
            "Erreur lors de la soumission du formulaire."
          );
        }

        const data = await response.json();
        console.log(
          "Formulaire soumis avec succès :",
          data
        );

        router.push("/confirm-register");
      } catch (error) {
        console.error("Erreur :", error);
        setError(
          "Une erreur est survenue lors de la soumission du formulaire."
        );
      }
    },
    [players, teamName, teamAcronyme, API_URL, router]
  );

  return (
    <div className="registration-container">
      <h1 className="pageTitle">Inscription</h1>
      <Card>
        <div className="register-container">
          <InfoTournament isRegistration={true} />

          <div className="register-form">
            <h2>Equipe</h2>
            <form className="player-form">
              <div className="team-form">
                <InputText
                  type="text"
                  value={teamName}
                  placeholder="Nom de l'équipe"
                  onChange={(e) =>
                    handleSetTeamName(e.target.value)
                  }
                />

                <InputText
                  type="text"
                  value={teamAcronyme}
                  placeholder="Acronyme de l'équipe"
                  onChange={(e) =>
                    handleSetTeamAcronyme(e.target.value)
                  }
                />
                {errorMessageAcronyme && (
                  <p className="warning-message">
                    {errorMessageAcronyme}
                  </p>
                )}
              </div>

              <div className="players">
                {players.map((player, index) => (
                  <PlayerForm
                    key={index}
                    nbPlayer={index + 1}
                    player={player}
                    classOptions={promosOptions}
                    levelsOptions={levelsOptions}
                    onLastNameChange={(value) =>
                      handlePlayerChange(
                        index,
                        "lastName",
                        value
                      )
                    }
                    onFirstNameChange={(value) =>
                      handlePlayerChange(
                        index,
                        "firstName",
                        value
                      )
                    }
                    onUsernameChange={(value) =>
                      handlePlayerChange(
                        index,
                        "username",
                        value
                      )
                    }
                    onEmailChange={(value) =>
                      handlePlayerChange(
                        index,
                        "email",
                        value
                      )
                    }
                    onClassSelect={(key) =>
                      handlePlayerChange(
                        index,
                        "class",
                        key
                      )
                    }
                    onLevelSelect={(key) =>
                      handlePlayerChange(
                        index,
                        "level",
                        key
                      )
                    }
                  />
                ))}
              </div>

              <div className="form-button">
                <PrimaryButton
                  variant="primary"
                  onClick={submitRegister}
                >
                  S&apos;inscrire
                </PrimaryButton>
              </div>
            </form>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default Register;
