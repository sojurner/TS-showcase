import React, { HTMLAttributes } from 'react';

import { Flex } from 'rebass';
import {
  TypographySwapiCardProperty,
  TypographySwapiCardValue,
  TypographySwapiCardTitle,
  TypographyRickMortyCardTitle,
  TypographyRickMortyCardSubtitle,
  TypographyRickMortyCardProperty,
  TypographyRickMortyCardValue,
  TypographyPokemonCardTitle
} from '~components/Typography';
import { SwapiResourceNavigation } from '~components/Navigation';
import { AccountMinusIcon, AccountDetailsIcon } from '~components/Icon';
import {
  CharacterCardFigure,
  CharacterCardFigCaption
} from '~components/Figure';
import { pokemonTypeTable } from '~components/Badges/PokemonTypeBadge';

import { useFiniteScroll } from '~utils/hooks/scrollHooks';

import * as TSwapi from '~typings/swapi';
import * as TRickMorty from '~typings/rickMorty';
import styles from './Card.module.scss';
import { IPokemon } from '~typings/pokemon';

const [
  characterClass,
  episodeClass,
  filmResourceClass,
  filmClass,
  locationClass,
  peopleResourceClass,
  peopleClass,
  planetResourceClass,
  planetClass,
  speciesResourceClass,
  speciesClass,
  starshipsResourceClass,
  starshipsClass,
  vehiclesResourceClass,
  vehiclesClass
] = Object.values(styles)
  .sort()
  .slice(4);

const Card: React.FC<HTMLAttributes<HTMLDivElement>> = props => {
  return <div {...props}></div>;
};

const PlanetCard: React.FC<Partial<TSwapi.IPlanet>> = ({
  name,
  films,
  id,
  residents,
  ...props
}) => {
  return (
    <Card className={planetClass}>
      <Flex m="1em auto">
        <TypographySwapiCardTitle>{name}</TypographySwapiCardTitle>
      </Flex>
      <Flex justifyContent="space-evenly" width="50%" m="0 auto 1em auto">
        <SwapiResourceNavigation
          id={id}
          type="planets"
          resourceInfo={{ name, ...props }}
          resourceURLs={{ residents: residents!, films: films! }}
        />
      </Flex>
      <Flex flexWrap="wrap">
        {Object.entries(props).map((prop, index) => {
          const [key, value] = prop;
          return (
            <Flex key={`planet-${index}`} m="5px 10px" flexDirection="column">
              <TypographySwapiCardProperty>
                {key.replace(/_/g, ' ')}:
              </TypographySwapiCardProperty>
              <Flex m="5px 0 0 0" />
              <TypographySwapiCardValue>{value}</TypographySwapiCardValue>
            </Flex>
          );
        })}
      </Flex>
    </Card>
  );
};

const PlanetResourceCard: React.FC<Partial<TSwapi.IPlanet>> = ({
  name,
  films,
  id,
  residents,
  ...props
}) => {
  return (
    <Card className={planetResourceClass}>
      <Flex
        flexDirection="column"
        m="auto 1em"
        minWidth="200px"
        maxWidth="200px"
      >
        <TypographySwapiCardTitle>{name}</TypographySwapiCardTitle>
        <Flex justifyContent="space-evenly" width="100px" m="1em auto 0 auto">
          <SwapiResourceNavigation
            id={id}
            type="planets"
            resourceInfo={{ name, ...props }}
            resourceURLs={{ residents: residents!, films: films! }}
          />
        </Flex>
      </Flex>
      <Flex flexWrap="wrap">
        {Object.entries(props).map((prop, index) => {
          const [key, value] = prop;
          return (
            <Flex key={`planet-${index}`} m="5px 10px" flexDirection="column">
              <TypographySwapiCardProperty>
                {key.replace(/_/g, ' ')}:
              </TypographySwapiCardProperty>
              <Flex m="5px 0 0 0" />
              <TypographySwapiCardValue>{value}</TypographySwapiCardValue>
            </Flex>
          );
        })}
      </Flex>
    </Card>
  );
};

