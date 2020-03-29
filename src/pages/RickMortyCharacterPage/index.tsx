import React from 'react';
import { useCharactersPageRequest } from '~utils/hooks/rickMortyHooks';
import Flex from '~templates/Flex';
import { RickMortyPagination } from '~components/Pagination';
import { CharacterCard } from '~components/Cards';
import { TypographyRickMortyPageTitle } from '~components/Typography';
import { RickMortyLoader } from '~components/Loader';
import { CharacterSearch } from '~components/Search';

const RickMortyCharacterPage: React.FC = () => {
  const [
    characters,
    paginationProps,
    loading,
    error
  ] = useCharactersPageRequest();

  return (
    <Flex
      name="RickMorty-characterpage"
      flexDirection="column"
      overflowY="scroll"
      height="100%"
      position="relative"
    >
      <Flex
        padding="1em 0"
        justifyContent="center"
        position="sticky"
        top={0}
        zIndex={3}
        background="#DBF0EA"
      >
        <TypographyRickMortyPageTitle>Characters</TypographyRickMortyPageTitle>
      </Flex>
      <CharacterSearch />
      <RickMortyPagination {...paginationProps} />
      {loading || !characters ? (
        <Flex
          justifyContent="center"
          alignItems="center"
          fontSize="8em"
          flex="1 1 auto"
        >
          <RickMortyLoader />
        </Flex>
      ) : (
        <Flex flex="1 1 auto" flexWrap="wrap" justifyContent="center">
          {characters.map((character, index) => (
            <CharacterCard key={`charactercard-${index}`} {...character} />
          ))}
          <RickMortyPagination {...paginationProps} />
        </Flex>
      )}
    </Flex>
  );
};
export default RickMortyCharacterPage;
