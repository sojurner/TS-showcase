import React from 'react';
import { Flex } from 'rebass';
import { PeopleCard } from '~components/Cards';
import { TypographySwapiPageTitle } from '~components/Typography';
import Loader from '~components/Loader';

import { SwapiPagination } from '~components/Pagination';

import { usePeopleRequest } from '~utils/hooks/swapiHooks';

const SwapiPeoplePage: React.FC = () => {
  const [people, paginationProps, loading] = usePeopleRequest();

  return (
    <>
      <TypographySwapiPageTitle>People</TypographySwapiPageTitle>
      <SwapiPagination {...paginationProps} />
      <Flex flexWrap="wrap" justifyContent="center" p="0 2em">
        {!Boolean(people) || loading ? (
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
          people.map((person, index) => (
            <Flex key={`person-${index}`} width="330px" m="1em">
              <PeopleCard {...person} />
            </Flex>
          ))
        )}
      </Flex>
    </>
  );
};

export default SwapiPeoplePage;
