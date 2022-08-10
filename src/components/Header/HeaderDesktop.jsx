import {Link } from "react-router-dom";
import headerLogo from '../../assets/corebiz-logo-header-ds.svg';
import cartLogo from '../../assets/cart.svg';
import searchZoomLogo from '../../assets/search-zoom.svg';
import userLogo from '../../assets/user.svg';
import { useContext } from "react";
import { ProductContex } from "../../context/ProductContex";
import {Minicart, SearchBar, Login} from "./SubComponents/";

const HeaderDesktop = () => {

  const {totalCart} = useContext(ProductContex);

  return (

    <div className="container">

      <Link to="/">
        <img src={headerLogo} alt="corebiz-logo" />
      </Link>

      <SearchBar searchZoomLogo={searchZoomLogo} />

      <div className="login-cart">

        <Login userLogo= {userLogo} />

        <Minicart cartLogo= {cartLogo} totalCart= {totalCart} />

      </div>
    
    </div>

  )

};

export default HeaderDesktop;