const PeopleCard: React.FC<Partial<TSwapi.IPeople>> = props => {
  const {
    films,
    species,
    id,
    vehicles,
    homeworld,
    starships,
    name,
    ...otherProps
  } = props;
  return (
    <Card className={peopleClass}>
      <Flex m="1em auto">
        <TypographySwapiCardTitle>{props.name}</TypographySwapiCardTitle>
      </Flex>
      <Flex justifyContent="space-evenly" width="50%" m="0 auto 1em auto">
        <SwapiResourceNavigation
          id={id}
          type="people"
          resourceInfo={{ name, ...props }}
          resourceURLs={{
            films: films!,
            species: species!,
            vehicles: vehicles!,
            starships: starships!
          }}
        />
      </Flex>
      <Flex flexWrap="wrap">
        {Object.entries(otherProps).map((prop, index) => {
          const [key, value] = prop;
          return (
            <Flex
              key={`peoplecard-${index}`}
              m="5px 10px"
              flexDirection="column"
            >
              <TypographySwapiCardProperty>
                {key.replace(/_/g, ' ')}:
              </TypographySwapiCardProperty>
              <Flex m="5px 0 0 0" />
              <TypographySwapiCardValue>{value}</TypographySwapiCardValue>
            </Flex>
          );
        })}
      </Flex>
    </Card>
  );
};

const PeopleResourceCard: React.FC<Partial<TSwapi.IPeople>> = props => {
  const {
    films,
    species,
    id,
    vehicles,
    homeworld,
    starships,
    name,
    ...otherProps
  } = props;
  return (
    <Card className={peopleResourceClass}>
      <Flex
        flexDirection="column"
        m="auto 1em"
        minWidth="200px"
        maxWidth="200px"
      >
        <TypographySwapiCardTitle>{name}</TypographySwapiCardTitle>
        <Flex justifyContent="space-evenly" width="200px" m="1em auto 0 auto">
          <SwapiResourceNavigation
            id={id}
            type="people"
            resourceInfo={{ name, ...props }}
            resourceURLs={{
              films: films!,
              species: species!,
              vehicles: vehicles!,
              starships: starships!
            }}
          />
        </Flex>
      </Flex>
      <Flex flexWrap="wrap">
        {Object.entries(otherProps).map((prop, index) => {
          const [key, value] = prop;
          return (
            <Flex
              key={`peoplecard-${index}`}
              m="5px 10px"
              flexDirection="column"
            >
              <TypographySwapiCardProperty>
                {key.replace(/_/g, ' ')}:
              </TypographySwapiCardProperty>
              <Flex m="5px 0 0 0" />
              <TypographySwapiCardValue>{value}</TypographySwapiCardValue>
            </Flex>
          );
        })}
      </Flex>
    </Card>
  );
};

const FilmCard: React.FC<Partial<TSwapi.IFilm>> = props => {
  const {
    title,
    characters,
    planets,
    starships,
    species,
    vehicles,
    opening_crawl,
    episode_id,
    id,
    ...otherProps
  } = props;
  return (
    <Card className={filmClass}>
      <Flex m="1em auto">
        <TypographySwapiCardTitle>{props.title}</TypographySwapiCardTitle>
      </Flex>
      <Flex justifyContent="space-evenly" width="50%" m="0 auto 1em auto">
        <SwapiResourceNavigation
          id={id}
          type="films"
          resourceInfo={{ title, ...props }}
          resourceURLs={{
            planets: planets!,
            species: species!,
            vehicles: vehicles!,
            starships: starships!,
            characters: characters!
          }}
        />
      </Flex>
      <Flex flexWrap="wrap">
        {Object.entries(otherProps).map((prop, index) => {
          const [key, value] = prop;
          return (
            <Flex
              key={`filmscard-${index}`}
              m="5px 10px"
              flexDirection="column"
            >
              <TypographySwapiCardProperty>
                {key.replace(/_/g, ' ')}:
              </TypographySwapiCardProperty>
              <Flex m="5px 0 0 0" />
              <TypographySwapiCardValue>{value}</TypographySwapiCardValue>
            </Flex>
          );
        })}
      </Flex>
    </Card>
  );
};

