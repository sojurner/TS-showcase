import styles from './Navigation.module.scss';
import { NavLinkProps } from 'react-router-dom';

import { SwapiResourceNavLink, INavDropDown, IIconMappings } from './index.d';

import * as _icon from '~components/Icon';

const [inactiveClass, activeClass] = Object.values(styles).slice(7);

const rootAssets = ['swapi', 'rickmorty', 'pokemon'];
const swapiAssets = [
  'people',
  'planets',
  'films',
  'species',
  'vehicles',
  'starships'
];
const rickMortyAssets = ['characters', 'locations', 'episodes'];

const [swapi, rickmorty, pokemon] = rootAssets;
const [people, planets, films, species, vehicles, starships] = swapiAssets;
const [characters, locations, episodes] = rickMortyAssets;

const rootNavLinks = [
  {
    to: `/${swapi}/home`,
    children: swapi
  },
  {
    to: `/${rickmorty}`,
    children: rickmorty
  },
  {
    to: `/${pokemon}`,
    children: pokemon
  }
];

const rickMortyNavLinks = [
  {
    to: `/${rickmorty}/${characters}`,
    children: people,
    activeClassName: activeClass,
    className: inactiveClass
  },
  {
    to: `/${rickmorty}/${locations}`,
    children: locations,
    activeClassName: activeClass,
    className: inactiveClass
  },
  {
    to: `/${rickmorty}/${episodes}`,
    children: episodes,
    activeClassName: activeClass,
    className: inactiveClass
  }
];

const swapiNavLinks = [
  {
    to: `/${swapi}/${people}`,
    children: people,
    activeClassName: activeClass,
    className: inactiveClass
  },
  {
    to: `/${swapi}/${planets}`,
    children: planets,
    activeClassName: activeClass,
    className: inactiveClass
  },
  {
    to: `/${swapi}/${films}`,
    children: films,
    activeClassName: activeClass,
    className: inactiveClass
  },
  {
    to: `/${swapi}/${species}`,
    children: species,
    activeClassName: activeClass,
    className: inactiveClass
  },
  {
    to: `/${swapi}/${vehicles}`,
    children: vehicles,
    activeClassName: activeClass,
    className: inactiveClass
  },
  {
    to: `/${swapi}/${starships}`,
    children: starships,
    activeClassName: activeClass,
    className: inactiveClass
  }
];

const swapiResourceNavLinks: SwapiResourceNavLink = {
  planets: [
    {
      to: `/${swapi}/${planets}/:id/${films}`,
      children: films,
      className: inactiveClass
    },
    {
      to: `/${swapi}/${planets}/:id/residents`,
      children: people,
      className: inactiveClass
    }
  ],
  species: [
    {
      to: `/${swapi}/${species}/:id/${people}`,
      children: people,
      className: inactiveClass
    },
    {
      to: `/${swapi}/${species}/:id/${films}`,
      children: films,
      className: inactiveClass
    }
  ],
  people: [
    {
      to: `/${swapi}/${people}/:id/${species}`,
      children: species,
      className: inactiveClass
    },
    {
      to: `/${swapi}/${people}/:id/${films}`,
      children: films,
      className: inactiveClass
    },
    {
      to: `/${swapi}/${people}/:id/${vehicles}`,
      children: vehicles,
      className: inactiveClass
    },
    {
      to: `/${swapi}/${people}/:id/${starships}`,
      children: starships,
      className: inactiveClass
    }
  ],
  films: [
    {
      to: `/${swapi}/${films}/:id/${species}`,
      children: species,
      className: inactiveClass
    },
    {
      to: `/${swapi}/${films}/:id/${planets}`,
      children: planets,
      className: inactiveClass
    },
    {
      to: `/${swapi}/${films}/:id/${vehicles}`,
      children: vehicles,
      className: inactiveClass
    },
    {
      to: `/${swapi}/${films}/:id/${starships}`,
      children: starships,
      className: inactiveClass
    },
    {
      to: `/${swapi}/${films}/:id/characters`,
      children: people,
      className: inactiveClass
    }
  ],
  vehicles: [
    {
      to: `/${swapi}/${vehicles}/:id/pilots`,
      children: people,
      className: inactiveClass
    },
    {
      to: `/${swapi}/${vehicles}/:id/${films}`,
      children: films,
      className: inactiveClass
    }
  ],
  starships: [
    {
      to: `/${swapi}/${starships}/:id/pilots`,
      children: people,
      className: inactiveClass
    },
    {
      to: `/${swapi}/${starships}/:id/${films}`,
      children: films,
      className: inactiveClass
    }
  ]
};

const dropDownNavMapping: INavDropDown<NavLinkProps> = {
  swapi: swapiNavLinks,
  rickmorty: rickMortyNavLinks,
  pokemon: []
};

const IconsMapping: IIconMappings<React.FC> = {
  people: _icon.PersonIcon,
  planets: _icon.PlanetIcon,
  films: _icon.MovieIcon,
  species: _icon.AlienIcon,
  vehicles: _icon.VehicleIcon,
  starships: _icon.StarshipIcon,
  swapi: _icon.VaderIcon,
  rickmorty: _icon.RickIcon,
  pokemon: _icon.PikachuIcon,
  locations: _icon.EarthIcon,
  episodes: _icon.TVIcon
};

export {
  swapiResourceNavLinks,
  rootNavLinks,
  rickMortyNavLinks,
  swapiNavLinks,
  dropDownNavMapping,
  IconsMapping
};
