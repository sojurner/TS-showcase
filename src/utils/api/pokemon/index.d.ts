import { IBasePokemonInfo, IPokemon, IPokemonStat } from '~typings/pokemon';

export interface IRawPokemon {
  abilities: IPokemonAbility[];
  base_experience: number;
  forms: IBasePokemonInfo[];
  game_indices: any[];
  height: number;
  held_items: any[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: any[];
  name: string;
  order: number;
  species: IBasePokemonInfo;
  sprites: {
    back_default: string | null;
    back_female: string | null;
    back_shiny: string | null;
    back_shiny_female: string | null;
    front_default: string | null;
    front_female: string | null;
    front_shiny: string | null;
    front_shiny_female: string | null;
  };
  stats: IPokemonStat[];
  types: { slot: number; type: IBasePokemonInfo }[];
  weight: number;
}

export type TGetPokemon = (pageIndex: number) => Promise<IPokemon[] | Error[]>;
