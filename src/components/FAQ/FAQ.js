import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import { FAQPage } from '../../data/dataStore';
import styles from './FAQPage.scss';

const FAQ = () => (
  <Container>
    <Hero titleText={FAQPage.title} imageProp={FAQPage.image} />
    <h1 className={styles.subtitle}>{FAQPage.text}</h1>
    <p className={styles.subtitle}>{FAQPage.content}</p>
  </Container>
);

export default FAQ;