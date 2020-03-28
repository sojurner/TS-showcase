import { IPokemon } from '~typings/pokemon/index.d';
type TScrollEvent = (event: React.UIEvent<HTMLElement>) => void;
type TSelectPokemon = (id: number) => void;
export type TUsePokemonPageRequest = () => [
  IPokemon[],
  TScrollEvent,
  boolean,
  string?
];

export type TUsePokemonEvolutionRequest = () => [
  IPokemon,
  TSelectPokemon,
  boolean,
  string
];
