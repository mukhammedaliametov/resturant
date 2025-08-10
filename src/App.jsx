import React from 'react';
import BgImage from './assets/bg-image.png';
import TopHeader from './components/TopHeader';
import Hero from './components/Hero';
import PopularDishes from './components/PopularDishes';
import BookTable from './components/BookTable';
import WhyChooseUs from './components/WhyChooseUs';
import NewsGallery from './components/NewsGallery';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className='min-h-screen bg-cover w-full' style={{ backgroundImage: `url(${BgImage})`}}>
      <TopHeader />
      <main>
        <Hero />
        <PopularDishes />
        <BookTable />
        <WhyChooseUs />
        <NewsGallery />
      </main>
        {/* <Footer /> */}
    </div>
  );
};

export default App;