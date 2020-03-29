import React from 'react';
import './_BackgroundScroll.scss';
import { IFilm } from '~typings/swapi';

const BackgroundScroll: React.FC<Partial<IFilm>> = props => {
  return (
    <div className="Background__Container">
      <div className="Background__Fade" />
      <section className="Background__Scroll">
        <div className="Background__Crawl">
          <div className="Background__Title">
            <p>Episode {props.episode_id}</p>
            <h1>{props.title}</h1>
          </div>
          <p>{props.opening_crawl}</p>
        </div>
      </section>
    </div>
  );
};

export default BackgroundScroll;
