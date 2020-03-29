import React from 'react';
import { IBasePokemonInfo } from '~typings/pokemon';
import { Flex } from 'rebass';

import styles from './PokemonEvolutions.module.scss';

const PokemonEvolutions: React.FC<{ evolutions: IBasePokemonInfo[] }> = ({
  evolutions
}) => {
  const createSpriteImgSrc = (id: string) => {
    return `https://pokeres.bastionbot.org/images/pokemon/${id}.png`;
  };
  return (
    <Flex alignItems="flex-end" flexWrap="wrap" justifyContent="center">
      {evolutions.map((evo, index) => {
        const splitURL = evo.url.split('/');
        const [id] = splitURL.slice(splitURL.length - 2);

        return (
          <div
            key={`evolution${index}`}
            className={styles['pokemonevolution-item']}
          >
            <span />
            <img src={createSpriteImgSrc(id)} />
            <p>{evo.name}</p>
          </div>
        );
      })}
    </Flex>
  );
};

export default PokemonEvolutions;
