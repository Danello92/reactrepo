import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero.js';
import Column from '../Column/Column.js';
import PropTypes from 'prop-types';
import {settings} from '../../data/dataStore.js';
import ReactHtmlParser from 'react-html-parser';
import Creator from '../Creator/Creator.js';

//definicje propsów z app
class List extends React.Component {
    state = {
      columns: this.props.columns || [],
    }
  static propTypes = {
    title: PropTypes.node.isRequired,
    description: PropTypes.node,
    image: PropTypes.string.isRequired,
    columns: PropTypes.array.isRequired,
    addColumn: PropTypes.func,
  }
  static defaultProps = {
    description: settings.defaultListDescription,
  }
  addColumn(title){
    this.setState(state => (
      {
        columns: [
          ...state.columns,
          {
            key: state.columns.length ? state.columns[state.columns.length-1].key+1 : 0,
            title,
            icon:  'list icon' ,
            cards: [],
          },
        ],
      }
    ));
  }
  render() {
    return (
      <section className={styles.component}>
        <Hero titleText={this.props.title}image={this.props.image}/>
        <div className={styles.description}>{ReactHtmlParser(this.props.description)}</div>
        <div className={styles.columns}>
          {this.state.columns.map(({key, ...columnProps}) => (
            <Column key={key} {...columnProps} />
          ))}
        </div>
        <div className={styles.creator}>
          <Creator text={settings.columnCreatorText} action={title => this.addColumn(title)}/>
        </div>
      </section>
    );
  }
}
export default List;
