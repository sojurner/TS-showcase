import React from 'react';

import { Flex } from 'rebass';
import { FilmCard } from '~components/Cards';
import Loader from '~components/Loader';
import { TypographySwapiPageTitle } from '~components/Typography';
import { FilmOnClickWrapper } from '~components/OnClickWrapper';
import BackgroundScroll from '~components/BackgroundScroll';

import { useFilmsRequest } from '~utils/hooks/swapiHooks';

const useBackgroundScroll = (
  initialVal: number = 1
): [number, boolean, any] => {
  const [reset, setReset] = React.useState(false);
  const [selectedFilm, setSelectedFilm] = React.useState<number>(initialVal);

  const onFilmSelect = (episodeId: number) => {
    if (selectedFilm !== episodeId) {
      setReset(state => !state);
      setSelectedFilm(episodeId);
      setTimeout(() => {
        setReset(state => !state);
      }, 1);
    }
  };

  return [selectedFilm, reset, onFilmSelect];
};

const SwapiFilmsPage: React.FC = () => {
  const [films, _, loading] = useFilmsRequest();
  const [selectedFilmId, reset, onFilmSelect] = useBackgroundScroll();

  if (!Boolean(films) || loading) {
    return (
      <Flex
        height="100%"
        width="100%"
        justifyContent="center"
        alignItems="center"
        style={{
          overflow: 'hidden',
          top: 0
        }}
      >
        <Loader />
      </Flex>
    );
  }

  const selectedFilm = films.find(film => film.episode_id === selectedFilmId);
  return (
    <>
      {!reset && <BackgroundScroll {...selectedFilm} />}
      <TypographySwapiPageTitle>Films</TypographySwapiPageTitle>
      <Flex p="0 2em" justifyContent="spaceBetween" overflowX="scroll">
        {films
          .sort((a, b) => a.episode_id - b.episode_id)
          .map((film, index) => {
            const { director, producer, release_date, ...props } = film;
            return (
              <Flex width={330} key={`films-${index}`} m="0 -5px 1em 0">
                <FilmOnClickWrapper
                  active={selectedFilmId === film.episode_id}
                  onClick={onFilmSelect.bind(null, film.episode_id)}
                >
                  <FilmCard {...props} />
                </FilmOnClickWrapper>
              </Flex>
            );
          })}
      </Flex>
    </>
  );
};

export default SwapiFilmsPage;
