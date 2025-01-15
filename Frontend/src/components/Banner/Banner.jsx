import './Banner.css';
import bannerImg from '../../assets/imagens/books.png';
export const Banner = () => {
  return (
    <header className= "banner">
      <figure> 
        <img  src={bannerImg} alt="" />
      </figure>
    </header>
  )
}

 