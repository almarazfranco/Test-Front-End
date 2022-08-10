import { contextProduct } from './contextProduct';
import { ProductContex } from './ProductContex';

export const ProductProvider = ({children}) => {

  const contextValue = contextProduct();

  return (

    <ProductContex.Provider value={ contextValue }>
      { children }
    </ProductContex.Provider>

  )

};