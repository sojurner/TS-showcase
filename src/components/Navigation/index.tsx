import React, { ReactElement } from 'react';
import { NavLinkProps, NavLink } from 'react-router-dom';

import { FlexRelative } from '~templates/Flex';
import { BackdropBackground } from '~components/Background';
import Box from '~templates/Box';
import { TypographySwapiPageTitle } from '~components/Typography';
import * as _navlinks from './assets';
import { useSideDropdown } from '~utils/hooks/navHooks';

import {
  ISwapiResourceNavigationProps,
  ISwapiResourceURLs,
  INavDropDown,
  IIconMappings
} from './index.d';
import styles from './Navigation.module.scss';

const [
  swapiClass,
  swapiResourceClass,
  swapiHomeContentClass,
  homeSideClass,
  homeSideDropDownClass,
  homeContentClass
] = Object.values(styles).slice(1);

const NavLinkContainer: React.FC<{
  navLinks: any[];
  navLinkContainers: any[];
}> = ({ navLinkContainers, navLinks }) => (
  <Box
    display="flex"
    flexDirection="column"
    position="relative"
    name="navlink-container"
  >
    {navLinks}
    {navLinkContainers}
  </Box>
);
const renderNavLinks: React.FC<NavLinkProps> = (props, index: number) => (
  <NavLink key={`${props.to}-${index}`} {...props} />
);

const Navigation: React.FC<{ className: string }> = props => <nav {...props} />;

const HomeContentNavigation: React.FC = () => (
  <Navigation className={homeContentClass}>
    {_navlinks.rootNavLinks
      .map(link => {
        const iconKey = link.children as keyof IIconMappings<React.FC>;
        const Icon = _navlinks.IconsMapping[iconKey];
        return { ...link, children: <Icon /> };
      })
      .map(renderNavLinks)}
  </Navigation>
);

const HomeSideNavigation: React.FC = props => {
  const [menuState, handleMenuOpen, handleMenuClose] = useSideDropdown(
    _navlinks.rootNavLinks.map(link => link.children)
  );

  const navSideLinks = _navlinks.rootNavLinks
    .map(link => ({
      ...link,
      onMouseEnter: handleMenuOpen.bind(null, link.children),
      onClick: handleMenuClose.bind(null, link.children)
    }))
    .map((link, index) => {
      const iconKey = link.children as keyof IIconMappings<React.FC>;
      const Icon = _navlinks.IconsMapping[iconKey];

      const key = link.children as keyof INavDropDown<NavLinkProps>;
      const dropDownNavlinks = _navlinks.dropDownNavMapping[key].map(link => ({
        ...link,
        onClick: handleMenuClose.bind(null, key)
      }));
      return (
        <Box position="relative" key={`side-navlink-${index}`}>
          <NavLink {...link} children={<Icon />} />
          {menuState[key] && (
            <>
              <Box name="nav-dropdown" key={`dropdown-${key}`}>
                <HomeSideDropDownNavigation navlinks={dropDownNavlinks} />
                <BackdropBackground
                  onMouseEnter={handleMenuClose.bind(null, key)}
                />
              </Box>
            </>
          )}
        </Box>
      );
    });

  return (
    <>
      <Navigation className={homeSideClass}>{navSideLinks}</Navigation>
    </>
  );
};

const HomeSideDropDownNavigation: React.FC<{
  navlinks: NavLinkProps[];
}> = ({ navlinks }) => {
  const dropDownNavlinks = navlinks.map(link => {
    const iconKey = link.children as keyof IIconMappings<React.FC>;
    const Icon = _navlinks.IconsMapping[iconKey];
    return {
      ...link,
      children: (
        <FlexRelative>
          <Icon />
          <TypographySwapiPageTitle>{link.children}</TypographySwapiPageTitle>
        </FlexRelative>
      )
    };
  });
  return (
    <Navigation className={homeSideDropDownClass}>
      {dropDownNavlinks.map(renderNavLinks)}
    </Navigation>
  );
};

const SwapiNavigation: React.FC = () => {
  const navLinks = _navlinks.swapiNavLinks.map((link, index) => {
    const iconKey = link.children as keyof IIconMappings<React.FC>;
    const Icon = _navlinks.IconsMapping[iconKey];
    return { ...link, children: <Icon /> };
  });
  return (
    <Navigation className={swapiClass}>
      {navLinks.map(renderNavLinks)}
    </Navigation>
  );
};

const SwapiHomeNavigation: React.FC = () => {
  const navLinks = _navlinks.swapiNavLinks.map((link, index) => {
    const iconKey = link.children as keyof IIconMappings<React.FC>;
    const Icon = _navlinks.IconsMapping[iconKey];
    return {
      ...link,
      children: (
        <FlexRelative
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          width="6em"
          key={`swapihome-navlink-${index}`}
        >
          <Icon />
          {link.children}
        </FlexRelative>
      )
    };
  });
  return (
    <Navigation className={swapiHomeContentClass}>
      {navLinks.map(renderNavLinks)}
    </Navigation>
  );
};

const SwapiResourceNavigation: React.FC<ISwapiResourceNavigationProps> = ({
  id = 0,
  type,
  resourceURLs,
  resourceInfo
}) => {
  const navLinks = _navlinks.swapiResourceNavLinks[type].map(link => {
    const pathname = (link.to as string).replace(/:id/g, `${id}`);
    const [type] = pathname.split('/').slice(4) as [keyof ISwapiResourceURLs];
    const iconKey = link.children as keyof IIconMappings<React.FC>;
    const Icon = _navlinks.IconsMapping[iconKey];
    return {
      ...link,
      children: <Icon />,
      to: {
        pathname,
        state: { resourceURLs: resourceURLs[type], resourceInfo }
      }
    };
  });
  return (
    <Navigation className={swapiResourceClass}>
      {navLinks.map(renderNavLinks)}
    </Navigation>
  );
};

export {
  HomeContentNavigation,
  HomeSideNavigation,
  SwapiNavigation,
  SwapiHomeNavigation,
  SwapiResourceNavigation,
  Navigation as default
};
