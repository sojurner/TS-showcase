export interface IPokemonTypeTable<T> {
  bug: T;
  dark: T;
  dragon: T;
  electric: T;
  fairy: T;
  fighting: T;
  fire: T;
  flying: T;
  ghost: T;
  grass: T;
  ground: T;
  ice: T;
  normal: T;
  poison: T;
  psychic: T;
  rock: T;
  steel: T;
  water: T;
  [key: string]: IPokemonTypeTable[keyof IPokemonTypeTable];
}
