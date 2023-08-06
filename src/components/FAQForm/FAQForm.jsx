import React from 'react';
import { useRef } from "react";

import styles from './FAQForm.module.scss';
import data from '../../assets/data'

function FAQForm(props) {
    const { textarea, input, bttn } = data.faq.form;

    const queryInputRef = useRef();
    const emailInputRef = useRef();
    
    const submitHandler = () => {
        const faqData = {
            answer: 'Thank you for your inquiry! We have acknowledged your request and are currently in the process of formulating a response.',
            userQuery: queryInputRef.current.value,
            userEmail: emailInputRef.current.value,
        };
        props.onAddQuery(faqData);
     };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
        <div className={styles.input}>
            <label htmlFor='query' className={styles.title}>{textarea}</label>
              <textarea id='query' required className={styles.text} ref={queryInputRef}></textarea>
        </div>
        <div className={styles.input}> 
            <label htmlFor='email' className={styles.title}>{input}</label>
            <input type='text' id='email' required className={styles.text} ref={emailInputRef}></input>
        </div>
          <button type='submit' className={styles.bttn}>{bttn}</button>
    </form>
  )
}

export default FAQForm;