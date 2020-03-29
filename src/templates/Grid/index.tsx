import React, { HTMLAttributes } from 'react';
import styles from './Grid.module.scss';

const [homeClass] = Object.values(styles).slice(1);

const Grid: React.FC<HTMLAttributes<HTMLDivElement>> = props => (
  <div {...props} />
);

const GridHome: React.FC = props => {
  return <Grid className={homeClass} {...props} />;
};

export { GridHome, Grid as default };
