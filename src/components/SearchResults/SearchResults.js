import React from 'react';
import styles from './SearchResults.scss';
import Card from '../Card/Card';
import propTypes from 'prop-types';
import Container from '../Container/Container';


class SearchResults extends React.Component {
  static propTypes = {
    cards: propTypes.array,
  }
  render() {
    const {cards} = this.props;
    return (
      <Container>
        <section className={ styles.component }>
        {cards.map(cardData => (
          <Card key={cardData.id} {...cardData} />
        ))}
        </section>
      </Container>
    );
  }
}

export default SearchResults;