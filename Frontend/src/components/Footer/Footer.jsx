import './Footer.css';
import logoImg from '../../assets/imagens/footer-logo.svg';
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='footer'>

    <section className='logo'>
            <img src={logoImg} alt="" />
    </section>
    
      <section className='footer-social'>
        <ul>
          <li>
            <a href="https://www.facebook.com/profile.php?viewas=100000686899395&id=100009024418011" target='_blank'>
            <FaFacebookSquare style={{color:'fff', fontSize: 30 }} />
            </a>
        </li>
        <li>
            <a href="https://www.linkedin.com/in/lucas-garcia-l/" target='_blank'>
            <FaLinkedin  style={{color:'fff', fontSize: 30 }} />
            </a>
        </li>
        <li>
            <a href="https://github.com/Lucasgarcc" target='_blank'>
             <FaGithubSquare style={{color:'fff', fontSize: 30 }}/>
            </a>
        </li>
      </ul>
    </section>

    <section className='copyright'>
            <p>
              Desenvolvido por Lucas Garcia.
            </p>
    </section>
    </footer>
 
  )
}

export default Footer;