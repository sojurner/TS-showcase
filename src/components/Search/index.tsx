import React, { HTMLAttributes } from 'react';

import {
  useCharacterSearch,
  useLocationSearch,
  useEpisodeSearch
} from '~utils/hooks/rickMortyHooks';
import Flex from '~templates/Flex';
import { RickMortyLoader } from '~components/Loader';
import { CharacterCard, LocationCard, EpisodeCard } from '~components/Cards';
import { SearchIcon } from '~components/Icon';

import styles from './Search.module.scss';

const [baseClass, inactiveClass, activeClass] = Object.values(styles);
console.log({ inactiveClass, activeClass, baseClass });
const Search: React.FC<HTMLAttributes<HTMLInputElement>> = props => {
  const [open, setOpen] = React.useState<boolean>(false);

  const handleToggleOpen = () => {
    setOpen(state => !state);
  };

  return (
    <>
      {open ? (
        <Flex>
          <input {...props} />
        </Flex>
      ) : (
        <div onClick={handleToggleOpen}>🔎</div>
      )}
    </>
  );
};

const CharacterSearch: React.FC = () => {
  const [inputProps, characters, loading, error] = useCharacterSearch();

  const [open, setOpen] = React.useState<boolean>(false);

  const handleToggleOpen = () => {
    setOpen(state => !state);
  };

  return (
    <div
      className={
        open ? `${baseClass} ${activeClass}` : `${baseClass} ${inactiveClass}`
      }
    >
      <span onClick={!open ? handleToggleOpen : () => {}}>
        <SearchIcon />
      </span>
      <section>
        <Flex margin="1.5em 0 1em 0" justifyContent="center">
          <input
            placeholder="Search Characters"
            value={inputProps.value}
            onChange={inputProps.onChange}
          />
          <button children="x" onClick={handleToggleOpen} />
        </Flex>
        <Flex flexWrap="wrap" justifyContent="center">
          {(inputProps.value && !Boolean(characters.length)) || loading ? (
            <RickMortyLoader />
          ) : !error ? (
            characters.map((character, index) => (
              <CharacterCard key={`charactercard-${index}`} {...character} />
            ))
          ) : null}
        </Flex>
      </section>
    </div>
  );
};

const LocationSearch: React.FC = () => {
  const [inputProps, locations, loading, error] = useLocationSearch();

  const [open, setOpen] = React.useState<boolean>(false);

  const handleToggleOpen = () => {
    setOpen(state => !state);
  };

  return (
    <div
      className={
        open ? `${baseClass} ${activeClass}` : `${baseClass} ${inactiveClass}`
      }
    >
      <span onClick={!open ? handleToggleOpen : () => {}}>
        <SearchIcon />
      </span>
      <section>
        <Flex margin="1.5em 0 1em 0" justifyContent="center">
          <input
            placeholder="Search Locations"
            value={inputProps.value}
            onChange={inputProps.onChange}
          />
          <button children="x" onClick={handleToggleOpen} />
        </Flex>
        <Flex flexWrap="wrap" justifyContent="center">
          {(inputProps.value && !Boolean(locations.length)) || loading ? (
            <RickMortyLoader />
          ) : !error ? (
            locations.map((location, index) => (
              <LocationCard key={`locationcard-${index}`} {...location} />
            ))
          ) : null}
        </Flex>
      </section>
    </div>
  );
};

const EpisodeSearch: React.FC = () => {
  const [inputProps, episodes, loading, error] = useEpisodeSearch();

  const [open, setOpen] = React.useState<boolean>(false);

  const handleToggleOpen = () => {
    setOpen(state => !state);
  };

  return (
    <div
      className={
        open ? `${baseClass} ${activeClass}` : `${baseClass} ${inactiveClass}`
      }
    >
      <span onClick={!open ? handleToggleOpen : () => {}}>
        <SearchIcon />
      </span>
      <section>
        <Flex margin="1.5em 0 1em 0" justifyContent="center">
          <input
            placeholder="Search Episodes"
            value={inputProps.value}
            onChange={inputProps.onChange}
          />
          <button children="x" onClick={handleToggleOpen} />
        </Flex>
        <Flex flexWrap="wrap" justifyContent="center">
          {(inputProps.value && !Boolean(episodes.length)) || loading ? (
            <RickMortyLoader />
          ) : !error ? (
            episodes.map((episode, index) => (
              <EpisodeCard key={`episodecard-${index}`} {...episode} />
            ))
          ) : null}
        </Flex>
      </section>
    </div>
  );
};

export { CharacterSearch, LocationSearch, EpisodeSearch, Search as default };
