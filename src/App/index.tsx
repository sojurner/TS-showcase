import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { CacheProvider } from '~utils/hooks/cacheHooks';

import { RootRouter } from '~components/Router';

import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <CacheProvider>
        <div className="App">
          <RootRouter />
        </div>
      </CacheProvider>
    </BrowserRouter>
  );
}

export default App;
