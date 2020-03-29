import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { CacheProvider } from '~utils/hooks/cacheHooks';

import { RootRouter } from '~components/Router';
import { GridHome } from '~templates/Grid';
import { TypographyAppHeader } from '~components/Typography';
import { HomeSideNavigation } from '~components/Navigation';
import Box from '~templates/Box';

import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <CacheProvider>
        <GridHome>
          <Box gridArea="header">
            <TypographyAppHeader children={'Free API'} />
          </Box>
          <Box gridArea="aside">
            <HomeSideNavigation />
          </Box>
          <RootRouter />
        </GridHome>
      </CacheProvider>
    </BrowserRouter>
  );
}

export default App;
