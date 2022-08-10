import {Link } from "react-router-dom";
import callLogo from '../../assets/call.svg';
import corebizFooterLogo from '../../assets/corebiz-footer.svg';
import createdByLogo from '../../assets/created-by.svg';
import mailLogo from '../../assets/mail.svg';
import vtexLogo from '../../assets/vtex.svg';
import '../../css/footer.css';

const Footer = () => {
  return (
    <footer> 

      <div className="container">

          {/* Addres column */}
          <div className="addres-column">
            <h4>Localização</h4>
            <div className="separator"></div>
            <div className="addres-info">
              <a href="https://goo.gl/maps/qi7deQ2yrkbZUY4q7" target="_blank">Avenida Andrômeda, 2000. Bloco 6 e 8</a> 
              <p>Alphavile SP</p>
              <a href="mailto:brasil@corebiz.ag" target="_blank">brasil@corebiz.ag</a>
              <a href="tel:+551130901039" target="_blank">+55 11 3090 1039  </a>
            </div>
          </div>

          {/* Contact column */}
          <div className="contact-column">
            <Link to="/contact">
              <img src={mailLogo} alt="corebiz-logo" />
              <span>ENTRE EM CONTATO</span>
            </Link>
            <a href="tel:+551130901039" target="_blank">
              <img src={callLogo} alt="corebiz-logo" />
              <span>FALE COM O NOSSO <br />
                CONSULTOR ONLINE</span>
            </a>
          </div>

          {/* Logos info column */}
          <div className="logos-info">
            <a href="https://www.corebiz.ag/es/" target="_blank" className="corbiz-logos-footer">
              <img src={createdByLogo} alt="createdByLogo" />
              <img src={corebizFooterLogo} alt="corebizFooterLogo" />
            </a>
            <a href="https://vtex.com/ar-es/" target="_blank">
              <img src={vtexLogo} alt="vtexLogo" />
            </a>
          </div>
      </div>

    </footer>
  )
};

export { Footer } ;