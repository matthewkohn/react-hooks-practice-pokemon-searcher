import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({pokemon}) {
  const [isClicked, setIsClicked] = useState(false);
  const { name, hp, sprites } = pokemon;

  function handleClick() {
    setIsClicked(() => !isClicked)
  }

  return (
    <Card>
      <div>
        <div onClick={handleClick} className="image">
          {isClicked ? <img src={sprites.back} alt="oh no!" /> : <img src={sprites.front} alt="oh yeah!" />}
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
