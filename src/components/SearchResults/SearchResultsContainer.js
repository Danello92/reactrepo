import {connect} from 'react-redux';
import SearchResults from './SearchResults';
import getColumnsForList from '../../../redux/columnsRedux';
import getCardsForList from '../../../redux/cardsRedux';

const mapStateToProps = (state, props) => {
  console.log(props);
  const searchString = props.match.params.id;

  return {
    cards: getCardsForList(state, searchString),
    columns: getColumnsForList(state, searchString ),
    lists: state.lists,
  };
};

export default connect(mapStateToProps)(SearchResults);