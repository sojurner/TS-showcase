import React, { HTMLAttributes, ButtonHTMLAttributes } from 'react';

interface OnClickWrapperProps extends HTMLAttributes<HTMLDivElement> {
  active: boolean;
}

const OnClickWrapper: React.FC<HTMLAttributes<HTMLDivElement>> = ({
  style,
  ...props
}) => {
  return <div style={{ cursor: 'pointer', ...style }} {...props} />;
};

const FilmOnClickWrapper: React.FC<OnClickWrapperProps> = ({
  active,
  ...props
}) => {
  return (
    <OnClickWrapper
      style={{
        borderTop: active ? '2px solid white' : '2px solid black'
      }}
      {...props}
    />
  );
};

export { FilmOnClickWrapper, OnClickWrapper as default };
