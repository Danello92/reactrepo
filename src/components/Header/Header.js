import React from 'react';
import {NavLink, Link} from 'react-router-dom';
import Container from '../Container/Container';
import style from '../Header/Header.scss';
import Icon from '../Icon/Icon';
import {settings} from '../../data/dataStore';
import Search from '../Search/SearchContainer';

class Header extends React.Component{

  render(){
    return(
      <header className={style.component}>
        <Container>
          <div className={style.wrapper}>
            <Link to='/' className={style.logo}>
              <Icon name={settings.iconDefault}/>
            </Link>
            <Search />
            <nav>
              <NavLink exact to='/' activeClassName='active'>Home</NavLink>
              <NavLink exact to='/info' activeClassName='active'>Info</NavLink>
              <NavLink exact to='/FAQ' activeClassName='active'>FAQ</NavLink>
            </nav>
          </div>
        </Container>
      </header>
    );
  }
}
export default Header;