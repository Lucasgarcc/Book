import './Banner.css';
import bannerImg from '../../assets/imagens/books.png';
import { FaArrowPointer } from "react-icons/fa6";

export const Banner = () => {
  return (
    <header className= "banner">
      
      <figure> 
      <h1> 
        <span className='title-banner'>
        Inspire e Seja Inspirado  <FaArrowPointer color='#16C47F'/>
        </span>
        Compartilhe Seus Livros Favoritos e Incentive a Leitura
        <span className='detail-title'>!</span></h1>
        <img  src={bannerImg} alt="" />
      </figure>
    </header>
  )
}

 