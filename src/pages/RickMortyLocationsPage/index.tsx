import React from 'react';

import { useLocationsPageRequest } from '~utils/hooks/rickMortyHooks';
import Flex from '~templates/Flex';
import { RickMortyPagination } from '~components/Pagination';

import { TypographyRickMortyPageTitle } from '~components/Typography';
import { LocationCard } from '~components/Cards';
import { RickMortyLoader } from '~components/Loader';
import { LocationSearch } from '~components/Search';

const RickMortyLocationsPage: React.FC = () => {
  const [
    locations,
    paginationProps,
    loading,
    error
  ] = useLocationsPageRequest();
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
        <TypographyRickMortyPageTitle>Locations</TypographyRickMortyPageTitle>
      </Flex>
      <LocationSearch />
      <RickMortyPagination {...paginationProps} />
      {loading || !locations ? (
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
          {locations.map((location, index) => (
            <LocationCard key={`locationcard-${index}`} {...location} />
          ))}
        </Flex>
      )}
    </Flex>
  );
};

export default RickMortyLocationsPage;
