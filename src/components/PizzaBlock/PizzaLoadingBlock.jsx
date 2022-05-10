import React from 'react';
import ContentLoader from 'react-content-loader';

function PizzaLoadingBlock() {
  return (
    <ContentLoader
      speed={2}
      width={280}
      height={460}
      viewBox='0 0 280 460'
      backgroundColor='#f3f3f3'
      foregroundColor='#ecebeb'
    >
      <circle cx='140' cy='140' r='140' />
      <rect x='-1' y='288' rx='3' ry='3' width='280' height='26' />
      <rect x='-1' y='324' rx='6' ry='6' width='280' height='84' />
      <rect x='0' y='421' rx='6' ry='6' width='92' height='37' />
      <rect x='142' y='416' rx='20' ry='20' width='136' height='43' />
    </ContentLoader>
  );
}

export default PizzaLoadingBlock;
