import React from 'react';
import BgImage from './assets/bg-image.png';
import TopHeader from './components/TopHeader';
import Hero from './components/Hero';

const App = () => {
  return (
    <div className='min-h-screen bg-cover w-full' style={{ backgroundImage: `url(${BgImage})`}}>
      <TopHeader />
      <main>
        <Hero />
      </main>
    </div>
  );
};

export default App;