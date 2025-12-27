import React, { useState, useEffect } from 'react';
import Layout from './components/Layout';
import HomeView from './components/HomeView';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import { motion } from 'framer-motion';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState('home');

  // Ensure scroll is at top when switching "pages"
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentView]);

  const pageVariants = {
    initial: { opacity: 0, scale: 0.99 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 1.01 },
  };

  const pageTransition: any = {
    duration: 0.4,
    ease: [0.22, 1, 0.36, 1],
  };

  const renderContent = () => {
    switch (currentView) {
      case 'home':
        return (
          <motion.div key="home" variants={pageVariants} initial="initial" animate="animate" exit="exit" transition={pageTransition}>
            <HomeView setView={setCurrentView} />
          </motion.div>
        );
      case 'about':
        return (
          <motion.div key="about" variants={pageVariants} initial="initial" animate="animate" exit="exit" transition={pageTransition} className="pt-24 pb-12">
            <About />
          </motion.div>
        );
      case 'services':
        return (
          <motion.div key="services" variants={pageVariants} initial="initial" animate="animate" exit="exit" transition={pageTransition} className="pt-24 pb-12">
            <Services />
          </motion.div>
        );
      {/*case 'portfolio':
        return (
          <motion.div key="portfolio" variants={pageVariants} initial="initial" animate="animate" exit="exit" transition={pageTransition} className="pt-24 pb-12">
            <Portfolio />
          </motion.div>
        );*/}
      case 'contact':
        return (
          <motion.div key="contact" variants={pageVariants} initial="initial" animate="animate" exit="exit" transition={pageTransition} className="pt-24 pb-12">
            <Contact />
          </motion.div>
        );
      default:
        return <HomeView setView={setCurrentView} />;
    }
  };

  return (
    <Layout currentView={currentView} setView={setCurrentView}>
      {renderContent()}
    </Layout>
  );
};

export default App;