import React from 'react';

import { IParsedPlanet } from '~utils/api/swapi/index.d';

const Card: React.FC<Partial<IParsedPlanet>> = props => {
  return (
    <div>
      <h1>{props.name}</h1>
    </div>
  );
};

export default Card;
