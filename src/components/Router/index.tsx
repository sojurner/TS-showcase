import React, { lazy, Suspense } from 'react';
import { Route, RouteProps } from 'react-router-dom';

const rootRoutes = [
  {
    path: '/',
    exact: true,
    component: lazy(() => import('~pages/HomePage'))
  },
  {
    path: '/swapi',
    component: lazy(() => import('~pages/SwapiPage'))
  },
  {
    path: '/rickmorty',
    component: lazy(() => import('~pages/RickMortyPage'))
  },
  {
    path: '/pokemon',
    exact: true,
    component: lazy(() => import('~pages/PokemonPokePage'))
  }
];

const rickMortyRoutes = [
  {
    path: '/rickmorty/characters',
    exact: true,
    component: lazy(() => import('~pages/RickMortyCharacterPage'))
  },
  {
    path: '/rickmorty/locations',
    exact: true,
    component: lazy(() => import('~pages/RickMortyLocationsPage'))
  },
  {
    path: '/rickmorty/episodes',
    exact: true,
    component: lazy(() => import('~pages/RickMortyEpisodesPage'))
  }
];

const pokemonRoutes = [
  {
    path: '/pokemon',
    exact: true,
    component: lazy(() => import('~pages/PokemonPokePage'))
  }
];

const swapiRoutes = [
  {
    path: '/swapi/home',
    exact: true,
    component: lazy(() => import('~pages/SwapiHomePage'))
  },
  {
    path: '/swapi/people',
    exact: true,
    component: lazy(() => import('~pages/SwapiPeoplePage'))
  },
  {
    path: '/swapi/planets',
    exact: true,
    component: lazy(() => import('~pages/SwapiPlanetsPage'))
  },
  {
    path: '/swapi/films',
    exact: true,
    component: lazy(() => import('~pages/SwapiFilmsPage'))
  },
  {
    path: '/swapi/species',
    exact: true,
    component: lazy(() => import('~pages/SwapiSpeciesPage'))
  },
  {
    path: '/swapi/vehicles',
    exact: true,
    component: lazy(() => import('~pages/SwapiVehiclesPage'))
  },
  {
    path: '/swapi/starships',
    exact: true,
    component: lazy(() => import('~pages/SwapiStarshipsPage'))
  }
];

const swapiResourceRoutes = [
  {
    path: '/swapi/planets/:id/films',
    exact: true
  },
  {
    path: '/swapi/planets/:id/residents',
    exact: true
  },
  {
    path: '/swapi/people/:id/vehicles',
    exact: true
  },
  {
    path: '/swapi/people/:id/starships',
    exact: true
  },
  {
    path: '/swapi/people/:id/species',
    exact: true
  },
  {
    path: '/swapi/people/:id/films',
    exact: true
  },
  {
    path: '/swapi/species/:id/films',
    exact: true
  },
  {
    path: '/swapi/species/:id/people',
    exact: true
  },
  {
    path: '/swapi/films/:id/species',
    exact: true
  },
  {
    path: '/swapi/films/:id/planets',
    exact: true
  },
  {
    path: '/swapi/films/:id/vehicles',
    exact: true
  },
  {
    path: '/swapi/films/:id/starships',
    exact: true
  },
  {
    path: '/swapi/films/:id/characters',
    exact: true
  },
  {
    path: '/swapi/vehicles/:id/films',
    exact: true
  },
  {
    path: '/swapi/vehicles/:id/pilots',
    exact: true
  },
  {
    path: '/swapi/starships/:id/films',
    exact: true
  },
  {
    path: '/swapi/starships/:id/pilots',
    exact: true
  }
].map(props => ({
  ...props,
  component: lazy(() => import('~pages/SwapiSelectResourcePage'))
}));

const BaseRouter: React.FC<{ routes: RouteProps[] }> = ({ routes }) => {
  const renderRoute = (routeProps: RouteProps, index: number) => (
    <Route key={`routes-${index}`} {...routeProps} />
  );

  return <Suspense fallback={<div />}>{routes.map(renderRoute)}</Suspense>;
};

const RootRouter: React.FC = () => <BaseRouter routes={rootRoutes} />;

const SwapiRouter: React.FC = () => <BaseRouter routes={swapiRoutes} />;

const SwapiResourceRouter: React.FC = () => (
  <BaseRouter routes={swapiResourceRoutes} />
);

const RickMortyRouter: React.FC = () => <BaseRouter routes={rickMortyRoutes} />;

const PokemonRouter: React.FC = () => <BaseRouter routes={pokemonRoutes} />;

export {
  RootRouter,
  RickMortyRouter,
  PokemonRouter,
  SwapiRouter,
  SwapiResourceRouter,
  BaseRouter as default
};
