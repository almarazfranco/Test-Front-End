import { useContext } from "react";
import { ProductContex } from "../../../context/ProductContex";
import ProductBox from "./ProductBox/ProductBox";
import '../../../css/product-box.css'

const ProductCarousel = () => {

const {productData} = useContext(ProductContex);

  return (
    <>
      <div className="product-carousel">
        <div className="container">
          <h3>Mais Vendidos</h3>
          <div className="separator-title"></div>
   
          <div className="product-list-container">
            <div className="product-list">
              {
                
                productData.map((product) => {
                  
                  return (
                    <ProductBox product={product} key= {product.productId} />
                  )

                })

              }
            </div>
          </div>

        </div>
      </div>
    </>
  )
};

export default ProductCarousel;