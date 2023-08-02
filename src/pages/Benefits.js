import React from 'react';
import data from '../assets/data.js';

import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Features from '../components/Features/Features';

function Benefits() {
  const { features } = data;
  
  return (
    <>
      <Header />
      <section style={{ margin: '100px auto' }}>
        <Features features={features}/>
      </section>
      <Footer />
    </>
  );

}

export default Benefits;