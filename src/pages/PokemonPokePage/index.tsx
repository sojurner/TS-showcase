import React from 'react';
import {
  usePokemonPageRequest,
  usePokemonEvolutionRequest
} from '~utils/hooks/pokemonHooks';
import { RickMortyPagination } from '~components/Pagination';
import Flex, { FlexRelative } from '~templates/Flex';
import { PokemonCard } from '~components/Cards';
import {
  TypographyPokemonTitle,
  TypographyPokemonCardTitle
} from '~components/Typography';
import OnClickWrapper from '~components/OnClickWrapper';
import SelectedPokemonDetails from '~components/SelectedPokemonDetails';

const PokemonPokePage: React.FC = () => {
  const [
    pokemon,
    handleScroll,
    pageloading,
    pageError
  ] = usePokemonPageRequest();
  const [
    selectedPokemon,
    handleSelect,
    evoloading,
    evoError
  ] = usePokemonEvolutionRequest();
  if (!pokemon) return null;
  return (
    <Flex
      width="100%"
      position="relative"
      height="100%"
      overflow="hidden"
      background="linear-gradient(to right, #D4D3DD, #EFEFBB)"
      flexDirection="column"
    >
      <TypographyPokemonTitle>POKEMON</TypographyPokemonTitle>
      <section
        onScroll={handleScroll}
        style={{
          height: '100%',
          position: 'relative',
          display: 'flex'
        }}
      >
        <Flex position="sticky" top="0" flex="1 0 30%">
          {evoloading || !selectedPokemon ? (
            <div>...Loading</div>
          ) : (
            <SelectedPokemonDetails {...selectedPokemon} />
          )}
        </Flex>

        <FlexRelative
          flex="1 1 auto"
          overflow="scroll"
          flexWrap="wrap"
          padding="1em 2em"
          justifyContent="center"
          height="90%"
        >
          {pokemon.map(poke => {
            return (
              <OnClickWrapper
                key={`pokemoncard-${poke.id}`}
                style={{
                  border: '1px solid',
                  borderColor:
                    selectedPokemon.id === poke.id ? 'black' : 'lightgray'
                }}
                onClick={handleSelect.bind(null, poke.id)}
              >
                <PokemonCard {...poke} />
              </OnClickWrapper>
            );
          })}
        </FlexRelative>
      </section>
    </Flex>
  );
};

export default React.memo(PokemonPokePage);
