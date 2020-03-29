import { IPokemon } from '../../typings/pokemon/index.d';
import { IPokemonTypeTable } from '../Badges/PokemonTypeBadge';
export interface IPokemonStatChartProps
  extends Pick<IPokemon, 'stats' | 'types'> {}

export { IPokemonTypeTable };
