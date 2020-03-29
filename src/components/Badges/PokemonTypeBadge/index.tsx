import React, { HTMLAttributes } from 'react';

import { IPokemonTypeTable } from './index.d';
import styles from './PokemonTypeBadge.module.scss';

const [
  bugClass,
  darkClass,
  dragonClass,
  electricClass,
  fairyClass,
  fightingClass,
  fireClass,
  flyingClass,
  ghostClass,
  grassClass,
  groundClass,
  iceClass,
  normalClass,
  poisonClass,
  psychicClass,
  rockClass,
  steelClass,
  waterClass
] = Object.values(styles).slice(1);

interface IPokemonTypeBadge extends HTMLAttributes<HTMLSpanElement> {}

const PokemonTypeBadge: React.FC<IPokemonTypeBadge> = props => {
  return <div {...props} />;
};

const BugTypeBadge: React.FC = () => {
  return (
    <PokemonTypeBadge className={bugClass}>
      {'BUG'.split('').map((letter, index) => (
        <span key={`bug-${index}`}>{letter}</span>
      ))}
    </PokemonTypeBadge>
  );
};

const DarkTypeBadge: React.FC = () => {
  return (
    <PokemonTypeBadge className={darkClass}>
      {'DARK'.split('').map((letter, index) => (
        <span key={`dark-${index}`}>{letter}</span>
      ))}
    </PokemonTypeBadge>
  );
};

const DragonTypeBadge: React.FC = () => {
  return (
    <PokemonTypeBadge className={dragonClass}>
      {'DRAGON'.split('').map((letter, index) => (
        <span key={`dragon-${index}`}>{letter}</span>
      ))}
    </PokemonTypeBadge>
  );
};
const ElectricTypeBadge: React.FC = () => {
  return (
    <PokemonTypeBadge className={electricClass}>
      {'ELECTRIC'.split('').map((letter, index) => (
        <span key={`electric-${index}`}>{letter}</span>
      ))}
    </PokemonTypeBadge>
  );
};

const FairyTypeBadge: React.FC = () => {
  return (
    <PokemonTypeBadge className={fairyClass}>
      {'FAIRY'.split('').map((letter, index) => (
        <span key={`fairy-${index}`}>{letter}</span>
      ))}
    </PokemonTypeBadge>
  );
};

const FightingTypeBadge: React.FC = () => {
  return (
    <PokemonTypeBadge className={fightingClass}>
      {'FIGHTING'.split('').map((letter, index) => (
        <span key={`fighting-${index}`}>{letter}</span>
      ))}
    </PokemonTypeBadge>
  );
};

const FireTypeBadge: React.FC = () => {
  return (
    <PokemonTypeBadge className={fireClass}>
      {'FIRE'.split('').map((letter, index) => (
        <span key={`fire-${index}`}>{letter}</span>
      ))}
    </PokemonTypeBadge>
  );
};

const FlyingTypeBadge: React.FC = () => {
  return (
    <PokemonTypeBadge className={flyingClass}>
      {'FLYING'.split('').map((letter, index) => (
        <span key={`flying-${index}`}>{letter}</span>
      ))}
    </PokemonTypeBadge>
  );
};

const GhostTypeBadge: React.FC = () => {
  return (
    <PokemonTypeBadge className={ghostClass}>
      {'GHOST'.split('').map((letter, index) => (
        <span key={`ghost-${index}`}>{letter}</span>
      ))}
    </PokemonTypeBadge>
  );
};

const GrassTypeBadge: React.FC = () => {
  return (
    <PokemonTypeBadge className={grassClass}>
      {'GRASS'.split('').map((letter, index) => (
        <span key={`grass-${index}`}>{letter}</span>
      ))}
    </PokemonTypeBadge>
  );
};

const GroundTypeBadge: React.FC = () => {
  return (
    <PokemonTypeBadge className={groundClass}>
      {'GROUND'.split('').map((letter, index) => (
        <span key={`ground-${index}`}>{letter}</span>
      ))}
    </PokemonTypeBadge>
  );
};

const IceTypeBadge: React.FC = () => {
  return (
    <PokemonTypeBadge className={iceClass}>
      {'ICE'.split('').map((letter, index) => (
        <span key={`ice-${index}`}>{letter}</span>
      ))}
    </PokemonTypeBadge>
  );
};

const NormalTypeBadge: React.FC = () => {
  return (
    <PokemonTypeBadge className={normalClass}>
      {'NORMAL'.split('').map((letter, index) => (
        <span key={`normal-${index}`}>{letter}</span>
      ))}
    </PokemonTypeBadge>
  );
};

const PoisonTypeBadge: React.FC = () => {
  return (
    <PokemonTypeBadge className={poisonClass}>
      {'POISON'.split('').map((letter, index) => (
        <span key={`poison-${index}`}>{letter}</span>
      ))}
    </PokemonTypeBadge>
  );
};

const PsychicTypeBadge: React.FC = () => {
  return (
    <PokemonTypeBadge className={psychicClass}>
      {'PSYCHIC'.split('').map((letter, index) => (
        <span key={`psychic-${index}`}>{letter}</span>
      ))}
    </PokemonTypeBadge>
  );
};

const RockTypeBadge: React.FC = () => {
  return (
    <PokemonTypeBadge className={rockClass}>
      {'ELECTRIC'.split('').map((letter, index) => (
        <span key={`rock-${index}`}>{letter}</span>
      ))}
    </PokemonTypeBadge>
  );
};

const SteelTypeBadge: React.FC = () => {
  return (
    <PokemonTypeBadge className={steelClass}>
      {'STEEL'.split('').map((letter, index) => (
        <span key={`steel-${index}`}>{letter}</span>
      ))}
    </PokemonTypeBadge>
  );
};

const WaterTypeBadge: React.FC = () => {
  return (
    <PokemonTypeBadge className={waterClass}>
      {'WATER'.split('').map((letter, index) => (
        <span key={`water-${index}`}>{letter}</span>
      ))}
    </PokemonTypeBadge>
  );
};

const pokemonTypeTable: IPokemonTypeTable<React.FC> = {
  bug: BugTypeBadge,
  dark: DarkTypeBadge,
  dragon: DragonTypeBadge,
  electric: ElectricTypeBadge,
  fairy: FairyTypeBadge,
  fighting: FightingTypeBadge,
  fire: FireTypeBadge,
  flying: FlyingTypeBadge,
  ghost: GhostTypeBadge,
  grass: GrassTypeBadge,
  ground: GroundTypeBadge,
  ice: IceTypeBadge,
  normal: NormalTypeBadge,
  poison: PoisonTypeBadge,
  psychic: PsychicTypeBadge,
  rock: RockTypeBadge,
  steel: SteelTypeBadge,
  water: WaterTypeBadge
};
export { pokemonTypeTable, PokemonTypeBadge as default };
