import React from 'react';
import { IPokemon } from '~typings/pokemon';
import PokemonEvolutions from '~components/PokemonEvolutions';
import PokemonHeader from '~components/PokemonHeader';

import styles from './SelectedPokemon.module.scss';
import PokemonStatsChart from '~components/PokemonStatsChart';

const SelectedPokemonDetails: React.FC<Partial<IPokemon>> = ({
  name,
  types,
  img,
  stats,
  height,
  weight,
  color,
  evolutions
}) => {
  return (
    <section className={styles['panel-selected-pokemon']}>
      <PokemonHeader
        height={height!}
        weight={weight!}
        name={name!}
        color={color!}
        types={types!}
        img={img!}
      />
      <PokemonStatsChart types={types!} stats={stats!} />
      {evolutions && <PokemonEvolutions evolutions={evolutions} />}
    </section>
  );
};

export default React.memo(SelectedPokemonDetails);
