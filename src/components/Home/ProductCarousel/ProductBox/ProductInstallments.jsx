
const ProductInstallments = ({installments}) => {

  const options = { style: 'currency', currency: 'BRL' };
  const numberFormat = new Intl.NumberFormat('pt-BR', options);

  return (

    <div className="product-installments">
      <p>
        {
          installments.length !== 0 && 
          (
            `ou em ${installments[0].quantity} de ${numberFormat.format(installments[0].value)}`
          )
        }
      </p>
    </div>

  )

};

export {ProductInstallments};