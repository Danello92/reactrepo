import React from 'react';
import style from '../Container/Container.scss';
import PropTypes from 'prop-types';

class Container extends React.Component {
    static propTypes = {
      children: PropTypes.string,
    }
    render(){
      const {children} = this.props;
      return(
        <div className={style.component}>{children}</div>
      );
    }
}
export default Container;