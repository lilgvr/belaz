import React, { useState } from 'react';
import style from "./SearchMobile.module.scss";

const SearchMobile = (props) => {
  const [searchValue, setSearchValue] = useState("");

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  }

  const handleSubmit = () => {
    props.GetSearch(1, 20, searchValue)
  }

  return (
    <input
      type="text"
      className={ style.searchMobile }
      value={ searchValue }
      onChange={ handleChange }
      onSubmit={ handleSubmit }
      placeholder="Искать товары и категории"
    />
  );
}

export default SearchMobile;
