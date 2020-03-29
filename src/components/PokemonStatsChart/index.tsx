import React, { useState, useEffect } from 'react';

import styles from './PokemonStats.module.scss';
import { IPokemonStatChartProps, IPokemonTypeTable } from './index.d';

const typesTable: IPokemonTypeTable<string> = {
  bug: '#a1af22',
  dark: 'rgb(59, 47, 47)',
  dragon: 'rgb(91, 64, 153)',
  electric: 'rgb(255, 200, 49)',
  fairy: 'rgb(255, 153, 196)',
  fighting: 'rgb(90, 33, 36)',
  fire: 'rgb(201, 27, 5)',
  flying: 'rgb(59, 75, 150)',
  ghost: 'rgb(57, 40, 122)',
  grass: 'rgb(5, 180, 5)',
  ground: 'rgb(168, 150, 71)',
  ice: 'rgb(133, 217, 245)',
  normal: 'rgb(173, 173, 173)',
  poison: 'rgb(80, 3, 99)',
  psychic: 'rgb(167, 14, 103)',
  rock: 'rgb(128, 104, 41)',
  steel: 'rgb(175, 175, 175)',
  water: 'rgb(26, 105, 224)'
};

const PokemonStatChart: React.FC<IPokemonStatChartProps> = ({
  stats,
  types
}) => {
  const [transition, setTransition] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setTransition(state => !state);
    }, 200);
  }, []);

  return (
    <svg className={styles['pokemonstats-container']}>
      {stats.map((entry, index) => {
        return (
          <g key={`bar-${index}`} height={5}>
            <defs>
              <linearGradient id="lead-gradient" x1="0%" y1="0%">
                {types.map((entry, index) => {
                  return (
                    <stop
                      offset={`${50 * index + 20}%`}
                      stopOpacity={0.9}
                      stopColor={typesTable[entry.type.name]}
                    />
                  );
                })}
              </linearGradient>
            </defs>
            <rect
              width={255}
              height={4}
              rx="3"
              ry="1"
              x={110}
              y={31 + 28 * index}
            />
            <rect
              rx="5"
              ry="5"
              fill={'url(#lead-gradient)'}
              width={!transition ? 0 : entry.base_stat}
              height={7}
              x={107}
              y={30 + 28 * index}
            />
            <text x="0" y={39 + 28 * index}>
              {entry.stat.name
                .replace(/-/g, ' ')
                .replace(/special/g, 'sp.')
                .toUpperCase()}
            </text>
            <text
              opacity={transition ? 0.5 : 0}
              x={entry.base_stat + 110}
              y={29 + 28 * index}
            >
              {entry.base_stat}
            </text>
          </g>
        );
      })}{' '}
    </svg>
  );
};

export default PokemonStatChart;
