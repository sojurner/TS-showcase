export interface IPokemonTypeTable {
  bug: React.FC;
  dark: React.FC;
  dragon: React.FC;
  electric: React.FC;
  fairy: React.FC;
  fighting: React.FC;
  fire: React.FC;
  flying: React.FC;
  ghost: React.FC;
  grass: React.FC;
  ground: React.FC;
  ice: React.FC;
  normal: React.FC;
  poison: React.FC;
  psychic: React.FC;
  rock: React.FC;
  steel: React.FC;
  water: React.FC;
  [key: string]: IPokemonTypeTable[keyof IPokemonTypeTable];
}