const FilmResourceCard: React.FC<Partial<TSwapi.IFilm>> = props => {
  const {
    title,
    characters,
    planets,
    starships,
    species,
    vehicles,
    opening_crawl,
    episode_id,
    id,
    ...otherProps
  } = props;
  return (
    <Card className={filmResourceClass}>
      <Flex
        flexDirection="column"
        m="auto 1em"
        minWidth="200px"
        maxWidth="200px"
      >
        <TypographySwapiCardTitle>{props.title}</TypographySwapiCardTitle>
        <Flex justifyContent="space-evenly" width="200px" m="1em auto 0 auto">
          <SwapiResourceNavigation
            id={id}
            type="films"
            resourceInfo={{ title, ...props }}
            resourceURLs={{
              planets: planets!,
              species: species!,
              vehicles: vehicles!,
              starships: starships!,
              characters: characters!
            }}
          />
        </Flex>
      </Flex>

      <Flex flexWrap="wrap">
        {Object.entries(otherProps).map((prop, index) => {
          const [key, value] = prop;
          return (
            <Flex
              key={`filmResourceCard-${index}`}
              m="5px 10px"
              flexDirection="column"
            >
              <TypographySwapiCardProperty>
                {key.replace(/_/g, ' ')}:
              </TypographySwapiCardProperty>
              <Flex m="5px 0 0 0" />
              <TypographySwapiCardValue>{value}</TypographySwapiCardValue>
            </Flex>
          );
        })}
      </Flex>
    </Card>
  );
};

const SpeciesCard: React.FC<Partial<TSwapi.ISpecies>> = ({
  people,
  id,
  homeworld,
  films,
  name,
  ...props
}) => {
  return (
    <Card className={speciesClass}>
      <Flex m="1em auto">
        <TypographySwapiCardTitle>{name}</TypographySwapiCardTitle>
      </Flex>
      <Flex justifyContent="space-evenly" width="50%" m="0 auto 1em auto">
        <SwapiResourceNavigation
          id={id}
          type="species"
          resourceInfo={{ name, ...props }}
          resourceURLs={{ people: people!, films: films! }}
        />
      </Flex>
      <Flex flexWrap="wrap">
        {Object.entries(props).map((prop, index) => {
          const [key, value] = prop;
          return (
            <Flex
              key={`speciesContent-${index}`}
              m="5px 10px"
              flexDirection="column"
            >
              <TypographySwapiCardProperty>
                {key.replace(/_/g, ' ')}:
              </TypographySwapiCardProperty>
              <Flex m="5px 0 0 0" />
              <TypographySwapiCardValue>{value}</TypographySwapiCardValue>
            </Flex>
          );
        })}
      </Flex>
    </Card>
  );
};

const SpeciesResourceCard: React.FC<Partial<TSwapi.ISpecies>> = ({
  people,
  id,
  homeworld,
  films,
  name,
  ...props
}) => {
  return (
    <Card className={speciesResourceClass}>
      <Flex
        name="species-card-header"
        flexDirection="column"
        m="auto 1em"
        minWidth="200px"
        maxWidth="200px"
      >
        <TypographySwapiCardTitle>{name}</TypographySwapiCardTitle>
        <Flex justifyContent="space-evenly" width="100px" m="1em auto 0 auto">
          <SwapiResourceNavigation
            id={id}
            type="species"
            resourceInfo={{ name, ...props }}
            resourceURLs={{ people: people!, films: films! }}
          />
        </Flex>
      </Flex>

      <Flex flexWrap="wrap">
        {Object.entries(props).map((prop, index) => {
          const [key, value] = prop;
          return (
            <Flex
              key={`speciesResource-${index}`}
              m="5px 10px"
              flexDirection="column"
            >
              <TypographySwapiCardProperty>
                {key.replace(/_/g, ' ')}:
              </TypographySwapiCardProperty>
              <Flex m="5px 0 0 0" />
              <TypographySwapiCardValue>{value}</TypographySwapiCardValue>
            </Flex>
          );
        })}
      </Flex>
    </Card>
  );
};

