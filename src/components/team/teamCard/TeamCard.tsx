import "./TeamCard.scss";

type Player = {
  name: string;
  firstname: string;
  promoName: string;
  levelName: string;
};

type TeamCardProps = {
  name: string;
  players: Player[];
};

const TeamCard = ({ name, players }: TeamCardProps) => {
  return (
    <div className="team-card">
      <h2 className="team-name">{name}</h2>
      {players.map((player, index) => (
        <div key={index} className="team-member">
          <p className="member-name">{player.firstname} {player.name}</p>
          <p>{player.promoName}</p>
          <p>Niveau {player.levelName}</p>
        </div>
      ))}
    </div>
  );
};

export default TeamCard;
