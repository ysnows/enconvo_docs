import React from 'react';

const Youtube = ({ src }) => {
  return <iframe style={{
    aspectRatio: '16 / 9',
    width: '100%',
  }}
    src={src} frameborder="0" allowfullscreen></iframe>
};

export default Youtube;