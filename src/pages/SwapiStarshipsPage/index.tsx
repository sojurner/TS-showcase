import React from 'react';
import { Flex } from 'rebass';

import { StarshipCard } from '~components/Cards';
import { SwapiPagination } from '~components/Pagination';
import { TypographySwapiPageTitle } from '~components/Typography';
import Loader from '~components/Loader';

import { useStarshipsRequest } from '~utils/hooks/swapiHooks';

const SwapiStarshipsPage = () => {
  const [starships, paginationProps, loading] = useStarshipsRequest();

  if (!Boolean(starships) || loading) {
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
      <TypographySwapiPageTitle>Starships</TypographySwapiPageTitle>
      <SwapiPagination {...paginationProps} />
      <Flex flexWrap="wrap" justifyContent="center" p="0 2em">
        {starships.map((race, index) => (
          <Flex key={`starships-${index}`} width="330px" m="1em">
            <StarshipCard {...race} />
          </Flex>
        ))}
      </Flex>
    </>
  );
};

export default SwapiStarshipsPage;
