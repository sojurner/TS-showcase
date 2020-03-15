import React from 'react';
import { NavLinkProps, NavLink } from 'react-router-dom';

const SWAPI: string = 'swapi';

const rootNavLinks = [
  {
    to: '/',
    children: 'Home'
  },
  {
    to: `/${SWAPI}`,
    children: 'Swapi'
  }
];

const swapiNavLinks = [
  {
    to: `/${SWAPI}/people`,
    children: 'people'
  },
  {
    to: `/${SWAPI}/planets`,
    children: 'planets'
  }
];

const Navigation: React.FC<{ navlinks: NavLinkProps[] }> = ({ navlinks }) => {
  const renderNavLinks = (props: NavLinkProps) => <NavLink {...props} />;

  return <>{navlinks.map(renderNavLinks)}</>;
};

const RootNavigation: React.FC = () => <Navigation navlinks={rootNavLinks} />;

const SwapiNavigation: React.FC = () => <Navigation navlinks={swapiNavLinks} />;

export { RootNavigation, SwapiNavigation, Navigation as default };
