import React from 'react';
import { TResource } from '~typings/swapi';
import Box from '~templates/Box';
import {
  TypographySwapiResourceProperty,
  TypographySwapiResourceTitle,
  TypographySwapiResourceValue
} from '~components/Typography';

const ResourceInfo: React.FC<{ info: Partial<TResource> }> = ({ info }) => {
  return (
    <>
      {Object.entries(info).map((info, index) => {
        const [property, value] = info;
        return !index ? (
          <TypographySwapiResourceTitle key={`resourcetitle-${index}`}>
            {value}
          </TypographySwapiResourceTitle>
        ) : !Array.isArray(value) ? (
          typeof value === 'string' &&
          (!(value as string).includes('http') ? (
            <div key={`resource-${index}`}>
              <Box margin="1.5em 0" />
              <TypographySwapiResourceProperty>
                {property.replace(/_/g, ' ')}
              </TypographySwapiResourceProperty>
              <Box margin=".5em 0" />
              <TypographySwapiResourceValue>
                {value}
              </TypographySwapiResourceValue>
            </div>
          ) : null)
        ) : null;
      })}
    </>
  );
};

export default ResourceInfo;
