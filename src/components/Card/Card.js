import React from 'react';
import styles from './Card.scss';
import {settings} from '../../data/dataStore.js';
import Column from '../Column/Column';
import Creator from '../Creator/Creator';
import PropTypes from 'prop-types';

class Card extends React.Component {
  
  static propTypes = {
    title: PropTypes.string,
  }

    render() {
      return (
        <section className={styles.component}>
          {this.props.title}
        </section>
      )
    }
  }
  export default Card;