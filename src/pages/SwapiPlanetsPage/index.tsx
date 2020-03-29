import React from 'react';
import { Flex } from 'rebass';

import { PlanetCard } from '~components/Cards';
import { TypographySwapiPageTitle } from '~components/Typography';
import Loader from '~components/Loader';
import { FlexPageLoader, FlexCard, FlexCardList } from '~templates/Flex';
import { SwapiPagination } from '~components/Pagination';

import { usePlanetsRequest } from '~utils/hooks/swapiHooks';

const SwapiPlanetsPage = () => {
  const [planets, paginationProps, loading] = usePlanetsRequest();

  if (!Boolean(planets) || loading) {
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
      <TypographySwapiPageTitle>Planets</TypographySwapiPageTitle>
      <Flex flexWrap="wrap" justifyContent="center" p="0 2em">
        {planets.map((planet, index) => (
          <Flex key={`planetcard-${index}`} width="330px" m="1em">
            <PlanetCard {...planet} />
          </Flex>
        ))}
      </Flex>
      <SwapiPagination {...paginationProps} />
    </>
  );
};

export default SwapiPlanetsPage;
