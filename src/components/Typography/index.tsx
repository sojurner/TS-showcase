import React from 'react';

import { ITypographyProps } from './index.d';
import styles from './Typography.module.scss';

const Typography: React.FC<ITypographyProps> = ({
  variant = 'p',
  children,
  ...props
}) => React.createElement(variant, { ...props }, children);

const TypographyAppHeader: React.FC<ITypographyProps> = props => (
  <Typography
    variant="h1"
    className={styles['typograghy-app-header']}
    {...props}
  />
);

const TypographySwapiPageTitle: React.FC<ITypographyProps> = props => (
  <Typography
    variant="h1"
    className={styles['typography-swapi-page-title']}
    {...props}
  />
);

const TypographySwapiCardProperty: React.FC<ITypographyProps> = props => (
  <Typography
    variant="h5"
    className={styles['typography-swapi-card-property']}
    {...props}
  />
);

const TypographySwapiCardValue: React.FC<ITypographyProps> = props => (
  <Typography
    variant="p"
    className={styles['typography-swapi-card-value']}
    {...props}
  />
);

const TypographySwapiCardTitle: React.FC<ITypographyProps> = props => (
  <Typography
    variant="h2"
    className={styles['typography-swapi-card-title']}
    {...props}
  />
);

const TypographySwapiResourceTitle: React.FC<ITypographyProps> = props => (
  <Typography
    variant="h1"
    className={styles['typography-swapi-resource-title']}
    {...props}
  />
);

const TypographySwapiResourceProperty: React.FC<ITypographyProps> = props => (
  <Typography
    variant="h4"
    className={styles['typography-swapi-resource-property']}
    {...props}
  />
);

const TypographySwapiResourceValue: React.FC<ITypographyProps> = props => (
  <Typography
    variant="p"
    className={styles['typography-swapi-resource-value']}
    {...props}
  />
);

const TypographySwapiQuoteContent: React.FC<ITypographyProps> = props => (
  <Typography
    variant="p"
    className={styles['typography-swapi-quote']}
    {...props}
  />
);

const TypographyRickMortyPageTitle: React.FC<ITypographyProps> = props => (
  <Typography
    variant="h1"
    className={styles['typography-rickmorty-page-title']}
    {...props}
  />
);

const TypographyRickMortyCardTitle: React.FC<ITypographyProps> = props => (
  <Typography
    variant="h1"
    className={styles['typography-rickmorty-card-title']}
    {...props}
  />
);

const TypographyRickMortyCardSubtitle: React.FC<ITypographyProps> = props => (
  <Typography
    variant="p"
    className={styles['typography-rickmorty-card-subtitle']}
    {...props}
  />
);

const TypographyRickMortyCardProperty: React.FC<ITypographyProps> = props => (
  <Typography
    variant="h3"
    className={styles['typography-rickmorty-card-property']}
    {...props}
  />
);

const TypographyRickMortyCardValue: React.FC<ITypographyProps> = props => (
  <Typography
    variant="p"
    className={styles['typography-rickmorty-card-value']}
    {...props}
  />
);

const TypographyPokemonTitle: React.FC<ITypographyProps> = props => (
  <Typography
    variant="h1"
    className={styles['typography-pokemon-title']}
    {...props}
  />
);

const TypographyPokemonCardTitle: React.FC<ITypographyProps> = props => (
  <Typography
    variant="h3"
    className={styles['typography-pokemon-card-title']}
    {...props}
  />
);

const TypographyPokemonSelectedHeader: React.FC<ITypographyProps> = props => (
  <Typography
    variant="h4"
    className={styles['typography-pokemon-selected-header']}
    {...props}
  />
);

const TypographyPokemonSelectedDetails: React.FC<ITypographyProps> = props => (
  <Typography
    variant="p"
    className={styles['typography-pokemon-selected-details']}
    {...props}
  />
);

// const TypographySwapiError: React.FC<ITypographyProps> = props => (
//   <Typography variant="p" className={swapiResourceValClass} {...props} />
// );

// const TypographySwapiNoContent: React.FC<ITypographyProps> = props => (
//   <Typography variant="p" className={swapiResourceValClass} {...props} />
// );

export {
  TypographySwapiCardProperty,
  TypographySwapiResourceTitle,
  TypographySwapiCardValue,
  TypographySwapiPageTitle,
  TypographySwapiResourceProperty,
  TypographySwapiResourceValue,
  TypographySwapiCardTitle,
  TypographySwapiQuoteContent,
  TypographyAppHeader,
  TypographyRickMortyCardTitle,
  TypographyRickMortyCardSubtitle,
  TypographyRickMortyCardProperty,
  TypographyRickMortyCardValue,
  TypographyRickMortyPageTitle,
  TypographyPokemonTitle,
  TypographyPokemonCardTitle,
  TypographyPokemonSelectedDetails,
  TypographyPokemonSelectedHeader,
  Typography as default
};
