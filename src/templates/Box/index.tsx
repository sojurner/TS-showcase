import React, { CSSProperties } from 'react';

interface BoxProps extends CSSProperties {
  name?: string;
}

const Box: React.FC<BoxProps> = ({ children, name, ...props }) => (
  <div data-name={name} style={props}>
    {children}
  </div>
);

export { Box as default };