const VehicleCard: React.FC<Partial<TSwapi.IVehicle>> = ({
  pilots,
  films,
  name,
  id,
  ...props
}) => {
  return (
    <Card className={vehiclesClass}>
      <Flex m="1em auto">
        <TypographySwapiCardTitle>{name}</TypographySwapiCardTitle>
      </Flex>
      <Flex justifyContent="space-evenly" width="50%" m="0 auto 1em auto">
        <SwapiResourceNavigation
          id={id}
          type="vehicles"
          resourceInfo={{ name, ...props }}
          resourceURLs={{ films: films!, pilots: pilots! }}
        />
      </Flex>
      <Flex flexWrap="wrap">
        {Object.entries(props).map((prop, index) => {
          const [key, value] = prop;
          return (
            <Flex
              key={`vehicleContent-${index}`}
              m="5px 10px"
              flexDirection="column"
            >
              <TypographySwapiCardProperty>
                {key.replace(/_/g, ' ')}:
              </TypographySwapiCardProperty>
              <Flex m="5px 0 0 0" />
              <TypographySwapiCardValue>{value}</TypographySwapiCardValue>
            </Flex>
          );
        })}
      </Flex>
    </Card>
  );
};

const VehicleResourceCard: React.FC<Partial<TSwapi.IVehicle>> = ({
  pilots,
  films,
  name,
  id,
  ...props
}) => {
  return (
    <Card className={vehiclesResourceClass}>
      <Flex
        name="vehicle-card-header"
        flexDirection="column"
        m="auto 1em"
        minWidth="200px"
        maxWidth="200px"
      >
        <TypographySwapiCardTitle>{name}</TypographySwapiCardTitle>
        <Flex justifyContent="space-evenly" width="100px" m="1em auto 0 auto">
          <SwapiResourceNavigation
            id={id}
            type="vehicles"
            resourceInfo={{ name, ...props }}
            resourceURLs={{ films: films!, pilots: pilots! }}
          />
        </Flex>
      </Flex>

      <Flex flexWrap="wrap">
        {Object.entries(props).map((prop, index) => {
          const [key, value] = prop;
          return (
            <Flex
              key={`vehicleResource-${index}`}
              m="5px 10px"
              flexDirection="column"
            >
              <TypographySwapiCardProperty>
                {key.replace(/_/g, ' ')}:
              </TypographySwapiCardProperty>
              <Flex m="5px 0 0 0" />
              <TypographySwapiCardValue>{value}</TypographySwapiCardValue>
            </Flex>
          );
        })}
      </Flex>
    </Card>
  );
};

const StarshipCard: React.FC<Partial<TSwapi.IStarship>> = ({
  pilots,
  films,
  id,
  name,
  ...props
}) => {
  return (
    <Card className={starshipsClass}>
      <Flex m="1em auto">
        <TypographySwapiCardTitle>{name}</TypographySwapiCardTitle>
      </Flex>
      <Flex justifyContent="space-evenly" width="50%" m="0 auto 1em auto">
        <SwapiResourceNavigation
          id={id}
          type="starships"
          resourceInfo={{ name, ...props }}
          resourceURLs={{ films: films!, pilots: pilots! }}
        />
      </Flex>
      <Flex flexWrap="wrap">
        {Object.entries(props).map((prop, index) => {
          const [key, value] = prop;
          return (
            <Flex
              key={`starshipContent-${index}`}
              m="5px 10px"
              flexDirection="column"
            >
              <TypographySwapiCardProperty>
                {key.replace(/_/g, ' ')}:
              </TypographySwapiCardProperty>
              <Flex m="5px 0 0 0" />
              <TypographySwapiCardValue>{value}</TypographySwapiCardValue>
            </Flex>
          );
        })}
      </Flex>
    </Card>
  );
};

