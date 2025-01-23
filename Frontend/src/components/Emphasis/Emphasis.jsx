import React from 'react';
import './Emphasis.css';
import ButtonModal from '../Button/ButtonModal/ButtonModal';

const Emphasis = ({ img, title, description, categories, data }) => {
  return (
    <div className="emphasis">
      <div className='emphasis-info'>
        <h1 className='emphasis-title'>Livro Destaque</h1>
        <h2>{title}</h2>
        <p>{description}</p>
        <div className='emphasis-button'>
          <ButtonModal
            categories={categories} 
            changeBook={data}
          />
        </div>
      </div>
      <figure className="emphasis-image">
        <figcaption>
          <h2>{title}</h2>
        </figcaption>
        {img ? (
          <img src={img} alt={title} />
        ) : (
          <p>Sem imagem disponível</p>
        )}
      </figure>
    </div>
  );
};

export default Emphasis;
