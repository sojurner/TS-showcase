import React from 'react';

import { useEpisodesPageRequest } from '~utils/hooks/rickMortyHooks';
import Flex from '~templates/Flex';
import { TypographyRickMortyPageTitle } from '~components/Typography';
import { RickMortyPagination } from '~components/Pagination';

import { EpisodeCard } from '~components/Cards';
import { RickMortyLoader } from '~components/Loader';
import { EpisodeSearch } from '~components/Search';

const RickMortyEpisodesPage: React.FC = () => {
  const [episodes, paginationProps, loading, error] = useEpisodesPageRequest();
  return (
    <Flex
      name="RickMorty-characterpage"
      flexDirection="column"
      overflowY="scroll"
      height="100%"
      position="relative"
    >
      <Flex
        padding="1em 0"
        justifyContent="center"
        position="sticky"
        top={0}
        zIndex={3}
        background="#DBF0EA"
      >
        <TypographyRickMortyPageTitle>Episodes</TypographyRickMortyPageTitle>
      </Flex>
      <EpisodeSearch />
      <RickMortyPagination {...paginationProps} />

      {loading || !episodes ? (
        <Flex
          justifyContent="center"
          alignItems="center"
          fontSize="8em"
          flex="1 1 auto"
        >
          <RickMortyLoader />
        </Flex>
      ) : (
        <Flex flex="1 1 auto" flexWrap="wrap" justifyContent="center">
          {episodes.map((location, index) => (
            <EpisodeCard key={`episodecard-${index}`} {...location} />
          ))}
        </Flex>
      )}
    </Flex>
  );
};

export default RickMortyEpisodesPage;
