import React, { useEffect, useState } from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import FAQForm from '../components/FAQForm/FAQForm';
import FAQTitle from '../components/FAQTitle/FAQTitle';
import FAQList from '../components/FAQList/FAQList';

function Questions() {
  const urlDatabase = 'https://data-processing-services-default-rtdb.europe-west1.firebasedatabase.app/quetions.json';
  
  const [newQuery, setNewQuery] = useState();
  const [questionsData, setQuestionsData] = useState();
  
  useEffect(() => { 
    fetch(urlDatabase)
      .then(response => { return response.json(); })
      .then(data => { setQuestionsData(data); });
  }, [newQuery]);
  
  const addQueryHandler = (queryData) => { 
    fetch(
      urlDatabase,
      { method: 'POST', body: JSON.stringify(queryData), headers: { "Content-Type": "application/json" }, }
    )
      .then(() => { setNewQuery(queryData); });
  };

  return (
    <>
      <Header />
      <section style={{ margin: '100px' }}>
        <FAQTitle />
        <FAQList queryData={questionsData} />
        <FAQForm onAddQuery={addQueryHandler} />
      </section>
      <Footer />
    </>
  );

}

export default Questions;