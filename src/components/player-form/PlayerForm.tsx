import { Player } from "../../pages/register/Register";
import InputText from "../inputs/InputText";
import SelectList from "../selectList/SelectList";
import "./PlayerForm.scss";

interface PlayerFormProps {
  player: Player;
  classOptions: { [key: string]: string };
  levelsOptions: { [key: string]: string };
  onLastNameChange: (value: string) => void;
  onFirstNameChange: (value: string) => void;
  onUsernameChange: (value: string) => void;
  onEmailChange: (value: string) => void;
  onClassSelect: (key: string) => void;
  onLevelSelect: (key: string) => void;
  nbPlayer?: number;
}

function PlayerForm({
  player,
  classOptions,
  levelsOptions,
  onLastNameChange,
  onFirstNameChange,
  onUsernameChange,
  onEmailChange,
  onClassSelect,
  onLevelSelect,
  nbPlayer
}: Readonly<PlayerFormProps>) {
  return (
    <div>
      <h2>Joueur {nbPlayer}</h2>
      <div className="form-group">
        <InputText
          type="text"
          value={player.lastName}
          placeholder="Nom"
          onChange={(e) => onLastNameChange(e.target.value)}
        />
      </div>
      <div className="form-group">
        <InputText
          type="text"
          value={player.firstName}
          placeholder="Prénom"
          onChange={(e) =>
            onFirstNameChange(e.target.value)
          }
        />
      </div>
      <div className="form-group">
        <InputText
          type="text"
          value={player.username}
          placeholder="Pseudo"
          onChange={(e) => onUsernameChange(e.target.value)}
        />
      </div>
      <div className="form-group">
        <InputText
          type="email"
          value={player.email}
          placeholder="Email"
          onChange={(e) => onEmailChange(e.target.value)}
        />
      </div>
      <div className="form-group">
        <SelectList
          data={classOptions}
          onClick={(key) => onClassSelect(key)}
          placeholder="Sélectionnez une classe"
        />
      </div>
      <div className="form-group">
        <SelectList
          data={levelsOptions}
          onClick={(key) => onLevelSelect(key)}
          placeholder="Sélectionnez un niveau"
        />
      </div>
    </div>
  );
}

export default PlayerForm;
