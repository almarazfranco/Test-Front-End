import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { useContext } from "react";
import { ProductContex } from "../../../context/ProductContex";


const MainCarousel = ({dataCarousel}) => {

  const {desktopScreen} = useContext(ProductContex);

  const settings = {
    infiniteLoop: true,
    showThumbs: false,
    showStatus: false,
    showArrows: false,
    swipeable: true,
    emulateTouch: true
  };

  return (

    <Carousel {...settings} >

      {
        dataCarousel.map((item, index) => {
          
          let smallText = item.smallText.replace('\n', '<br />');
          let bigText = item.bigText.replace('\n', '<br />');

          return (
            <div className="item-carousel" key={index}>
              <img src={ desktopScreen ? item.desktop : item.mobile } />
              <div className="banner-text container">
                <span dangerouslySetInnerHTML={{__html: smallText}}></span>
                <h4 dangerouslySetInnerHTML={{__html: bigText}}></h4>
              </div>
            </div>
          )

        }) 
      }

    </Carousel>

  );
};

export default MainCarousel;