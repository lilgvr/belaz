import React, { useEffect } from 'react';
import Search from "../components/Search/Search.jsx";
import BreadcrumbDiscount from "../components/Breadcrumb/BreadcrumbDiscount.jsx";
import ProductDiscount from "../components/Product/ProductDiscount.jsx";
import Preloader from '../components/Preloader/Preloader.jsx';
import { useDisableScroll } from "../hooks/useDisableScroll.js";
import { GetSearch } from "../store/slice/searcSlice.js";

const Discount = (props) => {
  useEffect(() => {

    props.GetAvailables(
      1, 20
    );
    props.GetFilter()

  }, [])

  useDisableScroll(props.availablesLoading)

  return (
    <div className="content">
      { props.availablesLoading ? <Preloader/> : null }
      <Search GetSearch={ props.GetSearch }/>
      <BreadcrumbDiscount/>
      <ProductDiscount GetAvailables={ props.GetAvailables } availables={ props.availables }
                       GetAvailablesFiltered={ props.GetAvailablesFiltered } GetFilter={ props.GetFilter }
                       filter={ props.filter }/>

    </div>
  );
};

export default Discount;
