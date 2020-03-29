import React from 'react';

import { SwapiHomeNavigation } from '~components/Navigation';
import { useQuoteRequest } from '~utils/hooks/swapiHooks';
import { TypographySwapiQuoteContent } from '~components/Typography';
import Flex from '~templates/Flex';

const SwapiHomePage: React.FC = () => {
  const [quote, loading, error] = useQuoteRequest();
  return (
    <>
      <Flex
        margin="auto"
        justifyContent="center"
        flex="0 1 400px"
        width="86%"
        padding="2em"
        flexDirection="column"
        position="relative"
      >
        <SwapiHomeNavigation />
        {quote && (
          <TypographySwapiQuoteContent>{quote}</TypographySwapiQuoteContent>
        )}
      </Flex>
    </>
  );
};

export default SwapiHomePage;
