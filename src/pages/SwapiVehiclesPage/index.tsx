import React from 'react';
import { Flex } from 'rebass';

import { VehicleCard } from '~components/Cards';
import { SwapiPagination } from '~components/Pagination';
import { TypographySwapiPageTitle } from '~components/Typography';
import Loader from '~components/Loader';
import { FlexPageLoader, FlexCard, FlexCardList } from '~templates/Flex';

import { useVehiclesRequest } from '~utils/hooks/swapiHooks';

const SwapiVehiclesPage = () => {
  const [vehicles, paginationProps, loading] = useVehiclesRequest();

  return (
    <>
      <TypographySwapiPageTitle>Vehicles</TypographySwapiPageTitle>
      <SwapiPagination {...paginationProps} />

      <Flex flexWrap="wrap" justifyContent="center" p="0 2em">
        {!Boolean(vehicles) || loading ? (
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
        ) : (
          vehicles.map((vehicle, index) => (
            <Flex key={`vehicle-${index}`} width="330px" m="1em">
              <VehicleCard {...vehicle} />
            </Flex>
          ))
        )}
      </Flex>
    </>
  );
};

export default SwapiVehiclesPage;
