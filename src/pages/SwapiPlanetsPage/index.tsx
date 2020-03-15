import React from 'react';

import Card from '~components/Cards';
import Pagination from '~components/Pagination';
import { usePlanetsRequest } from '~utils/hooks/apiHooks';

const SwapiPlanetsPage = () => {
  const [planets, paginationProps] = usePlanetsRequest();

  if (!Boolean(planets)) return null;

  return (
    <>
      {planets.map(planet => (
        <Card name={planet.name} />
      ))}

      <Pagination {...paginationProps} />
    </>
  );
};

export default SwapiPlanetsPage;
