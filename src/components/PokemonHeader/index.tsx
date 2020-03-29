import React from 'react';
import { Flex, Box } from 'rebass';
import {
  TypographyPokemonCardTitle,
  TypographyPokemonSelectedHeader,
  TypographyPokemonSelectedDetails
} from '~components/Typography';
import { IPokemon } from '~typings/pokemon';
import { pokemonTypeTable } from '~components/Badges/PokemonTypeBadge';

import styles from './PokemonHeader.module.scss';

const PokemonHeader: React.FC<Pick<
  IPokemon,
  'img' | 'color' | 'name' | 'types' | 'height' | 'weight'
>> = ({ img, name, types, color, height, weight }) => {
  return (
    <Flex width={'100%'} justifyContent="space-around">
      <Flex style={{ position: 'relative' }}>
        <Flex mx="2em">
          <img src={img} height={130} width={130} />
        </Flex>
        <div className={styles['pokemonheader-container']}>
          <div
            className={styles['pokemonheader-bg']}
            style={{ background: color?.name }}
          ></div>
          <TypographyPokemonCardTitle style={{ color: color?.name }}>
            {name}
          </TypographyPokemonCardTitle>
          <Flex justifyContent="flex-start" mt="10px">
            {types?.map(type => {
              const Badge = pokemonTypeTable[type.type.name];
              return <Badge />;
            })}
          </Flex>
        </div>
        <Flex>
          <Flex flexDirection="column" m="0 1em">
            <TypographyPokemonSelectedHeader>
              Height
            </TypographyPokemonSelectedHeader>
            <TypographyPokemonSelectedDetails>
              {height} m
            </TypographyPokemonSelectedDetails>
          </Flex>
          <Flex flexDirection="column" m="0 1em" alignItems="flex-start">
            <TypographyPokemonSelectedHeader>
              Weight
            </TypographyPokemonSelectedHeader>
            <TypographyPokemonSelectedDetails>
              {weight} kg
            </TypographyPokemonSelectedDetails>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default PokemonHeader;
