import React, { CSSProperties } from 'react';

interface FlexProps extends CSSProperties {
  name?: string;
}

const Flex: React.FC<FlexProps> = ({ children, name, ...props }) => (
  <div data-name={name} style={{ display: 'flex', ...props }}>
    {children}
  </div>
);

const FlexAbsolute: React.FC<FlexProps> = props => (
  <Flex position="absolute" {...props} />
);

const FlexRelative: React.FC<FlexProps> = props => (
  <Flex position="relative" {...props} />
);

const FlexCardList: React.FC<FlexProps> = props => (
  <Flex flexWrap="wrap" justifyContent="center" padding="0 2em" {...props} />
);

const FlexCard: React.FC<FlexProps> = props => (
  <Flex width="330px" margin="1em" {...props} />
);

const FlexPageLoader: React.FC<FlexProps> = props => (
  <FlexAbsolute
    top="0"
    height="100%"
    width="100%"
    justifyContent="center"
    alignItems="center"
    overflow="hidden"
    {...props}
  />
);

const FlexSidePanel: React.FC<FlexProps> = props => (
  <Flex
    borderRight="1px solid #ffffff12"
    minWidth={'280px'}
    maxWidth={'280px'}
    padding="0 1.5em"
    overflow="auto"
    flexDirection="column"
    {...props}
  />
);

const FlexResourceContent: React.FC<FlexProps> = props => (
  <Flex
    flex="1 1 auto"
    flexWrap="wrap"
    justifyContent="space-around"
    height="100%"
    overflow="auto"
    {...props}
  />
);

export {
  FlexAbsolute,
  FlexSidePanel,
  FlexPageLoader,
  FlexCardList,
  FlexCard,
  FlexRelative,
  FlexResourceContent,
  Flex as default
};
