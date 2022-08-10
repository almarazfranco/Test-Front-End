import '../../css/header.css';
import { useContext } from "react";
import { ProductContex } from "../../context/ProductContex";
import HeaderDesktop from './HeaderDesktop';
import HeaderMobile from './HeaderMobile';

const Header = () => {

  const {desktopScreen} = useContext(ProductContex);

  return (

    <header>

      {
      desktopScreen
        ? (
          <HeaderDesktop />
        )
        : (
          <HeaderMobile />
        )
      }

    </header>

  )
};

export { Header } ;