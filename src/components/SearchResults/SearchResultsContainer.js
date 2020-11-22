import { connect } from 'react-redux';
import SearchResults from './SearchResults';
import { getCardsForSearch } from '../../../redux/cardsRedux';

const mapStateToProps = (state, props) => {
  const inputString = props.match.params.id;
  return {
    cards: getCardsForSearch(state, inputString),
  };
};

export default connect(mapStateToProps)(SearchResults);