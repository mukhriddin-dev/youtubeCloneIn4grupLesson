import React from 'react';
import logo from '../images/logo.png';
import Search from './Search';

function Navbar(props) {



  const {onSubmit} = props;
  return (
    <div className='navbar'>
      <div className="nav-brand">
       {props.children} <img src={logo} alt="logo" className='brand-logo' />
      </div>
      
      <Search onSubmit={onSubmit}/>
    </div>
  );
}

export default Navbar;