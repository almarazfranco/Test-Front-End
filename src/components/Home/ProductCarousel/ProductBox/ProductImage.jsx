
const ProductImage = ({imageUrl, producHighlight}) => {

  return (

    <div className="product-image">
    <img src={imageUrl} alt="productName" />
    {
      producHighlight && (
        <div className="product-hightlight">
          <span>OFF</span>
        </div>
      )
    }
  </div>

  )

};

export {ProductImage};