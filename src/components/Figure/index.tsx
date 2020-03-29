import React, { HTMLAttributes } from 'react';
import styles from './Figure.module.scss';

const [
  characterfFigureClass,
  characterFigCaptionBaseClass,
  characterFigCaptionClass,
  characterFigCaptionActiveClass
] = Object.values(styles).slice(1);

const Figure: React.FC<HTMLAttributes<HTMLDivElement>> = props => {
  return <figure {...props} />;
};

const CharacterCardFigure: React.FC<HTMLAttributes<HTMLDivElement>> = props => {
  return <Figure className={characterfFigureClass} {...props} />;
};

const CharacterCardFigCaption: React.FC<{ active: boolean }> = ({
  active,
  ...props
}) => {
  return (
    <figcaption
      className={
        active
          ? `${characterFigCaptionActiveClass} ${characterFigCaptionBaseClass}`
          : `${characterFigCaptionBaseClass} ${characterFigCaptionClass}`
      }
      {...props}
    />
  );
};

export { CharacterCardFigCaption, CharacterCardFigure, Figure as default };
