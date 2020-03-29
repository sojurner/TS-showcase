import React from 'react';
import Flex from '~templates/Flex';
import { RickMortyRouter } from '~components/Router';

const RickMortyPage: React.FC = () => {
  return (
    <Flex
      flexWrap="wrap"
      justifyContent="center"
      background="#dbf0ea"
      overflow="hidden"
    >
      <RickMortyRouter />
    </Flex>
  );
};
export default RickMortyPage;
