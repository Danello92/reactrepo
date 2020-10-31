import {connect} from 'react-redux';
import Column from '../Column/Column.js';

export const getColumnsForList = ({cards}, listId) => cards.filter(cards => cards.listId == listId);

const mapStateToProps = (state, props) => ({
  cards: getColumnsForList(state, props.id),
});

export default connect(mapStateToProps)(Column);