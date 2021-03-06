import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
// import Card from '../Card/Card.js';
//import Creator from '../Creator/Creator.js';
// import {settings} from '../../data/dataStore.js';
import Icon from './Icon.js';

class Column extends React.Component {
  // state = {
  //   cards: this.props.cards || [],
  // }
  static propTypes = {
    title: PropTypes.string,
    icon: PropTypes.string,
    cards: PropTypes.array,
  }
  // addCard(title){
  //   this.setState(state => (
  //     {
  //       cards: [
  //         ...state.cards,
  //         {
  //           key: state.cards.length ? state.cards[state.cards.length-1].key+1 : 0,
  //           title,
  //           icon: 'list-alt',
  //           cards:[],
  //         },
  //       ],
  //     }
  //   ));}
  render() {
    const {title, icon, cards}= this.props;
    return (
      <section className={styles.component}>
        <h3 className={styles.title}>
          <span className={styles.icon}>
            <Icon name={icon}/>
          </span>{title}
        </h3>
        {cards.map(columnData => (
          <Column key={columnData.id} {...columnData} />
        ))}
        {/* {this.state.cards.map(({key, ...cardProps}) => (<Card key={key} {...cardProps} />
        ))}
        <div className={styles.creator}>
          <Creator text={settings.cardCreatorText} action={title => this.addCard(title)}/>
        </div>, */}
      </section>
    );
  }
}
export default Column;