import React from 'react'
import './Modal.css'
import ChangeBook from '../ChangeBook/ChangeBook'

function Modal({ setModal, className, categories }) {
  const closeModal = () => setModal(false);

  return (
    <div className={`modal ${className}`} role="dialog" aria-hidden="false">
      <div className="modal-content">
        <button className="modal-close" onClick={closeModal} aria-label="Fechar">
          <span className="x-icon"></span>
        </button>
        <div className="modal-content-info">
          <ChangeBook
            categories={categories}
          />
        </div>
      </div>
    </div>
  );
}

export default Modal;