import React, { HTMLAttributes } from 'react';
import { createPortal } from 'react-dom';
import styles from './Background.module.scss';

const [
  containerClass,
  backdropClass,
  starsClass,
  twinklingClass,
  contentClass
] = Object.values(styles);

const Background: React.FC<HTMLAttributes<HTMLDivElement>> = props => {
  return <div {...props} />;
};

const SwapiBackground: React.FC<HTMLAttributes<HTMLDivElement>> = ({
  children
}) => (
  <Background className={containerClass}>
    <div className={starsClass}></div>
    <div className={twinklingClass}></div>
    <main className={contentClass}>{children}</main>
  </Background>
);
const BackdropBackground: React.FC<HTMLAttributes<HTMLDivElement>> = props => {
  return createPortal(
    <Background {...props} className={backdropClass} />,
    document.querySelector('body') as Element
  );
};
export { SwapiBackground, BackdropBackground, Background as default };