const StarshipResourceCard: React.FC<Partial<TSwapi.IStarship>> = ({
  pilots,
  films,
  id,
  name,
  ...props
}) => {
  return (
    <Card className={starshipsResourceClass}>
      <Flex
        name="starships-card-header"
        flexDirection="column"
        m="auto 1em"
        minWidth="200px"
        maxWidth="200px"
      >
        <TypographySwapiCardTitle>{name}</TypographySwapiCardTitle>
        <Flex justifyContent="space-evenly" width="100px" m="1em auto 0 auto">
          <SwapiResourceNavigation
            id={id}
            type="starships"
            resourceInfo={{ name, ...props }}
            resourceURLs={{ films: films!, pilots: pilots! }}
          />
        </Flex>
      </Flex>

      <Flex flexWrap="wrap">
        {Object.entries(props).map((prop, index) => {
          const [key, value] = prop;
          return (
            <Flex
              key={`starshipResource-${index}`}
              m="5px 10px"
              flexDirection="column"
            >
              <TypographySwapiCardProperty>
                {key.replace(/_/g, ' ')}:
              </TypographySwapiCardProperty>
              <Flex m="5px 0 0 0" />
              <TypographySwapiCardValue>{value}</TypographySwapiCardValue>
            </Flex>
          );
        })}
      </Flex>
    </Card>
  );
};

const CharacterCard: React.FC<Partial<TRickMorty.ICharacter>> = ({
  id,
  image,
  episode,
  name,
  species,
  ...props
}) => {
  const [open, setOpen] = React.useState<boolean>(false);

  const toggleOpen = () => setOpen(state => !state);

  return (
    <Card className={characterClass}>
      <span onClick={toggleOpen}>
        {!open ? <AccountDetailsIcon /> : <AccountMinusIcon />}
      </span>
      <CharacterCardFigure>
        <img src={image} alt="rickMorty-character" />
        <CharacterCardFigCaption active={open}>
          <TypographyRickMortyCardTitle>{name}</TypographyRickMortyCardTitle>
          <TypographyRickMortyCardSubtitle>
            {species}
          </TypographyRickMortyCardSubtitle>
          <section>
            <Flex flexWrap="wrap">
              {Object.entries(props).map((prop, index) => {
                const [property, value] = prop;
                return (
                  <Flex
                    m="0 .5em"
                    height="max-content"
                    alignItems="flex-start"
                    flexDirection="column"
                    key={`character-details-${index}`}
                  >
                    <TypographyRickMortyCardProperty>
                      {property}
                    </TypographyRickMortyCardProperty>
                    <TypographyRickMortyCardValue>
                      {value ? value : 'N/A'}
                    </TypographyRickMortyCardValue>
                  </Flex>
                );
              })}
            </Flex>
          </section>
        </CharacterCardFigCaption>
      </CharacterCardFigure>
    </Card>
  );
};

const LocationCard: React.FC<Partial<TRickMorty.ILocation>> = ({
  residents,
  name,
  ...props
}) => {
  const [loadedCharacters, handleScroll] = useFiniteScroll(
    residents as TRickMorty.ICharacter[],
    4
  );

  return (
    <Card className={locationClass}>
      <Flex>
        <TypographyRickMortyCardTitle>{name}</TypographyRickMortyCardTitle>
        <Flex>
          {Object.entries(props).map((prop, index) => {
            const [property, value] = prop;
            return (
              <Flex
                m="0 .5em"
                alignItems="flex-start"
                flexDirection="column"
                key={`${name}-character-details-${index}`}
              >
                <TypographyRickMortyCardProperty>
                  {property}
                </TypographyRickMortyCardProperty>
                <TypographyRickMortyCardValue style={{ color: 'darkgrey' }}>
                  {value ? value : 'N/A'}
                </TypographyRickMortyCardValue>
              </Flex>
            );
          })}
        </Flex>
      </Flex>
      {Boolean(loadedCharacters.length) && (
        <div
          style={{
            display: 'flex',
            position: 'relative',
            marginTop: '1em',
            flexDirection: 'row',
            overflow: 'scroll hidden',
            height: '24em',
            width: '100%',
            background: 'rgba(0, 0, 0, 0.096)'
          }}
          onScroll={handleScroll}
        >
          <Flex style={{ position: 'sticky', left: 0 }}>
            <TypographyRickMortyCardSubtitle style={{ margin: '10px' }}>
              Residents<sup>({residents?.length})</sup>
            </TypographyRickMortyCardSubtitle>
          </Flex>
          {loadedCharacters.map((resident, index) => (
            <CharacterCard
              key={`location-residentcard-${index}`}
              {...resident}
            />
          ))}
        </div>
      )}
    </Card>
  );
};

