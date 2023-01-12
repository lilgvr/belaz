import React from 'react';
import SearchMobile from "./Search/SearchMobile.jsx";
import style from "./NavMobile.module.scss";

const NavMobile = (props) => {
  return (
    <nav className={ style.navMobile }>
      <SearchMobile GetSearch={ props.GetSearch }/>
    </nav>
  );
}

export default NavMobile;
