import React from 'react';
import Benefits from "../../components/Benefits/Benefits.jsx";
import NavMobile from "../../components/mobile/NavMobile/NavMobile.jsx";
import SearchMobile from "../../components/mobile/NavMobile/Search/SearchMobile.jsx";
import NewsForm from "../../components/News/NewsForm.jsx";

const MainMobile = (props) => {
  return (
    <div>
      <NavMobile GetSearch={ props.GetSearch }/>
      <Benefits benefits={ props.benefits }/>
      <NewsForm/>
    </div>
  );
}

export default MainMobile;
