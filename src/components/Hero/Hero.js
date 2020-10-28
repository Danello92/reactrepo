import React from 'react';
import styles from './Hero.scss';
import PropTypes from 'prop-types';

<<<<<<< HEAD
const Hero = props => (
  //wyrzucamy propsy z list
      <header className={styles.component}>
        <h2 className={styles.title}>{props.titleText}</h2>
        <img src={props.image} className={styles.image}></img>
      </header>
    );
    Hero.propTypes ={
      titleText: PropTypes.node.isRequired,
      image: PropTypes.node.isRequired,
    };
   
  


=======

const Hero = props => (
      <header className={styles.component}>
        <h2 className={styles.title}>{props.titleText}</h2>
        <img src="http://uploads.kodilla.com/bootcamp/fer/11.react/space.png" className={styles.image}></img>
      </header>
    );
>>>>>>> refs/remotes/origin/main
export default Hero;