import React from 'react';
import { Flex } from 'rebass';
import { SwapiNavigation } from '~components/Navigation';
import { SwapiRouter, SwapiResourceRouter } from '~components/Router';
import { SwapiBackground } from '~components/Background';
import Box from '~templates/Box';

const SwapiPage: React.FC = () => {
  return (
    <Box gridArea="content" position="relative">
      <SwapiBackground>
        <Flex>
          <SwapiNavigation />
        </Flex>
        <SwapiRouter />
        <SwapiResourceRouter />
      </SwapiBackground>
    </Box>
  );
};

export default SwapiPage;
