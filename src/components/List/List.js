import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero.js'
import Column from '../Column/Column.js'
import PropTypes from 'prop-types';

//definicje propsów z app
class List extends React.Component {
  static propTypes = {
    title: PropTypes.node.isRequired,
    children: PropTypes.node.isRequired,
    image: PropTypes.node.isRequired,
    
  }
  static defaultProps = {
    children: <p>I can do all the things</p>
  }
  
  render() {
    return (
      <section className={styles.component}>

       <Hero titleText={this.props.title}
             image={this.props.image}/>
       <div className={styles.description}>
        {this.props.children}
      </div>
      <div className={styles.columns}>
        <Column><p>Animal</p></Column>
        <Column><p>Robot</p></Column>
        <Column><p>Bugs</p></Column>
      </div>

       <Hero titleText={this.props.title} />

      </section>
    )
  }
}

export default List;
