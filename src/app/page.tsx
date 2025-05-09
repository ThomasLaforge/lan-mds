"use client";
import { Card } from "../components/card/Card";
import Carousel from "../components/carousel/Carousel";
import { GameCard } from "../components/game-card/GameCard";
import InfoTournament from "../components/info-tournament/InfoTournament";
import "./Home.scss";

function Home() {
  return (
    <div className="homeContainer">
      <div>
        <h1>Tournoi à venir</h1>
        <Card>
          <InfoTournament />
        </Card>
      </div>
      <div>
        <h1>Les jeux</h1>
        <GameCard
          title="Rocket League"
          description="Rocket League est un jeu où des voitures s'affrontent pour marquer des buts."
          imageUrl="/rl-card-image.jpg"
        />
      </div>
      <div>
        <h1>Les partenaires</h1>
        <Card>
          {/* Ajouter les partenaires */}
          <Carousel
            components={[
              () => (
                <div>
                  <a
                    href="https://www.mydigitalschool.com"
                    target="_blank"
                  >
                    <img
                      src="/mds.png"
                      alt="Logo MDS"
                    ></img>
                  </a>
                </div>
              ),
              () => (
                <div>
                  <a
                    href="https://www.groupe-eduservices.fr/ecole/ipac"
                    target="_blank"
                  >
                    <img
                      src="/ipac.png"
                      alt="Logo IPAC"
                    ></img>
                  </a>
                </div>
              ),
              () => (
                <div>
                  <a
                    href="https://www.linkedin.com/in/marie-payen/"
                    target="_blank"
                  >
                    <img
                      src="/marie.png"
                      alt="Marie Payen"
                    ></img>
                  </a>
                </div>
              )
            ]}
          />
        </Card>
      </div>
    </div>
  );
}

export default Home;
