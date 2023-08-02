import React from 'react';
import data from '../assets/data.js';

import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Content from '../components/Content/Content';

function Pricing() {
  const { invest } = data;
  return (
    <>
      <Header />
      <section style={{ margin: '100px auto' }}>
        <Content title={invest.title} titleLW={invest.titleLstWrd} text={invest.text} image={invest.img}/>
      </section>
      <Footer />
    </>
  );

}

export default Pricing;