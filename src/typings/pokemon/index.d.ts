import { IRawPokemon } from '~utils/api/pokemon/index.d';

export interface IBasePokemonInfo {
  name: string;
  url: string;
}

export interface IPokemonAbility {
  ability: IBasePokemonInfo;
  is_hidden: boolean;
  slot: number;
}

export interface IPokemonStat {
  base_stat: number;
  effort: number;
  stat: IBasePokemonInfo;
}

export interface IPokemon
  extends Omit<
    IRawPokemon,
    | 'base_experience'
    | 'game_indices'
    | 'held_items'
    | 'is_default'
    | 'moves'
    | 'location_area_encounters'
    | 'sprites'
    | 'order'
    | 'forms'
  > {
  img: string;
  evolutions?: IBasePokemonInfo[] | null;
  color?: IBasePokemonInfo;
}

export interface IPokemonSpecies {
  base_happiness: number;
  capture_rate: number;
  color: IBasePokemonInfo;
  egg_groupes: IBasePokemonInfo[];
  evolution_chain: Omit<IBasePokemonInfo, 'name'>;
  id: number;
}

export interface IPokemonEvolution {
  chain: IPokemonEvolutionDetails;
  id: number;
  baby_trigger_item: any;
}

export interface IPokemonEvolutionDetails {
  evolution_details: IPokemonEvolutionDetails;
  evolves_to: IPokemonEvolutionDetails[];
  species: IBasePokemonInfo;
  is_baby: boolean;
}

export interface IPokemonTreeDetails {
  evolutions: IBasePokemonInfo[];
  color: IBasePokemonInfo;
}

export type TGetPokemonEvo = (
  id: number
) => Promise<IPokemonTreeDetails | Error>;

export interface IPokemonResource<T> {
  pokemon: T;
  pokemonSpecies: T;
}
