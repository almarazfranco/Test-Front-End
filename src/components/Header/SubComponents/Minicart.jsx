

const Minicart = ({cartLogo, totalCart}) => {

  return (

    <button className="mini-cart">
      <img src={cartLogo} alt="cartLogo" />
      <div className="cart-counter">
        <span>{totalCart}</span>
      </div>
    </button>

  )

};

export {Minicart};