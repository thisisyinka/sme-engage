import React from 'react';
import HeroSection from '../../hero';
import { homeObjOne, homeObjThree } from './Data';

function Home() {
  return (
    <>
      <HeroSection {...homeObjOne} />
      <HeroSection {...homeObjThree} />
    </>
  );
}

export default Home;
