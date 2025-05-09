import "./GameCard.scss";

import { Card } from "../card/Card";

type GameCardProps = {
  title: string;
  description: string;
  imageUrl: string;
};

export function GameCard({ title, description, imageUrl }: GameCardProps) {
  return (
    <Card>
      <div className="game-card">
        <img src={imageUrl} alt={title} className="game-card-image" />
        <div className="game-card-content">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </div>
    </Card>
  );
}
