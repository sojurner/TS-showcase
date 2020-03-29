import React from 'react';
import { Flex } from 'rebass';

import { SpeciesCard } from '~components/Cards';
import { SwapiPagination } from '~components/Pagination';
import { TypographySwapiPageTitle } from '~components/Typography';
import Loader from '~components/Loader';

import { useSpeciesRequest } from '~utils/hooks/swapiHooks';

const SwapiSpeciesPage = () => {
  const [species, paginationProps, loading] = useSpeciesRequest();

  if (!Boolean(species) || loading) {
    return (
      <Flex
        height="100%"
        width="100%"
        justifyContent="center"
        alignItems="center"
        overflow="hidden"
        style={{
          position: 'absolute',
          top: 0
        }}
      >
        <Loader />
      </Flex>
    );
  }

  return (
    <>
      <TypographySwapiPageTitle>Species</TypographySwapiPageTitle>
      <SwapiPagination {...paginationProps} />

      <Flex flexWrap="wrap" justifyContent="center" p="0 2em">
        {species.map((race, index) => (
          <Flex key={`species-${index}`} width="330px" m="1em">
            <SpeciesCard {...race} />
          </Flex>
        ))}
      </Flex>
    </>
  );
};

export default SwapiSpeciesPage;
