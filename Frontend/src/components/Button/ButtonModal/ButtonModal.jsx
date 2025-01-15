import React, { useState } from 'react'
import Modal from '../../Modal/Modal';
import './ButtonModal.css';

const ButtonModal = ({ categories, registerBook, registerCategory }) => {
  const [modal, setModalOpen] = useState(false)

  return (
    <>
      <div className='button-modal'>
        <button onClick={() => setModalOpen(true)}>
          Alterar Livro
        </button>
        {modal && (
          <Modal 
            className={modal ? 'ativo': ''} 
            setModal={setModalOpen}
            categories={categories}
            registerBook={registerBook} 
            registerCategory={registerCategory}
          />
        )}
      </div>

    </>
  );
};

export default ButtonModal;
