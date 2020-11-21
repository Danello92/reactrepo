import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import { infoPage } from '../../data/dataStore.js';
import styles from './Info.scss';

const Info = () => (
  <Container>
    <Hero titleText={infoPage.title} imageProp={infoPage.image} />
    <h1 className={styles.subtitle}>{infoPage.text}</h1>
    <p className={styles.subtitle}>{infoPage.content}</p>
  </Container>
);

export default Info;