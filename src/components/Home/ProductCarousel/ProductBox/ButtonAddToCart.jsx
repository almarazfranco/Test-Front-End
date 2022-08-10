import { useContext } from "react";
import { ProductContex } from "../../../../context/ProductContex";


const ButtonAddToCart = ({product}) => {
  
  const {handleNewTodo} = useContext(ProductContex);

  return (

    <button
      className="add-to-cart-button"
      onClick={() => {
        handleNewTodo(product);
      }}
    >
      Comprar
    </button>

  )

};

export {ButtonAddToCart}; 