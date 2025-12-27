import React from 'react';
import Hero from './Hero';
import About from './About';
import Services from './Services';
import Portfolio from './Portfolio';
import Features from './Features';
import Contact from './Contact';

interface HomeViewProps {
  setView: (view: string) => void;
}

const HomeView: React.FC<HomeViewProps> = ({ setView }) => {
  return (
    <>
      <Hero setView={setView} />
      <About />
      <Services />
     {/* <Portfolio />*/}
      <Features />
      <Contact />
    </>
  );
};

export default HomeView;