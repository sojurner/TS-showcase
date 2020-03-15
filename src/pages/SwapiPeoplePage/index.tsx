import React, { useContext } from 'react';

import Card from '~components/Cards';
import Pagination from '~components/Pagination';

import { usePeopleRequest } from '~utils/hooks/apiHooks';

const SwapiPeoplePage: React.FC = () => {
  const [people, paginationProps] = usePeopleRequest();

  if (!Boolean(people)) return null;

  return (
    <>
      {people.map(person => (
        <Card name={person.name} />
      ))}

      <Pagination {...paginationProps} />
    </>
  );
};

export default SwapiPeoplePage;
