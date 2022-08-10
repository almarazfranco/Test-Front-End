
const ProductPrice = ({listPrice, price}) => {

  // Format price
  const options = { style: 'currency', currency: 'BRL' };
  const numberFormat = new Intl.NumberFormat('pt-BR', options);

  const priceFormat = numberFormat.format(price);
  const listPriceFormat = listPrice && numberFormat.format(listPrice);

  return (

    <div className="product-price">
      <p className="listPrice">
        {
          listPriceFormat && (
            `de ${listPriceFormat}`
          )
        }
      </p>
      <p className="price"> por {priceFormat} </p>
    </div>

  )

};

export {ProductPrice} ;