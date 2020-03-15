import React, { lazy, Suspense } from 'react';
import { Route, RouteProps } from 'react-router-dom';

const rootRoutes = [
  {
    path: '/',
    component: lazy(() => import('../../pages/HomePage'))
  },
  {
    path: '/swapi',
    component: lazy(() => import('../../pages/SwapiHomePage'))
  }
];

const swapiRoutes = [
  {
    path: '/swapi/people',
    exact: true,
    component: lazy(() => import('../../pages/SwapiPeoplePage'))
  },
  {
    path: '/swapi/planets',
    exact: true,
    component: lazy(() => import('../../pages/SwapiPlanetsPage'))
  }
];

const BaseRouter: React.FC<{ routes: RouteProps[] }> = ({ routes }) => {
  const renderRoute = (routeProps: RouteProps) => <Route {...routeProps} />;

  return <Suspense fallback={<div />}>{routes.map(renderRoute)}</Suspense>;
};

const RootRouter: React.FC = () => <BaseRouter routes={rootRoutes} />;

const SwapiRouter: React.FC = () => <BaseRouter routes={swapiRoutes} />;

export { RootRouter, SwapiRouter, BaseRouter as default };
