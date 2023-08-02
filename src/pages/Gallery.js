import React from 'react';
import { ReactSVG } from 'react-svg';
import styles from '../components/Hero/Hero';
import manImg from '../assets/images/man.svg';

import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';


function Gallery() {
  
  return (
    <>
      <Header />
      <section style={{ margin: '200px' }}>
        <ReactSVG src={manImg} className={styles.image} />
      </section>
      <Footer />
    </>
  );

}

export default Gallery;