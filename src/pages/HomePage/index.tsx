import React from 'react';
import { HomeContentNavigation } from '~components/Navigation';
import Box from '~templates/Box';

const HomePage: React.FC = () => {
  return (
    <Box gridArea="content">
      <HomeContentNavigation />
    </Box>
  );
};

export default HomePage;
