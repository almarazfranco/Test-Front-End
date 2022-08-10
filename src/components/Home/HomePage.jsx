import bannerImgDesktop from '../../assets/banner.png';
import bannerImgMobile from '../../assets/banner-mb.png';
import '../../css/home.css';
import MainCarousel from "./MainCarousel/MainCarousel";
import ProductCarousel from './ProductCarousel/ProductCarousel';
import Newsletter from './Newsletter/Newsletter';


const HomePage = () => {

  /* Carousel banner */
  const dataCarousel = [
    {
      desktop: bannerImgDesktop,
      mobile: bannerImgMobile,
      smallText: 'Olá, o que você está buscando?',
      bigText: 'Criar ou migrar seu \n e-commerce?' 
    },
    {
      desktop: bannerImgDesktop,
      mobile: bannerImgMobile,
      smallText: 'Olá, o que você está buscando?',
      bigText: 'Criar ou migrar seu \n e-commerce?' 
    },
    {
      desktop: bannerImgDesktop,
      mobile: bannerImgMobile,
      smallText: 'Olá, o que você está buscando?',
      bigText: 'Criar ou migrar seu \n e-commerce?' 
    },
    {
      desktop: bannerImgDesktop,
      mobile: bannerImgMobile,
      smallText: 'Olá, o que você está buscando?',
      bigText: 'Criar ou migrar seu \n e-commerce?' 
    }
  ];

  return (

    <div className="home">

      <MainCarousel dataCarousel={dataCarousel}/>

      <ProductCarousel />

      <Newsletter />
      
    </div>

  )
};

export { HomePage } ;