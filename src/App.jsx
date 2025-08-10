import React from 'react';
import BgImage from './assets/bg-image.png';
import TopHeader from './components/TopHeader';

const App = () => {
  return (
    <div className='h-screen bg-cover w-full' style={{ backgroundImage: `url(${BgImage})`}}>
      <TopHeader />
      
    </div>
  );
};

export default App;