import { useForm } from '../../../../hooks/';

const NewsletterForm = () => {

  const {
    name,
    email,
    onChangeForm,
    onSubmitForm,
    validationName,
    validationEmail,
    respStatus,
    resetForm
  } = useForm(
    {
      name: '',
      email: '',
    },
    'https://corebiz-test.herokuapp.com/api/v1/newsletter'
  );

  return (

    <>
    
      {
        !respStatus
        ? (
            <div className="newsletter-form">
              <h3>Participe de nossas news com promoções e novidades!</h3>
        
              <form onSubmit={ (e) => onSubmitForm(e) }>
        
                <div className='input-container'>
                  <input
                    type="text"
                    placeholder="Digite seu nome"
                    name='name'
                    value={name}
                    onChange={ onChangeForm }
                  />
        
                  {validationName.name === 'incorrect' && (<span>Preencha com seu nome completo</span>)}
                </div>
        
                <div className='input-container'>
                  <input
                    type="mail"
                    placeholder="Digite seu email"
                    name='email'
                    value={email}
                    
                    onChange={ onChangeForm }
                  />
        
                  {validationEmail.email === 'incorrect' && (<span>Preencha com um e-mail válido</span>)}
                </div>
        
                <button type="submit">Eu quero!</button>
              </form>
              
            </div>
          )
        : (
          <div className="form-succes">
            <h4>Seu e-mail foi cadastrado com sucesso!</h4>
            <p>A partir de agora você receberá as novidade e ofertas exclusivas.</p>
            <button className='reset-form' onClick={resetForm}>Cadastrar novo e-mail</button>
          </div>
        )
      }

    </>

  )

};

export default NewsletterForm;