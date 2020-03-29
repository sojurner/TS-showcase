import React from 'react';

import { Flex } from 'rebass';

import {
  PlanetResourceCard,
  PeopleResourceCard,
  SpeciesResourceCard,
  FilmResourceCard,
  StarshipResourceCard,
  VehicleResourceCard
} from '~components/Cards';

import { useResourceGroupRequest } from '~utils/hooks/swapiHooks';
import { TResource } from '~typings/swapi';
import ResourceInfo from '~components/ResourceInfo';
import Loader from '~components/Loader';

const SwapiSelectResourcePage = () => {
  const [resources, resourceInfo, loading, error] = useResourceGroupRequest();
  let Card: React.FC;

  const renderResourceCard = (resource: TResource, index: number) => {
    switch (true) {
      case 'orbital_period' in resource:
        Card = () => <PlanetResourceCard {...resource} />;
        break;
      case 'gender' in resource:
        Card = () => <PeopleResourceCard {...resource} />;
        break;
      case 'director' in resource:
        Card = () => <FilmResourceCard {...resource} />;
        break;
      case 'average_lifespan' in resource:
        Card = () => <SpeciesResourceCard {...resource} />;
        break;

      case 'vehicle_class' in resource:
        Card = () => <VehicleResourceCard {...resource} />;
        break;
      case 'starship_class' in resource:
        Card = () => <StarshipResourceCard {...resource} />;
        break;
      default:
        break;
    }
    return (
      <Flex height="max-content" m="2em 0">
        <Card />
      </Flex>
    );
  };

  if (error) return <div children={error} />;

  return (
    <Flex
      name="resource-page"
      flex="1 1 auto"
      padding="1em 0"
      overflow="hidden"
    >
      <Flex
        minWidth={280}
        maxWidth={280}
        p="0 1.5em"
        overflow="auto"
        flexDirection="column"
        style={{
          borderRight: '1px solid #ffffff12'
        }}
      >
        <ResourceInfo info={resourceInfo} />
      </Flex>
      <Flex
        flex="1 1 auto"
        flexWrap="wrap"
        justifyContent="space-around"
        height="100%"
        overflow="auto"
      >
        {loading ? (
          <Loader />
        ) : !Boolean(resources.length) ? (
          `No Items`
        ) : (
          resources.map(renderResourceCard)
        )}
      </Flex>
    </Flex>
  );
};

export default SwapiSelectResourcePage;
