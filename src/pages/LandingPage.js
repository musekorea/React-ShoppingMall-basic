import React from 'react';
import NAVBAR from '../components/NAVBAR';
import MAIN from '../components/MAIN';
import PRODUCTS from '../components/PRODUCTS';

const LandingPage = ({ prods }) => {
  return (
    <>
      <NAVBAR />
      <MAIN />
      <PRODUCTS prods={prods} />
    </>
  );
};

export default LandingPage;
