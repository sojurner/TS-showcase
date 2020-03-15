import React from 'react';
import { SwapiNavigation } from '~components/Navigation';
import { SwapiRouter } from '~components/Router';

const SwapiHomePage = () => {
  return (
    <>
      <SwapiRouter />
      <SwapiNavigation />;
    </>
  );
};

export default SwapiHomePage;
