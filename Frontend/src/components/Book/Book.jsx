import React from "react";
import { MdDelete } from "react-icons/md";
import { FaStar, FaRegStar } from "react-icons/fa";
import './Book.css';
import Tooltip from "../Tooltip/Index";

const Book = ({
  id,
  name,
  image,
  alt,
  description, 
  colorBackgroud, 
  deleteBook, 
  toggleFavorite,
  favorite }) => {

  // Atualizando o onClick para ser uma função de callback
  const handleFavoriteClick = () => {
    toggleFavorite(id);
  };

  return (
    <div className="book" key={id}>
      <div className="header" style={{ backgroundColor: colorBackgroud }}>
         <figure>
          <img src={image} alt={alt} />
        </figure>
      </div>
      <div className="footer">
          <span className="favorite">
            <Tooltip
              icon={
                favorite ? (
                  <FaStar color={colorBackgroud} fontSize={24} onClick={handleFavoriteClick} />
                ) : (
                  <FaRegStar color={colorBackgroud} fontSize={24} onClick={handleFavoriteClick} />
                )
              }
              tooltipText={favorite ? "Favorito" : "Não Favorito"}
            />
          </span>
        <h4>{name}</h4>
        <p>{description}</p>
          <span className="delete">
            <Tooltip
              icon={
                <MdDelete
                  className="icon-delete"
                  color={colorBackgroud}
                  fontSize={26}
                  onClick={() => deleteBook(id)} // Mova o onClick para o ícone
                />
              }
              tooltipText="Deletar Livro"
            />
          </span>
      </div>
    </div>
  );
};

export default Book;
