import React, { useState } from 'react'
import Modal from '../../Modal/Modal';
import './ButtonModal.css';

const ButtonModal = ({ categories, changeBook }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  return (
    <div className="button-modal">
      <button onClick={toggleModal}>
        Alterar Livro
      </button>
      {isModalOpen && (
        <Modal
          className={isModalOpen ? 'ativo' : ''}
          setModal={setIsModalOpen}
          categories={categories}
          changeBook={changeBook}
        />
      )}
    </div>
  );
};

export default ButtonModal;
