
import menuLogo from '../../assets/menu-mobile.svg';
import headerLogo from '../../assets/corebiz-logo-header-mb.svg';
import cartLogo from '../../assets/cart.svg';
import searchZoomLogo from '../../assets/search-zoom.svg';
import {Link } from "react-router-dom";
import { useContext } from "react";
import { ProductContex } from "../../context/ProductContex";
import { MenuMobile, Minicart, SearchBar } from './SubComponents/';

const HeaderMobile = () => {

  const {totalCart} = useContext(ProductContex);

  return (

    <div className="container">
      
      <div className="top-row-header-mb">
        <MenuMobile menuLogo={menuLogo} />

        <Link to="/">
          <img src={headerLogo} alt="corebiz-logo" />
        </Link>

        <Minicart cartLogo= {cartLogo} totalCart= {totalCart} />
      </div>

      <div className="search-bar-mobile">
        <SearchBar searchZoomLogo={searchZoomLogo} />
      </div>

    </div>

  )

};

export default HeaderMobile;