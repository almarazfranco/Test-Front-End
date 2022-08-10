import { ButtonAddToCart, ProductImage, ProductName, ProductPrice, ProductInstallments } from "./";

const ProductBox = ({product}) => {

  // Product data
  const {
    productName,
    stars,
    imageUrl,
    listPrice,
    price,
    installments
  } = product;

  // Product highlight
  const producHighlight = listPrice ? true : false;

  // Starts
  let review = ``;

  for(var index = 1; index <= stars; index++ ) {
    review += `
      <img src="${"data:image/svg+xml,%3Csvg width='12' height='11' viewBox='0 0 12 11' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M5.69478 8.68583L9.21415 10.649L8.28021 6.94899L11.3896 4.45951L7.29501 4.13846L5.69478 0.648987L4.09454 4.13846L0 4.45951L3.10935 6.94899L2.17541 10.649L5.69478 8.68583Z' fill='%23F8475F'/%3E%3C/svg%3E%0A"}" />
    `
  }

  return (

    <div className="product-box">

      <ProductImage imageUrl= {imageUrl} producHighlight={producHighlight} />

      <div className="product-content-info">

        <ProductName productName={productName} />

        <div className="review" dangerouslySetInnerHTML={{__html: review}}></div>

        <ProductPrice listPrice={listPrice} price={price} />

        <ProductInstallments installments={installments} />

        <ButtonAddToCart product={product} />

      </div>

    </div>

  )
};

export default ProductBox;