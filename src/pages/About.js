import React from 'react';
import data from '../assets/data.js';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Details from '../components/Details/Details';

function About() {
  const { details } = data;
  return (
    <>
      <Header />
      <section style={{ margin: '200px auto' }}>
        <Details title={details.title} text={details.text} items={details.items} />
      </section>
      <Footer />
    </>
  );

}

export default About;