const EpisodeCard: React.FC<Partial<TRickMorty.IEpisode>> = ({
  characters,
  name,
  ...props
}) => {
  const [loadedCharacters, handleScroll] = useFiniteScroll(
    characters as TRickMorty.ICharacter[],
    4
  );
  return (
    <Card className={locationClass}>
      <Flex>
        <TypographyRickMortyCardTitle>{name}</TypographyRickMortyCardTitle>
        <Flex>
          {Object.entries(props).map((prop, index) => {
            const [property, value] = prop;

            return (
              <Flex
                m="0 .5em"
                height="max-content"
                alignItems="flex-start"
                flexDirection="column"
                name={`character-details-${index}`}
                key={`${name}-character-details-${index}`}
              >
                <TypographyRickMortyCardProperty>
                  {property}
                </TypographyRickMortyCardProperty>
                <TypographyRickMortyCardValue style={{ color: 'darkgrey' }}>
                  {value ? value : 'N/A'}
                </TypographyRickMortyCardValue>
              </Flex>
            );
          })}
        </Flex>
      </Flex>
      {Boolean(loadedCharacters?.length) && (
        <div
          style={{
            display: 'flex',
            marginTop: '1em',
            flexDirection: 'row',
            overflow: 'scroll hidden',
            height: '24em',
            width: '100%',
            background: 'rgba(0, 0, 0, 0.096)'
          }}
          onScroll={handleScroll}
        >
          <Flex style={{ position: 'sticky', left: 0 }}>
            <TypographyRickMortyCardSubtitle style={{ margin: '10px' }}>
              Characters<sup>({characters?.length})</sup>
            </TypographyRickMortyCardSubtitle>
          </Flex>
          {loadedCharacters.map((character, index) => (
            <CharacterCard
              key={`location-residentcard-${index}`}
              {...character}
            />
          ))}
        </div>
      )}
    </Card>
  );
};

const PokemonCard: React.FC<Partial<IPokemon>> = ({ name, img, types }) => {
  return (
    <Flex
      flexDirection="column"
      height="max-content"
      width="200px"
      alignItems="center"
      justifyContent="center"
      p="1em 0"
      style={{
        background: 'white'
      }}
    >
      <TypographyPokemonCardTitle>{name}</TypographyPokemonCardTitle>
      <Flex m="1em 0" style={{ position: 'relative' }}>
        {types?.map(type => {
          const Badge = pokemonTypeTable[type.type.name];
          return <Badge />;
        })}
      </Flex>
      <Flex
        padding=".5em"
        justifyContent="center"
        m="auto"
        style={{
          background: '#00000024',
          borderRadius: '50%'
        }}
      >
        <img height="100" width="100" src={img} />
      </Flex>
    </Flex>
  );
};

export {
  VehicleCard,
  VehicleResourceCard,
  PlanetCard,
  PlanetResourceCard,
  PeopleCard,
  PeopleResourceCard,
  SpeciesCard,
  SpeciesResourceCard,
  FilmCard,
  FilmResourceCard,
  StarshipCard,
  StarshipResourceCard,
  CharacterCard,
  PokemonCard,
  LocationCard,
  EpisodeCard,
  Card as default
};
