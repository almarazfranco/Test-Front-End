
const Login = ({userLogo}) => {

  return (
    
    <button className="login">
      <img src={userLogo} alt="userLogo" />
      <span>Minha Conta</span>
    </button>

  )

};

export {Login};